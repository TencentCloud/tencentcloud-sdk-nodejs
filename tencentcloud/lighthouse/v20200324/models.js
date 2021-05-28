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
 * DescribeInstancesTrafficPackages请求参数结构体
 * @class
 */
class DescribeInstancesTrafficPackagesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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
 * AssociateInstancesKeyPairs返回参数结构体
 * @class
 */
class AssociateInstancesKeyPairsResponse extends  AbstractModel {
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
 * 描述了镜像重置信息
 * @class
 */
class ResetInstanceBlueprint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像详细信息
         * @type {Blueprint || null}
         */
        this.BlueprintInfo = null;

        /**
         * 实例镜像是否可重置为目标镜像
         * @type {boolean || null}
         */
        this.IsResettable = null;

        /**
         * 不可重置信息.当镜像可重置时为""
         * @type {string || null}
         */
        this.NonResettableMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BlueprintInfo) {
            let obj = new Blueprint();
            obj.deserialize(params.BlueprintInfo)
            this.BlueprintInfo = obj;
        }
        this.IsResettable = 'IsResettable' in params ? params.IsResettable : null;
        this.NonResettableMessage = 'NonResettableMessage' in params ? params.NonResettableMessage : null;

    }
}

/**
 * DescribeInstancesTrafficPackages返回参数结构体
 * @class
 */
class DescribeInstancesTrafficPackagesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例流量包详情数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例流量包详情列表。
         * @type {Array.<InstanceTrafficPackage> || null}
         */
        this.InstanceTrafficPackageSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.InstanceTrafficPackageSet) {
            this.InstanceTrafficPackageSet = new Array();
            for (let z in params.InstanceTrafficPackageSet) {
                let obj = new InstanceTrafficPackage();
                obj.deserialize(params.InstanceTrafficPackageSet[z]);
                this.InstanceTrafficPackageSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
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
 * DeleteKeyPairs返回参数结构体
 * @class
 */
class DeleteKeyPairsResponse extends  AbstractModel {
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
 * 描述地域信息。
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域名称，例如，ap-guangzhou。
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域描述，例如，华南地区(广州)。
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域是否可用状态。
         * @type {string || null}
         */
        this.RegionState = null;

        /**
         * 是否中国大陆地域
         * @type {boolean || null}
         */
        this.IsChinaMainland = null;

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
        this.RegionState = 'RegionState' in params ? params.RegionState : null;
        this.IsChinaMainland = 'IsChinaMainland' in params ? params.IsChinaMainland : null;

    }
}

/**
 * DescribeBlueprintInstances返回参数结构体
 * @class
 */
class DescribeBlueprintInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的镜像实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像实例列表信息。
         * @type {Array.<BlueprintInstance> || null}
         */
        this.BlueprintInstanceSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.BlueprintInstanceSet) {
            this.BlueprintInstanceSet = new Array();
            for (let z in params.BlueprintInstanceSet) {
                let obj = new BlueprintInstance();
                obj.deserialize(params.BlueprintInstanceSet[z]);
                this.BlueprintInstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例操作限制列表。
 * @class
 */
class InstanceDeniedActions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 操作限制列表。
         * @type {Array.<DeniedAction> || null}
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
                let obj = new DeniedAction();
                obj.deserialize(params.DeniedActions[z]);
                this.DeniedActions.push(obj);
            }
        }

    }
}

/**
 * 描述了实例可变更的套餐。
 * @class
 */
class ModifyBundle extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更改实例套餐后需要补的差价。
         * @type {Price || null}
         */
        this.ModifyPrice = null;

        /**
         * 变更套餐状态。取值：
<li>SOLD_OUT：套餐售罄</li>
<li>AVAILABLE：支持套餐变更</li>
<li>UNAVAILABLE：暂不支持套餐变更</li>
         * @type {string || null}
         */
        this.ModifyBundleState = null;

        /**
         * 套餐信息。
         * @type {Bundle || null}
         */
        this.Bundle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModifyPrice) {
            let obj = new Price();
            obj.deserialize(params.ModifyPrice)
            this.ModifyPrice = obj;
        }
        this.ModifyBundleState = 'ModifyBundleState' in params ? params.ModifyBundleState : null;

        if (params.Bundle) {
            let obj = new Bundle();
            obj.deserialize(params.Bundle)
            this.Bundle = obj;
        }

    }
}

/**
 * CreateInstanceSnapshot返回参数结构体
 * @class
 */
class CreateInstanceSnapshotResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照 ID。
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePriceRenewInstances返回参数结构体
 * @class
 */
class InquirePriceRenewInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 询价信息。
         * @type {Price || null}
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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFirewallRules返回参数结构体
 * @class
 */
class DeleteFirewallRulesResponse extends  AbstractModel {
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
 * DescribeGeneralResourceQuotas请求参数结构体
 * @class
 */
class DescribeGeneralResourceQuotasRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名列表，取值为：USER_KEY_PAIR、INSTANCE、SNAPSHOT。
         * @type {Array.<string> || null}
         */
        this.ResourceNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceNames = 'ResourceNames' in params ? params.ResourceNames : null;

    }
}

/**
 * DeleteKeyPairs请求参数结构体
 * @class
 */
class DeleteKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对 ID 列表，每次请求批量密钥对的上限为 10。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * 描述了操作系统所在块设备即系统盘的信息。
 * @class
 */
class SystemDisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统盘类型。
取值范围： 
<li> LOCAL_BASIC：本地硬盘</li><li> LOCAL_SSD：本地 SSD 硬盘</li><li> CLOUD_BASIC：普通云硬盘</li><li> CLOUD_SSD：SSD 云硬盘</li><li> CLOUD_PREMIUM：高性能云硬盘</li>
         * @type {string || null}
         */
        this.DiskType = null;

        /**
         * 系统盘大小，单位：GB。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 系统盘ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DiskType = 'DiskType' in params ? params.DiskType : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;

    }
}

/**
 * ResetInstance请求参数结构体
 * @class
 */
class ResetInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 镜像 ID。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。
         * @type {string || null}
         */
        this.BlueprintId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;

    }
}

/**
 * DescribeBundles返回参数结构体
 * @class
 */
class DescribeBundlesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐详细信息列表。
         * @type {Array.<Bundle> || null}
         */
        this.BundleSet = null;

        /**
         * 符合要求的套餐总数，用于分页展示。
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

        if (params.BundleSet) {
            this.BundleSet = new Array();
            for (let z in params.BundleSet) {
                let obj = new Bundle();
                obj.deserialize(params.BundleSet[z]);
                this.BundleSet.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquirePriceRenewInstances请求参数结构体
 * @class
 */
class InquirePriceRenewInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待续费的实例。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }

    }
}

/**
 * 套餐折扣详情（仅用于控制台调用询价相关接口返回）。
 * @class
 */
class DiscountDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 计费时长。
         * @type {number || null}
         */
        this.TimeSpan = null;

        /**
         * 计费单元。
         * @type {string || null}
         */
        this.TimeUnit = null;

        /**
         * 总价。
         * @type {number || null}
         */
        this.TotalCost = null;

        /**
         * 折后总价。
         * @type {number || null}
         */
        this.RealTotalCost = null;

        /**
         * 折扣。
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 具体折扣详情。
         * @type {PolicyDetail || null}
         */
        this.PolicyDetail = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeSpan = 'TimeSpan' in params ? params.TimeSpan : null;
        this.TimeUnit = 'TimeUnit' in params ? params.TimeUnit : null;
        this.TotalCost = 'TotalCost' in params ? params.TotalCost : null;
        this.RealTotalCost = 'RealTotalCost' in params ? params.RealTotalCost : null;
        this.Discount = 'Discount' in params ? params.Discount : null;

        if (params.PolicyDetail) {
            let obj = new PolicyDetail();
            obj.deserialize(params.PolicyDetail)
            this.PolicyDetail = obj;
        }

    }
}

/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 地域信息列表。
         * @type {Array.<RegionInfo> || null}
         */
        this.RegionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionInfo();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
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
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
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
 * AssociateInstancesKeyPairs请求参数结构体
 * @class
 */
class AssociateInstancesKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对 ID 列表。每次请求批量密钥对的上限为 100。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
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
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ImportKeyPair返回参数结构体
 * @class
 */
class ImportKeyPairResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对 ID。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSnapshots请求参数结构体
 * @class
 */
class DescribeSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要查询快照的 ID 列表。
参数不支持同时指定 SnapshotIds 和 Filters。
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

        /**
         * 过滤器列表。
<li>snapshot-id</li>按照【快照 ID】进行过滤。
类型：String
必选：否
<li>disk-id</li>按照【磁盘 ID】进行过滤。
类型：String
必选：否
<li>snapshot-name</li>按照【快照名称】进行过滤。
类型：String
必选：否
<li>instance-id</li>按照【实例 ID 】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 SnapshotIds 和 Filters。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;

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
 * 描述密钥对信息。
 * @class
 */
class KeyPair extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对 ID ，是密钥对的唯一标识。
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * 密钥对名称。
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * 密钥对的纯文本公钥。
         * @type {string || null}
         */
        this.PublicKey = null;

        /**
         * 密钥对关联的实例 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.AssociatedInstanceIds = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 密钥对私钥。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PrivateKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;
        this.AssociatedInstanceIds = 'AssociatedInstanceIds' in params ? params.AssociatedInstanceIds : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.PrivateKey = 'PrivateKey' in params ? params.PrivateKey : null;

    }
}

/**
 * DescribeFirewallRulesTemplate请求参数结构体
 * @class
 */
class DescribeFirewallRulesTemplateRequest extends  AbstractModel {
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
 * DescribeKeyPairs返回参数结构体
 * @class
 */
class DescribeKeyPairsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的密钥对数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 密钥对详细信息列表。
         * @type {Array.<KeyPair> || null}
         */
        this.KeyPairSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.KeyPairSet) {
            this.KeyPairSet = new Array();
            for (let z in params.KeyPairSet) {
                let obj = new KeyPair();
                obj.deserialize(params.KeyPairSet[z]);
                this.KeyPairSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyBlueprintAttribute请求参数结构体
 * @class
 */
class ModifyBlueprintAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像 ID。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。
         * @type {string || null}
         */
        this.BlueprintId = null;

        /**
         * 设置新的镜像名称。最大长度60。
         * @type {string || null}
         */
        this.BlueprintName = null;

        /**
         * 设置新的镜像描述。最大长度60。
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
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.BlueprintName = 'BlueprintName' in params ? params.BlueprintName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * DescribeBlueprintInstances请求参数结构体
 * @class
 */
class DescribeBlueprintInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表，当前最多支持 1 个。
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
 * ApplyInstanceSnapshot返回参数结构体
 * @class
 */
class ApplyInstanceSnapshotResponse extends  AbstractModel {
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
 * ModifyFirewallRules请求参数结构体
 * @class
 */
class ModifyFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 防火墙规则列表。
         * @type {Array.<FirewallRule> || null}
         */
        this.FirewallRules = null;

        /**
         * 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。
         * @type {number || null}
         */
        this.FirewallVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRules) {
            this.FirewallRules = new Array();
            for (let z in params.FirewallRules) {
                let obj = new FirewallRule();
                obj.deserialize(params.FirewallRules[z]);
                this.FirewallRules.push(obj);
            }
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;

    }
}

/**
 * CreateBlueprint请求参数结构体
 * @class
 */
class CreateBlueprintRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像名称。最大长度60。
         * @type {string || null}
         */
        this.BlueprintName = null;

        /**
         * 镜像描述。最大长度60。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 需要制作镜像的实例ID。
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
        this.BlueprintName = 'BlueprintName' in params ? params.BlueprintName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DeleteFirewallRules请求参数结构体
 * @class
 */
class DeleteFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 防火墙规则列表。
         * @type {Array.<FirewallRule> || null}
         */
        this.FirewallRules = null;

        /**
         * 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。
         * @type {number || null}
         */
        this.FirewallVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRules) {
            this.FirewallRules = new Array();
            for (let z in params.FirewallRules) {
                let obj = new FirewallRule();
                obj.deserialize(params.FirewallRules[z]);
                this.FirewallRules.push(obj);
            }
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;

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
         * 实例 ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
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
 * ModifyFirewallRuleDescription请求参数结构体
 * @class
 */
class ModifyFirewallRuleDescriptionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 防火墙规则。
         * @type {FirewallRule || null}
         */
        this.FirewallRule = null;

        /**
         * 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。
         * @type {number || null}
         */
        this.FirewallVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRule) {
            let obj = new FirewallRule();
            obj.deserialize(params.FirewallRule)
            this.FirewallRule = obj;
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;

    }
}

/**
 * 实例流量包详情
 * @class
 */
class InstanceTrafficPackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 流量包详情列表。
         * @type {Array.<TrafficPackage> || null}
         */
        this.TrafficPackageSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.TrafficPackageSet) {
            this.TrafficPackageSet = new Array();
            for (let z in params.TrafficPackageSet) {
                let obj = new TrafficPackage();
                obj.deserialize(params.TrafficPackageSet[z]);
                this.TrafficPackageSet.push(obj);
            }
        }

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
 * 流量包详情
 * @class
 */
class TrafficPackage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 流量包ID。
         * @type {string || null}
         */
        this.TrafficPackageId = null;

        /**
         * 流量包生效周期内已使用流量，单位字节。
         * @type {number || null}
         */
        this.TrafficUsed = null;

        /**
         * 流量包生效周期内的总流量，单位字节。
         * @type {number || null}
         */
        this.TrafficPackageTotal = null;

        /**
         * 流量包生效周期内的剩余流量，单位字节。
         * @type {number || null}
         */
        this.TrafficPackageRemaining = null;

        /**
         * 流量包生效周期内超出流量包额度的流量，单位字节。
         * @type {number || null}
         */
        this.TrafficOverflow = null;

        /**
         * 流量包生效周期开始时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 流量包生效周期结束时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 流量包到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Deadline = null;

        /**
         * 流量包状态：
<li>NETWORK_NORMAL：正常</li>
<li>OVERDUE_NETWORK_DISABLED：欠费断网</li>
         * @type {string || null}
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
        this.TrafficPackageId = 'TrafficPackageId' in params ? params.TrafficPackageId : null;
        this.TrafficUsed = 'TrafficUsed' in params ? params.TrafficUsed : null;
        this.TrafficPackageTotal = 'TrafficPackageTotal' in params ? params.TrafficPackageTotal : null;
        this.TrafficPackageRemaining = 'TrafficPackageRemaining' in params ? params.TrafficPackageRemaining : null;
        this.TrafficOverflow = 'TrafficOverflow' in params ? params.TrafficOverflow : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Deadline = 'Deadline' in params ? params.Deadline : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DisassociateInstancesKeyPairs返回参数结构体
 * @class
 */
class DisassociateInstancesKeyPairsResponse extends  AbstractModel {
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
 * DescribeResetInstanceBlueprints返回参数结构体
 * @class
 */
class DescribeResetInstanceBlueprintsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的镜像数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像重置信息列表
         * @type {Array.<ResetInstanceBlueprint> || null}
         */
        this.ResetInstanceBlueprintSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ResetInstanceBlueprintSet) {
            this.ResetInstanceBlueprintSet = new Array();
            for (let z in params.ResetInstanceBlueprintSet) {
                let obj = new ResetInstanceBlueprint();
                obj.deserialize(params.ResetInstanceBlueprintSet[z]);
                this.ResetInstanceBlueprintSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 实例可退还信息。
 * @class
 */
class InstanceReturnable extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例是否可退还。
         * @type {boolean || null}
         */
        this.IsReturnable = null;

        /**
         * 实例退还失败错误码。
         * @type {number || null}
         */
        this.ReturnFailCode = null;

        /**
         * 实例退还失败错误信息。
         * @type {string || null}
         */
        this.ReturnFailMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IsReturnable = 'IsReturnable' in params ? params.IsReturnable : null;
        this.ReturnFailCode = 'ReturnFailCode' in params ? params.ReturnFailCode : null;
        this.ReturnFailMessage = 'ReturnFailMessage' in params ? params.ReturnFailMessage : null;

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
         * 实例操作限制列表详细信息。
         * @type {Array.<InstanceDeniedActions> || null}
         */
        this.InstanceDeniedActionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceDeniedActionSet) {
            this.InstanceDeniedActionSet = new Array();
            for (let z in params.InstanceDeniedActionSet) {
                let obj = new InstanceDeniedActions();
                obj.deserialize(params.InstanceDeniedActionSet[z]);
                this.InstanceDeniedActionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例名称。可任意命名，但不得超过 60 个字符。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * DescribeSnapshotsDeniedActions返回参数结构体
 * @class
 */
class DescribeSnapshotsDeniedActionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照操作限制列表详细信息。
         * @type {Array.<SnapshotDeniedActions> || null}
         */
        this.SnapshotDeniedActionSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SnapshotDeniedActionSet) {
            this.SnapshotDeniedActionSet = new Array();
            for (let z in params.SnapshotDeniedActionSet) {
                let obj = new SnapshotDeniedActions();
                obj.deserialize(params.SnapshotDeniedActionSet[z]);
                this.SnapshotDeniedActionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
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
 * 快照操作限制列表。
 * @class
 */
class SnapshotDeniedActions extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照 ID。
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 操作限制列表。
         * @type {Array.<DeniedAction> || null}
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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

        if (params.DeniedActions) {
            this.DeniedActions = new Array();
            for (let z in params.DeniedActions) {
                let obj = new DeniedAction();
                obj.deserialize(params.DeniedActions[z]);
                this.DeniedActions.push(obj);
            }
        }

    }
}

/**
 * DeleteSnapshots请求参数结构体
 * @class
 */
class DeleteSnapshotsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要删除的快照 ID 列表，可通过 DescribeSnapshots 查询。
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;

    }
}

/**
 * ModifySnapshotAttribute请求参数结构体
 * @class
 */
class ModifySnapshotAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照 ID, 可通过 DescribeSnapshots 查询。
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 新的快照名称，最长为 60 个字符。
         * @type {string || null}
         */
        this.SnapshotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

    }
}

/**
 * DescribeBundleDiscount返回参数结构体
 * @class
 */
class DescribeBundleDiscountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 币种：CNY人民币，USD 美元。
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 折扣梯度详情，每个梯度包含的信息有：时长，折扣数，总价，折扣价，折扣详情（用户折扣、官网折扣、最终折扣）。
         * @type {Array.<DiscountDetail> || null}
         */
        this.DiscountDetail = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;

        if (params.DiscountDetail) {
            this.DiscountDetail = new Array();
            for (let z in params.DiscountDetail) {
                let obj = new DiscountDetail();
                obj.deserialize(params.DiscountDetail[z]);
                this.DiscountDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSnapshots返回参数结构体
 * @class
 */
class DeleteSnapshotsResponse extends  AbstractModel {
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
 * DisassociateInstancesKeyPairs请求参数结构体
 * @class
 */
class DisassociateInstancesKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对 ID 列表。每次请求批量密钥对的上限为 100。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
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
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * ImportKeyPair请求参数结构体
 * @class
 */
class ImportKeyPairRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对名称，可由数字，字母和下划线组成，长度不超过 25 个字符。
         * @type {string || null}
         */
        this.KeyName = null;

        /**
         * 密钥对的公钥内容， OpenSSH RSA 格式。
         * @type {string || null}
         */
        this.PublicKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;
        this.PublicKey = 'PublicKey' in params ? params.PublicKey : null;

    }
}

/**
 * DeleteBlueprints返回参数结构体
 * @class
 */
class DeleteBlueprintsResponse extends  AbstractModel {
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
 * ModifyInstancesLoginKeyPairAttribute请求参数结构体
 * @class
 */
class ModifyInstancesLoginKeyPairAttributeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 是否允许使用默认密钥对登录，YES：允许登录；NO：禁止登录
         * @type {string || null}
         */
        this.PermitLogin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.PermitLogin = 'PermitLogin' in params ? params.PermitLogin : null;

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
 * 描述防火墙规则信息。
 * @class
 */
class FirewallRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 协议，取值：TCP，UDP，ICMP，ALL。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 网段或 IP (互斥)。默认为 0.0.0.0/0，表示所有来源。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 取值：ACCEPT，DROP。默认为 ACCEPT。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 防火墙规则描述。
         * @type {string || null}
         */
        this.FirewallRuleDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.FirewallRuleDescription = 'FirewallRuleDescription' in params ? params.FirewallRuleDescription : null;

    }
}

/**
 * ModifyBlueprintAttribute返回参数结构体
 * @class
 */
class ModifyBlueprintAttributeResponse extends  AbstractModel {
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
 * DescribeModifyInstanceBundles请求参数结构体
 * @class
 */
class DescribeModifyInstanceBundlesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 过滤器列表。
<li>bundle-id</li>按照【套餐 ID】进行过滤。
类型：String
必选：否
<li>support-platform-type</li>按照【系统类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

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
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
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
 * InquirePriceCreateBlueprint返回参数结构体
 * @class
 */
class InquirePriceCreateBlueprintResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义镜像的价格参数。
         * @type {BlueprintPrice || null}
         */
        this.BlueprintPrice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BlueprintPrice) {
            let obj = new BlueprintPrice();
            obj.deserialize(params.BlueprintPrice)
            this.BlueprintPrice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesReturnable请求参数结构体
 * @class
 */
class DescribeInstancesReturnableRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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
 * StopInstances请求参数结构体
 * @class
 */
class StopInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
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
 * DescribeBlueprints返回参数结构体
 * @class
 */
class DescribeBlueprintsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的镜像数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 镜像详细信息列表。
         * @type {Array.<Blueprint> || null}
         */
        this.BlueprintSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.BlueprintSet) {
            this.BlueprintSet = new Array();
            for (let z in params.BlueprintSet) {
                let obj = new Blueprint();
                obj.deserialize(params.BlueprintSet[z]);
                this.BlueprintSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeKeyPairs请求参数结构体
 * @class
 */
class DescribeKeyPairsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对 ID 列表。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * 描述了实例登录相关配置与信息。
 * @class
 */
class LoginSettings extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥 ID 列表。关联密钥后，就可以通过对应的私钥来访问实例。注意：此字段可能返回 []，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.KeyIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyIds = 'KeyIds' in params ? params.KeyIds : null;

    }
}

/**
 * 描述了实例信息。
 * @class
 */
class Instance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 套餐 ID。
         * @type {string || null}
         */
        this.BundleId = null;

        /**
         * 镜像 ID。
         * @type {string || null}
         */
        this.BlueprintId = null;

        /**
         * 实例的 CPU 核数，单位：核。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 实例内存容量，单位：GB 。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 实例名称。
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 实例计费模式。取值范围： 
PREPAID：表示预付费，即包年包月。
         * @type {string || null}
         */
        this.InstanceChargeType = null;

        /**
         * 实例系统盘信息。
         * @type {SystemDisk || null}
         */
        this.SystemDisk = null;

        /**
         * 实例主网卡的内网 IP。 
注意：此字段可能返回 空，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PrivateAddresses = null;

        /**
         * 实例主网卡的公网 IP。 
注意：此字段可能返回 空，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.PublicAddresses = null;

        /**
         * 实例带宽信息。
         * @type {InternetAccessible || null}
         */
        this.InternetAccessible = null;

        /**
         * 自动续费标识。取值范围： 
NOTIFY_AND_MANUAL_RENEW：表示通知即将过期，但不自动续费  
NOTIFY_AND_AUTO_RENEW：表示通知即将过期，而且自动续费 。
         * @type {string || null}
         */
        this.RenewFlag = null;

        /**
         * 实例登录设置。
         * @type {LoginSettings || null}
         */
        this.LoginSettings = null;

        /**
         * 实例状态。取值范围： 
<li>PENDING：表示创建中</li><li>LAUNCH_FAILED：表示创建失败</li><li>RUNNING：表示运行中</li><li>STOPPED：表示关机</li><li>STARTING：表示开机中</li><li>STOPPING：表示关机中</li><li>REBOOTING：表示重启中</li><li>SHUTDOWN：表示停止待销毁</li><li>TERMINATING：表示销毁中</li>
         * @type {string || null}
         */
        this.InstanceState = null;

        /**
         * 实例全局唯一 ID。
         * @type {string || null}
         */
        this.Uuid = null;

        /**
         * 实例的最新操作。例：StopInstances、ResetInstance。注意：此字段可能返回 空值，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * 实例的最新操作状态。取值范围： 
SUCCESS：表示操作成功 
OPERATING：表示操作执行中 
FAILED：表示操作失败 
注意：此字段可能返回 空值，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * 实例最新操作的唯一请求 ID。 
注意：此字段可能返回 空值，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationRequestId = null;

        /**
         * 隔离时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsolatedTime = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ 。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * 操作系统平台类型，如 LINUX_UNIX、WINDOWS。
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 操作系统平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 操作系统名称。
         * @type {string || null}
         */
        this.OsName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BundleId = 'BundleId' in params ? params.BundleId : null;
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceChargeType = 'InstanceChargeType' in params ? params.InstanceChargeType : null;

        if (params.SystemDisk) {
            let obj = new SystemDisk();
            obj.deserialize(params.SystemDisk)
            this.SystemDisk = obj;
        }
        this.PrivateAddresses = 'PrivateAddresses' in params ? params.PrivateAddresses : null;
        this.PublicAddresses = 'PublicAddresses' in params ? params.PublicAddresses : null;

        if (params.InternetAccessible) {
            let obj = new InternetAccessible();
            obj.deserialize(params.InternetAccessible)
            this.InternetAccessible = obj;
        }
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

        if (params.LoginSettings) {
            let obj = new LoginSettings();
            obj.deserialize(params.LoginSettings)
            this.LoginSettings = obj;
        }
        this.InstanceState = 'InstanceState' in params ? params.InstanceState : null;
        this.Uuid = 'Uuid' in params ? params.Uuid : null;
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.LatestOperationRequestId = 'LatestOperationRequestId' in params ? params.LatestOperationRequestId : null;
        this.IsolatedTime = 'IsolatedTime' in params ? params.IsolatedTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.OsName = 'OsName' in params ? params.OsName : null;

    }
}

/**
 * CreateKeyPair返回参数结构体
 * @class
 */
class CreateKeyPairResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对信息。
         * @type {KeyPair || null}
         */
        this.KeyPair = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.KeyPair) {
            let obj = new KeyPair();
            obj.deserialize(params.KeyPair)
            this.KeyPair = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ModifyFirewallRules返回参数结构体
 * @class
 */
class ModifyFirewallRulesResponse extends  AbstractModel {
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
 * DescribeBundles请求参数结构体
 * @class
 */
class DescribeBundlesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐 ID 列表。
         * @type {Array.<string> || null}
         */
        this.BundleIds = null;

        /**
         * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤器列表。
<li>bundle-id</li>按照【套餐 ID】进行过滤。
类型：String
必选：否
<li>support-platform-type</li>按照【系统类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BundleIds 和 Filters。
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
        this.BundleIds = 'BundleIds' in params ? params.BundleIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * 描述了镜像信息。
 * @class
 */
class Blueprint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像 ID  ，是 Blueprint 的唯一标识。
         * @type {string || null}
         */
        this.BlueprintId = null;

        /**
         * 镜像对外展示标题。
         * @type {string || null}
         */
        this.DisplayTitle = null;

        /**
         * 镜像对外展示版本。
         * @type {string || null}
         */
        this.DisplayVersion = null;

        /**
         * 镜像描述信息。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 操作系统名称。
         * @type {string || null}
         */
        this.OsName = null;

        /**
         * 操作系统平台。
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * 操作系统平台类型，如 LINUX_UNIX、WINDOWS。
         * @type {string || null}
         */
        this.PlatformType = null;

        /**
         * 镜像类型，如 APP_OS、PURE_OS、PRIVATE。
         * @type {string || null}
         */
        this.BlueprintType = null;

        /**
         * 镜像图片 URL。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 镜像所需系统盘大小。
         * @type {number || null}
         */
        this.RequiredSystemDiskSize = null;

        /**
         * 镜像状态。
         * @type {string || null}
         */
        this.BlueprintState = null;

        /**
         * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 
格式为： YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * 镜像名称。
         * @type {string || null}
         */
        this.BlueprintName = null;

        /**
         * 镜像是否支持自动化助手。
         * @type {boolean || null}
         */
        this.SupportAutomationTools = null;

        /**
         * 镜像所需内存大小, 单位: GB
         * @type {number || null}
         */
        this.RequiredMemorySize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.DisplayTitle = 'DisplayTitle' in params ? params.DisplayTitle : null;
        this.DisplayVersion = 'DisplayVersion' in params ? params.DisplayVersion : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.OsName = 'OsName' in params ? params.OsName : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.PlatformType = 'PlatformType' in params ? params.PlatformType : null;
        this.BlueprintType = 'BlueprintType' in params ? params.BlueprintType : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequiredSystemDiskSize = 'RequiredSystemDiskSize' in params ? params.RequiredSystemDiskSize : null;
        this.BlueprintState = 'BlueprintState' in params ? params.BlueprintState : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.BlueprintName = 'BlueprintName' in params ? params.BlueprintName : null;
        this.SupportAutomationTools = 'SupportAutomationTools' in params ? params.SupportAutomationTools : null;
        this.RequiredMemorySize = 'RequiredMemorySize' in params ? params.RequiredMemorySize : null;

    }
}

/**
 * 限制操作。
 * @class
 */
class DeniedAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 限制操作名。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 限制操作消息码。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 限制操作消息。
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
 * ModifyInstancesLoginKeyPairAttribute返回参数结构体
 * @class
 */
class ModifyInstancesLoginKeyPairAttributeResponse extends  AbstractModel {
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
 * 套餐信息。
 * @class
 */
class Bundle extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐 ID。
         * @type {string || null}
         */
        this.BundleId = null;

        /**
         * 内存大小，单位 GB。
         * @type {number || null}
         */
        this.Memory = null;

        /**
         * 系统盘类型。
取值范围： 
<li> LOCAL_BASIC：本地硬盘</li><li> LOCAL_SSD：本地 SSD 硬盘</li><li> CLOUD_BASIC：普通云硬盘</li><li> CLOUD_SSD：SSD 云硬盘</li><li> CLOUD_PREMIUM：高性能云硬盘</li>
         * @type {string || null}
         */
        this.SystemDiskType = null;

        /**
         * 系统盘大小。
         * @type {number || null}
         */
        this.SystemDiskSize = null;

        /**
         * 每月网络流量，单位 Gb。
         * @type {number || null}
         */
        this.MonthlyTraffic = null;

        /**
         * 是否支持 Linux/Unix 平台。
         * @type {boolean || null}
         */
        this.SupportLinuxUnixPlatform = null;

        /**
         * 是否支持 Windows 平台。
         * @type {boolean || null}
         */
        this.SupportWindowsPlatform = null;

        /**
         * 套餐当前单位价格信息。
         * @type {Price || null}
         */
        this.Price = null;

        /**
         * CPU 核数。
         * @type {number || null}
         */
        this.CPU = null;

        /**
         * 峰值带宽，单位 Mbps。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 网络计费类型。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 套餐售卖状态,取值:‘AVAILABLE’(可用) , ‘SOLD_OUT’(售罄)
         * @type {string || null}
         */
        this.BundleSalesState = null;

        /**
         * 套餐类型。
取值范围：
<li> GENERAL_BUNDLE：通用型</li><li> STORAGE_BUNDLE：存储型 </li>
         * @type {string || null}
         */
        this.BundleType = null;

        /**
         * 套餐展示标签.
取值范围:
"ACTIVITY": 活动套餐,
"NORMAL": 普通套餐
"CAREFREE": 无忧套餐
         * @type {string || null}
         */
        this.BundleDisplayLabel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BundleId = 'BundleId' in params ? params.BundleId : null;
        this.Memory = 'Memory' in params ? params.Memory : null;
        this.SystemDiskType = 'SystemDiskType' in params ? params.SystemDiskType : null;
        this.SystemDiskSize = 'SystemDiskSize' in params ? params.SystemDiskSize : null;
        this.MonthlyTraffic = 'MonthlyTraffic' in params ? params.MonthlyTraffic : null;
        this.SupportLinuxUnixPlatform = 'SupportLinuxUnixPlatform' in params ? params.SupportLinuxUnixPlatform : null;
        this.SupportWindowsPlatform = 'SupportWindowsPlatform' in params ? params.SupportWindowsPlatform : null;

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.CPU = 'CPU' in params ? params.CPU : null;
        this.InternetMaxBandwidthOut = 'InternetMaxBandwidthOut' in params ? params.InternetMaxBandwidthOut : null;
        this.InternetChargeType = 'InternetChargeType' in params ? params.InternetChargeType : null;
        this.BundleSalesState = 'BundleSalesState' in params ? params.BundleSalesState : null;
        this.BundleType = 'BundleType' in params ? params.BundleType : null;
        this.BundleDisplayLabel = 'BundleDisplayLabel' in params ? params.BundleDisplayLabel : null;

    }
}

/**
 * InquirePriceCreateInstances返回参数结构体
 * @class
 */
class InquirePriceCreateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 询价信息。
         * @type {Price || null}
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

        if (params.Price) {
            let obj = new Price();
            obj.deserialize(params.Price)
            this.Price = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSnapshotsDeniedActions请求参数结构体
 * @class
 */
class DescribeSnapshotsDeniedActionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照 ID 列表, 可通过 DescribeSnapshots 查询。
         * @type {Array.<string> || null}
         */
        this.SnapshotIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SnapshotIds = 'SnapshotIds' in params ? params.SnapshotIds : null;

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
         * 实例 ID 列表。每次请求批量实例的上限为 100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
`LINUX_UNIX` 实例密码必须 8-30 位，推荐使用 12 位以上密码，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字：0-9<br><li>特殊字符： ()\`~!@#$%^&\*-+=\_|{}[]:;'<>,.?/
`WINDOWS` 实例密码必须 12-30 位，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字： 0-9<br><li>特殊字符：()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/<br><li>如果实例即包含 `LINUX_UNIX` 实例又包含 `WINDOWS` 实例，则密码复杂度限制按照 `WINDOWS` 实例的限制。
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 待重置密码的实例操作系统用户名。不得超过 64 个字符。
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
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * CreateKeyPair请求参数结构体
 * @class
 */
class CreateKeyPairRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 密钥对名称，可由数字，字母和下划线组成，长度不超过 25 个字符。
         * @type {string || null}
         */
        this.KeyName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyName = 'KeyName' in params ? params.KeyName : null;

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
         * 实例 ID 列表。每次请求批量实例的上限为 100。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 过滤器列表。
<li>instance-name</li>按照【实例名称】进行过滤。
类型：String
必选：否
<li>private-ip-address</li>按照【实例主网卡的内网 IP】进行过滤。
类型：String
必选：否
<li>public-ip-address</li>按照【实例主网卡的公网 IP】进行过滤。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 InstanceIds 和 Filters。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
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
 * >描述键值对过滤器，用于条件过滤查询。例如过滤名称等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以DescribeInstances接口的`Filter`为例。若我们需要查询实例名称（`instance-name`）为test ***并且*** 实例内网IP（`private-ip-address`）为10.10.10.10的实例时，可如下实现：
```
Filters.0.Name=instance-name
&Filters.0.Values.0=test
&Filters.1.Name=private-ip-address
&Filters.1.Values.0=10.10.10.10
```
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要过滤的字段。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 字段的过滤值。
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
 * DescribeSnapshots返回参数结构体
 * @class
 */
class DescribeSnapshotsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照的数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 快照的详情列表。
         * @type {Array.<Snapshot> || null}
         */
        this.SnapshotSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.SnapshotSet) {
            this.SnapshotSet = new Array();
            for (let z in params.SnapshotSet) {
                let obj = new Snapshot();
                obj.deserialize(params.SnapshotSet[z]);
                this.SnapshotSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述了快照相关信息。
 * @class
 */
class Snapshot extends  AbstractModel {
    constructor(){
        super();

        /**
         * 快照 ID。
         * @type {string || null}
         */
        this.SnapshotId = null;

        /**
         * 创建此快照的磁盘类型。取值：<li>SYSTEM_DISK：系统盘</li>
         * @type {string || null}
         */
        this.DiskUsage = null;

        /**
         * 创建此快照的磁盘 ID。
         * @type {string || null}
         */
        this.DiskId = null;

        /**
         * 创建此快照的磁盘大小，单位 GB。
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * 快照名称，用户自定义的快照别名。
         * @type {string || null}
         */
        this.SnapshotName = null;

        /**
         * 快照的状态。取值范围：
<li>NORMAL：正常 </li>
<li>CREATING：创建中</li>
<li>ROLLBACKING：回滚中。</li>
         * @type {string || null}
         */
        this.SnapshotState = null;

        /**
         * 创建或回滚快照进度百分比，成功后此字段取值为 100。
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 快照的最新操作，只有创建、回滚快照时记录。
取值如 CreateInstanceSnapshot，RollbackInstanceSnapshot。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperation = null;

        /**
         * 快照的最新操作状态，只有创建、回滚快照时记录。
取值范围：
<li>SUCCESS：表示操作成功</li>
<li>OPERATING：表示操作执行中</li>
<li>FAILED：表示操作失败</li>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationState = null;

        /**
         * 快照最新操作的唯一请求 ID，只有创建、回滚快照时记录。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatestOperationRequestId = null;

        /**
         * 快照的创建时间。
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
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;
        this.DiskUsage = 'DiskUsage' in params ? params.DiskUsage : null;
        this.DiskId = 'DiskId' in params ? params.DiskId : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;
        this.SnapshotState = 'SnapshotState' in params ? params.SnapshotState : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.LatestOperation = 'LatestOperation' in params ? params.LatestOperation : null;
        this.LatestOperationState = 'LatestOperationState' in params ? params.LatestOperationState : null;
        this.LatestOperationRequestId = 'LatestOperationRequestId' in params ? params.LatestOperationRequestId : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;

    }
}

/**
 * ModifyFirewallRuleDescription返回参数结构体
 * @class
 */
class ModifyFirewallRuleDescriptionResponse extends  AbstractModel {
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
 * InquirePriceCreateBlueprint请求参数结构体
 * @class
 */
class InquirePriceCreateBlueprintRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义镜像的个数。默认值为1。
         * @type {number || null}
         */
        this.BlueprintCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintCount = 'BlueprintCount' in params ? params.BlueprintCount : null;

    }
}

/**
 * CreateFirewallRules请求参数结构体
 * @class
 */
class CreateFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 防火墙规则列表。
         * @type {Array.<FirewallRule> || null}
         */
        this.FirewallRules = null;

        /**
         * 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。
         * @type {number || null}
         */
        this.FirewallVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.FirewallRules) {
            this.FirewallRules = new Array();
            for (let z in params.FirewallRules) {
                let obj = new FirewallRule();
                obj.deserialize(params.FirewallRules[z]);
                this.FirewallRules.push(obj);
            }
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;

    }
}

/**
 * 描述镜像软件信息。
 * @class
 */
class Software extends  AbstractModel {
    constructor(){
        super();

        /**
         * 软件名称。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 软件版本。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 软件图片 URL。
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 软件安装目录。
         * @type {string || null}
         */
        this.InstallDir = null;

        /**
         * 软件详情列表。
         * @type {Array.<SoftwareDetail> || null}
         */
        this.DetailSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.InstallDir = 'InstallDir' in params ? params.InstallDir : null;

        if (params.DetailSet) {
            this.DetailSet = new Array();
            for (let z in params.DetailSet) {
                let obj = new SoftwareDetail();
                obj.deserialize(params.DetailSet[z]);
                this.DetailSet.push(obj);
            }
        }

    }
}

/**
 * DescribeFirewallRules返回参数结构体
 * @class
 */
class DescribeFirewallRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的防火墙规则数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 防火墙规则详细信息列表。
         * @type {Array.<FirewallRuleInfo> || null}
         */
        this.FirewallRuleSet = null;

        /**
         * 防火墙版本号。
         * @type {number || null}
         */
        this.FirewallVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.FirewallRuleSet) {
            this.FirewallRuleSet = new Array();
            for (let z in params.FirewallRuleSet) {
                let obj = new FirewallRuleInfo();
                obj.deserialize(params.FirewallRuleSet[z]);
                this.FirewallRuleSet.push(obj);
            }
        }
        this.FirewallVersion = 'FirewallVersion' in params ? params.FirewallVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesReturnable返回参数结构体
 * @class
 */
class DescribeInstancesReturnableResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可退还实例详细信息列表。
         * @type {Array.<InstanceReturnable> || null}
         */
        this.InstanceReturnableSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.InstanceReturnableSet) {
            this.InstanceReturnableSet = new Array();
            for (let z in params.InstanceReturnableSet) {
                let obj = new InstanceReturnable();
                obj.deserialize(params.InstanceReturnableSet[z]);
                this.InstanceReturnableSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBlueprints请求参数结构体
 * @class
 */
class DeleteBlueprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像ID列表。镜像ID，可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。
         * @type {Array.<string> || null}
         */
        this.BlueprintIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintIds = 'BlueprintIds' in params ? params.BlueprintIds : null;

    }
}

/**
 * 描述防火墙规则详细信息。
 * @class
 */
class FirewallRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用类型，取值：自定义，HTTP(80)，HTTPS(443)，Linux登录(22)，Windows登录(3389)，MySQL(3306)，SQL Server(1433)，全部TCP，全部UDP，Ping-ICMP，ALL。
         * @type {string || null}
         */
        this.AppType = null;

        /**
         * 协议，取值：TCP，UDP，ICMP，ALL。
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。
         * @type {string || null}
         */
        this.Port = null;

        /**
         * 网段或 IP (互斥)。默认为 0.0.0.0/0，表示所有来源。
         * @type {string || null}
         */
        this.CidrBlock = null;

        /**
         * 取值：ACCEPT，DROP。默认为 ACCEPT。
         * @type {string || null}
         */
        this.Action = null;

        /**
         * 防火墙规则描述。
         * @type {string || null}
         */
        this.FirewallRuleDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppType = 'AppType' in params ? params.AppType : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.CidrBlock = 'CidrBlock' in params ? params.CidrBlock : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.FirewallRuleDescription = 'FirewallRuleDescription' in params ? params.FirewallRuleDescription : null;

    }
}

/**
 * CreateFirewallRules返回参数结构体
 * @class
 */
class CreateFirewallRulesResponse extends  AbstractModel {
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
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的实例数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 实例详细信息列表。
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
 * CreateBlueprint返回参数结构体
 * @class
 */
class CreateBlueprintResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 自定义镜像ID。
         * @type {string || null}
         */
        this.BlueprintId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 折扣详情信息。
 * @class
 */
class PolicyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户折扣。
         * @type {number || null}
         */
        this.UserDiscount = null;

        /**
         * 公共折扣。
         * @type {number || null}
         */
        this.CommonDiscount = null;

        /**
         * 最终折扣。
         * @type {number || null}
         */
        this.FinalDiscount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserDiscount = 'UserDiscount' in params ? params.UserDiscount : null;
        this.CommonDiscount = 'CommonDiscount' in params ? params.CommonDiscount : null;
        this.FinalDiscount = 'FinalDiscount' in params ? params.FinalDiscount : null;

    }
}

/**
 * DescribeResetInstanceBlueprints请求参数结构体
 * @class
 */
class DescribeResetInstanceBlueprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤器列表。
<li>blueprint-id</li>按照【镜像 ID】进行过滤。
类型：String
必选：否
<li>blueprint-type</li>按照【镜像类型】进行过滤。
取值： APP_OS（预置应用的系统 ）；PURE_OS（纯净的 OS 系统）。
类型：String
必选：否
<li>platform-type</li>按照【镜像平台类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BlueprintIds 和 Filters 。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * ModifyInstancesRenewFlag返回参数结构体
 * @class
 */
class ModifyInstancesRenewFlagResponse extends  AbstractModel {
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
 * ApplyInstanceSnapshot请求参数结构体
 * @class
 */
class ApplyInstanceSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 快照 ID。
         * @type {string || null}
         */
        this.SnapshotId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SnapshotId = 'SnapshotId' in params ? params.SnapshotId : null;

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
         * 实例ID列表。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
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
 * 描述了启动配置创建实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等。
 * @class
 */
class InternetAccessible extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网络计费类型。
         * @type {string || null}
         */
        this.InternetChargeType = null;

        /**
         * 公网出带宽上限，单位：Mbps。
         * @type {number || null}
         */
        this.InternetMaxBandwidthOut = null;

        /**
         * 是否分配公网 IP。
         * @type {boolean || null}
         */
        this.PublicIpAssigned = null;

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
        this.PublicIpAssigned = 'PublicIpAssigned' in params ? params.PublicIpAssigned : null;

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
 * DescribeInstanceLoginKeyPairAttribute请求参数结构体
 * @class
 */
class DescribeInstanceLoginKeyPairAttributeRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeBundleDiscount请求参数结构体
 * @class
 */
class DescribeBundleDiscountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐 ID。
         * @type {string || null}
         */
        this.BundleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BundleId = 'BundleId' in params ? params.BundleId : null;

    }
}

/**
 * 价格信息
 * @class
 */
class Price extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例价格。
         * @type {InstancePrice || null}
         */
        this.InstancePrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstancePrice) {
            let obj = new InstancePrice();
            obj.deserialize(params.InstancePrice)
            this.InstancePrice = obj;
        }

    }
}

/**
 * BlueprintPrice	自定义镜像的价格参数。
 * @class
 */
class BlueprintPrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像单价，原价。单位元。
         * @type {number || null}
         */
        this.OriginalBlueprintPrice = null;

        /**
         * 镜像总价，原价。单位元。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 折扣。
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 镜像折扣后总价。单位元。
         * @type {number || null}
         */
        this.DiscountPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalBlueprintPrice = 'OriginalBlueprintPrice' in params ? params.OriginalBlueprintPrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * 描述通用资源配额信息。


 * @class
 */
class GeneralResourceQuota extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源名称。
         * @type {string || null}
         */
        this.ResourceName = null;

        /**
         * 资源当前可用数量。
         * @type {number || null}
         */
        this.ResourceQuotaAvailable = null;

        /**
         * 资源总数量。
         * @type {number || null}
         */
        this.ResourceQuotaTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceName = 'ResourceName' in params ? params.ResourceName : null;
        this.ResourceQuotaAvailable = 'ResourceQuotaAvailable' in params ? params.ResourceQuotaAvailable : null;
        this.ResourceQuotaTotal = 'ResourceQuotaTotal' in params ? params.ResourceQuotaTotal : null;

    }
}

/**
 * DescribeBlueprints请求参数结构体
 * @class
 */
class DescribeBlueprintsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像 ID 列表。
         * @type {Array.<string> || null}
         */
        this.BlueprintIds = null;

        /**
         * 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤器列表。
<li>blueprint-id</li>按照【镜像 ID】进行过滤。
类型：String
必选：否
<li>blueprint-type</li>按照【镜像类型】进行过滤。
取值：APP_OS（预置应用的系统 ）；PURE_OS（纯净的 OS 系统）；PRIVATE（自定义镜像）。
类型：String
必选：否
<li>platform-type</li>按照【镜像平台类型】进行过滤。
取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）。
类型：String
必选：否
每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BlueprintIds 和 Filters 。
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
        this.BlueprintIds = 'BlueprintIds' in params ? params.BlueprintIds : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * 描述镜像软件详细信息。
 * @class
 */
class SoftwareDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 详情唯一键。
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 详情标题。
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 详情值。
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
        this.Title = 'Title' in params ? params.Title : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * 关于Lighthouse Instance实例的价格信息
 * @class
 */
class InstancePrice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐单价原价。
         * @type {number || null}
         */
        this.OriginalBundlePrice = null;

        /**
         * 原价。
         * @type {number || null}
         */
        this.OriginalPrice = null;

        /**
         * 折扣。
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 折后价。
         * @type {number || null}
         */
        this.DiscountPrice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OriginalBundlePrice = 'OriginalBundlePrice' in params ? params.OriginalBundlePrice : null;
        this.OriginalPrice = 'OriginalPrice' in params ? params.OriginalPrice : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.DiscountPrice = 'DiscountPrice' in params ? params.DiscountPrice : null;

    }
}

/**
 * ModifySnapshotAttribute返回参数结构体
 * @class
 */
class ModifySnapshotAttributeResponse extends  AbstractModel {
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
 * DescribeGeneralResourceQuotas返回参数结构体
 * @class
 */
class DescribeGeneralResourceQuotasResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 通用资源配额详细信息列表。
         * @type {Array.<GeneralResourceQuota> || null}
         */
        this.GeneralResourceQuotaSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GeneralResourceQuotaSet) {
            this.GeneralResourceQuotaSet = new Array();
            for (let z in params.GeneralResourceQuotaSet) {
                let obj = new GeneralResourceQuota();
                obj.deserialize(params.GeneralResourceQuotaSet[z]);
                this.GeneralResourceQuotaSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstancesRenewFlag请求参数结构体
 * @class
 */
class ModifyInstancesRenewFlagRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

    }
}

/**
 * DescribeFirewallRulesTemplate返回参数结构体
 * @class
 */
class DescribeFirewallRulesTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的防火墙规则数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 防火墙规则详细信息列表。
         * @type {Array.<FirewallRuleInfo> || null}
         */
        this.FirewallRuleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.FirewallRuleSet) {
            this.FirewallRuleSet = new Array();
            for (let z in params.FirewallRuleSet) {
                let obj = new FirewallRuleInfo();
                obj.deserialize(params.FirewallRuleSet[z]);
                this.FirewallRuleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetInstance返回参数结构体
 * @class
 */
class ResetInstanceResponse extends  AbstractModel {
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
 * DescribeFirewallRules请求参数结构体
 * @class
 */
class DescribeFirewallRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 偏移量，默认为 0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量，默认为 20，最大值为 100。
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * InquirePriceCreateInstances请求参数结构体
 * @class
 */
class InquirePriceCreateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例的套餐 ID。
         * @type {string || null}
         */
        this.BundleId = null;

        /**
         * 创建数量，默认为 1。
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
         * @type {InstanceChargePrepaid || null}
         */
        this.InstanceChargePrepaid = null;

        /**
         * 应用镜像 ID，使用收费应用镜像时必填。
         * @type {string || null}
         */
        this.BlueprintId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BundleId = 'BundleId' in params ? params.BundleId : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

        if (params.InstanceChargePrepaid) {
            let obj = new InstanceChargePrepaid();
            obj.deserialize(params.InstanceChargePrepaid)
            this.InstanceChargePrepaid = obj;
        }
        this.BlueprintId = 'BlueprintId' in params ? params.BlueprintId : null;

    }
}

/**
 * DescribeModifyInstanceBundles返回参数结构体
 * @class
 */
class DescribeModifyInstanceBundlesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的套餐数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 变更套餐详细信息。
         * @type {Array.<ModifyBundle> || null}
         */
        this.ModifyBundleSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ModifyBundleSet) {
            this.ModifyBundleSet = new Array();
            for (let z in params.ModifyBundleSet) {
                let obj = new ModifyBundle();
                obj.deserialize(params.ModifyBundleSet[z]);
                this.ModifyBundleSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstanceSnapshot请求参数结构体
 * @class
 */
class CreateInstanceSnapshotRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要创建快照的实例 ID。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 快照名称，最长为 60 个字符。
         * @type {string || null}
         */
        this.SnapshotName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SnapshotName = 'SnapshotName' in params ? params.SnapshotName : null;

    }
}

/**
 * 描述镜像实例信息。
 * @class
 */
class BlueprintInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * 镜像信息。
         * @type {Blueprint || null}
         */
        this.Blueprint = null;

        /**
         * 软件列表。
         * @type {Array.<Software> || null}
         */
        this.SoftwareSet = null;

        /**
         * 实例 ID。
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

        if (params.Blueprint) {
            let obj = new Blueprint();
            obj.deserialize(params.Blueprint)
            this.Blueprint = obj;
        }

        if (params.SoftwareSet) {
            this.SoftwareSet = new Array();
            for (let z in params.SoftwareSet) {
                let obj = new Software();
                obj.deserialize(params.SoftwareSet[z]);
                this.SoftwareSet.push(obj);
            }
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * 描述了实例的计费模式
 * @class
 */
class InstanceChargePrepaid extends  AbstractModel {
    constructor(){
        super();

        /**
         * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。
         * @type {number || null}
         */
        this.Period = null;

        /**
         * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费<br><li>DISABLE_NOTIFY_AND_AUTO_RENEW：不自动续费，且不通知<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
         * @type {string || null}
         */
        this.RenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.RenewFlag = 'RenewFlag' in params ? params.RenewFlag : null;

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
 * DescribeInstanceLoginKeyPairAttribute返回参数结构体
 * @class
 */
class DescribeInstanceLoginKeyPairAttributeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否允许使用默认密钥对登录，YES：允许登录 NO：禁止登录。
         * @type {string || null}
         */
        this.PermitLogin = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PermitLogin = 'PermitLogin' in params ? params.PermitLogin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    DescribeInstancesTrafficPackagesRequest: DescribeInstancesTrafficPackagesRequest,
    AssociateInstancesKeyPairsResponse: AssociateInstancesKeyPairsResponse,
    ResetInstanceBlueprint: ResetInstanceBlueprint,
    DescribeInstancesTrafficPackagesResponse: DescribeInstancesTrafficPackagesResponse,
    DescribeInstancesDeniedActionsRequest: DescribeInstancesDeniedActionsRequest,
    DeleteKeyPairsResponse: DeleteKeyPairsResponse,
    TerminateInstancesResponse: TerminateInstancesResponse,
    RegionInfo: RegionInfo,
    DescribeBlueprintInstancesResponse: DescribeBlueprintInstancesResponse,
    InstanceDeniedActions: InstanceDeniedActions,
    ModifyBundle: ModifyBundle,
    CreateInstanceSnapshotResponse: CreateInstanceSnapshotResponse,
    InquirePriceRenewInstancesResponse: InquirePriceRenewInstancesResponse,
    DeleteFirewallRulesResponse: DeleteFirewallRulesResponse,
    DescribeGeneralResourceQuotasRequest: DescribeGeneralResourceQuotasRequest,
    DeleteKeyPairsRequest: DeleteKeyPairsRequest,
    SystemDisk: SystemDisk,
    ResetInstanceRequest: ResetInstanceRequest,
    DescribeBundlesResponse: DescribeBundlesResponse,
    InquirePriceRenewInstancesRequest: InquirePriceRenewInstancesRequest,
    DiscountDetail: DiscountDetail,
    DescribeRegionsResponse: DescribeRegionsResponse,
    RebootInstancesRequest: RebootInstancesRequest,
    AssociateInstancesKeyPairsRequest: AssociateInstancesKeyPairsRequest,
    ImportKeyPairResponse: ImportKeyPairResponse,
    DescribeSnapshotsRequest: DescribeSnapshotsRequest,
    KeyPair: KeyPair,
    DescribeFirewallRulesTemplateRequest: DescribeFirewallRulesTemplateRequest,
    DescribeKeyPairsResponse: DescribeKeyPairsResponse,
    ModifyBlueprintAttributeRequest: ModifyBlueprintAttributeRequest,
    DescribeBlueprintInstancesRequest: DescribeBlueprintInstancesRequest,
    ApplyInstanceSnapshotResponse: ApplyInstanceSnapshotResponse,
    ModifyFirewallRulesRequest: ModifyFirewallRulesRequest,
    CreateBlueprintRequest: CreateBlueprintRequest,
    DeleteFirewallRulesRequest: DeleteFirewallRulesRequest,
    DescribeInstanceVncUrlRequest: DescribeInstanceVncUrlRequest,
    ModifyFirewallRuleDescriptionRequest: ModifyFirewallRuleDescriptionRequest,
    InstanceTrafficPackage: InstanceTrafficPackage,
    StartInstancesResponse: StartInstancesResponse,
    TrafficPackage: TrafficPackage,
    DisassociateInstancesKeyPairsResponse: DisassociateInstancesKeyPairsResponse,
    DescribeResetInstanceBlueprintsResponse: DescribeResetInstanceBlueprintsResponse,
    InstanceReturnable: InstanceReturnable,
    DescribeInstancesDeniedActionsResponse: DescribeInstancesDeniedActionsResponse,
    ModifyInstancesAttributeRequest: ModifyInstancesAttributeRequest,
    DescribeSnapshotsDeniedActionsResponse: DescribeSnapshotsDeniedActionsResponse,
    StartInstancesRequest: StartInstancesRequest,
    SnapshotDeniedActions: SnapshotDeniedActions,
    DeleteSnapshotsRequest: DeleteSnapshotsRequest,
    ModifySnapshotAttributeRequest: ModifySnapshotAttributeRequest,
    DescribeBundleDiscountResponse: DescribeBundleDiscountResponse,
    DeleteSnapshotsResponse: DeleteSnapshotsResponse,
    DisassociateInstancesKeyPairsRequest: DisassociateInstancesKeyPairsRequest,
    ImportKeyPairRequest: ImportKeyPairRequest,
    DeleteBlueprintsResponse: DeleteBlueprintsResponse,
    ModifyInstancesLoginKeyPairAttributeRequest: ModifyInstancesLoginKeyPairAttributeRequest,
    StopInstancesResponse: StopInstancesResponse,
    FirewallRule: FirewallRule,
    ModifyBlueprintAttributeResponse: ModifyBlueprintAttributeResponse,
    DescribeModifyInstanceBundlesRequest: DescribeModifyInstanceBundlesRequest,
    DescribeRegionsRequest: DescribeRegionsRequest,
    InquirePriceCreateBlueprintResponse: InquirePriceCreateBlueprintResponse,
    DescribeInstancesReturnableRequest: DescribeInstancesReturnableRequest,
    StopInstancesRequest: StopInstancesRequest,
    DescribeBlueprintsResponse: DescribeBlueprintsResponse,
    DescribeKeyPairsRequest: DescribeKeyPairsRequest,
    ResetInstancesPasswordResponse: ResetInstancesPasswordResponse,
    LoginSettings: LoginSettings,
    Instance: Instance,
    CreateKeyPairResponse: CreateKeyPairResponse,
    DescribeInstanceVncUrlResponse: DescribeInstanceVncUrlResponse,
    ModifyFirewallRulesResponse: ModifyFirewallRulesResponse,
    DescribeBundlesRequest: DescribeBundlesRequest,
    Blueprint: Blueprint,
    DeniedAction: DeniedAction,
    ModifyInstancesLoginKeyPairAttributeResponse: ModifyInstancesLoginKeyPairAttributeResponse,
    Bundle: Bundle,
    InquirePriceCreateInstancesResponse: InquirePriceCreateInstancesResponse,
    DescribeSnapshotsDeniedActionsRequest: DescribeSnapshotsDeniedActionsRequest,
    ResetInstancesPasswordRequest: ResetInstancesPasswordRequest,
    CreateKeyPairRequest: CreateKeyPairRequest,
    DescribeInstancesRequest: DescribeInstancesRequest,
    Filter: Filter,
    DescribeSnapshotsResponse: DescribeSnapshotsResponse,
    Snapshot: Snapshot,
    ModifyFirewallRuleDescriptionResponse: ModifyFirewallRuleDescriptionResponse,
    InquirePriceCreateBlueprintRequest: InquirePriceCreateBlueprintRequest,
    CreateFirewallRulesRequest: CreateFirewallRulesRequest,
    Software: Software,
    DescribeFirewallRulesResponse: DescribeFirewallRulesResponse,
    DescribeInstancesReturnableResponse: DescribeInstancesReturnableResponse,
    DeleteBlueprintsRequest: DeleteBlueprintsRequest,
    FirewallRuleInfo: FirewallRuleInfo,
    CreateFirewallRulesResponse: CreateFirewallRulesResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    CreateBlueprintResponse: CreateBlueprintResponse,
    PolicyDetail: PolicyDetail,
    DescribeResetInstanceBlueprintsRequest: DescribeResetInstanceBlueprintsRequest,
    ModifyInstancesRenewFlagResponse: ModifyInstancesRenewFlagResponse,
    ApplyInstanceSnapshotRequest: ApplyInstanceSnapshotRequest,
    TerminateInstancesRequest: TerminateInstancesRequest,
    InternetAccessible: InternetAccessible,
    RebootInstancesResponse: RebootInstancesResponse,
    DescribeInstanceLoginKeyPairAttributeRequest: DescribeInstanceLoginKeyPairAttributeRequest,
    DescribeBundleDiscountRequest: DescribeBundleDiscountRequest,
    Price: Price,
    BlueprintPrice: BlueprintPrice,
    GeneralResourceQuota: GeneralResourceQuota,
    DescribeBlueprintsRequest: DescribeBlueprintsRequest,
    SoftwareDetail: SoftwareDetail,
    InstancePrice: InstancePrice,
    ModifySnapshotAttributeResponse: ModifySnapshotAttributeResponse,
    DescribeGeneralResourceQuotasResponse: DescribeGeneralResourceQuotasResponse,
    ModifyInstancesRenewFlagRequest: ModifyInstancesRenewFlagRequest,
    DescribeFirewallRulesTemplateResponse: DescribeFirewallRulesTemplateResponse,
    ResetInstanceResponse: ResetInstanceResponse,
    DescribeFirewallRulesRequest: DescribeFirewallRulesRequest,
    InquirePriceCreateInstancesRequest: InquirePriceCreateInstancesRequest,
    DescribeModifyInstanceBundlesResponse: DescribeModifyInstanceBundlesResponse,
    CreateInstanceSnapshotRequest: CreateInstanceSnapshotRequest,
    BlueprintInstance: BlueprintInstance,
    InstanceChargePrepaid: InstanceChargePrepaid,
    ModifyInstancesAttributeResponse: ModifyInstancesAttributeResponse,
    DescribeInstanceLoginKeyPairAttributeResponse: DescribeInstanceLoginKeyPairAttributeResponse,

}

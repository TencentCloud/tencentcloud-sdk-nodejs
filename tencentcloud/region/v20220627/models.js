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
 * 地域管理系统支持的产品信息
 * @class
 */
class RegionProduct extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称，如cvm
         * @type {string || null}
         */
        this.Name = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeProducts请求参数结构体
 * @class
 */
class DescribeProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数量，默认为 20，最大值为 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，默认为 0。
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
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeProducts返回参数结构体
 * @class
 */
class DescribeProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品详细信息列表。
         * @type {Array.<RegionProduct> || null}
         */
        this.Products = null;

        /**
         * 产品总数量。
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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new RegionProduct();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 可用区信息
 * @class
 */
class ZoneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区名称，例如，ap-guangzhou-3
全网可用区名称如下：
<li> ap-chongqing-1 </li>
<li> ap-seoul-1 </li>
<li> ap-seoul-2 </li>
<li> ap-chengdu-1 </li>
<li> ap-chengdu-2 </li>
<li> ap-hongkong-1 </li>
<li> ap-hongkong-2 </li>
<li> ap-shenzhen-fsi-1 </li>
<li> ap-shenzhen-fsi-2 </li>
<li> ap-shenzhen-fsi-3 </li>
<li> ap-guangzhou-1（售罄）</li>
<li> ap-guangzhou-2（售罄）</li>
<li> ap-guangzhou-3 </li>
<li> ap-guangzhou-4 </li>
<li> ap-guangzhou-6 </li>
<li> ap-tokyo-1 </li>
<li> ap-singapore-1 </li>
<li> ap-singapore-2 </li>
<li> ap-shanghai-fsi-1 </li>
<li> ap-shanghai-fsi-2 </li>
<li> ap-shanghai-fsi-3 </li>
<li> ap-bangkok-1 </li>
<li> ap-shanghai-1（售罄） </li>
<li> ap-shanghai-2 </li>
<li> ap-shanghai-3 </li>
<li> ap-shanghai-4 </li>
<li> ap-shanghai-5 </li>
<li> ap-mumbai-1 </li>
<li> ap-mumbai-2 </li>
<li> eu-moscow-1 </li>
<li> ap-beijing-1 </li>
<li> ap-beijing-2 </li>
<li> ap-beijing-3 </li>
<li> ap-beijing-4 </li>
<li> ap-beijing-5 </li>
<li> na-siliconvalley-1 </li>
<li> na-siliconvalley-2 </li>
<li> eu-frankfurt-1 </li>
<li> na-toronto-1 </li>
<li> na-ashburn-1 </li>
<li> na-ashburn-2 </li>
<li> ap-nanjing-1 </li>
<li> ap-nanjing-2 </li>
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * 可用区描述，例如，广州三区
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * 可用区ID
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。
         * @type {string || null}
         */
        this.ZoneState = null;

        /**
         * 父级zone
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParentZone = null;

        /**
         * 父级可用区ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParentZoneId = null;

        /**
         * 父级可用区描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ParentZoneName = null;

        /**
         * zone类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneType = null;

        /**
         * 控制台类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MachineRoomTypeMC = null;

        /**
         * 和ZoneId一样，适用于控制台调用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ZoneIdMC = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneState = 'ZoneState' in params ? params.ZoneState : null;
        this.ParentZone = 'ParentZone' in params ? params.ParentZone : null;
        this.ParentZoneId = 'ParentZoneId' in params ? params.ParentZoneId : null;
        this.ParentZoneName = 'ParentZoneName' in params ? params.ParentZoneName : null;
        this.ZoneType = 'ZoneType' in params ? params.ZoneType : null;
        this.MachineRoomTypeMC = 'MachineRoomTypeMC' in params ? params.MachineRoomTypeMC : null;
        this.ZoneIdMC = 'ZoneIdMC' in params ? params.ZoneIdMC : null;

    }
}

/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询产品的名称，例如cvm，具体取值请查询DescribeProducts接口
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;

    }
}

/**
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 可用区数量。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 可用区列表信息。
         * @type {Array.<ZoneInfo> || null}
         */
        this.ZoneSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneInfo();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 地域信息
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 地域名称，例如，ap-guangzhou
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 地域描述，例如，华南地区(广州)
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * 地域是否可用状态
         * @type {string || null}
         */
        this.RegionState = null;

        /**
         * 控制台类型，api调用时默认null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RegionTypeMC = null;

        /**
         * 不同语言的地区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocationMC = null;

        /**
         * 控制台展示的地域描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionNameMC = null;

        /**
         * 1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionIdMC = null;

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
        this.RegionTypeMC = 'RegionTypeMC' in params ? params.RegionTypeMC : null;
        this.LocationMC = 'LocationMC' in params ? params.LocationMC : null;
        this.RegionNameMC = 'RegionNameMC' in params ? params.RegionNameMC : null;
        this.RegionIdMC = 'RegionIdMC' in params ? params.RegionIdMC : null;

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
         * 地域数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 地域列表信息
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
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待查询产品的名称，例如cvm，具体取值请查询DescribeProducts接口
         * @type {string || null}
         */
        this.Product = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;

    }
}

module.exports = {
    RegionProduct: RegionProduct,
    DescribeProductsRequest: DescribeProductsRequest,
    DescribeProductsResponse: DescribeProductsResponse,
    ZoneInfo: ZoneInfo,
    DescribeZonesRequest: DescribeZonesRequest,
    DescribeZonesResponse: DescribeZonesResponse,
    RegionInfo: RegionInfo,
    DescribeRegionsResponse: DescribeRegionsResponse,
    DescribeRegionsRequest: DescribeRegionsRequest,

}

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
 * UpdateDevicesEnableState返回参数结构体
 * @class
 */
class UpdateDevicesEnableStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除的结果代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultCode = null;

        /**
         * 删除的结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.ResultMessage = 'ResultMessage' in params ? params.ResultMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceLocationSolve请求参数结构体
 * @class
 */
class DescribeDeviceLocationSolveRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 定位解析类型，wifi或GNSSNavigation
         * @type {string || null}
         */
        this.LocationType = null;

        /**
         * LoRaEdge卫星导航电文
         * @type {string || null}
         */
        this.GNSSNavigation = null;

        /**
         * wifi信息
         * @type {Array.<WifiInfo> || null}
         */
        this.WiFiInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.LocationType = 'LocationType' in params ? params.LocationType : null;
        this.GNSSNavigation = 'GNSSNavigation' in params ? params.GNSSNavigation : null;

        if (params.WiFiInfo) {
            this.WiFiInfo = new Array();
            for (let z in params.WiFiInfo) {
                let obj = new WifiInfo();
                obj.deserialize(params.WiFiInfo[z]);
                this.WiFiInfo.push(obj);
            }
        }

    }
}

/**
 * DeleteProject请求参数结构体
 * @class
 */
class DeleteProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ProductId -> DeviceName
 * @class
 */
class DevicesItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * DeleteFenceBind请求参数结构体
 * @class
 */
class DeleteFenceBindRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏Id
         * @type {number || null}
         */
        this.FenceId = null;

        /**
         * 围栏绑定的产品信息
         * @type {Array.<FenceBindProductItem> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FenceId = 'FenceId' in params ? params.FenceId : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new FenceBindProductItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * DescribeModelDefinition返回参数结构体
 * @class
 */
class DescribeModelDefinitionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品数据模板
         * @type {ProductModelDefinition || null}
         */
        this.Model = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Model) {
            let obj = new ProductModelDefinition();
            obj.deserialize(params.Model)
            this.Model = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindDevices请求参数结构体
 * @class
 */
class UnbindDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关设备的产品ID
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 网关设备的设备名
         * @type {string || null}
         */
        this.GatewayDeviceName = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名列表
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.GatewayDeviceName = 'GatewayDeviceName' in params ? params.GatewayDeviceName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;

    }
}

/**
 * DeleteDevices返回参数结构体
 * @class
 */
class DeleteDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除的结果代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultCode = null;

        /**
         * 删除的结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.ResultMessage = 'ResultMessage' in params ? params.ResultMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyStudioProduct返回参数结构体
 * @class
 */
class ModifyStudioProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品描述
         * @type {ProductEntry || null}
         */
        this.Product = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Product) {
            let obj = new ProductEntry();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetGatewaySubDeviceList返回参数结构体
 * @class
 */
class GetGatewaySubDeviceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备的总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 设备列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FamilySubDevice || null}
         */
        this.DeviceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.DeviceList) {
            let obj = new FamilySubDevice();
            obj.deserialize(params.DeviceList)
            this.DeviceList = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteStudioProduct返回参数结构体
 * @class
 */
class DeleteStudioProductResponse extends  AbstractModel {
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
 * BindDevices请求参数结构体
 * @class
 */
class BindDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关设备的产品ID。
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 网关设备的设备名。
         * @type {string || null}
         */
        this.GatewayDeviceName = null;

        /**
         * 被绑定设备的产品ID。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 被绑定的多个设备名。
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.GatewayDeviceName = 'GatewayDeviceName' in params ? params.GatewayDeviceName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;

    }
}

/**
 * DescribeGatewaySubProducts返回参数结构体
 * @class
 */
class DescribeGatewaySubProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前分页的可绑定或解绑的产品信息。
         * @type {Array.<BindProductInfo> || null}
         */
        this.Products = null;

        /**
         * 可绑定或解绑的产品总数
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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new BindProductInfo();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDeviceList返回参数结构体
 * @class
 */
class GetDeviceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回的设备列表, 注意列表设备的 DevicePsk 为空, 要获取设备的 DevicePsk 请使用 DescribeDevice
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceInfo> || null}
         */
        this.Devices = null;

        /**
         * 产品下的设备总数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceInfo();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TopicRulePayload结构
 * @class
 */
class TopicRulePayload extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则的SQL语句，如： SELECT * FROM 'pid/dname/event'，然后对其进行base64编码，得：U0VMRUNUICogRlJPTSAncGlkL2RuYW1lL2V2ZW50Jw==
         * @type {string || null}
         */
        this.Sql = null;

        /**
         * 行为的JSON字符串，大部分种类举例如下：
[
{
"republish": {
"topic": "TEST/test"
}
},
{
"forward": {
"api": "http://test.com:8080"
}
},
{
"ckafka": {
"instance": {
"id": "ckafka-test",
"name": ""
},
"topic": {
"id": "topic-test",
"name": "test"
},
"region": "gz"
}
},
{
"cmqqueue": {
"queuename": "queue-test-TEST",
"region": "gz"
}
},
{
"mysql": {
"instanceid": "cdb-test",
"region": "gz",
"username": "test",
"userpwd": "*****",
"dbname": "d_mqtt",
"tablename": "t_test",
"fieldpairs": [
{
"field": "test",
"value": "test"
}
],
"devicetype": "CUSTOM"
}
}
]
         * @type {string || null}
         */
        this.Actions = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 是否禁用规则
         * @type {boolean || null}
         */
        this.RuleDisabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Sql = 'Sql' in params ? params.Sql : null;
        this.Actions = 'Actions' in params ? params.Actions : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleDisabled = 'RuleDisabled' in params ? params.RuleDisabled : null;

    }
}

/**
 * DeleteLoRaFrequency返回参数结构体
 * @class
 */
class DeleteLoRaFrequencyResponse extends  AbstractModel {
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
 * DescribeTopicPolicy请求参数结构体
 * @class
 */
class DescribeTopicPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Topic名字
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * 绑定、未绑定产品详细信息
 * @class
 */
class BindProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品所属项目ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 物模型类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DataProtocol = null;

        /**
         * 产品分组模板ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CategoryId = null;

        /**
         * 产品类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * 连接类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DevStatus = null;

        /**
         * 产品拥有者名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductOwnerName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DataProtocol = 'DataProtocol' in params ? params.DataProtocol : null;
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.DevStatus = 'DevStatus' in params ? params.DevStatus : null;
        this.ProductOwnerName = 'ProductOwnerName' in params ? params.ProductOwnerName : null;

    }
}

/**
 * ModifyPositionFence请求参数结构体
 * @class
 */
class ModifyPositionFenceRequest extends  AbstractModel {
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
 * 围栏信息
 * @class
 */
class PositionFenceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏Id
         * @type {number || null}
         */
        this.FenceId = null;

        /**
         * 位置空间Id
         * @type {string || null}
         */
        this.SpaceId = null;

        /**
         * 围栏名称
         * @type {string || null}
         */
        this.FenceName = null;

        /**
         * 围栏描述
         * @type {string || null}
         */
        this.FenceDesc = null;

        /**
         * 围栏区域信息，采用 GeoJSON 格式
         * @type {string || null}
         */
        this.FenceArea = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FenceId = 'FenceId' in params ? params.FenceId : null;
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;
        this.FenceName = 'FenceName' in params ? params.FenceName : null;
        this.FenceDesc = 'FenceDesc' in params ? params.FenceDesc : null;
        this.FenceArea = 'FenceArea' in params ? params.FenceArea : null;

    }
}

/**
 * DeleteTopicRule返回参数结构体
 * @class
 */
class DeleteTopicRuleResponse extends  AbstractModel {
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
 * 位置点
 * @class
 */
class PositionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置点的时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 位置点的经度
         * @type {number || null}
         */
        this.Longitude = null;

        /**
         * 位置点的纬度
         * @type {number || null}
         */
        this.Latitude = null;

        /**
         * 位置点的定位类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocationType = null;

        /**
         * 位置点的精度预估，单位为米
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Accuracy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.LocationType = 'LocationType' in params ? params.LocationType : null;
        this.Accuracy = 'Accuracy' in params ? params.Accuracy : null;

    }
}

/**
 * ModifyModelDefinition请求参数结构体
 * @class
 */
class ModifyModelDefinitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 数据模板定义
         * @type {string || null}
         */
        this.ModelSchema = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ModelSchema = 'ModelSchema' in params ? params.ModelSchema : null;

    }
}

/**
 * CreateStudioProduct返回参数结构体
 * @class
 */
class CreateStudioProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品描述
         * @type {ProductEntry || null}
         */
        this.Product = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Product) {
            let obj = new ProductEntry();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CallDeviceActionSync请求参数结构体
 * @class
 */
class CallDeviceActionSyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义
         * @type {string || null}
         */
        this.ActionId = null;

        /**
         * 输入参数
         * @type {string || null}
         */
        this.InputParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.InputParams = 'InputParams' in params ? params.InputParams : null;

    }
}

/**
 * 产品设备位置信息
 * @class
 */
class ProductDevicesPositionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备位置列表
         * @type {Array.<DevicePositionItem> || null}
         */
        this.Items = null;

        /**
         * 产品标识
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备位置数量
         * @type {number || null}
         */
        this.Total = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new DevicePositionItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * DescribeDevicePositionList请求参数结构体
 * @class
 */
class DescribeDevicePositionListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品标识列表
         * @type {Array.<string> || null}
         */
        this.ProductIdList = null;

        /**
         * 坐标类型
         * @type {number || null}
         */
        this.CoordinateType = null;

        /**
         * 分页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的大小
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
        this.ProductIdList = 'ProductIdList' in params ? params.ProductIdList : null;
        this.CoordinateType = 'CoordinateType' in params ? params.CoordinateType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * GetDeviceLocationHistory返回参数结构体
 * @class
 */
class GetDeviceLocationHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 历史位置列表
         * @type {Array.<PositionItem> || null}
         */
        this.Positions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Positions) {
            this.Positions = new Array();
            for (let z in params.Positions) {
                let obj = new PositionItem();
                obj.deserialize(params.Positions[z]);
                this.Positions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateFirmware返回参数结构体
 * @class
 */
class UpdateFirmwareResponse extends  AbstractModel {
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
 * ModifyPositionFence返回参数结构体
 * @class
 */
class ModifyPositionFenceResponse extends  AbstractModel {
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
 * ModifyStudioProduct请求参数结构体
 * @class
 */
class ModifyStudioProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.ProductDesc = null;

        /**
         * 模型ID
         * @type {number || null}
         */
        this.ModuleId = null;

        /**
         * 是否打开二进制转Json功能, 取值为字符串 true/false
         * @type {string || null}
         */
        this.EnableProductScript = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductDesc = 'ProductDesc' in params ? params.ProductDesc : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.EnableProductScript = 'EnableProductScript' in params ? params.EnableProductScript : null;

    }
}

/**
 * ModifyPositionSpace返回参数结构体
 * @class
 */
class ModifyPositionSpaceResponse extends  AbstractModel {
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
 * CreateStudioProduct请求参数结构体
 * @class
 */
class CreateStudioProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称，名称不能和已经存在的产品名称重复。命名规则：[a-zA-Z0-9:_-]{1,32}
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品分组模板ID , ( 自定义模板填写1 , 控制台调用会使用预置的其他ID)
         * @type {number || null}
         */
        this.CategoryId = null;

        /**
         * 产品类型 填写 ( 0 普通产品 )
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * 加密类型 加密类型，1表示证书认证，2表示签名认证。
         * @type {string || null}
         */
        this.EncryptionType = null;

        /**
         * 连接类型 可以填写 wifi cellular else
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 数据协议 (1 使用物模型 2 为自定义)
         * @type {number || null}
         */
        this.DataProtocol = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.ProductDesc = null;

        /**
         * 产品的项目ID
         * @type {string || null}
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
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.EncryptionType = 'EncryptionType' in params ? params.EncryptionType : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.DataProtocol = 'DataProtocol' in params ? params.DataProtocol : null;
        this.ProductDesc = 'ProductDesc' in params ? params.ProductDesc : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * 产品模型定义
 * @class
 */
class ProductModelDefinition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 模型定义
         * @type {string || null}
         */
        this.ModelDefine = null;

        /**
         * 更新时间，秒级时间戳
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间，秒级时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 产品所属分类的模型快照（产品创建时刻的）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CategoryModel = null;

        /**
         * 产品的连接类型的模型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NetTypeModel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ModelDefine = 'ModelDefine' in params ? params.ModelDefine : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.CategoryModel = 'CategoryModel' in params ? params.CategoryModel : null;
        this.NetTypeModel = 'NetTypeModel' in params ? params.NetTypeModel : null;

    }
}

/**
 * ModifyFenceBind返回参数结构体
 * @class
 */
class ModifyFenceBindResponse extends  AbstractModel {
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
 * CreateBatchProduction请求参数结构体
 * @class
 */
class CreateBatchProductionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 烧录方式，0为直接烧录，1为动态注册。
         * @type {number || null}
         */
        this.BurnMethod = null;

        /**
         * 生成方式，0为系统生成，1为文件上传。
         * @type {number || null}
         */
        this.GenerationMethod = null;

        /**
         * 文件上传URL，用于文件上传时填写。
         * @type {string || null}
         */
        this.UploadUrl = null;

        /**
         * 量产数量，用于系统生成时填写。
         * @type {number || null}
         */
        this.BatchCnt = null;

        /**
         * 是否生成二维码,0为不生成，1为生成。
         * @type {number || null}
         */
        this.GenerationQRCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.BurnMethod = 'BurnMethod' in params ? params.BurnMethod : null;
        this.GenerationMethod = 'GenerationMethod' in params ? params.GenerationMethod : null;
        this.UploadUrl = 'UploadUrl' in params ? params.UploadUrl : null;
        this.BatchCnt = 'BatchCnt' in params ? params.BatchCnt : null;
        this.GenerationQRCode = 'GenerationQRCode' in params ? params.GenerationQRCode : null;

    }
}

/**
 * DeletePositionFence返回参数结构体
 * @class
 */
class DeletePositionFenceResponse extends  AbstractModel {
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
 * 围栏告警位置点
 * @class
 */
class FenceAlarmPoint extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏告警时间
         * @type {number || null}
         */
        this.AlarmTime = null;

        /**
         * 围栏告警位置的经度
         * @type {number || null}
         */
        this.Longitude = null;

        /**
         * 围栏告警位置的纬度
         * @type {number || null}
         */
        this.Latitude = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmTime = 'AlarmTime' in params ? params.AlarmTime : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;

    }
}

/**
 * UploadFirmware请求参数结构体
 * @class
 */
class UploadFirmwareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 固件版本号
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * 固件的MD5值
         * @type {string || null}
         */
        this.Md5sum = null;

        /**
         * 固件的大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 固件名称
         * @type {string || null}
         */
        this.FirmwareName = null;

        /**
         * 固件描述
         * @type {string || null}
         */
        this.FirmwareDescription = null;

        /**
         * 固件升级模块；可选值 mcu|moudule
         * @type {string || null}
         */
        this.FwType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.Md5sum = 'Md5sum' in params ? params.Md5sum : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.FirmwareName = 'FirmwareName' in params ? params.FirmwareName : null;
        this.FirmwareDescription = 'FirmwareDescription' in params ? params.FirmwareDescription : null;
        this.FwType = 'FwType' in params ? params.FwType : null;

    }
}

/**
 * ListEventHistory请求参数结构体
 * @class
 */
class ListEventHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 搜索的事件类型：alert 表示告警，fault 表示故障，info 表示信息，为空则表示查询上述所有类型事件
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 起始时间（Unix 时间戳，秒级）, 为0 表示 当前时间 - 24h
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间（Unix 时间戳，秒级）, 为0 表示当前时间
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 搜索上下文, 用作查询游标
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 单次获取的历史数据项目的最大数量, 缺省10
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 事件标识符，可以用来指定查询特定的事件，如果不指定，则查询所有事件。
         * @type {string || null}
         */
        this.EventId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * SearchTopicRule请求参数结构体
 * @class
 */
class SearchTopicRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * DescribeDeviceData请求参数结构体
 * @class
 */
class DescribeDeviceDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备ID，该字段有值将代替 ProductId/DeviceName
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * 围栏绑定的产品信息
 * @class
 */
class FenceBindProductItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏绑定的设备信息
         * @type {Array.<FenceBindDeviceItem> || null}
         */
        this.Devices = null;

        /**
         * 围栏绑定的产品Id
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new FenceBindDeviceItem();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * PublishRRPCMessage请求参数结构体
 * @class
 */
class PublishRRPCMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 消息内容，utf8编码
         * @type {string || null}
         */
        this.Payload = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Payload = 'Payload' in params ? params.Payload : null;

    }
}

/**
 * 设备位置详情
 * @class
 */
class DevicePositionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 位置信息时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 设备经度信息
         * @type {number || null}
         */
        this.Longitude = null;

        /**
         * 设备纬度信息
         * @type {number || null}
         */
        this.Latitude = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;

    }
}

/**
 * ListTopicPolicy返回参数结构体
 * @class
 */
class ListTopicPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic列表
         * @type {Array.<TopicItem> || null}
         */
        this.Topics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new TopicItem();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchPositionSpace返回参数结构体
 * @class
 */
class SearchPositionSpaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置空间列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PositionSpaceInfo> || null}
         */
        this.List = null;

        /**
         * 符合条件的位置空间个数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new PositionSpaceInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePositionFenceList返回参数结构体
 * @class
 */
class DescribePositionFenceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PositionFenceInfo> || null}
         */
        this.List = null;

        /**
         * 围栏数量
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new PositionFenceInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GenSingleDeviceSignatureOfPublic返回参数结构体
 * @class
 */
class GenSingleDeviceSignatureOfPublicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备签名
         * @type {DeviceSignatureInfo || null}
         */
        this.DeviceSignature = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceSignature) {
            let obj = new DeviceSignatureInfo();
            obj.deserialize(params.DeviceSignature)
            this.DeviceSignature = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDevicePositionList返回参数结构体
 * @class
 */
class DescribeDevicePositionListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品设备位置信息列表
         * @type {Array.<ProductDevicesPositionItem> || null}
         */
        this.Positions = null;

        /**
         * 产品设备位置信息的数目
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

        if (params.Positions) {
            this.Positions = new Array();
            for (let z in params.Positions) {
                let obj = new ProductDevicesPositionItem();
                obj.deserialize(params.Positions[z]);
                this.Positions.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetProjectList返回参数结构体
 * @class
 */
class GetProjectListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProjectEntryEx> || null}
         */
        this.Projects = null;

        /**
         * 列表项个数
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.Projects) {
            this.Projects = new Array();
            for (let z in params.Projects) {
                let obj = new ProjectEntryEx();
                obj.deserialize(params.Projects[z]);
                this.Projects.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateProject请求参数结构体
 * @class
 */
class CreateProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目描述
         * @type {string || null}
         */
        this.ProjectDesc = null;

        /**
         * 实例ID，不带实例ID，默认为公共实例
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
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectDesc = 'ProjectDesc' in params ? params.ProjectDesc : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeProject返回参数结构体
 * @class
 */
class DescribeProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回信息
         * @type {ProjectEntryEx || null}
         */
        this.Project = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Project) {
            let obj = new ProjectEntryEx();
            obj.deserialize(params.Project)
            this.Project = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindProducts请求参数结构体
 * @class
 */
class UnbindProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关产品ID
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 待解绑的子产品ID数组
         * @type {Array.<string> || null}
         */
        this.ProductIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.ProductIds = 'ProductIds' in params ? params.ProductIds : null;

    }
}

/**
 * SearchStudioProduct返回参数结构体
 * @class
 */
class SearchStudioProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品列表
         * @type {Array.<ProductEntry> || null}
         */
        this.Products = null;

        /**
         * 产品数量
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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new ProductEntry();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeviceData
 * @class
 */
class DeviceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备证书，用于 TLS 建立链接时校验客户端身份。采用非对称加密时返回该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceCert = null;

        /**
         * 设备名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备私钥，用于 TLS 建立链接时校验客户端身份，腾讯云后台不保存，请妥善保管。采用非对称加密时返回该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DevicePrivateKey = null;

        /**
         * 对称加密密钥，base64编码。采用对称加密时返回该参数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DevicePsk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DevicePrivateKey = 'DevicePrivateKey' in params ? params.DevicePrivateKey : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;

    }
}

/**
 * wifi定位信息
 * @class
 */
class WifiInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * mac地址
         * @type {string || null}
         */
        this.MAC = null;

        /**
         * 信号强度
         * @type {number || null}
         */
        this.RSSI = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MAC = 'MAC' in params ? params.MAC : null;
        this.RSSI = 'RSSI' in params ? params.RSSI : null;

    }
}

/**
 * GetTopicRuleList请求参数结构体
 * @class
 */
class GetTopicRuleListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求的页数
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 分页的大小
         * @type {number || null}
         */
        this.PageSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;

    }
}

/**
 * 围栏绑定的设备信息
 * @class
 */
class FenceBindDeviceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 告警条件(In，进围栏报警；Out，出围栏报警；InOrOut，进围栏或者出围栏均报警)
         * @type {string || null}
         */
        this.AlertCondition = null;

        /**
         * 是否使能围栏(true，使能；false，禁用)
         * @type {boolean || null}
         */
        this.FenceEnable = null;

        /**
         * 告警处理方法
         * @type {string || null}
         */
        this.Method = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.AlertCondition = 'AlertCondition' in params ? params.AlertCondition : null;
        this.FenceEnable = 'FenceEnable' in params ? params.FenceEnable : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * 设备历史数据结构
 * @class
 */
class DeviceDataHistoryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间点，毫秒时间戳
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 字段取值
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * GetFamilyDeviceUserList返回参数结构体
 * @class
 */
class GetFamilyDeviceUserListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备的用户列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceUser> || null}
         */
        this.UserList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UserList) {
            this.UserList = new Array();
            for (let z in params.UserList) {
                let obj = new DeviceUser();
                obj.deserialize(params.UserList[z]);
                this.UserList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindDeviceInfo
 * @class
 */
class BindDeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称。
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * 项目详情
 * @class
 */
class ProjectEntryEx extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目描述
         * @type {string || null}
         */
        this.ProjectDesc = null;

        /**
         * 项目创建时间，unix时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 项目更新时间，unix时间戳
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 产品数量
         * @type {number || null}
         */
        this.ProductCount = null;

        /**
         * NativeApp数量
         * @type {number || null}
         */
        this.NativeAppCount = null;

        /**
         * WebApp数量
         * @type {number || null}
         */
        this.WebAppCount = null;

        /**
         * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 应用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ApplicationCount = null;

        /**
         * 设备注册总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.DeviceCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectDesc = 'ProjectDesc' in params ? params.ProjectDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ProductCount = 'ProductCount' in params ? params.ProductCount : null;
        this.NativeAppCount = 'NativeAppCount' in params ? params.NativeAppCount : null;
        this.WebAppCount = 'WebAppCount' in params ? params.WebAppCount : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ApplicationCount = 'ApplicationCount' in params ? params.ApplicationCount : null;
        this.DeviceCount = 'DeviceCount' in params ? params.DeviceCount : null;

    }
}

/**
 * DescribeBatchProduction返回参数结构体
 * @class
 */
class DescribeBatchProductionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 量产数量。
         * @type {number || null}
         */
        this.BatchCnt = null;

        /**
         * 烧录方式。
         * @type {number || null}
         */
        this.BurnMethod = null;

        /**
         * 创建时间。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 下载URL。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 生成方式。
         * @type {number || null}
         */
        this.GenerationMethod = null;

        /**
         * 上传URL。
         * @type {string || null}
         */
        this.UploadUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchCnt = 'BatchCnt' in params ? params.BatchCnt : null;
        this.BurnMethod = 'BurnMethod' in params ? params.BurnMethod : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.GenerationMethod = 'GenerationMethod' in params ? params.GenerationMethod : null;
        this.UploadUrl = 'UploadUrl' in params ? params.UploadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListTopicPolicy请求参数结构体
 * @class
 */
class ListTopicPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * 获取返回列表的详情。
 * @class
 */
class BatchProductionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 量产ID
         * @type {string || null}
         */
        this.BatchProductionId = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 烧录方式
         * @type {number || null}
         */
        this.BurnMethod = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchProductionId = 'BatchProductionId' in params ? params.BatchProductionId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.BurnMethod = 'BurnMethod' in params ? params.BurnMethod : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

    }
}

/**
 * DeleteDevice请求参数结构体
 * @class
 */
class DeleteDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称。
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 是否删除绑定设备
         * @type {boolean || null}
         */
        this.ForceDelete = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ForceDelete = 'ForceDelete' in params ? params.ForceDelete : null;

    }
}

/**
 * DeleteLoRaFrequency请求参数结构体
 * @class
 */
class DeleteLoRaFrequencyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频点唯一ID
         * @type {string || null}
         */
        this.FreqId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FreqId = 'FreqId' in params ? params.FreqId : null;

    }
}

/**
 * ControlDeviceData请求参数结构体
 * @class
 */
class ControlDeviceDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 属性数据, JSON格式字符串, 注意字段需要在物模型属性里定义
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 请求类型 , 不填该参数或者 desired 表示下发属性给设备,  reported 表示模拟设备上报属性
         * @type {string || null}
         */
        this.Method = null;

        /**
         * 设备ID，该字段有值将代替 ProductId/DeviceName , 通常情况不需要填写
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 上报数据UNIX时间戳(毫秒), 仅对Method:reported有效
         * @type {number || null}
         */
        this.DataTimestamp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Method = 'Method' in params ? params.Method : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.DataTimestamp = 'DataTimestamp' in params ? params.DataTimestamp : null;

    }
}

/**
 * ListFirmwares返回参数结构体
 * @class
 */
class ListFirmwaresResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固件总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 固件列表
         * @type {Array.<FirmwareInfo> || null}
         */
        this.Firmwares = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Firmwares) {
            this.Firmwares = new Array();
            for (let z in params.Firmwares) {
                let obj = new FirmwareInfo();
                obj.deserialize(params.Firmwares[z]);
                this.Firmwares.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseStudioProduct返回参数结构体
 * @class
 */
class ReleaseStudioProductResponse extends  AbstractModel {
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
 * DescribeSpaceFenceEventList返回参数结构体
 * @class
 */
class DescribeSpaceFenceEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏告警事件列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FenceEventItem> || null}
         */
        this.List = null;

        /**
         * 围栏告警事件总数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new FenceEventItem();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 围栏详细信息(包含创建时间及更新时间)
 * @class
 */
class PositionFenceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏信息
         * @type {PositionFenceItem || null}
         */
        this.GeoFence = null;

        /**
         * 围栏创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 围栏更新时间
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GeoFence) {
            let obj = new PositionFenceItem();
            obj.deserialize(params.GeoFence)
            this.GeoFence = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteLoRaGateway请求参数结构体
 * @class
 */
class DeleteLoRaGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LoRa 网关 Id
         * @type {string || null}
         */
        this.GatewayId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;

    }
}

/**
 * UnbindProducts返回参数结构体
 * @class
 */
class UnbindProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定了待解绑的LoRa产品下的设备的网关设备列表
         * @type {Array.<string> || null}
         */
        this.GatewayDeviceNames = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayDeviceNames = 'GatewayDeviceNames' in params ? params.GatewayDeviceNames : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTopicPolicy返回参数结构体
 * @class
 */
class DescribeTopicPolicyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic权限
         * @type {number || null}
         */
        this.Privilege = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SearchPositionSpace请求参数结构体
 * @class
 */
class SearchPositionSpaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 位置空间名字
         * @type {string || null}
         */
        this.SpaceName = null;

        /**
         * 偏移量，从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大获取数量
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SpaceName = 'SpaceName' in params ? params.SpaceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * LoRa自定义频点信息
 * @class
 */
class LoRaFrequencyEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频点唯一ID
         * @type {string || null}
         */
        this.FreqId = null;

        /**
         * 频点名称
         * @type {string || null}
         */
        this.FreqName = null;

        /**
         * 频点描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据上行信道
         * @type {Array.<number> || null}
         */
        this.ChannelsDataUp = null;

        /**
         * 数据下行信道RX1
         * @type {Array.<number> || null}
         */
        this.ChannelsDataRX1 = null;

        /**
         * 数据下行信道RX2
         * @type {Array.<number> || null}
         */
        this.ChannelsDataRX2 = null;

        /**
         * 入网上行信道
         * @type {Array.<number> || null}
         */
        this.ChannelsJoinUp = null;

        /**
         * 入网下行RX1信道
         * @type {Array.<number> || null}
         */
        this.ChannelsJoinRX1 = null;

        /**
         * 入网下行RX2信道
         * @type {Array.<number> || null}
         */
        this.ChannelsJoinRX2 = null;

        /**
         * 创建时间
         * @type {number || null}
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
        this.FreqId = 'FreqId' in params ? params.FreqId : null;
        this.FreqName = 'FreqName' in params ? params.FreqName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ChannelsDataUp = 'ChannelsDataUp' in params ? params.ChannelsDataUp : null;
        this.ChannelsDataRX1 = 'ChannelsDataRX1' in params ? params.ChannelsDataRX1 : null;
        this.ChannelsDataRX2 = 'ChannelsDataRX2' in params ? params.ChannelsDataRX2 : null;
        this.ChannelsJoinUp = 'ChannelsJoinUp' in params ? params.ChannelsJoinUp : null;
        this.ChannelsJoinRX1 = 'ChannelsJoinRX1' in params ? params.ChannelsJoinRX1 : null;
        this.ChannelsJoinRX2 = 'ChannelsJoinRX2' in params ? params.ChannelsJoinRX2 : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * ModifyTopicPolicy返回参数结构体
 * @class
 */
class ModifyTopicPolicyResponse extends  AbstractModel {
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
 * GetPositionSpaceList请求参数结构体
 * @class
 */
class GetPositionSpaceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 翻页偏移量，0起始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大返回结果数
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * SearchTopicRule返回参数结构体
 * @class
 */
class SearchTopicRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索到的规则总数
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 规则信息列表
         * @type {Array.<TopicRuleInfo> || null}
         */
        this.Rules = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new TopicRuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFenceEventList返回参数结构体
 * @class
 */
class DescribeFenceEventListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏告警事件列表
         * @type {Array.<FenceEventItem> || null}
         */
        this.List = null;

        /**
         * 围栏告警事件总数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new FenceEventItem();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDevicesEnableState请求参数结构体
 * @class
 */
class UpdateDevicesEnableStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 多个设备标识
         * @type {Array.<DevicesItem> || null}
         */
        this.DevicesItems = null;

        /**
         * 1：启用；0：禁用
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

        if (params.DevicesItems) {
            this.DevicesItems = new Array();
            for (let z in params.DevicesItems) {
                let obj = new DevicesItem();
                obj.deserialize(params.DevicesItems[z]);
                this.DevicesItems.push(obj);
            }
        }
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeTopicRule请求参数结构体
 * @class
 */
class DescribeTopicRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称。
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * GetDeviceLocationHistory请求参数结构体
 * @class
 */
class GetDeviceLocationHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 查询起始时间，Unix时间，单位为毫秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，Unix时间，单位为毫秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 坐标类型
         * @type {number || null}
         */
        this.CoordinateType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.CoordinateType = 'CoordinateType' in params ? params.CoordinateType : null;

    }
}

/**
 * CallDeviceActionSync返回参数结构体
 * @class
 */
class CallDeviceActionSyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用Id
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 输出参数，取值设备端上报$thing/up/action method为action_reply 的 response字段，物模型协议参考https://cloud.tencent.com/document/product/1081/34916#.E8.AE.BE.E5.A4.87.E8.A1.8C.E4.B8.BA.E8.B0.83.E7.94.A8
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutputParams = null;

        /**
         * 返回状态，取值设备端上报$thing/up/action	method为action_reply 的 status字段，如果不包含status字段，则取默认值，空字符串，物模型协议参考https://cloud.tencent.com/document/product/1081/34916#.E8.AE.BE.E5.A4.87.E8.A1.8C.E4.B8.BA.E8.B0.83.E7.94.A8
         * @type {string || null}
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
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.OutputParams = 'OutputParams' in params ? params.OutputParams : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLoRaGateway请求参数结构体
 * @class
 */
class CreateLoRaGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * LoRa 网关Id
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 网关名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 详情描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 位置坐标
         * @type {LoRaGatewayLocation || null}
         */
        this.Location = null;

        /**
         * 位置信息
         * @type {string || null}
         */
        this.Position = null;

        /**
         * 位置详情
         * @type {string || null}
         */
        this.PositionDetails = null;

        /**
         * 是否公开
         * @type {boolean || null}
         */
        this.IsPublic = null;

        /**
         * 频点ID
         * @type {string || null}
         */
        this.FrequencyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Location) {
            let obj = new LoRaGatewayLocation();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.Position = 'Position' in params ? params.Position : null;
        this.PositionDetails = 'PositionDetails' in params ? params.PositionDetails : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;
        this.FrequencyId = 'FrequencyId' in params ? params.FrequencyId : null;

    }
}

/**
 * ReleaseStudioProduct请求参数结构体
 * @class
 */
class ReleaseStudioProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品DevStatus
         * @type {string || null}
         */
        this.DevStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DevStatus = 'DevStatus' in params ? params.DevStatus : null;

    }
}

/**
 * CreateProject返回参数结构体
 * @class
 */
class CreateProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回信息
         * @type {ProjectEntry || null}
         */
        this.Project = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Project) {
            let obj = new ProjectEntry();
            obj.deserialize(params.Project)
            this.Project = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceDataHistory返回参数结构体
 * @class
 */
class DescribeDeviceDataHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性字段名称，对应数据模板中功能属性的标识符
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FieldName = null;

        /**
         * 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Listover = null;

        /**
         * 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 历史数据结果数组，返回对应时间点及取值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceDataHistoryItem> || null}
         */
        this.Results = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FieldName = 'FieldName' in params ? params.FieldName : null;
        this.Listover = 'Listover' in params ? params.Listover : null;
        this.Context = 'Context' in params ? params.Context : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new DeviceDataHistoryItem();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteProject返回参数结构体
 * @class
 */
class DeleteProjectResponse extends  AbstractModel {
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
 * CreateTopicPolicy返回参数结构体
 * @class
 */
class CreateTopicPolicyResponse extends  AbstractModel {
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
 * CreateDevice返回参数结构体
 * @class
 */
class CreateDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备参数描述。
         * @type {DeviceData || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
            let obj = new DeviceData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDevice请求参数结构体
 * @class
 */
class CreateDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称。命名规则：[a-zA-Z0-9:_-]{1,48}。
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * LoRaWAN 设备地址
         * @type {string || null}
         */
        this.DevAddr = null;

        /**
         * LoRaWAN 应用密钥
         * @type {string || null}
         */
        this.AppKey = null;

        /**
         * LoRaWAN 设备唯一标识
         * @type {string || null}
         */
        this.DevEUI = null;

        /**
         * LoRaWAN 应用会话密钥
         * @type {string || null}
         */
        this.AppSKey = null;

        /**
         * LoRaWAN 网络会话密钥
         * @type {string || null}
         */
        this.NwkSKey = null;

        /**
         * 手动指定设备的PSK密钥
         * @type {string || null}
         */
        this.DefinedPsk = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DevAddr = 'DevAddr' in params ? params.DevAddr : null;
        this.AppKey = 'AppKey' in params ? params.AppKey : null;
        this.DevEUI = 'DevEUI' in params ? params.DevEUI : null;
        this.AppSKey = 'AppSKey' in params ? params.AppSKey : null;
        this.NwkSKey = 'NwkSKey' in params ? params.NwkSKey : null;
        this.DefinedPsk = 'DefinedPsk' in params ? params.DefinedPsk : null;

    }
}

/**
 * DeletePositionSpace请求参数结构体
 * @class
 */
class DeletePositionSpaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置空间Id
         * @type {string || null}
         */
        this.SpaceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;

    }
}

/**
 * GetStudioProductList请求参数结构体
 * @class
 */
class GetStudioProductListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 产品DevStatus
         * @type {string || null}
         */
        this.DevStatus = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 数量限制
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.DevStatus = 'DevStatus' in params ? params.DevStatus : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeFirmwareTask返回参数结构体
 * @class
 */
class DescribeFirmwareTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固件任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 固件任务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 固件任务创建时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 固件任务升级类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 固件任务升级模式。originalVersion（按版本号升级）、filename（提交文件升级）、devicenames（按设备名称升级）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpgradeMode = null;

        /**
         * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 原始固件版本号，在UpgradeMode是originalVersion升级模式下会返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalVersion = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.UpgradeMode = 'UpgradeMode' in params ? params.UpgradeMode : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.OriginalVersion = 'OriginalVersion' in params ? params.OriginalVersion : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备固件详细信息
 * @class
 */
class FirmwareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固件版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 固件MD5值
         * @type {string || null}
         */
        this.Md5sum = null;

        /**
         * 固件创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 固件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 固件描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 固件升级模块
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FwType = null;

        /**
         * 创建者子 uin
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUserId = null;

        /**
         * 创建者昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorNickName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
        this.Md5sum = 'Md5sum' in params ? params.Md5sum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.FwType = 'FwType' in params ? params.FwType : null;
        this.CreateUserId = 'CreateUserId' in params ? params.CreateUserId : null;
        this.CreatorNickName = 'CreatorNickName' in params ? params.CreatorNickName : null;

    }
}

/**
 * DisableTopicRule返回参数结构体
 * @class
 */
class DisableTopicRuleResponse extends  AbstractModel {
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
 * 规则信息
 * @class
 */
class TopicRuleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreatedAt = null;

        /**
         * 规则是否禁用
         * @type {boolean || null}
         */
        this.RuleDisabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.RuleDisabled = 'RuleDisabled' in params ? params.RuleDisabled : null;

    }
}

/**
 * DescribeDeviceLocationSolve返回参数结构体
 * @class
 */
class DescribeDeviceLocationSolveResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经度
         * @type {number || null}
         */
        this.Longitude = null;

        /**
         * 纬度
         * @type {number || null}
         */
        this.Latitude = null;

        /**
         * 类型
         * @type {string || null}
         */
        this.LocationType = null;

        /**
         * 误差精度预估，单位为米
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Accuracy = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.LocationType = 'LocationType' in params ? params.LocationType : null;
        this.Accuracy = 'Accuracy' in params ? params.Accuracy : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeStudioProduct返回参数结构体
 * @class
 */
class DescribeStudioProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品详情
         * @type {ProductEntry || null}
         */
        this.Product = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Product) {
            let obj = new ProductEntry();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateFenceBind请求参数结构体
 * @class
 */
class CreateFenceBindRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏Id
         * @type {number || null}
         */
        this.FenceId = null;

        /**
         * 围栏绑定的产品列表
         * @type {Array.<FenceBindProductItem> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FenceId = 'FenceId' in params ? params.FenceId : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new FenceBindProductItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * DescribeDevice返回参数结构体
 * @class
 */
class DescribeDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息
         * @type {DeviceInfo || null}
         */
        this.Device = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Device) {
            let obj = new DeviceInfo();
            obj.deserialize(params.Device)
            this.Device = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishBroadcastMessage请求参数结构体
 * @class
 */
class PublishBroadcastMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 消息内容
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * 消息质量等级
         * @type {number || null}
         */
        this.Qos = null;

        /**
         * ayload内容的编码格式，取值为base64或空。base64表示云端将收到的请求数据进行base64解码后下发到设备，空则直接将原始内容下发到设备
         * @type {string || null}
         */
        this.PayloadEncoding = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.Qos = 'Qos' in params ? params.Qos : null;
        this.PayloadEncoding = 'PayloadEncoding' in params ? params.PayloadEncoding : null;

    }
}

/**
 * ListFirmwares请求参数结构体
 * @class
 */
class ListFirmwaresRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取的页数
         * @type {number || null}
         */
        this.PageNum = null;

        /**
         * 分页的大小
         * @type {number || null}
         */
        this.PageSize = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 搜索过滤条件
         * @type {Array.<SearchKeyword> || null}
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
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.PageSize = 'PageSize' in params ? params.PageSize : null;
        this.ProductID = 'ProductID' in params ? params.ProductID : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new SearchKeyword();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }

    }
}

/**
 * GetStudioProductList返回参数结构体
 * @class
 */
class GetStudioProductListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品列表
         * @type {Array.<ProductEntry> || null}
         */
        this.Products = null;

        /**
         * 产品数量
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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new ProductEntry();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishMessage请求参数结构体
 * @class
 */
class PublishMessageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 消息发往的主题
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 云端下发到设备的控制报文
         * @type {string || null}
         */
        this.Payload = null;

        /**
         * 消息服务质量等级，取值为0或1
         * @type {number || null}
         */
        this.Qos = null;

        /**
         * Payload的内容编码格式，取值为base64或空。base64表示云端将接收到的base64编码后的报文再转换成二进制报文下发至设备，为空表示不作转换，透传下发至设备
         * @type {string || null}
         */
        this.PayloadEncoding = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.Qos = 'Qos' in params ? params.Qos : null;
        this.PayloadEncoding = 'PayloadEncoding' in params ? params.PayloadEncoding : null;

    }
}

/**
 * 子设备详情
 * @class
 */
class FamilySubDevice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备别名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 设备绑定的家庭ID
         * @type {string || null}
         */
        this.FamilyId = null;

        /**
         * 设备所在的房间ID，默认"0"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 图标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IconUrl = null;

        /**
         * grid图标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IconUrlGrid = null;

        /**
         * 设备绑定时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 设备更新时间戳
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.FamilyId = 'FamilyId' in params ? params.FamilyId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.IconUrl = 'IconUrl' in params ? params.IconUrl : null;
        this.IconUrlGrid = 'IconUrlGrid' in params ? params.IconUrlGrid : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyTopicRule请求参数结构体
 * @class
 */
class ModifyTopicRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 替换的规则包体
         * @type {TopicRulePayload || null}
         */
        this.TopicRulePayload = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.TopicRulePayload) {
            let obj = new TopicRulePayload();
            obj.deserialize(params.TopicRulePayload)
            this.TopicRulePayload = obj;
        }

    }
}

/**
 * GetDeviceList请求参数结构体
 * @class
 */
class GetDeviceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查看设备列表的产品ID, -1代表ProjectId来筛选
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 分页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的大小，数值范围 10-100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 设备固件版本号，若不带此参数会返回所有固件版本的设备。传"None-FirmwareVersion"查询无版本号的设备
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * 需要过滤的设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 项目ID。产品 ID 为 -1 时，该参数必填
         * @type {string || null}
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * ModifySpaceProperty请求参数结构体
 * @class
 */
class ModifySpacePropertyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置空间Id
         * @type {string || null}
         */
        this.SpaceId = null;

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品属性
         * @type {string || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * GetPositionSpaceList返回参数结构体
 * @class
 */
class GetPositionSpaceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置空间列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PositionSpaceInfo> || null}
         */
        this.List = null;

        /**
         * 位置空间数量
注意：此字段可能返回 null，表示取不到有效值。
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new PositionSpaceInfo();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCOSURL返回参数结构体
 * @class
 */
class GetCOSURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固件URL
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyFenceBind请求参数结构体
 * @class
 */
class ModifyFenceBindRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏Id
         * @type {number || null}
         */
        this.FenceId = null;

        /**
         * 围栏绑定的产品列表
         * @type {Array.<FenceBindProductItem> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FenceId = 'FenceId' in params ? params.FenceId : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new FenceBindProductItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * GetTopicRuleList返回参数结构体
 * @class
 */
class GetTopicRuleListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则总数量
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 规则列表
         * @type {Array.<TopicRuleInfo> || null}
         */
        this.Rules = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new TopicRuleInfo();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFenceEventList请求参数结构体
 * @class
 */
class DescribeFenceEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏告警信息的查询起始时间，Unix时间，单位为毫秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 围栏告警信息的查询结束时间，Unix时间，单位为毫秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 围栏Id
         * @type {number || null}
         */
        this.FenceId = null;

        /**
         * 翻页偏移量，0起始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大返回结果数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 告警对应的产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 告警对应的设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

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
        this.FenceId = 'FenceId' in params ? params.FenceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * ModifyPositionSpace请求参数结构体
 * @class
 */
class ModifyPositionSpaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置空间Id
         * @type {string || null}
         */
        this.SpaceId = null;

        /**
         * 位置空间名称
         * @type {string || null}
         */
        this.SpaceName = null;

        /**
         * 授权类型
         * @type {number || null}
         */
        this.AuthorizeType = null;

        /**
         * 产品列表
         * @type {Array.<string> || null}
         */
        this.ProductIdList = null;

        /**
         * 位置空间描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 缩略图
         * @type {string || null}
         */
        this.Icon = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;
        this.SpaceName = 'SpaceName' in params ? params.SpaceName : null;
        this.AuthorizeType = 'AuthorizeType' in params ? params.AuthorizeType : null;
        this.ProductIdList = 'ProductIdList' in params ? params.ProductIdList : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Icon = 'Icon' in params ? params.Icon : null;

    }
}

/**
 * GetLoRaGatewayList返回参数结构体
 * @class
 */
class GetLoRaGatewayListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 返回详情项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<LoRaGatewayItem> || null}
         */
        this.Gateways = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.Gateways) {
            this.Gateways = new Array();
            for (let z in params.Gateways) {
                let obj = new LoRaGatewayItem();
                obj.deserialize(params.Gateways[z]);
                this.Gateways.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 项目详情
 * @class
 */
class ProjectEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目描述
         * @type {string || null}
         */
        this.ProjectDesc = null;

        /**
         * 创建时间，unix时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间，unix时间戳
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectDesc = 'ProjectDesc' in params ? params.ProjectDesc : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ModifyLoRaGateway返回参数结构体
 * @class
 */
class ModifyLoRaGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回网关数据
         * @type {LoRaGatewayItem || null}
         */
        this.Gateway = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Gateway) {
            let obj = new LoRaGatewayItem();
            obj.deserialize(params.Gateway)
            this.Gateway = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备事件的搜索结果项
 * @class
 */
class EventHistoryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件的时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TimeStamp = null;

        /**
         * 事件的产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 事件的设备名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 事件的标识符ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EventId = null;

        /**
         * 事件的类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 事件的数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeStamp = 'TimeStamp' in params ? params.TimeStamp : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * DirectBindDeviceInFamily返回参数结构体
 * @class
 */
class DirectBindDeviceInFamilyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回设备信息
         * @type {AppDeviceInfo || null}
         */
        this.AppDeviceInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppDeviceInfo) {
            let obj = new AppDeviceInfo();
            obj.deserialize(params.AppDeviceInfo)
            this.AppDeviceInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TopicRule结构
 * @class
 */
class TopicRule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称。
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则的SQL语句，如： SELECT * FROM 'pid/dname/event'，然后对其进行base64编码，得：U0VMRUNUICogRlJPTSAncGlkL2RuYW1lL2V2ZW50Jw==
         * @type {string || null}
         */
        this.Sql = null;

        /**
         * 规则描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 行为的JSON字符串。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Actions = null;

        /**
         * 是否禁用规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.RuleDisabled = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Sql = 'Sql' in params ? params.Sql : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Actions = 'Actions' in params ? params.Actions : null;
        this.RuleDisabled = 'RuleDisabled' in params ? params.RuleDisabled : null;

    }
}

/**
 * CallDeviceActionAsync请求参数结构体
 * @class
 */
class CallDeviceActionAsyncRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 产品数据模板中行为功能的标识符，由开发者自行根据设备的应用场景定义
         * @type {string || null}
         */
        this.ActionId = null;

        /**
         * 输入参数
         * @type {string || null}
         */
        this.InputParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.InputParams = 'InputParams' in params ? params.InputParams : null;

    }
}

/**
 * CallDeviceActionAsync返回参数结构体
 * @class
 */
class CallDeviceActionAsyncResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调用Id
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 异步调用状态
         * @type {string || null}
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
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteFenceBind返回参数结构体
 * @class
 */
class DeleteFenceBindResponse extends  AbstractModel {
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
 * DeleteTopicPolicy请求参数结构体
 * @class
 */
class DeleteTopicPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

    }
}

/**
 * CreateFenceBind返回参数结构体
 * @class
 */
class CreateFenceBindResponse extends  AbstractModel {
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
 * DescribeTopicRule返回参数结构体
 * @class
 */
class DescribeTopicRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TopicRule || null}
         */
        this.Rule = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Rule) {
            let obj = new TopicRule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreatePositionFence返回参数结构体
 * @class
 */
class CreatePositionFenceResponse extends  AbstractModel {
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
 * PublishBroadcastMessage返回参数结构体
 * @class
 */
class PublishBroadcastMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 广播消息任务Id
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
 * DescribeFenceBindList请求参数结构体
 * @class
 */
class DescribeFenceBindListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏Id
         * @type {number || null}
         */
        this.FenceId = null;

        /**
         * 翻页偏移量，0起始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大返回结果数
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
        this.FenceId = 'FenceId' in params ? params.FenceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeBindedProducts返回参数结构体
 * @class
 */
class DescribeBindedProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 当前分页的子产品数组
         * @type {Array.<BindProductInfo> || null}
         */
        this.Products = null;

        /**
         * 绑定的子产品总数量
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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new BindProductInfo();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备签名
 * @class
 */
class DeviceSignatureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备签名
         * @type {string || null}
         */
        this.DeviceSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DeviceSignature = 'DeviceSignature' in params ? params.DeviceSignature : null;

    }
}

/**
 * 位置空间详情
 * @class
 */
class PositionSpaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 位置空间Id
         * @type {string || null}
         */
        this.SpaceId = null;

        /**
         * 位置空间名称
         * @type {string || null}
         */
        this.SpaceName = null;

        /**
         * 授权类型
         * @type {number || null}
         */
        this.AuthorizeType = null;

        /**
         * 描述备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 产品列表
         * @type {Array.<string> || null}
         */
        this.ProductIdList = null;

        /**
         * 缩略图
         * @type {string || null}
         */
        this.Icon = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 用户自定义地图缩放
         * @type {number || null}
         */
        this.Zoom = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;
        this.SpaceName = 'SpaceName' in params ? params.SpaceName : null;
        this.AuthorizeType = 'AuthorizeType' in params ? params.AuthorizeType : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ProductIdList = 'ProductIdList' in params ? params.ProductIdList : null;
        this.Icon = 'Icon' in params ? params.Icon : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Zoom = 'Zoom' in params ? params.Zoom : null;

    }
}

/**
 * 网关坐标
 * @class
 */
class LoRaGatewayLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 纬度
         * @type {number || null}
         */
        this.Latitude = null;

        /**
         * 精度
         * @type {number || null}
         */
        this.Longitude = null;

        /**
         * 准确度
         * @type {number || null}
         */
        this.Accuracy = null;

        /**
         * 海拔
         * @type {number || null}
         */
        this.Altitude = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.Accuracy = 'Accuracy' in params ? params.Accuracy : null;
        this.Altitude = 'Altitude' in params ? params.Altitude : null;

    }
}

/**
 * DescribeDevice请求参数结构体
 * @class
 */
class DescribeDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备ID，该字段有值将代替 ProductId/DeviceName
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * DescribePositionFenceList请求参数结构体
 * @class
 */
class DescribePositionFenceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置空间Id
         * @type {string || null}
         */
        this.SpaceId = null;

        /**
         * 翻页偏移量，0起始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大返回结果数
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
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ModifyTopicRule返回参数结构体
 * @class
 */
class ModifyTopicRuleResponse extends  AbstractModel {
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
 * DescribeBatchProduction请求参数结构体
 * @class
 */
class DescribeBatchProductionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 量产ID
         * @type {string || null}
         */
        this.BatchProductionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.BatchProductionId = 'BatchProductionId' in params ? params.BatchProductionId : null;

    }
}

/**
 * CreateTopicPolicy请求参数结构体
 * @class
 */
class CreateTopicPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic权限，1发布，2订阅，3订阅和发布
         * @type {number || null}
         */
        this.Privilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

    }
}

/**
 * DirectBindDeviceInFamily请求参数结构体
 * @class
 */
class DirectBindDeviceInFamilyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 小程序appid
         * @type {string || null}
         */
        this.IotAppID = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserID = null;

        /**
         * 家庭ID
         * @type {string || null}
         */
        this.FamilyId = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 房间ID
         * @type {string || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IotAppID = 'IotAppID' in params ? params.IotAppID : null;
        this.UserID = 'UserID' in params ? params.UserID : null;
        this.FamilyId = 'FamilyId' in params ? params.FamilyId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * Topic信息, 包括Topic名字和权限
 * @class
 */
class TopicItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * Topic权限 , 1上报  2下发
         * @type {number || null}
         */
        this.Privilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

    }
}

/**
 * GetFamilyDeviceUserList请求参数结构体
 * @class
 */
class GetFamilyDeviceUserListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * DescribeBindedProducts请求参数结构体
 * @class
 */
class DescribeBindedProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关产品ID
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 分页偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 是否跨账号绑定产品
         * @type {number || null}
         */
        this.ProductSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProductSource = 'ProductSource' in params ? params.ProductSource : null;

    }
}

/**
 * DescribeLoRaFrequency返回参数结构体
 * @class
 */
class DescribeLoRaFrequencyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回详情项
注意：此字段可能返回 null，表示取不到有效值。
         * @type {LoRaFrequencyEntry || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
            let obj = new LoRaFrequencyEntry();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品详情
 * @class
 */
class ProductEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品分组模板ID
         * @type {number || null}
         */
        this.CategoryId = null;

        /**
         * 加密类型
         * @type {string || null}
         */
        this.EncryptionType = null;

        /**
         * 连接类型
         * @type {string || null}
         */
        this.NetType = null;

        /**
         * 数据协议
         * @type {number || null}
         */
        this.DataProtocol = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.ProductDesc = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.DevStatus = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 区域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 产品类型
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 产品ModuleId
         * @type {number || null}
         */
        this.ModuleId = null;

        /**
         * 是否使用脚本进行二进制转json功能 可以取值 true / false
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EnableProductScript = null;

        /**
         * 创建人 UinId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUserId = null;

        /**
         * 创建者昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorNickName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.CategoryId = 'CategoryId' in params ? params.CategoryId : null;
        this.EncryptionType = 'EncryptionType' in params ? params.EncryptionType : null;
        this.NetType = 'NetType' in params ? params.NetType : null;
        this.DataProtocol = 'DataProtocol' in params ? params.DataProtocol : null;
        this.ProductDesc = 'ProductDesc' in params ? params.ProductDesc : null;
        this.DevStatus = 'DevStatus' in params ? params.DevStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ModuleId = 'ModuleId' in params ? params.ModuleId : null;
        this.EnableProductScript = 'EnableProductScript' in params ? params.EnableProductScript : null;
        this.CreateUserId = 'CreateUserId' in params ? params.CreateUserId : null;
        this.CreatorNickName = 'CreatorNickName' in params ? params.CreatorNickName : null;

    }
}

/**
 * DescribeGatewaySubDeviceList返回参数结构体
 * @class
 */
class DescribeGatewaySubDeviceListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备的总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 设备列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FamilySubDevice> || null}
         */
        this.DeviceList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.DeviceList) {
            this.DeviceList = new Array();
            for (let z in params.DeviceList) {
                let obj = new FamilySubDevice();
                obj.deserialize(params.DeviceList[z]);
                this.DeviceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSpaceFenceEventList请求参数结构体
 * @class
 */
class DescribeSpaceFenceEventListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置空间Id
         * @type {string || null}
         */
        this.SpaceId = null;

        /**
         * 围栏告警信息的查询起始时间，Unix时间，单位为毫秒
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 围栏告警信息的查询结束时间，Unix时间，单位为毫秒
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 翻页偏移量，0起始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大返回结果数
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
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * GetLoRaGatewayList请求参数结构体
 * @class
 */
class GetLoRaGatewayListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否是社区网关
         * @type {boolean || null}
         */
        this.IsCommunity = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 限制个数
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
        this.IsCommunity = 'IsCommunity' in params ? params.IsCommunity : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 围栏事件详情
 * @class
 */
class FenceEventItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏事件的产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 围栏事件的设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 围栏Id
         * @type {number || null}
         */
        this.FenceId = null;

        /**
         * 围栏事件的告警类型（In，进围栏报警；Out，出围栏报警；InOrOut，进围栏或者出围栏均报警）
         * @type {string || null}
         */
        this.AlertType = null;

        /**
         * 围栏事件的设备位置信息
         * @type {FenceAlarmPoint || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.FenceId = 'FenceId' in params ? params.FenceId : null;
        this.AlertType = 'AlertType' in params ? params.AlertType : null;

        if (params.Data) {
            let obj = new FenceAlarmPoint();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * DescribeProject请求参数结构体
 * @class
 */
class DescribeProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    }
}

/**
 * UnbindDevices返回参数结构体
 * @class
 */
class UnbindDevicesResponse extends  AbstractModel {
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
 * ModifyLoRaFrequency请求参数结构体
 * @class
 */
class ModifyLoRaFrequencyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频点唯一ID
         * @type {string || null}
         */
        this.FreqId = null;

        /**
         * 频点名称
         * @type {string || null}
         */
        this.FreqName = null;

        /**
         * 频点描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据上行信道
         * @type {Array.<number> || null}
         */
        this.ChannelsDataUp = null;

        /**
         * 数据下行信道RX1
         * @type {Array.<number> || null}
         */
        this.ChannelsDataRX1 = null;

        /**
         * 数据下行信道RX2
         * @type {Array.<number> || null}
         */
        this.ChannelsDataRX2 = null;

        /**
         * 入网上行信道
         * @type {Array.<number> || null}
         */
        this.ChannelsJoinUp = null;

        /**
         * 入网下行信道RX1
         * @type {Array.<number> || null}
         */
        this.ChannelsJoinRX1 = null;

        /**
         * 入网下行信道RX2
         * @type {Array.<number> || null}
         */
        this.ChannelsJoinRX2 = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FreqId = 'FreqId' in params ? params.FreqId : null;
        this.FreqName = 'FreqName' in params ? params.FreqName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ChannelsDataUp = 'ChannelsDataUp' in params ? params.ChannelsDataUp : null;
        this.ChannelsDataRX1 = 'ChannelsDataRX1' in params ? params.ChannelsDataRX1 : null;
        this.ChannelsDataRX2 = 'ChannelsDataRX2' in params ? params.ChannelsDataRX2 : null;
        this.ChannelsJoinUp = 'ChannelsJoinUp' in params ? params.ChannelsJoinUp : null;
        this.ChannelsJoinRX1 = 'ChannelsJoinRX1' in params ? params.ChannelsJoinRX1 : null;
        this.ChannelsJoinRX2 = 'ChannelsJoinRX2' in params ? params.ChannelsJoinRX2 : null;

    }
}

/**
 * UploadFirmware返回参数结构体
 * @class
 */
class UploadFirmwareResponse extends  AbstractModel {
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
 * ModifyTopicPolicy请求参数结构体
 * @class
 */
class ModifyTopicPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 更新前Topic名
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 更新后Topic名
         * @type {string || null}
         */
        this.NewTopicName = null;

        /**
         * Topic权限
         * @type {number || null}
         */
        this.Privilege = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.NewTopicName = 'NewTopicName' in params ? params.NewTopicName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

    }
}

/**
 * DeleteTopicRule请求参数结构体
 * @class
 */
class DeleteTopicRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * CreateLoRaGateway返回参数结构体
 * @class
 */
class CreateLoRaGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * LoRa 网关信息
         * @type {LoRaGatewayItem || null}
         */
        this.Gateway = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Gateway) {
            let obj = new LoRaGatewayItem();
            obj.deserialize(params.Gateway)
            this.Gateway = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTopicPolicy返回参数结构体
 * @class
 */
class DeleteTopicPolicyResponse extends  AbstractModel {
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
 * DeleteLoRaGateway返回参数结构体
 * @class
 */
class DeleteLoRaGatewayResponse extends  AbstractModel {
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
 * CreateLoRaFrequency请求参数结构体
 * @class
 */
class CreateLoRaFrequencyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频点配置名称
         * @type {string || null}
         */
        this.FreqName = null;

        /**
         * 数据上行信道
         * @type {Array.<number> || null}
         */
        this.ChannelsDataUp = null;

        /**
         * 数据下行RX1信道
         * @type {Array.<number> || null}
         */
        this.ChannelsDataRX1 = null;

        /**
         * 数据下行RX2信道
         * @type {Array.<number> || null}
         */
        this.ChannelsDataRX2 = null;

        /**
         * 入网上行信道
         * @type {Array.<number> || null}
         */
        this.ChannelsJoinUp = null;

        /**
         * 入网下行RX1信道
         * @type {Array.<number> || null}
         */
        this.ChannelsJoinRX1 = null;

        /**
         * 入网下行RX2信道
         * @type {Array.<number> || null}
         */
        this.ChannelsJoinRX2 = null;

        /**
         * 频点配置描述
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
        this.FreqName = 'FreqName' in params ? params.FreqName : null;
        this.ChannelsDataUp = 'ChannelsDataUp' in params ? params.ChannelsDataUp : null;
        this.ChannelsDataRX1 = 'ChannelsDataRX1' in params ? params.ChannelsDataRX1 : null;
        this.ChannelsDataRX2 = 'ChannelsDataRX2' in params ? params.ChannelsDataRX2 : null;
        this.ChannelsJoinUp = 'ChannelsJoinUp' in params ? params.ChannelsJoinUp : null;
        this.ChannelsJoinRX1 = 'ChannelsJoinRX1' in params ? params.ChannelsJoinRX1 : null;
        this.ChannelsJoinRX2 = 'ChannelsJoinRX2' in params ? params.ChannelsJoinRX2 : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * LoRa 网关信息
 * @class
 */
class LoRaGatewayItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * LoRa 网关Id
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * 是否是公开网关
         * @type {boolean || null}
         */
        this.IsPublic = null;

        /**
         * 网关描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 网关名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 网关位置信息
         * @type {string || null}
         */
        this.Position = null;

        /**
         * 网关位置详情
         * @type {string || null}
         */
        this.PositionDetails = null;

        /**
         * LoRa 网关位置坐标
         * @type {LoRaGatewayLocation || null}
         */
        this.Location = null;

        /**
         * 最后更新时间
         * @type {string || null}
         */
        this.UpdatedAt = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreatedAt = null;

        /**
         * 最后上报时间
         * @type {string || null}
         */
        this.LastSeenAt = null;

        /**
         * 频点ID
         * @type {string || null}
         */
        this.FrequencyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.PositionDetails = 'PositionDetails' in params ? params.PositionDetails : null;

        if (params.Location) {
            let obj = new LoRaGatewayLocation();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
        this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
        this.LastSeenAt = 'LastSeenAt' in params ? params.LastSeenAt : null;
        this.FrequencyId = 'FrequencyId' in params ? params.FrequencyId : null;

    }
}

/**
 * DescribeDeviceBindGateway返回参数结构体
 * @class
 */
class DescribeDeviceBindGatewayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 网关设备名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayDeviceName = null;

        /**
         * 网关产品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayName = null;

        /**
         * 设备对应产品所属的主账号名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayProductOwnerName = null;

        /**
         * 设备对应产品所属的主账号 UIN
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GatewayProductOwnerUin = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.GatewayDeviceName = 'GatewayDeviceName' in params ? params.GatewayDeviceName : null;
        this.GatewayName = 'GatewayName' in params ? params.GatewayName : null;
        this.GatewayProductOwnerName = 'GatewayProductOwnerName' in params ? params.GatewayProductOwnerName : null;
        this.GatewayProductOwnerUin = 'GatewayProductOwnerUin' in params ? params.GatewayProductOwnerUin : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGatewaySubDeviceList请求参数结构体
 * @class
 */
class DescribeGatewaySubDeviceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关产品ID
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 网关设备名称
         * @type {string || null}
         */
        this.GatewayDeviceName = null;

        /**
         * 分页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的大小
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
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.GatewayDeviceName = 'GatewayDeviceName' in params ? params.GatewayDeviceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * ControlDeviceData返回参数结构体
 * @class
 */
class ControlDeviceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回信息
         * @type {string || null}
         */
        this.Data = null;

        /**
         * JSON字符串， 返回下发控制的结果信息, 
Sent = 1 表示设备已经在线并且订阅了控制下发的mqtt topic.
pushResult 是表示发送结果，其中 0 表示成功， 23101 表示设备未在线或没有订阅相关的 MQTT Topic。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Data = 'Data' in params ? params.Data : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceDataHistory请求参数结构体
 * @class
 */
class DescribeDeviceDataHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 区间开始时间（Unix 时间戳，毫秒级）
         * @type {number || null}
         */
        this.MinTime = null;

        /**
         * 区间结束时间（Unix 时间戳，毫秒级）
         * @type {number || null}
         */
        this.MaxTime = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 属性字段名称，对应数据模板中功能属性的标识符
         * @type {string || null}
         */
        this.FieldName = null;

        /**
         * 返回条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 检索上下文
         * @type {string || null}
         */
        this.Context = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MinTime = 'MinTime' in params ? params.MinTime : null;
        this.MaxTime = 'MaxTime' in params ? params.MaxTime : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.FieldName = 'FieldName' in params ? params.FieldName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * UpdateFirmware请求参数结构体
 * @class
 */
class UpdateFirmwareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 固件新的版本号
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * 固件原版本号
         * @type {string || null}
         */
        this.FirmwareOriVersion = null;

        /**
         * 固件升级方式；0 静默升级 1 用户确认升级   不填默认静默升级
         * @type {number || null}
         */
        this.UpgradeMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.FirmwareOriVersion = 'FirmwareOriVersion' in params ? params.FirmwareOriVersion : null;
        this.UpgradeMethod = 'UpgradeMethod' in params ? params.UpgradeMethod : null;

    }
}

/**
 * DescribeStudioProduct请求参数结构体
 * @class
 */
class DescribeStudioProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * CreatePositionSpace返回参数结构体
 * @class
 */
class CreatePositionSpaceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 空间Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SpaceId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBatchProduction返回参数结构体
 * @class
 */
class CreateBatchProductionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 量产id
         * @type {string || null}
         */
        this.BatchProductionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.BatchProductionId = 'BatchProductionId' in params ? params.BatchProductionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyModelDefinition返回参数结构体
 * @class
 */
class ModifyModelDefinitionResponse extends  AbstractModel {
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
 * DeletePositionFence请求参数结构体
 * @class
 */
class DeletePositionFenceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置空间Id
         * @type {string || null}
         */
        this.SpaceId = null;

        /**
         * 围栏Id
         * @type {number || null}
         */
        this.FenceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;
        this.FenceId = 'FenceId' in params ? params.FenceId : null;

    }
}

/**
 * GetProjectList请求参数结构体
 * @class
 */
class GetProjectListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 个数限制
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 实例ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 按项目ID搜索
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 按产品ID搜索
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 加载 ProductCount、DeviceCount、ApplicationCount，可选值：ProductCount、DeviceCount、ApplicationCount，可多选
         * @type {Array.<string> || null}
         */
        this.Includes = null;

        /**
         * 按项目名称搜索
         * @type {string || null}
         */
        this.ProjectName = null;

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Includes = 'Includes' in params ? params.Includes : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;

    }
}

/**
 * DeletePositionSpace返回参数结构体
 * @class
 */
class DeletePositionSpaceResponse extends  AbstractModel {
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
 * DescribeDeviceBindGateway请求参数结构体
 * @class
 */
class DescribeDeviceBindGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * CreateLoRaFrequency返回参数结构体
 * @class
 */
class CreateLoRaFrequencyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * LoRa频点信息
         * @type {LoRaFrequencyEntry || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
            let obj = new LoRaFrequencyEntry();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableTopicRule返回参数结构体
 * @class
 */
class EnableTopicRuleResponse extends  AbstractModel {
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
 * GetGatewaySubDeviceList请求参数结构体
 * @class
 */
class GetGatewaySubDeviceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关产品ID
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 网关设备名称
         * @type {string || null}
         */
        this.GatewayDeviceName = null;

        /**
         * 分页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的大小
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
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.GatewayDeviceName = 'GatewayDeviceName' in params ? params.GatewayDeviceName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * SearchStudioProduct请求参数结构体
 * @class
 */
class SearchStudioProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 列表Limit
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 列表Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 产品Status
         * @type {string || null}
         */
        this.DevStatus = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.DevStatus = 'DevStatus' in params ? params.DevStatus : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * GenSingleDeviceSignatureOfPublic请求参数结构体
 * @class
 */
class GenSingleDeviceSignatureOfPublicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备所属的产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 需要绑定的设备
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备绑定签名的有效时间,以秒为单位。取值范围：0 < Expire <= 86400，Expire == -1（十年）
         * @type {number || null}
         */
        this.Expire = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Expire = 'Expire' in params ? params.Expire : null;

    }
}

/**
 * DeleteDevices请求参数结构体
 * @class
 */
class DeleteDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 多个设备标识
         * @type {Array.<DevicesItem> || null}
         */
        this.DevicesItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DevicesItems) {
            this.DevicesItems = new Array();
            for (let z in params.DevicesItems) {
                let obj = new DevicesItem();
                obj.deserialize(params.DevicesItems[z]);
                this.DevicesItems.push(obj);
            }
        }

    }
}

/**
 * 云api直接绑定设备出参
 * @class
 */
class AppDeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID/设备名
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备别名
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * icon地址
         * @type {string || null}
         */
        this.IconUrl = null;

        /**
         * 家庭ID
         * @type {string || null}
         */
        this.FamilyId = null;

        /**
         * 房间ID
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 设备类型
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * 创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {number || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;
        this.IconUrl = 'IconUrl' in params ? params.IconUrl : null;
        this.FamilyId = 'FamilyId' in params ? params.FamilyId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * BindProducts返回参数结构体
 * @class
 */
class BindProductsResponse extends  AbstractModel {
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
 * ModifyProject返回参数结构体
 * @class
 */
class ModifyProjectResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目详情
         * @type {ProjectEntry || null}
         */
        this.Project = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Project) {
            let obj = new ProjectEntry();
            obj.deserialize(params.Project)
            this.Project = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetCOSURL请求参数结构体
 * @class
 */
class GetCOSURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 固件版本
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * 文件大小
         * @type {number || null}
         */
        this.FileSize = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;

    }
}

/**
 * DescribeLoRaFrequency请求参数结构体
 * @class
 */
class DescribeLoRaFrequencyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频点唯一ID
         * @type {string || null}
         */
        this.FreqId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FreqId = 'FreqId' in params ? params.FreqId : null;

    }
}

/**
 * DescribeGatewayBindDevices请求参数结构体
 * @class
 */
class DescribeGatewayBindDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关设备的产品ID
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 网关设备的设备名
         * @type {string || null}
         */
        this.GatewayDeviceName = null;

        /**
         * 子产品的ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 分页的偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的页大小
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
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.GatewayDeviceName = 'GatewayDeviceName' in params ? params.GatewayDeviceName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeGatewaySubProducts请求参数结构体
 * @class
 */
class DescribeGatewaySubProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关产品ID
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 分页的偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 项目Id
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 是否跨账号产品
         * @type {number || null}
         */
        this.ProductSource = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProductSource = 'ProductSource' in params ? params.ProductSource : null;

    }
}

/**
 * DeleteStudioProduct请求参数结构体
 * @class
 */
class DeleteStudioProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * BindProducts请求参数结构体
 * @class
 */
class BindProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 网关产品ID。
         * @type {string || null}
         */
        this.GatewayProductId = null;

        /**
         * 待绑定的子产品ID数组。
         * @type {Array.<string> || null}
         */
        this.ProductIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;
        this.ProductIds = 'ProductIds' in params ? params.ProductIds : null;

    }
}

/**
 * ModifyProject请求参数结构体
 * @class
 */
class ModifyProjectRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 项目描述
         * @type {string || null}
         */
        this.ProjectDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.ProjectDesc = 'ProjectDesc' in params ? params.ProjectDesc : null;

    }
}

/**
 * ModifySpaceProperty返回参数结构体
 * @class
 */
class ModifySpacePropertyResponse extends  AbstractModel {
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
 * PublishMessage返回参数结构体
 * @class
 */
class PublishMessageResponse extends  AbstractModel {
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
 * BindDevices返回参数结构体
 * @class
 */
class BindDevicesResponse extends  AbstractModel {
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
 * DescribeFenceBindList返回参数结构体
 * @class
 */
class DescribeFenceBindListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 围栏绑定的产品设备列表
         * @type {Array.<FenceBindProductItem> || null}
         */
        this.List = null;

        /**
         * 围栏绑定的设备总数
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

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new FenceBindProductItem();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 搜索关键词
 * @class
 */
class SearchKeyword extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索条件的Key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 搜索条件的值
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
 * CreatePositionFence请求参数结构体
 * @class
 */
class CreatePositionFenceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 位置空间Id
         * @type {string || null}
         */
        this.SpaceId = null;

        /**
         * 围栏名称
         * @type {string || null}
         */
        this.FenceName = null;

        /**
         * 围栏区域信息，采用 GeoJSON 格式
         * @type {string || null}
         */
        this.FenceArea = null;

        /**
         * 围栏描述
         * @type {string || null}
         */
        this.FenceDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SpaceId = 'SpaceId' in params ? params.SpaceId : null;
        this.FenceName = 'FenceName' in params ? params.FenceName : null;
        this.FenceArea = 'FenceArea' in params ? params.FenceArea : null;
        this.FenceDesc = 'FenceDesc' in params ? params.FenceDesc : null;

    }
}

/**
 * DescribeModelDefinition请求参数结构体
 * @class
 */
class DescribeModelDefinitionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * EnableTopicRule请求参数结构体
 * @class
 */
class EnableTopicRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * DisableTopicRule请求参数结构体
 * @class
 */
class DisableTopicRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * CreateTopicRule返回参数结构体
 * @class
 */
class CreateTopicRuleResponse extends  AbstractModel {
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
 * DescribeDeviceData返回参数结构体
 * @class
 */
class DescribeDeviceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备数据
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Data = 'Data' in params ? params.Data : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTopicRule请求参数结构体
 * @class
 */
class CreateTopicRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 规则内容
         * @type {TopicRulePayload || null}
         */
        this.TopicRulePayload = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.TopicRulePayload) {
            let obj = new TopicRulePayload();
            obj.deserialize(params.TopicRulePayload)
            this.TopicRulePayload = obj;
        }

    }
}

/**
 * PublishRRPCMessage返回参数结构体
 * @class
 */
class PublishRRPCMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * RRPC消息ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.MessageId = null;

        /**
         * 设备回复的消息内容，采用base64编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayloadBase64 = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MessageId = 'MessageId' in params ? params.MessageId : null;
        this.PayloadBase64 = 'PayloadBase64' in params ? params.PayloadBase64 : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备的用户
 * @class
 */
class DeviceUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户角色 1所有者，0：其他分享者
         * @type {number || null}
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
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * GetBatchProductionsList请求参数结构体
 * @class
 */
class GetBatchProductionsListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回数量限制
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
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DeleteDevice返回参数结构体
 * @class
 */
class DeleteDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除的结果代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultCode = null;

        /**
         * 删除的结果信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultMessage = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultCode = 'ResultCode' in params ? params.ResultCode : null;
        this.ResultMessage = 'ResultMessage' in params ? params.ResultMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备详细信息
 * @class
 */
class DeviceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 0: 离线, 1: 在线, 2: 获取失败, 3 未激活
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 设备密钥，密钥加密的设备返回
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * 首次上线时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstOnlineTime = null;

        /**
         * 最后一次上线时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LoginTime = null;

        /**
         * 设备创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 设备固件版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 设备证书
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceCert = null;

        /**
         * 日志级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogLevel = null;

        /**
         * LoRaWAN 设备地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DevAddr = null;

        /**
         * LoRaWAN 应用密钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppKey = null;

        /**
         * LoRaWAN 设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DevEUI = null;

        /**
         * LoRaWAN 应用会话密钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppSKey = null;

        /**
         * LoRaWAN 网络会话密钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.NwkSKey = null;

        /**
         * 创建人Id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateUserId = null;

        /**
         * 创建人昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreatorNickName = null;

        /**
         * 启用/禁用状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnableState = null;

        /**
         * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 设备类型（设备、子设备、网关）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 是否是 lora 设备
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.IsLora = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;
        this.FirstOnlineTime = 'FirstOnlineTime' in params ? params.FirstOnlineTime : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.DevAddr = 'DevAddr' in params ? params.DevAddr : null;
        this.AppKey = 'AppKey' in params ? params.AppKey : null;
        this.DevEUI = 'DevEUI' in params ? params.DevEUI : null;
        this.AppSKey = 'AppSKey' in params ? params.AppSKey : null;
        this.NwkSKey = 'NwkSKey' in params ? params.NwkSKey : null;
        this.CreateUserId = 'CreateUserId' in params ? params.CreateUserId : null;
        this.CreatorNickName = 'CreatorNickName' in params ? params.CreatorNickName : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.IsLora = 'IsLora' in params ? params.IsLora : null;

    }
}

/**
 * ModifyLoRaFrequency返回参数结构体
 * @class
 */
class ModifyLoRaFrequencyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 频点信息
         * @type {LoRaFrequencyEntry || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
            let obj = new LoRaFrequencyEntry();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyLoRaGateway请求参数结构体
 * @class
 */
class ModifyLoRaGatewayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述信息
         * @type {string || null}
         */
        this.Description = null;

        /**
         * LoRa网关Id
         * @type {string || null}
         */
        this.GatewayId = null;

        /**
         * LoRa网关位置坐标
         * @type {LoRaGatewayLocation || null}
         */
        this.Location = null;

        /**
         * LoRa网关名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 是否公开可见
         * @type {boolean || null}
         */
        this.IsPublic = null;

        /**
         * 位置信息
         * @type {string || null}
         */
        this.Position = null;

        /**
         * 位置详情
         * @type {string || null}
         */
        this.PositionDetails = null;

        /**
         * 频点ID
         * @type {string || null}
         */
        this.FrequencyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Description = 'Description' in params ? params.Description : null;
        this.GatewayId = 'GatewayId' in params ? params.GatewayId : null;

        if (params.Location) {
            let obj = new LoRaGatewayLocation();
            obj.deserialize(params.Location)
            this.Location = obj;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.IsPublic = 'IsPublic' in params ? params.IsPublic : null;
        this.Position = 'Position' in params ? params.Position : null;
        this.PositionDetails = 'PositionDetails' in params ? params.PositionDetails : null;
        this.FrequencyId = 'FrequencyId' in params ? params.FrequencyId : null;

    }
}

/**
 * ListEventHistory返回参数结构体
 * @class
 */
class ListEventHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 搜索上下文, 用作查询游标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 搜索结果数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 搜索结果是否已经结束
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Listover = null;

        /**
         * 搜集结果集
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<EventHistoryItem> || null}
         */
        this.EventHistory = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Listover = 'Listover' in params ? params.Listover : null;

        if (params.EventHistory) {
            this.EventHistory = new Array();
            for (let z in params.EventHistory) {
                let obj = new EventHistoryItem();
                obj.deserialize(params.EventHistory[z]);
                this.EventHistory.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBatchProductionsList返回参数结构体
 * @class
 */
class GetBatchProductionsListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回详情信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<BatchProductionInfo> || null}
         */
        this.BatchProductions = null;

        /**
         * 返回数量。
         * @type {number || null}
         */
        this.TotalCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BatchProductions) {
            this.BatchProductions = new Array();
            for (let z in params.BatchProductions) {
                let obj = new BatchProductionInfo();
                obj.deserialize(params.BatchProductions[z]);
                this.BatchProductions.push(obj);
            }
        }
        this.TotalCnt = 'TotalCnt' in params ? params.TotalCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeGatewayBindDevices返回参数结构体
 * @class
 */
class DescribeGatewayBindDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子设备信息。
         * @type {Array.<BindDeviceInfo> || null}
         */
        this.Devices = null;

        /**
         * 子设备总数。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 子设备所属的产品名。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new BindDeviceInfo();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFirmwareTask请求参数结构体
 * @class
 */
class DescribeFirmwareTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 固件版本号
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * 固件任务ID
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
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CreatePositionSpace请求参数结构体
 * @class
 */
class CreatePositionSpaceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 空间名称
         * @type {string || null}
         */
        this.SpaceName = null;

        /**
         * 授权类型，0：只读 1：读写
         * @type {number || null}
         */
        this.AuthorizeType = null;

        /**
         * 产品列表
         * @type {Array.<string> || null}
         */
        this.ProductIdList = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 缩略图
         * @type {string || null}
         */
        this.Icon = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SpaceName = 'SpaceName' in params ? params.SpaceName : null;
        this.AuthorizeType = 'AuthorizeType' in params ? params.AuthorizeType : null;
        this.ProductIdList = 'ProductIdList' in params ? params.ProductIdList : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Icon = 'Icon' in params ? params.Icon : null;

    }
}

module.exports = {
    UpdateDevicesEnableStateResponse: UpdateDevicesEnableStateResponse,
    DescribeDeviceLocationSolveRequest: DescribeDeviceLocationSolveRequest,
    DeleteProjectRequest: DeleteProjectRequest,
    DevicesItem: DevicesItem,
    DeleteFenceBindRequest: DeleteFenceBindRequest,
    DescribeModelDefinitionResponse: DescribeModelDefinitionResponse,
    UnbindDevicesRequest: UnbindDevicesRequest,
    DeleteDevicesResponse: DeleteDevicesResponse,
    ModifyStudioProductResponse: ModifyStudioProductResponse,
    GetGatewaySubDeviceListResponse: GetGatewaySubDeviceListResponse,
    DeleteStudioProductResponse: DeleteStudioProductResponse,
    BindDevicesRequest: BindDevicesRequest,
    DescribeGatewaySubProductsResponse: DescribeGatewaySubProductsResponse,
    GetDeviceListResponse: GetDeviceListResponse,
    TopicRulePayload: TopicRulePayload,
    DeleteLoRaFrequencyResponse: DeleteLoRaFrequencyResponse,
    DescribeTopicPolicyRequest: DescribeTopicPolicyRequest,
    BindProductInfo: BindProductInfo,
    ModifyPositionFenceRequest: ModifyPositionFenceRequest,
    PositionFenceItem: PositionFenceItem,
    DeleteTopicRuleResponse: DeleteTopicRuleResponse,
    PositionItem: PositionItem,
    ModifyModelDefinitionRequest: ModifyModelDefinitionRequest,
    CreateStudioProductResponse: CreateStudioProductResponse,
    CallDeviceActionSyncRequest: CallDeviceActionSyncRequest,
    ProductDevicesPositionItem: ProductDevicesPositionItem,
    DescribeDevicePositionListRequest: DescribeDevicePositionListRequest,
    GetDeviceLocationHistoryResponse: GetDeviceLocationHistoryResponse,
    UpdateFirmwareResponse: UpdateFirmwareResponse,
    ModifyPositionFenceResponse: ModifyPositionFenceResponse,
    ModifyStudioProductRequest: ModifyStudioProductRequest,
    ModifyPositionSpaceResponse: ModifyPositionSpaceResponse,
    CreateStudioProductRequest: CreateStudioProductRequest,
    ProductModelDefinition: ProductModelDefinition,
    ModifyFenceBindResponse: ModifyFenceBindResponse,
    CreateBatchProductionRequest: CreateBatchProductionRequest,
    DeletePositionFenceResponse: DeletePositionFenceResponse,
    FenceAlarmPoint: FenceAlarmPoint,
    UploadFirmwareRequest: UploadFirmwareRequest,
    ListEventHistoryRequest: ListEventHistoryRequest,
    SearchTopicRuleRequest: SearchTopicRuleRequest,
    DescribeDeviceDataRequest: DescribeDeviceDataRequest,
    FenceBindProductItem: FenceBindProductItem,
    PublishRRPCMessageRequest: PublishRRPCMessageRequest,
    DevicePositionItem: DevicePositionItem,
    ListTopicPolicyResponse: ListTopicPolicyResponse,
    SearchPositionSpaceResponse: SearchPositionSpaceResponse,
    DescribePositionFenceListResponse: DescribePositionFenceListResponse,
    GenSingleDeviceSignatureOfPublicResponse: GenSingleDeviceSignatureOfPublicResponse,
    DescribeDevicePositionListResponse: DescribeDevicePositionListResponse,
    GetProjectListResponse: GetProjectListResponse,
    CreateProjectRequest: CreateProjectRequest,
    DescribeProjectResponse: DescribeProjectResponse,
    UnbindProductsRequest: UnbindProductsRequest,
    SearchStudioProductResponse: SearchStudioProductResponse,
    DeviceData: DeviceData,
    WifiInfo: WifiInfo,
    GetTopicRuleListRequest: GetTopicRuleListRequest,
    FenceBindDeviceItem: FenceBindDeviceItem,
    DeviceDataHistoryItem: DeviceDataHistoryItem,
    GetFamilyDeviceUserListResponse: GetFamilyDeviceUserListResponse,
    BindDeviceInfo: BindDeviceInfo,
    ProjectEntryEx: ProjectEntryEx,
    DescribeBatchProductionResponse: DescribeBatchProductionResponse,
    ListTopicPolicyRequest: ListTopicPolicyRequest,
    BatchProductionInfo: BatchProductionInfo,
    DeleteDeviceRequest: DeleteDeviceRequest,
    DeleteLoRaFrequencyRequest: DeleteLoRaFrequencyRequest,
    ControlDeviceDataRequest: ControlDeviceDataRequest,
    ListFirmwaresResponse: ListFirmwaresResponse,
    ReleaseStudioProductResponse: ReleaseStudioProductResponse,
    DescribeSpaceFenceEventListResponse: DescribeSpaceFenceEventListResponse,
    PositionFenceInfo: PositionFenceInfo,
    DeleteLoRaGatewayRequest: DeleteLoRaGatewayRequest,
    UnbindProductsResponse: UnbindProductsResponse,
    DescribeTopicPolicyResponse: DescribeTopicPolicyResponse,
    SearchPositionSpaceRequest: SearchPositionSpaceRequest,
    LoRaFrequencyEntry: LoRaFrequencyEntry,
    ModifyTopicPolicyResponse: ModifyTopicPolicyResponse,
    GetPositionSpaceListRequest: GetPositionSpaceListRequest,
    SearchTopicRuleResponse: SearchTopicRuleResponse,
    DescribeFenceEventListResponse: DescribeFenceEventListResponse,
    UpdateDevicesEnableStateRequest: UpdateDevicesEnableStateRequest,
    DescribeTopicRuleRequest: DescribeTopicRuleRequest,
    GetDeviceLocationHistoryRequest: GetDeviceLocationHistoryRequest,
    CallDeviceActionSyncResponse: CallDeviceActionSyncResponse,
    CreateLoRaGatewayRequest: CreateLoRaGatewayRequest,
    ReleaseStudioProductRequest: ReleaseStudioProductRequest,
    CreateProjectResponse: CreateProjectResponse,
    DescribeDeviceDataHistoryResponse: DescribeDeviceDataHistoryResponse,
    DeleteProjectResponse: DeleteProjectResponse,
    CreateTopicPolicyResponse: CreateTopicPolicyResponse,
    CreateDeviceResponse: CreateDeviceResponse,
    CreateDeviceRequest: CreateDeviceRequest,
    DeletePositionSpaceRequest: DeletePositionSpaceRequest,
    GetStudioProductListRequest: GetStudioProductListRequest,
    DescribeFirmwareTaskResponse: DescribeFirmwareTaskResponse,
    FirmwareInfo: FirmwareInfo,
    DisableTopicRuleResponse: DisableTopicRuleResponse,
    TopicRuleInfo: TopicRuleInfo,
    DescribeDeviceLocationSolveResponse: DescribeDeviceLocationSolveResponse,
    DescribeStudioProductResponse: DescribeStudioProductResponse,
    CreateFenceBindRequest: CreateFenceBindRequest,
    DescribeDeviceResponse: DescribeDeviceResponse,
    PublishBroadcastMessageRequest: PublishBroadcastMessageRequest,
    ListFirmwaresRequest: ListFirmwaresRequest,
    GetStudioProductListResponse: GetStudioProductListResponse,
    PublishMessageRequest: PublishMessageRequest,
    FamilySubDevice: FamilySubDevice,
    ModifyTopicRuleRequest: ModifyTopicRuleRequest,
    GetDeviceListRequest: GetDeviceListRequest,
    ModifySpacePropertyRequest: ModifySpacePropertyRequest,
    GetPositionSpaceListResponse: GetPositionSpaceListResponse,
    GetCOSURLResponse: GetCOSURLResponse,
    ModifyFenceBindRequest: ModifyFenceBindRequest,
    GetTopicRuleListResponse: GetTopicRuleListResponse,
    DescribeFenceEventListRequest: DescribeFenceEventListRequest,
    ModifyPositionSpaceRequest: ModifyPositionSpaceRequest,
    GetLoRaGatewayListResponse: GetLoRaGatewayListResponse,
    ProjectEntry: ProjectEntry,
    ModifyLoRaGatewayResponse: ModifyLoRaGatewayResponse,
    EventHistoryItem: EventHistoryItem,
    DirectBindDeviceInFamilyResponse: DirectBindDeviceInFamilyResponse,
    TopicRule: TopicRule,
    CallDeviceActionAsyncRequest: CallDeviceActionAsyncRequest,
    CallDeviceActionAsyncResponse: CallDeviceActionAsyncResponse,
    DeleteFenceBindResponse: DeleteFenceBindResponse,
    DeleteTopicPolicyRequest: DeleteTopicPolicyRequest,
    CreateFenceBindResponse: CreateFenceBindResponse,
    DescribeTopicRuleResponse: DescribeTopicRuleResponse,
    CreatePositionFenceResponse: CreatePositionFenceResponse,
    PublishBroadcastMessageResponse: PublishBroadcastMessageResponse,
    DescribeFenceBindListRequest: DescribeFenceBindListRequest,
    DescribeBindedProductsResponse: DescribeBindedProductsResponse,
    DeviceSignatureInfo: DeviceSignatureInfo,
    PositionSpaceInfo: PositionSpaceInfo,
    LoRaGatewayLocation: LoRaGatewayLocation,
    DescribeDeviceRequest: DescribeDeviceRequest,
    DescribePositionFenceListRequest: DescribePositionFenceListRequest,
    ModifyTopicRuleResponse: ModifyTopicRuleResponse,
    DescribeBatchProductionRequest: DescribeBatchProductionRequest,
    CreateTopicPolicyRequest: CreateTopicPolicyRequest,
    DirectBindDeviceInFamilyRequest: DirectBindDeviceInFamilyRequest,
    TopicItem: TopicItem,
    GetFamilyDeviceUserListRequest: GetFamilyDeviceUserListRequest,
    DescribeBindedProductsRequest: DescribeBindedProductsRequest,
    DescribeLoRaFrequencyResponse: DescribeLoRaFrequencyResponse,
    ProductEntry: ProductEntry,
    DescribeGatewaySubDeviceListResponse: DescribeGatewaySubDeviceListResponse,
    DescribeSpaceFenceEventListRequest: DescribeSpaceFenceEventListRequest,
    GetLoRaGatewayListRequest: GetLoRaGatewayListRequest,
    FenceEventItem: FenceEventItem,
    DescribeProjectRequest: DescribeProjectRequest,
    UnbindDevicesResponse: UnbindDevicesResponse,
    ModifyLoRaFrequencyRequest: ModifyLoRaFrequencyRequest,
    UploadFirmwareResponse: UploadFirmwareResponse,
    ModifyTopicPolicyRequest: ModifyTopicPolicyRequest,
    DeleteTopicRuleRequest: DeleteTopicRuleRequest,
    CreateLoRaGatewayResponse: CreateLoRaGatewayResponse,
    DeleteTopicPolicyResponse: DeleteTopicPolicyResponse,
    DeleteLoRaGatewayResponse: DeleteLoRaGatewayResponse,
    CreateLoRaFrequencyRequest: CreateLoRaFrequencyRequest,
    LoRaGatewayItem: LoRaGatewayItem,
    DescribeDeviceBindGatewayResponse: DescribeDeviceBindGatewayResponse,
    DescribeGatewaySubDeviceListRequest: DescribeGatewaySubDeviceListRequest,
    ControlDeviceDataResponse: ControlDeviceDataResponse,
    DescribeDeviceDataHistoryRequest: DescribeDeviceDataHistoryRequest,
    UpdateFirmwareRequest: UpdateFirmwareRequest,
    DescribeStudioProductRequest: DescribeStudioProductRequest,
    CreatePositionSpaceResponse: CreatePositionSpaceResponse,
    CreateBatchProductionResponse: CreateBatchProductionResponse,
    ModifyModelDefinitionResponse: ModifyModelDefinitionResponse,
    DeletePositionFenceRequest: DeletePositionFenceRequest,
    GetProjectListRequest: GetProjectListRequest,
    DeletePositionSpaceResponse: DeletePositionSpaceResponse,
    DescribeDeviceBindGatewayRequest: DescribeDeviceBindGatewayRequest,
    CreateLoRaFrequencyResponse: CreateLoRaFrequencyResponse,
    EnableTopicRuleResponse: EnableTopicRuleResponse,
    GetGatewaySubDeviceListRequest: GetGatewaySubDeviceListRequest,
    SearchStudioProductRequest: SearchStudioProductRequest,
    GenSingleDeviceSignatureOfPublicRequest: GenSingleDeviceSignatureOfPublicRequest,
    DeleteDevicesRequest: DeleteDevicesRequest,
    AppDeviceInfo: AppDeviceInfo,
    BindProductsResponse: BindProductsResponse,
    ModifyProjectResponse: ModifyProjectResponse,
    GetCOSURLRequest: GetCOSURLRequest,
    DescribeLoRaFrequencyRequest: DescribeLoRaFrequencyRequest,
    DescribeGatewayBindDevicesRequest: DescribeGatewayBindDevicesRequest,
    DescribeGatewaySubProductsRequest: DescribeGatewaySubProductsRequest,
    DeleteStudioProductRequest: DeleteStudioProductRequest,
    BindProductsRequest: BindProductsRequest,
    ModifyProjectRequest: ModifyProjectRequest,
    ModifySpacePropertyResponse: ModifySpacePropertyResponse,
    PublishMessageResponse: PublishMessageResponse,
    BindDevicesResponse: BindDevicesResponse,
    DescribeFenceBindListResponse: DescribeFenceBindListResponse,
    SearchKeyword: SearchKeyword,
    CreatePositionFenceRequest: CreatePositionFenceRequest,
    DescribeModelDefinitionRequest: DescribeModelDefinitionRequest,
    EnableTopicRuleRequest: EnableTopicRuleRequest,
    DisableTopicRuleRequest: DisableTopicRuleRequest,
    CreateTopicRuleResponse: CreateTopicRuleResponse,
    DescribeDeviceDataResponse: DescribeDeviceDataResponse,
    CreateTopicRuleRequest: CreateTopicRuleRequest,
    PublishRRPCMessageResponse: PublishRRPCMessageResponse,
    DeviceUser: DeviceUser,
    GetBatchProductionsListRequest: GetBatchProductionsListRequest,
    DeleteDeviceResponse: DeleteDeviceResponse,
    DeviceInfo: DeviceInfo,
    ModifyLoRaFrequencyResponse: ModifyLoRaFrequencyResponse,
    ModifyLoRaGatewayRequest: ModifyLoRaGatewayRequest,
    ListEventHistoryResponse: ListEventHistoryResponse,
    GetBatchProductionsListResponse: GetBatchProductionsListResponse,
    DescribeGatewayBindDevicesResponse: DescribeGatewayBindDevicesResponse,
    DescribeFirmwareTaskRequest: DescribeFirmwareTaskRequest,
    CreatePositionSpaceRequest: CreatePositionSpaceRequest,

}

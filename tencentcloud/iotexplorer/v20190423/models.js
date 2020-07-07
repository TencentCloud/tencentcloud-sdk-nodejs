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
Sent = 1 表示设备已经在线并且订阅了控制下发的mqtt topic
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
         * 单次获取的历史数据项目的最大数量
         * @type {number || null}
         */
        this.Size = null;

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
 * 网关坐标
 * @class
 */
class LoRaGatewayLocation extends  AbstractModel {
    constructor(){
        super();

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Accuracy = 'Accuracy' in params ? params.Accuracy : null;
        this.Altitude = 'Altitude' in params ? params.Altitude : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;

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
         * 输出参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutputParams = null;

        /**
         * 返回状态
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
         * Offset
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Limit
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
 * DeleteDevice返回参数结构体
 * @class
 */
class DeleteDeviceResponse extends  AbstractModel {
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
 * GetDeviceList请求参数结构体
 * @class
 */
class GetDeviceListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查看设备列表的产品 ID
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

    }
}

module.exports = {
    DescribeProjectResponse: DescribeProjectResponse,
    ControlDeviceDataResponse: ControlDeviceDataResponse,
    DescribeDeviceDataHistoryRequest: DescribeDeviceDataHistoryRequest,
    SearchStudioProductResponse: SearchStudioProductResponse,
    DeviceData: DeviceData,
    DescribeStudioProductRequest: DescribeStudioProductRequest,
    DeleteProjectRequest: DeleteProjectRequest,
    ListEventHistoryRequest: ListEventHistoryRequest,
    ListEventHistoryResponse: ListEventHistoryResponse,
    DeviceDataHistoryItem: DeviceDataHistoryItem,
    ProductEntry: ProductEntry,
    GetStudioProductListResponse: GetStudioProductListResponse,
    DescribeModelDefinitionResponse: DescribeModelDefinitionResponse,
    ModifyModelDefinitionResponse: ModifyModelDefinitionResponse,
    GetLoRaGatewayListResponse: GetLoRaGatewayListResponse,
    ProjectEntry: ProjectEntry,
    GetProjectListRequest: GetProjectListRequest,
    DeleteStudioProductResponse: DeleteStudioProductResponse,
    EventHistoryItem: EventHistoryItem,
    DeleteDeviceRequest: DeleteDeviceRequest,
    GetDeviceListResponse: GetDeviceListResponse,
    ModifyStudioProductResponse: ModifyStudioProductResponse,
    ControlDeviceDataRequest: ControlDeviceDataRequest,
    SearchStudioProductRequest: SearchStudioProductRequest,
    ReleaseStudioProductResponse: ReleaseStudioProductResponse,
    DescribeStudioProductResponse: DescribeStudioProductResponse,
    DeleteLoRaGatewayRequest: DeleteLoRaGatewayRequest,
    ModifyProjectResponse: ModifyProjectResponse,
    ModifyModelDefinitionRequest: ModifyModelDefinitionRequest,
    LoRaGatewayLocation: LoRaGatewayLocation,
    CreateStudioProductResponse: CreateStudioProductResponse,
    CallDeviceActionSyncRequest: CallDeviceActionSyncRequest,
    DeleteStudioProductRequest: DeleteStudioProductRequest,
    ModifyProjectRequest: ModifyProjectRequest,
    ModifyLoRaGatewayResponse: ModifyLoRaGatewayResponse,
    CallDeviceActionSyncResponse: CallDeviceActionSyncResponse,
    CreateLoRaGatewayRequest: CreateLoRaGatewayRequest,
    ModifyStudioProductRequest: ModifyStudioProductRequest,
    DescribeDeviceDataHistoryResponse: DescribeDeviceDataHistoryResponse,
    CreateStudioProductRequest: CreateStudioProductRequest,
    ProductModelDefinition: ProductModelDefinition,
    CreateProjectResponse: CreateProjectResponse,
    ReleaseStudioProductRequest: ReleaseStudioProductRequest,
    DescribeModelDefinitionRequest: DescribeModelDefinitionRequest,
    DeleteProjectResponse: DeleteProjectResponse,
    CallDeviceActionAsyncResponse: CallDeviceActionAsyncResponse,
    CallDeviceActionAsyncRequest: CallDeviceActionAsyncRequest,
    ProjectEntryEx: ProjectEntryEx,
    DescribeDeviceDataResponse: DescribeDeviceDataResponse,
    CreateDeviceResponse: CreateDeviceResponse,
    GetLoRaGatewayListRequest: GetLoRaGatewayListRequest,
    CreateDeviceRequest: CreateDeviceRequest,
    DescribeProjectRequest: DescribeProjectRequest,
    GetStudioProductListRequest: GetStudioProductListRequest,
    DescribeDeviceDataRequest: DescribeDeviceDataRequest,
    DeleteDeviceResponse: DeleteDeviceResponse,
    DeviceInfo: DeviceInfo,
    CreateLoRaGatewayResponse: CreateLoRaGatewayResponse,
    DescribeDeviceRequest: DescribeDeviceRequest,
    GetDeviceListRequest: GetDeviceListRequest,
    ModifyLoRaGatewayRequest: ModifyLoRaGatewayRequest,
    DeleteLoRaGatewayResponse: DeleteLoRaGatewayResponse,
    LoRaGatewayItem: LoRaGatewayItem,
    DescribeDeviceResponse: DescribeDeviceResponse,
    GetProjectListResponse: GetProjectListResponse,
    CreateProjectRequest: CreateProjectRequest,

}

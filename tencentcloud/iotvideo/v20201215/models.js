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
 * DescribeCloudStorageDate请求参数结构体
 * @class
 */
class DescribeCloudStorageDateRequest extends  AbstractModel {
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
 * 云存时间轴接口返回数据
 * @class
 */
class CloudStorageTimeData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存时间轴信息列表
         * @type {Array.<CloudStorageTimeInfo> || null}
         */
        this.TimeList = null;

        /**
         * 播放地址
         * @type {string || null}
         */
        this.VideoURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TimeList) {
            this.TimeList = new Array();
            for (let z in params.TimeList) {
                let obj = new CloudStorageTimeInfo();
                obj.deserialize(params.TimeList[z]);
                this.TimeList.push(obj);
            }
        }
        this.VideoURL = 'VideoURL' in params ? params.VideoURL : null;

    }
}

/**
 * CreateCloudStorage请求参数结构体
 * @class
 */
class CreateCloudStorageRequest extends  AbstractModel {
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
         * 云存套餐ID：
yc1m3d ： 全时3天存储月套餐。
yc1m7d ： 全时7天存储月套餐。
yc1m30d ：全时30天存储月套餐。
yc1y3d ：全时3天存储年套餐。
yc1y7d ：全时7天存储年套餐。
yc1y30d ：全时30天存储年套餐。
ye1m3d ：事件3天存储月套餐。
ye1m7d ：事件7天存储月套餐。
ye1m30d ：事件30天存储月套餐 。
ye1y3d ：事件3天存储年套餐。
ye1y7d ：事件7天存储年套餐。
ye1y30d ：事件30天存储年套餐。
yc1w7d : 全时7天存储周套餐。
ye1w7d : 事件7天存储周套餐。
         * @type {string || null}
         */
        this.PackageId = null;

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
        this.PackageId = 'PackageId' in params ? params.PackageId : null;

    }
}

/**
 * 批次元数据
 * @class
 */
class VideoBatch extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 状态：1：待创建设备 2：创建中 3：已完成
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 设备前缀
         * @type {string || null}
         */
        this.DevPre = null;

        /**
         * 设备数量
         * @type {number || null}
         */
        this.DevNum = null;

        /**
         * 已创建设备数量
         * @type {number || null}
         */
        this.DevNumCreated = null;

        /**
         * 批次下载地址
         * @type {string || null}
         */
        this.BatchURL = null;

        /**
         * 创建时间。unix时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间。unix时间戳
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
        this.Id = 'Id' in params ? params.Id : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DevPre = 'DevPre' in params ? params.DevPre : null;
        this.DevNum = 'DevNum' in params ? params.DevNum : null;
        this.DevNumCreated = 'DevNumCreated' in params ? params.DevNumCreated : null;
        this.BatchURL = 'BatchURL' in params ? params.BatchURL : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * ImportModelDefinition返回参数结构体
 * @class
 */
class ImportModelDefinitionResponse extends  AbstractModel {
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
 * CreateBatch请求参数结构体
 * @class
 */
class CreateBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 批次创建的设备数量
         * @type {number || null}
         */
        this.DevNum = null;

        /**
         * 批次创建的设备前缀。不超过24个字符
         * @type {string || null}
         */
        this.DevPre = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DevNum = 'DevNum' in params ? params.DevNum : null;
        this.DevPre = 'DevPre' in params ? params.DevPre : null;

    }
}

/**
 * DescribeCloudStorageTime返回参数结构体
 * @class
 */
class DescribeCloudStorageTimeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 接口返回数据
         * @type {CloudStorageTimeData || null}
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
            let obj = new CloudStorageTimeData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 分页的大小，最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，Offset从0开始
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
 * DescribeDeviceEventHistory返回参数结构体
 * @class
 */
class DescribeDeviceEventHistoryResponse extends  AbstractModel {
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
 * DescribeDeviceActionHistory请求参数结构体
 * @class
 */
class DescribeDeviceActionHistoryRequest extends  AbstractModel {
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
         * 开始范围的 unix 毫秒时间戳
         * @type {number || null}
         */
        this.MinTime = null;

        /**
         * 结束范围的 unix 毫秒时间戳
         * @type {number || null}
         */
        this.MaxTime = null;

        /**
         * 动作Id
         * @type {string || null}
         */
        this.ActionId = null;

        /**
         * 查询条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 游标，标识查询位置。
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.MinTime = 'MinTime' in params ? params.MinTime : null;
        this.MaxTime = 'MaxTime' in params ? params.MaxTime : null;
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;

    }
}

/**
 * DescribeDevices返回参数结构体
 * @class
 */
class DescribeDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 设备详细信息列表
         * @type {Array.<DeviceInfo> || null}
         */
        this.Devices = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceInfo();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyProduct返回参数结构体
 * @class
 */
class ModifyProductResponse extends  AbstractModel {
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
 * ModifyProduct请求参数结构体
 * @class
 */
class ModifyProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 修改的产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 修改的产品描述
         * @type {string || null}
         */
        this.ProductDescription = null;

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
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;

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
 * DescribeBatchs返回参数结构体
 * @class
 */
class DescribeBatchsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次数量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 批次列表详情
         * @type {Array.<VideoBatch> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new VideoBatch();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransferCloudStorage返回参数结构体
 * @class
 */
class TransferCloudStorageResponse extends  AbstractModel {
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
 * DescribeForwardRule返回参数结构体
 * @class
 */
class DescribeForwardRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云账号
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 队列名称
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 消息类型
         * @type {number || null}
         */
        this.MsgType = null;

        /**
         * 结果
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 角色名
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 角色ID
         * @type {number || null}
         */
        this.RoleID = null;

        /**
         * 队列区域
         * @type {string || null}
         */
        this.QueueRegion = null;

        /**
         * 队列类型，0：CMQ，1：Ckafka
         * @type {number || null}
         */
        this.QueueType = null;

        /**
         * 实例id， 目前只有Ckafaka会用到
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称，目前只有Ckafaka会用到
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.MsgType = 'MsgType' in params ? params.MsgType : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.RoleID = 'RoleID' in params ? params.RoleID : null;
        this.QueueRegion = 'QueueRegion' in params ? params.QueueRegion : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBatch请求参数结构体
 * @class
 */
class DescribeBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {number || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

    }
}

/**
 * 云存时间轴信息
 * @class
 */
class CloudStorageTimeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {number || null}
         */
        this.EndTime = null;

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

    }
}

/**
 * ModifyDevice请求参数结构体
 * @class
 */
class ModifyDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备所属产品id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 要设置的设备状态，1为启用，0为禁用
         * @type {number || null}
         */
        this.EnableState = null;

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
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

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
 * 查询设备历史
 * @class
 */
class ActionHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 动作Id
         * @type {string || null}
         */
        this.ActionId = null;

        /**
         * 动作名称
         * @type {string || null}
         */
        this.ActionName = null;

        /**
         * 请求时间
         * @type {number || null}
         */
        this.ReqTime = null;

        /**
         * 响应时间
         * @type {number || null}
         */
        this.RspTime = null;

        /**
         * 输入参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InputParams = null;

        /**
         * 输出参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutputParams = null;

        /**
         * 调用方式
         * @type {string || null}
         */
        this.Calling = null;

        /**
         * 调用Id
         * @type {string || null}
         */
        this.ClientToken = null;

        /**
         * 调用状态
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
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ActionId = 'ActionId' in params ? params.ActionId : null;
        this.ActionName = 'ActionName' in params ? params.ActionName : null;
        this.ReqTime = 'ReqTime' in params ? params.ReqTime : null;
        this.RspTime = 'RspTime' in params ? params.RspTime : null;
        this.InputParams = 'InputParams' in params ? params.InputParams : null;
        this.OutputParams = 'OutputParams' in params ? params.OutputParams : null;
        this.Calling = 'Calling' in params ? params.Calling : null;
        this.ClientToken = 'ClientToken' in params ? params.ClientToken : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeFirmwareTaskStatistics返回参数结构体
 * @class
 */
class DescribeFirmwareTaskStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 升级成功的设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessTotal = null;

        /**
         * 升级失败的设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailureTotal = null;

        /**
         * 正在升级的设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.UpgradingTotal = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessTotal = 'SuccessTotal' in params ? params.SuccessTotal : null;
        this.FailureTotal = 'FailureTotal' in params ? params.FailureTotal : null;
        this.UpgradingTotal = 'UpgradingTotal' in params ? params.UpgradingTotal : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFirmware请求参数结构体
 * @class
 */
class DescribeFirmwareRequest extends  AbstractModel {
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

    }
}

/**
 * DescribeProduct请求参数结构体
 * @class
 */
class DescribeProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品id
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
 * DescribeProducts返回参数结构体
 * @class
 */
class DescribeProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 产品详情列表
         * @type {Array.<VideoProduct> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new VideoProduct();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckForwardAuth请求参数结构体
 * @class
 */
class CheckForwardAuthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控制台Skey
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * 队列类型
         * @type {number || null}
         */
        this.QueueType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;

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
 * CreateBatch返回参数结构体
 * @class
 */
class CreateBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次ID
         * @type {number || null}
         */
        this.BatchId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceActionHistory返回参数结构体
 * @class
 */
class DescribeDeviceActionHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总条数
         * @type {number || null}
         */
        this.TotalCounts = null;

        /**
         * 动作历史
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ActionHistory> || null}
         */
        this.ActionHistories = null;

        /**
         * 用于标识查询结果的上下文，翻页用。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 搜索结果是否已经结束。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.Listover = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCounts = 'TotalCounts' in params ? params.TotalCounts : null;

        if (params.ActionHistories) {
            this.ActionHistories = new Array();
            for (let z in params.ActionHistories) {
                let obj = new ActionHistory();
                obj.deserialize(params.ActionHistories[z]);
                this.ActionHistories.push(obj);
            }
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.Listover = 'Listover' in params ? params.Listover : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAllFirmwareVersion请求参数结构体
 * @class
 */
class GetAllFirmwareVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;

    }
}

/**
 * 设备通讯日志查询返回条目
 * @class
 */
class DeviceCommLogItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间
         * @type {string || null}
         */
        this.Time = null;

        /**
         * 日志类型，device 设备上行，shadow 服务端下行。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 通讯数据。
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
        this.Time = 'Time' in params ? params.Time : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * 设备固件更新状态
 * @class
 */
class DeviceUpdateStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 最后处理时间
         * @type {number || null}
         */
        this.LastProcessTime = null;

        /**
         * 状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 返回码
         * @type {number || null}
         */
        this.Retcode = null;

        /**
         * 目标更新版本
         * @type {string || null}
         */
        this.DstVersion = null;

        /**
         * 下载中状态时的下载进度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 原版本号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriVersion = null;

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
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
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.LastProcessTime = 'LastProcessTime' in params ? params.LastProcessTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Retcode = 'Retcode' in params ? params.Retcode : null;
        this.DstVersion = 'DstVersion' in params ? params.DstVersion : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.OriVersion = 'OriVersion' in params ? params.OriVersion : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DeleteFirmware返回参数结构体
 * @class
 */
class DeleteFirmwareResponse extends  AbstractModel {
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
 * CreateForwardRule返回参数结构体
 * @class
 */
class CreateForwardRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云账号
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 队列名
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 消息类型
         * @type {number || null}
         */
        this.MsgType = null;

        /**
         * 结果
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 角色名称
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 角色ID
         * @type {number || null}
         */
        this.RoleID = null;

        /**
         * 队列区
         * @type {string || null}
         */
        this.QueueRegion = null;

        /**
         * 消息队列的类型。 0：CMQ，1：CKafaka
         * @type {number || null}
         */
        this.QueueType = null;

        /**
         * 实例id， 目前只有Ckafaka会用到
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 实例名称，目前只有Ckafaka会用到
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.MsgType = 'MsgType' in params ? params.MsgType : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.RoleID = 'RoleID' in params ? params.RoleID : null;
        this.QueueRegion = 'QueueRegion' in params ? params.QueueRegion : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BatchUpdateFirmware返回参数结构体
 * @class
 */
class BatchUpdateFirmwareResponse extends  AbstractModel {
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
 * DeleteProduct请求参数结构体
 * @class
 */
class DeleteProductRequest extends  AbstractModel {
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
 * 状态统计信息
 * @class
 */
class StatusStatistic extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 统计总数
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Status = 'Status' in params ? params.Status : null;
        this.Total = 'Total' in params ? params.Total : null;

    }
}

/**
 * SetForwardAuth返回参数结构体
 * @class
 */
class SetForwardAuthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云账号
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 结果
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 角色名
         * @type {string || null}
         */
        this.RoleName = null;

        /**
         * 角色ID
         * @type {number || null}
         */
        this.RoleID = null;

        /**
         * 消息队列类型
         * @type {number || null}
         */
        this.QueueType = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RoleName = 'RoleName' in params ? params.RoleName : null;
        this.RoleID = 'RoleID' in params ? params.RoleID : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EditFirmware请求参数结构体
 * @class
 */
class EditFirmwareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID。
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 固件版本号。
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * 固件名称。
         * @type {string || null}
         */
        this.FirmwareName = null;

        /**
         * 固件描述。
         * @type {string || null}
         */
        this.FirmwareDescription = null;

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
        this.FirmwareName = 'FirmwareName' in params ? params.FirmwareName : null;
        this.FirmwareDescription = 'FirmwareDescription' in params ? params.FirmwareDescription : null;

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
 * DescribeDeviceEventHistory请求参数结构体
 * @class
 */
class DescribeDeviceEventHistoryRequest extends  AbstractModel {
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
 * DescribeCategory返回参数结构体
 * @class
 */
class DescribeCategoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Category详情
         * @type {ProductTemplate || null}
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
            let obj = new ProductTemplate();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBalance请求参数结构体
 * @class
 */
class DescribeBalanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户类型：1-设备接入；2-云存。
         * @type {number || null}
         */
        this.AccountType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountType = 'AccountType' in params ? params.AccountType : null;

    }
}

/**
 * ImportModelDefinition请求参数结构体
 * @class
 */
class ImportModelDefinitionRequest extends  AbstractModel {
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
 * DescribeDeviceCommLog返回参数结构体
 * @class
 */
class DescribeDeviceCommLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据是否已全部返回，true 表示数据全部返回，false 表示还有数据待返回，可将 Context 作为入参，继续查询返回结果。
         * @type {boolean || null}
         */
        this.Listover = null;

        /**
         * 检索上下文，当 ListOver 为false时，可以用此上下文，继续读取后续数据
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 日志数据结果数组，返回对应时间点及取值。
         * @type {Array.<DeviceCommLogItem> || null}
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
        this.Listover = 'Listover' in params ? params.Listover : null;
        this.Context = 'Context' in params ? params.Context : null;

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new DeviceCommLogItem();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * GenerateSignedVideoURL返回参数结构体
 * @class
 */
class GenerateSignedVideoURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频防盗链播放URL
         * @type {string || null}
         */
        this.SignedVideoURL = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignedVideoURL = 'SignedVideoURL' in params ? params.SignedVideoURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeFirmwareTaskDevices请求参数结构体
 * @class
 */
class DescribeFirmwareTaskDevicesRequest extends  AbstractModel {
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
         * 筛选条件
         * @type {Array.<SearchKeyword> || null}
         */
        this.Filters = null;

        /**
         * 查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询的数量
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
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new SearchKeyword();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeFirmware返回参数结构体
 * @class
 */
class DescribeFirmwareResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固件版本号
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

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
         * 固件Md5值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Md5sum = null;

        /**
         * 固件上传的秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Createtime = null;

        /**
         * 产品名称
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
        this.Version = 'Version' in params ? params.Version : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Md5sum = 'Md5sum' in params ? params.Md5sum : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceCommLog请求参数结构体
 * @class
 */
class DescribeDeviceCommLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间
         * @type {number || null}
         */
        this.MinTime = null;

        /**
         * 结束时间
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
         * 返回条数
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 检索上下文
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 类型：shadow 下行，device 上行
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
        this.MinTime = 'MinTime' in params ? params.MinTime : null;
        this.MaxTime = 'MaxTime' in params ? params.MaxTime : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteForwardRule请求参数结构体
 * @class
 */
class DeleteForwardRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 控制台Skey
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * 队列类型
         * @type {number || null}
         */
        this.QueueType = null;

        /**
         * 队列名称
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * DescribeBalanceTransactions请求参数结构体
 * @class
 */
class DescribeBalanceTransactionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户类型：1-设备接入；2-云存。
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 分页游标开始，默认为0开始拉取第一条。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页每页数量。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 流水类型：All-全部类型；Recharge-充值；CreateOrder-新购。
         * @type {string || null}
         */
        this.Operation = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Operation = 'Operation' in params ? params.Operation : null;

    }
}

/**
 * CreateProduct返回参数结构体
 * @class
 */
class CreateProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品详情
         * @type {VideoProduct || null}
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
            let obj = new VideoProduct();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeFirmwareTaskDevices返回参数结构体
 * @class
 */
class DescribeFirmwareTaskDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固件升级任务的设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 固件升级任务的设备列表
         * @type {Array.<DeviceUpdateStatus> || null}
         */
        this.Devices = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceUpdateStatus();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudStorageThumbnail返回参数结构体
 * @class
 */
class DescribeCloudStorageThumbnailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 缩略图访问地址
         * @type {string || null}
         */
        this.ThumbnailURL = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ThumbnailURL = 'ThumbnailURL' in params ? params.ThumbnailURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RetryDeviceFirmwareTask返回参数结构体
 * @class
 */
class RetryDeviceFirmwareTaskResponse extends  AbstractModel {
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
 * GenerateSignedVideoURL请求参数结构体
 * @class
 */
class GenerateSignedVideoURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 视频播放原始URL地址
         * @type {string || null}
         */
        this.VideoURL = null;

        /**
         * 播放链接过期时间
         * @type {number || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VideoURL = 'VideoURL' in params ? params.VideoURL : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * ResetCloudStorage返回参数结构体
 * @class
 */
class ResetCloudStorageResponse extends  AbstractModel {
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
         * 固件任务创建时间，单位:秒
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
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 固件名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 固件描述
         * @type {string || null}
         */
        this.Description = null;

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
        this.Version = 'Version' in params ? params.Version : null;
        this.Md5sum = 'Md5sum' in params ? params.Md5sum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * CreateProduct请求参数结构体
 * @class
 */
class CreateProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品设备类型
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * 产品有效期
         * @type {number || null}
         */
        this.ProductVaildYears = null;

        /**
         * 设备功能码
         * @type {Array.<string> || null}
         */
        this.Features = null;

        /**
         * 设备操作系统
         * @type {string || null}
         */
        this.ChipOs = null;

        /**
         * 芯片厂商id
         * @type {string || null}
         */
        this.ChipManufactureId = null;

        /**
         * 芯片id
         * @type {string || null}
         */
        this.ChipId = null;

        /**
         * 产品描述信息
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * 认证方式。2 PSK
         * @type {number || null}
         */
        this.EncryptionType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.ProductVaildYears = 'ProductVaildYears' in params ? params.ProductVaildYears : null;
        this.Features = 'Features' in params ? params.Features : null;
        this.ChipOs = 'ChipOs' in params ? params.ChipOs : null;
        this.ChipManufactureId = 'ChipManufactureId' in params ? params.ChipManufactureId : null;
        this.ChipId = 'ChipId' in params ? params.ChipId : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.EncryptionType = 'EncryptionType' in params ? params.EncryptionType : null;

    }
}

/**
 * DescribeFirmwareTasks请求参数结构体
 * @class
 */
class DescribeFirmwareTasksRequest extends  AbstractModel {
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
         * 查询偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 返回查询结果条数
         * @type {number || null}
         */
        this.Limit = null;

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
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * GetFirmwareURL返回参数结构体
 * @class
 */
class GetFirmwareURLResponse extends  AbstractModel {
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
 * DescribeDevice返回参数结构体
 * @class
 */
class DescribeDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备是否在线，0不在线，1在线，2获取失败，3未激活
         * @type {number || null}
         */
        this.Online = null;

        /**
         * 设备最后上线时间
         * @type {number || null}
         */
        this.LoginTime = null;

        /**
         * 设备密钥
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * 设备启用状态
         * @type {number || null}
         */
        this.EnableState = null;

        /**
         * 设备过期时间
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCloudStorageEvents请求参数结构体
 * @class
 */
class DescribeCloudStorageEventsRequest extends  AbstractModel {
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
         * 请求上下文, 用作查询游标
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Context = 'Context' in params ? params.Context : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

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
 * RetryDeviceFirmwareTask请求参数结构体
 * @class
 */
class RetryDeviceFirmwareTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 固件版本号
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * 固件升级任务ID
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
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * DescribeBalance返回参数结构体
 * @class
 */
class DescribeBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户余额，单位：分（人民币）。
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

    }
}

/**
 * DescribeFirmwareTasks返回参数结构体
 * @class
 */
class DescribeFirmwareTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固件升级任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FirmwareTaskInfo> || null}
         */
        this.TaskInfos = null;

        /**
         * 固件升级任务总数
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

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new FirmwareTaskInfo();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EditFirmware返回参数结构体
 * @class
 */
class EditFirmwareResponse extends  AbstractModel {
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
 * DescribeFirmwareTaskDistribution请求参数结构体
 * @class
 */
class DescribeFirmwareTaskDistributionRequest extends  AbstractModel {
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
         * 固件升级任务ID
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
 * 产品分类实体
 * @class
 */
class ProductTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实体ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 分类字段
         * @type {string || null}
         */
        this.CategoryKey = null;

        /**
         * 分类名称
         * @type {string || null}
         */
        this.CategoryName = null;

        /**
         * 上层实体ID
         * @type {number || null}
         */
        this.ParentId = null;

        /**
         * 物模型
         * @type {string || null}
         */
        this.ModelTemplate = null;

        /**
         * 排列顺序
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ListOrder = null;

        /**
         * 分类图标地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IconUrl = null;

        /**
         * 九宫格图片地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IconUrlGrid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.CategoryKey = 'CategoryKey' in params ? params.CategoryKey : null;
        this.CategoryName = 'CategoryName' in params ? params.CategoryName : null;
        this.ParentId = 'ParentId' in params ? params.ParentId : null;
        this.ModelTemplate = 'ModelTemplate' in params ? params.ModelTemplate : null;
        this.ListOrder = 'ListOrder' in params ? params.ListOrder : null;
        this.IconUrl = 'IconUrl' in params ? params.IconUrl : null;
        this.IconUrlGrid = 'IconUrlGrid' in params ? params.IconUrlGrid : null;

    }
}

/**
 * DeleteProduct返回参数结构体
 * @class
 */
class DeleteProductResponse extends  AbstractModel {
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
 * ModifyForwardRule返回参数结构体
 * @class
 */
class ModifyForwardRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云账号
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 结果
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 错误信息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 队列类型
         * @type {number || null}
         */
        this.QueueType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 账户流水
 * @class
 */
class BalanceTransaction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户类型：1-设备接入 2-云存。
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 账户变更类型：Rechareg-充值；CreateOrder-新购。
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 流水ID。
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * 变更金额，单位：分（人民币）。
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 变更后账户余额，单位：分（人民币）。
         * @type {number || null}
         */
        this.Balance = null;

        /**
         * 变更时间。
         * @type {number || null}
         */
        this.OperationTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.OperationTime = 'OperationTime' in params ? params.OperationTime : null;

    }
}

/**
 * 固件升级任务信息
 * @class
 */
class FirmwareTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeFirmwareTaskDistribution返回参数结构体
 * @class
 */
class DescribeFirmwareTaskDistributionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 固件升级任务状态分布信息
         * @type {Array.<StatusStatistic> || null}
         */
        this.StatusInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.StatusInfos) {
            this.StatusInfos = new Array();
            for (let z in params.StatusInfos) {
                let obj = new StatusStatistic();
                obj.deserialize(params.StatusInfos[z]);
                this.StatusInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBatch返回参数结构体
 * @class
 */
class DescribeBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次详情
         * @type {VideoBatch || null}
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
            let obj = new VideoBatch();
            obj.deserialize(params.Data)
            this.Data = obj;
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
 * ModifyForwardRule请求参数结构体
 * @class
 */
class ModifyForwardRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 消息类型
         * @type {number || null}
         */
        this.MsgType = null;

        /**
         * 控制台Skey
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * 队列区域
         * @type {string || null}
         */
        this.QueueRegion = null;

        /**
         * 队列类型
         * @type {number || null}
         */
        this.QueueType = null;

        /**
         * 临时密钥
         * @type {string || null}
         */
        this.Consecretid = null;

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
         * 队列或主题ID
         * @type {string || null}
         */
        this.QueueID = null;

        /**
         * 队列或主题名称
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.MsgType = 'MsgType' in params ? params.MsgType : null;
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.QueueRegion = 'QueueRegion' in params ? params.QueueRegion : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;
        this.Consecretid = 'Consecretid' in params ? params.Consecretid : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.QueueID = 'QueueID' in params ? params.QueueID : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * DescribeCloudStorageEvents返回参数结构体
 * @class
 */
class DescribeCloudStorageEventsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存事件列表
         * @type {Array.<CloudStorageEvent> || null}
         */
        this.Events = null;

        /**
         * 请求上下文, 用作查询游标
         * @type {string || null}
         */
        this.Context = null;

        /**
         * 拉取结果是否已经结束
         * @type {boolean || null}
         */
        this.Listover = null;

        /**
         * 拉取结果数量
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 视频播放URL
         * @type {string || null}
         */
        this.VideoURL = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Events) {
            this.Events = new Array();
            for (let z in params.Events) {
                let obj = new CloudStorageEvent();
                obj.deserialize(params.Events[z]);
                this.Events.push(obj);
            }
        }
        this.Context = 'Context' in params ? params.Context : null;
        this.Listover = 'Listover' in params ? params.Listover : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.VideoURL = 'VideoURL' in params ? params.VideoURL : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * video产品元数据
 * @class
 */
class VideoProduct extends  AbstractModel {
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
         * 产品设备类型（普通设备)	1.普通设备
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * 认证方式：2：PSK
         * @type {number || null}
         */
        this.EncryptionType = null;

        /**
         * 设备功能码
         * @type {Array.<string> || null}
         */
        this.Features = null;

        /**
         * 操作系统
         * @type {string || null}
         */
        this.ChipOs = null;

        /**
         * 芯片厂商id
         * @type {string || null}
         */
        this.ChipManufactureId = null;

        /**
         * 芯片id
         * @type {string || null}
         */
        this.ChipId = null;

        /**
         * 产品描述信息
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * 创建时间unix时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间unix时间戳
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
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.EncryptionType = 'EncryptionType' in params ? params.EncryptionType : null;
        this.Features = 'Features' in params ? params.Features : null;
        this.ChipOs = 'ChipOs' in params ? params.ChipOs : null;
        this.ChipManufactureId = 'ChipManufactureId' in params ? params.ChipManufactureId : null;
        this.ChipId = 'ChipId' in params ? params.ChipId : null;
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 云存事件
 * @class
 */
class CloudStorageEvent extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件起始时间（Unix 时间戳，秒级
         * @type {number || null}
         */
        this.StartTime = null;

        /**
         * 事件结束时间（Unix 时间戳，秒级
         * @type {number || null}
         */
        this.EndTime = null;

        /**
         * 事件缩略图
         * @type {string || null}
         */
        this.Thumbnail = null;

        /**
         * 事件ID
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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Thumbnail = 'Thumbnail' in params ? params.Thumbnail : null;
        this.EventId = 'EventId' in params ? params.EventId : null;

    }
}

/**
 * DescribeCloudStorageDate返回参数结构体
 * @class
 */
class DescribeCloudStorageDateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存日期数组，["2021-01-05","2021-01-06"]
         * @type {Array.<string> || null}
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
 * DescribeForwardRule请求参数结构体
 * @class
 */
class DescribeForwardRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 控制台Skey
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * 队列类型，0：CMQ，1：Ckafka
         * @type {number || null}
         */
        this.QueueType = null;

        /**
         * 临时密钥
         * @type {string || null}
         */
        this.Consecretid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;
        this.Consecretid = 'Consecretid' in params ? params.Consecretid : null;

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
 * CreateCloudStorage返回参数结构体
 * @class
 */
class CreateCloudStorageResponse extends  AbstractModel {
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
 * CancelDeviceFirmwareTask请求参数结构体
 * @class
 */
class CancelDeviceFirmwareTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 固件版本号
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * 固件升级任务ID
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
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * CancelDeviceFirmwareTask返回参数结构体
 * @class
 */
class CancelDeviceFirmwareTaskResponse extends  AbstractModel {
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
         * @type {Array.<number> || null}
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
 * CreateForwardRule请求参数结构体
 * @class
 */
class CreateForwardRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 消息类型
         * @type {number || null}
         */
        this.MsgType = null;

        /**
         * 控制台Skey
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * 队列区域
         * @type {string || null}
         */
        this.QueueRegion = null;

        /**
         * 队列类型
         * @type {number || null}
         */
        this.QueueType = null;

        /**
         * 临时密钥
         * @type {string || null}
         */
        this.Consecretid = null;

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
         * 队列或主题ID
         * @type {string || null}
         */
        this.QueueID = null;

        /**
         * 队列或主题名称
         * @type {string || null}
         */
        this.QueueName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.MsgType = 'MsgType' in params ? params.MsgType : null;
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.QueueRegion = 'QueueRegion' in params ? params.QueueRegion : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;
        this.Consecretid = 'Consecretid' in params ? params.Consecretid : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.QueueID = 'QueueID' in params ? params.QueueID : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

    }
}

/**
 * CreateTaskFileUrl返回参数结构体
 * @class
 */
class CreateTaskFileUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务文件上传链接
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 任务文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SetForwardAuth请求参数结构体
 * @class
 */
class SetForwardAuthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 控制台Skey
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * 消息队列类型
         * @type {number || null}
         */
        this.QueueType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;

    }
}

/**
 * DescribeBalanceTransactions返回参数结构体
 * @class
 */
class DescribeBalanceTransactionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户流水总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 账户流水详情数组。
         * @type {Array.<BalanceTransaction> || null}
         */
        this.Transactions = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Transactions) {
            this.Transactions = new Array();
            for (let z in params.Transactions) {
                let obj = new BalanceTransaction();
                obj.deserialize(params.Transactions[z]);
                this.Transactions.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDevice返回参数结构体
 * @class
 */
class ModifyDeviceResponse extends  AbstractModel {
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
 * CreateTaskFileUrl请求参数结构体
 * @class
 */
class CreateTaskFileUrlRequest extends  AbstractModel {
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
 * BatchUpdateFirmware请求参数结构体
 * @class
 */
class BatchUpdateFirmwareRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 固件新版本号
         * @type {string || null}
         */
        this.FirmwareVersion = null;

        /**
         * 固件原版本号，根据文件列表升级固件不需要填写此参数
         * @type {string || null}
         */
        this.FirmwareOriVersion = null;

        /**
         * 升级方式，0 静默升级  1 用户确认升级。 不填默认为静默升级方式
         * @type {number || null}
         */
        this.UpgradeMethod = null;

        /**
         * 设备列表文件名称，根据文件列表升级固件需要填写此参数
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 设备列表的文件md5值
         * @type {string || null}
         */
        this.FileMd5 = null;

        /**
         * 设备列表的文件大小值
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 需要升级的设备名称列表
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
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.FirmwareOriVersion = 'FirmwareOriVersion' in params ? params.FirmwareOriVersion : null;
        this.UpgradeMethod = 'UpgradeMethod' in params ? params.UpgradeMethod : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileMd5 = 'FileMd5' in params ? params.FileMd5 : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;

    }
}

/**
 * DescribeCloudStorageThumbnail请求参数结构体
 * @class
 */
class DescribeCloudStorageThumbnailRequest extends  AbstractModel {
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
         * 缩略图文件名
         * @type {string || null}
         */
        this.Thumbnail = null;

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
        this.Thumbnail = 'Thumbnail' in params ? params.Thumbnail : null;

    }
}

/**
 * GetFirmwareURL请求参数结构体
 * @class
 */
class GetFirmwareURLRequest extends  AbstractModel {
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

    }
}

/**
 * DescribeCloudStorage返回参数结构体
 * @class
 */
class DescribeCloudStorageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云存开启状态，1为开启，0为未开启或已过期
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 云存类型，1为全时云存，2为事件云存
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 云存套餐过期时间
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 云存回看时长
         * @type {number || null}
         */
        this.ShiftDuration = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Type = 'Type' in params ? params.Type : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ShiftDuration = 'ShiftDuration' in params ? params.ShiftDuration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProduct返回参数结构体
 * @class
 */
class DescribeProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品详情
         * @type {VideoProduct || null}
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
            let obj = new VideoProduct();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCategory请求参数结构体
 * @class
 */
class DescribeCategoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Category ID。
         * @type {number || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DeleteFirmware请求参数结构体
 * @class
 */
class DeleteFirmwareRequest extends  AbstractModel {
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

    }
}

/**
 * DescribeCloudStorage请求参数结构体
 * @class
 */
class DescribeCloudStorageRequest extends  AbstractModel {
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
 * GetAllFirmwareVersion返回参数结构体
 * @class
 */
class GetAllFirmwareVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 无
         * @type {Array.<string> || null}
         */
        this.Version = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Version = 'Version' in params ? params.Version : null;
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
 * DescribeDevices请求参数结构体
 * @class
 */
class DescribeDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查看设备列表的产品 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 偏移量，Offset从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的大小，最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 需要过滤的设备名称
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

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
 * CheckForwardAuth返回参数结构体
 * @class
 */
class CheckForwardAuthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云账号
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 结果
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.Productid = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 队列类型
         * @type {number || null}
         */
        this.QueueType = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Productid = 'Productid' in params ? params.Productid : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.QueueType = 'QueueType' in params ? params.QueueType : null;
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
 * DeleteForwardRule返回参数结构体
 * @class
 */
class DeleteForwardRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 腾讯云账号
         * @type {string || null}
         */
        this.Endpoint = null;

        /**
         * 队列名称
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 删除结果
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Endpoint = 'Endpoint' in params ? params.Endpoint : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransferCloudStorage请求参数结构体
 * @class
 */
class TransferCloudStorageRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 已开通云存的设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 未开通云存的设备名称
         * @type {string || null}
         */
        this.ToDeviceName = null;

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
        this.ToDeviceName = 'ToDeviceName' in params ? params.ToDeviceName : null;

    }
}

/**
 * DescribeFirmwareTaskStatistics请求参数结构体
 * @class
 */
class DescribeFirmwareTaskStatisticsRequest extends  AbstractModel {
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

    }
}

/**
 * DescribeBatchs请求参数结构体
 * @class
 */
class DescribeBatchsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 分页的大小，最大100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量，Offset从0开始
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * 设备是否在线，0不在线，1在线，2获取失败，3未激活
         * @type {number || null}
         */
        this.Online = null;

        /**
         * 设备最后上线时间
         * @type {number || null}
         */
        this.LoginTime = null;

        /**
         * 设备密钥
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * 设备启用状态
         * @type {number || null}
         */
        this.EnableState = null;

        /**
         * 设备过期时间
         * @type {number || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Online = 'Online' in params ? params.Online : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

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
 * ResetCloudStorage请求参数结构体
 * @class
 */
class ResetCloudStorageRequest extends  AbstractModel {
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
 * DescribeCloudStorageTime请求参数结构体
 * @class
 */
class DescribeCloudStorageTimeRequest extends  AbstractModel {
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
         * 云存日期，例如"2020-01-05"
         * @type {string || null}
         */
        this.Date = null;

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
        this.Date = 'Date' in params ? params.Date : null;

    }
}

module.exports = {
    DescribeCloudStorageDateRequest: DescribeCloudStorageDateRequest,
    CloudStorageTimeData: CloudStorageTimeData,
    CreateCloudStorageRequest: CreateCloudStorageRequest,
    VideoBatch: VideoBatch,
    ImportModelDefinitionResponse: ImportModelDefinitionResponse,
    DescribeModelDefinitionResponse: DescribeModelDefinitionResponse,
    CreateBatchRequest: CreateBatchRequest,
    DescribeCloudStorageTimeResponse: DescribeCloudStorageTimeResponse,
    DescribeProductsRequest: DescribeProductsRequest,
    DescribeDeviceEventHistoryResponse: DescribeDeviceEventHistoryResponse,
    DescribeDeviceActionHistoryRequest: DescribeDeviceActionHistoryRequest,
    DescribeDevicesResponse: DescribeDevicesResponse,
    ModifyProductResponse: ModifyProductResponse,
    ModifyProductRequest: ModifyProductRequest,
    ModifyModelDefinitionRequest: ModifyModelDefinitionRequest,
    DescribeBatchsResponse: DescribeBatchsResponse,
    TransferCloudStorageResponse: TransferCloudStorageResponse,
    DescribeForwardRuleResponse: DescribeForwardRuleResponse,
    DescribeBatchRequest: DescribeBatchRequest,
    CloudStorageTimeInfo: CloudStorageTimeInfo,
    ModifyDeviceRequest: ModifyDeviceRequest,
    ProductModelDefinition: ProductModelDefinition,
    ActionHistory: ActionHistory,
    DescribeFirmwareTaskStatisticsResponse: DescribeFirmwareTaskStatisticsResponse,
    DescribeFirmwareRequest: DescribeFirmwareRequest,
    DescribeProductRequest: DescribeProductRequest,
    DescribeProductsResponse: DescribeProductsResponse,
    CheckForwardAuthRequest: CheckForwardAuthRequest,
    DescribeDeviceDataRequest: DescribeDeviceDataRequest,
    CreateBatchResponse: CreateBatchResponse,
    DescribeDeviceActionHistoryResponse: DescribeDeviceActionHistoryResponse,
    GetAllFirmwareVersionRequest: GetAllFirmwareVersionRequest,
    DeviceCommLogItem: DeviceCommLogItem,
    DeviceUpdateStatus: DeviceUpdateStatus,
    DeleteFirmwareResponse: DeleteFirmwareResponse,
    CreateForwardRuleResponse: CreateForwardRuleResponse,
    BatchUpdateFirmwareResponse: BatchUpdateFirmwareResponse,
    DeleteProductRequest: DeleteProductRequest,
    StatusStatistic: StatusStatistic,
    SetForwardAuthResponse: SetForwardAuthResponse,
    EditFirmwareRequest: EditFirmwareRequest,
    DeviceDataHistoryItem: DeviceDataHistoryItem,
    DescribeDeviceEventHistoryRequest: DescribeDeviceEventHistoryRequest,
    DescribeCategoryResponse: DescribeCategoryResponse,
    DescribeBalanceRequest: DescribeBalanceRequest,
    ImportModelDefinitionRequest: ImportModelDefinitionRequest,
    DescribeDeviceCommLogResponse: DescribeDeviceCommLogResponse,
    DeleteDeviceRequest: DeleteDeviceRequest,
    GenerateSignedVideoURLResponse: GenerateSignedVideoURLResponse,
    ListFirmwaresResponse: ListFirmwaresResponse,
    DescribeFirmwareTaskDevicesRequest: DescribeFirmwareTaskDevicesRequest,
    DescribeFirmwareResponse: DescribeFirmwareResponse,
    DescribeDeviceCommLogRequest: DescribeDeviceCommLogRequest,
    DeleteForwardRuleRequest: DeleteForwardRuleRequest,
    DescribeBalanceTransactionsRequest: DescribeBalanceTransactionsRequest,
    CreateProductResponse: CreateProductResponse,
    DescribeFirmwareTaskDevicesResponse: DescribeFirmwareTaskDevicesResponse,
    DescribeCloudStorageThumbnailResponse: DescribeCloudStorageThumbnailResponse,
    RetryDeviceFirmwareTaskResponse: RetryDeviceFirmwareTaskResponse,
    GenerateSignedVideoURLRequest: GenerateSignedVideoURLRequest,
    ResetCloudStorageResponse: ResetCloudStorageResponse,
    DescribeFirmwareTaskResponse: DescribeFirmwareTaskResponse,
    FirmwareInfo: FirmwareInfo,
    CreateProductRequest: CreateProductRequest,
    DescribeFirmwareTasksRequest: DescribeFirmwareTasksRequest,
    GetFirmwareURLResponse: GetFirmwareURLResponse,
    DescribeDeviceResponse: DescribeDeviceResponse,
    DescribeCloudStorageEventsRequest: DescribeCloudStorageEventsRequest,
    ListFirmwaresRequest: ListFirmwaresRequest,
    RetryDeviceFirmwareTaskRequest: RetryDeviceFirmwareTaskRequest,
    DescribeBalanceResponse: DescribeBalanceResponse,
    UploadFirmwareRequest: UploadFirmwareRequest,
    DescribeFirmwareTasksResponse: DescribeFirmwareTasksResponse,
    EditFirmwareResponse: EditFirmwareResponse,
    DescribeFirmwareTaskDistributionRequest: DescribeFirmwareTaskDistributionRequest,
    ProductTemplate: ProductTemplate,
    DeleteProductResponse: DeleteProductResponse,
    ModifyForwardRuleResponse: ModifyForwardRuleResponse,
    BalanceTransaction: BalanceTransaction,
    FirmwareTaskInfo: FirmwareTaskInfo,
    DescribeFirmwareTaskDistributionResponse: DescribeFirmwareTaskDistributionResponse,
    DescribeBatchResponse: DescribeBatchResponse,
    DescribeDeviceRequest: DescribeDeviceRequest,
    ModifyForwardRuleRequest: ModifyForwardRuleRequest,
    DescribeCloudStorageEventsResponse: DescribeCloudStorageEventsResponse,
    VideoProduct: VideoProduct,
    CloudStorageEvent: CloudStorageEvent,
    DescribeCloudStorageDateResponse: DescribeCloudStorageDateResponse,
    DescribeForwardRuleRequest: DescribeForwardRuleRequest,
    UploadFirmwareResponse: UploadFirmwareResponse,
    CreateCloudStorageResponse: CreateCloudStorageResponse,
    CancelDeviceFirmwareTaskRequest: CancelDeviceFirmwareTaskRequest,
    CancelDeviceFirmwareTaskResponse: CancelDeviceFirmwareTaskResponse,
    DeleteDeviceResponse: DeleteDeviceResponse,
    DescribeDeviceDataHistoryRequest: DescribeDeviceDataHistoryRequest,
    EventHistoryItem: EventHistoryItem,
    CreateForwardRuleRequest: CreateForwardRuleRequest,
    CreateTaskFileUrlResponse: CreateTaskFileUrlResponse,
    SetForwardAuthRequest: SetForwardAuthRequest,
    DescribeBalanceTransactionsResponse: DescribeBalanceTransactionsResponse,
    ModifyDeviceResponse: ModifyDeviceResponse,
    CreateTaskFileUrlRequest: CreateTaskFileUrlRequest,
    BatchUpdateFirmwareRequest: BatchUpdateFirmwareRequest,
    DescribeCloudStorageThumbnailRequest: DescribeCloudStorageThumbnailRequest,
    GetFirmwareURLRequest: GetFirmwareURLRequest,
    DescribeCloudStorageResponse: DescribeCloudStorageResponse,
    DescribeProductResponse: DescribeProductResponse,
    DescribeCategoryRequest: DescribeCategoryRequest,
    DeleteFirmwareRequest: DeleteFirmwareRequest,
    DescribeCloudStorageRequest: DescribeCloudStorageRequest,
    GetAllFirmwareVersionResponse: GetAllFirmwareVersionResponse,
    DescribeDeviceDataHistoryResponse: DescribeDeviceDataHistoryResponse,
    SearchKeyword: SearchKeyword,
    DescribeDevicesRequest: DescribeDevicesRequest,
    DescribeModelDefinitionRequest: DescribeModelDefinitionRequest,
    CheckForwardAuthResponse: CheckForwardAuthResponse,
    DescribeDeviceDataResponse: DescribeDeviceDataResponse,
    DeleteForwardRuleResponse: DeleteForwardRuleResponse,
    TransferCloudStorageRequest: TransferCloudStorageRequest,
    DescribeFirmwareTaskStatisticsRequest: DescribeFirmwareTaskStatisticsRequest,
    DescribeBatchsRequest: DescribeBatchsRequest,
    DeviceInfo: DeviceInfo,
    ModifyModelDefinitionResponse: ModifyModelDefinitionResponse,
    ResetCloudStorageRequest: ResetCloudStorageRequest,
    DescribeFirmwareTaskRequest: DescribeFirmwareTaskRequest,
    DescribeCloudStorageTimeRequest: DescribeCloudStorageTimeRequest,

}

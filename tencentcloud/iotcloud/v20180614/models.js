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
         * 多个设备名
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

        /**
         * 中兴CLAA设备的解绑需要Skey，普通设备不需要
         * @type {string || null}
         */
        this.Skey = null;

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
        this.Skey = 'Skey' in params ? params.Skey : null;

    }
}

/**
 * DescribeDeviceResources请求参数结构体
 * @class
 */
class DescribeDeviceResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，Offset从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的大小，数值范围 10-250
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 需要过滤的设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 资源搜索开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 资源搜索结束时间
         * @type {string || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

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
         * 被绑定设备的产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 被绑定的多个设备名
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

        /**
         * 中兴CLAA设备的绑定需要skey，普通的设备不需要
         * @type {string || null}
         */
        this.Skey = null;

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
        this.Skey = 'Skey' in params ? params.Skey : null;

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
         * 偏移量，Offset从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，当前页面中显示的最大数量，值范围 10-250。
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
 * 创建规则请求包体
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
            "api": "http://127.0.0.1:8080",
            "token":"xxx"
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
 * 任务描述细节
 * @class
 */
class Task extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量更新影子任务的描述细节，当 taskType 取值为 “UpdateShadow” 时，此字段必填。描述见下 BatchUpdateShadow
         * @type {BatchUpdateShadow || null}
         */
        this.UpdateShadowTask = null;

        /**
         * 批量下发消息任务的描述细节，当 taskType 取值为 “PublishMessage” 时，此字段必填。描述见下 BatchPublishMessage
         * @type {BatchPublishMessage || null}
         */
        this.PublishMessageTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.UpdateShadowTask) {
            let obj = new BatchUpdateShadow();
            obj.deserialize(params.UpdateShadowTask)
            this.UpdateShadowTask = obj;
        }

        if (params.PublishMessageTask) {
            let obj = new BatchPublishMessage();
            obj.deserialize(params.PublishMessageTask)
            this.PublishMessageTask = obj;
        }

    }
}

/**
 * DescribeProductTasks请求参数结构体
 * @class
 */
class DescribeProductTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品级别任务列表偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 产品级别任务列表拉取个数
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
 * DescribeTasks返回参数结构体
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户一个月内创建的任务总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 此页任务对象的数组，按创建时间排序
         * @type {Array.<TaskInfo> || null}
         */
        this.Tasks = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateDeviceShadow请求参数结构体
 * @class
 */
class UpdateDeviceShadowRequest extends  AbstractModel {
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
         * 虚拟设备的状态，JSON字符串格式，由desired结构组成
         * @type {string || null}
         */
        this.State = null;

        /**
         * 当前版本号，需要和后台的version保持一致，才能更新成功
         * @type {number || null}
         */
        this.ShadowVersion = null;

        /**
         * 下发delta消息的topic前缀，可选类型: "$shadow","$template"。不填写默认"$shadow"。
         * @type {string || null}
         */
        this.Prefix = null;

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
        this.State = 'State' in params ? params.State : null;
        this.ShadowVersion = 'ShadowVersion' in params ? params.ShadowVersion : null;
        this.Prefix = 'Prefix' in params ? params.Prefix : null;

    }
}

/**
 * 产品资源详细信息
 * @class
 */
class ProductResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 产品名
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源文件md5
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 资源文件大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 资源文件描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 资源创建时间
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
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * DescribeMultiDevTask请求参数结构体
 * @class
 */
class DescribeMultiDevTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID，由批量创建设备接口返回
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 产品 ID，创建产品时腾讯云为用户分配全局唯一的 ID
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * DescribeDeviceResource返回参数结构体
 * @class
 */
class DescribeDeviceResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备资源详情
         * @type {DeviceResourceInfo || null}
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
            let obj = new DeviceResourceInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductResources请求参数结构体
 * @class
 */
class DescribeProductResourcesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，Offset从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的大小，数值范围 10-250
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 需要查看资源列表的产品 ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 需要过滤的资源名称
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.Name = 'Name' in params ? params.Name : null;

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
         * 产品总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 产品详细信息列表
         * @type {Array.<ProductInfo> || null}
         */
        this.Products = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new ProductInfo();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceShadow返回参数结构体
 * @class
 */
class DescribeDeviceShadowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备影子数据
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
 * DescribePushResourceTaskStatistics返回参数结构体
 * @class
 */
class DescribePushResourceTaskStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 推送成功的设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessTotal = null;

        /**
         * 推送失败的设备总数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailureTotal = null;

        /**
         * 正在推送的设备总数
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
 * CreateMultiDevice返回参数结构体
 * @class
 */
class CreateMultiDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID，腾讯云生成全局唯一的任务 ID，有效期一个月，一个月之后任务失效。可以调用获取创建多设备任务状态接口获取该任务的执行状态，当状态为成功时，可以调用获取创建多设备任务结果接口获取该任务的结果
         * @type {string || null}
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
 * 产品属性
 * @class
 */
class ProductProperties extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品描述
         * @type {string || null}
         */
        this.ProductDescription = null;

        /**
         * 加密类型，1表示证书认证，2表示签名认证。如不填写，默认值是1
         * @type {string || null}
         */
        this.EncryptionType = null;

        /**
         * 产品所属区域，目前只支持广州（gz）
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 产品类型，各个类型值代表的节点-类型如下：
0 普通产品，2 NB-IoT产品，4 LoRa产品，3 LoRa网关产品，5 普通网关产品   默认值是0
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * 数据格式，取值为json或者custom，默认值是json
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 产品所属平台，默认值是0
         * @type {string || null}
         */
        this.Platform = null;

        /**
         * LoRa产品运营侧APPEUI，只有LoRa产品需要填写
         * @type {string || null}
         */
        this.Appeui = null;

        /**
         * 产品绑定的物模型ID，-1表示不绑定
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 产品绑定的物模型名称
         * @type {string || null}
         */
        this.ModelName = null;

        /**
         * 产品密钥，suite产品才会有
         * @type {string || null}
         */
        this.ProductKey = null;

        /**
         * 动态注册类型 0-关闭, 1-预定义设备名 2-动态定义设备名
         * @type {number || null}
         */
        this.RegisterType = null;

        /**
         * 动态注册产品秘钥
         * @type {string || null}
         */
        this.ProductSecret = null;

        /**
         * RegisterType为2时，设备动态创建的限制数量
         * @type {number || null}
         */
        this.RegisterLimit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductDescription = 'ProductDescription' in params ? params.ProductDescription : null;
        this.EncryptionType = 'EncryptionType' in params ? params.EncryptionType : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Platform = 'Platform' in params ? params.Platform : null;
        this.Appeui = 'Appeui' in params ? params.Appeui : null;
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelName = 'ModelName' in params ? params.ModelName : null;
        this.ProductKey = 'ProductKey' in params ? params.ProductKey : null;
        this.RegisterType = 'RegisterType' in params ? params.RegisterType : null;
        this.ProductSecret = 'ProductSecret' in params ? params.ProductSecret : null;
        this.RegisterLimit = 'RegisterLimit' in params ? params.RegisterLimit : null;

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
 * 任务列表详细信息
 * @class
 */
class TaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型，目前取值为 “UpdateShadow” 或者 “PublishMessage”
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 产品 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 状态。1表示等待处理，2表示调度处理中，3表示已完成，4表示失败，5表示已取消
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务创建时间，Unix 时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 最后任务更新时间，Unix 时间戳
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 返回的错误码
         * @type {number || null}
         */
        this.RetCode = null;

        /**
         * 返回的错误信息
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

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
         * 需要删除的产品 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 删除LoRa产品需要skey
         * @type {string || null}
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Skey = 'Skey' in params ? params.Skey : null;

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
 * DescribeTasks请求参数结构体
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移量，从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页的大小，数值范围 1-250
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
 * DescribeDeviceResource请求参数结构体
 * @class
 */
class DescribeDeviceResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 具体的设备资源名称
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
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.Name = 'Name' in params ? params.Name : null;

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
        this.FirmwareName = 'FirmwareName' in params ? params.FirmwareName : null;
        this.FirmwareDescription = 'FirmwareDescription' in params ? params.FirmwareDescription : null;

    }
}

/**
 * 创建设备时返回的设备信息
 * @class
 */
class MultiDevicesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 对称加密密钥，base64 编码，采用对称加密时返回该参数
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * 设备证书，采用非对称加密时返回该参数
         * @type {string || null}
         */
        this.DeviceCert = null;

        /**
         * 设备私钥，采用非对称加密时返回该参数，腾讯云为用户缓存起来，其生命周期与任务生命周期一致
         * @type {string || null}
         */
        this.DevicePrivateKey = null;

        /**
         * 错误码
         * @type {number || null}
         */
        this.Result = null;

        /**
         * 错误信息
         * @type {string || null}
         */
        this.ErrMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePrivateKey = 'DevicePrivateKey' in params ? params.DevicePrivateKey : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

    }
}

/**
 * ResetDeviceState请求参数结构体
 * @class
 */
class ResetDeviceStateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;

    }
}

/**
 * DescribeDeviceClientKey请求参数结构体
 * @class
 */
class DescribeDeviceClientKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 所属产品的Id
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
 * UpdateTopicPolicy请求参数结构体
 * @class
 */
class UpdateTopicPolicyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

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

        /**
         * 代理订阅信息
         * @type {BrokerSubscribe || null}
         */
        this.BrokerSubscribe = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.NewTopicName = 'NewTopicName' in params ? params.NewTopicName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

        if (params.BrokerSubscribe) {
            let obj = new BrokerSubscribe();
            obj.deserialize(params.BrokerSubscribe)
            this.BrokerSubscribe = obj;
        }

    }
}

/**
 * 批量更新设备影子任务
 * @class
 */
class BatchUpdateShadow extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备影子的期望状态，格式为 Json 对象序列化之后的字符串
         * @type {string || null}
         */
        this.Desired = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Desired = 'Desired' in params ? params.Desired : null;

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
         * 设备所属的产品 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 需要删除的设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 删除LoRa设备以及LoRa网关设备需要skey
         * @type {string || null}
         */
        this.Skey = null;

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
        this.Skey = 'Skey' in params ? params.Skey : null;

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
 * DescribeResourceTasks请求参数结构体
 * @class
 */
class DescribeResourceTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

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
        this.Name = 'Name' in params ? params.Name : null;
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
 * CreateMultiDevicesTask请求参数结构体
 * @class
 */
class CreateMultiDevicesTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 参数类型 cosfile-文件上传 random-随机创建
         * @type {string || null}
         */
        this.ParametersType = null;

        /**
         * 文件上传类型时文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件上传类型时文件大小
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * 随机创建时设备创建个数
         * @type {number || null}
         */
        this.BatchCount = null;

        /**
         * 文件上传类型时文件md5值
         * @type {string || null}
         */
        this.Hash = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ParametersType = 'ParametersType' in params ? params.ParametersType : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.BatchCount = 'BatchCount' in params ? params.BatchCount : null;
        this.Hash = 'Hash' in params ? params.Hash : null;

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
 * DescribePushResourceTaskStatistics请求参数结构体
 * @class
 */
class DescribePushResourceTaskStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 资源名称
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
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * CreateLoraDevice请求参数结构体
 * @class
 */
class CreateLoraDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id ，创建产品时腾讯云为用户分配全局唯一的Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备类型 ，目前支持A、B、C三种
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * LoRa应用UUID
         * @type {string || null}
         */
        this.AppEui = null;

        /**
         * LoRa设备UUID
         * @type {string || null}
         */
        this.DeviceEui = null;

        /**
         * LoRa应用密钥
         * @type {string || null}
         */
        this.AppKey = null;

        /**
         * LoRa设备验证密钥
         * @type {string || null}
         */
        this.AuthKey = null;

        /**
         * 设备备注
         * @type {string || null}
         */
        this.Memo = null;

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
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.AppEui = 'AppEui' in params ? params.AppEui : null;
        this.DeviceEui = 'DeviceEui' in params ? params.DeviceEui : null;
        this.AppKey = 'AppKey' in params ? params.AppKey : null;
        this.AuthKey = 'AuthKey' in params ? params.AuthKey : null;
        this.Memo = 'Memo' in params ? params.Memo : null;

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
         * 产品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品 ID，腾讯云生成全局唯一 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品属性
         * @type {ProductProperties || null}
         */
        this.ProductProperties = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMultiDevice请求参数结构体
 * @class
 */
class CreateMultiDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品 ID。创建产品时腾讯云为用户分配全局唯一的 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 批量创建的设备名数组，单次最多创建 100 个设备。命名规则：[a-zA-Z0-9:_-]{1,48}
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;

    }
}

/**
 * DeleteLoraDevice返回参数结构体
 * @class
 */
class DeleteLoraDeviceResponse extends  AbstractModel {
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
 * CreateTask请求参数结构体
 * @class
 */
class CreateTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型，取值为 “UpdateShadow” 或者 “PublishMessage”
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 执行任务的产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 执行任务的设备名的正则表达式
         * @type {string || null}
         */
        this.DeviceNameFilter = null;

        /**
         * 任务开始执行的时间。 取值为 Unix 时间戳，单位秒，且需大于等于当前时间时间戳，0为系统当前时间时间戳，即立即执行，最大为当前时间86400秒后，超过则取值为当前时间86400秒后
         * @type {number || null}
         */
        this.ScheduleTimeInSeconds = null;

        /**
         * 任务描述细节，描述见下 Task
         * @type {Task || null}
         */
        this.Tasks = null;

        /**
         * 最长执行时间，单位秒，被调度后超过此时间仍未有结果则视为任务失败。取值为0-86400，默认为86400
         * @type {number || null}
         */
        this.MaxExecutionTimeInSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNameFilter = 'DeviceNameFilter' in params ? params.DeviceNameFilter : null;
        this.ScheduleTimeInSeconds = 'ScheduleTimeInSeconds' in params ? params.ScheduleTimeInSeconds : null;

        if (params.Tasks) {
            let obj = new Task();
            obj.deserialize(params.Tasks)
            this.Tasks = obj;
        }
        this.MaxExecutionTimeInSeconds = 'MaxExecutionTimeInSeconds' in params ? params.MaxExecutionTimeInSeconds : null;

    }
}

/**
 * DescribeAllDevices请求参数结构体
 * @class
 */
class DescribeAllDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询设备数量。最大支持250个
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
 * DescribeProductResource返回参数结构体
 * @class
 */
class DescribeProductResourceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ProductResourceInfo || null}
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
            let obj = new ProductResourceInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
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
 * PublishToDevice返回参数结构体
 * @class
 */
class PublishToDeviceResponse extends  AbstractModel {
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
 * CreateDevice返回参数结构体
 * @class
 */
class CreateDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 对称加密密钥，base64编码。采用对称加密时返回该参数
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * 设备证书，用于 TLS 建立链接时校验客户端身份。采用非对称加密时返回该参数
         * @type {string || null}
         */
        this.DeviceCert = null;

        /**
         * 设备私钥，用于 TLS 建立链接时校验客户端身份，腾讯云后台不保存，请妥善保管。采用非对称加密时返回该参数
         * @type {string || null}
         */
        this.DevicePrivateKey = null;

        /**
         * LoRa设备的DevEui，当设备是LoRa设备时，会返回该字段
         * @type {string || null}
         */
        this.LoraDevEui = null;

        /**
         * LoRa设备的MoteType，当设备是LoRa设备时，会返回该字段
         * @type {number || null}
         */
        this.LoraMoteType = null;

        /**
         * LoRa设备的AppKey，当设备是LoRa设备时，会返回该字段
         * @type {string || null}
         */
        this.LoraAppKey = null;

        /**
         * LoRa设备的NwkKey，当设备是LoRa设备时，会返回该字段
         * @type {string || null}
         */
        this.LoraNwkKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePrivateKey = 'DevicePrivateKey' in params ? params.DevicePrivateKey : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.LoraAppKey = 'LoraAppKey' in params ? params.LoraAppKey : null;
        this.LoraNwkKey = 'LoraNwkKey' in params ? params.LoraNwkKey : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteLoraDevice请求参数结构体
 * @class
 */
class DeleteLoraDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备所属产品ID
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
 * CreateDevice请求参数结构体
 * @class
 */
class CreateDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品 ID 。创建产品时腾讯云为用户分配全局唯一的 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称。命名规则：[a-zA-Z0-9:_-]{1,48}。
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备属性
         * @type {Attribute || null}
         */
        this.Attribute = null;

        /**
         * 是否使用自定义PSK，默认不使用
         * @type {string || null}
         */
        this.DefinedPsk = null;

        /**
         * 运营商类型，当产品是NB-IoT产品时，此字段必填。1表示中国电信，2表示中国移动，3表示中国联通
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * IMEI，当产品是NB-IoT产品时，此字段必填
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * LoRa设备的DevEui，当创建LoRa时，此字段必填
         * @type {string || null}
         */
        this.LoraDevEui = null;

        /**
         * LoRa设备的MoteType
         * @type {number || null}
         */
        this.LoraMoteType = null;

        /**
         * 创建LoRa设备需要skey
         * @type {string || null}
         */
        this.Skey = null;

        /**
         * LoRa设备的AppKey
         * @type {string || null}
         */
        this.LoraAppKey = null;

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

        if (params.Attribute) {
            let obj = new Attribute();
            obj.deserialize(params.Attribute)
            this.Attribute = obj;
        }
        this.DefinedPsk = 'DefinedPsk' in params ? params.DefinedPsk : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.Skey = 'Skey' in params ? params.Skey : null;
        this.LoraAppKey = 'LoraAppKey' in params ? params.LoraAppKey : null;

    }
}

/**
 * DescribeProductTask请求参数结构体
 * @class
 */
class DescribeProductTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 任务ID
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 产品名称，名称不能和已经存在的产品名称重复。命名规则：[a-zA-Z0-9:_-]{1,32}
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品属性
         * @type {ProductProperties || null}
         */
        this.ProductProperties = null;

        /**
         * 创建CLAA产品时，需要Skey
         * @type {string || null}
         */
        this.Skey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }
        this.Skey = 'Skey' in params ? params.Skey : null;

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
 * 代理订阅信息
 * @class
 */
class BrokerSubscribe extends  AbstractModel {
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
 * UpdateTopicPolicy返回参数结构体
 * @class
 */
class UpdateTopicPolicyResponse extends  AbstractModel {
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
 * DescribeProductTask返回参数结构体
 * @class
 */
class DescribeProductTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品任务详细信息
         * @type {ProductTaskInfo || null}
         */
        this.TaskInfo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TaskInfo) {
            let obj = new ProductTaskInfo();
            obj.deserialize(params.TaskInfo)
            this.TaskInfo = obj;
        }
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
         * 设备是否在线，0不在线，1在线
         * @type {number || null}
         */
        this.Online = null;

        /**
         * 设备登录时间
         * @type {number || null}
         */
        this.LoginTime = null;

        /**
         * 设备固件版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 设备最后更新时间
         * @type {number || null}
         */
        this.LastUpdateTime = null;

        /**
         * 设备证书
         * @type {string || null}
         */
        this.DeviceCert = null;

        /**
         * 设备密钥
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * 设备属性
         * @type {Array.<DeviceTag> || null}
         */
        this.Tags = null;

        /**
         * 设备类型
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * 国际移动设备识别码 IMEI
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * 运营商类型
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * IP地址
         * @type {number || null}
         */
        this.ConnIP = null;

        /**
         * NB IoT运营商处的DeviceID
         * @type {string || null}
         */
        this.NbiotDeviceID = null;

        /**
         * Lora设备的dev eui
         * @type {string || null}
         */
        this.LoraDevEui = null;

        /**
         * Lora设备的mote type
         * @type {number || null}
         */
        this.LoraMoteType = null;

        /**
         * 设备的sdk日志等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogLevel = null;

        /**
         * 首次上线时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstOnlineTime = null;

        /**
         * 最近下线时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastOfflineTime = null;

        /**
         * 设备创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 设备证书获取状态，0 未获取过设备密钥, 1 已获取过设备密钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CertState = null;

        /**
         * 设备启用状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnableState = null;

        /**
         * 设备标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceLabel> || null}
         */
        this.Labels = null;

        /**
         * MQTT客户端IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientIP = null;

        /**
         * 设备固件更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirmwareUpdateTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.Version = 'Version' in params ? params.Version : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.ConnIP = 'ConnIP' in params ? params.ConnIP : null;
        this.NbiotDeviceID = 'NbiotDeviceID' in params ? params.NbiotDeviceID : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.FirstOnlineTime = 'FirstOnlineTime' in params ? params.FirstOnlineTime : null;
        this.LastOfflineTime = 'LastOfflineTime' in params ? params.LastOfflineTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.CertState = 'CertState' in params ? params.CertState : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new DeviceLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.FirmwareUpdateTime = 'FirmwareUpdateTime' in params ? params.FirmwareUpdateTime : null;
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
         * 消息发往的主题。命名规则：${ProductId}/${DeviceName}/[a-zA-Z0-9:_-]{1,128}
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 消息内容
         * @type {string || null}
         */
        this.Payload = null;

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
         * 服务质量等级，取值为0或1
         * @type {number || null}
         */
        this.Qos = null;

        /**
         * Payload内容的编码格式，取值为base64或空。base64表示云端将收到的请求数据进行base64解码后下发到设备，空则直接将原始内容下发到设备
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
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Qos = 'Qos' in params ? params.Qos : null;
        this.PayloadEncoding = 'PayloadEncoding' in params ? params.PayloadEncoding : null;

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
注意：此字段可能返回 null，表示取不到有效值。
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
 * 设备标签
 * @class
 */
class DeviceLabel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标签标识
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 标签值
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
 * UpdateDeviceAvailableState返回参数结构体
 * @class
 */
class UpdateDeviceAvailableStateResponse extends  AbstractModel {
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
 * CancelTask请求参数结构体
 * @class
 */
class CancelTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {string || null}
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
 * UpdateDeviceAvailableState请求参数结构体
 * @class
 */
class UpdateDeviceAvailableStateRequest extends  AbstractModel {
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
 * GetUserResourceInfo返回参数结构体
 * @class
 */
class GetUserResourceInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 已使用的资源字节数
         * @type {number || null}
         */
        this.UsedSize = null;

        /**
         * 可以使用资源的总大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UsedSize = 'UsedSize' in params ? params.UsedSize : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 设备资源信息。
 * @class
 */
class DeviceProperty extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 设备名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备资源ID。
注意：此字段可能返回 null，表示取不到有效值。
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ResourceId = 'ResourceId' in params ? params.ResourceId : null;

    }
}

/**
 * PublishToDevice请求参数结构体
 * @class
 */
class PublishToDeviceRequest extends  AbstractModel {
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

        /**
         * LoRa 端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 消息内容
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
        this.Port = 'Port' in params ? params.Port : null;
        this.Payload = 'Payload' in params ? params.Payload : null;

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
 * 产品详细信息
 * @class
 */
class ProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 产品元数据
         * @type {ProductMetadata || null}
         */
        this.ProductMetadata = null;

        /**
         * 产品属性
         * @type {ProductProperties || null}
         */
        this.ProductProperties = null;

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

        if (params.ProductMetadata) {
            let obj = new ProductMetadata();
            obj.deserialize(params.ProductMetadata)
            this.ProductMetadata = obj;
        }

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }

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
 * PublishBroadcastMessage返回参数结构体
 * @class
 */
class PublishBroadcastMessageResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 广播消息任务ID
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
        this.ProductID = null;

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
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * CreateMultiDevicesTask返回参数结构体
 * @class
 */
class CreateMultiDevicesTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductResources返回参数结构体
 * @class
 */
class DescribeProductResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资源详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ProductResourceInfo> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new ProductResourceInfo();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 产品自身ID
         * @type {string || null}
         */
        this.ProductID = null;

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

        /**
         * 代理订阅信息，网关产品为绑定的子产品创建topic时需要填写，内容为子产品的ID和设备信息。
         * @type {BrokerSubscribe || null}
         */
        this.BrokerSubscribe = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;

        if (params.BrokerSubscribe) {
            let obj = new BrokerSubscribe();
            obj.deserialize(params.BrokerSubscribe)
            this.BrokerSubscribe = obj;
        }

    }
}

/**
 * DescribeProductResource请求参数结构体
 * @class
 */
class DescribeProductResourceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 需要查看资源列表的产品 ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 需要过滤的资源名称
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
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeLoraDevice返回参数结构体
 * @class
 */
class DescribeLoraDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * LoRa应用UUID
         * @type {string || null}
         */
        this.AppEui = null;

        /**
         * LoRa设备UUID
         * @type {string || null}
         */
        this.DeviceEui = null;

        /**
         * LoRa应用密钥
         * @type {string || null}
         */
        this.AppKey = null;

        /**
         * 设备类型,目前支持A、B、C三种
         * @type {string || null}
         */
        this.ClassType = null;

        /**
         * 设备所属产品id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.AppEui = 'AppEui' in params ? params.AppEui : null;
        this.DeviceEui = 'DeviceEui' in params ? params.DeviceEui : null;
        this.AppKey = 'AppKey' in params ? params.AppKey : null;
        this.ClassType = 'ClassType' in params ? params.ClassType : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品级任务详细信息
 * @class
 */
class ProductTaskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.Id = null;

        /**
         * 任务类型 0-批量创建设备类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 任务状态 0-创建中 1-待执行 2-执行中 3-执行失败 4-子任务部分失败 5-执行成功
         * @type {number || null}
         */
        this.State = null;

        /**
         * 任务参数类型 cosfile-文件输入 random-随机生成
         * @type {string || null}
         */
        this.ParametersType = null;

        /**
         * 任务参数
         * @type {string || null}
         */
        this.Parameters = null;

        /**
         * 任务执行结果类型 cosfile-文件输出 errmsg-错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultType = null;

        /**
         * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 子任务总个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BatchCount = null;

        /**
         * 子任务已执行个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BatchOffset = null;

        /**
         * 任务创建时间
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 任务更新时间
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 任务完成时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CompleteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.State = 'State' in params ? params.State : null;
        this.ParametersType = 'ParametersType' in params ? params.ParametersType : null;
        this.Parameters = 'Parameters' in params ? params.Parameters : null;
        this.ResultType = 'ResultType' in params ? params.ResultType : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.BatchCount = 'BatchCount' in params ? params.BatchCount : null;
        this.BatchOffset = 'BatchOffset' in params ? params.BatchOffset : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CompleteTime = 'CompleteTime' in params ? params.CompleteTime : null;

    }
}

/**
 * ReplaceTopicRule请求参数结构体
 * @class
 */
class ReplaceTopicRuleRequest extends  AbstractModel {
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

        /**
         * 修改类型，0：其他，1：创建行为，2：更新行为，3：删除行为
         * @type {number || null}
         */
        this.ModifyType = null;

        /**
         * action增删改变更填对应topicRulePayload里面第几个action
         * @type {number || null}
         */
        this.ActionIndex = null;

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
        this.ModifyType = 'ModifyType' in params ? params.ModifyType : null;
        this.ActionIndex = 'ActionIndex' in params ? params.ActionIndex : null;

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
         * @type {number || null}
         */
        this.MessageId = null;

        /**
         * 设备回复的消息内容，采用base64编码
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
 * CancelTask返回参数结构体
 * @class
 */
class CancelTaskResponse extends  AbstractModel {
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
 * 设备属性
 * @class
 */
class Attribute extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性列表
         * @type {Array.<DeviceTag> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }

    }
}

/**
 * DescribeDeviceResources返回参数结构体
 * @class
 */
class DescribeDeviceResourcesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 资源列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceResourceInfo> || null}
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new DeviceResourceInfo();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateLoraDevice返回参数结构体
 * @class
 */
class CreateLoraDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * LoRa应用UUID
         * @type {string || null}
         */
        this.AppEui = null;

        /**
         * LoRa设备UUID
         * @type {string || null}
         */
        this.DeviceEui = null;

        /**
         * 设备类型,目前支持A、B、C三种
         * @type {string || null}
         */
        this.ClassType = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppEui = 'AppEui' in params ? params.AppEui : null;
        this.DeviceEui = 'DeviceEui' in params ? params.DeviceEui : null;
        this.ClassType = 'ClassType' in params ? params.ClassType : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ReplaceTopicRule返回参数结构体
 * @class
 */
class ReplaceTopicRuleResponse extends  AbstractModel {
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
 * PublishAsDevice请求参数结构体
 * @class
 */
class PublishAsDeviceRequest extends  AbstractModel {
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
         * LoRa 设备端口
         * @type {number || null}
         */
        this.Port = null;

        /**
         * 消息内容
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
        this.Port = 'Port' in params ? params.Port : null;
        this.Payload = 'Payload' in params ? params.Payload : null;

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
 * DescribeMultiDevices返回参数结构体
 * @class
 */
class DescribeMultiDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID，由批量创建设备接口返回
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 设备详细信息列表
         * @type {Array.<MultiDevicesInfo> || null}
         */
        this.DevicesInfo = null;

        /**
         * 该任务创建设备的总数
         * @type {number || null}
         */
        this.TotalDevNum = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.DevicesInfo) {
            this.DevicesInfo = new Array();
            for (let z in params.DevicesInfo) {
                let obj = new MultiDevicesInfo();
                obj.deserialize(params.DevicesInfo[z]);
                this.DevicesInfo.push(obj);
            }
        }
        this.TotalDevNum = 'TotalDevNum' in params ? params.TotalDevNum : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDeviceShadow请求参数结构体
 * @class
 */
class DescribeDeviceShadowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称。命名规则：[a-zA-Z0-9:_-]{1,48}
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
         * 设备是否在线，0不在线，1在线
         * @type {number || null}
         */
        this.Online = null;

        /**
         * 设备登录时间
         * @type {number || null}
         */
        this.LoginTime = null;

        /**
         * 设备版本
         * @type {string || null}
         */
        this.Version = null;

        /**
         * 设备证书，证书加密的设备返回
         * @type {string || null}
         */
        this.DeviceCert = null;

        /**
         * 设备密钥，密钥加密的设备返回
         * @type {string || null}
         */
        this.DevicePsk = null;

        /**
         * 设备属性
         * @type {Array.<DeviceTag> || null}
         */
        this.Tags = null;

        /**
         * 设备类型
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * 国际移动设备识别码 IMEI
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * 运营商类型
         * @type {number || null}
         */
        this.Isp = null;

        /**
         * NB IOT运营商处的DeviceID
         * @type {string || null}
         */
        this.NbiotDeviceID = null;

        /**
         * IP地址
         * @type {number || null}
         */
        this.ConnIP = null;

        /**
         * 设备最后更新时间
         * @type {number || null}
         */
        this.LastUpdateTime = null;

        /**
         * LoRa设备的dev eui
         * @type {string || null}
         */
        this.LoraDevEui = null;

        /**
         * LoRa设备的Mote type
         * @type {number || null}
         */
        this.LoraMoteType = null;

        /**
         * 首次上线时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirstOnlineTime = null;

        /**
         * 最近下线时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LastOfflineTime = null;

        /**
         * 设备创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 设备日志级别
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LogLevel = null;

        /**
         * 设备证书获取状态, 1 已获取过设备密钥，0 未获取过设备密钥
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.CertState = null;

        /**
         * 设备可用状态，0禁用，1启用
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EnableState = null;

        /**
         * 设备标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DeviceLabel> || null}
         */
        this.Labels = null;

        /**
         * MQTT客户端IP地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClientIP = null;

        /**
         * ota最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FirmwareUpdateTime = null;

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
        this.Version = 'Version' in params ? params.Version : null;
        this.DeviceCert = 'DeviceCert' in params ? params.DeviceCert : null;
        this.DevicePsk = 'DevicePsk' in params ? params.DevicePsk : null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Isp = 'Isp' in params ? params.Isp : null;
        this.NbiotDeviceID = 'NbiotDeviceID' in params ? params.NbiotDeviceID : null;
        this.ConnIP = 'ConnIP' in params ? params.ConnIP : null;
        this.LastUpdateTime = 'LastUpdateTime' in params ? params.LastUpdateTime : null;
        this.LoraDevEui = 'LoraDevEui' in params ? params.LoraDevEui : null;
        this.LoraMoteType = 'LoraMoteType' in params ? params.LoraMoteType : null;
        this.FirstOnlineTime = 'FirstOnlineTime' in params ? params.FirstOnlineTime : null;
        this.LastOfflineTime = 'LastOfflineTime' in params ? params.LastOfflineTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.LogLevel = 'LogLevel' in params ? params.LogLevel : null;
        this.CertState = 'CertState' in params ? params.CertState : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

        if (params.Labels) {
            this.Labels = new Array();
            for (let z in params.Labels) {
                let obj = new DeviceLabel();
                obj.deserialize(params.Labels[z]);
                this.Labels.push(obj);
            }
        }
        this.ClientIP = 'ClientIP' in params ? params.ClientIP : null;
        this.FirmwareUpdateTime = 'FirmwareUpdateTime' in params ? params.FirmwareUpdateTime : null;

    }
}

/**
 * DescribeMultiDevices请求参数结构体
 * @class
 */
class DescribeMultiDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品 ID，创建产品时腾讯云为用户分配全局唯一的 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 任务 ID，由批量创建设备接口返回
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 分页偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，每页返回的设备个数
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

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
 * UpdateDeviceShadow返回参数结构体
 * @class
 */
class UpdateDeviceShadowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备影子数据，JSON字符串格式
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
 * DescribeTask返回参数结构体
 * @class
 */
class DescribeTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务类型，目前取值为 “UpdateShadow” 或者 “PublishMessage”
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 产品 ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 状态。1表示等待处理，2表示调度处理中，3表示已完成，4表示失败，5表示已取消
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 任务创建时间，Unix 时间戳
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 最后任务更新时间，Unix 时间戳
         * @type {number || null}
         */
        this.UpdateTime = null;

        /**
         * 任务完成时间，Unix 时间戳
         * @type {number || null}
         */
        this.DoneTime = null;

        /**
         * 被调度时间，Unix 时间戳
         * @type {number || null}
         */
        this.ScheduleTime = null;

        /**
         * 返回的错误码
         * @type {number || null}
         */
        this.RetCode = null;

        /**
         * 返回的错误信息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 完成任务的设备比例
         * @type {number || null}
         */
        this.Percent = null;

        /**
         * 匹配到的需执行任务的设备数目
         * @type {number || null}
         */
        this.AllDeviceCnt = null;

        /**
         * 已完成任务的设备数目
         * @type {number || null}
         */
        this.DoneDeviceCnt = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DoneTime = 'DoneTime' in params ? params.DoneTime : null;
        this.ScheduleTime = 'ScheduleTime' in params ? params.ScheduleTime : null;
        this.RetCode = 'RetCode' in params ? params.RetCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.AllDeviceCnt = 'AllDeviceCnt' in params ? params.AllDeviceCnt : null;
        this.DoneDeviceCnt = 'DoneDeviceCnt' in params ? params.DoneDeviceCnt : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTask返回参数结构体
 * @class
 */
class CreateTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 创建的任务ID
         * @type {string || null}
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
 * 批量发消息请求
 * @class
 */
class BatchPublishMessage extends  AbstractModel {
    constructor(){
        super();

        /**
         * 消息发往的主题。为 Topic 权限中去除 ProductID 和 DeviceName 的部分，如 “event”
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 消息内容
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
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Payload = 'Payload' in params ? params.Payload : null;

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

        /**
         * 固件升级任务，默认超时时间。 最小取值60秒，最大为3600秒
         * @type {number || null}
         */
        this.TimeoutInterval = null;

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
        this.TimeoutInterval = 'TimeoutInterval' in params ? params.TimeoutInterval : null;

    }
}

/**
 * DescribeMultiDevTask返回参数结构体
 * @class
 */
class DescribeMultiDevTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务 ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * 任务是否完成。0 代表任务未开始，1 代表任务正在执行，2 代表任务已完成
         * @type {number || null}
         */
        this.TaskStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetUserResourceInfo请求参数结构体
 * @class
 */
class GetUserResourceInfoRequest extends  AbstractModel {
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
 * 设备属性
 * @class
 */
class DeviceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * 属性名称
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 属性值的类型，1 int，2 string
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 属性的值
         * @type {string || null}
         */
        this.Value = null;

        /**
         * 属性描述名称
注意：此字段可能返回 null，表示取不到有效值。
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
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * DescribeAllDevices返回参数结构体
 * @class
 */
class DescribeAllDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备总数。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询的设备列表信息。
         * @type {Array.<DeviceProperty> || null}
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
                let obj = new DeviceProperty();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品元数据
 * @class
 */
class ProductMetadata extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品创建时间
         * @type {number || null}
         */
        this.CreationDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreationDate = 'CreationDate' in params ? params.CreationDate : null;

    }
}

/**
 * DescribeLoraDevice请求参数结构体
 * @class
 */
class DescribeLoraDeviceRequest extends  AbstractModel {
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
 * DescribeTask请求参数结构体
 * @class
 */
class DescribeTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {string || null}
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
 * 重置设备状态结果
 * @class
 */
class ResetDeviceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 是否成功
         * @type {boolean || null}
         */
        this.Success = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Reason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Success = 'Success' in params ? params.Success : null;
        this.Reason = 'Reason' in params ? params.Reason : null;

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
         * 分页的大小，数值范围 10-250
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
         * 设备是否启用，0禁用状态1启用状态，默认不区分
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FirmwareVersion = 'FirmwareVersion' in params ? params.FirmwareVersion : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.EnableState = 'EnableState' in params ? params.EnableState : null;

    }
}

/**
 * DescribeDeviceClientKey返回参数结构体
 * @class
 */
class DescribeDeviceClientKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备的私钥
         * @type {string || null}
         */
        this.ClientKey = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientKey = 'ClientKey' in params ? params.ClientKey : null;
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
 * ResetDeviceState返回参数结构体
 * @class
 */
class ResetDeviceStateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量重置设备成功数
         * @type {number || null}
         */
        this.SuccessCount = null;

        /**
         * 批量重置设备结果
         * @type {Array.<ResetDeviceResult> || null}
         */
        this.ResetDeviceResults = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SuccessCount = 'SuccessCount' in params ? params.SuccessCount : null;

        if (params.ResetDeviceResults) {
            this.ResetDeviceResults = new Array();
            for (let z in params.ResetDeviceResults) {
                let obj = new ResetDeviceResult();
                obj.deserialize(params.ResetDeviceResults[z]);
                this.ResetDeviceResults.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * DescribeResourceTasks返回参数结构体
 * @class
 */
class DescribeResourceTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源任务列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FirmwareTaskInfo> || null}
         */
        this.TaskInfos = null;

        /**
         * 资源任务总数
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
 * DescribeProductTasks返回参数结构体
 * @class
 */
class DescribeProductTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 符合条件的任务总个数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 任务详细信息列表
         * @type {Array.<ProductTaskInfo> || null}
         */
        this.TaskInfos = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.TaskInfos) {
            this.TaskInfos = new Array();
            for (let z in params.TaskInfos) {
                let obj = new ProductTaskInfo();
                obj.deserialize(params.TaskInfos[z]);
                this.TaskInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PublishAsDevice返回参数结构体
 * @class
 */
class PublishAsDeviceResponse extends  AbstractModel {
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
 * 设备资源详细信息
 * @class
 */
class DeviceResourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductID = null;

        /**
         * 产品名
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 资源名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 资源文件md5
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * 资源文件大小
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 资源更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备资源上传状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 设备资源上传百分比
         * @type {number || null}
         */
        this.Percent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductID = 'ProductID' in params ? params.ProductID : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Percent = 'Percent' in params ? params.Percent : null;

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

module.exports = {
    UnbindDevicesRequest: UnbindDevicesRequest,
    DescribeDeviceResourcesRequest: DescribeDeviceResourcesRequest,
    BindDevicesRequest: BindDevicesRequest,
    DescribeProductsRequest: DescribeProductsRequest,
    TopicRulePayload: TopicRulePayload,
    DescribeFirmwareRequest: DescribeFirmwareRequest,
    DescribeDevicesResponse: DescribeDevicesResponse,
    DeleteTopicRuleResponse: DeleteTopicRuleResponse,
    Task: Task,
    DescribeProductTasksRequest: DescribeProductTasksRequest,
    DescribeTasksResponse: DescribeTasksResponse,
    UpdateDeviceShadowRequest: UpdateDeviceShadowRequest,
    ProductResourceInfo: ProductResourceInfo,
    DescribeMultiDevTaskRequest: DescribeMultiDevTaskRequest,
    DescribeDeviceResourceResponse: DescribeDeviceResourceResponse,
    DescribeProductResourcesRequest: DescribeProductResourcesRequest,
    DescribeProductsResponse: DescribeProductsResponse,
    DescribeDeviceShadowResponse: DescribeDeviceShadowResponse,
    EnableTopicRuleResponse: EnableTopicRuleResponse,
    DescribePushResourceTaskStatisticsResponse: DescribePushResourceTaskStatisticsResponse,
    CreateMultiDeviceResponse: CreateMultiDeviceResponse,
    PublishRRPCMessageRequest: PublishRRPCMessageRequest,
    ProductProperties: ProductProperties,
    DeviceUpdateStatus: DeviceUpdateStatus,
    BatchUpdateFirmwareResponse: BatchUpdateFirmwareResponse,
    TaskInfo: TaskInfo,
    DeleteProductRequest: DeleteProductRequest,
    StatusStatistic: StatusStatistic,
    DescribeTasksRequest: DescribeTasksRequest,
    DescribeDeviceResourceRequest: DescribeDeviceResourceRequest,
    EditFirmwareRequest: EditFirmwareRequest,
    MultiDevicesInfo: MultiDevicesInfo,
    ResetDeviceStateRequest: ResetDeviceStateRequest,
    DescribeDeviceClientKeyRequest: DescribeDeviceClientKeyRequest,
    UpdateTopicPolicyRequest: UpdateTopicPolicyRequest,
    BatchUpdateShadow: BatchUpdateShadow,
    DeleteDeviceRequest: DeleteDeviceRequest,
    DescribeFirmwareTaskDevicesRequest: DescribeFirmwareTaskDevicesRequest,
    DescribeFirmwareResponse: DescribeFirmwareResponse,
    DescribeResourceTasksRequest: DescribeResourceTasksRequest,
    CreateMultiDevicesTaskRequest: CreateMultiDevicesTaskRequest,
    DescribeFirmwareTaskStatisticsResponse: DescribeFirmwareTaskStatisticsResponse,
    DescribePushResourceTaskStatisticsRequest: DescribePushResourceTaskStatisticsRequest,
    CreateLoraDeviceRequest: CreateLoraDeviceRequest,
    CreateProductResponse: CreateProductResponse,
    CreateMultiDeviceRequest: CreateMultiDeviceRequest,
    DeleteLoraDeviceResponse: DeleteLoraDeviceResponse,
    CreateTaskRequest: CreateTaskRequest,
    DescribeAllDevicesRequest: DescribeAllDevicesRequest,
    DescribeProductResourceResponse: DescribeProductResourceResponse,
    CreateTopicPolicyResponse: CreateTopicPolicyResponse,
    PublishToDeviceResponse: PublishToDeviceResponse,
    RetryDeviceFirmwareTaskResponse: RetryDeviceFirmwareTaskResponse,
    CreateDeviceResponse: CreateDeviceResponse,
    DeleteLoraDeviceRequest: DeleteLoraDeviceRequest,
    CreateDeviceRequest: CreateDeviceRequest,
    DescribeProductTaskRequest: DescribeProductTaskRequest,
    DescribeFirmwareTaskResponse: DescribeFirmwareTaskResponse,
    CreateProductRequest: CreateProductRequest,
    DescribeFirmwareTasksRequest: DescribeFirmwareTasksRequest,
    DisableTopicRuleResponse: DisableTopicRuleResponse,
    BrokerSubscribe: BrokerSubscribe,
    GetCOSURLRequest: GetCOSURLRequest,
    UpdateTopicPolicyResponse: UpdateTopicPolicyResponse,
    DescribeProductTaskResponse: DescribeProductTaskResponse,
    DescribeDeviceResponse: DescribeDeviceResponse,
    PublishBroadcastMessageRequest: PublishBroadcastMessageRequest,
    PublishMessageRequest: PublishMessageRequest,
    RetryDeviceFirmwareTaskRequest: RetryDeviceFirmwareTaskRequest,
    DescribeFirmwareTaskDevicesResponse: DescribeFirmwareTaskDevicesResponse,
    DescribeFirmwareTasksResponse: DescribeFirmwareTasksResponse,
    DeviceLabel: DeviceLabel,
    GetCOSURLResponse: GetCOSURLResponse,
    UpdateDeviceAvailableStateResponse: UpdateDeviceAvailableStateResponse,
    EditFirmwareResponse: EditFirmwareResponse,
    CancelTaskRequest: CancelTaskRequest,
    DescribeFirmwareTaskDistributionRequest: DescribeFirmwareTaskDistributionRequest,
    UpdateDeviceAvailableStateRequest: UpdateDeviceAvailableStateRequest,
    GetUserResourceInfoResponse: GetUserResourceInfoResponse,
    DeleteProductResponse: DeleteProductResponse,
    DeviceProperty: DeviceProperty,
    PublishToDeviceRequest: PublishToDeviceRequest,
    UploadFirmwareResponse: UploadFirmwareResponse,
    ProductInfo: ProductInfo,
    DescribeFirmwareTaskDistributionResponse: DescribeFirmwareTaskDistributionResponse,
    PublishBroadcastMessageResponse: PublishBroadcastMessageResponse,
    DescribeDeviceRequest: DescribeDeviceRequest,
    CreateMultiDevicesTaskResponse: CreateMultiDevicesTaskResponse,
    DescribeProductResourcesResponse: DescribeProductResourcesResponse,
    CreateTopicPolicyRequest: CreateTopicPolicyRequest,
    DescribeProductResourceRequest: DescribeProductResourceRequest,
    DescribeLoraDeviceResponse: DescribeLoraDeviceResponse,
    ProductTaskInfo: ProductTaskInfo,
    ReplaceTopicRuleRequest: ReplaceTopicRuleRequest,
    PublishRRPCMessageResponse: PublishRRPCMessageResponse,
    CancelTaskResponse: CancelTaskResponse,
    Attribute: Attribute,
    DescribeDeviceResourcesResponse: DescribeDeviceResourcesResponse,
    CreateLoraDeviceResponse: CreateLoraDeviceResponse,
    DeleteTopicRuleRequest: DeleteTopicRuleRequest,
    ReplaceTopicRuleResponse: ReplaceTopicRuleResponse,
    PublishAsDeviceRequest: PublishAsDeviceRequest,
    CancelDeviceFirmwareTaskRequest: CancelDeviceFirmwareTaskRequest,
    CancelDeviceFirmwareTaskResponse: CancelDeviceFirmwareTaskResponse,
    DescribeMultiDevicesResponse: DescribeMultiDevicesResponse,
    DescribeDeviceShadowRequest: DescribeDeviceShadowRequest,
    UnbindDevicesResponse: UnbindDevicesResponse,
    DeviceInfo: DeviceInfo,
    DescribeMultiDevicesRequest: DescribeMultiDevicesRequest,
    CreateTaskFileUrlRequest: CreateTaskFileUrlRequest,
    UpdateDeviceShadowResponse: UpdateDeviceShadowResponse,
    DescribeTaskResponse: DescribeTaskResponse,
    CreateTaskResponse: CreateTaskResponse,
    BatchPublishMessage: BatchPublishMessage,
    BatchUpdateFirmwareRequest: BatchUpdateFirmwareRequest,
    DescribeMultiDevTaskResponse: DescribeMultiDevTaskResponse,
    GetUserResourceInfoRequest: GetUserResourceInfoRequest,
    DeviceTag: DeviceTag,
    DescribeAllDevicesResponse: DescribeAllDevicesResponse,
    ProductMetadata: ProductMetadata,
    DescribeLoraDeviceRequest: DescribeLoraDeviceRequest,
    DescribeTaskRequest: DescribeTaskRequest,
    PublishMessageResponse: PublishMessageResponse,
    BindDevicesResponse: BindDevicesResponse,
    ResetDeviceResult: ResetDeviceResult,
    SearchKeyword: SearchKeyword,
    DescribeDevicesRequest: DescribeDevicesRequest,
    DescribeDeviceClientKeyResponse: DescribeDeviceClientKeyResponse,
    UploadFirmwareRequest: UploadFirmwareRequest,
    DisableTopicRuleRequest: DisableTopicRuleRequest,
    ResetDeviceStateResponse: ResetDeviceStateResponse,
    FirmwareTaskInfo: FirmwareTaskInfo,
    CreateTopicRuleResponse: CreateTopicRuleResponse,
    CreateTopicRuleRequest: CreateTopicRuleRequest,
    DescribeResourceTasksResponse: DescribeResourceTasksResponse,
    DescribeFirmwareTaskStatisticsRequest: DescribeFirmwareTaskStatisticsRequest,
    DeleteDeviceResponse: DeleteDeviceResponse,
    CreateTaskFileUrlResponse: CreateTaskFileUrlResponse,
    DescribeProductTasksResponse: DescribeProductTasksResponse,
    PublishAsDeviceResponse: PublishAsDeviceResponse,
    EnableTopicRuleRequest: EnableTopicRuleRequest,
    DeviceResourceInfo: DeviceResourceInfo,
    DescribeFirmwareTaskRequest: DescribeFirmwareTaskRequest,

}

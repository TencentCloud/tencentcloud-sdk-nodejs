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
 * AppUpdateDevice请求参数结构体
 * @class
 */
class AppUpdateDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

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
         * 设备别名
         * @type {string || null}
         */
        this.AliasName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.AliasName = 'AliasName' in params ? params.AliasName : null;

    }
}

/**
 * GetDevice返回参数结构体
 * @class
 */
class GetDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息
         * @type {Device || null}
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
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDeviceData返回参数结构体
 * @class
 */
class GetDeviceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备数据
         * @type {string || null}
         */
        this.DeviceData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceData = 'DeviceData' in params ? params.DeviceData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppResetPassword返回参数结构体
 * @class
 */
class AppResetPasswordResponse extends  AbstractModel {
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
 * DeleteRule请求参数结构体
 * @class
 */
class DeleteRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * ActivateRule返回参数结构体
 * @class
 */
class ActivateRuleResponse extends  AbstractModel {
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
 * UpdateRule请求参数结构体
 * @class
 */
class UpdateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 查询
         * @type {RuleQuery || null}
         */
        this.Query = null;

        /**
         * 转发动作列表
         * @type {Array.<Action> || null}
         */
        this.Actions = null;

        /**
         * 数据类型（0：文本，1：二进制）
         * @type {number || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Query) {
            let obj = new RuleQuery();
            obj.deserialize(params.Query)
            this.Query = obj;
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new Action();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * 设备签名
 * @class
 */
class DeviceSignature extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
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
 * AppGetDevices请求参数结构体
 * @class
 */
class AppGetDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;

    }
}

/**
 * AppGetDeviceData返回参数结构体
 * @class
 */
class AppGetDeviceDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备数据。
         * @type {string || null}
         */
        this.DeviceData = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceData = 'DeviceData' in params ? params.DeviceData : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTopic返回参数结构体
 * @class
 */
class GetTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic信息
         * @type {Topic || null}
         */
        this.Topic = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Topic) {
            let obj = new Topic();
            obj.deserialize(params.Topic)
            this.Topic = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeactivateRule返回参数结构体
 * @class
 */
class DeactivateRuleResponse extends  AbstractModel {
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
 * IssueDeviceControl请求参数结构体
 * @class
 */
class IssueDeviceControlRequest extends  AbstractModel {
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
         * 控制数据（json）
         * @type {string || null}
         */
        this.ControlData = null;

        /**
         * 是否发送metadata字段
         * @type {boolean || null}
         */
        this.Metadata = null;

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
        this.ControlData = 'ControlData' in params ? params.ControlData : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;

    }
}

/**
 * GetDeviceStatistics请求参数结构体
 * @class
 */
class GetDeviceStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id列表
         * @type {Array.<string> || null}
         */
        this.Products = null;

        /**
         * 开始日期
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 结束日期
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Products = 'Products' in params ? params.Products : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;

    }
}

/**
 * ResetDevice返回参数结构体
 * @class
 */
class ResetDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息
         * @type {Device || null}
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
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetDeviceLog返回参数结构体
 * @class
 */
class GetDeviceLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备日志
         * @type {Array.<DeviceLogEntry> || null}
         */
        this.DeviceLog = null;

        /**
         * 查询游标
         * @type {string || null}
         */
        this.ScrollId = null;

        /**
         * 游标超时
         * @type {number || null}
         */
        this.ScrollTimeout = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceLog) {
            this.DeviceLog = new Array();
            for (let z in params.DeviceLog) {
                let obj = new DeviceLogEntry();
                obj.deserialize(params.DeviceLog[z]);
                this.DeviceLog.push(obj);
            }
        }
        this.ScrollId = 'ScrollId' in params ? params.ScrollId : null;
        this.ScrollTimeout = 'ScrollTimeout' in params ? params.ScrollTimeout : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddRule请求参数结构体
 * @class
 */
class AddRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 查询
         * @type {RuleQuery || null}
         */
        this.Query = null;

        /**
         * 转发动作列表
         * @type {Array.<Action> || null}
         */
        this.Actions = null;

        /**
         * 数据类型（0：文本，1：二进制）
         * @type {number || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Query) {
            let obj = new RuleQuery();
            obj.deserialize(params.Query)
            this.Query = obj;
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new Action();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * ResetDevice请求参数结构体
 * @class
 */
class ResetDeviceRequest extends  AbstractModel {
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
 * 转发到第三方http(s)服务
 * @class
 */
class ServiceAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务url地址
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * 数据模版
 * @class
 */
class DataTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数字类型
         * @type {NumberData || null}
         */
        this.Number = null;

        /**
         * 字符串类型
         * @type {StringData || null}
         */
        this.String = null;

        /**
         * 枚举类型
         * @type {EnumData || null}
         */
        this.Enum = null;

        /**
         * 布尔类型
         * @type {BoolData || null}
         */
        this.Bool = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Number) {
            let obj = new NumberData();
            obj.deserialize(params.Number)
            this.Number = obj;
        }

        if (params.String) {
            let obj = new StringData();
            obj.deserialize(params.String)
            this.String = obj;
        }

        if (params.Enum) {
            let obj = new EnumData();
            obj.deserialize(params.Enum)
            this.Enum = obj;
        }

        if (params.Bool) {
            let obj = new BoolData();
            obj.deserialize(params.Bool)
            this.Bool = obj;
        }

    }
}

/**
 * DeleteTopic请求参数结构体
 * @class
 */
class DeleteTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicId
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 产品Id
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * AddProduct返回参数结构体
 * @class
 */
class AddProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品信息
         * @type {Product || null}
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
            let obj = new Product();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateProduct返回参数结构体
 * @class
 */
class UpdateProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新后的产品信息
         * @type {Product || null}
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
            let obj = new Product();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数据历史条目
 * @class
 */
class DataHistoryEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 时间戳
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 数据
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Data = 'Data' in params ? params.Data : null;

    }
}

/**
 * AppGetDevice返回参数结构体
 * @class
 */
class AppGetDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定设备详情
         * @type {AppDeviceDetail || null}
         */
        this.AppDevice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppDevice) {
            let obj = new AppDeviceDetail();
            obj.deserialize(params.AppDevice)
            this.AppDevice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpdateRule返回参数结构体
 * @class
 */
class UpdateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则
         * @type {Rule || null}
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
            let obj = new Rule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 绑定设备详情
 * @class
 */
class AppDeviceDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 所属产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 别名
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 设备信息（json）
         * @type {string || null}
         */
        this.DeviceInfo = null;

        /**
         * 数据模板
         * @type {Array.<DataTemplate> || null}
         */
        this.DataTemplate = null;

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
        this.Region = 'Region' in params ? params.Region : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.DeviceInfo = 'DeviceInfo' in params ? params.DeviceInfo : null;

        if (params.DataTemplate) {
            this.DataTemplate = new Array();
            for (let z in params.DataTemplate) {
                let obj = new DataTemplate();
                obj.deserialize(params.DataTemplate[z]);
                this.DataTemplate.push(obj);
            }
        }

    }
}

/**
 * GetDeviceStatistics返回参数结构体
 * @class
 */
class GetDeviceStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计数据
         * @type {Array.<DeviceStatData> || null}
         */
        this.DeviceStatistics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceStatistics) {
            this.DeviceStatistics = new Array();
            for (let z in params.DeviceStatistics) {
                let obj = new DeviceStatData();
                obj.deserialize(params.DeviceStatistics[z]);
                this.DeviceStatistics.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnassociateSubDeviceFromGatewayProduct返回参数结构体
 * @class
 */
class UnassociateSubDeviceFromGatewayProductResponse extends  AbstractModel {
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
 * Topic
 * @class
 */
class Topic extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicId
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * Topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 消息最大生命周期
         * @type {number || null}
         */
        this.MsgLife = null;

        /**
         * 消息最大大小
         * @type {number || null}
         */
        this.MsgSize = null;

        /**
         * 消息最大数量
         * @type {number || null}
         */
        this.MsgCount = null;

        /**
         * 已删除
         * @type {number || null}
         */
        this.Deleted = null;

        /**
         * Topic完整路径
         * @type {string || null}
         */
        this.Path = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.MsgLife = 'MsgLife' in params ? params.MsgLife : null;
        this.MsgSize = 'MsgSize' in params ? params.MsgSize : null;
        this.MsgCount = 'MsgCount' in params ? params.MsgCount : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * AssociateSubDeviceToGatewayProduct返回参数结构体
 * @class
 */
class AssociateSubDeviceToGatewayProductResponse extends  AbstractModel {
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
 * GetProduct请求参数结构体
 * @class
 */
class GetProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
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
 * AppGetToken请求参数结构体
 * @class
 */
class AppGetTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * TTL
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.Expire = 'Expire' in params ? params.Expire : null;

    }
}

/**
 * GetRule请求参数结构体
 * @class
 */
class GetRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

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
         * 产品Id
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
 * AppGetUser请求参数结构体
 * @class
 */
class AppGetUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;

    }
}

/**
 * GetProducts返回参数结构体
 * @class
 */
class GetProductsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product列表
         * @type {Array.<ProductEntry> || null}
         */
        this.Products = null;

        /**
         * Product总数
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
 * AppGetDevice请求参数结构体
 * @class
 */
class AppGetDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * GetDataHistory请求参数结构体
 * @class
 */
class GetDataHistoryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称列表，允许最多一次100台
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询数据量
         * @type {Array.<number> || null}
         */
        this.Size = null;

        /**
         * 时间排序（desc/asc）
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 查询游标
         * @type {string || null}
         */
        this.ScrollId = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.ScrollId = 'ScrollId' in params ? params.ScrollId : null;

    }
}

/**
 * AddTopic返回参数结构体
 * @class
 */
class AddTopicResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic信息
         * @type {Topic || null}
         */
        this.Topic = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Topic) {
            let obj = new Topic();
            obj.deserialize(params.Topic)
            this.Topic = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddProduct请求参数结构体
 * @class
 */
class AddProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品名称，同一区域产品名称需唯一，支持中文、英文字母、中划线和下划线，长度不超过31个字符，中文占两个字符
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据模版
         * @type {Array.<DataTemplate> || null}
         */
        this.DataTemplate = null;

        /**
         * 产品版本（native表示基础版，template表示高级版，默认值为template）
         * @type {string || null}
         */
        this.DataProtocol = null;

        /**
         * 设备认证方式（1：动态令牌，2：签名直连鉴权）
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 通信方式（other/wifi/cellular/nb-iot）
         * @type {string || null}
         */
        this.CommProtocol = null;

        /**
         * 产品的设备类型（device: 直连设备；sub_device：子设备；gateway：网关设备）
         * @type {string || null}
         */
        this.DeviceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.DataTemplate) {
            this.DataTemplate = new Array();
            for (let z in params.DataTemplate) {
                let obj = new DataTemplate();
                obj.deserialize(params.DataTemplate[z]);
                this.DataTemplate.push(obj);
            }
        }
        this.DataProtocol = 'DataProtocol' in params ? params.DataProtocol : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.CommProtocol = 'CommProtocol' in params ? params.CommProtocol : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;

    }
}

/**
 * 产品条目
 * @class
 */
class ProductEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品Key
         * @type {string || null}
         */
        this.ProductKey = null;

        /**
         * AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 连接域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 鉴权类型（0：直连，1：Token）
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 数据协议（native/template）
         * @type {string || null}
         */
        this.DataProtocol = null;

        /**
         * 删除（0未删除）
         * @type {number || null}
         */
        this.Deleted = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 通信方式
         * @type {string || null}
         */
        this.CommProtocol = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 设备类型
         * @type {string || null}
         */
        this.DeviceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductKey = 'ProductKey' in params ? params.ProductKey : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.DataProtocol = 'DataProtocol' in params ? params.DataProtocol : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.CommProtocol = 'CommProtocol' in params ? params.CommProtocol : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;

    }
}

/**
 * GetRules返回参数结构体
 * @class
 */
class GetRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则列表
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

        /**
         * 规则总数
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
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
         * 产品Id
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
 * AssociateSubDeviceToGatewayProduct请求参数结构体
 * @class
 */
class AssociateSubDeviceToGatewayProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子设备产品Id
         * @type {string || null}
         */
        this.SubDeviceProductId = null;

        /**
         * 网关产品Id
         * @type {string || null}
         */
        this.GatewayProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubDeviceProductId = 'SubDeviceProductId' in params ? params.SubDeviceProductId : null;
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;

    }
}

/**
 * GetDeviceSignatures返回参数结构体
 * @class
 */
class GetDeviceSignaturesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备绑定签名列表
         * @type {Array.<DeviceSignature> || null}
         */
        this.DeviceSignatures = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceSignatures) {
            this.DeviceSignatures = new Array();
            for (let z in params.DeviceSignatures) {
                let obj = new DeviceSignature();
                obj.deserialize(params.DeviceSignatures[z]);
                this.DeviceSignatures.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询
 * @class
 */
class RuleQuery extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 过滤规则
         * @type {string || null}
         */
        this.Condition = null;

        /**
         * Topic
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 产品Id
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
        this.Field = 'Field' in params ? params.Field : null;
        this.Condition = 'Condition' in params ? params.Condition : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * 应用用户
 * @class
 */
class AppUser extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用Id
         * @type {string || null}
         */
        this.ApplicationId = null;

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 昵称
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 修改时间
         * @type {string || null}
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
        this.ApplicationId = 'ApplicationId' in params ? params.ApplicationId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * 布尔类型数据
 * @class
 */
class BoolData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 读写模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 取值列表
         * @type {Array.<boolean> || null}
         */
        this.Range = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Range = 'Range' in params ? params.Range : null;

    }
}

/**
 * PublishMsg请求参数结构体
 * @class
 */
class PublishMsgRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic
         * @type {string || null}
         */
        this.Topic = null;

        /**
         * 消息内容
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Qos(目前QoS支持0与1)
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
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Qos = 'Qos' in params ? params.Qos : null;

    }
}

/**
 * GetProducts请求参数结构体
 * @class
 */
class GetProductsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Length = 'Length' in params ? params.Length : null;

    }
}

/**
 * AddTopic请求参数结构体
 * @class
 */
class AddTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
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
 * AppGetDeviceStatuses请求参数结构体
 * @class
 */
class AppGetDeviceStatusesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

        /**
         * 设备Id列表（单次限制1000个设备）
         * @type {Array.<string> || null}
         */
        this.DeviceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.DeviceIds = 'DeviceIds' in params ? params.DeviceIds : null;

    }
}

/**
 * 设备日志条目
 * @class
 */
class DeviceLogEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 日志内容
         * @type {string || null}
         */
        this.Msg = null;

        /**
         * 状态码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 时间戳
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备动作
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
        this.Id = 'Id' in params ? params.Id : null;
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

/**
 * GetDebugLog请求参数结构体
 * @class
 */
class GetDebugLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称列表，最大支持100台
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询数据量
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 时间排序（desc/asc）
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 查询游标
         * @type {string || null}
         */
        this.ScrollId = null;

        /**
         * 日志类型（shadow/action/mqtt）
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.ScrollId = 'ScrollId' in params ? params.ScrollId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * GetDevice请求参数结构体
 * @class
 */
class GetDeviceRequest extends  AbstractModel {
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
 * GetDeviceData请求参数结构体
 * @class
 */
class GetDeviceDataRequest extends  AbstractModel {
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
 * DeactivateRule请求参数结构体
 * @class
 */
class DeactivateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * GetTopic请求参数结构体
 * @class
 */
class GetTopicRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TopicId
         * @type {string || null}
         */
        this.TopicId = null;

        /**
         * 产品Id
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
        this.TopicId = 'TopicId' in params ? params.TopicId : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;

    }
}

/**
 * GetDevices返回参数结构体
 * @class
 */
class GetDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备列表
         * @type {Array.<DeviceEntry> || null}
         */
        this.Devices = null;

        /**
         * 设备总数
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
                let obj = new DeviceEntry();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 数字类型数据
 * @class
 */
class NumberData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 读写模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 取值范围
         * @type {Array.<number> || null}
         */
        this.Range = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Range = 'Range' in params ? params.Range : null;

    }
}

/**
 * GetDevices请求参数结构体
 * @class
 */
class GetDevicesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

        /**
         * 关键字查询
         * @type {string || null}
         */
        this.Keyword = null;

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
        this.Length = 'Length' in params ? params.Length : null;
        this.Keyword = 'Keyword' in params ? params.Keyword : null;

    }
}

/**
 * AppGetToken返回参数结构体
 * @class
 */
class AppGetTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetProduct返回参数结构体
 * @class
 */
class GetProductResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品信息
         * @type {Product || null}
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
            let obj = new Product();
            obj.deserialize(params.Product)
            this.Product = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppAddUser请求参数结构体
 * @class
 */
class AppAddUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户名
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 密码
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
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * AddRule返回参数结构体
 * @class
 */
class AddRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则
         * @type {Rule || null}
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
            let obj = new Rule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppDeleteDevice返回参数结构体
 * @class
 */
class AppDeleteDeviceResponse extends  AbstractModel {
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
 * AppIssueDeviceControl请求参数结构体
 * @class
 */
class AppIssueDeviceControlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

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
         * 控制数据（json）
         * @type {string || null}
         */
        this.ControlData = null;

        /**
         * 是否发送metadata字段
         * @type {boolean || null}
         */
        this.Metadata = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.ControlData = 'ControlData' in params ? params.ControlData : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;

    }
}

/**
 * 设备状态
 * @class
 */
class DeviceStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 设备状态（inactive, online, offline）
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 首次上线时间
         * @type {string || null}
         */
        this.FirstOnline = null;

        /**
         * 最后上线时间
         * @type {string || null}
         */
        this.LastOnline = null;

        /**
         * 上线次数
         * @type {number || null}
         */
        this.OnlineTimes = null;

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
        this.FirstOnline = 'FirstOnline' in params ? params.FirstOnline : null;
        this.LastOnline = 'LastOnline' in params ? params.LastOnline : null;
        this.OnlineTimes = 'OnlineTimes' in params ? params.OnlineTimes : null;

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
 * AppGetUser返回参数结构体
 * @class
 */
class AppGetUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户信息
         * @type {AppUser || null}
         */
        this.AppUser = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppUser) {
            let obj = new AppUser();
            obj.deserialize(params.AppUser)
            this.AppUser = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppUpdateUser请求参数结构体
 * @class
 */
class AppUpdateUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

        /**
         * 昵称
         * @type {string || null}
         */
        this.NickName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.NickName = 'NickName' in params ? params.NickName : null;

    }
}

/**
 * GetDebugLog返回参数结构体
 * @class
 */
class GetDebugLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 调试日志
         * @type {Array.<DebugLogEntry> || null}
         */
        this.DebugLog = null;

        /**
         * 查询游标
         * @type {string || null}
         */
        this.ScrollId = null;

        /**
         * 游标超时
         * @type {number || null}
         */
        this.ScrollTimeout = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DebugLog) {
            this.DebugLog = new Array();
            for (let z in params.DebugLog) {
                let obj = new DebugLogEntry();
                obj.deserialize(params.DebugLog[z]);
                this.DebugLog.push(obj);
            }
        }
        this.ScrollId = 'ScrollId' in params ? params.ScrollId : null;
        this.ScrollTimeout = 'ScrollTimeout' in params ? params.ScrollTimeout : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppUpdateUser返回参数结构体
 * @class
 */
class AppUpdateUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用用户
         * @type {AppUser || null}
         */
        this.AppUser = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppUser) {
            let obj = new AppUser();
            obj.deserialize(params.AppUser)
            this.AppUser = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备
 * @class
 */
class Device extends  AbstractModel {
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
         * 设备密钥
         * @type {string || null}
         */
        this.DeviceSecret = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 设备信息（json）
         * @type {string || null}
         */
        this.DeviceInfo = null;

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
        this.DeviceSecret = 'DeviceSecret' in params ? params.DeviceSecret : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DeviceInfo = 'DeviceInfo' in params ? params.DeviceInfo : null;

    }
}

/**
 * GetRules请求参数结构体
 * @class
 */
class GetRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Length = 'Length' in params ? params.Length : null;

    }
}

/**
 * 规则
 * @class
 */
class Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 查询
         * @type {RuleQuery || null}
         */
        this.Query = null;

        /**
         * 转发
         * @type {Array.<Action> || null}
         */
        this.Actions = null;

        /**
         * 已启动
         * @type {number || null}
         */
        this.Active = null;

        /**
         * 已删除
         * @type {number || null}
         */
        this.Deleted = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 消息顺序
         * @type {number || null}
         */
        this.MsgOrder = null;

        /**
         * 数据类型（0：文本，1：二进制）
         * @type {number || null}
         */
        this.DataType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Query) {
            let obj = new RuleQuery();
            obj.deserialize(params.Query)
            this.Query = obj;
        }

        if (params.Actions) {
            this.Actions = new Array();
            for (let z in params.Actions) {
                let obj = new Action();
                obj.deserialize(params.Actions[z]);
                this.Actions.push(obj);
            }
        }
        this.Active = 'Active' in params ? params.Active : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.MsgOrder = 'MsgOrder' in params ? params.MsgOrder : null;
        this.DataType = 'DataType' in params ? params.DataType : null;

    }
}

/**
 * IssueDeviceControl返回参数结构体
 * @class
 */
class IssueDeviceControlResponse extends  AbstractModel {
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
 * GetDataHistory返回参数结构体
 * @class
 */
class GetDataHistoryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 数据历史
         * @type {Array.<DataHistoryEntry> || null}
         */
        this.DataHistory = null;

        /**
         * 查询游标
         * @type {string || null}
         */
        this.ScrollId = null;

        /**
         * 查询游标超时
         * @type {number || null}
         */
        this.ScrollTimeout = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DataHistory) {
            this.DataHistory = new Array();
            for (let z in params.DataHistory) {
                let obj = new DataHistoryEntry();
                obj.deserialize(params.DataHistory[z]);
                this.DataHistory.push(obj);
            }
        }
        this.ScrollId = 'ScrollId' in params ? params.ScrollId : null;
        this.ScrollTimeout = 'ScrollTimeout' in params ? params.ScrollTimeout : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则引擎转发动作
 * @class
 */
class Action extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转发至topic
         * @type {TopicAction || null}
         */
        this.Topic = null;

        /**
         * 转发至第三发
         * @type {ServiceAction || null}
         */
        this.Service = null;

        /**
         * 转发至第三发Ckafka
         * @type {CkafkaAction || null}
         */
        this.Ckafka = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Topic) {
            let obj = new TopicAction();
            obj.deserialize(params.Topic)
            this.Topic = obj;
        }

        if (params.Service) {
            let obj = new ServiceAction();
            obj.deserialize(params.Service)
            this.Service = obj;
        }

        if (params.Ckafka) {
            let obj = new CkafkaAction();
            obj.deserialize(params.Ckafka)
            this.Ckafka = obj;
        }

    }
}

/**
 * PublishMsg返回参数结构体
 * @class
 */
class PublishMsgResponse extends  AbstractModel {
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
 * AppGetDevices返回参数结构体
 * @class
 */
class AppGetDevicesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定设备列表
         * @type {Array.<AppDevice> || null}
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

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new AppDevice();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 转发至Ckafka
 * @class
 */
class CkafkaAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 实例Id
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * topic名称
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * AddDevice请求参数结构体
 * @class
 */
class AddDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称，唯一标识某产品下的一个设备
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
 * UpdateProduct请求参数结构体
 * @class
 */
class UpdateProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 数据模版
         * @type {Array.<DataTemplate> || null}
         */
        this.DataTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.DataTemplate) {
            this.DataTemplate = new Array();
            for (let z in params.DataTemplate) {
                let obj = new DataTemplate();
                obj.deserialize(params.DataTemplate[z]);
                this.DataTemplate.push(obj);
            }
        }

    }
}

/**
 * DeleteRule返回参数结构体
 * @class
 */
class DeleteRuleResponse extends  AbstractModel {
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
 * GetDeviceSignatures请求参数结构体
 * @class
 */
class GetDeviceSignaturesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称列表（单次限制1000个设备）
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

        /**
         * 过期时间
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
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;
        this.Expire = 'Expire' in params ? params.Expire : null;

    }
}

/**
 * GetRule返回参数结构体
 * @class
 */
class GetRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则
         * @type {Rule || null}
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
            let obj = new Rule();
            obj.deserialize(params.Rule)
            this.Rule = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppUpdateDevice返回参数结构体
 * @class
 */
class AppUpdateDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息
         * @type {AppDevice || null}
         */
        this.AppDevice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppDevice) {
            let obj = new AppDevice();
            obj.deserialize(params.AppDevice)
            this.AppDevice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 产品
 * @class
 */
class Product extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 产品Key
         * @type {string || null}
         */
        this.ProductKey = null;

        /**
         * AppId
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * 产品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 产品描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 连接域名
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * 产品规格
         * @type {number || null}
         */
        this.Standard = null;

        /**
         * 鉴权类型（0：直连，1：Token）
         * @type {number || null}
         */
        this.AuthType = null;

        /**
         * 删除（0未删除）
         * @type {number || null}
         */
        this.Deleted = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 数据模版
         * @type {Array.<DataTemplate> || null}
         */
        this.DataTemplate = null;

        /**
         * 数据协议（native/template）
         * @type {string || null}
         */
        this.DataProtocol = null;

        /**
         * 直连用户名
         * @type {string || null}
         */
        this.Username = null;

        /**
         * 直连密码
         * @type {string || null}
         */
        this.Password = null;

        /**
         * 通信方式
         * @type {string || null}
         */
        this.CommProtocol = null;

        /**
         * qps
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * 地域
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 产品的设备类型
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * 关联的产品列表
         * @type {Array.<string> || null}
         */
        this.AssociatedProducts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductKey = 'ProductKey' in params ? params.ProductKey : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Standard = 'Standard' in params ? params.Standard : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.Deleted = 'Deleted' in params ? params.Deleted : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.DataTemplate) {
            this.DataTemplate = new Array();
            for (let z in params.DataTemplate) {
                let obj = new DataTemplate();
                obj.deserialize(params.DataTemplate[z]);
                this.DataTemplate.push(obj);
            }
        }
        this.DataProtocol = 'DataProtocol' in params ? params.DataProtocol : null;
        this.Username = 'Username' in params ? params.Username : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.CommProtocol = 'CommProtocol' in params ? params.CommProtocol : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.AssociatedProducts = 'AssociatedProducts' in params ? params.AssociatedProducts : null;

    }
}

/**
 * 设备日志条目
 * @class
 */
class DebugLogEntry extends  AbstractModel {
    constructor(){
        super();

        /**
         * 日志id
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 行为（事件）
         * @type {string || null}
         */
        this.Event = null;

        /**
         * shadow/action/mqtt, 分别表示：影子/规则引擎/上下线日志
         * @type {string || null}
         */
        this.LogType = null;

        /**
         * 时间戳
         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * success/fail
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 日志详细内容
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 数据来源topic
         * @type {string || null}
         */
        this.Topic = null;

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
        this.Id = 'Id' in params ? params.Id : null;
        this.Event = 'Event' in params ? params.Event : null;
        this.LogType = 'LogType' in params ? params.LogType : null;
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Topic = 'Topic' in params ? params.Topic : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * GetDeviceStatuses请求参数结构体
 * @class
 */
class GetDeviceStatusesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品ID
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称列表（单次限制1000个设备）
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
 * GetDeviceStatuses返回参数结构体
 * @class
 */
class GetDeviceStatusesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备状态列表
         * @type {Array.<DeviceStatus> || null}
         */
        this.DeviceStatuses = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceStatuses) {
            this.DeviceStatuses = new Array();
            for (let z in params.DeviceStatuses) {
                let obj = new DeviceStatus();
                obj.deserialize(params.DeviceStatuses[z]);
                this.DeviceStatuses.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnassociateSubDeviceFromGatewayProduct请求参数结构体
 * @class
 */
class UnassociateSubDeviceFromGatewayProductRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子设备产品Id
         * @type {string || null}
         */
        this.SubDeviceProductId = null;

        /**
         * 网关设备产品Id
         * @type {string || null}
         */
        this.GatewayProductId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubDeviceProductId = 'SubDeviceProductId' in params ? params.SubDeviceProductId : null;
        this.GatewayProductId = 'GatewayProductId' in params ? params.GatewayProductId : null;

    }
}

/**
 * AppDeleteDevice请求参数结构体
 * @class
 */
class AppDeleteDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * 数字类型数据
 * @class
 */
class StringData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 读写模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 长度范围
         * @type {Array.<number> || null}
         */
        this.Range = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Range = 'Range' in params ? params.Range : null;

    }
}

/**
 * AppGetDeviceStatuses返回参数结构体
 * @class
 */
class AppGetDeviceStatusesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备状态
         * @type {Array.<DeviceStatus> || null}
         */
        this.DeviceStatuses = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeviceStatuses) {
            this.DeviceStatuses = new Array();
            for (let z in params.DeviceStatuses) {
                let obj = new DeviceStatus();
                obj.deserialize(params.DeviceStatuses[z]);
                this.DeviceStatuses.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetTopics返回参数结构体
 * @class
 */
class GetTopicsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Topic列表
         * @type {Array.<Topic> || null}
         */
        this.Topics = null;

        /**
         * Topic总数
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

        if (params.Topics) {
            this.Topics = new Array();
            for (let z in params.Topics) {
                let obj = new Topic();
                obj.deserialize(params.Topics[z]);
                this.Topics.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppGetDeviceData请求参数结构体
 * @class
 */
class AppGetDeviceDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;

    }
}

/**
 * AppAddUser返回参数结构体
 * @class
 */
class AppAddUserResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 应用用户
         * @type {AppUser || null}
         */
        this.AppUser = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppUser) {
            let obj = new AppUser();
            obj.deserialize(params.AppUser)
            this.AppUser = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 设备条目
 * @class
 */
class DeviceEntry extends  AbstractModel {
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
         * 设备密钥
         * @type {string || null}
         */
        this.DeviceSecret = null;

        /**
         * 创建时间
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceName = 'DeviceName' in params ? params.DeviceName : null;
        this.DeviceSecret = 'DeviceSecret' in params ? params.DeviceSecret : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * GetDeviceLog请求参数结构体
 * @class
 */
class GetDeviceLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称列表，最大支持100台
         * @type {Array.<string> || null}
         */
        this.DeviceNames = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 查询数据量
         * @type {number || null}
         */
        this.Size = null;

        /**
         * 时间排序（desc/asc）
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 查询游标
         * @type {string || null}
         */
        this.ScrollId = null;

        /**
         * 日志类型（comm/status）
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
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.DeviceNames = 'DeviceNames' in params ? params.DeviceNames : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.ScrollId = 'ScrollId' in params ? params.ScrollId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * AddDevice返回参数结构体
 * @class
 */
class AddDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备信息
         * @type {Device || null}
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
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ActivateRule请求参数结构体
 * @class
 */
class ActivateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 规则Id
         * @type {string || null}
         */
        this.RuleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * AppResetPassword请求参数结构体
 * @class
 */
class AppResetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

        /**
         * 旧密码
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * 新密码
         * @type {string || null}
         */
        this.NewPassword = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.NewPassword = 'NewPassword' in params ? params.NewPassword : null;

    }
}

/**
 * DeleteTopic返回参数结构体
 * @class
 */
class DeleteTopicResponse extends  AbstractModel {
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
 * 绑定设备
 * @class
 */
class AppDevice extends  AbstractModel {
    constructor(){
        super();

        /**
         * 设备Id
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 所属产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 设备名称
         * @type {string || null}
         */
        this.DeviceName = null;

        /**
         * 别名
         * @type {string || null}
         */
        this.AliasName = null;

        /**
         * 地区
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 更新时间
         * @type {string || null}
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
        this.Region = 'Region' in params ? params.Region : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * GetTopics请求参数结构体
 * @class
 */
class GetTopicsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 产品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 偏移
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 长度
         * @type {number || null}
         */
        this.Length = null;

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
        this.Length = 'Length' in params ? params.Length : null;

    }
}

/**
 * 设备统计数据
 * @class
 */
class DeviceStatData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 时间点
         * @type {string || null}
         */
        this.Datetime = null;

        /**
         * 在线设备数
         * @type {number || null}
         */
        this.DeviceOnline = null;

        /**
         * 激活设备数
         * @type {number || null}
         */
        this.DeviceActive = null;

        /**
         * 设备总数
         * @type {number || null}
         */
        this.DeviceTotal = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Datetime = 'Datetime' in params ? params.Datetime : null;
        this.DeviceOnline = 'DeviceOnline' in params ? params.DeviceOnline : null;
        this.DeviceActive = 'DeviceActive' in params ? params.DeviceActive : null;
        this.DeviceTotal = 'DeviceTotal' in params ? params.DeviceTotal : null;

    }
}

/**
 * 枚举类型数据
 * @class
 */
class EnumData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 读写模式
         * @type {string || null}
         */
        this.Mode = null;

        /**
         * 取值列表
         * @type {Array.<string> || null}
         */
        this.Range = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Mode = 'Mode' in params ? params.Mode : null;
        this.Range = 'Range' in params ? params.Range : null;

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
 * AppSecureAddDevice返回参数结构体
 * @class
 */
class AppSecureAddDeviceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 绑定设备信息
         * @type {AppDevice || null}
         */
        this.AppDevice = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AppDevice) {
            let obj = new AppDevice();
            obj.deserialize(params.AppDevice)
            this.AppDevice = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AppSecureAddDevice请求参数结构体
 * @class
 */
class AppSecureAddDeviceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 访问Token
         * @type {string || null}
         */
        this.AccessToken = null;

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
        this.AccessToken = 'AccessToken' in params ? params.AccessToken : null;
        this.DeviceSignature = 'DeviceSignature' in params ? params.DeviceSignature : null;

    }
}

/**
 * AppIssueDeviceControl返回参数结构体
 * @class
 */
class AppIssueDeviceControlResponse extends  AbstractModel {
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
 * 转发到topic动作
 * @class
 */
class TopicAction extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标topic
         * @type {string || null}
         */
        this.Topic = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Topic = 'Topic' in params ? params.Topic : null;

    }
}

module.exports = {
    AppUpdateDeviceRequest: AppUpdateDeviceRequest,
    GetDeviceResponse: GetDeviceResponse,
    GetDeviceDataResponse: GetDeviceDataResponse,
    AppResetPasswordResponse: AppResetPasswordResponse,
    DeleteRuleRequest: DeleteRuleRequest,
    ActivateRuleResponse: ActivateRuleResponse,
    UpdateRuleRequest: UpdateRuleRequest,
    DeviceSignature: DeviceSignature,
    AppGetDevicesRequest: AppGetDevicesRequest,
    AppGetDeviceDataResponse: AppGetDeviceDataResponse,
    GetTopicResponse: GetTopicResponse,
    DeactivateRuleResponse: DeactivateRuleResponse,
    IssueDeviceControlRequest: IssueDeviceControlRequest,
    GetDeviceStatisticsRequest: GetDeviceStatisticsRequest,
    ResetDeviceResponse: ResetDeviceResponse,
    GetDeviceLogResponse: GetDeviceLogResponse,
    AddRuleRequest: AddRuleRequest,
    ResetDeviceRequest: ResetDeviceRequest,
    ServiceAction: ServiceAction,
    DataTemplate: DataTemplate,
    DeleteTopicRequest: DeleteTopicRequest,
    AddProductResponse: AddProductResponse,
    UpdateProductResponse: UpdateProductResponse,
    DataHistoryEntry: DataHistoryEntry,
    AppGetDeviceResponse: AppGetDeviceResponse,
    UpdateRuleResponse: UpdateRuleResponse,
    AppDeviceDetail: AppDeviceDetail,
    GetDeviceStatisticsResponse: GetDeviceStatisticsResponse,
    UnassociateSubDeviceFromGatewayProductResponse: UnassociateSubDeviceFromGatewayProductResponse,
    Topic: Topic,
    AssociateSubDeviceToGatewayProductResponse: AssociateSubDeviceToGatewayProductResponse,
    GetProductRequest: GetProductRequest,
    AppGetTokenRequest: AppGetTokenRequest,
    GetRuleRequest: GetRuleRequest,
    DeleteProductRequest: DeleteProductRequest,
    AppGetUserRequest: AppGetUserRequest,
    GetProductsResponse: GetProductsResponse,
    AppGetDeviceRequest: AppGetDeviceRequest,
    GetDataHistoryRequest: GetDataHistoryRequest,
    AddTopicResponse: AddTopicResponse,
    AddProductRequest: AddProductRequest,
    ProductEntry: ProductEntry,
    GetRulesResponse: GetRulesResponse,
    DeleteDeviceRequest: DeleteDeviceRequest,
    AssociateSubDeviceToGatewayProductRequest: AssociateSubDeviceToGatewayProductRequest,
    GetDeviceSignaturesResponse: GetDeviceSignaturesResponse,
    RuleQuery: RuleQuery,
    AppUser: AppUser,
    BoolData: BoolData,
    PublishMsgRequest: PublishMsgRequest,
    GetProductsRequest: GetProductsRequest,
    AddTopicRequest: AddTopicRequest,
    AppGetDeviceStatusesRequest: AppGetDeviceStatusesRequest,
    DeviceLogEntry: DeviceLogEntry,
    GetDebugLogRequest: GetDebugLogRequest,
    GetDeviceRequest: GetDeviceRequest,
    GetDeviceDataRequest: GetDeviceDataRequest,
    DeactivateRuleRequest: DeactivateRuleRequest,
    GetTopicRequest: GetTopicRequest,
    GetDevicesResponse: GetDevicesResponse,
    NumberData: NumberData,
    GetDevicesRequest: GetDevicesRequest,
    AppGetTokenResponse: AppGetTokenResponse,
    GetProductResponse: GetProductResponse,
    AppAddUserRequest: AppAddUserRequest,
    AddRuleResponse: AddRuleResponse,
    AppDeleteDeviceResponse: AppDeleteDeviceResponse,
    AppIssueDeviceControlRequest: AppIssueDeviceControlRequest,
    DeviceStatus: DeviceStatus,
    DeleteProductResponse: DeleteProductResponse,
    AppGetUserResponse: AppGetUserResponse,
    AppUpdateUserRequest: AppUpdateUserRequest,
    GetDebugLogResponse: GetDebugLogResponse,
    AppUpdateUserResponse: AppUpdateUserResponse,
    Device: Device,
    GetRulesRequest: GetRulesRequest,
    Rule: Rule,
    IssueDeviceControlResponse: IssueDeviceControlResponse,
    GetDataHistoryResponse: GetDataHistoryResponse,
    Action: Action,
    PublishMsgResponse: PublishMsgResponse,
    AppGetDevicesResponse: AppGetDevicesResponse,
    CkafkaAction: CkafkaAction,
    AddDeviceRequest: AddDeviceRequest,
    UpdateProductRequest: UpdateProductRequest,
    DeleteRuleResponse: DeleteRuleResponse,
    GetDeviceSignaturesRequest: GetDeviceSignaturesRequest,
    GetRuleResponse: GetRuleResponse,
    AppUpdateDeviceResponse: AppUpdateDeviceResponse,
    Product: Product,
    DebugLogEntry: DebugLogEntry,
    GetDeviceStatusesRequest: GetDeviceStatusesRequest,
    GetDeviceStatusesResponse: GetDeviceStatusesResponse,
    UnassociateSubDeviceFromGatewayProductRequest: UnassociateSubDeviceFromGatewayProductRequest,
    AppDeleteDeviceRequest: AppDeleteDeviceRequest,
    StringData: StringData,
    AppGetDeviceStatusesResponse: AppGetDeviceStatusesResponse,
    GetTopicsResponse: GetTopicsResponse,
    AppGetDeviceDataRequest: AppGetDeviceDataRequest,
    AppAddUserResponse: AppAddUserResponse,
    DeviceEntry: DeviceEntry,
    GetDeviceLogRequest: GetDeviceLogRequest,
    AddDeviceResponse: AddDeviceResponse,
    ActivateRuleRequest: ActivateRuleRequest,
    AppResetPasswordRequest: AppResetPasswordRequest,
    DeleteTopicResponse: DeleteTopicResponse,
    AppDevice: AppDevice,
    GetTopicsRequest: GetTopicsRequest,
    DeviceStatData: DeviceStatData,
    EnumData: EnumData,
    DeleteDeviceResponse: DeleteDeviceResponse,
    AppSecureAddDeviceResponse: AppSecureAddDeviceResponse,
    AppSecureAddDeviceRequest: AppSecureAddDeviceRequest,
    AppIssueDeviceControlResponse: AppIssueDeviceControlResponse,
    TopicAction: TopicAction,

}

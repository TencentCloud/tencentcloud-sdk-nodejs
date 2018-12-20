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
         * 服务质量等级，取值为0， 1
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
        this.Topic = params.Topic || null;
        this.Payload = params.Payload || null;
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;
        this.Qos = params.Qos || null;

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
        this.ProductId = params.ProductId || null;
        this.Skey = params.Skey || null;

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
         * 分页偏移，从0开始
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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RuleName = params.RuleName || null;

        if (params.TopicRulePayload) {
            let obj = new TopicRulePayload();
            obj.deserialize(params.TopicRulePayload)
            this.TopicRulePayload = obj;
        }
        this.ModifyType = params.ModifyType || null;
        this.ActionIndex = params.ActionIndex || null;

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
        this.RuleName = params.RuleName || null;

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
        this.ProductId = params.ProductId || null;
        this.TaskId = params.TaskId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
        this.DeviceName = params.DeviceName || null;
        this.DevicePsk = params.DevicePsk || null;
        this.DeviceCert = params.DeviceCert || null;
        this.DevicePrivateKey = params.DevicePrivateKey || null;
        this.Result = params.Result || null;
        this.ErrMsg = params.ErrMsg || null;

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
        this.Data = params.Data || null;
        this.RequestId = params.RequestId || null;

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
        this.Type = params.Type || null;
        this.Id = params.Id || null;
        this.ProductId = params.ProductId || null;
        this.Status = params.Status || null;
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;
        this.DoneTime = params.DoneTime || null;
        this.ScheduleTime = params.ScheduleTime || null;
        this.RetCode = params.RetCode || null;
        this.ErrMsg = params.ErrMsg || null;
        this.Percent = params.Percent || null;
        this.AllDeviceCnt = params.AllDeviceCnt || null;
        this.DoneDeviceCnt = params.DoneDeviceCnt || null;
        this.RequestId = params.RequestId || null;

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
        this.Id = params.Id || null;

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
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

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
        this.Topic = params.Topic || null;
        this.Payload = params.Payload || null;

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
        this.Desired = params.Desired || null;

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
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;
        this.Skey = params.Skey || null;

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
        this.RequestId = params.RequestId || null;

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
         * 规则的SQL语句，base64编码
         * @type {string || null}
         */
        this.Sql = null;

        /**
         * 行为的JSON字符串，大部分种类举例如下：
[{"republish":{"topic":"TEST/test"}},{"forward":{"api":"http://127.0.0.1:8080"}},{"ckafka":{"instance":{"id":"ckafka-test","name":""},"topic":{"id":"topic-test","name":"test"},"region":"gz"}},{"cmqqueue":{"queuename":"queue-test-TEST","region":"gz"}},{"mysql":{"instanceid":"cdb-test","region":"gz","username":"test","userpwd":"*****","dbname":"d_mqtt","tablename":"t_test","fieldpairs":[{"field":"test","value":"test"}],"devicetype":"CUSTOM"}}]
         * @type {string || null}
         */
        this.Actions = null;

        /**
         * 规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则不生效
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
        this.Sql = params.Sql || null;
        this.Actions = params.Actions || null;
        this.Description = params.Description || null;
        this.RuleDisabled = params.RuleDisabled || null;

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
        this.TaskId = params.TaskId || null;
        this.TaskStatus = params.TaskStatus || null;
        this.RequestId = params.RequestId || null;

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
        this.ProductID = params.ProductID || null;
        this.TopicName = params.TopicName || null;
        this.NewTopicName = params.NewTopicName || null;
        this.Privilege = params.Privilege || null;

        if (params.BrokerSubscribe) {
            let obj = new BrokerSubscribe();
            obj.deserialize(params.BrokerSubscribe)
            this.BrokerSubscribe = obj;
        }

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
        this.ProductId = params.ProductId || null;
        this.ProductName = params.ProductName || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Devices) {
            this.Devices = new Array();
            for (let z in params.Devices) {
                let obj = new DeviceInfo();
                obj.deserialize(params.Devices[z]);
                this.Devices.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = params.Tag || null;
        this.Type = params.Type || null;
        this.Value = params.Value || null;

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
        this.RequestId = params.RequestId || null;

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
         * 产品名
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
        this.ProductID = params.ProductID || null;
        this.DeviceName = params.DeviceName || null;

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
        this.Id = params.Id || null;

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
        this.ProductID = params.ProductID || null;
        this.TopicName = params.TopicName || null;
        this.Privilege = params.Privilege || null;

        if (params.BrokerSubscribe) {
            let obj = new BrokerSubscribe();
            obj.deserialize(params.BrokerSubscribe)
            this.BrokerSubscribe = obj;
        }

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
        this.RequestId = params.RequestId || null;

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
        this.CreationDate = params.CreationDate || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfo();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.ProductName = params.ProductName || null;
        this.ProductId = params.ProductId || null;

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }
        this.RequestId = params.RequestId || null;

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
         * 分页偏移，Offset从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页大小，当前页面中显示的最大数量，值范围 10-250。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 过滤条件
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
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

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
         * 设备固件版本号，若不带此参数会返回所有固件版本的设备
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
        this.ProductId = params.ProductId || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.FirmwareVersion = params.FirmwareVersion || null;

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
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;

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
        this.TaskType = params.TaskType || null;
        this.ProductId = params.ProductId || null;
        this.DeviceNameFilter = params.DeviceNameFilter || null;
        this.ScheduleTimeInSeconds = params.ScheduleTimeInSeconds || null;

        if (params.Tasks) {
            let obj = new Task();
            obj.deserialize(params.Tasks)
            this.Tasks = obj;
        }
        this.MaxExecutionTimeInSeconds = params.MaxExecutionTimeInSeconds || null;

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
        this.RuleName = params.RuleName || null;

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
        this.RequestId = params.RequestId || null;

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
        this.TaskId = params.TaskId || null;
        this.ProductId = params.ProductId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.DeviceName = params.DeviceName || null;
        this.DevicePsk = params.DevicePsk || null;
        this.DeviceCert = params.DeviceCert || null;
        this.DevicePrivateKey = params.DevicePrivateKey || null;
        this.LoraDevEui = params.LoraDevEui || null;
        this.LoraMoteType = params.LoraMoteType || null;
        this.LoraAppKey = params.LoraAppKey || null;
        this.LoraNwkKey = params.LoraNwkKey || null;
        this.RequestId = params.RequestId || null;

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
        this.RuleName = params.RuleName || null;

        if (params.TopicRulePayload) {
            let obj = new TopicRulePayload();
            obj.deserialize(params.TopicRulePayload)
            this.TopicRulePayload = obj;
        }

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 过滤键的名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 一个或者多个过滤值
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
        this.Name = params.Name || null;
        this.Values = params.Values || null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;

        if (params.Attribute) {
            let obj = new Attribute();
            obj.deserialize(params.Attribute)
            this.Attribute = obj;
        }
        this.DefinedPsk = params.DefinedPsk || null;
        this.Isp = params.Isp || null;
        this.Imei = params.Imei || null;
        this.LoraDevEui = params.LoraDevEui || null;
        this.LoraMoteType = params.LoraMoteType || null;
        this.Skey = params.Skey || null;

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
        this.TotalCount = params.TotalCount || null;

        if (params.Products) {
            this.Products = new Array();
            for (let z in params.Products) {
                let obj = new ProductInfo();
                obj.deserialize(params.Products[z]);
                this.Products.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;
        this.State = params.State || null;
        this.ShadowVersion = params.ShadowVersion || null;

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
         * 创建LoRa产品需要的Skey
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
        this.ProductName = params.ProductName || null;

        if (params.ProductProperties) {
            let obj = new ProductProperties();
            obj.deserialize(params.ProductProperties)
            this.ProductProperties = obj;
        }
        this.Skey = params.Skey || null;

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
        this.RequestId = params.RequestId || null;

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
         * 设备登陆时间
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
         * IMEI
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = params.DeviceName || null;
        this.Online = params.Online || null;
        this.LoginTime = params.LoginTime || null;
        this.Version = params.Version || null;
        this.DeviceCert = params.DeviceCert || null;
        this.DevicePsk = params.DevicePsk || null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = params.DeviceType || null;
        this.Imei = params.Imei || null;
        this.Isp = params.Isp || null;
        this.NbiotDeviceID = params.NbiotDeviceID || null;
        this.ConnIP = params.ConnIP || null;
        this.LastUpdateTime = params.LastUpdateTime || null;
        this.LoraDevEui = params.LoraDevEui || null;
        this.LoraMoteType = params.LoraMoteType || null;

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
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.Data = params.Data || null;
        this.RequestId = params.RequestId || null;

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
         * 加密类型，1表示非对称加密，2表示对称加密。如不填写，默认值是1
         * @type {string || null}
         */
        this.EncryptionType = null;

        /**
         * 产品所属区域，目前只支持广州（gz）
         * @type {string || null}
         */
        this.Region = null;

        /**
         * 产品类型，0表示正常设备，2表示NB-IoT设备，默认值是0
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductDescription = params.ProductDescription || null;
        this.EncryptionType = params.EncryptionType || null;
        this.Region = params.Region || null;
        this.ProductType = params.ProductType || null;
        this.Format = params.Format || null;
        this.Platform = params.Platform || null;
        this.Appeui = params.Appeui || null;
        this.ModelId = params.ModelId || null;
        this.ModelName = params.ModelName || null;

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
        this.ProductId = params.ProductId || null;
        this.DeviceNames = params.DeviceNames || null;

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
        this.RuleName = params.RuleName || null;

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
         * 设备登陆时间
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
         * IMEI
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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeviceName = params.DeviceName || null;
        this.Online = params.Online || null;
        this.LoginTime = params.LoginTime || null;
        this.Version = params.Version || null;
        this.LastUpdateTime = params.LastUpdateTime || null;
        this.DeviceCert = params.DeviceCert || null;
        this.DevicePsk = params.DevicePsk || null;

        if (params.Tags) {
            this.Tags = new Array();
            for (let z in params.Tags) {
                let obj = new DeviceTag();
                obj.deserialize(params.Tags[z]);
                this.Tags.push(obj);
            }
        }
        this.DeviceType = params.DeviceType || null;
        this.Imei = params.Imei || null;
        this.Isp = params.Isp || null;
        this.ConnIP = params.ConnIP || null;
        this.NbiotDeviceID = params.NbiotDeviceID || null;
        this.LoraDevEui = params.LoraDevEui || null;
        this.LoraMoteType = params.LoraMoteType || null;
        this.RequestId = params.RequestId || null;

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
        this.ProductId = params.ProductId || null;
        this.DeviceName = params.DeviceName || null;

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
        this.TaskId = params.TaskId || null;

        if (params.DevicesInfo) {
            this.DevicesInfo = new Array();
            for (let z in params.DevicesInfo) {
                let obj = new MultiDevicesInfo();
                obj.deserialize(params.DevicesInfo[z]);
                this.DevicesInfo.push(obj);
            }
        }
        this.TotalDevNum = params.TotalDevNum || null;
        this.RequestId = params.RequestId || null;

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
        this.RequestId = params.RequestId || null;

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
        this.Type = params.Type || null;
        this.Id = params.Id || null;
        this.ProductId = params.ProductId || null;
        this.Status = params.Status || null;
        this.CreateTime = params.CreateTime || null;
        this.UpdateTime = params.UpdateTime || null;
        this.RetCode = params.RetCode || null;
        this.ErrMsg = params.ErrMsg || null;

    }
}

module.exports = {
    PublishMessageRequest: PublishMessageRequest,
    DeleteProductRequest: DeleteProductRequest,
    DescribeTasksRequest: DescribeTasksRequest,
    DisableTopicRuleResponse: DisableTopicRuleResponse,
    ReplaceTopicRuleRequest: ReplaceTopicRuleRequest,
    DeleteTopicRuleRequest: DeleteTopicRuleRequest,
    DescribeMultiDevicesRequest: DescribeMultiDevicesRequest,
    MultiDevicesInfo: MultiDevicesInfo,
    UpdateDeviceShadowResponse: UpdateDeviceShadowResponse,
    DescribeTaskResponse: DescribeTaskResponse,
    CancelTaskRequest: CancelTaskRequest,
    CreateTaskResponse: CreateTaskResponse,
    BatchPublishMessage: BatchPublishMessage,
    BatchUpdateShadow: BatchUpdateShadow,
    DeleteDeviceRequest: DeleteDeviceRequest,
    DeleteProductResponse: DeleteProductResponse,
    TopicRulePayload: TopicRulePayload,
    DescribeMultiDevTaskResponse: DescribeMultiDevTaskResponse,
    UpdateTopicPolicyRequest: UpdateTopicPolicyRequest,
    ProductInfo: ProductInfo,
    DescribeDevicesResponse: DescribeDevicesResponse,
    DeviceTag: DeviceTag,
    DeleteTopicRuleResponse: DeleteTopicRuleResponse,
    DescribeDeviceRequest: DescribeDeviceRequest,
    DescribeTaskRequest: DescribeTaskRequest,
    Task: Task,
    CreateTopicPolicyRequest: CreateTopicPolicyRequest,
    PublishMessageResponse: PublishMessageResponse,
    ProductMetadata: ProductMetadata,
    DescribeTasksResponse: DescribeTasksResponse,
    EnableTopicRuleResponse: EnableTopicRuleResponse,
    CreateProductResponse: CreateProductResponse,
    DescribeProductsRequest: DescribeProductsRequest,
    DescribeDevicesRequest: DescribeDevicesRequest,
    BrokerSubscribe: BrokerSubscribe,
    CreateTaskRequest: CreateTaskRequest,
    DisableTopicRuleRequest: DisableTopicRuleRequest,
    CreateTopicPolicyResponse: CreateTopicPolicyResponse,
    DescribeMultiDevTaskRequest: DescribeMultiDevTaskRequest,
    CreateTopicRuleResponse: CreateTopicRuleResponse,
    CancelTaskResponse: CancelTaskResponse,
    CreateDeviceResponse: CreateDeviceResponse,
    CreateTopicRuleRequest: CreateTopicRuleRequest,
    Filter: Filter,
    CreateDeviceRequest: CreateDeviceRequest,
    DescribeProductsResponse: DescribeProductsResponse,
    UpdateDeviceShadowRequest: UpdateDeviceShadowRequest,
    CreateProductRequest: CreateProductRequest,
    Attribute: Attribute,
    DeleteDeviceResponse: DeleteDeviceResponse,
    DeviceInfo: DeviceInfo,
    CreateMultiDeviceResponse: CreateMultiDeviceResponse,
    ReplaceTopicRuleResponse: ReplaceTopicRuleResponse,
    DescribeDeviceShadowResponse: DescribeDeviceShadowResponse,
    ProductProperties: ProductProperties,
    CreateMultiDeviceRequest: CreateMultiDeviceRequest,
    EnableTopicRuleRequest: EnableTopicRuleRequest,
    DescribeDeviceResponse: DescribeDeviceResponse,
    DescribeDeviceShadowRequest: DescribeDeviceShadowRequest,
    DescribeMultiDevicesResponse: DescribeMultiDevicesResponse,
    UpdateTopicPolicyResponse: UpdateTopicPolicyResponse,
    TaskInfo: TaskInfo,

}

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
 * ListConnections返回参数结构体
 * @class
 */
class ListConnectionsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器信息
         * @type {Array.<Connection> || null}
         */
        this.Connections = null;

        /**
         * 连接器总数
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

        if (params.Connections) {
            this.Connections = new Array();
            for (let z in params.Connections) {
                let obj = new Connection();
                obj.deserialize(params.Connections[z]);
                this.Connections.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetEventBus返回参数结构体
 * @class
 */
class GetEventBusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 事件集描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 日志主题ID
         * @type {string || null}
         */
        this.ClsTopicId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 日志集ID
         * @type {string || null}
         */
        this.ClsLogsetId = null;

        /**
         * 事件集名称
         * @type {string || null}
         */
        this.EventBusName = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * （已废弃）事件集类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ClsTopicId = 'ClsTopicId' in params ? params.ClsTopicId : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ClsLogsetId = 'ClsLogsetId' in params ? params.ClsLogsetId : null;
        this.EventBusName = 'EventBusName' in params ? params.EventBusName : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 用来描述一个ckafka投递目标的重试策略
 * @class
 */
class RetryPolicy extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重试间隔 单位:秒
         * @type {number || null}
         */
        this.RetryInterval = null;

        /**
         * 最大重试次数
         * @type {number || null}
         */
        this.MaxRetryAttempts = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RetryInterval = 'RetryInterval' in params ? params.RetryInterval : null;
        this.MaxRetryAttempts = 'MaxRetryAttempts' in params ? params.MaxRetryAttempts : null;

    }
}

/**
 * 用来描述ckafka投递目标
 * @class
 */
class CkafkaTargetParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 要投递到的ckafka topic
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * 重试策略
         * @type {RetryPolicy || null}
         */
        this.RetryPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

        if (params.RetryPolicy) {
            let obj = new RetryPolicy();
            obj.deserialize(params.RetryPolicy)
            this.RetryPolicy = obj;
        }

    }
}

/**
 * ListConnections请求参数结构体
 * @class
 */
class ListConnectionsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 根据哪个字段进行返回结果排序，目前支持如下以下字段：AddTime, ModTime
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 偏移量，默认为0。
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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 事件规则ID
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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

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
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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
 * CreateTarget请求参数结构体
 * @class
 */
class CreateTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 目标类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 目标描述
         * @type {TargetDescription || null}
         */
        this.TargetDescription = null;

        /**
         * 事件规则ID
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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TargetDescription) {
            let obj = new TargetDescription();
            obj.deserialize(params.TargetDescription)
            this.TargetDescription = obj;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * DeleteTarget返回参数结构体
 * @class
 */
class DeleteTargetResponse extends  AbstractModel {
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
 * 描述如何提取数据
 * @class
 */
class Extraction extends  AbstractModel {
    constructor(){
        super();

        /**
         * JsonPath, 不指定则使用默认值$.
         * @type {string || null}
         */
        this.ExtractionInputPath = null;

        /**
         * 取值: TEXT/JSON
         * @type {string || null}
         */
        this.Format = null;

        /**
         * 仅在Text需要传递
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TextParams || null}
         */
        this.TextParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExtractionInputPath = 'ExtractionInputPath' in params ? params.ExtractionInputPath : null;
        this.Format = 'Format' in params ? params.Format : null;

        if (params.TextParams) {
            let obj = new TextParams();
            obj.deserialize(params.TextParams)
            this.TextParams = obj;
        }

    }
}

/**
 * 目标简要信息
 * @class
 */
class TargetBrief extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 目标类型
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
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ListRules返回参数结构体
 * @class
 */
class ListRulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件规则信息
         * @type {Array.<Rule> || null}
         */
        this.Rules = null;

        /**
         * 事件规则总数
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

        if (params.Rules) {
            this.Rules = new Array();
            for (let z in params.Rules) {
                let obj = new Rule();
                obj.deserialize(params.Rules[z]);
                this.Rules.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateTarget返回参数结构体
 * @class
 */
class CreateTargetResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckRule请求参数结构体
 * @class
 */
class CheckRuleRequest extends  AbstractModel {
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
 * GetRule返回参数结构体
 * @class
 */
class GetRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集id
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 事件规则id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 事件规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 事件规则状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 使能开关
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 事件规则描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 事件模式
         * @type {string || null}
         */
        this.EventPattern = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EventPattern = 'EventPattern' in params ? params.EventPattern : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateConnection返回参数结构体
 * @class
 */
class CreateConnectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器ID
         * @type {string || null}
         */
        this.ConnectionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectionId = 'ConnectionId' in params ? params.ConnectionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 事件集信息
 * @class
 */
class EventBus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 更新时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 事件集描述，不限字符类型，200字符描述以内
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
         * @type {string || null}
         */
        this.EventBusName = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 事件集类型
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
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.EventBusName = 'EventBusName' in params ? params.EventBusName : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * ListTargets请求参数结构体
 * @class
 */
class ListTargetsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 一个转换器
 * @class
 */
class Transformation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述如何提取数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Extraction || null}
         */
        this.Extraction = null;

        /**
         * 描述如何过滤数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {EtlFilter || null}
         */
        this.EtlFilter = null;

        /**
         * 描述如何数据转换
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Transform || null}
         */
        this.Transform = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Extraction) {
            let obj = new Extraction();
            obj.deserialize(params.Extraction)
            this.Extraction = obj;
        }

        if (params.EtlFilter) {
            let obj = new EtlFilter();
            obj.deserialize(params.EtlFilter)
            this.EtlFilter = obj;
        }

        if (params.Transform) {
            let obj = new Transform();
            obj.deserialize(params.Transform)
            this.Transform = obj;
        }

    }
}

/**
 * Target信息
 * @class
 */
class Target extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标类型
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 目标ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 目标描述
         * @type {TargetDescription || null}
         */
        this.TargetDescription = null;

        /**
         * 事件规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 开启批量投递使能
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
        this.EnableBatchDelivery = null;

        /**
         * 批量投递最长等待时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BatchTimeout = null;

        /**
         * 批量投递最大事件条数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.BatchEventCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;

        if (params.TargetDescription) {
            let obj = new TargetDescription();
            obj.deserialize(params.TargetDescription)
            this.TargetDescription = obj;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.EnableBatchDelivery = 'EnableBatchDelivery' in params ? params.EnableBatchDelivery : null;
        this.BatchTimeout = 'BatchTimeout' in params ? params.BatchTimeout : null;
        this.BatchEventCount = 'BatchEventCount' in params ? params.BatchEventCount : null;

    }
}

/**
 * ListRules请求参数结构体
 * @class
 */
class ListRulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 分页偏移量，默认为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
         * @type {string || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Order = 'Order' in params ? params.Order : null;

    }
}

/**
 * 云函数参数
 * @class
 */
class SCFParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批量投递最长等待时间
         * @type {number || null}
         */
        this.BatchTimeout = null;

        /**
         * 批量投递最大事件条数
         * @type {number || null}
         */
        this.BatchEventCount = null;

        /**
         * 开启批量投递使能
         * @type {boolean || null}
         */
        this.EnableBatchDelivery = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchTimeout = 'BatchTimeout' in params ? params.BatchTimeout : null;
        this.BatchEventCount = 'BatchEventCount' in params ? params.BatchEventCount : null;
        this.EnableBatchDelivery = 'EnableBatchDelivery' in params ? params.EnableBatchDelivery : null;

    }
}

/**
 * rule对应的dlq配置
 * @class
 */
class DeadLetterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持dlq、丢弃、忽略错误继续传递三种模式, 分别对应: DLQ,DROP,IGNORE_ERROR
         * @type {string || null}
         */
        this.DisposeMethod = null;

        /**
         * 设置了DLQ方式后,此选项必填. 错误消息会被投递到对应的kafka topic中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CkafkaDeliveryParams || null}
         */
        this.CkafkaDeliveryParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DisposeMethod = 'DisposeMethod' in params ? params.DisposeMethod : null;

        if (params.CkafkaDeliveryParams) {
            let obj = new CkafkaDeliveryParams();
            obj.deserialize(params.CkafkaDeliveryParams)
            this.CkafkaDeliveryParams = obj;
        }

    }
}

/**
 * UpdateTransformation返回参数结构体
 * @class
 */
class UpdateTransformationResponse extends  AbstractModel {
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
 * UpdateEventBus请求参数结构体
 * @class
 */
class UpdateEventBusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 事件集描述，不限字符类型，200字符描述以内
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
         * @type {string || null}
         */
        this.EventBusName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.EventBusName = 'EventBusName' in params ? params.EventBusName : null;

    }
}

/**
 * CreateEventBus请求参数结构体
 * @class
 */
class CreateEventBusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
         * @type {string || null}
         */
        this.EventBusName = null;

        /**
         * 事件集描述，不限字符类型，200字符描述以内
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
        this.EventBusName = 'EventBusName' in params ? params.EventBusName : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * PutEvents返回参数结构体
 * @class
 */
class PutEventsResponse extends  AbstractModel {
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
 * CreateRule请求参数结构体
 * @class
 */
class CreateRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 参考：[事件模式](https://cloud.tencent.com/document/product/1359/56084)
         * @type {string || null}
         */
        this.EventPattern = null;

        /**
         * 事件集ID。
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 事件集名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * 使能开关。
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 事件集描述，不限字符类型，200字符描述以内
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
        this.EventPattern = 'EventPattern' in params ? params.EventPattern : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;

    }
}

/**
 * 描述如何切分数据
 * @class
 */
class TextParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * 逗号、| 、制表符、空格、换行符、%、#，限制长度为 1。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Separator = null;

        /**
         * 填写正则表达式：长度128
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Regex = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Separator = 'Separator' in params ? params.Separator : null;
        this.Regex = 'Regex' in params ? params.Regex : null;

    }
}

/**
 * DeleteConnection返回参数结构体
 * @class
 */
class DeleteConnectionResponse extends  AbstractModel {
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
 * GetTransformation返回参数结构体
 * @class
 */
class GetTransformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转换规则列表
         * @type {Array.<Transformation> || null}
         */
        this.Transformations = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Transformations) {
            this.Transformations = new Array();
            for (let z in params.Transformations) {
                let obj = new Transformation();
                obj.deserialize(params.Transformations[z]);
                this.Transformations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 规则信息
 * @class
 */
class Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 修改时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 使能开关
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 规则名称
         * @type {string || null}
         */
        this.RuleName = null;

        /**
         * Target 简要信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TargetBrief> || null}
         */
        this.Targets = null;

        /**
         * rule设置的dlq规则. 可能为null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DeadLetterConfig || null}
         */
        this.DeadLetterConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new TargetBrief();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }

        if (params.DeadLetterConfig) {
            let obj = new DeadLetterConfig();
            obj.deserialize(params.DeadLetterConfig)
            this.DeadLetterConfig = obj;
        }

    }
}

/**
 * CreateTransformation请求参数结构体
 * @class
 */
class CreateTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件总线 id
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 规则id
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 一个转换规则列表，当前仅限定一个
         * @type {Array.<Transformation> || null}
         */
        this.Transformations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

        if (params.Transformations) {
            this.Transformations = new Array();
            for (let z in params.Transformations) {
                let obj = new Transformation();
                obj.deserialize(params.Transformations[z]);
                this.Transformations.push(obj);
            }
        }

    }
}

/**
 * PublishEvent请求参数结构体
 * @class
 */
class PublishEventRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件列表
         * @type {Array.<Event> || null}
         */
        this.EventList = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new Event();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

    }
}

/**
 * 描述如何过滤数据
 * @class
 */
class EtlFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语法Rule规则保持一致
         * @type {string || null}
         */
        this.Filter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Filter = 'Filter' in params ? params.Filter : null;

    }
}

/**
 * CheckTransformation返回参数结构体
 * @class
 */
class CheckTransformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经过Transformations处理之后的数据
         * @type {string || null}
         */
        this.Output = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Output = 'Output' in params ? params.Output : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListTargets返回参数结构体
 * @class
 */
class ListTargetsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 目标总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 目标信息
         * @type {Array.<Target> || null}
         */
        this.Targets = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Targets) {
            this.Targets = new Array();
            for (let z in params.Targets) {
                let obj = new Target();
                obj.deserialize(params.Targets[z]);
                this.Targets.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEventBuses返回参数结构体
 * @class
 */
class ListEventBusesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集信息
         * @type {Array.<EventBus> || null}
         */
        this.EventBuses = null;

        /**
         * 事件集总数
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

        if (params.EventBuses) {
            this.EventBuses = new Array();
            for (let z in params.EventBuses) {
                let obj = new EventBus();
                obj.deserialize(params.EventBuses[z]);
                this.EventBuses.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CheckRule返回参数结构体
 * @class
 */
class CheckRuleResponse extends  AbstractModel {
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
 * ConnectionDescription描述
 * @class
 */
class ConnectionDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资源qcs六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606)
         * @type {string || null}
         */
        this.ResourceDescription = null;

        /**
         * apigw参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {APIGWParams || null}
         */
        this.APIGWParams = null;

        /**
         * ckafka参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CkafkaParams || null}
         */
        this.CkafkaParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceDescription = 'ResourceDescription' in params ? params.ResourceDescription : null;

        if (params.APIGWParams) {
            let obj = new APIGWParams();
            obj.deserialize(params.APIGWParams)
            this.APIGWParams = obj;
        }

        if (params.CkafkaParams) {
            let obj = new CkafkaParams();
            obj.deserialize(params.CkafkaParams)
            this.CkafkaParams = obj;
        }

    }
}

/**
 * 用来描述需要投递到kafka topic的参数
 * @class
 */
class CkafkaDeliveryParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * ckafka topic name
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * ckafka资源qcs六段式
         * @type {string || null}
         */
        this.ResourceDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.ResourceDescription = 'ResourceDescription' in params ? params.ResourceDescription : null;

    }
}

/**
 * UpdateTarget返回参数结构体
 * @class
 */
class UpdateTargetResponse extends  AbstractModel {
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
 * CreateConnection请求参数结构体
 * @class
 */
class CreateConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器描述
         * @type {ConnectionDescription || null}
         */
        this.ConnectionDescription = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 连接器名称
         * @type {string || null}
         */
        this.ConnectionName = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 使能开关
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 类型
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

        if (params.ConnectionDescription) {
            let obj = new ConnectionDescription();
            obj.deserialize(params.ConnectionDescription)
            this.ConnectionDescription = obj;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.ConnectionName = 'ConnectionName' in params ? params.ConnectionName : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteEventBus请求参数结构体
 * @class
 */
class DeleteEventBusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

    }
}

/**
 * ListEventBuses请求参数结构体
 * @class
 */
class ListEventBusesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 根据哪个字段进行返回结果排序,支持以下字段：AddTime（创建时间）, ModTime（修改时间）
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * 返回数量，默认为20，最大值为100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 以升序还是降序的方式返回结果，可选值 ASC（升序） 和 DESC（降序）
         * @type {string || null}
         */
        this.Order = null;

        /**
         * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。
         * @type {Array.<Filter> || null}
         */
        this.Filters = null;

        /**
         * 分页偏移量，默认为0。
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
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Order = 'Order' in params ? params.Order : null;

        if (params.Filters) {
            this.Filters = new Array();
            for (let z in params.Filters) {
                let obj = new Filter();
                obj.deserialize(params.Filters[z]);
                this.Filters.push(obj);
            }
        }
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * PublishEvent返回参数结构体
 * @class
 */
class PublishEventResponse extends  AbstractModel {
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
 * CreateTransformation返回参数结构体
 * @class
 */
class CreateTransformationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成的转换器id
         * @type {string || null}
         */
        this.TransformationId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransformationId = 'TransformationId' in params ? params.TransformationId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 描述如何数据转换

 * @class
 */
class Transform extends  AbstractModel {
    constructor(){
        super();

        /**
         * 描述如何数据转换
         * @type {Array.<OutputStructParam> || null}
         */
        this.OutputStructs = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OutputStructs) {
            this.OutputStructs = new Array();
            for (let z in params.OutputStructs) {
                let obj = new OutputStructParam();
                obj.deserialize(params.OutputStructs[z]);
                this.OutputStructs.push(obj);
            }
        }

    }
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
* 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
* 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 * @class
 */
class Filter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 一个或者多个过滤值。
         * @type {Array.<string> || null}
         */
        this.Values = null;

        /**
         * 过滤键的名称。
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
        this.Values = 'Values' in params ? params.Values : null;
        this.Name = 'Name' in params ? params.Name : null;

    }
}

/**
 * Connection信息
 * @class
 */
class Connection extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 更新时间
         * @type {string || null}
         */
        this.ModTime = null;

        /**
         * 使能开关
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 创建时间
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 连接器ID
         * @type {string || null}
         */
        this.ConnectionId = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 连接器描述
         * @type {ConnectionDescription || null}
         */
        this.ConnectionDescription = null;

        /**
         * 连接器名称
         * @type {string || null}
         */
        this.ConnectionName = null;

        /**
         * 类型
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
        this.Status = 'Status' in params ? params.Status : null;
        this.ModTime = 'ModTime' in params ? params.ModTime : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ConnectionId = 'ConnectionId' in params ? params.ConnectionId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

        if (params.ConnectionDescription) {
            let obj = new ConnectionDescription();
            obj.deserialize(params.ConnectionDescription)
            this.ConnectionDescription = obj;
        }
        this.ConnectionName = 'ConnectionName' in params ? params.ConnectionName : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * PutEvents请求参数结构体
 * @class
 */
class PutEventsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件列表
         * @type {Array.<Event> || null}
         */
        this.EventList = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.EventList) {
            this.EventList = new Array();
            for (let z in params.EventList) {
                let obj = new Event();
                obj.deserialize(params.EventList[z]);
                this.EventList.push(obj);
            }
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

    }
}

/**
 * DeleteEventBus返回参数结构体
 * @class
 */
class DeleteEventBusResponse extends  AbstractModel {
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
 * GetTransformation请求参数结构体
 * @class
 */
class GetTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 转换器id
         * @type {string || null}
         */
        this.TransformationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.TransformationId = 'TransformationId' in params ? params.TransformationId : null;

    }
}

/**
 * CreateEventBus返回参数结构体
 * @class
 */
class CreateEventBusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteConnection请求参数结构体
 * @class
 */
class DeleteConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器ID
         * @type {string || null}
         */
        this.ConnectionId = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectionId = 'ConnectionId' in params ? params.ConnectionId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

    }
}

/**
 * UpdateTransformation请求参数结构体
 * @class
 */
class UpdateTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 转换器id
         * @type {string || null}
         */
        this.TransformationId = null;

        /**
         * 一个转换规则列表，当前仅限定一个
         * @type {Array.<Transformation> || null}
         */
        this.Transformations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.TransformationId = 'TransformationId' in params ? params.TransformationId : null;

        if (params.Transformations) {
            this.Transformations = new Array();
            for (let z in params.Transformations) {
                let obj = new Transformation();
                obj.deserialize(params.Transformations[z]);
                this.Transformations.push(obj);
            }
        }

    }
}

/**
 * CreateRule返回参数结构体
 * @class
 */
class CreateRuleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TargetDescription描述
 * @class
 */
class TargetDescription extends  AbstractModel {
    constructor(){
        super();

        /**
         * QCS资源六段式，更多参考 [资源六段式](https://cloud.tencent.com/document/product/598/10606)
         * @type {string || null}
         */
        this.ResourceDescription = null;

        /**
         * 云函数参数
         * @type {SCFParams || null}
         */
        this.SCFParams = null;

        /**
         * Ckafka参数
         * @type {CkafkaTargetParams || null}
         */
        this.CkafkaTargetParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResourceDescription = 'ResourceDescription' in params ? params.ResourceDescription : null;

        if (params.SCFParams) {
            let obj = new SCFParams();
            obj.deserialize(params.SCFParams)
            this.SCFParams = obj;
        }

        if (params.CkafkaTargetParams) {
            let obj = new CkafkaTargetParams();
            obj.deserialize(params.CkafkaTargetParams)
            this.CkafkaTargetParams = obj;
        }

    }
}

/**
 * DeleteTransformation返回参数结构体
 * @class
 */
class DeleteTransformationResponse extends  AbstractModel {
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
 * DeleteTransformation请求参数结构体
 * @class
 */
class DeleteTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 转换器id
         * @type {string || null}
         */
        this.TransformationId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.TransformationId = 'TransformationId' in params ? params.TransformationId : null;

    }
}

/**
 * GetEventBus请求参数结构体
 * @class
 */
class GetEventBusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;

    }
}

/**
 * UpdateConnection请求参数结构体
 * @class
 */
class UpdateConnectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器ID
         * @type {string || null}
         */
        this.ConnectionId = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 使能开关
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 描述
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 连接器名称
         * @type {string || null}
         */
        this.ConnectionName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectionId = 'ConnectionId' in params ? params.ConnectionId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ConnectionName = 'ConnectionName' in params ? params.ConnectionName : null;

    }
}

/**
 * DeleteTarget请求参数结构体
 * @class
 */
class DeleteTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 事件目标ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 事件规则ID
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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * Ckafka 连接器参数
 * @class
 */
class CkafkaParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * kafka offset
         * @type {string || null}
         */
        this.Offset = null;

        /**
         * ckafka  topic
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;

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
         * 事件规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 使能开关。
         * @type {boolean || null}
         */
        this.Enable = null;

        /**
         * 规则描述，不限字符类型，200字符描述以内。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 事件规则名称，只能包含字母、数字、下划线、连字符，以字母开头，以数字或字母结尾，2~60个字符
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
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.Enable = 'Enable' in params ? params.Enable : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RuleName = 'RuleName' in params ? params.RuleName : null;

    }
}

/**
 * Transform输出参数
 * @class
 */
class OutputStructParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对应输出json中的key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 可以填json-path也可以支持常量或者内置关键字date类型
         * @type {string || null}
         */
        this.Value = null;

        /**
         * value的数据类型, 可选值: STRING, NUMBER,BOOLEAN,NULL,SYS_VARIABLE,JSONPATH
         * @type {string || null}
         */
        this.ValueType = null;

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
        this.ValueType = 'ValueType' in params ? params.ValueType : null;

    }
}

/**
 * CheckTransformation请求参数结构体
 * @class
 */
class CheckTransformationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待处理的json字符串
         * @type {string || null}
         */
        this.Input = null;

        /**
         * 一个转换规则列表
         * @type {Array.<Transformation> || null}
         */
        this.Transformations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Input = 'Input' in params ? params.Input : null;

        if (params.Transformations) {
            this.Transformations = new Array();
            for (let z in params.Transformations) {
                let obj = new Transformation();
                obj.deserialize(params.Transformations[z]);
                this.Transformations.push(obj);
            }
        }

    }
}

/**
 * UpdateConnection返回参数结构体
 * @class
 */
class UpdateConnectionResponse extends  AbstractModel {
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
 * GetRule请求参数结构体
 * @class
 */
class GetRuleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 事件规则ID
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
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;

    }
}

/**
 * UpdateTarget请求参数结构体
 * @class
 */
class UpdateTargetRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件集ID
         * @type {string || null}
         */
        this.EventBusId = null;

        /**
         * 事件规则ID
         * @type {string || null}
         */
        this.RuleId = null;

        /**
         * 事件目标ID
         * @type {string || null}
         */
        this.TargetId = null;

        /**
         * 开启批量投递使能
         * @type {boolean || null}
         */
        this.EnableBatchDelivery = null;

        /**
         * 批量投递最长等待时间
         * @type {number || null}
         */
        this.BatchTimeout = null;

        /**
         * 批量投递最大事件条数
         * @type {number || null}
         */
        this.BatchEventCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventBusId = 'EventBusId' in params ? params.EventBusId : null;
        this.RuleId = 'RuleId' in params ? params.RuleId : null;
        this.TargetId = 'TargetId' in params ? params.TargetId : null;
        this.EnableBatchDelivery = 'EnableBatchDelivery' in params ? params.EnableBatchDelivery : null;
        this.BatchTimeout = 'BatchTimeout' in params ? params.BatchTimeout : null;
        this.BatchEventCount = 'BatchEventCount' in params ? params.BatchEventCount : null;

    }
}

/**
 * eb event信息
 * @class
 */
class Event extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件源的信息,新产品上报必须符合EB的规范
         * @type {string || null}
         */
        this.Source = null;

        /**
         * 事件数据，内容由创建事件的系统来控制，当前datacontenttype仅支持application/json;charset=utf-8，所以该字段是json字符串
         * @type {string || null}
         */
        this.Data = null;

        /**
         * 事件类型，可自定义，选填。云服务默认写 COS:Created:PostObject，用“：”分割类型字段
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 事件来源详细描述，可自定义，选填。云服务默认为标准qcs资源表示语法：qcs::dts:ap-guangzhou:appid/uin:xxx
         * @type {string || null}
         */
        this.Subject = null;

        /**
         * 事件发生的毫秒时间戳，
time.Now().UnixNano()/1e6
         * @type {number || null}
         */
        this.Time = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Source = 'Source' in params ? params.Source : null;
        this.Data = 'Data' in params ? params.Data : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Subject = 'Subject' in params ? params.Subject : null;
        this.Time = 'Time' in params ? params.Time : null;

    }
}

/**
 * UpdateEventBus返回参数结构体
 * @class
 */
class UpdateEventBusResponse extends  AbstractModel {
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
 * APIGWParams描述
 * @class
 */
class APIGWParams extends  AbstractModel {
    constructor(){
        super();

        /**
         * HTTPS
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * POST
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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.Method = 'Method' in params ? params.Method : null;

    }
}

module.exports = {
    ListConnectionsResponse: ListConnectionsResponse,
    GetEventBusResponse: GetEventBusResponse,
    RetryPolicy: RetryPolicy,
    CkafkaTargetParams: CkafkaTargetParams,
    ListConnectionsRequest: ListConnectionsRequest,
    DeleteRuleRequest: DeleteRuleRequest,
    UpdateRuleResponse: UpdateRuleResponse,
    CreateTargetRequest: CreateTargetRequest,
    DeleteTargetResponse: DeleteTargetResponse,
    Extraction: Extraction,
    TargetBrief: TargetBrief,
    ListRulesResponse: ListRulesResponse,
    CreateTargetResponse: CreateTargetResponse,
    CheckRuleRequest: CheckRuleRequest,
    GetRuleResponse: GetRuleResponse,
    CreateConnectionResponse: CreateConnectionResponse,
    EventBus: EventBus,
    ListTargetsRequest: ListTargetsRequest,
    Transformation: Transformation,
    Target: Target,
    ListRulesRequest: ListRulesRequest,
    SCFParams: SCFParams,
    DeadLetterConfig: DeadLetterConfig,
    UpdateTransformationResponse: UpdateTransformationResponse,
    UpdateEventBusRequest: UpdateEventBusRequest,
    CreateEventBusRequest: CreateEventBusRequest,
    PutEventsResponse: PutEventsResponse,
    CreateRuleRequest: CreateRuleRequest,
    TextParams: TextParams,
    DeleteConnectionResponse: DeleteConnectionResponse,
    DeleteRuleResponse: DeleteRuleResponse,
    GetTransformationResponse: GetTransformationResponse,
    Rule: Rule,
    CreateTransformationRequest: CreateTransformationRequest,
    PublishEventRequest: PublishEventRequest,
    EtlFilter: EtlFilter,
    CheckTransformationResponse: CheckTransformationResponse,
    ListTargetsResponse: ListTargetsResponse,
    ListEventBusesResponse: ListEventBusesResponse,
    CheckRuleResponse: CheckRuleResponse,
    ConnectionDescription: ConnectionDescription,
    CkafkaDeliveryParams: CkafkaDeliveryParams,
    UpdateTargetResponse: UpdateTargetResponse,
    CreateConnectionRequest: CreateConnectionRequest,
    DeleteEventBusRequest: DeleteEventBusRequest,
    ListEventBusesRequest: ListEventBusesRequest,
    PublishEventResponse: PublishEventResponse,
    CreateTransformationResponse: CreateTransformationResponse,
    Transform: Transform,
    Filter: Filter,
    Connection: Connection,
    PutEventsRequest: PutEventsRequest,
    DeleteEventBusResponse: DeleteEventBusResponse,
    GetTransformationRequest: GetTransformationRequest,
    CreateEventBusResponse: CreateEventBusResponse,
    DeleteConnectionRequest: DeleteConnectionRequest,
    UpdateTransformationRequest: UpdateTransformationRequest,
    CreateRuleResponse: CreateRuleResponse,
    TargetDescription: TargetDescription,
    DeleteTransformationResponse: DeleteTransformationResponse,
    DeleteTransformationRequest: DeleteTransformationRequest,
    GetEventBusRequest: GetEventBusRequest,
    UpdateConnectionRequest: UpdateConnectionRequest,
    DeleteTargetRequest: DeleteTargetRequest,
    CkafkaParams: CkafkaParams,
    UpdateRuleRequest: UpdateRuleRequest,
    OutputStructParam: OutputStructParam,
    CheckTransformationRequest: CheckTransformationRequest,
    UpdateConnectionResponse: UpdateConnectionResponse,
    GetRuleRequest: GetRuleRequest,
    UpdateTargetRequest: UpdateTargetRequest,
    Event: Event,
    UpdateEventBusResponse: UpdateEventBusResponse,
    APIGWParams: APIGWParams,

}

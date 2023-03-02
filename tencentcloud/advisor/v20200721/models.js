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
 * DescribeStrategies返回参数结构体
 * @class
 */
class DescribeStrategiesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 评估项列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeStrategie> || null}
         */
        this.Strategies = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Strategies) {
            this.Strategies = new Array();
            for (let z in params.Strategies) {
                let obj = new DescribeStrategie();
                obj.deserialize(params.Strategies[z]);
                this.Strategies.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskStrategyRisks请求参数结构体
 * @class
 */
class DescribeTaskStrategyRisksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 评估项ID
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * 返回数量,默认值为100,最大值为200
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量,默认0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 环境
         * @type {string || null}
         */
        this.Env = null;

        /**
         * 任务类型
         * @type {string || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Env = 'Env' in params ? params.Env : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * 评估项信息
 * @class
 */
class DescribeStrategie extends  AbstractModel {
    constructor(){
        super();

        /**
         * 评估项ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * 评估项名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 评估项描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * 评估项对应产品ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 评估项对应产品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ProductDesc = null;

        /**
         * 评估项优化建议
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Repair = null;

        /**
         * 评估项类别ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * 评估项类别名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * 评估项风险列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DescribeStrategiesCondition> || null}
         */
        this.Conditions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.ProductDesc = 'ProductDesc' in params ? params.ProductDesc : null;
        this.Repair = 'Repair' in params ? params.Repair : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;

        if (params.Conditions) {
            this.Conditions = new Array();
            for (let z in params.Conditions) {
                let obj = new DescribeStrategiesCondition();
                obj.deserialize(params.Conditions[z]);
                this.Conditions.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskStrategyRisks返回参数结构体
 * @class
 */
class DescribeTaskStrategyRisksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 根据此配置，匹配风险实例列表（Risks）对应字段，例如:
{"Response":{"RequestId":"111","RiskFieldsDesc":[{"Field":"InstanceId","FieldName":"ID","FieldType":"string","FieldDict":{}},{"Field":"InstanceName","FieldName":"名称","FieldType":"string","FieldDict":{}},{"Field":"InstanceState","FieldName":"状态","FieldType":"string","FieldDict":{"LAUNCH_FAILED":"创建失败","PENDING":"创建中","REBOOTING":"重启中","RUNNING":"运行中","SHUTDOWN":"停止待销毁","STARTING":"开机中","STOPPED":"关机","STOPPING":"关机中","TERMINATING":"销毁中"}},{"Field":"Zone","FieldName":"可用区","FieldType":"string","FieldDict":{}},{"Field":"PrivateIPAddresses","FieldName":"IP地址(内)","FieldType":"stringSlice","FieldDict":{}},{"Field":"PublicIPAddresses","FieldName":"IP地址(公)","FieldType":"stringSlice","FieldDict":{}},{"Field":"Region","FieldName":"地域","FieldType":"string","FieldDict":{}},{"Field":"Tags","FieldName":"标签","FieldType":"tags","FieldDict":{}}],"RiskTotalCount":3,"Risks":"[{\"InstanceId\":\"ins-xxx1\",\"InstanceName\":\"xxx1\",\"InstanceState\":\"RUNNING\",\"PrivateIPAddresses\":[\"1.17.64.2\"],\"PublicIPAddresses\":null,\"Region\":\"ap-shanghai\",\"Tags\":null,\"Zone\":\"ap-shanghai-2\"},{\"InstanceId\":\"ins-xxx2\",\"InstanceName\":\"xxx2\",\"InstanceState\":\"RUNNING\",\"PrivateIPAddresses\":[\"1.17.64.11\"],\"PublicIPAddresses\":null,\"Region\":\"ap-shanghai\",\"Tags\":null,\"Zone\":\"ap-shanghai-2\"}]","StrategyId":9}}
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RiskFieldsDesc> || null}
         */
        this.RiskFieldsDesc = null;

        /**
         * 评估项ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.StrategyId = null;

        /**
         * 风险实例个数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskTotalCount = null;

        /**
         * 风险实例详情列表，需要json decode
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Risks = null;

        /**
         * 巡检资源数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ResourceCount = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.RiskFieldsDesc) {
            this.RiskFieldsDesc = new Array();
            for (let z in params.RiskFieldsDesc) {
                let obj = new RiskFieldsDesc();
                obj.deserialize(params.RiskFieldsDesc[z]);
                this.RiskFieldsDesc.push(obj);
            }
        }
        this.StrategyId = 'StrategyId' in params ? params.StrategyId : null;
        this.RiskTotalCount = 'RiskTotalCount' in params ? params.RiskTotalCount : null;
        this.Risks = 'Risks' in params ? params.Risks : null;
        this.ResourceCount = 'ResourceCount' in params ? params.ResourceCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 键值对
 * @class
 */
class KeyValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 键名
         * @type {string || null}
         */
        this.Key = null;

        /**
         * 键名对应值
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
 * 风险实例字段描述
 * @class
 */
class RiskFieldsDesc extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段ID
         * @type {string || null}
         */
        this.Field = null;

        /**
         * 字段名称
         * @type {string || null}
         */
        this.FieldName = null;

        /**
         * 字段类型, 
string: 字符串类型，例如"aa"
int: 整形，例如 111
stringSlice : 字符串数组类型，例如["a", "b"]
tags: 标签类型, 例如: [{"Key":"kkk","Value":"vvv"},{"Key":"kkk2","Value":"vvv2"}]
         * @type {string || null}
         */
        this.FieldType = null;

        /**
         * 字段值对应字典
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<KeyValue> || null}
         */
        this.FieldDict = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Field = 'Field' in params ? params.Field : null;
        this.FieldName = 'FieldName' in params ? params.FieldName : null;
        this.FieldType = 'FieldType' in params ? params.FieldType : null;

        if (params.FieldDict) {
            this.FieldDict = new Array();
            for (let z in params.FieldDict) {
                let obj = new KeyValue();
                obj.deserialize(params.FieldDict[z]);
                this.FieldDict.push(obj);
            }
        }

    }
}

/**
 * 评估项警告条件
 * @class
 */
class DescribeStrategiesCondition extends  AbstractModel {
    constructor(){
        super();

        /**
         * 警告条件ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.ConditionId = null;

        /**
         * 警告级别，2:中风险，3:高风险
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 警告级别描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LevelDesc = null;

        /**
         * 警告条件描述
         * @type {string || null}
         */
        this.Desc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConditionId = 'ConditionId' in params ? params.ConditionId : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.LevelDesc = 'LevelDesc' in params ? params.LevelDesc : null;
        this.Desc = 'Desc' in params ? params.Desc : null;

    }
}

/**
 * DescribeStrategies请求参数结构体
 * @class
 */
class DescribeStrategiesRequest extends  AbstractModel {
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

module.exports = {
    DescribeStrategiesResponse: DescribeStrategiesResponse,
    DescribeTaskStrategyRisksRequest: DescribeTaskStrategyRisksRequest,
    DescribeStrategie: DescribeStrategie,
    DescribeTaskStrategyRisksResponse: DescribeTaskStrategyRisksResponse,
    KeyValue: KeyValue,
    RiskFieldsDesc: RiskFieldsDesc,
    DescribeStrategiesCondition: DescribeStrategiesCondition,
    DescribeStrategiesRequest: DescribeStrategiesRequest,

}

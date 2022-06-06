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
 * 连接器操作
 * @class
 */
class EisConnectionOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器操作名称
         * @type {string || null}
         */
        this.OperationName = null;

        /**
         * 连接器展示名称
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 操作是否为触发器
         * @type {boolean || null}
         */
        this.IsTrigger = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OperationName = 'OperationName' in params ? params.OperationName : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.IsTrigger = 'IsTrigger' in params ? params.IsTrigger : null;

    }
}

/**
 * ListEisConnectors请求参数结构体
 * @class
 */
class ListEisConnectorsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器名称,非必输，如输入则按照输入值模糊匹配
         * @type {string || null}
         */
        this.ConnectorName = null;

        /**
         * 分页参数,数据偏移量
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 分页参数,每页显示的条数
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
        this.ConnectorName = 'ConnectorName' in params ? params.ConnectorName : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * 连接器概要信息
 * @class
 */
class EisConnectorSummary extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器名称
         * @type {string || null}
         */
        this.ConnectorName = null;

        /**
         * 连接器展示名称
         * @type {string || null}
         */
        this.DisplayName = null;

        /**
         * 连接器对应企业
         * @type {string || null}
         */
        this.Company = null;

        /**
         * 连接器对应产品
         * @type {string || null}
         */
        this.Product = null;

        /**
         * 连接器版本
         * @type {string || null}
         */
        this.ConnectorVersion = null;

        /**
         * 连接器创建时间
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
        this.ConnectorName = 'ConnectorName' in params ? params.ConnectorName : null;
        this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
        this.Company = 'Company' in params ? params.Company : null;
        this.Product = 'Product' in params ? params.Product : null;
        this.ConnectorVersion = 'ConnectorVersion' in params ? params.ConnectorVersion : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * ListEisConnectorOperations返回参数结构体
 * @class
 */
class ListEisConnectorOperationsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器列表
         * @type {Array.<EisConnectionOperation> || null}
         */
        this.Operations = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Operations) {
            this.Operations = new Array();
            for (let z in params.Operations) {
                let obj = new EisConnectionOperation();
                obj.deserialize(params.Operations[z]);
                this.Operations.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeEisConnectorConfig返回参数结构体
 * @class
 */
class DescribeEisConnectorConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器配置参数描述（json结构），示例如下：
{
    "attributes":{
        "description":"测试", // 连接器的描述
        "displayName":"测试", // 连接器的展示名
        "name":"test", // 连接器的名称
        "version":"1.0.0" // 连接器的版本号
    },
    "properties":[
        {
            "attributes":{
                "displayName":"企业ID", // 参数的展示名
                "name":"para1", // 参数名
                "required":"true", // 是否必填
                "type":"int" // 参数的类型
            }
        },
        {
            "attributes":{
                "displayName":"成员管理密钥",
                "name":"para2",
                "required":"true",
                "type":"float"
            }
        },
        {
            "attributes":{
                "displayName":"应用管理密钥",
                "name":"para3",
                "required":"true",
                "type":"string"
            }
        },
        {
            "attributes":{
                "displayName":"企业ID",
                "name":"para4",
                "required":"true",
                "type":"decimal"
            }
        },
        {
            "attributes":{
                "displayName":"成员管理密钥",
                "name":"para5",
                "required":"true",
                "type":"bool"
            }
        },
        {
            "attributes":{
                "displayName":"应用管理密钥",
                "name":"para6",
                "required":"true",
                "type":"date"
            }
        },
        {
            "attributes":{
                "displayName":"企业ID",
                "name":"para7",
                "required":"true",
                "type":"time"
            }
        },
        {
            "attributes":{
                "displayName":"成员管理密钥",
                "name":"para8",
                "required":"true",
                "type":"datetime"
            }
        },
        {
            "attributes":{
                "displayName":"应用管理密钥",
                "name":"para9",
                "required":"true",
                "type":"map"
            },
            "children":[
                {
                    "attributes":{
                        "displayName":"key",
                        "name":"key",
                        "required":"true",
                        "type":"string"
                    }
                },
                {
                    "attributes":{
                        "displayName":"value",
                        "name":"value",
                        "required":"true",
                        "type":"any"
                    }
                }
            ]
        },
        {
            "attributes":{
                "displayName":"企业ID",
                "name":"para10",
                "required":"true",
                "type":"list" // list，list里元素的类型是结构体，children里是结构体的描述
            },
            "children":[
                {
                    "attributes":{
                        "displayName":"field1",
                        "name":"field1",
                        "required":"true",
                        "type":"string"
                    }
                },
                {
                    "attributes":{
                        "displayName":"field2",
                        "name":"field2",
                        "required":"true",
                        "type":"any"
                    }
                }
            ]
        },
        {
            "attributes":{
                "displayName":"成员管理密钥",
                "name":"para11",
                "required":"true",
                "type":"struct"
            },
            "children":[
                {
                    "attributes":{
                        "displayName":"field1", // 结构体属性的展示名
                        "name":"field1", // 结构体属性的名称
                        "required":"true", // 是否必填
                        "type":"string" // 属性的类型
                    }
                },
                {
                    "attributes":{
                        "displayName":"field2",
                        "name":"field2",
                        "required":"true",
                        "type":"any"
                    }
                }
            ]
        },
        {
            "attributes":{
                "displayName":"应用管理密钥",
                "name":"para12",
                "required":"true",
                "type":"enum"
            },
            "children":[
                {
                    "attributes":{
                        "displayName":"PC", // 枚举值的展示名
                        "name":"PC" // 枚举值的名称
                    }
                },
                {
                    "attributes":{
                        "displayName":"MAC",
                        "name":"MAC"
                    }
                }
            ]
        }
    ]
}
         * @type {string || null}
         */
        this.ConnectorParameter = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectorParameter = 'ConnectorParameter' in params ? params.ConnectorParameter : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ListEisConnectorOperations请求参数结构体
 * @class
 */
class ListEisConnectorOperationsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器名称
         * @type {string || null}
         */
        this.ConnectorName = null;

        /**
         * 连接器版本
         * @type {string || null}
         */
        this.ConnectorVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectorName = 'ConnectorName' in params ? params.ConnectorName : null;
        this.ConnectorVersion = 'ConnectorVersion' in params ? params.ConnectorVersion : null;

    }
}

/**
 * DescribeEisConnectorConfig请求参数结构体
 * @class
 */
class DescribeEisConnectorConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器名称
         * @type {string || null}
         */
        this.ConnectorName = null;

        /**
         * 连接器版本
         * @type {string || null}
         */
        this.ConnectorVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ConnectorName = 'ConnectorName' in params ? params.ConnectorName : null;
        this.ConnectorVersion = 'ConnectorVersion' in params ? params.ConnectorVersion : null;

    }
}

/**
 * ListEisConnectors返回参数结构体
 * @class
 */
class ListEisConnectorsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 连接器总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 连接器列表
         * @type {Array.<EisConnectorSummary> || null}
         */
        this.Connectors = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
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

        if (params.Connectors) {
            this.Connectors = new Array();
            for (let z in params.Connectors) {
                let obj = new EisConnectorSummary();
                obj.deserialize(params.Connectors[z]);
                this.Connectors.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    EisConnectionOperation: EisConnectionOperation,
    ListEisConnectorsRequest: ListEisConnectorsRequest,
    EisConnectorSummary: EisConnectorSummary,
    ListEisConnectorOperationsResponse: ListEisConnectorOperationsResponse,
    DescribeEisConnectorConfigResponse: DescribeEisConnectorConfigResponse,
    ListEisConnectorOperationsRequest: ListEisConnectorOperationsRequest,
    DescribeEisConnectorConfigRequest: DescribeEisConnectorConfigRequest,
    ListEisConnectorsResponse: ListEisConnectorsResponse,

}

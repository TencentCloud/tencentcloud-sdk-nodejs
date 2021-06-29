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

/**
 * 连接器操作
 */
export interface EisConnectionOperation {
  /**
   * 连接器操作名称
   */
  OperationName: string

  /**
   * 连接器展示名称
   */
  DisplayName: string

  /**
   * 操作是否为触发器
   */
  IsTrigger: boolean
}

/**
 * ListEisConnectors请求参数结构体
 */
export interface ListEisConnectorsRequest {
  /**
   * 连接器名称,非必输，如输入则按照输入值模糊匹配
   */
  ConnectorName?: string

  /**
   * 分页参数,数据偏移量
   */
  Offset?: number

  /**
   * 分页参数,每页显示的条数
   */
  Limit?: number
}

/**
 * 连接器概要信息
 */
export interface EisConnectorSummary {
  /**
   * 连接器名称
   */
  ConnectorName: string

  /**
   * 连接器展示名称
   */
  DisplayName: string

  /**
   * 连接器对应企业
   */
  Company: string

  /**
   * 连接器对应产品
   */
  Product: string

  /**
   * 连接器版本
   */
  ConnectorVersion: string

  /**
   * 连接器创建时间
   */
  CreateTime: number
}

/**
 * ListEisConnectorOperations返回参数结构体
 */
export interface ListEisConnectorOperationsResponse {
  /**
   * 连接器列表
   */
  Operations: Array<EisConnectionOperation>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEisConnectorConfig返回参数结构体
 */
export interface DescribeEisConnectorConfigResponse {
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
      */
  ConnectorParameter: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListEisConnectorOperations请求参数结构体
 */
export interface ListEisConnectorOperationsRequest {
  /**
   * 连接器名称
   */
  ConnectorName: string

  /**
   * 连接器版本
   */
  ConnectorVersion: string
}

/**
 * DescribeEisConnectorConfig请求参数结构体
 */
export interface DescribeEisConnectorConfigRequest {
  /**
   * 连接器名称
   */
  ConnectorName: string

  /**
   * 连接器版本
   */
  ConnectorVersion: string
}

/**
 * ListEisConnectors返回参数结构体
 */
export interface ListEisConnectorsResponse {
  /**
   * 连接器总数
   */
  TotalCount: number

  /**
   * 连接器列表
   */
  Connectors: Array<EisConnectorSummary>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

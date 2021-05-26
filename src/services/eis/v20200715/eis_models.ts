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
        "description":"测试",
        "displayName":"test",
        "name":"test",
        "version":"1.0.0"
    },
    "properties":[
        {
            "displayName":"日期",
            "name":"prop1",
            "required":"true",
            "type":"date"
        }
    ],
    "operations":{
        "get-info":[
            {
                "displayName":"para1",
                "name":"para1",
                "required":"true",
                "type":"int"
            },
            {
                "displayName":"para2",
                "name":"para2",
                "required":"true",
                "type":"float"
            },
            {
                "displayName":"para3",
                "name":"para3",
                "required":"true",
                "type":"string"
            },
            {
                "displayName":"para4",
                "name":"para4",
                "required":"true",
                "type":"decimal"
            },
            {
                "displayName":"para5",
                "name":"para5",
                "required":"true",
                "type":"bool"
            },
            {
                "displayName":"para6",
                "name":"para6",
                "required":"true",
                "type":"date"
            },
            {
                "displayName":"para7",
                "name":"para7",
                "required":"true",
                "type":"time"
            },
            {
                "displayName":"para8",
                "name":"para8",
                "required":"true",
                "type":"datetime"
            },
            {
                "displayName":"para9",
                "name":"para9",
                "required":"true",
                "type":"struct",
                "children":[
                    {
                        "displayName":"date",
                        "name":"date",
                        "required":"true",
                        "type":"date"
                    },
                    {
                        "displayName":"time",
                        "name":"time",
                        "required":"true",
                        "type":"time"
                    },
                    {
                        "displayName":"datetime",
                        "name":"datetime",
                        "required":"true",
                        "type":"datetime"
                    }
                ]
            },
            {
                "displayName":"para10",
                "name":"para10",
                "required":"true",
                "type":"list",
                "children":[
                    {
                        "displayName":"value",
                        "name":"value",
                        "required":"true",
                        "type":"string"
                    }
                ]
            },
            {
                "displayName":"para11",
                "name":"para11",
                "required":"true",
                "type":"dict",
                "children":[
                    {
                        "displayName":"key",
                        "name":"key",
                        "required":"true",
                        "type":"string"
                    },
                    {
                        "displayName":"value",
                        "name":"value",
                        "required":"true",
                        "type":"string"
                    }
                ]
            },
            {
                "displayName":"para12",
                "name":"para12",
                "required":"true",
                "type":"enum",
                "children":[
                    {
                        "displayName":"PC",
                        "name":"1"
                    },
                    {
                        "displayName":"Mac",
                        "name":"2"
                    }
                ]
            }
        ]
    }
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

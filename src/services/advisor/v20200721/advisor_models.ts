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
 * DescribeStrategies返回参数结构体
 */
export interface DescribeStrategiesResponse {
  /**
      * 评估项列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Strategies: Array<DescribeStrategie>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskStrategyRisks请求参数结构体
 */
export interface DescribeTaskStrategyRisksRequest {
  /**
   * 评估项ID
   */
  StrategyId: number

  /**
   * 限制数量,默认100
   */
  Limit?: number

  /**
   * 偏移量,默认0
   */
  Offset?: number
}

/**
 * 评估项信息
 */
export interface DescribeStrategie {
  /**
      * 评估项ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  StrategyId: number

  /**
      * 评估项名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 评估项描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Desc: string

  /**
      * 评估项对应产品ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Product: string

  /**
      * 评估项对应产品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductDesc: string

  /**
      * 评估项优化建议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Repair: string

  /**
      * 评估项类别ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupId: number

  /**
      * 评估项类别名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupName: string

  /**
      * 评估项风险列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Conditions: Array<DescribeStrategiesCondition>
}

/**
 * DescribeTaskStrategyRisks返回参数结构体
 */
export interface DescribeTaskStrategyRisksResponse {
  /**
      * 根据此配置，匹配风险实例列表（Risks）对应字段，例如:
{"Response":{"RequestId":"111","RiskFieldsDesc":[{"Field":"InstanceId","FieldName":"ID","FieldType":"string","FieldDict":{}},{"Field":"InstanceName","FieldName":"名称","FieldType":"string","FieldDict":{}},{"Field":"InstanceState","FieldName":"状态","FieldType":"string","FieldDict":{"LAUNCH_FAILED":"创建失败","PENDING":"创建中","REBOOTING":"重启中","RUNNING":"运行中","SHUTDOWN":"停止待销毁","STARTING":"开机中","STOPPED":"关机","STOPPING":"关机中","TERMINATING":"销毁中"}},{"Field":"Zone","FieldName":"可用区","FieldType":"string","FieldDict":{}},{"Field":"PrivateIPAddresses","FieldName":"IP地址(内)","FieldType":"stringSlice","FieldDict":{}},{"Field":"PublicIPAddresses","FieldName":"IP地址(公)","FieldType":"stringSlice","FieldDict":{}},{"Field":"Region","FieldName":"地域","FieldType":"string","FieldDict":{}},{"Field":"Tags","FieldName":"标签","FieldType":"tags","FieldDict":{}}],"RiskTotalCount":3,"Risks":"[{\"InstanceId\":\"ins-xxx1\",\"InstanceName\":\"xxx1\",\"InstanceState\":\"RUNNING\",\"PrivateIPAddresses\":[\"1.17.64.2\"],\"PublicIPAddresses\":null,\"Region\":\"ap-shanghai\",\"Tags\":null,\"Zone\":\"ap-shanghai-2\"},{\"InstanceId\":\"ins-xxx2\",\"InstanceName\":\"xxx2\",\"InstanceState\":\"RUNNING\",\"PrivateIPAddresses\":[\"1.17.64.11\"],\"PublicIPAddresses\":null,\"Region\":\"ap-shanghai\",\"Tags\":null,\"Zone\":\"ap-shanghai-2\"}]","StrategyId":9}}
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskFieldsDesc: Array<RiskFieldsDesc>

  /**
      * 评估项ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  StrategyId: number

  /**
      * 风险实例个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskTotalCount: number

  /**
      * 风险实例详情列表，需要json decode
注意：此字段可能返回 null，表示取不到有效值。
      */
  Risks: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 键值对
 */
export interface KeyValue {
  /**
   * 键名
   */
  Key?: string

  /**
   * 键名对应值
   */
  Value?: string
}

/**
 * 风险实例字段描述
 */
export interface RiskFieldsDesc {
  /**
   * 字段ID
   */
  Field: string

  /**
   * 字段名称
   */
  FieldName: string

  /**
      * 字段类型, 
string: 字符串类型，例如"aa"
int: 整形，例如 111
stringSlice : 字符串数组类型，例如["a", "b"]
tags: 标签类型, 例如: [{"Key":"kkk","Value":"vvv"},{"Key":"kkk2","Value":"vvv2"}]
      */
  FieldType: string

  /**
      * 字段值对应字典
注意：此字段可能返回 null，表示取不到有效值。
      */
  FieldDict: Array<KeyValue>
}

/**
 * 评估项警告条件
 */
export interface DescribeStrategiesCondition {
  /**
      * 警告条件ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConditionId: number

  /**
      * 警告级别，2:中风险，3:高风险
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level: number

  /**
      * 警告级别描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  LevelDesc: string

  /**
   * 警告条件描述
   */
  Desc: string
}

/**
 * DescribeStrategies请求参数结构体
 */
export type DescribeStrategiesRequest = null

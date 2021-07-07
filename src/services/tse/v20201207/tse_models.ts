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
 * DescribeSREInstances请求参数结构体
 */
export interface DescribeSREInstancesRequest {
  /**
   * 请求过滤参数
   */
  Filters?: Array<Filter>

  /**
   * 翻页单页查询限制数量[0,1000], 默认值0
   */
  Limit?: number

  /**
   * 翻页单页偏移量，默认值0
   */
  Offset?: number
}

/**
 * ManageConfig请求参数结构体
 */
export interface ManageConfigRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 配置中心类型（consul、zookeeper、apollo等）
   */
  Type: string

  /**
   * 请求命名 PUT GET DELETE
   */
  Command: string

  /**
   * 配置的Key
   */
  Key: string

  /**
   * 配置的Value
   */
  Value?: string
}

/**
 * 微服务注册引擎实例
 */
export interface SREInstance {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 名称
   */
  Name: string

  /**
   * 版本号
   */
  Edition: string

  /**
   * 状态, 枚举值:creating/create_fail/running/updating/update_fail/restarting/restart_fail/destroying/destroy_fail
   */
  Status: string

  /**
   * 规格ID
   */
  SpecId: string

  /**
   * 副本数
   */
  Replica: number

  /**
   * 类型
   */
  Type: string

  /**
   * Vpc iD
   */
  VpcId: string

  /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetIds: Array<string>

  /**
      * 是否开启持久化存储
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableStorage: boolean

  /**
      * 数据存储方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageType: string

  /**
      * 云硬盘容量
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageCapacity: number

  /**
      * 计费方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  Paymode: string

  /**
      * EKS集群的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  EKSClusterID: string

  /**
      * 集群创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string
}

/**
 * DescribeSREInstanceAccessAddress返回参数结构体
 */
export interface DescribeSREInstanceAccessAddressResponse {
  /**
   * 内网访问地址
   */
  IntranetAddress: string

  /**
   * 公网访问地址
   */
  InternetAddress: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfig请求参数结构体
 */
export interface DescribeConfigRequest {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 配置中心类型（consul、zookeeper、apollo等）
   */
  Type: string

  /**
   * 配置项的节点路径key
   */
  Key: string
}

/**
 * DescribeSREInstances返回参数结构体
 */
export interface DescribeSREInstancesResponse {
  /**
   * 总数量
   */
  TotalCount: number

  /**
   * 实例记录
   */
  Content: Array<SREInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfig返回参数结构体
 */
export interface DescribeConfigResponse {
  /**
   * 配置项或路径key
   */
  Key: string

  /**
   * 配置项的值
   */
  Value: string

  /**
   * 当前key是否为路径
   */
  IsDir: boolean

  /**
   * 当前key下的子路径
   */
  List: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询过滤通用对象
 */
export interface Filter {
  /**
   * 过滤参数名
   */
  Name: string

  /**
   * 过滤参数值
   */
  Values: Array<string>
}

/**
 * DescribeSREInstanceAccessAddress请求参数结构体
 */
export interface DescribeSREInstanceAccessAddressRequest {
  /**
   * 注册引擎实例Id
   */
  InstanceId?: string
}

/**
 * ManageConfig返回参数结构体
 */
export interface ManageConfigResponse {
  /**
      * 对配置中心操作配置之后的返回值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

  /**
      * 操作是否成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  OpResult: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

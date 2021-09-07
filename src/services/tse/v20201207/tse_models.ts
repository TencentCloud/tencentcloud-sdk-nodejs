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

  /**
   * 查询类型
   */
  QueryType?: string
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

  /**
      * 环境配置信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvInfos: Array<EnvInfo>

  /**
      * 引擎所在的区域
注意：此字段可能返回 null，表示取不到有效值。
      */
  EngineRegion: string

  /**
      * 注册引擎是否开启公网
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableInternet: boolean

  /**
      * 私有网络列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcInfos: Array<VpcInfo>

  /**
      * 服务治理相关信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceGovernanceInfos: Array<ServiceGovernanceInfo>
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
   * apollo多环境公网ip
   */
  EnvAddressInfos: Array<EnvAddressInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 环境具体信息
 */
export interface EnvInfo {
  /**
   * 环境名称
   */
  EnvName: string

  /**
   * 环境对应的网络信息
   */
  VpcInfos: Array<VpcInfo>

  /**
   * 云硬盘容量
   */
  StorageCapacity: number

  /**
   * 运行状态
   */
  Status?: string

  /**
   * Admin service 访问地址
   */
  AdminServiceIp?: string

  /**
   * Config service访问地址
   */
  ConfigServiceIp?: string

  /**
   * 是否开启config-server公网
   */
  EnableConfigInternet?: boolean

  /**
   * config-server公网访问地址
   */
  ConfigInternetServiceIp?: string
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
 * 多环境网络信息
 */
export interface EnvAddressInfo {
  /**
   * 环境名
   */
  EnvName: string

  /**
   * 是否开启config公网
   */
  EnableConfigInternet: boolean

  /**
   * config公网ip
   */
  ConfigInternetServiceIp: string
}

/**
 * 私有网络信息
 */
export interface VpcInfo {
  /**
   * Vpc Id
   */
  VpcId: string

  /**
   * 子网ID
   */
  SubnetId: string

  /**
      * 内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntranetAddress?: string
}

/**
 * 服务治理引擎绑定的kubernetes信息
 */
export interface BoundK8SInfo {
  /**
   * 绑定的kubernetes集群ID
   */
  BoundClusterId: string

  /**
      * 绑定的kubernetes的集群类型，分tke和eks两种
注意：此字段可能返回 null，表示取不到有效值。
      */
  BoundClusterType: string
}

/**
 * DescribeSREInstanceAccessAddress请求参数结构体
 */
export interface DescribeSREInstanceAccessAddressRequest {
  /**
   * 注册引擎实例Id
   */
  InstanceId?: string

  /**
   * VPC ID
   */
  VpcId?: string

  /**
   * 子网ID
   */
  SubnetId?: string
}

/**
 * 服务治理相关的信息
 */
export interface ServiceGovernanceInfo {
  /**
   * 引擎所在的地域
   */
  EngineRegion: string

  /**
   * 服务治理引擎绑定的kubernetes集群信息
   */
  BoundK8SInfos?: Array<BoundK8SInfo>

  /**
   * 服务治理引擎绑定的网络信息
   */
  VpcInfos?: Array<VpcInfo>
}

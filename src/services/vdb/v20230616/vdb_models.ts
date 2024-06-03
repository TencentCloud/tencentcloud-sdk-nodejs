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
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 实例ID数组。
   */
  InstanceIds?: Array<string>
  /**
   * 实例名称，支持模糊搜索。
   */
  InstanceNames?: Array<string>
  /**
   * 实例模糊搜索字段。
   */
  InstanceKeys?: Array<string>
  /**
   * 根据状态获取实例， 为空则获取全部非隔离和非下线的实例。
   */
  Status?: Array<string>
  /**
   * 按照引擎筛选实例。
   */
  EngineNames?: Array<string>
  /**
   * 按照版本筛选实例。
   */
  EngineVersions?: Array<string>
  /**
   * 按照创建时间筛选实例。
   */
  CreateAt?: string
  /**
   * 按照可用区筛选实例。
   */
  Zones?: Array<string>
  /**
   * 排序字段。
   */
  OrderBy?: string
  /**
   * 排序方式。
   */
  OrderDirection?: string
  /**
   * 查询开始位置。
   */
  Offset?: number
  /**
   * 列表查询数量。
   */
  Limit?: number
  /**
   * 按照标签筛选实例
   */
  ResourceTags?: Array<Tag>
}

/**
 * 实例信息，用于实例列表
 */
export interface InstanceInfo {
  /**
   * 实例ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 实例自定义名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 用户APPID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 地域。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 可用区。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 产品。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Product?: string
  /**
   * 网络信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Networks?: Array<Network>
  /**
   * 分片信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShardNum?: number
  /**
   * 副本数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplicaNum?: number
  /**
   * CPU.
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * 内存。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   * 磁盘。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Disk?: number
  /**
   * 健康得分。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HealthScore?: number
  /**
   * 异常告警。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Warning?: number
  /**
   * 所属项目。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Project?: string
  /**
   * 所属标签。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceTags?: Array<Tag>
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 资源状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 引擎名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineName?: string
  /**
   * 引擎版本。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineVersion?: string
  /**
   * 计费模式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: number
  /**
   * 差异化扩展信息, json格式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extend?: string
  /**
   * 过期时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredAt?: string
  /**
   * 是否不过期(永久)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsNoExpired?: boolean
  /**
   * 外网地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WanAddress?: string
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 实例列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InstanceInfo>
  /**
   * 实例总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网路信息
 */
export interface Network {
  /**
   * VpcId(VPC网络下有效)
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网Id(VPC网络下有效)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 内网访问IP。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vip?: string
  /**
   * 内网访问Port。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
}

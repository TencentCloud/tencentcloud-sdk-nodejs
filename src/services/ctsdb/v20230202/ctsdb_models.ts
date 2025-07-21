/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * 标签
 */
export interface Tag {
  /**
   * 键
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * 实例网络信息(influxdb)
 */
export interface Network {
  /**
   * vpc id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId: string
  /**
   * vpc subnet id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId: string
  /**
   * vpc ip地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  VIP?: string
  /**
   * vpc port地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
}

/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
  /**
   * 当前页数
   */
  PageNumber: number
  /**
   * 单页大小
   */
  PageSize: number
  /**
   * 查询参数：支持通过实例ID（cluster_id）和实例名称（name）进行过滤查询
   */
  Filters?: Array<Filter>
  /**
   * 排序参数：支持通过创建时间字段（created_at）进行排序，Type可指定为DESC（降序）或ASC（升序）
   */
  Orders?: Array<Order>
}

/**
 * 数据库相关信息
 */
export interface Database {
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterID?: string
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 降冷时间（天）
注意：此字段可能返回 null，表示取不到有效值。
   */
  CoolDownInDays?: number
  /**
   * 数据保留时间（天）
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetentionInDays?: number
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 状态：0: 资源初始化中， 1: 资源创建中， 2: 正常状态， 3: 资源删除中， 4: 资源已删除， 5: 资源禁用中， 6: 资源已禁用， 7: 资源异常，需要人工操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
}

/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
  /**
   * 数据库列表
   */
  Databases?: Array<Database>
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 有效期
 */
export interface Period {
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
}

/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
  /**
   * 数据库参数
   */
  Database: Database
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 分页页面
   */
  PageNumber?: number
}

/**
 * 实例规格信息(influxdb)
 */
export interface Spec {
  /**
   * 1：包年包月、2：按小时计费
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode: number
  /**
   * 请求单元，为0则表示走资源配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestUnit?: number
  /**
   * CPU 核数最大限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  CpuLimit?: number
  /**
   * 内存 最大限制(Gi)
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemoryLimit?: number
  /**
   * 磁盘 最大限制(Gi)
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskLimit?: number
  /**
   * 业务分片数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Shards?: number
  /**
   * 业务节点数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Replicas?: number
}

/**
 * 查询过滤器
 */
export interface Filter {
  /**
   * 过滤参数
   */
  Name?: string
  /**
   * 过滤表达式
   */
  Op?: string
  /**
   * 参与过滤的值
   */
  Values?: Array<string>
}

/**
 * 实例相关信息
 */
export interface Cluster {
  /**
   * 用户APPID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppID?: number
  /**
   * 实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterID?: string
  /**
   * 账号id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountID?: string
  /**
   * 自定义实例名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zones?: string
  /**
   * 网络信息
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Networks?: Array<Network>
  /**
   * 实例规格
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Spec?: Spec
  /**
   * 实例状态：0：运行中,1：创建中 ,16：变配中,17：隔离中,18：待销毁,19：恢复中,20：关机 , 21：销毁中 ,22：已销毁 
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 实例有效期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Period?: Period
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * 产品内部特性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tenant?: Tenant
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 安全组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Security?: Array<string>
}

/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
  /**
   * 当前条件下的总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 符合条件的实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Clusters?: Array<Cluster>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 排序参数，用于排序查询结果
 */
export interface Order {
  /**
   * 排序字段
   */
  Name?: string
  /**
   * 排序方式
   */
  Type?: string
}

/**
 * 产品内部特性
 */
export interface Tenant {
  /**
   * 密码是否已加密
   */
  IsPasswordEncrypted?: boolean
}

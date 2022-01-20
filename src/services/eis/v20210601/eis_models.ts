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
 * ListRuntimesMC返回参数结构体
 */
export interface ListRuntimesMCResponse {
  /**
   * 运行时列表
   */
  Runtimes: Array<RuntimeMC>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 运行时详细信息
 */
export interface RuntimeMC {
  /**
   * 运行时id
   */
  RuntimeId: number

  /**
   * 主账号uin
   */
  Uin: string

  /**
   * 运行时名称，用户输入，同一uin内唯一
   */
  DisplayName: string

  /**
   * 运行时所在地域，tianjin，beijiing，guangzhou等
   */
  Zone: string

  /**
   * 运行时类型：0: sandbox, 1:shared, 2:private
   */
  Type: number

  /**
   * 运行时状态：1:running, 2:deleting, 3:creating, 4:scaling, 5:unavailable, 6:deleted, 7:errored
   */
  Status: number

  /**
   * 运行时创建时间
   */
  CreatedAt: number

  /**
   * 运行时更新时间
   */
  UpdatedAt: number

  /**
   * 运行时资源配置，worker总配额，0:0vCore0G, 1:1vCore2G, 2:2vCore4G, 4:4vCore8G, 8:8vCore16G, 12:12vCore24G, 16:16vCore32G, 100:unlimited
   */
  WorkerSize: number

  /**
   * 运行时资源配置，worker副本数
   */
  WorkerReplica: number

  /**
   * 正在运行的应用实例数量
   */
  RunningInstanceCount: number

  /**
   * 已使用cpu核数
   */
  CpuUsed: number

  /**
   * cpu核数上限
   */
  CpuLimit: number

  /**
   * 已使用内存 MB
   */
  MemoryUsed: number

  /**
   * 内存上限 MB
   */
  MemoryLimit: number
}

/**
 * GetRuntimeResourceMonitorMetricMC返回参数结构体
 */
export interface GetRuntimeResourceMonitorMetricMCResponse {
  /**
   * 指标名称，K8sWorkloadCpuCoreUsed，K8sWorkloadMemUsageBytes，K8sWorkloadNetworkReceiveBytesBw，K8sWorkloadNetworkTransmitBytesBw
   */
  MetricType: string

  /**
   * metric数值列表
   */
  Values: Array<MetricValueMC>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRuntimeDeployedInstancesMC请求参数结构体
 */
export interface ListRuntimeDeployedInstancesMCRequest {
  /**
   * 运行时id
   */
  RuntimeId: number

  /**
   * 最大请求数量
   */
  Limit: number

  /**
   * 请求偏移量
   */
  Offset: number

  /**
   * 排序类型：1:创建时间排序, 2:更新时间排序（默认）
   */
  SortType: number

  /**
   * 排序方式：asc，desc（默认）
   */
  Sort: string

  /**
   * 运行时地域
   */
  Zone: string
}

/**
 * ListDeployableRuntimesMC返回参数结构体
 */
export interface ListDeployableRuntimesMCResponse {
  /**
   * 运行时列表
   */
  Runtimes: Array<AbstractRuntimeMC>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetRuntimeMC返回参数结构体
 */
export interface GetRuntimeMCResponse {
  /**
   * 运行时详情
   */
  Runtime: RuntimeMC

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDeployableRuntimesMC请求参数结构体
 */
export type ListDeployableRuntimesMCRequest = null

/**
 * ListRuntimesMC请求参数结构体
 */
export type ListRuntimesMCRequest = null

/**
 * GetRuntimeMC请求参数结构体
 */
export interface GetRuntimeMCRequest {
  /**
   * 运行时id
   */
  RuntimeId: number

  /**
   * 运行时地域
   */
  Zone: string
}

/**
 * GetMonitorMetricResponse
 */
export interface MetricValueMC {
  /**
      * 时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  Time: number

  /**
      * 对应的value值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Val: string
}

/**
 * GetRuntimeResourceMonitorMetricMC请求参数结构体
 */
export interface GetRuntimeResourceMonitorMetricMCRequest {
  /**
   * 运行时id
   */
  RuntimeId: number

  /**
   * 起始时间
   */
  StartTime: number

  /**
   * 结束时间
   */
  EndTime: number

  /**
   * 指标类型：0:CPU, 1:MemUsageBytes, 2:K8sWorkloadNetworkReceiveBytesBw, 3:K8sWorkloadNetworkTransmitBytesBw
   */
  MetricType: number

  /**
   * 是否返回百分比数值，仅支持CPU，Memory
   */
  RateType: boolean

  /**
   * 采样粒度：60(s), 300(s), 3600(s), 86400(s)
   */
  Interval?: number
}

/**
 * 运行时精简信息
 */
export interface AbstractRuntimeMC {
  /**
   * 运行时id
   */
  RuntimeId: number

  /**
   * 运行时名称，用户输入，同一uin内唯一
   */
  DisplayName: string

  /**
   * 运行时类型：0: sandbox, 1:shared, 2:private
   */
  Type: number

  /**
   * 运行时所在地域，tianjin，beijiing，guangzhou等
   */
  Zone: string

  /**
   * 运行时所在地域，tianjin，beijiing，guangzhou等（同Zone）
   */
  Area: string

  /**
   * 运行时应用listener地址后缀
   */
  Addr: string
}

/**
 * ListRuntimeDeployedInstancesMC返回参数结构体
 */
export interface ListRuntimeDeployedInstancesMCResponse {
  /**
   * 运行时所部属的应用实例列表
   */
  Instances: Array<RuntimeDeployedInstanceMC>

  /**
   * 满足条件的记录总数，用于分页器
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 运行时部署的应用实例详情
 */
export interface RuntimeDeployedInstanceMC {
  /**
   * 项目id
   */
  GroupId: number

  /**
   * 项目名称
   */
  GroupName: string

  /**
   * 应用id
   */
  ProjectId: number

  /**
   * 应用名称
   */
  ProjectName: string

  /**
   * 应用实例id
   */
  InstanceId: number

  /**
   * 应用实例版本
   */
  InstanceVersion: number

  /**
   * 应用实例创建时间
   */
  InstanceCreatedAt: number

  /**
   * 应用实例部署状态. 0:running, 1:deleting
   */
  Status: number

  /**
   * 应用实例部署创建时间
   */
  CreatedAt: number

  /**
   * 应用实例部署更新时间
   */
  UpdatedAt: number

  /**
   * 应用类型：0:NormalApp普通应用 1:TemplateApp模板应用 2:LightApp轻应用 3:MicroConnTemplate微连接模板 4:MicroConnApp微连接应用
   */
  ProjectType: number
}

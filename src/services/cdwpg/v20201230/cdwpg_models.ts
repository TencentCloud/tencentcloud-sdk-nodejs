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
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceInfo请求参数结构体
 */
export interface DescribeInstanceInfoRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * 集群状态抽象后的结构体
 */
export interface InstanceStateInfo {
  /**
   * 集群状态，例如：Serving
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceState: string
  /**
   * 集群操作创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowCreateTime: string
  /**
   * 集群操作名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowName: string
  /**
   * 集群操作进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowProgress: number
  /**
   * 集群状态描述，例如：运行中
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStateDesc: string
  /**
   * 集群流程错误信息，例如：“创建失败，资源不足”
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowMsg: string
  /**
   * 当前步骤的名称，例如：”购买资源中“
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessName: string
  /**
   * 集群是否有备份中任务，有为1,无为0
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStatus?: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestId?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupOpenStatus?: number
}

/**
 * DescribeInstanceState请求参数结构体
 */
export interface DescribeInstanceStateRequest {
  /**
   * 集群实例名称
   */
  InstanceId: string
}

/**
 * 计费时间参数
 */
export interface ChargeProperties {
  /**
   * 1-需要自动续期
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag: number
  /**
   * 订单时间范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeSpan: number
  /**
   * 时间单位，一般为h和m
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeUnit: string
  /**
   * 计费类型0-按量计费，1-包年包月
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: number
  /**
   * PREPAID、POSTPAID_BY_HOUR
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeType?: string
}

/**
 * DestroyInstanceByApi请求参数结构体
 */
export interface DestroyInstanceByApiRequest {
  /**
   * 实例名称，例如"cdwpg-xxxx"
   */
  InstanceId: string
}

/**
 * 集群节点信息
 */
export type InstanceNodeGroup = null

/**
 * 磁盘规格
 */
export interface CBSSpec {
  /**
   * 盘类型
   */
  DiskType: string
  /**
   * 大小
   */
  DiskSize: number
  /**
   * 个数
   */
  DiskCount: number
}

/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 新修改的实例名称
   */
  InstanceName: string
}

/**
 * DescribeSimpleInstances返回参数结构体
 */
export interface DescribeSimpleInstancesResponse {
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstancesList?: Array<InstanceSimpleInfoNew>
  /**
   * -
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源信息
 */
export interface ResourceInfo {
  /**
   * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecName: string
  /**
   * 资源数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count: number
  /**
   * 磁盘信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskSpec: CBSSpecInfo
  /**
   * 资源类型，DATA
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
}

/**
 * 云原生实例详情
 */
export interface InstanceInfo {
  /**
   * ID值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID: number
  /**
   * cdwpg-cn或者其他
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType: string
  /**
   * cdwpg-cn或者其他
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName: string
  /**
   * Running
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 运行中
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusDesc: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStateInfo: InstanceStateInfo
  /**
   * -
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceID: string
  /**
   * 2022-09-05 20:00:01
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * ap-chongqing
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * ap
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone: string
  /**
   * region
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionDesc: string
  /**
   * zone
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneDesc: string
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags: Array<Tag>
  /**
   * v3
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version: string
  /**
   * 字符集
注意：此字段可能返回 null，表示取不到有效值。
   */
  Charset: string
  /**
   * 引擎版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineVersion: string
  /**
   * GTM节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  GTMNodes: Array<InstanceNodeGroup>
  /**
   * CN节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  CNNodes: Array<InstanceNodeGroup>
  /**
   * DN节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DNNodes: Array<InstanceNodeGroup>
  /**
   * 备份存储
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStorage: Array<InstanceNodeGroup>
  /**
   * FN节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FNNodes: Array<InstanceNodeGroup>
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 实例总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 实例数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstancesList: Array<InstanceInfo>
  /**
   * -
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源规格
 */
export interface ResourceSpecNew {
  /**
   * 资源名称
   */
  SpecName: string
  /**
   * 资源数
   */
  Count: number
  /**
   * 磁盘信息
   */
  DiskSpec: CBSSpec
  /**
   * 资源类型，DATA
   */
  Type: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 搜索的集群id名称
   */
  SearchInstanceId?: string
  /**
   * 搜索的集群name
   */
  SearchInstanceName?: string
  /**
   * 分页参数，第一页为0，第二页为10
   */
  Offset?: number
  /**
   * 分页参数，分页步长，默认为10
   */
  Limit?: number
  /**
   * 搜索标签列表
   */
  SearchTags?: Array<SearchTags>
}

/**
 * CreateInstanceByApi返回参数结构体
 */
export interface CreateInstanceByApiResponse {
  /**
   * 流程ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: string
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群信息
 */
export interface SimpleInstanceInfo {
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserVPCID?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserSubnetID?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessInfo?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeProperties?: ChargeProperties
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources?: Array<ResourceInfo>
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
}

/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
  /**
   * 实例描述信息
   */
  InstanceInfo: InstanceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyInstanceByApi返回参数结构体
 */
export interface DestroyInstanceByApiResponse {
  /**
   * 销毁流程Id
   */
  FlowId?: string
  /**
   * 错误信息
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 磁盘信息
 */
export interface CBSSpecInfo {
  /**
   * 盘类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskType: string
  /**
   * 大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskSize: number
  /**
   * 个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskCount: number
}

/**
 * CreateInstanceByApi请求参数结构体
 */
export interface CreateInstanceByApiRequest {
  /**
   * 实例名称
   */
  InstanceName: string
  /**
   * 可用区
   */
  Zone: string
  /**
   * 私有网络
   */
  UserVPCId: string
  /**
   * 子网
   */
  UserSubnetId: string
  /**
   * 计费方式
   */
  ChargeProperties: ChargeProperties
  /**
   * 集群密码
   */
  AdminPassword: string
  /**
   * 资源信息
   */
  Resources: Array<ResourceSpecNew>
  /**
   * 标签列表
   */
  Tags?: Tag
  /**
   * 版本
   */
  ProductVersion?: string
}

/**
 * 列表页搜索的标记列表
 */
export interface SearchTags {
  /**
   * 标签的键
   */
  TagKey?: string
  /**
   * 标签的值
   */
  TagValue?: string
  /**
   * 1表示只输入标签的键，没有输入值；0表示输入键时且输入值
   */
  AllValue?: number
}

/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * 标签描述
 */
export interface Tag {
  /**
   * 标签的键
   */
  TagKey: string
  /**
   * 标签的值
   */
  TagValue: string
}

/**
 * DescribeInstanceState返回参数结构体
 */
export interface DescribeInstanceStateResponse {
  /**
   * 集群状态，例如：Serving
   */
  InstanceState?: string
  /**
   * 集群操作创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowCreateTime?: string
  /**
   * 集群操作名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowName?: string
  /**
   * 集群操作进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowProgress?: number
  /**
   * 集群状态描述，例如：运行中
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStateDesc?: string
  /**
   * 集群流程错误信息，例如：“创建失败，资源不足”
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowMsg?: string
  /**
   * 当前步骤的名称，例如：”购买资源中“
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessName?: string
  /**
   * 集群备份任务开启状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStatus?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 精简集群信息
 */
export interface InstanceSimpleInfoNew {
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionId?: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionDesc?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneId?: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneDesc?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessInfo?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayMode?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: boolean
}

/**
 * DescribeSimpleInstances请求参数结构体
 */
export interface DescribeSimpleInstancesRequest {
  /**
   * 11
   */
  SearchInstanceId?: string
  /**
   * 11
   */
  SearchInstanceName?: string
  /**
   * 11
   */
  Offset?: number
  /**
   * 11
   */
  Limit?: number
  /**
   * 11
   */
  SearchTags?: Array<string>
}

/**
 * DescribeInstanceInfo返回参数结构体
 */
export interface DescribeInstanceInfoResponse {
  /**
   * 1
   */
  SimpleInstanceInfo?: SimpleInstanceInfo
  /**
   * 1
   */
  ErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

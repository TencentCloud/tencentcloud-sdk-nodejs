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
 * 网络信息
 */
export interface Network {
  /**
   * VpcId(VPC网络下有效)
   */
  VpcId?: string
  /**
   * 子网Id(VPC网络下有效)。
   */
  SubnetId?: string
  /**
   * 内网访问IP。
   */
  Vip?: string
  /**
   * 内网访问Port。
   */
  Port?: number
  /**
   * 旧 ip 保留时长，单位天
   */
  PreserveDuration?: number
  /**
   * 旧 ip 到期时间
   */
  ExpireTime?: string
}

/**
 * AssociateSecurityGroups返回参数结构体
 */
export interface AssociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组出站规则
 */
export interface Outbound {
  /**
   * 策略，ACCEPT或者DROP。
   */
  Action?: string
  /**
   * 地址组id代表的地址集合。
   */
  AddressModule?: string
  /**
   * 来源Ip或Ip段，例如192.168.0.0/16。
   */
  CidrIp?: string
  /**
   * 描述。
   */
  Desc?: string
  /**
   * 网络协议，支持udp、tcp等。
   */
  IpProtocol?: string
  /**
   * 端口。
   */
  PortRange?: string
  /**
   * 服务组id代表的协议和端口集合。
   */
  ServiceModule?: string
  /**
   * 安全组id代表的地址集合。
   */
  Id?: string
}

/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
  /**
   * 实例ID，格式如：vdb-c1nl9***。
   */
  InstanceId: string
}

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
   * @deprecated
   */
  EngineNames?: Array<string>
  /**
   * 按照版本筛选实例。
   */
  EngineVersions?: Array<string>
  /**
   * 按照api版本筛选实例
   */
  ApiVersions?: Array<string>
  /**
   * 按照创建时间筛选实例。
   */
  CreateAt?: string
  /**
   * 按照可用区筛选实例。
   * @deprecated
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
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
  /**
   * 要绑定的安全组 ID，类似sg-efil7***。
   */
  SecurityGroupIds: Array<string>
  /**
   * 实例 ID，格式如：vdb-c1nl9***，支持指定多个实例
   */
  InstanceIds: Array<string>
}

/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
  /**
   * 要绑定的安全组 ID，类似sg-efil****。
   */
  SecurityGroupIds: string
  /**
   * 实例 ID，格式如：vdb-c1nl****，支持指定多个实例。
   */
  InstanceIds: Array<string>
}

/**
 * DescribeInstanceNodes返回参数结构体
 */
export interface DescribeInstanceNodesResponse {
  /**
   * 实例pod列表。
   */
  Items?: Array<NodeInfo>
  /**
   * 查询结果总数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组规则
 */
export interface SecurityGroup {
  /**
   * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss。
   */
  CreateTime?: string
  /**
   * 项目ID。
   */
  ProjectId?: string
  /**
   * 安全组ID。
   */
  SecurityGroupId?: string
  /**
   * 安全组名称。
   */
  SecurityGroupName?: string
  /**
   * 安全组备注。
   */
  SecurityGroupRemark?: string
  /**
   * 出站规则。
   */
  Outbound?: Array<Outbound>
  /**
   * 入站规则。
   */
  Inbound?: Array<Inbound>
  /**
   * 修改时间，时间格式：yyyy-mm-dd hh:mm:ss。
   */
  UpdateTime?: string
}

/**
 * ModifyDBInstanceSecurityGroups返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组入站规则
 */
export interface Inbound {
  /**
   * 策略，ACCEPT或者DROP。
   */
  Action?: string
  /**
   * 地址组id代表的地址集合。
   */
  AddressModule?: string
  /**
   * 来源Ip或Ip段，例如192.168.0.0/16。
   */
  CidrIp?: string
  /**
   * 描述。
   */
  Desc?: string
  /**
   * 网络协议，支持udp、tcp等。
   */
  IpProtocol?: string
  /**
   * 端口。
   */
  PortRange?: string
  /**
   * 服务组id代表的协议和端口集合。
   */
  ServiceModule?: string
  /**
   * 安全组id代表的地址集合。
   */
  Id?: string
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DescribeDBSecurityGroups返回参数结构体
 */
export interface DescribeDBSecurityGroupsResponse {
  /**
   * 安全组规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Groups?: Array<SecurityGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateSecurityGroups返回参数结构体
 */
export interface DisassociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceNodes请求参数结构体
 */
export interface DescribeInstanceNodesRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * limit
   */
  Limit?: number
  /**
   * offset
   */
  Offset?: number
  /**
   * component
   */
  Component?: string
}

/**
 * 实例信息，用于实例列表
 */
export interface InstanceInfo {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 实例自定义名称。
   */
  Name?: string
  /**
   * 用户APPID。
   */
  AppId?: number
  /**
   * 地域。
   */
  Region?: string
  /**
   * 可用区。
   */
  Zone?: string
  /**
   * 产品。
   */
  Product?: string
  /**
   * 网络信息。
   */
  Networks?: Array<Network>
  /**
   * 分片信息。
   */
  ShardNum?: number
  /**
   * 副本数。
   */
  ReplicaNum?: number
  /**
   * CPU.
   */
  Cpu?: number
  /**
   * 内存。
   */
  Memory?: number
  /**
   * 磁盘。
   */
  Disk?: number
  /**
   * 健康得分。
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  HealthScore?: number
  /**
   * 异常告警。
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Warning?: number
  /**
   * 所属项目。
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Project?: string
  /**
   * 所属标签。
   */
  ResourceTags?: Array<Tag>
  /**
   * 创建时间。
   */
  CreatedAt?: string
  /**
   * 资源状态。
   */
  Status?: string
  /**
   * 引擎名称。
   */
  EngineName?: string
  /**
   * 引擎版本。
   */
  EngineVersion?: string
  /**
   * api版本
   */
  ApiVersion?: string
  /**
   * 计费模式。
   */
  PayMode?: number
  /**
   * 差异化扩展信息, json格式。
   */
  Extend?: string
  /**
   * 过期时间。
   */
  ExpiredAt?: string
  /**
   * 是否不过期(永久)。
   */
  IsNoExpired?: boolean
  /**
   * 外网地址。
   */
  WanAddress?: string
  /**
   * 隔离时间
   */
  IsolateAt?: string
  /**
   * 是否自动续费。0: 不自动续费(可以支持特权不停服)；1:自动续费；2:到期不续费.
   */
  AutoRenew?: number
}

/**
 * 实例pod信息， pod 名称
 */
export interface NodeInfo {
  /**
   * Pod名称。
   */
  Name?: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 实例列表。
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
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
  /**
   * 要修改的安全组ID列表，一个或者多个安全组 ID 组成的数组。
   */
  SecurityGroupIds: Array<string>
  /**
   * 实例ID，格式如：vdb-c9s3****。
   */
  InstanceIds: Array<string>
}

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
 * TerminateInstances请求参数结构体
 */
export interface TerminateInstancesRequest {
  /**
   * <p>实例ID列表，最多100个。</p>
   */
  InstanceIds: Array<string>
}

/**
 * DescribeInstanceTypes返回参数结构体
 */
export interface DescribeInstanceTypesResponse {
  /**
   * 机型配额列表。
   */
  InstanceTypeQuotaSet?: Array<InstanceTypeQuota>
  /**
   * 返回记录数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateNetworkInstances请求参数结构体
 */
export interface DescribePrivateNetworkInstancesRequest {
  /**
   * 私网实例Id
   */
  NetworkInstanceId?: string
  /**
   * 新实例名称
   */
  NetworkInstanceName?: string
  /**
   * 可用区ID
   */
  ZoneId?: string
  /**
   * 分页偏移量，默认0
   */
  Offset?: number
  /**
   * 每页数量，默认 20，最大 100
   */
  Limit?: number
}

/**
 * DescribePublicNetworkInstances返回参数结构体
 */
export interface DescribePublicNetworkInstancesResponse {
  /**
   * 公网实例总数
   */
  TotalCount?: number
  /**
   * 公网实例集合
   */
  PublicNetworkInstanceSet?: Array<PublicNetworkInstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePublicNetworkInstance请求参数结构体
 */
export interface DeletePublicNetworkInstanceRequest {
  /**
   * 公网实例 ID
   */
  NetworkInstanceId: string
}

/**
 * CreateEdgeNodeService返回参数结构体
 */
export interface CreateEdgeNodeServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInstances请求参数结构体
 */
export interface CreateInstancesRequest {
  /**
   * <p>可用区代码，如 ap-guangzhou-1。</p>
   */
  Zone: string
  /**
   * <p>机型规格，如 BMS5.MEDIUM8。</p>
   */
  InstanceType: string
  /**
   * <p>内网网络实例ID，格式如 net-xxx。</p>
   */
  PrivateNetworkId: string
  /**
   * <p>公网网络实例ID，格式如 net-xxx。</p>
   */
  PublicNetworkId: string
  /**
   * <p>实例名称。</p>
   */
  InstanceName?: string
  /**
   * <p>镜像ID，如 img-centos-7.9。</p>
   */
  ImageId?: string
  /**
   * <p>创建数量，默认1，最大50。</p>
   */
  InstanceCount?: number
  /**
   * <p>登录密码，与SSHKey二选一</p>
   */
  Password?: string
  /**
   * <p>SSH密钥公钥字符串，与Password二选一</p>
   */
  SSHKey?: string
  /**
   * <p>镜像版本号，仅公共镜像有版本概念。</p>
   * @deprecated
   */
  VersionNumber?: string
  /**
   * <p>是否启用公网IPv6，默认false。启用后系统会在分配IPv4后额外分配一个IPv6地址。</p>
   * @deprecated
   */
  EnableIpv6?: boolean
}

/**
 * DescribeInstanceTypes请求参数结构体
 */
export interface DescribeInstanceTypesRequest {
  /**
   * 可用区代码，如 ap-guangzhou-1；不传则返回账号下所有可用区的机型。
   */
  Zone?: string
  /**
   * 分页偏移量,默认0
   */
  Offset?: number
  /**
   * 分页大小，默认20，最大100
   */
  Limit?: number
}

/**
 * 私网实例信息
 */
export interface PrivateNetworkInstanceInfo {
  /**
   * 私网实例ID
   */
  NetworkInstanceId?: string
  /**
   * 私网实例名称
   */
  NetworkInstanceName?: string
  /**
   * 可用区ID
   */
  ZoneId?: string
  /**
   * 网络地址
   */
  Network?: string
  /**
   * 网络掩码
   */
  Mask?: number
  /**
   * 关联物理机数量
   */
  ServerCount?: number
  /**
   * 可用Ip数量
   */
  AvailableIpCount?: number
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 更新时间
   */
  UpdatedAt?: string
}

/**
 * 公网Ip信息
 */
export interface IpInfo {
  /**
   * 10.100.0.20
   */
  Ip?: string
  /**
   * epn-asdfghjkl
   */
  NetworkInstanceId?: string
  /**
   * epm-asdfghjkl
   */
  InstanceId?: string
  /**
   * Unbound
   */
  State?: string
  /**
   * Ipv4
   */
  Type?: string
  /**
   * 2026-04-07T00:00:00
   */
  CreatedAt?: string
  /**
   * 2026-04-07T00:00:00
   */
  UpdatedAt?: string
}

/**
 * DeletePublicNetworkInstance返回参数结构体
 */
export interface DeletePublicNetworkInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPublicNetworkInstance返回参数结构体
 */
export interface ModifyPublicNetworkInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrivateNetworkInstance请求参数结构体
 */
export interface CreatePrivateNetworkInstanceRequest {
  /**
   * 新实例名称
   */
  NetworkInstanceName: string
  /**
   * 可用区ID
   */
  ZoneId: string
  /**
   * 网络地址（host 位必须全为 0），必须落在以下 RFC 1918 私有范围之一：`10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16`
   */
  Network: string
  /**
   * 掩码位数，上限统一为 `28`，下限随所属私有段而定：`10.0.0.0/8` 允许 `8~28`，`172.16.0.0/12` 允许 `12~28`，`192.168.0.0/16` 允许 `16~28`；需与 Network 共同构成合法网络地址（host 位全为 0）
   */
  Mask: number
}

/**
 * ModifyPrivateNetworkInstance请求参数结构体
 */
export interface ModifyPrivateNetworkInstanceRequest {
  /**
   * 私网实例Id
   */
  NetworkInstanceId: string
  /**
   * 新实例名称
   */
  NetworkInstanceName: string
}

/**
 * DescribeZones请求参数结构体
 */
export type DescribeZonesRequest = null

/**
 * DescribePublicNetworkInstances请求参数结构体
 */
export interface DescribePublicNetworkInstancesRequest {
  /**
   * 公网实例ID
   */
  NetworkInstanceId?: string
  /**
   * 公网实例名称
   */
  NetworkInstanceName?: string
  /**
   * 可用区Id
   */
  ZoneId?: string
  /**
   * 分页偏移量，默认 0
   */
  Offset?: number
  /**
   * 每页数量，默认 20，最大 100
   */
  Limit?: number
}

/**
 * 账号在可用区下的机型配额信息，包含可用区、机型详情和配额数量。
 */
export interface InstanceTypeQuota {
  /**
   * 可用区代码。
   */
  Zone?: string
  /**
   * 机型规格。
   */
  InstanceType?: string
  /**
   * 机型家族。
   */
  InstanceFamily?: string
  /**
   * 机型族名称
   */
  InstanceFamilyName?: string
  /**
   * CPU核数。
   */
  CpuCores?: number
  /**
   * CPU类型。
   */
  CpuType?: string
  /**
   * 内存大小（GB）。
   */
  MemoryGb?: number
  /**
   * 系统盘类型。
   */
  SystemDiskType?: string
  /**
   * 系统盘大小（GB）。
   */
  SystemDiskSize?: number
  /**
   * 系统盘数量。
   */
  SystemDiskCount?: number
  /**
   * 数据盘类型。
   */
  DataDiskType?: string
  /**
   * 数据盘大小（GB）。
   */
  DataDiskSize?: number
  /**
   * 数据盘数量。
   */
  DataDiskCount?: number
  /**
   * 第二组数据盘类型
   */
  SecondaryDataDiskType?: string
  /**
   * 第二组数据盘大小(GB)
   */
  SecondaryDataDiskSize?: number
  /**
   * 第二组数据盘数量
   */
  SecondaryDataDiskCount?: number
  /**
   * 磁盘描述字符串（向后兼容）。
   */
  DiskType?: string
  /**
   * 网络接口类型。
   */
  NetworkInterfaceType?: string
  /**
   * GPU类型，无GPU时为空字符串。
   */
  GpuType?: string
  /**
   * 配额数量
   */
  Quota?: number
}

/**
 * ModifyPublicNetworkInstance请求参数结构体
 */
export interface ModifyPublicNetworkInstanceRequest {
  /**
   * 公网实例 ID
   */
  NetworkInstanceId: string
  /**
   * 新实例名称
   */
  NetworkInstanceName: string
}

/**
 * ReleasePublicIp请求参数结构体
 */
export interface ReleasePublicIpRequest {
  /**
   * 公网实例 ID（路由发布模式为 STATIC ）
   */
  NetworkInstanceId: string
  /**
   * 待释放的Ip类型，枚举值：ipv4、ipv6
   */
  Type: string
  /**
   * 待释放的 Ip 地址列表
   */
  IpList: Array<string>
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * <p>实例详细信息列表</p>
   */
  InstanceSet?: Array<Instance>
  /**
   * <p>符合条件的实例数量</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEdgeNodeService请求参数结构体
 */
export interface CreateEdgeNodeServiceRequest {
  /**
   * 可用区代码，如 ap-guangzhou-1。
   */
  Zone: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * <p>实例ID列表，用于按实例ID筛选</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>实例名称，支持模糊匹配</p>
   */
  InstanceName?: string
  /**
   * <p>可用区代码，用于筛选指定可用区的实例</p>
   */
  Zone?: string
  /**
   * <p>实例状态列表，用于按状态筛选实例。可选值：allocating、running、isolating、isolated、terminating、error</p>
   */
  InstanceStatus?: Array<string>
  /**
   * <p>公网网络ID</p>
   */
  PublicNetworkId?: string
  /**
   * <p>私有网络ID</p>
   */
  PrivateNetworkId?: string
  /**
   * <p>公网IPv4地址列表，用于按公网IP筛选实例</p>
   */
  PublicIps?: Array<string>
  /**
   * <p>偏移量，默认0</p>
   */
  Offset?: number
  /**
   * <p>返回数量，默认20，最大100</p>
   */
  Limit?: number
}

/**
 * 公网网段信息，包含网段cidr和网关ip
 */
export interface PublicNetworkSegment {
  /**
   * 网段Cidr
   */
  Cidr?: string
  /**
   * 网关Ip
   */
  Gateway?: string
}

/**
 * ReleasePublicIp返回参数结构体
 */
export interface ReleasePublicIpResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZoneData返回参数结构体
 */
export interface DescribeZoneDataResponse {
  /**
   * 统计数据,指标inbw|outbw单位为Mbps
   */
  Data?: Array<SwitchData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateNetworkInstance请求参数结构体
 */
export interface DeletePrivateNetworkInstanceRequest {
  /**
   * 私网实例Id
   */
  NetworkInstanceId: string
}

/**
 * DescribePrivateNetworkInstances返回参数结构体
 */
export interface DescribePrivateNetworkInstancesResponse {
  /**
   * 私网实例总数
   */
  TotalCount?: number
  /**
   * 私网实例集合
   */
  PrivateNetworkInstanceSet?: Array<PrivateNetworkInstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrivateNetworkInstance返回参数结构体
 */
export interface CreatePrivateNetworkInstanceResponse {
  /**
   * 私网实例ID
   */
  NetworkInstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
  /**
   * <p>销毁成功的实例ID列表。</p>
   */
  InstanceIdSet?: Array<string>
  /**
   * <p>销毁失败的实例信息列表（部分成功时返回）。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedInstanceSet?: Array<FailedInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceAttribute请求参数结构体
 */
export interface ModifyInstanceAttributeRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 新的实例名称，1-60字符。与 NewPublicIp 至少传入一个。
   */
  InstanceName?: string
  /**
   * 新的公网IP（需从该实例所绑定公网实例的可用IP中选择）。与 InstanceName 至少传入一个。
   * @deprecated
   */
  NewPublicIp?: string
  /**
   * IP类型，ipv4 或 ipv6，默认 ipv4。仅在指定 NewPublicIp 时有效。
   * @deprecated
   */
  IpType?: string
}

/**
 * ApplyPublicIps请求参数结构体
 */
export interface ApplyPublicIpsRequest {
  /**
   * 公网实例 ID（路由发布模式必须为 STATIC ）
   */
  NetworkInstanceId: string
  /**
   * 申请Ip数量，最小为 1
   */
  Count: number
  /**
   * 申请的Ip类型，枚举值：ipv4、ipv6
   */
  Type: string
}

/**
 * DescribePublicIps返回参数结构体
 */
export interface DescribePublicIpsResponse {
  /**
   * 公网Ip总数
   */
  TotalCount?: number
  /**
   * 分配的公网 IP 地址列表
   */
  IpInfoSet?: Array<IpInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateNetworkInstance返回参数结构体
 */
export interface DeletePrivateNetworkInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrivateNetworkInstance返回参数结构体
 */
export interface ModifyPrivateNetworkInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyPublicIps返回参数结构体
 */
export interface ApplyPublicIpsResponse {
  /**
   * 分配的公网 IP 地址列表
   */
  IpList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 交换机数据
 */
export interface SwitchData {
  /**
   * UTC时间
   */
  Time?: string
  /**
   * 统计值
   */
  Value?: number
}

/**
 * CreateInstances返回参数结构体
 */
export interface CreateInstancesResponse {
  /**
   * <p>创建成功的实例ID列表。</p>
   */
  InstanceIdSet?: Array<string>
  /**
   * <p>创建失败的实例个数。仅部分失败时返回，全部成功时不返回该字段。</p>
   */
  FailedCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述物理机实例信息
 */
export interface Instance {
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>绑定的物理机ID</p>
   */
  MachineId?: string
  /**
   * <p>机型规格</p>
   */
  InstanceType?: string
  /**
   * <p>可用区代码</p>
   */
  Zone?: string
  /**
   * <p>镜像ID</p>
   */
  ImageId?: string
  /**
   * <p>镜像版本号</p>
   * @deprecated
   */
  VersionNumber?: string
  /**
   * <p>实例状态，可选值：allocating、running、isolating、isolated、terminating、error</p>
   */
  InstanceStatus?: string
  /**
   * <p>操作状态，可选值：normal、starting、stopping、stopped、rebooting</p>
   */
  OperateStatus?: string
  /**
   * <p>私有网络ID</p>
   */
  PrivateNetworkId?: string
  /**
   * <p>私有IPv4地址</p>
   */
  PrivateIp?: string
  /**
   * <p>私有IPv6地址</p>
   */
  PrivateIpV6?: string
  /**
   * <p>公网网络ID</p>
   */
  PublicNetworkId?: string
  /**
   * <p>公网IPv4地址</p>
   */
  PublicIp?: string
  /**
   * <p>公网IPv6地址</p>
   */
  PublicIpV6?: string
  /**
   * <p>文件系统类型</p>
   */
  FileSystemType?: string
  /**
   * <p>创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。</p>
   */
  CreatedTime?: string
  /**
   * <p>机型族标识</p>
   */
  InstanceFamily?: string
  /**
   * <p>机型族名称</p>
   */
  InstanceFamilyName?: string
  /**
   * <p>CPU 型号</p>
   */
  CpuType?: string
  /**
   * <p>CPU 核数</p>
   */
  Cpu?: number
  /**
   * <p>内存大小</p>
   */
  Memory?: number
}

/**
 * 跨地域聚合后的可用区信息。
 */
export interface ZoneInfo {
  /**
   * 可用区ID。
   */
  ZoneId?: number
  /**
   * 可用区代码。
   */
  Zone?: string
  /**
   * 可用区中文名称。
   */
  ZoneName?: string
  /**
   * 可用区英文名称。
   */
  ZoneNameEn?: string
  /**
   * 地域代码。
   */
  Region?: string
  /**
   * 区域代码。
   */
  Location?: string
  /**
   * 区域名称。
   */
  LocationName?: string
}

/**
 * ModifyInstanceAttribute返回参数结构体
 */
export interface ModifyInstanceAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
  /**
   * <p>所有地域的可用区列表。</p>
   */
  ZoneSet?: Array<ZoneInfo>
  /**
   * <p>可用区总数量。</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 公网实例信息，包含实例ID、可用区ID、实例名称、线路、路由模式等信息
 */
export interface PublicNetworkInstanceInfo {
  /**
   * 公网实例ID
   */
  NetworkInstanceId?: string
  /**
   * 可用区ID
   */
  ZoneId?: string
  /**
   * 公网实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkInstanceName?: string
  /**
   * 带宽，单位Mbps
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bandwidth?: number
  /**
   * 线路信息
   */
  Line?: string
  /**
   * 路由模式，枚举值：STATIC、BGP、OSPF
   */
  RouteMode?: string
  /**
   * 关联的物理服务器数量
   */
  ServerCount?: number
  /**
   * 已申请的Ipv4数量
   */
  Ipv4Count?: number
  /**
   * 已申请的Ipv6数量
   */
  Ipv6Count?: number
  /**
   * 关联的Ipv4网段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ipv4CidrSet?: Array<PublicNetworkSegment>
  /**
   * 关联的Ipv6网段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ipv6CidrSet?: Array<PublicNetworkSegment>
  /**
   * 公网实例创建时间
   */
  CreatedAt?: string
  /**
   * 公网实例修改时间
   */
  UpdatedAt?: string
}

/**
 * CreatePublicNetworkInstance请求参数结构体
 */
export interface CreatePublicNetworkInstanceRequest {
  /**
   * <p>可用区</p>
   */
  ZoneId: string
  /**
   * <p>公网实例名称</p>
   */
  NetworkInstanceName: string
  /**
   * <p>网络线路</p>
   */
  Line: string
  /**
   * <p>路由模式</p>
   */
  RouteMode: string
  /**
   * <p>公网带宽（Mbps）</p>
   */
  Bandwidth?: number
  /**
   * <p>BGP AS号</p>
   */
  BgpAsNumber?: number
  /**
   * <p>BGP认证密码</p>
   */
  BgpPassword?: string
  /**
   * <p>公网实例类型</p><p>枚举值：</p><ul><li>standard： 标准型(默认)</li><li>custom： 自定义型(暂不支持创建)</li></ul>
   */
  InstanceType?: string
}

/**
 * 操作失败的实例信息
 */
export interface FailedInstance {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 错误码。
   */
  ErrorCode?: string
  /**
   * 错误信息。
   */
  ErrorMessage?: string
}

/**
 * CreatePublicNetworkInstance返回参数结构体
 */
export interface CreatePublicNetworkInstanceResponse {
  /**
   * <p>公网实例 ID</p>
   */
  NetworkInstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZoneData请求参数结构体
 */
export interface DescribeZoneDataRequest {
  /**
   * 区id
   */
  Zone: string
  /**
   * 指标名(inbw:入带宽，outbw:出带宽)
   */
  MetricName: string
  /**
   * 开始时间（UTC时间:0时区）
   */
  StartTime: string
  /**
   * 结束时间（UTC时间:0时区）,最多查询2天时间
   */
  EndTime: string
}

/**
 * DescribePublicIps请求参数结构体
 */
export interface DescribePublicIpsRequest {
  /**
   * 按公网实例 ID 过滤（子串匹配，多个值取并集）
   */
  NetworkInstanceId?: Array<string>
  /**
   * 按可用区/机房过滤
   */
  ZoneId?: string
  /**
   * 按 IP 过滤（子串匹配，多个值取并集）
   */
  Ip?: Array<string>
  /**
   * 按状态过滤，可选值：`InUse`、`Unbound`（多个值取并集）
   */
  State?: Array<string>
  /**
   * 按 IP 版本过滤，可选值：`Ipv4`、`Ipv6`（多个值取并集）
   */
  Type?: Array<string>
  /**
   * 按创建时间排序，可选值：`asc`、`desc`（默认 `desc`）
   */
  OrderByCreateTime?: string
  /**
   * 按更新时间排序，可选值：`asc`、`desc`（优先级高于创建时间排序）
   */
  OrderByUpdateTime?: string
  /**
   * 分页偏移量，默认 0
   */
  Offset?: number
  /**
   * 每页数量，默认 20，最大 100
   */
  Limit?: number
}

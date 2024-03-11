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
 * ModifySubnetDHCPRelay返回参数结构体
 */
export interface ModifySubnetDHCPRelayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatSubnets返回参数结构体
 */
export interface DescribeNatSubnetsResponse {
  /**
   * NAT子网信息
   */
  NatSubnetInfoSet?: Array<NatSubnetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcPeerConnections返回参数结构体
 */
export interface DescribeVpcPeerConnectionsResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 对等连接实例。
   */
  VpcPeerConnectionSet?: Array<VpcPeerConnection>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindIpsFromNatGateway返回参数结构体
 */
export interface UnbindIpsFromNatGatewayResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议
 */
export interface IKEOptionsSpecification {
  /**
   * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC'，默认为3DES-CBC
   */
  PropoEncryAlgorithm?: string
  /**
   * 认证算法：可选值：'MD5', 'SHA1'，默认为MD5
   */
  PropoAuthenAlgorithm?: string
  /**
   * 协商模式：可选值：'AGGRESSIVE', 'MAIN'，默认为MAIN
   */
  ExchangeMode?: string
  /**
   * 本端标识类型：可选值：'ADDRESS', 'FQDN'，默认为ADDRESS
   */
  LocalIdentity?: string
  /**
   * 对端标识类型：可选值：'ADDRESS', 'FQDN'，默认为ADDRESS
   */
  RemoteIdentity?: string
  /**
   * 本端标识，当LocalIdentity选为ADDRESS时，LocalAddress必填。localAddress默认为vpn网关公网IP
   */
  LocalAddress?: string
  /**
   * 对端标识，当RemoteIdentity选为ADDRESS时，RemoteAddress必填
   */
  RemoteAddress?: string
  /**
   * 本端标识，当LocalIdentity选为FQDN时，LocalFqdnName必填
   */
  LocalFqdnName?: string
  /**
   * 对端标识，当remoteIdentity选为FQDN时，RemoteFqdnName必填
   */
  RemoteFqdnName?: string
  /**
   * DH group，指定IKE交换密钥时使用的DH组，可选值：'GROUP1', 'GROUP2', 'GROUP5', 'GROUP14', 'GROUP24'，
   */
  DhGroupName?: string
  /**
   * IKE SA Lifetime，单位：秒，设置IKE SA的生存周期，取值范围：60-604800
   */
  IKESaLifetimeSeconds?: number
  /**
   * IKE版本
   */
  IKEVersion?: string
}

/**
 * ModifyRouteTable请求参数结构体
 */
export interface ModifyRouteTableRequest {
  /**
   * 路由表ID
   */
  RouteTableId: string
  /**
   * 路由表名称
   */
  RouteTableName?: string
}

/**
 * CreateRoutePolicies请求参数结构体
 */
export interface CreateRoutePoliciesRequest {
  /**
   * 路由表ID
   */
  RouteTableId: string
  /**
   * 新增的路由
   */
  RoutePolicySet: Array<RoutePolicy>
}

/**
 * 过滤器
 */
export interface Filter {
  /**
   * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Name: string
  /**
   * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
   */
  Values: Array<string>
}

/**
 * CreateVirtualSubnetWithVlan请求参数结构体
 */
export interface CreateVirtualSubnetWithVlanRequest {
  /**
   * 系统分配的私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 子网信息
   */
  SubnetSet: Array<SubnetCreateInputInfo>
}

/**
 * DeleteVirtualIp返回参数结构体
 */
export interface DeleteVirtualIpResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubnets请求参数结构体
 */
export interface DescribeSubnetsRequest {
  /**
   * 子网实例ID查询。形如：subnet-pxir56ns。参数不支持同时指定SubnetIds和Filters。
   */
  SubnetIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定SubnetIds和Filters。
subnet-id - String - （过滤条件）Subnet实例名称。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
cidr-block - String - （过滤条件）vpc的cidr。
subnet-name - String - （过滤条件）子网名称。
zone - String - （过滤条件）可用区。
   */
  Filters?: Array<Filter>
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 返回数量
   */
  Limit?: number
  /**
   * 排序字段, 支持按“CreateTime”，“VlanId”
   */
  OrderField?: string
  /**
   * 排序方向, “asc”、“desc”
   */
  OrderDirection?: string
}

/**
 * CreateSubnet请求参数结构体
 */
export interface CreateSubnetRequest {
  /**
   * 系统分配的私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 子网信息
   */
  SubnetSet: Array<SubnetCreateInputInfo>
}

/**
 * DownloadCustomerGatewayConfiguration请求参数结构体
 */
export interface DownloadCustomerGatewayConfigurationRequest {
  /**
   * VPN通道实例ID。形如：bmvpnx-f49l6u0z。
   */
  VpnConnectionId: string
  /**
   * 厂商,取值 h3c，cisco
   */
  VendorName: string
}

/**
 * CreateHostedInterface返回参数结构体
 */
export interface CreateHostedInterfaceResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 黑石托管机器ID
   */
  ResourceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubnetByDevice返回参数结构体
 */
export interface DescribeSubnetByDeviceResponse {
  /**
   * 子网个数
   */
  TotalCount?: number
  /**
   * 子网列表
   */
  Data?: Array<SubnetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSubnet返回参数结构体
 */
export interface DeleteSubnetResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeregisterIps返回参数结构体
 */
export interface DeregisterIpsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubnets返回参数结构体
 */
export interface DescribeSubnetsResponse {
  /**
   * 子网列表信息
   */
  SubnetSet?: Array<SubnetInfo>
  /**
   * 返回的子网总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpcPeerConnection返回参数结构体
 */
export interface ModifyVpcPeerConnectionResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCustomerGateways返回参数结构体
 */
export interface DescribeCustomerGatewaysResponse {
  /**
   * 对端网关对象列表
   */
  CustomerGatewaySet?: Array<CustomerGateway>
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindSubnetsFromNatGateway请求参数结构体
 */
export interface UnbindSubnetsFromNatGatewayRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 子网ID列表，子网不区分加入NAT网关的转发方式
   */
  SubnetIds: Array<string>
}

/**
 * 黑石子网的信息
 */
export interface SubnetInfo {
  /**
   * 私有网络的唯一ID。
   */
  VpcId: string
  /**
   * VPC的名称。
   */
  VpcName: string
  /**
   * VPC的CIDR。
   */
  VpcCidrBlock: string
  /**
   * 私有网络的唯一ID
   */
  SubnetId: string
  /**
   * 子网名称。
   */
  SubnetName: string
  /**
   * 子网CIDR。
   */
  CidrBlock: string
  /**
   * 子网类型。0: 黑石物理机子网; 6: ccs子网; 7 Docker子网; 8: 虚拟机子网
   */
  Type: number
  /**
   * 子网可用区ID。
   */
  ZoneId: number
  /**
   * 子网物理机的个数
   */
  CpmNum: number
  /**
   * 子网的VlanId。
   */
  VlanId: number
  /**
   * 是否开启分布式网关 ，关闭为0，开启为1。
   */
  DistributedFlag: number
  /**
   * 是否开启dhcp relay ，关闭为0，开启为1。默认为0。
   */
  DhcpEnable: number
  /**
   * DHCP SERVER 的IP地址数组。IP地址为相同VPC的子网内分配的IP。
   */
  DhcpServerIp: Array<string>
  /**
   * 预留的IP个数。从该子网的最大可分配IP倒序分配N个IP 用于DHCP 动态分配使用的地址段。
   */
  IpReserve: number
  /**
   * 子网中可用的IP个数
   */
  AvailableIpNum: number
  /**
   * 子网中总共的IP个数
   */
  TotalIpNum: number
  /**
   * 子网创建时间
   */
  SubnetCreateTime: string
  /**
   * 25G子网标识
   */
  IsSmartNic: number
  /**
   * 子网可用区。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone: string
  /**
   * VPC所在可用区ID
   */
  VpcZoneId: number
  /**
   * VPC所在可用区
   */
  VpcZone: string
  /**
   * 是否开启广播，关闭为0，开启为1。
   */
  BroadcastFlag: number
}

/**
 * DeleteRoutePolicy返回参数结构体
 */
export interface DeleteRoutePolicyResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpnGateways返回参数结构体
 */
export interface DescribeVpnGatewaysResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * VPN网关实例详细信息列表。
   */
  VpnGatewaySet?: Array<VpnGateway>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPC信息
 */
export interface VpcInfo {
  /**
   * 私有网络的唯一ID。
   */
  VpcId: string
  /**
   * VPC的名称。
   */
  VpcName: string
  /**
   * VPC的CIDR。
   */
  CidrBlock: string
  /**
   * 可用区
   */
  Zone: string
  /**
   * VPC状态
   */
  State: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 整型私有网络ID。
   */
  IntVpcId: number
}

/**
 * CreateInterfaces返回参数结构体
 */
export interface CreateInterfacesResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatSubnets请求参数结构体
 */
export interface DescribeNatSubnetsRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
}

/**
 * DownloadCustomerGatewayConfiguration返回参数结构体
 */
export interface DownloadCustomerGatewayConfigurationResponse {
  /**
   * 配置信息。
   */
  CustomerGatewayConfiguration?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSubnet请求参数结构体
 */
export interface DeleteSubnetRequest {
  /**
   * 私有网络ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。
   */
  SubnetId: string
}

/**
 * DeleteRoutePolicy请求参数结构体
 */
export interface DeleteRoutePolicyRequest {
  /**
   * 路由表ID
   */
  RouteTableId: string
  /**
   * 路由表策略ID
   */
  RoutePolicyId: string
}

/**
 * ModifyRoutePolicy请求参数结构体
 */
export interface ModifyRoutePolicyRequest {
  /**
   * 路由表ID
   */
  RouteTableId: string
  /**
   * 修改的路由
   */
  RoutePolicy: RoutePolicy
}

/**
 * 路由表对象
 */
export interface RouteTable {
  /**
   * VPC实例ID。
   */
  VpcId: string
  /**
   * VPC的名称
   */
  VpcName: string
  /**
   * VPC的CIDR
   */
  VpcCidrBlock: string
  /**
   * 可用区
   */
  Zone: string
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string
  /**
   * 路由表名称。
   */
  RouteTableName: string
  /**
   * 创建时间。
   */
  CreateTime: string
}

/**
 * DescribeVpcQuota请求参数结构体
 */
export interface DescribeVpcQuotaRequest {
  /**
   * 类型
   */
  TypeIds: Array<number | bigint>
}

/**
 * CreateDockerSubnetWithVlan返回参数结构体
 */
export interface CreateDockerSubnetWithVlanResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubnetAvailableIps请求参数结构体
 */
export interface DescribeSubnetAvailableIpsRequest {
  /**
   * 私有网络子网ID
   */
  SubnetId: string
  /**
   * CIDR前缀，例如10.0.1
   */
  Cidr?: string
}

/**
 * DeleteVpc请求参数结构体
 */
export interface DeleteVpcRequest {
  /**
   * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string
}

/**
 * UnbindEipsFromNatGateway请求参数结构体
 */
export interface UnbindEipsFromNatGatewayRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 已分配的EIP列表
   */
  AssignedEips: Array<string>
}

/**
 * DescribeRoutePolicies返回参数结构体
 */
export interface DescribeRoutePoliciesResponse {
  /**
   * 路由策略数
   */
  TotalCount: number
  /**
   * 路由策略列表
   */
  RoutePolicySet: Array<RoutePolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSubnet返回参数结构体
 */
export interface CreateSubnetResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcceptVpcPeerConnection请求参数结构体
 */
export interface AcceptVpcPeerConnectionRequest {
  /**
   * 黑石对等连接实例ID
   */
  VpcPeerConnectionId: string
}

/**
 * BindSubnetsToNatGateway返回参数结构体
 */
export interface BindSubnetsToNatGatewayResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPC视图子网信息
 */
export interface VpcSubnetViewInfo {
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 子网名称
   */
  SubnetName: string
  /**
   * 子网CIDR
   */
  CidrBlock: string
  /**
   * 子网下设备个数
   */
  CpmNum: number
  /**
   * 内网负载均衡个数
   */
  LbNum: number
  /**
   * 子网所在可用区
   */
  Zone: string
}

/**
 * CreateVpc返回参数结构体
 */
export interface CreateVpcResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCustomerGateway返回参数结构体
 */
export interface CreateCustomerGatewayResponse {
  /**
   * 对端网关对象
   */
  CustomerGateway?: CustomerGateway
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
  /**
   * 任务状态，其中0表示任务执行成功，1表示任务执行失败，2表示任务正在执行中
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpnGateway请求参数结构体
 */
export interface DeleteVpnGatewayRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
}

/**
 * NAT子网信息
 */
export interface NatSubnetInfo {
  /**
   * 子网名称
   */
  Name: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * NAT子网类型，其中0表示绑定部分IP的NAT子网，1表示绑定全部IP的NAT子网，2表示绑定网关方式的NAT子网
   */
  SubnetNatType: number
  /**
   * 子网网段
   */
  CidrBlock: string
}

/**
 * DescribeSubnetByHostedDevice请求参数结构体
 */
export interface DescribeSubnetByHostedDeviceRequest {
  /**
   * 托管机器ID, 如chm-xasdfx2j
   */
  InstanceId: string
  /**
   * 子网类型。0: 物理机子网; 7: DOCKER子网 8: 虚拟子网
   */
  Types?: Array<number | bigint>
  /**
   * 查询的起始位置。
   */
  Offset?: number
  /**
   * 查询的个数。
   */
  Limit?: number
}

/**
 * CreateVpcPeerConnection返回参数结构体
 */
export interface CreateVpcPeerConnectionResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySubnetAttribute请求参数结构体
 */
export interface ModifySubnetAttributeRequest {
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 子网名称
   */
  SubnetName: string
}

/**
 * ResetVpnConnection请求参数结构体
 */
export interface ResetVpnConnectionRequest {
  /**
   * VPC唯一ID
   */
  VpcId: string
  /**
   * VPN通道实例ID。形如：bmvpnx-f49l6u0z。
   */
  VpnConnectionId: string
}

/**
 * DeleteNatGateway请求参数结构体
 */
export interface DeleteNatGatewayRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
}

/**
 * DeleteVpnConnection返回参数结构体
 */
export interface DeleteVpnConnectionResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCustomerGatewayAttribute返回参数结构体
 */
export interface ModifyCustomerGatewayAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPN通道对象。
 */
export interface VpnConnection {
  /**
   * 通道实例ID。
   */
  VpnConnectionId: string
  /**
   * 通道名称。
   */
  VpnConnectionName: string
  /**
   * VPC实例ID。
   */
  VpcId: string
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 对端网关实例ID。
   */
  CustomerGatewayId: string
  /**
   * 预共享密钥。
   */
  PreShareKey: string
  /**
   * 通道传输协议。
   */
  VpnProto: string
  /**
   * 创建时间。
   */
  CreateTime: string
  /**
   * 通道的生产状态
   */
  State: string
  /**
   * 通道连接状态
   */
  NetStatus: string
  /**
   * SPD。
   */
  SecurityPolicyDatabaseSet: Array<SecurityPolicyDatabase>
  /**
   * IKE选项。
   */
  IKEOptionsSpecification: IKEOptionsSpecification
  /**
   * IPSEC选项。
   */
  IPSECOptionsSpecification: IPSECOptionsSpecification
  /**
   * 可用区
   */
  Zone: string
  /**
   * VPC网段
   */
  VpcCidrBlock: string
  /**
   * VPC名称
   */
  VpcName: string
  /**
   * VPN网关名称
   */
  VpnGatewayName: string
  /**
   * 对端网关名称
   */
  CustomerGatewayName: string
  /**
   * IPSEC VPN通道路由策略目的端地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestinationCidr: Array<string>
  /**
   * IPSEC VPN通道路由策略源端地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceCidr: Array<string>
}

/**
 * CreateDockerSubnetWithVlan请求参数结构体
 */
export interface CreateDockerSubnetWithVlanRequest {
  /**
   * 系统分配的私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 子网信息
   */
  SubnetSet: Array<SubnetCreateInputInfo>
}

/**
 * 路由条目
 */
export interface RoutePolicy {
  /**
   * 目的网段
   */
  DestinationCidrBlock?: string
  /**
   * 下一跳类型，目前我们支持的类型有：
LOCAL：物理机默认路由；
VPN：VPN网关；
PEERCONNECTION：对等连接；
CPM：物理机自定义路由；
CCN：云联网；
TGW：公网默认路由；
SSLVPN : SSH SSL VPN网关。
   */
  GatewayType?: string
  /**
   * 下一跳地址，这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址。
   */
  GatewayId?: string
  /**
   * 路由策略描述。
   */
  RouteDescription?: string
  /**
   * 路由策略ID
   */
  RoutePolicyId?: string
  /**
   * 路由类型，目前我们支持的类型有：
USER：用户自定义路由；
NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；
CCN：云联网路由，系统默认下发，不可编辑与删除。
用户只能添加和编辑USER 类型的路由。
   */
  RoutePolicyType?: string
  /**
   * 是否启用
   */
  Enabled?: boolean
}

/**
 * DeleteHostedInterface返回参数结构体
 */
export interface DeleteHostedInterfaceResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 黑石托管机器ID
   */
  ResourceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpcPeerConnection返回参数结构体
 */
export interface DeleteVpcPeerConnectionResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteHostedInterfaces返回参数结构体
 */
export interface DeleteHostedInterfacesResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySubnetDHCPRelay请求参数结构体
 */
export interface ModifySubnetDHCPRelayRequest {
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 是否开启DHCP Relay
   */
  EnableDHCP: boolean
  /**
   * DHCP服务器IP
   */
  ServerIps?: Array<string>
  /**
   * 预留IP个数
   */
  ReservedIpCount?: number
}

/**
 * DeleteVpcPeerConnection请求参数结构体
 */
export interface DeleteVpcPeerConnectionRequest {
  /**
   * 黑石对等连接实例ID
   */
  VpcPeerConnectionId: string
}

/**
 * DeleteHostedInterface请求参数结构体
 */
export interface DeleteHostedInterfaceRequest {
  /**
   * 托管机器唯一ID 数组
   */
  InstanceIds: Array<string>
  /**
   * 私有网络ID或者私有网络统一ID，建议使用统一ID
   */
  VpcId: string
  /**
   * 子网ID或者子网统一ID，建议使用统一ID
   */
  SubnetId: string
}

/**
 * BindEipsToNatGateway请求参数结构体
 */
export interface BindEipsToNatGatewayRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 已分配的EIP列表；AssignedEips和AutoAllocEipNum至少输入一个
   */
  AssignedEips?: Array<string>
  /**
   * 新建EIP数目，系统将会按您的要求生产该数目个数EIP；AssignedEips和AutoAllocEipNum至少输入一个
   */
  AutoAllocEipNum?: number
}

/**
 * DeleteInterfaces请求参数结构体
 */
export interface DeleteInterfacesRequest {
  /**
   * 物理机ID
   */
  InstanceId: string
  /**
   * 子网的唯一ID列表
   */
  SubnetIds: Array<string>
}

/**
 * DescribeVpcs请求参数结构体
 */
export interface DescribeVpcsRequest {
  /**
   * VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。
   */
  VpcIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定VpcIds和Filters。
vpc-name - String - （过滤条件）VPC实例名称。
vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。
cidr-block - String - （过滤条件）vpc的cidr。
state - String - （过滤条件）VPC状态。(pending | available).
zone -  String - （过滤条件）VPC的可用区。
   */
  Filters?: Array<Filter>
  /**
   * 初始行的偏移量，默认为0。
   */
  Offset?: number
  /**
   * 每页行数，默认为20。
   */
  Limit?: number
}

/**
 * DescribeVpcResource返回参数结构体
 */
export interface DescribeVpcResourceResponse {
  /**
   * VPC数据
   */
  VpcResourceSet?: Array<VpcResource>
  /**
   * VPC个数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RejectVpcPeerConnection返回参数结构体
 */
export interface RejectVpcPeerConnectionResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCustomerGatewayAttribute请求参数结构体
 */
export interface ModifyCustomerGatewayAttributeRequest {
  /**
   * 对端网关ID，例如：bmcgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。
   */
  CustomerGatewayId: string
  /**
   * 对端网关名称，可任意命名，但不得超过60个字符。
   */
  CustomerGatewayName: string
}

/**
 * DescribeRouteTables返回参数结构体
 */
export interface DescribeRouteTablesResponse {
  /**
   * 路由表个数
   */
  TotalCount?: number
  /**
   * 路由表列表
   */
  RouteTableSet?: Array<RouteTable>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRouteTable返回参数结构体
 */
export interface ModifyRouteTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatGateways返回参数结构体
 */
export interface DescribeNatGatewaysResponse {
  /**
   * NAT网关信息列表
   */
  NatGatewayInfoSet?: Array<NatGatewayInfo>
  /**
   * 总数目
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpcAttribute返回参数结构体
 */
export interface ModifyVpcAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpnConnectionAttribute返回参数结构体
 */
export interface ModifyVpnConnectionAttributeResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubnetAvailableIps返回参数结构体
 */
export interface DescribeSubnetAvailableIpsResponse {
  /**
   * 可用IP的范围列表
   */
  IpSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatGateways请求参数结构体
 */
export interface DescribeNatGatewaysRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId?: string
  /**
   * NAT名称
   */
  NatName?: string
  /**
   * 搜索字段
   */
  SearchKey?: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId?: string
  /**
   * 起始值
   */
  Offset?: number
  /**
   * 偏移值，默认值为 20
   */
  Limit?: number
  /**
   * NAT所在可用区，形如：ap-guangzhou-2。
   */
  Zone?: string
  /**
   * 排序字段, 支持"CreateTime"排序
   */
  OrderField?: string
  /**
   * 排序方向, “asc”、“desc”
   */
  OrderDirection?: string
}

/**
 * 对等连接对象
 */
export interface VpcPeerConnection {
  /**
   * 本端VPC唯一ID
   */
  VpcId: string
  /**
   * 对端VPC唯一ID
   */
  PeerVpcId: string
  /**
   * 本端APPID
   */
  AppId: string
  /**
   * 对端APPID
   */
  PeerAppId: string
  /**
   * 对等连接唯一ID
   */
  VpcPeerConnectionId: string
  /**
   * 对等连接名称
   */
  VpcPeerConnectionName: string
  /**
   * 对等连接状态。pending:申请中,available:运行中,expired:已过期,rejected:已拒绝,deleted:已删除
   */
  State: string
  /**
   * 本端VPC所属可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcZone: string
  /**
   * 对端VPC所属可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerVpcZone: string
  /**
   * 本端Uin
   */
  Uin: number
  /**
   * 对端Uin
   */
  PeerUin: number
  /**
   * 对等连接类型
   */
  PeerType: number
  /**
   * 对等连接带宽
   */
  Bandwidth: number
  /**
   * 本端VPC地域
   */
  Region: string
  /**
   * 对端VPC地域
   */
  PeerRegion: string
  /**
   * 是否允许删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteFlag: number
  /**
   * 创建时间
   */
  CreateTime: string
}

/**
 * 创建VPC下默认子网
 */
export interface VpcSubnetCreateInfo {
  /**
   * 子网名称
   */
  SubnetName: string
  /**
   * 子网的CIDR
   */
  CidrBlock: string
  /**
   * 子网的可用区
   */
  Zone?: string
}

/**
 * DescribeVpnConnections请求参数结构体
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * VPN通道实例ID。形如：bmvpnx-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnConnectionIds和Filters。
   */
  VpnConnectionIds?: Array<string>
  /**
   * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpnConnectionIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li>
<li>state - String - （过滤条件 VPN状态：creating，available，createfailed，changing，changefailed，deleting，deletefailed。</li>
<li>zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * VPN网关实例ID
   */
  VpnGatewayId?: string
  /**
   * VPN通道名称
   */
  VpnConnectionName?: string
  /**
   * 排序字段, 支持"CreateTime"排序
   */
  OrderField?: string
  /**
   * 排序方向, “asc”、“desc”
   */
  OrderDirection?: string
}

/**
 * ModifyVpcPeerConnection请求参数结构体
 */
export interface ModifyVpcPeerConnectionRequest {
  /**
   * 黑石对等连接唯一ID
   */
  VpcPeerConnectionId: string
  /**
   * 对等连接带宽
   */
  Bandwidth?: number
  /**
   * 对等连接名称
   */
  VpcPeerConnectionName?: string
}

/**
 * DeleteCustomerGateway返回参数结构体
 */
export interface DeleteCustomerGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpcAttribute请求参数结构体
 */
export interface ModifyVpcAttributeRequest {
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 私有网络名称
   */
  VpcName?: string
  /**
   * 是否开启内网监控，0为关闭，1为开启
   */
  EnableMonitor?: boolean
}

/**
 * CreateRoutePolicies返回参数结构体
 */
export interface CreateRoutePoliciesResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRouteTables请求参数结构体
 */
export interface DescribeRouteTablesRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定RouteTableIds和Filters。
route-table-id - String - （过滤条件）路由表实例ID。
route-table-name - String - （过滤条件）路由表名称。
route-table-id-like - String - （模糊过滤条件）路由表实例ID。
route-table-name-like - String - （模糊过滤条件）路由表名称。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
zone - String - （过滤条件）可用区。
   */
  Filters?: Array<Filter>
  /**
   * 初始行的偏移量，默认为0。
   */
  Offset?: number
  /**
   * 每页行数，默认为20。
   */
  Limit?: number
  /**
   * 排序字段, 支持按“RouteTableId”，“VpcId”, "RouteTableName", "CreateTime"
   */
  OrderField?: string
  /**
   * 排序方向, “asc”、“desc”
   */
  OrderDirection?: string
}

/**
 * DeleteVirtualIp请求参数结构体
 */
export interface DeleteVirtualIpRequest {
  /**
   * 私有网络唯一ID。
   */
  VpcId: string
  /**
   * 退还的IP列表。
   */
  Ips: Array<string>
}

/**
 * DescribeVpnGateways请求参数结构体
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * VPN网关实例ID。形如：bmvpngw-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnGatewayIds和Filters。
   */
  VpnGatewayIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定VpnGatewayIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li>
<li>state - String - （过滤条件 VPN状态：creating，available，createfailed，changing，changefailed，deleting，deletefailed。</li>
<li>zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。</li>
<li>vpngw-name - String - （过滤条件）vpn网关名称。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 请求对象个数
   */
  Limit?: number
  /**
   * 排序字段, 支持"CreateTime"排序
   */
  OrderField?: string
  /**
   * 排序方向, “asc”、“desc”
   */
  OrderDirection?: string
}

/**
 * CreateHostedInterface请求参数结构体
 */
export interface CreateHostedInterfaceRequest {
  /**
   * 托管机器唯一ID 数组
   */
  InstanceIds: Array<string>
  /**
   * 私有网络ID或者私有网络统一ID，建议使用统一ID
   */
  VpcId: string
  /**
   * 子网ID或者子网统一ID，建议使用统一ID
   */
  SubnetId: string
}

/**
 * NAT详情
 */
export interface NatGatewayInfo {
  /**
   * NAT网关ID
   */
  NatId: string
  /**
   * 网关名称
   */
  NatName: string
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 私有网络名称
   */
  VpcName: string
  /**
   * 网关创建状态，其中0表示创建中，1表示运行中，2表示创建失败
   */
  ProductionStatus: number
  /**
   * EIP列表
   */
  Eips: Array<string>
  /**
   * 并发连接数规格，取值为1000000, 3000000, 10000000
   */
  MaxConcurrent: number
  /**
   * 可用区
   */
  Zone: string
  /**
   * 独占标识，其中0表示共享，1表示独占，默认值为0
   */
  Exclusive: number
  /**
   * 转发模式，其中0表示IP方式，1表示网段方式
   */
  ForwardMode: number
  /**
   * 私有网络网段
   */
  VpcCidrBlock: string
  /**
   * 网关类型，取值为 small，middle，big，分别对应小型、中型、大型
   */
  Type: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 网关启用状态，1为禁用，0为启用。
   */
  State: number
  /**
   * 私有网络整型ID
   */
  IntVpcId: number
  /**
   * NAT资源ID
   */
  NatResourceId: number
}

/**
 * BindSubnetsToNatGateway请求参数结构体
 */
export interface BindSubnetsToNatGatewayRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 子网ID列表，子网下全部IP将加入NAT，不区分网关转发方式
   */
  SubnetIds: Array<string>
}

/**
 * ResetVpnConnection返回参数结构体
 */
export interface ResetVpnConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RejectVpcPeerConnection请求参数结构体
 */
export interface RejectVpcPeerConnectionRequest {
  /**
   * 黑石对等连接实例ID
   */
  VpcPeerConnectionId: string
}

/**
 * VPC视图信息
 */
export interface VpcViewInfo {
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 私有网络名称
   */
  VpcName: string
  /**
   * 私有网络CIDR
   */
  CidrBlock: string
  /**
   * 私有网络所在可用区
   */
  Zone: string
  /**
   * 外网负载均衡个数
   */
  LbNum: number
  /**
   * 弹性公网IP个数
   */
  EipNum: number
  /**
   * NAT网关个数
   */
  NatNum: number
  /**
   * 子网列表
   */
  SubnetSet: Array<VpcSubnetViewInfo>
}

/**
 * DescribeCustomerGateways请求参数结构体
 */
export interface DescribeCustomerGatewaysRequest {
  /**
   * 对端网关ID，例如：bmcgw-2wqq41m9。每次请求的实例的上限为100。参数不支持同时指定CustomerGatewayIds和Filters。
   */
  CustomerGatewayIds?: Array<string>
  /**
   * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定CustomerGatewayIds和Filters。
<li>customergateway-name - String - （过滤条件）对端网关名称。</li>
<li>ip-address - String - （过滤条件)对端网关地址。</li>
<li>customergateway-id - String - （过滤条件）对端网关唯一ID。</li>
<li>zone - String - （过滤条件）对端所在可用区，形如：ap-guangzhou-2。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 排序字段, 支持"CreateTime"排序
   */
  OrderField?: string
  /**
   * 排序方向, “asc”、“desc”
   */
  OrderDirection?: string
}

/**
 * CreateCustomerGateway请求参数结构体
 */
export interface CreateCustomerGatewayRequest {
  /**
   * 对端网关名称，可任意命名，但不得超过60个字符。
   */
  CustomerGatewayName: string
  /**
   * 对端网关公网IP。
   */
  IpAddress: string
  /**
   * 可用区ID
   */
  Zone: string
}

/**
 * DeleteHostedInterfaces请求参数结构体
 */
export interface DeleteHostedInterfacesRequest {
  /**
   * 物理机ID
   */
  InstanceId: string
  /**
   * 物理机ID
   */
  SubnetIds: Array<string>
}

/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
  /**
   * 任务ID
   */
  TaskId: number
}

/**
 * ModifyVpnConnectionAttribute请求参数结构体
 */
export interface ModifyVpnConnectionAttributeRequest {
  /**
   * VPN通道实例ID。形如：bmvpnx-f49l6u0z。
   */
  VpnConnectionId: string
  /**
   * VPC实例ID
   */
  VpcId: string
  /**
   * VPN通道名称，可任意命名，但不得超过60个字符。
   */
  VpnConnectionName?: string
  /**
   * 预共享密钥。
   */
  PreShareKey?: string
  /**
   * SPD策略组，例如：{"10.0.0.5/24":["172.123.10.5/16"]}，10.0.0.5/24是vpc内网段172.123.10.5/16是IDC网段。用户指定VPC内哪些网段可以和您IDC中哪些网段通信。
   */
  SecurityPolicyDatabases?: Array<SecurityPolicyDatabase>
  /**
   * IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议。
   */
  IKEOptionsSpecification?: IKEOptionsSpecification
  /**
   * IPSec配置，腾讯云提供IPSec安全会话设置。
   */
  IPSECOptionsSpecification?: IPSECOptionsSpecification
}

/**
 * DescribeVpcResource请求参数结构体
 */
export interface DescribeVpcResourceRequest {
  /**
   * 私有网络实例ID
   */
  VpcIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定SubnetIds和Filters。
vpc-id - String - （过滤条件）私有网络实例ID，形如：vpc-f49l6u0z。
vpc-name - String - （过滤条件）私有网络名称。
zone - String - （过滤条件）可用区。
state - String - （过滤条件）VPC状态。available: 运营中; pending: 创建中; failed: 创建失败; deleting: 删除中
   */
  Filters?: Array<Filter>
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 返回数量
   */
  Limit?: number
  /**
   * 排序字段
   */
  OrderField?: string
  /**
   * 排序方向, “asc”、“desc”
   */
  OrderDirection?: string
}

/**
 * BindEipsToNatGateway返回参数结构体
 */
export interface BindEipsToNatGatewayResponse {
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcView返回参数结构体
 */
export interface DescribeVpcViewResponse {
  /**
   * VPC视图信息
   */
  VpcView?: VpcViewInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcView请求参数结构体
 */
export interface DescribeVpcViewRequest {
  /**
   * 私有网络唯一ID
   */
  VpcId: string
}

/**
 * DescribeSubnetByDevice请求参数结构体
 */
export interface DescribeSubnetByDeviceRequest {
  /**
   * 物理机ID
   */
  InstanceId: string
  /**
   * 子网类型。0: 物理机子网; 7: DOCKER子网 8: 虚拟子网
   */
  Types?: Array<number | bigint>
  /**
   * 查询的起始位置。
   */
  Offset?: number
  /**
   * 查询的个数。
   */
  Limit?: number
}

/**
 * AcceptVpcPeerConnection返回参数结构体
 */
export interface AcceptVpcPeerConnectionResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoutePolicies请求参数结构体
 */
export interface DescribeRoutePoliciesRequest {
  /**
   * 路由表实例ID，例如：rtb-afg8md3c。
   */
  RouteTableId: string
  /**
   * 路由策略实例ID，例如：rti-azd4dt1c。
   */
  RoutePolicyIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定RoutePolicyIds和Filters。
route-table-id - String - （过滤条件）路由表实例ID。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
route-policy-id - String - （过滤条件）路由策略ID。
route-policy-description-like - String -（过滤条件）路由项备注。
route-policy-type - String - （过滤条件）路由项策略类型。
destination-cidr-like - String - （过滤条件）路由项目的地址。
gateway-id-like - String - （过滤条件）路由项下一跳网关。
gateway-type - String - （过滤条件）路由项下一条网关类型。
enable - Bool - （过滤条件）路由策略是否启用。
   */
  Filters?: Array<Filter>
  /**
   * 初始行的偏移量，默认为0。
   */
  Offset?: number
  /**
   * 每页行数，默认为20。
   */
  Limit?: number
}

/**
 * VPN网关对象。
 */
export interface VpnGateway {
  /**
   * 网关实例ID。
   */
  VpnGatewayId: string
  /**
   * VPC实例ID。
   */
  VpcId: string
  /**
   * 网关实例名称。
   */
  VpnGatewayName: string
  /**
   * VPC网段
   */
  VpcCidrBlock: string
  /**
   * VPC名称
   */
  VpcName: string
  /**
   * 网关出带宽。
   */
  InternetMaxBandwidthOut: number
  /**
   * 网关实例状态
   */
  State: string
  /**
   * 网关公网IP。
   */
  PublicIpAddress: string
  /**
   * 创建时间。
   */
  CreateTime: string
  /**
   * 可用区，如：ap-guangzhou
   */
  Zone: string
  /**
   * VPN网关的通道数
   */
  VpnConnNum: number
}

/**
 * ModifyVpnGatewayAttribute请求参数结构体
 */
export interface ModifyVpnGatewayAttributeRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * VPN网关名称，最大长度不能超过60个字节。
   */
  VpnGatewayName: string
}

/**
 * CreateNatGateway请求参数结构体
 */
export interface CreateNatGatewayRequest {
  /**
   * 转发模式，其中0表示IP方式，1表示网段方式；通过cidr方式可支持更多的IP接入到NAT网关
   */
  ForwardMode: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * NAT名称
   */
  NatName: string
  /**
   * 并发连接数规格；取值为1000000、3000000、10000000，分别对应小型、中型、大型NAT网关
   */
  MaxConcurrent: number
  /**
   * 子网ID列表，子网下全部IP将加入NAT，不区分网关转发方式
   */
  SubnetIds?: Array<string>
  /**
   * 部分IP信息，子网下只有该部分IP将加入NAT，仅当网关转发模式为IP方式有效；IpInfoSet和SubnetIds中的子网ID不能同时存在
   */
  IpInfoSet?: Array<IpInfo>
  /**
   * 已分配的EIP列表, AssignedEips和AutoAllocEipNum至少输入一个
   */
  AssignedEips?: Array<string>
  /**
   * 新建EIP数目，系统将会按您的要求生产该数目个数EIP, AssignedEips和AutoAllocEipNum至少输入一个
   */
  AutoAllocEipNum?: number
  /**
   * 独占标识，取值为0和1，默认值为0；0和1分别表示创建共享型NAT网关和独占NAT型网关；由于同一个VPC网络内，指向NAT集群的默认路由只有一条，因此VPC内只能创建一种类型NAT网关；创建独占型NAT网关时，需联系对应架构师进行独占NAT集群搭建，否则无法创建独占型NAT网关。
   */
  Exclusive?: number
}

/**
 * IPSec配置，腾讯云提供IPSec安全会话设置
 */
export interface IPSECOptionsSpecification {
  /**
   * PFS：可选值：'NULL', 'DH-GROUP1', 'DH-GROUP2', 'DH-GROUP5', 'DH-GROUP14', 'DH-GROUP24'，默认为NULL
   */
  PfsDhGroup: string
  /**
   * IPsec SA lifetime(KB)：单位KB，取值范围：2560-604800
   */
  IPSECSaLifetimeTraffic: number
  /**
   * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC', 'NULL'， 默认为AES-CBC-128
   */
  EncryptAlgorithm?: string
  /**
   * 认证算法：可选值：'MD5', 'SHA1'，默认为
   */
  IntegrityAlgorith?: string
  /**
   * IPsec SA lifetime(s)：单位秒，取值范围：180-604800
   */
  IPSECSaLifetimeSeconds?: number
  /**
   * 安全协议，默认为ESP
   */
  SecurityProto?: string
  /**
   * 报文封装模式:默认为Tunnel
   */
  EncapMode?: string
}

/**
 * DeleteVpnConnection请求参数结构体
 */
export interface DeleteVpnConnectionRequest {
  /**
   * VPN通道实例ID。形如：bmvpnx-f49l6u0z。
   */
  VpnConnectionId: string
}

/**
 * UnbindSubnetsFromNatGateway返回参数结构体
 */
export interface UnbindSubnetsFromNatGatewayResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpnConnections返回参数结构体
 */
export interface DescribeVpnConnectionsResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * VPN通道实例。
   */
  VpnConnectionSet?: Array<VpnConnection>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCustomerGateway请求参数结构体
 */
export interface DeleteCustomerGatewayRequest {
  /**
   * 对端网关ID，例如：bmcgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。
   */
  CustomerGatewayId: string
}

/**
 * NAT IP信息
 */
export interface IpInfo {
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * IP列表
   */
  Ips: Array<string>
}

/**
 * UpgradeNatGateway请求参数结构体
 */
export interface UpgradeNatGatewayRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 并发连接数规格；取值为1000000、3000000、10000000，分别对应小型、中型、大型NAT网关
   */
  MaxConcurrent: number
}

/**
 * DeleteVpnGateway返回参数结构体
 */
export interface DeleteVpnGatewayResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteInterfaces返回参数结构体
 */
export interface DeleteInterfacesResponse {
  /**
   * 异步任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindIpsFromNatGateway请求参数结构体
 */
export interface UnbindIpsFromNatGatewayRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 部分IP信息；子网须以部分IP将加入NAT网关
   */
  IpInfoSet: Array<IpInfo>
}

/**
 * CreateVirtualSubnetWithVlan返回参数结构体
 */
export interface CreateVirtualSubnetWithVlanResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpnGatewayAttribute返回参数结构体
 */
export interface ModifyVpnGatewayAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcQuota返回参数结构体
 */
export interface DescribeVpcQuotaResponse {
  /**
   * 配额信息
   */
  VpcQuotaSet?: Array<VpcQuota>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindEipsFromNatGateway返回参数结构体
 */
export interface UnbindEipsFromNatGatewayResponse {
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySubnetAttribute返回参数结构体
 */
export interface ModifySubnetAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInterfaces请求参数结构体
 */
export interface CreateInterfacesRequest {
  /**
   * 物理机实例ID列表
   */
  InstanceIds: Array<string>
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
}

/**
 * DescribeVpcPeerConnections请求参数结构体
 */
export interface DescribeVpcPeerConnectionsRequest {
  /**
   * 对等连接实例ID
   */
  VpcPeerConnectionIds?: Array<string>
  /**
   * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpcPeerConnectionIds和Filters。
过滤条件，参数不支持同时指定VpcPeerConnectionIds和Filters。
<li>peer-name - String - （过滤条件）对等连接名称。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 私有网络ID
   */
  VpcId?: string
}

/**
 * CreateVpc请求参数结构体
 */
export interface CreateVpcRequest {
  /**
   * 私有网络的名称
   */
  VpcName: string
  /**
   * 私有网络的CIDR
   */
  CidrBlock: string
  /**
   * 私有网络的可用区
   */
  Zone: string
  /**
   * 子网信息
   */
  SubnetSet?: Array<VpcSubnetCreateInfo>
  /**
   * 是否启用内网监控
   */
  EnableMonitoring?: boolean
}

/**
 * DescribeSubnetByHostedDevice返回参数结构体
 */
export interface DescribeSubnetByHostedDeviceResponse {
  /**
   * 子网个数
   */
  TotalCount?: number
  /**
   * 子网列表
   */
  Data?: Array<SubnetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVpcPeerConnection请求参数结构体
 */
export interface CreateVpcPeerConnectionRequest {
  /**
   * 本端VPC唯一ID
   */
  VpcId: string
  /**
   * 对端VPC唯一ID
   */
  PeerVpcId: string
  /**
   * 对端地域，取值范围为gz,sh,bj,hk,cd,de,sh_bm,gz_bm,bj_bm,cq_bm等
   */
  PeerRegion: string
  /**
   * 对等连接名称
   */
  VpcPeerConnectionName: string
  /**
   * 对端账户OwnerUin（默认值为本端账户）
   */
  PeerUin?: string
  /**
   * 跨地域必传，带宽上限值
   */
  Bandwidth?: number
}

/**
 * 对端网关
 */
export interface CustomerGateway {
  /**
   * 用户网关唯一ID
   */
  CustomerGatewayId: string
  /**
   * 网关名称
   */
  CustomerGatewayName: string
  /**
   * 公网地址
   */
  IpAddress: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * VPN通道引用个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpnConnNum: number
}

/**
 * ModifyRoutePolicy返回参数结构体
 */
export interface ModifyRoutePolicyResponse {
  /**
   * 异步任务ID
   */
  TaskId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AsyncRegisterIps返回参数结构体
 */
export interface AsyncRegisterIpsResponse {
  /**
   * 任务ID。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpc返回参数结构体
 */
export interface DeleteVpcResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindIpsToNatGateway返回参数结构体
 */
export interface BindIpsToNatGatewayResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPC限额信息
 */
export interface VpcQuota {
  /**
   * 配额类型ID
   */
  TypeId: number
  /**
   * 配额
   */
  Quota: number
}

/**
 * CreateNatGateway返回参数结构体
 */
export interface CreateNatGatewayResponse {
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AsyncRegisterIps请求参数结构体
 */
export interface AsyncRegisterIpsRequest {
  /**
   * 私有网络的唯一ID。
   */
  VpcId: string
  /**
   * 子网唯一ID。
   */
  SubnetId: string
  /**
   * 需要注册的IP列表。
   */
  Ips: Array<string>
}

/**
 * BindIpsToNatGateway请求参数结构体
 */
export interface BindIpsToNatGatewayRequest {
  /**
   * NAT网关ID，例如：nat-kdm476mp
   */
  NatId: string
  /**
   * 私有网络ID，例如：vpc-kd7d06of
   */
  VpcId: string
  /**
   * 部分IP信息，子网下只有该部分IP将加入NAT，仅当网关转发模式为IP方式有效
   */
  IpInfoSet: Array<IpInfo>
}

/**
 * DescribeVpcs返回参数结构体
 */
export interface DescribeVpcsResponse {
  /**
   * VPC列表
   */
  VpcSet?: Array<VpcInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建子网时的子网类型
 */
export interface SubnetCreateInputInfo {
  /**
   * 子网名称，可任意命名，但不得超过60个字符
   */
  SubnetName: string
  /**
   * 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠
   */
  CidrBlock: string
  /**
   * 是否开启子网分布式网关，默认传1，传0为关闭子网分布式网关。关闭分布式网关子网用于云服务器化子网，此子网中只能有一台物理机，同时此物理机及其上子机只能在此子网中
   */
  DistributedFlag?: number
  /**
   * 是否开启dhcp relay ，关闭为0，开启为1。默认为0
   */
  DhcpEnable?: number
  /**
   * DHCP SERVER 的IP地址数组。IP地址为相同VPC的子网内分配的IP
   */
  DhcpServerIp?: Array<string>
  /**
   * 预留的IP个数。从该子网的最大可分配IP倒序分配N个IP 用于DHCP 动态分配使用的地址段
   */
  IpReserve?: number
  /**
   * 子网绑定的vlanId。VlanId取值范围为2000-2999。创建物理机子网，VlanId默认为5; 创建docker子网或者虚拟子网，VlanId默认会分配2000--2999未使用的数值。
   */
  VlanId?: number
  /**
   * 黑石子网的可用区
   */
  Zone?: string
  /**
   * 是否25G子网，1为是，0为否。
   */
  IsSmartNic?: number
}

/**
 * DeregisterIps请求参数结构体
 */
export interface DeregisterIpsRequest {
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 注销指定IP的列表
   */
  IpSet: Array<string>
  /**
   * 私有网络子网ID
   */
  SubnetId?: string
}

/**
 * SecurityPolicyDatabase策略
 */
export interface SecurityPolicyDatabase {
  /**
   * 本端网段
   */
  LocalCidrBlock: string
  /**
   * 对端网段
   */
  RemoteCidrBlock: Array<string>
}

/**
 * VPC占用资源
 */
export interface VpcResource {
  /**
   * 私有网络ID
   */
  VpcId: string
  /**
   * 私有网络名称
   */
  VpcName: string
  /**
   * 私有网络的CIDR
   */
  CidrBlock: string
  /**
   * 子网个数
   */
  SubnetNum: number
  /**
   * NAT个数
   */
  NatNum: number
  /**
   * VPC状态
   */
  State: string
  /**
   * 是否开启监控
   */
  MonitorFlag: boolean
  /**
   * 物理机个数
   */
  CpmNum: number
  /**
   * 可用IP个数
   */
  LeaveIpNum: number
  /**
   * 负载均衡个数
   */
  LbNum: number
  /**
   * 流量镜像网关个数
   */
  TrafficMirrorNum: number
  /**
   * 弹性IP个数
   */
  EipNum: number
  /**
   * 专线网关个数
   */
  PlgwNum: number
  /**
   * 专线通道个数
   */
  PlvpNum: number
  /**
   * ssl vpn网关个数
   */
  SslVpnGwNum: number
  /**
   * 对等链接个数
   */
  VpcPeerNum: number
  /**
   * ipsec vpn网关个数
   */
  IpsecVpnGwNum: number
  /**
   * 可用区
   */
  Zone: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 是否老专区VPC
   */
  IsOld: boolean
  /**
   * 云联网服务个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CcnServiceNum: number
  /**
   * VPC允许创建的对等连接个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcPeerLimitToAllRegion: number
  /**
   * VPC允许创建的同地域的对等连接的个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcPeerLimitToSameRegion: number
  /**
   * 整型私有网络ID
   */
  IntVpcId: number
}

/**
 * UpgradeNatGateway返回参数结构体
 */
export interface UpgradeNatGatewayResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNatGateway返回参数结构体
 */
export interface DeleteNatGatewayResponse {
  /**
   * 任务ID
   */
  TaskId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

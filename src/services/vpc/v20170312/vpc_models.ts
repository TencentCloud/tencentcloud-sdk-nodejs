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
 * GenerateVpnConnectionDefaultHealthCheckIp请求参数结构体
 */
export interface GenerateVpnConnectionDefaultHealthCheckIpRequest {
  /**
   * VPN网关id， 例如：vpngw-1w9tue3d
   */
  VpnGatewayId: string
}

/**
 * CreateNetworkAcl返回参数结构体
 */
export interface CreateNetworkAclResponse {
  /**
   * 网络ACL实例。
   */
  NetworkAcl?: NetworkAcl
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网络ACL
 */
export interface NetworkAcl {
  /**
   * `VPC`实例`ID`。
   */
  VpcId?: string
  /**
   * 网络ACL实例`ID`。
   */
  NetworkAclId?: string
  /**
   * 网络ACL名称，最大长度为60。
   */
  NetworkAclName?: string
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 网络ACL关联的子网数组。
   */
  SubnetSet?: Array<Subnet>
  /**
   * 该参数仅对三元组ACL有效，网络ACl入站规则。
   */
  IngressEntries?: Array<NetworkAclEntry>
  /**
   * 该参数仅对三元组ACL有效，网络ACL出站规则。
   */
  EgressEntries?: Array<NetworkAclEntry>
  /**
   * 网络ACL类型。三元组：'TRIPLE'   五元组：'QUINTUPLE'
   */
  NetworkAclType?: string
  /**
   * 标签键值对
   */
  TagSet?: Array<Tag>
}

/**
 * ModifyAddressTemplateAttribute返回参数结构体
 */
export interface ModifyAddressTemplateAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateDhcpIpWithAddressIp请求参数结构体
 */
export interface DisassociateDhcpIpWithAddressIpRequest {
  /**
   * `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。必须是已绑定`EIP`的`DhcpIp`。
   */
  DhcpIpId: string
}

/**
 * 用户安全组配额限制。
 */
export interface SecurityGroupLimitSet {
  /**
   * 每个项目每个地域可创建安全组数
   */
  SecurityGroupLimit?: number
  /**
   * 安全组下的最大规则数
   */
  SecurityGroupPolicyLimit?: number
  /**
   * 安全组下嵌套安全组规则数
   */
  ReferedSecurityGroupLimit?: number
  /**
   * 单安全组关联实例数
   */
  SecurityGroupInstanceLimit?: number
  /**
   * 实例关联安全组数
   */
  InstanceSecurityGroupLimit?: number
  /**
   * 安全组展开后的规则数限制
   */
  SecurityGroupExtendedPolicyLimit?: number
  /**
   * 被引用的安全组关联CVM、ENI的实例配额
   */
  SecurityGroupReferedCvmAndEniLimit?: number
  /**
   * 被引用的安全组关联数据库、LB等服务实例配额
   */
  SecurityGroupReferedSvcLimit?: number
}

/**
 * LockCcns请求参数结构体
 */
export type LockCcnsRequest = null

/**
 * CreateRoutes请求参数结构体
 */
export interface CreateRoutesRequest {
  /**
   * 路由表实例ID。
   */
  RouteTableId: string
  /**
   * 路由策略对象。
   */
  Routes: Array<Route>
}

/**
 * DescribeHaVips返回参数结构体
 */
export interface DescribeHaVipsResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * `HAVIP`对象数组。
   */
  HaVipSet?: Array<HaVip>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组关联的实例统计
 */
export interface SecurityGroupAssociationStatistics {
  /**
   * 安全组实例ID。
   */
  SecurityGroupId?: string
  /**
   * 云服务器实例数。
   */
  CVM?: number
  /**
   * MySQL数据库实例数。
   */
  CDB?: number
  /**
   * 弹性网卡实例数。
   */
  ENI?: number
  /**
   * 被安全组引用数。
   */
  SG?: number
  /**
   * 负载均衡实例数。
   */
  CLB?: number
  /**
   * 全量实例的绑定统计。
   */
  InstanceStatistics?: Array<InstanceStatistic>
  /**
   * 所有资源的总计数（不包含被安全组引用数）。
   */
  TotalCount?: number
}

/**
 * DeleteServiceTemplate返回参数结构体
 */
export interface DeleteServiceTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateServiceTemplate请求参数结构体
 */
export interface CreateServiceTemplateRequest {
  /**
   * 协议端口模板名称。
   */
  ServiceTemplateName: string
  /**
   * 支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。Services与ServicesExtra必填其一。
   */
  Services?: Array<string>
  /**
   * 支持添加备注，单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。Services与ServicesExtra必填其一。
   */
  ServicesExtra?: Array<ServicesInfo>
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * CreateVpcPeeringConnection请求参数结构体
 */
export interface CreateVpcPeeringConnectionRequest {
  /**
   * 本端VPC唯一ID。
   */
  SourceVpcId: string
  /**
   * 对等连接名称。
   */
  PeeringConnectionName: string
  /**
   * 对端VPC唯一ID。
   */
  DestinationVpcId: string
  /**
   * 对端用户UIN。
   */
  DestinationUin: string
  /**
   * 对端地域。
   */
  DestinationRegion: string
  /**
   * 带宽上限，单位Mbps。
   */
  Bandwidth?: number
  /**
   * 互通类型，VPC_PEER：VPC间互通；VPC_BM_PEER：VPC与黑石网络互通。
   */
  Type?: string
  /**
   * 计费模式，日峰值POSTPAID_BY_DAY_MAX，月95POSTPAID_BY_MONTH_95。
   */
  ChargeType?: string
  /**
   * 服务分级：PT、AU、AG。
   */
  QosLevel?: string
  /**
   * 标签键值对
   */
  Tags?: Array<Tags>
}

/**
 * ResetTrafficMirrorFilter请求参数结构体
 */
export interface ResetTrafficMirrorFilterRequest {
  /**
   * 流量镜像实例ID
   */
  TrafficMirrorId: string
  /**
   * 流量镜像需要过滤的natgw实例ID
   */
  NatId?: string
  /**
   * 流量镜像需要过滤的五元组规则
   */
  CollectorNormalFilters?: Array<TrafficMirrorFilter>
}

/**
 * DescribeBandwidthPackageResources请求参数结构体
 */
export interface DescribeBandwidthPackageResourcesRequest {
  /**
   * 标识 共享带宽包 的唯一 ID 列表。共享带宽包 唯一 ID 形如：`bwp-11112222`。
   */
  BandwidthPackageId: string
  /**
   * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AddressIds`和`Filters`。详细的过滤条件如下：
<li> resource-id - String - 是否必填：否 - （过滤条件）按照 共享带宽包内资源 的唯一 ID 过滤。共享带宽包内资源 唯一 ID 形如：eip-11112222。</li>
<li> resource-type - String - 是否必填：否 - （过滤条件）按照 共享带宽包内资源 类型过滤，目前仅支持 弹性IP 和 负载均衡 两种类型，可选值为 Address 和 LoadBalance。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Limit?: number
}

/**
 * DescribeVpnConnections请求参数结构体
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * VPN通道实例ID。形如：vpnx-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnConnectionIds和Filters。
   */
  VpnConnectionIds?: Array<string>
  /**
   * 过滤条件。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpnConnectionIds和Filters。
<li>vpc-id - String - VPC实例ID，形如：`vpc-0a36uwkr`。</li>
<li>vpn-gateway-id - String - VPN网关实例ID，形如：`vpngw-p4lmqawn`。</li>
<li>customer-gateway-id - String - 对端网关实例ID，形如：`cgw-l4rblw63`。</li>
<li>vpn-connection-name - String - 通道名称，形如：`test-vpn`。</li>
<li>vpn-connection-id - String - 通道实例ID，形如：`vpnx-5p7vkch8"`。</li>
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
}

/**
 * CreateAssistantCidr请求参数结构体
 */
export interface CreateAssistantCidrRequest {
  /**
   * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`
   */
  VpcId: string
  /**
   * CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]
   */
  CidrBlocks: Array<string>
}

/**
 * RejectVpcPeeringConnection请求参数结构体
 */
export interface RejectVpcPeeringConnectionRequest {
  /**
   * 对等连接唯一ID。
   */
  PeeringConnectionId: string
}

/**
 * DescribeNetworkInterfaces请求参数结构体
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。
   */
  NetworkInterfaceIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。</li>
<li>network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。</li>
<li>attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ins-3nqpdn3i。</li>
<li>groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。</li>
<li>network-interface-name - String - （过滤条件）网卡实例名称。</li>
<li>network-interface-description - String - （过滤条件）网卡实例描述。</li>
<li>address-ip - String - （过滤条件）内网IPv4地址，单IP后缀模糊匹配，多IP精确匹配。可以与`ip-exact-match`配合做单IP的精确匹配查询。</li>
<li>ip-exact-match - Boolean - （过滤条件）内网IPv4精确匹配查询，存在多值情况，只取第一个。</li>
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。</li>
<li>is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；此过滤参数未提供时，同时过滤主网卡和辅助网卡。</li>
<li>eni-type - String -是否必填：否- （过滤条件）按照网卡类型进行过滤。“0”-辅助网卡，“1”-主网卡，“2”：中继网卡。</li>
<li>eni-qos - String -是否必填：否- （过滤条件）按照网卡服务质量进行过滤。“AG”-服务质量为云铜，“AU”-服务质量为云银。</li>
<li>address-ipv6 - String - 是否必填：否 -（过滤条件）内网IPv6地址过滤，支持多ipv6地址查询，如果和address-ip一起使用取交集。</li>
<li>public-address-ip - String - （过滤条件）公网IPv4地址，精确匹配。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeVpcLimits请求参数结构体
 */
export interface DescribeVpcLimitsRequest {
  /**
   * 配额名称。每次最大查询100个配额类型。
   */
  LimitTypes: Array<string>
}

/**
 * ReleaseIp6AddressesBandwidth返回参数结构体
 */
export interface ReleaseIp6AddressesBandwidthResponse {
  /**
   * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcIpv6Addresses请求参数结构体
 */
export interface DescribeVpcIpv6AddressesRequest {
  /**
   * `VPC`实例`ID`，形如：`vpc-f49l6u0z`。
   */
  VpcId: string
  /**
   * `IP`地址列表，批量查询单次请求最多支持`10`个。
   */
  Ipv6Addresses?: Array<string>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * VPC下的子网ID。
   */
  SubnetId?: string
}

/**
 * SSL-VPN-CLIENT 出参
 */
export interface SslVpnClient {
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * SSL-VPN-SERVER 实例ID。
   */
  SslVpnServerId?: string
  /**
   * 证书状态。
0:创建中
1:正常
2:已停用
3.已过期
4.创建出错
   */
  CertStatus?: number
  /**
   * SSL-VPN-CLIENT 实例ID。
   */
  SslVpnClientId?: string
  /**
   * 证书开始时间。
   */
  CertBeginTime?: string
  /**
   * 证书到期时间。
   */
  CertEndTime?: string
  /**
   * CLIENT NAME。
   */
  Name?: string
  /**
   * 创建CLIENT 状态。
0 创建中
1 创建出错
2 更新中
3 更新出错
4 销毁中
5 销毁出错
6 已连通
7 未知
   */
  State?: string
}

/**
 * NAT的SNAT规则
 */
export interface SourceIpTranslationNatRule {
  /**
   * 资源ID，如果ResourceType为USERDEFINED，可以为空字符串
   */
  ResourceId: string
  /**
   * 资源类型，目前包含SUBNET、NETWORKINTERFACE、USERDEFINED
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType: string
  /**
   * 源IP/网段
   */
  PrivateIpAddress: string
  /**
   * 弹性IP地址池
   */
  PublicIpAddresses: Array<string>
  /**
   * 规则描述
   */
  Description: string
  /**
   * Snat规则ID
   */
  NatGatewaySnatId?: string
  /**
   * NAT网关的ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatGatewayId?: string
  /**
   * 私有网络VPC的ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * NAT网关SNAT规则创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
}

/**
 * DescribeRoutes返回参数结构体
 */
export interface DescribeRoutesResponse {
  /**
   * 路由对象。
   */
  RouteSet?: Array<Route>
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
 * ModifyNatGatewayDestinationIpPortTranslationNatRule返回参数结构体
 */
export interface ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIp6Rule返回参数结构体
 */
export interface ModifyIp6RuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCdcLDCXList返回参数结构体
 */
export interface DeleteCdcLDCXListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetVpnGatewaysRenewFlag请求参数结构体
 */
export interface SetVpnGatewaysRenewFlagRequest {
  /**
   * VPNGW字符型ID列表。可通过[DescribeVpnGateways](https://cloud.tencent.com/document/api/215/17514)接口返回值VpnGatewaySet中的VpnGatewayId获取，只能选择包年包月的VPN实例。
   */
  VpnGatewayIds: Array<string>
  /**
   * 自动续费标记 [0, 1, 2]
0表示默认状态(初始状态)， 1表示自动续费，2表示明确不自动续费。
   */
  AutoRenewFlag: number
  /**
   * VPNGW类型['IPSEC', 'SSL']， 默认为IPSEC。
   */
  Type?: string
}

/**
 * ModifyCcnRegionBandwidthLimitsType返回参数结构体
 */
export interface ModifyCcnRegionBandwidthLimitsTypeResponse {
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
 * ModifyNetworkAclQuintupleEntries请求参数结构体
 */
export interface ModifyNetworkAclQuintupleEntriesRequest {
  /**
   * 网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 网络五元组ACL规则集。
   */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntries
}

/**
 * 协议端口模板集合
 */
export interface ServiceTemplateGroup {
  /**
   * 协议端口模板集合实例ID，例如：ppmg-2klmrefu。
   */
  ServiceTemplateGroupId?: string
  /**
   * 协议端口模板集合名称。
   */
  ServiceTemplateGroupName?: string
  /**
   * 协议端口模板实例ID。
   */
  ServiceTemplateIdSet?: Array<string>
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 最后更新时间。
   */
  UpdatedTime?: string
  /**
   * 协议端口模板实例信息。
   */
  ServiceTemplateSet?: Array<ServiceTemplate>
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
}

/**
 * CreateDhcpIp返回参数结构体
 */
export interface CreateDhcpIpResponse {
  /**
   * 新创建的`DhcpIp`信息。
   */
  DhcpIpSet?: Array<DhcpIp>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组规则对象
 */
export interface SecurityGroupPolicy {
  /**
   * 安全组规则索引号，值会随着安全组规则的变更动态变化。使用PolicyIndex时，请先调用`DescribeSecurityGroupPolicies`获取到规则的PolicyIndex，并且结合返回值中的Version一起使用处理规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyIndex?: number
  /**
   * 协议, 取值: TCP,UDP,ICMP,ICMPv6,ALL。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
  /**
   * 端口(all, 离散port,  range)。
说明：如果Protocol设置为ALL，则Port也需要设置为all。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: string
  /**
   * 协议端口ID或者协议端口组ID。ServiceTemplate和Protocol+Port互斥。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceTemplate?: ServiceTemplateSpecification
  /**
   * 网段或IP(互斥)，特殊说明：0.0.0.0/n 都会映射为0.0.0.0/0。作为入参时，可使用字符串`MY_PUBLIC_IP`指代发起请求的公网IP地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CidrBlock?: string
  /**
   * 网段或IPv6(互斥)。作为入参时，可使用字符串`MY_PUBLIC_IP`指代发起请求的公网IPv6地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ipv6CidrBlock?: string
  /**
   * 安全组实例ID，例如：sg-ohuuioma。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroupId?: string
  /**
   * IP地址ID或者IP地址组ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressTemplate?: AddressTemplateSpecification
  /**
   * ACCEPT 或 DROP。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Action?: string
  /**
   * 安全组规则描述。作为入参时，当未传递该参数或值为空，且参数CidrBlock或Ipv6CidrBlock值为MY_PUBLIC_IP时，该参数的值将会被自动填充为Replaced-From-MY_PUBLIC_IP。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyDescription?: string
  /**
   * 安全组最近修改时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
}

/**
 * DeleteVpnGatewaySslServer返回参数结构体
 */
export interface DeleteVpnGatewaySslServerResponse {
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
 * CreateHighPriorityRouteTable返回参数结构体
 */
export interface CreateHighPriorityRouteTableResponse {
  /**
   * 高优路由表信息
   */
  HighPriorityRouteTable?: HighPriorityRouteTable
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIpGeolocationInfos请求参数结构体
 */
export interface DescribeIpGeolocationInfosRequest {
  /**
   * 需查询的IP地址列表，目前仅支持IPv4地址。查询的IP地址数量上限为100个。
   */
  AddressIps: Array<string>
  /**
   * 需查询的IP地址的字段信息。
   */
  Fields?: IpField
}

/**
 * AddTemplateMember返回参数结构体
 */
export interface AddTemplateMemberResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceHighPriorityRouteTableAssociation请求参数结构体
 */
export interface ReplaceHighPriorityRouteTableAssociationRequest {
  /**
   * 高优路由表唯一 ID。
   */
  HighPriorityRouteTableId: string
  /**
   * 子网唯一 ID
   */
  SubnetId: string
}

/**
 * CreateDefaultSecurityGroup请求参数结构体
 */
export interface CreateDefaultSecurityGroupRequest {
  /**
   * 项目ID，默认0。可在<a href="https://console.cloud.tencent.com/project">qcloud控制台项目管理页面</a>查询到。
   */
  ProjectId?: string
}

/**
 * CreateSnapshotPolicies返回参数结构体
 */
export interface CreateSnapshotPoliciesResponse {
  /**
   * 快照策略。
   */
  SnapshotPolicies?: Array<SnapshotPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServiceTemplateGroups返回参数结构体
 */
export interface DescribeServiceTemplateGroupsResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 协议端口模板集合。
   */
  ServiceTemplateGroupSet?: Array<ServiceTemplateGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcEndPoint请求参数结构体
 */
export interface DescribeVpcEndPointRequest {
  /**
   * 过滤条件。
<li> end-point-service-id- String - （过滤条件）终端节点服务ID。</li>
<li>end-point-name - String - （过滤条件）终端节点实例名称。</li>
<li> end-point-id- String - （过滤条件）终端节点实例ID。</li>
<li> vpc-id- String - （过滤条件）VPC实例ID。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 单页返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 终端节点ID列表。
   */
  EndPointId?: Array<string>
}

/**
 * 资源统计项。
 */
export interface ResourceStatisticsItem {
  /**
   * 资源类型。比如，CVM，ENI等。
   */
  ResourceType?: string
  /**
   * 资源名称。
   */
  ResourceName?: string
  /**
   * 资源个数。
   */
  ResourceCount?: number
}

/**
 * ModifyVpcPeeringConnection请求参数结构体
 */
export interface ModifyVpcPeeringConnectionRequest {
  /**
   * 对等连接ID。
   */
  PeeringConnectionId: string
  /**
   * 对等连接名称。
   */
  PeeringConnectionName?: string
  /**
   * 带宽上限，单位Mbps。
   */
  Bandwidth?: number
  /**
   * 计费模式，日峰值POSTPAID_BY_DAY_MAX，月95 POSTPAID_BY_MONTH_95。
   */
  ChargeType?: string
}

/**
 * DetachClassicLinkVpc请求参数结构体
 */
export interface DetachClassicLinkVpcRequest {
  /**
   * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * CVM实例ID查询。形如：ins-r8hr2upy。
   */
  InstanceIds: Array<string>
}

/**
 * DescribeBandwidthPackageBillUsage返回参数结构体
 */
export interface DescribeBandwidthPackageBillUsageResponse {
  /**
   * 当前计费用量
   */
  BandwidthPackageBillBandwidthSet: Array<BandwidthPackageBillBandwidth>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteBandwidthPackage返回参数结构体
 */
export interface DeleteBandwidthPackageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNatGatewayAttribute请求参数结构体
 */
export interface ModifyNatGatewayAttributeRequest {
  /**
   * NAT网关的ID，形如：`nat-df45454`。
   */
  NatGatewayId: string
  /**
   * NAT网关的名称，形如：`test_nat`。
   */
  NatGatewayName?: string
  /**
   * NAT网关最大外网出带宽(单位:Mbps)。
   */
  InternetMaxBandwidthOut?: number
  /**
   * 是否修改NAT网关绑定的安全组。
   */
  ModifySecurityGroup?: boolean
  /**
   * NAT网关绑定的安全组列表，最终状态，空列表表示删除所有安全组，形如: `['sg-1n232323', 'sg-o4242424']`
   */
  SecurityGroupIds?: Array<string>
}

/**
 * DescribeLocalGateway请求参数结构体
 */
export interface DescribeLocalGatewayRequest {
  /**
   * 查询条件：
vpc-id：按照VPCID过滤，local-gateway-name：按照本地网关名称过滤，名称支持模糊搜索，local-gateway-id：按照本地网关实例ID过滤，cdc-id：按照cdc实例ID过滤查询。
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Limit?: number
}

/**
 * 流日志
 */
export interface FlowLog {
  /**
   * 私用网络ID或者统一ID，建议使用统一ID。
   */
  VpcId?: string
  /**
   * 流日志唯一ID。
   */
  FlowLogId?: string
  /**
   * 流日志实例名字。
   */
  FlowLogName?: string
  /**
   * 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE|CCN|NAT|DCG。
   */
  ResourceType?: string
  /**
   * 资源唯一ID。
   */
  ResourceId?: string
  /**
   * 流日志采集类型，ACCEPT|REJECT|ALL。
   */
  TrafficType?: string
  /**
   * 流日志存储ID。
   */
  CloudLogId?: string
  /**
   * 流日志存储ID状态。
   */
  CloudLogState?: string
  /**
   * 流日志描述信息。
   */
  FlowLogDescription?: string
  /**
   * 流日志创建时间。
   */
  CreatedTime?: string
  /**
   * 标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  TagSet?: Array<Tag>
  /**
   * 是否启用，true-启用，false-停用。
   */
  Enable?: boolean
  /**
   * 消费端类型：cls、ckafka。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * 消费端信息，当消费端类型为ckafka时返回。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowLogStorage?: FlowLogStorage
  /**
   * 流日志存储ID对应的地域信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloudLogRegion?: string
}

/**
 * DescribeVpcLimits返回参数结构体
 */
export interface DescribeVpcLimitsResponse {
  /**
   * 私有网络配额
   */
  VpcLimitSet?: Array<VpcLimit>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrivateNatGatewayDestinationIpPortTranslationNatRule请求参数结构体
 */
export interface CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 目的端口转换规则列表。
   */
  LocalDestinationIpPortTranslationNatRules: Array<LocalDestinationIpPortTranslationNatRule>
}

/**
 * 查询nat路由的返回路由对象
 */
export interface NatDirectConnectGatewayRoute {
  /**
   * 子网的 `IPv4` `CIDR`
   */
  DestinationCidrBlock: string
  /**
   * 下一跳网关的类型，目前此接口支持的类型有：
DIRECTCONNECT：专线网关
   */
  GatewayType: string
  /**
   * 下一跳网关ID
   */
  GatewayId: string
  /**
   * 路由的创建时间
   */
  CreateTime: string
  /**
   * 路由的更新时间
   */
  UpdateTime: string
}

/**
 * IP在线查询的字段信息
 */
export interface IpField {
  /**
   * 国家字段信息
   */
  Country?: boolean
  /**
   * 省、州、郡一级行政区域字段信息
   */
  Province?: boolean
  /**
   * 市一级行政区域字段信息
   */
  City?: boolean
  /**
   * 市内区域字段信息
   */
  Region?: boolean
  /**
   * 接入运营商字段信息
   */
  Isp?: boolean
  /**
   * 骨干运营商字段信息
   */
  AsName?: boolean
  /**
   * 骨干As号
   */
  AsId?: boolean
  /**
   * 注释字段
   */
  Comment?: boolean
}

/**
 * DescribeReserveIpAddresses请求参数结构体
 */
export interface DescribeReserveIpAddressesRequest {
  /**
   * 内网保留IP唯一ID 列表
   */
  ReserveIpIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定ReserveIpIds和Filters。

reserve-ip-id  - String - （过滤条件）内网保留 IP唯一 ID，形如：rsvip-pvqgv9vi。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。
address-ip - String - （过滤条件）内网保留 IP 地址，形如：192.168.0.10。
ip-type - String - （过滤条件）业务类型 ipType，0。
name - String - （过滤条件）名称。
state - String - （过滤条件）状态，可选值：Bind， UnBind。
resource-id - String - （过滤条件）绑定的实例资源，形如：eni-059qmnif。
tag-key - String -（过滤条件）按照标签键进行过滤。
tag:tag-key - String - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。

   */
  Filters?: Array<Filter>
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 请求对象个数。
   */
  Limit?: number
}

/**
 * AddBandwidthPackageResources请求参数结构体
 */
export interface AddBandwidthPackageResourcesRequest {
  /**
   * 资源唯一ID，当前支持EIP资源和LB资源，形如'eip-xxxx', 'lb-xxxx'
   */
  ResourceIds: Array<string>
  /**
   * 带宽包唯一标识ID，形如'bwp-xxxx'
   */
  BandwidthPackageId?: string
  /**
   * 带宽包类型，当前支持'BGP'、'HIGH_QUALITY_BGP'、'ANYCAST'、'SINGLEISP_CUCC'、'SINGLEISP_CMCC'、'SINGLEISP_CTCC'等类型。
   */
  NetworkType?: string
  /**
   * 资源类型，包括'Address', 'LoadBalance'
   */
  ResourceType?: string
  /**
   * 带宽包协议类型。当前支持'ipv4'和'ipv6'协议类型。
   */
  Protocol?: string
}

/**
 * AssignIpv6SubnetCidrBlock请求参数结构体
 */
export interface AssignIpv6SubnetCidrBlockRequest {
  /**
   * 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。
   */
  VpcId: string
  /**
   * 分配 `IPv6` 子网段列表。
   */
  Ipv6SubnetCidrBlocks: Array<Ipv6SubnetCidrBlock>
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * DeleteVpnGatewaySslClient返回参数结构体
 */
export interface DeleteVpnGatewaySslClientResponse {
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
 * DescribeCrossBorderCompliance请求参数结构体
 */
export interface DescribeCrossBorderComplianceRequest {
  /**
   * （精确匹配）服务商，可选值：`UNICOM`。
   */
  ServiceProvider?: string
  /**
   * （精确匹配）合规化审批单`ID`。
   */
  ComplianceId?: number
  /**
   * （模糊查询）公司名称。
   */
  Company?: string
  /**
   * （精确匹配）统一社会信用代码。
   */
  UniformSocialCreditCode?: string
  /**
   * （模糊查询）法定代表人。
   */
  LegalPerson?: string
  /**
   * （精确查询）法人身份证号。
   */
  LegalPersonId?: string
  /**
   * （模糊查询）发证机关。
   */
  IssuingAuthority?: string
  /**
   * （模糊查询）营业执照住所。
   */
  BusinessAddress?: string
  /**
   * （精确匹配）邮编。
   */
  PostCode?: number
  /**
   * （模糊查询）经办人。
   */
  Manager?: string
  /**
   * （精确查询）经办人身份证号。
   */
  ManagerId?: string
  /**
   * （模糊查询）经办人身份证地址。
   */
  ManagerAddress?: string
  /**
   * （精确匹配）经办人联系电话。
   */
  ManagerTelephone?: string
  /**
   * （精确匹配）电子邮箱。
   */
  Email?: string
  /**
   * （精确匹配）服务开始日期，如：`2020-07-28`。
   */
  ServiceStartDate?: string
  /**
   * （精确匹配）服务结束日期，如：`2021-07-28`。
   */
  ServiceEndDate?: string
  /**
   * （精确匹配）状态。待审批：`PENDING`，通过：`APPROVED `，拒绝：`DENY`。
   */
  State?: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 返回数量
   */
  Limit?: number
}

/**
 * CreateVpc返回参数结构体
 */
export interface CreateVpcResponse {
  /**
   * Vpc对象。
   */
  Vpc?: Vpc
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPC辅助CIDR信息。
 */
export interface AssistantCidr {
  /**
   * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`
   */
  VpcId?: string
  /**
   * 辅助CIDR。形如：`172.16.0.0/16`
   */
  CidrBlock?: string
  /**
   * 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。
   */
  AssistantType?: number
  /**
   * 辅助CIDR拆分的子网。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetSet?: Array<Subnet>
}

/**
 * ModifyVpnGatewaySslClientCert请求参数结构体
 */
export interface ModifyVpnGatewaySslClientCertRequest {
  /**
   * SSL-VPN-CLIENT 实例ID列表。
   */
  SslVpnClientIds: Array<string>
}

/**
 * ModifyNetworkAclEntries请求参数结构体
 */
export interface ModifyNetworkAclEntriesRequest {
  /**
   * 网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 网络ACL规则集。NetworkAclEntrySet和NetworkAclQuintupleSet只能输入一个。
   */
  NetworkAclEntrySet?: NetworkAclEntrySet
  /**
   * 网络ACL五元组规则集。NetworkAclEntrySet和NetworkAclQuintupleSet只能输入一个。
   */
  NetworkAclQuintupleSet?: NetworkAclQuintupleEntries
  /**
   * 三元组的增量更新。该接口的默认语义为全量覆盖。当需要实现增量更新语义时，设置该参数为True。
   */
  EnableUpdateAclEntries?: boolean
}

/**
 * DescribeVpcPrivateIpAddresses请求参数结构体
 */
export interface DescribeVpcPrivateIpAddressesRequest {
  /**
   * `VPC`实例`ID`，形如：`vpc-f49l6u0z`。
   */
  VpcId: string
  /**
   * 内网`IP`地址列表，批量查询单次请求最多支持`10`个。
   */
  PrivateIpAddresses: Array<string>
}

/**
 * IP地址模板
 */
export interface AddressTemplate {
  /**
   * IP地址模板名称。
   */
  AddressTemplateName?: string
  /**
   * IP地址模板实例唯一ID。
   */
  AddressTemplateId?: string
  /**
   * IP地址信息。
   */
  AddressSet?: Array<string>
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 最后更新时间。
   */
  UpdatedTime?: string
  /**
   * 带备注的IP地址信息。
   */
  AddressExtraSet?: Array<AddressInfo>
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
}

/**
 * StopTrafficMirror返回参数结构体
 */
export interface StopTrafficMirrorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteHaVip返回参数结构体
 */
export interface DeleteHaVipResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPN网关配额对象
 */
export interface VpnGatewayQuota {
  /**
   * 带宽配额
   */
  Bandwidth?: number
  /**
   * 配额中文名称
   */
  Cname?: string
  /**
   * 配额英文名称
   */
  Name?: string
}

/**
 * DeleteVpnGatewaySslClient请求参数结构体
 */
export interface DeleteVpnGatewaySslClientRequest {
  /**
   * SSL-VPN-CLIENT 实例ID。不可和SslVpnClientIds同时使用。
   */
  SslVpnClientId?: string
  /**
   * SSL-VPN-CLIENT 实例ID列表。批量删除时使用。不可和SslVpnClientId同时使用。
   */
  SslVpnClientIds?: Array<string>
}

/**
 * DescribeBandwidthPackageBillUsage请求参数结构体
 */
export interface DescribeBandwidthPackageBillUsageRequest {
  /**
   * 后付费共享带宽包的唯一ID
   */
  BandwidthPackageId: string
}

/**
 * 路由表选择策略信息
 */
export interface CcnRouteTableSelectPolicy {
  /**
   * 实例类型：
私有网络: `VPC`
专线网关: `DIRECTCONNECT`
黑石私有网络: `BMVPC`
EDGE设备: `EDGE`
EDGE隧道: `EDGE_TUNNEL`
EDGE网关: `EDGE_VPNGW`
VPN网关：`VPNGW`
   */
  InstanceType: string
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 源端CIDR。
   */
  SourceCidrBlock: string
  /**
   * 路由表ID。
   */
  RouteTableId: string
  /**
   * 路由表备注。
   */
  Description?: string
}

/**
 * DescribeRouteTableSelectionPolicies返回参数结构体
 */
export interface DescribeRouteTableSelectionPoliciesResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 路由表选择策略信息集合。
   */
  RouteSelectionPolicySet?: Array<RouteSelectionPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnassignIpv6Addresses返回参数结构体
 */
export interface UnassignIpv6AddressesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIp6Translators返回参数结构体
 */
export interface CreateIp6TranslatorsResponse {
  /**
   * 转换实例的唯一ID数组，形如"ip6-xxxxxxxx"
   */
  Ip6TranslatorSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowLogs请求参数结构体
 */
export interface DescribeFlowLogsRequest {
  /**
   * 私用网络ID或者统一ID，建议使用统一ID。
   */
  VpcId?: string
  /**
   * 流日志唯一ID。
   */
  FlowLogId?: string
  /**
   * 流日志实例名字。
   */
  FlowLogName?: string
  /**
   * 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE。
   */
  ResourceType?: string
  /**
   * 资源唯一ID。
   */
  ResourceId?: string
  /**
   * 流日志采集类型，ACCEPT|REJECT|ALL。
   */
  TrafficType?: string
  /**
   * 流日志存储ID。
   */
  CloudLogId?: string
  /**
   * 流日志存储ID状态。
   */
  CloudLogState?: string
  /**
   * 按某个字段排序,支持字段：flowLogName,createTime，默认按CreatedTime。
   */
  OrderField?: string
  /**
   * 升序（ASC）还是降序（DESC）,默认：DESC。
   */
  OrderDirection?: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 每页行数，默认为10。
   */
  Limit?: number
  /**
   * 过滤条件，参数不支持同时指定FlowLogId和Filters。
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。</li>
   */
  Filters?: Filter
  /**
   * 流日志存储ID对应的地域信息。
   */
  CloudLogRegion?: string
}

/**
 * 云联网（CCN）地域出带宽上限。
 */
export interface CcnRegionBandwidthLimitInfo {
  /**
   * 源地域，例如：ap-shanghai
   */
  SourceRegion?: string
  /**
   * 目的地域， 例如：ap-shanghai
   */
  DestinationRegion?: string
  /**
   * 出带宽上限，单位：Mbps。
   */
  BandwidthLimit?: number
}

/**
 * CloneSecurityGroup请求参数结构体
 */
export interface CloneSecurityGroupRequest {
  /**
   * 安全组实例ID，例如sg-33ocnj9n，可通过<a href="https://cloud.tencent.com/document/product/215/15808">DescribeSecurityGroups</a>获取。
   */
  SecurityGroupId: string
  /**
   * 安全组名称，可任意命名，但不得超过60个字符。未提供参数时，克隆后的安全组名称和SecurityGroupId对应的安全组名称相同。
   */
  GroupName?: string
  /**
   * 安全组备注，最多100个字符。未提供参数时，克隆后的安全组备注和SecurityGroupId对应的安全组备注相同。
   */
  GroupDescription?: string
  /**
   * 项目ID，默认0。可在<a href="https://console.cloud.tencent.com/project">qcloud控制台项目管理页面</a>查询到。
   */
  ProjectId?: string
  /**
   * 源Region,跨地域克隆安全组时，需要传入源安全组所属地域信息，例如：克隆广州的安全组到上海，则这里需要传入广州安全的地域信息：ap-guangzhou。
   */
  RemoteRegion?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
若指定Tags入参且指定IsCloneTags为true，会合并源安全组的标签和新增的标签。
   */
  Tags?: Array<Tag>
}

/**
 * AssociateNatGatewayAddress请求参数结构体
 */
export interface AssociateNatGatewayAddressRequest {
  /**
   * NAT网关的ID，形如：`nat-df45454`。
   */
  NatGatewayId: string
  /**
   * 需要申请的弹性IP个数，系统会按您的要求生产N个弹性IP, 其中AddressCount和PublicAddresses至少传递一个。
   */
  AddressCount?: number
  /**
   * 绑定NAT网关的弹性IP数组，其中AddressCount和PublicAddresses至少传递一个。
   */
  PublicIpAddresses?: Array<string>
  /**
   * 弹性IP可用区，自动分配弹性IP时传递。
   */
  Zone?: string
  /**
   * 绑定NAT网关的弹性IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。
   */
  StockPublicIpAddressesBandwidthOut?: number
  /**
   * 需要申请公网IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。
   */
  PublicIpAddressesBandwidthOut?: number
  /**
   * 公网IP是否强制与NAT网关来自同可用区，true表示需要与NAT网关同可用区；false表示可与NAT网关不是同一个可用区。此参数只有当参数Zone存在时才能生效。
   */
  PublicIpFromSameZone?: boolean
}

/**
 * DescribeFlowLogs返回参数结构体
 */
export interface DescribeFlowLogsResponse {
  /**
   * 流日志实例集合。
   */
  FlowLog?: Array<FlowLog>
  /**
   * 流日志总数目。
   */
  TotalNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云联网实例绑定路由表信息
 */
export interface InstanceBind {
  /**
   * 云联网ID。
   */
  CcnId?: string
  /**
   * 实例类型：VPC，DIRECTCONNECT，BMVPC，EDGE，EDGE_TUNNEL，EDGE_VPNGW，VPNGW。
   */
  InstanceType?: string
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 实例绑定路由表的时间。
   */
  InstanceBindTime?: string
  /**
   * 路由表ID。
   */
  RouteTableId?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 实例所在地域。
   */
  InstanceRegion?: string
  /**
   * 实例所属的账户uin。
   */
  InstanceUin?: string
  /**
   * 关联实例状态：
<li>`PENDING`：申请中</li>
<li>`ACTIVE`：已连接</li>
<li>`EXPIRED`：已过期</li>
<li>`REJECTED`：已拒绝</li>
<li>`DELETED`：已删除</li>
<li>`FAILED`：失败的（2小时后将异步强制解关联）</li>
<li>`ATTACHING`：关联中</li>
<li>`DETACHING`：解关联中</li>
<li>`DETACHFAILED`：解关联失败（2小时后将异步强制解关联）</li>
   */
  State?: string
}

/**
 * ModifyHighPriorityRouteAttribute返回参数结构体
 */
export interface ModifyHighPriorityRouteAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVpnGatewaySslServer请求参数结构体
 */
export interface CreateVpnGatewaySslServerRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * SSL-VPN-SERVER 实例名称，长度不超过60个字节。
   */
  SslVpnServerName: string
  /**
   * 客户端地址网段。
   */
  RemoteAddress: string
  /**
   * 云端地址（CIDR）列表。
   */
  LocalAddress?: Array<string>
  /**
   * SSL VPN服务端监听协议。当前仅支持 UDP，默认UDP。
   */
  SslVpnProtocol?: string
  /**
   * SSL VPN服务端监听协议端口，默认1194。
   */
  SslVpnPort?: number
  /**
   * 认证算法。可选 'SHA1'，默认SHA1。
   */
  IntegrityAlgorithm?: string
  /**
   * 加密算法。可选 'AES-128-CBC','AES-192-CBC', 'AES-256-CBC', 默认AES-128-CBC。
   */
  EncryptAlgorithm?: string
  /**
   * 是否支持压缩。当前不支持压缩，默认False。
   */
  Compress?: boolean
  /**
   * 是否开启SSO认证。默认为False。该功能当前需要申请开白使用。
   */
  SsoEnabled?: boolean
  /**
   * 是否开启策略访问控制。默认为False
   */
  AccessPolicyEnabled?: boolean
  /**
   * SAML-DATA，开启SSO时传。
   */
  SamlData?: string
  /**
   * 指定绑定的标签列表
   */
  Tags?: Array<Tag>
}

/**
 * CreateVpcEndPoint请求参数结构体
 */
export interface CreateVpcEndPointRequest {
  /**
   * VPC实例ID。
   */
  VpcId: string
  /**
   * 子网实例ID。
   */
  SubnetId: string
  /**
   * 终端节点名称。
   */
  EndPointName: string
  /**
   * 终端节点服务ID。
   */
  EndPointServiceId: string
  /**
   * 终端节点VIP，可以指定IP申请。
   */
  EndPointVip?: string
  /**
   * 安全组ID。
   */
  SecurityGroupId?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * ModifyBandwidthPackageAttribute请求参数结构体
 */
export interface ModifyBandwidthPackageAttributeRequest {
  /**
   * 带宽包唯一标识ID
   */
  BandwidthPackageId: string
  /**
   * 带宽包名称
   */
  BandwidthPackageName: string
  /**
   * 带宽包计费模式，示例 ：
'TOP5_POSTPAID_BY_MONTH'（后付费-TOP5计费）
   */
  ChargeType?: string
}

/**
 * TransformAddress返回参数结构体
 */
export interface TransformAddressResponse {
  /**
   * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
   */
  TaskId?: number
  /**
   * 转为弹性公网IP后的唯一ID
   */
  AddressId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateNetworkInterfaceSecurityGroups请求参数结构体
 */
export interface DisassociateNetworkInterfaceSecurityGroupsRequest {
  /**
   * 弹性网卡实例ID。形如：eni-pxir56ns。每次请求的实例的上限为100。
   */
  NetworkInterfaceIds: Array<string>
  /**
   * 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。
   */
  SecurityGroupIds: Array<string>
}

/**
 * DeleteNetworkAclEntries请求参数结构体
 */
export interface DeleteNetworkAclEntriesRequest {
  /**
   * 三元组网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 三元组网络ACL规则集。
   */
  NetworkAclEntrySet?: NetworkAclEntrySet
}

/**
 * 安全组规则集合
 */
export interface SecurityGroupPolicySet {
  /**
   * 安全组规则当前版本。用户每次更新安全规则版本会自动加1，防止更新的路由规则已过期，不填不考虑冲突。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 出站规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Egress?: Array<SecurityGroupPolicy>
  /**
   * 入站规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ingress?: Array<SecurityGroupPolicy>
  /**
   * 安全组策略条目统计。只用于出参。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyStatistics?: PolicyStatistics
}

/**
 * DescribeHighPriorityRoutes请求参数结构体
 */
export interface DescribeHighPriorityRoutesRequest {
  /**
   * 高优路由表唯一 ID。
   */
  HighPriorityRouteTableId: string
  /**
   * <li>gateway-id - String - （过滤条件）网关ID。</li>
<li>description - String - （过滤条件）路由描述。</li>
<li>dest-cidr - String - （过滤条件）目的端地址，支持模糊左匹配。</li>
<li>subnet-route-algorithm - String - （过滤条件）现在支持的算法有：ECMP_QUINTUPLE_HASH：五元组hash，ECMP_SOURCE_DESTINATION_IP_HASH：源和目的IP hash，ECMP_DESTINATION_IP_HASH：目的IP hash，ECMP_SOURCE_IP_HASH：源IP hash。</li>
<li>is-cdc - String - （过滤条件）CDC属性高优路由表。</li>
<li>cdc-id - String - （过滤条件）CDC 集群唯一 ID 。</li>

   */
  Filters?: Array<Filter>
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 请求对象个数。
   */
  Limit?: number
}

/**
 * ModifyFlowLogAttribute请求参数结构体
 */
export interface ModifyFlowLogAttributeRequest {
  /**
   * 流日志唯一ID。
   */
  FlowLogId: string
  /**
   * 私用网络ID或者统一ID，建议使用统一ID，修改云联网流日志属性时可不填，其他流日志类型必填。
   */
  VpcId?: string
  /**
   * 流日志实例名字。
   */
  FlowLogName?: string
  /**
   * 流日志实例描述。
   */
  FlowLogDescription?: string
}

/**
 * UnassignIpv6SubnetCidrBlock返回参数结构体
 */
export interface UnassignIpv6SubnetCidrBlockResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceHighPriorityRoutes返回参数结构体
 */
export interface ReplaceHighPriorityRoutesResponse {
  /**
   * 新的高优路由表条目列表。
   */
  NewHighPriorityRouteSet?: Array<HighPriorityRoute>
  /**
   * 旧的高优路由表条目列表。
   */
  OldHighPriorityRouteSet?: Array<HighPriorityRoute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpcEndPointServiceAttribute请求参数结构体
 */
export interface ModifyVpcEndPointServiceAttributeRequest {
  /**
   * 终端节点服务ID。
   */
  EndPointServiceId: string
  /**
   * VPCID。
   */
  VpcId: string
  /**
   * 终端节点服务名称。
   */
  EndPointServiceName?: string
  /**
   * 是否自动接受终端节点的连接请求。<ul><li>true：自动接受</li><li>false：不自动接受</li></ul>
   */
  AutoAcceptFlag?: boolean
  /**
   * 后端服务的ID，比如lb-xxx。
   */
  ServiceInstanceId?: string
}

/**
 * 过滤器键值对
 */
export interface FilterObject {
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
 * DescribeIpGeolocationInfos返回参数结构体
 */
export interface DescribeIpGeolocationInfosResponse {
  /**
   * IP地址信息列表。
   */
  AddressInfo?: Array<IpGeolocationInfo>
  /**
   * IP地址信息个数。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcTaskResult请求参数结构体
 */
export interface DescribeVpcTaskResultRequest {
  /**
   * 异步任务请求返回的RequestId。
   */
  TaskId: string
}

/**
 * AssociateNetworkAclSubnets返回参数结构体
 */
export interface AssociateNetworkAclSubnetsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateNatGatewayTranslationNatRule请求参数结构体
 */
export interface DeletePrivateNatGatewayTranslationNatRuleRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 转换规则对象数组。
   */
  TranslationNatRules: Array<TranslationNatRule>
  /**
   * 跨域参数，当VPC为跨域时填写为True。
   */
  CrossDomain?: boolean
}

/**
 * DeleteNatGatewayDestinationIpPortTranslationNatRule请求参数结构体
 */
export interface DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /**
   * NAT网关的ID，形如：`nat-df45454`。
   */
  NatGatewayId: string
  /**
   * NAT网关的端口转换规则。
   */
  DestinationIpPortTranslationNatRules: Array<DestinationIpPortTranslationNatRule>
}

/**
 * ResetRoutes请求参数结构体
 */
export interface ResetRoutesRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string
  /**
   * 路由表名称，最大长度不能超过60个字节。
   */
  RouteTableName: string
  /**
   * 路由策略。
   */
  Routes: Array<Route>
}

/**
 * 弹性网卡绑定关系
 */
export interface NetworkInterfaceAttachment {
  /**
   * 网卡在云主机实例内的序号。
   */
  DeviceIndex?: number
  /**
   * 云主机所有者账户信息。
   */
  InstanceAccountId?: string
  /**
   * 绑定时间。
   */
  AttachTime?: string
  /**
   * 云主机实例ID。
   */
  InstanceId?: string
}

/**
 * CheckDefaultSubnet请求参数结构体
 */
export interface CheckDefaultSubnetRequest {
  /**
   * 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。
   */
  Zone?: string
}

/**
 * 对等连接实例信息。
 */
export interface PeerConnection {
  /**
   * 本端VPC唯一ID。
   */
  SourceVpcId?: string
  /**
   * 对端VPC唯一ID。
   */
  PeerVpcId?: string
  /**
   * 对等连接唯一ID。
   */
  PeeringConnectionId?: string
  /**
   * 对等连接名称。
   */
  PeeringConnectionName?: string
  /**
   * 对等连接状态，PENDING，投放中；ACTIVE，使用中；REJECTED，已拒绝‘DELETED，已删除；FAILED，失败；EXPIRED，已过期；ISOLATED，隔离中。
   */
  State?: string
  /**
   * 是否是新控制器，true: 是NewAfc；false:不是。
   */
  IsNgw?: boolean
  /**
   * 对等连接带宽值。
   */
  Bandwidth?: number
  /**
   * 本端地域。
   */
  SourceRegion?: string
  /**
   * 对端地域。
   */
  DestinationRegion?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 本端APPID。
   */
  AppId?: number
  /**
   * 对端APPID。
   */
  PeerAppId?: number
  /**
   * 计费类型，POSTPAID_BY_DAY_MAX：日峰值计费；POSTPAID_BY_MONTH_95：月95计费。
   */
  ChargeType?: string
  /**
   * 本端UIN。
   */
  SourceUin?: number
  /**
   * 对端UIN。
   */
  DestinationUin?: number
  /**
   * 资源标签数据。
   */
  TagSet?: Array<Tag>
  /**
   * 服务分级：PT、AU、AG。
   */
  QosLevel?: string
  /**
   * 互通类型，VPC_PEER：VPC间互通；VPC_BM_PEER：VPC与黑石网络互通。
   */
  Type?: string
  /**
   * 对端VPC唯一ID。
   */
  DestinationVpcId?: string
}

/**
 * CheckNetDetectState请求参数结构体
 */
export interface CheckNetDetectStateRequest {
  /**
   * 探测目的IPv4地址数组，最多两个。
   */
  DetectDestinationIp: Array<string>
  /**
   * 网络探测实例ID。形如：netd-12345678。该参数与（VpcId，SubnetId，NetDetectName），至少要有一个。当NetDetectId存在时，使用NetDetectId。
   */
  NetDetectId?: string
  /**
   * `VPC`实例`ID`。形如：`vpc-12345678`。该参数与（SubnetId，NetDetectName）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。
   */
  VpcId?: string
  /**
   * 子网实例ID。形如：subnet-12345678。该参数与（VpcId，NetDetectName）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。
   */
  SubnetId?: string
  /**
   * 网络探测名称，最大长度不能超过60个字节。该参数与（VpcId，SubnetId）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。
   */
  NetDetectName?: string
  /**
   * 下一跳类型，目前我们支持的类型有：
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
NAT：NAT网关；
NORMAL_CVM：普通云服务器；
CCN：云联网网关；
NONEXTHOP：无下一跳；
   */
  NextHopType?: string
  /**
   * 下一跳目的网关，取值与“下一跳类型”相关：
下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；
下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；
下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；
下一跳类型为NAT，取值Nat网关，形如：nat-12345678；
下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；
下一跳类型为CCN，取值云联网ID，形如：ccn-12345678；
下一跳类型为NONEXTHOP，指定网络探测为无下一跳的网络探测；
   */
  NextHopDestination?: string
}

/**
 * 路由表关联关系
 */
export interface RouteTableAssociation {
  /**
   * 子网实例ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 路由表实例ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RouteTableId?: string
}

/**
 * ModifyCustomerGatewayAttribute请求参数结构体
 */
export interface ModifyCustomerGatewayAttributeRequest {
  /**
   * 对端网关ID，例如：cgw-2wqq41m9，可通过[DescribeCustomerGateways](https://cloud.tencent.com/document/api/215/17516)接口查询对端网关。
   */
  CustomerGatewayId: string
  /**
   * 对端网关名称，可任意命名，但不得超过60个字符。
   */
  CustomerGatewayName: string
  /**
   * BGP ASN。只有开启BGP白名单才可以修改此参数。
   */
  BgpAsn?: number
}

/**
 * DescribeBandwidthPackageBandwidthRange返回参数结构体
 */
export interface DescribeBandwidthPackageBandwidthRangeResponse {
  /**
   * 带宽包带宽上下限详细信息。
   */
  BandwidthRangeSet?: Array<BandwidthRange>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpcEndPointServiceWhiteList请求参数结构体
 */
export interface DeleteVpcEndPointServiceWhiteListRequest {
  /**
   * 用户UIN数组。
   */
  UserUin: Array<string>
  /**
   * 终端节点服务ID。
   */
  EndPointServiceId: string
}

/**
 * DescribeTrafficMirrors请求参数结构体
 */
export interface DescribeTrafficMirrorsRequest {
  /**
   * 流量镜像实例ID集合
   */
  TrafficMirrorIds?: Array<string>
  /**
   * 流量镜像查询过滤调节。
vpc-id ：VPC实例ID，例如：vpc-f49l6u0z。
traffic-mirror-id：流量镜像实例ID。
traffic-mirror-name：流量镜像名称。
tag-key ：按照标签键进行过滤。
   */
  Filters?: Filter
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * DetachSnapshotInstances返回参数结构体
 */
export interface DetachSnapshotInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachNetworkInterface返回参数结构体
 */
export interface DetachNetworkInterfaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpcEndPointService请求参数结构体
 */
export interface DeleteVpcEndPointServiceRequest {
  /**
   * 终端节点ID。
   */
  EndPointServiceId: string
}

/**
 * DeleteCcn返回参数结构体
 */
export interface DeleteCcnResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 协议端口模板
 */
export interface ServiceTemplate {
  /**
   * 协议端口实例ID，例如：ppm-f5n1f8da。
   */
  ServiceTemplateId?: string
  /**
   * 模板名称。
   */
  ServiceTemplateName?: string
  /**
   * 协议端口信息。
   */
  ServiceSet?: Array<string>
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 最后更新时间。
   */
  UpdatedTime?: string
  /**
   * 带备注的协议端口信息。
   */
  ServiceExtraSet?: Array<ServicesInfo>
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
}

/**
 * DescribeCcnAttachedInstances请求参数结构体
 */
export interface DescribeCcnAttachedInstancesRequest {
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 返回数量
   */
  Limit?: number
  /**
   * 过滤条件：
<li>ccn-id - String -（过滤条件）CCN实例ID。</li>
<li>instance-type - String -（过滤条件）关联实例类型。</li>
<li>instance-region - String -（过滤条件）关联实例所属地域。</li>
<li>instance-id - String -（过滤条件）关联实例ID。</li>
   */
  Filters?: Array<Filter>
  /**
   * 云联网实例ID
   */
  CcnId?: string
  /**
   * 排序字段。支持：`CcnId` `InstanceType` `InstanceId` `InstanceName` `InstanceRegion` `AttachedTime` `State`。默认值：`AttachedTime`
   */
  OrderField?: string
  /**
   * 排序方法。升序：`ASC`，倒序：`DESC`。默认值：`ASC`
   */
  OrderDirection?: string
}

/**
 * AttachSnapshotInstances返回参数结构体
 */
export interface AttachSnapshotInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatGatewaySourceIpTranslationNatRules请求参数结构体
 */
export interface DescribeNatGatewaySourceIpTranslationNatRulesRequest {
  /**
   * NAT网关统一 ID，形如：`nat-123xx454`。
   */
  NatGatewayId: string
  /**
   * 过滤条件:
<li> resource-id，Subnet的ID或者Cvm ID，如`subnet-0yi4hekt`</li>
<li> public-ip-address，弹性IP，如`139.199.232.238`</li>
<li>description，规则描述。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeNatGateways请求参数结构体
 */
export interface DescribeNatGatewaysRequest {
  /**
   * NAT网关统一 ID，形如：`nat-123xx454`。每次请求的实例上限为100。参数不支持同时指定NatGatewayIds和Filters。
   */
  NatGatewayIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定NatGatewayIds和Filters。每次请求的Filters的上限为10，Filter.Values的上限为5。
<li>nat-gateway-id - String - （过滤条件）协议端口模板实例ID，形如：`nat-123xx454`。</li>
<li>vpc-id - String - （过滤条件）私有网络 唯一ID，形如：`vpc-123xx454`。</li>
<li>nat-gateway-name - String - （过滤条件）协议端口模板实例ID，形如：`test_nat`。</li>
<li>tag-key - String - （过滤条件）标签键，形如：`test-key`。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * ModifyFlowLogAttribute返回参数结构体
 */
export interface ModifyFlowLogAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceRenewVpnGateway返回参数结构体
 */
export interface InquiryPriceRenewVpnGatewayResponse {
  /**
   * 商品价格。
   */
  Price?: Price
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteReserveIpAddresses返回参数结构体
 */
export interface DeleteReserveIpAddressesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetRoutes返回参数结构体
 */
export interface ResetRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateNatGatewayRegions返回参数结构体
 */
export interface DescribePrivateNatGatewayRegionsResponse {
  /**
   * 地域对象
   */
  RegionSet: Array<NatRegionInfoWithArea>
  /**
   * 返回可支持地域总数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceSecurityGroupPolicies返回参数结构体
 */
export interface ReplaceSecurityGroupPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDirectConnectGateways请求参数结构体
 */
export interface DescribeDirectConnectGatewaysRequest {
  /**
   * 专线网关唯一`ID`，形如：`dcg-9o233uri`。
   */
  DirectConnectGatewayIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定`DirectConnectGatewayIds`和`Filters`。
<li>direct-connect-gateway-id - String - 专线网关唯一`ID`，形如：`dcg-9o233uri`。</li>
<li>direct-connect-gateway-name - String - 专线网关名称，默认模糊查询。</li>
<li>direct-connect-gateway-ip - String - 专线网关`IP`。</li>
<li>gateway-type - String - 网关类型，可选值：`NORMAL`（普通型）、`NAT`（NAT型）。</li>
<li>network-type- String - 网络类型，可选值：`VPC`（私有网络类型）、`CCN`（云联网类型）。</li>
<li>ccn-id - String - 专线网关所在云联网`ID`。</li>
<li>vpc-id - String - 专线网关所在私有网络`ID`。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 返回数量。
   */
  Limit?: number
}

/**
 * DescribeSpecificTrafficPackageUsedDetails返回参数结构体
 */
export interface DescribeSpecificTrafficPackageUsedDetailsResponse {
  /**
   * 符合查询条件的共享流量包用量明细的总数
   */
  TotalCount?: number
  /**
   * 共享流量包用量明细列表
   */
  UsedDetailSet?: Array<UsedDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIPv6Addresses返回参数结构体
 */
export interface DescribeIPv6AddressesResponse {
  /**
   * 符合条件的 IPv6 数量。
   */
  TotalCount?: number
  /**
   * IPv6 详细信息列表。
   */
  AddressSet?: Array<Address>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachSnapshotInstances请求参数结构体
 */
export interface AttachSnapshotInstancesRequest {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId: string
  /**
   * 关联实例信息。
   */
  Instances: Array<SnapshotInstance>
}

/**
 * ModifyIp6Translator返回参数结构体
 */
export interface ModifyIp6TranslatorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVpcEndPointServiceWhiteList返回参数结构体
 */
export interface CreateVpcEndPointServiceWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateInstancesToCcnRouteTable请求参数结构体
 */
export interface AssociateInstancesToCcnRouteTableRequest {
  /**
   * 云联网ID。
   */
  CcnId: string
  /**
   * 路由表ID。
   */
  RouteTableId: string
  /**
   * 实例列表。
   */
  Instances: Array<CcnInstanceWithoutRegion>
}

/**
 * UnlockCcnBandwidths请求参数结构体
 */
export interface UnlockCcnBandwidthsRequest {
  /**
   * 带宽实例对象数组。
   */
  Instances: Array<CcnFlowLock>
}

/**
 * DeleteIp6Translators返回参数结构体
 */
export interface DeleteIp6TranslatorsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatGatewaySourceIpTranslationNatRules返回参数结构体
 */
export interface DescribeNatGatewaySourceIpTranslationNatRulesResponse {
  /**
   * NAT网关SNAT规则对象数组。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceIpTranslationNatRuleSet: Array<SourceIpTranslationNatRule>
  /**
   * 符合条件的NAT网关端口转发规则对象数目。
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHighPriorityRouteTables返回参数结构体
 */
export interface DescribeHighPriorityRouteTablesResponse {
  /**
   * 高优路由表对象。
   */
  HighPriorityRouteTableSet?: Array<HighPriorityRouteTable>
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
 * DescribeRouteConflicts返回参数结构体
 */
export interface DescribeRouteConflictsResponse {
  /**
   * 路由策略冲突列表。
   */
  RouteConflictSet?: Array<RouteConflict>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcceptAttachCcnInstances请求参数结构体
 */
export interface AcceptAttachCcnInstancesRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * 接受关联实例列表。
   */
  Instances: Array<CcnInstance>
}

/**
 * CreateNetworkAclQuintupleEntries返回参数结构体
 */
export interface CreateNetworkAclQuintupleEntriesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGatewayFlowMonitorDetail返回参数结构体
 */
export interface DescribeGatewayFlowMonitorDetailResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 网关流量监控明细。
   */
  GatewayFlowMonitorDetailSet?: Array<GatewayFlowMonitorDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IP地理位置信息
 */
export interface IpGeolocationInfo {
  /**
   * 国家信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Country?: string
  /**
   * 省、州、郡一级行政区域信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Province?: string
  /**
   * 市一级行政区域信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  City?: string
  /**
   * 市内区域信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 接入运营商信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Isp?: string
  /**
   * 骨干运营商名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsName?: string
  /**
   * 骨干运营商AS号
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsId?: string
  /**
   * 注释信息。目前的填充值为移动接入用户的APN值，如无APN属性则为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * IP地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressIp?: string
}

/**
 * ResetTrafficMirrorTarget返回参数结构体
 */
export interface ResetTrafficMirrorTargetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveBandwidthPackageResources返回参数结构体
 */
export interface RemoveBandwidthPackageResourcesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私网网关Snat转发规则入参
 */
export interface TranslationNatRuleInput {
  /**
   * 转换规则目标，可选值"LOCAL","PEER"。
   */
  TranslationDirection: string
  /**
   * 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。
   */
  TranslationType: string
  /**
   * 转换`IP`,当转换规则类型为四层时为`IP`池。
   */
  TranslationIp: string
  /**
   * 转换规则描述。
   */
  Description: string
  /**
   * 源`IP`,当转换规则类型为三层时有效。
   */
  OriginalIp?: string
}

/**
 * DeleteFlowLog请求参数结构体
 */
export interface DeleteFlowLogRequest {
  /**
   * 流日志唯一ID。
   */
  FlowLogId: string
  /**
   * 私用网络ID或者统一ID，建议使用统一ID，删除云联网流日志时，可不填，其他流日志类型必填。
   */
  VpcId?: string
}

/**
 * DownloadVpnGatewaySslClientCert返回参数结构体
 */
export interface DownloadVpnGatewaySslClientCertResponse {
  /**
   * SSL-VPN 客户端配置。
   */
  SslClientConfigsSet?: string
  /**
   * SSL-VPN 客户端配置。
   */
  SslClientConfig?: Array<SslClientConfig>
  /**
   * 是否鉴权成功 只有传入SamlToken 才生效，1为成功，0为失败。
   */
  Authenticated?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotFiles请求参数结构体
 */
export interface DescribeSnapshotFilesRequest {
  /**
   * 业务类型，目前支持安全组：securitygroup。
   */
  BusinessType: string
  /**
   * 业务实例Id，和BusinessType对应。
   */
  InstanceId: string
  /**
   * 开始日期，格式%Y-%m-%d %H:%M:%S。
   */
  StartDate: string
  /**
   * 结束日期，格式%Y-%m-%d %H:%M:%S。
   */
  EndDate: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大为100。
   */
  Limit?: number
}

/**
 * HaVipDisassociateAddressIp返回参数结构体
 */
export interface HaVipDisassociateAddressIpResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私网网关Snat转发规则修改
 */
export interface TranslationNatRuleDiff {
  /**
   * 转发规则目标，可选值"LOCAL","PEER"。
   */
  TranslationDirection: string
  /**
   * 转发规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。
   */
  TranslationType: string
  /**
   * 转发规则映射`IP`,当转发规则类型为四层时为`IP`池
   */
  TranslationIp: string
  /**
   * 转发规则描述。
   */
  Description: string
  /**
   * 旧转发规则映射`IP`,当转发规则类型为四层时为`IP`池
   */
  OldTranslationIp: string
  /**
   * 新转发规则源`IP`,当转发规则类型为三层时有效
   */
  OriginalIp?: string
  /**
   * 旧转发规则源`IP`,当转发规则类型为三层时有效
   */
  OldOriginalIp?: string
}

/**
 * DisassociateVpcEndPointSecurityGroups请求参数结构体
 */
export interface DisassociateVpcEndPointSecurityGroupsRequest {
  /**
   * 安全组ID数组。
   */
  SecurityGroupIds: Array<string>
  /**
   * 终端节点ID。
   */
  EndPointId: string
}

/**
 * IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议
 */
export interface IKEOptionsSpecification {
  /**
   * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBS-192', 'AES-CBC-256', 'DES-CBC'，'SM4', 默认为3DES-CBC
   */
  PropoEncryAlgorithm?: string
  /**
   * 认证算法：可选值：'MD5', 'SHA1'，'SHA-256' 默认为MD5
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
 * DescribeTaskResult请求参数结构体
 */
export interface DescribeTaskResultRequest {
  /**
   * 异步任务ID。TaskId和DealName必填一个参数
   */
  TaskId?: number
  /**
   * 计费订单号。TaskId和DealName必填一个参数
   */
  DealName?: string
}

/**
 * ModifyAddressInternetChargeType返回参数结构体
 */
export interface ModifyAddressInternetChargeTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetCcnRegionBandwidthLimits返回参数结构体
 */
export interface SetCcnRegionBandwidthLimitsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnassignIpv6SubnetCidrBlock请求参数结构体
 */
export interface UnassignIpv6SubnetCidrBlockRequest {
  /**
   * 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。
   */
  VpcId: string
  /**
   * `IPv6` 子网段列表。
   */
  Ipv6SubnetCidrBlocks: Array<Ipv6SubnetCidrBlock>
}

/**
 * ModifyIPv6AddressesBandwidth请求参数结构体
 */
export interface ModifyIPv6AddressesBandwidthRequest {
  /**
   * 弹性公网IPv6地址唯一ID
   */
  IPv6AddressIds: Array<string>
  /**
   * 弹性公网IPv6地址网络带宽
   */
  InternetMaxBandwidthOut: number
}

/**
 * DeleteVpcEndPointService返回参数结构体
 */
export interface DeleteVpcEndPointServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNetworkAclQuintupleEntries返回参数结构体
 */
export interface ModifyNetworkAclQuintupleEntriesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssignIpv6CidrBlock请求参数结构体
 */
export interface AssignIpv6CidrBlockRequest {
  /**
   * `VPC`实例`ID`，形如：`vpc-f49l6u0z`。
   */
  VpcId: string
}

/**
 * CreateSecurityGroupPolicies返回参数结构体
 */
export interface CreateSecurityGroupPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnassignIpv6CidrBlock返回参数结构体
 */
export interface UnassignIpv6CidrBlockResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpnGatewayRoutes请求参数结构体
 */
export interface ModifyVpnGatewayRoutesRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 路由修改参数。
   */
  Routes: Array<VpnGatewayRouteModify>
}

/**
 * HaVipAssociateAddressIp请求参数结构体
 */
export interface HaVipAssociateAddressIpRequest {
  /**
   * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。必须是没有绑定`EIP`的`HAVIP`。
   */
  HaVipId: string
  /**
   * 弹性公网`IP`。必须是没有绑定`HAVIP`的`EIP`。
   */
  AddressIp: string
}

/**
 * DisassociateNatGatewayAddress返回参数结构体
 */
export interface DisassociateNatGatewayAddressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRoutes返回参数结构体
 */
export interface DeleteRoutesResponse {
  /**
   * 已删除的路由策略详情。
   */
  RouteSet?: Array<Route>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDhcpIpAttribute请求参数结构体
 */
export interface ModifyDhcpIpAttributeRequest {
  /**
   * `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。
   */
  DhcpIpId: string
  /**
   * `DhcpIp`名称，可任意命名，但不得超过60个字符。
   */
  DhcpIpName: string
}

/**
 * 云联网路由接收策略
 */
export interface CcnRouteTableInputPolicy {
  /**
   * 路由条件。
   */
  RouteConditions: Array<CcnRouteBroadcastPolicyRouteCondition>
  /**
   * 路由行为，`accept` 允许，`drop` 拒绝。
   */
  Action: string
  /**
   * 策略描述。
   */
  Description: string
  /**
   * as-path操作
   */
  OperateAsPath?: string
  /**
   * as-path操作模式
   */
  AsPathOperateMode?: string
}

/**
 * DescribeSecurityGroupAssociationStatistics返回参数结构体
 */
export interface DescribeSecurityGroupAssociationStatisticsResponse {
  /**
   * 安全组关联实例统计。
   */
  SecurityGroupAssociationStatisticsSet?: Array<SecurityGroupAssociationStatistics>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAssistantCidr返回参数结构体
 */
export interface ModifyAssistantCidrResponse {
  /**
   * 辅助CIDR数组。
   */
  AssistantCidrSet?: Array<AssistantCidr>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于发布云联网的cidr信息
 */
export interface CidrForCcn {
  /**
   * local cidr值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cidr?: string
  /**
   * 是否发布到了云联网。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublishedToVbc?: boolean
}

/**
 * NAT网关绑定的弹性IP
 */
export interface NatGatewayAddress {
  /**
   * 弹性公网IP（EIP）的唯一 ID，形如：`eip-11112222`。
   */
  AddressId?: string
  /**
   * 外网IP地址，形如：`123.121.34.33`。
   */
  PublicIpAddress?: string
  /**
   * 资源封堵状态。true表示弹性ip处于封堵状态，false表示弹性ip处于未封堵状态。
   */
  IsBlocked?: boolean
  /**
   * 资源封堵类型。NORMAL表示未封禁，SECURITY表示安全封禁，USER表示用户封禁，OTHER表示其他封禁，多个原因封禁时用&连接，比如：SECURITY&USER&OTHER。
   */
  BlockType?: string
}

/**
 * ModifyHighPriorityRouteECMPAlgorithm返回参数结构体
 */
export interface ModifyHighPriorityRouteECMPAlgorithmResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcEndPointService返回参数结构体
 */
export interface DescribeVpcEndPointServiceResponse {
  /**
   * 终端节点服务对象数组。
   */
  EndPointServiceSet?: Array<EndPointService>
  /**
   * 符合查询条件的个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNetworkAclEntries返回参数结构体
 */
export interface ModifyNetworkAclEntriesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCdcNetPlanes返回参数结构体
 */
export interface DescribeCdcNetPlanesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpcEndPointAttribute返回参数结构体
 */
export interface ModifyVpcEndPointAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowLog请求参数结构体
 */
export interface DescribeFlowLogRequest {
  /**
   * 私用网络ID或者统一ID，建议使用统一ID。
   */
  VpcId: string
  /**
   * 流日志唯一ID。
   */
  FlowLogId: string
}

/**
 * DescribeTenantCcns请求参数结构体
 */
export interface DescribeTenantCcnsRequest {
  /**
   * 过滤条件，目前`value`值个数只支持一个，允许可支持的字段有：
<li>`ccn-ids` 云联网ID数组，值形如：`["ccn-12345678"]`</li> 
<li>`user-account-id` 用户账号ID，值形如：`["12345678"]`</li><li>`is-security-lock` 是否锁定，值形如：`["true"]`</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 单页返回数据量，可选值0到100之间的整数，默认20。
   */
  Limit?: number
}

/**
 * DescribeIp6Addresses请求参数结构体
 */
export interface DescribeIp6AddressesRequest {
  /**
   * 标识 IPv6 的唯一 ID 列表。IPv6 唯一 ID 形如：`eip-11112222`。参数不支持同时指定`Ip6AddressIds`和`Filters`。
   */
  Ip6AddressIds?: Array<string>
  /**
   * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。参数不支持同时指定`AddressIds`和`Filters`。详细的过滤条件如下：
<li> address-ip - String - 是否必填：否 - （过滤条件）按照 IPv6 的 IP 地址过滤。</li>
<li> network-interface-id - String - 是否必填：否 - （过滤条件）按照弹性网卡的唯一ID过滤。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Limit?: number
}

/**
 * 流量描述。
 */
export interface TrafficFlow {
  /**
   * 实际流量，单位为 字节
   */
  Value?: number
  /**
   * 格式化后的流量，单位见参数 FormatUnit
注意：此字段可能返回 null，表示取不到有效值。
   */
  FormatValue?: number
  /**
   * 格式化后流量的单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  FormatUnit?: string
}

/**
 * DescribeAccountAttributes请求参数结构体
 */
export type DescribeAccountAttributesRequest = null

/**
 * AddIp6Rules请求参数结构体
 */
export interface AddIp6RulesRequest {
  /**
   * IPV6转换实例唯一ID，形如ip6-xxxxxxxx
   */
  Ip6TranslatorId: string
  /**
   * IPV6转换规则信息
   */
  Ip6RuleInfos: Array<Ip6RuleInfo>
  /**
   * IPV6转换规则名称
   */
  Ip6RuleName?: string
}

/**
 * DescribeAccountAttributes返回参数结构体
 */
export interface DescribeAccountAttributesResponse {
  /**
   * 用户账号属性对象。
   */
  AccountAttributeSet?: Array<AccountAttribute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAddressesRenewFlag请求参数结构体
 */
export interface ModifyAddressesRenewFlagRequest {
  /**
   * EIP唯一标识ID列表，形如'eip-xxxx'
   */
  AddressIds: Array<string>
  /**
   * 自动续费标识。取值范围： NOTIFY_AND_AUTO_RENEW：通知过期且自动续费 NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费 DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费  若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 示例值：NOTIFY_AND_AUTO_RENEW
   */
  RenewFlag: string
}

/**
 * ModifyPrivateNatGatewayTranslationNatRule请求参数结构体
 */
export interface ModifyPrivateNatGatewayTranslationNatRuleRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 转换规则对象数组。仅支持修改单个转换规则
   */
  TranslationNatRules: Array<TranslationNatRuleDiff>
  /**
   * 跨域参数，当VPC为跨域时填写为True。
   */
  CrossDomain?: boolean
}

/**
 * AssignPrivateIpAddresses返回参数结构体
 */
export interface AssignPrivateIpAddressesResponse {
  /**
   * 内网IP详细信息。
   */
  PrivateIpAddressSet?: Array<PrivateIpAddressSpecification>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroups请求参数结构体
 */
export interface DescribeSecurityGroupsRequest {
  /**
   * 安全组实例ID，例如：sg-33ocnj9n。每次请求的实例的上限为100。参数不支持同时指定SecurityGroupIds和Filters。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定SecurityGroupIds和Filters。
<li>security-group-id - String - （过滤条件）安全组ID。</li>
<li>project-id - Integer - （过滤条件）项目ID。</li>
<li>security-group-name - String - （过滤条件）安全组名称。</li>
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 其中 tag-key 请使用具体的标签键进行替换。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
  /**
   * 排序字段。支持：`CreatedTime` `UpdateTime`。注意：该字段没有默认值。
   */
  OrderField?: string
  /**
   * 排序方法。升序：`ASC`，倒序：`DESC`。默认值：`ASC`
   */
  OrderDirection?: string
}

/**
 * RefreshDirectConnectGatewayRouteToNatGateway请求参数结构体
 */
export interface RefreshDirectConnectGatewayRouteToNatGatewayRequest {
  /**
   * vpc的ID
   */
  VpcId: string
  /**
   * NAT网关ID
   */
  NatGatewayId: string
  /**
   * 是否是预刷新；True:是， False:否
   */
  DryRun: boolean
}

/**
 * DescribeNatGatewayDestinationIpPortTranslationNatRules请求参数结构体
 */
export interface DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest {
  /**
   * NAT网关ID。
   */
  NatGatewayIds?: Array<string>
  /**
   * 过滤条件:
参数不支持同时指定NatGatewayIds和Filters。每次请求的Filters的上限为10，Filter.Values的上限为5
<li> nat-gateway-id，NAT网关的ID，如`nat-0yi4hekt`</li>
<li> vpc-id，私有网络VPC的ID，如`vpc-0yi4hekt`</li>
<li> public-ip-address， 弹性IP，如`139.199.232.238`。</li>
<li>public-port， 公网端口。</li>
<li>private-ip-address， 内网IP，如`10.0.0.1`。</li>
<li>private-port， 内网端口。</li>
<li>description，规则描述。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * 网络ACL规则。
 */
export interface NetworkAclEntry {
  /**
   * 协议, 取值: TCP,UDP, ICMP, ALL。
   */
  Protocol?: string
  /**
   * 端口(all, 单个port,  range)。当Protocol为ALL或ICMP时，不能指定Port。使用-指定端口范围，如：10-20。
   */
  Port?: string
  /**
   * 网段或IP(互斥)。增量创建ACL规则时，CidrBlock和Ipv6CidrBlock至少提供一个。
   */
  CidrBlock?: string
  /**
   * 网段或IPv6(互斥)。
   */
  Ipv6CidrBlock?: string
  /**
   * ACCEPT 或 DROP。
   */
  Action?: string
  /**
   * 规则描述，最大长度100。
   */
  Description?: string
  /**
   * 修改时间。
   */
  ModifyTime?: string
  /**
   * 优先级，从1开始。
   */
  Priority?: number
  /**
   * IPv4网络ACL条目唯一ID。当修改ACL条目时，NetworkAclIpv4EntryId和NetworkAclIpv6EntryID至少提供一个。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkAclIpv4EntryId?: string
  /**
   * IPv6网络ACL条目唯一ID。当修改ACL条目时，NetworkAclIpv4EntryId和NetworkAclIpv6EntryId至少提供一个。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetworkAclIpv6EntryId?: string
}

/**
 * ModifyNetworkAclAttribute返回参数结构体
 */
export interface ModifyNetworkAclAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIPv6AddressesAttributes请求参数结构体
 */
export interface ModifyIPv6AddressesAttributesRequest {
  /**
   * 弹性公网IPv6唯一ID列表。
   */
  IPv6AddressIds: Array<string>
  /**
   * 弹性公网IPv6地址名称
   */
  IPv6AddressName?: string
}

/**
 * CreateVpnGatewayRoutes请求参数结构体
 */
export interface CreateVpnGatewayRoutesRequest {
  /**
   * VPN网关的ID
   */
  VpnGatewayId: string
  /**
   * VPN网关目的路由列表
   */
  Routes: Array<VpnGatewayRoute>
}

/**
 * DisassociateNetworkAclSubnets返回参数结构体
 */
export interface DisassociateNetworkAclSubnetsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 带宽上下限。
 */
export interface BandwidthRange {
  /**
   * 资源ID。
   */
  ResourceId?: string
  /**
   * 带宽下限，单位：Mbps。
   */
  BandwidthLowerLimit?: number
  /**
   * 带宽上限，单位：Mbps。
   */
  BandwidthUpperLimit?: number
}

/**
 * ModifyAddressInternetChargeType请求参数结构体
 */
export interface ModifyAddressInternetChargeTypeRequest {
  /**
   * 弹性公网IP的唯一ID，形如eip-xxx
   */
  AddressId: string
  /**
   * 弹性公网IP调整目标计费模式，支持 "BANDWIDTH_PREPAID_BY_MONTH"、"TRAFFIC_POSTPAID_BY_HOUR"、"BANDWIDTH_POSTPAID_BY_HOUR"
   */
  InternetChargeType: string
  /**
   * 弹性公网IP调整目标带宽值
   */
  InternetMaxBandwidthOut: number
  /**
   * 包月带宽网络计费模式参数。弹性公网IP的调整目标计费模式是"BANDWIDTH_PREPAID_BY_MONTH"时，必传该参数。
   */
  AddressChargePrepaid?: AddressChargePrepaid
}

/**
 * ModifyIp6AddressesBandwidth请求参数结构体
 */
export interface ModifyIp6AddressesBandwidthRequest {
  /**
   * 修改的目标带宽，单位Mbps
   */
  InternetMaxBandwidthOut: number
  /**
   * IPv6地址。Ip6Addresses和Ip6AddressId必须且只能传一个
   */
  Ip6Addresses?: Array<string>
  /**
   * IPv6地址对应的唯一ID，形如eip-xxxxxxxx。Ip6Addresses和Ip6AddressId必须且只能传一个
   */
  Ip6AddressIds?: Array<string>
}

/**
 * DisableVpnGatewaySslClientCert返回参数结构体
 */
export interface DisableVpnGatewaySslClientCertResponse {
  /**
   * 异步任务实例ID。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLocalGateway请求参数结构体
 */
export interface CreateLocalGatewayRequest {
  /**
   * 本地网关名称。
   */
  LocalGatewayName: string
  /**
   * VPC实例ID。
   */
  VpcId: string
  /**
   * CDC实例ID。
   */
  CdcId: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * DescribeDirectConnectGateways返回参数结构体
 */
export interface DescribeDirectConnectGatewaysResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 专线网关对象数组。
   */
  DirectConnectGatewaySet?: Array<DirectConnectGateway>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddBandwidthPackageResources返回参数结构体
 */
export interface AddBandwidthPackageResourcesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteHighPriorityRouteTables请求参数结构体
 */
export interface DeleteHighPriorityRouteTablesRequest {
  /**
   * 高优路由表表唯一ID 列表。
   */
  HighPriorityRouteTableIds?: Array<string>
}

/**
 * CreateSecurityGroupWithPolicies返回参数结构体
 */
export interface CreateSecurityGroupWithPoliciesResponse {
  /**
   * 安全组对象。
   */
  SecurityGroup?: SecurityGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAddressTemplate返回参数结构体
 */
export interface DeleteAddressTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeSnapshotInstance返回参数结构体
 */
export interface ResumeSnapshotInstanceResponse {
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
 * ResetNatGatewayConnection请求参数结构体
 */
export interface ResetNatGatewayConnectionRequest {
  /**
   * NAT网关ID。
   */
  NatGatewayId: string
  /**
   * NAT网关并发连接上限，形如：1000000、3000000、10000000。
   */
  MaxConcurrentConnection: number
}

/**
 * ResetHighPriorityRoutes返回参数结构体
 */
export interface ResetHighPriorityRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCcnAttachedInstancesAttribute请求参数结构体
 */
export interface ModifyCcnAttachedInstancesAttributeRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * 关联网络实例列表
   */
  Instances: Array<CcnInstance>
}

/**
 * DescribeNetworkAccountType请求参数结构体
 */
export type DescribeNetworkAccountTypeRequest = null

/**
 * 流量调度规则
 */
export interface TrafficQosPolicySet {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId?: string
  /**
   * qos id。
   */
  QosId?: number
  /**
   * 描述。
   */
  QosPolicyDescription?: string
  /**
   * 名称。
   */
  QosPolicyName?: string
  /**
   * 带宽。
   */
  Bandwidth?: number
  /**
   * 流量调度策略ID。
   */
  QosPolicyId?: string
}

/**
 * DeleteAddressTemplate请求参数结构体
 */
export interface DeleteAddressTemplateRequest {
  /**
   * IP地址模板实例ID，例如：ipm-09o5m8kc。
   */
  AddressTemplateId: string
}

/**
 * CreateNatGatewaySourceIpTranslationNatRule请求参数结构体
 */
export interface CreateNatGatewaySourceIpTranslationNatRuleRequest {
  /**
   * NAT网关的ID，形如："nat-df45454"
   */
  NatGatewayId: string
  /**
   * NAT网关的SNAT转换规则
   */
  SourceIpTranslationNatRules: Array<SourceIpTranslationNatRule>
}

/**
 * 弹性网卡
 */
export interface NetworkInterface {
  /**
   * 弹性网卡实例ID，例如：eni-f1xjkw1b。
   */
  NetworkInterfaceId?: string
  /**
   * 弹性网卡名称。
   */
  NetworkInterfaceName?: string
  /**
   * 弹性网卡描述。
   */
  NetworkInterfaceDescription?: string
  /**
   * 子网实例ID。
   */
  SubnetId?: string
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * 绑定的安全组。
   */
  GroupSet?: Array<string>
  /**
   * 是否是主网卡。
   */
  Primary?: boolean
  /**
   * MAC地址。
   */
  MacAddress?: string
  /**
   * 弹性网卡状态：
<li>`PENDING`：创建中</li>
<li>`AVAILABLE`：可用的</li>
<li>`ATTACHING`：绑定中</li>
<li>`DETACHING`：解绑中</li>
<li>`DELETING`：删除中</li>
   */
  State?: string
  /**
   * 弹性网卡状态：
<li>`PENDING`：创建中</li>
<li>`AVAILABLE`：可用的</li>
<li>`ATTACHING`：绑定中</li>
<li>`DETACHING`：解绑中</li>
<li>`DELETING`：删除中</li>
<li>`INUSE`：已绑定</li>
   */
  NetworkInterfaceState?: string
  /**
   * 内网IP信息。
   */
  PrivateIpAddressSet?: Array<PrivateIpAddressSpecification>
  /**
   * 绑定的云服务器对象。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Attachment?: NetworkInterfaceAttachment
  /**
   * 可用区。
   */
  Zone?: string
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * `IPv6`地址列表。
   */
  Ipv6AddressSet?: Array<Ipv6Address>
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
  /**
   * 网卡类型。0 - 弹性网卡；1 - evm弹性网卡。
   */
  EniType?: number
  /**
   * 网卡绑定的子机类型：cvm，eks。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Business?: string
  /**
   * 网卡所关联的CDC实例ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
  /**
   * 弹性网卡类型：0:标准型/1:扩展型。默认值为0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttachType?: number
  /**
   * 用于保留网卡主IP的资源ID用于保留网卡主IP的资源ID。用于删除网卡时作为入参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 服务质量级别：
<li>`DEFAULT`：默认</li>
<li>`PT`：云金</li>
<li>`AU`：云银</li>
<li>`AG`：云铜</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  QosLevel?: string
}

/**
 * TransformAddress请求参数结构体
 */
export interface TransformAddressRequest {
  /**
   * 待操作有普通公网 IP 的实例 ID。实例 ID 形如：`ins-11112222`。可通过登录[控制台](https://console.cloud.tencent.com/cvm)查询，也可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/9389) 接口返回值中的`InstanceId`获取。
   */
  InstanceId: string
}

/**
 * ReplaceDirectConnectGatewayCcnRoutes请求参数结构体
 */
export interface ReplaceDirectConnectGatewayCcnRoutesRequest {
  /**
   * 专线网关ID，形如：dcg-prpqlmg1
   */
  DirectConnectGatewayId: string
  /**
   * 需要连通的IDC网段列表
   */
  Routes: Array<DirectConnectGatewayCcnRoute>
  /**
   * 地址类型，支持：IPv4、IPv6。默认IPv4。
   */
  AddressType?: string
}

/**
 * 安全组被引用信息
 */
export interface ReferredSecurityGroup {
  /**
   * 安全组实例ID。
   */
  SecurityGroupId?: string
  /**
   * 引用安全组实例ID（SecurityGroupId）的所有安全组实例ID。
   */
  ReferredSecurityGroupIds?: Array<string>
}

/**
 * ModifyAddressTemplateAttribute请求参数结构体
 */
export interface ModifyAddressTemplateAttributeRequest {
  /**
   * IP地址模板实例ID，例如：ipm-mdunqeb6。
   */
  AddressTemplateId: string
  /**
   * IP地址模板名称。
   */
  AddressTemplateName?: string
  /**
   * 地址信息，支持 IP、CIDR、IP 范围。
   */
  Addresses?: Array<string>
  /**
   * 支持添加备注的地址信息，支持 IP、CIDR、IP 范围。
   */
  AddressesExtra?: Array<AddressInfo>
}

/**
 * CreateCdcLDCXList请求参数结构体
 */
export type CreateCdcLDCXListRequest = null

/**
 * CreateNatGateway返回参数结构体
 */
export interface CreateNatGatewayResponse {
  /**
   * NAT网关对象数组。
   */
  NatGatewaySet?: Array<NatGateway>
  /**
   * 符合条件的 NAT网关对象数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpnGatewaySslClients请求参数结构体
 */
export interface DescribeVpnGatewaySslClientsRequest {
  /**
   * 过滤条件，参数不支持同时指定SslVpnClientIds和Filters。<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li><li>vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。</li><li>ssl-vpn-server-id - String - （过滤条件）SSL-VPN-SERVER实例ID形如：vpns-1j2w6xpx。</li><li>ssl-vpn-client-id - String - （过滤条件）SSL-VPN-CLIENT实例ID形如：vpnc-3rlxp4nd。</li><li>ssl-vpn-client-name - String - （过滤条件）SSL-VPN-CLIENT实例名称。</li><li>ssl-vpn-client-inner-ip - String - （过滤条件）SSL-VPN-CLIENT私网IP。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认值0。
   */
  Offset?: number
  /**
   * 请求对象个数，默认值20。
   */
  Limit?: number
  /**
   * SSL-VPN-CLIENT实例ID。形如：	
vpns-1jww3xpx。每次请求的实例的上限为100。参数不支持同时指定SslVpnClientIds和Filters。
   */
  SslVpnClientIds?: Array<string>
  /**
   * VPN门户网站使用。默认是False。
   */
  IsVpnPortal?: boolean
}

/**
 * ModifyDirectConnectGatewayAttribute请求参数结构体
 */
export interface ModifyDirectConnectGatewayAttributeRequest {
  /**
   * 专线网关唯一`ID`，形如：`dcg-9o233uri`。
   */
  DirectConnectGatewayId: string
  /**
   * 专线网关名称，可任意命名，但不得超过60个字符。
   */
  DirectConnectGatewayName?: string
  /**
   * 云联网路由学习类型，可选值：`BGP`（自动学习）、`STATIC`（静态，即用户配置）。只有云联网类型专线网关且开启了BGP功能才支持修改`CcnRouteType`。
   */
  CcnRouteType?: string
  /**
   * 云联网路由发布模式，可选值：`standard`（标准模式）、`exquisite`（精细模式）。只有云联网类型专线网关才支持修改`ModeType`。
   */
  ModeType?: string
}

/**
 * 终端节点服务的服务白名单对象详情。
 */
export interface VpcEndPointServiceUser {
  /**
   * AppId。
   */
  Owner?: number
  /**
   * Uin。
   */
  UserUin?: string
  /**
   * 描述信息。
   */
  Description?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 终端节点服务ID。
   */
  EndPointServiceId?: string
}

/**
 * ModifyRouteTableSelectionPolicies请求参数结构体
 */
export interface ModifyRouteTableSelectionPoliciesRequest {
  /**
   * 云联网ID。
   */
  CcnId: string
  /**
   * 选择策略信息集合，表示需要按照当前的策略来修改。
   */
  SelectionPolicies: Array<CcnRouteTableSelectPolicy>
}

/**
 * RejectVpcPeeringConnection返回参数结构体
 */
export interface RejectVpcPeeringConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClearRouteTableSelectionPolicies请求参数结构体
 */
export interface ClearRouteTableSelectionPoliciesRequest {
  /**
   * 云联网ID。
   */
  CcnId: string
}

/**
 * CreateTrafficPackages返回参数结构体
 */
export interface CreateTrafficPackagesResponse {
  /**
   * 创建的流量包ID列表。
   */
  TrafficPackageSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySecurityGroupAttribute请求参数结构体
 */
export interface ModifySecurityGroupAttributeRequest {
  /**
   * 安全组实例ID，例如sg-33ocnj9n，可通过<a href="https://cloud.tencent.com/document/product/215/15808">DescribeSecurityGroups</a>获取。
   */
  SecurityGroupId: string
  /**
   * 安全组名称，可任意命名，但不得超过60个字符。
   */
  GroupName?: string
  /**
   * 安全组备注，最多100个字符。
   */
  GroupDescription?: string
}

/**
 * DescribeVpnGatewaySslServers请求参数结构体
 */
export interface DescribeVpnGatewaySslServersRequest {
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 请求对象个数。
   */
  Limit?: number
  /**
   * SSL-VPN-SERVER实例ID。形如：vpns-0p4rj60。每次请求的实例的上限为100。参数不支持同时指定SslVpnServerIds和Filters。
   */
  SslVpnServerIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定SslVpnServerIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>vpn-gateway-id - String - （过滤条件）VPN实例ID，形如：vpngw-5aluhh9t。</li>
<li>vpn-gateway-name - String - （过滤条件）VPN实例名称。</li>
<li>ssl-vpn-server-name - String - （过滤条件）SSL-VPN-SERVER实例名称。</li>
<li>ssl-vpn-server-id - String - （过滤条件）SSL-VPN-SERVER实例ID，形如：vpns-xxx。</li>
   */
  Filters?: Array<FilterObject>
  /**
   * vpn门户使用。 默认Flase
   */
  IsVpnPortal?: boolean
}

/**
 * ModifyNetDetect请求参数结构体
 */
export interface ModifyNetDetectRequest {
  /**
   * 网络探测实例`ID`。形如：`netd-12345678`
   */
  NetDetectId: string
  /**
   * 网络探测名称，最大长度不能超过60个字节。
   */
  NetDetectName?: string
  /**
   * 探测目的IPv4地址数组，最多两个。
   */
  DetectDestinationIp?: Array<string>
  /**
   * 下一跳类型，目前我们支持的类型有：
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
NAT：NAT网关；
NORMAL_CVM：普通云服务器；
CCN：云联网网关；
NONEXTHOP：无下一跳；
   */
  NextHopType?: string
  /**
   * 下一跳目的网关，取值与“下一跳类型”相关：
下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；
下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；
下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；
下一跳类型为NAT，取值Nat网关，形如：nat-12345678；
下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；
下一跳类型为CCN，取值云联网ID，形如：ccn-12345678；
下一跳类型为NONEXTHOP，指定网络探测为无下一跳的网络探测；
   */
  NextHopDestination?: string
  /**
   * 网络探测描述。
   */
  NetDetectDescription?: string
}

/**
 * SetVpnGatewaysRenewFlag返回参数结构体
 */
export interface SetVpnGatewaysRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateInstancesToCcnRouteTable返回参数结构体
 */
export interface AssociateInstancesToCcnRouteTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetDetectStates返回参数结构体
 */
export interface DescribeNetDetectStatesResponse {
  /**
   * 符合条件的网络探测验证结果对象数组。
   */
  NetDetectStateSet?: Array<NetDetectState>
  /**
   * 符合条件的网络探测验证结果对象数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpnGatewaySslServer请求参数结构体
 */
export interface DeleteVpnGatewaySslServerRequest {
  /**
   * SSL-VPN-SERVER 实例ID。
   */
  SslVpnServerId: string
}

/**
 * AllocateIp6AddressesBandwidth返回参数结构体
 */
export interface AllocateIp6AddressesBandwidthResponse {
  /**
   * 传统弹性公网 IPv6 的唯一 ID 列表。
   */
  AddressSet?: Array<string>
  /**
   * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetDetectStates请求参数结构体
 */
export interface DescribeNetDetectStatesRequest {
  /**
   * 网络探测实例`ID`数组。形如：[`netd-12345678`]。
   */
  NetDetectIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定NetDetectIds和Filters。
<li>net-detect-id - String - （过滤条件）网络探测实例ID，形如：netd-12345678。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeRouteConflicts请求参数结构体
 */
export interface DescribeRouteConflictsRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string
  /**
   * 要检查的与之冲突的目的端列表。
   */
  DestinationCidrBlocks: Array<string>
}

/**
 * DescribeFlowLog返回参数结构体
 */
export interface DescribeFlowLogResponse {
  /**
   * 流日志信息。
   */
  FlowLog?: Array<FlowLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadCustomerGatewayConfiguration返回参数结构体
 */
export interface DownloadCustomerGatewayConfigurationResponse {
  /**
   * XML格式配置信息。
   */
  CustomerGatewayConfiguration?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBandwidthPackages请求参数结构体
 */
export interface DescribeBandwidthPackagesRequest {
  /**
   * 带宽包唯一ID列表
   */
  BandwidthPackageIds?: Array<string>
  /**
   * 每次请求的`Filters`的上限为10。参数不支持同时指定`BandwidthPackageIds`和`Filters`。详细的过滤条件如下：
<li> bandwidth-package-id - String - 是否必填：否 - （过滤条件）按照带宽包的唯一标识ID过滤。</li>
<li> bandwidth-package-name - String - 是否必填：否 - （过滤条件）按照 带宽包名称过滤。不支持模糊过滤。</li>
<li> network-type - String - 是否必填：否 - （过滤条件）按照带宽包的类型过滤。类型包括'HIGH_QUALITY_BGP','BGP','SINGLEISP'和'ANYCAST'。</li>
<li> charge-type - String - 是否必填：否 - （过滤条件）按照带宽包的计费类型过滤。计费类型包括: <li>'TOP5_POSTPAID_BY_MONTH':按月后付费TOP5计费</li><li> 'PERCENT95_POSTPAID_BY_MONTH':按月后付费月95计费</li><li>'ENHANCED95_POSTPAID_BY_MONTH':按月后付费增强型95计费</li><li>'FIXED_PREPAID_BY_MONTH':包月预付费计费</li><li>‘PEAK_BANDWIDTH_POSTPAID_BY_DAY’: 后付费日结按带宽计费</li>
<li> resource.resource-type - String - 是否必填：否 - （过滤条件）按照带宽包资源类型过滤。资源类型包括'Address'和'LoadBalance'</li>
<li> resource.resource-id - String - 是否必填：否 - （过滤条件）按照带宽包资源Id过滤。资源Id形如'eip-xxxx','lb-xxxx'</li>
<li> resource.address-ip - String - 是否必填：否 - （过滤条件）按照带宽包资源Ip过滤。</li>
<li> tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。</li>
<li> tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。</li>
<li> tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。</li>
   */
  Filters?: Array<Filter>
  /**
   * 查询带宽包偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小结。
   */
  Offset?: number
  /**
   * 查询带宽包返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小结。
   */
  Limit?: number
}

/**
 * DeleteDirectConnectGatewayCcnRoutes返回参数结构体
 */
export interface DeleteDirectConnectGatewayCcnRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HaVip绑定的子机/网卡（用于限制HaVip飘移的范围，并不是真正的飘移动作）。
 */
export interface HaVipAssociation {
  /**
   * HaVip绑定的子机或网卡唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId: string
  /**
   * HaVip实例唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HaVipId?: string
  /**
   * HaVip绑定的类型。取值:CVM, ENI。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
}

/**
 * DescribeAssistantCidr返回参数结构体
 */
export interface DescribeAssistantCidrResponse {
  /**
   * 符合条件的辅助CIDR数组。
   */
  AssistantCidrSet?: Array<AssistantCidr>
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
 * DescribeHaVips请求参数结构体
 */
export interface DescribeHaVipsRequest {
  /**
   * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。
   */
  HaVipIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定`HaVipIds`和`Filters`。<li>havip-id - String - `HAVIP`唯一`ID`，形如：`havip-9o233uri`。</li><li>havip-name - String - `HAVIP`名称。</li><li>vpc-id - String - `HAVIP`所在私有网络`ID`。</li><li>subnet-id - String - `HAVIP`所在子网`ID`。</li><li>vip - String - `HAVIP`的地址`VIP`。</li><li>address-ip - String - `HAVIP`绑定的弹性公网`IP`。</li><li>havip-association.instance-id - String - `HAVIP`绑定的子机或网卡。</li><li>havip-association.instance-type - String - `HAVIP`绑定的类型，取值:CVM, ENI。</li><li>check-associate - Bool - 是否开启HaVip飘移时校验绑定的子机或网卡。</li><li>cdc-id - String - CDC实例ID。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。

   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。

   */
  Limit?: number
}

/**
 * UpdateTrafficMirrorDirection返回参数结构体
 */
export interface UpdateTrafficMirrorDirectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 占用ip的资源信息
 */
export interface IpAddressStates {
  /**
   * VPC实例ID。
   */
  VpcId: string
  /**
   * 子网实例ID。
   */
  SubnetId: string
  /**
   * IP地址。
   */
  IpAddress: string
  /**
   * 资源类型
   */
  ResourceType: string
  /**
   * 资源ID
   */
  ResourceId: string
}

/**
 * DescribeRouteTableSelectionPolicies请求参数结构体
 */
export interface DescribeRouteTableSelectionPoliciesRequest {
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 返回数量
   */
  Limit?: number
  /**
   * 过滤条件：
<li>ccn-id - String -（过滤条件）CCN实例ID。</li>
<li>instance-type - String -（过滤条件）关联实例类型:
私有网络: `VPC`
专线网关: `DIRECTCONNECT`
黑石私有网络: `BMVPC`
EDGE设备: `EDGE`
EDGE隧道: `EDGE_TUNNEL`
EDGE网关: `EDGE_VPNGW`
VPN网关：`VPNGW`</li>
<li>ccn-route-table-id - String -（过滤条件）路由表ID。</li>
<li>instance-id - String -（过滤条件）关联的实例ID。</li>
<li>route-table-name - String -（过滤条件）路由表名称。</li>
   */
  Filters?: Array<Filter>
}

/**
 * 用于描述实例的统计信息
 */
export interface InstanceStatistic {
  /**
   * 实例的类型
   */
  InstanceType?: string
  /**
   * 实例的个数
   */
  InstanceCount?: number
}

/**
 * 公网IP询价出参
 */
export interface InternetPriceDetail {
  /**
   * 付费单价，单位：元，仅后付费价格查询返回。
   */
  UnitPrice?: number
  /**
   * 折扣后的价格，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiscountPrice?: number
  /**
   * 计价单元，可取值范围：<ul> <li>HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）。</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeUnit?: string
  /**
   * 原价，单位：元，仅预付费价格查询返回。
   */
  OriginalPrice?: number
}

/**
 * CreateVpnConnection请求参数结构体
 */
export interface CreateVpnConnectionRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 对端网关ID。例如：cgw-2wqq41m9，可通过[DescribeCustomerGateways](https://cloud.tencent.com/document/product/215/17516)接口查询对端网关。
   */
  CustomerGatewayId: string
  /**
   * 通道名称，可任意命名，但不得超过60个字符。
   */
  VpnConnectionName: string
  /**
   * 预共享密钥。
   */
  PreShareKey: string
  /**
   * VPC实例ID。可通过[DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)接口返回值中的VpcId获取。
CCN VPN 形的通道 可以不传VPCID
   */
  VpcId?: string
  /**
   * SPD策略组，例如：{"10.0.0.5/24":["172.123.10.5/16"]}，10.0.0.5/24是vpc内网段172.123.10.5/16是IDC网段。用户指定VPC内哪些网段可以和您IDC中哪些网段通信。
   */
  SecurityPolicyDatabases?: Array<SecurityPolicyDatabase>
  /**
   * IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议
   */
  IKEOptionsSpecification?: IKEOptionsSpecification
  /**
   * IPSec配置，腾讯云提供IPSec安全会话设置
   */
  IPSECOptionsSpecification?: IPSECOptionsSpecification
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
  /**
   * 是否支持隧道内健康检查，默认为False。
   */
  EnableHealthCheck?: boolean
  /**
   * 健康检查本端地址，默认值为随机在169.254.128.0/17分配一个IP。
   */
  HealthCheckLocalIp?: string
  /**
   * 健康检查对端地址，默认值为随机在169.254.128.0/17分配一个IP。
   */
  HealthCheckRemoteIp?: string
  /**
   * 通道类型, 例如:["STATIC", "StaticRoute", "Policy"]
   */
  RouteType?: string
  /**
   * 协商类型，默认为active（主动协商）。可选值：active（主动协商），passive（被动协商），flowTrigger（流量协商）
   */
  NegotiationType?: string
  /**
   * DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启）
   */
  DpdEnable?: number
  /**
   * DPD超时时间。即探测确认对端不存在需要的时间。dpdEnable为1（开启）时有效。默认30，单位为秒
   */
  DpdTimeout?: string
  /**
   * DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试）
   */
  DpdAction?: string
  /**
   * 创建通道路由信息。
   */
  Route?: CreateVpnConnRoute
  /**
   * BGP配置。
   */
  BgpConfig?: BgpConfig
  /**
   * 健康检查NQA配置。
   */
  HealthCheckConfig?: HealthCheckConfig
}

/**
 * 可创建的私网网关配额数量
 */
export interface PrivateNatGatewayLimit {
  /**
   * 私有网络唯一`ID`。
   */
  UniqVpcId: string
  /**
   * Vpc下总计可创建私网网关数量。
   */
  TotalLimit: number
  /**
   * 可创建私网网关数量。
   */
  Available: number
}

/**
 * CCN路由策略对象
 */
export interface CcnRoute {
  /**
   * 路由策略ID
   */
  RouteId?: string
  /**
   * 目的端
   */
  DestinationCidrBlock?: string
  /**
   * 下一跳类型（关联实例类型），所有类型：VPC、DIRECTCONNECT
   */
  InstanceType?: string
  /**
   * 下一跳（关联实例）
   */
  InstanceId?: string
  /**
   * 下一跳名称（关联实例名称）
   */
  InstanceName?: string
  /**
   * 下一跳所属地域（关联实例所属地域）
   */
  InstanceRegion?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 路由是否启用
   */
  Enabled?: boolean
  /**
   * 关联实例所属UIN（根账号）
   */
  InstanceUin?: string
  /**
   * 路由的扩展状态
   */
  ExtraState?: string
  /**
   * 是否动态路由
   */
  IsBgp?: boolean
  /**
   * 路由优先级
   */
  RoutePriority?: number
  /**
   * 下一跳扩展名称（关联实例的扩展名称）
   */
  InstanceExtraName?: string
  /**
   * 实例类型
   */
  AliasType?: string
  /**
   * 实例id
   */
  AliasInstanceId?: string
}

/**
 * ResetTrafficMirrorFilter返回参数结构体
 */
export interface ResetTrafficMirrorFilterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIpv6AddressesAttribute返回参数结构体
 */
export interface ModifyIpv6AddressesAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrafficPackages请求参数结构体
 */
export interface DescribeTrafficPackagesRequest {
  /**
   * 共享流量包ID，支持批量
   */
  TrafficPackageIds?: Array<string>
  /**
   * 每次请求的`Filters`的上限为10。参数不支持同时指定`TrafficPackageIds`和`Filters`。详细的过滤条件如下：<li> traffic-package_id - String - 是否必填：否 - （过滤条件）按照共享流量包的唯一标识ID过滤。</li><li> traffic-package-name - String - 是否必填：否 - （过滤条件）按照共享流量包名称过滤。不支持模糊过滤。</li><li> status - String - 是否必填：否 - （过滤条件）按照共享流量包状态过滤。可选状态：[AVAILABLE|EXPIRED|EXHAUSTED]</li>
   */
  Filters?: Array<Filter>
  /**
   * 分页参数
   */
  Offset?: number
  /**
   * 分页参数
   */
  Limit?: number
}

/**
 * DeleteSecurityGroupPolicies请求参数结构体
 */
export interface DeleteSecurityGroupPoliciesRequest {
  /**
   * 安全组实例ID，例如sg-33ocnj9n，可通过<a href="https://cloud.tencent.com/document/product/215/15808">DescribeSecurityGroups</a>获取。
   */
  SecurityGroupId: string
  /**
   * 安全组规则集合。一个请求中只能删除单个方向的一条或多条规则。支持指定索引（PolicyIndex） 匹配删除和安全组规则匹配删除两种方式，一个请求中只能使用一种匹配方式。
   */
  SecurityGroupPolicySet: SecurityGroupPolicySet
}

/**
 * VPN通道对象。
 */
export interface VpnConnection {
  /**
   * 通道实例ID。
   */
  VpnConnectionId?: string
  /**
   * 通道名称。
   */
  VpnConnectionName?: string
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId?: string
  /**
   * 对端网关实例ID。
   */
  CustomerGatewayId?: string
  /**
   * 预共享密钥。
   */
  PreShareKey?: string
  /**
   * 通道传输协议。
   */
  VpnProto?: string
  /**
   * 通道加密协议。
   */
  EncryptProto?: string
  /**
   * 路由类型。
   */
  RouteType?: string
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 通道的生产状态，PENDING：生产中，AVAILABLE：运行中，DELETING：删除中。
   */
  State?: string
  /**
   * 通道连接状态，AVAILABLE：已连接。
   */
  NetStatus?: string
  /**
   * SPD。
   */
  SecurityPolicyDatabaseSet?: Array<SecurityPolicyDatabase>
  /**
   * IKE选项。
   */
  IKEOptionsSpecification?: IKEOptionsSpecification
  /**
   * IPSEC选择。
   */
  IPSECOptionsSpecification?: IPSECOptionsSpecification
  /**
   * 是否支持健康状态探测
   */
  EnableHealthCheck?: boolean
  /**
   * 本端探测ip
   */
  HealthCheckLocalIp?: string
  /**
   * 对端探测ip
   */
  HealthCheckRemoteIp?: string
  /**
   * 通道健康检查状态，AVAILABLE：正常，UNAVAILABLE：不正常。 未配置健康检查不返回该对象
   */
  HealthCheckStatus?: string
  /**
   * DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启）
   */
  DpdEnable?: number
  /**
   * DPD超时时间。即探测确认对端不存在需要的时间。
   */
  DpdTimeout?: string
  /**
   * DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试）
   */
  DpdAction?: string
  /**
   * 标签键值对数组
   */
  TagSet?: Array<Tag>
  /**
   * 协商类型
   */
  NegotiationType?: string
  /**
   * Bgp配置信息
   */
  BgpConfig?: BgpConfigAndAsn
  /**
   * Nqa配置信息
   */
  HealthCheckConfig?: HealthCheckConfig
}

/**
 * DescribeCcns请求参数结构体
 */
export interface DescribeCcnsRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定CcnIds和Filters。
   */
  CcnIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定CcnIds和Filters。
<li>ccn-id - String - （过滤条件）CCN唯一ID，形如：`ccn-f49l6u0z`。</li>
<li>ccn-name - String - （过滤条件）CCN名称。</li>
<li>ccn-description - String - （过滤条件）CCN描述。</li>
<li>state - String - （过滤条件）实例状态， 'ISOLATED': 隔离中（欠费停服），'AVAILABLE'：运行中。</li>
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例：查询绑定了标签的CCN列表。</li>
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
   * 排序字段。支持：`CcnId` `CcnName` `CreateTime` `State` `QosLevel`。默认值: `CreateTime`
   */
  OrderField?: string
  /**
   * 排序方法。升序：`ASC`，倒序：`DESC`。默认值：`ASC`
   */
  OrderDirection?: string
}

/**
 * ModifyNatGatewayAttribute返回参数结构体
 */
export interface ModifyNatGatewayAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetDetects请求参数结构体
 */
export interface DescribeNetDetectsRequest {
  /**
   * 网络探测实例`ID`数组。形如：[`netd-12345678`]。
   */
  NetDetectIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定NetDetectIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-12345678</li>
<li>net-detect-id - String - （过滤条件）网络探测实例ID，形如：netd-12345678</li>
<li>subnet-id - String - （过滤条件）子网实例ID，形如：subnet-12345678</li>
<li>net-detect-name - String - （过滤条件）网络探测名称</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * CreateAddressTemplateGroup请求参数结构体
 */
export interface CreateAddressTemplateGroupRequest {
  /**
   * IP地址模板集合名称。
   */
  AddressTemplateGroupName: string
  /**
   * IP地址模板实例ID，例如：ipm-mdunqeb6。
   */
  AddressTemplateIds: Array<string>
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * 用于修改入路由表ECMP算法。现在支持的算法有：ECMP_QUINTUPLE_HASH：五元组hash，ECMP_SOURCE_DESTINATION_IP_HASH：源和目的IP hash，ECMP_DESTINATION_IP_HASH：目的IP hash，ECMP_SOURCE_IP_HASH：源IP hash。
 */
export interface RouteECMPAlgorithm {
  /**
   *  目标网段
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestinationCidrBlock?: string
  /**
   * 支持的 ECMP算法有：ECMP_QUINTUPLE_HASH：五元组hash，ECMP_SOURCE_DESTINATION_IP_HASH：源和目的IP hash，ECMP_DESTINATION_IP_HASH：目的IP hash，ECMP_SOURCE_IP_HASH：源IP hash。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetRouteAlgorithm?: string
}

/**
 * AssociateIPv6Address请求参数结构体
 */
export interface AssociateIPv6AddressRequest {
  /**
   * 弹性公网IPv6唯一ID，EIPv6 唯一 ID 形如：eipv6-11112222。
   */
  IPv6AddressId: string
  /**
   * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过登录控制台查询，也可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。
   */
  NetworkInterfaceId?: string
  /**
   * 要绑定的内网 IPv6。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIPv6Address ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIPv6Address 是指定的 NetworkInterfaceId 上的一个内网 IPv6。指定弹性网卡的内网 IPv6 可通过登录控制台查询，也可通过DescribeNetworkInterfaces接口返回值中的Ipv6AddressSet.Address获取。
   */
  PrivateIPv6Address?: string
}

/**
 * DescribeCustomerGatewayVendors返回参数结构体
 */
export interface DescribeCustomerGatewayVendorsResponse {
  /**
   * 对端网关厂商信息对象。
   */
  CustomerGatewayVendorSet?: Array<CustomerGatewayVendor>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCdcLDCXList请求参数结构体
 */
export type DeleteCdcLDCXListRequest = null

/**
 * 路由冲突对象
 */
export interface RouteConflict {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId?: string
  /**
   * 要检查的与之冲突的目的端
   */
  DestinationCidrBlock?: string
  /**
   * 冲突的路由策略列表
   */
  ConflictSet?: Array<Route>
}

/**
 * DeleteSubnet返回参数结构体
 */
export interface DeleteSubnetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableSnapshotPolicies返回参数结构体
 */
export interface EnableSnapshotPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私有网络(VPC)对象。
 */
export interface Vpc {
  /**
   * `VPC`名称。
   */
  VpcName?: string
  /**
   * `VPC`实例`ID`，例如：vpc-azd4dt1c。
   */
  VpcId?: string
  /**
   * `VPC`的`IPv4` `CIDR`。
   */
  CidrBlock?: string
  /**
   * 是否默认`VPC`。
   */
  IsDefault?: boolean
  /**
   * 是否开启组播。
   */
  EnableMulticast?: boolean
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * `DNS`列表。
   */
  DnsServerSet?: Array<string>
  /**
   * `DHCP`域名选项值。
   */
  DomainName?: string
  /**
   * `DHCP`选项集`ID`。
   */
  DhcpOptionsId?: string
  /**
   * 是否开启`DHCP`。
   */
  EnableDhcp?: boolean
  /**
   * `VPC`的`IPv6` `CIDR`。
   */
  Ipv6CidrBlock?: string
  /**
   * 标签键值对
   */
  TagSet?: Array<Tag>
  /**
   * 辅助CIDR
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssistantCidrSet?: Array<AssistantCidr>
}

/**
 * CreateVpnGateway返回参数结构体
 */
export interface CreateVpnGatewayResponse {
  /**
   * VPN网关对象
   */
  VpnGateway?: VpnGateway
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatGatewayDestinationIpPortTranslationNatRules返回参数结构体
 */
export interface DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse {
  /**
   * NAT网关端口转发规则对象数组。
   */
  NatGatewayDestinationIpPortTranslationNatRuleSet?: Array<NatGatewayDestinationIpPortTranslationNatRule>
  /**
   * 符合条件的NAT网关端口转发规则对象数目。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流日志存储信息
 */
export interface FlowLogStorage {
  /**
   * 存储实例Id，当流日志存储类型为ckafka时，必填。
   */
  StorageId: string
  /**
   * 主题Id，当流日志存储类型为ckafka时，必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageTopic?: string
}

/**
 * AllocateIp6AddressesBandwidth请求参数结构体
 */
export interface AllocateIp6AddressesBandwidthRequest {
  /**
   * 需要开通公网访问能力的IPv6地址
   */
  Ip6Addresses: Array<string>
  /**
   * 带宽，单位Mbps。默认是1Mbps
   */
  InternetMaxBandwidthOut?: number
  /**
   * 网络计费模式。IPv6当前支持"TRAFFIC_POSTPAID_BY_HOUR"，"BANDWIDTH_PACKAGE"。默认网络计费模式是"TRAFFIC_POSTPAID_BY_HOUR"。
   */
  InternetChargeType?: string
  /**
   * 带宽包id，上移账号，申请带宽包计费模式的IPv6地址需要传入.
   */
  BandwidthPackageId?: string
  /**
   * 需要关联的标签列表。
   */
  Tags?: Array<Tag>
}

/**
 * ResumeSnapshotInstance请求参数结构体
 */
export interface ResumeSnapshotInstanceRequest {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId: string
  /**
   * 快照文件Id。
   */
  SnapshotFileId: string
  /**
   * 实例Id。
   */
  InstanceId: string
}

/**
 * DescribeVpcIpv6Addresses返回参数结构体
 */
export interface DescribeVpcIpv6AddressesResponse {
  /**
   * `IPv6`地址列表。
   */
  Ipv6AddressSet?: Array<VpcIpv6Address>
  /**
   * `IPv6`地址总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetAttachCcnInstances返回参数结构体
 */
export interface ResetAttachCcnInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IPV6转换规则
 */
export interface Ip6RuleInfo {
  /**
   * IPV6端口号，可在0~65535范围取值
   */
  Vport6: number
  /**
   * 协议类型，支持TCP/UDP
   */
  Protocol: string
  /**
   * IPV4地址
   */
  Vip: string
  /**
   * IPV4端口号，可在0~65535范围取值
   */
  Vport: number
}

/**
 * RejectAttachCcnInstances请求参数结构体
 */
export interface RejectAttachCcnInstancesRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * 拒绝关联实例列表。
   */
  Instances: Array<CcnInstance>
}

/**
 * DescribeTrafficQosPolicy请求参数结构体
 */
export interface DescribeTrafficQosPolicyRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * 本端地域。
   */
  LocalRegion: string
  /**
   * 远端地域。
   */
  RemoteRegion: string
}

/**
 * ModifyCcnRegionBandwidthLimitsType请求参数结构体
 */
export interface ModifyCcnRegionBandwidthLimitsTypeRequest {
  /**
   * 云联网实例ID。
   */
  CcnId: string
  /**
   * 云联网限速类型，INTER_REGION_LIMIT：地域间限速，OUTER_REGION_LIMIT：地域出口限速。默认值：OUTER_REGION_LIMIT。
   */
  BandwidthLimitType?: string
}

/**
 * DescribeRouteList返回参数结构体
 */
export interface DescribeRouteListResponse {
  /**
   * 路由对象。
   */
  RouteSet?: Array<Route>
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
 * DescribeVpcResourceDashboard请求参数结构体
 */
export interface DescribeVpcResourceDashboardRequest {
  /**
   * Vpc实例ID，例如：vpc-f1xjkw1b。
   */
  VpcIds: Array<string>
}

/**
 * ModifyIp6Rule请求参数结构体
 */
export interface ModifyIp6RuleRequest {
  /**
   * IPV6转换实例唯一ID，形如ip6-xxxxxxxx
   */
  Ip6TranslatorId: string
  /**
   * IPV6转换规则唯一ID，形如rule6-xxxxxxxx
   */
  Ip6RuleId: string
  /**
   * IPV6转换规则修改后的名称
   */
  Ip6RuleName?: string
  /**
   * IPV6转换规则修改后的IPV4地址
   */
  Vip?: string
  /**
   * IPV6转换规则修改后的IPV4端口号
   */
  Vport?: number
}

/**
 * ReplaceRouteTableAssociation请求参数结构体
 */
export interface ReplaceRouteTableAssociationRequest {
  /**
   * 子网实例ID，例如：subnet-3x5lf5q0。可通过DescribeSubnets接口查询。
   */
  SubnetId: string
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string
}

/**
 * 私网NAT网关跨域信息
 */
export interface PrivateNatCrossDomainInfo {
  /**
   * 跨域私网NAT关联的云联网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CcnId?: string
  /**
   * 跨域私网NAT本端Vpc
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalVpcId?: string
  /**
   * 跨域私网NAT对端Vpc
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerVpcId?: string
}

/**
 * 本端目的IP端口转换复杂结构
 */
export interface LocalDestinationIpPortTranslationNatRule {
  /**
   * 协议
   */
  Protocol: string
  /**
   * 源端口
   */
  OriginalPort: number
  /**
   * 源IP
   */
  OriginalIp: string
  /**
   * 目的端口
   */
  TranslationPort: number
  /**
   * 目的IP
   */
  TranslationIp: string
  /**
   * 描述
   */
  Description?: string
}

/**
 * AssociateNetworkAclSubnets请求参数结构体
 */
export interface AssociateNetworkAclSubnetsRequest {
  /**
   * 网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 子网实例ID数组。例如：[subnet-12345678]。
   */
  SubnetIds: Array<string>
}

/**
 * ModifyVpnGatewaySslServer返回参数结构体
 */
export interface ModifyVpnGatewaySslServerResponse {
  /**
   * 异步任务TASKID
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AdjustPublicAddress返回参数结构体
 */
export interface AdjustPublicAddressResponse {
  /**
   * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
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
 * RenewVpnGateway请求参数结构体
 */
export interface RenewVpnGatewayRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 预付费计费模式。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
}

/**
 * AssociateIPv6Address返回参数结构体
 */
export interface AssociateIPv6AddressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCdcNetPlanes请求参数结构体
 */
export type DescribeCdcNetPlanesRequest = null

/**
 * DescribePrivateNatGatewayRegions请求参数结构体
 */
export type DescribePrivateNatGatewayRegionsRequest = null

/**
 * DescribeSnapshotPolicies请求参数结构体
 */
export interface DescribeSnapshotPoliciesRequest {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定SnapshotPolicyIds和Filters。
<li>snapshot-policy-id - String -（过滤条件）快照策略ID。</li>
<li>snapshot-policy-name - String -（过滤条件）快照策略名称。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大为200。
   */
  Limit?: number
}

/**
 * DeleteTrafficPackages请求参数结构体
 */
export interface DeleteTrafficPackagesRequest {
  /**
   * 待删除的流量包唯一ID数组
   */
  TrafficPackageIds: Array<string>
}

/**
 * NotifyRoutes请求参数结构体
 */
export interface NotifyRoutesRequest {
  /**
   * 路由表唯一ID。
   */
  RouteTableId: string
  /**
   * 路由策略唯一ID。
   */
  RouteItemIds: Array<string>
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
 * DeleteCcnRouteTables请求参数结构体
 */
export interface DeleteCcnRouteTablesRequest {
  /**
   * 需要删除的路由表列表。
   */
  RouteTableId: Array<string>
}

/**
 * ModifyServiceTemplateAttribute返回参数结构体
 */
export interface ModifyServiceTemplateAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCcns返回参数结构体
 */
export interface DescribeCcnsResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * CCN对象。
   */
  CcnSet?: Array<CCN>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCdcNetPlaneAttribute请求参数结构体
 */
export type ModifyCdcNetPlaneAttributeRequest = null

/**
 * 参数模板配额
 */
export interface TemplateLimit {
  /**
   * 参数模板IP地址成员配额。
   */
  AddressTemplateMemberLimit?: number
  /**
   * 参数模板IP地址组成员配额。
   */
  AddressTemplateGroupMemberLimit?: number
  /**
   * 参数模板I协议端口成员配额。
   */
  ServiceTemplateMemberLimit?: number
  /**
   * 参数模板协议端口组成员配额。
   */
  ServiceTemplateGroupMemberLimit?: number
}

/**
 * 安全组策略统计
 */
export interface PolicyStatistics {
  /**
   * 入站IPv4总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IngressIPv4TotalCount: number
  /**
   * 入站IPv6总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IngressIPv6TotalCount: number
  /**
   * 出站IPv4总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  EgressIPv4TotalCount: number
  /**
   * 出站IPv6总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  EgressIPv6TotalCount: number
}

/**
 * CreateCdcLDCXList返回参数结构体
 */
export interface CreateCdcLDCXListResponse {
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
   * 子网对象。
   */
  Subnet?: Subnet
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddressBandwidthRange返回参数结构体
 */
export interface DescribeAddressBandwidthRangeResponse {
  /**
   * EIP带宽上下限详细信息。
   */
  BandwidthRangeSet?: Array<BandwidthRange>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupPolicies返回参数结构体
 */
export interface DescribeSecurityGroupPoliciesResponse {
  /**
   * 安全组规则集合。
   */
  SecurityGroupPolicySet?: SecurityGroupPolicySet
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGatewayFlowQos返回参数结构体
 */
export interface DescribeGatewayFlowQosResponse {
  /**
   * 实例详细信息列表。
   */
  GatewayQosSet: Array<GatewayQos>
  /**
   * 符合条件的实例数量。
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySecurityGroupPolicies请求参数结构体
 */
export interface ModifySecurityGroupPoliciesRequest {
  /**
   * 安全组实例ID，例如sg-33ocnj9n，可通过<a href="https://cloud.tencent.com/document/product/215/15808">DescribeSecurityGroups</a>获取。
   */
  SecurityGroupId: string
  /**
   * 安全组规则集合。 SecurityGroupPolicySet对象必须同时指定新的出（Egress）入（Ingress）站规则。 SecurityGroupPolicy对象不支持自定义索引（PolicyIndex）。
   */
  SecurityGroupPolicySet: SecurityGroupPolicySet
  /**
   * 排序安全组标识，默认值为False。当SortPolicys为False时，不改变安全组规则排序；当SortPolicys为True时，系统将严格按照SecurityGroupPolicySet参数传入的安全组规则及顺序进行重置，考虑到人为输入参数可能存在遗漏风险，建议通过控制台对安全组规则进行排序。
   */
  SortPolicys?: boolean
}

/**
 * ModifyPrivateNatGatewayAttribute返回参数结构体
 */
export interface ModifyPrivateNatGatewayAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * NAT网关对象。
 */
export interface NatGateway {
  /**
   * NAT网关的ID。
   */
  NatGatewayId?: string
  /**
   * NAT网关的名称。
   */
  NatGatewayName?: string
  /**
   * NAT网关创建的时间。
   */
  CreatedTime?: string
  /**
   * NAT网关的状态。
 'PENDING'：生产中，'DELETING'：删除中/子实例关闭中，'AVAILABLE'：运行中，'UPDATING'：升级中，
‘PENDFAILURE’：创建失败，‘DELETEFAILURE：删除失败，‘DENIED’：子实例关闭中
   */
  State?: string
  /**
   * 网关最大外网出带宽(单位:Mbps)。
   */
  InternetMaxBandwidthOut?: number
  /**
   * 网关并发连接上限。
   */
  MaxConcurrentConnection?: number
  /**
   * 绑定NAT网关的公网IP对象数组。
   */
  PublicIpAddressSet?: Array<NatGatewayAddress>
  /**
   * NAT网关网络状态。“AVAILABLE”:运行中, “UNAVAILABLE”:不可用, “INSUFFICIENT”:欠费停服。
   */
  NetworkState?: string
  /**
   * NAT网关的端口转发规则。
   */
  DestinationIpPortTranslationNatRuleSet?: Array<DestinationIpPortTranslationNatRule>
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * NAT网关所在的可用区。
   */
  Zone?: string
  /**
   * 绑定的专线网关ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DirectConnectGatewayIds?: Array<string>
  /**
   * 所属子网ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
  /**
   * NAT网关绑定的安全组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroupSet?: Array<string>
  /**
   * NAT网关的SNAT转发规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceIpTranslationNatRuleSet?: Array<SourceIpTranslationNatRule>
  /**
   * 是否独享型NAT。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsExclusive?: boolean
  /**
   * 独享型NAT所在的网关集群的带宽(单位:Mbps)，当IsExclusive为false时无此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExclusiveGatewayBandwidth?: number
  /**
   * NAT网关是否被封禁。“NORMAL”：未被封禁，“RESTRICTED”：已被封禁。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestrictState?: string
  /**
   * NAT网关类型，1表示传统型NAT网关，2表示标准型NAT网关
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatProductVersion?: number
  /**
   * 是否启用根据目的网段选择SNAT使用的EIP功能	
注意：此字段可能返回 null，表示取不到有效值。
   */
  SmartScheduleMode?: boolean
  /**
   * NAT实例归属的专属集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DedicatedClusterId?: string
}

/**
 * AssociateDhcpIpWithAddressIp请求参数结构体
 */
export interface AssociateDhcpIpWithAddressIpRequest {
  /**
   * `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。必须是没有绑定`EIP`的`DhcpIp`
   */
  DhcpIpId: string
  /**
   * 弹性公网`IP`。必须是没有绑定`DhcpIp`的`EIP`
   */
  AddressIp: string
}

/**
 * ReplaceRoutes请求参数结构体
 */
export interface ReplaceRoutesRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string
  /**
   * 路由策略对象。需要指定路由策略ID（RouteId）。
   */
  Routes: Array<Route>
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
 * 流量包信息描述类型
 */
export interface TrafficPackage {
  /**
   * 流量包唯一ID
   */
  TrafficPackageId?: string
  /**
   * 流量包名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrafficPackageName?: string
  /**
   * 流量包总量，单位GB
   */
  TotalAmount?: number
  /**
   * 流量包剩余量，单位GB
   */
  RemainingAmount?: number
  /**
   * 流量包状态，可能的值有: AVAILABLE-可用状态， EXPIRED-已过期， EXHAUSTED-已用完， REFUNDED-已退还， DELETED-已删除
   */
  Status?: string
  /**
   * 流量包创建时间
   */
  CreatedTime?: string
  /**
   * 流量包截止时间
   */
  Deadline?: string
  /**
   * 已使用的流量，单位GB
   */
  UsedAmount?: number
  /**
   * 流量包标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSet?: Array<Tag>
  /**
   * 区分闲时流量包与全时流量包
   */
  DeductType?: string
}

/**
 * CreateTrafficMirror返回参数结构体
 */
export interface CreateTrafficMirrorResponse {
  /**
   * 流量镜像实例
   */
  TrafficMirror?: TrafficMirror
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WithdrawNotifyRoutes请求参数结构体
 */
export interface WithdrawNotifyRoutesRequest {
  /**
   * 路由表唯一ID。
   */
  RouteTableId: string
  /**
   * 路由策略唯一ID。
   */
  RouteItemIds: Array<string>
}

/**
 * VPC资源看板（各资源个数）
 */
export interface ResourceDashboard {
  /**
   * Vpc实例ID，例如：vpc-bq4bzxpj。
   */
  VpcId: string
  /**
   * 子网实例ID，例如：subnet-bthucmmy。
   */
  SubnetId: string
  /**
   * 基础网络互通。
   */
  Classiclink: number
  /**
   * 专线网关。
   */
  Dcg: number
  /**
   * 对等连接。
   */
  Pcx: number
  /**
   * 统计当前除云服务器 IP、弹性网卡IP和网络探测IP以外的所有已使用的IP总数。云服务器 IP、弹性网卡IP和网络探测IP单独计数。
   */
  Ip: number
  /**
   * NAT网关。
   */
  Nat: number
  /**
   * VPN网关。
   */
  Vpngw: number
  /**
   * 流日志。
   */
  FlowLog: number
  /**
   * 网络探测。
   */
  NetworkDetect: number
  /**
   * 网络ACL。
   */
  NetworkACL: number
  /**
   * 云主机。
   */
  CVM: number
  /**
   * 负载均衡。
   */
  LB: number
  /**
   * 关系型数据库。
   */
  CDB: number
  /**
   * 云数据库 TencentDB for Memcached。
   */
  Cmem: number
  /**
   * 时序数据库。
   */
  CTSDB: number
  /**
   * 数据库 TencentDB for MariaDB（TDSQL）。
   */
  MariaDB: number
  /**
   * 数据库 TencentDB for SQL Server。
   */
  SQLServer: number
  /**
   * 云数据库 TencentDB for PostgreSQL。
   */
  Postgres: number
  /**
   * 网络附加存储。
   */
  NAS: number
  /**
   * Snova云数据仓库。
   */
  Greenplumn: number
  /**
   * 消息队列 CKAFKA。
   */
  Ckafka: number
  /**
   * Grocery。
   */
  Grocery: number
  /**
   * 数据加密服务。
   */
  HSM: number
  /**
   * 游戏存储 Tcaplus。
   */
  Tcaplus: number
  /**
   * Cnas。
   */
  Cnas: number
  /**
   * HTAP 数据库 TiDB。
   */
  TiDB: number
  /**
   * EMR 集群。
   */
  Emr: number
  /**
   * SEAL。
   */
  SEAL: number
  /**
   * 文件存储 CFS。
   */
  CFS: number
  /**
   * Oracle。
   */
  Oracle: number
  /**
   * ElasticSearch服务。
   */
  ElasticSearch: number
  /**
   * 区块链服务。
   */
  TBaaS: number
  /**
   * Itop。
   */
  Itop: number
  /**
   * 云数据库审计。
   */
  DBAudit: number
  /**
   * 企业级云数据库 CynosDB for Postgres。
   */
  CynosDBPostgres: number
  /**
   * 数据库 TencentDB for Redis。
   */
  Redis: number
  /**
   * 数据库 TencentDB for MongoDB。
   */
  MongoDB: number
  /**
   * 分布式数据库 TencentDB for TDSQL。
   */
  DCDB: number
  /**
   * 企业级云数据库 CynosDB for MySQL。
   */
  CynosDBMySQL: number
  /**
   * 子网。
   */
  Subnet: number
  /**
   * 路由表。
   */
  RouteTable: number
}

/**
 * DescribeSubnetResourceDashboard请求参数结构体
 */
export interface DescribeSubnetResourceDashboardRequest {
  /**
   * Subnet实例ID，例如：subnet-f1xjkw1b。
   */
  SubnetIds: Array<string>
}

/**
 * DescribeIpGeolocationDatabaseUrl返回参数结构体
 */
export interface DescribeIpGeolocationDatabaseUrlResponse {
  /**
   * IP地理位置库下载链接地址。
   */
  DownLoadUrl?: string
  /**
   * 链接到期时间。按照`ISO8601`标准表示，并且使用`UTC`时间。
   */
  ExpiredAt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Vpc任务结果详细信息。
 */
export interface VpcTaskResultDetailInfo {
  /**
   * 资源ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId: string
  /**
   * 状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
}

/**
 * DeleteServiceTemplateGroup返回参数结构体
 */
export interface DeleteServiceTemplateGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IDC子网信息
 */
export interface DirectConnectSubnet {
  /**
   * 专线网关ID
   */
  DirectConnectGatewayId: string
  /**
   * IDC子网网段
   */
  CidrBlock: string
}

/**
 * 网络ACL规则集合
 */
export interface NetworkAclEntrySet {
  /**
   * 入站规则。
   */
  Ingress?: Array<NetworkAclEntry>
  /**
   * 出站规则。
   */
  Egress?: Array<NetworkAclEntry>
}

/**
 * StartTrafficMirror返回参数结构体
 */
export interface StartTrafficMirrorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpnConnection返回参数结构体
 */
export interface DeleteVpnConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpnGatewaySslClients返回参数结构体
 */
export interface DescribeVpnGatewaySslClientsResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * SSL-VPN-CLIENT 实例列表。
   */
  SslVpnClientSet?: Array<SslVpnClient>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReleaseIPv6Addresses返回参数结构体
 */
export interface ReleaseIPv6AddressesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCcn返回参数结构体
 */
export interface CreateCcnResponse {
  /**
   * 云联网（CCN）对象。
   */
  Ccn?: CCN
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableCcnRoutes请求参数结构体
 */
export interface EnableCcnRoutesRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * CCN路由策略唯一ID。形如：ccnr-f49l6u0z。可通过DescribeCcnRoutes接口获取。
   */
  RouteIds: Array<string>
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * DescribeCcnAttachedInstances返回参数结构体
 */
export interface DescribeCcnAttachedInstancesResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 关联实例列表。
   */
  InstanceSet?: Array<CcnAttachedInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 默认VPC和子网
 */
export interface DefaultVpcSubnet {
  /**
   * 默认VpcId。
   */
  VpcId: string
  /**
   * 默认SubnetId。
   */
  SubnetId: string
  /**
   * 默认Vpc名字。
   */
  VpcName?: string
  /**
   * 默认Subnet名字。
   */
  SubnetName?: string
  /**
   * 默认子网网段。
   */
  CidrBlock?: string
}

/**
 * DescribeIp6Translators请求参数结构体
 */
export interface DescribeIp6TranslatorsRequest {
  /**
   * IPV6转换实例唯一ID数组，形如ip6-xxxxxxxx
   */
  Ip6TranslatorIds?: Array<string>
  /**
   * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`Ip6TranslatorIds`和`Filters`。详细的过滤条件如下：
<li> ip6-translator-id - String - 是否必填：否 - （过滤条件）按照IPV6转换实例的唯一ID过滤,形如ip6-xxxxxxx。</li>
<li> ip6-translator-vip6 - String - 是否必填：否 - （过滤条件）按照IPV6地址过滤。不支持模糊过滤。</li>
<li> ip6-translator-name - String - 是否必填：否 - （过滤条件）按照IPV6转换实例名称过滤。不支持模糊过滤。</li>
<li> ip6-translator-status - String - 是否必填：否 - （过滤条件）按照IPV6转换实例的状态过滤。状态取值范围为"CREATING","RUNNING","DELETING","MODIFYING"。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Limit?: number
}

/**
 * CreateSubnets返回参数结构体
 */
export interface CreateSubnetsResponse {
  /**
   * 新创建的子网列表。
   */
  SubnetSet?: Array<Subnet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGatewayFlowMonitorDetail请求参数结构体
 */
export interface DescribeGatewayFlowMonitorDetailRequest {
  /**
   * 时间点。表示要查询这分钟内的明细。如：`2019-02-28 18:15:20`，将查询 `18:15` 这一分钟内的明细。
   */
  TimePoint: string
  /**
   * VPN网关实例ID，形如：`vpn-ltjahce6`。
   */
  VpnId?: string
  /**
   * 专线网关实例ID，形如：`dcg-ltjahce6`。
   */
  DirectConnectGatewayId?: string
  /**
   * 对等连接实例ID，形如：`pcx-ltjahce6`。
   */
  PeeringConnectionId?: string
  /**
   * NAT网关实例ID，形如：`nat-ltjahce6`。
   */
  NatId?: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 排序字段。支持 `InPkg` `OutPkg` `InTraffic` `OutTraffic`，标准型nat额外支持 并发连接数`ConcurrentConnectionCount` 、新建连接速率`NewConnectionRate`。默认值`OutTraffic`。
   */
  OrderField?: string
  /**
   * 排序方法。顺序：`ASC`，倒序：`DESC`。默认值`DESC`。
   */
  OrderDirection?: string
  /**
   * VPC内部IPv4地址，精确匹配
   */
  PrivateIpAddress?: string
}

/**
 * ResetTrafficMirrorSrcs请求参数结构体
 */
export interface ResetTrafficMirrorSrcsRequest {
  /**
   * 流量镜像实例ID
   */
  TrafficMirrorId: string
  /**
   * 流量镜像采集对象
   */
  CollectorSrcs: Array<string>
}

/**
 * InquiryPriceCreateVpnGateway返回参数结构体
 */
export interface InquiryPriceCreateVpnGatewayResponse {
  /**
   * 商品价格。
   */
  Price?: Price
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupLimits返回参数结构体
 */
export interface DescribeSecurityGroupLimitsResponse {
  /**
   * 用户安全组配额限制。
   */
  SecurityGroupLimitSet?: SecurityGroupLimitSet
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 对端网关
 */
export interface CustomerGateway {
  /**
   * 用户网关唯一ID
   */
  CustomerGatewayId?: string
  /**
   * 网关名称
   */
  CustomerGatewayName?: string
  /**
   * 公网地址
   */
  IpAddress?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * BGP ASN。
   */
  BgpAsn?: number
}

/**
 * DescribeCcnRouteTableInputPolicys返回参数结构体
 */
export interface DescribeCcnRouteTableInputPolicysResponse {
  /**
   * 路由表接收策略。
   */
  PolicySet?: Array<CcnRouteTableInputPolicys>
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBandwidthPackageAttribute返回参数结构体
 */
export interface ModifyBandwidthPackageAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVpnGatewaySslServer返回参数结构体
 */
export interface CreateVpnGatewaySslServerResponse {
  /**
   * 创建SSL-VPN server 异步任务ID。
   */
  TaskId?: number
  /**
   * SSL-VPN-SERVER 唯一ID。
   */
  SslVpnServerId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateIPv6Address请求参数结构体
 */
export interface DisassociateIPv6AddressRequest {
  /**
   * 弹性公网IPv6唯一ID，EIPv6 唯一 ID 形如：eipv6-11112222。
   */
  IPv6AddressId: string
  /**
   * 解绑时是否保持绑定弹性网卡。
   */
  KeepBindWithEni?: boolean
}

/**
 * 本端目的IP端口转换复杂结构
 */
export interface PrivateNatDestinationIpPortTranslationNatRule {
  /**
   * 协议
   */
  Protocol: string
  /**
   * 原端口
   */
  OriginalPort: number
  /**
   * 原IP
   */
  OriginalIp: string
  /**
   * 映射端口
   */
  TranslationPort: number
  /**
   * 映射IP
   */
  TranslationIp: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
}

/**
 * CreateHighPriorityRouteTable请求参数结构体
 */
export interface CreateHighPriorityRouteTableRequest {
  /**
   * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * 高优路由表名称，最大长度不能超过60个字节。
   */
  Name: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
}

/**
 * DeleteNetworkAcl请求参数结构体
 */
export interface DeleteNetworkAclRequest {
  /**
   * 网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
}

/**
 * CreateHighPriorityRoutes请求参数结构体
 */
export interface CreateHighPriorityRoutesRequest {
  /**
   * 高优路由表唯一 ID。
   */
  HighPriorityRouteTableId: string
  /**
   * 高优路由表条目信息。
   */
  HighPriorityRoutes: Array<HighPriorityRoute>
}

/**
 * NAT网关的端口转发规则
 */
export interface NatGatewayDestinationIpPortTranslationNatRule {
  /**
   * 网络协议，可选值：`TCP`、`UDP`。
   */
  IpProtocol?: string
  /**
   * 弹性公网IP。
   */
  PublicIpAddress?: string
  /**
   * 公网端口。
   */
  PublicPort?: number
  /**
   * 内网地址。
   */
  PrivateIpAddress?: string
  /**
   * 内网端口。
   */
  PrivatePort?: number
  /**
   * NAT网关转发规则描述。
   */
  Description?: string
  /**
   * NAT网关的ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatGatewayId?: string
  /**
   * 私有网络VPC的ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * NAT网关转发规则创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
}

/**
 * CloneSecurityGroup返回参数结构体
 */
export interface CloneSecurityGroupResponse {
  /**
   * 安全组对象。
   */
  SecurityGroup?: SecurityGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于描述云联网地域间限速带宽实例的信息。
 */
export interface CcnBandwidth {
  /**
   * 带宽所属的云联网ID。
   */
  CcnId?: string
  /**
   * 实例的创建时间。
   */
  CreatedTime?: string
  /**
   * 实例的过期时间
   */
  ExpiredTime?: string
  /**
   * 带宽实例的唯一ID。
   */
  RegionFlowControlId?: string
  /**
   * 带宽是否自动续费的标记。
   */
  RenewFlag?: string
  /**
   * 描述带宽的地域和限速上限信息。在地域间限速的情况下才会返回参数，出口限速模式不返回。
   */
  CcnRegionBandwidthLimit?: CcnRegionBandwidthLimitInfo
  /**
   * 云市场实例ID。
   */
  MarketId?: string
  /**
   * 实例所属用户主账号ID。
   */
  UserAccountID?: string
  /**
   * 是否跨境，`true`表示跨境，反之不跨境。
   */
  IsCrossBorder?: boolean
  /**
   * `true`表示封禁，地域间流量不通，`false`解禁，地域间流量正常
   */
  IsSecurityLock?: boolean
  /**
   * `POSTPAID`表示后付费，`PREPAID`表示预付费。
   */
  InstanceChargeType?: string
  /**
   * 实例更新时间
   */
  UpdateTime?: string
}

/**
 * ModifyIp6Translator请求参数结构体
 */
export interface ModifyIp6TranslatorRequest {
  /**
   * IPV6转换实例唯一ID，形如ip6-xxxxxxxxx
   */
  Ip6TranslatorId: string
  /**
   * IPV6转换实例修改名称
   */
  Ip6TranslatorName?: string
}

/**
 * CreateVpnConnection返回参数结构体
 */
export interface CreateVpnConnectionResponse {
  /**
   * 通道实例对象。
   */
  VpnConnection?: VpnConnection
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCdcUsedIdcVlan返回参数结构体
 */
export interface DescribeCdcUsedIdcVlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IP地址模板
 */
export interface AddressTemplateSpecification {
  /**
   * IP地址ID，例如：ipm-2uw6ujo6。
   */
  AddressId: string
  /**
   * IP地址组ID，例如：ipmg-2uw6ujo6。
   */
  AddressGroupId: string
}

/**
 * VPC内网IPv6对象。
 */
export interface VpcIpv6Address {
  /**
   * `VPC`内`IPv6`地址。
   */
  Ipv6Address?: string
  /**
   * 所属子网 `IPv6` `CIDR`。
   */
  CidrBlock?: string
  /**
   * `IPv6`类型。
   */
  Ipv6AddressType?: string
  /**
   * `IPv6`申请时间。
   */
  CreatedTime?: string
}

/**
 * AssignIpv6Addresses请求参数结构体
 */
export interface AssignIpv6AddressesRequest {
  /**
   * 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。
   */
  NetworkInterfaceId: string
  /**
   * 指定的`IPv6`地址列表，单次最多指定10个。与入参`Ipv6AddressCount`合并计算配额。与Ipv6AddressCount必填一个。
   */
  Ipv6Addresses?: Array<Ipv6Address>
  /**
   * 自动分配`IPv6`地址个数，内网IP地址个数总和不能超过配额数。与入参`Ipv6Addresses`合并计算配额。与Ipv6Addresses必填一个。
   */
  Ipv6AddressCount?: number
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * CreateServiceTemplateGroup返回参数结构体
 */
export interface CreateServiceTemplateGroupResponse {
  /**
   * 协议端口模板集合对象。
   */
  ServiceTemplateGroup?: ServiceTemplateGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网络探测对象。
 */
export interface NetDetect {
  /**
   * `VPC`实例`ID`。形如：`vpc-12345678`
   */
  VpcId?: string
  /**
   * `VPC`实例名称。
   */
  VpcName?: string
  /**
   * 子网实例ID。形如：subnet-12345678。
   */
  SubnetId?: string
  /**
   * 子网实例名称。
   */
  SubnetName?: string
  /**
   * 网络探测实例ID。形如：netd-12345678。
   */
  NetDetectId?: string
  /**
   * 网络探测名称，最大长度不能超过60个字节。
   */
  NetDetectName?: string
  /**
   * 探测目的IPv4地址数组，最多两个。
   */
  DetectDestinationIp?: Array<string>
  /**
   * 系统自动分配的探测源IPv4数组。长度为2。
   */
  DetectSourceIp?: Array<string>
  /**
   * 下一跳类型，目前我们支持的类型有：
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
NAT：NAT网关；
NORMAL_CVM：普通云服务器；
CCN：云联网网关；
NONEXTHOP：无下一跳；
   */
  NextHopType?: string
  /**
   * 下一跳目的网关，取值与“下一跳类型”相关：
下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；
下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；
下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；
下一跳类型为NAT，取值Nat网关，形如：nat-12345678；
下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；
下一跳类型为CCN，取值云联网ID，形如：ccn-12345678；
下一跳类型为NONEXTHOP，指定网络探测为无下一跳的网络探测，添加和修改时，不需要指定值，查询时值为空字符串；
   */
  NextHopDestination?: string
  /**
   * 下一跳网关名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextHopName?: string
  /**
   * 网络探测描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetDetectDescription?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
}

/**
 * 修改VPN状态参数
 */
export interface VpnGatewayRouteModify {
  /**
   * VPN网关路由ID。
   */
  RouteId: string
  /**
   * VPN网关状态, ENABLE 启用, DISABLE禁用。
   */
  Status: string
}

/**
 * DisableSnapshotPolicies请求参数结构体
 */
export interface DisableSnapshotPoliciesRequest {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyIds: Array<string>
}

/**
 * 模板对象成员信息
 */
export interface MemberInfo {
  /**
   * 模板对象成员
   */
  Member: string
  /**
   * 模板对象成员描述信息
   */
  Description?: string
}

/**
 * ModifyPrivateNatGatewayDestinationIpPortTranslationNatRule请求参数结构体
 */
export interface ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 目的端口转换规则列表。
   */
  LocalDestinationIpPortTranslationNatRules: Array<DestinationIpPortTranslationNatRuleDiff>
}

/**
 * ReplaceHighPriorityRoutes请求参数结构体
 */
export interface ReplaceHighPriorityRoutesRequest {
  /**
   * 高优路由表唯一 ID。
   */
  HighPriorityRouteTableId: string
  /**
   * 高优路由表条目信息。
   */
  HighPriorityRoutes: Array<HighPriorityRoute>
}

/**
 * DeleteHighPriorityRoutes返回参数结构体
 */
export interface DeleteHighPriorityRoutesResponse {
  /**
   * 高优路由表条目信息。
   */
  HighPriorityRouteSet?: Array<HighPriorityRoute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceSecurityGroupPolicy请求参数结构体
 */
export interface ReplaceSecurityGroupPolicyRequest {
  /**
   * 安全组实例ID，例如sg-33ocnj9n，可通过<a href="https://cloud.tencent.com/document/product/215/15808">DescribeSecurityGroups</a>获取。
   */
  SecurityGroupId: string
  /**
   * 安全组规则集合对象。
   */
  SecurityGroupPolicySet: SecurityGroupPolicySet
  /**
   * 旧的安全组规则集合对象，可选，日志记录用。
   */
  OriginalSecurityGroupPolicySet?: SecurityGroupPolicySet
}

/**
 * ModifyVpcEndPointServiceAttribute返回参数结构体
 */
export interface ModifyVpcEndPointServiceAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateNatGatewayDestinationIpPortTranslationNatRule返回参数结构体
 */
export interface DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReserveIpAddresses返回参数结构体
 */
export interface DescribeReserveIpAddressesResponse {
  /**
   * 内网保留 IP返回信息。
   */
  ReserveIpAddressSet?: Array<ReserveIpAddressInfo>
  /**
   * 返回内网保留IP的个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshotFiles返回参数结构体
 */
export interface DescribeSnapshotFilesResponse {
  /**
   * 快照文件集合。
   */
  SnapshotFileSet?: Array<SnapshotFileInfo>
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlowLog返回参数结构体
 */
export interface CreateFlowLogResponse {
  /**
   * 创建的流日志信息。
   */
  FlowLog?: Array<FlowLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNetworkAclEntries请求参数结构体
 */
export interface CreateNetworkAclEntriesRequest {
  /**
   * 网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 网络三元组ACL规则集。
   */
  NetworkAclEntrySet: NetworkAclEntrySet
}

/**
 * 流量镜像实例
 */
export interface TrafficMirror {
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * 流量镜像实例。
   */
  TrafficMirrorId?: string
  /**
   * 流量镜像名字。
   */
  TrafficMirrorName?: string
  /**
   * 流量镜像描述。
   */
  TrafficMirrorDescribe?: string
  /**
   * 流量镜像状态。
   */
  State?: string
  /**
   * 流量镜像采集方向。
   */
  Direction?: string
  /**
   * 流量镜像采集对象。
   */
  CollectorSrcs?: Array<string>
  /**
   * 流量镜像过滤的nat网关实例ID。
   */
  NatId?: string
  /**
   * 流量镜像过滤的五元组规则。
   */
  CollectorNormalFilters?: Array<TrafficMirrorFilter>
  /**
   * 流量镜接收目标。
   */
  CollectorTarget?: TrafficMirrorTarget
  /**
   * 流量镜像创建时间。
   */
  CreateTime?: string
  /**
   * 流量镜像的类型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 流量镜像所属的子网ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 流量镜接收目标资源信息，当接收目标为ENI和CLB时返回。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetInfo?: Array<TrafficMirrorTargetResourceInfo>
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
 * CreateVpnGatewayRoutes返回参数结构体
 */
export interface CreateVpnGatewayRoutesResponse {
  /**
   * VPN网关目的路由
   */
  Routes?: Array<VpnGatewayRoute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNetDetect请求参数结构体
 */
export interface CreateNetDetectRequest {
  /**
   * `VPC`实例`ID`。形如：`vpc-12345678`。
   */
  VpcId: string
  /**
   * 子网实例ID。形如：subnet-12345678。
   */
  SubnetId: string
  /**
   * 网络探测名称，最大长度不能超过60个字节。
   */
  NetDetectName: string
  /**
   * 探测目的IPv4地址数组。最多两个。
   */
  DetectDestinationIp: Array<string>
  /**
   * 下一跳类型，目前我们支持的类型有：
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
NAT：NAT网关；
NORMAL_CVM：普通云服务器；
CCN：云联网网关；
NONEXTHOP：无下一跳；
   */
  NextHopType?: string
  /**
   * 下一跳目的网关，取值与“下一跳类型”相关：
下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；
下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；
下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；
下一跳类型为NAT，取值Nat网关，形如：nat-12345678；
下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；
下一跳类型为CCN，取值云联网ID，形如：ccn-12345678；
下一跳类型为NONEXTHOP，指定网络探测为无下一跳的网络探测；
   */
  NextHopDestination?: string
  /**
   * 网络探测描述。
   */
  NetDetectDescription?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * CreateAddressTemplate返回参数结构体
 */
export interface CreateAddressTemplateResponse {
  /**
   * IP地址模板对象。
   */
  AddressTemplate?: AddressTemplate
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNatGatewayDestinationIpPortTranslationNatRule返回参数结构体
 */
export interface CreateNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAddressTemplateGroup请求参数结构体
 */
export interface DeleteAddressTemplateGroupRequest {
  /**
   * IP地址模板集合实例ID，例如：ipmg-90cex8mq。
   */
  AddressTemplateGroupId: string
}

/**
 * CreateVpnGatewaySslClient返回参数结构体
 */
export interface CreateVpnGatewaySslClientResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: number
  /**
   * SSL-VPN client 唯一ID
   */
  SslVpnClientId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetworkInterfaceLimit请求参数结构体
 */
export interface DescribeNetworkInterfaceLimitRequest {
  /**
   * 要查询的CVM实例ID或弹性网卡ID。
   */
  InstanceId: string
}

/**
 * ModifyVpnGatewayRoutes返回参数结构体
 */
export interface ModifyVpnGatewayRoutesResponse {
  /**
   * VPN路由信息
   */
  Routes?: Array<VpnGatewayRoute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 地址信息
 */
export interface AddressTemplateItem {
  /**
   * IP地址模板ID
   */
  AddressTemplateId?: string
  /**
   * IP模板名称，废弃字段。
   */
  AddressTemplateName?: string
  /**
   * 废弃字段。
   */
  From?: string
  /**
   * 废弃字段
   */
  To?: string
  /**
   * 备注。
   */
  Description?: string
  /**
   * 最后更新时间。
   */
  UpdatedTime?: string
}

/**
 * DescribeIp6Addresses返回参数结构体
 */
export interface DescribeIp6AddressesResponse {
  /**
   * 符合条件的 IPv6 数量。
   */
  TotalCount?: number
  /**
   * IPv6 详细信息列表。
   */
  AddressSet?: Array<Address>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRouteTableAttribute请求参数结构体
 */
export interface ModifyRouteTableAttributeRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string
  /**
   * 路由表名称。
   */
  RouteTableName: string
}

/**
 * ModifyDirectConnectGatewayAttribute返回参数结构体
 */
export interface ModifyDirectConnectGatewayAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpnGateways请求参数结构体
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * VPN网关实例ID。形如：vpngw-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnGatewayIds和Filters。
   */
  VpnGatewayIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定VpnGatewayIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。</li>
<li>vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。</li>
<li>vpn-gateway-name - String - （过滤条件）VPN实例名称。</li>
<li>type - String - （过滤条件）VPN网关类型：'IPSEC', 'SSL', 'CCN', 'SSL_CCN'。</li>
<li>public-ip-address- String - （过滤条件）公网IP。</li>
<li>renew-flag - String - （过滤条件）网关续费类型，手动续费：'NOTIFY_AND_MANUAL_RENEW'、自动续费：'NOTIFY_AND_AUTO_RENEW'。</li>
<li>zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。</li>
   */
  Filters?: Array<FilterObject>
  /**
   * 偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 请求对象个数，默认值为20。
   */
  Limit?: number
}

/**
 * 网络探测目的IP的验证结果。
 */
export interface NetDetectIpState {
  /**
   * 探测目的IPv4地址。
   */
  DetectDestinationIp?: string
  /**
   * 探测结果。
0：成功；
-1：查询不到路由丢包；
-2：外出ACL丢包；
-3：IN ACL丢包；
-4：其他错误；
   */
  State?: number
  /**
   * 时延，单位毫秒
   */
  Delay?: number
  /**
   * 丢包率
   */
  PacketLossRate?: number
}

/**
 * 公网询价出参
 */
export interface InternetPrice {
  /**
   * 公网IP询价详细参数。
   */
  AddressPrice?: InternetPriceDetail
}

/**
 * ModifyIp6AddressesBandwidth返回参数结构体
 */
export interface ModifyIp6AddressesBandwidthResponse {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSubnets请求参数结构体
 */
export interface CreateSubnetsRequest {
  /**
   * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`。
   */
  VpcId: string
  /**
   * 子网对象列表。
   */
  Subnets: Array<SubnetInput>
  /**
   * 指定绑定的标签列表，注意这里的标签集合为列表中所有子网对象所共享，不能为每个子网对象单独指定标签，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
  /**
   * 需要增加到的CDC实例ID。
   */
  CdcId?: string
}

/**
 * DescribeVpcEndPointService请求参数结构体
 */
export interface DescribeVpcEndPointServiceRequest {
  /**
   * 过滤条件。不支持同时传入参数 EndPointServiceIds and Filters。
<li> service-id - String - （过滤条件）终端节点服务唯一ID。</li>
<li>service-name - String - （过滤条件）终端节点实例名称。</li>
<li>service-instance-id - String - （过滤条件）后端服务的唯一ID，比如lb-xxx。</li>
<li>service-type - String - （过滤条件）后端PAAS服务类型，CLB,CDB,CRS，不填默认查询类型为CLB。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 单页返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 终端节点服务ID。不支持同时传入参数 EndPointServiceIds and Filters。
   */
  EndPointServiceIds?: Array<string>
  /**
   * <li>不支持同时传入参数 Filters 。</li> <li>列出授权给当前账号的终端节点服务信息。可以配合EndPointServiceIds参数进行过滤，哪些终端节点服务授权了该账户。</li>
   */
  IsListAuthorizedEndPointService?: boolean
}

/**
 * DisableSnapshotPolicies返回参数结构体
 */
export interface DisableSnapshotPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetTrafficMirrorSrcs返回参数结构体
 */
export interface ResetTrafficMirrorSrcsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyServiceTemplateAttribute请求参数结构体
 */
export interface ModifyServiceTemplateAttributeRequest {
  /**
   * 协议端口模板实例ID，例如：ppm-529nwwj8。
   */
  ServiceTemplateId: string
  /**
   * 协议端口模板名称。
   */
  ServiceTemplateName?: string
  /**
   * 支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。协议后面的端口部分长度不能超过128个字符。
   */
  Services?: Array<string>
  /**
   * 支持添加备注的协议端口信息，支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。
   */
  ServicesExtra?: Array<ServicesInfo>
}

/**
 * ModifyPrivateNatGatewayAttribute请求参数结构体
 */
export interface ModifyPrivateNatGatewayAttributeRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 私网网关名称，可任意命名，但不得超过60个字符。
   */
  NatGatewayName: string
}

/**
 * AssociateAddress返回参数结构体
 */
export interface AssociateAddressResponse {
  /**
   * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 策略信息
 */
export interface AccessPolicy {
  /**
   * 目的CIDR
   */
  TargetCidr?: string
  /**
   * 策略ID
   */
  VpnGatewayIdSslAccessPolicyId?: string
  /**
   * 是否对所有用户都生效。1 生效 0不生效
   */
  ForAllClient?: number
  /**
   * 用户组ID
   */
  UserGroupIds?: Array<string>
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * Remark
   */
  Remark?: string
}

/**
 * ModifyCcnAttachedInstancesAttribute返回参数结构体
 */
export interface ModifyCcnAttachedInstancesAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNetworkAcl请求参数结构体
 */
export interface CreateNetworkAclRequest {
  /**
   * VPC实例ID。可通过<a href="https://cloud.tencent.com/document/product/215/15778">DescribeVpcs</a>接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * 网络ACL名称，最大长度不能超过60个字节。
   */
  NetworkAclName: string
  /**
   * 网络ACL类型，三元组(TRIPLE)或五元组(QUINTUPLE)。默认值三元组(TRIPLE)。
   */
  NetworkAclType?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * DescribeAddresses请求参数结构体
 */
export interface DescribeAddressesRequest {
  /**
   * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：`eip-11112222`。参数不支持同时指定`AddressIds`和`Filters.address-id`。
   */
  AddressIds?: Array<string>
  /**
   * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。详细的过滤条件如下：
<li> address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。</li>
<li> address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。</li>
<li> address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。</li>
<li> address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。状态包含：'CREATING'，'BINDING'，'BIND'，'UNBINDING'，'UNBIND'，'OFFLINING'，'BIND_ENI'。</li>
<li> instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。</li>
<li> private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。</li>
<li> network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。</li>
<li> is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常）</li>
<li> address-type - String - 是否必填：否 - （过滤条件）按照 IP类型 进行过滤。可选值：'WanIP', 'EIP'，'AnycastEIP'，'HighQualityEIP'， 'AntiDDoSEIP'。默认值是'EIP'。</li>
<li> address-isp - String - 是否必填：否 - （过滤条件）按照 运营商类型 进行过滤。可选值：'BGP'，'CMCC'，'CUCC', 'CTCC'</li>
<li> dedicated-cluster-id - String - 是否必填：否 - （过滤条件）按照 CDC 的唯一 ID 过滤。CDC 唯一 ID 形如：cluster-11112222。</li>
<li> tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。</li>
<li> tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。</li>
<li> tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API 中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API 中的相关小节。
   */
  Limit?: number
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
   * 过滤条件，不支持同时指定VpcIds和Filters参数。
支持的过滤条件如下：
<li>vpc-name：VPC实例名称，支持模糊查询。</li>
<li>is-default ：是否默认VPC。</li>
<li>vpc-id ：VPC实例ID，例如：vpc-f49l6u0z。</li>
<li>cidr-block：VPC的CIDR。</li>
<li>tag-key ：按照标签键进行过滤，非必填参数。</li>
<li>tag:tag-key：按照标签键值对进行过滤，非必填参数。 其中 tag-key 请使用具体的标签键进行替换，可参考示例2。</li>
  **说明：**若同一个过滤条件（Filter）存在多个Values，则同一Filter下Values间的关系为逻辑或（OR）关系；若存在多个过滤条件（Filter），Filter之间的关系为逻辑与（AND）关系。
<li>ipv6-cidr-block - String - （过滤条件）IPv6子网网段，形如: 2402:4e00:1717:8700::/64 。</li>
<li>isp-type  - String - （过滤条件）运营商类型，形如: BGP 取值范围：'BGP'-默认, 'CMCC'-中国移动, 'CTCC'-中国电信, 'CUCC'-中国联通。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
}

/**
 * DescribeSecurityGroupPolicies请求参数结构体
 */
export interface DescribeSecurityGroupPoliciesRequest {
  /**
   * 安全组实例ID，例如：sg-33ocnj9n，可通过<a href="https://cloud.tencent.com/document/product/215/15808">DescribeSecurityGroups</a>获取。
   */
  SecurityGroupId: string
  /**
   * 过滤条件。
<li>security-group-id - String - 规则中的安全组ID。</li>
<li>ip - String - IP，支持IPV4和IPV6模糊匹配。</li>
<li>address-module - String - IP地址模板或IP地址组模板ID。</li>
<li>service-module - String - 协议端口模板或协议端口组模板ID。</li>
<li>protocol-type - String - 安全组策略支持的协议，可选值：`TCP`, `UDP`, `ICMP`, `ICMPV6`, `GRE`, `ALL`。</li>
<li>port - String - 是否必填：否 -协议端口，支持模糊匹配，值为`ALL`时，查询所有的端口。</li>
<li>poly - String - 协议策略，可选值：`ALL`，所有策略；`ACCEPT`，允许；`DROP`，拒绝。</li>
<li>direction - String - 协议规则，可选值：`ALL`，所有策略；`INBOUND`，入站规则；`OUTBOUND`，出站规则。</li>
<li>description - String - 协议描述，该过滤条件支持模糊匹配。</li>
   */
  Filters?: Array<Filter>
}

/**
 * ModifyIPv6AddressesAttributes返回参数结构体
 */
export interface ModifyIPv6AddressesAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceRenewAddresses请求参数结构体
 */
export interface InquiryPriceRenewAddressesRequest {
  /**
   * 续费资源实例ID。
   */
  AddressIds: Array<string>
  /**
   * 包月按带宽预付费EIP的计费参数。EIP为包月按带宽预付费时，该参数必传，其余场景不需传递。
   */
  AddressChargePrepaid: AddressChargePrepaid
}

/**
 * CreateSecurityGroup返回参数结构体
 */
export interface CreateSecurityGroupResponse {
  /**
   * 安全组对象。
   */
  SecurityGroup?: SecurityGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateNetworkInterfaceSecurityGroups返回参数结构体
 */
export interface DisassociateNetworkInterfaceSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIp6TranslatorQuota请求参数结构体
 */
export interface DescribeIp6TranslatorQuotaRequest {
  /**
   * 待查询IPV6转换实例的唯一ID列表，形如ip6-xxxxxxxx
   */
  Ip6TranslatorIds?: Array<string>
}

/**
 * DescribeHighPriorityRoutes返回参数结构体
 */
export interface DescribeHighPriorityRoutesResponse {
  /**
   * 高优路由表条目信息。
   */
  HighPriorityRouteSet?: Array<HighPriorityRoute>
  /**
   * 高优路由表条目个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateNatGatewayLimits返回参数结构体
 */
export interface DescribePrivateNatGatewayLimitsResponse {
  /**
   * 查询返回结果个数。
   */
  TotalCount: number
  /**
   * 私网网关配额。
   */
  PrivateNatGatewayLimitSet: Array<PrivateNatGatewayLimit>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetworkInterfaceLimit返回参数结构体
 */
export interface DescribeNetworkInterfaceLimitResponse {
  /**
   * 标准型弹性网卡配额。
   */
  EniQuantity?: number
  /**
   * 每个标准型弹性网卡可以分配的IP配额。
   */
  EniPrivateIpAddressQuantity?: number
  /**
   * 扩展型网卡配额。
   */
  ExtendEniQuantity?: number
  /**
   * 每个扩展型弹性网卡可以分配的IP配额。
   */
  ExtendEniPrivateIpAddressQuantity?: number
  /**
   * 中继网卡配额。
   */
  SubEniQuantity?: number
  /**
   * 每个中继网卡可以分配的IP配额。
   */
  SubEniPrivateIpAddressQuantity?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssignIpv6CidrBlock返回参数结构体
 */
export interface AssignIpv6CidrBlockResponse {
  /**
   * 分配的 `IPv6` 网段。形如：`3402:4e00:20:1000::/56`。
   */
  Ipv6CidrBlock?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCcn请求参数结构体
 */
export interface CreateCcnRequest {
  /**
   * CCN名称，最大长度不能超过60个字节。
   */
  CcnName: string
  /**
   * CCN描述信息，最大长度不能超过100个字节。
   */
  CcnDescription?: string
  /**
   * CCN服务质量，`PT`：白金，`AU`：金，`AG`：银，默认为`AU`。
   */
  QosLevel?: string
  /**
   * 计费模式，`PREPAID`：表示预付费，即包年包月，`POSTPAID`：表示后付费，即按量计费。默认：`POSTPAID`。
   */
  InstanceChargeType?: string
  /**
   * 限速类型，`OUTER_REGION_LIMIT`表示地域出口限速，`INTER_REGION_LIMIT`为地域间限速，默认为`OUTER_REGION_LIMIT`。预付费模式仅支持地域间限速，后付费模式支持地域间限速和地域出口限速。
   */
  BandwidthLimitType?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
}

/**
 * DeleteTemplateMember返回参数结构体
 */
export interface DeleteTemplateMemberResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNatGatewaySourceIpTranslationNatRule请求参数结构体
 */
export interface ModifyNatGatewaySourceIpTranslationNatRuleRequest {
  /**
   * NAT网关的ID，形如：`nat-df453454`。
   */
  NatGatewayId: string
  /**
   * NAT网关的SNAT转换规则。
   */
  SourceIpTranslationNatRule: SourceIpTranslationNatRule
}

/**
 * RemoveIp6Rules请求参数结构体
 */
export interface RemoveIp6RulesRequest {
  /**
   * IPV6转换规则所属的转换实例唯一ID，形如ip6-xxxxxxxx
   */
  Ip6TranslatorId: string
  /**
   * 待删除IPV6转换规则，形如rule6-xxxxxxxx
   */
  Ip6RuleIds: Array<string>
}

/**
 * CreatePrivateNatGatewayTranslationNatRule请求参数结构体
 */
export interface CreatePrivateNatGatewayTranslationNatRuleRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 转换规则对象数组。
   */
  TranslationNatRules: Array<TranslationNatRuleInput>
  /**
   * 跨域参数，当VPC为跨域时填写为True。
   */
  CrossDomain?: boolean
}

/**
 * DescribeIpGeolocationDatabaseUrl请求参数结构体
 */
export interface DescribeIpGeolocationDatabaseUrlRequest {
  /**
   * IP地理位置库协议类型，目前仅支持"ipv4"。
   */
  Type: string
}

/**
 * DescribeVpcEndPoint返回参数结构体
 */
export interface DescribeVpcEndPointResponse {
  /**
   * 终端节点对象。
   */
  EndPointSet?: Array<EndPoint>
  /**
   * 符合查询条件的终端节点个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetworkAclQuintupleEntries请求参数结构体
 */
export interface DescribeNetworkAclQuintupleEntriesRequest {
  /**
   * 网络ACL实例ID。形如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最小值为1，最大值为100。
   */
  Limit?: number
  /**
   * 过滤条件，参数不支持同时指定`NetworkAclId`和`Filters`。
<li>protocol - String - 协议，形如：`TCP`。</li>
<li>description - String - 描述。</li>
<li>destination-cidr - String - 目的CIDR， 形如：'192.168.0.0/24'。</li>
<li>source-cidr- String - 源CIDR， 形如：'192.168.0.0/24'。</li>
<li>action - String - 动作，形如ACCEPT或DROP。</li>
<li>network-acl-quintuple-entry-id - String - 五元组唯一ID，形如：'acli45-ahnu4rv5'。</li>
<li>network-acl-direction - String - 方向，形如：'INGRESS'或'EGRESS'。</li>
   */
  Filters?: Array<Filter>
}

/**
 * 网络探测验证结果。
 */
export interface NetDetectState {
  /**
   * 网络探测实例ID。形如：netd-12345678。
   */
  NetDetectId?: string
  /**
   * 网络探测目的IP验证结果对象数组。
   */
  NetDetectIpStateSet?: Array<NetDetectIpState>
}

/**
 * DescribeSnapshotPolicies返回参数结构体
 */
export interface DescribeSnapshotPoliciesResponse {
  /**
   * 快照策略。
   */
  SnapshotPolicySet?: Array<SnapshotPolicy>
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableGatewayFlowMonitor请求参数结构体
 */
export interface DisableGatewayFlowMonitorRequest {
  /**
   * 网关实例ID，目前我们支持的网关实例类型有，
专线网关实例ID，形如，`dcg-ltjahce6`；
Nat网关实例ID，形如，`nat-ltjahce6`；
VPN网关实例ID，形如，`vpn-ltjahce6`。
   */
  GatewayId: string
}

/**
 * DescribeCcnRouteTableBroadcastPolicys返回参数结构体
 */
export interface DescribeCcnRouteTableBroadcastPolicysResponse {
  /**
   * 路由表传播策略。
   */
  PolicySet?: Array<CcnRouteTableBroadcastPolicys>
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableRoutes返回参数结构体
 */
export interface EnableRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HaVipAssociateAddressIp返回参数结构体
 */
export interface HaVipAssociateAddressIpResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateNatGatewayTranslationAclRule返回参数结构体
 */
export interface DeletePrivateNatGatewayTranslationAclRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpecificTrafficPackageUsedDetails请求参数结构体
 */
export interface DescribeSpecificTrafficPackageUsedDetailsRequest {
  /**
   * 共享流量包唯一ID
   */
  TrafficPackageId: string
  /**
   * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。详细的过滤条件如下：<li> resource-id - String - 是否必填：否 - （过滤条件）按照抵扣流量资源的唯一 ID 过滤。</li><li> resource-type - String - 是否必填：否 - （过滤条件）按照资源类型过滤，资源类型包括 CVM 和 EIP </li>
   */
  Filters?: Array<Filter>
  /**
   * 排序条件。该参数仅支持根据抵扣量排序，传值为 deduction
   */
  OrderField?: string
  /**
   * 排序类型，仅支持0和1，0-降序，1-升序。不传默认为0
   */
  OrderType?: number
  /**
   * 开始时间。不传默认为当前时间往前推30天
   */
  StartTime?: string
  /**
   * 结束时间。不传默认为当前时间
   */
  EndTime?: string
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 中的相关小节
   */
  Offset?: number
  /**
   * 返回数量，默认为20。关于Limit的更进一步介绍请参考 API 中的相关小节。
   */
  Limit?: number
}

/**
 * DeleteVpnConnection请求参数结构体
 */
export interface DeleteVpnConnectionRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * VPN通道实例ID。形如：vpnx-f49l6u0z。
   */
  VpnConnectionId: string
}

/**
 * DescribePrivateNatGatewayDestinationIpPortTranslationNatRules请求参数结构体
 */
export interface DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesRequest {
  /**
   * 私网网关唯一`ID`，形如"intranat-xxxxxxxx)
   */
  NatGatewayId: string
  /**
   * 过滤条件，Name可选值"OriginalIp",  "TranslationIp", "OriginalPort","TranslationPort",  "Protocol", "Description"
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 返回数目，默认值为20。
   */
  Limit?: number
}

/**
 * DescribeDhcpIps请求参数结构体
 */
export interface DescribeDhcpIpsRequest {
  /**
   * DhcpIp实例ID。形如：dhcpip-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定DhcpIpIds和Filters。
   */
  DhcpIpIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定DhcpIpIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。</li>
<li>dhcpip-id - String - （过滤条件）DhcpIp实例ID，形如：dhcpip-pxir56ns。</li>
<li>dhcpip-name - String - （过滤条件）DhcpIp实例名称。</li>
<li>address-ip - String - （过滤条件）DhcpIp实例的IP，根据IP精确查找。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeAssistantCidr请求参数结构体
 */
export interface DescribeAssistantCidrRequest {
  /**
   * `VPC`实例`ID`数组。形如：[`vpc-6v2ht8q5`]
   */
  VpcIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定VpcIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * RenewVpnGateway返回参数结构体
 */
export interface RenewVpnGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCcnRouteTables返回参数结构体
 */
export interface DescribeCcnRouteTablesResponse {
  /**
   * 路由表信息列表。
   */
  CcnRouteTableSet?: Array<CcnRouteTable>
  /**
   * 查询到的路由表数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDirectConnectGateway返回参数结构体
 */
export interface DeleteDirectConnectGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIPv6Addresses请求参数结构体
 */
export interface DescribeIPv6AddressesRequest {
  /**
   * 标识 IPv6 的唯一 ID 列。

- 传统弹性公网 IPv6 唯一 ID 形如：`eip-11112222`
- 弹性公网 IPv6 唯一 ID 形如：`eipv6-11112222`

注意：参数不支持同时指定`IPv6AddressIds`和`Filters`。
   */
  IPv6AddressIds?: Array<string>
  /**
   * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。参数不支持同时指定`IPv6AddressIds`和`Filters`。详细的过滤条件如下：

- address-id - String - 是否必填：否 - （过滤条件）按照弹性公网IPv6的唯一ID过滤。
- public-ipv6-address - String - 是否必填：否 - （过滤条件）按照公网 IPv6 的 IP 地址过滤。
- network-interface-id - String - 是否必填：否 - （过滤条件）按照弹性网卡的唯一ID过滤。
- instance-id - String - 是否必填：否 - （过滤条件）按照绑定实例的唯一ID过滤。
- charge-type - String - 是否必填：否 - （过滤条件）按照计费类型过滤。
- private-ipv6-address - String - 是否必填：否 - （过滤条件）按照绑定的内网 IPv6 地址过滤。
- egress - String - 是否必填：否 - （过滤条件）按照出口过滤。
- address-type - String - 是否必填：否 - （过滤条件）按照IPv6类型 进行过滤。可选值：'EIP6'，'EIPv6'，'WanIPv6'，'HighQualityEIPv6'。默认值是'EIPv6'。
- address-isp - String - 是否必填：否 - （过滤条件）按照 运营商类型 进行过滤。可选值：'BGP'，'CMCC'，'CUCC', 'CTCC'。
- address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。状态包含：'CREATING'，'BINDING'，'BIND'，'UNBINDING'，'UNBIND'，'OFFLINING'，'BIND_ENI'，'PRIVATE'。
- address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。
- tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。
- tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。
- tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。
   */
  Filters?: Array<Filter>
  /**
   * 是否查询传统型IPv6地址信息。
   */
  Traditional?: boolean
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Limit?: number
}

/**
 * ResetVpnGatewayInternetMaxBandwidth请求参数结构体
 */
export interface ResetVpnGatewayInternetMaxBandwidthRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 新规格公网带宽设置。可选带宽规格：5, 10, 20, 50, 100, 200, 500, 1000；单位：Mbps。VPN网关带宽目前仅支持部分带宽范围内升降配，如【5,100】Mbps和【200,1000】Mbps，在各自带宽范围内可提升配额，跨范围提升配额和降配暂不支持。
   */
  InternetMaxBandwidthOut: number
}

/**
 * 终端节点详情。
 */
export interface EndPoint {
  /**
   * 终端节点ID。
   */
  EndPointId?: string
  /**
   * VPCID。
   */
  VpcId?: string
  /**
   * 子网ID。
   */
  SubnetId?: string
  /**
   * APPID。
   */
  EndPointOwner?: string
  /**
   * 终端节点名称。
   */
  EndPointName?: string
  /**
   * 终端节点服务的VPCID。
   */
  ServiceVpcId?: string
  /**
   * 终端节点服务的VIP。
   */
  ServiceVip?: string
  /**
   * 终端节点服务的ID。
   */
  EndPointServiceId?: string
  /**
   * 终端节点的VIP。
   */
  EndPointVip?: string
  /**
   * 终端节点状态，ACTIVE：可用，PENDING：待接受，ACCEPTING：接受中，REJECTED：已拒绝，FAILED：失败。
   */
  State?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 终端节点绑定的安全组实例ID列表。
   */
  GroupSet?: Array<string>
  /**
   * 终端节点服务名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceName?: string
  /**
   * CDC 集群唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
  /**
   * 标签键值对。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSet?: Array<Tag>
}

/**
 * RemoveIp6Rules返回参数结构体
 */
export interface RemoveIp6RulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 专线网关对象。
 */
export interface DirectConnectGateway {
  /**
   * 专线网关`ID`。
   */
  DirectConnectGatewayId?: string
  /**
   * 专线网关名称。
   */
  DirectConnectGatewayName?: string
  /**
   * 专线网关关联`VPC`实例`ID`。
   */
  VpcId?: string
  /**
   * 关联网络类型：
<li>`VPC` - 私有网络</li>
<li>`CCN` - 云联网</li>
   */
  NetworkType?: string
  /**
   * 关联网络实例`ID`：
<li>`NetworkType`为`VPC`时，这里为私有网络实例`ID`</li>
<li>`NetworkType`为`CCN`时，这里为云联网实例`ID`</li>
   */
  NetworkInstanceId?: string
  /**
   * 网关类型：
<li>NORMAL - 标准型，注：云联网只支持标准型</li>
<li>NAT - NAT型</li>
NAT类型支持网络地址转换配置，类型确定后不能修改；一个私有网络可以创建一个NAT类型的专线网关和一个非NAT类型的专线网关
   */
  GatewayType?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 专线网关IP。
   */
  DirectConnectGatewayIp?: string
  /**
   * 专线网关关联`CCN`实例`ID`。
   */
  CcnId?: string
  /**
   * 云联网路由学习类型：
<li>`BGP` - 自动学习。</li>
<li>`STATIC` - 静态，即用户配置。</li>
   */
  CcnRouteType?: string
  /**
   * 是否启用BGP。
   */
  EnableBGP?: boolean
  /**
   * 开启和关闭BGP的community属性。
   */
  EnableBGPCommunity?: boolean
  /**
   * 绑定的NAT网关ID。
   */
  NatGatewayId?: string
  /**
   * 专线网关是否支持VXLAN架构
   */
  VXLANSupport?: Array<boolean>
  /**
   * 云联网路由发布模式：`standard`（标准模式）、`exquisite`（精细模式）。
   */
  ModeType?: string
  /**
   * 是否为localZone专线网关。
   */
  LocalZone?: boolean
  /**
   * 专线网关所在可用区
   */
  Zone?: string
  /**
   * 网关流控明细启用状态：
0：关闭
1：开启
   */
  EnableFlowDetails?: number
  /**
   * 开启、关闭网关流控明细时间
   */
  FlowDetailsUpdateTime?: string
  /**
   * 是否支持开启网关流控明细
0：不支持
1：支持
   */
  NewAfc?: number
  /**
   * 专线网关接入网络类型：
<li>`VXLAN` - VXLAN类型。</li>
<li>`MPLS` - MPLS类型。</li>
<li>`Hybrid` - Hybrid类型。</li>
   */
  AccessNetworkType?: string
  /**
   * 跨可用区容灾专线网关的可用区列表
   */
  HaZoneList?: Array<string>
  /**
   * 专线网关自定义ASN
   */
  GatewayAsn?: number
}

/**
 * DescribeProductQuota返回参数结构体
 */
export interface DescribeProductQuotaResponse {
  /**
   * ProductQuota对象数组。
   */
  ProductQuotaSet?: Array<ProductQuota>
  /**
   * 符合条件的产品类型个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 价格
 */
export interface Price {
  /**
   * 实例价格。
   */
  InstancePrice?: ItemPrice
  /**
   * 带宽价格。
   */
  BandwidthPrice?: ItemPrice
}

/**
 * HaVipDisassociateAddressIp请求参数结构体
 */
export interface HaVipDisassociateAddressIpRequest {
  /**
   * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。必须是已绑定`EIP`的`HAVIP`。
   */
  HaVipId: string
}

/**
 * DescribeSgSnapshotFileContent返回参数结构体
 */
export interface DescribeSgSnapshotFileContentResponse {
  /**
   * 实例Id，即安全组Id。
   */
  InstanceId: string
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId: string
  /**
   * 快照文件Id。
   */
  SnapshotFileId: string
  /**
   * 备份时间。
   */
  BackupTime: string
  /**
   * 操作者。
   */
  Operator: string
  /**
   * 原始数据。
   */
  OriginalData: Array<SecurityGroupPolicy>
  /**
   * 备份数据。
   */
  BackupData: Array<SecurityGroupPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClearRouteTableSelectionPolicies返回参数结构体
 */
export interface ClearRouteTableSelectionPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBandwidthPackageResources返回参数结构体
 */
export interface DescribeBandwidthPackageResourcesResponse {
  /**
   * 符合条件的 共享带宽包内资源 数量。
   */
  TotalCount?: number
  /**
   * 共享带宽包内资源 详细信息列表。
   */
  ResourceSet?: Array<Resource>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCrossBorderCompliance返回参数结构体
 */
export interface DescribeCrossBorderComplianceResponse {
  /**
   * 合规化审批单列表。
   */
  CrossBorderComplianceSet?: Array<CrossBorderCompliance>
  /**
   * 合规化审批单总数。
   */
  TotalCount?: number
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
 * AllocateIPv6Addresses请求参数结构体
 */
export interface AllocateIPv6AddressesRequest {
  /**
   * EIP名称，用于申请EIP时用户自定义该EIP的个性化名称，默认值：未命名。
   */
  AddressName?: string
  /**
   * 弹性公网IPv6类型，可选值：

- EIPv6：普通IPv6
- HighQualityEIPv6：精品IPv6
注意：需联系产品开通精品IPv6白名单，且仅部分地域支持精品IPv6

默认值：EIPv6。
   */
  AddressType?: string
  /**
   * 申请的弹性公网IPv6数量，默认值：1。
   */
  AddressCount?: number
  /**
   * 弹性公网IPv6计费方式，可选值：

- BANDWIDTH_PACKAGE：[共享带宽包](https://cloud.tencent.com/document/product/684/15255)付费
- TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费

默认值：TRAFFIC_POSTPAID_BY_HOUR。
   */
  InternetChargeType?: string
  /**
   * 弹性公网IPv6线路类型，默认值：BGP。

已开通静态单线IP白名单的用户，可选值：
- CMCC：中国移动
- CTCC：中国电信
- CUCC：中国联通
注意：仅部分地域支持静态单线IP。
   */
  InternetServiceProvider?: string
  /**
   * 弹性公网IPv6带宽上限，单位：Mbps。

可选值范围取决于EIP计费方式：

- BANDWIDTH_PACKAGE：1 Mbps 至 2000 Mbps
- TRAFFIC_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps

默认值：1 Mbps。
   */
  InternetMaxBandwidthOut?: number
  /**
   * 带宽包唯一ID参数。
设定该参数且InternetChargeType为BANDWIDTH_PACKAGE，则表示创建的EIP加入该BGP带宽包并采用带宽包计费。
   */
  BandwidthPackageId?: string
  /**
   * 需要关联的标签列表。
   */
  Tags?: Array<Tag>
  /**
   * 弹性公网IPv6网络出口，可选值：

- CENTER_EGRESS_1：中心出口一
- CENTER_EGRESS_2：中心出口二
- CENTER_EGRESS_3：中心出口三
注意：不同运营商或资源类型对应的网络出口需要联系产品开白

默认值：CENTER_EGRESS_1。
   */
  Egress?: string
}

/**
 * AssociateDirectConnectGatewayNatGateway返回参数结构体
 */
export interface AssociateDirectConnectGatewayNatGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 终端节点服务对象。
 */
export interface EndPointService {
  /**
   * 终端节点服务ID
   */
  EndPointServiceId?: string
  /**
   * VPCID。
   */
  VpcId?: string
  /**
   * APPID。
   */
  ServiceOwner?: string
  /**
   * 终端节点服务名称。
   */
  ServiceName?: string
  /**
   * 后端服务的VIP。
   */
  ServiceVip?: string
  /**
   * 后端服务的ID，比如lb-xxx。
   */
  ServiceInstanceId?: string
  /**
   * 是否自动接受。
   */
  AutoAcceptFlag?: boolean
  /**
   * 关联的终端节点个数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndPointCount?: number
  /**
   * 终端节点对象数组。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndPointSet?: Array<EndPoint>
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 挂载的PAAS服务类型，CLB,CDB,CRS
   */
  ServiceType?: string
  /**
   * CDC 集群唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
  /**
   * Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceUin?: string
  /**
   * 服务IP类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessIpType?: number
  /**
   * 标签键值对。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSet?: Array<Tag>
}

/**
 * DescribeVpcResourceDashboard返回参数结构体
 */
export interface DescribeVpcResourceDashboardResponse {
  /**
   * 资源对象列表。
   */
  ResourceDashboardSet?: Array<ResourceDashboard>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpnGatewayCcnRoutes请求参数结构体
 */
export interface DescribeVpnGatewayCcnRoutesRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 偏移量。默认值：0
   */
  Offset?: number
  /**
   * 返回数量。默认值：20
   */
  Limit?: number
}

/**
 * DisassociateDirectConnectGatewayNatGateway返回参数结构体
 */
export interface DisassociateDirectConnectGatewayNatGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateServiceTemplateGroup请求参数结构体
 */
export interface CreateServiceTemplateGroupRequest {
  /**
   * 协议端口模板集合名称。
   */
  ServiceTemplateGroupName: string
  /**
   * 协议端口模板实例ID，例如：ppm-4dw6agho。
   */
  ServiceTemplateIds: Array<string>
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * CreateNetworkAclQuintupleEntries请求参数结构体
 */
export interface CreateNetworkAclQuintupleEntriesRequest {
  /**
   * 网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 网络五元组ACL规则集。
   */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntries
}

/**
 * DeleteHighPriorityRoutes请求参数结构体
 */
export interface DeleteHighPriorityRoutesRequest {
  /**
   * 高优路由表唯一 ID。
   */
  HighPriorityRouteTableId: string
  /**
   * 高优路由表条目唯一 ID 列表。
   */
  HighPriorityRouteIds: Array<string>
}

/**
 * DescribeClassicLinkInstances返回参数结构体
 */
export interface DescribeClassicLinkInstancesResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 私有网络和基础网络互通设备。
   */
  ClassicLinkInstanceSet?: Array<ClassicLinkInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCdcLDCXAttribute请求参数结构体
 */
export type ModifyCdcLDCXAttributeRequest = null

/**
 * EnableVpnGatewaySslClientCert请求参数结构体
 */
export interface EnableVpnGatewaySslClientCertRequest {
  /**
   * SSL-VPN-CLIENT 实例ID。不可和SslVpnClientIds同时使用。
   */
  SslVpnClientId?: string
  /**
   * SSL-VPN-CLIENT 实例ID列表。批量启用时使用。不可和SslVpnClientId同时使用。
   */
  SslVpnClientIds?: Array<string>
}

/**
 * DeleteReserveIpAddresses请求参数结构体
 */
export interface DeleteReserveIpAddressesRequest {
  /**
   * VPC唯一 ID。
   */
  VpcId: string
  /**
   * 内网保留IP地址列表。
   */
  ReserveIpIds: Array<string>
}

/**
 * DescribeVpnGatewayCcnRoutes返回参数结构体
 */
export interface DescribeVpnGatewayCcnRoutesResponse {
  /**
   * 云联网路由（IDC网段）列表。
   */
  RouteSet?: Array<VpngwCcnRoutes>
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachCcnInstances请求参数结构体
 */
export interface DetachCcnInstancesRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * 要解关联网络实例列表
   */
  Instances: Array<CcnInstance>
}

/**
 * ModifyVpcEndPointServiceWhiteList请求参数结构体
 */
export interface ModifyVpcEndPointServiceWhiteListRequest {
  /**
   * 用户UIN。
   */
  UserUin: string
  /**
   * 终端节点服务ID。
   */
  EndPointServiceId: string
  /**
   * 白名单描述信息。
   */
  Description?: string
}

/**
 * DescribeTenantCcns返回参数结构体
 */
export interface DescribeTenantCcnsResponse {
  /**
   * 云联网（CCN）对象。
   */
  CcnSet?: Array<CcnInstanceInfo>
  /**
   * 符合条件的对象总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。当值类型为布尔类型时，可直接取值为字符串"TRUE"或 "FALSE"。
   */
  Values: Array<string>
}

/**
 * MigrateNetworkInterface返回参数结构体
 */
export interface MigrateNetworkInterfaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDirectConnectGateway请求参数结构体
 */
export interface DeleteDirectConnectGatewayRequest {
  /**
   * 专线网关唯一`ID`，形如：`dcg-9o233uri`。
   */
  DirectConnectGatewayId: string
}

/**
 * CreateNatGatewaySourceIpTranslationNatRule返回参数结构体
 */
export interface CreateNatGatewaySourceIpTranslationNatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNatGatewaySourceIpTranslationNatRule返回参数结构体
 */
export interface DeleteNatGatewaySourceIpTranslationNatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPN通道BGP配置
 */
export interface BgpConfigAndAsn {
  /**
   * BGP通道CIDR
   */
  TunnelCidr?: string
  /**
   * 本端BGP IP
   */
  LocalBgpIp?: string
  /**
   * 对端BGP IP
   */
  RemoteBgpIp?: string
  /**
   * 本端BGP ASN号
   */
  LocalBgpAsn?: string
  /**
   * 对端BGP ASN号
   */
  RemoteBgpAsn?: string
}

/**
 * DescribeAddressBandwidthRange请求参数结构体
 */
export interface DescribeAddressBandwidthRangeRequest {
  /**
   * EIP资源ID列表，单次查询上限20。
   */
  AddressIds?: Array<string>
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
 * 云联网路由接收策略列表
 */
export interface CcnRouteTableInputPolicys {
  /**
   * 策略列表。
   */
  Policys?: Array<CcnRouteTableInputPolicy>
  /**
   * 版本号。
   */
  PolicyVersion?: number
  /**
   * 创建时间。
   */
  CreateTime?: string
}

/**
 * DescribeNetworkAccountType返回参数结构体
 */
export interface DescribeNetworkAccountTypeResponse {
  /**
   * 用户账号的网络类型，STANDARD为标准用户，LEGACY为传统用户
   */
  NetworkAccountType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoutes请求参数结构体
 */
export interface DescribeRoutesRequest {
  /**
   * <li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>gateway-id - String - （过滤条件）网关ID。</li>
<li>description - String - （过滤条件）路由描述。</li>
<li>route-table-id - String - （过滤条件）路由表实例ID。</li>
<li>dest-cidr - String - （过滤条件）目的端地址，支持模糊左匹配。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 请求对象个数。
   */
  Limit?: number
}

/**
 * ModifyHighPriorityRouteTableAttribute请求参数结构体
 */
export interface ModifyHighPriorityRouteTableAttributeRequest {
  /**
   * 高优路由表表唯一ID
   */
  HighPriorityRouteTableId: string
  /**
   * 高优路由表表名称
   */
  Name: string
}

/**
 * CreateVpcEndPointService请求参数结构体
 */
export interface CreateVpcEndPointServiceRequest {
  /**
   * VPC实例ID。
   */
  VpcId: string
  /**
   * 终端节点服务名称。
   */
  EndPointServiceName: string
  /**
   * 是否自动接受。
   */
  AutoAcceptFlag: boolean
  /**
   * 后端服务ID，比如lb-xxx。
   */
  ServiceInstanceId: string
  /**
   * ~~是否是PassService类型。该字段已废弃，请不要使用该字段。~~
   */
  IsPassService?: boolean
  /**
   * 挂载的PAAS服务类型，CLB,CDB,CRS，不填默认挂载为CLB。
   */
  ServiceType?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * DescribePrivateNatGateways请求参数结构体
 */
export interface DescribePrivateNatGatewaysRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-0g3blj80`。
   */
  NatGatewayIds?: Array<string>
  /**
   * 过滤条件。
<li>NatGatewayId - String - 私网网关唯一`ID`，形如：`intranat-0g3blj80`。</li>
<li>NatGatewayName - String - 专线网关名称，默认模糊查询。</li>
<li>VpcId - String - 私网网关所在`VpcId`。</li>
<li>TagKey - Tag数组 - 私网网关标签键值对数组</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20。
   */
  Limit?: number
  /**
   * 排序字段。可选值："NatGatewayId"、"NatGatewayName"、"CreatedTime"
   */
  OrderField?: string
  /**
   * 排序方式。可选值："ASC"、"DESC"。
   */
  OrderDirection?: string
}

/**
 * `IPv6`地址信息。
 */
export interface Ipv6Address {
  /**
   * `IPv6`地址，形如：`3402:4e00:20:100:0:8cd9:2a67:71f3`
   */
  Address: string
  /**
   * 是否是主`IP`。
   */
  Primary?: boolean
  /**
   * `EIP`实例`ID`，形如：`eip-hxlqja90`。
   */
  AddressId?: string
  /**
   * 描述信息。
   */
  Description?: string
  /**
   * 公网IP是否被封堵。
   */
  IsWanIpBlocked?: boolean
  /**
   * `IPv6`地址状态：
<li>`PENDING`：生产中</li>
<li>`MIGRATING`：迁移中</li>
<li>`DELETING`：删除中</li>
<li>`AVAILABLE`：可用的</li>
   */
  State?: string
  /**
   * 如果 IPv6地址是 ULA 类型，绑定的公网IP地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicIpAddress?: string
  /**
   * `IPv6`地址的类型: `GUA`, `OTHER`, `ULA`
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressType?: string
}

/**
 * DescribePrivateNatGatewayTranslationAclRules返回参数结构体
 */
export interface DescribePrivateNatGatewayTranslationAclRulesResponse {
  /**
   * 返回个数。
   */
  TotalCount?: number
  /**
   * 访问控制规则列表。
   */
  TranslationAclRuleSet?: Array<TranslationAclRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNetworkInterface请求参数结构体
 */
export interface CreateNetworkInterfaceRequest {
  /**
   * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * 弹性网卡名称，最大长度不能超过60个字节。
   */
  NetworkInterfaceName: string
  /**
   * 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。
   */
  SubnetId: string
  /**
   * 弹性网卡描述，可任意命名，但不得超过60个字符。
   */
  NetworkInterfaceDescription?: string
  /**
   * 新申请的内网IP地址个数，内网IP地址个数总和不能超过配额数。
配额数查询：[DescribeVpcLimits](https://cloud.tencent.com/document/api/215/42942)。
   */
  SecondaryPrivateIpAddressCount?: number
  /**
   * IP服务质量等级，和SecondaryPrivateIpAddressCount配合使用，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。
   */
  QosLevel?: string
  /**
   * 指定绑定的安全组，例如：['sg-1dd51d']。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 指定的内网IP信息，单次最多指定10个。
   */
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
  /**
   * 网卡trunking模式设置，Enable-开启，Disable--关闭，默认关闭。
   */
  TrunkingFlag?: string
  /**
   * 是否创建RDMA弹性网卡，true:创建rdma弹性网卡，false:普通弹性网卡。不填默认为false
   */
  IsRdma?: boolean
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * DeleteTrafficMirror返回参数结构体
 */
export interface DeleteTrafficMirrorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 后付费共享带宽包的当前计费用量
 */
export interface BandwidthPackageBillBandwidth {
  /**
   * 当前计费用量，单位为 Mbps
   */
  BandwidthUsage: number
}

/**
 * DescribePrivateNatGatewayTranslationAclRules请求参数结构体
 */
export interface DescribePrivateNatGatewayTranslationAclRulesRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 转换规则目标，可选值"LOCAL"。
   */
  TranslationDirection: string
  /**
   * 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。
   */
  TranslationType: string
  /**
   * 转换`IP`,当转换规则类型为四层时为`IP`池。
   */
  TranslationIp: string
  /**
   * 源`IP`,当转换规则类型为三层时有效。
   */
  OriginalIp?: string
  /**
   * 偏移量。默认值为0。
   */
  Offset?: number
  /**
   * 返回数目，默认值为20。
   */
  Limit?: number
  /**
   * ACL规则描述
   */
  Description?: string
}

/**
 * 冲突资源条目信息。
 */
export interface ConflictItem {
  /**
   * 冲突资源的ID。已废弃
   */
  ConfilctId?: string
  /**
   * 冲突目的资源
   */
  DestinationItem?: string
  /**
   * 冲突资源的ID
   */
  ConflictId?: string
}

/**
 * CreateDirectConnectGateway请求参数结构体
 */
export interface CreateDirectConnectGatewayRequest {
  /**
   * 专线网关名称
   */
  DirectConnectGatewayName: string
  /**
   * 关联网络类型，可选值：
<li>VPC - 私有网络</li>
<li>CCN - 云联网</li>
   */
  NetworkType: string
  /**
   * <li>NetworkType 为 VPC 时，这里传值为私有网络实例ID</li>
<li>NetworkType 为 CCN 时，这里传值为云联网实例ID</li>
   */
  NetworkInstanceId: string
  /**
   * 网关类型，可选值：
<li>NORMAL - （默认）标准型，注：云联网只支持标准型</li>
<li>NAT - NAT型</li>NAT类型支持网络地址转换配置，类型确定后不能修改；一个私有网络可以创建一个NAT类型的专线网关和一个非NAT类型的专线网关
   */
  GatewayType?: string
  /**
   * 云联网路由发布模式，可选值：`standard`（标准模式）、`exquisite`（精细模式）。只有云联网类型专线网关才支持`ModeType`。
   */
  ModeType?: string
  /**
   * 专线网关自定义ASN，范围：45090，64512-65534 和4200000000-4294967294
   */
  GatewayAsn?: number
  /**
   * 专线网关可用区
   */
  Zone?: string
  /**
   * 专线网关高可用区容灾组ID
   */
  HaZoneGroupId?: string
  /**
   * 标签
   */
  Tags?: Array<Tag>
}

/**
 * VPC内网IP对象。
 */
export interface VpcPrivateIpAddress {
  /**
   * `VPC`内网`IP`。
   */
  PrivateIpAddress?: string
  /**
   * 所属子网`CIDR`。
   */
  CidrBlock?: string
  /**
   * 内网`IP`类型。
   */
  PrivateIpAddressType?: string
  /**
   * `IP`申请时间。
   */
  CreatedTime?: string
}

/**
 * 云主机实例信息。
 */
export interface CvmInstance {
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * 子网实例ID。
   */
  SubnetId?: string
  /**
   * 云主机实例ID
   */
  InstanceId?: string
  /**
   * 云主机名称。
   */
  InstanceName?: string
  /**
   * 云主机状态。
   */
  InstanceState?: string
  /**
   * 实例的CPU核数，单位：核。
   */
  CPU?: number
  /**
   * 实例内存容量，单位：GB。
   */
  Memory?: number
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 实例机型。
   */
  InstanceType?: string
  /**
   * 实例弹性网卡配额（包含主网卡）。
   */
  EniLimit?: number
  /**
   * 实例弹性网卡内网IP配额（包含主网卡）。
   */
  EniIpLimit?: number
  /**
   * 实例已绑定弹性网卡的个数（包含主网卡）。
   */
  InstanceEniCount?: number
}

/**
 * DescribeNetworkAcls请求参数结构体
 */
export interface DescribeNetworkAclsRequest {
  /**
   * 过滤条件，参数不支持同时指定NetworkAclIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-12345678。</li>
<li>network-acl-id - String - （过滤条件）网络ACL实例ID，形如：acl-12345678。</li>
<li>network-acl-name - String - （过滤条件）网络ACL实例名称。</li>
   */
  Filters?: Array<Filter>
  /**
   * 网络ACL实例ID数组。形如：[acl-12345678]。每次请求的实例的上限为100。参数不支持同时指定NetworkAclIds和Filters。
   */
  NetworkAclIds?: Array<string>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最小值为1，最大值为100。
   */
  Limit?: number
  /**
   * 排序字段。支持：NetworkAclId,NetworkAclName,CreatedTime
   */
  OrderField?: string
  /**
   * 排序方法。顺序：ASC，倒序：DESC。
   */
  OrderDirection?: string
}

/**
 * DescribeNetworkAclQuintupleEntries返回参数结构体
 */
export interface DescribeNetworkAclQuintupleEntriesResponse {
  /**
   * 网络ACL条目列表（NetworkAclTuple5Entry）
   */
  NetworkAclQuintupleSet?: Array<NetworkAclQuintupleEntry>
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
 * DescribeSubnets请求参数结构体
 */
export interface DescribeSubnetsRequest {
  /**
   * 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。
   */
  SubnetIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定SubnetIds和Filters。
<li>subnet-id - String - （过滤条件）Subnet实例名称。</li>
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>cidr-block - String - （过滤条件）子网网段，形如: 192.168.1.0 。</li>
<li>is-default - Boolean - （过滤条件）是否是默认子网。</li>
<li>is-remote-vpc-snat - Boolean - （过滤条件）是否为VPC SNAT地址池子网。</li>
<li>subnet-name - String - （过滤条件）子网名称。</li>
<li>zone - String - （过滤条件）可用区。</li>
<li>tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。</li>
<li>cdc-id - String - 是否必填：否 - （过滤条件）按照cdc信息进行过滤。过滤出来制定cdc下的子网。</li>
<li>is-cdc-subnet - String - 是否必填：否 - （过滤条件）按照是否是cdc子网进行过滤。取值：“0”-非cdc子网，“1”--cdc子网</li>
<li>ipv6-cidr-block - String - （过滤条件）IPv6子网网段，形如: 2402:4e00:1717:8700::/64 。</li>
<li>isp-type  - String - （过滤条件）运营商类型，形如: BGP 。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
}

/**
 * CreateSubnet请求参数结构体
 */
export interface CreateSubnetRequest {
  /**
   * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * 子网名称，最大长度不能超过60个字节。
   */
  SubnetName: string
  /**
   * 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠。
   */
  CidrBlock: string
  /**
   * 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。
   */
  Zone: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
  /**
   * CDC实例ID。
   */
  CdcId?: string
}

/**
 * IP地址模板集合
 */
export interface AddressTemplateGroup {
  /**
   * IP地址模板集合名称。
   */
  AddressTemplateGroupName?: string
  /**
   * IP地址模板集合实例ID，例如：ipmg-dih8xdbq。
   */
  AddressTemplateGroupId?: string
  /**
   * IP地址模板ID。
   */
  AddressTemplateIdSet?: Array<string>
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 最后更新时间。
   */
  UpdatedTime?: string
  /**
   * IP地址模板实例。
   */
  AddressTemplateSet?: Array<AddressTemplateItem>
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
}

/**
 * DownloadCustomerGatewayConfiguration请求参数结构体
 */
export interface DownloadCustomerGatewayConfigurationRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * VPN通道实例ID。形如：vpnx-f49l6u0z。
   */
  VpnConnectionId: string
  /**
   * 对端网关厂商信息对象，可通过[DescribeCustomerGatewayVendors](https://cloud.tencent.com/document/api/215/17517)获取。
   */
  CustomerGatewayVendor: CustomerGatewayVendor
  /**
   * 通道接入设备物理接口名称。
   */
  InterfaceName: string
}

/**
 * DeleteBandwidthPackage请求参数结构体
 */
export interface DeleteBandwidthPackageRequest {
  /**
   * 待删除带宽包唯一ID
   */
  BandwidthPackageId: string
}

/**
 * 描述 HAVIP 信息
 */
export interface HaVip {
  /**
   * `HAVIP`的`ID`，是`HAVIP`的唯一标识。
   */
  HaVipId?: string
  /**
   * `HAVIP`名称。
   */
  HaVipName?: string
  /**
   * 虚拟IP地址。
   */
  Vip?: string
  /**
   * `HAVIP`所在私有网络`ID`。
   */
  VpcId?: string
  /**
   * `HAVIP`所在子网`ID`。
   */
  SubnetId?: string
  /**
   * `HAVIP`关联弹性网卡`ID`。
   */
  NetworkInterfaceId?: string
  /**
   * 被绑定的实例`ID`。
   */
  InstanceId?: string
  /**
   * 绑定`EIP`。
   */
  AddressIp?: string
  /**
   * 状态：
<li>`AVAILABLE`：运行中</li>
<li>`UNBIND`：未绑定</li>
   */
  State?: string
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 使用havip的业务标识。
   */
  Business?: string
  /**
   * `HAVIP`的飘移范围。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HaVipAssociationSet?: Array<HaVipAssociation>
  /**
   * 是否开启`HAVIP`的飘移范围校验。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckAssociate?: boolean
  /**
   * CDC实例ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
  /**
   * HAVIP 刷新时间。该参数只作为出参数。以下场景会触发 FlushTime 被刷新：1）子机发出免费 ARP 触发 HAVIP 漂移；2）手动HAVIP解绑网卡; 没有更新时默认值：0000-00-00 00:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlushedTime?: string
  /**
   * 标签键值对。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSet?: Array<Tag>
}

/**
 * DeleteTemplateMember请求参数结构体
 */
export interface DeleteTemplateMemberRequest {
  /**
   * 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。
   */
  TemplateId: string
  /**
   * 需要添加的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致。
   */
  TemplateMember: Array<MemberInfo>
}

/**
 * ModifyAddressesBandwidth返回参数结构体
 */
export interface ModifyAddressesBandwidthResponse {
  /**
   * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 本地网关信息
 */
export interface LocalGateway {
  /**
   * CDC实例ID
   */
  CdcId?: string
  /**
   * VPC实例ID
   */
  VpcId?: string
  /**
   * 本地网关实例ID（计划弃用）
   */
  UniqLocalGwId?: string
  /**
   * 本地网关名称
   */
  LocalGatewayName?: string
  /**
   * 本地网关IP地址
   */
  LocalGwIp?: string
  /**
   * 本地网关创建时间
   */
  CreateTime?: string
  /**
   * 标签键值对。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSet?: Array<Tag>
  /**
   * 本地网关实例ID（计划起用）
   */
  LocalGatewayId?: string
}

/**
 * RejectAttachCcnInstances返回参数结构体
 */
export interface RejectAttachCcnInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCcnRouteTableInputPolicys请求参数结构体
 */
export interface DescribeCcnRouteTableInputPolicysRequest {
  /**
   * 云联网ID。
   */
  CcnId: string
  /**
   * 云联网路由表ID。
   */
  RouteTableId: string
  /**
   * 路由接收策略版本号。
   */
  PolicyVersion?: number
}

/**
 * ModifySnapshotPolicies返回参数结构体
 */
export interface ModifySnapshotPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceRenewAddresses返回参数结构体
 */
export interface InquiryPriceRenewAddressesResponse {
  /**
   * 弹性公网IP续费价格。
   */
  Price?: InternetPrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceCcnRouteTableInputPolicys返回参数结构体
 */
export interface ReplaceCcnRouteTableInputPolicysResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCdcNetPlanes返回参数结构体
 */
export interface DeleteCdcNetPlanesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewAddresses返回参数结构体
 */
export interface RenewAddressesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpnGatewaySslServer请求参数结构体
 */
export interface ModifyVpnGatewaySslServerRequest {
  /**
   * SSL-VPN SERVER 实例ID
   */
  SslVpnServerId: string
  /**
   * SSL-VPN SERVER NAME
   */
  SslVpnServerName?: string
  /**
   * 本端地址
   */
  LocalAddress?: Array<string>
  /**
   * 客户端地址
   */
  RemoteAddress?: string
  /**
   * SSL VPN服务端监听协议。当前仅支持 UDP。默认UDP
   */
  SslVpnProtocol?: string
  /**
   * SSL VPN服务端监听协议端口。
   */
  SslVpnPort?: number
  /**
   * 加密算法。可选 'AES-128-CBC','AES-192-CBC', 'AES-256-CBC', 默认AES-128-CBC。
   */
  EncryptAlgorithm?: string
  /**
   * 认证算法。可选 'SHA1'，默认SHA1。
   */
  IntegrityAlgorithm?: string
  /**
   * 是否支持压缩。当前不支持压缩。默认False。
   */
  Compress?: boolean
  /**
   * 是否开启SSO认证。默认为False。该功能当前需要申请开白使用。
   */
  SsoEnabled?: boolean
  /**
   * SAML-DATA
   */
  SamlData?: string
}

/**
 * ccn实例信息（不带地域属性）
 */
export interface CcnInstanceWithoutRegion {
  /**
   * 云联网支持的实例类型：
`VPC`
`DIRECTCONNECT`
`BMVPC` 
`EDGE`
`EDGE_TUNNEL`
`EDGE_VPNGW`
`VPNGW`
   */
  InstanceType: string
  /**
   * 实例ID。
   */
  InstanceId: string
}

/**
 * DescribeCcnRoutes请求参数结构体
 */
export interface DescribeCcnRoutesRequest {
  /**
   * CCN实例ID，形如：`ccn-gree226l`。
   */
  CcnId: string
  /**
   * CCN路由策略唯一ID，形如：`ccnr-f49l6u0z`。
   */
  RouteIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定RouteIds和Filters。
<li>route-id - String -（过滤条件）路由策略ID。</li>
<li>cidr-block - String -（过滤条件）目的端。</li>
<li>instance-type - String -（过滤条件）下一跳类型。</li>
<li>instance-region - String -（过滤条件）下一跳所属地域。</li>
<li>instance-id - String -（过滤条件）下一跳实例ID。</li>
<li>route-table-id - String -（过滤条件）路由表ID列表，形如ccntr-1234edfr，可以根据路由表ID 过滤。</li>
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
}

/**
 * GenerateVpnConnectionDefaultHealthCheckIp返回参数结构体
 */
export interface GenerateVpnConnectionDefaultHealthCheckIpResponse {
  /**
   * VPN通道健康检查本端ip
   */
  HealthCheckLocalIp?: string
  /**
   * VPN通道健康检查对端ip
   */
  HealthCheckRemoteIp?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckTrafficMirror返回参数结构体
 */
export interface CheckTrafficMirrorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndAttachNetworkInterface请求参数结构体
 */
export interface CreateAndAttachNetworkInterfaceRequest {
  /**
   * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * 弹性网卡名称，最大长度不能超过60个字节。
   */
  NetworkInterfaceName: string
  /**
   * 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。
   */
  SubnetId: string
  /**
   * 云服务器实例ID。
   */
  InstanceId: string
  /**
   * 指定的内网IP信息，单次最多指定10个。
   */
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>
  /**
   * 新申请的内网IP地址个数，内网IP地址个数总和不能超过配额数。
   */
  SecondaryPrivateIpAddressCount?: number
  /**
   * IP服务质量等级，和SecondaryPrivateIpAddressCount配合使用，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。
   */
  QosLevel?: string
  /**
   * 指定绑定的安全组，例如：['sg-1dd51d']。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 弹性网卡描述，可任意命名，但不得超过60个字符。
   */
  NetworkInterfaceDescription?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
  /**
   * 绑定类型：0 标准型 1 扩展型。
   */
  AttachType?: number
  /**
   * 是否创建RDMA弹性网卡，true:创建rdma弹性网卡，false:普通弹性网卡。不填默认为false。
   */
  IsRdma?: boolean
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * DeleteVpcEndPoint返回参数结构体
 */
export interface DeleteVpcEndPointResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDhcpIp返回参数结构体
 */
export interface DeleteDhcpIpResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SSL-VPN-SERVER 出参
 */
export interface SslVpnSever {
  /**
   * VPC实例ID.
   */
  VpcId?: string
  /**
   * SSL-VPN-SERVER 实例ID。
   */
  SslVpnServerId?: string
  /**
   * VPN 实例ID。
   */
  VpnGatewayId?: string
  /**
   * SSL-VPN-SERVER name。
   */
  SslVpnServerName?: string
  /**
   * 本端地址段。
   */
  LocalAddress?: Array<string>
  /**
   * 客户端地址段。
   */
  RemoteAddress?: string
  /**
   * 客户端最大连接数。
   */
  MaxConnection?: number
  /**
   * SSL-VPN 网关公网IP。
   */
  WanIp?: string
  /**
   * SSL VPN服务端监听协议
   */
  SslVpnProtocol?: string
  /**
   * SSL VPN服务端监听协议端口
   */
  SslVpnPort?: number
  /**
   * 加密算法。
   */
  EncryptAlgorithm?: string
  /**
   * 认证算法。
   */
  IntegrityAlgorithm?: string
  /**
   * 是否支持压缩。
   */
  Compress?: number
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * SSL-VPN-SERVER 创建状态。
0 创建中
1 创建出错
2 更新中
3 更新出错
4 销毁中
5 销毁出错
6 已连通
7 未知
   */
  State?: number
  /**
   * 是否开启SSO认证。1：开启  0： 不开启
   */
  SsoEnabled?: number
  /**
   * EIAM应用ID
   */
  EiamApplicationId?: string
  /**
   * 是否开启策略控制。0：不开启 1： 开启
   */
  AccessPolicyEnabled?: number
  /**
   * 策略信息
   */
  AccessPolicy?: Array<AccessPolicy>
  /**
   * CAM服务提供商Name
   */
  SpName?: string
}

/**
 * 云联网路由传播策略之路由条件
 */
export interface CcnRouteBroadcastPolicyRouteCondition {
  /**
   * 条件类型
   */
  Name: string
  /**
   * 条件值列表
   */
  Values: Array<string>
  /**
   * 匹配模式，`1` 精确匹配，`0` 模糊匹配
   */
  MatchPattern: number
}

/**
 * DeleteCdcNetPlanes请求参数结构体
 */
export type DeleteCdcNetPlanesRequest = null

/**
 * DeleteNetDetect返回参数结构体
 */
export interface DeleteNetDetectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AllocateAddresses请求参数结构体
 */
export interface AllocateAddressesRequest {
  /**
   * EIP数量。默认值：1。
   */
  AddressCount?: number
  /**
   * EIP线路类型。默认值：BGP。
<ul style="margin:0"><li>已开通静态单线IP白名单的用户，可选值：<ul><li>CMCC：中国移动</li>
<li>CTCC：中国电信</li>
<li>CUCC：中国联通</li></ul>注意：仅部分地域支持静态单线IP。</li></ul>
   */
  InternetServiceProvider?: string
  /**
   * EIP计费方式。
<ul style="margin:0"><li>已开通标准账户类型白名单的用户，可选值：<ul><li>BANDWIDTH_PACKAGE：[共享带宽包](https://cloud.tencent.com/document/product/684/15255)付费（需额外开通共享带宽包白名单）</li>
<li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费</li>
<li>BANDWIDTH_PREPAID_BY_MONTH：包月按带宽预付费</li>
<li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费</li></ul>默认值：TRAFFIC_POSTPAID_BY_HOUR。</li>
<li>未开通标准账户类型白名单的用户，EIP计费方式与其绑定的实例的计费方式一致，无需传递此参数。</li></ul>
   */
  InternetChargeType?: string
  /**
   * EIP出带宽上限，单位：Mbps。
<ul style="margin:0"><li>已开通标准账户类型白名单的用户，可选值范围取决于EIP计费方式：<ul><li>BANDWIDTH_PACKAGE：1 Mbps 至 2000 Mbps</li>
<li>BANDWIDTH_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps</li>
<li>BANDWIDTH_PREPAID_BY_MONTH：1 Mbps 至 200 Mbps</li>
<li>TRAFFIC_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps</li></ul>默认值：1 Mbps。</li>
<li>未开通标准账户类型白名单的用户，EIP出带宽上限取决于与其绑定的实例的公网出带宽上限，无需传递此参数。</li></ul>
   */
  InternetMaxBandwidthOut?: number
  /**
   * 包月按带宽预付费EIP的计费参数。EIP为包月按带宽预付费时，该参数必传，其余场景不需传递
   */
  AddressChargePrepaid?: AddressChargePrepaid
  /**
   * EIP类型。默认值：EIP。
<ul style="margin:0"><li>已开通Anycast公网加速白名单的用户，可选值：<ul><li>AnycastEIP：加速IP，可参见 [Anycast 公网加速](https://cloud.tencent.com/document/product/644)</li></ul>注意：仅部分地域支持加速IP。</li></ul>
<ul style="margin:0"><li>已开通精品IP白名单的用户，可选值：<ul><li>HighQualityEIP：精品IP</li></ul>注意：仅部分地域支持精品IP。</li></ul>
<ul style="margin:0"><li>已开高防IP白名单的用户，可选值：<ul><li>AntiDDoSEIP：高防IP</li></ul>注意：仅部分地域支持高防IP。</li></ul>
   */
  AddressType?: string
  /**
   * Anycast发布域。
<ul style="margin:0"><li>已开通Anycast公网加速白名单的用户，可选值：<ul><li>ANYCAST_ZONE_GLOBAL：全球发布域（需要额外开通Anycast全球加速白名单）</li><li>ANYCAST_ZONE_OVERSEAS：境外发布域</li><li><b>[已废弃]</b> ANYCAST_ZONE_A：发布域A（已更新为全球发布域）</li><li><b>[已废弃]</b> ANYCAST_ZONE_B：发布域B（已更新为全球发布域）</li></ul>默认值：ANYCAST_ZONE_OVERSEAS。</li></ul>
   */
  AnycastZone?: string
  /**
   * 指定IP地址申请EIP，每个账户每个月只有三次配额
   */
  VipCluster?: Array<string>
  /**
   * <b>[已废弃]</b> AnycastEIP不再区分是否负载均衡。原参数说明如下：
AnycastEIP是否用于绑定负载均衡。
<ul style="margin:0"><li>已开通Anycast公网加速白名单的用户，可选值：<ul><li>TRUE：AnycastEIP可绑定对象为负载均衡</li>
<li>FALSE：AnycastEIP可绑定对象为云服务器、NAT网关、高可用虚拟IP等</li></ul>默认值：FALSE。</li></ul>
   */
  ApplicableForCLB?: boolean
  /**
   * 需要关联的标签列表。
   */
  Tags?: Array<Tag>
  /**
   * BGP带宽包唯一ID参数。设定该参数且InternetChargeType为BANDWIDTH_PACKAGE，则表示创建的EIP加入该BGP带宽包并采用带宽包计费
   */
  BandwidthPackageId?: string
  /**
   * EIP名称，用于申请EIP时用户自定义该EIP的个性化名称，默认值：未命名
   */
  AddressName?: string
  /**
   * CDC唯一ID
   */
  DedicatedClusterId?: string
  /**
   * 是否使用独占资源池，默认值：True
- True：表示使用独占资源池
- False：表示使用共享资源池

说明：如需使用独占资源池，请 提交工单(https://console.cloud.tencent.com/workorder/category) 咨询，具体费用请咨询商务经理。
   */
  IsDedicatedAddressPool?: boolean
  /**
   * 网络出口，当前仅支持精品BGP、静态单线，这2种IP 地址类型的指定出口传入，默认值：center_egress1，其它可选值：center_egress2、center_egress3
   */
  Egress?: string
  /**
   * 高防包ID， 申请高防IP时，该字段必传。
   */
  AntiDDoSPackageId?: string
  /**
   * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
   */
  ClientToken?: string
}

/**
 * DeleteAssistantCidr返回参数结构体
 */
export interface DeleteAssistantCidrResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDhcpIps返回参数结构体
 */
export interface DescribeDhcpIpsResponse {
  /**
   * 实例详细信息列表。
   */
  DhcpIpSet?: Array<DhcpIp>
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
 * UnassignIpv6CidrBlock请求参数结构体
 */
export interface UnassignIpv6CidrBlockRequest {
  /**
   * `VPC`实例`ID`，形如：`vpc-f49l6u0z`。
   */
  VpcId: string
  /**
   * `IPv6`网段。形如：`3402:4e00:20:1000::/56`。
   */
  Ipv6CidrBlock?: string
}

/**
 * 私网网关转发规则匹配ACL
 */
export interface TranslationAclRule {
  /**
   * ACL协议类型，可选值:"ALL","TCP","UDP"
   */
  Protocol: string
  /**
   * 源端口。
   */
  SourcePort: string
  /**
   * 源地址。支持`ip`或`cidr`格式"xxx.xxx.xxx.000/xx"
   */
  SourceCidr: string
  /**
   * 目的端口。
   */
  DestinationPort: string
  /**
   * 目的地址。
   */
  DestinationCidr: string
  /**
   * ACL规则`ID`。
   */
  AclRuleId?: number
  /**
   * 是否匹配。
   */
  Action?: number
  /**
   * ACL规则描述
   */
  Description?: string
}

/**
 * ResetHighPriorityRoutes请求参数结构体
 */
export interface ResetHighPriorityRoutesRequest {
  /**
   * 高优路由表唯一 ID。
   */
  HighPriorityRouteTableId: string
  /**
   * 高优路由表名称。
   */
  Name: string
  /**
   * 高优路由表条目信息。
   */
  HighPriorityRoutes: Array<HighPriorityRoute>
}

/**
 * ModifyAssistantCidr请求参数结构体
 */
export interface ModifyAssistantCidrRequest {
  /**
   * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`。
   */
  VpcId: string
  /**
   * 待添加的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]，入参NewCidrBlocks和OldCidrBlocks至少需要其一。
   */
  NewCidrBlocks?: Array<string>
  /**
   * 待删除的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]，入参NewCidrBlocks和OldCidrBlocks至少需要其一。
   */
  OldCidrBlocks?: Array<string>
}

/**
 * CreateReserveIpAddresses返回参数结构体
 */
export interface CreateReserveIpAddressesResponse {
  /**
   * 内网保留 IP返回信息
   */
  ReserveIpAddressSet?: Array<ReserveIpAddressInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckTrafficMirror请求参数结构体
 */
export interface CheckTrafficMirrorRequest {
  /**
   * 流量镜像所属的vpc
   */
  VpcId: string
  /**
   * 流量镜像的实例id
   */
  TrafficMirrorId?: string
  /**
   * 流量镜像的采集端IP列表
   */
  CollectorSources?: Array<string>
  /**
   * 流量镜像的接收端的子网
   */
  SubnetId?: string
  /**
   * 流量镜像采集端的
   */
  CollectorTarget?: Array<TrafficMirrorTarget>
}

/**
 * AssociateDhcpIpWithAddressIp返回参数结构体
 */
export interface AssociateDhcpIpWithAddressIpResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTrafficMirrorAttribute返回参数结构体
 */
export interface ModifyTrafficMirrorAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyGatewayFlowQos返回参数结构体
 */
export interface ModifyGatewayFlowQosResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNetworkInterfaceQos返回参数结构体
 */
export interface ModifyNetworkInterfaceQosResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySecurityGroupAttribute返回参数结构体
 */
export interface ModifySecurityGroupAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateDirectConnectGatewayNatGateway请求参数结构体
 */
export interface AssociateDirectConnectGatewayNatGatewayRequest {
  /**
   * VPC实例ID。形如：vpc-xxx。
   */
  VpcId: string
  /**
   * NAT网关ID。形如：nat-xxx
   */
  NatGatewayId: string
  /**
   * 专线网关ID。形如：dcg-xxx
   */
  DirectConnectGatewayId: string
}

/**
 * DeletePrivateNatGatewayDestinationIpPortTranslationNatRule请求参数结构体
 */
export interface DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 目的端口转换规则数组。
   */
  LocalDestinationIpPortTranslationNatRules: Array<LocalDestinationIpPortTranslationNatRule>
}

/**
 * CreatePrivateNatGatewayTranslationNatRule返回参数结构体
 */
export interface CreatePrivateNatGatewayTranslationNatRuleResponse {
  /**
   * 私网网关唯一`ID`。
   */
  NatGatewayId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAddressAttribute返回参数结构体
 */
export interface ModifyAddressAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachClassicLinkVpc请求参数结构体
 */
export interface AttachClassicLinkVpcRequest {
  /**
   * VPC实例ID
   */
  VpcId: string
  /**
   * CVM实例ID
   */
  InstanceIds: Array<string>
}

/**
 * 网关流量监控明细
 */
export interface GatewayFlowMonitorDetail {
  /**
   * 来源`IP`。
   */
  PrivateIpAddress?: string
  /**
   * 入包量。
   */
  InPkg?: number
  /**
   * 出包量。
   */
  OutPkg?: number
  /**
   * 入流量，单位：`Byte`。
   */
  InTraffic?: number
  /**
   * 出流量，单位：`Byte`。
   */
  OutTraffic?: number
  /**
   * 并发连接数。仅标准型nat支持此参数。
   */
  ConcurrentConnectionCount?: number
  /**
   * 新建连接速率。仅标准型nat支持此参数。
   */
  NewConnectionRate?: number
}

/**
 * CreateVpnGatewaySslClient请求参数结构体
 */
export interface CreateVpnGatewaySslClientRequest {
  /**
   * SSL-VPN-SERVER 实例ID。
   */
  SslVpnServerId: string
  /**
   * SSL-VPN-CLIENT实例Name。不可和SslVpnClientNames同时使用。
   */
  SslVpnClientName?: string
  /**
   * SSL-VPN-CLIENT实例Name数字。批量创建时使用。不可和SslVpnClientName同时使用。
   */
  SslVpnClientNames?: Array<string>
  /**
   * 指定绑定的标签列表
   */
  Tags?: Array<Tag>
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
 * CreateCdcNetPlanes返回参数结构体
 */
export interface CreateCdcNetPlanesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpnGatewaySslServers返回参数结构体
 */
export interface DescribeVpnGatewaySslServersResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * SSL-VPN-SERVER 实例详细信息列表。
   */
  SslVpnSeverSet?: Array<SslVpnSever>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAddressesRenewFlag返回参数结构体
 */
export interface ModifyAddressesRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子网对象
 */
export interface Subnet {
  /**
   * `VPC`实例`ID`。
   */
  VpcId?: string
  /**
   * 子网实例`ID`，例如：subnet-bthucmmy。
   */
  SubnetId?: string
  /**
   * 子网名称。
   */
  SubnetName?: string
  /**
   * 子网的 `IPv4` `CIDR`。
   */
  CidrBlock?: string
  /**
   * 是否默认子网。
   */
  IsDefault?: boolean
  /**
   * 是否开启广播。
   */
  EnableBroadcast?: boolean
  /**
   * 可用区。
   */
  Zone?: string
  /**
   * 路由表实例ID，例如：rtb-l2h8d7c2。
   */
  RouteTableId?: string
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 可用`IPv4`数。
   */
  AvailableIpAddressCount?: number
  /**
   * 子网的 `IPv6` `CIDR`。
   */
  Ipv6CidrBlock?: string
  /**
   * 关联`ACL`ID
   */
  NetworkAclId?: string
  /**
   * 是否为 `SNAT` 地址池子网。
   */
  IsRemoteVpcSnat?: boolean
  /**
   * 子网`IPv4`总数。
   */
  TotalIpAddressCount?: number
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
  /**
   * CDC实例ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
  /**
   * 是否是CDC所属子网。0:否 1:是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCdcSubnet?: number
}

/**
 * DeleteNatGatewayDestinationIpPortTranslationNatRule返回参数结构体
 */
export interface DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse {
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
 * ReplaceRouteTableAssociation返回参数结构体
 */
export interface ReplaceRouteTableAssociationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachCcnInstances请求参数结构体
 */
export interface AttachCcnInstancesRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * 关联网络实例列表
   */
  Instances: Array<CcnInstance>
  /**
   * CCN所属UIN（根账号），默认当前账号所属UIN
   */
  CcnUin?: string
}

/**
 * ModifyBandwidthPackageBandwidth返回参数结构体
 */
export interface ModifyBandwidthPackageBandwidthResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDirectConnectGatewayCcnRoutes请求参数结构体
 */
export interface DescribeDirectConnectGatewayCcnRoutesRequest {
  /**
   * 专线网关ID，形如：`dcg-prpqlmg1`。
   */
  DirectConnectGatewayId: string
  /**
   * 云联网路由学习类型，可选值：
<li>`BGP` - 自动学习。</li>
<li>`STATIC` - 静态，即用户配置，默认值。</li>
   */
  CcnRouteType?: string
  /**
   * 地址类型，支持：IPv4、IPv6。默认IPv4。
   */
  AddressType?: string
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 返回数量。
   */
  Limit?: number
}

/**
 * 云联网（CCN）关联实例（Instance）对象。
 */
export interface CcnInstance {
  /**
   * 关联实例ID。
   */
  InstanceId: string
  /**
   * 关联实例ID所属大区，例如：ap-guangzhou。
   */
  InstanceRegion: string
  /**
   * 关联实例类型，可选值：
<li>`VPC`：私有网络</li>
<li>`DIRECTCONNECT`：专线网关</li>
<li>`BMVPC`：黑石私有网络</li>
<li>`VPNGW`：VPNGW类型</li>
   */
  InstanceType: string
  /**
   * 备注
   */
  Description?: string
  /**
   * 实例关联的路由表ID。
   */
  RouteTableId?: string
  /**
   * 实例付费方式
   */
  OrderType?: string
}

/**
 * DescribeLocalGateway返回参数结构体
 */
export interface DescribeLocalGatewayResponse {
  /**
   * 本地网关信息集合。
   */
  LocalGatewaySet?: Array<LocalGateway>
  /**
   * 本地网关总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单项计费价格信息
 */
export interface ItemPrice {
  /**
   * 按量计费后付费单价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice?: number
  /**
   * 按量计费后付费计价单元，可取值范围： HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）： GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeUnit?: string
  /**
   * 预付费商品的原价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalPrice?: number
  /**
   * 预付费商品的折扣价，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiscountPrice?: number
}

/**
 * DeleteNatGateway请求参数结构体
 */
export interface DeleteNatGatewayRequest {
  /**
   * NAT网关的ID，形如：`nat-df45454`。
   */
  NatGatewayId: string
}

/**
 * ModifyBandwidthPackageBandwidth请求参数结构体
 */
export interface ModifyBandwidthPackageBandwidthRequest {
  /**
   * 带宽包限速大小。单位：Mbps。
   */
  InternetMaxBandwidth: number
  /**
   * 共享带宽包ID
   */
  BandwidthPackageId: string
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
 * CreatePrivateNatGatewayTranslationAclRule返回参数结构体
 */
export interface CreatePrivateNatGatewayTranslationAclRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrivateNatGatewayTranslationNatRule返回参数结构体
 */
export interface DeletePrivateNatGatewayTranslationNatRuleResponse {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BgpConfig
 */
export interface BgpConfig {
  /**
   * BGP隧道网段。
   */
  TunnelCidr: string
  /**
   * 云端BGP地址。必须从BGP隧道网段内分配。
   */
  LocalBgpIp: string
  /**
   * 用户端BGP地址。必须从BGP隧道网段内分配。
   */
  RemoteBgpIp: string
}

/**
 * 云联网路由传播策略列表
 */
export interface CcnRouteTableBroadcastPolicys {
  /**
   * 策略列表
   */
  Policys?: Array<CcnRouteTableBroadcastPolicy>
  /**
   * 版本号
   */
  PolicyVersion?: number
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * AssignIpv6SubnetCidrBlock返回参数结构体
 */
export interface AssignIpv6SubnetCidrBlockResponse {
  /**
   * 分配 `IPv6` 子网段列表。
   */
  Ipv6SubnetCidrBlockSet?: Array<Ipv6SubnetCidrBlock>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVpcEndPoint返回参数结构体
 */
export interface CreateVpcEndPointResponse {
  /**
   * 终端节点对象详细信息。
   */
  EndPoint?: EndPoint
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReserveIpAddresses请求参数结构体
 */
export interface CreateReserveIpAddressesRequest {
  /**
   * VPC唯一 ID。
   */
  VpcId: string
  /**
   * 指定IP申请的内网保留IP地址。
   */
  IpAddresses?: Array<string>
  /**
   * 不指定IP地址，指定个数自动分配保留内网IP。
   */
  IpAddressCount?: number
  /**
   * 子网唯一 ID。
   */
  SubnetId?: string
  /**
   * 内网保留 IP名称。
   */
  Name?: string
  /**
   * 内网保留 IP描述。
   */
  Description?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * DescribeCcnRegionBandwidthLimits返回参数结构体
 */
export interface DescribeCcnRegionBandwidthLimitsResponse {
  /**
   * 云联网（CCN）各地域出带宽上限
   */
  CcnRegionBandwidthLimitSet?: Array<CcnRegionBandwidthLimit>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTemplateMember请求参数结构体
 */
export interface ModifyTemplateMemberRequest {
  /**
   * 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。
   */
  TemplateId: string
  /**
   * 需要修改的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致，修改顺序与TemplateMember参数顺序一一对应，入参长度需要与TemplateMember参数保持一致。
   */
  OriginalTemplateMember: Array<MemberInfo>
  /**
   * 新的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致，修改顺序与OriginalTemplateMember参数顺序一一对应，入参长度需要与OriginalTemplateMember参数保持一致。
   */
  TemplateMember: Array<MemberInfo>
}

/**
 * DisableCcnRoutes请求参数结构体
 */
export interface DisableCcnRoutesRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * CCN路由策略唯一ID。形如：ccnr-f49l6u0z。可通过DescribeCcnRoutes获取。
   */
  RouteIds: Array<string>
}

/**
 * EnableSnapshotPolicies请求参数结构体
 */
export interface EnableSnapshotPoliciesRequest {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyIds: Array<string>
}

/**
 * ModifyVpnGatewaySslClientCert返回参数结构体
 */
export interface ModifyVpnGatewaySslClientCertResponse {
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
 * DescribeAddresses返回参数结构体
 */
export interface DescribeAddressesResponse {
  /**
   * 符合条件的 EIP 数量。
   */
  TotalCount?: number
  /**
   * EIP 详细信息列表。
   */
  AddressSet?: Array<Address>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网关流控带宽信息
 */
export interface GatewayQos {
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * 云服务器内网IP。
   */
  IpAddress?: string
  /**
   * 流控带宽值。
   */
  Bandwidth?: number
  /**
   * 创建时间。
   */
  CreateTime?: string
}

/**
 * DescribePrivateNatGatewayTranslationNatRules请求参数结构体
 */
export interface DescribePrivateNatGatewayTranslationNatRulesRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId?: string
  /**
   * 过滤条件。
<li>OriginalIp - String - 转换规则源`IP`。</li>
<li>TranslationIp - String - 转换`IP`。</li>
<li>VpcId - String - 私网网关所在`VpcId`。</li>
<li>Description - String - 转换规则描述</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量。默认值为0。
   */
  Offset?: number
  /**
   * 返回数量。默认值为20。
   */
  Limit?: number
}

/**
 * DeleteCcnRouteTables返回参数结构体
 */
export interface DeleteCcnRouteTablesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCcnRegionBandwidthLimits请求参数结构体
 */
export interface GetCcnRegionBandwidthLimitsRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * 过滤条件。
<li>sregion - String - （过滤条件）源地域，形如：ap-guangzhou。</li>
<li>dregion - String - （过滤条件）目的地域，形如：ap-shanghai-bm</li>
   */
  Filters?: Array<Filter>
  /**
   * 排序条件，目前支持带宽（`BandwidthLimit`）和过期时间（`ExpireTime`），默认按 `ExpireTime` 排序。
   */
  SortedBy?: string
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 返回数量。
   */
  Limit?: number
  /**
   * 排序方式，'ASC':升序,'DESC':降序。默认按'ASC'排序。
   */
  OrderBy?: string
}

/**
 * ModifyIpv6AddressesAttribute请求参数结构体
 */
export interface ModifyIpv6AddressesAttributeRequest {
  /**
   * 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。
   */
  NetworkInterfaceId: string
  /**
   * 指定的内网IPv6地址信息。
   */
  Ipv6Addresses: Array<Ipv6Address>
}

/**
 * DescribeCustomerGatewayVendors请求参数结构体
 */
export type DescribeCustomerGatewayVendorsRequest = null

/**
 * 网络ACL五元组
 */
export interface NetworkAclQuintupleEntries {
  /**
   * 网络ACL五元组入站规则。
   */
  Ingress?: Array<NetworkAclQuintupleEntry>
  /**
   * 网络ACL五元组出站规则
   */
  Egress?: Array<NetworkAclQuintupleEntry>
}

/**
 * 云联网限速实例锁对象，该对象特用于运营端使用，用于封禁实例流量。
 */
export interface CcnFlowLock {
  /**
   * 带宽所属的云联网ID。
   */
  CcnId: string
  /**
   * 实例所属用户主账号ID。
   */
  UserAccountID: string
  /**
   * 带宽实例的唯一ID。作为`UnlockCcnBandwidths`接口和`LockCcnBandwidths`接口的入参时，该字段必传。
   */
  RegionFlowControlId?: string
}

/**
 * DetachSnapshotInstances请求参数结构体
 */
export interface DetachSnapshotInstancesRequest {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId: string
  /**
   * 实例信息。
   */
  Instances: Array<SnapshotInstance>
}

/**
 * ReplaceHighPriorityRouteTableAssociation返回参数结构体
 */
export interface ReplaceHighPriorityRouteTableAssociationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLocalGateway请求参数结构体
 */
export interface DeleteLocalGatewayRequest {
  /**
   * 本地网关实例ID。
   */
  LocalGatewayId: string
  /**
   * CDC实例ID。
   */
  CdcId: string
  /**
   * VPC实例ID。
   */
  VpcId?: string
}

/**
 * ResetVpnGatewayInternetMaxBandwidth返回参数结构体
 */
export interface ResetVpnGatewayInternetMaxBandwidthResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LockCcnBandwidths请求参数结构体
 */
export interface LockCcnBandwidthsRequest {
  /**
   * 带宽实例的唯一ID数组。
   */
  Instances: Array<CcnFlowLock>
}

/**
 * 用于描述弹性公网IP的费用对象
 */
export interface AddressChargePrepaid {
  /**
   * 购买实例的时长，单位是月。可支持时长：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36
   */
  Period: number
  /**
   * 自动续费标志。0表示手动续费，1表示自动续费，2表示到期不续费。默认缺省为0即手动续费
   */
  AutoRenewFlag?: number
}

/**
 * DescribeCrossBorderFlowMonitor请求参数结构体
 */
export interface DescribeCrossBorderFlowMonitorRequest {
  /**
   * 源地域。
   */
  SourceRegion: string
  /**
   * 目的地域。
   */
  DestinationRegion: string
  /**
   * 云联网ID。
   */
  CcnId: string
  /**
   * 云联网所属账号。
   */
  CcnUin: string
  /**
   * 时间粒度。单位为:秒，如60为60s的时间粒度
   */
  Period: number
  /**
   * 开始时间。
   */
  StartTime: string
  /**
   * 结束时间。
   */
  EndTime: string
}

/**
 * 本端目的IP端口转换复杂结构
 */
export interface DestinationIpPortTranslationNatRuleDiff {
  /**
   * 协议
   */
  Protocol: string
  /**
   * 源端口
   */
  OriginalPort: number
  /**
   * 源IP
   */
  OriginalIp: string
  /**
   * 目的端口
   */
  TranslationPort: number
  /**
   * 目的IP
   */
  TranslationIp: string
  /**
   * 旧协议。
   */
  OldProtocol: string
  /**
   * 旧源端口
   */
  OldOriginalPort: number
  /**
   * 旧源IP
   */
  OldOriginalIp: string
  /**
   * 旧目的端口
   */
  OldTranslationPort: number
  /**
   * 旧目的IP
   */
  OldTranslationIp: string
  /**
   * 描述
   */
  Description?: string
}

/**
 * 私网网关对象
 */
export interface PrivateNatGateway {
  /**
   * 私网网关`ID`。
   */
  NatGatewayId?: string
  /**
   * 私网网关名称。
   */
  NatGatewayName?: string
  /**
   * 私网网关关联`VPC`实例`ID`。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 私网网关当前状态。
   */
  Status?: string
  /**
   * 私网网关跨域标志。
   */
  CrossDomain?: boolean
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 标签键值对。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSet?: Array<Tag>
  /**
   * 专线网关唯一`ID`
注意：此字段可能返回 null，表示取不到有效值。
   */
  DirectConnectGatewayIds?: Array<string>
  /**
   * 私网网关类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatType?: string
  /**
   * 私网NAT跨域信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrossDomainInfo?: PrivateNatCrossDomainInfo
  /**
   * 是否VPC型私网网关
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcType?: boolean
  /**
   * 跨域私网NAT关联的云联网ID	
注意：此字段可能返回 null，表示取不到有效值。
   */
  CcnId?: string
}

/**
 * DescribeVpnGatewayRoutes返回参数结构体
 */
export interface DescribeVpnGatewayRoutesResponse {
  /**
   * VPN网关目的路由。
   */
  Routes?: Array<VpnGatewayRoute>
  /**
   * 路由条数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCcnRouteTables返回参数结构体
 */
export interface ModifyCcnRouteTablesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetworkAcls返回参数结构体
 */
export interface DescribeNetworkAclsResponse {
  /**
   * 实例详细信息列表。
   */
  NetworkAclSet?: Array<NetworkAcl>
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
 * DescribeNatGatewayDirectConnectGatewayRoute请求参数结构体
 */
export interface DescribeNatGatewayDirectConnectGatewayRouteRequest {
  /**
   * nat的唯一标识
   */
  NatGatewayId: string
  /**
   * vpc的唯一标识
   */
  VpcId: string
  /**
   * 0到200之间
   */
  Limit?: number
  /**
   * 大于0
   */
  Offset?: number
}

/**
 * DeleteFlowLog返回参数结构体
 */
export interface DeleteFlowLogResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建路由添加的指向此通道的路由
 */
export interface CreateVpnConnRoute {
  /**
   * 目的端IDC网段
   */
  DestinationCidrBlock: string
  /**
   * 优先级；可选值0，100。
   */
  Priority?: number
}

/**
 * CreatePrivateNatGateway请求参数结构体
 */
export interface CreatePrivateNatGatewayRequest {
  /**
   * 私网网关名称
   */
  NatGatewayName: string
  /**
   * 私有网络实例ID。当创建VPC类型私网NAT网关或者专线网关类型私网NAT网关时，此参数必填。
   */
  VpcId?: string
  /**
   * 跨域参数。仅当取值为True时，才会支持跨域绑定VPC。
   */
  CrossDomain?: boolean
  /**
   * 实例标签
   */
  Tags?: Array<Tag>
  /**
   * VPC类型私网NAT网关。仅当取值为True时，才会创建VPC类型私网NAT网关。
   */
  VpcType?: boolean
  /**
   * 云联网类型私网NAT网关需要绑定的云联网实例ID。
   */
  CcnId?: string
}

/**
 * CreateCcnRouteTables请求参数结构体
 */
export interface CreateCcnRouteTablesRequest {
  /**
   * 需要创建的路由表列表。
   */
  RouteTable: Array<CcnBatchRouteTable>
}

/**
 * CreateDefaultVpc返回参数结构体
 */
export interface CreateDefaultVpcResponse {
  /**
   * 默认VPC和子网ID。
   */
  Vpc?: DefaultVpcSubnet
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateNatGatewayTranslationNatRules返回参数结构体
 */
export interface DescribePrivateNatGatewayTranslationNatRulesResponse {
  /**
   * 对象数目。
   */
  TotalCount: number
  /**
   * 转换规则详情数组。
   */
  TranslationNatRuleSet: Array<TranslationNatRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内网IP信息
 */
export interface PrivateIpAddressSpecification {
  /**
   * 内网IP地址。
   */
  PrivateIpAddress: string
  /**
   * 是否是主IP。
   */
  Primary?: boolean
  /**
   * 公网IP地址。
   */
  PublicIpAddress?: string
  /**
   * EIP实例ID，例如：eip-11112222。
   */
  AddressId?: string
  /**
   * 内网IP描述信息。
   */
  Description?: string
  /**
   * 公网IP是否被封堵。
   */
  IsWanIpBlocked?: boolean
  /**
   * IP状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
   */
  State?: string
  /**
   * IP服务质量等级，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。
   */
  QosLevel?: string
}

/**
 * ALG协议类型
 */
export interface AlgType {
  /**
   * Ftp协议Alg功能是否开启
   */
  Ftp?: boolean
  /**
   * Sip协议Alg功能是否开启
   */
  Sip?: boolean
}

/**
 * NAT网关的端口转发规则
 */
export interface DestinationIpPortTranslationNatRule {
  /**
   * 网络协议，可选值：`TCP`、`UDP`。
   */
  IpProtocol: string
  /**
   * 弹性IP。
   */
  PublicIpAddress: string
  /**
   * 公网端口。
   */
  PublicPort: number
  /**
   * 内网地址。
   */
  PrivateIpAddress: string
  /**
   * 内网端口。
   */
  PrivatePort: number
  /**
   * NAT网关转发规则描述。
   */
  Description?: string
}

/**
 * DescribeUsedIpAddress请求参数结构体
 */
export interface DescribeUsedIpAddressRequest {
  /**
   * VPC实例ID。
   */
  VpcId: string
  /**
   * 子网实例ID。
   */
  SubnetId?: string
  /**
   * 查询是否占用的ip列表，ip需要在vpc或子网内。最多允许一次查询100个IP。
   */
  IpAddresses?: Array<string>
  /**
   * 过滤条件，不支持同时指定IpAddresses和Filters参数。 支持的过滤条件如下： <li>ip-addresses：IP地址。</li> <li>resource-id：资源ID。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * DeleteRouteTable返回参数结构体
 */
export interface DeleteRouteTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcInstances返回参数结构体
 */
export interface DescribeVpcInstancesResponse {
  /**
   * 云主机实例列表。
   */
  InstanceSet?: Array<CvmInstance>
  /**
   * 满足条件的云主机实例个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 账户属性对象
 */
export interface AccountAttribute {
  /**
   * 属性名
   */
  AttributeName?: string
  /**
   * 属性值
   */
  AttributeValues?: Array<string>
}

/**
 * AllocateIPv6Addresses返回参数结构体
 */
export interface AllocateIPv6AddressesResponse {
  /**
   * 申请到的弹性公网 IPv6 地址的唯一 ID 列表。
   */
  AddressSet?: Array<string>
  /**
   * 异步任务TaskId，可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDirectConnectGatewayCcnRoutes请求参数结构体
 */
export interface DeleteDirectConnectGatewayCcnRoutesRequest {
  /**
   * 专线网关ID，形如：dcg-prpqlmg1
   */
  DirectConnectGatewayId: string
  /**
   * 路由ID。形如：ccnr-f49l6u0z。
   */
  RouteIds: Array<string>
  /**
   * 地址类型，支持：IPv4、IPv6。默认IPv4。
   */
  AddressType?: string
}

/**
 * ModifyNatGatewaySourceIpTranslationNatRule返回参数结构体
 */
export interface ModifyNatGatewaySourceIpTranslationNatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDefaultVpc请求参数结构体
 */
export interface CreateDefaultVpcRequest {
  /**
   * 子网所在的可用区，该参数可通过[DescribeZones](https://cloud.tencent.com/document/product/213/15707)接口获取，例如ap-guangzhou-1，不指定时将随机选择可用区。
   */
  Zone?: string
  /**
   * 是否强制返回默认VPC。
   */
  Force?: boolean
}

/**
 * CreateNatGatewayDestinationIpPortTranslationNatRule请求参数结构体
 */
export interface CreateNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /**
   * NAT网关的ID，形如：`nat-df45454`。
   */
  NatGatewayId: string
  /**
   * NAT网关的端口转换规则。
   */
  DestinationIpPortTranslationNatRules: Array<DestinationIpPortTranslationNatRule>
}

/**
 * CreateFlowLog请求参数结构体
 */
export interface CreateFlowLogRequest {
  /**
   * 流日志实例名字。
   */
  FlowLogName: string
  /**
   * 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE|CCN|NAT|DCG。
   */
  ResourceType: string
  /**
   * 资源唯一ID。
   */
  ResourceId: string
  /**
   * 流日志采集类型，ACCEPT|REJECT|ALL。
   */
  TrafficType: string
  /**
   * 私用网络ID或者统一ID，建议使用统一ID，当ResourceType为CCN时不填，其他类型必填。
   */
  VpcId?: string
  /**
   * 流日志实例描述。
   */
  FlowLogDescription?: string
  /**
   * 流日志存储ID。
   */
  CloudLogId?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
  /**
   * 消费端类型：cls、ckafka。默认值cls。
   */
  StorageType?: string
  /**
   * 流日志消费端信息，当消费端类型为ckafka时，必填。
   */
  FlowLogStorage?: FlowLogStorage
  /**
   * 流日志存储ID对应的地域，不传递默认为本地域。
   */
  CloudLogRegion?: string
}

/**
 * 共享流量包用量明细
 */
export interface UsedDetail {
  /**
   * 流量包唯一ID
   */
  TrafficPackageId?: string
  /**
   * 流量包名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrafficPackageName?: string
  /**
   * 流量包总量
   */
  TotalAmount?: TrafficFlow
  /**
   * 本次抵扣
   */
  Deduction?: TrafficFlow
  /**
   * 本次抵扣后剩余量
   */
  RemainingAmount?: TrafficFlow
  /**
   * 抵扣时间
   */
  Time?: string
  /**
   * 资源类型。可能的值: CVM, LB, NAT, HAVIP, EIP
   */
  ResourceType?: string
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 资源名称
   */
  ResourceName?: string
  /**
   * 流量包到期时间
   */
  Deadline?: string
}

/**
 * 标签描述信息
 */
export interface Tags {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * InquirePriceCreateDirectConnectGateway请求参数结构体
 */
export type InquirePriceCreateDirectConnectGatewayRequest = null

/**
 * AttachNetworkInterface返回参数结构体
 */
export interface AttachNetworkInterfaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateNatGatewayAddress请求参数结构体
 */
export interface DisassociateNatGatewayAddressRequest {
  /**
   * NAT网关的ID，形如：`nat-df45454`。
   */
  NatGatewayId: string
  /**
   * 待解绑NAT网关的弹性IP数组。
   */
  PublicIpAddresses: Array<string>
}

/**
 * CreateHighPriorityRoutes返回参数结构体
 */
export interface CreateHighPriorityRoutesResponse {
  /**
   * 高优路由表信息。
   */
  HighPriorityRouteSet?: Array<HighPriorityRoute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSnapshotPolicies请求参数结构体
 */
export interface CreateSnapshotPoliciesRequest {
  /**
   * 快照策略详情。
   */
  SnapshotPolicies: Array<SnapshotPolicy>
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * DescribeRouteTables请求参数结构体
 */
export interface DescribeRouteTablesRequest {
  /**
   * 过滤条件，参数不支持同时指定RouteTableIds和Filters。
<li>route-table-id - String - （过滤条件）路由表实例ID。</li>
<li>route-table-name - String - （过滤条件）路由表名称。</li>
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>association.main - String - （过滤条件）是否主路由表。</li>
<li>tag-key - String -是否必填：否 - （过滤条件）按照标签键进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。</li>
<li>next-hop-type - String - 是否必填：否 - （过滤条件）按下一跳类型进行过滤。使用next-hop-type进行过滤时，必须同时携带route-table-id与vpc-id。
目前我们支持的类型有：
LOCAL: 本地路由
CVM：公网网关类型的云服务器；
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
HAVIP：高可用虚拟IP；
NAT：NAT网关; 
NORMAL_CVM：普通云服务器；
EIP：云服务器的公网IP；
CCN：云联网；
LOCAL_GATEWAY：本地网关。
</li>
   */
  Filters?: Array<Filter>
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableIds?: Array<string>
  /**
   * 偏移量。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
  /**
   * 是否需要获取路由策略信息，默认获取，当控制台不需要拉取路由策略信息时，改为False。
   */
  NeedRouterInfo?: boolean
}

/**
 * DescribeVpcPeeringConnections返回参数结构体
 */
export interface DescribeVpcPeeringConnectionsResponse {
  /**
   * 满足条件的对等连接实例个数。
   */
  TotalCount?: number
  /**
   * 对等连接实例列表。
   */
  PeerConnectionSet?: Array<PeerConnection>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHaVip返回参数结构体
 */
export interface CreateHaVipResponse {
  /**
   * `HAVIP`对象。
   */
  HaVip?: HaVip
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupReferences请求参数结构体
 */
export interface DescribeSecurityGroupReferencesRequest {
  /**
   * 安全组实例ID数组。格式如：['sg-12345678']。
   */
  SecurityGroupIds: Array<string>
}

/**
 * DescribeTemplateLimits返回参数结构体
 */
export interface DescribeTemplateLimitsResponse {
  /**
   * 参数模板配额对象。
   */
  TemplateLimit?: TemplateLimit
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckDefaultSubnet返回参数结构体
 */
export interface CheckDefaultSubnetResponse {
  /**
   * 检查结果。true为可以创建默认子网，false为不可以创建默认子网。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcPrivateIpAddresses返回参数结构体
 */
export interface DescribeVpcPrivateIpAddressesResponse {
  /**
   * 内网`IP`地址信息列表。
   */
  VpcPrivateIpAddressSet?: Array<VpcPrivateIpAddress>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyReserveIpAddress请求参数结构体
 */
export interface ModifyReserveIpAddressRequest {
  /**
   * VPC唯一 ID。
   */
  VpcId: string
  /**
   * 内网保留IP唯一ID。
   */
  ReserveIpId: string
  /**
   * 内网保留 IP名称。
   */
  Name?: string
  /**
   * 内网保留 IP描述。
   */
  Description?: string
}

/**
 * DisableRoutes请求参数结构体
 */
export interface DisableRoutesRequest {
  /**
   * 路由表唯一ID。
   */
  RouteTableId: string
  /**
   * 路由策略ID。不能和RouteItemIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。
   */
  RouteIds?: Array<number | bigint>
  /**
   * 路由策略唯一ID。不能和RouteIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。
   */
  RouteItemIds?: Array<string>
}

/**
 * DisassociateDirectConnectGatewayNatGateway请求参数结构体
 */
export interface DisassociateDirectConnectGatewayNatGatewayRequest {
  /**
   * VPC实例ID。形如：vpc-xxx。
   */
  VpcId: string
  /**
   * NAT网关ID。形如：nat-xxx
   */
  NatGatewayId: string
  /**
   * 专线网关ID。形如：dcg-xxx
   */
  DirectConnectGatewayId: string
}

/**
 * DescribeRouteTableAssociatedInstances请求参数结构体
 */
export interface DescribeRouteTableAssociatedInstancesRequest {
  /**
   * 过滤条件：
<li>ccn-id - String -（过滤条件）CCN实例ID。</li>
<li>ccn-route-table-id - String -（过滤条件）路由表ID。</li>
<li>instance-type - String -（过滤条件）实例类型：
私有网络: `VPC`
专线网关: `DIRECTCONNECT`
黑石私有网络: `BMVPC`
EDGE设备: `EDGE`
EDGE隧道: `EDGE_TUNNEL`
EDGE网关: `EDGE_VPNGW`
VPN网关：`VPNGW`</li>
<li>instance-id- String -（过滤条件）实例ID。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 一次查询最大返回的数量。
   */
  Limit?: number
}

/**
 * ReleaseIPv6Addresses请求参数结构体
 */
export interface ReleaseIPv6AddressesRequest {
  /**
   * IPv6地址唯一ID。
   */
  IPv6AddressIds: Array<string>
}

/**
 * DisassociateIPv6Address返回参数结构体
 */
export interface DisassociateIPv6AddressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddressTemplateGroups返回参数结构体
 */
export interface DescribeAddressTemplateGroupsResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * IP地址模板。
   */
  AddressTemplateGroupSet?: Array<AddressTemplateGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetCcnRegionBandwidthLimits请求参数结构体
 */
export interface SetCcnRegionBandwidthLimitsRequest {
  /**
   * CCN实例ID，形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * 云联网（CCN）各地域出带宽上限。
   */
  CcnRegionBandwidthLimits: Array<CcnRegionBandwidthLimit>
  /**
   * 是否恢复云联网地域出口/地域间带宽限速为默认值（1Gbps）。false表示不恢复；true表示恢复。恢复默认值后，限速实例将不在控制台展示。该参数默认为 false，不恢复。
   */
  SetDefaultLimitFlag?: boolean
}

/**
 * ModifyPrivateNatGatewayTranslationAclRule返回参数结构体
 */
export interface ModifyPrivateNatGatewayTranslationAclRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDirectConnectGatewayCcnRoutes请求参数结构体
 */
export interface CreateDirectConnectGatewayCcnRoutesRequest {
  /**
   * 专线网关ID，形如：dcg-prpqlmg1
   */
  DirectConnectGatewayId: string
  /**
   * 需要连通的IDC网段列表
   */
  Routes: Array<DirectConnectGatewayCcnRoute>
}

/**
 * ModifyGatewayFlowQos请求参数结构体
 */
export interface ModifyGatewayFlowQosRequest {
  /**
   * 网关实例ID，目前我们支持的网关实例类型有，
专线网关实例ID，形如，`dcg-ltjahce6`；
Nat网关实例ID，形如，`nat-ltjahce6`；
VPN网关实例ID，形如，`vpn-ltjahce6`。
   */
  GatewayId: string
  /**
   * 流控带宽值。取值大于0，表示限流到指定的Mbps；取值等于0，表示完全限流；取值为-1，不限流。
   */
  Bandwidth: number
  /**
   * 限流的云服务器内网IP。
   */
  IpAddresses: Array<string>
}

/**
 * StopTrafficMirror请求参数结构体
 */
export interface StopTrafficMirrorRequest {
  /**
   * 流量镜像实例ID
   */
  TrafficMirrorId: string
}

/**
 * ModifyHighPriorityRouteTableAttribute返回参数结构体
 */
export interface ModifyHighPriorityRouteTableAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDirectConnectGatewayCcnRoutes返回参数结构体
 */
export interface CreateDirectConnectGatewayCcnRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRouteTable请求参数结构体
 */
export interface CreateRouteTableRequest {
  /**
   * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * 路由表名称，最大长度不能超过60个字节。
   */
  RouteTableName: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
}

/**
 * StartTrafficMirror请求参数结构体
 */
export interface StartTrafficMirrorRequest {
  /**
   * 流量镜像实例ID
   */
  TrafficMirrorId: string
}

/**
 * MigrateNetworkInterface请求参数结构体
 */
export interface MigrateNetworkInterfaceRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string
  /**
   * 弹性网卡当前绑定的CVM实例ID。形如：ins-r8hr2upy。
   */
  SourceInstanceId: string
  /**
   * 待迁移的目的CVM实例ID。
   */
  DestinationInstanceId: string
  /**
   * 网卡绑定类型：0 标准型 1 扩展型。
   */
  AttachType?: number
}

/**
 * DescribeCustomerGateways请求参数结构体
 */
export interface DescribeCustomerGatewaysRequest {
  /**
   * 对端网关ID，例如：cgw-2wqq41m9。每次请求的实例的上限为100。参数不支持同时指定CustomerGatewayIds和Filters。
   */
  CustomerGatewayIds?: Array<string>
  /**
   * 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定CustomerGatewayIds和Filters。
<li>customer-gateway-id - String - （过滤条件）用户网关唯一ID形如：`cgw-mgp33pll`。</li>
<li>customer-gateway-name - String - （过滤条件）用户网关名称形如：`test-cgw`。</li>
<li>ip-address - String - （过滤条件）公网地址形如：`58.211.1.12`。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * ModifyReserveIpAddress返回参数结构体
 */
export interface ModifyReserveIpAddressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述网络中心每个产品的配额信息
 */
export interface ProductQuota {
  /**
   * 产品配额ID
   */
  QuotaId?: string
  /**
   * 产品配额名称
   */
  QuotaName?: string
  /**
   * 产品当前配额
   */
  QuotaCurrent?: number
  /**
   * 产品配额上限
   */
  QuotaLimit?: number
  /**
   * 产品配额是否有地域属性
   */
  QuotaRegion?: boolean
}

/**
 * DisableRoutes返回参数结构体
 */
export interface DisableRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySnapshotPolicies请求参数结构体
 */
export interface ModifySnapshotPoliciesRequest {
  /**
   * 快照策略修改信息。
   */
  SnapshotPoliciesInfo: Array<BatchModifySnapshotPolicy>
}

/**
 * ModifyAddressAttribute请求参数结构体
 */
export interface ModifyAddressAttributeRequest {
  /**
   * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。
   */
  AddressId: string
  /**
   * 修改后的 EIP 名称。长度上限为128个字符。
   */
  AddressName?: string
  /**
   * 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。
   */
  EipDirectConnection?: string
}

/**
 * 描述 DhcpIp 信息
 */
export interface DhcpIp {
  /**
   * `DhcpIp`的`ID`，是`DhcpIp`的唯一标识。
   */
  DhcpIpId?: string
  /**
   * `DhcpIp`所在私有网络`ID`。
   */
  VpcId?: string
  /**
   * `DhcpIp`所在子网`ID`。
   */
  SubnetId?: string
  /**
   * `DhcpIp`的名称。
   */
  DhcpIpName?: string
  /**
   * IP地址。
   */
  PrivateIpAddress?: string
  /**
   * 绑定`EIP`。
   */
  AddressIp?: string
  /**
   * `DhcpIp`关联弹性网卡`ID`。
   */
  NetworkInterfaceId?: string
  /**
   * 被绑定的实例`ID`。
   */
  InstanceId?: string
  /**
   * 状态：
<li>`AVAILABLE`：运行中</li>
<li>`UNBIND`：未绑定</li>
   */
  State?: string
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
}

/**
 * DeleteAssistantCidr请求参数结构体
 */
export interface DeleteAssistantCidrRequest {
  /**
   * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`。
   */
  VpcId: string
  /**
   * CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。
   */
  CidrBlocks: Array<string>
}

/**
 * DisableVpnGatewaySslClientCert请求参数结构体
 */
export interface DisableVpnGatewaySslClientCertRequest {
  /**
   * SSL-VPN-CLIENT 实例ID。不可和SslVpnClientIds同时使用。
   */
  SslVpnClientId?: string
  /**
   * SSL-VPN-CLIENT 实例ID列表。批量禁用时使用。不可和SslVpnClientId同时使用。
   */
  SslVpnClientIds?: Array<string>
}

/**
 * CreateRouteTable返回参数结构体
 */
export interface CreateRouteTableResponse {
  /**
   * 路由表对象。
   */
  RouteTable?: RouteTable
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子网对象
 */
export interface SubnetInput {
  /**
   * 子网的`CIDR`。
   */
  CidrBlock: string
  /**
   * 子网名称。
   */
  SubnetName: string
  /**
   * 可用区。形如：`ap-guangzhou-2`。
   */
  Zone: string
  /**
   * 指定关联路由表，形如：`rtb-3ryrwzuu`。
   */
  RouteTableId?: string
}

/**
 * DescribeNatGatewayDirectConnectGatewayRoute返回参数结构体
 */
export interface DescribeNatGatewayDirectConnectGatewayRouteResponse {
  /**
   * 路由数据
   */
  NatDirectConnectGatewayRouteSet: Array<NatDirectConnectGatewayRoute>
  /**
   * 路由总数
   */
  Total: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableVpcEndPointConnect返回参数结构体
 */
export interface EnableVpcEndPointConnectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNetDetect返回参数结构体
 */
export interface CreateNetDetectResponse {
  /**
   * 网络探测（NetDetect）对象。
   */
  NetDetect?: NetDetect
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceAllocateAddresses返回参数结构体
 */
export interface InquiryPriceAllocateAddressesResponse {
  /**
   * 弹性公网IP价格
   */
  Price?: InternetPrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCcn请求参数结构体
 */
export interface DeleteCcnRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
}

/**
 * 流量镜像接收流量信息，当接收目标为ENI和CLB时返回
 */
export interface TrafficMirrorTargetResourceInfo {
  /**
   * 接收目标的资源Id
   */
  TargetId: string
  /**
   * 接收目标的资源名称
   */
  TargetName: string
}

/**
 * ModifyLocalGateway返回参数结构体
 */
export interface ModifyLocalGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateNetworkInterfaceSecurityGroups返回参数结构体
 */
export interface AssociateNetworkInterfaceSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableFlowLogs请求参数结构体
 */
export interface EnableFlowLogsRequest {
  /**
   * 流日志Id。
   */
  FlowLogIds: Array<string>
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
  VpnGatewayName?: string
  /**
   * VPN网关计费模式，目前只支持预付费（即包年包月）到后付费（即按量计费）的转换。即参数只支持：POSTPAID_BY_HOUR。
   */
  InstanceChargeType?: string
  /**
   * BGP ASN。ASN取值范围为1- 4294967295，默认值64551，其中139341、45090和58835不可用。
   */
  BgpAsn?: number
  /**
   * 服务端最大连接数个数。
   */
  MaxConnection?: number
}

/**
 * CreateNatGateway请求参数结构体
 */
export interface CreateNatGatewayRequest {
  /**
   * NAT网关名称
   */
  NatGatewayName: string
  /**
   * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * NAT网关最大外网出带宽(单位：Mbps)，支持的参数值：20, 50, 100, 200, 500, 1000, 2000, 5000，默认: 100Mbps。  当以下NatProductVersion参数值为2即标准型时，此参数无需填写，默认为5000Mbps。
   */
  InternetMaxBandwidthOut?: number
  /**
   * NAT网关并发连接数上限，支持参数值：1000000、3000000、10000000，默认值为100000。  当以下NatProductVersion参数值为2即标准型时，此参数无需填写，默认为2000000。
   */
  MaxConcurrentConnection?: number
  /**
   * 新建弹性公网IP个数，系统会按您的要求创建对应数量的弹性公网IP，其中AddressCount和PublicAddresses两个参数至少填写一个。
   */
  AddressCount?: number
  /**
   * 绑定NAT网关的已有弹性公网IP数组，其中AddressCount和PublicAddresses两个参数至少填写一个。 示例值：["139.199.232.119"]
   */
  PublicIpAddresses?: Array<string>
  /**
   * 可用区，形如：`ap-guangzhou-1`。
   */
  Zone?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
  /**
   * NAT网关所属子网，已废弃
   * @deprecated
   */
  SubnetId?: string
  /**
   * 绑定NAT网关的弹性公网IP带宽值（单位：Mbps）。不填写此参数时：则该参数默认为弹性公网IP的带宽值，部分用户默认为该用户类型的弹性公网IP的带宽上限。
   */
  StockPublicIpAddressesBandwidthOut?: number
  /**
   * 需要申请公网IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。
   */
  PublicIpAddressesBandwidthOut?: number
  /**
   * 公网IP是否强制与NAT网关来自同可用区，true表示需要与NAT网关同可用区；false表示可与NAT网关不是同一个可用区。此参数只有当参数Zone存在时才能生效。
   */
  PublicIpFromSameZone?: boolean
  /**
   * NAT网关类型，1表示传统型NAT网关，2表示标准型NAT网关，默认值是1。
   */
  NatProductVersion?: number
}

/**
 * DeleteNetDetect请求参数结构体
 */
export interface DeleteNetDetectRequest {
  /**
   * 网络探测实例`ID`。形如：`netd-12345678`。
   */
  NetDetectId: string
}

/**
 * IPSec配置，腾讯云提供IPSec安全会话设置
 */
export interface IPSECOptionsSpecification {
  /**
   * 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC', 'SM4', 'NULL'， 默认为AES-CBC-128
   */
  EncryptAlgorithm?: string
  /**
   * 认证算法：可选值：'MD5', 'SHA1'，'SHA-256' 默认为
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  IntegrityAlgorith?: string
  /**
   * IPsec SA lifetime(s)：单位秒，取值范围：180-604800
   */
  IPSECSaLifetimeSeconds?: number
  /**
   * PFS：可选值：'NULL', 'DH-GROUP1', 'DH-GROUP2', 'DH-GROUP5', 'DH-GROUP14', 'DH-GROUP24'，默认为NULL
   */
  PfsDhGroup?: string
  /**
   * IPsec SA lifetime(KB)：单位KB，取值范围：2560-604800
   */
  IPSECSaLifetimeTraffic?: number
  /**
   * 认证算法：可选值：'MD5', 'SHA1'，'SHA-256' 默认为
   */
  IntegrityAlgorithm?: string
}

/**
 * UnassignIpv6Addresses请求参数结构体
 */
export interface UnassignIpv6AddressesRequest {
  /**
   * 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。
   */
  NetworkInterfaceId: string
  /**
   * 指定的`IPv6`地址列表，单次最多指定10个。
   */
  Ipv6Addresses: Array<Ipv6Address>
}

/**
 * ModifyPrivateNatGatewayTranslationAclRule请求参数结构体
 */
export interface ModifyPrivateNatGatewayTranslationAclRuleRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 转换规则目标，可选值"LOCAL"。
   */
  TranslationDirection: string
  /**
   * 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。
   */
  TranslationType: string
  /**
   * 转换`IP`,当转换规则类型为四层时为`IP`池
   */
  TranslationIp: string
  /**
   * 访问控制列表，需要附带AclRuleId参数。
   */
  TranslationAclRules: Array<TranslationAclRule>
  /**
   * 源`IP`,当转换规则类型为三层时有效
   */
  OriginalIp?: string
}

/**
 * CreateTrafficPackages请求参数结构体
 */
export interface CreateTrafficPackagesRequest {
  /**
   * 流量包规格。可选值:
<li>10: 10GB流量，有效期一个月</li>
<li>50: 50GB流量，有效期一个月</li>
<li>512: 512GB流量，有效期一个月</li>
<li>1024: 1TB流量，有效期一个月</li>
<li>5120: 5TB流量，有效期一个月</li>
<li>51200: 50TB流量，有效期一个月</li>
<li>60: 60GB流量，有效期半年</li>
<li>300: 300GB流量，有效期半年</li>
<li>600: 600GB流量，有效期半年</li>
<li>3072: 3TB流量，有效期半年</li>
<li>6144: 6TB流量，有效期半年</li>
<li>30720: 30TB流量，有效期半年</li>
<li>61440: 60TB流量，有效期半年</li>
<li>307200: 300TB流量，有效期半年</li>
   */
  TrafficAmount: number
  /**
   * 流量包数量，可选范围 1~20。
   */
  TrafficPackageCount?: number
}

/**
 * CreateAndAttachNetworkInterface返回参数结构体
 */
export interface CreateAndAttachNetworkInterfaceResponse {
  /**
   * 弹性网卡实例。
   */
  NetworkInterface?: NetworkInterface
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCdcNetPlaneAttribute返回参数结构体
 */
export interface ModifyCdcNetPlaneAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCcnAttribute请求参数结构体
 */
export interface ModifyCcnAttributeRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * CCN名称，最大长度不能超过60个字节，限制：CcnName和CcnDescription必须至少选择一个参数输入，否则报错。
   */
  CcnName?: string
  /**
   * CCN描述信息，最大长度不能超过100个字节，限制：CcnName和CcnDescription必须至少选择一个参数输入，否则报错。
   */
  CcnDescription?: string
  /**
   * 是否开启等价路由功能。`False` 不开启，`True` 开启。
   */
  RouteECMPFlag?: boolean
  /**
   * 是否开启路由重叠功能。`False` 不开启，`True` 开启。
   */
  RouteOverlapFlag?: boolean
}

/**
 * 私网网关Snat转发规则
 */
export interface TranslationNatRule {
  /**
   * 转换规则目标，可选值"LOCAL","PEER"。
   */
  TranslationDirection: string
  /**
   * 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。
   */
  TranslationType: string
  /**
   * 转换`IP`,当转换规则类型为四层时为`IP`池。
   */
  TranslationIp: string
  /**
   * 转换规则描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 源`IP`,当转换规则类型为三层时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginalIp?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
}

/**
 * 资源统计信息
 */
export interface ResourceStatistics {
  /**
   * Vpc实例ID，例如：vpc-f1xjkw1b。
   */
  VpcId?: string
  /**
   * 子网实例ID，例如：subnet-bthucmmy。
   */
  SubnetId?: string
  /**
   * 当前已使用的IP总数。
   */
  Ip?: number
  /**
   * 资源统计信息。
   */
  ResourceStatisticsItemSet?: Array<ResourceStatisticsItem>
}

/**
 * DeleteSecurityGroupPolicies返回参数结构体
 */
export interface DeleteSecurityGroupPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateDhcpIpWithAddressIp返回参数结构体
 */
export interface DisassociateDhcpIpWithAddressIpResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVpcEndPointService返回参数结构体
 */
export interface CreateVpcEndPointServiceResponse {
  /**
   * 终端节点服务对象详细信息。
   */
  EndPointService?: EndPointService
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNetworkAclAttribute请求参数结构体
 */
export interface ModifyNetworkAclAttributeRequest {
  /**
   * 网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 网络ACL名称，最大长度不能超过60个字节。
   */
  NetworkAclName: string
}

/**
 * CreatePrivateNatGatewayTranslationAclRule请求参数结构体
 */
export interface CreatePrivateNatGatewayTranslationAclRuleRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 转换规则目标，可选值"LOCAL"。
   */
  TranslationDirection: string
  /**
   * 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。
   */
  TranslationType: string
  /**
   * 转换`IP`,当转换规则类型为四层时为`IP`池。
   */
  TranslationIp: string
  /**
   * 访问控制列表。
   */
  TranslationAclRules: Array<TranslationAclRule>
  /**
   * 源`IP`,当转换规则类型为三层时有效。
   */
  OriginalIp?: string
}

/**
 * DeleteVpnGateway返回参数结构体
 */
export interface DeleteVpnGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时间备份策略详情
 */
export interface BackupPolicy {
  /**
   * 备份周期时间，取值为monday, tuesday, wednesday, thursday, friday, saturday, sunday。
   */
  BackupDay: string
  /**
   * 备份时间点，格式：HH:mm:ss。
   */
  BackupTime: string
}

/**
 * 快照策略
 */
export interface SnapshotPolicy {
  /**
   * 快照策略名称。
   */
  SnapshotPolicyName: string
  /**
   * 备份策略类型，operate-操作备份，time-定时备份。
   */
  BackupType: string
  /**
   * 保留时间，支持1～365天。
   */
  KeepTime: number
  /**
   * 是否创建新的cos桶，默认为False。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateNewCos: boolean
  /**
   * cos桶所在地域。
   */
  CosRegion: string
  /**
   * cos桶。
   */
  CosBucket: string
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId?: string
  /**
   * 时间备份策略。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupPolicies?: Array<BackupPolicy>
  /**
   * 启用状态，True-启用，False-停用，默认为True。
   */
  Enable?: boolean
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 标签键值对。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSet?: Array<Tag>
}

/**
 * InquiryPriceModifyAddressesBandwidth返回参数结构体
 */
export interface InquiryPriceModifyAddressesBandwidthResponse {
  /**
   * 弹性公网IP调整带宽询价结果
   */
  Price?: InternetPrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnassignPrivateIpAddresses返回参数结构体
 */
export interface UnassignPrivateIpAddressesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcPeeringConnections请求参数结构体
 */
export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * 对等连接唯一ID数组。
   */
  PeeringConnectionIds?: Array<string>
  /**
   * 过滤条件，参数不支持同时指定PeeringConnectionIds和Filters。
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>state String - （过滤条件）对等连接状态，可选值有：PENDING，投放中；ACTIVE，使用中；EXPIRED，已过期；REJECTED，拒绝。</li>
<li>peering-connection-name - String - （过滤条件）对等连接名称。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 请求对象个数。
   */
  Limit?: number
  /**
   * 排序字段，可选值有：CreatedTime，PeeringConnectionName。
   */
  OrderField?: string
  /**
   * 排序方式：DESC，降序；ASC，升序。
   */
  OrderDirection?: string
}

/**
 * 描述 EIP 信息
 */
export interface Address {
  /**
   * `EIP`的`ID`，是`EIP`的唯一标识。
   */
  AddressId?: string
  /**
   * `EIP`名称。
   */
  AddressName?: string
  /**
   * `EIP`状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)
   */
  AddressStatus?: string
  /**
   * 外网IP地址
   */
  AddressIp?: string
  /**
   * 绑定的资源实例`ID`。可能是一个`CVM`，`NAT`。
   */
  InstanceId?: string
  /**
   * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
   */
  CreatedTime?: string
  /**
   * 绑定的弹性网卡ID
   */
  NetworkInterfaceId?: string
  /**
   * 绑定的资源内网ip
   */
  PrivateAddressIp?: string
  /**
   * 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态
   */
  IsArrears?: boolean
  /**
   * 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态
   */
  IsBlocked?: boolean
  /**
   * eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式
   */
  IsEipDirectConnection?: boolean
  /**
   * EIP 资源类型，包括CalcIP、WanIP、EIP和AnycastEIP、高防EIP。其中：`CalcIP` 表示设备 IP，`WanIP` 表示普通公网 IP，`EIP` 表示弹性公网 IP，`AnycastEIP` 表示加速 EIP，`AntiDDoSEIP`表示高防EIP。
   */
  AddressType?: string
  /**
   * eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放
   */
  CascadeRelease?: boolean
  /**
   * EIP ALG开启的协议类型。
   */
  EipAlgType?: AlgType
  /**
   * 弹性公网IP的运营商信息，当前可能返回值包括"CMCC","CTCC","CUCC","BGP"
   */
  InternetServiceProvider?: string
  /**
   * 是否本地带宽EIP
   */
  LocalBgp?: boolean
  /**
   * 弹性公网IP的带宽值。注意，传统账户类型账户的弹性公网IP没有带宽属性，值为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bandwidth?: number
  /**
   * 弹性公网IP的网络计费模式。注意，传统账户类型账户的弹性公网IP没有网络计费模式属性，值为空。
注意：此字段可能返回 null，表示取不到有效值。
包括：
<li><strong>BANDWIDTH_PREPAID_BY_MONTH</strong></li>
<p style="padding-left: 30px;">表示包月带宽预付费。</p>
<li><strong>TRAFFIC_POSTPAID_BY_HOUR</strong></li>
<p style="padding-left: 30px;">表示按小时流量后付费。</p>
<li><strong>BANDWIDTH_POSTPAID_BY_HOUR</strong></li>
<p style="padding-left: 30px;">表示按小时带宽后付费。</p>
<li><strong>BANDWIDTH_PACKAGE</strong></li>
<p style="padding-left: 30px;">表示共享带宽包。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternetChargeType?: string
  /**
   * 弹性公网IP关联的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSet?: Array<Tag>
  /**
   * 到期时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeadlineDate?: string
  /**
   * EIP绑定的实例类型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * 静态单线IP网络出口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Egress?: string
  /**
   * 高防包ID,当EIP类型为高防EIP时，返回EIP绑定的高防包ID.
   */
  AntiDDoSPackageId?: string
  /**
   * 当前EIP是否自动续费，只有按月带宽预付费的EIP才会显示该字段，具体值示例如下:
<li>NOTIFY_AND_MANUAL_RENEW:正常续费</li><li>NOTIFY_AND_AUTO_RENEW:自动续费</li><li>DISABLE_NOTIFY_AND_MANUAL_RENEW:到期不续费 </li>

   */
  RenewFlag?: string
  /**
   * 当前公网IP所关联的带宽包ID，如果该公网IP未使用带宽包计费，则返回为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  BandwidthPackageId?: string
  /**
   * 传统弹性公网IPv6所属vpc唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnVpcId?: string
  /**
   * CDC唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DedicatedClusterId?: string
}

/**
 * VPN网关对象。
 */
export interface VpnGateway {
  /**
   * 网关实例ID。
   */
  VpnGatewayId?: string
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * 网关实例名称。
   */
  VpnGatewayName?: string
  /**
   * 网关实例类型：'IPSEC', 'SSL','CCN','SSL_CCN'。
   */
  Type?: string
  /**
   * 网关实例状态， 'PENDING'：生产中，'PENDING_ERROR'：生产失败，'DELETING'：删除中，'DELETING_ERROR'：删除失败，'AVAILABLE'：运行中。
   */
  State?: string
  /**
   * 网关公网IP。
   */
  PublicIpAddress?: string
  /**
   * 网关续费类型：'NOTIFY_AND_MANUAL_RENEW'：手动续费，'NOTIFY_AND_AUTO_RENEW'：自动续费，'NOT_NOTIFY_AND_NOT_RENEW'：到期不续费。
   */
  RenewFlag?: string
  /**
   * 网关付费类型：POSTPAID_BY_HOUR：按量计费，PREPAID：包年包月预付费。
   */
  InstanceChargeType?: string
  /**
   * 网关出带宽。
   */
  InternetMaxBandwidthOut?: number
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 预付费网关过期时间。
   */
  ExpiredTime?: string
  /**
   * 公网IP是否被封堵。
   */
  IsAddressBlocked?: boolean
  /**
   * 计费模式变更，PREPAID_TO_POSTPAID：包年包月预付费到期转按小时后付费。
   */
  NewPurchasePlan?: string
  /**
   * 网关计费状态，PROTECTIVELY_ISOLATED：被安全隔离的实例，NORMAL：正常。
   */
  RestrictState?: string
  /**
   * 可用区，如：ap-guangzhou-2。
   */
  Zone?: string
  /**
   * 网关带宽配额信息。
   */
  VpnGatewayQuotaSet?: Array<VpnGatewayQuota>
  /**
   * 网关实例版本信息。
   */
  Version?: string
  /**
   * Type值为CCN时，该值表示云联网实例ID。
   */
  NetworkInstanceId?: string
  /**
   * CDC 实例ID。
   */
  CdcId?: string
  /**
   * SSL-VPN 客户端连接数。
   */
  MaxConnection?: number
  /**
   * Bgp ASN
   */
  BgpAsn?: number
}

/**
 * ModifyAddressesBandwidth请求参数结构体
 */
export interface ModifyAddressesBandwidthRequest {
  /**
   * EIP唯一标识ID列表，形如'eip-xxxx'
   */
  AddressIds: Array<string>
  /**
   * 调整带宽目标值
   */
  InternetMaxBandwidthOut: number
  /**
   * 包月带宽起始时间(已废弃，输入无效)
   */
  StartTime?: string
  /**
   * 包月带宽结束时间(已废弃，输入无效)
   */
  EndTime?: string
}

/**
 * VPN网关目的路由
 */
export interface VpnGatewayRoute {
  /**
   * 目的端IDC网段。
   */
  DestinationCidrBlock: string
  /**
   * 下一跳类型（关联实例类型）可选值："VPNCONN"（VPN通道）， "CCN"（CCN实例）。
   */
  InstanceType: string
  /**
   * 下一跳实例ID。
   */
  InstanceId: string
  /**
   * 优先级，可选值：0，100。
   */
  Priority: number
  /**
   * 启用状态，可选值："ENABLE"（启用），"DISABLE"  (禁用)。
   */
  Status: string
  /**
   * 路由条目ID。
   */
  RouteId?: string
  /**
   * 路由类型，可选值："VPC"（VPC路由），"CCN"（云联网传播路由），"Static"（静态路由），"BGP"（BGP路由）。
   */
  Type?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
}

/**
 * EnableVpcEndPointConnect请求参数结构体
 */
export interface EnableVpcEndPointConnectRequest {
  /**
   * 终端节点服务ID。
   */
  EndPointServiceId: string
  /**
   * 终端节点ID。
   */
  EndPointId: Array<string>
  /**
   * 是否接受终端节点连接请求。
<li> true：自动接受。</li> <li> false：不自动接受。</li>
   */
  AcceptFlag: boolean
}

/**
 * EnableGatewayFlowMonitor返回参数结构体
 */
export interface EnableGatewayFlowMonitorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrivateNatGatewayDestinationIpPortTranslationNatRule返回参数结构体
 */
export interface ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述带宽包资源信息的结构
 */
export interface Resource {
  /**
   * 带宽包资源类型，包括'Address'和'LoadBalance'
   */
  ResourceType: string
  /**
   * 带宽包资源Id，形如'eip-xxxx', 'lb-xxxx'
   */
  ResourceId: string
  /**
   * 带宽包资源Ip
   */
  AddressIp: string
}

/**
 * 高优路由表信息
 */
export interface HighPriorityRouteTable {
  /**
   * 高优路由表唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HighPriorityRouteTableId?: string
  /**
   * VPC实例ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 高优路由表名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 高优路由表关联的子网列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetSet?: Array<string>
  /**
   * 高优路由表条目信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  HighPriorityRouteSet?: Array<HighPriorityRoute>
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
}

/**
 * DescribePrivateNatGatewayDestinationIpPortTranslationNatRules返回参数结构体
 */
export interface DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesResponse {
  /**
   * 总规则数目。
   */
  TotalCount: number
  /**
   * 目的端口转换规则数组。
   */
  LocalDestinationIpPortTranslationNatRuleSet: Array<PrivateNatDestinationIpPortTranslationNatRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBandwidthPackageBandwidthRange请求参数结构体
 */
export interface DescribeBandwidthPackageBandwidthRangeRequest {
  /**
   * 带宽包资源ID列表，单次查询上限20。
   */
  BandwidthPackageIds?: Array<string>
}

/**
 * DescribeRouteTables返回参数结构体
 */
export interface DescribeRouteTablesResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 路由表对象。
   */
  RouteTableSet?: Array<RouteTable>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDhcpIp请求参数结构体
 */
export interface DeleteDhcpIpRequest {
  /**
   * `DhcpIp`的`ID`，是`DhcpIp`的唯一标识。
   */
  DhcpIpId: string
}

/**
 * AllocateAddresses返回参数结构体
 */
export interface AllocateAddressesResponse {
  /**
   * 申请到的 EIP 的唯一 ID 列表。
   */
  AddressSet?: Array<string>
  /**
   * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCdcUsedIdcVlan请求参数结构体
 */
export type DescribeCdcUsedIdcVlanRequest = null

/**
 * 描述带宽包信息的结构
 */
export interface BandwidthPackage {
  /**
   * 带宽包唯一标识Id
   */
  BandwidthPackageId?: string
  /**
   * 带宽包类型，包括'BGP','SINGLEISP','ANYCAST','SINGLEISP_CMCC','SINGLEISP_CTCC','SINGLEISP_CUCC'
   */
  NetworkType?: string
  /**
   * 带宽包计费类型，包括:<li>'TOP5_POSTPAID_BY_MONTH':按月后付费TOP5计费</li><li> 'PERCENT95_POSTPAID_BY_MONTH':按月后付费月95计费</li><li>'ENHANCED95_POSTPAID_BY_MONTH':按月后付费增强型95计费</li><li>'FIXED_PREPAID_BY_MONTH':包月预付费计费</li><li>‘PEAK_BANDWIDTH_POSTPAID_BY_DAY’: 后付费日结按带宽计费</li>

   */
  ChargeType?: string
  /**
   * 带宽包名称
   */
  BandwidthPackageName?: string
  /**
   * 带宽包创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
   */
  CreatedTime?: string
  /**
   * 带宽包状态，包括'CREATING','CREATED','DELETING','DELETED'
   */
  Status?: string
  /**
   * 带宽包资源信息
   */
  ResourceSet?: Array<Resource>
  /**
   * 带宽包限速大小。单位：Mbps，-1表示不限速。
   */
  Bandwidth?: number
  /**
   * 网络出口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Egress?: string
  /**
   * 带宽包到期时间，只有预付费会返回，按量计费返回为null
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deadline?: string
}

/**
 * 云联网路由表信息
 */
export interface CcnBatchRouteTable {
  /**
   * 云联网ID。
   */
  CcnId: string
  /**
   * 云联网路由表名称。
   */
  Name: string
  /**
   * 云联网路由表描述。
   */
  Description?: string
}

/**
 * ModifyVpcAttribute请求参数结构体
 */
export interface ModifyVpcAttributeRequest {
  /**
   * VPC实例ID。形如：vpc-f49l6u0z。
   */
  VpcId: string
  /**
   * 私有网络名称，可任意命名，但不得超过60个字符。
   */
  VpcName?: string
  /**
   * 是否开启组播。true: 开启, false: 关闭。
   */
  EnableMulticast?: string
  /**
   * DNS地址，最多支持4个，第1个默认为主，其余为备。
   */
  DnsServers?: Array<string>
  /**
   * 域名。
   */
  DomainName?: string
  /**
   * 发布cdc 子网到云联网的开关。true: 发布, false: 不发布。
   */
  EnableCdcPublish?: boolean
}

/**
 * DescribeIp6Translators返回参数结构体
 */
export interface DescribeIp6TranslatorsResponse {
  /**
   * 符合过滤条件的IPV6转换实例数量。
   */
  TotalCount?: number
  /**
   * 符合过滤条件的IPV6转换实例详细信息
   */
  Ip6TranslatorSet?: Array<Ip6Translator>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityGroupPolicies请求参数结构体
 */
export interface CreateSecurityGroupPoliciesRequest {
  /**
   * 安全组实例ID，例如sg-33ocnj9n，可通过<a href="https://cloud.tencent.com/document/product/215/15808">DescribeSecurityGroups</a>获取。
   */
  SecurityGroupId: string
  /**
   * 安全组规则集合。
   */
  SecurityGroupPolicySet: SecurityGroupPolicySet
}

/**
 * DeleteVpcPeeringConnection请求参数结构体
 */
export interface DeleteVpcPeeringConnectionRequest {
  /**
   * 对等连接唯一ID。
   */
  PeeringConnectionId: string
}

/**
 * CreateBandwidthPackage请求参数结构体
 */
export interface CreateBandwidthPackageRequest {
  /**
   * 带宽包类型, 默认值: BGP, 可选值:
<li>BGP: 普通BGP共享带宽包</li>
<li>HIGH_QUALITY_BGP: 精品BGP共享带宽包</li>
<li>SINGLEISP_CMCC: 中国移动共享带宽包</li>
<li>SINGLEISP_CTCC: 中国电信共享带宽包</li>
<li>SINGLEISP_CUCC: 中国联通共享带宽包</li>
   */
  NetworkType?: string
  /**
   * 带宽包计费类型, 默认为: ENHANCED95_POSTPAID_BY_MONTH, 可选值:
<li>TOP5_POSTPAID_BY_MONTH: 按月后付费TOP5计费</li>
<li>PERCENT95_POSTPAID_BY_MONTH: 按月后付费月95计费</li>
<li>FIXED_PREPAID_BY_MONTH: 包月预付费计费</li>
<li>ENHANCED95_POSTPAID_BY_MONTH: 按月后付费增强型95计费</li>
<li>PEAK_BANDWIDTH_POSTPAID_BY_DAY: 后付费日结按带宽计费</li>
<li>PRIMARY_TRAFFIC_POSTPAID_BY_HOUR: 后付费按主流量计费</li>

   */
  ChargeType?: string
  /**
   * 带宽包名称。
   */
  BandwidthPackageName?: string
  /**
   * 带宽包数量(传统账户类型只能填1), 标准账户类型取值范围为1~20。
   */
  BandwidthPackageCount?: number
  /**
   * 带宽包限速大小。单位：Mbps，-1表示不限速。不同计费类型的带宽包对应不同的带宽上下限。
   */
  InternetMaxBandwidth?: number
  /**
   * 需要关联的标签列表。
   */
  Tags?: Array<Tag>
  /**
   * 带宽包协议类型。当前支持'ipv4'和'ipv6'协议带宽包，默认值是'ipv4'。
   */
  Protocol?: string
  /**
   * 预付费包月带宽包的购买时长，单位: 月，取值范围: 1~60。
   */
  TimeSpan?: number
  /**
   * 网络出口，默认值：center_egress1
   */
  Egress?: string
}

/**
 * 跨境带宽监控数据
 */
export interface CrossBorderFlowMonitorData {
  /**
   * 入带宽，单位：`bps`。
   */
  InBandwidth?: Array<number | bigint>
  /**
   * 出带宽，单位：`bps`。
   */
  OutBandwidth?: Array<number | bigint>
  /**
   * 入包，单位：`pps`。
   */
  InPkg?: Array<number | bigint>
  /**
   * 出包，单位：`pps`。
   */
  OutPkg?: Array<number | bigint>
}

/**
 * DescribeRouteTableAssociatedInstances返回参数结构体
 */
export interface DescribeRouteTableAssociatedInstancesResponse {
  /**
   * 查询到的绑定路由表的实例数量。
   */
  TotalCount?: number
  /**
   * 绑定信息。
   */
  InstanceBindSet?: Array<InstanceBind>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRouteTableAttribute返回参数结构体
 */
export interface ModifyRouteTableAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIPv6AddressesBandwidth返回参数结构体
 */
export interface ModifyIPv6AddressesBandwidthResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupReferences返回参数结构体
 */
export interface DescribeSecurityGroupReferencesResponse {
  /**
   * 安全组被引用信息。
   */
  ReferredSecurityGroupSet?: Array<ReferredSecurityGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddIp6Rules返回参数结构体
 */
export interface AddIp6RulesResponse {
  /**
   * IPV6转换规则唯一ID数组，形如rule6-xxxxxxxx
   */
  Ip6RuleSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAddressTemplateGroup返回参数结构体
 */
export interface CreateAddressTemplateGroupResponse {
  /**
   * IP地址模板集合对象。
   */
  AddressTemplateGroup?: AddressTemplateGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadVpnGatewaySslClientCert 使用
 */
export interface SslClientConfig {
  /**
   * 客户端配置
   */
  SslVpnClientConfiguration?: string
  /**
   * 更证书
   */
  SslVpnRootCert?: string
  /**
   * 客户端密钥
   */
  SslVpnKey?: string
  /**
   * 客户端证书
   */
  SslVpnCert?: string
  /**
   * SSL-VPN-CLIENT 实例ID。
   */
  SslVpnClientId?: string
}

/**
 * DescribeBandwidthPackageQuota返回参数结构体
 */
export interface DescribeBandwidthPackageQuotaResponse {
  /**
   * 带宽包配额详细信息
   */
  QuotaSet?: Array<Quota>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIp6TranslatorQuota返回参数结构体
 */
export interface DescribeIp6TranslatorQuotaResponse {
  /**
   * 账户在指定地域的IPV6转换实例及规则配额信息
QUOTAID属性是TOTAL_TRANSLATOR_QUOTA，表示账户在指定地域的IPV6转换实例配额信息；QUOTAID属性是IPV6转换实例唯一ID（形如ip6-xxxxxxxx），表示账户在该转换实例允许创建的转换规则配额
   */
  QuotaSet?: Array<Quota>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteServiceTemplateGroup请求参数结构体
 */
export interface DeleteServiceTemplateGroupRequest {
  /**
   * 协议端口模板集合实例ID，例如：ppmg-n17uxvve。
   */
  ServiceTemplateGroupId: string
}

/**
 * DeleteNatGateway返回参数结构体
 */
export interface DeleteNatGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceSecurityGroupPolicies请求参数结构体
 */
export interface ReplaceSecurityGroupPoliciesRequest {
  /**
   * 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。
   */
  SecurityGroupId: string
  /**
   * 安全组规则集合对象。
   */
  SecurityGroupPolicySet: SecurityGroupPolicySet
  /**
   * 旧的安全组规则集合对象，可选，日志记录用。
   */
  OriginalSecurityGroupPolicySet?: SecurityGroupPolicySet
}

/**
 * DeletePrivateNatGateway请求参数结构体
 */
export interface DeletePrivateNatGatewayRequest {
  /**
   * 私网网关唯一`ID`，形如"intranat-xxxxxxxx"。
   */
  NatGatewayId: string
}

/**
 * AdjustPublicAddress请求参数结构体
 */
export interface AdjustPublicAddressRequest {
  /**
   * 标识CVM实例的唯一 ID。CVM 唯一 ID 形如：`ins-11112222`。
   */
  InstanceId?: string
  /**
   * 标识EIP实例的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。
   */
  AddressId?: string
}

/**
 * CreateDirectConnectGateway返回参数结构体
 */
export interface CreateDirectConnectGatewayResponse {
  /**
   * 专线网关对象。
   */
  DirectConnectGateway?: DirectConnectGateway
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachCcnInstances返回参数结构体
 */
export interface AttachCcnInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpcEndPointAttribute请求参数结构体
 */
export interface ModifyVpcEndPointAttributeRequest {
  /**
   * 终端节点ID。
   */
  EndPointId: string
  /**
   * 终端节点名称。
   */
  EndPointName?: string
  /**
   * 安全组ID列表。
   */
  SecurityGroupIds?: Array<string>
}

/**
 * DescribeCcnRouteTables请求参数结构体
 */
export interface DescribeCcnRouteTablesRequest {
  /**
   * 过滤条件：
<li>ccn-id - String -（过滤条件）CCN实例ID。</li>
<li>route-table-id - String -（过滤条件）路由表ID。</li>
<li>route-table-name - String -（过滤条件）路由表名称。</li>
<li>route-table-description- String -（过滤条件）路由表备注。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 一次查询最大返回的数量。
   */
  Limit?: number
}

/**
 * DescribeTaskResult返回参数结构体
 */
export interface DescribeTaskResultResponse {
  /**
   * 任务ID
   */
  TaskId?: number
  /**
   * 执行结果，包括"SUCCESS", "FAILED", "RUNNING"
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateNetworkAclSubnets请求参数结构体
 */
export interface DisassociateNetworkAclSubnetsRequest {
  /**
   * 网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 子网实例ID数组。例如：[subnet-12345678]。
   */
  SubnetIds: Array<string>
}

/**
 * ModifyAddressTemplateGroupAttribute请求参数结构体
 */
export interface ModifyAddressTemplateGroupAttributeRequest {
  /**
   * IP地址模板集合实例ID，例如：ipmg-2uw6ujo6。
   */
  AddressTemplateGroupId: string
  /**
   * IP地址模板集合名称。
   */
  AddressTemplateGroupName?: string
  /**
   * IP地址模板实例ID， 例如：ipm-mdunqeb6。
   */
  AddressTemplateIds?: Array<string>
}

/**
 * ModifyVpcPeeringConnection返回参数结构体
 */
export interface ModifyVpcPeeringConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyServiceTemplateGroupAttribute请求参数结构体
 */
export interface ModifyServiceTemplateGroupAttributeRequest {
  /**
   * 协议端口模板集合实例ID，例如：ppmg-ei8hfd9a。
   */
  ServiceTemplateGroupId: string
  /**
   * 协议端口模板集合名称。
   */
  ServiceTemplateGroupName?: string
  /**
   * 协议端口模板实例ID，例如：ppm-4dw6agho。
   */
  ServiceTemplateIds?: Array<string>
}

/**
 * ReturnNormalAddresses返回参数结构体
 */
export interface ReturnNormalAddressesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpcEndPoint请求参数结构体
 */
export interface DeleteVpcEndPointRequest {
  /**
   * 终端节点ID。
   */
  EndPointId: string
}

/**
 * InquiryPriceAllocateAddresses请求参数结构体
 */
export interface InquiryPriceAllocateAddressesRequest {
  /**
   * EIP计费方式。
<ul style="margin:0"><li>账号为标准账户类型的用户，可选值：<ul>
<li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费</li>
<li>BANDWIDTH_PREPAID_BY_MONTH：包月按带宽预付费</li>
<li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费</li></ul>默认值：TRAFFIC_POSTPAID_BY_HOUR。</li>
</ul>
   */
  InternetChargeType?: string
  /**
   * EIP出带宽上限，单位：Mbps。
<ul style="margin:0"><li>账号为标准账户类型的用户，可选值范围取决于EIP计费方式：<ul>
<li>BANDWIDTH_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps</li>
<li>BANDWIDTH_PREPAID_BY_MONTH：1 Mbps 至 200 Mbps</li>
<li>TRAFFIC_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps</li></ul>默认值：1 Mbps。</li>
<li>账号为传统账户类型的用户，EIP出带宽上限取决于与其绑定的实例的公网出带宽上限，无需传递此参数。</li></ul>
   */
  InternetMaxBandwidthOut?: number
  /**
   * 包月按带宽预付费EIP的计费参数。EIP为包月按带宽预付费时，该参数必传，其余场景不需传递
   */
  AddressChargePrepaid?: AddressChargePrepaid
  /**
   * EIP类型。默认值：EIP。

<ul style="margin:0"><li>精品IP，可选值：<ul><li>HighQualityEIP：精品IP</li></ul>注意：仅部分地域支持精品IP。</li></ul><ul style="margin:0">
        <li>高防IP，可选值：<ul>
                <li>AntiDDoSEIP：高防IP</li>
            </ul>
        </li>
    </ul>
   */
  AddressType?: string
}

/**
 * 云联网（CCN）对象
 */
export interface CCN {
  /**
   * 云联网唯一ID
   */
  CcnId?: string
  /**
   * 云联网名称
   */
  CcnName?: string
  /**
   * 云联网描述信息
   */
  CcnDescription?: string
  /**
   * 关联实例数量
   */
  InstanceCount?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 实例状态， 'ISOLATED': 隔离中（欠费停服），'AVAILABLE'：运行中。
   */
  State?: string
  /**
   * 实例服务质量，’PT’：白金，'AU'：金，'AG'：银。
   */
  QosLevel?: string
  /**
   * 付费类型，PREPAID为预付费，POSTPAID为后付费。
   */
  InstanceChargeType?: string
  /**
   * 限速类型，`INTER_REGION_LIMIT` 为地域间限速；`OUTER_REGION_LIMIT` 为地域出口限速。
   */
  BandwidthLimitType?: string
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
  /**
   * 是否支持云联网路由优先级的功能。`False`：不支持，`True`：支持。
   */
  RoutePriorityFlag?: boolean
  /**
   * 实例关联的路由表个数。
   */
  RouteTableCount?: number
  /**
   * 是否开启云联网多路由表特性。`False`：未开启，`True`：开启。
   */
  RouteTableFlag?: boolean
  /**
   * `true`：实例已被封禁，流量不通，`false`:解封禁。
   */
  IsSecurityLock?: boolean
  /**
   * 是否开启云联网路由传播策略。`False` 未开启，`True` 开启。
   */
  RouteBroadcastPolicyFlag?: boolean
  /**
   * 是否开启等价路由功能。`False` 未开启，`True` 开启。
   */
  RouteECMPFlag?: boolean
  /**
   * 是否开启路由重叠功能。`False` 未开启，`True` 开启。
   */
  RouteOverlapFlag?: boolean
  /**
   * 是否开启QOS。
   */
  TrafficMarkingPolicyFlag?: boolean
  /**
   * 是否开启路由表选择策略。
   */
  RouteSelectPolicyFlag?: boolean
  /**
   * 是否开启二层云联网通道。
   */
  DirectConnectAccelerateChannelFlag?: boolean
  /**
   * 是否支持ipv6路由表
   */
  Ipv6Flag?: boolean
  /**
   * 是否支持路由表聚合策略
   */
  MrtbAggregatePolicyFlag?: boolean
  /**
   * 是否支持策略值
   */
  MrtbPolicyValueFlag?: boolean
}

/**
 * 网络ACL五元组Entry
 */
export interface NetworkAclQuintupleEntry {
  /**
   * 协议, 取值: TCP,UDP, ICMP, ALL。
   */
  Protocol?: string
  /**
   * 描述。
   */
  Description?: string
  /**
   * 源端口(all, 单个port,  range)。当Protocol为ALL或ICMP时，不能指定Port。
   */
  SourcePort?: string
  /**
   * 源CIDR。
   */
  SourceCidr?: string
  /**
   * 目的端口(all, 单个port,  range)。当Protocol为ALL或ICMP时，不能指定Port。
   */
  DestinationPort?: string
  /**
   * 目的CIDR。
   */
  DestinationCidr?: string
  /**
   * 动作，ACCEPT 或 DROP。
   */
  Action?: string
  /**
   * 网络ACL条目唯一ID。
   */
  NetworkAclQuintupleEntryId?: string
  /**
   * 优先级，从1开始。
   */
  Priority?: number
  /**
   * 创建时间，用于DescribeNetworkAclQuintupleEntries的出参。
   */
  CreateTime?: string
  /**
   * 方向，INGRESS或EGRESS，用于DescribeNetworkAclQuintupleEntries的出参。
   */
  NetworkAclDirection?: string
}

/**
 * ModifyHighPriorityRouteAttribute请求参数结构体
 */
export interface ModifyHighPriorityRouteAttributeRequest {
  /**
   * 高优路由表唯一 ID。
   */
  HighPriorityRouteTableId: string
  /**
   * 高优路由表条目修改属性。
   */
  HighPriorityModifyItems: Array<HighPriorityModifyItem>
}

/**
 * InquirePriceCreateDirectConnectGateway返回参数结构体
 */
export interface InquirePriceCreateDirectConnectGatewayResponse {
  /**
   * 专线网关标准接入费用
   */
  TotalCost?: number
  /**
   * 专线网关真实接入费用
   */
  RealTotalCost?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteIp6Translators请求参数结构体
 */
export interface DeleteIp6TranslatorsRequest {
  /**
   * 待释放的IPV6转换实例的唯一ID，形如‘ip6-xxxxxxxx’
   */
  Ip6TranslatorIds: Array<string>
}

/**
 * IPV6转换实例信息
 */
export interface Ip6Translator {
  /**
   * IPV6转换实例唯一ID，形如ip6-xxxxxxxx
   */
  Ip6TranslatorId?: string
  /**
   * IPV6转换实例名称
   */
  Ip6TranslatorName?: string
  /**
   * IPV6地址
   */
  Vip6?: string
  /**
   * IPV6转换地址所属运营商
   */
  IspName?: string
  /**
   * 转换实例状态，限于CREATING,RUNNING,DELETING,MODIFYING
   */
  TranslatorStatus?: string
  /**
   * IPV6转换实例创建时间
   */
  CreatedTime?: string
  /**
   * 绑定的IPV6转换规则数量
   */
  Ip6RuleCount?: number
  /**
   * IPV6转换规则信息
   */
  IP6RuleSet?: Array<Ip6Rule>
}

/**
 * CheckAssistantCidr请求参数结构体
 */
export interface CheckAssistantCidrRequest {
  /**
   * `VPC`实例`ID`。形如：`vpc-6v2ht8q5`
   */
  VpcId: string
  /**
   * 待添加的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。入参NewCidrBlocks和OldCidrBlocks至少需要其一。
   */
  NewCidrBlocks?: Array<string>
  /**
   * 待删除的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。入参NewCidrBlocks和OldCidrBlocks至少需要其一。
   */
  OldCidrBlocks?: Array<string>
}

/**
 * UpdateTrafficMirrorAllFilter请求参数结构体
 */
export interface UpdateTrafficMirrorAllFilterRequest {
  /**
   * 流量镜像实例ID
   */
  TrafficMirrorId: string
  /**
   * 流量镜像采集方向
   */
  Direction: string
  /**
   * 流量镜像采集对象
   */
  CollectorSrcs?: Array<string>
  /**
   * 流量镜像需要过滤的natgw实例
   */
  NatId?: string
  /**
   * 流量镜像需要过滤的五元组规则
   */
  CollectorNormalFilters?: Array<TrafficMirrorFilter>
}

/**
 * DescribeTrafficMirrors返回参数结构体
 */
export interface DescribeTrafficMirrorsResponse {
  /**
   * 流量镜像实例信息
   */
  TrafficMirrorSet?: Array<TrafficMirror>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpcPeeringConnection返回参数结构体
 */
export interface DeleteVpcPeeringConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSnapshotPolicies请求参数结构体
 */
export interface DeleteSnapshotPoliciesRequest {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyIds: Array<string>
}

/**
 * 云联网路由表信息
 */
export interface CcnRouteTable {
  /**
   * 云联网ID。
   */
  CcnId?: string
  /**
   * 云联网路由表ID。
   */
  CcnRouteTableId?: string
  /**
   * 云联网路由表名称。
   */
  RouteTableName?: string
  /**
   * 云联网路由表描述。
   */
  RouteTableDescription?: string
  /**
   * True：是默认路由表 False：非默认路由表。
   */
  IsDefaultTable?: boolean
  /**
   * 创建时间。
   */
  CreateTime?: string
}

/**
 * DeletePrivateNatGateway返回参数结构体
 */
export interface DeletePrivateNatGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableFlowLogs返回参数结构体
 */
export interface DisableFlowLogsResponse {
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
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 子网对象。
   */
  SubnetSet?: Array<Subnet>
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
   * 对端网关对象列表。
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
 * CheckAssistantCidr返回参数结构体
 */
export interface CheckAssistantCidrResponse {
  /**
   * 冲突资源信息数组。
   */
  ConflictSourceSet?: Array<ConflictSource>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcTaskResult返回参数结构体
 */
export interface DescribeVpcTaskResultResponse {
  /**
   * 异步任务执行结果。结果：SUCCESS、FAILED、RUNNING。3者其中之一。其中SUCCESS表示任务执行成功，FAILED表示任务执行失败，RUNNING表示任务执行中。
   */
  Status?: string
  /**
   * 异步任务执行输出。
   */
  Output?: string
  /**
   * 异步任务详细结果。只用于特殊场景，如批量删除弹性网卡时查询成功的网卡列表和失败的列表。
   */
  Result?: Array<VpcTaskResultDetailInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流量镜像五元组过滤规则对象
 */
export interface TrafficMirrorFilter {
  /**
   * 过滤规则的源网段
   */
  SrcNet: string
  /**
   * 过滤规则的目的网段
   */
  DstNet: string
  /**
   * 过滤规则的协议
   */
  Protocol: string
  /**
   * 过滤规则的源端口，默认值1-65535
   */
  SrcPort?: string
  /**
   * 过滤规则的目的端口，默认值1-65535
   */
  DstPort?: string
}

/**
 * InquiryPriceRenewVpnGateway请求参数结构体
 */
export interface InquiryPriceRenewVpnGatewayRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
}

/**
 * 高优路由表条目修改属性。
 */
export interface HighPriorityModifyItem {
  /**
   * 高优路由条目唯一ID。
   */
  HighPriorityRouteId?: string
  /**
   * 高优路由条目描述。
   */
  Description?: string
}

/**
 * EnableCcnRoutes返回参数结构体
 */
export interface EnableCcnRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateNatGateways返回参数结构体
 */
export interface DescribePrivateNatGatewaysResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 私网网关对象数组。
   */
  PrivateNatGatewaySet?: Array<PrivateNatGateway>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpnGatewayCcnRoutes返回参数结构体
 */
export interface ModifyVpnGatewayCcnRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachCcnInstances返回参数结构体
 */
export interface DetachCcnInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyServiceTemplateGroupAttribute返回参数结构体
 */
export interface ModifyServiceTemplateGroupAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNetworkAclQuintupleEntries请求参数结构体
 */
export interface DeleteNetworkAclQuintupleEntriesRequest {
  /**
   * 网络ACL实例ID。例如：acl-12345678。
   */
  NetworkAclId: string
  /**
   * 网络五元组ACL规则集。
   */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntries
}

/**
 * 云联网路由传播策略
 */
export interface CcnRouteTableBroadcastPolicy {
  /**
   * 路由条件
   */
  RouteConditions: Array<CcnRouteBroadcastPolicyRouteCondition>
  /**
   * 传播条件
   */
  BroadcastConditions: Array<CcnRouteBroadcastPolicyRouteCondition>
  /**
   * 路由行为，`accept` 允许，`drop` 拒绝
   */
  Action: string
  /**
   * 策略描述
   */
  Description?: string
  /**
   * as-path操作
   */
  OperateAsPath?: string
  /**
   * as-path操作模式
   */
  AsPathOperateMode?: string
  /**
   * community操作
   */
  OperateCommunitySet?: Array<string>
  /**
   * community操作模式
   */
  CommunityOperateMode?: string
}

/**
 * DeleteSubnet请求参数结构体
 */
export interface DeleteSubnetRequest {
  /**
   * 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。
   */
  SubnetId: string
}

/**
 * CreateCcnRouteTables返回参数结构体
 */
export interface CreateCcnRouteTablesResponse {
  /**
   * 路由表信息列表。
   */
  CcnRouteTableSet?: Array<CcnRouteTable>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddressTemplateGroups请求参数结构体
 */
export interface DescribeAddressTemplateGroupsRequest {
  /**
   * 过滤条件。
<li>address-template-group-name - String - （过滤条件）IP地址模板集合名称。</li>
<li>address-template-group-id - String - （过滤条件）IP地址模板实集合例ID，例如：ipmg-mdunqeb6。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
  /**
   * 是否查询IP地址模板成员标识。
   */
  NeedMemberInfo?: boolean
  /**
   * 排序字段。支持：`AddressTemplateGroupId ` `CreatedTime` `UpdateTime`。注意：该字段没有默认值。
   */
  OrderField?: string
  /**
   * 排序方法。升序：`ASC`，倒序：`DESC`。注意：该字段没有默认值。
   */
  OrderDirection?: string
  /**
   * IP地址成员排序字段。支持：`AddressTemplateId` `UpdateTime`。注意：该字段没有默认值。
   */
  MemberOrderField?: string
  /**
   * IP地址成员排序方法。升序：`ASC`，倒序：`DESC`。注意：该字段没有默认值。
   */
  MemberOrderDirection?: string
}

/**
 * MigratePrivateIpAddress返回参数结构体
 */
export interface MigratePrivateIpAddressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckNetDetectState返回参数结构体
 */
export interface CheckNetDetectStateResponse {
  /**
   * 网络探测验证结果对象数组。
   */
  NetDetectIpStateSet?: Array<NetDetectIpState>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateVpcEndPointSecurityGroups返回参数结构体
 */
export interface DisassociateVpcEndPointSecurityGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSnapshotPolicies返回参数结构体
 */
export interface DeleteSnapshotPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateNatGatewayAddress返回参数结构体
 */
export interface AssociateNatGatewayAddressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveBandwidthPackageResources请求参数结构体
 */
export interface RemoveBandwidthPackageResourcesRequest {
  /**
   * 带宽包唯一标识ID，形如'bwp-xxxx'
   */
  BandwidthPackageId?: string
  /**
   * 资源类型，包括‘Address’, ‘LoadBalance’
   */
  ResourceType?: string
  /**
   * 资源ID，可支持资源形如'eip-xxxx', 'lb-xxxx'
   */
  ResourceIds?: Array<string>
}

/**
 * VPN网关云联网路由信息
 */
export interface VpngwCcnRoutes {
  /**
   * 路由信息ID。
   */
  RouteId: string
  /**
   * 路由信息是否启用。
ENABLE：启用该路由
DISABLE：不启用该路由
   */
  Status?: string
  /**
   * 路由CIDR。
   */
  DestinationCidrBlock?: string
}

/**
 * ModifyVpnConnectionAttribute请求参数结构体
 */
export interface ModifyVpnConnectionAttributeRequest {
  /**
   * VPN通道实例ID。形如：vpnx-f49l6u0z。
   */
  VpnConnectionId: string
  /**
   * VPN通道名称，可任意命名，但不得超过60个字符。
   */
  VpnConnectionName?: string
  /**
   * 预共享密钥。
   */
  PreShareKey?: string
  /**
   * SPD策略组，例如：{"10.0.0.5/24":["172.123.10.5/16"]}，10.0.0.5/24是vpc内网段，172.123.10.5/16是IDC网段。用户指定VPC内哪些网段可以和您IDC中哪些网段通信。
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
  /**
   * 是否启用通道健康检查，默认为False。
   */
  EnableHealthCheck?: boolean
  /**
   * 本端通道探测IP。
   */
  HealthCheckLocalIp?: string
  /**
   * 对端通道探测IP。
   */
  HealthCheckRemoteIp?: string
  /**
   * 协商类型，默认为active（主动协商）。可选值：active（主动协商），passive（被动协商），flowTrigger（流量协商）
   */
  NegotiationType?: string
  /**
   * DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启）
   */
  DpdEnable?: number
  /**
   * DPD超时时间。即探测确认对端不存在需要的时间。dpdEnable为1（开启）时有效。默认30，单位为秒
   */
  DpdTimeout?: string
  /**
   * DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试）
   */
  DpdAction?: string
  /**
   * 对端网关ID，4.0及以上网关下的通道支持更新。
   */
  CustomerGatewayId?: string
  /**
   * 健康检查配置
   */
  HealthCheckConfig?: HealthCheckConfig
}

/**
 * DeleteNetworkInterface请求参数结构体
 */
export interface DeleteNetworkInterfaceRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string
}

/**
 * InquiryPriceResetVpnGatewayInternetMaxBandwidth返回参数结构体
 */
export interface InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse {
  /**
   * 商品价格。仅支持未过期的预付费网关。
   */
  Price?: Price
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceCcnRouteTableBroadcastPolicys返回参数结构体
 */
export interface ReplaceCcnRouteTableBroadcastPolicysResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 路由表对象
 */
export interface RouteTable {
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId?: string
  /**
   * 路由表名称。
   */
  RouteTableName?: string
  /**
   * 路由表关联关系。
   */
  AssociationSet?: Array<RouteTableAssociation>
  /**
   * IPv4路由策略集合。
   */
  RouteSet?: Array<Route>
  /**
   * 是否默认路由表。
   */
  Main?: boolean
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
  /**
   * local路由是否发布云联网。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalCidrForCcn?: Array<CidrForCcn>
}

/**
 * DescribeVpcEndPointServiceWhiteList请求参数结构体
 */
export interface DescribeVpcEndPointServiceWhiteListRequest {
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 单页返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 过滤条件。
<li> user-uin String - （过滤条件）用户UIN。</li>
<li> end-point-service-id String - （过滤条件）终端节点服务ID。</li>
   */
  Filters?: Array<Filter>
}

/**
 * DeleteAddressTemplateGroup返回参数结构体
 */
export interface DeleteAddressTemplateGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNetworkInterfaceQos请求参数结构体
 */
export interface ModifyNetworkInterfaceQosRequest {
  /**
   * 弹性网卡ID，支持批量修改。
   */
  NetworkInterfaceIds: Array<string>
  /**
   * 服务质量，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。
   */
  QosLevel?: string
  /**
   * DirectSend端口范围最大值。
   */
  DirectSendMaxPort?: number
}

/**
 * ModifyLocalGateway请求参数结构体
 */
export interface ModifyLocalGatewayRequest {
  /**
   * 本地网关名称。
   */
  LocalGatewayName: string
  /**
   * CDC实例ID。
   */
  CdcId: string
  /**
   * 本地网关实例ID。
   */
  LocalGatewayId: string
  /**
   * VPC实例ID。
   */
  VpcId?: string
}

/**
 * 专线网关云联网路由（IDC网段）对象
 */
export interface DirectConnectGatewayCcnRoute {
  /**
   * 路由ID。
   */
  RouteId?: string
  /**
   * IDC网段。
   */
  DestinationCidrBlock?: string
  /**
   * `BGP`的`AS-Path`属性。
   */
  ASPath?: Array<string>
  /**
   * 备注
   */
  Description?: string
  /**
   * 最后更新时间
   */
  UpdateTime?: string
}

/**
 * DeleteHaVip请求参数结构体
 */
export interface DeleteHaVipRequest {
  /**
   * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。
   */
  HaVipId: string
}

/**
 * CreateLocalGateway返回参数结构体
 */
export interface CreateLocalGatewayResponse {
  /**
   * 本地网关信息。
   */
  LocalGateway?: LocalGateway
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHighPriorityRouteECMPAlgorithm请求参数结构体
 */
export interface ModifyHighPriorityRouteECMPAlgorithmRequest {
  /**
   * 高优路由表实例唯一ID。
   */
  HighPriorityRouteTableId: string
  /**
   * 高优路由表HASH策略。
   */
  RouteECMPAlgorithms: Array<RouteECMPAlgorithm>
}

/**
 * 协议端口模板信息
 */
export interface ServicesInfo {
  /**
   * 协议端口。
   */
  Service: string
  /**
   * 备注。
   */
  Description?: string
  /**
   * 更新时间。
   */
  UpdatedTime?: string
}

/**
 * MigratePrivateIpAddress请求参数结构体
 */
export interface MigratePrivateIpAddressRequest {
  /**
   * 当内网IP绑定的弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  SourceNetworkInterfaceId: string
  /**
   * 待迁移的目的弹性网卡实例ID。
   */
  DestinationNetworkInterfaceId: string
  /**
   * 迁移的内网IP地址，例如：10.0.0.6。
   */
  PrivateIpAddress: string
}

/**
 * AssignPrivateIpAddresses请求参数结构体
 */
export interface AssignPrivateIpAddressesRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string
  /**
   * 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。
   */
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>
  /**
   * 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数，详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
   */
  SecondaryPrivateIpAddressCount?: number
  /**
   * IP服务质量等级，和SecondaryPrivateIpAddressCount配合使用，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。
   */
  QosLevel?: string
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * DescribeCcnRouteTableBroadcastPolicys请求参数结构体
 */
export interface DescribeCcnRouteTableBroadcastPolicysRequest {
  /**
   * 云联网ID
   */
  CcnId: string
  /**
   * 云联网路由表ID
   */
  RouteTableId: string
  /**
   * 路由传播策略版本号
   */
  PolicyVersion?: number
}

/**
 * RefreshDirectConnectGatewayRouteToNatGateway返回参数结构体
 */
export interface RefreshDirectConnectGatewayRouteToNatGatewayResponse {
  /**
   * IDC子网信息
   */
  DirectConnectSubnetSet: Array<DirectConnectSubnet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBandwidthPackages返回参数结构体
 */
export interface DescribeBandwidthPackagesResponse {
  /**
   * 符合条件的带宽包数量
   */
  TotalCount?: number
  /**
   * 描述带宽包详细信息
   */
  BandwidthPackageSet?: Array<BandwidthPackage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRouteTable请求参数结构体
 */
export interface DeleteRouteTableRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string
}

/**
 * DescribeCdcLDCXList返回参数结构体
 */
export interface DescribeCdcLDCXListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快照策略关联实例信息
 */
export interface SnapshotInstance {
  /**
   * 实例Id。
   */
  InstanceId: string
  /**
   * 实例类型，目前支持安全组：securitygroup。
   */
  InstanceType: string
  /**
   * 实例所在地域。
   */
  InstanceRegion: string
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
}

/**
 * CreateVpnGateway请求参数结构体
 */
export interface CreateVpnGatewayRequest {
  /**
   * VPC实例ID。可通过[DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)接口返回值中的VpcId获取。
   */
  VpcId: string
  /**
   * VPN网关名称，最大长度不能超过60个字节。
   */
  VpnGatewayName: string
  /**
   * 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100, 200, 500, 1000, 3000；单位：Mbps。
   */
  InternetMaxBandwidthOut: number
  /**
   * VPN网关计费模式，PREPAID：表示预付费，即包年包月，POSTPAID_BY_HOUR：表示后付费，即按量计费。默认：POSTPAID_BY_HOUR，如果指定预付费模式，参数InstanceChargePrepaid必填。
   */
  InstanceChargeType?: string
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid
  /**
   * 可用区，如：ap-guangzhou-2。
   */
  Zone?: string
  /**
   * VPN网关类型，默认为IPSEC。值“IPSEC”为VPC型IPSEC VPN网关，值“SSL”为VPC型SSL VPN网关，值“CCN”为云联网型IPSEC VPN网关，值“SSL_CCN”为云联网型SSL VPN网关。
   */
  Type?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
  /**
   * CDC实例ID。
   */
  CdcId?: string
  /**
   * SSL VPN连接数设置，可选规格：5, 10, 20, 50, 100, 200, 500, 1000；单位：个。仅 SSL / SSL_CCN 类型需要选这个参数。
   */
  MaxConnection?: number
  /**
   * BGP ASN。
   */
  BgpAsn?: number
}

/**
 * DescribeVpcInstances请求参数结构体
 */
export interface DescribeVpcInstancesRequest {
  /**
   * <li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>instance-id - String - （过滤条件）云主机实例ID。</li>
<li>instance-name - String - （过滤条件）云主机名称。</li>
   */
  Filters: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * DeleteVpcEndPointServiceWhiteList返回参数结构体
 */
export interface DeleteVpcEndPointServiceWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServiceTemplates返回参数结构体
 */
export interface DescribeServiceTemplatesResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 协议端口模板对象。
   */
  ServiceTemplateSet?: Array<ServiceTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcceptVpcPeeringConnection返回参数结构体
 */
export interface AcceptVpcPeeringConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSgSnapshotFileContent请求参数结构体
 */
export interface DescribeSgSnapshotFileContentRequest {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId: string
  /**
   * 快照文件Id。
   */
  SnapshotFileId: string
  /**
   * 安全组Id。
   */
  SecurityGroupId: string
}

/**
 * CreateBandwidthPackage返回参数结构体
 */
export interface CreateBandwidthPackageResponse {
  /**
   * 带宽包唯一ID。
   */
  BandwidthPackageId?: string
  /**
   * 带宽包唯一ID列表(申请数量大于1时有效)。
   */
  BandwidthPackageIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNetworkAclEntries返回参数结构体
 */
export interface CreateNetworkAclEntriesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetVpnConnection请求参数结构体
 */
export interface ResetVpnConnectionRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * VPN通道实例ID。形如：vpnx-f49l6u0z。
   */
  VpnConnectionId: string
}

/**
 * ReleaseAddresses返回参数结构体
 */
export interface ReleaseAddressesResponse {
  /**
   * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 高优路由表条目信息
 */
export interface HighPriorityRoute {
  /**
   * 高优路由表唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  HighPriorityRouteTableId?: string
  /**
   * 高优路由表条目唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  HighPriorityRouteId?: string
  /**
   * 目标网段
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestinationCidrBlock?: string
  /**
   * 网关类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayType?: string
  /**
   * 网关唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayId?: string
  /**
   * 高优路由条目描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * ECMP算法，支持的算法有：ECMP_QUINTUPLE_HASH：五元组hash，ECMP_SOURCE_DESTINATION_IP_HASH：源和目的IP hash，ECMP_DESTINATION_IP_HASH：目的IP hash，ECMP_SOURCE_IP_HASH：源IP hash。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetRouteAlgorithm?: string
  /**
   * 出参展示，是否为CDC属性高优路由
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCdc?: boolean
  /**
   * 出参展示，CDC 唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
}

/**
 * AuditCrossBorderCompliance返回参数结构体
 */
export interface AuditCrossBorderComplianceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceResetVpnGatewayInternetMaxBandwidth请求参数结构体
 */
export interface InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100, 200, 500, 1000；单位：Mbps。
   */
  InternetMaxBandwidthOut: number
}

/**
 * DisableFlowLogs请求参数结构体
 */
export interface DisableFlowLogsRequest {
  /**
   * 流日志Id。
   */
  FlowLogIds: Array<string>
}

/**
 * ReplaceSecurityGroupPolicy返回参数结构体
 */
export interface ReplaceSecurityGroupPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableGatewayFlowMonitor请求参数结构体
 */
export interface EnableGatewayFlowMonitorRequest {
  /**
   * 网关实例ID，目前我们支持的网关实例有，
专线网关实例ID，形如，`dcg-ltjahce6`；
Nat网关实例ID，形如，`nat-ltjahce6`；
VPN网关实例ID，形如，`vpn-ltjahce6`。
   */
  GatewayId: string
}

/**
 * ModifyPrivateIpAddressesAttribute返回参数结构体
 */
export interface ModifyPrivateIpAddressesAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceRoutes返回参数结构体
 */
export interface ReplaceRoutesResponse {
  /**
   * 原路由策略信息。
   */
  OldRouteSet?: Array<Route>
  /**
   * 修改后的路由策略信息。
   */
  NewRouteSet?: Array<Route>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHaVipAttribute返回参数结构体
 */
export interface ModifyHaVipAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于描述云联网地域间限速带宽实例的信息。
 */
export interface CcnBandwidthInfo {
  /**
   * 带宽所属的云联网ID。
   */
  CcnId?: string
  /**
   * 实例的创建时间。
   */
  CreatedTime?: string
  /**
   * 实例的过期时间
   */
  ExpiredTime?: string
  /**
   * 带宽实例的唯一ID。
   */
  RegionFlowControlId?: string
  /**
   * 带宽是否自动续费的标记。
   */
  RenewFlag?: string
  /**
   * 描述带宽的地域和限速上限信息。在地域间限速的情况下才会返回参数，出口限速模式不返回。
   */
  CcnRegionBandwidthLimit?: CcnRegionBandwidthLimit
  /**
   * 云市场实例ID。
   */
  MarketId?: string
  /**
   * 资源绑定的标签列表
   */
  TagSet?: Array<Tag>
  /**
   * `true表示`Qos默认带宽；`false`表示非Qos默认带宽；
   */
  DefaultQosBandwidthFlag?: boolean
  /**
   * 服务等级信息。
   */
  QosLevel?: string
}

/**
 * CreateVpcPeeringConnection返回参数结构体
 */
export interface CreateVpcPeeringConnectionResponse {
  /**
   * 对等连接ID
   */
  PeeringConnectionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCrossBorderCcnRegionBandwidthLimits返回参数结构体
 */
export interface DescribeCrossBorderCcnRegionBandwidthLimitsResponse {
  /**
   * 符合条件的对象总数。
   */
  TotalCount?: number
  /**
   * 云联网地域间限速带宽实例的信息。
   */
  CcnBandwidthSet?: Array<CcnBandwidth>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReturnNormalAddresses请求参数结构体
 */
export interface ReturnNormalAddressesRequest {
  /**
   * 普通公网IP 的 IP 地址,示例：101.35.139.183
   */
  AddressIps?: Array<string>
}

/**
 * DeleteSecurityGroup返回参数结构体
 */
export interface DeleteSecurityGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNetworkAclEntries返回参数结构体
 */
export interface DeleteNetworkAclEntriesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCdcLDCXList请求参数结构体
 */
export type DescribeCdcLDCXListRequest = null

/**
 * UpdateTrafficMirrorDirection请求参数结构体
 */
export interface UpdateTrafficMirrorDirectionRequest {
  /**
   * 流量镜像实例ID
   */
  TrafficMirrorId: string
  /**
   * 流量镜像采集方向
   */
  Direction: string
}

/**
 * CreateNetworkInterface返回参数结构体
 */
export interface CreateNetworkInterfaceResponse {
  /**
   * 弹性网卡实例。
   */
  NetworkInterface?: NetworkInterface
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddressQuota请求参数结构体
 */
export type DescribeAddressQuotaRequest = null

/**
 * LockCcns返回参数结构体
 */
export interface LockCcnsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量修改快照策略信息
 */
export interface BatchModifySnapshotPolicy {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId: string
  /**
   * 快照策略名称。
   */
  SnapshotPolicyName?: string
  /**
   * 备份策略。
   */
  BackupPolicies?: Array<BackupPolicy>
  /**
   * 快照保留时间，支持1～365天。
   */
  KeepTime?: number
}

/**
 * AssignIpv6Addresses返回参数结构体
 */
export interface AssignIpv6AddressesResponse {
  /**
   * 分配给弹性网卡的`IPv6`地址列表。
   */
  Ipv6AddressSet?: Array<Ipv6Address>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRoutes返回参数结构体
 */
export interface CreateRoutesResponse {
  /**
   * 新增的实例个数。
   */
  TotalCount?: number
  /**
   * 路由表对象。
   */
  RouteTableSet?: Array<RouteTable>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroups返回参数结构体
 */
export interface DescribeSecurityGroupsResponse {
  /**
   * 安全组对象。
   */
  SecurityGroupSet?: Array<SecurityGroup>
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
 * CreateVpcEndPointServiceWhiteList请求参数结构体
 */
export interface CreateVpcEndPointServiceWhiteListRequest {
  /**
   * UIN。
   */
  UserUin: string
  /**
   * 终端节点服务ID。
   */
  EndPointServiceId: string
  /**
   * 白名单描述。
   */
  Description?: string
}

/**
 * DeleteNatGatewaySourceIpTranslationNatRule请求参数结构体
 */
export interface DeleteNatGatewaySourceIpTranslationNatRuleRequest {
  /**
   * NAT网关的ID，形如：`nat-df45454`。
   */
  NatGatewayId: string
  /**
   * NAT网关的SNAT ID列表，形如：`snat-df43254`。
   */
  NatGatewaySnatIds: Array<string>
}

/**
 * ModifyVpnGatewayCcnRoutes请求参数结构体
 */
export interface ModifyVpnGatewayCcnRoutesRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 云联网路由（IDC网段）列表。其中RouteId可通过[DescribeVpnGatewayCcnRoutes](https://cloud.tencent.com/document/product/215/43514)接口获取。
   */
  Routes: Array<VpngwCcnRoutes>
}

/**
 * DescribeGatewayFlowQos请求参数结构体
 */
export interface DescribeGatewayFlowQosRequest {
  /**
   * 网关实例ID，目前我们支持的网关实例类型有，
专线网关实例ID，形如，`dcg-ltjahce6`；
Nat网关实例ID，形如，`nat-ltjahce6`；
VPN网关实例ID，形如，`vpn-ltjahce6`。
   */
  GatewayId: string
  /**
   * 限流的云服务器内网IP。
   */
  IpAddresses?: Array<string>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * ReplaceDirectConnectGatewayCcnRoutes返回参数结构体
 */
export interface ReplaceDirectConnectGatewayCcnRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySecurityGroupPolicies返回参数结构体
 */
export interface ModifySecurityGroupPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNatGatewayDestinationIpPortTranslationNatRule请求参数结构体
 */
export interface ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /**
   * NAT网关的ID，形如：`nat-df45454`。
   */
  NatGatewayId: string
  /**
   * 源NAT网关的端口转换规则。
   */
  SourceNatRule: DestinationIpPortTranslationNatRule
  /**
   * 目的NAT网关的端口转换规则。
   */
  DestinationNatRule: DestinationIpPortTranslationNatRule
}

/**
 * DescribeServiceTemplates请求参数结构体
 */
export interface DescribeServiceTemplatesRequest {
  /**
   * 过滤条件。
<li>service-template-name - 协议端口模板名称。</li>
<li>service-template-id - 协议端口模板实例ID，例如：ppm-e6dy460g。</li>
<li>service-port- 协议端口。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
  /**
   * 是否获取协议端口成员标识。
   */
  NeedMemberInfo?: boolean
  /**
   * 排序字段。支持：`ServiceTemplateId ` `CreatedTime` `UpdateTime`。注意：该字段没有默认值。
   */
  OrderField?: string
  /**
   * 排序方法。升序：`ASC`，倒序：`DESC`。注意：该字段没有默认值。
   */
  OrderDirection?: string
  /**
   * 协议端口排序字段。支持：`Service ` `UpdateTime`。注意：该字段没有默认值。
   */
  MemberOrderField?: string
  /**
   * 协议端口排序方法。升序：`ASC`，倒序：`DESC`。注意：该字段没有默认值。
   */
  MemberOrderDirection?: string
}

/**
 * ModifyPrivateNatGatewayTranslationNatRule返回参数结构体
 */
export interface ModifyPrivateNatGatewayTranslationNatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 协议端口模板
 */
export interface ServiceTemplateSpecification {
  /**
   * 协议端口ID，例如：ppm-f5n1f8da。
   */
  ServiceId: string
  /**
   * 协议端口组ID，例如：ppmg-f5n1f8da。
   */
  ServiceGroupId: string
}

/**
 * ResetTrafficMirrorTarget请求参数结构体
 */
export interface ResetTrafficMirrorTargetRequest {
  /**
   * 流量镜像实例ID
   */
  TrafficMirrorId: string
  /**
   * 流量镜像的接收目的信息
   */
  CollectorTarget: TrafficMirrorTarget
  /**
   * 公网IP类型的流量镜像采集流量的发送端所属子网
   */
  SubnetId?: string
}

/**
 * DetachNetworkInterface请求参数结构体
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string
  /**
   * CVM实例ID。形如：ins-r8hr2upy。
   */
  InstanceId: string
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * DescribeSnapshotAttachedInstances返回参数结构体
 */
export interface DescribeSnapshotAttachedInstancesResponse {
  /**
   * 实例列表
   */
  InstanceSet: Array<SnapshotInstance>
  /**
   * 符合条件的对象数。
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内网保留IP数据
 */
export interface ReserveIpAddressInfo {
  /**
   * 内网保留IP唯一 ID。
   */
  ReserveIpId?: string
  /**
   * VPC唯一 ID。
   */
  VpcId?: string
  /**
   * 子网唯一 ID。
   */
  SubnetId?: string
  /**
   * 内网保留IP地址。
   */
  ReserveIpAddress?: string
  /**
   * 内网保留 IP绑定的资源实例 ID。
   */
  ResourceId?: string
  /**
   * 产品申请的IpType。
   */
  IpType?: number
  /**
   * 绑定状态，UnBind-未绑定， Bind-绑定。
   */
  State?: string
  /**
   * 保留 IP名称。
   */
  Name?: string
  /**
   * 保留 IP描述。
   */
  Description?: string
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
}

/**
 * IPV6转换规则
 */
export interface Ip6Rule {
  /**
   * IPV6转换规则唯一ID，形如rule6-xxxxxxxx
   */
  Ip6RuleId?: string
  /**
   * IPV6转换规则名称
   */
  Ip6RuleName?: string
  /**
   * IPV6地址
   */
  Vip6?: string
  /**
   * IPV6端口号
   */
  Vport6?: number
  /**
   * 协议类型，支持TCP/UDP
   */
  Protocol?: string
  /**
   * IPV4地址
   */
  Vip?: string
  /**
   * IPV4端口号
   */
  Vport?: number
  /**
   * 转换规则状态，限于CREATING,RUNNING,DELETING,MODIFYING
   */
  RuleStatus?: string
  /**
   * 转换规则创建时间
   */
  CreatedTime?: string
}

/**
 * AttachClassicLinkVpc返回参数结构体
 */
export interface AttachClassicLinkVpcResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadVpnGatewaySslClientCert请求参数结构体
 */
export interface DownloadVpnGatewaySslClientCertRequest {
  /**
   * SSL-VPN-CLIENT 实例ID。不可以和SslVpnClientIds同时使用。
   */
  SslVpnClientId?: string
  /**
   * SAML Token（SAML令牌）。
   */
  SamlToken?: string
  /**
   * VPN门户网站使用。默认False
   */
  IsVpnPortal?: boolean
  /**
   * SSL-VPN-CLIENT 实例ID列表。批量下载时使用。不可以和SslVpnClientId同时使用。
   */
  SslVpnClientIds?: Array<string>
}

/**
 * CreateAddressTemplate请求参数结构体
 */
export interface CreateAddressTemplateRequest {
  /**
   * IP地址模板名称。
   */
  AddressTemplateName: string
  /**
   * 地址信息，支持 IP、CIDR、IP 范围。Addresses与AddressesExtra必填其一。
   */
  Addresses?: Array<string>
  /**
   * 地址信息，支持携带备注，支持 IP、CIDR、IP 范围。Addresses与AddressesExtra必填其一。
   */
  AddressesExtra?: Array<AddressInfo>
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * DescribeNatGateways返回参数结构体
 */
export interface DescribeNatGatewaysResponse {
  /**
   * NAT网关对象数组。
   */
  NatGatewaySet?: Array<NatGateway>
  /**
   * 符合条件的NAT网关对象个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTrafficMirrorAttribute请求参数结构体
 */
export interface ModifyTrafficMirrorAttributeRequest {
  /**
   * 流量镜像实例ID
   */
  TrafficMirrorId: string
  /**
   * 流量镜像实例名称
   */
  TrafficMirrorName?: string
  /**
   * 流量镜像实例描述信息
   */
  TrafficMirrorDescription?: string
}

/**
 * ModifyDhcpIpAttribute返回参数结构体
 */
export interface ModifyDhcpIpAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrivateNatGateway返回参数结构体
 */
export interface CreatePrivateNatGatewayResponse {
  /**
   * 私网网关对象。
   */
  PrivateNatGatewaySet?: Array<PrivateNatGateway>
  /**
   * 创建实例个数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRouteTableSelectionPolicies返回参数结构体
 */
export interface ModifyRouteTableSelectionPoliciesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachNetworkInterface请求参数结构体
 */
export interface AttachNetworkInterfaceRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string
  /**
   * CVM实例ID。形如：ins-r8hr2upy。
   */
  InstanceId: string
  /**
   * 网卡的挂载类型：0 标准型，1扩展型，默认值0。
   */
  AttachType?: number
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * DescribeCcnRoutes返回参数结构体
 */
export interface DescribeCcnRoutesResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * CCN路由策略对象。
   */
  RouteSet?: Array<CcnRoute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcs返回参数结构体
 */
export interface DescribeVpcsResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * VPC对象。
   */
  VpcSet?: Array<Vpc>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云联网实例对象，该对象特用于运营端使用，不建议给租户的接口中提供该复杂类型。
 */
export interface CcnInstanceInfo {
  /**
   * 云联网唯一ID。
   */
  CcnId?: string
}

/**
 * 安全组对象
 */
export interface SecurityGroup {
  /**
   * 安全组实例ID，例如：sg-ohuuioma。
   */
  SecurityGroupId: string
  /**
   * 安全组名称，可任意命名，但不得超过60个字符。
   */
  SecurityGroupName: string
  /**
   * 安全组备注，最多100个字符。
   */
  SecurityGroupDesc: string
  /**
   * 项目id，默认0。可在qcloud控制台项目管理页面查询到。
   */
  ProjectId?: string
  /**
   * 是否是默认安全组，默认安全组不支持删除。
   */
  IsDefault?: boolean
  /**
   * 安全组创建时间。
   */
  CreatedTime?: string
  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
  /**
   * 安全组更新时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
}

/**
 * UnlockCcns返回参数结构体
 */
export interface UnlockCcnsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRouteList请求参数结构体
 */
export interface DescribeRouteListRequest {
  /**
   * <li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>gateway-id - String - （过滤条件）网关ID。</li>
<li>description - String - （过滤条件）路由描述。</li>
<li>route-table-id - String - （过滤条件）路由表实例ID。</li>
<li>dest-cidr - String - （过滤条件）目的端地址，支持模糊左匹配。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量。
   */
  Offset?: number
  /**
   * 请求对象个数。
   */
  Limit?: number
}

/**
 * DisableGatewayFlowMonitor返回参数结构体
 */
export interface DisableGatewayFlowMonitorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateAddress返回参数结构体
 */
export interface DisassociateAddressResponse {
  /**
   * 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrafficPackages返回参数结构体
 */
export interface DescribeTrafficPackagesResponse {
  /**
   * 按照条件查询出来的流量包数量
   */
  TotalCount?: number
  /**
   * 流量包信息
   */
  TrafficPackageSet?: Array<TrafficPackage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpnGatewayRoutes请求参数结构体
 */
export interface DescribeVpnGatewayRoutesRequest {
  /**
   * VPN网关实例ID。
   */
  VpnGatewayId: string
  /**
   * 过滤条件,  条件包括(DestinationCidr, InstanceId,InstanceType)。
   */
  Filters?: Array<Filter>
  /**
   * 偏移量, 默认0。
   */
  Offset?: number
  /**
   * 单页个数, 默认20, 最大值100。
   */
  Limit?: number
}

/**
 * GetCcnRegionBandwidthLimits返回参数结构体
 */
export interface GetCcnRegionBandwidthLimitsResponse {
  /**
   * 云联网（CCN）各地域出带宽详情。
   */
  CcnBandwidthSet?: Array<CcnBandwidthInfo>
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRoutes请求参数结构体
 */
export interface DeleteRoutesRequest {
  /**
   * 路由表实例ID。
   */
  RouteTableId: string
  /**
   * 路由策略对象，删除路由策略时，仅需使用Route的RouteId字段。
   */
  Routes?: Array<Route>
}

/**
 * AssociateAddress请求参数结构体
 */
export interface AssociateAddressRequest {
  /**
   * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。
   */
  AddressId: string
  /**
   * 要绑定的实例 ID。实例 ID 形如：`ins-11112222`、`lb-11112222`。可通过登录[控制台](https://console.cloud.tencent.com/cvm)查询，也可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。
   */
  InstanceId?: string
  /**
   * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：`eni-11112222`。`NetworkInterfaceId` 与 `InstanceId` 不可同时指定。弹性网卡 ID 可通过登录[控制台](https://console.cloud.tencent.com/vpc/eni)查询，也可通过[DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/15817)接口返回值中的`networkInterfaceId`获取。
   */
  NetworkInterfaceId?: string
  /**
   * 要绑定的内网 IP。如果指定了 `NetworkInterfaceId` 则也必须指定 `PrivateIpAddress` ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 `PrivateIpAddress` 是指定的 `NetworkInterfaceId` 上的一个内网 IP。指定弹性网卡的内网 IP 可通过登录[控制台](https://console.cloud.tencent.com/vpc/eni)查询，也可通过[DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/15817)接口返回值中的`privateIpAddress`获取。
   */
  PrivateIpAddress?: string
  /**
   * 指定绑定时是否设置直通。弹性公网 IP 直通请参见 [EIP 直通](https://cloud.tencent.com/document/product/1199/41709)。取值：True、False，默认值为 False。当绑定 CVM 实例、EKS 弹性集群时，可设定此参数为 True。此参数目前处于内测中，如需使用，请提交 [工单申请](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20CLB&level3_id=1071&queue=96&scene_code=34639&step=2)。
   */
  EipDirectConnection?: boolean
  /**
   * 要绑定的实例所在地域。默认无需填写，仅限GAAP特殊场景需指定实例所在地域。
   */
  InstanceRegion?: string
}

/**
 * 路由表选择策略信息
 */
export interface RouteSelectionPolicy {
  /**
   * 云联网ID。
   */
  CcnId?: string
  /**
   * 路由表ID。
   */
  RouteTableId?: string
  /**
   * 路由表名称。
   */
  RouteTableName?: string
  /**
   * 实例类型。如VPC
   */
  InstanceType?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 源端cidr。
   */
  SourceCidrBlock?: string
  /**
   * 路由表描述。
   */
  Description?: string
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 关联实例所属UIN（根账号）。
   */
  InstanceUin?: string
}

/**
 * 云联网（CCN）地域出带宽上限
 */
export interface CcnRegionBandwidthLimit {
  /**
   * 地域，例如：ap-guangzhou
   */
  Region: string
  /**
   * 出带宽上限，单位：Mbps
   */
  BandwidthLimit: number
  /**
   * 是否黑石地域，默认`false`。
   */
  IsBm?: boolean
  /**
   * 目的地域，例如：ap-shanghai
   */
  DstRegion?: string
  /**
   * 目的地域是否为黑石地域，默认`false`。
   */
  DstIsBm?: boolean
}

/**
 * ModifyCcnRouteTables请求参数结构体
 */
export interface ModifyCcnRouteTablesRequest {
  /**
   * 需要修改的路由表列表。
   */
  RouteTableInfo: Array<ModifyRouteTableInfo>
}

/**
 * ResetAttachCcnInstances请求参数结构体
 */
export interface ResetAttachCcnInstancesRequest {
  /**
   * CCN实例ID。形如：ccn-f49l6u0z。
   */
  CcnId: string
  /**
   * CCN所属UIN（根账号）。
   */
  CcnUin: string
  /**
   * 重新申请关联网络实例列表。
   */
  Instances: Array<CcnInstance>
}

/**
 * UnlockCcnBandwidths返回参数结构体
 */
export interface UnlockCcnBandwidthsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDefaultSecurityGroup返回参数结构体
 */
export interface CreateDefaultSecurityGroupResponse {
  /**
   * 安全组对象。
   */
  SecurityGroup?: SecurityGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私有网络和基础网络互通设备
 */
export interface ClassicLinkInstance {
  /**
   * VPC实例ID
   */
  VpcId?: string
  /**
   * 云服务器实例唯一ID
   */
  InstanceId?: string
}

/**
 * DeleteLocalGateway返回参数结构体
 */
export interface DeleteLocalGatewayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHighPriorityRouteTables请求参数结构体
 */
export interface DescribeHighPriorityRouteTablesRequest {
  /**
   * 过滤条件，参数不支持同时指定HighPriorityRouteTableIds和Filters。
<li>high-priority-route-table-id - String - （过滤条件）高优路由表实例ID。</li>
<li>name - String - （过滤条件）高优路由表名称。</li>
<li>vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。</li>
<li>tag-key - String -是否必填：否 - （过滤条件）按照标签键进行过滤。</li>
<li>next-hop-type - String - 是否必填：否 - （过滤条件）按下一跳类型进行过滤。使用next-hop-type进行过滤时，必须同时携带route-table-id与vpc-id。
目前我们支持的类型有：
HAVIP：高可用虚拟IP；
NORMAL_CVM：普通云服务器；
</li>
   */
  Filters?: Array<Filter>
  /**
   * 高优路由表实例ID，例如：hprtb-18mot1fm。
   */
  HighPriorityRouteTableIds?: Array<string>
  /**
   * 偏移量。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
  /**
   * 是否需要获取路由策略信息，默认获取，当控制台不需要拉取路由策略信息时，改为False。
   */
  NeedRouterInfo?: boolean
}

/**
 * 快照文件信息
 */
export interface SnapshotFileInfo {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId: string
  /**
   * 实例Id。
   */
  InstanceId: string
  /**
   * 快照文件Id。
   */
  SnapshotFileId: string
  /**
   * 备份时间。
   */
  BackupTime: string
  /**
   * 操作者Uin。
   */
  Operator: string
}

/**
 * 云联网路由表信息
 */
export interface ModifyRouteTableInfo {
  /**
   * 云联网路由表id。
   */
  RouteTableId: string
  /**
   * 云联网路由表名称。Name和Description 两者必传一个。
   */
  Name?: string
  /**
   * 云联网路由表描述。Name和Description 两者必传一个。
   */
  Description?: string
}

/**
 * ModifyNetworkInterfaceAttribute请求参数结构体
 */
export interface ModifyNetworkInterfaceAttributeRequest {
  /**
   * 弹性网卡实例ID，例如：eni-pxir56ns。
   */
  NetworkInterfaceId: string
  /**
   * 弹性网卡名称，最大长度不能超过60个字节。
   */
  NetworkInterfaceName?: string
  /**
   * 弹性网卡描述，可任意命名，但不得超过60个字符。
   */
  NetworkInterfaceDescription?: string
  /**
   * 指定绑定的安全组，例如:['sg-1dd51d']。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 网卡trunking模式设置，Enable-开启，Disable--关闭，默认关闭。
   */
  TrunkingFlag?: string
}

/**
 * DescribeTrafficQosPolicy返回参数结构体
 */
export interface DescribeTrafficQosPolicyResponse {
  /**
   * 流量调度规则。
   */
  TrafficQosPolicySet?: Array<TrafficQosPolicySet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTemplateMember返回参数结构体
 */
export interface ModifyTemplateMemberResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHaVipAttribute请求参数结构体
 */
export interface ModifyHaVipAttributeRequest {
  /**
   * `HAVIP`唯一`ID`，形如：`havip-9o233uri`。
   */
  HaVipId: string
  /**
   * `HAVIP`名称，可任意命名，但不得超过60个字符。
   */
  HaVipName?: string
}

/**
 * ModifyAddressTemplateGroupAttribute返回参数结构体
 */
export interface ModifyAddressTemplateGroupAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私有网络配额
 */
export interface VpcLimit {
  /**
   * 私有网络配额描述
   */
  LimitType?: string
  /**
   * 私有网络配额值
   */
  LimitValue?: number
}

/**
 * NAT地域地区对象
 */
export type NatRegionInfoWithArea = null

/**
 * DetachClassicLinkVpc返回参数结构体
 */
export interface DetachClassicLinkVpcResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnassignPrivateIpAddresses请求参数结构体
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string
  /**
   * 指定的内网IP信息，单次最多指定10个。
   */
  PrivateIpAddresses: Array<PrivateIpAddressSpecification>
  /**
   * 网卡绑定的子机实例ID，该参数仅用于指定网卡退还IP并解绑子机的场景，如果不涉及解绑子机，请勿填写。
   */
  InstanceId?: string
}

/**
 * DeleteVpnGatewayRoutes请求参数结构体
 */
export interface DeleteVpnGatewayRoutesRequest {
  /**
   * VPN网关实例ID
   */
  VpnGatewayId: string
  /**
   * 路由ID信息列表，可以通过[DescribeVpnGatewayRoutes](https://cloud.tencent.com/document/api/215/57676)接口查询。
   */
  RouteIds: Array<string>
}

/**
 * DescribeProductQuota请求参数结构体
 */
export interface DescribeProductQuotaRequest {
  /**
   * 查询的网络产品名称，可查询的产品有：vpc、ccn、vpn、dc、dfw、clb、eip。
   */
  Product: string
}

/**
 * ModifyNetDetect返回参数结构体
 */
export interface ModifyNetDetectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHaVip请求参数结构体
 */
export interface CreateHaVipRequest {
  /**
   * `HAVIP`所在私有网络`ID`。
   */
  VpcId: string
  /**
   * `HAVIP`名称。
   */
  HaVipName: string
  /**
   * `HAVIP`所在子网`ID`。
   */
  SubnetId?: string
  /**
   * 指定虚拟IP地址，必须在`VPC`网段内且未被占用。不指定则自动分配。
   */
  Vip?: string
  /**
   * `HAVIP`所在弹性网卡`ID`。
   */
  NetworkInterfaceId?: string
  /**
   * 是否开启`HAVIP`漂移时子机或网卡范围的校验。默认不开启。
   */
  CheckAssociate?: boolean
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
  /**
   * HaVip绑定的子机或网卡。最多支持10个实例。
   */
  HaVipAssociationSet?: Array<HaVipAssociation>
  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string
}

/**
 * IPv6子网段对象。
 */
export interface Ipv6SubnetCidrBlock {
  /**
   * 子网实例`ID`。形如：`subnet-pxir56ns`。
   */
  SubnetId: string
  /**
   * `IPv6`子网段。形如：`3402:4e00:20:1001::/64`。作为AssignIpv6SubnetCidrBlock接口入参时，该参数必填。
   */
  Ipv6CidrBlock?: string
}

/**
 * EnableFlowLogs返回参数结构体
 */
export interface EnableFlowLogsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流量镜像采集目标类型
 */
export interface TrafficMirrorTarget {
  /**
   * 流量镜像的接收IP
   */
  TargetIps?: Array<string>
  /**
   * 流量镜像接收IP组，均衡规则，支持ENI/FIVE_TUPLE_FLOW（vpc），FIVE_TUPLE_FLOW（公网IP）
   */
  AlgHash?: string
  /**
   * 流量镜像的接收endpoint（公网IP）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetEndPoints?: Array<string>
  /**
   * 流量镜像的接收类型，分别为：IP/ENI/CLB
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetType?: string
}

/**
 * DeletePrivateNatGatewayTranslationAclRule请求参数结构体
 */
export interface DeletePrivateNatGatewayTranslationAclRuleRequest {
  /**
   * 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。
   */
  NatGatewayId: string
  /**
   * 转换规则目标，可选值"LOCAL"。
   */
  TranslationDirection: string
  /**
   * 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。
   */
  TranslationType: string
  /**
   * 转换`IP`,当转换规则类型为四层时为`IP`池
   */
  TranslationIp: string
  /**
   * 访问控制规则对应`ID`
   */
  AclRuleIds: Array<number | bigint>
  /**
   * 源`IP`,当转换规则类型为三层时有效
   */
  OriginalIp?: string
}

/**
 * DescribeAddressQuota返回参数结构体
 */
export interface DescribeAddressQuotaResponse {
  /**
   * 账户 EIP 配额信息。
   */
  QuotaSet?: Array<Quota>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrivateNatGatewayLimits请求参数结构体
 */
export interface DescribePrivateNatGatewayLimitsRequest {
  /**
   * 查询VPC下可创建的私网网关配额数量，可选值：
<li>VpcId - String - 所在VpcId</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 返回数目，默认值为20。
   */
  Limit?: number
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
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
  /**
   * BGP ASN。ASN取值范围为1- 4294967295，其中139341、45090和58835不可用。
   */
  BgpAsn?: number
}

/**
 * DeleteSecurityGroup请求参数结构体
 */
export interface DeleteSecurityGroupRequest {
  /**
   * 安全组实例ID，例如sg-33ocnj9n，可通过<a href="https://cloud.tencent.com/document/product/215/15808">DescribeSecurityGroups</a>获取。
   */
  SecurityGroupId: string
}

/**
 * 合规化审批单
 */
export interface CrossBorderCompliance {
  /**
   * 服务商，可选值：`UNICOM`。
   */
  ServiceProvider?: string
  /**
   * 合规化审批单`ID`。
   */
  ComplianceId?: number
  /**
   * 公司全称。
   */
  Company?: string
  /**
   * 统一社会信用代码。
   */
  UniformSocialCreditCode?: string
  /**
   * 法定代表人。
   */
  LegalPerson?: string
  /**
   * 发证机关。
   */
  IssuingAuthority?: string
  /**
   * 营业执照。
   */
  BusinessLicense?: string
  /**
   * 营业执照住所。
   */
  BusinessAddress?: string
  /**
   * 邮编。
   */
  PostCode?: number
  /**
   * 经办人。
   */
  Manager?: string
  /**
   * 经办人身份证号。
   */
  ManagerId?: string
  /**
   * 经办人身份证。
   */
  ManagerIdCard?: string
  /**
   * 经办人身份证地址。
   */
  ManagerAddress?: string
  /**
   * 经办人联系电话。
   */
  ManagerTelephone?: string
  /**
   * 电子邮箱。
   */
  Email?: string
  /**
   * 服务受理单。
   */
  ServiceHandlingForm?: string
  /**
   * 授权函。
   */
  AuthorizationLetter?: string
  /**
   * 信息安全承诺书。
   */
  SafetyCommitment?: string
  /**
   * 服务开始时间。
   */
  ServiceStartDate?: string
  /**
   * 服务截止时间。
   */
  ServiceEndDate?: string
  /**
   * 状态。待审批：`PENDING`，已通过：`APPROVED`，已拒绝：`DENY`。
   */
  State?: string
  /**
   * 审批单创建时间。
   */
  CreatedTime?: string
  /**
   * 法定代表人身份证号。
   */
  LegalPersonId?: string
  /**
   * 法定代表人身份证。
   */
  LegalPersonIdCard?: string
}

/**
 * CreateTrafficMirror请求参数结构体
 */
export interface CreateTrafficMirrorRequest {
  /**
   * VPC实例ID。
   */
  VpcId: string
  /**
   * 流量镜像名字。
   */
  TrafficMirrorName: string
  /**
   * 流量镜像描述。
   */
  TrafficMirrorDescribe?: string
  /**
   * 流量镜像状态, 支持RUNNING/STOPED（vpc），RUNNING（公网IP），当采集vpc流量镜像时，此参数为必填。
   */
  State?: string
  /**
   * 流量镜像采集方向，支持EGRESS/INGRESS/ALL（vpc），ALL（公网IP）。
   */
  Direction?: string
  /**
   * 流量镜像的采集对象。
   */
  CollectorSrcs?: Array<string>
  /**
   * 流量镜像过滤的natgw实例。
   */
  NatId?: string
  /**
   * 需要过滤的五元组规则。
   */
  CollectorNormalFilters?: Array<TrafficMirrorFilter>
  /**
   * 流量镜像的目的地址。
   */
  CollectorTarget?: TrafficMirrorTarget
  /**
   * 流量镜像采集流量的发送端所属子网ID。
   */
  SubnetId?: string
  /**
   * 创建的流量镜像的类型，支持VPC/PUBLICIP，默认为VPC类型。
   */
  Type?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * CreateIp6Translators请求参数结构体
 */
export interface CreateIp6TranslatorsRequest {
  /**
   * 转换实例名称
   */
  Ip6TranslatorName?: string
  /**
   * 创建转换实例数量，默认是1个
   */
  Ip6TranslatorCount?: number
  /**
   * 转换实例运营商属性，可取"CMCC","CTCC","CUCC","BGP"
   */
  Ip6InternetServiceProvider?: string
}

/**
 * DescribeCrossBorderCcnRegionBandwidthLimits请求参数结构体
 */
export interface DescribeCrossBorderCcnRegionBandwidthLimitsRequest {
  /**
   * 过滤条件，目前`value`值个数只支持一个，可支持的字段有：
<li>`source-region` 源地域，值形如：`["ap-guangzhou"]`</li> <li>`destination-region` 目的地域，值形如：`["ap-shanghai"]`</li> <li>`ccn-ids` 云联网ID数组，值形如：`["ccn-12345678"]`</li> <li>`user-account-id` 用户账号ID，值形如`["12345678"]`</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 单页返回数据量可选值0到100之间的整数，默认20。
   */
  Limit?: number
}

/**
 * ReplaceCcnRouteTableBroadcastPolicys请求参数结构体
 */
export interface ReplaceCcnRouteTableBroadcastPolicysRequest {
  /**
   * 云联网ID
   */
  CcnId: string
  /**
   * 云联网路由表ID
   */
  RouteTableId: string
  /**
   * 新的路由传播策略
   */
  Policys: Array<CcnRouteTableBroadcastPolicy>
}

/**
 * UnlockCcns请求参数结构体
 */
export type UnlockCcnsRequest = null

/**
 * DescribeSnapshotAttachedInstances请求参数结构体
 */
export interface DescribeSnapshotAttachedInstancesRequest {
  /**
   * 快照策略Id。
   */
  SnapshotPolicyId: string
  /**
   * 过滤条件。
支持的过滤条件如下：
<li>instance-id：实例ID。</li>
<li>instance-region：实例所在地域。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大为200。
   */
  Limit?: number
}

/**
 * DescribeDirectConnectGatewayCcnRoutes返回参数结构体
 */
export interface DescribeDirectConnectGatewayCcnRoutesResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number
  /**
   * 云联网路由（IDC网段）列表。
   */
  RouteSet?: Array<DirectConnectGatewayCcnRoute>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrivateIpAddressesAttribute请求参数结构体
 */
export interface ModifyPrivateIpAddressesAttributeRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string
  /**
   * 指定的内网IP信息。
   */
  PrivateIpAddresses: Array<PrivateIpAddressSpecification>
}

/**
 * ResetNatGatewayConnection返回参数结构体
 */
export interface ResetNatGatewayConnectionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateTrafficMirrorAllFilter返回参数结构体
 */
export interface UpdateTrafficMirrorAllFilterResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateNetworkInterfaceSecurityGroups请求参数结构体
 */
export interface AssociateNetworkInterfaceSecurityGroupsRequest {
  /**
   * 弹性网卡实例ID。形如：eni-pxir56ns。每次请求的实例的上限为100。本接口不支持主网卡绑定安全组。
   */
  NetworkInterfaceIds: Array<string>
  /**
   * 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。
   */
  SecurityGroupIds: Array<string>
}

/**
 * DeleteVpnGatewayRoutes返回参数结构体
 */
export interface DeleteVpnGatewayRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteHighPriorityRouteTables返回参数结构体
 */
export interface DeleteHighPriorityRouteTablesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityGroup请求参数结构体
 */
export interface CreateSecurityGroupRequest {
  /**
   * 安全组名称，可任意命名，但不得超过60个字符。
   */
  GroupName: string
  /**
   * 安全组备注，最多100个字符。
   */
  GroupDescription: string
  /**
   * 项目ID，默认0。可在<a href="https://console.cloud.tencent.com/project">控制台项目管理页面</a>查询到。
   */
  ProjectId?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * ModifyCcnAttribute返回参数结构体
 */
export interface ModifyCcnAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupLimits请求参数结构体
 */
export type DescribeSecurityGroupLimitsRequest = null

/**
 * DescribeClassicLinkInstances请求参数结构体
 */
export interface DescribeClassicLinkInstancesRequest {
  /**
   * 过滤条件。
<li>vpc-id - String - （过滤条件）VPC实例ID。</li>
<li>vm-ip - String - （过滤条件）基础网络云服务器IP。</li>
   */
  Filters?: Array<FilterObject>
  /**
   * 偏移量，默认值0。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
}

/**
 * ReleaseIp6AddressesBandwidth请求参数结构体
 */
export interface ReleaseIp6AddressesBandwidthRequest {
  /**
   * IPv6地址。Ip6Addresses和Ip6AddressIds必须且只能传一个
   */
  Ip6Addresses?: Array<string>
  /**
   * IPv6地址对应的唯一ID，形如eip-xxxxxxxx。Ip6Addresses和Ip6AddressIds必须且只能传一个。
   */
  Ip6AddressIds?: Array<string>
}

/**
 * CreateServiceTemplate返回参数结构体
 */
export interface CreateServiceTemplateResponse {
  /**
   * 协议端口模板对象。
   */
  ServiceTemplate?: ServiceTemplate
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNetworkInterface返回参数结构体
 */
export interface DeleteNetworkInterfaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableCcnRoutes返回参数结构体
 */
export interface DisableCcnRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCcnRegionBandwidthLimits请求参数结构体
 */
export interface DescribeCcnRegionBandwidthLimitsRequest {
  /**
   * CCN实例ID，形如：ccn-f49l6u0z。
   */
  CcnId: string
}

/**
 * InquiryPriceCreateVpnGateway请求参数结构体
 */
export interface InquiryPriceCreateVpnGatewayRequest {
  /**
   * 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100, 200, 500, 1000, 3000；单位：Mbps。
   */
  InternetMaxBandwidthOut: number
  /**
   * VPN网关计费模式，PREPAID：表示预付费，即包年包月，POSTPAID_BY_HOUR：表示后付费，即按量计费。默认：POSTPAID_BY_HOUR，如果指定预付费模式，参数InstanceChargePrepaid必填。
   */
  InstanceChargeType?: string
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid
  /**
   * SSL VPN连接数设置，可选规格：5, 10, 20, 50, 100, 200, 500, 1000；单位：个。
   */
  MaxConnection?: number
  /**
   * 查询的VPN类型，支持IPSEC、SSL两种类型，为SSL类型时，MaxConnection参数必传。
   */
  Type?: string
}

/**
 * VPN通道健康检查配置
 */
export interface HealthCheckConfig {
  /**
   * 探测模式，默认值NQA，不可修改。
   */
  ProbeType?: string
  /**
   * 探测间隔，腾讯云两次健康检查间隔时间，范围【1000-5000】，单位ms。
   */
  ProbeInterval?: number
  /**
   * 探测次数，连续N次健康检查失败后执行路由切换，范围【3-8】，单位次。
   */
  ProbeThreshold?: number
  /**
   * 探测超时时间，范围【10-5000】，单位ms。
   */
  ProbeTimeout?: number
}

/**
 * 云联网（CCN）关联实例（Instance）对象
 */
export interface CcnAttachedInstance {
  /**
   * 云联网实例ID。
   */
  CcnId?: string
  /**
   * 关联实例类型：
<li>`VPC`：私有网络</li>
<li>`DIRECTCONNECT`：专线网关</li>
<li>`BMVPC`：黑石私有网络</li>
   */
  InstanceType?: string
  /**
   * 关联实例ID。
   */
  InstanceId?: string
  /**
   * 关联实例名称。
   */
  InstanceName?: string
  /**
   * 关联实例所属大区，例如：ap-guangzhou。
   */
  InstanceRegion?: string
  /**
   * 关联实例所属UIN（根账号）。
   */
  InstanceUin?: string
  /**
   * 关联实例CIDR。
   */
  CidrBlock?: Array<string>
  /**
   * 关联实例状态：
<li>`PENDING`：申请中</li>
<li>`ACTIVE`：已连接</li>
<li>`EXPIRED`：已过期</li>
<li>`REJECTED`：已拒绝</li>
<li>`DELETED`：已删除</li>
<li>`FAILED`：失败的（2小时后将异步强制解关联）</li>
<li>`ATTACHING`：关联中</li>
<li>`DETACHING`：解关联中</li>
<li>`DETACHFAILED`：解关联失败（2小时后将异步强制解关联）</li>
   */
  State?: string
  /**
   * 关联时间。
   */
  AttachedTime?: string
  /**
   * 云联网所属UIN（根账号）。
   */
  CcnUin?: string
  /**
   * 关联实例所属的大地域，如: CHINA_MAINLAND
   */
  InstanceArea?: string
  /**
   * 备注
   */
  Description?: string
  /**
   * 路由表ID
   */
  RouteTableId?: string
  /**
   * 路由表名称
   */
  RouteTableName?: string
}

/**
 * CreateAssistantCidr返回参数结构体
 */
export interface CreateAssistantCidrResponse {
  /**
   * 辅助CIDR数组。
   */
  AssistantCidrSet?: Array<AssistantCidr>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 对端网关厂商信息对象。
 */
export interface CustomerGatewayVendor {
  /**
   * 平台。
   */
  Platform: string
  /**
   * 软件版本。
   */
  SoftwareVersion: string
  /**
   * 供应商名称。
   */
  VendorName: string
}

/**
 * DescribeAddressTemplates请求参数结构体
 */
export interface DescribeAddressTemplatesRequest {
  /**
   * 过滤条件。
<li>address-template-name - IP地址模板名称。</li>
<li>address-template-id - IP地址模板实例ID，例如：ipm-mdunqeb6。</li>
<li>address-ip - IP地址。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
  /**
   * 是否获取IP地址模板成员标识。
   */
  NeedMemberInfo?: boolean
  /**
   * 排序字段。支持：`AddressTemplateId` `CreatedTime` `UpdateTime`。注意：该字段没有默认值。
   */
  OrderField?: string
  /**
   * 排序方法。升序：`ASC`，倒序：`DESC`。注意：该字段没有默认值。
   */
  OrderDirection?: string
  /**
   * IP成员排序字段。支持：`Address` `UpdateTime`。注意：该字段没有默认值。
   */
  MemberOrderField?: string
  /**
   * IP成员排序方法。升序：`ASC`，倒序：`DESC`。注意：该字段没有默认值。
   */
  MemberOrderDirection?: string
}

/**
 * 冲突资源信息。
 */
export interface ConflictSource {
  /**
   * 冲突资源ID
   */
  ConflictSourceId?: string
  /**
   * 冲突资源
   */
  SourceItem?: string
  /**
   * 冲突资源条目信息
   */
  ConflictItemSet?: Array<ConflictItem>
}

/**
 * CreateDhcpIp请求参数结构体
 */
export interface CreateDhcpIpRequest {
  /**
   * 私有网络`ID`。
   */
  VpcId: string
  /**
   * 子网`ID`。
   */
  SubnetId: string
  /**
   * `DhcpIp`名称。
   */
  DhcpIpName: string
  /**
   * 新申请的内网IP地址个数。总数不能超过64个，为了兼容性，当前参数必填。
   */
  SecondaryPrivateIpAddressCount?: number
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * EnableRoutes请求参数结构体
 */
export interface EnableRoutesRequest {
  /**
   * 路由表唯一ID。
   */
  RouteTableId: string
  /**
   * 路由策略ID。不能和RouteItemIds同时使用，但至少输入一个。单次处理上限100个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。
   */
  RouteIds?: Array<number | bigint>
  /**
   * 路由策略唯一ID。不能和RouteIds同时使用，但至少输入一个。单次处理上限100个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。
   */
  RouteItemIds?: Array<string>
}

/**
 * DeleteTrafficPackages返回参数结构体
 */
export interface DeleteTrafficPackagesResponse {
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
   * 对端网关ID，例如：cgw-2wqq41m9，可通过[DescribeCustomerGateways](https://cloud.tencent.com/document/api/215/17516)接口查询对端网关。
   */
  CustomerGatewayId: string
}

/**
 * LockCcnBandwidths返回参数结构体
 */
export interface LockCcnBandwidthsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddressTemplates返回参数结构体
 */
export interface DescribeAddressTemplatesResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * IP地址模板。
   */
  AddressTemplateSet?: Array<AddressTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述配额信息
 */
export interface Quota {
  /**
   * 配额名称，取值范围：
- `TOTAL_EIP_QUOTA`：用户当前地域下EIP的配额数；
- `DAILY_EIP_APPLY`：用户当前地域下今日申购次数；
- `DAILY_PUBLIC_IP_ASSIGN`：用户当前地域下，重新分配公网 IP次数；
- `TOTAL_EIP6_QUOTA`：用户当前地域下，传统弹性公网IPv6的配额数；
- `BGP_EIPv6_QUOTA`：用户当前地域下，可申请的 BGP 弹性公网IPv6 的配额数；
- `SINGLEISP_EIPv6_QUOTA`：用户当前地域下，可申请的静态单线弹性公网IPv6 的配额数；
   */
  QuotaId?: string
  /**
   * 当前数量
   */
  QuotaCurrent?: number
  /**
   * 配额数量
   */
  QuotaLimit?: number
  /**
   * 配额所属的网络组
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuotaGroup?: string
}

/**
 * WithdrawNotifyRoutes返回参数结构体
 */
export interface WithdrawNotifyRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcceptVpcPeeringConnection请求参数结构体
 */
export interface AcceptVpcPeeringConnectionRequest {
  /**
   * 对等连接唯一ID。
   */
  PeeringConnectionId: string
}

/**
 * CreateCdcNetPlanes请求参数结构体
 */
export type CreateCdcNetPlanesRequest = null

/**
 * CreatePrivateNatGatewayDestinationIpPortTranslationNatRule返回参数结构体
 */
export interface CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTrafficMirror请求参数结构体
 */
export interface DeleteTrafficMirrorRequest {
  /**
   * 流量镜像实例ID
   */
  TrafficMirrorId: string
}

/**
 * ModifyCdcLDCXAttribute返回参数结构体
 */
export interface ModifyCdcLDCXAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetworkInterfaces返回参数结构体
 */
export interface DescribeNetworkInterfacesResponse {
  /**
   * 实例详细信息列表。
   */
  NetworkInterfaceSet?: Array<NetworkInterface>
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
 * DeleteNetworkAcl返回参数结构体
 */
export interface DeleteNetworkAclResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNetworkAclQuintupleEntries返回参数结构体
 */
export interface DeleteNetworkAclQuintupleEntriesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServiceTemplateGroups请求参数结构体
 */
export interface DescribeServiceTemplateGroupsRequest {
  /**
   * 过滤条件。
<li>service-template-group-name - String - （过滤条件）协议端口模板集合名称。</li>
<li>service-template-group-id - String - （过滤条件）协议端口模板集合实例ID，例如：ppmg-e6dy460g。</li>
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0。
   */
  Offset?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: string
  /**
   * 是否获取协议端口模板成员标识。
   */
  NeedMemberInfo?: boolean
  /**
   * 排序字段。支持：`ServiceTemplateGroupId ` `CreatedTime` `UpdateTime`。注意：该字段没有默认值。
   */
  OrderField?: string
  /**
   * 排序方法。升序：`ASC`，倒序：`DESC`。注意：该字段没有默认值。
   */
  OrderDirection?: string
  /**
   * 协议端口成员排序字段。支持：`ServiceTemplateId ` `UpdateTime`。注意：该字段没有默认值。
   */
  MemberOrderField?: string
  /**
   * 协议端口成员排序方法。升序：`ASC`，倒序：`DESC`。注意：该字段没有默认值。
   */
  MemberOrderDirection?: string
}

/**
 * CreateSecurityGroupWithPolicies请求参数结构体
 */
export interface CreateSecurityGroupWithPoliciesRequest {
  /**
   * 安全组名称，可任意命名，但不得超过60个字符。
   */
  GroupName: string
  /**
   * 安全组备注，最多100个字符。
   */
  GroupDescription: string
  /**
   * 项目ID，默认0。可在<a href="https://console.cloud.tencent.com/project">控制台项目管理页面</a>查询到。
   */
  ProjectId?: string
  /**
   * 安全组规则集合。
   */
  SecurityGroupPolicySet?: SecurityGroupPolicySet
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * ReleaseAddresses请求参数结构体
 */
export interface ReleaseAddressesRequest {
  /**
   * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：`eip-11112222`。
   */
  AddressIds: Array<string>
}

/**
 * CreateVpc请求参数结构体
 */
export interface CreateVpcRequest {
  /**
   * vpc名称，最大长度不能超过60个字节。
   */
  VpcName: string
  /**
   * vpc的cidr，仅能在10.0.0.0/12，172.16.0.0/12，192.168.0.0/16这三个内网网段内。
   */
  CidrBlock: string
  /**
   * 是否开启组播。true: 开启, false: 不开启。
   */
  EnableMulticast?: string
  /**
   * DNS地址，最多支持4个。
   */
  DnsServers?: Array<string>
  /**
   * DHCP使用的域名。
   */
  DomainName?: string
  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。
   */
  Tags?: Array<Tag>
}

/**
 * DescribeSubnetResourceDashboard返回参数结构体
 */
export interface DescribeSubnetResourceDashboardResponse {
  /**
   * 资源统计结果。
   */
  ResourceStatisticsSet?: Array<ResourceStatistics>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteServiceTemplate请求参数结构体
 */
export interface DeleteServiceTemplateRequest {
  /**
   * 协议端口模板实例ID，例如：ppm-e6dy460g。
   */
  ServiceTemplateId: string
}

/**
 * DescribeSecurityGroupAssociationStatistics请求参数结构体
 */
export interface DescribeSecurityGroupAssociationStatisticsRequest {
  /**
   * 安全实例ID，例如sg-33ocnj9n，可通过<a href="https://cloud.tencent.com/document/product/215/15808">DescribeSecurityGroups</a>获取。
   */
  SecurityGroupIds: Array<string>
}

/**
 * NotifyRoutes返回参数结构体
 */
export interface NotifyRoutesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 路由策略对象
 */
export interface Route {
  /**
   * 创建IPv4目的网段，取值不能在私有网络网段内，例如：112.20.51.0/24。
   */
  DestinationCidrBlock: string
  /**
   * 下一跳类型，目前我们支持的类型有：
CVM：公网网关类型的云服务器；
VPN：VPN网关；
DIRECTCONNECT：专线网关；
PEERCONNECTION：对等连接；
HAVIP：高可用虚拟IP；
NAT：公网NAT网关; 
NORMAL_CVM：普通云服务器；
EIP：云服务器的公网IP；
LOCAL_GATEWAY：CDC本地网关；
INTRANAT：私网NAT网关；
USER_CCN；云联网（自定义路由）。

   */
  GatewayType: string
  /**
   * 下一跳地址，这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址。
特殊说明：
GatewayType为NORMAL_CVM时，GatewayId填写实例的内网IP。
GatewayType为EIP时，GatewayId填写0。
   */
  GatewayId: string
  /**
   * 路由策略ID。IPv4路由策略ID是有意义的值，IPv6路由策略是无意义的值0。后续建议完全使用字符串唯一ID `RouteItemId`操作路由策略。
该字段在删除时必填，其他字段无需填写。
   */
  RouteId?: number
  /**
   * 路由策略描述。
   */
  RouteDescription?: string
  /**
   * 是否启用
   */
  Enabled?: boolean
  /**
   * 路由类型，目前我们支持的类型有：
USER：用户路由；
NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；
CCN：云联网路由，系统默认下发，不可编辑与删除。
用户只能添加和操作 USER 类型的路由。
   */
  RouteType?: string
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId?: string
  /**
   * 创建IPv6目的网段，取值不能在私有网络网段内，例如：2402:4e00:1000:810b::/64。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestinationIpv6CidrBlock?: string
  /**
   * 路由唯一策略ID。
   */
  RouteItemId?: string
  /**
   * 路由策略是否发布到云联网。该字段仅做出参使用，作为入参字段时此参数不生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublishedToVbc?: boolean
  /**
   * 路由策略创建时间
   */
  CreatedTime?: string
  /**
   * CDC 集群唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdcId?: string
}

/**
 * EnableVpnGatewaySslClientCert返回参数结构体
 */
export interface EnableVpnGatewaySslClientCertResponse {
  /**
   * 异步任务实例ID。
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
   * 子网实例ID。形如：subnet-pxir56ns。
   */
  SubnetId: string
  /**
   * 子网名称，最大长度不能超过60个字节。
   */
  SubnetName?: string
  /**
   * 子网是否开启广播。
   */
  EnableBroadcast?: string
}

/**
 * RenewAddresses请求参数结构体
 */
export interface RenewAddressesRequest {
  /**
   * EIP唯一标识ID列表，形如'eip-xxxx'
   */
  AddressIds: Array<string>
  /**
   * 续费参数
   */
  AddressChargePrepaid: AddressChargePrepaid
}

/**
 * ModifyVpcEndPointServiceWhiteList返回参数结构体
 */
export interface ModifyVpcEndPointServiceWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateAddress请求参数结构体
 */
export interface DisassociateAddressRequest {
  /**
   * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。
   */
  AddressId: string
  /**
   * 表示解绑 EIP 之后是否分配普通公网 IP。取值范围：<br><li />TRUE：表示解绑 EIP 之后分配普通公网 IP。<br><li />FALSE：表示解绑 EIP 之后不分配普通公网 IP。<br>默认取值：FALSE。<br><br>只有满足以下条件时才能指定该参数：<br><li /> 只有在解绑主网卡的主内网 IP 上的 EIP 时才能指定该参数。<br><li />解绑 EIP 后重新分配普通公网 IP 操作一个账号每天最多操作 10 次；详情可通过 [DescribeAddressQuota](https://cloud.tencent.com/document/api/213/1378) 接口获取。
   */
  ReallocateNormalPublicIp?: boolean
}

/**
 * DescribeCrossBorderFlowMonitor返回参数结构体
 */
export interface DescribeCrossBorderFlowMonitorResponse {
  /**
   * 云联网跨境带宽监控数据
   */
  CrossBorderFlowMonitorData?: Array<CrossBorderFlowMonitorData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBandwidthPackageQuota请求参数结构体
 */
export type DescribeBandwidthPackageQuotaRequest = null

/**
 * DeleteVpc返回参数结构体
 */
export interface DeleteVpcResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceModifyAddressesBandwidth请求参数结构体
 */
export interface InquiryPriceModifyAddressesBandwidthRequest {
  /**
   * EIP唯一ID
   */
  AddressIds: Array<string>
  /**
   * 新带宽值
   */
  InternetMaxBandwidthOut: number
}

/**
 * ReplaceCcnRouteTableInputPolicys请求参数结构体
 */
export interface ReplaceCcnRouteTableInputPolicysRequest {
  /**
   * 云联网ID。
   */
  CcnId: string
  /**
   * 云联网路由表ID。
   */
  RouteTableId: string
  /**
   * 新的路由接收策略。
   */
  Policys: Array<CcnRouteTableInputPolicy>
}

/**
 * 预付费（包年包月）计费对象。
 */
export interface InstanceChargePrepaid {
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36。
   */
  Period: number
  /**
   * 自动续费标识。取值范围： NOTIFY_AND_AUTO_RENEW：通知过期且自动续费， NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费。默认：NOTIFY_AND_AUTO_RENEW
   */
  RenewFlag?: string
}

/**
 * DescribeTemplateLimits请求参数结构体
 */
export type DescribeTemplateLimitsRequest = null

/**
 * AddTemplateMember请求参数结构体
 */
export interface AddTemplateMemberRequest {
  /**
   * 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。
   */
  TemplateId: string
  /**
   * 需要添加的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致。
   */
  TemplateMember: Array<MemberInfo>
}

/**
 * ModifyNetworkInterfaceAttribute返回参数结构体
 */
export interface ModifyNetworkInterfaceAttributeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcEndPointServiceWhiteList返回参数结构体
 */
export interface DescribeVpcEndPointServiceWhiteListResponse {
  /**
   * 白名单对象数组。已废弃
   */
  VpcEndpointServiceUserSet?: Array<VpcEndPointServiceUser>
  /**
   * 白名单对象数组。
   */
  VpcEndPointServiceUserSet?: Array<VpcEndPointServiceUser>
  /**
   * 符合条件的白名单个数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcceptAttachCcnInstances返回参数结构体
 */
export interface AcceptAttachCcnInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsedIpAddress返回参数结构体
 */
export interface DescribeUsedIpAddressResponse {
  /**
   * 占用ip地址的资源信息
   */
  IpAddressStates?: Array<IpAddressStates>
  /**
   * 返回占用资源的个数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetDetects返回参数结构体
 */
export interface DescribeNetDetectsResponse {
  /**
   * 符合条件的网络探测对象数组。
   */
  NetDetectSet?: Array<NetDetect>
  /**
   * 符合条件的网络探测对象数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AuditCrossBorderCompliance请求参数结构体
 */
export interface AuditCrossBorderComplianceRequest {
  /**
   * 服务商, 可选值：`UNICOM`。
   */
  ServiceProvider: string
  /**
   * 表单唯一`ID`。可通过[DescribeCrossBorderCompliance](https://cloud.tencent.com/document/product/215/47838)接口查询ComplianceId信息
   */
  ComplianceId: number
  /**
   * 通过：`APPROVED `，拒绝：`DENY`。
   */
  AuditBehavior: string
}

/**
 * IP地址模板信息
 */
export interface AddressInfo {
  /**
   * ip地址。
   */
  Address: string
  /**
   * 备注。
   */
  Description?: string
  /**
   * 更新时间。
   */
  UpdatedTime?: string
}

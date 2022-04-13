/**
 * DescribeInternetAddressQuota请求参数结构体
 */
export declare type DescribeInternetAddressQuotaRequest = null;
/**
 * bgp参数，包括Asn，AuthKey
 */
export interface BgpPeer {
    /**
      * 用户侧，BGP Asn
      */
    Asn?: number;
    /**
      * 用户侧BGP密钥
      */
    AuthKey?: string;
}
/**
 * 专用通道路由
 */
export interface DirectConnectTunnelRoute {
    /**
      * 专用通道路由ID
      */
    RouteId: string;
    /**
      * 网段CIDR
      */
    DestinationCidrBlock: string;
    /**
      * 路由类型：BGP/STATIC路由
      */
    RouteType: string;
    /**
      * ENABLE：路由启用，DISABLE：路由禁用
      */
    Status: string;
    /**
      * ASPath信息
      */
    ASPath: Array<string>;
    /**
      * 路由下一跳IP
      */
    NextHop: string;
}
/**
 * RejectDirectConnectTunnel请求参数结构体
 */
export interface RejectDirectConnectTunnelRequest {
    /**
      * 无
      */
    DirectConnectTunnelId: string;
}
/**
 * 坐标，经维度描述
 */
export interface Coordinate {
    /**
      * 纬度
      */
    Lat: number;
    /**
      * 经度
      */
    Lng: number;
}
/**
 * CreateDirectConnect返回参数结构体
 */
export interface CreateDirectConnectResponse {
    /**
      * 物理专线的ID。
      */
    DirectConnectIdSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDirectConnectTunnelExtra请求参数结构体
 */
export interface DescribeDirectConnectTunnelExtraRequest {
    /**
      * 专用通道ID
      */
    DirectConnectTunnelId: string;
}
/**
 * DescribePublicDirectConnectTunnelRoutes请求参数结构体
 */
export interface DescribePublicDirectConnectTunnelRoutesRequest {
    /**
      * 专用通道ID
      */
    DirectConnectTunnelId: string;
    /**
      * 过滤条件：
route-type：路由类型，取值：BGP/STATIC
route-subnet：路由cidr，取值如：192.68.1.0/24
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100
      */
    Limit?: number;
}
/**
 * 物理专线信息列表
 */
export interface DirectConnect {
    /**
      * 物理专线ID。
      */
    DirectConnectId: string;
    /**
      * 物理专线的名称。
      */
    DirectConnectName: string;
    /**
      * 物理专线的接入点ID。
      */
    AccessPointId: string;
    /**
      * 物理专线的状态。
申请中：PENDING
申请驳回：REJECTED
待付款：TOPAY
已付款：PAID
建设中：ALLOCATED
已开通：AVAILABLE
删除中 ：DELETING
已删除：DELETED 。
      */
    State: string;
    /**
      * 物理专线创建时间。
      */
    CreatedTime: string;
    /**
      * 物理专线的开通时间。
      */
    EnabledTime: string;
    /**
      * 提供接入物理专线的运营商。ChinaTelecom：中国电信， ChinaMobile：中国移动，ChinaUnicom：中国联通， In-houseWiring：楼内线，ChinaOther：中国其他， InternationalOperator：境外其他。
      */
    LineOperator: string;
    /**
      * 本地数据中心的地理位置。
      */
    Location: string;
    /**
      * 物理专线接入接口带宽，单位为Mbps。
      */
    Bandwidth: number;
    /**
      * 用户侧物理专线接入端口类型,取值：100Base-T：百兆电口,1000Base-T（默认值）：千兆电口,1000Base-LX：千兆单模光口（10千米）,10GBase-T：万兆电口10GBase-LR：万兆单模光口（10千米），默认值，千兆单模光口（10千米）
      */
    PortType: string;
    /**
      * 运营商或者服务商为物理专线提供的电路编码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CircuitCode: string;
    /**
      * 冗余物理专线的ID。
      */
    RedundantDirectConnectId: string;
    /**
      * 物理专线调试VLAN。默认开启VLAN，自动分配VLAN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vlan: number;
    /**
      * 物理专线调试腾讯侧互联IP。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TencentAddress: string;
    /**
      * 物理专线调试用户侧互联IP。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomerAddress: string;
    /**
      * 物理专线申请者姓名。默认从账户体系获取。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomerName: string;
    /**
      * 物理专线申请者联系邮箱。默认从账户体系获取。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomerContactMail: string;
    /**
      * 物理专线申请者联系号码。默认从账户体系获取。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomerContactNumber: string;
    /**
      * 物理专线的过期时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpiredTime: string;
    /**
      * 物理专线计费类型。 NON_RECURRING_CHARGE：一次性接入费用；PREPAID_BY_YEAR：按年预付费。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChargeType: string;
    /**
      * 报障联系人。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FaultReportContactPerson: string;
    /**
      * 报障联系电话。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FaultReportContactNumber: string;
    /**
      * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSet: Array<Tag>;
    /**
      * 物理专线的接入点类型。
      */
    AccessPointType: string;
    /**
      * IDC所在城市
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdcCity: string;
    /**
      * 计费状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChargeState: string;
    /**
      * 物理专线开通时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 物理专线是否已签署用户协议
注意：此字段可能返回 null，表示取不到有效值。
      */
    SignLaw: boolean;
    /**
      * 物理专线是否为LocalZone
注意：此字段可能返回 null，表示取不到有效值。
      */
    LocalZone: boolean;
    /**
      * 该物理专线下vlan 0的专用通道数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    VlanZeroDirectConnectTunnelCount: number;
    /**
      * 该物理专线下非vlan 0的专用通道数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    OtherVlanDirectConnectTunnelCount: number;
    /**
      * 物理专线最小带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinBandwidth: number;
}
/**
 * 互联网地址详细信息
 */
export interface InternetAddressDetail {
    /**
      * 互联网地址ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 互联网网络地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Subnet: string;
    /**
      * 网络地址掩码长度
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaskLen: number;
    /**
      * 0:BGP
1:电信
2:移动
3:联通
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddrType: number;
    /**
      * 0:使用中
1:已停用
2:已退还
      */
    Status: number;
    /**
      * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplyTime: string;
    /**
      * 停用时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StopTime: string;
    /**
      * 退还时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseTime: string;
    /**
      * 地域信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppId: number;
    /**
      * 0:IPv4 1:IPv6
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddrProto: number;
    /**
      * 释放状态的IP地址保留的天数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReserveTime: number;
}
/**
 * DescribeAccessPoints返回参数结构体
 */
export interface DescribeAccessPointsResponse {
    /**
      * 接入点信息。
      */
    AccessPointSet?: Array<AccessPoint>;
    /**
      * 符合接入点数量。
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDirectConnectTunnel请求参数结构体
 */
export interface DeleteDirectConnectTunnelRequest {
    /**
      * 专用通道ID
      */
    DirectConnectTunnelId: string;
}
/**
 * AcceptDirectConnectTunnel请求参数结构体
 */
export interface AcceptDirectConnectTunnelRequest {
    /**
      * 物理专线拥有者接受共享专用通道申请
      */
    DirectConnectTunnelId: string;
}
/**
 * ReleaseInternetAddress请求参数结构体
 */
export interface ReleaseInternetAddressRequest {
    /**
      * 公网互联网地址ID
      */
    InstanceId: string;
}
/**
 * DescribeDirectConnectTunnelExtra返回参数结构体
 */
export interface DescribeDirectConnectTunnelExtraResponse {
    /**
      * 专用通道扩展信息
      */
    DirectConnectTunnelExtra?: DirectConnectTunnelExtra;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDirectConnectTunnelAttribute返回参数结构体
 */
export interface ModifyDirectConnectTunnelAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户侧网段地址
 */
export interface RouteFilterPrefix {
    /**
      * 用户侧网段地址
      */
    Cidr?: string;
}
/**
 * ApplyInternetAddress返回参数结构体
 */
export interface ApplyInternetAddressResponse {
    /**
      * 互联网公网地址ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * bgp状态信息
 */
export interface BGPStatus {
    /**
      * 腾讯侧主互联IP BGP状态
      */
    TencentAddressBgpState: string;
    /**
      * 腾讯侧备互联IP BGP状态
      */
    TencentBackupAddressBgpState: string;
}
/**
 * 专用通道扩展信息
 */
export interface DirectConnectTunnelExtra {
    /**
      * 专用通道ID
      */
    DirectConnectTunnelId: string;
    /**
      * 物理专线ID
      */
    DirectConnectId: string;
    /**
      * 专用通道状态
AVAILABLE:就绪或者已连接
PENDING:申请中
ALLOCATING:配置中
ALLOCATED:配置完成
ALTERING:修改中
DELETING:删除中
DELETED:删除完成
COMFIRMING:待接受
REJECTED:拒绝
      */
    State: string;
    /**
      * 物理专线的拥有者，开发商账号 ID
      */
    DirectConnectOwnerAccount: string;
    /**
      * 专用通道的拥有者，开发商账号 ID
      */
    OwnerAccount: string;
    /**
      * 网络类型，分别为VPC、BMVPC、CCN
 VPC：私有网络 ，BMVPC：黑石网络，CCN：云联网
      */
    NetworkType: string;
    /**
      * VPC地域对应的网络名，如ap-guangzhou
      */
    NetworkRegion: string;
    /**
      * 私有网络统一 ID 或者黑石网络统一 ID
      */
    VpcId: string;
    /**
      * 专线网关 ID
      */
    DirectConnectGatewayId: string;
    /**
      * BGP ：BGP路由 STATIC：静态 默认为 BGP 路由
      */
    RouteType: string;
    /**
      * 用户侧BGP，Asn，AuthKey
      */
    BgpPeer: BgpPeer;
    /**
      * 用户侧网段地址
      */
    RouteFilterPrefixes: Array<RouteFilterPrefix>;
    /**
      * 互联网通道公网网段地址
      */
    PublicAddresses: Array<RouteFilterPrefix>;
    /**
      * 专用通道的Vlan
      */
    Vlan: number;
    /**
      * 腾讯侧互联 IP
      */
    TencentAddress: string;
    /**
      * 腾讯侧备用互联IP
      */
    TencentBackupAddress: string;
    /**
      * 用户侧互联 IP
      */
    CustomerAddress: string;
    /**
      * 专用通道名称
      */
    DirectConnectTunnelName: string;
    /**
      * 专用通道创建时间
      */
    CreatedTime: string;
    /**
      * 专用通道带宽值
      */
    Bandwidth: number;
    /**
      * 关联的网络自定义探测ID
      */
    NetDetectId: string;
    /**
      * BGP community开关
      */
    EnableBGPCommunity: boolean;
    /**
      * 是否为Nat通道
      */
    NatType: number;
    /**
      * VPC地域简码，如gz、cd
      */
    VpcRegion: string;
    /**
      * 是否开启BFD
      */
    BfdEnable: number;
    /**
      * 是否开启NQA
      */
    NqaEnable: number;
    /**
      * 专用通道接入点类型
      */
    AccessPointType: string;
    /**
      * 专线网关名称
      */
    DirectConnectGatewayName: string;
    /**
      * VPC名称
      */
    VpcName: string;
    /**
      * 专用通道关联的物理专线是否签署了用户协议
      */
    SignLaw: boolean;
    /**
      * BFD配置信息
      */
    BfdInfo: BFDInfo;
    /**
      * NQA配置信息
      */
    NqaInfo: NQAInfo;
    /**
      * BGP状态
      */
    BgpStatus: BGPStatus;
    /**
      * 是否开启IPv6
注意：此字段可能返回 null，表示取不到有效值。
      */
    IPv6Enable: number;
    /**
      * 腾讯侧互联IPv6地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    TencentIPv6Address: string;
    /**
      * 腾讯侧备用互联IPv6地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    TencentBackupIPv6Address: string;
    /**
      * BGPv6状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    BgpIPv6Status: BGPStatus;
    /**
      * 用户侧互联IPv6地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomerIPv6Address: string;
    /**
      * 专用通道是否支持巨帧。1 支持，0 不支持
注意：此字段可能返回 null，表示取不到有效值。
      */
    JumboEnable: number;
}
/**
 * 标签键值对
 */
export interface Tag {
    /**
      * 标签键
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * CreateDirectConnectTunnel请求参数结构体
 */
export interface CreateDirectConnectTunnelRequest {
    /**
      * 专线 ID，例如：dc-kd7d06of
      */
    DirectConnectId: string;
    /**
      * 专用通道名称
      */
    DirectConnectTunnelName: string;
    /**
      * 物理专线 owner，缺省为当前客户（物理专线 owner）
共享专线时这里需要填写共享专线的开发商账号 ID
      */
    DirectConnectOwnerAccount?: string;
    /**
      * 网络类型，分别为VPC、BMVPC，CCN，默认是VPC
VPC：私有网络
BMVPC：黑石网络
CCN：云联网
      */
    NetworkType?: string;
    /**
      * 网络地域
      */
    NetworkRegion?: string;
    /**
      * 私有网络统一 ID 或者黑石网络统一 ID
      */
    VpcId?: string;
    /**
      * 专线网关 ID，例如 dcg-d545ddf
      */
    DirectConnectGatewayId?: string;
    /**
      * 专线带宽，单位：Mbps
默认是物理专线带宽值
      */
    Bandwidth?: number;
    /**
      * BGP ：BGP路由
STATIC：静态
默认为 BGP 路由
      */
    RouteType?: string;
    /**
      * BgpPeer，用户侧bgp信息，包括Asn和AuthKey
      */
    BgpPeer?: BgpPeer;
    /**
      * 静态路由，用户IDC的网段地址
      */
    RouteFilterPrefixes?: Array<RouteFilterPrefix>;
    /**
      * vlan，范围：0 ~ 3000
0：不开启子接口
默认值是非0
      */
    Vlan?: number;
    /**
      * TencentAddress，腾讯侧互联 IP
      */
    TencentAddress?: string;
    /**
      * CustomerAddress，用户侧互联 IP
      */
    CustomerAddress?: string;
    /**
      * TencentBackupAddress，腾讯侧备用互联 IP
      */
    TencentBackupAddress?: string;
    /**
      * 高速上云服务ID
      */
    CloudAttachId?: string;
    /**
      * 是否开启BFD
      */
    BfdEnable?: number;
    /**
      * 是否开启NQA
      */
    NqaEnable?: number;
    /**
      * BFD配置信息
      */
    BfdInfo?: BFDInfo;
    /**
      * NQA配置信息
      */
    NqaInfo?: NQAInfo;
}
/**
 * DeleteDirectConnect返回参数结构体
 */
export interface DeleteDirectConnectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDirectConnectTunnelExtra返回参数结构体
 */
export interface ModifyDirectConnectTunnelExtraResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EnableInternetAddress返回参数结构体
 */
export interface EnableInternetAddressResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ApplyInternetAddress请求参数结构体
 */
export interface ApplyInternetAddressRequest {
    /**
      * CIDR地址掩码长度
      */
    MaskLen: number;
    /**
      * 0:BGP类型地址
1：中国电信
2：中国移动
3：中国联通
      */
    AddrType: number;
    /**
      * 0：IPv4
1:IPv6
      */
    AddrProto: number;
}
/**
 * DescribeDirectConnects返回参数结构体
 */
export interface DescribeDirectConnectsResponse {
    /**
      * 物理专线列表。
      */
    DirectConnectSet?: Array<DirectConnect>;
    /**
      * 符合物理专线列表数量。
      */
    TotalCount?: number;
    /**
      * 用户名下物理专线是否都签署了用户协议
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllSignLaw?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessPoints请求参数结构体
 */
export interface DescribeAccessPointsRequest {
    /**
      * 接入点所在的地域。使用DescribeRegions查询

您可以通过调用 DescribeRegions接口获取地域ID。
      */
    RegionId?: string;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
}
/**
 * AcceptDirectConnectTunnel返回参数结构体
 */
export interface AcceptDirectConnectTunnelResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDirectConnectTunnels请求参数结构体
 */
export interface DescribeDirectConnectTunnelsRequest {
    /**
      * 过滤条件:
参数不支持同时指定DirectConnectTunnelIds和Filters。
<li> direct-connect-tunnel-name, 专用通道名称。</li>
<li> direct-connect-tunnel-id, 专用通道实例ID，如dcx-abcdefgh。</li>
<li>direct-connect-id, 物理专线实例ID，如，dc-abcdefgh。</li>
      */
    Filters?: Array<Filter>;
    /**
      * 专用通道 ID数组
      */
    DirectConnectTunnelIds?: Array<string>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100
      */
    Limit?: number;
}
/**
 * ModifyDirectConnectAttribute请求参数结构体
 */
export interface ModifyDirectConnectAttributeRequest {
    /**
      * 物理专线的ID。
      */
    DirectConnectId: string;
    /**
      * 物理专线名称。
      */
    DirectConnectName?: string;
    /**
      * 运营商或者服务商为物理专线提供的电路编码。
      */
    CircuitCode?: string;
    /**
      * 物理专线调试VLAN。
      */
    Vlan?: number;
    /**
      * 物理专线调试腾讯侧互联 IP。
      */
    TencentAddress?: string;
    /**
      * 物理专线调试用户侧互联 IP。
      */
    CustomerAddress?: string;
    /**
      * 物理专线申请者姓名。默认从账户体系获取。
      */
    CustomerName?: string;
    /**
      * 物理专线申请者联系邮箱。默认从账户体系获取。
      */
    CustomerContactMail?: string;
    /**
      * 物理专线申请者联系号码。默认从账户体系获取。
      */
    CustomerContactNumber?: string;
    /**
      * 报障联系人。
      */
    FaultReportContactPerson?: string;
    /**
      * 报障联系电话。
      */
    FaultReportContactNumber?: string;
    /**
      * 物理专线申请者补签用户使用协议
      */
    SignLaw?: boolean;
    /**
      * 物理专线带宽
      */
    Bandwidth?: number;
}
/**
 * DescribeInternetAddress返回参数结构体
 */
export interface DescribeInternetAddressResponse {
    /**
      * 互联网公网地址数量
      */
    TotalCount?: number;
    /**
      * 互联网公网地址列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Subnets?: Array<InternetAddressDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDirectConnectTunnelAttribute请求参数结构体
 */
export interface ModifyDirectConnectTunnelAttributeRequest {
    /**
      * 专用通道ID
      */
    DirectConnectTunnelId: string;
    /**
      * 专用通道名称
      */
    DirectConnectTunnelName?: string;
    /**
      * 用户侧BGP，包括Asn，AuthKey
      */
    BgpPeer?: BgpPeer;
    /**
      * 用户侧网段地址
      */
    RouteFilterPrefixes?: Array<RouteFilterPrefix>;
    /**
      * 腾讯侧互联IP
      */
    TencentAddress?: string;
    /**
      * 用户侧互联IP
      */
    CustomerAddress?: string;
    /**
      * 专用通道带宽值，单位为M。
      */
    Bandwidth?: number;
    /**
      * 腾讯侧备用互联IP
      */
    TencentBackupAddress?: string;
}
/**
 * 用于条件过滤查询
 */
export interface Filter {
    /**
      * 需要过滤的字段。
      */
    Name: string;
    /**
      * 字段的过滤值。
      */
    Values: Array<string>;
}
/**
 * DisableInternetAddress返回参数结构体
 */
export interface DisableInternetAddressResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInternetAddressStatistics请求参数结构体
 */
export declare type DescribeInternetAddressStatisticsRequest = null;
/**
 * 互联网公网地址统计
 */
export interface InternetAddressStatistics {
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 互联网公网地址数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetNum: number;
}
/**
 * CreateDirectConnect请求参数结构体
 */
export interface CreateDirectConnectRequest {
    /**
      * 物理专线的名称。
      */
    DirectConnectName: string;
    /**
      * 物理专线所在的接入点。
您可以通过调用 DescribeAccessPoints接口获取地域ID。所选择的接入点必须存在且处于可接入的状态。
      */
    AccessPointId: string;
    /**
      * 提供接入物理专线的运营商。ChinaTelecom：中国电信， ChinaMobile：中国移动，ChinaUnicom：中国联通， In-houseWiring：楼内线，ChinaOther：中国其他， InternationalOperator：境外其他。
      */
    LineOperator: string;
    /**
      * 物理专线接入端口类型,取值：100Base-T：百兆电口,1000Base-T（默认值）：千兆电口,1000Base-LX：千兆单模光口（10千米）,10GBase-T：万兆电口10GBase-LR：万兆单模光口（10千米），默认值，千兆单模光口（10千米）。
      */
    PortType: string;
    /**
      * 运营商或者服务商为物理专线提供的电路编码。
      */
    CircuitCode?: string;
    /**
      * 本地数据中心的地理位置。
      */
    Location?: string;
    /**
      * 物理专线接入接口带宽，单位为Mbps，默认值为1000，取值范围为 [2, 10240]。
      */
    Bandwidth?: number;
    /**
      * 冗余物理专线的ID。
      */
    RedundantDirectConnectId?: string;
    /**
      * 物理专线调试VLAN。默认开启VLAN，自动分配VLAN。
      */
    Vlan?: number;
    /**
      * 物理专线调试腾讯侧互联 IP。默认自动分配。
      */
    TencentAddress?: string;
    /**
      * 物理专线调试用户侧互联 IP。默认自动分配。
      */
    CustomerAddress?: string;
    /**
      * 物理专线申请者姓名。默认从账户体系获取。
      */
    CustomerName?: string;
    /**
      * 物理专线申请者联系邮箱。默认从账户体系获取。
      */
    CustomerContactMail?: string;
    /**
      * 物理专线申请者联系号码。默认从账户体系获取。
      */
    CustomerContactNumber?: string;
    /**
      * 报障联系人。
      */
    FaultReportContactPerson?: string;
    /**
      * 报障联系电话。
      */
    FaultReportContactNumber?: string;
    /**
      * 物理专线申请者是否签署了用户使用协议。默认已签署
      */
    SignLaw?: boolean;
}
/**
 * EnableInternetAddress请求参数结构体
 */
export interface EnableInternetAddressRequest {
    /**
      * 互联网公网地址ID
      */
    InstanceId: string;
}
/**
 * ModifyDirectConnectAttribute返回参数结构体
 */
export interface ModifyDirectConnectAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDirectConnectTunnelExtra请求参数结构体
 */
export interface ModifyDirectConnectTunnelExtraRequest {
    /**
      * 专用通道ID
      */
    DirectConnectTunnelId: string;
    /**
      * 专用通道的Vlan
      */
    Vlan?: number;
    /**
      * 用户侧BGP，Asn，AuthKey
      */
    BgpPeer?: BgpPeer;
    /**
      * 用户侧过滤网段地址
      */
    RouteFilterPrefixes?: RouteFilterPrefix;
    /**
      * 腾讯侧互联IP
      */
    TencentAddress?: string;
    /**
      * 腾讯侧备用互联IP
      */
    TencentBackupAddress?: string;
    /**
      * 用户侧互联IP
      */
    CustomerAddress?: string;
    /**
      * 专用通道带宽值
      */
    Bandwidth?: number;
    /**
      * BGP community开关
      */
    EnableBGPCommunity?: boolean;
    /**
      * 是否开启BFD
      */
    BfdEnable?: number;
    /**
      * 是否开启NQA
      */
    NqaEnable?: number;
    /**
      * BFD配置信息
      */
    BfdInfo?: BFDInfo;
    /**
      * NQA配置信息
      */
    NqaInfo?: NQAInfo;
    /**
      * 0：停用IPv6
1: 启用IPv6
      */
    IPv6Enable?: number;
    /**
      * 去往用户侧的路由信息
      */
    CustomerIDCRoutes?: Array<RouteFilterPrefix>;
    /**
      * 是否开启巨帧
1：开启
0：不开启
      */
    JumboEnable?: number;
}
/**
 * RejectDirectConnectTunnel返回参数结构体
 */
export interface RejectDirectConnectTunnelResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDirectConnectTunnel返回参数结构体
 */
export interface CreateDirectConnectTunnelResponse {
    /**
      * 专用通道ID
      */
    DirectConnectTunnelIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDirectConnects请求参数结构体
 */
export interface DescribeDirectConnectsRequest {
    /**
      * 过滤条件:
      */
    Filters?: Array<Filter>;
    /**
      * 物理专线 ID数组
      */
    DirectConnectIds?: Array<string>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100
      */
    Limit?: number;
}
/**
 * DeleteDirectConnectTunnel返回参数结构体
 */
export interface DeleteDirectConnectTunnelResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BFD配置信息
 */
export interface BFDInfo {
    /**
      * 健康检查次数
      */
    ProbeFailedTimes?: number;
    /**
      * 健康检查间隔
      */
    Interval?: number;
}
/**
 * DeleteDirectConnect请求参数结构体
 */
export interface DeleteDirectConnectRequest {
    /**
      * 物理专线的ID。
      */
    DirectConnectId: string;
}
/**
 * DescribeDirectConnectTunnels返回参数结构体
 */
export interface DescribeDirectConnectTunnelsResponse {
    /**
      * 专用通道列表
      */
    DirectConnectTunnelSet?: Array<DirectConnectTunnel>;
    /**
      * 符合专用通道数量。
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 接入点信息。
 */
export interface AccessPoint {
    /**
      * 接入点的名称。
      */
    AccessPointName: string;
    /**
      * 接入点唯一ID。
      */
    AccessPointId: string;
    /**
      * 接入点的状态。可用，不可用。
      */
    State: string;
    /**
      * 接入点的位置。
      */
    Location: string;
    /**
      * 接入点支持的运营商列表。
      */
    LineOperator: Array<string>;
    /**
      * 接入点管理的大区ID。
      */
    RegionId: string;
    /**
      * 接入点可用的端口类型列表。1000BASE-T代表千兆电口，1000BASE-LX代表千兆单模光口10km，1000BASE-ZX代表千兆单模光口80km,10GBASE-LR代表万兆单模光口10km,10GBASE-ZR代表万兆单模光口80km,10GBASE-LH代表万兆单模光口40km,100GBASE-LR4代表100G单模光口10km
注意：此字段可能返回 null，表示取不到有效值。
      */
    AvailablePortType: Array<string>;
    /**
      * 接入点经纬度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Coordinate: Coordinate;
    /**
      * 接入点所在城市
注意：此字段可能返回 null，表示取不到有效值。
      */
    City: string;
    /**
      * 接入点地域名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Area: string;
    /**
      * 接入点类型。VXLAN/QCPL/QCAR
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessPointType: string;
}
/**
 * DescribeInternetAddressStatistics返回参数结构体
 */
export interface DescribeInternetAddressStatisticsResponse {
    /**
      * 互联网公网地址统计信息数量
      */
    TotalCount?: number;
    /**
      * 互联网公网地址统计信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    InternetAddressStatistics?: Array<InternetAddressStatistics>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * nqa配置信息
 */
export interface NQAInfo {
    /**
      * 健康检查次数
      */
    ProbeFailedTimes?: number;
    /**
      * 健康检查间隔
      */
    Interval?: number;
    /**
      * 健康检查地址
      */
    DestinationIp?: string;
}
/**
 * DescribeInternetAddress请求参数结构体
 */
export interface DescribeInternetAddressRequest {
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值100
      */
    Limit?: number;
    /**
      * 过滤条件：
<li>AddrType, 地址类型。0：BGP 1; 1: 电信， 2：移动， 3：联通</li>
<li>AddrProto地址类型。0：IPv4 1:IPv6</li>
<li>Status 地址状态。 0：使用中， 1：已停用， 2：已退还</li>
<li>Subnet 互联网公网地址，数组</li>
<InstanceIds>互联网公网地址ID，数组</li>
      */
    Filters?: Array<Filter>;
}
/**
 * DescribePublicDirectConnectTunnelRoutes返回参数结构体
 */
export interface DescribePublicDirectConnectTunnelRoutesResponse {
    /**
      * 互联网通道路由列表
      */
    Routes?: Array<DirectConnectTunnelRoute>;
    /**
      * 记录总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInternetAddressQuota返回参数结构体
 */
export interface DescribeInternetAddressQuotaResponse {
    /**
      * IPv6互联网公网允许的最小前缀长度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ipv6PrefixLen?: number;
    /**
      * BGP类型IPv4互联网地址配额
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ipv4BgpQuota?: number;
    /**
      * 非BGP类型IPv4互联网地址配额
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ipv4OtherQuota?: number;
    /**
      * BGP类型IPv4互联网地址已使用数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ipv4BgpNum?: number;
    /**
      * 非BGP类型互联网地址已使用数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ipv4OtherNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReleaseInternetAddress返回参数结构体
 */
export interface ReleaseInternetAddressResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 专用通道信息列表
 */
export interface DirectConnectTunnel {
    /**
      * 专用通道ID
      */
    DirectConnectTunnelId: string;
    /**
      * 物理专线ID
      */
    DirectConnectId: string;
    /**
      * 专用通道状态
AVAILABLE:就绪或者已连接
PENDING:申请中
ALLOCATING:配置中
ALLOCATED:配置完成
ALTERING:修改中
DELETING:删除中
DELETED:删除完成
COMFIRMING:待接受
REJECTED:拒绝
      */
    State: string;
    /**
      * 物理专线的拥有者，开发商账号 ID
      */
    DirectConnectOwnerAccount: string;
    /**
      * 专用通道的拥有者，开发商账号 ID
      */
    OwnerAccount: string;
    /**
      * 网络类型，分别为VPC、BMVPC、CCN
 VPC：私有网络 ，BMVPC：黑石网络，CCN：云联网
      */
    NetworkType: string;
    /**
      * VPC地域对应的网络名，如ap-guangzhou
      */
    NetworkRegion: string;
    /**
      * 私有网络统一 ID 或者黑石网络统一 ID
      */
    VpcId: string;
    /**
      * 专线网关 ID
      */
    DirectConnectGatewayId: string;
    /**
      * BGP ：BGP路由 STATIC：静态 默认为 BGP 路由
      */
    RouteType: string;
    /**
      * 用户侧BGP，Asn，AuthKey
      */
    BgpPeer: BgpPeer;
    /**
      * 用户侧网段地址
      */
    RouteFilterPrefixes: Array<RouteFilterPrefix>;
    /**
      * 专用通道的Vlan
      */
    Vlan: number;
    /**
      * TencentAddress，腾讯侧互联 IP
      */
    TencentAddress: string;
    /**
      * CustomerAddress，用户侧互联 IP
      */
    CustomerAddress: string;
    /**
      * 专用通道名称
      */
    DirectConnectTunnelName: string;
    /**
      * 专用通道创建时间
      */
    CreatedTime: string;
    /**
      * 专用通道带宽值
      */
    Bandwidth: number;
    /**
      * 专用通道标签值
      */
    TagSet: Array<Tag>;
    /**
      * 关联的网络自定义探测ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetDetectId: string;
    /**
      * BGP community开关
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnableBGPCommunity: boolean;
    /**
      * 是否为Nat通道
注意：此字段可能返回 null，表示取不到有效值。
      */
    NatType: number;
    /**
      * VPC地域简码，如gz、cd
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcRegion: string;
    /**
      * 是否开启BFD
注意：此字段可能返回 null，表示取不到有效值。
      */
    BfdEnable: number;
    /**
      * 专用通道接入点类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessPointType: string;
    /**
      * 专线网关名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DirectConnectGatewayName: string;
    /**
      * VPC名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcName: string;
    /**
      * TencentBackupAddress，腾讯侧备用互联 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    TencentBackupAddress: string;
    /**
      * 专用通道关联的物理专线是否签署了用户协议
注意：此字段可能返回 null，表示取不到有效值。
      */
    SignLaw: boolean;
    /**
      * 高速上云服务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CloudAttachId: string;
}
/**
 * DisableInternetAddress请求参数结构体
 */
export interface DisableInternetAddressRequest {
    /**
      * 公网互联网地址ID
      */
    InstanceId: string;
}

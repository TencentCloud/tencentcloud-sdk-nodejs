/**
 * CreateDefaultAlarmThreshold请求参数结构体
 */
export interface CreateDefaultAlarmThresholdRequest {
    /**
      * 默认告警阈值配置
      */
    DefaultAlarmConfig: DefaultAlarmThreshold;
    /**
      * 产品类型，取值[
bgp(表示高防包产品)
bgpip(表示高防IP产品)
]
      */
    InstanceType: string;
}
/**
 * DescribeListBGPIPInstances返回参数结构体
 */
export interface DescribeListBGPIPInstancesResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * 高防IP资产实例列表
      */
    InstanceList: Array<BGPIPInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBlackWhiteIpList返回参数结构体
 */
export interface DescribeBlackWhiteIpListResponse {
    /**
      * 黑名单IP列表
      */
    BlackIpList: Array<string>;
    /**
      * 白名单IP列表
      */
    WhiteIpList: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 转发类型
 */
export interface ProxyTypeInfo {
    /**
      * 转发监听端口列表，端口取值1~65535
      */
    ProxyPorts: Array<number>;
    /**
      * 转发协议，取值[
http(HTTP协议)
https(HTTPS协议)
]
      */
    ProxyType: string;
}
/**
 * CreateBoundIP请求参数结构体
 */
export interface CreateBoundIPRequest {
    /**
      * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包）
      */
    Business: string;
    /**
      * 资源实例ID
      */
    Id: string;
    /**
      * 绑定到资源实例的IP数组，当资源实例为高防包(独享包)时，数组只允许填1个IP；当没有要绑定的IP时可以为空数组；但是BoundDevList和UnBoundDevList至少有一个不为空；
      */
    BoundDevList?: Array<BoundIpInfo>;
    /**
      * 与资源实例解绑的IP数组，当资源实例为高防包(独享包)时，数组只允许填1个IP；当没有要解绑的IP时可以为空数组；但是BoundDevList和UnBoundDevList至少有一个不为空；
      */
    UnBoundDevList?: Array<BoundIpInfo>;
    /**
      * 已弃用，不填
      */
    CopyPolicy?: string;
}
/**
 * DescribeListSchedulingDomain请求参数结构体
 */
export interface DescribeListSchedulingDomainRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为20;最大取值为100
      */
    Limit: number;
    /**
      * 调度域名搜索
      */
    FilterDomain?: string;
}
/**
 * CreateWaterPrintConfig请求参数结构体
 */
export interface CreateWaterPrintConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 水印防护配置
      */
    WaterPrintConfig: WaterPrintConfig;
}
/**
 * DDoS防护的区域封禁配置
 */
export interface DDoSGeoIPBlockConfig {
    /**
      * 区域类型，取值[
oversea(海外)
china(国内)
customized(自定义地区)
]
      */
    RegionType: string;
    /**
      * 封禁动作，取值[
drop(拦截)
trans(放行)
]
      */
    Action: string;
    /**
      * 配置ID，配置添加成功后生成；添加新配置时不用填写此字段，修改或删除配置时需要填写配置ID
      */
    Id?: string;
    /**
      * 当RegionType为customized时，必须填写AreaList，且最多填写128个；
      */
    AreaList?: Array<number>;
}
/**
 * CreateBlackWhiteIpList返回参数结构体
 */
export interface CreateBlackWhiteIpListResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 单IP告警阈值配置
 */
export interface IPAlarmThresholdRelation {
    /**
      * 告警阈值类型，取值[
1(入流量告警阈值)
2(攻击清洗流量告警阈值)
]
      */
    AlarmType: number;
    /**
      * 告警阈值，单位Mbps，取值>=0；当作为输入参数时，设置0会删除告警阈值配置；
      */
    AlarmThreshold: number;
    /**
      * 告警阈值所属的资源实例
      */
    InstanceDetailList: Array<InstanceRelation>;
}
/**
 * ModifyDDoSGeoIPBlockConfig请求参数结构体
 */
export interface ModifyDDoSGeoIPBlockConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * DDoS区域封禁配置，填写参数时配置ID不能为空
      */
    DDoSGeoIPBlockConfig: DDoSGeoIPBlockConfig;
}
/**
 * DescribeL7RulesBySSLCertId返回参数结构体
 */
export interface DescribeL7RulesBySSLCertIdResponse {
    /**
      * 证书规则集合
      */
    CertSet: Array<CertIdInsL7Rules>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeListDDoSSpeedLimitConfig请求参数结构体
 */
export interface DescribeListDDoSSpeedLimitConfigRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
      */
    Limit: number;
    /**
      * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
      */
    FilterInstanceId: string;
    /**
      * IP搜索
      */
    FilterIp?: string;
}
/**
 * 资源实例IP信息
 */
export interface InstanceRelation {
    /**
      * 资源实例的IP
      */
    EipList: Array<string>;
    /**
      * 资源实例的ID
      */
    InstanceId: string;
}
/**
 * DescribeListProtocolBlockConfig返回参数结构体
 */
export interface DescribeListProtocolBlockConfigResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * 协议封禁配置
      */
    ConfigList: Array<ProtocolBlockRelation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeListBGPInstances请求参数结构体
 */
export interface DescribeListBGPInstancesRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为20;最大取值为100
      */
    Limit: number;
    /**
      * IP搜索
      */
    FilterIp?: string;
    /**
      * 资产实例ID搜索，例如，bgp-00000001
      */
    FilterInstanceId?: string;
    /**
      * 地域搜索，例如，ap-guangzhou
      */
    FilterRegion?: string;
    /**
      * 名称搜索
      */
    FilterName?: string;
    /**
      * 按照线路搜索, 1: BGP; 2: 三网
      */
    FilterLine?: number;
}
/**
 * 字段值，K-V形式
 */
export interface KeyValue {
    /**
      * 字段名称
      */
    Key: string;
    /**
      * 字段取值
      */
    Value: string;
}
/**
 * DeleteDDoSSpeedLimitConfig请求参数结构体
 */
export interface DeleteDDoSSpeedLimitConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 访问限速配置，填写参数时配置ID不能为空
      */
    DDoSSpeedLimitConfig: DDoSSpeedLimitConfig;
}
/**
 * CreatePacketFilterConfig返回参数结构体
 */
export interface CreatePacketFilterConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeListWaterPrintConfig请求参数结构体
 */
export interface DescribeListWaterPrintConfigRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
      */
    Limit: number;
    /**
      * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
      */
    FilterInstanceId: string;
    /**
      * IP搜索
      */
    FilterIp?: string;
}
/**
 * CreateL7RuleCerts请求参数结构体
 */
export interface CreateL7RuleCertsRequest {
    /**
      * SSL证书ID
      */
    CertId: string;
    /**
      * L7域名转发规则列表
      */
    L7Rules: Array<InsL7Rules>;
}
/**
 * DeleteDDoSGeoIPBlockConfig请求参数结构体
 */
export interface DeleteDDoSGeoIPBlockConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * DDoS区域封禁配置，填写参数时配置ID不能为空
      */
    DDoSGeoIPBlockConfig: DDoSGeoIPBlockConfig;
}
/**
 * CreateIPAlarmThresholdConfig请求参数结构体
 */
export interface CreateIPAlarmThresholdConfigRequest {
    /**
      * IP告警阈值配置列表
      */
    IpAlarmThresholdConfigList: Array<IPAlarmThresholdRelation>;
}
/**
 * DescribeDefaultAlarmThreshold返回参数结构体
 */
export interface DescribeDefaultAlarmThresholdResponse {
    /**
      * 默认告警阈值配置
      */
    DefaultAlarmConfigList: Array<DefaultAlarmThreshold>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDDoSAI请求参数结构体
 */
export interface CreateDDoSAIRequest {
    /**
      * 资源实例ID列表
      */
    InstanceIdList: Array<string>;
    /**
      * AI防护开关，取值[
on(开启)
off(关闭)
]
      */
    DDoSAI: string;
}
/**
 * DescribeListProtectThresholdConfig请求参数结构体
 */
export interface DescribeListProtectThresholdConfigRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
      */
    Limit: number;
    /**
      * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
      */
    FilterInstanceId: string;
    /**
      * IP搜索
      */
    FilterIp?: string;
    /**
      * 域名搜索(查询域名与协议的CC防护阈值时使用）
      */
    FilterDomain?: string;
    /**
      * 协议搜索(查询域名与协议的CC防护阈值时使用）
      */
    FilterProtocol?: string;
}
/**
 * CreateWaterPrintConfig返回参数结构体
 */
export interface CreateWaterPrintConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeListBGPIPInstances请求参数结构体
 */
export interface DescribeListBGPIPInstancesRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为20;最大取值为100
      */
    Limit: number;
    /**
      * IP搜索
      */
    FilterIp?: string;
    /**
      * 资产实例ID搜索，例如，bgpip-00000001
      */
    FilterInstanceId?: string;
    /**
      * 高防IP线路搜索，取值为[
1：BGP线路
2：电信
3：联通
4：移动
99：第三方合作线路
]
      */
    FilterLine?: number;
    /**
      * 地域搜索，例如，ap-guangzhou
      */
    FilterRegion?: string;
    /**
      * 名称搜索
      */
    FilterName?: string;
    /**
      * 是否只获取高防弹性公网IP实例。填写时，只能填写1或者0。当填写1时，表示返回高防弹性公网IP实例。当填写0时，表示返回非高防弹性公网IP实例。
      */
    FilterEipType?: number;
    /**
      * 高防弹性公网IP实例的绑定状态搜索条件，取值范围 [BINDING、 BIND、UNBINDING、UNBIND]。该搜索条件只在FilterEipType=1时才有效。
      */
    FilterEipEipAddressStatus?: Array<string>;
}
/**
 * 三网高防套餐详情
 */
export interface StaticPackRelation {
    /**
      * 保底带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProtectBandwidth: number;
    /**
      * 业务带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormalBandwidth: number;
    /**
      * 转发规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    ForwardRulesLimit: number;
    /**
      * 自动续费标记
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoRenewFlag: number;
    /**
      * 到期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CurDeadline: string;
}
/**
 * DescribeL7RulesBySSLCertId请求参数结构体
 */
export interface DescribeL7RulesBySSLCertIdRequest {
    /**
      * 域名状态，可取bindable, binded, opened, closed, all，all表示全部状态
      */
    Status: string;
    /**
      * 证书ID列表
      */
    CertIds: Array<string>;
}
/**
 * DescribeListPacketFilterConfig返回参数结构体
 */
export interface DescribeListPacketFilterConfigResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * 特征过滤配置
      */
    ConfigList: Array<PacketFilterRelation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteBlackWhiteIpList返回参数结构体
 */
export interface DeleteBlackWhiteIpListResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSchedulingDomain请求参数结构体
 */
export declare type CreateSchedulingDomainRequest = null;
/**
 * 高防包绑定IP对象
 */
export interface BoundIpInfo {
    /**
      * IP地址
      */
    Ip: string;
    /**
      * 绑定的产品分类，取值[public（CVM、CLB产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
      */
    BizType?: string;
    /**
      * IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); 如果绑定的是托管IP没有对应的资源实例ID，请填写"none";
      */
    InstanceId?: string;
    /**
      * 产品分类下的子类型，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
      */
    DeviceType?: string;
    /**
      * 运营商，0：电信；1：联通；2：移动；5：BGP
      */
    IspCode?: number;
}
/**
 * DisassociateDDoSEipAddress返回参数结构体
 */
export interface DisassociateDDoSEipAddressResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 高防IP资产实例信息
 */
export interface BGPIPInstance {
    /**
      * 资产实例的详细信息
      */
    InstanceDetail: InstanceRelation;
    /**
      * 资产实例的规格信息
      */
    SpecificationLimit: BGPIPInstanceSpecification;
    /**
      * 资产实例的使用统计信息
      */
    Usage: BGPIPInstanceUsages;
    /**
      * 资产实例所在的地域
      */
    Region: RegionInfo;
    /**
      * 资产实例的防护状态，状态码如下：
"idle"：正常状态(无攻击)
"attacking"：攻击中
"blocking"：封堵中
"creating"：创建中
"deblocking"：解封中
"isolate"：回收隔离中
      */
    Status: string;
    /**
      * 购买时间
      */
    ExpiredTime: string;
    /**
      * 到期时间
      */
    CreatedTime: string;
    /**
      * 资产实例的名称
      */
    Name: string;
    /**
      * 资产实例所属的套餐包信息，
注意：当资产实例不是套餐包的实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackInfo: PackInfo;
    /**
      * 资产实例所属的三网套餐包详情，
注意：当资产实例不是三网套餐包的实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    StaticPackRelation: StaticPackRelation;
    /**
      * 区分高防IP境外线路
注意：此字段可能返回 null，表示取不到有效值。
      */
    ZoneId: number;
    /**
      * 区分集群
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tgw: number;
    /**
      * 高防弹性公网IP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)。只对高防弹性公网IP实例有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipAddressStatus: string;
    /**
      * 是否高防弹性公网IP实例，是为1，否为0。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipFlag: number;
    /**
      * 资产实例所属的高防弹性公网IP套餐包详情，
注意：当资产实例不是高防弹性公网IP套餐包的实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipAddressPackRelation: EipAddressPackRelation;
    /**
      * 高防弹性公网IP关联的实例信息。
注意：当资产实例不是高防弹性公网IP实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipAddressInfo: EipAddressRelation;
    /**
      * 建议客户接入的域名，客户可使用域名接入。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
}
/**
 * DeleteBlackWhiteIpList请求参数结构体
 */
export interface DeleteBlackWhiteIpListRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * IP列表
      */
    IpList: Array<string>;
    /**
      * IP类型，取值[black(黑名单IP), white(白名单IP)]
      */
    Type: string;
}
/**
 * 源站信息
 */
export interface SourceServer {
    /**
      * 源站的地址（IP或者域名）
      */
    RealServer: string;
    /**
      * 源站的地址类型，取值[
1(域名地址)
2(IP地址)
]
      */
    RsType: number;
    /**
      * 源站的回源权重，取值1~100
      */
    Weight: number;
}
/**
 * ModifyDomainUsrName返回参数结构体
 */
export interface ModifyDomainUsrNameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisassociateDDoSEipAddress请求参数结构体
 */
export interface DisassociateDDoSEipAddressRequest {
    /**
      * 资源实例ID，实例ID形如：bgpip-0000011x。只能填写高防IP实例。
      */
    InstanceId: string;
    /**
      * 资源实例ID对应的高防弹性公网IP。
      */
    Eip: string;
}
/**
 * 黑白名单IP
 */
export interface BlackWhiteIpRelation {
    /**
      * IP地址
      */
    Ip: string;
    /**
      * IP类型，取值[black(黑IP)，white(白IP)]
      */
    Type: string;
    /**
      * 黑白IP所属的实例
      */
    InstanceDetailList: Array<InstanceRelation>;
    /**
      * ip掩码，0表示32位完整ip
      */
    Mask: number;
}
/**
 * DeleteWaterPrintKey返回参数结构体
 */
export interface DeleteWaterPrintKeyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Anycast高防套餐详情
 */
export interface EipAddressPackRelation {
    /**
      * 套餐IP数量
      */
    IpCount: number;
    /**
      * 自动续费标记
      */
    AutoRenewFlag: number;
    /**
      * 当前到期时间
      */
    CurDeadline: string;
}
/**
 * 协议封禁相关信息
 */
export interface ProtocolBlockRelation {
    /**
      * 协议封禁配置
      */
    ProtocolBlockConfig: ProtocolBlockConfig;
    /**
      * 协议封禁配置所属的实例
      */
    InstanceDetailList: Array<InstanceRelation>;
}
/**
 * DescribeListPacketFilterConfig请求参数结构体
 */
export interface DescribeListPacketFilterConfigRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
      */
    Limit: number;
    /**
      * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
      */
    FilterInstanceId: string;
    /**
      * IP搜索
      */
    FilterIp?: string;
}
/**
 * 高防IP资产实例的使用信息统计
 */
export interface BGPIPInstanceUsages {
    /**
      * 已使用的端口规则数，单位条
      */
    PortRulesUsage: number;
    /**
      * 已使用的域名规则数，单位条
      */
    DomainRulesUsage: number;
    /**
      * 最近7天的攻击次数，单位次
      */
    Last7DayAttackCount: number;
}
/**
 * ModifyPacketFilterConfig返回参数结构体
 */
export interface ModifyPacketFilterConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeListDDoSGeoIPBlockConfig请求参数结构体
 */
export interface DescribeListDDoSGeoIPBlockConfigRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
      */
    Limit: number;
    /**
      * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
      */
    FilterInstanceId: string;
    /**
      * IP搜索
      */
    FilterIp?: string;
}
/**
 * 7层转发规则
 */
export interface Layer7Rule {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 转发类型列表
      */
    ProxyTypeList: Array<ProxyTypeInfo>;
    /**
      * 源站列表
      */
    RealServers: Array<SourceServer>;
    /**
      * 规则所属的资源实例
      */
    InstanceDetails: Array<InstanceRelation>;
}
/**
 * L4规则回源列表
 */
export interface L4RuleSource {
    /**
      * 回源IP或域名
      */
    Source: string;
    /**
      * 权重值，取值[0,100]
      */
    Weight: number;
    /**
      * 8000
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
}
/**
 * CreateDDoSSpeedLimitConfig请求参数结构体
 */
export interface CreateDDoSSpeedLimitConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 访问限速配置，填写参数时配置ID请为空
      */
    DDoSSpeedLimitConfig: DDoSSpeedLimitConfig;
}
/**
 * CreateDDoSGeoIPBlockConfig请求参数结构体
 */
export interface CreateDDoSGeoIPBlockConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * DDoS区域封禁配置，填写参数时配置ID请为空
      */
    DDoSGeoIPBlockConfig: DDoSGeoIPBlockConfig;
}
/**
 * CreateProtocolBlockConfig请求参数结构体
 */
export interface CreateProtocolBlockConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 协议封禁配置
      */
    ProtocolBlockConfig: ProtocolBlockConfig;
}
/**
 * DeleteWaterPrintKey请求参数结构体
 */
export interface DeleteWaterPrintKeyRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 水印密钥ID
      */
    KeyId: string;
}
/**
 * AssociateDDoSEipAddress返回参数结构体
 */
export interface AssociateDDoSEipAddressResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DDoS访问限速配置相关信息
 */
export interface DDoSSpeedLimitConfigRelation {
    /**
      * DDoS访问限速配置
      */
    SpeedLimitConfig: DDoSSpeedLimitConfig;
    /**
      * 配置所属的资源实例
      */
    InstanceDetailList: Array<InstanceRelation>;
}
/**
 * 套餐包信息
 */
export interface PackInfo {
    /**
      * 套餐包的类型，取值[
staticpack：高防IP三网套餐包
insurance：保险套餐包
]
      */
    PackType: string;
    /**
      * 套餐包的ID
      */
    PackId: string;
}
/**
 * ModifyPacketFilterConfig请求参数结构体
 */
export interface ModifyPacketFilterConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 特征过滤配置
      */
    PacketFilterConfig: PacketFilterConfig;
}
/**
 * DescribeBlackWhiteIpList请求参数结构体
 */
export interface DescribeBlackWhiteIpListRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
}
/**
 * ModifyDomainUsrName请求参数结构体
 */
export interface ModifyDomainUsrNameRequest {
    /**
      * 用户CNAME
      */
    DomainName: string;
    /**
      * 域名名称
      */
    DomainUserName: string;
}
/**
 * CreateDDoSSpeedLimitConfig返回参数结构体
 */
export interface CreateDDoSSpeedLimitConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeletePacketFilterConfig请求参数结构体
 */
export interface DeletePacketFilterConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 特征过滤配置
      */
    PacketFilterConfig: PacketFilterConfig;
}
/**
 * ModifyL7RulesEdge请求参数结构体
 */
export interface ModifyL7RulesEdgeRequest {
    /**
      * 大禹子产品代号（edge表示边界防护产品）
      */
    Business: string;
    /**
      * 资源ID
      */
    Id: string;
    /**
      * 规则
      */
    Rule: L7RuleEntry;
}
/**
 * DescribeListDDoSGeoIPBlockConfig返回参数结构体
 */
export interface DescribeListDDoSGeoIPBlockConfigResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * DDoS区域封禁配置列表
      */
    ConfigList: Array<DDoSGeoIPBlockConfigRelation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBasicDeviceStatus返回参数结构体
 */
export interface DescribeBasicDeviceStatusResponse {
    /**
      * 返回资源及状态，状态码：
1 - 封堵状态
2 - 正常状态
3 - 攻击状态
      */
    Data: Array<KeyValue>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 水印防护配置
 */
export interface WaterPrintConfig {
    /**
      * 水印偏移量，取值范围[0, 100)
      */
    Offset: number;
    /**
      * 是否开启，取值[
0（手动开启）
1（立即运行）
]
      */
    OpenStatus: number;
    /**
      * 水印所属的转发监听器列表
      */
    Listeners: Array<ForwardListener>;
    /**
      * 水印添加成功后生成的水印密钥列表，一条水印最少1个密钥，最多2个密钥
      */
    Keys?: Array<WaterPrintKey>;
    /**
      * 水印检查模式, 取值[
checkall（普通模式）
shortfpcheckall（精简模式）
]
      */
    Verify?: string;
}
/**
 * 协议封禁配置
 */
export interface ProtocolBlockConfig {
    /**
      * TCP封禁，取值[0(封禁关)，1(封禁开)]
      */
    DropTcp: number;
    /**
      * UDP封禁，取值[0(封禁关)，1(封禁开)]
      */
    DropUdp: number;
    /**
      * ICMP封禁，取值[0(封禁关)，1(封禁开)]
      */
    DropIcmp: number;
    /**
      * 其他协议封禁，取值[0(封禁关)，1(封禁开)]
      */
    DropOther: number;
    /**
      * 异常空连接防护，取值[0(防护关)，1(防护开)]
      */
    CheckExceptNullConnect: number;
}
/**
 * DescribeListListener请求参数结构体
 */
export declare type DescribeListListenerRequest = null;
/**
 * DeleteWaterPrintConfig返回参数结构体
 */
export interface DeleteWaterPrintConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 4层转发规则
 */
export interface Layer4Rule {
    /**
      * 源站端口，取值1~65535
      */
    BackendPort: number;
    /**
      * 转发端口，取值1~65535
      */
    FrontendPort: number;
    /**
      * 转发协议，取值[
TCP(TCP协议)
UDP(UDP协议)
]
      */
    Protocol: string;
    /**
      * 源站列表
      */
    RealServers: Array<SourceServer>;
    /**
      * 规则所属的资源实例
      */
    InstanceDetails: Array<InstanceRelation>;
}
/**
 * DeletePacketFilterConfig返回参数结构体
 */
export interface DeletePacketFilterConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProtocolBlockConfig返回参数结构体
 */
export interface CreateProtocolBlockConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 高防IP资产实例的规格信息
 */
export interface BGPIPInstanceSpecification {
    /**
      * 保底防护峰值，单位Mbps
      */
    ProtectBandwidth: number;
    /**
      * CC防护峰值，单位qps
      */
    ProtectCCQPS: number;
    /**
      * 正常业务带宽，单位Mbps
      */
    NormalBandwidth: number;
    /**
      * 转发规则数，单位条
      */
    ForwardRulesLimit: number;
    /**
      * 自动续费状态，取值[
0：没有开启自动续费
1：开启了自动续费
]
      */
    AutoRenewFlag: number;
    /**
      * 高防IP线路，取值为[
1：BGP线路
2：电信
3：联通
4：移动
99：第三方合作线路
]
      */
    Line: number;
    /**
      * 弹性防护峰值，单位Mbps
      */
    ElasticBandwidth: number;
}
/**
 * CreateIPAlarmThresholdConfig返回参数结构体
 */
export interface CreateIPAlarmThresholdConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteWaterPrintConfig请求参数结构体
 */
export interface DeleteWaterPrintConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
}
/**
 * DescribeListBlackWhiteIpList返回参数结构体
 */
export interface DescribeListBlackWhiteIpListResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * 黑白IP列表
      */
    IpList: Array<BlackWhiteIpRelation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DDoS防护的AI防护开关
 */
export interface DDoSAIRelation {
    /**
      * AI防护开关，取值[
on(开启)
off(关闭)
]
      */
    DDoSAI: string;
    /**
      * AI防护开关所属的资源实例
      */
    InstanceDetailList: Array<InstanceRelation>;
}
/**
 * DescribeListDDoSSpeedLimitConfig返回参数结构体
 */
export interface DescribeListDDoSSpeedLimitConfigResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * 访问限速配置列表
      */
    ConfigList: Array<DDoSSpeedLimitConfigRelation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDDoSGeoIPBlockConfig返回参数结构体
 */
export interface CreateDDoSGeoIPBlockConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 域名与协议纬度的CC防护阈值
 */
export interface ListenerCcThreholdConfig {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 协议（可取值htttps）
      */
    Protocol: string;
    /**
      * 开关状态（0：关闭，1：开启）
      */
    CCEnable: number;
    /**
      * cc防护阈值
      */
    CCThreshold: number;
}
/**
 * DescribeBasicDeviceStatus请求参数结构体
 */
export interface DescribeBasicDeviceStatusRequest {
    /**
      * IP 资源列表
      */
    IpList: Array<string>;
}
/**
 * IP线路信息
 */
export interface IPLineInfo {
    /**
      * IP线路类型，取值[
"bgp"：BGP线路IP
"ctcc"：电信线路IP
"cucc"：联通线路IP
"cmcc"：移动线路IP
"abroad"：境外线路IP
]
      */
    Type: string;
    /**
      * 线路IP
      */
    Eip: string;
}
/**
 * 高防弹性公网IP关联信息
 */
export interface EipAddressRelation {
    /**
      * 高防弹性公网IP绑定的实例地区，例如hk代表香港
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipAddressRegion: string;
    /**
      * 绑定的资源实例ID。可能是一个CVM。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipBoundRscIns: string;
    /**
      * 绑定的弹性网卡ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipBoundRscEni: string;
    /**
      * 绑定的资源内网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipBoundRscVip: string;
    /**
      * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifyTime: string;
}
/**
 * DescribeListListener返回参数结构体
 */
export interface DescribeListListenerResponse {
    /**
      * 4层转发监听器列表
      */
    Layer4Listeners: Array<Layer4Rule>;
    /**
      * 7层转发监听器列表
      */
    Layer7Listeners: Array<Layer7Rule>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 防护阈值配置相关信息
 */
export interface ProtectThresholdRelation {
    /**
      * DDoS防护等级，取值[
low(宽松)
middle(适中)
high(严格)
]
      */
    DDoSLevel: string;
    /**
      * DDoS清洗阈值，单位Mbps
      */
    DDoSThreshold: number;
    /**
      * DDoS的AI防护开关，取值[
on(开启)
off(关闭)
]
      */
    DDoSAI: string;
    /**
      * CC清洗开关，取值[
0(关闭)
1(开启)
]
      */
    CCEnable: number;
    /**
      * CC清洗阈值，单位QPS
      */
    CCThreshold: number;
    /**
      * 所属的资源实例
      */
    InstanceDetailList: Array<InstanceRelation>;
    /**
      * 域名与协议纬度的防护阈值
      */
    ListenerCcThresholdList: Array<ListenerCcThreholdConfig>;
}
/**
 * ModifyL7RulesEdge返回参数结构体
 */
export interface ModifyL7RulesEdgeResponse {
    /**
      * 成功码
      */
    Success: SuccessCode;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateL7RuleCerts返回参数结构体
 */
export interface CreateL7RuleCertsResponse {
    /**
      * 成功码
      */
    Success: SuccessCode;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DDoS访问限速配置
 */
export interface DDoSSpeedLimitConfig {
    /**
      * 限速模式，取值[
1(基于源IP限速)
2(基于目的端口限速)
]
      */
    Mode: number;
    /**
      * 限速值，每种类型的限速值最多支持1个；该字段数组至少有一种限速值
      */
    SpeedValues: Array<SpeedValue>;
    /**
      * 此字段已弃用，请填写新字段DstPortList。
      */
    DstPortScopes?: Array<PortSegment>;
    /**
      * 配置ID，配置添加成功后生成；添加新限制配置时不用填写此字段，修改或删除限速配置时需要填写配置ID
      */
    Id?: string;
    /**
      * IP protocol numbers, 取值[
ALL(所有协议)
TCP(tcp协议)
UDP(udp协议)
SMP(smp协议)
1;2-100(自定义协议号范围,最多8个)
]
注意：当自定义协议号范围时，只能填写协议号，多个范围;分隔；当填写ALL时不能再填写其他协议或协议号。
      */
    ProtocolList?: string;
    /**
      * 端口范围列表，最多8个，多个;分隔，范围表示用-；此端口范围必须填写；填写样式1:0-65535，样式2:80;443;1000-2000
      */
    DstPortList?: string;
}
/**
 * AssociateDDoSEipLoadBalancer请求参数结构体
 */
export interface AssociateDDoSEipLoadBalancerRequest {
    /**
      * 资源实例ID，实例ID形如：bgpip-0000011x。只能填写高防IP实例。
      */
    InstanceId: string;
    /**
      * 资源实例ID对应的高防弹性公网IP。
      */
    Eip: string;
    /**
      * 要绑定的负载均衡ID。负载均衡 ID 形如：lb-0000002i。可通过登录控制台查询，也可通过 DescribeLoadBalancers 接口返回值中的LoadBalancerId获取。
      */
    LoadBalancerID: string;
    /**
      * Clb所在地域，例如：ap-hongkong。
      */
    LoadBalancerRegion: string;
}
/**
 * DescribeListProtectThresholdConfig返回参数结构体
 */
export interface DescribeListProtectThresholdConfigResponse {
    /**
      * 总记录数
      */
    Total: number;
    /**
      * 防护阈值配置列表
      */
    ConfigList: Array<ProtectThresholdRelation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 使用证书的规则集合
 */
export interface CertIdInsL7Rules {
    /**
      * 使用证书的规则列表
      */
    L7Rules: Array<InsL7Rules>;
    /**
      * 证书ID
      */
    CertId: string;
}
/**
 * CreateDefaultAlarmThreshold返回参数结构体
 */
export interface CreateDefaultAlarmThresholdResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeListIPAlarmConfig返回参数结构体
 */
export interface DescribeListIPAlarmConfigResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * IP告警阈值配置列表
      */
    ConfigList: Array<IPAlarmThresholdRelation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 操作返回码，只用于返回成功的情况
 */
export interface SuccessCode {
    /**
      * 描述
      */
    Message: string;
    /**
      * 成功/错误码
      */
    Code: string;
}
/**
 * Protocol、Port参数
 */
export interface ProtocolPort {
    /**
      * 协议（tcp；udp）
      */
    Protocol: string;
    /**
      * 端口
      */
    Port: number;
}
/**
 * DescribeListBGPInstances返回参数结构体
 */
export interface DescribeListBGPInstancesResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * 高防包资产实例列表
      */
    InstanceList: Array<BGPInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeListDDoSAI请求参数结构体
 */
export interface DescribeListDDoSAIRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
      */
    Limit: number;
    /**
      * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
      */
    FilterInstanceId: string;
    /**
      * IP搜索
      */
    FilterIp?: string;
}
/**
 * DescribeListIPAlarmConfig请求参数结构体
 */
export interface DescribeListIPAlarmConfigRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
      */
    Limit: number;
    /**
      * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
      */
    FilterInstanceId: string;
    /**
      * 告警阈值类型搜索，取值[
1(入流量告警阈值)
2(攻击清洗流量告警阈值)
]
      */
    FilterAlarmType: number;
    /**
      * IP搜索
      */
    FilterIp?: string;
}
/**
 * 端口段信息
 */
export interface PortSegment {
    /**
      * 起始端口，取值1~65535
      */
    BeginPort: number;
    /**
      * 结束端口，取值1~65535，必须不小于起始端口
      */
    EndPort: number;
}
/**
 * 特征过滤配置
 */
export interface PacketFilterConfig {
    /**
      * 协议，取值[tcp udp icmp all]
      */
    Protocol: string;
    /**
      * 起始源端口，取值0~65535
      */
    SportStart: number;
    /**
      * 结束源端口，取值1~65535，必须大于等于起始源端口
      */
    SportEnd: number;
    /**
      * 起始目的端口，取值0~65535
      */
    DportStart: number;
    /**
      * 结束目的端口，取值1~65535，必须大于等于起始目的端口
      */
    DportEnd: number;
    /**
      * 最小报文长度，取值1-1500
      */
    PktlenMin: number;
    /**
      * 最大报文长度，取值1-1500，必须大于等于最小报文长度
      */
    PktlenMax: number;
    /**
      * 动作，取值[
drop(丢弃)
transmit(放行)
drop_black(丢弃并拉黑)
drop_rst(拦截)
drop_black_rst(拦截并拉黑)
forward(继续防护)
]
      */
    Action: string;
    /**
      * 检测位置，取值[
begin_l3(IP头)
begin_l4(TCP/UDP头)
begin_l5(T载荷)
no_match(不匹配)
]
      */
    MatchBegin?: string;
    /**
      * 检测类型，取值[
sunday(关键字)
pcre(正则表达式)
]
      */
    MatchType?: string;
    /**
      * 检测值，关键字符串或正则表达式,取值[
当检测类型为sunday时，请填写字符串或者16进制字节码，例如\x313233对应的是字符串"123"的16进制字节码;
当检测类型为pcre时, 请填写正则表达式字符串;
]
      */
    Str?: string;
    /**
      * 从检测位置开始的检测深度，取值[0,1500]
      */
    Depth?: number;
    /**
      * 从检测位置开始的偏移量，取值范围[0,Depth]
      */
    Offset?: number;
    /**
      * 是否包含检测值，取值[
0(包含)
1(不包含)
]
      */
    IsNot?: number;
    /**
      * 当有第二个检测条件时，与第一检测条件的且或关系，取值[
and(且的关系)
none(当没有第二个检测条件时填写此值)
]
      */
    MatchLogic?: string;
    /**
      * 第二个检测位置，取值[
begin_l5(载荷)
no_match(不匹配)
]
      */
    MatchBegin2?: string;
    /**
      * 第二个检测类型，取值[
sunday(关键字)
pcre(正则表达式)
]
      */
    MatchType2?: string;
    /**
      * 第二个检测值，关键字符串或正则表达式,取值[
当检测类型为sunday时，请填写字符串或者16进制字节码，例如\x313233对应的是字符串"123"的16进制字节码;
当检测类型为pcre时, 请填写正则表达式字符串;
]
      */
    Str2?: string;
    /**
      * 从第二个检测位置开始的第二个检测深度，取值[0,1500]
      */
    Depth2?: number;
    /**
      * 从第二个检测位置开始的偏移量，取值范围[0,Depth2]
      */
    Offset2?: number;
    /**
      * 第二个检测是否包含检测值，取值[
0(包含)
1(不包含)
]
      */
    IsNot2?: number;
    /**
      * 特征过滤配置添加成功后自动生成的规则ID，当添加新特征过滤配置时，此字段不用填写；
      */
    Id?: string;
}
/**
 * 单IP默认告警阈值配置
 */
export interface DefaultAlarmThreshold {
    /**
      * 告警阈值类型，取值[
1(入流量告警阈值)
2(攻击清洗流量告警阈值)
]
      */
    AlarmType?: number;
    /**
      * 告警阈值，单位Mbps，取值>=0；当作为输入参数时，设置0会删除告警阈值配置；
      */
    AlarmThreshold?: number;
}
/**
 * 转发监听器
 */
export interface ForwardListener {
    /**
      * 转发监听端口下限，取值1~65535
      */
    FrontendPort: number;
    /**
      * 转发协议，取值[
TCP
UDP
]
      */
    ForwardProtocol: string;
    /**
      * 转发监听端口上限，取值1~65535
      */
    FrontendPortEnd?: number;
}
/**
 * 高防包资产实例的规格信息
 */
export interface BGPInstanceSpecification {
    /**
      * 保底防护峰值，单位Gbps
      */
    ProtectBandwidth: number;
    /**
      * 防护次数，单位次
      */
    ProtectCountLimit: number;
    /**
      * 防护IP数，单位个
      */
    ProtectIPNumberLimit: number;
    /**
      * 自动续费状态，取值[
0：没有开启自动续费
1：开启了自动续费
]
      */
    AutoRenewFlag: number;
}
/**
 * SwitchWaterPrintConfig返回参数结构体
 */
export interface SwitchWaterPrintConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateWaterPrintKey请求参数结构体
 */
export interface CreateWaterPrintKeyRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
}
/**
 * 水印配置相关信息
 */
export interface WaterPrintRelation {
    /**
      * 水印配置
      */
    WaterPrintConfig: WaterPrintConfig;
    /**
      * 水印配置所属的资源实例
      */
    InstanceDetailList: Array<InstanceRelation>;
}
/**
 * 实例7层规则
 */
export interface InsL7Rules {
    /**
      * 规则状态，0: 正常运行中, 1: 配置规则中(配置生效中), 2: 配置规则失败（配置生效失败）, 3: 删除规则中(删除生效中), 5: 删除规则失败(删除失败), 6: 等待添加规则, 7: 等待删除规则, 8: 等待上传证书, 9: 规则对应的资源不存在，被隔离, 10:等待修改规则, 11:配置修改中
      */
    Status: number;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 协议
      */
    Protocol: string;
    /**
      * 实例ID
      */
    InsId: string;
    /**
      * 用户AppID
      */
    AppId: string;
    /**
      * 高防端口
      */
    VirtualPort: string;
    /**
      * 证书ID
      */
    SSLId: string;
}
/**
 * DescribeListDDoSAI返回参数结构体
 */
export interface DescribeListDDoSAIResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * AI防护开关列表
      */
    ConfigList: Array<DDoSAIRelation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDDoSSpeedLimitConfig请求参数结构体
 */
export interface ModifyDDoSSpeedLimitConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 访问限速配置，填写参数时配置ID不能为空
      */
    DDoSSpeedLimitConfig: DDoSSpeedLimitConfig;
}
/**
 * AssociateDDoSEipAddress请求参数结构体
 */
export interface AssociateDDoSEipAddressRequest {
    /**
      * 资源实例ID，实例ID形如：bgpip-0000011x。只能填写高防IP实例。
      */
    InstanceId: string;
    /**
      * 资源实例ID对应的高防弹性公网IP。
      */
    Eip: string;
    /**
      * 要绑定的实例 ID。实例 ID 形如：ins-11112222。可通过登录控制台查询，也可通过 DescribeInstances 接口返回值中的InstanceId获取。
      */
    CvmInstanceID: string;
    /**
      * cvm实例所在地域，例如：ap-hongkong。
      */
    CvmRegion: string;
}
/**
 * AssociateDDoSEipLoadBalancer返回参数结构体
 */
export interface AssociateDDoSEipLoadBalancerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBlackWhiteIpList请求参数结构体
 */
export interface CreateBlackWhiteIpListRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * IP列表
      */
    IpList: Array<string>;
    /**
      * IP类型，取值[black(黑名单IP), white(白名单IP)]
      */
    Type: string;
}
/**
 * DescribeBizTrend返回参数结构体
 */
export interface DescribeBizTrendResponse {
    /**
      * 曲线图各个时间点的值
      */
    DataList: Array<number>;
    /**
      * 统计纬度
      */
    MetricName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBoundIP返回参数结构体
 */
export interface CreateBoundIPResponse {
    /**
      * 成功码
      */
    Success: SuccessCode;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 限速值类型，例如：包速率pps、带宽bps
 */
export interface SpeedValue {
    /**
      * 限速值类型，取值[
1(包速率pps)
2(带宽bps)
]
      */
    Type: number;
    /**
      * 值大小
      */
    Value: number;
}
/**
 * SwitchWaterPrintConfig请求参数结构体
 */
export interface SwitchWaterPrintConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 水印开启/关闭状态，1表示开启；0表示关闭
      */
    OpenStatus: number;
}
/**
 * DescribeListSchedulingDomain返回参数结构体
 */
export interface DescribeListSchedulingDomainResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * 调度域名信息列表
      */
    DomainList: Array<SchedulingDomainInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCCTrend返回参数结构体
 */
export interface DescribeCCTrendResponse {
    /**
      * 值个数
      */
    Count: number;
    /**
      * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
      */
    Business: string;
    /**
      * 资源的IP
      */
    Ip: string;
    /**
      * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
      */
    Period: number;
    /**
      * 统计开始时间
      */
    StartTime: string;
    /**
      * 统计结束时间
      */
    EndTime: string;
    /**
      * 值数组
      */
    Data: Array<number>;
    /**
      * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: string;
    /**
      * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))]
      */
    MetricName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSchedulingDomain返回参数结构体
 */
export interface CreateSchedulingDomainResponse {
    /**
      * 新创建的域名
      */
    Domain: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EIP所属的云产品信息
 */
export interface EipProductInfo {
    /**
      * IP地址
      */
    Ip: string;
    /**
      * 云产品类型，取值[
public（CVM产品），
bm（黑石产品），
eni（弹性网卡），
vpngw（VPN网关），
 natgw（NAT网关），
waf（Web应用安全产品），
fpc（金融产品），
gaap（GAAP产品）,
other(托管IP)
]
      */
    BizType: string;
    /**
      * 云产品子类型，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
      */
    DeviceType: string;
    /**
      * IP所属的云产品实例ID，例如是弹性网卡的IP，InstanceId为弹性网卡的ID(eni-*); 如果是托管IP没有对应的资源实例ID,InstanceId为""
      */
    InstanceId: string;
}
/**
 * CreateDDoSAI返回参数结构体
 */
export interface CreateDDoSAIResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DDoS区域封禁配置相关信息
 */
export interface DDoSGeoIPBlockConfigRelation {
    /**
      * DDoS区域封禁配置
      */
    GeoIPBlockConfig: DDoSGeoIPBlockConfig;
    /**
      * 配置所属的资源实例
      */
    InstanceDetailList: Array<InstanceRelation>;
}
/**
 * DescribeListProtocolBlockConfig请求参数结构体
 */
export interface DescribeListProtocolBlockConfigRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
      */
    Limit: number;
    /**
      * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
      */
    FilterInstanceId: string;
    /**
      * IP搜索
      */
    FilterIp?: string;
}
/**
 * 地域信息
 */
export interface RegionInfo {
    /**
      * 地域名称，例如，ap-guangzhou
      */
    Region: string;
}
/**
 * DescribeDDoSTrend请求参数结构体
 */
export interface DescribeDDoSTrendRequest {
    /**
      * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
      */
    Business: string;
    /**
      * 资源实例的IP
      */
    Ip: string;
    /**
      * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
      */
    Period: number;
    /**
      * 统计开始时间
      */
    StartTime: string;
    /**
      * 统计结束时间
      */
    EndTime: string;
    /**
      * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
      */
    MetricName: string;
    /**
      * 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例）
      */
    Id?: string;
}
/**
 * ModifyDDoSGeoIPBlockConfig返回参数结构体
 */
export interface ModifyDDoSGeoIPBlockConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 高防包资产实例信息
 */
export interface BGPInstance {
    /**
      * 资产实例的详细信息
      */
    InstanceDetail: InstanceRelation;
    /**
      * 资产实例的规格信息
      */
    SpecificationLimit: BGPInstanceSpecification;
    /**
      * 资产实例的使用统计信息
      */
    Usage: BGPInstanceUsages;
    /**
      * 资产实例所在的地域
      */
    Region: RegionInfo;
    /**
      * 资产实例的防护状态，状态码如下：
"idle"：正常状态(无攻击)
"attacking"：攻击中
"blocking"：封堵中
"creating"：创建中
"deblocking"：解封中
"isolate"：回收隔离中
      */
    Status: string;
    /**
      * 购买时间
      */
    CreatedTime: string;
    /**
      * 到期时间
      */
    ExpiredTime: string;
    /**
      * 资产实例的名称
      */
    Name: string;
    /**
      * 资产实例所属的套餐包信息，
注意：当资产实例不是套餐包的实例时，此字段为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackInfo: PackInfo;
    /**
      * 高防包绑定的EIP属于的云产品信息
      */
    EipProductInfos: Array<EipProductInfo>;
    /**
      * 高防包绑定状态，取值[
"idle"：绑定已完成
 "bounding"：正在绑定中
"failed"：绑定失败
]
      */
    BoundStatus: string;
    /**
      * 四层防护严格级别
      */
    DDoSLevel: string;
    /**
      * CC防护开关
      */
    CCEnable: number;
}
/**
 * DescribeBizTrend请求参数结构体
 */
export interface DescribeBizTrendRequest {
    /**
      * 统计方式，可取值max, min, avg, sum, 如统计纬度是流量速率或包量速率，仅可取值max
      */
    Statistics: string;
    /**
      * 大禹子产品代号（bgpip表示高防IP）
      */
    Business: string;
    /**
      * 统计周期，可取值300，1800，3600，21600，86400，单位秒
      */
    Period: number;
    /**
      * 统计开始时间。 例：“2020-09-22 00:00:00”
      */
    StartTime: string;
    /**
      * 统计结束时间。 例：“2020-09-22 00:00:00”
      */
    EndTime: string;
    /**
      * 资源实例ID
      */
    Id: string;
    /**
      * 统计纬度，可取值connum, new_conn, inactive_conn, intraffic, outtraffic, inpkg, outpkg, qps
      */
    MetricName: string;
    /**
      * 统计纬度为qps时，可选特定域名查询
      */
    Domain?: string;
    /**
      * 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效
      */
    ProtoInfo?: Array<ProtocolPort>;
}
/**
 * DescribeListWaterPrintConfig返回参数结构体
 */
export interface DescribeListWaterPrintConfigResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * 水印配置列表
      */
    ConfigList: Array<WaterPrintRelation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 高防包资产实例的使用信息统计
 */
export interface BGPInstanceUsages {
    /**
      * 已使用的防护次数，单位次
      */
    ProtectCountUsage: number;
    /**
      * 已防护的IP数，单位个
      */
    ProtectIPNumberUsage: number;
    /**
      * 最近7天的攻击次数，单位次
      */
    Last7DayAttackCount: number;
}
/**
 * DeleteDDoSSpeedLimitConfig返回参数结构体
 */
export interface DeleteDDoSSpeedLimitConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * L7规则
 */
export interface L7RuleEntry {
    /**
      * 会话保持时间，单位秒
      */
    KeepTime: number;
    /**
      * 转发域名
      */
    Domain: string;
    /**
      * 转发协议，取值[http, https]
      */
    Protocol: string;
    /**
      * 回源方式，取值[1(域名回源)，2(IP回源)]
      */
    SourceType: number;
    /**
      * 负载均衡方式，取值[1(加权轮询)]
      */
    LbType: number;
    /**
      * 回源列表
      */
    SourceList: Array<L4RuleSource>;
    /**
      * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]
      */
    KeepEnable: number;
    /**
      * 规则状态，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
      */
    Status?: number;
    /**
      * 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段；
      */
    RuleId?: string;
    /**
      * HTTPS协议的CC防护阈值
      */
    CCThreshold?: number;
    /**
      * 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
      */
    PrivateKey?: string;
    /**
      * HTTPS协议的CC防护状态，取值[0(关闭), 1(开启)]
      */
    CCEnable?: number;
    /**
      * 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
    HttpsToHttpEnable?: number;
    /**
      * 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0
      */
    CertType?: number;
    /**
      * 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
      */
    Cert?: string;
    /**
      * HTTPS协议的CC防护等级
      */
    CCLevel?: string;
    /**
      * 规则描述
      */
    RuleName?: string;
    /**
      * cc防护状态，取值[0(关闭), 1(开启)]
      */
    CCStatus?: number;
    /**
      * 接入端口值
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirtualPort?: number;
    /**
      * 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID
      */
    SSLId?: string;
    /**
      * 同ruleId
      */
    Id?: string;
}
/**
 * CreateWaterPrintKey返回参数结构体
 */
export interface CreateWaterPrintKeyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDDoSGeoIPBlockConfig返回参数结构体
 */
export interface DeleteDDoSGeoIPBlockConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDDoSTrend返回参数结构体
 */
export interface DescribeDDoSTrendResponse {
    /**
      * 值个数
      */
    Count: number;
    /**
      * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
      */
    Business: string;
    /**
      * 资源的IP
      */
    Ip: string;
    /**
      * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
      */
    Period: number;
    /**
      * 统计开始时间
      */
    StartTime: string;
    /**
      * 统计结束时间
      */
    EndTime: string;
    /**
      * 值数组，攻击流量带宽单位为Mbps，包速率单位为pps
      */
    Data: Array<number>;
    /**
      * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: string;
    /**
      * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
      */
    MetricName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeListBlackWhiteIpList请求参数结构体
 */
export interface DescribeListBlackWhiteIpListRequest {
    /**
      * 页起始偏移，取值为(页码-1)*一页条数
      */
    Offset: number;
    /**
      * 一页条数，当Limit=0时，默认一页条数为100;最大取值为100
      */
    Limit: number;
    /**
      * 资源实例ID搜索, 支持资源实例前缀通配搜索，例如bgp-*表示获取高防包类型的资源实例
      */
    FilterInstanceId: string;
    /**
      * IP搜索
      */
    FilterIp?: string;
}
/**
 * ModifyDDoSSpeedLimitConfig返回参数结构体
 */
export interface ModifyDDoSSpeedLimitConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 调度域名信息
 */
export interface SchedulingDomainInfo {
    /**
      * 调度域名
      */
    Domain: string;
    /**
      * 线路IP列表
      */
    LineIPList: Array<IPLineInfo>;
    /**
      * 调度方式，当前仅支持优先级的方式，取值[priority]
      */
    Method: string;
    /**
      * 调度域名解析记录的TTL值
      */
    TTL: number;
    /**
      * 运行状态，取值[
0：未运行
1：运行中
2：运行异常
]
      */
    Status: number;
    /**
      * 创建时间
      */
    CreatedTime: string;
    /**
      * 最后修改时间
      */
    ModifyTime: string;
    /**
      * 域名名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsrDomainName: string;
}
/**
 * DescribeDefaultAlarmThreshold请求参数结构体
 */
export interface DescribeDefaultAlarmThresholdRequest {
    /**
      * 产品类型，取值[
bgp(表示高防包产品)
bgpip(表示高防IP产品)
]
      */
    InstanceType: string;
    /**
      * 告警阈值类型搜索，取值[
1(入流量告警阈值)
2(攻击清洗流量告警阈值)
]
      */
    FilterAlarmType: number;
}
/**
 * 生成的水印密钥
 */
export interface WaterPrintKey {
    /**
      * 密钥版本号
      */
    KeyVersion: string;
    /**
      * 密钥内容
      */
    KeyContent: string;
    /**
      * 密钥ID
      */
    KeyId: string;
    /**
      * 密钥启用状态，只有一个取值1(启用)
      */
    KeyOpenStatus: number;
    /**
      * 密钥生成时间
      */
    CreateTime: string;
}
/**
 * 特征过滤相关信息
 */
export interface PacketFilterRelation {
    /**
      * 特征过滤配置
      */
    PacketFilterConfig: PacketFilterConfig;
    /**
      * 特征过滤配置所属的实例
      */
    InstanceDetailList: Array<InstanceRelation>;
}
/**
 * CreatePacketFilterConfig请求参数结构体
 */
export interface CreatePacketFilterConfigRequest {
    /**
      * 资源实例ID
      */
    InstanceId: string;
    /**
      * 特征过滤规则
      */
    PacketFilterConfig: PacketFilterConfig;
}
/**
 * DescribeCCTrend请求参数结构体
 */
export interface DescribeCCTrendRequest {
    /**
      * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
      */
    Business: string;
    /**
      * 资源的IP
      */
    Ip: string;
    /**
      * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
      */
    Period: number;
    /**
      * 统计开始时间
      */
    StartTime: string;
    /**
      * 统计结束时间
      */
    EndTime: string;
    /**
      * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))]
      */
    MetricName: string;
    /**
      * 域名，可选
      */
    Domain?: string;
    /**
      * 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例）
      */
    Id?: string;
}

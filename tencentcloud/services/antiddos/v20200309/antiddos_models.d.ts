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
 * DescribeDDoSConnectLimitList请求参数结构体
 */
export interface DescribeDDoSConnectLimitListRequest {
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset: number;
    /**
     * 一页条数
     */
    Limit: number;
    /**
     * 可选参数，按照IP进行过滤
     */
    FilterIp?: string;
    /**
     * 可选参数，按照实例id进行过滤
     */
    FilterInstanceId?: string;
}
/**
 * DescribeListBGPIPInstances返回参数结构体
 */
export interface DescribeListBGPIPInstancesResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 高防IP资产实例列表
     */
    InstanceList?: Array<BGPIPInstance>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
  drop_rst(拦截)（已废弃，不支持drop_rst）
  drop_black_rst(拦截并拉黑)（已废弃，不支持drop_black_rst）
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
  pcre(正则表达式) （已废弃，仅支持sunday）
  ]
     */
    MatchType?: string;
    /**
     * 检测值，关键字符串或正则表达式,取值[ 当检测类型为sunday时，请填写字符串或者16进制字节码，例如\x313233对应的是字符串"123"的16进制字节码; 最多支持63位; ]
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
  1(不包含) （已废弃，仅支持0）
  ]
     */
    IsNot?: number;
    /**
     *
  当有第二个检测条件时，与第一检测条件的且或关系，取值[
  and(且的关系) （已废弃，仅支持none）
  none(当没有第二个检测条件时填写此值)
  ]
     */
    MatchLogic?: string;
    /**
     * （已废弃）
     */
    MatchBegin2?: string;
    /**
     * （已废弃）
     */
    MatchType2?: string;
    /**
     * （已废弃）
     */
    Str2?: string;
    /**
     * （已废弃）
     */
    Depth2?: number;
    /**
     * （已废弃）
     */
    Offset2?: number;
    /**
     * （已废弃）
     */
    IsNot2?: number;
    /**
     * 特征过滤配置添加成功后自动生成的规则ID，当添加新特征过滤配置时，此字段不用填写；当修改/删除新特征过滤配置时，此字段必填；
     */
    Id?: string;
    /**
     * 大于报文长度，取值1+
     */
    PktLenGT?: number;
}
/**
 * DescribeOverviewCCTrend请求参数结构体
 */
export interface DescribeOverviewCCTrendRequest {
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
     * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))，incount(请求次数), dropcount(攻击次数)]
     */
    MetricName: string;
    /**
     * DDoS防护子产品代号（bgpip表示高防IP；bgp-multip表示共享包；basic表示DDoS基础防护）
     */
    Business?: string;
    /**
     * 资源的IP
     */
    IpList?: Array<string>;
    /**
     * 资源实例ID
     */
    Id?: string;
}
/**
 * DeleteCCLevelPolicy请求参数结构体
 */
export interface DeleteCCLevelPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 配置策略的IP
     */
    Ip: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 协议，可取值http
     */
    Protocol: string;
}
/**
 * 转发类型
 */
export interface ProxyTypeInfo {
    /**
     * 转发监听端口列表，端口取值1~65535
     */
    ProxyPorts: Array<number | bigint>;
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
     * DDoS防护子产品代号（bgp表示独享包；bgp-multip表示共享包）
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
    /**
     * 如果该资源实例为域名化资产以及跨地域绑定则，该参数必填
     */
    FilterRegion?: string;
}
/**
 * CC频率限制策略项字段
 */
export interface CCReqLimitPolicyRecord {
    /**
     * 统计周期，可取值1，10，30，60，单位秒
     */
    Period: number;
    /**
     * 请求数，取值1~20000
     */
    RequestNum: number;
    /**
     * 频率限制策略方式，可取值alg表示验证码，drop表示丢弃
     */
    Action: string;
    /**
     * 频率限制策略时长，可取值1~86400，单位秒
     */
    ExecuteDuration: number;
    /**
     * 策略项比对方式，可取值include表示包含，equal表示等于
     */
    Mode: string;
    /**
     * Uri，三个策略项仅可填其中之一
     */
    Uri?: string;
    /**
     * User-Agent，三个策略项仅可填其中之一
     */
    UserAgent?: string;
    /**
     * Cookie，三个策略项仅可填其中之一
     */
    Cookie?: string;
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
    /**
     * 运行状态 0 代表未运行  1 正在运行  2 运行异常
     */
    Status?: string;
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
  oversea(境外)
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
    AreaList?: Array<number | bigint>;
}
/**
 * CreateBlackWhiteIpList返回参数结构体
 */
export interface CreateBlackWhiteIpListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteCCRequestLimitPolicy请求参数结构体
 */
export interface DeleteCCRequestLimitPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 策略Id
     */
    PolicyId: string;
}
/**
 * DescribeL7RulesBySSLCertId返回参数结构体
 */
export interface DescribeL7RulesBySSLCertIdResponse {
    /**
     * 证书规则集合
     */
    CertSet?: Array<CertIdInsL7Rules>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSBlackWhiteIpList返回参数结构体
 */
export interface DescribeDDoSBlackWhiteIpListResponse {
    /**
     * 黑名单IP列表
     */
    BlackIpList: Array<IpSegment>;
    /**
     * 白名单IP列表
     */
    WhiteIpList: Array<IpSegment>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * ModifyNewDomainRules请求参数结构体
 */
export interface ModifyNewDomainRulesRequest {
    /**
     * DDoS防护子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 域名转发规则
     */
    Rule: NewL7RuleEntry;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 状态搜索，idle：运行中；attacking：攻击中；blocking：封堵中
     */
    FilterStatus?: string;
    /**
     * 高防包绑定状态搜索，bounding：绑定中； failed：绑定失败
     */
    FilterBoundStatus?: string;
    /**
     * 实例id数组
     */
    FilterInstanceIdList?: Array<string>;
    /**
     * 企业版搜索,  1：包含重保护航套餐下的企业版列表, 2: 不包含重保护航套餐的企业版列表
     */
    FilterEnterpriseFlag?: number;
    /**
     * 轻量版搜索
     */
    FilterLightFlag?: number;
    /**
     * 定制版搜索
     */
    FilterChannelFlag?: number;
    /**
     * 标签搜索
     */
    FilterTag?: TagFilter;
    /**
     * 试用资源搜索，1: 应急防护资源；2：PLG试用资源
     */
    FilterTrialFlag?: number;
    /**
     * 重保护航搜索
     */
    FilterConvoy?: number;
    /**
     * 默认false；接口传true，返回数据中不包含高级信息，高级信息包含：InstanceList[0].Usage。
     */
    ExcludeAdvancedInfo?: boolean;
    /**
     * 资产IP数组
     */
    FilterAssetIpList?: Array<string>;
    /**
     * 是否包含基础防护增强版 0: 不包含 1: 包含
     */
    FilterBasicPlusFlag?: number;
    /**
     * 是否标准版2.0 0: 包含标准版2.0 0 1: 只查询标准版2.0 0 2: 不查标准版2.0
     */
    FilterPlanCntFlag?: number;
    /**
     * 是否跨区域产品 0: 不包含跨区域产品 1: 中国大陆跨区域产品 2: 非中国大陆跨区域产品 3: 包含全部
     */
    FilterTransRegionFlag?: number;
    /**
     * zoenid列表
     */
    FilterZoneIdList?: Array<number | bigint>;
}
/**
 * 字段值，K-V形式
 */
export interface KeyValue {
    /**
     * 字段名称
     */
    Key?: string;
    /**
     * 字段取值
     */
    Value?: string;
}
/**
 * DescribeBGPIPL7Rules请求参数结构体
 */
export interface DescribeBGPIPL7RulesRequest {
    /**
     * DDoS防护子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
     */
    StatusList?: Array<number | bigint>;
    /**
     * 域名搜索，选填，当需要搜索域名请填写
     */
    Domain?: string;
    /**
     * IP搜索，选填，当需要搜索IP请填写
     */
    Ip?: string;
    /**
     * 一页条数，默认值100，最大值100，超过100最大返回100条
     */
    Limit?: number;
    /**
     * 规则偏移量，取值为(页码-1)*一页条数
     */
    Offset?: number;
    /**
     * 转发协议搜索，选填，取值[http, https, http/https]
     */
    ProtocolList?: Array<string>;
    /**
     * 高防IP实例的Cname
     */
    Cname?: string;
    /**
     * 默认为false，当为true时，将不对各个规则做策略检查，直接导出所有规则
     */
    Export?: boolean;
    /**
     * 源站，模糊查询
     */
    Source?: string;
}
/**
 * ModifyCcBlackWhiteIpList请求参数结构体
 */
export interface ModifyCcBlackWhiteIpListRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * IP列表
     */
    IpList: Array<IpSegment>;
    /**
     * IP类型，取值[black(黑名单IP), white(白名单IP)]
     */
    Type: string;
    /**
     * 策略Id
     */
    PolicyId: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCCReqLimitPolicy返回参数结构体
 */
export interface CreateCCReqLimitPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CreateCCPrecisionPolicy返回参数结构体
 */
export interface CreateCCPrecisionPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCcGeoIPBlockConfig返回参数结构体
 */
export interface DeleteCcGeoIPBlockConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * ModifyDDoSGeoIPBlockConfig返回参数结构体
 */
export interface ModifyDDoSGeoIPBlockConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCcBlackWhiteIpList返回参数结构体
 */
export interface DescribeCcBlackWhiteIpListResponse {
    /**
     * CC四层黑白名单策略列表总数
     */
    Total?: number;
    /**
     * CC四层黑白名单策略列表详情
     */
    CcBlackWhiteIpList?: Array<CcBlackWhiteIpPolicy>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCCLevelPolicy返回参数结构体
 */
export interface ModifyCCLevelPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * CreateCcBlackWhiteIpList返回参数结构体
 */
export interface CreateCcBlackWhiteIpListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNewL7Rules返回参数结构体
 */
export interface CreateNewL7RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeListWaterPrintConfig返回参数结构体
 */
export interface DescribeListWaterPrintConfigResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 水印配置列表
     */
    ConfigList?: Array<WaterPrintRelation>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNewDomainRules返回参数结构体
 */
export interface ModifyNewDomainRulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CC四层黑白名单列表
 */
export interface CcBlackWhiteIpPolicy {
    /**
     * 策略Id
     */
    PolicyId: string;
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * IP地址
     */
    Ip: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 协议
     */
    Protocol: string;
    /**
     * IP类型，取值[black(黑名单IP), white(白名单IP)]
     */
    Type: string;
    /**
     * 黑白名单IP地址
     */
    BlackWhiteIp: string;
    /**
     * 掩码
     */
    Mask: number;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 修改时间
     */
    ModifyTime: string;
}
/**
 * DescribeDDoSConnectLimitList返回参数结构体
 */
export interface DescribeDDoSConnectLimitListResponse {
    /**
     * 连接抑制配置总数
     */
    Total?: number;
    /**
     * 连接抑制配置详情信息
     */
    ConfigList?: Array<ConnectLimitRelation>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * L7规则健康检查参数
 */
export interface L7RuleHealth {
    /**
     * 配置状态，0： 正常，1：配置中，2：配置失败
     */
    Status: number;
    /**
     * =1表示开启；=0表示关闭
     */
    Enable: number;
    /**
     * 规则ID
     */
    RuleId: string;
    /**
     * 检查目录的URL，默认为/
     */
    Url: string;
    /**
     * 检测间隔时间，单位秒
     */
    Interval: number;
    /**
     * 健康阈值，单位次
     */
    AliveNum: number;
    /**
     * 不健康阈值，单位次
     */
    KickNum: number;
    /**
     * HTTP请求方式，取值[HEAD,GET]
     */
    Method: string;
    /**
     * 健康检查判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和
     */
    StatusCode: number;
    /**
     * 是否同时下发http和https规则健康检查配置
     */
    ProtocolFlag?: number;
    /**
     * 被动探测开关，=1表示开启；=0表示关闭
     */
    PassiveEnable?: number;
    /**
     * 被动探测不健康屏蔽时间
     */
    BlockInter?: number;
    /**
     * 被动探测不健康统计间隔
     */
    FailedCountInter?: number;
    /**
     * 被动探测不健康阈值
     */
    FailedThreshold?: number;
    /**
     * 被动探测判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和
     */
    PassiveStatusCode?: number;
    /**
     * 被动探测配置状态，0： 正常，1：配置中，2：配置失败
     */
    PassiveStatus?: number;
}
/**
 * ModifyPacketFilterConfig返回参数结构体
 */
export interface ModifyPacketFilterConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCLevelPolicy请求参数结构体
 */
export interface DescribeCCLevelPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * IP值
     */
    Ip: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 协议，可取值http、https、http/https
     */
    Protocol: string;
}
/**
 * CreateWaterPrintConfig返回参数结构体
 */
export interface CreateWaterPrintConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOverviewAttackTrend请求参数结构体
 */
export interface DescribeOverviewAttackTrendRequest {
    /**
     * 攻击类型，取值ddos， cc
     */
    Type: string;
    /**
     * 纬度，当前仅支持attackcount
     */
    Dimension: string;
    /**
     * 周期，当前仅支持86400
     */
    Period: number;
    /**
     * 防护概览攻击趋势开始时间
     */
    StartTime: string;
    /**
     * 防护概览攻击趋势结束时间
     */
    EndTime: string;
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
    /**
     * 是否只获取安全加速实例。填写时，只能填写1或者0。当填写1时，表示返回安全加速实例。当填写0时，表示返回非安全加速实例。
     */
    FilterDamDDoSStatus?: number;
    /**
     * 获取特定状态的资源，运行中填idle，攻击中填attacking，封堵中填blocking，试用资源填trial
     */
    FilterStatus?: string;
    /**
     * 获取特定的实例Cname
     */
    FilterCname?: string;
    /**
     * 批量查询实例ID对应的高防IP实例资源
     */
    FilterInstanceIdList?: Array<string>;
    /**
     * 标签搜索
     */
    FilterTag?: TagFilter;
    /**
     * 按照套餐类型进行过滤
     */
    FilterPackType?: Array<string>;
    /**
     * 重保护航搜索
     */
    FilterConvoy?: number;
}
/**
 * DescribeNewL7Rules返回参数结构体
 */
export interface DescribeNewL7RulesResponse {
    /**
     * 转发规则列表
     */
    Rules?: Array<NewL7RuleEntry>;
    /**
     * 健康检查配置列表
     */
    Healths?: Array<L7RuleHealth>;
    /**
     * 总规则数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 防护概览DDoS攻击事件
 */
export interface OverviewDDoSEvent {
    /**
     * 事件Id
     */
    Id?: string;
    /**
     * ip
     */
    Vip?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 攻击类型
     */
    AttackType?: string;
    /**
     * 攻击状态，0：攻击中；1：攻击结束
     */
    AttackStatus?: number;
    /**
     * 攻击流量，单位Mbps
     */
    Mbps?: number;
    /**
     * 攻击包量，单位pps
     */
    Pps?: number;
    /**
     * 业务类型，bgp-multip：高防包；bgpip：高防ip；basic：基础防护
     */
    Business?: string;
    /**
     * 高防实例Id
     */
    InstanceId?: string;
    /**
     * 高防实例名称
     */
    InstanceName?: string;
}
/**
 * 三网高防套餐详情
 */
export interface StaticPackRelation {
    /**
     * 保底带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProtectBandwidth?: number;
    /**
     * 业务带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalBandwidth?: number;
    /**
     * 转发规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ForwardRulesLimit?: number;
    /**
     * 自动续费标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewFlag?: number;
    /**
     * 到期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurDeadline?: string;
}
/**
 * CreatePortAclConfig请求参数结构体
 */
export interface CreatePortAclConfigRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * 端口acl策略
     */
    AclConfig: AclConfig;
}
/**
 * DescribeCCThresholdList返回参数结构体
 */
export interface DescribeCCThresholdListResponse {
    /**
     * 清洗阈值策略列表总数
     */
    Total?: number;
    /**
     * 清洗阈值策略列表详情
     */
    ThresholdList?: Array<CCThresholdPolicy>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 标签类型
 */
export interface TagFilter {
    /**
     * 标签键
     */
    TagKey: string;
    /**
     * 标签键值列表
     */
    TagValue: Array<string>;
}
/**
 * IP封堵记录
 */
export interface IpBlockData {
    /**
     * 状态（Blocked：被封堵；UnBlocking：解封中；UnBlockFailed：解封失败）
     */
    Status?: string;
    /**
     * 资源IP
     */
    Ip?: string;
    /**
     * 封堵时间
     */
    BlockTime?: string;
    /**
     * 解封时间（预计解封时间）
     */
    UnBlockTime?: string;
    /**
     * 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封）
     */
    ActionType?: string;
    /**
     * 高防标记，0：非高防，1：高防
     */
    ProtectFlag?: number;
}
/**
 * DescribeListPacketFilterConfig返回参数结构体
 */
export interface DescribeListPacketFilterConfigResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 特征过滤配置
     */
    ConfigList?: Array<PacketFilterRelation>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSchedulingDomain请求参数结构体
 */
export interface CreateSchedulingDomainRequest {
    /**
     * 代表是否混合云本地化的产品。
  hybrid: 宙斯盾本地化
  不填写：其他
     */
    Product?: string;
}
/**
 * ModifyPortAclConfig请求参数结构体
 */
export interface ModifyPortAclConfigRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * 旧端口acl策略
     */
    OldAclConfig: AclConfig;
    /**
     * 新端口acl策略
     */
    NewAclConfig: AclConfig;
}
/**
 * 高防包绑定IP对象
 */
export interface BoundIpInfo {
    /**
     * IP地址
     */
    Ip: string;
    /**
     * 绑定的产品分类，绑定操作为必填项，解绑操作可不填。取值[public（CVM、CLB产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
     */
    BizType?: string;
    /**
     * IP所属的资源实例ID，绑定操作为必填项，解绑操作可不填。例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); 如果绑定的是托管IP没有对应的资源实例ID，请填写"none";
     */
    InstanceId?: string;
    /**
     * 产品分类下的子类型，绑定操作为必填项，解绑操作可不填。取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（弹性公网常规IP）]
     */
    DeviceType?: string;
    /**
     * 运营商，绑定操作为必填项，解绑操作可不填。0：电信；1：联通；2：移动；5：BGP
     */
    IspCode?: number;
    /**
     * 域名化资产对应的域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
}
/**
 * CreateDDoSBlackWhiteIpList请求参数结构体
 */
export interface CreateDDoSBlackWhiteIpListRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * IP列表
     */
    IpList: Array<IpSegment>;
    /**
     * IP类型，取值[black(黑名单IP), white(白名单IP)]
     */
    Type: string;
}
/**
 * ModifyCCReqLimitPolicy请求参数结构体
 */
export interface ModifyCCReqLimitPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 策略Id
     */
    PolicyId: string;
    /**
     * 策略项
     */
    Policy: CCReqLimitPolicyRecord;
}
/**
 * DescribeOverviewDDoSTrend请求参数结构体
 */
export interface DescribeOverviewDDoSTrendRequest {
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
     * DDoS防护子产品代号（bgpip表示高防IP；bgp-multip表示高防包；basic表示DDoS基础防护）
     */
    Business?: string;
    /**
     * 资源实例的IP列表
     */
    IpList?: Array<string>;
    /**
     * 资源实例ID
     */
    Id?: string;
}
/**
 * DisassociateDDoSEipAddress返回参数结构体
 */
export interface DisassociateDDoSEipAddressResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBgpBizTrend请求参数结构体
 */
export interface DescribeBgpBizTrendRequest {
    /**
     * DDoS防护子产品代号（bgp-multip表示高防包）
     */
    Business: string;
    /**
     * 统计开始时间。 例：“2020-09-22 00:00:00”，注意该时间必须为5分钟的倍数
     */
    StartTime: string;
    /**
     * 统计结束时间。 例：“2020-09-22 00:00:00”，注意该时间必须为5分钟的倍数
     */
    EndTime: string;
    /**
     * 统计维度，可取值intraffic, outtraffic, inpkg, outpkg； intraffic：入流量 outtraffic：出流量 inpkg：入包速率 outpkg：出包速率
     */
    MetricName: string;
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * 0表示固定时间，1表示自定义时间
     */
    Flag: number;
}
/**
 * DeleteCCThresholdPolicy返回参数结构体
 */
export interface DeleteCCThresholdPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBizHttpStatus请求参数结构体
 */
export interface DescribeBizHttpStatusRequest {
    /**
     * 统计方式，仅支持sum
     */
    Statistics: string;
    /**
     * DDoS防护子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 统计周期，可取值60，300，1800，3600， 21600，86400，单位秒
     */
    Period: number;
    /**
     * 统计开始时间。 如2020-02-01 12:04:12
     */
    StartTime: string;
    /**
     * 统计结束时间。如2020-02-03 18:03:23
     */
    EndTime: string;
    /**
     * 资源Id
     */
    Id: string;
    /**
     * 特定域名查询
     */
    Domain?: string;
    /**
     * 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效
     */
    ProtoInfo?: Array<ProtocolPort>;
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
    /**
     * 端口号：0~65535
     */
    Port?: number;
}
/**
 * CC分级策略
 */
export interface CCLevelPolicy {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * Ip
     */
    Ip: string;
    /**
     * 协议
     */
    Protocol: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 防护等级，可取值default表示默认策略，loose表示宽松，strict表示严格
     */
    Level: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 修改时间
     */
    ModifyTime: string;
}
/**
 * DescribeOverviewIndex返回参数结构体
 */
export interface DescribeOverviewIndexResponse {
    /**
     * IP总数
     */
    AllIpCount: number;
    /**
     * 高防IP总数（包含高防包+高防IP）
     */
    AntiddosIpCount: number;
    /**
     * 攻击IP总数
     */
    AttackIpCount: number;
    /**
     * 封堵IP总数
     */
    BlockIpCount: number;
    /**
     * 高防域名总数
     */
    AntiddosDomainCount: number;
    /**
     * 攻击域名总数
     */
    AttackDomainCount: number;
    /**
     * 攻击流量峰值
     */
    MaxAttackFlow: number;
    /**
     * 当前最近一条攻击中的起始时间
     */
    NewAttackTime: string;
    /**
     * 当前最近一条攻击中的IP
     */
    NewAttackIp: string;
    /**
     * 当前最近一条攻击中的攻击类型
     */
    NewAttackType: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePortAclConfigList请求参数结构体
 */
export interface CreatePortAclConfigListRequest {
    /**
     * 资源实例ID列表
     */
    InstanceIdList: Array<string>;
    /**
     * 端口acl策略
     */
    AclConfig: AclConfig;
}
/**
 * 基于端口的acl策略
 */
export interface AclConfig {
    /**
     * 协议类型, 可取值tcp, udp, all
     */
    ForwardProtocol: string;
    /**
     * 目的端口起始，可取值范围0~65535
     */
    DPortStart: number;
    /**
     * 目的端口结束，可取值范围0~65535
     */
    DPortEnd: number;
    /**
     * 来源端口起始，可取值范围0~65535
     */
    SPortStart: number;
    /**
     * 来源端口结束，可取值范围0~65535
     */
    SPortEnd: number;
    /**
     * 动作，可取值：drop， transmit， forward
     */
    Action: string;
    /**
     * 策略优先级，数字越小，级别越高，该规则越靠前匹配，取值1-1000
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Priority?: number;
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
 * SwitchWaterPrintConfig返回参数结构体
 */
export interface SwitchWaterPrintConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 修改时间
     */
    ModifyTime: string;
}
/**
 * DeleteWaterPrintKey返回参数结构体
 */
export interface DeleteWaterPrintKeyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CreateDDoSBlackWhiteIpList返回参数结构体
 */
export interface CreateDDoSBlackWhiteIpListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCcBlackWhiteIpList返回参数结构体
 */
export interface ModifyCcBlackWhiteIpListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNewL7Rules请求参数结构体
 */
export interface DescribeNewL7RulesRequest {
    /**
     * DDoS防护子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
     */
    StatusList?: Array<number | bigint>;
    /**
     * 域名搜索，选填，当需要搜索域名请填写
     */
    Domain?: string;
    /**
     * IP搜索，选填，当需要搜索IP请填写
     */
    Ip?: string;
    /**
     * 一页条数，默认值100，最大值100，超过100最大返回100条
     */
    Limit?: number;
    /**
     * 规则偏移量，取值为(页码-1)*一页条数
     */
    Offset?: number;
    /**
     * 转发协议搜索，选填，取值[http, https, http/https]
     */
    ProtocolList?: Array<string>;
    /**
     * 高防IP实例的Cname
     */
    Cname?: string;
    /**
     * 默认为false，当为true时，将不对各个规则做策略检查，直接导出所有规则
     */
    Export?: boolean;
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
 * DescribeOverviewIndex请求参数结构体
 */
export interface DescribeOverviewIndexRequest {
    /**
     * 拉取指标起始时间
     */
    StartTime: string;
    /**
     * 拉取指标结束时间
     */
    EndTime: string;
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
 * ModifyDDoSBlackWhiteIpList请求参数结构体
 */
export interface ModifyDDoSBlackWhiteIpListRequest {
    /**
     * 资源Id
     */
    InstanceId: string;
    /**
     * 当前配置的黑白名单类型，取值black时表示黑名单；取值white时表示白名单
     */
    OldIpType: string;
    /**
     * 当前配置的Ip段，包含ip与掩码
     */
    OldIp: IpSegment;
    /**
     * 修改后黑白名单类型，取值black时黑名单，取值white时白名单
     */
    NewIpType: string;
    /**
     * 当前配置的Ip段，包含ip与掩码
     */
    NewIp: IpSegment;
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
 * DescribeOverviewDDoSEventList返回参数结构体
 */
export interface DescribeOverviewDDoSEventListResponse {
    /**
     * 记录总数
     */
    Total: number;
    /**
     * 事件列表
     */
    EventList: Array<OverviewDDoSEvent>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCcGeoIPBlockConfig返回参数结构体
 */
export interface CreateCcGeoIPBlockConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOverviewAttackTrend返回参数结构体
 */
export interface DescribeOverviewAttackTrendResponse {
    /**
     * 攻击类型
     */
    Type?: string;
    /**
     * 防护概览攻击趋势起始时间
     */
    StartTime?: string;
    /**
     * 防护概览攻击趋势结束时间
     */
    EndTime?: string;
    /**
     * 周期
     */
    Period?: number;
    /**
     * 每个周期点的攻击次数
     */
    Data?: Array<number | bigint>;
    /**
     * 包含的周期点数
     */
    Count?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 业务流量的http状态码聚合数据
 */
export interface HttpStatusMap {
    /**
     * http2xx回源状态码
     */
    SourceHttp2xx: Array<number>;
    /**
     * http5xx状态码
     */
    Http5xx: Array<number>;
    /**
     * http5xx回源状态码
     */
    SourceHttp5xx: Array<number>;
    /**
     * http404回源状态码
     */
    SourceHttp404: Array<number>;
    /**
     * http4xx状态码
     */
    Http4xx: Array<number>;
    /**
     * http4xx回源状态码
     */
    SourceHttp4xx: Array<number>;
    /**
     * http2xx状态码
     */
    Http2xx: Array<number>;
    /**
     * http404状态码
     */
    Http404: Array<number>;
    /**
     * http3xx回源状态码
     */
    SourceHttp3xx: Array<number>;
    /**
     * http3xx状态码
     */
    Http3xx: Array<number>;
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
     * 资源实例
     */
    InstanceDetails: Array<InstanceRelation>;
    /**
     * 规则所属的资源实例
     */
    InstanceDetailRule?: Array<RuleInstanceRelation>;
    /**
     * 协议
     */
    Protocol?: string;
    /**
     * 端口号
     */
    Vport?: number;
}
/**
 * ModifyPortAclConfig返回参数结构体
 */
export interface ModifyPortAclConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBasicDeviceStatus请求参数结构体
 */
export interface DescribeBasicDeviceStatusRequest {
    /**
     * IP 资源列表
     */
    IpList?: Array<string>;
    /**
     * 域名化资源传id
     */
    IdList?: Array<string>;
    /**
     * 地域名称
     */
    FilterRegion?: number;
    /**
     * cnameWaf资源
     */
    CnameWafIdList?: Array<string>;
}
/**
 * DeleteCcGeoIPBlockConfig请求参数结构体
 */
export interface DeleteCcGeoIPBlockConfigRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * CC区域封禁配置，填写参数时配置ID不能为空
     */
    CcGeoIPBlockConfig: CcGeoIPBlockConfig;
}
/**
 * DescribeCCLevelList返回参数结构体
 */
export interface DescribeCCLevelListResponse {
    /**
     * 分级策略列表总数
     */
    Total?: number;
    /**
     * 分级策略列表总数
     */
    LevelList?: Array<CCLevelPolicy>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 操作返回码，只用于返回成功的情况
 */
export interface SuccessCode {
    /**
     * 描述
     */
    Message?: string;
    /**
     * 成功/错误码
     */
    Code?: string;
}
/**
 * AssociateDDoSEipAddress返回参数结构体
 */
export interface AssociateDDoSEipAddressResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteCCLevelPolicy返回参数结构体
 */
export interface DeleteCCLevelPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * CreateCcGeoIPBlockConfig请求参数结构体
 */
export interface CreateCcGeoIPBlockConfigRequest {
    /**
     * 实例id
     */
    InstanceId: string;
    /**
     * ip地址
     */
    IP: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 协议类型
     */
    Protocol: string;
    /**
     * CC区域封禁配置
     */
    CcGeoIPBlockConfig: CcGeoIPBlockConfig;
}
/**
 * DeletePortAclConfig返回参数结构体
 */
export interface DeletePortAclConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDDoSSpeedLimitConfig返回参数结构体
 */
export interface CreateDDoSSpeedLimitConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNewL7RulesErrHealth返回参数结构体
 */
export interface DescribeNewL7RulesErrHealthResponse {
    /**
     * 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP及错误信息，多个IP用","分割
     */
    ErrHealths?: Array<KeyValue>;
    /**
     * 异常规则的总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Data?: Array<KeyValue>;
    /**
     * 域名化资产的名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLBData?: Array<KeyValue>;
    /**
     * cnamewaf资源状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CnameWafData?: Array<KeyValue>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBgpBizTrend返回参数结构体
 */
export interface DescribeBgpBizTrendResponse {
    /**
     * 曲线图各个时间点的值
     */
    DataList?: Array<number | bigint>;
    /**
     * 曲线图取值个数
     */
    Total?: number;
    /**
     * 统计纬度
     */
    MetricName?: string;
    /**
     * 返回数组最大值
     */
    MaxData?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 权重值，取值[0,100]，暂不支持
     */
    Weight: number;
    /**
     * 8000
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * 备份源站，1: 备份源站，0: 普通源站
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Backup?: number;
}
/**
 * DescribePendingRiskInfo返回参数结构体
 */
export interface DescribePendingRiskInfoResponse {
    /**
     * 是否为付费用户，true：付费用户， false：普通用户
     */
    IsPaidUsr: boolean;
    /**
     * 攻击中的资源数量
     */
    AttackingCount: number;
    /**
     * 封堵中的资源数量
     */
    BlockingCount: number;
    /**
     * 已过期的资源数量
     */
    ExpiredCount: number;
    /**
     * 所有待处理风险事件总数
     */
    Total: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * ping of death防护，取值[0(防护关)，1(防护开)]
     */
    PingOfDeath?: number;
    /**
     * tear drop防护，取值[0(防护关)，1(防护开)]
     */
    TearDrop?: number;
}
/**
 * DeleteCCPrecisionPolicy请求参数结构体
 */
export interface DeleteCCPrecisionPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 策略Id
     */
    PolicyId: string;
}
/**
 * 高防IP资产实例信息
 */
export interface BGPIPInstance {
    /**
     * 资产实例的详细信息
     */
    InstanceDetail?: InstanceRelation;
    /**
     * 资产实例的规格信息
     */
    SpecificationLimit?: BGPIPInstanceSpecification;
    /**
     * 资产实例的使用统计信息
     */
    Usage?: BGPIPInstanceUsages;
    /**
     * 资产实例所在的地域
     */
    Region?: RegionInfo;
    /**
     * 资产实例的防护状态，状态码如下：
  "idle"：正常状态(无攻击)
  "attacking"：攻击中
  "blocking"：封堵中
  "creating"：创建中
  "deblocking"：解封中
  "isolate"：回收隔离中
     */
    Status?: string;
    /**
     * 到期时间
     */
    ExpiredTime?: string;
    /**
     * 购买时间
     */
    CreatedTime?: string;
    /**
     * 资产实例的名称
     */
    Name?: string;
    /**
     * 资产实例所属的套餐包信息，
  注意：当资产实例不是套餐包的实例时，此字段为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackInfo?: PackInfo;
    /**
     * 资产实例所属的三网套餐包详情，
  注意：当资产实例不是三网套餐包的实例时，此字段为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StaticPackRelation?: StaticPackRelation;
    /**
     * 区分高防IP境外线路
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: number;
    /**
     * 区分集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tgw?: number;
    /**
     * 高防弹性公网IP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)。只对高防弹性公网IP实例有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EipAddressStatus?: string;
    /**
     * 是否高防弹性公网IP实例，是为1，否为0。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EipFlag?: number;
    /**
     * 资产实例所属的高防弹性公网IP套餐包详情，
  注意：当资产实例不是高防弹性公网IP套餐包的实例时，此字段为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EipAddressPackRelation?: EipAddressPackRelation;
    /**
     * 高防弹性公网IP关联的实例信息。
  注意：当资产实例不是高防弹性公网IP实例时，此字段为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EipAddressInfo?: EipAddressRelation;
    /**
     * 建议客户接入的域名，客户可使用域名接入。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 是否开启安全加速，是为1，否为0。
     */
    DamDDoSStatus?: number;
    /**
     * 是否Ipv6版本的IP, 是为1，否为0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    V6Flag?: number;
    /**
     * 是否渠道版高防IP，是为1，否为0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BGPIPChannelFlag?: number;
    /**
     * 资源关联标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagInfoList?: Array<TagInfo>;
    /**
     * 资产实例所属的全力防护套餐包详情，
  注意：当资产实例不是全力防护套餐包的实例时，此字段为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AnycastOutPackRelation?: AnycastOutPackRelation;
    /**
     * 资源实例版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceVersion?: number;
    /**
     * 重保实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConvoyId?: string;
    /**
     * 带宽后付费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ElasticBandwidth?: number;
    /**
     * 是否为EO代播的ip: 1是，0不是
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EOFlag?: number;
}
/**
 * DeleteWaterPrintConfig返回参数结构体
 */
export interface DeleteWaterPrintConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 资源实例
     */
    InstanceDetails: Array<InstanceRelation>;
    /**
     * 规则所属的资源实例
     */
    InstanceDetailRule?: Array<RuleInstanceRelation>;
}
/**
 * DeletePacketFilterConfig返回参数结构体
 */
export interface DeletePacketFilterConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateProtocolBlockConfig返回参数结构体
 */
export interface CreateProtocolBlockConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePortAclConfigList返回参数结构体
 */
export interface CreatePortAclConfigListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeDDoSBlackWhiteIpList请求参数结构体
 */
export interface DescribeDDoSBlackWhiteIpListRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
}
/**
 * 连接抑制列表
 */
export interface ConnectLimitRelation {
    /**
     * 连接抑制配置
     */
    ConnectLimitConfig: ConnectLimitConfig;
    /**
     * 连接抑制关联的实例信息
     */
    InstanceDetailList: Array<InstanceRelation>;
}
/**
 * DescribeListBlackWhiteIpList返回参数结构体
 */
export interface DescribeListBlackWhiteIpListResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 黑白IP列表
     */
    IpList?: Array<BlackWhiteIpRelation>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeCCReqLimitPolicyList请求参数结构体
 */
export interface DescribeCCReqLimitPolicyListRequest {
    /**
     * DDoS防护子产品代号（bgp-multip表示高防包，bgpip表示高防IP）
     */
    Business: string;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset: number;
    /**
     * 一页条数
     */
    Limit: number;
    /**
     * 指定实例Id
     */
    InstanceId?: string;
    /**
     * IP地址，普通高防IP要传该字段
     */
    Ip?: string;
    /**
     * 域名，普通高防IP要传该字段
     */
    Domain?: string;
    /**
     * 协议，普通高防IP要传该字段
     */
    Protocol?: string;
}
/**
 * 端口acl策略配置与高防资源关联
 */
export interface AclConfigRelation {
    /**
     * acl策略
     */
    AclConfig: AclConfig;
    /**
     * 实例列表
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSThreshold返回参数结构体
 */
export interface ModifyDDoSThresholdResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDDoSGeoIPBlockConfig返回参数结构体
 */
export interface CreateDDoSGeoIPBlockConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CC精准防护策略信息
 */
export interface CCPrecisionPolicy {
    /**
     * 策略Id
     */
    PolicyId: string;
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * Ip地址
     */
    Ip: string;
    /**
     * 协议
     */
    Protocol: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 策略方式（丢弃或验证码）
     */
    PolicyAction: string;
    /**
     * 策略列表
     */
    PolicyList: Array<CCPrecisionPlyRecord>;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 修改时间
     */
    ModifyTime: string;
}
/**
 * DescribeOverviewDDoSEventList请求参数结构体
 */
export interface DescribeOverviewDDoSEventListRequest {
    /**
     * 起始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 可选按攻击状态过滤，start：攻击中；end：攻击结束
     */
    AttackStatus?: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 记录条数
     */
    Limit?: number;
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
     * 协议（可取值https）
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
 * 高防弹性公网IP关联信息
 */
export interface EipAddressRelation {
    /**
     * 高防弹性公网IP绑定的实例地区，例如hk代表中国香港
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EipAddressRegion?: string;
    /**
     * 绑定的资源实例ID。可能是一个CVM。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EipBoundRscIns?: string;
    /**
     * 绑定的弹性网卡ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EipBoundRscEni?: string;
    /**
     * 绑定的资源内网ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EipBoundRscVip?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
}
/**
 * DeleteDDoSBlackWhiteIpList请求参数结构体
 */
export interface DeleteDDoSBlackWhiteIpListRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * IP列表
     */
    IpList: Array<IpSegment>;
    /**
     * IP类型，取值[black(黑名单IP), white(白名单IP)]
     */
    Type: string;
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
 * DescribeBGPIPL7Rules返回参数结构体
 */
export interface DescribeBGPIPL7RulesResponse {
    /**
     * 转发规则列表
     */
    Rules?: Array<BGPIPL7RuleEntry>;
    /**
     * 健康检查配置列表
     */
    Healths?: Array<L7RuleHealth>;
    /**
     * 总规则数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDDoSConnectLimit返回参数结构体
 */
export interface CreateDDoSConnectLimitResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 实例对应的cname
     */
    Cname?: string;
    /**
     * 资源flag，0：高防包资源，1：高防IP资源，2：非高防资源IP
     */
    ResourceFlag?: number;
    /**
     * 域名化资产对应的域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
}
/**
 * DescribeCcBlackWhiteIpList请求参数结构体
 */
export interface DescribeCcBlackWhiteIpListRequest {
    /**
     * DDoS防护子产品代号（bgp-multip：表示高防包；bgpip：表示高防IP）
     */
    Business: string;
    /**
     * 指定特定实例Id
     */
    InstanceId: string;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset: number;
    /**
     * 一页条数
     */
    Limit: number;
    /**
     * IP地址，普通高防IP要传该字段
     */
    Ip?: string;
    /**
     * 域名，普通高防IP要传该字段
     */
    Domain?: string;
    /**
     * 协议，普通高防IP要传该字段
     */
    Protocol?: string;
    /**
     * 筛选IP，需要筛选黑白名单IP时传该字段
     */
    FilterIp?: string;
    /**
     * 黑白名单筛选字段，需要筛选黑白名单列表时传该字段
     */
    FilterType?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeletePortAclConfig请求参数结构体
 */
export interface DeletePortAclConfigRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * 端口acl策略
     */
    AclConfig: AclConfig;
}
/**
 * DescribeIpBlockList请求参数结构体
 */
export declare type DescribeIpBlockListRequest = null;
/**
 * DescribePendingRiskInfo请求参数结构体
 */
export declare type DescribePendingRiskInfoRequest = null;
/**
 * CreatePortAclConfig返回参数结构体
 */
export interface CreatePortAclConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSLevel返回参数结构体
 */
export interface ModifyDDoSLevelResponse {
    /**
     * 防护等级，取值[low,middle,high]
     */
    DDoSLevel?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCCPrecisionPolicy请求参数结构体
 */
export interface CreateCCPrecisionPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * IP值
     */
    Ip: string;
    /**
     * 协议， 可取值http，https，http/https
     */
    Protocol: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 策略方式，可取值alg表示验证码，drop表示丢弃
     */
    PolicyAction: string;
    /**
     * 策略记录
     */
    PolicyList: Array<CCPrecisionPlyRecord>;
}
/**
 * 连接抑制相关配置
 */
export interface ConnectLimitConfig {
    /**
     * 基于源IP+目的IP的每秒新建数限制
     */
    SdNewLimit: number;
    /**
     * 基于目的IP的每秒新建数限制
     */
    DstNewLimit: number;
    /**
     * 基于源IP+目的IP的并发连接控制
     */
    SdConnLimit: number;
    /**
     * 基于目的IP+目的端口的并发连接控制
     */
    DstConnLimit: number;
    /**
     * 基于连接抑制触发阈值，取值范围[0,4294967295]
     */
    BadConnThreshold: number;
    /**
     * 异常连接检测条件，空连接防护开关，，取值范围[0,1]
     */
    NullConnEnable: number;
    /**
     * 异常连接检测条件，连接超时，，取值范围[0,65535]
     */
    ConnTimeout: number;
    /**
     * 异常连接检测条件，syn占比ack百分比，，取值范围[0,100]
     */
    SynRate: number;
    /**
     * 异常连接检测条件，syn阈值，取值范围[0,100]
     */
    SynLimit: number;
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
 * Anycast转外套餐详情
 */
export interface AnycastOutPackRelation {
    /**
     * 业务带宽(单位M)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalBandwidth?: number;
    /**
     * 转发规则数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ForwardRulesLimit?: number;
    /**
     * 自动续费标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewFlag?: number;
    /**
     * 到期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurDeadline?: string;
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
    /**
     * SYN FLOOD流量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SynFloodThreshold: number;
    /**
     * SYN FLOOD包量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SynFloodPktThreshold: number;
    /**
     * UDP FLOOD流量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UdpFloodThreshold: number;
    /**
     * UDP FLOOD包量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UdpFloodPktThreshold: number;
    /**
     * ACK FLOOD流量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AckFloodThreshold: number;
    /**
     * ACK FLOOD包量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AckFloodPktThreshold: number;
    /**
     * SYNACK FLOOD流量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SynAckFloodThreshold: number;
    /**
     * SYNACK FLOOD包量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SynAckFloodPktThreshold: number;
    /**
     * RST FLOOD流量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RstFloodThreshold: number;
    /**
     * RST FLOOD包量阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RstFloodPktThreshold: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    L7Rules?: Array<InsL7Rules>;
    /**
     * 证书ID
     */
    CertId?: string;
}
/**
 * ip段数据结构
 */
export interface IpSegment {
    /**
     * ip地址
     */
    Ip: string;
    /**
     * ip掩码，如果为32位ip，填0
     */
    Mask: number;
}
/**
 * CreateDefaultAlarmThreshold返回参数结构体
 */
export interface CreateDefaultAlarmThresholdResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSThreshold请求参数结构体
 */
export interface ModifyDDoSThresholdRequest {
    /**
     * DDoS清洗阈值，取值[0, 60, 80, 100, 150, 200, 250, 300, 400, 500, 700, 1000];
  当设置值为0时，表示采用默认值；
     */
    Threshold: number;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 配置其他阈值标志位，1表示配置其他阈值
     */
    OtherThresholdFlag?: number;
    /**
     * SYN FLOOD流量阈值
     */
    SynFloodThreshold?: number;
    /**
     * SYN FLOOD包量阈值
     */
    SynFloodPktThreshold?: number;
    /**
     * UDP FLOOD流量阈值
     */
    UdpFloodThreshold?: number;
    /**
     * UDP FLOOD包量阈值
     */
    UdpFloodPktThreshold?: number;
    /**
     * ACK FLOOD流量阈值
     */
    AckFloodThreshold?: number;
    /**
     * ACK FLOOD包量阈值
     */
    AckFloodPktThreshold?: number;
    /**
     * SYNACK FLOOD流量阈值
     */
    SynAckFloodThreshold?: number;
    /**
     * SYNACK FLOOD包量阈值
     */
    SynAckFloodPktThreshold?: number;
    /**
     * RST FLOOD流量阈值
     */
    RstFloodThreshold?: number;
    /**
     * RST FLOOD包量阈值
     */
    RstFloodPktThreshold?: number;
}
/**
 * ModifyDDoSLevel请求参数结构体
 */
export interface ModifyDDoSLevelRequest {
    /**
     * 资源ID
     */
    Id: string;
    /**
     * DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * =get表示读取防护等级；=set表示修改防护等级
     */
    Method: string;
    /**
     * 防护等级，取值[low,middle,high]；当Method=set时必填
     */
    DDoSLevel?: string;
}
/**
 * DescribeListSchedulingDomain返回参数结构体
 */
export interface DescribeListSchedulingDomainResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 调度域名信息列表
     */
    DomainList?: Array<SchedulingDomainInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CC地域封禁列表详情
 */
export interface CcGeoIpPolicyNew {
    /**
     * 策略Id
     */
    PolicyId: string;
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * IP地址
     */
    Ip: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 协议，可取值HTTP，HTTPS
     */
    Protocol: string;
    /**
     * 用户动作，drop或alg
     */
    Action: string;
    /**
     * 地域类型，分为china, oversea与customized
     */
    RegionType: string;
    /**
     * 用户选择封禁的地域ID列表
     */
    AreaList: Array<number | bigint>;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 修改时间
     */
    ModifyTime: string;
}
/**
 * ModifyDDoSBlackWhiteIpList返回参数结构体
 */
export interface ModifyDDoSBlackWhiteIpListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CC频率限制策略
 */
export interface CCReqLimitPolicy {
    /**
     * 策略Id
     */
    PolicyId: string;
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * Ip地址
     */
    Ip: string;
    /**
     * 协议，可取值HTTP，HTTPS
     */
    Protocol: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 策略项
     */
    PolicyRecord: CCReqLimitPolicyRecord;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 修改时间
     */
    ModifyTime: string;
}
/**
 * DescribeCCPrecisionPlyList请求参数结构体
 */
export interface DescribeCCPrecisionPlyListRequest {
    /**
     * DDoS防护子产品代号（bgpip-multip：表示高防包；bgpip：表示高防IP）
     */
    Business: string;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset: number;
    /**
     * 一页条数
     */
    Limit: number;
    /**
     * 指定特定实例Id
     */
    InstanceId?: string;
    /**
     * IP地址，普通高防IP要传该字段
     */
    Ip?: string;
    /**
     * 域名，普通高防IP要传该字段
     */
    Domain?: string;
    /**
     * 协议，普通高防IP要传该字段
     */
    Protocol?: string;
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
 * DescribeCCLevelList请求参数结构体
 */
export interface DescribeCCLevelListRequest {
    /**
     * DDoS防护子产品代号（bgp-multip表示高防包）
     */
    Business: string;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset: number;
    /**
     * 一页条数
     */
    Limit: number;
    /**
     * 指定实例Id
     */
    InstanceId?: string;
}
/**
 * ModifyCCThresholdPolicy请求参数结构体
 */
export interface ModifyCCThresholdPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * IP地址
     */
    Ip: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 协议，可取值http，https，http/https
     */
    Protocol: string;
    /**
     * 清洗阈值，-1表示开启“默认”模式
     */
    Threshold: number;
}
/**
 * DeleteDDoSGeoIPBlockConfig返回参数结构体
 */
export interface DeleteDDoSGeoIPBlockConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 高防IP实例资源的cname
     */
    FilterCname?: string;
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
 * CreateNewL7Rules请求参数结构体
 */
export interface CreateNewL7RulesRequest {
    /**
     * 规则列表
     */
    Rules: Array<L7RuleEntry>;
    /**
     * DDoS防护子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 资源ID列表
     */
    IdList: Array<string>;
    /**
     * 资源IP列表
     */
    VipList: Array<string>;
}
/**
 * DescribeOverviewCCTrend返回参数结构体
 */
export interface DescribeOverviewCCTrendResponse {
    /**
     * 值个数
     */
    Count?: number;
    /**
     * 值数组
     */
    Data?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCCReqLimitPolicy返回参数结构体
 */
export interface ModifyCCReqLimitPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    ProtectBandwidth?: number;
    /**
     * 防护次数，单位次
     */
    ProtectCountLimit?: number;
    /**
     * 防护IP数，单位个
     */
    ProtectIPNumberLimit?: number;
    /**
     * 自动续费状态，取值[
  0：没有开启自动续费
  1：开启了自动续费
  ]
     */
    AutoRenewFlag?: number;
    /**
     * 联合产品标记，0代表普通高防包，1代表联合高防包
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnionPackFlag?: number;
    /**
     * 业务带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceBandWidth?: number;
    /**
     * 战斗服版本标记，0表示普通高防包，1表示战斗服高防包
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BattleEditionFlag?: number;
    /**
     * 渠道版标记，0表示普通高防包，1表示渠道版高防包
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelEditionFlag?: number;
    /**
     * 高防包企业版标记，0表示普通高防包；1表示企业版高防包
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnterpriseFlag?: number;
    /**
     * 高防包企业版弹性阈值，0表示未开启；大于0为弹性防护阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ElasticLimit?: number;
    /**
     * 降配后的防护能力，单位Gbps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownGradeProtect?: number;
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
 * CreateDDoSConnectLimit请求参数结构体
 */
export interface CreateDDoSConnectLimitRequest {
    /**
     * 资源实例Id
     */
    InstanceId: string;
    /**
     * 连接抑制配置
     */
    ConnectLimitConfig: ConnectLimitConfig;
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
 * DescribeBizHttpStatus返回参数结构体
 */
export interface DescribeBizHttpStatusResponse {
    /**
     * 业务流量http状态码统计数据
     */
    HttpStatusMap?: HttpStatusMap;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例7层规则
 */
export interface InsL7Rules {
    /**
     * 规则在中间状态不可修改，只可在（0， 2， 8）状态可编辑。
  规则状态，0: 正常运行中, 1: 配置规则中(配置生效中), 2: 配置规则失败（配置生效失败）, 3: 删除规则中(删除生效中), 5: 删除规则失败(删除失败), 6: 等待添加规则, 7: 等待删除规则, 8: 等待上传证书, 9: 规则对应的资源不存在，被隔离, 10:等待修改规则, 11:配置修改中
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
 * DescribeCCReqLimitPolicyList返回参数结构体
 */
export interface DescribeCCReqLimitPolicyListResponse {
    /**
     * 频率限制列表总数
     */
    Total?: number;
    /**
     * 频率限制列表详情
     */
    RequestLimitPolicyList?: Array<CCReqLimitPolicy>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNewL7RulesErrHealth请求参数结构体
 */
export interface DescribeNewL7RulesErrHealthRequest {
    /**
     * DDoS防护子产品代号(bgpip表示高防IP)
     */
    Business: string;
    /**
     * 规则Id列表
     */
    RuleIdList?: Array<string>;
}
/**
 * ModifyCCPrecisionPolicy返回参数结构体
 */
export interface ModifyCCPrecisionPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DDoS防护的区域封禁配置
 */
export interface CcGeoIPBlockConfig {
    /**
     * 区域类型，取值[
  oversea(境外)
  china(国内)
  customized(自定义地区)
  ]
     */
    RegionType: string;
    /**
     * 封禁动作，取值[
  drop(拦截)
  alg(人机校验)
  ]
     */
    Action: string;
    /**
     * 配置ID，配置添加成功后生成；添加新配置时不用填写此字段，修改或删除配置时需要填写配置ID
     */
    Id?: string;
    /**
     * 当RegionType为customized时，必须填写AreaList；当RegionType为china或oversea时，AreaList为空
     */
    AreaList?: Array<number | bigint>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCThresholdList请求参数结构体
 */
export interface DescribeCCThresholdListRequest {
    /**
     * DDoS防护子产品代号（bgp-multip表示高防包）
     */
    Business: string;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset: number;
    /**
     * 一页条数
     */
    Limit: number;
    /**
     * 指定实例Id
     */
    InstanceId?: string;
}
/**
 * L7规则
 */
export interface BGPIPL7RuleEntry {
    /**
     * 转发协议，取值[http, https]
     */
    Protocol: string;
    /**
     * 转发域名
     */
    Domain: string;
    /**
     * 负载均衡方式，取值[1(加权轮询)]
     */
    LbType: number;
    /**
     * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]
     */
    KeepEnable: number;
    /**
     * 会话保持时间，单位秒
     */
    KeepTime: number;
    /**
     * 回源方式，取值[1(域名回源)，2(IP回源)]
     */
    SourceType: number;
    /**
     * 回源列表
     */
    SourceList: Array<L4RuleSource>;
    /**
     * 区域码
     */
    Region?: number;
    /**
     * 资源Id
     */
    Id?: string;
    /**
     * 资源Ip
     */
    Ip?: string;
    /**
     * 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段；
     */
    RuleId?: string;
    /**
     * 规则描述
     */
    RuleName?: string;
    /**
     * 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0
     */
    CertType?: number;
    /**
     * 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID
     */
    SSLId?: string;
    /**
     * 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
     */
    Cert?: string;
    /**
     * 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
     */
    PrivateKey?: string;
    /**
     * 规则状态，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
     */
    Status?: number;
    /**
     * cc防护状态，取值[0(关闭), 1(开启)]
     */
    CCStatus?: number;
    /**
     * HTTPS协议的CC防护状态，取值[0(关闭), 1(开启)]
     */
    CCEnable?: number;
    /**
     * HTTPS协议的CC防护阈值（已废弃）
     */
    CCThreshold?: number;
    /**
     * HTTPS协议的CC防护等级
     */
    CCLevel?: string;
    /**
     * 修改时间
     */
    ModifyTime?: string;
    /**
     * 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭
     */
    HttpsToHttpEnable?: number;
    /**
     * 接入端口值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualPort?: number;
    /**
     * http强制跳转https，1表示打开，0表示关闭
     */
    RewriteHttps?: number;
    /**
     * 规则配置失败时的详细错误原因(仅当Status=2时有效)，1001证书不存在，1002证书获取失败，1003证书上传失败，1004证书已过期
     */
    ErrCode?: number;
    /**
     * 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: number;
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
 * DescribeBizTrend返回参数结构体
 */
export interface DescribeBizTrendResponse {
    /**
     * 曲线图各个时间点的值
     */
    DataList?: Array<number>;
    /**
     * 统计纬度
     */
    MetricName?: string;
    /**
     * 返回DataList中的最大值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxData?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * L7规则
 */
export interface NewL7RuleEntry {
    /**
     * 转发协议，取值[http, https]
     */
    Protocol: string;
    /**
     * 转发域名
     */
    Domain: string;
    /**
     * 负载均衡方式，取值[1(加权轮询)]
     */
    LbType: number;
    /**
     * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]
     */
    KeepEnable: number;
    /**
     * 会话保持时间，单位秒
     */
    KeepTime: number;
    /**
     * 回源方式，取值[1(域名回源)，2(IP回源)]
     */
    SourceType: number;
    /**
     * 回源列表
     */
    SourceList: Array<L4RuleSource>;
    /**
     * 区域码
     */
    Region?: number;
    /**
     * 资源Id
     */
    Id?: string;
    /**
     * 资源Ip
     */
    Ip?: string;
    /**
     * 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段；
     */
    RuleId?: string;
    /**
     * 规则描述
     */
    RuleName?: string;
    /**
     * 证书来源，当转发协议为https时必须填，取值[2(腾讯云托管证书)]，当转发协议为http时也可以填0
     */
    CertType?: number;
    /**
     * 当证书来源为腾讯云托管证书时，此字段必须填写托管证书ID
     */
    SSLId?: string;
    /**
     * 当证书来源为自有证书时，此字段必须填写证书内容；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
     */
    Cert?: string;
    /**
     * 当证书来源为自有证书时，此字段必须填写证书密钥；(因已不再支持自有证书，此字段已弃用，请不用填写此字段)
     */
    PrivateKey?: string;
    /**
     * 规则状态，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
     */
    Status?: number;
    /**
     * cc防护状态，取值[0(关闭), 1(开启)]
     */
    CCStatus?: number;
    /**
     * HTTPS协议的CC防护状态，取值[0(关闭), 1(开启)]
     */
    CCEnable?: number;
    /**
     * HTTPS协议的CC防护阈值（已废弃）
     */
    CCThreshold?: number;
    /**
     * HTTPS协议的CC防护阈值 -1：默认防御阈值
  0: 关闭
  大于0：自定义防护阈值
     */
    CCThresholdNew?: number;
    /**
     * HTTPS协议的CC防护等级
     */
    CCLevel?: string;
    /**
     * 修改时间
     */
    ModifyTime?: string;
    /**
     * 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭
     */
    HttpsToHttpEnable?: number;
    /**
     * 接入端口值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualPort?: number;
    /**
     * http强制跳转https，1表示打开，0表示关闭
     */
    RewriteHttps?: number;
    /**
     * 规则配置失败时的详细错误原因(仅当Status=2时有效)，1001证书不存在，1002证书获取失败，1003证书上传失败，1004证书已过期
     */
    ErrCode?: number;
    /**
     * 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: number;
}
/**
 * DeleteCcBlackWhiteIpList返回参数结构体
 */
export interface DeleteCcBlackWhiteIpListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 是否开启代理，1开启则忽略IP+端口校验；0关闭则需要IP+端口校验
     */
    CloudSdkProxy?: number;
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
     * CLB所在地域，例如：ap-hongkong。
     */
    LoadBalancerRegion: string;
    /**
     * CLB内网IP
     */
    Vip?: string;
}
/**
 * ModifyCCPrecisionPolicy请求参数结构体
 */
export interface ModifyCCPrecisionPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 策略Id
     */
    PolicyId: string;
    /**
     * 策略方式。可取值：alg、drop、trans。alg指返回验证码方式验证，drop表示该访问丢弃，trans表示该访问放行。
     */
    PolicyAction: string;
    /**
     * 策略记录
     */
    PolicyList: Array<CCPrecisionPlyRecord>;
}
/**
 * DeleteDDoSBlackWhiteIpList返回参数结构体
 */
export interface DeleteDDoSBlackWhiteIpListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CC清洗阈值策略
 */
export interface CCThresholdPolicy {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * Ip地址
     */
    Ip: string;
    /**
     * 协议
     */
    Protocol: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 清洗阈值
     */
    Threshold: number;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 修改时间
     */
    ModifyTime: string;
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
    /**
     * 是否开启代理，1开启则忽略IP+端口校验；0关闭则需要IP+端口校验
     */
    CloudSdkProxy?: number;
}
/**
 * ModifyDomainUsrName返回参数结构体
 */
export interface ModifyDomainUsrNameResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Count?: number;
    /**
     * DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business?: string;
    /**
     * 资源的IP
     */
    Ip?: string;
    /**
     * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
     */
    Period?: number;
    /**
     * 统计开始时间
     */
    StartTime?: string;
    /**
     * 统计结束时间
     */
    EndTime?: string;
    /**
     * 值数组
     */
    Data?: Array<number | bigint>;
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))，incount(请求次数), dropcount(攻击次数)]
     */
    MetricName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 域名化资产对应的域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
}
/**
 * DeleteCcBlackWhiteIpList请求参数结构体
 */
export interface DeleteCcBlackWhiteIpListRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * 策略Id
     */
    PolicyId: string;
}
/**
 * DescribeCcGeoIPBlockConfigList返回参数结构体
 */
export interface DescribeCcGeoIPBlockConfigListResponse {
    /**
     * CC地域封禁策略列表总数
     */
    Total?: number;
    /**
     * CC地域封禁策略列表详情
     */
    CcGeoIpPolicyList?: Array<CcGeoIpPolicyNew>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDDoSAI返回参数结构体
 */
export interface CreateDDoSAIResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeListBGPInstances返回参数结构体
 */
export interface DescribeListBGPInstancesResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 高防包资产实例列表
     */
    InstanceList?: Array<BGPInstance>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签信息，用于资源列表返回关联的标签
 */
export interface TagInfo {
    /**
     * 标签键
     */
    TagKey: string;
    /**
     * 标签值
     */
    TagValue: string;
}
/**
 * DescribeDDoSTrend请求参数结构体
 */
export interface DescribeDDoSTrendRequest {
    /**
     * DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
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
 * DeleteCCRequestLimitPolicy返回参数结构体
 */
export interface DeleteCCRequestLimitPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCcBlackWhiteIpList请求参数结构体
 */
export interface CreateCcBlackWhiteIpListRequest {
    /**
     * 资源实例ID
     */
    InstanceId: string;
    /**
     * IP列表
     */
    IpList: Array<IpSegment>;
    /**
     * IP类型，取值[black(黑名单IP), white(白名单IP)]
     */
    Type: string;
    /**
     * Ip地址
     */
    Ip: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 协议
     */
    Protocol: string;
}
/**
 * 高防包资产实例信息
 */
export interface BGPInstance {
    /**
     * 资产实例的详细信息
     */
    InstanceDetail?: InstanceRelation;
    /**
     * 资产实例的规格信息
     */
    SpecificationLimit?: BGPInstanceSpecification;
    /**
     * 资产实例的使用统计信息
     */
    Usage?: BGPInstanceUsages;
    /**
     * 资产实例所在的地域
     */
    Region?: RegionInfo;
    /**
     * 资产实例的防护状态，状态码如下：
  "idle"：正常状态(无攻击)
  "attacking"：攻击中
  "blocking"：封堵中
  "creating"：创建中
  "deblocking"：解封中
  "isolate"：回收隔离中
     */
    Status?: string;
    /**
     * 购买时间
     */
    CreatedTime?: string;
    /**
     * 到期时间
     */
    ExpiredTime?: string;
    /**
     * 资产实例的名称
     */
    Name?: string;
    /**
     * 资产实例所属的套餐包信息，
  注意：当资产实例不是套餐包的实例时，此字段为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackInfo?: PackInfo;
    /**
     * 高防包绑定的EIP属于的云产品信息
     */
    EipProductInfos?: Array<EipProductInfo>;
    /**
     * 高防包绑定状态，取值[
  "idle"：绑定已完成
   "bounding"：正在绑定中
  "failed"：绑定失败
  ]
     */
    BoundStatus?: string;
    /**
     * 四层防护严格级别
     */
    DDoSLevel?: string;
    /**
     * CC防护开关
     */
    CCEnable?: number;
    /**
     * 资源关联标签
     */
    TagInfoList?: Array<TagInfo>;
    /**
     * 新版本1ip高防包
     */
    IpCountNewFlag?: number;
    /**
     * 攻击封堵套餐标记
     */
    VitalityVersion?: number;
    /**
     * 网络线路
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Line?: number;
    /**
     * 不计费的业务带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FreeServiceBandwidth?: number;
    /**
     * 弹性业务带宽开关
     */
    ElasticServiceBandwidth?: number;
    /**
     * 赠送的业务带宽
     */
    GiftServiceBandWidth?: number;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 是否是基础防护加强版 0: 不是 1: 是
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BasicPlusFlag?: number;
    /**
     * 是否标准版2.0 0: 包含标准版2.0 1: 只查询标准版2.0 2: 不查标准版2.0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlanCntFlag?: number;
    /**
     * 是否跨区域产品 0: 不包含跨区域产品 1: 中国大陆跨区域产品 2: 非中国大陆跨区域产品
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransRegionFlag?: number;
    /**
     * 是否为超级高防包
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuperPackFlag?: number;
    /**
     * 所属ZoneId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: number;
}
/**
 * DescribeBizMonitorTrend返回参数结构体
 */
export interface DescribeBizMonitorTrendResponse {
    /**
     * 曲线图各个时间点的值
     */
    DataList?: Array<number>;
    /**
     * 统计纬度
     */
    MetricName?: string;
    /**
     * 返回DataList中的最大值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxData?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeListPortAclList返回参数结构体
 */
export interface DescribeListPortAclListResponse {
    /**
     * 总数
     */
    Total: number;
    /**
     * 端口acl策略
     */
    AclList: Array<AclConfigRelation>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CC精准防护配置项
 */
export interface CCPrecisionPlyRecord {
    /**
     * 配置项类型，当前仅支持value
     */
    FieldType: string;
    /**
     * 配置字段，可取值cgi， ua， cookie， referer， accept,  srcip
     */
    FieldName: string;
    /**
     * 配置取值
     */
    Value: string;
    /**
     * 配置项值比对方式，可取值equal ，not_equal， include
     */
    ValueOperator: string;
}
/**
 * DescribeCCPrecisionPlyList返回参数结构体
 */
export interface DescribeCCPrecisionPlyListResponse {
    /**
     * 策略列表总数
     */
    Total?: number;
    /**
     * 策略列表详情
     */
    PrecisionPolicyList?: Array<CCPrecisionPolicy>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * DDoS防护子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 统计周期，可取值60，300，1800，3600，21600，86400，单位秒
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
    /**
     * 业务类型可取值domain, port
  port：端口业务
  domain：域名业务
     */
    BusinessType?: string;
}
/**
 * DescribeListPortAclList请求参数结构体
 */
export interface DescribeListPortAclListRequest {
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
     * ip搜索
     */
    FilterIp?: string;
}
/**
 * DescribeIpBlockList返回参数结构体
 */
export interface DescribeIpBlockListResponse {
    /**
     * IP封堵列表
     */
    List?: Array<IpBlockData>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCLevelPolicy返回参数结构体
 */
export interface DescribeCCLevelPolicyResponse {
    /**
     * CC防护等级，可取值loose表示宽松，strict表示严格，normal表示适中， emergency表示攻击紧急， sup_loose表示超级宽松，default表示默认策略（无频控配置下发），customized表示自定义策略
     */
    Level?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBizMonitorTrend请求参数结构体
 */
export interface DescribeBizMonitorTrendRequest {
    /**
     * DDoS防护子产品代号（bgpip表示高防IP）
     */
    Business: string;
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
     * 统计纬度，可取值intraffic outtraffic inpkg outpkg
     */
    MetricName: string;
    /**
     * 时间粒度 60 300 3600 21600 86400
     */
    Period: number;
}
/**
 * DescribeOverviewDDoSTrend返回参数结构体
 */
export interface DescribeOverviewDDoSTrendResponse {
    /**
     * 值个数
     */
    Count?: number;
    /**
     * 值数组，攻击流量带宽单位为Mbps，包速率单位为pps
     */
    Data?: Array<number | bigint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCCThresholdPolicy请求参数结构体
 */
export interface DeleteCCThresholdPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 配置策略的IP
     */
    Ip: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 协议，可取值http
     */
    Protocol: string;
}
/**
 * DescribeListListener请求参数结构体
 */
export declare type DescribeListListenerRequest = null;
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
    /**
     * 智能cc开关，取值[0(关闭), 1(开启)]
     */
    CCAIEnable?: number;
}
/**
 * ModifyCCThresholdPolicy返回参数结构体
 */
export interface ModifyCCThresholdPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWaterPrintKey返回参数结构体
 */
export interface CreateWaterPrintKeyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCCPrecisionPolicy返回参数结构体
 */
export interface DeleteCCPrecisionPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Count?: number;
    /**
     * DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business?: string;
    /**
     * 资源的IP
     */
    Ip?: string;
    /**
     * 统计粒度，取值[300(5分钟)，3600(小时)，86400(天)]
     */
    Period?: number;
    /**
     * 统计开始时间
     */
    StartTime?: string;
    /**
     * 统计结束时间
     */
    EndTime?: string;
    /**
     * 值数组，攻击流量带宽单位为Mbps，包速率单位为pps
     */
    Data?: Array<number | bigint>;
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
     */
    MetricName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * CreateCCReqLimitPolicy请求参数结构体
 */
export interface CreateCCReqLimitPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * IP值
     */
    Ip: string;
    /**
     * 协议，可取值http, https, http/https
     */
    Protocol: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 策略项
     */
    Policy: CCReqLimitPolicyRecord;
    /**
     * 是否为兜底频控 0表示不是 1表示是
     */
    IsGlobal?: number;
}
/**
 * ModifyDDoSSpeedLimitConfig返回参数结构体
 */
export interface ModifyDDoSSpeedLimitConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyCCLevelPolicy请求参数结构体
 */
export interface ModifyCCLevelPolicyRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * IP地址
     */
    Ip: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 协议，可取值http、https、http/https
     */
    Protocol: string;
    /**
     * CC防护等级，可取值loose表示宽松，strict表示严格，normal表示适中， emergency表示攻击紧急， sup_loose表示超级宽松，default表示默认策略（无频控配置下发），customized表示自定义策略
     */
    Level: string;
}
/**
 * DescribeCcGeoIPBlockConfigList请求参数结构体
 */
export interface DescribeCcGeoIPBlockConfigListRequest {
    /**
     * DDoS防护子产品代号（bgpip-multip：表示高防包；bgpip：表示高防IP）
     */
    Business: string;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset: number;
    /**
     * 一页条数
     */
    Limit: number;
    /**
     * 指定特定实例ID
     */
    InstanceId?: string;
    /**
     * IP地址，普通高防IP要传该字段
     */
    Ip?: string;
    /**
     * 域名，普通高防IP要传该字段
     */
    Domain?: string;
    /**
     * 协议，普通高防IP要传该字段
     */
    Protocol?: string;
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
    /**
     * 修改时间
     */
    ModifyTime: string;
}
/**
 * 四七层规则对应实例与IP的关系
 */
export interface RuleInstanceRelation {
    /**
     * 资源实例的IP
     */
    EipList?: Array<string>;
    /**
     * 资源实例的ID
     */
    InstanceId?: string;
    /**
     * 资源实例的Cname
     */
    Cname?: string;
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
     * DDoS防护子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
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
     * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))，incount(请求次数), dropcount(攻击次数)]
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

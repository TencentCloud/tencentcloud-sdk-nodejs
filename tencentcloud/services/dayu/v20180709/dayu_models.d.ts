/**
 * ModifyDDoSPolicyCase请求参数结构体
 */
export interface ModifyDDoSPolicyCaseRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 策略场景ID
     */
    SceneId: string;
    /**
     * 开发平台，取值[PC（PC客户端）， MOBILE（移动端）， TV（电视端）， SERVER（主机）]
     */
    PlatformTypes?: Array<string>;
    /**
     * 细分品类，取值[WEB（网站）， GAME（游戏）， APP（应用）， OTHER（其他）]
     */
    AppType?: string;
    /**
     * 应用协议，取值[tcp（TCP协议），udp（UDP协议），icmp（ICMP协议），all（其他协议）]
     */
    AppProtocols?: Array<string>;
    /**
     * TCP业务起始端口，取值(0, 65535]
     */
    TcpSportStart?: string;
    /**
     * TCP业务结束端口，取值(0, 65535]，必须大于等于TCP业务起始端口
     */
    TcpSportEnd?: string;
    /**
     * UDP业务起始端口，取值范围(0, 65535]
     */
    UdpSportStart?: string;
    /**
     * UDP业务结束端口，取值范围(0, 65535)，必须大于等于UDP业务起始端口
     */
    UdpSportEnd?: string;
    /**
     * 是否有海外客户，取值[no（没有）, yes（有）]
     */
    HasAbroad?: string;
    /**
     * 是否会主动对外发起TCP请求，取值[no（不会）, yes（会）]
     */
    HasInitiateTcp?: string;
    /**
     * 是否会主动对外发起UDP业务请求，取值[no（不会）, yes（会）]
     */
    HasInitiateUdp?: string;
    /**
     * 主动发起TCP请求的端口，取值范围(0, 65535]
     */
    PeerTcpPort?: string;
    /**
     * 主动发起UDP请求的端口，取值范围(0, 65535]
     */
    PeerUdpPort?: string;
    /**
     * TCP载荷的固定特征码，字符串长度小于512
     */
    TcpFootprint?: string;
    /**
     * UDP载荷的固定特征码，字符串长度小于512
     */
    UdpFootprint?: string;
    /**
     * Web业务的API的URL
     */
    WebApiUrl?: Array<string>;
    /**
     * TCP业务报文长度最小值，取值范围(0, 1500)
     */
    MinTcpPackageLen?: string;
    /**
     * TCP业务报文长度最大值，取值范围(0, 1500)，必须大于等于TCP业务报文长度最小值
     */
    MaxTcpPackageLen?: string;
    /**
     * UDP业务报文长度最小值，取值范围(0, 1500)
     */
    MinUdpPackageLen?: string;
    /**
     * UDP业务报文长度最大值，取值范围(0, 1500)，必须大于等于UDP业务报文长度最小值
     */
    MaxUdpPackageLen?: string;
    /**
     * 是否有VPN业务，取值[no（没有）, yes（有）]
     */
    HasVPN?: string;
    /**
     * TCP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000
     */
    TcpPortList?: string;
    /**
     * UDP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000
     */
    UdpPortList?: string;
}
/**
 * DescribeIpUnBlockList请求参数结构体
 */
export interface DescribeIpUnBlockListRequest {
    /**
     * 开始时间
     */
    BeginTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * IP（不为空时，进行IP过滤）
     */
    Ip?: string;
    /**
     * 分页参数（不为空时，进行分页查询），此字段后面会弃用，请用Limit和Offset字段代替；
     */
    Paging?: Paging;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
}
/**
 * DeleteDDoSPolicyCase请求参数结构体
 */
export interface DeleteDDoSPolicyCaseRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 策略场景ID
     */
    SceneId: string;
}
/**
 * CreateDDoSPolicy返回参数结构体
 */
export interface CreateDDoSPolicyResponse {
    /**
     * 策略ID
     */
    PolicyId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteL7Rules请求参数结构体
 */
export interface DeleteL7RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则ID列表
     */
    RuleIdList: Array<string>;
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
 * DescribeNewL4RulesErrHealth返回参数结构体
 */
export interface DescribeNewL4RulesErrHealthResponse {
    /**
     * 异常规则的总数
     */
    Total?: number;
    /**
     * 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP，多个IP用","分割
     */
    ErrHealths?: Array<KeyValue>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCEvList请求参数结构体
 */
export interface DescribeCCEvListRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 资源实例ID
     */
    Id?: string;
    /**
     * 资源实例的IP，当business不为basic时，如果IpList不为空则Id也必须不能为空；
     */
    IpList?: Array<string>;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
}
/**
 * DescribeTransmitStatis返回参数结构体
 */
export interface DescribeTransmitStatisResponse {
    /**
     * 当MetricName=traffic时，表示入流量带宽，单位bps；
  当MetricName=pkg时，表示入包速率，单位pps；
     */
    InDataList?: Array<number>;
    /**
     * 当MetricName=traffic时，表示出流量带宽，单位bps；
  当MetricName=pkg时，表示出包速率，单位pps；
     */
    OutDataList?: Array<number>;
    /**
     * 指标名：
  traffic表示流量带宽；
  pkg表示包速率；
     */
    MetricName?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DDoS高级策略
 */
export interface DDosPolicy {
    /**
     * 策略绑定的资源
     */
    Resources: Array<ResourceIp>;
    /**
     * 禁用协议
     */
    DropOptions: DDoSPolicyDropOption;
    /**
     * 禁用端口
     */
    PortLimits: Array<DDoSPolicyPortLimit>;
    /**
     * 报文过滤
     */
    PacketFilters: Array<DDoSPolicyPacketFilter>;
    /**
     * 黑白IP名单
     */
    IpBlackWhiteLists: Array<IpBlackWhite>;
    /**
     * 策略ID
     */
    PolicyId: string;
    /**
     * 策略名称
     */
    PolicyName: string;
    /**
     * 策略创建时间
     */
    CreateTime: string;
    /**
     * 水印策略参数，最多只有一个，当没有水印策略时数组为空
     */
    WaterPrint: Array<WaterPrintPolicy>;
    /**
     * 水印密钥，最多只有2个，当没有水印策略时数组为空
     */
    WaterKey: Array<WaterPrintKey>;
    /**
     * 策略绑定的资源实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BoundResources: Array<string>;
    /**
     * 策略所属的策略场景
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SceneId: string;
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
 * DescribeDDoSNetTrend请求参数结构体
 */
export interface DescribeDDoSNetTrendRequest {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
     */
    MetricName: string;
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
}
/**
 * DescribePolicyCase请求参数结构体
 */
export interface DescribePolicyCaseRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 策略场景ID
     */
    SceneId?: string;
}
/**
 * DescribeUnBlockStatis请求参数结构体
 */
export declare type DescribeUnBlockStatisRequest = null;
/**
 * ModifyCCUrlAllow返回参数结构体
 */
export interface ModifyCCUrlAllowResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBasicDeviceThreshold返回参数结构体
 */
export interface DescribeBasicDeviceThresholdResponse {
    /**
     * 返回黑洞封堵值
     */
    Threshold?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCAlarmThreshold返回参数结构体
 */
export interface DescribeCCAlarmThresholdResponse {
    /**
     * CC告警阈值
     */
    CCAlarmThreshold?: CCAlarmThreshold;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSNetEvList请求参数结构体
 */
export interface DescribeDDoSNetEvListRequest {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
}
/**
 * DeleteNewL4Rules请求参数结构体
 */
export interface DeleteNewL4RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 删除接口结构体
     */
    Rule: Array<L4DelRule>;
}
/**
 * ModifyNewDomainRules请求参数结构体
 */
export interface ModifyNewDomainRulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
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
 * DDoS告警阈值
 */
export interface DDoSAlarmThreshold {
    /**
     * 告警阈值类型，1-入流量，2-清洗流量
     */
    AlarmType: number;
    /**
     * 告警阈值，大于0（目前排定的值）
     */
    AlarmThreshold: number;
}
/**
 * DescribePolicyCase返回参数结构体
 */
export interface DescribePolicyCaseResponse {
    /**
     * 策略场景列表
     */
    CaseList?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeResIpList请求参数结构体
 */
export interface DescribeResIpListRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID, 如果不填，则获取用户所有资源的IP
     */
    IdList?: Array<string>;
}
/**
 * DescribeNewL4RulesErrHealth请求参数结构体
 */
export interface DescribeNewL4RulesErrHealthRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 规则ID列表
     */
    RuleIdList?: Array<string>;
}
/**
 * ModifyCCLevel请求参数结构体
 */
export interface ModifyCCLevelRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * CC防护等级，取值[default(正常), loose(宽松), strict(严格)];
     */
    Level: string;
    /**
     * 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写RuleId字段；
     */
    Protocol: string;
    /**
     * 表示7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）；
     */
    RuleId: string;
}
/**
 * DeleteCCSelfDefinePolicy请求参数结构体
 */
export interface DeleteCCSelfDefinePolicyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 策略ID
     */
    SetId: string;
}
/**
 * DescribeCCUrlAllow请求参数结构体
 */
export interface DescribeCCUrlAllowRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 黑或白名单，取值[white(白名单)]，目前只支持白名单
  注意：此数组只能有一个值，且只能为white
     */
    Type: Array<string>;
    /**
     * 分页参数
     */
    Limit?: number;
    /**
     * 分页参数
     */
    Offset?: number;
    /**
     * 可选，代表HTTP协议或HTTPS协议的CC防护，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；
     */
    Protocol?: string;
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
 * 黑白IP
 */
export interface IpBlackWhite {
    /**
     * IP地址
     */
    Ip: string;
    /**
     * 黑白类型，取值范围[black，white]
     */
    Type: string;
}
/**
 * ModifyDDoSAlarmThreshold请求参数结构体
 */
export interface ModifyDDoSAlarmThresholdRequest {
    /**
     * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID,字符串类型
     */
    RsId: string;
    /**
     * 告警阈值类型，0-未设置，1-入流量，2-清洗流量
     */
    AlarmType: number;
    /**
     * 告警阈值，大于0（目前暂定的值）
     */
    AlarmThreshold: number;
    /**
     * 资源关联的IP列表，高防包未绑定时，传空数组，高防IP专业版传多个IP的数据
     */
    IpList: Array<string>;
}
/**
 * DescribeNewL4Rules请求参数结构体
 */
export interface DescribeNewL4RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 指定IP查询
     */
    Ip?: string;
    /**
     * 指定高防IP端口查询
     */
    VirtualPort?: number;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
}
/**
 * CreateDDoSPolicy请求参数结构体
 */
export interface CreateDDoSPolicyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 协议禁用，必须填写且数组长度必须为1
     */
    DropOptions: Array<DDoSPolicyDropOption>;
    /**
     * 策略名称
     */
    Name?: string;
    /**
     * 端口禁用，当没有禁用端口时填空数组
     */
    PortLimits?: Array<DDoSPolicyPortLimit>;
    /**
     * 请求源IP黑白名单，当没有IP黑白名单时填空数组
     */
    IpAllowDenys?: Array<IpBlackWhite>;
    /**
     * 报文过滤，当没有报文过滤时填空数组
     */
    PacketFilters?: Array<DDoSPolicyPacketFilter>;
    /**
     * 水印策略参数，当没有启用水印功能时填空数组，最多只能传一条水印策略（即数组大小不超过1）
     */
    WaterPrint?: Array<WaterPrintPolicy>;
}
/**
 * ModifyCCThreshold返回参数结构体
 */
export interface ModifyCCThresholdResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNetReturnSwitch返回参数结构体
 */
export interface ModifyNetReturnSwitchResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeActionLog请求参数结构体
 */
export interface DescribeActionLogRequest {
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business?: string;
    /**
     * 搜索值，只支持资源ID或用户UIN
     */
    Filter?: string;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
}
/**
 * CreateL7RuleCert请求参数结构体
 */
export interface CreateL7RuleCertRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源实例ID，例如高防IP实例的ID，高防IP专业版实例的ID
     */
    Id: string;
    /**
     * 规则ID
     */
    RuleId: string;
    /**
     * 证书类型，当为协议为HTTPS协议时必须填，取值[2(腾讯云托管证书)]
     */
    CertType: number;
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
}
/**
 * DescribeBGPIPL7RuleMaxCnt返回参数结构体
 */
export interface DescribeBGPIPL7RuleMaxCntResponse {
    /**
     * 高防IP最多可添加的7层规则数量
     */
    Count?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePcap返回参数结构体
 */
export interface DescribePcapResponse {
    /**
     * pcap包的下载链接列表，无pcap包时为空数组；
     */
    PcapUrlList?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePackIndex返回参数结构体
 */
export interface DescribePackIndexResponse {
    /**
     * 字段值，如下：
  TotalPackCount：资源数
  AttackPackCount：清洗中的资源数
  BlockPackCount：封堵中的资源数
  ExpiredPackCount：过期的资源数
  ExpireingPackCount：即将过期的资源数
  IsolatePackCount：隔离中的资源数
     */
    Data?: Array<KeyValue>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSAttackSource请求参数结构体
 */
export interface DescribeDDoSAttackSourceRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 起始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 一页条数，填0表示不分页
     */
    Limit: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset: number;
    /**
     * 获取指定资源的特定ip的攻击源，可选
     */
    IpList?: Array<string>;
}
/**
 * DescribeDDoSCount请求参数结构体
 */
export interface DescribeDDoSCountRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 资源的IP
     */
    Ip: string;
    /**
     * 统计开始时间
     */
    StartTime: string;
    /**
     * 统计结束时间
     */
    EndTime: string;
    /**
     * 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）]
     */
    MetricName: string;
}
/**
 * 地域资源实例数
 */
export interface RegionInstanceCount {
    /**
     * 地域码
     */
    Region: string;
    /**
     * 地域码（新规范）
     */
    RegionV3: string;
    /**
     * 资源实例数
     */
    Count: number;
}
/**
 * 水印Key
 */
export interface WaterPrintKey {
    /**
     * 水印KeyID
     */
    KeyId: string;
    /**
     * 水印Key值
     */
    KeyContent: string;
    /**
     * 水印Key的版本号
     */
    KeyVersion: string;
    /**
     * 是否开启，取值[0（没有开启），1（已开启）]
     */
    OpenStatus: number;
    /**
     * 密钥生成时间
     */
    CreateTime: string;
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNewL4Rule返回参数结构体
 */
export interface ModifyNewL4RuleResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNewL4Rules返回参数结构体
 */
export interface CreateNewL4RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSUsedStatis返回参数结构体
 */
export interface DescribeDDoSUsedStatisResponse {
    /**
     * 字段值，如下：
  Days：高防资源使用天数
  Attacks：DDoS防护次数
     */
    Data?: Array<KeyValue>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBasicCCThreshold请求参数结构体
 */
export interface DescribeBasicCCThresholdRequest {
    /**
     * 查询的IP地址，取值如：1.1.1.1
     */
    BasicIp: string;
    /**
     * 查询IP所属地域，取值如：gz、bj、sh、hk等地域缩写
     */
    BasicRegion: string;
    /**
     * 专区类型，取值如：公有云专区：public，黑石专区：bm, NAT服务器专区：nat，互联网通道：channel。
     */
    BasicBizType: string;
    /**
     * 设备类型，取值如：服务器：cvm，公有云负载均衡：clb，黑石负载均衡：lb，NAT服务器：nat，互联网通道：channel.
     */
    BasicDeviceType: string;
    /**
     * 可选，IPInstance Nat 网关（如果查询的设备类型是NAT服务器，需要传此参数，通过nat资源查询接口获取）
     */
    BasicIpInstance?: string;
    /**
     * 可选，运营商线路（如果查询的设备类型是NAT服务器，需要传此参数为5）
     */
    BasicIspCode?: number;
}
/**
 * CreateDDoSPolicyCase返回参数结构体
 */
export interface CreateDDoSPolicyCaseResponse {
    /**
     * 策略场景ID
     */
    SceneId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIPProductInfo返回参数结构体
 */
export interface DescribeIPProductInfoResponse {
    /**
     * 云产品信息列表，如果没有查询到则返回空数组，值说明如下：
  Key为ProductName时，value表示云产品实例的名称；
  Key为ProductInstanceId时，value表示云产品实例的ID；
  Key为ProductType时，value表示的是云产品的类型（cvm表示云主机、clb表示负载均衡）;
  Key为IP时，value表示云产品实例的IP；
     */
    Data?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSSwitch返回参数结构体
 */
export interface ModifyDDoSSwitchResponse {
    /**
     * 当前防护状态值，取值[0（关闭），1（开启）]
     */
    Status?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * IP封堵记录
 */
export interface IpBlockData {
    /**
     * IP
     */
    Ip: string;
    /**
     * 状态（Blocked：被封堵；UnBlocking：解封中；UnBlockFailed：解封失败）
     */
    Status: string;
    /**
     * 封堵时间
     */
    BlockTime: string;
    /**
     * 解封时间（预计解封时间）
     */
    UnBlockTime: string;
    /**
     * 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封）
     */
    ActionType: string;
    /**
     * 高防标记，0：非高防，1：高防
     */
    ProtectFlag?: number;
}
/**
 * DescribeCCSelfDefinePolicy请求参数结构体
 */
export interface DescribeCCSelfDefinePolicyRequest {
    /**
     * 大禹子产品代号（bgp高防包；bgp-multip共享包）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 拉取的条数
     */
    Limit?: number;
    /**
     * 偏移量
     */
    Offset?: number;
}
/**
 * ModifyDDoSDefendStatus请求参数结构体
 */
export interface ModifyDDoSDefendStatusRequest {
    /**
     * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版；basic表示基础防护）
     */
    Business: string;
    /**
     * 防护状态值，取值[0（关闭），1（开启）]
     */
    Status: number;
    /**
     * 关闭时长，单位小时，取值[0，1，2，3，4，5，6]；当Status=0表示关闭时，Hour必须大于0；
     */
    Hour: number;
    /**
     * 资源ID；当Business不是基础防护时必须填写此字段；
     */
    Id?: string;
    /**
     * 基础防护的IP，只有当Business为基础防护时才需要填写此字段；
     */
    Ip?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，IP所属的产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
     */
    BizType?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，IP所属的产品子类，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
     */
    DeviceType?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*);
     */
    InstanceId?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，表示IP所属的地域，取值：
  "bj":     华北地区(北京)
  "cd":     西南地区(成都)
  "cq":     西南地区(重庆)
  "gz":     华南地区(广州)
  "gzopen": 华南地区(广州Open)
  "hk":     中国香港
  "kr":     东南亚地区(首尔)
  "sh":     华东地区(上海)
  "shjr":   华东地区(上海金融)
  "szjr":   华南地区(深圳金融)
  "sg":     东南亚地区(新加坡)
  "th":     东南亚地区(泰国)
  "de":     欧洲地区(德国)
  "usw":    美国西部（硅谷）
  "ca":     北美地区(多伦多)
  "jp":     日本
  "hzec":   杭州
  "in":     印度
  "use":    美东地区（弗吉尼亚）
  "ru":     俄罗斯
  "tpe":    中国台湾
  "nj":     南京
     */
    IPRegion?: string;
}
/**
 * DescribeRuleSets返回参数结构体
 */
export interface DescribeRuleSetsResponse {
    /**
     * 规则记录数数组，取值说明:
  Key值为"Id"时，Value表示资源ID
  Key值为"RuleIdList"时，Value值表示资源的规则ID，多个规则ID用","分割
  Key值为"RuleNameList"时，Value值表示资源的规则名，多个规则名用","分割
  Key值为"RuleNum"时，Value值表示资源的规则数
     */
    L4RuleSets?: Array<KeyValueRecord>;
    /**
     * 规则记录数数组，取值说明:
  Key值为"Id"时，Value表示资源ID
  Key值为"RuleIdList"时，Value值表示资源的规则ID，多个规则ID用","分割
  Key值为"RuleNameList"时，Value值表示资源的规则名，多个规则名用","分割
  Key值为"RuleNum"时，Value值表示资源的规则数
     */
    L7RuleSets?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBaradData返回参数结构体
 */
export interface DescribeBaradDataResponse {
    /**
     * 返回指标的值
     */
    DataList?: Array<BaradData>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSEvInfo请求参数结构体
 */
export interface DescribeDDoSEvInfoRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 资源的IP
     */
    Ip: string;
    /**
     * 攻击开始时间
     */
    StartTime: string;
    /**
     * 攻击结束时间
     */
    EndTime: string;
}
/**
 * DescribeDDoSAttackIPRegionMap返回参数结构体
 */
export interface DescribeDDoSAttackIPRegionMapResponse {
    /**
     * 全球地域分布数据
     */
    NationCount?: Array<KeyValueRecord>;
    /**
     * 国内省份地域分布数据
     */
    ProvinceCount?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyL4KeepTime返回参数结构体
 */
export interface ModifyL4KeepTimeResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyL7Rules返回参数结构体
 */
export interface ModifyL7RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeL7HealthConfig请求参数结构体
 */
export interface DescribeL7HealthConfigRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则ID数组，当导出所有规则的健康检查配置则不填或填空数组；
     */
    RuleIdList?: Array<string>;
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
     * 绑定的产品分类，取值[public（CVM、CLB产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
     */
    BizType?: string;
    /**
     * 产品分类下的子类型，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
     */
    DeviceType?: string;
    /**
     * IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*); 如果绑定的是托管IP没有对应的资源实例ID，请填写"none";
     */
    InstanceId?: string;
    /**
     * 运营商，0：电信；1：联通；2：移动；5：BGP
     */
    IspCode?: number;
}
/**
 * DescribePcap请求参数结构体
 */
export interface DescribePcapRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源实例ID
     */
    Id: string;
    /**
     * 攻击事件的开始时间，格式为"2018-08-28 07:00:00"
     */
    StartTime: string;
    /**
     * 攻击事件的结束时间，格式为"2018-08-28 07:02:00"
     */
    EndTime: string;
    /**
     * 资源的IP，只有当Business为net时才需要填写资源实例下的IP；
     */
    Ip?: string;
}
/**
 * DescribeDDoSAlarmThreshold返回参数结构体
 */
export interface DescribeDDoSAlarmThresholdResponse {
    /**
     * DDoS告警阈值
     */
    DDoSAlarmThreshold?: DDoSAlarmThreshold;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * KeyValue记录
 */
export interface KeyValueRecord {
    /**
     * 一条记录的Key-Value数组
     */
    Record: Array<KeyValue>;
}
/**
 * DescribeBasicDeviceThreshold请求参数结构体
 */
export interface DescribeBasicDeviceThresholdRequest {
    /**
     * 查询的IP地址，取值如：1.1.1.1
     */
    BasicIp: string;
    /**
     * 查询IP所属地域，取值如：gz、bj、sh、hk等地域缩写
     */
    BasicRegion: string;
    /**
     * 专区类型，取值如：公有云专区：public，黑石专区：bm, NAT服务器专区：nat，互联网通道：channel。
     */
    BasicBizType: string;
    /**
     * 设备类型，取值如：服务器：cvm，公有云负载均衡：clb，黑石负载均衡：lb，NAT服务器：nat，互联网通道：channel.
     */
    BasicDeviceType: string;
    /**
     * 有效性检查，取值为1
     */
    BasicCheckFlag: number;
    /**
     * 可选，IPInstance Nat 网关（如果查询的设备类型是NAT服务器，需要传此参数，通过nat资源查询接口获取）
     */
    BasicIpInstance?: string;
    /**
     * 可选，运营商线路（如果查询的设备类型是NAT服务器，需要传此参数为5）
     */
    BasicIspCode?: number;
}
/**
 * ModifyDDoSWaterKey返回参数结构体
 */
export interface ModifyDDoSWaterKeyResponse {
    /**
     * 水印密钥列表
     */
    KeyList?: Array<WaterPrintKey>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribleNewL7Rules返回参数结构体
 */
export interface DescribleNewL7RulesResponse {
    /**
     * 转发规则列表
     */
    Rules?: Array<NewL7RuleEntry>;
    /**
     * 总规则数
     */
    Total?: number;
    /**
     * 健康检查配置列表
     */
    Healths?: Array<L7RuleHealth>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyResBindDDoSPolicy返回参数结构体
 */
export interface ModifyResBindDDoSPolicyResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSWaterKey请求参数结构体
 */
export interface ModifyDDoSWaterKeyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 策略ID
     */
    PolicyId: string;
    /**
     * 密钥操作，取值：[add（添加），delete（删除），open（开启），close（关闭），get（获取密钥）]
     */
    Method: string;
    /**
     * 密钥ID，当添加密钥操作时可以不填或填0，其他操作时必须填写；
     */
    KeyId?: number;
}
/**
 * ModifyCCLevel返回参数结构体
 */
export interface ModifyCCLevelResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBaradData请求参数结构体
 */
export interface DescribeBaradDataRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源实例ID
     */
    Id: string;
    /**
     * 指标名，取值：
  connum表示TCP活跃连接数；
  new_conn表示新建TCP连接数；
  inactive_conn表示非活跃连接数;
  intraffic表示入流量；
  outtraffic表示出流量；
  alltraffic表示出流量和入流量之和；
  inpkg表示入包速率；
  outpkg表示出包速率；
     */
    MetricName: string;
    /**
     * 统计时间粒度，单位秒（300表示5分钟；3600表示小时；86400表示天）
     */
    Period: number;
    /**
     * 统计开始时间，秒部分保持为0，分钟部分为5的倍数
     */
    StartTime: string;
    /**
     * 统计结束时间，秒部分保持为0，分钟部分为5的倍数
     */
    EndTime: string;
    /**
     * 统计方式，取值：
  max表示最大值；
  min表示最小值；
  avg表示均值；
     */
    Statistics: string;
    /**
     * 协议端口数组
     */
    ProtocolPort?: Array<ProtocolPort>;
    /**
     * 资源实例下的IP，只有当Business=net(高防IP专业版)时才必须填写资源的一个IP（因为高防IP专业版资源实例有多个IP，才需要指定）；
     */
    Ip?: string;
}
/**
 * DescribeDDoSDefendStatus返回参数结构体
 */
export interface DescribeDDoSDefendStatusResponse {
    /**
     * 防护状态，为0表示防护处于关闭状态，为1表示防护处于开启状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefendStatus?: number;
    /**
     * 防护临时关闭的过期时间，当防护状态为开启时此字段为空；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UndefendExpire?: string;
    /**
     * 控制台功能展示字段，为1表示控制台功能展示，为0表示控制台功能隐藏
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShowFlag?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBizHttpStatus请求参数结构体
 */
export interface DescribeBizHttpStatusRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 资源Id
     */
    Id: string;
    /**
     * 统计周期，可取值300，1800，3600， 21600，86400，单位秒
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
     * 统计方式，仅支持sum
     */
    Statistics: string;
    /**
     * 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效
     */
    ProtoInfo?: Array<ProtocolPort>;
    /**
     * 特定域名查询
     */
    Domain?: string;
}
/**
 * cc自定义规则
 */
export interface CCPolicy {
    /**
     * 策略名称
     */
    Name: string;
    /**
     * 匹配模式，取值[matching(匹配模式), speedlimit(限速模式)]
     */
    Smode: string;
    /**
     * 策略id
     */
    SetId?: string;
    /**
     * 每分钟限制的次数
     */
    Frequency?: number;
    /**
     * 执行策略模式，拦截或者验证码，取值[alg（验证码）, drop（拦截）]
     */
    ExeMode?: string;
    /**
     * 生效开关
     */
    Switch?: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 规则列表
     */
    RuleList?: Array<CCRule>;
    /**
     * IP列表，如果不填时，请传空数组但不能为null；
     */
    IpList?: Array<string>;
    /**
     * cc防护类型，取值[http，https]
     */
    Protocol?: string;
    /**
     * 可选字段，表示HTTPS的CC防护域名对应的转发规则ID;
     */
    RuleId?: string;
    /**
     * HTTPS的CC防护域名
     */
    Domain?: string;
}
/**
 * ModifyDDoSAIStatus返回参数结构体
 */
export interface ModifyDDoSAIStatusResponse {
    /**
     * AI防护状态，取值[on，off]
     */
    DDoSAI?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSNetEvInfo请求参数结构体
 */
export interface DescribeDDoSNetEvInfoRequest {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 攻击开始时间
     */
    StartTime: string;
    /**
     * 攻击结束时间
     */
    EndTime: string;
}
/**
 * ModifyResourceRenewFlag请求参数结构体
 */
export interface ModifyResourceRenewFlagRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版；shield表示棋牌盾；bgp表示独享包；bgp-multip表示共享包；insurance表示保险包；staticpack表示三网套餐包）
     */
    Business: string;
    /**
     * 资源Id
     */
    Id: string;
    /**
     * 自动续费标记（0手动续费；1自动续费；2到期不续费）
     */
    RenewFlag: number;
}
/**
 * DescribeCCEvList返回参数结构体
 */
export interface DescribeCCEvListResponse {
    /**
     * 大禹子产品代号（shield表示棋牌盾；bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business?: string;
    /**
     * 资源实例ID
     */
    Id?: string;
    /**
     * 资源实例的IP列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpList?: Array<string>;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * CC攻击事件列表
     */
    Data?: Array<CCEventRecord>;
    /**
     * 总记录数
     */
    Total?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCFrequencyRules请求参数结构体
 */
export interface DescribeCCFrequencyRulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）；当填写时表示获取转发规则的访问频率控制规则；
     */
    RuleId: string;
}
/**
 * CreateL4HealthConfig请求参数结构体
 */
export interface CreateL4HealthConfigRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 四层健康检查配置数组
     */
    HealthConfig: Array<L4HealthConfig>;
}
/**
 * DescribeBGPIPL7RuleMaxCnt请求参数结构体
 */
export interface DescribeBGPIPL7RuleMaxCntRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 资源实例ID
     */
    Id: string;
}
/**
 * ModifyDDoSPolicyName返回参数结构体
 */
export interface ModifyDDoSPolicyNameResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCAlarmThreshold请求参数结构体
 */
export interface DescribeCCAlarmThresholdRequest {
    /**
     * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID,字符串类型
     */
    RsId: string;
}
/**
 * ModifyCCUrlAllow请求参数结构体
 */
export interface ModifyCCUrlAllowRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * =add表示添加，=delete表示删除
     */
    Method: string;
    /**
     * 黑/白名单类型；取值[white(白名单)]
     */
    Type: string;
    /**
     * URL数组，URL格式如下：
  http://域名/cgi
  https://域名/cgi
     */
    UrlList: Array<string>;
    /**
     * 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写Domain和RuleId字段；
     */
    Protocol?: string;
    /**
     * 可选字段，表示HTTPS协议的7层转发规则域名（通过获取7层转发规则接口可以获取域名），只有当Protocol字段为https时才必须填写此字段；
     */
    Domain?: string;
    /**
     * 可选字段，表示HTTPS协议的7层转发规则ID（通过获取7层转发规则接口可以获取规则ID），当添加并且Protocol=https时必须填写；
  当Method为delete时，可以不用填写此字段；
     */
    RuleId?: string;
}
/**
 * ModifyDDoSAlarmThreshold返回参数结构体
 */
export interface ModifyDDoSAlarmThresholdResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSLevel返回参数结构体
 */
export interface ModifyDDoSLevelResponse {
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 防护等级，取值[low,middle,high]
     */
    DDoSLevel?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCIpAllowDeny返回参数结构体
 */
export interface DescribeCCIpAllowDenyResponse {
    /**
     * 该字段被RecordList字段替代了，请不要使用
     */
    Data?: Array<KeyValue>;
    /**
     * 记录数
     */
    Total?: number;
    /**
     * 返回黑/白名单的记录，
  "Key":"ip"时，"Value":值表示ip;
  "Key":"domain"时， "Value":值表示域名;
  "Key":"type"时，"Value":值表示黑白名单类型(white为白名单，block为黑名单);
  "Key":"protocol"时，"Value":值表示CC防护的协议(http或https);
     */
    RecordList?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSIpLog返回参数结构体
 */
export interface DescribeDDoSIpLogResponse {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 资源的IP
     */
    Ip?: string;
    /**
     * 攻击开始时间
     */
    StartTime?: string;
    /**
     * 攻击结束时间
     */
    EndTime?: string;
    /**
     * IP攻击日志，KeyValue数组，Key-Value取值说明：
  Key为"LogTime"时，Value值为IP日志时间
  Key为"LogMessage"时，Value值为Ip日志内容
     */
    Data?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * cc自定义策略配置的规则
 */
export interface CCRule {
    /**
     * 规则的key, 可以为host、cgi、ua、referer
     */
    Skey: string;
    /**
     * 规则的条件，可以为include、not_include、equal
     */
    Operator: string;
    /**
     * 规则的值，长度小于31字节
     */
    Value: string;
}
/**
 * DescribeResIpList返回参数结构体
 */
export interface DescribeResIpListResponse {
    /**
     * 资源的IP列表
     */
    Resource?: Array<ResourceIp>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCCIpAllowDeny请求参数结构体
 */
export interface ModifyCCIpAllowDenyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * add表示添加，delete表示删除
     */
    Method: string;
    /**
     * 黑/白名单类型；取值[white(白名单)，black(黑名单)]
     */
    Type: string;
    /**
     * 黑/白名单的IP数组
     */
    IpList: Array<string>;
    /**
     * 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写Domain和RuleId字段；
     */
    Protocol?: string;
    /**
     * 可选字段，表示HTTPS协议的7层转发规则域名（通过获取7层转发规则接口可以获取域名），只有当Protocol字段为https时才必须填写此字段；
     */
    Domain?: string;
    /**
     * 可选字段，表示HTTPS协议的7层转发规则ID（通过获取7层转发规则接口可以获取规则ID），
  当Method为delete时，不用填写此字段；
     */
    RuleId?: string;
}
/**
 * CreateInstanceName返回参数结构体
 */
export interface CreateInstanceNameResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSDefendStatus请求参数结构体
 */
export interface DescribeDDoSDefendStatusRequest {
    /**
     * 大禹子产品代号（basic表示基础防护；bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源实例ID，只有当Business不是基础防护时才需要填写此字段；
     */
    Id?: string;
    /**
     * 基础防护的IP，只有当Business为基础防护时才需要填写此字段；
     */
    Ip?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，IP所属的产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
     */
    BizType?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，IP所属的产品子类，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
     */
    DeviceType?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*);
     */
    InstanceId?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，表示IP所属的地域，取值：
  "bj":     华北地区(北京)
  "cd":     西南地区(成都)
  "cq":     西南地区(重庆)
  "gz":     华南地区(广州)
  "gzopen": 华南地区(广州Open)
  "hk":     中国香港
  "kr":     东南亚地区(首尔)
  "sh":     华东地区(上海)
  "shjr":   华东地区(上海金融)
  "szjr":   华南地区(深圳金融)
  "sg":     东南亚地区(新加坡)
  "th":     东南亚地区(泰国)
  "de":     欧洲地区(德国)
  "usw":    美国西部（硅谷）
  "ca":     北美地区(多伦多)
  "jp":     日本
  "hzec":   杭州
  "in":     印度
  "use":    美东地区（弗吉尼亚）
  "ru":     俄罗斯
  "tpe":    中国台湾
  "nj":     南京
     */
    IPRegion?: string;
}
/**
 * 业务流量的http状态码聚合数据
 */
export interface HttpStatusMap {
    /**
     * http2xx状态码
     */
    Http2xx: Array<number>;
    /**
     * http3xx状态码
     */
    Http3xx: Array<number>;
    /**
     * http404状态码
     */
    Http404: Array<number>;
    /**
     * http4xx状态码
     */
    Http4xx: Array<number>;
    /**
     * http5xx状态码
     */
    Http5xx: Array<number>;
    /**
     * http2xx回源状态码
     */
    SourceHttp2xx: Array<number>;
    /**
     * http3xx回源状态码
     */
    SourceHttp3xx: Array<number>;
    /**
     * http404回源状态码
     */
    SourceHttp404: Array<number>;
    /**
     * http4xx回源状态码
     */
    SourceHttp4xx: Array<number>;
    /**
     * http5xx回源状态码
     */
    SourceHttp5xx: Array<number>;
}
/**
 * ModifyL4Health请求参数结构体
 */
export interface ModifyL4HealthRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 健康检查参数数组
     */
    Healths: Array<L4RuleHealth>;
}
/**
 * ModifyCCHostProtection返回参数结构体
 */
export interface ModifyCCHostProtectionResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateL4Rules返回参数结构体
 */
export interface CreateL4RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInsurePacks请求参数结构体
 */
export interface DescribeInsurePacksRequest {
    /**
     * 可选字段，保险包套餐ID，当要获取指定ID（例如insure-000000xe）的保险包套餐时请填写此字段；
     */
    IdList?: Array<string>;
}
/**
 * DescribeDDoSNetCount请求参数结构体
 */
export interface DescribeDDoSNetCountRequest {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 统计开始时间
     */
    StartTime: string;
    /**
     * 统计结束时间
     */
    EndTime: string;
    /**
     * 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）]
     */
    MetricName: string;
}
/**
 * 分页索引
 */
export interface Paging {
    /**
     * 起始位置
     */
    Offset: number;
    /**
     * 数量
     */
    Limit: number;
}
/**
 * ModifyCCSelfDefinePolicy请求参数结构体
 */
export interface ModifyCCSelfDefinePolicyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 策略ID
     */
    SetId: string;
    /**
     * CC策略描述
     */
    Policy: CCPolicy;
}
/**
 * 四层健康检查配置
 */
export interface L4HealthConfig {
    /**
     * 转发协议，取值[TCP, UDP]
     */
    Protocol: string;
    /**
     * 转发端口
     */
    VirtualPort: number;
    /**
     * =1表示开启；=0表示关闭
     */
    Enable: number;
    /**
     * 响应超时时间，单位秒
     */
    TimeOut: number;
    /**
     * 检测间隔时间，单位秒
     */
    Interval: number;
    /**
     * 不健康阈值，单位次
     */
    KickNum: number;
    /**
     * 健康阈值，单位次
     */
    AliveNum: number;
    /**
     * 会话保持时间，单位秒
     */
    KeepTime: number;
}
/**
 * CreateCCSelfDefinePolicy请求参数结构体
 */
export interface CreateCCSelfDefinePolicyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * CC策略描述
     */
    Policy: CCPolicy;
}
/**
 * 操作返回码，只用于返回成功的情况
 */
export interface SuccessCode {
    /**
     * 成功/错误码
     */
    Code: string;
    /**
     * 描述
     */
    Message: string;
}
/**
 * DescribleL4Rules请求参数结构体
 */
export interface DescribleL4RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则ID，可选参数，填写后获取指定的规则
     */
    RuleIdList?: Array<string>;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
}
/**
 * L4规则
 */
export interface L4RuleEntry {
    /**
     * 转发协议，取值[TCP, UDP]
     */
    Protocol: string;
    /**
     * 转发端口
     */
    VirtualPort: number;
    /**
     * 源站端口
     */
    SourcePort: number;
    /**
     * 回源方式，取值[1(域名回源)，2(IP回源)]
     */
    SourceType: number;
    /**
     * 会话保持时间，单位秒
     */
    KeepTime: number;
    /**
     * 回源列表
     */
    SourceList: Array<L4RuleSource>;
    /**
     * 负载均衡方式，取值[1(加权轮询)，2(源IP hash)]
     */
    LbType: number;
    /**
     * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]；
     */
    KeepEnable: number;
    /**
     * 规则ID
     */
    RuleId?: string;
    /**
     * 规则描述
     */
    RuleName?: string;
    /**
     * 移除水印状态，取值[0(关闭)，1(开启)]
     */
    RemoveSwitch?: number;
}
/**
 * DescribeL4HealthConfig请求参数结构体
 */
export interface DescribeL4HealthConfigRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则ID数组，当导出所有规则的健康检查配置则不填或填空数组；
     */
    RuleIdList?: Array<string>;
}
/**
 * CreateL7CCRule返回参数结构体
 */
export interface CreateL7CCRuleResponse {
    /**
     * 7层CC自定义规则参数，当没有开启CC自定义规则时，返回空数组
     */
    RuleConfig?: Array<CCRuleConfig>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCCFrequencyRulesStatus返回参数结构体
 */
export interface ModifyCCFrequencyRulesStatusResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNetReturnSwitch请求参数结构体
 */
export interface ModifyNetReturnSwitchRequest {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源实例ID
     */
    Id: string;
    /**
     * Status 表示回切开关，0: 关闭， 1:打开
     */
    Status: number;
    /**
     * 回切时长，单位：小时，取值[0,1,2,3,4,5,6;]当status=1时必选填写Hour>0
     */
    Hour: number;
}
/**
 * CreateL7CCRule请求参数结构体
 */
export interface CreateL7CCRuleRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 操作码，取值[query(表示查询)，add(表示添加)，del(表示删除)]
     */
    Method: string;
    /**
     * 7层转发规则ID，例如：rule-0000001
     */
    RuleId: string;
    /**
     * 7层CC自定义规则参数，当操作码为query时，可以不用填写；当操作码为add或del时，必须填写，且数组长度只能为1；
     */
    RuleConfig?: Array<CCRuleConfig>;
}
/**
 * CreateL7Rules请求参数结构体
 */
export interface CreateL7RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则列表
     */
    Rules: Array<L7RuleEntry>;
}
/**
 * DescribeBizHttpStatus返回参数结构体
 */
export interface DescribeBizHttpStatusResponse {
    /**
     * 业务流量http状态码统计数据
     */
    HttpStatusMap: HttpStatusMap;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNewL7RulesErrHealth返回参数结构体
 */
export interface DescribeNewL7RulesErrHealthResponse {
    /**
     * 异常规则的总数
     */
    Total?: number;
    /**
     * 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP及错误信息，多个IP用","分割
     */
    ErrHealths?: Array<KeyValue>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSNetEvList返回参数结构体
 */
export interface DescribeDDoSNetEvListResponse {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * DDoS攻击事件列表
     */
    Data?: Array<DDoSEventRecord>;
    /**
     * 总记录数
     */
    Total?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateL4Rules请求参数结构体
 */
export interface CreateL4RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则列表
     */
    Rules: Array<L4RuleEntry>;
}
/**
 * ModifyNewL4Rule请求参数结构体
 */
export interface ModifyNewL4RuleRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 转发规则
     */
    Rule: L4RuleEntry;
}
/**
 * DescribeL4RulesErrHealth请求参数结构体
 */
export interface DescribeL4RulesErrHealthRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
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
}
/**
 * CreateBasicDDoSAlarmThreshold返回参数结构体
 */
export interface CreateBasicDDoSAlarmThresholdResponse {
    /**
     * 当存在告警阈值配置时，返回告警阈值大于0，当不存在告警配置时，返回告警阈值为0；
     */
    AlarmThreshold?: number;
    /**
     * 告警阈值类型，1-入流量，2-清洗流量；当AlarmThreshold大于0时有效；
     */
    AlarmType?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNetReturn返回参数结构体
 */
export interface CreateNetReturnResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteL4Rules请求参数结构体
 */
export interface DeleteL4RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则ID列表
     */
    RuleIdList: Array<string>;
}
/**
 * DescribeResourceList请求参数结构体
 */
export interface DescribeResourceListRequest {
    /**
     * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 地域码搜索，可选，当不指定地域时空数组，当指定地域时，填地域码。例如：["gz", "sh"]
     */
    RegionList?: Array<string>;
    /**
     * 线路搜索，可选，只有当获取高防IP资源列表是可以选填，取值为[1（BGP线路），2（南京电信），3（南京联通），99（第三方合作线路）]，当获取其他产品时请填空数组；
     */
    Line?: Array<number | bigint>;
    /**
     * 资源ID搜索，可选，当不为空数组时表示获取指定资源的资源列表；
     */
    IdList?: Array<string>;
    /**
     * 资源名称搜索，可选，当不为空字符串时表示按名称搜索资源；
     */
    Name?: string;
    /**
     * IP搜索列表，可选，当不为空时表示按照IP搜索资源；
     */
    IpList?: Array<string>;
    /**
     * 资源状态搜索列表，可选，取值为[0（运行中）, 1（清洗中）, 2（封堵中）]，当填空数组时不进行状态搜索；
     */
    Status?: Array<number | bigint>;
    /**
     * 即将到期搜索；可选，取值为[0（不搜索），1（搜索即将到期的资源）]
     */
    Expire?: number;
    /**
     * 排序字段，可选
     */
    OderBy?: Array<OrderBy>;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
    /**
     * 高防IP专业版资源的CNAME，可选，只对高防IP专业版资源列表有效；
     */
    CName?: string;
    /**
     * 高防IP专业版资源的域名，可选，只对高防IP专业版资源列表有效；
     */
    Domain?: string;
}
/**
 * DeleteL4Rules返回参数结构体
 */
export interface DeleteL4RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribleNewL7Rules请求参数结构体
 */
export interface DescribleNewL7RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
    /**
     * 域名搜索，选填，当需要搜索域名请填写
     */
    Domain?: string;
    /**
     * 转发协议搜索，选填，取值[http, https, http/https]
     */
    ProtocolList?: Array<string>;
    /**
     * 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
     */
    StatusList?: Array<number | bigint>;
    /**
     * IP搜索，选填，当需要搜索IP请填写
     */
    Ip?: string;
}
/**
 * DescribeIPProductInfo请求参数结构体
 */
export interface DescribeIPProductInfoRequest {
    /**
     * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包）
     */
    Business: string;
    /**
     * IP列表
     */
    IpList: Array<string>;
}
/**
 * CreateL7HealthConfig请求参数结构体
 */
export interface CreateL7HealthConfigRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 七层健康检查配置数组
     */
    HealthConfig: Array<L7HealthConfig>;
}
/**
 * CreateL7RuleCert返回参数结构体
 */
export interface CreateL7RuleCertResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSAttackIPRegionMap请求参数结构体
 */
export interface DescribeDDoSAttackIPRegionMapRequest {
    /**
     * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 统计开始时间
     */
    StartTime: string;
    /**
     * 统计结束时间，最大可统计的时间范围是半年；
     */
    EndTime: string;
    /**
     * 指定资源的特定IP的攻击源，可选
     */
    IpList?: Array<string>;
}
/**
 * ModifyDDoSPolicy请求参数结构体
 */
export interface ModifyDDoSPolicyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 策略ID
     */
    PolicyId: string;
    /**
     * 协议禁用，必须填写且数组长度必须为1
     */
    DropOptions: Array<DDoSPolicyDropOption>;
    /**
     * 端口禁用，当没有禁用端口时填空数组
     */
    PortLimits?: Array<DDoSPolicyPortLimit>;
    /**
     * IP黑白名单，当没有IP黑白名单时填空数组
     */
    IpAllowDenys?: Array<IpBlackWhite>;
    /**
     * 报文过滤，当没有报文过滤时填空数组
     */
    PacketFilters?: Array<DDoSPolicyPacketFilter>;
    /**
     * 水印策略参数，当没有启用水印功能时填空数组，最多只能传一条水印策略（即数组大小不超过1）
     */
    WaterPrint?: Array<WaterPrintPolicy>;
}
/**
 * DescribeSourceIpSegment请求参数结构体
 */
export interface DescribeSourceIpSegmentRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
}
/**
 * DescribeSourceIpSegment返回参数结构体
 */
export interface DescribeSourceIpSegmentResponse {
    /**
     * 回源IP段，多个用"；"分隔
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyResBindDDoSPolicy请求参数结构体
 */
export interface ModifyResBindDDoSPolicyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 策略ID
     */
    PolicyId: string;
    /**
     * 绑定或解绑，bind表示绑定策略，unbind表示解绑策略
     */
    Method: string;
}
/**
 * L7规则健康检查参数
 */
export interface L7RuleHealth {
    /**
     * 规则ID
     */
    RuleId: string;
    /**
     * =1表示开启；=0表示关闭
     */
    Enable: number;
    /**
     * 检测间隔时间，单位秒
     */
    Interval: number;
    /**
     * 不健康阈值，单位次
     */
    KickNum: number;
    /**
     * 健康阈值，单位次
     */
    AliveNum: number;
    /**
     * HTTP请求方式，取值[HEAD,GET]
     */
    Method: string;
    /**
     * 健康检查判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和
     */
    StatusCode: number;
    /**
     * 检查目录的URL，默认为/
     */
    Url: string;
    /**
     * 配置状态，0： 正常，1：配置中，2：配置失败
     */
    Status: number;
}
/**
 * CreateL7RulesUpload请求参数结构体
 */
export interface CreateL7RulesUploadRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则列表
     */
    Rules: Array<L7RuleEntry>;
}
/**
 * 规则健康检查参数
 */
export interface L4RuleHealth {
    /**
     * 规则ID
     */
    RuleId: string;
    /**
     * =1表示开启；=0表示关闭
     */
    Enable: number;
    /**
     * 响应超时时间，单位秒
     */
    TimeOut: number;
    /**
     * 检测间隔时间，单位秒，必须要大于响应超时时间
     */
    Interval: number;
    /**
     * 不健康阈值，单位次
     */
    KickNum: number;
    /**
     * 健康阈值，单位次
     */
    AliveNum: number;
}
/**
 * ModifyCCFrequencyRules请求参数结构体
 */
export interface ModifyCCFrequencyRulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * CC的访问频率控制规则ID
     */
    CCFrequencyRuleId: string;
    /**
     * 匹配规则，取值["include"(前缀匹配)，"equal"(完全匹配)]
     */
    Mode: string;
    /**
     * 统计周期，单位秒，取值[10, 30, 60]
     */
    Period: number;
    /**
     * 访问次数，取值[1-10000]
     */
    ReqNumber: number;
    /**
     * 执行动作，取值["alg"（人机识别）, "drop"（拦截）]
     */
    Act: string;
    /**
     * 执行时间，单位秒，取值[1-900]
     */
    ExeDuration: number;
    /**
     * URI字符串，必须以/开头，例如/abc/a.php，长度不超过31；当URI=/时，匹配模式只能选择前缀匹配；
     */
    Uri?: string;
    /**
     * User-Agent字符串，长度不超过80
     */
    UserAgent?: string;
    /**
     * Cookie字符串，长度不超过40
     */
    Cookie?: string;
}
/**
 * ModifyCCPolicySwitch返回参数结构体
 */
export interface ModifyCCPolicySwitchResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDDoSPolicyCase请求参数结构体
 */
export interface CreateDDoSPolicyCaseRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 策略场景名，字符串长度小于64
     */
    CaseName: string;
    /**
     * 开发平台，取值[PC（PC客户端）， MOBILE（移动端）， TV（电视端）， SERVER（主机）]
     */
    PlatformTypes?: Array<string>;
    /**
     * 细分品类，取值[WEB（网站）， GAME（游戏）， APP（应用）， OTHER（其他）]
     */
    AppType?: string;
    /**
     * 应用协议，取值[tcp（TCP协议），udp（UDP协议），icmp（ICMP协议），all（其他协议）]
     */
    AppProtocols?: Array<string>;
    /**
     * TCP业务起始端口，取值(0, 65535]
     */
    TcpSportStart?: string;
    /**
     * TCP业务结束端口，取值(0, 65535]，必须大于等于TCP业务起始端口
     */
    TcpSportEnd?: string;
    /**
     * UDP业务起始端口，取值范围(0, 65535]
     */
    UdpSportStart?: string;
    /**
     * UDP业务结束端口，取值范围(0, 65535)，必须大于等于UDP业务起始端口
     */
    UdpSportEnd?: string;
    /**
     * 是否有海外客户，取值[no（没有）, yes（有）]
     */
    HasAbroad?: string;
    /**
     * 是否会主动对外发起TCP请求，取值[no（不会）, yes（会）]
     */
    HasInitiateTcp?: string;
    /**
     * 是否会主动对外发起UDP业务请求，取值[no（不会）, yes（会）]
     */
    HasInitiateUdp?: string;
    /**
     * 主动发起TCP请求的端口，取值范围(0, 65535]
     */
    PeerTcpPort?: string;
    /**
     * 主动发起UDP请求的端口，取值范围(0, 65535]
     */
    PeerUdpPort?: string;
    /**
     * TCP载荷的固定特征码，字符串长度小于512
     */
    TcpFootprint?: string;
    /**
     * UDP载荷的固定特征码，字符串长度小于512
     */
    UdpFootprint?: string;
    /**
     * Web业务的API的URL
     */
    WebApiUrl?: Array<string>;
    /**
     * TCP业务报文长度最小值，取值范围(0, 1500)
     */
    MinTcpPackageLen?: string;
    /**
     * TCP业务报文长度最大值，取值范围(0, 1500)，必须大于等于TCP业务报文长度最小值
     */
    MaxTcpPackageLen?: string;
    /**
     * UDP业务报文长度最小值，取值范围(0, 1500)
     */
    MinUdpPackageLen?: string;
    /**
     * UDP业务报文长度最大值，取值范围(0, 1500)，必须大于等于UDP业务报文长度最小值
     */
    MaxUdpPackageLen?: string;
    /**
     * 是否有VPN业务，取值[no（没有）, yes（有）]
     */
    HasVPN?: string;
    /**
     * TCP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000
     */
    TcpPortList?: string;
    /**
     * UDP业务端口列表，同时支持单个端口和端口段，字符串格式，例如：80,443,700-800,53,1000-3000
     */
    UdpPortList?: string;
}
/**
 * ModifyCCIpAllowDeny返回参数结构体
 */
export interface ModifyCCIpAllowDenyResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCCAlarmThreshold请求参数结构体
 */
export interface ModifyCCAlarmThresholdRequest {
    /**
     * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID,字符串类型
     */
    RsId: string;
    /**
     * 告警阈值，大于0（目前排定的值），后台设置默认值为1000
     */
    AlarmThreshold: number;
    /**
     * 资源关联的IP列表，高防包未绑定时，传空数组，高防IP专业版传多个IP的数据
     */
    IpList: Array<string>;
}
/**
 * DescribeCCFrequencyRules返回参数结构体
 */
export interface DescribeCCFrequencyRulesResponse {
    /**
     * 访问频率控制规则列表
     */
    CCFrequencyRuleList?: Array<CCFrequencyRule>;
    /**
     * 访问频率控制规则开关状态，取值[on(开启)，off(关闭)]
     */
    CCFrequencyRuleStatus?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSEvList请求参数结构体
 */
export interface DescribeDDoSEvListRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例）
     */
    Id?: string;
    /**
     * 资源的IP
     */
    IpList?: Array<string>;
    /**
     * 是否超过弹性防护峰值，取值[yes(是)，no(否)]，填写空字符串时表示不进行过滤
     */
    OverLoad?: string;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
}
/**
 * DescribeBasicCCThreshold返回参数结构体
 */
export interface DescribeBasicCCThresholdResponse {
    /**
     * CC启动开关（0:关闭；1:开启）
     */
    CCEnable?: number;
    /**
     * CC防护阈值
     */
    CCThreshold?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSPolicyName请求参数结构体
 */
export interface ModifyDDoSPolicyNameRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 策略ID
     */
    PolicyId: string;
    /**
     * 策略名称
     */
    Name: string;
}
/**
 * DescribeIpUnBlockList返回参数结构体
 */
export interface DescribeIpUnBlockListResponse {
    /**
     * 开始时间
     */
    BeginTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * IP解封记录
     */
    List?: Array<IpUnBlockData>;
    /**
     * 总记录数
     */
    Total?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCCPolicySwitch请求参数结构体
 */
export interface ModifyCCPolicySwitchRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 策略ID
     */
    SetId: string;
    /**
     * 开关状态
     */
    Switch: number;
}
/**
 * ModifyCCFrequencyRules返回参数结构体
 */
export interface ModifyCCFrequencyRulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyL4KeepTime请求参数结构体
 */
export interface ModifyL4KeepTimeRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则ID
     */
    RuleId: string;
    /**
     * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]
     */
    KeepEnable: number;
    /**
     * 会话保持时间，单位秒
     */
    KeepTime: number;
}
/**
 * 调度域名信息
 */
export interface SchedulingDomain {
    /**
     * 调度域名
     */
    Domain: string;
    /**
     * BGP线路IP列表
     */
    BGPIpList: Array<string>;
    /**
     * 电信线路IP列表
     */
    CTCCIpList: Array<string>;
    /**
     * 联通线路IP列表
     */
    CUCCIpList: Array<string>;
    /**
     * 移动线路IP列表
     */
    CMCCIpList: Array<string>;
    /**
     * 海外线路IP列表
     */
    OverseaIpList: Array<string>;
    /**
     * 调度方式，当前仅支持优先级, 取值为priority
     */
    Method: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * ttl
     */
    TTL: number;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime: string;
}
/**
 * ModifyCCHostProtection请求参数结构体
 */
export interface ModifyCCHostProtectionRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则ID
     */
    RuleId: string;
    /**
     * 开启/关闭CC域名防护，取值[open(表示开启)，close(表示关闭)]
     */
    Method: string;
}
/**
 * DescribeIpBlockList请求参数结构体
 */
export declare type DescribeIpBlockListRequest = null;
/**
 * DescribeDDoSNetCount返回参数结构体
 */
export interface DescribeDDoSNetCountResponse {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 统计开始时间
     */
    StartTime?: string;
    /**
     * 统计结束时间
     */
    EndTime?: string;
    /**
     * 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）]
     */
    MetricName?: string;
    /**
     * Key-Value值数组，Key说明如下，
  当MetricName为traffic时：
  key为"TcpKBSum"，表示TCP报文流量，单位KB
  key为"UdpKBSum"，表示UDP报文流量，单位KB
  key为"IcmpKBSum"，表示ICMP报文流量，单位KB
  key为"OtherKBSum"，表示其他报文流量，单位KB
  
  当MetricName为pkg时：
  key为"TcpPacketSum"，表示TCP报文个数，单位个
  key为"UdpPacketSum"，表示UDP报文个数，单位个
  key为"IcmpPacketSum"，表示ICMP报文个数，单位个
  key为"OtherPacketSum"，表示其他报文个数，单位个
  
  当MetricName为classnum时：
  key的值表示攻击事件类型，其中Key为"UNKNOWNFLOOD"，表示未知的攻击事件
     */
    Data?: Array<KeyValue>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateL7Rules返回参数结构体
 */
export interface CreateL7RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 巴拉多返回的数据
 */
export interface BaradData {
    /**
     * 指标名（connum表示TCP活跃连接数；
  new_conn表示新建TCP连接数；
  inactive_conn表示非活跃连接数;
  intraffic表示入流量；
  outtraffic表示出流量；
  alltraffic表示出流量和入流量之和；
  inpkg表示入包速率；
  outpkg表示出包速率；）
     */
    MetricName: string;
    /**
     * 值数组
     */
    Data: Array<number>;
    /**
     * 值数组的大小
     */
    Count: number;
}
/**
 * ModifyDDoSSwitch请求参数结构体
 */
export interface ModifyDDoSSwitchRequest {
    /**
     * 大禹子产品代号（basic表示基础防护）
     */
    Business: string;
    /**
     * =get表示读取DDoS防护状态；=set表示修改DDoS防护状态；
     */
    Method: string;
    /**
     * 基础防护的IP，只有当Business为基础防护时才需要填写此字段；
     */
    Ip?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，IP所属的产品类型，取值[public（CVM产品），bm（黑石产品），eni（弹性网卡），vpngw（VPN网关）， natgw（NAT网关），waf（Web应用安全产品），fpc（金融产品），gaap（GAAP产品）, other(托管IP)]
     */
    BizType?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，IP所属的产品子类，取值[cvm（CVM），lb（负载均衡器），eni（弹性网卡），vpngw（VPN），natgw（NAT），waf（WAF），fpc（金融），gaap（GAAP），other（托管IP），eip（黑石弹性IP）]
     */
    DeviceType?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，IP所属的资源实例ID，当绑定新IP时必须填写此字段；例如是弹性网卡的IP，则InstanceId填写弹性网卡的ID(eni-*);
     */
    InstanceId?: string;
    /**
     * 只有当Business为基础防护时才需要填写此字段，表示IP所属的地域，取值：
  "bj":     华北地区(北京)
  "cd":     西南地区(成都)
  "cq":     西南地区(重庆)
  "gz":     华南地区(广州)
  "gzopen": 华南地区(广州Open)
  "hk":     中国香港
  "kr":     东南亚地区(首尔)
  "sh":     华东地区(上海)
  "shjr":   华东地区(上海金融)
  "szjr":   华南地区(深圳金融)
  "sg":     东南亚地区(新加坡)
  "th":     东南亚地区(泰国)
  "de":     欧洲地区(德国)
  "usw":    美国西部（硅谷）
  "ca":     北美地区(多伦多)
  "jp":     日本
  "hzec":   杭州
  "in":     印度
  "use":    美东地区（弗吉尼亚）
  "ru":     俄罗斯
  "tpe":    中国台湾
  "nj":     南京
     */
    IPRegion?: string;
    /**
     * 可选字段，防护状态值，取值[0（关闭），1（开启）]；当Method为get时可以不填写此字段；
     */
    Status?: number;
}
/**
 * CreateNetReturn请求参数结构体
 */
export interface CreateNetReturnRequest {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源实例ID
     */
    Id: string;
}
/**
 * ModifyDDoSAIStatus请求参数结构体
 */
export interface ModifyDDoSAIStatusRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * =get表示读取AI防护状态；=set表示修改AI防护状态；
     */
    Method: string;
    /**
     * AI防护状态，取值[on，off]；当Method=set时必填；
     */
    DDoSAI?: string;
}
/**
 * DescribeDDoSAttackSource返回参数结构体
 */
export interface DescribeDDoSAttackSourceResponse {
    /**
     * 总攻击源条数
     */
    Total?: number;
    /**
     * 攻击源列表
     */
    AttackSourceList?: Array<DDoSAttackSourceRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeResourceList返回参数结构体
 */
export interface DescribeResourceListResponse {
    /**
     * 总记录数
     */
    Total: number;
    /**
     * 资源记录列表，返回Key值说明：
  "Key": "CreateTime" 表示资源实例购买时间
  "Key": "Region" 表示资源实例的地域
  "Key": "BoundIP" 表示独享包实例绑定的IP
  "Key": "Id" 表示资源实例的ID
  "Key": "CCEnabled" 表示资源实例的CC防护开关状态
  "Key": "DDoSThreshold" 表示资源实例的DDoS的清洗阈值
  "Key": "BoundStatus" 表示独享包或共享包实例的绑定IP操作状态(绑定中或绑定完成)
  "Key": "Type" 此字段弃用
  "Key": "ElasticLimit" 表示资源实例的弹性防护值
  "Key": "DDoSAI" 表示资源实例的DDoS AI防护开关
  "Key": "OverloadCount" 表示资源实例受到超过弹性防护值的次数
  "Key": "Status" 表示资源实例的状态(idle:运行中, attacking:攻击中, blocking:封堵中, isolate:隔离中)
  "Key": "Lbid" 此字段弃用
  "Key": "ShowFlag" 此字段弃用
  "Key": "Expire" 表示资源实例的过期时间
  "Key": "CCThreshold" 表示资源实例的CC防护触发阈值
  "Key": "AutoRenewFlag" 表示资源实例的自动续费是否开启
  "Key": "IspCode" 表示独享包或共享包的线路(0-电信, 1-联通, 2-移动, 5-BGP)
  "Key": "PackType" 表示套餐包类型
  "Key": "PackId" 表示套餐包ID
  "Key": "Name" 表示资源实例的名称
  "Key": "Locked" 此字段弃用
  "Key": "IpDDoSLevel" 表示资源实例的防护等级(low-宽松, middle-正常, high-严格)
  "Key": "DefendStatus" 表示资源实例的DDoS防护状态(防护开启或临时关闭)
  "Key": "UndefendExpire" 表示资源实例的DDoS防护临时关闭结束时间
  "Key": "Tgw" 表示资源实例是否是新资源
  "Key": "Bandwidth" 表示资源实例的保底防护值，只针对高防包和高防IP
  "Key": "DdosMax" 表示资源实例的保底防护值，只针对高防IP专业版
  "Key": "GFBandwidth" 表示资源实例的保底业务带宽，只针对高防IP
  "Key": "ServiceBandwidth" 表示资源实例的保底业务带宽，只针对高防IP专业版
     */
    ServicePacks: Array<KeyValueRecord>;
    /**
     * 大禹子产品代号（bgp表示独享包；bgp-multip表示共享包；bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNewL4Rules返回参数结构体
 */
export interface DescribeNewL4RulesResponse {
    /**
     * 转发规则列表
     */
    Rules?: Array<NewL4RuleEntry>;
    /**
     * 总规则数
     */
    Total?: number;
    /**
     * 四层健康检查配置列表
     */
    Healths?: Array<L4RuleHealth>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCCThreshold请求参数结构体
 */
export interface ModifyCCThresholdRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示基础防护）
     */
    Business: string;
    /**
     * CC防护阈值，取值(0 100 150 240 350 480 550 700 850 1000 1500 2000 3000 5000 10000 20000);
  当Business为高防IP、高防IP专业版时，其CC防护最大阈值跟资源的保底防护带宽有关，对应关系如下：
    保底带宽: 最大C防护阈值
    10:  20000,
    20:  40000,
    30:  70000,
    40:  100000,
    50:  150000,
    60:  200000,
    80:  250000,
    100: 300000,
     */
    Threshold: number;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 可选字段，代表CC防护类型，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；当不填时，默认为HTTP协议的CC防护；当填写https时还需要填写RuleId字段；
     */
    Protocol?: string;
    /**
     * 可选字段，表示HTTPS协议的7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）；
  当Protocol=https时必须填写；
     */
    RuleId?: string;
    /**
     * 查询的IP地址（仅基础防护提供），取值如：1.1.1.1
     */
    BasicIp?: string;
    /**
     * 查询IP所属地域（仅基础防护提供），取值如：gz、bj、sh、hk等地域缩写
     */
    BasicRegion?: string;
    /**
     * 专区类型（仅基础防护提供），取值如：公有云专区：public，黑石专区：bm, NAT服务器专区：nat，互联网通道：channel。
     */
    BasicBizType?: string;
    /**
     * 设备类型（仅基础防护提供），取值如：服务器：cvm，公有云负载均衡：clb，黑石负载均衡：lb，NAT服务器：nat，互联网通道：channel.
     */
    BasicDeviceType?: string;
    /**
     * 仅基础防护提供。可选，IPInstance Nat 网关（如果查询的设备类型是NAT服务器，需要传此参数，通过nat资源查询接口获取）
     */
    BasicIpInstance?: string;
    /**
     * 仅基础防护提供。可选，运营商线路（如果查询的设备类型是NAT服务器，需要传此参数为5）
     */
    BasicIspCode?: number;
    /**
     * 可选字段，当协议取值HTTPS时，必填
     */
    Domain?: string;
}
/**
 * ModifyDDoSDefendStatus返回参数结构体
 */
export interface ModifyDDoSDefendStatusResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBasicDDoSAlarmThreshold请求参数结构体
 */
export interface CreateBasicDDoSAlarmThresholdRequest {
    /**
     * 大禹子产品代号（basic表示DDoS基础防护）
     */
    Business: string;
    /**
     * =get表示读取告警阈值；=set表示设置告警阈值；
     */
    Method: string;
    /**
     * 可选，告警阈值类型，1-入流量，2-清洗流量；当Method为set时必须填写；
     */
    AlarmType?: number;
    /**
     * 可选，告警阈值，当Method为set时必须填写；当设置阈值为0时表示清除告警阈值配置；
     */
    AlarmThreshold?: number;
}
/**
 * 7层CC自定义规则
 */
export interface CCRuleConfig {
    /**
     * 统计周期，单位秒，取值[10, 30, 60]
     */
    Period: number;
    /**
     * 访问次数，取值[1-10000]
     */
    ReqNumber: number;
    /**
     * 执行动作，取值["alg"（人机识别）, "drop"（拦截）]
     */
    Action: string;
    /**
     * 执行时间，单位秒，取值[1-900]
     */
    ExeDuration: number;
}
/**
 * DescribeDDoSEvInfo返回参数结构体
 */
export interface DescribeDDoSEvInfoResponse {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 资源的IP
     */
    Ip?: string;
    /**
     * 攻击开始时间
     */
    StartTime?: string;
    /**
     * 攻击结束时间
     */
    EndTime?: string;
    /**
     * TCP报文攻击包数
     */
    TcpPacketSum?: number;
    /**
     * TCP报文攻击流量，单位KB
     */
    TcpKBSum?: number;
    /**
     * UDP报文攻击包数
     */
    UdpPacketSum?: number;
    /**
     * UDP报文攻击流量，单位KB
     */
    UdpKBSum?: number;
    /**
     * ICMP报文攻击包数
     */
    IcmpPacketSum?: number;
    /**
     * ICMP报文攻击流量，单位KB
     */
    IcmpKBSum?: number;
    /**
     * 其他报文攻击包数
     */
    OtherPacketSum?: number;
    /**
     * 其他报文攻击流量，单位KB
     */
    OtherKBSum?: number;
    /**
     * 累计攻击流量，单位KB
     */
    TotalTraffic?: number;
    /**
     * 攻击流量带宽峰值
     */
    Mbps?: number;
    /**
     * 攻击包速率峰值
     */
    Pps?: number;
    /**
     * PCAP文件下载链接
     */
    PcapUrl?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribleRegionCount请求参数结构体
 */
export interface DescribleRegionCountRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；）
     */
    Business: string;
    /**
     * 根据线路统计，取值为[1（BGP线路），2（南京电信），3（南京联通），99（第三方合作线路）]；只对高防IP产品有效，其他产品此字段忽略
     */
    LineList?: Array<number | bigint>;
}
/**
 * ModifyCCSelfDefinePolicy返回参数结构体
 */
export interface ModifyCCSelfDefinePolicyResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSIpLog请求参数结构体
 */
export interface DescribeDDoSIpLogRequest {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 资源的IP
     */
    Ip: string;
    /**
     * 攻击开始时间
     */
    StartTime: string;
    /**
     * 攻击结束时间
     */
    EndTime: string;
}
/**
 * DescribeDDoSAlarmThreshold请求参数结构体
 */
export interface DescribeDDoSAlarmThresholdRequest {
    /**
     * 大禹子产品代号（shield表示棋牌；bgpip表示高防IP；bgp表示高防包；bgp-multip表示多ip高防包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID,字符串类型
     */
    RsId: string;
}
/**
 * DeleteNewL4Rules返回参数结构体
 */
export interface DeleteNewL4RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 水印策略参数
 */
export interface WaterPrintPolicy {
    /**
     * TCP端口段，例如["2000-3000","3500-4000"]
     */
    TcpPortList: Array<string>;
    /**
     * UDP端口段，例如["2000-3000","3500-4000"]
     */
    UdpPortList: Array<string>;
    /**
     * 水印偏移量，取值范围[0, 100)
     */
    Offset: number;
    /**
     * 是否自动剥离，取值[0（不自动剥离），1（自动剥离）]
     */
    RemoveSwitch: number;
    /**
     * 是否开启，取值[0（没有开启），1（已开启）]
     */
    OpenStatus: number;
}
/**
 * CreateNewL7RulesUpload请求参数结构体
 */
export interface CreateNewL7RulesUploadRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
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
    /**
     * 规则列表
     */
    Rules: Array<L7RuleEntry>;
}
/**
 * DeleteNewL7Rules返回参数结构体
 */
export interface DeleteNewL7RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCCSelfDefinePolicy返回参数结构体
 */
export interface DeleteCCSelfDefinePolicyResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSPolicy返回参数结构体
 */
export interface DescribeDDoSPolicyResponse {
    /**
     * DDoS高级策略列表
     */
    DDosPolicyList?: Array<DDosPolicy>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCCFrequencyRules返回参数结构体
 */
export interface DeleteCCFrequencyRulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDDoSPolicyCase返回参数结构体
 */
export interface DeleteDDoSPolicyCaseResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateL4HealthConfig返回参数结构体
 */
export interface CreateL4HealthConfigResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNewL7Rules请求参数结构体
 */
export interface CreateNewL7RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
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
    /**
     * 规则列表
     */
    Rules: Array<L7RuleEntry>;
}
/**
 * ModifyL7Rules请求参数结构体
 */
export interface ModifyL7RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
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
 * ModifyElasticLimit返回参数结构体
 */
export interface ModifyElasticLimitResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNewL7RulesUpload返回参数结构体
 */
export interface CreateNewL7RulesUploadResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 攻击源信息
 */
export interface DDoSAttackSourceRecord {
    /**
     * 攻击源ip
     */
    SrcIp: string;
    /**
     * 省份（国内有效，不包含港澳台）
     */
    Province: string;
    /**
     * 国家
     */
    Nation: string;
    /**
     * 累计攻击包量
     */
    PacketSum: number;
    /**
     * 累计攻击流量
     */
    PacketLen: number;
}
/**
 * CreateUnblockIp返回参数结构体
 */
export interface CreateUnblockIpResponse {
    /**
     * IP
     */
    Ip?: string;
    /**
     * 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封）
     */
    ActionType?: string;
    /**
     * 解封时间（预计解封时间）
     */
    UnblockTime?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePackIndex请求参数结构体
 */
export interface DescribePackIndexRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示高防包；net表示高防IP专业版）
     */
    Business: string;
}
/**
 * DescribeNewL7RulesErrHealth请求参数结构体
 */
export interface DescribeNewL7RulesErrHealthRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP)
     */
    Business: string;
    /**
     * 规则Id列表
     */
    RuleIdList?: Array<string>;
}
/**
 * ModifyL4Rules请求参数结构体
 */
export interface ModifyL4RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则
     */
    Rule: L4RuleEntry;
}
/**
 * DescribeDDoSEvList返回参数结构体
 */
export interface DescribeDDoSEvListResponse {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 资源的IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpList?: Array<string>;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * DDoS攻击事件列表
     */
    Data?: Array<DDoSEventRecord>;
    /**
     * 总记录数
     */
    Total?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSPolicy请求参数结构体
 */
export interface DescribeDDoSPolicyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 可选字段，资源ID，如果填写则表示该资源绑定的DDoS高级策略
     */
    Id?: string;
}
/**
 * 四层规则结构体
 */
export interface NewL4RuleEntry {
    /**
     * 转发协议，取值[TCP, UDP]
     */
    Protocol: string;
    /**
     * 转发端口
     */
    VirtualPort: number;
    /**
     * 源站端口
     */
    SourcePort: number;
    /**
     * 会话保持时间，单位秒
     */
    KeepTime: number;
    /**
     * 回源列表
     */
    SourceList: Array<L4RuleSource>;
    /**
     * 负载均衡方式，取值[1(加权轮询)，2(源IP hash)]
     */
    LbType: number;
    /**
     * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]；
     */
    KeepEnable: number;
    /**
     * 回源方式，取值[1(域名回源)，2(IP回源)]
     */
    SourceType: number;
    /**
     * 规则ID
     */
    RuleId?: string;
    /**
     * 规则描述
     */
    RuleName?: string;
    /**
     * 移除水印状态，取值[0(关闭)，1(开启)]
     */
    RemoveSwitch?: number;
    /**
     * 规则修改时间
     */
    ModifyTime?: string;
    /**
     * 对应地区信息
     */
    Region?: number;
    /**
     * 绑定资源IP信息
     */
    Ip?: string;
    /**
     * 绑定资源Id信息
     */
    Id?: string;
}
/**
 * DescribeL7HealthConfig返回参数结构体
 */
export interface DescribeL7HealthConfigResponse {
    /**
     * 七层健康检查配置数组
     */
    HealthConfig?: Array<L7HealthConfig>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CC的访问频率控制规则
 */
export interface CCFrequencyRule {
    /**
     * CC的访问频率控制规则ID
     */
    CCFrequencyRuleId: string;
    /**
     * URI字符串，必须以/开头，例如/abc/a.php，长度不超过31；当URI=/时，匹配模式只能选择前缀匹配；
     */
    Uri: string;
    /**
     * User-Agent字符串，长度不超过80
     */
    UserAgent: string;
    /**
     * Cookie字符串，长度不超过40
     */
    Cookie: string;
    /**
     * 匹配规则，取值["include"(前缀匹配)，"equal"(完全匹配)]
     */
    Mode: string;
    /**
     * 统计周期，单位秒，取值[10, 30, 60]
     */
    Period: number;
    /**
     * 访问次数，取值[1-10000]
     */
    ReqNumber: number;
    /**
     * 执行动作，取值["alg"（人机识别）, "drop"（拦截）]
     */
    Act: string;
    /**
     * 执行时间，单位秒，取值[1-900]
     */
    ExeDuration: number;
}
/**
 * CreateCCSelfDefinePolicy返回参数结构体
 */
export interface CreateCCSelfDefinePolicyResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
     * 回源方式，取值[1(域名回源)，2(IP回源)]
     */
    SourceType: number;
    /**
     * 会话保持时间，单位秒
     */
    KeepTime: number;
    /**
     * 回源列表
     */
    SourceList: Array<L4RuleSource>;
    /**
     * 负载均衡方式，取值[1(加权轮询)]
     */
    LbType: number;
    /**
     * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]
     */
    KeepEnable: number;
    /**
     * 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段；
     */
    RuleId?: string;
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
     * 规则描述
     */
    RuleName?: string;
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
     * HTTPS协议的CC防护阈值
     */
    CCThreshold?: number;
    /**
     * HTTPS协议的CC防护等级
     */
    CCLevel?: string;
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
}
/**
 * 删除l4规则接口
 */
export interface L4DelRule {
    /**
     * 资源Id
     */
    Id: string;
    /**
     * 资源IP
     */
    Ip: string;
    /**
     * 规则Id
     */
    RuleIdList: Array<string>;
}
/**
 * DescribeCCSelfDefinePolicy返回参数结构体
 */
export interface DescribeCCSelfDefinePolicyResponse {
    /**
     * 自定义规则总数
     */
    Total?: number;
    /**
     * 策略列表
     */
    Policys?: Array<CCPolicy>;
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
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSUsedStatis请求参数结构体
 */
export interface DescribeDDoSUsedStatisRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
     */
    Business: string;
}
/**
 * DDoS高级策略的禁用协议选项
 */
export interface DDoSPolicyDropOption {
    /**
     * 禁用TCP协议，取值范围[0,1]
     */
    DropTcp: number;
    /**
     * 禁用UDP协议，取值范围[0,1]
     */
    DropUdp: number;
    /**
     * 禁用ICMP协议，取值范围[0,1]
     */
    DropIcmp: number;
    /**
     * 禁用其他协议，取值范围[0,1]
     */
    DropOther: number;
    /**
     * 拒绝海外流量，取值范围[0,1]
     */
    DropAbroad: number;
    /**
     * 空连接防护，取值范围[0,1]
     */
    CheckSyncConn: number;
    /**
     * 基于来源IP及目的IP的新建连接抑制，取值范围[0,4294967295]
     */
    SdNewLimit?: number;
    /**
     * 基于目的IP的新建连接抑制，取值范围[0,4294967295]
     */
    DstNewLimit?: number;
    /**
     * 基于来源IP及目的IP的并发连接抑制，取值范围[0,4294967295]
     */
    SdConnLimit?: number;
    /**
     * 基于目的IP的并发连接抑制，取值范围[0,4294967295]
     */
    DstConnLimit?: number;
    /**
     * 基于连接抑制触发阈值，取值范围[0,4294967295]
     */
    BadConnThreshold?: number;
    /**
     * 异常连接检测条件，空连接防护开关，，取值范围[0,1]
     */
    NullConnEnable?: number;
    /**
     * 异常连接检测条件，连接超时，，取值范围[0,65535]
     */
    ConnTimeout?: number;
    /**
     * 异常连接检测条件，syn占比ack百分比，，取值范围[0,100]
     */
    SynRate?: number;
    /**
     * 异常连接检测条件，syn阈值，取值范围[0,100]
     */
    SynLimit?: number;
    /**
     * tcp限速，取值范围[0,4294967295]
     */
    DTcpMbpsLimit?: number;
    /**
     * udp限速，取值范围[0,4294967295]
     */
    DUdpMbpsLimit?: number;
    /**
     * icmp限速，取值范围[0,4294967295]
     */
    DIcmpMbpsLimit?: number;
    /**
     * other协议限速，取值范围[0,4294967295]
     */
    DOtherMbpsLimit?: number;
}
/**
 * ModifyElasticLimit请求参数结构体
 */
export interface ModifyElasticLimitRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 弹性防护阈值，取值[0 10000 20000 30000 40000 50000 60000 70000 80000 90000 100000 120000 150000 200000 250000 300000 400000 600000 800000 220000 310000 110000 270000 610000]
     */
    Limit: number;
}
/**
 * ModifyL4Health返回参数结构体
 */
export interface ModifyL4HealthResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CC攻击事件记录
 */
export interface CCEventRecord {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 资源的IP
     */
    Vip: string;
    /**
     * 攻击开始时间
     */
    StartTime: string;
    /**
     * 攻击结束时间
     */
    EndTime: string;
    /**
     * 总请求QPS峰值
     */
    ReqQps: number;
    /**
     * 攻击QPS峰值
     */
    DropQps: number;
    /**
     * 攻击状态，取值[0（攻击中）, 1（攻击结束）]
     */
    AttackStatus: number;
    /**
     * 资源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName: string;
    /**
     * 域名列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DomainList: string;
    /**
     * uri列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UriList: string;
    /**
     * 攻击源列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttackipList: string;
}
/**
 * DescribeTransmitStatis请求参数结构体
 */
export interface DescribeTransmitStatisRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版；bgp表示独享包；bgp-multip表示共享包）
     */
    Business: string;
    /**
     * 资源实例ID
     */
    Id: string;
    /**
     * 指标名，取值：
  traffic表示流量带宽；
  pkg表示包速率；
     */
    MetricName: string;
    /**
     * 统计时间粒度（300表示5分钟；3600表示小时；86400表示天）
     */
    Period: number;
    /**
     * 统计开始时间，秒部分保持为0，分钟部分为5的倍数
     */
    StartTime: string;
    /**
     * 统计结束时间，秒部分保持为0，分钟部分为5的倍数
     */
    EndTime: string;
    /**
     * 资源的IP（当Business为bgp-multip时必填，且仅支持一个IP）；当不填写时，默认统计资源实例的所有IP；资源实例有多个IP（比如高防IP专业版）时，统计方式是求和；
     */
    IpList?: Array<string>;
}
/**
 * DescribeInsurePacks返回参数结构体
 */
export interface DescribeInsurePacksResponse {
    /**
     * 保险包套餐列表
     */
    InsurePacks?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUnblockIp请求参数结构体
 */
export interface CreateUnblockIpRequest {
    /**
     * IP
     */
    Ip: string;
    /**
     * 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封）
     */
    ActionType: string;
}
/**
 * ModifyResourceRenewFlag返回参数结构体
 */
export interface ModifyResourceRenewFlagResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 排序字段
 */
export interface OrderBy {
    /**
     * 排序字段名称，取值[
  bandwidth（带宽），
  overloadCount（超峰值次数）
  ]
     */
    Field: string;
    /**
     * 升降序，取值为[asc（升序），（升序），desc（降序）， DESC（降序）]
     */
    Order: string;
}
/**
 * DescribeActionLog返回参数结构体
 */
export interface DescribeActionLogResponse {
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 记录数组
     */
    Data?: Array<KeyValueRecord>;
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
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business?: string;
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 资源的IP
     */
    Ip?: string;
    /**
     * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))]
     */
    MetricName?: string;
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
     * 值个数
     */
    Count?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSPolicyCase返回参数结构体
 */
export interface ModifyDDoSPolicyCaseResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCUrlAllow返回参数结构体
 */
export interface DescribeCCUrlAllowResponse {
    /**
     * 该字段被RecordList字段替代了，请不要使用
     */
    Data?: Array<KeyValue>;
    /**
     * 记录总数
     */
    Total?: number;
    /**
     * 返回黑/白名单的记录，
  "Key":"url"时，"Value":值表示URL;
  "Key":"domain"时， "Value":值表示域名;
  "Key":"type"时，"Value":值表示黑白名单类型(white为白名单，block为黑名单);
  "Key":"protocol"时，"Value":值表示CC的防护类型(HTTP防护或HTTPS域名防护);
     */
    RecordList?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSecIndex请求参数结构体
 */
export declare type DescribeSecIndexRequest = null;
/**
 * ModifyCCFrequencyRulesStatus请求参数结构体
 */
export interface ModifyCCFrequencyRulesStatusRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）
     */
    RuleId: string;
    /**
     * 开启或关闭，取值["on"(开启)，"off"(关闭)]
     */
    Method: string;
}
/**
 * DescribeDDoSCount返回参数结构体
 */
export interface DescribeDDoSCountResponse {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 资源的IP
     */
    Ip?: string;
    /**
     * 统计开始时间
     */
    StartTime?: string;
    /**
     * 统计结束时间
     */
    EndTime?: string;
    /**
     * 指标，取值[traffic（攻击协议流量, 单位KB）, pkg（攻击协议报文数）, classnum（攻击事件次数）]
     */
    MetricName?: string;
    /**
     * Key-Value值数组，Key说明如下，
  当MetricName为traffic时：
  key为"TcpKBSum"，表示TCP报文流量，单位KB
  key为"UdpKBSum"，表示UDP报文流量，单位KB
  key为"IcmpKBSum"，表示ICMP报文流量，单位KB
  key为"OtherKBSum"，表示其他报文流量，单位KB
  
  当MetricName为pkg时：
  key为"TcpPacketSum"，表示TCP报文个数，单位个
  key为"UdpPacketSum"，表示UDP报文个数，单位个
  key为"IcmpPacketSum"，表示ICMP报文个数，单位个
  key为"OtherPacketSum"，表示其他报文个数，单位个
  
  当MetricName为classnum时：
  key的值表示攻击事件类型，其中Key为"UNKNOWNFLOOD"，表示未知的攻击事件
     */
    Data?: Array<KeyValue>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeL4RulesErrHealth返回参数结构体
 */
export interface DescribeL4RulesErrHealthResponse {
    /**
     * 异常规则的总数
     */
    Total?: number;
    /**
     * 异常规则列表，返回值说明: Key值为规则ID，Value值为异常IP，多个IP用","分割
     */
    ErrHealths?: Array<KeyValue>;
    /**
     * 异常规则列表(提供更多的错误相关信息)，返回值说明:
  Key值为RuleId时，Value值为规则ID；
  Key值为Protocol时，Value值为规则的转发协议；
  Key值为VirtualPort时，Value值为规则的转发端口；
  Key值为ErrMessage时，Value值为健康检查异常信息；
  健康检查异常信息的格式为"SourceIp:1.1.1.1|SourcePort:1234|AbnormalStatTime:1570689065|AbnormalReason:connection time out|Interval:20|CheckNum:6|FailNum:6" 多个源IP的错误信息用，分割,
  SourceIp表示源站IP，SourcePort表示源站端口，AbnormalStatTime表示异常时间，AbnormalReason表示异常原因，Interval表示检查周期，CheckNum表示检查次数，FailNum表示失败次数；
     */
    ExtErrHealths?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDDoSPolicy返回参数结构体
 */
export interface DeleteDDoSPolicyResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
     */
    MetricName: string;
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
     * 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例）
     */
    Id?: string;
}
/**
 * ModifyDDoSPolicy返回参数结构体
 */
export interface ModifyDDoSPolicyResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资源的IP数组
 */
export interface ResourceIp {
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 资源的IP数组
     */
    IpList?: Array<string>;
}
/**
 * CC告警阈值
 */
export interface CCAlarmThreshold {
    /**
     * CC告警阈值
     */
    AlarmThreshold: number;
}
/**
 * DescribeDDoSNetIpLog请求参数结构体
 */
export interface DescribeDDoSNetIpLogRequest {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 攻击开始时间
     */
    StartTime: string;
    /**
     * 攻击结束时间
     */
    EndTime: string;
}
/**
 * 七层健康检查配置
 */
export interface L7HealthConfig {
    /**
     * 转发协议，取值[http, https, http/https]
     */
    Protocol: string;
    /**
     * 转发域名
     */
    Domain: string;
    /**
     * =1表示开启；=0表示关闭
     */
    Enable: number;
    /**
     * 检测间隔时间，单位秒
     */
    Interval: number;
    /**
     * 异常判定次数，单位次
     */
    KickNum: number;
    /**
     * 健康判定次数，单位次
     */
    AliveNum: number;
    /**
     * 健康检查探测方法，可选HEAD或GET，默认为HEAD
     */
    Method: string;
    /**
     * 健康检查判定正常状态码，1xx =1, 2xx=2, 3xx=4, 4xx=8,5xx=16，多个状态码值加和
     */
    StatusCode: number;
    /**
     * 检查目录的URL，默认为/
     */
    Url: string;
}
/**
 * DescribeDDoSNetEvInfo返回参数结构体
 */
export interface DescribeDDoSNetEvInfoResponse {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 攻击开始时间
     */
    StartTime?: string;
    /**
     * 攻击结束时间
     */
    EndTime?: string;
    /**
     * TCP报文攻击包数
     */
    TcpPacketSum?: number;
    /**
     * TCP报文攻击流量，单位KB
     */
    TcpKBSum?: number;
    /**
     * UDP报文攻击包数
     */
    UdpPacketSum?: number;
    /**
     * UDP报文攻击流量，单位KB
     */
    UdpKBSum?: number;
    /**
     * ICMP报文攻击包数
     */
    IcmpPacketSum?: number;
    /**
     * ICMP报文攻击流量，单位KB
     */
    IcmpKBSum?: number;
    /**
     * 其他报文攻击包数
     */
    OtherPacketSum?: number;
    /**
     * 其他报文攻击流量，单位KB
     */
    OtherKBSum?: number;
    /**
     * 累计攻击流量，单位KB
     */
    TotalTraffic?: number;
    /**
     * 攻击流量带宽峰值
     */
    Mbps?: number;
    /**
     * 攻击包速率峰值
     */
    Pps?: number;
    /**
     * PCAP文件下载链接
     */
    PcapUrl?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCCAlarmThreshold返回参数结构体
 */
export interface ModifyCCAlarmThresholdResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleSets请求参数结构体
 */
export interface DescribeRuleSetsRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID列表
     */
    IdList: Array<string>;
}
/**
 * DescribeSchedulingDomainList请求参数结构体
 */
export interface DescribeSchedulingDomainListRequest {
    /**
     * 一页条数，填0表示不分页
     */
    Limit: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset: number;
    /**
     * 可选，筛选特定的域名
     */
    Domain?: string;
}
/**
 * DescribleL7Rules返回参数结构体
 */
export interface DescribleL7RulesResponse {
    /**
     * 转发规则列表
     */
    Rules?: Array<L7RuleEntry>;
    /**
     * 总规则数
     */
    Total?: number;
    /**
     * 健康检查配置列表
     */
    Healths?: Array<L7RuleHealth>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBizTrend请求参数结构体
 */
export interface DescribeBizTrendRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP）
     */
    Business: string;
    /**
     * 资源实例ID
     */
    Id: string;
    /**
     * 统计周期，可取值300，1800，3600，21600，86400，单位秒
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
     * 统计方式，可取值max, min, avg, sum, 如统计纬度是流量速率或包量速率，仅可取值max
     */
    Statistics: string;
    /**
     * 统计纬度，可取值connum, new_conn, inactive_conn, intraffic, outtraffic, inpkg, outpkg, qps
     */
    MetricName: string;
    /**
     * 协议及端口列表，协议可取值TCP, UDP, HTTP, HTTPS，仅统计纬度为连接数时有效
     */
    ProtoInfo?: Array<ProtocolPort>;
    /**
     * 统计纬度为qps时，可选特定域名查询
     */
    Domain?: string;
}
/**
 * CreateCCFrequencyRules返回参数结构体
 */
export interface CreateCCFrequencyRulesResponse {
    /**
     * CC防护的访问频率控制规则ID
     */
    CCFrequencyRuleId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNewL4Rules请求参数结构体
 */
export interface CreateNewL4RulesRequest {
    /**
     * 高防产品代号：bgpip
     */
    Business: string;
    /**
     * 添加规则资源列表
     */
    IdList: Array<string>;
    /**
     * 添加规则IP列表
     */
    VipList: Array<string>;
    /**
     * 规则列表
     */
    Rules: Array<L4RuleEntry>;
}
/**
 * DDoS高级策略的禁用端口
 */
export interface DDoSPolicyPortLimit {
    /**
     * 协议，取值范围[tcp,udp,all]
     */
    Protocol: string;
    /**
     * 开始目的端口，取值范围[0,65535]
     */
    DPortStart: number;
    /**
     * 结束目的端口，取值范围[0,65535]，要求大于等于开始目的端口
     */
    DPortEnd: number;
    /**
     * 开始源端口，取值范围[0,65535]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPortStart?: number;
    /**
     * 结束源端口，取值范围[0,65535]，要求大于等于开始源端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPortEnd?: number;
    /**
     * 执行动作，取值[drop(丢弃) ，transmit(转发)]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Action?: string;
    /**
     * 禁用端口类型，取值[0（目的端口范围禁用）， 1（源端口范围禁用）， 2（目的和源端口范围同时禁用）]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Kind?: number;
}
/**
 * DescribeSchedulingDomainList返回参数结构体
 */
export interface DescribeSchedulingDomainListResponse {
    /**
     * 调度域名总数
     */
    Total?: number;
    /**
     * 调度域名列表信息
     */
    DomainList?: Array<SchedulingDomain>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDDoSNetTrend返回参数结构体
 */
export interface DescribeDDoSNetTrendResponse {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
     */
    MetricName?: string;
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
     * 值个数
     */
    Count?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnBlockStatis返回参数结构体
 */
export interface DescribeUnBlockStatisResponse {
    /**
     * 解封总配额数
     */
    Total?: number;
    /**
     * 已使用次数
     */
    Used?: number;
    /**
     * 统计起始时间
     */
    BeginTime?: string;
    /**
     * 统计结束时间
     */
    EndTime?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribleL7Rules请求参数结构体
 */
export interface DescribleL7RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 规则ID，可选参数，填写后获取指定的规则
     */
    RuleIdList?: Array<string>;
    /**
     * 一页条数，填0表示不分页
     */
    Limit?: number;
    /**
     * 页起始偏移，取值为(页码-1)*一页条数
     */
    Offset?: number;
    /**
     * 域名搜索，选填，当需要搜索域名请填写
     */
    Domain?: string;
    /**
     * 转发协议搜索，选填，取值[http, https, http/https]
     */
    ProtocolList?: Array<string>;
    /**
     * 状态搜索，选填，取值[0(规则配置成功)，1(规则配置生效中)，2(规则配置失败)，3(规则删除生效中)，5(规则删除失败)，6(规则等待配置)，7(规则等待删除)，8(规则待配置证书)]
     */
    StatusList?: Array<number | bigint>;
}
/**
 * DescribeCCIpAllowDeny请求参数结构体
 */
export interface DescribeCCIpAllowDenyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 黑或白名单，取值[white(白名单)，black(黑名单)]
  注意：此数组只能有一个值，不能同时获取黑名单和白名单
     */
    Type: Array<string>;
    /**
     * 分页参数
     */
    Limit?: number;
    /**
     * 分页参数
     */
    Offset?: number;
    /**
     * 可选，代表HTTP协议或HTTPS协议的CC防护，取值[http（HTTP协议的CC防护），https（HTTPS协议的CC防护）]；
     */
    Protocol?: string;
}
/**
 * DescribeSecIndex返回参数结构体
 */
export interface DescribeSecIndexResponse {
    /**
     * 字段值，如下：
  AttackIpCount：受攻击的IP数
  AttackCount：攻击次数
  BlockCount：封堵次数
  MaxMbps：攻击峰值Mbps
  IpNum：统计的IP数据
     */
    Data?: Array<KeyValue>;
    /**
     * 本月开始时间
     */
    BeginDate?: string;
    /**
     * 本月结束时间
     */
    EndDate?: string;
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
     * 转发协议，取值[http, https]
     */
    Protocol: string;
    /**
     * 转发域名
     */
    Domain: string;
    /**
     * 回源方式，取值[1(域名回源)，2(IP回源)]
     */
    SourceType: number;
    /**
     * 会话保持时间，单位秒
     */
    KeepTime: number;
    /**
     * 回源列表
     */
    SourceList: Array<L4RuleSource>;
    /**
     * 负载均衡方式，取值[1(加权轮询)]
     */
    LbType: number;
    /**
     * 会话保持开关，取值[0(会话保持关闭)，1(会话保持开启)]
     */
    KeepEnable: number;
    /**
     * 规则ID，当添加新规则时可以不用填写此字段；当修改或者删除规则时需要填写此字段；
     */
    RuleId?: string;
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
     * 规则描述
     */
    RuleName?: string;
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
     * HTTPS协议的CC防护阈值
     */
    CCThreshold?: number;
    /**
     * HTTPS协议的CC防护等级
     */
    CCLevel?: string;
    /**
     * 是否开启Https协议使用Http回源，取值[0(关闭), 1(开启)]，不填写默认是关闭
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HttpsToHttpEnable?: number;
    /**
     * 接入端口值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualPort?: number;
}
/**
 * IP解封记录
 */
export interface IpUnBlockData {
    /**
     * IP
     */
    Ip: string;
    /**
     * 封堵时间
     */
    BlockTime: string;
    /**
     * 解封时间（实际解封时间）
     */
    UnBlockTime: string;
    /**
     * 解封类型（user：自助解封；auto：自动解封； update：升级解封；bind：绑定高防包解封）
     */
    ActionType: string;
}
/**
 * DescribeL4HealthConfig返回参数结构体
 */
export interface DescribeL4HealthConfigResponse {
    /**
     * 四层健康检查配置数组
     */
    HealthConfig?: Array<L4HealthConfig>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSLevel请求参数结构体
 */
export interface ModifyDDoSLevelRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
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
 * DDoS高级策略的报文过滤项
 */
export interface DDoSPolicyPacketFilter {
    /**
     * 协议，取值范围[tcp,udp,icmp,all]
     */
    Protocol: string;
    /**
     * 开始源端口，取值范围[0,65535]
     */
    SportStart: number;
    /**
     * 结束源端口，取值范围[0,65535]
     */
    SportEnd: number;
    /**
     * 开始目的端口，取值范围[0,65535]
     */
    DportStart: number;
    /**
     * 结束目的端口，取值范围[0,65535]
     */
    DportEnd: number;
    /**
     * 最小包长，取值范围[0,1500]
     */
    PktlenMin: number;
    /**
     * 最大包长，取值范围[0,1500]
     */
    PktlenMax: number;
    /**
     * 是否检测载荷，取值范围[
  begin_l3(IP头)
  begin_l4(TCP头)
  begin_l5(载荷)
  no_match(不检测)
  ]
     */
    MatchBegin: string;
    /**
     * 是否是正则表达式，取值范围[sunday(表示关键字),pcre(表示正则表达式)]
     */
    MatchType: string;
    /**
     * 关键字或正则表达式
     */
    Str: string;
    /**
     * 检测深度，取值范围[0,1500]
     */
    Depth: number;
    /**
     * 检测偏移量，取值范围[0,1500]
     */
    Offset: number;
    /**
     * 是否包括，取值范围[0(表示不包含),1(表示包含)]
     */
    IsNot: number;
    /**
     * 策略动作，取值范围[drop，drop_black，drop_rst，drop_black_rst，transmit]
     */
    Action: string;
}
/**
 * DeleteCCFrequencyRules请求参数结构体
 */
export interface DeleteCCFrequencyRulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * CC防护的访问频率控制规则ID
     */
    CCFrequencyRuleId: string;
}
/**
 * DescribeDDoSNetIpLog返回参数结构体
 */
export interface DescribeDDoSNetIpLogResponse {
    /**
     * 大禹子产品代号（net表示高防IP专业版）
     */
    Business?: string;
    /**
     * 资源ID
     */
    Id?: string;
    /**
     * 攻击开始时间
     */
    StartTime?: string;
    /**
     * 攻击结束时间
     */
    EndTime?: string;
    /**
     * IP攻击日志，KeyValue数组，Key-Value取值说明：
  Key为"LogTime"时，Value值为IP日志时间
  Key为"LogMessage"时，Value值为Ip日志内容
     */
    Data?: Array<KeyValueRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCCFrequencyRules请求参数结构体
 */
export interface CreateCCFrequencyRulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 7层转发规则ID（通过获取7层转发规则接口可以获取规则ID）
     */
    RuleId: string;
    /**
     * 匹配规则，取值["include"(前缀匹配)，"equal"(完全匹配)]
     */
    Mode: string;
    /**
     * 统计周期，单位秒，取值[10, 30, 60]
     */
    Period: number;
    /**
     * 访问次数，取值[1-10000]
     */
    ReqNumber: number;
    /**
     * 执行动作，取值["alg"（人机识别）, "drop"（拦截）]
     */
    Act: string;
    /**
     * 执行时间，单位秒，取值[1-900]
     */
    ExeDuration: number;
    /**
     * URI字符串，必须以/开头，例如/abc/a.php，长度不超过31；当URI=/时，匹配模式只能选择前缀匹配；
     */
    Uri?: string;
    /**
     * User-Agent字符串，长度不超过80
     */
    UserAgent?: string;
    /**
     * Cookie字符串，长度不超过40
     */
    Cookie?: string;
}
/**
 * DeleteL7Rules返回参数结构体
 */
export interface DeleteL7RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateL7HealthConfig返回参数结构体
 */
export interface CreateL7HealthConfigResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
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
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business?: string;
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 资源的IP
     */
    Ip?: string;
    /**
     * 指标，取值[bps(攻击流量带宽，pps(攻击包速率))]
     */
    MetricName?: string;
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
     * 值个数
     */
    Count?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateL7RulesUpload返回参数结构体
 */
export interface CreateL7RulesUploadResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribleRegionCount返回参数结构体
 */
export interface DescribleRegionCountResponse {
    /**
     * 地域资源实例数
     */
    RegionList?: Array<RegionInstanceCount>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDDoSThreshold请求参数结构体
 */
export interface ModifyDDoSThresholdRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * DDoS清洗阈值，取值[0, 60, 80, 100, 150, 200, 250, 300, 400, 500, 700, 1000];
  当设置值为0时，表示采用默认值；
     */
    Threshold: number;
}
/**
 * DDoS攻击事件记录
 */
export interface DDoSEventRecord {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版；basic表示DDoS基础防护）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 资源的IP
     */
    Vip: string;
    /**
     * 攻击开始时间
     */
    StartTime: string;
    /**
     * 攻击结束时间
     */
    EndTime: string;
    /**
     * 攻击最大带宽
     */
    Mbps: number;
    /**
     * 攻击最大包速率
     */
    Pps: number;
    /**
     * 攻击类型
     */
    AttackType: string;
    /**
     * 是否被封堵，取值[1（是），0（否），2（无效值）]
     */
    BlockFlag: number;
    /**
     * 是否超过弹性防护峰值，取值取值[yes(是)，no(否)，空字符串（未知值）]
     */
    OverLoad: string;
    /**
     * 攻击状态，取值[0（攻击中）, 1（攻击结束）]
     */
    AttackStatus: number;
    /**
     * 资源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName: string;
    /**
     * 攻击事件Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventId: string;
}
/**
 * DescribleL4Rules返回参数结构体
 */
export interface DescribleL4RulesResponse {
    /**
     * 转发规则列表
     */
    Rules?: Array<L4RuleEntry>;
    /**
     * 总规则数
     */
    Total?: number;
    /**
     * 健康检查配置列表
     */
    Healths?: Array<L4RuleHealth>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyL4Rules返回参数结构体
 */
export interface ModifyL4RulesResponse {
    /**
     * 成功码
     */
    Success?: SuccessCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 指标，取值[inqps(总请求峰值，dropqps(攻击请求峰值))]
     */
    MetricName: string;
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
     * 资源实例ID，当Business为basic时，此字段不用填写（因为基础防护没有资源实例）
     */
    Id?: string;
    /**
     * 域名，可选
     */
    Domain?: string;
}
/**
 * DeleteNewL7Rules请求参数结构体
 */
export interface DeleteNewL7RulesRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP)
     */
    Business: string;
    /**
     * 删除规则列表
     */
    Rule: Array<L4DelRule>;
}
/**
 * CreateInstanceName请求参数结构体
 */
export interface CreateInstanceNameRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 资源ID
     */
    Id: string;
    /**
     * 资源实例名称，长度不超过32个字符
     */
    Name: string;
}
/**
 * DeleteDDoSPolicy请求参数结构体
 */
export interface DeleteDDoSPolicyRequest {
    /**
     * 大禹子产品代号（bgpip表示高防IP；bgp表示独享包；bgp-multip表示共享包；net表示高防IP专业版）
     */
    Business: string;
    /**
     * 策略ID
     */
    PolicyId: string;
}

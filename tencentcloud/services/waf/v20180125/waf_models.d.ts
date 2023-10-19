/**
 * ModifyWebshellStatus请求参数结构体
 */
export interface ModifyWebshellStatusRequest {
    /**
     * 域名webshell状态
     */
    Webshell: WebshellStatus;
}
/**
 * waf模块的规格
 */
export interface WafRuleLimit {
    /**
     * 自定义CC的规格
     */
    CC: number;
    /**
     * 自定义策略的规格
     */
    CustomRule: number;
    /**
     * 黑白名单的规格
     */
    IPControl: number;
    /**
     * 信息防泄漏的规格
     */
    AntiLeak: number;
    /**
     * 防篡改的规格
     */
    AntiTamper: number;
    /**
     * 紧急CC的规格
     */
    AutoCC: number;
    /**
     * 地域封禁的规格
     */
    AreaBan: number;
    /**
     * 自定义CC中配置session
     */
    CCSession: number;
    /**
     * AI的规格
     */
    AI: number;
    /**
     * 精准白名单的规格
     */
    CustomWhite: number;
    /**
     * api安全的规格
     */
    ApiSecurity: number;
    /**
     * 客户端流量标记的规格
     */
    ClientMsg: number;
    /**
     * 流量标记的规格
     */
    TrafficMarking: number;
}
/**
 * DescribeUserClbWafRegions返回参数结构体
 */
export interface DescribeUserClbWafRegionsResponse {
    /**
     * 地域（标准的ap-格式）列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<string>;
    /**
     * 包含详细属性的地域信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RichDatas?: Array<ClbWafRegionItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddAntiFakeUrl请求参数结构体
 */
export interface AddAntiFakeUrlRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 名称
     */
    Name: string;
    /**
     * uri
     */
    Uri: string;
}
/**
 * DescribePeakValue返回参数结构体
 */
export interface DescribePeakValueResponse {
    /**
     * QPS峰值
     */
    Access: number;
    /**
     * 上行带宽峰值，单位B
     */
    Up: number;
    /**
     * 下行带宽峰值，单位B
     */
    Down: number;
    /**
     * Web攻击总数
     */
    Attack: number;
    /**
     * CC攻击总数
     */
    Cc: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 出参
 */
export interface DescribeAntiLeakageItem {
    /**
     * 规则ID
     */
    RuleId: number;
    /**
     * 名称
     */
    Name: string;
    /**
     * 状态值
     */
    Status: number;
    /**
     * 动作
     */
    Action: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 匹配条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Strategies: Array<DescribeAntiInfoLeakRulesStrategyItem>;
    /**
     * 匹配的URL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uri: string;
}
/**
 * 负载均衡器
 */
export interface LoadBalancerPackageNew {
    /**
     * 监听id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ListenerId: string;
    /**
     * 监听名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ListenerName: string;
    /**
     * 负载均衡id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerId: string;
    /**
     * 负载均衡名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerName: string;
    /**
     * 协议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocol: string;
    /**
     * 地区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: string;
    /**
     * 接入IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vip: string;
    /**
     * 接入端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vport: number;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone: string;
    /**
     * VPCID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NumericalVpcId: number;
    /**
     * CLB类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerType: string;
    /**
     * 负载均衡器的域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerDomain?: string;
}
/**
 * DeleteHost请求参数结构体
 */
export interface DeleteHostRequest {
    /**
     * 删除的域名列表
     */
    HostsDel: Array<HostDel>;
}
/**
 * DescribeCertificateVerifyResult返回参数结构体
 */
export interface DescribeCertificateVerifyResultResponse {
    /**
     * 状态码
     */
    Status: number;
    /**
     * 错误详情
     */
    Detail: Array<string>;
    /**
     * 过期时间
     */
    NotAfter: string;
    /**
     * 证书是否改变:1有改变，0没有改变
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Changed: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUserSignatureRule返回参数结构体
 */
export interface ModifyUserSignatureRuleResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceName返回参数结构体
 */
export interface ModifyInstanceNameResponse {
    /**
     * 修改状态：0为成功
     */
    ModifyCode?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWafAutoDenyRules请求参数结构体
 */
export interface DescribeWafAutoDenyRulesRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 实例Id
     */
    InstanceId?: string;
}
/**
 * GenerateDealsAndPayNew请求参数结构体
 */
export interface GenerateDealsAndPayNewRequest {
    /**
     * 计费下单入参
     */
    Goods: Array<GoodNews>;
}
/**
 * DeleteCustomWhiteRule返回参数结构体
 */
export interface DeleteCustomWhiteRuleResponse {
    /**
     * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
     */
    Success: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyHostMode返回参数结构体
 */
export interface ModifyHostModeResponse {
    /**
     * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Success: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAttackDownloadRecords请求参数结构体
 */
export declare type GetAttackDownloadRecordsRequest = null;
/**
 * 重保防护资源信息
 */
export interface MajorEventsPkg {
    /**
     * 资源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceIds?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: number;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime?: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 申请数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InquireNum?: number;
    /**
     * 使用数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedNum?: number;
    /**
     * 续费标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: number;
    /**
     * 计费项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillingItem?: string;
    /**
     * 护网包状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HWState?: number;
}
/**
 * DescribeDomainRules请求参数结构体
 */
export interface DescribeDomainRulesRequest {
    /**
     * 需要查询的域名
     */
    Domain?: string;
}
/**
 * DeleteDownloadRecord请求参数结构体
 */
export interface DeleteDownloadRecordRequest {
    /**
     * 记录id
     */
    Flow: string;
}
/**
 * DeleteAccessExport返回参数结构体
 */
export interface DeleteAccessExportResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用于 DescribeAccessIndex 的出参
 */
export interface AccessKeyValueInfo {
    /**
     * 需要配置键值或者元字段索引的字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key: string;
    /**
     * 字段的索引描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: AccessValueInfo;
}
/**
 * Key-Value的形式，Value为Int
 */
export interface KVInt {
    /**
     * Key
     */
    Key: string;
    /**
     * Value
     */
    Value: number;
}
/**
 * AddAntiInfoLeakRules请求参数结构体
 */
export interface AddAntiInfoLeakRulesRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 动作，0（告警）、1（替换）、2（仅显示前四位）、3（仅显示后四位）、4（阻断）
     */
    ActionType: number;
    /**
     * 策略详情
     */
    Strategies: Array<StrategyForAntiInfoLeak>;
    /**
     * 网址
     */
    Uri?: string;
}
/**
 * DeleteAttackWhiteRule返回参数结构体
 */
export interface DeleteAttackWhiteRuleResponse {
    /**
     * 删除失败的规则序号组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailIds: Array<number | bigint>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWebshellStatus请求参数结构体
 */
export interface DescribeWebshellStatusRequest {
    /**
     * 域名
     */
    Domain: string;
}
/**
 * GetAttackHistogram返回参数结构体
 */
export interface GetAttackHistogramResponse {
    /**
     * 统计详情
     */
    Data?: Array<LogHistogramInfo>;
    /**
     * 时间段大小
     */
    Period?: number;
    /**
     * 统计的条目数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 过滤数组
 */
export interface FiltersItemNew {
    /**
     * 字段名
     */
    Name: string;
    /**
     * 过滤值
     */
    Values: Array<string>;
    /**
     * 是否精确查找
     */
    ExactMatch: boolean;
}
/**
 * DeleteSpartaProtection返回参数结构体
 */
export interface DeleteSpartaProtectionResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 饼图数据类型
 */
export interface PiechartItem {
    /**
     * 类型
     */
    Type: string;
    /**
     * 数量
     */
    Count: number;
}
/**
 * SwitchDomainRules请求参数结构体
 */
export interface SwitchDomainRulesRequest {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 规则列表
     */
    Ids?: Array<number | bigint>;
    /**
     * 开关状态，0表示关闭，1表示开启，2表示只观察
     */
    Status?: number;
    /**
     * 设置为观察模式原因，
  1表示业务自身原因观察，2表示系统规则误报上报，3表示核心业务灰度观察，4表示其他
     */
    Reason?: number;
}
/**
 * ModifyApiAnalyzeStatus返回参数结构体
 */
export interface ModifyApiAnalyzeStatusResponse {
    /**
     * 已经开启的数量,如果返回值为3（大于支持的域名开启数量），则表示开启失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count?: number;
    /**
     * 不支持开启的域名列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnSupportedList?: Array<string>;
    /**
     * 开启/关闭失败的域名列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailDomainList?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAttackWhiteRule请求参数结构体
 */
export interface ModifyAttackWhiteRuleRequest {
    /**
     * 规则序号
     */
    RuleId: number;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 规则Id
     */
    SignatureId: string;
    /**
     * 规则状态
     */
    Status: number;
    /**
     * 匹配规则项列表
     */
    Rules: Array<UserWhiteRuleItem>;
}
/**
 * clb-waf防护域名
 */
export interface HostRecord {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ID
     */
    DomainId: string;
    /**
     * 主域名，入参时为空
     */
    MainDomain: string;
    /**
     * 规则引擎防护模式，0 观察模式，1拦截模式
     */
    Mode: number;
    /**
     * waf和LD的绑定，0：没有绑定，1：绑定
     */
    Status: number;
    /**
     * 域名状态，0：正常，1：未检测到流量，2：即将过期，3：过期
     */
    State: number;
    /**
     * 规则引擎和AI引擎防护模式联合状态,10规则引擎观察&&AI引擎关闭模式 11规则引擎观察&&AI引擎观察模式 12规则引擎观察&&AI引擎拦截模式 20规则引擎拦截&&AI引擎关闭模式 21规则引擎拦截&&AI引擎观察模式 22规则引擎拦截&&AI引擎拦截模式
     */
    Engine: number;
    /**
     * 是否开启代理，0：不开启，1：开启
     */
    IsCdn: number;
    /**
     * 绑定的LB列表
     */
    LoadBalancerSet: Array<LoadBalancer>;
    /**
     * 域名绑定的LB的地域，以,分割多个地域
     */
    Region: string;
    /**
     * 产品分类，取值为：sparta-waf、clb-waf、cdn-waf
     */
    Edition: string;
    /**
     * WAF的流量模式，1：清洗模式，0：镜像模式
     */
    FlowMode: number;
    /**
     * 是否开启访问日志，1：开启，0：关闭
     */
    ClsStatus: number;
    /**
     * 防护等级，可选值100,200,300
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Level?: number;
    /**
     * 域名需要下发到的cdc集群列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CdcClusters?: Array<string>;
    /**
     * 应用型负载均衡类型: clb或者apisix，默认clb
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlbType?: string;
    /**
     * IsCdn=3时，需要填此参数，表示自定义header
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpHeaders?: Array<string>;
    /**
     * 规则引擎类型， 1: menshen,   2:tiga
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EngineType?: number;
    /**
     * 云类型:public:公有云；private:私有云;hybrid:混合云
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CloudType?: string;
}
/**
 * ModifyCustomRule返回参数结构体
 */
export interface ModifyCustomRuleResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FreshAntiFakeUrl请求参数结构体
 */
export interface FreshAntiFakeUrlRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * Id
     */
    Id: number;
}
/**
 * ModifyAreaBanStatus请求参数结构体
 */
export interface ModifyAreaBanStatusRequest {
    /**
     * 需要修改的域名
     */
    Domain: string;
    /**
     * 状态值，0表示关闭，1表示开启
     */
    Status: number;
}
/**
 * waf斯巴达-编辑防护域名中的端口结构
 */
export interface SpartaProtectionPort {
    /**
     * nginx Id
     */
    NginxServerId: number;
    /**
     * 端口
     */
    Port: string;
    /**
     * 协议
     */
    Protocol: string;
    /**
     * 后端端口
     */
    UpstreamPort: string;
    /**
     * 后端协议
     */
    UpstreamProtocol: string;
}
/**
 * PeakPoints数组项
 */
export interface PeakPointsItem {
    /**
     * 秒级别时间戳
     */
    Time?: number;
    /**
     * QPS
     */
    Access?: number;
    /**
     * 上行带宽峰值，单位B
     */
    Up?: number;
    /**
     * 下行带宽峰值，单位B
     */
    Down?: number;
    /**
     * Web攻击次数
     */
    Attack?: number;
    /**
     * CC攻击次数
     */
    Cc?: number;
    /**
     * Bot qps
     */
    BotAccess?: number;
    /**
     * WAF返回给客户端状态码5xx次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusServerError?: number;
    /**
     * WAF返回给客户端状态码4xx次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusClientError?: number;
    /**
     * WAF返回给客户端状态码302次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusRedirect?: number;
    /**
     * WAF返回给客户端状态码202次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusOk?: number;
    /**
     * 源站返回给WAF状态码5xx次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamServerError?: number;
    /**
     * 源站返回给WAF状态码4xx次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamClientError?: number;
    /**
     * 源站返回给WAF状态码302次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamRedirect?: number;
    /**
     * 黑名单次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlackIP?: number;
    /**
     * 防篡改次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tamper?: number;
    /**
     * 信息防泄露次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Leak?: number;
    /**
     * 访问控制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ACL?: number;
}
/**
 * Clb类型防护对象
 */
export interface ClbObject {
    /**
     * 对象ID
     */
    ObjectId: string;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 实例名称
     */
    InstanceName: string;
    /**
     * 精准域名列表
     */
    PreciseDomains: Array<string>;
    /**
     * WAF功能开关状态，0关闭1开启
     */
    Status: number;
    /**
     * WAF日志开关状态，0关闭1开启
     */
    ClsStatus: number;
    /**
     * CLB对象对应的虚拟域名
     */
    VirtualDomain: string;
    /**
     * 对象名称
     */
    ObjectName: string;
    /**
     * 公网地址
     */
    PublicIp: Array<string>;
    /**
     * 内网地址
     */
    PrivateIp: Array<string>;
    /**
     * VPC名称
     */
    VpcName: string;
    /**
     * VPC ID
     */
    Vpc: string;
    /**
     * waf实例等级，如果未绑定实例为0
     */
    InstanceLevel: number;
    /**
     * clb投递开关
     */
    PostCLSStatus: number;
    /**
     * kafka投递开关
     */
    PostCKafkaStatus: number;
}
/**
 * DescribeSession请求参数结构体
 */
export interface DescribeSessionRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * clb-waf或者sparta-waf
     */
    Edition?: string;
}
/**
 * DescribePolicyStatus请求参数结构体
 */
export interface DescribePolicyStatusRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * clb-waf或者saas-waf
     */
    Edition: string;
}
/**
 * DescribeAccessFastAnalysis请求参数结构体
 */
export interface DescribeAccessFastAnalysisRequest {
    /**
     * 客户要查询的日志主题ID，每个客户都有对应的一个主题
     */
    TopicId: string;
    /**
     * 要查询的日志的起始时间，Unix时间戳，单位ms
     */
    From: number;
    /**
     * 要查询的日志的结束时间，Unix时间戳，单位ms
     */
    To: number;
    /**
     * 查询语句，语句长度最大为4096，由于本接口是分析接口，如果无过滤条件，必须传 * 表示匹配所有，参考CLS的分析统计语句的文档
     */
    Query: string;
    /**
     * 需要分析统计的字段名
     */
    FieldName: string;
    /**
     * 排序字段,升序asc,降序desc，默认降序desc
     */
    Sort?: string;
    /**
     * 返回的top数，默认返回top5
     */
    Count?: number;
}
/**
 * DeleteIpAccessControl请求参数结构体
 */
export interface DeleteIpAccessControlRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 删除的ip数组
     */
    Items: Array<string>;
    /**
     * 若IsId字段为True，则Items列表元素需为Id，否则为IP
     */
    IsId?: boolean;
    /**
     * 是否删除对应的域名下的所有黑/白IP名单，true表示全部删除，false表示只删除指定ip名单
     */
    DeleteAll?: boolean;
    /**
     * 是否为多域名黑白名单
     */
    SourceType?: string;
}
/**
 * DescribeDomainCountInfo返回参数结构体
 */
export interface DescribeDomainCountInfoResponse {
    /**
     * 域名总数
     */
    AllDomain: number;
    /**
     * 最近发现时间
     */
    UpdateTime: string;
    /**
     * 接入域名总数
     */
    WafDomainCount: number;
    /**
     * 剩下配额
     */
    LeftDomainCount: number;
    /**
     * 开启防护域名数
     */
    OpenWafDomain: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyHostMode请求参数结构体
 */
export interface ModifyHostModeRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ID
     */
    DomainId: string;
    /**
     * 防护状态：
  10：规则观察&&AI关闭模式，11：规则观察&&AI观察模式，12：规则观察&&AI拦截模式
  20：规则拦截&&AI关闭模式，21：规则拦截&&AI观察模式，22：规则拦截&&AI拦截模式
     */
    Mode: number;
    /**
     * 0:修改防护模式，1:修改AI
     */
    Type?: number;
    /**
     * 实例ID
     */
    InstanceID?: string;
    /**
     * 实例类型
     */
    Edition?: string;
}
/**
 * 公共翻页参数
 */
export interface PageInfo {
    /**
     * 页码
     */
    PageNumber: string;
    /**
     * 页条目数量
     */
    PageSize: string;
}
/**
 * DescribeCiphersDetail返回参数结构体
 */
export interface DescribeCiphersDetailResponse {
    /**
     * 加密套件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ciphers?: Array<TLSCiphers>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCustomRuleList请求参数结构体
 */
export interface DescribeCustomRuleListRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 偏移
     */
    Offset: number;
    /**
     * 容量
     */
    Limit: number;
    /**
     * 过滤数组,name可以是如下的值： RuleID,RuleName,Match
     */
    Filters?: Array<FiltersItemNew>;
    /**
     * asc或者desc
     */
    Order?: string;
    /**
     * exp_ts或者mod_ts
     */
    By?: string;
}
/**
 * PostAttackDownloadTask返回参数结构体
 */
export interface PostAttackDownloadTaskResponse {
    /**
     * 任务task id
     */
    Flow?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAttackWhiteRule请求参数结构体
 */
export interface DescribeAttackWhiteRuleRequest {
    /**
     * 需要查询的域名
     */
    Domain: string;
    /**
     * 分页
     */
    Offset: number;
    /**
     * 每页容量
     */
    Limit: number;
    /**
     * 排序字段，支持user_id, signature_id, modify_time
     */
    By?: string;
    /**
     * 排序方式
     */
    Order?: string;
    /**
     * 筛选条件，支持SignatureId, MatchContent
     */
    Filters?: Array<FiltersItemNew>;
}
/**
 * 防信息泄露的匹配条件结构体
 */
export interface StrategyForAntiInfoLeak {
    /**
     * 匹配条件，returncode（响应码）、keywords（关键字）、information（敏感信息）
     */
    Field: string;
    /**
     * 逻辑符号，固定取值为contains
     */
    CompareFunc: string;
    /**
     * 匹配内容。
  以下三个对应Field为information时可取的匹配内容：
  idcard（身份证）、phone（手机号）、bankcard（银行卡）。
  以下为对应Field为returncode时可取的匹配内容：
  400（状态码400）、403（状态码403）、404（状态码404）、4xx（其它4xx状态码）、500（状态码500）、501（状态码501）、502（状态码502）、504（状态码504）、5xx（其它5xx状态码）。
  当对应Field为keywords时由用户自己输入匹配内容。
  
     */
    Content: string;
}
/**
 * AddSpartaProtection返回参数结构体
 */
export interface AddSpartaProtectionResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserDomainInfo请求参数结构体
 */
export declare type DescribeUserDomainInfoRequest = null;
/**
 * 数据封装
 */
export interface IpAccessControlData {
    /**
     * ip黑白名单
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Res: Array<IpAccessControlItem>;
    /**
     * 计数
     */
    TotalCount: number;
}
/**
 * DescribeHost返回参数结构体
 */
export interface DescribeHostResponse {
    /**
     * 域名详情
     */
    Host: HostRecord;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWafAutoDenyRules返回参数结构体
 */
export interface ModifyWafAutoDenyRulesResponse {
    /**
     * 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码）
     */
    Success?: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserSignatureRule返回参数结构体
 */
export interface DescribeUserSignatureRuleResponse {
    /**
     * 规则总数
     */
    Total: number;
    /**
     * 规则列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rules: Array<UserSignatureRule>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用于DescribeAccessIndex接口的出参
 */
export interface AccessValueInfo {
    /**
     * 字段类型，目前支持的类型有：long、text、double
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 字段的分词符，只有当字段类型为text时才有意义；输入字符串中的每个字符代表一个分词符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tokenizer: string;
    /**
     * 字段是否开启分析功能
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SqlFlag: boolean;
    /**
     * 是否包含中文
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainZH: boolean;
}
/**
 * 规则列表详情
 */
export interface Rule {
    /**
     * 规则id
     */
    Id?: number;
    /**
     * 规则类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 规则等级
     */
    Level?: string;
    /**
     * 规则描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 规则防护的CVE编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVE?: string;
    /**
     * 规则的状态
     */
    Status?: number;
    /**
     * 规则修改的时间
     */
    ModifyTime?: string;
    /**
     * 门神规则新增/更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddTime?: string;
}
/**
 * 自定义规则的匹配条件结构体
 */
export interface Strategy {
    /**
     * 匹配字段
  
      匹配字段不同，相应的匹配参数、逻辑符号、匹配内容有所不同具体如下所示：
  <table><thead><tr><th>匹配字段</th><th>匹配参数</th><th>逻辑符号</th><th>匹配内容</th></tr></thead><tbody><tr><td>IP（来源IP）</td><td>不支持参数</td><td>ipmatch（匹配）<br/>ipnmatch（不匹配）</td><td>多个IP以英文逗号隔开,最多20个</td></tr><tr><td>IPV6（来源IPv6）</td><td>不支持参数</td><td>ipmatch（匹配）<br/>ipnmatch（不匹配）</td><td>支持单个IPV6地址</td></tr><tr><td>Referer（Referer）</td><td>不支持参数</td><td>empty（内容为空）<br/>null（不存在）<br/>eq（等于）<br/>neq（不等于）<br/>contains（包含）<br/>ncontains（不包含）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）<br/>rematch（正则匹配）</td><td>请输入内容,512个字符以内</td></tr><tr><td>URL（请求路径）</td><td>不支持参数</td><td>eq（等于）<br/>neq（不等于）<br/>contains（包含）<br/>ncontains（不包含）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）<br/>rematch（正则匹配）<br/></td><td>请以/开头,512个字符以内</td></tr><tr><td>UserAgent（UserAgent）</td><td>不支持参数</td><td>同匹配字段<font color="Red">Referer</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>HTTP_METHOD（HTTP请求方法）</td><td>不支持参数</td><td>eq（等于）<br/>neq（不等于）</td><td>请输入方法名称,建议大写</td></tr><tr><td>QUERY_STRING（请求字符串）</td><td>不支持参数</td><td>同匹配字段<font color="Red">请求路径</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>GET（GET参数值）</td><td>支持参数录入</td><td>contains（包含）<br/>ncontains（不包含）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）</td><td>请输入内容,512个字符以内</td></tr><tr><td>GET_PARAMS_NAMES（GET参数名）</td><td>不支持参数</td><td>exsit（存在参数）<br/>nexsit（不存在参数）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）</td><td>请输入内容,512个字符以内</td></tr><tr><td>POST（POST参数值）</td><td>支持参数录入</td><td>同匹配字段<font color="Red">GET参数值</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>GET_POST_NAMES（POST参数名）</td><td>不支持参数</td><td>同匹配字段<font color="Red">GET参数名</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>POST_BODY（完整BODY）</td><td>不支持参数</td><td>同匹配字段<font color="Red">请求路径</font>逻辑符号</td><td>请输入BODY内容,512个字符以内</td></tr><tr><td>COOKIE（Cookie）</td><td>不支持参数</td><td>empty（内容为空）<br/>null（不存在）<br/>rematch（正则匹配）</td><td><font color="Red">暂不支持</font></td></tr><tr><td>GET_COOKIES_NAMES（Cookie参数名）</td><td>不支持参数</td><td>同匹配字段<font color="Red">GET参数名</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>ARGS_COOKIE（Cookie参数值）</td><td>支持参数录入</td><td>同匹配字段<font color="Red">GET参数值</font>逻辑符号</td><td>请输入内容,512个字符以内</td></tr><tr><td>GET_HEADERS_NAMES（Header参数名）</td><td>不支持参数</td><td>exsit（存在参数）<br/>nexsit（不存在参数）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）<br/>rematch（正则匹配）</td><td>请输入内容,建议小写,512个字符以内</td></tr><tr><td>ARGS_HEADER（Header参数值）</td><td>支持参数录入</td><td>contains（包含）<br/>ncontains（不包含）<br/>len_eq（长度等于）<br/>len_gt（长度大于）<br/>len_lt（长度小于）<br/>strprefix（前缀匹配）<br/>strsuffix（后缀匹配）<br/>rematch（正则匹配）</td><td>请输入内容,512个字符以内</td></tr></tbody></table>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Field: string;
    /**
     * 逻辑符号
  
      逻辑符号一共分为以下几种类型：
          empty （ 内容为空）
          null （不存在）
          eq （ 等于）
          neq （ 不等于）
          contains （ 包含）
          ncontains （ 不包含）
          strprefix （ 前缀匹配）
          strsuffix （ 后缀匹配）
          len_eq （ 长度等于）
          len_gt （ 长度大于）
          len_lt （ 长度小于）
          ipmatch （ 属于）
          ipnmatch （ 不属于）
      各匹配字段对应的逻辑符号不同，详见上述匹配字段表格
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompareFunc: string;
    /**
     * 匹配内容
  
      目前 当匹配字段为COOKIE（Cookie）时，不需要输入 匹配内容其他都需要
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content: string;
    /**
     * 匹配参数
  
      配置参数一共分2种类型 不支持参数与支持参数
      当匹配字段为以下4个时，匹配参数才能录入，否则不支持该参数
          GET（GET参数值）
          POST（POST参数值）
          ARGS_COOKIE（Cookie参数值）
          ARGS_HEADER（Header参数值）
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Arg: string;
}
/**
 * UpsertCCRule返回参数结构体
 */
export interface UpsertCCRuleResponse {
    /**
     * 一般为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 操作的RuleId
     */
    RuleId?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeHost请求参数结构体
 */
export interface DescribeHostRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ID
     */
    DomainId: string;
    /**
     * 实例ID
     */
    InstanceID?: string;
}
/**
 * DescribeAccessIndex
 */
export interface AccessFullTextInfo {
    /**
     * 是否大小写敏感
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaseSensitive: boolean;
    /**
     * 全文索引的分词符，字符串中每个字符代表一个分词符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tokenizer: string;
    /**
     * 是否包含中文
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainZH: boolean;
}
/**
 * DeleteCustomRule请求参数结构体
 */
export interface DeleteCustomRuleRequest {
    /**
     * 删除的域名
     */
    Domain: string;
    /**
     * 删除的规则ID
     */
    RuleId: string;
    /**
     * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
     */
    Edition?: string;
}
/**
 * DescribeHosts请求参数结构体
 */
export interface DescribeHostsRequest {
    /**
     * 防护域名，如果是要查询某一具体的防护域名则传入此参数，要求是准确的域名，此参数不支持模糊搜索
     */
    Domain?: string;
    /**
     * 防护域名ID，如果是要查询某一具体的防护域名则传入此参数，要求是准确的域名ID，此参数不支持模糊搜索
     */
    DomainId?: string;
    /**
     * 搜索条件，根据此参数对域名做模糊搜索
     */
    Search?: string;
    /**
     * 复杂的搜索条件
     */
    Item?: SearchItem;
    /**
     * 实例id
     */
    InstanceID?: string;
}
/**
 * ModifyCustomWhiteRuleStatus请求参数结构体
 */
export interface ModifyCustomWhiteRuleStatusRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 规则ID
     */
    RuleId: number;
    /**
     * 开关的状态，1是开启、0是关闭
     */
    Status: number;
}
/**
 * Clb-waf地域信息
 */
export interface ClbWafRegionItem {
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 地域中文说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Text?: string;
    /**
     * 地域英文全拼
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * 地域编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code?: string;
}
/**
 * DescribeFindDomainList请求参数结构体
 */
export interface DescribeFindDomainListRequest {
    /**
     * 分页
     */
    Offset: number;
    /**
     * 每页容量
     */
    Limit: number;
    /**
     * 过滤条件
     */
    Key: string;
    /**
     * 是否接入waf
     */
    IsWafDomain: string;
    /**
     * 排序参数
     */
    By?: string;
    /**
     * 排序方式
     */
    Order?: string;
}
/**
 * ModifyInstanceElasticMode返回参数结构体
 */
export interface ModifyInstanceElasticModeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 需要开启/关闭API安全的 实例+域名 组合实体
 */
export interface TargetEntity {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 域名
     */
    Domain?: string;
}
/**
 * cc规则
 */
export interface CCRuleItem {
    /**
     * 动作
     */
    ActionType: number;
    /**
     * 高级模式
     */
    Advance: number;
    /**
     * 时间周期
     */
    Interval: number;
    /**
     * 限制次数
     */
    Limit: number;
    /**
     * 匹配方法
     */
    MatchFunc: number;
    /**
     * 名称
     */
    Name: string;
    /**
     * 优先级
     */
    Priority: number;
    /**
     * 状态
     */
    Status: number;
    /**
     * 更新时间戳
     */
    TsVersion: number;
    /**
     * 匹配url
     */
    Url: string;
    /**
     * 策略动作有效时间
     */
    ValidTime: number;
    /**
     * 高级参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OptionsArr: string;
}
/**
 * 混合云节点资源信息
 */
export interface HybridPkg {
    /**
     * 资源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceIds?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: number;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime?: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 申请数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InquireNum?: number;
    /**
     * 使用数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedNum?: number;
    /**
     * 续费标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: number;
}
/**
 * DescribeCustomWhiteRule返回参数结构体
 */
export interface DescribeCustomWhiteRuleResponse {
    /**
     * 规则详情
     */
    RuleList?: Array<DescribeCustomRulesRspRuleListItem>;
    /**
     * 规则条数
     */
    TotalCount?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySpartaProtection请求参数结构体
 */
export interface ModifySpartaProtectionRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ID
     */
    DomainId?: string;
    /**
     * 证书类型，0表示没有证书，CertType=1表示自有证书,2 为托管证书
     */
    CertType?: number;
    /**
     * CertType=1时，需要填次参数，表示证书内容
     */
    Cert?: string;
    /**
     * CertType=1时，需要填次参数，表示证书的私钥
     */
    PrivateKey?: string;
    /**
     * CertType=2时，需要填次参数，表示证书的ID
     */
    SSLId?: string;
    /**
     * 表示是否开启了CDN代理
     */
    IsCdn?: number;
    /**
     * HTTPS回源协议
     */
    UpstreamScheme?: string;
    /**
     * HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段
     */
    HttpsUpstreamPort?: string;
    /**
     * 表示是否强制跳转到HTTPS，1表示开启，0表示不开启
     */
    HttpsRewrite?: number;
    /**
     * 回源类型，0表示通过IP回源,1 表示通过域名回源
     */
    UpstreamType?: number;
    /**
     * UpstreamType=1时，填次字段表示回源域名
     */
    UpstreamDomain?: string;
    /**
     * UpstreamType=0时，填次字段表示回源ip
     */
    SrcList?: Array<string>;
    /**
     * 是否开启HTTP2，1表示开启，0表示不开启http2。开启HTTP2需要HTTPS支持
     */
    IsHttp2?: number;
    /**
     * 是否开启WebSocket， 1：开启WebSocket，0：不开启WebSocket
     */
    IsWebsocket?: number;
    /**
     * 负载均衡策略，0表示轮徇，1表示IP hash
     */
    LoadBalance?: number;
    /**
     * 是否灰度
     */
    IsGray?: number;
    /**
     * WAF版本
     */
    Edition?: string;
    /**
     * 端口信息
     */
    Ports?: Array<SpartaProtectionPort>;
    /**
     * 长短连接标志，仅IP回源时有效
     */
    IsKeepAlive?: string;
    /**
     * 实例id
     */
    InstanceID?: string;
    /**
     * 是否为Anycast ip类型：1 Anycast 0 普通ip
     */
    Anycast?: number;
    /**
     * src的权重
     */
    Weights?: Array<number | bigint>;
    /**
     * 是否开启源站的主动健康检测，1表示开启，0表示不开启
     */
    ActiveCheck?: number;
    /**
     * TLS版本信息
     */
    TLSVersion?: number;
    /**
     * 加密套件信息
     */
    Ciphers?: Array<number | bigint>;
    /**
     * 0:不支持选择：默认模板  1:通用型模板 2:安全型模板 3:自定义模板
     */
    CipherTemplate?: number;
    /**
     * 300s
     */
    ProxyReadTimeout?: number;
    /**
     * 300s
     */
    ProxySendTimeout?: number;
    /**
     * 0:关闭SNI；1:开启SNI，SNI=源请求host；2:开启SNI，SNI=修改为源站host；3：开启SNI，自定义host，SNI=SniHost；
     */
    SniType?: number;
    /**
     * SniType=3时，需要填此参数，表示自定义的host；
     */
    SniHost?: string;
    /**
     * IsCdn=3时，需要填此参数，表示自定义header
     */
    IpHeaders?: Array<string>;
    /**
     * 0:关闭xff重置；1:开启xff重置，只有在IsCdn=0时可以开启
     */
    XFFReset?: number;
}
/**
 * DeleteAttackDownloadRecord请求参数结构体
 */
export interface DeleteAttackDownloadRecordRequest {
    /**
     * 下载任务记录唯一标记
     */
    Id: number;
}
/**
 * DescribeAntiFakeRules请求参数结构体
 */
export interface DescribeAntiFakeRulesRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 偏移
     */
    Offset: number;
    /**
     * 容量
     */
    Limit: number;
    /**
     * 过滤数组,name可以是如下的值： RuleID,ParamName,Url,Action,Method,Source,Status
     */
    Filters?: Array<FiltersItemNew>;
    /**
     * asc或者desc
     */
    Order?: string;
    /**
     * 目前支持根据ts排序
     */
    By?: string;
}
/**
 * DescribeVipInfo请求参数结构体
 */
export interface DescribeVipInfoRequest {
    /**
     * waf实例id列表
     */
    InstanceIds: Array<string>;
}
/**
 * DescribeFindDomainList返回参数结构体
 */
export interface DescribeFindDomainListResponse {
    /**
     * 域名总数
     */
    Total: number;
    /**
     * 域名信息列表
     */
    List: Array<FindAllDomainDetail>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteSession返回参数结构体
 */
export interface DeleteSessionResponse {
    /**
     * 结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWafAutoDenyStatus返回参数结构体
 */
export interface ModifyWafAutoDenyStatusResponse {
    /**
     * WAF 自动封禁配置项
     */
    WafAutoDenyDetails?: AutoDenyDetail;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAccessIndex返回参数结构体
 */
export interface DescribeAccessIndexResponse {
    /**
     * 是否生效，true表示生效，false表示未生效
     */
    Status?: boolean;
    /**
     * 索引配置信息
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rule?: AccessRuleInfo;
    /**
     * 索引修改时间，初始值为索引创建时间。
     */
    ModifyTime?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUserSignatureRule请求参数结构体
 */
export interface ModifyUserSignatureRuleRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 主类id
     */
    MainClassID?: string;
    /**
     * 主类开关0=关闭，1=开启，2=只告警
     */
    Status?: number;
    /**
     * 下发修改的规则列表
     */
    RuleID?: Array<ReqUserRule>;
}
/**
 * ModifyWafThreatenIntelligence返回参数结构体
 */
export interface ModifyWafThreatenIntelligenceResponse {
    /**
     * 当前WAF威胁情报封禁模块详情
     */
    WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserDomainInfo返回参数结构体
 */
export interface DescribeUserDomainInfoResponse {
    /**
     * saas和clb域名信息
     */
    UsersInfo: Array<UserDomainInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TLS信息
 */
export interface TLSVersion {
    /**
     * TLSVERSION的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionId: number;
    /**
     * TLSVERSION的NAME
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionName: string;
}
/**
 * 负载均衡的监听器
 */
export interface LoadBalancer {
    /**
     * 负载均衡LD的ID
     */
    LoadBalancerId: string;
    /**
     * 负载均衡LD的名称
     */
    LoadBalancerName: string;
    /**
     * 负载均衡监听器的ID
     */
    ListenerId: string;
    /**
     * 负载均衡监听器的名称
     */
    ListenerName: string;
    /**
     * 负载均衡实例的IP
     */
    Vip: string;
    /**
     * 负载均衡实例的端口
     */
    Vport: number;
    /**
     * 负载均衡LD的地域
     */
    Region: string;
    /**
     * 监听器协议，http、https
     */
    Protocol: string;
    /**
     * 负载均衡监听器所在的zone
     */
    Zone: string;
    /**
     * 负载均衡的VPCID，公网为-1，内网按实际填写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NumericalVpcId?: number;
    /**
     * 负载均衡的网络类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerType?: string;
    /**
     * 负载均衡的域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerDomain?: string;
}
/**
 * CDC场景下负载均衡WAF的集群信息
 */
export interface CdcCluster {
    /**
     * cdc的集群id
     */
    Id: string;
    /**
     * cdc的集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
}
/**
 * DescribeCustomRules接口回包中的复杂类型
 */
export interface DescribeCustomRulesRspRuleListItem {
    /**
     * 动作类型
     */
    ActionType: string;
    /**
     * 跳过的策略
     */
    Bypass: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 过期时间
     */
    ExpireTime: string;
    /**
     * 策略名称
     */
    Name: string;
    /**
     * 重定向地址
     */
    Redirect: string;
    /**
     * 策略ID
     */
    RuleId: string;
    /**
     * 优先级
     */
    SortId: string;
    /**
     * 状态
     */
    Status: string;
    /**
     * 策略详情
     */
    Strategies: Array<Strategy>;
    /**
     * 事件id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventId: string;
}
/**
 * ModifyAntiInfoLeakRules返回参数结构体
 */
export interface ModifyAntiInfoLeakRulesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 获取弹性qps的默认相关值
 */
export interface QpsData {
    /**
     * 弹性qps默认值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ElasticBillingDefault?: number;
    /**
     * 弹性qps最小值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ElasticBillingMin?: number;
    /**
     * 弹性qps最大值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ElasticBillingMax?: number;
    /**
     * 业务扩展包最大qps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QPSExtendMax?: number;
    /**
     * 海外业务扩展包最大qps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QPSExtendIntlMax?: number;
}
/**
 * AddCustomWhiteRule返回参数结构体
 */
export interface AddCustomWhiteRuleResponse {
    /**
     * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
     */
    Success: ResponseCode;
    /**
     * 添加成功的规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SwitchElasticMode请求参数结构体
 */
export interface SwitchElasticModeRequest {
    /**
     * 版本，只能是sparta-waf, clb-waf, cdn-waf
     */
    Edition: string;
    /**
     * 0代表关闭，1代表打开
     */
    Mode: number;
    /**
     * 实例id
     */
    InstanceID?: string;
}
/**
 * CLB-WAF删除域名参数
 */
export interface HostDel {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ID
     */
    DomainId: string;
    /**
     * 实例类型
     */
    InstanceID?: string;
}
/**
 * DescribeAntiFakeUrl请求参数结构体
 */
export interface DescribeAntiFakeUrlRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 翻页参数
     */
    PageInfo: PageInfo;
}
/**
 * DeleteAttackWhiteRule请求参数结构体
 */
export interface DeleteAttackWhiteRuleRequest {
    /**
     * 规则序号组
     */
    Ids: Array<number | bigint>;
    /**
     * 用户域名
     */
    Domain: string;
}
/**
 * DescribeHosts返回参数结构体
 */
export interface DescribeHostsResponse {
    /**
     * 防护域名列表的长度
     */
    TotalCount: number;
    /**
     * 防护域名的列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostList: Array<HostRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAccessIndex请求参数结构体
 */
export declare type DescribeAccessIndexRequest = null;
/**
 * domain列表
 */
export interface DomainInfo {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ID
     */
    DomainId: string;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * cname地址
     */
    Cname: string;
    /**
     * 实例类型,sparta-waf表示saaswaf实例域名,clb-waf表示clbwaf实例域名,cdc-clb-waf表示CDC环境下clbwaf实例域名,cdn-waf表示cdnwaf实例域名
     */
    Edition: string;
    /**
     * 地域
     */
    Region: string;
    /**
     * 实例名
     */
    InstanceName: string;
    /**
     * 日志包
     */
    ClsStatus: number;
    /**
     * clbwaf使用模式,0镜像模式 1清洗模式
     */
    FlowMode: number;
    /**
     * waf开关,0关闭 1开启
     */
    Status: number;
    /**
     * 规则引擎防护模式,0观察模式 1拦截模式
     */
    Mode: number;
    /**
     * 规则引擎和AI引擎防护模式联合状态,10规则引擎观察&&AI引擎关闭模式 11规则引擎观察&&AI引擎观察模式 12规则引擎观察&&AI引擎拦截模式 20规则引擎拦截&&AI引擎关闭模式 21规则引擎拦截&&AI引擎观察模式 22规则引擎拦截&&AI引擎拦截模式
     */
    Engine: number;
    /**
     * CC列表
     */
    CCList: Array<string>;
    /**
     * 回源ip
     */
    RsList: Array<string>;
    /**
     * 服务端口配置
     */
    Ports: Array<PortInfo>;
    /**
     * 负载均衡器
     */
    LoadBalancerSet: Array<LoadBalancerPackageNew>;
    /**
     * 用户id
     */
    AppId: number;
    /**
     * clbwaf域名监听器状态,0操作成功 4正在绑定LB 6正在解绑LB 7解绑LB失败 8绑定LB失败 10内部错误
     */
    State: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * Ipv6开关状态,0关闭 1开启
     */
    Ipv6Status?: number;
    /**
     * BOT开关状态,0关闭 1开启
     */
    BotStatus?: number;
    /**
     * 版本信息
     */
    Level?: number;
    /**
     * 是否开启投递CLS功能,0关闭 1开启
     */
    PostCLSStatus?: number;
    /**
     * 是否开启投递CKafka功能,0关闭 1开启
     */
    PostCKafkaStatus?: number;
    /**
     * cdc实例域名接入的集群信息,非cdc实例忽略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CdcClusters?: string;
    /**
     * api安全开关状态,0关闭 1开启
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApiStatus?: number;
    /**
     * 应用型负载均衡类型,clb或者apisix，默认clb
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlbType?: string;
    /**
     * 安全组状态,0不展示 1非腾讯云源站 2安全组绑定失败 3安全组发生变更
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SgState?: number;
    /**
     * 安全组状态的详细解释
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SgDetail?: string;
    /**
     * 域名类型:hybrid表示混合云域名，public表示公有云域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CloudType?: string;
}
/**
 * DescribeDomains返回参数结构体
 */
export interface DescribeDomainsResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * domain列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domains?: Array<DomainInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddAntiFakeUrl返回参数结构体
 */
export interface AddAntiFakeUrlResponse {
    /**
     * 结果
     */
    Result?: string;
    /**
     * 规则ID
     */
    Id?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySpartaProtection返回参数结构体
 */
export interface ModifySpartaProtectionResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserCdcClbWafRegions返回参数结构体
 */
export interface DescribeUserCdcClbWafRegionsResponse {
    /**
     * CdcRegion的类型描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<CdcRegion>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SwitchElasticMode返回参数结构体
 */
export interface SwitchElasticModeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAccessIndex接口的出参数
 */
export interface AccessRuleInfo {
    /**
     * 全文索引配置
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FullText: AccessFullTextInfo;
    /**
     * 键值索引配置
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyValue: AccessRuleKeyValueInfo;
    /**
     * 元字段索引配置
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag: AccessRuleTagInfo;
}
/**
 * PostAttackDownloadTask请求参数结构体
 */
export interface PostAttackDownloadTaskRequest {
    /**
     * 查询的域名，所有域名使用all
     */
    Domain: string;
    /**
     * 查询起始时间
     */
    StartTime: string;
    /**
     * 查询结束时间
     */
    EndTime: string;
    /**
     * Lucene语法
     */
    QueryString: string;
    /**
     * 任务名称
     */
    TaskName: string;
    /**
     * 默认为desc，可以取值desc和asc
     */
    Sort?: string;
    /**
     * 下载的日志条数
     */
    Count?: number;
}
/**
 * ModifyAntiFakeUrlStatus请求参数结构体
 */
export interface ModifyAntiFakeUrlStatusRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 状态
     */
    Status: number;
    /**
     * Id列表
     */
    Ids: Array<number | bigint>;
}
/**
 * TLS 加密套件
 */
export interface TLSCiphers {
    /**
     * TLS版本ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionId: number;
    /**
     * 加密套件ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CipherId: number;
    /**
     * 加密套件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CipherName: string;
}
/**
 * ModifyWafAutoDenyStatus请求参数结构体
 */
export interface ModifyWafAutoDenyStatusRequest {
    /**
     * WAF 自动封禁配置项
     */
    WafAutoDenyDetails: AutoDenyDetail;
}
/**
 * ModifyAccessPeriod返回参数结构体
 */
export interface ModifyAccessPeriodResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAttackWhiteRule返回参数结构体
 */
export interface ModifyAttackWhiteRuleResponse {
    /**
     * 规则总数
     */
    RuleId: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchAccessLog返回参数结构体
 */
export interface SearchAccessLogResponse {
    /**
     * 新接口此字段失效，默认返回空字符串
     */
    Context?: string;
    /**
     * 日志查询结果是否全部返回，其中，“true”表示结果返回，“false”表示结果为返回
     */
    ListOver?: boolean;
    /**
     * 返回的是否为分析结果，其中，“true”表示返回分析结果，“false”表示未返回分析结果
     */
    Analysis?: boolean;
    /**
     * 如果Analysis为True，则返回分析结果的列名，否则为空
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColNames?: Array<string>;
    /**
     * 日志查询结果；当Analysis为True时，可能返回为null
  注意：此字段可能返回 null，表示取不到有效值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Results?: Array<AccessLogInfo>;
    /**
     * 日志分析结果；当Analysis为False时，可能返回为null
  注意：此字段可能返回 null，表示取不到有效值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AnalysisResults?: Array<AccessLogItems>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAntiInfoLeakageRules请求参数结构体
 */
export interface DescribeAntiInfoLeakageRulesRequest {
    /**
     * 域名
     */
    Domain: string;
}
/**
 * CreateHost返回参数结构体
 */
export interface CreateHostResponse {
    /**
     * 新增防护域名ID
     */
    DomainId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBotStatus请求参数结构体
 */
export interface ModifyBotStatusRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 类别
     */
    Category: string;
    /**
     * 状态
     */
    Status: string;
    /**
     * 实例id
     */
    InstanceID?: string;
    /**
     * 是否是bot4.0版本
     */
    IsVersionFour?: boolean;
    /**
     * 传入Bot版本号，场景化版本为"4.1.0"
     */
    BotVersion?: string;
}
/**
 * ModifyHostFlowMode请求参数结构体
 */
export interface ModifyHostFlowModeRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ID
     */
    DomainId: string;
    /**
     * WAF流量模式，1：清洗模式，0：镜像模式（默认）
     */
    FlowMode: number;
    /**
     * 实例ID
     */
    InstanceID?: string;
}
/**
 * CreateHost请求参数结构体
 */
export interface CreateHostRequest {
    /**
     * 防护域名配置信息
     */
    Host: HostRecord;
    /**
     * 实例id
     */
    InstanceID?: string;
}
/**
 * GetInstanceQpsLimit返回参数结构体
 */
export interface GetInstanceQpsLimitResponse {
    /**
     * 弹性qps相关值集合
     */
    QpsData?: QpsData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCustomWhiteRule返回参数结构体
 */
export interface ModifyCustomWhiteRuleResponse {
    /**
     * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
     */
    Success?: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 接入列表查询复杂条件
 */
export interface SearchItem {
    /**
     * 日志开关
     */
    ClsStatus?: string;
    /**
     * waf开关
     */
    Status?: string;
    /**
     * 流量模式
     */
    FlowMode?: string;
}
/**
 * DescribePorts请求参数结构体
 */
export interface DescribePortsRequest {
    /**
     * 实例ID
     */
    InstanceID?: string;
    /**
     * 实例类型
     */
    Edition?: string;
}
/**
 * DescribeWafAutoDenyStatus返回参数结构体
 */
export interface DescribeWafAutoDenyStatusResponse {
    /**
     * WAF 自动封禁详情
     */
    WafAutoDenyDetails?: AutoDenyDetail;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTlsVersion请求参数结构体
 */
export declare type DescribeTlsVersionRequest = null;
/**
 * 计费下单响应实体
 */
export interface DealData {
    /**
     * 订单号列表，元素个数与请求包的goods数组的元素个数一致，商品详情与订单按顺序对应
     */
    DealNames?: Array<string>;
    /**
     * 大订单号，一个大订单号下可以有多个子订单，说明是同一次下单[{},{}]
     */
    BigDealId?: string;
}
/**
 * DescribeDomainDetailsSaas请求参数结构体
 */
export interface DescribeDomainDetailsSaasRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名id
     */
    DomainId: string;
    /**
     * 实例id
     */
    InstanceId: string;
}
/**
 * DescribeDomainCountInfo请求参数结构体
 */
export declare type DescribeDomainCountInfoRequest = null;
/**
 * 当前WAF威胁情报封禁模块详情
 */
export interface WafThreatenIntelligenceDetails {
    /**
     * 封禁属性标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<string>;
    /**
     * 封禁模组启用状态
     */
    DefenseStatus?: number;
    /**
     * 最后更新时间
     */
    LastUpdateTime?: string;
}
/**
 * DescribeDomainWhiteRules请求参数结构体
 */
export interface DescribeDomainWhiteRulesRequest {
    /**
     * 需要查询的域名
     */
    Domain: string;
    /**
     * 请求的白名单匹配路径
     */
    Url?: string;
    /**
     * 翻到多少页
     */
    Page?: number;
    /**
     * 每页展示的条数
     */
    Count?: number;
    /**
     * 排序方式,desc表示降序，asc表示升序
     */
    Sort?: string;
    /**
     * 规则ID
     */
    RuleId?: string;
}
/**
 * DescribePeakPoints返回参数结构体
 */
export interface DescribePeakPointsResponse {
    /**
     * 数据点
     */
    Points?: Array<PeakPointsItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceRenewFlag请求参数结构体
 */
export interface ModifyInstanceRenewFlagRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 续费开关
     */
    RenewFlag: number;
}
/**
 * 产品明细
 */
export interface GoodsDetailNew {
    /**
     * 时间间隔
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeSpan?: number;
    /**
     * 单位，支持购买d、m、y 即（日、月、年）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeUnit?: string;
    /**
     * 子产品标签,。新购，续费必传，变配时放在oldConfig newConfig里面
  
  Saas 高级版 ：sp_wsm_waf_premium
  Saas企业版 ：sp_wsm_waf_enterprise
  Saas旗舰版 ：sp_wsm_waf_ultimate
  Saas 业务扩展包：sp_wsm_waf_qpsep
  Saas 域名扩展包：sp_wsm_waf_domain
  
  高级版-CLB:sp_wsm_waf_premium_clb
  企业版-CLB : sp_wsm_waf_enterprise_clb
  旗舰版-CLB:sp_wsm_waf_ultimate_clb
   业务扩展包-CLB：sp_wsm_waf_qpsep_clb
  域名扩展包-CLB：sp_wsm_waf_domain_clb
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubProductCode?: string;
    /**
     * 业务产品申请的pid（对应一个定价公式），通过pid计费查询到定价模型
  高级版 ：1000827
  企业版 ：1000830
  旗舰版 ：1000832
  域名包 : 1000834
  业务扩展包 : 1000481
  高级版-CLB:1001150
  企业版-CLB : 1001152
  旗舰版-CLB:1001154
  域名包-CLB: 1001156
  业务扩展包-CLB : 1001160
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Pid?: number;
    /**
     * waf实例名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 1:自动续费，0:不自动续费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewFlag?: number;
    /**
     * waf购买的实际地域信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealRegion?: number;
    /**
     * 计费细项标签数组
  Saas 高级版  sv_wsm_waf_package_premium
  Saas 企业版  sv_wsm_waf_package_enterprise
  Saas 旗舰版  sv_wsm_waf_package_ultimate
  Saas 非中国大陆高级版  sv_wsm_waf_package_premium_intl
  Saas 非中国大陆企业版   sv_wsm_waf_package_enterprise_intl
  Saas 非中国大陆旗舰版  sv_wsm_waf_package_ultimate _intl
  Saas 业务扩展包  sv_wsm_waf_qps_ep
  Saas 域名扩展包  sv_wsm_waf_domain
  
  高级版CLB   sv_wsm_waf_package_premium_clb
  企业版CLB  sv_wsm_waf_package_enterprise_clb
  旗舰版CLB   sv_wsm_waf_package_ultimate_clb
  非中国大陆高级版 CLB sv_wsm_waf_package_premium_clb_intl
  非中国大陆企业版CLB   sv_wsm_waf_package_premium_clb_intl
  非中国大陆旗舰版CLB  sv_wsm_waf_package_ultimate_clb _intl
  业务扩展包CLB sv_wsm_waf_qps_ep_clb
  域名扩展包CLB  sv_wsm_waf_domain_clb
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelTypes?: Array<string>;
    /**
     * 计费细项标签数量，一般和SvLabelType一一对应
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelCounts?: Array<number | bigint>;
    /**
     * 变配使用，实例到期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurDeadline?: string;
    /**
     * 对存在的实例购买bot 或api 安全
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 资源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
}
/**
 * DeleteIpAccessControl返回参数结构体
 */
export interface DeleteIpAccessControlResponse {
    /**
     * 删除失败的条目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedItems?: string;
    /**
     * 删除失败的条目数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWafInfo返回参数结构体
 */
export interface DescribeWafInfoResponse {
    /**
     * 返回的WAF信息数组的长度，为0则表示没有查询到对应的信息
     */
    Total?: number;
    /**
     * 对应的WAF信息的数组。
     */
    HostList?: Array<ClbHostResult>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 多域名黑白名单列表Ip
 */
export interface BatchIpAccessControlItem {
    /**
     * mongo表自增Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 黑名单42或白名单40
     */
    ActionType?: number;
    /**
     * 黑白名单的IP
     */
    Ip?: string;
    /**
     * 备注
     */
    Note?: string;
    /**
     * 添加路径
     */
    Source?: string;
    /**
     * 修改时间
     */
    TsVersion?: number;
    /**
     * 超时时间
     */
    ValidTs?: number;
    /**
     * 域名列表
     */
    Hosts?: Array<string>;
}
/**
 * 用户规则白名单
 */
export interface UserWhiteRule {
    /**
     * 白名单的id
     */
    WhiteRuleId: number;
    /**
     * 规则id
     */
    SignatureId: string;
    /**
     * 状态
     */
    Status: number;
    /**
     * 匹配域
     */
    MatchField: string;
    /**
     * 匹配方法
     */
    MatchMethod: string;
    /**
     * 匹配内容
     */
    MatchContent: string;
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
 * 服务端口配置
 */
export interface PortInfo {
    /**
     * Nginx的服务器id
     */
    NginxServerId: number;
    /**
     * 监听端口配置
     */
    Port: string;
    /**
     * 与端口对应的协议
     */
    Protocol: string;
    /**
     * 回源端口
     */
    UpstreamPort: string;
    /**
     * 回源协议
     */
    UpstreamProtocol: string;
}
/**
 * AddAttackWhiteRule请求参数结构体
 */
export interface AddAttackWhiteRuleRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 规则Id
     */
    SignatureId: string;
    /**
     * 规则状态
     */
    Status: number;
    /**
     * 匹配规则项列表
     */
    Rules: Array<UserWhiteRuleItem>;
    /**
     * 规则序号
     */
    RuleId?: number;
}
/**
 * 业务安全资源信息
 */
export interface FraudPkg {
    /**
     * 资源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceIds?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: number;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime?: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 申请数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InquireNum?: number;
    /**
     * 使用数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedNum?: number;
    /**
     * 续费标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: number;
}
/**
 * DescribeAccessExports接口
 */
export interface ExportAccessInfo {
    /**
     * 日志导出任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExportId: string;
    /**
     * 日志导出查询语句
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Query: string;
    /**
     * 日志导出文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName: string;
    /**
     * 日志文件大小
     */
    FileSize: number;
    /**
     * 日志导出时间排序
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Order: string;
    /**
     * 日志导出格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Format: string;
    /**
     * 日志导出数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count: number;
    /**
     * 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）
     */
    Status: string;
    /**
     * 日志导出起始时间
     */
    From: number;
    /**
     * 日志导出结束时间
     */
    To: number;
    /**
     * 日志导出路径
     */
    CosPath: string;
    /**
     * 日志导出创建时间
     */
    CreateTime: string;
}
/**
 * DescribeAntiFakeUrl返回参数结构体
 */
export interface DescribeAntiFakeUrlResponse {
    /**
     * 总数
     */
    Total?: string;
    /**
     * 信息
     */
    List?: Array<CacheUrlItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIpAccessControl请求参数结构体
 */
export interface DescribeIpAccessControlRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 计数标识
     */
    Count: number;
    /**
     * 动作，40表示查询白名单，42表示查询黑名单
     */
    ActionType?: number;
    /**
     * 最小有效时间的时间戳
     */
    VtsMin?: number;
    /**
     * 最大有效时间的时间戳
     */
    VtsMax?: number;
    /**
     * 最小创建时间的时间戳
     */
    CtsMin?: number;
    /**
     * 最大创建时间的时间戳
     */
    CtsMax?: number;
    /**
     * 分页开始条数
     */
    OffSet?: number;
    /**
     * 每页的条数
     */
    Limit?: number;
    /**
     * 来源
     */
    Source?: string;
    /**
     * 排序参数
     */
    Sort?: string;
    /**
     * ip
     */
    Ip?: string;
    /**
     * 生效状态
     */
    ValidStatus?: number;
}
/**
 * ModifyWafThreatenIntelligence请求参数结构体
 */
export interface ModifyWafThreatenIntelligenceRequest {
    /**
     * 配置WAF威胁情报封禁模块详情
     */
    WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails;
}
/**
 * ModifyInstanceQpsLimit返回参数结构体
 */
export interface ModifyInstanceQpsLimitResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户规则更新输出规则子项
 */
export interface ReqUserRule {
    /**
     * 特征序号
     */
    Id: string;
    /**
     * 规则开关
  0：关
  1：开
  2：只告警
     */
    Status: number;
    /**
     * 修改原因
  0：无(兼容记录为空)
  1：业务自身特性误报避免
  2：规则误报上报
  3：核心业务规则灰度
  4：其它
     */
    Reason?: number;
}
/**
 * DescribeIpHitItems请求参数结构体
 */
export interface DescribeIpHitItemsRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 计数标识
     */
    Count: number;
    /**
     * 类别
     */
    Category: string;
    /**
     * 有效时间最小时间戳
     */
    VtsMin?: number;
    /**
     * 有效时间最大时间戳
     */
    VtsMax?: number;
    /**
     * 创建时间最小时间戳
     */
    CtsMin?: number;
    /**
     * 创建时间最大时间戳
     */
    CtsMax?: number;
    /**
     * 偏移参数
     */
    Skip?: number;
    /**
     * 限制数目
     */
    Limit?: number;
    /**
     * 策略名称
     */
    Name?: string;
    /**
     * 排序参数
     */
    Sort?: string;
    /**
     * IP
     */
    Ip?: string;
}
/**
 * 计费下单接口出入参Goods
 */
export interface GoodNews {
    /**
     * 商品数量
     */
    GoodsNum: number;
    /**
     * 商品明细
     */
    GoodsDetail: GoodsDetailNew;
    /**
     * 订单类型ID，用来唯一标识一个业务的一种场景（总共三种场景：新购、配置变更、续费）
  高级版: 102375(新购),102376(续费),102377(变配)
  企业版 : 102378(新购),102379(续费),102380(变配)
  旗舰版 : 102369(新购),102370(续费),102371(变配)
  域名包 : 102372(新购),102373(续费),102374(变配)
  业务扩展包 : 101040(新购),101041(续费),101042(变配)
  
  高级版-CLB: 新购 101198  续费 101199 变配 101200
  企业版-CLB 101204(新购),101205(续费),101206(变配)
  旗舰版-CLB : 101201(新购),101202(续费),101203(变配)
  域名包-CLB: 101207(新购),101208(续费),101209(变配)
  业务扩展包-CLB: 101210(新购),101211(续费),101212(变配)
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GoodsCategoryId?: number;
    /**
     * 购买waf实例区域ID
  1 表示购买大陆资源;
  9表示购买非中国大陆资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
}
/**
 * DescribeUserSignatureRule请求参数结构体
 */
export interface DescribeUserSignatureRuleRequest {
    /**
     * 需要查询的域名
     */
    Domain: string;
    /**
     * 分页
     */
    Offset: number;
    /**
     * 每页容量
     */
    Limit: number;
    /**
     * 排序字段，支持 signature_id, modify_time
     */
    By?: string;
    /**
     * 排序方式
     */
    Order?: string;
    /**
     * 筛选条件，支持 MainClassName，SubClassID ,CveID, Status, ID;  ID为规则id
     */
    Filters?: Array<FiltersItemNew>;
}
/**
 * DescribeUserClbWafRegions请求参数结构体
 */
export declare type DescribeUserClbWafRegionsRequest = null;
/**
 * AddAntiInfoLeakRules返回参数结构体
 */
export interface AddAntiInfoLeakRulesResponse {
    /**
     * 规则ID
     */
    RuleId?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWafThreatenIntelligence返回参数结构体
 */
export interface DescribeWafThreatenIntelligenceResponse {
    /**
     * WAF 威胁情报封禁信息
     */
    WafThreatenIntelligenceDetails: WafThreatenIntelligenceDetails;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddDomainWhiteRule请求参数结构体
 */
export interface AddDomainWhiteRuleRequest {
    /**
     * 需要添加的域名
     */
    Domain?: string;
    /**
     * 需要添加的规则
     */
    Rules?: Array<number | bigint>;
    /**
     * 需要添加的规则url
     */
    Url?: string;
    /**
     * 规则的方法
     */
    Function?: string;
    /**
     * 规则的开关，0表示规则关闭，1表示规则打开
     */
    Status?: number;
}
/**
 * DeleteAntiInfoLeakRule返回参数结构体
 */
export interface DeleteAntiInfoLeakRuleResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ip封堵状态数据
 */
export interface IpHitItem {
    /**
     * 动作
     */
    Action: number;
    /**
     * 类别
     */
    Category: string;
    /**
     * ip
     */
    Ip: string;
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 时间戳
     */
    TsVersion: number;
    /**
     * 有效截止时间戳
     */
    ValidTs: number;
}
/**
 * 用户特征规则描述
 */
export interface UserSignatureRule {
    /**
     * 特征ID
     */
    ID: string;
    /**
     * 规则开关
     */
    Status: number;
    /**
     * 主类ID
     */
    MainClassID: string;
    /**
     * 子类ID
     */
    SubClassID: string;
    /**
     * CVE ID
     */
    CveID: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 更新时间
     */
    ModifyTime: string;
    /**
     * 主类名字，根据Language字段输出中文/英文
     */
    MainClassName: string;
    /**
     * 子类名字，根据Language字段输出中文/英文，若子类id为00000000，此字段为空
     */
    SubClassName: string;
    /**
     * 规则描述
     */
    Description: string;
    /**
     * 0/1
     */
    Reason: number;
}
/**
 * 下载攻击日志记录数据项
 */
export interface DownloadAttackRecordInfo {
    /**
     * 记录ID
     */
    Id: number;
    /**
     * 下载任务名
     */
    TaskName: string;
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 域名
     */
    Host: string;
    /**
     * 当前下载任务的日志条数
     */
    Count: number;
    /**
     * 下载任务运行状态：-1-下载超时，0-下载等待，1-下载完成，2-下载失败，4-正在下载
     */
    Status: number;
    /**
     * 下载文件URL
     */
    Url: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 最后更新修改时间
     */
    ModifyTime: string;
    /**
     * 过期时间
     */
    ExpireTime: string;
    /**
     * 下载任务需下载的日志总条数
     */
    TotalCount: number;
}
/**
 * DescribeRuleLimit返回参数结构体
 */
export interface DescribeRuleLimitResponse {
    /**
     * waf模块的规格
     */
    Res?: WafRuleLimit;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAccessExport返回参数结构体
 */
export interface CreateAccessExportResponse {
    /**
     * 日志导出ID。
     */
    ExportId: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyHost请求参数结构体
 */
export interface ModifyHostRequest {
    /**
     * 编辑的域名配置信息
     */
    Host: HostRecord;
    /**
     * 实例id
     */
    InstanceID?: string;
}
/**
 * DescribeHistogram返回参数结构体
 */
export interface DescribeHistogramResponse {
    /**
     * 统计数据
     */
    Histogram: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RefreshAccessCheckResult返回参数结构体
 */
export interface RefreshAccessCheckResultResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUserLevel返回参数结构体
 */
export interface ModifyUserLevelResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAccessExport请求参数结构体
 */
export interface CreateAccessExportRequest {
    /**
     * 客户要查询的日志主题ID，每个客户都有对应的一个主题
     */
    TopicId: string;
    /**
     * 要查询的日志的起始时间，Unix时间戳，单位ms
     */
    From: number;
    /**
     * 要查询的日志的结束时间，Unix时间戳，单位ms
     */
    To: number;
    /**
     * 日志导出检索语句
     */
    Query: string;
    /**
     * 日志导出数量，最大值100w
     */
    Count: number;
    /**
     * 日志导出数据格式。json，csv，默认为json
     */
    Format?: string;
    /**
     * 日志导出时间排序。desc，asc，默认为desc
     */
    Order?: string;
}
/**
 * DescribeAutoDenyIP返回参数结构体
 */
export interface DescribeAutoDenyIPResponse {
    /**
     * 查询IP封禁状态返回结果
     */
    Data?: IpHitItemsData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAntiInfoLeakRules返回参数结构体
 */
export interface DescribeAntiInfoLeakRulesResponse {
    /**
     * 记录条数
     */
    TotalCount?: string;
    /**
     * 规则列表
     */
    RuleList?: Array<DescribeAntiInfoLeakRulesRuleItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIpHitItems返回参数结构体
 */
export interface DescribeIpHitItemsResponse {
    /**
     * 结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: IpHitItemsData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyHost返回参数结构体
 */
export interface ModifyHostResponse {
    /**
     * 编辑的域名ID
     */
    DomainId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCertificateVerifyResult请求参数结构体
 */
export interface DescribeCertificateVerifyResultRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 证书类型
     */
    CertType: number;
    /**
     * 证书公钥
     */
    Certificate?: string;
    /**
     * 证书ID
     */
    CertID?: string;
    /**
     * 私钥信息
     */
    PrivateKey?: string;
}
/**
 * DescribeUserCdcClbWafRegions请求参数结构体
 */
export declare type DescribeUserCdcClbWafRegionsRequest = null;
/**
 * DeleteAttackDownloadRecord返回参数结构体
 */
export interface DeleteAttackDownloadRecordResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFlowTrend请求参数结构体
 */
export interface DescribeFlowTrendRequest {
    /**
     * 需要获取流量趋势的域名, all表示所有域名
     */
    Domain: string;
    /**
     * 起始时间戳，精度秒
     */
    StartTs: number;
    /**
     * 结束时间戳，精度秒
     */
    EndTs: number;
}
/**
 * DescribeWafAutoDenyStatus请求参数结构体
 */
export declare type DescribeWafAutoDenyStatusRequest = null;
/**
 * AddDomainWhiteRule返回参数结构体
 */
export interface AddDomainWhiteRuleResponse {
    /**
     * 规则id
     */
    Id?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeIpAccessControl返回参数结构体
 */
export interface DescribeIpAccessControlResponse {
    /**
     * 输出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: IpAccessControlData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyProtectionStatus请求参数结构体
 */
export interface ModifyProtectionStatusRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 状态
     */
    Status: number;
    /**
     * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
     */
    Edition?: string;
}
/**
 * 数据封装
 */
export interface CCRuleData {
    /**
     * cc规则
     */
    Res: Array<CCRuleItem>;
    /**
     * 规则数目
     */
    TotalCount: number;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * instance列表
     */
    Instances?: Array<InstanceInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAccessIndex接口的出参
 */
export interface AccessRuleTagInfo {
    /**
     * 是否大小写敏感
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaseSensitive: boolean;
    /**
     * 标签索引配置中的字段信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyValues: Array<AccessKeyValueInfo>;
}
/**
 * ip黑白名单
 */
export interface IpAccessControlItem {
    /**
     * mongo表自增Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 动作
     */
    ActionType?: number;
    /**
     * ip
     */
    Ip?: string;
    /**
     * 备注
     */
    Note?: string;
    /**
     * 来源
     */
    Source?: string;
    /**
     * 更新时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsVersion?: number;
    /**
     * 有效截止时间戳
     */
    ValidTs?: number;
    /**
     * 生效状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValidStatus?: number;
}
/**
 * UpsertSession返回参数结构体
 */
export interface UpsertSessionResponse {
    /**
     * 结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 日志KeyValue对
 */
export interface AccessLogItem {
    /**
     * 日记Key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key: string;
    /**
     * 日志Value
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: string;
}
/**
 * DeleteHost返回参数结构体
 */
export interface DeleteHostResponse {
    /**
     * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
     */
    Success?: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteSession请求参数结构体
 */
export interface DeleteSessionRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * clb-waf 或者 sprta-waf
     */
    Edition?: string;
    /**
     * 要删除的SessionID
     */
    SessionID?: number;
}
/**
 * SearchAttackLog请求参数结构体
 */
export interface SearchAttackLogRequest {
    /**
     * 查询的域名，所有域名使用all
     */
    Domain: string;
    /**
     * 查询起始时间
     */
    StartTime: string;
    /**
     * 查询结束时间
     */
    EndTime: string;
    /**
     * 接口升级，这个字段传空字符串,翻页使用Page字段
     */
    Context: string;
    /**
     * Lucene语法
     */
    QueryString: string;
    /**
     * 查询的数量，默认10条，最多100条
     */
    Count?: number;
    /**
     * 默认为desc，可以取值desc和asc
     */
    Sort?: string;
    /**
     * 第几页，从0开始
     */
    Page?: number;
}
/**
 * AddCustomRule返回参数结构体
 */
export interface AddCustomRuleResponse {
    /**
     * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
     */
    Success?: ResponseCode;
    /**
     * 添加成功的规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFlowTrend返回参数结构体
 */
export interface DescribeFlowTrendResponse {
    /**
     * 流量趋势数据
     */
    Data: Array<BotStatPointItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpsertIpAccessControl请求参数结构体
 */
export interface UpsertIpAccessControlRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * ip 参数列表，json数组由ip，source，note，action，valid_ts组成。ip对应配置的ip地址，source固定为custom值，note为注释，action值42为黑名单，40为白名单，valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00））
     */
    Items: Array<string>;
    /**
     * 实例Id
     */
    InstanceId?: string;
    /**
     * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
     */
    Edition?: string;
    /**
     * 是否为多域名黑白名单，当为多域名的黑白名单时，取值为batch，否则为空
     */
    SourceType?: string;
}
/**
 * session定义
 */
export interface SessionItem {
    /**
     * 匹配类型
     */
    Category: string;
    /**
     * 起始模式
     */
    KeyOrStartMat: string;
    /**
     * 结束模式
     */
    EndMat: string;
    /**
     * 起始偏移
     */
    StartOffset: string;
    /**
     * 结束偏移
     */
    EndOffset: string;
    /**
     * 数据源
     */
    Source: string;
    /**
     * 更新时间戳
     */
    TsVersion: string;
}
/**
 * ModifyObject请求参数结构体
 */
export interface ModifyObjectRequest {
    /**
     * 修改对象标识
     */
    ObjectId: string;
    /**
     * 改动作类型:Status修改开关，InstanceId绑定实例
     */
    OpType: string;
    /**
     * 新的Waf开关状态，如果和已有状态相同认为修改成功
     */
    Status?: number;
    /**
     * 新的实例ID，如果和已绑定的实例相同认为修改成功
     */
    InstanceId?: string;
}
/**
 * DescribeAccessExports请求参数结构体
 */
export interface DescribeAccessExportsRequest {
    /**
     * 客户要查询的日志主题ID，每个客户都有对应的一个主题
     */
    TopicId: string;
    /**
     * 分页的偏移量，默认值为0
     */
    Offset?: number;
    /**
     * 分页单页限制数目，默认值为20，最大值100
     */
    Limit?: number;
}
/**
 * DescribeCustomWhiteRule请求参数结构体
 */
export interface DescribeCustomWhiteRuleRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 容量
     */
    Limit: number;
    /**
     * 过滤数组,name可以是如下的值： RuleID,RuleName,Match
     */
    Filters?: Array<FiltersItemNew>;
    /**
     * asc或者desc
     */
    Order?: string;
    /**
     * exp_ts或者mod_ts
     */
    By?: string;
}
/**
 * DeleteAntiFakeUrl返回参数结构体
 */
export interface DeleteAntiFakeUrlResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserLevel返回参数结构体
 */
export interface DescribeUserLevelResponse {
    /**
     * 300:正常 400:严格
     */
    Level: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCustomRuleList返回参数结构体
 */
export interface DescribeCustomRuleListResponse {
    /**
     * 规则详情
     */
    RuleList: Array<DescribeCustomRulesRspRuleListItem>;
    /**
     * 规则条数
     */
    TotalCount: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetInstanceQpsLimit请求参数结构体
 */
export interface GetInstanceQpsLimitRequest {
    /**
     * 套餐实例id
     */
    InstanceId: string;
    /**
     * 套餐类型
     */
    Type?: string;
}
/**
 * 参数包装
 */
export interface SessionData {
    /**
     * session定义
     */
    Res: Array<SessionItem>;
}
/**
 * ModifyUserLevel请求参数结构体
 */
export interface ModifyUserLevelRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 防护规则等级 300=standard，400=extended
     */
    Level: number;
}
/**
 * SwitchDomainRules返回参数结构体
 */
export interface SwitchDomainRulesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceQpsLimit请求参数结构体
 */
export interface ModifyInstanceQpsLimitRequest {
    /**
     * 套餐实例id
     */
    InstanceId: string;
    /**
     * qps上限
     */
    QpsLimit: number;
}
/**
 * FreshAntiFakeUrl返回参数结构体
 */
export interface FreshAntiFakeUrlResponse {
    /**
     * 结果成功与否
     */
    Result?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteSpartaProtection请求参数结构体
 */
export interface DeleteSpartaProtectionRequest {
    /**
     * 域名列表
     */
    Domains: Array<string>;
    /**
     * 实例类型
     */
    Edition?: string;
    /**
     * 实例id
     */
    InstanceID?: string;
}
/**
 * saas和clb信息
 */
export interface UserDomainInfo {
    /**
     * 用户id
     */
    Appid?: number;
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 域名id
     */
    DomainId?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * waf类型
     */
    Edition?: string;
    /**
     * 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Level?: string;
    /**
     * 指定域名访问日志字段的开关
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WriteConfig?: string;
    /**
     * 指定域名是否写cls的开关 1:写 0:不写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cls?: number;
    /**
     * 标记是否是混合云接入。hybrid表示混合云接入域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CloudType?: string;
}
/**
 * DescribeAntiFakeRules返回参数结构体
 */
export interface DescribeAntiFakeRulesResponse {
    /**
     * 返回值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<CacheUrlItems>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWafInfo请求参数结构体
 */
export interface DescribeWafInfoRequest {
    /**
     * CLB回调WAF接口（获取、删除）的参数
     */
    Params: Array<ClbHostsParams>;
}
/**
 * GetAttackTotalCount请求参数结构体
 */
export interface GetAttackTotalCountRequest {
    /**
     * 起始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 查询的域名，全部域名不指定
     */
    Domain: string;
    /**
     * 查询条件，默认为""
     */
    QueryString: string;
}
/**
 * DeleteDomainWhiteRules返回参数结构体
 */
export interface DeleteDomainWhiteRulesResponse {
    /**
     * 出参
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAttackOverview返回参数结构体
 */
export interface DescribeAttackOverviewResponse {
    /**
     * 访问请求总数
     */
    AccessCount?: number;
    /**
     * Web攻击总数
     */
    AttackCount?: number;
    /**
     * 访问控制总数
     */
    ACLCount?: number;
    /**
     * CC攻击总数
     */
    CCCount?: number;
    /**
     * Bot攻击总数
     */
    BotCount?: number;
    /**
     * api资产总数
     */
    ApiAssetsCount?: number;
    /**
     * api风险事件数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApiRiskEventCount?: number;
    /**
     * 黑名单总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IPBlackCount?: number;
    /**
     * 防篡改总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TamperCount?: number;
    /**
     * 信息泄露总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LeakCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 防篡改url元素
 */
export interface CacheUrlItem {
    /**
     * Id
     */
    Id: string;
    /**
     * 名称
     */
    Name: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * uri
     */
    Uri: string;
    /**
     * 协议
     */
    Protocol: string;
    /**
     * 状态
     */
    Status: string;
}
/**
 * AddCustomWhiteRule请求参数结构体
 */
export interface AddCustomWhiteRuleRequest {
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 优先级
     */
    SortId: string;
    /**
     * 过期时间
     */
    ExpireTime: string;
    /**
     * 策略详情
     */
    Strategies: Array<Strategy>;
    /**
     * 需要添加策略的域名
     */
    Domain: string;
    /**
     * 放行的详情
     */
    Bypass: string;
}
/**
 * DescribeDomainDetailsClb请求参数结构体
 */
export interface DescribeDomainDetailsClbRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名id
     */
    DomainId: string;
    /**
     * 实例id
     */
    InstanceId: string;
}
/**
 * clb-waf 域名扩展套餐
 */
export interface DomainPackageNew {
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceIds: string;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValidTime: string;
    /**
     * 是否自动续费，1：自动续费，0：不自动续费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag: number;
    /**
     * 套餐购买个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count: number;
    /**
     * 套餐购买地域，clb-waf暂时没有用到
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: string;
}
/**
 * ModifyDomainsCLSStatus返回参数结构体
 */
export interface ModifyDomainsCLSStatusResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBotStatus返回参数结构体
 */
export interface ModifyBotStatusResponse {
    /**
     * 正常情况为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCustomRuleStatus返回参数结构体
 */
export interface ModifyCustomRuleStatusResponse {
    /**
     * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
     */
    Success?: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 防护域名端口配置信息
 */
export interface PortItem {
    /**
     * 监听端口配置
     */
    Port: string;
    /**
     * 与Port一一对应，表示端口对应的协议
     */
    Protocol: string;
    /**
     * 与Port一一对应,  表示回源端口
     */
    UpstreamPort: string;
    /**
     * 与Port一一对应,  表示回源协议
     */
    UpstreamProtocol: string;
    /**
     * Nginx的服务器ID
     */
    NginxServerId: string;
}
/**
 * ModifyHostStatus返回参数结构体
 */
export interface ModifyHostStatusResponse {
    /**
     * 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码）
     */
    Success?: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCustomRuleStatus请求参数结构体
 */
export interface ModifyCustomRuleStatusRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 规则ID
     */
    RuleId: number;
    /**
     * 开关的状态，1是开启、0是关闭
     */
    Status: number;
    /**
     * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
     */
    Edition?: string;
}
/**
 * 用于接口DescribeAccessHistogram 的出参
 */
export interface AccessHistogramItem {
    /**
     * 时间，单位ms
     */
    BTime?: number;
    /**
     * 日志条数
     */
    Count?: number;
}
/**
 * ModifySpartaProtectionMode请求参数结构体
 */
export interface ModifySpartaProtectionModeRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 防护状态：
  10：规则观察&&AI关闭模式，11：规则观察&&AI观察模式，12：规则观察&&AI拦截模式
  20：规则拦截&&AI关闭模式，21：规则拦截&&AI观察模式，22：规则拦截&&AI拦截模式
     */
    Mode: number;
    /**
     * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
     */
    Edition?: string;
    /**
     * 0是修改规则引擎状态，1是修改AI的状态
     */
    Type?: number;
}
/**
 * DescribeAttackOverview请求参数结构体
 */
export interface DescribeAttackOverviewRequest {
    /**
     * 查询开始时间
     */
    FromTime: string;
    /**
     * 查询结束时间
     */
    ToTime: string;
    /**
     * 客户的Appid
     */
    Appid?: number;
    /**
     * 被查询的域名
     */
    Domain?: string;
    /**
     * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
     */
    Edition?: string;
    /**
     * WAF实例ID，不传则不过滤
     */
    InstanceID?: string;
}
/**
 * DescribeUserLevel请求参数结构体
 */
export interface DescribeUserLevelRequest {
    /**
     * 域名
     */
    Domain: string;
}
/**
 * 一个实例的详细信息
 */
export interface InstanceInfo {
    /**
     * id
     */
    InstanceId: string;
    /**
     * Name
     */
    InstanceName: string;
    /**
     * 资源id
     */
    ResourceIds: string;
    /**
     * 地域
     */
    Region: string;
    /**
     * 付费模式
     */
    PayMode: number;
    /**
     * 自动续费
     */
    RenewFlag: number;
    /**
     * 弹性计费
     */
    Mode: number;
    /**
     * 套餐版本
     */
    Level: number;
    /**
     * 过期时间
     */
    ValidTime: string;
    /**
     * 开始时间
     */
    BeginTime: string;
    /**
     * 已用
     */
    DomainCount: number;
    /**
     * 上限
     */
    SubDomainLimit: number;
    /**
     * 已用
     */
    MainDomainCount: number;
    /**
     * 上限
     */
    MainDomainLimit: number;
    /**
     * 峰值
     */
    MaxQPS: number;
    /**
     * qps套餐
     */
    QPS: QPSPackageNew;
    /**
     * 域名套餐
     */
    DomainPkg: DomainPackageNew;
    /**
     * 用户appid
     */
    AppId: number;
    /**
     * clb或saas
     */
    Edition: string;
    /**
     * 业务安全包
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FraudPkg?: FraudPkg;
    /**
     * Bot资源包
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotPkg?: BotPkg;
    /**
     * bot的qps详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotQPS?: BotQPS;
    /**
     * qps弹性计费上限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ElasticBilling?: number;
    /**
     * 攻击日志投递开关
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttackLogPost?: number;
    /**
     * 带宽峰值，单位为B/s(字节每秒)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxBandwidth?: number;
    /**
     * api安全是否购买
     */
    APISecurity?: number;
    /**
     * 购买的qps规格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QpsStandard?: number;
    /**
     * 购买的带宽规格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BandwidthStandard?: number;
    /**
     * 实例状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 实例沙箱值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SandboxQps?: number;
    /**
     * 是否api 安全试用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAPISecurityTrial?: number;
    /**
     * 重保包
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MajorEventsPkg?: MajorEventsPkg;
    /**
     * 混合云子节点包
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HybridPkg?: HybridPkg;
}
/**
 * CLB回调WAF接口（获取、删除）的参数
 */
export interface ClbHostsParams {
    /**
     * 负载均衡实例ID，如果不传次参数则默认认为操作的是整个AppId的监听器，如果此参数不为空则认为操作的是对应负载均衡实例。
     */
    LoadBalancerId: string;
    /**
     * 负载均衡监听器ID，，如果不传次参数则默认认为操作的是整个负载均衡实例，如果此参数不为空则认为操作的是对应负载均衡监听器。
     */
    ListenerId?: string;
    /**
     * WAF实例ID，，如果不传次参数则默认认为操作的是整个负载均衡监听器实例，如果此参数不为空则认为操作的是对应负载均衡监听器的某一个具体的域名。
     */
    DomainId?: string;
}
/**
 * 设置WAF状态的结构体
 */
export interface HostStatus {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ID
     */
    DomainId: string;
    /**
     * WAF的开关，1：开，0：关
     */
    Status: number;
    /**
     * 实例ID
     */
    InstanceID?: string;
}
/**
 * ModifyAntiFakeUrl返回参数结构体
 */
export interface ModifyAntiFakeUrlResponse {
    /**
     * 结果
     */
    Result?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBatchIpAccessControl请求参数结构体
 */
export interface DescribeBatchIpAccessControlRequest {
    /**
     * 筛选条件，支持 ActionType 40/42，Ip：ip地址，Domain：域名三类
     */
    Filters: Array<FiltersItemNew>;
    /**
     * 偏移
     */
    OffSet?: number;
    /**
     * 限制
     */
    Limit?: number;
    /**
     * 排序参数
     */
    Sort?: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 容量
     */
    Limit: number;
    /**
     * 过滤数组
     */
    Filters?: Array<FiltersItemNew>;
}
/**
 * ModifyAntiInfoLeakRules请求参数结构体
 */
export interface ModifyAntiInfoLeakRulesRequest {
    /**
     * 规则ID
     */
    RuleId: number;
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * Action 值
     */
    ActionType: number;
    /**
     * 策略数组
     */
    Strategies: Array<StrategyForAntiInfoLeak>;
}
/**
 * 单条日志数据描述
 */
export interface AccessLogInfo {
    /**
     * 日志时间，单位ms
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time: number;
    /**
     * 日志主题ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId: string;
    /**
     * 日志主题名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName: string;
    /**
     * 日志来源IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Source: string;
    /**
     * 日志文件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileName: string;
    /**
     * 日志上报请求包的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgId: string;
    /**
     * 请求包内日志的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgLogId: string;
    /**
     * 日志内容的Json序列化字符串
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogJson: string;
}
/**
 * DescribeBatchIpAccessControl返回参数结构体
 */
export interface DescribeBatchIpAccessControlResponse {
    /**
     * 输出
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: BatchIpAccessControlData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDomainDetailsSaas返回参数结构体
 */
export interface DescribeDomainDetailsSaasResponse {
    /**
     * 域名详情
     */
    DomainsPartInfo?: DomainsPartInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyApiAnalyzeStatus请求参数结构体
 */
export interface ModifyApiAnalyzeStatusRequest {
    /**
     * 开关状态
     */
    Status: number;
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 需要批量开启的实体列表
     */
    TargetList?: Array<TargetEntity>;
}
/**
 * ModifyAntiInfoLeakRuleStatus返回参数结构体
 */
export interface ModifyAntiInfoLeakRuleStatusResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAreaBanStatus返回参数结构体
 */
export interface ModifyAreaBanStatusResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWafAutoDenyRules请求参数结构体
 */
export interface ModifyWafAutoDenyRulesRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 触发IP封禁的攻击次数阈值，范围为2~100次
     */
    AttackThreshold: number;
    /**
     * IP封禁统计时间，范围为1-60分钟
     */
    TimeThreshold: number;
    /**
     * 触发IP封禁后的封禁时间，范围为5~360分钟
     */
    DenyTimeThreshold: number;
    /**
     * 自动封禁状态，0表示关闭，1表示打开
     */
    DefenseStatus: number;
}
/**
 * DescribeAccessFastAnalysis返回参数结构体
 */
export interface DescribeAccessFastAnalysisResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDomainIpv6Status返回参数结构体
 */
export interface ModifyDomainIpv6StatusResponse {
    /**
     * 返回的状态 （0: 操作失败 1:操作成功 2:企业版以上不支持 3:企业版以下不支持 ）
     */
    Ipv6Status?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeHostLimit返回参数结构体
 */
export interface DescribeHostLimitResponse {
    /**
     * 成功返回的状态码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Success?: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAntiFakeUrl请求参数结构体
 */
export interface DeleteAntiFakeUrlRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * Id
     */
    Id: number;
}
/**
 * DescribeSpartaProtectionInfo请求参数结构体
 */
export interface DescribeSpartaProtectionInfoRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 版本
     */
    Edition?: string;
    /**
     * 实例
     */
    InstanceID?: string;
}
/**
 * 防篡改url元素
 */
export interface CacheUrlItems {
    /**
     * 标识
     */
    Id: number;
    /**
     * 名字
     */
    Name: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 网址
     */
    Uri: string;
    /**
     * 协议
     */
    Protocol: string;
    /**
     * 状态
     */
    Status: number;
}
/**
 * ModifyWebshellStatus返回参数结构体
 */
export interface ModifyWebshellStatusResponse {
    /**
     * 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码）
     */
    Success?: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GenerateDealsAndPayNew返回参数结构体
 */
export interface GenerateDealsAndPayNewResponse {
    /**
     * 计费下单响应结构体
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DealData;
    /**
     * 1:成功，0:失败
     */
    Status?: number;
    /**
     * 返回message
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReturnMessage?: string;
    /**
     * 购买的实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCRule请求参数结构体
 */
export interface DescribeCCRuleRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 页码
     */
    Offset: number;
    /**
     * 页的数目
     */
    Limit: number;
    /**
     * 排序参数
     */
    Sort?: string;
    /**
     * clb-waf 或者 sparta-waf
     */
    Edition?: string;
    /**
     * 过滤条件
     */
    Name?: string;
}
/**
 * DescribeCCRuleList返回参数结构体
 */
export interface DescribeCCRuleListResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAttackDownloadRecords返回参数结构体
 */
export interface GetAttackDownloadRecordsResponse {
    /**
     * 下载攻击日志记录数组
     */
    Records: Array<DownloadAttackRecordInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Vip信息
 */
export interface VipInfo {
    /**
     * Virtual IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vip?: string;
    /**
     * waf实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
}
/**
 * DescribeAccessHistogram返回参数结构体
 */
export interface DescribeAccessHistogramResponse {
    /**
     * 柱状图间隔时间差，单位ms
     */
    Interval?: number;
    /**
     * 满足条件的日志条数
     */
    TotalCount?: number;
    /**
     * 注意：此字段可能返回 null，表示取不到有效值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HistogramInfos?: Array<AccessHistogramItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTopAttackDomain返回参数结构体
 */
export interface DescribeTopAttackDomainResponse {
    /**
     * CC攻击域名列表
     */
    CC: Array<KVInt>;
    /**
     * Web攻击域名列表
     */
    Web: Array<KVInt>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpsertIpAccessControl返回参数结构体
 */
export interface UpsertIpAccessControlResponse {
    /**
     * 添加或修改失败的条目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedItems?: string;
    /**
     * 添加或修改失败的数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAccessHistogram请求参数结构体
 */
export interface DescribeAccessHistogramRequest {
    /**
     * 老版本查询的日志主题ID，新版本传空字符串即可
     */
    TopicId: string;
    /**
     * 要查询的日志的起始时间，Unix时间戳，单位ms
     */
    From: number;
    /**
     * 要查询的日志的结束时间，Unix时间戳，单位ms
     */
    To: number;
    /**
     * 查询语句，语句长度最大为4096
     */
    Query: string;
    /**
     * 柱状图间隔时间差，单位ms
     */
    Interval?: number;
}
/**
 * DescribeWafThreatenIntelligence请求参数结构体
 */
export declare type DescribeWafThreatenIntelligenceRequest = null;
/**
 * DescribeAccessExports返回参数结构体
 */
export interface DescribeAccessExportsResponse {
    /**
     * 日志导出ID。
     */
    TotalCount: number;
    /**
     * 日志导出列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Exports: Array<ExportAccessInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCustomRule返回参数结构体
 */
export interface DeleteCustomRuleResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeHistogram请求参数结构体
 */
export interface DescribeHistogramRequest {
    /**
     * 起始时间
     */
    FromTime: string;
    /**
     * 结束时间
     */
    ToTime: string;
    /**
     * 聚类字段，ip为ip聚合，art为响应耗时聚合，url为url聚合，local为ip转化的城市聚合
     */
    QueryField: string;
    /**
     * 条件，access为访问日志，attack为攻击日志
     */
    Source: string;
    /**
     * 兼容Host，逐步淘汰Host字段
     */
    Host?: string;
    /**
     * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
     */
    Edition?: string;
    /**
     * WAF实例ID，不传则不过滤
     */
    InstanceID?: string;
    /**
     * 域名过滤，不传则不过滤，用于替代Host字段，逐步淘汰Host
     */
    Domain?: string;
}
/**
 * DeleteCCRule返回参数结构体
 */
export interface DeleteCCRuleResponse {
    /**
     * 一般为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 操作的规则Id
     */
    RuleId?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpsertCCRule请求参数结构体
 */
export interface UpsertCCRuleRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 名称
     */
    Name: string;
    /**
     * 状态
     */
    Status: number;
    /**
     * 高级模式
     */
    Advance: string;
    /**
     * CC检测阈值
     */
    Limit: string;
    /**
     * CC检测周期
     */
    Interval: string;
    /**
     * 检测Url
     */
    Url: string;
    /**
     * 匹配方法
     */
    MatchFunc: number;
    /**
     * 动作
     */
    ActionType: string;
    /**
     * 优先级
     */
    Priority: number;
    /**
     * 动作有效时间
     */
    ValidTime: number;
    /**
     * 附加参数
     */
    OptionsArr?: string;
    /**
     * waf版本
     */
    Edition?: string;
    /**
     * 操作类型
     */
    Type?: number;
    /**
     * 添加规则的来源事件id
     */
    EventId?: string;
    /**
     * 规则需要启用的SessionID
     */
    SessionApplied?: Array<number | bigint>;
    /**
     * 规则ID，新增时填0
     */
    RuleId?: number;
}
/**
 * ModifyAntiInfoLeakRuleStatus请求参数结构体
 */
export interface ModifyAntiInfoLeakRuleStatusRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 规则
     */
    RuleId: number;
    /**
     * 状态
     */
    Status: number;
}
/**
 * ModifyProtectionStatus返回参数结构体
 */
export interface ModifyProtectionStatusResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDomains请求参数结构体
 */
export interface DescribeDomainsRequest {
    /**
     * 分页偏移量，取Limit整数倍。最小值为0，最大值= Total/Limit向上取整
     */
    Offset: number;
    /**
     * 返回域名的数量
     */
    Limit: number;
    /**
     * 过滤数组
     */
    Filters?: Array<FiltersItemNew>;
}
/**
 * Bot资源信息
 */
export interface BotPkg {
    /**
     * 资源id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceIds?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: number;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime?: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
    /**
     * 申请数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InquireNum?: number;
    /**
     * 使用数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedNum?: number;
    /**
     * 子产品code
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 续费标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: number;
    /**
     * 购买页bot6折
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotCPWaf?: number;
    /**
     * 控制台买bot5折
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotNPWaf?: number;
}
/**
 * SearchAttackLog返回参数结构体
 */
export interface SearchAttackLogResponse {
    /**
     * 当前返回的攻击日志条数
     */
    Count?: number;
    /**
     * 接口升级，此字段无效，默认返回空字符串
     */
    Context?: string;
    /**
     * 攻击日志数组条目内容
     */
    Data?: Array<AttackLogInfo>;
    /**
     * CLS接口返回内容
     */
    ListOver?: boolean;
    /**
     * CLS接口返回内容，标志是否启动新版本索引
     */
    SqlFlag?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RefreshAccessCheckResult请求参数结构体
 */
export interface RefreshAccessCheckResultRequest {
    /**
     * 域名
     */
    Domain: string;
}
/**
 * 封装参数
 */
export interface IpHitItemsData {
    /**
     * 数组封装
     */
    Res: Array<IpHitItem>;
    /**
     * 总数目
     */
    TotalCount: number;
}
/**
 * 域名的webshell开启状态
 */
export interface WebshellStatus {
    /**
     * 域名
     */
    Domain: string;
    /**
     * webshell开关，1：开。0：关。2：观察
     */
    Status: number;
}
/**
 * DescribeSpartaProtectionInfo返回参数结构体
 */
export interface DescribeSpartaProtectionInfoResponse {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ID
     */
    DomainId: string;
    /**
     * cname取值
     */
    Cname: string;
    /**
     * 状态
     */
    Status: string;
    /**
     * 源IP地址列表
     */
    SrcList: Array<string>;
    /**
     * 证书类型
     */
    CertType: string;
    /**
     * 证书
     */
    Cert: string;
    /**
     * 私有密钥
     */
    PrivateKey: string;
    /**
     * ssl的id
     */
    Sslid: string;
    /**
     * 是否是cdn
     */
    IsCdn: string;
    /**
     * 灰度区域列表
     */
    GrayAreas: Array<string>;
    /**
     * 引擎
     */
    Engine: string;
    /**
     * HTTPS重写
     */
    HttpsRewrite: string;
    /**
     * upstreamType取值
     */
    UpstreamType: string;
    /**
     * upstreamDomain取值
     */
    UpstreamDomain: string;
    /**
     * upstreamScheme取值
     */
    UpstreamScheme: string;
    /**
     * 是否是HTTP2
     */
    IsHttp2: string;
    /**
     * 是否含有websocket
     */
    IsWebsocket: string;
    /**
     * loadBalance信息
     */
    LoadBalance: string;
    /**
     * httpsUpstreamPort取值
     */
    HttpsUpstreamPort: string;
    /**
     * port信息
     */
    Ports: Array<PortItem>;
    /**
     * 是否灰度
     */
    IsGray: string;
    /**
     * 模式
     */
    Mode: string;
    /**
     * 防御等级,100,200,300
     */
    Level: string;
    /**
     * 与源站是否保持长连接
     */
    IsKeepAlive: string;
    /**
     * 0：BGP 1：Anycast
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Anycast: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyModuleStatus请求参数结构体
 */
export declare type ModifyModuleStatusRequest = null;
/**
 * 日志KeyValue对数组，用于搜索访问日志
 */
export interface AccessLogItems {
    /**
     * 分析结果返回的KV数据对
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<AccessLogItem>;
}
/**
 * ModifyInstanceName请求参数结构体
 */
export interface ModifyInstanceNameRequest {
    /**
     * 新名称
     */
    InstanceName: string;
    /**
     * 实例id
     */
    InstanceID: string;
    /**
     * 版本
     */
    Edition: string;
}
/**
 * DescribePorts返回参数结构体
 */
export interface DescribePortsResponse {
    /**
     * http端口列表
     */
    HttpPorts?: Array<string>;
    /**
     * https端口列表
     */
    HttpsPorts?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCustomRule请求参数结构体
 */
export interface ModifyCustomRuleRequest {
    /**
     * 编辑的域名
     */
    Domain: string;
    /**
     * 编辑的规则ID
     */
    RuleId: number;
    /**
     * 编辑的规则名称
     */
    RuleName: string;
    /**
     * 执行动作，0：放行、1：阻断、2：人机识别、3：观察、4：重定向
     */
    RuleAction: string;
    /**
     * 匹配条件数组
     */
    Strategies: Array<Strategy>;
    /**
     * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
     */
    Edition?: string;
    /**
     * 动作为重定向的时候重定向URL，默认为"/"
     */
    Redirect?: string;
    /**
     * 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果多个勾选那么以,串接。
  默认是"geoip,cc,owasp,ai,antileakage"
     */
    Bypass?: string;
    /**
     * 优先级，1~100的整数，数字越小，代表这条规则的执行优先级越高。
  默认是100
     */
    SortId?: number;
    /**
     * 规则生效截止时间，0：永久生效，其它值为对应时间的时间戳。
  默认是0
     */
    ExpireTime?: number;
}
/**
 * ModifyDomainWhiteRule请求参数结构体
 */
export interface ModifyDomainWhiteRuleRequest {
    /**
     * 需要更改的规则的域名
     */
    Domain?: string;
    /**
     * 白名单id
     */
    Id?: number;
    /**
     * 规则的id列表
     */
    Rules?: Array<number | bigint>;
    /**
     * 规则匹配路径
     */
    Url?: string;
    /**
     * 规则匹配方法
     */
    Function?: string;
    /**
     * 规则的开关状态，0表示关闭开关，1表示打开开关
     */
    Status?: number;
}
/**
 * DescribePeakPoints请求参数结构体
 */
export interface DescribePeakPointsRequest {
    /**
     * 查询起始时间
     */
    FromTime: string;
    /**
     * 查询终止时间
     */
    ToTime: string;
    /**
     * 查询的域名，如果查询所有域名数据，该参数不填写
     */
    Domain?: string;
    /**
     * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
     */
    Edition?: string;
    /**
     * WAF实例ID，不传则不过滤
     */
    InstanceID?: string;
    /**
     * 十一个值可选：
  access-峰值qps趋势图
  botAccess- bot峰值qps趋势图
  down-下行峰值带宽趋势图
  up-上行峰值带宽趋势图
  attack-Web攻击总数趋势图
  cc-CC攻击总数趋势图
  bw-黑IP攻击总数趋势图
  tamper-防篡改攻击总数趋势图
  leak-防泄露攻击总数趋势图
  acl-访问控制攻击总数趋势图
  http_status-状态码各次数趋势图
     */
    MetricName?: string;
}
/**
 * ModifyHostFlowMode返回参数结构体
 */
export interface ModifyHostFlowModeResponse {
    /**
     * 成功的状态码
     */
    Success: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAntiInfoLeakRules返回的规则元素中的具体的规则元素
 */
export interface DescribeAntiInfoLeakRulesStrategyItem {
    /**
     * 字段
     */
    Field: string;
    /**
     * 条件
     */
    CompareFunc: string;
    /**
     * 内容
     */
    Content: string;
}
/**
 * bot的趋势图对象
 */
export interface BotStatPointItem {
    /**
     * 横坐标
     */
    TimeStamp: string;
    /**
     * value的所属对象
     */
    Key: string;
    /**
     * 纵列表
     */
    Value: number;
    /**
     * Key对应的页面展示内容
     */
    Label: string;
}
/**
 * DescribeCiphersDetail请求参数结构体
 */
export declare type DescribeCiphersDetailRequest = null;
/**
 * ModifyDomainIpv6Status请求参数结构体
 */
export interface ModifyDomainIpv6StatusRequest {
    /**
     * 需要修改的域名所属的实例ID
     */
    InstanceId: string;
    /**
     * 需要修改的域名
     */
    Domain: string;
    /**
     * 需要修改的域名ID
     */
    DomainId: string;
    /**
     * 修改域名的Ipv6开关为Status （1:开启 2:关闭）
     */
    Status: number;
}
/**
 * DescribeAntiInfoLeakageRules返回参数结构体
 */
export interface DescribeAntiInfoLeakageRulesResponse {
    /**
     * 记录条数
     */
    Total: number;
    /**
     * 规则列表
     */
    RuleList: Array<DescribeAntiLeakageItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAttackHistogram请求参数结构体
 */
export interface GetAttackHistogramRequest {
    /**
     * 查询的域名，所有域名使用all
     */
    Domain: string;
    /**
     * 查询起始时间
     */
    StartTime: string;
    /**
     * 查询结束时间
     */
    EndTime: string;
    /**
     * Lucene语法
     */
    QueryString: string;
}
/**
 * 规则白名单
 */
export interface RuleList {
    /**
     * 规则Id
     */
    Id: number;
    /**
     * 规则列表的id
     */
    Rules: Array<number | bigint>;
    /**
     * 请求url
     */
    Url: string;
    /**
     * 请求的方法
     */
    Function: string;
    /**
     * 时间戳
     */
    Time: string;
    /**
     * 开关状态
     */
    Status: number;
}
/**
 * DescribeAttackType请求参数结构体
 */
export interface DescribeAttackTypeRequest {
    /**
     * 起始时间
     */
    FromTime: string;
    /**
     * 结束时间
     */
    ToTime: string;
    /**
     * 兼容Host，逐步淘汰Host字段
     */
    Host?: string;
    /**
     * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
     */
    Edition?: string;
    /**
     * WAF实例ID，不传则不过滤
     */
    InstanceID?: string;
    /**
     * 域名过滤，不传则不过滤，用于替代Host字段，逐步淘汰Host
     */
    Domain?: string;
}
/**
 * ModifyCustomWhiteRule请求参数结构体
 */
export interface ModifyCustomWhiteRuleRequest {
    /**
     * 编辑的域名
     */
    Domain: string;
    /**
     * 编辑的规则ID
     */
    RuleId: number;
    /**
     * 编辑的规则名称
     */
    RuleName: string;
    /**
     * 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果勾选多个，则以“，”串接。
     */
    Bypass: string;
    /**
     * 优先级，1~100的整数，数字越小，代表这条规则的执行优先级越高。
     */
    SortId: number;
    /**
     * 规则生效截止时间，0：永久生效，其它值为对应时间的时间戳。
     */
    ExpireTime: number;
    /**
     * 匹配条件数组
     */
    Strategies: Array<Strategy>;
}
/**
 * DeleteCustomWhiteRule请求参数结构体
 */
export interface DeleteCustomWhiteRuleRequest {
    /**
     * 删除的域名
     */
    Domain: string;
    /**
     * 删除的规则ID
     */
    RuleId: number;
}
/**
 * ModifyInstanceRenewFlag返回参数结构体
 */
export interface ModifyInstanceRenewFlagResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddAttackWhiteRule返回参数结构体
 */
export interface AddAttackWhiteRuleResponse {
    /**
     * 规则总数
     */
    RuleId: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CLB查询对应绑定的WAF状态的结果参数
 */
export interface ClbHostResult {
    /**
     * WAF绑定的监听器实例
     */
    LoadBalancer: LoadBalancer;
    /**
     * WAF绑定的域名
     */
    Domain: string;
    /**
     * WAF绑定的实例ID
     */
    DomainId: string;
    /**
     * 是否有绑定WAF，1：绑定了WAF，0：没有绑定WAF
     */
    Status: number;
    /**
     * 绑定了WAF的情况下，WAF流量模式，1：清洗模式，0：镜像模式（默认）
     */
    FlowMode: number;
}
/**
 * clb-waf QPS套餐 New
 */
export interface QPSPackageNew {
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceIds: string;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValidTime: string;
    /**
     * 是否自动续费，1：自动续费，0：不自动续费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag: number;
    /**
     * 套餐购买个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count: number;
    /**
     * 套餐购买地域，clb-waf暂时没有用到
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: string;
    /**
     * 计费项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillingItem?: string;
}
/**
 * saas域名详情
 */
export interface DomainsPartInfo {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 域名id
     */
    DomainId?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 类型
     */
    Edition?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * 证书
     */
    Cert?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * AI防御模式
     */
    Engine?: number;
    /**
     * 是否开启httpRewrite
     */
    HttpsRewrite?: number;
    /**
     * https回源端口
     */
    HttpsUpstreamPort?: string;
    /**
     * 是否是cdn
     */
    IsCdn?: number;
    /**
     * 是否开启gray
     */
    IsGray?: number;
    /**
     * 是否是http2
     */
    IsHttp2?: number;
    /**
     * 是否开启websocket
     */
    IsWebsocket?: number;
    /**
     * 负载均衡
     */
    LoadBalance?: number;
    /**
     * 防御模式
     */
    Mode?: number;
    /**
     * 私钥
     */
    PrivateKey?: string;
    /**
     * ssl id
     */
    SSLId?: string;
    /**
     * 回源域名
     */
    UpstreamDomain?: string;
    /**
     * 回源类型
     */
    UpstreamType?: number;
    /**
     * 回源ip
     */
    SrcList?: Array<string>;
    /**
     * 服务端口配置
     */
    Ports?: Array<PortInfo>;
    /**
     * 证书类型
     */
    CertType?: number;
    /**
     * 回源方式
     */
    UpstreamScheme?: string;
    /**
     * 日志包
     */
    Cls?: number;
    /**
     * 一级cname
     */
    Cname?: string;
    /**
     * 是否长连接
     */
    IsKeepAlive?: number;
    /**
     * 是否开启主动健康检测，1表示开启，0表示不开启
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActiveCheck?: number;
    /**
     * TLS版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TLSVersion?: number;
    /**
     * 加密套件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ciphers?: Array<number | bigint>;
    /**
     * 模板
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CipherTemplate?: number;
    /**
     * 300s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProxyReadTimeout?: number;
    /**
     * 300s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProxySendTimeout?: number;
    /**
     * 0:关闭SNI；1:开启SNI，SNI=源请求host；2:开启SNI，SNI=修改为源站host；3：开启SNI，自定义host，SNI=SniHost；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SniType?: number;
    /**
     * SniType=3时，需要填此参数，表示自定义的host；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SniHost?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Weights?: Array<string>;
    /**
     * IsCdn=3时，表示自定义header
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpHeaders?: Array<string>;
    /**
     * 0:关闭xff重置；1:开启xff重置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    XFFReset?: number;
}
/**
 * DescribeAutoDenyIP请求参数结构体
 */
export interface DescribeAutoDenyIPRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 查询IP自动封禁状态
     */
    Ip?: string;
    /**
     * 计数标识
     */
    Count?: number;
    /**
     * 类别
     */
    Category?: string;
    /**
     * 有效时间最小时间戳
     */
    VtsMin?: number;
    /**
     * 有效时间最大时间戳
     */
    VtsMax?: number;
    /**
     * 创建时间最小时间戳
     */
    CtsMin?: number;
    /**
     * 创建时间最大时间戳
     */
    CtsMax?: number;
    /**
     * 偏移量
     */
    Skip?: number;
    /**
     * 限制条数
     */
    Limit?: number;
    /**
     * 策略名字
     */
    Name?: string;
    /**
     * 排序参数
     */
    Sort?: string;
}
/**
 * AddSpartaProtection请求参数结构体
 */
export interface AddSpartaProtectionRequest {
    /**
     * 需要防护的域名
     */
    Domain: string;
    /**
     * 证书类型。
  0：仅配置HTTP监听端口，没有证书
  1：证书来源为自有证书
  2：证书来源为托管证书
     */
    CertType: number;
    /**
     * waf前是否部署有七层代理服务。
  0：没有部署代理服务
  1：有部署代理服务，waf将使用XFF获取客户端IP
  2：有部署代理服务，waf将使用remote_addr获取客户端IP
  3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP
     */
    IsCdn: number;
    /**
     * 回源类型。
  0：通过IP回源
  1：通过域名回源
     */
    UpstreamType: number;
    /**
     * 是否开启WebSocket支持。
  0：关闭
  1：开启
     */
    IsWebsocket: number;
    /**
     * 回源负载均衡策略。
  0：轮询
  1：IP hash
  2：加权轮询
     */
    LoadBalance: string;
    /**
     * CertType为1时，需要填充此参数，表示自有证书的证书链
     */
    Cert?: string;
    /**
     * CertType为1时，需要填充此参数，表示自有证书的私钥
     */
    PrivateKey?: string;
    /**
     * CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id
     */
    SSLId?: string;
    /**
     * 待废弃，可不填。Waf的资源ID。
     */
    ResourceId?: string;
    /**
     * IsCdn为3时，需要填此参数，表示自定义header
     */
    IpHeaders?: Array<string>;
    /**
     * 服务配置有HTTPS端口时，HTTPS的回源协议。
  http：使用http协议回源，和HttpsUpstreamPort配合使用
  https：使用https协议回源
     */
    UpstreamScheme?: string;
    /**
     * HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段
     */
    HttpsUpstreamPort?: string;
    /**
     * 待废弃，可不填。是否开启灰度，0表示不开启灰度。
     */
    IsGray?: number;
    /**
     * 待废弃，可不填。灰度的地区
     */
    GrayAreas?: Array<string>;
    /**
     * 是否开启HTTP强制跳转到HTTPS。
  0：不强制跳转
  1：开启强制跳转
     */
    HttpsRewrite?: number;
    /**
     * 域名回源时的回源域名。UpstreamType为1时，需要填充此字段
     */
    UpstreamDomain?: string;
    /**
     * IP回源时的回源IP列表。UpstreamType为0时，需要填充此字段
     */
    SrcList?: Array<string>;
    /**
     * 是否开启HTTP2，需要开启HTTPS协议支持。
  0：关闭
  1：开启
     */
    IsHttp2?: number;
    /**
     * 服务端口列表配置。
  NginxServerId：新增域名时填'0'
  Port：监听端口号
  Protocol：端口协议
  UpstreamPort：与Port相同
  UpstreamProtocol：与Protocol相同
     */
    Ports?: Array<PortItem>;
    /**
     * 待废弃，可不填。WAF实例类型。
  sparta-waf：SAAS型WAF
  clb-waf：负载均衡型WAF
  cdn-waf：CDN上的Web防护能力
     */
    Edition?: string;
    /**
     * 是否开启长连接。
  0： 短连接
  1： 长连接
     */
    IsKeepAlive?: string;
    /**
     * 域名所属实例id
     */
    InstanceID?: string;
    /**
     * 待废弃，目前填0即可。anycast IP类型开关： 0 普通IP 1 Anycast IP
     */
    Anycast?: number;
    /**
     * 回源IP列表各IP的权重，和SrcList一一对应。当且仅当UpstreamType为0，并且SrcList有多个IP，并且LoadBalance为2时需要填写，否则填 []
     */
    Weights?: Array<number | bigint>;
    /**
     * 是否开启主动健康检测。
  0：不开启
  1：开启
     */
    ActiveCheck?: number;
    /**
     * TLS版本信息
     */
    TLSVersion?: number;
    /**
     * 加密套件模板。
  0：不支持选择，使用默认模版
  1：通用型模版
  2：安全型模版
  3：自定义模版
     */
    CipherTemplate?: number;
    /**
     * 自定义的加密套件列表。CipherTemplate为3时需要填此字段，表示自定义的加密套件，值通过DescribeCiphersDetail接口获取。
     */
    Ciphers?: Array<number | bigint>;
    /**
     * WAF与源站的读超时时间，默认300s。
     */
    ProxyReadTimeout?: number;
    /**
     * WAF与源站的写超时时间，默认300s。
     */
    ProxySendTimeout?: number;
    /**
     * WAF回源时的SNI类型。
  0：关闭SNI，不配置client_hello中的server_name
  1：开启SNI，client_hello中的server_name为防护域名
  2：开启SNI，SNI为域名回源时的源站域名
  3：开启SNI，SNI为自定义域名
     */
    SniType?: number;
    /**
     * SniType为3时，需要填此参数，表示自定义的SNI；
     */
    SniHost?: string;
    /**
     * 是否开启XFF重置。
  0：关闭
  1：开启
     */
    XFFReset?: number;
}
/**
 * ModifyModuleStatus返回参数结构体
 */
export interface ModifyModuleStatusResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 攻击日志详情
 */
export interface AttackLogInfo {
    /**
     * 攻击日志的详情内容
     */
    Content: string;
    /**
     * CLS返回内容
     */
    FileName: string;
    /**
     * CLS返回内容
     */
    Source: string;
    /**
     * CLS返回内容
     */
    TimeStamp: string;
}
/**
 * DescribeAntiInfoLeakRules请求参数结构体
 */
export interface DescribeAntiInfoLeakRulesRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 动作类型
     */
    ActionType?: number;
    /**
     * 翻页
     */
    PageInfo?: PageInfo;
}
/**
 * 攻击日志统计详情
 */
export interface LogHistogramInfo {
    /**
     * 日志条数
     */
    Count: number;
    /**
     * 时间戳
     */
    TimeStamp: number;
}
/**
 * DeleteDomainWhiteRules请求参数结构体
 */
export interface DeleteDomainWhiteRulesRequest {
    /**
     * 需要删除的规则域名
     */
    Domain?: string;
    /**
     * 需要删除的白名单规则
     */
    Ids?: Array<number | bigint>;
}
/**
 * DescribeDomainVerifyResult请求参数结构体
 */
export interface DescribeDomainVerifyResultRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 实例id
     */
    InstanceID: string;
}
/**
 * ModifySpartaProtectionMode返回参数结构体
 */
export interface ModifySpartaProtectionModeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCustomWhiteRuleStatus返回参数结构体
 */
export interface ModifyCustomWhiteRuleStatusResponse {
    /**
     * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
     */
    Success: ResponseCode;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTopAttackDomain请求参数结构体
 */
export interface DescribeTopAttackDomainRequest {
    /**
     * 查询起始时间
     */
    FromTime: string;
    /**
     * 查询结束时间
     */
    ToTime: string;
    /**
     * TOP N,可从0-10选择，默认是10
     */
    Count?: number;
    /**
     * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
     */
    Edition?: string;
    /**
     * WAF实例ID，不传则不过滤
     */
    InstanceID?: string;
}
/**
 * 多域名黑白名单describe返回
 */
export interface BatchIpAccessControlData {
    /**
     * 总数
     */
    TotalCount: number;
    /**
     * 黑白名单条目
     */
    Res: Array<BatchIpAccessControlItem>;
}
/**
 * DescribeAntiInfoLeakRules返回的规则列表元素
 */
export interface DescribeAntiInfoLeakRulesRuleItem {
    /**
     * 规则ID
     */
    RuleId: string;
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 规则状态
     */
    Status: string;
    /**
     * 规则动作类型
     */
    ActionType: string;
    /**
     * 规则创建时间
     */
    CreateTime: string;
    /**
     * 详细的规则
     */
    Strategies: Array<DescribeAntiInfoLeakRulesStrategyItem>;
}
/**
 * DeleteDownloadRecord返回参数结构体
 */
export interface DeleteDownloadRecordResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAccessPeriod请求参数结构体
 */
export interface ModifyAccessPeriodRequest {
    /**
     * 访问日志保存期限，范围为[1, 30]
     */
    Period: number;
    /**
     * 日志主题
     */
    TopicId: string;
}
/**
 * DescribePeakValue请求参数结构体
 */
export interface DescribePeakValueRequest {
    /**
     * 查询起始时间
     */
    FromTime: string;
    /**
     * 查询结束时间
     */
    ToTime: string;
    /**
     * 需要查询的域名，当前用户所有域名可以不传
     */
    Domain?: string;
    /**
     * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
     */
    Edition?: string;
    /**
     * WAF实例ID，不传则不过滤
     */
    InstanceID?: string;
    /**
     * 五个值可选：
  access-峰值qps
  down-下行峰值带宽
  up-上行峰值带宽
  attack-Web攻击总数
  cc-CC攻击总数趋势图
     */
    MetricName?: string;
}
/**
 * bot的qps详情
 */
export interface BotQPS {
    /**
     * 资源id
     */
    ResourceIds: string;
    /**
     * 有效时间
     */
    ValidTime: string;
    /**
     * 资源数量
     */
    Count: number;
    /**
     * 资源所在地区
     */
    Region: string;
    /**
     * 使用qps的最大值
     */
    MaxBotQPS: number;
    /**
     * 续费标志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: number;
}
/**
 * DescribeDomainDetailsClb返回参数结构体
 */
export interface DescribeDomainDetailsClbResponse {
    /**
     * clb域名详情
     */
    DomainsClbPartInfo?: ClbDomainsInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePolicyStatus返回参数结构体
 */
export interface DescribePolicyStatusResponse {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 防护状态
     */
    Status: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CDC场景下负载均衡WAF的地域信息
 */
export interface CdcRegion {
    /**
     * 地域
     */
    Region: string;
    /**
     * 该地域对应的集群信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Clusters: Array<CdcCluster>;
}
/**
 * GetAttackTotalCount返回参数结构体
 */
export interface GetAttackTotalCountResponse {
    /**
     * 攻击总次数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDomainRules返回参数结构体
 */
export interface DescribeDomainRulesResponse {
    /**
     * 规则列表详情
     */
    Rules?: Array<Rule>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCRuleList请求参数结构体
 */
export declare type DescribeCCRuleListRequest = null;
/**
 * DescribeDomainVerifyResult返回参数结构体
 */
export interface DescribeDomainVerifyResultResponse {
    /**
     * 结果描述；如果可以添加返回空字符串
     */
    Msg?: string;
    /**
     * 检验状态：0表示可以添加，大于0为不能添加
     */
    VerifyCode?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddCustomRule请求参数结构体
 */
export interface AddCustomRuleRequest {
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 优先级
     */
    SortId: string;
    /**
     * 过期时间，单位为秒级时间戳，例如1677254399表示过期时间为2023-02-24 23:59:59. 0表示永不过期
     */
    ExpireTime: string;
    /**
     * 策略详情
     */
    Strategies: Array<Strategy>;
    /**
     * 需要添加策略的域名
     */
    Domain: string;
    /**
     * 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向
     */
    ActionType: string;
    /**
     * 如果动作是重定向，则表示重定向的地址；其他情况可以为空
     */
    Redirect?: string;
    /**
     * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
     */
    Edition?: string;
    /**
     * 放行的详情
     */
    Bypass?: string;
    /**
     * 添加规则的来源，默认为空
     */
    EventId?: string;
}
/**
 * DescribeWafAutoDenyRules返回参数结构体
 */
export interface DescribeWafAutoDenyRulesResponse {
    /**
     * 攻击次数阈值
     */
    AttackThreshold?: number;
    /**
     * 攻击时间阈值
     */
    TimeThreshold?: number;
    /**
     * 自动封禁时间
     */
    DenyTimeThreshold?: number;
    /**
     * 自动封禁状态
     */
    DefenseStatus?: number;
    /**
     * 重保护网域名状态
     */
    HWState?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCCRule请求参数结构体
 */
export interface DeleteCCRuleRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 规则名称
     */
    Name: string;
    /**
     * clb-waf或者sparta-waf
     */
    Edition?: string;
    /**
     * 规则Id
     */
    RuleId?: number;
}
/**
 * DescribeAttackType返回参数结构体
 */
export interface DescribeAttackTypeResponse {
    /**
     * 数量
     */
    Piechart: Array<PiechartItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCCRule返回参数结构体
 */
export interface DescribeCCRuleResponse {
    /**
     * 结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CCRuleData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDomainWhiteRule返回参数结构体
 */
export interface ModifyDomainWhiteRuleResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyObject返回参数结构体
 */
export interface ModifyObjectResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAntiFakeUrlStatus返回参数结构体
 */
export interface ModifyAntiFakeUrlStatusResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAntiFakeUrl请求参数结构体
 */
export interface ModifyAntiFakeUrlRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 名称
     */
    Name: string;
    /**
     * uri
     */
    Uri: string;
    /**
     * ID
     */
    Id: number;
}
/**
 * ModifyInstanceElasticMode请求参数结构体
 */
export interface ModifyInstanceElasticModeRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 弹性计费开关
     */
    Mode: number;
}
/**
 * Waf 攻击自动封禁详情
 */
export interface AutoDenyDetail {
    /**
     * 攻击封禁类型标签
     */
    AttackTags: Array<string>;
    /**
     * 攻击次数阈值
     */
    AttackThreshold: number;
    /**
     * 自动封禁状态
     */
    DefenseStatus: number;
    /**
     * 攻击时间阈值
     */
    TimeThreshold: number;
    /**
     * 自动封禁时间
     */
    DenyTimeThreshold: number;
    /**
     * 最后更新时间
     */
    LastUpdateTime?: string;
}
/**
 * 响应体的返回码
 */
export interface ResponseCode {
    /**
     * 如果成功则返回Success，失败则返回云api定义的错误码
     */
    Code: string;
    /**
     * 如果成功则返回Success，失败则返回WAF定义的二级错误码
     */
    Message: string;
}
/**
 * DescribeWebshellStatus返回参数结构体
 */
export interface DescribeWebshellStatusResponse {
    /**
     * webshell域名
     */
    Domain?: string;
    /**
     * 开关状态
     */
    Status?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 域名列表
 */
export interface FindAllDomainDetail {
    /**
     * 用户id
     */
    Appid: number;
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名ip
     */
    Ips: Array<string>;
    /**
     * 发现时间
     */
    FindTime: string;
    /**
     * 实例id
     */
    InstanceId: string;
    /**
     * 域名id
     */
    DomainId: string;
    /**
     * waf类型
     */
    Edition: string;
    /**
     * 是否接入waf
     */
    IsWafDomain: number;
}
/**
 * DeleteAntiInfoLeakRule请求参数结构体
 */
export interface DeleteAntiInfoLeakRuleRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 规则id
     */
    RuleId: number;
}
/**
 * DescribeVipInfo返回参数结构体
 */
export interface DescribeVipInfoResponse {
    /**
     * VIP信息
     */
    VipInfo?: Array<VipInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuleLimit请求参数结构体
 */
export interface DescribeRuleLimitRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 实例Id
     */
    InstanceId?: string;
}
/**
 * DescribeAccessIndex接口的出参
 */
export interface AccessRuleKeyValueInfo {
    /**
     * 是否大小写敏感
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaseSensitive: boolean;
    /**
     * 需要建立索引的键值对信息；最大只能配置100个键值对
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyValues: Array<AccessKeyValueInfo>;
}
/**
 * ModifyDomainsCLSStatus请求参数结构体
 */
export interface ModifyDomainsCLSStatusRequest {
    /**
     * 需要修改的域名列表
     */
    Domains: Array<DomainURI>;
    /**
     * 修改域名的访问日志开关为Status
     */
    Status: number;
}
/**
 * DeleteAccessExport请求参数结构体
 */
export interface DeleteAccessExportRequest {
    /**
     * 日志导出ID
     */
    ExportId: string;
    /**
     * 日志主题
     */
    TopicId: string;
}
/**
 * DescribeTlsVersion返回参数结构体
 */
export interface DescribeTlsVersionResponse {
    /**
     * TLS key value
     */
    TLS: Array<TLSVersion>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDomainWhiteRules返回参数结构体
 */
export interface DescribeDomainWhiteRulesResponse {
    /**
     * 规则列表
     */
    RuleList?: Array<RuleList>;
    /**
     * 规则的数量
     */
    Total?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSession返回参数结构体
 */
export interface DescribeSessionResponse {
    /**
     * 返回结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: SessionData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpsertSession请求参数结构体
 */
export interface UpsertSessionRequest {
    /**
     * 域名
     */
    Domain: string;
    /**
     * session来源位置
     */
    Source: string;
    /**
     * 提取类别
     */
    Category: string;
    /**
     * 提取key或者起始匹配模式
     */
    KeyOrStartMat: string;
    /**
     * 结束匹配模式
     */
    EndMat: string;
    /**
     * 起始偏移位置
     */
    StartOffset: string;
    /**
     * 结束偏移位置
     */
    EndOffset: string;
    /**
     * 版本
     */
    Edition?: string;
    /**
     * Session名
     */
    SessionName?: string;
    /**
     * Session对应ID
     */
    SessionID?: number;
}
/**
 * DescribeHostLimit请求参数结构体
 */
export interface DescribeHostLimitRequest {
    /**
     * 添加的域名
     */
    Domain: string;
    /**
     * 实例id
     */
    InstanceID?: string;
    /**
     * 流量来源
     */
    AlbType?: string;
}
/**
 * clb域名详情
 */
export interface ClbDomainsInfo {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 域名id
     */
    DomainId?: string;
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 实例名
     */
    InstanceName?: string;
    /**
     * waf类型
     */
    Edition?: string;
    /**
     * 是否是cdn
     */
    IsCdn?: number;
    /**
     * 负载均衡算法
     */
    LoadBalancerSet?: Array<LoadBalancerPackageNew>;
    /**
     * 镜像模式
     */
    FlowMode?: number;
    /**
     * 绑定clb状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State?: number;
    /**
     * 负载均衡类型，clb或者apisix
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlbType?: string;
    /**
     * IsCdn=3时，表示自定义header
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpHeaders?: Array<string>;
    /**
     * cdc类型会增加集群信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CdcClusters?: string;
    /**
     * 云类型:public:公有云；private:私有云;hybrid:混合云
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CloudType?: string;
}
/**
 * DescribeObjects返回参数结构体
 */
export interface DescribeObjectsResponse {
    /**
     * 对象列表
     */
    ClbObjects?: Array<ClbObject>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchAccessLog请求参数结构体
 */
export interface SearchAccessLogRequest {
    /**
     * 客户要查询的日志主题ID，每个客户都有对应的一个主题，新版本此字段填空字符串
     */
    TopicId: string;
    /**
     * 要查询的日志的起始时间，Unix时间戳，单位ms
     */
    From: number;
    /**
     * 要查询的日志的结束时间，Unix时间戳，单位ms
     */
    To: number;
    /**
     * 查询语句，语句长度最大为4096
     */
    Query: string;
    /**
     * 单次查询返回的日志条数，最大值为100
     */
    Limit?: number;
    /**
     * 新版本此字段失效，填空字符串，翻页使用Page
     */
    Context?: string;
    /**
     * 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
     */
    Sort?: string;
    /**
     * 第几页，从0开始。新版本接口字段
     */
    Page?: number;
}
/**
 * 唯一定位Domain
 */
export interface DomainURI {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 版本
     */
    Edition: string;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceID?: string;
}
/**
 * DescribeAttackWhiteRule返回参数结构体
 */
export interface DescribeAttackWhiteRuleResponse {
    /**
     * 规则总数
     */
    Total: number;
    /**
     * 规则白名单列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List: Array<UserWhiteRule>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户规则白名单规则子项
 */
export interface UserWhiteRuleItem {
    /**
     * 匹配域
     */
    MatchField: string;
    /**
     * 匹配方法
     */
    MatchMethod: string;
    /**
     * 匹配内容
     */
    MatchContent: string;
}
/**
 * DescribeObjects请求参数结构体
 */
export interface DescribeObjectsRequest {
    /**
     * 支持的过滤器:
      ObjectId: clb实例ID
      VIP: clb实例的公网IP
      InstanceId: waf实例ID
      Domain: 精准域名
      Status: waf防护开关状态: 0关闭，1开启
      ClsStatus: waf日志开关: 0关闭，1开启
     */
    Filters?: Array<FiltersItemNew>;
}
/**
 * ModifyHostStatus请求参数结构体
 */
export interface ModifyHostStatusRequest {
    /**
     * 域名状态列表
     */
    HostsStatus: Array<HostStatus>;
}

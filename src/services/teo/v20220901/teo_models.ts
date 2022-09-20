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
 * 智能压缩配置。
 */
export interface Compression {
  /**
      * 智能压缩配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
      * 支持的压缩算法列表，取值有：
<li>brotli：brotli算法；</li>
<li>gzip：gzip算法。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Algorithms?: Array<string>
}

/**
 * DescribeOriginGroup返回参数结构体
 */
export interface DescribeOriginGroupResponse {
  /**
   * 记录总数。
   */
  TotalCount: number

  /**
   * 源站组信息。
   */
  OriginGroups: Array<OriginGroup>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLoadBalancingStatus返回参数结构体
 */
export interface ModifyLoadBalancingStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBotData请求参数结构体
 */
export interface DescribeBotDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>bot_interceptNum ：bot拦截次数 ；</li>
<li>bot_noneRequestNum ：未分类bot请求次数 ；</li>
<li> bot_maliciousRequestNum：恶意bot请求次数 ；</li>
<li>bot_suspectedRequestNum ：疑似bot请求次数 ；</li>
<li>bot_friendlyRequestNum ：友好bot请求次数 ；</li>
<li>bot_normalRequestNum ：正常bot请求次数 。</li>
      */
  MetricNames: Array<string>

  /**
   * 查询的子域名列表，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
   * 站点列表，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 筛选条件，key可选的值有：
<li>action：执行动作 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据； </li>
<li>mainland：中国大陆地区数据。 </li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * 拨测结果信息
 */
export interface SpeedTestingInfo {
  /**
      * 任务状态，取值有：
<li> 200：任务完成;</li>
<li> 100：任务进行中；</li>
<li> 503: 任务失败。</li>
      */
  StatusCode: number

  /**
   * 拨测任务 ID。
   */
  TestId: string

  /**
   * 拨测任务配置。
   */
  SpeedTestingConfig: SpeedTestingConfig

  /**
      * 拨测任务统计结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpeedTestingStatistics: SpeedTestingStatistics
}

/**
 * DescribeSingleL7AnalysisData请求参数结构体
 */
export interface DescribeSingleL7AnalysisDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 查询的指标，取值有:
<li> l7Flow_singleIpRequest：独立IP请求数。</li>
      */
  MetricNames: Array<string>

  /**
   * 查询的站点集合，不填默认查询所有站点。
   */
  ZoneIds?: Array<string>

  /**
      * 筛选条件, key可选的值有：
<li>country：国家/地区；</li>
<li>domain：域名；</li>
<li>protocol：协议类型；</li>
<li>tagKey：标签Key；</li>
<li>tagValue；标签Value。</li>
      */
  Filters?: Array<QueryCondition>

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天;。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * TopN数据Entry
 */
export interface TopEntryValue {
  /**
   * 排序实体名。
   */
  Name: string

  /**
   * 排序实体数量。
   */
  Count: number
}

/**
 * DescribeHostsSetting返回参数结构体
 */
export interface DescribeHostsSettingResponse {
  /**
   * 域名列表。
   */
  DetailHosts: Array<DetailHost>

  /**
   * 域名数量。
   */
  TotalNumber: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDoS防护分区
 */
export interface ShieldArea {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * DDoS策略Id。
   */
  PolicyId: number

  /**
      * 防护类型，参考值：
<li>domain：7层子域；</li>
<li>application：4层应用。</li>
      */
  Type: string

  /**
   * 7层站点名。
   */
  EntityName?: string

  /**
      * 该防护分区下的7层子域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoSHosts?: Array<DDoSHost>

  /**
   * 四层tcp转发规则数。
   */
  TcpNum?: number

  /**
   * 四层udp转发规则数。
   */
  UdpNum?: number

  /**
   * 实例名称。
   */
  Entity?: string
}

/**
 * 源站配置。
 */
export interface Origin {
  /**
      * 主源站列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Origins?: Array<string>

  /**
      * 备源站列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BackupOrigins?: Array<string>

  /**
      * 回源协议配置，取值有：
<li>http：强制 http 回源；</li>
<li>follow：协议跟随回源；</li>
<li>https：强制 https 回源，https 回源时仅支持源站 443 端口。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginPullProtocol?: string

  /**
      * OriginType 为对象存储（COS）时，可以指定是否允许访问私有 bucket。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosPrivateAccess?: string
}

/**
 * DescribeRules返回参数结构体
 */
export interface DescribeRulesResponse {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
   * 规则列表，按规则执行顺序从先往后排序。
   */
  RuleItems: Array<RuleItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 时序数据信息
 */
export interface TimingDataRecord {
  /**
   * 查询维度值。
   */
  TypeKey: string

  /**
   * 详细时序数据。
   */
  TypeValue: Array<TimingTypeValue>
}

/**
 * DDoS攻击事件的详情
 */
export interface DDoSAttackEventDetailData {
  /**
      * 攻击状态，取值有：
<li>1 ：观察中 ；</li>
<li>2 ：攻击开始 ；</li>
<li>3 ：攻击结束 。</li>
      */
  AttackStatus: number

  /**
   * 攻击类型。
   */
  AttackType: string

  /**
   * 结束时间。
   */
  EndTime: number

  /**
   * 开始时间。
   */
  StartTime: number

  /**
   * 最大带宽。
   */
  MaxBandWidth: number

  /**
   * 最大包速率。
   */
  PacketMaxRate: number

  /**
   * 事件Id。
   */
  EventId: string

  /**
   * DDoS策略组ID。
   */
  PolicyId: number
}

/**
 * DescribeBillingData请求参数结构体
 */
export interface DescribeBillingDataRequest {
  /**
   * 起始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 时间粒度, 支持指定以下几种粒度：
<ul>
<li>min：1分钟粒度；</li>
<li>5min：5分钟粒度；</li>
<li>hour：1小时粒度；</li>
<li>day：天粒度；</li>
</ul>
      */
  Interval: string

  /**
      * 指标名,支持:
<ul>
<li>acc_flux: 内容加速流量用量；</li>
<li>quic_request: QUIC 请求数用量；</li>
<li>sec_flux: 安全流量用量；</li>
<li>sec_request_clean: 安全干净流量请求数；</li>
</ul>
      */
  MetricName: string

  /**
      * 筛选条件. 支持:
<ul>
<li>zone: 站点级数据；</li>
<li>plan: 套餐级数据；</li>
<li>service: l4 / l7分别筛选四七层数据；</li>
<li>tagKey: 标签Key；</li>
<li>tagValue: 标签Value。</li>
</ul>
      */
  Filters: Array<BillingDataFilter>
}

/**
 * 标签配置
 */
export interface Tag {
  /**
      * 标签键。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagKey: string

  /**
      * 标签值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagValue: string
}

/**
 * RateLimit配置
 */
export interface RateLimitConfig {
  /**
      * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
   * 速率限制-用户规则列表。如果为null，默认使用历史配置。
   */
  RateLimitUserRules?: Array<RateLimitUserRule>

  /**
      * 速率限制模板功能。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RateLimitTemplate?: RateLimitTemplate

  /**
      * 智能客户端过滤。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RateLimitIntelligence?: RateLimitIntelligence
}

/**
 * 规则引擎参数详情信息，特殊参数类型。
 */
export interface RuleExtraParameter {
  /**
      * 参数名，取值有：
<li> Action：修改 HTTP 头部所需参数，RuleAction 选择 RewirteAction；</li>
<li> StatusCode：状态码相关功能所需参数，RuleAction 选择 CodeAction。</li>
      */
  Id: string

  /**
      * 参数值类型。
<li> CHOICE：参数值只能在 Values 中选择； </li>
<li> CUSTOM_NUM：参数值用户自定义，整型类型；</li>
<li> CUSTOM_STRING：参数值用户自定义，字符串类型。</li>
      */
  Type: string

  /**
      * 可选参数值。
注意：当 Id 的值为 StatusCode 时数组中的值为整型，填写参数值时请填写字符串的整型数值。
      */
  Choices: Array<string>
}

/**
 * 日志任务主题信息
 */
export interface ClsLogTopicInfo {
  /**
   * 任务名。
   */
  TaskName: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
   * 日志集ID。
   */
  LogSetId: string

  /**
   * 日志主题ID。
   */
  TopicId: string

  /**
   * 任务类型。
   */
  EntityType: string

  /**
   * 任务主题保存时间。
   */
  Period: number

  /**
   * 任务主题是否开启。
   */
  Enabled: boolean

  /**
   * 任务主题是否异常。
   */
  Deleted: string

  /**
   * 创建时间。
   */
  CreateTime: string

  /**
      * 推送目标地址,取值有：
<li>cls: 推送到cls；</li>
<li>custom_enpoint: 自定义推送地址。</li>
      */
  Target: string

  /**
      * 日志集所属地区。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogSetRegion: string

  /**
      * 站点id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: string

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area: string
}

/**
 * Waf配置。
 */
export interface WafConfig {
  /**
      * WafConfig开关，取值有：
<li> on：开启；</li>
<li> off：关闭。</li>开关仅与配置是否生效有关，即使为off（关闭），也可以正常修改配置的内容。
      */
  Switch: string

  /**
      * 上一次设置的防护级别，取值有：
<li> loose：宽松；</li>
<li> normal：正常；</li>
<li> strict：严格；</li>
<li> stricter：超严格；</li>
<li> custom：自定义。</li>
      */
  Level: string

  /**
      * 全局WAF模式，取值有：
<li> block：阻断（全局阻断，但可对详细规则配置观察）；</li>
<li> observe：观察（无论详细规则配置什么，都为观察）。</li>
      */
  Mode: string

  /**
   * 托管规则详细配置。如果为null，默认使用历史配置。
   */
  WafRule?: WafRule

  /**
   * AI规则引擎防护配置。如果为null，默认使用历史配置。
   */
  AiRule?: AiRule
}

/**
 * DescribeHostCertificates返回参数结构体
 */
export interface DescribeHostCertificatesResponse {
  /**
   * 总数，用于分页查询。
   */
  TotalCount: number

  /**
      * 域名证书配置列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostCertificates: Array<HostsCertificate>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrefetchTask请求参数结构体
 */
export interface CreatePrefetchTaskRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
      * 要预热的资源列表，每个元素格式类似如下:
http://www.example.com/example.txt。
      */
  Targets?: Array<string>

  /**
   * 是否对url进行encode，若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。
   */
  EncodeUrl?: boolean

  /**
   * 附带的http头部信息。
   */
  Headers?: Array<Header>
}

/**
 * DescribeApplicationProxies返回参数结构体
 */
export interface DescribeApplicationProxiesResponse {
  /**
   * 应用代理列表。
   */
  ApplicationProxies: Array<ApplicationProxy>

  /**
   * 记录总数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopL7AnalysisData请求参数结构体
 */
export interface DescribeTopL7AnalysisDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 查询的指标，取值有：
<li> l7Flow_outFlux_country：请求的国家；</li>
<li> l7Flow_outFlux_statusCode：请求的状态码；</li>
<li> l7Flow_outFlux_domain：请求域名；</li>
<li> l7Flow_outFlux_url：请求的URL; </li>
<li> l7Flow_outFlux_resourceType：请求的资源类型；</li>
<li> l7Flow_outFlux_sip：客户端的源IP；</li>
<li> l7Flow_outFlux_referers：refer信息；</li>
<li> l7Flow_outFlux_ua_device：设备类型; </li>
<li> l7Flow_outFlux_ua_browser：浏览器类型；</li>
<li> l7Flow_outFlux_us_os：操作系统类型。</li>
      */
  MetricName: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 查询前多少个数据，最大值为1000，不填默认默认为: 10， 表示查询前top10的数据。
   */
  Limit?: number

  /**
      * 筛选条件，key可选的值有：
<li>country：国家/地区；</li>
<li>domain：域名；</li>
<li>protocol：协议类型；</li>
<li>resourceType：资源类型；</li>
<li>statusCode：状态码；</li>
<li> browserType：浏览器类型；</li>
<li>deviceType：设备类型；</li>
<li>operatingSystemType：操作系统类型；</li>
<li>tlsVersion：tls版本；</li>
<li>url：url地址；</li>
<li>referer：refer头信息；</li>
<li>ipVersion：ip版本；</li>
<li>tagKey：标签Key；</li>
<li>tagValue：标签Value。</li>
      */
  Filters?: Array<QueryCondition>

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DDoS攻击事件对象
 */
export interface DDoSAttackSourceEvent {
  /**
   * 攻击源ip。
   */
  AttackSourceIp: string

  /**
   * 地区（国家）。
   */
  AttackRegion: string

  /**
   * 累计攻击流量。
   */
  AttackFlow: number

  /**
   * 累计攻击包量。
   */
  AttackPacketNum: number
}

/**
 * ModifyRulePriority返回参数结构体
 */
export interface ModifyRulePriorityResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 功能总开关
 */
export interface SwitchConfig {
  /**
      * Web类型的安全总开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>不影响DDoS与Bot的开关。
      */
  WebSwitch: string
}

/**
 * IdentifyZone返回参数结构体
 */
export interface IdentifyZoneResponse {
  /**
   * 站点归属信息。
   */
  Ascription: AscriptionInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 拨测详细数据，包括各地域性能数据。
 */
export interface SpeedTestingDetailData {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
   * 地域性能数据。
   */
  DistrictStatistics: Array<DistrictStatistics>
}

/**
 * bot托管规则详情
 */
export interface BotManagedRuleDetail {
  /**
   * 规则ID。
   */
  RuleId: number

  /**
   * 规则描述。
   */
  Description: string

  /**
   * 规则分类。
   */
  RuleTypeName: string

  /**
   * 该规则开启/关闭状态。
   */
  Status: string
}

/**
 * DescribeDDoSAttackSourceEvent返回参数结构体
 */
export interface DescribeDDoSAttackSourceEventResponse {
  /**
      * DDoS攻击源数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<DDoSAttackSourceEvent>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDoS协议防护+连接防护
 */
export interface DDoSAntiPly {
  /**
      * tcp协议封禁，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
      */
  DropTcp: string

  /**
      * udp协议封禁，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
      */
  DropUdp: string

  /**
      * icmp协议封禁，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
      */
  DropIcmp: string

  /**
      * 其他协议封禁，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
      */
  DropOther: string

  /**
   * 源站每秒新连接限速，取值范围0-4294967295。
   */
  SourceCreateLimit: number

  /**
   * 源站并发连接控制，取值范围0-4294967295。
   */
  SourceConnectLimit: number

  /**
   * 目的端口每秒新连接限速，取值范围0-4294967295。
   */
  DestinationCreateLimit: number

  /**
   * 目的端口并发连接控制，取值范围0-4294967295。
   */
  DestinationConnectLimit: number

  /**
   * 每秒异常连接数阈值，取值范围0-4294967295。
   */
  AbnormalConnectNum: number

  /**
   * 异常syn报文百分比阈值，取值范围0-100。
   */
  AbnormalSynRatio: number

  /**
   * 异常syn报文阈值，取值范围0-65535。
   */
  AbnormalSynNum: number

  /**
   * 每秒连接超时检测，取值范围0-65535。
   */
  ConnectTimeout: number

  /**
      * 空连接防护开启，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
      */
  EmptyConnectProtect: string

  /**
      * UDP分片开关，取值有：
<li>off ：关闭 ；</li>
<li>on ：开启 。</li>
      */
  UdpShard?: string
}

/**
 * edgeone套餐信息
 */
export interface PlanInfo {
  /**
      * 结算货币类型，取值有：
<li> CNY ：人民币结算； </li>
<li> USD ：美元结算。</li>
      */
  Currency: string

  /**
   * 套餐所含流量，该流量数值为安全加速流量，内容加速流量和智能加速流量的总和（单位：字节）。
   */
  Flux: number

  /**
      * 结算周期，取值有：
<li> y ：按年结算； </li>
<li> m ：按月结算；</li>
<li> h ：按小时结算； </li>
<li> M ：按分钟结算；</li>
<li> s ：按秒结算。 </li>
      */
  Frequency: string

  /**
      * 套餐类型，取值有：
<li> sta ：全球内容分发网络（不包括中国大陆）标准版套餐； </li>
<li> sta_with_bot ：全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理；</li>
<li> sta_cm ：中国大陆内容分发网络标准版套餐； </li>
<li> sta_cm_with_bot ：中国大陆内容分发网络标准版套餐附带bot管理；</li>
<li> ent ：全球内容分发网络（不包括中国大陆）企业版套餐； </li>
<li> ent_with_bot ： 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理；</li>
<li> ent_cm ：中国大陆内容分发网络企业版套餐； </li>
<li> ent_cm_with_bot ：中国大陆内容分发网络企业版套餐附带bot管理。</li>
      */
  PlanType: string

  /**
   * 套餐价格（单位：分）。
   */
  Price: number

  /**
   * 套餐所含请求次数，该请求次数为安全加速请求次数。（单位：次）。
   */
  Request: number

  /**
   * 套餐所能绑定的站点个数。
   */
  SiteNumber: number

  /**
      * 套餐加速区域类型，取值有：
<li> mainland ：中国大陆； </li>
<li> overseas ：全球（不包括中国大陆）。</li>
      */
  Area: string
}

/**
 * DescribeTimingL7CacheData请求参数结构体
 */
export interface DescribeTimingL7CacheDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 查询的指标，取值有：
<li>l7Cache_outFlux：响应流量；</li>
<li>l7Cache_request：响应请求数；</li>
<li> l7Cache_outBandwidth：响应带宽。</li>
      */
  MetricNames: Array<string>

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
      * 筛选条件，key可选的值有：
<li> cacheType：缓存类型(状态)；</li>
<li>domain：Host/域名；</li>
<li>resourceType：资源类型；</li>
<li>url：url地址；</li>
<li>tagKey：标签Key；</li>
<li>tagValue：标签Value。</li>
      */
  Filters?: Array<QueryCondition>

  /**
      * 查询时间粒度，可选的值有：
<li>min：1分钟的时间粒度；</li>
<li>5min：5分钟的时间粒度；</li>
<li>hour：1小时的时间粒度；</li>
<li>day：1天的时间粒度。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DescribeSecurityPolicyList返回参数结构体
 */
export interface DescribeSecurityPolicyListResponse {
  /**
   * 防护资源列表。
   */
  SecurityEntities: Array<SecurityEntity>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckCertificate请求参数结构体
 */
export interface CheckCertificateRequest {
  /**
   * 证书内容。
   */
  Certificate: string

  /**
   * 私钥内容。
   */
  PrivateKey: string
}

/**
 * DescribeDDoSAttackEvent返回参数结构体
 */
export interface DescribeDDoSAttackEventResponse {
  /**
      * DDOS攻击事件数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<DDoSAttackEvent>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 访问协议强制https跳转配置
 */
export interface ForceRedirect {
  /**
      * 访问强制跳转配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
      * 重定向状态码，取值有：
<li>301：301跳转；</li>
<li>302：302跳转。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  RedirectStatusCode?: number
}

/**
 * 规则引擎带有状态码的动作
 */
export interface CodeAction {
  /**
   * 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
   */
  Action: string

  /**
   * 操作参数。
   */
  Parameters: Array<RuleCodeActionParams>
}

/**
 * 缓存预刷新
 */
export interface CachePrefresh {
  /**
      * 缓存预刷新配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
      * 缓存预刷新百分比，取值范围：1-99。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Percent?: number
}

/**
 * DescribeWebProtectionClientIpList返回参数结构体
 */
export interface DescribeWebProtectionClientIpListResponse {
  /**
      * CC防护客户端（攻击源）ip信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecClientIp>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTimingL7AnalysisData返回参数结构体
 */
export interface DescribeTimingL7AnalysisDataResponse {
  /**
      * 时序流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TimingDataRecord>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * bot 用户画像规则
 */
export interface BotPortraitRule {
  /**
      * 本功能的开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
   * 本规则的ID。仅出参使用。
   */
  RuleID?: number

  /**
      * JS挑战的规则ID。默认所有规则不配置JS挑战。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlgManagedIds?: Array<number>

  /**
      * 数字验证码的规则ID。默认所有规则不配置数字验证码。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CapManagedIds?: Array<number>

  /**
      * 观察的规则ID。默认所有规则不配置观察。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MonManagedIds?: Array<number>

  /**
      * 拦截的规则ID。默认所有规则不配置拦截。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropManagedIds?: Array<number>
}

/**
 * DDoS防护配置
 */
export interface DDoSRule {
  /**
      * DDoS防护等级。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoSStatusInfo?: DDoSStatusInfo

  /**
      * DDoS地域封禁。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoSGeoIp?: DDoSGeoIp

  /**
      * DDoS黑白名单。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoSAllowBlock?: DDoSAllowBlock

  /**
      * DDoS 协议封禁+连接防护。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoSAntiPly?: DDoSAntiPly

  /**
      * DDoS特征过滤。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoSPacketFilter?: DDoSPacketFilter

  /**
      * DDoS端口过滤。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoSAcl?: DDoSAcl

  /**
      * DDoS开关，取值有:
<li>on ：开启 ；</li>
<li>off ：关闭 。</li>如果为null，默认使用历史配置。
      */
  Switch?: string

  /**
      * UDP分片功能是否支持，取值有:
<li>on ：支持 ；</li>
<li>off ：不支持 。</li>仅出参字段，入参无需填写。
      */
  UdpShardOpen?: string

  /**
      * DDoS源站访问速率限制。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoSSpeedLimit?: DDoSSpeedLimit
}

/**
 * 规则引擎可应用于匹配请求的设置详细信息。
 */
export interface RulesProperties {
  /**
   * 值为参数名称。
   */
  Name: string

  /**
   * 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
   */
  Min: number

  /**
      * 参数值的可选值。
注意：若参数值为用户自定义则该数组为空数组。
      */
  ChoicesValue: Array<string>

  /**
      * 参数值类型。
<li> CHOICE：参数值只能在 ChoicesValue 中选择； </li>
<li> TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择；</li>
<li> OBJECT：参数值为对象类型，ChoiceProperties 为改对象类型关联的属性；</li>
<li> CUSTOM_NUM：参数值用户自定义，整型类型；</li>
<li> CUSTOM_STRING：参数值用户自定义，字符串类型。</li>注意：当参数类型为 OBJECT 类型时，请注意参考 [示例2 参数为 OBJECT 类型的创建](https://tcloud4api.woa.com/document/product/1657/79382?!preview&!document=1)
      */
  Type: string

  /**
   * 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
   */
  Max: number

  /**
   * 参数值是否支持多选或者填写多个。
   */
  IsMultiple: boolean

  /**
   * 是否允许为空。
   */
  IsAllowEmpty: boolean

  /**
      * 该参数对应的关联配置参数，属于调用接口的必填参数。
注意：如果可选参数无特殊新增参数则该数组为空数组。
      */
  ChoiceProperties: Array<RuleChoicePropertiesItem>

  /**
      * <li> 为 NULL：无特殊参数，RuleAction 选择 NormalAction；</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtraParameter: RuleExtraParameter
}

/**
 * 规则引擎条件使用StatusCode字段动作参数
 */
export interface RuleCodeActionParams {
  /**
   * 状态 Code。
   */
  StatusCode: number

  /**
   * 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
   */
  Name: string

  /**
   * 参数值。
   */
  Values: Array<string>
}

/**
 * ModifyDDoSPolicyHost返回参数结构体
 */
export interface ModifyDDoSPolicyHostResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 例外规则的配置，包含生效的条件，生效的范围
 */
export interface ExceptUserRule {
  /**
      * 规则名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleName: string

  /**
      * 规则的处置方式，当前仅支持skip：跳过全部托管规则。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action: string

  /**
      * 规则生效状态，取值有：
<li>on：生效；</li>
<li>off：失效。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleStatus: string

  /**
      * 规则ID。仅出参使用。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 更新时间。仅出参使用
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
      * 匹配条件。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExceptUserRuleConditions?: Array<ExceptUserRuleCondition>

  /**
      * 规则生效的范围。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExceptUserRuleScope?: ExceptUserRuleScope

  /**
      * 优先级，取值范围0-100。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RulePriority?: number
}

/**
 * 安全数据Entry返回值
 */
export interface SecEntry {
  /**
   * 查询维度值。
   */
  Key: string

  /**
   * 查询维度下详细数据。
   */
  Value: Array<SecEntryValue>
}

/**
 * DDoS特征过滤
 */
export interface DDoSPacketFilter {
  /**
   * 特征过滤规则数组。
   */
  DDoSFeaturesFilters: Array<DDoSFeaturesFilter>

  /**
      * 特征过滤清空标识，取值有：
<li>off ：清空特征过滤规则，无需填写 DDoSFeaturesFilters 参数 ；</li>
<li>on ：配置特征过滤规则，需填写 DDoSFeaturesFilters 参数。</li>
      */
  Switch: string
}

/**
 * DescribeSpeedTestingMetricData返回参数结构体
 */
export interface DescribeSpeedTestingMetricDataResponse {
  /**
   * 站点拨测维度数据。
   */
  SpeedTestingMetricData: SpeedTestingMetricData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 询价参数
 */
export interface Sv {
  /**
   * 询价参数键。
   */
  Key: string

  /**
   * 询价参数值。
   */
  Value: string
}

/**
 * 规则引擎规则项，Conditions 数组内多个项的关系为 或，内层 Conditions 列表内多个项的关系为 且。
 */
export interface Rule {
  /**
      * 执行功能判断条件。
注意：满足该数组内任意一项条件，功能即可执行。
      */
  Conditions: Array<RuleAndConditions>

  /**
   * 执行的功能。
   */
  Actions: Array<Action>
}

/**
 * CreateLogSet返回参数结构体
 */
export interface CreateLogSetResponse {
  /**
   * 创建成功的日志集ID。
   */
  LogSetId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadL4Logs请求参数结构体
 */
export interface DownloadL4LogsRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 四层实例ID集合。
   */
  ProxyIds?: Array<string>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
}

/**
 * CreateCustomErrorPage请求参数结构体
 */
export interface CreateCustomErrorPageRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名。
   */
  Entity: string

  /**
   * 自定义页面的文件名。
   */
  Name: string

  /**
   * 自定义页面的内容，本字段的内容需要将数据经过urlencode后传入。
   */
  Content: string
}

/**
 * DescribeDnssec返回参数结构体
 */
export interface DescribeDnssecResponse {
  /**
      * DNSSEC状态信息，取值有：
<li>enabled：开启；</li>
<li>disabled：关闭。</li>
      */
  Status: string

  /**
      * DNSSEC相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DnssecInfo: DnssecInfo

  /**
   * 站点信息更新时间。
   */
  ModifiedOn: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyZoneCnameSpeedUp请求参数结构体
 */
export interface ModifyZoneCnameSpeedUpRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
      * CNAME 加速状态，取值有：
<li> enabled：开启；</li>
<li> disabled：关闭。</li>
      */
  Status: string
}

/**
 * 安全防护实例
 */
export interface SecurityEntity {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名/应用名。
   */
  Entity: string

  /**
      * 类型，取值有：
<li> domain：7层子域名； </li>
<li> application：4层应用名。 </li>
      */
  EntityType: string
}

/**
 * CreatePrefetchTask返回参数结构体
 */
export interface CreatePrefetchTaskResponse {
  /**
   * 任务 ID。
   */
  JobId: string

  /**
      * 失败的任务列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedList: Array<FailReason>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDDoSPolicy返回参数结构体
 */
export interface DescribeDDoSPolicyResponse {
  /**
   * DDoS防护配置。
   */
  DDoSRule: DDoSRule

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApplicationProxyRule请求参数结构体
 */
export interface CreateApplicationProxyRuleRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 代理ID。
   */
  ProxyId: string

  /**
      * 协议，取值有：
<li>TCP：TCP协议；</li>
<li>UDP：UDP协议。</li>
      */
  Proto: string

  /**
      * 源站类型，取值有：
<li>custom：手动添加；</li>
<li>origins：源站组。</li>
      */
  Port: Array<string>

  /**
      * 源站类型，取值：
custom：手动添加
origins：源站组
      */
  OriginType: string

  /**
      * 源站信息：
当OriginType=custom时，表示一个或多个源站，如：
OriginValue=["8.8.8.8:80","9.9.9.9:80"]
OriginValue=["test.com:80"]；
当OriginType=origins时，要求有且仅有一个元素，表示源站组ID，如：
OriginValue=["origin-537f5b41-162a-11ed-abaa-525400c5da15"]。
      */
  OriginValue: Array<string>

  /**
      * 传递客户端IP，取值有：
<li>TOA：TOA（仅Proto=TCP时可选）；</li>
<li>PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；</li>
<li>PPV2：Proxy Protocol传递，协议版本V2；</li>
<li>OFF：不传递。</li>默认值：OFF。
      */
  ForwardClientIp?: string

  /**
      * 是否开启会话保持，取值有：
<li>true：开启；</li>
<li>false：关闭。</li>默认值：false。
      */
  SessionPersist?: boolean
}

/**
 * DescribeDDoSBlockList请求参数结构体
 */
export interface DescribeDDoSBlockListRequest {
  /**
   * 攻击事件起始时间。
   */
  StartTime: string

  /**
   * 攻击事件列表。
   */
  EventIds: Array<string>

  /**
   * 站点列表，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 策略列表，不填默认选择全部策略。
   */
  PolicyIds?: Array<number>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DescribeDDoSMajorAttackEvent请求参数结构体
 */
export interface DescribeDDoSMajorAttackEventRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 站点id列表，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * ddos策略组id集合，不填默认选择全部策略id。
   */
  PolicyIds?: Array<number>

  /**
      * 协议类型，可选的协议类型有：
<li>tcp：tcp协议；</li>
<li>udp：udp协议；</li>
<li>all：全部协议。</li>不填默认为all, 表示获取全部协议类型。
      */
  ProtocolType?: string

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * Dns数据曲线过滤参数
 */
export interface BillingDataFilter {
  /**
      * 参数名称，取值范围：
zone：站点名
host：域名
proxy: 四层实例
plan: 套餐
      */
  Type: string

  /**
   * 参数值
   */
  Value: string
}

/**
 * DescribeSecurityPolicyList请求参数结构体
 */
export interface DescribeSecurityPolicyListRequest {
  /**
   * 站点Id。
   */
  ZoneId: string
}

/**
 * DescribeTimingL7CacheData返回参数结构体
 */
export interface DescribeTimingL7CacheDataResponse {
  /**
      * 七层缓存分析时序类流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TimingDataRecord>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
  /**
   * 符合条件的站点个数。
   */
  TotalCount: number

  /**
   * 站点详细信息列表。
   */
  Zones: Array<Zone>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 刷新预热附带的头部信息
 */
export interface Header {
  /**
   * HTTP头部。
   */
  Name: string

  /**
   * HTTP头部值。
   */
  Value: string
}

/**
 * DescribeDDoSPolicy请求参数结构体
 */
export interface DescribeDDoSPolicyRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 策略Id。
   */
  PolicyId: number
}

/**
 * DDoS端口限速
 */
export interface DDoSSpeedLimit {
  /**
   * 源站包量限制，支持单位有pps、Kpps、Mpps、Gpps。支持范围1 pps-10000 Gpps。"0 pps"或其他单位数值为0，即不限包。""为不更新。
   */
  PackageLimit: string

  /**
   * 源站流量限制，支持单位有bps、Kbps、Mbps、Gbps，支持范围1 bps-10000 Gbps。"0 bps"或其他单位数值为0，即不限流。""为不更新。
   */
  FluxLimit: string
}

/**
 * 速率限制智能客户端过滤规则详情
 */
export interface RateLimitIntelligenceRuleDetail {
  /**
   * 智能识别到的客户端IP。
   */
  MatchContent: string

  /**
   * 应用的动作。
   */
  Action: string

  /**
   * 更新时间。
   */
  EffectiveTime: string

  /**
   * 失效时间。
   */
  ExpireTime: string

  /**
   * 规则id。
   */
  RuleId: number

  /**
   * 处置状态，allowed即已经人为放行。
   */
  Status: string
}

/**
 * ReclaimZone请求参数结构体
 */
export interface ReclaimZoneRequest {
  /**
   * 站点名称。
   */
  ZoneName: string
}

/**
 * DeleteZone请求参数结构体
 */
export interface DeleteZoneRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string
}

/**
 * Bot 规则，下列规则ID可参考接口 DescribeBotManagedRules返回的ID信息
 */
export interface BotManagedRule {
  /**
      * 触发规则后的处置方式，取值有：
<li>drop：拦截；</li>
<li>trans：放行；</li>
<li>alg：Javascript挑战；</li>
<li>monitor：观察。</li>
      */
  Action: string

  /**
   * 本规则的ID。仅出参使用。
   */
  RuleID?: number

  /**
      * 放行的规则ID。默认所有规则不配置放行。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransManagedIds?: Array<number>

  /**
      * JS挑战的规则ID。默认所有规则不配置JS挑战。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlgManagedIds?: Array<number>

  /**
      * 数字验证码的规则ID。默认所有规则不配置数字验证码。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CapManagedIds?: Array<number>

  /**
      * 观察的规则ID。默认所有规则不配置观察。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MonManagedIds?: Array<number>

  /**
      * 拦截的规则ID。默认所有规则不配置拦截。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropManagedIds?: Array<number>
}

/**
 * 安全配置
 */
export interface SecurityConfig {
  /**
      * 托管规则。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  WafConfig?: WafConfig

  /**
      * 速率限制。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RateLimitConfig?: RateLimitConfig

  /**
      * 自定义规则。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AclConfig?: AclConfig

  /**
      * Bot配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BotConfig?: BotConfig

  /**
      * 七层防护总开关。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SwitchConfig?: SwitchConfig

  /**
      * 基础访问管控。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpTableConfig?: IpTableConfig

  /**
      * 例外规则配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExceptConfig?: ExceptConfig

  /**
      * 自定义拦截页面配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropPageConfig?: DropPageConfig
}

/**
 * 离线日志详细信息
 */
export interface L4OfflineLog {
  /**
   * 日志打包开始时间。
   */
  LogTime: number

  /**
      * 四层实例ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyId: string

  /**
   * 原始大小 单位byte。
   */
  Size: number

  /**
   * 下载地址。
   */
  Url: string

  /**
   * 日志数据包名。
   */
  LogPacketName: string

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area: string
}

/**
 * ModifyZoneCnameSpeedUp返回参数结构体
 */
export interface ModifyZoneCnameSpeedUpResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 失败原因
 */
export interface FailReason {
  /**
   * 失败原因。
   */
  Reason: string

  /**
   * 处理失败的资源列表，该列表元素来源于输入参数中的Targets，因此格式和入参中的Targets保持一致。
   */
  Targets: Array<string>
}

/**
 * DescribeRulesSetting请求参数结构体
 */
export type DescribeRulesSettingRequest = null

/**
 * 日志集基本信息
 */
export interface LogSetInfo {
  /**
   * 日志集所属地区。
   */
  LogSetRegion: string

  /**
   * 日志集名
   */
  LogSetName: string

  /**
   * 日志集Id
   */
  LogSetId: string

  /**
      * 该日志集是否已被删除, 可选的值有：
<li>no: 日志集没有被删除；</li>
<li>yes: 日志集已经被删除；</li>
      */
  Deleted: string
}

/**
 * 站点拨测优化建议
 */
export interface OptimizeAction {
  /**
      * 站点性能优化配置项，取值有：
<li>Http2；</li>
<li>Http3；</li>
<li>Brotli。</li>
      */
  Name: string

  /**
   * 网络环境。
   */
  Connectivity: string

  /**
   * 开启配置项后，预估性能优化效果，单位ms。
   */
  Value: number

  /**
   * 开启配置项后，预估性能提升比例，单位%。
   */
  Ratio: number
}

/**
 * DescribeDnsData请求参数结构体
 */
export interface DescribeDnsDataRequest {
  /**
   * 起始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone<br>   按照【<strong>站点名称</strong>】进行过滤。站点名称形如：tencent.com<br>   类型：String<br>   必选：否，仅支持填写一个站点
<li>host<br>   按照【<strong>域名</strong>】进行过滤。域名形如：test.tencent.com<br>   类型：String<br>   必选：否，仅支持填写一个域名
<li>type<br>   按照【<strong>DNS解析类型</strong>】进行过滤<br>   类型：String<br>   必选：否<br>   可选项：<br>   A：A记录<br>   AAAA：AAAA记录<br>   CNAME：CNAME记录<br>   MX：MX记录<br>   TXT：TXT记录<br>   NS：NS记录<br>   SRV：SRV记录<br>   CAA：CAA记录
<li>code<br>   按照【<strong>DNS解析状态码</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   NoError：成功<br>   NXDomain：请求域不存在<br>   NotImp：不支持的请求类型<br>   Refused：域名服务器因为策略的原因拒绝执行请求
<li>area<br>   按照【<strong>DNS解析地域</strong>】进行过滤。<br>   类型：String<br>   必选：否。<br>   可选项：<br>   亚洲：Asia<br>   欧洲：Europe<br>   非洲：Africa<br>   大洋洲：Oceania<br>   美洲：Americas
      */
  Filters?: Array<Filter>

  /**
      * 时间粒度，取值有：
<li>min：1分钟粒度；</li>
<li>5min：5分钟粒度；</li>
<li>hour：1小时粒度；</li>
<li>day：天粒度。</li>不填写，默认值为：min。
      */
  Interval?: string
}

/**
 * 规则引擎条件常规动作参数
 */
export interface RuleNormalActionParams {
  /**
   * 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
   */
  Name: string

  /**
   * 参数值。
   */
  Values: Array<string>
}

/**
 * 源站记录私有鉴权参数
 */
export interface PrivateParameter {
  /**
      * 私有鉴权参数名称，取值有：
<li>AccessKeyId：鉴权参数Access Key ID；</li>
<li>SecretAccessKey：鉴权参数Secret Access Key。</li>
      */
  Name: string

  /**
   * 私有鉴权参数值。
   */
  Value: string
}

/**
 * CreateOriginGroup请求参数结构体
 */
export interface CreateOriginGroupRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
      * 源站类型，取值有：
<li>self：自有源站；</li>
<li>third_party：第三方源站；</li>
<li>cos：腾讯云COS源站。</li>
      */
  OriginType: string

  /**
   * 源站组名称。
   */
  OriginGroupName: string

  /**
      * 源站配置类型，当OriginType=self时，取值有：
<li>area：按区域配置；</li>
<li>weight： 按权重配置；</li>
<li>proto： 按HTTP协议配置。</li>当OriginType=third_party/cos时放空。
      */
  ConfigurationType: string

  /**
   * 源站记录信息。
   */
  OriginRecords: Array<OriginRecord>
}

/**
 * Top类数据记录
 */
export interface TopDataRecord {
  /**
   * 查询维度值。
   */
  TypeKey: string

  /**
   * top数据排行。
   */
  DetailData: Array<TopDetailData>
}

/**
 * ModifyLoadBalancing请求参数结构体
 */
export interface ModifyLoadBalancingRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 负载均衡ID。
   */
  LoadBalancingId: string

  /**
      * 代理模式，取值有：
<li>dns_only：仅DNS；</li>
<li>proxied：开启代理。</li>
      */
  Type: string

  /**
   * 主源站源站组ID。
   */
  OriginGroupId: string

  /**
   * 备用源站源站组ID，当Type=proxied时可以填写，为空表示不使用备用源站。
   */
  BackupOriginGroupId: string

  /**
      * 当Type=dns_only时，指解析记录在DNS服务器缓存的生存时间。
取值范围60-86400，单位：秒，不填写使用默认值：600。
      */
  TTL?: number
}

/**
 * DescribeWebManagedRulesLog请求参数结构体
 */
export interface DescribeWebManagedRulesLogRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 筛选条件，key可选的值有：
<li>attackType：攻击类型；</li>
<li>riskLevel：风险等级；</li>
<li>action：执行动作（处置方式）；</li>
<li>ruleId：规则id；</li>
<li>sipCountryCode：ip所在国家；</li>
<li>attackIp：攻击ip；</li>
<li>oriDomain：被攻击的子域名；</li>
<li>eventId：事件id；</li>
<li>ua：用户代理；</li>
<li>requestMethod：请求方法；</li>
<li>uri：统一资源标识符。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * Waf托管规则组
 */
export interface WafGroup {
  /**
      * 执行动作，取值有：
<li> block：阻断；</li>
<li> observe：观察。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 防护级别，取值有：
<li> loose：宽松；</li>
<li> normal：正常；</li>
<li> strict：严格；</li>
<li> stricter：超严格；</li>
<li> custom：自定义。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level?: string

  /**
      * 规则类型id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TypeId?: number
}

/**
 * DescribeAvailablePlans返回参数结构体
 */
export interface DescribeAvailablePlansResponse {
  /**
      * 当前账户可购买套餐类型及相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PlanInfo: Array<PlanInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 速率限制模板
 */
export interface RateLimitTemplate {
  /**
      * 模板等级名称，取值有：
<li>sup_loose：超级宽松；</li>
<li>loose：宽松；</li>
<li>emergency：紧急；</li>
<li>normal：适中；</li>
<li>strict：严格；</li>
<li>close：关闭 - 仅精准速率限制生效。</li>
      */
  Mode: string

  /**
   * 模板值详情。仅出参返回。
   */
  RateLimitTemplateDetail?: RateLimitTemplateDetail
}

/**
 * DescribeWebProtectionTopData返回参数结构体
 */
export interface DescribeWebProtectionTopDataResponse {
  /**
      * CC防护的TopN数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TopEntry>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 托管规则
 */
export interface WafGroupInfo {
  /**
   * 托管规则组列表。
   */
  WafGroupDetails: Array<WafGroupDetail>

  /**
      * 规则组等级，取值有：
<li> loose：宽松；</li>
<li> normal：正常；</li>
<li> strict：严格；</li>
<li> stricter：超严格。</li>
      */
  Level: string

  /**
   * 保留字段。
   */
  Act: string

  /**
      * 模式，取值有：
<li> block：阻断；</li>
<li> observe：观察。</li>
      */
  Mode: string

  /**
      * 开关，取值有：
<li> on：开启；</li>
<li> off：关闭。</li>
      */
  Switch: string
}

/**
 * https 服务端证书配置
 */
export interface DefaultServerCertInfo {
  /**
      * 服务器证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertId: string

  /**
      * 证书备注名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Alias?: string

  /**
      * 证书类型，取值有：
<li>default: 默认证书;</li>
<li>upload:用户上传;</li>
<li>managed:腾讯云托管。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: string

  /**
      * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime?: string

  /**
      * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  EffectiveTime?: string

  /**
      * 证书公用名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CommonName?: string

  /**
      * 证书SAN域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubjectAltName?: Array<string>

  /**
      * 部署状态，取值有：
<li>processing: 部署中;</li>
<li>deployed: 已部署。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string

  /**
      * Status为失败时,此字段返回失败原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message?: string
}

/**
 * 离线缓存是否开启
 */
export interface OfflineCache {
  /**
      * 离线缓存是否开启，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string
}

/**
 * DescribeDDoSAttackTopData返回参数结构体
 */
export interface DescribeDDoSAttackTopDataResponse {
  /**
      * DDoS攻击Top数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TopEntry>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全规则（cc/waf/bot）相关信息
 */
export interface SecRuleRelatedInfo {
  /**
   * 规则ID列表（99999为无效id）。
   */
  RuleId: number

  /**
      * 执行动作（处置方式），取值有：
<li>trans ：通过 ；</li>
<li>alg ：算法挑战 ；</li>
<li>drop ：丢弃 ；</li>
<li>ban ：封禁源ip ；</li>
<li>redirect ：重定向 ；</li>
<li>page ：返回指定页面 ；</li>
<li>monitor ：观察 。</li>
      */
  Action: string

  /**
      * 风险等级（waf日志中独有），取值有：
<li>high risk ：高危 ；</li>
<li>middle risk ：中危 ；</li>
<li>low risk ：低危 ；</li>
<li>unkonw ：未知 。</li>
      */
  RiskLevel: string

  /**
      * 规则等级，取值有：
<li>normal  ：正常 。</li>
      */
  RuleLevel: string

  /**
   * 规则描述。
   */
  Description: string

  /**
   * 规则类型名称。
   */
  RuleTypeName: string
}

/**
 * DescribeSpeedTestingQuota返回参数结构体
 */
export interface DescribeSpeedTestingQuotaResponse {
  /**
   * 配额数据。
   */
  SpeedTestingQuota: SpeedTestingQuota

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRules请求参数结构体
 */
export interface DeleteRulesRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
   * 指定删除的规则 ID 列表。
   */
  RuleIds: Array<string>
}

/**
 * 例外规则生效的具体条件
 */
export interface ExceptUserRuleCondition {
  /**
      * 匹配项，取值有：
<li>host：请求域名；</li>
<li>sip：客户端IP；</li>
<li>ua：User-Agent；</li>
<li>cookie：会话 Cookie；</li>
<li>cgi：CGI 脚本；</li>
<li>xff：XFF 扩展头部；</li>
<li>url：请求 URL；</li>
<li>accept：请求内容类型；</li>
<li>method：请求方式；</li>
<li>header：请求头部；</li>
<li>sip_proto：网络层协议。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  MatchFrom?: string

  /**
   * 匹配项的参数。当 MatchFrom 为 header 时，可以填入 header 的 key 作为参数。
   */
  MatchParam?: string

  /**
      * 匹配操作符，取值有：
<li>equal：字符串等于；</li>
<li>not_equal：数值不等于；</li>
<li>include：字符包含；</li>
<li>not_include：字符不包含；</li>
<li>match：ip匹配；</li>
<li>not_match：ip不匹配；</li>
<li>include_area：地域包含；</li>
<li>is_empty：存在字段但值为空；</li>
<li>not_exists：不存在关键字段；</li>
<li>regexp：正则匹配；</li>
<li>len_gt：数值大于；</li>
<li>len_lt：数值小于；</li>
<li>len_eq：数值等于；</li>
<li>match_prefix：前缀匹配；</li>
<li>match_suffix：后缀匹配；</li>
<li>wildcard：通配符。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Operator?: string

  /**
      * 匹配值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MatchContent?: string
}

/**
 * ModifyDefaultCertificate请求参数结构体
 */
export interface ModifyDefaultCertificateRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 默认证书ID。
   */
  CertId?: string

  /**
      * 证书状态，取值有：
<li>deployed ：部署证书；</li>
<li>disabled ：禁用证书。</li>失败状态下重新deployed即可重试。
      */
  Status?: string
}

/**
 * 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态
 */
export interface MaxAge {
  /**
      * 是否遵循源站，取值有：
<li>on：遵循源站，忽略MaxAge 时间设置；</li>
<li>off：不遵循源站，使用MaxAge 时间设置。</li>
      */
  FollowOrigin?: string

  /**
      * MaxAge 时间设置，单位秒，最大365天。
注意：时间为0，即不缓存。
      */
  MaxAgeTime?: number
}

/**
 * DeleteApplicationProxy返回参数结构体
 */
export interface DeleteApplicationProxyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全数据维度值信息
 */
export interface SecEntryValue {
  /**
   * 指标名称。
   */
  Metric: string

  /**
   * 时序数据详情。
   */
  Detail: Array<TimingDataItem>

  /**
   * 最大值。
   */
  Max: number

  /**
   * 平均值。
   */
  Avg: number

  /**
   * 数据总和。
   */
  Sum: number
}

/**
 * ModifyAlarmDefaultThreshold返回参数结构体
 */
export interface ModifyAlarmDefaultThresholdResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCredential请求参数结构体
 */
export type CreateCredentialRequest = null

/**
 * ModifyRule请求参数结构体
 */
export interface ModifyRuleRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
   * 规则名称，字符串名称长度 1~255。
   */
  RuleName: string

  /**
   * 规则内容。
   */
  Rules: Array<Rule>

  /**
   * 规则 ID。
   */
  RuleId: string

  /**
      * 规则状态，取值有：
<li> enable: 启用； </li>
<li> disable: 未启用。</li>
      */
  Status: string
}

/**
 * DescribePrefetchTasks返回参数结构体
 */
export interface DescribePrefetchTasksResponse {
  /**
   * 该查询条件总共条目数。
   */
  TotalCount: number

  /**
   * 任务结果列表。
   */
  Tasks: Array<Task>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebManagedRulesHitRuleDetail请求参数结构体
 */
export interface DescribeWebManagedRulesHitRuleDetailRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 子域名列表，不填默认选择全部全部子域名。
   */
  Domains?: Array<string>

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天 。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 筛选条件，key可选的值有：
<li>action ：执行动作 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * ModifySecurityWafGroupPolicy请求参数结构体
 */
export interface ModifySecurityWafGroupPolicyRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名。
   */
  Entity: string

  /**
      * 总开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>不填默认为上次的配置。
      */
  Switch?: string

  /**
      * 规则等级，取值有：
<li> loose：宽松；</li>
<li> normal：正常；</li>
<li> strict：严格；</li>
<li> stricter：超严格；</li>
<li> custom：自定义。</li>不填默认为上次的配置。
      */
  Level?: string

  /**
      * 处置方式，取值有：
<li> block：阻断；</li>
<li> observe：观察。</li>不填默认为上次的配置。
      */
  Mode?: string

  /**
   * 托管规则。不填默认为上次的配置。
   */
  WafRules?: WafRule

  /**
   * AI引擎模式。不填默认为上次的配置。
   */
  AiRule?: AiRule

  /**
   * 托管规则等级组。不填默认为上次的配置。
   */
  WafGroups?: Array<WafGroup>
}

/**
 * DescribeZoneSetting请求参数结构体
 */
export interface DescribeZoneSettingRequest {
  /**
   * 站点ID。
   */
  ZoneId: string
}

/**
 * ModifySecurityPolicy请求参数结构体
 */
export interface ModifySecurityPolicyRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名/应用名。
   */
  Entity: string

  /**
   * 安全配置。
   */
  SecurityConfig: SecurityConfig
}

/**
 * ModifyDnssec请求参数结构体
 */
export interface ModifyDnssecRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
      * DNSSEC状态，取值有
<li>enabled：开启；</li>
<li>disabled：关闭。</li>
      */
  Status: string
}

/**
 * 智能加速配置
 */
export interface SmartRouting {
  /**
      * 智能加速配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string
}

/**
 * CreateApplicationProxy返回参数结构体
 */
export interface CreateApplicationProxyResponse {
  /**
   * 新增的四层代理应用ID。
   */
  ProxyId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内容管理任务结果
 */
export interface Task {
  /**
   * 任务 ID。
   */
  JobId: string

  /**
   * 状态。
   */
  Status: string

  /**
   * 资源。
   */
  Target: string

  /**
   * 任务类型。
   */
  Type: string

  /**
   * 任务创建时间。
   */
  CreateTime: string

  /**
   * 任务完成时间。
   */
  UpdateTime: string
}

/**
 * Bot攻击日志
 */
export interface BotLog {
  /**
   * 攻击时间，采用unix秒级时间戳。
   */
  AttackTime: number

  /**
   * 攻击源（客户端）ip。
   */
  AttackIp: string

  /**
   * 受攻击域名。
   */
  Domain: string

  /**
   * URI。
   */
  RequestUri: string

  /**
      * 攻击类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackType: string

  /**
   * 请求方法。
   */
  RequestMethod: string

  /**
   * 攻击内容。
   */
  AttackContent: string

  /**
      * 攻击等级。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskLevel: string

  /**
      * 规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
   * IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)。
   */
  SipCountryCode: string

  /**
   * 请求（事件）ID。
   */
  EventId: string

  /**
      * 处置方式。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisposalMethod: string

  /**
      * HTTP日志。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HttpLog: string

  /**
   * user agent。
   */
  Ua: string

  /**
      * 检出方法。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetectionMethod: string

  /**
      * 置信度。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Confidence: string

  /**
      * 恶意度。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Maliciousness: string

  /**
      * 规则相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleDetailList: Array<SecRuleRelatedInfo>

  /**
      * Bot标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label: string
}

/**
 * 拨测分地域统计数据
 */
export interface DistrictStatistics {
  /**
   * ISO 3166-2 国家/地区简写，详情请参考[ISO 3166-2](https://zh.m.wikipedia.org/zh-hans/ISO_3166-2)。
   */
  Alpha2: string

  /**
   * 整体拨测用时，单位ms。
   */
  LoadTime: number
}

/**
 * CreateIpTableList请求参数结构体
 */
export interface CreateIpTableListRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名/应用名。
   */
  Entity: string

  /**
   * 基础访问管控Ip规则列表。
   */
  IpTableRules: Array<IpTableRule>
}

/**
 * ModifyDDoSPolicyHost请求参数结构体
 */
export interface ModifyDDoSPolicyHostRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名/应用名。
   */
  Host: string

  /**
      * 加速开关，取值有：
<li>on：开启加速；</li>
<li>off：关闭加速。</li>
      */
  AccelerateType: string

  /**
   * 策略id。
   */
  PolicyId: number

  /**
      * 安全开关，取值有：
<li>on：开启安全；</li>
<li>off：关闭安全。</li>
      */
  SecurityType: string
}

/**
 * DescribeIdentifications返回参数结构体
 */
export interface DescribeIdentificationsResponse {
  /**
   * 符合条件的站点个数。
   */
  TotalCount: number

  /**
   * 站点验证信息列表。
   */
  Identifications: Array<Identification>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePurgeTask返回参数结构体
 */
export interface CreatePurgeTaskResponse {
  /**
   * 任务ID。
   */
  JobId: string

  /**
      * 失败的任务列表及原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedList: Array<FailReason>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApplicationProxyRule返回参数结构体
 */
export interface DeleteApplicationProxyRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityDropPage请求参数结构体
 */
export interface CreateSecurityDropPageRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 站点子域名。
   */
  Entity: string

  /**
   * 自定义页面的文件名。
   */
  Name: string

  /**
   * 自定义页面的内容，本字段的内容需要将数据经过urlencode后传入。
   */
  Content: string

  /**
      * 上传的类型，取值有：
<li> file：将页面文件内容进行urlencode编码，填入Content字段；</li>
<li> url：将待上传的url地址进行urlencode编码，填入Content字段，即时下载，内容不会自动更新。</li>
      */
  Type: string

  /**
      * 页面所属的模块，取值有：
<li> waf ：托管规则模块；</li>
<li> rate：自定义规则模块。</li>
      */
  Module: string
}

/**
 * 例外规则，用于配置需要跳过特定场景的规则
 */
export interface ExceptConfig {
  /**
      * 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
      * 例外规则详情。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExceptUserRules?: Array<ExceptUserRule>
}

/**
 * DeleteOriginGroup请求参数结构体
 */
export interface DeleteOriginGroupRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 源站组ID。
   */
  OriginGroupId: string
}

/**
 * DescribeWebProtectionHitRuleDetail返回参数结构体
 */
export interface DescribeWebProtectionHitRuleDetailResponse {
  /**
      * cc防护命中规则列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecHitRuleInfo>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 精准防护条件
 */
export interface AclCondition {
  /**
      * 匹配字段，取值有：
<li>host：请求域名；</li>
<li>sip：客户端IP；</li>
<li>ua：User-Agent；</li>
<li>cookie：会话 Cookie；</li>
<li>cgi：CGI 脚本；</li>
<li>xff：XFF 扩展头部；</li>
<li>url：请求 URL；</li>
<li>accept：请求内容类型；</li>
<li>method：请求方式；</li>
<li>header：请求头部；</li>
<li>sip_proto：网络层协议。</li>
      */
  MatchFrom: string

  /**
   * 匹配字符串。当 MatchFrom 为 header 时，可以填入 header 的 key 作为参数。
   */
  MatchParam: string

  /**
      * 匹配关系，取值有：
<li>equal：字符串等于；</li>
<li>not_equal：数值不等于；</li>
<li>include：字符包含；</li>
<li>not_include：字符不包含；</li>
<li>match：ip匹配；</li>
<li>not_match：ip不匹配；</li>
<li>include_area：地域包含；</li>
<li>is_empty：存在字段但值为空；</li>
<li>not_exists：不存在关键字段；</li>
<li>regexp：正则匹配；</li>
<li>len_gt：数值大于；</li>
<li>len_lt：数值小于；</li>
<li>len_eq：数值等于；</li>
<li>match_prefix：前缀匹配；</li>
<li>match_suffix：后缀匹配；</li>
<li>wildcard：通配符。</li>
      */
  Operator: string

  /**
   * 匹配内容。
   */
  MatchContent: string
}

/**
 * 用户画像规则详情
 */
export interface PortraitManagedRuleDetail {
  /**
      * 规则唯一id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId?: number

  /**
      * 规则的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 规则所属类型的名字, botdb(用户画像)。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleTypeName?: string

  /**
      * 规则内的功能分类Id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClassificationId?: number

  /**
      * 规则当前所属动作状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string
}

/**
 * 离线日志详细信息
 */
export interface L7OfflineLog {
  /**
   * 日志打包开始时间。
   */
  LogTime: number

  /**
   * 子域名。
   */
  Domain: string

  /**
   * 原始大小，单位byte。
   */
  Size: number

  /**
   * 下载地址。
   */
  Url: string

  /**
   * 日志数据包名。
   */
  LogPacketName: string

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内; </li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area: string
}

/**
 * CreateLogTopicTask返回参数结构体
 */
export interface CreateLogTopicTaskResponse {
  /**
   * 创建成功的主题ID。
   */
  TopicId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用代理规则
 */
export interface ApplicationProxyRule {
  /**
      * 协议，取值有：
<li>TCP：TCP协议；</li>
<li>UDP：UDP协议。</li>
      */
  Proto: string

  /**
      * 端口，支持格式：
单个端口，如：80。
端口段，如：81-82。表示81，82两个端口。
注意：一条规则最多可填写20个端口。
      */
  Port: Array<string>

  /**
      * 源站类型，取值有：
<li>custom：手动添加；</li>
<li>origins：源站组。</li>
      */
  OriginType: string

  /**
      * 源站信息：
当OriginType=custom时，表示一个或多个源站，如：
OriginValue=["8.8.8.8:80","9.9.9.9:80"]
OriginValue=["test.com:80"]；
当OriginType=origins时，要求有且仅有一个元素，表示源站组ID，如：
OriginValue=["origin-537f5b41-162a-11ed-abaa-525400c5da15"]。
      */
  OriginValue: Array<string>

  /**
   * 规则ID。
   */
  RuleId?: string

  /**
      * 状态，取值有：
<li>online：启用；</li>
<li>offline：停用；</li>
<li>progress：部署中；</li>
<li>stopping：停用中；</li>
<li>fail：部署失败/停用失败。</li>
      */
  Status?: string

  /**
      * 传递客户端IP，取值有：
<li>TOA：TOA（仅Proto=TCP时可选）；</li>
<li>PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；</li>
<li>PPV2：Proxy Protocol传递，协议版本V2；</li>
<li>OFF：不传递。</li>默认值：OFF。
      */
  ForwardClientIp?: string

  /**
      * 是否开启会话保持，取值有：
<li>true：开启；</li>
<li>false：关闭。</li>默认值：false。
      */
  SessionPersist?: boolean
}

/**
 * DescribeDnsData返回参数结构体
 */
export interface DescribeDnsDataResponse {
  /**
   * 统计数据。
   */
  Data: Array<DnsData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 站点信息
 */
export interface Zone {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
   * 站点当前使用的 NS 列表。
   */
  OriginalNameServers: Array<string>

  /**
   * 腾讯云分配的 NS 列表。
   */
  NameServers: Array<string>

  /**
      * 站点状态，取值有：
<li> active：NS 已切换； </li>
<li> pending：NS 未切换；</li>
<li> moved：NS 已切走；</li>
<li> deactivated：被封禁。 </li>
      */
  Status: string

  /**
      * 站点接入方式，取值有
<li> full：NS 接入； </li>
<li> partial：CNAME 接入。</li>
      */
  Type: string

  /**
   * 站点是否关闭。
   */
  Paused: boolean

  /**
      * 是否开启cname加速，取值有：
<li> enabled：开启；</li>
<li> disabled：关闭。</li>
      */
  CnameSpeedUp: string

  /**
      * cname 接入状态，取值有：
<li> finished：站点已验证；</li>
<li> pending：站点验证中。</li>
      */
  CnameStatus: string

  /**
   * 资源标签列表。
   */
  Tags: Array<Tag>

  /**
   * 计费资源列表。
   */
  Resources: Array<Resource>

  /**
   * 站点创建时间。
   */
  CreatedOn: string

  /**
   * 站点修改时间。
   */
  ModifiedOn: string

  /**
      * 站点接入地域，取值有：
<li> global：全球；</li>
<li> mainland：中国大陆；</li>
<li> overseas：境外区域。</li>
      */
  Area: string

  /**
      * 用户自定义 NS 信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VanityNameServers: VanityNameServers

  /**
      * 用户自定义 NS IP 信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VanityNameServersIps: Array<VanityNameServersIps>
}

/**
 * DescribeDDoSAttackSourceEvent请求参数结构体
 */
export interface DescribeDDoSAttackSourceEventRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 协议类型，取值有：
<li>tcp：tcp协议；</li>
<li>udp：udp协议；</li>
<li>all：全部协议。</li>不填默认为: all，表示获取全部协议类型。
      */
  ProtocolType?: string

  /**
   * DDoS策略组集合，不填默认选择全部策略。
   */
  PolicyIds?: Array<number>

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * ModifyLoadBalancingStatus请求参数结构体
 */
export interface ModifyLoadBalancingStatusRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 负载均衡ID。
   */
  LoadBalancingId: string

  /**
      * 负载均衡状态，取值有：
<li>online：启用；</li>
<li>offline：停用。</li>
      */
  Status: string
}

/**
 * DDoS攻击事件对象
 */
export interface DDoSAttackEvent {
  /**
   * 事件ID。
   */
  EventId: string

  /**
   * 攻击类型(对应交互事件名称)。
   */
  AttackType: string

  /**
   * 攻击状态。
   */
  AttackStatus: number

  /**
   * 攻击最大带宽。
   */
  AttackMaxBandWidth: number

  /**
   * 攻击包速率峰值。
   */
  AttackPacketMaxRate: number

  /**
   * 攻击开始时间，单位为s。
   */
  AttackStartTime: number

  /**
   * 攻击结束时间，单位为s。
   */
  AttackEndTime: number

  /**
      * DDoS策略组ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyId: number

  /**
      * 站点ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: string
}

/**
 * 拦截页面的配置信息
 */
export interface DropPageDetail {
  /**
      * 拦截页面的唯一Id。系统默认包含一个自带拦截页面，Id值为0。
该Id可通过创建拦截页面接口进行上传获取。如传入0，代表使用系统默认拦截页面。
      */
  PageId: number

  /**
   * 拦截页面的HTTP状态码。状态码范围是100-600。
   */
  StatusCode: number

  /**
   * 页面文件名或url。
   */
  Name: string

  /**
      * 页面的类型，取值有：
<li> file：页面文件内容；</li>
<li> url：上传的url地址。</li>
      */
  Type: string
}

/**
 * SwitchLogTopicTask返回参数结构体
 */
export interface SwitchLogTopicTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDnsRecord返回参数结构体
 */
export interface CreateDnsRecordResponse {
  /**
   * DNS解析记录ID。
   */
  DnsRecordId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * https 服务端证书配置
 */
export interface ServerCertInfo {
  /**
      * 服务器证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertId: string

  /**
      * 证书备注名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Alias?: string

  /**
      * 证书类型，取值有：
<li>default：默认证书；</lil>
<li>upload：用户上传；</li>
<li>managed:腾讯云托管。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: string

  /**
      * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime?: string

  /**
      * 证书部署时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeployTime?: string

  /**
      * 签名算法。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SignAlgo?: string
}

/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
  /**
   * 分页查询偏移量。默认值：0。
   */
  Offset?: number

  /**
   * 分页查询限制数目。默认值：20，最大值：1000。
   */
  Limit?: number

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-name<br>   按照【<strong>站点名称</strong>】进行过滤。<br>   类型：String<br>   必选：否<li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-xxx。<br>   类型：String<br>   必选：否<li>status<br>   按照【<strong>站点状态</strong>】进行过滤。<br>   类型：String<br>   必选：否<li>tag-key<br>   按照【<strong>标签键</strong>】进行过滤。<br>   类型：String<br>   必选：否<li>tag-value<br>   按照【<strong>标签值</strong>】进行过滤。<br>   类型：String<br>   必选：否<li>Fuzzy<br>   按照【<strong>是否模糊查询</strong>】进行过滤。仅支持过滤字段名为zone-name。模糊查询时，Values长度最小为1。<br>   类型：Boolean<br>   必选：否<br>   默认值：false
      */
  Filters?: Array<AdvancedFilter>
}

/**
 * 源站组记录
 */
export interface OriginRecord {
  /**
   * 源站记录值，不包含端口信息，可以为：IPv4，IPv6，域名格式。
   */
  Record: string

  /**
   * 源站记录ID。
   */
  RecordId?: string

  /**
   * 源站端口，取值范围：[1-65535]。
   */
  Port?: number

  /**
      * 当源站配置类型ConfigurationType=weight时，表示权重。
不配置权重信息时，所有源站组记录统一填写为0或者不填写，表示多个源站轮询回源。
配置权重信息时，取值为[1-100]，多个源站权重总和应为100，表示多个源站按照权重回源。
当源站配置类型ConfigurationType=proto时，表示权重。
不配置权重信息时，所有源站组记录统一填写为0或者不填写，表示多个源站轮询回源。
配置权重信息时，取值为[1-100]，源站组内Proto相同的多个源站权重总和应为100，表示多个源站按照权重回源。
      */
  Weight?: number

  /**
      * 当源站配置类型ConfigurationType=proto时，表示源站的协议类型，将按照客户端请求协议回到相应的源站，取值有：
<li>http：HTTP协议源站；</li>
<li>https：HTTPS协议源站。</li>
      */
  Proto?: string

  /**
      * 当源站配置类型ConfigurationType=area时，表示区域，为空表示全部地区。取值为iso-3166中alpha-2编码或者大洲区域代码。大洲区域代码取值为：
<li>Asia：亚洲；</li>
<li>Europe：欧洲；</li>
<li>Africa：非洲；</li>
<li>Oceania：大洋洲；</li>
<li>Americas：美洲。</li>源站组记录中，至少需要有一项为全部地区。
      */
  Area?: Array<string>

  /**
      * 当源站类型OriginType=third_part时有效
是否私有鉴权，取值有：
<li>true：使用私有鉴权；</li>
<li>false：不使用私有鉴权。</li>不填写，默认值为：false。
      */
  Private?: boolean

  /**
   * 当源站类型Private=true时有效，表示私有鉴权使用参数。
   */
  PrivateParameters?: Array<PrivateParameter>
}

/**
 * CreateLoadBalancing返回参数结构体
 */
export interface CreateLoadBalancingResponse {
  /**
   * 负载均衡ID。
   */
  LoadBalancingId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLogTopicTask请求参数结构体
 */
export interface DeleteLogTopicTaskRequest {
  /**
   * 待删除的推送任务ID。
   */
  TopicId: string

  /**
   * 推送任务所属日志集地域。
   */
  LogSetRegion: string
}

/**
 * 自定义 nameservers
 */
export interface VanityNameServers {
  /**
      * 自定义 ns 开关，取值有：
<li> on：开启；</li>
<li> off：关闭。</li>
      */
  Switch: string

  /**
   * 自定义 ns 列表。
   */
  Servers?: Array<string>
}

/**
 * DescribeDnsRecords请求参数结构体
 */
export interface DescribeDnsRecordsRequest {
  /**
   * DNS记录所属站点ID。不填写该参数默认返回所有站点下的记录。
   */
  ZoneId?: string

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>record-id<br>   按照【<strong>DNS记录id</strong>】进行过滤。DNS记录ID形如：record-1a8df68z。<br>   类型：String<br>   必选：否
<li>record-name<br>   按照【<strong>DNS记录名称</strong>】进行过滤。<br>   类型：String<br>   必选：否
<li>record-type<br>   按照【<strong>DNS记录类型</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   A：将域名指向一个外网 IPv4 地址，如 8.8.8.8<br>   AAAA：将域名指向一个外网 IPv6 地址<br>   CNAME：将域名指向另一个域名，再由该域名解析出最终 IP 地址<br>   TXT：对域名进行标识和说明，常用于域名验证和 SPF 记录（反垃圾邮件）<br>   NS：如果需要将子域名交给其他 DNS 服务商解析，则需要添加 NS 记录。根域名无法添加 NS 记录<br>   CAA：指定可为本站点颁发证书的 CA<br>   SRV：标识某台服务器使用了某个服务，常见于微软系统的目录管理<br>   MX：指定收件人邮件服务器。
<li>mode<br>   按照【<strong>代理模式</strong>】进行过滤。<br>   类型：String<br>   必选：否<br>   可选项：<br>   dns_only：仅DNS解析<br>   proxied：代理加速
<li>ttl<br>   按照【<strong>解析生效时间</strong>】进行过滤。<br>   类型：string<br>   必选：否
      */
  Filters?: Array<AdvancedFilter>

  /**
      * 列表排序方式，取值有：
<li>asc：升序排列；</li>
<li>desc：降序排列。</li>默认值为asc。
      */
  Direction?: string

  /**
      * 匹配方式，取值有：
<li>all：返回匹配所有查询条件的记录；</li>
<li>any：返回匹配任意一个查询条件的记录。</li>默认值为all。
      */
  Match?: string

  /**
   * 分页查询限制数目，默认值：20，上限：1000。
   */
  Limit?: number

  /**
   * 分页查询偏移量，默认为 0。
   */
  Offset?: number

  /**
      * 排序依据，取值有：
<li>content：DNS记录内容；</li>
<li>created_on：DNS记录创建时间；</li>
<li>mode：代理模式；</li>
<li>record-name：DNS记录名称；</li>
<li>ttl：解析记录生效时间；</li>
<li>record-type：DNS记录类型。</li>默认根据record-type, recrod-name属性组合排序。
      */
  Order?: string
}

/**
 * ModifyDnsRecord请求参数结构体
 */
export interface ModifyDnsRecordRequest {
  /**
   * 记录ID。
   */
  DnsRecordId: string

  /**
   * 站点ID。
   */
  ZoneId: string

  /**
      * DNS记录类型，取值有：
<li>A：将域名指向一个外网 IPv4 地址，如 8.8.8.8；</li>
<li>AAAA：将域名指向一个外网 IPv6 地址；</li>
<li>MX：用于邮箱服务器，相关记录值/优先级参数由邮件注册商提供。存在多条 MX 记录时，优先级越低越优先；</li>
<li>CNAME：将域名指向另一个域名，再由该域名解析出最终 IP 地址；</li>
<li>TXT：对域名进行标识和说明，常用于域名验证和 SPF 记录（反垃圾邮件）；</li>
<li>NS：如果需要将子域名交给其他 DNS 服务商解析，则需要添加 NS 记录。根域名无法添加 NS 记录；</li>
<li>CAA：指定可为本站点颁发证书的 CA；</li>
<li>SRV：标识某台服务器使用了某个服务，常见于微软系统的目录管理。</li>不填写保持原有配置。
      */
  DnsRecordType?: string

  /**
   * 记录名称，由主机记录+站点名称组成，不填写保持原有配置。
   */
  DnsRecordName?: string

  /**
   * 记录内容，不填写保持原有配置。
   */
  Content?: string

  /**
   * 缓存时间，数值越小，修改记录各地生效时间越快，默认为300，单位：秒，不填写保持原有配置。
   */
  TTL?: number

  /**
   * 该参数在修改MX记录时生效，值越小优先级越高，用户可指定值范围为1~50，不指定默认为0，不填写保持原有配置。
   */
  Priority?: number

  /**
      * 代理模式，取值有：
<li>dns_only：仅DNS解析；</li>
<li>proxied：代理加速。</li>不填写保持原有配置。
      */
  Mode?: string
}

/**
 * DescribeDefaultCertificates请求参数结构体
 */
export interface DescribeDefaultCertificatesRequest {
  /**
      * 过滤条件，Filters.Values的上限为5。详细的过滤条件如下：
<li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-xxx。<br>   类型：String<br>   必选：是
      */
  Filters: Array<Filter>

  /**
   * 分页查询偏移量。默认值：0。
   */
  Offset?: number

  /**
   * 分页查询限制数目。默认值：20，最大值：100。
   */
  Limit?: number
}

/**
 * ModifyApplicationProxyRule返回参数结构体
 */
export interface ModifyApplicationProxyRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebProtectionHitRuleDetail请求参数结构体
 */
export interface DescribeWebProtectionHitRuleDetailRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 所属规则数据类型，支持的规则有：
<li>rate：限速规则；</li>
<li>acl：自定义规则。</li>
      */
  EntityType: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名列表，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
      * 筛选条件，key可选的值有：
<li>action：执行动作。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 查询时间粒度，支持的时间粒度有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DDoS配置
 */
export interface DDoS {
  /**
      * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string
}

/**
 * DescribeSecurityRuleId请求参数结构体
 */
export interface DescribeSecurityRuleIdRequest {
  /**
   * 规则Id数组。
   */
  RuleIdList: Array<number>

  /**
      * 规则类型，取值有：
<li>waf：web托管规则；</li>
<li>acl：自定义规则；</li>
<li>rate：速率限制规则；</li>
<li>bot：Bot基础规则。</li>
      */
  RuleType: string

  /**
   * 子域名/应用名。
   */
  Entity?: string
}

/**
 * DDoS7层应用
 */
export interface DDoSHost {
  /**
      * 二级域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Host?: string

  /**
      * 域名状态；
init  待切ns
offline 需要dns开启站点加速
process 在部署中，稍等一会
online 正常状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string

  /**
      * 加速开关；on-开启加速；off-关闭加速（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强）
注意：此字段可能返回 null，表示取不到有效值。
      */
  AccelerateType?: string

  /**
      * 安全开关；on-开启安全；off-关闭安全（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强）
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityType?: string
}

/**
 * DownloadL7Logs请求参数结构体
 */
export interface DownloadL7LogsRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 子域名集合，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
}

/**
 * DeleteLoadBalancing返回参数结构体
 */
export interface DeleteLoadBalancingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则引擎规则详情
 */
export interface RuleItem {
  /**
   * 规则ID。
   */
  RuleId: string

  /**
   * 规则名称，名称字符串长度 1~255。
   */
  RuleName: string

  /**
      * 规则状态，取值有:
<li> enable: 启用； </li>
<li> disable: 未启用。 </li>
      */
  Status: string

  /**
   * 规则内容。
   */
  Rules: Array<Rule>

  /**
   * 规则优先级, 值越大优先级越高，最小为 1。
   */
  RulePriority: number
}

/**
 * DescribeAddableEntityList返回参数结构体
 */
export interface DescribeAddableEntityListResponse {
  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
      * 可添加的实体列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  EntityList: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 缓存时间设置
 */
export interface Cache {
  /**
      * 缓存配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
      * 缓存过期时间设置。
单位为秒，最大可设置为 365 天。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheTime?: number

  /**
      * 是否开启强制缓存，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreCacheControl?: string
}

/**
 * DescribeBotHitRuleDetail请求参数结构体
 */
export interface DescribeBotHitRuleDetailRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 子域名列表，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 筛选条件，key可选的值有：
<li>action: 执行动作。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据； </li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * 域名配置信息
 */
export interface DetailHost {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
      * 加速服务状态，取值为：
<li> process：部署中；</li>
<li> online：已启动；</li>
<li> offline：已关闭。</li>
      */
  Status: string

  /**
   * 域名。
   */
  Host: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
   * 分配的Cname域名
   */
  Cname: string

  /**
   * 资源ID。
   */
  Id: string

  /**
   * 实例ID。
   */
  InstanceId: string

  /**
   * 锁状态。
   */
  Lock: number

  /**
   * 域名状态类型。
   */
  Mode: number

  /**
      * 域名加速地域，取值有：
<li> global：全球；</li>
<li> mainland：中国大陆；</li>
<li> overseas：境外区域。</li>
      */
  Area: string

  /**
      * 加速类型配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AccelerateType: AccelerateType

  /**
      * Https配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Https: Https

  /**
      * 缓存配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheConfig: CacheConfig

  /**
      * 源站配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Origin: Origin

  /**
      * 安全类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityType: SecurityType

  /**
      * 缓存键配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheKey: CacheKey

  /**
      * 智能压缩配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Compression: Compression

  /**
      * Waf防护配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Waf: Waf

  /**
      * CC防护配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CC: CC

  /**
      * DDoS防护配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoS: DDoS

  /**
      * 智能路由配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SmartRouting: SmartRouting

  /**
      * Ipv6访问配置项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ipv6: Ipv6
}

/**
 * DescribeSpeedTestingMetricData请求参数结构体
 */
export interface DescribeSpeedTestingMetricDataRequest {
  /**
   * 站点ID。
   */
  ZoneId: string
}

/**
 * 规则引擎条件参数
 */
export interface RuleCondition {
  /**
      * 运算符，取值有：
<li> equal: 等于； </li>
<li> notequal: 不等于。</li>
      */
  Operator: string

  /**
      * 匹配类型，取值有：
<li> 全部（站点任意请求）: host。 </li>
<li> 文件名: filename； </li>
<li> 文件后缀: extension； </li>
<li> HOST: host； </li>
<li> URL Full: full_url，当前站点下完整 URL 路径，必须包含 HTTP 协议，Host 和 路径； </li>
<li> URL Path: url，当前站点下 URL 路径的请求。 </li>
      */
  Target: string

  /**
      * 对应匹配类型的参数值，对应匹配类型的取值有：
<li> 文件后缀：jpg、txt等文件后缀；</li>
<li> 文件名称：例如 foo.jpg 中的 foo；</li>
<li> 全部（站点任意请求）： all； </li>
<li> HOST：当前站点下的 host ，例如www.maxx55.com；</li>
<li> URL Path：当前站点下 URL 路径的请求，例如：/example；</li>
<li> URL Full：当前站点下完整 URL 请求，必须包含 HTTP 协议，Host 和 路径，例如：https://www.maxx55.cn/example。</li>
      */
  Values: Array<string>
}

/**
 * DescribeOverviewL7Data返回参数结构体
 */
export interface DescribeOverviewL7DataResponse {
  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
      * 七层监控类时序流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TimingDataRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityPolicy请求参数结构体
 */
export interface DescribeSecurityPolicyRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名/应用名。
   */
  Entity: string
}

/**
 * 统计曲线数据项
 */
export interface TimingDataItem {
  /**
   * 返回数据对应时间点，采用unix秒级时间戳。
   */
  Timestamp: number

  /**
   * 具体数值。
   */
  Value: number
}

/**
 * RateLimit规则
 */
export interface RateLimitUserRule {
  /**
   * 速率限制统计阈值，单位是次，取值范围0-4294967294。
   */
  Threshold: number

  /**
   * 速率限制统计时间，取值范围 10/20/30/40/50/60 单位是秒。
   */
  Period: number

  /**
   * 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。
   */
  RuleName: string

  /**
      * 处置动作，取值有：
<li>monitor：观察；</li>
<li>drop：拦截；</li>
<li>alg：JavaScript挑战。</li>
      */
  Action: string

  /**
   * 惩罚时长，0-2天。
   */
  PunishTime: number

  /**
      * 处罚时长单位，取值有：
<li>second：秒；</li>
<li>minutes：分钟；</li>
<li>hour：小时。</li>
      */
  PunishTimeUnit: string

  /**
      * 规则状态，取值有：
<li>on：生效；</li>
<li>off：不生效。</li>
<li>hour：小时。</li>默认on生效。
      */
  RuleStatus: string

  /**
   * 规则详情。
   */
  AclConditions: Array<AclCondition>

  /**
   * 规则权重，取值范围0-100。
   */
  RulePriority: number

  /**
      * 规则id。仅出参使用。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 过滤词，取值有：
<li>host：域名；</li>
<li>sip：客户端ip。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreqFields?: Array<string>

  /**
      * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string
}

/**
 * ModifyDnsRecord返回参数结构体
 */
export interface ModifyDnsRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePlanForZone请求参数结构体
 */
export interface CreatePlanForZoneRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
      * 所要购买套餐的类型，取值有：
<li> sta: 全球内容分发网络（不包括中国大陆）标准版套餐； </li>
<li> sta_with_bot: 全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理；</li>
<li> sta_cm: 中国大陆内容分发网络标准版套餐； </li>
<li> sta_cm_with_bot: 中国大陆内容分发网络标准版套餐附带bot管理；</li>
<li> ent: 全球内容分发网络（不包括中国大陆）企业版套餐； </li>
<li> ent_with_bot: 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理；</li>
<li> ent_cm: 中国大陆内容分发网络企业版套餐； </li>
<li> ent_cm_with_bot: 中国大陆内容分发网络企业版套餐附带bot管理。</li>当前账户可购买套餐类型请以<a href="https://tcloud4api.woa.com/document/product/1657/80124?!preview&!document=1">DescribeAvailablePlans</a>返回为准。
      */
  PlanType: string
}

/**
 * DeleteLoadBalancing请求参数结构体
 */
export interface DeleteLoadBalancingRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 负载均衡ID。
   */
  LoadBalancingId: string
}

/**
 * 缓存键配置。
 */
export interface CacheKey {
  /**
      * 是否开启全路径缓存，取值有：
<li>on：开启全路径缓存（即关闭参数忽略）；</li>
<li>off：关闭全路径缓存（即开启参数忽略）。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  FullUrlCache?: string

  /**
      * 是否忽略大小写缓存，取值有：
<li>on：忽略；</li>
<li>off：不忽略。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreCase?: string

  /**
      * CacheKey中包含请求参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  QueryString?: QueryString
}

/**
 * DownloadL4Logs返回参数结构体
 */
export interface DownloadL4LogsResponse {
  /**
      * 四层离线日志数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<L4OfflineLog>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IP黑白名单及IP区域控制配置
 */
export interface IpTableConfig {
  /**
      * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭；</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 基础管控规则。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpTableRules?: Array<IpTableRule>
}

/**
 * DeleteOriginGroup返回参数结构体
 */
export interface DeleteOriginGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityDropPage返回参数结构体
 */
export interface CreateSecurityDropPageResponse {
  /**
   * 自定义页面上传后的唯一id。
   */
  PageId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 不同维度的测速数据。
 */
export interface SpeedTestingMetricData {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
   * 源站拨测信息。
   */
  OriginSpeedTestingInfo: Array<SpeedTestingInfo>

  /**
   * EO 拨测信息。
   */
  ProxySpeedTestingInfo: Array<SpeedTestingInfo>

  /**
   * 站点状态。
   */
  SpeedTestingStatus: SpeedTestingStatus

  /**
   * 优化建议。
   */
  OptimizeAction: Array<OptimizeAction>

  /**
      * EO 整体性能，单位ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyLoadTime: number

  /**
      * 源站整体性能，单位ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginLoadTime: number
}

/**
 * DescribeIdentifications请求参数结构体
 */
export interface DescribeIdentificationsRequest {
  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-name<br>   按照【<strong>站点名称</strong>】进行过滤。<br>   类型：String<br>   必选：是
      */
  Filters: Array<Filter>

  /**
   * 分页查询偏移量。默认值：0。
   */
  Offset?: number

  /**
   * 分页查询限制数目。默认值：20，最大值：1000。
   */
  Limit?: number
}

/**
 * ModifyHostsCertificate返回参数结构体
 */
export interface ModifyHostsCertificateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLogSet请求参数结构体
 */
export interface CreateLogSetRequest {
  /**
   * 日志集名称。
   */
  LogSetName: string

  /**
   * 日志集归属的地域。
   */
  LogSetRegion: string
}

/**
 * CreateIpTableList返回参数结构体
 */
export interface CreateIpTableListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则引擎常规类型的动作
 */
export interface NormalAction {
  /**
   * 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
   */
  Action: string

  /**
   * 参数。
   */
  Parameters: Array<RuleNormalActionParams>
}

/**
 * DescribeZoneSetting返回参数结构体
 */
export interface DescribeZoneSettingResponse {
  /**
      * 站点配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneSetting: ZoneSetting

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDoS黑白名单
 */
export interface DDoSAllowBlock {
  /**
   * 黑白名单数组。
   */
  DDoSAllowBlockRules: Array<DDoSAllowBlockRule>

  /**
      * 开关标识防护是否清空，取值有：
<li>off ：关闭黑白名单；</li>
<li>on ：开启黑白名单，需填写UserAllowBlockIp参数。</li>
      */
  Switch: string
}

/**
 * DescribePurgeTasks请求参数结构体
 */
export interface DescribePurgeTasksRequest {
  /**
   * 站点 ID。
   */
  ZoneId?: string

  /**
   * 查询起始时间。
   */
  StartTime?: string

  /**
   * 查询结束时间。
   */
  EndTime?: string

  /**
   * 分页查询偏移量，默认为0。
   */
  Offset?: number

  /**
   * 分页查限制数目，默认值：20，最大值：1000。
   */
  Limit?: number

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>job-id<br>   按照【<strong>任务ID</strong>】进行过滤。job-id形如：1379afjk91u32h，暂不支持多值。<br>   类型：String<br>   必选：否<br>   模糊查询：不支持。<li>target<br>   按照【<strong>目标资源信息</strong>】进行过滤。target形如：http://www.qq.com/1.txt，暂不支持多值。<br>   类型：String<br>   必选：否<br>   模糊查询：不支持。<li>domains<br>   按照【<strong>域名</strong>】进行过滤。domains形如：www.qq.com。<br>   类型：String<br>   必选：否<br>   模糊查询：不支持。<li>statuses<br>   按照【<strong>任务状态</strong>】进行过滤。<br>   必选：否<br>   模糊查询：不支持。<br>   可选项：<br>   processing：处理中<br>   success：成功<br>   failed：失败<br>   timeout：超时<li>type<br>   按照【<strong>清除缓存类型</strong>】进行过滤，暂不支持多值。<br>   类型：String<br>   必选：否<br>   模糊查询：不支持。<br>   可选项：<br>   purge_url：URL<br>   purge_prefix：前缀<br>   purge_all：全部缓存内容<br>   purge_host：Hostname
      */
  Filters?: Array<AdvancedFilter>
}

/**
 * IdentifyZone请求参数结构体
 */
export interface IdentifyZoneRequest {
  /**
   * 站点名称。
   */
  ZoneName: string
}

/**
 * 缓存规则配置。
 */
export interface CacheConfig {
  /**
      * 缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cache?: Cache

  /**
      * 不缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoCache?: NoCache

  /**
      * 遵循源站配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowOrigin?: FollowOrigin
}

/**
 * ModifyDDoSPolicy返回参数结构体
 */
export interface ModifyDDoSPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDoS特征过滤，下列可选入参按需求进行填写，可选字段不可全部不填写。
 */
export interface DDoSFeaturesFilter {
  /**
      * 执行动作，取值有：
<li>drop ：丢弃 ；</li>
<li>transmit ：放行 ；</li>
<li>drop_block ：丢弃并拉黑 ；</li>
<li>forward ：继续防护 。</li>
      */
  Action: string

  /**
      * 协议，取值有：
<li>tcp ：tcp协议 ；</li>
<li>udp ：udp协议 ；</li>
<li>icmp ：icmp协议 ；</li>
<li>all ：全部协议 。</li>
      */
  Protocol: string

  /**
   * 目标端口开始，取值范围0-65535。
   */
  DportStart?: number

  /**
   * 目标端口结束，取值范围0-65535。
   */
  DportEnd?: number

  /**
   * 最小包长，取值范围0-1500。
   */
  PacketMin?: number

  /**
   * 最大包长，取值范围0-1500。
   */
  PacketMax?: number

  /**
   * 源端口开始，取值范围0-65535。
   */
  SportStart?: number

  /**
   * 源端口结束，取值范围0-65535。
   */
  SportEnd?: number

  /**
      * 匹配方式1，【特征1】，取值有：
<li>pcre ：正则匹配 ；</li>
<li>sunday ：字符串匹配 。</li>默认为空字符串。
      */
  MatchType?: string

  /**
      * 取非判断，该参数对MatchType配合使用，【特征1】，取值有：
<li>0 ：匹配 ；</li>
<li>1 ：不匹配 。</li>
      */
  IsNot?: number

  /**
   * 偏移量1，【特征1】，取值范围0-1500。
   */
  Offset?: number

  /**
   * 检测包字符深度，【特征1】，取值范围1-1500。
   */
  Depth?: number

  /**
      * 匹配开始层级，层级参考计算机网络结构，取值有：
<li>begin_l5 ：载荷开始检测 ；</li>
<li>begin_l4 ：tcp/udp首部开始检测 ；</li>
<li>begin_l3 ：ip首部开始检测 。</li>
      */
  MatchBegin?: string

  /**
   * 正则或字符串匹配的内容，【特征1】。
   */
  Str?: string

  /**
      * 匹配方式2，【特征2】，取值有：
<li>pcre ：正则匹配 ；</li>
<li>sunday ：字符串匹配 。</li>默认为空字符串。
      */
  MatchType2?: string

  /**
      * 取非判断2，该参数对MatchType2配合使用，【特征2】，取值有：
<li>0 ：匹配 ；</li>
<li>1 ：不匹配 。</li>
      */
  IsNot2?: number

  /**
   * 偏移量2，【特征2】，取值范围0-1500。
   */
  Offset2?: number

  /**
   * 检测包字符深度，【特征2】，取值范围1-1500。
   */
  Depth2?: number

  /**
      * 匹配开始层级，层级参考计算机网络结构，取值有：
<li>begin_l5 ：载荷开始检测 ；</li>
<li>begin_l4 ：tcp/udp首部开始检测；</li>
<li>begin_l3 ：ip首部开始检测 。</li>
      */
  MatchBegin2?: string

  /**
   * 正则或字符串匹配的内容，【特征2】。
   */
  Str2?: string

  /**
   * 多特征关系，仅配置【特征1】时填 none，存在【特征2】配置可不填。
   */
  MatchLogic?: string
}

/**
 * 智能分析规则
 */
export interface IntelligenceRule {
  /**
      * 开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * 规则详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntelligenceRuleItems?: Array<IntelligenceRuleItem>
}

/**
 * DDoS黑白名单规则详情
 */
export interface DDoSAllowBlockRule {
  /**
   * 客户端IP，支持格式有：单IP、IP范围、网段、网段范围。例如"1.1.1.1","1.1.1.2-1.1.1.3","1.2.1.0/24-1.2.2.0/24"。
   */
  Ip: string

  /**
      * 类型，取值有：
<li> block ：丢弃 ；</li><li> allow ：允许。</li>
      */
  Type: string

  /**
   * 10位时间戳，例如1199116800。不填写系统取当前时间。
   */
  UpdateTime?: number
}

/**
 * DescribeZoneDDoSPolicy请求参数结构体
 */
export interface DescribeZoneDDoSPolicyRequest {
  /**
   * 站点Id。
   */
  ZoneId?: string
}

/**
 * ModifyLogTopicTask请求参数结构体
 */
export interface ModifyLogTopicTaskRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 日志集所属地区。
   */
  LogSetRegion: string

  /**
   * 日志集ID。
   */
  LogSetId: string

  /**
   * 日志主题ID。
   */
  TopicId: string

  /**
      * 数据推送类型，可选的类型有：
<li>domain：七层代理日志；</li>
<li>application：四层代理日志；</li>
<li>web-rateLiming：速率限制日志；</li>
<li>web-attack：Web攻击防护日志；</li>
<li>web-rule：自定义规则日志；</li>
<li>web-bot：Bot管理日志。</li>
      */
  EntityType?: string

  /**
   * 推送任务名。
   */
  TaskName?: string

  /**
   * 待更新的主题名称，不填表示不更新主题名称。
   */
  TopicName?: string

  /**
   * 更新后的日志集名称。
   */
  LogSetName?: string

  /**
   * 更新后的日志集保存时间。
   */
  Period?: number

  /**
   * 待添加的推送任务实体列表。
   */
  DropEntityList?: Array<string>

  /**
   * 待删除的推送任务实例列表。
   */
  AddedEntityList?: Array<string>
}

/**
 * DescribeDDoSAttackEvent请求参数结构体
 */
export interface DescribeDDoSAttackEventRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 协议类型，取值有：
<li>tcp：tcp协议；</li>
<li>udp：udp协议；</li>
<li>all：全部协议。</li>默认为: all，表示获取全部协议类型。
      */
  ProtocolType?: string

  /**
   * ddos策略组集合，不填默认选择全部策略。
   */
  PolicyIds?: Array<number>

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
   * 是否展示详细信息。
   */
  ShowDetail?: boolean

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DescribeWebProtectionClientIpList请求参数结构体
 */
export interface DescribeWebProtectionClientIpListRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
      * 查询的时间粒度，支持的粒度有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 筛选条件，key可选的值有：
<li>action：执行动作。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * ModifyDnssec返回参数结构体
 */
export interface ModifyDnssecResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSpeedTesting返回参数结构体
 */
export interface CreateSpeedTestingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 命中规则信息
 */
export interface SecHitRuleInfo {
  /**
   * 规则ID。
   */
  RuleId: number

  /**
   * 规则类型名称。
   */
  RuleTypeName: string

  /**
      * 执行动作（处置方式），取值有：
<li>trans ：通过 ；</li>
<li>alg ：算法挑战 ；</li>
<li>drop ：丢弃 ；</li>
<li>ban ：封禁源ip ；</li>
<li>redirect ：重定向 ；</li>
<li>page ：返回指定页面 ；</li>
<li>monitor ：观察 。</li>
      */
  Action: string

  /**
   * 命中时间，采用unix秒级时间戳。
   */
  HitTime: number

  /**
   * 请求数。
   */
  RequestNum: number

  /**
   * 规则描述。
   */
  Description: string

  /**
   * 子域名。
   */
  Domain: string
}

/**
 * DescribeOriginGroup请求参数结构体
 */
export interface DescribeOriginGroupRequest {
  /**
   * 分页查询偏移量，默认为0。
   */
  Offset: number

  /**
   * 分页查询限制数目，默认为10，取值：1-1000。
   */
  Limit: number

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-20hzkd4rdmy0<br>   类型：String<br>   必选：否<br>   模糊查询：不支持<li>origin-group-id<br>   按照【<strong>源站组ID</strong>】进行过滤。源站组ID形如：origin-2ccgtb24-7dc5-46s2-9r3e-95825d53dwe3a<br>   类型：String<br>   必选：否<br>   模糊查询：不支持<li>origin-group-name<br>   按照【<strong>源站组名称</strong>】进行过滤<br>   类型：String<br>   必选：否<br>   模糊查询：支持。使用模糊查询时，仅支持填写一个源站组名称
      */
  Filters?: Array<AdvancedFilter>
}

/**
 * DescribeLogTopicTasks返回参数结构体
 */
export interface DescribeLogTopicTasksResponse {
  /**
      * 推送任务列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicList: Array<ClsLogTopicInfo>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePlanForZone返回参数结构体
 */
export interface CreatePlanForZoneResponse {
  /**
   * 购买的资源名字列表。
   */
  ResourceNames: Array<string>

  /**
   * 购买的订单号列表。
   */
  DealNames: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogTopicTasks请求参数结构体
 */
export interface DescribeLogTopicTasksRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
}

/**
 * DescribeDDoSAttackEventDetail返回参数结构体
 */
export interface DescribeDDoSAttackEventDetailResponse {
  /**
   * DDoS攻击事件详情。
   */
  Data: DDoSAttackEventDetailData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单值指标数据
 */
export interface SingleTypeValue {
  /**
   * 指标名。
   */
  MetricName: string

  /**
   * 指标值。
   */
  DetailData: number
}

/**
 * CreateCredential返回参数结构体
 */
export interface CreateCredentialResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchLogTopicTask请求参数结构体
 */
export interface SwitchLogTopicTaskRequest {
  /**
   * 推送任务的主题ID。
   */
  TopicId: string

  /**
      * 是否开启推送，可选的动作有：
<li>true：开启推送任务；</li>
<li>false：关闭推送任务。</li>
      */
  IsOpen: boolean
}

/**
 * DeleteApplicationProxy请求参数结构体
 */
export interface DeleteApplicationProxyRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 代理ID。
   */
  ProxyId: string
}

/**
 * ModifyZoneStatus请求参数结构体
 */
export interface ModifyZoneStatusRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
      * 站点状态，取值有：
<li> false：开启站点；</li>
<li> true：关闭站点。</li>
      */
  Paused: boolean
}

/**
 * ModifyOriginGroup返回参数结构体
 */
export interface ModifyOriginGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 例外规则的生效范围
 */
export interface ExceptUserRuleScope {
  /**
      * 生效的模块。当前仅支持waf：托管规则。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Modules?: Array<string>
}

/**
 * DescribeSecurityPortraitRules请求参数结构体
 */
export interface DescribeSecurityPortraitRulesRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名/应用名。
   */
  Entity: string
}

/**
 * ReclaimZone返回参数结构体
 */
export interface ReclaimZoneResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityPolicyRegions返回参数结构体
 */
export interface DescribeSecurityPolicyRegionsResponse {
  /**
   * 总地域信息数。
   */
  Count: number

  /**
   * 地域信息。
   */
  GeoIps: Array<GeoIp>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBotTopData请求参数结构体
 */
export interface DescribeBotTopDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>bot_requestNum_labelType：请求次数标签类型分布排行；</li>
<li>bot_requestNum_url：请求次数url分布排行；</li>
<li>bot_cipRequestNum_region：请求次数区域客户端ip分布排行。</li>
      */
  MetricName: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
   * 查询前多少个数据，最多值为1000，不填默认默认为：10， 表示查询前top 10的数据。
   */
  Limit?: number

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 筛选条件，key可选的值有：
<li>action：执行动作 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DeleteZone返回参数结构体
 */
export interface DeleteZoneResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
  /**
   * 规则 ID。
   */
  RuleId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDnsRecord请求参数结构体
 */
export interface CreateDnsRecordRequest {
  /**
   * DNS记录所属站点ID。
   */
  ZoneId: string

  /**
      * DNS记录类型，取值有：
<li>A：将域名指向一个外网 IPv4 地址，如 8.8.8.8；</li>
<li>AAAA：将域名指向一个外网 IPv6 地址；</li>
<li>MX：用于邮箱服务器，相关记录值/优先级参数由邮件注册商提供。存在多条 MX 记录时，优先级越低越优先；</li>
<li>CNAME：将域名指向另一个域名，再由该域名解析出最终 IP 地址；</li>
<li>TXT：对域名进行标识和说明，常用于域名验证和 SPF 记录（反垃圾邮件）；</li>
<li>NS：如果需要将子域名交给其他 DNS 服务商解析，则需要添加 NS 记录。根域名无法添加 NS 记录；</li>
<li>CAA：指定可为本站点颁发证书的 CA；</li>
<li>SRV：标识某台服务器使用了某个服务，常见于微软系统的目录管理。</li>
      */
  Type: string

  /**
   * DNS记录名。
   */
  Name: string

  /**
   * DNS记录内容。
   */
  Content: string

  /**
      * 代理模式，取值有：
<li>dns_only：仅DNS解析；</li>
<li>proxied：代理加速。</li>
      */
  Mode: string

  /**
   * 缓存时间，数值越小，修改记录各地生效时间越快，默认为300，单位：秒。
   */
  TTL?: number

  /**
   * 该参数在创建MX记录时生效，值越小优先级越高，用户可指定值范围1~50，不指定默认为0。
   */
  Priority?: number
}

/**
 * Waf规则
 */
export interface WafRule {
  /**
      * 托管规则开关，取值有：
<li> on：开启；</li>
<li> off：关闭。</li>
      */
  Switch: string

  /**
   * 黑名单，ID参考接口 [DescribeSecurityGroupManagedRules](https://tcloud4api.woa.com/document/product/1657/80807?!preview&!document=1)。
   */
  BlockRuleIDs: Array<number>

  /**
   * 观察模式ID列表，将规则ID加入本参数列表中代表该ID使用观察模式生效，即该规则ID进入观察模式。ID参考接口 [DescribeSecurityGroupManagedRules](https://tcloud4api.woa.com/document/product/1657/80807?!preview&!document=1)。
   */
  ObserveRuleIDs: Array<number>
}

/**
 * ModifyApplicationProxy请求参数结构体
 */
export interface ModifyApplicationProxyRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 代理ID。
   */
  ProxyId: string

  /**
      * 当ProxyType=hostname时，表示域名或子域名；
当ProxyType=instance时，表示代理名称。
      */
  ProxyName: string

  /**
      * 会话保持时间，取值范围：30-3600，单位：秒。
不填写保持原有配置。
      */
  SessionPersistTime?: number

  /**
      * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>不填写保持原有配置。
      */
  ProxyType?: string

  /**
   * Ipv6访问配置，不填写保持原有配置。
   */
  Ipv6?: Ipv6
}

/**
 * ModifyLogTopicTask返回参数结构体
 */
export interface ModifyLogTopicTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则引擎可应用于匹配请求的设置列表及其详细信息
 */
export interface RulesSettingAction {
  /**
      * 功能名称，取值有：
<li> 访问URL 重写（AccessUrlRedirect）；</li>
<li> 回源 URL 重写 （UpstreamUrlRedirect）；</li>
<li> 自定义错误页面
(ErrorPage)；</li>
<li> QUIC（QUIC）；</li>
<li> WebSocket （WebSocket）；</li>
<li> 视频拖拽（VideoSeek）；</li>
<li> Token 鉴权（Authentication）；</li>
<li> 自定义CacheKey（CacheKey）；</li>
<li> 节点缓存 TTL （Cache）；</li>
<li> 浏览器缓存 TTL（MaxAge）；</li>
<li> 离线缓存（OfflineCache）；</li>
<li> 智能加速（SmartRouting）；</li>
<li> 分片回源（RangeOriginPull）；</li>
<li> HTTP/2 回源（UpstreamHttp2）；</li>
<li> Host Header 重写（HostHeader）；</li>
<li> 强制 HTTPS（ForceRedirect）；</li>
<li> 回源 HTTPS（OriginPullProtocol）；</li>
<li> 缓存预刷新（CachePrefresh）；</li>
<li> 智能压缩（Compression）；</li>
<li> 修改 HTTP 请求头（RequestHeader）；</li>
<li> 修改HTTP响应头（ResponseHeader）;</li>
<li> 状态码缓存 TTL（StatusCodeCache）;</li>
<li> Hsts；</li>
<li> ClientIpHeader；</li>
<li> TlsVersion；</li>
<li> OcspStapling。</li>
      */
  Action: string

  /**
   * 参数信息。
   */
  Properties: Array<RulesProperties>
}

/**
 * Ipv6访问配置
 */
export interface Ipv6 {
  /**
      * Ipv6访问功能配置，取值有：
<li>on：开启Ipv6访问功能；</li>
<li>off：关闭Ipv6访问功能。</li>
      */
  Switch: string
}

/**
 * ModifyAlarmDefaultThreshold请求参数结构体
 */
export interface ModifyAlarmDefaultThresholdRequest {
  /**
      * 告警服务类型，取值有：
<li>ddos：ddos告警服务。</li>
      */
  ServiceType: string

  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 新的阈值，单位为Mbps，最小阈值为10。
   */
  Threshold: number

  /**
   * 防护实体，如果是四层防护，防护实体为通道ID。如果是七层防护，防护实体为站点名称。
   */
  Entity?: string
}

/**
 * ModifyApplicationProxyRule请求参数结构体
 */
export interface ModifyApplicationProxyRuleRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 代理ID。
   */
  ProxyId: string

  /**
   * 规则ID。
   */
  RuleId: string

  /**
      * 源站类型，取值有：
<li>custom：手动添加；</li>
<li>origins：源站组。</li>不填保持原有值。
      */
  OriginType: string

  /**
      * 端口，支持格式：
80：80端口
81-90：81至90端口。不填保持原有值。
      */
  Port: Array<string>

  /**
      * 协议，取值有：
<li>TCP：TCP协议；</li>
<li>UDP：UDP协议。</li>不填保持原有值。
      */
  Proto?: string

  /**
      * 源站信息：
当OriginType=custom时，表示一个或多个源站，如：
OriginValue=["8.8.8.8:80","9.9.9.9:80"]
OriginValue=["test.com:80"]；
当OriginType=origins时，要求有且仅有一个元素，表示源站组ID，如：
OriginValue=["origin-537f5b41-162a-11ed-abaa-525400c5da15"]。
不填保持原有值。
      */
  OriginValue?: Array<string>

  /**
      * 传递客户端IP，取值有：
<li>TOA：TOA（仅Proto=TCP时可选）；</li>
<li>PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；</li>
<li>PPV2：Proxy Protocol传递，协议版本V2；</li>
<li>OFF：不传递。</li>不填保持原有值。
      */
  ForwardClientIp?: string

  /**
      * 是否开启会话保持，取值有：
<li>true：开启；</li>
<li>false：关闭。</li>不填保持原有值。
      */
  SessionPersist?: boolean
}

/**
 * DDoS封禁等级
 */
export interface DDoSStatusInfo {
  /**
      * 策略等级，取值有:
<li>low ：宽松 ；</li>
<li>middle ：适中 ；</li>
<li>high : 严格。 </li>
      */
  PlyLevel: string
}

/**
 * ACL配置
 */
export interface AclConfig {
  /**
      * 开关，取值有：
<li> on：开启；</li>
<li> off：关闭。</li>
      */
  Switch: string

  /**
   * 用户自定义规则。
   */
  AclUserRules: Array<AclUserRule>
}

/**
 * DescribeSpeedTestingDetails返回参数结构体
 */
export interface DescribeSpeedTestingDetailsResponse {
  /**
   * 分地域拨测统计数据。
   */
  SpeedTestingDetailData: SpeedTestingDetailData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 托管规则组详情
 */
export interface WafGroupDetail {
  /**
   * 规则类型ID。
   */
  RuleTypeId: number

  /**
   * 规则类型名称。
   */
  RuleTypeName: string

  /**
   * 规则类型描述。
   */
  RuleTypeDesc: string

  /**
   * 规则列表。
   */
  WafGroupRules: Array<WafGroupRule>

  /**
   * 规则等级。
   */
  Level: string

  /**
   * 动作。
   */
  Action: string
}

/**
 * 负载均衡信息
 */
export interface LoadBalancing {
  /**
   * 负载均衡ID。
   */
  LoadBalancingId: string

  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 子域名，填写@表示根域。
   */
  Host: string

  /**
      * 代理模式，取值有：
<li>dns_only：仅DNS；</li>
<li>proxied：开启代理。</li>
      */
  Type: string

  /**
   * 当Type=dns_only表示DNS记录的缓存时间。
   */
  TTL: number

  /**
      * 状态，取值有：
<li>online：部署成功；</li>
<li>process：部署中。</li>
      */
  Status: string

  /**
   * 调度域名。
   */
  Cname: string

  /**
   * 主源源站组ID。
   */
  OriginGroupId: string

  /**
   * 备用源站源站组ID。为空表示不适用备用源站。
   */
  BackupOriginGroupId: string

  /**
   * 更新时间。
   */
  UpdateTime: string
}

/**
 * DeleteApplicationProxyRule请求参数结构体
 */
export interface DeleteApplicationProxyRuleRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 代理ID。
   */
  ProxyId: string

  /**
   * 规则ID。
   */
  RuleId: string
}

/**
 * 域名证书配置
 */
export interface HostsCertificate {
  /**
      * 域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Host: string

  /**
      * 服务端证书配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostCertInfo: HostCertInfo
}

/**
 * DescribeDDoSBlockList返回参数结构体
 */
export interface DescribeDDoSBlockListResponse {
  /**
      * 封禁解封信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<DDoSBlockData>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopL7CacheData返回参数结构体
 */
export interface DescribeTopL7CacheDataResponse {
  /**
      * 七层缓存TopN流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TopDataRecord>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 拨测任务状态信息
 */
export interface SpeedTestingStatus {
  /**
   * 拨测 url。
   */
  Url: string

  /**
   * 拨测 url 是否使用 https。
   */
  Tls: boolean

  /**
   * 任务创建时间。
   */
  CreatedOn: string

  /**
      * 任务状态，取值有：
<li> 200：任务完成;</li>
<li> 100：任务进行中。</li>
<li> 503: 任务失败。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusCode: number

  /**
      * 拨测 UA。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UA: string

  /**
      * 网络环境。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Connectivity: string

  /**
      * 是否可达，取值：
<li> true：可达；</li>
<li> false：不可达。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Reachable: boolean

  /**
      * 是否超时，取值：
<li> true：超时；</li>
<li> false：不超时。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimedOut: boolean
}

/**
 * CreateLoadBalancing请求参数结构体
 */
export interface CreateLoadBalancingRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 负载均衡域名。
   */
  Host: string

  /**
      * 代理模式，取值有：
<li>dns_only：仅DNS；</li>
<li>proxied：开启代理。</li>
      */
  Type: string

  /**
   * 主源站源站组ID。
   */
  OriginGroupId: string

  /**
   * 备用源站源站组ID，当Type=proxied时可以填写，为空表示不使用备用源站。
   */
  BackupOriginGroupId: string

  /**
      * 当Type=dns_only时，指解析记录在DNS服务器缓存的生存时间。
取值范围60-86400，单位：秒，不填写使用默认值：600。
      */
  TTL?: number
}

/**
 * DescribeDnssec请求参数结构体
 */
export interface DescribeDnssecRequest {
  /**
   * 站点ID。
   */
  ZoneId: string
}

/**
 * 规则引擎可应用于匹配请求的设置详细信息，可选参数配置项
 */
export interface RuleChoicePropertiesItem {
  /**
   * 参数名称。
   */
  Name: string

  /**
      * 参数值类型。
<li> CHOICE：参数值只能在 ChoicesValue 中选择； </li>
<li> TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择；</li>
<li> CUSTOM_NUM：参数值用户自定义，整型类型；</li>
<li> CUSTOM_STRING：参数值用户自定义，字符串类型。</li>
      */
  Type: string

  /**
      * 参数值的可选值。
注意：若参数值为用户自定义则该数组为空数组。
      */
  ChoicesValue: Array<string>

  /**
   * 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
   */
  Min: number

  /**
   * 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。
   */
  Max: number

  /**
   * 参数值是否支持多选或者填写多个。
   */
  IsMultiple: boolean

  /**
   * 是否允许为空。
   */
  IsAllowEmpty: boolean

  /**
      * 特殊参数。
<li> 为 NULL：RuleAction 选择 NormalAction；</li>
<li> 成员参数 Id 为 Action：RuleAction 选择 RewirteAction；</li>
<li> 成员参数 Id 为 StatusCode：RuleAction 选择 CodeAction。</li>
      */
  ExtraParameter: RuleExtraParameter
}

/**
 * ModifyAlarmConfig返回参数结构体
 */
export interface ModifyAlarmConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTimingL7AnalysisData请求参数结构体
 */
export interface DescribeTimingL7AnalysisDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 指标列表，取值有:
<li>l7Flow_outFlux: 访问流量；</li>
<li>l7Flow_request: 访问请求数；</li>
<li>l7Flow_outBandwidth: 访问带宽。</li>
      */
  MetricNames: Array<string>

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
      * 查询时间粒度，取值有：
<li>min: 1分钟；</li>
<li>5min: 5分钟；</li>
<li>hour: 1小时；</li>
<li>day: 1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 筛选条件，key可选的值有：
<li>country：国家/地区；</li>
<li>domain：域名；</li>
<li>protocol：协议类型；</li>
<li>resourceType：资源类型；</li>
<li>statusCode：状态码；</li>
<li> browserType：浏览器类型；</li>
<li>deviceType：设备类型；</li>
<li>operatingSystemType：操作系统类型；</li>
<li>tlsVersion：tls版本；</li>
<li>url：url地址；</li>
<li>referer：refer头信息；</li>
<li>ipVersion：ip版本；</li>
<li>tagKey：标签Key；</li>
<li>tagValue：标签Value。</li>
      */
  Filters?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户的地域智能选择地区。
      */
  Area?: string
}

/**
 * 不缓存配置
 */
export interface NoCache {
  /**
      * 不缓存配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string
}

/**
 * 地域信息
 */
export interface GeoIp {
  /**
   * 地域ID。
   */
  RegionId: number

  /**
   * 国家名。
   */
  Country?: string

  /**
   * 所属洲。
   */
  Continent?: string

  /**
   * 城市名。
   */
  Province?: string
}

/**
 * DescribeSecurityGroupManagedRules请求参数结构体
 */
export interface DescribeSecurityGroupManagedRulesRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名/应用名。
   */
  Entity: string

  /**
   * 分页查询偏移量。默认值：0。
   */
  Offset?: number

  /**
   * 分页查询限制数目。默认值：20，最大值：1000。
   */
  Limit?: number
}

/**
 * ModifyApplicationProxyStatus请求参数结构体
 */
export interface ModifyApplicationProxyStatusRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 代理ID。
   */
  ProxyId: string

  /**
      * 状态，取值有：
<li>offline: 停用；</li>
<li>online: 启用。</li>
      */
  Status: string
}

/**
 * CreateZone请求参数结构体
 */
export interface CreateZoneRequest {
  /**
   * 站点名称。
   */
  ZoneName: string

  /**
      * 接入方式，取值有：
<li> full：NS接入；</li>
<li> partial：CNAME接入。</li>不填写使用默认值full。
      */
  Type?: string

  /**
   * 是否跳过站点现有的DNS记录扫描。默认值：false。
   */
  JumpStart?: boolean

  /**
   * 资源标签。
   */
  Tags?: Array<Tag>
}

/**
 * DescribeHostCertificates请求参数结构体
 */
export interface DescribeHostCertificatesRequest {
  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-xxx。<br>   类型：String<br>   必选：是<li>host<br>   按照【<strong>域名名称</strong>】进行过滤。<br>   类型：String<br>   必选：否<li>cert-id<br>   按照【<strong>证书ID</strong>】进行过滤。<br>   类型：String<br>   必选：否<li>cert-alias<br>   按照【<strong>证书名称</strong>】进行过滤。<br>   类型：String<br>   必选：否<li>cert-type<br>   按照【<strong>证书类型</strong>】进行过滤。<br>   类型：String<br>   必选：否
      */
  Filters: Array<AdvancedFilter>

  /**
   * 分页查询偏移量，默认为 0。
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为 100，最大可设置为 1000。
   */
  Limit?: number

  /**
      * 排序方式。详细排序条件如下：
<li>create-time：域名创建时间；</li>
<li>cert-expire-time：证书过期时间；</li>
<li>cert-deploy-time：证书部署时间。</li>
      */
  Sort?: Sort
}

/**
 * 站点归属信息
 */
export interface AscriptionInfo {
  /**
   * 主机记录。
   */
  Subdomain: string

  /**
   * 记录类型。
   */
  RecordType: string

  /**
   * 记录值。
   */
  RecordValue: string
}

/**
 * DescribeBotData返回参数结构体
 */
export interface DescribeBotDataResponse {
  /**
      * Bot攻击的数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogSets返回参数结构体
 */
export interface DescribeLogSetsResponse {
  /**
      * 日志集列表数据。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogSetList: Array<LogSetInfo>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClientRuleList返回参数结构体
 */
export interface DescribeClientRuleListResponse {
  /**
      * 封禁客户端数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<ClientRule>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 无
 */
export interface Waf {
  /**
      * Waf开关，取值为：
<li> on：开启；</li>
<li> off：关闭。</li>
      */
  Switch: string

  /**
   * 策略ID。
   */
  PolicyId?: number
}

/**
 * DescribeLogTopicTaskDetail请求参数结构体
 */
export interface DescribeLogTopicTaskDetailRequest {
  /**
   * 推送任务ID。
   */
  TopicId: string

  /**
   * 站点ID。
   */
  ZoneId: string
}

/**
 * CreateSpeedTesting请求参数结构体
 */
export interface CreateSpeedTestingRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
   * 拨测子域名。
   */
  Host?: string
}

/**
 * CreateReplayTask请求参数结构体
 */
export interface CreateReplayTaskRequest {
  /**
   * 重放任务的 ID 列表。
   */
  Ids: Array<string>
}

/**
 * DescribeRateLimitIntelligenceRule请求参数结构体
 */
export interface DescribeRateLimitIntelligenceRuleRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名/应用名。
   */
  Entity: string
}

/**
 * DescribeDnsRecords返回参数结构体
 */
export interface DescribeDnsRecordsResponse {
  /**
   * DNS记录总数。
   */
  TotalCount: number

  /**
   * DNS 记录列表。
   */
  DnsRecords: Array<DnsRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDDoSAttackData请求参数结构体
 */
export interface DescribeDDoSAttackDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>ddos_attackMaxBandwidth：攻击带宽峰值；</li>
<li>ddos_attackMaxPackageRate：攻击包速率峰值 ；</li>
<li>ddos_attackBandwidth：攻击带宽曲线；</li>
<li>ddos_attackPackageRate：攻击包速率曲线。</li>
      */
  MetricNames: Array<string>

  /**
   * 端口号。
   */
  Port?: number

  /**
      * 攻击类型，取值有：
<li>flood：泛洪攻击；</li>
<li>icmpFlood：icmp泛洪攻击；</li>
<li>all：全部攻击类型。</li>不填默认为all，表示查询全部攻击类型。
      */
  AttackType?: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * DDOS策略组id列表，不填默认选择全部策略id。
   */
  PolicyIds?: Array<number>

  /**
      * 协议类型，取值有：
<li>tcp：tcp协议；</li>
<li>udp：udp协议；</li>
<li>all：全部协议。</li>不填默认为all，表示获取全部协议类型。
      */
  ProtocolType?: string

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DescribeWebManagedRulesData返回参数结构体
 */
export interface DescribeWebManagedRulesDataResponse {
  /**
      * WAF攻击的时序数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationProxies请求参数结构体
 */
export interface DescribeApplicationProxiesRequest {
  /**
   * 分页查询偏移量，默认为0。
   */
  Offset?: number

  /**
   * 分页查询限制数目。默认值：20，最大值：1000。
   */
  Limit?: number

  /**
   * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：<li>proxy-id<br>   按照【<strong>代理ID</strong>】进行过滤。代理ID形如：proxy-ev2sawbwfd。<br>   类型：String<br>   必选：否<li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-vawer2vadg。<br>   类型：String<br>   必选：否
   */
  Filters?: Array<Filter>
}

/**
 * DescribeContentQuota请求参数结构体
 */
export interface DescribeContentQuotaRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string
}

/**
 * DescribeWebProtectionAttackEvents请求参数结构体
 */
export interface DescribeWebProtectionAttackEventsRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number
}

/**
 * Hsts配置
 */
export interface Hsts {
  /**
      * 是否开启，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
      * MaxAge数值。单位为秒，最大值为1天。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAge?: number

  /**
      * 是否包含子域名，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  IncludeSubDomains?: string

  /**
      * 是否开启预加载，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Preload?: string
}

/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
   * 规则名称，名称字符串长度 1～255。
   */
  RuleName: string

  /**
      * 规则状态，取值有：
<li> enable: 启用； </li>
<li> disable: 未启用。</li>
      */
  Status: string

  /**
   * 规则内容。
   */
  Rules: Array<Rule>
}

/**
 * DescribeRateLimitIntelligenceRule返回参数结构体
 */
export interface DescribeRateLimitIntelligenceRuleResponse {
  /**
   * 速率限制智能规则。
   */
  RateLimitIntelligenceRuleDetails: Array<RateLimitIntelligenceRuleDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模板当前详细配置
 */
export interface RateLimitTemplateDetail {
  /**
      * 模板名称，取值有：
<li>sup_loose：超级宽松；</li>
<li>loose：宽松；</li>
<li>emergency：紧急；</li>
<li>normal：适中；</li>
<li>strict：严格；</li>
<li>close：关闭 - 仅精准速率限制生效。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mode: string

  /**
   * 唯一id。
   */
  ID?: number

  /**
      * 处置动作。模板阀值触发后的处罚行为。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 惩罚时间，0-2天，单位是秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTime?: number

  /**
   * 统计阈值，单位是次，取值范围0-4294967294。
   */
  Threshold?: number

  /**
   * 统计周期，取值范围0-120秒。
   */
  Period?: number
}

/**
 * CreateApplicationProxyRule返回参数结构体
 */
export interface CreateApplicationProxyRuleResponse {
  /**
   * 规则ID
   */
  RuleId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogSets请求参数结构体
 */
export interface DescribeLogSetsRequest {
  /**
   * 日志集所属的地域。
   */
  LogSetRegion: string

  /**
   * 日志集ID。
   */
  LogSetId?: string

  /**
   * 日志集名称。
   */
  LogSetName?: string
}

/**
 * 客户端规则信息
 */
export interface ClientRule {
  /**
   * 客户端ip。
   */
  ClientIp: string

  /**
   * 规则类型。
   */
  RuleType: string

  /**
      * 规则id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
      * 规则描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
      * 封禁状态，取值有：
<li>block ：封禁 ；</li>
<li>allow ：放行 。</li>
      */
  IpStatus: string

  /**
   * 封禁时间，采用unix秒级时间戳。
   */
  BlockTime: number

  /**
   * 每条数据的唯一标识id。
   */
  Id: string
}

/**
 * CreateApplicationProxy请求参数结构体
 */
export interface CreateApplicationProxyRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
      * 当ProxyType=hostname时，表示域名或子域名；
当ProxyType=instance时，表示代理名称。
      */
  ProxyName: string

  /**
      * 调度模式，取值有：
<li>ip：表示Anycast IP调度；</li>
<li>domain：表示CNAME调度。</li>
      */
  PlatType: string

  /**
      * 是否开启安全，取值有：
<li>0：关闭安全；</li>
<li>1：开启安全。</li>
      */
  SecurityType: number

  /**
      * 是否开启加速，取值有：
<li>0：关闭加速；</li>
<li>1：开启加速。</li>
      */
  AccelerateType: number

  /**
      * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>不填写使用默认值instance。
      */
  ProxyType?: string

  /**
      * 会话保持时间，取值范围：30-3600，单位：秒。
不填写使用默认值600。
      */
  SessionPersistTime?: number

  /**
      * Ipv6访问配置。
不填写表示关闭Ipv6访问。
      */
  Ipv6?: Ipv6

  /**
      * 规则详细信息。
不填写则不创建规则。
      */
  ApplicationProxyRules?: Array<ApplicationProxyRule>
}

/**
 * cc配置项。
 */
export interface CC {
  /**
      * Waf开关，取值为：
<li> on：开启；</li>
<li> off：关闭。</li>
      */
  Switch: string

  /**
   * 策略ID。
   */
  PolicyId?: number
}

/**
 * DescribeTimingL4Data返回参数结构体
 */
export interface DescribeTimingL4DataResponse {
  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
      * 四层时序流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TimingDataRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则引擎功能项操作，对于一种功能只对应下面三种类型的其中一种，RuleAction 数组中的每一项只能是其中一个类型，更多功能项的填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
 */
export interface Action {
  /**
      * 常规功能操作，选择该类型的功能项有：
<li> 访问URL 重写（AccessUrlRedirect）；</li>
<li> 回源 URL 重写 （UpstreamUrlRedirect）；</li>
<li> QUIC（QUIC）；</li>
<li> WebSocket （WebSocket）；</li>
<li> 视频拖拽（VideoSeek）；</li>
<li> Token 鉴权（Authentication）；</li>
<li> 自定义CacheKey（CacheKey）；</li>
<li> 节点缓存 TTL （Cache）；</li>
<li> 浏览器缓存 TTL（MaxAge）；</li>
<li> 离线缓存（OfflineCache）；</li>
<li> 智能加速（SmartRouting）；</li>
<li> 分片回源（RangeOriginPull）；</li>
<li> HTTP/2 回源（UpstreamHttp2）；</li>
<li> Host Header 重写（HostHeader）；</li>
<li> 强制 HTTPS（ForceRedirect）；</li>
<li> 回源 HTTPS（OriginPullProtocol）；</li>
<li> 缓存预刷新（CachePrefresh）；</li>
<li> 智能压缩（Compression）；</li>
<li> Hsts；</li>
<li> ClientIpHeader；</li>
<li> TlsVersion；</li>
<li> OcspStapling。</li>
<li> HTTP/2 访问（Http2）。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  NormalAction?: NormalAction

  /**
      * 带有请求头/响应头的功能操作，选择该类型的功能项有：
<li> 修改 HTTP 请求头（RequestHeader）；</li>
<li> 修改HTTP响应头（ResponseHeader）。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  RewriteAction?: RewriteAction

  /**
      * 带有状态码的功能操作，选择该类型的功能项有：
<li> 自定义错误页面（ErrorPage）；</li>
<li> 状态码缓存 TTL（StatusCodeCache）。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodeAction?: CodeAction
}

/**
 * 推送任务详细信息
 */
export interface LogTopicDetailInfo {
  /**
   * 推送任务的任务名称。
   */
  TaskName: string

  /**
   * 日志集所属的地域。
   */
  LogSetRegion: string

  /**
   * 推送任务的类型。
   */
  EntityType: string

  /**
   * 任务实体列表。
   */
  EntityList: Array<string>

  /**
   * 日志集ID。
   */
  LogSetId: string

  /**
   * 日志集名称。
   */
  LogSetName: string

  /**
   * 推送任务主题ID。
   */
  TopicId: string

  /**
   * 推送任务主题名称。
   */
  TopicName: string

  /**
   * 推送任务主题保存时间，单位为天。
   */
  Period: number

  /**
   * 推送任务是否开启。
   */
  Enabled: boolean

  /**
   * 推送任务创建时间，时间格式为: YYYY-mm-dd HH:MM:SS。
   */
  CreateTime: string

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area: string

  /**
      * 站点ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: string

  /**
      * 站点名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneName: string

  /**
      * 是否被删除了，取值有：
<li>yes: 已经被删除；</li>
<li>no: 没有被删除。</li>
      */
  Deleted: string
}

/**
 * 应用代理实例
 */
export interface ApplicationProxy {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
   * 代理ID。
   */
  ProxyId?: string

  /**
      * 当ProxyType=hostname时，表示域名或子域名；
当ProxyType=instance时，表示代理名称。
      */
  ProxyName: string

  /**
      * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>
      */
  ProxyType: string

  /**
      * 调度模式，取值有：
<li>ip：表示Anycast IP调度；</li>
<li>domain：表示CNAME调度。</li>
      */
  PlatType: string

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
默认值：overseas
      */
  Area: string

  /**
      * 是否开启安全，取值有：
<li>0：关闭安全；</li>
<li>1：开启安全。</li>
      */
  SecurityType: number

  /**
      * 是否开启加速，取值有：
<li>0：关闭加速；</li>
<li>1：开启加速。</li>
      */
  AccelerateType: number

  /**
   * 会话保持时间。
   */
  SessionPersistTime: number

  /**
      * 状态，取值有：
<li>online：启用；</li>
<li>offline：停用；</li>
<li>progress：部署中；</li>
<li>stopping：停用中；</li>
<li>fail：部署失败/停用失败。</li>
      */
  Status: string

  /**
      * 封禁状态，取值有：
<li>banned：已封禁;</li>
<li>banning：封禁中；</li>
<li>recover：已解封；</li>
<li>recovering：解封禁中。</li>
      */
  BanStatus: string

  /**
   * 调度信息。
   */
  ScheduleValue: Array<string>

  /**
      * 当ProxyType=hostname时：
表示代理加速唯一标识。
      */
  HostId: string

  /**
   * Ipv6访问配置。
   */
  Ipv6: Ipv6

  /**
   * 更新时间。
   */
  UpdateTime: string

  /**
   * 规则列表。
   */
  ApplicationProxyRules: Array<ApplicationProxyRule>
}

/**
 * ModifyApplicationProxy返回参数结构体
 */
export interface ModifyApplicationProxyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 站点配置。
 */
export interface ZoneSetting {
  /**
   * 站点名称。
   */
  ZoneName: string

  /**
      * 站点加速区域信息，取值有：
<li> mainland：中国境内加速；</li>
<li> overseas：中国境外加速。</li>
      */
  Area: string

  /**
      * 节点缓存键配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheKey: CacheKey

  /**
      * Quic访问配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quic: Quic

  /**
      * POST请求传输配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostMaxSize: PostMaxSize

  /**
      * 智能压缩配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Compression: Compression

  /**
      * Http2回源配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpstreamHttp2: UpstreamHttp2

  /**
      * 访问协议强制Https跳转配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ForceRedirect: ForceRedirect

  /**
      * 缓存过期时间配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheConfig: CacheConfig

  /**
      * 源站配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Origin: Origin

  /**
      * 智能加速配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SmartRouting: SmartRouting

  /**
      * 浏览器缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAge: MaxAge

  /**
      * 离线缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OfflineCache: OfflineCache

  /**
      * WebSocket配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebSocket: WebSocket

  /**
      * 客户端IP回源请求头配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientIpHeader: ClientIpHeader

  /**
      * 缓存预刷新配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CachePrefresh: CachePrefresh

  /**
      * Ipv6访问配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ipv6: Ipv6

  /**
      * Https 加速配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Https: Https
}

/**
 * 规则引擎条件且关系条件列表
 */
export interface RuleAndConditions {
  /**
   * 规则引擎条件，该数组内所有项全部满足即判断该条件满足。
   */
  Conditions: Array<RuleCondition>
}

/**
 * 拦截页面的总体配置，用于配置各个模块的拦截后行为。
 */
export interface DropPageConfig {
  /**
      * 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
      * Waf(托管规则)模块的拦截页面配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  WafDropPageDetail?: DropPageDetail

  /**
      * 自定义页面的拦截页面配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AclDropPageDetail?: DropPageDetail
}

/**
 * ModifyApplicationProxyRuleStatus请求参数结构体
 */
export interface ModifyApplicationProxyRuleStatusRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 代理ID。
   */
  ProxyId: string

  /**
   * 规则ID。
   */
  RuleId: string

  /**
      * 状态，取值有：
<li>offline: 停用；</li>
<li>online: 启用。</li>
      */
  Status: string
}

/**
 * 加速类型
 */
export interface AccelerateType {
  /**
      * 加速开关。取值范围：
<li> on：打开;</li>
<li>off：关闭。</li>
      */
  Switch: string
}

/**
 * ModifyDefaultCertificate返回参数结构体
 */
export interface ModifyDefaultCertificateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupManagedRules返回参数结构体
 */
export interface DescribeSecurityGroupManagedRulesResponse {
  /**
   * 本次返回的规则数。
   */
  Count: number

  /**
   * 总规则数。
   */
  Total: number

  /**
   * 托管规则信息。
   */
  WafGroupInfo: WafGroupInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 缓存遵循源站配置
 */
export interface FollowOrigin {
  /**
      * 遵循源站配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string
}

/**
 * DescribeSpeedTestingDetails请求参数结构体
 */
export interface DescribeSpeedTestingDetailsRequest {
  /**
   * 站点ID。
   */
  ZoneId?: string
}

/**
 * 查询结果排序条件。
 */
export interface Sort {
  /**
      * 排序字段，当前支持：
createTime，域名创建时间
certExpireTime，证书过期时间
certDeployTime,  证书部署时间
      */
  Key: string

  /**
   * asc/desc，默认desc。
   */
  Sequence?: string
}

/**
 * CreateLogTopicTask请求参数结构体
 */
export interface CreateLogTopicTaskRequest {
  /**
   * 日志集ID。
   */
  LogSetId: string

  /**
   * 日志集所属的地域。
   */
  LogSetRegion: string

  /**
   * 日志集主题名。
   */
  TopicName: string

  /**
   * 推送任务的名称。
   */
  TaskName: string

  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
      * 数据推送类型，取值有：
<li>domain：七层代理日志；</li>
<li>application：四层代理日志；</li>
<li>web-rateLiming：速率限制日志；</li>
<li>web-attack：Web攻击防护日志；</li>
<li>web-rule：自定义规则日志；</li>
<li>web-bot：Bot管理日志。</li>
      */
  EntityType: string

  /**
   * 日志主题保存时间，单位为天，取值范围为：1-366。
   */
  Period: number

  /**
   * 推送任务实体列表。
   */
  EntityList?: Array<string>

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内；</li>
<li>overseas：全球（不含中国大陆）。</li>不填将根据用户的地域智能选择加速区域。
      */
  Area?: string
}

/**
 * 查询条件
 */
export interface QueryCondition {
  /**
   * 筛选条件的key。
   */
  Key: string

  /**
      * 查询条件操作符，操作类型有：
<li>equals: 等于；</li>
<li>notEquals: 不等于；</li>
<li>include: 包含；</li>
<li>notInclude: 不包含; </li>
<li>startWith: 开始于；</li>
<li>notStartWith: 不开始于；</li>
<li>endWith: 结尾是；</li>
<li>notEndWith: 不结尾是。</li>
      */
  Operator: string

  /**
   * 筛选条件的值。
   */
  Value: Array<string>
}

/**
 * 规则引擎条件 HTTP 请求/响应头操作动作参数。
 */
export interface RuleRewriteActionParams {
  /**
      * 功能参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。现在只有三种取值：
<li> add：添加 HTTP 头部；</li>
<li> set：重写 HTTP 头部；</li>
<li> del：删除 HTTP 头部。</li>
      */
  Action: string

  /**
   * 参数名称。
   */
  Name: string

  /**
   * 参数值。
   */
  Values: Array<string>
}

/**
 * DescribeBotClientIpList返回参数结构体
 */
export interface DescribeBotClientIpListResponse {
  /**
      * 客户端Ip相关数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecClientIp>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDnsRecords请求参数结构体
 */
export interface DeleteDnsRecordsRequest {
  /**
   * 待删除记录所属站点 ID。
   */
  ZoneId: string

  /**
   * 待删除记录 ID。
   */
  DnsRecordIds: Array<string>
}

/**
 * DescribeBotLog请求参数结构体
 */
export interface DescribeBotLogRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 查询的站点集合，不填默认查询所有站点。
   */
  ZoneIds?: Array<string>

  /**
   * 查询的域名集合，不填默认查询所有子域名。
   */
  Domains?: Array<string>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 筛选条件，当前key的可选条件有：
<li>action：执行动作（处置方式）；</li>
<li>sipCountryCode：ip所在国家；</li>
<li>attackIp：攻击ip；</li>
<li>ruleId：规则id；</li>
<li>eventId：事件id；</li>
<li>ua：用户代理；</li>
<li>requestMethod：请求方法；</li>
<li>uri：统一资源标识符 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DDoS地域封禁
 */
export interface DDoSGeoIp {
  /**
      * 区域封禁清空标识，取值有：
<li>off ：清空地域封禁列表 ；</li>
<li>on ：不做处理 。</li>
      */
  Switch: string

  /**
   * 地域信息，ID参考[DescribeSecurityPolicyRegions](https://tcloud4api.woa.com/document/product/1657/81247?!preview&!document=1)。
   */
  RegionIds: Array<number>
}

/**
 * ModifyHostsCertificate请求参数结构体
 */
export interface ModifyHostsCertificateRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
   * 本次变更的域名列表。
   */
  Hosts: Array<string>

  /**
   * 证书信息, 只需要传入 CertId 即可, 如果为空, 则使用默认证书。
   */
  ServerCertInfo?: Array<ServerCertInfo>
}

/**
 * DDoS主攻击事件
 */
export interface DDoSMajorAttackEvent {
  /**
   * ddos 策略组id。
   */
  PolicyId: number

  /**
   * 攻击最大带宽。
   */
  AttackMaxBandWidth: number

  /**
   * 攻击请求时间，采用unix秒级时间戳。
   */
  AttackTime: number
}

/**
 * https 服务端证书配置
 */
export interface HostCertInfo {
  /**
      * 服务器证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertId: string

  /**
      * 证书备注名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Alias?: string

  /**
      * 证书类型，取值有：
<li>default：默认证书；</lil>
<li>upload：用户上传；</li>
<li>managed:腾讯云托管。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: string

  /**
      * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime?: string

  /**
      * 证书部署时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeployTime?: string

  /**
      * 签名算法。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SignAlgo?: string

  /**
      * 证书状态，取值有：
<li>deployed：已部署;</li>
<li>process：部署中。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string
}

/**
 * DescribeTopL7AnalysisData返回参数结构体
 */
export interface DescribeTopL7AnalysisDataResponse {
  /**
      * 七层流量前topN数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TopDataRecord>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 存储客户端请求IP的头部信息配置
 */
export interface ClientIpHeader {
  /**
      * 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
      * 回源时，存放客户端IP的请求头名称。
为空则使用默认值：X-Forwarded-IP。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HeaderName?: string
}

/**
 * 计费资源
 */
export interface Resource {
  /**
   * 资源 ID。
   */
  Id: string

  /**
      * 付费模式，取值有：
<li>0：后付费。</li>
      */
  PayMode: number

  /**
   * 创建时间。
   */
  CreateTime: string

  /**
   * 生效时间。
   */
  EnableTime: string

  /**
   * 失效时间。
   */
  ExpireTime: string

  /**
      * 套餐状态，取值有：
<li>normal：正常；</li>
<li>isolated：隔离；</li>
<li>destroyed：销毁。</li>
      */
  Status: string

  /**
   * 询价参数。
   */
  Sv: Array<Sv>

  /**
      * 是否自动续费，取值有：
<li>0：默认状态；</li>
<li>1：自动续费；</li>
<li>2：不自动续费。</li>
      */
  AutoRenewFlag: number

  /**
   * 套餐关联资源 ID。
   */
  PlanId: string

  /**
      * 地域，取值有：
<li>mainland：国内；</li>
<li>overseas：海外。</li>
      */
  Area: string
}

/**
 * DescribeHostsSetting请求参数结构体
 */
export interface DescribeHostsSettingRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 分页查询偏移量。默认值： 0，最小值：0。
   */
  Offset?: number

  /**
   * 分页查询限制数目。默认值： 100，最大值：1000。
   */
  Limit?: number

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>host<br>   按照【<strong>域名</strong>】进行过滤。<br>   类型：string<br>   必选：否
      */
  Filters?: Array<Filter>
}

/**
 * DescribeBotHitRuleDetail返回参数结构体
 */
export interface DescribeBotHitRuleDetailResponse {
  /**
      * 命中规则列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecHitRuleInfo>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDDoSAttackEventDetail请求参数结构体
 */
export interface DescribeDDoSAttackEventDetailRequest {
  /**
   * 查询的事件ID。
   */
  EventId: string

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DeleteRules返回参数结构体
 */
export interface DeleteRulesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 源站组信息
 */
export interface OriginGroup {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
   * 源站组ID。
   */
  OriginGroupId: string

  /**
      * 源站类型，取值有：
<li>self：自有源站；</li>
<li>third_party：第三方源站；</li>
<li>cos：腾讯云COS源站。</li>
      */
  OriginType: string

  /**
   * 源站组名称。
   */
  OriginGroupName: string

  /**
      * 源站配置类型，当OriginType=self时，取值有：
<li>area：按区域配置；</li>
<li>weight： 按权重配置。</li>
<li>proto： 按HTTP协议配置。</li>当OriginType=third_party/cos时放空。
      */
  ConfigurationType: string

  /**
   * 源站记录信息。
   */
  OriginRecords: Array<OriginRecord>

  /**
   * 源站组更新时间。
   */
  UpdateTime: string
}

/**
 * DescribeWebManagedRulesHitRuleDetail返回参数结构体
 */
export interface DescribeWebManagedRulesHitRuleDetailResponse {
  /**
      * 命中规则的详细列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecHitRuleInfo>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * web攻击日志
 */
export interface WebLogs {
  /**
   * 请求（事件）ID。
   */
  EventId: string

  /**
   * 攻击源（客户端）Ip。
   */
  AttackIp: string

  /**
   * 受攻击子域名。
   */
  Domain: string

  /**
   * http 日志内容。
   */
  HttpLog: string

  /**
   * IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)
   */
  SipCountryCode: string

  /**
   * 攻击时间，采用unix秒级时间戳。
   */
  AttackTime: number

  /**
   * 请求地址。
   */
  RequestUri: string

  /**
      * 攻击内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackContent: string

  /**
      * 规则相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleDetailList: Array<SecRuleRelatedInfo>

  /**
      * 请求类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReqMethod: string
}

/**
 * DNSSEC 相关信息
 */
export interface DnssecInfo {
  /**
   * 标志。
   */
  Flags: number

  /**
   * 加密算法。
   */
  Algorithm: string

  /**
   * 加密类型。
   */
  KeyType: string

  /**
   * 摘要类型。
   */
  DigestType: string

  /**
   * 摘要算法。
   */
  DigestAlgorithm: string

  /**
   * 摘要信息。
   */
  Digest: string

  /**
   * DS 记录值。
   */
  DS: string

  /**
   * 密钥标签。
   */
  KeyTag: number

  /**
   * 公钥。
   */
  PublicKey: string
}

/**
 * Http2回源配置
 */
export interface UpstreamHttp2 {
  /**
      * http2回源配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string
}

/**
 * 安全Bot配置
 */
export interface BotConfig {
  /**
      * bot开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
   * 通用详细基础规则。如果为null，默认使用历史配置。
   */
  BotManagedRule?: BotManagedRule

  /**
   * 用户画像规则。如果为null，默认使用历史配置。
   */
  BotPortraitRule?: BotPortraitRule

  /**
      * Bot智能分析。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntelligenceRule?: IntelligenceRule
}

/**
 * CreateReplayTask返回参数结构体
 */
export interface CreateReplayTaskResponse {
  /**
   * 此次任务ID。
   */
  JobId: string

  /**
   * 失败的任务列表及原因。
   */
  FailedList: Array<FailReason>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单值类数据记录
 */
export interface SingleDataRecord {
  /**
   * 查询维度值。
   */
  TypeKey: string

  /**
   * 查询维度下具体指标值。
   */
  TypeValue: Array<SingleTypeValue>
}

/**
 * 客户端ip信息
 */
export interface SecClientIp {
  /**
   * 客户端ip。
   */
  ClientIp: string

  /**
   * 最大qps。
   */
  RequestMaxQps: number

  /**
   * 请求数。
   */
  RequestNum: number
}

/**
 * DescribeTopL7CacheData请求参数结构体
 */
export interface DescribeTopL7CacheDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 查询的指标，取值有：
<li> l7Cache_outFlux_domain：host/域名；</li>
<li> l7Cache_outFlux_url：url地址；</li>
<li> l7Cache_outFlux_resourceType：资源类型；</li>
<li> l7Cache_outFlux_statusCode：状态码。</li>
      */
  MetricName: string

  /**
   * 站点id集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。
   */
  Limit?: number

  /**
      * 筛选条件，key可选的值有：
<li> cacheType：缓存类型(状态)；</li>
<li>domain：Host/域名；</li>
<li>resourceType：资源类型；</li>
<li>url：url地址；</li>
<li>tagKey：标签Key；</li>
<li>tagValue：标签Value。</li>
      */
  Filters?: Array<QueryCondition>

  /**
      * 查询时间粒度，取值有：
<li>min: 1分钟；</li>
<li>5min: 5分钟；</li>
<li>hour: 1小时；</li>
<li>day: 1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * 域名 https 加速配置，默认为关闭状态
 */
export interface Https {
  /**
      * http2 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Http2?: string

  /**
      * OCSP 配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  OcspStapling?: string

  /**
      * Tls版本设置，取值有：
<li>TLSv1：TLSv1版本；</li>
<li>TLSV1.1：TLSv1.1版本；</li>
<li>TLSV1.2：TLSv1.2版本；</li>
<li>TLSv1.3：TLSv1.3版本。</li>修改时必须开启连续的版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TlsVersion?: Array<string>

  /**
      * HSTS 配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Hsts?: Hsts

  /**
      * 证书配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertInfo?: Array<ServerCertInfo>
}

/**
 * DescribeBotManagedRules返回参数结构体
 */
export interface DescribeBotManagedRulesResponse {
  /**
   * 本次返回的规则数。
   */
  Count: number

  /**
   * Bot规则。
   */
  BotManagedRuleDetails: Array<BotManagedRuleDetail>

  /**
   * 总规则数。
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询，支持模糊查询。例如过滤ID、名称、状态等。
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface AdvancedFilter {
  /**
   * 需要过滤的字段。
   */
  Name: string

  /**
   * 字段的过滤值。
   */
  Values: Array<string>

  /**
   * 是否启用模糊查询。
   */
  Fuzzy?: boolean
}

/**
 * CreateCustomErrorPage返回参数结构体
 */
export interface CreateCustomErrorPageResponse {
  /**
   * 自定义页面上传后的唯一id。
   */
  PageId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDDoSAttackData返回参数结构体
 */
export interface DescribeDDoSAttackDataResponse {
  /**
      * DDoS攻击数据内容列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyZoneSetting请求参数结构体
 */
export interface ModifyZoneSettingRequest {
  /**
   * 待变更的站点ID。
   */
  ZoneId: string

  /**
      * 缓存过期时间配置。
不填写表示保持原有配置。
      */
  CacheConfig?: CacheConfig

  /**
      * 节点缓存键配置。
不填写表示保持原有配置。
      */
  CacheKey?: CacheKey

  /**
      * 浏览器缓存配置。
不填写表示保持原有配置。
      */
  MaxAge?: MaxAge

  /**
      * 离线缓存配置。
不填写表示保持原有配置。
      */
  OfflineCache?: OfflineCache

  /**
      * Quic访问配置。
不填写表示保持原有配置。
      */
  Quic?: Quic

  /**
      * Post请求传输配置。
不填写表示保持原有配置。
      */
  PostMaxSize?: PostMaxSize

  /**
      * 智能压缩配置。
不填写表示保持原有配置。
      */
  Compression?: Compression

  /**
      * Http2回源配置。
不填写表示保持原有配置。
      */
  UpstreamHttp2?: UpstreamHttp2

  /**
      * 访问协议强制Https跳转配置。
不填写表示保持原有配置。
      */
  ForceRedirect?: ForceRedirect

  /**
      * Https加速配置。
不填写表示保持原有配置。
      */
  Https?: Https

  /**
      * 源站配置。
不填写表示保持原有配置。
      */
  Origin?: Origin

  /**
      * 智能加速配置。
不填写表示保持原有配置。
      */
  SmartRouting?: SmartRouting

  /**
      * WebSocket配置。
不填写表示保持原有配置。
      */
  WebSocket?: WebSocket

  /**
      * 客户端IP回源请求头配置。
不填写表示保持原有配置。
      */
  ClientIpHeader?: ClientIpHeader

  /**
      * 缓存预刷新配置。
不填写表示保持原有配置。
      */
  CachePrefresh?: CachePrefresh

  /**
      * Ipv6访问配置。
不填写表示保持原有配置。
      */
  Ipv6?: Ipv6
}

/**
 * DDoS端口过滤
 */
export interface DDoSAcl {
  /**
   * 端口过滤规则数组。
   */
  DDoSAclRules: Array<DDoSAclRule>

  /**
      * 清空规则标识，取值有：
<li>off ：清空端口过滤规则列表，DDoSAclRules无需填写；</li>
<li>on ：配置端口过滤规则，需填写DDoSAclRules参数。</li>
      */
  Switch: string
}

/**
 * ModifyApplicationProxyRuleStatus返回参数结构体
 */
export interface ModifyApplicationProxyRuleStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClientRuleList请求参数结构体
 */
export interface DescribeClientRuleListRequest {
  /**
   * 查询的站点ID.
   */
  ZoneId: string

  /**
   * 查询的子域名。
   */
  Domain: string

  /**
      * 规则类型，取值有：
<li>acl：自定义规则；</li>
<li>rate：限速规则。</li>不填表示查询所有规则。
      */
  RuleType?: string

  /**
   * 规则ID。
   */
  RuleId?: number

  /**
   * 客户端IP。
   */
  SourceClientIp?: string

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * ModifyZone请求参数结构体
 */
export interface ModifyZoneRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
      * 站点接入方式，取值有：
<li> full：NS 接入；</li>
<li> partial：CNAME 接入。</li>不填写保持原有配置。
      */
  Type?: string

  /**
   * 自定义站点信息，以替代系统默认分配的名称服务器。不填写保持原有配置。
   */
  VanityNameServers?: VanityNameServers
}

/**
 * DescribeAvailablePlans请求参数结构体
 */
export type DescribeAvailablePlansRequest = null

/**
 * ModifyZone返回参数结构体
 */
export interface ModifyZoneResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 托管规则详情
 */
export interface WafGroupRule {
  /**
   * 规则id。
   */
  RuleId?: number

  /**
   * 规则描述。
   */
  Description?: string

  /**
   * 等级描述。
   */
  RuleLevelDesc?: string

  /**
      * 规则标签。部分类型的规则不存在该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleTags?: Array<string>

  /**
      * 更新时间，格式为YYYY-MM-DD hh:mm:ss。部分类型的规则不存在该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
      * 状态，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>为空时对应接口Status无意义，例如仅查询规则详情时。
      */
  Status?: string

  /**
   * 规则类型名。
   */
  RuleTypeName?: string

  /**
   * 规则类型id。
   */
  RuleTypeId?: number

  /**
   * 规则类型描述。
   */
  RuleTypeDesc?: string
}

/**
 * DDoS配置端口过滤
 */
export interface DDoSAclRule {
  /**
   * 目的端口结束，取值范围0-65535。
   */
  DportEnd: number

  /**
   * 目的端口开始，取值范围0-65535。
   */
  DportStart: number

  /**
   * 源端口结束，取值范围0-65535。
   */
  SportEnd: number

  /**
   * 源端口开始，取值范围0-65535。
   */
  SportStart: number

  /**
      * 协议，取值有：
<li>tcp ：tcp协议 ；</li>
<li>udp ：udp协议 ；</li>
<li>all ：全部协议 。</li>
      */
  Protocol: string

  /**
      * 执行动作，取值为：
<li>drop ：丢弃 ；</li>
<li>transmit ：放行 ；</li>
<li>forward ：继续防护 。</li>
      */
  Action: string
}

/**
 * DescribeBotTopData返回参数结构体
 */
export interface DescribeBotTopDataResponse {
  /**
      * Bot攻击TopN数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TopEntry>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBotClientIpList请求参数结构体
 */
export interface DescribeBotClientIpListRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 子域名列表，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
      * 查询时间粒度，取值有：
<li>min ：1分钟；</li>
<li>5min ：5分钟；</li>
<li>hour ：1小时；</li>
<li>day ：1天。 </li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 筛选条件，key可选的值有：
<li>action: 执行动作。 </li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
   * 分页查询的限制数目，默认值为20，最大查询条目为1000。
   */
  Limit?: number

  /**
   * 分页的偏移量，默认值为0。
   */
  Offset?: number

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据； </li>
<li>mainland ：中国大陆地区数据。 </li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * 规则引擎HTTP请求头/响应头类型的动作
 */
export interface RewriteAction {
  /**
   * 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
   */
  Action: string

  /**
   * 参数。
   */
  Parameters: Array<RuleRewriteActionParams>
}

/**
 * IP黑白名单详细规则
 */
export interface IpTableRule {
  /**
      * 动作，取值有：
<li> drop：拦截；</li>
<li> trans：放行；</li>
<li> monitor：观察。</li>
      */
  Action: string

  /**
      * 根据类型匹配，取值有：
<li>ip：对ip进行匹配；</li>
<li>area：对ip所属地区匹配。</li>
      */
  MatchFrom: string

  /**
   * 匹配内容。
   */
  MatchContent: string

  /**
   * 规则id。仅出参使用。
   */
  RuleID?: number

  /**
   * 更新时间。仅出参使用。
   */
  UpdateTime?: string
}

/**
 * DescribeDDoSAttackTopData请求参数结构体
 */
export interface DescribeDDoSAttackTopDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 查询的统计指标，取值有：
<li>ddos_attackFlux_protocol：攻击总流量协议类型分布排行；</li>
<li>ddos_attackPackageNum_protocol：攻击总包量协议类型分布排行；</li>
<li>ddos_attackNum_attackType：攻击总次数攻击类型分布排行；</li>
<li>ddos_attackNum_sregion：攻击总次数攻击源地区分布排行；</li>
<li>ddos_attackFlux_sip：攻击总流量攻击源ip分布排行；</li>
<li>ddos_attackFlux_sregion：攻击总流量攻击源地区分布排行。</li>
      */
  MetricName: string

  /**
   * 站点ID集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * DDoS策略组ID集合，不填默认选择全部策略ID。
   */
  PolicyIds?: Array<number>

  /**
      * 攻击类型，取值有：
<li>flood：洪泛攻击；</li>
<li>icmpFlood：icmp洪泛攻击；</li>
<li>all：所有的攻击类型。</li>不填默认为all，表示查询全部攻击类型。
      */
  AttackType?: string

  /**
      * 协议类型，取值有：
<li>tcp：tcp协议；</li>
<li>udp：udp协议；</li>
<li>all：所有的协议类型。</li>不填默认为all，表示查询所有协议。
      */
  ProtocolType?: string

  /**
   * 端口号。
   */
  Port?: number

  /**
   * 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。
   */
  Limit?: number

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * Quic配置项
 */
export interface Quic {
  /**
      * 是否开启Quic配置，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string
}

/**
 * DescribeRules请求参数结构体
 */
export interface DescribeRulesRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>rule-id<br>   按照【<strong>规则ID</strong>】进行过滤。<br>   类型：string<br>   必选：否
      */
  Filters?: Array<Filter>
}

/**
 * CC拦截事件
 */
export interface CCInterceptEvent {
  /**
   * 客户端IP。
   */
  ClientIp: string

  /**
   * 拦截次数/min。
   */
  InterceptNum: number

  /**
   * 速拦截时间，分钟时间/min，单位为s。
   */
  InterceptTime: number
}

/**
 * DescribeDDoSMajorAttackEvent返回参数结构体
 */
export interface DescribeDDoSMajorAttackEventResponse {
  /**
      * DDos主攻击事件数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<DDoSMajorAttackEvent>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeContentQuota返回参数结构体
 */
export interface DescribeContentQuotaResponse {
  /**
      * 刷新相关配额。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PurgeQuota: Array<Quota>

  /**
      * 预热相关配额。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrefetchQuota: Array<Quota>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyZoneSetting返回参数结构体
 */
export interface ModifyZoneSettingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadL7Logs返回参数结构体
 */
export interface DownloadL7LogsResponse {
  /**
      * 七层离线日志数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<L7OfflineLog>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dns统计曲线数据项
 */
export interface DnsData {
  /**
   * 时间。
   */
  Time: string

  /**
   * 数值。
   */
  Value: number
}

/**
 * DescribeWebManagedRulesLog返回参数结构体
 */
export interface DescribeWebManagedRulesLogResponse {
  /**
      * Web攻击日志数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<WebLogs>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户自定义规则
 */
export interface AclUserRule {
  /**
   * 规则名。
   */
  RuleName: string

  /**
      * 处罚动作，取值有：
<li>trans：放行；</li>
<li>drop：拦截；</li>
<li>monitor：观察；</li>
<li>ban：IP封禁；</li>
<li>redirect：重定向；</li>
<li>page：指定页面；</li>
<li>alg：Javascript挑战。</li>
      */
  Action: string

  /**
      * 规则状态，取值有：
<li>on：生效；</li>
<li>off：失效。</li>
      */
  RuleStatus: string

  /**
   * 自定义规则。
   */
  AclConditions: Array<AclCondition>

  /**
   * 规则优先级，取值范围0-100。
   */
  RulePriority: number

  /**
      * 规则Id。仅出参使用。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 更新时间。仅出参使用。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
      * ip封禁的惩罚时间，取值范围0-2天。默认为0。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTime?: number

  /**
      * ip封禁的惩罚时间单位，取值有：
<li>second：秒；</li>
<li>minutes：分；</li>
<li>hour：小时。</li>默认为second。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTimeUnit?: string

  /**
      * 自定义返回页面的名称。默认为空字符串。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string

  /**
      * 自定义返回页面的实例id。默认为0。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageId?: number

  /**
      * 重定向时候的地址，必须为本用户接入的站点子域名。默认为空字符串。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RedirectUrl?: string

  /**
      * 重定向时候的返回码。默认为0。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseCode?: number
}

/**
 * Top数据的详细信息
 */
export interface TopDetailData {
  /**
   * 字段名。
   */
  Key: string

  /**
   * 字段值。
   */
  Value: number
}

/**
 * DescribeOverviewL7Data请求参数结构体
 */
export interface DescribeOverviewL7DataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 查询的指标，取值有：
<li>l7Flow_outFlux: 访问流量；</li>
<li>l7Flow_request: 访问请求数；</li>
<li>l7Flow_outBandwidth: 访问带宽；</li>
<li>l7Flow_hit_outFlux: 缓存命中流量。</li>
      */
  MetricNames: Array<string>

  /**
   * 查询的站点集合，不填默认查询所有站点。
   */
  ZoneIds?: Array<string>

  /**
   * 查询的域名集合，不填默认查询所有子域名。
   */
  Domains?: Array<string>

  /**
      * 查询的协议类型，取值有：
<li>http: http协议；</li>
<li>https: https协议；</li>
<li>http2: http2协议；</li>
<li>all:  所有协议。</li>不填默认为: all，表示查询所有协议。
      */
  Protocol?: string

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户的地域智能选择地区。
      */
  Area?: string

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>tagKey<br>   按照【<strong>标签Key</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
<li>tagValue<br>   按照【<strong>标签Value</strong>】进行过滤。<br>   类型：String<br>   必选：否</li>
      */
  Filters?: Array<QueryCondition>
}

/**
 * WebSocket配置
 */
export interface WebSocket {
  /**
      * WebSocket 超时时间配置开关，取值有：
<li>on：使用Timeout作为WebSocket超时时间；</li>
<li>off：平台仍支持WebSocket连接，此时使用系统默认的15秒为超时时间。</li>
      */
  Switch: string

  /**
   * 超时时间，单位为秒，最大超时时间120秒。
   */
  Timeout?: number
}

/**
 * DescribeWebProtectionTopData请求参数结构体
 */
export interface DescribeWebProtectionTopDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>ccRate_requestNum_url：速率限制规则请求次数url分布排行；</li>
<li>ccRate_cipRequestNum_region：速率限制规则请求次数区域客户端ip分布排行；</li>
<li>ccAcl_requestNum_url：自定义规则请求次数url分布排行；</li>
<li>ccAcl_requestNum_cip：自定义规则请求次数客户端ip分布排行；</li>
<li>ccAcl_cipRequestNum_region：自定义规则请求次数客户端区域分布排行。</li>
      */
  MetricName: string

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
   * 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。
   */
  Limit?: number

  /**
      * 筛选条件，key可选的值有：
<li>action：执行动作 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DDoS封禁解封信息
 */
export interface DDoSBlockData {
  /**
   * 开始时间，采用unix时间戳。
   */
  StartTime: number

  /**
   * 结束时间，采用unix时间戳。
   */
  EndTime: number
}

/**
 * ModifySecurityWafGroupPolicy返回参数结构体
 */
export interface ModifySecurityWafGroupPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebManagedRulesData请求参数结构体
 */
export interface DescribeWebManagedRulesDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>waf_interceptNum：waf拦截次数。</li>
      */
  MetricNames: Array<string>

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 子域名集合，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
      * 筛选条件，key可选的值有：
<li>action：执行动作。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 查询时间粒度，取值有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * 拨测配额数据。
 */
export interface SpeedTestingQuota {
  /**
   * 站点总拨测次数。
   */
  TotalTestRuns: number

  /**
   * 站点剩余可用拨测次数。
   */
  AvailableTestRuns: number
}

/**
 * DescribePrefetchTasks请求参数结构体
 */
export interface DescribePrefetchTasksRequest {
  /**
   * 查询起始时间。
   */
  StartTime?: string

  /**
   * 查询结束时间。
   */
  EndTime?: string

  /**
   * 分页查询偏移量，默认为 0。
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认值：20，上限：1000。
   */
  Limit?: number

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-id<br>   按照【<strong>站点 ID</strong>】进行过滤。zone-id形如：zone-1379afjk91u32h，暂不支持多值。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。<li>job-id<br>   按照【<strong>任务ID</strong>】进行过滤。job-id形如：1379afjk91u32h，暂不支持多值。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。<li>target<br>   按照【<strong>目标资源信息</strong>】进行过滤。target形如：http://www.qq.com/1.txt，暂不支持多值。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。<li>domains<br>   按照【<strong>域名</strong>】进行过滤。domains形如：www.qq.com。<br>   类型：String<br>   必选：否。<br>   模糊查询：不支持。<li>statuses<br>   按照【<strong>任务状态</strong>】进行过滤。<br>   必选：否<br>   模糊查询：不支持。<br>   可选项：<br>   processing：处理中<br>   success：成功<br>   failed：失败<br>   timeout：超时
      */
  Filters?: Array<AdvancedFilter>
}

/**
 * DNS 记录
 */
export interface DnsRecord {
  /**
   * 记录 ID。
   */
  DnsRecordId: string

  /**
      * DNS记录类型，取值有：
<li>A：将域名指向一个外网 IPv4 地址，如 8.8.8.8；</li>
<li>AAAA：将域名指向一个外网 IPv6 地址；</li>
<li>MX：用于邮箱服务器，相关记录值/优先级参数由邮件注册商提供。存在多条 MX 记录时，优先级越低越优先；</li>
<li>CNAME：将域名指向另一个域名，再由该域名解析出最终 IP 地址；</li>
<li>TXT：对域名进行标识和说明，常用于域名验证和 SPF 记录（反垃圾邮件）；</li>
<li>NS：如果需要将子域名交给其他 DNS 服务商解析，则需要添加 NS 记录。根域名无法添加 NS 记录；</li>
<li>CAA：指定可为本站点颁发证书的 CA；</li>
<li>SRV：标识某台服务器使用了某个服务，常见于微软系统的目录管理。</li>
      */
  DnsRecordType: string

  /**
   * 记录名称。
   */
  DnsRecordName: string

  /**
   * 记录值。
   */
  Content: string

  /**
      * 代理模式，取值有：
<li>dns_only：仅DNS解析；</li>
<li>proxied：代理加速。</li>
      */
  Mode: string

  /**
   * 缓存时间，数值越小，修改记录各地生效时间越快，单位：秒。
   */
  TTL: number

  /**
   * MX记录优先级，数值越小越优先。
   */
  Priority: number

  /**
   * 创建时间。
   */
  CreatedOn: string

  /**
   * 修改时间。
   */
  ModifiedOn: string

  /**
   * 域名锁定状态。
   */
  Locked: boolean

  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
      * 记录解析状态，取值有：
<li>active：生效；</li>
<li>pending：不生效。</li>
      */
  Status: string

  /**
      * CNAME 地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cname: string

  /**
      * 域名服务类型，取值有：
<li>lb：负载均衡；</li>
<li>security：安全；</li>
<li>l4：四层代理。</li>
      */
  DomainStatus: Array<string>
}

/**
 * ModifyRulePriority请求参数结构体
 */
export interface ModifyRulePriorityRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
   * 规则 ID 的顺序，多条规则执行顺序依次往下。
   */
  RuleIds: Array<string>
}

/**
 * 拨测统计结果
 */
export interface SpeedTestingStatistics {
  /**
      * 首屏时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstContentfulPaint: number

  /**
      * 首屏完全渲染时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstMeaningfulPaint: number

  /**
      * 整体下载速度，单位 KB/s。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OverallDownloadSpeed: number

  /**
      * 渲染时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RenderTime: number

  /**
      * 文档完成时间, 单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DocumentFinishTime: number

  /**
      * 基础文档TCP连接时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TcpConnectionTime: number

  /**
      * 基础文档服务器响应时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseTime: number

  /**
      * 基础文档下载时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileDownloadTime: number

  /**
      * 整体性能，测试总时间，单位 ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadTime: number
}

/**
 * 安全类型配置项。
 */
export interface SecurityType {
  /**
      * 安全类型开关，取值为：
<li> on：开启；</li>
<li> off：关闭。</li>
      */
  Switch: string
}

/**
 * ModifyRule返回参数结构体
 */
export interface ModifyRuleResponse {
  /**
   * 规则 ID。
   */
  RuleId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckCertificate返回参数结构体
 */
export interface CheckCertificateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebProtectionData请求参数结构体
 */
export interface DescribeWebProtectionDataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 统计指标，取值有：
<li>ccRate_interceptNum：速率限制规则限制次数；</li>
<li>ccAcl_interceptNum：自定义规则拦截次数。</li>
      */
  MetricNames: Array<string>

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
      * 查询时间粒度，支持的时间粒度有：
<li>min：1分钟；</li>
<li>5min：5分钟；</li>
<li>hour：1小时；</li>
<li>day：1天。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 筛选条件，key可选的值有：
<li>action：执行动作。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * DescribeSecurityPortraitRules返回参数结构体
 */
export interface DescribeSecurityPortraitRulesResponse {
  /**
   * 本次返回的规则数。
   */
  Count: number

  /**
   * Bot用户画像规则。
   */
  PortraitManagedRuleDetails: Array<PortraitManagedRuleDetail>

  /**
   * 总规则数。
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDDoSPolicy请求参数结构体
 */
export interface ModifyDDoSPolicyRequest {
  /**
   * 策略Id。
   */
  PolicyId: number

  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * DDoS防护配置详情。
   */
  DDoSRule?: DDoSRule
}

/**
 * ModifyApplicationProxyStatus返回参数结构体
 */
export interface ModifyApplicationProxyStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 站点验证信息
 */
export interface Identification {
  /**
   * 站点名称。
   */
  ZoneName: string

  /**
      * 验证状态，取值有：
<li> pending：验证中；</li>
<li> finished：验证完成。</li>
      */
  Status: string

  /**
   * 站点归属信息。
   */
  Ascription: AscriptionInfo

  /**
      * 域名当前的 NS 记录。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalNameServers: Array<string>
}

/**
 * ModifyAlarmConfig请求参数结构体
 */
export interface ModifyAlarmConfigRequest {
  /**
      * 告警服务类型，取值有：
<li>ddos：ddos告警服务。</li>
      */
  ServiceType: string

  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 告警维度值列表。
   */
  EntityList: Array<string>

  /**
   * 告警阈值，不传或者传0表示不修改阈值。
   */
  Threshold?: number

  /**
   * 是否使用默认值，只有在不传Threshold或者Threshold=0时该参数有效。
   */
  IsDefault?: boolean
}

/**
 * DeleteLogTopicTask返回参数结构体
 */
export interface DeleteLogTopicTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLoadBalancing返回参数结构体
 */
export interface ModifyLoadBalancingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TopN的Entry数据
 */
export interface TopEntry {
  /**
   * top查询维度值。
   */
  Key: string

  /**
   * 查询具体数据。
   */
  Value: Array<TopEntryValue>
}

/**
 * DescribeRulesSetting返回参数结构体
 */
export interface DescribeRulesSettingResponse {
  /**
   * 规则引擎可应用匹配请求的设置列表及其详细建议配置信息。
   */
  Actions: Array<RulesSettingAction>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Bot智能分析规则详情
 */
export interface IntelligenceRuleItem {
  /**
      * 智能分析标签，取值有：
<li>evil_bot：恶意bot；</li>
<li>suspect_bot：疑似bot；</li>
<li>good_bot：良好bot；</li>
<li>normal：正常请求。</li>
      */
  Label: string

  /**
      * 触发智能分析标签对应的处置方式，取值有：
<li>drop：拦截；</li>
<li>trans：放行；</li>
<li>alg：Javascript挑战；</li>
<li>captcha：数字验证码；</li>
<li>monitor：观察。</li>
      */
  Action: string
}

/**
 * DescribeLogTopicTaskDetail返回参数结构体
 */
export interface DescribeLogTopicTaskDetailResponse {
  /**
      * 推送任务详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogTopicDetailInfo: LogTopicDetailInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * POST请求上传文件流式传输最大限制
 */
export interface PostMaxSize {
  /**
      * 是否开启POST请求上传文件限制，平台默认为限制为32MB，取值有：
<li>on：开启限制；</li>
<li>off：关闭限制。</li>
      */
  Switch: string

  /**
      * 最大限制，取值在1MB和500MB之间。单位字节。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxSize?: number
}

/**
 * DescribeBillingData返回参数结构体
 */
export interface DescribeBillingDataResponse {
  /**
      * 统计曲线数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<DnsData>

  /**
      * 时间粒度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Interval: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等。
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Name: string

  /**
   * 字段的过滤值。
   */
  Values: Array<string>
}

/**
 * CreateZone返回参数结构体
 */
export interface CreateZoneResponse {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpeedTestingQuota请求参数结构体
 */
export interface DescribeSpeedTestingQuotaRequest {
  /**
   * 站点ID。
   */
  ZoneId: string
}

/**
 * ModifySecurityPolicy返回参数结构体
 */
export interface ModifySecurityPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyOriginGroup请求参数结构体
 */
export interface ModifyOriginGroupRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 源站组ID。
   */
  OriginGroupId: string

  /**
      * 源站类型，取值有：
<li>self：自有源站；</li>
<li>third_party：第三方源站；</li>
<li>cos：腾讯云COS源站。</li>
      */
  OriginType: string

  /**
   * 源站组名称。
   */
  OriginGroupName: string

  /**
      * 源站配置类型，当OriginType=self时，取值有：
<li>area：按区域配置；</li>
<li>weight： 按权重配置；</li>
<li>proto： 按HTTP协议配置。</li>当OriginType=third_party/cos时放空。
      */
  ConfigurationType: string

  /**
   * 源站记录信息。
   */
  OriginRecords: Array<OriginRecord>
}

/**
 * DescribeAddableEntityList请求参数结构体
 */
export interface DescribeAddableEntityListRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
      * 推送数据类型，取值有:
<li>domain：七层加速日志；</li>
<li>application：四层加速日志；</li>
<li>web-rateLiming：速率限制日志；</li>
<li>web-attack：web攻击防护日志；</li>
<li>web-rule：自定义规则日志；</li>
<li>web-bot：Bot管理日志。</li>
      */
  EntityType: string
}

/**
 * DescribeSingleL7AnalysisData返回参数结构体
 */
export interface DescribeSingleL7AnalysisDataResponse {
  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
      * 单值流量数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SingleDataRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDefaultCertificates返回参数结构体
 */
export interface DescribeDefaultCertificatesResponse {
  /**
   * 证书总数。
   */
  TotalCount: number

  /**
   * 默认证书列表。
   */
  DefaultServerCertInfo: Array<DefaultServerCertInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOriginGroup返回参数结构体
 */
export interface CreateOriginGroupResponse {
  /**
   * 源站组ID。
   */
  OriginGroupId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityPolicy返回参数结构体
 */
export interface DescribeSecurityPolicyResponse {
  /**
      * 安全配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityConfig: SecurityConfig

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 站点拨测配置
 */
export interface SpeedTestingConfig {
  /**
      * 任务类型，取值有：
<li>1：页面性能;</li>
<li>2：文件上传;</li>
<li>3：文件下载;</li>
<li>4：端口性能;</li>
<li>5：网络质量;</li>
<li>6：音视频体验。</li>
      */
  TaskType: number

  /**
   * 拨测 url。
   */
  Url: string

  /**
   * 拨测 UA。
   */
  UA: string

  /**
   * 网络类型。
   */
  Connectivity: string
}

/**
 * DescribeSecurityPolicyRegions请求参数结构体
 */
export interface DescribeSecurityPolicyRegionsRequest {
  /**
   * 分页查询偏移量。默认值：0。
   */
  Offset?: number

  /**
   * 分页查询限制数目。默认值：20，最大值：1000。
   */
  Limit?: number
}

/**
 * AI规则引擎防护
 */
export interface AiRule {
  /**
      * AI规则引擎状态，取值有：
<li> smart_status_close：关闭；</li>
<li> smart_status_open：拦截处置；</li>
<li> smart_status_observe：观察处置。</li>
      */
  Mode: string
}

/**
 * DescribeLoadBalancing请求参数结构体
 */
export interface DescribeLoadBalancingRequest {
  /**
   * 分页查询偏移量，默认为0。
   */
  Offset: number

  /**
   * 分页查询限制数目，默认为10，取值：1-1000。
   */
  Limit: number

  /**
      * 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：
<li>zone-id<br>   按照【<strong>站点ID</strong>】进行过滤。站点ID形如：zone-1a8df68z<br>   类型：String<br>   必选：否<br>   模糊查询：不支持
<li>load-balancing-id<br>   按照【<strong>负载均衡ID</strong>】进行过滤。负载均衡ID形如：lb-d21bfaf7-8d72-11ec-841d-00ff977fb3c8<br>   类型：String<br>   必选：否<br>   模糊查询：不支持
<li>host<br>   按照【<strong>负载均衡host</strong>】进行过滤。host形如：lb.tencent.com<br>   类型：String<br>   必选：否<br>   模糊查询：支持，模糊查询时仅支持一个host
      */
  Filters?: Array<AdvancedFilter>
}

/**
 * DescribeWebProtectionData返回参数结构体
 */
export interface DescribeWebProtectionDataResponse {
  /**
      * CC防护时序数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 刷新/预热 可用量及配额
 */
export interface Quota {
  /**
   * 单次批量提交配额上限。
   */
  Batch: number

  /**
   * 每日提交配额上限。
   */
  Daily: number

  /**
   * 每日剩余的可提交配额。
   */
  DailyAvailable: number

  /**
      * 配额类型，取值有：
<li> purge_prefix：前缀；</li>
<li> purge_url：URL；</li>
<li> purge_host：Hostname；</li>
<li> purge_all：全部缓存内容。</li>
      */
  Type: string
}

/**
 * DescribeZoneDDoSPolicy返回参数结构体
 */
export interface DescribeZoneDDoSPolicyResponse {
  /**
   * DDoS防护分区。
   */
  ShieldAreas: Array<ShieldArea>

  /**
      * 所有开启代理的子域名信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DDoSHosts: Array<DDoSHost>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyZoneStatus返回参数结构体
 */
export interface ModifyZoneStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebProtectionAttackEvents返回参数结构体
 */
export interface DescribeWebProtectionAttackEventsResponse {
  /**
      * CC相关攻击事件列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<CCInterceptEvent>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePurgeTask请求参数结构体
 */
export interface CreatePurgeTaskRequest {
  /**
   * 站点ID。
   */
  ZoneId: string

  /**
      * 清除缓存类型，取值有：
<li>purge_url：URL；</li>
<li>purge_prefix：前缀；</li>
<li>purge_host：Hostname；</li>
<li>purge_all：全部缓存。</li>
      */
  Type: string

  /**
      * 要刷新的资源列表，每个元素格式依据Type而定：
1) Type = purge_host 时：
形如：www.example.com 或 foo.bar.example.com。
2) Type = purge_prefix 时：
形如：http://www.example.com/example。
3) Type = purge_url 时：
形如：https://www.example.com/example.jpg。
4）Type = purge_all 时：
Targets可为空，不需要填写。
      */
  Targets?: Array<string>

  /**
      * 若有编码转换，仅清除编码转换后匹配的资源。
若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。
      */
  EncodeUrl?: boolean
}

/**
 * DeleteDnsRecords返回参数结构体
 */
export interface DeleteDnsRecordsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityRuleId返回参数结构体
 */
export interface DescribeSecurityRuleIdResponse {
  /**
   * 规则列表。
   */
  WafGroupRules: Array<WafGroupRule>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePurgeTasks返回参数结构体
 */
export interface DescribePurgeTasksResponse {
  /**
   * 该查询条件总共条目数。
   */
  TotalCount: number

  /**
   * 任务结果列表。
   */
  Tasks: Array<Task>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBotLog返回参数结构体
 */
export interface DescribeBotLogResponse {
  /**
      * Bot攻击数据信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<BotLog>

  /**
   * 查询结果的总条数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoadBalancing返回参数结构体
 */
export interface DescribeLoadBalancingResponse {
  /**
   * 记录总数。
   */
  TotalCount: number

  /**
   * 负载均衡信息。
   */
  Data: Array<LoadBalancing>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能客户端过滤
 */
export interface RateLimitIntelligence {
  /**
      * 功能开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string

  /**
      * 执行动作，取值有：
<li>monitor：观察；</li>
<li>alg：挑战。</li>
      */
  Action: string
}

/**
 * CacheKey中包含请求参数
 */
export interface QueryString {
  /**
      * CacheKey是否由QueryString组成，取值有：
<li>on：是；</li>
<li>off：否。</li>
      */
  Switch: string

  /**
      * CacheKey使用QueryString的方式，取值有：
<li>includeCustom：使用部分url参数；</li>
<li>excludeCustom：排除部分url参数。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 使用/排除的url参数数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value?: Array<string>
}

/**
 * 时序类型详细数据
 */
export interface TimingTypeValue {
  /**
   * 数据和。
   */
  Sum: number

  /**
   * 最大值。
   */
  Max: number

  /**
   * 平均值。
   */
  Avg: number

  /**
   * 指标名。
   */
  MetricName: string

  /**
      * 详细数据。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Detail: Array<TimingDataItem>
}

/**
 * DescribeTimingL4Data请求参数结构体
 */
export interface DescribeTimingL4DataRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 查询指标，取值有：
<li>l4Flow_connections: 访问连接数；</li>
<li>l4Flow_flux: 访问总流量；</li>
<li>l4Flow_inFlux: 访问入流量；</li>
<li>l4Flow_outFlux: 访问出流量；</li>
<li> l4Flow_outPkt: 访问出包量。</li>
      */
  MetricNames: Array<string>

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 四层实例列表, 不填表示选择全部实例。
   */
  ProxyIds?: Array<string>

  /**
      * 查询时间粒度，取值有：
<li>min: 1分钟 ；</li>
<li>5min: 5分钟 ；</li>
<li>hour: 1小时 ；</li>
<li>day: 1天 。</li>不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。
      */
  Interval?: string

  /**
      * 筛选条件, key可选的值有：
<li>ruleId: 根据规则Id进行过滤；</li>
<li>proxyId: 根据通道Id进行过滤。</li>
      */
  Filters?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas：全球（除中国大陆地区）数据；</li>
<li>mainland：中国大陆地区数据。</li>不填将根据用户所在地智能选择地区。
      */
  Area?: string
}

/**
 * 自定义名字服务器 IP 信息
 */
export interface VanityNameServersIps {
  /**
   * 自定义名字服务器名称。
   */
  Name: string

  /**
   * 自定义名字服务器 IPv4 地址。
   */
  IPv4: string
}

/**
 * DescribeBotManagedRules请求参数结构体
 */
export interface DescribeBotManagedRulesRequest {
  /**
   * 站点Id。
   */
  ZoneId: string

  /**
   * 子域名。
   */
  Entity: string

  /**
   * 分页查询偏移量。默认值：0。
   */
  Offset: number

  /**
   * 分页查询限制数目。默认值：20，最大值：1000。
   */
  Limit: number

  /**
      * 规则类型，取值有：
<li> idcid；</li>
<li>sipbot；</li>
<li>uabot。</li>传空或不传，即全部类型。
      */
  RuleType?: string
}

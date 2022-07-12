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
 * 智能压缩配置
 */
export interface Compression {
  /**
      * 智能压缩配置开关
on：开启
off：关闭
      */
  Switch: string
}

/**
 * web攻击日志Data
 */
export interface WebLogData {
  /**
      * 数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<WebLogs>

  /**
      * 当前页
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * 域名证书配置
 */
export interface HostCertSetting {
  /**
      * 域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Host: string

  /**
      * 服务端证书配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertInfo: Array<ServerCertInfo>
}

/**
 * ACL用户规则
 */
export interface ACLUserRule {
  /**
   * 规则名
   */
  RuleName: string

  /**
   * 动作
   */
  Action: string

  /**
   * 状态
   */
  RuleStatus: string

  /**
   * ACL规则
   */
  Conditions: Array<ACLCondition>

  /**
   * 规则优先级
   */
  RulePriority: number

  /**
      * 规则id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
      * ip封禁的惩罚时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTime?: number

  /**
      * ip封禁的惩罚时间单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTimeUnit?: string

  /**
      * 自定义返回页面的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string

  /**
      * 自定义返回页面的实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageId?: number

  /**
      * 重定向时候的地址，必须为本用户接入的站点子域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  RedirectUrl?: string

  /**
      * 重定向时候的返回码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseCode?: number
}

/**
 * ModifyDefaultCertificate请求参数结构体
 */
export interface ModifyDefaultCertificateRequest {
  /**
   * Zone ID
   */
  ZoneId: string

  /**
   * 默认证书ID
   */
  CertId?: string

  /**
      * 证书状态
deployed: 部署证书
disabled:禁用证书
失败状态下重新deployed即可重试失败
      */
  Status?: string
}

/**
 * DescribeWebManagedRulesTopData返回参数结构体
 */
export interface DescribeWebManagedRulesTopDataResponse {
  /**
   * topn数据
   */
  Data: Array<TopNEntry>

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回消息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOriginGroup返回参数结构体
 */
export interface DescribeOriginGroupResponse {
  /**
   * 源站组信息
   */
  Data: Array<OriginGroup>

  /**
   * 记录总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebManagedRulesAttackEvents返回参数结构体
 */
export interface DescribeWebManagedRulesAttackEventsResponse {
  /**
   * Web攻击事件数据
   */
  Data: WebEventData

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回数据
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopL7CacheData请求参数结构体
 */
export interface DescribeTopL7CacheDataRequest {
  /**
   * RFC3339标准，客户端时间
   */
  StartTime: string

  /**
   * RFC3339标准，客户端时间
   */
  EndTime: string

  /**
   * 时序类访问流量指标
   */
  MetricName: string

  /**
   * topN,填0时返回全量数据
   */
  Limit: number

  /**
   * 时间间隔，选填{min, 5min, hour, day, week}
   */
  Interval: string

  /**
   * ZoneId数组
   */
  ZoneIds?: Array<string>

  /**
   * 筛选条件
   */
  Filters?: Array<Filter>
}

/**
 * DeleteApplicationProxy返回参数结构体
 */
export interface DeleteApplicationProxyResponse {
  /**
   * 代理ID
   */
  ProxyId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 域名 https 加速配置，默认为关闭状态
 */
export interface Https {
  /**
      * http2 配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Http2?: string

  /**
      * OCSP 配置开关
on：开启
off：关闭
默认为关闭状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  OcspStapling?: string

  /**
      * Tls版本设置，支持设置 TLSv1, TLSV1.1, TLSV1.2, TLSv1.3，修改时必须开启连续的版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  TlsVersion?: Array<string>

  /**
      * HSTS 配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Hsts?: Hsts
}

/**
 * 安全防护实例
 */
export interface SecurityEntity {
  /**
   * 用户appid
   */
  AppId: number

  /**
   * 一级域名
   */
  ZoneId: string

  /**
   * 二级域名
   */
  Entity: string

  /**
   * 类型 domain/application
   */
  EntityType: string
}

/**
 * 源站组查询过滤参数
 */
export interface OriginFilter {
  /**
   * 要过滤的字段，支持：name
   */
  Name: string

  /**
   * 要过滤的值
   */
  Value: string
}

/**
 * 限速拦截日志
 */
export interface BotLogData {
  /**
      * Bot攻击日志数据集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<BotLog>

  /**
      * 当前页
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
  /**
   * 分页参数，页偏移
   */
  Offset?: number

  /**
   * 分页参数，每页返回的站点个数
   */
  Limit?: number

  /**
   * 查询条件过滤器，复杂类型
   */
  Filters?: Array<ZoneFilter>
}

/**
 * 速率限制模板
 */
export interface RateLimitTemplate {
  /**
      * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mode?: string

  /**
      * 模板值详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Detail?: RateLimitTemplateDetail
}

/**
 * DDoS防护分区
 */
export interface ShieldArea {
  /**
   * 一级域名id
   */
  ZoneId: string

  /**
   * 策略id
   */
  PolicyId: number

  /**
   * 防护类型 domain/application
   */
  Type: string

  /**
      * 四层应用名
注意：此字段可能返回 null，表示取不到有效值。
      */
  EntityName?: string

  /**
      * 7层域名参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Application?: Array<DDoSApplication>

  /**
      * 四层tcp转发规则数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TcpNum?: number

  /**
      * 四层udp转发规则数
注意：此字段可能返回 null，表示取不到有效值。
      */
  UdpNum?: number

  /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Entity?: string

  /**
      * 是否为共享资源客户，注意共享资源用户不可以切换代理模式，true-是；false-否
注意：此字段可能返回 null，表示取不到有效值。
      */
  Share?: boolean
}

/**
 * Ddos防护配置
 */
export interface DdosRule {
  /**
      * DDoS防护等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosStatusInfo?: DDoSStatusInfo

  /**
      * DDoS地域封禁
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosGeoIp?: DDoSGeoIp

  /**
      * DDoS黑白名单
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosAllowBlock?: DdosAllowBlock

  /**
      * DDoS 协议封禁+连接防护
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosAntiPly?: DDoSAntiPly

  /**
      * DDoS特征过滤
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosPacketFilter?: DdosPacketFilter

  /**
      * DDoS端口过滤
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosAcl?: DdosAcls

  /**
      * DDoS开关 on-开启；off-关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * UDP分片功能是否支持，off-不支持，on-支持
注意：此字段可能返回 null，表示取不到有效值。
      */
  UdpShardOpen?: string
}

/**
 * ModifyLoadBalancingStatus返回参数结构体
 */
export interface ModifyLoadBalancingStatusResponse {
  /**
   * 负载均衡ID
   */
  LoadBalancingId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrefetchTasks返回参数结构体
 */
export interface DescribePrefetchTasksResponse {
  /**
   * 该查询条件总共条目数
   */
  TotalCount: number

  /**
   * 任务结果列表
   */
  Tasks: Array<Task>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDDosAttackEvent返回参数结构体
 */
export interface DescribeDDosAttackEventResponse {
  /**
   * DDos攻击事件数据
   */
  Data: DDosAttackEventData

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApplicationProxy请求参数结构体
 */
export interface DeleteApplicationProxyRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 代理ID
   */
  ProxyId: string
}

/**
 * CreateCustomErrorPage返回参数结构体
 */
export interface CreateCustomErrorPageResponse {
  /**
   * 自定义页面上传后的唯一id
   */
  PageId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReclaimZone返回参数结构体
 */
export interface ReclaimZoneResponse {
  /**
   * 站点名称
   */
  Name: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZoneSetting请求参数结构体
 */
export interface DescribeZoneSettingRequest {
  /**
   * 站点ID
   */
  ZoneId: string
}

/**
 * ModifyZoneStatus请求参数结构体
 */
export interface ModifyZoneStatusRequest {
  /**
   * 站点 ID
   */
  Id: string

  /**
      * 站点状态
- false 开启站点
- true 关闭站点
      */
  Paused: boolean
}

/**
 * ModifyDnsRecord请求参数结构体
 */
export interface ModifyDnsRecordRequest {
  /**
   * 记录 ID
   */
  Id: string

  /**
   * 站点 ID
   */
  ZoneId: string

  /**
   * 记录类型
   */
  Type?: string

  /**
   * 记录名称
   */
  Name?: string

  /**
   * 记录内容
   */
  Content?: string

  /**
   * 生存时间值
   */
  Ttl?: number

  /**
   * 优先级
   */
  Priority?: number

  /**
   * 代理模式
   */
  Mode?: string
}

/**
 * DDoS配置端口过滤
 */
export interface DDoSAcl {
  /**
   * 目的端口end
   */
  DportEnd?: number

  /**
   * 目的端口start
   */
  DportStart?: number

  /**
   * 源端口end
   */
  SportEnd?: number

  /**
   * 源端口start
   */
  SportStart?: number

  /**
   * 协议 'tcp', 'udp', 'all'
   */
  Protocol?: string

  /**
   * 动作  drop-丢弃,；transmit-放行； forward-继续防护
   */
  Action?: string

  /**
   * 是否为系统配置 0-人工配置；1-系统配置
   */
  Default?: number
}

/**
 * ModifySecurityPolicy请求参数结构体
 */
export interface ModifySecurityPolicyRequest {
  /**
   * 一级域名
   */
  ZoneId: string

  /**
   * 二级域名/应用名
   */
  Entity: string

  /**
   * 安全配置
   */
  Config: SecurityConfig
}

/**
 * CreateApplicationProxyRules请求参数结构体
 */
export interface CreateApplicationProxyRulesRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 代理ID
   */
  ProxyId: string

  /**
   * 规则列表
   */
  Rule: Array<ApplicationProxyRule>
}

/**
 * 负载均衡信息
 */
export interface LoadBalancing {
  /**
   * 负载均衡ID
   */
  LoadBalancingId: string

  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 子域名，填写@表示根域
   */
  Host: string

  /**
      * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
      */
  Type: string

  /**
   * 当Type=dns_only表示DNS的TTL时间
   */
  TTL: number

  /**
   * 使用的源站组ID
   */
  OriginId: Array<string>

  /**
   * 使用的源站信息
   */
  Origin: Array<OriginGroup>

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 状态
   */
  Status: string

  /**
      * 调度域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cname: string
}

/**
 * ModifyDnssec请求参数结构体
 */
export interface ModifyDnssecRequest {
  /**
   * 站点 ID
   */
  Id: string

  /**
      * DNSSEC 状态
- enabled 开启
- disabled 关闭
      */
  Status: string
}

/**
 * ModifyZoneSetting请求参数结构体
 */
export interface ModifyZoneSettingRequest {
  /**
   * 待变更的站点ID
   */
  ZoneId: string

  /**
   * 缓存过期时间配置
   */
  Cache?: CacheConfig

  /**
   * 节点缓存键配置
   */
  CacheKey?: CacheKey

  /**
   * 浏览器缓存配置
   */
  MaxAge?: MaxAge

  /**
   * 离线缓存
   */
  OfflineCache?: OfflineCache

  /**
   * Quic访问
   */
  Quic?: Quic

  /**
   * POST请求传输配置
   */
  PostMaxSize?: PostMaxSize

  /**
   * 智能压缩配置
   */
  Compression?: Compression

  /**
   * http2回源配置
   */
  UpstreamHttp2?: UpstreamHttp2

  /**
   * 访问协议强制https跳转配置
   */
  ForceRedirect?: ForceRedirect

  /**
   * Https 加速配置
   */
  Https?: Https

  /**
   * 源站配置
   */
  Origin?: Origin

  /**
   * 智能加速配置
   */
  SmartRouting?: SmartRouting

  /**
   * WebSocket配置
   */
  WebSocket?: WebSocket

  /**
   * 客户端IP回源请求头配置
   */
  ClientIpHeader?: ClientIp

  /**
   * 缓存预刷新配置
   */
  CachePrefresh?: CachePrefresh
}

/**
 * ddos特征过滤
 */
export interface DdosPacketFilter {
  /**
   * 特征过滤清空标识，off清空处理
   */
  Switch?: string

  /**
   * 特征过滤数组
   */
  PacketFilter?: Array<DDoSFeaturesFilter>
}

/**
 * CreateApplicationProxy返回参数结构体
 */
export interface CreateApplicationProxyResponse {
  /**
   * 新增的四层代理应用ID
   */
  ProxyId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportDnsRecords请求参数结构体
 */
export interface ImportDnsRecordsRequest {
  /**
   * 站点 ID
   */
  ZoneId: string

  /**
   * 文件内容
   */
  File: string
}

/**
 * 不缓存配置
 */
export interface CacheConfigNoCache {
  /**
      * 不缓存配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string
}

/**
 * ModifyOriginGroup返回参数结构体
 */
export interface ModifyOriginGroupResponse {
  /**
   * 源站组ID
   */
  OriginId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZoneDetails返回参数结构体
 */
export interface DescribeZoneDetailsResponse {
  /**
   * 站点 ID
   */
  Id: string

  /**
   * 站点名称
   */
  Name: string

  /**
      * 用户当前使用的 NS 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalNameServers: Array<string>

  /**
      * 腾讯云分配给用户的 NS 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  NameServers: Array<string>

  /**
      * 站点状态
- active：NS 已切换
- pending：NS 未切换
- moved：NS 已切走
- deactivated：被封禁
      */
  Status: string

  /**
      * 站点接入方式
- full：NS 接入
- partial：CNAME 接入
      */
  Type: string

  /**
   * 站点是否关闭
   */
  Paused: boolean

  /**
   * 站点创建时间
   */
  CreatedOn: string

  /**
   * 站点修改时间
   */
  ModifiedOn: string

  /**
      * 用户自定义 NS 信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VanityNameServers: VanityNameServers

  /**
      * 用户自定义 NS IP 信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VanityNameServersIps: Array<VanityNameServersIps>

  /**
      * 是否开启 CNAME 加速
- enabled：开启
- disabled：关闭
      */
  CnameSpeedUp: string

  /**
      * cname切换验证状态
- finished 切换完成
- pending 切换验证中
注意：此字段可能返回 null，表示取不到有效值。
      */
  CnameStatus: string

  /**
      * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Bot攻击日志
 */
export interface BotLog {
  /**
      * 攻击时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackTime: number

  /**
      * 攻击ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackIp: string

  /**
      * 域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Domain: string

  /**
      * 请求uri
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestUri: string

  /**
      * 攻击类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackType: string

  /**
      * 请求方法
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestMethod: string

  /**
      * 攻击内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackContent: string

  /**
      * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskLevel: string

  /**
      * 规则编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
      * IP所在国家
注意：此字段可能返回 null，表示取不到有效值。
      */
  SipCountryCode: string

  /**
      * 事件id
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventId: string

  /**
      * 处置方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisposalMethod: string

  /**
      * http_log
注意：此字段可能返回 null，表示取不到有效值。
      */
  HttpLog: string

  /**
      * user agent
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ua: string

  /**
      * 检出方法
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetectionMethod: string

  /**
      * 置信度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Confidence: string

  /**
      * 恶意度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Maliciousness: string
}

/**
 * 源站配置。
 */
export interface Origin {
  /**
      * 回源协议配置
http：强制 http 回源
follow：协议跟随回源
https：强制 https 回源，https 回源时仅支持源站 443 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginPullProtocol?: string
}

/**
 * ModifyZoneStatus返回参数结构体
 */
export interface ModifyZoneStatusResponse {
  /**
   * 站点 ID
   */
  Id: string

  /**
   * 站点名称
   */
  Name: string

  /**
      * 站点状态
- false 开启站点
- true 关闭站点
      */
  Paused: boolean

  /**
   * 更新时间
   */
  ModifiedOn: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityPolicyManagedRules请求参数结构体
 */
export interface DescribeSecurityPolicyManagedRulesRequest {
  /**
   * 一级域名
   */
  ZoneId: string

  /**
   * 子域名/应用名
   */
  Entity: string

  /**
   * 页数
   */
  Page: number

  /**
   * 每页数量
   */
  PerPage: number
}

/**
 * DescribeSecurityPortraitRules请求参数结构体
 */
export interface DescribeSecurityPortraitRulesRequest {
  /**
   * 一级域名
   */
  ZoneId: string

  /**
   * 子域名/应用名
   */
  Entity: string
}

/**
 * 查询结果排序条件。
 */
export interface CertSort {
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
 * ModifySecurityPolicy返回参数结构体
 */
export interface ModifySecurityPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDDoSPolicyHost请求参数结构体
 */
export interface ModifyDDoSPolicyHostRequest {
  /**
   * 站点id
   */
  ZoneId: string

  /**
   * 二级域名
   */
  Host: string

  /**
   * 加速开关 on-开启加速；off-关闭加速（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强）
   */
  AccelerateType: string

  /**
   * 策略id
   */
  PolicyId: number

  /**
   * 安全开关 on-开启安全；off-关闭安全（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强）
   */
  SecurityType?: string
}

/**
 * DescribeHostsSetting返回参数结构体
 */
export interface DescribeHostsSettingResponse {
  /**
   * 域名列表
   */
  Hosts: Array<DetailHost>

  /**
   * 域名数量
   */
  TotalNumber: number

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
   * 总数
   */
  Count: number

  /**
   * 地域信息
   */
  GeoIp: Array<GeoIp>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyZone返回参数结构体
 */
export interface ModifyZoneResponse {
  /**
   * 站点 ID
   */
  Id: string

  /**
   * 站点名称
   */
  Name: string

  /**
   * 站点当前使用的 NS
   */
  OriginalNameServers: Array<string>

  /**
      * 站点状态
- pending 未接入 NS
- active 已接入 NS
- moved NS 已切走
      */
  Status: string

  /**
      * 站点接入方式
- full NS 接入
- partial CNAME 接入
      */
  Type: string

  /**
   * 腾讯云分配的 NS 列表
   */
  NameServers: Array<string>

  /**
   * 创建时间
   */
  CreatedOn: string

  /**
   * 修改时间
   */
  ModifiedOn: string

  /**
      * cname 接入状态
- finished 站点验证完成
- pending 站点验证中
注意：此字段可能返回 null，表示取不到有效值。
      */
  CnameStatus: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDDosAttackSourceEvent请求参数结构体
 */
export interface DescribeDDosAttackSourceEventRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 条数
   */
  PageSize: number

  /**
   * 当前页
   */
  PageNo: number

  /**
   * ddos策略组id 集合
   */
  PolicyIds?: Array<number>

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>

  /**
   * 协议类型,{tcp,udp,all}
   */
  ProtocolType?: string
}

/**
 * ModifyZone请求参数结构体
 */
export interface ModifyZoneRequest {
  /**
   * 站点 ID，用于唯一标识站点信息
   */
  Id: string

  /**
      * 站点接入方式
- full NS 接入
- partial CNAME 接入
      */
  Type?: string

  /**
   * 自定义站点信息
   */
  VanityNameServers?: VanityNameServers
}

/**
 * DeleteZone返回参数结构体
 */
export interface DeleteZoneResponse {
  /**
   * 站点 ID
   */
  Id: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDos攻击事件数据
 */
export interface DDosAttackEventData {
  /**
      * 攻击事件数据集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<DDosAttackEvent>

  /**
      * 当前页
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * Hsts配置
 */
export interface Hsts {
  /**
   * 是否开启，on或off。
   */
  Switch: string

  /**
      * MaxAge数值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAge?: number

  /**
      * 是否包含子域名，on或off。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IncludeSubDomains?: string

  /**
      * 是否预加载，on或off。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Preload?: string
}

/**
 * CreatePurgeTask返回参数结构体
 */
export interface CreatePurgeTaskResponse {
  /**
   * 任务ID
   */
  JobId: string

  /**
      * 失败的任务列表及原因
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
   * 规则ID
   */
  RuleId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDos攻击事件对象
 */
export interface DDosAttackSourceEvent {
  /**
      * 攻击源ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackSourceIp: string

  /**
      * 地区(国家)
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackRegion: string

  /**
      * 累计攻击流量
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackFlow: number

  /**
      * 累计攻击包量
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackPacketNum: number
}

/**
 * L7数据分析时序数据
 */
export interface TimingDataRecord {
  /**
   * 查询维度值
   */
  TypeKey: string

  /**
      * 详细时序数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  TypeValue: Array<TimingTypeValue>
}

/**
 * ddos端口过滤
 */
export interface DdosAcls {
  /**
   * 开关 off清空规则标识
   */
  Switch?: string

  /**
   * 端口过了详细参数
   */
  Acl?: Array<DDoSAcl>
}

/**
 * DeleteOriginGroup请求参数结构体
 */
export interface DeleteOriginGroupRequest {
  /**
   * 源站组ID
   */
  OriginId: string

  /**
   * 站点ID
   */
  ZoneId: string
}

/**
 * 标签配置
 */
export interface Tag {
  /**
      * 标签键
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagKey: string

  /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagValue: string
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
 * CreateDnsRecord请求参数结构体
 */
export interface CreateDnsRecordRequest {
  /**
   * 站点 ID
   */
  ZoneId: string

  /**
   * 记录类型
   */
  Type: string

  /**
   * 记录名
   */
  Name: string

  /**
   * 记录内容
   */
  Content: string

  /**
   * 代理模式，可选值：dns_only, cdn_only, secure_cdn
   */
  Mode: string

  /**
   * 生存时间值
   */
  Ttl?: number

  /**
   * 优先级
   */
  Priority?: number
}

/**
 * IP黑白名单详细规则
 */
export interface IpTableRule {
  /**
      * 动作: drop拦截，trans放行，monitor观察
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 根据类型匹配：ip(根据ip), area(根据区域)
注意：此字段可能返回 null，表示取不到有效值。
      */
  MatchFrom?: string

  /**
      * 匹配内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  MatchContent?: string

  /**
      * 规则id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string
}

/**
 * 离线日志详细信息
 */
export interface L7OfflineLog {
  /**
      * 日志打包开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogTime: number

  /**
      * 子域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Domain: string

  /**
      * 原始大小 单位byte
注意：此字段可能返回 null，表示取不到有效值。
      */
  Size: number

  /**
      * 下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Url: string

  /**
      * 日志数据包名
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogPacketName: string
}

/**
 * ModifyHostsCertificate请求参数结构体
 */
export interface ModifyHostsCertificateRequest {
  /**
   * Zone ID
   */
  ZoneId: string

  /**
   * 本次变更的域名
   */
  Hosts: Array<string>

  /**
   * 证书信息, 只需要传入 CertId 即可, 如果为空, 则使用默认证书
   */
  CertInfo?: Array<ServerCertInfo>
}

/**
 * 应用代理规则
 */
export interface ApplicationProxyRule {
  /**
   * 协议，取值为TCP或者UDP
   */
  Proto: string

  /**
      * 端口，支持格式：
80：80端口
81-90：81至90端口
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
OriginValue=["test.com:80"]

当OriginType=origins时，包含一个元素，表示源站组ID，如：
OriginValue=["origin-xxx"]
      */
  OriginValue: Array<string>

  /**
      * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId?: string

  /**
      * 状态：
online：启用
offline：停用
progress：部署中
stopping：停用中
fail：部署失败/停用失败
      */
  Status?: string

  /**
      * 传递客户端IP，当Proto=TCP时，取值：
TOA：TOA
PPV1: Proxy Protocol传递，协议版本V1
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
当Proto=UDP时，取值：
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
      */
  ForwardClientIp?: string

  /**
   * 是否开启会话保持
   */
  SessionPersist?: boolean
}

/**
 * 智能加速配置
 */
export interface SmartRouting {
  /**
      * 智能加速配置开关
on：开启
off：关闭
      */
  Switch: string
}

/**
 * DescribeDnsData返回参数结构体
 */
export interface DescribeDnsDataResponse {
  /**
      * 统计曲线数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<DataItem>

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
 * 站点信息
 */
export interface Zone {
  /**
   * 站点ID
   */
  Id: string

  /**
   * 站点名称
   */
  Name: string

  /**
   * 站点当前使用的 NS 列表
   */
  OriginalNameServers: Array<string>

  /**
   * 腾讯云分配的 NS 列表
   */
  NameServers: Array<string>

  /**
      * 站点状态
- active：NS 已切换
- pending：NS 未切换
- moved：NS 已切走
- deactivated：被封禁
      */
  Status: string

  /**
      * 站点接入方式
- full：NS 接入
- partial：CNAME 接入
      */
  Type: string

  /**
   * 站点是否关闭
   */
  Paused: boolean

  /**
   * 站点创建时间
   */
  CreatedOn: string

  /**
   * 站点修改时间
   */
  ModifiedOn: string

  /**
      * cname 接入状态
- finished 站点已验证
- pending 站点验证中
注意：此字段可能返回 null，表示取不到有效值。
      */
  CnameStatus: string

  /**
      * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>
}

/**
 * 站点查询过滤条件
 */
export interface ZoneFilter {
  /**
      * 过滤字段名，支持的列表如下：
- name: 站点名。
- status: 站点状态
- tagKey: 标签键
- tagValue: 标签值
      */
  Name: string

  /**
   * 过滤字段值
   */
  Values: Array<string>

  /**
   * 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1
   */
  Fuzzy?: boolean
}

/**
 * DescribeSecurityPolicyManagedRulesId请求参数结构体
 */
export interface DescribeSecurityPolicyManagedRulesIdRequest {
  /**
   * 规则id集合
   */
  RuleId: Array<number>
}

/**
 * ModifyApplicationProxyStatus请求参数结构体
 */
export interface ModifyApplicationProxyStatusRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 代理ID
   */
  ProxyId: string

  /**
      * 状态
offline: 停用
online: 启用
      */
  Status: string
}

/**
 * 缓存时间设置
 */
export interface CacheConfigCache {
  /**
      * 缓存配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 缓存过期时间设置
单位为秒，最大可设置为 365 天
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheTime?: number

  /**
      * 是否开启强制缓存
开启：on
关闭：off
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreCacheControl?: string
}

/**
 * 证书查询过滤条件
 */
export interface CertFilter {
  /**
      * 过滤字段名，支持的列表如下:
 - host：域名。
 - certId: 证书ID
 - certAlias: 证书备用名
 - certType: default: 默认证书, upload: 上传证书, managed:腾讯云证书
      */
  Name: string

  /**
   * 过滤字段值
   */
  Values: Array<string>

  /**
      * 是否启用模糊查询，仅支持过滤字段名host。
模糊查询时，Value长度最大为1。
      */
  Fuzzy?: boolean
}

/**
 * DescribeIdentification请求参数结构体
 */
export interface DescribeIdentificationRequest {
  /**
   * 站点名称
   */
  Name: string
}

/**
 * ModifyLoadBalancingStatus请求参数结构体
 */
export interface ModifyLoadBalancingStatusRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 负载均衡ID
   */
  LoadBalancingId: string

  /**
      * 状态
online: 启用
offline: 停用
      */
  Status: string
}

/**
 * DescribeDDosAttackTopData返回参数结构体
 */
export interface DescribeDDosAttackTopDataResponse {
  /**
   * topn数据
   */
  Data: Array<TopNEntry>

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回消息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCnameStatus返回参数结构体
 */
export interface DescribeCnameStatusResponse {
  /**
   * 状态列表
   */
  Status: Array<CnameStatus>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoadBalancing请求参数结构体
 */
export interface DescribeLoadBalancingRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 分页参数Offset
   */
  Offset: number

  /**
   * 分页参数Limit
   */
  Limit: number

  /**
   * 过滤参数Host
   */
  Host?: string

  /**
   * 过滤参数Host是否支持模糊匹配
   */
  Fuzzy?: boolean
}

/**
 * CC拦截事件
 */
export interface CCInterceptEvent {
  /**
      * 客户端ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientIp: string

  /**
      * 拦截次数/min
注意：此字段可能返回 null，表示取不到有效值。
      */
  InterceptNum: number

  /**
   * 速拦截时间，分钟时间/min,单位为s
   */
  InterceptTime: number
}

/**
 * DDoS封禁等级
 */
export interface DDoSStatusInfo {
  /**
   * 不支持，填off
   */
  AiStatus: string

  /**
   * 用户appid
   */
  Appid: string

  /**
   * 策略等级 low, middle, high
   */
  PlyLevel: string
}

/**
 * ACL配置
 */
export interface AclConfig {
  /**
   * 开关
   */
  Switch: string

  /**
   * ACL用户规则
   */
  UserRules: Array<ACLUserRule>
}

/**
 * ModifyZoneSetting返回参数结构体
 */
export interface ModifyZoneSettingResponse {
  /**
   * 站点ID
   */
  ZoneId: string

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
   * 符合条件的站点数
   */
  TotalCount: number

  /**
      * 站点详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zones: Array<Zone>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanDnsRecords返回参数结构体
 */
export interface ScanDnsRecordsResponse {
  /**
      * 扫描状态
- doing 扫描中
- done 扫描完成
      */
  Status: string

  /**
   * 扫描后添加的记录数
   */
  RecordsAdded: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 门神配置
 */
export interface WafConfig {
  /**
   * 开关
   */
  Switch: string

  /**
   * 防护级别，loose/normal/strict/stricter/custom
   */
  Level: string

  /**
   * 模式 block-阻断；observe-观察模式；close-关闭
   */
  Mode: string

  /**
   * 门神黑白名单
   */
  WafRules: WafRule

  /**
      * AI规则引擎防护
注意：此字段可能返回 null，表示取不到有效值。
      */
  AiRule?: AiRule
}

/**
 * CreateDnsRecord返回参数结构体
 */
export interface CreateDnsRecordResponse {
  /**
   * 记录 ID
   */
  Id: string

  /**
   * 记录类型
   */
  Type: string

  /**
   * 记录名称
   */
  Name: string

  /**
   * 记录内容
   */
  Content: string

  /**
   * 生存时间值
   */
  Ttl: number

  /**
   * 优先级
   */
  Priority: number

  /**
   * 代理模式
   */
  Mode: string

  /**
      * 解析状态
active: 生效
pending: 不生效
      */
  Status: string

  /**
   * 已锁定
   */
  Locked: boolean

  /**
   * 创建时间
   */
  CreatedOn: string

  /**
   * 修改时间
   */
  ModifiedOn: string

  /**
   * 站点 ID
   */
  ZoneId: string

  /**
   * 站点名称
   */
  ZoneName: string

  /**
      * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cname: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 限速拦截日志
 */
export interface CCLog {
  /**
      * 攻击时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackTime: number

  /**
      * 攻击源ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackSip: string

  /**
      * 攻击域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackDomain: string

  /**
      * 请求uri
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestUri: string

  /**
      * 命中次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  HitCount: number

  /**
      * IP所在国家
注意：此字段可能返回 null，表示取不到有效值。
      */
  SipCountryCode: string

  /**
      * 事件id
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventId: string

  /**
      * 处置方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisposalMethod: string

  /**
      * http_log
注意：此字段可能返回 null，表示取不到有效值。
      */
  HttpLog: string

  /**
      * 规则编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
      * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskLevel: string
}

/**
 * https 服务端证书配置
 */
export interface ServerCertInfo {
  /**
      * 服务器证书 ID, 默认证书ID, 或在 SSL 证书管理进行证书托管时自动生成
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertId: string

  /**
      * 证书备注名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Alias?: string

  /**
      * 证书类型:
default: 默认证书
upload:用户上传
managed:腾讯云托管
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: string

  /**
      * 证书过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime?: string

  /**
      * 证书部署时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeployTime?: string

  /**
      * 部署状态:
processing: 部署中
deployed: 已部署
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string
}

/**
 * DDoS配置
 */
export interface DDoSConfig {
  /**
   * 开关
   */
  Switch: string
}

/**
 * DescribeWebManagedRulesData返回参数结构体
 */
export interface DescribeWebManagedRulesDataResponse {
  /**
      * Web攻击日志实体
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回消息
   */
  Msg: string

  /**
   * 查询时间粒度，可选{min,5min,hour,day}
   */
  Interval: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebManagedRulesLog返回参数结构体
 */
export interface DescribeWebManagedRulesLogResponse {
  /**
   * web攻击日志data
   */
  Data: WebLogData

  /**
   * 状态，1:失败，0:失败
   */
  Status: number

  /**
   * 返回信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 源站组记录
 */
export interface OriginRecord {
  /**
   * 记录值
   */
  Record: string

  /**
      * 当源站配置类型Type=area时，表示区域
为空表示默认区域
      */
  Area: Array<string>

  /**
      * 当源站配置类型Type=weight时，表示权重
取值范围为[1-100]
源站组内多个源站权重总和应为100
      */
  Weight: number

  /**
   * 端口
   */
  Port: number

  /**
   * 记录ID
   */
  RecordId?: string

  /**
      * 是否私有鉴权
当源站类型OriginType=third_part时有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  Private?: boolean

  /**
      * 私有鉴权参数
当源站类型Private=true时有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateParameter?: Array<OriginRecordPrivateParameter>
}

/**
 * web攻击日志
 */
export interface WebLogs {
  /**
      * 攻击内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackContent: string

  /**
      * 攻击IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackIp: string

  /**
      * 攻击类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackType: string

  /**
      * 域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Domain: string

  /**
      * uuid
注意：此字段可能返回 null，表示取不到有效值。
      */
  Msuuid: string

  /**
      * 请求方法
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestMethod: string

  /**
      * 请求URI
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestUri: string

  /**
      * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskLevel: string

  /**
      * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
      * IP所在国家
注意：此字段可能返回 null，表示取不到有效值。
      */
  SipCountryCode: string

  /**
      * 事件id
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventId: string

  /**
      * 处置方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisposalMethod: string

  /**
      * http_log
注意：此字段可能返回 null，表示取不到有效值。
      */
  HttpLog: string

  /**
      * user agent
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ua: string

  /**
      * 攻击时间，为保持统一，原参数time更名为AttackTime
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackTime: number
}

/**
 * 用于对top数据排序的结构体
 */
export interface TopDetailData {
  /**
   * 字段名
   */
  Key: string

  /**
   * 字段值
   */
  Value: number
}

/**
 * CreatePrefetchTask请求参数结构体
 */
export interface CreatePrefetchTaskRequest {
  /**
   * Zone ID
   */
  ZoneId: string

  /**
      * 要预热的资源列表，每个元素格式类似如下:
http://www.example.com/example.txt
      */
  Targets?: Array<string>

  /**
      * 是否对url进行encode
若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986）
      */
  EncodeUrl?: boolean

  /**
   * 附带的http头部信息
   */
  Headers?: Array<Header>
}

/**
 * DeleteApplicationProxyRule请求参数结构体
 */
export interface DeleteApplicationProxyRuleRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 代理ID
   */
  ProxyId: string

  /**
   * 规则ID
   */
  RuleId: string
}

/**
 * 缓存遵循源站配置
 */
export interface CacheConfigFollowOrigin {
  /**
      * 遵循源站配置开关
on：开启
off：关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string
}

/**
 * 精准防护条件
 */
export interface ACLCondition {
  /**
   * 匹配字段
   */
  MatchFrom: string

  /**
   * 匹配字符串
   */
  MatchParam: string

  /**
   * 匹配关系
   */
  Operator: string

  /**
   * 匹配内容
   */
  MatchContent: string
}

/**
 * DescribeTopL7AnalysisData请求参数结构体
 */
export interface DescribeTopL7AnalysisDataRequest {
  /**
   * RFC3339标准，客户端时间
   */
  StartTime: string

  /**
   * RFC3339标准，客户端时间
   */
  EndTime: string

  /**
   * 时序类访问流量指标
   */
  MetricName: string

  /**
   * topN,填0时返回全量数据
   */
  Limit: number

  /**
   * 时间间隔，选填{min, 5min, hour, day, week}
   */
  Interval: string

  /**
   * ZoneId数组
   */
  ZoneIds?: Array<string>

  /**
   * 筛选条件
   */
  Filters?: Array<Filter>
}

/**
 * TopN entry
 */
export interface TopNEntry {
  /**
   * Entry key
   */
  Key: string

  /**
   * TopN数据
   */
  Value: Array<TopNEntryValue>
}

/**
 * DescribeApplicationProxy返回参数结构体
 */
export interface DescribeApplicationProxyResponse {
  /**
      * 数据列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<ApplicationProxy>

  /**
      * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * 字段已废弃
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quota: number

  /**
      * 表示套餐内PlatType为ip的Anycast IP实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpCount: number

  /**
      * 表示套餐内PlatType为domain的CNAME实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  DomainCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLoadBalancing返回参数结构体
 */
export interface CreateLoadBalancingResponse {
  /**
   * 负载均衡ID
   */
  LoadBalancingId: string

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
      * top详细数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TopDataRecord>

  /**
   * 查询维度
   */
  Type: string

  /**
   * 查询指标
   */
  MetricName: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOverviewL7Data请求参数结构体
 */
export interface DescribeOverviewL7DataRequest {
  /**
   * RFC3339格式，客户端时间
   */
  StartTime: string

  /**
   * RFC3339格式，客户端时间
   */
  EndTime: string

  /**
      * 指标列表，支持的指标
l7Flow_outFlux: 访问流量
l7Flow_request: 访问请求数
l7Flow_outBandwidth: 访问带宽
      */
  MetricNames: Array<string>

  /**
   * 时间间隔，选填{min, 5min, hour, day, week}
   */
  Interval: string

  /**
   * ZoneId列表，仅在zone/domain维度下查询时该参数有效
   */
  ZoneIds?: Array<string>

  /**
   * Domain列表，仅在domain维度下查询时该参数有效
   */
  Domains?: Array<string>

  /**
   * 协议类型， 选填{http,http2,https,all}
   */
  Protocol?: string
}

/**
 * 功能总开关
 */
export interface SwitchConfig {
  /**
   * Web类型的安全总开关：Web基础防护，自定义规则，速率限制
   */
  WebSwitch: string
}

/**
 * IdentifyZone返回参数结构体
 */
export interface IdentifyZoneResponse {
  /**
   * 站点名称
   */
  Name: string

  /**
   * 子域
   */
  Subdomain: string

  /**
   * 记录类型
   */
  RecordType: string

  /**
   * 记录值
   */
  RecordValue: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WebSocket配置
 */
export interface WebSocket {
  /**
   * WebSocket 超时配置开关, 开关为off时，平台仍支持WebSocket连接，此时超时时间默认为15秒，若需要调整超时时间，将开关置为on.
   */
  Switch: string

  /**
   * 设置超时时间，单位为秒，最大超时时间120秒。
   */
  Timeout?: number
}

/**
 * 统计曲线数据项
 */
export interface DataItem {
  /**
   * 时间
   */
  Time: string

  /**
      * 数值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: number
}

/**
 * ModifyLoadBalancing请求参数结构体
 */
export interface ModifyLoadBalancingRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 负载均衡ID
   */
  LoadBalancingId: string

  /**
      * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
      */
  Type: string

  /**
   * 使用的源站组ID
   */
  OriginId: Array<string>

  /**
   * 当Type=dns_only表示DNS的TTL时间
   */
  TTL?: number
}

/**
 * CreateLoadBalancing请求参数结构体
 */
export interface CreateLoadBalancingRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 子域名，填写@表示根域
   */
  Host: string

  /**
      * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
      */
  Type: string

  /**
   * 使用的源站组ID
   */
  OriginId: Array<string>

  /**
   * 当Type=dns_only表示DNS的TTL时间
   */
  TTL?: number
}

/**
 * DescribeDnssec请求参数结构体
 */
export interface DescribeDnssecRequest {
  /**
   * 站点 ID
   */
  Id: string
}

/**
 * DescribeWebProtectionLog返回参数结构体
 */
export interface DescribeWebProtectionLogResponse {
  /**
   * 限速拦截Data
   */
  Data: CCLogData

  /**
   * 状态，1：失败，0:成功
   */
  Status: number

  /**
   * 返回信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CC拦截事件数据
 */
export interface CCInterceptEventData {
  /**
      * 攻击事件数据集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<CCInterceptEvent>

  /**
      * 当前页
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * DescribeLoadBalancingDetail返回参数结构体
 */
export interface DescribeLoadBalancingDetailResponse {
  /**
   * 负载均衡ID
   */
  LoadBalancingId: string

  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 子域名，填写@表示根域
   */
  Host: string

  /**
      * 代理模式：
dns_only: 仅DNS
proxied: 开启代理
      */
  Type: string

  /**
   * 当Type=dns_only表示DNS的TTL时间
   */
  TTL: number

  /**
   * 使用的源站组ID
   */
  OriginId: Array<string>

  /**
   * 使用的源站信息
   */
  Origin: Array<OriginGroup>

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 状态
   */
  Status: string

  /**
      * 调度域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cname: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全配置
 */
export interface SecurityConfig {
  /**
      * 门神配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  WafConfig?: WafConfig

  /**
      * RateLimit配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  RateLimitConfig?: RateLimitConfig

  /**
      * DDoS配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosConfig?: DDoSConfig

  /**
      * ACL配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  AclConfig?: AclConfig

  /**
      * Bot配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  BotConfig?: BotConfig

  /**
      * 总开关
注意：此字段可能返回 null，表示取不到有效值。
      */
  SwitchConfig?: SwitchConfig

  /**
      * IP黑白名单
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpTableConfig?: IpTableConfig
}

/**
 * 主攻击对象Data
 */
export interface DDosMajorAttackEventData {
  /**
      * DDosMajorAttackEvent ddos 攻击事件
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<DDosMajorAttackEvent>

  /**
      * 当前页
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * DescribeBotManagedRules返回参数结构体
 */
export interface DescribeBotManagedRulesResponse {
  /**
   * 本次返回的规则数
   */
  Count: number

  /**
   * Bot规则
   */
  Rules: Array<BotManagedRuleDetail>

  /**
   * 总规则数
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DNS 记录
 */
export interface DnsRecord {
  /**
   * 记录 ID
   */
  Id: string

  /**
   * 记录类型
   */
  Type: string

  /**
   * 主机记录
   */
  Name: string

  /**
   * 记录值
   */
  Content: string

  /**
   * 代理模式
   */
  Mode: string

  /**
   * TTL 值
   */
  Ttl: number

  /**
      * 优先级
注意：此字段可能返回 null，表示取不到有效值。
      */
  Priority: number

  /**
   * 创建时间
   */
  CreatedOn: string

  /**
   * 修改时间
   */
  ModifiedOn: string

  /**
   * 域名锁
   */
  Locked: boolean

  /**
   * 站点 ID
   */
  ZoneId: string

  /**
   * 站点名称
   */
  ZoneName: string

  /**
      * 解析状态
active: 生效
pending: 不生效
      */
  Status: string

  /**
      * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cname: string

  /**
      * 域名是否开启了负载均衡，四层代理，安全
- lb 负载均衡
- security 安全
- l4 四层代理
注意：此字段可能返回 null，表示取不到有效值。
      */
  DomainStatus: Array<string>
}

/**
 * 七层数据分析类top数据
 */
export interface TopDataRecord {
  /**
   * 查询维度值
   */
  TypeKey: string

  /**
      * top数据排行
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetailData: Array<TopDetailData>
}

/**
 * DDoS协议防护+连接防护
 */
export interface DDoSAntiPly {
  /**
   * tcp协议封禁 on-开；off-关
   */
  DropTcp: string

  /**
   * udp协议封禁 on-开；off-关
   */
  DropUdp: string

  /**
   * icmp协议封禁 on-开；off-关
   */
  DropIcmp: string

  /**
   * 其他协议封禁 on-开；off-关
   */
  DropOther: string

  /**
   * 源每秒新建数限制  0-4294967295
   */
  SourceCreateLimit: number

  /**
   * 源并发连接控制 0-4294967295
   */
  SourceConnectLimit: number

  /**
   * 目的每秒新建数限制 0-4294967295
   */
  DestinationCreateLimit: number

  /**
   * 目的端口的并发连接控制 0-4294967295
   */
  DestinationConnectLimit: number

  /**
   * 异常连接数阈值  0-4294967295
   */
  AbnormalConnectNum: number

  /**
   * syn占比异常阈值 0-100
   */
  AbnormalSynRatio: number

  /**
   * syn个数异常阈值 0-65535
   */
  AbnormalSynNum: number

  /**
   * 连接超时检测 0-65535
   */
  ConnectTimeout: number

  /**
   * 空连接防护开启 0-1
   */
  EmptyConnectProtect: string

  /**
      * UDP分片开关；off-关闭，on-开启
注意：此字段可能返回 null，表示取不到有效值。
      */
  UdpShard?: string
}

/**
 * DescribeWebManagedRulesData请求参数结构体
 */
export interface DescribeWebManagedRulesDataRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 统计指标列表
   */
  MetricNames: Array<string>

  /**
   * 站点id列表
   */
  ZoneIds?: Array<string>

  /**
   * 子域名列表
   */
  Domains?: Array<string>

  /**
   * 协议类型
   */
  ProtocolType?: string

  /**
      * "webshell" : Webshell检测防护
"oa" : 常见OA漏洞防护
"xss" : XSS跨站脚本攻击防护
"xxe" : XXE攻击防护
"webscan" : 扫描器攻击漏洞防护
"cms" : 常见CMS漏洞防护
"upload" : 恶意文件上传攻击防护
"sql" : SQL注入攻击防护
"cmd_inject": 命令/代码注入攻击防护
"osc" : 开源组件漏洞防护
"file_read" : 任意文件读取
"ldap" : LDAP注入攻击防护
"other" : 其它漏洞防护

"all":"所有"
      */
  AttackType?: string

  /**
   * 查询时间粒度，可选{min,5min,hour,day}
   */
  Interval?: string
}

/**
 * DDos攻击源数据
 */
export interface DDosAttackSourceEventData {
  /**
      * DDos攻击源数据集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<DDosAttackSourceEvent>

  /**
      * 当前页
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * ModifyDDoSPolicy返回参数结构体
 */
export interface ModifyDDoSPolicyResponse {
  /**
   * 策略组ID
   */
  PolicyId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDnsRecords请求参数结构体
 */
export interface DescribeDnsRecordsRequest {
  /**
   * 查询条件过滤器
   */
  Filters?: Array<DnsRecordFilter>

  /**
   * 排序
   */
  Order?: string

  /**
   * 可选值 asc, desc
   */
  Direction?: string

  /**
   * 可选值 all, any
   */
  Match?: string

  /**
   * 分页查询限制数目，默认为 100，最大可设置为 1000
   */
  Limit?: number

  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 站点 ID
   */
  ZoneId?: string
}

/**
 * CreatePrefetchTask返回参数结构体
 */
export interface CreatePrefetchTaskResponse {
  /**
   * 任务ID
   */
  JobId: string

  /**
      * 失败的任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedList: Array<FailReason>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Waf规则
 */
export interface WafRule {
  /**
   * 黑名单
   */
  BlockRuleIDs: Array<number>

  /**
   * id的开关
   */
  Switch: string

  /**
      * 观察模式
注意：此字段可能返回 null，表示取不到有效值。
      */
  ObserveRuleIDs?: Array<number>
}

/**
 * DescribeDefaultCertificates请求参数结构体
 */
export interface DescribeDefaultCertificatesRequest {
  /**
   * Zone ID
   */
  ZoneId: string
}

/**
 * 地域信息
 */
export interface GeoIp {
  /**
   * 地域ID
   */
  RegionId: number

  /**
   * 国家名
   */
  Country?: string

  /**
   * 洲
   */
  Continent?: string

  /**
   * 国家英文名
   */
  CountryEn?: string

  /**
   * 洲
   */
  ContinentEn?: string
}

/**
 * DescribeSecurityPolicy请求参数结构体
 */
export interface DescribeSecurityPolicyRequest {
  /**
   * 一级域名
   */
  ZoneId: string

  /**
   * 二级域名
   */
  Entity: string
}

/**
 * ModifyApplicationProxyRule返回参数结构体
 */
export interface ModifyApplicationProxyRuleResponse {
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
 * DDos攻击事件对象
 */
export interface DDosAttackEvent {
  /**
      * ddos 策略组id
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyId: number

  /**
      * 攻击类型(对应交互事件名称)
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackType: string

  /**
      * 攻击状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackStatus: number

  /**
      * 攻击最大带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackMaxBandWidth: number

  /**
      * 攻击包速率峰值
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackPacketMaxRate: number

  /**
      * 攻击开始时间 单位为s
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackStartTime: number

  /**
      * 攻击结束时间 单位为s
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackEndTime: number

  /**
      * 事件ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventId: string

  /**
      * 站点id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: string
}

/**
 * 失败原因
 */
export interface FailReason {
  /**
   * 失败原因
   */
  Reason: string

  /**
      * 处理失败的资源列表。
该列表元素来源于输入参数中的Targets，因此格式和入参中的Targets保持一致
      */
  Targets: Array<string>
}

/**
 * CreateZone请求参数结构体
 */
export interface CreateZoneRequest {
  /**
   * 站点名字
   */
  Name: string

  /**
      * 接入方式，默认full
- full NS接入
- partial CNAME接入
      */
  Type?: string

  /**
   * 是否跳过站点历史解析记录扫描
   */
  JumpStart?: boolean

  /**
   * 资源标签
   */
  Tags?: Array<Tag>
}

/**
 * RateLimit配置
 */
export interface RateLimitConfig {
  /**
   * 开关
   */
  Switch: string

  /**
   * 用户规则
   */
  UserRules: Array<RateLimitUserRule>

  /**
      * 默认模板
注意：此字段可能返回 null，表示取不到有效值。
      */
  Template?: RateLimitTemplate

  /**
      * 智能客户端过滤
注意：此字段可能返回 null，表示取不到有效值。
      */
  Intelligence?: RateLimitIntelligence
}

/**
 * DescribeTimingL7CacheData请求参数结构体
 */
export interface DescribeTimingL7CacheDataRequest {
  /**
   * RFC3339标准，客户端时间
   */
  StartTime: string

  /**
   * RFC3339标准，客户端时间
   */
  EndTime: string

  /**
      * 时序类访问流量指标列表，支持的指标
l7Cache_outFlux: 访问流量
l7Cache_request: 访问请求数
      */
  MetricNames: Array<string>

  /**
   * 时间间隔，选填{min, 5min, hour, day, week}
   */
  Interval: string

  /**
   * 站点id列表
   */
  ZoneIds?: Array<string>

  /**
      * 筛选条件，筛选EO/源站响应如下：
EO响应：{Key: "cacheType", Value: ["hit"], Operator: "equals"}；
源站响应：{Key: "cacheType", Value: ["miss", "dynamic"], Operator: "equals"}
      */
  Filters?: Array<Filter>
}

/**
 * DescribeSecurityPolicyList返回参数结构体
 */
export interface DescribeSecurityPolicyListResponse {
  /**
   * 防护资源列表
   */
  Entities: Array<SecurityEntity>

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
   * 该查询条件总共条目数
   */
  TotalCount: number

  /**
   * 任务结果列表
   */
  Tasks: Array<Task>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 源站记录私有鉴权参数
 */
export interface OriginRecordPrivateParameter {
  /**
      * 私有鉴权参数名称：
"AccessKeyId"：Access Key ID
"SecretAccessKey"：Secret Access Key
      */
  Name: string

  /**
   * 私有鉴权参数数值
   */
  Value: string
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
 * DDoS7层应用
 */
export interface DDoSApplication {
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
   * 起始时间(需严格按照RFC3339标准传参)
   */
  StartTime: string

  /**
   * 结束时间(需严格按照RFC3339标准传参)
   */
  EndTime: string

  /**
   * 每页展示条数
   */
  PageSize: number

  /**
   * 当前页
   */
  PageNo: number

  /**
   * 站点名集合
   */
  Zones?: Array<string>

  /**
   * 子域名集合
   */
  Domains?: Array<string>
}

/**
 * DeleteLoadBalancing返回参数结构体
 */
export interface DeleteLoadBalancingResponse {
  /**
   * 负载均衡ID
   */
  LoadBalancingId: string

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
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 统计指标列表
   */
  MetricNames: Array<string>

  /**
   * 站点id列表
   */
  ZoneIds?: Array<string>

  /**
   * 子域名列表
   */
  Domains?: Array<string>

  /**
   * 协议类型
   */
  ProtocolType?: string

  /**
      * "webshell" : Webshell检测防护
"oa" : 常见OA漏洞防护
"xss" : XSS跨站脚本攻击防护
"xxe" : XXE攻击防护
"webscan" : 扫描器攻击漏洞防护
"cms" : 常见CMS漏洞防护
"upload" : 恶意文件上传攻击防护
"sql" : SQL注入攻击防护
"cmd_inject": 命令/代码注入攻击防护
"osc" : 开源组件漏洞防护
"file_read" : 任意文件读取
"ldap" : LDAP注入攻击防护
"other" : 其它漏洞防护

"all":"所有"
      */
  AttackType?: string

  /**
   * 查询时间粒度，可选{min,5min,hour,day}
   */
  Interval?: string
}

/**
 * CheckCertificate请求参数结构体
 */
export interface CheckCertificateRequest {
  /**
   * 证书
   */
  Certificate: string

  /**
   * 私钥
   */
  PrivateKey: string
}

/**
 * DescribeSecurityPortraitRules返回参数结构体
 */
export interface DescribeSecurityPortraitRulesResponse {
  /**
   * 本次返回的规则数
   */
  Count: number

  /**
   * Bot用户画像规则
   */
  Rules: Array<PortraitManagedRuleDetail>

  /**
   * 总规则数
   */
  Total: number

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
   * 站点ID
   */
  ZoneId: string

  /**
   * 代理ID
   */
  ProxyId: string

  /**
   * 协议，取值为TCP或者UDP
   */
  Proto: string

  /**
      * 端口，支持格式：
80：80端口
81-90：81至90端口
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
当OriginType=custom时，表示多个：
IP:端口
域名:端口
当OriginType=origins时，包含一个元素，表示源站组ID
      */
  OriginValue: Array<string>

  /**
      * 传递客户端IP，当Proto=TCP时，取值：
TOA：TOA
PPV1: Proxy Protocol传递，协议版本V1
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
当Proto=UDP时，取值：
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
      */
  ForwardClientIp?: string

  /**
   * 是否开启会话保持
   */
  SessionPersist?: boolean
}

/**
 * bot托管规则详情
 */
export interface BotManagedRuleDetail {
  /**
   * 规则ID
   */
  RuleId: number

  /**
   * 规则描述
   */
  Description: string

  /**
   * 规则分类
   */
  RuleTypeName: string

  /**
   * 该规则开启/关闭
   */
  Status: string
}

/**
 * 访问协议强制https跳转配置
 */
export interface ForceRedirect {
  /**
      * 访问强制跳转配置开关
on：开启
off：关闭
      */
  Switch: string

  /**
      * 重定向状态码
301
302
注意：此字段可能返回 null，表示取不到有效值。
      */
  RedirectStatusCode?: number
}

/**
 * ModifyApplicationProxy请求参数结构体
 */
export interface ModifyApplicationProxyRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 代理ID
   */
  ProxyId: string

  /**
      * 代理名称
当ProxyType=hostname时，表示域名或者子域名
当ProxyType=instance时，表示实例名称
      */
  ProxyName: string

  /**
   * 参数已经废弃
   */
  ForwardClientIp: string

  /**
   * 参数已经废弃
   */
  SessionPersist: boolean

  /**
   * 会话保持时间，取值范围：30-3600，单位：秒
   */
  SessionPersistTime?: number

  /**
      * 服务类型
hostname：子域名模式
instance：实例模式
      */
  ProxyType?: string
}

/**
 * ModifyApplicationProxyStatus返回参数结构体
 */
export interface ModifyApplicationProxyStatusResponse {
  /**
   * 代理ID
   */
  ProxyId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IdentifyZone请求参数结构体
 */
export interface IdentifyZoneRequest {
  /**
   * 站点名称
   */
  Name: string
}

/**
 * 域名配置信息
 */
export interface DetailHost {
  /**
   * 腾讯云账号ID
   */
  AppId: number

  /**
   * 站点ID
   */
  ZoneId: string

  /**
      * 加速服务状态
process：部署中
online：已启动
offline：已关闭
      */
  Status: string

  /**
   * 域名
   */
  Host: string
}

/**
 * RateLimit规则
 */
export interface RateLimitUserRule {
  /**
   * RateLimit统计阈值
   */
  Threshold: number

  /**
   * RateLimit统计时间
   */
  Period: number

  /**
   * 规则名
   */
  RuleName: string

  /**
   * 动作：monitor(观察), drop(拦截)
   */
  Action: string

  /**
   * 惩罚时长
   */
  PunishTime: number

  /**
   * 处罚时长单位，second
   */
  PunishTimeUnit: string

  /**
   * 规则状态
   */
  RuleStatus: string

  /**
   * 规则
   */
  Conditions: Array<ACLCondition>

  /**
   * 规则权重
   */
  RulePriority: number

  /**
      * 规则id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 过滤词
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreqFields?: Array<string>

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string
}

/**
 * DescribeDnsRecords返回参数结构体
 */
export interface DescribeDnsRecordsResponse {
  /**
   * 总数，用于分页查询
   */
  TotalCount: number

  /**
   * DNS 记录列表
   */
  Records: Array<DnsRecord>

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
   * 证书总数
   */
  TotalCount: number

  /**
      * 默认证书列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertInfo: Array<DefaultServerCertInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 缓存预刷新
 */
export interface CachePrefresh {
  /**
   * 缓存预刷新配置开关
   */
  Switch: string

  /**
      * 缓存预刷新百分比：1-99
注意：此字段可能返回 null，表示取不到有效值。
      */
  Percent?: number
}

/**
 * DescribeTimingL7AnalysisData返回参数结构体
 */
export interface DescribeTimingL7AnalysisDataResponse {
  /**
      * 详细数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TimingDataRecord>

  /**
   * 查询维度
   */
  Type: string

  /**
   * 时间间隔
   */
  Interval: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户画像规则详情
 */
export interface PortraitManagedRuleDetail {
  /**
      * 规则唯一id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId?: number

  /**
      * 规则的描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 规则所属类型的名字, botdb(用户画像)
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleTypeName?: string

  /**
      * 规则内的功能分类Id(扫描器，Bot行为等)
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClassificationId?: number

  /**
      * 规则当前所属动作状态(block, alg, ...)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string
}

/**
 * bot 用户画像规则
 */
export interface BotPortraitRule {
  /**
      * 本规则的id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * JS挑战的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlgManagedIds?: Array<number>

  /**
      * 数字验证码的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  CapManagedIds?: Array<number>

  /**
      * 观察的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  MonManagedIds?: Array<number>

  /**
      * 拦截的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropManagedIds?: Array<number>

  /**
      * 本功能的开关
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string
}

/**
 * DescribeWebProtectionAttackEvents请求参数结构体
 */
export interface DescribeWebProtectionAttackEventsRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 条数
   */
  PageSize: number

  /**
   * 当前页
   */
  PageNo: number

  /**
   * 域名
   */
  Domains?: Array<string>

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>
}

/**
 * DescribeOverviewL7Data返回参数结构体
 */
export interface DescribeOverviewL7DataResponse {
  /**
   * 查询维度
   */
  Type: string

  /**
   * 时间间隔
   */
  Interval: string

  /**
   * 详细数据
   */
  Data: Array<TimingDataRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostsCertificate请求参数结构体
 */
export interface DescribeHostsCertificateRequest {
  /**
   * Zone ID
   */
  ZoneId: string

  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为 100，最大可设置为 1000
   */
  Limit?: number

  /**
   * 查询条件过滤器
   */
  Filters?: Array<CertFilter>

  /**
   * 排序方式
   */
  Sort?: CertSort
}

/**
 * DescribeSecurityPolicyManagedRules返回参数结构体
 */
export interface DescribeSecurityPolicyManagedRulesResponse {
  /**
   * 本次返回的规则数
   */
  Count: number

  /**
   * 门神规则
   */
  Rules: Array<ManagedRule>

  /**
   * 总规则数
   */
  Total: number

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
   * 源站组ID
   */
  OriginId: string

  /**
   * 源站组名称
   */
  OriginName: string

  /**
      * 源站组配置类型
area：表示按照Record记录中的Area字段进行按客户端IP所在区域回源。
weight：表示按照Record记录中的Weight字段进行按权重回源。
      */
  Type: string

  /**
   * 记录
   */
  Record: Array<OriginRecord>

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 站点名称
   */
  ZoneName: string

  /**
      * 源站类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginType: string

  /**
      * 当前源站组是否被四层代理使用。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationProxyUsed: boolean

  /**
      * 当前源站组是否被负载均衡使用。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancingUsed: boolean

  /**
      * 源站状态信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: OriginCheckOriginStatus

  /**
      * 使用当前源站组的负载均衡的类型：
none：未被使用
dns_only：被仅DNS类型负载均衡使用
proxied：被代理加速类型负载均衡使用
both：同时被仅DNS和代理加速类型负载均衡使用
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancingUsedType: string
}

/**
 * DescribeApplicationProxy请求参数结构体
 */
export interface DescribeApplicationProxyRequest {
  /**
   * 站点ID
   */
  ZoneId?: string

  /**
   * 分页参数Offset
   */
  Offset?: number

  /**
   * 分页参数Limit
   */
  Limit?: number
}

/**
 * TopN数据Entry
 */
export interface TopNEntryValue {
  /**
   * Entry的name
   */
  Name: string

  /**
   * 数量
   */
  Count: number
}

/**
 * ModifyDDoSPolicyHost返回参数结构体
 */
export interface ModifyDDoSPolicyHostResponse {
  /**
   * 修改成功的host
   */
  Host: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplicationProxyRuleStatus请求参数结构体
 */
export interface ModifyApplicationProxyRuleStatusRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 代理ID
   */
  ProxyId: string

  /**
   * 规则ID
   */
  RuleId: string

  /**
      * 状态
offline: 停用
online: 启用
      */
  Status: string
}

/**
 * ModifyLoadBalancing返回参数结构体
 */
export interface ModifyLoadBalancingResponse {
  /**
   * 负载均衡ID
   */
  LoadBalancingId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Web拦截事件
 */
export interface WebAttackEvent {
  /**
      * 客户端ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientIp: string

  /**
      * 攻击URL
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackUrl: string

  /**
      * 攻击时间 单位为s
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackTime: number
}

/**
 * DescribeDDosAttackTopData请求参数结构体
 */
export interface DescribeDDosAttackTopDataRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 过滤指标
   */
  MetricName: string

  /**
   * 查询前多少名,传值为0 全量
   */
  Limit: number

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>

  /**
   * ddos策略组id 集合
   */
  PolicyIds?: Array<number>

  /**
   * 端口号
   */
  Port?: number

  /**
   * 协议类型,tcp,udp,all
   */
  ProtocolType?: string

  /**
   * 攻击类型,flood,icmpFlood......,all
   */
  AttackType?: string
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
 * DescribeDDosAttackData请求参数结构体
 */
export interface DescribeDDosAttackDataRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 统计指标列表
   */
  MetricNames: Array<string>

  /**
   * 站点id列表
   */
  ZoneIds?: Array<string>

  /**
   * ddos策略组id列表
   */
  PolicyIds?: Array<number>

  /**
   * 端口号
   */
  Port?: number

  /**
   * 协议类型,tcp,udp,all
   */
  ProtocolType?: string

  /**
   * 攻击类型,flood,icmpFlood......,all
   */
  AttackType?: string

  /**
   * 查询时间粒度，可选{min,5min,hour,day}
   */
  Interval?: string
}

/**
 * ModifyDnsRecord返回参数结构体
 */
export interface ModifyDnsRecordResponse {
  /**
   * 记录 ID
   */
  Id: string

  /**
   * 记录类型
   */
  Type: string

  /**
   * 记录名称
   */
  Name: string

  /**
   * 记录内容
   */
  Content: string

  /**
   * 生存时间值
   */
  Ttl: number

  /**
   * 优先级
   */
  Priority: number

  /**
   * 代理模式
   */
  Mode: string

  /**
   * 解析状态
   */
  Status: string

  /**
      * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cname: string

  /**
   * 锁定状态
   */
  Locked: boolean

  /**
   * 创建时间
   */
  CreatedOn: string

  /**
   * 修改时间
   */
  ModifiedOn: string

  /**
   * 站点 ID
   */
  ZoneId: string

  /**
   * 站点名称
   */
  ZoneName: string

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
      * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mode?: string

  /**
      * 唯一id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ID?: number

  /**
      * 处置动作
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 惩罚时间，秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTime?: number

  /**
      * 阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Threshold?: number

  /**
      * 统计周期
注意：此字段可能返回 null，表示取不到有效值。
      */
  Period?: number
}

/**
 * 统计曲线数据项
 */
export interface TimingDataItem {
  /**
      * 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  Timestamp: number

  /**
      * 数值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: number
}

/**
 * CreateApplicationProxy请求参数结构体
 */
export interface CreateApplicationProxyRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 站点名称
   */
  ZoneName: string

  /**
      * 代理名称
当ProxyType=hostname时，表示域名或者子域名
当ProxyType=instance时，表示实例名称
      */
  ProxyName: string

  /**
      * 调度模式：
ip表示Anycast IP
domain表示CNAME
      */
  PlatType: string

  /**
   * 0关闭安全，1开启安全
   */
  SecurityType: number

  /**
   * 0关闭加速，1开启加速
   */
  AccelerateType: number

  /**
   * 字段已经移至Rule.ForwardClientIp
   */
  ForwardClientIp: string

  /**
   * 字段已经移至Rule.SessionPersist
   */
  SessionPersist: boolean

  /**
   * 规则详细信息
   */
  Rule: Array<ApplicationProxyRule>

  /**
   * 会话保持时间，取值范围：30-3600，单位：秒
   */
  SessionPersistTime?: number

  /**
      * 服务类型
hostname：子域名模式
instance：实例模式
      */
  ProxyType?: string
}

/**
 * DescribeTopL7AnalysisData返回参数结构体
 */
export interface DescribeTopL7AnalysisDataResponse {
  /**
      * top详细数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TopDataRecord>

  /**
   * 查询维度
   */
  Type: string

  /**
   * 查询指标
   */
  MetricName: string

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
      * 恶意BOT
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label?: string

  /**
      * 动作
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string
}

/**
 * 智能分析规则
 */
export interface IntelligenceRule {
  /**
      * 开关
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * 规则详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items?: Array<IntelligenceRuleItem>
}

/**
 * POST请求上传文件流式传输最大限制
 */
export interface PostMaxSize {
  /**
      * 是调整POST请求限制，平台默认为32MB。
关闭：off，
开启：on。
      */
  Switch: string

  /**
      * 最大限制，取值在1MB和500MB之间。单位字节
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxSize?: number
}

/**
 * 源站健康检查，源站状态信息
 */
export interface OriginCheckOriginStatus {
  /**
   * healthy: 健康，unhealthy: 不健康，process: 探测中
   */
  Status: string

  /**
      * host列表，源站组不健康时存在值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Host: Array<string>
}

/**
 * 门神规则
 */
export interface ManagedRule {
  /**
   * 规则id
   */
  RuleId: number

  /**
   * 规则描述
   */
  Description: string

  /**
   * 规则类型名
   */
  RuleTypeName: string

  /**
   * 策略规则防护等级
   */
  RuleLevelDesc: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 规则当前状态  block, allow
   */
  Status: string

  /**
      * 规则标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleTags?: Array<string>

  /**
      * 规则类型详细描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleTypeDesc?: string

  /**
      * 规则类型id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleTypeId?: number
}

/**
 * 过滤条件
 */
export interface Filter {
  /**
   * 筛选维度
   */
  Key: string

  /**
   * 操作符
   */
  Operator: string

  /**
   * 筛选维度值
   */
  Value: Array<string>
}

/**
 * DescribeWebManagedRulesAttackEvents请求参数结构体
 */
export interface DescribeWebManagedRulesAttackEventsRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 条数
   */
  PageSize: number

  /**
   * 当前页
   */
  PageNo: number

  /**
   * ddos策略组id列表
   */
  PolicyIds?: Array<number>

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>

  /**
   * 子域名列表
   */
  Domains?: Array<string>

  /**
   * 选填{Y、N},默认为Y；Y：展示，N：不展示
   */
  IsShowDetail?: string
}

/**
 * DescribeCnameStatus请求参数结构体
 */
export interface DescribeCnameStatusRequest {
  /**
   * 站点 ID
   */
  ZoneId: string

  /**
   * 域名列表
   */
  Names: Array<string>
}

/**
 * CreateCustomErrorPage请求参数结构体
 */
export interface CreateCustomErrorPageRequest {
  /**
   * zone的id
   */
  ZoneId: string

  /**
   * 具体所属实体
   */
  Entity: string

  /**
   * 自定义页面的文件名
   */
  Name: string

  /**
   * 自定义页面的内容
   */
  Content: string
}

/**
 * DescribeDnssec返回参数结构体
 */
export interface DescribeDnssecResponse {
  /**
   * 站点 ID
   */
  Id: string

  /**
   * 站点名称
   */
  Name: string

  /**
      * DNSSEC 状态
- enabled 开启
- disabled 关闭
      */
  Status: string

  /**
      * DNSSEC 相关信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Dnssec: DnssecInfo

  /**
   * 修改时间
   */
  ModifiedOn: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateZone返回参数结构体
 */
export interface CreateZoneResponse {
  /**
   * 站点ID
   */
  Id: string

  /**
   * 站点名称
   */
  Name: string

  /**
   * 站点接入方式
   */
  Type: string

  /**
      * 站点状态
- pending 未切换NS
- active NS 已切换到分配的 NS
- moved NS 从腾讯云切走
      */
  Status: string

  /**
   * 当前使用的 NS 列表
   */
  OriginalNameServers: Array<string>

  /**
   * 给用户分配的 NS 列表
   */
  NameServers: Array<string>

  /**
   * 站点创建时间
   */
  CreatedOn: string

  /**
   * 站点更新时间
   */
  ModifiedOn: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Dns数据曲线过滤参数
 */
export interface DnsDataFilter {
  /**
      * 参数名称，取值范围：
zone：站点名
host：域名
type：dns解析类型
code：dns返回状态码
area：解析服务器所在区域
      */
  Name: string

  /**
      * 参数值
当Name=area时，Value取值范围：
亚洲：Asia
欧洲：Europe
非洲：Africa
大洋洲：Oceania
美洲：Americas

当Name=code时，Value取值范围：
NoError：成功的响应
NXDomain：只在权威域名服务器的响应消息中有效，标示请求中请求的域不存在
NotImp：域名服务器不支持请求的类型
Refused：域名服务器因为策略的原因拒绝执行请求的操作
      */
  Value?: string

  /**
      * 参数值
当Name=area时，Value取值范围：
亚洲：Asia
欧洲：Europe
非洲：Africa
大洋洲：Oceania
美洲：Americas

当Name=code时，Value取值范围：
NoError：成功的响应
NXDomain：只在权威域名服务器的响应消息中有效，标示请求中请求的域不存在
NotImp：域名服务器不支持请求的类型
Refused：域名服务器因为策略的原因拒绝执行请求的操作
      */
  Values?: Array<string>
}

/**
 * DeleteLoadBalancing请求参数结构体
 */
export interface DeleteLoadBalancingRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 负载均衡ID
   */
  LoadBalancingId: string
}

/**
 * DescribeTimingL7AnalysisData请求参数结构体
 */
export interface DescribeTimingL7AnalysisDataRequest {
  /**
   * RFC3339标准，客户端时间
   */
  StartTime: string

  /**
   * RFC3339标准，客户端时间
   */
  EndTime: string

  /**
      * 指标列表，支持的指标
l7Flow_outFlux: 访问流量
l7Flow_request: 访问请求数
l7Flow_outBandwidth: 访问带宽
      */
  MetricNames: Array<string>

  /**
   * 时间间隔，选填{min, 5min, hour, day, week}
   */
  Interval: string

  /**
   * ZoneId数组
   */
  ZoneIds?: Array<string>

  /**
   * 筛选条件
   */
  Filters?: Array<Filter>
}

/**
 * DescribeSecurityPolicyManagedRulesId返回参数结构体
 */
export interface DescribeSecurityPolicyManagedRulesIdResponse {
  /**
   * 返回总数
   */
  Total: number

  /**
   * 门神规则
   */
  Rules: Array<ManagedRule>

  /**
   * 返回总数
   */
  Count: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * web事件数据
 */
export interface WebEventData {
  /**
      * 攻击事件数据集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<WebAttackEvent>

  /**
      * 当前页
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * 应用代理实例
 */
export interface ApplicationProxy {
  /**
      * 代理ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyId?: string

  /**
      * 代理名称
当ProxyType=hostname时，表示域名或者子域名
当ProxyType=instance时，表示实例名称
      */
  ProxyName: string

  /**
      * 调度模式：
ip表示Anycast IP
domain表示CNAME
      */
  PlatType: string

  /**
   * 0关闭安全，1开启安全
   */
  SecurityType: number

  /**
   * 0关闭加速，1开启加速
   */
  AccelerateType: number

  /**
   * 字段已经移至Rule.ForwardClientIp
   */
  ForwardClientIp: string

  /**
   * 字段已经移至Rule.SessionPersist
   */
  SessionPersist: boolean

  /**
   * 规则列表
   */
  Rule: Array<ApplicationProxyRule>

  /**
      * 状态：
online：启用
offline：停用
progress：部署中
stopping：停用中
fail：部署失败/停用失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 调度信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScheduleValue: Array<string>

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
      * 站点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: string

  /**
      * 站点名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneName: string

  /**
      * 会话保持时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  SessionPersistTime: number

  /**
      * 服务类型
hostname：子域名模式
instance：实例模式
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyType: string

  /**
      * 当ProxyType=hostname时：
ProxyName为域名，如：test.123.com
HostId表示该域名，即test.123.com对应的代理加速唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostId: string
}

/**
 * ModifyApplicationProxy返回参数结构体
 */
export interface ModifyApplicationProxyResponse {
  /**
   * 代理ID
   */
  ProxyId: string

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 缓存键配置
 */
export interface CacheKey {
  /**
      * 是否开启全路径缓存
on：开启全路径缓存（即关闭参数忽略）
off：关闭全路径缓存（即开启参数忽略）
注意：此字段可能返回 null，表示取不到有效值。
      */
  FullUrlCache?: string

  /**
      * 是否忽略大小写缓存
注意：此字段可能返回 null，表示取不到有效值。
      */
  IgnoreCase?: string

  /**
      * CacheKey中包含请求参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  QueryString?: QueryString
}

/**
 * ModifyOriginGroup请求参数结构体
 */
export interface ModifyOriginGroupRequest {
  /**
   * 源站组ID
   */
  OriginId: string

  /**
   * 源站组名称
   */
  OriginName: string

  /**
      * 配置类型，当OriginType=self 时，需要填写：
area: 按区域配置
weight: 按权重配置
当OriginType=third_party/cos 时，不需要填写
      */
  Type: string

  /**
   * 源站记录
   */
  Record: Array<OriginRecord>

  /**
   * 站点ID
   */
  ZoneId: string

  /**
      * 源站类型
self：自有源站
third_party：第三方源站
cos：腾讯云COS源站
      */
  OriginType?: string
}

/**
 * ModifyApplicationProxyRuleStatus返回参数结构体
 */
export interface ModifyApplicationProxyRuleStatusResponse {
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
 * DescribeSecurityPolicyList请求参数结构体
 */
export interface DescribeSecurityPolicyListRequest {
  /**
   * 一级域名
   */
  ZoneId: string
}

/**
 * DescribeTimingL7CacheData返回参数结构体
 */
export interface DescribeTimingL7CacheDataResponse {
  /**
      * 详细数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TimingDataRecord>

  /**
   * 查询维度
   */
  Type: string

  /**
   * 时间间隔
   */
  Interval: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationProxyDetail请求参数结构体
 */
export interface DescribeApplicationProxyDetailRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 实例ID
   */
  ProxyId: string
}

/**
 * 智能客户端过滤
 */
export interface RateLimitIntelligence {
  /**
      * 功能开关
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * 执行动作 monitor(观察), alg(挑战)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string
}

/**
 * IP黑白名单及IP区域控制配置
 */
export interface IpTableConfig {
  /**
      * 开关
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * []
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rules?: Array<IpTableRule>
}

/**
 * DeleteOriginGroup返回参数结构体
 */
export interface DeleteOriginGroupResponse {
  /**
   * 源站组ID
   */
  OriginId: string

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
   * HTTP头部
   */
  Name: string

  /**
   * HTTP头部值
   */
  Value: string
}

/**
 * 自定义名字服务器 IP 信息
 */
export interface VanityNameServersIps {
  /**
   * 自定义名字服务器名称
   */
  Name: string

  /**
   * 自定义名字服务器 IPv4 地址
   */
  IPv4: string
}

/**
 * DescribeDDosAttackSourceEvent返回参数结构体
 */
export interface DescribeDDosAttackSourceEventResponse {
  /**
   * DDos攻击源数据
   */
  Data: DDosAttackSourceEventData

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZoneDetails请求参数结构体
 */
export interface DescribeZoneDetailsRequest {
  /**
   * 站点 ID
   */
  Id: string
}

/**
 * DescribeDDoSPolicy请求参数结构体
 */
export interface DescribeDDoSPolicyRequest {
  /**
   * 策略组id
   */
  PolicyId: number

  /**
   * 一级域名zone
   */
  ZoneId: string
}

/**
 * 安全数据Entry返回值
 */
export interface SecEntry {
  /**
      * Entry的Key
注意：此字段可能返回 null，表示取不到有效值。
      */
  Key: string

  /**
      * Entry的Value
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: Array<SecEntryValue>
}

/**
 * DescribeDDosMajorAttackEvent请求参数结构体
 */
export interface DescribeDDosMajorAttackEventRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 条数
   */
  PageSize: number

  /**
   * 当前页
   */
  PageNo: number

  /**
   * ddos 策略组id集合
   */
  PolicyIds?: Array<number>

  /**
   * 协议类型，{tcp,udp,all}
   */
  ProtocolType?: string

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>
}

/**
 * Quic配置项
 */
export interface Quic {
  /**
   * 是否启动Quic配置
   */
  Switch: string
}

/**
 * CreateOriginGroup返回参数结构体
 */
export interface CreateOriginGroupResponse {
  /**
   * 新增的源站组ID
   */
  OriginId: string

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
   * 用户id
   */
  AppId: number

  /**
   * 一级域名
   */
  ZoneId: string

  /**
   * 二级域名
   */
  Entity: string

  /**
      * 安全配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Config: SecurityConfig

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CacheKey中包含请求参数
 */
export interface QueryString {
  /**
      * on | off CacheKey是否由QueryString组成
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * includeCustom:使用部分url参数
excludeCustom:排除部分url参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 使用/排除的url参数数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value?: Array<string>
}

/**
 * DescribeSecurityPolicyRegions请求参数结构体
 */
export type DescribeSecurityPolicyRegionsRequest = null

/**
 * 安全数据Entry对应的值
 */
export interface SecEntryValue {
  /**
      * 指标名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Metric: string

  /**
      * 指标数据明细
注意：此字段可能返回 null，表示取不到有效值。
      */
  Detail: Array<TimingDataItem>

  /**
      * 最大值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Max: number

  /**
      * 平均值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Avg: number

  /**
      * 数据总和
注意：此字段可能返回 null，表示取不到有效值。
      */
  Sum: number
}

/**
 * ReclaimZone请求参数结构体
 */
export interface ReclaimZoneRequest {
  /**
   * 站点名称
   */
  Name: string
}

/**
 * DeleteZone请求参数结构体
 */
export interface DeleteZoneRequest {
  /**
   * 站点 ID
   */
  Id: string
}

/**
 * Bot 规则
 */
export interface BotManagedRule {
  /**
      * 想开启的规则id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ManagedIds: Array<number>

  /**
   * 本规则的id
   */
  RuleID: number

  /**
   * drop/trans/monitor/alg
   */
  Action?: string

  /**
      * ip封禁的惩罚时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTime?: number

  /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTimeUnit?: string

  /**
      * 自定义返回页面的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string

  /**
      * 自定义返回页面的实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageId?: number

  /**
      * 重定向时候的地址，必须为本用户接入的站点子域名，使用URLENCODE
注意：此字段可能返回 null，表示取不到有效值。
      */
  RedirectUrl?: string

  /**
      * 重定向时候的返回码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseCode?: number

  /**
      * 放行的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransManagedIds?: Array<number>

  /**
      * JS挑战的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlgManagedIds?: Array<number>

  /**
      * 数字验证码的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  CapManagedIds?: Array<number>

  /**
      * 观察的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  MonManagedIds?: Array<number>

  /**
      * 拦截的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropManagedIds?: Array<number>
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
 * DescribeDDosAttackEvent请求参数结构体
 */
export interface DescribeDDosAttackEventRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 条数
   */
  PageSize: number

  /**
   * 当前页
   */
  PageNo: number

  /**
   * ddos策略组id 集合
   */
  PolicyIds?: Array<number>

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>

  /**
   * 协议类型,{tcp,udp,all}
   */
  ProtocolType?: string

  /**
   * 选填{Y、N},默认为Y；Y：展示，N：不展示
   */
  IsShowDetail?: string
}

/**
 * 客户端IP头部
 */
export interface ClientIp {
  /**
      * 客户端IP头部配置开关
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string

  /**
      * 回源客户端IP请求头名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  HeaderName?: string
}

/**
 * DNS 记录查询过滤条件
 */
export interface DnsRecordFilter {
  /**
      * 过滤字段名，支持的列表如下：
- name: 站点名。
- status: 站点状态
      */
  Name: string

  /**
   * 过滤字段值
   */
  Values: Array<string>

  /**
   * 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1
   */
  Fuzzy?: boolean
}

/**
 * DescribeHostsCertificate返回参数结构体
 */
export interface DescribeHostsCertificateResponse {
  /**
   * 总数，用于分页查询
   */
  TotalCount: number

  /**
      * 域名证书配置列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Hosts: Array<HostCertSetting>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZoneSetting返回参数结构体
 */
export interface DescribeZoneSettingResponse {
  /**
      * 缓存过期时间配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cache: CacheConfig

  /**
      * 节点缓存键配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  CacheKey: CacheKey

  /**
      * 浏览器缓存配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAge: MaxAge

  /**
      * 离线缓存
注意：此字段可能返回 null，表示取不到有效值。
      */
  OfflineCache: OfflineCache

  /**
      * Quic访问
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quic: Quic

  /**
      * POST请求传输配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostMaxSize: PostMaxSize

  /**
      * 智能压缩配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Compression: Compression

  /**
      * http2回源配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpstreamHttp2: UpstreamHttp2

  /**
      * 访问协议强制https跳转配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  ForceRedirect: ForceRedirect

  /**
      * Https 加速配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Https: Https

  /**
      * 源站配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Origin: Origin

  /**
      * 动态加速配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  SmartRouting: SmartRouting

  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 站点域名
   */
  Zone: string

  /**
      * WebSocket配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebSocket: WebSocket

  /**
      * 客户端IP回源请求头配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientIpHeader: ClientIp

  /**
      * 缓存预刷新配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  CachePrefresh: CachePrefresh

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI规则引擎防护
 */
export interface AiRule {
  /**
      * smart_status_close-关闭；smart_status_open-拦截处置；
smart_status_observe-观察处置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mode?: string
}

/**
 * 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态
 */
export interface MaxAge {
  /**
      * MaxAge 时间设置，单位秒，最大365天
注意：时间为0，即不缓存。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxAgeTime?: number

  /**
      * 是否遵循源站，on或off，开启时忽略时间设置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowOrigin?: string
}

/**
 * DescribePurgeTasks请求参数结构体
 */
export interface DescribePurgeTasksRequest {
  /**
   * 任务ID
   */
  JobId?: string

  /**
   * 类型
   */
  Type?: string

  /**
   * 查询起始时间
   */
  StartTime?: string

  /**
   * 查询结束时间
   */
  EndTime?: string

  /**
   * 查询起始偏移量
   */
  Offset?: number

  /**
   * 查询最大返回的结果条数
   */
  Limit?: number

  /**
      * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
      */
  Statuses?: Array<string>

  /**
   * zone id
   */
  ZoneId?: string

  /**
   * 查询的域名列表
   */
  Domains?: Array<string>

  /**
   * 查询内容
   */
  Target?: string
}

/**
 * 查询条件
 */
export interface QueryCondition {
  /**
   * 维度
   */
  Key: string

  /**
   * 操作符
   */
  Operator: string

  /**
   * 维度值
   */
  Value: Array<string>
}

/**
 * DescribeDnsData请求参数结构体
 */
export interface DescribeDnsDataRequest {
  /**
   * 起始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 过滤参数
   */
  Filters?: Array<DnsDataFilter>

  /**
      * 时间粒度，默认为1分钟粒度，服务端根据时间范围自适应。
支持指定以下几种粒度：
min：1分钟粒度
5min：5分钟粒度
hour：1小时粒度
day：天粒度
      */
  Interval?: string
}

/**
 * 缓存规则配置。
 */
export interface CacheConfig {
  /**
      * 缓存配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cache?: CacheConfigCache

  /**
      * 不缓存配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoCache?: CacheConfigNoCache

  /**
      * 遵循源站配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowOrigin?: CacheConfigFollowOrigin
}

/**
 * DescribeDDosAttackEventDetail返回参数结构体
 */
export interface DescribeDDosAttackEventDetailResponse {
  /**
   * DDos攻击事件详情
   */
  Data: DDosAttackEventDetailData

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplicationProxyRule请求参数结构体
 */
export interface ModifyApplicationProxyRuleRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 代理ID
   */
  ProxyId: string

  /**
   * 规则ID
   */
  RuleId: string

  /**
   * 协议，取值为TCP或者UDP
   */
  Proto: string

  /**
      * 端口，支持格式：
80：80端口
81-90：81至90端口
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
OriginValue=["test.com:80"]

当OriginType=origins时，包含一个元素，表示源站组ID，如：
OriginValue=["origin-xxx"]
      */
  OriginValue: Array<string>

  /**
      * 传递客户端IP，当Proto=TCP时，取值：
TOA：TOA
PPV1: Proxy Protocol传递，协议版本V1
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
当Proto=UDP时，取值：
PPV2: Proxy Protocol传递，协议版本V2
OFF：不传递
      */
  ForwardClientIp?: string

  /**
   * 是否开启会话保持
   */
  SessionPersist?: boolean
}

/**
 * ModifyDDoSPolicy请求参数结构体
 */
export interface ModifyDDoSPolicyRequest {
  /**
   * 策略组ID
   */
  PolicyId: number

  /**
   * 一级域名
   */
  ZoneId: string

  /**
   * DDoS具体防护配置
   */
  DdosRule?: DdosRule
}

/**
 * ModifyZoneCnameSpeedUp返回参数结构体
 */
export interface ModifyZoneCnameSpeedUpResponse {
  /**
   * 站点 ID
   */
  Id: string

  /**
   * 站点名称
   */
  Name: string

  /**
      * CNAME 加速状态
- enabled 开启
- disabled 关闭
      */
  Status: string

  /**
   * 更新时间
   */
  ModifiedOn: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebProtectionLog请求参数结构体
 */
export interface DescribeWebProtectionLogRequest {
  /**
   * 起始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 每页条数
   */
  PageSize: number

  /**
   * 当前页
   */
  PageNo: number

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合
   */
  Domains?: Array<string>

  /**
   * 查询条件
   */
  QueryCondition?: Array<QueryCondition>
}

/**
 * 限速拦截日志
 */
export interface CCLogData {
  /**
      * CC拦截日志数据集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<CCLog>

  /**
      * 当前页
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 每页展示条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * DescribePrefetchTasks请求参数结构体
 */
export interface DescribePrefetchTasksRequest {
  /**
   * 任务ID
   */
  JobId?: string

  /**
   * 查询起始时间
   */
  StartTime?: string

  /**
   * 查询结束时间
   */
  EndTime?: string

  /**
   * 查询起始偏移量
   */
  Offset?: number

  /**
   * 查询最大返回的结果条数
   */
  Limit?: number

  /**
      * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
      */
  Statuses?: Array<string>

  /**
   * zone id
   */
  ZoneId?: string

  /**
   * 查询的域名列表
   */
  Domains?: Array<string>

  /**
   * 查询的资源
   */
  Target?: string
}

/**
 * 内容管理任务结果
 */
export interface Task {
  /**
   * 任务ID
   */
  JobId: string

  /**
   * 状态
   */
  Status: string

  /**
   * 资源
   */
  Target: string

  /**
   * 任务类型
   */
  Type: string

  /**
   * 任务创建时间
   */
  CreateTime: string

  /**
   * 任务完成时间
   */
  UpdateTime: string
}

/**
 * DeleteDnsRecords请求参数结构体
 */
export interface DeleteDnsRecordsRequest {
  /**
   * 站点 ID
   */
  ZoneId: string

  /**
   * 记录 ID
   */
  Ids: Array<string>
}

/**
 * ddos黑白名单
 */
export interface DdosAllowBlock {
  /**
   * 开关标识防护是否清空
   */
  Switch?: string

  /**
   * 黑白名单数组
   */
  UserAllowBlockIp?: Array<DDoSUserAllowBlockIP>
}

/**
 * DDoS地域封禁
 */
export interface DDoSGeoIp {
  /**
      * 地域信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionId?: Array<number>

  /**
      * 区域封禁清空标识
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string
}

/**
 * DescribeZoneDDoSPolicy返回参数结构体
 */
export interface DescribeZoneDDoSPolicyResponse {
  /**
   * 用户appid
   */
  AppId: number

  /**
   * 防护分区
   */
  ShieldAreas: Array<ShieldArea>

  /**
      * 所有子域名信息，包含安全加速/内容加速
注意：此字段可能返回 null，表示取不到有效值。
      */
  Domains: Array<DDoSApplication>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CNAME 状态
 */
export interface CnameStatus {
  /**
   * 记录名称
   */
  Name: string

  /**
      * CNAME 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cname: string

  /**
      * 状态
生效：active
不生效：moved
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string
}

/**
 * DescribeDDosMajorAttackEvent返回参数结构体
 */
export interface DescribeDDosMajorAttackEventResponse {
  /**
   * DDos查询主攻击事件
   */
  Data: DDosMajorAttackEventData

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回消息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDoS特征过滤
 */
export interface DDoSFeaturesFilter {
  /**
   * 动作 drop-丢弃；transmit-放行；drop_block-丢弃并拉黑；forward-继续防护
   */
  Action?: string

  /**
   * 深度值1
   */
  Depth?: number

  /**
   * 深度值2
   */
  Depth2?: number

  /**
   * 目标端口结束
   */
  DportEnd?: number

  /**
   * 目标端口开始
   */
  DportStart?: number

  /**
   * 取非判断1
   */
  IsNot?: number

  /**
   * 取非判断2
   */
  IsNot2?: number

  /**
   * 多特征关系（单特征时(none)，第二特征相关配置可不填） none；and；or
   */
  MatchLogic?: string

  /**
   * 匹配方式1 pcre-正则匹配, sunday-字符串匹配
   */
  MatchType?: string

  /**
   * 匹配方式2 pcre-正则匹配, sunday-字符串匹配
   */
  MatchType2?: string

  /**
   * 偏移量1
   */
  Offset?: number

  /**
   * 偏移量2
   */
  Offset2?: number

  /**
   * 最大包长
   */
  PacketMax?: number

  /**
   * 最小包长
   */
  PacketMin?: number

  /**
   * 协议 tcp；udp；icmp；all
   */
  Protocol?: string

  /**
   * 源端口结束
   */
  SportEnd?: number

  /**
   * 源端口开始
   */
  SportStart?: number

  /**
   * 匹配字符串1
   */
  Str?: string

  /**
   * 匹配字符串2
   */
  Str2?: string

  /**
   * 匹配开始层级，层级参考计算机网络结构 begin_l5, no_match, begin_l3, begin_l4
   */
  MatchBegin?: string

  /**
   * 匹配开始层级，层级参考计算机网络结构 begin_l5, no_match, begin_l3, begin_l4
   */
  MatchBegin2?: string
}

/**
 * DescribeWebProtectionAttackEvents返回参数结构体
 */
export interface DescribeWebProtectionAttackEventsResponse {
  /**
   * DDos攻击事件数据
   */
  Data: CCInterceptEventData

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回消息
   */
  Msg: string

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
   * Zone ID
   */
  ZoneId: string

  /**
      * 类型，当前支持的类型：
- purge_url：URL
- purge_prefix：前缀
- purge_host：Hostname
- purge_all：全部缓存
      */
  Type: string

  /**
      * 要刷新的资源列表，每个元素格式依据Type而定
1) Type = purge_host 时
形如：www.example.com 或 foo.bar.example.com
2) Type = purge_prefix 时
形如：http://www.example.com/example
3) Type = purge_url 时
形如：https://www.example.com/example.jpg
4）Type = purge_all 时
Targets可为空，不需要填写
      */
  Targets?: Array<string>

  /**
      * 若有编码转换，仅清除编码转换后匹配的资源
若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986）
      */
  EncodeUrl?: boolean
}

/**
 * DeleteDnsRecords返回参数结构体
 */
export interface DeleteDnsRecordsResponse {
  /**
   * 记录 ID
   */
  Ids: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBotLog请求参数结构体
 */
export interface DescribeBotLogRequest {
  /**
   * 起始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 每页条数
   */
  PageSize: number

  /**
   * 当前页
   */
  PageNo: number

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合
   */
  Domains?: Array<string>

  /**
   * 查询条件
   */
  QueryCondition?: Array<QueryCondition>
}

/**
 * DownloadL7Logs返回参数结构体
 */
export interface DownloadL7LogsResponse {
  /**
      * 七层离线日志data
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<L7OfflineLog>

  /**
      * 页面大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 页号
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ddos 攻击事件的详情
 */
export interface DDosAttackEventDetailData {
  /**
   * 攻击状态
   */
  AttackStatus: number

  /**
   * 攻击类型
   */
  AttackType: string

  /**
   * 结束时间
   */
  EndTime: number

  /**
   * 开始时间
   */
  StartTime: number

  /**
   * 最大带宽
   */
  MaxBandWidth: number

  /**
   * 最大包速率
   */
  PacketMaxRate: number

  /**
   * 事件Id
   */
  EventId: string

  /**
   * ddos 策略组id
   */
  PolicyId: number
}

/**
 * CreateOriginGroup请求参数结构体
 */
export interface CreateOriginGroupRequest {
  /**
   * 源站组名称
   */
  OriginName: string

  /**
      * 配置类型，当OriginType=self 时，需要填写：
area: 按区域配置
weight: 按权重配置
当OriginType=third_party/cos 时，不需要填写
      */
  Type: string

  /**
   * 源站记录
   */
  Record: Array<OriginRecord>

  /**
   * 站点ID
   */
  ZoneId: string

  /**
      * 源站类型
self：自有源站
third_party：第三方源站
cos：腾讯云COS源站
      */
  OriginType?: string
}

/**
 * DescribeTimingL4Data请求参数结构体
 */
export interface DescribeTimingL4DataRequest {
  /**
   * RFC3339格式，客户端时间
   */
  StartTime: string

  /**
   * RFC3339格式，客户端时间
   */
  EndTime: string

  /**
      * 支持的指标：
l4Flow_connections: 访问连接数
l4Flow_flux: 访问总流量
l4Flow_inFlux: 访问入流量
l4Flow_outFlux: 访问出流量
      */
  MetricNames: Array<string>

  /**
   * 站点id列表
   */
  ZoneIds?: Array<string>

  /**
   * 该字段已废弃，请使用ProxyIds字段
   */
  InstanceIds?: Array<string>

  /**
   * 该字段当前无效
   */
  Protocol?: string

  /**
   * 时间间隔，选填{min, 5min, hour, day}
   */
  Interval?: string

  /**
   * 该字段当前无效，请使用Filter筛选
   */
  RuleId?: string

  /**
   * 支持的 Filter：proxyd,ruleId
   */
  Filters?: Array<Filter>

  /**
   * 四层实例列表
   */
  ProxyIds?: Array<string>
}

/**
 * DescribeHostsSetting请求参数结构体
 */
export interface DescribeHostsSettingRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 分页查询偏移量，默认为 0
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为 100，最大可设置为 1000
   */
  Limit?: number

  /**
   * 指定域名查询
   */
  Hosts?: Array<string>
}

/**
 * DescribeZoneDDoSPolicy请求参数结构体
 */
export interface DescribeZoneDDoSPolicyRequest {
  /**
   * 一级域名id
   */
  ZoneId?: string
}

/**
 * DescribeDDosAttackData返回参数结构体
 */
export interface DescribeDDosAttackDataResponse {
  /**
      * DDos攻击数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 返回数据
   */
  Msg: string

  /**
   * 查询时间粒度，可选{min,5min,hour,day}
   */
  Interval: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebManagedRulesLog请求参数结构体
 */
export interface DescribeWebManagedRulesLogRequest {
  /**
   * 起始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 每页条数
   */
  PageSize: number

  /**
   * 当前页
   */
  PageNo: number

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合
   */
  Domains?: Array<string>

  /**
   * 查询条件
   */
  QueryCondition?: Array<QueryCondition>
}

/**
 * CreateApplicationProxyRules返回参数结构体
 */
export interface CreateApplicationProxyRulesResponse {
  /**
   * 新增的规则ID数组
   */
  RuleId: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebManagedRulesTopData请求参数结构体
 */
export interface DescribeWebManagedRulesTopDataRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 过滤指标
   */
  MetricName: string

  /**
   * 查询前多少名,传值为0 全量
   */
  Limit: number

  /**
   * 站点集合
   */
  ZoneIds?: Array<string>

  /**
   * ddos策略组id 集合
   */
  PolicyIds?: Array<number>

  /**
   * 端口号
   */
  Port?: number

  /**
   * 协议类型,tcp,udp,all
   */
  ProtocolType?: string

  /**
   * 攻击类型,flood,icmpFlood......,all
   */
  AttackType?: string

  /**
   * 域名集合
   */
  Domains?: Array<string>
}

/**
 * DescribeIdentification返回参数结构体
 */
export interface DescribeIdentificationResponse {
  /**
   * 站点名称
   */
  Name: string

  /**
      * 验证状态
- pending 验证中
- finished 验证完成
      */
  Status: string

  /**
   * 子域
   */
  Subdomain: string

  /**
   * 记录类型
   */
  RecordType: string

  /**
   * 记录值
   */
  RecordValue: string

  /**
      * 域名当前的 NS 记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalNameServers: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDos主攻击事件
 */
export interface DDosMajorAttackEvent {
  /**
   * ddos 策略组id
   */
  PolicyId: number

  /**
   * 攻击最大带宽
   */
  AttackMaxBandWidth: number

  /**
   * 攻击时间 单位为s
   */
  AttackTime: number
}

/**
 * ModifyZoneCnameSpeedUp请求参数结构体
 */
export interface ModifyZoneCnameSpeedUpRequest {
  /**
   * 站点 ID
   */
  Id: string

  /**
      * CNAME 加速状态
- enabled 开启
- disabled 关闭
      */
  Status: string
}

/**
 * DescribeApplicationProxyDetail返回参数结构体
 */
export interface DescribeApplicationProxyDetailResponse {
  /**
   * 实例ID
   */
  ProxyId: string

  /**
      * 代理名称
当ProxyType=hostname时，表示域名或者子域名
当ProxyType=instance时，表示实例名称
      */
  ProxyName: string

  /**
      * 调度模式：
ip表示Anycast IP
domain表示CNAME
      */
  PlatType: string

  /**
   * 0关闭安全，1开启安全
   */
  SecurityType: number

  /**
   * 0关闭加速，1开启加速
   */
  AccelerateType: number

  /**
   * 字段已经移至Rule.ForwardClientIp
   */
  ForwardClientIp: string

  /**
   * 字段已经移至Rule.SessionPersist
   */
  SessionPersist: boolean

  /**
   * 规则列表
   */
  Rule: Array<ApplicationProxyRule>

  /**
      * 状态：
online：启用
offline：停用
progress：部署中
      */
  Status: string

  /**
   * 调度信息
   */
  ScheduleValue: Array<string>

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 站点名称
   */
  ZoneName: string

  /**
   * 会话保持时间
   */
  SessionPersistTime: number

  /**
      * 服务类型
hostname：子域名模式
instance：实例模式
      */
  ProxyType: string

  /**
      * 当ProxyType=hostname时：
ProxyName为域名，如：test.123.com
HostId表示该域名，即test.123.com对应的代理加速唯一标识
      */
  HostId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DDoS黑白名单
 */
export interface DDoSUserAllowBlockIP {
  /**
      * 用户ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ip?: string

  /**
      * 掩码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mask?: number

  /**
      * 类型 block-丢弃；allow-允许
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: string

  /**
      * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: number

  /**
      * 用户ip范围截止
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ip2?: string

  /**
      * 掩码截止范围
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mask2?: number
}

/**
 * DescribeBotLog返回参数结构体
 */
export interface DescribeBotLogResponse {
  /**
   * Bot攻击Data
   */
  Data: BotLogData

  /**
   * 状态，1：失败，0:成功
   */
  Status: number

  /**
   * 返回信息
   */
  Msg: string

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
   * 记录总数
   */
  TotalCount: number

  /**
   * 负载均衡信息
   */
  Data: Array<LoadBalancing>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWebProtectionData返回参数结构体
 */
export interface DescribeWebProtectionDataResponse {
  /**
      * 数据详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
   * 状态，1:失败，0:成功
   */
  Status: number

  /**
   * 消息
   */
  Msg: string

  /**
   * 查询时间粒度，可选{min,5min,hour,day}
   */
  Interval: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDnssec返回参数结构体
 */
export interface ModifyDnssecResponse {
  /**
   * 站点 ID
   */
  Id: string

  /**
   * 站点名称
   */
  Name: string

  /**
      * DNSSEC 状态
- enabled 开启
- disabled 关闭
      */
  Status: string

  /**
      * DNSSEC 相关信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Dnssec: DnssecInfo

  /**
   * 修改时间
   */
  ModifiedOn: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ScanDnsRecords请求参数结构体
 */
export interface ScanDnsRecordsRequest {
  /**
   * 站点 ID
   */
  ZoneId: string
}

/**
 * 自定义 nameservers
 */
export interface VanityNameServers {
  /**
      * 自定义 ns 开关
- on 开启
- off 关闭
      */
  Switch: string

  /**
   * 自定义 ns 列表
   */
  Servers?: Array<string>
}

/**
 * ImportDnsRecords返回参数结构体
 */
export interface ImportDnsRecordsResponse {
  /**
   * 记录 ID
   */
  Ids: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoadBalancingDetail请求参数结构体
 */
export interface DescribeLoadBalancingDetailRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 负载均衡ID
   */
  LoadBalancingId: string
}

/**
 * https 服务端证书配置
 */
export interface DefaultServerCertInfo {
  /**
      * 服务器证书 ID, 默认证书ID, 或在 SSL 证书管理进行证书托管时自动生成
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertId: string

  /**
      * 证书备注名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Alias?: string

  /**
      * 证书类型:
default: 默认证书
upload:用户上传
managed:腾讯云托管
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: string

  /**
      * 证书过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime?: string

  /**
      * 证书生效时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EffectiveTime?: string

  /**
      * 证书公用名
注意：此字段可能返回 null，表示取不到有效值。
      */
  CommonName?: string

  /**
      * 证书SAN域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubjectAltName?: Array<string>

  /**
      * 证书状态:
applying: 证书申请中
failed: 证书(申请)失败
processing: 证书部署中
deployed: 证书已部署
disabled: 证书被禁用
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string

  /**
      * Status为失败时,此字段返回失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message?: string
}

/**
 * DNSSEC 相关信息
 */
export interface DnssecInfo {
  /**
   * 标志
   */
  Flags: number

  /**
   * 加密算法
   */
  Algorithm: string

  /**
   * 加密类型
   */
  KeyType: string

  /**
   * 摘要类型
   */
  DigestType: string

  /**
   * 摘要算法
   */
  DigestAlgorithm: string

  /**
   * 摘要信息
   */
  Digest: string

  /**
   * DS 记录值
   */
  DS: string

  /**
   * 密钥标签
   */
  KeyTag: number

  /**
   * 公钥
   */
  PublicKey: string
}

/**
 * DescribeOriginGroup请求参数结构体
 */
export interface DescribeOriginGroupRequest {
  /**
   * 分页参数Offset
   */
  Offset: number

  /**
   * 分页参数Limit
   */
  Limit: number

  /**
   * 过滤参数
   */
  Filters?: Array<OriginFilter>

  /**
      * 站点ID
不填写获取所有站点源站组
      */
  ZoneId?: string
}

/**
 * DescribeOriginGroupDetail返回参数结构体
 */
export interface DescribeOriginGroupDetailResponse {
  /**
   * 源站组ID
   */
  OriginId: string

  /**
   * 源站组名称
   */
  OriginName: string

  /**
      * 源站组配置类型
area：表示按照Record记录中的Area字段进行按客户端IP所在区域回源。
weight：表示按照Record记录中的Weight字段进行按权重回源。
      */
  Type: string

  /**
   * 记录
   */
  Record: Array<OriginRecord>

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 站点名称
   */
  ZoneName: string

  /**
      * 源站类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginType: string

  /**
      * 当前源站组是否被四层代理使用。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationProxyUsed: boolean

  /**
      * 当前源站组是否被负载均衡使用。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancingUsed: boolean

  /**
      * 使用当前源站组的负载均衡的类型：
none：未被使用
dns_only：被仅DNS类型负载均衡使用
proxied：被代理加速类型负载均衡使用
both：同时被仅DNS和代理加速类型负载均衡使用
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancingUsedType: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Http2回源配置
 */
export interface UpstreamHttp2 {
  /**
      * http2回源配置开关
on：开启
off：关闭
      */
  Switch: string
}

/**
 * 离线缓存是否开启
 */
export interface OfflineCache {
  /**
      * on | off, 离线缓存是否开启
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch: string
}

/**
 * DescribeOriginGroupDetail请求参数结构体
 */
export interface DescribeOriginGroupDetailRequest {
  /**
   * 源站组ID
   */
  OriginId: string

  /**
   * 站点ID
   */
  ZoneId: string
}

/**
 * DescribeDDosAttackEventDetail请求参数结构体
 */
export interface DescribeDDosAttackEventDetailRequest {
  /**
   * 事件id
   */
  EventId: string
}

/**
 * DescribeTimingL4Data返回参数结构体
 */
export interface DescribeTimingL4DataResponse {
  /**
   * 查询维度
   */
  Type: string

  /**
   * 时间间隔
   */
  Interval: string

  /**
      * 详细数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<TimingDataRecord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全Bot配置
 */
export interface BotConfig {
  /**
   * bot开关
   */
  Switch?: string

  /**
   * 预置规则
   */
  ManagedRule?: BotManagedRule

  /**
   * 保留
   */
  UaBotRule?: BotManagedRule

  /**
   * 保留
   */
  IspBotRule?: BotManagedRule

  /**
   * 用户画像规则
   */
  PortraitRule?: BotPortraitRule

  /**
      * Bot智能分析
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntelligenceRule?: IntelligenceRule
}

/**
 * 时序类型详细数据
 */
export interface TimingTypeValue {
  /**
      * 数据和
注意：此字段可能返回 null，表示取不到有效值。
      */
  Sum: number

  /**
      * 最大
注意：此字段可能返回 null，表示取不到有效值。
      */
  Max: number

  /**
      * 平均
注意：此字段可能返回 null，表示取不到有效值。
      */
  Avg: number

  /**
   * 指标名
   */
  MetricName: string

  /**
      * 废弃字段，即将下线，请使用Detail字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetailData: Array<number>

  /**
      * 详细数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Detail: Array<TimingDataItem>
}

/**
 * DescribeBotManagedRules请求参数结构体
 */
export interface DescribeBotManagedRulesRequest {
  /**
   * 一级域名
   */
  ZoneId: string

  /**
   * 子域名/应用名
   */
  Entity: string

  /**
   * 页数
   */
  Page: number

  /**
   * 每页数量
   */
  PerPage: number

  /**
   * idcid/sipbot/uabot规则类型，空代表拉取全部
   */
  RuleType?: string
}

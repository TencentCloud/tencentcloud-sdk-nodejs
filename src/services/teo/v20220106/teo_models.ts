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
 * 拦截页面的配置信息
 */
export interface DropPageDetail {
  /**
      * 拦截页面的唯一Id。系统默认包含一个自带拦截页面，Id值为0。
该Id可通过创建拦截页面接口进行上传获取。如传入0，代表使用系统默认拦截页面
      */
  PageId: number

  /**
   * 拦截页面的HTTP状态码。状态码范围是 100 - 600。
   */
  StatusCode: number

  /**
   * 页面的元信息，文件名或url。
   */
  Name?: string

  /**
   * 页面的类型。
   */
  Type?: string
}

/**
 * 智能压缩配置
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
 * web攻击日志Data
 */
export interface WebLogData {
  /**
      * 分组数据。
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<WebLogs>

  /**
   * 分页拉取的起始页号。最小值：1。
   */
  PageNo: number

  /**
   * 分页拉取的最大返回结果数。最大值：1000。
   */
  PageSize: number

  /**
   * 总页数。
   */
  Pages: number

  /**
   * 总条数。
   */
  TotalSize: number
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
 * ACL用户规则
 */
export interface ACLUserRule {
  /**
   * 规则名。
   */
  RuleName: string

  /**
      * 处罚动作。
1. trans 放行
2. drop 拦截
3. monitor 观察
4. ban IP封禁
5. redirect 重定向
6. page 指定页面
7. alg Javascript挑战
      */
  Action: string

  /**
      * 规则状态。
1. on 规则生效
2. off 规则失效
      */
  RuleStatus: string

  /**
   * ACL规则。
   */
  Conditions: Array<ACLCondition>

  /**
   * 规则优先级，0-100。
   */
  RulePriority: number

  /**
      * 规则id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
      * ip封禁的惩罚时间，0-2天
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTime?: number

  /**
      * ip封禁的惩罚时间单位。
1. second 秒
2. 分钟 minutes
3. hour 小时
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTimeUnit?: string

  /**
      * 自定义返回页面的实例id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageId?: number

  /**
      * 自定义返回页面的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string

  /**
      * 重定向时候的地址，必须为本用户接入的站点子域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RedirectUrl?: string

  /**
      * 重定向时候的返回码。
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
   * top数据内容。
   */
  Data: Array<TopNEntry>

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应消息。
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

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area?: string
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
      * Bot攻击日志数据集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<BotLog>

  /**
      * 分页拉取的起始页号。最小值：1。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 分页拉取的最大返回结果数。最大值：1000。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
  /**
   * 分页查询偏移量。默认值：0，最小值：0。
   */
  Offset?: number

  /**
   * 分页查询限制数目。默认值：1000，最大值：1000。
   */
  Limit?: number

  /**
   * 查询条件过滤器，复杂类型。
   */
  Filters?: Array<ZoneFilter>
}

/**
 * 速率限制模板
 */
export interface RateLimitTemplate {
  /**
      * 模板等级名称。
1. sup_loose 自适应 - 超级宽松
2. loose     自适应 - 宽松
3. emergency 自适应 - 紧急
4. normal    自适应 - 适中
5. strict    固定阈值 - 严格
6. close     关闭 - 仅精准速率限制生效
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mode?: string

  /**
      * 模板值详情。
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
  Rules: Array<RuleItem>

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
 * Ddos防护配置
 */
export interface DdosRule {
  /**
      * DDoS防护等级。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosStatusInfo?: DDoSStatusInfo

  /**
      * DDoS地域封禁。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosGeoIp?: DDoSGeoIp

  /**
      * DDoS黑白名单。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosAllowBlock?: DdosAllowBlock

  /**
      * DDoS 协议封禁+连接防护。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosAntiPly?: DDoSAntiPly

  /**
      * DDoS特征过滤。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosPacketFilter?: DdosPacketFilter

  /**
      * DDoS端口过滤。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosAcl?: DdosAcls

  /**
      * DDoS开关，取值有:
<li>on ：开启 ；</li>
<li>off ：关闭 。</li>
      */
  Switch?: string

  /**
      * UDP分片功能是否支持，取值有:
<li>on ：支持 ；</li>
<li>off ：不支持 。</li>
      */
  UdpShardOpen?: string

  /**
      * DDoS源站访问速率限制。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosSpeedLimit?: DdosSpeedLimit
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
   * DDos攻击事件数据。
   */
  Data: DDosAttackEventData

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应信息。
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
 * DescribeZoneSetting请求参数结构体
 */
export interface DescribeZoneSettingRequest {
  /**
   * 站点ID。
   */
  ZoneId: string
}

/**
 * 例外规则生效的具体条件
 */
export interface ExceptUserRuleCondition {
  /**
      * 匹配项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MatchFrom?: string

  /**
   * 匹配项的参数。当 MatchFrom 为 header 时，可以填入 header 的 key 作为参数。
   */
  MatchParam?: string

  /**
      * 匹配操作符。
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
  Cache?: CacheConfig

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
  ClientIpHeader?: ClientIp

  /**
      * 缓存预刷新配置。
不填写表示保持原有配置。
      */
  CachePrefresh?: CachePrefresh

  /**
      * Ipv6访问配置。
不填写表示保持原有配置。
      */
  Ipv6?: Ipv6Access
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
   * 目的端口结束，取值范围0-65535。
   */
  DportEnd?: number

  /**
   * 目的端口开始，取值范围0-65535。
   */
  DportStart?: number

  /**
   * 源端口结束，取值范围0-65535。
   */
  SportEnd?: number

  /**
   * 源端口开始，取值范围0-65535。
   */
  SportStart?: number

  /**
      * 协议，取值有：
<li>tcp ：tcp协议 ；</li>
<li>udp ：udp协议 ；</li>
<li>all ：全部协议 。</li>
      */
  Protocol?: string

  /**
      * 执行动作，取值为：
<li>drop ：丢弃 ；</li>
<li>transmit ：放行 ；</li>
<li>forward ：继续防护 。</li>
      */
  Action?: string

  /**
      * 是否为系统配置，取值为：
<li>0 ：修改配置 ；</li>
<li>1 ：系统默认配置 。</li>
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
 * ModifyApplicationProxy返回参数结构体
 */
export interface ModifyApplicationProxyResponse {
  /**
   * 代理ID。
   */
  ProxyId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ddos特征过滤
 */
export interface DdosPacketFilter {
  /**
   * 特征过滤规则数组。
   */
  PacketFilter?: Array<DDoSFeaturesFilter>

  /**
      * 特征过滤清空标识，取值有：
<li>off ：清空特征过滤规则，无需填写 PacketFilter 参数 ；</li>
<li>on ：配置特征过滤规则，需填写 PacketFilter 参数。</li>默认值为on。
      */
  Switch?: string
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
      * 不缓存配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string
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
  RuleList: Array<RuleSettingDetail>

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
   */
  OriginalNameServers: Array<string>

  /**
   * 腾讯云分配给用户的 NS 列表
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
      * 是否开启 CNAME 加速
- enabled：开启
- disabled：关闭
      */
  CnameSpeedUp: string

  /**
      * cname切换验证状态
- finished 切换完成
- pending 切换验证中
      */
  CnameStatus: string

  /**
      * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>

  /**
      * 站点接入地域，取值为：
<li> global：全球；</li>
<li> mainland：中国大陆；</li>
<li> overseas：境外区域。</li>
      */
  Area: string

  /**
      * 计费资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Resources: Array<Resource>

  /**
   * 站点修改时间
   */
  ModifiedOn: string

  /**
   * 站点创建时间
   */
  CreatedOn: string

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
      * 当前该字段无效。
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
      * 当前该字段无效 。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskLevel: string

  /**
      * 当前该字段无效 。
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
      * 该字段当前无效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisposalMethod: string

  /**
      * 该字段当前无效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HttpLog: string

  /**
   * user agent。
   */
  Ua: string

  /**
      * 该字段当前无效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetectionMethod: string

  /**
      * 该字段当前无效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Confidence: string

  /**
      * 该字段当前无效。
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
 * 例外规则的生效范围
 */
export interface ExceptUserRuleScope {
  /**
      * 生效的模块

1. waf Waf防护
2. bot Bot防护
注意：此字段可能返回 null，表示取不到有效值。
      */
  Modules?: Array<string>
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
 * DescribeAvailablePlans请求参数结构体
 */
export type DescribeAvailablePlansRequest = null

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
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 分页拉取的最大返回结果数。最大值：1000。
   */
  PageSize: number

  /**
   * 分页拉取的起始页号。最小值：1。
   */
  PageNo: number

  /**
   * ddos策略组id 集合，不填默认选择全部策略id。
   */
  PolicyIds?: Array<number>

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
      * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
      */
  ProtocolType?: string

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
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
      * 攻击事件数据集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<DDosAttackEvent>

  /**
      * 分页拉取的起始页号。最小值：1。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 分页拉取的最大返回结果数。最大值：1000。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
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
 * 规则引擎带有状态码的动作
 */
export interface RuleCodeAction {
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
      * 攻击源ip。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackSourceIp: string

  /**
      * 地区（国家）。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackRegion: string

  /**
      * 累计攻击流量。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackFlow: number

  /**
      * 累计攻击包量。
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
 * 站点信息
 */
export interface Zone {
  /**
   * 站点ID。
   */
  Id: string

  /**
   * 站点名称。
   */
  Name: string

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
      * 站点接入地域，取值为：
<li> global：全球；</li>
<li> mainland：中国大陆；</li>
<li> overseas：境外区域。</li>
      */
  Area: string
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
 * ddos端口过滤
 */
export interface DdosAcls {
  /**
   * 端口过滤规则数组。
   */
  Acl?: Array<DDoSAcl>

  /**
      * 清空规则标识，取值有：
<li>off ：清空端口过滤规则列表，Acl无需填写。 ；</li>
<li>on ：配置端口过滤规则，需填写Acl参数。</li>默认值为on。
      */
  Switch?: string
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
 * RateLimit配置
 */
export interface RateLimitConfig {
  /**
      * 开关。
1. on 开启RateLimit；
2. off 关闭RateLimit
      */
  Switch: string

  /**
   * 速率限制-用户规则列表。
   */
  UserRules: Array<RateLimitUserRule>

  /**
      * 速率限制模板功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Template?: RateLimitTemplate

  /**
      * 智能客户端过滤。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Intelligence?: RateLimitIntelligence
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
 * 详细规则。
 */
export interface IpTableRule {
  /**
      * 规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 处置动作。
1. drop 拦截
2. trans放行
3. monitor观察
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 类型匹配。
1. ip 根据ip
2. area 根据区域
3. ua 根据User-Agent
4. referer 根据Referer
注意：此字段可能返回 null，表示取不到有效值。
      */
  MatchFrom?: string

  /**
      * 匹配内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MatchContent?: string

  /**
      * 更新时间。
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

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area: string
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
<li>OFF：不传递。</li>
      */
  ForwardClientIp?: string

  /**
      * 是否开启会话保持，取值有：
<li>true：开启；</li>
<li>false：关闭。</li>
      */
  SessionPersist?: boolean
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
 * DDoS端口限速
 */
export interface DdosSpeedLimit {
  /**
   * 源站包量限制，支持单位有pps、Kpps、Mpps、Gpps。支持范围1 pps-10000 Gpps。"0 pps"或其他单位数值为0，即不限包。""为不更新。
   */
  PackageLimit?: string

  /**
   * 源站流量限制，支持单位有bps、Kbps、Mbps、Gbps，支持范围1 bps-10000 Gbps。"0 bps"或其他单位数值为0，即不限流。""为不更新。
   */
  FluxLimit?: string
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
 * DescribeSecurityPolicyManagedRulesId请求参数结构体
 */
export interface DescribeSecurityPolicyManagedRulesIdRequest {
  /**
   * 规则id集合
   */
  RuleId: Array<number>
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
 * 缓存时间设置
 */
export interface CacheConfigCache {
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
  Choices: string
}

/**
 * 规则引擎功能项操作，对于一种功能只对应下面三种类型的其中一种，RuleAction 数组中的每一项只能是其中一个类型，更多功能项的填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。
 */
export interface RuleAction {
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
  NormalAction?: RuleNormalAction

  /**
      * 带有请求头/响应头的功能操作，选择该类型的功能项有：
<li> 修改 HTTP 请求头（RequestHeader）；</li>
<li> 修改HTTP响应头（ResponseHeader）。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  RewriteAction?: RuleRewriteAction

  /**
      * 带有状态码的功能操作，选择该类型的功能项有：
<li> 自定义错误页面（ErrorPage）；</li>
<li> 状态码缓存 TTL（StatusCodeCache）。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodeAction?: RuleCodeAction
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
   * top数据内容
   */
  Data: Array<TopNEntry>

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应消息。
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
   * 暂不支持，默认值off。
   */
  AiStatus: string

  /**
   * 废弃字段。
   */
  Appid: string

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
      * 开关。
1. on 开启
2. off 关闭
      */
  Switch: string

  /**
   * 自定义-用户规则。
   */
  UserRules: Array<ACLUserRule>
}

/**
 * ModifyZoneSetting返回参数结构体
 */
export interface ModifyZoneSettingResponse {
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
 * 模板当前详细配置。
 */
export interface RateLimitTemplateDetail {
  /**
      * 模板等级名称。
1. sup_loose 自适应 - 超级宽松
2. loose     自适应 - 宽松
3. emergency 自适应 - 紧急
4. normal    自适应 - 适中
5. strict    固定阈值 - 严格
6. close     关闭 - 仅精准速率限制生效
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mode?: string

  /**
      * 唯一id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ID?: number

  /**
      * 处置动作。模板阀值触发后的处罚行为。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 惩罚时间，单位是秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTime?: number

  /**
      * 阈值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Threshold?: number

  /**
      * 统计周期。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Period?: number
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
      * 防护级别，取值有：
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
   * 托管规则详细配置。
   */
  WafRules: WafRule

  /**
      * AI规则引擎防护配置。
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
 * CC日志
 */
export interface CCLog {
  /**
   * 攻击请求时间，采用unix秒级时间戳。
   */
  AttackTime: number

  /**
   * 客户端ip。
   */
  AttackSip: string

  /**
   * 受攻击域名。
   */
  AttackDomain: string

  /**
   * URI。
   */
  RequestUri: string

  /**
   * 命中次数。
   */
  HitCount: number

  /**
   * IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)。
   */
  SipCountryCode: string

  /**
   * 请求（事件）ID。
   */
  EventId: string

  /**
      * 当前该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisposalMethod: string

  /**
      * 当前该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HttpLog: string

  /**
      * 当前该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
      * 当前该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskLevel: string

  /**
      * User Agent，仅自定义规则日志中存在。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ua: string

  /**
      * 请求方法，仅自定义规则日志中存在。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestMethod: string

  /**
      * 规则信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleDetailList: Array<SecRuleRelatedInfo>
}

/**
 * 规则引擎规则项，Conditions 数组内多个项的关系为 或，内层 Conditions 列表内多个项的关系为 且。
 */
export interface RuleItem {
  /**
      * 执行功能判断条件。
注意：满足该数组内任意一项条件，功能即可执行。
      */
  Conditions: Array<RuleAndConditions>

  /**
   * 执行的功能。
   */
  Actions: Array<RuleAction>
}

/**
 * 规则查询 Filter
 */
export interface RuleFilter {
  /**
      * 过滤参数，取值有：
<li> RULE_ID：规则 ID。 </li>
      */
  Name: string

  /**
   * 参数值。
   */
  Values: Array<string>
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
      * Web攻击日志实体。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应消息。
   */
  Msg: string

  /**
      * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
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
   * web攻击日志数据内容。
   */
  Data: WebLogData

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应信息。
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
源站组内多个源站权重总和应为100。
当源站配置类型Type=proto，表示权重
取值范围为[1-100]
源站组内Proto相同的多个源站权重总和应为100。
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

  /**
      * 当源站配置类型Type=proto时，表示客户端请求协议，取值：http/https
注意：此字段可能返回 null，表示取不到有效值。
      */
  Proto?: string
}

/**
 * web攻击日志
 */
export interface WebLogs {
  /**
      * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackContent: string

  /**
   * 攻击源（客户端）Ip。
   */
  AttackIp: string

  /**
      * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackType: string

  /**
   * 受攻击子域名。
   */
  Domain: string

  /**
      * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Msuuid: string

  /**
      * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RequestMethod: string

  /**
   * URI
   */
  RequestUri: string

  /**
      * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskLevel: string

  /**
      * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
   * IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)
   */
  SipCountryCode: string

  /**
   * 请求（事件）ID。
   */
  EventId: string

  /**
      * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisposalMethod: string

  /**
   * http log。
   */
  HttpLog: string

  /**
      * 该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ua: string

  /**
   * 攻击时间，采用unix秒级时间戳。
   */
  AttackTime: number

  /**
      * 规则相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleDetailList: Array<SecRuleRelatedInfo>
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
      * 遵循源站配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
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

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area?: string
}

/**
 * TopN entry
 */
export interface TopNEntry {
  /**
   * top查询维度值。
   */
  Key: string

  /**
   * 查询具体数据。
   */
  Value: Array<TopNEntryValue>
}

/**
 * DescribeApplicationProxy返回参数结构体
 */
export interface DescribeApplicationProxyResponse {
  /**
   * 应用代理列表。
   */
  Data: Array<ApplicationProxy>

  /**
   * 记录总数。
   */
  TotalCount: number

  /**
   * 字段已废弃。
   */
  Quota: number

  /**
   * 当ProxyId为空时，表示套餐内PlatType为ip的Anycast IP的实例数量。
   */
  IpCount: number

  /**
   * 当ProxyId为空时，表示套餐内PlatType为domain的CNAME的实例数量。
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
 l7Flow_hit_outFlux: 缓存命中流量
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

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area?: string
}

/**
 * 功能总开关
 */
export interface SwitchConfig {
  /**
      * Web类型的安全总开关生效范围，Waf，自定义规则，速率限制。
1. on 开启
2. off 关闭
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
   * 子域名
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
   * 限速拦截数据内容。
   */
  Data: CCLogData

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应信息。
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
 * 安全配置。
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
      * DDoS配置。如果为null，默认使用历史配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DdosConfig?: DDoSConfig

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
 * 主攻击对象Data
 */
export interface DDosMajorAttackEventData {
  /**
      * DDosMajorAttackEvent ddos 攻击事件。
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<DDosMajorAttackEvent>

  /**
      * 分页拉取的起始页号。最小值：1。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 分页拉取的最大返回结果数。最大值：1000。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数。
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
 * Ipv6访问配置
 */
export interface Ipv6Access {
  /**
      * Ipv6访问功能配置，取值有：
<li>on：开启Ipv6访问功能；</li>
<li>off：关闭Ipv6访问功能。</li>
      */
  Switch: string
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
 * DescribeWebManagedRulesData请求参数结构体
 */
export interface DescribeWebManagedRulesDataRequest {
  /**
   * 开始时间，RFC3339格式。
   */
  StartTime: string

  /**
   * 结束时间，RFC3339格式。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>waf_interceptNum ：waf拦截次数 。</li>
      */
  MetricNames: Array<string>

  /**
   * 站点id列表，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 子域名列表，不填默认选择子域名。
   */
  Domains?: Array<string>

  /**
   * 该字段已废弃，请勿传。
   */
  ProtocolType?: string

  /**
   * 该字段已废弃，请勿传。
   */
  AttackType?: string

  /**
      * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
      */
  Interval?: string

  /**
      * 筛选条件，取值有：
<li>action ：执行动作 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
}

/**
 * DDos攻击源数据
 */
export interface DDosAttackSourceEventData {
  /**
      * DDos攻击源数据集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<DDosAttackSourceEvent>

  /**
      * 分页拉取的起始页号。最小值：1。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNo: number

  /**
      * 分页拉取的最大返回结果数。最大值：1000。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Pages: number

  /**
      * 总条数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalSize: number
}

/**
 * ModifyDDoSPolicy返回参数结构体
 */
export interface ModifyDDoSPolicyResponse {
  /**
   * 策略id。
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
   * 托管规则开关。 on为开启
   */
  Switch: string

  /**
   * 黑名单ID列表，将规则ID加入本参数列表中代表该ID关闭，即该规则ID不再生效。ID参考接口 [DescribeSecurityPolicyManagedRules](https://tcloud4api.woa.com/document/product/1657/76030?!preview&!document=1)。
   */
  BlockRuleIDs: Array<number>

  /**
      * 观察模式ID列表，将规则ID加入本参数列表中代表该ID使用观察模式生效，即该规则ID进入观察模式。ID参考接口 [DescribeSecurityPolicyManagedRules](https://tcloud4api.woa.com/document/product/1657/76030?!preview&!document=1)。
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
 * TopN数据Entry
 */
export interface TopNEntryValue {
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
   * 套餐所含流量（单位：字节）
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
   * 套餐价格（单位：分）
   */
  Price: number

  /**
   * 套餐所含请求次数（单位：字节）
   */
  Request: number

  /**
   * 套餐所能绑定的站点个数。
   */
  SiteNumber: number
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

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area?: string
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
   * 开始时间，RFC3339格式。
   */
  StartTime: string

  /**
   * 结束时间，RFC3339格式。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>ccRate_interceptNum ：速率限制规则限制次数 ；</li>
<li>ccAcl_interceptNum ：自定义规则拦截次数 。</li>
      */
  MetricNames: Array<string>

  /**
   * 站点id列表，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 子域名列表，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
   * 该字段已废弃，请勿传。
   */
  ProtocolType?: string

  /**
   * 该字段已废弃，请勿传。
   */
  AttackType?: string

  /**
      * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
      */
  Interval?: string

  /**
      * 筛选条件，取值有：
<li>action ：执行动作 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
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
   * RateLimit统计阈值，单位是次，取值范围0-4294967294。
   */
  Threshold: number

  /**
   * RateLimit统计时间，取值范围 10/20/30/40/50/60 单位是秒。
   */
  Period: number

  /**
   * 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。
   */
  RuleName: string

  /**
      * 处置动作。
1. monitor(观察)；
2. drop(拦截)；
3. alg(Javascript挑战)
      */
  Action: string

  /**
   * 惩罚时长，0-100。
   */
  PunishTime: number

  /**
      * 处罚时长单位。
1. second 秒; 
2. minutes 分钟
3. hour 小时
      */
  PunishTimeUnit: string

  /**
      * 规则状态。
1. on 生效
2. off 不生效
      */
  RuleStatus: string

  /**
   * 规则。
   */
  Conditions: Array<ACLCondition>

  /**
   * 规则权重，取值范围0-100。
   */
  RulePriority: number

  /**
      * 规则id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 过滤词。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreqFields?: Array<string>

  /**
      * 更新时间.
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
      * 本功能的开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * 本规则的ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * JS挑战的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlgManagedIds?: Array<number>

  /**
      * 数字验证码的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CapManagedIds?: Array<number>

  /**
      * 观察的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MonManagedIds?: Array<number>

  /**
      * 拦截的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropManagedIds?: Array<number>

  /**
      * 保留。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ManagedIds?: Array<number>

  /**
      * 保留。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransManagedIds?: Array<number>
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
   * 站点ID。
   */
  ZoneId?: string

  /**
   * 分页查询偏移量，默认为0。
   */
  Offset?: number

  /**
   * 分页查询限制数目，默认为10，最大可设置为1000。
   */
  Limit?: number

  /**
      * 代理ID。
当ProxyId为空时，表示查询站点下所有应用代理的列表。
      */
  ProxyId?: string
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
  Rules: Array<RuleItem>
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
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>ddos_attackFlux_protocol ：攻击总流量协议类型分布排行 ；</li>
<li>ddos_attackPackageNum_protocol ：攻击总包量协议类型分布排行 ；</li>
<li>ddos_attackNum_attackType ：攻击总次数攻击类型分布排行 ；</li>
<li>ddos_attackNum_sregion ：攻击总次数攻击源地区分布排行 ；</li>
<li>ddos_attackFlux_sip ：攻击总流量攻击源ip分布排行 ；</li>
<li>ddos_attackFlux_sregion ：攻击总流量攻击源地区分布排行 。</li>
      */
  MetricName: string

  /**
   * 查询前多少个，传值为0返回全量。
   */
  Limit: number

  /**
   * 站点id集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * ddos策略组id 集合，不填默认选择全部策略id。
   */
  PolicyIds?: Array<number>

  /**
   * 端口号。
   */
  Port?: number

  /**
      * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
      */
  ProtocolType?: string

  /**
      * 攻击类型，取值有：
<li>flood ；</li>
<li>icmpFlood ；</li>
<li>all 。</li>
      */
  AttackType?: string

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
}

/**
 * 例外规则的配置，包含生效的条件，生效的范围
 */
export interface ExceptUserRule {
  /**
      * 规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleID?: number

  /**
      * 规则名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleName?: string

  /**
      * 规则的处置方式。
1. skip 跳过
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string

  /**
      * 规则生效状态。
1. on 生效
2. off 失效
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleStatus?: string

  /**
      * 更新时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
      * 匹配条件。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Conditions?: Array<ExceptUserRuleCondition>

  /**
      * 规则生效的范围。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Scope?: ExceptUserRuleScope

  /**
      * 优先级。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RulePriority?: number
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
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>ddos_attackMaxBandwidth ：攻击带宽峰值 ；</li>
<li>ddos_attackMaxPackageRate：攻击包速率峰值  ；</li>
<li>ddos_attackBandwidth ：攻击带宽曲线 ；</li>
<li>ddos_attackPackageRate ：攻击包速率曲线 。</li>
      */
  MetricNames: Array<string>

  /**
   * 站点id列表，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * ddos策略组id列表，不填默认选择全部策略id。
   */
  PolicyIds?: Array<number>

  /**
   * 端口号。
   */
  Port?: number

  /**
      * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
      */
  ProtocolType?: string

  /**
      * 攻击类型，取值有：
<li>flood ；</li>
<li>icmpFlood ；</li>
<li>all 。</li>
      */
  AttackType?: string

  /**
      * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
      */
  Interval?: string

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
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
 * 统计曲线数据项
 */
export interface TimingDataItem {
  /**
      * 返回数据对应时间点，采用unix秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  Timestamp: number

  /**
      * 具体数值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: number
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
   * 站点名称。
   */
  ZoneName: string

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
   * 字段已经废弃。
   */
  SessionPersist: boolean

  /**
   * 字段已经废弃。
   */
  ForwardClientIp: string

  /**
   * 规则详细信息。
   */
  Rule?: Array<ApplicationProxyRule>

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
  Ipv6?: Ipv6Access
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
      * 智能分析标签。
1. evil_bot 恶意
2. suspect_bot 疑似恶意
3. good_bot 好的
4. normal 正常
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label?: string

  /**
      * 触发智能分析标签对应的处置方式。
1. drop 拦截
2. trans 放行
3. monitor 监控
4. alg Javascript挑战
5. captcha 数字验证码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string
}

/**
 * 智能分析规则
 */
export interface IntelligenceRule {
  /**
      * 开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * 规则详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items?: Array<IntelligenceRuleItem>
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

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area?: string
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
   * 代理ID。
   */
  ProxyId?: string

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
   * 字段已经废弃。
   */
  ForwardClientIp: string

  /**
   * 字段已经废弃。
   */
  SessionPersist: boolean

  /**
   * 规则列表。
   */
  Rule: Array<ApplicationProxyRule>

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
   * 调度信息。
   */
  ScheduleValue: Array<string>

  /**
   * 更新时间。
   */
  UpdateTime: string

  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
   * 会话保持时间。
   */
  SessionPersistTime: number

  /**
      * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>
      */
  ProxyType: string

  /**
      * 当ProxyType=hostname时：
表示代理加速唯一标识。
      */
  HostId: string

  /**
   * Ipv6访问配置。
   */
  Ipv6: Ipv6Access

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
默认值：overseas
      */
  Area: string

  /**
      * 封禁状态，取值有：
<li>banned：已封禁;</li>
<li>banning：封禁中；</li>
<li>recover：已解封；</li>
<li>recovering：解封禁中。</li>
      */
  BanStatus: string
}

/**
 * 例外规则，用于配置需要跳过特定场景的规则
 */
export interface ExceptConfig {
  /**
      * 开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * 例外规则详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserRules?: Array<ExceptUserRule>
}

/**
 * DescribeDDoSPolicy返回参数结构体
 */
export interface DescribeDDoSPolicyResponse {
  /**
   * DDoS防护配置
   */
  DdosRule: DdosRule

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
   * 站点ID。
   */
  ZoneId: string

  /**
   * 实例ID。
   */
  ProxyId: string
}

/**
 * 智能客户端过滤
 */
export interface RateLimitIntelligence {
  /**
      * 功能开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * 执行动作 
1. monitor(观察)
2. alg(挑战)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action?: string
}

/**
 * 基础管控规则配置。
 */
export interface IpTableConfig {
  /**
      * 开关。
1. on 开启
2. off 关闭
注意：此字段可能返回 null，表示取不到有效值。
      */
  Switch?: string

  /**
      * 基础管控规则。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rules?: Array<IpTableRule>
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
      * 配置开关。
1. on 开启
2. off 关闭
      */
  Switch: string

  /**
      * Waf(托管规则)模块的拦截页面配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Waf: DropPageDetail

  /**
      * 自定义页面的拦截页面配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Acl: DropPageDetail
}

/**
 * DescribeDDosAttackSourceEvent返回参数结构体
 */
export interface DescribeDDosAttackSourceEventResponse {
  /**
   * DDos攻击源数据。
   */
  Data: DDosAttackSourceEventData

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应信息。
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
      * 查询维度值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Key: string

  /**
      * 查询维度下详细数据。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: Array<SecEntryValue>
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
 * DescribeDDosMajorAttackEvent请求参数结构体
 */
export interface DescribeDDosMajorAttackEventRequest {
  /**
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 分页拉取的最大返回结果数。最大值：1000。
   */
  PageSize: number

  /**
   * 分页拉取的起始页号。最小值：1。
   */
  PageNo: number

  /**
   * ddos 策略组id集合，不填默认选择全部策略id。
   */
  PolicyIds?: Array<number>

  /**
      * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
      */
  ProtocolType?: string

  /**
   * 站点id列表，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
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
 * DescribeSecurityPolicyRegions请求参数结构体
 */
export type DescribeSecurityPolicyRegionsRequest = null

/**
 * 安全数据Entry对应的值
 */
export interface SecEntryValue {
  /**
      * 指标名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Metric: string

  /**
      * 时序数据详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Detail: Array<TimingDataItem>

  /**
      * 最大值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Max: number

  /**
      * 平均值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Avg: number

  /**
      * 数据总和。
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
 * DeleteZone请求参数结构体
 */
export interface DeleteZoneRequest {
  /**
   * 站点 ID
   */
  Id: string
}

/**
 * Bot 规则，下列规则ID可参考接口 DescribeBotManagedRules返回的ID信息
 */
export interface BotManagedRule {
  /**
   * 本规则的ID。
   */
  RuleID: number

  /**
      * 老版本的通用规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ManagedIds: Array<number>

  /**
      * 触发规则后的处置方式。
1. drop 拦截
2. trans 放行
3. monitor 观察
4. alg Javascript挑战
      */
  Action?: string

  /**
      * 封禁的惩罚时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTime?: number

  /**
      * 封禁的惩罚时间单位。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PunishTimeUnit?: string

  /**
      * 放行的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransManagedIds?: Array<number>

  /**
      * JS挑战的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlgManagedIds?: Array<number>

  /**
      * 数字验证码的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CapManagedIds?: Array<number>

  /**
      * 观察的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MonManagedIds?: Array<number>

  /**
      * 拦截的规则ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DropManagedIds?: Array<number>

  /**
      * 自定义返回页面的实例id。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageId?: number

  /**
      * 自定义返回页面的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string

  /**
      * 重定向时候的地址，必须为本用户接入的站点子域名，使用URLENCODE。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RedirectUrl?: string

  /**
      * 重定向时候的返回码。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseCode?: number
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
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 分页拉取的最大返回结果数。最大值：1000。
   */
  PageSize: number

  /**
   * 分页拉取的起始页号。最小值：1。
   */
  PageNo: number

  /**
   * ddos策略组id列表，不填默认选择全部策略Id。
   */
  PolicyIds?: Array<number>

  /**
   * 站点id列表，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
      * 协议类型，取值有：
<li>tcp ；</li>
<li>udp ；</li>
<li>all 。</li>
      */
  ProtocolType?: string

  /**
      * 是否展示详情，取值有：
<li>Y ：展示 ；</li>
<li>N ：不展示 。</li>默认为Y。
      */
  IsShowDetail?: string

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
}

/**
 * 存储客户端请求IP的头部信息配置
 */
export interface ClientIp {
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
   * 站点ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  Zone: string

  /**
      * 缓存过期时间配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cache: CacheConfig

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
      * Https 加速配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Https: Https

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
  ClientIpHeader: ClientIp

  /**
      * 缓存预刷新配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CachePrefresh: CachePrefresh

  /**
      * Ipv6访问配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ipv6: Ipv6Access

  /**
      * 站点加速区域信息，取值有：
<li>mainland：中国境内加速；</li>
<li>overseas：中国境外加速。</li>
      */
  Area: string

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
      * AI规则引擎状态，取值有：
<li> smart_status_close：关闭；</li>
<li> smart_status_open：拦截处置；</li>
<li> smart_status_observe：观察处置。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mode?: string
}

/**
 * 站点查询过滤条件
 */
export interface ZoneFilter {
  /**
      * 过滤字段名，支持的列表如下：
<li> name：站点名；</li>
<li> status：站点状态；</li>
<li> tagKey：标签键；</li>
<li> tagValue: 标签值。</li>
      */
  Name: string

  /**
   * 过滤字段值。
   */
  Values: Array<string>

  /**
   * 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1。默认为false。
   */
  Fuzzy?: boolean
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
 * DescribeRules请求参数结构体
 */
export interface DescribeRulesRequest {
  /**
   * 站点 ID。
   */
  ZoneId: string

  /**
   * 过滤参数，不填默认不过滤。
   */
  Filters?: Array<RuleFilter>
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
      * 缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cache?: CacheConfigCache

  /**
      * 不缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoCache?: CacheConfigNoCache

  /**
      * 遵循源站配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowOrigin?: CacheConfigFollowOrigin
}

/**
 * DescribeDDosAttackEventDetail返回参数结构体
 */
export interface DescribeDDosAttackEventDetailResponse {
  /**
   * DDos攻击事件详情。
   */
  Data: DDosAttackEventDetailData

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应信息。
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
   * 策略id。
   */
  PolicyId: number

  /**
   * 站点id。
   */
  ZoneId: string

  /**
   * DDoS防护配置详情。
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
   * 起始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 分页拉取的最大返回结果数。最大值：1000。
   */
  PageSize: number

  /**
   * 分页拉取的起始页号。最小值：1。
   */
  PageNo: number

  /**
   * 站点集合，不填默认查询所有站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合，不填默认查询所有域名。
   */
  Domains?: Array<string>

  /**
      * 筛选条件。
限速规则日志中取值有：
<li>action ：执行动作（处置方式）；</li>
<li>ruleId ：规则id ；</li>
<li>oriDomain ：被攻击的子域名 ；</li>
<li>attackIp ：攻击ip 。</li>
自定义规则日志中取值有：
<li>action ：执行动作（处置方式）；</li>
<li>ruleId ：规则id ；</li>
<li>oriDomain ：被攻击的子域名 ；</li>
<li>attackIp ：攻击ip ；</li>
<li>eventId ：事件id ；</li>
<li>ua ：用户代理 ；</li>
<li>requestMethod ：请求方法 ；</li>
<li>uri ：统一资源标识符 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 日志类型，取值有：
<li>rate ：限速日志 ；</li>
<li>acl ：自定义规则日志 。</li>不填默认为rate。
      */
  EntityType?: string

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
}

/**
 * 限速拦截日志
 */
export interface CCLogData {
  /**
      * CC拦截日志数据集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
  List: Array<CCLog>

  /**
   * 分页拉取的起始页号。最小值：1。
   */
  PageNo: number

  /**
   * 分页拉取的最大返回结果数。最大值：1000。
   */
  PageSize: number

  /**
   * 总页数。
   */
  Pages: number

  /**
   * 总条数。
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
 * DescribeRulesSetting请求参数结构体
 */
export type DescribeRulesSettingRequest = null

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
   * 黑白名单数组。
   */
  UserAllowBlockIp?: Array<DDoSUserAllowBlockIP>

  /**
      * 开关标识防护是否清空，取值有：
<li>off ：清空黑白名单列表，UserAllowBlockIp无需填写。 ；</li>
<li>on ：配置黑白名单，需填写UserAllowBlockIp参数。</li>默认值为on。
      */
  Switch?: string
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
  Switch?: string

  /**
   * 地域信息，ID参考[DescribeSecurityPolicyRegions](https://tcloud4api.woa.com/document/product/1657/76031?!preview&!document=1)。
   */
  RegionId?: Array<number>
}

/**
 * 规则引擎规则详情
 */
export interface RuleSettingDetail {
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
  Rules: Array<RuleItem>

  /**
   * 规则优先级, 值越大优先级越高，最小为 1。
   */
  RulePriority: number
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
   * DDos查询主攻击事件。
   */
  Data: DDosMajorAttackEventData

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应消息。
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
      * 执行动作，取值有：
<li>drop ：丢弃 ；</li>
<li>transmit ：放行 ；</li>
<li>drop_block ：丢弃并拉黑 ；</li>
<li>forward ：继续防护 。</li>
      */
  Action?: string

  /**
      * 协议，取值有：
<li>tcp ：tcp协议 ；</li>
<li>udp ：udp协议 ；</li>
<li>icmp ：icmp协议 ；</li>
<li>all ：全部协议 。</li>
      */
  Protocol?: string

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
   * 起始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 分页拉取的最大返回结果数。最大值：1000。
   */
  PageSize: number

  /**
   * 分页拉取的起始页号。最小值：1。
   */
  PageNo: number

  /**
   * 站点集合，不填默认查询所有站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合，不填默认查询所有子域名。
   */
  Domains?: Array<string>

  /**
      * 筛选条件，取值有：
<li>action ：执行动作（处置方式）；</li>
<li>sipCountryCode ：ip所在国家 ；</li>
<li>attackIp ：攻击ip ；</li>
<li>ruleId ：规则id ；</li>
<li>eventId ：事件id ；</li>
<li>ua ：用户代理 ；</li>
<li>requestMethod ：请求方法 ；</li>
<li>uri ：统一资源标识符 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
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
   * ddos 策略组id。
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

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area?: string
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
      * DDos攻击数据内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应信息。
   */
  Msg: string

  /**
      * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
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
   * 起始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
   * 分页拉取的最大返回结果数。最大值：1000。
   */
  PageSize: number

  /**
   * 分页拉取的起始页号。最小值：1。
   */
  PageNo: number

  /**
   * 站点集合，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 域名集合，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
      * 筛选条件，取值有：
<li>attackType ：攻击类型 ；</li>
<li>riskLevel ：风险等级 ；</li>
<li>action ：执行动作（处置方式） ；</li>
<li>ruleId ：规则id ；</li>
<li>sipCountryCode ：ip所在国家 ；</li>
<li>attackIp ：攻击ip ；</li>
<li>oriDomain ：被攻击的子域名 ；</li>
<li>eventId ：事件id ；</li>
<li>ua ：用户代理 ；</li>
<li>requestMethod ：请求方法 ；</li>
<li>uri ：统一资源标识符 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
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
   * 开始时间。
   */
  StartTime: string

  /**
   * 结束时间。
   */
  EndTime: string

  /**
      * 统计指标列表，取值有：
<li>waf_requestNum_url ：url请求数排行 ；</li>
<li>waf_requestNum_cip：客户端ip请求数排行 ；</li>
<li>waf_cipRequestNum_region ：客户端区域请求数排行 。</li>
      */
  MetricName: string

  /**
   * 查询前多少个，传值为0返回全量。
   */
  Limit: number

  /**
   * 站点id列表，不填默认选择全部站点。
   */
  ZoneIds?: Array<string>

  /**
   * 该字段已废弃，请勿传。
   */
  PolicyIds?: Array<number>

  /**
   * 该字段已废弃，请勿传。
   */
  Port?: number

  /**
   * 该字段已废弃，请勿传。
   */
  ProtocolType?: string

  /**
   * 该字段已废弃，请勿传。
   */
  AttackType?: string

  /**
   * 域名列表，不填默认选择全部子域名。
   */
  Domains?: Array<string>

  /**
      * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
      */
  Interval?: string

  /**
      * 筛选条件，取值有：
<li>action ：执行动作 。</li>
      */
  QueryCondition?: Array<QueryCondition>

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
}

/**
 * DescribeAvailablePlans返回参数结构体
 */
export interface DescribeAvailablePlansResponse {
  /**
      * 当前账户可购买套餐类型及相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PlanInfoList: Array<PlanInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 实例ID。
   */
  ProxyId: string

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
   * 字段已经废弃。
   */
  ForwardClientIp: string

  /**
   * 字段已经废弃。
   */
  SessionPersist: boolean

  /**
   * 规则列表。
   */
  Rule: Array<ApplicationProxyRule>

  /**
      * 状态，取值有：
<li>online：启用；</li>
<li>offline：停用；</li>
<li>progress：部署中。</li>
      */
  Status: string

  /**
   * 调度信息。
   */
  ScheduleValue: Array<string>

  /**
   * 更新时间。
   */
  UpdateTime: string

  /**
   * 站点ID。
   */
  ZoneId: string

  /**
   * 站点名称。
   */
  ZoneName: string

  /**
   * 会话保持时间。
   */
  SessionPersistTime: number

  /**
      * 四层代理模式，取值有：
<li>hostname：表示子域名模式；</li>
<li>instance：表示实例模式。</li>
      */
  ProxyType: string

  /**
      * 当ProxyType=hostname时：
表示代理加速唯一标识。
      */
  HostId: string

  /**
   * IPv6访问配置。
   */
  Ipv6: Ipv6Access

  /**
      * 加速区域，取值有：
<li>mainland：中国大陆境内;</li>
<li>overseas：全球（不含中国大陆）。</li>
      */
  Area: string

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
   * 客户端IP。
   */
  Ip?: string

  /**
   * 掩码。
   */
  Mask?: number

  /**
      * 类型，取值有：
<li>block ：丢弃 ；</li>
<li>allow ：允许。</li>
      */
  Type?: string

  /**
   * 10位时间戳，例如1199116800。
   */
  UpdateTime?: number

  /**
   * 客户端IP2，设置IP范围时使用，例如 1.1.1.1-1.1.1.2。
   */
  Ip2?: string

  /**
   * 掩码2，设置IP网段范围时使用，例如 1.1.1.0/24-1.1.2.0/24。
   */
  Mask2?: number
}

/**
 * 规则引擎HTTP请求头/响应头类型的动作
 */
export interface RuleRewriteAction {
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
 * 规则引擎常规类型的动作
 */
export interface RuleNormalAction {
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
 * DescribeBotLog返回参数结构体
 */
export interface DescribeBotLogResponse {
  /**
   * Bot攻击数据内容。
   */
  Data: BotLogData

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应信息。
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
      * 数据详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<SecEntry>

  /**
      * 请求响应状态，取值有：
<li>1 ：失败 ；</li>
<li>0 ：成功 。</li>
      */
  Status: number

  /**
   * 请求响应消息。
   */
  Msg: string

  /**
      * 查询时间粒度，取值有：
<li>min ：1分钟 ；</li>
<li>5min ：5分钟 ；</li>
<li>hour ：1小时 ；</li>
<li>day ：1天 。</li>
      */
  Interval: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 参数已经废弃。
   */
  ForwardClientIp: string

  /**
   * 参数已经废弃。
   */
  SessionPersist: boolean

  /**
   * 会话保持时间，不填写保持原有配置。取值范围：30-3600，单位：秒。
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
  Ipv6?: Ipv6Access
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
      * http2回源配置开关，取值有：
<li>on：开启；</li>
<li>off：关闭。</li>
      */
  Switch: string
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
   * 事件id。
   */
  EventId: string

  /**
      * 数据归属地区，取值有：
<li>overseas ：全球（除中国大陆地区）数据 ；</li>
<li>mainland ：中国大陆地区数据 。</li>不填默认查询overseas。
      */
  Area?: string
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
 * 安全Bot配置
 */
export interface BotConfig {
  /**
      * 开关。
1. on 开启
2. off 关闭
      */
  Switch?: string

  /**
   * 通用详细基础规则。
   */
  ManagedRule?: BotManagedRule

  /**
   * ua基础规则。
   */
  UaBotRule?: BotManagedRule

  /**
   * isp基础规则。
   */
  IspBotRule?: BotManagedRule

  /**
   * 用户画像规则。
   */
  PortraitRule?: BotPortraitRule

  /**
      * Bot智能分析。
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

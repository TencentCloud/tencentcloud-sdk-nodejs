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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 站点查询过滤条件
 */
export interface ZoneFilter {
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
 * DescribeIdentification请求参数结构体
 */
export interface DescribeIdentificationRequest {
  /**
   * 站点名称
   */
  Name: string
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
 * 离线日志详细信息
 */
export interface L7OfflineLog {
  /**
      * 日志打包开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogTime: number

  /**
      * 站点名称
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
load_balancing：负载均衡
      */
  OriginType: string

  /**
      * 源站信息：
当OriginType=custom时，表示多个：
IP:端口
域名:端口
当OriginType=origins时，包含一个元素，表示源站组ID
当OriginType=load_balancing时，包含一个元素，表示负载均衡ID
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
   * 四层代理ID
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
 * Quic配置项
 */
export interface Quic {
  /**
   * 是否启动Quic配置
   */
  Switch: string
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
load_balancing：负载均衡
      */
  OriginType: string

  /**
      * 源站信息：
当OriginType=custom时，表示多个：
IP:端口
域名:端口
当OriginType=origins时，包含一个元素，表示源站组ID
当OriginType=load_balancing时，包含一个元素，表示负载均衡ID
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
 * 源站组记录
 */
export interface OriginRecord {
  /**
   * 记录值
   */
  Record: string

  /**
      * 当源站配置类型Type=area时，表示区域
当源站类型Type=area时，为空表示默认区域
      */
  Area: Array<string>

  /**
   * 当源站配置类型Type=weight时，表示权重
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
      * 当ZoneId不为空时，表示当前站点允许创建的实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Quota: number

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
      * 域名是否开启了lb，四层，安全
- lb 负载均衡
- security 安全
- l4 四层
注意：此字段可能返回 null，表示取不到有效值。
      */
  DomainStatus: Array<string>
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
 * DescribeDefaultCertificates请求参数结构体
 */
export interface DescribeDefaultCertificatesRequest {
  /**
   * Zone ID
   */
  ZoneId: string
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
   * 站点集合
   */
  Zones?: Array<string>

  /**
   * 域名集合
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
load_balancing：负载均衡
      */
  OriginType: string

  /**
      * 源站信息：
当OriginType=custom时，表示多个：
IP:端口
域名:端口
当OriginType=origins时，包含一个元素，表示源站组ID
当OriginType=load_balancing时，包含一个元素，表示负载均衡ID
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
   * 四层代理ID
   */
  ProxyId: string

  /**
   * 四层代理名称
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
hostname：子域名
instance：实例
      */
  ProxyType?: string
}

/**
 * ModifyApplicationProxyStatus返回参数结构体
 */
export interface ModifyApplicationProxyStatusResponse {
  /**
   * 四层代理ID
   */
  ProxyId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeApplicationProxyDetail返回参数结构体
 */
export interface DescribeApplicationProxyDetailResponse {
  /**
   * 实例ID
   */
  ProxyId: string

  /**
   * 实例名称
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
hostname：子域名
instance：实例
      */
  ProxyType: string

  /**
   * 七层实例ID
   */
  HostId: string

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
 * ModifyHostsCertificate返回参数结构体
 */
export interface ModifyHostsCertificateResponse {
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
   * 负载均衡ID
   */
  LoadBalancingId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 四层代理名称
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
hostname：子域名
instance：实例
      */
  ProxyType?: string
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
 * 应用代理实例
 */
export interface ApplicationProxy {
  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyId?: string

  /**
   * 实例名称
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
hostname：子域名
instance：实例
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyType: string

  /**
      * 七层实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  HostId: string
}

/**
 * ModifyApplicationProxy返回参数结构体
 */
export interface ModifyApplicationProxyResponse {
  /**
   * 四层代理ID
   */
  ProxyId: string

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
 * DescribeZoneDetails请求参数结构体
 */
export interface DescribeZoneDetailsRequest {
  /**
   * 站点 ID
   */
  Id: string
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
 * ModifyApplicationProxyRuleStatus请求参数结构体
 */
export interface ModifyApplicationProxyRuleStatusRequest {
  /**
   * 站点ID
   */
  ZoneId: string

  /**
   * 四层代理ID
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
 * ModifyDefaultCertificate返回参数结构体
 */
export interface ModifyDefaultCertificateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * IdentifyZone请求参数结构体
 */
export interface IdentifyZoneRequest {
  /**
   * 站点名称
   */
  Name: string
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
   * 配置类型
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
      * 是否为四层代理使用
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationProxyUsed: boolean

  /**
      * 是否为负载均衡使用
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancingUsed: boolean
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

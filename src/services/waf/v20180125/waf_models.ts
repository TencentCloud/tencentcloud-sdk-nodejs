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
 * CreateAccessExport请求参数结构体
 */
export interface CreateAccessExportRequest {
  /**
   * 客户要查询的日志主题ID，每个客户都有对应的一个主题
   */
  TopicId: string

  /**
   * 要查询的日志的起始时间，Unix时间戳，单位ms
   */
  From: number

  /**
   * 要查询的日志的结束时间，Unix时间戳，单位ms
   */
  To: number

  /**
   * 日志导出检索语句
   */
  Query: string

  /**
   * 日志导出数量，最大值100w
   */
  Count: number

  /**
   * 日志导出数据格式。json，csv，默认为json
   */
  Format?: string

  /**
   * 日志导出时间排序。desc，asc，默认为desc
   */
  Order?: string
}

/**
 * DescribeWafAutoDenyRules返回参数结构体
 */
export interface DescribeWafAutoDenyRulesResponse {
  /**
   * 攻击次数阈值
   */
  AttackThreshold: number

  /**
   * 攻击时间阈值
   */
  TimeThreshold: number

  /**
   * 自动封禁时间
   */
  DenyTimeThreshold: number

  /**
   * 自动封禁状态
   */
  DefenseStatus: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIpHitItems返回参数结构体
 */
export interface DescribeIpHitItemsResponse {
  /**
      * 结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: IpHitItemsData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCustomRules接口回包中的复杂类型
 */
export interface DescribeCustomRulesRspRuleListItem {
  /**
   * 动作类型
   */
  ActionType: string

  /**
   * 跳过的策略
   */
  Bypass: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 策略名称
   */
  Name: string

  /**
   * 重定向地址
   */
  Redirect: string

  /**
   * 策略ID
   */
  RuleId: string

  /**
   * 优先级
   */
  SortId: string

  /**
   * 状态
   */
  Status: string

  /**
   * 策略详情
   */
  Strategies: Array<Strategy>
}

/**
 * DescribeUserClbWafRegions返回参数结构体
 */
export interface DescribeUserClbWafRegionsResponse {
  /**
      * 地域（标准的ap-格式）列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 封装参数
 */
export interface IpHitItemsData {
  /**
   * 数组封装
   */
  Res: Array<IpHitItem>

  /**
   * 总数目
   */
  TotalCount: number
}

/**
 * DeleteAttackDownloadRecord返回参数结构体
 */
export interface DeleteAttackDownloadRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowTrend请求参数结构体
 */
export interface DescribeFlowTrendRequest {
  /**
   * 需要获取流量趋势的域名, all表示所有域名
   */
  Domain: string

  /**
   * 起始时间戳，精度秒
   */
  StartTs: number

  /**
   * 结束时间戳，精度秒
   */
  EndTs: number
}

/**
 * DescribeWafAutoDenyStatus请求参数结构体
 */
export type DescribeWafAutoDenyStatusRequest = null

/**
 * 日志KeyValue对数组，用于搜索访问日志
 */
export interface AccessLogItems {
  /**
      * 分析结果返回的KV数据对
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<AccessLogItem>
}

/**
 * AddDomainWhiteRule返回参数结构体
 */
export interface AddDomainWhiteRuleResponse {
  /**
   * 规则id
   */
  Id?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIpAccessControl返回参数结构体
 */
export interface DescribeIpAccessControlResponse {
  /**
      * 输出
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: IpAccessControlData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDomainWhiteRule请求参数结构体
 */
export interface ModifyDomainWhiteRuleRequest {
  /**
   * 需要更改的规则的域名
   */
  Domain: string

  /**
   * 白名单id
   */
  Id: number

  /**
   * 规则的id列表
   */
  Rules: Array<number>

  /**
   * 规则匹配路径
   */
  Url: string

  /**
   * 规则匹配方法
   */
  Function: string

  /**
   * 规则的开关状态
   */
  Status: number
}

/**
 * DescribeAccessIndex接口的出参
 */
export interface AccessRuleTagInfo {
  /**
      * 是否大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
      */
  CaseSensitive: boolean

  /**
      * 标签索引配置中的字段信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyValues: Array<AccessKeyValueInfo>
}

/**
 * DescribeAccessIndex请求参数结构体
 */
export type DescribeAccessIndexRequest = null

/**
 * 域名的详细信息
 */
export type DomainInfo = null

/**
 * 日志KeyValue对
 */
export interface AccessLogItem {
  /**
      * 日记Key
注意：此字段可能返回 null，表示取不到有效值。
      */
  Key: string

  /**
      * 日志Value
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}

/**
 * DescribeCustomRules返回参数结构体
 */
export interface DescribeCustomRulesResponse {
  /**
   * 规则详情
   */
  RuleList: Array<DescribeCustomRulesRspRuleListItem>

  /**
   * 规则条数
   */
  TotalCount: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSession请求参数结构体
 */
export interface DeleteSessionRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * clb-waf 或者 sprta-waf
   */
  Edition?: string
}

/**
 * DescribeWafAutoDenyRules请求参数结构体
 */
export interface DescribeWafAutoDenyRulesRequest {
  /**
   * 域名
   */
  Domain: string
}

/**
 * AddCustomRule返回参数结构体
 */
export interface AddCustomRuleResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success: ResponseCode

  /**
      * 添加成功的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowTrend返回参数结构体
 */
export interface DescribeFlowTrendResponse {
  /**
   * 流量趋势数据
   */
  Data: Array<BotStatPointItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpsertIpAccessControl请求参数结构体
 */
export interface UpsertIpAccessControlRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * ip 参数列表，json数组由ip，source，note，action，valid_ts组成。ip对应配置的ip地址，source固定为custom值，note为注释，action值42为黑名单，40为白名单，valid_ts为有效日期，值为秒级时间戳
   */
  Items: Array<string>

  /**
   * clb-waf或者sparta-waf
   */
  Edition?: string
}

/**
 * DescribeCustomRules接口的翻页参数
 */
export interface DescribeCustomRulesPagingInfo {
  /**
   * 当前页码
   */
  Offset: number

  /**
   * 当前页的最大数据条数
   */
  Limit: number
}

/**
 * DeleteDownloadRecord请求参数结构体
 */
export interface DeleteDownloadRecordRequest {
  /**
   * 记录id
   */
  Flow: string
}

/**
 * 规则白名单
 */
export interface RuleList {
  /**
   * 规则Id
   */
  Id: number

  /**
   * 规则列表的id
   */
  Rules: Array<number>

  /**
   * 请求url
   */
  Url: string

  /**
   * 请求的方法
   */
  Function: string

  /**
   * 时间戳
   */
  Time: string

  /**
   * 开关状态
   */
  Status: number
}

/**
 * DescribeAccessExports请求参数结构体
 */
export interface DescribeAccessExportsRequest {
  /**
   * 客户要查询的日志主题ID，每个客户都有对应的一个主题
   */
  TopicId: string

  /**
   * 分页的偏移量，默认值为0
   */
  Offset?: number

  /**
   * 分页单页限制数目，默认值为20，最大值100
   */
  Limit?: number
}

/**
 * 响应体的返回码
 */
export interface ResponseCode {
  /**
   * 如果成功则返回Success，失败则返回yunapi定义的错误码
   */
  Code: string

  /**
   * 如果成功则返回Success，失败则返回WAF定义的二级错误码
   */
  Message: string
}

/**
 * ModifyAccessPeriod返回参数结构体
 */
export interface ModifyAccessPeriodResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAccessExport返回参数结构体
 */
export interface DeleteAccessExportResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例入参过滤器
 */
export interface FiltersItemNew {
  /**
   * 字段名
   */
  Name: string

  /**
   * 过滤值
   */
  Values: Array<string>

  /**
   * 是否精确查找
   */
  ExactMatch: boolean
}

/**
 * DescribeAutoDenyIP返回参数结构体
 */
export interface DescribeAutoDenyIPResponse {
  /**
   * 查询IP封禁状态返回结果
   */
  Data?: IpHitItemsData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchAccessLog返回参数结构体
 */
export interface SearchAccessLogResponse {
  /**
   * 加载后续内容的Context
   */
  Context: string

  /**
   * 日志查询结果是否全部返回
   */
  ListOver: boolean

  /**
   * 返回的是否为分析结果
   */
  Analysis: boolean

  /**
      * 如果Analysis为True，则返回分析结果的列名，否则为空
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColNames: Array<string>

  /**
      * 日志查询结果；当Analysis为True时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results: Array<AccessLogInfo>

  /**
      * 日志分析结果；当Analysis为False时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
      */
  AnalysisResults: Array<AccessLogItems>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ip黑白名单
 */
export interface IpAccessControlItem {
  /**
   * 动作
   */
  ActionType: number

  /**
   * ip
   */
  Ip: string

  /**
   * 备注
   */
  Note: string

  /**
   * 来源
   */
  Source: string

  /**
      * 更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  TsVersion: number

  /**
   * 有效截止时间戳
   */
  ValidTs: number
}

/**
 * DescribeAutoDenyIP请求参数结构体
 */
export interface DescribeAutoDenyIPRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 查询IP自动封禁状态
   */
  Ip?: string

  /**
   * 计数标识
   */
  Count?: number

  /**
   * 类别
   */
  Category?: string

  /**
   * 有效时间最小时间戳
   */
  VtsMin?: number

  /**
   * 有效时间最大时间戳
   */
  VtsMax?: number

  /**
   * 创建时间最小时间戳
   */
  CtsMin?: number

  /**
   * 创建时间最大时间戳
   */
  CtsMax?: number

  /**
   * 偏移量
   */
  Skip?: number

  /**
   * 限制条数
   */
  Limit?: number

  /**
   * 策略名字
   */
  Name?: string

  /**
   * 排序参数
   */
  Sort?: string
}

/**
 * DescribeIpAccessControl请求参数结构体
 */
export interface DescribeIpAccessControlRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 计数标识
   */
  Count: number

  /**
   * 动作
   */
  ActionType?: number

  /**
   * 有效时间最小时间戳
   */
  VtsMin?: number

  /**
   * 有效时间最大时间戳
   */
  VtsMax?: number

  /**
   * 创建时间最小时间戳
   */
  CtsMin?: number

  /**
   * 创建时间最大时间戳
   */
  CtsMax?: number

  /**
   * 偏移
   */
  OffSet?: number

  /**
   * 限制
   */
  Limit?: number

  /**
   * 来源
   */
  Source?: string

  /**
   * 排序参数
   */
  Sort?: string

  /**
   * ip
   */
  Ip?: string
}

/**
 * AddSpartaProtection请求参数结构体
 */
export interface AddSpartaProtectionRequest {
  /**
   * 需要防御的域名
   */
  Domain: string

  /**
   * 证书类型，0表示没有证书，CertType=1表示自有证书,2 为托管证书
   */
  CertType: number

  /**
   * 表示是否开启了CDN代理，1：有部署CDN，0：未部署CDN
   */
  IsCdn: number

  /**
   * 回源类型，0表示通过IP回源,1 表示通过域名回源
   */
  UpstreamType: number

  /**
   * 是否开启WebSocket支持，1表示开启，0不开启
   */
  IsWebsocket: number

  /**
   * 负载均衡策略，0表示轮徇，1表示IP hash
   */
  LoadBalance: string

  /**
   * CertType=1时，需要填次参数，表示证书内容
   */
  Cert?: string

  /**
   * CertType=1时，需要填次参数，表示证书的私钥
   */
  PrivateKey?: string

  /**
   * CertType=2时，需要填次参数，表示证书的ID
   */
  SSLId?: string

  /**
   * Waf的资源ID
   */
  ResourceId?: string

  /**
   * HTTPS回源协议，填http或者https
   */
  UpstreamScheme?: string

  /**
   * HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段
   */
  HttpsUpstreamPort?: string

  /**
   * 是否开启灰度，0表示不开启灰度
   */
  IsGray?: number

  /**
   * 灰度的地区
   */
  GrayAreas?: Array<string>

  /**
   * UpstreamType=1时，填次字段表示回源域名
   */
  UpstreamDomain?: string

  /**
   * UpstreamType=0时，填次字段表示回源IP
   */
  SrcList?: Array<string>

  /**
   * 是否开启HTTP2,开启HTTP2需要HTTPS支持
   */
  IsHttp2?: number

  /**
   * 表示是否强制跳转到HTTPS，1强制跳转Https，0不强制跳转
   */
  HttpsRewrite?: number

  /**
   * 服务有多端口需要设置此字段
   */
  Ports?: Array<PortItem>

  /**
   * 版本：sparta-waf、clb-waf、cdn-waf
   */
  Edition?: string

  /**
   * 是否开启长连接，仅IP回源时可以用填次参数，域名回源时这个参数无效
   */
  IsKeepAlive?: string

  /**
   * 实例id，上线之后带上此字段
   */
  InstanceID?: string

  /**
   * anycast IP类型开关： 0 普通IP 1 Anycast IP
   */
  Anycast?: number

  /**
   * src权重
   */
  Weights?: Array<number>
}

/**
 * DescribeAccessFastAnalysis请求参数结构体
 */
export interface DescribeAccessFastAnalysisRequest {
  /**
   * 客户要查询的日志主题ID，每个客户都有对应的一个主题
   */
  TopicId: string

  /**
   * 要查询的日志的起始时间，Unix时间戳，单位ms
   */
  From: number

  /**
   * 要查询的日志的结束时间，Unix时间戳，单位ms
   */
  To: number

  /**
   * 查询语句，语句长度最大为4096，由于本接口是分析接口，如果无过滤条件，必须传 * 表示匹配所有，参考CLS的分析统计语句的文档
   */
  Query: string

  /**
   * 需要分析统计的字段名
   */
  FieldName: string
}

/**
 * DeleteIpAccessControl请求参数结构体
 */
export interface DeleteIpAccessControlRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 删除的ip数组
   */
  Items: Array<string>

  /**
   * 删除对应的域名下的所有黑/白IP名额单
   */
  DeleteAll?: boolean
}

/**
 * DeleteDomainWhiteRules返回参数结构体
 */
export interface DeleteDomainWhiteRulesResponse {
  /**
      * 出参
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAttackDownloadTask请求参数结构体
 */
export interface CreateAttackDownloadTaskRequest {
  /**
   * 域名，所有域名填写all
   */
  Domain: string

  /**
   * 查询起始时间
   */
  FromTime: string

  /**
   * 查询结束时间
   */
  ToTime: string

  /**
   * 下载任务名字
   */
  Name: string

  /**
   * 风险等级
   */
  RiskLevel?: number

  /**
   * 拦截状态
   */
  Status?: number

  /**
   * 自定义策略ID
   */
  RuleId?: number

  /**
   * 攻击者IP
   */
  AttackIp?: string

  /**
   * 攻击类型
   */
  AttackType?: string
}

/**
 * DescribeWafAutoDenyStatus返回参数结构体
 */
export interface DescribeWafAutoDenyStatusResponse {
  /**
   * WAF 自动封禁详情
   */
  WafAutoDenyDetails?: AutoDenyDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDomainWhiteRules请求参数结构体
 */
export interface DeleteDomainWhiteRulesRequest {
  /**
   * 需要删除的规则域名
   */
  Domain: string

  /**
   * 需要删除的白名单规则
   */
  Ids: Array<number>
}

/**
 * ModifyCustomRuleStatus返回参数结构体
 */
export interface ModifyCustomRuleStatusResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success: ResponseCode

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddSpartaProtection返回参数结构体
 */
export interface AddSpartaProtectionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据封装
 */
export interface IpAccessControlData {
  /**
      * ip黑白名单
注意：此字段可能返回 null，表示取不到有效值。
      */
  Res: Array<IpAccessControlItem>

  /**
   * 计数
   */
  TotalCount: number
}

/**
 * 防护域名端口配置信息
 */
export interface PortItem {
  /**
   * 监听端口配置
   */
  Port: string

  /**
   * 与Port一一对应，表示端口对应的协议
   */
  Protocol: string

  /**
   * 与Port一一对应,  表示回源端口
   */
  UpstreamPort: string

  /**
   * 与Port一一对应,  表示回源协议
   */
  UpstreamProtocol: string

  /**
   * Nginx的服务器ID
   */
  NginxServerId: string
}

/**
 * CreateAttackDownloadTask返回参数结构体
 */
export interface CreateAttackDownloadTaskResponse {
  /**
   * 任务ID
   */
  Flow: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Waf 威胁情报封禁模块配置详情
 */
export interface WafThreatenIntelligenceDetails {
  /**
   * 封禁模组启用状态
   */
  DefenseStatus: number

  /**
      * 封禁属性标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags?: Array<string>

  /**
   * 最后更新时间
   */
  LastUpdateTime?: string
}

/**
 * DescribeDomainWhiteRules请求参数结构体
 */
export interface DescribeDomainWhiteRulesRequest {
  /**
   * 需要查询的域名
   */
  Domain: string

  /**
   * 请求的白名单匹配路径
   */
  Url?: string

  /**
   * 翻到多少页
   */
  Page?: number

  /**
   * 每页展示的条数
   */
  Count?: number

  /**
   * 排序方式
   */
  Sort?: string

  /**
   * 规则ID
   */
  RuleId?: string
}

/**
 * ModifyCustomRuleStatus请求参数结构体
 */
export interface ModifyCustomRuleStatusRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 规则ID
   */
  RuleId: number

  /**
   * 开关的状态，1是开启、0是关闭
   */
  Status: number

  /**
   * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
   */
  Edition?: string
}

/**
 * DeleteDownloadRecord返回参数结构体
 */
export interface DeleteDownloadRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccessPeriod请求参数结构体
 */
export interface ModifyAccessPeriodRequest {
  /**
   * 访问日志保存期限，范围为[1, 30]
   */
  Period: number

  /**
   * 日志主题
   */
  TopicId: string
}

/**
 * ModifyWafAutoDenyRules返回参数结构体
 */
export interface ModifyWafAutoDenyRulesResponse {
  /**
   * 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码）
   */
  Success: ResponseCode

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于DescribeAccessIndex接口的出参
 */
export interface AccessValueInfo {
  /**
      * 字段类型，目前支持的类型有：long、text、double
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 字段的分词符，只有当字段类型为text时才有意义；输入字符串中的每个字符代表一个分词符
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tokenizer: string

  /**
      * 字段是否开启分析功能
注意：此字段可能返回 null，表示取不到有效值。
      */
  SqlFlag: boolean

  /**
      * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContainZH: boolean
}

/**
 * DeleteIpAccessControl返回参数结构体
 */
export interface DeleteIpAccessControlResponse {
  /**
      * 删除失败的条目
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedItems: string

  /**
      * 删除失败的条目数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchAccessLog请求参数结构体
 */
export interface SearchAccessLogRequest {
  /**
   * 客户要查询的日志主题ID，每个客户都有对应的一个主题
   */
  TopicId: string

  /**
   * 要查询的日志的起始时间，Unix时间戳，单位ms
   */
  From: number

  /**
   * 要查询的日志的结束时间，Unix时间戳，单位ms
   */
  To: number

  /**
   * 查询语句，语句长度最大为4096
   */
  Query: string

  /**
   * 单次查询返回的日志条数，最大值为100
   */
  Limit?: number

  /**
   * 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容
   */
  Context?: string

  /**
   * 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
   */
  Sort?: string
}

/**
 * 用于 DescribeAccessIndex 的出参
 */
export interface AccessKeyValueInfo {
  /**
      * 需要配置键值或者元字段索引的字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  Key: string

  /**
      * 字段的索引描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: AccessValueInfo
}

/**
 * AddCustomRule请求参数结构体
 */
export interface AddCustomRuleRequest {
  /**
   * 规则名称
   */
  Name: string

  /**
   * 优先级
   */
  SortId: string

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 策略详情
   */
  Strategies: Array<Strategy>

  /**
   * 需要添加策略的域名
   */
  Domain: string

  /**
   * 动作类型
   */
  ActionType: string

  /**
   * 如果动作是重定向，则表示重定向的地址；其他情况可以为空
   */
  Redirect?: string

  /**
   * "clb-waf"或者"sparta-waf"
   */
  Edition?: string

  /**
   * 放行的详情
   */
  Bypass?: string
}

/**
 * DescribeCustomRules请求参数结构体
 */
export interface DescribeCustomRulesRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 分页参数
   */
  Paging: DescribeCustomRulesPagingInfo

  /**
   * clb-waf或者sparta-waf
   */
  Edition?: string

  /**
   * 过滤参数：动作类型：0放行，1阻断，2人机识别，3观察，4重定向
   */
  ActionType?: string

  /**
   * 过滤参数：规则名称过滤条件
   */
  Search?: string
}

/**
 * ModifyDomainWhiteRule返回参数结构体
 */
export interface ModifyDomainWhiteRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessExports接口
 */
export interface ExportAccessInfo {
  /**
      * 日志导出任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExportId: string

  /**
      * 日志导出查询语句
注意：此字段可能返回 null，表示取不到有效值。
      */
  Query: string

  /**
      * 日志导出文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileName: string

  /**
   * 日志文件大小
   */
  FileSize: number

  /**
      * 日志导出时间排序
注意：此字段可能返回 null，表示取不到有效值。
      */
  Order: string

  /**
      * 日志导出格式
注意：此字段可能返回 null，表示取不到有效值。
      */
  Format: string

  /**
      * 日志导出数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count: number

  /**
   * 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）
   */
  Status: string

  /**
   * 日志导出起始时间
   */
  From: number

  /**
   * 日志导出结束时间
   */
  To: number

  /**
   * 日志导出路径
   */
  CosPath: string

  /**
   * 日志导出创建时间
   */
  CreateTime: string
}

/**
 * ModifyWafAutoDenyRules请求参数结构体
 */
export interface ModifyWafAutoDenyRulesRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 攻击次数阈值
   */
  AttackThreshold: number

  /**
   * 攻击时间阈值
   */
  TimeThreshold: number

  /**
   * 自动封禁时间
   */
  DenyTimeThreshold: number

  /**
   * 自动封禁状态
   */
  DefenseStatus: number
}

/**
 * DescribeAccessFastAnalysis返回参数结构体
 */
export interface DescribeAccessFastAnalysisResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomains返回参数结构体
 */
export interface DescribeDomainsResponse {
  /**
   * 总数
   */
  Total: number

  /**
      * domain列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Domains: Array<DomainInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Waf 攻击自动封禁详情
 */
export interface AutoDenyDetail {
  /**
   * 攻击封禁类型标签
   */
  AttackTags: Array<string>

  /**
   * 攻击次数阈值
   */
  AttackThreshold: number

  /**
   * 自动封禁状态
   */
  DefenseStatus: number

  /**
   * 攻击时间阈值
   */
  TimeThreshold: number

  /**
   * 自动封禁时间
   */
  DenyTimeThreshold: number

  /**
   * 最后更新时间
   */
  LastUpdateTime?: string
}

/**
 * ModifyWafAutoDenyStatus请求参数结构体
 */
export interface ModifyWafAutoDenyStatusRequest {
  /**
   * WAF 自动封禁配置项
   */
  WafAutoDenyDetails: AutoDenyDetail
}

/**
 * ModifyWafThreatenIntelligence请求参数结构体
 */
export interface ModifyWafThreatenIntelligenceRequest {
  /**
   * 配置WAF威胁情报封禁模块详情
   */
  WafThreatenIntelligenceDetails: WafThreatenIntelligenceDetails
}

/**
 * 自定义规则的匹配条件结构体
 */
export interface Strategy {
  /**
   * 匹配字段
   */
  Field: string

  /**
   * 逻辑符号
   */
  CompareFunc: string

  /**
   * 匹配内容
   */
  Content: string

  /**
   * 匹配参数
   */
  Arg: string
}

/**
 * DescribeAccessIndex
 */
export interface AccessFullTextInfo {
  /**
      * 是否大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
      */
  CaseSensitive: boolean

  /**
      * 全文索引的分词符，字符串中每个字符代表一个分词符
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tokenizer: string

  /**
      * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContainZH: boolean
}

/**
 * DescribeIpHitItems请求参数结构体
 */
export interface DescribeIpHitItemsRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 计数标识
   */
  Count: number

  /**
   * 类别
   */
  Category: string

  /**
   * 有效时间最小时间戳
   */
  VtsMin?: number

  /**
   * 有效时间最大时间戳
   */
  VtsMax?: number

  /**
   * 创建时间最小时间戳
   */
  CtsMin?: number

  /**
   * 创建时间最大时间戳
   */
  CtsMax?: number

  /**
   * 偏移参数
   */
  Skip?: number

  /**
   * 限制数目
   */
  Limit?: number

  /**
   * 策略名称
   */
  Name?: string

  /**
   * 排序参数
   */
  Sort?: string

  /**
   * IP
   */
  Ip?: string
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
  FullText: AccessFullTextInfo

  /**
      * 键值索引配置
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyValue: AccessRuleKeyValueInfo

  /**
      * 元字段索引配置
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag: AccessRuleTagInfo
}

/**
 * DeleteAccessExport请求参数结构体
 */
export interface DeleteAccessExportRequest {
  /**
   * 日志导出ID
   */
  ExportId: string

  /**
   * 日志主题
   */
  TopicId: string
}

/**
 * DescribeUserClbWafRegions请求参数结构体
 */
export type DescribeUserClbWafRegionsRequest = null

/**
 * DescribeDomainWhiteRules返回参数结构体
 */
export interface DescribeDomainWhiteRulesResponse {
  /**
   * 规则列表
   */
  RuleList: Array<RuleList>

  /**
   * 规则的数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAttackDownloadRecord请求参数结构体
 */
export interface DeleteAttackDownloadRecordRequest {
  /**
   * 下载任务记录唯一标记
   */
  Id: number
}

/**
 * DescribeWafThreatenIntelligence返回参数结构体
 */
export interface DescribeWafThreatenIntelligenceResponse {
  /**
   * WAF 威胁情报封禁信息
   */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddDomainWhiteRule请求参数结构体
 */
export interface AddDomainWhiteRuleRequest {
  /**
   * 需要添加的域名
   */
  Domain: string

  /**
   * 需要添加的规则
   */
  Rules: Array<number>

  /**
   * 需要添加的规则url
   */
  Url: string

  /**
   * 规则的方法
   */
  Function: string

  /**
   * 规则的开关
   */
  Status: number
}

/**
 * UpsertIpAccessControl返回参数结构体
 */
export interface UpsertIpAccessControlResponse {
  /**
      * 添加或修改失败的条目
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedItems: string

  /**
      * 添加或修改失败的数目
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ip封堵状态数据
 */
export interface IpHitItem {
  /**
   * 动作
   */
  Action: number

  /**
   * 类别
   */
  Category: string

  /**
   * ip
   */
  Ip: string

  /**
   * 规则名称
   */
  Name: string

  /**
   * 时间戳
   */
  TsVersion: number

  /**
   * 有效截止时间戳
   */
  ValidTs: number
}

/**
 * DeleteSession返回参数结构体
 */
export interface DeleteSessionResponse {
  /**
      * 结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWafAutoDenyStatus返回参数结构体
 */
export interface ModifyWafAutoDenyStatusResponse {
  /**
   * WAF 自动封禁配置项
   */
  WafAutoDenyDetails?: AutoDenyDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWafThreatenIntelligence请求参数结构体
 */
export type DescribeWafThreatenIntelligenceRequest = null

/**
 * DescribeAccessIndex返回参数结构体
 */
export interface DescribeAccessIndexResponse {
  /**
   * 是否生效
   */
  Status: boolean

  /**
      * 索引配置信息
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rule: AccessRuleInfo

  /**
   * 索引修改时间，初始值为索引创建时间。
   */
  ModifyTime: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccessExports返回参数结构体
 */
export interface DescribeAccessExportsResponse {
  /**
   * 日志导出ID。
   */
  TotalCount: number

  /**
      * 日志导出列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Exports: Array<ExportAccessInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccessExport返回参数结构体
 */
export interface CreateAccessExportResponse {
  /**
   * 日志导出ID。
   */
  ExportId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * bot的趋势图对象
 */
export interface BotStatPointItem {
  /**
   * 横坐标
   */
  TimeStamp: string

  /**
   * value的所属对象
   */
  Key: string

  /**
   * 纵列表
   */
  Value: number

  /**
   * Key对应的页面展示内容
   */
  Label: string
}

/**
 * 单条日志数据描述
 */
export interface AccessLogInfo {
  /**
      * 日志时间，单位ms
注意：此字段可能返回 null，表示取不到有效值。
      */
  Time: number

  /**
      * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicId: string

  /**
      * 日志主题名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TopicName: string

  /**
      * 日志来源IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  Source: string

  /**
      * 日志文件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileName: string

  /**
      * 日志上报请求包的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  PkgId: string

  /**
      * 请求包内日志的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  PkgLogId: string

  /**
      * 日志内容的Json序列化字符串
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogJson: string
}

/**
 * DescribeAccessIndex接口的出参
 */
export interface AccessRuleKeyValueInfo {
  /**
      * 是否大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
      */
  CaseSensitive: boolean

  /**
      * 需要建立索引的键值对信息；最大只能配置100个键值对
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyValues: Array<AccessKeyValueInfo>
}

/**
 * DescribeDomains请求参数结构体
 */
export interface DescribeDomainsRequest {
  /**
   * 偏移
   */
  Offset: number

  /**
   * 容量
   */
  Limit: number

  /**
   * 过滤数组
   */
  Filters?: Array<FiltersItemNew>
}

/**
 * ModifyWafThreatenIntelligence返回参数结构体
 */
export interface ModifyWafThreatenIntelligenceResponse {
  /**
   * 当前WAF威胁情报封禁模块详情
   */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

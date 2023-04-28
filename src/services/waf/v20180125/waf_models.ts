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
 * CDC场景下负载均衡WAF的集群信息
 */
export interface CdcCluster {
  /**
   * cdc的集群id
   */
  Id: string

  /**
      * cdc的集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string
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

  /**
      * 事件id
注意：此字段可能返回 null，表示取不到有效值。
      */
  EventId: string
}

/**
 * waf模块的规格
 */
export interface WafRuleLimit {
  /**
   * 自定义CC的规格
   */
  CC: number

  /**
   * 自定义策略的规格
   */
  CustomRule: number

  /**
   * 黑白名单的规格
   */
  IPControl: number

  /**
   * 信息防泄漏的规格
   */
  AntiLeak: number

  /**
   * 防篡改的规格
   */
  AntiTamper: number

  /**
   * 紧急CC的规格
   */
  AutoCC: number

  /**
   * 地域封禁的规格
   */
  AreaBan: number

  /**
   * 自定义CC中配置session
   */
  CCSession: number

  /**
   * AI的规格
   */
  AI: number

  /**
   * 精准白名单的规格
   */
  CustomWhite: number

  /**
   * api安全的规格
   */
  ApiSecurity: number

  /**
   * 客户端流量标记的规格
   */
  ClientMsg: number

  /**
   * 流量标记的规格
   */
  TrafficMarking: number
}

/**
 * DescribeUserCdcClbWafRegions请求参数结构体
 */
export type DescribeUserCdcClbWafRegionsRequest = null

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
 * AddCustomWhiteRule返回参数结构体
 */
export interface AddCustomWhiteRuleResponse {
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
 * DescribeCustomWhiteRule返回参数结构体
 */
export interface DescribeCustomWhiteRuleResponse {
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
 * DescribePeakValue返回参数结构体
 */
export interface DescribePeakValueResponse {
  /**
   * QPS峰值
   */
  Access: number

  /**
   * 上行带宽峰值，单位B
   */
  Up: number

  /**
   * 下行带宽峰值，单位B
   */
  Down: number

  /**
   * Web攻击总数
   */
  Attack: number

  /**
   * CC攻击总数
   */
  Cc: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 负载均衡算法
 */
export interface LoadBalancerPackageNew {
  /**
      * 监听id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerId: string

  /**
      * 监听名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerName: string

  /**
      * 负载均衡id
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerId: string

  /**
      * 负载均衡名
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerName: string

  /**
      * 协议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Protocol: string

  /**
      * 地区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * 接入IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vip: string

  /**
      * 接入端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vport: number

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string

  /**
      * VPCID
注意：此字段可能返回 null，表示取不到有效值。
      */
  NumericalVpcId: number

  /**
      * CLB类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerType: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 总数
   */
  Total?: number

  /**
   * instance列表
   */
  Instances?: Array<InstanceInfo>

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
 * Vip信息
 */
export interface VipInfo {
  /**
      * Virtual IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vip?: string

  /**
      * waf实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId?: string
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
 * DescribePeakPoints请求参数结构体
 */
export interface DescribePeakPointsRequest {
  /**
   * 查询起始时间
   */
  FromTime: string

  /**
   * 查询终止时间
   */
  ToTime: string

  /**
   * 查询的域名，如果查询所有域名数据，该参数不填写
   */
  Domain?: string

  /**
   * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
   */
  Edition?: string

  /**
   * WAF实例ID，不传则不过滤
   */
  InstanceID?: string

  /**
      * 十三个值可选：
access-峰值qps趋势图
botAccess- bot峰值qps趋势图
down-下行峰值带宽趋势图
up-上行峰值带宽趋势图
attack-Web攻击总数趋势图
cc-CC攻击总数趋势图
StatusServerError-WAF返回给客户端状态码次数趋势图
StatusClientError-WAF返回给客户端状态码次数趋势图
StatusRedirect-WAF返回给客户端状态码次数趋势图
StatusOk-WAF返回给客户端状态码次数趋势图
UpstreamServerError-源站返回给WAF状态码次数趋势图
UpstreamClientError-源站返回给WAF状态码次数趋势图
UpstreamRedirect-源站返回给WAF状态码次数趋势图
      */
  MetricName?: string
}

/**
 * DescribeAccessIndex请求参数结构体
 */
export type DescribeAccessIndexRequest = null

/**
 * 域名的详细信息
 */
export interface DomainInfo {
  /**
   * 域名
   */
  Domain: string

  /**
   * 域名ID
   */
  DomainId: string

  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * cname地址
   */
  Cname: string

  /**
   * 实例类型
   */
  Edition: string

  /**
   * 地域
   */
  Region: string

  /**
   * 实例名
   */
  InstanceName: string

  /**
   * 日志包
   */
  ClsStatus: number

  /**
   * clb模式
   */
  FlowMode: number

  /**
   * waf开关
   */
  Status: number

  /**
   * 防御模式
   */
  Mode: number

  /**
   * AI防御模式
   */
  Engine: number

  /**
   * CC列表
   */
  CCList: Array<string>

  /**
   * 回源ip
   */
  RsList: Array<string>

  /**
   * 服务端口配置
   */
  Ports: Array<PortInfo>

  /**
   * 负载均衡器
   */
  LoadBalancerSet: Array<LoadBalancerPackageNew>

  /**
   * 用户id
   */
  AppId: number

  /**
   * clb状态
   */
  State: number

  /**
   * 创建时间
   */
  CreateTime?: string

  /**
   * 0关闭 1开启
   */
  Ipv6Status?: number

  /**
   * 0关闭 1开启
   */
  BotStatus?: number

  /**
   * 版本信息
   */
  Level?: number

  /**
   * 是否开启投递CLS功能
   */
  PostCLSStatus?: number

  /**
   * 是否开启投递CKafka功能
   */
  PostCKafkaStatus?: number

  /**
      * 应用型负载均衡类型: clb或者apisix，默认clb
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlbType?: string
}

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
 * SearchAttackLog请求参数结构体
 */
export interface SearchAttackLogRequest {
  /**
   * 查询的域名，所有域名使用all
   */
  Domain: string

  /**
   * 查询起始时间
   */
  StartTime: string

  /**
   * 查询结束时间
   */
  EndTime: string

  /**
   * 查询的游标。第一次请求使用空字符串即可，后续请求使用上一次请求返回的最后一条记录的context的值即可。
   */
  Context: string

  /**
   * Lucene语法
   */
  QueryString: string

  /**
   * 查询的数量，默认10条，最多100条
   */
  Count?: number

  /**
   * 默认为desc，可以取值desc和asc
   */
  Sort?: string
}

/**
 * DeleteCustomWhiteRule返回参数结构体
 */
export interface DeleteCustomWhiteRuleResponse {
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
 * AddCustomRule返回参数结构体
 */
export interface AddCustomRuleResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode

  /**
      * 添加成功的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId?: number

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
 * GetAttackDownloadRecords请求参数结构体
 */
export type GetAttackDownloadRecordsRequest = null

/**
 * UpsertIpAccessControl请求参数结构体
 */
export interface UpsertIpAccessControlRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * ip 参数列表，json数组由ip，source，note，action，valid_ts组成。ip对应配置的ip地址，source固定为custom值，note为注释，action值42为黑名单，40为白名单，valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00））
   */
  Items: Array<string>

  /**
   * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
   */
  Edition?: string

  /**
   * 是否为多域名黑白名单，当为多域名的黑白名单时，取值为batch，否则为空
   */
  SourceType?: string
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
 * DescribeUserCdcClbWafRegions返回参数结构体
 */
export interface DescribeUserCdcClbWafRegionsResponse {
  /**
      * CdcRegion的类型描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<CdcRegion>

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
 * DescribeCustomWhiteRule请求参数结构体
 */
export interface DescribeCustomWhiteRuleRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 偏移
   */
  Offset: number

  /**
   * 容量
   */
  Limit: number

  /**
   * 过滤数组,name可以是如下的值： RuleID,RuleName,Match
   */
  Filters?: Array<FiltersItemNew>

  /**
   * asc或者desc
   */
  Order?: string

  /**
   * exp_ts或者mod_ts
   */
  By?: string
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
 * ModifyCustomWhiteRule请求参数结构体
 */
export interface ModifyCustomWhiteRuleRequest {
  /**
   * 编辑的域名
   */
  Domain: string

  /**
   * 编辑的规则ID
   */
  RuleId: number

  /**
   * 编辑的规则名称
   */
  RuleName: string

  /**
   * 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果多个勾选那么以,串接。
   */
  Bypass: string

  /**
   * 优先级，1~100的整数，数字越小，代表这条规则的执行优先级越高。
   */
  SortId: number

  /**
   * 规则生效截止时间，0：永久生效，其它值为对应时间的时间戳。
   */
  ExpireTime: number

  /**
   * 匹配条件数组
   */
  Strategies: Array<Strategy>
}

/**
 * DeleteCustomWhiteRule请求参数结构体
 */
export interface DeleteCustomWhiteRuleRequest {
  /**
   * 删除的域名
   */
  Domain: string

  /**
   * 删除的规则ID
   */
  RuleId: number
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
 * ModifyAccessPeriod返回参数结构体
 */
export interface ModifyAccessPeriodResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVipInfo请求参数结构体
 */
export interface DescribeVipInfoRequest {
  /**
   * waf实例id列表
   */
  InstanceIds: Array<string>
}

/**
 * 过滤数组
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
 * SwitchDomainRules返回参数结构体
 */
export interface SwitchDomainRulesResponse {
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
  Context?: string

  /**
   * 日志查询结果是否全部返回，其中，“true”表示结果返回，“false”表示结果为返回
   */
  ListOver?: boolean

  /**
   * 返回的是否为分析结果，其中，“true”表示返回分析结果，“false”表示未返回分析结果
   */
  Analysis?: boolean

  /**
      * 如果Analysis为True，则返回分析结果的列名，否则为空
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColNames?: Array<string>

  /**
      * 日志查询结果；当Analysis为True时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results?: Array<AccessLogInfo>

  /**
      * 日志分析结果；当Analysis为False时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
      */
  AnalysisResults?: Array<AccessLogItems>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHost返回参数结构体
 */
export interface CreateHostResponse {
  /**
   * 新增防护域名ID
   */
  DomainId: string

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
 * SwitchDomainRules请求参数结构体
 */
export interface SwitchDomainRulesRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 规则列表
   */
  Ids: Array<number>

  /**
   * 开关状态
   */
  Status: number

  /**
   * 设置为观察模式原因
   */
  Reason?: number
}

/**
 * saas域名详情
 */
export interface DomainsPartInfo {
  /**
   * 是否开启httpRewrite
   */
  HttpsRewrite: number

  /**
   * https回源端口
   */
  HttpsUpstreamPort: string

  /**
   * 是否是cdn
   */
  IsCdn: number

  /**
   * 是否开启gray
   */
  IsGray: number

  /**
   * 是否是http2
   */
  IsHttp2: number

  /**
   * 是否开启websocket
   */
  IsWebsocket: number

  /**
   * 负载均衡
   */
  LoadBalance: number

  /**
   * 防御模式
   */
  Mode: number

  /**
   * 私钥
   */
  PrivateKey: string

  /**
   * ssl id
   */
  SSLId: string

  /**
   * 回源域名
   */
  UpstreamDomain: string

  /**
   * 回源类型
   */
  UpstreamType: number

  /**
   * 回源ip
   */
  SrcList: Array<string>

  /**
   * 服务端口配置
   */
  Ports: Array<PortInfo>

  /**
   * 证书类型
   */
  CertType: number

  /**
   * 回源方式
   */
  UpstreamScheme: string

  /**
   * 日志包
   */
  Cls: number

  /**
   * 一级cname
   */
  Cname: string

  /**
   * 是否长连接
   */
  IsKeepAlive: number

  /**
      * 是否开启主动健康检测，1表示开启，0表示不开启
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActiveCheck: number

  /**
      * TLS版本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TLSVersion: number

  /**
      * 加密套件信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ciphers: Array<number>

  /**
      * 模版
注意：此字段可能返回 null，表示取不到有效值。
      */
  CipherTemplate: number

  /**
      * 300s
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyReadTimeout: number

  /**
      * 300s
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxySendTimeout: number

  /**
      * 0:关闭SNI；1:开启SNI，SNI=源请求host；2:开启SNI，SNI=修改为源站host；3：开启SNI，自定义host，SNI=SniHost；
注意：此字段可能返回 null，表示取不到有效值。
      */
  SniType: number

  /**
      * SniType=3时，需要填此参数，表示自定义的host；
注意：此字段可能返回 null，表示取不到有效值。
      */
  SniHost: string

  /**
      * 无
注意：此字段可能返回 null，表示取不到有效值。
      */
  Weights?: Array<string>

  /**
      * IsCdn=3时，表示自定义header
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpHeaders: Array<string>
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
   * 动作，40表示查询白名单，42表示查询黑名单
   */
  ActionType?: number

  /**
   * 最小有效时间的时间戳
   */
  VtsMin?: number

  /**
   * 最大有效时间的时间戳
   */
  VtsMax?: number

  /**
   * 最小创建时间的时间戳
   */
  CtsMin?: number

  /**
   * 最大创建时间的时间戳
   */
  CtsMax?: number

  /**
   * 分页开始条数
   */
  OffSet?: number

  /**
   * 每页的条数
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
 * clb-waf防护域名
 */
export interface HostRecord {
  /**
   * 域名
   */
  Domain: string

  /**
   * 域名ID
   */
  DomainId: string

  /**
   * 主域名，入参时为空
   */
  MainDomain: string

  /**
   * waf模式，同saas waf保持一致
   */
  Mode: number

  /**
   * waf和LD的绑定，0：没有绑定，1：绑定
   */
  Status: number

  /**
   * 域名状态，0：正常，1：未检测到流量，2：即将过期，3：过期
   */
  State: number

  /**
   * 使用的规则，同saas waf保持一致
   */
  Engine: number

  /**
   * 是否开启代理，0：不开启，1：开启
   */
  IsCdn: number

  /**
   * 绑定的LB列表
   */
  LoadBalancerSet: Array<LoadBalancer>

  /**
   * 域名绑定的LB的地域，以,分割多个地域
   */
  Region: string

  /**
   * 产品分类，取值为：sparta-waf、clb-waf、cdn-waf
   */
  Edition: string

  /**
   * WAF的流量模式，1：清洗模式，0：镜像模式
   */
  FlowMode: number

  /**
   * 是否开启访问日志，1：开启，0：关闭
   */
  ClsStatus: number

  /**
      * 防护等级，可选值100,200,300
注意：此字段可能返回 null，表示取不到有效值。
      */
  Level?: number

  /**
      * 域名需要下发到的cdc集群列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  CdcClusters?: Array<string>

  /**
      * 应用型负载均衡类型: clb或者apisix，默认clb
注意：此字段可能返回 null，表示取不到有效值。
      */
  AlbType?: string

  /**
      * IsCdn=3时，需要填此参数，表示自定义header
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpHeaders?: Array<string>

  /**
      * 规则引擎类型， 1: menshen,   2:tiga
注意：此字段可能返回 null，表示取不到有效值。
      */
  EngineType?: number
}

/**
 * CreateHost请求参数结构体
 */
export interface CreateHostRequest {
  /**
   * 防护域名配置信息
   */
  Host: HostRecord

  /**
   * 实例id
   */
  InstanceID?: string
}

/**
 * ModifyAreaBanStatus请求参数结构体
 */
export interface ModifyAreaBanStatusRequest {
  /**
   * 修要修改的域名
   */
  Domain: string

  /**
   * 状态值，0表示关闭，1表示开启
   */
  Status: number
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
   * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF，cdn-waf表示CDN上的Web防护能力
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

  /**
   * 是否开启主动健康检测，1表示开启，0表示不开启
   */
  ActiveCheck?: number

  /**
   * TLS版本信息
   */
  TLSVersion?: number

  /**
   * 加密套件信息
   */
  Ciphers?: Array<number>

  /**
   * 0:不支持选择：默认模版  1:通用型模版 2:安全型模版 3:自定义模版
   */
  CipherTemplate?: number

  /**
   * 300s
   */
  ProxyReadTimeout?: number

  /**
   * 300s
   */
  ProxySendTimeout?: number

  /**
   * 0:关闭SNI；1:开启SNI，SNI=源请求host；2:开启SNI，SNI=修改为源站host；3：开启SNI，自定义host，SNI=SniHost；
   */
  SniType?: number

  /**
   * SniType=3时，需要填此参数，表示自定义的host；
   */
  SniHost?: string

  /**
   * is_cdn=3时，需要填此参数，表示自定义header
   */
  IpHeaders?: Array<string>
}

/**
 * PeakPoints数组项
 */
export interface PeakPointsItem {
  /**
   * 秒级别时间戳
   */
  Time: number

  /**
   * QPS
   */
  Access: number

  /**
   * 上行带宽峰值，单位B
   */
  Up: number

  /**
   * 下行带宽峰值，单位B
   */
  Down: number

  /**
   * Web攻击次数
   */
  Attack: number

  /**
   * CC攻击次数
   */
  Cc: number

  /**
   * Bot qps
   */
  BotAccess: number

  /**
      * WAF返回给客户端状态码次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusServerError: number

  /**
      * WAF返回给客户端状态码次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusClientError: number

  /**
      * WAF返回给客户端状态码次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusRedirect: number

  /**
      * WAF返回给客户端状态码次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusOk: number

  /**
      * 源站返回给WAF状态码次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpstreamServerError: number

  /**
      * 源站返回给WAF状态码次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpstreamClientError: number

  /**
      * 源站返回给WAF状态码次数
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpstreamRedirect: number
}

/**
 * PostAttackDownloadTask请求参数结构体
 */
export interface PostAttackDownloadTaskRequest {
  /**
   * 查询的域名，所有域名使用all
   */
  Domain: string

  /**
   * 查询起始时间
   */
  StartTime: string

  /**
   * 查询结束时间
   */
  EndTime: string

  /**
   * Lucene语法
   */
  QueryString: string

  /**
   * 任务名称
   */
  TaskName: string

  /**
   * 默认为desc，可以取值desc和asc
   */
  Sort?: string
}

/**
 * ModifyCustomWhiteRule返回参数结构体
 */
export interface ModifyCustomWhiteRuleResponse {
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
 * DescribePolicyStatus请求参数结构体
 */
export interface DescribePolicyStatusRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * clb-waf或者saas-waf
   */
  Edition: string
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
   * 是否删除对应的域名下的所有黑/白IP名单，true表示全部删除，false表示只删除指定ip名单
   */
  DeleteAll?: boolean

  /**
   * 是否为多域名黑白名单
   */
  SourceType?: string
}

/**
 * 攻击日志详情
 */
export interface AttackLogInfo {
  /**
   * 攻击日志的详情内容
   */
  Content: string

  /**
   * CLS返回内容
   */
  FileName: string

  /**
   * CLS返回内容
   */
  Source: string

  /**
   * CLS返回内容
   */
  TimeStamp: string
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
 * DescribeAttackOverview返回参数结构体
 */
export interface DescribeAttackOverviewResponse {
  /**
   * 访问请求总数
   */
  AccessCount?: number

  /**
   * Web攻击总数
   */
  AttackCount?: number

  /**
   * 访问控制总数
   */
  ACLCount?: number

  /**
   * CC攻击总数
   */
  CCCount?: number

  /**
   * Bot攻击总数
   */
  BotCount?: number

  /**
   * api资产总数
   */
  ApiAssetsCount?: number

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
 * clb-waf 域名扩展套餐
 */
export interface DomainPackageNew {
  /**
   * 资源ID
   */
  ResourceIds: string

  /**
   * 过期时间
   */
  ValidTime: string

  /**
   * 是否自动续费，1：自动续费，0：不自动续费
   */
  RenewFlag: number

  /**
   * 套餐购买个数
   */
  Count: number

  /**
   * 套餐购买地域，clb-waf暂时没有用到
   */
  Region: string
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
 * PostAttackDownloadTask返回参数结构体
 */
export interface PostAttackDownloadTaskResponse {
  /**
   * 任务task id
   */
  Flow?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * clb-waf QPS套餐 New
 */
export interface QPSPackageNew {
  /**
   * 资源ID
   */
  ResourceIds: string

  /**
   * 过期时间
   */
  ValidTime: string

  /**
   * 是否自动续费，1：自动续费，0：不自动续费
   */
  RenewFlag: number

  /**
   * 套餐购买个数
   */
  Count: number

  /**
   * 套餐购买地域，clb-waf暂时没有用到
   */
  Region: string
}

/**
 * DescribeDomainDetailsSaas请求参数结构体
 */
export interface DescribeDomainDetailsSaasRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 域名id
   */
  DomainId: string

  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * ModifyCustomRuleStatus返回参数结构体
 */
export interface ModifyCustomRuleStatusResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success?: ResponseCode

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
 * 当前WAF威胁情报封禁模块详情
 */
export interface WafThreatenIntelligenceDetails {
  /**
      * 封禁属性标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags?: Array<string>

  /**
   * 封禁模组启用状态
   */
  DefenseStatus?: number

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
   * 排序方式,desc表示降序，asc表示升序
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
 * DescribePeakPoints返回参数结构体
 */
export interface DescribePeakPointsResponse {
  /**
   * 数据点
   */
  Points: Array<PeakPointsItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAttackOverview请求参数结构体
 */
export interface DescribeAttackOverviewRequest {
  /**
   * 查询开始时间
   */
  FromTime: string

  /**
   * 查询结束时间
   */
  ToTime: string

  /**
   * 客户的Appid
   */
  Appid?: number

  /**
   * 被查询的域名
   */
  Domain?: string

  /**
   * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
   */
  Edition?: string

  /**
   * WAF实例ID，不传则不过滤
   */
  InstanceID?: string
}

/**
 * DescribePeakValue请求参数结构体
 */
export interface DescribePeakValueRequest {
  /**
   * 查询起始时间
   */
  FromTime: string

  /**
   * 查询结束时间
   */
  ToTime: string

  /**
   * 需要查询的域名，当前用户所有域名可以不传
   */
  Domain?: string

  /**
   * 只有两个值有效，sparta-waf，clb-waf，不传则不过滤
   */
  Edition?: string

  /**
   * WAF实例ID，不传则不过滤
   */
  InstanceID?: string

  /**
      * 五个值可选：
access-峰值qps
down-下行峰值带宽
up-上行峰值带宽
attack-Web攻击总数
cc-CC攻击总数趋势图
      */
  MetricName?: string
}

/**
 * bot的qps详情
 */
export interface BotQPS {
  /**
   * 资源id
   */
  ResourceIds: string

  /**
   * 有效时间
   */
  ValidTime: string

  /**
   * 资源数量
   */
  Count: number

  /**
   * 资源所在地区
   */
  Region: string

  /**
   * 使用qps的最大值
   */
  MaxBotQPS: number

  /**
      * 续费标志
注意：此字段可能返回 null，表示取不到有效值。
      */
  RenewFlag?: number
}

/**
 * ModifyWafAutoDenyRules返回参数结构体
 */
export interface ModifyWafAutoDenyRulesResponse {
  /**
   * 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码）
   */
  Success?: ResponseCode

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchAttackLog返回参数结构体
 */
export interface SearchAttackLogResponse {
  /**
   * 当前返回的攻击日志条数
   */
  Count?: number

  /**
   * 翻页游标，如果没有下一页了，这个参数为空""
   */
  Context?: string

  /**
   * 攻击日志数组条目内容
   */
  Data?: Array<AttackLogInfo>

  /**
   * CLS接口返回内容
   */
  ListOver?: boolean

  /**
   * CLS接口返回内容，标志是否启动新版本索引
   */
  SqlFlag?: boolean

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyStatus返回参数结构体
 */
export interface DescribePolicyStatusResponse {
  /**
   * 实例ID
   */
  InstanceId: string

  /**
   * 防护状态
   */
  Status: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
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
 * CDC场景下负载均衡WAF的地域信息
 */
export interface CdcRegion {
  /**
   * 地域
   */
  Region: string

  /**
      * 该地域对应的集群信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Clusters: Array<CdcCluster>
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
  FailedItems?: string

  /**
      * 删除失败的条目数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 一个实例的详细信息
 */
export interface InstanceInfo {
  /**
   * id
   */
  InstanceId: string

  /**
   * Name
   */
  InstanceName: string

  /**
   * 资源id
   */
  ResourceIds: string

  /**
   * 地域
   */
  Region: string

  /**
   * 付费模式
   */
  PayMode: number

  /**
   * 自动续费
   */
  RenewFlag: number

  /**
   * 弹性计费
   */
  Mode: number

  /**
   * 套餐版本
   */
  Level: number

  /**
   * 过期时间
   */
  ValidTime: string

  /**
   * 开始时间
   */
  BeginTime: string

  /**
   * 已用
   */
  DomainCount: number

  /**
   * 上限
   */
  SubDomainLimit: number

  /**
   * 已用
   */
  MainDomainCount: number

  /**
   * 上限
   */
  MainDomainLimit: number

  /**
   * 峰值
   */
  MaxQPS: number

  /**
   * qps套餐
   */
  QPS: QPSPackageNew

  /**
   * 域名套餐
   */
  DomainPkg: DomainPackageNew

  /**
   * 用户appid
   */
  AppId: number

  /**
   * clb或saas
   */
  Edition: string

  /**
      * 业务安全包
注意：此字段可能返回 null，表示取不到有效值。
      */
  FraudPkg?: FraudPkg

  /**
      * Bot资源包
注意：此字段可能返回 null，表示取不到有效值。
      */
  BotPkg?: BotPkg

  /**
      * bot的qps详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  BotQPS?: BotQPS

  /**
      * qps弹性计费上限
注意：此字段可能返回 null，表示取不到有效值。
      */
  ElasticBilling?: number

  /**
      * 攻击日志投递开关
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttackLogPost?: number

  /**
      * 带宽峰值
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxBandwidth?: number

  /**
   * api安全是否购买
   */
  APISecurity?: number

  /**
      * 购买的qps规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  QpsStandard?: number

  /**
      * 购买的带宽规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  BandwidthStandard?: number

  /**
      * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
      * 实例沙箱值
注意：此字段可能返回 null，表示取不到有效值。
      */
  SandboxQps?: number
}

/**
 * 服务端口配置
 */
export interface PortInfo {
  /**
   * Nginx的服务器id
   */
  NginxServerId: number

  /**
   * 监听端口配置
   */
  Port: string

  /**
   * 与端口对应的协议
   */
  Protocol: string

  /**
   * 回源端口
   */
  UpstreamPort: string

  /**
   * 回源协议
   */
  UpstreamProtocol: string
}

/**
 * DescribeDomainDetailsSaas返回参数结构体
 */
export interface DescribeDomainDetailsSaasResponse {
  /**
   * 域名详情
   */
  DomainsPartInfo?: DomainsPartInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 过期时间，单位为秒级时间戳，例如1677254399表示过期时间为2023-02-24 23:59:59. 0表示永不过期
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
   * 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向
   */
  ActionType: string

  /**
   * 如果动作是重定向，则表示重定向的地址；其他情况可以为空
   */
  Redirect?: string

  /**
   * WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF
   */
  Edition?: string

  /**
   * 放行的详情
   */
  Bypass?: string

  /**
   * 添加规则的来源，默认为空
   */
  EventId?: string
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
 * 业务安全资源信息
 */
export interface FraudPkg {
  /**
      * 资源id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceIds?: string

  /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region?: number

  /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  BeginTime?: string

  /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime?: string

  /**
      * 申请数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  InquireNum?: number

  /**
      * 使用数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  UsedNum?: number

  /**
      * 续费标志
注意：此字段可能返回 null，表示取不到有效值。
      */
  RenewFlag?: number
}

/**
 * ModifyAreaBanStatus返回参数结构体
 */
export interface ModifyAreaBanStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 触发IP封禁的攻击次数阈值，范围为2~100次
   */
  AttackThreshold: number

  /**
   * IP封禁统计时间，范围为1-60分钟
   */
  TimeThreshold: number

  /**
   * 触发IP封禁后的封禁时间，范围为5~360分钟
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
  Total?: number

  /**
      * domain列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Domains?: Array<DomainInfo>

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
 * ModifyWafThreatenIntelligence请求参数结构体
 */
export interface ModifyWafThreatenIntelligenceRequest {
  /**
   * 配置WAF威胁情报封禁模块详情
   */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails
}

/**
 * 自定义规则的匹配条件结构体
 */
export interface Strategy {
  /**
      * 匹配字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  Field: string

  /**
      * 逻辑符号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CompareFunc: string

  /**
      * 匹配内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  Content: string

  /**
      * 匹配参数
注意：此字段可能返回 null，表示取不到有效值。
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
 * DescribeVipInfo返回参数结构体
 */
export interface DescribeVipInfoResponse {
  /**
   * VIP信息
   */
  VipInfo?: Array<VipInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleLimit请求参数结构体
 */
export interface DescribeRuleLimitRequest {
  /**
   * 域名
   */
  Domain: string
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
 * GetAttackDownloadRecords返回参数结构体
 */
export interface GetAttackDownloadRecordsResponse {
  /**
   * 下载攻击日志记录数组
   */
  Records: Array<DownloadAttackRecordInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  RuleList?: Array<RuleList>

  /**
   * 规则的数量
   */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWafThreatenIntelligence返回参数结构体
 */
export interface DescribeWafThreatenIntelligenceResponse {
  /**
   * WAF 威胁情报封禁信息
   */
  WafThreatenIntelligenceDetails: WafThreatenIntelligenceDetails

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
 * AddCustomWhiteRule请求参数结构体
 */
export interface AddCustomWhiteRuleRequest {
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
   * 放行的详情
   */
  Bypass: string
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
  FailedItems?: string

  /**
      * 添加或修改失败的数目
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedCount?: number

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
 * 下载攻击日志记录数据项
 */
export interface DownloadAttackRecordInfo {
  /**
   * 记录ID
   */
  Id: number

  /**
   * 下载任务名
   */
  TaskName: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 域名
   */
  Host: string

  /**
   * 当前下载任务的日志条数
   */
  Count: number

  /**
   * 下载任务运行状态：-1-下载超时，0-下载等待，1-下载完成，2-下载失败，4-正在下载
   */
  Status: number

  /**
   * 下载文件URL
   */
  Url: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 最后更新修改时间
   */
  ModifyTime: string

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 下载任务需下载的日志总条数
   */
  TotalCount: number
}

/**
 * DescribeRuleLimit返回参数结构体
 */
export interface DescribeRuleLimitResponse {
  /**
   * waf模块的规格
   */
  Res: WafRuleLimit

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
   * 是否生效，true表示生效，false表示未生效
   */
  Status?: boolean

  /**
      * 索引配置信息
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rule?: AccessRuleInfo

  /**
   * 索引修改时间，初始值为索引创建时间。
   */
  ModifyTime?: string

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
   * 数据偏移量，从1开始。
   */
  Offset: number

  /**
   * 返回域名的数量
   */
  Limit: number

  /**
   * 过滤数组
   */
  Filters?: Array<FiltersItemNew>
}

/**
 * Bot资源信息
 */
export interface BotPkg {
  /**
      * 资源id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceIds?: string

  /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region?: number

  /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  BeginTime?: string

  /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime?: string

  /**
      * 申请数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  InquireNum?: number

  /**
      * 使用数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  UsedNum?: number

  /**
      * 子产品code
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: string

  /**
      * 续费标志	
注意：此字段可能返回 null，表示取不到有效值。
      */
  RenewFlag?: number
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

/**
 * 负载均衡的监听器
 */
export interface LoadBalancer {
  /**
   * 负载均衡LD的ID
   */
  LoadBalancerId: string

  /**
   * 负载均衡LD的名称
   */
  LoadBalancerName: string

  /**
   * 负载均衡监听器的ID
   */
  ListenerId: string

  /**
   * 负载均衡监听器的名称
   */
  ListenerName: string

  /**
   * 负载均衡实例的IP
   */
  Vip: string

  /**
   * 负载均衡实例的端口
   */
  Vport: number

  /**
   * 负载均衡LD的地域
   */
  Region: string

  /**
   * 监听器协议，http、https
   */
  Protocol: string

  /**
   * 负载均衡监听器所在的zone
   */
  Zone: string

  /**
      * 负载均衡的VPCID，公网为-1，内网按实际填写
注意：此字段可能返回 null，表示取不到有效值。
      */
  NumericalVpcId?: number

  /**
      * 负载均衡的网络类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerType?: string
}

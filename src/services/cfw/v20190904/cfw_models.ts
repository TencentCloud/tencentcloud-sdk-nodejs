/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * ModifyFwGroupSwitch请求参数结构体
 */
export interface ModifyFwGroupSwitchRequest {
  /**
   * <p>打开或关闭开关<br>0：关闭开关<br>1：打开开关</p>
   */
  Enable: number
  /**
   * <p>是否操作全部开关 0 不操作全部开关，1 操作全部开关</p>
   */
  AllSwitch: number
  /**
   * <p>开关列表</p>
   */
  SwitchList?: Array<FwGroupSwitch>
}

/**
 * DescribeCfwStatusMonitor请求参数结构体
 */
export interface DescribeCfwStatusMonitorRequest {
  /**
   * 操作类型。describe_scene 表示发现场景和二级下拉选项；fetch_scene 表示获取具体场景快照。必填。
   */
  Op: string
  /**
   * 防火墙场景类型。支持 internet_edge（互联网边界防火墙）、nat_cluster（NAT边界防火墙-集群）、nat_ha（NAT边界防火墙-主备）、vpc_cluster（VPC边界防火墙-集群）、vpc_ha（VPC边界防火墙-主备）。必填。
   */
  FirewallType: string
  /**
   * 二级下拉选项 ID。fetch_scene 按需传入，值来自 describe_scene 返回的 selection.available_options[].id；internet_edge 为地域，NAT 为实例 ID，VPC 带宽场景为防火墙组 ID；vpc_cluster 的 connections 汇总场景会忽略该参数。
   */
  SelectionId?: string
  /**
   * 二级下拉显示名称。可替代 SelectionId 按名称匹配，值来自 describe_scene 返回的 selection.available_options[].name。
   */
  SelectionName?: string
  /**
   * 引擎实例 ID。主要用于 vpc_ha 下一个防火墙组对应多个实例的场景，优先使用 describe_scene 返回的 selection.available_options[].instance_id；如只有 instance_ids，则从数组中选择一个字符串值。
   */
  SelectionInstanceId?: string
  /**
   * 指标页签。fetch_scene 可传；不传时使用该场景默认值。支持 bandwidth、connections。
   */
  Metric?: string
  /**
   * 指标下的视角。fetch_scene 可传；不传时使用该场景默认值。支持 ip、subnet、session、switch、vpc，实际可用组合以 describe_scene 返回为准。
   */
  Perspective?: string
  /**
   * NAT 主备连接数 IP 视角范围。external 表示外部 IP，asset 表示资产 IP；仅 nat_ha + connections + ip 使用，其他组合传入将返回 InvalidParameter。
   */
  IpScope?: string
  /**
   * 预设时间范围。默认 24h；fetch_scene 使用。支持 5m、15m、30m、1h、6h、24h、3d、7d、30d、today、yesterday、day_before_yesterday、this_week、last_week、this_month。
   */
  TimePreset?: string
  /**
   * 自定义开始时间。格式 YYYY-MM-DD HH:MM:SS；必须与 EndTime 同时传，最大跨度 30 天。
   */
  StartTime?: string
  /**
   * 自定义结束时间。格式 YYYY-MM-DD HH:MM:SS；必须与 StartTime 同时传，最大跨度 30 天。
   */
  EndTime?: string
  /**
   * 页码，从 1 开始。默认 1；fetch_scene 列表视角使用。
   */
  Page?: number
  /**
   * 每页条数。默认 10，取值 1 至 100；fetch_scene 列表视角使用。
   */
  Limit?: number
  /**
   * 是否只获取概览数据。true 时 fetch_scene 只请求 overview，跳过 table/detail，适合只看场景快照汇总。
   */
  OverviewOnly?: boolean
  /**
   * 原始偏移量覆盖。可选，传入后覆盖 Page 计算结果；取值 0 至 10000。
   */
  Offset?: number
  /**
   * 排序字段。可选。互联网边界 IP、NAT IP/子网视角支持 InputMax、OutputMax；VPC switch 视角支持 SwitchName；VPC ip/vpc 视角支持 FlowMax；其他组合不要传。
   */
  SortBy?: string
  /**
   * 排序方向。默认 desc；支持 asc、desc。
   */
  SortOrder?: string
  /**
   * 过滤条件列表。保留字段；当前公开 fetch_scene 场景均不支持，调用方不要传。
   */
  Filters?: Array<CfwStatusMonitorFilter>
}

/**
 * CheckClusterNatFwPreAccess请求参数结构体
 */
export interface CheckClusterNatFwPreAccessRequest {
  /**
   * <p>NAT CCN 开关配置 JSON 字符串，与 OpenClusterNatFwSwitch 的 NatCcnSwitch 完全一致。SwitchMode 必须为 1（自动接入），RoutingMode 必须为 1（策略路由）。</p>
   */
  NatCcnSwitch: NatCcnSwitchConfig
  /**
   * <p>预接入模式</p><p>枚举值：</p><ul><li>open： 开启防火墙前预接入检查</li><li>modify： 编辑修改防火墙开关时预接入检查</li></ul>
   */
  CheckMode: string
}

/**
 * 防火墙部署输入参数列表
 */
export interface FwDeploy {
  /**
   * 防火墙部署地域
   */
  DeployRegion: string
  /**
   * 带宽，单位：Mbps
   */
  Width: number
  /**
   * 异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备
   */
  CrossAZone?: number
  /**
   * 主可用区，为空则选择默认可用区
   */
  Zone?: string
  /**
   * 备可用区，为空则选择默认可用区
   */
  ZoneBak?: string
  /**
   * 若为cdc防火墙时填充该id
   */
  CdcId?: string
}

/**
 * CreateAlertCenterIsolate返回参数结构体
 */
export interface CreateAlertCenterIsolateResponse {
  /**
   * 返回状态码：
0 成功
非0 失败
   */
  ReturnCode?: number
  /**
   * 返回信息：
success 成功
其他
   */
  ReturnMsg?: string
  /**
   * 处置状态码：
0  处置成功
-1 通用错误，不用处理
-3 表示重复，需重新刷新列表
其他
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * NAT集群模式开关信息
 */
export interface NatClusterInfo {
  /**
   * <p>nat网关ID</p>
   */
  NatInsId?: string
  /**
   * <p>nat网关名称</p>
   */
  NatInsName?: string
}

/**
 * DescribeCfwSwitches请求参数结构体
 */
export type DescribeCfwSwitchesRequest = null

/**
 * DescribeNDRAssetIdentificationList返回参数结构体
 */
export interface DescribeNDRAssetIdentificationListResponse {
  /**
   * 符合查询条件的总条数
   */
  Total?: number
  /**
   * 查询结果列表
   */
  Data?: Array<NDRAssetServiceInfo>
  /**
   * 服务类型统计结果
   */
  AssetCategoryStats?: Array<NDRAssetCategoryStats>
  /**
   * 地域可选项
   */
  RegionOptions?: Array<FieldOption>
  /**
   * IP版本可选项
   */
  IpVersionOptions?: Array<FieldOption>
  /**
   * IP类型可选项
   */
  IpTypeOptions?: Array<FieldOption>
  /**
   * 服务类型可选项
   */
  AssetCategoryOptions?: Array<FieldOption>
  /**
   * 识别来源可选项
   */
  IdentificationSourceOptions?: Array<FieldOption>
  /**
   * 协议可选项
   */
  ProtocolOptions?: Array<FieldOption>
  /**
   * 实例类型可选项
   */
  InstanceTypeOptions?: Array<FieldOption>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAclRule请求参数结构体
 */
export interface ModifyAclRuleRequest {
  /**
   * 待修改的规则数组，必须恰好包含一条完整规则，不是局部更新。调用 DescribeCfwRules，传 RuleType=border、目标 RuleUuid、ExpandNames=false 获取原规则。字段转换：uuid→Uuid，sequence→OrderIndex，src_ip→SourceContent，src_type→SourceType，dst_content→TargetContent，dst_type→TargetType，dst_port→Port，detail→Description；action 的 0、1、2 分别转换为 log、drop、accept，enabled 的布尔值转换为字符串 true、false；protocol、direction、scope、param_template_id、rule_source、log_id 分别写入 Protocol、Direction、Scope、ParamTemplateId、RuleSource、LogId。src_type 和 dst_type 的 1、2、3、4/5、6、8、9、10、100、101、102 分别对应 net、url、domain、template、instance、tag、dnsparse、domainiptwoverify、group、location、vendor；仅当转换结果属于对应 SourceType 或 TargetType 的有效取值时才能提交。用户要求改为某地域时，调用 DescribeAclRegInfo：Scope=serial 传 FwType=["SERIAL"]，Scope=side 传 FwType=["BYPASS"]，Scope=all 同时传两项，按用户地域名称匹配 Data[].RegionName，并将对应 Data[].RegionCode 写入 location 类型的 Content；不得使用 ap-guangzhou 等云资源地域、中文地域名称或自行拼接代码。vendor 类型的 Content 仅使用 tencent、aliyun、aws、huawei、azure 或 all，不使用“腾讯云”等展示名称。省略的可写字段不会继承旧值。
   */
  Rules: Array<CreateRuleItem>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
}

/**
 * DescribeCfwAnalysisData返回参数结构体
 */
export interface DescribeCfwAnalysisDataResponse {
  /**
   * 查询结果。Response.Data 是 UTF-8 JSON object 字符串，调用方需要二次 JSON 解析。status 取值为 success、partial 或 error。section 查询失败时，error 只返回固定安全摘要，不包含底层服务内部信息。示例仅展示一个代表性 section；实际返回包含当前场景全部未跳过的 section；summary 包含 total_findings、high_risk_count 和 data_coverage，metadata 包含 scenario、time_range、object 和 query_stats，query_stats 包含 total_queries、successful 和 failed。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAclRule返回参数结构体
 */
export interface DescribeAclRuleResponse {
  /**
   * <p>总条数</p>
   */
  Total?: number
  /**
   * <p>nat访问控制列表数据</p>
   */
  Data?: Array<DescAcItem>
  /**
   * <p>未过滤的总条数</p>
   */
  AllTotal?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwInstanceWithRegion返回参数结构体
 */
export interface DescribeNatFwInstanceWithRegionResponse {
  /**
   * <p>实例数组</p>
   */
  NatinsLst?: Array<NatFwInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFwGroupInstanceInfo请求参数结构体
 */
export interface DescribeFwGroupInstanceInfoRequest {
  /**
   * <p>每页条数</p>
   */
  Limit: number
  /**
   * <p>偏移值</p>
   */
  Offset: number
  /**
   * <p>过滤条件组合</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>检索的起始时间，可不传</p>
   */
  StartTime?: string
  /**
   * <p>检索的截止时间，可不传</p>
   */
  EndTime?: string
  /**
   * <p>desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值</p>
   */
  Order?: string
  /**
   * <p>排序所用到的字段</p>
   */
  By?: string
}

/**
 * DescribeCfwRules请求参数结构体
 */
export interface DescribeCfwRulesRequest {
  /**
   * <p>规则域。必填。枚举：border 互联网边界；nat NAT 边界；vpc VPC 间；enterprise_sg 企业安全组；intrusion_prevention 入侵防御。RuleType=intrusion_prevention 时还必须传 ListType。</p>
   */
  RuleType: string
  /**
   * <p>入侵防御列表类型。仅 RuleType=intrusion_prevention 时使用并必填。blocklist 表示封禁列表，whitelist 表示白名单策略，isolate 表示隔离列表。</p>
   */
  ListType?: string
  /**
   * <p>访问方向过滤。可选。0 表示出站，1 表示入站；不传则不过滤。RuleType=intrusion_prevention 时不支持。</p>
   */
  Direction?: number
  /**
   * <p>规则动作过滤。可选。0 表示观察，1 表示阻断，2 表示放行；不传则不过滤。</p>
   */
  RuleAction?: number
  /**
   * <p>启用状态过滤。可选。默认只返回启用规则；传 false 只查询禁用规则。</p>
   */
  Enabled?: boolean
  /**
   * <p>是否同时包含启用和禁用规则。可选。true 表示包含两类；不能和 Enabled 同时使用。</p>
   */
  IncludeDisabled?: boolean
  /**
   * <p>精确规则 ID 过滤。可选。用于按数值规则标识定位单条规则。</p>
   */
  RuleId?: number
  /**
   * <p>精确公开规则标识过滤。可选。推荐在用户提供规则标识时使用。</p>
   */
  RuleUuid?: string
  /**
   * <p>协议过滤。可选。例如 TCP、UDP、ICMP、HTTP、HTTPS、ANY；不传则不过滤。</p>
   */
  Protocol?: string
  /**
   * <p>源地址或源内容关键字过滤。可选，支持模糊匹配。</p>
   */
  SrcIp?: string
  /**
   * <p>目的地址、目的域名或目的内容关键字过滤。可选，支持模糊匹配。</p>
   */
  DstIp?: string
  /**
   * <p>规则描述关键字过滤。可选。</p>
   */
  Description?: string
  /**
   * <p>入侵防御列表关键字搜索。可选，最大 100 字符。blocklist 搜索 ioc/address/comment/rule_source；whitelist 搜索 rule_name/ioc/comment/src_ip/dst_ip；isolate 搜索实例、公网 IP、内网 IP、VPC、地域。</p>
   */
  Keyword?: string
  /**
   * <p>精确实例 ID 过滤。仅 RuleType=intrusion_prevention 且 ListType=isolate 时使用；写操作前后核验应使用该参数而不是 Keyword。</p>
   */
  InstanceId?: string
  /**
   * <p>是否展开模板、资产组、实例等名称。可选，默认 true；传 false 返回原始标识。</p>
   */
  ExpandNames?: boolean
  /**
   * <p>单页返回规则数。可选，默认 100，最大 1000。</p>
   */
  Limit?: number
  /**
   * <p>分页偏移。可选，默认 0。</p>
   */
  Offset?: number
}

/**
 * DeleteNatFwInstance返回参数结构体
 */
export interface DeleteNatFwInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchLog返回参数结构体
 */
export interface SearchLogResponse {
  /**
   * <p>透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时。<br>注意：</p><ul><li>仅适用于单日志主题检索，检索多个日志主题时，请使用Topics中的Context</li></ul>
   */
  Context?: string
  /**
   * <p>符合检索条件的日志是否已全部返回，如未全部返回可使用Context参数获取后续更多日志<br>注意：仅当检索分析语句(Query)不包含SQL时有效</p>
   */
  ListOver?: boolean
  /**
   * <p>返回的是否为统计分析（即SQL）结果</p>
   */
  Analysis?: boolean
  /**
   * <p>匹配检索条件的原始日志</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<LogInfo>
  /**
   * <p>日志统计分析结果的列名<br>当UseNewAnalysis为false时生效</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColNames?: Array<string>
  /**
   * <p>日志统计分析结果<br>当UseNewAnalysis为false时生效</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisResults?: Array<LogItems>
  /**
   * <p>日志统计分析结果<br>当UseNewAnalysis为true时生效</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisRecords?: Array<string>
  /**
   * <p>日志统计分析结果的列属性<br>当UseNewAnalysis为true时生效</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<Column>
  /**
   * <p>本次统计分析使用的采样率</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SamplingRate?: number
  /**
   * <p>使用多日志主题检索时，各个日志主题的基本信息，例如报错信息。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Topics?: SearchLogTopics
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySecurityGroupRule请求参数结构体
 */
export interface ModifySecurityGroupRuleRequest {
  /**
   * 方向，0：出站，1：入站，默认1
   */
  Direction: number
  /**
   * 编辑后是否启用规则，0：不启用，1：启用，默认1
   */
  Enable: number
  /**
   * 编辑的企业安全组规则数据
   */
  Data: Array<SecurityGroupListData>
  /**
   * 编辑的企业安全组规则的原始执行顺序
   */
  SgRuleOriginSequence: number
}

/**
 * CreateSecurityGroupRules返回参数结构体
 */
export interface CreateSecurityGroupRulesResponse {
  /**
   * 状态值，0：添加成功，非0：添加失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwVpcDnsLst请求参数结构体
 */
export interface DescribeNatFwVpcDnsLstRequest {
  /**
   * <p>natfw 防火墙实例id</p>
   */
  NatFwInsId: string
  /**
   * <p>natfw 过滤，以&#39;,&#39;分隔</p>
   */
  NatInsIdFilter?: string
  /**
   * <p>分页页数</p>
   */
  Offset?: number
  /**
   * <p>每页最多个数</p>
   */
  Limit?: number
}

/**
 * DescribeCfwEips请求参数结构体
 */
export interface DescribeCfwEipsRequest {
  /**
   * <p>1：cfw接入模式，目前仅支持接入模式实例</p>
   */
  Mode: number
  /**
   * <p>ALL：查询所有弹性公网ip; nat-xxxxx：接入模式场景指定网关的弹性公网ip</p>
   */
  NatGatewayId: string
  /**
   * <p>防火墙实例id，当前仅支持接入模式的实例，该字段必填</p>
   */
  CfwInstance?: string
}

/**
 * RemoveVpcAcRule请求参数结构体
 */
export interface RemoveVpcAcRuleRequest {
  /**
   * <p>待删除规则 ID 列表。具体规则 ID 通过 DescribeCfwRules 查询 RuleType=vpc 和目标 RuleUuid，并使用返回的 rules[].uuid。数组恰为 [-1] 时删除当前账号中 IpVersion 指定版本的全部可操作规则，风险极高；其它数组按 ID 批量删除。具体 ID 删除忽略 IpVersion；至少匹配一条即成功，全部未找到时返回 ResourceNotFound。成功响应回显请求中的 ID 列表。</p>
   */
  RuleUuids: Array<number | bigint>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * <p>IP 版本，仅 RuleUuids 恰为 [-1] 时生效：1 表示 IPv6，0、省略或其它整数表示 IPv4。按具体规则 ID 删除时忽略。</p>
   */
  IpVersion?: number
}

/**
 * CreateBlockIgnoreRuleList请求参数结构体
 */
export interface CreateBlockIgnoreRuleListRequest {
  /**
   * 规则列表
   */
  Rules: Array<IntrusionDefenseRule>
  /**
   * 规则类型，1封禁，2放通，不支持域名封禁
   */
  RuleType: number
  /**
   * 是否覆盖重复数据，1覆盖，非1不覆盖，跳过重复数据
   */
  CoverDuplicate?: number
}

/**
 * StaticInfo 告警柱形图统计信息
 */
export interface StaticInfo {
  /**
   * 地址
   */
  Address?: string
  /**
   * 资产id
   */
  InsID?: string
  /**
   * 资产名称
   */
  InsName?: string
  /**
   * ip信息
   */
  Ip?: string
  /**
   * 数
   */
  Num?: number
  /**
   * 端口
   */
  Port?: string
}

/**
 * DescribeAclRule请求参数结构体
 */
export interface DescribeAclRuleRequest {
  /**
   * <p>每页条数</p>
   */
  Limit: number
  /**
   * <p>偏移值</p>
   */
  Offset: number
  /**
   * <p>需要查询的索引，特定场景使用，可不填</p>
   */
  Index?: string
  /**
   * <p>过滤条件组合</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>检索的起始时间，可不传</p>
   */
  StartTime?: string
  /**
   * <p>检索的截止时间，可不传</p>
   */
  EndTime?: string
  /**
   * <p>desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值，默认为asc</p>
   */
  Order?: string
  /**
   * <p>排序所用到的字段，默认为sequence</p>
   */
  By?: string
}

/**
 * ModifyClusterVpcFwSwitch返回参数结构体
 */
export interface ModifyClusterVpcFwSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOfflineExportTemporaryCredentials请求参数结构体
 */
export interface DescribeOfflineExportTemporaryCredentialsRequest {
  /**
   * <p>任务ID</p>
   */
  TaskId: string
}

/**
 * ExpandCfwVertical请求参数结构体
 */
export interface ExpandCfwVerticalRequest {
  /**
   * <p>nat：nat防火墙，ew：东西向防火墙</p>
   */
  FwType: string
  /**
   * <p>带宽值</p>
   */
  Width: number
  /**
   * <p>防火墙实例id</p>
   */
  CfwInstance?: string
  /**
   * <p>弹性开关 1打开 0 关闭</p>
   */
  ElasticSwitch?: number
  /**
   * <p>弹性带宽上限，单位Mbps</p>
   */
  ElasticBandwidth?: number
  /**
   * <p>按量计费标签</p>
   */
  Tags?: Array<TagInfo>
  /**
   * <p>按流量弹性开关</p><p>取值范围：[0, 1]</p><p>默认值：0</p>
   */
  ElasticTrafficSwitch?: number
}

/**
 * SyncFwOperate请求参数结构体
 */
export interface SyncFwOperateRequest {
  /**
   * <p>同步操作类型：Route，同步防火墙路由</p>
   */
  SyncType: string
  /**
   * <p>防火墙类型；nat,nat防火墙;ew,vpc间防火墙</p>
   */
  FwType?: string
}

/**
 * AddEnterpriseSecurityGroupRules请求参数结构体
 */
export interface AddEnterpriseSecurityGroupRulesRequest {
  /**
   * 待创建的规则数组，不能为空。每条规则必须提供访问源、访问目的、动作、非空描述和字符串 OrderIndex。未使用 ServiceTemplateId 时必须提供 Protocol 和 Port；使用 ServiceTemplateId 时二者可同时省略或留空，如填写非空值则必须为 Protocol=ANY、Port=-1/-1。Scope 可省略，默认使用 SG。
   */
  Data: Array<SecurityGroupRule>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * 保留字段，不提供幂等保证；重复请求仍可能重复创建规则，建议省略。
   */
  ClientToken?: string
  /**
   * 添加方式。batch_import 表示非覆盖批量导入；batch_import_cover 表示覆盖导入，会删除当前账号的全部可操作企业安全组规则后再添加 Data，添加失败时已删除的规则不会恢复，风险极高。两种批量导入都会使用 Data.Enable。其它值按普通新增处理。
   */
  From?: string
  /**
   * 延迟生效标记。1 表示将规则保留为待生效状态，0 表示按账号当前发布设置处理；省略等同于 0。账号停止自动发布时，规则仍保持待生效。
   */
  IsDelay?: number
  /**
   * 规则 ID 复用标记。1 表示使用每条规则的 Data.Id，此时 Data.Id 传十进制数字字符串；其它值由系统分配 ID。重复 ID 会导致创建失败。
   */
  IsUseId?: number
  /**
   * 添加位置类型，可省略，默认为 0：0 添加到末尾，1 添加到最前，2 从指定顺序插入。Type=0 或 1 按 Data 数组顺序确定最终顺序；Type=2 使用首条 Data.OrderIndex 作为插入位置，超过当前最大顺序时添加到末尾。
   */
  Type?: number
}

/**
 * 访问控制列表对象
 */
export interface AcListsData {
  /**
   * 规则id
   */
  Id?: number
  /**
   * 访问源
   */
  SourceIp?: string
  /**
   * 访问目的
   */
  TargetIp?: string
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 端口
   */
  Port?: string
  /**
   * 策略
   */
  Strategy?: number
  /**
   * 描述
   */
  Detail?: string
  /**
   * 命中次数
   */
  Count?: number
  /**
   * 执行顺序
   */
  OrderIndex?: number
  /**
   * 告警规则id
   */
  LogId?: string
  /**
   * 规则开关状态 1打开 0关闭
   */
  Status?: number
  /**
   * 规则源类型
   */
  SrcType?: number
  /**
   * 规则目的类型
   */
  DstType?: number
  /**
   * 规则唯一ID
   */
  Uuid?: string
  /**
   * 规则有效性
1 有效
0 无效
   */
  Invalid?: number
  /**
   * 是否地域规则
   */
  IsRegion?: number
  /**
   * 云厂商代码
   */
  CloudCode?: string
  /**
   * 自动化助手信息
   */
  AutoTask?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 地域码信息
   */
  RegionCode?: string
  /**
   * 国家代码
   */
  Country?: number
  /**
   * 城市代码
   */
  City?: number
  /**
   * 国家名称
   */
  RegName1?: string
  /**
   * 城市名称
   */
  RegName2?: string
}

/**
 * ModifyIpsModeSwitch请求参数结构体
 */
export interface ModifyIpsModeSwitchRequest {
  /**
   * 防护模式：0-观察模式, 1-拦截模式, 2-严格模式
   */
  Mode?: number
}

/**
 * ModifyAclRule返回参数结构体
 */
export interface ModifyAclRuleResponse {
  /**
   * 修改后的规则 ID 列表，成功时包含请求规则的 Uuid。
   */
  RuleUuid?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNatFwInstance请求参数结构体
 */
export interface CreateNatFwInstanceRequest {
  /**
   * <p>防火墙实例名称</p>
   */
  Name: string
  /**
   * <p>带宽</p>
   */
  Width: number
  /**
   * <p>模式 1：接入模式；0：新增模式</p>
   */
  Mode: number
  /**
   * <p>新增模式传递参数，其中NewModeItems和NatgwList至少传递一种。</p>
   */
  NewModeItems?: NewModeItems
  /**
   * <p>接入模式接入的nat网关列表，其中NewModeItems和NatgwList至少传递一种。</p>
   */
  NatGwList?: Array<string>
  /**
   * <p>主可用区，为空则选择默认可用区</p>
   */
  Zone?: string
  /**
   * <p>备可用区，为空则选择默认可用区</p>
   */
  ZoneBak?: string
  /**
   * <p>异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备</p>
   */
  CrossAZone?: number
  /**
   * <p>指定防火墙使用网段信息</p>
   */
  FwCidrInfo?: FwCidrInfo
}

/**
 * 企业安全组规则摘要。
 */
export interface SecurityGroupSimplifyRule {
  /**
   * 规则描述。
   */
  Description?: string
  /**
   * 访问目的示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
   */
  DestContent?: string
  /**
   * 写入规则的协议。普通 IPv4 规则返回 ANY、TCP、UDP 或 ICMP；使用服务模板时，Protocol 可省略或留空，此时返回空字符串；若仍显式填写 Protocol，则只接受 ANY 并返回 ANY。
   */
  Protocol?: string
  /**
   * 规则 ID。
   */
  RuleUuid?: number
  /**
   * 写入后的规则生效范围；SG 表示安全组，LH 表示轻量应用服务器，组合范围以逗号分隔。
   */
  Scope?: string
  /**
   * 写入后的实际规则顺序。
   */
  Sequence?: number
  /**
   * 访问源示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
   */
  SourceContent?: string
}

/**
 * 预接入检查结果，序列化后写入 cfw_gwlb_lead_switch.check_result 列
 */
export interface ClusterFwPreAccessCheckResult {
  /**
   * 检查状态，0：进行中，1：通过，2：失败
   */
  Status?: number
  /**
   * 当前/最后所处检查项。Status=1（通过）时为 done，Status=2（失败）时为失败的检查项 key，Status=0（进行中）时为正在执行的检查项 key
   */
  CurrentStage?: string
  /**
   * 逐条检查项结果列表，按执行顺序追加
   */
  Stages?: Array<ClusterFwPreAccessCheckStage>
  /**
   * 策略路由配额核算报告，仅在 Status=1（通过）时非空
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyRouteReport?: PolicyRoutePreCheckReport
  /**
   * 最近一次更新时间，格式：YYYY-MM-DD HH:MM:SS
   */
  UpdateTime?: string
}

/**
 * DescribeEnterpriseSecurityGroupRule请求参数结构体
 */
export interface DescribeEnterpriseSecurityGroupRuleRequest {
  /**
   * 分页查询时，显示的当前页的页码。

默认值为1。
   */
  PageNo: string
  /**
   * 分页查询时，显示的每页数据的最大条数。

可设置值最大为50。
   */
  PageSize: string
  /**
   * 访问源示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
支持通配
   */
  SourceContent?: string
  /**
   * 访问目的示例：
net：IP/CIDR(192.168.0.2)
template：参数模板(ipm-dyodhpby)
instance：资产实例(ins-123456)
resourcegroup：资产分组(/全部分组/分组1/子分组1)
tag：资源标签({"Key":"标签key值","Value":"标签Value值"})
region：地域(ap-gaungzhou)
支持通配
   */
  DestContent?: string
  /**
   * 规则描述，支持通配
   */
  Description?: string
  /**
   * 访问控制策略中设置的流量通过云防火墙的方式。取值：
accept：放行
drop：拒绝
   */
  RuleAction?: string
  /**
   * 是否启用规则，默认为启用，取值：
true为启用，false为不启用
   */
  Enable?: string
  /**
   * 访问控制策略的端口。取值：
-1/-1：全部端口
80：80端口
   */
  Port?: string
  /**
   * 协议；TCP/UDP/ICMP/ANY
   */
  Protocol?: string
  /**
   * 端口协议类型参数模板id；协议端口模板id
   */
  ServiceTemplateId?: string
  /**
   * 规则的uuid
   */
  RuleUuid?: number
}

/**
 * VPC边界访问控制规则参数结构，供新增和修改共用。修改时整条替换，省略的可写字段不会继承旧值；查询展示字段在新增和修改请求中均忽略。
 */
export interface VpcRuleItem {
  /**
   * 规则描述，不超过 100 个字符。新增时按请求值保存；修改时完整替换，不继承旧值。
   */
  Description: string
  /**
   * 访问目的内容，由 DestType 决定格式和校验。net/ip 接受合法 IP 或 CIDR 的逗号分隔列表，最多 10 项；domain 接受合法域名的逗号分隔列表或单独的 *，最多 10 项，通配域名最多 5 级，段内通配域名还要求引擎支持对应能力；template 接受当前租户的地址模板标识并归一化为模板 UUID，IP 地址模板必须与 IpVersion 一致，域名地址模板按域名目的校验；dnsparse 接受单个非 IP 域名或当前租户的域名模板，可使用符合级数限制的 *. 前缀泛域名，但不接受单独的 * 或段内通配；domainiptwoverify 接受单个非 IP 精确域名或不含任何通配符的当前租户域名模板；instance 和 tag 必须在当前租户存在，其中 instance 必须具有 IpVersion 对应的私网地址；group 接受资源组标识。归一化后的目的内容超过 1023 字节时请求失败。
   */
  DestContent: string
  /**
   * 访问目的类型，不区分大小写。net、ip 均表示 IP/CIDR，template 表示地址模板，instance 表示资产实例，group 表示资产分组，tag 表示资源标签，domain 表示 FQDN 匹配，dnsparse 表示宽松匹配：Host/SNI 与域名匹配，或目的 IP 属于该域名当前 DNS 解析结果，满足任一条件即命中；domainiptwoverify 表示严格匹配：上述两个条件必须同时满足。url 虽可被通用类型映射识别，但 VPC 目的内容不支持。地址模板和部分域名模式要求当前 VPC 防火墙引擎支持对应能力；类型及模板实际类型共同决定 DestContent 和 Protocol 的校验。
   */
  DestType: string
  /**
   * 规则生效的 VPC 边范围，不区分大小写。ALL 表示全部 VPC 边，cfws- 前缀表示指定 VPC 边；其它格式无效。ALL 要求当前环境支持 VPC 全局规则。
   */
  EdgeId: string
  /**
   * 规则状态，不区分大小写：true 表示启用，false 表示禁用。省略或为空时使用账号默认状态；没有可用默认值时启用。
   */
  Enable: string
  /**
   * 规则在相同 IpVersion 下的顺序。-1 表示追加到末尾；正序号表示在对应位置插入并顺延后续规则。0、其它负数及超范围值不应使用。批量新增按 Rules 顺序依次处理。
   */
  OrderIndex: number
  /**
   * 访问端口。除 ICMP 和 ICMPV6 外，支持逗号分隔的正整数单端口或“起始/结束”范围，且起始值不大于结束值；-1/-1 表示全部端口。ICMP 和 ICMPV6 忽略该字段；FTP 仅支持单个正整数端口。
   */
  Port: string
  /**
   * 协议名称，不区分大小写并归一化。ANY 表示不限定协议，不表示省略 Protocol。IP、instance、tag、group 及 IP 地址模板目的支持 TCP、UDP、ICMP、ICMPV6、ANY 和 FTP，其中 FTP 只接受单端口；domain 及域名地址模板目的支持 ANY、HTTP、HTTPS、HTTP/HTTPS、TLS/SSL、SMTP、SMTPS、SMTP/SMTPS 和 DNS，不支持 FTP，domain、tls、ssl 归一化为 TLS/SSL；dnsparse 和 domainiptwoverify 仅支持 TCP 或 UDP。template 按查询到的实际模板类型应用上述限制；填写 ParamTemplateId 时，组内每个协议端口项还会应用相同的目的类型限制。
   */
  Protocol: string
  /**
   * 流量通过云防火墙时的处理方式，不区分大小写。accept 表示放行，drop 表示拒绝，log 表示观察；isolateinaccept 表示放行访问隔离资产的白名单流量，isolateindrop 表示阻断访问隔离资产的其它流量，isolateoutaccept 表示放行隔离资产访问白名单目标，isolateoutdrop 表示阻断隔离资产访问其它目标；其它值返回参数错误。
   */
  RuleAction: string
  /**
   * 访问源内容，格式由 SourceType 决定：net/ip 使用最多 10 个逗号分隔的 IP 或 CIDR；template 使用当前账号且匹配 IpVersion 的 IP 地址模板 ID，不支持域名模板；instance、tag 必须属于当前账号，instance 须有对应 IpVersion 的私网地址；group 使用资源组 ID。
   */
  SourceContent: string
  /**
   * 访问源类型，不区分大小写：net、ip 均表示 IP/CIDR，template 表示地址模板，instance 表示资产实例，tag 表示资源标签，group 表示资产分组。类型及模板实际类型决定 SourceContent 的格式；template 要求当前环境支持地址模板。
   */
  SourceType: string
  /**
   * 规则关联的 beta 任务详情。请求中的该字段不参与新增或修改规则构造，主要用于查询返回。
   */
  BetaList?: Array<BetaInfoByACL>
  /**
   * 规则创建时间。请求中的该字段不参与新增或修改规则构造，主要用于查询返回。
   */
  CreateTime?: string
  /**
   * 规则删除标记，1 表示已删除，0 表示未删除。请求中的该字段不参与新增或修改规则构造，主要用于查询返回。
   */
  Deleted?: number
  /**
   * 目的实际类型提示，例如区分 IP 地址模板和域名地址模板；新增和修改请求中忽略。
   */
  DestValueType?: string
  /**
   * 规则命中次数。请求中的该字段不参与新增或修改规则构造，主要用于查询返回。
   */
  DetectedTimes?: number
  /**
   * EdgeId 对应的 VPC 边名称。请求中的该字段不参与新增或修改规则构造，主要用于查询返回和操作记录展示。
   */
  EdgeName?: string
  /**
   * 规则生效的防火墙组或 CCN 范围，不区分大小写。支持 ALL、cfwg- 前缀和 ccn- 前缀；省略、为空或格式无效时按 ALL 处理。
   */
  FwGroupId?: string
  /**
   * 防火墙组或 CCN 名称。请求中的该字段不参与新增或修改规则构造，主要用于查询返回和操作记录展示。
   */
  FwGroupName?: string
  /**
   * 覆盖导入规则标识。仅 batch_import_cover 接受正整数值；其它新增方式和修改请求中忽略。
   */
  InternalUuid?: number
  /**
   * 查询结果中的规则有效性标记，0 表示有效，1 表示无效。请求中的该字段不参与新增或修改规则构造。
   */
  Invalid?: number
  /**
   * IP 版本：0 表示 IPv4，1 表示 IPv6；省略或传入其它整数时按 IPv4 处理。instance 和 IP 地址模板须匹配该版本；直接填写的 net IP/CIDR 也应使用相同版本。
   */
  IpVersion?: number
  /**
   * 端口协议组 ID。省略或为空时使用 Protocol 和 Port；非空时必须是当前账号可用的端口协议组，组内协议端口须满足目的类型限制。Protocol 和非 ICMP/ICMPV6 的 Port 仍须使用有效格式。
   */
  ParamTemplateId?: string
  /**
   * 端口协议组名称。请求中的该字段不参与新增或修改规则构造，主要用于查询返回。
   */
  ParamTemplateName?: string
  /**
   * 规则位置展示值：1 表示最前，2 表示中间，3 表示最后。新增和修改请求中忽略；仅位置为 2 的规则可修改。
   */
  RulePartition?: number
  /**
   * 访问源名称。请求中的该字段不参与新增或修改规则构造，主要用于查询返回和操作记录展示。
   */
  SourceName?: string
  /**
   * 访问目的名称。请求中的该字段不参与新增或修改规则构造，主要用于查询返回和操作记录展示。
   */
  TargetName?: string
  /**
   * 规则最近更新时间。请求中的该字段不参与新增或修改规则构造，主要用于查询返回。
   */
  UpdateTime?: string
  /**
   * 规则 ID。修改时必须提供当前账号已有且可修改的正整数 Uuid，并完整替换该规则。普通新增、insert_rule 和 batch_import 忽略该字段；batch_import_cover 可使用正整数 ID，非正数值由系统分配。
   */
  Uuid?: number
}

/**
 * CreateAlertCenterOmit请求参数结构体
 */
export interface CreateAlertCenterOmitRequest {
  /**
   * <p>要忽略的记录 ID 列表。TableType=AlertTable 时，使用 DescribeLogs（Index=rule_threatinfo）返回的 log_id；仅通过 HandleEventIdList 指定事件时传 [""]。TableType=InterceptionTable 时，使用 DescribeBlockList 返回的 Data[].UniqueId 或 TopData[].UniqueId。</p>
   */
  HandleIdList: Array<string>
  /**
   * <p>必填的记录来源类型：AlertTable 表示告警中心，InterceptionTable 表示拦截列表。</p>
   */
  TableType: string
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * <p>告警事件 ID 列表，可省略且仅用于 TableType=AlertTable。HandleEventIdList 与 HandleIdList 至少指定一种目标；仅按事件忽略时，HandleIdList 固定传 [""]。事件 ID 通过 DescribeCfwAlerts 获取，返回 alerts[].current_event_id 时使用该值，否则使用 alerts[].event_id。</p>
   */
  HandleEventIdList?: Array<string>
}

/**
 * 预接入检查项定义
 */
export interface ClusterFwPreAccessCheckItem {
  /**
   * 检查项 key，与查询接口 CheckResult.Stages[].Stage 一一对应
   */
  Stage?: string
  /**
   * 该检查项的展示文案，已按请求的 Language 返回中文或英文
   */
  Description?: string
}

/**
 * NAT防火墙Dnat规则列表
 */
export interface DescNatDnatRule {
  /**
   * id
   */
  Id?: number
  /**
   * 网络协议，可选值：TCP、UDP。
   */
  IpProtocol?: string
  /**
   * 弹性IP。
   */
  PublicIpAddress?: string
  /**
   * 公网端口。
   */
  PublicPort?: number
  /**
   * 内网地址。
   */
  PrivateIpAddress?: string
  /**
   * 内网端口。
   */
  PrivatePort?: number
  /**
   * NAT防火墙转发规则描述。
   */
  Description?: string
  /**
   * 是否被关联引用，如被远程运维使用
   */
  IsReferenced?: number
  /**
   * 所属防火墙实例id
   */
  FwInsId?: string
  /**
   * 关联的nat网关Id
   */
  NatGwId?: string
}

/**
 * OpenClusterNatFwSwitch请求参数结构体
 */
export interface OpenClusterNatFwSwitchRequest {
  /**
   * <p>NAT CCN防火墙开关配置</p>
   */
  NatCcnSwitch: NatCcnSwitchConfig
}

/**
 * SetNatFwEip返回参数结构体
 */
export interface SetNatFwEipResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterNatCcnFwSwitchList返回参数结构体
 */
export interface DescribeClusterNatCcnFwSwitchListResponse {
  /**
   * <p>符合条件的总记录数</p>
   */
  Total?: number
  /**
   * <p>NAT防火墙开关详情列表</p>
   */
  Data?: Array<NatFwSwitchDetailS>
  /**
   * <p>地域列表</p>
   */
  RegionList?: Array<FilterDataObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LogItem的数组
 */
export interface LogItems {
  /**
   * 分析结果返回的KV数据对
   */
  Data?: Array<LogItem>
}

/**
 * 集群模式防火墙开关数据详情
 */
export interface ClusterSwitchDetail {
  /**
   * <p>实例对象可以是ccnid类型:ccn-ad21xuds形式;nat网关类型:nat-da12daxd形式;ip类型:1.1.1.1形式等</p>
   */
  InsObj?: string
  /**
   * <p>实例对象名称</p>
   */
  ObjName?: string
  /**
   * <p>防火墙类型，ew：vpc间防火墙；nat：nat防火墙；border：互联网边界防火墙</p>
   */
  FwType?: string
  /**
   * <p>资产类型，ccn：ccn实例类型；nat：nat网关类型</p>
   */
  AssetType?: string
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>开关状态<br>0 : 关闭<br>1 : 开启<br>2 : 开启中<br>3 : 关闭中<br>4 : 异常</p>
   */
  Status?: number
  /**
   * <p>开关接入模式，1：自动接入；2，手动接入，0：未选择</p>
   */
  SwitchMode?: number
  /**
   * <p>实例对象是否处于非集群接入场景（主备模式）</p>
   */
  NonCluster?: number
  /**
   * <p>ip版本，0：ipv4；1：ipv6</p>
   */
  IpVersion?: number
  /**
   * <p>关联实例</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttachIns?: Array<AttachInsInfo>
  /**
   * <p>引流私有网络端点信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Endpoints?: Array<EndpointInfo>
  /**
   * <p>入侵防护模式,0:观察;1:拦截;2:严格;3:关闭</p>
   */
  Idpsaction?: number
  /**
   * <p>//透明模式开关,0:未开启,1:已开启</p>
   */
  TransEnable?: number
  /**
   * <p>开关状态 0关闭 1开启</p>
   */
  Enable?: number
  /**
   * <p>路由模式：0：多路由表，1：策略路由</p>
   */
  RoutingMode?: number
  /**
   * <p>是否跨租户开关 1是 0不是</p>
   */
  IsPeer?: number
  /**
   * <p>跨租户appid</p>
   */
  PeerAppid?: string
  /**
   * <p>跨租户操作状态 1不允许操作 0可以</p>
   */
  PeerStatus?: number
  /**
   * <p>Bypass状态</p>
   */
  Bypass?: number
  /**
   * <p>防火墙开关操作时的进度状态：</p><p>// 开启 — 自动模式（3步）<br>&quot;AUTO_OPEN_ORCHESTRATING&quot; // 步骤1: 预编排策略路由<br>&quot;AUTO_OPEN_CREATING_RESOURCES&quot; // 步骤2: 创建引流网络和资源<br>&quot;AUTO_OPEN_PUSHING_ROUTES&quot; // 步骤3: 创建策略路由</p><p>// 开启 — 手动模式（1步）<br>&quot;MANUAL_OPEN_CREATING_RESOURCES&quot; // 步骤1: 创建引流网络和资源</p><p>// 关闭 — 自动模式（2步）<br>&quot;AUTO_CLOSE_DELETING_ROUTES&quot; // 步骤1: 删除策略路由<br>&quot;AUTO_CLOSE_DELETING_RESOURCES&quot; // 步骤2: 删除引流网络和资源<br>// 关闭 — 手动模式（1步）<br>&quot;MANUAL_CLOSE_DELETING_RESOURCES&quot; // 步骤1: 删除引流网络和资源</p><p>// 修改 — 自动模式（3步）<br>&quot;AUTO_MODIFY_ORCHESTRATING&quot; // 步骤1: 预编排策略路由<br>&quot;AUTO_MODIFY_DELETING_ROUTES&quot; // 步骤2: 删除旧策略路由<br>&quot;AUTO_MODIFY_PUSHING_ROUTES&quot; // 步骤3: 创建新策略路由</p><p>// 修改 — 手动模式（1步，仅 VPC 防火墙存在手动模式修改）<br>&quot;MANUAL_MODIFY_UPDATING_RESOURCES&quot; // 步骤1: 更新引流网络和资源</p>
   */
  Progress?: string
  /**
   * <p>预检查项的结果</p>
   */
  CheckResult?: ClusterFwPreAccessCheckResult
}

/**
 * ModifyBlockIgnoreRuleNew返回参数结构体
 */
export interface ModifyBlockIgnoreRuleNewResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBlockIgnoreList请求参数结构体
 */
export interface ModifyBlockIgnoreListRequest {
  /**
   * <p>1封禁列表 2 放通列表</p>
   */
  RuleType: number
  /**
   * <p>IP、Domain二选一（注：封禁列表，只能填写IP），不能同时为空</p>
   */
  IOC: Array<IocListData>
  /**
   * <p>可选值：delete（删除）、edit（编辑）、add（添加）  其他值无效</p>
   */
  IocAction: string
  /**
   * <p>时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填</p>
   */
  StartTime?: string
  /**
   * <p>时间格式：yyyy-MM-dd HH:mm:ss，IocAction 为edit或add时必填，必须大于当前时间且大于StartTime</p>
   */
  EndTime?: string
  /**
   * <p>是否来自微信</p><p>取值范围：[0, 1]</p>
   */
  IsFromWeChat?: number
}

/**
 * ModifyBlockIgnoreRule请求参数结构体
 */
export interface ModifyBlockIgnoreRuleRequest {
  /**
   * 规则列表
   */
  Rule: IntrusionDefenseRule
  /**
   * 规则类型，1封禁，2放通
   */
  RuleType: number
}

/**
 * DescribeEnterpriseSGRuleProgress请求参数结构体
 */
export type DescribeEnterpriseSGRuleProgressRequest = null

/**
 * DescribeCfwSwitches返回参数结构体
 */
export interface DescribeCfwSwitchesResponse {
  /**
   * 查询结果。UTF-8 JSON object 字符串；调用方需解析 Response.Data。border_firewall 返回公网 IP 总数、已防护数、未防护数、操作中数量和防护率；nat_firewall、vpc_firewall 按 cluster/ha 返回实例及子开关汇总；ndr 返回已开启开关数；ips 返回当前防护模式。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwInstancesInfo请求参数结构体
 */
export interface DescribeNatFwInstancesInfoRequest {
  /**
   * <p>获取实例列表过滤字段</p>
   */
  Filter?: Array<NatFwFilter>
  /**
   * <p>第几页</p>
   */
  Offset?: number
  /**
   * <p>每页长度</p>
   */
  Limit?: number
}

/**
 * 安全组地域配置
 */
export interface SecurityGroupRegion {
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>地域Id</p>
   */
  RegionId?: string
  /**
   * <p>地域中文</p>
   */
  RegionName?: string
}

/**
 * DescribeTableStatus请求参数结构体
 */
export interface DescribeTableStatusRequest {
  /**
   * EdgeId值两个vpc间的边id vpc填Edgeid，不要填Area；
   */
  EdgeId?: string
  /**
   * 状态值，0：检查表的状态 确实只有一个默认值
   */
  Status?: number
  /**
   * Nat所在地域 NAT填Area，不要填Edgeid；
   */
  Area?: string
  /**
   * 方向，0：出站，1：入站 默认值为 0
   */
  Direction?: number
}

/**
 * IPS规则展示字段相关结构
 */
export type IpsRuleDetailNew = null

/**
 * ModifyAddressTemplate返回参数结构体
 */
export interface ModifyAddressTemplateResponse {
  /**
   * 创建结果,0成功
   */
  Status?: number
  /**
   * 唯一Id
   */
  Uuid?: string
  /**
   * 规则数上限配置
   */
  RuleLimitNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 未处置事件信息汇总
 */
export interface UnHandleEventDetail {
  /**
   * 安全事件名称
   */
  EventName: string
  /**
   * 未处置事件数量
   */
  Total: number
}

/**
 * 开启、关闭 防火墙互联网边界开关
 */
export interface EdgeIpSwitch {
  /**
   * 公网IP
   */
  PublicIp: string
  /**
   * vpc 中第一个EIP开关打开，需要指定子网创建私有连接
   */
  SubnetId?: string
  /**
   * 创建私有连接指定IP
   */
  EndpointIp?: string
  /**
   * 0 : 旁路 1 : 串行
   */
  SwitchMode?: number
}

/**
 * ModifyIsolateTable请求参数结构体
 */
export interface ModifyIsolateTableRequest {
  /**
   * <p>操作动作，仅接受精确值 edit 或 delete。ButtonAction 为 edit 时修改该资产所有匹配隔离记录的有效期，需传 StartTime 和 EndTime；ButtonAction 为 delete 时解除该资产的全部匹配隔离，StartTime 和 EndTime 可省略。</p>
   */
  ButtonAction: string
  /**
   * <p>必填的资产实例 ID。调用 DescribeCfwRules，传 RuleType=intrusion_prevention、ListType=isolate 和目标 InstanceId，并使用完全匹配的 rules[].instance_id。edit 或 delete 作用于该实例的全部隔离记录。</p>
   */
  InstanceID: string
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * <p>隔离结束时间。ButtonAction 为 edit 时必填，格式为 YYYY-MM-DD HH:MM:SS，且不得早于 StartTime；除永久隔离值 3000-01-01 00:00:00 外，必须晚于当前时间。ButtonAction 为 delete 时可省略。</p>
   */
  EndTime?: string
  /**
   * <p>隔离起始时间。ButtonAction 为 edit 时必填，格式为 YYYY-MM-DD HH:MM:SS，且不得晚于 EndTime；该时间将应用于该实例的全部匹配隔离记录。ButtonAction 为 delete 时可省略。</p>
   */
  StartTime?: string
}

/**
 * CreateNatFwInstanceWithDomain返回参数结构体
 */
export interface CreateNatFwInstanceWithDomainResponse {
  /**
   * <p>nat实例信息</p>
   */
  CfwInsId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetSync请求参数结构体
 */
export type DescribeAssetSyncRequest = null

/**
 * DeleteVpcFwGroup请求参数结构体
 */
export interface DeleteVpcFwGroupRequest {
  /**
   * <p>防火墙(组)Id</p>
   */
  FwGroupId?: string
  /**
   * <p>是否删除整个防火墙(组)<br>0：不删除防火墙(组)，只删除单独实例<br>1：删除整个防火墙(组)</p>
   */
  DeleteFwGroup?: number
  /**
   * <p>待删除的防火墙实例数组</p>
   */
  VpcFwInsList?: Array<string>
}

/**
 * 规则输入对象
 */
export interface RuleInfoData {
  /**
   * 执行顺序
   */
  OrderIndex: number
  /**
   * 访问源
   */
  SourceIp: string
  /**
   * 访问目的
   */
  TargetIp: string
  /**
   * 协议
   */
  Protocol: string
  /**
   * 策略, 0：观察，1：阻断，2：放行
   */
  Strategy: string
  /**
   * 访问源类型，1是IP，3是域名，4是IP地址模板，5是域名地址模板
   */
  SourceType: number
  /**
   * 方向，0：出站，1：入站
   */
  Direction: number
  /**
   * 描述
   */
  Detail: string
  /**
   * 访问目的类型，1是IP，3是域名，4是IP地址模板，5是域名地址模板
   */
  TargetType: number
  /**
   * 端口
   */
  Port?: string
  /**
   * id值
   */
  Id?: number
  /**
   * 日志id，从告警处创建必传，其它为空
   */
  LogId?: string
  /**
   * 城市Code
   */
  City?: number
  /**
   * 国家Code
   */
  Country?: number
  /**
   * 云厂商，支持多个，以逗号分隔， 1:腾讯云（仅中国香港及海外）,2:阿里云,3:亚马逊云,4:华为云,5:微软云
   */
  CloudCode?: string
  /**
   * 是否为地域
   */
  IsRegion?: number
  /**
   * 城市名
   */
  CityName?: string
  /**
   * 国家名
   */
  CountryName?: string
  /**
   * 国家二位iso代码或者省份缩写代码
   */
  RegionIso?: string
}

/**
 * DescribeNDRAssetIdentificationCursorList返回参数结构体
 */
export interface DescribeNDRAssetIdentificationCursorListResponse {
  /**
   * <p>查询结果列表</p>
   */
  Data?: Array<NDRAssetServiceInfo>
  /**
   * <p>下一页游标</p>
   */
  NextCursor?: string
  /**
   * <p>是否存在更多数据</p>
   */
  HasMore?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySequenceAclRules返回参数结构体
 */
export interface ModifySequenceAclRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBlockIgnoreRuleNew返回参数结构体
 */
export interface CreateBlockIgnoreRuleNewResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 新手引导扫描结果信息
 */
export interface ScanResultInfo {
  /**
   * 是否禁封端口
   */
  BanStatus?: boolean
  /**
   * 防护ip数量
   */
  IPNum?: number
  /**
   * 是否开启防护
   */
  IPStatus?: boolean
  /**
   * 是否拦截攻击
   */
  IdpStatus?: boolean
  /**
   * 暴露漏洞数量
   */
  LeakNum?: number
  /**
   * 暴露端口数量
   */
  PortNum?: number
}

/**
 * DeleteBlockIgnoreRuleList请求参数结构体
 */
export interface DeleteBlockIgnoreRuleListRequest {
  /**
   * 规则列表
   */
  Rules: Array<IocListData>
  /**
   * 规则类型，1封禁，2放通，不支持域名封禁
   */
  RuleType: number
}

/**
 * SyncFwOperate返回参数结构体
 */
export interface SyncFwOperateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfwRiskOverview返回参数结构体
 */
export interface DescribeCfwRiskOverviewResponse {
  /**
   * <p>查询结果。UTF-8 JSON object 字符串；调用方需解析 Response.Data。</p>
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNatFwDnatRule请求参数结构体
 */
export interface CreateNatFwDnatRuleRequest {
  /**
   * <p>0：cfw新增模式，1：cfw接入模式。</p>
   */
  Mode: number
  /**
   * <p>防火墙实例id，该字段必须传递。</p>
   */
  CfwInstance?: string
  /**
   * <p>添加或删除操作的Dnat规则列表。</p>
   */
  DnatRules?: Array<CfwNatDnatRule>
}

/**
 * CreateAlertCenterRule请求参数结构体
 */
export interface CreateAlertCenterRuleRequest {
  /**
   * 处置时间
1  1天
7   7天
-2 永久
   */
  HandleTime: number
  /**
   * 处置类型
当HandleIdList 不为空时：1封禁 2放通  
当HandleIpList 不为空时：3放通 4封禁
   */
  HandleType: number
  /**
   * 当前日志方向： 0 出向 1 入向
   */
  AlertDirection: number
  /**
   * 处置方向： 0出向 1入向 0,1出入向 3内网
   */
  HandleDirection: string
  /**
   * 处置对象,ID列表，  IdLists和IpList二选一
   */
  HandleIdList?: Array<string>
  /**
   * 处置对象,IP列表，  IdLists和IpList二选一
   */
  HandleIpList?: Array<string>
  /**
   * 处置描述
   */
  HandleComment?: string
  /**
   * 放通原因:
0默认 1重复 2误报 3紧急放通
   */
  IgnoreReason?: number
  /**
   * 封禁域名-保留字段
   */
  BlockDomain?: string
}

/**
 * RemoveEnterpriseSecurityGroupRule请求参数结构体
 */
export interface RemoveEnterpriseSecurityGroupRuleRequest {
  /**
   * <p>必填的删除类型，只使用 0 或 1。0 表示删除 RuleUuid 指定的单条规则；1 表示删除当前账号的全部可操作企业安全组规则，风险极高。</p>
   */
  RemoveType: number
  /**
   * <p>必填的规则数值 ID。RemoveType=0 时，调用 DescribeCfwRules，传 RuleType=enterprise_sg、RuleId=&lt;数值 RuleUuid&gt;，并使用返回的 rules[].uuid；规则不存在时返回 ResourceNotFound。RemoveType=1 时传 0，删除当前账号的全部可操作企业安全组规则。成功响应回显请求中的 RuleUuid。</p>
   */
  RuleUuid: number
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
}

/**
 * UpdateClusterVpcFw返回参数结构体
 */
export interface UpdateClusterVpcFwResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupList返回参数结构体
 */
export interface DescribeSecurityGroupListResponse {
  /**
   * 列表当前规则总条数
   */
  Total?: number
  /**
   * 安全组规则列表数据
   */
  Data?: Array<SecurityGroupListData>
  /**
   * 不算筛选条数的总条数
   */
  AllTotal?: number
  /**
   * 访问控制规则全部启用/全部停用
   */
  Enable?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网络实例信息
 */
export interface NetInstancesInfo {
  /**
   * 网络实例ID
   */
  InstanceId?: string
  /**
   * 网络实例名称
   */
  InstanceName?: string
  /**
   * 网络cidr (多段以逗号分隔)
   */
  InstanceCidr?: string
  /**
   * 网络实例所在地域
   */
  Region?: string
}

/**
 * ModifyEnterpriseSecurityGroupRule请求参数结构体
 */
export interface ModifyEnterpriseSecurityGroupRuleRequest {
  /**
   * 修改类型，仅接受 0、1、2。0：用 Data 完整替换 RuleUuid 指定规则的可写内容；1：修改 RuleUuid 指定规则的启停状态；2：修改当前账号全部可操作规则的启停状态。
   */
  ModifyType: number
  /**
   * 规则数值 ID。ModifyType=0 或 1 时，调用 DescribeCfwRules，传 RuleType=enterprise_sg、RuleId=<数值 RuleUuid>、ExpandNames=false，并使用返回的 rules[].uuid；ModifyType=2 时传 0。
   */
  RuleUuid: number
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * ModifyType=0 时必填的完整规则内容对象，不是局部更新。调用 DescribeCfwRules，传 RuleType=enterprise_sg、RuleId=<数值 RuleUuid>、ExpandNames=false 获取原规则：src_content、dst_content 分别写入 SourceContent、DestContent；src_type 和 dst_type 的 0、1/2/3/4/5/6/16/24/25、7、8、9/10、100 分别对应 net、instance、template、tag、region、resourcegroup，DestType 的 20 对应 dnsparse；未列出的数值类型不能转换。再调用 DescribeEnterpriseSecurityGroupRule，使用同一 RuleUuid 获取 OrderIndex、Protocol、Port、RuleAction、Description、Scope 和 ServiceTemplateId。缺失字段按空值处理，仅 Scope 省略时保留原值。ModifyType=1 或 2 时不传 Data。
   */
  Data?: SecurityGroupRule
  /**
   * 规则状态，JSON 整数：0 表示关闭，1 表示开启。ModifyType=1 时修改 RuleUuid 指定规则，ModifyType=2 时修改当前账号的全部可操作规则；这两种模式下应显式填写。ModifyType=0 时忽略该字段。
   */
  Enable?: number
}

/**
 * ModifySequenceRules返回参数结构体
 */
export interface ModifySequenceRulesResponse {
  /**
   * 0: 修改成功, 非0: 修改失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterVpcFwSwitch请求参数结构体
 */
export interface ModifyClusterVpcFwSwitchRequest {
  /**
   * <p>开关，0：关闭，1：开启</p>
   */
  Enable: number
  /**
   * <p>集群模式vpc间防火墙ccn开关信息</p>
   */
  CcnSwitch?: Array<CcnSwitchInfo>
}

/**
 * DescribeVpcAcRule返回参数结构体
 */
export interface DescribeVpcAcRuleResponse {
  /**
   * <p>总条数</p>
   */
  Total?: number
  /**
   * <p>内网间访问控制列表数据</p>
   */
  Data?: Array<VpcRuleItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业安全组规则列表信息
 */
export interface EnterpriseSecurityGroupRuleRuleInfo {
  /**
   * 排序
   */
  OrderIndex?: number
  /**
   * 主键id
   */
  RuleUuid?: number
  /**
   * 规则uuid
   */
  Uuid?: string
  /**
   * 源规则内容
   */
  SourceId?: string
  /**
   * 源规则类型 
取值范围 0/1/2/3/4/5/6/7/8/9/100
0表示ip(net),
1表示VPC实例(instance)
2表示子网实例(instance)
3表示CVM实例(instance)
4表示CLB实例(instance)
5表示ENI实例(instance)
6表示数据库实例(instance)
7表示模板(template)
8表示标签(tag)
9表示地域(region)
100表示资产分组(resourcegroup)
   */
  SourceType?: number
  /**
   * 目的规则内容
   */
  TargetId?: string
  /**
   * 目的规则类型 
取值范围 0/1/2/3/4/5/6/7/8/9/100
0表示ip(net),
1表示VPC实例(instance)
2表示子网实例(instance)
3表示CVM实例(instance)
4表示CLB实例(instance)
5表示ENI实例(instance)
6表示数据库实例(instance)
7表示模板(template)
8表示标签(tag)
9表示地域(region)
100表示资产分组(resourcegroup)
   */
  TargetType?: number
  /**
   * 协议名称
取值范围:TCP/ANY/ICMP/UDP
ANY:表示所有

   */
  Protocol?: string
  /**
   * 端口
   */
  Port?: string
  /**
   * 规则策略
取值范围:1/2
1:阻断
2:放行
   */
  Strategy?: number
  /**
   * 规则启用状态 
取值范围： 0/1
0:未开启
1:开启
   */
  Status?: number
  /**
   * 描述
   */
  Detail?: string
  /**
   * 标签
   */
  AclTags?: string
  /**
   * 规则最新一次是否有改动
取值范围：0/1
0:否
1:是
   */
  IsNew?: number
  /**
   * 地域
   */
  Region?: string
  /**
   * 是否延迟下发规则 
取值范围：0/1
0:立即下发 1:延迟下发
   */
  IsDelay?: number
  /**
   * 服务模板id
   */
  ServiceTemplateId?: string
  /**
   * 源资产名称
   */
  SouInstanceName?: string
  /**
   * 源资产公网ip
   */
  SouPublicIp?: string
  /**
   * 源资产内网ip
   */
  SouPrivateIp?: string
  /**
   * 源资产网段信息
   */
  SouCidr?: string
  /**
   * 源模板名称
   */
  SouParameterName?: string
  /**
   * 目的资产名称
   */
  InstanceName?: string
  /**
   * 目的资产公网ip
   */
  PublicIp?: string
  /**
   * 目的资产内网ip
   */
  PrivateIp?: string
  /**
   * 目的资产网段信息
   */
  Cidr?: string
  /**
   * 目的模板名称
   */
  ParameterName?: string
  /**
   * 端口模板名称
   */
  ProtocolPortName?: string
  /**
   * 自动化任务信息
   */
  BetaList?: Array<EnterpriseSecurityGroupRuleBetaInfo>
  /**
   * 规则id  等同RuleUuid
   */
  Id?: number
  /**
   * 域名解析的IP统计
   */
  DnsParseCount?: SgDnsParseCount
  /**
   * 规则创建时间
   */
  CreateTime?: string
  /**
   * 规则最近更新时间
   */
  UpdateTime?: string
  /**
   * 规则分区，1最前分区，2中间分区，3最后分区
   */
  RulePartition?: number
  /**
   * 规则生效范围，SG安全组，LH轻量服务器
   */
  Scope?: string
}

/**
 * UpdateCheckCcnNonDirectFlag返回参数结构体
 */
export interface UpdateCheckCcnNonDirectFlagResponse {
  /**
   * <p>检测更新状态<br>&quot;Checked&quot;：重新检测完成<br>&quot;Checking&quot;: 正在重新检测中，请稍后刷新状态查看</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFwSyncStatus请求参数结构体
 */
export interface DescribeFwSyncStatusRequest {
  /**
   * <p>查询的同步状态类型：Route,同步路由状态</p>
   */
  SyncType?: string
}

/**
 * DeleteNatFwDnatRule返回参数结构体
 */
export interface DeleteNatFwDnatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpcAcRule返回参数结构体
 */
export interface ModifyVpcAcRuleResponse {
  /**
   * 修改后的规则 ID 列表，成功时包含请求规则的 Uuid。
   */
  RuleUuids?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBlockList请求参数结构体
 */
export interface DescribeBlockListRequest {
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 长度
   */
  Limit: number
  /**
   * 频率类型
   */
  StatTimeSpan: number
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 查询条件
   */
  SearchValue?: string
  /**
   * 升序降序
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
  /**
   * 方向 1 入 0出
   */
  Direction?: string
  /**
   * 是否处置 1处置 0不是
   */
  ByPass?: string
  /**
   * 来源
   */
  Source?: string
  /**
   * 国家 1国内
   */
  Country?: string
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 日志来源 move：vpc间防火墙
   */
  LogSource?: string
}

/**
 * ModifyBlockIgnoreRuleNew请求参数结构体
 */
export interface ModifyBlockIgnoreRuleNewRequest {
  /**
   * 规则
   */
  Rule: BanAndAllowRule
  /**
   * RuleType: 1放通列表 2外部IP 3域名 4情报 5资产 6自定义规则  7入侵防御规则
   */
  RuleType: number
}

/**
 * DescribeCfwRiskOverview请求参数结构体
 */
export interface DescribeCfwRiskOverviewRequest {
  /**
   * <p>自定义开始时间。可选，格式 YYYY-MM-DD HH:MM:SS；必须和 EndTime 同时传。</p>
   */
  StartTime?: string
  /**
   * <p>自定义结束时间。可选，格式 YYYY-MM-DD HH:MM:SS；必须和 StartTime 同时传。</p>
   */
  EndTime?: string
}

/**
 * RemoveNatAcRule返回参数结构体
 */
export interface RemoveNatAcRuleResponse {
  /**
   * 回显请求中的规则 ID 列表；全量删除返回 [-1]。
   */
  RuleUuid?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RuleType=6 使用的自定义放通规则详情。SrcIP、DstIP 至少一项必须是具体 IP；另一项可省略或使用与具体 IP 同版本的通配网段 0.0.0.0/0、::/0。两项均为具体 IP 时，当前处理器拒绝源 IPv6、目的 IPv4 的组合；源 IPv4、目的 IPv6 的反向组合当前不受该版本检查限制。资产判定中，私网 IPv4 和任意 IPv6 直接通过，公网 IPv4 必须存在于当前账号 cfw_public_ip。两项均为具体 IP 时至少一项须通过资产判定；仅一项为具体 IP 且另一项省略或为同版本通配网段时，若实际 FwType 包含互联网边界位 1，该具体 IP 也必须通过资产判定。处理器据此计算规则方向和适用引擎。
 */
export interface CustomWhiteRule {
  /**
   * 自定义规则的目的地址。SrcIP、DstIP 至少一项必须是具体 IP；本字段仅在 SrcIP 为具体 IP 时可省略或使用与 SrcIP 同版本的通配网段。两项均为具体 IP 时，源 IPv6、目的 IPv4 会被拒绝，源 IPv4、目的 IPv6 当前不受该版本检查限制。私网 IPv4 和任意 IPv6 直接通过资产判定，公网 IPv4 必须存在于当前账号 cfw_public_ip；是否要求通过资产判定由两侧地址与实际 FwType 联动决定。
   */
  DstIP?: string
  /**
   * 自定义规则关联的入侵防御规则 ID。调用 DescribeIpsRuleListNew，传目标规则的查询条件，仅使用 Data[].RuleID；该值必须可转换为整数且对应现有入侵防御规则。
   */
  IdsRuleId?: string
  /**
   * 自定义规则名称；处理器不对内容做额外校验。
   */
  IdsRuleName?: string
  /**
   * 自定义规则的源地址。SrcIP、DstIP 至少一项必须是具体 IP；本字段仅在 DstIP 为具体 IP 时可省略或使用与 DstIP 同版本的通配网段。两项均为具体 IP 时，源 IPv6、目的 IPv4 会被拒绝，源 IPv4、目的 IPv6 当前不受该版本检查限制。私网 IPv4 和任意 IPv6 直接通过资产判定，公网 IPv4 必须存在于当前账号 cfw_public_ip；是否要求通过资产判定由两侧地址与实际 FwType 联动决定。
   */
  SrcIP?: string
}

/**
 * DescribeFwEdgeIps返回参数结构体
 */
export interface DescribeFwEdgeIpsResponse {
  /**
   * <p>ip 开关列表</p>
   */
  Data?: Array<EdgeIpInfo>
  /**
   * <p>ip 开关列表个数</p>
   */
  Total?: number
  /**
   * <p>地域列表</p>
   */
  RegionLst?: Array<string>
  /**
   * <p>实例类型列表</p>
   */
  InstanceTypeLst?: Array<string>
  /**
   * <p>串行模式开关个数</p>
   */
  SerilCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfwLogs请求参数结构体
 */
export interface DescribeCfwLogsRequest {
  /**
   * 日志类型。首次查询必填；使用 NextToken 续查时不能传。cfw_netflow_border=互联网边界流量，cfw_netflow_vpc=VPC 东西向流量，cfw_netflow_nat=NAT 防火墙流量，cfw_netflow_nta=NDR/NTA 流量，cfw_netflow_dns=DNS 防火墙日志，cfw_rule_threatinfo=入侵防御/威胁情报告警，cfw_rule_acl=互联网边界访问控制日志，cfw_rule_vpc_acl=VPC 访问控制日志，cfw_rule_nat_acl=NAT 访问控制日志，cfw_ndr_subject_risk=NDR 专题风险，cfw_ndr_dataleak_entry=NDR 敏感数据泄露，cfw_ndr_ai_audit=NDR AI 应用识别与大模型调用审计，cfw_feature_collect=统计特征与基线异常，cfw_behavior_collect=Beacon/DNS/端口/证书/VPC 互访行为，operate_log_all=操作审计日志。
   */
  LogType?: string
  /**
   * 日志过滤表达式。默认 * 表示不过滤；例如 src_ip:1.1.1.1。可查询字段随 LogType 变化，应优先使用对应 Items 中已返回的字段名，不要猜测不存在的字段；使用 NextToken 续查时不能传。
   */
  Query?: string
  /**
   * 查询起始时间。支持 RFC3339、YYYY-MM-DD HH:MM:SS、YYYY-MM-DD 或 Unix 时间戳；传入后从该时间向后查询 TimeRange；使用 NextToken 续查时不能传。
   */
  StartTime?: string
  /**
   * 查询时间范围。默认 1h；格式为正整数加单位 m/h/d，例如 5m、1h、24h、7d；使用 NextToken 续查时不能传。
   */
  TimeRange?: string
  /**
   * 单页返回条数。首次查询可选，默认 100；取值 1 至 1000；使用 NextToken 续查时不能传。
   */
  Limit?: number
  /**
   * 上一页 Response.Data 返回的不透明续查 token。首次查询不传；续查时只传 NextToken。无效、篡改或租户不匹配会被拒绝。
   */
  NextToken?: string
}

/**
 * ccn实例开关信息
 */
export interface CcnSwitchInfo {
  /**
   * ccn的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CcnId: string
  /**
   * 开关接入模式，1:自动接入,2:手动接入
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchMode: number
  /**
   * 引流路由方法 0:多路由表, 1:策略路由
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoutingMode?: number
  /**
   * 地域级别CIDR配置
   */
  RegionCidrConfigs?: Array<RegionCidrConfig>
  /**
   * 互联集合对列表
   */
  InterconnectPairs?: Array<InterconnectPair>
  /**
   * 引流通用CIDR(废弃)
   */
  FwVpcCidr?: string
}

/**
 * SetNatFwEip请求参数结构体
 */
export interface SetNatFwEipRequest {
  /**
   * <p>bind：绑定eip；unbind：解绑eip；newAdd：新增防火墙弹性公网ip</p>
   */
  OperationType: string
  /**
   * <p>防火墙实例id</p>
   */
  CfwInstance: string
  /**
   * <p>当OperationType 为bind或unbind操作时，使用该字段。</p>
   */
  EipList?: Array<string>
}

/**
 * DescribeTLogIpList返回参数结构体
 */
export interface DescribeTLogIpListResponse {
  /**
   * 数据集合
   */
  Data?: Array<StaticInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopSecurityGroupRuleDispatch返回参数结构体
 */
export interface StopSecurityGroupRuleDispatchResponse {
  /**
   * true代表成功，false代表错误
   */
  Status?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwInfoCount请求参数结构体
 */
export type DescribeNatFwInfoCountRequest = null

/**
 * SetNatFwDnatRule请求参数结构体
 */
export interface SetNatFwDnatRuleRequest {
  /**
   * 0：cfw新增模式，1：cfw接入模式。
   */
  Mode: number
  /**
   * 操作类型，可选值：add，del，modify。
   */
  OperationType: string
  /**
   * 防火墙实例id，该字段必须传递。
   */
  CfwInstance?: string
  /**
   * 添加或删除操作的Dnat规则列表。
   */
  AddOrDelDnatRules?: Array<CfwNatDnatRule>
  /**
   * 修改操作的原始Dnat规则
   */
  OriginDnat?: CfwNatDnatRule
  /**
   * 修改操作的新的Dnat规则
   */
  NewDnat?: CfwNatDnatRule
}

/**
 * StopSecurityGroupRuleDispatch请求参数结构体
 */
export interface StopSecurityGroupRuleDispatchRequest {
  /**
   * 值为1，中止全部
   */
  StopType?: number
}

/**
 * 企业安全组自动化任务信息
 */
export interface EnterpriseSecurityGroupRuleBetaInfo {
  /**
   * 任务id
   */
  TaskId?: number
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 时间
   */
  LastTime?: string
}

/**
 * 字段可选项枚举值
 */
export interface FieldOption {
  /**
   * 字段展示值
   */
  Text?: string
  /**
   * 字段存储值
   */
  Value?: string
}

/**
 * DescribeIpsModeSwitch请求参数结构体
 */
export type DescribeIpsModeSwitchRequest = null

/**
 * ModifyBlockTop返回参数结构体
 */
export interface ModifyBlockTopResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwVpcDnsLst返回参数结构体
 */
export interface DescribeNatFwVpcDnsLstResponse {
  /**
   * <p>nat防火墙vpc dns 信息数组</p>
   */
  VpcDnsSwitchLst?: Array<VpcDnsInfo>
  /**
   * <p>返回参数 success成功 failed 失败</p>
   */
  ReturnMsg?: string
  /**
   * <p>开关总条数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAclRegInfo返回参数结构体
 */
export interface DescribeAclRegInfoResponse {
  /**
   * 规则支持的地域列表
   */
  Data?: Array<AclRegInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBlockIgnoreRuleList返回参数结构体
 */
export interface CreateBlockIgnoreRuleListResponse {
  /**
   * 成功返回
   */
  List?: Array<IocListData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警中心概览数据
 */
export interface TLogInfo {
  /**
   * 封禁列表
   */
  BanNum?: number
  /**
   * 暴力破解
   */
  BruteForceNum?: number
  /**
   * 待处置告警
   */
  HandleNum?: number
  /**
   * 网络探测
   */
  NetworkNum?: number
  /**
   * 失陷主机
   */
  OutNum?: number
  /**
   * 漏洞攻击
   */
  VulNum?: number
}

/**
 * DescribeLogs返回参数结构体
 */
export interface DescribeLogsResponse {
  /**
   * 日志列表
   */
  Data?: string
  /**
   * 总条数
   */
  Total?: number
  /**
   * 返回状态码 0 成功 非0不成功
   */
  ReturnCode?: number
  /**
   * 返回信息  success 成功 其他 不成功
   */
  ReturnMsg?: string
  /**
   * 七层协议，NTA日志有效
   */
  AppProtocolList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterVpcFwSwitchs请求参数结构体
 */
export interface DescribeClusterVpcFwSwitchsRequest {
  /**
   * <p>需要查询的索引，特定场景使用，可不填</p>
   */
  Index?: string
  /**
   * <p>过滤条件组合</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>每页条数</p>
   */
  Limit?: number
  /**
   * <p>偏移值</p>
   */
  Offset?: number
  /**
   * <p>检索的起始时间，可不传</p>
   */
  StartTime?: string
  /**
   * <p>检索的截止时间，可不传</p>
   */
  EndTime?: string
  /**
   * <p>desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值</p>
   */
  Order?: string
  /**
   * <p>排序所用到的字段</p>
   */
  By?: string
}

/**
 * DescribeFwGroupIdNames返回参数结构体
 */
export interface DescribeFwGroupIdNamesResponse {
  /**
   * <p>防火墙(组列表)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<FwGroupIdName>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfwAlerts请求参数结构体
 */
export interface DescribeCfwAlertsRequest {
  /**
   * <p>告警开始时间。可选，格式 YYYY-MM-DD HH:MM:SS；默认查询最近 1 小时。</p>
   */
  StartTime?: string
  /**
   * <p>告警结束时间。可选，格式 YYYY-MM-DD HH:MM:SS；默认当前时间。</p>
   */
  EndTime?: string
  /**
   * <p>告警严重级别过滤。可选；枚举 low、middle、high。</p>
   */
  Level?: string
  /**
   * <p>流量方向过滤。可选；枚举 outbound 出站、inbound 入站、lateral 横向。</p>
   */
  Direction?: string
  /**
   * <p>处置状态过滤。可选；枚举 unhandled、handled、blocked、passed、isolated、ignored。</p>
   */
  ActionStatus?: string
  /**
   * <p>攻击链阶段过滤。可选；枚举 recon、brute_force、delivery、exploit、c2、lateral_movement、exfiltration。</p>
   */
  KillChain?: string
  /**
   * <p>攻击结果过滤。可选；枚举 attempt、success、fail、unknown。</p>
   */
  AttackResult?: string
  /**
   * <p>IPS 策略动作过滤。可选；枚举 observe、block。</p>
   */
  Strategy?: string
  /**
   * <p>攻击事件名称关键字过滤。可选，例如 SQL注入、暴力破解、恶意域名访问。</p>
   */
  EventName?: string
  /**
   * <p>精确告警事件 ID 过滤。用于指定事件的写操作前检查和写操作后核验；事件重新聚合时返回原请求 ID 和当前事件 ID。无匹配返回空结果，多匹配或定位过程异常时失败，不退化为宽查询。</p>
   */
  EventId?: string
  /**
   * <p>源 IP 过滤。可选。</p>
   */
  SrcIp?: string
  /**
   * <p>目的 IP 过滤。可选。</p>
   */
  DstIp?: string
  /**
   * <p>云资源实例 ID 过滤。可选，例如 ins-xxxxxxxx。</p>
   */
  InstanceId?: string
  /**
   * <p>单页返回告警数。可选，默认 10，最大 50。</p>
   */
  Limit?: number
  /**
   * <p>分页偏移。可选，默认 0。</p>
   */
  Offset?: number
  /**
   * <p>排序字段。可选，默认 EndTime；枚举 EndTime、StartTime、Count。排序字段。可选，默认 EndTime；枚举 EndTime、StartTime、Count；Count 表示按单个聚合告警事件的告警发生次数/命中次数排序，对应返回中的 occurrence_count</p>
   */
  OrderBy?: string
  /**
   * <p>排序方向。可选，默认 desc；枚举 desc、asc。</p>
   */
  Order?: string
}

/**
 * DescribeSerialRegion返回参数结构体
 */
export interface DescribeSerialRegionResponse {
  /**
   * <p>串行地域带宽分配</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SerialRegionLst?: Array<SerialRegionInfo>
  /**
   * <p>剩余可分配通用带宽 单位M</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnUsedWidth?: number
  /**
   * <p>可配置实例个数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnUsedQuota?: number
  /**
   * <p>旁路带宽数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BypassWidth?: number
  /**
   * <p>赠送的旁路带宽数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendBypassWidth?: number
  /**
   * <p>互联网边界防火墙总带宽</p>
   */
  EdgeWidth?: number
  /**
   * <p>互联网边界弹性开关</p>
   */
  EdgeElasticSwitch?: number
  /**
   * <p>互联网边界弹性带宽值</p>
   */
  EdgeElasticBandwidth?: number
  /**
   * <p>互联网边界弹性带宽上限</p>
   */
  EdgeElasticBandwidthLimit?: number
  /**
   * <p>互联网边界防火墙计量开关</p><p>枚举值：</p><ul><li>0： 关闭</li><li>1： 打开</li></ul>
   */
  EdgeElasticTrafficSwitch?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAddressTemplate返回参数结构体
 */
export interface DeleteAddressTemplateResponse {
  /**
   * 删除结果,0成功
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfwEips返回参数结构体
 */
export interface DescribeCfwEipsResponse {
  /**
   * <p>返回值信息</p>
   */
  NatFwEipList?: Array<NatFwEipsInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多主题检索返回信息
 */
export interface SearchLogTopics {
  /**
   * 多日志主题检索对应的错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errors?: Array<SearchLogErrors>
  /**
   * 多日志主题检索各日志主题信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Infos?: Array<SearchLogInfos>
}

/**
 * DescribeSwitchLists请求参数结构体
 */
export interface DescribeSwitchListsRequest {
  /**
   * 防火墙状态  0: 关闭，1：开启
   */
  Status?: number
  /**
   * 资产类型 CVM/NAT/VPN/CLB/其它
   */
  Type?: string
  /**
   * 地域 上海/重庆/广州，等等
   */
  Area?: string
  /**
   * 搜索值  例子："{"common":"106.54.189.45"}"
   */
  SearchValue?: string
  /**
   * 条数  默认值:10
   */
  Limit?: number
  /**
   * 偏移值 默认值: 0
   */
  Offset?: number
  /**
   * 排序，desc：降序，asc：升序
   */
  Order?: string
  /**
   * 排序字段 PortTimes(风险端口数)
   */
  By?: string
}

/**
 * DeleteAddressTemplate请求参数结构体
 */
export interface DeleteAddressTemplateRequest {
  /**
   * 模板id
   */
  Uuid: string
}

/**
 * 关联实例信息
 */
export interface AttachInsInfo {
  /**
   * 实例对象可以是cvm类型:ins-ad21xuds1形式;路由表类型:rtb-da12daxd形式;vpc类型:vpc-1dxdad2d形式
   */
  InsId?: string
  /**
   * 实例对象名称
   */
  InsName?: string
  /**
   * 实例的cidr
   */
  Cidr?: string
}

/**
 * 多种VPC墙模式开关结构
 */
export interface FwGroupSwitch {
  /**
   * 防火墙实例的开关模式 1: 单点互通 2: 多点互通 3: 全互通 4: 自定义路由
   */
  SwitchMode?: number
  /**
   * 防火墙开关ID
支持三种类型
1. 边开关(单点互通)
2. 点开关(多点互通)
3. 全开关(全互通)
   */
  SwitchId?: string
}

/**
 * ModifyEnterpriseSecurityDispatchStatus请求参数结构体
 */
export interface ModifyEnterpriseSecurityDispatchStatusRequest {
  /**
   * 0：打开立即下发开关；

1：关闭立即下发开关；

2：关闭立即下发开关情况下，触发开始下发
   */
  Status: number
}

/**
 * ModifyStorageSetting返回参数结构体
 */
export interface ModifyStorageSettingResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlertCenterRule返回参数结构体
 */
export interface CreateAlertCenterRuleResponse {
  /**
   * 返回状态码：
0 成功
非0 失败
   */
  ReturnCode?: number
  /**
   * 返回信息：
success 成功
其他
   */
  ReturnMsg?: string
  /**
   * 处置状态码：
0  处置成功
-1 通用错误，不用处理
-3 表示重复，需重新刷新列表
其他
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwInstance请求参数结构体
 */
export type DescribeNatFwInstanceRequest = null

/**
 * ModifyNatFwVpcDnsSwitch返回参数结构体
 */
export interface ModifyNatFwVpcDnsSwitchResponse {
  /**
   * <p>修改成功</p>
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBlockIgnoreRuleNew请求参数结构体
 */
export interface CreateBlockIgnoreRuleNewRequest {
  /**
   * 规则类型：1 IP 封禁，2 IP 放通，3 域名放通，4 情报放通，5 资产放通，6 自定义放通。
   */
  RuleType: number
  /**
   * 待新增规则列表；可为空，空数组返回成功且不新增规则。
   */
  Rules: Array<BanAndAllowRule>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * 互斥列表冲突处理，仅 RuleType=1 或 2 生效。0 表示保留已有互斥规则并跳过冲突新增项；1 表示保留新增项并删除同 IP、同方向的互斥规则；省略时不处理互斥冲突。填写本字段时，同一请求内相同 Ioc 会合并为一项，DirectionList 按输入顺序合并，时间和备注采用首次出现项的值。已有同类型、同 Ioc 规则的方向会与本次方向合并，其它字段按本次请求更新。
   */
  CoverDuplicate?: number
}

/**
 * DescribeCcnInstanceRegionStatus请求参数结构体
 */
export interface DescribeCcnInstanceRegionStatusRequest {
  /**
   * <p>云联网ID</p>
   */
  CcnId: string
  /**
   * <p>要查询引流网络部署状态的云联网关联的实例ID列表</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>引流路由方法 0:多路由表, 1:策略路由</p>
   */
  RoutingMode?: number
}

/**
 * DescribeNatAcRule返回参数结构体
 */
export interface DescribeNatAcRuleResponse {
  /**
   * <p>总条数</p>
   */
  Total?: number
  /**
   * <p>nat访问控制列表数据</p>
   */
  Data?: Array<DescAcItem>
  /**
   * <p>未过滤的总条数</p>
   */
  AllTotal?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 离线导出任务
 */
export interface OfflineExportTask {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 日志总数
   */
  DataLength?: number
  /**
   * 任务状态，0等待下载，1下载中，2下载完成，3下载失败，4文件过期
   */
  Status?: number
  /**
   * 文件过期时间
   */
  ExpireTime?: string
  /**
   * 下载进度
   */
  Progress?: number
  /**
   * 导出失败信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorInfo?: string
  /**
   * 是否使用Cos
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseUserCos?: number
}

/**
 * AddAclRule请求参数结构体
 */
export interface AddAclRuleRequest {
  /**
   * 待添加的互联网边界规则列表，不能为空。每条规则均须满足方向、访问源和目的、动作、范围、协议端口及模板限制；整个请求还须满足规则配额和可生效规则数量限制。账号相关值必须来自只读查询：地址模板调用 DescribeAddressTemplateList，请求用 TemplateType=1 或 5 过滤，并确认返回项 Data[].Type 为 1 或 5；将 Data[].Uuid（mb_ 前缀）写入对应 Content，不要使用 Data[].TemplateId（ip-/dm- 前缀）。协议端口模板请求用 TemplateType=6 过滤，并将 Data[].TemplateId（pp- 前缀）写入 ParamTemplateId。资产实例调用 DescribeCfwAssets，解析返回结果后使用 assets[].instance_id；资产分组调用 DescribeResourceGroupNew，传 QueryType=resource、GroupId="0"、ShowType=all，解析返回结果后使用 GroupId；资源标签传 QueryType=tag，跳过“全部资产”根节点，以一级节点 GroupName 为 Key、所选二级子节点 GroupName 为 Value 构造 JSON，不要写入 GroupId。地域调用 DescribeAclRegInfo：Scope=serial 传 FwType=["SERIAL"]，Scope=side 传 FwType=["BYPASS"]，Scope=all 同时传两项，并使用 Data[].RegionCode。不得使用展示名称或自行拼接。覆盖导入的范围仅由首条规则的 Direction 决定。
   */
  Rules: Array<CreateRuleItem>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * 添加方式。省略或空字符串表示普通新增；insert_rule 表示指定位置新增；batch_import 表示非覆盖批量导入；batch_import_cover 表示覆盖导入，会删除首条规则 Direction 对应的现有可操作规则后再添加 Rules，添加失败时已删除的规则不会恢复，风险极高。覆盖范围仅由首条规则决定，调用方应确保 Rules 的 Direction 一致。仅支持上述取值。
   */
  From?: string
}

/**
 * DescribeVpcFwGroupSwitch请求参数结构体
 */
export interface DescribeVpcFwGroupSwitchRequest {
  /**
   * <p>每页条数</p>
   */
  Limit: number
  /**
   * <p>偏移值</p>
   */
  Offset: number
  /**
   * <p>过滤条件组合</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>检索的起始时间，可不传</p>
   */
  StartTime?: string
  /**
   * <p>检索的截止时间，可不传</p>
   */
  EndTime?: string
  /**
   * <p>desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值</p>
   */
  Order?: string
  /**
   * <p>排序所用到的字段</p>
   */
  By?: string
}

/**
 * DescribeOfflineExportTemporaryCredentials返回参数结构体
 */
export interface DescribeOfflineExportTemporaryCredentialsResponse {
  /**
   * <p>返回状态码 0 成功 非0不成功</p>
   */
  ReturnCode?: number
  /**
   * <p>返回信息  success 成功 其他 不成功</p>
   */
  ReturnMsg?: string
  /**
   * <p>临时下载链接</p>
   */
  Link?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAcRule返回参数结构体
 */
export interface ModifyAcRuleResponse {
  /**
   * 状态值，0:操作成功，非0：操作失败
   */
  Status?: number
  /**
   * 返回多余的信息
   */
  Info?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTableStatus返回参数结构体
 */
export interface DescribeTableStatusResponse {
  /**
   * 0：正常，其它：不正常
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 入侵防御放通封禁规则
 */
export interface BlockIgnoreRule {
  /**
   * 规则类型，取值：1 封禁，2外部IP，3域名，4情报，5assets，6自定义策略，7入侵防御规则id （2-7属于白名单类型）
   */
  RuleType?: number
  /**
   * 规则ip或白名单内容
   */
  Ioc?: string
  /**
   * 资产实例名称、自定义策略名称等
   */
  IocName?: string
  /**
   * 白名单信息
   */
  IocInfo?: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * IP
   */
  IP?: string
  /**
   * 危险等级
   */
  Level?: string
  /**
   * 来源事件名称
   */
  EventName?: string
  /**
   * 方向：1入站，0出站
   */
  Direction?: number
  /**
   * 所有方向聚合成字符串
   */
  DirectionList?: string
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 地理位置
   */
  Address?: string
  /**
   * 规则类型：1封禁，2放通
   */
  Action?: number
  /**
   * 规则生效开始时间
   */
  StartTime?: string
  /**
   * 规则生效结束时间
   */
  EndTime?: string
  /**
   * 忽略原因
   */
  IgnoreReason?: string
  /**
   * 安全事件来源
   */
  Source?: string
  /**
   * 规则id
   */
  UniqueId?: string
  /**
   * 规则命中次数
   */
  MatchTimes?: number
  /**
   * 国家
   */
  Country?: string
  /**
   * 备注
   */
  Comment?: string
  /**
   * 上次命中时间
   */
  LastHitTime?: string
  /**
   * 自定义规则细节
   */
  CustomRule?: CustomWhiteRule
  /**
   * 1 border 2 nat 4 vpc 8 border-serial
   */
  FwType?: number
}

/**
 * NAT集群防火墙地域部署状态查询
 */
export interface NatClusterRegionStatusQuery {
  /**
   * <p>云联网ID</p>
   */
  CcnId: string
  /**
   * <p>NAT网关ID</p>
   */
  NatInsId: string
  /**
   * <p>资产类型，取值：nat_ccn-CCN+NAT场景，nat-独立NAT场景</p>
   */
  AssetType: string
  /**
   * <p>引流路由方法，0-多路由表模式，1-策略路由模式</p>
   */
  RoutingMode?: number
}

/**
 * 未处置事件详情
 */
export interface UnHandleEvent {
  /**
   * 伪攻击链类型
   */
  EventTableListStruct?: Array<UnHandleEventDetail>
  /**
   * 1 是  0否
   */
  BaseLineUser?: number
  /**
   * 1 打开 0 关闭
   */
  BaseLineInSwitch?: number
  /**
   * 1 打开 0 关闭
   */
  BaseLineOutSwitch?: number
  /**
   * vpc间防火墙实例数量
   */
  VpcFwCount?: number
}

/**
 * vpc区域数据详情
 */
export interface VpcZoneData {
  /**
   * 可用区
   */
  Zone: string
  /**
   * vpc节点地域
   */
  Region: string
}

/**
 * 数据库白名单规则数据
 */
export interface DatabaseWhiteListRuleData {
  /**
   * 访问源
   */
  SourceIp: string
  /**
   * 访问源类型，1 ip；6 实例；100 资源分组
   */
  SourceType: number
  /**
   * 访问目的
   */
  TargetIp: string
  /**
   * 访问目的类型，1 ip；6 实例；100 资源分组
   */
  TargetType: number
  /**
   * 规则描述
   */
  Detail: string
  /**
   * 是否地域规则，0不是 1是
   */
  IsRegionRule: number
  /**
   * 是否云厂商规则，0不是 1 时
   */
  IsCloudRule: number
  /**
   * 是否启用，0 不启用，1启用
   */
  Enable: number
  /**
   * 地域码1
   */
  FirstLevelRegionCode?: number
  /**
   * 地域码2
   */
  SecondLevelRegionCode?: number
  /**
   * 地域名称1
   */
  FirstLevelRegionName?: string
  /**
   * 地域名称2
   */
  SecondLevelRegionName?: string
  /**
   * 云厂商码
   */
  CloudCode?: string
}

/**
 * DescribeTLogInfo返回参数结构体
 */
export interface DescribeTLogInfoResponse {
  /**
   * "NetworkNum":网络扫描探测
 "HandleNum": 待处理事件
"BanNum": 
  "VulNum": 漏洞利用
  "OutNum": 失陷主机
"BruteForceNum": 0
   */
  Data?: TLogInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 策略路由预编排配额报告
 */
export interface PolicyRoutePreCheckReport {
  /**
   * 本次编排生成的下一跳数量
   */
  NextHopCount?: number
  /**
   * 下一跳上限
   */
  NextHopLimit?: number
  /**
   * 本次编排生成的匹配规则数
   */
  MatchRuleCount?: number
  /**
   * 匹配规则上限
   */
  MatchRuleLimit?: number
  /**
   * 云上已有匹配规则数（其他防火墙类型占用）
   */
  CloudExistingRuleCount?: number
  /**
   * 云上已有下一跳数（其他防火墙类型占用）
   */
  CloudExistingNextHopCount?: number
  /**
   * 可用匹配规则配额 = MatchRuleLimit - CloudExistingRuleCount - MatchRuleCount
   */
  AvailableRuleQuota?: number
  /**
   * 可用下一跳配额 = NextHopLimit - CloudExistingNextHopCount - NextHopCount
   */
  AvailableNextHopQuota?: number
}

/**
 * ACL 地理位置支持地域数据
 */
export interface AclRegInfo {
  /**
   * 地域KEY
   */
  RegionCode?: string
  /**
   * 地域名称
   */
  RegionName?: string
  /**
   * 上级地域信息
   */
  Parent?: string
  /**
   * 中文拼音首字母
   */
  ZhKey?: string
  /**
   * 英文首字母
   */
  EnKey?: string
  /**
   * 是否为地区
   */
  Area?: number
  /**
   * 是否为省份、城市
   */
  IsCity?: number
  /**
   * 序号
   */
  Num?: number
  /**
   * 是否支持旁路
   */
  ForBypass?: number
  /**
   * 是否支持串行
   */
  ForSerial?: number
  /**
   * 是否支持NAT
   */
  ForNat?: number
}

/**
 * DescribeCfwLogs返回参数结构体
 */
export interface DescribeCfwLogsResponse {
  /**
   * 查询结果。UTF-8 JSON object 字符串；调用方需解析 Response.Data。Items 是当前页日志数组，字段随 LogType 变化；TotalCount 是当前页返回条数，Limit 是页大小，LogType 和 TimeWindow 回显查询范围。HasMore=true 时必须保存并原样使用 NextToken 续查；HasMore=false 时分页结束。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAllPublicIPSwitchStatus返回参数结构体
 */
export interface ModifyAllPublicIPSwitchStatusResponse {
  /**
   * 接口返回信息
   */
  ReturnMsg?: string
  /**
   * 接口返回错误码，0请求成功  非0失败
   */
  ReturnCode?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 封禁或放通规则项，包含对象、适用方向和规则类型。
 */
export interface BanAndAllowRuleDel {
  /**
   * 规则的完整适用方向列表，多个值以逗号分隔：0 互联网出站，1 互联网入站，2 双向，3 东西向，4 情报误报反馈，5 内网访问源，6 内网访问目的。通过 DescribeBlockIgnoreList 查询时传顶层 Direction=""，并使用目标 Data[].DirectionList。
   */
  DirectionList?: string
  /**
   * 封禁或放通对象值。通过 DescribeBlockIgnoreList 查询并使用完全匹配目标的 Data[].Ioc。
   */
  Ioc?: string
  /**
   * 规则类型标识。通过 DescribeBlockIgnoreList 查询并使用目标 Data[].RuleType。常用值：1 封禁 IP，2 放通 IP，3 放通域名，4 威胁情报地址，5 资产实例，6 自定义策略，7 入侵防御规则，8 扩展 IP 规则，9 扩展自定义规则。
   */
  RuleType?: number
}

/**
 * DescribeCfwAlerts返回参数结构体
 */
export interface DescribeCfwAlertsResponse {
  /**
   * <p>查询结果。UTF-8 JSON object 字符串；调用方需解析 Response.Data。</p>
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业安全组规则内容。新增和修改规则内容共用此结构；字段的校验、缺省、归一化及在两种操作中的处理行为见各字段说明。
 */
export interface SecurityGroupRule {
  /**
   * 规则用途或使用场景的描述，不能为空，最多 100 个 Unicode 字符。
   */
  Description: string
  /**
   * 访问目的内容，非空且最多 512 字节，格式由 DestType 决定：net 使用 IPv4 IP/CIDR，且不接受裸地址 0.0.0.0，表示全部 IPv4 地址时使用 0.0.0.0/0；template 使用通过 VPC DescribeAddressTemplates 或 DescribeAddressTemplateGroups 查询的广州地域（ap-guangzhou）地址模板 ID，即 AddressTemplateId（ipm-）或 AddressTemplateGroupId（ipmg-）；instance 使用 DescribeCfwAssets 返回的 assets[].instance_id；resourcegroup 使用 DescribeResourceGroupNew（QueryType=resource）返回的 GroupId；tag 根据 DescribeResourceGroupNew（QueryType=tag）返回的 GroupName 构造 {\"Key\":\"标签键\",\"Value\":\"标签值\"}；region 使用 DescribeSecurityGroupRegionList 返回的 Data[].Region；dnsparse 使用合法域名并按小写处理，同时受域名解析配额限制。
   */
  DestContent: string
  /**
   * 访问目的类型，不区分大小写：net 表示 IP/CIDR，template 表示地址模板，instance 表示资产实例，resourcegroup 表示资产分组，tag 表示资源标签，region 表示资产地域，dnsparse 表示 DNS 解析匹配。内容必须与类型匹配，并且对当前账号有效。
   */
  DestType: string
  /**
   * 规则顺序的十进制整数字符串；-1 转换为 uint32 最大值。新增时 Type=0 或 1 会按 Data 数组顺序重新计算最终 Sequence；Type=2 使用首条规则的 OrderIndex 作为插入位置，超过当前最大 Sequence 时按末尾新增处理。修改规则内容时 -1 会被拒绝，超过当前最大 Sequence 的值归一化为当前最大 Sequence。
   */
  OrderIndex: string
  /**
   * 访问控制动作，不区分大小写：accept 表示放行，drop 表示拒绝，log 表示观察；isolateinaccept 表示放行访问隔离资产的白名单流量，isolateindrop 表示阻断访问隔离资产的其它流量，isolateoutaccept 表示放行隔离资产访问白名单目标，isolateoutdrop 表示阻断隔离资产访问其它目标。
   */
  RuleAction: string
  /**
   * 访问源内容，非空且最多 512 字节，格式由 SourceType 决定：net 使用 IPv4 IP/CIDR，且不接受裸地址 0.0.0.0，表示全部 IPv4 地址时使用 0.0.0.0/0；template 使用通过 VPC DescribeAddressTemplates 或 DescribeAddressTemplateGroups 查询的广州地域（ap-guangzhou）地址模板 ID，即 AddressTemplateId（ipm-）或 AddressTemplateGroupId（ipmg-）；instance 使用 DescribeCfwAssets 返回的 assets[].instance_id；resourcegroup 使用 DescribeResourceGroupNew（QueryType=resource）返回的 GroupId；tag 根据 DescribeResourceGroupNew（QueryType=tag）返回的 GroupName 构造 {\"Key\":\"标签键\",\"Value\":\"标签值\"}；region 使用 DescribeSecurityGroupRegionList 返回的 Data[].Region。
   */
  SourceContent: string
  /**
   * 访问源类型，不区分大小写：net 表示 IP/CIDR，template 表示地址模板，instance 表示资产实例，resourcegroup 表示资产分组，tag 表示资源标签，region 表示资产地域。内容必须与类型匹配，并且对当前账号有效；dnsparse 作为 SourceType 时仅按普通字符串保存，不提供 DNS 解析匹配，请勿使用；DNS 解析匹配仅用于 DestType。
   */
  SourceType: string
  /**
   * 规则状态字符串，不区分大小写；true 表示启用，false 表示禁用，省略或空字符串在结构转换时按 true 解析。普通新增最终使用账号的新增规则默认状态；batch_import 和 batch_import_cover 新增保留 Data.Enable 的解析结果；修改规则内容时保留原规则状态，因此 Data.Enable 不改变该修改的启停结果。
   */
  Enable?: string
  /**
   * 规则 ID，使用十进制数字字符串。普通新增由系统分配；仅 IsUseId=1 的新增请求采用 Data.Id。修改规则内容时忽略 Data.Id，并保留 RuleUuid 指定的规则 ID。
   */
  Id?: string
  /**
   * 访问控制端口字符串，最多 200 字节。未使用服务模板时必填，可传 1..65535 的单端口、斜杠连接的端口范围、最多 15 个逗号分隔项，或 -1/-1 表示全部端口；Protocol 为 ANY 或 ICMP 时必须为 -1/-1。使用 ServiceTemplateId 时，Protocol 和 Port 可同时省略或留空；如填写非空值则必须为 Protocol=ANY、Port=-1/-1。
   */
  Port?: string
  /**
   * IPv4 企业安全组协议，使用区分大小写的大写值 ANY、TCP、UDP 或 ICMP；ANY 表示所有 IPv4 协议。未使用服务模板时必填，ANY 和 ICMP 必须搭配 Port=-1/-1；使用 ServiceTemplateId 时，Protocol 和 Port 可同时省略或留空，如填写非空值则必须为 Protocol=ANY、Port=-1/-1。ICMPv6 使用独立的 IPv6 企业安全组接口。
   */
  Protocol?: string
  /**
   * 规则生效范围，使用大写 SG、LH、NONE 或无空格的逗号分隔组合；SG 表示安全组，LH 表示轻量应用服务器，NONE 表示未设置范围。新增时省略默认为 SG；修改规则内容时省略或使用 NONE 均保留原范围。组合项会去重。范围包含 LH 时，SourceType、DestType 均不能为 template，且不能使用 ServiceTemplateId。
   */
  Scope?: string
  /**
   * 协议端口模板 ID，最多 50 字节。仅支持通过 VPC DescribeServiceTemplates 或 DescribeServiceTemplateGroups 查询的广州地域（ap-guangzhou）服务模板，即 ServiceTemplateId（ppm-）或 ServiceTemplateGroupId（ppmg-）。非空时 Protocol 和 Port 可同时省略或留空；如填写非空值则必须为 Protocol=ANY、Port=-1/-1。Scope 包含 LH 时不能使用服务模板。
   */
  ServiceTemplateId?: string
  /**
   * 保留字段。新增和修改请求均忽略 Uid，无法通过该字段指定或保留规则标识，建议省略。
   */
  Uid?: string
}

/**
 * ModifySecurityGroupItemRuleStatus返回参数结构体
 */
export interface ModifySecurityGroupItemRuleStatusResponse {
  /**
   * 状态值，0：修改成功，非0：修改失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志结果信息
 */
export interface LogInfo {
  /**
   * 日志时间，单位ms
   */
  Time?: number
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 日志主题名称
   */
  TopicName?: string
  /**
   * 日志来源IP
   */
  Source?: string
  /**
   * 日志文件名称
   */
  FileName?: string
  /**
   * 日志上报请求包的ID
   */
  PkgId?: string
  /**
   * 请求包内日志的ID
   */
  PkgLogId?: string
  /**
   * 日志内容的Json序列化字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogJson?: string
  /**
   * 日志来源主机名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostName?: string
  /**
   * 原始日志(仅在日志创建索引异常时有值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawLog?: string
  /**
   * 日志创建索引异常原因(仅在日志创建索引异常时有值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexStatus?: string
}

/**
 * DeleteBlockIgnoreRuleList返回参数结构体
 */
export interface DeleteBlockIgnoreRuleListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNDRAssetIdentificationList请求参数结构体
 */
export interface DescribeNDRAssetIdentificationListRequest {
  /**
   * 每页条数
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 排序方式，asc正序 desc倒序
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
  /**
   * 查询过滤条件，多个条件之间为AND的关系
   */
  Filters?: Array<OperatorFilter>
}

/**
 * DescribeNatCcnFwSwitch请求参数结构体
 */
export interface DescribeNatCcnFwSwitchRequest {
  /**
   * <p>NAT防火墙实例ID</p>
   */
  NatInsId: string
  /**
   * <p>云联网实例ID</p>
   */
  CcnId: string
}

/**
 * DescribeCfwAnalysisData请求参数结构体
 */
export interface DescribeCfwAnalysisDataRequest {
  /**
   * 分析场景。必填。full_traffic 表示全流量深度分析；east_west 表示东西向流量分析；alert_comprehensive 表示告警综合分析；asset_exposure 表示资产暴露面分析；access_troubleshoot 表示访问阻断排障分析。
   */
  Scenario: string
  /**
   * 查询开始时间。可选，格式 YYYY-MM-DD HH:MM:SS；不传时默认查询最近 7 天。
   */
  StartTime?: string
  /**
   * 查询结束时间。可选，格式 YYYY-MM-DD HH:MM:SS；不传时默认当前时间。
   */
  EndTime?: string
  /**
   * 分析对象类型。可选，默认 user；user 表示租户全局，asset 表示资产上下文，vpc 表示 VPC 上下文，domain 表示域名上下文。选择非 user 时建议同时传 ObjectId 以限定具体对象；当前未传 ObjectId 时仍按该对象类型执行宽查询。
   */
  ObjectType?: string
  /**
   * 分析对象标识。ObjectType 为 asset、vpc 或 domain 时可传，用于限定具体 IP、实例 ID、VPC ID 或域名；当前为可选参数，省略时不会按具体对象过滤。
   */
  ObjectId?: string
  /**
   * 目标 IP 或域名过滤。可选，常用于 access_troubleshoot，也可用于其他 Scenario；传入后优先于 ObjectType/ObjectId，并对该场景全部分析段追加源 IP、目的 IP 或目的域名过滤。
   */
  Target?: string
  /**
   * 需要跳过的分析段名称列表。可选；不传或传空数组时执行该场景全部分析段。full_traffic 支持 beacon、dns_large、dns_dga、dns_dga_fine、dns_tunnel、icmp_tunnel、mining、p2p、remote_tool、file_transfer、high_risk_outbound、lateral_baseline、vpc_sensitive、smb_write、outbound_baseline、inbound_high_risk、tls_expired、tls_self_signed、first_seen_ip、first_seen_country、first_seen_port；east_west 支持 vpc_inter_vpc、subnet_inter、service_port、lateral_baseline、vpc_sensitive、smb_write、database_lateral；alert_comprehensive 支持 outbound_baseline、lateral_baseline、beacon、inbound_high_risk、first_seen_ip、first_seen_country、first_seen_port；asset_exposure 支持 inbound_high_risk、tls_expired、tls_self_signed、high_risk_outbound；access_troubleshoot 支持 acl_border_block、acl_nat_block、acl_vpc_block、ips_block。传入当前 Scenario 不支持的名称会返回 InvalidParameter。
   */
  SkipSections?: Array<string>
}

/**
 * DeleteSecurityGroupRule返回参数结构体
 */
export interface DeleteSecurityGroupRuleResponse {
  /**
   * 状态值，0：成功，非0：失败
   */
  Status?: number
  /**
   * 返回多余的信息
   */
  Info?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 执行顺序对象
 */
export interface SequenceData {
  /**
   * 规则Id值
   */
  Id: number
  /**
   * 修改前执行顺序
   */
  OrderIndex: number
  /**
   * 修改后执行顺序
   */
  NewOrderIndex: number
}

/**
 * DescribeSwitchError请求参数结构体
 */
export interface DescribeSwitchErrorRequest {
  /**
   * <p>EDGE_FW : 互联网边界防火墙 , NDR: 流量分析，VPC_FW：VPC边界防火墙</p>
   */
  FwType?: string
}

/**
 * 通用的列表检索过滤选项
 */
export interface CommonFilter {
  /**
   * 检索的键值
   */
  Name: string
  /**
   * 枚举类型，代表Name与Values之间的匹配关系
enum FilterOperatorType {
    //等于
    FILTER_OPERATOR_TYPE_EQUAL = 1;
    //大于
    FILTER_OPERATOR_TYPE_GREATER = 2;
    //小于
    FILTER_OPERATOR_TYPE_LESS = 3;
    //大于等于
    FILTER_OPERATOR_TYPE_GREATER_EQ = 4;
    //小于等于
    FILTER_OPERATOR_TYPE_LESS_EQ = 5;
    //不等于
    FILTER_OPERATOR_TYPE_NO_EQ = 6;
    //not in
    FILTER_OPERATOR_TYPE_NOT_IN = 8;
    //模糊匹配
    FILTER_OPERATOR_TYPE_FUZZINESS = 9;
}
   */
  OperatorType: number
  /**
   * 检索的值，各检索值间为OR关系
   */
  Values: Array<string>
}

/**
 * AddVpcAcRule请求参数结构体
 */
export interface AddVpcAcRuleRequest {
  /**
   * 待添加的 VPC边界规则列表，至少包含一条，可包含不同 IpVersion。EdgeId 调用 DescribeVpcAclEdgeRange，传 FromList=switchs，并使用 EdgeRanges[].EdgeId；FromList=rules 只返回已有规则使用过的范围，不用于发现可新增范围。FwGroupId 调用 DescribeFwGroupIdNames，IpVersion 使用与目标规则相同的 JSON 整数 0 或 1，并使用 Data[].FwGroupId，不要使用 FwGroupName。地址模板调用 DescribeAddressTemplateList，请求用 TemplateType=1 或 5 过滤，并确认返回项 Data[].Type 为 1 或 5；将 Data[].Uuid（mb_ 前缀）写入对应 Content，不要使用 Data[].TemplateId（ip-/dm- 前缀）。协议端口模板请求用 TemplateType=6 过滤，并将 Data[].TemplateId（pp- 前缀）写入 ParamTemplateId。资产实例调用 DescribeCfwAssets，解析返回结果后使用 assets[].instance_id；资产分组调用 DescribeResourceGroupNew，传 QueryType=resource、GroupId="0"、ShowType=all，解析返回结果后使用 GroupId；资源标签传 QueryType=tag，跳过“全部资产”根节点，以一级节点 GroupName 为 Key、所选二级子节点 GroupName 为 Value 构造 JSON，不要写入 GroupId。batch_import_cover 的覆盖范围仅由首条规则的 IpVersion 决定。
   */
  Rules: Array<VpcRuleItem>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * 添加方式。省略或为空表示普通新增；insert_rule 表示按 OrderIndex 插入；batch_import 表示非覆盖批量导入；batch_import_cover 表示覆盖导入，会删除首条规则 IpVersion 对应的现有可操作规则后再按 Rules 顺序添加，添加失败时已删除的规则不会恢复，风险极高。仅支持上述取值。
   */
  From?: string
}

/**
 * 边界防火墙公网IP开关列表
 */
export interface EdgeIpInfoSimple {
  /**
   * 公网IP
   */
  PublicIp?: string
  /**
   * 公网 IP 类型 1 公网,2 弹性,3 弹性ipv6,4 anycastIP, 6 HighQualityEIP
   */
  PublicIpType?: number
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 开关状态
0 : 关闭
1 : 开启
2 : 开启中
3 : 关闭中
4 : 异常
   */
  Status?: number
  /**
   * 0 : 旁路 1 : 串行 2 : 正在模式切换
   */
  SwitchMode?: number
  /**
   * 地域
   */
  Region?: string
  /**
   * 资产类型
   */
  AssetType?: string
}

/**
 * ModifyResourceGroup请求参数结构体
 */
export interface ModifyResourceGroupRequest {
  /**
   * 资产组id
   */
  GroupId: string
  /**
   * 组名称
   */
  GroupName: string
  /**
   * 上级组资产组id
   */
  ParentId: string
}

/**
 * DescribeNDRAssetIdentificationCursorList请求参数结构体
 */
export interface DescribeNDRAssetIdentificationCursorListRequest {
  /**
   * <p>每页条数</p>
   */
  Limit: number
  /**
   * <p>分页游标</p><p>前一页返回的NextCursor</p>
   */
  Cursor?: string
  /**
   * <p>查询过滤条件，多个条件之间为AND的关系</p>
   */
  Filters?: Array<OperatorFilter>
}

/**
 * 告警中心-阻断事件结构体
 */
export interface BlockInfo {
  /**
   * 源IP
   */
  SrcIP?: string
  /**
   * 目的ip
   */
  DstIP?: string
  /**
   * 端口
   */
  DstPort?: string
  /**
   * appid信息
   */
  AppID?: string
  /**
   * 资产id
   */
  AssetId?: string
  /**
   * 资产名称
   */
  AssetName?: string
  /**
   * 地域
   */
  Zone?: string
  /**
   * 最晚时间
   */
  MaxDate?: string
  /**
   * 最近时间
   */
  MinDate?: string
  /**
   * 方向  1入站 0出战
   */
  Direction?: number
  /**
   * 来源  1拦截列表，2虚拟补丁，3威胁情报，4基础防御
   */
  BlockSource?: number
  /**
   * 国加
   */
  Country?: string
  /**
   * 次数
   */
  Count?: number
  /**
   * 拦截频率
   */
  AvgCount?: number
  /**
   * 置顶位
   */
  IsTop?: number
  /**
   * 记录唯一标识
   */
  UniqueId?: string
  /**
   * 1是 0不是
   */
  ByPass?: number
  /**
   * 1是 0不是
   */
  Block?: number
  /**
   * 1是 0不是
   */
  Ignore?: number
  /**
   * WhiteTag信息
   */
  WhiteTag?: string
  /**
   * vpc间防火墙日志，目的资产id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstAssetId?: string
  /**
   * vpc间防火墙日志，目的资产名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstAssetName?: string
  /**
   * vpc间防火墙日志，源VPC id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcVpc?: string
  /**
   * vpc间防火墙日志，源VPC名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SrcVpcName?: string
  /**
   * vpc间防火墙日志，目的VPC id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstVpc?: string
  /**
   * vpc间防火墙日志，目的VPC名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DstVpcName?: string
  /**
   * vpc间防火墙开关边id
注意：此字段可能返回 null，表示取不到有效值。
   */
  EdgeId?: string
  /**
   * vpc间防火墙开关边名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EdgeName?: string
  /**
   * 日志来源 move：vpc间防火墙
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogSource?: string
  /**
   * 是否加入隔离列表，1是 0不是
注意：此字段可能返回 null，表示取不到有效值。
   */
  Isolate?: number
  /**
   * 是否加入隔离列表，1是 0不是
   */
  Hide?: number
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
}

/**
 * DescribeCcnAssociatedInstances请求参数结构体
 */
export interface DescribeCcnAssociatedInstancesRequest {
  /**
   * <p>云联网ID</p>
   */
  CcnId: string
}

/**
 * ModifyVpcAcRule请求参数结构体
 */
export interface ModifyVpcAcRuleRequest {
  /**
   * 待修改的规则数组，必须恰好包含一条完整规则，不是局部更新。调用 DescribeCfwRules，传 RuleType=vpc、目标 RuleUuid、ExpandNames=false 获取原规则。字段转换：uuid→Uuid，sequence→OrderIndex，src_ip→SourceContent，src_type→SourceType，dst_content→DestContent，dst_type→DestType，dst_port→Port，detail→Description，edge_id→EdgeId，fwgroupid→FwGroupId，ip_version→IpVersion；action 的 0、1、2 分别转换为 log、drop、accept，enabled 的布尔值转换为字符串 true、false；protocol、param_template_id、dest_value_type 分别写入 Protocol、ParamTemplateId、DestValueType。src_type 和 dst_type 的 1、2、3、4/5、6、8、9、10、100 分别对应 net、url、domain、template、instance、tag、dnsparse、domainiptwoverify、group；仅当转换结果属于对应 SourceType 或 DestType 的有效取值时才能提交。省略的可写字段不会继承旧值，IpVersion=0 也必须传入。不修改生效范围时，将原规则的 edge_id 和 fwgroupid 原样写入 EdgeId 和 FwGroupId；主动更换时，EdgeId 通过 DescribeVpcAclEdgeRange 查询，FwGroupId 通过 DescribeFwGroupIdNames 查询。
   */
  Rules: Array<VpcRuleItem>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
}

/**
 * 规则关联的beta任务
 */
export interface BetaInfoByACL {
  /**
   * 上次执行时间
   */
  LastTime?: string
  /**
   * 任务id
   */
  TaskId?: number
  /**
   * 任务名称
   */
  TaskName?: string
}

/**
 * CreateNatFwDnatRule返回参数结构体
 */
export interface CreateNatFwDnatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAcLists返回参数结构体
 */
export interface DescribeAcListsResponse {
  /**
   * 总条数
   */
  Total?: number
  /**
   * 访问控制列表数据
   */
  Data?: Array<AcListsData>
  /**
   * 不算筛选条数的总条数
   */
  AllTotal?: number
  /**
   * 访问控制规则全部启用/全部停用
   */
  Enable?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterFwBypass返回参数结构体
 */
export interface ModifyClusterFwBypassResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddNatAcRule请求参数结构体
 */
export interface AddNatAcRuleRequest {
  /**
   * <p>要添加的 NAT 访问控制规则列表，至少一项。Direction、地址类型与内容、Protocol、RuleAction 和 Scope 会逐项校验；Description、Enable、OrderIndex 和 Scope 的缺省或归一化行为见对应字段说明。Scope 调用无业务参数的 DescribeNatRuleScopes，使用 ScopeItems[].Scope，不要使用 ScopeDesc。地址模板调用 DescribeAddressTemplateList，请求用 TemplateType=1 或 5 过滤，并确认返回项 Data[].Type 为 1 或 5；将 Data[].Uuid（mb_ 前缀）写入对应 Content，不要使用 Data[].TemplateId（ip-/dm- 前缀）。协议端口模板请求用 TemplateType=6 过滤，并将 Data[].TemplateId（pp- 前缀）写入 ParamTemplateId。资产实例调用 DescribeCfwAssets，解析返回结果后使用 assets[].instance_id；资产分组调用 DescribeResourceGroupNew，传 QueryType=resource、GroupId="0"、ShowType=all，解析返回结果后使用 GroupId；资源标签传 QueryType=tag，跳过“全部资产”根节点，以一级节点 GroupName 为 Key、所选二级子节点 GroupName 为 Value 构造 JSON 字符串 {"Key":"标签键","Value":"标签值"}，不要写入 GroupId；地域调用 DescribeAclRegInfo，传 FwType=["NAT"] 并使用 Data[].RegionCode。不得使用展示名称或自行拼接。</p>
   */
  Rules: Array<CreateNatRuleItem>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * <p>添加方式。省略或为空表示普通新增；insert_rule 表示指定位置新增；batch_import 表示非覆盖批量导入；batch_import_cover 表示覆盖导入，会删除当前账号中与首条规则同方向的全部可操作 NAT边界规则后再添加 Rules，添加失败时已删除的规则不会恢复，风险极高。仅支持上述取值。</p>
   */
  From?: string
}

/**
 * 新手引导扫描信息
 */
export interface ScanInfo {
  /**
   * 进度
   */
  ScanPercent?: number
  /**
   * 扫描结果信息
   */
  ScanResultInfo?: ScanResultInfo
  /**
   * 扫描状态 0扫描中 1完成  2未勾选自动扫描
   */
  ScanStatus?: number
  /**
   * 预计完成时间
   */
  ScanTime?: string
}

/**
 * DeleteVpcFwGroup返回参数结构体
 */
export interface DeleteVpcFwGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * nat fw 实例展示的过滤列表
 */
export interface NatFwFilter {
  /**
   * 过滤的类型，例如实例id
   */
  FilterType: string
  /**
   * 过滤的内容，以',' 分隔
   */
  FilterContent: string
}

/**
 * 统计折线图通用结构体
 */
export interface IpStatic {
  /**
   * 值
   */
  Num?: number
  /**
   * 折线图横坐标时间
   */
  StatTime?: string
}

/**
 * AddEnterpriseSecurityGroupRules返回参数结构体
 */
export interface AddEnterpriseSecurityGroupRulesResponse {
  /**
   * 新增规则的摘要列表。
   */
  Rules?: Array<SecurityGroupSimplifyRule>
  /**
   * 处理状态：0 表示成功。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfwInsStatus返回参数结构体
 */
export interface DescribeCfwInsStatusResponse {
  /**
   * <p>防火墙实例运行状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CfwInsStatus?: Array<CfwInsStatus>
  /**
   * <p>0</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteResourceGroup请求参数结构体
 */
export interface DeleteResourceGroupRequest {
  /**
   * 组id
   */
  GroupId: string
}

/**
 * CreateAddressTemplate返回参数结构体
 */
export interface CreateAddressTemplateResponse {
  /**
   * 创建结果,0成功
   */
  Status?: number
  /**
   * 唯一Id
   */
  Uuid?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAclRegInfo请求参数结构体
 */
export interface DescribeAclRegInfoRequest {
  /**
   * 防火墙类型 SERIAL：串行、NAT：NAT防火墙，BYPASS：旁路防火墙
   */
  FwType?: Array<string>
}

/**
 * DescribeResourceGroupNew返回参数结构体
 */
export interface DescribeResourceGroupNewResponse {
  /**
   * 返回树形结构
   */
  Data?: string
  /**
   * 返回码；0为请求成功
   */
  ReturnCode?: number
  /**
   * 接口返回消息
   */
  ReturnMsg?: string
  /**
   * 未分类实例数量
   */
  UnResourceNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwClusterRegionStatus请求参数结构体
 */
export interface DescribeNatFwClusterRegionStatusRequest {
  /**
   * <p>NAT集群防火墙地域状态查询列表</p>
   */
  NatClusterRegionStatusQueryList: Array<NatClusterRegionStatusQuery>
}

/**
 * DescribeAddressTemplateList请求参数结构体
 */
export interface DescribeAddressTemplateListRequest {
  /**
   * 偏移量，分页用
   */
  Offset?: number
  /**
   * 条数，分页用
   */
  Limit?: number
  /**
   * 排序字段，取值：UpdateTime最近更新时间，RulesNum关联规则数
   */
  By?: string
  /**
   * 排序，取值 ：asc正序，desc逆序
   */
  Order?: string
  /**
   * 搜索值
   */
  SearchValue?: string
  /**
   * 检索地址模板唯一id
   */
  Uuid?: string
  /**
   * 模板类型，取值：1：ip模板，5：域名模板，6：协议端口模板
   */
  TemplateType?: string
  /**
   * 模板Id
   */
  TemplateId?: string
}

/**
 * RemoveAclRule请求参数结构体
 */
export interface RemoveAclRuleRequest {
  /**
   * <p>必填的规则 ID 列表。具体规则 ID 通过 DescribeCfwRules 查询 RuleType=border 和目标 RuleUuid，并使用返回的 rules[].uuid。列表恰为 [-1] 时删除 Direction 指定方向下当前账号的全部可操作规则，风险极高；其它列表按 ID 删除匹配规则。空列表返回 InternalError，不删除规则。成功响应回显请求中的 ID 列表。</p>
   */
  RuleUuid: Array<number | bigint>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * <p>规则方向，JSON 整数：1 表示入站，0 表示出站。</p><p>RuleUuid 恰为 [-1] 时，本字段决定全量删除的方向；RuleUuid 为具体 ID 列表时，仅按 ID 匹配，不使用 Direction 筛选。字段省略时取值为 -1，不会按出站处理。</p>
   */
  Direction?: number
}

/**
 * ModifyIpsModeSwitch返回参数结构体
 */
export interface ModifyIpsModeSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIPStatusList请求参数结构体
 */
export interface DescribeIPStatusListRequest {
  /**
   * 资产Id
   */
  IPList: Array<string>
}

/**
 * DescribeFwSyncStatus返回参数结构体
 */
export interface DescribeFwSyncStatusResponse {
  /**
   * <p>同步状态：1，同步中；0，同步完成</p>
   */
  SyncStatus?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAssetSync请求参数结构体
 */
export type ModifyAssetSyncRequest = null

/**
 * DescribeRuleOverview请求参数结构体
 */
export interface DescribeRuleOverviewRequest {
  /**
   * 方向，0：出站，1：入站
   */
  Direction?: number
}

/**
 * DescribeVpcFwCcnPolicyWhiteList请求参数结构体
 */
export type DescribeVpcFwCcnPolicyWhiteListRequest = null

/**
 * ModifyEWRuleStatus请求参数结构体
 */
export interface ModifyEWRuleStatusRequest {
  /**
   * vpc规则必填，边id
   */
  EdgeId: string
  /**
   * 是否开关开启，0：未开启，1：开启
   */
  Status: number
  /**
   * 规则方向，0：出站，1：入站，默认1
   */
  Direction: number
  /**
   * 更改的规则当前执行顺序
   */
  RuleSequence: number
  /**
   * 规则类型，vpc：VPC间规则、nat：Nat边界规则
   */
  RuleType: string
}

/**
 * 防火墙网段信息
 */
export interface FwCidrInfo {
  /**
   * 防火墙使用的网段类型，值VpcSelf/Assis/Custom分别代表自有网段优先/扩展网段优先/自定义
   */
  FwCidrType: string
  /**
   * 为每个vpc指定防火墙的网段
   */
  FwCidrLst?: Array<FwVpcCidr>
  /**
   * 其他防火墙占用网段，一般是防火墙需要独占vpc时指定的网段
   */
  ComFwCidr?: string
}

/**
 * ModifyNatSequenceRules请求参数结构体
 */
export interface ModifyNatSequenceRulesRequest {
  /**
   * 规则快速排序：OrderIndex，原始序号；NewOrderIndex：新序号
   */
  RuleChangeItems: Array<RuleChangeItem>
  /**
   * 规则方向：1，入站；0，出站
   */
  Direction: number
}

/**
 * DescribeVpcFwGroupSwitch返回参数结构体
 */
export interface DescribeVpcFwGroupSwitchResponse {
  /**
   * <p>开关列表</p>
   */
  SwitchList?: Array<FwGroupSwitchShow>
  /**
   * <p>开关总个数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBlockIgnoreRule返回参数结构体
 */
export interface ModifyBlockIgnoreRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCcnAssociatedInstances返回参数结构体
 */
export interface DescribeCcnAssociatedInstancesResponse {
  /**
   * <p>实例总数</p>
   */
  Total?: number
  /**
   * <p>云联网关联的实例信息</p>
   */
  CcnAssociatedInstances?: Array<CcnAssociatedInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNatFwReSelect请求参数结构体
 */
export interface ModifyNatFwReSelectRequest {
  /**
   * <p>模式 1：接入模式；0：新增模式</p>
   */
  Mode: number
  /**
   * <p>防火墙实例id</p>
   */
  CfwInstance: string
  /**
   * <p>接入模式重新接入的nat网关列表，其中NatGwList和VpcList只能传递一个。</p>
   */
  NatGwList?: Array<string>
  /**
   * <p>新增模式重新接入的vpc列表，其中NatGwList和NatgwList只能传递一个。</p>
   */
  VpcList?: Array<string>
  /**
   * <p>指定防火墙使用网段信息</p>
   */
  FwCidrInfo?: FwCidrInfo
}

/**
 * CloseClusterNatFwSwitch请求参数结构体
 */
export interface CloseClusterNatFwSwitchRequest {
  /**
   * <p>NAT防火墙实例ID</p>
   */
  NatInsId: string
  /**
   * <p>云联网实例ID</p>
   */
  CcnId: string
}

/**
 * ModifyFwGroupSwitch返回参数结构体
 */
export interface ModifyFwGroupSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 双向下发的企业安全组规则
 */
export interface SecurityGroupBothWayInfo {
  /**
   * 执行顺序
   */
  OrderIndex: number
  /**
   * 访问源
   */
  SourceId: string
  /**
   * 访问源类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组
   */
  SourceType: number
  /**
   * 访问目的
   */
  TargetId: string
  /**
   * 访问目的类型，默认为0，0: IP, 1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资产分组
   */
  TargetType: number
  /**
   * 协议
   */
  Protocol: string
  /**
   * 目的端口
   */
  Port: string
  /**
   * 策略, 1：阻断，2：放行
   */
  Strategy: number
  /**
   * 方向，0：出站，1：入站，默认1
   */
  Direction: number
  /**
   * 地域
   */
  Region: string
  /**
   * 描述
   */
  Detail?: string
  /**
   * 是否开关开启，0：未开启，1：开启
   */
  Status?: number
  /**
   * 是否是正常规则，0：正常，1：异常
   */
  IsNew?: number
  /**
   * 单/双向下发，0:单向下发，1：双向下发
   */
  BothWay?: number
  /**
   * 私有网络ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 公网IP，多个以英文逗号分隔
   */
  PublicIp?: string
  /**
   * 内网IP，多个以英文逗号分隔
   */
  PrivateIp?: string
  /**
   * 掩码地址，多个以英文逗号分隔
   */
  Cidr?: string
  /**
   * 端口协议类型参数模板id
   */
  ServiceTemplateId?: string
  /**
   * 是否使用端口协议模板，0：否，1：是
   */
  ProtocolPortType?: number
}

/**
 * ModifyAllRuleStatus返回参数结构体
 */
export interface ModifyAllRuleStatusResponse {
  /**
   * 0: 修改成功, 其他: 修改失败
   */
  Status?: number
  /**
   * 规则限制数量
   */
  RuleLimitNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveAclRule返回参数结构体
 */
export interface RemoveAclRuleResponse {
  /**
   * 回显请求中的规则 ID 列表；全量删除返回 [-1]。
   */
  RuleUuid?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多日志主题检索错误信息
 */
export interface SearchLogErrors {
  /**
   * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCodeStr?: string
}

/**
 * 访问控制列表对象
 */
export interface DescAcItem {
  /**
   * 访问源
   */
  SourceContent?: string
  /**
   * 访问目的
   */
  TargetContent?: string
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 端口
   */
  Port?: string
  /**
   * 访问控制策略中设置的流量通过云防火墙的方式。取值： accept：放行 drop：拒绝 log：观察
   */
  RuleAction?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 命中次数
   */
  Count?: number
  /**
   * 执行顺序
   */
  OrderIndex?: number
  /**
   * 访问源类型：入向规则时类型可以为 ip,net,template,location；出向规则时可以为 ip,net,template,instance,group,tag
   */
  SourceType?: string
  /**
   * 访问目的类型：入向规则时类型可以为ip,net,template,instance,group,tag；出向规则时可以为 ip,net,domain,template,location,dnsparse
   */
  TargetType?: string
  /**
   * 规则对应的唯一id
   */
  Uuid?: number
  /**
   * 规则有效性
   */
  Invalid?: number
  /**
   * 0为正常规则,1为地域规则
   */
  IsRegion?: number
  /**
   * 国家id
   */
  CountryCode?: number
  /**
   * 城市id
   */
  CityCode?: number
  /**
   * 国家名称
   */
  CountryName?: string
  /**
   * 省名称
   */
  CityName?: string
  /**
   * 云厂商code
   */
  CloudCode?: string
  /**
   * 0为正常规则,1为云厂商规则
   */
  IsCloud?: number
  /**
   * 规则状态，true表示启用，false表示禁用
   */
  Enable?: string
  /**
   * 规则方向：1，入向；0，出向
   */
  Direction?: number
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 内部使用的uuid，一般情况下不会使用到该字段
   */
  InternalUuid?: number
  /**
   * 规则状态，查询规则命中详情时该字段有效，0：新增，1: 已删除, 2: 编辑删除
   */
  Status?: number
  /**
   * 关联任务详情
   */
  BetaList?: Array<BetaInfoByACL>
  /**
   * （1）互联网边界防火墙，生效范围：serial，串行；side，旁路；all，全局；
（2）NAT边界防火墙：ALL，全局生效；ap-guangzhou，生效的地域；cfwnat-xxx，生效基于实例维度
   */
  Scope?: string
  /**
   * 生效范围描述
   */
  ScopeDesc?: string
  /**
   * 互联网边界防火墙使用的内部规则id
   */
  InternetBorderUuid?: string
  /**
   * 协议端口组名称
   */
  ParamTemplateName?: string
  /**
   * 协议端口组ID
   */
  ParamTemplateId?: string
  /**
   * 访问源名称
   */
  SourceName?: string
  /**
   * 访问目的名称
   */
  TargetName?: string
  /**
   * 规则最近命中时间
   */
  LastHitTime?: string
  /**
   * 地区简称
   */
  CountryKey?: string
  /**
   * 省份、城市简称
   */
  CityKey?: string
  /**
   * 规则创建时间
   */
  CreateTime?: string
  /**
   * 规则最近更新时间
   */
  UpdateTime?: string
  /**
   * 目的值的类型，与TargetType或DestType所代表的目的类型含义有所不同，如目的类型是template,但template分ip模板和域名模板，故需通过DestValueType进一步区分
   */
  DestValueType?: string
  /**
   * 规则分区，1最前分区，2中间分区，3最后分区
   */
  RulePartition?: number
}

/**
 * ExpandCfwVertical返回参数结构体
 */
export interface ExpandCfwVerticalResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatAcRule请求参数结构体
 */
export interface DescribeNatAcRuleRequest {
  /**
   * <p>每页条数</p>
   */
  Limit: number
  /**
   * <p>偏移值</p>
   */
  Offset: number
  /**
   * <p>需要查询的索引，特定场景使用，可不填</p>
   */
  Index?: string
  /**
   * <p>过滤条件组合，Direction 为0时表述查询出向规则，为1时表示查询入向规则</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>检索的起始时间，可不传</p>
   */
  StartTime?: string
  /**
   * <p>检索的截止时间，可不传</p>
   */
  EndTime?: string
  /**
   * <p>desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值，默认为asc</p>
   */
  Order?: string
  /**
   * <p>排序所用到的字段，默认为sequence</p>
   */
  By?: string
}

/**
 * 标签信息
 */
export interface TagInfo {
  /**
   * 目标key
   */
  TagKey?: string
  /**
   * 目标值
   */
  TagValue?: string
}

/**
 * DescribeResourceGroup返回参数结构体
 */
export interface DescribeResourceGroupResponse {
  /**
   * 返回树形结构
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSecurityGroupRule请求参数结构体
 */
export interface DeleteSecurityGroupRuleRequest {
  /**
   * 所需要删除规则的ID
   */
  Id: number
  /**
   * 腾讯云地域的英文简写
   */
  Area: string
  /**
   * 方向，0：出站，1：入站
   */
  Direction: number
  /**
   * 是否删除反向规则，0：否，1：是
   */
  IsDelReverse?: number
}

/**
 * 查询过滤条件
 */
export interface OperatorFilter {
  /**
   * 过滤字段
   */
  Name: string
  /**
   * 匹配的值
   */
  Values: Array<string>
  /**
   * 操作类型：
1：等于 field = value
2：大于 field > value
3：小于 field < value
4：大于等于 field >= value
5：小于等于 field <= value
6：不等于 field <> value
7：IN field IN (value1, value2...)
8：NOT IN field NOT IN (value1, value2...)
9：模糊匹配 field LIKE value
13：非模糊匹配 field NOT LIKE value
14：按位与 field & value = value
15：between and field between value1 and value2
   */
  OperatorType: number
}

/**
 * DescribeEnterpriseSecurityGroupRuleList返回参数结构体
 */
export interface DescribeEnterpriseSecurityGroupRuleListResponse {
  /**
   * 查询结果总数
   */
  Total?: number
  /**
   * 规则总数
   */
  AllTotal?: number
  /**
   * 规则列表
   */
  Data?: Array<EnterpriseSecurityGroupRuleRuleInfo>
  /**
   * 规则列表整体启用状态 
取值范围 0/1/2
0.表示没有启用的(可以批量启用)  
1.表示没有禁用的(可以批量禁用)    
2 表示混合情况（不可批量操作）
   */
  Enable?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupList请求参数结构体
 */
export interface DescribeSecurityGroupListRequest {
  /**
   * 0: 出站规则，1：入站规则
   */
  Direction: number
  /**
   * 地域代码（例: ap-guangzhou),支持腾讯云全部地域
   */
  Area: string
  /**
   * 搜索值
   */
  SearchValue?: string
  /**
   * 每页条数，默认为10
   */
  Limit?: number
  /**
   * 偏移值，默认为0
   */
  Offset?: number
  /**
   * 状态，'': 全部，'0'：筛选停用规则，'1'：筛选启用规则
   */
  Status?: string
  /**
   * 0: 不过滤，1：过滤掉正常规则，保留下发异常规则
   */
  Filter?: number
}

/**
 * ID NAME 组合
 */
export interface CommonIdName {
  /**
   * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 资源名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * DescribeCcnInstanceRegionStatus返回参数结构体
 */
export interface DescribeCcnInstanceRegionStatusResponse {
  /**
   * <p>地域总数量</p>
   */
  Total?: number
  /**
   * <p>地域防火墙引流网络状态列表</p>
   */
  RegionFwStatus?: Array<RegionFwStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveVpcAcRule返回参数结构体
 */
export interface RemoveVpcAcRuleResponse {
  /**
   * 回显请求中的规则 ID 列表；全量删除返回 [-1]。
   */
  RuleUuids?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLogs请求参数结构体
 */
export interface DescribeLogsRequest {
  /**
   * 日志类型标识
流量日志：互联网边界防火墙netflow_border，NAT边界防火墙netflow_nat，VPC间防火墙vpcnetflow，内网流量日志netflow_fl，流量分析日志netflow_nta
入侵防御日志rule_threatinfo
访问控制日志：互联网边界规则rule_acl，NAT边界规则rule_acl，内网间规则rule_vpcacl，企业安全组rule_sg
操作日志：防火墙开关-开关操作operate_switch，防火墙开关-实例配置operate_instance，资产中心操作operate_assetgroup，访问控制操作operate_acl，零信任防护操作operate_identity，入侵防御操作-入侵防御operate_ids，入侵防御操作-安全基线operate_baseline，常用工具操作operate_tool，网络蜜罐操作operate_honeypot，日志投递操作operate_logdelivery，通用设置操作operate_logstorage，登录日志operate_login
   */
  Index: string
  /**
   * 每页条数，最大支持1000
   */
  Limit: number
  /**
   * 偏移值，最大支持60000
   */
  Offset: number
  /**
   * 筛选开始时间
   */
  StartTime: string
  /**
   * 筛选结束时间
   */
  EndTime: string
  /**
   * 过滤条件组合，各数组元素间为AND关系，查询字段名Name参考文档https://cloud.tencent.com/document/product/1132/87894，数值类型字段不支持模糊匹配
   */
  Filters?: Array<CommonFilter>
}

/**
 * ModifySecurityGroupRule返回参数结构体
 */
export interface ModifySecurityGroupRuleResponse {
  /**
   * 状态值，0：编辑成功，非0：编辑失败
   */
  Status?: number
  /**
   * 编辑后新生成规则的Id
   */
  NewRuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupRegionList请求参数结构体
 */
export type DescribeSecurityGroupRegionListRequest = null

/**
 * DescribeSwitchError返回参数结构体
 */
export interface DescribeSwitchErrorResponse {
  /**
   * <p>错误信息列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<SwitchError>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多日志主题检索相关信息
 */
export interface MultiTopicSearchInformation {
  /**
   * 要检索分析的日志主题ID
   */
  TopicId?: string
  /**
   * 透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时
   */
  Context?: string
}

/**
 * ModifyTableStatus返回参数结构体
 */
export interface ModifyTableStatusResponse {
  /**
   * 0：正常，-1：不正常
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwSwitch请求参数结构体
 */
export interface DescribeNatFwSwitchRequest {
  /**
   * <p>偏移量，分页用</p>
   */
  Offset: number
  /**
   * <p>条数，分页用</p>
   */
  Limit: number
  /**
   * <p>过滤条件组合</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值</p>
   */
  Order?: string
  /**
   * <p>排序所用到的字段</p>
   */
  By?: string
}

/**
 * 日志存储统计柱形图
 */
export interface StorageHistogram {
  /**
   * 访问控制日志存储量，单位B
注意：此字段可能返回 null，表示取不到有效值。
   */
  AclSize?: number
  /**
   * 入侵防御日志存储量，单位B
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdsSize?: number
  /**
   * 流量日志存储量，单位B
注意：此字段可能返回 null，表示取不到有效值。
   */
  NetFlowSize?: number
  /**
   * 操作日志存储量，单位B
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateSize?: number
  /**
   * 统计时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: string
  /**
   * NDR流量日志存储量，单位B
   */
  NDRNetflowSize?: number
  /**
   * NDR风险日志存储量，单位B
   */
  NDRRiskSize?: number
}

/**
 * DescribeAddressTemplateList返回参数结构体
 */
export interface DescribeAddressTemplateListResponse {
  /**
   * 模板总数
   */
  Total?: number
  /**
   * 模板列表数据
   */
  Data?: Array<TemplateListInfo>
  /**
   * 模板名称列表
   */
  NameList?: Array<string>
  /**
   * Ip地址模板数量
   */
  IpTemplateCount?: number
  /**
   * 域名地址模板数量
   */
  DomainTemplateCount?: number
  /**
   * 协议端口模板数量
   */
  PortTemplateCount?: number
  /**
   * 已使用的地址模板数
   */
  UsedTemplateCount?: number
  /**
   * 地址模板配额数量
   */
  TemplateQuotaCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 状态监控过滤条件。
 */
export interface CfwStatusMonitorFilter {
  /**
   * 过滤字段名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 过滤值列表，最多 10 个。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values: Array<string>
  /**
   * 操作符类型，可选；仅支持后端允许的类型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorType?: number
}

/**
 * ModifyAssetSync返回参数结构体
 */
export interface ModifyAssetSyncResponse {
  /**
   * <p>返回状态<br>0 请求成功<br>2 请求失败<br>3 请求失败-频率限制</p>
   */
  Status?: number
  /**
   * <p>success 成功<br>其他失败</p>
   */
  ReturnMsg?: string
  /**
   * <p>0 成功<br>非0 失败</p>
   */
  ReturnCode?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfwRuleOptimization返回参数结构体
 */
export interface DescribeCfwRuleOptimizationResponse {
  /**
   * <p>查询结果。UTF-8 JSON object 字符串；调用方需解析 Response.Data。</p>
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterNatFwSwitch返回参数结构体
 */
export interface ModifyClusterNatFwSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleOverview返回参数结构体
 */
export interface DescribeRuleOverviewResponse {
  /**
   * 规则总数
   */
  AllTotal?: number
  /**
   * 阻断策略规则数量
   */
  StrategyNum?: number
  /**
   * 启用规则数量
   */
  StartRuleNum?: number
  /**
   * 停用规则数量
   */
  StopRuleNum?: number
  /**
   * 剩余配额
   */
  RemainingNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlertCenterRuleAsync请求参数结构体
 */
export interface CreateAlertCenterRuleAsyncRequest {
  /**
   * <p>必填的告警方向：0 出向，1 入向，3 内网。用于 HandleIpList 中 IP 目标的处置方向；其它目标也必须传上述有效值。从 DescribeCfwAlerts 复制方向时，将 alerts[].direction 的 outbound、inbound、lateral 分别转换为 JSON 整数 0、1、3。</p>
   */
  AlertDirection: number
  /**
   * <p>必填的处置生效方向。支持空字符串、0（互联网出向）、1（互联网入向）、0,1/1,0（互联网双向）、3（内网访问）、5（内网访问源）、6（内网访问目的）及 5,6/6,5。空字符串表示按告警原方向处置；同一 IP 的已有规则方向会与本次方向合并。</p>
   */
  HandleDirection: string
  /**
   * <p>处置有效期：1 表示 1 天，7 表示 7 天，-2 表示永久。</p>
   */
  HandleTime: number
  /**
   * <p>必填的处置类型：1 按 HandleIdList 或 HandleEventIdList 封禁，2 按 HandleIdList、HandleEventIdList 或 BlockDomain 加白，3 按 HandleIpList 加白 IP，4 按 HandleIpList 封禁 IP，5 将 HandleIdList 或 HandleEventIdList 对应的安全基线告警地址加入指定方向的安全基线列表，8 按 HandleEventIdList 关联资产或 AssetIdList 新增隔离。五类目标至少提供一类；HandleType=8 未能从事件解析出资产时必须提供 AssetIdList。IsolateType 和 WhiteIpList 仅用于类型 8。</p>
   */
  HandleType: number
  /**
   * <p>资产隔离目标列表，可省略；仅 HandleType=8 使用。直接按资产隔离时，调用 DescribeCfwAssets，传 AssetType=host 和目标 InstanceId，解析返回结果；仅在唯一 assets[].instance_id 与目标完全相等时将其写入本字段，不使用资产名称。</p>
   */
  AssetIdList?: Array<string>
  /**
   * <p>域名加白目标，传合法域名；HandleType 必须为 2，并同时传 TargetEventIdList。</p>
   */
  BlockDomain?: string
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * <p>可选处置说明，最多 50 个 Unicode 字符。</p>
   */
  HandleComment?: string
  /**
   * <p>告警事件 ID 列表，可省略。通过 DescribeCfwAlerts 获取，返回 alerts[].current_event_id 时使用该值，否则使用 alerts[].event_id。事件对应的告警日志会与 HandleIdList 合并后参与处置。</p>
   */
  HandleEventIdList?: Array<string>
  /**
   * <p>告警日志 ID 列表，可省略；可与 HandleEventIdList 同时使用。调用 DescribeLogs，传 Index=rule_threatinfo 和目标日志的查询条件，解析返回结果，仅使用目标记录的 log_id。告警事件 ID 使用 HandleEventIdList。</p>
   */
  HandleIdList?: Array<string>
  /**
   * <p>IP 处置目标列表，每项必须是有效 IP 地址。HandleType=3 表示加白，HandleType=4 表示封禁；可使用 DescribeCfwAlerts 返回的 alerts[].src_ip_list 或 alerts[].dst_ip_list。</p>
   */
  HandleIpList?: Array<string>
  /**
   * <p>处置原因，可省略：0 未指定原因，1 重复，2 误报，3 紧急加白；主要用于加白记录。</p>
   */
  IgnoreReason?: number
  /**
   * <p>隔离范围数组，可省略：1 互联网入站，2 互联网出站，4 内网访问。仅 HandleType=8 使用；组合多个范围时传入对应值且不要重复，重复值会改变最终隔离范围。</p>
   */
  IsolateType?: Array<number | bigint>
  /**
   * <p>处置关联的来源事件 ID 列表，仅用于 HandleIpList 或 BlockDomain。BlockDomain 处置时必填，HandleIpList 处置时可省略；通过 DescribeCfwAlerts 获取，返回 alerts[].current_event_id 时使用该值，否则使用 alerts[].event_id。</p>
   */
  TargetEventIdList?: Array<string>
  /**
   * <p>隔离后仍允许通信的 IPv4 地址列表，仅 HandleType=8 使用。可省略或传空数组；非空时每项必须是有效 IPv4 地址。</p>
   */
  WhiteIpList?: Array<string>
}

/**
 * VPC防火墙实例卡片信息
 */
export interface VpcFwInstanceInfo {
  /**
   * <p>VPC防火墙实例名称</p>
   */
  FwInsName: string
  /**
   * <p>VPC防火墙实例ID</p>
   */
  FwInsId: string
  /**
   * <p>VPC防火墙实例模式 0: 旧VPC模式防火墙 1: CCN模式防火墙</p>
   */
  FwMode: number
  /**
   * <p>VPC防火墙接入网络实例个数</p>
   */
  JoinInsNum: number
  /**
   * <p>VPC防火墙开关个数</p>
   */
  FwSwitchNum: number
  /**
   * <p>VPC防火墙状态 0:正常 ， 1：创建中 2: 变更中</p>
   */
  Status: number
  /**
   * <p>VPC防火墙创建时间</p>
   */
  Time: string
  /**
   * <p>VPC 相关云联网ID列表</p>
   */
  CcnId?: Array<string>
  /**
   * <p>VPC 相关云联网名称列表</p>
   */
  CcnName?: Array<string>
  /**
   * <p>VPC 相关对等连接ID列表</p>
   */
  PeerConnectionId?: Array<string>
  /**
   * <p>VPC 相关对等连接名称列表</p>
   */
  PeerConnectionName?: Array<string>
  /**
   * <p>VPC防火墙CVM的列表</p>
   */
  FwCvmLst?: Array<VpcFwCvmInsInfo>
  /**
   * <p>VPC防火墙接入网络实例类型列表</p>
   */
  JoinInsLst?: Array<VpcFwJoinInstanceType>
  /**
   * <p>防火墙网关信息</p>
   */
  FwGateway?: Array<FwGateway>
  /**
   * <p>防火墙(组)ID</p>
   */
  FwGroupId?: string
  /**
   * <p>已使用规则数</p>
   */
  RuleUsed?: number
  /**
   * <p>最大规则数</p>
   */
  RuleMax?: number
  /**
   * <p>防火墙实例带宽</p>
   */
  Width?: number
  /**
   * <p>用户VPC墙总带宽</p>
   */
  UserVpcWidth?: number
  /**
   * <p>接入的vpc列表</p>
   */
  JoinInsIdLst?: Array<string>
  /**
   * <p>内网间峰值带宽 (单位 bps )</p>
   */
  FlowMax?: number
  /**
   * <p>实例引擎版本</p>
   */
  EngineVersion?: string
  /**
   * <p>引擎是否可升级：0，不可升级；1，可升级</p>
   */
  UpdateEnable?: number
  /**
   * <p>引擎运行模式，Normal:正常, OnlyRoute:透明模式</p>
   */
  TrafficMode?: string
  /**
   * <p>引擎预约升级时间</p>
   */
  ReserveTime?: string
  /**
   * <p>预约引擎升级版本</p>
   */
  ReserveVersion?: string
  /**
   * <p>引擎预约升级版本状态</p>
   */
  ReserveVersionState?: string
  /**
   * <p>弹性开关 1打开 0关闭</p>
   */
  ElasticSwitch?: number
  /**
   * <p>弹性带宽，单位Mbps</p>
   */
  ElasticBandwidth?: number
  /**
   * <p>是否首次开通按量付费<br>1 是<br>0 不是</p>
   */
  IsFirstAfterPay?: number
  /**
   * <p>按流量弹性开关</p><p>取值范围：[0, 1]</p><p>默认值：0</p>
   */
  ElasticTrafficSwitch?: number
}

/**
 * ModifyNatAcRule请求参数结构体
 */
export interface ModifyNatAcRuleRequest {
  /**
   * <p>待修改的规则数组，必须恰好包含一条完整规则，不是局部更新。调用 DescribeCfwRules，传 RuleType=nat、目标 RuleUuid、ExpandNames=false 获取原规则。字段转换：uuid→Uuid，sequence→OrderIndex，src_ip→SourceContent，src_type→SourceType，dst_content→TargetContent，dst_type→TargetType，dst_port→Port，detail→Description；action 的 0、1、2 分别转换为 log、drop、accept，enabled 的布尔值转换为字符串 true、false；protocol、direction、scope、param_template_id 分别写入 Protocol、Direction、Scope、ParamTemplateId。src_type 和 dst_type 的 1、2、3、4/5、6、8、9、10、100、101、102 分别对应 net、url、domain、template、instance、tag、dnsparse、domainiptwoverify、group、location、vendor；仅当转换结果属于对应 SourceType 或 TargetType 的有效取值时才能提交。用户要求改为某地域时，调用 DescribeAclRegInfo，传 FwType=["NAT"]，按用户地域名称匹配 Data[].RegionName，并将对应 Data[].RegionCode 写入 location 类型的 Content；不得使用 ap-guangzhou 等云资源地域、中文地域名称或自行拼接代码。vendor 类型的 Content 仅使用 tencent、aliyun、aws、huawei、azure 或 all，不使用“腾讯云”等展示名称。省略字段使用对应参数的默认值或空值，不继承旧值。地址模板和协议端口模板通过 DescribeAddressTemplateList 查询，资产实例通过 DescribeCfwAssets 查询，资源组和标签通过 DescribeResourceGroupNew 查询。</p>
   */
  Rules: Array<CreateNatRuleItem>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
}

/**
 * 开关开启错误码数据
 */
export interface SwitchFailInfo {
  /**
   * 自增唯一ID
   */
  Id?: number
  /**
   * 开关名称
   */
  Name?: string
  /**
   * 防火墙开关变动状态，小于0
   */
  Status?: number
}

/**
 * DescribeSourceAsset返回参数结构体
 */
export interface DescribeSourceAssetResponse {
  /**
   * 数据
   */
  Data?: Array<InstanceInfo>
  /**
   * 返回数据总数
   */
  Total?: number
  /**
   * 地域集合
   */
  ZoneList?: Array<AssetZone>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcAclEdgeRange返回参数结构体
 */
export interface DescribeVpcAclEdgeRangeResponse {
  /**
   * 总条数
   */
  TotalCount: number
  /**
   * 内网间访问控制规则的生效范围列表
   */
  EdgeRanges: Array<EdgeRange>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNatFwVpcDnsSwitch请求参数结构体
 */
export interface ModifyNatFwVpcDnsSwitchRequest {
  /**
   * <p>nat 防火墙 id</p>
   */
  NatFwInsId: string
  /**
   * <p>DNS 开关切换列表</p>
   */
  DnsVpcSwitchLst: Array<DnsVpcSwitch>
}

/**
 * DeleteBlockIgnoreRuleNew返回参数结构体
 */
export interface DeleteBlockIgnoreRuleNewResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfwStatusMonitor返回参数结构体
 */
export interface DescribeCfwStatusMonitorResponse {
  /**
   * 查询结果。UTF-8 JSON object 字符串；调用方需解析 Response.Data。describe_scene 的 scene 返回 metric_options、perspective_options、default_metric、default_perspective、selection_required_by_metric、selection_kind_by_metric 和 time_preset_options；selection.available_options 返回可用于 SelectionId/SelectionName/SelectionInstanceId 的选项。fetch_scene 返回选中场景的 data 快照，可能包含 overview、table 或 detail。下方示例是字段结构节选，数组仅展示代表值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEdgeIpSwitch请求参数结构体
 */
export interface ModifyEdgeIpSwitchRequest {
  /**
   * <p>0 关闭开关<br>1 打开开关<br>2 不操作开关，此次切换模式</p>
   */
  Enable?: number
  /**
   * <p>操作开关详情</p>
   */
  EdgeIpSwitchLst?: Array<EdgeIpSwitch>
  /**
   * <p>0 不自动选择子网<br>1 自动选择子网创建私有连接</p>
   */
  AutoChooseSubnet?: number
  /**
   * <p>0 切换为旁路<br>1 切换为串行<br>2 不切换模式，此次操作开关</p>
   */
  SwitchMode?: number
}

/**
 * 规则顺序变更项，由原始id值变为新的id值。
 */
export interface RuleChangeItem {
  /**
   * 原始sequence 值
   */
  OrderIndex: number
  /**
   * 新的sequence 值
   */
  NewOrderIndex: number
  /**
   * Ip版本，0：IPv4，1：IPv6，默认为IPv4
   */
  IpVersion?: number
}

/**
 * ID NAME STATUS 组合结构
 */
export interface CommonIdNameStatus {
  /**
   * 资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 资源name
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
}

/**
 * DescribeUnHandleEventTabList请求参数结构体
 */
export interface DescribeUnHandleEventTabListRequest {
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 查询示例ID
   */
  AssetID?: string
}

/**
 * DescribeNatRuleScopes返回参数结构体
 */
export interface DescribeNatRuleScopesResponse {
  /**
   * 可选生效范围总数
   */
  Total?: number
  /**
   * 生效范围列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScopeItems?: Array<RuleScopeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssociatedInstanceList返回参数结构体
 */
export interface DescribeAssociatedInstanceListResponse {
  /**
   * 实例数量
   */
  Total?: number
  /**
   * 实例列表
   */
  Data?: Array<AssociatedInstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业安全组关联实例信息
 */
export interface AssociatedInstanceInfo {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>实例名称</p>
   */
  InstanceName: string
  /**
   * <p>实例类型，3是cvm实例,4是clb实例,5是eni实例,6是云数据库</p>
   */
  Type: number
  /**
   * <p>私有网络ID</p>
   */
  VpcId: string
  /**
   * <p>私有网络名称</p>
   */
  VpcName: string
  /**
   * <p>公网IP</p>
   */
  PublicIp: string
  /**
   * <p>内网IP</p>
   */
  Ip: string
  /**
   * <p>关联安全组数量</p>
   */
  SecurityGroupCount: number
  /**
   * <p>关联安全组规则数量</p>
   */
  SecurityGroupRuleCount?: number
  /**
   * <p>关联数据库代理Id</p>
   */
  CdbId?: string
  /**
   * <p>容器服务集群ID</p>
   */
  TkeClusterId?: string
}

/**
 * ModifyNatAcRule返回参数结构体
 */
export interface ModifyNatAcRuleResponse {
  /**
   * 修改后的规则 ID 列表，成功时包含请求规则的 Uuid。
   */
  RuleUuid?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportLogsOffline返回参数结构体
 */
export interface ExportLogsOfflineResponse {
  /**
   * <p>返回状态码 0 成功 非0不成功</p>
   */
  ReturnCode?: number
  /**
   * <p>返回信息  success 成功 其他 不成功</p>
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAssetScan请求参数结构体
 */
export interface ModifyAssetScanRequest {
  /**
   * 扫描范围：1端口, 2端口+漏扫
   */
  ScanRange: number
  /**
   * 扫描深度：'heavy', 'medium', 'light'
   */
  ScanDeep: string
  /**
   * 扫描类型：1立即扫描 2 周期任务
   */
  RangeType: number
  /**
   * RangeType为2 是必须添加，定时任务时间
   */
  ScanPeriod?: string
  /**
   * 立即扫描这个字段传过滤的扫描集合
   */
  ScanFilterIp?: Array<string>
  /**
   * 1全量2单个
   */
  ScanType?: number
}

/**
 * VPC防火墙实例的CVM信息
 */
export interface VpcFwCvmInsInfo {
  /**
   * VPC防火墙实例ID
   */
  FwInsId: string
  /**
   * CVM所在地域
   */
  Region?: string
  /**
   * CVM所在地域中文
   */
  RegionZh?: string
  /**
   * CVM所在地域详情
   */
  RegionDetail?: string
  /**
   * 主机所在可用区
   */
  ZoneZh?: string
  /**
   * 备机所在可用区
   */
  ZoneZhBack?: string
  /**
   * 防火墙CVM带宽值
   */
  BandWidth?: number
  /**
   * 实例主机所在可用区
   */
  Zone?: string
  /**
   * 实例备机所在可用区
   */
  ZoneBak?: string
}

/**
 * DescribeEnterpriseSGRuleProgress返回参数结构体
 */
export interface DescribeEnterpriseSGRuleProgressResponse {
  /**
   * 0-100，代表下发进度百分比
   */
  Progress?: number
  /**
   * 是否用户中止 用户中止返回true
   */
  UserStopped?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 新增模式传递参数
 */
export interface NewModeItems {
  /**
   * 新增模式下接入的vpc列表
   */
  VpcList: Array<string>
  /**
   * 新增模式下绑定的出口弹性公网ip列表，其中Eips和AddCount至少传递一个。
   */
  Eips?: Array<string>
  /**
   * 新增模式下新增绑定的出口弹性公网ip个数，其中Eips和AddCount至少传递一个。
   */
  AddCount?: number
}

/**
 * nat防火墙 vpc dns 开关信息
 */
export interface VpcDnsInfo {
  /**
   * vpc id
   */
  VpcId?: string
  /**
   * vpc 名称
   */
  VpcName?: string
  /**
   * nat 防火墙模式 0：新增模式， 1: 接入模式
   */
  FwMode?: number
  /**
   * vpc ipv4网段范围 CIDR（Classless Inter-Domain Routing，无类域间路由选择）
   */
  VpcIpv4Cidr?: string
  /**
   * 外网弹性ip，防火墙 dns解析地址
   */
  DNSEip?: string
  /**
   * nat网关id
   */
  NatInsId?: string
  /**
   * nat网关名称
   */
  NatInsName?: string
  /**
   * 0：开关关闭 ， 1: 开关打开
   */
  SwitchStatus?: number
  /**
   * 0：未防护， 1: 已防护，2：忽略此字段
   */
  ProtectedStatus?: number
  /**
   * 是否支持DNS FW，0-不支持、1-支持
   */
  SupportDNSFW?: number
}

/**
 * VPC防火墙(组)及防火墙实例详情信息
 */
export interface VpcFwGroupInfo {
  /**
   * 防火墙(组)ID
   */
  FwGroupId?: string
  /**
   * 防火墙(组)名称
   */
  FwGroupName?: string
  /**
   * 防火墙组涉及到的开关个数
   */
  FwSwitchNum?: number
  /**
   * 防火墙(组)部署的地域
   */
  RegionLst?: Array<string>
  /**
   * 模式 1：CCN云联网模式；0：私有网络模式 2: sase 模式 3：ccn 高级模式 4: 私有网络(跨租户单边模式)
   */
  Mode?: number
  /**
   * 防火墙实例的开关模式 1: 单点互通 2: 多点互通 3: 全互通 4: 自定义路由
   */
  SwitchMode?: number
  /**
   * VPC防火墙实例卡片信息数组
   */
  FwInstanceLst?: Array<VpcFwInstanceInfo>
  /**
   * 防火墙(状态) 0：正常 1: 初始化或操作中
   */
  Status?: number
  /**
   * auto :自动选择
如果为网段，则为用户自定义 192.168.0.0/20 
   */
  FwVpcCidr?: string
  /**
   * cdc专用集群场景时表示部署所属的cdc
   */
  CdcId?: string
  /**
   * cdc专用集群场景时表示cdc名称
   */
  CdcName?: string
  /**
   * 跨租户模式 1管理员 2单边 0 非跨租户
   */
  CrossUserMode?: string
  /**
   * 云联网模式下，当前实例是否需要开启重叠路由开关，1：需要开启，0：不需要开启
   */
  NeedSwitchCcnOverlap?: number
  /**
   * 云联网模式下，实例关联的云联网id
   */
  CcnId?: string
}

/**
 * CreateVpcFwGroup返回参数结构体
 */
export interface CreateVpcFwGroupResponse {
  /**
   * <p>防火墙组ID</p>
   */
  FwGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业安全组域名解析的IP统计
 */
export interface SgDnsParseCount {
  /**
   * 有效下发的IP个数，离散数据
   */
  ValidCount?: number
  /**
   * 未下发的IP个数，离散数据
   */
  InvalidCount?: number
}

/**
 * DescribeClusterNatCcnFwSwitchList请求参数结构体
 */
export interface DescribeClusterNatCcnFwSwitchListRequest {
  /**
   * <p>NAT防火墙类型筛选，取值：nat-VPC内防护类型，nat_ccn-CCN集群模式类型，不传则同时查询两种类型</p>
   */
  NatType?: string
  /**
   * <p>每页条数，默认100</p>
   */
  Limit?: number
  /**
   * <p>偏移量，默认0</p>
   */
  Offset?: number
  /**
   * <p>过滤条件列表，支持按Common（通用搜索）、InsObj（实例ID）、ObjName（实例名称）等字段过滤</p>
   */
  Filters?: Array<CommonFilter>
}

/**
 * DescribeVpcFwCcnPolicyWhiteList返回参数结构体
 */
export interface DescribeVpcFwCcnPolicyWhiteListResponse {
  /**
   * <p>支持自动接入和策略路由的CCN列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportCcnPolicy?: Array<string>
  /**
   * <p>自动接入中支持自定义cidr的CCN列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportCcnPolicyCidr?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveOfflineExportTask返回参数结构体
 */
export interface RemoveOfflineExportTaskResponse {
  /**
   * 返回状态码 0 成功 非0不成功
   */
  ReturnCode?: number
  /**
   * 返回信息  success 成功 其他 不成功
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRemoteAccessDomain返回参数结构体
 */
export interface DeleteRemoteAccessDomainResponse {
  /**
   * 状态值 0：删除成功，非 0：删除失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * NAT CCN防火墙开关配置
 */
export interface NatCcnSwitchConfig {
  /**
   * <p>NAT防火墙实例ID</p>
   */
  NatInsId: string
  /**
   * <p>云联网实例ID</p>
   */
  CcnId: string
  /**
   * <p>开关接入模式，1:自动接入，2:手动接入</p>
   */
  SwitchMode: number
  /**
   * <p>引流路由方法，0:多路由表，1:策略路由。自动接入模式仅支持策略路由(1)；手动接入模式支持多路由表(0)和策略路由(1)</p>
   */
  RoutingMode: number
  /**
   * <p>接入的实例列表</p>
   */
  AccessInstanceList?: Array<AccessInstanceInfo>
  /**
   * <p>引流VPC的CIDR网段</p>
   */
  LeadVpcCidr?: string
}

/**
 * DeleteRemoteAccessDomain请求参数结构体
 */
export interface DeleteRemoteAccessDomainRequest {
  /**
   * 域名列表
   */
  AccessDomainList: Array<string>
}

/**
 * DescribeLogStorageStatistic返回参数结构体
 */
export interface DescribeLogStorageStatisticResponse {
  /**
   * <p>返回状态码 0 成功 非0不成功</p>
   */
  ReturnCode?: number
  /**
   * <p>返回信息  success 成功 其他 不成功</p>
   */
  ReturnMsg?: string
  /**
   * <p>已使用存储量，单位B</p>
   */
  UsedSize?: number
  /**
   * <p>配额存储总量，单位B</p>
   */
  TotalSize?: number
  /**
   * <p>存储天数</p>
   */
  StorageDay?: number
  /**
   * <p>访问控制日志存储量，单位B</p>
   */
  AclSize?: number
  /**
   * <p>入侵防御日志存储量，单位B</p>
   */
  IdsSize?: number
  /**
   * <p>流量日志存储量，单位B</p>
   */
  NetFlowSize?: number
  /**
   * <p>操作日志存储量，单位B</p>
   */
  OperateSize?: number
  /**
   * <p>剩余存储量，单位B</p>
   */
  LeftSize?: number
  /**
   * <p>计费模式，0后付费，1预付费</p>
   */
  PayMode?: number
  /**
   * <p>每日增加日志存储量柱状图</p>
   */
  TimeHistogram?: Array<StorageHistogram>
  /**
   * <p>柱形图格式数据</p>
   */
  TimeHistogramShow?: StorageHistogramShow
  /**
   * <p>后付费模式存储状态，0正常，1欠费停止写入</p>
   */
  ArrearsStopWriting?: number
  /**
   * <p>NDR流量日志存储量，单位B</p>
   */
  NDRNetFlowSize?: number
  /**
   * <p>NDR风险日志存储量，单位B</p>
   */
  NDRRiskSize?: number
  /**
   * <p>NDR日志存储天数</p>
   */
  NDRStorageDay?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOfflineExportTask请求参数结构体
 */
export interface DescribeOfflineExportTaskRequest {
  /**
   * <p>分页参数</p>
   */
  Limit: number
  /**
   * <p>分页参数</p>
   */
  Offset: number
  /**
   * <p>任务ID/任务名称</p>
   */
  TaskName?: string
}

/**
 * DescribeSourceAsset请求参数结构体
 */
export interface DescribeSourceAssetRequest {
  /**
   * ChooseType为1，查询已经分组的资产；ChooseType不为1查询没有分组的资产
   */
  ChooseType?: string
  /**
   * 模糊查询
   */
  FuzzySearch?: string
  /**
   * 资产类型 1公网 2内网
   */
  InsType?: string
  /**
   * 查询单页的最大值；eg：10；则最多返回10条结果
   */
  Limit?: number
  /**
   * 查询结果的偏移量
   */
  Offset?: number
  /**
   * 地域
   */
  Zone?: string
}

/**
 * DescribeCfwInsStatus请求参数结构体
 */
export type DescribeCfwInsStatusRequest = null

/**
 * 日志中的KV对
 */
export interface LogItem {
  /**
   * 日志Key
   */
  Key?: string
  /**
   * 日志Value
   */
  Value?: string
}

/**
 * 开关切换错误
 */
export interface SwitchError {
  /**
   * 开关唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrIns?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrMsg?: string
  /**
   * 错误类型区分
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrKey?: string
  /**
   * 错误时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  InsertTime?: string
}

/**
 * DescribeNatRuleScopes请求参数结构体
 */
export type DescribeNatRuleScopesRequest = null

/**
 * DescribeCfwRuleOptimization请求参数结构体
 */
export interface DescribeCfwRuleOptimizationRequest {
  /**
   * <p>防火墙规则类型。必填。枚举：border 互联网边界；nat NAT 边界；vpc VPC 间；enterprise_sg 企业安全组。</p>
   */
  RuleType: string
  /**
   * <p>要执行的优化维度白名单。可选，例如 D1、D2、D8；不传默认执行全部支持维度。</p>
   */
  Dimensions?: Array<string>
  /**
   * <p>长期零命中规则阈值天数。可选，默认 180。</p>
   */
  IdleDays?: number
  /**
   * <p>单 IP 离散过多聚合建议的最小数量。可选，默认 10。</p>
   */
  IpAggMin?: number
  /**
   * <p>可迁移 IOC 建议中返回的样例 IOC 数量上限。可选，默认 50。</p>
   */
  IocSample?: number
}

/**
 * 前端图表使用日志存储统计柱形图数据
 */
export interface StorageHistogramShow {
  /**
   * 存储类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: Array<string>
  /**
   * 日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dates?: Array<string>
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<IntArray>
}

/**
 * 入侵防御封禁列表、放通列表添加规则入参
 */
export interface IntrusionDefenseRule {
  /**
   * 规则方向，0出站，1入站，3内网间
   */
  Direction: number
  /**
   * 规则结束时间，格式：2006-01-02 15:04:05，必须大于当前时间
   */
  EndTime: string
  /**
   * 规则IP地址，IP与Domain必填其中之一
   */
  IP?: string
  /**
   * 规则域名，IP与Domain必填其中之一
   */
  Domain?: string
  /**
   * 规则开始时间
   */
  StartTime?: string
  /**
   * 备注信息，长度不能超过50
   */
  Comment?: string
}

/**
 * DescribeLogStorageStatistic请求参数结构体
 */
export interface DescribeLogStorageStatisticRequest {
  /**
   * <p>开始时间</p><p>参数格式：2026-07-01 15:02:01</p>
   */
  StartTime?: string
  /**
   * <p>结束时间</p><p>参数格式：2026-07-01 15:02:01</p>
   */
  EndTime?: string
}

/**
 * DescribeFwGroupInstanceInfo返回参数结构体
 */
export interface DescribeFwGroupInstanceInfoResponse {
  /**
   * <p>防火墙(组)详细信息</p>
   */
  VpcFwGroupLst?: Array<VpcFwGroupInfo>
  /**
   * <p>防火墙(组)个数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssetSync返回参数结构体
 */
export interface DescribeAssetSyncResponse {
  /**
   * <p>返回状态<br>1 更新中<br>2 更新完成<br>3 更新失败<br>4 更新失败</p>
   */
  Status?: number
  /**
   * <p>success 成功<br>其他失败</p>
   */
  ReturnMsg?: string
  /**
   * <p>0 成功<br>非0 失败</p>
   */
  ReturnCode?: number
  /**
   * <p>已有CVM数量</p>
   */
  CVMCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNatSequenceRules返回参数结构体
 */
export interface ModifyNatSequenceRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私有连接端点信息
 */
export interface EndpointInfo {
  /**
   * 引流私有连接端点id
   */
  EndpointId?: string
  /**
   * 引流VpcId
   */
  VpcId?: string
  /**
   * 所属地域
   */
  Region?: string
  /**
   * 引流Vpc的Cidr
   */
  VpcCidr?: string
}

/**
 * 查询下拉选择选项数据
 */
export interface FilterDataObject {
  /**
   * 显示名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Text?: string
  /**
   * 实际值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * DescribeNatFwInfoCount返回参数结构体
 */
export interface DescribeNatFwInfoCountResponse {
  /**
   * <p>返回参数 success 成功 failed 失败</p>
   */
  ReturnMsg?: string
  /**
   * <p>当前租户的nat防火墙实例个数</p>
   */
  NatFwInsCount?: number
  /**
   * <p>当前租户接入防火墙的子网个数</p>
   */
  SubnetCount?: number
  /**
   * <p>打开NAT防火墙开关个数</p>
   */
  OpenSwitchCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则生效范围信息
 */
export interface RuleScopeInfo {
  /**
   * NAT边界防火墙：ALL，全局生效；ap-guangzhou，生效的地域；cfwnat-xxx，生效基于实例维度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scope?: string
  /**
   * 生效范围描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScopeDesc?: string
}

/**
 * ModifyVpcFwGroup请求参数结构体
 */
export interface ModifyVpcFwGroupRequest {
  /**
   * <p>编辑的防火墙(组)ID</p>
   */
  FwGroupId: string
  /**
   * <p>修改防火墙(组)名称</p>
   */
  Name?: string
  /**
   * <p>编辑的防火墙实例列表</p>
   */
  VpcFwInstances?: Array<VpcFwInstance>
  /**
   * <p>指定防火墙使用网段信息</p>
   */
  FwCidrInfo?: FwCidrInfo
}

/**
 * ModifyEnterpriseSecurityDispatchStatus返回参数结构体
 */
export interface ModifyEnterpriseSecurityDispatchStatusResponse {
  /**
   * 0: 修改成功, 其他: 修改失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 接入防火墙的互联集合对
 */
export interface InterconnectPair {
  /**
   * 集合A
   */
  GroupA: Array<AccessInstanceInfo>
  /**
   * 集合B
   */
  GroupB: Array<AccessInstanceInfo>
  /**
   * 互联模式："CrossConnect": 交叉互联（组A内每个实例和组B内每个实例互联），"FullMesh": 全互联（组A实际和组B内容一致，相当于组内两两互联）
   */
  InterconnectMode: string
}

/**
 * ModifyVpcFwSequenceRules返回参数结构体
 */
export interface ModifyVpcFwSequenceRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpcFwSequenceRules请求参数结构体
 */
export interface ModifyVpcFwSequenceRulesRequest {
  /**
   * 规则快速排序：OrderIndex，原始序号；NewOrderIndex：新序号
   */
  RuleChangeItems?: Array<RuleChangeItem>
}

/**
 * ModifyIsolateTable返回参数结构体
 */
export interface ModifyIsolateTableResponse {
  /**
   * 处理返回码：0 表示成功。
   */
  ReturnCode?: number
  /**
   * 处理结果信息，成功时为 success。
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySecurityGroupSequenceRules请求参数结构体
 */
export interface ModifySecurityGroupSequenceRulesRequest {
  /**
   * 方向，0：出站，1：入站，默认1
   */
  Direction: number
  /**
   * 企业安全组规则快速排序数据
   */
  Data: Array<SecurityGroupOrderIndexData>
}

/**
 * CreateChooseVpcs返回参数结构体
 */
export interface CreateChooseVpcsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatCcnFwSwitch返回参数结构体
 */
export interface DescribeNatCcnFwSwitchResponse {
  /**
   * <p>开关接入模式，1-自动接入，2-手动接入</p><p>枚举值：</p><ul><li>1： 自动接入</li><li>2： 手动接入</li></ul>
   */
  SwitchMode?: number
  /**
   * <p>引流路由方法，0-多路由表，1-策略路由</p><p>枚举值：</p><ul><li>0： 多路由表</li><li>1： 策略路由</li></ul>
   */
  RoutingMode?: number
  /**
   * <p>Bypass状态，0-关闭，1-开启</p><p>枚举值：</p><ul><li>0： 关闭</li><li>1： 开启</li></ul>
   */
  Bypass?: number
  /**
   * <p>云联网实例ID</p>
   */
  CcnId?: string
  /**
   * <p>接入的实例列表</p>
   */
  AccessInstanceList?: Array<AccessInstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRunSyncAsset返回参数结构体
 */
export interface ModifyRunSyncAssetResponse {
  /**
   * <p>0：同步成功，1：资产更新中，2：后台同步调用失败</p>
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySequenceAclRules请求参数结构体
 */
export interface ModifySequenceAclRulesRequest {
  /**
   * 规则快速排序：OrderIndex，原始序号；NewOrderIndex：新序号
   */
  RuleChangeItems: Array<RuleChangeItem>
  /**
   * 规则方向：1，入站；0，出站
   */
  Direction: number
}

/**
 * DescribeResourceGroupNew请求参数结构体
 */
export interface DescribeResourceGroupNewRequest {
  /**
   * 查询类型 网络结构-vpc，业务识别-resource ，资源标签-tag
   */
  QueryType: string
  /**
   * 资产组id  全部传0
   */
  GroupId?: string
  /**
   * all  包含子组 own自己
   */
  ShowType?: string
}

/**
 * ModifyBlockTop请求参数结构体
 */
export interface ModifyBlockTopRequest {
  /**
   * 操作类型 1 置顶 0取消
   */
  OpeType: string
  /**
   * 记录id
   */
  UniqueId: string
}

/**
 * RemoveOfflineExportTask请求参数结构体
 */
export interface RemoveOfflineExportTaskRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 是否保留文件，1保留，非1删除
   */
  KeepFile?: number
}

/**
 * DeleteAcRule返回参数结构体
 */
export interface DeleteAcRuleResponse {
  /**
   * 状态值 0: 删除成功, !0: 删除失败
   */
  Status?: number
  /**
   * 返回多余的信息
   */
  Info?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例详情结果
 */
export interface InstanceInfo {
  /**
   * appid信息
   */
  AppId?: string
  /**
   * 资产来源
1公网 2内网
   */
  InsSource?: string
  /**
   * 资产类型
 3是cvm实例,4是clb实例,5是eni实例,6是mysql,7是redis,8是NAT,9是VPN,10是ES,11是MARIADB,12是KAFKA 13 NATFW
   */
  InsType?: number
  /**
   * 资产id
   */
  InstanceId?: string
  /**
   * 资产名
   */
  InstanceName?: string
  /**
   * 漏洞数
   */
  LeakNum?: string
  /**
   * 端口数
   */
  PortNum?: string
  /**
   * 内网ip
   */
  PrivateIp?: string
  /**
   * 公网ip
   */
  PublicIp?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 地域
   */
  RegionKey?: string
  /**
   * 资产路径
   */
  ResourcePath?: Array<string>
  /**
   * 扫描结果
   */
  Server?: Array<string>
  /**
   * 子网id
   */
  SubnetId?: string
  /**
   * vpc名称
   */
  VPCName?: string
  /**
   * vpcid信息
   */
  VpcId?: string
}

/**
 * ModifyNatFwSwitch返回参数结构体
 */
export interface ModifyNatFwSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPC防火墙(组)四种开关展示
 */
export interface FwGroupSwitchShow {
  /**
   * 防火墙开关ID
   */
  SwitchId?: string
  /**
   * 防火墙开关NAME
   */
  SwitchName?: string
  /**
   * 互通模式
   */
  SwitchMode?: number
  /**
   * 开关边连接类型 0：对等连接， 1：云连网
   */
  ConnectType?: number
  /**
   * 连接ID
   */
  ConnectId?: string
  /**
   * 连接名称
   */
  ConnectName?: string
  /**
   * 源实例信息
   */
  SrcInstancesInfo?: Array<NetInstancesInfo>
  /**
   * 目的实例信息
   */
  DstInstancesInfo?: Array<NetInstancesInfo>
  /**
   * 防火墙(组)数据
   */
  FwGroupId?: string
  /**
   * 防火墙(组)名称
   */
  FwGroupName?: string
  /**
   * 开关状态 0：关 ， 1：开
   */
  Enable?: number
  /**
   * 开关的状态 0：正常， 1：转换中
   */
  Status?: number
  /**
   * 0-非sase实例，忽略，1-未绑定状态，2-已绑定
   */
  AttachWithEdge?: number
  /**
   * 对等防火墙和开关状态 0：正常， 1：对等未创建防火墙，2：对等已创建防火墙，未打开开关
   */
  CrossEdgeStatus?: number
  /**
   * 网络经过VPC防火墙CVM所在地域
   */
  FwInsRegion?: Array<string>
  /**
   * 0 观察 1 拦截 2 严格 3 关闭 4 不支持ips 前端展示tag
   */
  IpsAction?: number
  /**
   * 开关关联的防火墙实例列表
   */
  FwInsLst?: Array<VpcFwInstanceShow>
  /**
   * 开关是否处于bypass状态
0：正常状态
1：bypass状态
   */
  BypassStatus?: number
  /**
   * 0: ipv4 , 1:ipv6
   */
  IpVersion?: number
}

/**
 * DescribeBlockByIpTimesList返回参数结构体
 */
export interface DescribeBlockByIpTimesListResponse {
  /**
   * 返回数据
   */
  Data?: Array<IpStatic>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防火墙(组)ID 和 名称
 */
export interface FwGroupIdName {
  /**
   * 防火墙(组)ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FwGroupId?: string
  /**
   * 防火墙(组)名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FwGroupName?: string
}

/**
 * DescribeBlockIgnoreList请求参数结构体
 */
export interface DescribeBlockIgnoreListRequest {
  /**
   * 单页数量
   */
  Limit: number
  /**
   * 页偏移量
   */
  Offset: number
  /**
   * 方向：1互联网入站，0互联网出站，3内网，空 全部方向
   */
  Direction: string
  /**
   * 排序类型：desc降序，asc正序
   */
  Order: string
  /**
   * 排序列：EndTime结束时间，StartTime开始时间，MatchTimes命中次数
   */
  By: string
  /**
   * blocklist 封禁列表
whitelist 白名单列表
   */
  ShowType: string
  /**
   * 搜索参数，json格式字符串，空则传"{}"，域名：domain，危险等级：level，放通原因：ignore_reason，安全事件来源：rule_source，地理位置：address，模糊搜索：common
   */
  SearchValue?: string
  /**
   * 规则类型：1封禁，2放通
   */
  RuleType?: number
}

/**
 * DescribeBlockIgnoreList返回参数结构体
 */
export interface DescribeBlockIgnoreListResponse {
  /**
   * 列表数据
   */
  Data?: Array<BlockIgnoreRule>
  /**
   * 查询结果总数，用于分页
   */
  Total?: number
  /**
   * 状态值，0：查询成功，非0：查询失败
   */
  ReturnCode?: number
  /**
   * 状态信息，success：查询成功，fail：查询失败
   */
  ReturnMsg?: string
  /**
   * 安全事件来源下拉框
   */
  SourceList?: Array<string>
  /**
   * 对应规则类型的数量，示例：[0,122,30,55,12,232,0]，封禁0个，IP地址122个，域名30个，威胁情报55个，资产实例12个，自定义策略232个，入侵防御规则0个
   */
  RuleTypeDataList?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCcnVpcFwSwitch请求参数结构体
 */
export interface DescribeCcnVpcFwSwitchRequest {
  /**
   * <p>云联网ID</p>
   */
  CcnId: string
}

/**
 * DescribeSecurityGroupRegionList返回参数结构体
 */
export interface DescribeSecurityGroupRegionListResponse {
  /**
   * <p>配置信息</p>
   */
  Data?: Array<SecurityGroupRegion>
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIPStatusList返回参数结构体
 */
export interface DescribeIPStatusListResponse {
  /**
   * IP状态信息
   */
  StatusList?: Array<IPDefendStatus>
  /**
   * 状态码
   */
  ReturnCode?: number
  /**
   * 状态信息
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDatabaseWhiteListRules请求参数结构体
 */
export interface CreateDatabaseWhiteListRulesRequest {
  /**
   * 创建白名单数据
   */
  DatabaseWhiteListRuleData: Array<DatabaseWhiteListRuleData>
}

/**
 * 地址模板列表数据
 */
export interface TemplateListInfo {
  /**
   * 模板ID
   */
  Uuid?: string
  /**
   * 模板名称
   */
  Name?: string
  /**
   * 描述
   */
  Detail?: string
  /**
   * IP模板
   */
  IpString?: string
  /**
   * 插入时间
   */
  InsertTime?: string
  /**
   * 修改时间
   */
  UpdateTime?: string
  /**
   * 模板类型
   */
  Type?: number
  /**
   * 关联规则条数
   */
  RulesNum?: number
  /**
   * 模板Id
   */
  TemplateId?: string
  /**
   * 协议端口模板，协议类型，4:4层协议，7:7层协议
   */
  ProtocolType?: string
  /**
   * 模板包含地址数量
   */
  IPNum?: number
  /**
   * IP版本,0,IPv4;1,IPv6
   */
  IpVersion?: number
}

/**
 * 封禁或放通规则条目；各字段的校验、归一化和实际用途由 RuleType 决定。
 */
export interface BanAndAllowRule {
  /**
   * 规则备注，最多 200 个字符。
   */
  Comment?: string
  /**
   * 自定义放通规则详情。RuleType=6 时使用；其它规则类型不读取此字段。
   */
  CustomRule?: CustomWhiteRule
  /**
   * 生效方向，使用逗号分隔的整数：0 互联网出站、1 互联网入站、2 双向、3 东西向、4 情报误报反馈、5 内网访问源、6 内网访问目的。所有 RuleType 均须显式传入非空值。RuleType=6 会先校验本字段，再根据 CustomRule 重新计算最终方向；例如私网源到私网目的可传 5,6，创建后应查询确认最终方向。
   */
  DirectionList?: string
  /**
   * 规则截止时间，使用北京时间（UTC+8）的 YYYY-MM-DD HH:MM:SS 格式，且不得早于服务器处理时刻；3000-01-01 00:00:00 表示长期有效。
   */
  EndTime?: string
  /**
   * RuleType=6 的生效引擎位图：1 互联网边界旁路、2 NAT 防火墙、4 VPC 防火墙、8 互联网边界串行、16 NDR；组合值按位相加，取值范围为 0 至 31。非零值会与源、目的地址适用的引擎取交集，并保留 NDR 位；结果为 0 时，IPv6 或私网 IPv4 地址使用 6，其它地址使用 15。其它 RuleType 不使用该字段。
   */
  FwType?: number
  /**
   * 规则对象。RuleType=1 或 2 时传 IP 地址，RuleType=3 时传域名，RuleType=4 时传情报标识，RuleType=5 时使用 DescribeCfwAssets 返回的 assets[].instance_id。RuleType=6 新建时必须显式传空字符串，由服务生成规则 ID，不可省略。更新既有自定义规则时传入该规则的现有 ID。
   */
  Ioc?: string
}

/**
 * NDR资产服务统计结果
 */
export interface NDRAssetServiceStats {
  /**
   * 服务名称
   */
  Name?: string
  /**
   * 服务计数
   */
  Count?: number
}

/**
 * 多日志主题检索topic信息
 */
export interface SearchLogInfos {
  /**
   * 日志主题ID
   */
  TopicId?: string
  /**
   * 日志存储生命周期
   */
  Period?: number
  /**
   * 透传本次接口返回的Context值，可获取后续更多日志，过期时间1小时
注意：此字段可能返回 null，表示取不到有效值。
   */
  Context?: string
}

/**
 * ModifyStorageSetting请求参数结构体
 */
export type ModifyStorageSettingRequest = null

/**
 * DescribeEdgeIpSimple返回参数结构体
 */
export interface DescribeEdgeIpSimpleResponse {
  /**
   * ip 开关列表
   */
  Data?: Array<EdgeIpInfoSimple>
  /**
   * ip 开关列表个数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwDnatRule请求参数结构体
 */
export interface DescribeNatFwDnatRuleRequest {
  /**
   * <p>需要查询的索引，特定场景使用，可不填</p>
   */
  Index?: string
  /**
   * <p>过滤条件组合</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>每页条数</p>
   */
  Limit?: number
  /**
   * <p>偏移值</p>
   */
  Offset?: number
  /**
   * <p>检索的起始时间，可不传</p>
   */
  StartTime?: string
  /**
   * <p>检索的截止时间，可不传</p>
   */
  EndTime?: string
  /**
   * <p>desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值，可不传</p>
   */
  Order?: string
  /**
   * <p>排序所用到的字段，可不传</p>
   */
  By?: string
}

/**
 * DescribeBlockStaticList请求参数结构体
 */
export interface DescribeBlockStaticListRequest {
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 列表类型，只能是下面三种之一：port、address、ip
   */
  QueryType: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * top数
   */
  Top: number
  /**
   * 查询条件
   */
  SearchValue?: string
}

/**
 * 防火墙引流网关信息
 */
export interface FwGateway {
  /**
   * 防火墙网关id
   */
  GatewayId: string
  /**
   * 网关所属vpc id
   */
  VpcId: string
  /**
   * 网关ip地址
   */
  IpAddress: string
}

/**
 * 设置nat防火墙的vpc dns 接入开关
 */
export interface DnsVpcSwitch {
  /**
   * vpc id
   */
  VpcId: string
  /**
   * 0：设置为关闭 1:设置为打开
   */
  Status: number
}

/**
 * ModifyClusterFwBypass请求参数结构体
 */
export interface ModifyClusterFwBypassRequest {
  /**
   * <p>防火墙类型，&quot;VPC_FW&quot;-VPC防火墙，&quot;NAT_FW&quot;-NAT防火墙</p>
   */
  FwType: string
  /**
   * <p>云联网实例ID</p>
   */
  CcnId: string
  /**
   * <p>Bypass开关，true-开启Bypass（禁用正常下一跳，流量绕过防火墙），false-关闭Bypass（启用正常下一跳，流量经过防火墙）</p>
   */
  Enable: boolean
  /**
   * <p>NAT防火墙实例ID，FwType为nat时必填</p>
   */
  NatInsId?: string
}

/**
 * NAT防火墙开关详情
 */
export interface NatFwSwitchDetailS {
  /**
   * <p>NAT实例ID</p>
   */
  InsObj?: string
  /**
   * <p>实例名称</p>
   */
  ObjName?: string
  /**
   * <p>防火墙类型</p>
   */
  FwType?: string
  /**
   * <p>资产类型，nat-VPC内防护，nat_ccn-CCN集群模式</p>
   */
  AssetType?: string
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>开关接入模式，1-自动接入，2-手动接入</p>
   */
  SwitchMode?: number
  /**
   * <p>引流路由方法，0-多路由表，1-策略路由</p>
   */
  RoutingMode?: number
  /**
   * <p>开关状态，0-未开启，1-已开启，2-开启中，3-关闭中</p>
   */
  Status?: number
  /**
   * <p>ip版本，0：ipv4；1：ipv6</p>
   */
  IpVersion?: number
  /**
   * <p>是否非集群模式，0-集群模式，1-非集群模式</p>
   */
  NonCluster?: number
  /**
   * <p>入侵防御动作</p>
   */
  IpsAction?: number
  /**
   * <p>流量监控开关</p>
   */
  TransEnable?: number
  /**
   * <p>Bypass状态，0-关闭，1-开启</p>
   */
  Bypass?: number
  /**
   * <p>关联ID，nat_ccn资产类型时为云联网实例ID, nat资产类型时为空</p>
   */
  AttachId?: string
  /**
   * <p>关联ID的实例名称，nat_ccn资产类型时为云联网名称</p>
   */
  AttachName?: string
  /**
   * <p>NAT防火墙所在VPC ID</p>
   */
  NatVpcId?: string
  /**
   * <p>NAT防火墙所在VPC的VPC名称</p>
   */
  NatVpcName?: string
  /**
   * <p>CCN关联实例列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttachIns?: Array<AttachInsInfo>
  /**
   * <p>终端节点列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Endpoints?: Array<EndpointInfo>
  /**
   * <p>防火墙开关操作时的进度状态：</p><p>// 开启 — 自动模式（3步）<br>&quot;AUTO_OPEN_ORCHESTRATING&quot;      // 步骤1: 预编排策略路由<br>&quot;AUTO_OPEN_CREATING_RESOURCES&quot; // 步骤2: 创建引流网络和资源<br>&quot;AUTO_OPEN_PUSHING_ROUTES&quot;     // 步骤3: 创建策略路由</p><p>// 开启 — 手动模式（1步）<br>&quot;MANUAL_OPEN_CREATING_RESOURCES&quot; // 步骤1: 创建引流网络和资源</p><p>// 关闭 — 自动模式（2步）<br>&quot;AUTO_CLOSE_DELETING_ROUTES&quot;    // 步骤1: 删除策略路由<br>&quot;AUTO_CLOSE_DELETING_RESOURCES&quot; // 步骤2: 删除引流网络和资源<br>// 关闭 — 手动模式（1步）<br>&quot;MANUAL_CLOSE_DELETING_RESOURCES&quot; // 步骤1: 删除引流网络和资源</p><p>// 修改 — 自动模式（3步）<br>&quot;AUTO_MODIFY_ORCHESTRATING&quot;   // 步骤1: 预编排策略路由<br>&quot;AUTO_MODIFY_DELETING_ROUTES&quot; // 步骤2: 删除旧策略路由<br>&quot;AUTO_MODIFY_PUSHING_ROUTES&quot;  // 步骤3: 创建新策略路由</p><p>// 修改 — 手动模式（1步，仅 VPC 防火墙存在手动模式修改）<br>&quot;MANUAL_MODIFY_UPDATING_RESOURCES&quot; // 步骤1: 更新引流网络和资源</p>
   */
  Progress?: string
  /**
   * <p>预接入检查结果</p>
   */
  CheckResult?: ClusterFwPreAccessCheckResult
}

/**
 * DescribeCfwAssets请求参数结构体
 */
export interface DescribeCfwAssetsRequest {
  /**
   * <p>资产类型。可选，默认 host；枚举 host 主机资产、vpc VPC 网络、subnet 子网。</p>
   */
  AssetType?: string
  /**
   * <p>IP 地址过滤。可选，支持部分匹配；适用于 host。</p>
   */
  Ip?: string
  /**
   * <p>实例 ID 过滤。可选，适用于 host。</p>
   */
  InstanceId?: string
  /**
   * <p>VPC ID 过滤。可选，适用于 host、vpc、subnet。</p>
   */
  VpcId?: string
  /**
   * <p>子网 ID 过滤。可选，适用于 host、subnet。</p>
   */
  SubnetId?: string
  /**
   * <p>实例类型过滤。可选，适用于 host；常见值包括 CVM、CLB、ENI、POD、MYSQL、REDIS、MARIADB、NAT、VPN、HAVIP、NATFW、GAAP、DC。</p>
   */
  InstanceType?: string
  /**
   * <p>最大返回资产数。可选，默认 100，最大 1000。</p>
   */
  Limit?: number
  /**
   * <p>上一页 Response.Data 返回的不透明资产或指纹续查 token。首次查询不传；续查时只传 NextToken，不能同时传 AssetType、过滤条件或 Limit。调用方无需区分 token 类型；无效、篡改或租户不匹配会被拒绝。</p>
   */
  NextToken?: string
}

/**
 * DescribeNatFwSwitch返回参数结构体
 */
export interface DescribeNatFwSwitchResponse {
  /**
   * <p>总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * <p>NAT边界防火墙开关列表数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<NatSwitchListData>
  /**
   * <p>开关相关VPC列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcList?: Array<CommonIdName>
  /**
   * <p>开关相关NAT列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatList?: Array<CommonIdName>
  /**
   * <p>开关相关ROUTE列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RouteList?: Array<CommonIdName>
  /**
   * <p>开启开关个数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OnNum?: number
  /**
   * <p>关闭开关个数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OffNum?: number
  /**
   * <p>失败开关状态</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailData?: Array<CommonIdNameStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAllRuleStatus请求参数结构体
 */
export interface ModifyAllRuleStatusRequest {
  /**
   * 状态，0：全部停用，1：全部启用
   */
  Status: number
  /**
   * 方向，0：出站，1：入站
   */
  Direction?: number
  /**
   * Edge ID值
   */
  EdgeId?: string
  /**
   * NAT地域
   */
  Area?: string
}

/**
 * ModifyVpcFwGroup返回参数结构体
 */
export interface ModifyVpcFwGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * vpc的防火墙网段
 */
export interface FwVpcCidr {
  /**
   * vpc的id
   */
  VpcId: string
  /**
   * 防火墙网段，最少/24的网段
   */
  FwCidr: string
}

/**
 * ModifyRunSyncAsset请求参数结构体
 */
export interface ModifyRunSyncAssetRequest {
  /**
   * <p>0: 互联网防火墙开关，1：vpc 防火墙开关</p>
   */
  Type?: number
}

/**
 * CreateAcRules返回参数结构体
 */
export interface CreateAcRulesResponse {
  /**
   * 状态值，0:操作成功
   */
  Status?: number
  /**
   * 返回多余的信息
   */
  Info?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAssetScan返回参数结构体
 */
export interface ModifyAssetScanResponse {
  /**
   * 接口返回信息
   */
  ReturnMsg?: string
  /**
   * 接口返回错误码，0请求成功  非0失败
   */
  ReturnCode?: number
  /**
   * 状态值 0：成功，1 执行扫描中,其他：失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAllPublicIPSwitchStatus请求参数结构体
 */
export interface ModifyAllPublicIPSwitchStatusRequest {
  /**
   * 状态，0：关闭，1：开启
   */
  Status: number
  /**
   * 选中的防火墙开关Id
   */
  FireWallPublicIPs?: Array<string>
}

/**
 * RemoveNatAcRule请求参数结构体
 */
export interface RemoveNatAcRuleRequest {
  /**
   * <p>NAT 边界访问控制规则 ID 列表。具体规则 ID 通过 DescribeCfwRules 查询 RuleType=nat 和目标 RuleUuid，并使用返回的 rules[].uuid。数组仅含 -1 时删除 Direction 指定方向下当前账号的全部可操作规则，风险极高；其它数组按 ID 删除。至少匹配一条即成功；具体 ID 删除不按 Direction 筛选。成功响应回显请求中的 ID 列表。</p>
   */
  RuleUuid: Array<number | bigint>
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * <p>规则方向：1 表示入站，0 表示出站。仅 RuleUuid 恰好为 [-1] 时用于选择全删方向；按具体 ID 删除时可省略，Direction 不参与 ID 筛选。全删时必须使用 0 或 1。</p>
   */
  Direction?: number
}

/**
 * DescribeNatFwInstance返回参数结构体
 */
export interface DescribeNatFwInstanceResponse {
  /**
   * <p>实例数组</p>
   */
  NatinsLst?: Array<NatFwInstance>
  /**
   * <p>nat ccn集群防火墙列表</p>
   */
  NatClusterLst?: Array<NatClusterInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFwEdgeIps请求参数结构体
 */
export interface DescribeFwEdgeIpsRequest {
  /**
   * <p>过滤条件组合</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>每页条数</p>
   */
  Limit?: number
  /**
   * <p>偏移值</p>
   */
  Offset?: number
  /**
   * <p>检索的起始时间，可不传</p>
   */
  StartTime?: string
  /**
   * <p>检索的截止时间，可不传</p>
   */
  EndTime?: string
  /**
   * <p>desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值</p>
   */
  Order?: string
  /**
   * <p>排序所用到的字段</p>
   */
  By?: string
}

/**
 * ModifyEWRuleStatus返回参数结构体
 */
export interface ModifyEWRuleStatusResponse {
  /**
   * 状态值，0：修改成功，非0：修改失败
   */
  ReturnCode?: number
  /**
   * 状态信息，success：查询成功，fail：查询失败
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 互联网边界访问控制规则的完整内容，供新增和修改共用。新增时缺省值按各字段说明处理；修改时完整替换可写内容，省略的可写字段不继承旧值，系统管理字段不受影响。
 */
export interface CreateRuleItem {
  /**
   * 规则方向：1 表示入站，0 表示出站；其它整数或省略会校验失败。方向还决定 SourceType、TargetType、Scope 与 Protocol 的可用组合。
   */
  Direction: number
  /**
   * 规则顺序，必须填写。传 -1 时追加到当前方向末尾；正序号表示在对应位置插入并顺延后续规则；0 按 1 处理，其他负数及超范围值不应使用。新增请求包含多条规则时，Direction 必须相同；追加时全部传 -1，插入时按请求顺序传连续递增的正序号。修改请求只接受一条规则。
   */
  OrderIndex: number
  /**
   * 目的端口。Protocol 为 ICMP 时忽略本字段并置为空字符串；其它协议必须提供可解析字符串，可按逗号分隔填写正整数单端口或“起始/结束”范围，起始值不得大于结束值，-1/-1 表示全部端口。FTP 只接受单个正整数。domain 或域名模板目的在 side 或 all 范围下仅接受 -1/-1 或 0/65535。
   */
  Port: string
  /**
   * 协议，解析不区分大小写。四层值 TCP、UDP、ICMP、ICMPV6、ANY 归一化为大写；应用层值 HTTP、HTTPS、HTTP/HTTPS、SMTP、SMTPS、SMTP/SMTPS、FTP、DNS、TLS/SSL 及别名 domain、TLS、SSL 归一化为对应标准值。ANY 表示不限定协议，不表示省略 Protocol；它同时属于可解析的四层协议和应用协议，domain、TLS、SSL 均归一化为 TLS/SSL。domain 或域名模板目的接受上述应用层协议及 ANY，但不接受 FTP 和其它四层协议；dnsparse、domainiptwoverify 仅接受 TCP 或 UDP 且仅支持 serial；其它目的在公有云环境不接受 FTP、ANY 之外的应用层协议。side 或 all 范围下，入站仅接受 TCP，出站仅接受 TCP、HTTP/HTTPS 或 TLS/SSL。DNS 用于非 domain 目的且目的不是 * 时，目的内容还必须是非 IP 的合法域名规则列表。使用协议端口模板时，模板中的每组协议和端口也执行这些联动校验。
   */
  Protocol: string
  /**
   * 流量处理动作，解析不区分大小写。accept 表示放行，drop 表示拒绝，log 表示观察；isolateinaccept 表示放行访问隔离资产的白名单流量，isolateindrop 表示阻断访问隔离资产的其它流量，isolateoutaccept 表示放行隔离资产访问白名单目标，isolateoutdrop 表示阻断隔离资产访问其它目标。drop 及其拒绝别名还会校验当前账号是否具备互联网边界阻断能力。
   */
  RuleAction: string
  /**
   * 访问源内容。ip 或 net 使用合法 IP/CIDR 列表，普通列表最多 10 项；template 使用当前账号可解析的地址模板标识；Direction=0 时，instance、group、tag 使用相应资源标识，其中 instance 必须能解析到公网 IP，tag 必须存在且格式为 {"Key":"标签键","Value":"标签值"}；Direction=1 时，location 使用地域 code CSV 并须通过当前账号的新地域规则能力校验，vendor 使用 tencent、aliyun、aws、huawei、azure 或 all 的 CSV。location、vendor 保存时会转换为地域或厂商匹配信息。
   */
  SourceContent: string
  /**
   * 访问源类型，解析不区分大小写。net、ip 均表示 IP/CIDR，template 表示地址模板，instance 表示资产实例，group 表示资产分组，tag 表示资源标签，location 表示地域，vendor 表示云厂商。Direction=1 接受 ip、net、template、location、vendor；Direction=0 接受 ip、net、template、instance、group、tag。ip 与 net 按同一类型处理。
   */
  SourceType: string
  /**
   * 访问目的内容。ip 或 net 使用合法 IP/CIDR 列表；domain 使用合法的 IP、普通域名或通配域名列表，也接受单独的 *；普通列表最多 10 项，通配域名最多 5 级。domain 配合 DNS 协议时不接受 IP。dnsparse 使用单个合法域名、泛域名或当前账号可解析的 mb_ 域名模板，domainiptwoverify 使用单个不含通配符的合法域名或此类模板；两者均不接受单独的 *、IP、逗号列表或段内通配域名。串行 domain 段内通配和 domainiptwoverify 模板要求当前环境支持对应能力。template 使用当前账号可解析的地址模板标识；Direction=1 时，instance、group、tag 使用相应资源标识，其中 instance 必须能解析到公网 IP，tag 必须存在且格式为 {"Key":"标签键","Value":"标签值"}；Direction=0 时，location 使用地域 code CSV，vendor 使用 tencent、aliyun、aws、huawei、azure 或 all 的 CSV。规范化后的内容最长 1023。
   */
  TargetContent: string
  /**
   * 访问目的类型，解析不区分大小写。net、ip 均表示 IP/CIDR，template 表示地址模板，instance 表示资产实例，group 表示资产分组，tag 表示资源标签，location 表示地域，vendor 表示云厂商，domain 表示 FQDN 匹配（内容也可传 IP 或 *），dnsparse 表示宽松匹配：Host/SNI 与域名匹配，或目的 IP 属于该域名当前 DNS 解析结果，满足任一条件即命中；domainiptwoverify 表示严格匹配：上述两个条件必须同时满足。Direction=1 接受 ip、net、template、domain、instance、group、tag；Direction=0 接受 ip、net、template、domain、dnsparse、domainiptwoverify、location、vendor。
   */
  TargetType: string
  /**
   * 规则描述，不超过 100 个字符。新增时按请求值保存；修改时完整替换，不继承旧值。
   */
  Description?: string
  /**
   * 启用状态。非空值不区分大小写接受字符串 true 或 false，并归一化为启用或停用；省略或传空字符串时读取当前账号的访问控制默认启用配置，该配置不可用时默认启用。替换现有规则时不继承旧值。
   */
  Enable?: string
  /**
   * 关联告警或来源事件 ID。新增时省略或传空字符串表示不关联；修改时应将 DescribeCfwRules 返回的 rules[].log_id 原样传入，未返回时省略或传空字符串。替换时不会自动继承旧值；From=batch_import_cover 时，非空值还会作为覆盖导入后规则的字符串标识复用。
   */
  LogId?: string
  /**
   * 协议端口模板 ID。省略或传空字符串表示不使用模板；非空时必须指向当前账号已有且内容格式为“协议:端口”的模板，否则请求失败。模板中的协议和端口须满足 Direction、TargetType 与 Scope 的联动限制。Protocol 和 Port 仍须符合各自字段规则，但不要求固定填写 ANY、-1/-1 或 serial。
   */
  ParamTemplateId?: string
  /**
   * 规则来源：0 表示普通规则，2 表示隔离资产出向访问规则。新增时可以省略，省略按 0 处理；显式传值及修改时仅接受 0 或 2，修改时应传入原规则值。
   */
  RuleSource?: number
  /**
   * 生效范围，解析不区分大小写：serial 表示仅互联网边界串行防火墙，side 表示仅互联网边界旁路防火墙，all 表示同时作用于串行和旁路防火墙；省略、空字符串或其它值会校验失败。国际站环境会将有效输入统一归一化为 serial。协议、端口、目的类型及协议端口模板的联动限制见 Protocol、Port 和 ParamTemplateId。
   */
  Scope?: string
  /**
   * 规则数值 ID。普通新增、指定位置新增和批量导入会忽略该字段；From=batch_import_cover 时可使用正整数 ID；修改时必须提供当前账号已有且可修改的正整数 ID，用于定位并完整替换原规则，省略、非正整数或不存在的 ID 会导致请求失败。
   */
  Uuid?: number
}

/**
 * DescribeVpcAclEdgeRange请求参数结构体
 */
export interface DescribeVpcAclEdgeRangeRequest {
  /**
   * 规则列表来源：rules，来源于当前已配置的规则；switchs，来源于开关列表
   */
  FromList: string
  /**
   * 需要查询的索引，特定场景使用，可不填
   */
  Index?: string
  /**
   * 过滤条件组合
   */
  Filters?: Array<CommonFilter>
  /**
   * 每页条数
   */
  Limit?: number
  /**
   * 偏移值
   */
  Offset?: number
  /**
   * 检索的起始时间，可不传
   */
  StartTime?: string
  /**
   * 检索的截止时间，可不传
   */
  EndTime?: string
  /**
   * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值
   */
  Order?: string
  /**
   * 排序所用到的字段
   */
  By?: string
}

/**
 * ModifyClusterNatFwSwitch请求参数结构体
 */
export interface ModifyClusterNatFwSwitchRequest {
  /**
   * <p>NAT CCN防火墙开关配置</p>
   */
  NatCcnSwitch: NatCcnSwitchConfig
}

/**
 * ModifyNatInstance返回参数结构体
 */
export interface ModifyNatInstanceResponse {
  /**
   * <p>0 正常<br>-1 异常</p>
   */
  Status?: number
  /**
   * <p>nat实例唯一ID</p>
   */
  NatInstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBlockStaticList返回参数结构体
 */
export interface DescribeBlockStaticListResponse {
  /**
   * 查询结果
   */
  Data?: Array<StaticInfo>
  /**
   * 异步查询状态，1查询执行中，0查询已结束
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIpsModeSwitch返回参数结构体
 */
export interface DescribeIpsModeSwitchResponse {
  /**
   * // Mode 取值校验：0-观察模式, 1-拦截模式, 2-严格模式
   */
  Data?: ModeInfo
  /**
   * 0 成功 非0失败
   */
  ReturnCode?: number
  /**
   * success 成功 其他失败
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIpsRuleListNew返回参数结构体
 */
export interface DescribeIpsRuleListNewResponse {
  /**
   * 总条数
   */
  Total: number
  /**
   * 规则详情
   */
  Data: Array<IpsRuleDetailNew>
  /**
   * 返回状态码 0 成功 非0不成功
   */
  ReturnCode: number
  /**
   * 返回信息  success 成功 其他 不成功
   */
  ReturnMsg: string
  /**
   * 字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIpsRuleListNew请求参数结构体
 */
export interface DescribeIpsRuleListNewRequest {
  /**
   * 每页条数
   */
  Limit: number
  /**
   * 偏移值
   */
  Offset: number
  /**
   * 需要查询的索引，特定场景使用，可不填
   */
  Index?: string
  /**
   * 过滤条件组合
   */
  Filters?: Array<CommonFilter>
  /**
   * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值
   */
  Order?: string
  /**
   * 排序所用到的字段
   */
  By?: string
}

/**
 * CloseClusterNatFwSwitch返回参数结构体
 */
export interface CloseClusterNatFwSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatFwInstanceWithRegion请求参数结构体
 */
export type DescribeNatFwInstanceWithRegionRequest = null

/**
 * ModifyAddressTemplate请求参数结构体
 */
export interface ModifyAddressTemplateRequest {
  /**
   * 地址模板唯一Id
   */
  Uuid: string
  /**
   * 模板名称
   */
  Name: string
  /**
   * 模板描述
   */
  Detail: string
  /**
   * Type为1，ip模板eg：1.1.1.1,2.2.2.2；
Type为5，域名模板eg：www.qq.com,www.tencent.com
   */
  IpString: string
  /**
   * 1 ip模板  5 域名模板
   */
  Type: number
  /**
   * 协议端口模板，协议类型，4:4层协议，7:7层协议。Type=6时必填。
   */
  ProtocolType?: string
}

/**
 * Nat实例类型
 */
export interface NatFwInstance {
  /**
   * nat实例id
   */
  NatinsId?: string
  /**
   * nat实例名称
   */
  NatinsName?: string
  /**
   * 实例所在地域
   */
  Region?: string
  /**
   * 0:新增模式，1:接入模式
   */
  FwMode?: number
  /**
   * 0:正常状态， 1: 正在创建
   */
  Status?: number
  /**
   * nat公网ip
   */
  NatIp?: string
}

/**
 * NAT防火墙Dnat规则
 */
export interface CfwNatDnatRule {
  /**
   * 网络协议，可选值：TCP、UDP。
   */
  IpProtocol: string
  /**
   * 弹性IP。
   */
  PublicIpAddress: string
  /**
   * 公网端口。
   */
  PublicPort: number
  /**
   * 内网地址。
   */
  PrivateIpAddress: string
  /**
   * 内网端口。
   */
  PrivatePort: number
  /**
   * NAT防火墙转发规则描述。
   */
  Description: string
}

/**
 * UpdateClusterVpcFw请求参数结构体
 */
export interface UpdateClusterVpcFwRequest {
  /**
   * <p>ccn防火墙开关配置信息</p>
   */
  CcnSwitch: CcnSwitchInfo
}

/**
 * DescribeBlockList返回参数结构体
 */
export interface DescribeBlockListResponse {
  /**
   * 阻断记录集合
   */
  Data: Array<BlockInfo>
  /**
   * 置顶阻断记录集合
   */
  TopData: Array<BlockInfo>
  /**
   * 数量
   */
  Total: number
  /**
   * 置顶数量
   */
  TopCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckClusterNatFwPreAccess返回参数结构体
 */
export interface CheckClusterNatFwPreAccessResponse {
  /**
   * <p>检查项清单，按执行顺序返回。前端据此渲染检查项骨架，描述文案已按请求的 Language 返回对应语言（中文/英文）。检查通过轮询 DescribeClusterNatCcnFwSwitchList 接口读取 CheckResult 获取每个阶段的通过/失败状态。</p>
   */
  CheckItems?: Array<ClusterFwPreAccessCheckItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNatFwDnatRule请求参数结构体
 */
export interface DeleteNatFwDnatRuleRequest {
  /**
   * <p>0：cfw新增模式，1：cfw接入模式。</p>
   */
  Mode: number
  /**
   * <p>防火墙实例id，该字段必须传递。</p>
   */
  CfwInstance?: string
  /**
   * <p>添加或删除操作的Dnat规则列表。</p>
   */
  DnatRules?: Array<CfwNatDnatRule>
}

/**
 * CreateAlertCenterRuleAsync返回参数结构体
 */
export interface CreateAlertCenterRuleAsyncResponse {
  /**
   * 请求返回码，0 表示已进入异步处理；处理进度见 Status。
   */
  ReturnCode?: number
  /**
   * 与 ReturnCode 对应的结果信息，成功时为 success。
   */
  ReturnMsg?: string
  /**
   * 异步处理状态：1 表示处理中，使用完全相同的请求参数继续查询；修改参数会发起新的操作。0 表示处理结束，处置结果通过对应查询接口获取。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateChooseVpcs请求参数结构体
 */
export interface CreateChooseVpcsRequest {
  /**
   * vpc列表
   */
  VpcList: Array<string>
  /**
   * zone列表
   */
  AllZoneList: Array<VpcZoneData>
}

/**
 * ModifyNatInstance请求参数结构体
 */
export interface ModifyNatInstanceRequest {
  /**
   * <p>NAT防火墙实例名称</p>
   */
  InstanceName: string
  /**
   * <p>NAT防火墙实例ID</p>
   */
  NatInstanceId?: string
}

/**
 * ModifyBlockIgnoreList返回参数结构体
 */
export interface ModifyBlockIgnoreListResponse {
  /**
   * <p>接口返回信息</p>
   */
  ReturnMsg?: string
  /**
   * <p>接口返回错误码，0请求成功  非0失败</p>
   */
  ReturnCode?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveAcRule返回参数结构体
 */
export interface RemoveAcRuleResponse {
  /**
   * 删除成功后返回被删除策略的uuid
   */
  RuleUuid?: number
  /**
   * 0代表成功，-1代表失败
   */
  ReturnCode?: number
  /**
   * success代表成功，failed代表失败
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCcnVpcFwPolicyLimit返回参数结构体
 */
export interface DescribeCcnVpcFwPolicyLimitResponse {
  /**
   * <p>支持的引流策略数量（最外层总条数）</p>
   */
  CcnPolicyInterconnectPairLenLimit?: number
  /**
   * <p>单条引流策略中单组的最大配置数量（内层单组总条数）</p>
   */
  CcnPolicyGroupLenLimit?: number
  /**
   * <p>接入的实例网段长度（网段数量）限制</p>
   */
  CcnPolicyCidrLenLimit?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddVpcAcRule返回参数结构体
 */
export interface AddVpcAcRuleResponse {
  /**
   * 新增规则的 ID 列表，顺序与 Rules 一致。
   */
  RuleUuids?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckClusterVpcFwPreAccess返回参数结构体
 */
export interface CheckClusterVpcFwPreAccessResponse {
  /**
   * <p>检查项清单，按执行顺序返回。前端据此渲染检查项骨架，描述文案已按请求的 Language 返回对应语言（中文/英文）。检查通过轮询 DescribeClusterVpcFwSwitchs 接口读取 CheckResult 获取每个阶段的通过/失败状态。</p>
   */
  CheckItems?: Array<ClusterFwPreAccessCheckItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySequenceRules请求参数结构体
 */
export interface ModifySequenceRulesRequest {
  /**
   * 边Id值
   */
  EdgeId?: string
  /**
   * 修改数据
   */
  Data?: Array<SequenceData>
  /**
   * NAT地域
   */
  Area?: string
  /**
   * 方向，0：出向，1：入向
   */
  Direction?: number
}

/**
 * DescribeEnterpriseSecurityGroupRule返回参数结构体
 */
export interface DescribeEnterpriseSecurityGroupRuleResponse {
  /**
   * 分页查询时，显示的当前页的页码。
   */
  PageNo?: string
  /**
   * 分页查询时，显示的每页数据的最大条数。
   */
  PageSize?: string
  /**
   * 访问控制策略列表
   */
  Rules?: Array<SecurityGroupRule>
  /**
   * 访问控制策略的总数量。
   */
  TotalCount?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单个阶段的实时检查状态
 */
export interface ClusterFwPreAccessCheckStage {
  /**
   * 检查项 key，与发起检查接口返回的 CheckItems[].Stage 一一对应
   */
  Stage?: string
  /**
   * 该检查项状态，0：进行中，1：通过，2：失败
   */
  Status?: number
  /**
   * 失败时的错误码（仅 Status=2 时有值）
   */
  ErrorCode?: string
  /**
   * 失败时的具体错误信息（仅 Status=2 时有值）
   */
  ErrorMessage?: string
}

/**
 * ModifyNatFwReSelect返回参数结构体
 */
export interface ModifyNatFwReSelectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCfwAssets返回参数结构体
 */
export interface DescribeCfwAssetsResponse {
  /**
   * <p>查询结果。UTF-8 JSON object 字符串；调用方需解析 Response.Data。</p>
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVpcAcRule请求参数结构体
 */
export interface DescribeVpcAcRuleRequest {
  /**
   * <p>每页条数</p>
   */
  Limit: number
  /**
   * <p>偏移值</p>
   */
  Offset: number
  /**
   * <p>需要查询的索引，特定场景使用，可不填</p>
   */
  Index?: string
  /**
   * <p>过滤条件组合</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>检索的起始时间，可不传</p>
   */
  StartTime?: string
  /**
   * <p>检索的截止时间，可不传</p>
   */
  EndTime?: string
  /**
   * <p>desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值</p>
   */
  Order?: string
  /**
   * <p>排序所用到的字段</p>
   */
  By?: string
}

/**
 * AddAclRule返回参数结构体
 */
export interface AddAclRuleResponse {
  /**
   * 新增规则的 ID 列表，顺序与 Rules 一致。
   */
  RuleUuid?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * NAT防火墙引流集群地域状态
 */
export interface NatFwClusterRegionStatus {
  /**
   * <p>NAT网关ID</p>
   */
  NatInsId?: string
  /**
   * <p>云联网ID</p>
   */
  CcnId?: string
  /**
   * <p>地域，如 ap-guangzhou</p>
   */
  Region?: string
  /**
   * <p>地域集群状态，取值：<br>NotDeployed-未部署集群，<br>Deployed-已部署集群但未创建引流网络，<br>DeployedCustomOnly-已部署集群但内网段被覆盖，无法自动选择引流网段，需自定义设置引流网段<br>Auto-已创建引流网络(自动分配CIDR)，<br>Custom-已创建引流网络(自定义CIDR)</p>
   */
  Status?: string
  /**
   * <p>引流网络 CIDR，仅当 Status 为 Auto 或 Custom 时有值</p>
   */
  Cidr?: string
  /**
   * <p>引流路由方法，0-多路由表模式，1-策略路由模式</p>
   */
  RoutingMode?: number
}

/**
 * NAT 访问控制规则参数结构。新增和修改使用相同的字段解析；字段组合按 Direction、源和目的类型与内容、Protocol、Port、ParamTemplateId、RuleAction 和 Scope 校验。
 */
export interface CreateNatRuleItem {
  /**
   * <p>规则方向，JSON 整数：0 表示出站，1 表示入站；其他值被拒绝。方向决定可用的源和目的类型及协议组合。</p>
   */
  Direction: number
  /**
   * <p>规则顺序。使用 -1 追加到当前方向末尾，使用正序号在对应位置插入并顺延后续规则；0 按 1 处理，其他负数及超范围值不应使用。批量新增时按 Rules 顺序依次处理。</p>
   */
  OrderIndex: number
  /**
   * <p>目的端口字符串。支持逗号分隔的单端口或以斜杠分隔的起止范围，例如 80、80,443、80/443；-1/-1 表示全部端口。单端口必须是大于 0 的整数；范围只要求两个端点均为整数且起点不大于终点。Protocol 归一化为 ICMP 时忽略该字段并保存为空字符串；FTP 只接受单端口，不接受逗号列表或斜杠范围。</p>
   */
  Port: string
  /**
   * <p>协议，大小写不敏感并归一化为大写。四层值为 TCP、UDP、ICMP、ICMPV6、ANY；应用层值为 HTTP、HTTPS、HTTP/HTTPS、TLS/SSL、SMTP、SMTPS、SMTP/SMTPS、FTP、DNS，其中 domain、tls、ssl 也归一化为 TLS/SSL；ANY 表示不限定协议，不表示省略 Protocol；它同时可按四层协议和应用协议解析。入站仅允许 ANY、TCP、UDP；domain 目的及解析为域名模板的 template 目的接受上述应用层协议及 ANY，但不接受 FTP；dnsparse 和 domainiptwoverify 目的仅允许 TCP 或 UDP；其他目的不接受 FTP 和 ANY 之外的应用层协议。Protocol=DNS 且目的不是域名模板或单独的 * 时，目的列表只能包含域名，不能包含 IP。</p>
   */
  Protocol: string
  /**
   * <p>流量处理方式，大小写不敏感：accept 表示放行，drop 表示拒绝，log 表示观察；isolateinaccept 表示放行访问隔离资产的白名单流量，isolateindrop 表示阻断访问隔离资产的其它流量，isolateoutaccept 表示放行隔离资产访问白名单目标，isolateoutdrop 表示阻断隔离资产访问其它目标。</p>
   */
  RuleAction: string
  /**
   * <p>访问源内容，格式由 SourceType 和 Direction 决定。net/ip 使用合法 IP 或 CIDR 的逗号列表，最多 10 项；location 使用地域 code，空字符串表示全部地域；vendor 使用 tencent、aliyun、aws、huawei、azure 或 all，可用逗号分隔；template 使用地址模板 ID；instance 使用资产实例 ID；group 使用资源组 ID；tag 使用 JSON 字符串 {"Key":"标签键","Value":"标签值"}，Key 和 Value 大小写固定。</p>
   */
  SourceContent: string
  /**
   * <p>访问源类型，大小写不敏感。net、ip 均表示 IP/CIDR，template 表示地址模板，instance 表示资产实例，group 表示资产分组，tag 表示资源标签，location 表示地域，vendor 表示云厂商。入站支持 net、ip、template、location、vendor；出站支持 net、ip、template、instance、group、tag。</p>
   */
  SourceType: string
  /**
   * <p>访问目的内容，格式由 TargetType 和 Direction 决定。net/ip 使用合法 IP 或 CIDR 的逗号列表；domain 使用合法域名或 IP 的逗号列表，也接受单独的 *，泛域名最多 5 级，段内通配域名要求当前环境支持对应能力；dnsparse 使用单个精确域名、最多 5 级的标准泛域名或相应域名模板，不接受单独的 *、段内通配域名、IP 或逗号列表；domainiptwoverify 使用单个精确域名或不含通配符的相应域名模板，不接受单独的 *、任何通配域名、IP 或逗号列表；location 使用地域 code，空字符串表示全部地域；vendor 使用 tencent、aliyun、aws、huawei、azure 或 all，可用逗号分隔；template 使用地址模板 ID；instance 使用资产实例 ID；group 使用资源组 ID；tag 使用 JSON 字符串 {"Key":"标签键","Value":"标签值"}，Key 和 Value 大小写固定。规范化后的目的内容最长 1023 字节；IP 或 domain 目的最多包含 10 项。</p>
   */
  TargetContent: string
  /**
   * <p>访问目的类型，大小写不敏感。net、ip 均表示 IP/CIDR，template 表示地址模板，instance 表示资产实例，group 表示资产分组，tag 表示资源标签，location 表示地域，vendor 表示云厂商，domain 表示 FQDN 匹配（内容也可传 IP 或 *），dnsparse 表示宽松匹配：Host/SNI 与域名匹配，或目的 IP 属于该域名当前 DNS 解析结果，满足任一条件即命中；domainiptwoverify 表示严格匹配：上述两个条件必须同时满足。入站支持 net、ip、template、instance、group、tag；出站支持 net、ip、template、domain、dnsparse、domainiptwoverify、location、vendor。template 按模板实际类型处理，入站不接受域名模板；部分域名模式要求当前环境支持对应能力。</p>
   */
  TargetType: string
  /**
   * <p>规则描述，不超过 100 个字符。新增时按请求值保存；修改时完整替换，不继承旧值。</p>
   */
  Description?: string
  /**
   * <p>规则状态。字符串 true 表示启用，false 表示禁用，大小写不敏感。省略或传空字符串时读取当前账号的访问控制规则默认状态；配置不存在或无法解析时默认为启用。</p>
   */
  Enable?: string
  /**
   * <p>覆盖导入规则标识。仅 From=batch_import_cover 接受正整数值；其它新增方式和修改请求忽略该字段。</p>
   */
  InternalUuid?: number
  /**
   * <p>端口协议模板 ID。省略或传空字符串时使用 Protocol 和 Port；非空时必须指向当前账号已有的模板，模板条目须满足协议与目的类型的联动限制。使用模板时，Protocol 仍须有效；Protocol 不是 ICMP 时，Port 也须有效，但二者不要求固定为 ANY 和 -1/-1。</p>
   */
  ParamTemplateId?: string
  /**
   * <p>规则生效范围，值中不能含空白字符。ALL 表示全部 NAT 实例；地域 ID（如 ap-guangzhou）表示地域范围；cfwnat- 或 nat- 开头的实例 ID 表示实例范围。非空值必须是已知地域或当前账号已有的 NAT 实例。省略或传空字符串时，有请求 Region 则使用 Region，否则归一化为 ALL。</p>
   */
  Scope?: string
  /**
   * <p>规则 ID。普通新增、insert_rule 和 batch_import 忽略该字段；batch_import_cover 可使用正整数 ID。修改时必须提供当前账号已有且可修改的正整数 ID，并以请求中的完整字段替换该规则，同时保留并返回同一 Uuid；省略、0 或负值无法定位修改目标。</p>
   */
  Uuid?: number
}

/**
 * 企业安全组规则执行顺序修改对象
 */
export interface SecurityGroupOrderIndexData {
  /**
   * 企业安全组规则当前执行顺序
   */
  OrderIndex: number
  /**
   * 企业安全组规则更新目标执行顺序
   */
  NewOrderIndex: number
}

/**
 * DescribeTLogInfo请求参数结构体
 */
export interface DescribeTLogInfoRequest {
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 类型 1 告警 2阻断
   */
  QueryType: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 查询条件
   */
  SearchValue?: string
}

/**
 * 边界防火墙公网IP开关列表
 */
export interface EdgeIpInfo {
  /**
   * 公网IP
   */
  PublicIp?: string
  /**
   * 公网 IP 类型 1 公网,2 弹性,3 弹性ipv6,4 anycastIP, 6 HighQualityEIP
   */
  PublicIpType?: number
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 内网IP
   */
  IntranetIp?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 风险端口数
   */
  PortRiskCount?: number
  /**
   * 最近扫描时间
   */
  LastScanTime?: string
  /**
   * 是否为region eip
0 不为region eip，不能选择串行
1 为region eip 可以选择串行
   */
  IsRegionEip?: number
  /**
   * EIP 所关联的VPC
   */
  VpcId?: string
  /**
   * 0: 该地域暂未支持串行
1: 该用户未在该地域配置串行带宽
2: 该用户已在该地域配置串行带宽，可以开启串行开关
3. 该地域可以支持串行，但是未部署公共集群
   */
  IsSerialRegion?: number
  /**
   * 0: 不是公网CLB 可以开启串行开关
1: 是公网CLB 不可以开启串行开关

   */
  IsPublicClb?: number
  /**
   * 0: 开启开关时提示要创建私有连接。
1: 关闭该开关时提示删除私有连接。
如果大于 1: 关闭开关 、开启开关不需提示创建删除私有连接。
   */
  EndpointBindEipNum?: number
  /**
   * 扫描深度
   */
  ScanMode?: string
  /**
   * 扫描状态
   */
  ScanStatus?: number
  /**
   * 开关状态
0 : 关闭
1 : 开启
2 : 开启中
3 : 关闭中
4 : 异常
   */
  Status?: number
  /**
   * 私有连接ID
   */
  EndpointId?: string
  /**
   * 私有连接IP
   */
  EndpointIp?: string
  /**
   * 0 : 旁路
1 : 串行
2 : 正在模式切换
   */
  SwitchMode?: number
  /**
   * 开关权重
   */
  SwitchWeight?: number
  /**
   * 域名化CLB的域名
   */
  Domain?: string
  /**
   * IP超量状态
   */
  OverUsedStatus?: number
  /**
   * 0 都不支持
1 支持旁路
2 支持串行
3 旁路串行都支持
   */
  SwitchSupportType?: number
}

/**
 * AssetZone
 */
export interface AssetZone {
  /**
   * 地域
   */
  Zone?: string
  /**
   * 地域英文
   */
  ZoneEng?: string
}

/**
 * 接入防火墙实例信息
 */
export interface AccessInstanceInfo {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例类型VPC or DIRECTCONNECT等类型
   */
  InstanceType: string
  /**
   * 实例所在地域
   */
  InstanceRegion: string
  /**
   * 接入防火墙的网段模式：0-不接入，1-接入实例关联的所有网段，2-接入用户自定义的网段
   */
  AccessCidrMode: number
  /**
   * 接入防火墙的网段列表
   */
  AccessCidrList: Array<string>
}

/**
 * DescribeTLogIpList请求参数结构体
 */
export interface DescribeTLogIpListRequest {
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 类型 1 告警 2阻断
   */
  QueryType: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * top数
   */
  Top: number
  /**
   * 查询条件
   */
  SearchValue?: string
}

/**
 * VPC防火墙接入的网络实例类型及数量
 */
export interface VpcFwJoinInstanceType {
  /**
   * 接入实例类型，VPC、DIRECTCONNECT、 VPNGW 等
   */
  JoinType: string
  /**
   * 接入的对应网络实例类型的数量
   */
  Num: number
}

/**
 * OpenClusterNatFwSwitch返回参数结构体
 */
export interface OpenClusterNatFwSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdgeIpSimple请求参数结构体
 */
export interface DescribeEdgeIpSimpleRequest {
  /**
   * 过滤条件组合
   */
  Filters?: Array<CommonFilter>
  /**
   * 每页条数
   */
  Limit?: number
  /**
   * 偏移值
   */
  Offset?: number
  /**
   * desc：降序；asc：升序。根据By字段的值进行排序，这里传参的话则By也必须有值
   */
  Order?: string
  /**
   * 排序所用到的字段
   */
  By?: string
}

/**
 * CreateNatFwInstance返回参数结构体
 */
export interface CreateNatFwInstanceResponse {
  /**
   * <p>防火墙实例id</p>
   */
  CfwInsId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 入侵防御防护模式相关
 */
export interface ModeInfo {
  /**
   * 0-观察模式, 1-拦截模式, 2-严格模式
   */
  Mode?: number
}

/**
 * DescribeCcnVpcFwPolicyLimit请求参数结构体
 */
export type DescribeCcnVpcFwPolicyLimitRequest = null

/**
 * DescribeDefenseSwitch请求参数结构体
 */
export type DescribeDefenseSwitchRequest = null

/**
 * 安全组列表数据
 */
export interface SecurityGroupListData {
  /**
   * 执行顺序
   */
  OrderIndex: number
  /**
   * 访问源
   */
  SourceId: string
  /**
   * 访问源类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100: 资源组
   */
  SourceType: number
  /**
   * 访问目的
   */
  TargetId: string
  /**
   * 访问目的类型，默认为0，1: VPC, 2: SUBNET, 3: CVM, 4: CLB, 5: ENI, 6: CDB, 7: 参数模板, 100:资源组
   */
  TargetType: number
  /**
   * 协议
   */
  Protocol: string
  /**
   * 目的端口
   */
  Port: string
  /**
   * 策略, 1：阻断，2：放行
   */
  Strategy: number
  /**
   * 描述
   */
  Detail: string
  /**
   * 单/双向下发，0:单向下发，1：双向下发
   */
  BothWay: number
  /**
   * 规则ID
   */
  Id?: number
  /**
   * 是否开关开启，0：未开启，1：开启
   */
  Status?: number
  /**
   * 是否是正常规则，0：正常，1：异常
   */
  IsNew?: number
  /**
   * 私有网络ID
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 公网IP，多个以英文逗号分隔
   */
  PublicIp?: string
  /**
   * 内网IP，多个以英文逗号分隔
   */
  PrivateIp?: string
  /**
   * 掩码地址，多个以英文逗号分隔
   */
  Cidr?: string
  /**
   * 端口协议类型参数模板id
   */
  ServiceTemplateId?: string
  /**
   * 生成双向下发规则
   */
  BothWayInfo?: Array<SecurityGroupBothWayInfo>
  /**
   * 方向，0：出站，1：入站，默认1
   */
  Direction?: number
  /**
   * 是否使用端口协议模板，0：否，1：是
   */
  ProtocolPortType?: number
  /**
   * Uuid
   */
  Uuid?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 资产分组名称
   */
  AssetGroupNameIn?: string
  /**
   * 资产分组名称
   */
  AssetGroupNameOut?: string
  /**
   * 模板名称
   */
  ParameterName?: string
  /**
   * 端口协议类型参数模板名称
   */
  ProtocolPortName?: string
}

/**
 * DescribeCcnVpcFwSwitch返回参数结构体
 */
export interface DescribeCcnVpcFwSwitchResponse {
  /**
   * <p>互联对配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InterconnectPairs?: Array<InterconnectPair>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveAcRule请求参数结构体
 */
export interface RemoveAcRuleRequest {
  /**
   * 规则的uuid，可通过查询规则列表获取
   */
  RuleUuid: number
}

/**
 * NAT防火墙开关列表数据
 */
export interface NatSwitchListData {
  /**
   * 列表ID
   */
  Id?: number
  /**
   * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetName?: string
  /**
   * IPv4 CIDR
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetCidr?: string
  /**
   * 关联路由ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RouteId?: string
  /**
   * 关联路由名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RouteName?: string
  /**
   * 云服务器个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CvmNum?: number
  /**
   * 所属VPC ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 所属VPC名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcName?: string
  /**
   * 是否生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enable?: number
  /**
   * 开关状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * NAT网关ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatId?: string
  /**
   * NAT网关名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatName?: string
  /**
   * NAT防火墙实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatInsId?: string
  /**
   * NAT防火墙实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatInsName?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 开关是否异常,0:正常,1:异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Abnormal?: number
  /**
   * nat防火墙出口路由表id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ORTableId?: string
  /**
   * nat防火墙出口路由表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ORTableName?: string
  /**
   * 出口Snat Ip列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ohavips?: Array<string>
}

/**
 * ip防护状态
 */
export interface IPDefendStatus {
  /**
   * ip地址
   */
  IP: string
  /**
   * 防护状态   1:防护打开; -1:地址错误; 其他:未防护
   */
  Status: number
}

/**
 * CreateAddressTemplate请求参数结构体
 */
export interface CreateAddressTemplateRequest {
  /**
   * 模板名称
   */
  Name: string
  /**
   * 模板描述
   */
  Detail: string
  /**
   * Type为1，ip模板eg：1.1.1.1,2.2.2.2；
Type为5，域名模板eg：www.qq.com,www.tencent.com
   */
  IpString: string
  /**
   * 1 ip模板
5 域名模板
6 协议端口模板
   */
  Type: number
  /**
   * 协议端口模板，协议类型，4:4层协议，7:7层协议，Type=6时必填
   */
  ProtocolType?: string
  /**
   * IP版本,0 IPV4;1 IPV6
   */
  IpVersion?: number
}

/**
 * CreateDatabaseWhiteListRules返回参数结构体
 */
export interface CreateDatabaseWhiteListRulesResponse {
  /**
   * 状态值，0:添加成功，非0：添加失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportLogsOffline请求参数结构体
 */
export interface ExportLogsOfflineRequest {
  /**
   * <p>日志类型标识</p><p>枚举值：</p><ul><li>cfw_netflow_border： 流量日志-互联网边界</li><li>cfw_netflow_vpc： 流量日志-VPC边界</li><li>cfw_netflow_nat： 流量日志-NAT边界</li><li>cfw_rule_acl： 访问控制-互联网边界</li><li>cfw_rule_vpc_acl： 访问控制-VPC边界</li><li>cfw_rule_nat_acl： 访问控制-NAT边界</li><li>cfw_rule_threatinfo： 入侵防御-入侵防御</li><li>cfw_netflow_nta： 全流量检测与响应-流量分析</li><li>cfw_ndr_subject_risk： 全流量检测与响应-流量风险</li><li>cfw_ndr_ai_audit： 全流量检测与响应-AI流量风险</li><li>operate_log_all： 操作日志</li></ul>
   */
  Index: string
  /**
   * <p>筛选开始时间</p>
   */
  StartTime: string
  /**
   * <p>筛选结束时间</p>
   */
  EndTime: string
  /**
   * <p>任务名称</p>
   */
  TaskName: string
  /**
   * <p>数据格式</p><p>枚举值：</p><ul><li>.json： JSON格式</li><li>.csv： CSV格式</li></ul>
   */
  DataFormat: string
  /**
   * <p>压缩方式，.zip、.tar.gz、.tar.zst、.tar.lz4、传空不压缩</p>
   */
  CompressionFormat: string
  /**
   * <p>日志排序，desc时间降序，asc时间升序</p>
   */
  Order: string
  /**
   * <p>日志数量，传0按单次上限导出</p>
   */
  Length: number
  /**
   * <p>过滤条件组合</p>
   */
  Filters?: Array<CommonFilter>
  /**
   * <p>COS存储桶名称</p>
   */
  BucketName?: string
  /**
   * <p>COS存储桶地域</p>
   */
  BucketRegion?: string
  /**
   * <p>文件过期时长，1一天，7七天，-1永久</p>
   */
  StorageDays?: number
  /**
   * <p>日志分析查询语句，Query和Filters不能同时使用，在一次请求中有且只能选择一个</p>
   */
  Query?: string
  /**
   * <p>导出任务类型，LogAnalysis日志分析导出，LogSearch日志审计导出</p>
   */
  TaskType?: string
}

/**
 * DescribeUnHandleEventTabList返回参数结构体
 */
export interface DescribeUnHandleEventTabListResponse {
  /**
   * 租户伪攻击链未处置事件
   */
  Data?: UnHandleEvent
  /**
   * 错误码，0成功 非0错误
   */
  ReturnCode?: number
  /**
   * 返回信息 success成功
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防火墙串行地域带宽分配情况
 */
export interface SerialRegionInfo {
  /**
   * <p>地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * <p>分配带宽值 单位Mbps</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Width?: number
  /**
   * <p>弹性开关</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElasticSwitch?: number
  /**
   * <p>弹性带宽上限，单位Mbps</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ElasticBandwidth?: number
  /**
   * <p>七天入向峰值带宽，单位bps</p>
   */
  InFlowMax?: number
  /**
   * <p>七天出向峰值带宽，单位bps</p>
   */
  OutFlowMax?: number
  /**
   * <p>边界按流量弹性开关</p><p>取值范围：[0, 1]</p><p>默认值：0</p>
   */
  ElasticTrafficSwitch?: number
}

/**
 * ModifyEnterpriseSecurityGroupRule返回参数结构体
 */
export interface ModifyEnterpriseSecurityGroupRuleResponse {
  /**
   * ModifyType=0/1 返回规则 ID；ModifyType=2 回显请求中的 RuleUuid。
   */
  NewRuleUuid?: number
  /**
   * 处理状态：0 表示成功。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySecurityGroupSequenceRules返回参数结构体
 */
export interface ModifySecurityGroupSequenceRulesResponse {
  /**
   * 状态值，0：修改成功，非0：修改失败
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBlockByIpTimesList请求参数结构体
 */
export interface DescribeBlockByIpTimesListRequest {
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * ip查询条件
   */
  Ip: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 方向
   */
  Direction?: string
  /**
   * vpc间防火墙开关边id
   */
  EdgeId?: string
  /**
   * 日志来源 move：vpc间防火墙
   */
  LogSource?: string
  /**
   * 来源
   */
  Source?: string
  /**
   * 地域
   */
  Zone?: string
}

/**
 * RemoveEnterpriseSecurityGroupRule返回参数结构体
 */
export interface RemoveEnterpriseSecurityGroupRuleResponse {
  /**
   * 回显请求中的 RuleUuid。
   */
  RuleUuid?: number
  /**
   * 处理状态：0 表示成功。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnterpriseSecurityGroupRuleList请求参数结构体
 */
export interface DescribeEnterpriseSecurityGroupRuleListRequest {
  /**
   * 分页每页数量
   */
  Limit: number
  /**
   * 分页当前页
   */
  Offset: number
  /**
   * 启用状态 1启用 0 未启用
   */
  Status?: string
  /**
   * 地域
   */
  Area?: string
  /**
   * 规则下发方式筛选  1 新规则和延迟下发  2  仅看新规则
   */
  Filter?: number
  /**
   * 查询条件
   */
  SearchValue?: string
  /**
   * 查询条件新
   */
  SearchFilters?: Array<CommonFilter>
}

/**
 * CreateAlertCenterOmit返回参数结构体
 */
export interface CreateAlertCenterOmitResponse {
  /**
   * 请求返回码，0 表示请求已执行；忽略结果见 Status。
   */
  ReturnCode?: number
  /**
   * 与 ReturnCode 对应的结果信息，成功时为 success。
   */
  ReturnMsg?: string
  /**
   * 忽略处理状态，0 表示成功，非 0 表示未成功。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSerialRegion请求参数结构体
 */
export type DescribeSerialRegionRequest = null

/**
 * DescribeOfflineExportTask返回参数结构体
 */
export interface DescribeOfflineExportTaskResponse {
  /**
   * <p>返回状态码 0 成功 非0不成功</p>
   */
  ReturnCode?: number
  /**
   * <p>返回信息  success 成功 其他 不成功</p>
   */
  ReturnMsg?: string
  /**
   * <p>离线导出任务列表</p>
   */
  Data?: Array<OfflineExportTask>
  /**
   * <p>任务数量</p>
   */
  Total?: number
  /**
   * <p>剩余导出文件配额，单位B</p>
   */
  ExportRemainQuota?: number
  /**
   * <p>导出文件配额，单位B</p>
   */
  ExportQuota?: number
  /**
   * <p>导出数据限制</p>
   */
  ExportLimit?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 封禁放通IOC列表
 */
export interface IocListData {
  /**
   * 待处置IP地址，IP/Domain字段二选一
   */
  IP: string
  /**
   * 只能为0或者1   0代表出站 1代表入站
   */
  Direction: number
  /**
   * 待处置域名，IP/Domain字段二选一
   */
  Domain?: string
}

/**
 * ModifyEdgeIpSwitch返回参数结构体
 */
export interface ModifyEdgeIpSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCheckCcnNonDirectFlag请求参数结构体
 */
export interface UpdateCheckCcnNonDirectFlagRequest {
  /**
   * <p>云联网ID</p>
   */
  CcnId: string
}

/**
 * DeleteNatFwInstance请求参数结构体
 */
export interface DeleteNatFwInstanceRequest {
  /**
   * <p>防火墙实例id</p>
   */
  CfwInstance: string
}

/**
 * DescribeCfwRules返回参数结构体
 */
export interface DescribeCfwRulesResponse {
  /**
   * <p>查询结果。UTF-8 JSON object 字符串；调用方需解析 Response.Data。</p>
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetNatFwDnatRule返回参数结构体
 */
export interface SetNatFwDnatRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPC防火墙实例信息
 */
export interface VpcFwInstanceShow {
  /**
   * VPC防火墙实例ID
   */
  FwInsId?: string
  /**
   * VPC防火墙实例名称
   */
  FwInsName?: string
  /**
   * 网络经过VPC防火墙CVM所在地域
   */
  FwInsRegion?: string
}

/**
 * 日志分析的列属性
 */
export interface Column {
  /**
   * 列的名字
   */
  Name?: string
  /**
   * 列的属性
   */
  Type?: string
}

/**
 * DescribeDefenseSwitch返回参数结构体
 */
export interface DescribeDefenseSwitchResponse {
  /**
   * <p>基础防御开关</p>
   */
  BasicRuleSwitch?: number
  /**
   * <p>安全基线开关</p>
   */
  BaselineAllSwitch?: number
  /**
   * <p>威胁情报开关</p>
   */
  TiSwitch?: number
  /**
   * <p>虚拟补丁开关</p>
   */
  VirtualPatchSwitch?: number
  /**
   * <p>是否历史开启</p>
   */
  HistoryOpen?: number
  /**
   * <p>状态值，0：查询成功，非0：查询失败</p>
   */
  ReturnCode?: number
  /**
   * <p>状态信息，success：查询成功，fail：查询失败</p>
   */
  ReturnMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAcLists请求参数结构体
 */
export interface DescribeAcListsRequest {
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 策略
   */
  Strategy?: string
  /**
   * 搜索值
   */
  SearchValue?: string
  /**
   * 每页条数
   */
  Limit?: number
  /**
   * 偏移值
   */
  Offset?: number
  /**
   * 出站还是入站，1：入站，0：出站
   */
  Direction?: number
  /**
   * EdgeId值
   */
  EdgeId?: string
  /**
   * 规则是否开启，'0': 未开启，'1': 开启, 默认为'0'
   */
  Status?: string
  /**
   * 地域
   */
  Area?: string
  /**
   * 实例ID
   */
  InstanceId?: string
}

/**
 * CCN关联的实例信息
 */
export interface CcnAssociatedInstance {
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>实例类型</p>
   */
  InsType?: string
  /**
   * <p>实例的网段列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CidrLst?: Array<string>
  /**
   * <p>实例所属地域</p>
   */
  InstanceRegion?: string
  /**
   * <p>是否跨账号</p>
   */
  IsCrossInstance?: number
}

/**
 * DeleteAcRule请求参数结构体
 */
export interface DeleteAcRuleRequest {
  /**
   * 删除规则对应的id值, 对应获取规则列表接口的Id 值
   */
  Id: number
  /**
   * 方向，0：出站，1：入站
   */
  Direction: number
  /**
   * EdgeId值两个vpc间的边id
   */
  EdgeId?: string
  /**
   * NAT地域， 如ap-shanghai/ap-guangzhou/ap-chongqing等
   */
  Area?: string
}

/**
 * ModifyNatFwSwitch请求参数结构体
 */
export interface ModifyNatFwSwitchRequest {
  /**
   * <p>开关，0：关闭，1：开启</p>
   */
  Enable: number
  /**
   * <p>防火墙实例id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。</p>
   */
  CfwInsIdList?: Array<string>
  /**
   * <p>子网id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。</p>
   */
  SubnetIdList?: Array<string>
  /**
   * <p>路由表id列表，其中CfwInsIdList，SubnetIdList和RouteTableIdList只能传递一种。</p>
   */
  RouteTableIdList?: Array<string>
}

/**
 * DeleteBlockIgnoreRuleNew请求参数结构体
 */
export interface DeleteBlockIgnoreRuleNewRequest {
  /**
   * 删除模式，必传且只接受整数 0 或 1。0 表示按 Rules 中的 RuleType 与 Ioc 删除匹配记录；1 表示按 ShowType 清空对应列表，其中 blocklist 删除全部 RuleType=1 记录，whitelist 删除全部 RuleType>=2 记录，风险极高。
   */
  DeleteAll: number
  /**
   * <p>AI操作来源</p><p>枚举值：</p><ul><li>console： 控制台来源值</li><li>wechat： 微信</li></ul>。
   */
  CfwAiAgentOperationSource?: string
  /**
   * 可省略。当前处理逻辑不读取该顶层字段；传入值不参与精确删除或整表删除的目标选择。
   */
  RuleType?: number
  /**
   * 待删除规则列表。DeleteAll=0 时必填，每项删除所有与 RuleType、Ioc 匹配的记录；DirectionList 不参与目标匹配，但 RuleType=1、2、3 时必须使用 DescribeBlockIgnoreList 返回的完整方向列表。同一请求混合 RuleType 时，引擎更新使用最后一项的 RuleType。DeleteAll=1 时省略。
   */
  Rules?: Array<BanAndAllowRuleDel>
  /**
   * 列表类型，处理时必传且只接受 blocklist 或 whitelist。DeleteAll=1 时，blocklist 选择全部 RuleType=1 记录，whitelist 选择全部 RuleType>=2 记录；DeleteAll=0 时该字段仅校验取值，不限制 Rules 指定的删除目标。
   */
  ShowType?: string
}

/**
 * 防火墙实例运行状态
 */
export interface CfwInsStatus {
  /**
   * <p>防火墙实例id</p>
   */
  CfwInsId?: string
  /**
   * <p>防火墙类型，nat：nat防火墙；ew：vpc间防火墙</p>
   */
  FwType?: string
  /**
   * <p>实例所属地域</p>
   */
  Region?: string
  /**
   * <p>实例运行状态，Running：正常运行；BypassAutoFix：bypass修复；Updating：升级中；Expand：扩容中；BypassManual：手动触发bypass中；BypassAuto：自动触发bypass中；BypassTcDrop：丢包触发bypass中</p><p>枚举值：</p><ul><li>Running： 正常运行</li><li>BypassAutoFix： 自动bypass已修复</li><li>Updating： 实例升级中</li><li>Expand： 实例扩容中</li><li>BypassManual： 手动触发bypass中</li><li>BypassAuto： 自动触发bypass中</li><li>BypassTcDrop： 丢包触发bypass中</li></ul>
   */
  Status?: string
  /**
   * <p>事件时间</p>
   */
  EventTime?: string
  /**
   * <p>恢复时间</p>
   */
  RecoverTime?: string
  /**
   * <p>实例名称</p>
   */
  CfwInsName?: string
  /**
   * <p>Normal: 正常模式<br>OnlyRoute: 透明模式</p>
   */
  TrafficMode?: string
}

/**
 * 地域的防火墙引流网络状态
 */
export interface RegionFwStatus {
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>引流网络部署状态</p><ol><li>&quot;NotDeployed&quot;  防火墙集群未部署</li><li>&quot;Deployed&quot;        防火墙集群已部署，但未创建引流网络</li><li>&quot;DeployedCustomOnly&quot;  防火墙集群已部署，但内网段被全覆盖，无法自动选择引流网络，需自定义设置引流网段</li><li>&quot;Auto&quot;                防火墙集群已部署，并自动选择网段创建了引流网络</li><li>&quot;Custom&quot;            防火墙集群已部署，并根据用户自定义网段创建了引流网络</li></ol>
   */
  Status?: string
  /**
   * <p>引流网络的cidr，如果没有部署引流网络则为空</p>
   */
  Cidr?: string
}

/**
 * Nat实例卡片详细信息
 */
export interface NatInstanceInfo {
  /**
   * <p>nat实例id</p>
   */
  NatinsId?: string
  /**
   * <p>nat实例名称</p>
   */
  NatinsName?: string
  /**
   * <p>实例所在地域</p>
   */
  Region?: string
  /**
   * <p>0: 新增模式，1:接入模式</p>
   */
  FwMode?: number
  /**
   * <p>实例带宽大小 Mbps</p>
   */
  BandWidth?: number
  /**
   * <p>入向带宽峰值 bps</p>
   */
  InFlowMax?: number
  /**
   * <p>出向带宽峰值 bps</p>
   */
  OutFlowMax?: number
  /**
   * <p>地域中文信息</p>
   */
  RegionZh?: string
  /**
   * <p>公网ip数组</p>
   */
  EipAddress?: Array<string>
  /**
   * <p>内外使用ip数组</p>
   */
  VpcIp?: Array<string>
  /**
   * <p>实例关联子网数组</p>
   */
  Subnets?: Array<string>
  /**
   * <p>0 :正常 1：正在初始化</p>
   */
  Status?: number
  /**
   * <p>地域区域信息</p>
   */
  RegionDetail?: string
  /**
   * <p>实例所在可用区</p>
   */
  ZoneZh?: string
  /**
   * <p>实例所在可用区</p>
   */
  ZoneZhBak?: string
  /**
   * <p>已使用规则数</p>
   */
  RuleUsed?: number
  /**
   * <p>实例的规则限制最大规格数</p>
   */
  RuleMax?: number
  /**
   * <p>实例引擎版本</p>
   */
  EngineVersion?: string
  /**
   * <p>引擎是否可升级：0，不可升级；1，可升级</p>
   */
  UpdateEnable?: number
  /**
   * <p>是的需要升级引擎 支持 nat拨测 1需要 0不需要</p>
   */
  NeedProbeEngineUpdate?: number
  /**
   * <p>引擎运行模式，Normal:正常, OnlyRoute:透明模式</p>
   */
  TrafficMode?: string
  /**
   * <p>实例主所在可用区</p>
   */
  Zone?: string
  /**
   * <p>实例备所在可用区</p>
   */
  ZoneBak?: string
  /**
   * <p>引擎预约升级时间</p>
   */
  ReserveTime?: string
  /**
   * <p>引擎预约升级版本</p>
   */
  ReserveVersion?: string
  /**
   * <p>引擎预约升级版本状态 stable:稳定版；previewed:预览版</p>
   */
  ReserveVersionState?: string
  /**
   * <p>弹性开关<br>1 打开<br>0 关闭</p>
   */
  ElasticSwitch?: number
  /**
   * <p>弹性带宽，单位Mbps</p>
   */
  ElasticBandwidth?: number
  /**
   * <p>是否首次开通按量付费<br>1 是<br>0 不是</p>
   */
  IsFirstAfterPay?: number
  /**
   * <p>按流量弹性开关</p><p>默认值：0</p>
   */
  ElasticTrafficSwitch?: number
}

/**
 * Nat防火墙弹性公网ip列表
 */
export interface NatFwEipsInfo {
  /**
   * 弹性公网ip
   */
  Eip?: string
  /**
   * 所属的Nat网关Id
   */
  NatGatewayId?: string
  /**
   * Nat网关名称
   */
  NatGatewayName?: string
}

/**
 * NDR资产识别服务类型统计结果
 */
export interface NDRAssetCategoryStats {
  /**
   * 服务类型
   */
  Name?: string
  /**
   * 服务统计结果
   */
  Services?: Array<NDRAssetServiceStats>
}

/**
 * DescribeNatFwDnatRule返回参数结构体
 */
export interface DescribeNatFwDnatRuleResponse {
  /**
   * <p>Dnat规则列表</p>
   */
  Data?: Array<DescNatDnatRule>
  /**
   * <p>列表总数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGuideScanInfo请求参数结构体
 */
export type DescribeGuideScanInfoRequest = null

/**
 * DescribeClusterVpcFwSwitchs返回参数结构体
 */
export interface DescribeClusterVpcFwSwitchsResponse {
  /**
   * <p>总条数</p>
   */
  Total?: number
  /**
   * <p>防火墙开关列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ClusterSwitchDetail>
  /**
   * <p>开关开启失败列表</p>
   */
  FailData?: Array<SwitchFailInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckClusterVpcFwPreAccess请求参数结构体
 */
export interface CheckClusterVpcFwPreAccessRequest {
  /**
   * <p>CCN 开关配置，长度为 1 的数组 JSON 字符串，结构与 ModifyClusterVpcFwSwitch 的 CcnSwitch 完全一致。SwitchMode 必须为 1（自动接入），RoutingMode 必须为 1（策略路由）。</p>
   */
  CcnSwitch: Array<CcnSwitchInfo>
  /**
   * <p>预接入检查模式</p><p>枚举值：</p><ul><li>open： 开启开关时预接入检查</li><li>modify： 编辑变更开关时预接入检查</li></ul>
   */
  CheckMode: string
}

/**
 * CreateSecurityGroupRules请求参数结构体
 */
export interface CreateSecurityGroupRulesRequest {
  /**
   * 添加的企业安全组规则数据
   */
  Data: Array<SecurityGroupListData>
  /**
   * 方向，0：出站，1：入站，默认1
   */
  Direction: number
  /**
   * 0：后插，1：前插，2：中插，默认0
   */
  Type?: number
  /**
   * 添加后是否启用规则，0：不启用，1：启用，默认1
   */
  Enable?: number
}

/**
 * NDR资产识别信息
 */
export interface NDRAssetServiceInfo {
  /**
   * 资产ID
   */
  AssetId?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例类型
   */
  InstanceType?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * 私有网络ID
   */
  VpcId?: string
  /**
   * 私有网络名称
   */
  VpcName?: string
  /**
   * 服务IP
   */
  Ip?: string
  /**
   * 服务端口
   */
  Port?: number
  /**
   * IP版本 
"0": IPv4
"1": IPv6
   */
  IpVersion?: string
  /**
   * IP类型
"0": 公网IP
"1": EIP
"-1": 内网IP
   */
  IpType?: string
  /**
   * 服务名称
   */
  AssetService?: string
  /**
   * 服务版本
   */
  AssetVersion?: string
  /**
   * 服务类型
   */
  AssetCategory?: string
  /**
   * 协议
   */
  Protocol?: string
  /**
   * 识别来源
"0": 流量识别
"1": 云资产实例
   */
  IdentificationSource?: string
  /**
   * 首次识别时间
   */
  FirstIdentificationTime?: string
  /**
   * 最近识别时间
   */
  LatestIdentificationTime?: string
  /**
   * 服务地址
   */
  ServerAddr?: string
}

/**
 * 防火墙开关列表对象
 */
export interface SwitchListsData {
  /**
   * 公网IP
   */
  PublicIp?: string
  /**
   * 内网IP
   */
  IntranetIp?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 资产类型
   */
  AssetType?: string
  /**
   * 地域
   */
  Area?: string
  /**
   * 防火墙开关
   */
  Switch?: number
  /**
   * id值
   */
  Id?: number
  /**
   * 公网 IP 类型
   */
  PublicIpType?: number
  /**
   * 风险端口数
   */
  PortTimes?: number
  /**
   * 最近扫描时间
   */
  LastTime?: string
  /**
   * 扫描深度
   */
  ScanMode?: string
  /**
   * 扫描状态
   */
  ScanStatus?: number
}

/**
 * CreateVpcFwGroup请求参数结构体
 */
export interface CreateVpcFwGroupRequest {
  /**
   * <p>VPC防火墙(组)名称</p>
   */
  Name: string
  /**
   * <p>模式 1：CCN云联网模式；0：私有网络模式 2: sase 模式 3：ccn 高级模式 4: 私有网络(跨租户单边模式)</p>
   */
  Mode: number
  /**
   * <p>防火墙(组)下的防火墙实例列表</p>
   */
  VpcFwInstances: Array<VpcFwInstance>
  /**
   * <p>防火墙实例的开关模式<br>1: 单点互通<br>2: 多点互通<br>3: 全互通<br>4: 自定义路由</p>
   */
  SwitchMode: number
  /**
   * <p>auto 自动选择防火墙网段<br>10.10.10.0/24 用户输入的防火墙网段</p>
   */
  FwVpcCidr: string
  /**
   * <p>云联网id ，适用于云联网模式</p>
   */
  CcnId?: string
  /**
   * <p>指定防火墙使用网段信息</p>
   */
  FwCidrInfo?: FwCidrInfo
  /**
   * <p>跨租户管理员模式  1管理员 2多账号</p>
   */
  CrossUserMode?: string
}

/**
 * CreateNatFwInstanceWithDomain请求参数结构体
 */
export interface CreateNatFwInstanceWithDomainRequest {
  /**
   * <p>防火墙实例名称</p>
   */
  Name: string
  /**
   * <p>带宽</p>
   */
  Width: number
  /**
   * <p>模式 1：接入模式；0：新增模式</p>
   */
  Mode: number
  /**
   * <p>新增模式传递参数，其中NewModeItems和NatgwList至少传递一种。</p>
   */
  NewModeItems?: NewModeItems
  /**
   * <p>接入模式接入的nat网关列表，其中NewModeItems和NatgwList至少传递一种。</p>
   */
  NatGwList?: Array<string>
  /**
   * <p>主可用区，为空则选择默认可用区</p>
   */
  Zone?: string
  /**
   * <p>备可用区，为空则选择默认可用区</p>
   */
  ZoneBak?: string
  /**
   * <p>异地灾备 1：使用异地灾备；0：不使用异地灾备；为空则默认不使用异地灾备</p>
   */
  CrossAZone?: number
  /**
   * <p>0不创建域名,1创建域名</p>
   */
  IsCreateDomain?: number
  /**
   * <p>如果要创建域名则必填</p>
   */
  Domain?: string
  /**
   * <p>指定防火墙使用网段信息</p>
   */
  FwCidrInfo?: FwCidrInfo
}

/**
 * 引流地域CIDR配置
 */
export interface RegionCidrConfig {
  /**
   * 引流地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * CIDR模式：0-跳过，1-自动，2-自定义
注意：此字段可能返回 null，表示取不到有效值。
   */
  CidrMode: number
  /**
   * 自定义CIDR（CidrMode=2时必填），其它时候为空字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomCidr: string
}

/**
 * DescribeSwitchLists返回参数结构体
 */
export interface DescribeSwitchListsResponse {
  /**
   * 总条数
   */
  Total?: number
  /**
   * 列表数据
   */
  Data?: Array<SwitchListsData>
  /**
   * 区域列表
   */
  AreaLists?: Array<string>
  /**
   * 打开个数
   */
  OnNum?: number
  /**
   * 关闭个数
   */
  OffNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyResourceGroup返回参数结构体
 */
export interface ModifyResourceGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteResourceGroup返回参数结构体
 */
export interface DeleteResourceGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchLog请求参数结构体
 */
export interface SearchLogRequest {
  /**
   * <p>要检索分析的日志的起始时间，Unix时间戳（毫秒）</p>
   */
  From: number
  /**
   * <p>要检索分析的日志的结束时间，Unix时间戳（毫秒）</p>
   */
  To: number
  /**
   * <p>检索分析语句，最大长度为12KB<br>语句由 <a href="https://cloud.tencent.com/document/product/614/47044" target="_blank">[检索条件]</a> | <a href="https://cloud.tencent.com/document/product/614/44061" target="_blank">[SQL语句]</a>构成，无需对日志进行统计分析时，可省略其中的管道符<code> | </code>及SQL语句<br>使用*或空字符串可查询所有日志</p>
   */
  Query: string
  /**
   * <p>检索语法规则，默认值为0，推荐使用1 。</p><ul><li>0：Lucene语法</li><li>1：CQL语法（日志服务专用检索语法，控制台默认也使用该语法规则）。</li></ul><p>详细说明参见<a href="https://cloud.tencent.com/document/product/614/47044#RetrievesConditionalRules" target="_blank">检索条件语法规则</a></p>
   */
  SyntaxRule?: number
  /**
   * <ul><li>要检索分析的日志主题ID，仅能指定一个日志主题。</li><li>如需同时检索多个日志主题，请使用Topics参数。</li><li>TopicId 和 Topics 不能同时使用，在一次请求中有且只能选择一个。<br>各日志主题ID如下<br>访问控制-互联网边界 cfw_rule_acl<br>访问控制-NAT边界 cfw_rule_nat_acl<br>访问控制-VPC边界 cfw_rule_vpc_acl<br>访问控制-DNS开关 cfw_rule_dns_acl<br>入侵防御 cfw_rule_threatinfo<br>全流量检测与响应日志-流量分析 cfw_netflow_nta<br>全流量检测与响应日志-流量告警 cfw_rule_ndr_threatinfo<br>零信任运维-数据库登录 cfw_operate_db<br>零信任运维-服务器访问 operate_remote_om<br>零信任运维-Web服务访问 operate_web_access<br>零信任运维-行为审计 remoteom_commands<br>流量日志-互联网边界 cfw_netflow_border<br>流量日志-NAT边界 cfw_netflow_nat<br>流量日志-VPC边界 cfw_netflow_vpc<br>流量日志-DNS开关 cfw_netflow_dns<br>流量日志-内网流量 cfw_netflow_fl<br>操作日志 operate_log_all</li></ul>
   */
  TopicId?: string
  /**
   * <ul><li>要检索分析的日志主题列表，最大支持50个日志主题。</li><li>检索单个日志主题时请使用TopicId。</li><li>TopicId 和 Topics 不能同时使用，在一次请求中有且只能选择一个。</li></ul>
   */
  Topics?: Array<MultiTopicSearchInformation>
  /**
   * <p>原始日志是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc<br>注意：</p><ul><li>仅当检索分析语句(Query)不包含SQL时有效</li><li>SQL结果排序方式参考<a href="https://cloud.tencent.com/document/product/614/58978" target="_blank">SQL ORDER BY语法</a></li></ul>
   */
  Sort?: string
  /**
   * <p>表示单次查询返回的原始日志条数，默认为100，最大值为1000。<br>注意：</p><ul><li>仅当检索分析语句(Query)不包含SQL时有效</li><li>SQL结果条数指定方式参考<a href="https://cloud.tencent.com/document/product/614/58977" target="_blank">SQL LIMIT语法</a></li></ul><p>可通过两种方式获取后续更多日志：</p><ul><li>Context:透传上次接口返回的Context值，获取后续更多日志，总计最多可获取1万条原始日志</li><li>Offset:偏移量，表示从第几行开始返回原始日志，无日志条数限制</li></ul>
   */
  Limit?: number
  /**
   * <p>查询原始日志的偏移量，表示从第几行开始返回原始日志，默认为0。<br>注意：</p><ul><li>仅当检索分析语句(Query)不包含SQL时有效</li><li>不能与Context参数同时使用</li><li>仅适用于单日志主题检索</li></ul>
   */
  Offset?: number
  /**
   * <p>透传上次接口返回的Context值，可获取后续更多日志，总计最多可获取1万条原始日志，过期时间1小时。<br>注意：</p><ul><li>透传该参数时，请勿修改除该参数外的其它参数</li><li>仅适用于单日志主题检索，检索多个日志主题时，请使用Topics中的Context</li><li>仅当检索分析语句(Query)不包含SQL时有效，SQL获取后续结果参考<a href="https://cloud.tencent.com/document/product/614/58977" target="_blank">SQL LIMIT语法</a></li></ul>
   */
  Context?: string
  /**
   * <p>执行统计分析（Query中包含SQL）时，是否对原始日志先进行采样，再进行统计分析。<br>0：自动采样;<br>0～1：按指定采样率采样，例如0.02;<br>1：不采样，即精确分析<br>默认值为1</p>
   */
  SamplingRate?: number
  /**
   * <p>为true代表使用新的检索结果返回方式，输出参数AnalysisRecords和Columns有效<br>为false时代表使用老的检索结果返回方式, 输出AnalysisResults和ColNames有效<br>两种返回方式在编码格式上有少量区别，建议使用true</p>
   */
  UseNewAnalysis?: boolean
}

/**
 * CreateAlertCenterIsolate请求参数结构体
 */
export interface CreateAlertCenterIsolateRequest {
  /**
   * 处置对象,资产列表
   */
  HandleAssetList: Array<string>
  /**
   * 处置时间
1  1天
7   7天
-2 永久
   */
  HandleTime: number
  /**
   * 当前日志方向： 0 出向 1 入向
   */
  AlertDirection: number
  /**
   * 隔离类型 
1 互联网入站
2 互联网出站
4 内网访问
   */
  IsolateType: Array<number | bigint>
  /**
   * 运维模式 1 IP白名单 2 身份认证  0 非运维模式
   */
  OmMode?: number
}

/**
 * ModifySecurityGroupItemRuleStatus请求参数结构体
 */
export interface ModifySecurityGroupItemRuleStatusRequest {
  /**
   * 方向，0：出站，1：入站，默认1
   */
  Direction: number
  /**
   * 是否开关开启，0：未开启，1：开启
   */
  Status: number
  /**
   * 更改的企业安全组规则的执行顺序
   */
  RuleSequence: number
}

/**
 * DescribeNatFwClusterRegionStatus返回参数结构体
 */
export interface DescribeNatFwClusterRegionStatusResponse {
  /**
   * <p>返回地域数量</p>
   */
  Total?: number
  /**
   * <p>地域防火墙集群状态列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionFwStatus?: Array<NatFwClusterRegionStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFwGroupIdNames请求参数结构体
 */
export interface DescribeFwGroupIdNamesRequest {
  /**
   * <p>Ip版本，0：IPv4，1：IPv6，默认为IPv4</p>
   */
  IpVersion?: number
}

/**
 * ModifyAcRule请求参数结构体
 */
export interface ModifyAcRuleRequest {
  /**
   * 规则数组
   */
  Data: Array<RuleInfoData>
  /**
   * EdgeId值
   */
  EdgeId?: string
  /**
   * 访问规则状态
   */
  Enable?: number
  /**
   * NAT地域
   */
  Area?: string
}

/**
 * 用于构造二维数组
 */
export interface IntArray {
  /**
   * 数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<number | bigint>
}

/**
 * DescribeNatFwInstancesInfo返回参数结构体
 */
export interface DescribeNatFwInstancesInfoResponse {
  /**
   * <p>实例卡片信息数组</p>
   */
  NatinsLst?: Array<NatInstanceInfo>
  /**
   * <p>nat 防火墙个数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddNatAcRule返回参数结构体
 */
export interface AddNatAcRuleResponse {
  /**
   * 新增规则的 ID 列表，顺序与 Rules 一致。
   */
  RuleUuid?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * vpc间防火墙规则生效范围列表
 */
export interface EdgeRange {
  /**
   * 规则生效的范围id，是在哪对vpc之间还是针对所有vpc间生效
   */
  EdgeId?: string
  /**
   * EdgeId对应的名称
   */
  EdgeName?: string
  /**
   * 本端网络实例Id
   */
  SrcId?: string
  /**
   * 本端网络实例所属地域
   */
  SrcRegion?: string
  /**
   * 本端网络实例名称
   */
  SrcName?: string
  /**
   * 本端网络实例cidr，多个以逗号分隔
   */
  SrcCidr?: string
  /**
   * 对端网络实例Id
   */
  DstId?: string
  /**
   * 对端网络实例所属地域
   */
  DstRegion?: string
  /**
   * 对端网络实例名称
   */
  DstName?: string
  /**
   * 对端网络实例cidr，多个以逗号分隔
   */
  DstCidr?: string
}

/**
 * DescribeResourceGroup请求参数结构体
 */
export interface DescribeResourceGroupRequest {
  /**
   * 查询类型 网络结构 vpc，业务识别- resource ，资源标签-tag
   */
  QueryType: string
  /**
   * 资产组id  全部传0
   */
  GroupId?: string
  /**
   * all  包含子组 own自己
   */
  ShowType?: string
}

/**
 * CreateAcRules请求参数结构体
 */
export interface CreateAcRulesRequest {
  /**
   * 创建规则数据
   */
  Data: Array<RuleInfoData>
  /**
   * 0：添加（默认），1：插入
   */
  Type?: number
  /**
   * 边id
   */
  EdgeId?: string
  /**
   * 访问控制规则状态
   */
  Enable?: number
  /**
   * 0：添加，1：覆盖
   */
  Overwrite?: number
  /**
   * NAT实例ID, 参数Area存在的时候这个必传
   */
  InstanceId?: string
  /**
   * portScan: 来自于端口扫描, patchImport: 来自于批量导入
   */
  From?: string
  /**
   * NAT地域
   */
  Area?: string
}

/**
 * DescribeAssociatedInstanceList请求参数结构体
 */
export interface DescribeAssociatedInstanceListRequest {
  /**
   * 列表偏移量
   */
  Offset: number
  /**
   * 每页记录条数
   */
  Limit: number
  /**
   * 地域代码（例：ap-guangzhou）,支持腾讯云全地域
   */
  Area: string
  /**
   * 额外检索条件（JSON字符串）
   */
  SearchValue?: string
  /**
   * 排序字段
   */
  By?: string
  /**
   * 排序方式（asc:升序,desc:降序）
   */
  Order?: string
  /**
   * 安全组ID
   */
  SecurityGroupId?: string
  /**
   * 实例类型,'3'是cvm实例,'4'是clb实例,'5'是eni实例,'6'是云数据库
   */
  Type?: string
}

/**
 * ModifyTableStatus请求参数结构体
 */
export interface ModifyTableStatusRequest {
  /**
   * EdgeId值两个vpc间的边id
   */
  EdgeId?: string
  /**
   * 状态值，1：锁表，2：解锁表
   */
  Status?: number
  /**
   * Nat所在地域
   */
  Area?: string
  /**
   * 0： 出向，1：入向
   */
  Direction?: number
}

/**
 * DescribeGuideScanInfo返回参数结构体
 */
export interface DescribeGuideScanInfoResponse {
  /**
   * <p>扫描信息</p>
   */
  Data?: ScanInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * vpc 防火墙下单防火墙实例结构体
 */
export interface VpcFwInstance {
  /**
   * 防火墙实例名称
   */
  Name: string
  /**
   * 私有网络模式下接入的VpcId列表；仅私有网络模式使用
   */
  VpcIds: Array<string>
  /**
   * 部署地域信息
   */
  FwDeploy: FwDeploy
  /**
   * 防火墙实例ID (编辑场景传)
   */
  FwInsId?: string
}

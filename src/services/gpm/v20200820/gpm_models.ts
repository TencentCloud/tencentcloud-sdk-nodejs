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
 * DescribeData返回参数结构体
 */
export interface DescribeDataResponse {
  /**
   * 匹配概况
注意：此字段可能返回 null，表示取不到有效值。
   */
  OverviewData?: ReportOverviewData
  /**
   * 匹配请求次数趋势数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrendData?: ReportTrendData
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMatchCodes请求参数结构体
 */
export interface DescribeMatchCodesRequest {
  /**
   * 偏移量，页码
   */
  Offset: number
  /**
   * 每页数量
   */
  Limit: number
  /**
   * 搜索的字符串
   */
  MatchCode?: string
}

/**
 * DeleteRule返回参数结构体
 */
export interface DeleteRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMatch请求参数结构体
 */
export interface ModifyMatchRequest {
  /**
   * 匹配名称，[a-zA-Z0-9-\.]* 长度128
   */
  MatchName: string
  /**
   * 规则code
   */
  RuleCode: string
  /**
   * 超时时间，1-600秒
   */
  Timeout: number
  /**
   * 是否为匹配结果请求服务器资源，0表示否，1表示请求GSE资源
   */
  ServerType: number
  /**
   * 匹配code
   */
  MatchCode: string
  /**
   * 匹配描述，最长1024
   */
  MatchDesc?: string
  /**
   * 只支持 http 和 https 协议
   */
  NotifyUrl?: string
  /**
   * 游戏服务器队列地域
   */
  ServerRegion?: string
  /**
   * 游戏服务器队列
   */
  ServerQueue?: string
  /**
   * 自定义推送数据
   */
  CustomPushData?: string
  /**
   * 游戏服务器会话数据
   */
  ServerSessionData?: string
  /**
   * 游戏属性，key-value结构的数组
   */
  GameProperties?: Array<StringKV>
  /**
   * 日志开关，0表示关，1表示开
   */
  LogSwitch?: number
  /**
   * 标签，key-value结构的数组
   */
  Tags?: Array<StringKV>
}

/**
 * StartMatching返回参数结构体
 */
export interface StartMatchingResponse {
  /**
   * 错误码。
   */
  ErrCode?: number
  /**
   * 匹配票据 ID长度 128。
   */
  MatchTicketId?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMatch请求参数结构体
 */
export interface CreateMatchRequest {
  /**
   * 匹配名称，[a-zA-Z0-9-\.]* 长度128
   */
  MatchName: string
  /**
   * 规则code
   */
  RuleCode: string
  /**
   * 超时时间，1-600秒
   */
  Timeout: number
  /**
   * 是否为匹配结果请求服务器资源，0表示否，1表示请求GSE资源
   */
  ServerType: number
  /**
   * 匹配描述，最长1024
   */
  MatchDesc?: string
  /**
   * 只支持https 和 http 协议
   */
  NotifyUrl?: string
  /**
   * 游戏服务器队列地域
   */
  ServerRegion?: string
  /**
   * 游戏服务器队列
   */
  ServerQueue?: string
  /**
   * 自定义推送数据
   */
  CustomPushData?: string
  /**
   * 游戏服务器会话数据
   */
  ServerSessionData?: string
  /**
   * 游戏属性，key-value结构的数组
   */
  GameProperties?: Array<StringKV>
  /**
   * 日志开关，0表示关，1表示开
   */
  LogSwitch?: number
  /**
   * 标签，key-value结构的数组
   */
  Tags?: Array<StringKV>
}

/**
 * DescribeMatchingProgress请求参数结构体
 */
export interface DescribeMatchingProgressRequest {
  /**
   * 匹配票据 ID列表, 列表长度 12。
   */
  MatchTicketIds: Array<MTicket>
}

/**
 * ModifyMatch返回参数结构体
 */
export interface ModifyMatchResponse {
  /**
   * 匹配信息
   */
  MatchInfo?: MatchInfo
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 统计数据之趋势数据
 */
export interface ReportTrendData {
  /**
   * 总次数
   */
  TotalList: Array<string>
  /**
   * 被取消次数
   */
  CancelList: Array<string>
  /**
   * 成功次数
   */
  SuccessList: Array<string>
  /**
   * 失败次数
   */
  FailList: Array<string>
  /**
   * 超时次数
   */
  TimeoutList: Array<string>
  /**
   * 时间数组，单位：秒
   */
  TimeList: Array<string>
}

/**
 * CreateMatch返回参数结构体
 */
export interface CreateMatchResponse {
  /**
   * 匹配信息
   */
  MatchInfo?: MatchInfo
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则简单信息
 */
export interface RuleBriefInfo {
  /**
   * 规则名称 [a-zA-Z\d-\.]*
   */
  RuleName: string
  /**
   * 关联匹配
   */
  MatchCodeList: Array<StringKV>
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 规则code
   */
  RuleCode: string
}

/**
 * DescribeMatches请求参数结构体
 */
export interface DescribeMatchesRequest {
  /**
   * 当前页号，不传则获取所有有权限的资源。
   */
  PageNumber?: number
  /**
   * 单页大小，不传则获取所有有权限的资源。
   */
  PageSize?: number
  /**
   * 查询类型（可选）：match表示通过matchCode或者matchName来搜索，rule表示通过ruleCode或者ruleName来搜索，其余类型不做过滤处理。
   */
  SearchType?: string
  /**
   * 查询关键词，针对SearchType进行具体过滤的内容。
   */
  Keyword?: string
  /**
   * 标签列表，用于过滤。
   */
  Tags?: Array<Tag>
}

/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
  /**
   * 规则code
   */
  RuleCode: string
}

/**
 * 匹配信息
 */
export interface MatchInfo {
  /**
   * 匹配code
   */
  MatchCode: string
  /**
   * 匹配名称
   */
  MatchName: string
  /**
   * 匹配描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchDesc: string
  /**
   * 规则code
   */
  RuleCode: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 超时时间
   */
  Timeout: number
  /**
   * 接收通知地址
   */
  NotifyUrl: string
  /**
   * 是否为匹配结果请求服务器资源，0否，1请求GSE资源
   */
  ServerType: number
  /**
   * 服务器队列所在地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerRegion: string
  /**
   * 服务器队列
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerQueue: string
  /**
   * 自定义推送数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomPushData: string
  /**
   * 游戏服务器会话数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerSessionData: string
  /**
   * 游戏属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  GameProperties: Array<StringKV>
  /**
   * 日志开关，0表示关，1表示开
   */
  LogSwitch: number
  /**
   * 日志集id
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogsetId: string
  /**
   * 日志集名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogsetName: string
  /**
   * 日志主题id
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogTopicId: string
  /**
   * 日志主题名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogTopicName: string
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags: Array<StringKV>
  /**
   * 地区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId: string
  /**
   * 用户主账号Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin: string
  /**
   * 用户创建账号Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUin: string
  /**
   * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName: string
  /**
   * 日志状态，0表示正常，1表示日志集不存在，2表示日志主题不存在，3表示日志集和日志主题都不存在。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogStatus?: number
}

/**
 * DescribeRules请求参数结构体
 */
export interface DescribeRulesRequest {
  /**
   * 当前页号，不传则返回第一页
   */
  PageNumber?: number
  /**
   * 单页大小，最大 30，不填默认30
   */
  PageSize?: number
  /**
   * 查询类型（可选）：match表示通过matchCode或者matchName来搜索，rule表示通过ruleCode或者ruleName来搜索，其余类型不做过滤处理。
   */
  SearchType?: string
  /**
   * 查询关键词，针对SearchType进行具体过滤的内容。
   */
  Keyword?: string
  /**
   * 标签列表，用于过滤。
   */
  Tags?: Array<Tag>
}

/**
 * DescribeToken返回参数结构体
 */
export interface DescribeTokenResponse {
  /**
   * 当前的MatchCode对应的Token。如果当前MatchCode没有Token，该参数可能取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchToken?: string
  /**
   * 当Token被替换后，GPM将兼容推送原始Token的时间（秒）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompatibleSpan?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRule返回参数结构体
 */
export interface DescribeRuleResponse {
  /**
   * 规则信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleInfo?: RuleInfo
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMatch请求参数结构体
 */
export interface DescribeMatchRequest {
  /**
   * 匹配code
   */
  MatchCode: string
}

/**
 * ModifyRule请求参数结构体
 */
export interface ModifyRuleRequest {
  /**
   * 规则code
   */
  RuleCode: string
  /**
   * 规则名称，只能包含数字、字母、. 和 -
   */
  RuleName: string
  /**
   * 规则描述，最长1024
   */
  RuleDesc?: string
  /**
   * 标签，key-value结构的数组，最多关联50组标签
   */
  Tags?: Array<StringKV>
}

/**
 * DescribeToken请求参数结构体
 */
export interface DescribeTokenRequest {
  /**
   * 匹配code
   */
  MatchCode: string
}

/**
 * DescribeData请求参数结构体
 */
export interface DescribeDataRequest {
  /**
   * 起始时间，单位：秒
   */
  StartTime: number
  /**
   * 截止时间，单位：秒
   */
  EndTime: number
  /**
   * 时间粒度，1表示1天；2表示1小时；3表示1分钟；4表示10分钟；5表示30分钟
   */
  TimeType: number
  /**
   * 匹配code
   */
  MatchCode?: string
}

/**
 * 玩家到各区域的延迟
 */
export interface RegionLatency {
  /**
   * 地域
ap-beijing          华北地区(北京)
ap-chengdu          西南地区(成都)
ap-guangzhou          华南地区(广州)
ap-hongkong          港澳台地区(中国香港)
ap-seoul          亚太地区(首尔)
ap-shanghai          华东地区(上海)
ap-singapore          东南亚地区(新加坡)
eu-frankfurt          欧洲地区(法兰克福)
na-siliconvalley          美国西部(硅谷)
na-toronto          北美地区(多伦多)
ap-mumbai          亚太地区(孟买)
na-ashburn          美国东部(弗吉尼亚)
ap-bangkok          亚太地区(曼谷)
eu-moscow          欧洲地区(莫斯科)
ap-tokyo          亚太地区(东京)
   */
  Region: string
  /**
   * 毫秒延迟 0～999999
   */
  Latency: number
}

/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
  /**
   * 规则名称，[a-zA-Z0-9-\.]* 长度128
   */
  RuleName: string
  /**
   * 规则脚本，长度65535
   */
  RuleScript: string
  /**
   * 规则描述，最长1024
   */
  RuleDesc?: string
  /**
   * 标签，key-value结构的数组，最多关联50组标签
   */
  Tags?: Array<StringKV>
}

/**
 * 匹配概况
 */
export interface ReportOverviewData {
  /**
   * 总次数
   */
  TotalTimes: string
  /**
   * 成功率
   */
  SuccessPercent: number
  /**
   * 超时率
   */
  TimeoutPercent: number
  /**
   * 失败率
   */
  FailPercent: number
  /**
   * 平均匹配时间
   */
  AverageSec: number
}

/**
 * DescribeRule请求参数结构体
 */
export interface DescribeRuleRequest {
  /**
   * 规则code
   */
  RuleCode: string
}

/**
 * DescribeMatch返回参数结构体
 */
export interface DescribeMatchResponse {
  /**
   * 匹配信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchInfo?: MatchInfo
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyToken返回参数结构体
 */
export interface ModifyTokenResponse {
  /**
   * 成功设置的Token。
   */
  MatchToken?: string
  /**
   * 当前Token被替换后，GPM将持续推送原Token的时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompatibleSpan?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 匹配code
 */
export interface MatchCodeAttr {
  /**
   * 匹配code
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchCode: string
}

/**
 * 玩家匹配属性
 */
export interface MatchAttribute {
  /**
   * 属性名 长度 128 [a-zA-Z0-9-\.]*
   */
  Name: string
  /**
   * 属性类型: 0 数值; 1 string; 默认 0
   */
  Type: number
  /**
   * 数字属性值 默认 0.0
   */
  NumberValue?: number
  /**
   * 字符串属性值 长度 128 默认 ""
   */
  StringValue?: string
  /**
   * list 属性值
   */
  ListValue?: Array<string>
  /**
   * 字典属性值
   */
  MapValue?: Array<AttributeMap>
}

/**
 * DeleteMatch返回参数结构体
 */
export interface DeleteMatchResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelMatching请求参数结构体
 */
export interface CancelMatchingRequest {
  /**
   * 匹配 Code
   */
  MatchCode: string
  /**
   * 要取消的匹配匹配票据 ID
   */
  MatchTicketId: string
}

/**
 * 玩家属性字典类型值
 */
export interface AttributeMap {
  /**
   * 属性字典 key [a-zA-Z0-9-\.]*
   */
  Key: string
  /**
   * 属性字典 value
   */
  Value: number
}

/**
 * string keyValue解构
 */
export interface StringKV {
  /**
   * 键
   */
  Key: string
  /**
   * 值
   */
  Value: string
}

/**
 * StartMatchingBackfill请求参数结构体
 */
export interface StartMatchingBackfillRequest {
  /**
   * 匹配code
   */
  MatchCode: string
  /**
   * 玩家信息
   */
  Players: Array<Player>
  /**
   * 游戏服务器回话 ID [1-256] 个ASCII 字符
   */
  GameServerSessionId: string
  /**
   * 匹配票据 Id 默认 "" 为空则由 GPM 自动生成 长度 [1, 128]
   */
  MatchTicketId?: string
}

/**
 * CancelMatching返回参数结构体
 */
export interface CancelMatchingResponse {
  /**
   * 错误码
   */
  ErrCode?: number
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMatchCodes返回参数结构体
 */
export interface DescribeMatchCodesResponse {
  /**
   * 匹配Code
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchCodes?: Array<MatchCodeAttr>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
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
   * 规则信息
   */
  RuleInfo?: RuleInfo
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
   * 规则信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleInfoList?: Array<RuleBriefInfo>
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 当前页号
   */
  PageNumber?: number
  /**
   * 单页大小
   */
  PageSize?: number
  /**
   * 查询类型（可选）matchName表示匹配名称，matchCode表示匹配code，ruleName表示规则名称，tag表示标签Key/Value
   */
  SearchType?: string
  /**
   * 查询关键词（可选）
   */
  Keyword?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * matchCode和匹配票据 ID组合结构
 */
export interface MTicket {
  /**
   * 匹配Code
   */
  MatchCode: string
  /**
   * 匹配票据 ID
   */
  MatchTicketId: string
}

/**
 * 规则信息
 */
export interface RuleInfo {
  /**
   * 规则名称 [a-zA-Z0-9-\.]*
   */
  RuleName: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 规则描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleDesc: string
  /**
   * 规则脚本
   */
  RuleScript: string
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags: Array<StringKV>
  /**
   * 关联匹配
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchCodeList: Array<StringKV>
  /**
   * 规则code
   */
  RuleCode: string
  /**
   * 地区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 用户AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId: string
  /**
   * 用户Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin: string
  /**
   * 用户OwnerUin
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUin: string
}

/**
 * ModifyToken请求参数结构体
 */
export interface ModifyTokenRequest {
  /**
   * 匹配Code。
   */
  MatchCode: string
  /**
   * 单位秒，取值0-1800。此参数表示当前Token被替换后，GPM将持续推送原Token的时间。在CompatibleSpan时间范围内，用户将在事件消息中收到当前和原始Token。
   */
  CompatibleSpan: number
  /**
   * Token，[a-zA-Z0-9-_.], 长度0-64。如果为空，将由GPM随机生成。
   */
  MatchToken?: string
}

/**
 * StartMatchingBackfill返回参数结构体
 */
export interface StartMatchingBackfillResponse {
  /**
   * 匹配票据
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchTicket: MatchTicket
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMatches返回参数结构体
 */
export interface DescribeMatchesResponse {
  /**
   * 匹配信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchInfoList?: Array<MatchInfo>
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 当前页号，不填默认返回第一页
   */
  PageNumber?: number
  /**
   * 单页大小，不填默认取 30，最大值不能超过 30
   */
  PageSize?: number
  /**
   * 查询类型（可选）：matchName表示匹配名称，matchCode表示匹配code，ruleName表示规则名称，tag表示标签Key/Value
   */
  SearchType?: string
  /**
   * 查询关键词（可选）
   */
  Keyword?: string
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 玩家信息。
 */
export interface Player {
  /**
   * 玩家 PlayerId 长度 128 [a-zA-Z\d-\._]*
   */
  Id: string
  /**
   * 玩家昵称，长度 128
   */
  Name: string
  /**
   * 玩家匹配属性，最多 10 条
   */
  MatchAttributes: Array<MatchAttribute>
  /**
   * 队伍名，可以传递不同队伍名，长度 128 [a-zA-Z0-9-\.]*
   */
  Team?: string
  /**
   * 自定义玩家状态 透传参数 [0, 99999]
   */
  CustomPlayerStatus?: number
  /**
   * 自定义玩家信息 透传参数 长度 1024
   */
  CustomProfile?: string
  /**
   * 各区域延迟，最多 20 条
   */
  RegionLatencies?: Array<RegionLatency>
}

/**
 * StartMatching请求参数结构体
 */
export interface StartMatchingRequest {
  /**
   * 匹配 Code。
   */
  MatchCode: string
  /**
   * 玩家信息 最多 200 条。
   */
  Players: Array<Player>
  /**
   * 匹配票据 ID 默认空字符串，为空则由 GPM 自动生成 长度 128，只能包含数字、字母、. 和 -
   */
  MatchTicketId?: string
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DeleteMatch请求参数结构体
 */
export interface DeleteMatchRequest {
  /**
   * 匹配code
   */
  MatchCode: string
}

/**
 * 匹配票据信息
 */
export interface MatchTicket {
  /**
   * 匹配票据 ID长度 128 [a-zA-Z0-9-\.]*
   */
  Id: string
  /**
   * 匹配 Code
   */
  MatchCode: string
  /**
   * 根据 MatchType 取不同的结构序列化结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchResult: string
  /**
   * 表示不同的匹配类型,NORMAL | GSE
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchType: string
  /**
   * 玩家信息列表
   */
  Players: Array<Player>
  /**
   * 匹配状态: SEARCHING 匹配中; PLACING 匹配放置中; COMPLETED 匹配完成; CANCELLED 匹配取消; TIMEDOUT 匹配超时; FAILED 匹配失败
   */
  Status: string
  /**
   * 匹配状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusMessage: string
  /**
   * 匹配状态原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusReason: string
  /**
   * 收到发起匹配请求的时间 eg: "2020-08-17T08:14:38.077Z"
   */
  StartTime: string
  /**
   * 匹配请求因完成、失败、超时、被取消而停止执行的时间 eg: "2020-08-17T08:14:38.077Z"
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime: string
}

/**
 * DescribeMatchingProgress返回参数结构体
 */
export interface DescribeMatchingProgressResponse {
  /**
   * 匹配票据列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MatchTickets: Array<MatchTicket>
  /**
   * 错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrCode: number
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
   * 规则信息
   */
  RuleInfo?: RuleInfo
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

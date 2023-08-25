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
 * DescribeTags返回参数结构体
 */
export interface DescribeTagsResponse {
  /**
   * 列表
   */
  Data: TagInfos
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLink返回参数结构体
 */
export interface DescribeLinkResponse {
  /**
   * 云兔连接详细信息
   */
  Data?: LinkDetailInfo
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateTactic请求参数结构体
 */
export interface CreateTacticRequest {
  /**
   * 策略名称
   */
  Name: string
  /**
   * 是否自动执行
   */
  IsAuto: number
  /**
   * 心跳上报间隔(s)
   */
  PingInterval: number
  /**
   * 是否开启弱信号检测
   */
  IsWeak: number
  /**
   * 弱信号阈值（-dbm）
   */
  WeakThreshold: number
  /**
   * 是否开启时延切换
   */
  IsDelay: number
  /**
   * 网络时延阈值（ms）
   */
  DelayThreshold: number
  /**
   * 是否开启假信号检测
   */
  IsFake: number
  /**
   * 假信号检测IP字符串，用逗号分隔
   */
  FakeIP: string
  /**
   * 假信号检测间隔（s）
   */
  FakeInterval: number
  /**
   * 是否开启网络制式检测
   */
  IsNet: number
  /**
   * 网络回落制式 1 2G、 2 3G 、 3 2/3G
   */
  Network: number
  /**
   * 是否开启移动检测
   */
  IsMove: number
  /**
   * 是否开启最优先运营商
   */
  IsPriorityTele: number
  /**
   * 最优先运营商 1 移动、 2 联通、 3 电信 4 上次在线运营商
   */
  PriorityTele: number
  /**
   * 是否开启最不优先运营商
   */
  IsBottomTele: number
  /**
   * 最不优先运营商 1 移动、 2 联通、 3 电信
   */
  BottomTele: number
  /**
   * 最优先信号选取策略
   */
  IsBestSignal: number
}

/**
 * DeleteTag请求参数结构体
 */
export interface DeleteTagRequest {
  /**
   * 标签ID
   */
  TagID: number
}

/**
 * DescribeOrders返回参数结构体
 */
export interface DescribeOrdersResponse {
  /**
   * 订单列表
   */
  Data?: Orders
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 设备上报信息
 */
export interface DeviceReport {
  /**
   * 移动设备ID
   */
  Imei: string
  /**
   * 经度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Lng: string
  /**
   * 维度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Lat: string
  /**
   * 运营商基站ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Lac: string
  /**
   * 小区CellID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cell: string
  /**
   * 当前上报运营商ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Iccid: string
  /**
   * 信号强度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rss: number
  /**
   * 运营商: 1 移动 2 联通 3 电信
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tele: number
  /**
   * 当前设备策略ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tid: number
  /**
   * 心跳间隔,单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ping: number
  /**
   * 网络延迟,单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Delay: number
  /**
   * 高级日志启停状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Log: number
  /**
   * 设备型号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DevType: string
  /**
   * 设备型号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DevModel: string
  /**
   * 设备版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version: string
  /**
   * 设备刷新时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  UploadTime: string
  /**
   * 网络环境: 0 正常 1 弱网
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 每月第一次上报心跳时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonthFirstTime: string
}

/**
 * ModifyTactic请求参数结构体
 */
export interface ModifyTacticRequest {
  /**
   * 策略名称
   */
  Name: string
  /**
   * 是否自动执行
   */
  IsAuto: number
  /**
   * 心跳上报间隔(s)
   */
  PingInterval: number
  /**
   * 是否开启弱信号检测
   */
  IsWeak: number
  /**
   * 弱信号阈值（-dbm）
   */
  WeakThreshold: number
  /**
   * 是否开启时延切换
   */
  IsDelay: number
  /**
   * 网络时延阈值（ms）
   */
  DelayThreshold: number
  /**
   * 是否开启假信号检测
   */
  IsFake: number
  /**
   * 假信号检测间隔（s）
   */
  FakeInterval: number
  /**
   * 是否开启网络制式检测
   */
  IsNet: number
  /**
   * 网络回落制式 1 2G、 2 3G 、 3 2/3G
   */
  Network: number
  /**
   * 是否开启移动检测
   */
  IsMove: number
  /**
   * 策略ID
   */
  TacticID: number
  /**
   * 是否开启最优先运营商
   */
  IsPriorityTele: number
  /**
   * 最优先运营商 1 移动、 2 联通、 3 电信 4 上次在线运营商
   */
  PriorityTele: number
  /**
   * 是否开启最不优先运营商
   */
  IsBottomTele: number
  /**
   * 最不优先运营商 1 移动、 2 联通、 3 电信
   */
  BottomTele: number
  /**
   * 是否最优先信号选取策略
   */
  IsBestSignal: number
  /**
   * 假信号检测IP字符串，用逗号分隔
   */
  FakeIP?: string
}

/**
 * 策略信息
 */
export interface Tactic {
  /**
   * 策略ID
   */
  ID: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt: string
  /**
   * 是否自动执行策略
   */
  IsAuto: number
  /**
   * 设备上报信息间隔
注意：此字段可能返回 null，表示取不到有效值。
   */
  PingInterval: number
  /**
   * 是否开启弱信号检查
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWeak: number
  /**
   * 弱信号阈值（-dbm）
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeakThreshold: number
  /**
   * 忘了时延切换
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDelay: number
  /**
   * 时延阈值（ms）
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayThreshold: number
  /**
   * 是否开启假信号检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsFake: number
  /**
   * 假信号检测IP字符串，用逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
   */
  FakeIP: string
  /**
   * 假信号检测间隔（s）
注意：此字段可能返回 null，表示取不到有效值。
   */
  FakeInterval: number
  /**
   * 是否开启网络制式检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsNet: number
  /**
   * 网络回落制式 1: 2G、 2: 3G 、 3: 2/3G
注意：此字段可能返回 null，表示取不到有效值。
   */
  Network: number
  /**
   * 是否开启移动检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsMove: number
  /**
   * 策略名称
   */
  Name: string
  /**
   * 是否开启最优先运营商
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPriorityTele: number
  /**
   * 最优先运营商 1 移动、 2 联通、 3 电信 4 上次在线运营商
注意：此字段可能返回 null，表示取不到有效值。
   */
  PriorityTele: number
  /**
   * 是否开启最不优先运营商
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsBottomTele: number
  /**
   * 最不优先运营商 1 移动、 2 联通、 3 电信
注意：此字段可能返回 null，表示取不到有效值。
   */
  BottomTele: number
  /**
   * 是否开启最优先信号选取策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsBestSignal: number
}

/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
  /**
   * 自动化规则ID
   */
  RuleID: number
}

/**
 * DescribeRules请求参数结构体
 */
export interface DescribeRulesRequest {
  /**
   * 自动化规则ID
   */
  RuleID?: number
  /**
   * 自动化规则ID
   */
  RuleIDs?: Array<number | bigint>
  /**
   * 名称
   */
  Name?: string
  /**
   * 类型
   */
  Type?: number
  /**
   * 是否激活
   */
  IsActive?: number
  /**
   * 翻页大小
   */
  Limit?: number
  /**
   * 翻页偏移
   */
  Offset?: number
}

/**
 * ModifyLinkAdvancedLog请求参数结构体
 */
export interface ModifyLinkAdvancedLogRequest {
  /**
   * 云兔ID
   */
  LinkID: number
  /**
   * 是否激活高级日志 0 关闭 1激活
   */
  IsAdLog: number
}

/**
 * DescribeRule返回参数结构体
 */
export interface DescribeRuleResponse {
  /**
   * 策略信息
   */
  Data: RuleDetail
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRule请求参数结构体
 */
export interface ModifyRuleRequest {
  /**
   * 自动化规则名称
   */
  Name: string
  /**
   * 规则类型：用量类(101 当月|102有效期内)、位置类(201行政区|202移动距离)、网络质量类(301网络盲点)
   */
  Type: number
  /**
   * 是否激活
   */
  IsActive: boolean
  /**
   * 触发动作：1 邮件 2 API请求 3 微信 4 停卡 5 地图标识为盲点
   */
  Notice: number
  /**
   * 自动化规则ID
   */
  RuleID: number
  /**
   * 邮箱
   */
  Email?: string
  /**
   * 推送的API地址
   */
  Url?: string
  /**
   * 用量阈值
   */
  DataThreshold?: number
  /**
   * 行政区类型：1. 省份 2. 城市 3. 区
   */
  District?: number
  /**
   * 心跳移动距离阈值
   */
  Distance?: number
  /**
   * 信号强度阈值
   */
  SignalStrength?: number
  /**
   * 标签ID集合
   */
  TagIDs?: Array<number | bigint>
  /**
   * 资费计划
   */
  SalePlan?: string
  /**
   * 具体的账号
   */
  UinAccount?: string
}

/**
 * 云兔连接信息集合
 */
export interface LinkInfos {
  /**
   * 总量
   */
  Total: number
  /**
   * 云兔连接列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<LinkInfo>
}

/**
 * 标签列表集合
 */
export interface TagInfos {
  /**
   * 总量
   */
  Total: number
  /**
   * 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<Tag>
}

/**
 * ModifyTag返回参数结构体
 */
export interface ModifyTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
  /**
   * 自动化规则名称
   */
  Name: string
  /**
   * 规则类型：用量类(101 当月|102有效期内)、位置类(201行政区|202移动距离)、网络质量类(301网络盲点)
   */
  Type: number
  /**
   * 是否激活
   */
  IsActive: boolean
  /**
   * 触发动作：1 邮件 2 API请求 3 微信 4 停卡 5 地图标识为盲点
   */
  Notice: number
  /**
   * 邮箱
   */
  Email?: string
  /**
   * 推送的API地址
   */
  Url?: string
  /**
   * 用量阈值
   */
  DataThreshold?: number
  /**
   * 行政区类型：1. 省份 2. 城市 3. 区
   */
  District?: number
  /**
   * 心跳移动距离阈值
   */
  Distance?: number
  /**
   * 信号强度阈值
   */
  SignalStrength?: number
  /**
   * 盲点时间阈值，天
   */
  LostDay?: number
  /**
   * 标签ID集合
   */
  TagIDs?: Array<number | bigint>
  /**
   * 资费计划
   */
  SalePlan?: string
}

/**
 * 云兔连接详细信息
 */
export interface LinkDetailInfo {
  /**
   * 云兔连接ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID: number
  /**
   * 卡片状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 激活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveTime: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime: string
  /**
   * 数据用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataUse: number
  /**
   * 语音用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioUse: number
  /**
   * 短信用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SmsUse: number
  /**
   * 在线状态 0 未激活 1 在线 2 离线
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkedState: number
  /**
   * 预期策略ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TacticID: number
  /**
   * 策略下发状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  TacticStatus: number
  /**
   * 策略下发成功过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TacticExpireTime: string
  /**
   * 高级日志预期状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsActiveLog: boolean
  /**
   * 运营商 1移动 2联通 3电信
注意：此字段可能返回 null，表示取不到有效值。
   */
  TeleOperator: number
  /**
   * 设备最新上报信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Report: DeviceReport
  /**
   * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags: Array<Tag>
  /**
   * 运营商ICCID信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cards: Array<TeleOperatorCard>
  /**
   * 云兔实际卡片ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CardID: string
}

/**
 * DescribeRule请求参数结构体
 */
export interface DescribeRuleRequest {
  /**
   * 自动化规则ID
   */
  RuleID: number
}

/**
 * 自动化规则集合
 */
export interface RuleInfos {
  /**
   * 总量
   */
  Total: number
  /**
   * 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<Rule>
}

/**
 * ModifyRuleStatus返回参数结构体
 */
export interface ModifyRuleStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLinkTactic返回参数结构体
 */
export interface ModifyLinkTacticResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTags请求参数结构体
 */
export interface DescribeTagsRequest {
  /**
   * 标签名称
   */
  Name?: string
}

/**
 * DescribeLinks返回参数结构体
 */
export interface DescribeLinksResponse {
  /**
   * 云兔连接响应信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: LinkInfos
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTactic返回参数结构体
 */
export interface ModifyTacticResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRuleStatus请求参数结构体
 */
export interface ModifyRuleStatusRequest {
  /**
   * 自动化规则ID
   */
  RuleID: number
  /**
   * 是否激活
   */
  IsActive?: boolean
}

/**
 * DescribeTactics请求参数结构体
 */
export interface DescribeTacticsRequest {
  /**
   * 策略ID
   */
  TacticID?: number
  /**
   * 策略名称
   */
  Name?: string
}

/**
 * 策略信息集合
 */
export interface TacticInfos {
  /**
   * 总量
   */
  Total: number
  /**
   * 策略列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<Tactic>
}

/**
 * RenewLinkInfo请求参数结构体
 */
export interface RenewLinkInfoRequest {
  /**
   * 云兔ID
   */
  LinkID: number
  /**
   * 具体的账号
   */
  UinAccount?: string
}

/**
 * CreateTag请求参数结构体
 */
export interface CreateTagRequest {
  /**
   * 名称
   */
  Name: string
  /**
   * 备注
   */
  Comment?: string
}

/**
 * DeleteTactic返回参数结构体
 */
export interface DeleteTacticResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTactic请求参数结构体
 */
export interface DeleteTacticRequest {
  /**
   * 策略ID
   */
  TacticID: number
}

/**
 * DescribeTactic返回参数结构体
 */
export interface DescribeTacticResponse {
  /**
   * 策略信息
   */
  Data: Tactic
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLinkTactic请求参数结构体
 */
export interface ModifyLinkTacticRequest {
  /**
   * 云兔ID
   */
  LinkID: number
  /**
   * 策略ID
   */
  TacticID: number
}

/**
 * DescribeTactic请求参数结构体
 */
export interface DescribeTacticRequest {
  /**
   * 策略ID
   */
  TacticID: number
}

/**
 * 自动化规则
 */
export interface Rule {
  /**
   * 规则名称
   */
  Name: string
  /**
   * 规则ID
   */
  ID: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt: string
  /**
   * 删除时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeletedAt: string
  /**
   * 规则类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: number
  /**
   * 是否激活
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsActive: boolean
  /**
   * 触发动作：1 邮件 2 API请求 5 停卡 6 地图标识为盲点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notice: number
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email: string
  /**
   * 回调API地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url: string
  /**
   * 用量类：用量阈值,单位MB
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataThreshold: number
  /**
   * 行政区类型：1. 省份 2. 城市 3. 区
注意：此字段可能返回 null，表示取不到有效值。
   */
  District: number
  /**
   * 移动距离阈值，单位KM
注意：此字段可能返回 null，表示取不到有效值。
   */
  Distance: number
  /**
   * 信号强度阈值(-dbm）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignalStrength: number
  /**
   * 盲点阈值天数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LostDay: number
  /**
   * 绑定的标签ID集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagIDs: Array<number | bigint>
  /**
   * 绑定的资费计划
注意：此字段可能返回 null，表示取不到有效值。
   */
  SalePlan: string
}

/**
 * CreateTag返回参数结构体
 */
export interface CreateTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLinks请求参数结构体
 */
export interface DescribeLinksRequest {
  /**
   * 云兔卡ID
   */
  LinkID?: number
  /**
   * 运营商ICCID
   */
  ICCID?: string
  /**
   * 设备码
   */
  IMEI?: string
  /**
   * 卡片状态
   */
  Status?: number
  /**
   * 运营商 1移动 2联通 3电信
   */
  TeleOperator?: number
  /**
   * 标签ID
   */
  TagID?: number
  /**
   * 策略ID
   */
  TacticID?: number
  /**
   * 设备在线状态 0 未激活 1 在线 2 离线
   */
  LinkedState?: number
  /**
   * 标签ID 集合
   */
  TagIDs?: Array<number | bigint>
  /**
   * 翻页大小, 默认翻页大小为10，最大数量为500
   */
  Limit?: number
  /**
   * 翻页起始
   */
  Offset?: number
}

/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自动化规则详细信息
 */
export interface RuleDetail {
  /**
   * 规则名称
   */
  Name: string
  /**
   * 规则ID
   */
  ID: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt: string
  /**
   * 删除时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeletedAt: string
  /**
   * 规则类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: number
  /**
   * 是否激活
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsActive: boolean
  /**
   * 触发动作：1 邮件 2 API请求 5 停卡 6 地图标识为盲点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notice: number
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email: string
  /**
   * 回调API地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url: string
  /**
   * 用量类：用量阈值,单位MB
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataThreshold: number
  /**
   * 行政区类型：1. 省份 2. 城市 3. 区
注意：此字段可能返回 null，表示取不到有效值。
   */
  District: number
  /**
   * 移动距离阈值，单位KM
注意：此字段可能返回 null，表示取不到有效值。
   */
  Distance: number
  /**
   * 信号强度阈值(-dbm）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignalStrength: number
  /**
   * 盲点阈值天数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LostDay: number
  /**
   * 标签ID集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagIDs: Array<number | bigint>
  /**
   * 资费信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SalePlan: string
}

/**
 * DescribeTactics返回参数结构体
 */
export interface DescribeTacticsResponse {
  /**
   * 策略集合信息
   */
  Data: TacticInfos
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewLinkInfo返回参数结构体
 */
export interface RenewLinkInfoResponse {
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
   * 自动化规则列表集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleInfos
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTag返回参数结构体
 */
export interface DeleteTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 运营商卡片信息
 */
export interface TeleOperatorCard {
  /**
   * 开户时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountTime: string
  /**
   * 激活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveTime: string
  /**
   * 运营商ICCID
   */
  ICCID: string
  /**
   * 云兔卡ID
   */
  LinkID: number
  /**
   * 电话号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msisdn: string
  /**
   * 移动用户识别码
注意：此字段可能返回 null，表示取不到有效值。
   */
  IMSI: string
  /**
   * 运营商: 1 移动 2 联通 3 电信
   */
  TeleOperator: number
}

/**
 * ModifyLinkTele返回参数结构体
 */
export interface ModifyLinkTeleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 订单列表
 */
export interface Orders {
  /**
   * 总数
   */
  Total: number
  /**
   * 订单集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<OrderInfo>
}

/**
 * ModifyTag请求参数结构体
 */
export interface ModifyTagRequest {
  /**
   * 名称
   */
  Name: string
  /**
   * 标签ID
   */
  TagID: number
  /**
   * 备注
   */
  Comment?: string
}

/**
 * 云兔标签信息
 */
export interface Tag {
  /**
   * 标签名称
   */
  Name: string
  /**
   * 标签ID
   */
  ID: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt: string
  /**
   * 更改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt: string
}

/**
 * 订单信息
 */
export interface OrderInfo {
  /**
   * 子订单ID
   */
  DealName: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt: string
  /**
   * 订单账户
   */
  Uin: string
  /**
   * 购买数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuyNum: number
  /**
   * 行业代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndustryCode: string
  /**
   * 地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address: string
  /**
   * 联系人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Contact: string
  /**
   * 电话号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msisdn: string
  /**
   * 卡片规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  Specification: string
  /**
   * 用户订单备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment: string
  /**
   * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
   */
  BigDealId: string
  /**
   * 审批状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuditStatus: string
  /**
   * 发货状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowStatus: string
  /**
   * 审批备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
  /**
   * 退费订单
注意：此字段可能返回 null，表示取不到有效值。
   */
  RefundBigDealId: string
}

/**
 * CreateTactic返回参数结构体
 */
export interface CreateTacticResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrders请求参数结构体
 */
export interface DescribeOrdersRequest {
  /**
   * 子订单ID
   */
  DealName?: string
  /**
   * 审批状态 0全部 1通过 2驳回 3待审核
   */
  AuditStatus?: number
  /**
   * 翻页大小
   */
  Limit?: number
  /**
   * 翻页偏移
   */
  Offset?: number
  /**
   * 开始时间,例如2022-06-30 00:00:00
   */
  BeginTime?: string
  /**
   * 结束时间,例如2022-06-30 00:00:00
   */
  EndTime?: string
}

/**
 * ModifyLinkTele请求参数结构体
 */
export interface ModifyLinkTeleRequest {
  /**
   * 云兔ID
   */
  LinkID: number
  /**
   * 运营商 1 移动 2 联通 3 电信
   */
  TeleOperator: number
}

/**
 * 云兔连接基本信息
 */
export interface LinkInfo {
  /**
   * 云兔连接ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID: number
  /**
   * 卡片状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 激活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveTime: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime: string
  /**
   * 数据用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataUse: number
  /**
   * 语音用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioUse: number
  /**
   * 短信用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SmsUse: number
  /**
   * 在线状态 0 未激活 1 在线 2 离线
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkedState: number
  /**
   * 预期策略ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TacticID: number
  /**
   * 策略下发状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  TacticStatus: number
  /**
   * 策略下发成功过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TacticExpireTime: string
  /**
   * 高级日志预期状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsActiveLog: boolean
  /**
   * 运营商 1移动 2联通 3电信
注意：此字段可能返回 null，表示取不到有效值。
   */
  TeleOperator: number
  /**
   * 设备最新上报信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Report: DeviceReport
}

/**
 * DescribeLink请求参数结构体
 */
export interface DescribeLinkRequest {
  /**
   * 云兔卡ID
   */
  LinkID: number
  /**
   * 具体的账号
   */
  UinAccount?: string
}

/**
 * ModifyLinkAdvancedLog返回参数结构体
 */
export interface ModifyLinkAdvancedLogResponse {
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

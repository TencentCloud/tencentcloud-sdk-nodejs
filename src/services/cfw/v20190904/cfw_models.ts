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
 * DescribeVpcRuleOverview返回参数结构体
 */
export interface DescribeVpcRuleOverviewResponse {
  /**
      * 阻断策略规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  StrategyNum?: number

  /**
      * 启用规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartRuleNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSyncAssetStatus返回参数结构体
 */
export interface DescribeSyncAssetStatusResponse {
  /**
   * 0：同步成功，1：资产更新中，2：后台同步调用失败
   */
  Status?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAllRuleStatus返回参数结构体
 */
export interface ModifyAllRuleStatusResponse {
  /**
      * 0: 修改成功, !0: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleOverview返回参数结构体
 */
export interface DescribeRuleOverviewResponse {
  /**
      * 规则总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  AllTotal?: number

  /**
      * 阻断策略规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  StrategyNum?: number

  /**
      * 启用规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartRuleNum?: number

  /**
      * 停用规则数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  StopRuleNum?: number

  /**
      * 剩余配额
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemainingNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAllSwitchStatus请求参数结构体
 */
export interface ModifyAllSwitchStatusRequest {
  /**
   * 状态，0：关闭，1：开启
   */
  Status: number

  /**
   * 0: 边界防火墙开关，1：vpc防火墙开关
   */
  Type?: number

  /**
   * 选中的防火墙开关Id
   */
  Ids?: Array<string>

  /**
   * NAT开关切换类型，1,单个子网，2，同开同关，3，全部
   */
  ChangeType?: number

  /**
   * NAT实例所在地域
   */
  Area?: string
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
 * ModifyItemSwitchStatus返回参数结构体
 */
export interface ModifyItemSwitchStatusResponse {
  /**
   * 修改成功与否状态值
   */
  Status?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySequenceRules返回参数结构体
 */
export interface ModifySequenceRulesResponse {
  /**
      * 0: 修改成功, 其他: 修改失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAcRule返回参数结构体
 */
export interface ModifyAcRuleResponse {
  /**
   * 状态值，0:操作成功
   */
  Status?: number

  /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Info?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTableStatus返回参数结构体
 */
export interface DescribeTableStatusResponse {
  /**
      * 0：正常，其它：不正常
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAcRule返回参数结构体
 */
export interface DeleteAcRuleResponse {
  /**
   * 状态值
   */
  Status?: number

  /**
      * 返回多余的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Info?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 防火墙开关列表对象
 */
export interface SwitchListsData {
  /**
      * 公网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicIp: string

  /**
      * 内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntranetIp: string

  /**
      * 实例名
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceName: string

  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
   * 资产类型
   */
  AssetType: string

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Area: string

  /**
   * 防火墙开关
   */
  Switch: number

  /**
   * id值
   */
  Id: number

  /**
      * 公网 IP 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicIpType: number

  /**
      * 风险端口数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PortTimes: number

  /**
      * 最近扫描时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastTime: string

  /**
      * 扫描深度
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanMode: string

  /**
      * 扫描状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanStatus: number
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
注意：此字段可能返回 null，表示取不到有效值。
      */
  OnNum?: number

  /**
      * 关闭个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  OffNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSyncAssetStatus请求参数结构体
 */
export interface DescribeSyncAssetStatusRequest {
  /**
   * 0: 互联网防火墙开关，1：vpc 防火墙开关
   */
  Type?: number
}

/**
 * DeleteAllAccessControlRule请求参数结构体
 */
export interface DeleteAllAccessControlRuleRequest {
  /**
   * 方向，0：出站，1：入站
   */
  Direction?: number

  /**
   * VPC间防火墙开关ID
   */
  EdgeId?: string

  /**
   * nat地域
   */
  Area?: string
}

/**
 * RunSyncAsset返回参数结构体
 */
export interface RunSyncAssetResponse {
  /**
   * 0：同步成功，1：资产更新中，2：后台同步调用失败
   */
  Status?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunSyncAsset请求参数结构体
 */
export interface RunSyncAssetRequest {
  /**
   * 0: 互联网防火墙开关，1：vpc 防火墙开关
   */
  Type?: number
}

/**
 * DescribeSwitchLists请求参数结构体
 */
export interface DescribeSwitchListsRequest {
  /**
   * 防火墙状态
   */
  Status?: number

  /**
   * 资产类型
   */
  Type?: string

  /**
   * 地域
   */
  Area?: string

  /**
   * 搜索值
   */
  SearchValue?: string

  /**
   * 条数
   */
  Limit?: number

  /**
   * 偏移值
   */
  Offset?: number

  /**
   * 排序，desc：降序，asc：升序
   */
  Order?: string

  /**
   * 排序字段
   */
  By?: string
}

/**
 * ModifyTableStatus返回参数结构体
 */
export interface ModifyTableStatusResponse {
  /**
      * 0：正常，-1：不正常
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyItemSwitchStatus请求参数结构体
 */
export interface ModifyItemSwitchStatusRequest {
  /**
   * id值
   */
  Id: number

  /**
   * 状态值，0: 关闭 ,1:开启
   */
  Status: number

  /**
   * 0: 边界防火墙开关，1：vpc防火墙开关
   */
  Type?: number
}

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
 * DescribeTableStatus请求参数结构体
 */
export interface DescribeTableStatusRequest {
  /**
   * EdgeId值
   */
  EdgeId?: string

  /**
   * 状态值，0：检查表的状态
   */
  Status?: number

  /**
   * Nat所在地域
   */
  Area?: string

  /**
   * 方向，0：出站，1：入站
   */
  Direction?: number
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
   * 出站还是入站，0：入站，1：出站
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
 * DescribeVpcRuleOverview请求参数结构体
 */
export interface DescribeVpcRuleOverviewRequest {
  /**
   * 边id
   */
  EdgeId: string
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
注意：此字段可能返回 null，表示取不到有效值。
      */
  Info?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeNatRuleOverview返回参数结构体
 */
export interface DescribeNatRuleOverviewResponse {
  /**
   * 实例ID
   */
  InstanceId?: string

  /**
   * 实例名称
   */
  InstanceName?: string

  /**
   * 弹性IP列表
   */
  EipList?: Array<string>

  /**
   * 端口转发规则数量
   */
  DnatNum?: number

  /**
   * 访问控制规则总数
   */
  TotalNum?: number

  /**
   * 访问规则剩余条数
   */
  RemainNum?: number

  /**
   * 阻断规则条数
   */
  BlockNum?: number

  /**
   * 启用规则条数
   */
  EnableNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAcRule请求参数结构体
 */
export interface DeleteAcRuleRequest {
  /**
   * id值
   */
  Id: number

  /**
   * 出站还是入站
   */
  Direction: number

  /**
   * EdgeId值
   */
  EdgeId?: string

  /**
   * NAT地域
   */
  Area?: string
}

/**
 * DeleteAllAccessControlRule返回参数结构体
 */
export interface DeleteAllAccessControlRuleResponse {
  /**
   * 状态值
   */
  Status?: number

  /**
      * 返回多余信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Info?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 0：添加，1：插入
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
 * ModifyTableStatus请求参数结构体
 */
export interface ModifyTableStatusRequest {
  /**
   * EdgeId值
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
 * 访问控制列表对象
 */
export interface AcListsData {
  /**
   * 规则id
   */
  Id: number

  /**
      * 访问源
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceIp: string

  /**
      * 访问目的
注意：此字段可能返回 null，表示取不到有效值。
      */
  TargetIp: string

  /**
      * 协议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Protocol: string

  /**
      * 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: string

  /**
      * 策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  Strategy: number

  /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Detail: string

  /**
   * 命中次数
   */
  Count: number

  /**
   * 执行顺序
   */
  OrderIndex: number

  /**
      * 告警规则id
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogId: string
}

/**
 * DescribeNatRuleOverview请求参数结构体
 */
export interface DescribeNatRuleOverviewRequest {
  /**
   * 方向，0：出站，1：入站
   */
  Direction?: number

  /**
   * NAT地域
   */
  Area?: string
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
   * 0：出向，1：入向
   */
  Direction?: number
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
   * 策略
   */
  Strategy: string

  /**
   * 描述
   */
  Detail: string

  /**
   * 方向，0：出站，1：入站
   */
  Direction: number

  /**
   * 源类型,1是ip,2是域名,3是ip地址簿，4是ip组地址簿
   */
  SourceType: number

  /**
   * 目的类型,1是ip,2是域名,3是ip地址簿，4是ip组地址簿
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
   * log
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
   * 云厂商，支持多个，以逗号分隔， 1:腾讯云（仅海外）,2:阿里云,3:亚马逊云,4:华为云,5:微软云
   */
  CloudCode?: string

  /**
   * 是否为地域
   */
  IsRegion?: number

  /**
   * 地域名
   */
  CityName?: string

  /**
   * 地域名
   */
  CountryName?: string
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
注意：此字段可能返回 null，表示取不到有效值。
      */
  Enable?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAllSwitchStatus返回参数结构体
 */
export interface ModifyAllSwitchStatusResponse {
  /**
   * 开启或者关闭成功与否状态值
   */
  Status?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * 消耗组件明细
 */
export interface CostComponentSet {
  /**
   * 组件类型名称
   */
  ComponentCodeName: string

  /**
   * 组件名称
   */
  ItemCodeName: string

  /**
   * 刊例价
   */
  SinglePrice: string

  /**
   * 刊例价单位
   */
  PriceUnit: string

  /**
   * 用量
   */
  UsedAmount: string

  /**
   * 用量单位
   */
  UsedAmountUnit: string

  /**
   * 原价
   */
  Cost: string

  /**
   * 折扣
   */
  Discount: string

  /**
   * 折后价
   */
  RealCost: string

  /**
   * 代金券支付金额
   */
  VoucherPayAmount: string

  /**
   * 现金支付金额
   */
  CashPayAmount: string

  /**
   * 赠送金支付金额
   */
  IncentivePayAmount: string
}

/**
 * 代金券相关信息
 */
export interface VoucherInfos {
  /**
   * 代金券拥有者
   */
  OwnerUin: string

  /**
   * 券状态：待使用：unUsed，已使用： used，已发货：delivered，已作废： cancel，已过期：overdue
   */
  Status: string

  /**
   * 代金券面额（微分）
   */
  NominalValue: number

  /**
   * 剩余金额（微分）
   */
  Balance: number

  /**
   * 代金券id
   */
  VoucherId: string

  /**
   * postPay后付费/prePay预付费/riPay预留实例/空字符串或者'*'表示全部模式
   */
  PayMode: string

  /**
   * 付费场景PayMode=postPay时：spotpay-竞价实例,"settle account"-普通后付费PayMode=prePay时：purchase-包年包月新购，renew-包年包月续费（自动续费），modify-包年包月配置变更(变配）PayMode=riPay时：oneOffFee-预留实例预付，hourlyFee-预留实例每小时扣费，*-支持全部付费场景
   */
  PayScene: string

  /**
   * 有效期生效时间
   */
  BeginTime: string

  /**
   * 有效期截止时间
   */
  EndTime: string

  /**
      * 适用商品信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicableProducts: ApplicableProducts

  /**
      * 不适用商品信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExcludedProducts: Array<ExcludedProducts>
}

/**
 * DescribeCostSummaryByProduct请求参数结构体
 */
export interface DescribeCostSummaryByProductRequest {
  /**
   * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  BeginTime: string

  /**
   * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  EndTime: string

  /**
   * 每次获取数据量
   */
  Limit: number

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 查询账单数据的用户UIN
   */
  PayerUin?: string

  /**
   * 是否需要返回记录数量，0不需要，1需要，默认不需要
   */
  NeedRecordNum?: number
}

/**
 * 消耗汇总详情
 */
export interface ConsumptionSummaryTotal {
  /**
   * 折后总价
   */
  RealTotalCost: string
}

/**
 * DescribeCostSummaryByProject返回参数结构体
 */
export interface DescribeCostSummaryByProjectResponse {
  /**
   * 数据是否准备好，0未准备好，1准备好
   */
  Ready?: number

  /**
   * 消耗详情
   */
  Total?: ConsumptionSummaryTotal

  /**
   * 消耗按业务汇总详情
   */
  Data?: Array<ConsumptionProjectSummaryDataItem>

  /**
   * 记录数量，NeedRecordNum为0是返回null
   */
  RecordNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDosageDetailByDate请求参数结构体
 */
export interface DescribeDosageDetailByDateRequest {
  /**
   * 查询账单开始日期，如 2019-01-01
   */
  StartDate: string

  /**
   * 查询账单结束日期，如 2019-01-01， 时间跨度不超过7天
   */
  EndDate: string

  /**
      * 互动直播：
10194   互动直播-核心机房           :
10195   互动直播-边缘机房

cdn业务：
10180：CDN静态加速流量(国内)
10181：CDN静态加速带宽(国内)
10182：CDN静态加速普通流量
10183：CDN静态加速普通带宽
10231：CDN静态加速流量(海外)
10232：CDN静态加速带宽(海外)

100967：弹性公网IP-按流量计费
101065：公网负载均衡-按流量计费

视频直播
10226 视频直播流量(国内)
10227 视频直播带宽(国内)
100763 视频直播流量(海外)
100762 视频直播宽带(海外)
      */
  ProductCode: string

  /**
      * 查询域名 例如 www.qq.com
非CDN业务查询时传入空字符串，返回的值为空
      */
  Domain: string

  /**
      * 1、如果为空，则返回EIP或CLB所有实例的明细；
2、如果传入实例名，则返回该实例明细
      */
  InstanceID?: string
}

/**
 * 按项目汇总消费详情
 */
export interface ProjectSummaryOverviewItem {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 项目名称
   */
  ProjectName: string

  /**
   * 实际花费
   */
  RealTotalCost: string

  /**
   * 费用所占百分比，两位小数
   */
  RealTotalCostRatio: string

  /**
   * 现金金额
   */
  CashPayAmount: string

  /**
   * 赠送金金额
   */
  IncentivePayAmount: string

  /**
   * 代金券金额
   */
  VoucherPayAmount: string

  /**
   * 账单月份，格式2019-08
   */
  BillMonth: string

  /**
   * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
   */
  TotalCost: string
}

/**
 * 地域过滤条件
 */
export interface ConditionRegion {
  /**
   * 地域ID
   */
  RegionId: string

  /**
   * 地域名称
   */
  RegionName: string
}

/**
 * DescribeBillSummaryByProduct请求参数结构体
 */
export interface DescribeBillSummaryByProductRequest {
  /**
   * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  BeginTime: string

  /**
   * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  EndTime: string

  /**
   * 查询账单数据的用户UIN
   */
  PayerUin?: string

  /**
      * 款项类别，与L0账单上的汇总类别对应。
此参数自账单3.0（即2021-05）之后开始生效。
枚举值：
consume-消费
refund-退款
adjustment-调账
      */
  PayType?: string
}

/**
 * 消耗按产品汇总详情
 */
export interface ConsumptionBusinessSummaryDataItem {
  /**
   * 产品名称代码
   */
  BusinessCode: string

  /**
   * 产品名称
   */
  BusinessCodeName: string

  /**
   * 折后总价
   */
  RealTotalCost: string

  /**
   * 费用趋势
   */
  Trend: ConsumptionSummaryTrend
}

/**
 * 由时间和值组成的数据结构
 */
export interface DetailPoint {
  /**
   * 时间
   */
  Time: string

  /**
   * 值
   */
  Value: string
}

/**
 * 消耗明细数据类型
 */
export interface CostDetail {
  /**
   * 支付者uin
   */
  PayerUin: string

  /**
   * 产品名称
   */
  BusinessCodeName: string

  /**
   * 子产品名称
   */
  ProductCodeName: string

  /**
   * 计费模式名称
   */
  PayModeName: string

  /**
   * 项目名称
   */
  ProjectName: string

  /**
   * 区域名称
   */
  RegionName: string

  /**
   * 地区名称
   */
  ZoneName: string

  /**
   * 资源id
   */
  ResourceId: string

  /**
   * 资源名称
   */
  ResourceName: string

  /**
      * 类型名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionTypeName: string

  /**
   * 订单id
   */
  OrderId: string

  /**
   * 交易id
   */
  BillId: string

  /**
   * 费用开始时间
   */
  FeeBeginTime: string

  /**
   * 费用结束时间
   */
  FeeEndTime: string

  /**
   * 组件明细
   */
  ComponentSet: Array<CostComponentSet>

  /**
   * 子产品名称代码
   */
  ProductCode: string
}

/**
 * DescribeBillSummaryByPayMode返回参数结构体
 */
export interface DescribeBillSummaryByPayModeResponse {
  /**
   * 数据是否准备好，0未准备好，1准备好
   */
  Ready: number

  /**
      * 各付费模式花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummaryOverview: Array<PayModeSummaryOverviewItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 账单资源汇总数据对象
 */
export interface BillResourceSummary {
  /**
   * 产品名称：云产品大类，如云服务器CVM、云数据库MySQL
   */
  BusinessCodeName: string

  /**
   * 子产品名称：云产品子类，如云服务器CVM-标准型S1， 当没有获取到子产品名称时，返回"-"
   */
  ProductCodeName: string

  /**
   * 计费模式：包年包月和按量计费
   */
  PayModeName: string

  /**
   * 项目
   */
  ProjectName: string

  /**
   * 地域
   */
  RegionName: string

  /**
   * 可用区
   */
  ZoneName: string

  /**
   * 资源实例ID
   */
  ResourceId: string

  /**
   * 资源实例名称
   */
  ResourceName: string

  /**
   * 交易类型：包年包月新购/续费/升降配/退款、按量计费扣费、调账补偿/扣费等类型
   */
  ActionTypeName: string

  /**
   * 订单ID
   */
  OrderId: string

  /**
   * 扣费时间
   */
  PayTime: string

  /**
   * 开始使用时间
   */
  FeeBeginTime: string

  /**
   * 结束使用时间
   */
  FeeEndTime: string

  /**
   * 配置描述
   */
  ConfigDesc: string

  /**
   * 扩展字段1
   */
  ExtendField1: string

  /**
   * 扩展字段2
   */
  ExtendField2: string

  /**
   * 原价，单位为元
   */
  TotalCost: string

  /**
      * 折扣率
当聚合之后折扣不唯一或者合同价的情况下，返回“-”
      */
  Discount: string

  /**
   * 优惠类型
   */
  ReduceType: string

  /**
   * 优惠后总价，单位为元
   */
  RealTotalCost: string

  /**
   * 代金券支付金额，单位为元
   */
  VoucherPayAmount: string

  /**
   * 现金账户支付金额，单位为元
   */
  CashPayAmount: string

  /**
   * 赠送账户支付金额，单位为元
   */
  IncentivePayAmount: string

  /**
   * 扩展字段3
   */
  ExtendField3: string

  /**
   * 扩展字段4
   */
  ExtendField4: string

  /**
   * 扩展字段5
   */
  ExtendField5: string

  /**
      * Tag 信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<BillTagInfo>

  /**
   * 付款方uin
   */
  PayerUin: string

  /**
   * 资源所有者uin,无值则返回"-"
   */
  OwnerUin: string

  /**
   * 操作者uin,无值则返回"-"
   */
  OperateUin: string

  /**
   * 产品名称代码
   */
  BusinessCode: string

  /**
   * 子产品名称代码
   */
  ProductCode: string

  /**
   * 区域ID
   */
  RegionId: number
}

/**
 * DescribeBillSummaryByTag请求参数结构体
 */
export interface DescribeBillSummaryByTagRequest {
  /**
   * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  BeginTime: string

  /**
   * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  EndTime: string

  /**
   * 分账标签键
   */
  TagKey: string

  /**
   * 查询账单数据的用户UIN
   */
  PayerUin?: string

  /**
   * 分账标签值
   */
  TagValue?: string
}

/**
 * 账单筛选条件对象
 */
export interface Conditions {
  /**
   * 只支持6和12两个值
   */
  TimeRange?: number

  /**
   * 产品名称代码
   */
  BusinessCode?: string

  /**
   * 项目ID
   */
  ProjectId?: number

  /**
   * 地域ID
   */
  RegionId?: number

  /**
   * 付费模式，可选prePay和postPay
   */
  PayMode?: string

  /**
   * 资源关键字
   */
  ResourceKeyword?: string

  /**
   * 产品名称代码
   */
  BusinessCodes?: Array<string>

  /**
   * 子产品名称代码
   */
  ProductCodes?: Array<string>

  /**
   * 地域ID
   */
  RegionIds?: Array<number>

  /**
   * 项目ID
   */
  ProjectIds?: Array<number>

  /**
   * 付费模式，可选prePay和postPay
   */
  PayModes?: Array<string>

  /**
   * 交易类型
   */
  ActionTypes?: Array<string>

  /**
   * 是否隐藏0元流水
   */
  HideFreeCost?: number

  /**
   * 排序规则，可选desc和asc
   */
  OrderByCost?: string

  /**
   * 交易ID
   */
  BillIds?: Array<string>

  /**
   * 组件编码
   */
  ComponentCodes?: Array<string>

  /**
   * 文件ID
   */
  FileIds?: Array<string>

  /**
   * 文件类型
   */
  FileTypes?: Array<string>

  /**
   * 状态
   */
  Status?: Array<number>
}

/**
 * DescribeBillSummaryByProduct返回参数结构体
 */
export interface DescribeBillSummaryByProductResponse {
  /**
   * 数据是否准备好，0未准备好，1准备好
   */
  Ready: number

  /**
      * 总花费详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummaryTotal: BusinessSummaryTotal

  /**
      * 各产品花费分布
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummaryOverview: Array<BusinessSummaryOverviewItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 账单 Tag 信息
 */
export interface BillTagInfo {
  /**
   * 分账标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DescribeBillSummaryByRegion返回参数结构体
 */
export interface DescribeBillSummaryByRegionResponse {
  /**
   * 数据是否准备好，0未准备好，1准备好
   */
  Ready: number

  /**
      * 各地域花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummaryOverview: Array<RegionSummaryOverviewItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 由域名和使用明细组成的数据结构
 */
export interface DetailSet {
  /**
   * 域名
   */
  Domain: string

  /**
   * 使用数据明细
   */
  DetailPoints: Array<DetailPoint>

  /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceID: string
}

/**
 * 收支明细的流水信息
 */
export interface BillTransactionInfo {
  /**
   * 收支类型：deduct 扣费, recharge 充值, return 退费， block 冻结, unblock 解冻
   */
  ActionType: string

  /**
   * 流水金额，单位（分）；正数表示入账，负数表示出账
   */
  Amount: number

  /**
   * 可用余额，单位（分）；正数表示入账，负数表示出账
   */
  Balance: number

  /**
   * 流水号，如20190131020000236005203583326401
   */
  BillId: string

  /**
   * 描述信息
   */
  OperationInfo: string

  /**
   * 操作时间"2019-01-31 23:35:10.000"
   */
  OperationTime: string

  /**
   * 现金账户余额，单位（分）
   */
  Cash: number

  /**
   * 赠送金余额，单位（分）
   */
  Incentive: number

  /**
   * 冻结余额，单位（分）
   */
  Freezing: number

  /**
   * 交易渠道
   */
  PayChannel: string

  /**
   * 扣费模式：trade 包年包月(预付费)，hourh  按量-小时结，hourd 按量-日结，hourm 按量-月结，month 按量-月结
   */
  DeductMode: string
}

/**
 * DescribeVoucherInfo返回参数结构体
 */
export interface DescribeVoucherInfoResponse {
  /**
   * 券总数
   */
  TotalCount: number

  /**
   * 总余额（微分）
   */
  TotalBalance: number

  /**
      * 代金券相关信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VoucherInfos: Array<VoucherInfos>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消耗按资源汇总详情
 */
export interface ConsumptionResourceSummaryDataItem {
  /**
   * 资源ID
   */
  ResourceId: string

  /**
   * 资源名称
   */
  ResourceName: string

  /**
   * 折后总价
   */
  RealTotalCost: string

  /**
   * 现金花费
   */
  CashPayAmount: string

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 项目名称
   */
  ProjectName: string

  /**
   * 地域ID
   */
  RegionId: string

  /**
   * 地域名称
   */
  RegionName: string

  /**
   * 付费模式
   */
  PayMode: string

  /**
   * 付费模式名称
   */
  PayModeName: string

  /**
   * 产品名称代码
   */
  BusinessCode: string

  /**
   * 产品名称
   */
  BusinessCodeName: string

  /**
   * 消耗类型
   */
  ConsumptionTypeName: string
}

/**
 * DescribeAccountBalance请求参数结构体
 */
export type DescribeAccountBalanceRequest = null

/**
 * DescribeBillDetail请求参数结构体
 */
export interface DescribeBillDetailRequest {
  /**
   * 偏移量
   */
  Offset: number

  /**
   * 数量，最大值为100
   */
  Limit: number

  /**
   * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
   */
  PeriodType?: string

  /**
   * 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。
   */
  Month?: string

  /**
   * 周期开始时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。(不支持跨月查询)
   */
  BeginTime?: string

  /**
   * 周期结束时间，格式为Y-m-d H:i:s，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。（不支持跨月查询）
   */
  EndTime?: string

  /**
      * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
      */
  NeedRecordNum?: number

  /**
   * 已废弃参数，未开放
   */
  ProductCode?: string

  /**
   * 付费模式 prePay/postPay
   */
  PayMode?: string

  /**
   * 查询指定资源信息
   */
  ResourceId?: string

  /**
      * 查询交易类型，如下：
包年包月新购
包年包月续费
包年包月配置变更
包年包月退款
按量计费扣费
按量计费小时结
按量计费日结
按量计费月结
线下项目扣费
线下产品扣费
调账扣费
调账补偿
竞价实例小时结
线下项目调账补偿
线下产品调账补偿
优惠扣费
优惠补偿
按量计费迁入资源
按量计费迁出资源
包年包月迁入资源
包年包月迁出资源
预付费用
小时费用
预留实例退款
按量计费冲正
按量计费冲正
按量计费冲正
按量计费冲正
按量计费冲正
包年包月转按量
      */
  ActionType?: string

  /**
   * 项目ID:资源所属项目ID
   */
  ProjectId?: number

  /**
      * 产品名称代码
备注：如需获取当月使用过的BusinessCode，请调用API：<a href="https://cloud.tencent.com/document/product/555/35761">获取产品汇总费用分布</a>
      */
  BusinessCode?: string
}

/**
 * 消耗按项目汇总详情
 */
export interface ConsumptionProjectSummaryDataItem {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 项目名称
   */
  ProjectName: string

  /**
   * 折后总价
   */
  RealTotalCost: string

  /**
   * 趋势
   */
  Trend: ConsumptionSummaryTrend

  /**
   * 产品消耗详情
   */
  Business: Array<ConsumptionBusinessSummaryDataItem>
}

/**
 * 按地域汇总消费详情
 */
export interface RegionSummaryOverviewItem {
  /**
      * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionId: string

  /**
   * 地域名称
   */
  RegionName: string

  /**
   * 实际花费
   */
  RealTotalCost: string

  /**
   * 费用所占百分比，两位小数
   */
  RealTotalCostRatio: string

  /**
   * 现金金额
   */
  CashPayAmount: string

  /**
   * 赠送金金额
   */
  IncentivePayAmount: string

  /**
   * 代金券金额
   */
  VoucherPayAmount: string

  /**
   * 账单月份，格式2019-08
   */
  BillMonth: string

  /**
   * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
   */
  TotalCost: string
}

/**
 * DescribeCostSummaryByProduct返回参数结构体
 */
export interface DescribeCostSummaryByProductResponse {
  /**
   * 数据是否准备好，0未准备好，1准备好
   */
  Ready?: number

  /**
   * 消耗详情
   */
  Total?: ConsumptionSummaryTotal

  /**
      * 消耗按产品汇总详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: Array<ConsumptionBusinessSummaryDataItem>

  /**
      * 记录数量，NeedRecordNum为0是返回null
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecordNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 商品详细信息
 */
export interface ProductInfo {
  /**
   * 商品详情名称标识
   */
  Name: string

  /**
   * 商品详情
   */
  Value: string
}

/**
 * DescribeDosageDetailByDate返回参数结构体
 */
export interface DescribeDosageDetailByDateResponse {
  /**
      * 计量单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Unit: string

  /**
      * 用量数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetailSets: Array<DetailSet>

  /**
      * 错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
  RetCode: number

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RetMsg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBillList返回参数结构体
 */
export interface DescribeBillListResponse {
  /**
   * 收支明细列表
   */
  TransactionList: Array<BillTransactionInfo>

  /**
   * 总条数
   */
  Total: number

  /**
   * 退费总额，单位（分）
   */
  ReturnAmount: number

  /**
   * 充值总额，单位（分）
   */
  RechargeAmount: number

  /**
   * 冻结总额，单位（分）
   */
  BlockAmount: number

  /**
   * 解冻总额，单位（分）
   */
  UnblockAmount: number

  /**
   * 扣费总额，单位（分）
   */
  DeductAmount: number

  /**
   * 资金转入总额，单位（分）
   */
  AgentInAmount: number

  /**
   * 垫付充值总额，单位（分）
   */
  AdvanceRechargeAmount: number

  /**
   * 提现扣减总额，单位（分）
   */
  WithdrawAmount: number

  /**
   * 资金转出总额，单位（分）
   */
  AgentOutAmount: number

  /**
   * 还垫付总额，单位（分）
   */
  AdvancePayAmount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountBalance返回参数结构体
 */
export interface DescribeAccountBalanceResponse {
  /**
   * 接口做过变更,为兼容老接口,本字段与RealBalance相同,为当前真实可用余额,单位 分
   */
  Balance: number

  /**
   * 查询的用户Uin
   */
  Uin: number

  /**
   * 当前真实可用余额,单位 分
   */
  RealBalance: number

  /**
   * 现金账户余额,单位 分
   */
  CashAccountBalance: number

  /**
   * 收益转入账户余额,单位 分
   */
  IncomeIntoAccountBalance: number

  /**
   * 赠送账户余额,单位 分
   */
  PresentAccountBalance: number

  /**
   * 冻结金额,单位 分
   */
  FreezeAmount: number

  /**
   * 欠费金额,单位 分
   */
  OweAmount: number

  /**
   * 是否允许欠费消费
   */
  IsAllowArrears: boolean

  /**
   * 是否限制信用额度
   */
  IsCreditLimited: boolean

  /**
   * 信用额度
   */
  CreditAmount: number

  /**
   * 可用信用额度
   */
  CreditBalance: number

  /**
   * 真实可用信用额度
   */
  RealCreditBalance: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCostSummaryByRegion请求参数结构体
 */
export interface DescribeCostSummaryByRegionRequest {
  /**
   * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  BeginTime: string

  /**
   * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  EndTime: string

  /**
   * 每次获取数据量
   */
  Limit: number

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 查询账单数据的用户UIN
   */
  PayerUin?: string

  /**
   * 是否需要返回记录数量，0不需要，1需要，默认不需要
   */
  NeedRecordNum?: number
}

/**
 * 按产品汇总产品详情
 */
export interface BusinessSummaryOverviewItem {
  /**
      * 产品名称代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  BusinessCode: string

  /**
   * 产品名称：云产品大类，如云服务器CVM、云数据库MySQL
   */
  BusinessCodeName: string

  /**
   * 实际花费
   */
  RealTotalCost: string

  /**
   * 费用所占百分比，两位小数
   */
  RealTotalCostRatio: string

  /**
   * 现金金额
   */
  CashPayAmount: string

  /**
   * 赠送金金额
   */
  IncentivePayAmount: string

  /**
   * 代金券金额
   */
  VoucherPayAmount: string

  /**
   * 账单月份，格式2019-08
   */
  BillMonth: string

  /**
   * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
   */
  TotalCost: string
}

/**
 * 账单明细组件对象
 */
export interface BillDetailComponent {
  /**
   * 组件类型:资源组件类型的名称，如内存、硬盘等
   */
  ComponentCodeName: string

  /**
   * 组件名称:资源组件的名称，如云数据库MySQL-内存等
   */
  ItemCodeName: string

  /**
   * 组件刊例价:资源组件的原始价格，保持原始粒度
   */
  SinglePrice: string

  /**
   * 组件指定价
   */
  SpecifiedPrice: string

  /**
   * 价格单位
   */
  PriceUnit: string

  /**
   * 组件用量
   */
  UsedAmount: string

  /**
   * 组件用量单位
   */
  UsedAmountUnit: string

  /**
   * 使用时长
   */
  TimeSpan: string

  /**
   * 时长单位
   */
  TimeUnitName: string

  /**
   * 组件原价
   */
  Cost: string

  /**
   * 折扣率
   */
  Discount: string

  /**
   * 优惠类型
   */
  ReduceType: string

  /**
   * 优惠后总价
   */
  RealCost: string

  /**
   * 代金券支付金额
   */
  VoucherPayAmount: string

  /**
   * 现金支付金额
   */
  CashPayAmount: string

  /**
   * 赠送账户支付金额
   */
  IncentivePayAmount: string

  /**
      * 组件类型代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ItemCode: string

  /**
      * 组件名称代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ComponentCode: string

  /**
      * 合同价
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContractPrice: string
}

/**
 * 消耗费用趋势
 */
export interface ConsumptionSummaryTrend {
  /**
   * 趋势类型，upward上升/downward下降/none无
   */
  Type: string

  /**
      * 趋势值，Type为none是该字段值为null
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}

/**
 * DescribeBillSummaryByRegion请求参数结构体
 */
export interface DescribeBillSummaryByRegionRequest {
  /**
   * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  BeginTime: string

  /**
   * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  EndTime: string

  /**
   * 查询账单数据的用户UIN
   */
  PayerUin?: string
}

/**
 * DescribeBillSummaryByPayMode请求参数结构体
 */
export interface DescribeBillSummaryByPayModeRequest {
  /**
   * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  BeginTime: string

  /**
   * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  EndTime: string

  /**
   * 查询账单数据的用户UIN
   */
  PayerUin?: string
}

/**
 * DescribeCostSummaryByProject请求参数结构体
 */
export interface DescribeCostSummaryByProjectRequest {
  /**
   * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  BeginTime: string

  /**
   * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  EndTime: string

  /**
   * 每次获取数据量
   */
  Limit: number

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 查询账单数据的用户UIN
   */
  PayerUin?: string

  /**
   * 是否需要返回记录数量，0不需要，1需要，默认不需要
   */
  NeedRecordNum?: number
}

/**
 * 使用记录
 */
export interface UsageRecords {
  /**
   * 使用金额（微分）
   */
  UsedAmount: number

  /**
   * 使用时间
   */
  UsedTime: string

  /**
      * 使用记录细节
注意：此字段可能返回 null，表示取不到有效值。
      */
  UsageDetails: Array<UsageDetails>
}

/**
 * 消耗按地域汇总详情
 */
export interface ConsumptionRegionSummaryDataItem {
  /**
   * 地域ID
   */
  RegionId: string

  /**
   * 地域名称
   */
  RegionName: string

  /**
   * 折后总价
   */
  RealTotalCost: string

  /**
   * 趋势
   */
  Trend: ConsumptionSummaryTrend

  /**
   * 产品消费详情
   */
  Business: Array<ConsumptionBusinessSummaryDataItem>
}

/**
 * DescribeDosageCosDetailByDate返回参数结构体
 */
export interface DescribeDosageCosDetailByDateResponse {
  /**
   * 用量数组
   */
  DetailSets: Array<CosDetailSets>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 购买商品信息
 */
export interface UsageDetails {
  /**
      * 商品名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductName: string

  /**
      * 商品细节
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubProductName: string
}

/**
 * DescribeBillResourceSummary返回参数结构体
 */
export interface DescribeBillResourceSummaryResponse {
  /**
   * 资源汇总列表
   */
  ResourceSummarySet: Array<BillResourceSummary>

  /**
      * 资源汇总列表总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 按交易类型汇总消费详情
 */
export interface ActionSummaryOverviewItem {
  /**
   * 交易类型：包年包月新购/续费/升降配/退款、按量计费扣费、调账补偿/扣费等类型
   */
  ActionType: string

  /**
   * 交易类型名称
   */
  ActionTypeName: string

  /**
   * 实际花费
   */
  RealTotalCost: string

  /**
   * 费用所占百分比，两位小数
   */
  RealTotalCostRatio: string

  /**
   * 现金金额
   */
  CashPayAmount: string

  /**
   * 赠送金金额
   */
  IncentivePayAmount: string

  /**
   * 代金券金额
   */
  VoucherPayAmount: string

  /**
   * 账单月份，格式2019-08
   */
  BillMonth: string

  /**
   * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
   */
  TotalCost: string
}

/**
 * DescribeVoucherInfo请求参数结构体
 */
export interface DescribeVoucherInfoRequest {
  /**
   * 一页多少条数据，默认是20条，最大不超过1000
   */
  Limit: number

  /**
   * 第多少页，默认是1
   */
  Offset: number

  /**
   * 券状态：待使用：unUsed，已使用： used，已发货：delivered，已作废： cancel，已过期：overdue
   */
  Status?: string

  /**
   * 代金券id
   */
  VoucherId?: string

  /**
   * 代金券订单id
   */
  CodeId?: string

  /**
   * 商品码
   */
  ProductCode?: string

  /**
   * 活动id
   */
  ActivityId?: string

  /**
   * 代金券名称
   */
  VoucherName?: string

  /**
   * 发放开始时间
   */
  TimeFrom?: string

  /**
   * 发放结束时间
   */
  TimeTo?: string

  /**
   * 指定排序字段：BeginTime开始时间、EndTime到期时间、CreateTime创建时间
   */
  SortField?: string

  /**
   * 指定升序降序：desc、asc
   */
  SortOrder?: string

  /**
   * 付费模式，postPay后付费/prePay预付费/riPay预留实例/""或者"*"表示全部模式，如果payMode为""或"*"，那么productCode与subProductCode必须传空
   */
  PayMode?: string

  /**
   * 付费场景PayMode=postPay时：spotpay-竞价实例,"settle account"-普通后付费PayMode=prePay时：purchase-包年包月新购，renew-包年包月续费（自动续费），modify-包年包月配置变更(变配）PayMode=riPay时：oneOffFee-预留实例预付，hourlyFee-预留实例每小时扣费，*-支持全部付费场景
   */
  PayScene?: string

  /**
   * 操作人，默认就是用户uin
   */
  Operator?: string
}

/**
 * 适用商品信息
 */
export interface ApplicableProducts {
  /**
   * 适用商品名称，值为“全产品通用”或商品名称组成的string，以","分割。
   */
  GoodsName: string

  /**
   * postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。如GoodsName为多个商品名以","分割组成的string，而PayMode为"*"，表示每一件商品的模式都为"*"。
   */
  PayMode: string
}

/**
 * 付费模式过滤条件
 */
export interface ConditionPayMode {
  /**
   * 付费模式
   */
  PayMode: string

  /**
   * 付费模式名称
   */
  PayModeName: string
}

/**
 * DescribeVoucherUsageDetails请求参数结构体
 */
export interface DescribeVoucherUsageDetailsRequest {
  /**
   * 一页多少条数据，默认是20条，最大不超过1000
   */
  Limit: number

  /**
   * 第多少页，默认是1
   */
  Offset: number

  /**
   * 代金券id
   */
  VoucherId?: string

  /**
   * 操作人，默认就是用户uin
   */
  Operator?: string
}

/**
 * DescribeDealsByCond请求参数结构体
 */
export interface DescribeDealsByCondRequest {
  /**
   * 开始时间
   */
  StartTime: string

  /**
   * 结束时间
   */
  EndTime: string

  /**
   * 一页多少条数据，默认是20条，最大不超过1000
   */
  Limit: number

  /**
   * 第多少页，从0开始，默认是0
   */
  Offset?: number

  /**
      * 订单状态,默认为4（成功的订单）
订单的状态
1：未支付
2：已支付3：发货中
4：已发货
5：发货失败
6：已退款
7：已关单
8：订单过期
9：订单已失效
10：产品已失效
11：代付拒绝
12：支付中
      */
  Status?: number

  /**
   * 订单号
   */
  OrderId?: string

  /**
   * 大订单号
   */
  BigDealId?: string

  /**
   * 资源id
   */
  ResourceId?: string
}

/**
 * DescribeBillResourceSummary请求参数结构体
 */
export interface DescribeBillResourceSummaryRequest {
  /**
   * 偏移量
   */
  Offset: number

  /**
   * 数量，最大值为1000
   */
  Limit: number

  /**
   * 月份，格式为yyyy-mm。不能早于开通账单2.0的月份，最多可拉取24个月内的数据。
   */
  Month: string

  /**
   * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
   */
  PeriodType?: string

  /**
      * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
      */
  NeedRecordNum?: number

  /**
      * 查询交易类型，如下：
包年包月新购
包年包月续费
包年包月配置变更
包年包月退款
按量计费扣费
按量计费小时结
按量计费日结
按量计费月结
线下项目扣费
线下产品扣费
调账扣费
调账补偿
竞价实例小时结
线下项目调账补偿
线下产品调账补偿
优惠扣费
优惠补偿
按量计费迁入资源
按量计费迁出资源
包年包月迁入资源
包年包月迁出资源
预付费用
小时费用
预留实例退款
按量计费冲正
按量计费冲正
按量计费冲正
按量计费冲正
按量计费冲正
包年包月转按量
      */
  ActionType?: string

  /**
   * 查询指定资源信息
   */
  ResourceId?: string

  /**
   * 付费模式 prePay/postPay
   */
  PayMode?: string

  /**
      * 产品名称代码
备注：如需获取当月使用过的BusinessCode，请调用API：<a href="https://cloud.tencent.com/document/product/555/35761">获取产品汇总费用分布</a>
      */
  BusinessCode?: string
}

/**
 * PayDeals请求参数结构体
 */
export interface PayDealsRequest {
  /**
   * 需要支付的一个或者多个子订单号，与BigDealIds字段两者必须且仅传一个参数
   */
  OrderIds?: Array<string>

  /**
   * 是否自动使用代金券,1:是,0否,默认0
   */
  AutoVoucher?: number

  /**
   * 代金券ID列表,目前仅支持指定一张代金券
   */
  VoucherIds?: Array<string>

  /**
   * 需要支付的一个或者多个大订单号，与OrderIds字段两者必须且仅传一个参数
   */
  BigDealIds?: Array<string>
}

/**
 * DescribeBillList请求参数结构体
 */
export interface DescribeBillListRequest {
  /**
   * 查询范围的起始时间（包含）
   */
  StartTime: string

  /**
   * 查询范围的结束时间（包含）
   */
  EndTime: string

  /**
   * 翻页偏移量，初始值为0
   */
  Offset: number

  /**
   * 每页的限制数量
   */
  Limit: number

  /**
   * 交易类型： all所有交易类型，recharge充值，return退款，unblock解冻，agentin资金转入，advanced垫付，cash提现，deduct扣费，block冻结，agentout资金转出，repay垫付回款，repayment还款(仅国际信用账户)，adj_refund调增(仅国际信用账户)，adj_deduct调减(仅国际信用账户)
   */
  PayType?: Array<string>

  /**
      * 扣费模式，
当所选的交易类型为扣费deduct时： 
all所有扣费类型;trade预付费支付;hour_h按量小时结;hour_d按量日结;hour_m按量月结;decompensate调账扣费;other第三方扣费;panshi 线下项目扣费;offline 线下产品扣费;

当所选的交易类型为扣费recharge时： 
online 在线充值;bank-enterprice 银企直连;offline 线下充值;transfer 分成充值

当所选的交易类型为扣费cash时： 
online 线上提现;offline 线下提现;panshi 赠送金清零

当所选的交易类型为扣费advanced时： 
advanced 垫付充值

当所选的交易类型为扣费repay时： 
panshi 垫付回款

当所选的交易类型为扣费block时： 
other 第三方冻结;hour 按量冻结;month按月冻结

当所选的交易类型为扣费return时： 
compensate 调账补偿;trade 预付费退款

当所选的交易类型为扣费unblock时：
other 第三方解冻;hour 按量解冻;month 按月解冻
      */
  SubPayType?: Array<string>

  /**
   * 是否返回0元交易金额的交易项，取值：0-不返回，1-返回。不传该参数则不返回
   */
  WithZeroAmount?: number
}

/**
 * PayDeals返回参数结构体
 */
export interface PayDealsResponse {
  /**
   * 此次操作支付成功的子订单号数组
   */
  OrderIds?: Array<string>

  /**
   * 此次操作支付成功的资源Id数组
   */
  ResourceIds?: Array<string>

  /**
   * 此次操作支付成功的大订单号数组
   */
  BigDealIds?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 总数
 */
export interface SummaryTotal {
  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealTotalCost: string

  /**
      * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCost: string
}

/**
 * 账单明细数据对象
 */
export interface BillDetail {
  /**
   * 产品名称：云产品大类，如云服务器CVM、云数据库MySQL
   */
  BusinessCodeName: string

  /**
   * 子产品名称：云产品子类，如云服务器CVM-标准型S1
   */
  ProductCodeName: string

  /**
   * 计费模式：包年包月和按量计费
   */
  PayModeName: string

  /**
   * 项目:资源所属项目
   */
  ProjectName: string

  /**
   * 区域：资源所属地域，如华南地区（广州）
   */
  RegionName: string

  /**
   * 可用区：资源所属可用区，如广州三区
   */
  ZoneName: string

  /**
   * 资源实例ID
   */
  ResourceId: string

  /**
   * 实例名称
   */
  ResourceName: string

  /**
   * 交易类型
   */
  ActionTypeName: string

  /**
   * 订单ID
   */
  OrderId: string

  /**
   * 交易ID
   */
  BillId: string

  /**
   * 扣费时间
   */
  PayTime: string

  /**
   * 开始使用时间
   */
  FeeBeginTime: string

  /**
   * 结束使用时间
   */
  FeeEndTime: string

  /**
   * 组件列表
   */
  ComponentSet: Array<BillDetailComponent>

  /**
   * 支付者UIN
   */
  PayerUin: string

  /**
   * 使用者UIN
   */
  OwnerUin: string

  /**
   * 操作者UIN
   */
  OperateUin: string

  /**
      * Tag 信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<BillTagInfo>

  /**
      * 产品名称代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  BusinessCode: string

  /**
      * 子产品名称代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductCode: string

  /**
      * 交易类型代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionType: string

  /**
      * 区域ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionId: string

  /**
   * 项目ID:资源所属项目ID
   */
  ProjectId: number
}

/**
 * DescribeBillSummaryByTag返回参数结构体
 */
export interface DescribeBillSummaryByTagResponse {
  /**
   * 数据是否准备好，0未准备好，1准备好
   */
  Ready: number

  /**
      * 各标签值花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummaryOverview: Array<TagSummaryOverviewItem>

  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummaryTotal: SummaryTotal

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 按标签汇总消费详情
 */
export interface TagSummaryOverviewItem {
  /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagValue: string

  /**
      * 实际花费
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealTotalCost: string

  /**
      * 费用所占百分比，两位小数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealTotalCostRatio: string

  /**
      * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCost: string
}

/**
 * DescribeCostSummaryByResource返回参数结构体
 */
export interface DescribeCostSummaryByResourceResponse {
  /**
   * 数据是否准备好，0未准备好，1准备好
   */
  Ready?: number

  /**
      * 消耗详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total?: ConsumptionSummaryTotal

  /**
      * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConditionValue?: ConsumptionResourceSummaryConditionValue

  /**
      * 记录数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecordNum?: number

  /**
      * 资源消耗详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: Array<ConsumptionResourceSummaryDataItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBillDetail返回参数结构体
 */
export interface DescribeBillDetailResponse {
  /**
   * 详情列表
   */
  DetailSet: Array<BillDetail>

  /**
      * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消耗按资源汇总过滤条件
 */
export interface ConsumptionResourceSummaryConditionValue {
  /**
   * 产品列表
   */
  Business: Array<ConditionBusiness>

  /**
   * 项目列表
   */
  Project: Array<ConditionProject>

  /**
   * 地域列表
   */
  Region: Array<ConditionRegion>

  /**
   * 付费模式列表
   */
  PayMode: Array<ConditionPayMode>
}

/**
 * 订单数据对象
 */
export interface Deal {
  /**
   * 订单号
   */
  OrderId: string

  /**
   * 订单状态
   */
  Status: number

  /**
   * 支付者
   */
  Payer: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 创建人
   */
  Creator: string

  /**
   * 实际支付金额（分）
   */
  RealTotalCost: number

  /**
   * 代金券抵扣金额（分）
   */
  VoucherDecline: number

  /**
   * 项目ID
   */
  ProjectId: number

  /**
   * 产品分类ID
   */
  GoodsCategoryId: number

  /**
   * 产品详情
   */
  ProductInfo: Array<ProductInfo>

  /**
   * 时长
   */
  TimeSpan: number

  /**
   * 时间单位
   */
  TimeUnit: string

  /**
   * 货币单位
   */
  Currency: string

  /**
   * 折扣率
   */
  Policy: number

  /**
   * 单价（分）
   */
  Price: number

  /**
   * 原价（分）
   */
  TotalCost: number

  /**
      * 产品编码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductCode: string

  /**
   * 子产品编码
   */
  SubProductCode: string

  /**
   * 大订单号
   */
  BigDealId: string

  /**
      * 退费公式
注意：此字段可能返回 null，表示取不到有效值。
      */
  Formula: string

  /**
      * 退费涉及订单信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RefReturnDeals: string

  /**
   * 付费模式：prePay 预付费 postPay后付费 riPay预留实例
   */
  PayMode: string

  /**
      * 交易类型
modifyNetworkMode 调整带宽模式
modifyNetworkSize 调整带宽大小
refund 退款
downgrade 降配
upgrade 升配
renew 续费
purchase 购买
preMoveOut 包年包月迁出资源
preMoveIn 包年包月迁入资源
preToPost 预付费转后付费
postMoveOut 按量计费迁出资源
postMoveIn 按量计费迁入资源
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action: string

  /**
      * 产品编码中文名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductName: string

  /**
      * 子产品编码中文名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubProductName: string

  /**
      * 订单对应的资源id, 查询参数Limit超过200，将返回null
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceId: Array<string>
}

/**
 * DescribeCostDetail请求参数结构体
 */
export interface DescribeCostDetailRequest {
  /**
   * 数量，最大值为100
   */
  Limit: number

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 周期开始时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通成本分析后，且距今 24 个月内的数据。
   */
  BeginTime?: string

  /**
   * 周期结束时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通成本分析后，且距今 24 个月内的数据。
   */
  EndTime?: string

  /**
      * 是否需要访问列表的总记录数，用于前端分页
1-表示需要， 0-表示不需要
      */
  NeedRecordNum?: number

  /**
   * 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。不能早于开通成本分析的月份，最多可拉取24个月内的数据。
   */
  Month?: string

  /**
   * 查询指定产品信息（暂时未开放获取）
   */
  ProductCode?: string

  /**
   * 付费模式 prePay/postPay
   */
  PayMode?: string

  /**
   * 查询指定资源信息
   */
  ResourceId?: string
}

/**
 * DescribeVoucherUsageDetails返回参数结构体
 */
export interface DescribeVoucherUsageDetailsResponse {
  /**
   * 券总数
   */
  TotalCount: number

  /**
   * 总已用金额（微分）
   */
  TotalUsedAmount: number

  /**
      * 代金券使用记录细节
注意：此字段可能返回 null，表示取不到有效值。
      */
  UsageRecords: Array<UsageRecords>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDealsByCond返回参数结构体
 */
export interface DescribeDealsByCondResponse {
  /**
   * 订单列表
   */
  Deals: Array<Deal>

  /**
   * 订单总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 项目过滤条件
 */
export interface ConditionProject {
  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 项目名称
   */
  ProjectName: string
}

/**
 * cos产品用量明细返回数据结构
 */
export interface CosDetailSets {
  /**
   * 存储桶名称
   */
  BucketName: string

  /**
   * 用量开始时间
   */
  DosageBeginTime: string

  /**
   * 用量结束时间
   */
  DosageEndTime: string

  /**
   * 一级产品类型名称
   */
  SubProductCodeName: string

  /**
   * 二级产品类型名称
   */
  BillingItemCodeName: string

  /**
   * 用量
   */
  DosageValue: string

  /**
   * 单位
   */
  Unit: string
}

/**
 * DescribeBillSummaryByProject请求参数结构体
 */
export interface DescribeBillSummaryByProjectRequest {
  /**
   * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  BeginTime: string

  /**
   * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  EndTime: string

  /**
   * 查询账单数据的用户UIN
   */
  PayerUin?: string
}

/**
 * DescribeBillSummaryByProject返回参数结构体
 */
export interface DescribeBillSummaryByProjectResponse {
  /**
   * 数据是否准备好，0未准备好，1准备好
   */
  Ready: number

  /**
      * 各项目花费分布详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummaryOverview: Array<ProjectSummaryOverviewItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 产品过滤条件
 */
export interface ConditionBusiness {
  /**
   * 产品名称代码
   */
  BusinessCode: string

  /**
   * 产品名称
   */
  BusinessCodeName: string
}

/**
 * DescribeCostSummaryByResource请求参数结构体
 */
export interface DescribeCostSummaryByResourceRequest {
  /**
   * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  BeginTime: string

  /**
   * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
   */
  EndTime: string

  /**
   * 每次获取数据量
   */
  Limit: number

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 查询账单数据的用户UIN
   */
  PayerUin?: string

  /**
   * 是否需要返回记录数量，0不需要，1需要，默认不需要
   */
  NeedRecordNum?: number

  /**
   * 是否需要返回过滤条件，0不需要，1需要，默认不需要
   */
  NeedConditionValue?: number

  /**
   * 过滤条件，只支持ResourceKeyword(资源关键字，支持资源id及资源名称模糊查询)，ProjectIds（项目id），RegionIds(地域id)，PayModes(付费模式，可选prePay和postPay)，HideFreeCost（是否隐藏0元流水，可选0和1），OrderByCost（按费用排序规则，可选desc和asc）
   */
  Conditions?: Conditions
}

/**
 * DescribeCostDetail返回参数结构体
 */
export interface DescribeCostDetailResponse {
  /**
      * 消耗明细
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetailSet?: Array<CostDetail>

  /**
      * 记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDosageCosDetailByDate请求参数结构体
 */
export interface DescribeDosageCosDetailByDateRequest {
  /**
   * 查询用量开始时间
   */
  StartDate: string

  /**
   * 查询用量结束时间（与开始时间同月，不支持跨月查询）
   */
  EndDate: string

  /**
   * COS 存储桶名称，可通过Get Service 接口是用来获取请求者名下的所有存储空间列表（Bucket list）https://cloud.tencent.com/document/product/436/8291
   */
  BucketName: string
}

/**
 * 不适用商品信息
 */
export interface ExcludedProducts {
  /**
   * 不适用商品名称
   */
  GoodsName: string

  /**
   * postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。
   */
  PayMode: string
}

/**
 * 按付费模式汇总消费详情
 */
export interface PayModeSummaryOverviewItem {
  /**
   * 付费模式
   */
  PayMode: string

  /**
   * 付费模式名称
   */
  PayModeName: string

  /**
   * 实际花费
   */
  RealTotalCost: string

  /**
   * 费用所占百分比，两位小数
   */
  RealTotalCostRatio: string

  /**
   * 按交易类型：包年包月新购/续费/升降配/退款、按量计费扣费、调账补偿/扣费等类型汇总消费详情
   */
  Detail: Array<ActionSummaryOverviewItem>

  /**
   * 现金金额
   */
  CashPayAmount: string

  /**
   * 赠送金金额
   */
  IncentivePayAmount: string

  /**
   * 代金券金额
   */
  VoucherPayAmount: string

  /**
   * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
   */
  TotalCost: string
}

/**
 * 按产品汇总总费用
 */
export interface BusinessSummaryTotal {
  /**
   * 总花费
   */
  RealTotalCost: string

  /**
   * 代金券金额
   */
  VoucherPayAmount: string

  /**
   * 赠送金金额
   */
  IncentivePayAmount: string

  /**
   * 现金金额
   */
  CashPayAmount: string

  /**
   * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
   */
  TotalCost: string
}

/**
 * DescribeCostSummaryByRegion返回参数结构体
 */
export interface DescribeCostSummaryByRegionResponse {
  /**
   * 数据是否准备好，0未准备好，1准备好
   */
  Ready?: number

  /**
   * 消耗详情
   */
  Total?: ConsumptionSummaryTotal

  /**
   * 消耗按地域汇总详情
   */
  Data?: Array<ConsumptionRegionSummaryDataItem>

  /**
      * 记录数量，NeedRecordNum为0是返回null
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecordNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

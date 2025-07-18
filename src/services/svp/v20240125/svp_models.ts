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
 * CreateSavingPlanOrder请求参数结构体
 */
export interface CreateSavingPlanOrderRequest {
  /**
   * 地域编码
   */
  RegionId: number
  /**
   * 区域编码
   */
  ZoneId: number
  /**
   * 预付费类型
   */
  PrePayType: string
  /**
   * 时长
   */
  TimeSpan: number
  /**
   * 时长单位
   */
  TimeUnit: string
  /**
   * 商品唯一标识
   */
  CommodityCode: string
  /**
   * 承诺时长内的小额金额（单位：元）
   */
  PromiseUseAmount: number
  /**
   * 节省计划的指定生效时间，若不传则为当前下单时间。传参数格式:"2023-10-01 00:00:00"，仅支持指定日期的0点时刻
   */
  SpecifyEffectTime?: string
  /**
   * 可重入ID
   */
  ClientToken?: string
}

/**
 * DescribeSavingPlanCoverage请求参数结构体
 */
export interface DescribeSavingPlanCoverageRequest {
  /**
   * 费用起始日期，格式yyyy-MM-dd
   */
  StartDate: string
  /**
   * 费用结束日期，格式yyyy-MM-dd
   */
  EndDate: string
  /**
   * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推
   */
  Offset: number
  /**
   * 数量，最大值为200
   */
  Limit: number
  /**
   * 取值包括1（缺省值）和2，1表示按天统计覆盖率，2表示按月统计覆盖率，此参数仅影响返回的RateSet聚合粒度，不影响返回的DetailSet
   */
  PeriodType?: number
}

/**
 * CreateSavingPlanOrder返回参数结构体
 */
export interface CreateSavingPlanOrderResponse {
  /**
   * 订单号
   */
  BigDealId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSavingPlanDeduct请求参数结构体
 */
export interface DescribeSavingPlanDeductRequest {
  /**
   * 分页偏移量
   */
  Offset: number
  /**
   * 每页数量，最大值为200
   */
  Limit: number
  /**
   * 节省计划使用开始的查询结束时间
   */
  StartEndDate: string
  /**
   * 节省计划使用开始的查询开始时间
   */
  StartStartDate: string
  /**
   * 地域编码
   */
  RegionId?: number
  /**
   * 区域编码
   */
  ZoneId?: number
  /**
   * 节省计划资源id
   */
  SpId?: string
  /**
   * 抵扣查询结束时间，格式：yyyy-MM-dd HH:mm:ss
   */
  DeductEndDate?: string
  /**
   * 抵扣查询开始时间，格式：yyyy-MM-dd HH:mm:ss
   */
  DeductStartDate?: string
  /**
   * 节省计划使用结束的查询结束时间
   */
  EndEndDate?: string
  /**
   * 节省计划使用结束的查询开始时间
   */
  EndStartDate?: string
}

/**
 * 节省计划总览明细数据
 */
export interface SavingPlanOverviewDetail {
  /**
   * 节省计划类型
   */
  SpType?: string
  /**
   * 支付金额（单位：元）
   */
  PayAmount?: string
  /**
   * 开始时间 yyyy-mm-dd HH:mm:ss格式
   */
  StartTime?: string
  /**
   * 结束时间 yyyy-mm-dd HH:mm:ss格式
   */
  EndTime?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 累计节省金额（单位：元）
   */
  SavingAmount?: string
  /**
   * 地域
   */
  Region?: Array<string>
  /**
   * 支付类型
   */
  PayType?: number
  /**
   * 购买时间 yyyy-mm-dd HH:mm:ss格式
   */
  BuyTime?: string
}

/**
 * 节省计划覆盖率聚合数据
 */
export interface SavingPlanCoverageRate {
  /**
   * 聚合时间维度，按天聚合格式为yyyy-MM-dd，按月聚合格式为yyyy-MM
   */
  DatePoint?: string
  /**
   * 覆盖率结果，取值[0, 100]
   */
  Rate?: number
}

/**
 * DescribeSavingPlanUsage请求参数结构体
 */
export interface DescribeSavingPlanUsageRequest {
  /**
   * 开始时间，格式yyyy-MM-dd 注：查询范围请勿超过6个月
   */
  StartDate: string
  /**
   * 结束时间，格式yyyy-MM-dd
   */
  EndDate: string
  /**
   * 分页偏移量
   */
  Offset: number
  /**
   * 每页数量，最大值为200
   */
  Limit: number
  /**
   * 查询结果数据的时间间隔
   */
  TimeInterval: string
}

/**
 * 节省计划抵扣明细
 */
export interface SavingPlanDeductDetail {
  /**
   * 账号id
   */
  OwnerUin?: string
  /**
   * 账号名称
   */
  OwnerUinName?: string
  /**
   * 抵扣账号id
   */
  PayerUin?: string
  /**
   * 抵扣账号名称
   */
  PayerUinName?: string
  /**
   * 节省计划资源id
   */
  SpId?: string
  /**
   * 产品编码
   */
  ProductCode?: string
  /**
   * 产品名称
   */
  ProductName?: string
  /**
   * 子产品编码
   */
  SubProductCode?: string
  /**
   * 子产品名称
   */
  SubProductName?: string
  /**
   * 交易ID
   */
  OutTradeNo?: string
  /**
   * 地域id
   */
  RegionId?: number
  /**
   * 地域名称
   */
  RegionName?: string
  /**
   * 地区id
   */
  ZoneId?: number
  /**
   * 地区名称
   */
  ZoneName?: string
  /**
   * 开始使用时间
   */
  SpStartTime?: string
  /**
   * 结束使用时间
   */
  SpEndTime?: string
  /**
   * 折扣时间
   */
  DeductTime?: string
  /**
   * 抵扣金额，单位分
   */
  DeductAmount?: string
  /**
   * 抵扣折扣率
   */
  DeductDiscount?: string
  /**
   * 抵扣比率
   */
  DeductRate?: string
}

/**
 * 节省计划覆盖率数据
 */
export interface SavingPlanCoverageDetail {
  /**
   * 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID
   */
  ResourceId?: string
  /**
   * 地域ID
   */
  RegionId?: number
  /**
   * 产品编码
   */
  ProductCode?: string
  /**
   * 子产品编码
   */
  SubProductCode?: string
  /**
   * 费用起始日期，格式yyyy-MM-dd
   */
  StartDate?: string
  /**
   * 费用结束日期，格式yyyy-MM-dd，目前与StartDate相等
   */
  EndDate?: string
  /**
   * 节省计划覆盖金额（即节省计划支付金额）
   */
  SpCoveredAmount?: number
  /**
   * 节省计划未覆盖金额（即优惠后总价）
   */
  SpUncoveredAmount?: number
  /**
   * 总支出（即节省计划未覆盖金额 + 节省计划覆盖金额）
   */
  TotalRealAmount?: number
  /**
   * 按量计费预期金额（即折前价 * 折扣）
   */
  ExpectedAmount?: number
  /**
   * 覆盖率结果，取值[0, 100]
   */
  SpCoverage?: number
  /**
   * 支付者昵称
   */
  PayerUinName?: string
  /**
   * 使用者昵称
   */
  OwnerUinName?: string
  /**
   * 支付者uin
   */
  PayerUin?: string
  /**
   * 计费项名称
   */
  SubBillingItemName?: string
  /**
   * 计费细项名称
   */
  BillingItemName?: string
  /**
   * 子产品名称
   */
  SubProductName?: string
}

/**
 * DescribeSavingPlanOverview返回参数结构体
 */
export interface DescribeSavingPlanOverviewResponse {
  /**
   * 节省计划总览明细数据
   */
  Overviews?: Array<SavingPlanOverviewDetail>
  /**
   * 查询命中的节省计划总览明细数据总条数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSavingPlanUsage返回参数结构体
 */
export interface DescribeSavingPlanUsageResponse {
  /**
   * 查询命中的节省计划总览明细数据总条数
   */
  Total?: number
  /**
   * 节省计划使用率数据
   */
  Usages?: Array<SavingPlanUsageDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSavingPlanDeduct返回参数结构体
 */
export interface DescribeSavingPlanDeductResponse {
  /**
   * 查询命中的节省计划抵扣明细数据总条数
   */
  Total?: number
  /**
   * 查询命中的节省计划抵扣明细数据明细
   */
  Deducts?: Array<SavingPlanDeductDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSavingPlanOverview请求参数结构体
 */
export interface DescribeSavingPlanOverviewRequest {
  /**
   * 开始时间，格式yyyy-MM-dd 注：查询范围请勿超过6个月
   */
  StartDate: string
  /**
   * 结束时间，格式yyyy-MM-dd
   */
  EndDate: string
  /**
   * 分页偏移量
   */
  Offset: number
  /**
   * 每页数量，最大值为200
   */
  Limit: number
}

/**
 * 节省计划使用率数据
 */
export interface SavingPlanUsageDetail {
  /**
   * 节省计划类型
   */
  SpType?: string
  /**
   * 节省计划状态
   */
  Status?: number
  /**
   * 累计抵扣的金额（单位：元）
   */
  DeductAmount?: string
  /**
   * 累计承诺消费金额（单位：元）
   */
  PromiseAmount?: string
  /**
   * 累计净节省金额（单位：元）
   */
  NetSavings?: string
  /**
   * 使用率
   */
  UtilizationRate?: number
  /**
   * 累计流失金额（单位：元）
   */
  LossAmount?: string
  /**
   * 累计按量计费预期金额（单位：元）
   */
  DosageAmount?: string
  /**
   * 累计成本金额（单位：元）
   */
  CostAmount?: string
  /**
   * 地域
   */
  Region?: Array<string>
}

/**
 * DescribeSavingPlanCoverage返回参数结构体
 */
export interface DescribeSavingPlanCoverageResponse {
  /**
   * 节省计划覆盖率明细数据
   */
  DetailSet?: Array<SavingPlanCoverageDetail>
  /**
   * 节省计划覆盖率聚合数据
   */
  RateSet?: Array<SavingPlanCoverageRate>
  /**
   * 查询命中的节省计划覆盖率明细数据总条数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

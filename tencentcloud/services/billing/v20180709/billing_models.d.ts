/**
 * DescribeBillAdjustInfo返回参数结构体
 */
export interface DescribeBillAdjustInfoResponse {
    /**
     * 数据总量
     */
    Total?: number;
    /**
     * 明细数据
     */
    Data?: Array<AdjustInfoDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCostSummaryByProduct请求参数结构体
 */
export interface DescribeCostSummaryByProductRequest {
    /**
     * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    BeginTime: string;
    /**
     * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    EndTime: string;
    /**
     * 每次获取数据量，最大值为100
     */
    Limit: number;
    /**
     * 偏移量,默认从0开始
     */
    Offset: number;
    /**
     * 查询账单数据的用户UIN
     */
    PayerUin?: string;
    /**
     * 是否需要返回记录数量，0不需要，1需要，默认不需要
     */
    NeedRecordNum?: number;
}
/**
 * DescribeCostExplorerSummary返回参数结构体
 */
export interface DescribeCostExplorerSummaryResponse {
    /**
     * 数据条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 表头信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Header?: AnalyseHeaderDetail;
    /**
     * 数据明细
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Detail?: Array<AnalyseDetail>;
    /**
     * 数据总计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalDetail?: AnalyseDetail;
    /**
     * 筛选框
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConditionValue?: AnalyseConditionDetail;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消耗按产品汇总详情
 */
export interface ConsumptionBusinessSummaryDataItem {
    /**
     * 产品名称代码
     */
    BusinessCode?: string;
    /**
     * 产品名称
     */
    BusinessCodeName?: string;
    /**
     * 折后总价
     */
    RealTotalCost?: string;
    /**
     * 费用趋势
     */
    Trend?: ConsumptionSummaryTrend;
    /**
     * 现金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CashPayAmount?: string;
    /**
     * 赠送金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount?: string;
    /**
     * 代金券
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount?: string;
    /**
     * 分成金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 地域名称（仅在地域汇总总展示）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionName?: string;
}
/**
 * 账单 Tag 信息
 */
export interface BillTagInfo {
    /**
     * 分账标签键
     */
    TagKey?: string;
    /**
     * 标签值
     */
    TagValue?: string;
}
/**
 * 分账账单概览金额汇总
 */
export interface AllocationOverviewTotal {
    /**
     * 总费用：现金费用合计+分成金费用合计+赠送金费用合计+优惠券费用合计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalCost?: string;
    /**
     * 现金： 现金费用合计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CashPayAmount?: string;
    /**
     * 赠送金：赠送金费用合计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount?: string;
    /**
     * 优惠券：优惠券费用合计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount?: string;
    /**
     * 分成金：分成金费用合计
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
}
/**
 * 节省计划覆盖率聚合数据
 */
export interface SavingPlanCoverageRate {
    /**
     * 聚合时间维度，按天聚合格式为yyyy-MM-dd，按月聚合格式为yyyy-MM
     */
    DatePoint?: string;
    /**
     * 覆盖率结果，取值[0, 100]
     */
    Rate?: number;
}
/**
 * 收支明细的流水信息
 */
export interface BillTransactionInfo {
    /**
     * 收支类型：deduct 扣费, recharge 充值, return 退费， block 冻结, unblock 解冻
     */
    ActionType: string;
    /**
     * 流水金额，单位（分）；正数表示入账，负数表示出账
     */
    Amount: number;
    /**
     * 可用余额，单位（分）；正数表示入账，负数表示出账
     */
    Balance: number;
    /**
     * 流水号，如20190131020000236005203583326401
     */
    BillId: string;
    /**
     * 描述信息
     */
    OperationInfo: string;
    /**
     * 操作时间"2019-01-31 23:35:10.000"
     */
    OperationTime: string;
    /**
     * 现金账户余额，单位（分）
     */
    Cash: number;
    /**
     * 赠送金余额，单位（分）
     */
    Incentive: number;
    /**
     * 冻结余额，单位（分）
     */
    Freezing: number;
    /**
     * 交易渠道
     */
    PayChannel: string;
    /**
     * 扣费模式：trade 包年包月(预付费)，hourh  按量-小时结，hourd 按量-日结，hourm 按量-月结，month 按量-月结
     */
    DeductMode: string;
}
/**
 * 产品过滤条件
 */
export interface ConditionBusiness {
    /**
     * 产品名称代码
     */
    BusinessCode: string;
    /**
     * 产品名称
     */
    BusinessCodeName: string;
}
/**
 * 成本分析交易类型复杂类型
 */
export interface AnalyseActionTypeDetail {
    /**
     * 交易类型code
     */
    ActionType?: string;
    /**
     * 交易类型Name
     */
    ActionTypeName?: string;
}
/**
 * DescribeCostExplorerSummary请求参数结构体
 */
export interface DescribeCostExplorerSummaryRequest {
    /**
     * 周期开始时间，格式为yyyy-mm-dd hh:ii:ss
     */
    BeginTime: string;
    /**
     * 周期结束时间，格式为yyyy-mm-dd hh:ii:ss
     */
    EndTime: string;
    /**
     * 账单类型：1-费用账单、2-消耗账单
     */
    BillType: string;
    /**
     * 统计周期：日-day，月-month；
     */
    PeriodType: string;
    /**
     * 分类维度（数据汇总维度），查询分类维度（请使用分类维度code入参）入参枚举值：
  default=仅总计
  feeType=费用类型
  billType=账单类型
  business=产品
  product=子产品
  region=地域
  zone=可用区
  actionType=交易类型
  payMode =计费模式
  tags=标签
  project =项目
  payerUin=支付者账号
  ownerUin=使用者账号
     */
    Dimensions: string;
    /**
     * 费用类型：cost-总费用，totalCost-原价费用
     */
    FeeType: string;
    /**
     * 数量，每页最大值为100
     */
    PageSize: number;
    /**
     * 起始页，当PageNo=1表示第一页， PageNo=2表示第二页，依次类推。
     */
    PageNo: number;
    /**
     * 分账标签值
     */
    TagKeyStr?: string;
    /**
     * 是否需要筛选框， 1-表示需要， 0-表示不需要，若不传默认不需要。
     */
    NeedConditionValue?: string;
    /**
     * 筛选参数
     */
    Conditions?: AnalyseConditions;
}
/**
 * 产品级联筛选值
 */
export interface BillBusinessLink {
    /**
     * 产品编码
     */
    BusinessCode?: string;
    /**
     * 产品名称
     */
    BusinessCodeName?: string;
    /**
     * 子产品
     */
    Children?: Array<BillProductLink>;
}
/**
 * DescribeCostSummaryByProduct返回参数结构体
 */
export interface DescribeCostSummaryByProductResponse {
    /**
     * 数据是否准备好，0未准备好，1准备好
     */
    Ready?: number;
    /**
     * 消耗详情
     */
    Total?: ConsumptionSummaryTotal;
    /**
     * 消耗按产品汇总详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ConsumptionBusinessSummaryDataItem>;
    /**
     * 记录数量，NeedRecordNum为0时返回null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 商品详细信息
 */
export interface ProductInfo {
    /**
     * 商品详情名称标识
     */
    Name: string;
    /**
     * 商品详情
     */
    Value: string;
}
/**
 * DeleteAllocationTag返回参数结构体
 */
export interface DeleteAllocationTagResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBillDetailForOrganization返回参数结构体
 */
export interface DescribeBillDetailForOrganizationResponse {
    /**
     * 详情列表
     */
    DetailSet?: Array<DistributionBillDetail>;
    /**
     * 总记录数，24小时缓存一次，可能比实际总记录数少
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 本次请求的上下文信息，可用于下一次请求的请求参数中，加快查询速度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Context?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 明细账单配置描述结构
 */
export interface BillDetailComponentConfig {
    /**
     * 配置描述名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 配置描述值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
/**
 * DescribeCostSummaryByResource返回参数结构体
 */
export interface DescribeCostSummaryByResourceResponse {
    /**
     * 数据是否准备好，0未准备好，1准备好
     */
    Ready?: number;
    /**
     * 消耗详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: ConsumptionSummaryTotal;
    /**
     * 过滤条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConditionValue?: ConsumptionResourceSummaryConditionValue;
    /**
     * 记录数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordNum?: number;
    /**
     * 资源消耗详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<ConsumptionResourceSummaryDataItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBillSummaryByRegion请求参数结构体
 */
export interface DescribeBillSummaryByRegionRequest {
    /**
     * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    BeginTime: string;
    /**
     * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    EndTime: string;
    /**
     * 查询账单数据的用户UIN
     */
    PayerUin?: string;
}
/**
 * UIN异常调整明细
 */
export interface AdjustInfoDetail {
    /**
     * 支付者UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayerUin?: string;
    /**
     * 账单月份，格式：yyyy-MM
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Month?: string;
    /**
     * 调整类型
  调账：manualAdjustment
  补结算：supplementarySettlement
  重结算：reSettlement
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdjustType?: string;
    /**
     * 调整单号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdjustNum?: string;
    /**
     * 异常调整完成时间，格式：yyyy-MM-dd HH:mm:ss
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdjustCompletionTime?: string;
    /**
     * 调整金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdjustAmount?: number;
}
/**
 * DescribeAllocateConditions请求参数结构体
 */
export interface DescribeAllocateConditionsRequest {
    /**
     * 账单月份，格式为2024-02，不传默认当前月
     */
    Month?: string;
}
/**
 * 消耗按地域汇总详情
 */
export interface ConsumptionRegionSummaryDataItem {
    /**
     * 地域ID
     */
    RegionId?: string;
    /**
     * 地域名称
     */
    RegionName?: string;
    /**
     * 折后总价
     */
    RealTotalCost?: string;
    /**
     * 趋势
     */
    Trend?: ConsumptionSummaryTrend;
    /**
     * 产品消费详情
     */
    Business?: Array<ConsumptionBusinessSummaryDataItem>;
    /**
     * 现金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CashPayAmount?: string;
    /**
     * 代金券
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount?: string;
    /**
     * 赠送金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount?: string;
    /**
     * 分成金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
}
/**
 * DescribeBillSummary请求参数结构体
 */
export interface DescribeBillSummaryRequest {
    /**
     * 账单月份，格式为2023-04
     */
    Month: string;
    /**
     * 账单维度类型，枚举值如下：business、project、region、payMode、tag
     */
    GroupType: string;
    /**
     * 标签键，GroupType=tag获取标签维度账单时传
     */
    TagKey?: Array<string>;
}
/**
 * DescribeBillResourceSummary返回参数结构体
 */
export interface DescribeBillResourceSummaryResponse {
    /**
     * 资源汇总列表
     */
    ResourceSummarySet?: Array<BillResourceSummary>;
    /**
     * 资源汇总列表总数，入参NeedRecordNum为0时不返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分账账单按组件汇总明细
 */
export interface AllocationSummaryByItem {
    /**
     * 分账单元唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKey?: string;
    /**
     * 分账单元名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKeyName?: string;
    /**
     * 日期：结算日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillDate?: string;
    /**
     * 支付者 UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayerUin?: string;
    /**
     * 使用者 UIN：实际使用资源的账号 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUin?: string;
    /**
     * 计费模式编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: string;
    /**
     * 计费模式：资源的计费模式，区分为包年包月和按量计费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayModeName?: string;
    /**
     * 交易类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: string;
    /**
     * 交易类型：明细交易类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionTypeName?: string;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCode?: string;
    /**
     * 产品名称：用户所采购的各类云产品
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCodeName?: string;
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCodeName?: string;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
    /**
     * 地域名称：资源所属地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionName?: string;
    /**
     * 可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: number;
    /**
     * 可用区：资源所属可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneName?: string;
    /**
     * 实例类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-”
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTypeName?: string;
    /**
     * 资源ID：不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID； 若该产品被分拆，则展示产品分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 实例名称：用户在控制台为资源设置的名称，如未设置默认为空；若该产品被分拆，则展示分拆产品分拆后的分拆项资源别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 分账标签：资源绑定的标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<BillTag>;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: number;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 费用归集类型：费用来源类型，分摊、归集、未分配
  0 - 分摊
  1 - 归集
  -1 - 未分配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllocationType?: number;
    /**
     * 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如客户享受一口价/合同价则默认不展示，退费类场景也默认不展示），指定价模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost?: string;
    /**
     * 预留实例抵扣时长：本产品或服务使用预留实例抵扣的使用时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiTimeSpan?: string;
    /**
     * 预留实例抵扣原价：本产品或服务使用预留实例抵扣的组件原价金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiCost?: string;
    /**
     * 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalCost?: string;
    /**
     * 现金账户支出(元)：通过现金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CashPayAmount?: string;
    /**
     * 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount?: string;
    /**
     * 赠送账户支出(元)：使用赠送金支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount?: string;
    /**
     * 分成账户支出(元)：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 组件名称编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ItemCode?: string;
    /**
     * 组件名称：用户购买的产品或服务，所包含的具体组件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ItemCodeName?: string;
    /**
     * 组件类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentCode?: string;
    /**
     * 组件类型：用户购买的产品或服务对应的组件大类
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentCodeName?: string;
    /**
     * 分拆项 ID：涉及分拆产品的分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SplitItemId?: string;
    /**
     * 分拆项名称：涉及分拆产品的分拆后的分拆项
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SplitItemName?: string;
    /**
     * 开始使用时间：产品服务开始使用时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeeBeginTime?: string;
    /**
     * 结束使用时间：产品服务结束使用时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeeEndTime?: string;
    /**
     * 节省计划抵扣原价：节省计划抵扣原价 = 节省计划包抵扣面值 / 节省计划抵扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPCost?: string;
    /**
     * 国内国际编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionType?: string;
    /**
     * 国内国际：资源所属区域类型（国内、国际）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionTypeName?: string;
    /**
     * 组件刊例价：组件的官网原始单价（如客户享受一口价/合同价则默认不展示）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SinglePrice?: string;
    /**
     * 组件单价：组件的折后单价，组件单价 = 刊例价 * 折扣
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContractPrice?: string;
    /**
     * 组件价格单位：组件价格的单位，单位构成：元/用量单位/时长单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SinglePriceUnit?: string;
    /**
     * 组件用量：该组件实际结算用量，组件用量=组件原始用量-抵扣用量（含资源包）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedAmount?: string;
    /**
     * 组件用量单位：组件用量对应的单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedAmountUnit?: string;
    /**
     * 使用时长：资源使用的时长，组件用量=组件原始使用时长-抵扣时长（含资源包）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeSpan?: string;
    /**
     * 时长单位：资源使用时长的单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeUnit?: string;
    /**
     * 备注属性（实例配置）：其他备注信息，如预留实例的预留实例类型和交易类型、CCN 产品的两端地域信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReserveDetail?: string;
    /**
     * 原始用量/时长：组件被资源包抵扣前的原始用量
  （目前仅实时音视频、弹性微服务、云呼叫中心及专属可用区产品支持该信息外显，其他产品尚在接入中）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalMeasure?: string;
    /**
     * 抵扣用量/时长（含资源包）：组件被资源包抵扣的用量
  （目前仅实时音视频、弹性微服务、云呼叫中心及专属可用区产品支持该信息外显，其他产品尚在接入中）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeductedMeasure?: string;
    /**
     * 折扣率：本资源享受的折扣率（如客户享受一口价/合同价则默认不展示，退费场景也默认不展示）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Discount?: string;
    /**
     * 混合折扣率：综合各类折扣抵扣信息后的最终折扣率，混合折扣率=优惠后总价/原价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlendedDiscount?: string;
    /**
     * 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PriceInfo?: Array<string>;
    /**
     * 计算规则说明：特殊交易类型计费结算的详细计算说明，如退费及变配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Formula?: string;
    /**
     * 计费规则：各产品详细的计费规则官网说明链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FormulaUrl?: string;
    /**
     * 配置描述：资源配置规格信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentConfig?: string;
    /**
     * SPDeduction
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPDeduction?: string;
    /**
     * 节省计划抵扣率：节省计划可用余额额度范围内，节省计划对于此组件打的折扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPDeductionRate?: string;
    /**
     * AssociatedOrder
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociatedOrder?: string;
    /**
     * 当前消费项的优惠对象，例如：官网折扣、用户折扣、活动折扣。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountObject?: string;
    /**
     * 当前消费项的优惠类型，例如：折扣、合同价。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountType?: string;
    /**
     * 对优惠类型的补充描述，例如：商务折扣8折，则优惠类型为“折扣”，优惠内容为“0.8”。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountContent?: string;
    /**
     * 账单月
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillMonth?: string;
}
/**
 * 按标签汇总消费详情
 */
export interface TagSummaryOverviewItem {
    /**
     * 标签值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagValue: string;
    /**
     * 费用所占百分比，两位小数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalCostRatio: string;
    /**
     * 优惠后总价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalCost: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CashPayAmount: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost: string;
}
/**
 * 经销账单明细数据对象
 */
export interface DistributionBillDetail {
    /**
     * 产品名称：用户所采购的各类云产品，例如：云服务器 CVM
     */
    BusinessCodeName?: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1
     */
    ProductCodeName?: string;
    /**
     * 计费模式：资源的计费模式，区分为包年包月和按量计费
     */
    PayModeName?: string;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
     */
    ProjectName?: string;
    /**
     * 地域：资源所属地域，如华南地区（广州）
     */
    RegionName?: string;
    /**
     * 可用区：资源所属可用区，如广州三区
     */
    ZoneName?: string;
    /**
     * 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID
     */
    ResourceId?: string;
    /**
     * 资源别名：用户在控制台为资源设置的名称，如果未设置，则默认为空
     */
    ResourceName?: string;
    /**
     * 交易类型，如包年包月新购、包年包月续费、按量计费扣费等类型
     */
    ActionTypeName?: string;
    /**
     * 订单ID：包年包月计费模式下订购的订单号
     */
    OrderId?: string;
    /**
     * 交易ID：结算扣费单号
     */
    BillId?: string;
    /**
     * 扣费时间：结算扣费时间
     */
    PayTime?: string;
    /**
     * 开始使用时间：产品服务开始使用时间
     */
    FeeBeginTime?: string;
    /**
     * 结束使用时间：产品服务结束使用时间
     */
    FeeEndTime?: string;
    /**
     * 组件列表
     */
    ComponentSet?: Array<BillDetailComponent>;
    /**
     * 使用者UIN：实际使用资源的账号 ID
     */
    OwnerUin?: string;
    /**
     * 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ）
     */
    OperateUin?: string;
    /**
     * 标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<BillTagInfo>;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCode?: string;
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 交易类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: string;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: string;
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PriceInfo?: Array<string>;
    /**
     * 关联交易单据ID：和本笔交易关联单据 ID，如，冲销订单，记录原订单、重结订单，退费单记录对应的原购买订单号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociatedOrder?: BillDetailAssociatedOrder;
    /**
     * 计算说明：特殊交易类型计费结算的详细计算说明，如退费及变配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Formula?: string;
    /**
     * 计费规则：各产品详细的计费规则官网说明链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FormulaUrl?: string;
    /**
     * 账单归属月
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillMonth?: string;
    /**
     * 账单归属日
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillDay?: string;
}
/**
 * DescribeAllocationOverview返回参数结构体
 */
export interface DescribeAllocationOverviewResponse {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordNum?: number;
    /**
     * 分账账单概览金额汇总
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: AllocationOverviewTotal;
    /**
     * 分账概览明细
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Detail?: Array<AllocationOverviewDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDosageCosDetailByDate请求参数结构体
 */
export interface DescribeDosageCosDetailByDateRequest {
    /**
     * 查询用量开始时间，格式为yyyy-mm-dd，例如：2020-09-01
     */
    StartDate: string;
    /**
     * 查询用量结束时间，格式为yyyy-mm-dd，例如：2020-09-30（与开始时间同月，不支持跨月查询）
     */
    EndDate: string;
    /**
     * COS 存储桶名称，可通过Get Service 接口是用来获取请求者名下的所有存储空间列表（Bucket list）https://cloud.tencent.com/document/product/436/8291
     */
    BucketName: string;
}
/**
 * DeleteAllocationTag请求参数结构体
 */
export interface DeleteAllocationTagRequest {
    /**
     * 用户分账标签键
     */
    TagKey: Array<string>;
}
/**
 * DescribeBillSummaryByProduct请求参数结构体
 */
export interface DescribeBillSummaryByProductRequest {
    /**
     * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    BeginTime: string;
    /**
     * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    EndTime: string;
    /**
     * 查询账单数据的用户UIN
     */
    PayerUin?: string;
    /**
     * 款项类别，与L0账单上的汇总类别对应。
  此参数自账单3.0（即2021-05）之后开始生效。
  枚举值：
  consume-消费
  refund-退款
  adjustment-调账
     */
    PayType?: string;
}
/**
 * 经销账单资源汇总数据对象
 */
export interface BillDistributionResourceSummary {
    /**
     * 产品名称：用户所采购的各类云产品，例如：云服务器 CVM
     */
    BusinessCodeName?: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1
     */
    ProductCodeName?: string;
    /**
     * 计费模式：资源的计费模式，区分为包年包月和按量计费
     */
    PayModeName?: string;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
     */
    ProjectName?: string;
    /**
     * 地域：资源所属地域，如华南地区（广州）
     */
    RegionName?: string;
    /**
     * 可用区：资源所属可用区，如广州三区
     */
    ZoneName?: string;
    /**
     * 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID
     */
    ResourceId?: string;
    /**
     * 资源别名：用户在控制台为资源设置的名称，如果未设置，则默认为空
     */
    ResourceName?: string;
    /**
     * 交易类型：如包年包月新购、包年包月续费、按量计费扣费等类型
     */
    ActionTypeName?: string;
    /**
     * 订单ID：包年包月计费模式下订购的订单号
     */
    OrderId?: string;
    /**
     * 扣费时间：结算扣费时间
     */
    PayTime?: string;
    /**
     * 开始使用时间：产品服务开始使用时间
     */
    FeeBeginTime?: string;
    /**
     * 结束使用时间：产品服务结束使用时间
     */
    FeeEndTime?: string;
    /**
     * 配置描述：该资源下的计费项名称和用量合并展示，仅在资源账单体现
     */
    ConfigDesc?: string;
    /**
     * 扩展字段1：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField1?: string;
    /**
     * 扩展字段2：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField2?: string;
    /**
     * 原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如果客户享受一口价/合同价则默认不展示，退费类场景也默认不展示）
     */
    TotalCost?: string;
    /**
     * 折扣率：本资源享受的折扣率（如果客户享受一口价/合同价则默认不展示，退费场景也默认不展示）
     */
    Discount?: string;
    /**
     * 优惠类型
     */
    ReduceType?: string;
    /**
     * 优惠后总价
     */
    RealTotalCost?: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount?: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount?: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount?: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 扩展字段3：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField3?: string;
    /**
     * 扩展字段4：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField4?: string;
    /**
     * 扩展字段5：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField5?: string;
    /**
     * 标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<BillTagInfo>;
    /**
     * 使用者UIN：实际使用资源的账号 ID
     */
    OwnerUin?: string;
    /**
     * 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ）
     */
    OperateUin?: string;
    /**
     * 产品编码
     */
    BusinessCode?: string;
    /**
     * 子产品编码
     */
    ProductCode?: string;
    /**
     * 地域ID
     */
    RegionId?: number;
    /**
     * 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。正常的实例展示默认为不展示
     */
    InstanceType?: string;
    /**
     * 预留实例抵扣组件原价：本产品或服务使用预留实例抵扣的组件原价金额
     */
    OriginalCostWithRI?: string;
    /**
     * 节省计划抵扣金额（已废弃）
     * @deprecated
     */
    SPDeduction?: string;
    /**
     * 节省计划抵扣组件原价：节省计划抵扣原价=节省计划包抵扣金额/节省计划抵扣率
     */
    OriginalCostWithSP?: string;
    /**
     * 账单归属月
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillMonth?: string;
}
/**
 * 产品汇总信息
 */
export interface BusinessSummaryInfo {
    /**
     * 产品编码
     */
    BusinessCode?: string;
    /**
     * 产品名称：用户所采购的各类云产品，例如：云服务器 CVM
     */
    BusinessCodeName?: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost?: string;
    /**
     * 优惠后总价
     */
    RealTotalCost?: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount?: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount?: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount?: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
}
/**
 * DescribeDosageDetailList返回参数结构体
 */
export interface DescribeDosageDetailListResponse {
    /**
     * 用量明细集合
     */
    Record?: Array<DescribeDosageDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAllocationBillDetail请求参数结构体
 */
export interface DescribeAllocationBillDetailRequest {
    /**
     * 数量，最大值为1000
     */
    Limit: number;
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推
     */
    Offset: number;
    /**
     * 账单月份，格式为2024-02，不传默认当前月
     */
    Month?: string;
    /**
     * 分账单元唯一标识，用作筛选
     */
    TreeNodeUniqKeys?: Array<string>;
    /**
     * 排序字段，枚举值如下：
  RiTimeSpan - 预留实例抵扣时长
  ExtendPayAmount1 - 预留实例抵扣组件原价
  RealCost - 折后总价
  CashPayAmount - 现金金额
  VoucherPayAmount - 代金券金额
  IncentivePayAmount - 赠送金金额
  TransferPayAmount -分成金金额
  Cost - 组件原价
     */
    Sort?: string;
    /**
     * 排序类型，枚举值如下：
  asc - 升序
  desc - 降序
     */
    SortType?: string;
    /**
     * 产品编码，用作筛选
     */
    BusinessCodes?: Array<string>;
    /**
     * 使用者UIN，用作筛选
     */
    OwnerUins?: Array<string>;
    /**
     * 操作者UIN，用作筛选
     */
    OperateUins?: Array<string>;
    /**
     * 计费模式编码，用作筛选
     */
    PayModes?: Array<string>;
    /**
     * 交易类型编码，用作筛选
     */
    ActionTypes?: Array<string>;
    /**
     * 子产品编码，用作筛选
     */
    ProductCodes?: Array<string>;
    /**
     * 地域ID，用作筛选
     */
    RegionIds?: Array<string>;
    /**
     * 可用区ID，用作筛选
     */
    ZoneIds?: Array<string>;
    /**
     * 实例类型编码，用作筛选
     */
    InstanceTypes?: Array<string>;
    /**
     * 标签，用作筛选
     */
    Tag?: Array<string>;
    /**
     * 组件类型编码，用作筛选
     */
    ComponentCodes?: Array<string>;
    /**
     * 组件名称编码，用作筛选
     */
    ItemCodes?: Array<string>;
    /**
     * 模糊搜索：支持标签、资源id、资源别名
     */
    SearchKey?: string;
    /**
     * 项目ID，用作筛选
     */
    ProjectIds?: Array<number | bigint>;
}
/**
 * DescribeBillList请求参数结构体
 */
export interface DescribeBillListRequest {
    /**
     * 查询范围的起始时间（包含）时间格式 yyyy-MM-dd HH:mm:ss 开始时间和结束时间差值小于等于六个月
     */
    StartTime: string;
    /**
     * 查询范围的结束时间（包含）时间格式 yyyy-MM-dd HH:mm:ss ，开始时间和结束时间差值小于等于六个月
     */
    EndTime: string;
    /**
     * 翻页偏移量，初始值为0
     */
    Offset: number;
    /**
     * 每页的限制数量
     */
    Limit: number;
    /**
     * 交易类型： all所有交易类型，recharge充值，return退款，unblock解冻，agentin资金转入，advanced垫付，cash提现，deduct扣费，block冻结，agentout资金转出，repay垫付回款，repayment还款(仅国际信用账户)，adj_refund调增(仅国际信用账户)，adj_deduct调减(仅国际信用账户)
     */
    PayType?: Array<string>;
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
    SubPayType?: Array<string>;
    /**
     * 是否返回0元交易金额的交易项，取值：0-不返回，1-返回。不传该参数则不返回
     */
    WithZeroAmount?: number;
}
/**
 * DescribeAllocationTrendByMonth请求参数结构体
 */
export interface DescribeAllocationTrendByMonthRequest {
    /**
     * 账单月份，格式为2024-02，不传默认当前月
     */
    Month: string;
    /**
     * 分账单元唯一标识
     */
    TreeNodeUniqKey: string;
    /**
     * 产品编码，用作筛选
     */
    BusinessCode?: string;
}
/**
 * DescribeVoucherUsageDetails返回参数结构体
 */
export interface DescribeVoucherUsageDetailsResponse {
    /**
     * 券总数
     */
    TotalCount?: number;
    /**
     * 总已用金额（微分）
     */
    TotalUsedAmount?: number;
    /**
     * 代金券使用记录细节
     */
    UsageRecords?: Array<UsageRecords>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消耗汇总详情
 */
export interface ConsumptionSummaryTotal {
    /**
     * 折后总价
     */
    RealTotalCost?: string;
}
/**
 * 节省计划覆盖率数据
 */
export interface SavingPlanCoverageDetail {
    /**
     * 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID
     */
    ResourceId?: string;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubProductCode?: string;
    /**
     * 费用起始日期，格式yyyy-MM-dd
     */
    StartDate?: string;
    /**
     * 费用结束日期，格式yyyy-MM-dd，目前与StartDate相等
     */
    EndDate?: string;
    /**
     * 节省计划覆盖金额（即节省计划支付金额）
     */
    SpCoveredAmount?: number;
    /**
     * 节省计划未覆盖金额（即优惠后总价）
     */
    SpUncoveredAmount?: number;
    /**
     * 总支出（即节省计划未覆盖金额 + 节省计划覆盖金额）
     */
    TotalRealAmount?: number;
    /**
     * 按量计费预期金额（即折前价 * 折扣）
     */
    ExpectedAmount?: number;
    /**
     * 覆盖率结果，取值[0, 100]
     */
    SpCoverage?: number;
}
/**
 * DescribeAllocationOverview请求参数结构体
 */
export interface DescribeAllocationOverviewRequest {
    /**
     * 数量，最大值为1000
     */
    Limit: number;
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推
     */
    Offset: number;
    /**
     * 账单月份，格式为2024-02，不传默认当前月
     */
    Month?: string;
    /**
     * 统计周期，枚举值如下
  month - 月
  day - 日
     */
    PeriodType?: string;
    /**
     * 分账单元唯一标识，用作筛选
     */
    TreeNodeUniqKeys?: Array<string>;
    /**
     * 排序字段，枚举值如下：
  GatherCashPayAmount - 归集费用(现金)
  GatherVoucherPayAmount- 归集费用(优惠券)
  GatherIncentivePayAmount -  归集费用(赠送金)
  GatherTransferPayAmount - 归集费用(分成金)
  AllocateCashPayAmount - 分摊费用(现金)
  AllocateVoucherPayAmount - 分摊费用(优惠券)
  AllocateIncentivePayAmount - 分摊费用(赠送金)
  AllocateTransferPayAmount - 分摊费用(分成金)
  TotalCashPayAmount - 合计费用(现金)
  TotalVoucherPayAmount - 合计费用(优惠券)
  TotalIncentivePayAmount - 合计费用(赠送金)
  TotalTransferPayAmount - 合计费用(分成金)
  GatherRealCost - 归集费用(折后总额)
  AllocateRealCost - 分摊费用(折后总额)
  RealTotalCost - 合计费用(折后总额)
  Ratio  - 占比(折后总额)
     */
    Sort?: string;
    /**
     * 排序类型，枚举值如下：
  asc - 升序
  desc - 降序
     */
    SortType?: string;
    /**
     * 日期，用作筛选
     */
    BillDates?: Array<string>;
}
/**
 * DescribeGatherResource返回参数结构体
 */
export interface DescribeGatherResourceResponse {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordNum?: number;
    /**
     * 资源归集汇总
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatherResourceSummary?: Array<GatherResourceSummary>;
    /**
     * 数据更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdateTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCostDetail返回参数结构体
 */
export interface DescribeCostDetailResponse {
    /**
     * 消耗明细
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DetailSet?: Array<CostDetail>;
    /**
     * 记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 由时间和值组成的数据结构
 */
export interface DetailPoint {
    /**
     * 时间
     */
    Time?: string;
    /**
     * 值
     */
    Value?: string;
}
/**
 * DescribeAllocationMonthOverview返回参数结构体
 */
export interface DescribeAllocationMonthOverviewResponse {
    /**
     * 分账账单月概览详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Detail?: Array<AllocationOverviewNode>;
    /**
     * 分账账单概览金额汇总
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: AllocationOverviewTotal;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAllocationSummaryByItem返回参数结构体
 */
export interface DescribeAllocationSummaryByItemResponse {
    /**
     * 总条数
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordNum?: number;
    /**
     * 分账账单概览金额汇总
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: AllocationOverviewTotal;
    /**
     * 分账账单按组件汇总明细
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Detail?: Array<AllocationSummaryByItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDosageDetailByDate返回参数结构体
 */
export interface DescribeDosageDetailByDateResponse {
    /**
     * 计量单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Unit?: string;
    /**
     * 用量数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DetailSets?: Array<DetailSet>;
    /**
     * 错误码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetCode?: number;
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDosageDetailByDate请求参数结构体
 */
export interface DescribeDosageDetailByDateRequest {
    /**
     * 查询账单开始日期，如 2019-01-01
     */
    StartDate: string;
    /**
     * 查询账单结束日期，如 2019-01-01， 时间跨度不超过7天
     */
    EndDate: string;
    /**
     * 互动直播：
  10194   互动直播-核心机房           :
  10195   互动直播-边缘机房
  
  cdn业务：
  102383：CDN静态加速流量(国内)
  102384：CDN静态加速带宽(国内)
  102385：CDN静态加速流量(海外)
  102386：CDN静态加速带宽(海外)
  
  100967：弹性公网IP-按流量计费
  101065：公网负载均衡-按流量计费
  
  视频直播
  10226 视频直播流量(国内)
  10227 视频直播带宽(国内)
  100763 视频直播流量(海外)
  100762 视频直播宽带(海外)
  
  仅支持以上产品
     */
    ProductCode: string;
    /**
     * 查询域名 例如 www.qq.com
  非CDN业务查询时传入空字符串，返回的值为空
     */
    Domain: string;
    /**
     * 1、如果为空，则返回EIP或CLB所有实例的明细；
  2、如果传入实例名，则返回该实例明细
     */
    InstanceID?: string;
    /**
     * 支付者的账号 ID（账号 ID 是用户在腾讯云的唯一账号标识），默认查询本账号账单，如集团管理账号需查询成员账号自付的账单，该字段需入参成员账号UIN
     */
    PayerUin?: string;
}
/**
 * 使用记录
 */
export interface UsageRecords {
    /**
     * 使用金额（微分）
     */
    UsedAmount?: number;
    /**
     * 使用时间
     */
    UsedTime?: string;
    /**
     * 使用记录细节
     */
    UsageDetails?: Array<UsageDetails>;
    /**
     * 付费模式
     */
    PayMode?: string;
    /**
     * 查询的券id
     */
    VoucherId?: string;
    /**
     * 交易场景：（adjust：调账、common：正常交易场景）
     */
    PayScene?: string;
    /**
     * 唯一id,对应交易:预付费的dealName,调账/后付费的outTradeNo
     */
    SeqId?: string;
}
/**
 * DescribeGatherResource请求参数结构体
 */
export interface DescribeGatherResourceRequest {
    /**
     * 数量，最大值为1000
     */
    Limit: number;
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推
     */
    Offset: number;
    /**
     * 账单月份，格式为2024-02，不传默认当前月
     */
    Month?: string;
    /**
     * 分账单元唯一标识，用作筛选
     */
    TreeNodeUniqKey?: string;
    /**
     * 资源目录类别，枚举值如下：
  all - 全部
  none - 未归集
     */
    GatherType?: string;
    /**
     * 排序字段，枚举值如下：
  realCost  - 折后总价
  cashPayAmount - 现金金额
  voucherPayAmount - 代金券金额
  incentivePayAmount  - 赠送金金额
  transferPayAmount -分成金金额
     */
    Sort?: string;
    /**
     * 排序类型，枚举值如下：
  asc - 升序
  desc - 降序
     */
    SortType?: string;
    /**
     * 产品编码，用作筛选
     */
    BusinessCodes?: Array<string>;
    /**
     * 子产品编码，用作筛选
     */
    ProductCodes?: Array<string>;
    /**
     * 组件名称编码，用作筛选
     */
    ItemCodes?: Array<string>;
    /**
     * 地域ID，用作筛选
     */
    RegionIds?: Array<number | bigint>;
    /**
     * 实例类型编码，用作筛选
     */
    InstanceTypes?: Array<string>;
    /**
     * 计费模式编码，用作筛选
     */
    PayModes?: Array<string>;
    /**
     * 操作者UIN，用作筛选
     */
    OperateUins?: Array<string>;
    /**
     * 使用者UIN，用作筛选
     */
    OwnerUins?: Array<string>;
    /**
     * 模糊搜索：支持标签、资源id、资源别名
     */
    SearchKey?: string;
    /**
     * 标签，用作筛选
     */
    Tag?: Array<string>;
    /**
     * 项目ID，用作筛选
     */
    ProjectIds?: Array<string>;
    /**
     * 交易类型编码，用作筛选
     */
    ActionTypes?: Array<string>;
}
/**
 * DescribeCostSummaryByProject返回参数结构体
 */
export interface DescribeCostSummaryByProjectResponse {
    /**
     * 数据是否准备好，0未准备好，1准备好
     */
    Ready?: number;
    /**
     * 消耗详情
     */
    Total?: ConsumptionSummaryTotal;
    /**
     * 消耗按业务汇总详情
     */
    Data?: Array<ConsumptionProjectSummaryDataItem>;
    /**
     * 记录数量，NeedRecordNum为0时返回null
     */
    RecordNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 成本分析项目返回复杂类型
 */
export interface AnalyseProjectDetail {
    /**
     * 项目id
     */
    ProjectId?: string;
    /**
     * 默认项目
     */
    ProjectName?: string;
}
/**
 * DescribeBillSummaryByTag返回参数结构体
 */
export interface DescribeBillSummaryByTagResponse {
    /**
     * 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可）
     */
    Ready?: number;
    /**
     * 各标签值花费分布详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SummaryOverview?: Array<TagSummaryOverviewItem>;
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SummaryTotal?: SummaryTotal;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 账单多维度汇总消费详情
 */
export interface SummaryDetail {
    /**
     * 账单维度编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupKey?: string;
    /**
     * 账单维度值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupValue?: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
     */
    TotalCost?: string;
    /**
     * 优惠后总价
     */
    RealTotalCost?: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount?: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount?: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount?: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 产品汇总信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Business?: Array<BusinessSummaryInfo>;
}
/**
 * DescribeBillSummaryByPayMode返回参数结构体
 */
export interface DescribeBillSummaryByPayModeResponse {
    /**
     * 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可）
     */
    Ready?: number;
    /**
     * 各付费模式花费分布详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SummaryOverview?: Array<PayModeSummaryOverviewItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAllocationSummaryByBusiness返回参数结构体
 */
export interface DescribeAllocationSummaryByBusinessResponse {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordNum?: number;
    /**
     * 分账账单概览金额汇总
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: AllocationOverviewTotal;
    /**
     * 分账账单按产品汇总明细
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Detail?: Array<AllocationSummaryByBusiness>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAllocationSummaryByItem请求参数结构体
 */
export interface DescribeAllocationSummaryByItemRequest {
    /**
     * 数量，最大值为1000
  
     */
    Limit: number;
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推
     */
    Offset: number;
    /**
     * 账单月份，格式为2024-02，不传默认当前月
  
     */
    Month?: string;
    /**
     * 统计周期，枚举值如下
  month - 月
  day - 日
     */
    PeriodType?: string;
    /**
     * 分账单元唯一标识，用作筛选
  
     */
    TreeNodeUniqKeys?: Array<string>;
    /**
     * 排序字段，枚举值如下：
  RiTimeSpan - 预留实例抵扣时长
  ExtendPayAmount1 - 预留实例抵扣组件原价
  RealCost - 折后总价
  CashPayAmount - 现金金额
  VoucherPayAmount - 代金券金额
  IncentivePayAmount - 赠送金金额
  TransferPayAmount -分成金金额
  Cost - 组件原价
     */
    Sort?: string;
    /**
     * 排序类型，枚举值如下：
  asc - 升序
  desc - 降序
     */
    SortType?: string;
    /**
     * 日期，用作筛选
  
     */
    BillDates?: Array<string>;
    /**
     * 产品编码，用作筛选
  
     */
    BusinessCodes?: Array<string>;
    /**
     * 使用者UIN，用作筛选
  
     */
    OwnerUins?: Array<string>;
    /**
     * 操作者UIN，用作筛选
  
     */
    OperateUins?: Array<string>;
    /**
     * 计费模式编码，用作筛选
  
     */
    PayModes?: Array<string>;
    /**
     * 交易类型编码，用作筛选
  
     */
    ActionTypes?: Array<string>;
    /**
     * 子产品编码，用作筛选
  
     */
    ProductCodes?: Array<string>;
    /**
     * 地域ID，用作筛选
  
     */
    RegionIds?: Array<string>;
    /**
     * 可用区ID，用作筛选
  
     */
    ZoneIds?: Array<string>;
    /**
     * 实例类型编码，用作筛选
  
     */
    InstanceTypes?: Array<string>;
    /**
     * 标签，用作筛选
  
     */
    Tag?: Array<string>;
    /**
     * 组件类型编码，用作筛选
     */
    ComponentCodes?: Array<string>;
    /**
     * 组件名称编码，用作筛选
     */
    ItemCodes?: Array<string>;
    /**
     * 模糊搜索：支持标签、资源id、资源别名
     */
    SearchKey?: string;
    /**
     * 项目ID，用作筛选
  
     */
    ProjectIds?: Array<number | bigint>;
    /**
     * 费用归集类型，枚举值如下：
  0 - 分摊
  1 - 归集
  -1 - 未分配
     */
    AllocationType?: Array<number | bigint>;
}
/**
 * DescribeBillSummaryByTag请求参数结构体
 */
export interface DescribeBillSummaryByTagRequest {
    /**
     * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    BeginTime: string;
    /**
     * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    EndTime: string;
    /**
     * 分账标签键，用户自定义
     */
    TagKey: string;
    /**
     * 查询账单数据的用户UIN
     */
    PayerUin?: string;
    /**
     * 分账标签值
     */
    TagValue?: string;
}
/**
 * 成本分析数据复杂类型
 */
export interface AnalyseDetail {
    /**
     * 时间
     */
    Name?: string;
    /**
     * 金额
     */
    Total?: string;
    /**
     * 日期明细金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeDetail?: Array<AnalyseTimeDetail>;
}
/**
 * 日期筛选列表
 */
export interface BillDays {
    /**
     * 日期：结算日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillDay: string;
}
/**
 * DescribeSavingPlanCoverage返回参数结构体
 */
export interface DescribeSavingPlanCoverageResponse {
    /**
     * 节省计划覆盖率明细数据
     */
    DetailSet?: Array<SavingPlanCoverageDetail>;
    /**
     * 节省计划覆盖率聚合数据
     */
    RateSet?: Array<SavingPlanCoverageRate>;
    /**
     * 查询命中的节省计划覆盖率明细数据总条数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 成本分析金额返回数据模型
 */
export interface AnalyseAmountDetail {
    /**
     * 费用类型
     */
    Key?: string;
    /**
     * 是否展示
     */
    Display?: number;
}
/**
 * DescribeBillSummaryByProject请求参数结构体
 */
export interface DescribeBillSummaryByProjectRequest {
    /**
     * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    BeginTime: string;
    /**
     * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    EndTime: string;
    /**
     * 查询账单数据的用户UIN
     */
    PayerUin?: string;
}
/**
 * DescribeBillResourceSummaryForOrganization请求参数结构体
 */
export interface DescribeBillResourceSummaryForOrganizationRequest {
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推
     */
    Offset: number;
    /**
     * 数量，最大值为1000
     */
    Limit: number;
    /**
     * 月份，格式为yyyy-mm。不能早于开通账单2.0的月份
     */
    Month: string;
    /**
     * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
     * @deprecated
     */
    PeriodType?: string;
    /**
     * 是否需要访问列表的总记录数，用于前端分页
  1-表示需要， 0-表示不需要
     */
    NeedRecordNum?: number;
    /**
     * 查询交易类型（请使用交易类型名称入参），入参示例枚举如下：
  包年包月新购
  包年包月续费
  包年包月配置变更
  包年包月退款
  按量计费扣费
  线下项目扣费
  线下产品扣费
  调账扣费
  调账补偿
  按量计费小时结
  按量计费日结
  按量计费月结
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
  包年包月转按量
  保底扣款
  节省计划小时费用
     */
    ActionType?: string;
    /**
     * 查询指定资源信息
     */
    ResourceId?: string;
    /**
     * 付费模式 prePay/postPay
     */
    PayMode?: string;
    /**
     * 产品名称代码
  备注：如需获取当月使用过的BusinessCode，请调用API：<a href="https://cloud.tencent.com/document/product/555/35761">获取产品汇总费用分布</a>
     */
    BusinessCode?: string;
    /**
     * 分账标签键，用户自定义（支持2021-01以后账单查询）
     */
    TagKey?: string;
    /**
     * 分账标签值，该参数为空表示该标签键下未设置标签值的记录
  （支持2021-01以后账单查询）
     */
    TagValue?: string;
}
/**
 * DescribeCostSummaryByRegion请求参数结构体
 */
export interface DescribeCostSummaryByRegionRequest {
    /**
     * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    BeginTime: string;
    /**
     * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    EndTime: string;
    /**
     * 每次获取数据量，最大值为100
     */
    Limit: number;
    /**
     * 偏移量,默认从0开始
     */
    Offset: number;
    /**
     * 查询账单数据的用户UIN
     */
    PayerUin?: string;
    /**
     * 是否需要返回记录数量，0不需要，1需要，默认不需要
     */
    NeedRecordNum?: number;
}
/**
 * 消耗费用趋势
 */
export interface ConsumptionSummaryTrend {
    /**
     * 趋势类型，upward上升/downward下降/none无
     */
    Type?: string;
    /**
     * 趋势值，Type为none是该字段值为null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
/**
 * DescribeBillDownloadUrl请求参数结构体
 */
export interface DescribeBillDownloadUrlRequest {
    /**
     * 账单类型，枚举值
  billOverview=L0-PDF账单
  billSummary=L1-汇总账单
  billResource=L2-资源账单
  billDetail=L3-明细账单
  billPack=账单包
     */
    FileType: string;
    /**
     * 账单月份
  支持的最早开始月份为2021-01
  L0-PDF&账单包不支持当月下载，当月账单请在次月1号19:00出账后下载
     */
    Month: string;
    /**
     * 下载的账号 ID列表，默认查询本账号账单，如集团管理账号需下载成员账号自付的账单，该字段需入参成员账号UIN
     */
    ChildUin?: Array<string>;
}
/**
 * DescribeAllocationSummaryByBusiness请求参数结构体
 */
export interface DescribeAllocationSummaryByBusinessRequest {
    /**
     * 数量，最大值为1000
     */
    Limit: number;
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推
     */
    Offset: number;
    /**
     * 账单月份，格式为2024-02，不传默认当前月
  
     */
    Month?: string;
    /**
     * 统计周期，枚举值如下
  month - 月
  day - 日
     */
    PeriodType?: string;
    /**
     * 分账单元唯一标识，用作筛选
  
     */
    TreeNodeUniqKeys?: Array<string>;
    /**
     * 排序类型，枚举值如下：
  asc - 升序
  desc - 降序
     */
    SortType?: string;
    /**
     * 排序字段，枚举值如下：
  GatherCashPayAmount - 归集费用(现金)
  GatherVoucherPayAmount- 归集费用(优惠券)
  GatherIncentivePayAmount - 归集费用(赠送金)
  GatherTransferPayAmount - 归集费用(分成金)
  AllocateCashPayAmount - 分摊费用(现金)
  AllocateVoucherPayAmount - 分摊费用(优惠券)
  AllocateIncentivePayAmount - 分摊费用(赠送金)
  AllocateTransferPayAmount - 分摊费用(分成金)
  TotalCashPayAmount - 合计费用(现金)
  TotalVoucherPayAmount - 合计费用(优惠券)
  TotalIncentivePayAmount - 合计费用(赠送金)
  TotalTransferPayAmount - 合计费用(分成金)
  GatherRealCost - 归集费用(折后总额)
  AllocateRealCost - 分摊费用(折后总额)
  RealTotalCost - 合计费用(折后总额)
  BusinessCode - 产品代码
  Ratio - 占比(折后总额)
  Trend - 环比(折后总额)
     */
    Sort?: string;
    /**
     * 日期，用作筛选，PeriodType=day时可传
  
     */
    BillDates?: Array<string>;
    /**
     * 产品编码，用作筛选
     */
    BusinessCodes?: Array<string>;
    /**
     * 模糊搜索条件
     * @deprecated
     */
    SearchKey?: string;
}
/**
 * DescribeBillSummaryByPayMode请求参数结构体
 */
export interface DescribeBillSummaryByPayModeRequest {
    /**
     * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    BeginTime: string;
    /**
     * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    EndTime: string;
    /**
     * 查询账单数据的用户UIN
     */
    PayerUin?: string;
}
/**
 * DescribeAllocationBillConditions请求参数结构体
 */
export interface DescribeAllocationBillConditionsRequest {
    /**
     * 账单月份，格式为2024-02，不传默认当前月
     */
    Month?: string;
    /**
     * 分账单元唯一标识，用作筛选
     */
    TreeNodeUniqKeys?: Array<string>;
    /**
     * 日期
     */
    BillDates?: Array<string>;
    /**
     * 产品编码
     */
    BusinessCodes?: Array<string>;
    /**
     * 使用者UIN
     */
    OwnerUins?: Array<string>;
    /**
     * 操作者UIN
     */
    OperateUins?: Array<string>;
    /**
     * 计费模式编码
     */
    PayModes?: Array<string>;
    /**
     * 交易类型编码
     */
    ActionTypes?: Array<string>;
    /**
     * 子产品编码
     */
    ProductCodes?: Array<string>;
    /**
     * 地域ID
     */
    RegionIds?: Array<string>;
    /**
     * 可用区ID
     */
    ZoneIds?: Array<string>;
    /**
     * 实例类型编码
     */
    InstanceTypes?: Array<string>;
    /**
     * 标签
     */
    Tag?: Array<string>;
    /**
     * 组件类型编码
     */
    ComponentCodes?: Array<string>;
    /**
     * 组件名称编码
     */
    ItemCodes?: Array<string>;
    /**
     * 模糊搜索条件
     */
    SearchKey?: string;
    /**
     * 项目id
     */
    ProjectIds?: Array<number | bigint>;
    /**
     * 费用归集类型
     */
    AllocationType?: Array<number | bigint>;
}
/**
 * 适用商品信息
 */
export interface ApplicableProducts {
    /**
     * 适用商品名称，值为“全产品通用”或商品名称组成的string，以","分割。
     */
    GoodsName?: string;
    /**
     * postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。如GoodsName为多个商品名以","分割组成的string，而PayMode为"*"，表示每一件商品的模式都为"*"。
     */
    PayMode?: string;
}
/**
 * 分账账单按资源汇总明细
 */
export interface AllocationSummaryByResource {
    /**
     * 分账单元唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKey?: string;
    /**
     * 分账单元名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKeyName?: string;
    /**
     * 日期：结算日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillDate?: string;
    /**
     * 支付者 UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayerUin?: string;
    /**
     * 使用者 UIN：实际使用资源的账号 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUin?: string;
    /**
     * 计费模式编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: string;
    /**
     * 计费模式：资源的计费模式，区分为包年包月和按量计费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayModeName?: string;
    /**
     * 交易类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: string;
    /**
     * 交易类型：明细交易类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionTypeName?: string;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCode?: string;
    /**
     * 产品名称：用户所采购的各类云产品
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCodeName?: string;
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCodeName?: string;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
    /**
     * 地域名称：资源所属地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionName?: string;
    /**
     * 可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: number;
    /**
     * 可用区：资源所属可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneName?: string;
    /**
     * 实例类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-”
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTypeName?: string;
    /**
     * 资源ID：不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID； 若该产品被分拆，则展示产品分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 实例名称：用户在控制台为资源设置的名称，如未设置默认为空；若该产品被分拆，则展示分拆产品分拆后的分拆项资源别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 分账标签：资源绑定的标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<BillTag>;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: number;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 费用归集类型：费用来源类型，分摊、归集、未分配
  0 - 分摊
  1 - 归集
  -1 -  未分配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllocationType?: number;
    /**
     * 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如客户享受一口价/合同价则默认不展示，退费类场景也默认不展示），指定价模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost?: string;
    /**
     * 预留实例抵扣时长：本产品或服务使用预留实例抵扣的使用时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiTimeSpan?: string;
    /**
     * 预留实例抵扣原价：本产品或服务使用预留实例抵扣的组件原价金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiCost?: string;
    /**
     * 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalCost?: string;
    /**
     * 现金账户支出(元)：通过现金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CashPayAmount?: string;
    /**
     * 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount?: string;
    /**
     * 赠送账户支出(元)：使用赠送金支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount?: string;
    /**
     * 分成账户支出(元)：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 分拆项 ID：涉及分拆产品的分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SplitItemId?: string;
    /**
     * 分拆项名称：涉及分拆产品的分拆后的分拆项
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SplitItemName?: string;
    /**
     * 开始使用时间：产品服务开始使用时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeeBeginTime?: string;
    /**
     * 结束使用时间：产品服务结束使用时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeeEndTime?: string;
    /**
     * 节省计划抵扣原价：节省计划抵扣原价 = 节省计划包抵扣面值 / 节省计划抵扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPCost?: string;
    /**
     * 国内国际编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionType?: string;
    /**
     * 国内国际：资源所属区域类型（国内、国际）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionTypeName?: string;
    /**
     * 配置描述：对应资源下各组件名称及用量（如组件为用量累加型计费则为合计用量）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentConfig?: string;
    /**
     * SPDeduction
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPDeduction?: string;
    /**
     * 账单月
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillMonth?: string;
}
/**
 * 分账账单月概览详情
 */
export interface AllocationOverviewNode {
    /**
     * 分账单元ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 分账单元名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 分账单元唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKey?: string;
    /**
     * 分账单元包含规则标志
  0 - 不存在规则
  1 - 同时存在归集规则和公摊规则
  2 - 仅存在归集规则
  3 - 仅存在公摊规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Symbol?: number;
    /**
     * 子单元月概览详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<AllocationOverviewNode>;
    /**
     * 分账账单月概览金额明细
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Detail?: AllocationMonthOverviewDetail;
}
/**
 * 付费模式过滤条件
 */
export interface ConditionPayMode {
    /**
     * 付费模式
     */
    PayMode?: string;
    /**
     * 付费模式名称
     */
    PayModeName?: string;
}
/**
 * 分账条件子产品筛选
 */
export interface BillProductLink {
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 子产品名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCodeName?: string;
    /**
     * 组件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Children?: Array<BillItem>;
}
/**
 * 当前归属单元信息
 */
export interface AllocationTreeNode {
    /**
     * 分账单元唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKey?: string;
    /**
     * 分账单元名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKeyName?: string;
}
/**
 * DescribeSavingPlanCoverage请求参数结构体
 */
export interface DescribeSavingPlanCoverageRequest {
    /**
     * 费用起始日期，格式yyyy-MM-dd
     */
    StartDate: string;
    /**
     * 费用结束日期，格式yyyy-MM-dd
     */
    EndDate: string;
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推
     */
    Offset: number;
    /**
     * 数量，最大值为200
     */
    Limit: number;
    /**
     * 取值包括1（缺省值）和2，1表示按天统计覆盖率，2表示按月统计覆盖率，此参数仅影响返回的RateSet聚合粒度，不影响返回的DetailSet
     */
    PeriodType?: number;
}
/**
 * PayDeals返回参数结构体
 */
export interface PayDealsResponse {
    /**
     * 此次操作支付成功的子订单号数组
     */
    OrderIds?: Array<string>;
    /**
     * 此次操作支付成功的资源Id数组
     */
    ResourceIds?: Array<string>;
    /**
     * 此次操作支付成功的大订单号数组
     */
    BigDealIds?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 账单明细数据对象
 */
export interface BillDetail {
    /**
     * 产品名称：用户所采购的各类云产品，例如：云服务器 CVM
     */
    BusinessCodeName?: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1
     */
    ProductCodeName?: string;
    /**
     * 计费模式：资源的计费模式，区分为包年包月和按量计费
     */
    PayModeName?: string;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
     */
    ProjectName?: string;
    /**
     * 地域：资源所属地域，如华南地区（广州）
     */
    RegionName?: string;
    /**
     * 可用区：资源所属可用区，如广州三区
     */
    ZoneName?: string;
    /**
     * 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID
     */
    ResourceId?: string;
    /**
     * 资源别名：用户在控制台为资源设置的名称，如果未设置，则默认为空
     */
    ResourceName?: string;
    /**
     * 交易类型，如包年包月新购、包年包月续费、按量计费扣费等类型
     */
    ActionTypeName?: string;
    /**
     * 订单ID：包年包月计费模式下订购的订单号
     */
    OrderId?: string;
    /**
     * 交易ID：结算扣费单号
     */
    BillId?: string;
    /**
     * 扣费时间：结算扣费时间
     */
    PayTime?: string;
    /**
     * 开始使用时间：产品服务开始使用时间
     */
    FeeBeginTime?: string;
    /**
     * 结束使用时间：产品服务结束使用时间
     */
    FeeEndTime?: string;
    /**
     * 组件列表
     */
    ComponentSet?: Array<BillDetailComponent>;
    /**
     * 支付者UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识
     */
    PayerUin?: string;
    /**
     * 使用者UIN：实际使用资源的账号 ID
     */
    OwnerUin?: string;
    /**
     * 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ）
     */
    OperateUin?: string;
    /**
     * 标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<BillTagInfo>;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCode?: string;
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 交易类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: string;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: string;
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PriceInfo?: Array<string>;
    /**
     * 关联交易单据ID：和本笔交易关联单据 ID，如，冲销订单，记录原订单、重结订单，退费单记录对应的原购买订单号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociatedOrder?: BillDetailAssociatedOrder;
    /**
     * 计算说明：特殊交易类型计费结算的详细计算说明，如退费及变配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Formula?: string;
    /**
     * 计费规则：各产品详细的计费规则官网说明链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FormulaUrl?: string;
    /**
     * 账单归属日
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillDay?: string;
    /**
     * 账单归属月
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillMonth?: string;
    /**
     * 账单记录ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 国内国际编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionType?: string;
    /**
     * 国内国际：资源所属区域类型（国内、国际）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionTypeName?: string;
    /**
     * 备注属性（实例配置）：其他备注信息，如预留实例的预留实例类型和交易类型、CCN 产品的两端地域信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReserveDetail?: string;
    /**
     * 优惠对象
     */
    DiscountObject?: string;
    /**
     * 优惠类型
     */
    DiscountType?: string;
    /**
     * 优惠内容
     */
    DiscountContent?: string;
}
/**
 * DescribeBillDetail返回参数结构体
 */
export interface DescribeBillDetailResponse {
    /**
     * 详情列表
     */
    DetailSet?: Array<BillDetail>;
    /**
     * 总记录数，24小时缓存一次，可能比实际总记录数少
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 本次请求的上下文信息，可用于下一次请求的请求参数中，加快查询速度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Context?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 订单数据对象
 */
export interface Deal {
    /**
     * 订单号
     */
    OrderId: string;
    /**
     * 订单的状态 1：未支付 2：已支付3：发货中 4：已发货 5：发货失败 6：已退款 7：已关单 8：订单过期 9：订单已失效 10：产品已失效 11：代付拒绝 12：支付中
     */
    Status: number;
    /**
     * 支付者
     */
    Payer: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 创建人
     */
    Creator: string;
    /**
     * 实际支付金额（分）
     */
    RealTotalCost: number;
    /**
     * 代金券抵扣金额（分）
     */
    VoucherDecline: number;
    /**
     * 项目ID
     */
    ProjectId: number;
    /**
     * 产品分类ID
     */
    GoodsCategoryId: number;
    /**
     * 产品详情
     */
    ProductInfo: Array<ProductInfo>;
    /**
     * 时长
     */
    TimeSpan: number;
    /**
     * 时间单位
     */
    TimeUnit: string;
    /**
     * 货币单位
     */
    Currency: string;
    /**
     * 折扣率
     */
    Policy: number;
    /**
     * 单价（分）
     */
    Price: number;
    /**
     * 原价（分）
     */
    TotalCost: number;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode: string;
    /**
     * 子产品编码
     */
    SubProductCode: string;
    /**
     * 大订单号
     */
    BigDealId: string;
    /**
     * 退费公式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Formula: string;
    /**
     * 退费涉及订单信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RefReturnDeals: string;
    /**
     * 付费模式：prePay 预付费 postPay后付费 riPay预留实例
     */
    PayMode: string;
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
    Action: string;
    /**
     * 产品编码中文名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName: string;
    /**
     * 子产品编码中文名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubProductName: string;
    /**
     * 订单对应的资源id, 查询参数Limit超过200，将返回null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId: Array<string>;
}
/**
 * DescribeDealsByCond返回参数结构体
 */
export interface DescribeDealsByCondResponse {
    /**
     * 订单列表
     */
    Deals?: Array<Deal>;
    /**
     * 订单总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 可用区筛选列表
 */
export interface BillZoneId {
    /**
     * 可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId: number;
    /**
     * 可用区：资源所属可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneName: string;
}
/**
 * 地域筛选列表
 */
export interface BillRegion {
    /**
     * 地域ID
     */
    RegionId: number;
    /**
     * 地域名称：资源所属地域
     */
    RegionName: string;
}
/**
 * DescribeBillSummaryByProject返回参数结构体
 */
export interface DescribeBillSummaryByProjectResponse {
    /**
     * 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可）
     */
    Ready?: number;
    /**
     * 各项目花费分布详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SummaryOverview?: Array<ProjectSummaryOverviewItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBillAdjustInfo请求参数结构体
 */
export interface DescribeBillAdjustInfoRequest {
    /**
     * 格式：yyyy-MM
  账单月份，month和timeFrom&timeTo必传一个，如果有传timeFrom&timeTo则month字段无效
     */
    Month?: string;
    /**
     * 格式：yyyy-MM-dd
  开始时间，month和timeFrom&timeTo必传一个，如果有该字段则month字段无效。timeFrom和timeTo必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据
     */
    TimeFrom?: string;
    /**
     * 格式：yyyy-MM-dd
  截止时间，month和timeFrom&timeTo必传一个，如果有该字段则month字段无效。timeFrom和timeTo必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据
     */
    TimeTo?: string;
}
/**
 * 标签信息
 */
export interface TagDataInfo {
    /**
     * 分账标签键
     */
    TagKey?: string;
    /**
     * 标签类型，0普通标签，1分账标签
     */
    Status?: number;
    /**
     * 设置分账标签时间，普通标签不返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * PayDeals请求参数结构体
 */
export interface PayDealsRequest {
    /**
     * 需要支付的一个或者多个子订单号，与BigDealIds字段两者必须且仅传一个参数
     */
    OrderIds?: Array<string>;
    /**
     * 是否自动使用代金券,1:是,0否,默认0
     */
    AutoVoucher?: number;
    /**
     * 代金券ID列表,目前仅支持指定一张代金券
     */
    VoucherIds?: Array<string>;
    /**
     * 需要支付的一个或者多个大订单号，与OrderIds字段两者必须且仅传一个参数
     */
    BigDealIds?: Array<string>;
}
/**
 * 总数
 */
export interface SummaryTotal {
    /**
     * 优惠后总价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalCost: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost: string;
}
/**
 * 按产品汇总总费用
 */
export interface BusinessSummaryTotal {
    /**
     * 优惠后总价
  
     */
    RealTotalCost: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
     */
    TransferPayAmount: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
     */
    TotalCost: string;
}
/**
 * DescribeAllocationBillConditions返回参数结构体
 */
export interface DescribeAllocationBillConditionsResponse {
    /**
     * 产品筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Business?: Array<BillBusiness>;
    /**
     * 子产品筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Product?: Array<BillProduct>;
    /**
     * 组件名称筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Item?: Array<BillItem>;
    /**
     * 地域筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: Array<BillRegion>;
    /**
     * 实例类型筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: Array<BillInstanceType>;
    /**
     * 计费模式筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: Array<BillPayMode>;
    /**
     * 项目筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Project?: Array<BillProject>;
    /**
     * 标签筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<BillTag>;
    /**
     * 使用者 UIN 筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: Array<BillOwnerUin>;
    /**
     * 操作者 UIN 筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUin?: Array<BillOperateUin>;
    /**
     * 日期筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillDay?: Array<BillDays>;
    /**
     * 交易类型筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: Array<BillActionType>;
    /**
     * 组件类型筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Component?: Array<BillComponent>;
    /**
     * 可用区筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: Array<BillZoneId>;
    /**
     * 分账单元筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllocationTreeNode?: Array<AllocationTreeNode>;
    /**
     * 分账标签键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagKey?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消耗组件明细
 */
export interface CostComponentSet {
    /**
     * 组件类型名称
     */
    ComponentCodeName?: string;
    /**
     * 组件名称
     */
    ItemCodeName?: string;
    /**
     * 刊例价
     */
    SinglePrice?: string;
    /**
     * 刊例价单位
     */
    PriceUnit?: string;
    /**
     * 用量
     */
    UsedAmount?: string;
    /**
     * 用量单位
     */
    UsedAmountUnit?: string;
    /**
     * 原价
     */
    Cost?: string;
    /**
     * 折扣
     */
    Discount?: string;
    /**
     * 折后价
     */
    RealCost?: string;
    /**
     * 代金券支付金额
     */
    VoucherPayAmount?: string;
    /**
     * 现金支付金额
     */
    CashPayAmount?: string;
    /**
     * 赠送金支付金额
     */
    IncentivePayAmount?: string;
}
/**
 * 成本分析表头数据复杂类型
 */
export interface AnalyseHeaderDetail {
    /**
     * 表头日期
     */
    HeadDetail?: Array<AnalyseHeaderTimeDetail>;
    /**
     * 时间
     */
    Name?: string;
    /**
     * 总计
     */
    Total?: string;
}
/**
 * DescribeAllocationMonthOverview请求参数结构体
 */
export interface DescribeAllocationMonthOverviewRequest {
    /**
     * 账单月份，格式为2024-02，不传默认当前月
     */
    Month?: string;
}
/**
 * Json对象
 */
export interface JsonObject {
    /**
     * key值
     */
    Key?: string;
    /**
     * value值
     */
    Value?: string;
}
/**
 * 分账概览明细
 */
export interface AllocationOverviewDetail {
    /**
     * 分账单元唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKey?: string;
    /**
     * 分账单元名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKeyName?: string;
    /**
     * 日期：结算日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillDate?: string;
    /**
     * 归集费用(现金)：基于归集规则直接归集到分账单元的现金
     */
    GatherCashPayAmount?: string;
    /**
     * 归集费用(优惠券)：基于归集规则直接归集到分账单元的资源优惠券
     */
    GatherVoucherPayAmount?: string;
    /**
     * 归集费用(赠送金)：基于归集规则直接归集到分账单元的资源赠送金
     */
    GatherIncentivePayAmount?: string;
    /**
     * 归集费用(分成金)：基于归集规则直接归集到分账单元的资源分成金
     */
    GatherTransferPayAmount?: string;
    /**
     * 分摊费用(现金)：基于分摊规则分摊到分账单元的资源现金
     */
    AllocateCashPayAmount?: string;
    /**
     * 分摊费用(优惠券)：基于分摊规则分摊到分账单元的资源优惠券
     */
    AllocateVoucherPayAmount?: string;
    /**
     * 分摊费用(赠送金)：基于分摊规则分摊到分账单元的资源赠送金
     */
    AllocateIncentivePayAmount?: string;
    /**
     * 分摊费用(分成金)：基于分摊规则分摊到分账单元的资源分成金
     */
    AllocateTransferPayAmount?: string;
    /**
     * 合计费用(现金)：分账单元总费用，归集费用(现金) + 分摊费用(现金)
     */
    TotalCashPayAmount?: string;
    /**
     * 合计费用(优惠券)：分账单元总费用，归集费用(优惠券) + 分摊费用(优惠券)
     */
    TotalVoucherPayAmount?: string;
    /**
     * 合计费用(赠送金)：分账单元总费用，归集费用(赠送金) + 分摊费用(赠送金)
     */
    TotalIncentivePayAmount?: string;
    /**
     * 合计费用(分成金)：分账单元总费用，归集费用(分成金)+分摊费用(分成金)
     */
    TotalTransferPayAmount?: string;
    /**
     * 归集费用(折后总额)：基于归集规则直接归集到分账单元的资源优惠后总价
     */
    GatherRealCost?: string;
    /**
     * 分摊费用(折后总额)：基于分摊规则分摊到分账单元的资源优惠后总价
     */
    AllocateRealCost?: string;
    /**
     * 合计费用(折后总额)：分账单元总费用，归集费用(折后总额) + 分摊费用(折后总额)
     */
    RealTotalCost?: string;
    /**
     * 占比(折后总额)：本分账单元合计费用(折后总额)/合计费用(折后总额)*100%
     */
    Ratio?: string;
    /**
     * 环比(折后总额)：[本月分账单元合计费用(折后总额) - 上月分账单元合计费用(折后总额)] / 上月分账单元合计费用(折后总额) * 100%
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Trend?: string;
    /**
     * 环比箭头
  upward -上升
  downward - 下降
  none - 平稳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TrendType?: string;
}
/**
 * 成本分析支付方式复杂类型
 */
export interface AnalysePayModeDetail {
    /**
     * 计费模式code
     */
    PayMode?: string;
    /**
     * 计费模式Name
     */
    PayModeName?: string;
}
/**
 * 分账趋势图详情数据
 */
export interface AllocationBillTrendDetail {
    /**
     * 账单月份
     */
    Month?: string;
    /**
     * 账单月份展示名称
     */
    Name?: string;
    /**
     * 合计费用(折后总额)：分账单元总费用，归集费用(折后总额) + 分摊费用(折后总额)
     */
    RealTotalCost?: string;
}
/**
 * DescribeBillSummary返回参数结构体
 */
export interface DescribeBillSummaryResponse {
    /**
     * 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可）
     */
    Ready?: number;
    /**
     * 账单多维度汇总消费详情
     */
    SummaryDetail?: Array<SummaryDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 成本分析使用者uin复杂类型
 */
export interface AnalyseOwnerUinDetail {
    /**
     * 使用者uin
     */
    OwnerUin?: string;
}
/**
 * 账单筛选条件对象
 */
export interface Conditions {
    /**
     * 只支持6和12两个值
     */
    TimeRange?: number;
    /**
     * 产品名称代码
     */
    BusinessCode?: string;
    /**
     * 项目ID
     */
    ProjectId?: number;
    /**
     * 地域ID
     */
    RegionId?: number;
    /**
     * 付费模式，可选prePay和postPay
     */
    PayMode?: string;
    /**
     * 资源关键字
     */
    ResourceKeyword?: string;
    /**
     * 产品名称代码
     */
    BusinessCodes?: Array<string>;
    /**
     * 子产品名称代码
     */
    ProductCodes?: Array<string>;
    /**
     * 地域ID
     */
    RegionIds?: Array<number | bigint>;
    /**
     * 项目ID
     */
    ProjectIds?: Array<number | bigint>;
    /**
     * 付费模式，可选prePay和postPay
     */
    PayModes?: Array<string>;
    /**
     * 交易类型
     */
    ActionTypes?: Array<string>;
    /**
     * 是否隐藏0元流水
     */
    HideFreeCost?: number;
    /**
     * 排序规则，可选desc和asc
     */
    OrderByCost?: string;
    /**
     * 交易ID
     */
    BillIds?: Array<string>;
    /**
     * 组件编码
     */
    ComponentCodes?: Array<string>;
    /**
     * 文件ID
     */
    FileIds?: Array<string>;
    /**
     * 文件类型
     */
    FileTypes?: Array<string>;
    /**
     * 状态
     */
    Status?: Array<number | bigint>;
}
/**
 * 成本分返回值复杂类型
 */
export interface AnalyseTimeDetail {
    /**
     * 日期
     */
    Time?: string;
    /**
     * 金额
     */
    Money?: string;
}
/**
 * 使用者 UIN筛选列表
 */
export interface BillOwnerUin {
    /**
     * 使用者 UIN：实际使用资源的账号 ID
     */
    OwnerUin: string;
}
/**
 * 当前资源命中公摊规则信息
 */
export interface AllocationRule {
    /**
     * 公摊规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 公摊规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
}
/**
 * 按地域汇总消费详情
 */
export interface RegionSummaryOverviewItem {
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId: string;
    /**
     * 地域名称：资源所属地域，例如华南地区（广州）
     */
    RegionName: string;
    /**
     * 费用所占百分比，两位小数
     */
    RealTotalCostRatio: string;
    /**
     * 优惠后总价
     */
    RealTotalCost: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
     */
    TransferPayAmount: string;
    /**
     * 账单月份，格式2019-08
     */
    BillMonth: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
     */
    TotalCost: string;
}
/**
 * 消耗按项目汇总详情
 */
export interface ConsumptionProjectSummaryDataItem {
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 折后总价
     */
    RealTotalCost?: string;
    /**
     * 趋势
     */
    Trend?: ConsumptionSummaryTrend;
    /**
     * 产品消耗详情
     */
    Business?: Array<ConsumptionBusinessSummaryDataItem>;
    /**
     * 现金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CashPayAmount?: string;
    /**
     * 赠送金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount?: string;
    /**
     * 代金券
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount?: string;
    /**
     * 分成金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
}
/**
 * 成本分析地域返回复杂类型
 */
export interface AnalyseRegionDetail {
    /**
     * 地域id
     */
    RegionId?: string;
    /**
     * 地域名称
     */
    RegionName?: string;
}
/**
 * 分账账单月概览金额明细
 */
export interface AllocationMonthOverviewDetail {
    /**
     * 归集费用(现金)：基于归集规则直接归集到分账单元的现金
     */
    GatherCashPayAmount?: string;
    /**
     * 归集费用(优惠券)：基于归集规则直接归集到分账单元的资源优惠券
     */
    GatherVoucherPayAmount?: string;
    /**
     * 归集费用(赠送金)：基于归集规则直接归集到分账单元的资源赠送金
     */
    GatherIncentivePayAmount?: string;
    /**
     * 归集费用(分成金)：基于归集规则直接归集到分账单元的资源分成金
     */
    GatherTransferPayAmount?: string;
    /**
     * 分摊费用(现金)：基于分摊规则分摊到分账单元的资源现金
     */
    AllocateCashPayAmount?: string;
    /**
     * 分摊费用(优惠券)：基于分摊规则分摊到分账单元的资源优惠券
     */
    AllocateVoucherPayAmount?: string;
    /**
     * 分摊费用(赠送金)：基于分摊规则分摊到分账单元的资源赠送金
     */
    AllocateIncentivePayAmount?: string;
    /**
     * 分摊费用(分成金)：基于分摊规则分摊到分账单元的资源分成金
     */
    AllocateTransferPayAmount?: string;
    /**
     * 合计费用(现金)：分账单元总费用，归集费用(现金) + 分摊费用(现金)
     */
    TotalCashPayAmount?: string;
    /**
     * 合计费用(优惠券)：分账单元总费用，归集费用(优惠券) + 分摊费用(优惠券)
     */
    TotalVoucherPayAmount?: string;
    /**
     * 合计费用(赠送金)：分账单元总费用，归集费用(赠送金) + 分摊费用(赠送金)
     */
    TotalIncentivePayAmount?: string;
    /**
     * 合计费用(分成金)：分账单元总费用，归集费用(分成金)+分摊费用(分成金)
     */
    TotalTransferPayAmount?: string;
    /**
     * 归集费用(折后总额)：基于归集规则直接归集到分账单元的资源优惠后总价
     */
    GatherRealCost?: string;
    /**
     * 分摊费用(折后总额)：基于分摊规则分摊到分账单元的资源优惠后总价
     */
    AllocateRealCost?: string;
    /**
     * 合计费用(折后总额)：分账单元总费用，归集费用(折后总额) + 分摊费用(折后总额)
     */
    RealTotalCost?: string;
    /**
     * 占比(折后总额)：本分账单元合计费用(折后总额)/合计费用(折后总额)*100%
     */
    Ratio?: string;
    /**
     * 环比(折后总额)：[本月分账单元合计费用(折后总额) - 上月分账单元合计费用(折后总额)] / 上月分账单元合计费用(折后总额) * 100%
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Trend?: string;
    /**
     * 环比箭头
  upward -上升
  downward - 下降
  none - 平稳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TrendType?: string;
}
/**
 * 分账账单明细
 */
export interface AllocationDetail {
    /**
     * 分账单元唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKey?: string;
    /**
     * 分账单元名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKeyName?: string;
    /**
     * 日期：结算日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillDate?: string;
    /**
     * 支付者 UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayerUin?: string;
    /**
     * 使用者 UIN：实际使用资源的账号 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUin?: string;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCode?: string;
    /**
     * 产品名称：用户所采购的各类云产品
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCodeName?: string;
    /**
     * 计费模式编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: string;
    /**
     * 计费模式：资源的计费模式，区分为包年包月和按量计费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayModeName?: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: number;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
    /**
     * 地域名称：资源所属地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionName?: string;
    /**
     * 可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: number;
    /**
     * 可用区：资源所属可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneName?: string;
    /**
     * 资源ID：不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID； 若该产品被分拆，则展示产品分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 实例名称：用户在控制台为资源设置的名称，如未设置默认为空；若该产品被分拆，则展示分拆产品分拆后的分拆项资源别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 实例类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-”
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTypeName?: string;
    /**
     * 分拆项 ID：涉及分拆产品的分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SplitItemId?: string;
    /**
     * 分拆项名称：涉及分拆产品的分拆后的分拆项
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SplitItemName?: string;
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCodeName?: string;
    /**
     * 交易类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: string;
    /**
     * 交易类型：明细交易类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionTypeName?: string;
    /**
     * 订单 ID：包年包月计费模式下订购的订单号
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrderId?: string;
    /**
     * 交易 ID：结算扣费单号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillId?: string;
    /**
     * 扣费时间：结算扣费时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayTime?: string;
    /**
     * 开始使用时间：产品服务开始使用时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeeBeginTime?: string;
    /**
     * 结束使用时间：产品服务结束使用时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeeEndTime?: string;
    /**
     * 组件类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentCode?: string;
    /**
     * 组件类型：用户购买的产品或服务对应的组件大类
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentCodeName?: string;
    /**
     * 组件刊例价：组件的官网原始单价（如客户享受一口价/合同价则默认不展示）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SinglePrice?: string;
    /**
     * 组件单价：组件的折后单价，组件单价 = 刊例价 * 折扣
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContractPrice?: string;
    /**
     * 组件价格单位：组件价格的单位，单位构成：元/用量单位/时长单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SinglePriceUnit?: string;
    /**
     * 组件用量：该组件实际结算用量，组件用量=组件原始用量-抵扣用量（含资源包）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedAmount?: string;
    /**
     * 组件用量单位：组件用量对应的单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedAmountUnit?: string;
    /**
     * 使用时长：资源使用的时长，组件用量=组件原始使用时长-抵扣时长（含资源包）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeSpan?: string;
    /**
     * 时长单位：资源使用时长的单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeUnit?: string;
    /**
     * 备注属性（实例配置）：其他备注信息，如预留实例的预留实例类型和交易类型、CCN 产品的两端地域信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReserveDetail?: string;
    /**
     * 分拆项用量/时长占比：分拆项用量（时长）占比，分拆项用量（时长）/ 拆分前合计用量（时长）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SplitRatio?: string;
    /**
     * 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如客户享受一口价/合同价则默认不展示，退费类场景也默认不展示），指定价模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost?: string;
    /**
     * 预留实例抵扣时长：本产品或服务使用预留实例抵扣的使用时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RITimeSpan?: string;
    /**
     * 预留实例抵扣原价：本产品或服务使用预留实例抵扣的组件原价金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RICost?: string;
    /**
     * 节省计划抵扣原价：节省计划抵扣原价 = 节省计划包抵扣面值 / 节省计划抵扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPCost?: string;
    /**
     * 折扣率：本资源享受的折扣率（如客户享受一口价/合同价则默认不展示，退费场景也默认不展示）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Discount?: string;
    /**
     * 混合折扣率：综合各类折扣抵扣信息后的最终折扣率，混合折扣率=优惠后总价/原价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlendedDiscount?: string;
    /**
     * 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalCost?: string;
    /**
     * 现金账户支出(元)：通过现金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CashPayAmount?: string;
    /**
     * 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount?: string;
    /**
     * 赠送账户支出(元)：使用赠送金支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount?: string;
    /**
     * 分成账户支出(元)：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 分账标签：资源绑定的标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<BillTag>;
    /**
     * 国内国际编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionType?: string;
    /**
     * 国内国际：资源所属区域类型（国内、国际）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionTypeName?: string;
    /**
     * 组件名称编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ItemCode?: string;
    /**
     * 组件名称：用户购买的产品或服务，所包含的具体组件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ItemCodeName?: string;
    /**
     * 关联单据ID：和本笔交易关联单据ID，如退费订单对应的原新购订单等
     */
    AssociatedOrder?: string;
    /**
     * 价格属性：该组件除单价、时长外的其他影响折扣定价的属性信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PriceInfo?: Array<string>;
    /**
     * 计算规则说明：特殊交易类型计费结算的详细计算说明，如退费及变配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Formula?: string;
    /**
     * 计费规则：各产品详细的计费规则官网说明链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FormulaUrl?: string;
    /**
     * 原始用量/时长：组件被资源包抵扣前的原始用量
  （目前仅实时音视频、弹性微服务、云呼叫中心及专属可用区产品支持该信息外显，其他产品尚在接入中）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalMeasure?: string;
    /**
     * 抵扣用量/时长（含资源包）：组件被资源包抵扣的用量
  （目前仅实时音视频、弹性微服务、云呼叫中心及专属可用区产品支持该信息外显，其他产品尚在接入中）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeductedMeasure?: string;
    /**
     * 配置描述：资源配置规格信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentConfig?: string;
    /**
     * 费用归集类型：费用来源类型，分摊、归集、未分配
  0 - 分摊
  1 - 归集
  2 - 未分配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllocationType?: number;
    /**
     * 当前消费项的优惠对象，例如：官网折扣、用户折扣、活动折扣。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountObject?: string;
    /**
     * 当前消费项的优惠类型，例如：折扣、合同价。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountType?: string;
    /**
     * 对优惠类型的补充描述，例如：商务折扣8折，则优惠类型为“折扣”，优惠内容为“0.8”。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountContent?: string;
    /**
     * SPDeduction
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPDeduction?: string;
    /**
     * SPDeduction
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPDeductionRate?: string;
    /**
     * 账单月
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillMonth?: string;
}
/**
 * 代金券相关信息
 */
export interface VoucherInfos {
    /**
     * 代金券拥有者
     */
    OwnerUin?: string;
    /**
     * 券状态：待使用：unUsed，已使用： used，已发货：delivered，已作废： cancel，已过期：overdue
     */
    Status?: string;
    /**
     * 代金券面额（微分）
     */
    NominalValue?: number;
    /**
     * 剩余金额（微分）
     */
    Balance?: number;
    /**
     * 代金券id
     */
    VoucherId?: string;
    /**
     * postPay后付费/prePay预付费/riPay预留实例/空字符串或者'*'表示全部模式
     */
    PayMode?: string;
    /**
     * 付费场景PayMode=postPay时：spotpay-竞价实例,"settle account"-普通后付费PayMode=prePay时：purchase-包年包月新购，renew-包年包月续费（自动续费），modify-包年包月配置变更(变配）PayMode=riPay时：oneOffFee-预留实例预付，hourlyFee-预留实例每小时扣费，*-支持全部付费场景
     */
    PayScene?: string;
    /**
     * 有效期生效时间
     */
    BeginTime?: string;
    /**
     * 有效期截止时间
     */
    EndTime?: string;
    /**
     * 适用商品信息
     */
    ApplicableProducts?: ApplicableProducts;
    /**
     * 不适用商品信息
     */
    ExcludedProducts?: Array<ExcludedProducts>;
    /**
     * 使用说明/批次备注
     */
    PolicyRemark?: string;
    /**
     * 发券时间
     */
    CreateTime?: string;
}
/**
 * DescribeBillSummaryForOrganization请求参数结构体
 */
export interface DescribeBillSummaryForOrganizationRequest {
    /**
     * 账单月份，格式为2023-04
     */
    Month: string;
    /**
     * 账单维度类型，枚举值如下：business、project、region、payMode、tag
     */
    GroupType: string;
    /**
     * 标签键，GroupType=tag获取标签维度账单时传
     */
    TagKey?: Array<string>;
}
/**
 * 分账账单按产品汇总明细
 */
export interface AllocationSummaryByBusiness {
    /**
     * 分账单元唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKey?: string;
    /**
     * 分账单元名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKeyName?: string;
    /**
     * 日期：结算日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillDate?: string;
    /**
     * 归集费用(现金)：基于归集规则直接归集到分账单元的现金
     */
    GatherCashPayAmount?: string;
    /**
     * 归集费用(优惠券)：基于归集规则直接归集到分账单元的资源优惠券
     */
    GatherVoucherPayAmount?: string;
    /**
     * 归集费用(赠送金)：基于归集规则直接归集到分账单元的资源赠送金
     */
    GatherIncentivePayAmount?: string;
    /**
     * 归集费用(分成金)：基于归集规则直接归集到分账单元的资源分成金
     */
    GatherTransferPayAmount?: string;
    /**
     * 分摊费用(现金)：基于分摊规则分摊到分账单元的资源现金
     */
    AllocateCashPayAmount?: string;
    /**
     * 分摊费用(优惠券)：基于分摊规则分摊到分账单元的资源优惠券
     */
    AllocateVoucherPayAmount?: string;
    /**
     * 分摊费用(赠送金)：基于分摊规则分摊到分账单元的资源赠送金
     */
    AllocateIncentivePayAmount?: string;
    /**
     * 分摊费用(分成金)：基于分摊规则分摊到分账单元的资源分成金
     */
    AllocateTransferPayAmount?: string;
    /**
     * 合计费用(现金)：分账单元总费用，归集费用(现金) + 分摊费用(现金)
     */
    TotalCashPayAmount?: string;
    /**
     * 合计费用(优惠券)：分账单元总费用，归集费用(优惠券) + 分摊费用(优惠券)
     */
    TotalVoucherPayAmount?: string;
    /**
     * 合计费用(赠送金)：分账单元总费用，归集费用(赠送金) + 分摊费用(赠送金)
     */
    TotalIncentivePayAmount?: string;
    /**
     * 合计费用(分成金)：分账单元总费用，归集费用(分成金)+分摊费用(分成金)
     */
    TotalTransferPayAmount?: string;
    /**
     * 归集费用(折后总额)：基于归集规则直接归集到分账单元的资源优惠后总价
     */
    GatherRealCost?: string;
    /**
     * 分摊费用(折后总额)：基于分摊规则分摊到分账单元的资源优惠后总价
     */
    AllocateRealCost?: string;
    /**
     * 合计费用(折后总额)：分账单元总费用，归集费用(折后总额) + 分摊费用(折后总额)
     */
    RealTotalCost?: string;
    /**
     * 占比(折后总额)：本分账单元合计费用(折后总额)/合计费用(折后总额)*100%
     */
    Ratio?: string;
    /**
     * 环比(折后总额)：[本月分账单元合计费用(折后总额) - 上月分账单元合计费用(折后总额)] / 上月分账单元合计费用(折后总额) * 100%
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Trend?: string;
    /**
     * 环比箭头
  upward -上升
  downward - 下降
  none - 平稳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TrendType?: string;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCode?: string;
    /**
     * 产品名称：用户所采购的各类云产品
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCodeName?: string;
    /**
     * 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如客户享受一口价/合同价则默认不展示，退费类场景也默认不展示），指定价模式
     */
    TotalCost?: string;
    /**
     * 预留实例抵扣原价：本产品或服务使用预留实例抵扣的组件原价金额
     */
    RICost?: string;
    /**
     * 节省计划抵扣原价：节省计划抵扣原价 = 节省计划包抵扣面值 / 节省计划抵扣率
     */
    SPCost?: string;
    /**
     * 现金账户支出(元)：通过现金账户支付的金额
     */
    CashPayAmount?: string;
    /**
     * 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额
  
     */
    VoucherPayAmount?: string;
    /**
     * 赠送账户支出(元)：使用赠送金支付的金额
     */
    IncentivePayAmount?: string;
    /**
     * 分成账户支出(元)：通过分成金账户支付的金额
     */
    TransferPayAmount?: string;
    /**
     * 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率
     */
    AllocationRealTotalCost?: string;
}
/**
 * 分账账单趋势图
 */
export interface AllocationStat {
    /**
     * 费用平均信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Average?: AllocationAverageData;
}
/**
 * 项目筛选列表
 */
export interface BillProject {
    /**
     * 项目ID
     */
    ProjectId: number;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
     */
    ProjectName: string;
}
/**
 * 按交易类型汇总消费详情
 */
export interface ActionSummaryOverviewItem {
    /**
     * 交易类型编码
     */
    ActionType?: string;
    /**
     * 交易类型：如包年包月新购、包年包月续费、按量计费扣费等类型
     */
    ActionTypeName?: string;
    /**
     * 费用所占百分比，两位小数
     */
    RealTotalCostRatio?: string;
    /**
     * 优惠后总价
     */
    RealTotalCost?: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount?: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount?: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount?: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 账单月份，格式2019-08
     */
    BillMonth?: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
     */
    TotalCost?: string;
}
/**
 * DescribeBillDetailForOrganization请求参数结构体
 */
export interface DescribeBillDetailForOrganizationRequest {
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推
     */
    Offset: number;
    /**
     * 数量，最大值为100
     */
    Limit: number;
    /**
     * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
     * @deprecated
     */
    PeriodType?: string;
    /**
     * 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。最多可拉取近18个月内的数据。
     */
    Month?: string;
    /**
     * 周期开始时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据。最多可拉取18个月内的数据。
     */
    BeginTime?: string;
    /**
     * 周期结束时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据。最多可拉取近18个月内的数据。
     */
    EndTime?: string;
    /**
     * 是否需要访问列表的总记录数，用于前端分页
  1-表示需要， 0-表示不需要
     */
    NeedRecordNum?: number;
    /**
     * 付费模式 prePay(表示包年包月)/postPay(表示按时按量)
     */
    PayMode?: string;
    /**
     * 查询指定资源信息
     */
    ResourceId?: string;
    /**
     * 查询交易类型（请使用交易类型名称入参），入参示例枚举如下：
  包年包月新购
  包年包月续费
  包年包月配置变更
  包年包月退款
  按量计费扣费
  线下项目扣费
  线下产品扣费
  调账扣费
  调账补偿
  按量计费小时结
  按量计费日结
  按量计费月结
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
  包年包月转按量
  保底扣款
  节省计划小时费用
     */
    ActionType?: string;
    /**
     * 项目ID:资源所属项目ID
     */
    ProjectId?: number;
    /**
     * 产品名称代码
  备注：如需获取当月使用过的BusinessCode，请调用API：<a href="https://cloud.tencent.com/document/product/555/35761">获取产品汇总费用分布</a>
     */
    BusinessCode?: string;
    /**
     * 上一次请求返回的上下文信息，翻页查询Month>=2023-05的月份的数据可加快查询速度，数据量10万级别以上的用户建议使用，查询速度可提升2~10倍
     */
    Context?: string;
}
/**
 * DescribeVoucherUsageDetails请求参数结构体
 */
export interface DescribeVoucherUsageDetailsRequest {
    /**
     * 一页多少条数据，默认是20条，最大不超过1000
     */
    Limit: number;
    /**
     * 第多少页，默认是1
     */
    Offset: number;
    /**
     * 代金券id
     */
    VoucherId: string;
    /**
     * 操作人，默认就是用户uin
     */
    Operator?: string;
}
/**
 * DescribeBillResourceSummary请求参数结构体
 */
export interface DescribeBillResourceSummaryRequest {
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推
     */
    Offset: number;
    /**
     * 数量，最大值为1000
     */
    Limit: number;
    /**
     * 月份，格式为yyyy-mm。不能早于开通账单2.0的月份
     */
    Month: string;
    /**
     * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
     * @deprecated
     */
    PeriodType?: string;
    /**
     * 是否需要访问列表的总记录数，用于前端分页
  1-表示需要， 0-表示不需要
     */
    NeedRecordNum?: number;
    /**
     * 查询交易类型（请使用交易类型名称入参），入参示例枚举如下：
  包年包月新购
  包年包月续费
  包年包月配置变更
  包年包月退款
  按量计费扣费
  线下项目扣费
  线下产品扣费
  调账扣费
  调账补偿
  按量计费小时结
  按量计费日结
  按量计费月结
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
  包年包月转按量
  保底扣款
  节省计划小时费用
     */
    ActionType?: string;
    /**
     * 查询指定资源信息
     */
    ResourceId?: string;
    /**
     * 付费模式 prePay/postPay
     */
    PayMode?: string;
    /**
     * 产品名称代码
  备注：如需获取当月使用过的BusinessCode，请调用API：<a href="https://cloud.tencent.com/document/product/555/35761">获取产品汇总费用分布</a>
     */
    BusinessCode?: string;
    /**
     * 支付者的账号 ID（账号 ID 是用户在腾讯云的唯一账号标识），默认查询本账号账单，如集团管理账号需查询成员账号自付的账单，该字段需入参成员账号UIN
     */
    PayerUin?: string;
    /**
     * 分账标签键，用户自定义（支持2021-01以后账单查询）
     */
    TagKey?: string;
    /**
     * 分账标签值，该参数为空表示该标签键下未设置标签值的记录
  （支持2021-01以后账单查询）
     */
    TagValue?: string;
}
/**
 * 由域名和使用明细组成的数据结构
 */
export interface DetailSet {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 使用数据明细
     */
    DetailPoints?: Array<DetailPoint>;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceID?: string;
}
/**
 * 账单明细组件对象
 */
export interface BillDetailComponent {
    /**
     * 组件类型：用户购买的产品或服务对应的组件大类，例如：云服务器 CVM 的组件：CPU、内存等
     */
    ComponentCodeName?: string;
    /**
     * 组件名称：用户购买的产品或服务，所包含的具体组件
     */
    ItemCodeName?: string;
    /**
     * 组件刊例价：组件的官网原始单价（如果客户享受一口价/合同价则默认不展示）
     */
    SinglePrice?: string;
    /**
     * 组件指定价（已废弃）
     * @deprecated
     */
    SpecifiedPrice?: string;
    /**
     * 组件价格单位：组件价格的单位，单位构成：元/用量单位/时长单位
     */
    PriceUnit?: string;
    /**
     * 组件用量：该组件实际结算用量，组件用量 = 组件原始用量 - 抵扣用量（含资源包
     */
    UsedAmount?: string;
    /**
     * 组件用量单位：组件用量对应的单位
     */
    UsedAmountUnit?: string;
    /**
     * 原始用量/时长：组件被资源包抵扣前的原始用量/时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalMeasure?: string;
    /**
     * 抵扣用量/时长（含资源包）：组件被资源包抵扣的用量/时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeductedMeasure?: string;
    /**
     * 使用时长：资源使用的时长
     */
    TimeSpan?: string;
    /**
     * 时长单位：资源使用时长的单位
     */
    TimeUnitName?: string;
    /**
     * 组件原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如果客户享受一口价/合同价则默认不展示，退费类场景也默认不展示）
     */
    Cost?: string;
    /**
     * 折扣率：本资源享受的折扣率（如果客户享受一口价/合同价则默认不展示，退费场景也默认不展示）
     */
    Discount?: string;
    /**
     * 优惠类型
     */
    ReduceType?: string;
    /**
     * 优惠后总价：优惠后总价=（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率
     */
    RealCost?: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount?: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount?: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount?: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 组件类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ItemCode?: string;
    /**
     * 组件名称编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentCode?: string;
    /**
     * 组件单价：组件的折后单价，组件单价 = 刊例价 * 折扣
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContractPrice?: string;
    /**
     * 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。正常的实例展示默认为不展示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 预留实例抵扣的使用时长：本产品或服务使用预留实例抵扣的使用时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiTimeSpan?: string;
    /**
     * 预留实例抵扣组件原价：本产品或服务使用预留实例抵扣的组件原价金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginalCostWithRI?: string;
    /**
     * 节省计划抵扣率：节省计划可用余额额度范围内，节省计划对于此组件打的折扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SPDeductionRate?: string;
    /**
     * 节省计划抵扣金额（已废弃）
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SPDeduction?: string;
    /**
     * 节省计划抵扣组件原价：节省计划抵扣原价=节省计划包抵扣金额/节省计划抵扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OriginalCostWithSP?: string;
    /**
     * 混合折扣率：综合各类折扣抵扣信息后的最终折扣率，混合折扣率 = 优惠后总价 / 组件原价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlendedDiscount?: string;
    /**
     * 配置描述：资源配置规格信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentConfig?: Array<BillDetailComponentConfig>;
}
/**
 * 地域过滤条件
 */
export interface ConditionRegion {
    /**
     * 地域ID
     */
    RegionId?: string;
    /**
     * 地域名称
     */
    RegionName?: string;
}
/**
 * 分账账单趋势图平均值
 */
export interface AllocationAverageData {
    /**
     * 起始月份
     */
    BeginMonth?: string;
    /**
     * 结束月份
     */
    EndMonth?: string;
    /**
     * 合计费用(折后总额)平均值
     */
    RealTotalCost?: string;
}
/**
 * 消耗按资源汇总过滤条件
 */
export interface ConsumptionResourceSummaryConditionValue {
    /**
     * 产品列表
     */
    Business: Array<ConditionBusiness>;
    /**
     * 项目列表
     */
    Project: Array<ConditionProject>;
    /**
     * 地域列表
     */
    Region: Array<ConditionRegion>;
    /**
     * 付费模式列表
     */
    PayMode: Array<ConditionPayMode>;
}
/**
 * DescribeCostDetail请求参数结构体
 */
export interface DescribeCostDetailRequest {
    /**
     * 数量，最大值为100
     */
    Limit: number;
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 周期开始时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通成本分析后，且距今 24 个月内的数据。
     */
    BeginTime?: string;
    /**
     * 周期结束时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为同一月份，暂不支持跨月拉取。可拉取的数据是开通成本分析后，且距今 24 个月内的数据。
     */
    EndTime?: string;
    /**
     * 是否需要访问列表的总记录数，用于前端分页
  1-表示需要， 0-表示不需要
     */
    NeedRecordNum?: number;
    /**
     * 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。不能早于开通成本分析的月份，最多可拉取24个月内的数据。
     */
    Month?: string;
    /**
     * 查询指定产品信息（暂时未开放获取）
     */
    ProductCode?: string;
    /**
     * 付费模式 prePay/postPay
     */
    PayMode?: string;
    /**
     * 查询指定资源信息
     */
    ResourceId?: string;
}
/**
 * DescribeAllocationSummaryByResource请求参数结构体
 */
export interface DescribeAllocationSummaryByResourceRequest {
    /**
     * 数量，最大值为1000
  
     */
    Limit: number;
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，以此类推
     */
    Offset: number;
    /**
     * 账单月份，格式为2024-02，不传默认当前月
  
     */
    Month?: string;
    /**
     * 统计周期，枚举值如下
  month - 月
  day - 日
     */
    PeriodType?: string;
    /**
     * 分账单元唯一标识，用作筛选
     */
    TreeNodeUniqKeys?: Array<string>;
    /**
     * 排序字段，枚举值如下：
  RiTimeSpan - 预留实例抵扣时长
  ExtendPayAmount1 - 预留实例抵扣组件原价
  RealCost - 折后总价
  CashPayAmount - 现金金额
  VoucherPayAmount - 代金券金额
  IncentivePayAmount - 赠送金金额
  TransferPayAmount -分成金金额
  Cost - 组件原价
     */
    Sort?: string;
    /**
     * 排序类型，枚举值如下：
  asc - 升序
  desc - 降序
     */
    SortType?: string;
    /**
     * 日期，用作筛选
     */
    BillDates?: Array<string>;
    /**
     * 产品编码，用作筛选
     */
    BusinessCodes?: Array<string>;
    /**
     * 使用者UIN，用作筛选
     */
    OwnerUins?: Array<string>;
    /**
     * 操作者UIN，用作筛选
     */
    OperateUins?: Array<string>;
    /**
     * 计费模式编码，用作筛选
     */
    PayModes?: Array<string>;
    /**
     * 交易类型编码，用作筛选
     */
    ActionTypes?: Array<string>;
    /**
     * 子产品编码，用作筛选
     */
    ProductCodes?: Array<string>;
    /**
     * 地域ID，用作筛选
     */
    RegionIds?: Array<string>;
    /**
     * 可用区ID，用作筛选
     */
    ZoneIds?: Array<string>;
    /**
     * 实例类型编码，用作筛选
     */
    InstanceTypes?: Array<string>;
    /**
     * 标签，用作筛选
     */
    Tag?: Array<string>;
    /**
     * 模糊搜索：支持标签、资源id、资源别名
     */
    SearchKey?: string;
    /**
     * 项目ID，用作筛选
     */
    ProjectIds?: Array<number | bigint>;
    /**
     * 费用归集类型，枚举值如下：
  0 - 分摊
  1 - 归集
  -1 -  未分配
     */
    AllocationType?: Array<number | bigint>;
}
/**
 * DescribeBillSummaryForOrganization返回参数结构体
 */
export interface DescribeBillSummaryForOrganizationResponse {
    /**
     * 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可）
     */
    Ready?: number;
    /**
     * 账单多维度汇总消费详情
     */
    SummaryDetail?: Array<SummaryDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 操作者 UIN筛选列表
 */
export interface BillOperateUin {
    /**
     * 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID）
     */
    OperateUin: string;
}
/**
 * DescribeTagList请求参数结构体
 */
export interface DescribeTagListRequest {
    /**
     * 数量，最大值为1000
     */
    Limit: number;
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推
     */
    Offset: number;
    /**
     * 分账标签键，用作模糊搜索
     */
    TagKey?: string;
    /**
     * 标签类型，枚举值：0普通标签，1分账标签，用作筛选，不传获取全部标签键
     */
    Status?: number;
    /**
     * 排序方式，枚举值：asc排升序，desc排降序
     */
    OrderType?: string;
}
/**
 * DescribeBillResourceSummaryForOrganization返回参数结构体
 */
export interface DescribeBillResourceSummaryForOrganizationResponse {
    /**
     * 资源汇总列表
     */
    ResourceSummarySet?: Array<BillDistributionResourceSummary>;
    /**
     * 资源汇总列表总数，入参NeedRecordNum为0时不返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCostSummaryByProject请求参数结构体
 */
export interface DescribeCostSummaryByProjectRequest {
    /**
     * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    BeginTime: string;
    /**
     * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    EndTime: string;
    /**
     * 每次获取数据量，最大值为100
     */
    Limit: number;
    /**
     * 偏移量,默认从0开始
     */
    Offset: number;
    /**
     * 查询账单数据的用户UIN
     */
    PayerUin?: string;
    /**
     * 是否需要返回记录数量，0不需要，1需要，默认不需要
     */
    NeedRecordNum?: number;
}
/**
 * DescribeCostSummaryByResource请求参数结构体
 */
export interface DescribeCostSummaryByResourceRequest {
    /**
     * 目前必须和EndTime相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    BeginTime: string;
    /**
     * 目前必须和BeginTime为相同月份，不支持跨月查询，且查询结果是整月数据，例如 BeginTime为2018-09，EndTime 为 2018-09，查询结果是 2018 年 9 月数据。
     */
    EndTime: string;
    /**
     * 每次获取数据量，最大值为100
     */
    Limit: number;
    /**
     * 偏移量,默认从0开始
     */
    Offset: number;
    /**
     * 查询账单数据的用户UIN
     */
    PayerUin?: string;
    /**
     * 是否需要返回记录数量，0不需要，1需要，默认不需要
     */
    NeedRecordNum?: number;
    /**
     * 是否需要返回过滤条件，0不需要，1需要，默认不需要
     */
    NeedConditionValue?: number;
    /**
     * 过滤条件，只支持ResourceKeyword(资源关键字，支持资源id及资源名称模糊查询)，ProjectIds（项目id），RegionIds(地域id)，PayModes(付费模式，可选prePay和postPay)，HideFreeCost（是否隐藏0元流水，可选0和1），OrderByCost（按费用排序规则，可选desc和asc）
     */
    Conditions?: Conditions;
}
/**
 * CreateAllocationTag请求参数结构体
 */
export interface CreateAllocationTagRequest {
    /**
     * 用户分账标签键
     */
    TagKey: Array<string>;
}
/**
 * 不适用商品信息
 */
export interface ExcludedProducts {
    /**
     * 不适用商品名称
     */
    GoodsName?: string;
    /**
     * postPay后付费/prePay预付费/riPay预留实例/空字符串或者"*"表示全部模式。
     */
    PayMode?: string;
}
/**
 * 按计费模式汇总消费详情
 */
export interface PayModeSummaryOverviewItem {
    /**
     * 计费模式编码
     */
    PayMode: string;
    /**
     * 计费模式：区分为包年包月和按量计费
     */
    PayModeName: string;
    /**
     * 费用所占百分比，两位小数
     */
    RealTotalCostRatio: string;
    /**
     * 优惠后总价
     */
    RealTotalCost: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
     */
    TransferPayAmount: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
     */
    TotalCost: string;
    /**
     * 按交易类型汇总消费详情
     */
    Detail: Array<ActionSummaryOverviewItem>;
}
/**
 * 产品筛选列表
 */
export interface BillBusiness {
    /**
     * 产品编码
  
     */
    BusinessCode: string;
    /**
     * 产品名称：用户所采购的各类云产品
     */
    BusinessCodeName: string;
}
/**
 * 购买商品信息
 */
export interface UsageDetails {
    /**
     * 商品名
     */
    ProductName?: string;
    /**
     * 商品细节
     */
    SubProductName?: string;
    /**
     * 产品码
     */
    ProductCode?: string;
    /**
     * 子产品码
     */
    SubProductCode?: string;
    /**
     * 计费项码
     */
    BillingItemCode?: string;
    /**
     * 计费细项码
     */
    SubBillingItemCode?: string;
    /**
     * 产品英文名
     */
    ProductEnName?: string;
    /**
     * 子产品英文名
     */
    SubProductEnName?: string;
    /**
     * 结算周期
     */
    CalcUnit?: string;
    /**
     * payMode为prepay 且 payScene为common的情况下存在
     */
    Action?: string;
}
/**
 * 实例类型筛选列表
 */
export interface BillInstanceType {
    /**
     * 实例类型编码
     */
    InstanceType: string;
    /**
     * 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-”
     */
    InstanceTypeName: string;
}
/**
 * 成本分析产品返回复杂类型
 */
export interface AnalyseBusinessDetail {
    /**
     * 产品码code
     */
    BusinessCode?: string;
    /**
     * 产品名称
     */
    BusinessCodeName?: string;
}
/**
 * 成本分析查询条件
 */
export interface AnalyseConditions {
    /**
     * 产品名称代码
     */
    BusinessCodes?: string;
    /**
     * 子产品名称代码
     */
    ProductCodes?: string;
    /**
     * 组件类型代码
     */
    ComponentCode?: string;
    /**
     * 可用区ID：资源所属可用区ID
     */
    ZoneIds?: string;
    /**
     * 地域ID:资源所属地域ID
     */
    RegionIds?: string;
    /**
     * 项目ID:资源所属项目ID
     */
    ProjectIds?: string;
    /**
     * 计费模式 prePay(表示包年包月)/postPay(表示按量计费)
     */
    PayModes?: string;
    /**
     * 交易类型，查询交易类型（请使用交易类型code入参）
     */
    ActionTypes?: string;
    /**
     * 分账标签键
     */
    Tags?: string;
    /**
     * 费用类型，查询费用类型（请使用费用类型code入参)入参枚举如下：
  cashPayAmount:现金
  incentivePayAmount:赠送金
  voucherPayAmount:优惠券
  tax:税金
  costBeforeTax:税前价
     */
    FeeType?: string;
    /**
     * 查询成本分析数据的用户UIN
     */
    PayerUins?: string;
    /**
     * 使用资源的用户UIN
     */
    OwnerUins?: string;
    /**
     * 消耗类型，查询消耗类型（请使用消耗类型code入参）
     */
    ConsumptionTypes?: string;
}
/**
 * 消耗明细数据类型
 */
export interface CostDetail {
    /**
     * 支付者uin
     */
    PayerUin?: string;
    /**
     * 产品名称
     */
    BusinessCodeName?: string;
    /**
     * 子产品名称
     */
    ProductCodeName?: string;
    /**
     * 计费模式名称
     */
    PayModeName?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 区域名称
     */
    RegionName?: string;
    /**
     * 地区名称
     */
    ZoneName?: string;
    /**
     * 资源id
     */
    ResourceId?: string;
    /**
     * 资源名称
     */
    ResourceName?: string;
    /**
     * 类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionTypeName?: string;
    /**
     * 订单id
     */
    OrderId?: string;
    /**
     * 交易id
     */
    BillId?: string;
    /**
     * 费用开始时间
     */
    FeeBeginTime?: string;
    /**
     * 费用结束时间
     */
    FeeEndTime?: string;
    /**
     * 组件明细
     */
    ComponentSet?: Array<CostComponentSet>;
    /**
     * 子产品名称代码
     */
    ProductCode?: string;
}
/**
 * DescribeBillSummaryByProduct返回参数结构体
 */
export interface DescribeBillSummaryByProductResponse {
    /**
     * 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可）
     */
    Ready?: number;
    /**
     * 总花费详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SummaryTotal?: BusinessSummaryTotal;
    /**
     * 各产品花费分布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SummaryOverview?: Array<BusinessSummaryOverviewItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBillSummaryByRegion返回参数结构体
 */
export interface DescribeBillSummaryByRegionResponse {
    /**
     * 数据是否准备好，0准备中，1已就绪。（Ready=0，为当前UIN首次进行初始化出账，预计需要5~10分钟出账，请于10分钟后重试即可）
     */
    Ready?: number;
    /**
     * 各地域花费分布详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SummaryOverview?: Array<RegionSummaryOverviewItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAllocationTag返回参数结构体
 */
export interface CreateAllocationTagResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBillDownloadUrl返回参数结构体
 */
export interface DescribeBillDownloadUrlResponse {
    /**
     * 账单文件是否准备就绪，0文件生成中，1文件已生成
     */
    Ready?: number;
    /**
     * 账单文件下载链接，有效时长为一天
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消耗按资源汇总详情
 */
export interface ConsumptionResourceSummaryDataItem {
    /**
     * 资源ID
     */
    ResourceId?: string;
    /**
     * 资源名称
     */
    ResourceName?: string;
    /**
     * 折后总价
     */
    RealTotalCost?: string;
    /**
     * 现金花费
     */
    CashPayAmount?: string;
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
    /**
     * 地域ID
     */
    RegionId?: string;
    /**
     * 地域名称
     */
    RegionName?: string;
    /**
     * 付费模式
     */
    PayMode?: string;
    /**
     * 付费模式名称
     */
    PayModeName?: string;
    /**
     * 产品名称代码
     */
    BusinessCode?: string;
    /**
     * 产品名称
     */
    BusinessCodeName?: string;
    /**
     * 消耗类型
     */
    ConsumptionTypeName?: string;
    /**
     * 折前价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealCost?: string;
    /**
     * 费用起始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeeBeginTime?: string;
    /**
     * 费用结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeeEndTime?: string;
    /**
     * 天数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DayDiff?: string;
    /**
     * 每日消耗
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DailyTotalCost?: string;
    /**
     * 订单号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrderId?: string;
    /**
     * 代金券
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount?: string;
    /**
     * 赠送金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount?: string;
    /**
     * 分成金
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 支付者UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayerUin?: string;
    /**
     * 使用者UIN：实际使用资源的账号 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUin?: string;
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCodeName?: string;
    /**
     * 地域类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionType?: string;
    /**
     * 地域类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionTypeName?: string;
    /**
     * 扩展字段1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Extend1?: string;
    /**
     * 扩展字段2
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Extend2?: string;
    /**
     * 扩展字段3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Extend3?: string;
    /**
     * 扩展字段4
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Extend4?: string;
    /**
     * 扩展字段5
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Extend5?: string;
    /**
     * 实例类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 实例类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTypeName?: string;
    /**
     * 扣费时间：结算扣费时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayTime?: string;
    /**
     * 可用区：资源所属可用区，如广州三区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneName?: string;
    /**
     * 配置描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentConfig?: string;
    /**
     * 标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: string;
}
/**
 * DescribeAccountBalance请求参数结构体
 */
export declare type DescribeAccountBalanceRequest = null;
/**
 * DescribeBillDetail请求参数结构体
 */
export interface DescribeBillDetailRequest {
    /**
     * 分页偏移量，Offset=0表示第一页，如果Limit=100，则Offset=100表示第二页，Offset=200表示第三页，依次类推
     */
    Offset: number;
    /**
     * 数量，最大值为300
     */
    Limit: number;
    /**
     * 周期类型，byUsedTime按计费周期/byPayTime按扣费周期。需要与费用中心该月份账单的周期保持一致。您可前往[账单概览](https://console.cloud.tencent.com/expense/bill/overview)页面顶部查看确认您的账单统计周期类型。
     * @deprecated
     */
    PeriodType?: string;
    /**
     * 月份，格式为yyyy-mm，Month和BeginTime&EndTime必传一个，如果有传BeginTime&EndTime则Month字段无效。最多可拉取近18个月内的数据。
     */
    Month?: string;
    /**
     * 周期开始时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据。最多可拉取18个月内的数据。
     */
    BeginTime?: string;
    /**
     * 周期结束时间，格式为yyyy-mm-dd hh:ii:ss，Month和BeginTime&EndTime必传一个，如果有该字段则Month字段无效。BeginTime和EndTime必须一起传，且为相同月份，不支持跨月查询，查询结果是整月数据。最多可拉取近18个月内的数据。
     */
    EndTime?: string;
    /**
     * 是否需要访问列表的总记录数，用于前端分页
  1-表示需要， 0-表示不需要
     */
    NeedRecordNum?: number;
    /**
     * 已废弃参数，未开放
     */
    ProductCode?: string;
    /**
     * 付费模式 prePay(表示包年包月)/postPay(表示按时按量)
     */
    PayMode?: string;
    /**
     * 查询指定资源信息
     */
    ResourceId?: string;
    /**
     * 查询交易类型（请使用交易类型名称入参），入参示例枚举如下：
  包年包月新购
  包年包月续费
  包年包月配置变更
  包年包月退款
  按量计费扣费
  线下项目扣费
  线下产品扣费
  调账扣费
  调账补偿
  按量计费小时结
  按量计费日结
  按量计费月结
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
  包年包月转按量
  保底扣款
  节省计划小时费用
     */
    ActionType?: string;
    /**
     * 项目ID:资源所属项目ID
     */
    ProjectId?: number;
    /**
     * 产品名称代码
  备注：如需获取当月使用过的BusinessCode，请调用API：<a href="https://cloud.tencent.com/document/product/555/35761">获取产品汇总费用分布</a>
     */
    BusinessCode?: string;
    /**
     * 上一次请求返回的上下文信息，翻页查询Month>=2023-05的月份的数据可加快查询速度，数据量10万级别以上的用户建议使用，查询速度可提升2~10倍
     */
    Context?: string;
    /**
     * 支付者的账号 ID（账号 ID 是用户在腾讯云的唯一账号标识），默认查询本账号账单，如集团管理账号需查询成员账号自付的账单，该字段需入参成员账号UIN
     */
    PayerUin?: string;
}
/**
 * DescribeSavingPlanResourceInfo请求参数结构体
 */
export interface DescribeSavingPlanResourceInfoRequest {
    /**
     * 数量，最大值为100
     */
    Limit: number;
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 购买开始时间，格式yyyy-MM-dd
     */
    CreateStartDate?: string;
    /**
     * 购买结束时间，格式yyyy-MM-dd
     */
    CreateEndDate?: string;
}
/**
 * 成本分析可用区复杂类型
 */
export interface AnalyseZoneDetail {
    /**
     * 可用区id
     */
    ZoneId?: string;
    /**
     * 可用区Name
     */
    ZoneName?: string;
}
/**
 * DescribeVoucherInfo返回参数结构体
 */
export interface DescribeVoucherInfoResponse {
    /**
     * 券总数
     */
    TotalCount?: number;
    /**
     * 总余额（微分）
     */
    TotalBalance?: number;
    /**
     * 代金券相关信息
     */
    VoucherInfos?: Array<VoucherInfos>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 明细账单关联单据信息
 */
export interface BillDetailAssociatedOrder {
    /**
     * 新购订单
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrepayPurchase?: string;
    /**
     * 续费订单
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrepayRenew?: string;
    /**
     * 升配订单
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrepayModifyUp?: string;
    /**
     * 冲销订单
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReverseOrder?: string;
    /**
     * 优惠调整后订单
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewOrder?: string;
    /**
     * 优惠调整前订单
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Original?: string;
}
/**
 * DescribeBillList返回参数结构体
 */
export interface DescribeBillListResponse {
    /**
     * 收支明细列表
     */
    TransactionList?: Array<BillTransactionInfo>;
    /**
     * 总条数
     */
    Total?: number;
    /**
     * 退费总额，单位（分）
     */
    ReturnAmount?: number;
    /**
     * 充值总额，单位（分）
     */
    RechargeAmount?: number;
    /**
     * 冻结总额，单位（分）
     */
    BlockAmount?: number;
    /**
     * 解冻总额，单位（分）
     */
    UnblockAmount?: number;
    /**
     * 扣费总额，单位（分）
     */
    DeductAmount?: number;
    /**
     * 资金转入总额，单位（分）
     */
    AgentInAmount?: number;
    /**
     * 垫付充值总额，单位（分）
     */
    AdvanceRechargeAmount?: number;
    /**
     * 提现扣减总额，单位（分）
     */
    WithdrawAmount?: number;
    /**
     * 资金转出总额，单位（分）
     */
    AgentOutAmount?: number;
    /**
     * 还垫付总额，单位（分）
     */
    AdvancePayAmount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAccountBalance返回参数结构体
 */
export interface DescribeAccountBalanceResponse {
    /**
     * 接口做过变更,为兼容老接口,本字段与RealBalance相同,为当前真实可用余额,单位 分
     */
    Balance?: number;
    /**
     * 查询的用户Uin
     */
    Uin?: number;
    /**
     * 当前真实可用余额,单位 分
     */
    RealBalance?: number;
    /**
     * 现金账户余额,单位 分
     */
    CashAccountBalance?: number;
    /**
     * 收益转入账户余额,单位 分
     */
    IncomeIntoAccountBalance?: number;
    /**
     * 赠送账户余额,单位 分
     */
    PresentAccountBalance?: number;
    /**
     * 冻结金额,单位 分
     */
    FreezeAmount?: number;
    /**
     * 欠费金额,单位 分
     */
    OweAmount?: number;
    /**
     * 是否允许欠费消费
     * @deprecated
     */
    IsAllowArrears?: boolean;
    /**
     * 是否限制信用额度
     * @deprecated
     */
    IsCreditLimited?: boolean;
    /**
     * 信用额度,单位 分
     */
    CreditAmount?: number;
    /**
     * 可用信用额度,单位 分
     */
    CreditBalance?: number;
    /**
     * 真实可用信用额度,单位 分
     */
    RealCreditBalance?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAllocationBillDetail返回参数结构体
 */
export interface DescribeAllocationBillDetailResponse {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordNum?: number;
    /**
     * 分账账单概览金额汇总
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: AllocationOverviewTotal;
    /**
     * 分账账单明细
     */
    Detail?: Array<AllocationDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 按产品汇总产品详情
 */
export interface BusinessSummaryOverviewItem {
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCode?: string;
    /**
     * 产品名称：用户所采购的各类云产品，例如：云服务器 CVM
     */
    BusinessCodeName?: string;
    /**
     * 费用所占百分比，两位小数
     */
    RealTotalCostRatio?: string;
    /**
     * 优惠后总价
     */
    RealTotalCost?: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount?: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount?: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount?: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
     */
    TransferPayAmount?: string;
    /**
     * 账单月份，格式2019-08
     */
    BillMonth?: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
     */
    TotalCost?: string;
}
/**
 * 标签筛选列表
 */
export interface BillTag {
    /**
     * 标签键
     */
    TagKey: string;
    /**
     * 标签值
     */
    TagValue: string;
}
/**
 * DescribeAllocateConditions返回参数结构体
 */
export interface DescribeAllocateConditionsResponse {
    /**
     * 产品筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Business?: Array<BillBusinessLink>;
    /**
     * 子产品筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Product?: Array<BillProduct>;
    /**
     * 组件名称筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Item?: Array<BillItem>;
    /**
     * 地域筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: Array<BillRegion>;
    /**
     * 实例类型筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: Array<BillInstanceType>;
    /**
     * 计费模式筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: Array<BillPayMode>;
    /**
     * 项目筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Project?: Array<BillProject>;
    /**
     * 标签筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<BillTag>;
    /**
     * 使用者 UIN 筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: Array<BillOwnerUin>;
    /**
     * 操作者 UIN 筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUin?: Array<BillOperateUin>;
    /**
     * 交易类型筛选列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: Array<BillActionType>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDosageDetailList请求参数结构体
 */
export interface DescribeDosageDetailListRequest {
    /**
     * 用量起始时间，如：2023-02-01
     */
    StartTime: string;
    /**
     * 用量截止时间，如：2023-02-28
     */
    EndTime: string;
    /**
     * 产品编码，已支持查询的产品如下：
  p_ccc（云联络中心）
  p_rav（实时音视频）
  p_pstn（号码保护）
  p_smh（智能媒资托管）
  p_coding_devops（CODING DevOps）
  p_dsa（全球IP应用加速）
     */
    ProductCode: string;
    /**
     * 数据偏移量（从0开始）
     */
    Offset: number;
    /**
     * 单次数据量（最大3000）
     */
    Limit: number;
    /**
     * 用量统计类型：用量明细的数据统计汇总周期类型，包括minute-按5分钟汇总、hour-按小时汇总、day-按天汇总、month-按月汇总、comm-其他，默认查询所有类型明细，目前各产品已支持的统计类型如下：
  p_ccc（云联络中心）：comm、day
  p_rav（实时音视频）：minute、day
  p_pstn（号码保护）：comm
  p_smh（智能媒资托管）：day
  p_coding_devops（CODING DevOps）：comm、day
  p_dsa（全球IP应用加速）：minute
     */
    DosageType?: string;
}
/**
 * 组件类型筛选列表
 */
export interface BillComponent {
    /**
     * 组件类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentCode: string;
    /**
     * 组件类型：用户购买的产品或服务对应的组件大类
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentCodeName: string;
}
/**
 * DescribeVoucherInfo请求参数结构体
 */
export interface DescribeVoucherInfoRequest {
    /**
     * 一页多少条数据，默认是20条，最大不超过1000
     */
    Limit: number;
    /**
     * 第多少页，默认是1
     */
    Offset: number;
    /**
     * 券状态：待使用：unUsed，已使用： used，已发货：delivered，已作废： cancel，已过期：overdue
     */
    Status?: string;
    /**
     * 代金券id
     */
    VoucherId?: string;
    /**
     * 代金券订单id
     */
    CodeId?: string;
    /**
     * 商品码
     */
    ProductCode?: string;
    /**
     * 活动id
     */
    ActivityId?: string;
    /**
     * 代金券名称
     */
    VoucherName?: string;
    /**
     * 发放开始时间,例：2021-01-01
     */
    TimeFrom?: string;
    /**
     * 发放结束时间，例：2021-01-01
     */
    TimeTo?: string;
    /**
     * 指定排序字段：BeginTime开始时间、EndTime到期时间、CreateTime创建时间
     */
    SortField?: string;
    /**
     * 指定升序降序：desc、asc
     */
    SortOrder?: string;
    /**
     * 付费模式，postPay后付费/prePay预付费/riPay预留实例/""或者"*"表示全部模式，如果payMode为""或"*"，那么productCode与subProductCode必须传空
     */
    PayMode?: string;
    /**
     * 付费场景PayMode=postPay时：spotpay-竞价实例,"settle account"-普通后付费PayMode=prePay时：purchase-包年包月新购，renew-包年包月续费（自动续费），modify-包年包月配置变更(变配）PayMode=riPay时：oneOffFee-预留实例预付，hourlyFee-预留实例每小时扣费，*-支持全部付费场景
     */
    PayScene?: string;
    /**
     * 操作人，默认就是用户uin
     */
    Operator?: string;
    /**
     * 代金券主类型 has_price 为有价现金券 no_price 为无价代金券
     */
    VoucherMainType?: string;
    /**
     * 代金券副类型 discount 为折扣券 deduct 为抵扣券
     */
    VoucherSubType?: string;
    /**
     * 券有效时间开始时间
     */
    StartTimeFrom?: string;
    /**
     * 券有效时间结束时间
     */
    StartTimeTo?: string;
    /**
     * 券失效时间开始时间
     */
    EndTimeFrom?: string;
    /**
     * 券失效时间结束时间
     */
    EndTimeTo?: string;
    /**
     * 发券时间开始时间
     */
    CreateTimeFrom?: string;
    /**
     * 发券时间结束时间
     */
    CreateTimeTo?: string;
}
/**
 * 交易类型筛选列表
 */
export interface BillActionType {
    /**
     * 交易类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType: string;
    /**
     * 交易类型：明细交易类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionTypeName: string;
}
/**
 * 资源归集汇总
 */
export interface GatherResourceSummary {
    /**
     * 支付者 UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayerUin?: string;
    /**
     * 使用者 UIN：实际使用资源的账号 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: string;
    /**
     * 操作者 UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的ID或者角色 ID）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUin?: string;
    /**
     * 实例类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。常规实例默认展示“-”
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTypeName?: string;
    /**
     * 资源ID：不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID； 若该产品被分拆，则展示产品分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 实例名称：用户在控制台为资源设置的名称，如未设置默认为空；若该产品被分拆，则展示分拆产品分拆后的分拆项资源别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 分账单元唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKey?: string;
    /**
     * 分账单元名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TreeNodeUniqKeyName?: string;
    /**
     * 资源命中公摊规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: number;
    /**
     * 资源命中公摊规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCode?: string;
    /**
     * 产品名称：用户所采购的各类云产品
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessCodeName?: string;
    /**
     * 组件名称编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ItemCode?: string;
    /**
     * 组件名称：用户购买的产品或服务，所包含的具体组件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ItemCodeName?: string;
    /**
     * 地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
    /**
     * 地域名称：资源所属地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionName?: string;
    /**
     * 分账标签：资源绑定的标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: Array<BillTag>;
    /**
     * 优惠后总价：优惠后总价 =（原价 - 预留实例抵扣原价 - 节省计划抵扣原价）* 折扣率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealTotalCost?: string;
    /**
     * 现金账户支出(元)：通过现金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CashPayAmount?: string;
    /**
     * 代金券支出(元)：使用各类优惠券（如代金券、现金券等）支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoucherPayAmount?: string;
    /**
     * 赠送账户支出(元)：使用赠送金支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IncentivePayAmount?: string;
    /**
     * 分成账户支出(元)：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 费用归集类型：费用来源类型，分摊、归集、未分配
  0 - 分摊
  1 - 归集
  -1 - 未分配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllocationType?: number;
    /**
     * 当前归属单元信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BelongTreeNodeUniqKey?: AllocationTreeNode;
    /**
     * 当前资源命中公摊规则信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BelongRule?: AllocationRule;
    /**
     * 其它归属单元信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OtherTreeNodeUniqKeys?: Array<AllocationTreeNode>;
    /**
     * 其他命中规则信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OtherRules?: Array<AllocationRule>;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId?: number;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectName?: string;
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCodeName?: string;
    /**
     * 计费模式编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: string;
    /**
     * 计费模式：资源的计费模式，区分为包年包月和按量计费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayModeName?: string;
    /**
     * 交易类型编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: string;
    /**
     * 交易类型：明细交易类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionTypeName?: string;
    /**
     * 分拆项 ID：涉及分拆产品的分拆后的分拆项 ID，如 COS 桶 ID，CDN 域名
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SplitItemId?: string;
    /**
     * 分拆项名称：涉及分拆产品的分拆后的分拆项
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    SplitItemName?: string;
}
/**
 * DescribeSavingPlanResourceInfo返回参数结构体
 */
export interface DescribeSavingPlanResourceInfoResponse {
    /**
     * 记录数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDealsByCond请求参数结构体
 */
export interface DescribeDealsByCondRequest {
    /**
     * 开始时间 2016-01-01 00:00:00
     */
    StartTime: string;
    /**
     * 结束时间 2016-02-01 00:00:00 建议跨度不超过3个月
     */
    EndTime: string;
    /**
     * 一页多少条数据，默认是20条，最大不超过1000
     */
    Limit: number;
    /**
     * 第多少页，从0开始，默认是0
     */
    Offset?: number;
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
    Status?: number;
    /**
     * 子订单号
     */
    OrderId?: string;
    /**
     * 大订单号
     */
    BigDealId?: string;
    /**
     * 资源id
     */
    ResourceId?: string;
}
/**
 * DescribeAllocationSummaryByResource返回参数结构体
 */
export interface DescribeAllocationSummaryByResourceResponse {
    /**
     * 总条数
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordNum?: number;
    /**
     * 分账账单概览金额汇总
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: AllocationOverviewTotal;
    /**
     * 分账账单按资源汇总明细
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Detail?: Array<AllocationSummaryByResource>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDosageCosDetailByDate返回参数结构体
 */
export interface DescribeDosageCosDetailByDateResponse {
    /**
     * 用量数组
     */
    DetailSets?: Array<CosDetailSets>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 组件名称筛选列表
 */
export interface BillItem {
    /**
     * 组件名称编码
     */
    ItemCode: string;
    /**
     * 组件名称：用户购买的产品或服务，所包含的具体组件
     */
    ItemCodeName: string;
}
/**
 * 按项目汇总消费详情
 */
export interface ProjectSummaryOverviewItem {
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
     */
    ProjectName: string;
    /**
     * 费用所占百分比，两位小数
     */
    RealTotalCostRatio: string;
    /**
     * 优惠后总价
     */
    RealTotalCost: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
     */
    TransferPayAmount: string;
    /**
     * 账单月份，格式2019-08
     */
    BillMonth: string;
    /**
     * 原价，单位为元。TotalCost字段自账单3.0（即2021-05）之后开始生效，账单3.0之前返回"-"。合同价的情况下，TotalCost字段与官网价格存在差异，也返回“-”。
     */
    TotalCost: string;
}
/**
 * 子产品筛选列表
 */
export interface BillProduct {
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCodeName: string;
}
/**
 * 项目过滤条件
 */
export interface ConditionProject {
    /**
     * 项目ID
     */
    ProjectId?: string;
    /**
     * 项目名称
     */
    ProjectName?: string;
}
/**
 * DescribeTagList返回参数结构体
 */
export interface DescribeTagListResponse {
    /**
     * 总记录数
     */
    RecordNum?: number;
    /**
     * 标签信息
     */
    Data?: Array<TagDataInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * cos产品用量明细返回数据结构
 */
export interface CosDetailSets {
    /**
     * 存储桶名称
     */
    BucketName: string;
    /**
     * 用量开始时间
     */
    DosageBeginTime: string;
    /**
     * 用量结束时间
     */
    DosageEndTime: string;
    /**
     * 子产品名称
     */
    SubProductCodeName: string;
    /**
     * 计费项名称
     */
    BillingItemCodeName: string;
    /**
     * 用量
     */
    DosageValue: string;
    /**
     * 单位
     */
    Unit: string;
}
/**
 * 计量标准接入类产品支持API接口获取用量明细返回数据结构
 */
export interface DescribeDosageDetail {
    /**
     * 日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Date?: string;
    /**
     * 账号 ID 是用户在腾讯云的唯一账号标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: string;
    /**
     * 用量统计类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DosageType?: string;
    /**
     * 产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode?: string;
    /**
     * 子产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubProductCode?: string;
    /**
     * 组件类型编码
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillingItemCode?: string;
    /**
     * 组件编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubBillingItemCode?: string;
    /**
     * 产品名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCodeName?: string;
    /**
     * 子产品名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubProductCodeName?: string;
    /**
     * 组件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillingItemCodeName?: string;
    /**
     * 组件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubBillingItemCodeName?: string;
    /**
     * 用量单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DosageUnit?: string;
    /**
     * 用量起始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DosageBeginTime?: string;
    /**
     * 用量截止时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DosageEndTime?: string;
    /**
     * 标准用量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DosageValue?: number;
    /**
     * 抵扣用量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeductValue?: number;
    /**
     * 抵扣余量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemainValue?: number;
    /**
     * sdkAppId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SdkAppId?: string;
    /**
     * 其他信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttrStr?: Array<JsonObject>;
    /**
     * 用量模板名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SheetName?: Array<string>;
}
/**
 * 计费模式筛选列表
 */
export interface BillPayMode {
    /**
     * 计费模式编码
     */
    PayMode: string;
    /**
     * 计费模式：资源的计费模式，区分为包年包月和按量计费
     */
    PayModeName: string;
}
/**
 * DescribeAllocationTrendByMonth返回参数结构体
 */
export interface DescribeAllocationTrendByMonthResponse {
    /**
     * 当月费用信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Current?: AllocationBillTrendDetail;
    /**
     * 之前月份费用信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Previous?: Array<AllocationBillTrendDetail>;
    /**
     * 费用统计信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Stat?: AllocationStat;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 成本分析过滤框复杂类型
 */
export interface AnalyseConditionDetail {
    /**
     * 产品
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Business?: Array<AnalyseBusinessDetail>;
    /**
     * 项目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Project?: Array<AnalyseProjectDetail>;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: Array<AnalyseRegionDetail>;
    /**
     * 计费模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: Array<AnalysePayModeDetail>;
    /**
     * 交易类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionType?: Array<AnalyseActionTypeDetail>;
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: Array<AnalyseZoneDetail>;
    /**
     * 资源所有者Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin?: Array<AnalyseOwnerUinDetail>;
    /**
     * 费用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Amount?: Array<AnalyseAmountDetail>;
}
/**
 * 账单资源汇总数据对象
 */
export interface BillResourceSummary {
    /**
     * 产品名称：用户所采购的各类云产品，例如：云服务器 CVM
     */
    BusinessCodeName?: string;
    /**
     * 子产品名称：用户采购的具体产品细分类型，例如：云服务器 CVM-标准型 S1
     */
    ProductCodeName?: string;
    /**
     * 计费模式：资源的计费模式，区分为包年包月和按量计费
     */
    PayModeName?: string;
    /**
     * 项目名称：资源归属的项目，用户在控制台给资源自主分配项目，未分配则是默认项目
     */
    ProjectName?: string;
    /**
     * 地域：资源所属地域，如华南地区（广州）
     */
    RegionName?: string;
    /**
     * 可用区：资源所属可用区，如广州三区
     */
    ZoneName?: string;
    /**
     * 资源 ID：账单中出账对象 ID，不同产品因资源形态不同，资源内容不完全相同，如云服务器 CVM 为对应的实例 ID
     */
    ResourceId?: string;
    /**
     * 资源别名：用户在控制台为资源设置的名称，如果未设置，则默认为空
     */
    ResourceName?: string;
    /**
     * 交易类型：如包年包月新购、包年包月续费、按量计费扣费等类型
     */
    ActionTypeName?: string;
    /**
     * 订单ID：包年包月计费模式下订购的订单号
     */
    OrderId?: string;
    /**
     * 扣费时间：结算扣费时间
     */
    PayTime?: string;
    /**
     * 开始使用时间：产品服务开始使用时间
     */
    FeeBeginTime?: string;
    /**
     * 结束使用时间：产品服务结束使用时间
     */
    FeeEndTime?: string;
    /**
     * 配置描述：该资源下的计费项名称和用量合并展示，仅在资源账单体现
     */
    ConfigDesc?: string;
    /**
     * 扩展字段1：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField1?: string;
    /**
     * 扩展字段2：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField2?: string;
    /**
     * 原价：原价 = 组件刊例价 * 组件用量 * 使用时长（如果客户享受一口价/合同价则默认不展示，退费类场景也默认不展示）
     */
    TotalCost?: string;
    /**
     * 折扣率：本资源享受的折扣率（如果客户享受一口价/合同价则默认不展示，退费场景也默认不展示）
     */
    Discount?: string;
    /**
     * 优惠类型
     */
    ReduceType?: string;
    /**
     * 优惠后总价
     */
    RealTotalCost?: string;
    /**
     * 优惠券支出：使用各类优惠券（如代金券、现金券等）支付的金额
     */
    VoucherPayAmount?: string;
    /**
     * 现金账户支出：通过现金账户支付的金额
     */
    CashPayAmount?: string;
    /**
     * 赠送账户支出：使用赠送金支付的金额
     */
    IncentivePayAmount?: string;
    /**
     * 分成金账户支出：通过分成金账户支付的金额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransferPayAmount?: string;
    /**
     * 扩展字段3：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField3?: string;
    /**
     * 扩展字段4：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField4?: string;
    /**
     * 扩展字段5：产品对应的扩展属性信息，仅在资源账单体现
     */
    ExtendField5?: string;
    /**
     * 标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<BillTagInfo>;
    /**
     * 支付者UIN：支付者的账号 ID，账号 ID 是用户在腾讯云的唯一账号标识
     */
    PayerUin?: string;
    /**
     * 使用者UIN：实际使用资源的账号 ID
     */
    OwnerUin?: string;
    /**
     * 操作者UIN：操作者账号 ID（预付费资源下单或后付费操作开通资源账号的 ID 或者角色 ID ）
     */
    OperateUin?: string;
    /**
     * 产品编码
     */
    BusinessCode?: string;
    /**
     * 子产品编码
     */
    ProductCode?: string;
    /**
     * 地域ID
     */
    RegionId?: number;
    /**
     * 实例类型：购买的产品服务对应的实例类型，包括资源包、RI、SP、竞价实例。正常的实例展示默认为不展示
     */
    InstanceType?: string;
    /**
     * 预留实例抵扣组件原价：本产品或服务使用预留实例抵扣的组件原价金额
     */
    OriginalCostWithRI?: string;
    /**
     * 节省计划抵扣金额（已废弃）
     * @deprecated
     */
    SPDeduction?: string;
    /**
     * 节省计划抵扣组件原价：节省计划抵扣原价=节省计划包抵扣金额/节省计划抵扣率
     */
    OriginalCostWithSP?: string;
    /**
     * 账单归属月
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillMonth?: string;
}
/**
 * 成本分析header表头数据
 */
export interface AnalyseHeaderTimeDetail {
    /**
     * 日期
     */
    Name?: string;
}
/**
 * DescribeCostSummaryByRegion返回参数结构体
 */
export interface DescribeCostSummaryByRegionResponse {
    /**
     * 数据是否准备好，0未准备好，1准备好
     */
    Ready?: number;
    /**
     * 消耗详情
     */
    Total?: ConsumptionSummaryTotal;
    /**
     * 消耗按地域汇总详情
     */
    Data?: Array<ConsumptionRegionSummaryDataItem>;
    /**
     * 记录数量，NeedRecordNum为0时返回null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}

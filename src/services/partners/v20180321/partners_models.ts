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
 * 描述待审核代客信息
 */
export interface AgentClientElem {
  /**
   * 代理商账号ID
   */
  Uin: string

  /**
   * 代客账号ID
   */
  ClientUin: string

  /**
   * 代客申请时间戳
   */
  ApplyTime: number

  /**
   * 代客类型，可能值为a/b/c
   */
  ClientFlag: string

  /**
   * 代客邮箱，打码显示
   */
  Mail: string

  /**
   * 代客手机，打码显示
   */
  Phone: string

  /**
   * 0表示不欠费，1表示欠费
   */
  HasOverdueBill: number

  /**
   * 1:待代理商审核;2:待腾讯云审核4:待腾讯云渠道审批
   */
  Status: number

  /**
      * 业务员ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesUin: string

  /**
      * 业务员姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesName: string

  /**
      * 客户名称，此字段和控制台返回一致。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientName: string
}

/**
 * DescribeAgentDealsCache请求参数结构体
 */
export interface DescribeAgentDealsCacheRequest {
  /**
   * 偏移量
   */
  Offset: number

  /**
   * 限制数目
   */
  Limit: number

  /**
   * 下单时间范围起始点
   */
  CreatTimeRangeStart?: string

  /**
   * 下单时间范围终止点
   */
  CreatTimeRangeEnd?: string

  /**
   * 0:下单时间降序；其他：下单时间升序
   */
  Order?: number

  /**
   * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
   */
  Status?: number

  /**
   * 下单人账号ID列表
   */
  OwnerUins?: Array<string>

  /**
   * 订单号列表
   */
  DealNames?: Array<string>

  /**
   * 支付方式，0：自付；1：代付
   */
  PayerMode?: number
}

/**
 * DescribeSalesmans请求参数结构体
 */
export interface DescribeSalesmansRequest {
  /**
   * 偏移量
   */
  Offset: number

  /**
   * 限制数目
   */
  Limit: number

  /**
   * 业务员姓名(模糊查询)
   */
  SalesName?: string

  /**
   * 业务员ID
   */
  SalesUin?: string

  /**
   * ASC/DESC， 不区分大小写，按创建通过时间排序
   */
  OrderDirection?: string
}

/**
 * DescribeAgentAuditedClients请求参数结构体
 */
export interface DescribeAgentAuditedClientsRequest {
  /**
   * 客户账号ID
   */
  ClientUin?: string

  /**
   * 客户名称。由于涉及隐私，名称打码显示，故名称仅支持打码后的模糊搜索
   */
  ClientName?: string

  /**
   * 客户类型，a/b，类型定义参考代理商相关政策文档
   */
  ClientFlag?: string

  /**
   * ASC/DESC， 不区分大小写，按审核通过时间排序
   */
  OrderDirection?: string

  /**
   * 客户账号ID列表
   */
  ClientUins?: Array<string>

  /**
   * 是否欠费。0：不欠费；1：欠费
   */
  HasOverdueBill?: number

  /**
   * 客户备注
   */
  ClientRemark?: string

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制数目
   */
  Limit?: number

  /**
   * 客户类型：可以为new(新拓)/assign(指定)/old(存量已关联)/old_newchecking(存量-新关联考核中)/old_newnotpass(存量-新关联未达标)/direct(直销)/direct_newopp(直销(新商机))/空
   */
  ClientType?: string

  /**
   * 项目类型：可以为self(自拓项目)/platform(合作项目)/repeat(复算项目  )/空
   */
  ProjectType?: string

  /**
   * 业务员ID
   */
  SalesUin?: string

  /**
   * 业务员姓名（模糊查询）
   */
  SalesName?: string
}

/**
 * RemovePayRelationForClient请求参数结构体
 */
export interface RemovePayRelationForClientRequest {
  /**
   * 客户账号ID
   */
  ClientUin: string
}

/**
 * AgentPayDeals请求参数结构体
 */
export interface AgentPayDealsRequest {
  /**
   * 订单所有者uin
   */
  OwnerUin: string

  /**
   * 代付标志，1：代付；0：自付
   */
  AgentPay: number

  /**
   * 订单号数组
   */
  DealNames: Array<string>
}

/**
 * DescribeAgentClientGrade返回参数结构体
 */
export interface DescribeAgentClientGradeResponse {
  /**
   * 审核状态：0待审核，1，已审核
   */
  AuditStatus: number

  /**
   * 实名认证状态：0，未实名认证，1实名认证
   */
  AuthState: number

  /**
   * 客户级别
   */
  ClientGrade: string

  /**
   * 客户类型：1，个人；2，企业；3，其他
   */
  ClientType: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentDealsByCache返回参数结构体
 */
export interface DescribeAgentDealsByCacheResponse {
  /**
   * 订单数组
   */
  AgentDealSet: Array<AgentDealNewElem>

  /**
   * 符合条件的订单总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返佣信息定义
 */
export interface RebateInfoElem {
  /**
   * 代理商账号ID
   */
  Uin: string

  /**
   * 返佣月份，如2018-02
   */
  RebateMonth: string

  /**
   * 返佣金额，单位分
   */
  Amt: number

  /**
   * 月度业绩，单位分
   */
  MonthSales: number

  /**
   * 季度业绩，单位分
   */
  QuarterSales: number

  /**
   * NORMAL(正常)/HAS_OVERDUE_BILL(欠费)/NO_CONTRACT(缺合同)
   */
  ExceptionFlag: string
}

/**
 * DescribeClientBalance返回参数结构体
 */
export interface DescribeClientBalanceResponse {
  /**
   * 账户可用余额，单位分 （可用余额 = 现金余额 - 冻结金额）
   */
  Balance: number

  /**
   * 账户现金余额，单位分
   */
  Cash: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentSelfPayDeals返回参数结构体
 */
export interface DescribeAgentSelfPayDealsResponse {
  /**
   * 订单数组
   */
  AgentPayDealSet: Array<AgentDealElem>

  /**
   * 符合条件的订单总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentPayDealsV2返回参数结构体
 */
export interface DescribeAgentPayDealsV2Response {
  /**
   * 订单数组
   */
  AgentPayDealSet: Array<AgentDealNewElem>

  /**
   * 符合条件的订单总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AgentTransferMoney请求参数结构体
 */
export interface AgentTransferMoneyRequest {
  /**
   * 客户账号ID
   */
  ClientUin: string

  /**
   * 转账金额，单位分
   */
  Amount: number
}

/**
 * DescribeClientBalance请求参数结构体
 */
export interface DescribeClientBalanceRequest {
  /**
   * 客户(代客)账号ID
   */
  ClientUin: string
}

/**
 * DescribeAgentPayDealsV2请求参数结构体
 */
export interface DescribeAgentPayDealsV2Request {
  /**
   * 偏移量
   */
  Offset: number

  /**
   * 限制数目
   */
  Limit: number

  /**
   * 下单时间范围起始点(不传时会默认查15天内订单，传值时需要传15天内的起始时间)
   */
  CreatTimeRangeStart?: string

  /**
   * 下单时间范围终止点
   */
  CreatTimeRangeEnd?: string

  /**
   * 0:下单时间降序；其他：下单时间升序
   */
  Order?: number

  /**
   * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
   */
  Status?: number

  /**
   * 下单人账号ID列表
   */
  OwnerUins?: Array<string>

  /**
   * 子订单号列表
   */
  DealNames?: Array<string>

  /**
   * 大订单号列表
   */
  BigDealIds?: Array<string>
}

/**
 * 产品详情
 */
export interface ProductInfoElem {
  /**
   * 产品属性
   */
  Name: string

  /**
   * 产品属性值
   */
  Value: string
}

/**
 * 解绑客户信息
 */
export interface UnbindClientElem {
  /**
   * 解绑账号ID
   */
  Uin: string

  /**
   * 名称
   */
  Name: string

  /**
   * 状态：0:审核中；1：已解绑；2：已撤销 3：关联撤销 4: 已驳回
   */
  Status: number

  /**
      * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplyTime: string

  /**
      * 解绑/撤销时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionTime: string
}

/**
 * RemovePayRelationForClient返回参数结构体
 */
export interface RemovePayRelationForClientResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRebateInfos请求参数结构体
 */
export interface DescribeRebateInfosRequest {
  /**
   * 返佣月份，如2018-02
   */
  RebateMonth?: string

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制数目
   */
  Limit?: number
}

/**
 * CreatePayRelationForClient返回参数结构体
 */
export interface CreatePayRelationForClientResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentAuditedClients返回参数结构体
 */
export interface DescribeAgentAuditedClientsResponse {
  /**
   * 已审核代客列表
   */
  AgentClientSet: Array<AgentAuditedClient>

  /**
   * 符合条件的代客总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentBills返回参数结构体
 */
export interface DescribeAgentBillsResponse {
  /**
   * 符合查询条件列表总数量
   */
  TotalCount: number

  /**
   * 业务明细列表
   */
  AgentBillSet: Array<AgentBillElem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentPayDeals请求参数结构体
 */
export interface DescribeAgentPayDealsRequest {
  /**
   * 偏移量
   */
  Offset: number

  /**
   * 限制数目
   */
  Limit: number

  /**
   * 下单时间范围起始点(不传时会默认查15天内订单，传值时需要传15天内的起始时间)
   */
  CreatTimeRangeStart?: string

  /**
   * 下单时间范围终止点
   */
  CreatTimeRangeEnd?: string

  /**
   * 0:下单时间降序；其他：下单时间升序
   */
  Order?: number

  /**
   * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
   */
  Status?: number

  /**
   * 下单人账号ID列表
   */
  OwnerUins?: Array<string>

  /**
   * 订单号列表
   */
  DealNames?: Array<string>
}

/**
 * AuditApplyClient请求参数结构体
 */
export interface AuditApplyClientRequest {
  /**
   * 待审核客户账号ID
   */
  ClientUin: string

  /**
   * 审核结果，可能的取值：accept/reject
   */
  AuditResult: string

  /**
   * 申请理由，B类客户审核通过时必须填写申请理由
   */
  Note: string
}

/**
 * ModifyClientRemark返回参数结构体
 */
export interface ModifyClientRemarkResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentClients返回参数结构体
 */
export interface DescribeAgentClientsResponse {
  /**
   * 待审核代客列表
   */
  AgentClientSet: Array<AgentClientElem>

  /**
   * 符合条件的代客总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述代理商代付的订单信息
 */
export interface AgentDealNewElem {
  /**
   * 订单自增 ID【请勿依赖该字段作为唯一标识】
   */
  DealId: string

  /**
   * 订单号【订单唯一键】
   */
  DealName: string

  /**
   * 商品类型 ID
   */
  GoodsCategoryId: string

  /**
   * 订单所有者
   */
  OwnerUin: string

  /**
      * 订单所有者对应 appId
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppId: string

  /**
      * 商品数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsNum: string

  /**
      * 价格详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsPrice: DealGoodsPriceNewElem

  /**
      * 下单人
注意：此字段可能返回 null，表示取不到有效值。
      */
  Creater: string

  /**
      * 下单时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatTime: string

  /**
      * 支付结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayEndTime: string

  /**
      * 扣费流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BillId: string

  /**
      * 支付人
注意：此字段可能返回 null，表示取不到有效值。
      */
  Payer: string

  /**
      * 订单状态，中文描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealStatus: string

  /**
      * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsName: string

  /**
      * 客户备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientRemark: string

  /**
      * 订单操作类型，purchase（新购），renew（续费），modify（配置变更）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionType: string

  /**
      * 代金券抵扣金额，单位分
注意：此字段可能返回 null，表示取不到有效值。
      */
  VoucherDecline: string

  /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BigDealId: string

  /**
      * 客户类型（new：自拓；old：官网；assign：指派；direct：直销；direct_newopp：直销(新商机)）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientType: string

  /**
      * 项目类型（self：自拓；repeat：直销；platform：官网合作）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectType: string

  /**
      * 业务员账号ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesUin: string

  /**
      * 支付方式，0：自付；1：代付
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayerMode: string

  /**
      * 活动ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityId: string

  /**
      * 订单过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  OverdueTime: string

  /**
      * 产品详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductInfo: Array<ProductInfoElem>

  /**
      * 付款方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  PaymentMethod: string

  /**
      * 订单更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * DescribeAgentClients请求参数结构体
 */
export interface DescribeAgentClientsRequest {
  /**
   * 客户账号ID
   */
  ClientUin?: string

  /**
   * 客户名称。由于涉及隐私，名称打码显示，故名称仅支持打码后的模糊搜索
   */
  ClientName?: string

  /**
   * 客户类型，a/b，类型定义参考代理商相关政策文档
   */
  ClientFlag?: string

  /**
   * ASC/DESC， 不区分大小写，按申请时间排序
   */
  OrderDirection?: string

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制数目
   */
  Limit?: number

  /**
   * 业务员ID
   */
  SalesUin?: string

  /**
   * 业务员姓名（模糊查询）
   */
  SalesName?: string
}

/**
 * DescribeAgentSelfPayDealsV2请求参数结构体
 */
export interface DescribeAgentSelfPayDealsV2Request {
  /**
   * 下单人账号ID
   */
  OwnerUin: string

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 限制数目
   */
  Limit: number

  /**
   * 下单时间范围起始点(不传时会默认查15天内订单，传值时需要传15天内的起始时间)
   */
  CreatTimeRangeStart?: string

  /**
   * 下单时间范围终止点
   */
  CreatTimeRangeEnd?: string

  /**
   * 0:下单时间降序；其他：下单时间升序
   */
  Order?: number

  /**
   * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
   */
  Status?: number

  /**
   * 子订单号列表
   */
  DealNames?: Array<string>

  /**
   * 大订单号列表
   */
  BigDealIds?: Array<string>
}

/**
 * DescribeSalesmans返回参数结构体
 */
export interface DescribeSalesmansResponse {
  /**
   * 业务员列表
   */
  AgentSalesmanSet: Array<AgentSalesmanElem>

  /**
   * 符合条件的代客总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 已审核代客信息
 */
export interface AgentAuditedClient {
  /**
   * 代理商账号ID
   */
  Uin: string

  /**
   * 代客账号ID
   */
  ClientUin: string

  /**
   * 代客审核通过时间戳
   */
  AgentTime: string

  /**
   * 代客类型，可能值为a/b/c
   */
  ClientFlag: string

  /**
   * 代客备注
   */
  ClientRemark: string

  /**
   * 代客名称（首选实名认证名称）
   */
  ClientName: string

  /**
   * 认证类型, 0：个人，1：企业；其他：未认证
   */
  AuthType: string

  /**
   * 代客APPID
   */
  AppId: string

  /**
   * 上月消费金额
   */
  LastMonthAmt: number

  /**
   * 本月消费金额
   */
  ThisMonthAmt: number

  /**
   * 是否欠费,0：不欠费；1：欠费
   */
  HasOverdueBill: number

  /**
   * 客户类型：可以为new(自拓)/assign(指派)/old(官网)/direct(直销)/direct_newopp(直销(新商机))/空
   */
  ClientType: string

  /**
   * 项目类型：可以为self(自拓项目)/platform(合作项目)/repeat(复算项目  )/空
   */
  ProjectType: string

  /**
      * 业务员ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesUin: string

  /**
      * 业务员姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesName: string

  /**
      * 代客邮箱
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mail: string
}

/**
 * DescribeUnbindClientList请求参数结构体
 */
export interface DescribeUnbindClientListRequest {
  /**
   * 解绑状态：0:所有,1:审核中,2已解绑
   */
  Status: number

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 限制数目
   */
  Limit: number

  /**
   * 解绑账号ID
   */
  UnbindUin?: string

  /**
   * 解绑申请时间范围起始点
   */
  ApplyTimeStart?: string

  /**
   * 解绑申请时间范围终止点
   */
  ApplyTimeEnd?: string

  /**
   * 对申请时间的升序降序，值：asc，desc
   */
  OrderDirection?: string
}

/**
 * DescribeAgentPayDeals返回参数结构体
 */
export interface DescribeAgentPayDealsResponse {
  /**
   * 订单数组
   */
  AgentPayDealSet: Array<AgentDealElem>

  /**
   * 符合条件的订单总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 订单价格详情
 */
export interface DealGoodsPriceElem {
  /**
   * 实付金额（单位：分）
   */
  RealTotalCost: number

  /**
   * 订单实际金额（不含折扣，单位：分）
   */
  OriginalTotalCost: number
}

/**
 * DescribeAgentDealsByCache请求参数结构体
 */
export interface DescribeAgentDealsByCacheRequest {
  /**
   * 偏移量
   */
  Offset: number

  /**
   * 限制数目
   */
  Limit: number

  /**
   * 下单时间范围起始点
   */
  CreatTimeRangeStart?: string

  /**
   * 下单时间范围终止点
   */
  CreatTimeRangeEnd?: string

  /**
   * 0:下单时间降序；其他：下单时间升序
   */
  Order?: number

  /**
   * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
   */
  Status?: number

  /**
   * 下单人账号ID列表
   */
  OwnerUins?: Array<string>

  /**
   * 子订单号列表
   */
  DealNames?: Array<string>

  /**
   * 大订单号列表
   */
  BigDealIds?: Array<string>

  /**
   * 支付方式，0：自付；1：代付
   */
  PayerMode?: number
}

/**
 * DescribeAgentSelfPayDeals请求参数结构体
 */
export interface DescribeAgentSelfPayDealsRequest {
  /**
   * 下单人账号ID
   */
  OwnerUin: string

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 限制数目
   */
  Limit: number

  /**
   * 下单时间范围起始点(不传时会默认查15天内订单，传值时需要传15天内的起始时间)
   */
  CreatTimeRangeStart?: string

  /**
   * 下单时间范围终止点
   */
  CreatTimeRangeEnd?: string

  /**
   * 0:下单时间降序；其他：下单时间升序
   */
  Order?: number

  /**
   * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
   */
  Status?: number

  /**
   * 订单号列表
   */
  DealNames?: Array<string>
}

/**
 * ModifyClientRemark请求参数结构体
 */
export interface ModifyClientRemarkRequest {
  /**
   * 客户备注名称
   */
  ClientRemark: string

  /**
   * 客户账号ID
   */
  ClientUin: string
}

/**
 * CreatePayRelationForClient请求参数结构体
 */
export interface CreatePayRelationForClientRequest {
  /**
   * 客户账号ID
   */
  ClientUin: string
}

/**
 * AgentTransferMoney返回参数结构体
 */
export interface AgentTransferMoneyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUnbindClientList返回参数结构体
 */
export interface DescribeUnbindClientListResponse {
  /**
   * 符合条件的解绑客户数量
   */
  TotalCount: number

  /**
   * 符合条件的解绑客户列表
   */
  UnbindClientList: Array<UnbindClientElem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentSelfPayDealsV2返回参数结构体
 */
export interface DescribeAgentSelfPayDealsV2Response {
  /**
   * 订单数组
   */
  AgentPayDealSet: Array<AgentDealNewElem>

  /**
   * 符合条件的订单总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 业务信息定义
 */
export interface AgentBillElem {
  /**
   * 代理商账号ID
   */
  Uin: string

  /**
   * 订单号，仅对预付费账单有意义
   */
  OrderId: string

  /**
   * 代客账号ID
   */
  ClientUin: string

  /**
   * 代客备注名称
   */
  ClientRemark: string

  /**
   * 支付时间
   */
  PayTime: string

  /**
   * 云产品名称
   */
  GoodsType: string

  /**
   * 预付费/后付费
   */
  PayMode: string

  /**
   * 支付月份
   */
  SettleMonth: string

  /**
   * 支付金额，单位分
   */
  Amt: number

  /**
   * agentpay：代付；selfpay：自付
   */
  PayerMode: string

  /**
      * 客户类型：可以为new(自拓)/assign(指定)/old(官网)/direct(直销)/direct_newopp(直销(新商机))/空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientType: string

  /**
      * 项目类型：可以为self(自拓项目)/platform(合作项目)/repeat(复算项目  )/空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectType: string

  /**
      * 活动ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityId: string
}

/**
 * AuditApplyClient返回参数结构体
 */
export interface AuditApplyClientResponse {
  /**
   * 代理商账号ID
   */
  Uin: string

  /**
   * 客户账号ID
   */
  ClientUin: string

  /**
   * 审核结果，包括accept/reject/qcloudaudit（腾讯云审核）
   */
  AuditResult: string

  /**
   * 关联时间对应的时间戳
   */
  AgentTime: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentDealsCache返回参数结构体
 */
export interface DescribeAgentDealsCacheResponse {
  /**
   * 订单数组
   */
  AgentDealSet: Array<AgentDealElem>

  /**
   * 符合条件的订单总数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentBills请求参数结构体
 */
export interface DescribeAgentBillsRequest {
  /**
   * 支付月份，如2018-02
   */
  SettleMonth: string

  /**
   * 客户账号ID
   */
  ClientUin?: string

  /**
   * 支付方式，prepay/postpay
   */
  PayMode?: string

  /**
   * 预付费订单号
   */
  OrderId?: string

  /**
   * 客户备注名称
   */
  ClientRemark?: string

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制数目
   */
  Limit?: number
}

/**
 * AgentPayDeals返回参数结构体
 */
export interface AgentPayDealsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述代理商代付的订单信息
 */
export interface AgentDealElem {
  /**
   * 订单自增 ID【请勿依赖该字段作为唯一标识】
   */
  DealId: string

  /**
   * 订单号【订单唯一键】
   */
  DealName: string

  /**
   * 商品类型 ID
   */
  GoodsCategoryId: string

  /**
   * 订单所有者
   */
  OwnerUin: string

  /**
      * 订单所有者对应 appId
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppId: string

  /**
      * 商品数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsNum: string

  /**
      * 价格详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsPrice: DealGoodsPriceElem

  /**
      * 下单人
注意：此字段可能返回 null，表示取不到有效值。
      */
  Creater: string

  /**
      * 下单时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatTime: string

  /**
      * 支付结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayEndTime: string

  /**
      * 扣费流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BillId: string

  /**
      * 支付人
注意：此字段可能返回 null，表示取不到有效值。
      */
  Payer: string

  /**
      * 订单状态，中文描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealStatus: string

  /**
      * 订单的状态(1：未支付;2：已支付;3：发货中;4：已发货;5：发货失败;6：已退款;7：已关单;8：订单过期;9：订单已失效;10：产品已失效;11：代付拒绝;12：支付中)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 产品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsName: string

  /**
      * 客户备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientRemark: string

  /**
      * 订单操作类型，purchase（新购），renew（续费），modify（配置变更）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActionType: string

  /**
      * 代金券抵扣金额，单位分
注意：此字段可能返回 null，表示取不到有效值。
      */
  VoucherDecline: string

  /**
      * 大订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BigDealId: string

  /**
      * 客户类型（new：自拓；old：官网；assign：指派；direct：直销；direct_newopp：直销(新商机)）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClientType: string

  /**
      * 项目类型（self：自拓；repeat：直销；platform：官网合作）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectType: string

  /**
      * 业务员账号ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesUin: string

  /**
      * 支付方式，0：自付；1：代付
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayerMode: string

  /**
      * 活动ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityId: string

  /**
      * 订单过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  OverdueTime: string

  /**
      * 产品详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProductInfo: Array<ProductInfoElem>

  /**
      * 付款方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  PaymentMethod: string

  /**
      * 订单更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string
}

/**
 * 代理商业务员信息
 */
export interface AgentSalesmanElem {
  /**
   * 代理商账号ID
   */
  Uin: string

  /**
   * 业务员ID
   */
  SalesUin: string

  /**
   * 业务员姓名
   */
  SalesName: string

  /**
   * 业务员创建时间
   */
  CreateTime: string
}

/**
 * DescribeClientBalanceNew请求参数结构体
 */
export interface DescribeClientBalanceNewRequest {
  /**
   * 客户(代客)账号ID
   */
  ClientUin: string
}

/**
 * 订单价格详情
 */
export interface DealGoodsPriceNewElem {
  /**
   * 实付金额（单位：分）
   */
  RealTotalCost: number

  /**
   * 原始金额（不含折扣，单位：分）
   */
  OriginalTotalCost: number
}

/**
 * DescribeRebateInfos返回参数结构体
 */
export interface DescribeRebateInfosResponse {
  /**
   * 返佣信息列表
   */
  RebateInfoSet: Array<RebateInfoElem>

  /**
   * 符合查询条件返佣信息数目
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentClientGrade请求参数结构体
 */
export interface DescribeAgentClientGradeRequest {
  /**
   * 代客uin
   */
  ClientUin: string
}

/**
 * DescribeClientBalanceNew返回参数结构体
 */
export interface DescribeClientBalanceNewResponse {
  /**
   * 账户可用余额，单位分 （可用余额 = 现金余额 + 赠送金余额 - 欠费金额 - 冻结金额）
   */
  Balance: number

  /**
   * 账户现金余额，单位分
   */
  Cash: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
 * QueryInvoice返回参数结构体
 */
export interface QueryInvoiceResponse {
  /**
   * 发票查询结果
   */
  Result: QueryInvoiceResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 付款人查询数据
 */
export interface QueryPayerinfoData {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 付款人ID
   */
  PayerId: string

  /**
   * 审核状态
   */
  Status: string

  /**
      * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailReason: string

  /**
   * 付款人类型
   */
  PayerType: string

  /**
   * 付款人姓名
   */
  PayerName: string

  /**
   * 付款人证件类型
   */
  PayerIdType: string

  /**
   * 付款人证件号
   */
  PayerIdNo: string

  /**
      * 付款人联系电话
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayerContactNumber: string

  /**
      * 付款人联系邮箱
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayerEmailAddress: string

  /**
   * 付款人常驻国家或地区编码
   */
  PayerCountryCode: string

  /**
      * 付款人联系名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayerContactName: string
}

/**
 * 查询订单接口的出参，订单列表
 */
export interface QueryOrderOutOrderList {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 支付金额，单位：分
   */
  Amt: number

  /**
   * 用户Id
   */
  UserId: string

  /**
   * 现金支付金额
   */
  CashAmt: string

  /**
   * 发货标识，由业务在调用聚鑫下单 接口的时候下发
   */
  Metadata: string

  /**
   * 支付时间unix时间戳
   */
  PayTime: string

  /**
   * 抵扣券金额
   */
  CouponAmt: string

  /**
   * 下单时间unix时间戳
   */
  OrderTime: string

  /**
   * 物品id
   */
  ProductId: string

  /**
   * 高速场景信息
   */
  SceneInfo: string

  /**
      * 当前订单的订单状态 
0：初始状态，获取聚鑫交易订单成功；  
1：拉起聚鑫支付页面成功，用户未 支付；
2：用户支付成功，正在发货；
3：用户支付成功，发货失败；
4：用户支付成功，发货成功；
5：聚鑫支付页面正在失效中；
6：聚鑫支付页面已经失效；
      */
  OrderState: string

  /**
      * 支付渠道：wechat：微信支付;
qqwallet：QQ钱包;
bank：网银
      */
  Channel: string

  /**
   * 是否曾退款
   */
  RefundFlag: string

  /**
   * 务支付订单号
   */
  OutTradeNo: string

  /**
   * 商品名称
   */
  ProductName: string

  /**
   * 支付回调时间，unix时间戳
   */
  CallBackTime: string

  /**
   * ISO 货币代码，CNY
   */
  CurrencyType: string

  /**
   * 微校场景账户Id
   */
  AcctSubAppId: string

  /**
   * 调用下单接口获取的聚鑫交易订单
   */
  TransactionId: string

  /**
   * 聚鑫内部渠道订单号
   */
  ChannelOrderId: string

  /**
   * 调用下单接口传进来的 SubOutTradeNoList
   */
  SubOrderList: Array<QueryOrderOutSubOrderList>

  /**
   * 支付机构订单号
   */
  ChannelExternalOrderId: string
}

/**
 * ApplyTrade请求参数结构体
 */
export interface ApplyTradeRequest {
  /**
   * 贸易材料流水号
   */
  TradeFileId: string

  /**
   * 贸易材料订单号
   */
  TradeOrderId: string

  /**
   * 付款人ID
   */
  PayerId: string

  /**
   * 收款人姓名
   */
  PayeeName: string

  /**
   * 收款人常驻国家或地区编码 (见常见问题)
   */
  PayeeCountryCode: string

  /**
   * 贸易类型 (GOODS: 商品, SERVICE: 服务)
   */
  TradeType: string

  /**
   * 交易时间 (格式: yyyyMMdd)
   */
  TradeTime: string

  /**
   * 交易币种
   */
  TradeCurrency: string

  /**
   * 交易金额
   */
  TradeAmount: number

  /**
      * 交易名称 
(TradeType=GOODS时填写物品名称，可填写多个，格式无要求；
TradeType=SERVICE时填写贸易类别，见常见问题-贸易类别)
      */
  TradeName: string

  /**
   * 交易数量 (TradeType=GOODS 填写物品数量, TradeType=SERVICE填写服务次数)
   */
  TradeCount: number

  /**
   * 货贸承运人 (TradeType=GOODS 必填)
   */
  GoodsCarrier?: string

  /**
   * 服贸交易细节 (TradeType=GOODS 必填, 见常见问题-交易细节)
   */
  ServiceDetail?: string

  /**
   * 服贸服务时间 (TradeType=GOODS 必填, 见常见问题-服务时间)
   */
  ServiceTime?: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * QueryOutwardOrder返回参数结构体
 */
export interface QueryOutwardOrderResponse {
  /**
   * 查询汇出结果
   */
  Result: QueryOutwardOrderResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryExchangeRate返回参数结构体
 */
export interface QueryExchangeRateResponse {
  /**
   * 查询汇率结果
   */
  Result: QueryExchangerateResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadTaxPayment请求参数结构体
 */
export interface UploadTaxPaymentRequest {
  /**
   * 平台渠道
   */
  Channel: number

  /**
   * 完税ID
   */
  TaxId: string

  /**
   * 完税列表下载地址
   */
  FileUrl: string
}

/**
 * QueryBatchPaymentResult请求参数结构体
 */
export interface QueryBatchPaymentResultRequest {
  /**
   * 批次号
   */
  BatchId: string
}

/**
 * 子订单列表
 */
export interface UnifiedOrderInSubOrderList {
  /**
   * 子订单结算应收金额，单位： 分
   */
  SubMchIncome: number

  /**
   * 子订单平台应收金额，单位：分
   */
  PlatformIncome: number

  /**
   * 子订单商品详情
   */
  ProductDetail: string

  /**
   * 子订单商品名称
   */
  ProductName: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
   * 子订单号
   */
  SubOutTradeNo: string

  /**
   * 子订单支付金额
   */
  Amt: number

  /**
   * 发货标识，由业务在调用聚鑫下单接口的 时候下发
   */
  Metadata: string

  /**
   * 子订单原始金额
   */
  OriginalAmt: number
}

/**
 * QueryAcctBinding请求参数结构体
 */
export interface QueryAcctBindingRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
   * 由平台客服提供的计费密钥Id
   */
  MidasSecretId: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
      * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
      */
  EncryptType?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * QueryAgentStatements返回参数结构体
 */
export interface QueryAgentStatementsResponse {
  /**
      * 文件下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMntMbrBindRelateAcctBankCode请求参数结构体
 */
export interface ModifyMntMbrBindRelateAcctBankCodeRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(50)，见证子账户的账号
   */
  SubAcctNo: string

  /**
   * STRING(50)，会员绑定账号
   */
  MemberBindAcctNo: string

  /**
   * STRING(150)，开户行名称（若大小额行号不填则送超级网银号对应的银行名称，若填大小额行号则送大小额行号对应的银行名称）
   */
  AcctOpenBranchName: string

  /**
   * STRING(20)，大小额行号（CnapsBranchId和EiconBankBranchId两者二选一必填）
   */
  CnapsBranchId?: string

  /**
   * STRING(20)，超级网银行号
   */
  EiconBankBranchId?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * 创建商户结果
 */
export interface CreateMerchantResult {
  /**
   * 状态码
   */
  Code: number

  /**
   * 响应消息
   */
  Message: string

  /**
      * 创建商户结果数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: CreateMerchantResultData
}

/**
 * ApplyPayerInfo返回参数结构体
 */
export interface ApplyPayerInfoResponse {
  /**
   * 付款人申请结果
   */
  Result: ApplyPayerinfoResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryMerchantPayWayList返回参数结构体
 */
export interface QueryMerchantPayWayListResponse {
  /**
   * 业务系统返回码
   */
  ErrCode: string

  /**
      * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrMessage: string

  /**
      * 查询商户支付方式列表结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: Array<MerchantPayWayData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 提交贸易材料结果
 */
export interface ApplyTradeResult {
  /**
   * 错误码
   */
  Code: string

  /**
   * 提交贸易材料数据
   */
  Data: ApplyTradeData
}

/**
 * RevokeRechargeByThirdPay请求参数结构体
 */
export interface RevokeRechargeByThirdPayRequest {
  /**
   * 请求类型此接口固定填：RevokeMemberRechargeThirdPayReq
   */
  RequestType: string

  /**
   * 商户号
   */
  MerchantCode: string

  /**
   * 支付渠道
   */
  PayChannel: string

  /**
   * 子渠道
   */
  PayChannelSubId: number

  /**
   * 原始充值交易订单号
   */
  OrderId: string

  /**
   * 父账户账号，资金汇总账号
   */
  BankAccountNumber: string

  /**
   * 平台短号(银行分配)
   */
  PlatformShortNumber: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
   * 交易流水号
   */
  TransSequenceNumber: string

  /**
   * 申请撤销的手续费金额,以元为单位
   */
  TransFee: string

  /**
   * 第三方支付渠道类型 0001-微信 0002-支付宝 0003-京东支付
   */
  ThirdPayChannel: string

  /**
   * 第三方渠道订单号或流水号
   */
  ThirdPayChannelOrderId: string

  /**
   * 充值接口银行返回的流水号(FrontSeqNo)
   */
  OldFrontSequenceNumber: string

  /**
   * 申请撤销的金额
   */
  CurrencyAmount: string

  /**
   * 单位，1：元，2：角，3：分 目前固定填1
   */
  CurrencyUnit: string

  /**
   * 币种 目前固定填RMB
   */
  CurrencyType: string

  /**
   * Midas环境标识
   */
  MidasEnvironment: string

  /**
   * 保留域
   */
  ReservedMessage?: string

  /**
   * 备注
   */
  Remark?: string
}

/**
 * QueryTrade请求参数结构体
 */
export interface QueryTradeRequest {
  /**
   * 贸易材料流水号
   */
  TradeFileId: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * UnifiedOrder返回参数结构体
 */
export interface UnifiedOrderResponse {
  /**
   * 支付金额，单位： 分
   */
  TotalAmt?: number

  /**
   * 应用支付订单号
   */
  OutTradeNo?: string

  /**
   * 支付参数透传给聚鑫SDK（原文透传给SDK即可，不需要解码）
   */
  PayInfo?: string

  /**
   * 聚鑫的交易订单
   */
  TransactionId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryBankWithdrawCashDetails请求参数结构体
 */
export interface QueryBankWithdrawCashDetailsRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(2)，功能标志（1: 当日; 2: 历史）
   */
  FunctionFlag: string

  /**
   * STRING(50)，见证子帐户的帐号
   */
  SubAcctNo: string

  /**
   * STRING(4)，查询标志（2: 提现; 3: 清分）
   */
  QueryFlag: string

  /**
   * STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
   */
  PageNum: string

  /**
   * STRING(8)，开始日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101）
   */
  BeginDate?: string

  /**
   * STRING(8)，结束日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101）
   */
  EndDate?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * 付款人申请结果
 */
export interface ApplyPayerinfoResult {
  /**
   * 错误码
   */
  Code: string

  /**
   * 数据
   */
  Data: ApplyPayerinfoData
}

/**
 * QueryBatchPaymentResult接口返回响应
 */
export interface QueryBatchPaymentResultData {
  /**
      * 批次号
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchId: string

  /**
      * 批次总额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalAmount: number

  /**
      * 批次总量
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * 批次预留字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReqReserved: string

  /**
      * 批次备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 渠道类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferType: number

  /**
      * 转账明细
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferInfoList: Array<QueryBatchPaymentResultDataInfo>
}

/**
 * QueryCustAcctIdBalance请求参数结构体
 */
export interface QueryCustAcctIdBalanceRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(4)，查询标志（2: 普通会员子账号; 3: 功能子账号）
   */
  QueryFlag: string

  /**
   * STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
   */
  PageNum: string

  /**
   * STRING(50)，见证子账户的账号（若SelectFlag为2时，子账号必输）
   */
  SubAcctNo?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * QueryPayerInfo返回参数结构体
 */
export interface QueryPayerInfoResponse {
  /**
   * 付款人查询结果
   */
  Result: QueryPayerinfoResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 清分提现明细信息
 */
export interface WithdrawItem {
  /**
      * STRING(2)，记账标志（01: 提现; 02: 清分 ）
注意：此字段可能返回 null，表示取不到有效值。
      */
  BookingFlag: string

  /**
      * STRING(32)，交易状态（0: 成功）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranStatus: string

  /**
      * STRING(200)，记账说明
注意：此字段可能返回 null，表示取不到有效值。
      */
  BookingMsg: string

  /**
      * STRING(32)，交易网会员代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranNetMemberCode: string

  /**
      * STRING(50)，见证子帐户的帐号
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubAcctNo: string

  /**
      * STRING(150)，见证子账户的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubAcctName: string

  /**
      * STRING(20)，交易金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranAmt: string

  /**
      * STRING(20)，手续费
注意：此字段可能返回 null，表示取不到有效值。
      */
  Commission: string

  /**
      * STRING(8)，交易日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranDate: string

  /**
      * STRING(20)，交易时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranTime: string

  /**
      * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo: string

  /**
      * STRING(300)，备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string
}

/**
 * BindAcct请求参数结构体
 */
export interface BindAcctRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
      * 1 – 小额转账验证
2 – 短信验证
3 - 一分钱转账验证，无需再调CheckAcct验证绑卡
4 - 银行四要素验证，无需再调CheckAcct验证绑卡
每个结算账户每天只能使用一次小额转账验证
      */
  BindType: number

  /**
      * 用于提现
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  SettleAcctNo: string

  /**
      * 结算账户户名
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  SettleAcctName: string

  /**
      * 1 – 本行账户
2 – 他行账户
      */
  SettleAcctType: number

  /**
   * 证件类型，见《证件类型》表
   */
  IdType: string

  /**
      * 证件号码
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  IdCode: string

  /**
   * 开户行名称
   */
  AcctBranchName: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
      * 用于短信验证
BindType==2时必填
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  Mobile?: string

  /**
      * 大小额行号，超级网银行号和大小额行号
二选一
      */
  CnapsBranchId?: string

  /**
      * 超级网银行号，超级网银行号和大小额行号
二选一
      */
  EiconBankBranchId?: string

  /**
      * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
      */
  EncryptType?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string

  /**
   * 经办人信息
   */
  AgencyClientInfo?: AgencyClientInfo
}

/**
 * ReviseMbrProperty请求参数结构体
 */
export interface ReviseMbrPropertyRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(50)，见证子账户的账号
   */
  SubAcctNo: string

  /**
   * STRING(10)，会员属性（00-普通子账号; SH-商户子账户。暂时只支持00-普通子账号改为SH-商户子账户）
   */
  MemberProperty: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * UploadTaxList返回参数结构体
 */
export interface UploadTaxListResponse {
  /**
   * 完税ID
   */
  TaxId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MigrateOrderRefundQuery返回参数结构体
 */
export interface MigrateOrderRefundQueryResponse {
  /**
   * 请求成功状态
   */
  IsSuccess?: boolean

  /**
   * 交易流水号
   */
  TradeSerialNo?: string

  /**
   * 交易备注
   */
  TradeMsg?: string

  /**
   * 交易状态：0=交易待处理；1=交易处理中；2=交易处理成功；3=交易失败；4=状态未知
   */
  TradeStatus?: number

  /**
      * 第三方支付机构支付交易号
注意：此字段可能返回 null，表示取不到有效值。
      */
  ThirdChannelOrderId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevResigterBillSupportWithdraw请求参数结构体
 */
export interface RevResigterBillSupportWithdrawRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(32)，交易网会员代码
   */
  TranNetMemberCode: string

  /**
   * STRING(30)，原订单号（RegisterBillSupportWithdraw接口中的订单号）
   */
  OldOrderNo: string

  /**
   * STRING(20)，撤销金额（支持部分撤销，不能大于原订单可用金额，包含交易费用）
   */
  CancelAmt: string

  /**
   * STRING(20)，交易费用（暂未使用，默认传0.0）
   */
  TranFee: string

  /**
   * STRING(300)，备注
   */
  Remark?: string

  /**
   * STRING(300)，保留域1
   */
  ReservedMsgOne?: string

  /**
   * STRING(300)，保留域2
   */
  ReservedMsgTwo?: string

  /**
   * STRING(300)，保留域3
   */
  ReservedMsgThree?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * CreateInvoice返回参数结构体
 */
export interface CreateInvoiceResponse {
  /**
   * 发票开具结果
   */
  Result: CreateInvoiceResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 代理商完税证明
 */
export interface AgentTaxPayment {
  /**
   * 主播银行账号
   */
  AnchorId: string

  /**
   * 主播姓名
   */
  AnchorName: string

  /**
   * 主播身份证
   */
  AnchorIDCard: string

  /**
   * 纳税的开始时间，格式yyyy-MM-dd
   */
  StartTime: string

  /**
   * 纳税的结束时间，格式yyyy-MM-dd
   */
  EndTime: string

  /**
   * 流水金额。以“分”为单位
   */
  Amount: number

  /**
   * 应缴税款。以“分”为单位
   */
  Tax: number
}

/**
 * CreateOrder请求参数结构体
 */
export interface CreateOrderRequest {
  /**
   * 渠道编号。ZSB2B：招商银行B2B。
   */
  ChannelCode: string

  /**
   * 进件成功后返给商户方的 AppId。
   */
  MerchantAppId: string

  /**
   * 交易金额。单位：元
   */
  Amount: string

  /**
   * 商户流水号。商户唯一订单号由字母或数字组成。
   */
  TraceNo: string

  /**
   * 通知地址。商户接收交易结果的通知地址。
   */
  NotifyUrl: string

  /**
   * 返回地址。支付成功后，页面将跳 转返回到商户的该地址。
   */
  ReturnUrl: string
}

/**
 * ModifyBindedAccount请求参数结构体
 */
export interface ModifyBindedAccountRequest {
  /**
   * 主播Id
   */
  AnchorId: string

  /**
      * 1 微信企业付款 
2 支付宝转账 
3 平安银企直连代发转账
      */
  TransferType: number

  /**
      * 收款方标识。
微信为open_id；
支付宝为会员alipay_user_id;
平安为收款方银行账号;
      */
  AccountNo: string

  /**
   * 手机号
   */
  PhoneNum: string
}

/**
 * 红票结果
 */
export interface CreateRedInvoiceResult {
  /**
   * 错误消息
   */
  Message: string

  /**
   * 错误码
   */
  Code: number

  /**
      * 红票数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<CreateRedInvoiceResultData>
}

/**
 * QueryBankWithdrawCashDetails返回参数结构体
 */
export interface QueryBankWithdrawCashDetailsResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultNum?: string

  /**
      * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartRecordNo?: string

  /**
      * STRING(2)，结束标志（0:否; 1:是）
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndFlag?: string

  /**
      * STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalNum?: string

  /**
      * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranItemArray?: Array<WithdrawItem>

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePayMerchant请求参数结构体
 */
export interface CreatePayMerchantRequest {
  /**
   * 平台编号
   */
  PlatformCode: string

  /**
   * 渠道方收款商户编号，由渠道方(银行)提 供。
   */
  ChannelMerchantNo: string

  /**
      * 是否需要向渠道进行 商户信息验证 1:验证
0:不验证
      */
  ChannelCheckFlag: string

  /**
   * 收款商户名称
   */
  MerchantName: string

  /**
   * 是否开通 B2B 支付 1:开通 0:不开通 缺省:1
   */
  BusinessPayFlag?: string
}

/**
 * ContractOrder请求参数结构体
 */
export interface ContractOrderRequest {
  /**
   * ISO 货币代码，CNY
   */
  CurrencyType: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 支付订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
   */
  OutTradeNo: string

  /**
   * 商品详情，需要URL编码
   */
  ProductDetail: string

  /**
   * 商品ID，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
   */
  ProductId: string

  /**
   * 商品名称，需要URL编码
   */
  ProductName: string

  /**
   * 支付金额，单位： 分
   */
  TotalAmt: number

  /**
   * 用户ID，长度不小于5位，仅支持字母和数字的组合
   */
  UserId: string

  /**
   * 银行真实渠道.如:bank_pingan
   */
  RealChannel: string

  /**
   * 原始金额
   */
  OriginalAmt: number

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
   * 签约通知地址
   */
  ContractNotifyUrl: string

  /**
   * Web端回调地址
   */
  CallbackUrl?: string

  /**
      * 指定支付渠道：  wechat：微信支付  qqwallet：QQ钱包 
 bank：网银支付  只有一个渠道时需要指定
      */
  Channel?: string

  /**
   * 透传字段，支付成功回调透传给应用，用于业务透传自定义内容
   */
  Metadata?: string

  /**
   * 购买数量，不传默认为1
   */
  Quantity?: number

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId?: string

  /**
      * 子订单信息列表，格式：子订单号、子应用ID、金额。 压缩后最长不可超过65535字节(去除空格，换行，制表符等无意义字符)
注：接入银行或其他支付渠道服务商模式下，必传
      */
  SubOrderList?: Array<ContractOrderInSubOrder>

  /**
   * 结算应收金额，单位：分
   */
  TotalMchIncome?: number

  /**
   * 平台应收金额，单位：分
   */
  TotalPlatformIncome?: number

  /**
   * 微信公众号/小程序支付时为必选，需要传微信下的openid
   */
  WxOpenId?: string

  /**
   * 在服务商模式下，微信公众号/小程序支付时wx_sub_openid和wx_openid二选一
   */
  WxSubOpenId?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string

  /**
   * 微信商户应用ID
   */
  WxAppId?: string

  /**
   * 微信商户子应用ID
   */
  WxSubAppId?: string

  /**
   * 支付通知地址
   */
  PaymentNotifyUrl?: string

  /**
   * 传入调用方在Midas注册签约信息时获得的ContractSceneId。若未在Midas注册签约信息，则传入ExternalContractData。注意：ContractSceneId与ExternalContractData必须二选一传入其中一个
   */
  ContractSceneId?: string

  /**
   * 需要按照各个渠道的扩展签约信息规范组装好该字段。若未在Midas注册签约信息，则传入该字段。注意：ContractSceneId与ExternalContractData必须二选一传入其中一个
   */
  ExternalContractData?: string

  /**
   * 外部签约协议号，唯一标记一个签约关系。仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
   */
  OutContractCode?: string

  /**
   * 透传给第三方渠道的附加数据
   */
  AttachData?: string

  /**
   * 展示用的签约用户名称，若不传入时，默认取UserId
   */
  ContractDisplayName?: string
}

/**
 * ModifyAgentTaxPaymentInfo返回参数结构体
 */
export interface ModifyAgentTaxPaymentInfoResponse {
  /**
   * 代理商完税证明批次信息
   */
  AgentTaxPaymentBatch: AgentTaxPaymentBatch

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSinglePayment请求参数结构体
 */
export interface CreateSinglePaymentRequest {
  /**
   * 转账类型
   */
  TransferType: number

  /**
   * 订单流水号
   */
  OrderId: string

  /**
   * 转账金额
   */
  TransferAmount: number

  /**
   * 主播ID（与主播业务ID不能同时为空，两者都填取主播ID）
   */
  AnchorId: string

  /**
   * 请求预留字段，原样透传返回
   */
  ReqReserved?: string

  /**
   * 业务备注
   */
  Remark?: string

  /**
   * 主播名称。如果该字段填入，则会对AnchorName和AnchorId/Uid进行校验。
   */
  AnchorName?: string

  /**
   * 主播业务ID（与主播ID不能同时为空，两者都填取主播ID）
   */
  Uid?: string

  /**
   * 转账结果回调通知URL。若不填，则不进行回调。
   */
  NotifyUrl?: string
}

/**
 * 经办人信息
 */
export interface AgencyClientInfo {
  /**
   * 经办人姓名，存在经办人必输
   */
  AgencyClientName: string

  /**
   * 经办人证件类型，存在经办人必输
   */
  AgencyClientGlobalType: string

  /**
   * 经办人证件号，存在经办人必输
   */
  AgencyClientGlobalId: string

  /**
   * 经办人手机号，存在经办人必输
   */
  AgencyClientMobile: string
}

/**
 * 退款子订单列表
 */
export interface RefundOutSubOrderRefundList {
  /**
   * 平台应退金额
   */
  PlatformRefundAmt: number

  /**
   * 子订单退款金额
   */
  RefundAmt: number

  /**
   * 商家应退金额
   */
  SubMchRefundAmt: number

  /**
   * 子订单号
   */
  SubOutTradeNo: string

  /**
   * 子退款单号，调用方需要保证 全局唯一性
   */
  SubRefundId: string
}

/**
 * UnbindRelateAcct请求参数结构体
 */
export interface UnbindRelateAcctRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(2)，功能标志（1: 解绑）
   */
  FunctionFlag: string

  /**
   * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”(右侧)进行分隔）
   */
  TranNetMemberCode: string

  /**
   * STRING(50)，待解绑的提现账户的账号（提现账号）
   */
  MemberAcctNo: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * 聚鑫提现订单内容
 */
export interface WithdrawBill {
  /**
   * 业务提现订单号
   */
  WithdrawOrderId: string

  /**
   * 提现日期
   */
  Date: string

  /**
   * 提现金额，单位： 分
   */
  PayAmt: string

  /**
   * 聚鑫分配转入账户appid
   */
  InSubAppId: string

  /**
   * 聚鑫分配转出账户appid
   */
  OutSubAppId: string

  /**
   * ISO货币代码
   */
  CurrencyType: string

  /**
   * 透传字段
   */
  MetaData?: string

  /**
   * 扩展字段
   */
  ExtendFieldData?: string
}

/**
 * QueryAcctInfoList请求参数结构体
 */
export interface QueryAcctInfoListRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 查询开始时间(以开户时间为准)
   */
  QueryAcctBeginTime: string

  /**
   * 查询结束时间(以开户时间为准)
   */
  QueryAcctEndTime: string

  /**
   * 分页号,  起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照开户时间的先后
   */
  PageOffset: string

  /**
   * 由平台客服提供的计费密钥Id
   */
  MidasSecretId: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
      * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
      */
  EncryptType?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * CreateMerchant请求参数结构体
 */
export interface CreateMerchantRequest {
  /**
   * 开票平台ID
   */
  InvoicePlatformId: number

  /**
   * 企业名称
   */
  TaxpayerName: string

  /**
   * 销方纳税人识别号
   */
  TaxpayerNum: string

  /**
   * 注册企业法定代表人名称
   */
  LegalPersonName: string

  /**
   * 联系人
   */
  ContactsName: string

  /**
   * 联系人手机号
   */
  Phone: string

  /**
   * 不包含省市名称的地址
   */
  Address: string

  /**
   * 地区编码
   */
  RegionCode: number

  /**
   * 市（地区）名称
   */
  CityName: string

  /**
   * 开票人
   */
  Drawer: string

  /**
   * 税务登记证图片（Base64）字符串，需小于 3M
   */
  TaxRegistrationCertificate: string

  /**
   * 联系人邮箱地址
   */
  Email?: string

  /**
   * 企业电话
   */
  BusinessMobile?: string

  /**
   * 银行名称
   */
  BankName?: string

  /**
   * 银行账号
   */
  BankAccount?: string

  /**
   * 复核人
   */
  Reviewer?: string

  /**
   * 收款人
   */
  Payee?: string

  /**
   * 注册邀请码
   */
  RegisterCode?: string

  /**
      * 不填默认为1，有效状态
0：表示无效；
1:表示有效；
2:表示禁止开蓝票；
3:表示禁止冲红。
      */
  State?: string

  /**
   * 接收推送的消息地址
   */
  CallbackUrl?: string

  /**
   * 接入环境。沙箱环境填 sandbox。
   */
  Profile?: string
}

/**
 * 提交申报材料结果
 */
export interface ApplyDeclareResult {
  /**
   * 错误码
   */
  Code: string

  /**
   * 提交申报材料数据
   */
  Data: ApplyDeclareData
}

/**
 * DeleteAgentTaxPaymentInfo请求参数结构体
 */
export interface DeleteAgentTaxPaymentInfoRequest {
  /**
   * 批次号
   */
  BatchNum: number

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * 查询发票结果
 */
export interface QueryInvoiceResult {
  /**
   * 错误消息
   */
  Message: string

  /**
   * 错误码
   */
  Code: number

  /**
      * 查询发票数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: QueryInvoiceResultData

  /**
      * 订单数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Order: Order
}

/**
 * QueryAcctBinding返回参数结构体
 */
export interface QueryAcctBindingResponse {
  /**
   * 总行数
   */
  TotalCount: number

  /**
   * 银行卡信息列表
   */
  BankCardItems: Array<BankCardItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryMerchantInfoForManagement请求参数结构体
 */
export interface QueryMerchantInfoForManagementRequest {
  /**
   * 开票平台ID
   */
  InvoicePlatformId: number

  /**
   * 页码
   */
  Offset: number

  /**
   * 页大小
   */
  Limit: number

  /**
   * 接入环境。沙箱环境填sandbox。
   */
  Profile?: string
}

/**
 * QueryCommonTransferRecharge返回参数结构体
 */
export interface QueryCommonTransferRechargeResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultNum?: string

  /**
      * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartRecordNo?: string

  /**
      * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndFlag?: string

  /**
      * STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalNum?: string

  /**
      * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranItemArray?: Array<TransferItem>

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 贸易材料明细查询数据
 */
export interface QueryTradeData {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 贸易材料流水号
   */
  TradeFileId: string

  /**
   * 贸易材料订单号
   */
  TradeOrderId: string

  /**
   * 审核状态
   */
  Status: string

  /**
      * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailReason: string

  /**
   * 付款人ID
   */
  PayerId: string

  /**
   * 收款人姓名
   */
  PayeeName: string

  /**
   * 收款人常驻国家或地区编码
   */
  PayeeCountryCode: string

  /**
   * 交易类型
   */
  TradeType: string

  /**
   * 交易日期
   */
  TradeTime: string

  /**
   * 交易币种
   */
  TradeCurrency: string

  /**
   * 交易金额
   */
  TradeAmount: string

  /**
   * 交易名称
   */
  TradeName: string

  /**
   * 交易数量
   */
  TradeCount: number

  /**
      * 货贸承运人
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsCarrier: string

  /**
      * 服贸交易细节
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceDetail: string

  /**
      * 服贸服务时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceTime: string
}

/**
 * ApplyOutwardOrder返回参数结构体
 */
export interface ApplyOutwardOrderResponse {
  /**
   * 汇出指令申请
   */
  Result: ApplyOutwardOrderResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyReWithdrawal返回参数结构体
 */
export interface ApplyReWithdrawalResponse {
  /**
   * 重新提现业务订单号
   */
  WithdrawOrderId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryBatchPaymentResult返回参数结构体
 */
export interface QueryBatchPaymentResultResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功。
   */
  ErrCode: string

  /**
   * 响应消息。
   */
  ErrMessage: string

  /**
   * 返回响应
   */
  Result: QueryBatchPaymentResultData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RegisterBill请求参数结构体
 */
export interface RegisterBillRequest {
  /**
   * 请求类型此接口固定填：RegBillSupportWithdrawReq
   */
  RequestType: string

  /**
   * 商户号
   */
  MerchantCode: string

  /**
   * 支付渠道
   */
  PayChannel: string

  /**
   * 子渠道
   */
  PayChannelSubId: number

  /**
   * 交易订单号
   */
  OrderId: string

  /**
   * 父账户账号，资金汇总账号
   */
  BankAccountNo: string

  /**
   * 平台短号(银行分配)
   */
  PlatformShortNo: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
   * 交易流水号
   */
  TransSeqNo: string

  /**
   * 暂未使用，默认传0.0
   */
  TranFee: string

  /**
   * 挂账金额，以元为单位
   */
  OrderAmt: string

  /**
   * 子账户账号
   */
  BankSubAccountNo: string

  /**
   * 交易网会员代码
   */
  TranNetMemberCode: string

  /**
   * 0,登记挂账，1，撤销挂账
   */
  TranType: string

  /**
   * 保留域
   */
  ReservedMessage?: string

  /**
   * 备注
   */
  Remark?: string

  /**
   * Midas环境参数
   */
  MidasEnvironment?: string
}

/**
 * 发票开具明细
 */
export interface CreateInvoiceItem {
  /**
   * 商品名称
   */
  Name: string

  /**
   * 税收商品编码
   */
  TaxCode: string

  /**
   * 不含税商品总价（商品含税价总额/（1+税率））。InvoicePlatformId 为1时，该金额为含税总金额。单位为分。
   */
  TotalPrice: number

  /**
   * 商品税率
   */
  TaxRate: number

  /**
   * 商品税额（不含税商品总价*税率）。单位为分
   */
  TaxAmount: number

  /**
   * 税收商品类别
   */
  TaxType?: string

  /**
   * 商品规格
   */
  Models?: string

  /**
   * 商品单位
   */
  Unit?: string

  /**
   * 商品数量
   */
  Total?: string

  /**
   * 不含税商品单价。InvoicePlatformId 为1时，该金额为含税单价。
   */
  Price?: string

  /**
   * 含税折扣总额。单位为分
   */
  Discount?: number

  /**
   * 优惠政策标志。0：不使用优惠政策；1：使用优惠政策。
   */
  PreferentialPolicyFlag?: string

  /**
      * 零税率标识：
空：非零税率；
0：出口零税率；
1：免税；
2：不征税；
3：普通零税率。
      */
  ZeroTaxFlag?: string

  /**
   * 增值税特殊管理。PreferentialPolicyFlag字段为1时，必填。目前仅支持5%(3%，2%，1.5%)简易征税、免税、不征税。
   */
  VatSpecialManagement?: string
}

/**
 * 汇出指令申请数据
 */
export interface ApplyOutwardOrderData {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 对接方汇出指令编号
   */
  TransactionId: string

  /**
   * 受理状态
   */
  Status: string
}

/**
 * RevokeRechargeByThirdPay返回参数结构体
 */
export interface RevokeRechargeByThirdPayResponse {
  /**
   * 请求类型
   */
  RequestType?: string

  /**
      * 保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMessage?: string

  /**
   * 银行流水号
   */
  FrontSequenceNumber?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBatchPayment返回参数结构体
 */
export interface CreateBatchPaymentResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功。
   */
  ErrCode: string

  /**
   * 响应消息。
   */
  ErrMessage: string

  /**
   * 返回响应
   */
  Result: CreateBatchPaymentData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryInvoiceV2返回参数结构体
 */
export interface QueryInvoiceV2Response {
  /**
      * 发票查询结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: QueryInvoiceResultData

  /**
   * 错误码
   */
  ErrCode: string

  /**
   * 错误消息
   */
  ErrMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindAccount返回参数结构体
 */
export interface BindAccountResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功。
   */
  ErrCode: string

  /**
   * 响应消息。
   */
  ErrMessage: string

  /**
      * 该字段为null。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 蓝票结果数据
 */
export interface CreateInvoiceResultData {
  /**
   * 开票状态
   */
  State: number

  /**
   * 发票ID
   */
  InvoiceId: string

  /**
   * 业务开票号
   */
  OrderSn: string
}

/**
 * CreateExternalAnchor请求参数结构体
 */
export interface CreateExternalAnchorRequest {
  /**
   * 平台业务系统唯一标示的主播id
   */
  Uid: string

  /**
   * 主播名称
   */
  Name: string

  /**
   * 身份证号
   */
  IdNo: string

  /**
   * 身份证正面图片下载链接
   */
  IdCardFront?: string

  /**
   * 身份证反面图片下载链接
   */
  IdCardReverse?: string

  /**
   * 指定分配的代理商ID
   */
  AgentId?: string
}

/**
 * CreateAgentTaxPaymentInfos请求参数结构体
 */
export interface CreateAgentTaxPaymentInfosRequest {
  /**
   * 代理商ID
   */
  AgentId: string

  /**
   * 平台渠道
   */
  Channel: number

  /**
   * 类型。0-视同，1-个体工商户
   */
  Type: number

  /**
   * 源电子凭证下载地址
   */
  RawElectronicCertUrl: string

  /**
   * 文件名
   */
  FileName: string

  /**
   * 完税信息
   */
  AgentTaxPaymentInfos: Array<AgentTaxPayment>

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * ConfirmOrder返回参数结构体
 */
export interface ConfirmOrderResponse {
  /**
   * 分配给商户的AppId
   */
  MerchantAppId: string

  /**
   * 平台流水号。消费订单发起成功后，返回的平台唯一订单号。
   */
  OrderNo: string

  /**
      * 订单确认状态。0-确认失败
1-确认成功 
2-可疑状态
      */
  Status: string

  /**
      * 订单确认状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseOrder返回参数结构体
 */
export interface CloseOrderResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 付款人申请结果
 */
export interface ApplyPayerinfoData {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 付款人ID
   */
  PayerId: string

  /**
   * 状态
   */
  Status: string

  /**
      * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailReason: string
}

/**
 * ModifyMerchant请求参数结构体
 */
export interface ModifyMerchantRequest {
  /**
   * 进件成功后返给商户的AppId
   */
  MerchantAppId: string

  /**
   * 收款商户名称
   */
  MerchantName: string

  /**
   * B2B 支付标志。是否开通 B2B支付， 1:开通 0:不开通。
   */
  BusinessPayFlag: string
}

/**
 * 创建红票明细
 */
export interface CreateRedInvoiceItem {
  /**
   * 订单号
   */
  OrderId: string

  /**
   * 发票结果回传地址
   */
  CallbackUrl?: string

  /**
   * 业务开票号
   */
  OrderSn?: string

  /**
   * 红字信息表编码
   */
  RedSerialNo?: string

  /**
   * 门店编号
   */
  StoreNo?: string
}

/**
 * CheckAcct请求参数结构体
 */
export interface CheckAcctRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
      * 1 – 小额转账验证
2 – 短信验证
每个结算账户每天只能使用一次小额转账验证
      */
  BindType: number

  /**
      * 结算账户账号
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  SettleAcctNo: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
      * 短信验证码或指令号
BindType==2必填，平安渠道必填
      */
  CheckCode?: string

  /**
      * 币种 RMB
BindType==1必填
      */
  CurrencyType?: string

  /**
      * 单位
1：元，2：角，3：分
BindType==1必填
      */
  CurrencyUnit?: number

  /**
      * 金额
BindType==1必填
      */
  CurrencyAmt?: string

  /**
      * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
      */
  EncryptType?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * CheckAmount返回参数结构体
 */
export interface CheckAmountResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
   * STRING(52)，见证系统流水号（即电商见证宝系统生成的流水号，可关联具体一笔请求）
   */
  FrontSeqNo?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子订单列表
 */
export interface QueryOrderOutSubOrderList {
  /**
   * 子订单支付金额
   */
  Amt: number

  /**
   * 子订单结算应收金额，单位：分
   */
  SubMchIncome: number

  /**
   * 发货标识，由业务在调用Midas下单接口的时候下发。
   */
  Metadata: string

  /**
   * 子订单原始金额
   */
  OriginalAmt: number

  /**
   * 子订单平台应收金额，单位：分
   */
  PlatformIncome: number

  /**
   * 子订单商品详情
   */
  ProductDetail: string

  /**
   * 子订单商品名称
   */
  ProductName: string

  /**
   * 核销状态，1表示核销，0表示未核销
   */
  SettleCheck: number

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
   * 子订单号
   */
  SubOutTradeNo: string
}

/**
 * ApplyReWithdrawal请求参数结构体
 */
export interface ApplyReWithdrawalRequest {
  /**
   * 聚鑫业务类型
   */
  BusinessType: number

  /**
   * 由平台客服提供的计费密钥Id
   */
  MidasSecretId: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
   * 提现信息
   */
  Body: WithdrawBill

  /**
   * 聚鑫业务ID
   */
  MidasAppId: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * 查询汇出结果
 */
export interface QueryOutwardOrderResult {
  /**
   * 错误码
   */
  Code: string

  /**
   * 查询汇出数据
   */
  Data: QueryOutwardOrderData
}

/**
 * CreateAgentTaxPaymentInfos返回参数结构体
 */
export interface CreateAgentTaxPaymentInfosResponse {
  /**
   * 代理商完税证明批次信息
   */
  AgentTaxPaymentBatch: AgentTaxPaymentBatch

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RechargeByThirdPay请求参数结构体
 */
export interface RechargeByThirdPayRequest {
  /**
   * 请求类型 此接口固定填：MemberRechargeThirdPayReq
   */
  RequestType: string

  /**
   * 商户号
   */
  MerchantCode: string

  /**
   * 支付渠道
   */
  PayChannel: string

  /**
   * 子渠道
   */
  PayChannelSubId: number

  /**
   * 交易订单号
   */
  OrderId: string

  /**
   * 父账户账号，资金汇总账号
   */
  BankAccountNumber: string

  /**
   * 平台短号(银行分配)
   */
  PlatformShortNumber: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
   * 交易流水号
   */
  TransSequenceNumber: string

  /**
   * 子账户账号
   */
  BankSubAccountNumber: string

  /**
   * 交易手续费，以元为单位
   */
  TransFee: string

  /**
   * 第三方支付渠道类型 0001-微信 0002-支付宝 0003-京东支付
   */
  ThirdPayChannel: string

  /**
   * 第三方渠道商户号
   */
  ThirdPayChannelMerchantCode: string

  /**
   * 第三方渠道订单号或流水号
   */
  ThirdPayChannelOrderId: string

  /**
   * 交易金额
   */
  CurrencyAmount: string

  /**
   * 单位，1：元，2：角，3：分
   */
  CurrencyUnit: string

  /**
   * 币种
   */
  CurrencyType: string

  /**
   * 交易网会员代码
   */
  TransNetMemberCode: string

  /**
   * midas环境参数
   */
  MidasEnvironment: string

  /**
   * 保留域
   */
  ReservedMessage?: string

  /**
   * 备注
   */
  Remark?: string
}

/**
 * RevokeMemberRechargeThirdPay请求参数结构体
 */
export interface RevokeMemberRechargeThirdPayRequest {
  /**
   * STRING(52)，原充值的前置流水号
   */
  OldFillFrontSeqNo: string

  /**
   * STRING(20)，原充值的支付渠道类型
   */
  OldFillPayChannelType: string

  /**
   * STRING(52)，原充值的支付渠道交易流水号
   */
  OldPayChannelTranSeqNo: string

  /**
   * STRING(52)，原充值的电商见证宝订单号
   */
  OldFillEjzbOrderNo: string

  /**
   * STRING(20)，申请撤销的会员金额
   */
  ApplyCancelMemberAmt: string

  /**
   * STRING(20)，申请撤销的手续费金额
   */
  ApplyCancelCommission: string

  /**
   * String(22)，商户号
   */
  MrchCode: string

  /**
   * STRING(300)，备注
   */
  Remark?: string

  /**
   * STRING(300)，保留域1
   */
  ReservedMsgOne?: string

  /**
   * STRING(300)，保留域2
   */
  ReservedMsgTwo?: string

  /**
   * STRING(300)，保留域3
   */
  ReservedMsgThree?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * QueryPayerInfo请求参数结构体
 */
export interface QueryPayerInfoRequest {
  /**
   * 付款人ID
   */
  PayerId: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * QueryMerchantInfoForManagement返回参数结构体
 */
export interface QueryMerchantInfoForManagementResponse {
  /**
      * 商户结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: MerchantManagementResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTransferBatch返回参数结构体
 */
export interface CreateTransferBatchResponse {
  /**
      * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
      */
  MerchantBatchNo?: string

  /**
      * 微信批次单号。
微信商家转账系统返回的唯一标识。
示例值：1030000071100999991182020050700019480001
      */
  BatchId?: string

  /**
      * 批次受理成功时返回，遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
      */
  CreateTime?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QuerySingleTransactionStatus请求参数结构体
 */
export interface QuerySingleTransactionStatusRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(2)，功能标志（2: 会员间交易; 3: 提现; 4: 充值）
   */
  FunctionFlag: string

  /**
   * STRING(52)，交易网流水号（提现，充值或会员交易请求时的CnsmrSeqNo值）
   */
  TranNetSeqNo: string

  /**
   * STRING(50)，见证子帐户的帐号（未启用）
   */
  SubAcctNo?: string

  /**
   * STRING(8)，交易日期（未启用）
   */
  TranDate?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * 商户查询管理端列表
 */
export interface MerchantManagementList {
  /**
   * 企业名称。
   */
  TaxpayerName: string

  /**
   * 纳税人识别号(税号)	。
   */
  TaxpayerNum: string

  /**
   * 请求流水号。
   */
  SerialNo: string

  /**
   * 开票系统ID
   */
  InvoicePlatformId: number
}

/**
 * 发票结果
 */
export interface CreateInvoiceResult {
  /**
   * 错误消息
   */
  Message: string

  /**
   * 错误码
   */
  Code: number

  /**
      * 数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: CreateInvoiceResultData
}

/**
 * DescribeOrderStatus请求参数结构体
 */
export interface DescribeOrderStatusRequest {
  /**
   * 请求类型，此接口固定填：QueryOrderStatusReq
   */
  RequestType: string

  /**
   * 商户号
   */
  MerchantCode: string

  /**
   * 支付渠道
   */
  PayChannel: string

  /**
   * 子渠道
   */
  PayChannelSubId: number

  /**
   * 交易订单号或流水号，提现，充值或会员交易请求时的CnsmrSeqNo值
   */
  OrderId: string

  /**
   * 父账户账号，资金汇总账号
   */
  BankAccountNumber: string

  /**
   * 平台短号(银行分配)
   */
  PlatformShortNumber: string

  /**
   * 功能标志 0：会员间交易 1：提现 2：充值
   */
  QueryType: string

  /**
   * 银行流水号
   */
  TransSequenceNumber: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * Midas环境参数
   */
  MidasEnvironment: string

  /**
   * 保留字段
   */
  ReservedMessage?: string

  /**
   * 子账户账号 暂未使用
   */
  BankSubAccountNumber?: string

  /**
   * 交易日期 暂未使用
   */
  TransDate?: string
}

/**
 * QueryDownloadBillURL请求参数结构体
 */
export interface QueryDownloadBillURLRequest {
  /**
   * 分配给商户的AppId。进件成功后返给商户方的AppId。
   */
  MerchantAppId: string

  /**
   * 渠道编号。固定值：ZSB2B
   */
  ChannelCode: string

  /**
   * 对账单日期，格式yyyyMMdd
   */
  BillDate: string
}

/**
 * BindAccount请求参数结构体
 */
export interface BindAccountRequest {
  /**
   * 主播Id
   */
  AnchorId: string

  /**
      * 1 微信企业付款 
2 支付宝转账 
3 平安银企直连代发转账
      */
  TransferType: number

  /**
      * 收款方标识。
微信为open_id；
支付宝为会员alipay_user_id;
平安为收款方银行账号;
      */
  AccountNo: string

  /**
   * 手机号
   */
  PhoneNum: string
}

/**
 * RegisterBillSupportWithdraw请求参数结构体
 */
export interface RegisterBillSupportWithdrawRequest {
  /**
   * STRING(32)，交易网会员代码
   */
  TranNetMemberCode: string

  /**
   * STRING(50)，订单号
   */
  OrderNo: string

  /**
   * STRING(20)，挂账金额（包含交易费用）
   */
  SuspendAmt: string

  /**
   * STRING(20)，交易费用（暂未使用，默认传0.0）
   */
  TranFee: string

  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(300)，备注
   */
  Remark?: string

  /**
   * STRING(300)，保留域1
   */
  ReservedMsgOne?: string

  /**
   * STRING(300)，保留域2
   */
  ReservedMsgTwo?: string

  /**
   * STRING(300)，保留域3
   */
  ReservedMsgThree?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * ModifyMerchant返回参数结构体
 */
export interface ModifyMerchantResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 银企直连-查询单笔支付状态结果
 */
export interface QuerySinglePayResult {
  /**
   * 受理状态（S：处理成功；F：处理失败）
   */
  HandleStatus: string

  /**
      * 受理状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  HandleMsg: string

  /**
   * 业务流水号
   */
  SerialNo: string

  /**
      * 支付明细
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<QuerySinglePayItem>
}

/**
 * RefundOrder返回参数结构体
 */
export interface RefundOrderResponse {
  /**
   * 进件成功后返给商户方的AppId
   */
  MerchantAppId: string

  /**
   * 平台流水号。消费订单发起成功后，返回的平台唯一订单号。
   */
  OrderNo: string

  /**
      * 订单退款状态。0-退款失败
1-退款成功 
2-可疑状态
      */
  Status: string

  /**
      * 订单退款状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QuerySinglePay返回参数结构体
 */
export interface QuerySinglePayResponse {
  /**
   * 返回结果
   */
  Result: QuerySinglePayResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadExternalAnchorInfo返回参数结构体
 */
export interface UploadExternalAnchorInfoResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功。
   */
  ErrCode: string

  /**
   * 响应消息。
   */
  ErrMessage: string

  /**
      * 该字段为null。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 解约数据
 */
export interface ResponseTerminateContract {
  /**
      * 第三方渠道错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnCode: string

  /**
      * 第三方渠道错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnMessage: string

  /**
      * 第三方渠道返回的原始数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnData: string
}

/**
 * QueryCustAcctIdBalance返回参数结构体
 */
export interface QueryCustAcctIdBalanceResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultNum?: string

  /**
      * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartRecordNo?: string

  /**
      * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndFlag?: string

  /**
      * STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalNum?: string

  /**
      * 账户信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  AcctArray?: Array<Acct>

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateExternalAnchor返回参数结构体
 */
export interface CreateExternalAnchorResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功。
   */
  ErrCode: string

  /**
   * 响应消息。
   */
  ErrMessage: string

  /**
      * 返回响应
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: CreateExternalAnchorData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryTrade返回参数结构体
 */
export interface QueryTradeResponse {
  /**
   * 贸易材料明细查询结果
   */
  Result: QueryTradeResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadBill返回参数结构体
 */
export interface DownloadBillResponse {
  /**
   * 账单文件名
   */
  FileName?: string

  /**
   * 账单文件的MD5值
   */
  FileMD5?: string

  /**
   * 账单文件的真实下载地址
   */
  DownloadUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevokeMemberRechargeThirdPay返回参数结构体
 */
export interface RevokeMemberRechargeThirdPayResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(52)，前置流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo?: string

  /**
      * STRING(300)，保留域1
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsgOne?: string

  /**
      * STRING(300)，保留域2
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsgTwo?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRedInvoice请求参数结构体
 */
export interface CreateRedInvoiceRequest {
  /**
   * 开票平台ID
   */
  InvoicePlatformId: number

  /**
   * 红冲明细
   */
  Invoices: Array<CreateRedInvoiceItem>

  /**
   * 接入环境。沙箱环境填 sandbox。
   */
  Profile?: string

  /**
   * 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道
   */
  InvoiceChannel?: number
}

/**
 * QueryAcctInfoList返回参数结构体
 */
export interface QueryAcctInfoListResponse {
  /**
   * 本次交易返回查询结果记录数
   */
  ResultCount?: number

  /**
   * 符合业务查询条件的记录总数
   */
  TotalCount?: number

  /**
   * 查询结果项 [object,object]
   */
  QueryAcctItems?: Array<QueryAcctItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAgentTaxPaymentInfos请求参数结构体
 */
export interface DeleteAgentTaxPaymentInfosRequest {
  /**
   * 批次号
   */
  BatchNum: number
}

/**
 * BindRelateAcctSmallAmount返回参数结构体
 */
export interface BindRelateAcctSmallAmountResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(1027)，保留域（来账鉴权的方式下，此字段的值为客户需往监管账户转入的金额。在同名子账户绑定的场景下，若返回""VERIFIED""则说明无需验证直接绑定成功）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合约信息
 */
export interface ContractInfo {
  /**
   * 米大师内部签约商户号
   */
  ChannelContractMerchantId: string

  /**
      * 米大师内部签约子商户号
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChannelContractSubMerchantId: string

  /**
      * 米大师内部签约应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChannelContractAppId: string

  /**
      * 米大师内部签约子应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChannelContractSubAppId: string

  /**
   * 业务合约协议号
   */
  OutContractCode: string

  /**
      * 第三方渠道用户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalContractUserInfoList: Array<ExternalContractUserInfo>

  /**
   * 签约方式，如 wechat_app ，使用app方式下的微信签
   */
  ContractMethod: string

  /**
      * 合约场景id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContractSceneId: string

  /**
   * 用户信息
   */
  UserInfo: ContractUserInfo

  /**
   * 第三方渠道签约数据
   */
  ExternalContractData: string
}

/**
 * QueryTransferBatch请求参数结构体
 */
export interface QueryTransferBatchRequest {
  /**
      * 商户号。
示例值：129284394
      */
  MerchantId: string

  /**
      * 微信明细单号。
微信区分明细单返回的唯一标识。
示例值：1030000071100999991182020050700019480101
      */
  NeedQueryDetail: boolean

  /**
      * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
      */
  MerchantBatchNo?: string

  /**
      * 是否查询账单明细。
true-是；
false-否，默认否。
商户可选择是否查询指定状态的转账明细单，当转账批次单状态为“FINISHED”（已完成）时，才会返回满足条件的转账明细单。
示例值：true
      */
  BatchId?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  Profile?: string

  /**
      * 请求资源起始位置。
从0开始，默认值为0。
示例值：20
      */
  Offset?: number

  /**
      * 最大资源条数。
该次请求可返回的最大资源（转账明细单）条数，最小20条，最大100条，不传则默认20条。不足20条按实际条数返回
示例值：20
      */
  Limit?: number

  /**
      * 明细状态。
ALL：全部，需要同时查询转账成功喝失败的明细单；
SUCCESS：转账成功，只查询成功的明细单；
FAIL：转账失败，只查询转账失败的明细单。
示例值：FAIL
      */
  DetailStatus?: string
}

/**
 * CreateTransferBatch请求参数结构体
 */
export interface CreateTransferBatchRequest {
  /**
      * 商户号。
示例值：129284394
      */
  MerchantId: string

  /**
      * 转账明细列表。
发起批量转账的明细列表，最多三千笔
      */
  TransferDetails: Array<TransferDetailRequest>

  /**
      * 直连商户appId。
即商户号绑定的appid。
示例值：wxf636efh567hg4356
      */
  MerchantAppId: string

  /**
      * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
      */
  MerchantBatchNo: string

  /**
      * 批次名称。
批量转账的名称。
示例值：2019年1月深圳分部报销单
      */
  BatchName: string

  /**
      * 转账说明。
UTF8编码，最多32个字符。
示例值：2019年深圳分部报销单
      */
  BatchRemark: string

  /**
      * 转账总金额。
转账金额，单位为分。
示例值：4000000
      */
  TotalAmount: number

  /**
      * 转账总笔数。
一个转账批次最多允许发起三千笔转账。
示例值：200
      */
  TotalNum: number

  /**
      * 环境名。
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  Profile?: string
}

/**
 * ExecuteMemberTransaction返回参数结构体
 */
export interface ExecuteMemberTransactionResponse {
  /**
   * 请求类型
   */
  RequestType?: string

  /**
   * 银行流水号
   */
  FrontSequenceNumber?: string

  /**
      * 保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMessage?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 公司信息
 */
export interface OrganizationInfo {
  /**
   * 公司名称，个体工商户必输
   */
  OrganizationName?: string

  /**
   * 公司证件类型，个体工商户必输，证件类型仅支持73
   */
  OrganizationType?: string

  /**
   * 公司证件号码，个体工商户必输
   */
  OrganizationCode?: string

  /**
      * 法人名称，如果SubMchName不是法人，需要另外送入法人信息（企业必输）
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  LegalPersonName?: string

  /**
   * 法人证件类型，如果SubMchName不是法人，需要另外送入法人信息（企业必输）
   */
  LegalPersonIdType?: string

  /**
      * 法人证件号码，如果SubMchName不是法人，需要另外送入法人信息（企业必输）
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  LegalPersonIdCode?: string
}

/**
 * BindRelateAcctUnionPay请求参数结构体
 */
export interface BindRelateAcctUnionPayRequest {
  /**
   * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”（右侧）进行分隔）
   */
  TranNetMemberCode: string

  /**
   * STRING(150)，见证子账户的户名（首次绑定的情况下，此字段即为待绑定的提现账户的户名。非首次绑定的情况下，须注意带绑定的提现账户的户名须与留存在后台系统的会员户名一致）
   */
  MemberName: string

  /**
   * STRING(5)，会员证件类型（详情见“常见问题”）
   */
  MemberGlobalType: string

  /**
   * STRING(32)，会员证件号码
   */
  MemberGlobalId: string

  /**
   * STRING(50)，会员的待绑定账户的账号（提现的银行卡）
   */
  MemberAcctNo: string

  /**
   * STRING(10)，会员的待绑定账户的本他行类型（1: 本行; 2: 他行）
   */
  BankType: string

  /**
   * STRING(150)，会员的待绑定账户的开户行名称（若大小额行号不填则送超级网银号对应的银行名称，若填大小额行号则送大小额行号对应的银行名称）
   */
  AcctOpenBranchName: string

  /**
   * STRING(30)，会员的手机号（手机号须由长度为11位的数字构成）
   */
  Mobile: string

  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(20)，会员的待绑定账户的开户行的联行号（本他行类型为他行的情况下，此字段和下一个字段至少一个不为空）
   */
  CnapsBranchId?: string

  /**
   * STRING(20)，会员的待绑定账户的开户行的超级网银行号（本他行类型为他行的情况下，此字段和上一个字段至少一个不为空）
   */
  EiconBankBranchId?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * CreateAcct请求参数结构体
 */
export interface CreateAcctRequest {
  /**
   * 聚鑫平台分配的支付MidasAppId
   */
  MidasAppId: string

  /**
   * 业务平台的子商户ID，唯一
   */
  SubMchId: string

  /**
   * 子商户名称
   */
  SubMchName: string

  /**
   * 子商户地址
   */
  Address: string

  /**
      * 子商户联系人
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  Contact: string

  /**
      * 联系人手机号
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  Mobile: string

  /**
      * 邮箱 
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  Email: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
      * 子商户类型：
个人: personal
企业: enterprise
个体工商户: individual
缺省: enterprise
      */
  SubMchType?: string

  /**
   * 不填则默认子商户名称
   */
  ShortName?: string

  /**
      * 子商户会员类型：
general: 普通子账户
merchant: 商户子账户
缺省: general
      */
  SubMerchantMemberType?: string

  /**
      * 子商户密钥
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  SubMerchantKey?: string

  /**
      * 子商户私钥
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  SubMerchantPrivateKey?: string

  /**
      * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
      */
  EncryptType?: string

  /**
   * 银行生成的子商户账户，已开户的场景需要录入
   */
  SubAcctNo?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string

  /**
      * 店铺名称
企业、个体工商户必输
      */
  SubMerchantStoreName?: string

  /**
   * 公司信息
   */
  OrganizationInfo?: OrganizationInfo
}

/**
 * 批量转账明细实体
 */
export interface TransferDetailRequest {
  /**
      * 商家明细单号。
商户系统内部区分转账批次单下不同转账明细单的唯一标识，要求此参数只能由数字、大小写字母组成。
示例值：x23zy545Bd5436
      */
  MerchantDetailNo: string

  /**
      * 转账金额。
转账金额单位为分。
示例值：200000
      */
  TransferAmount: number

  /**
      * 转账备注。
单条转账备注（微信用户会收到该备注）。UTF8编码，最多32字符。
示例值：2020年4月报销
      */
  TransferRemark: string

  /**
      * 用户在直连商户下的唯一标识。
示例值：o-MYE42l80oelYMDE34nYD456Xoy
      */
  OpenId: string

  /**
      * 收款用户姓名。
收款方姓名。
示例值：张三
      */
  UserName: string
}

/**
 * ConfirmOrder请求参数结构体
 */
export interface ConfirmOrderRequest {
  /**
   * 分配给商户的AppId
   */
  MerchantAppId: string

  /**
   * 平台流水号。消费订单发起成功后，返回的平台唯一订单号。
   */
  OrderNo: string
}

/**
 * Refund返回参数结构体
 */
export interface RefundResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryAgentTaxPaymentBatch返回参数结构体
 */
export interface QueryAgentTaxPaymentBatchResponse {
  /**
   * 代理商完税证明批次信息
   */
  AgentTaxPaymentBatch: AgentTaxPaymentBatch

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAgentTaxPaymentInfos返回参数结构体
 */
export interface DeleteAgentTaxPaymentInfosResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回的合约信息
 */
export interface ReturnContractInfo {
  /**
   * 合约信息
   */
  ContractInfo: ContractInfo

  /**
   * 米大师内部生成的合约信息
   */
  ChannelReturnContractInfo: ChannelReturnContractInfo

  /**
   * 第三方渠道合约信息
   */
  ExternalReturnContractInfo: ExternalReturnContractInfo
}

/**
 * RegisterBillSupportWithdraw返回参数结构体
 */
export interface RegisterBillSupportWithdrawResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
      * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo?: string

  /**
      * String(22)，交易流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CnsmrSeqNo?: string

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryTransferResult返回参数结构体
 */
export interface QueryTransferResultResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功
   */
  ErrCode: string

  /**
   * 响应消息
   */
  ErrMessage: string

  /**
      * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: QueryTransferResultData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 聚鑫商户余额查询输出项
 */
export interface QueryItem {
  /**
   * 子商户账户
   */
  SubAcctNo: string

  /**
      * 子账户属性 
1：普通会员子账号 
2：挂账子账号 
3：手续费子账号 
4：利息子账号
5：平台担保子账号
      */
  SubAcctProperty: string

  /**
   * 业务平台的子商户Id，唯一
   */
  SubMchId: string

  /**
   * 子账户名称
   */
  SubAcctName: string

  /**
   * 账户可用余额
   */
  AcctAvailBal: string

  /**
   * 可提现金额
   */
  CashAmt: string

  /**
   * 维护日期 开户日期或修改日期
   */
  MaintenanceDate: string
}

/**
 * 场景信息
 */
export interface SceneInfo {
  /**
      * 语言代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  LocaleCode: string

  /**
      * 地区代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionCode: string

  /**
      * 用户IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserClientIp: string
}

/**
 * QueryContract返回参数结构体
 */
export interface QueryContractResponse {
  /**
   * 签约数据
   */
  ContractData: ResponseQueryContract

  /**
   * 请求处理信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 发票结果V2
 */
export interface CreateInvoiceResultV2 {
  /**
   * 发票ID
   */
  InvoiceId: string
}

/**
 * RegisterBehavior返回参数结构体
 */
export interface RegisterBehaviorResponse {
  /**
      * 补录是否成功标志
功能标志为2时存在。
S：成功
F：失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReplenishSuccessFlag: string

  /**
      * 签约信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegisterInfo: RegisterInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询发票结果数据
 */
export interface QueryInvoiceResultData {
  /**
   * 订单号
   */
  OrderId: string

  /**
   * 业务开票号
   */
  OrderSn: string

  /**
   * 发票状态
   */
  Status: number

  /**
   * 开票描述
   */
  Message: string

  /**
   * 开票日期
   */
  TicketDate: string

  /**
   * 发票号码
   */
  TicketSn: string

  /**
   * 发票代码
   */
  TicketCode: string

  /**
   * 检验码
   */
  CheckCode: string

  /**
   * 含税金额(元)
   */
  AmountWithTax: string

  /**
   * 不含税金额(元)
   */
  AmountWithoutTax: string

  /**
   * 税额(元)
   */
  TaxAmount: string

  /**
   * 是否被红冲
   */
  IsRedWashed: number

  /**
   * pdf地址
   */
  PdfUrl: string

  /**
      * png地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageUrl: string
}

/**
 * 智能代发-单笔代发转账对账单返回数据
 */
export interface QueryBillDownloadURLData {
  /**
      * 统一对账单下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  BillDownloadURL: string

  /**
      * 渠道原始对账单下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalBillDownloadURL: string
}

/**
 * QuerySingleTransactionStatus返回参数结构体
 */
export interface QuerySingleTransactionStatusResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(2)，记账标志（记账标志。1: 登记挂账; 2: 支付; 3: 提现; 4: 清分; 5: 下单预支付; 6: 确认并付款; 7: 退款; 8: 支付到平台; N: 其他）
注意：此字段可能返回 null，表示取不到有效值。
      */
  BookingFlag?: string

  /**
      * STRING(32)，交易状态（0: 成功; 1: 失败; 2: 待确认; 5: 待处理; 6: 处理中。0和1是终态，2、5、6是中间态，其中2是特指提现后待确认提现是否成功，5是银行收到交易等待处理，6是交易正在处理）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranStatus?: string

  /**
      * STRING(20)，交易金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranAmt?: string

  /**
      * STRING(8)，交易日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranDate?: string

  /**
      * STRING(20)，交易时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranTime?: string

  /**
      * STRING(50)，转入子账户账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  InSubAcctNo?: string

  /**
      * STRING(50)，转出子账户账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutSubAcctNo?: string

  /**
      * STRING(300)，失败信息（当提现失败时，返回交易失败原因）
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailMsg?: string

  /**
      * STRING(50)，原前置流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OldTranFrontSeqNo?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryAcctInfo请求参数结构体
 */
export interface QueryAcctInfoRequest {
  /**
   * 聚鑫平台分配的支付MidasAppId
   */
  MidasAppId: string

  /**
   * 业务平台的子商户Id，唯一
   */
  SubMchId: string

  /**
   * 由平台客服提供的计费密钥Id
   */
  MidasSecretId: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
      * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
      */
  EncryptType?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * DescribeChargeDetail返回参数结构体
 */
export interface DescribeChargeDetailResponse {
  /**
   * 交易状态 （0：成功，1：失败，2：异常,3:冲正，5：待处理）
   */
  OrderStatus?: string

  /**
   * 交易金额
   */
  OrderAmount?: string

  /**
   * 佣金费
   */
  CommissionAmount?: string

  /**
   * 支付方式  0-冻结支付 1-普通支付
   */
  PayMode?: string

  /**
   * 交易日期
   */
  OrderDate?: string

  /**
   * 交易时间
   */
  OrderTime?: string

  /**
   * 订单实际转入见证子账户的名称
   */
  OrderActualInSubAccountName?: string

  /**
   * 订单实际转入见证子账户的帐号
   */
  OrderActualInSubAccountNumber?: string

  /**
   * 订单实际转入见证子账户的帐号
   */
  OrderInSubAccountName?: string

  /**
   * 订单转入见证子账户的帐号
   */
  OrderInSubAccountNumber?: string

  /**
   * 银行流水号
   */
  FrontSequenceNumber?: string

  /**
   * 当充值失败时，返回交易失败原因
   */
  FailMessage?: string

  /**
   * 请求类型
   */
  RequestType?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 提交申报材料结果
 */
export interface ApplyDeclareData {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 第三方指令编号
   */
  TransactionId: string

  /**
   * 受理状态
   */
  Status: string

  /**
   * 申报流水号
   */
  DeclareId: string

  /**
      * 原申报流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalDeclareId: string

  /**
   * 付款人ID
   */
  PayerId: string
}

/**
 * 批量转账查询返回批次明细实体
 */
export interface TransferDetailResponse {
  /**
      * 商家明细单号。
商户系统内部的商家明细单号
示例值：plfk2020042013
      */
  MerchantDetailNo: string

  /**
      * 微信明细单号。
微信区分明细单返回的唯一标识。
示例值：1030000071100999991182020050700019480001
      */
  DetailId: string

  /**
      * 明细状态。
PROCESSING：转账中，正在处理，结果未明；
SUCCESS：转账成功；
FAIL：转账失败，需要确认失败原因以后，再决定是否重新发起地该笔明细的转账。
示例值：SUCCESS
      */
  DetailStatus: string
}

/**
 * 交易信息
 */
export interface TranItem {
  /**
      * STRING(50)，资金汇总账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FundSummaryAcctNo: string

  /**
      * STRING(50)，见证子账户的账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubAcctNo: string

  /**
      * STRING(32)，交易网会员代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranNetMemberCode: string

  /**
      * STRING(150)，会员名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemberName: string

  /**
      * STRING(5)，会员证件类型（详情见“常见问题”）
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemberGlobalType: string

  /**
      * STRING(32)，会员证件号码
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemberGlobalId: string

  /**
      * STRING(50)，会员绑定账户的账号（提现的银行卡）
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemberAcctNo: string

  /**
      * STRING(10)，会员绑定账户的本他行类型（1: 本行; 2: 他行）
注意：此字段可能返回 null，表示取不到有效值。
      */
  BankType: string

  /**
      * STRING(150)，会员绑定账户的开户行名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  AcctOpenBranchName: string

  /**
      * STRING(20)，会员绑定账户的开户行的联行号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CnapsBranchId: string

  /**
      * STRING(20)，会员绑定账户的开户行的超级网银行号
注意：此字段可能返回 null，表示取不到有效值。
      */
  EiconBankBranchId: string

  /**
      * STRING(30)，会员的手机号
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mobile: string
}

/**
 * 银行在途清算结果信息
 */
export interface ClearItem {
  /**
      * STRING(8)，日期（格式: 20190101）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Date: string

  /**
      * STRING(40)，子账号类型（子帐号类型。1: 普通会员子账号; 2: 挂账子账号; 3: 手续费子账号; 4: 利息子账号; 5: 平台担保子账号; 7: 在途; 8: 理财购买子帐号; 9: 理财赎回子帐号; 10: 平台子拥有结算子帐号）
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubAcctType: string

  /**
      * STRING(3)，对账状态（0: 成功; 1: 失败）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReconcileStatus: string

  /**
      * STRING(300)，对账返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReconcileReturnMsg: string

  /**
      * STRING(20)，清算状态（0: 成功; 1: 失败; 2: 异常; 3: 待处理）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClearingStatus: string

  /**
      * STRING(2)，清算返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClearingReturnMsg: string

  /**
      * STRING(300)，待清算总金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalAmt: string
}

/**
 * 商户管理端结果
 */
export interface MerchantManagementResult {
  /**
   * 总数。
   */
  Total: number

  /**
   * 商户列表。
   */
  List: Array<MerchantManagementList>
}

/**
 * 账户信息
 */
export interface Acct {
  /**
      * STRING(50)，见证子账户的账号（可重复）
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubAcctNo: string

  /**
      * STRING(10)，见证子账户的属性（可重复。1: 普通会员子账号; 2: 挂账子账号; 3: 手续费子账号; 4: 利息子账号; 5: 平台担保子账号）
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubAcctProperty: string

  /**
      * STRING(32)，交易网会员代码（可重复）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranNetMemberCode: string

  /**
      * STRING(150)，见证子账户的名称（可重复）
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubAcctName: string

  /**
      * STRING(20)，见证子账户可用余额（可重复）
注意：此字段可能返回 null，表示取不到有效值。
      */
  AcctAvailBal: string

  /**
      * STRING(20)，见证子账户可提现金额（可重复。开户日期或修改日期）
注意：此字段可能返回 null，表示取不到有效值。
      */
  CashAmt: string

  /**
      * STRING(8)，维护日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaintenanceDate: string
}

/**
 * QueryBankTransactionDetails返回参数结构体
 */
export interface QueryBankTransactionDetailsResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultNum?: string

  /**
      * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartRecordNo?: string

  /**
      * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndFlag?: string

  /**
      * STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalNum?: string

  /**
      * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranItemArray?: Array<TransactionItem>

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryTransferResult请求参数结构体
 */
export interface QueryTransferResultRequest {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 申请商户号的appid或者商户号绑定的appid
   */
  MerchantAppId: string

  /**
      * 1、 微信企业付款 
2、 支付宝转账 
3、 平安银企直联代发转账
      */
  TransferType: number

  /**
   * 交易流水流水号（与 OrderId 不能同时为空）
   */
  TradeSerialNo?: string

  /**
   * 订单号（与 TradeSerialNo 不能同时为空）
   */
  OrderId?: string

  /**
   * 接入环境。沙箱环境填sandbox。
   */
  Profile?: string
}

/**
 * SyncContractData返回参数结构体
 */
export interface SyncContractDataResponse {
  /**
   * 请求处理信息
   */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSinglePayment接口返回响应
 */
export interface CreateSinglePaymentData {
  /**
   * 平台交易流水号，唯一
   */
  TradeSerialNo: string
}

/**
 * 对接账户余额查询数据
 */
export interface QueryMerchantBalanceData {
  /**
   * 余额币种
   */
  Currency: string

  /**
   * 账户余额
   */
  Balance: string

  /**
   * 商户ID
   */
  MerchantId: string
}

/**
 * QueryMemberTransaction请求参数结构体
 */
export interface QueryMemberTransactionRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(2)，功能标志（1: 下单预支付; 2: 确认并付款; 3: 退款; 6: 直接支付T+1; 9: 直接支付T+0）
   */
  FunctionFlag: string

  /**
   * STRING(50)，转出方的见证子账户的账号（付款方）
   */
  OutSubAcctNo: string

  /**
   * STRING(32)，转出方的交易网会员代码
   */
  OutMemberCode: string

  /**
   * STRING(150)，转出方的见证子账户的户名（户名是绑卡时上送的账户名称，如果未绑卡，就送OpenCustAcctId接口上送的用户昵称UserNickname）
   */
  OutSubAcctName: string

  /**
   * STRING(50)，转入方的见证子账户的账号（收款方）
   */
  InSubAcctNo: string

  /**
   * STRING(32)，转入方的交易网会员代码
   */
  InMemberCode: string

  /**
   * STRING(150)，转入方的见证子账户的户名（户名是绑卡时上送的账户名称，如果未绑卡，就送OpenCustAcctId接口上送的用户昵称UserNickname）
   */
  InSubAcctName: string

  /**
   * STRING(20)，交易金额
   */
  TranAmt: string

  /**
   * STRING(20)，交易费用（平台收取交易费用）
   */
  TranFee: string

  /**
   * STRING(20)，交易类型（01: 普通交易）
   */
  TranType: string

  /**
   * STRING(3)，币种（默认: RMB）
   */
  Ccy: string

  /**
   * STRING(50)，订单号（功能标志为1,2,3时必输）
   */
  OrderNo?: string

  /**
   * STRING(500)，订单内容
   */
  OrderContent?: string

  /**
   * STRING(300)，备注（建议可送订单号，可在对账文件的备注字段获取到）
   */
  Remark?: string

  /**
   * STRING(1027)，保留域（若需短信验证码则此项必输短信指令号）
   */
  ReservedMsg?: string

  /**
   * STRING(300)，网银签名（若需短信验证码则此项必输）
   */
  WebSign?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * UploadTaxPayment返回参数结构体
 */
export interface UploadTaxPaymentResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询汇率结果
 */
export interface QueryExchangerateResult {
  /**
   * 错误码
   */
  Code: string

  /**
   * 查询汇率数据数组
   */
  Data: Array<QueryExchangerateData>
}

/**
 * QueryBillDownloadURL返回参数结构体
 */
export interface QueryBillDownloadURLResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功
   */
  ErrCode: string

  /**
   * 响应消息
   */
  ErrMessage: string

  /**
      * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: QueryBillDownloadURLData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRedInvoiceV2请求参数结构体
 */
export interface CreateRedInvoiceV2Request {
  /**
   * 开票平台ID
   */
  InvoicePlatformId: number

  /**
   * 订单号
   */
  OrderId: string

  /**
   * 接入环境。沙箱环境填 sandbox。
   */
  Profile?: string

  /**
   * 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道
   */
  InvoiceChannel?: number
}

/**
 * QueryOutwardOrder请求参数结构体
 */
export interface QueryOutwardOrderRequest {
  /**
   * 对接方汇出指令编号
   */
  TransactionId: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * 交易明细信息
 */
export interface TransactionItem {
  /**
      * STRING(2)，记账标志（1: 转出; 2: 转入）
注意：此字段可能返回 null，表示取不到有效值。
      */
  BookingFlag: string

  /**
      * STRING(32)，交易状态（0: 成功）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranStatus: string

  /**
      * STRING(20)，交易金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranAmt: string

  /**
      * STRING(8)，交易日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranDate: string

  /**
      * STRING(20)，交易时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranTime: string

  /**
      * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo: string

  /**
      * STRING(20)，记账类型（详情见“常见问题”）
注意：此字段可能返回 null，表示取不到有效值。
      */
  BookingType: string

  /**
      * STRING(50)，转入见证子账户的帐号
注意：此字段可能返回 null，表示取不到有效值。
      */
  InSubAcctNo: string

  /**
      * STRING(50)，转出见证子账户的帐号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutSubAcctNo: string

  /**
      * STRING(300)，备注（返回交易订单号）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string
}

/**
 * QueryMerchantBalance请求参数结构体
 */
export interface QueryMerchantBalanceRequest {
  /**
   * 余额币种
   */
  Currency: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * CreateAcct返回参数结构体
 */
export interface CreateAcctResponse {
  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
   * 银行生成的子商户账户
   */
  SubAcctNo: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeChargeDetail请求参数结构体
 */
export interface DescribeChargeDetailRequest {
  /**
   * 请求类型
   */
  RequestType: string

  /**
   * 商户号
   */
  MerchantCode: string

  /**
   * 支付渠道
   */
  PayChannel: string

  /**
   * 子渠道
   */
  PayChannelSubId: number

  /**
   * 原始交易订单号或者流水号
   */
  OrderId: string

  /**
   * 父账户账号，资金汇总账号
   */
  BankAccountNumber: string

  /**
   * 收单渠道类型
   */
  AcquiringChannelType: string

  /**
   * 平台短号(银行分配)
   */
  PlatformShortNumber: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
   * 交易流水号
   */
  TransSequenceNumber: string

  /**
   * Midas环境参数
   */
  MidasEnvironment: string

  /**
   * 保留域
   */
  ReservedMessage?: string
}

/**
 * RevResigterBillSupportWithdraw返回参数结构体
 */
export interface RevResigterBillSupportWithdrawResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo?: string

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindAcct返回参数结构体
 */
export interface BindAcctResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrder返回参数结构体
 */
export interface CreateOrderResponse {
  /**
   * 进件成功后返给商户方的AppId。
   */
  MerchantAppId: string

  /**
   * 商户流水号，商户唯一订单号由字母或数字组成。
   */
  TraceNo: string

  /**
   * 平台流水号，若下单成功则返回。
   */
  OrderNo: string

  /**
   * 支付页面跳转地址，若下单成功则返回。
   */
  PayUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRedInvoice返回参数结构体
 */
export interface CreateRedInvoiceResponse {
  /**
   * 红冲结果
   */
  Result: CreateRedInvoiceResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询汇率数据
 */
export interface QueryExchangerateData {
  /**
   * 汇率
   */
  Rate: string

  /**
   * 源币种
   */
  SourceCurrency: string

  /**
   * 目的币种
   */
  TargetCurrency: string

  /**
   * 汇率时间
   */
  RateTime: string

  /**
   * 基准币种
   */
  BaseCurrency: string
}

/**
 * 红票结果V2
 */
export interface CreateRedInvoiceResultV2 {
  /**
   * 红票ID
   */
  InvoiceId: string
}

/**
 * QueryMerchantOrder请求参数结构体
 */
export interface QueryMerchantOrderRequest {
  /**
   * 进件成功后返给商户方的AppId。
   */
  MerchantAppId: string

  /**
   * 平台流水号。平台唯一订单号。
   */
  OrderNo: string
}

/**
 * 智能代发-单笔代发转账查询接口返回内容
 */
export interface QueryTransferResultData {
  /**
   * 平台交易流水号
   */
  TradeSerialNo: string

  /**
   * 订单号
   */
  OrderId: string

  /**
      * 交易状态。
0 处理中  
1 提交成功 
2 交易成功 
3 交易失败 
4 未知渠道异常 
99 未知系统异常
      */
  TradeStatus: number

  /**
      * 业务备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string
}

/**
 * QueryTransferDetail返回参数结构体
 */
export interface QueryTransferDetailResponse {
  /**
      * 商户号。
示例值：19300009329
      */
  MerchantId?: string

  /**
      * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
      */
  MerchantBatchNo?: string

  /**
      * 微信批次单号。
微信商家转账系统返回的唯一标识。
示例值：1030000071100999991182020050700019480001
      */
  BatchId?: string

  /**
      * 商家明细单号。
商户系统内部的商家明细单号
示例值：plfk2020042013
      */
  MerchantDetailNo?: string

  /**
      * 微信明细单号。
微信区分明细单返回的唯一标识。
示例值：1030000071100999991182020050700019480001
      */
  DetailId?: string

  /**
      * 明细状态。
PROCESSING：转账中，正在处理，结果未明；
SUCCESS：转账成功；
FAIL：转账失败，需要确认失败原因以后，再决定是否重新发起地该笔明细的转账。
示例值：SUCCESS
      */
  DetailStatus?: string

  /**
      * 转账金额。
单位为分。
示例值：200
      */
  TransferAmount?: number

  /**
      * 失败原因。
如果转账失败则有失败原因
ACCOUNT_FROZEN：账户冻结
REAL_NAME_CHECK_FAIL：用户未实名
NAME_NOT_CORRECT：用户姓名校验失败
OPENID_INVALID：Openid校验失败
TRANSFER_QUOTA_EXCEED：超过用户单笔收款额度
DAY_RECEIVED_QUOTA_EXCEED：超过用户单日收款额度
MONTH_RECEIVED_QUOTA_EXCEED：超过用户单月收款额度
DAY_RECEIVED_COUNT_EXCEED：超过用户单日收款次数
PRODUCT_AUTH_CHECK_FAIL：产品权限校验失败
OVERDUE_CLOSE：转账关闭
ID_CARD_NOT_CORRECT：用户身份证校验失败
ACCOUNT_NOT_EXIST：用户账户不存在
TRANSFER_RISK：转账存在风险
示例值：ACCOUNT_FROZEN
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailReason?: string

  /**
      * 转账发起时间。
遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
注意：此字段可能返回 null，表示取不到有效值。
      */
  InitiateTime?: string

  /**
      * 转账更新时间。
遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
      * 用户名。
示例值：张三
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName?: string

  /**
      * 转账备注。
单条转账备注（微信用户会收到该备注）。UTF8编码，最多32字符。
示例值：2020年4月报销
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferRemark?: string

  /**
      * 商家绑定公众号APPID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MerchantAppId?: string

  /**
      * 用户openId。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OpenId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadExternalAnchorInfo请求参数结构体
 */
export interface UploadExternalAnchorInfoRequest {
  /**
   * 主播Id
   */
  AnchorId: string

  /**
   * 身份证正面图片下载链接
   */
  IdCardFront?: string

  /**
   * 身份证反面图片下载链接
   */
  IdCardReverse?: string
}

/**
 * BindRelateAccReUnionPay请求参数结构体
 */
export interface BindRelateAccReUnionPayRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”（右侧）进行分隔）
   */
  TranNetMemberCode: string

  /**
   * STRING(50)，会员的待绑定账户的账号（即 BindRelateAcctUnionPay接口中的“会员的待绑定账户的账号”）
   */
  MemberAcctNo: string

  /**
   * STRING(20)，短信验证码（即 BindRelateAcctUnionPay接口中的手机所接收到的短信验证码）
   */
  MessageCheckCode: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * CreateCustAcctId返回参数结构体
 */
export interface CreateCustAcctIdResponse {
  /**
      * STRING(50)，见证子账户的账号（平台需要记录下来，后续所有接口交互都会用到）
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubAcctNo?: string

  /**
      * STRING(1027)，保留域（需要开通智能收款，此处返回智能收款账号，正常情况下返回空）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryMerchantBalance返回参数结构体
 */
export interface QueryMerchantBalanceResponse {
  /**
   * 对接方账户余额查询结果
   */
  Result: QueryMerchantBalanceResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 银企直连-单笔支付响应结果
 */
export interface CreateSinglePayResult {
  /**
   * 受理状态（S：处理成功；F：处理失败）
   */
  HandleStatus: string

  /**
   * 受理状态描述
   */
  HandleMsg: string

  /**
      * 业务流水号，历史唯一
注意：此字段可能返回 null，表示取不到有效值。
      */
  SerialNo: string

  /**
      * 银行指令流水
注意：此字段可能返回 null，表示取不到有效值。
      */
  BankSerialNo: string

  /**
      * 付款状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayStatus: string

  /**
      * 银行原始返回码
注意：此字段可能返回 null，表示取不到有效值。
      */
  BankRetCode: string

  /**
      * 银行原始返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  BankRetMsg: string
}

/**
 * QueryAcctInfo返回参数结构体
 */
export interface QueryAcctInfoResponse {
  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId?: string

  /**
   * 子商户名称
   */
  SubMchName?: string

  /**
      * 子商户类型：
个人: personal
企业：enterprise
缺省： enterprise
      */
  SubMchType?: string

  /**
   * 不填则默认子商户名称
   */
  ShortName?: string

  /**
   * 子商户地址
   */
  Address?: string

  /**
      * 子商户联系人子商户联系人
<敏感信息>
      */
  Contact?: string

  /**
      * 联系人手机号
<敏感信息>
      */
  Mobile?: string

  /**
      * 邮箱 
<敏感信息>
      */
  Email?: string

  /**
   * 子商户id
   */
  SubMchId?: string

  /**
   * 子账户
   */
  SubAcctNo?: string

  /**
      * 子商户会员类型：
general:普通子账户
merchant:商户子账户
缺省： general
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubMerchantMemberType?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MigrateOrderRefundQuery请求参数结构体
 */
export interface MigrateOrderRefundQueryRequest {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 支付渠道，ALIPAY对应支付宝渠道；UNIONPAY对应银联渠道
   */
  PayChannel: string

  /**
   * 退款订单号，最长64位，仅支持数字、 字母
   */
  RefundOrderId: string

  /**
   * 退款流水号
   */
  TradeSerialNo: string

  /**
   * 接入环境。沙箱环境填 sandbox。
   */
  Profile?: string
}

/**
 * QueryAgentTaxPaymentBatch请求参数结构体
 */
export interface QueryAgentTaxPaymentBatchRequest {
  /**
   * 批次号
   */
  BatchNum: number

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * QueryMerchant请求参数结构体
 */
export interface QueryMerchantRequest {
  /**
   * 进件成功后返给商户方的 AppId
   */
  MerchantAppId: string
}

/**
 * 付款人查询结果
 */
export interface QueryPayerinfoResult {
  /**
   * 错误码
   */
  Code: string

  /**
   * 付款人查询数据
   */
  Data: QueryPayerinfoData
}

/**
 * 转账充值明细信息
 */
export interface TransferItem {
  /**
      * STRING(10)，入账类型（02: 会员充值; 03: 资金挂账）
注意：此字段可能返回 null，表示取不到有效值。
      */
  InAcctType: string

  /**
      * STRING(32)，交易网会员代码
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranNetMemberCode: string

  /**
      * STRING(50)，见证子帐户的帐号
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubAcctNo: string

  /**
      * STRING(20)，入金金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranAmt: string

  /**
      * STRING(50)，入金账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  InAcctNo: string

  /**
      * STRING(150)，入金账户名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  InAcctName: string

  /**
      * STRING(3)，币种
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ccy: string

  /**
      * STRING(8)，会计日期（即银行主机记账日期）
注意：此字段可能返回 null，表示取不到有效值。
      */
  AccountingDate: string

  /**
      * STRING(150)，银行名称（付款账户银行名称）
注意：此字段可能返回 null，表示取不到有效值。
      */
  BankName: string

  /**
      * STRING(300)，转账备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo: string
}

/**
 * QueryInvoiceV2请求参数结构体
 */
export interface QueryInvoiceV2Request {
  /**
   * 开票平台ID
   */
  InvoicePlatformId: number

  /**
   * 订单号
   */
  OrderId: string

  /**
      * 发票种类：
0：蓝票
1：红票【该字段默认为0， 如果需要查询红票信息，本字段必须传1，否则可能查询不到需要的发票信息】。
      */
  IsRed?: number

  /**
   * 接入环境。沙箱环境填sandbox。
   */
  Profile?: string

  /**
   * 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道
   */
  InvoiceChannel?: number

  /**
   * 当渠道为线下渠道时，必填
   */
  SellerTaxpayerNum?: string
}

/**
 * QuerySinglePaymentResult请求参数结构体
 */
export interface QuerySinglePaymentResultRequest {
  /**
   * 转账类型
   */
  TransferType: number

  /**
   * 交易流水流水号，唯一
   */
  TradeSerialNo?: string

  /**
   * 订单号，与TradeSerialNo不能同时为空
   */
  OrderId?: string
}

/**
 * 线下查票-订单明细
 */
export interface OrderItem {
  /**
      * 明细金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  AmountHasTax: number

  /**
      * 优惠金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  Discount: number

  /**
      * 商品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 型号
注意：此字段可能返回 null，表示取不到有效值。
      */
  Models: string

  /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
      * 数量单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  Unit: string

  /**
      * 默认“0”
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 单价
注意：此字段可能返回 null，表示取不到有效值。
      */
  Price: number

  /**
      * 商品编码
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaxCode: string
}

/**
 * CreateSinglePay请求参数结构体
 */
export interface CreateSinglePayRequest {
  /**
   * 业务流水号，历史唯一
   */
  SerialNumber: string

  /**
   * 付方账户号
   */
  PayAccountNumber: string

  /**
   * 付方账户名称
   */
  PayAccountName: string

  /**
   * 金额
   */
  Amount: number

  /**
   * 收方账户号
   */
  RecvAccountNumber: string

  /**
   * 收方账户名称
   */
  RecvAccountName: string

  /**
   * 付方账户CNAPS号
   */
  PayBankCnaps?: string

  /**
   * 付方账户银行大类，PayBankCnaps为空时必传（见常见问题-银企直连银行类型）
   */
  PayBankType?: string

  /**
   * 付方账户银行所在省，PayBankCnaps为空时必传（见常见问题-银企直连省份枚举信息）
   */
  PayBankProvince?: string

  /**
   * 付方账户银行所在地区，PayBankCnaps为空时必传（见常见问题-银企直连城市枚举信息）
   */
  PayBankCity?: string

  /**
   * 收方账户CNAPS号
   */
  RecvBankCnaps?: string

  /**
   * 收方账户银行大类，RecvBankCnaps为空时必传（见常见问题-银企直连银行类型）
   */
  RecvBankType?: string

  /**
   * 收方账户银行所在省，RecvBankCnaps为空时必传（见常见问题-银企直连省份枚举信息）
   */
  RecvBankProvince?: string

  /**
   * 收方账户银行所在地区，RecvBankCnaps为空时必传（见常见问题-银企直连城市枚举信息）
   */
  RecvBankCity?: string

  /**
   * 收款方证件类型（见常见问题-银企直连证件类型枚举信息）
   */
  RecvCertType?: string

  /**
   * 收款方证件号码
   */
  RecvCertNo?: string

  /**
   * 摘要信息
   */
  Summary?: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * QueryTransferBatch返回参数结构体
 */
export interface QueryTransferBatchResponse {
  /**
      * 商户号。
示例值：19300009329
      */
  MerchantId?: string

  /**
      * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
      */
  MerchantBatchNo?: string

  /**
      * 微信批次单号。
微信商家转账系统返回的唯一标识。
示例值：1030000071100999991182020050700019480001
      */
  BatchId?: string

  /**
      * 直连商户appId。
商户号绑定的appid。
示例值：wxf636efh567hg4356
      */
  MerchantAppId?: string

  /**
      * 批次状态。
ACCEPTED:已受理，批次已受理成功，若发起批量转账的30分钟后，转账批次单仍处于该状态，可能原因是商户账户余额不足等。商户可查询账户资金流水，若该笔转账批次单的扣款已经发生，则表示批次已经进入转账中，请再次查单确认；
PROCESSING:转账中，已开始处理批次内的转账明细单；
FINISHED:已完成，批次内的所有转账明细单都已处理完成；
CLOSED:已关闭，可查询具体的批次关闭原因确认；
示例值：ACCEPTED
      */
  BatchStatus?: string

  /**
      * 批次关闭原因。
如果批次单状态为“CLOSED”（已关闭），则有关闭原因；
MERCHANT_REVOCATION：商户主动撤销；
OVERDUE_CLOSE：系统超时关闭。
示例值：OVERDUE_CLOSE
注意：此字段可能返回 null，表示取不到有效值。
      */
  CloseReason?: string

  /**
      * 转账总金额。
转账金额，单位为分。
示例值：4000000
      */
  TotalAmount?: number

  /**
      * 转账总笔数。
一个转账批次最多允许发起三千笔转账。
示例值：200
      */
  TotalNum?: number

  /**
      * 批次受理成功时返回，遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime?: string

  /**
      * 批次最近一次更新时间，遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
      * 转账成功金额。
转账成功的金额，单位为分，可能随时变化。
示例值：4000000
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessAmount?: number

  /**
      * 转账成功的笔数。
可能随时变化。
示例值：200
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessNum?: number

  /**
      * 转账失败金额。
转账失败的金额，单位为分，可能随时变化。
示例值：4000000
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailAmount?: number

  /**
      * 转账失败笔数。
可能随时变化。
示例值：200
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailNum?: number

  /**
      * 转账明细列表。
返回明细详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferDetails?: Array<TransferDetailResponse>

  /**
      * 批次类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchType?: string

  /**
      * 批次名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchName?: string

  /**
      * 批次标注。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchRemark?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 线下查票-订单信息
 */
export interface Order {
  /**
      * 含税金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  AmountHasTax: number

  /**
      * 优惠金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  Discount: number

  /**
      * 销方名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SellerName: string

  /**
      * 发票类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  InvoiceType: number

  /**
      * 默认“”
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 支付金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  Amount: number

  /**
      * 下单日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrderDate: string

  /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrderId: string

  /**
      * 门店号
注意：此字段可能返回 null，表示取不到有效值。
      */
  StoreNo: string

  /**
      * 明细
注意：此字段可能返回 null，表示取不到有效值。
      */
  Items: Array<OrderItem>
}

/**
 * RegisterBill返回参数结构体
 */
export interface RegisterBillResponse {
  /**
   * 银行流水号
   */
  FrontSeqNo?: string

  /**
   * 保留字段
   */
  ReservedMessage?: string

  /**
   * 请求类型
   */
  RequestType?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WithdrawCashMembership请求参数结构体
 */
export interface WithdrawCashMembershipRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(150)，交易网名称（市场名称）
   */
  TranWebName: string

  /**
   * STRING(5)，会员证件类型（详情见“常见问题”）
   */
  MemberGlobalType: string

  /**
   * STRING(32)，会员证件号码
   */
  MemberGlobalId: string

  /**
   * STRING(32)，交易网会员代码
   */
  TranNetMemberCode: string

  /**
   * STRING(150)，会员名称
   */
  MemberName: string

  /**
   * STRING(50)，提现账号（银行卡）
   */
  TakeCashAcctNo: string

  /**
   * STRING(150)，出金账户名称（银行卡户名）
   */
  OutAmtAcctName: string

  /**
   * STRING(3)，币种（默认为RMB）
   */
  Ccy: string

  /**
   * STRING(20)，可提现金额
   */
  CashAmt: string

  /**
   * STRING(300)，备注（建议可送订单号，可在对账文件的备注字段获取到）
   */
  Remark?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(300)，网银签名
   */
  WebSign?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * ApplyOutwardOrder请求参数结构体
 */
export interface ApplyOutwardOrderRequest {
  /**
   * 对接方汇出指令编号
   */
  TransactionId: string

  /**
   * 定价币种
   */
  PricingCurrency: string

  /**
   * 源币种
   */
  SourceCurrency: string

  /**
   * 目的币种
   */
  TargetCurrency: string

  /**
   * 收款人类型（银行卡填"BANK_ACCOUNT"）
   */
  PayeeType: string

  /**
   * 收款人账号
   */
  PayeeAccount: string

  /**
   * 源币种金额
   */
  SourceAmount?: number

  /**
   * 目的金额
   */
  TargetAmount?: number

  /**
   * 收款人姓名（PayeeType为"BANK_COUNT"时必填）
   */
  PayeeName?: string

  /**
   * 收款人地址（PayeeType为"BANK_COUNT"时必填）
   */
  PayeeAddress?: string

  /**
      * 收款人银行账号类型（PayeeType为"BANK_COUNT"时必填）
个人填"INDIVIDUAL"
企业填"CORPORATE"
      */
  PayeeBankAccountType?: string

  /**
   * 收款人国家或地区编码（PayeeType为"BANK_COUNT"时必填）
   */
  PayeeCountryCode?: string

  /**
   * 收款人开户银行名称（PayeeType为"BANK_COUNT"时必填）
   */
  PayeeBankName?: string

  /**
   * 收款人开户银行地址（PayeeType为"BANK_COUNT"时必填）
   */
  PayeeBankAddress?: string

  /**
   * 收款人开户银行所在国家或地区编码（PayeeType为"BANK_COUNT"时必填）
   */
  PayeeBankDistrict?: string

  /**
   * 收款银行SwiftCode（PayeeType为"BANK_COUNT"时必填）
   */
  PayeeBankSwiftCode?: string

  /**
   * 收款银行国际编码类型
   */
  PayeeBankType?: string

  /**
   * 收款银行国际编码
   */
  PayeeBankCode?: string

  /**
   * 收款人附言
   */
  ReferenceForBeneficiary?: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * CreatePayMerchant返回参数结构体
 */
export interface CreatePayMerchantResponse {
  /**
   * 分配给商户的 AppId。该 AppId 为后续各项 交易的商户标识。
   */
  MerchantAppId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateContract返回参数结构体
 */
export interface TerminateContractResponse {
  /**
   * 解约数据
   */
  ContractTerminateData: ResponseTerminateContract

  /**
      * 请求处理信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Msg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RechargeByThirdPay返回参数结构体
 */
export interface RechargeByThirdPayResponse {
  /**
      * 保留字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMessage?: string

  /**
      * 银行流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSequenceNumber?: string

  /**
   * 请求类型
   */
  RequestType?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckAmount请求参数结构体
 */
export interface CheckAmountRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”(右侧)进行分隔）
   */
  TranNetMemberCode: string

  /**
   * STRING(50)，会员的待绑定账户的账号（即 BindRelateAcctSmallAmount接口中的“会员的待绑定账户的账号”）
   */
  TakeCashAcctNo: string

  /**
   * STRING(20)，鉴权验证金额（即 BindRelateAcctSmallAmount接口中的“会员的待绑定账户收到的验证金额。原小额转账鉴权方式为来账鉴权的情况下此字段须赋值为0.00）
   */
  AuthAmt: string

  /**
   * STRING(3)，币种（默认为RMB）
   */
  Ccy: string

  /**
   * STRING(1027)，原小额转账方式（1: 往账鉴权，此为默认值; 2: 来账鉴权）
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * 创建商户结果数据
 */
export interface CreateMerchantResultData {
  /**
   * 企业名称
   */
  TaxpayerName: string

  /**
   * 请求流水号
   */
  SerialNo: string

  /**
   * 纳税号
   */
  TaxpayerNum: string
}

/**
 * 代理商完税证明批次信息
 */
export interface AgentTaxPaymentBatch {
  /**
   * 状态消息
   */
  StatusMsg: string

  /**
   * 批次号
   */
  BatchNum: number

  /**
   * 录入记录的条数
   */
  InfoNum: number

  /**
   * 源电子凭证下载地址
   */
  RawElectronicCertUrl: string

  /**
   * 代理商账号
   */
  AgentId: string

  /**
   * 文件名
   */
  FileName: string

  /**
   * 状态码。0表示下载成功
   */
  StatusCode: number

  /**
   * 渠道号
   */
  Channel: number

  /**
   * 0-视同，1-个体工商户
   */
  Type: number
}

/**
 * 签约信息
 */
export interface RegisterInfo {
  /**
      * 法人证件号码
注意：此字段可能返回 null，表示取不到有效值。
      */
  LegalPersonIdCode: string

  /**
      * 法人证件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  LegalPersonIdType: string

  /**
      * 法人名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  LegalPersonName: string

  /**
      * 公司证件号码
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrganizationCode: string

  /**
      * 公司名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrganizationName: string

  /**
      * 公司证件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrganizationType: string
}

/**
 * QueryDownloadBillURL返回参数结构体
 */
export interface QueryDownloadBillURLResponse {
  /**
   * 分配给商户的AppId。进件成功后返给商户方的AppId。
   */
  MerchantAppId: string

  /**
   * 对账单下载地址。
   */
  DownloadUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInvoice请求参数结构体
 */
export interface CreateInvoiceRequest {
  /**
   * 开票平台ID。0：高灯，1：票易通
   */
  InvoicePlatformId: number

  /**
   * 抬头类型：1：个人/政府事业单位；2：企业
   */
  TitleType: number

  /**
   * 购方名称
   */
  BuyerTitle: string

  /**
   * 业务开票号
   */
  OrderId: string

  /**
   * 含税总金额（单位为分）
   */
  AmountHasTax: number

  /**
   * 总税额（单位为分）
   */
  TaxAmount: number

  /**
   * 不含税总金额（单位为分）。InvoicePlatformId 为1时，传默认值-1
   */
  AmountWithoutTax: number

  /**
   * 销方纳税人识别号
   */
  SellerTaxpayerNum: string

  /**
   * 销方名称。（不填默认读取商户注册时输入的信息）
   */
  SellerName?: string

  /**
   * 销方地址。（不填默认读取商户注册时输入的信息）
   */
  SellerAddress?: string

  /**
   * 销方电话。（不填默认读取商户注册时输入的信息）
   */
  SellerPhone?: string

  /**
   * 销方银行名称。（不填默认读取商户注册时输入的信息）
   */
  SellerBankName?: string

  /**
   * 销方银行账号。（不填默认读取商户注册时输入的信息）
   */
  SellerBankAccount?: string

  /**
   * 购方纳税人识别号（购方票面信息）,若抬头类型为2时，必传
   */
  BuyerTaxpayerNum?: string

  /**
   * 购方地址。开具专用发票时必填
   */
  BuyerAddress?: string

  /**
   * 购方银行名称。开具专用发票时必填
   */
  BuyerBankName?: string

  /**
   * 购方银行账号。开具专用发票时必填
   */
  BuyerBankAccount?: string

  /**
   * 购方电话。开具专用发票时必填
   */
  BuyerPhone?: string

  /**
   * 收票人邮箱。若填入，会收到发票推送邮件
   */
  BuyerEmail?: string

  /**
   * 收票人手机号。若填入，会收到发票推送短信
   */
  TakerPhone?: string

  /**
      * 开票类型：
1：增值税专用发票；
2：增值税普通发票；
3：增值税电子发票；
4：增值税卷式发票；
5：区块链电子发票。
若该字段不填，或值不为1-5，则认为开具”增值税电子发票”
      */
  InvoiceType?: number

  /**
   * 发票结果回传地址
   */
  CallbackUrl?: string

  /**
   * 开票人姓名。（不填默认读取商户注册时输入的信息）
   */
  Drawer?: string

  /**
   * 收款人姓名。（不填默认读取商户注册时输入的信息）
   */
  Payee?: string

  /**
   * 复核人姓名。（不填默认读取商户注册时输入的信息）
   */
  Checker?: string

  /**
   * 税盘号
   */
  TerminalCode?: string

  /**
   * 征收方式。开具差额征税发票时必填2。开具普通征税发票时为空
   */
  LevyMethod?: string

  /**
   * 差额征税扣除额（单位为分）
   */
  Deduction?: number

  /**
   * 备注（票面信息）
   */
  Remark?: string

  /**
   * 项目商品明细
   */
  Items?: Array<CreateInvoiceItem>

  /**
   * 接入环境。沙箱环境填sandbox。
   */
  Profile?: string

  /**
   * 撤销部分商品。0-不撤销，1-撤销
   */
  UndoPart?: number

  /**
   * 订单下单时间（格式 YYYYMMDD）
   */
  OrderDate?: string

  /**
   * 订单级别折扣（单位为分）
   */
  Discount?: number

  /**
   * 门店编码
   */
  StoreNo?: string

  /**
   * 开票渠道。0：APP渠道，1：线下渠道，2：小程序渠道。不填默认为APP渠道
   */
  InvoiceChannel?: number
}

/**
 * QueryAnchorContractInfo请求参数结构体
 */
export interface QueryAnchorContractInfoRequest {
  /**
   * 起始时间，格式为yyyy-MM-dd
   */
  BeginTime: string

  /**
   * 起始时间，格式为yyyy-MM-dd
   */
  EndTime: string
}

/**
 * TransferSinglePay返回参数结构体
 */
export interface TransferSinglePayResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功
   */
  ErrCode: string

  /**
   * 响应消息
   */
  ErrMessage: string

  /**
      * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: TransferSinglePayData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 贸易材料明细查询结果
 */
export interface QueryTradeResult {
  /**
   * 贸易材料明细查询数据
   */
  Data: QueryTradeData

  /**
   * 错误码
   */
  Code: string
}

/**
 * QueryMemberBind返回参数结构体
 */
export interface QueryMemberBindResponse {
  /**
      * STRING (10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultNum?: string

  /**
      * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartRecordNo?: string

  /**
      * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndFlag?: string

  /**
      * STRING (10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalNum?: string

  /**
      * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranItemArray?: Array<TranItem>

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 主播签约信息
 */
export interface AnchorContractInfo {
  /**
   * 主播ID
   */
  AnchorId: string

  /**
   * 主播名称
   */
  AnchorName: string

  /**
   * 代理商ID
   */
  AgentId: string

  /**
   * 代理商名称
   */
  AgentName: string

  /**
   * 主播身份证号
   */
  IdNo: string
}

/**
 * 对接账户余额查询结果
 */
export interface QueryMerchantBalanceResult {
  /**
   * 错误码
   */
  Code: string

  /**
   * 对接账户余额查询数据
   */
  Data: QueryMerchantBalanceData
}

/**
 * 商户支付方式数据
 */
export interface MerchantPayWayData {
  /**
      * 支付币种
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayCurrency: string

  /**
      * 支付图标
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayIcon: string

  /**
      * 支付名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayInternalName: string

  /**
      * 支付简称
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayName: string

  /**
      * 是否支持退款
注意：此字段可能返回 null，表示取不到有效值。
      */
  PaySplitRefund: string

  /**
      * 支付标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayTag: string

  /**
      * 支付凭证图标
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayTicketIcon: string

  /**
      * 支付类型，逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayType: string

  /**
      * 凭证名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TicketName: string
}

/**
 * 成功申报材料查询结果
 */
export interface QueryDeclareResult {
  /**
   * 成功申报材料查询数据
   */
  Data: QueryDeclareData

  /**
   * 错误码
   */
  Code: string
}

/**
 * CreateCustAcctId请求参数结构体
 */
export interface CreateCustAcctIdRequest {
  /**
   * STRING(2)，功能标志（1: 开户; 3: 销户）
   */
  FunctionFlag: string

  /**
   * STRING(50)，资金汇总账号（即收单资金归集入账的账号）
   */
  FundSummaryAcctNo: string

  /**
   * STRING(32)，交易网会员代码（平台端的用户ID，需要保证唯一性，可数字字母混合，如HY_120）
   */
  TranNetMemberCode: string

  /**
   * STRING(10)，会员属性（00-普通子账户(默认); SH-商户子账户）
   */
  MemberProperty: string

  /**
   * STRING(30)，手机号码
   */
  Mobile: string

  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * String(2)，是否为自营业务（0位非自营，1为自营）
   */
  SelfBusiness: boolean

  /**
   * String(64)，联系人
   */
  ContactName: string

  /**
   * String(64)，子账户名称
   */
  SubAcctName: string

  /**
   * String(64)，子账户简称
   */
  SubAcctShortName: string

  /**
   * String(4)，子账户类型（0: 个人子账户; 1: 企业子账户）
   */
  SubAcctType: number

  /**
   * STRING(150)，用户昵称
   */
  UserNickname?: string

  /**
   * STRING(150)，邮箱
   */
  Email?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * QueryBankClear返回参数结构体
 */
export interface QueryBankClearResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING (10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultNum?: string

  /**
      * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartRecordNo?: string

  /**
      * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndFlag?: string

  /**
      * STRING (10)，符合业务查询条件的记录总数（重复次数, 一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalNum?: string

  /**
      * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranItemArray?: Array<ClearItem>

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 米大师内部生成的合约信息
 */
export interface ChannelReturnContractInfo {
  /**
      * 平台合约状态
协议状态，枚举值：
CONTRACT_STATUS_SIGNED：已签约
CONTRACT_STATUS_TERMINATED：未签约
CONTRACT_STATUS_PENDING：签约进行中
      */
  ContractStatus: string

  /**
   * 米大师内部存放的合约信息
   */
  ChannelContractInfo: ChannelContractInfo
}

/**
 * UnBindAcct返回参数结构体
 */
export interface UnBindAcctResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MigrateOrderRefund请求参数结构体
 */
export interface MigrateOrderRefundRequest {
  /**
   * 商户代码
   */
  MerchantId: string

  /**
   * 支付渠道，ALIPAY对应支付宝渠道；UNIONPAY对应银联渠道
   */
  PayChannel: string

  /**
   * 正向支付商户订单号
   */
  PayOrderId: string

  /**
   * 退款订单号，最长64位，仅支持数字、 字母
   */
  RefundOrderId: string

  /**
   * 退款金额，单位：分。备注：改字段必须大于0 和小于10000000000的整数。
   */
  RefundAmt: number

  /**
   * 第三方支付机构支付交易号
   */
  ThirdChannelOrderId: string

  /**
   * 原始支付金额，单位：分。备注：当该字段为空或者为0 时，系统会默认使用订单当 实付金额作为退款金额
   */
  PayAmt?: number

  /**
   * 接入环境。沙箱环境填 sandbox。
   */
  Profile?: string

  /**
   * 退款原因
   */
  RefundReason?: string
}

/**
 * CreateRedInvoiceV2返回参数结构体
 */
export interface CreateRedInvoiceV2Response {
  /**
      * 红冲结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: CreateRedInvoiceResultV2

  /**
   * 错误码
   */
  ErrCode: string

  /**
   * 错误消息
   */
  ErrMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryCommonTransferRecharge请求参数结构体
 */
export interface QueryCommonTransferRechargeRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(2)，功能标志（1为查询当日数据，0查询历史数据）
   */
  FunctionFlag: string

  /**
   * STRING(8)，开始日期（格式：20190101）
   */
  StartDate: string

  /**
   * STRING(8)，终止日期（格式：20190101）
   */
  EndDate: string

  /**
   * STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
   */
  PageNum: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * CreateBatchPayment接口返回响应
 */
export interface CreateBatchPaymentData {
  /**
   * 批次号
   */
  BatchId: string

  /**
      * 批次列表详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  BatchInfoList: Array<CreateBatchPaymentBatchData>
}

/**
 * RegisterBehavior请求参数结构体
 */
export interface RegisterBehaviorRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
      * 功能标志
1：登记行为记录信息
2：查询补录信息
      */
  FunctionFlag: number

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string

  /**
      * 操作点击时间
yyyyMMddHHmmss
功能标志FunctionFlag=1时必输
      */
  OperationClickTime?: string

  /**
      * IP地址
功能标志FunctionFlag=1时必输
      */
  IpAddress?: string

  /**
      * MAC地址
功能标志FunctionFlag=1时必输
      */
  MacAddress?: string

  /**
      * 签约渠道
1:  App
2:  平台H5网页
3：公众号
4：小程序
功能标志FunctionFlag=1时必输
      */
  SignChannel?: number
}

/**
 * ReviseMbrProperty返回参数结构体
 */
export interface ReviseMbrPropertyResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryTransferDetail请求参数结构体
 */
export interface QueryTransferDetailRequest {
  /**
      * 商户号。
示例值：129284394
      */
  MerchantId: string

  /**
      * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
      */
  MerchantBatchNo?: string

  /**
      * 商家明细单号。
商户系统内部的商家明细单号
示例值：plfk2020042013
      */
  MerchantDetailNo?: string

  /**
      * 微信批次单号。
微信商家转账系统返回的唯一标识。
商家单号（包含批次号和明细单号）和微信单号（包含批次号和明细单号）二者必填其一。
示例值：1030000071100999991182020050700019480001
      */
  BatchId?: string

  /**
      * 微信明细单号。
微信区分明细单返回的唯一标识。
示例值：1030000071100999991182020050700019480001
      */
  DetailId?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  Profile?: string
}

/**
 * QueryOrder请求参数结构体
 */
export interface QueryOrderRequest {
  /**
   * 聚鑫分配的支付主 MidasAppId
   */
  MidasAppId: string

  /**
   * 用户ID，长度不小于5位， 仅支持字母和数字的组合
   */
  UserId: string

  /**
      * type=by_order根据订单号 查订单；
type=by_user根据用户id 查订单 。
      */
  Type: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
   * 每页返回的记录数。根据用户 号码查询订单列表时需要传。 用于分页展示。Type=by_order时必填
   */
  Count?: number

  /**
   * 记录数偏移量，默认从0开 始。根据用户号码查询订单列 表时需要传。用于分页展示。Type=by_order时必填
   */
  Offset?: number

  /**
   * 查询开始时间，Unix时间戳。Type=by_order时必填
   */
  StartTime?: string

  /**
   * 查询结束时间，Unix时间戳。Type=by_order时必填
   */
  EndTime?: string

  /**
   * 业务订单号，OutTradeNo与 TransactionId不能同时为 空，都传优先使用 OutTradeNo
   */
  OutTradeNo?: string

  /**
   * 聚鑫订单号，OutTradeNo与 TransactionId不能同时为 空，都传优先使用 OutTradeNo
   */
  TransactionId?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * CloseOrder请求参数结构体
 */
export interface CloseOrderRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 用户ID，长度不小于5位， 仅支持字母和数字的组合
   */
  UserId: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
   * 业务订单号，OutTradeNo ， TransactionId二选一，不能都为空,优先使用 OutTradeNo
   */
  OutTradeNo?: string

  /**
   * 聚鑫订单号，OutTradeNo ， TransactionId二选一，不能都为空,优先使用 OutTradeNo
   */
  TransactionId?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * QueryBankClear请求参数结构体
 */
export interface QueryBankClearRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(2)，功能标志（1: 全部; 2: 指定时间段）
   */
  FunctionFlag: string

  /**
   * STRING (10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
   */
  PageNum: string

  /**
   * STRING(8)，开始日期（若是指定时间段查询，则必输，当查询全部时，不起作用。格式: 20190101）
   */
  StartDate?: string

  /**
   * STRING(8)，终止日期（若是指定时间段查询，则必输，当查询全部时，不起作用。格式：20190101）
   */
  EndDate?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * QueryBalance返回参数结构体
 */
export interface QueryBalanceResponse {
  /**
   * 本次交易返回查询结果记录数
   */
  ResultCount?: string

  /**
   * 起始记录号
   */
  StartRecordOffset?: string

  /**
   * 结束标志
   */
  EndFlag?: string

  /**
   * 符合业务查询条件的记录总数
   */
  TotalCount?: string

  /**
   * 查询结果项
   */
  QueryItems?: Array<QueryItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyWithdrawal返回参数结构体
 */
export interface ApplyWithdrawalResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryContract请求参数结构体
 */
export interface QueryContractRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 用户ID，长度不小于5位，仅支持字母和数字的组合
   */
  UserId: string

  /**
      * 指定渠道：  wechat：微信支付  qqwallet：QQ钱包 
 bank：网银支付  只有一个渠道时需要指定
      */
  Channel: string

  /**
      * 枚举值：
CONTRACT_QUERY_MODE_BY_OUT_CONTRACT_CODE：按 OutContractCode + ContractSceneId 查询
CONTRACT_QUERY_MODE_BY_CHANNEL_CONTRACT_CODE：按ChannelContractCode查询
      */
  ContractQueryMode: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId?: string

  /**
   * 业务签约合同协议号 当 ContractQueryMode=CONTRACT_QUERY_MODE_BY_OUT_CONTRACT_CODE 时 ，必填
   */
  OutContractCode?: string

  /**
   * 签约场景ID，当 ContractQueryMode=CONTRACT_QUERY_MODE_BY_OUT_CONTRACT_CODE 时 必填，在米大师侧托管后生成
   */
  ContractSceneId?: string

  /**
   * 米大师生成的协议号 ，当 ContractQueryMode=CONTRACT_QUERY_MODE_BY_CHANNEL_CONTRACT_CODE 时必填
   */
  ChannelContractCode?: string

  /**
   * 第三方渠道合约数据，为json字符串，与特定渠道有关
   */
  ExternalContractData?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string

  /**
      * USER_ID: 用户ID
ANONYMOUS: 匿名类型 USER_ID
默认值为 USER_ID
      */
  UserType?: string

  /**
   * 签约代扣穿透查询存量数据迁移模式
   */
  MigrateMode?: string

  /**
   * 签约方式
   */
  ContractMethod?: string
}

/**
 * UnBindAcct请求参数结构体
 */
export interface UnBindAcctRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
      * 用于提现
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  SettleAcctNo: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
      * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
      */
  EncryptType?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * RefundOrder请求参数结构体
 */
export interface RefundOrderRequest {
  /**
   * 进件成功后返给商户方的AppId
   */
  MerchantAppId: string

  /**
   * 平台流水号。消费订单发起成功后，返回的平台唯一订单号。
   */
  OrderNo: string
}

/**
 * TerminateContract请求参数结构体
 */
export interface TerminateContractRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 用户ID，长度不小于5位，仅支持字母和数字的组合
   */
  UserId: string

  /**
      * 指定渠道：  wechat：微信支付  qqwallet：QQ钱包 
 bank：网银支付  只有一个渠道时需要指定
      */
  Channel: string

  /**
      * 枚举值：
CONTRACT_TERMINATION_MODE_BY_OUT_CONTRACT_CODE: 按OutContractCode+ContractSceneId解约
CONTRACT_TERMINATION_MODE_BY_CHANNEL_CONTRACT_CODE：按ChannelContractCode解约
      */
  TerminateMode: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId?: string

  /**
   * 业务签约合同协议号 当TerminateMode=CONTRACT_TERMINATION_MODE_BY_OUT_CONTRACT_CODE 时 必填
   */
  OutContractCode?: string

  /**
   * 签约场景ID，当 TerminateMode=CONTRACT_TERMINATION_MODE_BY_OUT_CONTRACT_CODE 时 必填，在米大师侧托管后生成
   */
  ContractSceneId?: string

  /**
   * 米大师生成的协议号 当 TerminateMode=CONTRACT_TERMINATION_MODE_BY_CHANNEL_CONTRACT_CODE 时 必填
   */
  ChannelContractCode?: string

  /**
   * 第三方渠道合约数据，json字符串，与特定渠道有关
   */
  ExternalContractData?: string

  /**
   * 终止合约原因
   */
  TerminationReason?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string

  /**
      * USER_ID: 用户ID
ANONYMOUS: 匿名类型 USER_ID
默认值为 USER_ID
      */
  UserType?: string

  /**
   * 签约方式
   */
  ContractMethod?: string

  /**
   * 签约代扣穿透查询存量数据迁移模式
   */
  MigrateMode?: string
}

/**
 * QueryInvoice请求参数结构体
 */
export interface QueryInvoiceRequest {
  /**
   * 开票平台ID
   */
  InvoicePlatformId: number

  /**
   * 订单号
   */
  OrderId: string

  /**
   * 业务开票号
   */
  OrderSn?: string

  /**
      * 发票种类：
0：蓝票
1：红票【该字段默认为0， 如果需要查询红票信息，本字段必须传1，否则可能查询不到需要的发票信息】。
      */
  IsRed?: number

  /**
   * 接入环境。沙箱环境填sandbox。
   */
  Profile?: string

  /**
   * 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道
   */
  InvoiceChannel?: number

  /**
   * 当渠道为线下渠道时，必填
   */
  SellerTaxpayerNum?: string
}

/**
 * 智能代发-单笔代发转账接口返回数据
 */
export interface TransferSinglePayData {
  /**
   * 平台交易流水号，唯一
   */
  TradeSerialNo: string
}

/**
 * CheckAcct返回参数结构体
 */
export interface CheckAcctResponse {
  /**
   * 前置流水号，请保存
   */
  FrontSeqNo: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryReconciliationDocument返回参数结构体
 */
export interface QueryReconciliationDocumentResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultNum?: string

  /**
      * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TranItemArray?: Array<FileItem>

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryApplicationMaterial返回参数结构体
 */
export interface QueryApplicationMaterialResponse {
  /**
   * 成功申报材料查询结果
   */
  Result: QueryDeclareResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryExchangeRate请求参数结构体
 */
export interface QueryExchangeRateRequest {
  /**
   * 源币种 (默认CNY)
   */
  SourceCurrency: string

  /**
   * 目的币种 (见常见问题-汇出币种)
   */
  TargetCurrency?: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * 第三方渠道合约信息
 */
export interface ExternalReturnContractInfo {
  /**
      * 第三方渠道协议id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnAgreementId: string

  /**
      * 第三方渠道协议生效时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnContractEffectiveTimestamp: string

  /**
      * 第三方渠道协议解约时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnContractTerminationTimestamp: string

  /**
      * 平台合约状态
协议状态，枚举值：
CONTRACT_STATUS_SIGNED：已签约
CONTRACT_STATUS_TERMINATED：未签约
CONTRACT_STATUS_PENDING：签约进行中
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnContractStatus: string

  /**
      * 第三方渠道请求序列号
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnRequestId: string

  /**
      * 第三方渠道协议签署时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnContractSignedTimestamp: string

  /**
      * 第三方渠道协议到期时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnContractExpiredTimestamp: string

  /**
      * 第三方渠道返回的合约数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnContractData: string

  /**
      * 第三方渠道解约备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnContractTerminationRemark?: string

  /**
      * 第三方渠道协议解约方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnContractTerminationMode?: string
}

/**
 * 对账文件信息
 */
export interface FileItem {
  /**
      * STRING(256)，文件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileName: string

  /**
      * STRING(120)，随机密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  RandomPassword: string

  /**
      * STRING(512)，文件路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  FilePath: string

  /**
      * STRING(64)，提取码
注意：此字段可能返回 null，表示取不到有效值。
      */
  DrawCode: string
}

/**
 * RechargeMemberThirdPay请求参数结构体
 */
export interface RechargeMemberThirdPayRequest {
  /**
   * STRING(32)，交易网会代码
   */
  TranNetMemberCode: string

  /**
   * STRING(20)，会员充值金额
   */
  MemberFillAmt: string

  /**
   * STRING(20)，手续费金额
   */
  Commission: string

  /**
   * STRING(3)，币种。如RMB
   */
  Ccy: string

  /**
      * STRING(20)，支付渠道类型。
0001-微信
0002-支付宝
0003-京东支付
      */
  PayChannelType: string

  /**
   * STRING(50)，支付渠道所分配的商户号
   */
  PayChannelAssignMerNo: string

  /**
   * STRING(52)，支付渠道交易流水号
   */
  PayChannelTranSeqNo: string

  /**
   * STRING(52)，电商见证宝订单号
   */
  EjzbOrderNo: string

  /**
   * String(22)，商户号
   */
  MrchCode: string

  /**
   * STRING(500)，电商见证宝订单内容
   */
  EjzbOrderContent?: string

  /**
   * STRING(300)，备注
   */
  Remark?: string

  /**
   * STRING(300)，保留域1
   */
  ReservedMsgOne?: string

  /**
   * STRING(300)，保留域2
   */
  ReservedMsgTwo?: string

  /**
   * STRING(300)，保留域3
   */
  ReservedMsgThree?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * QueryBillDownloadURL请求参数结构体
 */
export interface QueryBillDownloadURLRequest {
  /**
   * 商户号
   */
  MerchantId: string

  /**
      * 代发类型：
1、 微信企业付款 
2、 支付宝转账 
3、 平安银企直联代发转账
      */
  TransferType: number

  /**
   * 账单日期，格式yyyy-MM-dd
   */
  BillDate: string
}

/**
 * TransferSinglePay请求参数结构体
 */
export interface TransferSinglePayRequest {
  /**
   * 商户号
   */
  MerchantId: string

  /**
      * 微信申请商户号的appid或者商户号绑定的appid
支付宝、平安填入MerchantId
      */
  MerchantAppId: string

  /**
      * 1、 微信企业付款 
2、 支付宝转账 
3、 平安银企直联代发转账
      */
  TransferType: number

  /**
   * 订单流水号，唯一，不能包含特殊字符，长度最大限制64位，推荐使用字母，数字组合，"_","-"组合
   */
  OrderId: string

  /**
   * 转账金额，单位分
   */
  TransferAmount: number

  /**
      * 收款方标识。
微信为open_id；
支付宝为会员alipay_user_id;
平安为收款方银行账号
      */
  PayeeId: string

  /**
   * 收款方姓名。支付宝可选；微信，平安模式下必传
   */
  PayeeName?: string

  /**
      * 收款方附加信息，平安接入使用。需要以JSON格式提供以下字段：
PayeeBankName：收款人开户行名称
 CcyCode：货币类型（RMB-人民币）
 UnionFlag：行内跨行标志（1：行内转账，0：跨行转账）。
      */
  PayeeExtends?: string

  /**
   * 请求预留字段，原样透传返回
   */
  ReqReserved?: string

  /**
   * 业务备注
   */
  Remark?: string

  /**
   * 转账结果回调通知URL。若不填，则不进行回调。
   */
  NotifyUrl?: string

  /**
   * 接入环境。沙箱环境填sandbox。
   */
  Profile?: string
}

/**
 * 汇出指令申请结果
 */
export interface ApplyOutwardOrderResult {
  /**
   * 汇出指令申请数据
   */
  Data: ApplyOutwardOrderData

  /**
   * 错误码
   */
  Code: string
}

/**
 * QuerySmallAmountTransfer返回参数结构体
 */
export interface QuerySmallAmountTransferResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(10)，返回状态（0: 成功; 1: 失败; 2: 待确认）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReturnStatus?: string

  /**
      * STRING(512)，返回信息（失败返回具体信息）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReturnMsg?: string

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyPayerInfo请求参数结构体
 */
export interface ApplyPayerInfoRequest {
  /**
   * 付款人ID
   */
  PayerId: string

  /**
   * 付款人类型 (个人: INDIVIDUAL, 企业: CORPORATE)
   */
  PayerType: string

  /**
   * 付款人姓名
   */
  PayerName: string

  /**
   * 付款人证件类型 (身份证: ID_CARD, 统一社会信用代码: UNIFIED_CREDIT_CODE)
   */
  PayerIdType: string

  /**
   * 付款人证件号
   */
  PayerIdNo: string

  /**
   * 付款人常驻国家或地区编码 (见常见问题-国家/地区编码)
   */
  PayerCountryCode: string

  /**
   * 付款人联系人名称
   */
  PayerContactName?: string

  /**
   * 付款人联系电话
   */
  PayerContactNumber?: string

  /**
   * 付款人联系邮箱
   */
  PayerEmailAddress?: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * CreateSinglePay返回参数结构体
 */
export interface CreateSinglePayResponse {
  /**
   * 返回结果
   */
  Result: CreateSinglePayResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RefundMemberTransaction返回参数结构体
 */
export interface RefundMemberTransactionResponse {
  /**
   * 请求类型
   */
  RequestType?: string

  /**
   * 银行流水号
   */
  FrontSequenceNumber?: string

  /**
   * 保留域
   */
  ReservedMessage?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInvoiceV2返回参数结构体
 */
export interface CreateInvoiceV2Response {
  /**
      * 发票开具结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: CreateInvoiceResultV2

  /**
   * 错误码
   */
  ErrCode: string

  /**
   * 错误消息
   */
  ErrMessage: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBatchPayment接口BatchInfo对象
 */
export interface CreateBatchPaymentBatchData {
  /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrderId: string

  /**
      * 交易流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  TradeSerialNo: string

  /**
      * 交易状态。
0 处理中  
1 预占成功 
2 交易成功 
3 交易失败 
4 未知渠道异常 
5 预占额度失败
6 提交成功
7 提交失败
8 订单重复提交
99 未知系统异常
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusDesc: string

  /**
      * 代理商ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AgentId: string

  /**
      * 代理商名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  AgentName: string
}

/**
 * DownloadReconciliationUrl返回参数结构体
 */
export interface DownloadReconciliationUrlResponse {
  /**
   * 下载地址
   */
  DownloadUrl: string

  /**
      * hash类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  HashType: string

  /**
   * hash值
   */
  HashValue: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBindedAccount返回参数结构体
 */
export interface ModifyBindedAccountResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功。
   */
  ErrCode: string

  /**
   * 响应消息。
   */
  ErrMessage: string

  /**
      * 该字段为null。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyApplicationMaterial返回参数结构体
 */
export interface ApplyApplicationMaterialResponse {
  /**
   * 提交申报材料结果
   */
  Result: ApplyDeclareResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RefundMemberTransaction请求参数结构体
 */
export interface RefundMemberTransactionRequest {
  /**
   * 转出见证子账户的户名
   */
  OutSubAccountName: string

  /**
   * 转入见证子账户的户名
   */
  InSubAccountName: string

  /**
   * 子渠道
   */
  PayChannelSubId: number

  /**
   * 转出见证子账户账号
   */
  OutSubAccountNumber: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
   * 转入见证子账户账号
   */
  InSubAccountNumber: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 父账户账号，资金汇总账号
   */
  BankAccountNumber: string

  /**
   * 原老订单流水号
   */
  OldTransSequenceNumber: string

  /**
   * 银行注册商户号
   */
  MerchantCode: string

  /**
   * 请求类型，固定为MemberTransactionRefundReq
   */
  RequestType: string

  /**
   * 交易金额
   */
  CurrencyAmount: string

  /**
   * 交易流水号
   */
  TransSequenceNumber: string

  /**
   * 渠道
   */
  PayChannel: string

  /**
   * 原订单号
   */
  OldOrderId: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 订单号
   */
  OrderId: string

  /**
      * Midas环境标识 release 现网环境 sandbox 沙箱环境
development 开发环境
      */
  MidasEnvironment: string

  /**
   * 转出子账户交易网会员代码
   */
  OutTransNetMemberCode?: string

  /**
   * 转入子账户交易网会员代码
   */
  InTransNetMemberCode?: string

  /**
   * 保留域
   */
  ReservedMessage?: string

  /**
   * 平台短号(银行分配)
   */
  PlatformShortNumber?: string

  /**
   * 0-登记挂账，1-撤销挂账
   */
  TransType?: string

  /**
   * 交易手续费
   */
  TransFee?: string
}

/**
 * QueryBankTransactionDetails请求参数结构体
 */
export interface QueryBankTransactionDetailsRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(2)，功能标志（1: 当日; 2: 历史）
   */
  FunctionFlag: string

  /**
   * STRING(50)，见证子帐户的帐号
   */
  SubAcctNo: string

  /**
   * STRING(4)，查询标志（1: 全部; 2: 转出; 3: 转入 ）
   */
  QueryFlag: string

  /**
   * STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
   */
  PageNum: string

  /**
   * STRING(8)，开始日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101）
   */
  StartDate?: string

  /**
   * STRING(8)，终止日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101）
   */
  EndDate?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * QuerySinglePaymentResult接口返回响应
 */
export interface QuerySinglePaymentResultData {
  /**
      * 平台交易流水号，唯一
注意：此字段可能返回 null，表示取不到有效值。
      */
  TradeSerialNo: string

  /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrderId: string

  /**
      * 交易状态。
0 处理中  
1 预占成功 
2 交易成功 
3 交易失败 
4 未知渠道异常 
5 预占额度失败
6 提交成功
7 提交失败
8 订单重复提交
99 未知系统异常
注意：此字段可能返回 null，表示取不到有效值。
      */
  TradeStatus: number

  /**
      * 业务备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 代理商ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AgentId: string

  /**
      * 代理商名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  AgentName: string

  /**
      * 交易状态描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TradeStatusDesc: string
}

/**
 * DownloadBill请求参数结构体
 */
export interface DownloadBillRequest {
  /**
   * 请求下载对账单日期
   */
  StateDate: string

  /**
   * 聚鑫分配的MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫分配的SecretId
   */
  MidasSecretId: string

  /**
   * 使用聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * QueryRefund请求参数结构体
 */
export interface QueryRefundRequest {
  /**
   * 用户ID，长度不小于5位，仅支持字母和数字的组合。
   */
  UserId: string

  /**
   * 退款订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合。
   */
  RefundId: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * 红票结果数据
 */
export interface CreateRedInvoiceResultData {
  /**
   * 红冲状态码
   */
  Code: number

  /**
   * 红冲状态消息
   */
  Message: string

  /**
   * 发票ID
   */
  InvoiceId: string

  /**
   * 业务开票号
   */
  OrderSn: string
}

/**
 * QuerySinglePay请求参数结构体
 */
export interface QuerySinglePayRequest {
  /**
   * 业务流水号
   */
  SerialNumber: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * ApplyTrade返回参数结构体
 */
export interface ApplyTradeResponse {
  /**
   * 提交贸易材料结果
   */
  Result: ApplyTradeResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateExternalAnchor接口返回参数
 */
export interface CreateExternalAnchorData {
  /**
   * 主播Id
   */
  AnchorId: string
}

/**
 * RechargeMemberThirdPay返回参数结构体
 */
export interface RechargeMemberThirdPayResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(52)，前置流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo?: string

  /**
      * STRING(20)，会员子账户交易前可用余额
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemberSubAcctPreAvailBal?: string

  /**
      * STRING(300)，保留域1
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsgOne?: string

  /**
      * STRING(300)，保留域2
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsgTwo?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrderStatus返回参数结构体
 */
export interface DescribeOrderStatusResponse {
  /**
   * 交易状态 （0：成功，1：失败，2：待确认, 5：待处理，6：处理中）
   */
  OrderStatus?: string

  /**
   * 交易金额
   */
  OrderAmount?: string

  /**
   * 交易日期
   */
  OrderDate?: string

  /**
   * 交易时间
   */
  OrderTime?: string

  /**
   * 转出子账户账号
   */
  OutSubAccountNumber?: string

  /**
   * 转入子账户账号
   */
  InSubAccountNumber?: string

  /**
   * 记账标志（1：登记挂账 2：支付 3：提现 4：清分5:下单预支付 6：确认并付款 7：退款 8：支付到平台 N:其他）
   */
  BookingFlag?: string

  /**
   * 当交易失败时，返回交易失败原因
   */
  FailMessage?: string

  /**
   * 请求类型
   */
  RequestType?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WithdrawCashMembership返回参数结构体
 */
export interface WithdrawCashMembershipResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo?: string

  /**
      * STRING(20)，转账手续费（固定返回0.00）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferFee?: string

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryApplicationMaterial请求参数结构体
 */
export interface QueryApplicationMaterialRequest {
  /**
   * 申报流水号
   */
  DeclareId: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * CreateMerchant返回参数结构体
 */
export interface CreateMerchantResponse {
  /**
   * 商户注册结果
   */
  Result: CreateMerchantResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSinglePayment返回参数结构体
 */
export interface CreateSinglePaymentResponse {
  /**
   * 错误码
   */
  ErrCode: string

  /**
   * 响应消息
   */
  ErrMessage: string

  /**
      * 返回数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: CreateSinglePaymentData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 第三方渠道用户信息
 */
export interface ExternalContractUserInfo {
  /**
   * 第三方用户类型，例如:  WX_OPENID, WX_SUB_OPENID,WX_PAYER_OPENID
   */
  ExternalUserType: string

  /**
   * 第三方用户ID
   */
  ExternalUserId: string
}

/**
 * 用户信息
 */
export interface ContractUserInfo {
  /**
      * USER_ID: 用户ID
ANONYMOUS: 匿名类型用户ID
      */
  UserType: string

  /**
   * 用户类型
   */
  UserId: string
}

/**
 * 提交贸易材料结果
 */
export interface ApplyTradeData {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 贸易材料流水号
   */
  TradeFileId: string

  /**
   * 交易币种
   */
  TradeCurrency: string

  /**
   * 交易金额
   */
  TradeAmount: string

  /**
   * 付款人ID
   */
  PayerId: string

  /**
   * 状态
   */
  Status: string
}

/**
 * 银企直连-查询单笔支付状态条目
 */
export interface QuerySinglePayItem {
  /**
      * 付款状态（S：支付成功；P：支付处理中；F：支付失败）
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayStatus: string

  /**
      * 平台信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  PlatformMsg: string

  /**
      * 银行原始返回码
注意：此字段可能返回 null，表示取不到有效值。
      */
  BankRetCode: string

  /**
      * 银行原始返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  BankRetMsg: string
}

/**
 * UnbindRelateAcct返回参数结构体
 */
export interface UnbindRelateAcctResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(52)，见证系统流水号（即电商见证宝系统生成的流水号，可关联具体一笔请求）
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo?: string

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyApplicationMaterial请求参数结构体
 */
export interface ApplyApplicationMaterialRequest {
  /**
   * 对接方汇出指令编号
   */
  TransactionId: string

  /**
   * 申报流水号
   */
  DeclareId: string

  /**
   * 付款人ID
   */
  PayerId: string

  /**
   * 源币种
   */
  SourceCurrency: string

  /**
   * 目的币种
   */
  TargetCurrency: string

  /**
   * 贸易编码
   */
  TradeCode: string

  /**
   * 原申报流水号
   */
  OriginalDeclareId?: string

  /**
   * 源金额
   */
  SourceAmount?: number

  /**
   * 目的金额
   */
  TargetAmount?: number

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * 查询账户列表接口
 */
export interface QueryAcctItem {
  /**
      * 子商户类型：
个人: personal
企业：enterprise
缺省： enterprise
      */
  SubMchType: string

  /**
   * 子商户名称
   */
  SubMchName: string

  /**
   * 子账号号
   */
  SubAcctNo: string

  /**
   * 不填则默认子商户名称
   */
  ShortName: string

  /**
   * 业务平台的子商户Id，唯一
   */
  SubMchId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
      * 子商户联系人
<敏感信息>
      */
  Contact: string

  /**
   * 子商户地址
   */
  Address: string

  /**
      * 联系人手机号
<敏感信息>
      */
  Mobile: string

  /**
      * 邮箱 
<敏感信息>
      */
  Email: string

  /**
      * 子商户会员类型：
general:普通子账户
merchant:商户子账户
缺省： general
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubMerchantMemberType: string
}

/**
 * 米大师内部存放的合约信息
 */
export interface ChannelContractInfo {
  /**
   * 外部合约协议号
   */
  OutContractCode: string

  /**
   * 米大师内部生成的合约协议号
   */
  ChannelContractCode: string
}

/**
 * ModifyAgentTaxPaymentInfo请求参数结构体
 */
export interface ModifyAgentTaxPaymentInfoRequest {
  /**
   * 批次号
   */
  BatchNum: number

  /**
   * 新源电子凭证地址
   */
  RawElectronicCertUrl: string

  /**
   * 新的文件名
   */
  FileName?: string

  /**
   * 接入环境。沙箱环境填sandbox
   */
  Profile?: string
}

/**
 * QuerySmallAmountTransfer请求参数结构体
 */
export interface QuerySmallAmountTransferRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(52)，原交易流水号（小额鉴权交易请求时的CnsmrSeqNo值）
   */
  OldTranSeqNo: string

  /**
   * STRING(8)，交易日期（格式：20190101）
   */
  TranDate: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * QueryMerchantPayWayList请求参数结构体
 */
export interface QueryMerchantPayWayListRequest {
  /**
   * 收单系统分配的开放ID
   */
  OpenId: string

  /**
   * 收单系统分配的密钥
   */
  OpenKey: string

  /**
   * 支付类型，逗号分隔
   */
  PayType: string

  /**
   * 沙箱环境填sandbox，正式环境不填
   */
  Profile?: string
}

/**
 * CreateBatchPayment转账明细
 */
export interface CreateBatchPaymentRecipient {
  /**
   * 转账金额
   */
  TransferAmount: number

  /**
   * 订单号
   */
  OrderId: string

  /**
   * 主播ID（与主播业务ID不能同时为空，两者都填取主播ID）
   */
  AnchorId?: string

  /**
   * 主播业务ID（与主播业务ID不能同时为空，两者都填取主播ID）
   */
  Uid?: string

  /**
   * 主播名称。如果该字段填入，则会对AnchorName和AnchorId/Uid进行校验。
   */
  AnchorName?: string

  /**
   * 业务备注
   */
  Remark?: string

  /**
   * 子单请求预留字段
   */
  ReqReserved?: string
}

/**
 * DownloadReconciliationUrl请求参数结构体
 */
export interface DownloadReconciliationUrlRequest {
  /**
   * 平台应用ID
   */
  MainAppId: string

  /**
   * 平台代码
   */
  AppCode: string

  /**
   * 账单日期，yyyy-MM-dd
   */
  BillDate: string

  /**
   * 商户或者代理商ID
   */
  SubAppId?: string
}

/**
 * CreateBatchPayment请求参数结构体
 */
export interface CreateBatchPaymentRequest {
  /**
      * 1 微信企业付款 
2 支付宝转账 
3 平安银企直连代发转账
      */
  TransferType: number

  /**
   * 转账详情
   */
  RecipientList: Array<CreateBatchPaymentRecipient>

  /**
   * 请求预留字段
   */
  ReqReserved?: string

  /**
   * 回调Url
   */
  NotifyUrl?: string
}

/**
 * ModifyMntMbrBindRelateAcctBankCode返回参数结构体
 */
export interface ModifyMntMbrBindRelateAcctBankCodeResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryBalance请求参数结构体
 */
export interface QueryBalanceRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
      * 2：普通会员子账号
3：功能子账号
      */
  QueryFlag: string

  /**
   * 起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后
   */
  PageOffset: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * UploadTaxList请求参数结构体
 */
export interface UploadTaxListRequest {
  /**
   * 平台渠道
   */
  Channel: number

  /**
   * 起始月份，YYYY-MM
   */
  BeginMonth: string

  /**
   * 结束月份。如果只上传一个月，结束月份等于起始月份
   */
  EndMonth: string

  /**
   * 完税列表下载地址
   */
  FileUrl: string
}

/**
 * ApplyWithdrawal请求参数结构体
 */
export interface ApplyWithdrawalRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
      * 用于提现
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  SettleAcctNo: string

  /**
      * 结算账户户名
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  SettleAcctName: string

  /**
   * 币种 RMB
   */
  CurrencyType: string

  /**
   * 单位，1：元，2：角，3：分
   */
  CurrencyUnit: number

  /**
   * 金额
   */
  CurrencyAmt: string

  /**
   * 交易网名称
   */
  TranWebName: string

  /**
   * 会员证件类型
   */
  IdType: string

  /**
      * 会员证件号码
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
      */
  IdCode: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
      * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
      */
  EncryptType?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string

  /**
   * 手续费金额
   */
  CommissionAmount?: string

  /**
   * 提现单号，长度32字节
   */
  WithdrawOrderId?: string
}

/**
 * ExecuteMemberTransaction请求参数结构体
 */
export interface ExecuteMemberTransactionRequest {
  /**
   * 请求类型此接口固定填：MemberTransactionReq
   */
  RequestType: string

  /**
   * 银行注册商户号
   */
  MerchantCode: string

  /**
   * 支付渠道
   */
  PayChannel: string

  /**
   * 子渠道
   */
  PayChannelSubId: number

  /**
   * 转出交易网会员代码
   */
  OutTransNetMemberCode: string

  /**
   * 转出见证子账户的户名
   */
  OutSubAccountName: string

  /**
   * 转入见证子账户的户名
   */
  InSubAccountName: string

  /**
   * 转出子账户账号
   */
  OutSubAccountNumber: string

  /**
   * 转入子账户账号
   */
  InSubAccountNumber: string

  /**
   * 父账户账号，资金汇总账号
   */
  BankAccountNumber: string

  /**
   * 货币单位 单位，1：元，2：角，3：分
   */
  CurrencyUnit: string

  /**
   * 币种
   */
  CurrencyType: string

  /**
   * 交易金额
   */
  CurrencyAmount: string

  /**
   * 订单号
   */
  OrderId: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 计费签名
   */
  MidasSignature: string

  /**
      * 交易流水号 
生成方式：用户短号+日期（6位）+ 随机编号（10位）例如：F088722005120904930798
短号：F08872  日期： 200512   随机编号：0904930798
      */
  TransSequenceNumber: string

  /**
   * 转入交易网会员代码
   */
  InTransNetMemberCode: string

  /**
      * Midas环境标识 release 现网环境 sandbox 沙箱环境
development 开发环境
      */
  MidasEnvironment: string

  /**
   * 平台短号(银行分配)
   */
  PlatformShortNumber?: string

  /**
      * 1：下单预支付 
2：确认并付款
3：退款
6：直接支付T+1
9：直接支付T+0
      */
  TransType?: string

  /**
   * 交易手续费
   */
  TransFee?: string

  /**
   * 保留域
   */
  ReservedMessage?: string
}

/**
 * 签约数据
 */
export interface ResponseQueryContract {
  /**
      * 第三方渠道错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnCode: string

  /**
      * 第三方渠道错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnMessage: string

  /**
      * 第三方渠道返回的原始数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalReturnData: string

  /**
   * 米大师内部商户号
   */
  ChannelMerchantId: string

  /**
      * 米大师内部子商户号
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChannelSubMerchantId: string

  /**
      * 米大师内部应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChannelAppId: string

  /**
      * 米大师内部子应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ChannelSubAppId: string

  /**
   * 渠道名称
   */
  ChannelName: string

  /**
      * 返回的合约信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReturnContractInfo: ReturnContractInfo

  /**
   * 签约通知地址
   */
  NotifyUrl: string
}

/**
 * BindRelateAcctSmallAmount请求参数结构体
 */
export interface BindRelateAcctSmallAmountRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”(右侧)进行分隔）
   */
  TranNetMemberCode: string

  /**
   * STRING(150)，见证子账户的户名（首次绑定的情况下，此字段即为待绑定的提现账户的户名。非首次绑定的情况下，须注意带绑定的提现账户的户名须与留存在后台系统的会员户名一致）
   */
  MemberName: string

  /**
   * STRING(5)，会员证件类型（详情见“常见问题”）
   */
  MemberGlobalType: string

  /**
   * STRING(32)，会员证件号码
   */
  MemberGlobalId: string

  /**
   * STRING(50)，会员的待绑定账户的账号（提现的银行卡）
   */
  MemberAcctNo: string

  /**
   * STRING(10)，会员的待绑定账户的本他行类型（1: 本行; 2: 他行）
   */
  BankType: string

  /**
   * STRING(150)，会员的待绑定账户的开户行名称
   */
  AcctOpenBranchName: string

  /**
   * STRING(30)，会员的手机号（手机号须由长度为11位的数字构成）
   */
  Mobile: string

  /**
   * STRING(20)，会员的待绑定账户的开户行的联行号（本他行类型为他行的情况下，此字段和下一个字段至少一个不为空）
   */
  CnapsBranchId?: string

  /**
   * STRING(20)，会员的待绑定账户的开户行的超级网银行号（本他行类型为他行的情况下，此字段和上一个字段至少一个不为空）
   */
  EiconBankBranchId?: string

  /**
   * STRING(1027)，转账方式（1: 往账鉴权(默认值); 2: 来账鉴权）
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * QueryRefund返回参数结构体
 */
export interface QueryRefundResponse {
  /**
   * 退款状态码，退款提交成功后返回  1：退款中；  2：退款成功；  3：退款失败。
   */
  State?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 签约同步信息
 */
export interface ContractSyncInfo {
  /**
   * 第三方渠道合约信息
   */
  ExternalReturnContractInfo: ExternalReturnContractInfo

  /**
   * 第三方渠道用户信息
   */
  ExternalContractUserInfo: Array<ExternalContractUserInfo>

  /**
      * 签约方式，枚举值，
<br/>CONTRACT_METHOD_WECHAT_INVALID: 无效
CONTRACT_METHOD_WECHAT_APP: 微信APP
CONTRACT_METHOD_WECHAT_PUBLIC: 微信公众号
CONTRACT_METHOD_WECHAT_MINIPROGRAM: 微信小程序
CONTRACT_METHOD_WECHAT_H5: 微信H5
      */
  ContractMethod?: string

  /**
   * 在米大师侧分配的场景id
   */
  ContractSceneId?: string

  /**
   * 调用方从第三方渠道查询到的签约数据，由各个渠道定义
   */
  ExternalReturnContractData?: string
}

/**
 * QuerySinglePaymentResult返回参数结构体
 */
export interface QuerySinglePaymentResultResponse {
  /**
   * 错误码。响应成功："SUCCESS"，其他为不成功
   */
  ErrCode: string

  /**
   * 响应消息。
   */
  ErrMessage: string

  /**
      * 返回响应
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: QuerySinglePaymentResultData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 支付中签约子订单列表
 */
export interface ContractOrderInSubOrder {
  /**
   * 子订单结算应收金额，单位： 分
   */
  SubMchIncome: number

  /**
   * 子订单平台应收金额，单位：分
   */
  PlatformIncome: number

  /**
   * 子订单商品详情
   */
  ProductDetail: string

  /**
   * 子订单商品名称
   */
  ProductName: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
   * 子订单号
   */
  SubOutTradeNo: string

  /**
   * 子订单支付金额
   */
  Amt: number

  /**
   * 子订单原始金额
   */
  OriginalAmt: number

  /**
   * 发货标识，由业务在调用聚鑫下单接口的 时候下发
   */
  Metadata?: string
}

/**
 * 成功申报材料查询数据
 */
export interface QueryDeclareData {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 对接方汇出指令编号
   */
  TransactionId: string

  /**
   * 申报流水号
   */
  DeclareId: string

  /**
      * 原申报流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalDeclareId: string

  /**
   * 付款人ID
   */
  PayerId: string

  /**
   * 源币种
   */
  SourceCurrency: string

  /**
      * 源金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceAmount: string

  /**
   * 目的币种
   */
  TargetCurrency: string

  /**
      * 目的金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TargetAmount: string

  /**
   * 交易编码
   */
  TradeCode: string

  /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string
}

/**
 * QueryMemberTransaction返回参数结构体
 */
export interface QueryMemberTransactionResponse {
  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
      * STRING(52)，见证系统流水号（即电商见证宝系统生成的流水号，可关联具体一笔请求）
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo?: string

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryMemberBind请求参数结构体
 */
export interface QueryMemberBindRequest {
  /**
   * String(22)，商户号（签约客户号）
   */
  MrchCode: string

  /**
   * STRING(4)，查询标志（1: 全部会员; 2: 单个会员; 3: 单个会员的证件信息）
   */
  QueryFlag: string

  /**
   * STRING (10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
   */
  PageNum: string

  /**
   * STRING(50)，见证子账户的账号（若SelectFlag为2或3时，子账户账号必输）
   */
  SubAcctNo?: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * SyncContractData请求参数结构体
 */
export interface SyncContractDataRequest {
  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 用户ID，长度不小于5位，仅支持字母和数字的组合
   */
  UserId: string

  /**
   * 签约使用的渠道
   */
  Channel: string

  /**
   * 业务签约合同协议号
   */
  OutContractCode: string

  /**
      * 签约状态，枚举值
CONTRACT_STATUS_INVALID=无效状态
CONTRACT_STATUS_SIGNED=已签约
CONTRACT_STATUS_TERMINATED=已解约
CONTRACT_STATUS_PENDING=签约进行中
      */
  ContractStatus: string

  /**
   * 签约同步信息
   */
  ContractSyncInfo: ContractSyncInfo

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId?: string

  /**
      * 用户类型，枚举值
USER_ID: 用户ID
ANONYMOUS: 匿名类型 USER_ID
默认值为 USER_ID
      */
  UserType?: string

  /**
   * 场景信息
   */
  SceneInfo?: SceneInfo

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * QueryAgentStatements请求参数结构体
 */
export interface QueryAgentStatementsRequest {
  /**
   * 结算单日期，月结算单填每月1日
   */
  Date: string

  /**
      * 日结算单:daily
月结算单:monthly
      */
  Type: string
}

/**
 * BindRelateAcctUnionPay返回参数结构体
 */
export interface BindRelateAcctUnionPayResponse {
  /**
      * STRING(1027)，保留域（在同名子账户绑定的场景下，若返回"VERIFIED"则说明无需验证直接绑定成功）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryReconciliationDocument请求参数结构体
 */
export interface QueryReconciliationDocumentRequest {
  /**
   * String(22)，商户号
   */
  MrchCode: string

  /**
   * STRING(10)，文件类型（充值文件-CZ; 提现文件-TX; 交易文件-JY; 余额文件-YE; 合约文件-HY）
   */
  FileType: string

  /**
   * STRING(8)，文件日期（格式：20190101）
   */
  FileDate: string

  /**
   * STRING(1027)，保留域
   */
  ReservedMsg?: string

  /**
   * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
   */
  Profile?: string
}

/**
 * QueryOrder返回参数结构体
 */
export interface QueryOrderResponse {
  /**
   * 返回订单数
   */
  TotalNum?: number

  /**
   * 查询结果的订单列表
   */
  OrderList?: Array<QueryOrderOutOrderList>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询汇出数据
 */
export interface QueryOutwardOrderData {
  /**
   * 商户号
   */
  MerchantId: string

  /**
   * 对接方汇出指令编号
   */
  TransactionId: string

  /**
      * 财务日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  AcctDate: string

  /**
      * 定价币种
注意：此字段可能返回 null，表示取不到有效值。
      */
  PricingCurrency: string

  /**
      * 源币种
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceCurrency: string

  /**
      * 源金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  SourceAmount: string

  /**
      * 目的币种
注意：此字段可能返回 null，表示取不到有效值。
      */
  TargetCurrency: string

  /**
      * 目的金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TargetAmount: string

  /**
      * 汇率
注意：此字段可能返回 null，表示取不到有效值。
      */
  FxRate: string

  /**
   * 指令状态
   */
  Status: string

  /**
      * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailReason: string

  /**
      * 退汇金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  RefundAmount: string

  /**
      * 退汇币种
注意：此字段可能返回 null，表示取不到有效值。
      */
  RefundCurrency: string
}

/**
 * UnifiedOrder请求参数结构体
 */
export interface UnifiedOrderRequest {
  /**
   * ISO 货币代码，CNY
   */
  CurrencyType: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 支付订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
   */
  OutTradeNo: string

  /**
   * 商品详情，需要URL编码
   */
  ProductDetail: string

  /**
   * 商品ID，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
   */
  ProductId: string

  /**
   * 商品名称，需要URL编码
   */
  ProductName: string

  /**
   * 支付金额，单位： 分
   */
  TotalAmt: number

  /**
   * 用户ID，长度不小于5位，仅支持字母和数字的组合
   */
  UserId: string

  /**
   * 银行真实渠道.如:bank_pingan
   */
  RealChannel: string

  /**
   * 原始金额
   */
  OriginalAmt: number

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
   * Web端回调地址
   */
  CallbackUrl?: string

  /**
      * 指定支付渠道：  wechat：微信支付  qqwallet：QQ钱包 
 bank：网银支付  只有一个渠道时需要指定
      */
  Channel?: string

  /**
   * 透传字段，支付成功回调透传给应用，用于业务透传自定义内容
   */
  Metadata?: string

  /**
   * 购买数量，不传默认为1
   */
  Quantity?: number

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId?: string

  /**
      * 子订单信息列表，格式：子订单号、子应用ID、金额。 压缩后最长不可超过65535字节(去除空格，换行，制表符等无意义字符)
注：接入银行或其他支付渠道服务商模式下，必传
      */
  SubOrderList?: Array<UnifiedOrderInSubOrderList>

  /**
   * 结算应收金额，单位：分
   */
  TotalMchIncome?: number

  /**
   * 平台应收金额，单位：分
   */
  TotalPlatformIncome?: number

  /**
   * 微信公众号/小程序支付时为必选，需要传微信下的openid
   */
  WxOpenId?: string

  /**
   * 在服务商模式下，微信公众号/小程序支付时wx_sub_openid和wx_openid二选一
   */
  WxSubOpenId?: string

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string

  /**
   * 微信商户应用ID
   */
  WxAppId?: string

  /**
   * 微信商户子应用ID
   */
  WxSubAppId?: string

  /**
   * 支付通知地址
   */
  PaymentNotifyUrl?: string
}

/**
 * 绑卡列表
 */
export interface BankCardItem {
  /**
   * 超级网银行号
   */
  EiconBankBranchId: string

  /**
   * 大小额行号
   */
  CnapsBranchId: string

  /**
      * 结算账户类型
1 – 本行账户
2 – 他行账户
      */
  SettleAcctType: number

  /**
      * 结算账户户名
<敏感信息>
      */
  SettleAcctName: string

  /**
   * 开户行名称
   */
  AcctBranchName: string

  /**
      * 用于提现
<敏感信息>
      */
  SettleAcctNo: string

  /**
   * 聚鑫计费SubAppId，代表子商户
   */
  SubAppId: string

  /**
      * 验证类型
1 – 小额转账验证
2 – 短信验证
      */
  BindType: number

  /**
      * 用于短信验证
BindType==2时必填
<敏感信息>
      */
  Mobile: string

  /**
   * 证件类型
   */
  IdType: string

  /**
      * 证件号码
<敏感信息>
      */
  IdCode: string
}

/**
 * MigrateOrderRefund返回参数结构体
 */
export interface MigrateOrderRefundResponse {
  /**
   * 请求成功状态
   */
  IsSuccess?: boolean

  /**
   * 退款流水号
   */
  TradeSerialNo?: string

  /**
   * 交易备注
   */
  TradeMsg?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryBatchPaymentResultData复杂类型中的TransferInfoList
 */
export interface QueryBatchPaymentResultDataInfo {
  /**
      * 订单号
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrderId: string

  /**
      * 代理商ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AgentId: string

  /**
      * 代理商名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  AgentName: string

  /**
      * 交易状态。
0 处理中  
1 预占成功 
2 交易成功 
3 交易失败 
4 未知渠道异常 
5 预占额度失败
6 提交成功
7 提交失败
8 订单重复提交
99 未知系统异常
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusDesc: string

  /**
      * 转账金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferAmount: number
}

/**
 * QueryAnchorContractInfo返回参数结构体
 */
export interface QueryAnchorContractInfoResponse {
  /**
   * 签约主播数据
   */
  AnchorContractInfoList: Array<AnchorContractInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAgentTaxPaymentInfo返回参数结构体
 */
export interface DeleteAgentTaxPaymentInfoResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Refund请求参数结构体
 */
export interface RefundRequest {
  /**
   * 用户ID，长度不小于5位， 仅支持字母和数字的组合
   */
  UserId: string

  /**
   * 退款订单号，仅支持数字、 字母、下划线（_）、横杠字 符（-）、点（.）的组合
   */
  RefundId: string

  /**
   * 聚鑫分配的支付主MidasAppId
   */
  MidasAppId: string

  /**
   * 退款金额，单位：分。备注：当该字段为空或者为0 时，系统会默认使用订单当 实付金额作为退款金额
   */
  TotalRefundAmt: number

  /**
   * 聚鑫分配的安全ID
   */
  MidasSecretId: string

  /**
   * 按照聚鑫安全密钥计算的签名
   */
  MidasSignature: string

  /**
   * 商品订单，仅支持数字、字 母、下划线（_）、横杠字符 （-）、点（.）的组合。  OutTradeNo ,TransactionId 二选一,不能都为空,优先使用 OutTradeNo
   */
  OutTradeNo?: string

  /**
   * 结算应收金额，单位：分
   */
  MchRefundAmt?: number

  /**
   * 调用下单接口获取的聚鑫交 易订单。  OutTradeNo ,TransactionId 二选一,不能都为空,优先使用 OutTradeNo
   */
  TransactionId?: string

  /**
   * 平台应收金额，单位：分
   */
  PlatformRefundAmt?: number

  /**
   * 支持多个子订单批量退款单 个子订单退款支持传 SubOutTradeNo ，也支持传 SubOutTradeNoList ，都传的时候以 SubOutTradeNoList 为准。  如果传了子单退款细节，外 部不需要再传退款金额，平 台应退，商户应退金额，我 们可以直接根据子单退款算出来总和。
   */
  SubOrderRefundList?: Array<RefundOutSubOrderRefundList>

  /**
      * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
      */
  MidasEnvironment?: string
}

/**
 * BindRelateAccReUnionPay返回参数结构体
 */
export interface BindRelateAccReUnionPayResponse {
  /**
      * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrontSeqNo?: string

  /**
      * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMsg?: string

  /**
   * String(20)，返回码
   */
  TxnReturnCode?: string

  /**
   * String(100)，返回信息
   */
  TxnReturnMsg?: string

  /**
   * String(22)，交易流水号
   */
  CnsmrSeqNo?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ContractOrder返回参数结构体
 */
export interface ContractOrderResponse {
  /**
   * 支付金额，单位： 分
   */
  TotalAmt: number

  /**
   * 应用支付订单号
   */
  OutTradeNo: string

  /**
   * 支付参数透传给聚鑫SDK（原文透传给SDK即可，不需要解码）
   */
  PayInfo: string

  /**
   * 聚鑫的交易订单号
   */
  TransactionId: string

  /**
   * 外部签约协议号
   */
  OutContractCode: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryMerchantOrder返回参数结构体
 */
export interface QueryMerchantOrderResponse {
  /**
   * 进件成功后返给商户方的AppId。
   */
  MerchantAppId: string

  /**
   * 平台流水号。平台唯一订单号。
   */
  OrderNo: string

  /**
   * 订单支付状态。0-下单失败 1-下单成功未支付 2-支付成功 3-支付失败 4-退款中 5-退款成功 6-退款失败 7-待付款 8-待确认。
   */
  Status: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryMerchant返回参数结构体
 */
export interface QueryMerchantResponse {
  /**
   * 分配给商户的 AppId，该 AppId 为后续各项 交易的商户标识。
   */
  MerchantAppId: string

  /**
   * 收款商户名称。
   */
  MerchantName: string

  /**
   * B2B 支付标志。是否开通 B2B 支付， 1:开通 0:不开通。
   */
  BusinessPayFlag: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateInvoiceV2请求参数结构体
 */
export interface CreateInvoiceV2Request {
  /**
   * 开票平台ID。0：高灯，1：票易通
   */
  InvoicePlatformId: number

  /**
   * 抬头类型：1：个人/政府事业单位；2：企业
   */
  TitleType: number

  /**
   * 购方名称
   */
  BuyerTitle: string

  /**
   * 业务开票号
   */
  OrderId: string

  /**
   * 含税总金额（单位为分）
   */
  AmountHasTax: number

  /**
   * 总税额（单位为分）
   */
  TaxAmount: number

  /**
   * 不含税总金额（单位为分）。InvoicePlatformId 为1时，传默认值-1
   */
  AmountWithoutTax: number

  /**
   * 销方纳税人识别号
   */
  SellerTaxpayerNum: string

  /**
   * 销方名称。（不填默认读取商户注册时输入的信息）
   */
  SellerName?: string

  /**
   * 销方地址。（不填默认读取商户注册时输入的信息）
   */
  SellerAddress?: string

  /**
   * 销方电话。（不填默认读取商户注册时输入的信息）
   */
  SellerPhone?: string

  /**
   * 销方银行名称。（不填默认读取商户注册时输入的信息）
   */
  SellerBankName?: string

  /**
   * 销方银行账号。（不填默认读取商户注册时输入的信息）
   */
  SellerBankAccount?: string

  /**
   * 购方纳税人识别号（购方票面信息）,若抬头类型为2时，必传
   */
  BuyerTaxpayerNum?: string

  /**
   * 购方地址。开具专用发票时必填
   */
  BuyerAddress?: string

  /**
   * 购方银行名称。开具专用发票时必填
   */
  BuyerBankName?: string

  /**
   * 购方银行账号。开具专用发票时必填
   */
  BuyerBankAccount?: string

  /**
   * 购方电话。开具专用发票时必填
   */
  BuyerPhone?: string

  /**
   * 收票人邮箱。若填入，会收到发票推送邮件
   */
  BuyerEmail?: string

  /**
   * 收票人手机号。若填入，会收到发票推送短信
   */
  TakerPhone?: string

  /**
      * 开票类型：
1：增值税专用发票；
2：增值税普通发票；
3：增值税电子发票；
4：增值税卷式发票；
5：区块链电子发票。
若该字段不填，或值不为1-5，则认为开具”增值税电子发票”
      */
  InvoiceType?: number

  /**
   * 发票结果回传地址
   */
  CallbackUrl?: string

  /**
   * 开票人姓名。（不填默认读取商户注册时输入的信息）
   */
  Drawer?: string

  /**
   * 收款人姓名。（不填默认读取商户注册时输入的信息）
   */
  Payee?: string

  /**
   * 复核人姓名。（不填默认读取商户注册时输入的信息）
   */
  Checker?: string

  /**
   * 税盘号
   */
  TerminalCode?: string

  /**
   * 征收方式。开具差额征税发票时必填2。开具普通征税发票时为空
   */
  LevyMethod?: string

  /**
   * 差额征税扣除额（单位为分）
   */
  Deduction?: number

  /**
   * 备注（票面信息）
   */
  Remark?: string

  /**
   * 项目商品明细
   */
  Items?: Array<CreateInvoiceItem>

  /**
   * 接入环境。沙箱环境填sandbox。
   */
  Profile?: string

  /**
   * 撤销部分商品。0-不撤销，1-撤销
   */
  UndoPart?: number

  /**
   * 订单下单时间（格式 YYYYMMDD）
   */
  OrderDate?: string

  /**
   * 订单级别折扣（单位为分）
   */
  Discount?: number

  /**
   * 门店编码
   */
  StoreNo?: string

  /**
   * 开票渠道。0：APP渠道，1：线下渠道，2：小程序渠道。不填默认为APP渠道
   */
  InvoiceChannel?: number
}

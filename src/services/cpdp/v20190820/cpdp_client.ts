/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  QueryInvoiceResponse,
  QueryPayerinfoData,
  QueryOrderOutOrderList,
  ApplyTradeRequest,
  QueryOutwardOrderResponse,
  QueryExchangeRateResponse,
  UploadTaxPaymentRequest,
  QueryBatchPaymentResultRequest,
  UnifiedOrderInSubOrderList,
  QueryAcctBindingRequest,
  QueryAgentStatementsResponse,
  ModifyMntMbrBindRelateAcctBankCodeRequest,
  CreateMerchantResult,
  ApplyPayerInfoResponse,
  QueryMerchantPayWayListResponse,
  ApplyTradeResult,
  RevokeRechargeByThirdPayRequest,
  QueryTradeRequest,
  UnifiedOrderResponse,
  QueryBankWithdrawCashDetailsRequest,
  ApplyPayerinfoResult,
  QueryBatchPaymentResultData,
  QueryCustAcctIdBalanceRequest,
  QueryPayerInfoResponse,
  WithdrawItem,
  BindAcctRequest,
  ReviseMbrPropertyRequest,
  UploadTaxListResponse,
  MigrateOrderRefundQueryResponse,
  RevResigterBillSupportWithdrawRequest,
  CreateInvoiceResponse,
  AgentTaxPayment,
  CreateOrderRequest,
  ModifyBindedAccountRequest,
  CreateRedInvoiceResult,
  QueryBankWithdrawCashDetailsResponse,
  CreatePayMerchantRequest,
  ContractOrderRequest,
  ModifyAgentTaxPaymentInfoResponse,
  CreateSinglePaymentRequest,
  AgencyClientInfo,
  RefundOutSubOrderRefundList,
  UnbindRelateAcctRequest,
  WithdrawBill,
  QueryAcctInfoListRequest,
  CreateMerchantRequest,
  ApplyDeclareResult,
  DeleteAgentTaxPaymentInfoRequest,
  QueryInvoiceResult,
  QueryAcctBindingResponse,
  QueryMerchantInfoForManagementRequest,
  QueryCommonTransferRechargeResponse,
  QueryTradeData,
  ApplyOutwardOrderResponse,
  ApplyReWithdrawalResponse,
  QueryBatchPaymentResultResponse,
  RegisterBillRequest,
  CreateInvoiceItem,
  ApplyOutwardOrderData,
  RevokeRechargeByThirdPayResponse,
  CreateBatchPaymentResponse,
  QueryInvoiceV2Response,
  BindAccountResponse,
  CreateInvoiceResultData,
  CreateExternalAnchorRequest,
  CreateAgentTaxPaymentInfosRequest,
  ConfirmOrderResponse,
  CloseOrderResponse,
  ApplyPayerinfoData,
  ModifyMerchantRequest,
  CreateRedInvoiceItem,
  CheckAcctRequest,
  CheckAmountResponse,
  QueryOrderOutSubOrderList,
  ApplyReWithdrawalRequest,
  QueryOutwardOrderResult,
  CreateAgentTaxPaymentInfosResponse,
  RechargeByThirdPayRequest,
  RevokeMemberRechargeThirdPayRequest,
  QueryPayerInfoRequest,
  QueryMerchantInfoForManagementResponse,
  CreateTransferBatchResponse,
  QuerySingleTransactionStatusRequest,
  MerchantManagementList,
  CreateInvoiceResult,
  DescribeOrderStatusRequest,
  QueryDownloadBillURLRequest,
  BindAccountRequest,
  RegisterBillSupportWithdrawRequest,
  ModifyMerchantResponse,
  QuerySinglePayResult,
  RefundOrderResponse,
  QuerySinglePayResponse,
  UploadExternalAnchorInfoResponse,
  ResponseTerminateContract,
  QueryCustAcctIdBalanceResponse,
  CreateExternalAnchorResponse,
  QueryTradeResponse,
  DownloadBillResponse,
  RevokeMemberRechargeThirdPayResponse,
  CreateRedInvoiceRequest,
  QueryAcctInfoListResponse,
  DeleteAgentTaxPaymentInfosRequest,
  BindRelateAcctSmallAmountResponse,
  ContractInfo,
  QueryTransferBatchRequest,
  CreateTransferBatchRequest,
  ExecuteMemberTransactionResponse,
  OrganizationInfo,
  BindRelateAcctUnionPayRequest,
  CreateAcctRequest,
  TransferDetailRequest,
  ConfirmOrderRequest,
  RefundResponse,
  QueryAgentTaxPaymentBatchResponse,
  DeleteAgentTaxPaymentInfosResponse,
  ReturnContractInfo,
  RegisterBillSupportWithdrawResponse,
  QueryTransferResultResponse,
  QueryItem,
  SceneInfo,
  QueryContractResponse,
  CreateInvoiceResultV2,
  RegisterBehaviorResponse,
  QueryInvoiceResultData,
  QueryBillDownloadURLData,
  QuerySingleTransactionStatusResponse,
  QueryAcctInfoRequest,
  DescribeChargeDetailResponse,
  ApplyDeclareData,
  TransferDetailResponse,
  TranItem,
  ClearItem,
  MerchantManagementResult,
  Acct,
  QueryBankTransactionDetailsResponse,
  QueryTransferResultRequest,
  SyncContractDataResponse,
  CreateSinglePaymentData,
  QueryMerchantBalanceData,
  QueryMemberTransactionRequest,
  UploadTaxPaymentResponse,
  QueryExchangerateResult,
  QueryBillDownloadURLResponse,
  CreateRedInvoiceV2Request,
  QueryOutwardOrderRequest,
  TransactionItem,
  QueryMerchantBalanceRequest,
  CreateAcctResponse,
  DescribeChargeDetailRequest,
  RevResigterBillSupportWithdrawResponse,
  BindAcctResponse,
  CreateOrderResponse,
  CreateRedInvoiceResponse,
  QueryExchangerateData,
  CreateRedInvoiceResultV2,
  QueryMerchantOrderRequest,
  QueryTransferResultData,
  QueryTransferDetailResponse,
  UploadExternalAnchorInfoRequest,
  BindRelateAccReUnionPayRequest,
  CreateCustAcctIdResponse,
  QueryMerchantBalanceResponse,
  CreateSinglePayResult,
  QueryAcctInfoResponse,
  MigrateOrderRefundQueryRequest,
  QueryAgentTaxPaymentBatchRequest,
  QueryMerchantRequest,
  QueryPayerinfoResult,
  TransferItem,
  QueryInvoiceV2Request,
  QuerySinglePaymentResultRequest,
  OrderItem,
  CreateSinglePayRequest,
  QueryTransferBatchResponse,
  Order,
  RegisterBillResponse,
  WithdrawCashMembershipRequest,
  ApplyOutwardOrderRequest,
  CreatePayMerchantResponse,
  TerminateContractResponse,
  RechargeByThirdPayResponse,
  CheckAmountRequest,
  CreateMerchantResultData,
  AgentTaxPaymentBatch,
  RegisterInfo,
  QueryDownloadBillURLResponse,
  CreateInvoiceRequest,
  QueryAnchorContractInfoRequest,
  TransferSinglePayResponse,
  QueryTradeResult,
  QueryMemberBindResponse,
  AnchorContractInfo,
  QueryMerchantBalanceResult,
  MerchantPayWayData,
  QueryDeclareResult,
  CreateCustAcctIdRequest,
  QueryBankClearResponse,
  ChannelReturnContractInfo,
  UnBindAcctResponse,
  MigrateOrderRefundRequest,
  CreateRedInvoiceV2Response,
  QueryCommonTransferRechargeRequest,
  CreateBatchPaymentData,
  RegisterBehaviorRequest,
  ReviseMbrPropertyResponse,
  QueryTransferDetailRequest,
  QueryOrderRequest,
  CloseOrderRequest,
  QueryBankClearRequest,
  QueryBalanceResponse,
  ApplyWithdrawalResponse,
  QueryContractRequest,
  UnBindAcctRequest,
  RefundOrderRequest,
  TerminateContractRequest,
  QueryInvoiceRequest,
  TransferSinglePayData,
  CheckAcctResponse,
  QueryReconciliationDocumentResponse,
  QueryApplicationMaterialResponse,
  QueryExchangeRateRequest,
  ExternalReturnContractInfo,
  FileItem,
  RechargeMemberThirdPayRequest,
  QueryBillDownloadURLRequest,
  TransferSinglePayRequest,
  ApplyOutwardOrderResult,
  QuerySmallAmountTransferResponse,
  ApplyPayerInfoRequest,
  CreateSinglePayResponse,
  RefundMemberTransactionResponse,
  CreateInvoiceV2Response,
  CreateBatchPaymentBatchData,
  DownloadReconciliationUrlResponse,
  ModifyBindedAccountResponse,
  ApplyApplicationMaterialResponse,
  RefundMemberTransactionRequest,
  QueryBankTransactionDetailsRequest,
  QuerySinglePaymentResultData,
  DownloadBillRequest,
  QueryRefundRequest,
  CreateRedInvoiceResultData,
  QuerySinglePayRequest,
  ApplyTradeResponse,
  CreateExternalAnchorData,
  RechargeMemberThirdPayResponse,
  DescribeOrderStatusResponse,
  WithdrawCashMembershipResponse,
  QueryApplicationMaterialRequest,
  CreateMerchantResponse,
  CreateSinglePaymentResponse,
  ExternalContractUserInfo,
  ContractUserInfo,
  ApplyTradeData,
  QuerySinglePayItem,
  UnbindRelateAcctResponse,
  ApplyApplicationMaterialRequest,
  QueryAcctItem,
  ChannelContractInfo,
  ModifyAgentTaxPaymentInfoRequest,
  QuerySmallAmountTransferRequest,
  QueryMerchantPayWayListRequest,
  CreateBatchPaymentRecipient,
  DownloadReconciliationUrlRequest,
  CreateBatchPaymentRequest,
  ModifyMntMbrBindRelateAcctBankCodeResponse,
  QueryBalanceRequest,
  UploadTaxListRequest,
  ApplyWithdrawalRequest,
  ExecuteMemberTransactionRequest,
  ResponseQueryContract,
  BindRelateAcctSmallAmountRequest,
  QueryRefundResponse,
  ContractSyncInfo,
  QuerySinglePaymentResultResponse,
  ContractOrderInSubOrder,
  QueryDeclareData,
  QueryMemberTransactionResponse,
  QueryMemberBindRequest,
  SyncContractDataRequest,
  QueryAgentStatementsRequest,
  BindRelateAcctUnionPayResponse,
  QueryReconciliationDocumentRequest,
  QueryOrderResponse,
  QueryOutwardOrderData,
  UnifiedOrderRequest,
  BankCardItem,
  MigrateOrderRefundResponse,
  QueryBatchPaymentResultDataInfo,
  QueryAnchorContractInfoResponse,
  DeleteAgentTaxPaymentInfoResponse,
  RefundRequest,
  BindRelateAccReUnionPayResponse,
  ContractOrderResponse,
  QueryMerchantOrderResponse,
  QueryMerchantResponse,
  CreateInvoiceV2Request,
} from "./cpdp_models"

/**
 * cpdp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cpdp.tencentcloudapi.com", "2019-08-20", clientConfig)
  }

  /**
   * 直播平台-修改代理商完税信息
   */
  async ModifyAgentTaxPaymentInfo(
    req: ModifyAgentTaxPaymentInfoRequest,
    cb?: (error: string, rep: ModifyAgentTaxPaymentInfoResponse) => void
  ): Promise<ModifyAgentTaxPaymentInfoResponse> {
    return this.request("ModifyAgentTaxPaymentInfo", req, cb)
  }

  /**
   * 维护会员绑定提现账户联行号。此接口可以支持市场修改会员的提现账户的开户行信息，具体包括开户行行名、开户行的银行联行号（大小额联行号）和超级网银行号。
   */
  async ModifyMntMbrBindRelateAcctBankCode(
    req: ModifyMntMbrBindRelateAcctBankCodeRequest,
    cb?: (error: string, rep: ModifyMntMbrBindRelateAcctBankCodeResponse) => void
  ): Promise<ModifyMntMbrBindRelateAcctBankCodeResponse> {
    return this.request("ModifyMntMbrBindRelateAcctBankCode", req, cb)
  }

  /**
   * 灵云-批量主播转账接口
   */
  async CreateBatchPayment(
    req: CreateBatchPaymentRequest,
    cb?: (error: string, rep: CreateBatchPaymentResponse) => void
  ): Promise<CreateBatchPaymentResponse> {
    return this.request("CreateBatchPayment", req, cb)
  }

  /**
   * 灵云-主播入驻
   */
  async CreateExternalAnchor(
    req: CreateExternalAnchorRequest,
    cb?: (error: string, rep: CreateExternalAnchorResponse) => void
  ): Promise<CreateExternalAnchorResponse> {
    return this.request("CreateExternalAnchor", req, cb)
  }

  /**
   * 根据订单号，或者用户Id，查询支付订单状态
   */
  async QueryOrder(
    req: QueryOrderRequest,
    cb?: (error: string, rep: QueryOrderResponse) => void
  ): Promise<QueryOrderResponse> {
    return this.request("QueryOrder", req, cb)
  }

  /**
   * 灵云-上传主播信息
   */
  async UploadExternalAnchorInfo(
    req: UploadExternalAnchorInfoRequest,
    cb?: (error: string, rep: UploadExternalAnchorInfoResponse) => void
  ): Promise<UploadExternalAnchorInfoResponse> {
    return this.request("UploadExternalAnchorInfo", req, cb)
  }

  /**
   * 会员提现-不验证。此接口受理会员发起的提现申请。会员子账户的可提现余额、可用余额会减少，市场的资金汇总账户(监管账户)会减少相应的发生金额，提现到会员申请的收款账户。
   */
  async WithdrawCashMembership(
    req: WithdrawCashMembershipRequest,
    cb?: (error: string, rep: WithdrawCashMembershipResponse) => void
  ): Promise<WithdrawCashMembershipResponse> {
    return this.request("WithdrawCashMembership", req, cb)
  }

  /**
   * 查询银行时间段内交易明细。查询时间段的会员成功交易。
   */
  async QueryBankTransactionDetails(
    req: QueryBankTransactionDetailsRequest,
    cb?: (error: string, rep: QueryBankTransactionDetailsResponse) => void
  ): Promise<QueryBankTransactionDetailsResponse> {
    return this.request("QueryBankTransactionDetails", req, cb)
  }

  /**
   * 查询普通转账充值明细。接口用于查询会员主动转账进资金汇总账户的明细情况。若会员使用绑定账号转入，则直接入账到会员子账户。若未使用绑定账号转入，则系统无法自动清分到对应子账户，则转入挂账子账户由平台自行清分。若是 “见证+收单充值”T0充值记录时备注Note为“见证+收单充值,订单号” 此接口可以查到T0到账的“见证+收单充值”充值记录。
   */
  async QueryCommonTransferRecharge(
    req: QueryCommonTransferRechargeRequest,
    cb?: (error: string, rep: QueryCommonTransferRechargeResponse) => void
  ): Promise<QueryCommonTransferRechargeResponse> {
    return this.request("QueryCommonTransferRecharge", req, cb)
  }

  /**
   * 账单下载接口，根据本接口返回的URL地址，在D+1日下载对账单。注意，本接口返回的URL地址有时效，请尽快下载。URL超时时效后，请重新调用本接口再次获取。
   */
  async DownloadBill(
    req: DownloadBillRequest,
    cb?: (error: string, rep: DownloadBillResponse) => void
  ): Promise<DownloadBillResponse> {
    return this.request("DownloadBill", req, cb)
  }

  /**
   * 查询银行子账户余额。查询会员子账户以及平台的功能子账户的余额。
   */
  async QueryCustAcctIdBalance(
    req: QueryCustAcctIdBalanceRequest,
    cb?: (error: string, rep: QueryCustAcctIdBalanceResponse) => void
  ): Promise<QueryCustAcctIdBalanceResponse> {
    return this.request("QueryCustAcctIdBalance", req, cb)
  }

  /**
   * 直播平台-查询主播签约信息
   */
  async QueryAnchorContractInfo(
    req: QueryAnchorContractInfoRequest,
    cb?: (error: string, rep: QueryAnchorContractInfoResponse) => void
  ): Promise<QueryAnchorContractInfoResponse> {
    return this.request("QueryAnchorContractInfo", req, cb)
  }

  /**
   * 商户查询已开通的支付方式列表
   */
  async QueryMerchantPayWayList(
    req: QueryMerchantPayWayListRequest,
    cb?: (error: string, rep: QueryMerchantPayWayListResponse) => void
  ): Promise<QueryMerchantPayWayListResponse> {
    return this.request("QueryMerchantPayWayList", req, cb)
  }

  /**
   * 跨境-付款人查询
   */
  async QueryPayerInfo(
    req: QueryPayerInfoRequest,
    cb?: (error: string, rep: QueryPayerInfoResponse) => void
  ): Promise<QueryPayerInfoResponse> {
    return this.request("QueryPayerInfo", req, cb)
  }

  /**
   * 跨境-贸易材料明细查询。
   */
  async QueryTrade(
    req: QueryTradeRequest,
    cb?: (error: string, rep: QueryTradeResponse) => void
  ): Promise<QueryTradeResponse> {
    return this.request("QueryTrade", req, cb)
  }

  /**
   * 通过商家或者微信批次明细单号查询明细单
   */
  async QueryTransferDetail(
    req: QueryTransferDetailRequest,
    cb?: (error: string, rep: QueryTransferDetailResponse) => void
  ): Promise<QueryTransferDetailResponse> {
    return this.request("QueryTransferDetail", req, cb)
  }

  /**
   * 查询银行单笔交易状态。查询单笔交易的状态。
   */
  async QuerySingleTransactionStatus(
    req: QuerySingleTransactionStatusRequest,
    cb?: (error: string, rep: QuerySingleTransactionStatusResponse) => void
  ): Promise<QuerySingleTransactionStatusResponse> {
    return this.request("QuerySingleTransactionStatus", req, cb)
  }

  /**
   * 跨境-提交申报材料。申报材料的主体是付款人，需要提前调用【跨境-付款人申请】接口提交付款人信息且审核通过后调用。
   */
  async ApplyApplicationMaterial(
    req: ApplyApplicationMaterialRequest,
    cb?: (error: string, rep: ApplyApplicationMaterialResponse) => void
  ): Promise<ApplyApplicationMaterialResponse> {
    return this.request("ApplyApplicationMaterial", req, cb)
  }

  /**
   * 微信商户发起批量转账
   */
  async CreateTransferBatch(
    req: CreateTransferBatchRequest,
    cb?: (error: string, rep: CreateTransferBatchResponse) => void
  ): Promise<CreateTransferBatchResponse> {
    return this.request("CreateTransferBatch", req, cb)
  }

  /**
   * 智慧零售-发票开具V2
   */
  async CreateInvoiceV2(
    req: CreateInvoiceV2Request,
    cb?: (error: string, rep: CreateInvoiceV2Response) => void
  ): Promise<CreateInvoiceV2Response> {
    return this.request("CreateInvoiceV2", req, cb)
  }

  /**
   * 智慧零售-发票查询
   */
  async QueryInvoice(
    req: QueryInvoiceRequest,
    cb?: (error: string, rep: QueryInvoiceResponse) => void
  ): Promise<QueryInvoiceResponse> {
    return this.request("QueryInvoice", req, cb)
  }

  /**
   * 跨境-查询汇率
   */
  async QueryExchangeRate(
    req: QueryExchangeRateRequest,
    cb?: (error: string, rep: QueryExchangeRateResponse) => void
  ): Promise<QueryExchangeRateResponse> {
    return this.request("QueryExchangeRate", req, cb)
  }

  /**
   * 会员解绑提现账户。此接口可以支持会员解除名下的绑定账户关系。
   */
  async UnbindRelateAcct(
    req: UnbindRelateAcctRequest,
    cb?: (error: string, rep: UnbindRelateAcctResponse) => void
  ): Promise<UnbindRelateAcctResponse> {
    return this.request("UnbindRelateAcct", req, cb)
  }

  /**
   * 商户新增的接口
   */
  async CreatePayMerchant(
    req: CreatePayMerchantRequest,
    cb?: (error: string, rep: CreatePayMerchantResponse) => void
  ): Promise<CreatePayMerchantResponse> {
    return this.request("CreatePayMerchant", req, cb)
  }

  /**
   * 灵云-单笔转账结果查询
   */
  async QuerySinglePaymentResult(
    req: QuerySinglePaymentResultRequest,
    cb?: (error: string, rep: QuerySinglePaymentResultResponse) => void
  ): Promise<QuerySinglePaymentResultResponse> {
    return this.request("QuerySinglePaymentResult", req, cb)
  }

  /**
   * 直播平台-上传代理商完税证明
   */
  async UploadTaxPayment(
    req: UploadTaxPaymentRequest,
    cb?: (error: string, rep: UploadTaxPaymentResponse) => void
  ): Promise<UploadTaxPaymentResponse> {
    return this.request("UploadTaxPayment", req, cb)
  }

  /**
   * 智能代发-单笔代发转账接口
   */
  async TransferSinglePay(
    req: TransferSinglePayRequest,
    cb?: (error: string, rep: TransferSinglePayResponse) => void
  ): Promise<TransferSinglePayResponse> {
    return this.request("TransferSinglePay", req, cb)
  }

  /**
   * 查询充值明细接口
   */
  async DescribeChargeDetail(
    req: DescribeChargeDetailRequest,
    cb?: (error: string, rep: DescribeChargeDetailResponse) => void
  ): Promise<DescribeChargeDetailResponse> {
    return this.request("DescribeChargeDetail", req, cb)
  }

  /**
   * 登记挂账(支持撤销)。此接口可实现把不明来账或自有资金等已登记在挂账子账户下的资金调整到普通会员子账户。即通过申请调用此接口，将会减少挂账子账户的资金，调增指定的普通会员子账户的可提现余额及可用余额。此接口不支持把挂账子账户资金清分到功能子账户。
   */
  async RegisterBillSupportWithdraw(
    req: RegisterBillSupportWithdrawRequest,
    cb?: (error: string, rep: RegisterBillSupportWithdrawResponse) => void
  ): Promise<RegisterBillSupportWithdrawResponse> {
    return this.request("RegisterBillSupportWithdraw", req, cb)
  }

  /**
   * 直播平台-删除代理商完税信息
   */
  async DeleteAgentTaxPaymentInfo(
    req: DeleteAgentTaxPaymentInfoRequest,
    cb?: (error: string, rep: DeleteAgentTaxPaymentInfoResponse) => void
  ): Promise<DeleteAgentTaxPaymentInfoResponse> {
    return this.request("DeleteAgentTaxPaymentInfo", req, cb)
  }

  /**
   * 直播平台-代理商完税信息录入
   */
  async CreateAgentTaxPaymentInfos(
    req: CreateAgentTaxPaymentInfosRequest,
    cb?: (error: string, rep: CreateAgentTaxPaymentInfosResponse) => void
  ): Promise<CreateAgentTaxPaymentInfosResponse> {
    return this.request("CreateAgentTaxPaymentInfos", req, cb)
  }

  /**
   * 直播平台-删除代理商完税信息
   */
  async DeleteAgentTaxPaymentInfos(
    req: DeleteAgentTaxPaymentInfosRequest,
    cb?: (error: string, rep: DeleteAgentTaxPaymentInfosResponse) => void
  ): Promise<DeleteAgentTaxPaymentInfosResponse> {
    return this.request("DeleteAgentTaxPaymentInfos", req, cb)
  }

  /**
   * 应用需要先带上签约信息调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
   */
  async ContractOrder(
    req: ContractOrderRequest,
    cb?: (error: string, rep: ContractOrderResponse) => void
  ): Promise<ContractOrderResponse> {
    return this.request("ContractOrder", req, cb)
  }

  /**
   * 商户查询是否签约和签约行为上报
   */
  async RegisterBehavior(
    req: RegisterBehaviorRequest,
    cb?: (error: string, rep: RegisterBehaviorResponse) => void
  ): Promise<RegisterBehaviorResponse> {
    return this.request("RegisterBehavior", req, cb)
  }

  /**
   * 跨境-对接方账户余额查询
   */
  async QueryMerchantBalance(
    req: QueryMerchantBalanceRequest,
    cb?: (error: string, rep: QueryMerchantBalanceResponse) => void
  ): Promise<QueryMerchantBalanceResponse> {
    return this.request("QueryMerchantBalance", req, cb)
  }

  /**
   * 应用需要先调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
   */
  async UnifiedOrder(
    req: UnifiedOrderRequest,
    cb?: (error: string, rep: UnifiedOrderResponse) => void
  ): Promise<UnifiedOrderResponse> {
    return this.request("UnifiedOrder", req, cb)
  }

  /**
   * 商户解除绑定的提现银行卡
   */
  async UnBindAcct(
    req: UnBindAcctRequest,
    cb?: (error: string, rep: UnBindAcctResponse) => void
  ): Promise<UnBindAcctResponse> {
    return this.request("UnBindAcct", req, cb)
  }

  /**
   * 云鉴-消费订单确认接口
   */
  async ConfirmOrder(
    req: ConfirmOrderRequest,
    cb?: (error: string, rep: ConfirmOrderResponse) => void
  ): Promise<ConfirmOrderResponse> {
    return this.request("ConfirmOrder", req, cb)
  }

  /**
   * 智慧零售-发票查询V2
   */
  async QueryInvoiceV2(
    req: QueryInvoiceV2Request,
    cb?: (error: string, rep: QueryInvoiceV2Response) => void
  ): Promise<QueryInvoiceV2Response> {
    return this.request("QueryInvoiceV2", req, cb)
  }

  /**
   * 智能代发-单笔代发转账查询接口
   */
  async QueryTransferResult(
    req: QueryTransferResultRequest,
    cb?: (error: string, rep: QueryTransferResultResponse) => void
  ): Promise<QueryTransferResultResponse> {
    return this.request("QueryTransferResult", req, cb)
  }

  /**
   * 跨境-查询汇出结果
   */
  async QueryOutwardOrder(
    req: QueryOutwardOrderRequest,
    cb?: (error: string, rep: QueryOutwardOrderResponse) => void
  ): Promise<QueryOutwardOrderResponse> {
    return this.request("QueryOutwardOrder", req, cb)
  }

  /**
   * 山姆聚合支付项目-存量订单退款接口。可以通过本接口将支付款全部或部分退还给付款方，在收到用户退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。
   */
  async MigrateOrderRefund(
    req: MigrateOrderRefundRequest,
    cb?: (error: string, rep: MigrateOrderRefundResponse) => void
  ): Promise<MigrateOrderRefundResponse> {
    return this.request("MigrateOrderRefund", req, cb)
  }

  /**
   * 聚鑫-开户信息查询
   */
  async QueryAcctInfo(
    req: QueryAcctInfoRequest,
    cb?: (error: string, rep: QueryAcctInfoResponse) => void
  ): Promise<QueryAcctInfoResponse> {
    return this.request("QueryAcctInfo", req, cb)
  }

  /**
   * 查询银行时间段内清分提现明细。查询银行时间段内清分提现明细接口：若为“见证+收单退款”“见证+收单充值”记录时备注Note为“见证+收单充值,订单号”“见证+收单退款,订单号”，此接口可以查到T0/T1的充值明细和退款记录。查询标志：充值记录仍用3清分选项查询，退款记录同提现用2选项查询。
   */
  async QueryBankWithdrawCashDetails(
    req: QueryBankWithdrawCashDetailsRequest,
    cb?: (error: string, rep: QueryBankWithdrawCashDetailsResponse) => void
  ): Promise<QueryBankWithdrawCashDetailsResponse> {
    return this.request("QueryBankWithdrawCashDetails", req, cb)
  }

  /**
   * 云鉴-查询对账单下载地址的接口
   */
  async QueryDownloadBillURL(
    req: QueryDownloadBillURLRequest,
    cb?: (error: string, rep: QueryDownloadBillURLResponse) => void
  ): Promise<QueryDownloadBillURLResponse> {
    return this.request("QueryDownloadBillURL", req, cb)
  }

  /**
   * 商户绑定提现银行卡的验证接口
   */
  async CheckAcct(
    req: CheckAcctRequest,
    cb?: (error: string, rep: CheckAcctResponse) => void
  ): Promise<CheckAcctResponse> {
    return this.request("CheckAcct", req, cb)
  }

  /**
   * 灵云-绑定账号
   */
  async BindAccount(
    req: BindAccountRequest,
    cb?: (error: string, rep: BindAccountResponse) => void
  ): Promise<BindAccountResponse> {
    return this.request("BindAccount", req, cb)
  }

  /**
   * 云鉴-消费订单查询接口
   */
  async QueryMerchantOrder(
    req: QueryMerchantOrderRequest,
    cb?: (error: string, rep: QueryMerchantOrderResponse) => void
  ): Promise<QueryMerchantOrderResponse> {
    return this.request("QueryMerchantOrder", req, cb)
  }

  /**
   * 智慧零售-发票红冲V2
   */
  async CreateRedInvoiceV2(
    req: CreateRedInvoiceV2Request,
    cb?: (error: string, rep: CreateRedInvoiceV2Response) => void
  ): Promise<CreateRedInvoiceV2Response> {
    return this.request("CreateRedInvoiceV2", req, cb)
  }

  /**
   * 对于存量的签约关系导入或者部分场景下米大师无法收到签约通知的场景，需要由调用方主动将签约状态同步至米大师
   */
  async SyncContractData(
    req: SyncContractDataRequest,
    cb?: (error: string, rep: SyncContractDataResponse) => void
  ): Promise<SyncContractDataResponse> {
    return this.request("SyncContractData", req, cb)
  }

  /**
   * 云鉴-商户信息修改的接口
   */
  async ModifyMerchant(
    req: ModifyMerchantRequest,
    cb?: (error: string, rep: ModifyMerchantResponse) => void
  ): Promise<ModifyMerchantResponse> {
    return this.request("ModifyMerchant", req, cb)
  }

  /**
   * 灵云-重新绑定账号
   */
  async ModifyBindedAccount(
    req: ModifyBindedAccountRequest,
    cb?: (error: string, rep: ModifyBindedAccountResponse) => void
  ): Promise<ModifyBindedAccountResponse> {
    return this.request("ModifyBindedAccount", req, cb)
  }

  /**
   * 验证鉴权金额。此接口可受理BindRelateAcctSmallAmount接口发起的转账金额（往账鉴权方式）的验证处理。若所回填的验证金额验证通过，则会绑定原申请中的银行账户作为提现账户。通过此接口也可以查得BindRelateAcctSmallAmount接口发起的来账鉴权方式的申请的当前状态。
   */
  async CheckAmount(
    req: CheckAmountRequest,
    cb?: (error: string, rep: CheckAmountResponse) => void
  ): Promise<CheckAmountResponse> {
    return this.request("CheckAmount", req, cb)
  }

  /**
   * 商户绑定提现银行卡，每个商户只能绑定一张提现银行卡
   */
  async BindAcct(
    req: BindAcctRequest,
    cb?: (error: string, rep: BindAcctResponse) => void
  ): Promise<BindAcctResponse> {
    return this.request("BindAcct", req, cb)
  }

  /**
     * 会员绑定提现账户-小额鉴权。会员申请绑定提现账户，绑定后从会员子账户中提现到绑定账户。
转账鉴权有两种形式：往账鉴权和来账鉴权。
往账鉴权：该接口发起成功后，银行会向提现账户转入小于等于0.5元的随机金额，并短信通知客户查看，客户查看后，需将收到的金额大小，在电商平台页面上回填，并通知银行。银行验证通过后，完成提现账户绑定。
来账鉴权：该接口发起成功后，银行以短信通知客户查看，客户查看后，需通过待绑定的账户往市场的监管账户转入短信上指定的金额。银行检索到该笔指定金额的来账是源自待绑定账户，则绑定成功。平安银行的账户，即BankType送1时，大小额行号和超级网银号都不用送。
     */
  async BindRelateAcctSmallAmount(
    req: BindRelateAcctSmallAmountRequest,
    cb?: (error: string, rep: BindRelateAcctSmallAmountResponse) => void
  ): Promise<BindRelateAcctSmallAmountResponse> {
    return this.request("BindRelateAcctSmallAmount", req, cb)
  }

  /**
   * 云鉴-消费订单发起的接口
   */
  async CreateOrder(
    req: CreateOrderRequest,
    cb?: (error: string, rep: CreateOrderResponse) => void
  ): Promise<CreateOrderResponse> {
    return this.request("CreateOrder", req, cb)
  }

  /**
     * 会员绑定信息查询。查询标志为“单个会员”的情况下，返回该会员的有效的绑定账户信息。
查询标志为“全部会员”的情况下，返回市场下的全部的有效的绑定账户信息。查询标志为“单个会员的证件信息”的情况下，返回市场下的指定的会员的留存在电商见证宝系统的证件信息。
     */
  async QueryMemberBind(
    req: QueryMemberBindRequest,
    cb?: (error: string, rep: QueryMemberBindResponse) => void
  ): Promise<QueryMemberBindResponse> {
    return this.request("QueryMemberBind", req, cb)
  }

  /**
   * 云鉴-商户信息查询接口
   */
  async QueryMerchant(
    req: QueryMerchantRequest,
    cb?: (error: string, rep: QueryMerchantResponse) => void
  ): Promise<QueryMerchantResponse> {
    return this.request("QueryMerchant", req, cb)
  }

  /**
   * 修改会员属性-普通商户子账户。修改会员的会员属性。
   */
  async ReviseMbrProperty(
    req: ReviseMbrPropertyRequest,
    cb?: (error: string, rep: ReviseMbrPropertyResponse) => void
  ): Promise<ReviseMbrPropertyResponse> {
    return this.request("ReviseMbrProperty", req, cb)
  }

  /**
   * 子商户余额查询
   */
  async QueryBalance(
    req: QueryBalanceRequest,
    cb?: (error: string, rep: QueryBalanceResponse) => void
  ): Promise<QueryBalanceResponse> {
    return this.request("QueryBalance", req, cb)
  }

  /**
   * 撤销会员在途充值(经第三方支付渠道)接口
   */
  async RevokeRechargeByThirdPay(
    req: RevokeRechargeByThirdPayRequest,
    cb?: (error: string, rep: RevokeRechargeByThirdPayResponse) => void
  ): Promise<RevokeRechargeByThirdPayResponse> {
    return this.request("RevokeRechargeByThirdPay", req, cb)
  }

  /**
   * 直播平台-查询批次信息
   */
  async QueryAgentTaxPaymentBatch(
    req: QueryAgentTaxPaymentBatchRequest,
    cb?: (error: string, rep: QueryAgentTaxPaymentBatchResponse) => void
  ): Promise<QueryAgentTaxPaymentBatchResponse> {
    return this.request("QueryAgentTaxPaymentBatch", req, cb)
  }

  /**
   * 查询单笔订单交易状态
   */
  async DescribeOrderStatus(
    req: DescribeOrderStatusRequest,
    cb?: (error: string, rep: DescribeOrderStatusResponse) => void
  ): Promise<DescribeOrderStatusResponse> {
    return this.request("DescribeOrderStatus", req, cb)
  }

  /**
   * 聚鑫-查询子账户绑定银行卡
   */
  async QueryAcctBinding(
    req: QueryAcctBindingRequest,
    cb?: (error: string, rep: QueryAcctBindingResponse) => void
  ): Promise<QueryAcctBindingResponse> {
    return this.request("QueryAcctBinding", req, cb)
  }

  /**
   * 跨境-汇出指令申请。通过该接口可将对接方账户中的人民币余额汇兑成外币，再汇出至指定银行账户。
   */
  async ApplyOutwardOrder(
    req: ApplyOutwardOrderRequest,
    cb?: (error: string, rep: ApplyOutwardOrderResponse) => void
  ): Promise<ApplyOutwardOrderResponse> {
    return this.request("ApplyOutwardOrder", req, cb)
  }

  /**
   * 跨境-付款人申请。通过该接口提交付款人信息并进行 kyc 审核。
   */
  async ApplyPayerInfo(
    req: ApplyPayerInfoRequest,
    cb?: (error: string, rep: ApplyPayerInfoResponse) => void
  ): Promise<ApplyPayerInfoResponse> {
    return this.request("ApplyPayerInfo", req, cb)
  }

  /**
   * 跨境-提交贸易材料。通过提交贸易材料接口可为对接方累计贸易额度，在额度范围内可发起汇兑汇出交易。
   */
  async ApplyTrade(
    req: ApplyTradeRequest,
    cb?: (error: string, rep: ApplyTradeResponse) => void
  ): Promise<ApplyTradeResponse> {
    return this.request("ApplyTrade", req, cb)
  }

  /**
   * 查询银行在途清算结果。查询时间段内交易网的在途清算结果。
   */
  async QueryBankClear(
    req: QueryBankClearRequest,
    cb?: (error: string, rep: QueryBankClearResponse) => void
  ): Promise<QueryBankClearResponse> {
    return this.request("QueryBankClear", req, cb)
  }

  /**
   * 会员绑定提现账户-回填银联鉴权短信码。用于会员填写动态验证码后，发往银行进行验证，验证成功则完成绑定。
   */
  async BindRelateAccReUnionPay(
    req: BindRelateAccReUnionPayRequest,
    cb?: (error: string, rep: BindRelateAccReUnionPayResponse) => void
  ): Promise<BindRelateAccReUnionPayResponse> {
    return this.request("BindRelateAccReUnionPay", req, cb)
  }

  /**
   * 智慧零售-发票红冲
   */
  async CreateRedInvoice(
    req: CreateRedInvoiceRequest,
    cb?: (error: string, rep: CreateRedInvoiceResponse) => void
  ): Promise<CreateRedInvoiceResponse> {
    return this.request("CreateRedInvoice", req, cb)
  }

  /**
   * 登记挂账撤销。此接口可以实现把RegisterBillSupportWithdraw接口完成的登记挂账进行撤销，即调减普通会员子账户的可提现和可用余额，调增挂账子账户的可用余额。
   */
  async RevResigterBillSupportWithdraw(
    req: RevResigterBillSupportWithdrawRequest,
    cb?: (error: string, rep: RevResigterBillSupportWithdrawResponse) => void
  ): Promise<RevResigterBillSupportWithdrawResponse> {
    return this.request("RevResigterBillSupportWithdraw", req, cb)
  }

  /**
   * 跨境-成功申报材料查询。查询成功入库的申报材料。
   */
  async QueryApplicationMaterial(
    req: QueryApplicationMaterialRequest,
    cb?: (error: string, rep: QueryApplicationMaterialResponse) => void
  ): Promise<QueryApplicationMaterialResponse> {
    return this.request("QueryApplicationMaterial", req, cb)
  }

  /**
   * 如交易订单需退款，可以通过本接口将支付款全部或部分退还给付款方，聚鑫将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。最长支持1年的订单退款。在订单包含多个子订单的情况下，如果使用本接口传入OutTradeNo或TransactionId退款，则只支持全单退款；如果需要部分退款，请通过传入子订单的方式来指定部分金额退款。
   */
  async Refund(
    req: RefundRequest,
    cb?: (error: string, rep: RefundResponse) => void
  ): Promise<RefundResponse> {
    return this.request("Refund", req, cb)
  }

  /**
   * 直播平台-上传代理商完税列表
   */
  async UploadTaxList(
    req: UploadTaxListRequest,
    cb?: (error: string, rep: UploadTaxListResponse) => void
  ): Promise<UploadTaxListResponse> {
    return this.request("UploadTaxList", req, cb)
  }

  /**
   * 见证宝-会员在途充值(经第三方支付渠道)
   */
  async RechargeMemberThirdPay(
    req: RechargeMemberThirdPayRequest,
    cb?: (error: string, rep: RechargeMemberThirdPayResponse) => void
  ): Promise<RechargeMemberThirdPayResponse> {
    return this.request("RechargeMemberThirdPay", req, cb)
  }

  /**
   * 智慧零售-商户注册
   */
  async CreateMerchant(
    req: CreateMerchantRequest,
    cb?: (error: string, rep: CreateMerchantResponse) => void
  ): Promise<CreateMerchantResponse> {
    return this.request("CreateMerchant", req, cb)
  }

  /**
   * 子商户入驻聚鑫平台
   */
  async CreateAcct(
    req: CreateAcctRequest,
    cb?: (error: string, rep: CreateAcctResponse) => void
  ): Promise<CreateAcctResponse> {
    return this.request("CreateAcct", req, cb)
  }

  /**
   * 会员间交易接口
   */
  async ExecuteMemberTransaction(
    req: ExecuteMemberTransactionRequest,
    cb?: (error: string, rep: ExecuteMemberTransactionResponse) => void
  ): Promise<ExecuteMemberTransactionResponse> {
    return this.request("ExecuteMemberTransaction", req, cb)
  }

  /**
   * 灵云-单笔主播转账接口
   */
  async CreateSinglePayment(
    req: CreateSinglePaymentRequest,
    cb?: (error: string, rep: CreateSinglePaymentResponse) => void
  ): Promise<CreateSinglePaymentResponse> {
    return this.request("CreateSinglePayment", req, cb)
  }

  /**
   * 登记挂账(支持撤销)
   */
  async RegisterBill(
    req: RegisterBillRequest,
    cb?: (error: string, rep: RegisterBillResponse) => void
  ): Promise<RegisterBillResponse> {
    return this.request("RegisterBill", req, cb)
  }

  /**
   * 银企直连-单笔支付状态查询接口
   */
  async QuerySinglePay(
    req: QuerySinglePayRequest,
    cb?: (error: string, rep: QuerySinglePayResponse) => void
  ): Promise<QuerySinglePayResponse> {
    return this.request("QuerySinglePay", req, cb)
  }

  /**
   * 商户提现
   */
  async ApplyWithdrawal(
    req: ApplyWithdrawalRequest,
    cb?: (error: string, rep: ApplyWithdrawalResponse) => void
  ): Promise<ApplyWithdrawalResponse> {
    return this.request("ApplyWithdrawal", req, cb)
  }

  /**
   * 会员在途充值(经第三方支付渠道)接口
   */
  async RechargeByThirdPay(
    req: RechargeByThirdPayRequest,
    cb?: (error: string, rep: RechargeByThirdPayResponse) => void
  ): Promise<RechargeByThirdPayResponse> {
    return this.request("RechargeByThirdPay", req, cb)
  }

  /**
   * 银企直连-单笔支付接口
   */
  async CreateSinglePay(
    req: CreateSinglePayRequest,
    cb?: (error: string, rep: CreateSinglePayResponse) => void
  ): Promise<CreateSinglePayResponse> {
    return this.request("CreateSinglePay", req, cb)
  }

  /**
     * 会员子账户开立。会员在银行注册，并开立会员子账户，交易网会员代码即会员在平台端系统的会员编号。
平台需保存银行返回的子账户账号，后续交易接口都会用到。会员属性字段为预留扩展字段，当前必须送默认值。
     */
  async CreateCustAcctId(
    req: CreateCustAcctIdRequest,
    cb?: (error: string, rep: CreateCustAcctIdResponse) => void
  ): Promise<CreateCustAcctIdResponse> {
    return this.request("CreateCustAcctId", req, cb)
  }

  /**
   * 通过此接口关闭此前已创建的订单，关闭后，用户将无法继续付款。仅能关闭创建后未支付的订单
   */
  async CloseOrder(
    req: CloseOrderRequest,
    cb?: (error: string, rep: CloseOrderResponse) => void
  ): Promise<CloseOrderResponse> {
    return this.request("CloseOrder", req, cb)
  }

  /**
   * 智慧零售-查询管理端商户
   */
  async QueryMerchantInfoForManagement(
    req: QueryMerchantInfoForManagementRequest,
    cb?: (error: string, rep: QueryMerchantInfoForManagementResponse) => void
  ): Promise<QueryMerchantInfoForManagementResponse> {
    return this.request("QueryMerchantInfoForManagement", req, cb)
  }

  /**
   * 撤销会员在途充值(经第三方支付渠道)
   */
  async RevokeMemberRechargeThirdPay(
    req: RevokeMemberRechargeThirdPayRequest,
    cb?: (error: string, rep: RevokeMemberRechargeThirdPayResponse) => void
  ): Promise<RevokeMemberRechargeThirdPayResponse> {
    return this.request("RevokeMemberRechargeThirdPay", req, cb)
  }

  /**
   * 获取对账中心账单下载地址的接口
   */
  async DownloadReconciliationUrl(
    req: DownloadReconciliationUrlRequest,
    cb?: (error: string, rep: DownloadReconciliationUrlResponse) => void
  ): Promise<DownloadReconciliationUrlResponse> {
    return this.request("DownloadReconciliationUrl", req, cb)
  }

  /**
     * 会员绑定提现账户-银联鉴权。用于会员申请绑定提现账户，申请后银行前往银联验证卡信息：姓名、证件、卡号、银行预留手机是否相符，相符则发送给会员手机动态验证码并返回成功，不相符则返回失败。
平台接收到银行返回成功后，进入输入动态验证码的页面，有效期120秒，若120秒未输入，客户可点击重新发送动态验证码，这个步骤重新调用该接口即可。
平安银行的账户，大小额行号和超级网银号都不用送。
超级网银号：单笔转账金额不超过5万，不限制笔数，只用选XX银行，不用具体到支行，可实时知道对方是否收款成功。
大小额联行号：单笔转账可超过5万，需具体到支行，不能实时知道对方是否收款成功。金额超过5万的，在工作日的8点30-17点间才会成功。
     */
  async BindRelateAcctUnionPay(
    req: BindRelateAcctUnionPayRequest,
    cb?: (error: string, rep: BindRelateAcctUnionPayResponse) => void
  ): Promise<BindRelateAcctUnionPayResponse> {
    return this.request("BindRelateAcctUnionPay", req, cb)
  }

  /**
   * 会员间交易-不验证。此接口可以实现会员间的余额的交易，实现资金在会员之间流动。
   */
  async QueryMemberTransaction(
    req: QueryMemberTransactionRequest,
    cb?: (error: string, rep: QueryMemberTransactionResponse) => void
  ): Promise<QueryMemberTransactionResponse> {
    return this.request("QueryMemberTransaction", req, cb)
  }

  /**
   * 灵云-批量转账结果查询
   */
  async QueryBatchPaymentResult(
    req: QueryBatchPaymentResultRequest,
    cb?: (error: string, rep: QueryBatchPaymentResultResponse) => void
  ): Promise<QueryBatchPaymentResultResponse> {
    return this.request("QueryBatchPaymentResult", req, cb)
  }

  /**
   * 获取单笔代发转账对账单下载URL
   */
  async QueryBillDownloadURL(
    req: QueryBillDownloadURLRequest,
    cb?: (error: string, rep: QueryBillDownloadURLResponse) => void
  ): Promise<QueryBillDownloadURLResponse> {
    return this.request("QueryBillDownloadURL", req, cb)
  }

  /**
   * 智慧零售-发票开具
   */
  async CreateInvoice(
    req: CreateInvoiceRequest,
    cb?: (error: string, rep: CreateInvoiceResponse) => void
  ): Promise<CreateInvoiceResponse> {
    return this.request("CreateInvoice", req, cb)
  }

  /**
   * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
   */
  async QueryRefund(
    req: QueryRefundRequest,
    cb?: (error: string, rep: QueryRefundResponse) => void
  ): Promise<QueryRefundResponse> {
    return this.request("QueryRefund", req, cb)
  }

  /**
   * 会员间交易退款
   */
  async RefundMemberTransaction(
    req: RefundMemberTransactionRequest,
    cb?: (error: string, rep: RefundMemberTransactionResponse) => void
  ): Promise<RefundMemberTransactionResponse> {
    return this.request("RefundMemberTransaction", req, cb)
  }

  /**
   * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时。
   */
  async MigrateOrderRefundQuery(
    req: MigrateOrderRefundQueryRequest,
    cb?: (error: string, rep: MigrateOrderRefundQueryResponse) => void
  ): Promise<MigrateOrderRefundQueryResponse> {
    return this.request("MigrateOrderRefundQuery", req, cb)
  }

  /**
   * 通过此接口查询签约数据
   */
  async QueryContract(
    req: QueryContractRequest,
    cb?: (error: string, rep: QueryContractResponse) => void
  ): Promise<QueryContractResponse> {
    return this.request("QueryContract", req, cb)
  }

  /**
   * 正常结算提现失败情况下，发起重新提现的请求接口
   */
  async ApplyReWithdrawal(
    req: ApplyReWithdrawalRequest,
    cb?: (error: string, rep: ApplyReWithdrawalResponse) => void
  ): Promise<ApplyReWithdrawalResponse> {
    return this.request("ApplyReWithdrawal", req, cb)
  }

  /**
   * 查询小额鉴权转账结果。查询小额往账鉴权的转账状态。
   */
  async QuerySmallAmountTransfer(
    req: QuerySmallAmountTransferRequest,
    cb?: (error: string, rep: QuerySmallAmountTransferResponse) => void
  ): Promise<QuerySmallAmountTransferResponse> {
    return this.request("QuerySmallAmountTransfer", req, cb)
  }

  /**
   * 通过商家批次单号或者微信批次号查询批次单
   */
  async QueryTransferBatch(
    req: QueryTransferBatchRequest,
    cb?: (error: string, rep: QueryTransferBatchResponse) => void
  ): Promise<QueryTransferBatchResponse> {
    return this.request("QueryTransferBatch", req, cb)
  }

  /**
   * 通过此接口进行解约
   */
  async TerminateContract(
    req: TerminateContractRequest,
    cb?: (error: string, rep: TerminateContractResponse) => void
  ): Promise<TerminateContractResponse> {
    return this.request("TerminateContract", req, cb)
  }

  /**
   * 聚鑫-开户信息列表查询, 查询某一段时间的开户信息
   */
  async QueryAcctInfoList(
    req: QueryAcctInfoListRequest,
    cb?: (error: string, rep: QueryAcctInfoListResponse) => void
  ): Promise<QueryAcctInfoListResponse> {
    return this.request("QueryAcctInfoList", req, cb)
  }

  /**
   * 直播平台-查询代理商结算单链接
   */
  async QueryAgentStatements(
    req: QueryAgentStatementsRequest,
    cb?: (error: string, rep: QueryAgentStatementsResponse) => void
  ): Promise<QueryAgentStatementsResponse> {
    return this.request("QueryAgentStatements", req, cb)
  }

  /**
   * 查询对账文件信息。平台调用该接口获取需下载对账文件的文件名称以及密钥。 平台获取到信息后， 可以再调用OPENAPI的文件下载功能。
   */
  async QueryReconciliationDocument(
    req: QueryReconciliationDocumentRequest,
    cb?: (error: string, rep: QueryReconciliationDocumentResponse) => void
  ): Promise<QueryReconciliationDocumentResponse> {
    return this.request("QueryReconciliationDocument", req, cb)
  }

  /**
   * 云鉴-消费订单退款的接口
   */
  async RefundOrder(
    req: RefundOrderRequest,
    cb?: (error: string, rep: RefundOrderResponse) => void
  ): Promise<RefundOrderResponse> {
    return this.request("RefundOrder", req, cb)
  }
}

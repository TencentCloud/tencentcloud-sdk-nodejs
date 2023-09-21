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
  QueryFlexPaymentOrderStatusRequest,
  QueryAcctBindingRequest,
  QueryCompanyTitleResponse,
  ReviseMbrPropertyResponse,
  ApplyPayerInfoResponse,
  QueryOpenBankProfitSharePayeeResult,
  UnifiedOrderResponse,
  ApplyOpenBankSettleOrderResponse,
  CreatePayRollTokenResponse,
  ApplyPayerinfoResult,
  FreezeFlexBalanceResult,
  BindAcctRequest,
  QueryOpenBankBankBranchListResponse,
  MigrateOrderRefundQueryResponse,
  QueryOpenBankPaymentOrderRequest,
  QueryOpenBankBindExternalSubMerchantBankAccountResponse,
  UploadOrgFileRequest,
  GetPayRollAuthResultRequest,
  RefundTlinxOrderResponse,
  CreatePayMerchantRequest,
  QueryContractPayWayListResponse,
  QueryContractPayWayListRequest,
  GetBillDownloadUrlResponse,
  QueryAssignmentRequest,
  ApplyTradeResult,
  RefundOutSubOrderRefundList,
  UnbindRelateAcctRequest,
  UnifiedTlinxOrderResponse,
  CreateMerchantRequest,
  QueryContractRelateShopResponse,
  CreateOpenBankExternalSubMerchantRegistrationResult,
  RefundTlinxOrderRequest,
  QueryInvoiceResult,
  QueryAcctBindingResponse,
  QueryPayerinfoData,
  CreateInvoiceItem,
  ApplyOutwardOrderData,
  MerchantPayWayData,
  QueryOpenBankDownLoadUrlResult,
  QueryOpenBankSubMerchantSignOnlineResponse,
  BindAccountResponse,
  CreateInvoiceResultData,
  CloudClientInfo,
  QueryFundsTransactionDetailsResult,
  UnbindOpenBankExternalSubMerchantBankAccountRequest,
  CreateRedInvoiceItem,
  AddMerchantResult,
  CloudExternalUserInfo,
  QueryOpenBankExternalSubMerchantRegistrationRequest,
  RevokeRechargeByThirdPayRequest,
  QueryMerchantInfoForManagementResponse,
  CreateTransferBatchResponse,
  BindAccountRequest,
  QueryOpenBankSubMerchantRateConfigureResult,
  QueryCloudChannelDataResponse,
  UploadExternalAnchorInfoResponse,
  QueryCustAcctIdBalanceResponse,
  QueryOpenBankSubMerchantSignOnlineRequest,
  CreateRedInvoiceRequest,
  QueryAcctInfoListResponse,
  ContractInfo,
  QueryOpenBankExternalSubMerchantBankAccountRequest,
  SettlementOrders,
  ExternalReturnContractInfo,
  ExecuteMemberTransactionResponse,
  OrganizationInfo,
  FlexFundingAccountInfo,
  ConfirmOrderRequest,
  CloudExternalPromptGroup,
  ModifyFlexPayeeAccountRightStatusResponse,
  ModifyMerchantResponse,
  ReturnContractInfo,
  VerifyOpenBankAccountRequest,
  QuerySmallAmountTransferResponse,
  CityCodeResult,
  CreateFlexPayeeResponse,
  UnbindOpenBankExternalSubMerchantBankAccountResult,
  QuerySingleTransactionStatusResponse,
  CreateOpenBankMerchantResponse,
  ApplyDeclareData,
  TransferDetailResponse,
  QueryOpenBankSubMerchantSignOnlineResult,
  QueryOrderRequest,
  RevokeMemberRechargeThirdPayResponse,
  DistributeAccreditTlinxRequest,
  QueryOpenBankBillData,
  QueryContractRelateShopRequest,
  PlatformAccountBalanceResult,
  CreateOpenBankRechargeOrderRequest,
  CloudExternalAttachmentData,
  QueryExceedingInfoResponse,
  AddContractRequest,
  CreateAcctResponse,
  CreateOpenBankVerificationOrderResponse,
  PaymentOrderResult,
  DistributeAddReceiverRequest,
  QueryFinancialDataUrlRequest,
  QueryExchangerateData,
  ServiceProviderAccountBalanceResult,
  QueryOpenBankDailyReceiptDownloadUrlResponse,
  QueryPayerInfoResponse,
  QueryMerchantBalanceResponse,
  BindOpenBankExternalSubMerchantBankAccountResponse,
  QueryTradeData,
  QueryOpenBankSettleOrderResponse,
  QueryContractPayFeeResult,
  ApplyFlexPaymentResult,
  FundsTransactionItem,
  BindOpenBankProfitSharePayeeRequest,
  AddMerchantResponse,
  QueryFlexSettlementOrderListRequest,
  RefundCloudOrderRequest,
  CreateOpenBankAggregatedSubMerchantRegistrationResponse,
  QueryFlexPlatformAccountBalanceResponse,
  ApplyReWithdrawalRequest,
  DownloadFileResult,
  QueryFlexWechatAuthResultResponse,
  RechargeByThirdPayResponse,
  QueryOutwardOrderRequest,
  ViewMerchantRequest,
  CloseCloudOrderResponse,
  QueryOpenBankPaymentOrderResult,
  RefundRequest,
  OutSubMerchantExtensionInfo,
  QueryTradeResult,
  PayFeeDataResult,
  CreateInvoiceV2Response,
  QueryInvoiceV2Response,
  QueryAgentStatementsResponse,
  QueryOutwardOrderResponse,
  QuerySinglePaymentResultRequest,
  QueryShopOpenIdRequest,
  QueryBalanceResponse,
  CreateOpenBankOrderPaymentResult,
  CloseOpenBankPaymentOrderResponse,
  TerminateContractRequest,
  OpenBankSceneInfo,
  ModifyFlexPayeeAccountRightStatusRequest,
  QueryMaliciousRegistrationResponse,
  OpenBankSettlementRulesInfo,
  RefundCloudOrderResponse,
  QueryPayerinfoResult,
  QueryBankClearRequest,
  QueryInvoiceRequest,
  CreatePayRollPreOrderResponse,
  CreateOpenBankMerchantResult,
  DistributeQueryReceiverRequest,
  QueryOpenBankUnbindExternalSubMerchantBankAccountResponse,
  QueryOpenBankDownLoadUrlRequest,
  DownloadBillRequest,
  RevokeMemberRechargeThirdPayRequest,
  ApplyTradeResponse,
  QueryOpenBankSettleOrderRequest,
  OpenBankPayLimitInfo,
  ViewMerchantResult,
  QueryOpenBankSupportBankListRequest,
  QueryFlexPayeeAccountBalanceRequest,
  ContractOrderRequest,
  QueryContractPayFeeResponse,
  BindOpenBankProfitSharePayeeResponse,
  QueryFlexServiceProviderAccountBalanceRequest,
  BindRelateAcctSmallAmountResponse,
  PayeeAccountBalanceResult,
  OpenBankStoreInfo,
  QueryOpenBankSupportBankListResult,
  FreezeOrderResult,
  PayeeTaxInfo,
  QueryTransferDetailResponse,
  OldSubRefund,
  QueryTransferBatchResponse,
  ModifyFlexFundingAccountResponse,
  QueryContractPayFeeRequest,
  QueryOrderResponse,
  CreateOpenBankExternalSubMerchantRegistrationResponse,
  PayeeFundingAccountResult,
  QueryFlexSettlementOrderListResponse,
  QueryFlexPayeeInfoResponse,
  RefundOrderResult,
  QueryBatchPaymentResultDataInfo,
  ContractOrderInSubOrder,
  QueryMemberTransactionDetailsRequest,
  RegisterBehaviorRequest,
  ApplyFlexSettlementResult,
  CreateOpenBankExternalAggregatedSubMerchantRegistrationResult,
  UnbindOpenBankExternalSubMerchantBankAccountResponse,
  QueryTradeRequest,
  CloudOrderReturn,
  QueryBankWithdrawCashDetailsRequest,
  QueryOpenBankBindExternalSubMerchantBankAccountResult,
  QueryExceedingInfoResult,
  QueryMerchantPayWayListRequest,
  QueryOpenBankRefundOrderRequest,
  WithdrawCashMembershipRequest,
  TransferItem,
  CreateInvoiceResponse,
  AddMerchantRequest,
  CreateRedInvoiceResultV2,
  QueryAnchorContractInfoRequest,
  CreateRedInvoiceResult,
  CompanyTitleResult,
  CreateOpenBankPaymentOrderRequest,
  QueryOpenBankOrderDetailReceiptInfoResult,
  QueryReconciliationDocumentRequest,
  CreateOpenBankUnifiedOrderResponse,
  QueryOpenBankExternalSubMerchantBankAccountData,
  DeleteAgentTaxPaymentInfoRequest,
  CreateOpenBankExternalSubMerchantRegistrationRequest,
  GetDistributeBillDownloadUrlResponse,
  ViewContractResponse,
  QueryCommonTransferRechargeResponse,
  CreateOpenBankMerchantRequest,
  QueryOrderOutOrderList,
  ModifyAgentTaxPaymentInfoResponse,
  QueryBatchPaymentResultResponse,
  CloudAttachmentInfo,
  FreezeFlexBalanceResponse,
  QueryOpenBankDailyReceiptDownloadUrlRequest,
  UploadExternalAnchorInfoRequest,
  CreateAcctRequest,
  CreateAgentTaxPaymentInfosRequest,
  OpenBankRefundOrderApplyResult,
  CreatePayRollPreOrderWithAuthRequest,
  QueryMerchantBalanceRequest,
  ApplyFlexWechatPreAuthRequest,
  QueryOutwardOrderResult,
  QueryPayerInfoRequest,
  QuerySingleTransactionStatusRequest,
  QueryContractRequest,
  CreateOpenBankRechargeOrderResponse,
  QueryDownloadBillURLRequest,
  QueryMerchantBalanceResult,
  QueryOpenBankOrderDetailReceiptInfoRequest,
  QueryOpenBankExternalSubAccountBookBalanceResponse,
  QueryOrderStatusRequest,
  CreateExternalAnchorResponse,
  QueryTradeResponse,
  QueryMerchantOrderRequest,
  DistributeQueryResponse,
  CreateInvoiceV2Request,
  QueryFlexPayeeAccountListResponse,
  UploadTaxListResponse,
  QueryReconciliationFileApplyInfoResponse,
  SettlementOrderResult,
  BindRelateAcctUnionPayRequest,
  FileItem,
  QueryCloudOrderResponse,
  CreateOpenBankVerificationOrderRequest,
  QueryFlexFreezeOrderListResponse,
  OpenBankShippingInfo,
  PayeeTaxTemplateInfo,
  UnifiedOrderInSubOrderList,
  QueryItem,
  Paging,
  CreateOpenBankExternalSubMerchantAccountBookRequest,
  QueryFlexPayeeInfoRequest,
  RegisterBehaviorResponse,
  GetPayRollAuthListRequest,
  QueryBillDownloadURLData,
  QueryBalanceRequest,
  ApplyWithdrawalResponse,
  QueryMerchantInfoForManagementRequest,
  UnifiedTlinxOrderRequest,
  DeduceQuotaRequest,
  QueryMerchantBalanceData,
  RechargeMemberThirdPayResponse,
  QueryExceedingInfoData,
  QueryExchangerateResult,
  UploadOpenBankSubMerchantCredentialResult,
  CloudSettleInfo,
  QueryBatchPaymentResultRequest,
  BindAcctResponse,
  BindRelateAcctSmallAmountRequest,
  QueryOpenBankBillDataPageResult,
  QueryFlexPaymentOrderListRequest,
  FreezeFlexBalanceRequest,
  BindRelateAccReUnionPayRequest,
  QueryAcctInfoResponse,
  MigrateOrderRefundQueryRequest,
  SettleInfo,
  CloudSubOrder,
  AnchorExtendInfo,
  QueryDeclareData,
  VerifyOpenBankAccountResponse,
  GetBillDownloadUrlRequest,
  CreatePayMerchantResponse,
  UnbindRelateAcctResponse,
  GetDistributeBillDownloadUrlRequest,
  AgentTaxPaymentBatch,
  LegalPersonInfo,
  GetPayRollAuthListResponse,
  CreateOpenBankSubMerchantRateConfigureRequest,
  QueryRefundRequest,
  ApplyOpenBankSettleOrderResult,
  CreateCustAcctIdRequest,
  ApplyFlexPaymentRequest,
  OpenBankBillingInfo,
  CloudExternalChannelData,
  SyncContractDataRequest,
  DistributeApplyResponse,
  CreateBatchPaymentData,
  AddFlexPhoneNoResponse,
  DistributeQueryRequest,
  CloseOrderRequest,
  QueryFlexPayeeAccountBalanceResponse,
  ViewShopResult,
  QueryOutwardOrderData,
  QueryOpenBankExternalSubMerchantRegistrationResult,
  OpenBankRedirectInfo,
  ViewContractRequest,
  QueryBankTransactionDetailsRequest,
  CloudSubOrderReturn,
  QueryFinancialDataUrlResponse,
  QueryExchangeRateRequest,
  OrderSummaryResult,
  QueryBillDownloadURLRequest,
  PaymentOrders,
  CloudSubRefundItem,
  QueryOpenBankDownLoadUrlResponse,
  QueryOpenBankVerificationOrderResponse,
  ApplyApplicationMaterialResponse,
  DistributeQueryResult,
  QueryFlexPlatformAccountBalanceRequest,
  OrderSummaries,
  ExecuteMemberTransactionRequest,
  CreateExternalAnchorData,
  DescribeOrderStatusResponse,
  CreateMerchantResponse,
  CreateSinglePaymentResponse,
  CloseOpenBankPaymentOrderRequest,
  QueryCompanyTitleRequest,
  GetPayRollAuthRequest,
  ViewContractResult,
  QueryAcctItem,
  QueryOpenBankBillDataPageRequest,
  OpenBankRechargePayeeInfo,
  QueryContractRelateShopResult,
  QueryOpenBankSubMerchantCredentialResult,
  ApplyWithdrawalRequest,
  ApplyFlexSettlementResponse,
  QuerySinglePaymentResultResponse,
  QueryMemberBindResponse,
  QueryMemberBindRequest,
  BindRelateAcctUnionPayResponse,
  QueryCloudRefundOrderRequest,
  UnifiedOrderRequest,
  RechargeByThirdPayRequest,
  DistributeRemoveReceiverResponse,
  QueryInvoiceV2Request,
  DistributeAccreditQueryRequest,
  QueryMerchantResponse,
  BankCardItem,
  DistributeAccreditResult,
  ViewShopResponse,
  ApplyTradeRequest,
  QueryOpenBankProfitSharePayeeResponse,
  QueryExchangeRateResponse,
  AddFlexFundingAccountRequest,
  OldAttachmentInfo,
  ModifyFlexFundingAccountRequest,
  QuerySmallAmountTransferRequest,
  SupportBankInfo,
  ModifyMntMbrBindRelateAcctBankCodeRequest,
  FeeRangInfo,
  PayRollAuthResult,
  CloudGlobalPayTimeInfo,
  OpenBankProfitShareRespInfo,
  QueryCustAcctIdBalanceRequest,
  QueryExternalAccountBookResult,
  ReviseMbrPropertyRequest,
  QueryOpenBankSubMerchantRateConfigureResponse,
  AgentTaxPayment,
  UploadFileRequest,
  QueryBankWithdrawCashDetailsResponse,
  UploadTaxPaymentResponse,
  QueryCloudRefundOrderResponse,
  AgencyClientInfo,
  QueryFlexOrderSummaryListResponse,
  QueryOpenBankUnbindExternalSubMerchantBankAccountResult,
  ApplyDeclareResult,
  QueryOpenBankSettleOrderResult,
  DistributeAccreditQueryResponse,
  QueryOpenBankSubMerchantCredentialResponse,
  UnifiedCloudOrderResponse,
  PayeeAccountInfoResult,
  PayeeAccountUserInfo,
  QueryShopOpenIdResult,
  QueryFlexOrderSummaryListRequest,
  ApplyReWithdrawalResponse,
  GetPayRollAuthResultResponse,
  RegisterBillRequest,
  OpenBankGoodsInfo,
  QueryOrderOutSubOrderList,
  CreateBatchPaymentResponse,
  ApplyFlexSettlementRequest,
  QueryFlexPayeeAccountInfoRequest,
  QueryOpenBankBillDataPageResponse,
  CreateExternalAnchorRequest,
  ConfirmOrderResponse,
  GetPayRollAuthResponse,
  QueryApplicationMaterialRequest,
  CreateSinglePaymentData,
  CheckAmountResponse,
  QueryFlexPaymentOrderStatusResponse,
  MerchantManagementList,
  QueryCityCodeResponse,
  QueryApplicationMaterialResponse,
  CreateExternalAccountBookResult,
  QueryTransferResultData,
  MultiApplyDetail,
  ResponseTerminateContract,
  DownloadBillResponse,
  QueryOpenBankBindExternalSubMerchantBankAccountRequest,
  DistributeRemoveReceiverRequest,
  BillDownloadUrlResult,
  CreatePayRollPreOrderRequest,
  DeleteAgentTaxPaymentInfosRequest,
  FlexBillDownloadUrlResult,
  QueryAcctInfoListRequest,
  CreatePayRollTokenRequest,
  AddShopRequest,
  TransferDetailRequest,
  QueryOrderStatusResponse,
  ApplyFlexPaymentResponse,
  QueryTransferResultResponse,
  CloseCloudOrderRequest,
  CreateInvoiceResultV2,
  WechatPreAuthResult,
  QueryAcctInfoRequest,
  DescribeChargeDetailResponse,
  TranItem,
  CreateOpenBankGlobalPaymentOrderRequest,
  DistributeQueryReceiverResponse,
  QueryFlexFreezeOrderListRequest,
  QueryTransferResultRequest,
  TransferSinglePayResponse,
  QueryReconciliationFileApplyInfoResult,
  ApplyReconciliationFileResult,
  QueryOpenBankExternalSubMerchantBankAccountResponse,
  OpenBankProfitSharePayeeInfo,
  CreateRedInvoiceV2Request,
  ApplyOpenBankOrderDetailReceiptResponse,
  QueryMerchantClassificationRequest,
  OpenBankApprovalGuideInfo,
  AddContractResponse,
  CreateOrderResponse,
  QueryMemberTransactionDetailsResponse,
  MultiApplyOrder,
  AddFlexIdInfoRequest,
  ModifyMerchantRequest,
  OrderItem,
  PayeeAccountInfos,
  RefundMemberTransactionRequest,
  BindOpenBankProfitSharePayeeResult,
  CreateCloudSubMerchantResponse,
  QueryFundsTransactionDetailsRequest,
  QueryOpenBankRefundOrderResponse,
  QueryFlexBillDownloadUrlResponse,
  BindOpenBankExternalSubMerchantBankAccountResult,
  CheckAmountRequest,
  CreateMerchantResultData,
  DistributeCancelRequest,
  QueryOpenBankSupportBankListResponse,
  QueryDeclareResult,
  RefundMemberTransactionResponse,
  QueryCloudOrderRequest,
  OpenBankRechargeRedirectInfo,
  UnBindAcctResponse,
  QueryCommonTransferRechargeRequest,
  ApplyOpenBankOrderDetailReceiptRequest,
  NaturalPersonInfo,
  QueryTransferDetailRequest,
  DownloadOrgFileResponse,
  OpenBankPayeeInfo,
  AddShopResult,
  PayDataResult,
  CreateOpenBankAggregatedSubMerchantRegistrationRequest,
  QueryReconciliationDocumentResponse,
  QueryBankTransactionDetailsResponse,
  PaymentOrderStatusResult,
  TransferSinglePayRequest,
  QueryOpenBankVerificationOrderRequest,
  OpenBankOrderRedirectInfo,
  QueryFlexAmountBeforeTaxRequest,
  MigrateOrderRefundRequest,
  AddFlexFundingAccountResponse,
  QueryOpenBankBankAccountBalanceResult,
  QuerySinglePaymentResultData,
  UploadOrgFileResponse,
  QueryOpenBankOrderDetailReceiptInfoResponse,
  CreateAnchorRequest,
  QueryExceedingInfoRequest,
  ApplyOpenBankSubMerchantSignOnlineRequest,
  ExternalContractUserInfo,
  BankBranchInfo,
  ContractUserInfo,
  ApplyApplicationMaterialRequest,
  QueryCloudChannelDataRequest,
  QueryOpenBankBankAccountBalanceRequest,
  ModifyAgentTaxPaymentInfoRequest,
  DownloadReconciliationUrlRequest,
  QueryFlexAmountBeforeTaxResponse,
  CreateBatchPaymentRequest,
  CreateOpenBankSubMerchantRateConfigureResult,
  CreateOpenBankExternalSubMerchantAccountBookResponse,
  ModifyMntMbrBindRelateAcctBankCodeResponse,
  UploadOpenBankSubMerchantCredentialResponse,
  SyncContractDataResponse,
  CreateRedInvoiceResultData,
  ResponseQueryContract,
  DownloadOrgFileRequest,
  CreateOpenBankGlobalPaymentOrderResponse,
  ContractSyncInfo,
  Order,
  QueryAgentStatementsRequest,
  BusinessLicenseInfo,
  QueryBankClearResponse,
  BindOpenBankExternalSubMerchantBankAccountRequest,
  OpenBankProfitShareInfo,
  MigrateOrderRefundResponse,
  QueryFlexPaymentOrderListResponse,
  CloudStoreInfo,
  ContractOrderResponse,
  OldChannelExternalUserInfo,
  QueryInvoiceResponse,
  UploadTaxPaymentRequest,
  QueryFlexPayeeAccountListRequest,
  QueryOpenBankBankAccountBalanceResponse,
  ViewMerchantResponse,
  AddShopResponse,
  UploadFileResponse,
  QueryMemberTransactionDetailsResult,
  CreateMerchantResult,
  RefundResponse,
  QueryOpenBankProfitSharePayeeRequest,
  CreateTransferBatchRequest,
  QueryOpenBankVerificationResult,
  WithdrawItem,
  QueryMemberTransactionRequest,
  CreateOpenBankUnifiedOrderPaymentResult,
  QueryCityCodeRequest,
  OpenBankFormInfo,
  CreateOrderRequest,
  ModifyBindedAccountRequest,
  WithdrawCashMembershipResponse,
  ViewShopRequest,
  CreateSinglePaymentRequest,
  QueryFlexPayeeAccountInfoResponse,
  WithdrawBill,
  MemberTransactionItem,
  DistributeReceiverResult,
  DistributeApplyRequest,
  QueryFlexWechatAuthResultRequest,
  OpenBankQueryRefundOrderResult,
  ApplyOutwardOrderResponse,
  QueryFlexServiceProviderAccountBalanceResponse,
  DistributeAccreditQueryResult,
  AddFlexPhoneNoRequest,
  Acct,
  CloseOrderResponse,
  ApplyPayerinfoData,
  CheckAcctRequest,
  CreateAgentTaxPaymentInfosResponse,
  RevokeRechargeByThirdPayResponse,
  CreateOpenBankUnifiedOrderRequest,
  ApplyReconciliationFileResponse,
  ContractPayListResult,
  CreateInvoiceResult,
  DescribeOrderStatusRequest,
  QueryMemberTransactionResponse,
  ChannelContractInfo,
  RefundOpenBankOrderResponse,
  CreateAnchorResponse,
  QueryFlexBillDownloadUrlRequest,
  CreateOpenBankSubMerchantRateConfigureResponse,
  UnifiedCloudOrderRequest,
  UploadOpenBankSubMerchantCredentialRequest,
  ApplyOpenBankSettleOrderRequest,
  QueryOpenBankSubMerchantCredentialRequest,
  MerchantRiskInfo,
  QueryShopOpenIdResponse,
  CreateFlexPayeeResult,
  FreezeOrders,
  QueryOrderStatusResult,
  QueryAgentTaxPaymentBatchResponse,
  DeleteAgentTaxPaymentInfosResponse,
  QueryMerchantClassificationResponse,
  RegisterBillSupportWithdrawResponse,
  SceneInfo,
  QueryContractResponse,
  CreateRedInvoiceResponse,
  QueryInvoiceResultData,
  AddFlexIdInfoResponse,
  ClearItem,
  MerchantManagementResult,
  UploadTaxListRequest,
  RegisterInfo,
  QueryOpenBankPaymentOrderResponse,
  QueryMaliciousRegistrationRequest,
  QueryReconciliationFileApplyInfoRequest,
  AddContractResult,
  QueryBillDownloadURLResponse,
  UploadFileResult,
  QueryAssignmentResponse,
  DescribeChargeDetailRequest,
  PayOrderResult,
  CreateCloudSubMerchantRequest,
  CreateCustAcctIdResponse,
  QueryAgentTaxPaymentBatchRequest,
  CloudChannelExternalUserInfo,
  ApplyReconciliationFileRequest,
  RegisterBillResponse,
  PayeeInfoResult,
  QueryOpenBankExternalSubMerchantRegistrationResponse,
  ApplyOutwardOrderRequest,
  AssignmentData,
  DistributeAccreditTlinxResponse,
  RechargeMemberThirdPayRequest,
  CreateInvoiceRequest,
  VerifyOpenBankAccountResult,
  QueryOpenBankUnbindExternalSubMerchantBankAccountRequest,
  CreateFlexPayeeRequest,
  AnchorContractInfo,
  QueryFundsTransactionDetailsResponse,
  ChannelReturnContractInfo,
  ApplyOpenBankOrderDetailReceiptResult,
  CreateRedInvoiceV2Response,
  PayeeAccountPropertyInfo,
  ApplyFlexWechatPreAuthResponse,
  DistributeMultiApplyResult,
  RefundOrderRequest,
  OpenBankPayerInfo,
  ApplyOpenBankSubMerchantSignOnlineResponse,
  TransactionItem,
  QueryTransferBatchRequest,
  TransferSinglePayData,
  CheckAcctResponse,
  CloudSubOrderRefund,
  QueryOpenBankExternalSubAccountBookBalanceRequest,
  QueryWechatAuthResult,
  ApplyOutwardOrderResult,
  ApplyPayerInfoRequest,
  CreateBatchPaymentBatchData,
  DownloadReconciliationUrlResponse,
  ModifyBindedAccountResponse,
  DistributeCancelResult,
  CreatePayRollPreOrderWithAuthResponse,
  CreateOpenBankOrderRechargeResult,
  AmountBeforeTaxResult,
  RefundOrderResponse,
  CloudExternalPromptInfo,
  DistributeCancelResponse,
  CreateOpenBankVerificationResult,
  QueryOpenBankBankBranchListRequest,
  QueryOpenBankBankBranchListResult,
  ApplyTradeData,
  QueryOpenBankExternalSubMerchantBankAccountResult,
  CreateOpenBankPaymentOrderResponse,
  DeduceQuotaResponse,
  CloseOpenBankPaymentOrderResult,
  RefundOpenBankOrderRequest,
  CreateBatchPaymentRecipient,
  RegisterBillSupportWithdrawRequest,
  DeleteAgentTaxPaymentInfoResponse,
  QueryOpenBankDailyReceiptDownloadUrlResult,
  QueryRefundResponse,
  QueryMerchantPayWayListResponse,
  DistributeAddReceiverResponse,
  TerminateContractResponse,
  QueryOpenBankSubMerchantRateConfigureRequest,
  QueryMerchantRequest,
  ApplyOpenBankSubMerchantSignOnlineResult,
  QueryDownloadBillURLResponse,
  QueryAnchorContractInfoResponse,
  MerchantClassificationId,
  BindRelateAccReUnionPayResponse,
  QueryBatchPaymentResultData,
  QueryMerchantOrderResponse,
  UnBindAcctRequest,
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
   * 直播平台-查询分配关系
   */
  async QueryAssignment(
    req: QueryAssignmentRequest,
    cb?: (error: string, rep: QueryAssignmentResponse) => void
  ): Promise<QueryAssignmentResponse> {
    return this.request("QueryAssignment", req, cb)
  }

  /**
   * 云支付-分账授权申请查询接口
   */
  async DistributeAccreditQuery(
    req: DistributeAccreditQueryRequest,
    cb?: (error: string, rep: DistributeAccreditQueryResponse) => void
  ): Promise<DistributeAccreditQueryResponse> {
    return this.request("DistributeAccreditQuery", req, cb)
  }

  /**
   * 灵云V2-补充手机号信息
   */
  async AddFlexPhoneNo(
    req: AddFlexPhoneNoRequest,
    cb?: (error: string, rep: AddFlexPhoneNoResponse) => void
  ): Promise<AddFlexPhoneNoResponse> {
    return this.request("AddFlexPhoneNo", req, cb)
  }

  /**
   * 灵云V2-查询冻结订单列表
   */
  async QueryFlexFreezeOrderList(
    req: QueryFlexFreezeOrderListRequest,
    cb?: (error: string, rep: QueryFlexFreezeOrderListResponse) => void
  ): Promise<QueryFlexFreezeOrderListResponse> {
    return this.request("QueryFlexFreezeOrderList", req, cb)
  }

  /**
   * 聚鑫-查询会员间交易信息列表
   */
  async QueryMemberTransactionDetails(
    req: QueryMemberTransactionDetailsRequest,
    cb?: (error: string, rep: QueryMemberTransactionDetailsResponse) => void
  ): Promise<QueryMemberTransactionDetailsResponse> {
    return this.request("QueryMemberTransactionDetails", req, cb)
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
   * 直播平台-扣减额度
   */
  async DeduceQuota(
    req: DeduceQuotaRequest,
    cb?: (error: string, rep: DeduceQuotaResponse) => void
  ): Promise<DeduceQuotaResponse> {
    return this.request("DeduceQuota", req, cb)
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
   * 云企付-退款结果查询
   */
  async QueryOpenBankRefundOrder(
    req: QueryOpenBankRefundOrderRequest,
    cb?: (error: string, rep: QueryOpenBankRefundOrderResponse) => void
  ): Promise<QueryOpenBankRefundOrderResponse> {
    return this.request("QueryOpenBankRefundOrder", req, cb)
  }

  /**
   * 云企付-查询核销订单状态，客户可以使用该接口来查询核销申请的订单状态。目前仅支持TENPAY渠道EBANK_PAYMENT付款方式的担保支付订单查询。
   */
  async QueryOpenBankVerificationOrder(
    req: QueryOpenBankVerificationOrderRequest,
    cb?: (error: string, rep: QueryOpenBankVerificationOrderResponse) => void
  ): Promise<QueryOpenBankVerificationOrderResponse> {
    return this.request("QueryOpenBankVerificationOrder", req, cb)
  }

  /**
   * 根据订单号或用户ID，查询支付订单状态。
   */
  async QueryCloudOrder(
    req: QueryCloudOrderRequest,
    cb?: (error: string, rep: QueryCloudOrderResponse) => void
  ): Promise<QueryCloudOrderResponse> {
    return this.request("QueryCloudOrder", req, cb)
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
   * 务工卡-获取核身结果
   */
  async GetPayRollAuthResult(
    req: GetPayRollAuthResultRequest,
    cb?: (error: string, rep: GetPayRollAuthResultResponse) => void
  ): Promise<GetPayRollAuthResultResponse> {
    return this.request("GetPayRollAuthResult", req, cb)
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
   * 灵云V2-查询服务商账户余额
   */
  async QueryFlexServiceProviderAccountBalance(
    req: QueryFlexServiceProviderAccountBalanceRequest,
    cb?: (error: string, rep: QueryFlexServiceProviderAccountBalanceResponse) => void
  ): Promise<QueryFlexServiceProviderAccountBalanceResponse> {
    return this.request("QueryFlexServiceProviderAccountBalance", req, cb)
  }

  /**
   * 云企付-子商户进件
   */
  async CreateOpenBankExternalSubMerchantRegistration(
    req: CreateOpenBankExternalSubMerchantRegistrationRequest,
    cb?: (error: string, rep: CreateOpenBankExternalSubMerchantRegistrationResponse) => void
  ): Promise<CreateOpenBankExternalSubMerchantRegistrationResponse> {
    return this.request("CreateOpenBankExternalSubMerchantRegistration", req, cb)
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
   * 灵云V2-付款
   */
  async ApplyFlexPayment(
    req: ApplyFlexPaymentRequest,
    cb?: (error: string, rep: ApplyFlexPaymentResponse) => void
  ): Promise<ApplyFlexPaymentResponse> {
    return this.request("ApplyFlexPayment", req, cb)
  }

  /**
   * 云支付-查询合同明细接口
   */
  async ViewContract(
    req: ViewContractRequest,
    cb?: (error: string, rep: ViewContractResponse) => void
  ): Promise<ViewContractResponse> {
    return this.request("ViewContract", req, cb)
  }

  /**
   * 云企付-聚合下单
   */
  async CreateOpenBankUnifiedOrder(
    req: CreateOpenBankUnifiedOrderRequest,
    cb?: (error: string, rep: CreateOpenBankUnifiedOrderResponse) => void
  ): Promise<CreateOpenBankUnifiedOrderResponse> {
    return this.request("CreateOpenBankUnifiedOrder", req, cb)
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
   * 智能代发-单笔代发转账接口
   */
  async TransferSinglePay(
    req: TransferSinglePayRequest,
    cb?: (error: string, rep: TransferSinglePayResponse) => void
  ): Promise<TransferSinglePayResponse> {
    return this.request("TransferSinglePay", req, cb)
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
   * 云鉴-商户信息修改的接口
   */
  async ModifyMerchant(
    req: ModifyMerchantRequest,
    cb?: (error: string, rep: ModifyMerchantResponse) => void
  ): Promise<ModifyMerchantResponse> {
    return this.request("ModifyMerchant", req, cb)
  }

  /**
   * 云企付-子商户费率配置结果查询
   */
  async QueryOpenBankSubMerchantRateConfigure(
    req: QueryOpenBankSubMerchantRateConfigureRequest,
    cb?: (error: string, rep: QueryOpenBankSubMerchantRateConfigureResponse) => void
  ): Promise<QueryOpenBankSubMerchantRateConfigureResponse> {
    return this.request("QueryOpenBankSubMerchantRateConfigure", req, cb)
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
   * 灵云V2-补充证件信息
   */
  async AddFlexIdInfo(
    req: AddFlexIdInfoRequest,
    cb?: (error: string, rep: AddFlexIdInfoResponse) => void
  ): Promise<AddFlexIdInfoResponse> {
    return this.request("AddFlexIdInfo", req, cb)
  }

  /**
   * 云企付-创建充值订单
   */
  async CreateOpenBankRechargeOrder(
    req: CreateOpenBankRechargeOrderRequest,
    cb?: (error: string, rep: CreateOpenBankRechargeOrderResponse) => void
  ): Promise<CreateOpenBankRechargeOrderResponse> {
    return this.request("CreateOpenBankRechargeOrder", req, cb)
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
   * 灵云V2-收款用户账户列表查询
   */
  async QueryFlexPayeeAccountList(
    req: QueryFlexPayeeAccountListRequest,
    cb?: (error: string, rep: QueryFlexPayeeAccountListResponse) => void
  ): Promise<QueryFlexPayeeAccountListResponse> {
    return this.request("QueryFlexPayeeAccountList", req, cb)
  }

  /**
   * 灵云V2-冻结余额
   */
  async FreezeFlexBalance(
    req: FreezeFlexBalanceRequest,
    cb?: (error: string, rep: FreezeFlexBalanceResponse) => void
  ): Promise<FreezeFlexBalanceResponse> {
    return this.request("FreezeFlexBalance", req, cb)
  }

  /**
   * 云支付-添加门店接口
   */
  async AddShop(
    req: AddShopRequest,
    cb?: (error: string, rep: AddShopResponse) => void
  ): Promise<AddShopResponse> {
    return this.request("AddShop", req, cb)
  }

  /**
   * 第三方子商户电子记账本余额查询接口
   */
  async QueryOpenBankExternalSubAccountBookBalance(
    req: QueryOpenBankExternalSubAccountBookBalanceRequest,
    cb?: (error: string, rep: QueryOpenBankExternalSubAccountBookBalanceResponse) => void
  ): Promise<QueryOpenBankExternalSubAccountBookBalanceResponse> {
    return this.request("QueryOpenBankExternalSubAccountBookBalance", req, cb)
  }

  /**
   * 云支付-查询商户分类接口
   */
  async QueryMerchantClassification(
    req: QueryMerchantClassificationRequest,
    cb?: (error: string, rep: QueryMerchantClassificationResponse) => void
  ): Promise<QueryMerchantClassificationResponse> {
    return this.request("QueryMerchantClassification", req, cb)
  }

  /**
   * 灵云V2-查询结算订单列表
   */
  async QueryFlexSettlementOrderList(
    req: QueryFlexSettlementOrderListRequest,
    cb?: (error: string, rep: QueryFlexSettlementOrderListResponse) => void
  ): Promise<QueryFlexSettlementOrderListResponse> {
    return this.request("QueryFlexSettlementOrderList", req, cb)
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
   * 云企付-绑定分账收款方
   */
  async BindOpenBankProfitSharePayee(
    req: BindOpenBankProfitSharePayeeRequest,
    cb?: (error: string, rep: BindOpenBankProfitSharePayeeResponse) => void
  ): Promise<BindOpenBankProfitSharePayeeResponse> {
    return this.request("BindOpenBankProfitSharePayee", req, cb)
  }

  /**
   * 灵云V2-收款用户信息查询
   */
  async QueryFlexPayeeInfo(
    req: QueryFlexPayeeInfoRequest,
    cb?: (error: string, rep: QueryFlexPayeeInfoResponse) => void
  ): Promise<QueryFlexPayeeInfoResponse> {
    return this.request("QueryFlexPayeeInfo", req, cb)
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
   * 云企付-查询联行号
   */
  async QueryOpenBankBankBranchList(
    req: QueryOpenBankBankBranchListRequest,
    cb?: (error: string, rep: QueryOpenBankBankBranchListResponse) => void
  ): Promise<QueryOpenBankBankBranchListResponse> {
    return this.request("QueryOpenBankBankBranchList", req, cb)
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
   * 应用需要先带上签约信息调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
   */
  async ContractOrder(
    req: ContractOrderRequest,
    cb?: (error: string, rep: ContractOrderResponse) => void
  ): Promise<ContractOrderResponse> {
    return this.request("ContractOrder", req, cb)
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
   * 云企付-申请单笔交易回单
   */
  async ApplyOpenBankOrderDetailReceipt(
    req: ApplyOpenBankOrderDetailReceiptRequest,
    cb?: (error: string, rep: ApplyOpenBankOrderDetailReceiptResponse) => void
  ): Promise<ApplyOpenBankOrderDetailReceiptResponse> {
    return this.request("ApplyOpenBankOrderDetailReceipt", req, cb)
  }

  /**
   * 灵云V2-查询付款订单列表
   */
  async QueryFlexPaymentOrderList(
    req: QueryFlexPaymentOrderListRequest,
    cb?: (error: string, rep: QueryFlexPaymentOrderListResponse) => void
  ): Promise<QueryFlexPaymentOrderListResponse> {
    return this.request("QueryFlexPaymentOrderList", req, cb)
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
   * 云企付-查询支持银行列表
   */
  async QueryOpenBankSupportBankList(
    req: QueryOpenBankSupportBankListRequest,
    cb?: (error: string, rep: QueryOpenBankSupportBankListResponse) => void
  ): Promise<QueryOpenBankSupportBankListResponse> {
    return this.request("QueryOpenBankSupportBankList", req, cb)
  }

  /**
   * 云支付-查询商户明细接口
   */
  async ViewMerchant(
    req: ViewMerchantRequest,
    cb?: (error: string, rep: ViewMerchantResponse) => void
  ): Promise<ViewMerchantResponse> {
    return this.request("ViewMerchant", req, cb)
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
   * 务工卡-核身预下单带授权
   */
  async CreatePayRollPreOrderWithAuth(
    req: CreatePayRollPreOrderWithAuthRequest,
    cb?: (error: string, rep: CreatePayRollPreOrderWithAuthResponse) => void
  ): Promise<CreatePayRollPreOrderWithAuthResponse> {
    return this.request("CreatePayRollPreOrderWithAuth", req, cb)
  }

  /**
   * 灵云V2-订单汇总列表查询
   */
  async QueryFlexOrderSummaryList(
    req: QueryFlexOrderSummaryListRequest,
    cb?: (error: string, rep: QueryFlexOrderSummaryListResponse) => void
  ): Promise<QueryFlexOrderSummaryListResponse> {
    return this.request("QueryFlexOrderSummaryList", req, cb)
  }

  /**
   * 云企付-创建支付订单。支持B2B网关支付，B2C转账下单。
   */
  async CreateOpenBankPaymentOrder(
    req: CreateOpenBankPaymentOrderRequest,
    cb?: (error: string, rep: CreateOpenBankPaymentOrderResponse) => void
  ): Promise<CreateOpenBankPaymentOrderResponse> {
    return this.request("CreateOpenBankPaymentOrder", req, cb)
  }

  /**
   * 云支付订单退款接口
   */
  async RefundTlinxOrder(
    req: RefundTlinxOrderRequest,
    cb?: (error: string, rep: RefundTlinxOrderResponse) => void
  ): Promise<RefundTlinxOrderResponse> {
    return this.request("RefundTlinxOrder", req, cb)
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
   * 云支付-分账请求接口
   */
  async DistributeApply(
    req: DistributeApplyRequest,
    cb?: (error: string, rep: DistributeApplyResponse) => void
  ): Promise<DistributeApplyResponse> {
    return this.request("DistributeApply", req, cb)
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
   * 云支付-查询合同支付方式列表接口
   */
  async QueryContractPayWayList(
    req: QueryContractPayWayListRequest,
    cb?: (error: string, rep: QueryContractPayWayListResponse) => void
  ): Promise<QueryContractPayWayListResponse> {
    return this.request("QueryContractPayWayList", req, cb)
  }

  /**
   * 务工卡-核身预下单
   */
  async CreatePayRollPreOrder(
    req: CreatePayRollPreOrderRequest,
    cb?: (error: string, rep: CreatePayRollPreOrderResponse) => void
  ): Promise<CreatePayRollPreOrderResponse> {
    return this.request("CreatePayRollPreOrder", req, cb)
  }

  /**
   * 云企付-跨境支付下单
   */
  async CreateOpenBankGlobalPaymentOrder(
    req: CreateOpenBankGlobalPaymentOrderRequest,
    cb?: (error: string, rep: CreateOpenBankGlobalPaymentOrderResponse) => void
  ): Promise<CreateOpenBankGlobalPaymentOrderResponse> {
    return this.request("CreateOpenBankGlobalPaymentOrder", req, cb)
  }

  /**
   * 云支付-添加合同接口
   */
  async AddContract(
    req: AddContractRequest,
    cb?: (error: string, rep: AddContractResponse) => void
  ): Promise<AddContractResponse> {
    return this.request("AddContract", req, cb)
  }

  /**
   * 创建子商户
   */
  async CreateCloudSubMerchant(
    req: CreateCloudSubMerchantRequest,
    cb?: (error: string, rep: CreateCloudSubMerchantResponse) => void
  ): Promise<CreateCloudSubMerchantResponse> {
    return this.request("CreateCloudSubMerchant", req, cb)
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
   * 商户新增的接口
   */
  async CreatePayMerchant(
    req: CreatePayMerchantRequest,
    cb?: (error: string, rep: CreatePayMerchantResponse) => void
  ): Promise<CreatePayMerchantResponse> {
    return this.request("CreatePayMerchant", req, cb)
  }

  /**
   * 云企付-结算单查询结果
   */
  async QueryOpenBankSettleOrder(
    req: QueryOpenBankSettleOrderRequest,
    cb?: (error: string, rep: QueryOpenBankSettleOrderResponse) => void
  ): Promise<QueryOpenBankSettleOrderResponse> {
    return this.request("QueryOpenBankSettleOrder", req, cb)
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
   * 务工卡-查询核身记录
   */
  async GetPayRollAuthList(
    req: GetPayRollAuthListRequest,
    cb?: (error: string, rep: GetPayRollAuthListResponse) => void
  ): Promise<GetPayRollAuthListResponse> {
    return this.request("GetPayRollAuthList", req, cb)
  }

  /**
   * 灵云V2-收款用户账户信息查询
   */
  async QueryFlexPayeeAccountInfo(
    req: QueryFlexPayeeAccountInfoRequest,
    cb?: (error: string, rep: QueryFlexPayeeAccountInfoResponse) => void
  ): Promise<QueryFlexPayeeAccountInfoResponse> {
    return this.request("QueryFlexPayeeAccountInfo", req, cb)
  }

  /**
   * 云企付-退款申请
   */
  async RefundOpenBankOrder(
    req: RefundOpenBankOrderRequest,
    cb?: (error: string, rep: RefundOpenBankOrderResponse) => void
  ): Promise<RefundOpenBankOrderResponse> {
    return this.request("RefundOpenBankOrder", req, cb)
  }

  /**
   * 务工卡-生成授权令牌
   */
  async CreatePayRollToken(
    req: CreatePayRollTokenRequest,
    cb?: (error: string, rep: CreatePayRollTokenResponse) => void
  ): Promise<CreatePayRollTokenResponse> {
    return this.request("CreatePayRollToken", req, cb)
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
   * 子商户在线签约
   */
  async ApplyOpenBankSubMerchantSignOnline(
    req: ApplyOpenBankSubMerchantSignOnlineRequest,
    cb?: (error: string, rep: ApplyOpenBankSubMerchantSignOnlineResponse) => void
  ): Promise<ApplyOpenBankSubMerchantSignOnlineResponse> {
    return this.request("ApplyOpenBankSubMerchantSignOnline", req, cb)
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
   * 云企付-子商户银行卡解绑结果查询
   */
  async QueryOpenBankUnbindExternalSubMerchantBankAccount(
    req: QueryOpenBankUnbindExternalSubMerchantBankAccountRequest,
    cb?: (error: string, rep: QueryOpenBankUnbindExternalSubMerchantBankAccountResponse) => void
  ): Promise<QueryOpenBankUnbindExternalSubMerchantBankAccountResponse> {
    return this.request("QueryOpenBankUnbindExternalSubMerchantBankAccount", req, cb)
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
   * 云支付-查询合同可关联门店接口
   */
  async QueryContractRelateShop(
    req: QueryContractRelateShopRequest,
    cb?: (error: string, rep: QueryContractRelateShopResponse) => void
  ): Promise<QueryContractRelateShopResponse> {
    return this.request("QueryContractRelateShop", req, cb)
  }

  /**
   * 云支付-查询门店明细接口
   */
  async ViewShop(
    req: ViewShopRequest,
    cb?: (error: string, rep: ViewShopResponse) => void
  ): Promise<ViewShopResponse> {
    return this.request("ViewShop", req, cb)
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
   * 智能代发-单笔代发转账查询接口
   */
  async QueryTransferResult(
    req: QueryTransferResultRequest,
    cb?: (error: string, rep: QueryTransferResultResponse) => void
  ): Promise<QueryTransferResultResponse> {
    return this.request("QueryTransferResult", req, cb)
  }

  /**
   * 直播平台-主播入驻
   */
  async CreateAnchor(
    req: CreateAnchorRequest,
    cb?: (error: string, rep: CreateAnchorResponse) => void
  ): Promise<CreateAnchorResponse> {
    return this.request("CreateAnchor", req, cb)
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
   * 云支付-获取门店OpenId接口
   */
  async QueryShopOpenId(
    req: QueryShopOpenIdRequest,
    cb?: (error: string, rep: QueryShopOpenIdResponse) => void
  ): Promise<QueryShopOpenIdResponse> {
    return this.request("QueryShopOpenId", req, cb)
  }

  /**
   * 财税-查询金融数据文件下载链接
   */
  async QueryFinancialDataUrl(
    req: QueryFinancialDataUrlRequest,
    cb?: (error: string, rep: QueryFinancialDataUrlResponse) => void
  ): Promise<QueryFinancialDataUrlResponse> {
    return this.request("QueryFinancialDataUrl", req, cb)
  }

  /**
   * 商户恶意注册接口
   */
  async QueryMaliciousRegistration(
    req: QueryMaliciousRegistrationRequest,
    cb?: (error: string, rep: QueryMaliciousRegistrationResponse) => void
  ): Promise<QueryMaliciousRegistrationResponse> {
    return this.request("QueryMaliciousRegistration", req, cb)
  }

  /**
   * 山姆聚合支付项目-存量订单退款接口。可以通过本接口将支付款全部或部分退还给付款方，在收到用户退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付账号。
   */
  async MigrateOrderRefund(
    req: MigrateOrderRefundRequest,
    cb?: (error: string, rep: MigrateOrderRefundResponse) => void
  ): Promise<MigrateOrderRefundResponse> {
    return this.request("MigrateOrderRefund", req, cb)
  }

  /**
   * 云企付-子商户资质文件查询
   */
  async QueryOpenBankSubMerchantCredential(
    req: QueryOpenBankSubMerchantCredentialRequest,
    cb?: (error: string, rep: QueryOpenBankSubMerchantCredentialResponse) => void
  ): Promise<QueryOpenBankSubMerchantCredentialResponse> {
    return this.request("QueryOpenBankSubMerchantCredential", req, cb)
  }

  /**
   * 灵云V2-查询付款订单状态
   */
  async QueryFlexPaymentOrderStatus(
    req: QueryFlexPaymentOrderStatusRequest,
    cb?: (error: string, rep: QueryFlexPaymentOrderStatusResponse) => void
  ): Promise<QueryFlexPaymentOrderStatusResponse> {
    return this.request("QueryFlexPaymentOrderStatus", req, cb)
  }

  /**
   * 灵云V2-平台账户余额查询
   */
  async QueryFlexPlatformAccountBalance(
    req: QueryFlexPlatformAccountBalanceRequest,
    cb?: (error: string, rep: QueryFlexPlatformAccountBalanceResponse) => void
  ): Promise<QueryFlexPlatformAccountBalanceResponse> {
    return this.request("QueryFlexPlatformAccountBalance", req, cb)
  }

  /**
   * 灵云V2-查询税前金额
   */
  async QueryFlexAmountBeforeTax(
    req: QueryFlexAmountBeforeTaxRequest,
    cb?: (error: string, rep: QueryFlexAmountBeforeTaxResponse) => void
  ): Promise<QueryFlexAmountBeforeTaxResponse> {
    return this.request("QueryFlexAmountBeforeTax", req, cb)
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
   * 聚鑫-申请对账文件
   */
  async ApplyReconciliationFile(
    req: ApplyReconciliationFileRequest,
    cb?: (error: string, rep: ApplyReconciliationFileResponse) => void
  ): Promise<ApplyReconciliationFileResponse> {
    return this.request("ApplyReconciliationFile", req, cb)
  }

  /**
   * 聚鑫-查询对账文件申请结果
   */
  async QueryReconciliationFileApplyInfo(
    req: QueryReconciliationFileApplyInfoRequest,
    cb?: (error: string, rep: QueryReconciliationFileApplyInfoResponse) => void
  ): Promise<QueryReconciliationFileApplyInfoResponse> {
    return this.request("QueryReconciliationFileApplyInfo", req, cb)
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
   * 云企付-分页查询对账单数据
   */
  async QueryOpenBankBillDataPage(
    req: QueryOpenBankBillDataPageRequest,
    cb?: (error: string, rep: QueryOpenBankBillDataPageResponse) => void
  ): Promise<QueryOpenBankBillDataPageResponse> {
    return this.request("QueryOpenBankBillDataPage", req, cb)
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
   * 云企付-子商户银行卡打款验证，在接入TENPAY渠道EBANK_PAYMENT付款时，若客户期望接入担保支付，需在接入前先完成，收款商户绑定的银行卡进行打款验证。验证成功后，才可以调用CreateOpenBankPaymentOrder接口进行担保支付下单。
   */
  async VerifyOpenBankAccount(
    req: VerifyOpenBankAccountRequest,
    cb?: (error: string, rep: VerifyOpenBankAccountResponse) => void
  ): Promise<VerifyOpenBankAccountResponse> {
    return this.request("VerifyOpenBankAccount", req, cb)
  }

  /**
   * 灵云V2-收款用户开立
   */
  async CreateFlexPayee(
    req: CreateFlexPayeeRequest,
    cb?: (error: string, rep: CreateFlexPayeeResponse) => void
  ): Promise<CreateFlexPayeeResponse> {
    return this.request("CreateFlexPayee", req, cb)
  }

  /**
   * 查询微工卡核身结果
   */
  async QueryFlexWechatAuthResult(
    req: QueryFlexWechatAuthResultRequest,
    cb?: (error: string, rep: QueryFlexWechatAuthResultResponse) => void
  ): Promise<QueryFlexWechatAuthResultResponse> {
    return this.request("QueryFlexWechatAuthResult", req, cb)
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
   * 直播平台-上传代理商完税列表
   */
  async UploadTaxList(
    req: UploadTaxListRequest,
    cb?: (error: string, rep: UploadTaxListResponse) => void
  ): Promise<UploadTaxListResponse> {
    return this.request("UploadTaxList", req, cb)
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
   * 智慧零售-发票查询V2
   */
  async QueryInvoiceV2(
    req: QueryInvoiceV2Request,
    cb?: (error: string, rep: QueryInvoiceV2Response) => void
  ): Promise<QueryInvoiceV2Response> {
    return this.request("QueryInvoiceV2", req, cb)
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
   * 云支付-统一下单接口
   */
  async UnifiedTlinxOrder(
    req: UnifiedTlinxOrderRequest,
    cb?: (error: string, rep: UnifiedTlinxOrderResponse) => void
  ): Promise<UnifiedTlinxOrderResponse> {
    return this.request("UnifiedTlinxOrder", req, cb)
  }

  /**
   * 云支付-上传机构文件接口
   */
  async UploadOrgFile(
    req: UploadOrgFileRequest,
    cb?: (error: string, rep: UploadOrgFileResponse) => void
  ): Promise<UploadOrgFileResponse> {
    return this.request("UploadOrgFile", req, cb)
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
   * 云鉴-商户信息查询接口
   */
  async QueryMerchant(
    req: QueryMerchantRequest,
    cb?: (error: string, rep: QueryMerchantResponse) => void
  ): Promise<QueryMerchantResponse> {
    return this.request("QueryMerchant", req, cb)
  }

  /**
   * 微工卡开通预核身接口
   */
  async ApplyFlexWechatPreAuth(
    req: ApplyFlexWechatPreAuthRequest,
    cb?: (error: string, rep: ApplyFlexWechatPreAuthResponse) => void
  ): Promise<ApplyFlexWechatPreAuthResponse> {
    return this.request("ApplyFlexWechatPreAuth", req, cb)
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
   * 云企付-子商户银行卡绑定
   */
  async BindOpenBankExternalSubMerchantBankAccount(
    req: BindOpenBankExternalSubMerchantBankAccountRequest,
    cb?: (error: string, rep: BindOpenBankExternalSubMerchantBankAccountResponse) => void
  ): Promise<BindOpenBankExternalSubMerchantBankAccountResponse> {
    return this.request("BindOpenBankExternalSubMerchantBankAccount", req, cb)
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
   * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
   */
  async QueryCloudRefundOrder(
    req: QueryCloudRefundOrderRequest,
    cb?: (error: string, rep: QueryCloudRefundOrderResponse) => void
  ): Promise<QueryCloudRefundOrderResponse> {
    return this.request("QueryCloudRefundOrder", req, cb)
  }

  /**
   * 云支付-下载机构文件接口
   */
  async DownloadOrgFile(
    req: DownloadOrgFileRequest,
    cb?: (error: string, rep: DownloadOrgFileResponse) => void
  ): Promise<DownloadOrgFileResponse> {
    return this.request("DownloadOrgFile", req, cb)
  }

  /**
     * 调用该接口返回对账单下载地址，对账单下载URL通过GET方式访问，返回zip包，解压后为csv格式文件。文件首行如下：
订单号,订单归属日期,机构编号,订单描述,交易类型,订单状态,支付场景,原始金额,折扣金额,实际交易金额,支付渠道优惠金额,抹零金额,币种,下单时间,付款成功时间,商户编号,门店编号,付款方式编号,付款方式名称,商户手续费T1,商户扣率,是否信用卡交易,原始订单号,用户账号,外部订单号,订单备注
     */
  async GetBillDownloadUrl(
    req: GetBillDownloadUrlRequest,
    cb?: (error: string, rep: GetBillDownloadUrlResponse) => void
  ): Promise<GetBillDownloadUrlResponse> {
    return this.request("GetBillDownloadUrl", req, cb)
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
   * 聚鑫-查询会员资金交易信息列表
   */
  async QueryFundsTransactionDetails(
    req: QueryFundsTransactionDetailsRequest,
    cb?: (error: string, rep: QueryFundsTransactionDetailsResponse) => void
  ): Promise<QueryFundsTransactionDetailsResponse> {
    return this.request("QueryFundsTransactionDetails", req, cb)
  }

  /**
   * 云企付-创建核销申请，适用于针对支付订单维度的确认收货，解冻等业务场景。目前支持的渠道有TENPAY下的EBANK_PAYMENT付款方式创建支付订单时，选择担保支付下单的订单进行解冻。
   */
  async CreateOpenBankVerificationOrder(
    req: CreateOpenBankVerificationOrderRequest,
    cb?: (error: string, rep: CreateOpenBankVerificationOrderResponse) => void
  ): Promise<CreateOpenBankVerificationOrderResponse> {
    return this.request("CreateOpenBankVerificationOrder", req, cb)
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
   * 云支付-分账解除分账接收方接口
   */
  async DistributeRemoveReceiver(
    req: DistributeRemoveReceiverRequest,
    cb?: (error: string, rep: DistributeRemoveReceiverResponse) => void
  ): Promise<DistributeRemoveReceiverResponse> {
    return this.request("DistributeRemoveReceiver", req, cb)
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
   * 云企付-查询订单支付结果
   */
  async QueryOpenBankPaymentOrder(
    req: QueryOpenBankPaymentOrderRequest,
    cb?: (error: string, rep: QueryOpenBankPaymentOrderResponse) => void
  ): Promise<QueryOpenBankPaymentOrderResponse> {
    return this.request("QueryOpenBankPaymentOrder", req, cb)
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
   * 云企付-子商户银行卡解绑
   */
  async UnbindOpenBankExternalSubMerchantBankAccount(
    req: UnbindOpenBankExternalSubMerchantBankAccountRequest,
    cb?: (error: string, rep: UnbindOpenBankExternalSubMerchantBankAccountResponse) => void
  ): Promise<UnbindOpenBankExternalSubMerchantBankAccountResponse> {
    return this.request("UnbindOpenBankExternalSubMerchantBankAccount", req, cb)
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
   * 云企付-创建商户
   */
  async CreateOpenBankMerchant(
    req: CreateOpenBankMerchantRequest,
    cb?: (error: string, rep: CreateOpenBankMerchantResponse) => void
  ): Promise<CreateOpenBankMerchantResponse> {
    return this.request("CreateOpenBankMerchant", req, cb)
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
   * 发起支付等渠道操作后，可以调用该接口查询渠道的数据。
   */
  async QueryCloudChannelData(
    req: QueryCloudChannelDataRequest,
    cb?: (error: string, rep: QueryCloudChannelDataResponse) => void
  ): Promise<QueryCloudChannelDataResponse> {
    return this.request("QueryCloudChannelData", req, cb)
  }

  /**
   * 云支付-查询城市编码接口
   */
  async QueryCityCode(
    req: QueryCityCodeRequest,
    cb?: (error: string, rep: QueryCityCodeResponse) => void
  ): Promise<QueryCityCodeResponse> {
    return this.request("QueryCityCode", req, cb)
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
   * 灵云V2-收款用户账户权益状态修改
   */
  async ModifyFlexPayeeAccountRightStatus(
    req: ModifyFlexPayeeAccountRightStatusRequest,
    cb?: (error: string, rep: ModifyFlexPayeeAccountRightStatusResponse) => void
  ): Promise<ModifyFlexPayeeAccountRightStatusResponse> {
    return this.request("ModifyFlexPayeeAccountRightStatus", req, cb)
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
   * 云企付-关闭订单
   */
  async CloseOpenBankPaymentOrder(
    req: CloseOpenBankPaymentOrderRequest,
    cb?: (error: string, rep: CloseOpenBankPaymentOrderResponse) => void
  ): Promise<CloseOpenBankPaymentOrderResponse> {
    return this.request("CloseOpenBankPaymentOrder", req, cb)
  }

  /**
   * 如交易订单需退款，可以通过本接口将支付款全部或部分退还给付款方，聚鑫将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。最长支持1年的订单退款。在订单包含多个子订单的情况下，如果使用本接口传入OutTradeNo或TransactionId退款，则只支持全单退款；如果需要部分退款，请通过传入子订单的方式来指定部分金额退款。
   */
  async RefundCloudOrder(
    req: RefundCloudOrderRequest,
    cb?: (error: string, rep: RefundCloudOrderResponse) => void
  ): Promise<RefundCloudOrderResponse> {
    return this.request("RefundCloudOrder", req, cb)
  }

  /**
   * 灵云V2-收款用户账户余额查询
   */
  async QueryFlexPayeeAccountBalance(
    req: QueryFlexPayeeAccountBalanceRequest,
    cb?: (error: string, rep: QueryFlexPayeeAccountBalanceResponse) => void
  ): Promise<QueryFlexPayeeAccountBalanceResponse> {
    return this.request("QueryFlexPayeeAccountBalance", req, cb)
  }

  /**
   * 云支付-分账授权申请接口
   */
  async DistributeAccreditTlinx(
    req: DistributeAccreditTlinxRequest,
    cb?: (error: string, rep: DistributeAccreditTlinxResponse) => void
  ): Promise<DistributeAccreditTlinxResponse> {
    return this.request("DistributeAccreditTlinx", req, cb)
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
   * 云支付-分账结果查询接口
   */
  async DistributeQuery(
    req: DistributeQueryRequest,
    cb?: (error: string, rep: DistributeQueryResponse) => void
  ): Promise<DistributeQueryResponse> {
    return this.request("DistributeQuery", req, cb)
  }

  /**
   * 云企付-子商户费率配置
   */
  async CreateOpenBankSubMerchantRateConfigure(
    req: CreateOpenBankSubMerchantRateConfigureRequest,
    cb?: (error: string, rep: CreateOpenBankSubMerchantRateConfigureResponse) => void
  ): Promise<CreateOpenBankSubMerchantRateConfigureResponse> {
    return this.request("CreateOpenBankSubMerchantRateConfigure", req, cb)
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
   * 灵云V2-查询对账单文件下载链接
   */
  async QueryFlexBillDownloadUrl(
    req: QueryFlexBillDownloadUrlRequest,
    cb?: (error: string, rep: QueryFlexBillDownloadUrlResponse) => void
  ): Promise<QueryFlexBillDownloadUrlResponse> {
    return this.request("QueryFlexBillDownloadUrl", req, cb)
  }

  /**
   * 云企付-查询对账单下载地址
   */
  async QueryOpenBankDownLoadUrl(
    req: QueryOpenBankDownLoadUrlRequest,
    cb?: (error: string, rep: QueryOpenBankDownLoadUrlResponse) => void
  ): Promise<QueryOpenBankDownLoadUrlResponse> {
    return this.request("QueryOpenBankDownLoadUrl", req, cb)
  }

  /**
   * 云支付-查询订单付款状态
   */
  async QueryOrderStatus(
    req: QueryOrderStatusRequest,
    cb?: (error: string, rep: QueryOrderStatusResponse) => void
  ): Promise<QueryOrderStatusResponse> {
    return this.request("QueryOrderStatus", req, cb)
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
   * 智慧零售-查询公司抬头
   */
  async QueryCompanyTitle(
    req: QueryCompanyTitleRequest,
    cb?: (error: string, rep: QueryCompanyTitleResponse) => void
  ): Promise<QueryCompanyTitleResponse> {
    return this.request("QueryCompanyTitle", req, cb)
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
   * 查询充值明细接口
   */
  async DescribeChargeDetail(
    req: DescribeChargeDetailRequest,
    cb?: (error: string, rep: DescribeChargeDetailResponse) => void
  ): Promise<DescribeChargeDetailResponse> {
    return this.request("DescribeChargeDetail", req, cb)
  }

  /**
   * 务工卡-查询授权关系
   */
  async GetPayRollAuth(
    req: GetPayRollAuthRequest,
    cb?: (error: string, rep: GetPayRollAuthResponse) => void
  ): Promise<GetPayRollAuthResponse> {
    return this.request("GetPayRollAuth", req, cb)
  }

  /**
     * 调用该接口返回对账单下载地址，对账单下载URL通过GET方式访问，返回zip包，解压后为csv格式文件。文件首行如下：
商户号,订单号,支付订单号,分账订单总金额,分账详情（通过|分割每笔明细：商户号1#分账金额1|商户号2#分账金额2）,交易手续费承担方商户号,交易手续费,发起时间,分账状态,结算日期,非交易主体分账金额,商户退款订单号,商户分账单号
     */
  async GetDistributeBillDownloadUrl(
    req: GetDistributeBillDownloadUrlRequest,
    cb?: (error: string, rep: GetDistributeBillDownloadUrlResponse) => void
  ): Promise<GetDistributeBillDownloadUrlResponse> {
    return this.request("GetDistributeBillDownloadUrl", req, cb)
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
   * 直播平台-文件上传
   */
  async UploadFile(
    req: UploadFileRequest,
    cb?: (error: string, rep: UploadFileResponse) => void
  ): Promise<UploadFileResponse> {
    return this.request("UploadFile", req, cb)
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
   * 灵云V2-修改收款用户资金账号信息
   */
  async ModifyFlexFundingAccount(
    req: ModifyFlexFundingAccountRequest,
    cb?: (error: string, rep: ModifyFlexFundingAccountResponse) => void
  ): Promise<ModifyFlexFundingAccountResponse> {
    return this.request("ModifyFlexFundingAccount", req, cb)
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
   * 云企付-按日期批量查询回单下载地址
   */
  async QueryOpenBankDailyReceiptDownloadUrl(
    req: QueryOpenBankDailyReceiptDownloadUrlRequest,
    cb?: (error: string, rep: QueryOpenBankDailyReceiptDownloadUrlResponse) => void
  ): Promise<QueryOpenBankDailyReceiptDownloadUrlResponse> {
    return this.request("QueryOpenBankDailyReceiptDownloadUrl", req, cb)
  }

  /**
   * 云支付-分账撤销接口
   */
  async DistributeCancel(
    req: DistributeCancelRequest,
    cb?: (error: string, rep: DistributeCancelResponse) => void
  ): Promise<DistributeCancelResponse> {
    return this.request("DistributeCancel", req, cb)
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
   * 云企付-子商户资质文件上传
   */
  async UploadOpenBankSubMerchantCredential(
    req: UploadOpenBankSubMerchantCredentialRequest,
    cb?: (error: string, rep: UploadOpenBankSubMerchantCredentialResponse) => void
  ): Promise<UploadOpenBankSubMerchantCredentialResponse> {
    return this.request("UploadOpenBankSubMerchantCredential", req, cb)
  }

  /**
   * 云企付-绑定分账收款方查询
   */
  async QueryOpenBankProfitSharePayee(
    req: QueryOpenBankProfitSharePayeeRequest,
    cb?: (error: string, rep: QueryOpenBankProfitSharePayeeResponse) => void
  ): Promise<QueryOpenBankProfitSharePayeeResponse> {
    return this.request("QueryOpenBankProfitSharePayee", req, cb)
  }

  /**
   * 云支付-查询已添加分账接收方接口
   */
  async DistributeQueryReceiver(
    req: DistributeQueryReceiverRequest,
    cb?: (error: string, rep: DistributeQueryReceiverResponse) => void
  ): Promise<DistributeQueryReceiverResponse> {
    return this.request("DistributeQueryReceiver", req, cb)
  }

  /**
   * 云企付-结算申请接口
   */
  async ApplyOpenBankSettleOrder(
    req: ApplyOpenBankSettleOrderRequest,
    cb?: (error: string, rep: ApplyOpenBankSettleOrderResponse) => void
  ): Promise<ApplyOpenBankSettleOrderResponse> {
    return this.request("ApplyOpenBankSettleOrder", req, cb)
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
   * 云企付-单笔交易回单申请结果查询
   */
  async QueryOpenBankOrderDetailReceiptInfo(
    req: QueryOpenBankOrderDetailReceiptInfoRequest,
    cb?: (error: string, rep: QueryOpenBankOrderDetailReceiptInfoResponse) => void
  ): Promise<QueryOpenBankOrderDetailReceiptInfoResponse> {
    return this.request("QueryOpenBankOrderDetailReceiptInfo", req, cb)
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
   * 云支付-分账添加分账接收方接口
   */
  async DistributeAddReceiver(
    req: DistributeAddReceiverRequest,
    cb?: (error: string, rep: DistributeAddReceiverResponse) => void
  ): Promise<DistributeAddReceiverResponse> {
    return this.request("DistributeAddReceiver", req, cb)
  }

  /**
   * 子商户在线签约查询
   */
  async QueryOpenBankSubMerchantSignOnline(
    req: QueryOpenBankSubMerchantSignOnlineRequest,
    cb?: (error: string, rep: QueryOpenBankSubMerchantSignOnlineResponse) => void
  ): Promise<QueryOpenBankSubMerchantSignOnlineResponse> {
    return this.request("QueryOpenBankSubMerchantSignOnline", req, cb)
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
   * 云支付-添加商户接口
   */
  async AddMerchant(
    req: AddMerchantRequest,
    cb?: (error: string, rep: AddMerchantResponse) => void
  ): Promise<AddMerchantResponse> {
    return this.request("AddMerchant", req, cb)
  }

  /**
   * 云企付-子商户银行卡列表查询
   */
  async QueryOpenBankExternalSubMerchantBankAccount(
    req: QueryOpenBankExternalSubMerchantBankAccountRequest,
    cb?: (error: string, rep: QueryOpenBankExternalSubMerchantBankAccountResponse) => void
  ): Promise<QueryOpenBankExternalSubMerchantBankAccountResponse> {
    return this.request("QueryOpenBankExternalSubMerchantBankAccount", req, cb)
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
   * 直播平台-查询代理商结算单链接
   */
  async QueryAgentStatements(
    req: QueryAgentStatementsRequest,
    cb?: (error: string, rep: QueryAgentStatementsResponse) => void
  ): Promise<QueryAgentStatementsResponse> {
    return this.request("QueryAgentStatements", req, cb)
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
   * 跨境-汇出指令申请。通过该接口可将对接方账户中的人民币余额汇兑成外币，再汇出至指定银行账户。
   */
  async ApplyOutwardOrder(
    req: ApplyOutwardOrderRequest,
    cb?: (error: string, rep: ApplyOutwardOrderResponse) => void
  ): Promise<ApplyOutwardOrderResponse> {
    return this.request("ApplyOutwardOrder", req, cb)
  }

  /**
   * 云企付-子商户进件结果查询
   */
  async QueryOpenBankExternalSubMerchantRegistration(
    req: QueryOpenBankExternalSubMerchantRegistrationRequest,
    cb?: (error: string, rep: QueryOpenBankExternalSubMerchantRegistrationResponse) => void
  ): Promise<QueryOpenBankExternalSubMerchantRegistrationResponse> {
    return this.request("QueryOpenBankExternalSubMerchantRegistration", req, cb)
  }

  /**
   * 灵云V2-绑定收款用户资金账号信息
   */
  async AddFlexFundingAccount(
    req: AddFlexFundingAccountRequest,
    cb?: (error: string, rep: AddFlexFundingAccountResponse) => void
  ): Promise<AddFlexFundingAccountResponse> {
    return this.request("AddFlexFundingAccount", req, cb)
  }

  /**
   * 应用需要先调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
   */
  async UnifiedCloudOrder(
    req: UnifiedCloudOrderRequest,
    cb?: (error: string, rep: UnifiedCloudOrderResponse) => void
  ): Promise<UnifiedCloudOrderResponse> {
    return this.request("UnifiedCloudOrder", req, cb)
  }

  /**
   * 云支付-查询支付方式费率及自定义表单项接口
   */
  async QueryContractPayFee(
    req: QueryContractPayFeeRequest,
    cb?: (error: string, rep: QueryContractPayFeeResponse) => void
  ): Promise<QueryContractPayFeeResponse> {
    return this.request("QueryContractPayFee", req, cb)
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
   * 云企付-子商户银行卡绑定结果查询
   */
  async QueryOpenBankBindExternalSubMerchantBankAccount(
    req: QueryOpenBankBindExternalSubMerchantBankAccountRequest,
    cb?: (error: string, rep: QueryOpenBankBindExternalSubMerchantBankAccountResponse) => void
  ): Promise<QueryOpenBankBindExternalSubMerchantBankAccountResponse> {
    return this.request("QueryOpenBankBindExternalSubMerchantBankAccount", req, cb)
  }

  /**
   * 第三方子商户电子记账本创建接口
   */
  async CreateOpenBankExternalSubMerchantAccountBook(
    req: CreateOpenBankExternalSubMerchantAccountBookRequest,
    cb?: (error: string, rep: CreateOpenBankExternalSubMerchantAccountBookResponse) => void
  ): Promise<CreateOpenBankExternalSubMerchantAccountBookResponse> {
    return this.request("CreateOpenBankExternalSubMerchantAccountBook", req, cb)
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
   * 灵云V2-结算
   */
  async ApplyFlexSettlement(
    req: ApplyFlexSettlementRequest,
    cb?: (error: string, rep: ApplyFlexSettlementResponse) => void
  ): Promise<ApplyFlexSettlementResponse> {
    return this.request("ApplyFlexSettlement", req, cb)
  }

  /**
   * 云企付-子商户银行卡余额查询
   */
  async QueryOpenBankBankAccountBalance(
    req: QueryOpenBankBankAccountBalanceRequest,
    cb?: (error: string, rep: QueryOpenBankBankAccountBalanceResponse) => void
  ): Promise<QueryOpenBankBankAccountBalanceResponse> {
    return this.request("QueryOpenBankBankAccountBalance", req, cb)
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
   * 云企付-子商户进件V2
   */
  async CreateOpenBankAggregatedSubMerchantRegistration(
    req: CreateOpenBankAggregatedSubMerchantRegistrationRequest,
    cb?: (error: string, rep: CreateOpenBankAggregatedSubMerchantRegistrationResponse) => void
  ): Promise<CreateOpenBankAggregatedSubMerchantRegistrationResponse> {
    return this.request("CreateOpenBankAggregatedSubMerchantRegistration", req, cb)
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
   * 通过此接口关闭此前已创建的订单。关闭后，用户将无法继续付款，仅能关闭创建后未支付的订单。
   */
  async CloseCloudOrder(
    req: CloseCloudOrderRequest,
    cb?: (error: string, rep: CloseCloudOrderResponse) => void
  ): Promise<CloseCloudOrderResponse> {
    return this.request("CloseCloudOrder", req, cb)
  }

  /**
   * 灵云-查询超额信息
   */
  async QueryExceedingInfo(
    req: QueryExceedingInfoRequest,
    cb?: (error: string, rep: QueryExceedingInfoResponse) => void
  ): Promise<QueryExceedingInfoResponse> {
    return this.request("QueryExceedingInfo", req, cb)
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

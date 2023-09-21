import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryFlexPaymentOrderStatusRequest, QueryAcctBindingRequest, QueryCompanyTitleResponse, ReviseMbrPropertyResponse, ApplyPayerInfoResponse, UnifiedOrderResponse, ApplyOpenBankSettleOrderResponse, CreatePayRollTokenResponse, BindAcctRequest, QueryOpenBankBankBranchListResponse, MigrateOrderRefundQueryResponse, QueryOpenBankPaymentOrderRequest, QueryOpenBankBindExternalSubMerchantBankAccountResponse, UploadOrgFileRequest, GetPayRollAuthResultRequest, RefundTlinxOrderResponse, CreatePayMerchantRequest, QueryContractPayWayListResponse, QueryContractPayWayListRequest, GetBillDownloadUrlResponse, QueryAssignmentRequest, UnbindRelateAcctRequest, UnifiedTlinxOrderResponse, CreateMerchantRequest, QueryContractRelateShopResponse, RefundTlinxOrderRequest, QueryAcctBindingResponse, QueryOpenBankSubMerchantSignOnlineResponse, BindAccountResponse, UnbindOpenBankExternalSubMerchantBankAccountRequest, QueryOpenBankExternalSubMerchantRegistrationRequest, RevokeRechargeByThirdPayRequest, QueryMerchantInfoForManagementResponse, CreateTransferBatchResponse, BindAccountRequest, QueryCloudChannelDataResponse, UploadExternalAnchorInfoResponse, QueryCustAcctIdBalanceResponse, QueryOpenBankSubMerchantSignOnlineRequest, CreateRedInvoiceRequest, QueryAcctInfoListResponse, QueryOpenBankExternalSubMerchantBankAccountRequest, ExecuteMemberTransactionResponse, ConfirmOrderRequest, ModifyFlexPayeeAccountRightStatusResponse, ModifyMerchantResponse, VerifyOpenBankAccountRequest, QuerySmallAmountTransferResponse, CreateFlexPayeeResponse, QuerySingleTransactionStatusResponse, CreateOpenBankMerchantResponse, QueryOrderRequest, RevokeMemberRechargeThirdPayResponse, DistributeAccreditTlinxRequest, QueryContractRelateShopRequest, CreateOpenBankRechargeOrderRequest, QueryExceedingInfoResponse, AddContractRequest, CreateAcctResponse, CreateOpenBankVerificationOrderResponse, DistributeAddReceiverRequest, QueryFinancialDataUrlRequest, QueryOpenBankDailyReceiptDownloadUrlResponse, QueryPayerInfoResponse, QueryMerchantBalanceResponse, BindOpenBankExternalSubMerchantBankAccountResponse, QueryOpenBankSettleOrderResponse, BindOpenBankProfitSharePayeeRequest, AddMerchantResponse, QueryFlexSettlementOrderListRequest, RefundCloudOrderRequest, CreateOpenBankAggregatedSubMerchantRegistrationResponse, QueryFlexPlatformAccountBalanceResponse, ApplyReWithdrawalRequest, QueryFlexWechatAuthResultResponse, RechargeByThirdPayResponse, QueryOutwardOrderRequest, ViewMerchantRequest, CloseCloudOrderResponse, RefundRequest, CreateInvoiceV2Response, QueryInvoiceV2Response, QueryAgentStatementsResponse, QueryOutwardOrderResponse, QuerySinglePaymentResultRequest, QueryShopOpenIdRequest, QueryBalanceResponse, CloseOpenBankPaymentOrderResponse, TerminateContractRequest, ModifyFlexPayeeAccountRightStatusRequest, QueryMaliciousRegistrationResponse, RefundCloudOrderResponse, QueryBankClearRequest, QueryInvoiceRequest, CreatePayRollPreOrderResponse, DistributeQueryReceiverRequest, QueryOpenBankUnbindExternalSubMerchantBankAccountResponse, QueryOpenBankDownLoadUrlRequest, DownloadBillRequest, RevokeMemberRechargeThirdPayRequest, ApplyTradeResponse, QueryOpenBankSettleOrderRequest, QueryOpenBankSupportBankListRequest, QueryFlexPayeeAccountBalanceRequest, ContractOrderRequest, QueryContractPayFeeResponse, BindOpenBankProfitSharePayeeResponse, QueryFlexServiceProviderAccountBalanceRequest, BindRelateAcctSmallAmountResponse, QueryTransferDetailResponse, QueryTransferBatchResponse, ModifyFlexFundingAccountResponse, QueryContractPayFeeRequest, QueryOrderResponse, CreateOpenBankExternalSubMerchantRegistrationResponse, QueryFlexSettlementOrderListResponse, QueryFlexPayeeInfoResponse, QueryMemberTransactionDetailsRequest, RegisterBehaviorRequest, UnbindOpenBankExternalSubMerchantBankAccountResponse, QueryTradeRequest, QueryBankWithdrawCashDetailsRequest, QueryMerchantPayWayListRequest, QueryOpenBankRefundOrderRequest, WithdrawCashMembershipRequest, CreateInvoiceResponse, AddMerchantRequest, QueryAnchorContractInfoRequest, CreateOpenBankPaymentOrderRequest, QueryReconciliationDocumentRequest, CreateOpenBankUnifiedOrderResponse, DeleteAgentTaxPaymentInfoRequest, CreateOpenBankExternalSubMerchantRegistrationRequest, GetDistributeBillDownloadUrlResponse, ViewContractResponse, QueryCommonTransferRechargeResponse, CreateOpenBankMerchantRequest, ModifyAgentTaxPaymentInfoResponse, QueryBatchPaymentResultResponse, FreezeFlexBalanceResponse, QueryOpenBankDailyReceiptDownloadUrlRequest, UploadExternalAnchorInfoRequest, CreateAcctRequest, CreateAgentTaxPaymentInfosRequest, CreatePayRollPreOrderWithAuthRequest, QueryMerchantBalanceRequest, ApplyFlexWechatPreAuthRequest, QueryPayerInfoRequest, QuerySingleTransactionStatusRequest, QueryContractRequest, CreateOpenBankRechargeOrderResponse, QueryDownloadBillURLRequest, QueryOpenBankOrderDetailReceiptInfoRequest, QueryOpenBankExternalSubAccountBookBalanceResponse, QueryOrderStatusRequest, CreateExternalAnchorResponse, QueryTradeResponse, QueryMerchantOrderRequest, DistributeQueryResponse, CreateInvoiceV2Request, QueryFlexPayeeAccountListResponse, UploadTaxListResponse, QueryReconciliationFileApplyInfoResponse, BindRelateAcctUnionPayRequest, QueryCloudOrderResponse, CreateOpenBankVerificationOrderRequest, QueryFlexFreezeOrderListResponse, CreateOpenBankExternalSubMerchantAccountBookRequest, QueryFlexPayeeInfoRequest, RegisterBehaviorResponse, GetPayRollAuthListRequest, QueryBalanceRequest, ApplyWithdrawalResponse, QueryMerchantInfoForManagementRequest, UnifiedTlinxOrderRequest, DeduceQuotaRequest, RechargeMemberThirdPayResponse, QueryBatchPaymentResultRequest, BindAcctResponse, BindRelateAcctSmallAmountRequest, QueryFlexPaymentOrderListRequest, FreezeFlexBalanceRequest, BindRelateAccReUnionPayRequest, QueryAcctInfoResponse, MigrateOrderRefundQueryRequest, VerifyOpenBankAccountResponse, GetBillDownloadUrlRequest, CreatePayMerchantResponse, UnbindRelateAcctResponse, GetDistributeBillDownloadUrlRequest, GetPayRollAuthListResponse, CreateOpenBankSubMerchantRateConfigureRequest, QueryRefundRequest, CreateCustAcctIdRequest, ApplyFlexPaymentRequest, SyncContractDataRequest, DistributeApplyResponse, AddFlexPhoneNoResponse, DistributeQueryRequest, CloseOrderRequest, QueryFlexPayeeAccountBalanceResponse, ViewContractRequest, QueryBankTransactionDetailsRequest, QueryFinancialDataUrlResponse, QueryExchangeRateRequest, QueryBillDownloadURLRequest, QueryOpenBankDownLoadUrlResponse, QueryOpenBankVerificationOrderResponse, ApplyApplicationMaterialResponse, QueryFlexPlatformAccountBalanceRequest, ExecuteMemberTransactionRequest, DescribeOrderStatusResponse, CreateMerchantResponse, CreateSinglePaymentResponse, CloseOpenBankPaymentOrderRequest, QueryCompanyTitleRequest, GetPayRollAuthRequest, QueryOpenBankBillDataPageRequest, ApplyWithdrawalRequest, ApplyFlexSettlementResponse, QuerySinglePaymentResultResponse, QueryMemberBindResponse, QueryMemberBindRequest, BindRelateAcctUnionPayResponse, QueryCloudRefundOrderRequest, UnifiedOrderRequest, RechargeByThirdPayRequest, DistributeRemoveReceiverResponse, QueryInvoiceV2Request, DistributeAccreditQueryRequest, QueryMerchantResponse, ViewShopResponse, ApplyTradeRequest, QueryOpenBankProfitSharePayeeResponse, QueryExchangeRateResponse, AddFlexFundingAccountRequest, ModifyFlexFundingAccountRequest, QuerySmallAmountTransferRequest, ModifyMntMbrBindRelateAcctBankCodeRequest, QueryCustAcctIdBalanceRequest, ReviseMbrPropertyRequest, QueryOpenBankSubMerchantRateConfigureResponse, UploadFileRequest, QueryBankWithdrawCashDetailsResponse, UploadTaxPaymentResponse, QueryCloudRefundOrderResponse, QueryFlexOrderSummaryListResponse, DistributeAccreditQueryResponse, QueryOpenBankSubMerchantCredentialResponse, UnifiedCloudOrderResponse, QueryFlexOrderSummaryListRequest, ApplyReWithdrawalResponse, GetPayRollAuthResultResponse, RegisterBillRequest, CreateBatchPaymentResponse, ApplyFlexSettlementRequest, QueryFlexPayeeAccountInfoRequest, QueryOpenBankBillDataPageResponse, CreateExternalAnchorRequest, ConfirmOrderResponse, GetPayRollAuthResponse, QueryApplicationMaterialRequest, CheckAmountResponse, QueryFlexPaymentOrderStatusResponse, QueryCityCodeResponse, QueryApplicationMaterialResponse, DownloadBillResponse, QueryOpenBankBindExternalSubMerchantBankAccountRequest, DistributeRemoveReceiverRequest, CreatePayRollPreOrderRequest, DeleteAgentTaxPaymentInfosRequest, QueryAcctInfoListRequest, CreatePayRollTokenRequest, AddShopRequest, QueryOrderStatusResponse, ApplyFlexPaymentResponse, QueryTransferResultResponse, CloseCloudOrderRequest, QueryAcctInfoRequest, DescribeChargeDetailResponse, CreateOpenBankGlobalPaymentOrderRequest, DistributeQueryReceiverResponse, QueryFlexFreezeOrderListRequest, QueryTransferResultRequest, TransferSinglePayResponse, QueryOpenBankExternalSubMerchantBankAccountResponse, CreateRedInvoiceV2Request, ApplyOpenBankOrderDetailReceiptResponse, QueryMerchantClassificationRequest, AddContractResponse, CreateOrderResponse, QueryMemberTransactionDetailsResponse, AddFlexIdInfoRequest, ModifyMerchantRequest, RefundMemberTransactionRequest, CreateCloudSubMerchantResponse, QueryFundsTransactionDetailsRequest, QueryOpenBankRefundOrderResponse, QueryFlexBillDownloadUrlResponse, CheckAmountRequest, DistributeCancelRequest, QueryOpenBankSupportBankListResponse, RefundMemberTransactionResponse, QueryCloudOrderRequest, UnBindAcctResponse, QueryCommonTransferRechargeRequest, ApplyOpenBankOrderDetailReceiptRequest, QueryTransferDetailRequest, DownloadOrgFileResponse, CreateOpenBankAggregatedSubMerchantRegistrationRequest, QueryReconciliationDocumentResponse, QueryBankTransactionDetailsResponse, TransferSinglePayRequest, QueryOpenBankVerificationOrderRequest, QueryFlexAmountBeforeTaxRequest, MigrateOrderRefundRequest, AddFlexFundingAccountResponse, UploadOrgFileResponse, QueryOpenBankOrderDetailReceiptInfoResponse, CreateAnchorRequest, QueryExceedingInfoRequest, ApplyOpenBankSubMerchantSignOnlineRequest, ApplyApplicationMaterialRequest, QueryCloudChannelDataRequest, QueryOpenBankBankAccountBalanceRequest, ModifyAgentTaxPaymentInfoRequest, DownloadReconciliationUrlRequest, QueryFlexAmountBeforeTaxResponse, CreateBatchPaymentRequest, CreateOpenBankExternalSubMerchantAccountBookResponse, ModifyMntMbrBindRelateAcctBankCodeResponse, UploadOpenBankSubMerchantCredentialResponse, SyncContractDataResponse, DownloadOrgFileRequest, CreateOpenBankGlobalPaymentOrderResponse, QueryAgentStatementsRequest, QueryBankClearResponse, BindOpenBankExternalSubMerchantBankAccountRequest, MigrateOrderRefundResponse, QueryFlexPaymentOrderListResponse, ContractOrderResponse, QueryInvoiceResponse, UploadTaxPaymentRequest, QueryFlexPayeeAccountListRequest, QueryOpenBankBankAccountBalanceResponse, ViewMerchantResponse, AddShopResponse, UploadFileResponse, RefundResponse, QueryOpenBankProfitSharePayeeRequest, CreateTransferBatchRequest, QueryMemberTransactionRequest, QueryCityCodeRequest, CreateOrderRequest, ModifyBindedAccountRequest, WithdrawCashMembershipResponse, ViewShopRequest, CreateSinglePaymentRequest, QueryFlexPayeeAccountInfoResponse, DistributeApplyRequest, QueryFlexWechatAuthResultRequest, ApplyOutwardOrderResponse, QueryFlexServiceProviderAccountBalanceResponse, AddFlexPhoneNoRequest, CloseOrderResponse, CheckAcctRequest, CreateAgentTaxPaymentInfosResponse, RevokeRechargeByThirdPayResponse, CreateOpenBankUnifiedOrderRequest, ApplyReconciliationFileResponse, DescribeOrderStatusRequest, QueryMemberTransactionResponse, RefundOpenBankOrderResponse, CreateAnchorResponse, QueryFlexBillDownloadUrlRequest, CreateOpenBankSubMerchantRateConfigureResponse, UnifiedCloudOrderRequest, UploadOpenBankSubMerchantCredentialRequest, ApplyOpenBankSettleOrderRequest, QueryOpenBankSubMerchantCredentialRequest, QueryShopOpenIdResponse, QueryAgentTaxPaymentBatchResponse, DeleteAgentTaxPaymentInfosResponse, QueryMerchantClassificationResponse, RegisterBillSupportWithdrawResponse, QueryContractResponse, CreateRedInvoiceResponse, AddFlexIdInfoResponse, UploadTaxListRequest, QueryOpenBankPaymentOrderResponse, QueryMaliciousRegistrationRequest, QueryReconciliationFileApplyInfoRequest, QueryBillDownloadURLResponse, QueryAssignmentResponse, DescribeChargeDetailRequest, CreateCloudSubMerchantRequest, CreateCustAcctIdResponse, QueryAgentTaxPaymentBatchRequest, ApplyReconciliationFileRequest, RegisterBillResponse, QueryOpenBankExternalSubMerchantRegistrationResponse, ApplyOutwardOrderRequest, DistributeAccreditTlinxResponse, RechargeMemberThirdPayRequest, CreateInvoiceRequest, QueryOpenBankUnbindExternalSubMerchantBankAccountRequest, CreateFlexPayeeRequest, QueryFundsTransactionDetailsResponse, CreateRedInvoiceV2Response, ApplyFlexWechatPreAuthResponse, RefundOrderRequest, ApplyOpenBankSubMerchantSignOnlineResponse, QueryTransferBatchRequest, CheckAcctResponse, QueryOpenBankExternalSubAccountBookBalanceRequest, ApplyPayerInfoRequest, DownloadReconciliationUrlResponse, ModifyBindedAccountResponse, CreatePayRollPreOrderWithAuthResponse, RefundOrderResponse, DistributeCancelResponse, QueryOpenBankBankBranchListRequest, CreateOpenBankPaymentOrderResponse, DeduceQuotaResponse, RefundOpenBankOrderRequest, RegisterBillSupportWithdrawRequest, DeleteAgentTaxPaymentInfoResponse, QueryRefundResponse, QueryMerchantPayWayListResponse, DistributeAddReceiverResponse, TerminateContractResponse, QueryOpenBankSubMerchantRateConfigureRequest, QueryMerchantRequest, QueryDownloadBillURLResponse, QueryAnchorContractInfoResponse, BindRelateAccReUnionPayResponse, QueryMerchantOrderResponse, UnBindAcctRequest } from "./cpdp_models";
/**
 * cpdp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 直播平台-查询分配关系
     */
    QueryAssignment(req: QueryAssignmentRequest, cb?: (error: string, rep: QueryAssignmentResponse) => void): Promise<QueryAssignmentResponse>;
    /**
     * 云支付-分账授权申请查询接口
     */
    DistributeAccreditQuery(req: DistributeAccreditQueryRequest, cb?: (error: string, rep: DistributeAccreditQueryResponse) => void): Promise<DistributeAccreditQueryResponse>;
    /**
     * 灵云V2-补充手机号信息
     */
    AddFlexPhoneNo(req: AddFlexPhoneNoRequest, cb?: (error: string, rep: AddFlexPhoneNoResponse) => void): Promise<AddFlexPhoneNoResponse>;
    /**
     * 灵云V2-查询冻结订单列表
     */
    QueryFlexFreezeOrderList(req: QueryFlexFreezeOrderListRequest, cb?: (error: string, rep: QueryFlexFreezeOrderListResponse) => void): Promise<QueryFlexFreezeOrderListResponse>;
    /**
     * 聚鑫-查询会员间交易信息列表
     */
    QueryMemberTransactionDetails(req: QueryMemberTransactionDetailsRequest, cb?: (error: string, rep: QueryMemberTransactionDetailsResponse) => void): Promise<QueryMemberTransactionDetailsResponse>;
    /**
     * 直播平台-修改代理商完税信息
     */
    ModifyAgentTaxPaymentInfo(req: ModifyAgentTaxPaymentInfoRequest, cb?: (error: string, rep: ModifyAgentTaxPaymentInfoResponse) => void): Promise<ModifyAgentTaxPaymentInfoResponse>;
    /**
     * 维护会员绑定提现账户联行号。此接口可以支持市场修改会员的提现账户的开户行信息，具体包括开户行行名、开户行的银行联行号（大小额联行号）和超级网银行号。
     */
    ModifyMntMbrBindRelateAcctBankCode(req: ModifyMntMbrBindRelateAcctBankCodeRequest, cb?: (error: string, rep: ModifyMntMbrBindRelateAcctBankCodeResponse) => void): Promise<ModifyMntMbrBindRelateAcctBankCodeResponse>;
    /**
     * 灵云-批量主播转账接口
     */
    CreateBatchPayment(req: CreateBatchPaymentRequest, cb?: (error: string, rep: CreateBatchPaymentResponse) => void): Promise<CreateBatchPaymentResponse>;
    /**
     * 直播平台-扣减额度
     */
    DeduceQuota(req: DeduceQuotaRequest, cb?: (error: string, rep: DeduceQuotaResponse) => void): Promise<DeduceQuotaResponse>;
    /**
     * 灵云-主播入驻
     */
    CreateExternalAnchor(req: CreateExternalAnchorRequest, cb?: (error: string, rep: CreateExternalAnchorResponse) => void): Promise<CreateExternalAnchorResponse>;
    /**
     * 根据订单号，或者用户Id，查询支付订单状态
     */
    QueryOrder(req: QueryOrderRequest, cb?: (error: string, rep: QueryOrderResponse) => void): Promise<QueryOrderResponse>;
    /**
     * 云企付-退款结果查询
     */
    QueryOpenBankRefundOrder(req: QueryOpenBankRefundOrderRequest, cb?: (error: string, rep: QueryOpenBankRefundOrderResponse) => void): Promise<QueryOpenBankRefundOrderResponse>;
    /**
     * 云企付-查询核销订单状态，客户可以使用该接口来查询核销申请的订单状态。目前仅支持TENPAY渠道EBANK_PAYMENT付款方式的担保支付订单查询。
     */
    QueryOpenBankVerificationOrder(req: QueryOpenBankVerificationOrderRequest, cb?: (error: string, rep: QueryOpenBankVerificationOrderResponse) => void): Promise<QueryOpenBankVerificationOrderResponse>;
    /**
     * 根据订单号或用户ID，查询支付订单状态。
     */
    QueryCloudOrder(req: QueryCloudOrderRequest, cb?: (error: string, rep: QueryCloudOrderResponse) => void): Promise<QueryCloudOrderResponse>;
    /**
     * 会员提现-不验证。此接口受理会员发起的提现申请。会员子账户的可提现余额、可用余额会减少，市场的资金汇总账户(监管账户)会减少相应的发生金额，提现到会员申请的收款账户。
     */
    WithdrawCashMembership(req: WithdrawCashMembershipRequest, cb?: (error: string, rep: WithdrawCashMembershipResponse) => void): Promise<WithdrawCashMembershipResponse>;
    /**
     * 务工卡-获取核身结果
     */
    GetPayRollAuthResult(req: GetPayRollAuthResultRequest, cb?: (error: string, rep: GetPayRollAuthResultResponse) => void): Promise<GetPayRollAuthResultResponse>;
    /**
     * 查询银行时间段内交易明细。查询时间段的会员成功交易。
     */
    QueryBankTransactionDetails(req: QueryBankTransactionDetailsRequest, cb?: (error: string, rep: QueryBankTransactionDetailsResponse) => void): Promise<QueryBankTransactionDetailsResponse>;
    /**
     * 灵云V2-查询服务商账户余额
     */
    QueryFlexServiceProviderAccountBalance(req: QueryFlexServiceProviderAccountBalanceRequest, cb?: (error: string, rep: QueryFlexServiceProviderAccountBalanceResponse) => void): Promise<QueryFlexServiceProviderAccountBalanceResponse>;
    /**
     * 云企付-子商户进件
     */
    CreateOpenBankExternalSubMerchantRegistration(req: CreateOpenBankExternalSubMerchantRegistrationRequest, cb?: (error: string, rep: CreateOpenBankExternalSubMerchantRegistrationResponse) => void): Promise<CreateOpenBankExternalSubMerchantRegistrationResponse>;
    /**
     * 查询普通转账充值明细。接口用于查询会员主动转账进资金汇总账户的明细情况。若会员使用绑定账号转入，则直接入账到会员子账户。若未使用绑定账号转入，则系统无法自动清分到对应子账户，则转入挂账子账户由平台自行清分。若是 “见证+收单充值”T0充值记录时备注Note为“见证+收单充值,订单号” 此接口可以查到T0到账的“见证+收单充值”充值记录。
     */
    QueryCommonTransferRecharge(req: QueryCommonTransferRechargeRequest, cb?: (error: string, rep: QueryCommonTransferRechargeResponse) => void): Promise<QueryCommonTransferRechargeResponse>;
    /**
     * 账单下载接口，根据本接口返回的URL地址，在D+1日下载对账单。注意，本接口返回的URL地址有时效，请尽快下载。URL超时时效后，请重新调用本接口再次获取。
     */
    DownloadBill(req: DownloadBillRequest, cb?: (error: string, rep: DownloadBillResponse) => void): Promise<DownloadBillResponse>;
    /**
     * 灵云V2-付款
     */
    ApplyFlexPayment(req: ApplyFlexPaymentRequest, cb?: (error: string, rep: ApplyFlexPaymentResponse) => void): Promise<ApplyFlexPaymentResponse>;
    /**
     * 云支付-查询合同明细接口
     */
    ViewContract(req: ViewContractRequest, cb?: (error: string, rep: ViewContractResponse) => void): Promise<ViewContractResponse>;
    /**
     * 云企付-聚合下单
     */
    CreateOpenBankUnifiedOrder(req: CreateOpenBankUnifiedOrderRequest, cb?: (error: string, rep: CreateOpenBankUnifiedOrderResponse) => void): Promise<CreateOpenBankUnifiedOrderResponse>;
    /**
     * 查询银行子账户余额。查询会员子账户以及平台的功能子账户的余额。
     */
    QueryCustAcctIdBalance(req: QueryCustAcctIdBalanceRequest, cb?: (error: string, rep: QueryCustAcctIdBalanceResponse) => void): Promise<QueryCustAcctIdBalanceResponse>;
    /**
     * 直播平台-查询主播签约信息
     */
    QueryAnchorContractInfo(req: QueryAnchorContractInfoRequest, cb?: (error: string, rep: QueryAnchorContractInfoResponse) => void): Promise<QueryAnchorContractInfoResponse>;
    /**
     * 智能代发-单笔代发转账接口
     */
    TransferSinglePay(req: TransferSinglePayRequest, cb?: (error: string, rep: TransferSinglePayResponse) => void): Promise<TransferSinglePayResponse>;
    /**
     * 商户查询已开通的支付方式列表
     */
    QueryMerchantPayWayList(req: QueryMerchantPayWayListRequest, cb?: (error: string, rep: QueryMerchantPayWayListResponse) => void): Promise<QueryMerchantPayWayListResponse>;
    /**
     * 云鉴-商户信息修改的接口
     */
    ModifyMerchant(req: ModifyMerchantRequest, cb?: (error: string, rep: ModifyMerchantResponse) => void): Promise<ModifyMerchantResponse>;
    /**
     * 云企付-子商户费率配置结果查询
     */
    QueryOpenBankSubMerchantRateConfigure(req: QueryOpenBankSubMerchantRateConfigureRequest, cb?: (error: string, rep: QueryOpenBankSubMerchantRateConfigureResponse) => void): Promise<QueryOpenBankSubMerchantRateConfigureResponse>;
    /**
     * 登记挂账(支持撤销)。此接口可实现把不明来账或自有资金等已登记在挂账子账户下的资金调整到普通会员子账户。即通过申请调用此接口，将会减少挂账子账户的资金，调增指定的普通会员子账户的可提现余额及可用余额。此接口不支持把挂账子账户资金清分到功能子账户。
     */
    RegisterBillSupportWithdraw(req: RegisterBillSupportWithdrawRequest, cb?: (error: string, rep: RegisterBillSupportWithdrawResponse) => void): Promise<RegisterBillSupportWithdrawResponse>;
    /**
     * 灵云V2-补充证件信息
     */
    AddFlexIdInfo(req: AddFlexIdInfoRequest, cb?: (error: string, rep: AddFlexIdInfoResponse) => void): Promise<AddFlexIdInfoResponse>;
    /**
     * 云企付-创建充值订单
     */
    CreateOpenBankRechargeOrder(req: CreateOpenBankRechargeOrderRequest, cb?: (error: string, rep: CreateOpenBankRechargeOrderResponse) => void): Promise<CreateOpenBankRechargeOrderResponse>;
    /**
     * 跨境-贸易材料明细查询。
     */
    QueryTrade(req: QueryTradeRequest, cb?: (error: string, rep: QueryTradeResponse) => void): Promise<QueryTradeResponse>;
    /**
     * 灵云V2-收款用户账户列表查询
     */
    QueryFlexPayeeAccountList(req: QueryFlexPayeeAccountListRequest, cb?: (error: string, rep: QueryFlexPayeeAccountListResponse) => void): Promise<QueryFlexPayeeAccountListResponse>;
    /**
     * 灵云V2-冻结余额
     */
    FreezeFlexBalance(req: FreezeFlexBalanceRequest, cb?: (error: string, rep: FreezeFlexBalanceResponse) => void): Promise<FreezeFlexBalanceResponse>;
    /**
     * 云支付-添加门店接口
     */
    AddShop(req: AddShopRequest, cb?: (error: string, rep: AddShopResponse) => void): Promise<AddShopResponse>;
    /**
     * 第三方子商户电子记账本余额查询接口
     */
    QueryOpenBankExternalSubAccountBookBalance(req: QueryOpenBankExternalSubAccountBookBalanceRequest, cb?: (error: string, rep: QueryOpenBankExternalSubAccountBookBalanceResponse) => void): Promise<QueryOpenBankExternalSubAccountBookBalanceResponse>;
    /**
     * 云支付-查询商户分类接口
     */
    QueryMerchantClassification(req: QueryMerchantClassificationRequest, cb?: (error: string, rep: QueryMerchantClassificationResponse) => void): Promise<QueryMerchantClassificationResponse>;
    /**
     * 灵云V2-查询结算订单列表
     */
    QueryFlexSettlementOrderList(req: QueryFlexSettlementOrderListRequest, cb?: (error: string, rep: QueryFlexSettlementOrderListResponse) => void): Promise<QueryFlexSettlementOrderListResponse>;
    /**
     * 跨境-提交申报材料。申报材料的主体是付款人，需要提前调用【跨境-付款人申请】接口提交付款人信息且审核通过后调用。
     */
    ApplyApplicationMaterial(req: ApplyApplicationMaterialRequest, cb?: (error: string, rep: ApplyApplicationMaterialResponse) => void): Promise<ApplyApplicationMaterialResponse>;
    /**
     * 微信商户发起批量转账
     */
    CreateTransferBatch(req: CreateTransferBatchRequest, cb?: (error: string, rep: CreateTransferBatchResponse) => void): Promise<CreateTransferBatchResponse>;
    /**
     * 智慧零售-发票开具V2
     */
    CreateInvoiceV2(req: CreateInvoiceV2Request, cb?: (error: string, rep: CreateInvoiceV2Response) => void): Promise<CreateInvoiceV2Response>;
    /**
     * 智慧零售-发票查询
     */
    QueryInvoice(req: QueryInvoiceRequest, cb?: (error: string, rep: QueryInvoiceResponse) => void): Promise<QueryInvoiceResponse>;
    /**
     * 云企付-绑定分账收款方
     */
    BindOpenBankProfitSharePayee(req: BindOpenBankProfitSharePayeeRequest, cb?: (error: string, rep: BindOpenBankProfitSharePayeeResponse) => void): Promise<BindOpenBankProfitSharePayeeResponse>;
    /**
     * 灵云V2-收款用户信息查询
     */
    QueryFlexPayeeInfo(req: QueryFlexPayeeInfoRequest, cb?: (error: string, rep: QueryFlexPayeeInfoResponse) => void): Promise<QueryFlexPayeeInfoResponse>;
    /**
     * 通过商家或者微信批次明细单号查询明细单
     */
    QueryTransferDetail(req: QueryTransferDetailRequest, cb?: (error: string, rep: QueryTransferDetailResponse) => void): Promise<QueryTransferDetailResponse>;
    /**
     * 云企付-查询联行号
     */
    QueryOpenBankBankBranchList(req: QueryOpenBankBankBranchListRequest, cb?: (error: string, rep: QueryOpenBankBankBranchListResponse) => void): Promise<QueryOpenBankBankBranchListResponse>;
    /**
     * 跨境-查询汇率
     */
    QueryExchangeRate(req: QueryExchangeRateRequest, cb?: (error: string, rep: QueryExchangeRateResponse) => void): Promise<QueryExchangeRateResponse>;
    /**
     * 会员解绑提现账户。此接口可以支持会员解除名下的绑定账户关系。
     */
    UnbindRelateAcct(req: UnbindRelateAcctRequest, cb?: (error: string, rep: UnbindRelateAcctResponse) => void): Promise<UnbindRelateAcctResponse>;
    /**
     * 应用需要先带上签约信息调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
     */
    ContractOrder(req: ContractOrderRequest, cb?: (error: string, rep: ContractOrderResponse) => void): Promise<ContractOrderResponse>;
    /**
     * 灵云-单笔转账结果查询
     */
    QuerySinglePaymentResult(req: QuerySinglePaymentResultRequest, cb?: (error: string, rep: QuerySinglePaymentResultResponse) => void): Promise<QuerySinglePaymentResultResponse>;
    /**
     * 云企付-申请单笔交易回单
     */
    ApplyOpenBankOrderDetailReceipt(req: ApplyOpenBankOrderDetailReceiptRequest, cb?: (error: string, rep: ApplyOpenBankOrderDetailReceiptResponse) => void): Promise<ApplyOpenBankOrderDetailReceiptResponse>;
    /**
     * 灵云V2-查询付款订单列表
     */
    QueryFlexPaymentOrderList(req: QueryFlexPaymentOrderListRequest, cb?: (error: string, rep: QueryFlexPaymentOrderListResponse) => void): Promise<QueryFlexPaymentOrderListResponse>;
    /**
     * 商户查询是否签约和签约行为上报
     */
    RegisterBehavior(req: RegisterBehaviorRequest, cb?: (error: string, rep: RegisterBehaviorResponse) => void): Promise<RegisterBehaviorResponse>;
    /**
     * 云企付-查询支持银行列表
     */
    QueryOpenBankSupportBankList(req: QueryOpenBankSupportBankListRequest, cb?: (error: string, rep: QueryOpenBankSupportBankListResponse) => void): Promise<QueryOpenBankSupportBankListResponse>;
    /**
     * 云支付-查询商户明细接口
     */
    ViewMerchant(req: ViewMerchantRequest, cb?: (error: string, rep: ViewMerchantResponse) => void): Promise<ViewMerchantResponse>;
    /**
     * 直播平台-上传代理商完税证明
     */
    UploadTaxPayment(req: UploadTaxPaymentRequest, cb?: (error: string, rep: UploadTaxPaymentResponse) => void): Promise<UploadTaxPaymentResponse>;
    /**
     * 务工卡-核身预下单带授权
     */
    CreatePayRollPreOrderWithAuth(req: CreatePayRollPreOrderWithAuthRequest, cb?: (error: string, rep: CreatePayRollPreOrderWithAuthResponse) => void): Promise<CreatePayRollPreOrderWithAuthResponse>;
    /**
     * 灵云V2-订单汇总列表查询
     */
    QueryFlexOrderSummaryList(req: QueryFlexOrderSummaryListRequest, cb?: (error: string, rep: QueryFlexOrderSummaryListResponse) => void): Promise<QueryFlexOrderSummaryListResponse>;
    /**
     * 云企付-创建支付订单。支持B2B网关支付，B2C转账下单。
     */
    CreateOpenBankPaymentOrder(req: CreateOpenBankPaymentOrderRequest, cb?: (error: string, rep: CreateOpenBankPaymentOrderResponse) => void): Promise<CreateOpenBankPaymentOrderResponse>;
    /**
     * 云支付订单退款接口
     */
    RefundTlinxOrder(req: RefundTlinxOrderRequest, cb?: (error: string, rep: RefundTlinxOrderResponse) => void): Promise<RefundTlinxOrderResponse>;
    /**
     * 商户解除绑定的提现银行卡
     */
    UnBindAcct(req: UnBindAcctRequest, cb?: (error: string, rep: UnBindAcctResponse) => void): Promise<UnBindAcctResponse>;
    /**
     * 云支付-分账请求接口
     */
    DistributeApply(req: DistributeApplyRequest, cb?: (error: string, rep: DistributeApplyResponse) => void): Promise<DistributeApplyResponse>;
    /**
     * 跨境-对接方账户余额查询
     */
    QueryMerchantBalance(req: QueryMerchantBalanceRequest, cb?: (error: string, rep: QueryMerchantBalanceResponse) => void): Promise<QueryMerchantBalanceResponse>;
    /**
     * 云支付-查询合同支付方式列表接口
     */
    QueryContractPayWayList(req: QueryContractPayWayListRequest, cb?: (error: string, rep: QueryContractPayWayListResponse) => void): Promise<QueryContractPayWayListResponse>;
    /**
     * 务工卡-核身预下单
     */
    CreatePayRollPreOrder(req: CreatePayRollPreOrderRequest, cb?: (error: string, rep: CreatePayRollPreOrderResponse) => void): Promise<CreatePayRollPreOrderResponse>;
    /**
     * 云企付-跨境支付下单
     */
    CreateOpenBankGlobalPaymentOrder(req: CreateOpenBankGlobalPaymentOrderRequest, cb?: (error: string, rep: CreateOpenBankGlobalPaymentOrderResponse) => void): Promise<CreateOpenBankGlobalPaymentOrderResponse>;
    /**
     * 云支付-添加合同接口
     */
    AddContract(req: AddContractRequest, cb?: (error: string, rep: AddContractResponse) => void): Promise<AddContractResponse>;
    /**
     * 创建子商户
     */
    CreateCloudSubMerchant(req: CreateCloudSubMerchantRequest, cb?: (error: string, rep: CreateCloudSubMerchantResponse) => void): Promise<CreateCloudSubMerchantResponse>;
    /**
     * 直播平台-删除代理商完税信息
     */
    DeleteAgentTaxPaymentInfo(req: DeleteAgentTaxPaymentInfoRequest, cb?: (error: string, rep: DeleteAgentTaxPaymentInfoResponse) => void): Promise<DeleteAgentTaxPaymentInfoResponse>;
    /**
     * 直播平台-代理商完税信息录入
     */
    CreateAgentTaxPaymentInfos(req: CreateAgentTaxPaymentInfosRequest, cb?: (error: string, rep: CreateAgentTaxPaymentInfosResponse) => void): Promise<CreateAgentTaxPaymentInfosResponse>;
    /**
     * 直播平台-删除代理商完税信息
     */
    DeleteAgentTaxPaymentInfos(req: DeleteAgentTaxPaymentInfosRequest, cb?: (error: string, rep: DeleteAgentTaxPaymentInfosResponse) => void): Promise<DeleteAgentTaxPaymentInfosResponse>;
    /**
     * 商户新增的接口
     */
    CreatePayMerchant(req: CreatePayMerchantRequest, cb?: (error: string, rep: CreatePayMerchantResponse) => void): Promise<CreatePayMerchantResponse>;
    /**
     * 云企付-结算单查询结果
     */
    QueryOpenBankSettleOrder(req: QueryOpenBankSettleOrderRequest, cb?: (error: string, rep: QueryOpenBankSettleOrderResponse) => void): Promise<QueryOpenBankSettleOrderResponse>;
    /**
     * 灵云-批量转账结果查询
     */
    QueryBatchPaymentResult(req: QueryBatchPaymentResultRequest, cb?: (error: string, rep: QueryBatchPaymentResultResponse) => void): Promise<QueryBatchPaymentResultResponse>;
    /**
     * 务工卡-查询核身记录
     */
    GetPayRollAuthList(req: GetPayRollAuthListRequest, cb?: (error: string, rep: GetPayRollAuthListResponse) => void): Promise<GetPayRollAuthListResponse>;
    /**
     * 灵云V2-收款用户账户信息查询
     */
    QueryFlexPayeeAccountInfo(req: QueryFlexPayeeAccountInfoRequest, cb?: (error: string, rep: QueryFlexPayeeAccountInfoResponse) => void): Promise<QueryFlexPayeeAccountInfoResponse>;
    /**
     * 云企付-退款申请
     */
    RefundOpenBankOrder(req: RefundOpenBankOrderRequest, cb?: (error: string, rep: RefundOpenBankOrderResponse) => void): Promise<RefundOpenBankOrderResponse>;
    /**
     * 务工卡-生成授权令牌
     */
    CreatePayRollToken(req: CreatePayRollTokenRequest, cb?: (error: string, rep: CreatePayRollTokenResponse) => void): Promise<CreatePayRollTokenResponse>;
    /**
     * 灵云-上传主播信息
     */
    UploadExternalAnchorInfo(req: UploadExternalAnchorInfoRequest, cb?: (error: string, rep: UploadExternalAnchorInfoResponse) => void): Promise<UploadExternalAnchorInfoResponse>;
    /**
     * 会员绑定信息查询。查询标志为“单个会员”的情况下，返回该会员的有效的绑定账户信息。
查询标志为“全部会员”的情况下，返回市场下的全部的有效的绑定账户信息。查询标志为“单个会员的证件信息”的情况下，返回市场下的指定的会员的留存在电商见证宝系统的证件信息。
     */
    QueryMemberBind(req: QueryMemberBindRequest, cb?: (error: string, rep: QueryMemberBindResponse) => void): Promise<QueryMemberBindResponse>;
    /**
     * 子商户在线签约
     */
    ApplyOpenBankSubMerchantSignOnline(req: ApplyOpenBankSubMerchantSignOnlineRequest, cb?: (error: string, rep: ApplyOpenBankSubMerchantSignOnlineResponse) => void): Promise<ApplyOpenBankSubMerchantSignOnlineResponse>;
    /**
     * 应用需要先调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
     */
    UnifiedOrder(req: UnifiedOrderRequest, cb?: (error: string, rep: UnifiedOrderResponse) => void): Promise<UnifiedOrderResponse>;
    /**
     * 云企付-子商户银行卡解绑结果查询
     */
    QueryOpenBankUnbindExternalSubMerchantBankAccount(req: QueryOpenBankUnbindExternalSubMerchantBankAccountRequest, cb?: (error: string, rep: QueryOpenBankUnbindExternalSubMerchantBankAccountResponse) => void): Promise<QueryOpenBankUnbindExternalSubMerchantBankAccountResponse>;
    /**
     * 云鉴-消费订单确认接口
     */
    ConfirmOrder(req: ConfirmOrderRequest, cb?: (error: string, rep: ConfirmOrderResponse) => void): Promise<ConfirmOrderResponse>;
    /**
     * 云支付-查询合同可关联门店接口
     */
    QueryContractRelateShop(req: QueryContractRelateShopRequest, cb?: (error: string, rep: QueryContractRelateShopResponse) => void): Promise<QueryContractRelateShopResponse>;
    /**
     * 云支付-查询门店明细接口
     */
    ViewShop(req: ViewShopRequest, cb?: (error: string, rep: ViewShopResponse) => void): Promise<ViewShopResponse>;
    /**
     * 验证鉴权金额。此接口可受理BindRelateAcctSmallAmount接口发起的转账金额（往账鉴权方式）的验证处理。若所回填的验证金额验证通过，则会绑定原申请中的银行账户作为提现账户。通过此接口也可以查得BindRelateAcctSmallAmount接口发起的来账鉴权方式的申请的当前状态。
     */
    CheckAmount(req: CheckAmountRequest, cb?: (error: string, rep: CheckAmountResponse) => void): Promise<CheckAmountResponse>;
    /**
     * 智能代发-单笔代发转账查询接口
     */
    QueryTransferResult(req: QueryTransferResultRequest, cb?: (error: string, rep: QueryTransferResultResponse) => void): Promise<QueryTransferResultResponse>;
    /**
     * 直播平台-主播入驻
     */
    CreateAnchor(req: CreateAnchorRequest, cb?: (error: string, rep: CreateAnchorResponse) => void): Promise<CreateAnchorResponse>;
    /**
     * 跨境-查询汇出结果
     */
    QueryOutwardOrder(req: QueryOutwardOrderRequest, cb?: (error: string, rep: QueryOutwardOrderResponse) => void): Promise<QueryOutwardOrderResponse>;
    /**
     * 云支付-获取门店OpenId接口
     */
    QueryShopOpenId(req: QueryShopOpenIdRequest, cb?: (error: string, rep: QueryShopOpenIdResponse) => void): Promise<QueryShopOpenIdResponse>;
    /**
     * 财税-查询金融数据文件下载链接
     */
    QueryFinancialDataUrl(req: QueryFinancialDataUrlRequest, cb?: (error: string, rep: QueryFinancialDataUrlResponse) => void): Promise<QueryFinancialDataUrlResponse>;
    /**
     * 商户恶意注册接口
     */
    QueryMaliciousRegistration(req: QueryMaliciousRegistrationRequest, cb?: (error: string, rep: QueryMaliciousRegistrationResponse) => void): Promise<QueryMaliciousRegistrationResponse>;
    /**
     * 山姆聚合支付项目-存量订单退款接口。可以通过本接口将支付款全部或部分退还给付款方，在收到用户退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付账号。
     */
    MigrateOrderRefund(req: MigrateOrderRefundRequest, cb?: (error: string, rep: MigrateOrderRefundResponse) => void): Promise<MigrateOrderRefundResponse>;
    /**
     * 云企付-子商户资质文件查询
     */
    QueryOpenBankSubMerchantCredential(req: QueryOpenBankSubMerchantCredentialRequest, cb?: (error: string, rep: QueryOpenBankSubMerchantCredentialResponse) => void): Promise<QueryOpenBankSubMerchantCredentialResponse>;
    /**
     * 灵云V2-查询付款订单状态
     */
    QueryFlexPaymentOrderStatus(req: QueryFlexPaymentOrderStatusRequest, cb?: (error: string, rep: QueryFlexPaymentOrderStatusResponse) => void): Promise<QueryFlexPaymentOrderStatusResponse>;
    /**
     * 灵云V2-平台账户余额查询
     */
    QueryFlexPlatformAccountBalance(req: QueryFlexPlatformAccountBalanceRequest, cb?: (error: string, rep: QueryFlexPlatformAccountBalanceResponse) => void): Promise<QueryFlexPlatformAccountBalanceResponse>;
    /**
     * 灵云V2-查询税前金额
     */
    QueryFlexAmountBeforeTax(req: QueryFlexAmountBeforeTaxRequest, cb?: (error: string, rep: QueryFlexAmountBeforeTaxResponse) => void): Promise<QueryFlexAmountBeforeTaxResponse>;
    /**
     * 聚鑫-开户信息查询
     */
    QueryAcctInfo(req: QueryAcctInfoRequest, cb?: (error: string, rep: QueryAcctInfoResponse) => void): Promise<QueryAcctInfoResponse>;
    /**
     * 聚鑫-申请对账文件
     */
    ApplyReconciliationFile(req: ApplyReconciliationFileRequest, cb?: (error: string, rep: ApplyReconciliationFileResponse) => void): Promise<ApplyReconciliationFileResponse>;
    /**
     * 聚鑫-查询对账文件申请结果
     */
    QueryReconciliationFileApplyInfo(req: QueryReconciliationFileApplyInfoRequest, cb?: (error: string, rep: QueryReconciliationFileApplyInfoResponse) => void): Promise<QueryReconciliationFileApplyInfoResponse>;
    /**
     * 查询银行时间段内清分提现明细。查询银行时间段内清分提现明细接口：若为“见证+收单退款”“见证+收单充值”记录时备注Note为“见证+收单充值,订单号”“见证+收单退款,订单号”，此接口可以查到T0/T1的充值明细和退款记录。查询标志：充值记录仍用3清分选项查询，退款记录同提现用2选项查询。
     */
    QueryBankWithdrawCashDetails(req: QueryBankWithdrawCashDetailsRequest, cb?: (error: string, rep: QueryBankWithdrawCashDetailsResponse) => void): Promise<QueryBankWithdrawCashDetailsResponse>;
    /**
     * 云企付-分页查询对账单数据
     */
    QueryOpenBankBillDataPage(req: QueryOpenBankBillDataPageRequest, cb?: (error: string, rep: QueryOpenBankBillDataPageResponse) => void): Promise<QueryOpenBankBillDataPageResponse>;
    /**
     * 云鉴-查询对账单下载地址的接口
     */
    QueryDownloadBillURL(req: QueryDownloadBillURLRequest, cb?: (error: string, rep: QueryDownloadBillURLResponse) => void): Promise<QueryDownloadBillURLResponse>;
    /**
     * 商户绑定提现银行卡的验证接口
     */
    CheckAcct(req: CheckAcctRequest, cb?: (error: string, rep: CheckAcctResponse) => void): Promise<CheckAcctResponse>;
    /**
     * 灵云-绑定账号
     */
    BindAccount(req: BindAccountRequest, cb?: (error: string, rep: BindAccountResponse) => void): Promise<BindAccountResponse>;
    /**
     * 云鉴-消费订单查询接口
     */
    QueryMerchantOrder(req: QueryMerchantOrderRequest, cb?: (error: string, rep: QueryMerchantOrderResponse) => void): Promise<QueryMerchantOrderResponse>;
    /**
     * 云企付-子商户银行卡打款验证，在接入TENPAY渠道EBANK_PAYMENT付款时，若客户期望接入担保支付，需在接入前先完成，收款商户绑定的银行卡进行打款验证。验证成功后，才可以调用CreateOpenBankPaymentOrder接口进行担保支付下单。
     */
    VerifyOpenBankAccount(req: VerifyOpenBankAccountRequest, cb?: (error: string, rep: VerifyOpenBankAccountResponse) => void): Promise<VerifyOpenBankAccountResponse>;
    /**
     * 灵云V2-收款用户开立
     */
    CreateFlexPayee(req: CreateFlexPayeeRequest, cb?: (error: string, rep: CreateFlexPayeeResponse) => void): Promise<CreateFlexPayeeResponse>;
    /**
     * 查询微工卡核身结果
     */
    QueryFlexWechatAuthResult(req: QueryFlexWechatAuthResultRequest, cb?: (error: string, rep: QueryFlexWechatAuthResultResponse) => void): Promise<QueryFlexWechatAuthResultResponse>;
    /**
     * 智慧零售-发票红冲V2
     */
    CreateRedInvoiceV2(req: CreateRedInvoiceV2Request, cb?: (error: string, rep: CreateRedInvoiceV2Response) => void): Promise<CreateRedInvoiceV2Response>;
    /**
     * 对于存量的签约关系导入或者部分场景下米大师无法收到签约通知的场景，需要由调用方主动将签约状态同步至米大师
     */
    SyncContractData(req: SyncContractDataRequest, cb?: (error: string, rep: SyncContractDataResponse) => void): Promise<SyncContractDataResponse>;
    /**
     * 直播平台-上传代理商完税列表
     */
    UploadTaxList(req: UploadTaxListRequest, cb?: (error: string, rep: UploadTaxListResponse) => void): Promise<UploadTaxListResponse>;
    /**
     * 灵云-重新绑定账号
     */
    ModifyBindedAccount(req: ModifyBindedAccountRequest, cb?: (error: string, rep: ModifyBindedAccountResponse) => void): Promise<ModifyBindedAccountResponse>;
    /**
     * 智慧零售-发票查询V2
     */
    QueryInvoiceV2(req: QueryInvoiceV2Request, cb?: (error: string, rep: QueryInvoiceV2Response) => void): Promise<QueryInvoiceV2Response>;
    /**
     * 商户绑定提现银行卡，每个商户只能绑定一张提现银行卡
     */
    BindAcct(req: BindAcctRequest, cb?: (error: string, rep: BindAcctResponse) => void): Promise<BindAcctResponse>;
    /**
     * 会员绑定提现账户-小额鉴权。会员申请绑定提现账户，绑定后从会员子账户中提现到绑定账户。
转账鉴权有两种形式：往账鉴权和来账鉴权。
往账鉴权：该接口发起成功后，银行会向提现账户转入小于等于0.5元的随机金额，并短信通知客户查看，客户查看后，需将收到的金额大小，在电商平台页面上回填，并通知银行。银行验证通过后，完成提现账户绑定。
来账鉴权：该接口发起成功后，银行以短信通知客户查看，客户查看后，需通过待绑定的账户往市场的监管账户转入短信上指定的金额。银行检索到该笔指定金额的来账是源自待绑定账户，则绑定成功。平安银行的账户，即BankType送1时，大小额行号和超级网银号都不用送。
     */
    BindRelateAcctSmallAmount(req: BindRelateAcctSmallAmountRequest, cb?: (error: string, rep: BindRelateAcctSmallAmountResponse) => void): Promise<BindRelateAcctSmallAmountResponse>;
    /**
     * 云鉴-消费订单发起的接口
     */
    CreateOrder(req: CreateOrderRequest, cb?: (error: string, rep: CreateOrderResponse) => void): Promise<CreateOrderResponse>;
    /**
     * 云支付-统一下单接口
     */
    UnifiedTlinxOrder(req: UnifiedTlinxOrderRequest, cb?: (error: string, rep: UnifiedTlinxOrderResponse) => void): Promise<UnifiedTlinxOrderResponse>;
    /**
     * 云支付-上传机构文件接口
     */
    UploadOrgFile(req: UploadOrgFileRequest, cb?: (error: string, rep: UploadOrgFileResponse) => void): Promise<UploadOrgFileResponse>;
    /**
     * 会员绑定提现账户-回填银联鉴权短信码。用于会员填写动态验证码后，发往银行进行验证，验证成功则完成绑定。
     */
    BindRelateAccReUnionPay(req: BindRelateAccReUnionPayRequest, cb?: (error: string, rep: BindRelateAccReUnionPayResponse) => void): Promise<BindRelateAccReUnionPayResponse>;
    /**
     * 云鉴-商户信息查询接口
     */
    QueryMerchant(req: QueryMerchantRequest, cb?: (error: string, rep: QueryMerchantResponse) => void): Promise<QueryMerchantResponse>;
    /**
     * 微工卡开通预核身接口
     */
    ApplyFlexWechatPreAuth(req: ApplyFlexWechatPreAuthRequest, cb?: (error: string, rep: ApplyFlexWechatPreAuthResponse) => void): Promise<ApplyFlexWechatPreAuthResponse>;
    /**
     * 修改会员属性-普通商户子账户。修改会员的会员属性。
     */
    ReviseMbrProperty(req: ReviseMbrPropertyRequest, cb?: (error: string, rep: ReviseMbrPropertyResponse) => void): Promise<ReviseMbrPropertyResponse>;
    /**
     * 云企付-子商户银行卡绑定
     */
    BindOpenBankExternalSubMerchantBankAccount(req: BindOpenBankExternalSubMerchantBankAccountRequest, cb?: (error: string, rep: BindOpenBankExternalSubMerchantBankAccountResponse) => void): Promise<BindOpenBankExternalSubMerchantBankAccountResponse>;
    /**
     * 子商户余额查询
     */
    QueryBalance(req: QueryBalanceRequest, cb?: (error: string, rep: QueryBalanceResponse) => void): Promise<QueryBalanceResponse>;
    /**
     * 撤销会员在途充值(经第三方支付渠道)接口
     */
    RevokeRechargeByThirdPay(req: RevokeRechargeByThirdPayRequest, cb?: (error: string, rep: RevokeRechargeByThirdPayResponse) => void): Promise<RevokeRechargeByThirdPayResponse>;
    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
     */
    QueryCloudRefundOrder(req: QueryCloudRefundOrderRequest, cb?: (error: string, rep: QueryCloudRefundOrderResponse) => void): Promise<QueryCloudRefundOrderResponse>;
    /**
     * 云支付-下载机构文件接口
     */
    DownloadOrgFile(req: DownloadOrgFileRequest, cb?: (error: string, rep: DownloadOrgFileResponse) => void): Promise<DownloadOrgFileResponse>;
    /**
     * 调用该接口返回对账单下载地址，对账单下载URL通过GET方式访问，返回zip包，解压后为csv格式文件。文件首行如下：
订单号,订单归属日期,机构编号,订单描述,交易类型,订单状态,支付场景,原始金额,折扣金额,实际交易金额,支付渠道优惠金额,抹零金额,币种,下单时间,付款成功时间,商户编号,门店编号,付款方式编号,付款方式名称,商户手续费T1,商户扣率,是否信用卡交易,原始订单号,用户账号,外部订单号,订单备注
     */
    GetBillDownloadUrl(req: GetBillDownloadUrlRequest, cb?: (error: string, rep: GetBillDownloadUrlResponse) => void): Promise<GetBillDownloadUrlResponse>;
    /**
     * 直播平台-查询批次信息
     */
    QueryAgentTaxPaymentBatch(req: QueryAgentTaxPaymentBatchRequest, cb?: (error: string, rep: QueryAgentTaxPaymentBatchResponse) => void): Promise<QueryAgentTaxPaymentBatchResponse>;
    /**
     * 查询单笔订单交易状态
     */
    DescribeOrderStatus(req: DescribeOrderStatusRequest, cb?: (error: string, rep: DescribeOrderStatusResponse) => void): Promise<DescribeOrderStatusResponse>;
    /**
     * 聚鑫-查询子账户绑定银行卡
     */
    QueryAcctBinding(req: QueryAcctBindingRequest, cb?: (error: string, rep: QueryAcctBindingResponse) => void): Promise<QueryAcctBindingResponse>;
    /**
     * 聚鑫-查询会员资金交易信息列表
     */
    QueryFundsTransactionDetails(req: QueryFundsTransactionDetailsRequest, cb?: (error: string, rep: QueryFundsTransactionDetailsResponse) => void): Promise<QueryFundsTransactionDetailsResponse>;
    /**
     * 云企付-创建核销申请，适用于针对支付订单维度的确认收货，解冻等业务场景。目前支持的渠道有TENPAY下的EBANK_PAYMENT付款方式创建支付订单时，选择担保支付下单的订单进行解冻。
     */
    CreateOpenBankVerificationOrder(req: CreateOpenBankVerificationOrderRequest, cb?: (error: string, rep: CreateOpenBankVerificationOrderResponse) => void): Promise<CreateOpenBankVerificationOrderResponse>;
    /**
     * 正常结算提现失败情况下，发起重新提现的请求接口
     */
    ApplyReWithdrawal(req: ApplyReWithdrawalRequest, cb?: (error: string, rep: ApplyReWithdrawalResponse) => void): Promise<ApplyReWithdrawalResponse>;
    /**
     * 云支付-分账解除分账接收方接口
     */
    DistributeRemoveReceiver(req: DistributeRemoveReceiverRequest, cb?: (error: string, rep: DistributeRemoveReceiverResponse) => void): Promise<DistributeRemoveReceiverResponse>;
    /**
     * 跨境-付款人申请。通过该接口提交付款人信息并进行 kyc 审核。
     */
    ApplyPayerInfo(req: ApplyPayerInfoRequest, cb?: (error: string, rep: ApplyPayerInfoResponse) => void): Promise<ApplyPayerInfoResponse>;
    /**
     * 云企付-查询订单支付结果
     */
    QueryOpenBankPaymentOrder(req: QueryOpenBankPaymentOrderRequest, cb?: (error: string, rep: QueryOpenBankPaymentOrderResponse) => void): Promise<QueryOpenBankPaymentOrderResponse>;
    /**
     * 跨境-提交贸易材料。通过提交贸易材料接口可为对接方累计贸易额度，在额度范围内可发起汇兑汇出交易。
     */
    ApplyTrade(req: ApplyTradeRequest, cb?: (error: string, rep: ApplyTradeResponse) => void): Promise<ApplyTradeResponse>;
    /**
     * 云企付-子商户银行卡解绑
     */
    UnbindOpenBankExternalSubMerchantBankAccount(req: UnbindOpenBankExternalSubMerchantBankAccountRequest, cb?: (error: string, rep: UnbindOpenBankExternalSubMerchantBankAccountResponse) => void): Promise<UnbindOpenBankExternalSubMerchantBankAccountResponse>;
    /**
     * 查询银行在途清算结果。查询时间段内交易网的在途清算结果。
     */
    QueryBankClear(req: QueryBankClearRequest, cb?: (error: string, rep: QueryBankClearResponse) => void): Promise<QueryBankClearResponse>;
    /**
     * 云企付-创建商户
     */
    CreateOpenBankMerchant(req: CreateOpenBankMerchantRequest, cb?: (error: string, rep: CreateOpenBankMerchantResponse) => void): Promise<CreateOpenBankMerchantResponse>;
    /**
     * 智慧零售-发票红冲
     */
    CreateRedInvoice(req: CreateRedInvoiceRequest, cb?: (error: string, rep: CreateRedInvoiceResponse) => void): Promise<CreateRedInvoiceResponse>;
    /**
     * 发起支付等渠道操作后，可以调用该接口查询渠道的数据。
     */
    QueryCloudChannelData(req: QueryCloudChannelDataRequest, cb?: (error: string, rep: QueryCloudChannelDataResponse) => void): Promise<QueryCloudChannelDataResponse>;
    /**
     * 云支付-查询城市编码接口
     */
    QueryCityCode(req: QueryCityCodeRequest, cb?: (error: string, rep: QueryCityCodeResponse) => void): Promise<QueryCityCodeResponse>;
    /**
     * 跨境-成功申报材料查询。查询成功入库的申报材料。
     */
    QueryApplicationMaterial(req: QueryApplicationMaterialRequest, cb?: (error: string, rep: QueryApplicationMaterialResponse) => void): Promise<QueryApplicationMaterialResponse>;
    /**
     * 灵云V2-收款用户账户权益状态修改
     */
    ModifyFlexPayeeAccountRightStatus(req: ModifyFlexPayeeAccountRightStatusRequest, cb?: (error: string, rep: ModifyFlexPayeeAccountRightStatusResponse) => void): Promise<ModifyFlexPayeeAccountRightStatusResponse>;
    /**
     * 如交易订单需退款，可以通过本接口将支付款全部或部分退还给付款方，聚鑫将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。最长支持1年的订单退款。在订单包含多个子订单的情况下，如果使用本接口传入OutTradeNo或TransactionId退款，则只支持全单退款；如果需要部分退款，请通过传入子订单的方式来指定部分金额退款。
     */
    Refund(req: RefundRequest, cb?: (error: string, rep: RefundResponse) => void): Promise<RefundResponse>;
    /**
     * 云企付-关闭订单
     */
    CloseOpenBankPaymentOrder(req: CloseOpenBankPaymentOrderRequest, cb?: (error: string, rep: CloseOpenBankPaymentOrderResponse) => void): Promise<CloseOpenBankPaymentOrderResponse>;
    /**
     * 如交易订单需退款，可以通过本接口将支付款全部或部分退还给付款方，聚鑫将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。最长支持1年的订单退款。在订单包含多个子订单的情况下，如果使用本接口传入OutTradeNo或TransactionId退款，则只支持全单退款；如果需要部分退款，请通过传入子订单的方式来指定部分金额退款。
     */
    RefundCloudOrder(req: RefundCloudOrderRequest, cb?: (error: string, rep: RefundCloudOrderResponse) => void): Promise<RefundCloudOrderResponse>;
    /**
     * 灵云V2-收款用户账户余额查询
     */
    QueryFlexPayeeAccountBalance(req: QueryFlexPayeeAccountBalanceRequest, cb?: (error: string, rep: QueryFlexPayeeAccountBalanceResponse) => void): Promise<QueryFlexPayeeAccountBalanceResponse>;
    /**
     * 云支付-分账授权申请接口
     */
    DistributeAccreditTlinx(req: DistributeAccreditTlinxRequest, cb?: (error: string, rep: DistributeAccreditTlinxResponse) => void): Promise<DistributeAccreditTlinxResponse>;
    /**
     * 会员在途充值(经第三方支付渠道)接口
     */
    RechargeByThirdPay(req: RechargeByThirdPayRequest, cb?: (error: string, rep: RechargeByThirdPayResponse) => void): Promise<RechargeByThirdPayResponse>;
    /**
     * 见证宝-会员在途充值(经第三方支付渠道)
     */
    RechargeMemberThirdPay(req: RechargeMemberThirdPayRequest, cb?: (error: string, rep: RechargeMemberThirdPayResponse) => void): Promise<RechargeMemberThirdPayResponse>;
    /**
     * 智慧零售-商户注册
     */
    CreateMerchant(req: CreateMerchantRequest, cb?: (error: string, rep: CreateMerchantResponse) => void): Promise<CreateMerchantResponse>;
    /**
     * 子商户入驻聚鑫平台
     */
    CreateAcct(req: CreateAcctRequest, cb?: (error: string, rep: CreateAcctResponse) => void): Promise<CreateAcctResponse>;
    /**
     * 会员间交易接口
     */
    ExecuteMemberTransaction(req: ExecuteMemberTransactionRequest, cb?: (error: string, rep: ExecuteMemberTransactionResponse) => void): Promise<ExecuteMemberTransactionResponse>;
    /**
     * 云支付-分账结果查询接口
     */
    DistributeQuery(req: DistributeQueryRequest, cb?: (error: string, rep: DistributeQueryResponse) => void): Promise<DistributeQueryResponse>;
    /**
     * 云企付-子商户费率配置
     */
    CreateOpenBankSubMerchantRateConfigure(req: CreateOpenBankSubMerchantRateConfigureRequest, cb?: (error: string, rep: CreateOpenBankSubMerchantRateConfigureResponse) => void): Promise<CreateOpenBankSubMerchantRateConfigureResponse>;
    /**
     * 灵云-单笔主播转账接口
     */
    CreateSinglePayment(req: CreateSinglePaymentRequest, cb?: (error: string, rep: CreateSinglePaymentResponse) => void): Promise<CreateSinglePaymentResponse>;
    /**
     * 登记挂账(支持撤销)
     */
    RegisterBill(req: RegisterBillRequest, cb?: (error: string, rep: RegisterBillResponse) => void): Promise<RegisterBillResponse>;
    /**
     * 灵云V2-查询对账单文件下载链接
     */
    QueryFlexBillDownloadUrl(req: QueryFlexBillDownloadUrlRequest, cb?: (error: string, rep: QueryFlexBillDownloadUrlResponse) => void): Promise<QueryFlexBillDownloadUrlResponse>;
    /**
     * 云企付-查询对账单下载地址
     */
    QueryOpenBankDownLoadUrl(req: QueryOpenBankDownLoadUrlRequest, cb?: (error: string, rep: QueryOpenBankDownLoadUrlResponse) => void): Promise<QueryOpenBankDownLoadUrlResponse>;
    /**
     * 云支付-查询订单付款状态
     */
    QueryOrderStatus(req: QueryOrderStatusRequest, cb?: (error: string, rep: QueryOrderStatusResponse) => void): Promise<QueryOrderStatusResponse>;
    /**
     * 跨境-付款人查询
     */
    QueryPayerInfo(req: QueryPayerInfoRequest, cb?: (error: string, rep: QueryPayerInfoResponse) => void): Promise<QueryPayerInfoResponse>;
    /**
     * 智慧零售-查询公司抬头
     */
    QueryCompanyTitle(req: QueryCompanyTitleRequest, cb?: (error: string, rep: QueryCompanyTitleResponse) => void): Promise<QueryCompanyTitleResponse>;
    /**
     * 商户提现
     */
    ApplyWithdrawal(req: ApplyWithdrawalRequest, cb?: (error: string, rep: ApplyWithdrawalResponse) => void): Promise<ApplyWithdrawalResponse>;
    /**
     * 查询充值明细接口
     */
    DescribeChargeDetail(req: DescribeChargeDetailRequest, cb?: (error: string, rep: DescribeChargeDetailResponse) => void): Promise<DescribeChargeDetailResponse>;
    /**
     * 务工卡-查询授权关系
     */
    GetPayRollAuth(req: GetPayRollAuthRequest, cb?: (error: string, rep: GetPayRollAuthResponse) => void): Promise<GetPayRollAuthResponse>;
    /**
     * 调用该接口返回对账单下载地址，对账单下载URL通过GET方式访问，返回zip包，解压后为csv格式文件。文件首行如下：
商户号,订单号,支付订单号,分账订单总金额,分账详情（通过|分割每笔明细：商户号1#分账金额1|商户号2#分账金额2）,交易手续费承担方商户号,交易手续费,发起时间,分账状态,结算日期,非交易主体分账金额,商户退款订单号,商户分账单号
     */
    GetDistributeBillDownloadUrl(req: GetDistributeBillDownloadUrlRequest, cb?: (error: string, rep: GetDistributeBillDownloadUrlResponse) => void): Promise<GetDistributeBillDownloadUrlResponse>;
    /**
     * 会员子账户开立。会员在银行注册，并开立会员子账户，交易网会员代码即会员在平台端系统的会员编号。
平台需保存银行返回的子账户账号，后续交易接口都会用到。会员属性字段为预留扩展字段，当前必须送默认值。
     */
    CreateCustAcctId(req: CreateCustAcctIdRequest, cb?: (error: string, rep: CreateCustAcctIdResponse) => void): Promise<CreateCustAcctIdResponse>;
    /**
     * 直播平台-文件上传
     */
    UploadFile(req: UploadFileRequest, cb?: (error: string, rep: UploadFileResponse) => void): Promise<UploadFileResponse>;
    /**
     * 通过此接口关闭此前已创建的订单，关闭后，用户将无法继续付款。仅能关闭创建后未支付的订单
     */
    CloseOrder(req: CloseOrderRequest, cb?: (error: string, rep: CloseOrderResponse) => void): Promise<CloseOrderResponse>;
    /**
     * 智慧零售-查询管理端商户
     */
    QueryMerchantInfoForManagement(req: QueryMerchantInfoForManagementRequest, cb?: (error: string, rep: QueryMerchantInfoForManagementResponse) => void): Promise<QueryMerchantInfoForManagementResponse>;
    /**
     * 灵云V2-修改收款用户资金账号信息
     */
    ModifyFlexFundingAccount(req: ModifyFlexFundingAccountRequest, cb?: (error: string, rep: ModifyFlexFundingAccountResponse) => void): Promise<ModifyFlexFundingAccountResponse>;
    /**
     * 撤销会员在途充值(经第三方支付渠道)
     */
    RevokeMemberRechargeThirdPay(req: RevokeMemberRechargeThirdPayRequest, cb?: (error: string, rep: RevokeMemberRechargeThirdPayResponse) => void): Promise<RevokeMemberRechargeThirdPayResponse>;
    /**
     * 云企付-按日期批量查询回单下载地址
     */
    QueryOpenBankDailyReceiptDownloadUrl(req: QueryOpenBankDailyReceiptDownloadUrlRequest, cb?: (error: string, rep: QueryOpenBankDailyReceiptDownloadUrlResponse) => void): Promise<QueryOpenBankDailyReceiptDownloadUrlResponse>;
    /**
     * 云支付-分账撤销接口
     */
    DistributeCancel(req: DistributeCancelRequest, cb?: (error: string, rep: DistributeCancelResponse) => void): Promise<DistributeCancelResponse>;
    /**
     * 获取对账中心账单下载地址的接口
     */
    DownloadReconciliationUrl(req: DownloadReconciliationUrlRequest, cb?: (error: string, rep: DownloadReconciliationUrlResponse) => void): Promise<DownloadReconciliationUrlResponse>;
    /**
     * 会员绑定提现账户-银联鉴权。用于会员申请绑定提现账户，申请后银行前往银联验证卡信息：姓名、证件、卡号、银行预留手机是否相符，相符则发送给会员手机动态验证码并返回成功，不相符则返回失败。
平台接收到银行返回成功后，进入输入动态验证码的页面，有效期120秒，若120秒未输入，客户可点击重新发送动态验证码，这个步骤重新调用该接口即可。
平安银行的账户，大小额行号和超级网银号都不用送。
超级网银号：单笔转账金额不超过5万，不限制笔数，只用选XX银行，不用具体到支行，可实时知道对方是否收款成功。
大小额联行号：单笔转账可超过5万，需具体到支行，不能实时知道对方是否收款成功。金额超过5万的，在工作日的8点30-17点间才会成功。
     */
    BindRelateAcctUnionPay(req: BindRelateAcctUnionPayRequest, cb?: (error: string, rep: BindRelateAcctUnionPayResponse) => void): Promise<BindRelateAcctUnionPayResponse>;
    /**
     * 会员间交易-不验证。此接口可以实现会员间的余额的交易，实现资金在会员之间流动。
     */
    QueryMemberTransaction(req: QueryMemberTransactionRequest, cb?: (error: string, rep: QueryMemberTransactionResponse) => void): Promise<QueryMemberTransactionResponse>;
    /**
     * 云企付-子商户资质文件上传
     */
    UploadOpenBankSubMerchantCredential(req: UploadOpenBankSubMerchantCredentialRequest, cb?: (error: string, rep: UploadOpenBankSubMerchantCredentialResponse) => void): Promise<UploadOpenBankSubMerchantCredentialResponse>;
    /**
     * 云企付-绑定分账收款方查询
     */
    QueryOpenBankProfitSharePayee(req: QueryOpenBankProfitSharePayeeRequest, cb?: (error: string, rep: QueryOpenBankProfitSharePayeeResponse) => void): Promise<QueryOpenBankProfitSharePayeeResponse>;
    /**
     * 云支付-查询已添加分账接收方接口
     */
    DistributeQueryReceiver(req: DistributeQueryReceiverRequest, cb?: (error: string, rep: DistributeQueryReceiverResponse) => void): Promise<DistributeQueryReceiverResponse>;
    /**
     * 云企付-结算申请接口
     */
    ApplyOpenBankSettleOrder(req: ApplyOpenBankSettleOrderRequest, cb?: (error: string, rep: ApplyOpenBankSettleOrderResponse) => void): Promise<ApplyOpenBankSettleOrderResponse>;
    /**
     * 获取单笔代发转账对账单下载URL
     */
    QueryBillDownloadURL(req: QueryBillDownloadURLRequest, cb?: (error: string, rep: QueryBillDownloadURLResponse) => void): Promise<QueryBillDownloadURLResponse>;
    /**
     * 智慧零售-发票开具
     */
    CreateInvoice(req: CreateInvoiceRequest, cb?: (error: string, rep: CreateInvoiceResponse) => void): Promise<CreateInvoiceResponse>;
    /**
     * 云企付-单笔交易回单申请结果查询
     */
    QueryOpenBankOrderDetailReceiptInfo(req: QueryOpenBankOrderDetailReceiptInfoRequest, cb?: (error: string, rep: QueryOpenBankOrderDetailReceiptInfoResponse) => void): Promise<QueryOpenBankOrderDetailReceiptInfoResponse>;
    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
     */
    QueryRefund(req: QueryRefundRequest, cb?: (error: string, rep: QueryRefundResponse) => void): Promise<QueryRefundResponse>;
    /**
     * 云支付-分账添加分账接收方接口
     */
    DistributeAddReceiver(req: DistributeAddReceiverRequest, cb?: (error: string, rep: DistributeAddReceiverResponse) => void): Promise<DistributeAddReceiverResponse>;
    /**
     * 子商户在线签约查询
     */
    QueryOpenBankSubMerchantSignOnline(req: QueryOpenBankSubMerchantSignOnlineRequest, cb?: (error: string, rep: QueryOpenBankSubMerchantSignOnlineResponse) => void): Promise<QueryOpenBankSubMerchantSignOnlineResponse>;
    /**
     * 会员间交易退款
     */
    RefundMemberTransaction(req: RefundMemberTransactionRequest, cb?: (error: string, rep: RefundMemberTransactionResponse) => void): Promise<RefundMemberTransactionResponse>;
    /**
     * 云支付-添加商户接口
     */
    AddMerchant(req: AddMerchantRequest, cb?: (error: string, rep: AddMerchantResponse) => void): Promise<AddMerchantResponse>;
    /**
     * 云企付-子商户银行卡列表查询
     */
    QueryOpenBankExternalSubMerchantBankAccount(req: QueryOpenBankExternalSubMerchantBankAccountRequest, cb?: (error: string, rep: QueryOpenBankExternalSubMerchantBankAccountResponse) => void): Promise<QueryOpenBankExternalSubMerchantBankAccountResponse>;
    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时。
     */
    MigrateOrderRefundQuery(req: MigrateOrderRefundQueryRequest, cb?: (error: string, rep: MigrateOrderRefundQueryResponse) => void): Promise<MigrateOrderRefundQueryResponse>;
    /**
     * 直播平台-查询代理商结算单链接
     */
    QueryAgentStatements(req: QueryAgentStatementsRequest, cb?: (error: string, rep: QueryAgentStatementsResponse) => void): Promise<QueryAgentStatementsResponse>;
    /**
     * 通过此接口查询签约数据
     */
    QueryContract(req: QueryContractRequest, cb?: (error: string, rep: QueryContractResponse) => void): Promise<QueryContractResponse>;
    /**
     * 跨境-汇出指令申请。通过该接口可将对接方账户中的人民币余额汇兑成外币，再汇出至指定银行账户。
     */
    ApplyOutwardOrder(req: ApplyOutwardOrderRequest, cb?: (error: string, rep: ApplyOutwardOrderResponse) => void): Promise<ApplyOutwardOrderResponse>;
    /**
     * 云企付-子商户进件结果查询
     */
    QueryOpenBankExternalSubMerchantRegistration(req: QueryOpenBankExternalSubMerchantRegistrationRequest, cb?: (error: string, rep: QueryOpenBankExternalSubMerchantRegistrationResponse) => void): Promise<QueryOpenBankExternalSubMerchantRegistrationResponse>;
    /**
     * 灵云V2-绑定收款用户资金账号信息
     */
    AddFlexFundingAccount(req: AddFlexFundingAccountRequest, cb?: (error: string, rep: AddFlexFundingAccountResponse) => void): Promise<AddFlexFundingAccountResponse>;
    /**
     * 应用需要先调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
     */
    UnifiedCloudOrder(req: UnifiedCloudOrderRequest, cb?: (error: string, rep: UnifiedCloudOrderResponse) => void): Promise<UnifiedCloudOrderResponse>;
    /**
     * 云支付-查询支付方式费率及自定义表单项接口
     */
    QueryContractPayFee(req: QueryContractPayFeeRequest, cb?: (error: string, rep: QueryContractPayFeeResponse) => void): Promise<QueryContractPayFeeResponse>;
    /**
     * 查询小额鉴权转账结果。查询小额往账鉴权的转账状态。
     */
    QuerySmallAmountTransfer(req: QuerySmallAmountTransferRequest, cb?: (error: string, rep: QuerySmallAmountTransferResponse) => void): Promise<QuerySmallAmountTransferResponse>;
    /**
     * 云企付-子商户银行卡绑定结果查询
     */
    QueryOpenBankBindExternalSubMerchantBankAccount(req: QueryOpenBankBindExternalSubMerchantBankAccountRequest, cb?: (error: string, rep: QueryOpenBankBindExternalSubMerchantBankAccountResponse) => void): Promise<QueryOpenBankBindExternalSubMerchantBankAccountResponse>;
    /**
     * 第三方子商户电子记账本创建接口
     */
    CreateOpenBankExternalSubMerchantAccountBook(req: CreateOpenBankExternalSubMerchantAccountBookRequest, cb?: (error: string, rep: CreateOpenBankExternalSubMerchantAccountBookResponse) => void): Promise<CreateOpenBankExternalSubMerchantAccountBookResponse>;
    /**
     * 查询银行单笔交易状态。查询单笔交易的状态。
     */
    QuerySingleTransactionStatus(req: QuerySingleTransactionStatusRequest, cb?: (error: string, rep: QuerySingleTransactionStatusResponse) => void): Promise<QuerySingleTransactionStatusResponse>;
    /**
     * 通过商家批次单号或者微信批次号查询批次单
     */
    QueryTransferBatch(req: QueryTransferBatchRequest, cb?: (error: string, rep: QueryTransferBatchResponse) => void): Promise<QueryTransferBatchResponse>;
    /**
     * 通过此接口进行解约
     */
    TerminateContract(req: TerminateContractRequest, cb?: (error: string, rep: TerminateContractResponse) => void): Promise<TerminateContractResponse>;
    /**
     * 灵云V2-结算
     */
    ApplyFlexSettlement(req: ApplyFlexSettlementRequest, cb?: (error: string, rep: ApplyFlexSettlementResponse) => void): Promise<ApplyFlexSettlementResponse>;
    /**
     * 云企付-子商户银行卡余额查询
     */
    QueryOpenBankBankAccountBalance(req: QueryOpenBankBankAccountBalanceRequest, cb?: (error: string, rep: QueryOpenBankBankAccountBalanceResponse) => void): Promise<QueryOpenBankBankAccountBalanceResponse>;
    /**
     * 聚鑫-开户信息列表查询, 查询某一段时间的开户信息
     */
    QueryAcctInfoList(req: QueryAcctInfoListRequest, cb?: (error: string, rep: QueryAcctInfoListResponse) => void): Promise<QueryAcctInfoListResponse>;
    /**
     * 云企付-子商户进件V2
     */
    CreateOpenBankAggregatedSubMerchantRegistration(req: CreateOpenBankAggregatedSubMerchantRegistrationRequest, cb?: (error: string, rep: CreateOpenBankAggregatedSubMerchantRegistrationResponse) => void): Promise<CreateOpenBankAggregatedSubMerchantRegistrationResponse>;
    /**
     * 查询对账文件信息。平台调用该接口获取需下载对账文件的文件名称以及密钥。 平台获取到信息后， 可以再调用OPENAPI的文件下载功能。
     */
    QueryReconciliationDocument(req: QueryReconciliationDocumentRequest, cb?: (error: string, rep: QueryReconciliationDocumentResponse) => void): Promise<QueryReconciliationDocumentResponse>;
    /**
     * 通过此接口关闭此前已创建的订单。关闭后，用户将无法继续付款，仅能关闭创建后未支付的订单。
     */
    CloseCloudOrder(req: CloseCloudOrderRequest, cb?: (error: string, rep: CloseCloudOrderResponse) => void): Promise<CloseCloudOrderResponse>;
    /**
     * 灵云-查询超额信息
     */
    QueryExceedingInfo(req: QueryExceedingInfoRequest, cb?: (error: string, rep: QueryExceedingInfoResponse) => void): Promise<QueryExceedingInfoResponse>;
    /**
     * 云鉴-消费订单退款的接口
     */
    RefundOrder(req: RefundOrderRequest, cb?: (error: string, rep: RefundOrderResponse) => void): Promise<RefundOrderResponse>;
}

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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const UploadTaxPaymentRequest = models.UploadTaxPaymentRequest;
const QueryAcctBindingRequest = models.QueryAcctBindingRequest;
const ReviseMbrPropertyResponse = models.ReviseMbrPropertyResponse;
const ApplyPayerInfoResponse = models.ApplyPayerInfoResponse;
const RevokeRechargeByThirdPayRequest = models.RevokeRechargeByThirdPayRequest;
const UnifiedOrderResponse = models.UnifiedOrderResponse;
const CreatePayRollTokenResponse = models.CreatePayRollTokenResponse;
const ApplyPayerinfoResult = models.ApplyPayerinfoResult;
const BindAcctRequest = models.BindAcctRequest;
const QueryOpenBankBankBranchListResponse = models.QueryOpenBankBankBranchListResponse;
const MigrateOrderRefundQueryResponse = models.MigrateOrderRefundQueryResponse;
const QueryOpenBankPaymentOrderRequest = models.QueryOpenBankPaymentOrderRequest;
const QueryOpenBankBindExternalSubMerchantBankAccountResponse = models.QueryOpenBankBindExternalSubMerchantBankAccountResponse;
const UploadOrgFileRequest = models.UploadOrgFileRequest;
const GetPayRollAuthResultRequest = models.GetPayRollAuthResultRequest;
const RefundTlinxOrderResponse = models.RefundTlinxOrderResponse;
const QueryItem = models.QueryItem;
const QueryContractPayWayListResponse = models.QueryContractPayWayListResponse;
const QueryContractPayWayListRequest = models.QueryContractPayWayListRequest;
const QueryAssignmentRequest = models.QueryAssignmentRequest;
const ApplyTradeResult = models.ApplyTradeResult;
const RefundOutSubOrderRefundList = models.RefundOutSubOrderRefundList;
const UnbindRelateAcctRequest = models.UnbindRelateAcctRequest;
const CreateMerchantRequest = models.CreateMerchantRequest;
const QueryContractRelateShopResponse = models.QueryContractRelateShopResponse;
const CreateOpenBankExternalSubMerchantRegistrationResult = models.CreateOpenBankExternalSubMerchantRegistrationResult;
const RefundTlinxOrderRequest = models.RefundTlinxOrderRequest;
const QueryInvoiceResult = models.QueryInvoiceResult;
const QueryAcctBindingResponse = models.QueryAcctBindingResponse;
const QueryPayerinfoData = models.QueryPayerinfoData;
const CreateInvoiceItem = models.CreateInvoiceItem;
const ApplyOutwardOrderData = models.ApplyOutwardOrderData;
const MerchantPayWayData = models.MerchantPayWayData;
const QueryOpenBankDownLoadUrlResult = models.QueryOpenBankDownLoadUrlResult;
const BindAccountResponse = models.BindAccountResponse;
const CreateInvoiceResultData = models.CreateInvoiceResultData;
const CloudClientInfo = models.CloudClientInfo;
const FileItem = models.FileItem;
const UnbindOpenBankExternalSubMerchantBankAccountRequest = models.UnbindOpenBankExternalSubMerchantBankAccountRequest;
const CreateRedInvoiceItem = models.CreateRedInvoiceItem;
const AddMerchantResult = models.AddMerchantResult;
const QueryOpenBankExternalSubMerchantRegistrationRequest = models.QueryOpenBankExternalSubMerchantRegistrationRequest;
const QueryMerchantInfoForManagementResponse = models.QueryMerchantInfoForManagementResponse;
const CreateTransferBatchResponse = models.CreateTransferBatchResponse;
const BindAccountRequest = models.BindAccountRequest;
const QueryCloudChannelDataResponse = models.QueryCloudChannelDataResponse;
const QuerySinglePayResponse = models.QuerySinglePayResponse;
const QueryCustAcctIdBalanceResponse = models.QueryCustAcctIdBalanceResponse;
const CreateRedInvoiceRequest = models.CreateRedInvoiceRequest;
const QueryAcctInfoListResponse = models.QueryAcctInfoListResponse;
const ContractInfo = models.ContractInfo;
const QueryOpenBankExternalSubMerchantBankAccountRequest = models.QueryOpenBankExternalSubMerchantBankAccountRequest;
const ExternalReturnContractInfo = models.ExternalReturnContractInfo;
const ExecuteMemberTransactionResponse = models.ExecuteMemberTransactionResponse;
const OrganizationInfo = models.OrganizationInfo;
const QueryApplicationMaterialRequest = models.QueryApplicationMaterialRequest;
const ConfirmOrderRequest = models.ConfirmOrderRequest;
const CloudExternalPromptGroup = models.CloudExternalPromptGroup;
const ModifyMerchantResponse = models.ModifyMerchantResponse;
const ReturnContractInfo = models.ReturnContractInfo;
const QuerySmallAmountTransferResponse = models.QuerySmallAmountTransferResponse;
const CityCodeResult = models.CityCodeResult;
const QueryMerchantClassificationRequest = models.QueryMerchantClassificationRequest;
const UnbindOpenBankExternalSubMerchantBankAccountResult = models.UnbindOpenBankExternalSubMerchantBankAccountResult;
const QuerySingleTransactionStatusResponse = models.QuerySingleTransactionStatusResponse;
const CreateOpenBankMerchantResponse = models.CreateOpenBankMerchantResponse;
const ApplyDeclareData = models.ApplyDeclareData;
const TransferDetailResponse = models.TransferDetailResponse;
const QueryOrderRequest = models.QueryOrderRequest;
const RevokeMemberRechargeThirdPayResponse = models.RevokeMemberRechargeThirdPayResponse;
const DistributeAccreditTlinxRequest = models.DistributeAccreditTlinxRequest;
const QueryContractRelateShopRequest = models.QueryContractRelateShopRequest;
const CreateOpenBankRechargeOrderRequest = models.CreateOpenBankRechargeOrderRequest;
const QueryContractPayFeeResult = models.QueryContractPayFeeResult;
const QueryExceedingInfoResponse = models.QueryExceedingInfoResponse;
const AddContractRequest = models.AddContractRequest;
const CreateAcctResponse = models.CreateAcctResponse;
const DistributeAddReceiverRequest = models.DistributeAddReceiverRequest;
const QueryExchangerateData = models.QueryExchangerateData;
const WithdrawBill = models.WithdrawBill;
const QueryOpenBankDailyReceiptDownloadUrlResponse = models.QueryOpenBankDailyReceiptDownloadUrlResponse;
const QueryPayerInfoResponse = models.QueryPayerInfoResponse;
const BindOpenBankExternalSubMerchantBankAccountResponse = models.BindOpenBankExternalSubMerchantBankAccountResponse;
const QueryMemberTransactionDetailsResponse = models.QueryMemberTransactionDetailsResponse;
const QueryInvoiceResultData = models.QueryInvoiceResultData;
const FundsTransactionItem = models.FundsTransactionItem;
const AddMerchantResponse = models.AddMerchantResponse;
const RefundCloudOrderRequest = models.RefundCloudOrderRequest;
const RegisterBillResponse = models.RegisterBillResponse;
const ApplyReWithdrawalRequest = models.ApplyReWithdrawalRequest;
const DownloadFileResult = models.DownloadFileResult;
const RechargeByThirdPayResponse = models.RechargeByThirdPayResponse;
const QueryOutwardOrderRequest = models.QueryOutwardOrderRequest;
const ViewMerchantRequest = models.ViewMerchantRequest;
const CloseCloudOrderResponse = models.CloseCloudOrderResponse;
const QueryOpenBankPaymentOrderResult = models.QueryOpenBankPaymentOrderResult;
const QueryTradeResult = models.QueryTradeResult;
const ClearItem = models.ClearItem;
const PayFeeDataResult = models.PayFeeDataResult;
const CreateInvoiceV2Response = models.CreateInvoiceV2Response;
const QuerySinglePayItem = models.QuerySinglePayItem;
const QueryInvoiceV2Response = models.QueryInvoiceV2Response;
const QueryAgentStatementsResponse = models.QueryAgentStatementsResponse;
const QueryOutwardOrderResponse = models.QueryOutwardOrderResponse;
const QuerySinglePaymentResultRequest = models.QuerySinglePaymentResultRequest;
const QueryShopOpenIdRequest = models.QueryShopOpenIdRequest;
const QueryBalanceResponse = models.QueryBalanceResponse;
const CreateOpenBankOrderPaymentResult = models.CreateOpenBankOrderPaymentResult;
const CloseOpenBankPaymentOrderResponse = models.CloseOpenBankPaymentOrderResponse;
const TerminateContractRequest = models.TerminateContractRequest;
const OpenBankSceneInfo = models.OpenBankSceneInfo;
const CreatePayMerchantRequest = models.CreatePayMerchantRequest;
const QueryMaliciousRegistrationResponse = models.QueryMaliciousRegistrationResponse;
const RefundCloudOrderResponse = models.RefundCloudOrderResponse;
const QueryBankClearRequest = models.QueryBankClearRequest;
const QueryInvoiceRequest = models.QueryInvoiceRequest;
const CreatePayRollPreOrderResponse = models.CreatePayRollPreOrderResponse;
const CreateOpenBankMerchantResult = models.CreateOpenBankMerchantResult;
const DistributeQueryReceiverRequest = models.DistributeQueryReceiverRequest;
const QueryOpenBankUnbindExternalSubMerchantBankAccountResponse = models.QueryOpenBankUnbindExternalSubMerchantBankAccountResponse;
const QueryOpenBankDownLoadUrlRequest = models.QueryOpenBankDownLoadUrlRequest;
const DownloadBillRequest = models.DownloadBillRequest;
const RevokeMemberRechargeThirdPayRequest = models.RevokeMemberRechargeThirdPayRequest;
const QuerySinglePayRequest = models.QuerySinglePayRequest;
const ApplyTradeResponse = models.ApplyTradeResponse;
const ViewMerchantResult = models.ViewMerchantResult;
const QueryOpenBankSupportBankListRequest = models.QueryOpenBankSupportBankListRequest;
const ContractOrderRequest = models.ContractOrderRequest;
const QueryContractPayFeeResponse = models.QueryContractPayFeeResponse;
const BindRelateAcctSmallAmountResponse = models.BindRelateAcctSmallAmountResponse;
const QueryBalanceRequest = models.QueryBalanceRequest;
const QueryOpenBankSupportBankListResult = models.QueryOpenBankSupportBankListResult;
const BindRelateAcctSmallAmountRequest = models.BindRelateAcctSmallAmountRequest;
const QueryTransferDetailResponse = models.QueryTransferDetailResponse;
const QueryTransferBatchResponse = models.QueryTransferBatchResponse;
const QueryDeclareData = models.QueryDeclareData;
const QueryContractPayFeeRequest = models.QueryContractPayFeeRequest;
const QueryOrderResponse = models.QueryOrderResponse;
const CreateOpenBankExternalSubMerchantRegistrationResponse = models.CreateOpenBankExternalSubMerchantRegistrationResponse;
const RefundOrderResult = models.RefundOrderResult;
const QueryBatchPaymentResultDataInfo = models.QueryBatchPaymentResultDataInfo;
const ContractOrderInSubOrder = models.ContractOrderInSubOrder;
const RegisterBehaviorRequest = models.RegisterBehaviorRequest;
const UnifiedCloudOrderResponse = models.UnifiedCloudOrderResponse;
const UnbindOpenBankExternalSubMerchantBankAccountResponse = models.UnbindOpenBankExternalSubMerchantBankAccountResponse;
const QueryTradeRequest = models.QueryTradeRequest;
const CloudOrderReturn = models.CloudOrderReturn;
const QueryBankWithdrawCashDetailsRequest = models.QueryBankWithdrawCashDetailsRequest;
const QueryOpenBankBindExternalSubMerchantBankAccountResult = models.QueryOpenBankBindExternalSubMerchantBankAccountResult;
const QueryExceedingInfoResult = models.QueryExceedingInfoResult;
const QueryMerchantPayWayListRequest = models.QueryMerchantPayWayListRequest;
const WithdrawCashMembershipRequest = models.WithdrawCashMembershipRequest;
const RevResigterBillSupportWithdrawRequest = models.RevResigterBillSupportWithdrawRequest;
const CreateInvoiceResponse = models.CreateInvoiceResponse;
const AddMerchantRequest = models.AddMerchantRequest;
const CreateRedInvoiceResultV2 = models.CreateRedInvoiceResultV2;
const QueryAnchorContractInfoRequest = models.QueryAnchorContractInfoRequest;
const CreateRedInvoiceResult = models.CreateRedInvoiceResult;
const CreateOpenBankPaymentOrderRequest = models.CreateOpenBankPaymentOrderRequest;
const QueryOpenBankOrderDetailReceiptInfoResult = models.QueryOpenBankOrderDetailReceiptInfoResult;
const QueryReconciliationDocumentRequest = models.QueryReconciliationDocumentRequest;
const QueryOpenBankExternalSubMerchantBankAccountData = models.QueryOpenBankExternalSubMerchantBankAccountData;
const DeleteAgentTaxPaymentInfoRequest = models.DeleteAgentTaxPaymentInfoRequest;
const CreateOpenBankExternalSubMerchantRegistrationRequest = models.CreateOpenBankExternalSubMerchantRegistrationRequest;
const GetDistributeBillDownloadUrlResponse = models.GetDistributeBillDownloadUrlResponse;
const ViewContractResponse = models.ViewContractResponse;
const CreateOpenBankMerchantRequest = models.CreateOpenBankMerchantRequest;
const QueryOrderOutOrderList = models.QueryOrderOutOrderList;
const ModifyAgentTaxPaymentInfoResponse = models.ModifyAgentTaxPaymentInfoResponse;
const QueryBatchPaymentResultResponse = models.QueryBatchPaymentResultResponse;
const CloudAttachmentInfo = models.CloudAttachmentInfo;
const RevokeRechargeByThirdPayResponse = models.RevokeRechargeByThirdPayResponse;
const QueryOpenBankDailyReceiptDownloadUrlRequest = models.QueryOpenBankDailyReceiptDownloadUrlRequest;
const CreateAcctRequest = models.CreateAcctRequest;
const CreateAgentTaxPaymentInfosRequest = models.CreateAgentTaxPaymentInfosRequest;
const QueryReconciliationFileApplyInfoRequest = models.QueryReconciliationFileApplyInfoRequest;
const CreatePayRollPreOrderWithAuthRequest = models.CreatePayRollPreOrderWithAuthRequest;
const QueryMerchantBalanceRequest = models.QueryMerchantBalanceRequest;
const QueryOutwardOrderResult = models.QueryOutwardOrderResult;
const QueryPayerInfoRequest = models.QueryPayerInfoRequest;
const QuerySingleTransactionStatusRequest = models.QuerySingleTransactionStatusRequest;
const QueryContractRequest = models.QueryContractRequest;
const CreateOpenBankRechargeOrderResponse = models.CreateOpenBankRechargeOrderResponse;
const QueryDownloadBillURLRequest = models.QueryDownloadBillURLRequest;
const QueryMerchantBalanceResult = models.QueryMerchantBalanceResult;
const QueryOpenBankOrderDetailReceiptInfoRequest = models.QueryOpenBankOrderDetailReceiptInfoRequest;
const QueryOpenBankExternalSubAccountBookBalanceResponse = models.QueryOpenBankExternalSubAccountBookBalanceResponse;
const QueryOrderStatusRequest = models.QueryOrderStatusRequest;
const CreateExternalAnchorResponse = models.CreateExternalAnchorResponse;
const QueryTradeResponse = models.QueryTradeResponse;
const QueryMerchantOrderRequest = models.QueryMerchantOrderRequest;
const DistributeQueryResponse = models.DistributeQueryResponse;
const CreateInvoiceV2Request = models.CreateInvoiceV2Request;
const UploadExternalAnchorInfoResponse = models.UploadExternalAnchorInfoResponse;
const UploadTaxListResponse = models.UploadTaxListResponse;
const QueryReconciliationFileApplyInfoResponse = models.QueryReconciliationFileApplyInfoResponse;
const BindRelateAcctUnionPayRequest = models.BindRelateAcctUnionPayRequest;
const QueryFundsTransactionDetailsResult = models.QueryFundsTransactionDetailsResult;
const QueryCloudOrderResponse = models.QueryCloudOrderResponse;
const Paging = models.Paging;
const CreateOpenBankExternalSubMerchantAccountBookRequest = models.CreateOpenBankExternalSubMerchantAccountBookRequest;
const RegisterBehaviorResponse = models.RegisterBehaviorResponse;
const GetPayRollAuthListRequest = models.GetPayRollAuthListRequest;
const QueryBillDownloadURLData = models.QueryBillDownloadURLData;
const ApplyWithdrawalResponse = models.ApplyWithdrawalResponse;
const QueryMerchantInfoForManagementRequest = models.QueryMerchantInfoForManagementRequest;
const UnifiedTlinxOrderRequest = models.UnifiedTlinxOrderRequest;
const DeduceQuotaRequest = models.DeduceQuotaRequest;
const QueryMerchantBalanceData = models.QueryMerchantBalanceData;
const RechargeMemberThirdPayResponse = models.RechargeMemberThirdPayResponse;
const QueryExceedingInfoData = models.QueryExceedingInfoData;
const QueryExchangerateResult = models.QueryExchangerateResult;
const QueryMemberTransactionDetailsRequest = models.QueryMemberTransactionDetailsRequest;
const QueryBatchPaymentResultRequest = models.QueryBatchPaymentResultRequest;
const BindAcctResponse = models.BindAcctResponse;
const UploadExternalAnchorInfoRequest = models.UploadExternalAnchorInfoRequest;
const BindRelateAccReUnionPayRequest = models.BindRelateAccReUnionPayRequest;
const CreateSinglePayResult = models.CreateSinglePayResult;
const QueryAcctInfoResponse = models.QueryAcctInfoResponse;
const MigrateOrderRefundQueryRequest = models.MigrateOrderRefundQueryRequest;
const CloudSubOrder = models.CloudSubOrder;
const AnchorExtendInfo = models.AnchorExtendInfo;
const QueryOpenBankExternalSubMerchantRegistrationResponse = models.QueryOpenBankExternalSubMerchantRegistrationResponse;
const GetBillDownloadUrlRequest = models.GetBillDownloadUrlRequest;
const CreatePayMerchantResponse = models.CreatePayMerchantResponse;
const UnbindRelateAcctResponse = models.UnbindRelateAcctResponse;
const GetDistributeBillDownloadUrlRequest = models.GetDistributeBillDownloadUrlRequest;
const AgentTaxPaymentBatch = models.AgentTaxPaymentBatch;
const SyncContractDataRequest = models.SyncContractDataRequest;
const GetPayRollAuthListResponse = models.GetPayRollAuthListResponse;
const QueryRefundRequest = models.QueryRefundRequest;
const CreateCustAcctIdRequest = models.CreateCustAcctIdRequest;
const CloudExternalChannelData = models.CloudExternalChannelData;
const DistributeApplyResponse = models.DistributeApplyResponse;
const CreateBatchPaymentData = models.CreateBatchPaymentData;
const DistributeQueryRequest = models.DistributeQueryRequest;
const CloseOrderRequest = models.CloseOrderRequest;
const ViewShopResult = models.ViewShopResult;
const QueryOutwardOrderData = models.QueryOutwardOrderData;
const QueryOpenBankExternalSubMerchantRegistrationResult = models.QueryOpenBankExternalSubMerchantRegistrationResult;
const OpenBankRedirectInfo = models.OpenBankRedirectInfo;
const ViewContractRequest = models.ViewContractRequest;
const QueryBankTransactionDetailsRequest = models.QueryBankTransactionDetailsRequest;
const CloudSubOrderReturn = models.CloudSubOrderReturn;
const QueryExchangeRateRequest = models.QueryExchangeRateRequest;
const AddContractResponse = models.AddContractResponse;
const QueryBillDownloadURLRequest = models.QueryBillDownloadURLRequest;
const CloudSubRefundItem = models.CloudSubRefundItem;
const QueryOpenBankDownLoadUrlResponse = models.QueryOpenBankDownLoadUrlResponse;
const RevResigterBillSupportWithdrawResponse = models.RevResigterBillSupportWithdrawResponse;
const ApplyApplicationMaterialResponse = models.ApplyApplicationMaterialResponse;
const DistributeQueryResult = models.DistributeQueryResult;
const ExecuteMemberTransactionRequest = models.ExecuteMemberTransactionRequest;
const QueryBankClearResponse = models.QueryBankClearResponse;
const DescribeOrderStatusResponse = models.DescribeOrderStatusResponse;
const CreateMerchantResponse = models.CreateMerchantResponse;
const CreateSinglePaymentResponse = models.CreateSinglePaymentResponse;
const CloseOpenBankPaymentOrderRequest = models.CloseOpenBankPaymentOrderRequest;
const GetPayRollAuthRequest = models.GetPayRollAuthRequest;
const ViewContractResult = models.ViewContractResult;
const QueryAcctItem = models.QueryAcctItem;
const OpenBankRechargePayeeInfo = models.OpenBankRechargePayeeInfo;
const QueryContractRelateShopResult = models.QueryContractRelateShopResult;
const RefundRequest = models.RefundRequest;
const ApplyWithdrawalRequest = models.ApplyWithdrawalRequest;
const QueryAssignmentResponse = models.QueryAssignmentResponse;
const QuerySinglePaymentResultResponse = models.QuerySinglePaymentResultResponse;
const QueryMemberBindResponse = models.QueryMemberBindResponse;
const QueryMemberBindRequest = models.QueryMemberBindRequest;
const BindRelateAcctUnionPayResponse = models.BindRelateAcctUnionPayResponse;
const QueryCloudRefundOrderRequest = models.QueryCloudRefundOrderRequest;
const UnifiedOrderRequest = models.UnifiedOrderRequest;
const RechargeByThirdPayRequest = models.RechargeByThirdPayRequest;
const DistributeRemoveReceiverResponse = models.DistributeRemoveReceiverResponse;
const QueryInvoiceV2Request = models.QueryInvoiceV2Request;
const DistributeAccreditQueryRequest = models.DistributeAccreditQueryRequest;
const QueryMerchantResponse = models.QueryMerchantResponse;
const BankCardItem = models.BankCardItem;
const DistributeAccreditResult = models.DistributeAccreditResult;
const ViewShopResponse = models.ViewShopResponse;
const ApplyTradeRequest = models.ApplyTradeRequest;
const QueryExchangeRateResponse = models.QueryExchangeRateResponse;
const QuerySmallAmountTransferRequest = models.QuerySmallAmountTransferRequest;
const SupportBankInfo = models.SupportBankInfo;
const ModifyMntMbrBindRelateAcctBankCodeRequest = models.ModifyMntMbrBindRelateAcctBankCodeRequest;
const QueryMerchantPayWayListResponse = models.QueryMerchantPayWayListResponse;
const PayRollAuthResult = models.PayRollAuthResult;
const CloudGlobalPayTimeInfo = models.CloudGlobalPayTimeInfo;
const QueryCustAcctIdBalanceRequest = models.QueryCustAcctIdBalanceRequest;
const QueryExternalAccountBookResult = models.QueryExternalAccountBookResult;
const ReviseMbrPropertyRequest = models.ReviseMbrPropertyRequest;
const AgentTaxPayment = models.AgentTaxPayment;
const UploadFileRequest = models.UploadFileRequest;
const QueryBankWithdrawCashDetailsResponse = models.QueryBankWithdrawCashDetailsResponse;
const UploadTaxPaymentResponse = models.UploadTaxPaymentResponse;
const QueryCloudRefundOrderResponse = models.QueryCloudRefundOrderResponse;
const AgencyClientInfo = models.AgencyClientInfo;
const QueryTradeData = models.QueryTradeData;
const QueryOpenBankUnbindExternalSubMerchantBankAccountResult = models.QueryOpenBankUnbindExternalSubMerchantBankAccountResult;
const ApplyDeclareResult = models.ApplyDeclareResult;
const DistributeAccreditQueryResponse = models.DistributeAccreditQueryResponse;
const UnifiedOrderInSubOrderList = models.UnifiedOrderInSubOrderList;
const QueryShopOpenIdResult = models.QueryShopOpenIdResult;
const ApplyReWithdrawalResponse = models.ApplyReWithdrawalResponse;
const GetPayRollAuthResultResponse = models.GetPayRollAuthResultResponse;
const RegisterBillRequest = models.RegisterBillRequest;
const OpenBankGoodsInfo = models.OpenBankGoodsInfo;
const QueryOrderOutSubOrderList = models.QueryOrderOutSubOrderList;
const CreateBatchPaymentResponse = models.CreateBatchPaymentResponse;
const CreateExternalAnchorRequest = models.CreateExternalAnchorRequest;
const ConfirmOrderResponse = models.ConfirmOrderResponse;
const GetPayRollAuthResponse = models.GetPayRollAuthResponse;
const UnifiedTlinxOrderResponse = models.UnifiedTlinxOrderResponse;
const CreateSinglePaymentData = models.CreateSinglePaymentData;
const CheckAmountResponse = models.CheckAmountResponse;
const MerchantManagementList = models.MerchantManagementList;
const QueryCityCodeResponse = models.QueryCityCodeResponse;
const QueryApplicationMaterialResponse = models.QueryApplicationMaterialResponse;
const CreateExternalAccountBookResult = models.CreateExternalAccountBookResult;
const QueryTransferResultData = models.QueryTransferResultData;
const MultiApplyDetail = models.MultiApplyDetail;
const ResponseTerminateContract = models.ResponseTerminateContract;
const DownloadBillResponse = models.DownloadBillResponse;
const QueryOpenBankBindExternalSubMerchantBankAccountRequest = models.QueryOpenBankBindExternalSubMerchantBankAccountRequest;
const DistributeRemoveReceiverRequest = models.DistributeRemoveReceiverRequest;
const BillDownloadUrlResult = models.BillDownloadUrlResult;
const CreatePayRollPreOrderRequest = models.CreatePayRollPreOrderRequest;
const DeleteAgentTaxPaymentInfosRequest = models.DeleteAgentTaxPaymentInfosRequest;
const QueryAcctInfoListRequest = models.QueryAcctInfoListRequest;
const CreatePayRollTokenRequest = models.CreatePayRollTokenRequest;
const AddShopRequest = models.AddShopRequest;
const TransferDetailRequest = models.TransferDetailRequest;
const QueryOrderStatusResponse = models.QueryOrderStatusResponse;
const QueryTransferResultResponse = models.QueryTransferResultResponse;
const CloseCloudOrderRequest = models.CloseCloudOrderRequest;
const CreateInvoiceResultV2 = models.CreateInvoiceResultV2;
const QueryAcctInfoRequest = models.QueryAcctInfoRequest;
const DescribeChargeDetailResponse = models.DescribeChargeDetailResponse;
const TranItem = models.TranItem;
const DistributeQueryReceiverResponse = models.DistributeQueryReceiverResponse;
const QueryTransferResultRequest = models.QueryTransferResultRequest;
const QueryReconciliationFileApplyInfoResult = models.QueryReconciliationFileApplyInfoResult;
const ApplyReconciliationFileResult = models.ApplyReconciliationFileResult;
const QueryOpenBankExternalSubMerchantBankAccountResponse = models.QueryOpenBankExternalSubMerchantBankAccountResponse;
const CreateRedInvoiceV2Request = models.CreateRedInvoiceV2Request;
const ApplyOpenBankOrderDetailReceiptResponse = models.ApplyOpenBankOrderDetailReceiptResponse;
const OpenBankApprovalGuideInfo = models.OpenBankApprovalGuideInfo;
const CreateOrderResponse = models.CreateOrderResponse;
const MultiApplyOrder = models.MultiApplyOrder;
const ModifyMerchantRequest = models.ModifyMerchantRequest;
const TransferItem = models.TransferItem;
const OrderItem = models.OrderItem;
const RefundMemberTransactionRequest = models.RefundMemberTransactionRequest;
const CreateCloudSubMerchantResponse = models.CreateCloudSubMerchantResponse;
const QueryFundsTransactionDetailsRequest = models.QueryFundsTransactionDetailsRequest;
const BindOpenBankExternalSubMerchantBankAccountResult = models.BindOpenBankExternalSubMerchantBankAccountResult;
const CheckAmountRequest = models.CheckAmountRequest;
const CreateMerchantResultData = models.CreateMerchantResultData;
const DistributeCancelRequest = models.DistributeCancelRequest;
const QueryOpenBankSupportBankListResponse = models.QueryOpenBankSupportBankListResponse;
const QueryDeclareResult = models.QueryDeclareResult;
const RefundMemberTransactionResponse = models.RefundMemberTransactionResponse;
const QueryCloudOrderRequest = models.QueryCloudOrderRequest;
const OpenBankRechargeRedirectInfo = models.OpenBankRechargeRedirectInfo;
const UnBindAcctResponse = models.UnBindAcctResponse;
const QueryCommonTransferRechargeRequest = models.QueryCommonTransferRechargeRequest;
const ApplyOpenBankOrderDetailReceiptRequest = models.ApplyOpenBankOrderDetailReceiptRequest;
const GetBillDownloadUrlResponse = models.GetBillDownloadUrlResponse;
const QueryTransferDetailRequest = models.QueryTransferDetailRequest;
const DownloadOrgFileResponse = models.DownloadOrgFileResponse;
const OpenBankPayeeInfo = models.OpenBankPayeeInfo;
const AddShopResult = models.AddShopResult;
const PayDataResult = models.PayDataResult;
const ModifyBindedAccountResponse = models.ModifyBindedAccountResponse;
const QueryReconciliationDocumentResponse = models.QueryReconciliationDocumentResponse;
const QueryBankTransactionDetailsResponse = models.QueryBankTransactionDetailsResponse;
const TransferSinglePayRequest = models.TransferSinglePayRequest;
const CreateSinglePayResponse = models.CreateSinglePayResponse;
const MigrateOrderRefundRequest = models.MigrateOrderRefundRequest;
const QueryOpenBankBankAccountBalanceResult = models.QueryOpenBankBankAccountBalanceResult;
const QuerySinglePaymentResultData = models.QuerySinglePaymentResultData;
const UploadOrgFileResponse = models.UploadOrgFileResponse;
const QueryOpenBankOrderDetailReceiptInfoResponse = models.QueryOpenBankOrderDetailReceiptInfoResponse;
const CreateAnchorRequest = models.CreateAnchorRequest;
const QueryExceedingInfoRequest = models.QueryExceedingInfoRequest;
const ExternalContractUserInfo = models.ExternalContractUserInfo;
const BankBranchInfo = models.BankBranchInfo;
const ContractUserInfo = models.ContractUserInfo;
const ApplyApplicationMaterialRequest = models.ApplyApplicationMaterialRequest;
const QueryCloudChannelDataRequest = models.QueryCloudChannelDataRequest;
const QueryOpenBankBankAccountBalanceRequest = models.QueryOpenBankBankAccountBalanceRequest;
const ModifyAgentTaxPaymentInfoRequest = models.ModifyAgentTaxPaymentInfoRequest;
const DownloadReconciliationUrlRequest = models.DownloadReconciliationUrlRequest;
const CreateBatchPaymentRequest = models.CreateBatchPaymentRequest;
const CreateOpenBankExternalSubMerchantAccountBookResponse = models.CreateOpenBankExternalSubMerchantAccountBookResponse;
const ModifyMntMbrBindRelateAcctBankCodeResponse = models.ModifyMntMbrBindRelateAcctBankCodeResponse;
const SyncContractDataResponse = models.SyncContractDataResponse;
const CreateRedInvoiceResultData = models.CreateRedInvoiceResultData;
const ResponseQueryContract = models.ResponseQueryContract;
const DownloadOrgFileRequest = models.DownloadOrgFileRequest;
const ContractSyncInfo = models.ContractSyncInfo;
const Order = models.Order;
const QueryAgentStatementsRequest = models.QueryAgentStatementsRequest;
const CreateExternalAnchorData = models.CreateExternalAnchorData;
const BindOpenBankExternalSubMerchantBankAccountRequest = models.BindOpenBankExternalSubMerchantBankAccountRequest;
const OpenBankProfitShareInfo = models.OpenBankProfitShareInfo;
const MigrateOrderRefundResponse = models.MigrateOrderRefundResponse;
const TransferSinglePayResponse = models.TransferSinglePayResponse;
const CloudStoreInfo = models.CloudStoreInfo;
const ContractOrderResponse = models.ContractOrderResponse;
const QueryInvoiceResponse = models.QueryInvoiceResponse;
const QueryOpenBankBankAccountBalanceResponse = models.QueryOpenBankBankAccountBalanceResponse;
const ViewMerchantResponse = models.ViewMerchantResponse;
const AddShopResponse = models.AddShopResponse;
const UploadFileResponse = models.UploadFileResponse;
const QueryMemberTransactionDetailsResult = models.QueryMemberTransactionDetailsResult;
const CreateMerchantResult = models.CreateMerchantResult;
const RefundResponse = models.RefundResponse;
const CreateTransferBatchRequest = models.CreateTransferBatchRequest;
const WithdrawItem = models.WithdrawItem;
const QueryMemberTransactionRequest = models.QueryMemberTransactionRequest;
const QueryCityCodeRequest = models.QueryCityCodeRequest;
const CreateOrderRequest = models.CreateOrderRequest;
const ModifyBindedAccountRequest = models.ModifyBindedAccountRequest;
const WithdrawCashMembershipResponse = models.WithdrawCashMembershipResponse;
const CreateSinglePaymentRequest = models.CreateSinglePaymentRequest;
const MemberTransactionItem = models.MemberTransactionItem;
const DistributeReceiverResult = models.DistributeReceiverResult;
const DistributeApplyRequest = models.DistributeApplyRequest;
const ViewShopRequest = models.ViewShopRequest;
const ApplyOutwardOrderResponse = models.ApplyOutwardOrderResponse;
const DistributeAccreditQueryResult = models.DistributeAccreditQueryResult;
const QueryShopOpenIdResponse = models.QueryShopOpenIdResponse;
const Acct = models.Acct;
const QueryCommonTransferRechargeResponse = models.QueryCommonTransferRechargeResponse;
const ApplyPayerinfoData = models.ApplyPayerinfoData;
const CheckAcctRequest = models.CheckAcctRequest;
const CreateAgentTaxPaymentInfosResponse = models.CreateAgentTaxPaymentInfosResponse;
const ApplyReconciliationFileResponse = models.ApplyReconciliationFileResponse;
const ContractPayListResult = models.ContractPayListResult;
const CreateInvoiceResult = models.CreateInvoiceResult;
const DescribeOrderStatusRequest = models.DescribeOrderStatusRequest;
const QueryMemberTransactionResponse = models.QueryMemberTransactionResponse;
const ChannelContractInfo = models.ChannelContractInfo;
const CreateAnchorResponse = models.CreateAnchorResponse;
const UnifiedCloudOrderRequest = models.UnifiedCloudOrderRequest;
const MerchantRiskInfo = models.MerchantRiskInfo;
const QueryPayerinfoResult = models.QueryPayerinfoResult;
const QueryOrderStatusResult = models.QueryOrderStatusResult;
const QueryAgentTaxPaymentBatchResponse = models.QueryAgentTaxPaymentBatchResponse;
const DeleteAgentTaxPaymentInfosResponse = models.DeleteAgentTaxPaymentInfosResponse;
const QueryMerchantClassificationResponse = models.QueryMerchantClassificationResponse;
const SceneInfo = models.SceneInfo;
const QueryContractResponse = models.QueryContractResponse;
const CreateRedInvoiceResponse = models.CreateRedInvoiceResponse;
const QueryMerchantBalanceResponse = models.QueryMerchantBalanceResponse;
const RefundOrderResponse = models.RefundOrderResponse;
const CloseOrderResponse = models.CloseOrderResponse;
const MerchantManagementResult = models.MerchantManagementResult;
const UploadTaxListRequest = models.UploadTaxListRequest;
const CloudSettleInfo = models.CloudSettleInfo;
const RegisterInfo = models.RegisterInfo;
const QueryOpenBankPaymentOrderResponse = models.QueryOpenBankPaymentOrderResponse;
const QueryMaliciousRegistrationRequest = models.QueryMaliciousRegistrationRequest;
const AddContractResult = models.AddContractResult;
const QueryBillDownloadURLResponse = models.QueryBillDownloadURLResponse;
const UploadFileResult = models.UploadFileResult;
const DescribeChargeDetailRequest = models.DescribeChargeDetailRequest;
const PayOrderResult = models.PayOrderResult;
const CreateCloudSubMerchantRequest = models.CreateCloudSubMerchantRequest;
const CreateCustAcctIdResponse = models.CreateCustAcctIdResponse;
const QueryAgentTaxPaymentBatchRequest = models.QueryAgentTaxPaymentBatchRequest;
const CloudChannelExternalUserInfo = models.CloudChannelExternalUserInfo;
const ApplyReconciliationFileRequest = models.ApplyReconciliationFileRequest;
const RegisterBillSupportWithdrawResponse = models.RegisterBillSupportWithdrawResponse;
const ApplyOutwardOrderRequest = models.ApplyOutwardOrderRequest;
const AssignmentData = models.AssignmentData;
const DistributeAccreditTlinxResponse = models.DistributeAccreditTlinxResponse;
const RechargeMemberThirdPayRequest = models.RechargeMemberThirdPayRequest;
const CreateInvoiceRequest = models.CreateInvoiceRequest;
const AnchorContractInfo = models.AnchorContractInfo;
const QueryFundsTransactionDetailsResponse = models.QueryFundsTransactionDetailsResponse;
const ChannelReturnContractInfo = models.ChannelReturnContractInfo;
const ApplyOpenBankOrderDetailReceiptResult = models.ApplyOpenBankOrderDetailReceiptResult;
const CreateRedInvoiceV2Response = models.CreateRedInvoiceV2Response;
const DistributeMultiApplyResult = models.DistributeMultiApplyResult;
const RefundOrderRequest = models.RefundOrderRequest;
const OpenBankPayerInfo = models.OpenBankPayerInfo;
const TransactionItem = models.TransactionItem;
const QueryTransferBatchRequest = models.QueryTransferBatchRequest;
const TransferSinglePayData = models.TransferSinglePayData;
const CheckAcctResponse = models.CheckAcctResponse;
const CloudSubOrderRefund = models.CloudSubOrderRefund;
const QueryOpenBankExternalSubAccountBookBalanceRequest = models.QueryOpenBankExternalSubAccountBookBalanceRequest;
const ApplyOutwardOrderResult = models.ApplyOutwardOrderResult;
const ApplyPayerInfoRequest = models.ApplyPayerInfoRequest;
const CreateBatchPaymentBatchData = models.CreateBatchPaymentBatchData;
const DownloadReconciliationUrlResponse = models.DownloadReconciliationUrlResponse;
const QueryDownloadBillURLResponse = models.QueryDownloadBillURLResponse;
const DistributeCancelResult = models.DistributeCancelResult;
const CreatePayRollPreOrderWithAuthResponse = models.CreatePayRollPreOrderWithAuthResponse;
const CreateOpenBankOrderRechargeResult = models.CreateOpenBankOrderRechargeResult;
const QuerySinglePayResult = models.QuerySinglePayResult;
const CloudExternalPromptInfo = models.CloudExternalPromptInfo;
const DistributeCancelResponse = models.DistributeCancelResponse;
const QueryOpenBankBankBranchListRequest = models.QueryOpenBankBankBranchListRequest;
const QueryOpenBankBankBranchListResult = models.QueryOpenBankBankBranchListResult;
const ApplyTradeData = models.ApplyTradeData;
const QueryOpenBankExternalSubMerchantBankAccountResult = models.QueryOpenBankExternalSubMerchantBankAccountResult;
const CreateOpenBankPaymentOrderResponse = models.CreateOpenBankPaymentOrderResponse;
const DeduceQuotaResponse = models.DeduceQuotaResponse;
const CloseOpenBankPaymentOrderResult = models.CloseOpenBankPaymentOrderResult;
const CreateBatchPaymentRecipient = models.CreateBatchPaymentRecipient;
const RegisterBillSupportWithdrawRequest = models.RegisterBillSupportWithdrawRequest;
const DeleteAgentTaxPaymentInfoResponse = models.DeleteAgentTaxPaymentInfoResponse;
const QueryOpenBankDailyReceiptDownloadUrlResult = models.QueryOpenBankDailyReceiptDownloadUrlResult;
const CreateSinglePayRequest = models.CreateSinglePayRequest;
const QueryRefundResponse = models.QueryRefundResponse;
const DistributeAddReceiverResponse = models.DistributeAddReceiverResponse;
const TerminateContractResponse = models.TerminateContractResponse;
const QueryOpenBankUnbindExternalSubMerchantBankAccountRequest = models.QueryOpenBankUnbindExternalSubMerchantBankAccountRequest;
const QueryMerchantRequest = models.QueryMerchantRequest;
const QueryAnchorContractInfoResponse = models.QueryAnchorContractInfoResponse;
const MerchantClassificationId = models.MerchantClassificationId;
const BindRelateAccReUnionPayResponse = models.BindRelateAccReUnionPayResponse;
const QueryBatchPaymentResultData = models.QueryBatchPaymentResultData;
const QueryMerchantOrderResponse = models.QueryMerchantOrderResponse;
const UnBindAcctRequest = models.UnBindAcctRequest;


/**
 * cpdp client
 * @class
 */
class CpdpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cpdp.tencentcloudapi.com", "2019-08-20", credential, region, profile);
    }
    
    /**
     * 直播平台-查询分配关系
     * @param {QueryAssignmentRequest} req
     * @param {function(string, QueryAssignmentResponse):void} cb
     * @public
     */
    QueryAssignment(req, cb) {
        let resp = new QueryAssignmentResponse();
        this.request("QueryAssignment", req, resp, cb);
    }

    /**
     * 云支付-分账授权申请查询接口
     * @param {DistributeAccreditQueryRequest} req
     * @param {function(string, DistributeAccreditQueryResponse):void} cb
     * @public
     */
    DistributeAccreditQuery(req, cb) {
        let resp = new DistributeAccreditQueryResponse();
        this.request("DistributeAccreditQuery", req, resp, cb);
    }

    /**
     * 聚鑫-查询会员间交易信息列表
     * @param {QueryMemberTransactionDetailsRequest} req
     * @param {function(string, QueryMemberTransactionDetailsResponse):void} cb
     * @public
     */
    QueryMemberTransactionDetails(req, cb) {
        let resp = new QueryMemberTransactionDetailsResponse();
        this.request("QueryMemberTransactionDetails", req, resp, cb);
    }

    /**
     * 直播平台-修改代理商完税信息
     * @param {ModifyAgentTaxPaymentInfoRequest} req
     * @param {function(string, ModifyAgentTaxPaymentInfoResponse):void} cb
     * @public
     */
    ModifyAgentTaxPaymentInfo(req, cb) {
        let resp = new ModifyAgentTaxPaymentInfoResponse();
        this.request("ModifyAgentTaxPaymentInfo", req, resp, cb);
    }

    /**
     * 维护会员绑定提现账户联行号。此接口可以支持市场修改会员的提现账户的开户行信息，具体包括开户行行名、开户行的银行联行号（大小额联行号）和超级网银行号。
     * @param {ModifyMntMbrBindRelateAcctBankCodeRequest} req
     * @param {function(string, ModifyMntMbrBindRelateAcctBankCodeResponse):void} cb
     * @public
     */
    ModifyMntMbrBindRelateAcctBankCode(req, cb) {
        let resp = new ModifyMntMbrBindRelateAcctBankCodeResponse();
        this.request("ModifyMntMbrBindRelateAcctBankCode", req, resp, cb);
    }

    /**
     * 灵云-批量主播转账接口
     * @param {CreateBatchPaymentRequest} req
     * @param {function(string, CreateBatchPaymentResponse):void} cb
     * @public
     */
    CreateBatchPayment(req, cb) {
        let resp = new CreateBatchPaymentResponse();
        this.request("CreateBatchPayment", req, resp, cb);
    }

    /**
     * 直播平台-扣减额度
     * @param {DeduceQuotaRequest} req
     * @param {function(string, DeduceQuotaResponse):void} cb
     * @public
     */
    DeduceQuota(req, cb) {
        let resp = new DeduceQuotaResponse();
        this.request("DeduceQuota", req, resp, cb);
    }

    /**
     * 灵云-主播入驻
     * @param {CreateExternalAnchorRequest} req
     * @param {function(string, CreateExternalAnchorResponse):void} cb
     * @public
     */
    CreateExternalAnchor(req, cb) {
        let resp = new CreateExternalAnchorResponse();
        this.request("CreateExternalAnchor", req, resp, cb);
    }

    /**
     * 根据订单号，或者用户Id，查询支付订单状态 
     * @param {QueryOrderRequest} req
     * @param {function(string, QueryOrderResponse):void} cb
     * @public
     */
    QueryOrder(req, cb) {
        let resp = new QueryOrderResponse();
        this.request("QueryOrder", req, resp, cb);
    }

    /**
     * 灵云-上传主播信息
     * @param {UploadExternalAnchorInfoRequest} req
     * @param {function(string, UploadExternalAnchorInfoResponse):void} cb
     * @public
     */
    UploadExternalAnchorInfo(req, cb) {
        let resp = new UploadExternalAnchorInfoResponse();
        this.request("UploadExternalAnchorInfo", req, resp, cb);
    }

    /**
     * 根据订单号或用户ID，查询支付订单状态。
     * @param {QueryCloudOrderRequest} req
     * @param {function(string, QueryCloudOrderResponse):void} cb
     * @public
     */
    QueryCloudOrder(req, cb) {
        let resp = new QueryCloudOrderResponse();
        this.request("QueryCloudOrder", req, resp, cb);
    }

    /**
     * 会员提现-不验证。此接口受理会员发起的提现申请。会员子账户的可提现余额、可用余额会减少，市场的资金汇总账户(监管账户)会减少相应的发生金额，提现到会员申请的收款账户。		
     * @param {WithdrawCashMembershipRequest} req
     * @param {function(string, WithdrawCashMembershipResponse):void} cb
     * @public
     */
    WithdrawCashMembership(req, cb) {
        let resp = new WithdrawCashMembershipResponse();
        this.request("WithdrawCashMembership", req, resp, cb);
    }

    /**
     * 务工卡-获取核身结果
     * @param {GetPayRollAuthResultRequest} req
     * @param {function(string, GetPayRollAuthResultResponse):void} cb
     * @public
     */
    GetPayRollAuthResult(req, cb) {
        let resp = new GetPayRollAuthResultResponse();
        this.request("GetPayRollAuthResult", req, resp, cb);
    }

    /**
     * 查询银行时间段内交易明细。查询时间段的会员成功交易。
     * @param {QueryBankTransactionDetailsRequest} req
     * @param {function(string, QueryBankTransactionDetailsResponse):void} cb
     * @public
     */
    QueryBankTransactionDetails(req, cb) {
        let resp = new QueryBankTransactionDetailsResponse();
        this.request("QueryBankTransactionDetails", req, resp, cb);
    }

    /**
     * 云企付-子商户进件
     * @param {CreateOpenBankExternalSubMerchantRegistrationRequest} req
     * @param {function(string, CreateOpenBankExternalSubMerchantRegistrationResponse):void} cb
     * @public
     */
    CreateOpenBankExternalSubMerchantRegistration(req, cb) {
        let resp = new CreateOpenBankExternalSubMerchantRegistrationResponse();
        this.request("CreateOpenBankExternalSubMerchantRegistration", req, resp, cb);
    }

    /**
     * 查询普通转账充值明细。接口用于查询会员主动转账进资金汇总账户的明细情况。若会员使用绑定账号转入，则直接入账到会员子账户。若未使用绑定账号转入，则系统无法自动清分到对应子账户，则转入挂账子账户由平台自行清分。若是 “见证+收单充值”T0充值记录时备注Note为“见证+收单充值,订单号” 此接口可以查到T0到账的“见证+收单充值”充值记录。
     * @param {QueryCommonTransferRechargeRequest} req
     * @param {function(string, QueryCommonTransferRechargeResponse):void} cb
     * @public
     */
    QueryCommonTransferRecharge(req, cb) {
        let resp = new QueryCommonTransferRechargeResponse();
        this.request("QueryCommonTransferRecharge", req, resp, cb);
    }

    /**
     * 账单下载接口，根据本接口返回的URL地址，在D+1日下载对账单。注意，本接口返回的URL地址有时效，请尽快下载。URL超时时效后，请重新调用本接口再次获取。
     * @param {DownloadBillRequest} req
     * @param {function(string, DownloadBillResponse):void} cb
     * @public
     */
    DownloadBill(req, cb) {
        let resp = new DownloadBillResponse();
        this.request("DownloadBill", req, resp, cb);
    }

    /**
     * 云支付-查询合同明细接口
     * @param {ViewContractRequest} req
     * @param {function(string, ViewContractResponse):void} cb
     * @public
     */
    ViewContract(req, cb) {
        let resp = new ViewContractResponse();
        this.request("ViewContract", req, resp, cb);
    }

    /**
     * 查询银行子账户余额。查询会员子账户以及平台的功能子账户的余额。
     * @param {QueryCustAcctIdBalanceRequest} req
     * @param {function(string, QueryCustAcctIdBalanceResponse):void} cb
     * @public
     */
    QueryCustAcctIdBalance(req, cb) {
        let resp = new QueryCustAcctIdBalanceResponse();
        this.request("QueryCustAcctIdBalance", req, resp, cb);
    }

    /**
     * 直播平台-查询主播签约信息
     * @param {QueryAnchorContractInfoRequest} req
     * @param {function(string, QueryAnchorContractInfoResponse):void} cb
     * @public
     */
    QueryAnchorContractInfo(req, cb) {
        let resp = new QueryAnchorContractInfoResponse();
        this.request("QueryAnchorContractInfo", req, resp, cb);
    }

    /**
     * 智能代发-单笔代发转账接口
     * @param {TransferSinglePayRequest} req
     * @param {function(string, TransferSinglePayResponse):void} cb
     * @public
     */
    TransferSinglePay(req, cb) {
        let resp = new TransferSinglePayResponse();
        this.request("TransferSinglePay", req, resp, cb);
    }

    /**
     * 商户查询已开通的支付方式列表
     * @param {QueryMerchantPayWayListRequest} req
     * @param {function(string, QueryMerchantPayWayListResponse):void} cb
     * @public
     */
    QueryMerchantPayWayList(req, cb) {
        let resp = new QueryMerchantPayWayListResponse();
        this.request("QueryMerchantPayWayList", req, resp, cb);
    }

    /**
     * 云鉴-商户信息修改的接口
     * @param {ModifyMerchantRequest} req
     * @param {function(string, ModifyMerchantResponse):void} cb
     * @public
     */
    ModifyMerchant(req, cb) {
        let resp = new ModifyMerchantResponse();
        this.request("ModifyMerchant", req, resp, cb);
    }

    /**
     * 登记挂账(支持撤销)。此接口可实现把不明来账或自有资金等已登记在挂账子账户下的资金调整到普通会员子账户。即通过申请调用此接口，将会减少挂账子账户的资金，调增指定的普通会员子账户的可提现余额及可用余额。此接口不支持把挂账子账户资金清分到功能子账户。
     * @param {RegisterBillSupportWithdrawRequest} req
     * @param {function(string, RegisterBillSupportWithdrawResponse):void} cb
     * @public
     */
    RegisterBillSupportWithdraw(req, cb) {
        let resp = new RegisterBillSupportWithdrawResponse();
        this.request("RegisterBillSupportWithdraw", req, resp, cb);
    }

    /**
     * 云企付-按日期批量查询回单下载地址
     * @param {QueryOpenBankDailyReceiptDownloadUrlRequest} req
     * @param {function(string, QueryOpenBankDailyReceiptDownloadUrlResponse):void} cb
     * @public
     */
    QueryOpenBankDailyReceiptDownloadUrl(req, cb) {
        let resp = new QueryOpenBankDailyReceiptDownloadUrlResponse();
        this.request("QueryOpenBankDailyReceiptDownloadUrl", req, resp, cb);
    }

    /**
     * 云企付-创建充值订单
     * @param {CreateOpenBankRechargeOrderRequest} req
     * @param {function(string, CreateOpenBankRechargeOrderResponse):void} cb
     * @public
     */
    CreateOpenBankRechargeOrder(req, cb) {
        let resp = new CreateOpenBankRechargeOrderResponse();
        this.request("CreateOpenBankRechargeOrder", req, resp, cb);
    }

    /**
     * 跨境-贸易材料明细查询。
     * @param {QueryTradeRequest} req
     * @param {function(string, QueryTradeResponse):void} cb
     * @public
     */
    QueryTrade(req, cb) {
        let resp = new QueryTradeResponse();
        this.request("QueryTrade", req, resp, cb);
    }

    /**
     * 通过商家或者微信批次明细单号查询明细单
     * @param {QueryTransferDetailRequest} req
     * @param {function(string, QueryTransferDetailResponse):void} cb
     * @public
     */
    QueryTransferDetail(req, cb) {
        let resp = new QueryTransferDetailResponse();
        this.request("QueryTransferDetail", req, resp, cb);
    }

    /**
     * 云支付-添加门店接口
     * @param {AddShopRequest} req
     * @param {function(string, AddShopResponse):void} cb
     * @public
     */
    AddShop(req, cb) {
        let resp = new AddShopResponse();
        this.request("AddShop", req, resp, cb);
    }

    /**
     * 第三方子商户电子记账本余额查询接口
     * @param {QueryOpenBankExternalSubAccountBookBalanceRequest} req
     * @param {function(string, QueryOpenBankExternalSubAccountBookBalanceResponse):void} cb
     * @public
     */
    QueryOpenBankExternalSubAccountBookBalance(req, cb) {
        let resp = new QueryOpenBankExternalSubAccountBookBalanceResponse();
        this.request("QueryOpenBankExternalSubAccountBookBalance", req, resp, cb);
    }

    /**
     * 云支付-查询商户分类接口
     * @param {QueryMerchantClassificationRequest} req
     * @param {function(string, QueryMerchantClassificationResponse):void} cb
     * @public
     */
    QueryMerchantClassification(req, cb) {
        let resp = new QueryMerchantClassificationResponse();
        this.request("QueryMerchantClassification", req, resp, cb);
    }

    /**
     * 跨境-提交申报材料。申报材料的主体是付款人，需要提前调用【跨境-付款人申请】接口提交付款人信息且审核通过后调用。
     * @param {ApplyApplicationMaterialRequest} req
     * @param {function(string, ApplyApplicationMaterialResponse):void} cb
     * @public
     */
    ApplyApplicationMaterial(req, cb) {
        let resp = new ApplyApplicationMaterialResponse();
        this.request("ApplyApplicationMaterial", req, resp, cb);
    }

    /**
     * 微信商户发起批量转账
     * @param {CreateTransferBatchRequest} req
     * @param {function(string, CreateTransferBatchResponse):void} cb
     * @public
     */
    CreateTransferBatch(req, cb) {
        let resp = new CreateTransferBatchResponse();
        this.request("CreateTransferBatch", req, resp, cb);
    }

    /**
     * 智慧零售-发票开具V2
     * @param {CreateInvoiceV2Request} req
     * @param {function(string, CreateInvoiceV2Response):void} cb
     * @public
     */
    CreateInvoiceV2(req, cb) {
        let resp = new CreateInvoiceV2Response();
        this.request("CreateInvoiceV2", req, resp, cb);
    }

    /**
     * 智慧零售-发票查询
     * @param {QueryInvoiceRequest} req
     * @param {function(string, QueryInvoiceResponse):void} cb
     * @public
     */
    QueryInvoice(req, cb) {
        let resp = new QueryInvoiceResponse();
        this.request("QueryInvoice", req, resp, cb);
    }

    /**
     * 云企付-查询联行号
     * @param {QueryOpenBankBankBranchListRequest} req
     * @param {function(string, QueryOpenBankBankBranchListResponse):void} cb
     * @public
     */
    QueryOpenBankBankBranchList(req, cb) {
        let resp = new QueryOpenBankBankBranchListResponse();
        this.request("QueryOpenBankBankBranchList", req, resp, cb);
    }

    /**
     * 跨境-查询汇率
     * @param {QueryExchangeRateRequest} req
     * @param {function(string, QueryExchangeRateResponse):void} cb
     * @public
     */
    QueryExchangeRate(req, cb) {
        let resp = new QueryExchangeRateResponse();
        this.request("QueryExchangeRate", req, resp, cb);
    }

    /**
     * 会员解绑提现账户。此接口可以支持会员解除名下的绑定账户关系。
     * @param {UnbindRelateAcctRequest} req
     * @param {function(string, UnbindRelateAcctResponse):void} cb
     * @public
     */
    UnbindRelateAcct(req, cb) {
        let resp = new UnbindRelateAcctResponse();
        this.request("UnbindRelateAcct", req, resp, cb);
    }

    /**
     * 商户新增的接口
     * @param {CreatePayMerchantRequest} req
     * @param {function(string, CreatePayMerchantResponse):void} cb
     * @public
     */
    CreatePayMerchant(req, cb) {
        let resp = new CreatePayMerchantResponse();
        this.request("CreatePayMerchant", req, resp, cb);
    }

    /**
     * 灵云-单笔转账结果查询
     * @param {QuerySinglePaymentResultRequest} req
     * @param {function(string, QuerySinglePaymentResultResponse):void} cb
     * @public
     */
    QuerySinglePaymentResult(req, cb) {
        let resp = new QuerySinglePaymentResultResponse();
        this.request("QuerySinglePaymentResult", req, resp, cb);
    }

    /**
     * 云企付-申请单笔交易回单
     * @param {ApplyOpenBankOrderDetailReceiptRequest} req
     * @param {function(string, ApplyOpenBankOrderDetailReceiptResponse):void} cb
     * @public
     */
    ApplyOpenBankOrderDetailReceipt(req, cb) {
        let resp = new ApplyOpenBankOrderDetailReceiptResponse();
        this.request("ApplyOpenBankOrderDetailReceipt", req, resp, cb);
    }

    /**
     * 云支付-查询商户明细接口
     * @param {ViewMerchantRequest} req
     * @param {function(string, ViewMerchantResponse):void} cb
     * @public
     */
    ViewMerchant(req, cb) {
        let resp = new ViewMerchantResponse();
        this.request("ViewMerchant", req, resp, cb);
    }

    /**
     * 直播平台-上传代理商完税证明
     * @param {UploadTaxPaymentRequest} req
     * @param {function(string, UploadTaxPaymentResponse):void} cb
     * @public
     */
    UploadTaxPayment(req, cb) {
        let resp = new UploadTaxPaymentResponse();
        this.request("UploadTaxPayment", req, resp, cb);
    }

    /**
     * 务工卡-核身预下单带授权
     * @param {CreatePayRollPreOrderWithAuthRequest} req
     * @param {function(string, CreatePayRollPreOrderWithAuthResponse):void} cb
     * @public
     */
    CreatePayRollPreOrderWithAuth(req, cb) {
        let resp = new CreatePayRollPreOrderWithAuthResponse();
        this.request("CreatePayRollPreOrderWithAuth", req, resp, cb);
    }

    /**
     * 会员绑定信息查询。查询标志为“单个会员”的情况下，返回该会员的有效的绑定账户信息。
查询标志为“全部会员”的情况下，返回市场下的全部的有效的绑定账户信息。查询标志为“单个会员的证件信息”的情况下，返回市场下的指定的会员的留存在电商见证宝系统的证件信息。
     * @param {QueryMemberBindRequest} req
     * @param {function(string, QueryMemberBindResponse):void} cb
     * @public
     */
    QueryMemberBind(req, cb) {
        let resp = new QueryMemberBindResponse();
        this.request("QueryMemberBind", req, resp, cb);
    }

    /**
     * 云企付-创建支付订单
     * @param {CreateOpenBankPaymentOrderRequest} req
     * @param {function(string, CreateOpenBankPaymentOrderResponse):void} cb
     * @public
     */
    CreateOpenBankPaymentOrder(req, cb) {
        let resp = new CreateOpenBankPaymentOrderResponse();
        this.request("CreateOpenBankPaymentOrder", req, resp, cb);
    }

    /**
     * 云支付订单退款接口
     * @param {RefundTlinxOrderRequest} req
     * @param {function(string, RefundTlinxOrderResponse):void} cb
     * @public
     */
    RefundTlinxOrder(req, cb) {
        let resp = new RefundTlinxOrderResponse();
        this.request("RefundTlinxOrder", req, resp, cb);
    }

    /**
     * 商户解除绑定的提现银行卡
     * @param {UnBindAcctRequest} req
     * @param {function(string, UnBindAcctResponse):void} cb
     * @public
     */
    UnBindAcct(req, cb) {
        let resp = new UnBindAcctResponse();
        this.request("UnBindAcct", req, resp, cb);
    }

    /**
     * 云支付-分账请求接口
     * @param {DistributeApplyRequest} req
     * @param {function(string, DistributeApplyResponse):void} cb
     * @public
     */
    DistributeApply(req, cb) {
        let resp = new DistributeApplyResponse();
        this.request("DistributeApply", req, resp, cb);
    }

    /**
     * 跨境-对接方账户余额查询
     * @param {QueryMerchantBalanceRequest} req
     * @param {function(string, QueryMerchantBalanceResponse):void} cb
     * @public
     */
    QueryMerchantBalance(req, cb) {
        let resp = new QueryMerchantBalanceResponse();
        this.request("QueryMerchantBalance", req, resp, cb);
    }

    /**
     * 云支付-查询合同支付方式列表接口
     * @param {QueryContractPayWayListRequest} req
     * @param {function(string, QueryContractPayWayListResponse):void} cb
     * @public
     */
    QueryContractPayWayList(req, cb) {
        let resp = new QueryContractPayWayListResponse();
        this.request("QueryContractPayWayList", req, resp, cb);
    }

    /**
     * 务工卡-核身预下单
     * @param {CreatePayRollPreOrderRequest} req
     * @param {function(string, CreatePayRollPreOrderResponse):void} cb
     * @public
     */
    CreatePayRollPreOrder(req, cb) {
        let resp = new CreatePayRollPreOrderResponse();
        this.request("CreatePayRollPreOrder", req, resp, cb);
    }

    /**
     * 创建子商户
     * @param {CreateCloudSubMerchantRequest} req
     * @param {function(string, CreateCloudSubMerchantResponse):void} cb
     * @public
     */
    CreateCloudSubMerchant(req, cb) {
        let resp = new CreateCloudSubMerchantResponse();
        this.request("CreateCloudSubMerchant", req, resp, cb);
    }

    /**
     * 直播平台-删除代理商完税信息
     * @param {DeleteAgentTaxPaymentInfoRequest} req
     * @param {function(string, DeleteAgentTaxPaymentInfoResponse):void} cb
     * @public
     */
    DeleteAgentTaxPaymentInfo(req, cb) {
        let resp = new DeleteAgentTaxPaymentInfoResponse();
        this.request("DeleteAgentTaxPaymentInfo", req, resp, cb);
    }

    /**
     * 直播平台-代理商完税信息录入
     * @param {CreateAgentTaxPaymentInfosRequest} req
     * @param {function(string, CreateAgentTaxPaymentInfosResponse):void} cb
     * @public
     */
    CreateAgentTaxPaymentInfos(req, cb) {
        let resp = new CreateAgentTaxPaymentInfosResponse();
        this.request("CreateAgentTaxPaymentInfos", req, resp, cb);
    }

    /**
     * 直播平台-删除代理商完税信息
     * @param {DeleteAgentTaxPaymentInfosRequest} req
     * @param {function(string, DeleteAgentTaxPaymentInfosResponse):void} cb
     * @public
     */
    DeleteAgentTaxPaymentInfos(req, cb) {
        let resp = new DeleteAgentTaxPaymentInfosResponse();
        this.request("DeleteAgentTaxPaymentInfos", req, resp, cb);
    }

    /**
     * 应用需要先带上签约信息调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
     * @param {ContractOrderRequest} req
     * @param {function(string, ContractOrderResponse):void} cb
     * @public
     */
    ContractOrder(req, cb) {
        let resp = new ContractOrderResponse();
        this.request("ContractOrder", req, resp, cb);
    }

    /**
     * 务工卡-查询核身记录
     * @param {GetPayRollAuthListRequest} req
     * @param {function(string, GetPayRollAuthListResponse):void} cb
     * @public
     */
    GetPayRollAuthList(req, cb) {
        let resp = new GetPayRollAuthListResponse();
        this.request("GetPayRollAuthList", req, resp, cb);
    }

    /**
     * 商户查询是否签约和签约行为上报
     * @param {RegisterBehaviorRequest} req
     * @param {function(string, RegisterBehaviorResponse):void} cb
     * @public
     */
    RegisterBehavior(req, cb) {
        let resp = new RegisterBehaviorResponse();
        this.request("RegisterBehavior", req, resp, cb);
    }

    /**
     * 务工卡-生成授权令牌
     * @param {CreatePayRollTokenRequest} req
     * @param {function(string, CreatePayRollTokenResponse):void} cb
     * @public
     */
    CreatePayRollToken(req, cb) {
        let resp = new CreatePayRollTokenResponse();
        this.request("CreatePayRollToken", req, resp, cb);
    }

    /**
     * 应用需要先调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
     * @param {UnifiedOrderRequest} req
     * @param {function(string, UnifiedOrderResponse):void} cb
     * @public
     */
    UnifiedOrder(req, cb) {
        let resp = new UnifiedOrderResponse();
        this.request("UnifiedOrder", req, resp, cb);
    }

    /**
     * 云企付-子商户银行卡解绑结果查询
     * @param {QueryOpenBankUnbindExternalSubMerchantBankAccountRequest} req
     * @param {function(string, QueryOpenBankUnbindExternalSubMerchantBankAccountResponse):void} cb
     * @public
     */
    QueryOpenBankUnbindExternalSubMerchantBankAccount(req, cb) {
        let resp = new QueryOpenBankUnbindExternalSubMerchantBankAccountResponse();
        this.request("QueryOpenBankUnbindExternalSubMerchantBankAccount", req, resp, cb);
    }

    /**
     * 云鉴-消费订单确认接口
     * @param {ConfirmOrderRequest} req
     * @param {function(string, ConfirmOrderResponse):void} cb
     * @public
     */
    ConfirmOrder(req, cb) {
        let resp = new ConfirmOrderResponse();
        this.request("ConfirmOrder", req, resp, cb);
    }

    /**
     * 云支付-查询合同可关联门店接口
     * @param {QueryContractRelateShopRequest} req
     * @param {function(string, QueryContractRelateShopResponse):void} cb
     * @public
     */
    QueryContractRelateShop(req, cb) {
        let resp = new QueryContractRelateShopResponse();
        this.request("QueryContractRelateShop", req, resp, cb);
    }

    /**
     * 验证鉴权金额。此接口可受理BindRelateAcctSmallAmount接口发起的转账金额（往账鉴权方式）的验证处理。若所回填的验证金额验证通过，则会绑定原申请中的银行账户作为提现账户。通过此接口也可以查得BindRelateAcctSmallAmount接口发起的来账鉴权方式的申请的当前状态。
     * @param {CheckAmountRequest} req
     * @param {function(string, CheckAmountResponse):void} cb
     * @public
     */
    CheckAmount(req, cb) {
        let resp = new CheckAmountResponse();
        this.request("CheckAmount", req, resp, cb);
    }

    /**
     * 智能代发-单笔代发转账查询接口
     * @param {QueryTransferResultRequest} req
     * @param {function(string, QueryTransferResultResponse):void} cb
     * @public
     */
    QueryTransferResult(req, cb) {
        let resp = new QueryTransferResultResponse();
        this.request("QueryTransferResult", req, resp, cb);
    }

    /**
     * 直播平台-主播入驻
     * @param {CreateAnchorRequest} req
     * @param {function(string, CreateAnchorResponse):void} cb
     * @public
     */
    CreateAnchor(req, cb) {
        let resp = new CreateAnchorResponse();
        this.request("CreateAnchor", req, resp, cb);
    }

    /**
     * 跨境-查询汇出结果
     * @param {QueryOutwardOrderRequest} req
     * @param {function(string, QueryOutwardOrderResponse):void} cb
     * @public
     */
    QueryOutwardOrder(req, cb) {
        let resp = new QueryOutwardOrderResponse();
        this.request("QueryOutwardOrder", req, resp, cb);
    }

    /**
     * 云支付-获取门店OpenId接口
     * @param {QueryShopOpenIdRequest} req
     * @param {function(string, QueryShopOpenIdResponse):void} cb
     * @public
     */
    QueryShopOpenId(req, cb) {
        let resp = new QueryShopOpenIdResponse();
        this.request("QueryShopOpenId", req, resp, cb);
    }

    /**
     * 云企付-查询订单支付结果
     * @param {QueryOpenBankPaymentOrderRequest} req
     * @param {function(string, QueryOpenBankPaymentOrderResponse):void} cb
     * @public
     */
    QueryOpenBankPaymentOrder(req, cb) {
        let resp = new QueryOpenBankPaymentOrderResponse();
        this.request("QueryOpenBankPaymentOrder", req, resp, cb);
    }

    /**
     * 商户恶意注册接口
     * @param {QueryMaliciousRegistrationRequest} req
     * @param {function(string, QueryMaliciousRegistrationResponse):void} cb
     * @public
     */
    QueryMaliciousRegistration(req, cb) {
        let resp = new QueryMaliciousRegistrationResponse();
        this.request("QueryMaliciousRegistration", req, resp, cb);
    }

    /**
     * 山姆聚合支付项目-存量订单退款接口。可以通过本接口将支付款全部或部分退还给付款方，在收到用户退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。
     * @param {MigrateOrderRefundRequest} req
     * @param {function(string, MigrateOrderRefundResponse):void} cb
     * @public
     */
    MigrateOrderRefund(req, cb) {
        let resp = new MigrateOrderRefundResponse();
        this.request("MigrateOrderRefund", req, resp, cb);
    }

    /**
     * 聚鑫-开户信息查询
     * @param {QueryAcctInfoRequest} req
     * @param {function(string, QueryAcctInfoResponse):void} cb
     * @public
     */
    QueryAcctInfo(req, cb) {
        let resp = new QueryAcctInfoResponse();
        this.request("QueryAcctInfo", req, resp, cb);
    }

    /**
     * 聚鑫-申请对账文件
     * @param {ApplyReconciliationFileRequest} req
     * @param {function(string, ApplyReconciliationFileResponse):void} cb
     * @public
     */
    ApplyReconciliationFile(req, cb) {
        let resp = new ApplyReconciliationFileResponse();
        this.request("ApplyReconciliationFile", req, resp, cb);
    }

    /**
     * 聚鑫-查询对账文件申请结果
     * @param {QueryReconciliationFileApplyInfoRequest} req
     * @param {function(string, QueryReconciliationFileApplyInfoResponse):void} cb
     * @public
     */
    QueryReconciliationFileApplyInfo(req, cb) {
        let resp = new QueryReconciliationFileApplyInfoResponse();
        this.request("QueryReconciliationFileApplyInfo", req, resp, cb);
    }

    /**
     * 查询银行时间段内清分提现明细。查询银行时间段内清分提现明细接口：若为“见证+收单退款”“见证+收单充值”记录时备注Note为“见证+收单充值,订单号”“见证+收单退款,订单号”，此接口可以查到T0/T1的充值明细和退款记录。查询标志：充值记录仍用3清分选项查询，退款记录同提现用2选项查询。
     * @param {QueryBankWithdrawCashDetailsRequest} req
     * @param {function(string, QueryBankWithdrawCashDetailsResponse):void} cb
     * @public
     */
    QueryBankWithdrawCashDetails(req, cb) {
        let resp = new QueryBankWithdrawCashDetailsResponse();
        this.request("QueryBankWithdrawCashDetails", req, resp, cb);
    }

    /**
     * 云鉴-查询对账单下载地址的接口
     * @param {QueryDownloadBillURLRequest} req
     * @param {function(string, QueryDownloadBillURLResponse):void} cb
     * @public
     */
    QueryDownloadBillURL(req, cb) {
        let resp = new QueryDownloadBillURLResponse();
        this.request("QueryDownloadBillURL", req, resp, cb);
    }

    /**
     * 商户绑定提现银行卡的验证接口
     * @param {CheckAcctRequest} req
     * @param {function(string, CheckAcctResponse):void} cb
     * @public
     */
    CheckAcct(req, cb) {
        let resp = new CheckAcctResponse();
        this.request("CheckAcct", req, resp, cb);
    }

    /**
     * 灵云-绑定账号
     * @param {BindAccountRequest} req
     * @param {function(string, BindAccountResponse):void} cb
     * @public
     */
    BindAccount(req, cb) {
        let resp = new BindAccountResponse();
        this.request("BindAccount", req, resp, cb);
    }

    /**
     * 云鉴-消费订单查询接口
     * @param {QueryMerchantOrderRequest} req
     * @param {function(string, QueryMerchantOrderResponse):void} cb
     * @public
     */
    QueryMerchantOrder(req, cb) {
        let resp = new QueryMerchantOrderResponse();
        this.request("QueryMerchantOrder", req, resp, cb);
    }

    /**
     * 智慧零售-发票红冲V2
     * @param {CreateRedInvoiceV2Request} req
     * @param {function(string, CreateRedInvoiceV2Response):void} cb
     * @public
     */
    CreateRedInvoiceV2(req, cb) {
        let resp = new CreateRedInvoiceV2Response();
        this.request("CreateRedInvoiceV2", req, resp, cb);
    }

    /**
     * 对于存量的签约关系导入或者部分场景下米大师无法收到签约通知的场景，需要由调用方主动将签约状态同步至米大师
     * @param {SyncContractDataRequest} req
     * @param {function(string, SyncContractDataResponse):void} cb
     * @public
     */
    SyncContractData(req, cb) {
        let resp = new SyncContractDataResponse();
        this.request("SyncContractData", req, resp, cb);
    }

    /**
     * 直播平台-上传代理商完税列表
     * @param {UploadTaxListRequest} req
     * @param {function(string, UploadTaxListResponse):void} cb
     * @public
     */
    UploadTaxList(req, cb) {
        let resp = new UploadTaxListResponse();
        this.request("UploadTaxList", req, resp, cb);
    }

    /**
     * 灵云-重新绑定账号
     * @param {ModifyBindedAccountRequest} req
     * @param {function(string, ModifyBindedAccountResponse):void} cb
     * @public
     */
    ModifyBindedAccount(req, cb) {
        let resp = new ModifyBindedAccountResponse();
        this.request("ModifyBindedAccount", req, resp, cb);
    }

    /**
     * 智慧零售-发票查询V2
     * @param {QueryInvoiceV2Request} req
     * @param {function(string, QueryInvoiceV2Response):void} cb
     * @public
     */
    QueryInvoiceV2(req, cb) {
        let resp = new QueryInvoiceV2Response();
        this.request("QueryInvoiceV2", req, resp, cb);
    }

    /**
     * 商户绑定提现银行卡，每个商户只能绑定一张提现银行卡
     * @param {BindAcctRequest} req
     * @param {function(string, BindAcctResponse):void} cb
     * @public
     */
    BindAcct(req, cb) {
        let resp = new BindAcctResponse();
        this.request("BindAcct", req, resp, cb);
    }

    /**
     * 会员绑定提现账户-小额鉴权。会员申请绑定提现账户，绑定后从会员子账户中提现到绑定账户。
转账鉴权有两种形式：往账鉴权和来账鉴权。
往账鉴权：该接口发起成功后，银行会向提现账户转入小于等于0.5元的随机金额，并短信通知客户查看，客户查看后，需将收到的金额大小，在电商平台页面上回填，并通知银行。银行验证通过后，完成提现账户绑定。
来账鉴权：该接口发起成功后，银行以短信通知客户查看，客户查看后，需通过待绑定的账户往市场的监管账户转入短信上指定的金额。银行检索到该笔指定金额的来账是源自待绑定账户，则绑定成功。平安银行的账户，即BankType送1时，大小额行号和超级网银号都不用送。
     * @param {BindRelateAcctSmallAmountRequest} req
     * @param {function(string, BindRelateAcctSmallAmountResponse):void} cb
     * @public
     */
    BindRelateAcctSmallAmount(req, cb) {
        let resp = new BindRelateAcctSmallAmountResponse();
        this.request("BindRelateAcctSmallAmount", req, resp, cb);
    }

    /**
     * 云鉴-消费订单发起的接口
     * @param {CreateOrderRequest} req
     * @param {function(string, CreateOrderResponse):void} cb
     * @public
     */
    CreateOrder(req, cb) {
        let resp = new CreateOrderResponse();
        this.request("CreateOrder", req, resp, cb);
    }

    /**
     * 云支付-统一下单接口
     * @param {UnifiedTlinxOrderRequest} req
     * @param {function(string, UnifiedTlinxOrderResponse):void} cb
     * @public
     */
    UnifiedTlinxOrder(req, cb) {
        let resp = new UnifiedTlinxOrderResponse();
        this.request("UnifiedTlinxOrder", req, resp, cb);
    }

    /**
     * 云支付-上传机构文件接口
     * @param {UploadOrgFileRequest} req
     * @param {function(string, UploadOrgFileResponse):void} cb
     * @public
     */
    UploadOrgFile(req, cb) {
        let resp = new UploadOrgFileResponse();
        this.request("UploadOrgFile", req, resp, cb);
    }

    /**
     * 会员绑定提现账户-回填银联鉴权短信码。用于会员填写动态验证码后，发往银行进行验证，验证成功则完成绑定。
     * @param {BindRelateAccReUnionPayRequest} req
     * @param {function(string, BindRelateAccReUnionPayResponse):void} cb
     * @public
     */
    BindRelateAccReUnionPay(req, cb) {
        let resp = new BindRelateAccReUnionPayResponse();
        this.request("BindRelateAccReUnionPay", req, resp, cb);
    }

    /**
     * 云鉴-商户信息查询接口
     * @param {QueryMerchantRequest} req
     * @param {function(string, QueryMerchantResponse):void} cb
     * @public
     */
    QueryMerchant(req, cb) {
        let resp = new QueryMerchantResponse();
        this.request("QueryMerchant", req, resp, cb);
    }

    /**
     * 修改会员属性-普通商户子账户。修改会员的会员属性。
     * @param {ReviseMbrPropertyRequest} req
     * @param {function(string, ReviseMbrPropertyResponse):void} cb
     * @public
     */
    ReviseMbrProperty(req, cb) {
        let resp = new ReviseMbrPropertyResponse();
        this.request("ReviseMbrProperty", req, resp, cb);
    }

    /**
     * 云企付-子商户银行卡绑定
     * @param {BindOpenBankExternalSubMerchantBankAccountRequest} req
     * @param {function(string, BindOpenBankExternalSubMerchantBankAccountResponse):void} cb
     * @public
     */
    BindOpenBankExternalSubMerchantBankAccount(req, cb) {
        let resp = new BindOpenBankExternalSubMerchantBankAccountResponse();
        this.request("BindOpenBankExternalSubMerchantBankAccount", req, resp, cb);
    }

    /**
     * 子商户余额查询
     * @param {QueryBalanceRequest} req
     * @param {function(string, QueryBalanceResponse):void} cb
     * @public
     */
    QueryBalance(req, cb) {
        let resp = new QueryBalanceResponse();
        this.request("QueryBalance", req, resp, cb);
    }

    /**
     * 撤销会员在途充值(经第三方支付渠道)接口
     * @param {RevokeRechargeByThirdPayRequest} req
     * @param {function(string, RevokeRechargeByThirdPayResponse):void} cb
     * @public
     */
    RevokeRechargeByThirdPay(req, cb) {
        let resp = new RevokeRechargeByThirdPayResponse();
        this.request("RevokeRechargeByThirdPay", req, resp, cb);
    }

    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
     * @param {QueryCloudRefundOrderRequest} req
     * @param {function(string, QueryCloudRefundOrderResponse):void} cb
     * @public
     */
    QueryCloudRefundOrder(req, cb) {
        let resp = new QueryCloudRefundOrderResponse();
        this.request("QueryCloudRefundOrder", req, resp, cb);
    }

    /**
     * 云支付-下载机构文件接口
     * @param {DownloadOrgFileRequest} req
     * @param {function(string, DownloadOrgFileResponse):void} cb
     * @public
     */
    DownloadOrgFile(req, cb) {
        let resp = new DownloadOrgFileResponse();
        this.request("DownloadOrgFile", req, resp, cb);
    }

    /**
     * 调用该接口返回对账单下载地址，对账单下载URL通过GET方式访问，返回zip包，解压后为csv格式文件。文件首行如下：
订单号,订单归属日期,机构编号,订单描述,交易类型,订单状态,支付场景,原始金额,折扣金额,实际交易金额,支付渠道优惠金额,抹零金额,币种,下单时间,付款成功时间,商户编号,门店编号,付款方式编号,付款方式名称,商户手续费T1,商户扣率,是否信用卡交易,原始订单号,用户账号,外部订单号,订单备注
     * @param {GetBillDownloadUrlRequest} req
     * @param {function(string, GetBillDownloadUrlResponse):void} cb
     * @public
     */
    GetBillDownloadUrl(req, cb) {
        let resp = new GetBillDownloadUrlResponse();
        this.request("GetBillDownloadUrl", req, resp, cb);
    }

    /**
     * 直播平台-查询批次信息
     * @param {QueryAgentTaxPaymentBatchRequest} req
     * @param {function(string, QueryAgentTaxPaymentBatchResponse):void} cb
     * @public
     */
    QueryAgentTaxPaymentBatch(req, cb) {
        let resp = new QueryAgentTaxPaymentBatchResponse();
        this.request("QueryAgentTaxPaymentBatch", req, resp, cb);
    }

    /**
     * 查询单笔订单交易状态
     * @param {DescribeOrderStatusRequest} req
     * @param {function(string, DescribeOrderStatusResponse):void} cb
     * @public
     */
    DescribeOrderStatus(req, cb) {
        let resp = new DescribeOrderStatusResponse();
        this.request("DescribeOrderStatus", req, resp, cb);
    }

    /**
     * 聚鑫-查询子账户绑定银行卡
     * @param {QueryAcctBindingRequest} req
     * @param {function(string, QueryAcctBindingResponse):void} cb
     * @public
     */
    QueryAcctBinding(req, cb) {
        let resp = new QueryAcctBindingResponse();
        this.request("QueryAcctBinding", req, resp, cb);
    }

    /**
     * 聚鑫-查询会员资金交易信息列表
     * @param {QueryFundsTransactionDetailsRequest} req
     * @param {function(string, QueryFundsTransactionDetailsResponse):void} cb
     * @public
     */
    QueryFundsTransactionDetails(req, cb) {
        let resp = new QueryFundsTransactionDetailsResponse();
        this.request("QueryFundsTransactionDetails", req, resp, cb);
    }

    /**
     * 正常结算提现失败情况下，发起重新提现的请求接口
     * @param {ApplyReWithdrawalRequest} req
     * @param {function(string, ApplyReWithdrawalResponse):void} cb
     * @public
     */
    ApplyReWithdrawal(req, cb) {
        let resp = new ApplyReWithdrawalResponse();
        this.request("ApplyReWithdrawal", req, resp, cb);
    }

    /**
     * 云支付-分账解除分账接收方接口
     * @param {DistributeRemoveReceiverRequest} req
     * @param {function(string, DistributeRemoveReceiverResponse):void} cb
     * @public
     */
    DistributeRemoveReceiver(req, cb) {
        let resp = new DistributeRemoveReceiverResponse();
        this.request("DistributeRemoveReceiver", req, resp, cb);
    }

    /**
     * 跨境-付款人申请。通过该接口提交付款人信息并进行 kyc 审核。
     * @param {ApplyPayerInfoRequest} req
     * @param {function(string, ApplyPayerInfoResponse):void} cb
     * @public
     */
    ApplyPayerInfo(req, cb) {
        let resp = new ApplyPayerInfoResponse();
        this.request("ApplyPayerInfo", req, resp, cb);
    }

    /**
     * 直播平台-文件上传
     * @param {UploadFileRequest} req
     * @param {function(string, UploadFileResponse):void} cb
     * @public
     */
    UploadFile(req, cb) {
        let resp = new UploadFileResponse();
        this.request("UploadFile", req, resp, cb);
    }

    /**
     * 跨境-提交贸易材料。通过提交贸易材料接口可为对接方累计贸易额度，在额度范围内可发起汇兑汇出交易。
     * @param {ApplyTradeRequest} req
     * @param {function(string, ApplyTradeResponse):void} cb
     * @public
     */
    ApplyTrade(req, cb) {
        let resp = new ApplyTradeResponse();
        this.request("ApplyTrade", req, resp, cb);
    }

    /**
     * 云企付-子商户银行卡解绑
     * @param {UnbindOpenBankExternalSubMerchantBankAccountRequest} req
     * @param {function(string, UnbindOpenBankExternalSubMerchantBankAccountResponse):void} cb
     * @public
     */
    UnbindOpenBankExternalSubMerchantBankAccount(req, cb) {
        let resp = new UnbindOpenBankExternalSubMerchantBankAccountResponse();
        this.request("UnbindOpenBankExternalSubMerchantBankAccount", req, resp, cb);
    }

    /**
     * 查询银行在途清算结果。查询时间段内交易网的在途清算结果。
     * @param {QueryBankClearRequest} req
     * @param {function(string, QueryBankClearResponse):void} cb
     * @public
     */
    QueryBankClear(req, cb) {
        let resp = new QueryBankClearResponse();
        this.request("QueryBankClear", req, resp, cb);
    }

    /**
     * 云企付-创建商户
     * @param {CreateOpenBankMerchantRequest} req
     * @param {function(string, CreateOpenBankMerchantResponse):void} cb
     * @public
     */
    CreateOpenBankMerchant(req, cb) {
        let resp = new CreateOpenBankMerchantResponse();
        this.request("CreateOpenBankMerchant", req, resp, cb);
    }

    /**
     * 智慧零售-发票红冲
     * @param {CreateRedInvoiceRequest} req
     * @param {function(string, CreateRedInvoiceResponse):void} cb
     * @public
     */
    CreateRedInvoice(req, cb) {
        let resp = new CreateRedInvoiceResponse();
        this.request("CreateRedInvoice", req, resp, cb);
    }

    /**
     * 登记挂账撤销。此接口可以实现把RegisterBillSupportWithdraw接口完成的登记挂账进行撤销，即调减普通会员子账户的可提现和可用余额，调增挂账子账户的可用余额。
     * @param {RevResigterBillSupportWithdrawRequest} req
     * @param {function(string, RevResigterBillSupportWithdrawResponse):void} cb
     * @public
     */
    RevResigterBillSupportWithdraw(req, cb) {
        let resp = new RevResigterBillSupportWithdrawResponse();
        this.request("RevResigterBillSupportWithdraw", req, resp, cb);
    }

    /**
     * 发起支付等渠道操作后，可以调用该接口查询渠道的数据。
     * @param {QueryCloudChannelDataRequest} req
     * @param {function(string, QueryCloudChannelDataResponse):void} cb
     * @public
     */
    QueryCloudChannelData(req, cb) {
        let resp = new QueryCloudChannelDataResponse();
        this.request("QueryCloudChannelData", req, resp, cb);
    }

    /**
     * 云支付-查询城市编码接口
     * @param {QueryCityCodeRequest} req
     * @param {function(string, QueryCityCodeResponse):void} cb
     * @public
     */
    QueryCityCode(req, cb) {
        let resp = new QueryCityCodeResponse();
        this.request("QueryCityCode", req, resp, cb);
    }

    /**
     * 跨境-成功申报材料查询。查询成功入库的申报材料。
     * @param {QueryApplicationMaterialRequest} req
     * @param {function(string, QueryApplicationMaterialResponse):void} cb
     * @public
     */
    QueryApplicationMaterial(req, cb) {
        let resp = new QueryApplicationMaterialResponse();
        this.request("QueryApplicationMaterial", req, resp, cb);
    }

    /**
     * 如交易订单需退款，可以通过本接口将支付款全部或部分退还给付款方，聚鑫将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。最长支持1年的订单退款。在订单包含多个子订单的情况下，如果使用本接口传入OutTradeNo或TransactionId退款，则只支持全单退款；如果需要部分退款，请通过传入子订单的方式来指定部分金额退款。 
     * @param {RefundRequest} req
     * @param {function(string, RefundResponse):void} cb
     * @public
     */
    Refund(req, cb) {
        let resp = new RefundResponse();
        this.request("Refund", req, resp, cb);
    }

    /**
     * 云企付-关闭订单
     * @param {CloseOpenBankPaymentOrderRequest} req
     * @param {function(string, CloseOpenBankPaymentOrderResponse):void} cb
     * @public
     */
    CloseOpenBankPaymentOrder(req, cb) {
        let resp = new CloseOpenBankPaymentOrderResponse();
        this.request("CloseOpenBankPaymentOrder", req, resp, cb);
    }

    /**
     * 如交易订单需退款，可以通过本接口将支付款全部或部分退还给付款方，聚鑫将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。最长支持1年的订单退款。在订单包含多个子订单的情况下，如果使用本接口传入OutTradeNo或TransactionId退款，则只支持全单退款；如果需要部分退款，请通过传入子订单的方式来指定部分金额退款。 
     * @param {RefundCloudOrderRequest} req
     * @param {function(string, RefundCloudOrderResponse):void} cb
     * @public
     */
    RefundCloudOrder(req, cb) {
        let resp = new RefundCloudOrderResponse();
        this.request("RefundCloudOrder", req, resp, cb);
    }

    /**
     * 云支付-分账授权申请接口
     * @param {DistributeAccreditTlinxRequest} req
     * @param {function(string, DistributeAccreditTlinxResponse):void} cb
     * @public
     */
    DistributeAccreditTlinx(req, cb) {
        let resp = new DistributeAccreditTlinxResponse();
        this.request("DistributeAccreditTlinx", req, resp, cb);
    }

    /**
     * 会员在途充值(经第三方支付渠道)接口
     * @param {RechargeByThirdPayRequest} req
     * @param {function(string, RechargeByThirdPayResponse):void} cb
     * @public
     */
    RechargeByThirdPay(req, cb) {
        let resp = new RechargeByThirdPayResponse();
        this.request("RechargeByThirdPay", req, resp, cb);
    }

    /**
     * 见证宝-会员在途充值(经第三方支付渠道)
     * @param {RechargeMemberThirdPayRequest} req
     * @param {function(string, RechargeMemberThirdPayResponse):void} cb
     * @public
     */
    RechargeMemberThirdPay(req, cb) {
        let resp = new RechargeMemberThirdPayResponse();
        this.request("RechargeMemberThirdPay", req, resp, cb);
    }

    /**
     * 智慧零售-商户注册
     * @param {CreateMerchantRequest} req
     * @param {function(string, CreateMerchantResponse):void} cb
     * @public
     */
    CreateMerchant(req, cb) {
        let resp = new CreateMerchantResponse();
        this.request("CreateMerchant", req, resp, cb);
    }

    /**
     * 子商户入驻聚鑫平台
     * @param {CreateAcctRequest} req
     * @param {function(string, CreateAcctResponse):void} cb
     * @public
     */
    CreateAcct(req, cb) {
        let resp = new CreateAcctResponse();
        this.request("CreateAcct", req, resp, cb);
    }

    /**
     * 会员间交易接口
     * @param {ExecuteMemberTransactionRequest} req
     * @param {function(string, ExecuteMemberTransactionResponse):void} cb
     * @public
     */
    ExecuteMemberTransaction(req, cb) {
        let resp = new ExecuteMemberTransactionResponse();
        this.request("ExecuteMemberTransaction", req, resp, cb);
    }

    /**
     * 云支付-分账结果查询接口
     * @param {DistributeQueryRequest} req
     * @param {function(string, DistributeQueryResponse):void} cb
     * @public
     */
    DistributeQuery(req, cb) {
        let resp = new DistributeQueryResponse();
        this.request("DistributeQuery", req, resp, cb);
    }

    /**
     * 云支付-添加合同接口
     * @param {AddContractRequest} req
     * @param {function(string, AddContractResponse):void} cb
     * @public
     */
    AddContract(req, cb) {
        let resp = new AddContractResponse();
        this.request("AddContract", req, resp, cb);
    }

    /**
     * 灵云-单笔主播转账接口
     * @param {CreateSinglePaymentRequest} req
     * @param {function(string, CreateSinglePaymentResponse):void} cb
     * @public
     */
    CreateSinglePayment(req, cb) {
        let resp = new CreateSinglePaymentResponse();
        this.request("CreateSinglePayment", req, resp, cb);
    }

    /**
     * 登记挂账(支持撤销)
     * @param {RegisterBillRequest} req
     * @param {function(string, RegisterBillResponse):void} cb
     * @public
     */
    RegisterBill(req, cb) {
        let resp = new RegisterBillResponse();
        this.request("RegisterBill", req, resp, cb);
    }

    /**
     * 云企付-查询对账单下载地址
     * @param {QueryOpenBankDownLoadUrlRequest} req
     * @param {function(string, QueryOpenBankDownLoadUrlResponse):void} cb
     * @public
     */
    QueryOpenBankDownLoadUrl(req, cb) {
        let resp = new QueryOpenBankDownLoadUrlResponse();
        this.request("QueryOpenBankDownLoadUrl", req, resp, cb);
    }

    /**
     * 调用该接口返回对账单下载地址，对账单下载URL通过GET方式访问，返回zip包，解压后为csv格式文件。文件首行如下：
商户号,订单号,支付订单号,分账订单总金额,分账详情（通过|分割每笔明细：商户号1#分账金额1|商户号2#分账金额2）,交易手续费承担方商户号,交易手续费,发起时间,分账状态,结算日期,非交易主体分账金额,商户退款订单号,商户分账单号
     * @param {GetDistributeBillDownloadUrlRequest} req
     * @param {function(string, GetDistributeBillDownloadUrlResponse):void} cb
     * @public
     */
    GetDistributeBillDownloadUrl(req, cb) {
        let resp = new GetDistributeBillDownloadUrlResponse();
        this.request("GetDistributeBillDownloadUrl", req, resp, cb);
    }

    /**
     * 云支付-查询订单付款状态
     * @param {QueryOrderStatusRequest} req
     * @param {function(string, QueryOrderStatusResponse):void} cb
     * @public
     */
    QueryOrderStatus(req, cb) {
        let resp = new QueryOrderStatusResponse();
        this.request("QueryOrderStatus", req, resp, cb);
    }

    /**
     * 银企直连-单笔支付状态查询接口
     * @param {QuerySinglePayRequest} req
     * @param {function(string, QuerySinglePayResponse):void} cb
     * @public
     */
    QuerySinglePay(req, cb) {
        let resp = new QuerySinglePayResponse();
        this.request("QuerySinglePay", req, resp, cb);
    }

    /**
     * 跨境-付款人查询
     * @param {QueryPayerInfoRequest} req
     * @param {function(string, QueryPayerInfoResponse):void} cb
     * @public
     */
    QueryPayerInfo(req, cb) {
        let resp = new QueryPayerInfoResponse();
        this.request("QueryPayerInfo", req, resp, cb);
    }

    /**
     * 商户提现
     * @param {ApplyWithdrawalRequest} req
     * @param {function(string, ApplyWithdrawalResponse):void} cb
     * @public
     */
    ApplyWithdrawal(req, cb) {
        let resp = new ApplyWithdrawalResponse();
        this.request("ApplyWithdrawal", req, resp, cb);
    }

    /**
     * 查询充值明细接口
     * @param {DescribeChargeDetailRequest} req
     * @param {function(string, DescribeChargeDetailResponse):void} cb
     * @public
     */
    DescribeChargeDetail(req, cb) {
        let resp = new DescribeChargeDetailResponse();
        this.request("DescribeChargeDetail", req, resp, cb);
    }

    /**
     * 务工卡-查询授权关系
     * @param {GetPayRollAuthRequest} req
     * @param {function(string, GetPayRollAuthResponse):void} cb
     * @public
     */
    GetPayRollAuth(req, cb) {
        let resp = new GetPayRollAuthResponse();
        this.request("GetPayRollAuth", req, resp, cb);
    }

    /**
     * 银企直连-单笔支付接口
     * @param {CreateSinglePayRequest} req
     * @param {function(string, CreateSinglePayResponse):void} cb
     * @public
     */
    CreateSinglePay(req, cb) {
        let resp = new CreateSinglePayResponse();
        this.request("CreateSinglePay", req, resp, cb);
    }

    /**
     * 会员子账户开立。会员在银行注册，并开立会员子账户，交易网会员代码即会员在平台端系统的会员编号。
平台需保存银行返回的子账户账号，后续交易接口都会用到。会员属性字段为预留扩展字段，当前必须送默认值。
     * @param {CreateCustAcctIdRequest} req
     * @param {function(string, CreateCustAcctIdResponse):void} cb
     * @public
     */
    CreateCustAcctId(req, cb) {
        let resp = new CreateCustAcctIdResponse();
        this.request("CreateCustAcctId", req, resp, cb);
    }

    /**
     * 通过此接口关闭此前已创建的订单，关闭后，用户将无法继续付款。仅能关闭创建后未支付的订单
     * @param {CloseOrderRequest} req
     * @param {function(string, CloseOrderResponse):void} cb
     * @public
     */
    CloseOrder(req, cb) {
        let resp = new CloseOrderResponse();
        this.request("CloseOrder", req, resp, cb);
    }

    /**
     * 智慧零售-查询管理端商户
     * @param {QueryMerchantInfoForManagementRequest} req
     * @param {function(string, QueryMerchantInfoForManagementResponse):void} cb
     * @public
     */
    QueryMerchantInfoForManagement(req, cb) {
        let resp = new QueryMerchantInfoForManagementResponse();
        this.request("QueryMerchantInfoForManagement", req, resp, cb);
    }

    /**
     * 撤销会员在途充值(经第三方支付渠道)
     * @param {RevokeMemberRechargeThirdPayRequest} req
     * @param {function(string, RevokeMemberRechargeThirdPayResponse):void} cb
     * @public
     */
    RevokeMemberRechargeThirdPay(req, cb) {
        let resp = new RevokeMemberRechargeThirdPayResponse();
        this.request("RevokeMemberRechargeThirdPay", req, resp, cb);
    }

    /**
     * 云企付-查询支持银行列表
     * @param {QueryOpenBankSupportBankListRequest} req
     * @param {function(string, QueryOpenBankSupportBankListResponse):void} cb
     * @public
     */
    QueryOpenBankSupportBankList(req, cb) {
        let resp = new QueryOpenBankSupportBankListResponse();
        this.request("QueryOpenBankSupportBankList", req, resp, cb);
    }

    /**
     * 云支付-分账撤销接口
     * @param {DistributeCancelRequest} req
     * @param {function(string, DistributeCancelResponse):void} cb
     * @public
     */
    DistributeCancel(req, cb) {
        let resp = new DistributeCancelResponse();
        this.request("DistributeCancel", req, resp, cb);
    }

    /**
     * 获取对账中心账单下载地址的接口
     * @param {DownloadReconciliationUrlRequest} req
     * @param {function(string, DownloadReconciliationUrlResponse):void} cb
     * @public
     */
    DownloadReconciliationUrl(req, cb) {
        let resp = new DownloadReconciliationUrlResponse();
        this.request("DownloadReconciliationUrl", req, resp, cb);
    }

    /**
     * 会员绑定提现账户-银联鉴权。用于会员申请绑定提现账户，申请后银行前往银联验证卡信息：姓名、证件、卡号、银行预留手机是否相符，相符则发送给会员手机动态验证码并返回成功，不相符则返回失败。
平台接收到银行返回成功后，进入输入动态验证码的页面，有效期120秒，若120秒未输入，客户可点击重新发送动态验证码，这个步骤重新调用该接口即可。
平安银行的账户，大小额行号和超级网银号都不用送。
超级网银号：单笔转账金额不超过5万，不限制笔数，只用选XX银行，不用具体到支行，可实时知道对方是否收款成功。
大小额联行号：单笔转账可超过5万，需具体到支行，不能实时知道对方是否收款成功。金额超过5万的，在工作日的8点30-17点间才会成功。
     * @param {BindRelateAcctUnionPayRequest} req
     * @param {function(string, BindRelateAcctUnionPayResponse):void} cb
     * @public
     */
    BindRelateAcctUnionPay(req, cb) {
        let resp = new BindRelateAcctUnionPayResponse();
        this.request("BindRelateAcctUnionPay", req, resp, cb);
    }

    /**
     * 会员间交易-不验证。此接口可以实现会员间的余额的交易，实现资金在会员之间流动。
     * @param {QueryMemberTransactionRequest} req
     * @param {function(string, QueryMemberTransactionResponse):void} cb
     * @public
     */
    QueryMemberTransaction(req, cb) {
        let resp = new QueryMemberTransactionResponse();
        this.request("QueryMemberTransaction", req, resp, cb);
    }

    /**
     * 云支付-查询已添加分账接收方接口
     * @param {DistributeQueryReceiverRequest} req
     * @param {function(string, DistributeQueryReceiverResponse):void} cb
     * @public
     */
    DistributeQueryReceiver(req, cb) {
        let resp = new DistributeQueryReceiverResponse();
        this.request("DistributeQueryReceiver", req, resp, cb);
    }

    /**
     * 灵云-批量转账结果查询
     * @param {QueryBatchPaymentResultRequest} req
     * @param {function(string, QueryBatchPaymentResultResponse):void} cb
     * @public
     */
    QueryBatchPaymentResult(req, cb) {
        let resp = new QueryBatchPaymentResultResponse();
        this.request("QueryBatchPaymentResult", req, resp, cb);
    }

    /**
     * 获取单笔代发转账对账单下载URL
     * @param {QueryBillDownloadURLRequest} req
     * @param {function(string, QueryBillDownloadURLResponse):void} cb
     * @public
     */
    QueryBillDownloadURL(req, cb) {
        let resp = new QueryBillDownloadURLResponse();
        this.request("QueryBillDownloadURL", req, resp, cb);
    }

    /**
     * 智慧零售-发票开具
     * @param {CreateInvoiceRequest} req
     * @param {function(string, CreateInvoiceResponse):void} cb
     * @public
     */
    CreateInvoice(req, cb) {
        let resp = new CreateInvoiceResponse();
        this.request("CreateInvoice", req, resp, cb);
    }

    /**
     * 云企付-单笔交易回单申请结果查询
     * @param {QueryOpenBankOrderDetailReceiptInfoRequest} req
     * @param {function(string, QueryOpenBankOrderDetailReceiptInfoResponse):void} cb
     * @public
     */
    QueryOpenBankOrderDetailReceiptInfo(req, cb) {
        let resp = new QueryOpenBankOrderDetailReceiptInfoResponse();
        this.request("QueryOpenBankOrderDetailReceiptInfo", req, resp, cb);
    }

    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
     * @param {QueryRefundRequest} req
     * @param {function(string, QueryRefundResponse):void} cb
     * @public
     */
    QueryRefund(req, cb) {
        let resp = new QueryRefundResponse();
        this.request("QueryRefund", req, resp, cb);
    }

    /**
     * 云支付-分账添加分账接收方接口
     * @param {DistributeAddReceiverRequest} req
     * @param {function(string, DistributeAddReceiverResponse):void} cb
     * @public
     */
    DistributeAddReceiver(req, cb) {
        let resp = new DistributeAddReceiverResponse();
        this.request("DistributeAddReceiver", req, resp, cb);
    }

    /**
     * 会员间交易退款
     * @param {RefundMemberTransactionRequest} req
     * @param {function(string, RefundMemberTransactionResponse):void} cb
     * @public
     */
    RefundMemberTransaction(req, cb) {
        let resp = new RefundMemberTransactionResponse();
        this.request("RefundMemberTransaction", req, resp, cb);
    }

    /**
     * 云支付-添加商户接口
     * @param {AddMerchantRequest} req
     * @param {function(string, AddMerchantResponse):void} cb
     * @public
     */
    AddMerchant(req, cb) {
        let resp = new AddMerchantResponse();
        this.request("AddMerchant", req, resp, cb);
    }

    /**
     * 云企付-子商户银行卡列表查询
     * @param {QueryOpenBankExternalSubMerchantBankAccountRequest} req
     * @param {function(string, QueryOpenBankExternalSubMerchantBankAccountResponse):void} cb
     * @public
     */
    QueryOpenBankExternalSubMerchantBankAccount(req, cb) {
        let resp = new QueryOpenBankExternalSubMerchantBankAccountResponse();
        this.request("QueryOpenBankExternalSubMerchantBankAccount", req, resp, cb);
    }

    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时。
     * @param {MigrateOrderRefundQueryRequest} req
     * @param {function(string, MigrateOrderRefundQueryResponse):void} cb
     * @public
     */
    MigrateOrderRefundQuery(req, cb) {
        let resp = new MigrateOrderRefundQueryResponse();
        this.request("MigrateOrderRefundQuery", req, resp, cb);
    }

    /**
     * 云支付-查询门店明细接口
     * @param {ViewShopRequest} req
     * @param {function(string, ViewShopResponse):void} cb
     * @public
     */
    ViewShop(req, cb) {
        let resp = new ViewShopResponse();
        this.request("ViewShop", req, resp, cb);
    }

    /**
     * 通过此接口查询签约数据
     * @param {QueryContractRequest} req
     * @param {function(string, QueryContractResponse):void} cb
     * @public
     */
    QueryContract(req, cb) {
        let resp = new QueryContractResponse();
        this.request("QueryContract", req, resp, cb);
    }

    /**
     * 跨境-汇出指令申请。通过该接口可将对接方账户中的人民币余额汇兑成外币，再汇出至指定银行账户。
     * @param {ApplyOutwardOrderRequest} req
     * @param {function(string, ApplyOutwardOrderResponse):void} cb
     * @public
     */
    ApplyOutwardOrder(req, cb) {
        let resp = new ApplyOutwardOrderResponse();
        this.request("ApplyOutwardOrder", req, resp, cb);
    }

    /**
     * 云企付-子商户进件结果查询
     * @param {QueryOpenBankExternalSubMerchantRegistrationRequest} req
     * @param {function(string, QueryOpenBankExternalSubMerchantRegistrationResponse):void} cb
     * @public
     */
    QueryOpenBankExternalSubMerchantRegistration(req, cb) {
        let resp = new QueryOpenBankExternalSubMerchantRegistrationResponse();
        this.request("QueryOpenBankExternalSubMerchantRegistration", req, resp, cb);
    }

    /**
     * 应用需要先调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
     * @param {UnifiedCloudOrderRequest} req
     * @param {function(string, UnifiedCloudOrderResponse):void} cb
     * @public
     */
    UnifiedCloudOrder(req, cb) {
        let resp = new UnifiedCloudOrderResponse();
        this.request("UnifiedCloudOrder", req, resp, cb);
    }

    /**
     * 云支付-查询支付方式费率及自定义表单项接口
     * @param {QueryContractPayFeeRequest} req
     * @param {function(string, QueryContractPayFeeResponse):void} cb
     * @public
     */
    QueryContractPayFee(req, cb) {
        let resp = new QueryContractPayFeeResponse();
        this.request("QueryContractPayFee", req, resp, cb);
    }

    /**
     * 查询小额鉴权转账结果。查询小额往账鉴权的转账状态。
     * @param {QuerySmallAmountTransferRequest} req
     * @param {function(string, QuerySmallAmountTransferResponse):void} cb
     * @public
     */
    QuerySmallAmountTransfer(req, cb) {
        let resp = new QuerySmallAmountTransferResponse();
        this.request("QuerySmallAmountTransfer", req, resp, cb);
    }

    /**
     * 云企付-子商户银行卡绑定结果查询
     * @param {QueryOpenBankBindExternalSubMerchantBankAccountRequest} req
     * @param {function(string, QueryOpenBankBindExternalSubMerchantBankAccountResponse):void} cb
     * @public
     */
    QueryOpenBankBindExternalSubMerchantBankAccount(req, cb) {
        let resp = new QueryOpenBankBindExternalSubMerchantBankAccountResponse();
        this.request("QueryOpenBankBindExternalSubMerchantBankAccount", req, resp, cb);
    }

    /**
     * 第三方子商户电子记账本创建接口
     * @param {CreateOpenBankExternalSubMerchantAccountBookRequest} req
     * @param {function(string, CreateOpenBankExternalSubMerchantAccountBookResponse):void} cb
     * @public
     */
    CreateOpenBankExternalSubMerchantAccountBook(req, cb) {
        let resp = new CreateOpenBankExternalSubMerchantAccountBookResponse();
        this.request("CreateOpenBankExternalSubMerchantAccountBook", req, resp, cb);
    }

    /**
     * 查询银行单笔交易状态。查询单笔交易的状态。
     * @param {QuerySingleTransactionStatusRequest} req
     * @param {function(string, QuerySingleTransactionStatusResponse):void} cb
     * @public
     */
    QuerySingleTransactionStatus(req, cb) {
        let resp = new QuerySingleTransactionStatusResponse();
        this.request("QuerySingleTransactionStatus", req, resp, cb);
    }

    /**
     * 通过商家批次单号或者微信批次号查询批次单
     * @param {QueryTransferBatchRequest} req
     * @param {function(string, QueryTransferBatchResponse):void} cb
     * @public
     */
    QueryTransferBatch(req, cb) {
        let resp = new QueryTransferBatchResponse();
        this.request("QueryTransferBatch", req, resp, cb);
    }

    /**
     * 通过此接口进行解约
     * @param {TerminateContractRequest} req
     * @param {function(string, TerminateContractResponse):void} cb
     * @public
     */
    TerminateContract(req, cb) {
        let resp = new TerminateContractResponse();
        this.request("TerminateContract", req, resp, cb);
    }

    /**
     * 云企付-子商户银行卡余额查询
     * @param {QueryOpenBankBankAccountBalanceRequest} req
     * @param {function(string, QueryOpenBankBankAccountBalanceResponse):void} cb
     * @public
     */
    QueryOpenBankBankAccountBalance(req, cb) {
        let resp = new QueryOpenBankBankAccountBalanceResponse();
        this.request("QueryOpenBankBankAccountBalance", req, resp, cb);
    }

    /**
     * 聚鑫-开户信息列表查询, 查询某一段时间的开户信息
     * @param {QueryAcctInfoListRequest} req
     * @param {function(string, QueryAcctInfoListResponse):void} cb
     * @public
     */
    QueryAcctInfoList(req, cb) {
        let resp = new QueryAcctInfoListResponse();
        this.request("QueryAcctInfoList", req, resp, cb);
    }

    /**
     * 直播平台-查询代理商结算单链接
     * @param {QueryAgentStatementsRequest} req
     * @param {function(string, QueryAgentStatementsResponse):void} cb
     * @public
     */
    QueryAgentStatements(req, cb) {
        let resp = new QueryAgentStatementsResponse();
        this.request("QueryAgentStatements", req, resp, cb);
    }

    /**
     * 查询对账文件信息。平台调用该接口获取需下载对账文件的文件名称以及密钥。 平台获取到信息后， 可以再调用OPENAPI的文件下载功能。
     * @param {QueryReconciliationDocumentRequest} req
     * @param {function(string, QueryReconciliationDocumentResponse):void} cb
     * @public
     */
    QueryReconciliationDocument(req, cb) {
        let resp = new QueryReconciliationDocumentResponse();
        this.request("QueryReconciliationDocument", req, resp, cb);
    }

    /**
     * 通过此接口关闭此前已创建的订单。关闭后，用户将无法继续付款，仅能关闭创建后未支付的订单。
     * @param {CloseCloudOrderRequest} req
     * @param {function(string, CloseCloudOrderResponse):void} cb
     * @public
     */
    CloseCloudOrder(req, cb) {
        let resp = new CloseCloudOrderResponse();
        this.request("CloseCloudOrder", req, resp, cb);
    }

    /**
     * 灵云-查询超额信息
     * @param {QueryExceedingInfoRequest} req
     * @param {function(string, QueryExceedingInfoResponse):void} cb
     * @public
     */
    QueryExceedingInfo(req, cb) {
        let resp = new QueryExceedingInfoResponse();
        this.request("QueryExceedingInfo", req, resp, cb);
    }

    /**
     * 云鉴-消费订单退款的接口
     * @param {RefundOrderRequest} req
     * @param {function(string, RefundOrderResponse):void} cb
     * @public
     */
    RefundOrder(req, cb) {
        let resp = new RefundOrderResponse();
        this.request("RefundOrder", req, resp, cb);
    }


}
module.exports = CpdpClient;

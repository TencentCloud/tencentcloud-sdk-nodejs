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
const QueryInvoiceResponse = models.QueryInvoiceResponse;
const ApplyTradeRequest = models.ApplyTradeRequest;
const QueryOutwardOrderResponse = models.QueryOutwardOrderResponse;
const QueryExchangeRateResponse = models.QueryExchangeRateResponse;
const UnifiedOrderInSubOrderList = models.UnifiedOrderInSubOrderList;
const QueryAcctBindingRequest = models.QueryAcctBindingRequest;
const ModifyMntMbrBindRelateAcctBankCodeRequest = models.ModifyMntMbrBindRelateAcctBankCodeRequest;
const CreateMerchantResult = models.CreateMerchantResult;
const ApplyPayerInfoResponse = models.ApplyPayerInfoResponse;
const RevokeRechargeByThirdPayRequest = models.RevokeRechargeByThirdPayRequest;
const QueryTradeRequest = models.QueryTradeRequest;
const UnifiedOrderResponse = models.UnifiedOrderResponse;
const QueryBankWithdrawCashDetailsRequest = models.QueryBankWithdrawCashDetailsRequest;
const ApplyPayerinfoResult = models.ApplyPayerinfoResult;
const QueryCustAcctIdBalanceRequest = models.QueryCustAcctIdBalanceRequest;
const QueryPayerInfoResponse = models.QueryPayerInfoResponse;
const WithdrawItem = models.WithdrawItem;
const BindAcctRequest = models.BindAcctRequest;
const ReviseMbrPropertyRequest = models.ReviseMbrPropertyRequest;
const WithdrawCashMembershipRequest = models.WithdrawCashMembershipRequest;
const RevResigterBillSupportWithdrawRequest = models.RevResigterBillSupportWithdrawRequest;
const CreateInvoiceResponse = models.CreateInvoiceResponse;
const AgentTaxPayment = models.AgentTaxPayment;
const QueryOutwardOrderRequest = models.QueryOutwardOrderRequest;
const QueryAnchorContractInfoRequest = models.QueryAnchorContractInfoRequest;
const CreateRedInvoiceResult = models.CreateRedInvoiceResult;
const QueryBankWithdrawCashDetailsResponse = models.QueryBankWithdrawCashDetailsResponse;
const QueryItem = models.QueryItem;
const ApplyTradeResult = models.ApplyTradeResult;
const RefundOutSubOrderRefundList = models.RefundOutSubOrderRefundList;
const UnbindRelateAcctRequest = models.UnbindRelateAcctRequest;
const ExecuteMemberTransactionResponse = models.ExecuteMemberTransactionResponse;
const CreateMerchantRequest = models.CreateMerchantRequest;
const ApplyDeclareResult = models.ApplyDeclareResult;
const DeleteAgentTaxPaymentInfoRequest = models.DeleteAgentTaxPaymentInfoRequest;
const QueryInvoiceResult = models.QueryInvoiceResult;
const QueryAcctBindingResponse = models.QueryAcctBindingResponse;
const QueryCommonTransferRechargeResponse = models.QueryCommonTransferRechargeResponse;
const QueryTradeData = models.QueryTradeData;
const ApplyReWithdrawalResponse = models.ApplyReWithdrawalResponse;
const ModifyAgentTaxPaymentInfoResponse = models.ModifyAgentTaxPaymentInfoResponse;
const RegisterBillRequest = models.RegisterBillRequest;
const CreateInvoiceItem = models.CreateInvoiceItem;
const ApplyOutwardOrderData = models.ApplyOutwardOrderData;
const RevokeRechargeByThirdPayResponse = models.RevokeRechargeByThirdPayResponse;
const ReviseMbrPropertyResponse = models.ReviseMbrPropertyResponse;
const CreateAcctRequest = models.CreateAcctRequest;
const CreateAgentTaxPaymentInfosRequest = models.CreateAgentTaxPaymentInfosRequest;
const Acct = models.Acct;
const CloseOrderResponse = models.CloseOrderResponse;
const ApplyPayerinfoData = models.ApplyPayerinfoData;
const CreateRedInvoiceItem = models.CreateRedInvoiceItem;
const CheckAcctRequest = models.CheckAcctRequest;
const CheckAmountResponse = models.CheckAmountResponse;
const QueryOrderOutSubOrderList = models.QueryOrderOutSubOrderList;
const QueryOutwardOrderResult = models.QueryOutwardOrderResult;
const CreateAgentTaxPaymentInfosResponse = models.CreateAgentTaxPaymentInfosResponse;
const QueryPayerInfoRequest = models.QueryPayerInfoRequest;
const QueryMerchantInfoForManagementResponse = models.QueryMerchantInfoForManagementResponse;
const QuerySingleTransactionStatusRequest = models.QuerySingleTransactionStatusRequest;
const MerchantManagementList = models.MerchantManagementList;
const CreateInvoiceResult = models.CreateInvoiceResult;
const DescribeOrderStatusRequest = models.DescribeOrderStatusRequest;
const QueryMerchantBalanceResult = models.QueryMerchantBalanceResult;
const QueryCustAcctIdBalanceResponse = models.QueryCustAcctIdBalanceResponse;
const QueryTradeResponse = models.QueryTradeResponse;
const DownloadBillResponse = models.DownloadBillResponse;
const RevokeMemberRechargeThirdPayResponse = models.RevokeMemberRechargeThirdPayResponse;
const CreateRedInvoiceRequest = models.CreateRedInvoiceRequest;
const QueryAcctInfoListResponse = models.QueryAcctInfoListResponse;
const DeleteAgentTaxPaymentInfosRequest = models.DeleteAgentTaxPaymentInfosRequest;
const QueryAcctInfoListRequest = models.QueryAcctInfoListRequest;
const BindRelateAcctUnionPayRequest = models.BindRelateAcctUnionPayRequest;
const CreateInvoiceResultData = models.CreateInvoiceResultData;
const QueryAgentTaxPaymentBatchResponse = models.QueryAgentTaxPaymentBatchResponse;
const DeleteAgentTaxPaymentInfosResponse = models.DeleteAgentTaxPaymentInfosResponse;
const RegisterBillSupportWithdrawResponse = models.RegisterBillSupportWithdrawResponse;
const QuerySmallAmountTransferResponse = models.QuerySmallAmountTransferResponse;
const CreateRedInvoiceResponse = models.CreateRedInvoiceResponse;
const QueryInvoiceResultData = models.QueryInvoiceResultData;
const RechargeByThirdPayRequest = models.RechargeByThirdPayRequest;
const QuerySingleTransactionStatusResponse = models.QuerySingleTransactionStatusResponse;
const QueryAcctInfoRequest = models.QueryAcctInfoRequest;
const DescribeChargeDetailResponse = models.DescribeChargeDetailResponse;
const ApplyDeclareData = models.ApplyDeclareData;
const TranItem = models.TranItem;
const ClearItem = models.ClearItem;
const MerchantManagementResult = models.MerchantManagementResult;
const ApplyWithdrawalResponse = models.ApplyWithdrawalResponse;
const QueryBankTransactionDetailsResponse = models.QueryBankTransactionDetailsResponse;
const QueryPayerinfoData = models.QueryPayerinfoData;
const QueryMerchantBalanceData = models.QueryMerchantBalanceData;
const QueryMemberTransactionRequest = models.QueryMemberTransactionRequest;
const QueryExchangerateResult = models.QueryExchangerateResult;
const QueryOrderResponse = models.QueryOrderResponse;
const QueryMerchantBalanceRequest = models.QueryMerchantBalanceRequest;
const CreateAcctResponse = models.CreateAcctResponse;
const DescribeChargeDetailRequest = models.DescribeChargeDetailRequest;
const BindAcctResponse = models.BindAcctResponse;
const QueryExchangerateData = models.QueryExchangerateData;
const WithdrawBill = models.WithdrawBill;
const QueryRefundRequest = models.QueryRefundRequest;
const BindRelateAccReUnionPayRequest = models.BindRelateAccReUnionPayRequest;
const CreateCustAcctIdResponse = models.CreateCustAcctIdResponse;
const QueryMerchantBalanceResponse = models.QueryMerchantBalanceResponse;
const QueryAcctInfoResponse = models.QueryAcctInfoResponse;
const QueryAgentTaxPaymentBatchRequest = models.QueryAgentTaxPaymentBatchRequest;
const QueryPayerinfoResult = models.QueryPayerinfoResult;
const TransferItem = models.TransferItem;
const OrderItem = models.OrderItem;
const RefundMemberTransactionRequest = models.RefundMemberTransactionRequest;
const QueryMemberBindResponse = models.QueryMemberBindResponse;
const RegisterBillResponse = models.RegisterBillResponse;
const ApplyOutwardOrderRequest = models.ApplyOutwardOrderRequest;
const UnbindRelateAcctResponse = models.UnbindRelateAcctResponse;
const RechargeByThirdPayResponse = models.RechargeByThirdPayResponse;
const CheckAmountRequest = models.CheckAmountRequest;
const ApplyReWithdrawalRequest = models.ApplyReWithdrawalRequest;
const AgentTaxPaymentBatch = models.AgentTaxPaymentBatch;
const CreateInvoiceRequest = models.CreateInvoiceRequest;
const QueryTradeResult = models.QueryTradeResult;
const AnchorContractInfo = models.AnchorContractInfo;
const RegisterBillSupportWithdrawRequest = models.RegisterBillSupportWithdrawRequest;
const QueryDeclareResult = models.QueryDeclareResult;
const CreateCustAcctIdRequest = models.CreateCustAcctIdRequest;
const UnBindAcctResponse = models.UnBindAcctResponse;
const RechargeMemberThirdPayResponse = models.RechargeMemberThirdPayResponse;
const QueryOrderOutOrderList = models.QueryOrderOutOrderList;
const QueryCommonTransferRechargeRequest = models.QueryCommonTransferRechargeRequest;
const QueryAgentStatementsResponse = models.QueryAgentStatementsResponse;
const QueryOrderRequest = models.QueryOrderRequest;
const CloseOrderRequest = models.CloseOrderRequest;
const RevResigterBillSupportWithdrawResponse = models.RevResigterBillSupportWithdrawResponse;
const QueryBalanceResponse = models.QueryBalanceResponse;
const QueryOutwardOrderData = models.QueryOutwardOrderData;
const TransactionItem = models.TransactionItem;
const CheckAcctResponse = models.CheckAcctResponse;
const QueryReconciliationDocumentResponse = models.QueryReconciliationDocumentResponse;
const QueryApplicationMaterialResponse = models.QueryApplicationMaterialResponse;
const CreateMerchantResultData = models.CreateMerchantResultData;
const QueryExchangeRateRequest = models.QueryExchangeRateRequest;
const QueryMerchantInfoForManagementRequest = models.QueryMerchantInfoForManagementRequest;
const FileItem = models.FileItem;
const RechargeMemberThirdPayRequest = models.RechargeMemberThirdPayRequest;
const ApplyOutwardOrderResult = models.ApplyOutwardOrderResult;
const ApplyPayerInfoRequest = models.ApplyPayerInfoRequest;
const RefundMemberTransactionResponse = models.RefundMemberTransactionResponse;
const QueryBankClearRequest = models.QueryBankClearRequest;
const QueryInvoiceRequest = models.QueryInvoiceRequest;
const ApplyApplicationMaterialResponse = models.ApplyApplicationMaterialResponse;
const QueryBankTransactionDetailsRequest = models.QueryBankTransactionDetailsRequest;
const DownloadBillRequest = models.DownloadBillRequest;
const RevokeMemberRechargeThirdPayRequest = models.RevokeMemberRechargeThirdPayRequest;
const ExecuteMemberTransactionRequest = models.ExecuteMemberTransactionRequest;
const RefundResponse = models.RefundResponse;
const ApplyTradeResponse = models.ApplyTradeResponse;
const QueryBankClearResponse = models.QueryBankClearResponse;
const ApplyOutwardOrderResponse = models.ApplyOutwardOrderResponse;
const DescribeOrderStatusResponse = models.DescribeOrderStatusResponse;
const WithdrawCashMembershipResponse = models.WithdrawCashMembershipResponse;
const QueryApplicationMaterialRequest = models.QueryApplicationMaterialRequest;
const CreateMerchantResponse = models.CreateMerchantResponse;
const QueryMemberTransactionResponse = models.QueryMemberTransactionResponse;
const ApplyTradeData = models.ApplyTradeData;
const ApplyApplicationMaterialRequest = models.ApplyApplicationMaterialRequest;
const QueryAcctItem = models.QueryAcctItem;
const ModifyAgentTaxPaymentInfoRequest = models.ModifyAgentTaxPaymentInfoRequest;
const QuerySmallAmountTransferRequest = models.QuerySmallAmountTransferRequest;
const BindRelateAcctSmallAmountResponse = models.BindRelateAcctSmallAmountResponse;
const ModifyMntMbrBindRelateAcctBankCodeResponse = models.ModifyMntMbrBindRelateAcctBankCodeResponse;
const QueryBalanceRequest = models.QueryBalanceRequest;
const ApplyWithdrawalRequest = models.ApplyWithdrawalRequest;
const CreateRedInvoiceResultData = models.CreateRedInvoiceResultData;
const BindRelateAcctSmallAmountRequest = models.BindRelateAcctSmallAmountRequest;
const QueryRefundResponse = models.QueryRefundResponse;
const Order = models.Order;
const QueryDeclareData = models.QueryDeclareData;
const QueryMemberBindRequest = models.QueryMemberBindRequest;
const QueryAgentStatementsRequest = models.QueryAgentStatementsRequest;
const BindRelateAcctUnionPayResponse = models.BindRelateAcctUnionPayResponse;
const QueryReconciliationDocumentRequest = models.QueryReconciliationDocumentRequest;
const UnifiedOrderRequest = models.UnifiedOrderRequest;
const UnBindAcctRequest = models.UnBindAcctRequest;
const QueryAnchorContractInfoResponse = models.QueryAnchorContractInfoResponse;
const DeleteAgentTaxPaymentInfoResponse = models.DeleteAgentTaxPaymentInfoResponse;
const RefundRequest = models.RefundRequest;
const BindRelateAccReUnionPayResponse = models.BindRelateAccReUnionPayResponse;
const BankCardItem = models.BankCardItem;


/**
 * cpdp client
 * @class
 */
class CpdpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cpdp.tencentcloudapi.com", "2019-08-20", credential, region, profile);
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
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
     * @param {QueryRefundRequest} req
     * @param {function(string, QueryRefundResponse):void} cb
     * @public
     */
    QueryRefund(req, cb) {
        let resp = new QueryRefundResponse();
        this.request("QueryRefund", req, resp, cb);
    }


}
module.exports = CpdpClient;

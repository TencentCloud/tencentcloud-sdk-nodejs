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
const CheckAcctRequest = models.CheckAcctRequest;
const QueryOrderRequest = models.QueryOrderRequest;
const CheckAmountResponse = models.CheckAmountResponse;
const QueryOrderOutOrderList = models.QueryOrderOutOrderList;
const UnBindAcctRequest = models.UnBindAcctRequest;
const Acct = models.Acct;
const RevRegisterBillSupportWithdrawResponse = models.RevRegisterBillSupportWithdrawResponse;
const BindAcctResponse = models.BindAcctResponse;
const CreateAcctResponse = models.CreateAcctResponse;
const QuerySingleTransactionStatusRequest = models.QuerySingleTransactionStatusRequest;
const UnifiedOrderInSubOrderList = models.UnifiedOrderInSubOrderList;
const QuerySmallAmountTransferRequest = models.QuerySmallAmountTransferRequest;
const QueryBankClearRequest = models.QueryBankClearRequest;
const ModifyMntMbrBindRelateAcctBankCodeRequest = models.ModifyMntMbrBindRelateAcctBankCodeRequest;
const RevokeMemberRechargeThirdPayResponse = models.RevokeMemberRechargeThirdPayResponse;
const BindRelateAccReUnionPayRequest = models.BindRelateAccReUnionPayRequest;
const CreateCustAcctIdResponse = models.CreateCustAcctIdResponse;
const QueryBankTransactionDetailsRequest = models.QueryBankTransactionDetailsRequest;
const RefundResponse = models.RefundResponse;
const UnifiedOrderResponse = models.UnifiedOrderResponse;
const DownloadBillRequest = models.DownloadBillRequest;
const QueryBankWithdrawCashDetailsRequest = models.QueryBankWithdrawCashDetailsRequest;
const RevRegisterBillSupportWithdrawRequest = models.RevRegisterBillSupportWithdrawRequest;
const QueryCustAcctIdBalanceResponse = models.QueryCustAcctIdBalanceResponse;
const QueryCustAcctIdBalanceRequest = models.QueryCustAcctIdBalanceRequest;
const DownloadBillResponse = models.DownloadBillResponse;
const RechargeMemberThirdPayResponse = models.RechargeMemberThirdPayResponse;
const BindAcctRequest = models.BindAcctRequest;
const ReviseMbrPropertyRequest = models.ReviseMbrPropertyRequest;
const WithdrawCashMembershipResponse = models.WithdrawCashMembershipResponse;
const QueryBankWithdrawCashDetailsResponse = models.QueryBankWithdrawCashDetailsResponse;
const TransferItem = models.TransferItem;
const RegisterBillSupportWithdrawResponse = models.RegisterBillSupportWithdrawResponse;
const WithdrawCashMembershipRequest = models.WithdrawCashMembershipRequest;
const QueryReconciliationDocumentRequest = models.QueryReconciliationDocumentRequest;
const UnbindRelateAcctResponse = models.UnbindRelateAcctResponse;
const BindRelateAcctUnionPayRequest = models.BindRelateAcctUnionPayRequest;
const CheckAmountRequest = models.CheckAmountRequest;
const CreateAcctRequest = models.CreateAcctRequest;
const RechargeMemberThirdPayRequest = models.RechargeMemberThirdPayRequest;
const QueryMemberBindRequest = models.QueryMemberBindRequest;
const BindRelateAcctSmallAmountResponse = models.BindRelateAcctSmallAmountResponse;
const QueryMemberTransactionResponse = models.QueryMemberTransactionResponse;
const RegisterBillSupportWithdrawRequest = models.RegisterBillSupportWithdrawRequest;
const RefundOutSubOrderRefundList = models.RefundOutSubOrderRefundList;
const UnbindRelateAcctRequest = models.UnbindRelateAcctRequest;
const ModifyMntMbrBindRelateAcctBankCodeResponse = models.ModifyMntMbrBindRelateAcctBankCodeResponse;
const QueryBalanceRequest = models.QueryBalanceRequest;
const QuerySmallAmountTransferResponse = models.QuerySmallAmountTransferResponse;
const ApplyWithdrawalRequest = models.ApplyWithdrawalRequest;
const QueryRefundRequest = models.QueryRefundRequest;
const CreateCustAcctIdRequest = models.CreateCustAcctIdRequest;
const QueryBankClearResponse = models.QueryBankClearResponse;
const BindRelateAcctSmallAmountRequest = models.BindRelateAcctSmallAmountRequest;
const QueryRefundResponse = models.QueryRefundResponse;
const UnBindAcctResponse = models.UnBindAcctResponse;
const QuerySingleTransactionStatusResponse = models.QuerySingleTransactionStatusResponse;
const QueryMemberBindResponse = models.QueryMemberBindResponse;
const QueryCommonTransferRechargeRequest = models.QueryCommonTransferRechargeRequest;
const QueryItem = models.QueryItem;
const TranItem = models.TranItem;
const ClearItem = models.ClearItem;
const BindRelateAcctUnionPayResponse = models.BindRelateAcctUnionPayResponse;
const CloseOrderRequest = models.CloseOrderRequest;
const ApplyWithdrawalResponse = models.ApplyWithdrawalResponse;
const QueryBalanceResponse = models.QueryBalanceResponse;
const QueryBankTransactionDetailsResponse = models.QueryBankTransactionDetailsResponse;
const QueryOrderOutSubOrderList = models.QueryOrderOutSubOrderList;
const ReviseMbrPropertyResponse = models.ReviseMbrPropertyResponse;
const UnifiedOrderRequest = models.UnifiedOrderRequest;
const QueryCommonTransferRechargeResponse = models.QueryCommonTransferRechargeResponse;
const RevokeMemberRechargeThirdPayRequest = models.RevokeMemberRechargeThirdPayRequest;
const QueryMemberTransactionRequest = models.QueryMemberTransactionRequest;
const TransactionItem = models.TransactionItem;
const CheckAcctResponse = models.CheckAcctResponse;
const QueryReconciliationDocumentResponse = models.QueryReconciliationDocumentResponse;
const QueryOrderResponse = models.QueryOrderResponse;
const RefundRequest = models.RefundRequest;
const BindRelateAccReUnionPayResponse = models.BindRelateAccReUnionPayResponse;
const CloseOrderResponse = models.CloseOrderResponse;
const FileItem = models.FileItem;
const WithdrawItem = models.WithdrawItem;


/**
 * cpdp client
 * @class
 */
class CpdpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cpdp.tencentcloudapi.com", "2019-08-20", credential, region, profile);
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
     * 登记挂账撤销。此接口可以实现把RegisterBillSupportWithdraw接口完成的登记挂账进行撤销，即调减普通会员子账户的可提现和可用余额，调增挂账子账户的可用余额。
     * @param {RevRegisterBillSupportWithdrawRequest} req
     * @param {function(string, RevRegisterBillSupportWithdrawResponse):void} cb
     * @public
     */
    RevRegisterBillSupportWithdraw(req, cb) {
        let resp = new RevRegisterBillSupportWithdrawResponse();
        this.request("RevRegisterBillSupportWithdraw", req, resp, cb);
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


}
module.exports = CpdpClient;

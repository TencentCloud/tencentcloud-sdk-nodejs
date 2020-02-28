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
const AbstractModel = require("../../common/abstract_model");

/**
 * CheckAcct请求参数结构体
 * @class
 */
class CheckAcctRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 1：小额鉴权
2：短信校验鉴权
         * @type {number || null}
         */
        this.BindType = null;

        /**
         * 结算账户账号
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.SettleAcctNo = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 短信验证码
BindType==2必填
         * @type {string || null}
         */
        this.CheckCode = null;

        /**
         * 币种 RMB
BindType==1必填
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 单位
1：元，2：角，3：分
BindType==1必填
         * @type {number || null}
         */
        this.CurrencyUnit = null;

        /**
         * 金额
BindType==1必填
         * @type {string || null}
         */
        this.CurrencyAmt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.SettleAcctNo = 'SettleAcctNo' in params ? params.SettleAcctNo : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.CurrencyUnit = 'CurrencyUnit' in params ? params.CurrencyUnit : null;
        this.CurrencyAmt = 'CurrencyAmt' in params ? params.CurrencyAmt : null;

    }
}

/**
 * QueryOrder请求参数结构体
 * @class
 */
class QueryOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主 MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户ID，长度不小于5位， 仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * type=by_order根据订单号 查订单；
type=by_user根据用户id 查订单 。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 每页返回的记录数。根据用户 号码查询订单列表时需要传。 用于分页展示。Type=by_order时必填
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 记录数偏移量，默认从0开 始。根据用户号码查询订单列 表时需要传。用于分页展示。Type=by_order时必填
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询开始时间，Unix时间戳。Type=by_order时必填
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 查询结束时间，Unix时间戳。Type=by_order时必填
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 业务订单号，OutTradeNo与 TransactionId不能同时为 空，都传优先使用 OutTradeNo
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 聚鑫订单号，OutTradeNo与 TransactionId不能同时为 空，都传优先使用 OutTradeNo
         * @type {string || null}
         */
        this.TransactionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;

    }
}

/**
 * CheckAmount返回参数结构体
 * @class
 */
class CheckAmountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(52)，见证系统流水号（即电商见证宝系统生成的流水号，可关联具体一笔请求）
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询订单接口的出参，订单列表
 * @class
 */
class QueryOrderOutOrderList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 支付金额，单位：分
         * @type {number || null}
         */
        this.Amt = null;

        /**
         * 用户Id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 现金支付金额
         * @type {string || null}
         */
        this.CashAmt = null;

        /**
         * 发货标识，由业务在调用聚鑫下单 接口的时候下发
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 支付时间unix时间戳
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * 抵扣券金额
         * @type {string || null}
         */
        this.CouponAmt = null;

        /**
         * 下单时间unix时间戳
         * @type {string || null}
         */
        this.OrderTime = null;

        /**
         * 物品id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 高速场景信息
         * @type {string || null}
         */
        this.SceneInfo = null;

        /**
         * 当前订单的订单状态 
0：初始状态，获取聚鑫交易订单成功；  
1：拉起聚鑫支付页面成功，用户未 支付；
2：用户支付成功，正在发货；
3：用户支付成功，发货失败；
4：用户支付成功，发货成功；
5：聚鑫支付页面正在失效中；
6：聚鑫支付页面已经失效；
         * @type {string || null}
         */
        this.OrderState = null;

        /**
         * 支付渠道：wechat：微信支付;
qqwallet：QQ钱包;
bank：网银
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 是否曾退款
         * @type {string || null}
         */
        this.RefundFlag = null;

        /**
         * 务支付订单号
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 商品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 支付回调时间，unix时间戳
         * @type {string || null}
         */
        this.CallBackTime = null;

        /**
         * ISO 货币代码，CNY
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 微校场景账户Id
         * @type {string || null}
         */
        this.AcctSubAppId = null;

        /**
         * 调用下单接口获取的聚鑫交易订单
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 聚鑫内部渠道订单号
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 调用下单接口传进来的 SubOutTradeNoList
         * @type {Array.<QueryOrderOutSubOrderList> || null}
         */
        this.SubOrderList = null;

        /**
         * 支付机构订单号
         * @type {string || null}
         */
        this.ChannelExternalOrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.CashAmt = 'CashAmt' in params ? params.CashAmt : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.CouponAmt = 'CouponAmt' in params ? params.CouponAmt : null;
        this.OrderTime = 'OrderTime' in params ? params.OrderTime : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.SceneInfo = 'SceneInfo' in params ? params.SceneInfo : null;
        this.OrderState = 'OrderState' in params ? params.OrderState : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.RefundFlag = 'RefundFlag' in params ? params.RefundFlag : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.CallBackTime = 'CallBackTime' in params ? params.CallBackTime : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.AcctSubAppId = 'AcctSubAppId' in params ? params.AcctSubAppId : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;

        if (params.SubOrderList) {
            this.SubOrderList = new Array();
            for (let z in params.SubOrderList) {
                let obj = new QueryOrderOutSubOrderList();
                obj.deserialize(params.SubOrderList[z]);
                this.SubOrderList.push(obj);
            }
        }
        this.ChannelExternalOrderId = 'ChannelExternalOrderId' in params ? params.ChannelExternalOrderId : null;

    }
}

/**
 * UnBindAcct请求参数结构体
 * @class
 */
class UnBindAcctRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 用于提现
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.SettleAcctNo = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SettleAcctNo = 'SettleAcctNo' in params ? params.SettleAcctNo : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;

    }
}

/**
 * 账户信息
 * @class
 */
class Acct extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(50)，见证子账户的账号（可重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(10)，见证子账户的属性（可重复。1: 普通会员子账号; 2: 挂账子账号; 3: 手续费子账号; 4: 利息子账号; 5: 平台担保子账号）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAcctProperty = null;

        /**
         * STRING(32)，交易网会员代码（可重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(150)，见证子账户的名称（可重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAcctName = null;

        /**
         * STRING(20)，见证子账户可用余额（可重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AcctAvailBal = null;

        /**
         * STRING(20)，见证子账户可提现金额（可重复。开户日期或修改日期）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CashAmt = null;

        /**
         * STRING(8)，维护日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MaintenanceDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.SubAcctProperty = 'SubAcctProperty' in params ? params.SubAcctProperty : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.SubAcctName = 'SubAcctName' in params ? params.SubAcctName : null;
        this.AcctAvailBal = 'AcctAvailBal' in params ? params.AcctAvailBal : null;
        this.CashAmt = 'CashAmt' in params ? params.CashAmt : null;
        this.MaintenanceDate = 'MaintenanceDate' in params ? params.MaintenanceDate : null;

    }
}

/**
 * RevRegisterBillSupportWithdraw返回参数结构体
 * @class
 */
class RevRegisterBillSupportWithdrawResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindAcct返回参数结构体
 * @class
 */
class BindAcctResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAcct返回参数结构体
 * @class
 */
class CreateAcctResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 平安银行生成的子商户账户
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QuerySingleTransactionStatus请求参数结构体
 * @class
 */
class QuerySingleTransactionStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(2)，功能标志（2: 会员间交易; 3: 提现; 4: 充值）
         * @type {string || null}
         */
        this.FunctionFlag = null;

        /**
         * STRING(52)，交易网流水号（提现，充值或会员交易请求时的CnsmrSeqNo值）
         * @type {string || null}
         */
        this.TranNetSeqNo = null;

        /**
         * STRING(50)，见证子帐户的帐号（未启用）
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(8)，交易日期（未启用）
         * @type {string || null}
         */
        this.TranDate = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.FunctionFlag = 'FunctionFlag' in params ? params.FunctionFlag : null;
        this.TranNetSeqNo = 'TranNetSeqNo' in params ? params.TranNetSeqNo : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.TranDate = 'TranDate' in params ? params.TranDate : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * 子订单列表
 * @class
 */
class UnifiedOrderInSubOrderList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子订单结算应收金额，单位： 分
         * @type {number || null}
         */
        this.SubMchIncome = null;

        /**
         * 子订单平台应收金额，单位：分
         * @type {number || null}
         */
        this.PlatformIncome = null;

        /**
         * 子订单商品详情
         * @type {string || null}
         */
        this.ProductDetail = null;

        /**
         * 子订单商品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 子订单号
         * @type {string || null}
         */
        this.SubOutTradeNo = null;

        /**
         * 子订单支付金额
         * @type {number || null}
         */
        this.Amt = null;

        /**
         * 发货标识，由业务在调用聚鑫下单接口的 时候下发
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 子订单原始金额
         * @type {number || null}
         */
        this.OriginalAmt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubMchIncome = 'SubMchIncome' in params ? params.SubMchIncome : null;
        this.PlatformIncome = 'PlatformIncome' in params ? params.PlatformIncome : null;
        this.ProductDetail = 'ProductDetail' in params ? params.ProductDetail : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SubOutTradeNo = 'SubOutTradeNo' in params ? params.SubOutTradeNo : null;
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.OriginalAmt = 'OriginalAmt' in params ? params.OriginalAmt : null;

    }
}

/**
 * QuerySmallAmountTransfer请求参数结构体
 * @class
 */
class QuerySmallAmountTransferRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(52)，原交易流水号（小额鉴权交易请求时的CnsmrSeqNo值）
         * @type {string || null}
         */
        this.OldTranSeqNo = null;

        /**
         * STRING(8)，交易日期（格式：20190101）
         * @type {string || null}
         */
        this.TranDate = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.OldTranSeqNo = 'OldTranSeqNo' in params ? params.OldTranSeqNo : null;
        this.TranDate = 'TranDate' in params ? params.TranDate : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * QueryBankClear请求参数结构体
 * @class
 */
class QueryBankClearRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(2)，功能标志（1: 全部; 2: 指定时间段）
         * @type {string || null}
         */
        this.FunctionFlag = null;

        /**
         * STRING (10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
         * @type {string || null}
         */
        this.PageNum = null;

        /**
         * STRING(8)，开始日期（若是指定时间段查询，则必输，当查询全部时，不起作用。格式: 20190101）
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * STRING(8)，终止日期（若是指定时间段查询，则必输，当查询全部时，不起作用。格式：20190101）
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.FunctionFlag = 'FunctionFlag' in params ? params.FunctionFlag : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * ModifyMntMbrBindRelateAcctBankCode请求参数结构体
 * @class
 */
class ModifyMntMbrBindRelateAcctBankCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(50)，见证子账户的账号
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(50)，会员绑定账号
         * @type {string || null}
         */
        this.MemberBindAcctNo = null;

        /**
         * STRING(150)，开户行名称（若大小额行号不填则送超级网银号对应的银行名称，若填大小额行号则送大小额行号对应的银行名称）
         * @type {string || null}
         */
        this.AcctOpenBranchName = null;

        /**
         * STRING(20)，大小额行号（CnapsBranchId和EiconBankBranchId两者二选一必填）
         * @type {string || null}
         */
        this.CnapsBranchId = null;

        /**
         * STRING(20)，超级网银行号
         * @type {string || null}
         */
        this.EiconBankBranchId = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.MemberBindAcctNo = 'MemberBindAcctNo' in params ? params.MemberBindAcctNo : null;
        this.AcctOpenBranchName = 'AcctOpenBranchName' in params ? params.AcctOpenBranchName : null;
        this.CnapsBranchId = 'CnapsBranchId' in params ? params.CnapsBranchId : null;
        this.EiconBankBranchId = 'EiconBankBranchId' in params ? params.EiconBankBranchId : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * RevokeMemberRechargeThirdPay返回参数结构体
 * @class
 */
class RevokeMemberRechargeThirdPayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(52)，前置流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(300)，保留域1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsgOne = null;

        /**
         * STRING(300)，保留域2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsgTwo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.ReservedMsgOne = 'ReservedMsgOne' in params ? params.ReservedMsgOne : null;
        this.ReservedMsgTwo = 'ReservedMsgTwo' in params ? params.ReservedMsgTwo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindRelateAccReUnionPay请求参数结构体
 * @class
 */
class BindRelateAccReUnionPayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”（右侧）进行分隔）
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(50)，会员的待绑定账户的账号（即 BindRelateAcctUnionPay接口中的“会员的待绑定账户的账号”）
         * @type {string || null}
         */
        this.MemberAcctNo = null;

        /**
         * STRING(20)，短信验证码（即 BindRelateAcctUnionPay接口中的手机所接收到的短信验证码）
         * @type {string || null}
         */
        this.MessageCheckCode = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.MemberAcctNo = 'MemberAcctNo' in params ? params.MemberAcctNo : null;
        this.MessageCheckCode = 'MessageCheckCode' in params ? params.MessageCheckCode : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * CreateCustAcctId返回参数结构体
 * @class
 */
class CreateCustAcctIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(50)，见证子账户的账号（平台需要记录下来，后续所有接口交互都会用到）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(1027)，保留域（需要开通智能收款，此处返回智能收款账号，正常情况下返回空）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryBankTransactionDetails请求参数结构体
 * @class
 */
class QueryBankTransactionDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(2)，功能标志（1: 当日; 2: 历史）
         * @type {string || null}
         */
        this.FunctionFlag = null;

        /**
         * STRING(50)，见证子帐户的帐号
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(4)，查询标志（1: 全部; 2: 转出; 3: 转入 ）
         * @type {string || null}
         */
        this.QueryFlag = null;

        /**
         * STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
         * @type {string || null}
         */
        this.PageNum = null;

        /**
         * STRING(8)，开始日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101）
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * STRING(8)，终止日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101）
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.FunctionFlag = 'FunctionFlag' in params ? params.FunctionFlag : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.QueryFlag = 'QueryFlag' in params ? params.QueryFlag : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * Refund返回参数结构体
 * @class
 */
class RefundResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnifiedOrder返回参数结构体
 * @class
 */
class UnifiedOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支付金额，单位： 分
         * @type {number || null}
         */
        this.TotalAmt = null;

        /**
         * 应用支付订单号
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 支付参数透传给聚鑫SDK（原文透传给SDK即可，不需要解码）
         * @type {string || null}
         */
        this.PayInfo = null;

        /**
         * 聚鑫的交易订单
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalAmt = 'TotalAmt' in params ? params.TotalAmt : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.PayInfo = 'PayInfo' in params ? params.PayInfo : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DownloadBill请求参数结构体
 * @class
 */
class DownloadBillRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求下载对账单日期
         * @type {string || null}
         */
        this.StateDate = null;

        /**
         * 聚鑫分配的MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 聚鑫分配的SecretId
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 使用聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StateDate = 'StateDate' in params ? params.StateDate : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;

    }
}

/**
 * QueryBankWithdrawCashDetails请求参数结构体
 * @class
 */
class QueryBankWithdrawCashDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(2)，功能标志（1: 当日; 2: 历史）
         * @type {string || null}
         */
        this.FunctionFlag = null;

        /**
         * STRING(50)，见证子帐户的帐号
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(4)，查询标志（2: 提现; 3: 清分）
         * @type {string || null}
         */
        this.QueryFlag = null;

        /**
         * STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
         * @type {string || null}
         */
        this.PageNum = null;

        /**
         * STRING(8)，开始日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101）
         * @type {string || null}
         */
        this.BeginDate = null;

        /**
         * STRING(8)，结束日期（若是历史查询，则必输，当日查询时，不起作用。格式：20190101）
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.FunctionFlag = 'FunctionFlag' in params ? params.FunctionFlag : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.QueryFlag = 'QueryFlag' in params ? params.QueryFlag : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.BeginDate = 'BeginDate' in params ? params.BeginDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * RevRegisterBillSupportWithdraw请求参数结构体
 * @class
 */
class RevRegisterBillSupportWithdrawRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(32)，交易网会员代码
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(30)，原订单号（RegisterBillSupportWithdraw接口中的订单号）
         * @type {string || null}
         */
        this.OldOrderNo = null;

        /**
         * STRING(20)，撤销金额（支持部分撤销，不能大于原订单可用金额，包含交易费用）
         * @type {string || null}
         */
        this.CancelAmt = null;

        /**
         * STRING(20)，交易费用（暂未使用，默认传0.0）
         * @type {string || null}
         */
        this.TranFee = null;

        /**
         * STRING(300)，备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * STRING(300)，保留域1
         * @type {string || null}
         */
        this.ReservedMsgOne = null;

        /**
         * STRING(300)，保留域2
         * @type {string || null}
         */
        this.ReservedMsgTwo = null;

        /**
         * STRING(300)，保留域3
         * @type {string || null}
         */
        this.ReservedMsgThree = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.OldOrderNo = 'OldOrderNo' in params ? params.OldOrderNo : null;
        this.CancelAmt = 'CancelAmt' in params ? params.CancelAmt : null;
        this.TranFee = 'TranFee' in params ? params.TranFee : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReservedMsgOne = 'ReservedMsgOne' in params ? params.ReservedMsgOne : null;
        this.ReservedMsgTwo = 'ReservedMsgTwo' in params ? params.ReservedMsgTwo : null;
        this.ReservedMsgThree = 'ReservedMsgThree' in params ? params.ReservedMsgThree : null;

    }
}

/**
 * QueryCustAcctIdBalance返回参数结构体
 * @class
 */
class QueryCustAcctIdBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultNum = null;

        /**
         * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartRecordNo = null;

        /**
         * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndFlag = null;

        /**
         * STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalNum = null;

        /**
         * 账户信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Acct> || null}
         */
        this.AcctArray = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ResultNum = 'ResultNum' in params ? params.ResultNum : null;
        this.StartRecordNo = 'StartRecordNo' in params ? params.StartRecordNo : null;
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.AcctArray) {
            this.AcctArray = new Array();
            for (let z in params.AcctArray) {
                let obj = new Acct();
                obj.deserialize(params.AcctArray[z]);
                this.AcctArray.push(obj);
            }
        }
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryCustAcctIdBalance请求参数结构体
 * @class
 */
class QueryCustAcctIdBalanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(4)，查询标志（2: 普通会员子账号; 3: 功能子账号）
         * @type {string || null}
         */
        this.QueryFlag = null;

        /**
         * STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
         * @type {string || null}
         */
        this.PageNum = null;

        /**
         * STRING(50)，见证子账户的账号（若SelectFlag为2时，子账号必输）
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.QueryFlag = 'QueryFlag' in params ? params.QueryFlag : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * DownloadBill返回参数结构体
 * @class
 */
class DownloadBillResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账单文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 账单文件的MD5值
         * @type {string || null}
         */
        this.FileMD5 = null;

        /**
         * 账单文件的真实下载地址
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileMD5 = 'FileMD5' in params ? params.FileMD5 : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RechargeMemberThirdPay返回参数结构体
 * @class
 */
class RechargeMemberThirdPayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(52)，前置流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(20)，会员子账户交易前可用余额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemberSubAcctPreAvailBal = null;

        /**
         * STRING(300)，保留域1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsgOne = null;

        /**
         * STRING(300)，保留域2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsgTwo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.MemberSubAcctPreAvailBal = 'MemberSubAcctPreAvailBal' in params ? params.MemberSubAcctPreAvailBal : null;
        this.ReservedMsgOne = 'ReservedMsgOne' in params ? params.ReservedMsgOne : null;
        this.ReservedMsgTwo = 'ReservedMsgTwo' in params ? params.ReservedMsgTwo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindAcct请求参数结构体
 * @class
 */
class BindAcctRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 1 – 小额转账验证
2 – 短信验证
每个结算账户每天只能使用一次小额转账验证
         * @type {number || null}
         */
        this.BindType = null;

        /**
         * 用于提现
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.SettleAcctNo = null;

        /**
         * 结算账户户名
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.SettleAcctName = null;

        /**
         * 1 – 本行账户
2 – 他行账户
         * @type {number || null}
         */
        this.SettleAcctType = null;

        /**
         * 证件类型，见《证件类型》表
         * @type {string || null}
         */
        this.IdType = null;

        /**
         * 证件号码
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.IdCode = null;

        /**
         * 开户行名称
         * @type {string || null}
         */
        this.AcctBranchName = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 用于短信验证
BindType==2时必填
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 超级网银行号和大小额行号
二选一
         * @type {string || null}
         */
        this.CnapsBranchId = null;

        /**
         * 超级网银行号和大小额行号
二选一
         * @type {string || null}
         */
        this.EiconBankBranchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.SettleAcctNo = 'SettleAcctNo' in params ? params.SettleAcctNo : null;
        this.SettleAcctName = 'SettleAcctName' in params ? params.SettleAcctName : null;
        this.SettleAcctType = 'SettleAcctType' in params ? params.SettleAcctType : null;
        this.IdType = 'IdType' in params ? params.IdType : null;
        this.IdCode = 'IdCode' in params ? params.IdCode : null;
        this.AcctBranchName = 'AcctBranchName' in params ? params.AcctBranchName : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.CnapsBranchId = 'CnapsBranchId' in params ? params.CnapsBranchId : null;
        this.EiconBankBranchId = 'EiconBankBranchId' in params ? params.EiconBankBranchId : null;

    }
}

/**
 * ReviseMbrProperty请求参数结构体
 * @class
 */
class ReviseMbrPropertyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(50)，见证子账户的账号
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(10)，会员属性（00-普通子账号; SH-商户子账户。暂时只支持00-普通子账号改为SH-商户子账户）
         * @type {string || null}
         */
        this.MemberProperty = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.MemberProperty = 'MemberProperty' in params ? params.MemberProperty : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * WithdrawCashMembership返回参数结构体
 * @class
 */
class WithdrawCashMembershipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(20)，转账手续费（固定返回0.00）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransferFee = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.TransferFee = 'TransferFee' in params ? params.TransferFee : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryBankWithdrawCashDetails返回参数结构体
 * @class
 */
class QueryBankWithdrawCashDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultNum = null;

        /**
         * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartRecordNo = null;

        /**
         * STRING(2)，结束标志（0:否; 1:是）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndFlag = null;

        /**
         * STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalNum = null;

        /**
         * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<WithdrawItem> || null}
         */
        this.TranItemArray = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ResultNum = 'ResultNum' in params ? params.ResultNum : null;
        this.StartRecordNo = 'StartRecordNo' in params ? params.StartRecordNo : null;
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.TranItemArray) {
            this.TranItemArray = new Array();
            for (let z in params.TranItemArray) {
                let obj = new WithdrawItem();
                obj.deserialize(params.TranItemArray[z]);
                this.TranItemArray.push(obj);
            }
        }
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 转账充值明细信息
 * @class
 */
class TransferItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(10)，入账类型（02: 会员充值; 03: 资金挂账）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InAcctType = null;

        /**
         * STRING(32)，交易网会员代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(50)，见证子帐户的帐号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(20)，入金金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranAmt = null;

        /**
         * STRING(50)，入金账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InAcctNo = null;

        /**
         * STRING(150)，入金账户名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InAcctName = null;

        /**
         * STRING(3)，币种
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Ccy = null;

        /**
         * STRING(8)，会计日期（即银行主机记账日期）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountingDate = null;

        /**
         * STRING(150)，银行名称（付款账户银行名称）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankName = null;

        /**
         * STRING(300)，转账备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InAcctType = 'InAcctType' in params ? params.InAcctType : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.TranAmt = 'TranAmt' in params ? params.TranAmt : null;
        this.InAcctNo = 'InAcctNo' in params ? params.InAcctNo : null;
        this.InAcctName = 'InAcctName' in params ? params.InAcctName : null;
        this.Ccy = 'Ccy' in params ? params.Ccy : null;
        this.AccountingDate = 'AccountingDate' in params ? params.AccountingDate : null;
        this.BankName = 'BankName' in params ? params.BankName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;

    }
}

/**
 * RegisterBillSupportWithdraw返回参数结构体
 * @class
 */
class RegisterBillSupportWithdrawResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * String(22)，交易流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * WithdrawCashMembership请求参数结构体
 * @class
 */
class WithdrawCashMembershipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(150)，交易网名称（市场名称）
         * @type {string || null}
         */
        this.TranWebName = null;

        /**
         * STRING(5)，会员证件类型（详情见“常见问题”）
         * @type {string || null}
         */
        this.MemberGlobalType = null;

        /**
         * STRING(32)，会员证件号码
         * @type {string || null}
         */
        this.MemberGlobalId = null;

        /**
         * STRING(32)，交易网会员代码
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(150)，会员名称
         * @type {string || null}
         */
        this.MemberName = null;

        /**
         * STRING(50)，提现账号（银行卡）
         * @type {string || null}
         */
        this.TakeCashAcctNo = null;

        /**
         * STRING(150)，出金账户名称（银行卡户名）
         * @type {string || null}
         */
        this.OutAmtAcctName = null;

        /**
         * STRING(3)，币种（默认为RMB）
         * @type {string || null}
         */
        this.Ccy = null;

        /**
         * STRING(20)，可提现金额
         * @type {string || null}
         */
        this.CashAmt = null;

        /**
         * STRING(300)，备注（建议可送订单号，可在对账文件的备注字段获取到）
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * STRING(300)，网银签名
         * @type {string || null}
         */
        this.WebSign = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.TranWebName = 'TranWebName' in params ? params.TranWebName : null;
        this.MemberGlobalType = 'MemberGlobalType' in params ? params.MemberGlobalType : null;
        this.MemberGlobalId = 'MemberGlobalId' in params ? params.MemberGlobalId : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;
        this.TakeCashAcctNo = 'TakeCashAcctNo' in params ? params.TakeCashAcctNo : null;
        this.OutAmtAcctName = 'OutAmtAcctName' in params ? params.OutAmtAcctName : null;
        this.Ccy = 'Ccy' in params ? params.Ccy : null;
        this.CashAmt = 'CashAmt' in params ? params.CashAmt : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.WebSign = 'WebSign' in params ? params.WebSign : null;

    }
}

/**
 * QueryReconciliationDocument请求参数结构体
 * @class
 */
class QueryReconciliationDocumentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(10)，文件类型（充值文件-CZ; 提现文件-TX; 交易文件-JY; 余额文件-YE; 合约文件-HY）
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * STRING(8)，文件日期（格式：20190101）
         * @type {string || null}
         */
        this.FileDate = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileDate = 'FileDate' in params ? params.FileDate : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * UnbindRelateAcct返回参数结构体
 * @class
 */
class UnbindRelateAcctResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(52)，见证系统流水号（即电商见证宝系统生成的流水号，可关联具体一笔请求）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindRelateAcctUnionPay请求参数结构体
 * @class
 */
class BindRelateAcctUnionPayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”（右侧）进行分隔）
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(150)，见证子账户的户名（首次绑定的情况下，此字段即为待绑定的提现账户的户名。非首次绑定的情况下，须注意带绑定的提现账户的户名须与留存在后台系统的会员户名一致）
         * @type {string || null}
         */
        this.MemberName = null;

        /**
         * STRING(5)，会员证件类型（详情见“常见问题”）
         * @type {string || null}
         */
        this.MemberGlobalType = null;

        /**
         * STRING(32)，会员证件号码
         * @type {string || null}
         */
        this.MemberGlobalId = null;

        /**
         * STRING(50)，会员的待绑定账户的账号（提现的银行卡）
         * @type {string || null}
         */
        this.MemberAcctNo = null;

        /**
         * STRING(10)，会员的待绑定账户的本他行类型（1: 本行; 2: 他行）
         * @type {string || null}
         */
        this.BankType = null;

        /**
         * STRING(150)，会员的待绑定账户的开户行名称（若大小额行号不填则送超级网银号对应的银行名称，若填大小额行号则送大小额行号对应的银行名称）
         * @type {string || null}
         */
        this.AcctOpenBranchName = null;

        /**
         * STRING(30)，会员的手机号（手机号须由长度为11位的数字构成）
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(20)，会员的待绑定账户的开户行的联行号（本他行类型为他行的情况下，此字段和下一个字段至少一个不为空）
         * @type {string || null}
         */
        this.CnapsBranchId = null;

        /**
         * STRING(20)，会员的待绑定账户的开户行的超级网银行号（本他行类型为他行的情况下，此字段和上一个字段至少一个不为空）
         * @type {string || null}
         */
        this.EiconBankBranchId = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;
        this.MemberGlobalType = 'MemberGlobalType' in params ? params.MemberGlobalType : null;
        this.MemberGlobalId = 'MemberGlobalId' in params ? params.MemberGlobalId : null;
        this.MemberAcctNo = 'MemberAcctNo' in params ? params.MemberAcctNo : null;
        this.BankType = 'BankType' in params ? params.BankType : null;
        this.AcctOpenBranchName = 'AcctOpenBranchName' in params ? params.AcctOpenBranchName : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.CnapsBranchId = 'CnapsBranchId' in params ? params.CnapsBranchId : null;
        this.EiconBankBranchId = 'EiconBankBranchId' in params ? params.EiconBankBranchId : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * CheckAmount请求参数结构体
 * @class
 */
class CheckAmountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”(右侧)进行分隔）
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(50)，会员的待绑定账户的账号（即 BindRelateAcctSmallAmount接口中的“会员的待绑定账户的账号”）
         * @type {string || null}
         */
        this.TakeCashAcctNo = null;

        /**
         * STRING(20)，鉴权验证金额（即 BindRelateAcctSmallAmount接口中的“会员的待绑定账户收到的验证金额。原小额转账鉴权方式为来账鉴权的情况下此字段须赋值为0.00）
         * @type {string || null}
         */
        this.AuthAmt = null;

        /**
         * STRING(3)，币种（默认为RMB）
         * @type {string || null}
         */
        this.Ccy = null;

        /**
         * STRING(1027)，原小额转账方式（1: 往账鉴权，此为默认值; 2: 来账鉴权）
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.TakeCashAcctNo = 'TakeCashAcctNo' in params ? params.TakeCashAcctNo : null;
        this.AuthAmt = 'AuthAmt' in params ? params.AuthAmt : null;
        this.Ccy = 'Ccy' in params ? params.Ccy : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * CreateAcct请求参数结构体
 * @class
 */
class CreateAcctRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫平台分配的支付MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 业务平台的子商户ID，唯一
         * @type {string || null}
         */
        this.SubMchId = null;

        /**
         * 子商户名称
         * @type {string || null}
         */
        this.SubMchName = null;

        /**
         * 子商户地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 子商户联系人
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.Contact = null;

        /**
         * 联系人手机号
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 邮箱 
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 子商户类型：
个人: personal
企业：enterprise
缺省： enterprise
         * @type {string || null}
         */
        this.SubMchType = null;

        /**
         * 不填则默认子商户名称
         * @type {string || null}
         */
        this.ShortName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.SubMchId = 'SubMchId' in params ? params.SubMchId : null;
        this.SubMchName = 'SubMchName' in params ? params.SubMchName : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Contact = 'Contact' in params ? params.Contact : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.SubMchType = 'SubMchType' in params ? params.SubMchType : null;
        this.ShortName = 'ShortName' in params ? params.ShortName : null;

    }
}

/**
 * RechargeMemberThirdPay请求参数结构体
 * @class
 */
class RechargeMemberThirdPayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(32)，交易网会代码
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(20)，会员充值金额
         * @type {string || null}
         */
        this.MemberFillAmt = null;

        /**
         * STRING(20)，手续费金额
         * @type {string || null}
         */
        this.Commission = null;

        /**
         * STRING(3)，币种
         * @type {string || null}
         */
        this.Ccy = null;

        /**
         * STRING(20)，支付渠道类型
         * @type {string || null}
         */
        this.PayChannelType = null;

        /**
         * STRING(50)，支付渠道所分配的商户号
         * @type {string || null}
         */
        this.PayChannelAssignMerNo = null;

        /**
         * STRING(52)，支付渠道交易流水号
         * @type {string || null}
         */
        this.PayChannelTranSeqNo = null;

        /**
         * STRING(52)，电商见证宝订单号
         * @type {string || null}
         */
        this.EjzbOrderNo = null;

        /**
         * String(22)，商户号
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(500)，电商见证宝订单内容
         * @type {string || null}
         */
        this.EjzbOrderContent = null;

        /**
         * STRING(300)，备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * STRING(300)，保留域1
         * @type {string || null}
         */
        this.ReservedMsgOne = null;

        /**
         * STRING(300)，保留域2
         * @type {string || null}
         */
        this.ReservedMsgTwo = null;

        /**
         * STRING(300)，保留域3
         * @type {string || null}
         */
        this.ReservedMsgThree = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.MemberFillAmt = 'MemberFillAmt' in params ? params.MemberFillAmt : null;
        this.Commission = 'Commission' in params ? params.Commission : null;
        this.Ccy = 'Ccy' in params ? params.Ccy : null;
        this.PayChannelType = 'PayChannelType' in params ? params.PayChannelType : null;
        this.PayChannelAssignMerNo = 'PayChannelAssignMerNo' in params ? params.PayChannelAssignMerNo : null;
        this.PayChannelTranSeqNo = 'PayChannelTranSeqNo' in params ? params.PayChannelTranSeqNo : null;
        this.EjzbOrderNo = 'EjzbOrderNo' in params ? params.EjzbOrderNo : null;
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.EjzbOrderContent = 'EjzbOrderContent' in params ? params.EjzbOrderContent : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReservedMsgOne = 'ReservedMsgOne' in params ? params.ReservedMsgOne : null;
        this.ReservedMsgTwo = 'ReservedMsgTwo' in params ? params.ReservedMsgTwo : null;
        this.ReservedMsgThree = 'ReservedMsgThree' in params ? params.ReservedMsgThree : null;

    }
}

/**
 * QueryMemberBind请求参数结构体
 * @class
 */
class QueryMemberBindRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(4)，查询标志（1: 全部会员; 2: 单个会员; 3: 单个会员的证件信息）
         * @type {string || null}
         */
        this.QueryFlag = null;

        /**
         * STRING (10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
         * @type {string || null}
         */
        this.PageNum = null;

        /**
         * STRING(50)，见证子账户的账号（若SelectFlag为2或3时，子账户账号必输）
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.QueryFlag = 'QueryFlag' in params ? params.QueryFlag : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * BindRelateAcctSmallAmount返回参数结构体
 * @class
 */
class BindRelateAcctSmallAmountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(1027)，保留域（来账鉴权的方式下，此字段的值为客户需往监管账户转入的金额。在同名子账户绑定的场景下，若返回""VERIFIED""则说明无需验证直接绑定成功）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryMemberTransaction返回参数结构体
 * @class
 */
class QueryMemberTransactionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(52)，见证系统流水号（即电商见证宝系统生成的流水号，可关联具体一笔请求）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterBillSupportWithdraw请求参数结构体
 * @class
 */
class RegisterBillSupportWithdrawRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(32)，交易网会员代码
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(50)，订单号
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * STRING(20)，挂账金额（包含交易费用）
         * @type {string || null}
         */
        this.SuspendAmt = null;

        /**
         * STRING(20)，交易费用（暂未使用，默认传0.0）
         * @type {string || null}
         */
        this.TranFee = null;

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(300)，备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * STRING(300)，保留域1
         * @type {string || null}
         */
        this.ReservedMsgOne = null;

        /**
         * STRING(300)，保留域2
         * @type {string || null}
         */
        this.ReservedMsgTwo = null;

        /**
         * STRING(300)，保留域3
         * @type {string || null}
         */
        this.ReservedMsgThree = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.SuspendAmt = 'SuspendAmt' in params ? params.SuspendAmt : null;
        this.TranFee = 'TranFee' in params ? params.TranFee : null;
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReservedMsgOne = 'ReservedMsgOne' in params ? params.ReservedMsgOne : null;
        this.ReservedMsgTwo = 'ReservedMsgTwo' in params ? params.ReservedMsgTwo : null;
        this.ReservedMsgThree = 'ReservedMsgThree' in params ? params.ReservedMsgThree : null;

    }
}

/**
 * 退款子订单列表
 * @class
 */
class RefundOutSubOrderRefundList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台应退金额
         * @type {number || null}
         */
        this.PlatformRefundAmt = null;

        /**
         * 子订单退款金额
         * @type {number || null}
         */
        this.RefundAmt = null;

        /**
         * 商家应退金额
         * @type {number || null}
         */
        this.SubMchRefundAmt = null;

        /**
         * 子订单号
         * @type {string || null}
         */
        this.SubOutTradeNo = null;

        /**
         * 子退款单号，调用方需要保证 全局唯一性
         * @type {string || null}
         */
        this.SubRefundId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlatformRefundAmt = 'PlatformRefundAmt' in params ? params.PlatformRefundAmt : null;
        this.RefundAmt = 'RefundAmt' in params ? params.RefundAmt : null;
        this.SubMchRefundAmt = 'SubMchRefundAmt' in params ? params.SubMchRefundAmt : null;
        this.SubOutTradeNo = 'SubOutTradeNo' in params ? params.SubOutTradeNo : null;
        this.SubRefundId = 'SubRefundId' in params ? params.SubRefundId : null;

    }
}

/**
 * UnbindRelateAcct请求参数结构体
 * @class
 */
class UnbindRelateAcctRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(2)，功能标志（1: 解绑）
         * @type {string || null}
         */
        this.FunctionFlag = null;

        /**
         * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”(右侧)进行分隔）
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(50)，待解绑的提现账户的账号（提现账号）
         * @type {string || null}
         */
        this.MemberAcctNo = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.FunctionFlag = 'FunctionFlag' in params ? params.FunctionFlag : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.MemberAcctNo = 'MemberAcctNo' in params ? params.MemberAcctNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * ModifyMntMbrBindRelateAcctBankCode返回参数结构体
 * @class
 */
class ModifyMntMbrBindRelateAcctBankCodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryBalance请求参数结构体
 * @class
 */
class QueryBalanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 2：普通会员子账号
3：功能子账号
         * @type {string || null}
         */
        this.QueryFlag = null;

        /**
         * 起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后
         * @type {string || null}
         */
        this.PageOffset = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.QueryFlag = 'QueryFlag' in params ? params.QueryFlag : null;
        this.PageOffset = 'PageOffset' in params ? params.PageOffset : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;

    }
}

/**
 * QuerySmallAmountTransfer返回参数结构体
 * @class
 */
class QuerySmallAmountTransferResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(10)，返回状态（0: 成功; 1: 失败; 2: 待确认）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnStatus = null;

        /**
         * STRING(512)，返回信息（失败返回具体信息）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReturnMsg = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ReturnStatus = 'ReturnStatus' in params ? params.ReturnStatus : null;
        this.ReturnMsg = 'ReturnMsg' in params ? params.ReturnMsg : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyWithdrawal请求参数结构体
 * @class
 */
class ApplyWithdrawalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 用于提现
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.SettleAcctNo = null;

        /**
         * 结算账户户名
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.SettleAcctName = null;

        /**
         * 币种 RMB
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 单位，1：元，2：角，3：分
         * @type {number || null}
         */
        this.CurrencyUnit = null;

        /**
         * 金额
         * @type {string || null}
         */
        this.CurrencyAmt = null;

        /**
         * 交易网名称
         * @type {string || null}
         */
        this.TranWebName = null;

        /**
         * 会员证件类型
         * @type {string || null}
         */
        this.IdType = null;

        /**
         * 会员证件号码
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.IdCode = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SettleAcctNo = 'SettleAcctNo' in params ? params.SettleAcctNo : null;
        this.SettleAcctName = 'SettleAcctName' in params ? params.SettleAcctName : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.CurrencyUnit = 'CurrencyUnit' in params ? params.CurrencyUnit : null;
        this.CurrencyAmt = 'CurrencyAmt' in params ? params.CurrencyAmt : null;
        this.TranWebName = 'TranWebName' in params ? params.TranWebName : null;
        this.IdType = 'IdType' in params ? params.IdType : null;
        this.IdCode = 'IdCode' in params ? params.IdCode : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;

    }
}

/**
 * QueryRefund请求参数结构体
 * @class
 */
class QueryRefundRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID，长度不小于5位，仅支持字母和数字的组合。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 退款订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合。
         * @type {string || null}
         */
        this.RefundId = null;

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RefundId = 'RefundId' in params ? params.RefundId : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;

    }
}

/**
 * CreateCustAcctId请求参数结构体
 * @class
 */
class CreateCustAcctIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(2)，功能标志（1: 开户; 3: 销户）
         * @type {string || null}
         */
        this.FunctionFlag = null;

        /**
         * STRING(50)，资金汇总账号（即收单资金归集入账的账号）
         * @type {string || null}
         */
        this.FundSummaryAcctNo = null;

        /**
         * STRING(32)，交易网会员代码（平台端的用户ID，需要保证唯一性，可数字字母混合，如HY_120）
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(10)，会员属性（00-普通子账户(默认); SH-商户子账户）
         * @type {string || null}
         */
        this.MemberProperty = null;

        /**
         * STRING(30)，手机号码
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * String(2)，是否为自营业务（0位非自营，1为自营）
         * @type {boolean || null}
         */
        this.SelfBusiness = null;

        /**
         * String(64)，联系人
         * @type {string || null}
         */
        this.ContactName = null;

        /**
         * String(64)，子账户名称
         * @type {string || null}
         */
        this.SubAcctName = null;

        /**
         * String(64)，子账户简称
         * @type {string || null}
         */
        this.SubAcctShortName = null;

        /**
         * String(4)，子账户类型（0: 个人子账户; 1: 企业子账户）
         * @type {number || null}
         */
        this.SubAcctType = null;

        /**
         * STRING(150)，用户昵称
         * @type {string || null}
         */
        this.UserNickname = null;

        /**
         * STRING(150)，邮箱
         * @type {string || null}
         */
        this.Email = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionFlag = 'FunctionFlag' in params ? params.FunctionFlag : null;
        this.FundSummaryAcctNo = 'FundSummaryAcctNo' in params ? params.FundSummaryAcctNo : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.MemberProperty = 'MemberProperty' in params ? params.MemberProperty : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.SelfBusiness = 'SelfBusiness' in params ? params.SelfBusiness : null;
        this.ContactName = 'ContactName' in params ? params.ContactName : null;
        this.SubAcctName = 'SubAcctName' in params ? params.SubAcctName : null;
        this.SubAcctShortName = 'SubAcctShortName' in params ? params.SubAcctShortName : null;
        this.SubAcctType = 'SubAcctType' in params ? params.SubAcctType : null;
        this.UserNickname = 'UserNickname' in params ? params.UserNickname : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * QueryBankClear返回参数结构体
 * @class
 */
class QueryBankClearResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING (10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultNum = null;

        /**
         * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartRecordNo = null;

        /**
         * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndFlag = null;

        /**
         * STRING (10)，符合业务查询条件的记录总数（重复次数, 一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalNum = null;

        /**
         * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ClearItem> || null}
         */
        this.TranItemArray = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ResultNum = 'ResultNum' in params ? params.ResultNum : null;
        this.StartRecordNo = 'StartRecordNo' in params ? params.StartRecordNo : null;
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.TranItemArray) {
            this.TranItemArray = new Array();
            for (let z in params.TranItemArray) {
                let obj = new ClearItem();
                obj.deserialize(params.TranItemArray[z]);
                this.TranItemArray.push(obj);
            }
        }
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindRelateAcctSmallAmount请求参数结构体
 * @class
 */
class BindRelateAcctSmallAmountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(32)，交易网会员代码（若需要把一个待绑定账户关联到两个会员名下，此字段可上送两个会员的交易网代码，并且须用“|::|”(右侧)进行分隔）
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(150)，见证子账户的户名（首次绑定的情况下，此字段即为待绑定的提现账户的户名。非首次绑定的情况下，须注意带绑定的提现账户的户名须与留存在后台系统的会员户名一致）
         * @type {string || null}
         */
        this.MemberName = null;

        /**
         * STRING(5)，会员证件类型（详情见“常见问题”）
         * @type {string || null}
         */
        this.MemberGlobalType = null;

        /**
         * STRING(32)，会员证件号码
         * @type {string || null}
         */
        this.MemberGlobalId = null;

        /**
         * STRING(50)，会员的待绑定账户的账号（提现的银行卡）
         * @type {string || null}
         */
        this.MemberAcctNo = null;

        /**
         * STRING(10)，会员的待绑定账户的本他行类型（1: 本行; 2: 他行）
         * @type {string || null}
         */
        this.BankType = null;

        /**
         * STRING(150)，会员的待绑定账户的开户行名称
         * @type {string || null}
         */
        this.AcctOpenBranchName = null;

        /**
         * STRING(30)，会员的手机号（手机号须由长度为11位的数字构成）
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * STRING(20)，会员的待绑定账户的开户行的联行号（本他行类型为他行的情况下，此字段和下一个字段至少一个不为空）
         * @type {string || null}
         */
        this.CnapsBranchId = null;

        /**
         * STRING(20)，会员的待绑定账户的开户行的超级网银行号（本他行类型为他行的情况下，此字段和上一个字段至少一个不为空）
         * @type {string || null}
         */
        this.EiconBankBranchId = null;

        /**
         * STRING(1027)，转账方式（1: 往账鉴权(默认值); 2: 来账鉴权）
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;
        this.MemberGlobalType = 'MemberGlobalType' in params ? params.MemberGlobalType : null;
        this.MemberGlobalId = 'MemberGlobalId' in params ? params.MemberGlobalId : null;
        this.MemberAcctNo = 'MemberAcctNo' in params ? params.MemberAcctNo : null;
        this.BankType = 'BankType' in params ? params.BankType : null;
        this.AcctOpenBranchName = 'AcctOpenBranchName' in params ? params.AcctOpenBranchName : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.CnapsBranchId = 'CnapsBranchId' in params ? params.CnapsBranchId : null;
        this.EiconBankBranchId = 'EiconBankBranchId' in params ? params.EiconBankBranchId : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * QueryRefund返回参数结构体
 * @class
 */
class QueryRefundResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 退款状态码，退款提交成功后返回  1：退款中；  2：退款成功；  3：退款失败。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnBindAcct返回参数结构体
 * @class
 */
class UnBindAcctResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QuerySingleTransactionStatus返回参数结构体
 * @class
 */
class QuerySingleTransactionStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(2)，记账标志（记账标志。1: 登记挂账; 2: 支付; 3: 提现; 4: 清分; 5: 下单预支付; 6: 确认并付款; 7: 退款; 8: 支付到平台; N: 其他）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BookingFlag = null;

        /**
         * STRING(32)，交易状态（0: 成功; 1: 失败; 2: 待确认; 5: 待处理; 6: 处理中。0和1是终态，2、5、6是中间态，其中2是特指提现后待确认提现是否成功，5是银行收到交易等待处理，6是交易正在处理）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranStatus = null;

        /**
         * STRING(20)，交易金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranAmt = null;

        /**
         * STRING(8)，交易日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranDate = null;

        /**
         * STRING(20)，交易时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranTime = null;

        /**
         * STRING(50)，转入子账户账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InSubAcctNo = null;

        /**
         * STRING(50)，转出子账户账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutSubAcctNo = null;

        /**
         * STRING(300)，失败信息（当提现失败时，返回交易失败原因）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailMsg = null;

        /**
         * STRING(50)，原前置流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OldTranFrontSeqNo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.BookingFlag = 'BookingFlag' in params ? params.BookingFlag : null;
        this.TranStatus = 'TranStatus' in params ? params.TranStatus : null;
        this.TranAmt = 'TranAmt' in params ? params.TranAmt : null;
        this.TranDate = 'TranDate' in params ? params.TranDate : null;
        this.TranTime = 'TranTime' in params ? params.TranTime : null;
        this.InSubAcctNo = 'InSubAcctNo' in params ? params.InSubAcctNo : null;
        this.OutSubAcctNo = 'OutSubAcctNo' in params ? params.OutSubAcctNo : null;
        this.FailMsg = 'FailMsg' in params ? params.FailMsg : null;
        this.OldTranFrontSeqNo = 'OldTranFrontSeqNo' in params ? params.OldTranFrontSeqNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryMemberBind返回参数结构体
 * @class
 */
class QueryMemberBindResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING (10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultNum = null;

        /**
         * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartRecordNo = null;

        /**
         * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndFlag = null;

        /**
         * STRING (10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalNum = null;

        /**
         * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TranItem> || null}
         */
        this.TranItemArray = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultNum = 'ResultNum' in params ? params.ResultNum : null;
        this.StartRecordNo = 'StartRecordNo' in params ? params.StartRecordNo : null;
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.TranItemArray) {
            this.TranItemArray = new Array();
            for (let z in params.TranItemArray) {
                let obj = new TranItem();
                obj.deserialize(params.TranItemArray[z]);
                this.TranItemArray.push(obj);
            }
        }
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryCommonTransferRecharge请求参数结构体
 * @class
 */
class QueryCommonTransferRechargeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(2)，功能标志（1为查询当日数据，0查询历史数据）
         * @type {string || null}
         */
        this.FunctionFlag = null;

        /**
         * STRING(8)，开始日期（格式：20190101）
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * STRING(8)，终止日期（格式：20190101）
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * STRING(10)，页码（起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照建立时间的先后）
         * @type {string || null}
         */
        this.PageNum = null;

        /**
         * STRING(1027)，保留域
         * @type {string || null}
         */
        this.ReservedMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.FunctionFlag = 'FunctionFlag' in params ? params.FunctionFlag : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.PageNum = 'PageNum' in params ? params.PageNum : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;

    }
}

/**
 * 聚鑫商户余额查询输出项
 * @class
 */
class QueryItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子商户账户
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * 子账户属性 
1：普通会员子账号 
2：挂账子账号 
3：手续费子账号 
4：利息子账号
5：平台担保子账号
         * @type {string || null}
         */
        this.SubAcctProperty = null;

        /**
         * 业务平台的子商户Id，唯一
         * @type {string || null}
         */
        this.SubMchId = null;

        /**
         * 子账户名称
         * @type {string || null}
         */
        this.SubAcctName = null;

        /**
         * 账户可用余额
         * @type {string || null}
         */
        this.AcctAvailBal = null;

        /**
         * 可提现金额
         * @type {string || null}
         */
        this.CashAmt = null;

        /**
         * 维护日期 开户日期或修改日期
         * @type {string || null}
         */
        this.MaintenanceDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.SubAcctProperty = 'SubAcctProperty' in params ? params.SubAcctProperty : null;
        this.SubMchId = 'SubMchId' in params ? params.SubMchId : null;
        this.SubAcctName = 'SubAcctName' in params ? params.SubAcctName : null;
        this.AcctAvailBal = 'AcctAvailBal' in params ? params.AcctAvailBal : null;
        this.CashAmt = 'CashAmt' in params ? params.CashAmt : null;
        this.MaintenanceDate = 'MaintenanceDate' in params ? params.MaintenanceDate : null;

    }
}

/**
 * 交易信息
 * @class
 */
class TranItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(50)，资金汇总账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FundSummaryAcctNo = null;

        /**
         * STRING(50)，见证子账户的账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(32)，交易网会员代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(150)，会员名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemberName = null;

        /**
         * STRING(5)，会员证件类型（详情见“常见问题”）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemberGlobalType = null;

        /**
         * STRING(32)，会员证件号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemberGlobalId = null;

        /**
         * STRING(50)，会员绑定账户的账号（提现的银行卡）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MemberAcctNo = null;

        /**
         * STRING(10)，会员绑定账户的本他行类型（1: 本行; 2: 他行）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankType = null;

        /**
         * STRING(150)，会员绑定账户的开户行名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AcctOpenBranchName = null;

        /**
         * STRING(20)，会员绑定账户的开户行的联行号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CnapsBranchId = null;

        /**
         * STRING(20)，会员绑定账户的开户行的超级网银行号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EiconBankBranchId = null;

        /**
         * STRING(30)，会员的手机号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Mobile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FundSummaryAcctNo = 'FundSummaryAcctNo' in params ? params.FundSummaryAcctNo : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.MemberName = 'MemberName' in params ? params.MemberName : null;
        this.MemberGlobalType = 'MemberGlobalType' in params ? params.MemberGlobalType : null;
        this.MemberGlobalId = 'MemberGlobalId' in params ? params.MemberGlobalId : null;
        this.MemberAcctNo = 'MemberAcctNo' in params ? params.MemberAcctNo : null;
        this.BankType = 'BankType' in params ? params.BankType : null;
        this.AcctOpenBranchName = 'AcctOpenBranchName' in params ? params.AcctOpenBranchName : null;
        this.CnapsBranchId = 'CnapsBranchId' in params ? params.CnapsBranchId : null;
        this.EiconBankBranchId = 'EiconBankBranchId' in params ? params.EiconBankBranchId : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;

    }
}

/**
 * 银行在途清算结果信息
 * @class
 */
class ClearItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(8)，日期（格式: 20190101）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Date = null;

        /**
         * STRING(40)，子账号类型（子帐号类型。1: 普通会员子账号; 2: 挂账子账号; 3: 手续费子账号; 4: 利息子账号; 5: 平台担保子账号; 7: 在途; 8: 理财购买子帐号; 9: 理财赎回子帐号; 10: 平台子拥有结算子帐号）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAcctType = null;

        /**
         * STRING(3)，对账状态（0: 成功; 1: 失败）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReconcileStatus = null;

        /**
         * STRING(300)，对账返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReconcileReturnMsg = null;

        /**
         * STRING(20)，清算状态（0: 成功; 1: 失败; 2: 异常; 3: 待处理）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClearingStatus = null;

        /**
         * STRING(2)，清算返回信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClearingReturnMsg = null;

        /**
         * STRING(300)，待清算总金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalAmt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.SubAcctType = 'SubAcctType' in params ? params.SubAcctType : null;
        this.ReconcileStatus = 'ReconcileStatus' in params ? params.ReconcileStatus : null;
        this.ReconcileReturnMsg = 'ReconcileReturnMsg' in params ? params.ReconcileReturnMsg : null;
        this.ClearingStatus = 'ClearingStatus' in params ? params.ClearingStatus : null;
        this.ClearingReturnMsg = 'ClearingReturnMsg' in params ? params.ClearingReturnMsg : null;
        this.TotalAmt = 'TotalAmt' in params ? params.TotalAmt : null;

    }
}

/**
 * BindRelateAcctUnionPay返回参数结构体
 * @class
 */
class BindRelateAcctUnionPayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(1027)，保留域（在同名子账户绑定的场景下，若返回"VERIFIED"则说明无需验证直接绑定成功）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseOrder请求参数结构体
 * @class
 */
class CloseOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户ID，长度不小于5位， 仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 业务订单号，OutTradeNo ， TransactionId二选一，不能都为空,优先使用 OutTradeNo
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 聚鑫订单号，OutTradeNo ， TransactionId二选一，不能都为空,优先使用 OutTradeNo
         * @type {string || null}
         */
        this.TransactionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;

    }
}

/**
 * ApplyWithdrawal返回参数结构体
 * @class
 */
class ApplyWithdrawalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryBalance返回参数结构体
 * @class
 */
class QueryBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次交易返回查询结果记录数
         * @type {string || null}
         */
        this.ResultCount = null;

        /**
         * 起始记录号
         * @type {string || null}
         */
        this.StartRecordOffset = null;

        /**
         * 结束标志
         * @type {string || null}
         */
        this.EndFlag = null;

        /**
         * 符合业务查询条件的记录总数
         * @type {string || null}
         */
        this.TotalCount = null;

        /**
         * 查询结果项
         * @type {Array.<QueryItem> || null}
         */
        this.QueryItems = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ResultCount = 'ResultCount' in params ? params.ResultCount : null;
        this.StartRecordOffset = 'StartRecordOffset' in params ? params.StartRecordOffset : null;
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.QueryItems) {
            this.QueryItems = new Array();
            for (let z in params.QueryItems) {
                let obj = new QueryItem();
                obj.deserialize(params.QueryItems[z]);
                this.QueryItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryBankTransactionDetails返回参数结构体
 * @class
 */
class QueryBankTransactionDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultNum = null;

        /**
         * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartRecordNo = null;

        /**
         * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndFlag = null;

        /**
         * STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalNum = null;

        /**
         * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TransactionItem> || null}
         */
        this.TranItemArray = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ResultNum = 'ResultNum' in params ? params.ResultNum : null;
        this.StartRecordNo = 'StartRecordNo' in params ? params.StartRecordNo : null;
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.TranItemArray) {
            this.TranItemArray = new Array();
            for (let z in params.TranItemArray) {
                let obj = new TransactionItem();
                obj.deserialize(params.TranItemArray[z]);
                this.TranItemArray.push(obj);
            }
        }
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 子订单列表
 * @class
 */
class QueryOrderOutSubOrderList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子订单支付金额
         * @type {number || null}
         */
        this.Amt = null;

        /**
         * 子订单结算应收金额，单位：分
         * @type {number || null}
         */
        this.SubMchIncome = null;

        /**
         * 发货标识，由业务在调用Midas下单接口的时候下发。
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 子订单原始金额
         * @type {number || null}
         */
        this.OriginalAmt = null;

        /**
         * 子订单平台应收金额，单位：分
         * @type {number || null}
         */
        this.PlatformIncome = null;

        /**
         * 子订单商品详情
         * @type {string || null}
         */
        this.ProductDetail = null;

        /**
         * 子订单商品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 核销状态，1表示核销，0表示未核销
         * @type {number || null}
         */
        this.SettleCheck = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 子订单号
         * @type {string || null}
         */
        this.SubOutTradeNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.SubMchIncome = 'SubMchIncome' in params ? params.SubMchIncome : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.OriginalAmt = 'OriginalAmt' in params ? params.OriginalAmt : null;
        this.PlatformIncome = 'PlatformIncome' in params ? params.PlatformIncome : null;
        this.ProductDetail = 'ProductDetail' in params ? params.ProductDetail : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.SettleCheck = 'SettleCheck' in params ? params.SettleCheck : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SubOutTradeNo = 'SubOutTradeNo' in params ? params.SubOutTradeNo : null;

    }
}

/**
 * ReviseMbrProperty返回参数结构体
 * @class
 */
class ReviseMbrPropertyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnifiedOrder请求参数结构体
 * @class
 */
class UnifiedOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ISO 货币代码，CNY
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 支付订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 商品详情，需要URL编码
         * @type {string || null}
         */
        this.ProductDetail = null;

        /**
         * 商品ID，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 商品名称，需要URL编码
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 支付金额，单位： 分
         * @type {number || null}
         */
        this.TotalAmt = null;

        /**
         * 用户ID，长度不小于5位，仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 银行真实渠道.如:bank_pingan
         * @type {string || null}
         */
        this.RealChannel = null;

        /**
         * 子订单信息列表，格式：子订单号、子应用ID、金额。 压缩后最长不可超过65535字节(去除空格，换行，制表符等无意义字符)
         * @type {Array.<UnifiedOrderInSubOrderList> || null}
         */
        this.SubOrderList = null;

        /**
         * 原始金额
         * @type {number || null}
         */
        this.OriginalAmt = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * Web端回调地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 指定支付渠道：  wechat：微信支付  qqwallet：QQ钱包 
 bank：网银支付  只有一个渠道时需要指定
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 透传字段，支付成功回调透传给应用，用于业务透传自定义内容
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 购买数量，不传默认为1
         * @type {number || null}
         */
        this.Quantity = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 结算应收金额，单位：分
         * @type {number || null}
         */
        this.TotalMchIncome = null;

        /**
         * 平台应收金额，单位：分
         * @type {number || null}
         */
        this.TotalPlatformIncome = null;

        /**
         * 微信公众号/小程序支付时为必选，需要传微信下的openid
         * @type {string || null}
         */
        this.WxOpenId = null;

        /**
         * 在服务商模式下，微信公众号/小程序支付时wx_sub_openid和wx_openid二选一
         * @type {string || null}
         */
        this.WxSubOpenId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.ProductDetail = 'ProductDetail' in params ? params.ProductDetail : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.TotalAmt = 'TotalAmt' in params ? params.TotalAmt : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RealChannel = 'RealChannel' in params ? params.RealChannel : null;

        if (params.SubOrderList) {
            this.SubOrderList = new Array();
            for (let z in params.SubOrderList) {
                let obj = new UnifiedOrderInSubOrderList();
                obj.deserialize(params.SubOrderList[z]);
                this.SubOrderList.push(obj);
            }
        }
        this.OriginalAmt = 'OriginalAmt' in params ? params.OriginalAmt : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.TotalMchIncome = 'TotalMchIncome' in params ? params.TotalMchIncome : null;
        this.TotalPlatformIncome = 'TotalPlatformIncome' in params ? params.TotalPlatformIncome : null;
        this.WxOpenId = 'WxOpenId' in params ? params.WxOpenId : null;
        this.WxSubOpenId = 'WxSubOpenId' in params ? params.WxSubOpenId : null;

    }
}

/**
 * QueryCommonTransferRecharge返回参数结构体
 * @class
 */
class QueryCommonTransferRechargeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultNum = null;

        /**
         * STRING(30)，起始记录号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartRecordNo = null;

        /**
         * STRING(2)，结束标志（0: 否; 1: 是）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndFlag = null;

        /**
         * STRING(10)，符合业务查询条件的记录总数（重复次数，一次最多返回20条记录）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TotalNum = null;

        /**
         * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TransferItem> || null}
         */
        this.TranItemArray = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ResultNum = 'ResultNum' in params ? params.ResultNum : null;
        this.StartRecordNo = 'StartRecordNo' in params ? params.StartRecordNo : null;
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.TranItemArray) {
            this.TranItemArray = new Array();
            for (let z in params.TranItemArray) {
                let obj = new TransferItem();
                obj.deserialize(params.TranItemArray[z]);
                this.TranItemArray.push(obj);
            }
        }
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RevokeMemberRechargeThirdPay请求参数结构体
 * @class
 */
class RevokeMemberRechargeThirdPayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(52)，原充值的前置流水号
         * @type {string || null}
         */
        this.OldFillFrontSeqNo = null;

        /**
         * STRING(20)，原充值的支付渠道类型
         * @type {string || null}
         */
        this.OldFillPayChannelType = null;

        /**
         * STRING(52)，原充值的支付渠道交易流水号
         * @type {string || null}
         */
        this.OldPayChannelTranSeqNo = null;

        /**
         * STRING(52)，原充值的电商见证宝订单号
         * @type {string || null}
         */
        this.OldFillEjzbOrderNo = null;

        /**
         * STRING(20)，申请撤销的会员金额
         * @type {string || null}
         */
        this.ApplyCancelMemberAmt = null;

        /**
         * STRING(20)，申请撤销的手续费金额
         * @type {string || null}
         */
        this.ApplyCancelCommission = null;

        /**
         * String(22)，商户号
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(300)，备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * STRING(300)，保留域1
         * @type {string || null}
         */
        this.ReservedMsgOne = null;

        /**
         * STRING(300)，保留域2
         * @type {string || null}
         */
        this.ReservedMsgTwo = null;

        /**
         * STRING(300)，保留域3
         * @type {string || null}
         */
        this.ReservedMsgThree = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OldFillFrontSeqNo = 'OldFillFrontSeqNo' in params ? params.OldFillFrontSeqNo : null;
        this.OldFillPayChannelType = 'OldFillPayChannelType' in params ? params.OldFillPayChannelType : null;
        this.OldPayChannelTranSeqNo = 'OldPayChannelTranSeqNo' in params ? params.OldPayChannelTranSeqNo : null;
        this.OldFillEjzbOrderNo = 'OldFillEjzbOrderNo' in params ? params.OldFillEjzbOrderNo : null;
        this.ApplyCancelMemberAmt = 'ApplyCancelMemberAmt' in params ? params.ApplyCancelMemberAmt : null;
        this.ApplyCancelCommission = 'ApplyCancelCommission' in params ? params.ApplyCancelCommission : null;
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReservedMsgOne = 'ReservedMsgOne' in params ? params.ReservedMsgOne : null;
        this.ReservedMsgTwo = 'ReservedMsgTwo' in params ? params.ReservedMsgTwo : null;
        this.ReservedMsgThree = 'ReservedMsgThree' in params ? params.ReservedMsgThree : null;

    }
}

/**
 * QueryMemberTransaction请求参数结构体
 * @class
 */
class QueryMemberTransactionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(22)，商户号（签约客户号）
         * @type {string || null}
         */
        this.MrchCode = null;

        /**
         * STRING(2)，功能标志（1: 下单预支付; 2: 确认并付款; 3: 退款; 6: 直接支付T+1; 9: 直接支付T+0）
         * @type {string || null}
         */
        this.FunctionFlag = null;

        /**
         * STRING(50)，转出方的见证子账户的账号（付款方）
         * @type {string || null}
         */
        this.OutSubAcctNo = null;

        /**
         * STRING(32)，转出方的交易网会员代码
         * @type {string || null}
         */
        this.OutMemberCode = null;

        /**
         * STRING(150)，转出方的见证子账户的户名（户名是绑卡时上送的账户名称，如果未绑卡，就送OpenCustAcctId接口上送的用户昵称UserNickname）
         * @type {string || null}
         */
        this.OutSubAcctName = null;

        /**
         * STRING(50)，转入方的见证子账户的账号（收款方）
         * @type {string || null}
         */
        this.InSubAcctNo = null;

        /**
         * STRING(32)，转入方的交易网会员代码
         * @type {string || null}
         */
        this.InMemberCode = null;

        /**
         * STRING(150)，转入方的见证子账户的户名（户名是绑卡时上送的账户名称，如果未绑卡，就送OpenCustAcctId接口上送的用户昵称UserNickname）
         * @type {string || null}
         */
        this.InSubAcctName = null;

        /**
         * STRING(20)，交易金额
         * @type {string || null}
         */
        this.TranAmt = null;

        /**
         * STRING(20)，交易费用（平台收取交易费用）
         * @type {string || null}
         */
        this.TranFee = null;

        /**
         * STRING(20)，交易类型（01: 普通交易）
         * @type {string || null}
         */
        this.TranType = null;

        /**
         * STRING(3)，币种（默认: RMB）
         * @type {string || null}
         */
        this.Ccy = null;

        /**
         * STRING(50)，订单号（功能标志为1,2,3时必输）
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * STRING(500)，订单内容
         * @type {string || null}
         */
        this.OrderContent = null;

        /**
         * STRING(300)，备注（建议可送订单号，可在对账文件的备注字段获取到）
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * STRING(1027)，保留域（若需短信验证码则此项必输短信指令号）
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * STRING(300)，网银签名（若需短信验证码则此项必输）
         * @type {string || null}
         */
        this.WebSign = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MrchCode = 'MrchCode' in params ? params.MrchCode : null;
        this.FunctionFlag = 'FunctionFlag' in params ? params.FunctionFlag : null;
        this.OutSubAcctNo = 'OutSubAcctNo' in params ? params.OutSubAcctNo : null;
        this.OutMemberCode = 'OutMemberCode' in params ? params.OutMemberCode : null;
        this.OutSubAcctName = 'OutSubAcctName' in params ? params.OutSubAcctName : null;
        this.InSubAcctNo = 'InSubAcctNo' in params ? params.InSubAcctNo : null;
        this.InMemberCode = 'InMemberCode' in params ? params.InMemberCode : null;
        this.InSubAcctName = 'InSubAcctName' in params ? params.InSubAcctName : null;
        this.TranAmt = 'TranAmt' in params ? params.TranAmt : null;
        this.TranFee = 'TranFee' in params ? params.TranFee : null;
        this.TranType = 'TranType' in params ? params.TranType : null;
        this.Ccy = 'Ccy' in params ? params.Ccy : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.OrderContent = 'OrderContent' in params ? params.OrderContent : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.WebSign = 'WebSign' in params ? params.WebSign : null;

    }
}

/**
 * 交易明细信息
 * @class
 */
class TransactionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(2)，记账标志（1: 转出; 2: 转入）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BookingFlag = null;

        /**
         * STRING(32)，交易状态（0: 成功）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranStatus = null;

        /**
         * STRING(20)，交易金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranAmt = null;

        /**
         * STRING(8)，交易日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranDate = null;

        /**
         * STRING(20)，交易时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranTime = null;

        /**
         * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(20)，记账类型（详情见“常见问题”）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BookingType = null;

        /**
         * STRING(50)，转入见证子账户的帐号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InSubAcctNo = null;

        /**
         * STRING(50)，转出见证子账户的帐号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutSubAcctNo = null;

        /**
         * STRING(300)，备注（返回交易订单号）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BookingFlag = 'BookingFlag' in params ? params.BookingFlag : null;
        this.TranStatus = 'TranStatus' in params ? params.TranStatus : null;
        this.TranAmt = 'TranAmt' in params ? params.TranAmt : null;
        this.TranDate = 'TranDate' in params ? params.TranDate : null;
        this.TranTime = 'TranTime' in params ? params.TranTime : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.BookingType = 'BookingType' in params ? params.BookingType : null;
        this.InSubAcctNo = 'InSubAcctNo' in params ? params.InSubAcctNo : null;
        this.OutSubAcctNo = 'OutSubAcctNo' in params ? params.OutSubAcctNo : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * CheckAcct返回参数结构体
 * @class
 */
class CheckAcctResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 前置流水号，请保存
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryReconciliationDocument返回参数结构体
 * @class
 */
class QueryReconciliationDocumentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * STRING(10)，本次交易返回查询结果记录数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ResultNum = null;

        /**
         * 交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FileItem> || null}
         */
        this.TranItemArray = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.ResultNum = 'ResultNum' in params ? params.ResultNum : null;

        if (params.TranItemArray) {
            this.TranItemArray = new Array();
            for (let z in params.TranItemArray) {
                let obj = new FileItem();
                obj.deserialize(params.TranItemArray[z]);
                this.TranItemArray.push(obj);
            }
        }
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryOrder返回参数结构体
 * @class
 */
class QueryOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回订单数
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 查询结果的订单列表
         * @type {Array.<QueryOrderOutOrderList> || null}
         */
        this.OrderList = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;

        if (params.OrderList) {
            this.OrderList = new Array();
            for (let z in params.OrderList) {
                let obj = new QueryOrderOutOrderList();
                obj.deserialize(params.OrderList[z]);
                this.OrderList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Refund请求参数结构体
 * @class
 */
class RefundRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户ID，长度不小于5位， 仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 退款订单号，仅支持数字、 字母、下划线（_）、横杠字 符（-）、点（.）的组合
         * @type {string || null}
         */
        this.RefundId = null;

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 退款金额，单位：分。备注：当该字段为空或者为0 时，系统会默认使用订单当 实付金额作为退款金额
         * @type {number || null}
         */
        this.TotalRefundAmt = null;

        /**
         * 支持多个子订单批量退款单 个子订单退款支持传 SubOutTradeNo ，也支持传 SubOutTradeNoList ，都传的时候以 SubOutTradeNoList 为准。  如果传了子单退款细节，外 部不需要再传退款金额，平 台应退，商户应退金额，我 们可以直接根据子单退款算出来总和。
         * @type {Array.<RefundOutSubOrderRefundList> || null}
         */
        this.SubOrderRefundList = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 商品订单，仅支持数字、字 母、下划线（_）、横杠字符 （-）、点（.）的组合。  OutTradeNo ,TransactionId 二选一,不能都为空,优先使用 OutTradeNo
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 结算应收金额，单位：分
         * @type {number || null}
         */
        this.MchRefundAmt = null;

        /**
         * 调用下单接口获取的聚鑫交 易订单。  OutTradeNo ,TransactionId 二选一,不能都为空,优先使用 OutTradeNo
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 平台应收金额，单位：分
         * @type {number || null}
         */
        this.PlatformRefundAmt = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.RefundId = 'RefundId' in params ? params.RefundId : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.TotalRefundAmt = 'TotalRefundAmt' in params ? params.TotalRefundAmt : null;

        if (params.SubOrderRefundList) {
            this.SubOrderRefundList = new Array();
            for (let z in params.SubOrderRefundList) {
                let obj = new RefundOutSubOrderRefundList();
                obj.deserialize(params.SubOrderRefundList[z]);
                this.SubOrderRefundList.push(obj);
            }
        }
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.MchRefundAmt = 'MchRefundAmt' in params ? params.MchRefundAmt : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.PlatformRefundAmt = 'PlatformRefundAmt' in params ? params.PlatformRefundAmt : null;

    }
}

/**
 * BindRelateAccReUnionPay返回参数结构体
 * @class
 */
class BindRelateAccReUnionPayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(1027)，保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMsg = null;

        /**
         * String(20)，返回码
         * @type {string || null}
         */
        this.TxnReturnCode = null;

        /**
         * String(100)，返回信息
         * @type {string || null}
         */
        this.TxnReturnMsg = null;

        /**
         * String(22)，交易流水号
         * @type {string || null}
         */
        this.CnsmrSeqNo = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.ReservedMsg = 'ReservedMsg' in params ? params.ReservedMsg : null;
        this.TxnReturnCode = 'TxnReturnCode' in params ? params.TxnReturnCode : null;
        this.TxnReturnMsg = 'TxnReturnMsg' in params ? params.TxnReturnMsg : null;
        this.CnsmrSeqNo = 'CnsmrSeqNo' in params ? params.CnsmrSeqNo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseOrder返回参数结构体
 * @class
 */
class CloseOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 对账文件信息
 * @class
 */
class FileItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(256)，文件名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * STRING(120)，随机密码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RandomPassword = null;

        /**
         * STRING(512)，文件路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * STRING(64)，提取码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DrawCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.RandomPassword = 'RandomPassword' in params ? params.RandomPassword : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.DrawCode = 'DrawCode' in params ? params.DrawCode : null;

    }
}

/**
 * 清分提现明细信息
 * @class
 */
class WithdrawItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * STRING(2)，记账标志（01: 提现; 02: 清分 ）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BookingFlag = null;

        /**
         * STRING(32)，交易状态（0: 成功）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranStatus = null;

        /**
         * STRING(200)，记账说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BookingMsg = null;

        /**
         * STRING(32)，交易网会员代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * STRING(50)，见证子帐户的帐号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * STRING(150)，见证子账户的名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAcctName = null;

        /**
         * STRING(20)，交易金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranAmt = null;

        /**
         * STRING(20)，手续费
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Commission = null;

        /**
         * STRING(8)，交易日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranDate = null;

        /**
         * STRING(20)，交易时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TranTime = null;

        /**
         * STRING(52)，见证系统流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * STRING(300)，备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BookingFlag = 'BookingFlag' in params ? params.BookingFlag : null;
        this.TranStatus = 'TranStatus' in params ? params.TranStatus : null;
        this.BookingMsg = 'BookingMsg' in params ? params.BookingMsg : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.SubAcctName = 'SubAcctName' in params ? params.SubAcctName : null;
        this.TranAmt = 'TranAmt' in params ? params.TranAmt : null;
        this.Commission = 'Commission' in params ? params.Commission : null;
        this.TranDate = 'TranDate' in params ? params.TranDate : null;
        this.TranTime = 'TranTime' in params ? params.TranTime : null;
        this.FrontSeqNo = 'FrontSeqNo' in params ? params.FrontSeqNo : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

module.exports = {
    CheckAcctRequest: CheckAcctRequest,
    QueryOrderRequest: QueryOrderRequest,
    CheckAmountResponse: CheckAmountResponse,
    QueryOrderOutOrderList: QueryOrderOutOrderList,
    UnBindAcctRequest: UnBindAcctRequest,
    Acct: Acct,
    RevRegisterBillSupportWithdrawResponse: RevRegisterBillSupportWithdrawResponse,
    BindAcctResponse: BindAcctResponse,
    CreateAcctResponse: CreateAcctResponse,
    QuerySingleTransactionStatusRequest: QuerySingleTransactionStatusRequest,
    UnifiedOrderInSubOrderList: UnifiedOrderInSubOrderList,
    QuerySmallAmountTransferRequest: QuerySmallAmountTransferRequest,
    QueryBankClearRequest: QueryBankClearRequest,
    ModifyMntMbrBindRelateAcctBankCodeRequest: ModifyMntMbrBindRelateAcctBankCodeRequest,
    RevokeMemberRechargeThirdPayResponse: RevokeMemberRechargeThirdPayResponse,
    BindRelateAccReUnionPayRequest: BindRelateAccReUnionPayRequest,
    CreateCustAcctIdResponse: CreateCustAcctIdResponse,
    QueryBankTransactionDetailsRequest: QueryBankTransactionDetailsRequest,
    RefundResponse: RefundResponse,
    UnifiedOrderResponse: UnifiedOrderResponse,
    DownloadBillRequest: DownloadBillRequest,
    QueryBankWithdrawCashDetailsRequest: QueryBankWithdrawCashDetailsRequest,
    RevRegisterBillSupportWithdrawRequest: RevRegisterBillSupportWithdrawRequest,
    QueryCustAcctIdBalanceResponse: QueryCustAcctIdBalanceResponse,
    QueryCustAcctIdBalanceRequest: QueryCustAcctIdBalanceRequest,
    DownloadBillResponse: DownloadBillResponse,
    RechargeMemberThirdPayResponse: RechargeMemberThirdPayResponse,
    BindAcctRequest: BindAcctRequest,
    ReviseMbrPropertyRequest: ReviseMbrPropertyRequest,
    WithdrawCashMembershipResponse: WithdrawCashMembershipResponse,
    QueryBankWithdrawCashDetailsResponse: QueryBankWithdrawCashDetailsResponse,
    TransferItem: TransferItem,
    RegisterBillSupportWithdrawResponse: RegisterBillSupportWithdrawResponse,
    WithdrawCashMembershipRequest: WithdrawCashMembershipRequest,
    QueryReconciliationDocumentRequest: QueryReconciliationDocumentRequest,
    UnbindRelateAcctResponse: UnbindRelateAcctResponse,
    BindRelateAcctUnionPayRequest: BindRelateAcctUnionPayRequest,
    CheckAmountRequest: CheckAmountRequest,
    CreateAcctRequest: CreateAcctRequest,
    RechargeMemberThirdPayRequest: RechargeMemberThirdPayRequest,
    QueryMemberBindRequest: QueryMemberBindRequest,
    BindRelateAcctSmallAmountResponse: BindRelateAcctSmallAmountResponse,
    QueryMemberTransactionResponse: QueryMemberTransactionResponse,
    RegisterBillSupportWithdrawRequest: RegisterBillSupportWithdrawRequest,
    RefundOutSubOrderRefundList: RefundOutSubOrderRefundList,
    UnbindRelateAcctRequest: UnbindRelateAcctRequest,
    ModifyMntMbrBindRelateAcctBankCodeResponse: ModifyMntMbrBindRelateAcctBankCodeResponse,
    QueryBalanceRequest: QueryBalanceRequest,
    QuerySmallAmountTransferResponse: QuerySmallAmountTransferResponse,
    ApplyWithdrawalRequest: ApplyWithdrawalRequest,
    QueryRefundRequest: QueryRefundRequest,
    CreateCustAcctIdRequest: CreateCustAcctIdRequest,
    QueryBankClearResponse: QueryBankClearResponse,
    BindRelateAcctSmallAmountRequest: BindRelateAcctSmallAmountRequest,
    QueryRefundResponse: QueryRefundResponse,
    UnBindAcctResponse: UnBindAcctResponse,
    QuerySingleTransactionStatusResponse: QuerySingleTransactionStatusResponse,
    QueryMemberBindResponse: QueryMemberBindResponse,
    QueryCommonTransferRechargeRequest: QueryCommonTransferRechargeRequest,
    QueryItem: QueryItem,
    TranItem: TranItem,
    ClearItem: ClearItem,
    BindRelateAcctUnionPayResponse: BindRelateAcctUnionPayResponse,
    CloseOrderRequest: CloseOrderRequest,
    ApplyWithdrawalResponse: ApplyWithdrawalResponse,
    QueryBalanceResponse: QueryBalanceResponse,
    QueryBankTransactionDetailsResponse: QueryBankTransactionDetailsResponse,
    QueryOrderOutSubOrderList: QueryOrderOutSubOrderList,
    ReviseMbrPropertyResponse: ReviseMbrPropertyResponse,
    UnifiedOrderRequest: UnifiedOrderRequest,
    QueryCommonTransferRechargeResponse: QueryCommonTransferRechargeResponse,
    RevokeMemberRechargeThirdPayRequest: RevokeMemberRechargeThirdPayRequest,
    QueryMemberTransactionRequest: QueryMemberTransactionRequest,
    TransactionItem: TransactionItem,
    CheckAcctResponse: CheckAcctResponse,
    QueryReconciliationDocumentResponse: QueryReconciliationDocumentResponse,
    QueryOrderResponse: QueryOrderResponse,
    RefundRequest: RefundRequest,
    BindRelateAccReUnionPayResponse: BindRelateAccReUnionPayResponse,
    CloseOrderResponse: CloseOrderResponse,
    FileItem: FileItem,
    WithdrawItem: WithdrawItem,

}

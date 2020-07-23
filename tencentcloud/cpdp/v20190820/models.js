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
 * QueryInvoice返回参数结构体
 * @class
 */
class QueryInvoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票查询结果
         * @type {QueryInvoiceResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new QueryInvoiceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyTrade请求参数结构体
 * @class
 */
class ApplyTradeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 贸易材料流水号
         * @type {string || null}
         */
        this.TradeFileId = null;

        /**
         * 贸易材料订单号
         * @type {string || null}
         */
        this.TradeOrderId = null;

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 收款人姓名
         * @type {string || null}
         */
        this.PayeeName = null;

        /**
         * 收款人常驻国家或地区编码 (见常见问题)
         * @type {string || null}
         */
        this.PayeeCountryCode = null;

        /**
         * 贸易类型 (GOODS: 商品, SERVICE: 服务)
         * @type {string || null}
         */
        this.TradeType = null;

        /**
         * 交易时间 (格式: yyyyMMdd)
         * @type {string || null}
         */
        this.TradeTime = null;

        /**
         * 交易币种
         * @type {string || null}
         */
        this.TradeCurrency = null;

        /**
         * 交易金额
         * @type {number || null}
         */
        this.TradeAmount = null;

        /**
         * 交易名称 
(TradeType=GOODS时填写物品名称，可填写多个，格式无要求；
TradeType=SERVICE时填写贸易类别，见常见问题-贸易类别)
         * @type {string || null}
         */
        this.TradeName = null;

        /**
         * 交易数量 (TradeType=GOODS 填写物品数量, TradeType=SERVICE填写服务次数)
         * @type {number || null}
         */
        this.TradeCount = null;

        /**
         * 货贸承运人 (TradeType=GOODS 必填)
         * @type {string || null}
         */
        this.GoodsCarrier = null;

        /**
         * 服贸交易细节 (TradeType=GOODS 必填, 见常见问题-交易细节)
         * @type {string || null}
         */
        this.ServiceDetail = null;

        /**
         * 服贸服务时间 (TradeType=GOODS 必填, 见常见问题-服务时间)
         * @type {string || null}
         */
        this.ServiceTime = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TradeFileId = 'TradeFileId' in params ? params.TradeFileId : null;
        this.TradeOrderId = 'TradeOrderId' in params ? params.TradeOrderId : null;
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.PayeeName = 'PayeeName' in params ? params.PayeeName : null;
        this.PayeeCountryCode = 'PayeeCountryCode' in params ? params.PayeeCountryCode : null;
        this.TradeType = 'TradeType' in params ? params.TradeType : null;
        this.TradeTime = 'TradeTime' in params ? params.TradeTime : null;
        this.TradeCurrency = 'TradeCurrency' in params ? params.TradeCurrency : null;
        this.TradeAmount = 'TradeAmount' in params ? params.TradeAmount : null;
        this.TradeName = 'TradeName' in params ? params.TradeName : null;
        this.TradeCount = 'TradeCount' in params ? params.TradeCount : null;
        this.GoodsCarrier = 'GoodsCarrier' in params ? params.GoodsCarrier : null;
        this.ServiceDetail = 'ServiceDetail' in params ? params.ServiceDetail : null;
        this.ServiceTime = 'ServiceTime' in params ? params.ServiceTime : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryOutwardOrder返回参数结构体
 * @class
 */
class QueryOutwardOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询汇出结果
         * @type {QueryOutwardOrderResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new QueryOutwardOrderResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryExchangeRate返回参数结构体
 * @class
 */
class QueryExchangeRateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询汇率结果
         * @type {QueryExchangerateResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new QueryExchangerateResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * QueryAcctBinding请求参数结构体
 * @class
 */
class QueryAcctBindingRequest extends  AbstractModel {
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
         * 由平台客服提供的计费密钥Id
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
         * @type {string || null}
         */
        this.EncryptType = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.EncryptType = 'EncryptType' in params ? params.EncryptType : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 创建商户结果
 * @class
 */
class CreateMerchantResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 响应消息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 创建商户结果数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateMerchantResultData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Data) {
            let obj = new CreateMerchantResultData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * ApplyPayerInfo返回参数结构体
 * @class
 */
class ApplyPayerInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付款人申请结果
         * @type {ApplyPayerinfoResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new ApplyPayerinfoResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RevokeRechargeByThirdPay请求参数结构体
 * @class
 */
class RevokeRechargeByThirdPayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型此接口固定填：RevokeMemberRechargeThirdPayReq
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantCode = null;

        /**
         * 支付渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 子渠道
         * @type {number || null}
         */
        this.PayChannelSubId = null;

        /**
         * 原始充值交易订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 父账户账号，资金汇总账号
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 平台短号(银行分配)
         * @type {string || null}
         */
        this.PlatformShortNumber = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 交易流水号
         * @type {string || null}
         */
        this.TransSequenceNumber = null;

        /**
         * 申请撤销的手续费金额,以元为单位
         * @type {string || null}
         */
        this.TransFee = null;

        /**
         * 第三方支付渠道类型 0001-微信 0002-支付宝 0003-京东支付
         * @type {string || null}
         */
        this.ThirdPayChannel = null;

        /**
         * 第三方渠道订单号或流水号
         * @type {string || null}
         */
        this.ThirdPayChannelOrderId = null;

        /**
         * 充值接口银行返回的流水号(FrontSeqNo)
         * @type {string || null}
         */
        this.OldFrontSequenceNumber = null;

        /**
         * 申请撤销的金额
         * @type {string || null}
         */
        this.CurrencyAmount = null;

        /**
         * 单位，1：元，2：角，3：分 目前固定填1
         * @type {string || null}
         */
        this.CurrencyUnit = null;

        /**
         * 币种 目前固定填RMB
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * Midas环境标识
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 保留域
         * @type {string || null}
         */
        this.ReservedMessage = null;

        /**
         * 备注
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
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.MerchantCode = 'MerchantCode' in params ? params.MerchantCode : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.PayChannelSubId = 'PayChannelSubId' in params ? params.PayChannelSubId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.PlatformShortNumber = 'PlatformShortNumber' in params ? params.PlatformShortNumber : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.TransSequenceNumber = 'TransSequenceNumber' in params ? params.TransSequenceNumber : null;
        this.TransFee = 'TransFee' in params ? params.TransFee : null;
        this.ThirdPayChannel = 'ThirdPayChannel' in params ? params.ThirdPayChannel : null;
        this.ThirdPayChannelOrderId = 'ThirdPayChannelOrderId' in params ? params.ThirdPayChannelOrderId : null;
        this.OldFrontSequenceNumber = 'OldFrontSequenceNumber' in params ? params.OldFrontSequenceNumber : null;
        this.CurrencyAmount = 'CurrencyAmount' in params ? params.CurrencyAmount : null;
        this.CurrencyUnit = 'CurrencyUnit' in params ? params.CurrencyUnit : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * QueryTrade请求参数结构体
 * @class
 */
class QueryTradeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 贸易材料流水号
         * @type {string || null}
         */
        this.TradeFileId = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TradeFileId = 'TradeFileId' in params ? params.TradeFileId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 付款人申请结果
 * @class
 */
class ApplyPayerinfoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 数据
         * @type {ApplyPayerinfoData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            let obj = new ApplyPayerinfoData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryPayerInfo返回参数结构体
 * @class
 */
class QueryPayerInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付款人查询结果
         * @type {QueryPayerinfoResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new QueryPayerinfoResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
3 - 一分钱转账验证，无需再调CheckAcct验证绑卡
4 - 银行四要素验证，无需再调CheckAcct验证绑卡
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
         * 大小额行号，超级网银行号和大小额行号
二选一
         * @type {string || null}
         */
        this.CnapsBranchId = null;

        /**
         * 超级网银行号，超级网银行号和大小额行号
二选一
         * @type {string || null}
         */
        this.EiconBankBranchId = null;

        /**
         * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
         * @type {string || null}
         */
        this.EncryptType = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.EncryptType = 'EncryptType' in params ? params.EncryptType : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * RevResigterBillSupportWithdraw请求参数结构体
 * @class
 */
class RevResigterBillSupportWithdrawRequest extends  AbstractModel {
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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * CreateInvoice返回参数结构体
 * @class
 */
class CreateInvoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票开具结果
         * @type {CreateInvoiceResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new CreateInvoiceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 代理商完税证明
 * @class
 */
class AgentTaxPayment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播银行账号
         * @type {string || null}
         */
        this.AnchorId = null;

        /**
         * 主播姓名
         * @type {string || null}
         */
        this.AnchorName = null;

        /**
         * 主播身份证
         * @type {string || null}
         */
        this.AnchorIDCard = null;

        /**
         * 纳税的开始时间，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 纳税的结束时间，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 流水金额。以“分”为单位
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 应缴税款。以“分”为单位
         * @type {number || null}
         */
        this.Tax = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.AnchorName = 'AnchorName' in params ? params.AnchorName : null;
        this.AnchorIDCard = 'AnchorIDCard' in params ? params.AnchorIDCard : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.Tax = 'Tax' in params ? params.Tax : null;

    }
}

/**
 * QueryOutwardOrder请求参数结构体
 * @class
 */
class QueryOutwardOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对接方汇出指令编号
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryAnchorContractInfo请求参数结构体
 * @class
 */
class QueryAnchorContractInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间，格式为yyyy-MM-dd
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 起始时间，格式为yyyy-MM-dd
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * 红票结果
 * @class
 */
class CreateRedInvoiceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误消息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 错误码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 红票数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CreateRedInvoiceResultData> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CreateRedInvoiceResultData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

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
 * 提交贸易材料结果
 * @class
 */
class ApplyTradeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 提交贸易材料数据
         * @type {ApplyTradeData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            let obj = new ApplyTradeData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * ExecuteMemberTransaction返回参数结构体
 * @class
 */
class ExecuteMemberTransactionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 银行流水号
         * @type {string || null}
         */
        this.FrontSequenceNumber = null;

        /**
         * 保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMessage = null;

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
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.FrontSequenceNumber = 'FrontSequenceNumber' in params ? params.FrontSequenceNumber : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateMerchant请求参数结构体
 * @class
 */
class CreateMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开票平台ID
         * @type {number || null}
         */
        this.InvoicePlatformId = null;

        /**
         * 企业名称
         * @type {string || null}
         */
        this.TaxpayerName = null;

        /**
         * 销方纳税人识别号
         * @type {string || null}
         */
        this.TaxpayerNum = null;

        /**
         * 注册企业法定代表人名称
         * @type {string || null}
         */
        this.LegalPersonName = null;

        /**
         * 联系人
         * @type {string || null}
         */
        this.ContactsName = null;

        /**
         * 联系人手机号
         * @type {string || null}
         */
        this.Phone = null;

        /**
         * 不包含省市名称的地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 地区编码
         * @type {number || null}
         */
        this.RegionCode = null;

        /**
         * 市（地区）名称
         * @type {string || null}
         */
        this.CityName = null;

        /**
         * 开票人
         * @type {string || null}
         */
        this.Drawer = null;

        /**
         * 税务登记证图片（Base64）字符串，需小于 3M
         * @type {string || null}
         */
        this.TaxRegistrationCertificate = null;

        /**
         * 联系人邮箱地址
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 企业电话
         * @type {string || null}
         */
        this.BusinessMobile = null;

        /**
         * 银行名称
         * @type {string || null}
         */
        this.BankName = null;

        /**
         * 银行账号
         * @type {string || null}
         */
        this.BankAccount = null;

        /**
         * 复核人
         * @type {string || null}
         */
        this.Reviewer = null;

        /**
         * 收款人
         * @type {string || null}
         */
        this.Payee = null;

        /**
         * 注册邀请码
         * @type {string || null}
         */
        this.RegisterCode = null;

        /**
         * 不填默认为1，有效状态
0：表示无效；
1:表示有效；
2:表示禁止开蓝票；
3:表示禁止冲红。
         * @type {string || null}
         */
        this.State = null;

        /**
         * 接收推送的消息地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 接入环境。沙箱环境填 sandbox。
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvoicePlatformId = 'InvoicePlatformId' in params ? params.InvoicePlatformId : null;
        this.TaxpayerName = 'TaxpayerName' in params ? params.TaxpayerName : null;
        this.TaxpayerNum = 'TaxpayerNum' in params ? params.TaxpayerNum : null;
        this.LegalPersonName = 'LegalPersonName' in params ? params.LegalPersonName : null;
        this.ContactsName = 'ContactsName' in params ? params.ContactsName : null;
        this.Phone = 'Phone' in params ? params.Phone : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.RegionCode = 'RegionCode' in params ? params.RegionCode : null;
        this.CityName = 'CityName' in params ? params.CityName : null;
        this.Drawer = 'Drawer' in params ? params.Drawer : null;
        this.TaxRegistrationCertificate = 'TaxRegistrationCertificate' in params ? params.TaxRegistrationCertificate : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.BusinessMobile = 'BusinessMobile' in params ? params.BusinessMobile : null;
        this.BankName = 'BankName' in params ? params.BankName : null;
        this.BankAccount = 'BankAccount' in params ? params.BankAccount : null;
        this.Reviewer = 'Reviewer' in params ? params.Reviewer : null;
        this.Payee = 'Payee' in params ? params.Payee : null;
        this.RegisterCode = 'RegisterCode' in params ? params.RegisterCode : null;
        this.State = 'State' in params ? params.State : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 提交申报材料结果
 * @class
 */
class ApplyDeclareResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 提交申报材料数据
         * @type {ApplyDeclareData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            let obj = new ApplyDeclareData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * DeleteAgentTaxPaymentInfo请求参数结构体
 * @class
 */
class DeleteAgentTaxPaymentInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次号
         * @type {number || null}
         */
        this.BatchNum = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchNum = 'BatchNum' in params ? params.BatchNum : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 查询发票结果
 * @class
 */
class QueryInvoiceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误消息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 错误码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 查询发票数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryInvoiceResultData || null}
         */
        this.Data = null;

        /**
         * 订单数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Order || null}
         */
        this.Order = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            let obj = new QueryInvoiceResultData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

        if (params.Order) {
            let obj = new Order();
            obj.deserialize(params.Order)
            this.Order = obj;
        }

    }
}

/**
 * QueryAcctBinding返回参数结构体
 * @class
 */
class QueryAcctBindingResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总行数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 银行卡信息列表
         * @type {Array.<BankCardItem> || null}
         */
        this.BankCardItems = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.BankCardItems) {
            this.BankCardItems = new Array();
            for (let z in params.BankCardItems) {
                let obj = new BankCardItem();
                obj.deserialize(params.BankCardItems[z]);
                this.BankCardItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 贸易材料明细查询数据
 * @class
 */
class QueryTradeData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 贸易材料流水号
         * @type {string || null}
         */
        this.TradeFileId = null;

        /**
         * 贸易材料订单号
         * @type {string || null}
         */
        this.TradeOrderId = null;

        /**
         * 审核状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 收款人姓名
         * @type {string || null}
         */
        this.PayeeName = null;

        /**
         * 收款人常驻国家或地区编码
         * @type {string || null}
         */
        this.PayeeCountryCode = null;

        /**
         * 交易类型
         * @type {string || null}
         */
        this.TradeType = null;

        /**
         * 交易日期
         * @type {string || null}
         */
        this.TradeTime = null;

        /**
         * 交易币种
         * @type {string || null}
         */
        this.TradeCurrency = null;

        /**
         * 交易金额
         * @type {string || null}
         */
        this.TradeAmount = null;

        /**
         * 交易名称
         * @type {string || null}
         */
        this.TradeName = null;

        /**
         * 交易数量
         * @type {number || null}
         */
        this.TradeCount = null;

        /**
         * 货贸承运人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.GoodsCarrier = null;

        /**
         * 服贸交易细节
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceDetail = null;

        /**
         * 服贸服务时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ServiceTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.TradeFileId = 'TradeFileId' in params ? params.TradeFileId : null;
        this.TradeOrderId = 'TradeOrderId' in params ? params.TradeOrderId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.PayeeName = 'PayeeName' in params ? params.PayeeName : null;
        this.PayeeCountryCode = 'PayeeCountryCode' in params ? params.PayeeCountryCode : null;
        this.TradeType = 'TradeType' in params ? params.TradeType : null;
        this.TradeTime = 'TradeTime' in params ? params.TradeTime : null;
        this.TradeCurrency = 'TradeCurrency' in params ? params.TradeCurrency : null;
        this.TradeAmount = 'TradeAmount' in params ? params.TradeAmount : null;
        this.TradeName = 'TradeName' in params ? params.TradeName : null;
        this.TradeCount = 'TradeCount' in params ? params.TradeCount : null;
        this.GoodsCarrier = 'GoodsCarrier' in params ? params.GoodsCarrier : null;
        this.ServiceDetail = 'ServiceDetail' in params ? params.ServiceDetail : null;
        this.ServiceTime = 'ServiceTime' in params ? params.ServiceTime : null;

    }
}

/**
 * ApplyReWithdrawal返回参数结构体
 * @class
 */
class ApplyReWithdrawalResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 重新提现业务订单号
         * @type {string || null}
         */
        this.WithdrawOrderId = null;

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
        this.WithdrawOrderId = 'WithdrawOrderId' in params ? params.WithdrawOrderId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAgentTaxPaymentInfo返回参数结构体
 * @class
 */
class ModifyAgentTaxPaymentInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商完税证明批次信息
         * @type {AgentTaxPaymentBatch || null}
         */
        this.AgentTaxPaymentBatch = null;

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

        if (params.AgentTaxPaymentBatch) {
            let obj = new AgentTaxPaymentBatch();
            obj.deserialize(params.AgentTaxPaymentBatch)
            this.AgentTaxPaymentBatch = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RegisterBill请求参数结构体
 * @class
 */
class RegisterBillRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型此接口固定填：RegBillSupportWithdrawReq
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantCode = null;

        /**
         * 支付渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 子渠道
         * @type {number || null}
         */
        this.PayChannelSubId = null;

        /**
         * 交易订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 父账户账号，资金汇总账号
         * @type {string || null}
         */
        this.BankAccountNo = null;

        /**
         * 平台短号(银行分配)
         * @type {string || null}
         */
        this.PlatformShortNo = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 交易流水号
         * @type {string || null}
         */
        this.TransSeqNo = null;

        /**
         * 暂未使用，默认传0.0
         * @type {string || null}
         */
        this.TranFee = null;

        /**
         * 挂账金额，以元为单位
         * @type {string || null}
         */
        this.OrderAmt = null;

        /**
         * 子账户账号
         * @type {string || null}
         */
        this.BankSubAccountNo = null;

        /**
         * 交易网会员代码
         * @type {string || null}
         */
        this.TranNetMemberCode = null;

        /**
         * 0,登记挂账，1，撤销挂账
         * @type {string || null}
         */
        this.TranType = null;

        /**
         * 保留域
         * @type {string || null}
         */
        this.ReservedMessage = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Midas环境参数
         * @type {string || null}
         */
        this.MidasEnvironment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.MerchantCode = 'MerchantCode' in params ? params.MerchantCode : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.PayChannelSubId = 'PayChannelSubId' in params ? params.PayChannelSubId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BankAccountNo = 'BankAccountNo' in params ? params.BankAccountNo : null;
        this.PlatformShortNo = 'PlatformShortNo' in params ? params.PlatformShortNo : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.TransSeqNo = 'TransSeqNo' in params ? params.TransSeqNo : null;
        this.TranFee = 'TranFee' in params ? params.TranFee : null;
        this.OrderAmt = 'OrderAmt' in params ? params.OrderAmt : null;
        this.BankSubAccountNo = 'BankSubAccountNo' in params ? params.BankSubAccountNo : null;
        this.TranNetMemberCode = 'TranNetMemberCode' in params ? params.TranNetMemberCode : null;
        this.TranType = 'TranType' in params ? params.TranType : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * 发票开具明细
 * @class
 */
class CreateInvoiceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 税收商品编码
         * @type {string || null}
         */
        this.TaxCode = null;

        /**
         * 不含税商品总价（商品含税价总额/（1+税率））。InvoicePlatformId 为1时，该金额为含税总金额。单位为分。
         * @type {number || null}
         */
        this.TotalPrice = null;

        /**
         * 商品税率
         * @type {number || null}
         */
        this.TaxRate = null;

        /**
         * 商品税额（不含税商品总价*税率）。单位为分
         * @type {number || null}
         */
        this.TaxAmount = null;

        /**
         * 税收商品类别
         * @type {string || null}
         */
        this.TaxType = null;

        /**
         * 商品规格
         * @type {string || null}
         */
        this.Models = null;

        /**
         * 商品单位
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 商品数量
         * @type {string || null}
         */
        this.Total = null;

        /**
         * 不含税商品单价。InvoicePlatformId 为1时，该金额为含税单价。
         * @type {string || null}
         */
        this.Price = null;

        /**
         * 含税折扣总额。单位为分
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 优惠政策标志。0：不使用优惠政策；1：使用优惠政策。
         * @type {string || null}
         */
        this.PreferentialPolicyFlag = null;

        /**
         * 零税率标识：
空：非零税率；
0：出口零税率；
1：免税；
2：不征税；
3：普通零税率。
         * @type {string || null}
         */
        this.ZeroTaxFlag = null;

        /**
         * 增值税特殊管理。PreferentialPolicyFlag字段为1时，必填。目前仅支持5%(3%，2%，1.5%)简易征税、免税、不征税。
         * @type {string || null}
         */
        this.VatSpecialManagement = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.TaxCode = 'TaxCode' in params ? params.TaxCode : null;
        this.TotalPrice = 'TotalPrice' in params ? params.TotalPrice : null;
        this.TaxRate = 'TaxRate' in params ? params.TaxRate : null;
        this.TaxAmount = 'TaxAmount' in params ? params.TaxAmount : null;
        this.TaxType = 'TaxType' in params ? params.TaxType : null;
        this.Models = 'Models' in params ? params.Models : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.PreferentialPolicyFlag = 'PreferentialPolicyFlag' in params ? params.PreferentialPolicyFlag : null;
        this.ZeroTaxFlag = 'ZeroTaxFlag' in params ? params.ZeroTaxFlag : null;
        this.VatSpecialManagement = 'VatSpecialManagement' in params ? params.VatSpecialManagement : null;

    }
}

/**
 * 汇出指令申请数据
 * @class
 */
class ApplyOutwardOrderData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 对接方汇出指令编号
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 受理状态
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * RevokeRechargeByThirdPay返回参数结构体
 * @class
 */
class RevokeRechargeByThirdPayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 保留域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMessage = null;

        /**
         * 银行流水号
         * @type {string || null}
         */
        this.FrontSequenceNumber = null;

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
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.FrontSequenceNumber = 'FrontSequenceNumber' in params ? params.FrontSequenceNumber : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
企业: enterprise
缺省: enterprise
         * @type {string || null}
         */
        this.SubMchType = null;

        /**
         * 不填则默认子商户名称
         * @type {string || null}
         */
        this.ShortName = null;

        /**
         * 子商户会员类型：
general: 普通子账户
merchant: 商户子账户
缺省: general
         * @type {string || null}
         */
        this.SubMerchantMemberType = null;

        /**
         * 子商户密钥
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.SubMerchantKey = null;

        /**
         * 子商户私钥
<敏感信息>加密详见《商户端接口敏感信息加密说明》
         * @type {string || null}
         */
        this.SubMerchantPrivateKey = null;

        /**
         * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
         * @type {string || null}
         */
        this.EncryptType = null;

        /**
         * 银行生成的子商户账户，已开户的场景需要录入
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.SubMerchantMemberType = 'SubMerchantMemberType' in params ? params.SubMerchantMemberType : null;
        this.SubMerchantKey = 'SubMerchantKey' in params ? params.SubMerchantKey : null;
        this.SubMerchantPrivateKey = 'SubMerchantPrivateKey' in params ? params.SubMerchantPrivateKey : null;
        this.EncryptType = 'EncryptType' in params ? params.EncryptType : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * CreateAgentTaxPaymentInfos请求参数结构体
 * @class
 */
class CreateAgentTaxPaymentInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 平台渠道
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * 类型。0-视同，1-个体工商户
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 源电子凭证下载地址
         * @type {string || null}
         */
        this.RawElectronicCertUrl = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 完税信息
         * @type {Array.<AgentTaxPayment> || null}
         */
        this.AgentTaxPaymentInfos = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RawElectronicCertUrl = 'RawElectronicCertUrl' in params ? params.RawElectronicCertUrl : null;
        this.FileName = 'FileName' in params ? params.FileName : null;

        if (params.AgentTaxPaymentInfos) {
            this.AgentTaxPaymentInfos = new Array();
            for (let z in params.AgentTaxPaymentInfos) {
                let obj = new AgentTaxPayment();
                obj.deserialize(params.AgentTaxPaymentInfos[z]);
                this.AgentTaxPaymentInfos.push(obj);
            }
        }
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * 付款人申请结果
 * @class
 */
class ApplyPayerinfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;

    }
}

/**
 * 创建红票明细
 * @class
 */
class CreateRedInvoiceItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 发票结果回传地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 业务开票号
         * @type {string || null}
         */
        this.OrderSn = null;

        /**
         * 红字信息表编码
         * @type {string || null}
         */
        this.RedSerialNo = null;

        /**
         * 门店编号
         * @type {string || null}
         */
        this.StoreNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.OrderSn = 'OrderSn' in params ? params.OrderSn : null;
        this.RedSerialNo = 'RedSerialNo' in params ? params.RedSerialNo : null;
        this.StoreNo = 'StoreNo' in params ? params.StoreNo : null;

    }
}

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
         * 1 – 小额转账验证
2 – 短信验证
每个结算账户每天只能使用一次小额转账验证
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

        /**
         * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
         * @type {string || null}
         */
        this.EncryptType = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.EncryptType = 'EncryptType' in params ? params.EncryptType : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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
 * 查询汇出结果
 * @class
 */
class QueryOutwardOrderResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 查询汇出数据
         * @type {QueryOutwardOrderData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            let obj = new QueryOutwardOrderData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * CreateAgentTaxPaymentInfos返回参数结构体
 * @class
 */
class CreateAgentTaxPaymentInfosResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商完税证明批次信息
         * @type {AgentTaxPaymentBatch || null}
         */
        this.AgentTaxPaymentBatch = null;

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

        if (params.AgentTaxPaymentBatch) {
            let obj = new AgentTaxPaymentBatch();
            obj.deserialize(params.AgentTaxPaymentBatch)
            this.AgentTaxPaymentBatch = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryPayerInfo请求参数结构体
 * @class
 */
class QueryPayerInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryMerchantInfoForManagement返回参数结构体
 * @class
 */
class QueryMerchantInfoForManagementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MerchantManagementResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new MerchantManagementResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 商户查询管理端列表
 * @class
 */
class MerchantManagementList extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业名称。
         * @type {string || null}
         */
        this.TaxpayerName = null;

        /**
         * 纳税人识别号(税号)	。
         * @type {string || null}
         */
        this.TaxpayerNum = null;

        /**
         * 请求流水号。
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 开票系统ID
         * @type {number || null}
         */
        this.InvoicePlatformId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaxpayerName = 'TaxpayerName' in params ? params.TaxpayerName : null;
        this.TaxpayerNum = 'TaxpayerNum' in params ? params.TaxpayerNum : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.InvoicePlatformId = 'InvoicePlatformId' in params ? params.InvoicePlatformId : null;

    }
}

/**
 * 发票结果
 * @class
 */
class CreateInvoiceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误消息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 错误码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateInvoiceResultData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            let obj = new CreateInvoiceResultData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

    }
}

/**
 * DescribeOrderStatus请求参数结构体
 * @class
 */
class DescribeOrderStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型，此接口固定填：QueryOrderStatusReq
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantCode = null;

        /**
         * 支付渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 子渠道
         * @type {number || null}
         */
        this.PayChannelSubId = null;

        /**
         * 交易订单号或流水号，提现，充值或会员交易请求时的CnsmrSeqNo值
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 父账户账号，资金汇总账号
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 平台短号(银行分配)
         * @type {string || null}
         */
        this.PlatformShortNumber = null;

        /**
         * 功能标志 0：会员间交易 1：提现 2：充值
         * @type {string || null}
         */
        this.QueryType = null;

        /**
         * 银行流水号
         * @type {string || null}
         */
        this.TransSequenceNumber = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

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
         * Midas环境参数
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 保留字段
         * @type {string || null}
         */
        this.ReservedMessage = null;

        /**
         * 子账户账号 暂未使用
         * @type {string || null}
         */
        this.BankSubAccountNumber = null;

        /**
         * 交易日期 暂未使用
         * @type {string || null}
         */
        this.TransDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.MerchantCode = 'MerchantCode' in params ? params.MerchantCode : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.PayChannelSubId = 'PayChannelSubId' in params ? params.PayChannelSubId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.PlatformShortNumber = 'PlatformShortNumber' in params ? params.PlatformShortNumber : null;
        this.QueryType = 'QueryType' in params ? params.QueryType : null;
        this.TransSequenceNumber = 'TransSequenceNumber' in params ? params.TransSequenceNumber : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.BankSubAccountNumber = 'BankSubAccountNumber' in params ? params.BankSubAccountNumber : null;
        this.TransDate = 'TransDate' in params ? params.TransDate : null;

    }
}

/**
 * 对接账户余额查询结果
 * @class
 */
class QueryMerchantBalanceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 对接账户余额查询数据
         * @type {QueryMerchantBalanceData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            let obj = new QueryMerchantBalanceData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

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
 * QueryTrade返回参数结构体
 * @class
 */
class QueryTradeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 贸易材料明细查询结果
         * @type {QueryTradeResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new QueryTradeResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateRedInvoice请求参数结构体
 * @class
 */
class CreateRedInvoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开票平台ID
         * @type {number || null}
         */
        this.InvoicePlatformId = null;

        /**
         * 红冲明细
         * @type {Array.<CreateRedInvoiceItem> || null}
         */
        this.Invoices = null;

        /**
         * 接入环境。沙箱环境填 sandbox。
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道
         * @type {number || null}
         */
        this.InvoiceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvoicePlatformId = 'InvoicePlatformId' in params ? params.InvoicePlatformId : null;

        if (params.Invoices) {
            this.Invoices = new Array();
            for (let z in params.Invoices) {
                let obj = new CreateRedInvoiceItem();
                obj.deserialize(params.Invoices[z]);
                this.Invoices.push(obj);
            }
        }
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.InvoiceChannel = 'InvoiceChannel' in params ? params.InvoiceChannel : null;

    }
}

/**
 * QueryAcctInfoList返回参数结构体
 * @class
 */
class QueryAcctInfoListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次交易返回查询结果记录数
         * @type {number || null}
         */
        this.ResultCount = null;

        /**
         * 符合业务查询条件的记录总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 查询结果项 [object,object]
         * @type {Array.<QueryAcctItem> || null}
         */
        this.QueryAcctItems = null;

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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.QueryAcctItems) {
            this.QueryAcctItems = new Array();
            for (let z in params.QueryAcctItems) {
                let obj = new QueryAcctItem();
                obj.deserialize(params.QueryAcctItems[z]);
                this.QueryAcctItems.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAgentTaxPaymentInfos请求参数结构体
 * @class
 */
class DeleteAgentTaxPaymentInfosRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次号
         * @type {number || null}
         */
        this.BatchNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchNum = 'BatchNum' in params ? params.BatchNum : null;

    }
}

/**
 * QueryAcctInfoList请求参数结构体
 * @class
 */
class QueryAcctInfoListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 查询开始时间(以开户时间为准)
         * @type {string || null}
         */
        this.QueryAcctBeginTime = null;

        /**
         * 查询结束时间(以开户时间为准)
         * @type {string || null}
         */
        this.QueryAcctEndTime = null;

        /**
         * 分页号,  起始值为1，每次最多返回20条记录，第二页返回的记录数为第21至40条记录，第三页为41至60条记录，顺序均按照开户时间的先后
         * @type {string || null}
         */
        this.PageOffset = null;

        /**
         * 由平台客服提供的计费密钥Id
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
         * @type {string || null}
         */
        this.EncryptType = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.QueryAcctBeginTime = 'QueryAcctBeginTime' in params ? params.QueryAcctBeginTime : null;
        this.QueryAcctEndTime = 'QueryAcctEndTime' in params ? params.QueryAcctEndTime : null;
        this.PageOffset = 'PageOffset' in params ? params.PageOffset : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.EncryptType = 'EncryptType' in params ? params.EncryptType : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 蓝票结果数据
 * @class
 */
class CreateInvoiceResultData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开票状态
         * @type {number || null}
         */
        this.State = null;

        /**
         * 发票ID
         * @type {string || null}
         */
        this.InvoiceId = null;

        /**
         * 业务开票号
         * @type {string || null}
         */
        this.OrderSn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.State = 'State' in params ? params.State : null;
        this.InvoiceId = 'InvoiceId' in params ? params.InvoiceId : null;
        this.OrderSn = 'OrderSn' in params ? params.OrderSn : null;

    }
}

/**
 * QueryAgentTaxPaymentBatch返回参数结构体
 * @class
 */
class QueryAgentTaxPaymentBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商完税证明批次信息
         * @type {AgentTaxPaymentBatch || null}
         */
        this.AgentTaxPaymentBatch = null;

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

        if (params.AgentTaxPaymentBatch) {
            let obj = new AgentTaxPaymentBatch();
            obj.deserialize(params.AgentTaxPaymentBatch)
            this.AgentTaxPaymentBatch = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAgentTaxPaymentInfos返回参数结构体
 * @class
 */
class DeleteAgentTaxPaymentInfosResponse extends  AbstractModel {
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
 * CreateRedInvoice返回参数结构体
 * @class
 */
class CreateRedInvoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 红冲结果
         * @type {CreateRedInvoiceResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new CreateRedInvoiceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 查询发票结果数据
 * @class
 */
class QueryInvoiceResultData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 业务开票号
         * @type {string || null}
         */
        this.OrderSn = null;

        /**
         * 发票状态
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 开票描述
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 开票日期
         * @type {string || null}
         */
        this.TicketDate = null;

        /**
         * 发票号码
         * @type {string || null}
         */
        this.TicketSn = null;

        /**
         * 发票代码
         * @type {string || null}
         */
        this.TicketCode = null;

        /**
         * 检验码
         * @type {string || null}
         */
        this.CheckCode = null;

        /**
         * 含税金额(元)
         * @type {string || null}
         */
        this.AmountWithTax = null;

        /**
         * 不含税金额(元)
         * @type {string || null}
         */
        this.AmountWithoutTax = null;

        /**
         * 税额(元)
         * @type {string || null}
         */
        this.TaxAmount = null;

        /**
         * 是否被红冲
         * @type {number || null}
         */
        this.IsRedWashed = null;

        /**
         * pdf地址
         * @type {string || null}
         */
        this.PdfUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.OrderSn = 'OrderSn' in params ? params.OrderSn : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.TicketDate = 'TicketDate' in params ? params.TicketDate : null;
        this.TicketSn = 'TicketSn' in params ? params.TicketSn : null;
        this.TicketCode = 'TicketCode' in params ? params.TicketCode : null;
        this.CheckCode = 'CheckCode' in params ? params.CheckCode : null;
        this.AmountWithTax = 'AmountWithTax' in params ? params.AmountWithTax : null;
        this.AmountWithoutTax = 'AmountWithoutTax' in params ? params.AmountWithoutTax : null;
        this.TaxAmount = 'TaxAmount' in params ? params.TaxAmount : null;
        this.IsRedWashed = 'IsRedWashed' in params ? params.IsRedWashed : null;
        this.PdfUrl = 'PdfUrl' in params ? params.PdfUrl : null;

    }
}

/**
 * RechargeByThirdPay请求参数结构体
 * @class
 */
class RechargeByThirdPayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型 此接口固定填：MemberRechargeThirdPayReq
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantCode = null;

        /**
         * 支付渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 子渠道
         * @type {number || null}
         */
        this.PayChannelSubId = null;

        /**
         * 交易订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 父账户账号，资金汇总账号
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 平台短号(银行分配)
         * @type {string || null}
         */
        this.PlatformShortNumber = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 交易流水号
         * @type {string || null}
         */
        this.TransSequenceNumber = null;

        /**
         * 子账户账号
         * @type {string || null}
         */
        this.BankSubAccountNumber = null;

        /**
         * 交易手续费，以元为单位
         * @type {string || null}
         */
        this.TransFee = null;

        /**
         * 第三方支付渠道类型 0001-微信 0002-支付宝 0003-京东支付
         * @type {string || null}
         */
        this.ThirdPayChannel = null;

        /**
         * 第三方渠道商户号
         * @type {string || null}
         */
        this.ThirdPayChannelMerchantCode = null;

        /**
         * 第三方渠道订单号或流水号
         * @type {string || null}
         */
        this.ThirdPayChannelOrderId = null;

        /**
         * 交易金额
         * @type {string || null}
         */
        this.CurrencyAmount = null;

        /**
         * 单位，1：元，2：角，3：分
         * @type {string || null}
         */
        this.CurrencyUnit = null;

        /**
         * 币种
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 交易网会员代码
         * @type {string || null}
         */
        this.TransNetMemberCode = null;

        /**
         * midas环境参数
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 保留域
         * @type {string || null}
         */
        this.ReservedMessage = null;

        /**
         * 备注
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
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.MerchantCode = 'MerchantCode' in params ? params.MerchantCode : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.PayChannelSubId = 'PayChannelSubId' in params ? params.PayChannelSubId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.PlatformShortNumber = 'PlatformShortNumber' in params ? params.PlatformShortNumber : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.TransSequenceNumber = 'TransSequenceNumber' in params ? params.TransSequenceNumber : null;
        this.BankSubAccountNumber = 'BankSubAccountNumber' in params ? params.BankSubAccountNumber : null;
        this.TransFee = 'TransFee' in params ? params.TransFee : null;
        this.ThirdPayChannel = 'ThirdPayChannel' in params ? params.ThirdPayChannel : null;
        this.ThirdPayChannelMerchantCode = 'ThirdPayChannelMerchantCode' in params ? params.ThirdPayChannelMerchantCode : null;
        this.ThirdPayChannelOrderId = 'ThirdPayChannelOrderId' in params ? params.ThirdPayChannelOrderId : null;
        this.CurrencyAmount = 'CurrencyAmount' in params ? params.CurrencyAmount : null;
        this.CurrencyUnit = 'CurrencyUnit' in params ? params.CurrencyUnit : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.TransNetMemberCode = 'TransNetMemberCode' in params ? params.TransNetMemberCode : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

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
 * QueryAcctInfo请求参数结构体
 * @class
 */
class QueryAcctInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫平台分配的支付MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 业务平台的子商户Id，唯一
         * @type {string || null}
         */
        this.SubMchId = null;

        /**
         * 由平台客服提供的计费密钥Id
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
         * @type {string || null}
         */
        this.EncryptType = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.EncryptType = 'EncryptType' in params ? params.EncryptType : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * DescribeChargeDetail返回参数结构体
 * @class
 */
class DescribeChargeDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易状态 （0：成功，1：失败，2：异常,3:冲正，5：待处理）
         * @type {string || null}
         */
        this.OrderStatus = null;

        /**
         * 交易金额
         * @type {string || null}
         */
        this.OrderAmount = null;

        /**
         * 佣金费
         * @type {string || null}
         */
        this.CommissionAmount = null;

        /**
         * 支付方式  0-冻结支付 1-普通支付
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * 交易日期
         * @type {string || null}
         */
        this.OrderDate = null;

        /**
         * 交易时间
         * @type {string || null}
         */
        this.OrderTime = null;

        /**
         * 订单实际转入见证子账户的名称
         * @type {string || null}
         */
        this.OrderActualInSubAccountName = null;

        /**
         * 订单实际转入见证子账户的帐号
         * @type {string || null}
         */
        this.OrderActualInSubAccountNumber = null;

        /**
         * 订单实际转入见证子账户的帐号
         * @type {string || null}
         */
        this.OrderInSubAccountName = null;

        /**
         * 订单转入见证子账户的帐号
         * @type {string || null}
         */
        this.OrderInSubAccountNumber = null;

        /**
         * 银行流水号
         * @type {string || null}
         */
        this.FrontSequenceNumber = null;

        /**
         * 当充值失败时，返回交易失败原因
         * @type {string || null}
         */
        this.FailMessage = null;

        /**
         * 请求类型
         * @type {string || null}
         */
        this.RequestType = null;

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
        this.OrderStatus = 'OrderStatus' in params ? params.OrderStatus : null;
        this.OrderAmount = 'OrderAmount' in params ? params.OrderAmount : null;
        this.CommissionAmount = 'CommissionAmount' in params ? params.CommissionAmount : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.OrderDate = 'OrderDate' in params ? params.OrderDate : null;
        this.OrderTime = 'OrderTime' in params ? params.OrderTime : null;
        this.OrderActualInSubAccountName = 'OrderActualInSubAccountName' in params ? params.OrderActualInSubAccountName : null;
        this.OrderActualInSubAccountNumber = 'OrderActualInSubAccountNumber' in params ? params.OrderActualInSubAccountNumber : null;
        this.OrderInSubAccountName = 'OrderInSubAccountName' in params ? params.OrderInSubAccountName : null;
        this.OrderInSubAccountNumber = 'OrderInSubAccountNumber' in params ? params.OrderInSubAccountNumber : null;
        this.FrontSequenceNumber = 'FrontSequenceNumber' in params ? params.FrontSequenceNumber : null;
        this.FailMessage = 'FailMessage' in params ? params.FailMessage : null;
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 提交申报材料结果
 * @class
 */
class ApplyDeclareData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 第三方指令编号
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 受理状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 申报流水号
         * @type {string || null}
         */
        this.DeclareId = null;

        /**
         * 原申报流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalDeclareId = null;

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.DeclareId = 'DeclareId' in params ? params.DeclareId : null;
        this.OriginalDeclareId = 'OriginalDeclareId' in params ? params.OriginalDeclareId : null;
        this.PayerId = 'PayerId' in params ? params.PayerId : null;

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
 * 商户管理端结果
 * @class
 */
class MerchantManagementResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总数。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 商户列表。
         * @type {Array.<MerchantManagementList> || null}
         */
        this.List = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Total = 'Total' in params ? params.Total : null;

        if (params.List) {
            this.List = new Array();
            for (let z in params.List) {
                let obj = new MerchantManagementList();
                obj.deserialize(params.List[z]);
                this.List.push(obj);
            }
        }

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
 * 付款人查询数据
 * @class
 */
class QueryPayerinfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 审核状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 付款人类型
         * @type {string || null}
         */
        this.PayerType = null;

        /**
         * 付款人姓名
         * @type {string || null}
         */
        this.PayerName = null;

        /**
         * 付款人证件类型
         * @type {string || null}
         */
        this.PayerIdType = null;

        /**
         * 付款人证件号
         * @type {string || null}
         */
        this.PayerIdNo = null;

        /**
         * 付款人联系电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayerContactNumber = null;

        /**
         * 付款人联系邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayerEmailAddress = null;

        /**
         * 付款人常驻国家或地区编码
         * @type {string || null}
         */
        this.PayerCountryCode = null;

        /**
         * 付款人联系名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayerContactName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.PayerType = 'PayerType' in params ? params.PayerType : null;
        this.PayerName = 'PayerName' in params ? params.PayerName : null;
        this.PayerIdType = 'PayerIdType' in params ? params.PayerIdType : null;
        this.PayerIdNo = 'PayerIdNo' in params ? params.PayerIdNo : null;
        this.PayerContactNumber = 'PayerContactNumber' in params ? params.PayerContactNumber : null;
        this.PayerEmailAddress = 'PayerEmailAddress' in params ? params.PayerEmailAddress : null;
        this.PayerCountryCode = 'PayerCountryCode' in params ? params.PayerCountryCode : null;
        this.PayerContactName = 'PayerContactName' in params ? params.PayerContactName : null;

    }
}

/**
 * 对接账户余额查询数据
 * @class
 */
class QueryMerchantBalanceData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 余额币种
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 账户余额
         * @type {string || null}
         */
        this.Balance = null;

        /**
         * 商户ID
         * @type {string || null}
         */
        this.MerchantId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.Balance = 'Balance' in params ? params.Balance : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 查询汇率结果
 * @class
 */
class QueryExchangerateResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 查询汇率数据数组
         * @type {Array.<QueryExchangerateData> || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QueryExchangerateData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

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
 * QueryMerchantBalance请求参数结构体
 * @class
 */
class QueryMerchantBalanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 余额币种
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
         * 银行生成的子商户账户
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
 * DescribeChargeDetail请求参数结构体
 * @class
 */
class DescribeChargeDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantCode = null;

        /**
         * 支付渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 子渠道
         * @type {number || null}
         */
        this.PayChannelSubId = null;

        /**
         * 原始交易订单号或者流水号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 父账户账号，资金汇总账号
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 收单渠道类型
         * @type {string || null}
         */
        this.AcquiringChannelType = null;

        /**
         * 平台短号(银行分配)
         * @type {string || null}
         */
        this.PlatformShortNumber = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 交易流水号
         * @type {string || null}
         */
        this.TransSequenceNumber = null;

        /**
         * Midas环境参数
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 保留域
         * @type {string || null}
         */
        this.ReservedMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.MerchantCode = 'MerchantCode' in params ? params.MerchantCode : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.PayChannelSubId = 'PayChannelSubId' in params ? params.PayChannelSubId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.AcquiringChannelType = 'AcquiringChannelType' in params ? params.AcquiringChannelType : null;
        this.PlatformShortNumber = 'PlatformShortNumber' in params ? params.PlatformShortNumber : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.TransSequenceNumber = 'TransSequenceNumber' in params ? params.TransSequenceNumber : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;

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
 * 查询汇率数据
 * @class
 */
class QueryExchangerateData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 汇率
         * @type {string || null}
         */
        this.Rate = null;

        /**
         * 源币种
         * @type {string || null}
         */
        this.SourceCurrency = null;

        /**
         * 目的币种
         * @type {string || null}
         */
        this.TargetCurrency = null;

        /**
         * 汇率时间
         * @type {string || null}
         */
        this.RateTime = null;

        /**
         * 基准币种
         * @type {string || null}
         */
        this.BaseCurrency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Rate = 'Rate' in params ? params.Rate : null;
        this.SourceCurrency = 'SourceCurrency' in params ? params.SourceCurrency : null;
        this.TargetCurrency = 'TargetCurrency' in params ? params.TargetCurrency : null;
        this.RateTime = 'RateTime' in params ? params.RateTime : null;
        this.BaseCurrency = 'BaseCurrency' in params ? params.BaseCurrency : null;

    }
}

/**
 * 聚鑫提现订单内容
 * @class
 */
class WithdrawBill extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务提现订单号
         * @type {string || null}
         */
        this.WithdrawOrderId = null;

        /**
         * 提现日期
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 提现金额，单位： 分
         * @type {string || null}
         */
        this.PayAmt = null;

        /**
         * 聚鑫分配转入账户appid
         * @type {string || null}
         */
        this.InSubAppId = null;

        /**
         * 聚鑫分配转出账户appid
         * @type {string || null}
         */
        this.OutSubAppId = null;

        /**
         * ISO货币代码
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 透传字段
         * @type {string || null}
         */
        this.MetaData = null;

        /**
         * 扩展字段
         * @type {string || null}
         */
        this.ExtendFieldData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WithdrawOrderId = 'WithdrawOrderId' in params ? params.WithdrawOrderId : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.PayAmt = 'PayAmt' in params ? params.PayAmt : null;
        this.InSubAppId = 'InSubAppId' in params ? params.InSubAppId : null;
        this.OutSubAppId = 'OutSubAppId' in params ? params.OutSubAppId : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.MetaData = 'MetaData' in params ? params.MetaData : null;
        this.ExtendFieldData = 'ExtendFieldData' in params ? params.ExtendFieldData : null;

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

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * QueryMerchantBalance返回参数结构体
 * @class
 */
class QueryMerchantBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对接方账户余额查询结果
         * @type {QueryMerchantBalanceResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new QueryMerchantBalanceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryAcctInfo返回参数结构体
 * @class
 */
class QueryAcctInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 子商户名称
         * @type {string || null}
         */
        this.SubMchName = null;

        /**
         * 子商户类型：
个人: personal
企业：enterprise
缺省： enterprise
         * @type {string || null}
         */
        this.SubMchType = null;

        /**
         * 不填则默认子商户名称
         * @type {string || null}
         */
        this.ShortName = null;

        /**
         * 子商户地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 子商户联系人子商户联系人
<敏感信息>
         * @type {string || null}
         */
        this.Contact = null;

        /**
         * 联系人手机号
<敏感信息>
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 邮箱 
<敏感信息>
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 子商户id
         * @type {string || null}
         */
        this.SubMchId = null;

        /**
         * 子账户
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * 子商户会员类型：
general:普通子账户
merchant:商户子账户
缺省： general
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubMerchantMemberType = null;

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
        this.SubMchName = 'SubMchName' in params ? params.SubMchName : null;
        this.SubMchType = 'SubMchType' in params ? params.SubMchType : null;
        this.ShortName = 'ShortName' in params ? params.ShortName : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Contact = 'Contact' in params ? params.Contact : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.SubMchId = 'SubMchId' in params ? params.SubMchId : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.SubMerchantMemberType = 'SubMerchantMemberType' in params ? params.SubMerchantMemberType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryAgentTaxPaymentBatch请求参数结构体
 * @class
 */
class QueryAgentTaxPaymentBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次号
         * @type {number || null}
         */
        this.BatchNum = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchNum = 'BatchNum' in params ? params.BatchNum : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 付款人查询结果
 * @class
 */
class QueryPayerinfoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 付款人查询数据
         * @type {QueryPayerinfoData || null}
         */
        this.Data = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;

        if (params.Data) {
            let obj = new QueryPayerinfoData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }

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
 * 线下查票-订单明细
 * @class
 */
class OrderItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 明细金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AmountHasTax = null;

        /**
         * 优惠金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 商品名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 型号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Models = null;

        /**
         * 数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 数量单位
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Unit = null;

        /**
         * 默认“0”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 单价
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Price = null;

        /**
         * 商品编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaxCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AmountHasTax = 'AmountHasTax' in params ? params.AmountHasTax : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Models = 'Models' in params ? params.Models : null;
        this.Total = 'Total' in params ? params.Total : null;
        this.Unit = 'Unit' in params ? params.Unit : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.TaxCode = 'TaxCode' in params ? params.TaxCode : null;

    }
}

/**
 * RefundMemberTransaction请求参数结构体
 * @class
 */
class RefundMemberTransactionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转出见证子账户的户名
         * @type {string || null}
         */
        this.OutSubAccountName = null;

        /**
         * 转入见证子账户的户名
         * @type {string || null}
         */
        this.InSubAccountName = null;

        /**
         * 子渠道
         * @type {number || null}
         */
        this.PayChannelSubId = null;

        /**
         * 转出见证子账户账号
         * @type {string || null}
         */
        this.OutSubAccountNumber = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 转入见证子账户账号
         * @type {string || null}
         */
        this.InSubAccountNumber = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 父账户账号，资金汇总账号
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 原老订单流水号
         * @type {string || null}
         */
        this.OldTransSequenceNumber = null;

        /**
         * 银行注册商户号
         * @type {string || null}
         */
        this.MerchantCode = null;

        /**
         * 请求类型，固定为MemberTransactionRefundReq
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 交易金额
         * @type {string || null}
         */
        this.CurrencyAmount = null;

        /**
         * 交易流水号
         * @type {string || null}
         */
        this.TransSequenceNumber = null;

        /**
         * 渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 原订单号
         * @type {string || null}
         */
        this.OldOrderId = null;

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * Midas环境标识 release 现网环境 sandbox 沙箱环境
development 开发环境
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 转出子账户交易网会员代码
         * @type {string || null}
         */
        this.OutTransNetMemberCode = null;

        /**
         * 转入子账户交易网会员代码
         * @type {string || null}
         */
        this.InTransNetMemberCode = null;

        /**
         * 保留域
         * @type {string || null}
         */
        this.ReservedMessage = null;

        /**
         * 平台短号(银行分配)
         * @type {string || null}
         */
        this.PlatformShortNumber = null;

        /**
         * 0-登记挂账，1-撤销挂账
         * @type {string || null}
         */
        this.TransType = null;

        /**
         * 交易手续费
         * @type {string || null}
         */
        this.TransFee = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutSubAccountName = 'OutSubAccountName' in params ? params.OutSubAccountName : null;
        this.InSubAccountName = 'InSubAccountName' in params ? params.InSubAccountName : null;
        this.PayChannelSubId = 'PayChannelSubId' in params ? params.PayChannelSubId : null;
        this.OutSubAccountNumber = 'OutSubAccountNumber' in params ? params.OutSubAccountNumber : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.InSubAccountNumber = 'InSubAccountNumber' in params ? params.InSubAccountNumber : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.OldTransSequenceNumber = 'OldTransSequenceNumber' in params ? params.OldTransSequenceNumber : null;
        this.MerchantCode = 'MerchantCode' in params ? params.MerchantCode : null;
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.CurrencyAmount = 'CurrencyAmount' in params ? params.CurrencyAmount : null;
        this.TransSequenceNumber = 'TransSequenceNumber' in params ? params.TransSequenceNumber : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.OldOrderId = 'OldOrderId' in params ? params.OldOrderId : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.OutTransNetMemberCode = 'OutTransNetMemberCode' in params ? params.OutTransNetMemberCode : null;
        this.InTransNetMemberCode = 'InTransNetMemberCode' in params ? params.InTransNetMemberCode : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.PlatformShortNumber = 'PlatformShortNumber' in params ? params.PlatformShortNumber : null;
        this.TransType = 'TransType' in params ? params.TransType : null;
        this.TransFee = 'TransFee' in params ? params.TransFee : null;

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
 * RegisterBill返回参数结构体
 * @class
 */
class RegisterBillResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 银行流水号
         * @type {string || null}
         */
        this.FrontSeqNo = null;

        /**
         * 保留字段
         * @type {string || null}
         */
        this.ReservedMessage = null;

        /**
         * 请求类型
         * @type {string || null}
         */
        this.RequestType = null;

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
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ApplyOutwardOrder请求参数结构体
 * @class
 */
class ApplyOutwardOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对接方汇出指令编号
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 定价币种
         * @type {string || null}
         */
        this.PricingCurrency = null;

        /**
         * 源币种
         * @type {string || null}
         */
        this.SourceCurrency = null;

        /**
         * 目的币种
         * @type {string || null}
         */
        this.TargetCurrency = null;

        /**
         * 收款人类型（银行卡填"BANK_ACCOUNT"）
         * @type {string || null}
         */
        this.PayeeType = null;

        /**
         * 收款人账号
         * @type {string || null}
         */
        this.PayeeAccount = null;

        /**
         * 源币种金额
         * @type {number || null}
         */
        this.SourceAmount = null;

        /**
         * 目的金额
         * @type {number || null}
         */
        this.TargetAmount = null;

        /**
         * 收款人姓名（PayeeType为"BANK_COUNT"时必填）
         * @type {string || null}
         */
        this.PayeeName = null;

        /**
         * 收款人地址（PayeeType为"BANK_COUNT"时必填）
         * @type {string || null}
         */
        this.PayeeAddress = null;

        /**
         * 收款人银行账号类型（PayeeType为"BANK_COUNT"时必填）
个人填"INDIVIDUAL"
企业填"CORPORATE"
         * @type {string || null}
         */
        this.PayeeBankAccountType = null;

        /**
         * 收款人国家或地区编码（PayeeType为"BANK_COUNT"时必填）
         * @type {string || null}
         */
        this.PayeeCountryCode = null;

        /**
         * 收款人开户银行名称（PayeeType为"BANK_COUNT"时必填）
         * @type {string || null}
         */
        this.PayeeBankName = null;

        /**
         * 收款人开户银行地址（PayeeType为"BANK_COUNT"时必填）
         * @type {string || null}
         */
        this.PayeeBankAddress = null;

        /**
         * 收款人开户银行所在国家或地区编码（PayeeType为"BANK_COUNT"时必填）
         * @type {string || null}
         */
        this.PayeeBankDistrict = null;

        /**
         * 收款银行SwiftCode（PayeeType为"BANK_COUNT"时必填）
         * @type {string || null}
         */
        this.PayeeBankSwiftCode = null;

        /**
         * 收款银行国际编码类型
         * @type {string || null}
         */
        this.PayeeBankType = null;

        /**
         * 收款银行国际编码
         * @type {string || null}
         */
        this.PayeeBankCode = null;

        /**
         * 收款人附言
         * @type {string || null}
         */
        this.ReferenceForBeneficiary = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.PricingCurrency = 'PricingCurrency' in params ? params.PricingCurrency : null;
        this.SourceCurrency = 'SourceCurrency' in params ? params.SourceCurrency : null;
        this.TargetCurrency = 'TargetCurrency' in params ? params.TargetCurrency : null;
        this.PayeeType = 'PayeeType' in params ? params.PayeeType : null;
        this.PayeeAccount = 'PayeeAccount' in params ? params.PayeeAccount : null;
        this.SourceAmount = 'SourceAmount' in params ? params.SourceAmount : null;
        this.TargetAmount = 'TargetAmount' in params ? params.TargetAmount : null;
        this.PayeeName = 'PayeeName' in params ? params.PayeeName : null;
        this.PayeeAddress = 'PayeeAddress' in params ? params.PayeeAddress : null;
        this.PayeeBankAccountType = 'PayeeBankAccountType' in params ? params.PayeeBankAccountType : null;
        this.PayeeCountryCode = 'PayeeCountryCode' in params ? params.PayeeCountryCode : null;
        this.PayeeBankName = 'PayeeBankName' in params ? params.PayeeBankName : null;
        this.PayeeBankAddress = 'PayeeBankAddress' in params ? params.PayeeBankAddress : null;
        this.PayeeBankDistrict = 'PayeeBankDistrict' in params ? params.PayeeBankDistrict : null;
        this.PayeeBankSwiftCode = 'PayeeBankSwiftCode' in params ? params.PayeeBankSwiftCode : null;
        this.PayeeBankType = 'PayeeBankType' in params ? params.PayeeBankType : null;
        this.PayeeBankCode = 'PayeeBankCode' in params ? params.PayeeBankCode : null;
        this.ReferenceForBeneficiary = 'ReferenceForBeneficiary' in params ? params.ReferenceForBeneficiary : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * RechargeByThirdPay返回参数结构体
 * @class
 */
class RechargeByThirdPayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 保留字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReservedMessage = null;

        /**
         * 银行流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FrontSequenceNumber = null;

        /**
         * 请求类型
         * @type {string || null}
         */
        this.RequestType = null;

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
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.FrontSequenceNumber = 'FrontSequenceNumber' in params ? params.FrontSequenceNumber : null;
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * ApplyReWithdrawal请求参数结构体
 * @class
 */
class ApplyReWithdrawalRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫业务类型
         * @type {number || null}
         */
        this.BusinessType = null;

        /**
         * 由平台客服提供的计费密钥Id
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 提现信息
         * @type {WithdrawBill || null}
         */
        this.Body = null;

        /**
         * 聚鑫业务ID
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BusinessType = 'BusinessType' in params ? params.BusinessType : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;

        if (params.Body) {
            let obj = new WithdrawBill();
            obj.deserialize(params.Body)
            this.Body = obj;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * 代理商完税证明批次信息
 * @class
 */
class AgentTaxPaymentBatch extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态消息
         * @type {string || null}
         */
        this.StatusMsg = null;

        /**
         * 批次号
         * @type {number || null}
         */
        this.BatchNum = null;

        /**
         * 录入记录的条数
         * @type {number || null}
         */
        this.InfoNum = null;

        /**
         * 源电子凭证下载地址
         * @type {string || null}
         */
        this.RawElectronicCertUrl = null;

        /**
         * 代理商账号
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 状态码。0表示下载成功
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 渠道号
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * 0-视同，1-个体工商户
         * @type {number || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StatusMsg = 'StatusMsg' in params ? params.StatusMsg : null;
        this.BatchNum = 'BatchNum' in params ? params.BatchNum : null;
        this.InfoNum = 'InfoNum' in params ? params.InfoNum : null;
        this.RawElectronicCertUrl = 'RawElectronicCertUrl' in params ? params.RawElectronicCertUrl : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateInvoice请求参数结构体
 * @class
 */
class CreateInvoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开票平台ID。0：高灯，1：票易通
         * @type {number || null}
         */
        this.InvoicePlatformId = null;

        /**
         * 抬头类型：1：个人/政府事业单位；2：企业
         * @type {number || null}
         */
        this.TitleType = null;

        /**
         * 购方名称
         * @type {string || null}
         */
        this.BuyerTitle = null;

        /**
         * 业务开票号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 含税总金额（单位为分）
         * @type {number || null}
         */
        this.AmountHasTax = null;

        /**
         * 总税额（单位为分）
         * @type {number || null}
         */
        this.TaxAmount = null;

        /**
         * 不含税总金额（单位为分）。InvoicePlatformId 为1时，传默认值-1
         * @type {number || null}
         */
        this.AmountWithoutTax = null;

        /**
         * 销方纳税人识别号
         * @type {string || null}
         */
        this.SellerTaxpayerNum = null;

        /**
         * 销方名称。（不填默认读取商户注册时输入的信息）
         * @type {string || null}
         */
        this.SellerName = null;

        /**
         * 销方地址。（不填默认读取商户注册时输入的信息）
         * @type {string || null}
         */
        this.SellerAddress = null;

        /**
         * 销方电话。（不填默认读取商户注册时输入的信息）
         * @type {string || null}
         */
        this.SellerPhone = null;

        /**
         * 销方银行名称。（不填默认读取商户注册时输入的信息）
         * @type {string || null}
         */
        this.SellerBankName = null;

        /**
         * 销方银行账号。（不填默认读取商户注册时输入的信息）
         * @type {string || null}
         */
        this.SellerBankAccount = null;

        /**
         * 购方纳税人识别号（购方票面信息）,若抬头类型为2时，必传
         * @type {string || null}
         */
        this.BuyerTaxpayerNum = null;

        /**
         * 购方地址。开具专用发票时必填
         * @type {string || null}
         */
        this.BuyerAddress = null;

        /**
         * 购方银行名称。开具专用发票时必填
         * @type {string || null}
         */
        this.BuyerBankName = null;

        /**
         * 购方银行账号。开具专用发票时必填
         * @type {string || null}
         */
        this.BuyerBankAccount = null;

        /**
         * 购方电话。开具专用发票时必填
         * @type {string || null}
         */
        this.BuyerPhone = null;

        /**
         * 收票人邮箱。若填入，会收到发票推送邮件
         * @type {string || null}
         */
        this.BuyerEmail = null;

        /**
         * 收票人手机号。若填入，会收到发票推送短信
         * @type {string || null}
         */
        this.TakerPhone = null;

        /**
         * 开票类型：
1：增值税专用发票；
2：增值税普通发票；
3：增值税电子发票；
4：增值税卷式发票；
5：区块链电子发票。
若该字段不填，或值不为1-5，则认为开具”增值税电子发票”
         * @type {number || null}
         */
        this.InvoiceType = null;

        /**
         * 发票结果回传地址
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 开票人姓名。（不填默认读取商户注册时输入的信息）
         * @type {string || null}
         */
        this.Drawer = null;

        /**
         * 收款人姓名。（不填默认读取商户注册时输入的信息）
         * @type {string || null}
         */
        this.Payee = null;

        /**
         * 复核人姓名。（不填默认读取商户注册时输入的信息）
         * @type {string || null}
         */
        this.Checker = null;

        /**
         * 税盘号
         * @type {string || null}
         */
        this.TerminalCode = null;

        /**
         * 征收方式。开具差额征税发票时必填2。开具普通征税发票时为空
         * @type {string || null}
         */
        this.LevyMethod = null;

        /**
         * 差额征税扣除额（单位为分）
         * @type {number || null}
         */
        this.Deduction = null;

        /**
         * 备注（票面信息）
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 项目商品明细
         * @type {Array.<CreateInvoiceItem> || null}
         */
        this.Items = null;

        /**
         * 接入环境。沙箱环境填sandbox。
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * 撤销部分商品。0-不撤销，1-撤销
         * @type {number || null}
         */
        this.UndoPart = null;

        /**
         * 订单下单时间（格式 YYYYMMDD）
         * @type {string || null}
         */
        this.OrderDate = null;

        /**
         * 订单级别折扣（单位为分）
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 门店编码
         * @type {string || null}
         */
        this.StoreNo = null;

        /**
         * 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道
         * @type {number || null}
         */
        this.InvoiceChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvoicePlatformId = 'InvoicePlatformId' in params ? params.InvoicePlatformId : null;
        this.TitleType = 'TitleType' in params ? params.TitleType : null;
        this.BuyerTitle = 'BuyerTitle' in params ? params.BuyerTitle : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.AmountHasTax = 'AmountHasTax' in params ? params.AmountHasTax : null;
        this.TaxAmount = 'TaxAmount' in params ? params.TaxAmount : null;
        this.AmountWithoutTax = 'AmountWithoutTax' in params ? params.AmountWithoutTax : null;
        this.SellerTaxpayerNum = 'SellerTaxpayerNum' in params ? params.SellerTaxpayerNum : null;
        this.SellerName = 'SellerName' in params ? params.SellerName : null;
        this.SellerAddress = 'SellerAddress' in params ? params.SellerAddress : null;
        this.SellerPhone = 'SellerPhone' in params ? params.SellerPhone : null;
        this.SellerBankName = 'SellerBankName' in params ? params.SellerBankName : null;
        this.SellerBankAccount = 'SellerBankAccount' in params ? params.SellerBankAccount : null;
        this.BuyerTaxpayerNum = 'BuyerTaxpayerNum' in params ? params.BuyerTaxpayerNum : null;
        this.BuyerAddress = 'BuyerAddress' in params ? params.BuyerAddress : null;
        this.BuyerBankName = 'BuyerBankName' in params ? params.BuyerBankName : null;
        this.BuyerBankAccount = 'BuyerBankAccount' in params ? params.BuyerBankAccount : null;
        this.BuyerPhone = 'BuyerPhone' in params ? params.BuyerPhone : null;
        this.BuyerEmail = 'BuyerEmail' in params ? params.BuyerEmail : null;
        this.TakerPhone = 'TakerPhone' in params ? params.TakerPhone : null;
        this.InvoiceType = 'InvoiceType' in params ? params.InvoiceType : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Drawer = 'Drawer' in params ? params.Drawer : null;
        this.Payee = 'Payee' in params ? params.Payee : null;
        this.Checker = 'Checker' in params ? params.Checker : null;
        this.TerminalCode = 'TerminalCode' in params ? params.TerminalCode : null;
        this.LevyMethod = 'LevyMethod' in params ? params.LevyMethod : null;
        this.Deduction = 'Deduction' in params ? params.Deduction : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new CreateInvoiceItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.UndoPart = 'UndoPart' in params ? params.UndoPart : null;
        this.OrderDate = 'OrderDate' in params ? params.OrderDate : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.StoreNo = 'StoreNo' in params ? params.StoreNo : null;
        this.InvoiceChannel = 'InvoiceChannel' in params ? params.InvoiceChannel : null;

    }
}

/**
 * 贸易材料明细查询结果
 * @class
 */
class QueryTradeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 贸易材料明细查询数据
         * @type {QueryTradeData || null}
         */
        this.Data = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new QueryTradeData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * 主播签约信息
 * @class
 */
class AnchorContractInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播ID
         * @type {string || null}
         */
        this.AnchorId = null;

        /**
         * 主播名称
         * @type {string || null}
         */
        this.AnchorName = null;

        /**
         * 代理商ID
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 代理商名称
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * 主播身份证号
         * @type {string || null}
         */
        this.IdNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.AnchorName = 'AnchorName' in params ? params.AnchorName : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.IdNo = 'IdNo' in params ? params.IdNo : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 成功申报材料查询结果
 * @class
 */
class QueryDeclareResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功申报材料查询数据
         * @type {QueryDeclareData || null}
         */
        this.Data = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new QueryDeclareData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Code = 'Code' in params ? params.Code : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryAgentStatements返回参数结构体
 * @class
 */
class QueryAgentStatementsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FileUrl = null;

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
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * RevResigterBillSupportWithdraw返回参数结构体
 * @class
 */
class RevResigterBillSupportWithdrawResponse extends  AbstractModel {
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
 * 查询汇出数据
 * @class
 */
class QueryOutwardOrderData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 对接方汇出指令编号
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 财务日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AcctDate = null;

        /**
         * 定价币种
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PricingCurrency = null;

        /**
         * 源币种
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceCurrency = null;

        /**
         * 源金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceAmount = null;

        /**
         * 目的币种
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetCurrency = null;

        /**
         * 目的金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetAmount = null;

        /**
         * 汇率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FxRate = null;

        /**
         * 指令状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 退汇金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RefundAmount = null;

        /**
         * 退汇币种
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RefundCurrency = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.AcctDate = 'AcctDate' in params ? params.AcctDate : null;
        this.PricingCurrency = 'PricingCurrency' in params ? params.PricingCurrency : null;
        this.SourceCurrency = 'SourceCurrency' in params ? params.SourceCurrency : null;
        this.SourceAmount = 'SourceAmount' in params ? params.SourceAmount : null;
        this.TargetCurrency = 'TargetCurrency' in params ? params.TargetCurrency : null;
        this.TargetAmount = 'TargetAmount' in params ? params.TargetAmount : null;
        this.FxRate = 'FxRate' in params ? params.FxRate : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.RefundAmount = 'RefundAmount' in params ? params.RefundAmount : null;
        this.RefundCurrency = 'RefundCurrency' in params ? params.RefundCurrency : null;

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
 * QueryApplicationMaterial返回参数结构体
 * @class
 */
class QueryApplicationMaterialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 成功申报材料查询结果
         * @type {QueryDeclareResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new QueryDeclareResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建商户结果数据
 * @class
 */
class CreateMerchantResultData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 企业名称
         * @type {string || null}
         */
        this.TaxpayerName = null;

        /**
         * 请求流水号
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 纳税号
         * @type {string || null}
         */
        this.TaxpayerNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaxpayerName = 'TaxpayerName' in params ? params.TaxpayerName : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.TaxpayerNum = 'TaxpayerNum' in params ? params.TaxpayerNum : null;

    }
}

/**
 * QueryExchangeRate请求参数结构体
 * @class
 */
class QueryExchangeRateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 源币种 (默认CNY)
         * @type {string || null}
         */
        this.SourceCurrency = null;

        /**
         * 目的币种 (见常见问题-汇出币种)
         * @type {string || null}
         */
        this.TargetCurrency = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SourceCurrency = 'SourceCurrency' in params ? params.SourceCurrency : null;
        this.TargetCurrency = 'TargetCurrency' in params ? params.TargetCurrency : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryMerchantInfoForManagement请求参数结构体
 * @class
 */
class QueryMerchantInfoForManagementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开票平台ID
         * @type {number || null}
         */
        this.InvoicePlatformId = null;

        /**
         * 页码
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 页大小
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 接入环境。沙箱环境填sandbox。
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvoicePlatformId = 'InvoicePlatformId' in params ? params.InvoicePlatformId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
         * STRING(3)，币种。如RMB
         * @type {string || null}
         */
        this.Ccy = null;

        /**
         * STRING(20)，支付渠道类型。
0001-微信
0002-支付宝
0003-京东支付
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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 汇出指令申请结果
 * @class
 */
class ApplyOutwardOrderResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 汇出指令申请数据
         * @type {ApplyOutwardOrderData || null}
         */
        this.Data = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new ApplyOutwardOrderData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * ApplyPayerInfo请求参数结构体
 * @class
 */
class ApplyPayerInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 付款人类型 (个人: INDIVIDUAL, 企业: CORPORATE)
         * @type {string || null}
         */
        this.PayerType = null;

        /**
         * 付款人姓名
         * @type {string || null}
         */
        this.PayerName = null;

        /**
         * 付款人证件类型 (身份证: ID_CARD, 统一社会信用代码: UNIFIED_CREDIT_CODE)
         * @type {string || null}
         */
        this.PayerIdType = null;

        /**
         * 付款人证件号
         * @type {string || null}
         */
        this.PayerIdNo = null;

        /**
         * 付款人常驻国家或地区编码 (见常见问题-国家/地区编码)
         * @type {string || null}
         */
        this.PayerCountryCode = null;

        /**
         * 付款人联系人名称
         * @type {string || null}
         */
        this.PayerContactName = null;

        /**
         * 付款人联系电话
         * @type {string || null}
         */
        this.PayerContactNumber = null;

        /**
         * 付款人联系邮箱
         * @type {string || null}
         */
        this.PayerEmailAddress = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.PayerType = 'PayerType' in params ? params.PayerType : null;
        this.PayerName = 'PayerName' in params ? params.PayerName : null;
        this.PayerIdType = 'PayerIdType' in params ? params.PayerIdType : null;
        this.PayerIdNo = 'PayerIdNo' in params ? params.PayerIdNo : null;
        this.PayerCountryCode = 'PayerCountryCode' in params ? params.PayerCountryCode : null;
        this.PayerContactName = 'PayerContactName' in params ? params.PayerContactName : null;
        this.PayerContactNumber = 'PayerContactNumber' in params ? params.PayerContactNumber : null;
        this.PayerEmailAddress = 'PayerEmailAddress' in params ? params.PayerEmailAddress : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * RefundMemberTransaction返回参数结构体
 * @class
 */
class RefundMemberTransactionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 银行流水号
         * @type {string || null}
         */
        this.FrontSequenceNumber = null;

        /**
         * 保留域
         * @type {string || null}
         */
        this.ReservedMessage = null;

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
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.FrontSequenceNumber = 'FrontSequenceNumber' in params ? params.FrontSequenceNumber : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryInvoice请求参数结构体
 * @class
 */
class QueryInvoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开票平台ID
         * @type {number || null}
         */
        this.InvoicePlatformId = null;

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 业务开票号
         * @type {string || null}
         */
        this.OrderSn = null;

        /**
         * 发票种类：
0：蓝票
1：红票【该字段默认为0， 如果需要查询红票信息，本字段必须传1，否则可能查询不到需要的发票信息】。
         * @type {number || null}
         */
        this.IsRed = null;

        /**
         * 接入环境。沙箱环境填sandbox。
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * 开票渠道。0：线上渠道，1：线下渠道。不填默认为线上渠道
         * @type {number || null}
         */
        this.InvoiceChannel = null;

        /**
         * 当渠道为线下渠道时，必填
         * @type {string || null}
         */
        this.SellerTaxpayerNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvoicePlatformId = 'InvoicePlatformId' in params ? params.InvoicePlatformId : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.OrderSn = 'OrderSn' in params ? params.OrderSn : null;
        this.IsRed = 'IsRed' in params ? params.IsRed : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.InvoiceChannel = 'InvoiceChannel' in params ? params.InvoiceChannel : null;
        this.SellerTaxpayerNum = 'SellerTaxpayerNum' in params ? params.SellerTaxpayerNum : null;

    }
}

/**
 * ApplyApplicationMaterial返回参数结构体
 * @class
 */
class ApplyApplicationMaterialResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 提交申报材料结果
         * @type {ApplyDeclareResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new ApplyDeclareResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

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

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * ExecuteMemberTransaction请求参数结构体
 * @class
 */
class ExecuteMemberTransactionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求类型此接口固定填：MemberTransactionReq
         * @type {string || null}
         */
        this.RequestType = null;

        /**
         * 银行注册商户号
         * @type {string || null}
         */
        this.MerchantCode = null;

        /**
         * 支付渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 子渠道
         * @type {number || null}
         */
        this.PayChannelSubId = null;

        /**
         * 转出交易网会员代码
         * @type {string || null}
         */
        this.OutTransNetMemberCode = null;

        /**
         * 转出见证子账户的户名
         * @type {string || null}
         */
        this.OutSubAccountName = null;

        /**
         * 转入见证子账户的户名
         * @type {string || null}
         */
        this.InSubAccountName = null;

        /**
         * 转出子账户账号
         * @type {string || null}
         */
        this.OutSubAccountNumber = null;

        /**
         * 转入子账户账号
         * @type {string || null}
         */
        this.InSubAccountNumber = null;

        /**
         * 父账户账号，资金汇总账号
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 货币单位 单位，1：元，2：角，3：分
         * @type {string || null}
         */
        this.CurrencyUnit = null;

        /**
         * 币种
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 交易金额
         * @type {string || null}
         */
        this.CurrencyAmount = null;

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

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
         * 计费签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 交易流水号 
生成方式：用户短号+日期（6位）+ 随机编号（10位）例如：F088722005120904930798
短号：F08872  日期： 200512   随机编号：0904930798
         * @type {string || null}
         */
        this.TransSequenceNumber = null;

        /**
         * 转入交易网会员代码
         * @type {string || null}
         */
        this.InTransNetMemberCode = null;

        /**
         * Midas环境标识 release 现网环境 sandbox 沙箱环境
development 开发环境
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 平台短号(银行分配)
         * @type {string || null}
         */
        this.PlatformShortNumber = null;

        /**
         * 1：下单预支付 
2：确认并付款
3：退款
6：直接支付T+1
9：直接支付T+0
         * @type {string || null}
         */
        this.TransType = null;

        /**
         * 交易手续费
         * @type {string || null}
         */
        this.TransFee = null;

        /**
         * 保留域
         * @type {string || null}
         */
        this.ReservedMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.MerchantCode = 'MerchantCode' in params ? params.MerchantCode : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.PayChannelSubId = 'PayChannelSubId' in params ? params.PayChannelSubId : null;
        this.OutTransNetMemberCode = 'OutTransNetMemberCode' in params ? params.OutTransNetMemberCode : null;
        this.OutSubAccountName = 'OutSubAccountName' in params ? params.OutSubAccountName : null;
        this.InSubAccountName = 'InSubAccountName' in params ? params.InSubAccountName : null;
        this.OutSubAccountNumber = 'OutSubAccountNumber' in params ? params.OutSubAccountNumber : null;
        this.InSubAccountNumber = 'InSubAccountNumber' in params ? params.InSubAccountNumber : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.CurrencyUnit = 'CurrencyUnit' in params ? params.CurrencyUnit : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.CurrencyAmount = 'CurrencyAmount' in params ? params.CurrencyAmount : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.TransSequenceNumber = 'TransSequenceNumber' in params ? params.TransSequenceNumber : null;
        this.InTransNetMemberCode = 'InTransNetMemberCode' in params ? params.InTransNetMemberCode : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.PlatformShortNumber = 'PlatformShortNumber' in params ? params.PlatformShortNumber : null;
        this.TransType = 'TransType' in params ? params.TransType : null;
        this.TransFee = 'TransFee' in params ? params.TransFee : null;
        this.ReservedMessage = 'ReservedMessage' in params ? params.ReservedMessage : null;

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
 * ApplyTrade返回参数结构体
 * @class
 */
class ApplyTradeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 提交贸易材料结果
         * @type {ApplyTradeResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new ApplyTradeResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * ApplyOutwardOrder返回参数结构体
 * @class
 */
class ApplyOutwardOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 汇出指令申请
         * @type {ApplyOutwardOrderResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new ApplyOutwardOrderResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeOrderStatus返回参数结构体
 * @class
 */
class DescribeOrderStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易状态 （0：成功，1：失败，2：待确认, 5：待处理，6：处理中）
         * @type {string || null}
         */
        this.OrderStatus = null;

        /**
         * 交易金额
         * @type {string || null}
         */
        this.OrderAmount = null;

        /**
         * 交易日期
         * @type {string || null}
         */
        this.OrderDate = null;

        /**
         * 交易时间
         * @type {string || null}
         */
        this.OrderTime = null;

        /**
         * 转出子账户账号
         * @type {string || null}
         */
        this.OutSubAccountNumber = null;

        /**
         * 转入子账户账号
         * @type {string || null}
         */
        this.InSubAccountNumber = null;

        /**
         * 记账标志（1：登记挂账 2：支付 3：提现 4：清分5:下单预支付 6：确认并付款 7：退款 8：支付到平台 N:其他）
         * @type {string || null}
         */
        this.BookingFlag = null;

        /**
         * 当交易失败时，返回交易失败原因
         * @type {string || null}
         */
        this.FailMessage = null;

        /**
         * 请求类型
         * @type {string || null}
         */
        this.RequestType = null;

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
        this.OrderStatus = 'OrderStatus' in params ? params.OrderStatus : null;
        this.OrderAmount = 'OrderAmount' in params ? params.OrderAmount : null;
        this.OrderDate = 'OrderDate' in params ? params.OrderDate : null;
        this.OrderTime = 'OrderTime' in params ? params.OrderTime : null;
        this.OutSubAccountNumber = 'OutSubAccountNumber' in params ? params.OutSubAccountNumber : null;
        this.InSubAccountNumber = 'InSubAccountNumber' in params ? params.InSubAccountNumber : null;
        this.BookingFlag = 'BookingFlag' in params ? params.BookingFlag : null;
        this.FailMessage = 'FailMessage' in params ? params.FailMessage : null;
        this.RequestType = 'RequestType' in params ? params.RequestType : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * QueryApplicationMaterial请求参数结构体
 * @class
 */
class QueryApplicationMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申报流水号
         * @type {string || null}
         */
        this.DeclareId = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeclareId = 'DeclareId' in params ? params.DeclareId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * CreateMerchant返回参数结构体
 * @class
 */
class CreateMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户注册结果
         * @type {CreateMerchantResult || null}
         */
        this.Result = null;

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

        if (params.Result) {
            let obj = new CreateMerchantResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * 提交贸易材料结果
 * @class
 */
class ApplyTradeData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 贸易材料流水号
         * @type {string || null}
         */
        this.TradeFileId = null;

        /**
         * 交易币种
         * @type {string || null}
         */
        this.TradeCurrency = null;

        /**
         * 交易金额
         * @type {string || null}
         */
        this.TradeAmount = null;

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 状态
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.TradeFileId = 'TradeFileId' in params ? params.TradeFileId : null;
        this.TradeCurrency = 'TradeCurrency' in params ? params.TradeCurrency : null;
        this.TradeAmount = 'TradeAmount' in params ? params.TradeAmount : null;
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * ApplyApplicationMaterial请求参数结构体
 * @class
 */
class ApplyApplicationMaterialRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对接方汇出指令编号
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 申报流水号
         * @type {string || null}
         */
        this.DeclareId = null;

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 源币种
         * @type {string || null}
         */
        this.SourceCurrency = null;

        /**
         * 目的币种
         * @type {string || null}
         */
        this.TargetCurrency = null;

        /**
         * 贸易编码
         * @type {string || null}
         */
        this.TradeCode = null;

        /**
         * 原申报流水号
         * @type {string || null}
         */
        this.OriginalDeclareId = null;

        /**
         * 源金额
         * @type {number || null}
         */
        this.SourceAmount = null;

        /**
         * 目的金额
         * @type {number || null}
         */
        this.TargetAmount = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.DeclareId = 'DeclareId' in params ? params.DeclareId : null;
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.SourceCurrency = 'SourceCurrency' in params ? params.SourceCurrency : null;
        this.TargetCurrency = 'TargetCurrency' in params ? params.TargetCurrency : null;
        this.TradeCode = 'TradeCode' in params ? params.TradeCode : null;
        this.OriginalDeclareId = 'OriginalDeclareId' in params ? params.OriginalDeclareId : null;
        this.SourceAmount = 'SourceAmount' in params ? params.SourceAmount : null;
        this.TargetAmount = 'TargetAmount' in params ? params.TargetAmount : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 查询账户列表接口
 * @class
 */
class QueryAcctItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子商户类型：
个人: personal
企业：enterprise
缺省： enterprise
         * @type {string || null}
         */
        this.SubMchType = null;

        /**
         * 子商户名称
         * @type {string || null}
         */
        this.SubMchName = null;

        /**
         * 子账号号
         * @type {string || null}
         */
        this.SubAcctNo = null;

        /**
         * 不填则默认子商户名称
         * @type {string || null}
         */
        this.ShortName = null;

        /**
         * 业务平台的子商户Id，唯一
         * @type {string || null}
         */
        this.SubMchId = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 子商户联系人
<敏感信息>
         * @type {string || null}
         */
        this.Contact = null;

        /**
         * 子商户地址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 联系人手机号
<敏感信息>
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 邮箱 
<敏感信息>
         * @type {string || null}
         */
        this.Email = null;

        /**
         * 子商户会员类型：
general:普通子账户
merchant:商户子账户
缺省： general
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubMerchantMemberType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubMchType = 'SubMchType' in params ? params.SubMchType : null;
        this.SubMchName = 'SubMchName' in params ? params.SubMchName : null;
        this.SubAcctNo = 'SubAcctNo' in params ? params.SubAcctNo : null;
        this.ShortName = 'ShortName' in params ? params.ShortName : null;
        this.SubMchId = 'SubMchId' in params ? params.SubMchId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.Contact = 'Contact' in params ? params.Contact : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.Email = 'Email' in params ? params.Email : null;
        this.SubMerchantMemberType = 'SubMerchantMemberType' in params ? params.SubMerchantMemberType : null;

    }
}

/**
 * ModifyAgentTaxPaymentInfo请求参数结构体
 * @class
 */
class ModifyAgentTaxPaymentInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次号
         * @type {number || null}
         */
        this.BatchNum = null;

        /**
         * 新源电子凭证地址
         * @type {string || null}
         */
        this.RawElectronicCertUrl = null;

        /**
         * 新的文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 接入环境。沙箱环境填sandbox
         * @type {string || null}
         */
        this.Profile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchNum = 'BatchNum' in params ? params.BatchNum : null;
        this.RawElectronicCertUrl = 'RawElectronicCertUrl' in params ? params.RawElectronicCertUrl : null;
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

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

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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

        /**
         * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
         * @type {string || null}
         */
        this.EncryptType = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 手续费金额
         * @type {string || null}
         */
        this.CommissionAmount = null;

        /**
         * 提现单号，长度32字节
         * @type {string || null}
         */
        this.WithdrawOrderId = null;

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
        this.EncryptType = 'EncryptType' in params ? params.EncryptType : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.CommissionAmount = 'CommissionAmount' in params ? params.CommissionAmount : null;
        this.WithdrawOrderId = 'WithdrawOrderId' in params ? params.WithdrawOrderId : null;

    }
}

/**
 * 红票结果数据
 * @class
 */
class CreateRedInvoiceResultData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 红冲状态码
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 红冲状态消息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 发票ID
         * @type {string || null}
         */
        this.InvoiceId = null;

        /**
         * 业务开票号
         * @type {string || null}
         */
        this.OrderSn = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.InvoiceId = 'InvoiceId' in params ? params.InvoiceId : null;
        this.OrderSn = 'OrderSn' in params ? params.OrderSn : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * 线下查票-订单信息
 * @class
 */
class Order extends  AbstractModel {
    constructor(){
        super();

        /**
         * 含税金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.AmountHasTax = null;

        /**
         * 优惠金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Discount = null;

        /**
         * 销方名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SellerName = null;

        /**
         * 发票类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.InvoiceType = null;

        /**
         * 默认“”
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 支付金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 下单日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderDate = null;

        /**
         * 订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 门店号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StoreNo = null;

        /**
         * 明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OrderItem> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AmountHasTax = 'AmountHasTax' in params ? params.AmountHasTax : null;
        this.Discount = 'Discount' in params ? params.Discount : null;
        this.SellerName = 'SellerName' in params ? params.SellerName : null;
        this.InvoiceType = 'InvoiceType' in params ? params.InvoiceType : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.OrderDate = 'OrderDate' in params ? params.OrderDate : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.StoreNo = 'StoreNo' in params ? params.StoreNo : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new OrderItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * 成功申报材料查询数据
 * @class
 */
class QueryDeclareData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 对接方汇出指令编号
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 申报流水号
         * @type {string || null}
         */
        this.DeclareId = null;

        /**
         * 原申报流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalDeclareId = null;

        /**
         * 付款人ID
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 源币种
         * @type {string || null}
         */
        this.SourceCurrency = null;

        /**
         * 源金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SourceAmount = null;

        /**
         * 目的币种
         * @type {string || null}
         */
        this.TargetCurrency = null;

        /**
         * 目的金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TargetAmount = null;

        /**
         * 交易编码
         * @type {string || null}
         */
        this.TradeCode = null;

        /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.DeclareId = 'DeclareId' in params ? params.DeclareId : null;
        this.OriginalDeclareId = 'OriginalDeclareId' in params ? params.OriginalDeclareId : null;
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.SourceCurrency = 'SourceCurrency' in params ? params.SourceCurrency : null;
        this.SourceAmount = 'SourceAmount' in params ? params.SourceAmount : null;
        this.TargetCurrency = 'TargetCurrency' in params ? params.TargetCurrency : null;
        this.TargetAmount = 'TargetAmount' in params ? params.TargetAmount : null;
        this.TradeCode = 'TradeCode' in params ? params.TradeCode : null;
        this.Status = 'Status' in params ? params.Status : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryAgentStatements请求参数结构体
 * @class
 */
class QueryAgentStatementsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结算单日期，月结算单填每月1日
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 日结算单:daily
月结算单:monthly
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = 'Date' in params ? params.Date : null;
        this.Type = 'Type' in params ? params.Type : null;

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

        /**
         * STRING(12)，接入环境，默认接入沙箱环境。接入正式环境填"prod"
         * @type {string || null}
         */
        this.Profile = null;

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
        this.Profile = 'Profile' in params ? params.Profile : null;

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
         * 子订单信息列表，格式：子订单号、子应用ID、金额。 压缩后最长不可超过65535字节(去除空格，换行，制表符等无意义字符)
注：接入银行或其他支付渠道服务商模式下，必传
         * @type {Array.<UnifiedOrderInSubOrderList> || null}
         */
        this.SubOrderList = null;

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

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.OriginalAmt = 'OriginalAmt' in params ? params.OriginalAmt : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

        if (params.SubOrderList) {
            this.SubOrderList = new Array();
            for (let z in params.SubOrderList) {
                let obj = new UnifiedOrderInSubOrderList();
                obj.deserialize(params.SubOrderList[z]);
                this.SubOrderList.push(obj);
            }
        }
        this.TotalMchIncome = 'TotalMchIncome' in params ? params.TotalMchIncome : null;
        this.TotalPlatformIncome = 'TotalPlatformIncome' in params ? params.TotalPlatformIncome : null;
        this.WxOpenId = 'WxOpenId' in params ? params.WxOpenId : null;
        this.WxSubOpenId = 'WxSubOpenId' in params ? params.WxSubOpenId : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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

        /**
         * 敏感信息加密类型:
RSA: rsa非对称加密，使用RSA-PKCS1-v1_5
AES: aes对称加密，使用AES256-CBC-PCKS7padding
缺省: RSA
         * @type {string || null}
         */
        this.EncryptType = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.EncryptType = 'EncryptType' in params ? params.EncryptType : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * QueryAnchorContractInfo返回参数结构体
 * @class
 */
class QueryAnchorContractInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签约主播数据
         * @type {Array.<AnchorContractInfo> || null}
         */
        this.AnchorContractInfoList = null;

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

        if (params.AnchorContractInfoList) {
            this.AnchorContractInfoList = new Array();
            for (let z in params.AnchorContractInfoList) {
                let obj = new AnchorContractInfo();
                obj.deserialize(params.AnchorContractInfoList[z]);
                this.AnchorContractInfoList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAgentTaxPaymentInfo返回参数结构体
 * @class
 */
class DeleteAgentTaxPaymentInfoResponse extends  AbstractModel {
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

        /**
         * 支持多个子订单批量退款单 个子订单退款支持传 SubOutTradeNo ，也支持传 SubOutTradeNoList ，都传的时候以 SubOutTradeNoList 为准。  如果传了子单退款细节，外 部不需要再传退款金额，平 台应退，商户应退金额，我 们可以直接根据子单退款算出来总和。
         * @type {Array.<RefundOutSubOrderRefundList> || null}
         */
        this.SubOrderRefundList = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.MidasEnvironment = null;

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
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.MchRefundAmt = 'MchRefundAmt' in params ? params.MchRefundAmt : null;
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.PlatformRefundAmt = 'PlatformRefundAmt' in params ? params.PlatformRefundAmt : null;

        if (params.SubOrderRefundList) {
            this.SubOrderRefundList = new Array();
            for (let z in params.SubOrderRefundList) {
                let obj = new RefundOutSubOrderRefundList();
                obj.deserialize(params.SubOrderRefundList[z]);
                this.SubOrderRefundList.push(obj);
            }
        }
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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
 * 绑卡列表
 * @class
 */
class BankCardItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 超级网银行号
         * @type {string || null}
         */
        this.EiconBankBranchId = null;

        /**
         * 大小额行号
         * @type {string || null}
         */
        this.CnapsBranchId = null;

        /**
         * 结算账户类型
1 – 本行账户
2 – 他行账户
         * @type {number || null}
         */
        this.SettleAcctType = null;

        /**
         * 结算账户户名
<敏感信息>
         * @type {string || null}
         */
        this.SettleAcctName = null;

        /**
         * 开户行名称
         * @type {string || null}
         */
        this.AcctBranchName = null;

        /**
         * 用于提现
<敏感信息>
         * @type {string || null}
         */
        this.SettleAcctNo = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 验证类型
1 – 小额转账验证
2 – 短信验证
         * @type {number || null}
         */
        this.BindType = null;

        /**
         * 用于短信验证
BindType==2时必填
<敏感信息>
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 证件类型
         * @type {string || null}
         */
        this.IdType = null;

        /**
         * 证件号码
<敏感信息>
         * @type {string || null}
         */
        this.IdCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EiconBankBranchId = 'EiconBankBranchId' in params ? params.EiconBankBranchId : null;
        this.CnapsBranchId = 'CnapsBranchId' in params ? params.CnapsBranchId : null;
        this.SettleAcctType = 'SettleAcctType' in params ? params.SettleAcctType : null;
        this.SettleAcctName = 'SettleAcctName' in params ? params.SettleAcctName : null;
        this.AcctBranchName = 'AcctBranchName' in params ? params.AcctBranchName : null;
        this.SettleAcctNo = 'SettleAcctNo' in params ? params.SettleAcctNo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.BindType = 'BindType' in params ? params.BindType : null;
        this.Mobile = 'Mobile' in params ? params.Mobile : null;
        this.IdType = 'IdType' in params ? params.IdType : null;
        this.IdCode = 'IdCode' in params ? params.IdCode : null;

    }
}

module.exports = {
    QueryInvoiceResponse: QueryInvoiceResponse,
    ApplyTradeRequest: ApplyTradeRequest,
    QueryOutwardOrderResponse: QueryOutwardOrderResponse,
    QueryExchangeRateResponse: QueryExchangeRateResponse,
    UnifiedOrderInSubOrderList: UnifiedOrderInSubOrderList,
    QueryAcctBindingRequest: QueryAcctBindingRequest,
    ModifyMntMbrBindRelateAcctBankCodeRequest: ModifyMntMbrBindRelateAcctBankCodeRequest,
    CreateMerchantResult: CreateMerchantResult,
    ApplyPayerInfoResponse: ApplyPayerInfoResponse,
    RevokeRechargeByThirdPayRequest: RevokeRechargeByThirdPayRequest,
    QueryTradeRequest: QueryTradeRequest,
    UnifiedOrderResponse: UnifiedOrderResponse,
    QueryBankWithdrawCashDetailsRequest: QueryBankWithdrawCashDetailsRequest,
    ApplyPayerinfoResult: ApplyPayerinfoResult,
    QueryCustAcctIdBalanceRequest: QueryCustAcctIdBalanceRequest,
    QueryPayerInfoResponse: QueryPayerInfoResponse,
    WithdrawItem: WithdrawItem,
    BindAcctRequest: BindAcctRequest,
    ReviseMbrPropertyRequest: ReviseMbrPropertyRequest,
    WithdrawCashMembershipRequest: WithdrawCashMembershipRequest,
    RevResigterBillSupportWithdrawRequest: RevResigterBillSupportWithdrawRequest,
    CreateInvoiceResponse: CreateInvoiceResponse,
    AgentTaxPayment: AgentTaxPayment,
    QueryOutwardOrderRequest: QueryOutwardOrderRequest,
    QueryAnchorContractInfoRequest: QueryAnchorContractInfoRequest,
    CreateRedInvoiceResult: CreateRedInvoiceResult,
    QueryBankWithdrawCashDetailsResponse: QueryBankWithdrawCashDetailsResponse,
    QueryItem: QueryItem,
    ApplyTradeResult: ApplyTradeResult,
    RefundOutSubOrderRefundList: RefundOutSubOrderRefundList,
    UnbindRelateAcctRequest: UnbindRelateAcctRequest,
    ExecuteMemberTransactionResponse: ExecuteMemberTransactionResponse,
    CreateMerchantRequest: CreateMerchantRequest,
    ApplyDeclareResult: ApplyDeclareResult,
    DeleteAgentTaxPaymentInfoRequest: DeleteAgentTaxPaymentInfoRequest,
    QueryInvoiceResult: QueryInvoiceResult,
    QueryAcctBindingResponse: QueryAcctBindingResponse,
    QueryCommonTransferRechargeResponse: QueryCommonTransferRechargeResponse,
    QueryTradeData: QueryTradeData,
    ApplyReWithdrawalResponse: ApplyReWithdrawalResponse,
    ModifyAgentTaxPaymentInfoResponse: ModifyAgentTaxPaymentInfoResponse,
    RegisterBillRequest: RegisterBillRequest,
    CreateInvoiceItem: CreateInvoiceItem,
    ApplyOutwardOrderData: ApplyOutwardOrderData,
    RevokeRechargeByThirdPayResponse: RevokeRechargeByThirdPayResponse,
    ReviseMbrPropertyResponse: ReviseMbrPropertyResponse,
    CreateAcctRequest: CreateAcctRequest,
    CreateAgentTaxPaymentInfosRequest: CreateAgentTaxPaymentInfosRequest,
    Acct: Acct,
    CloseOrderResponse: CloseOrderResponse,
    ApplyPayerinfoData: ApplyPayerinfoData,
    CreateRedInvoiceItem: CreateRedInvoiceItem,
    CheckAcctRequest: CheckAcctRequest,
    CheckAmountResponse: CheckAmountResponse,
    QueryOrderOutSubOrderList: QueryOrderOutSubOrderList,
    QueryOutwardOrderResult: QueryOutwardOrderResult,
    CreateAgentTaxPaymentInfosResponse: CreateAgentTaxPaymentInfosResponse,
    QueryPayerInfoRequest: QueryPayerInfoRequest,
    QueryMerchantInfoForManagementResponse: QueryMerchantInfoForManagementResponse,
    QuerySingleTransactionStatusRequest: QuerySingleTransactionStatusRequest,
    MerchantManagementList: MerchantManagementList,
    CreateInvoiceResult: CreateInvoiceResult,
    DescribeOrderStatusRequest: DescribeOrderStatusRequest,
    QueryMerchantBalanceResult: QueryMerchantBalanceResult,
    QueryCustAcctIdBalanceResponse: QueryCustAcctIdBalanceResponse,
    QueryTradeResponse: QueryTradeResponse,
    DownloadBillResponse: DownloadBillResponse,
    RevokeMemberRechargeThirdPayResponse: RevokeMemberRechargeThirdPayResponse,
    CreateRedInvoiceRequest: CreateRedInvoiceRequest,
    QueryAcctInfoListResponse: QueryAcctInfoListResponse,
    DeleteAgentTaxPaymentInfosRequest: DeleteAgentTaxPaymentInfosRequest,
    QueryAcctInfoListRequest: QueryAcctInfoListRequest,
    BindRelateAcctUnionPayRequest: BindRelateAcctUnionPayRequest,
    CreateInvoiceResultData: CreateInvoiceResultData,
    QueryAgentTaxPaymentBatchResponse: QueryAgentTaxPaymentBatchResponse,
    DeleteAgentTaxPaymentInfosResponse: DeleteAgentTaxPaymentInfosResponse,
    RegisterBillSupportWithdrawResponse: RegisterBillSupportWithdrawResponse,
    QuerySmallAmountTransferResponse: QuerySmallAmountTransferResponse,
    CreateRedInvoiceResponse: CreateRedInvoiceResponse,
    QueryInvoiceResultData: QueryInvoiceResultData,
    RechargeByThirdPayRequest: RechargeByThirdPayRequest,
    QuerySingleTransactionStatusResponse: QuerySingleTransactionStatusResponse,
    QueryAcctInfoRequest: QueryAcctInfoRequest,
    DescribeChargeDetailResponse: DescribeChargeDetailResponse,
    ApplyDeclareData: ApplyDeclareData,
    TranItem: TranItem,
    ClearItem: ClearItem,
    MerchantManagementResult: MerchantManagementResult,
    ApplyWithdrawalResponse: ApplyWithdrawalResponse,
    QueryBankTransactionDetailsResponse: QueryBankTransactionDetailsResponse,
    QueryPayerinfoData: QueryPayerinfoData,
    QueryMerchantBalanceData: QueryMerchantBalanceData,
    QueryMemberTransactionRequest: QueryMemberTransactionRequest,
    QueryExchangerateResult: QueryExchangerateResult,
    QueryOrderResponse: QueryOrderResponse,
    QueryMerchantBalanceRequest: QueryMerchantBalanceRequest,
    CreateAcctResponse: CreateAcctResponse,
    DescribeChargeDetailRequest: DescribeChargeDetailRequest,
    BindAcctResponse: BindAcctResponse,
    QueryExchangerateData: QueryExchangerateData,
    WithdrawBill: WithdrawBill,
    QueryRefundRequest: QueryRefundRequest,
    BindRelateAccReUnionPayRequest: BindRelateAccReUnionPayRequest,
    CreateCustAcctIdResponse: CreateCustAcctIdResponse,
    QueryMerchantBalanceResponse: QueryMerchantBalanceResponse,
    QueryAcctInfoResponse: QueryAcctInfoResponse,
    QueryAgentTaxPaymentBatchRequest: QueryAgentTaxPaymentBatchRequest,
    QueryPayerinfoResult: QueryPayerinfoResult,
    TransferItem: TransferItem,
    OrderItem: OrderItem,
    RefundMemberTransactionRequest: RefundMemberTransactionRequest,
    QueryMemberBindResponse: QueryMemberBindResponse,
    RegisterBillResponse: RegisterBillResponse,
    ApplyOutwardOrderRequest: ApplyOutwardOrderRequest,
    UnbindRelateAcctResponse: UnbindRelateAcctResponse,
    RechargeByThirdPayResponse: RechargeByThirdPayResponse,
    CheckAmountRequest: CheckAmountRequest,
    ApplyReWithdrawalRequest: ApplyReWithdrawalRequest,
    AgentTaxPaymentBatch: AgentTaxPaymentBatch,
    CreateInvoiceRequest: CreateInvoiceRequest,
    QueryTradeResult: QueryTradeResult,
    AnchorContractInfo: AnchorContractInfo,
    RegisterBillSupportWithdrawRequest: RegisterBillSupportWithdrawRequest,
    QueryDeclareResult: QueryDeclareResult,
    CreateCustAcctIdRequest: CreateCustAcctIdRequest,
    UnBindAcctResponse: UnBindAcctResponse,
    RechargeMemberThirdPayResponse: RechargeMemberThirdPayResponse,
    QueryOrderOutOrderList: QueryOrderOutOrderList,
    QueryCommonTransferRechargeRequest: QueryCommonTransferRechargeRequest,
    QueryAgentStatementsResponse: QueryAgentStatementsResponse,
    QueryOrderRequest: QueryOrderRequest,
    CloseOrderRequest: CloseOrderRequest,
    RevResigterBillSupportWithdrawResponse: RevResigterBillSupportWithdrawResponse,
    QueryBalanceResponse: QueryBalanceResponse,
    QueryOutwardOrderData: QueryOutwardOrderData,
    TransactionItem: TransactionItem,
    CheckAcctResponse: CheckAcctResponse,
    QueryReconciliationDocumentResponse: QueryReconciliationDocumentResponse,
    QueryApplicationMaterialResponse: QueryApplicationMaterialResponse,
    CreateMerchantResultData: CreateMerchantResultData,
    QueryExchangeRateRequest: QueryExchangeRateRequest,
    QueryMerchantInfoForManagementRequest: QueryMerchantInfoForManagementRequest,
    FileItem: FileItem,
    RechargeMemberThirdPayRequest: RechargeMemberThirdPayRequest,
    ApplyOutwardOrderResult: ApplyOutwardOrderResult,
    ApplyPayerInfoRequest: ApplyPayerInfoRequest,
    RefundMemberTransactionResponse: RefundMemberTransactionResponse,
    QueryBankClearRequest: QueryBankClearRequest,
    QueryInvoiceRequest: QueryInvoiceRequest,
    ApplyApplicationMaterialResponse: ApplyApplicationMaterialResponse,
    QueryBankTransactionDetailsRequest: QueryBankTransactionDetailsRequest,
    DownloadBillRequest: DownloadBillRequest,
    RevokeMemberRechargeThirdPayRequest: RevokeMemberRechargeThirdPayRequest,
    ExecuteMemberTransactionRequest: ExecuteMemberTransactionRequest,
    RefundResponse: RefundResponse,
    ApplyTradeResponse: ApplyTradeResponse,
    QueryBankClearResponse: QueryBankClearResponse,
    ApplyOutwardOrderResponse: ApplyOutwardOrderResponse,
    DescribeOrderStatusResponse: DescribeOrderStatusResponse,
    WithdrawCashMembershipResponse: WithdrawCashMembershipResponse,
    QueryApplicationMaterialRequest: QueryApplicationMaterialRequest,
    CreateMerchantResponse: CreateMerchantResponse,
    QueryMemberTransactionResponse: QueryMemberTransactionResponse,
    ApplyTradeData: ApplyTradeData,
    ApplyApplicationMaterialRequest: ApplyApplicationMaterialRequest,
    QueryAcctItem: QueryAcctItem,
    ModifyAgentTaxPaymentInfoRequest: ModifyAgentTaxPaymentInfoRequest,
    QuerySmallAmountTransferRequest: QuerySmallAmountTransferRequest,
    BindRelateAcctSmallAmountResponse: BindRelateAcctSmallAmountResponse,
    ModifyMntMbrBindRelateAcctBankCodeResponse: ModifyMntMbrBindRelateAcctBankCodeResponse,
    QueryBalanceRequest: QueryBalanceRequest,
    ApplyWithdrawalRequest: ApplyWithdrawalRequest,
    CreateRedInvoiceResultData: CreateRedInvoiceResultData,
    BindRelateAcctSmallAmountRequest: BindRelateAcctSmallAmountRequest,
    QueryRefundResponse: QueryRefundResponse,
    Order: Order,
    QueryDeclareData: QueryDeclareData,
    QueryMemberBindRequest: QueryMemberBindRequest,
    QueryAgentStatementsRequest: QueryAgentStatementsRequest,
    BindRelateAcctUnionPayResponse: BindRelateAcctUnionPayResponse,
    QueryReconciliationDocumentRequest: QueryReconciliationDocumentRequest,
    UnifiedOrderRequest: UnifiedOrderRequest,
    UnBindAcctRequest: UnBindAcctRequest,
    QueryAnchorContractInfoResponse: QueryAnchorContractInfoResponse,
    DeleteAgentTaxPaymentInfoResponse: DeleteAgentTaxPaymentInfoResponse,
    RefundRequest: RefundRequest,
    BindRelateAccReUnionPayResponse: BindRelateAccReUnionPayResponse,
    BankCardItem: BankCardItem,

}

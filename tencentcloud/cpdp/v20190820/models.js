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
 * UploadTaxPayment请求参数结构体
 * @class
 */
class UploadTaxPaymentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台渠道
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * 完税ID
         * @type {string || null}
         */
        this.TaxId = null;

        /**
         * 完税列表下载地址
         * @type {string || null}
         */
        this.FileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.TaxId = 'TaxId' in params ? params.TaxId : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

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
 * CreatePayRollToken返回参数结构体
 * @class
 */
class CreatePayRollTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Token有效时间，单位秒
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 微信服务商商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

        /**
         * Token值
         * @type {string || null}
         */
        this.Token = null;

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
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
         * @type {string || null}
         */
        this.SettleAcctNo = null;

        /**
         * 结算账户户名
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
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
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
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
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
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

        /**
         * 经办人信息
         * @type {AgencyClientInfo || null}
         */
        this.AgencyClientInfo = null;

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

        if (params.AgencyClientInfo) {
            let obj = new AgencyClientInfo();
            obj.deserialize(params.AgencyClientInfo)
            this.AgencyClientInfo = obj;
        }

    }
}

/**
 * QueryOpenBankBankBranchList返回参数结构体
 * @class
 */
class QueryOpenBankBankBranchListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankBankBranchListResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankBankBranchListResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MigrateOrderRefundQuery返回参数结构体
 * @class
 */
class MigrateOrderRefundQueryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求成功状态
         * @type {boolean || null}
         */
        this.IsSuccess = null;

        /**
         * 交易流水号
         * @type {string || null}
         */
        this.TradeSerialNo = null;

        /**
         * 交易备注
         * @type {string || null}
         */
        this.TradeMsg = null;

        /**
         * 交易状态：0=交易待处理；1=交易处理中；2=交易处理成功；3=交易失败；4=状态未知
         * @type {number || null}
         */
        this.TradeStatus = null;

        /**
         * 第三方支付机构支付交易号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ThirdChannelOrderId = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;
        this.TradeMsg = 'TradeMsg' in params ? params.TradeMsg : null;
        this.TradeStatus = 'TradeStatus' in params ? params.TradeStatus : null;
        this.ThirdChannelOrderId = 'ThirdChannelOrderId' in params ? params.ThirdChannelOrderId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryOpenBankPaymentOrder请求参数结构体
 * @class
 */
class QueryOpenBankPaymentOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户号。外部接入平台入驻云企付平台下发。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 外部商户订单号。与ChannelOrderId不能同时为空。
         * @type {string || null}
         */
        this.OutOrderId = null;

        /**
         * 云平台订单号。与OutOrderId不能同时为空。
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境。
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.OutOrderId = 'OutOrderId' in params ? params.OutOrderId : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * QueryOpenBankBindExternalSubMerchantBankAccount返回参数结构体
 * @class
 */
class QueryOpenBankBindExternalSubMerchantBankAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankBindExternalSubMerchantBankAccountResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankBindExternalSubMerchantBankAccountResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadOrgFile请求参数结构体
 * @class
 */
class UploadOrgFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 存储区域（0私密区，1公共区），请严格按文件要求，上传到不同的区域
         * @type {string || null}
         */
        this.Storage = null;

        /**
         * 文件的md5值（为防止平台多次上传重复文件，文件名为文件md5,且不会覆盖，重复上传返回第一次上传成功的文件路径）
         * @type {string || null}
         */
        this.FileMd5 = null;

        /**
         * 文件内容（先将图片转换成二进制，再进行base64加密）
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 文件扩展名（png,jpg,gif）
         * @type {string || null}
         */
        this.FileExtension = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.FileMd5 = 'FileMd5' in params ? params.FileMd5 : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;
        this.FileExtension = 'FileExtension' in params ? params.FileExtension : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * GetPayRollAuthResult请求参数结构体
 * @class
 */
class GetPayRollAuthResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一
         * @type {string || null}
         */
        this.AuthNumber = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuthNumber = 'AuthNumber' in params ? params.AuthNumber : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;

    }
}

/**
 * RefundTlinxOrder返回参数结构体
 * @class
 */
class RefundTlinxOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，0表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 退款响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RefundOrderResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new RefundOrderResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * QueryContractPayWayList返回参数结构体
 * @class
 */
class QueryContractPayWayListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 查询合同支付方式响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ContractPayListResult> || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new ContractPayListResult();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryContractPayWayList请求参数结构体
 * @class
 */
class QueryContractPayWayListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryAssignment请求参数结构体
 * @class
 */
class QueryAssignmentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播ID
         * @type {string || null}
         */
        this.AnchorId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;

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
 * QueryContractRelateShop返回参数结构体
 * @class
 */
class QueryContractRelateShopResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 查询合同可关联门店响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QueryContractRelateShopResult> || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new QueryContractRelateShopResult();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 子商户进件返回结果
 * @class
 */
class CreateOpenBankExternalSubMerchantRegistrationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进件状态。
__SUCCESS__: 进件成功
__FAILED__: 进件失败
__PROCESSING__: 进件中
注意：若返回进件中，需要再次调用进件结果查询接口，查询结果。
         * @type {string || null}
         */
        this.RegistrationStatus = null;

        /**
         * 进件返回描述, 例如失败原因等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistrationMessage = null;

        /**
         * 渠道进件序列号。
         * @type {string || null}
         */
        this.ChannelRegistrationNo = null;

        /**
         * 渠道子商户ID。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 第三方渠道返回信息, 为JSON格式字符串。详情见附录-复杂类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistrationStatus = 'RegistrationStatus' in params ? params.RegistrationStatus : null;
        this.RegistrationMessage = 'RegistrationMessage' in params ? params.RegistrationMessage : null;
        this.ChannelRegistrationNo = 'ChannelRegistrationNo' in params ? params.ChannelRegistrationNo : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ExternalReturnData = 'ExternalReturnData' in params ? params.ExternalReturnData : null;

    }
}

/**
 * RefundTlinxOrder请求参数结构体
 * @class
 */
class RefundTlinxOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 原始订单的开发者交易流水号
         * @type {string || null}
         */
        this.DeveloperNo = null;

        /**
         * 新退款订单的开发者流水号，同一门店内唯一
         * @type {string || null}
         */
        this.RefundOutNo = null;

        /**
         * 退款订单名称，可以为空
         * @type {string || null}
         */
        this.RefundOrderName = null;

        /**
         * 退款金额（以分为单位，没有小数点）
         * @type {string || null}
         */
        this.RefundAmount = null;

        /**
         * 主管密码，对密码进行SHA-1加密，默认为123456
         * @type {string || null}
         */
        this.ShopPassword = null;

        /**
         * 退款备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.DeveloperNo = 'DeveloperNo' in params ? params.DeveloperNo : null;
        this.RefundOutNo = 'RefundOutNo' in params ? params.RefundOutNo : null;
        this.RefundOrderName = 'RefundOrderName' in params ? params.RefundOrderName : null;
        this.RefundAmount = 'RefundAmount' in params ? params.RefundAmount : null;
        this.ShopPassword = 'ShopPassword' in params ? params.ShopPassword : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
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
 * 商户支付方式数据
 * @class
 */
class MerchantPayWayData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支付币种
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayCurrency = null;

        /**
         * 支付图标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayIcon = null;

        /**
         * 支付名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayInternalName = null;

        /**
         * 支付简称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * 是否支持退款
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaySplitRefund = null;

        /**
         * 支付标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayTag = null;

        /**
         * 支付凭证图标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayTicketIcon = null;

        /**
         * 支付类型，逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * 凭证名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TicketName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayCurrency = 'PayCurrency' in params ? params.PayCurrency : null;
        this.PayIcon = 'PayIcon' in params ? params.PayIcon : null;
        this.PayInternalName = 'PayInternalName' in params ? params.PayInternalName : null;
        this.PayName = 'PayName' in params ? params.PayName : null;
        this.PaySplitRefund = 'PaySplitRefund' in params ? params.PaySplitRefund : null;
        this.PayTag = 'PayTag' in params ? params.PayTag : null;
        this.PayTicketIcon = 'PayTicketIcon' in params ? params.PayTicketIcon : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
        this.TicketName = 'TicketName' in params ? params.TicketName : null;

    }
}

/**
 * 云企付-查询对账单文件下载url
 * @class
 */
class QueryOpenBankDownLoadUrlResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 供下一步请求账单文件的下载地址。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 从 download_url 下载的文件的哈希值，用于校验文件的完整性。
         * @type {string || null}
         */
        this.HashValue = null;

        /**
         * 从 download_url 下载的文件的哈希类型，用于校验文件的完整性。
         * @type {string || null}
         */
        this.HashType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.HashValue = 'HashValue' in params ? params.HashValue : null;
        this.HashType = 'HashType' in params ? params.HashType : null;

    }
}

/**
 * BindAccount返回参数结构体
 * @class
 */
class BindAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 该字段为null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 客户端信息
 * @class
 */
class CloudClientInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 场景类型。
wechat_ecommerce渠道 - h5支付方式，此字段必填；
枚举值：
CLIENT_TYPE_UNKNOWN 未知;
CLIENT_TYPE_IOS ios系统;
CLIENT_TYPE_ANDROID 安卓系统;
CLIENT_TYPE_WAP WAP场景;
CLIENT_TYPE_H5 H5场景;
         * @type {string || null}
         */
        this.ClientType = null;

        /**
         * 应用名称。
         * @type {string || null}
         */
        this.AppName = null;

        /**
         * 网站URL。
         * @type {string || null}
         */
        this.AppUrl = null;

        /**
         * IOS平台BundleID。
         * @type {string || null}
         */
        this.BundleId = null;

        /**
         * Android平台PackageName
         * @type {string || null}
         */
        this.PackageName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientType = 'ClientType' in params ? params.ClientType : null;
        this.AppName = 'AppName' in params ? params.AppName : null;
        this.AppUrl = 'AppUrl' in params ? params.AppUrl : null;
        this.BundleId = 'BundleId' in params ? params.BundleId : null;
        this.PackageName = 'PackageName' in params ? params.PackageName : null;

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
 * UnbindOpenBankExternalSubMerchantBankAccount请求参数结构体
 * @class
 */
class UnbindOpenBankExternalSubMerchantBankAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户ID。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道子商户ID。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式。
__EBANK_PAYMENT__: ebank支付
__OPENBANK_PAYMENT__: openbank支付
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 绑卡序列号。
         * @type {string || null}
         */
        this.BindSerialNo = null;

        /**
         * 外部申请编号。
         * @type {string || null}
         */
        this.OutApplyId = null;

        /**
         * 通知地址。
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 环境类型。
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.BindSerialNo = 'BindSerialNo' in params ? params.BindSerialNo : null;
        this.OutApplyId = 'OutApplyId' in params ? params.OutApplyId : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

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
 * 添加商户响应对象
 * @class
 */
class AddMerchantResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 系统商户号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;

    }
}

/**
 * QueryOpenBankExternalSubMerchantRegistration请求参数结构体
 * @class
 */
class QueryOpenBankExternalSubMerchantRegistrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户号。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道进件号，与外部进件号二者选填其一。
         * @type {string || null}
         */
        this.ChannelRegistrationNo = null;

        /**
         * 外部进件号，与渠道进件号二者选填其一。
         * @type {string || null}
         */
        this.OutRegistrationNo = null;

        /**
         * 环境类型
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelRegistrationNo = 'ChannelRegistrationNo' in params ? params.ChannelRegistrationNo : null;
        this.OutRegistrationNo = 'OutRegistrationNo' in params ? params.OutRegistrationNo : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

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
 * CreateTransferBatch返回参数结构体
 * @class
 */
class CreateTransferBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
         * @type {string || null}
         */
        this.MerchantBatchNo = null;

        /**
         * 微信批次单号。
微信商家转账系统返回的唯一标识。
示例值：1030000071100999991182020050700019480001
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 批次受理成功时返回，遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
         * @type {string || null}
         */
        this.CreateTime = null;

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
        this.MerchantBatchNo = 'MerchantBatchNo' in params ? params.MerchantBatchNo : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * BindAccount请求参数结构体
 * @class
 */
class BindAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播Id
         * @type {string || null}
         */
        this.AnchorId = null;

        /**
         * 1 微信企业付款 
2 支付宝转账 
3 平安银企直连代发转账
         * @type {number || null}
         */
        this.TransferType = null;

        /**
         * 收款方标识。
微信为open_id；
支付宝为会员alipay_user_id;
平安为收款方银行账号;
         * @type {string || null}
         */
        this.AccountNo = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.PhoneNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.TransferType = 'TransferType' in params ? params.TransferType : null;
        this.AccountNo = 'AccountNo' in params ? params.AccountNo : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;

    }
}

/**
 * QueryCloudChannelData返回参数结构体
 * @class
 */
class QueryCloudChannelDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutOrderNo = null;

        /**
         * 渠道订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 第三方渠道数据类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalChannelDataType = null;

        /**
         * 渠道名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 第三方渠道数据列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudExternalChannelData> || null}
         */
        this.ExternalChannelDataList = null;

        /**
         * 子应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 米大师分配的支付主MidasAppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

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
        this.OutOrderNo = 'OutOrderNo' in params ? params.OutOrderNo : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.ExternalChannelDataType = 'ExternalChannelDataType' in params ? params.ExternalChannelDataType : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

        if (params.ExternalChannelDataList) {
            this.ExternalChannelDataList = new Array();
            for (let z in params.ExternalChannelDataList) {
                let obj = new CloudExternalChannelData();
                obj.deserialize(params.ExternalChannelDataList[z]);
                this.ExternalChannelDataList.push(obj);
            }
        }
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QuerySinglePay返回参数结构体
 * @class
 */
class QuerySinglePayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {QuerySinglePayResult || null}
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
            let obj = new QuerySinglePayResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * CreateRedInvoice请求参数结构体
 * @class
 */
class CreateRedInvoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开票平台ID
0 : 高灯
1 : 票易通
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
 * 合约信息
 * @class
 */
class ContractInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师内部签约商户号
         * @type {string || null}
         */
        this.ChannelContractMerchantId = null;

        /**
         * 米大师内部签约子商户号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelContractSubMerchantId = null;

        /**
         * 米大师内部签约应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelContractAppId = null;

        /**
         * 米大师内部签约子应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelContractSubAppId = null;

        /**
         * 业务合约协议号
         * @type {string || null}
         */
        this.OutContractCode = null;

        /**
         * 第三方渠道用户信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ExternalContractUserInfo> || null}
         */
        this.ExternalContractUserInfoList = null;

        /**
         * 签约方式，如 wechat_app ，使用app方式下的微信签
         * @type {string || null}
         */
        this.ContractMethod = null;

        /**
         * 合约场景id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractSceneId = null;

        /**
         * 用户信息
         * @type {ContractUserInfo || null}
         */
        this.UserInfo = null;

        /**
         * 第三方渠道签约数据
         * @type {string || null}
         */
        this.ExternalContractData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelContractMerchantId = 'ChannelContractMerchantId' in params ? params.ChannelContractMerchantId : null;
        this.ChannelContractSubMerchantId = 'ChannelContractSubMerchantId' in params ? params.ChannelContractSubMerchantId : null;
        this.ChannelContractAppId = 'ChannelContractAppId' in params ? params.ChannelContractAppId : null;
        this.ChannelContractSubAppId = 'ChannelContractSubAppId' in params ? params.ChannelContractSubAppId : null;
        this.OutContractCode = 'OutContractCode' in params ? params.OutContractCode : null;

        if (params.ExternalContractUserInfoList) {
            this.ExternalContractUserInfoList = new Array();
            for (let z in params.ExternalContractUserInfoList) {
                let obj = new ExternalContractUserInfo();
                obj.deserialize(params.ExternalContractUserInfoList[z]);
                this.ExternalContractUserInfoList.push(obj);
            }
        }
        this.ContractMethod = 'ContractMethod' in params ? params.ContractMethod : null;
        this.ContractSceneId = 'ContractSceneId' in params ? params.ContractSceneId : null;

        if (params.UserInfo) {
            let obj = new ContractUserInfo();
            obj.deserialize(params.UserInfo)
            this.UserInfo = obj;
        }
        this.ExternalContractData = 'ExternalContractData' in params ? params.ExternalContractData : null;

    }
}

/**
 * QueryOpenBankExternalSubMerchantBankAccount请求参数结构体
 * @class
 */
class QueryOpenBankExternalSubMerchantBankAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户ID。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道子商户ID。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式。
__EBANK_PAYMENT__: ebank支付
__OPENBANK_PAYMENT__: openbank支付
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 环境类型。
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * 第三方渠道合约信息
 * @class
 */
class ExternalReturnContractInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方渠道协议id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnAgreementId = null;

        /**
         * 第三方渠道协议生效时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnContractEffectiveTimestamp = null;

        /**
         * 第三方渠道协议解约时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnContractTerminationTimestamp = null;

        /**
         * 平台合约状态
协议状态，枚举值：
CONTRACT_STATUS_SIGNED：已签约
CONTRACT_STATUS_TERMINATED：未签约
CONTRACT_STATUS_PENDING：签约进行中
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnContractStatus = null;

        /**
         * 第三方渠道请求序列号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnRequestId = null;

        /**
         * 第三方渠道协议签署时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnContractSignedTimestamp = null;

        /**
         * 第三方渠道协议到期时间戳
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnContractExpiredTimestamp = null;

        /**
         * 第三方渠道返回的合约数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnContractData = null;

        /**
         * 第三方渠道解约备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnContractTerminationRemark = null;

        /**
         * 第三方渠道协议解约方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnContractTerminationMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExternalReturnAgreementId = 'ExternalReturnAgreementId' in params ? params.ExternalReturnAgreementId : null;
        this.ExternalReturnContractEffectiveTimestamp = 'ExternalReturnContractEffectiveTimestamp' in params ? params.ExternalReturnContractEffectiveTimestamp : null;
        this.ExternalReturnContractTerminationTimestamp = 'ExternalReturnContractTerminationTimestamp' in params ? params.ExternalReturnContractTerminationTimestamp : null;
        this.ExternalReturnContractStatus = 'ExternalReturnContractStatus' in params ? params.ExternalReturnContractStatus : null;
        this.ExternalReturnRequestId = 'ExternalReturnRequestId' in params ? params.ExternalReturnRequestId : null;
        this.ExternalReturnContractSignedTimestamp = 'ExternalReturnContractSignedTimestamp' in params ? params.ExternalReturnContractSignedTimestamp : null;
        this.ExternalReturnContractExpiredTimestamp = 'ExternalReturnContractExpiredTimestamp' in params ? params.ExternalReturnContractExpiredTimestamp : null;
        this.ExternalReturnContractData = 'ExternalReturnContractData' in params ? params.ExternalReturnContractData : null;
        this.ExternalReturnContractTerminationRemark = 'ExternalReturnContractTerminationRemark' in params ? params.ExternalReturnContractTerminationRemark : null;
        this.ExternalReturnContractTerminationMode = 'ExternalReturnContractTerminationMode' in params ? params.ExternalReturnContractTerminationMode : null;

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
 * 公司信息
 * @class
 */
class OrganizationInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公司名称，个体工商户必输
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 公司证件类型，个体工商户必输，证件类型仅支持73
         * @type {string || null}
         */
        this.OrganizationType = null;

        /**
         * 公司证件号码，个体工商户必输
         * @type {string || null}
         */
        this.OrganizationCode = null;

        /**
         * 法人名称，如果SubMchName不是法人，需要另外送入法人信息（企业必输）
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
         * @type {string || null}
         */
        this.LegalPersonName = null;

        /**
         * 法人证件类型，如果SubMchName不是法人，需要另外送入法人信息（企业必输）
         * @type {string || null}
         */
        this.LegalPersonIdType = null;

        /**
         * 法人证件号码，如果SubMchName不是法人，需要另外送入法人信息（企业必输）
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
         * @type {string || null}
         */
        this.LegalPersonIdCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.OrganizationType = 'OrganizationType' in params ? params.OrganizationType : null;
        this.OrganizationCode = 'OrganizationCode' in params ? params.OrganizationCode : null;
        this.LegalPersonName = 'LegalPersonName' in params ? params.LegalPersonName : null;
        this.LegalPersonIdType = 'LegalPersonIdType' in params ? params.LegalPersonIdType : null;
        this.LegalPersonIdCode = 'LegalPersonIdCode' in params ? params.LegalPersonIdCode : null;

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
 * ConfirmOrder请求参数结构体
 * @class
 */
class ConfirmOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配给商户的AppId
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 平台流水号。消费订单发起成功后，返回的平台唯一订单号。
         * @type {string || null}
         */
        this.OrderNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;

    }
}

/**
 * 渠道扩展促销信息
 * @class
 */
class CloudExternalPromptGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道名。
为米大师定义的枚举值：
wechat 微信渠道
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 渠道扩展促销信息列表，由各个渠道自行定义。
ChannelName为wechat时，组成为 <Wechat-ExternalPromptInfo>
         * @type {Array.<CloudExternalPromptInfo> || null}
         */
        this.ExternalPromptInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;

        if (params.ExternalPromptInfoList) {
            this.ExternalPromptInfoList = new Array();
            for (let z in params.ExternalPromptInfoList) {
                let obj = new CloudExternalPromptInfo();
                obj.deserialize(params.ExternalPromptInfoList[z]);
                this.ExternalPromptInfoList.push(obj);
            }
        }

    }
}

/**
 * ModifyMerchant返回参数结构体
 * @class
 */
class ModifyMerchantResponse extends  AbstractModel {
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
 * 返回的合约信息
 * @class
 */
class ReturnContractInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合约信息
         * @type {ContractInfo || null}
         */
        this.ContractInfo = null;

        /**
         * 米大师内部生成的合约信息
         * @type {ChannelReturnContractInfo || null}
         */
        this.ChannelReturnContractInfo = null;

        /**
         * 第三方渠道合约信息
         * @type {ExternalReturnContractInfo || null}
         */
        this.ExternalReturnContractInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ContractInfo) {
            let obj = new ContractInfo();
            obj.deserialize(params.ContractInfo)
            this.ContractInfo = obj;
        }

        if (params.ChannelReturnContractInfo) {
            let obj = new ChannelReturnContractInfo();
            obj.deserialize(params.ChannelReturnContractInfo)
            this.ChannelReturnContractInfo = obj;
        }

        if (params.ExternalReturnContractInfo) {
            let obj = new ExternalReturnContractInfo();
            obj.deserialize(params.ExternalReturnContractInfo)
            this.ExternalReturnContractInfo = obj;
        }

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
 * 查询城市编码响应对象
 * @class
 */
class CityCodeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 城市编码cityid，数字与字母的结合
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * 省份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 县区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.District = null;

        /**
         * 城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.District = 'District' in params ? params.District : null;
        this.City = 'City' in params ? params.City : null;

    }
}

/**
 * QueryMerchantClassification请求参数结构体
 * @class
 */
class QueryMerchantClassificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 第三方子商户银行卡解绑返回结果
 * @class
 */
class UnbindOpenBankExternalSubMerchantBankAccountResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道申请编号。
         * @type {string || null}
         */
        this.ChannelApplyId = null;

        /**
         * 解绑状态。
__SUCCESS__: 解绑成功
__FAILED__: 解绑失败
__PROCESSING__: 解绑中
注意：若返回解绑中，需要再次调用解绑结果查询接口查询结果。
         * @type {string || null}
         */
        this.UnbindStatus = null;

        /**
         * 解绑返回描述, 例如失败原因等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UnbindMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelApplyId = 'ChannelApplyId' in params ? params.ChannelApplyId : null;
        this.UnbindStatus = 'UnbindStatus' in params ? params.UnbindStatus : null;
        this.UnbindMessage = 'UnbindMessage' in params ? params.UnbindMessage : null;

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
 * CreateOpenBankMerchant返回参数结构体
 * @class
 */
class CreateOpenBankMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateOpenBankMerchantResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new CreateOpenBankMerchantResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * 批量转账查询返回批次明细实体
 * @class
 */
class TransferDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商家明细单号。
商户系统内部的商家明细单号
示例值：plfk2020042013
         * @type {string || null}
         */
        this.MerchantDetailNo = null;

        /**
         * 微信明细单号。
微信区分明细单返回的唯一标识。
示例值：1030000071100999991182020050700019480001
         * @type {string || null}
         */
        this.DetailId = null;

        /**
         * 明细状态。
PROCESSING：转账中，正在处理，结果未明；
SUCCESS：转账成功；
FAIL：转账失败，需要确认失败原因以后，再决定是否重新发起地该笔明细的转账。
示例值：SUCCESS
         * @type {string || null}
         */
        this.DetailStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantDetailNo = 'MerchantDetailNo' in params ? params.MerchantDetailNo : null;
        this.DetailId = 'DetailId' in params ? params.DetailId : null;
        this.DetailStatus = 'DetailStatus' in params ? params.DetailStatus : null;

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
 * DistributeAccreditTlinx请求参数结构体
 * @class
 */
class DistributeAccreditTlinxRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 验证方式，传1手机验证(验证码时效60S)传2结算卡验证(时效6小时)，多种方式用逗号隔开
         * @type {string || null}
         */
        this.AuthType = null;

        /**
         * 分账比例（500=5%）不传默认百分之10
         * @type {string || null}
         */
        this.Percent = null;

        /**
         * 营业执照商户全称
         * @type {string || null}
         */
        this.FullName = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.AuthType = 'AuthType' in params ? params.AuthType : null;
        this.Percent = 'Percent' in params ? params.Percent : null;
        this.FullName = 'FullName' in params ? params.FullName : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryContractRelateShop请求参数结构体
 * @class
 */
class QueryContractRelateShopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 合同主键
         * @type {string || null}
         */
        this.ContractId = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.ContractId = 'ContractId' in params ? params.ContractId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * CreateOpenBankRechargeOrder请求参数结构体
 * @class
 */
class CreateOpenBankRechargeOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云企付渠道商户号。外部接入平台入驻云企付平台后下发。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 外部订单号,只能是数字、大小写字母，且在同一个接入平台下唯一，限定长度40位。
         * @type {string || null}
         */
        this.OutOrderId = null;

        /**
         * 付款金额，单位分。
         * @type {number || null}
         */
        this.TotalAmount = null;

        /**
         * 固定值CNY。
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 订单过期时间，yyyy-MM-dd HH:mm:ss格式。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 收款方信息。
         * @type {OpenBankRechargePayeeInfo || null}
         */
        this.PayeeInfo = null;

        /**
         * 渠道子商户号
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 通知地址，如www.test.com。
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 备注信息。
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
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.OutOrderId = 'OutOrderId' in params ? params.OutOrderId : null;
        this.TotalAmount = 'TotalAmount' in params ? params.TotalAmount : null;
        this.Currency = 'Currency' in params ? params.Currency : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;

        if (params.PayeeInfo) {
            let obj = new OpenBankRechargePayeeInfo();
            obj.deserialize(params.PayeeInfo)
            this.PayeeInfo = obj;
        }
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 支付方式费率及自定义表单项
 * @class
 */
class QueryContractPayFeeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * pay支付方式json数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PayDataResult || null}
         */
        this.Pay = null;

        /**
         * 合同扩展自定义字段
         * @type {Array.<string> || null}
         */
        this.ExtraInput = null;

        /**
         * pay_fee支付方式行业分类费率json数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PayFeeDataResult> || null}
         */
        this.PayFee = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Pay) {
            let obj = new PayDataResult();
            obj.deserialize(params.Pay)
            this.Pay = obj;
        }
        this.ExtraInput = 'ExtraInput' in params ? params.ExtraInput : null;

        if (params.PayFee) {
            this.PayFee = new Array();
            for (let z in params.PayFee) {
                let obj = new PayFeeDataResult();
                obj.deserialize(params.PayFee[z]);
                this.PayFee.push(obj);
            }
        }

    }
}

/**
 * QueryExceedingInfo返回参数结构体
 * @class
 */
class QueryExceedingInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 超额信息结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryExceedingInfoResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryExceedingInfoResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddContract请求参数结构体
 * @class
 */
class AddContractRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 机构合同主键（系统有唯一性校验），建议使用合同表的主键ID，防止重复添加合同
         * @type {string || null}
         */
        this.OutContractId = null;

        /**
         * 合同编号（系统有唯一性校验）
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 支付方式编号
         * @type {string || null}
         */
        this.PaymentId = null;

        /**
         * 支付方式行业分类编号
         * @type {string || null}
         */
        this.PaymentClassificationId = null;

        /**
         * 封顶值（分为单位，无封顶填0）
         * @type {string || null}
         */
        this.PaymentClassificationLimit = null;

        /**
         * 商户编号
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 签约扣率百分比（如：0.32）
         * @type {string || null}
         */
        this.Fee = null;

        /**
         * 合同生效日期（yyyy-mm-dd）
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 合同过期日期（yyyy-mm-dd）
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 合同签约人
         * @type {string || null}
         */
        this.SignMan = null;

        /**
         * 签购单名称，建议使用商户招牌名称
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * 合同签署日期（yyyy-mm-dd）
         * @type {string || null}
         */
        this.SignDate = null;

        /**
         * 是否自动续签（1是，0否）
         * @type {string || null}
         */
        this.AutoSign = null;

        /**
         * 联系人
         * @type {string || null}
         */
        this.Contact = null;

        /**
         * 联系人电话
         * @type {string || null}
         */
        this.ContactTelephone = null;

        /**
         * 合同照片【私密区】
         * @type {string || null}
         */
        this.PictureOne = null;

        /**
         * 合同照片【私密区】
         * @type {string || null}
         */
        this.PictureTwo = null;

        /**
         * 渠道扩展字段，json格式
         * @type {string || null}
         */
        this.ChannelExtJson = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * 合同选项1（不同支付方式规则不一样，请以支付方式规定的格式传值）
         * @type {string || null}
         */
        this.PaymentOptionOne = null;

        /**
         * 合同选项2（不同支付方式规则不一样，请以支付方式规定的格式传值）
         * @type {string || null}
         */
        this.PaymentOptionTwo = null;

        /**
         * 合同选项3（不同支付方式规则不一样，请以支付方式规定的格式传值）
         * @type {string || null}
         */
        this.PaymentOptionThree = null;

        /**
         * 合同选项4（不同支付方式规则不一样，请以支付方式规定的格式传值）
         * @type {string || null}
         */
        this.PaymentOptionFour = null;

        /**
         * 合同证书选项1（不同支付方式规则不一样，请以支付方式规定的格式传值）
         * @type {string || null}
         */
        this.PaymentOptionFive = null;

        /**
         * 合同证书选项2（不同支付方式规则不一样，请以支付方式规定的格式传值）
         * @type {string || null}
         */
        this.PaymentOptionSix = null;

        /**
         * 合同选项5（不同支付方式规则不一样，请以支付方式规定的格式传值）
         * @type {string || null}
         */
        this.PaymentOptionSeven = null;

        /**
         * 合同选项6（不同支付方式规则不一样，请以支付方式规定的格式传值）
         * @type {string || null}
         */
        this.PaymentOptionOther = null;

        /**
         * 合同选项8
         * @type {string || null}
         */
        this.PaymentOptionTen = null;

        /**
         * 合同选项7（不同支付方式规则不一样，请以支付方式规定的格式传值）
         * @type {string || null}
         */
        this.PaymentOptionNine = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.OutContractId = 'OutContractId' in params ? params.OutContractId : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.PaymentId = 'PaymentId' in params ? params.PaymentId : null;
        this.PaymentClassificationId = 'PaymentClassificationId' in params ? params.PaymentClassificationId : null;
        this.PaymentClassificationLimit = 'PaymentClassificationLimit' in params ? params.PaymentClassificationLimit : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.Fee = 'Fee' in params ? params.Fee : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.SignMan = 'SignMan' in params ? params.SignMan : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.SignDate = 'SignDate' in params ? params.SignDate : null;
        this.AutoSign = 'AutoSign' in params ? params.AutoSign : null;
        this.Contact = 'Contact' in params ? params.Contact : null;
        this.ContactTelephone = 'ContactTelephone' in params ? params.ContactTelephone : null;
        this.PictureOne = 'PictureOne' in params ? params.PictureOne : null;
        this.PictureTwo = 'PictureTwo' in params ? params.PictureTwo : null;
        this.ChannelExtJson = 'ChannelExtJson' in params ? params.ChannelExtJson : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.PaymentOptionOne = 'PaymentOptionOne' in params ? params.PaymentOptionOne : null;
        this.PaymentOptionTwo = 'PaymentOptionTwo' in params ? params.PaymentOptionTwo : null;
        this.PaymentOptionThree = 'PaymentOptionThree' in params ? params.PaymentOptionThree : null;
        this.PaymentOptionFour = 'PaymentOptionFour' in params ? params.PaymentOptionFour : null;
        this.PaymentOptionFive = 'PaymentOptionFive' in params ? params.PaymentOptionFive : null;
        this.PaymentOptionSix = 'PaymentOptionSix' in params ? params.PaymentOptionSix : null;
        this.PaymentOptionSeven = 'PaymentOptionSeven' in params ? params.PaymentOptionSeven : null;
        this.PaymentOptionOther = 'PaymentOptionOther' in params ? params.PaymentOptionOther : null;
        this.PaymentOptionTen = 'PaymentOptionTen' in params ? params.PaymentOptionTen : null;
        this.PaymentOptionNine = 'PaymentOptionNine' in params ? params.PaymentOptionNine : null;

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
 * DistributeAddReceiver请求参数结构体
 * @class
 */
class DistributeAddReceiverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 商户编号
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * QueryOpenBankDailyReceiptDownloadUrl返回参数结构体
 * @class
 */
class QueryOpenBankDailyReceiptDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，SUCCESS表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 按日期查询回单下载地址响应对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankDailyReceiptDownloadUrlResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankDailyReceiptDownloadUrlResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * BindOpenBankExternalSubMerchantBankAccount返回参数结构体
 * @class
 */
class BindOpenBankExternalSubMerchantBankAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BindOpenBankExternalSubMerchantBankAccountResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new BindOpenBankExternalSubMerchantBankAccountResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryMemberTransactionDetails返回参数结构体
 * @class
 */
class QueryMemberTransactionDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryMemberTransactionDetailsResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryMemberTransactionDetailsResult();
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

        /**
         * png地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ImageUrl = null;

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
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;

    }
}

/**
 * 会员资金交易明细信息
 * @class
 */
class FundsTransactionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 资金交易类型。
__1__：提现/退款
__2__：清分/充值
         * @type {string || null}
         */
        this.TransType = null;

        /**
         * 银行记账说明。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankBookingMessage = null;

        /**
         * 交易状态。
__0__：成功
         * @type {string || null}
         */
        this.TranStatus = null;

        /**
         * 业务方会员标识。
_平安渠道为交易网会员代码_
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransNetMemberCode = null;

        /**
         * 子账户账号。
_平安渠道为见证子账户的账号_
         * @type {string || null}
         */
        this.SubAccountNumber = null;

        /**
         * 子账户名称。
_平安渠道为见证子账户的户名_
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAccountName = null;

        /**
         * 交易金额。
         * @type {string || null}
         */
        this.TransAmount = null;

        /**
         * 交易手续费。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransFee = null;

        /**
         * 交易日期，格式：yyyyMMdd。
         * @type {string || null}
         */
        this.TransDate = null;

        /**
         * 交易时间，格式：HHmmss。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransTime = null;

        /**
         * 银行系统流水号。
_平安渠道为见证系统流水号_
         * @type {string || null}
         */
        this.BankSequenceNumber = null;

        /**
         * 备注。
_平安渠道，如果是见证+收单的交易，返回交易订单号_
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
        this.TransType = 'TransType' in params ? params.TransType : null;
        this.BankBookingMessage = 'BankBookingMessage' in params ? params.BankBookingMessage : null;
        this.TranStatus = 'TranStatus' in params ? params.TranStatus : null;
        this.TransNetMemberCode = 'TransNetMemberCode' in params ? params.TransNetMemberCode : null;
        this.SubAccountNumber = 'SubAccountNumber' in params ? params.SubAccountNumber : null;
        this.SubAccountName = 'SubAccountName' in params ? params.SubAccountName : null;
        this.TransAmount = 'TransAmount' in params ? params.TransAmount : null;
        this.TransFee = 'TransFee' in params ? params.TransFee : null;
        this.TransDate = 'TransDate' in params ? params.TransDate : null;
        this.TransTime = 'TransTime' in params ? params.TransTime : null;
        this.BankSequenceNumber = 'BankSequenceNumber' in params ? params.BankSequenceNumber : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * AddMerchant返回参数结构体
 * @class
 */
class AddMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码，0表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 添加商户响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AddMerchantResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new AddMerchantResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RefundCloudOrder请求参数结构体
 * @class
 */
class RefundCloudOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户Id，长度不小于5位，仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 退款订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
         * @type {string || null}
         */
        this.RefundId = null;

        /**
         * 退款金额，单位：分
当该字段为空或者为0时，系统会默认使用订单当实付金额作为退款金额
         * @type {number || null}
         */
        this.TotalRefundAmt = null;

        /**
         * 商品订单，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 环境类型
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 平台应收金额，单位：分
         * @type {number || null}
         */
        this.PlatformRefundAmt = null;

        /**
         * 结算应收金额，单位：分
         * @type {number || null}
         */
        this.MchRefundAmt = null;

        /**
         * 支持多个子订单批量退款单个子订单退款支持传SubOutTradeNo
也支持传SubOrderRefundList，都传的时候以SubOrderRefundList为准。
如果传了子单退款细节，外部不需要再传退款金额，平台应退，商户应退金额
         * @type {Array.<CloudSubOrderRefund> || null}
         */
        this.SubOrderRefundList = null;

        /**
         * 渠道订单号，当出现重复支付时，可以将重复支付订单的渠道订单号传入，以进行退款（注意：目前该重复支付订单的渠道订单号仅能通过米大师内部获取），更多重复支付订单退款说明，请参考[重复支付订单退款说明](https://dev.tke.midas.qq.com/juxin-doc-next/apidocs/receive-order/Refund.html#%E9%87%8D%E5%A4%8D%E6%94%AF%E4%BB%98%E8%AE%A2%E5%8D%95%E9%80%80%E6%AC%BE%E8%AF%B4%E6%98%8E)
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 通知地址
         * @type {string || null}
         */
        this.RefundNotifyUrl = null;

        /**
         * 透传字段，退款成功回调透传给应用，用于开发者透传自定义内容
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 渠道扩展退款促销列表，可将各个渠道的退款促销信息放于该列表
         * @type {string || null}
         */
        this.ExternalRefundPromptGroupList = null;

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
        this.RefundId = 'RefundId' in params ? params.RefundId : null;
        this.TotalRefundAmt = 'TotalRefundAmt' in params ? params.TotalRefundAmt : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.PlatformRefundAmt = 'PlatformRefundAmt' in params ? params.PlatformRefundAmt : null;
        this.MchRefundAmt = 'MchRefundAmt' in params ? params.MchRefundAmt : null;

        if (params.SubOrderRefundList) {
            this.SubOrderRefundList = new Array();
            for (let z in params.SubOrderRefundList) {
                let obj = new CloudSubOrderRefund();
                obj.deserialize(params.SubOrderRefundList[z]);
                this.SubOrderRefundList.push(obj);
            }
        }
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.RefundNotifyUrl = 'RefundNotifyUrl' in params ? params.RefundNotifyUrl : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.ExternalRefundPromptGroupList = 'ExternalRefundPromptGroupList' in params ? params.ExternalRefundPromptGroupList : null;

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
 * 上传下载响应对象
 * @class
 */
class DownloadFileResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件内容（base64加密的二进制内容）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 存储区域（0私密区，1公共区），请严格按文件要求，上传到不同的区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.Storage = 'Storage' in params ? params.Storage : null;

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
 * ViewMerchant请求参数结构体
 * @class
 */
class ViewMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 外部商户主键编号（MerchantNo或OutMerchantId必须传一个）
         * @type {string || null}
         */
        this.OutMerchantId = null;

        /**
         * 商户编号（MerchantNo或OutMerchantId必须传一个）
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.OutMerchantId = 'OutMerchantId' in params ? params.OutMerchantId : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * CloseCloudOrder返回参数结构体
 * @class
 */
class CloseCloudOrderResponse extends  AbstractModel {
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
 * 云企付-查询订单支付结果
 * @class
 */
class QueryOpenBankPaymentOrderResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户号。外部接入平台入驻云企付平台下发
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 外部商户订单号
         * @type {string || null}
         */
        this.OutOrderId = null;

        /**
         * 云企付平台订单号
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 第三方支付平台订单号
         * @type {string || null}
         */
        this.ThirdPayOrderId = null;

        /**
         * INIT：初始化
PAYING：支付中
DEDUCTED：扣款成功
ACCEPTED：支付受理成功
SUCCESS：支付成功
CLOSED：关单
PAY_FAIL：支付失败
REVOKE：退票
         * @type {string || null}
         */
        this.OrderStatus = null;

        /**
         * 支付渠道名称，如TENPAY
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 付款方式。如EBANK_PAYMENT
OPENBANK_PAYMENT
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 订单金额。单位分
         * @type {number || null}
         */
        this.TotalAmount = null;

        /**
         * 实际支付金额。单位分，支付成功时返回
         * @type {number || null}
         */
        this.PayAmount = null;

        /**
         * 失败原因，若失败的返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 附加信息，查询时原样透传
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Attachment = null;

        /**
         * 重定向参数，用于客户端跳转，订单未支付时返回该参数
渠道为TENPAY，付款方式为EBANK_PAYMENT时返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OpenBankRedirectInfo || null}
         */
        this.RedirectInfo = null;

        /**
         * 第三方渠道返回信息，见渠道特殊说明,详情见附录-复杂类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnData = null;

        /**
         * 银行复核指引。当TENPAY下OPENBANT_PAYMENT时，下单受理成功是返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OpenBankApprovalGuideInfo || null}
         */
        this.BankApprovalGuideInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.OutOrderId = 'OutOrderId' in params ? params.OutOrderId : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.ThirdPayOrderId = 'ThirdPayOrderId' in params ? params.ThirdPayOrderId : null;
        this.OrderStatus = 'OrderStatus' in params ? params.OrderStatus : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.TotalAmount = 'TotalAmount' in params ? params.TotalAmount : null;
        this.PayAmount = 'PayAmount' in params ? params.PayAmount : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.Attachment = 'Attachment' in params ? params.Attachment : null;

        if (params.RedirectInfo) {
            let obj = new OpenBankRedirectInfo();
            obj.deserialize(params.RedirectInfo)
            this.RedirectInfo = obj;
        }
        this.ExternalReturnData = 'ExternalReturnData' in params ? params.ExternalReturnData : null;

        if (params.BankApprovalGuideInfo) {
            let obj = new OpenBankApprovalGuideInfo();
            obj.deserialize(params.BankApprovalGuideInfo)
            this.BankApprovalGuideInfo = obj;
        }

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
 * pay_fee支付方式行业分类费率json数据
 * @class
 */
class PayFeeDataResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 机构的分佣扣率扣率
         * @type {string || null}
         */
        this.OrganizationFee = null;

        /**
         * 商户手续费封顶值，0为不限封顶
         * @type {string || null}
         */
        this.PaymentClassificationLimit = null;

        /**
         * 机构的分佣扣率类型(1按签约扣率，2按收单收益)
         * @type {string || null}
         */
        this.OrganizationFeeType = null;

        /**
         * 商户扣率最大值
         * @type {string || null}
         */
        this.PaymentClassificationMaxFee = null;

        /**
         * 商户扣率最小值
         * @type {string || null}
         */
        this.PaymentClassificationMinFee = null;

        /**
         * 行业会类编号
         * @type {string || null}
         */
        this.PaymentClassificationId = null;

        /**
         * 行业分类名称
         * @type {string || null}
         */
        this.PaymentClassificationName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrganizationFee = 'OrganizationFee' in params ? params.OrganizationFee : null;
        this.PaymentClassificationLimit = 'PaymentClassificationLimit' in params ? params.PaymentClassificationLimit : null;
        this.OrganizationFeeType = 'OrganizationFeeType' in params ? params.OrganizationFeeType : null;
        this.PaymentClassificationMaxFee = 'PaymentClassificationMaxFee' in params ? params.PaymentClassificationMaxFee : null;
        this.PaymentClassificationMinFee = 'PaymentClassificationMinFee' in params ? params.PaymentClassificationMinFee : null;
        this.PaymentClassificationId = 'PaymentClassificationId' in params ? params.PaymentClassificationId : null;
        this.PaymentClassificationName = 'PaymentClassificationName' in params ? params.PaymentClassificationName : null;

    }
}

/**
 * CreateInvoiceV2返回参数结构体
 * @class
 */
class CreateInvoiceV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票开具结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateInvoiceResultV2 || null}
         */
        this.Result = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMessage = null;

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
            let obj = new CreateInvoiceResultV2();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 银企直连-查询单笔支付状态条目
 * @class
 */
class QuerySinglePayItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付款状态（S：支付成功；P：支付处理中；F：支付失败）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayStatus = null;

        /**
         * 平台信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PlatformMsg = null;

        /**
         * 银行原始返回码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankRetCode = null;

        /**
         * 银行原始返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankRetMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayStatus = 'PayStatus' in params ? params.PayStatus : null;
        this.PlatformMsg = 'PlatformMsg' in params ? params.PlatformMsg : null;
        this.BankRetCode = 'BankRetCode' in params ? params.BankRetCode : null;
        this.BankRetMsg = 'BankRetMsg' in params ? params.BankRetMsg : null;

    }
}

/**
 * QueryInvoiceV2返回参数结构体
 * @class
 */
class QueryInvoiceV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票查询结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryInvoiceResultData || null}
         */
        this.Result = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMessage = null;

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
            let obj = new QueryInvoiceResultData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * QuerySinglePaymentResult请求参数结构体
 * @class
 */
class QuerySinglePaymentResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转账类型
         * @type {number || null}
         */
        this.TransferType = null;

        /**
         * 交易流水流水号，唯一
         * @type {string || null}
         */
        this.TradeSerialNo = null;

        /**
         * 订单号，与TradeSerialNo不能同时为空
         * @type {string || null}
         */
        this.OrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransferType = 'TransferType' in params ? params.TransferType : null;
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

    }
}

/**
 * QueryShopOpenId请求参数结构体
 * @class
 */
class QueryShopOpenIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 门店编号
         * @type {string || null}
         */
        this.ShopNo = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.ShopNo = 'ShopNo' in params ? params.ShopNo : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * 云企付-支付下单返回响应
 * @class
 */
class CreateOpenBankOrderPaymentResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云企付平台订单号。
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 第三方支付平台返回支付订单号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ThirdPayOrderId = null;

        /**
         * 小程序跳转参数渠道为TENPAY，付款方式为EBANK_PAYMENT时必选。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OpenBankRedirectInfo || null}
         */
        this.RedirectInfo = null;

        /**
         * 外部商户订单号，只能是数字、大小写字母，且在同一个接入平台下唯一。
         * @type {string || null}
         */
        this.OutOrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.ThirdPayOrderId = 'ThirdPayOrderId' in params ? params.ThirdPayOrderId : null;

        if (params.RedirectInfo) {
            let obj = new OpenBankRedirectInfo();
            obj.deserialize(params.RedirectInfo)
            this.RedirectInfo = obj;
        }
        this.OutOrderId = 'OutOrderId' in params ? params.OutOrderId : null;

    }
}

/**
 * CloseOpenBankPaymentOrder返回参数结构体
 * @class
 */
class CloseOpenBankPaymentOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，SUCCESS表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 关单响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloseOpenBankPaymentOrderResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new CloseOpenBankPaymentOrderResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateContract请求参数结构体
 * @class
 */
class TerminateContractRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户ID，长度不小于5位，仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 指定渠道：  wechat：微信支付  qqwallet：QQ钱包 
 bank：网银支付  只有一个渠道时需要指定
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 枚举值：
CONTRACT_TERMINATION_MODE_BY_OUT_CONTRACT_CODE: 按OutContractCode+ContractSceneId解约
CONTRACT_TERMINATION_MODE_BY_CHANNEL_CONTRACT_CODE：按ChannelContractCode解约
         * @type {string || null}
         */
        this.TerminateMode = null;

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
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 业务签约合同协议号 当TerminateMode=CONTRACT_TERMINATION_MODE_BY_OUT_CONTRACT_CODE 时 必填
         * @type {string || null}
         */
        this.OutContractCode = null;

        /**
         * 签约场景ID，当 TerminateMode=CONTRACT_TERMINATION_MODE_BY_OUT_CONTRACT_CODE 时 必填，在米大师侧托管后生成
         * @type {string || null}
         */
        this.ContractSceneId = null;

        /**
         * 米大师生成的协议号 当 TerminateMode=CONTRACT_TERMINATION_MODE_BY_CHANNEL_CONTRACT_CODE 时 必填
         * @type {string || null}
         */
        this.ChannelContractCode = null;

        /**
         * 第三方渠道合约数据，json字符串，与特定渠道有关
         * @type {string || null}
         */
        this.ExternalContractData = null;

        /**
         * 终止合约原因
         * @type {string || null}
         */
        this.TerminationReason = null;

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
         * USER_ID: 用户ID
ANONYMOUS: 匿名类型 USER_ID
默认值为 USER_ID
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * 签约方式
         * @type {string || null}
         */
        this.ContractMethod = null;

        /**
         * 签约代扣穿透查询存量数据迁移模式
         * @type {string || null}
         */
        this.MigrateMode = null;

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
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.TerminateMode = 'TerminateMode' in params ? params.TerminateMode : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.OutContractCode = 'OutContractCode' in params ? params.OutContractCode : null;
        this.ContractSceneId = 'ContractSceneId' in params ? params.ContractSceneId : null;
        this.ChannelContractCode = 'ChannelContractCode' in params ? params.ChannelContractCode : null;
        this.ExternalContractData = 'ExternalContractData' in params ? params.ExternalContractData : null;
        this.TerminationReason = 'TerminationReason' in params ? params.TerminationReason : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.ContractMethod = 'ContractMethod' in params ? params.ContractMethod : null;
        this.MigrateMode = 'MigrateMode' in params ? params.MigrateMode : null;

    }
}

/**
 * 云企付-设备信息
 * @class
 */
class OpenBankSceneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户端实际 ip，示例值：14.17.22.32
         * @type {string || null}
         */
        this.PayerClientIp = null;

        /**
         * 浏览器 User-Agent
         * @type {string || null}
         */
        this.PayerUa = null;

        /**
         * 用户下单时间，若不上送，服务端默认当前时间
         * @type {string || null}
         */
        this.OrderTime = null;

        /**
         * 终端设备号（门店号或收银设备 ID），示例值：POS1:1
         * @type {string || null}
         */
        this.DeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerClientIp = 'PayerClientIp' in params ? params.PayerClientIp : null;
        this.PayerUa = 'PayerUa' in params ? params.PayerUa : null;
        this.OrderTime = 'OrderTime' in params ? params.OrderTime : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * CreatePayMerchant请求参数结构体
 * @class
 */
class CreatePayMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台编号
         * @type {string || null}
         */
        this.PlatformCode = null;

        /**
         * 渠道方收款商户编号，由渠道方(银行)提 供。
         * @type {string || null}
         */
        this.ChannelMerchantNo = null;

        /**
         * 是否需要向渠道进行 商户信息验证 1:验证
0:不验证
         * @type {string || null}
         */
        this.ChannelCheckFlag = null;

        /**
         * 收款商户名称
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 是否开通 B2B 支付 1:开通 0:不开通 缺省:1
         * @type {string || null}
         */
        this.BusinessPayFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PlatformCode = 'PlatformCode' in params ? params.PlatformCode : null;
        this.ChannelMerchantNo = 'ChannelMerchantNo' in params ? params.ChannelMerchantNo : null;
        this.ChannelCheckFlag = 'ChannelCheckFlag' in params ? params.ChannelCheckFlag : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.BusinessPayFlag = 'BusinessPayFlag' in params ? params.BusinessPayFlag : null;

    }
}

/**
 * QueryMaliciousRegistration返回参数结构体
 * @class
 */
class QueryMaliciousRegistrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 商户风险信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {MerchantRiskInfo || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.Result) {
            let obj = new MerchantRiskInfo();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RefundCloudOrder返回参数结构体
 * @class
 */
class RefundCloudOrderResponse extends  AbstractModel {
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
0 : 高灯
1 : 票易通
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
 * CreatePayRollPreOrder返回参数结构体
 * @class
 */
class CreatePayRollPreOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一
         * @type {string || null}
         */
        this.AuthNumber = null;

        /**
         * Token有效时间，单位秒
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 微信服务商商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

        /**
         * Token值
         * @type {string || null}
         */
        this.Token = null;

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
        this.AuthNumber = 'AuthNumber' in params ? params.AuthNumber : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 创建渠道商户返回结果
 * @class
 */
class CreateOpenBankMerchantResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户ID。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;

    }
}

/**
 * DistributeQueryReceiver请求参数结构体
 * @class
 */
class DistributeQueryReceiverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryOpenBankUnbindExternalSubMerchantBankAccount返回参数结构体
 * @class
 */
class QueryOpenBankUnbindExternalSubMerchantBankAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankUnbindExternalSubMerchantBankAccountResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankUnbindExternalSubMerchantBankAccountResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryOpenBankDownLoadUrl请求参数结构体
 * @class
 */
class QueryOpenBankDownLoadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户号，外部接入平台方入驻云企付平台后下发。
EBANK_PAYMENT支付方式下，填写渠道商户号；
SAFT_ISV支付方式下，填写渠道子商户号。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 账单日期,yyyy-MM-dd。
         * @type {string || null}
         */
        this.BillDate = null;

        /**
         * 账单类型，默认交易账单。
         * @type {string || null}
         */
        this.BillType = null;

        /**
         * 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境。
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * 渠道名称。不填默认为商企付。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式。不填默认为ebank支付。
__EBANK_PAYMENT__: ebank支付
__OPENBANK_PAYMENT__: openbank支付
__SAFT_ISV__: 人资ISV支付
         * @type {string || null}
         */
        this.PaymentMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.BillDate = 'BillDate' in params ? params.BillDate : null;
        this.BillType = 'BillType' in params ? params.BillType : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;

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
 * QuerySinglePay请求参数结构体
 * @class
 */
class QuerySinglePayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务流水号
         * @type {string || null}
         */
        this.SerialNumber = null;

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
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * 商户明细响应对象
 * @class
 */
class ViewMerchantResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 税务登记证图片【私密区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaxCollectionPicture = null;

        /**
         * 法人证件号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossIdNo = null;

        /**
         * 法人亲属证件号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountIdNo = null;

        /**
         * 其他资料3
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OtherPictureThree = null;

        /**
         * 法人亲属证件类型（1居民身份证,2临时居民身份证,3居民户口簿,4护照,5港澳居民来往内地通行证,6回乡证,7军人证,8武警身份证,9其他法定文件）结算账户人身份为法人亲属时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountIdType = null;

        /**
         * 商户状态（0未审核，1已审核，2审核未通过，3待审核，4已删除，5初审通过）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 营业执照图片【私密区】（系统返回的图片路径）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessLicensePicture = null;

        /**
         * 品牌名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 法人身份证正面【私密区】（系统返回的图片路径）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossPositive = null;

        /**
         * 开通应用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppCount = null;

        /**
         * 法人身份证背面【私密区】（系统返回的图片路径）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossBack = null;

        /**
         * 组织机构代码证图片【私密区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationCodePicture = null;

        /**
         * 营业执照过期时间（yyyy-mm-dd）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessLicenseEndDate = null;

        /**
         * 组织机构代码证号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationCodeNo = null;

        /**
         * 机构编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentNo = null;

        /**
         * 省份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 法人证件生效时间（yyyy-mm-dd）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossStartDate = null;

        /**
         * 更新时间（yyyy-mm-dd hh:ii:ss）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 清算联行号，开户行行号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankNo = null;

        /**
         * 税务登记证生效时间（yyyy-mm-dd）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaxCollectionStartDate = null;

        /**
         * 营业执照生效时间（yyyy-mm-dd）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessLicenseStartDate = null;

        /**
         * 客户经理用户编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountManagerId = null;

        /**
         * 分类编号(多个以小写逗号分开)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClassificationIds = null;

        /**
         * 营业执照类型（1三证合一，2非三证合一）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessLicenseType = null;

        /**
         * 法人证件过期时间（yyyy-mm-dd）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossEndDate = null;

        /**
         * 营业执照编号（系统有唯一性校验）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessLicenseNo = null;

        /**
         * 机构名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * 商户简介
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Intro = null;

        /**
         * 法人证件类型（1居民身份证,2临时居民身份证,3居民户口簿,4护照,5港澳居民来往内地通行证,6回乡证,7军人证,8武警身份证,9其他法定文件）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossIdType = null;

        /**
         * 添加时间（yyyy-mm-dd hh:ii:ss）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 门店数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopCount = null;

        /**
         * 结算账户人身份（1法人，2法人亲属），结算帐户为对私时必填
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountBoss = null;

        /**
         * 分类名称(多个以小写逗号分开)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ClassificationNames = null;

        /**
         * 法人电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossTelephone = null;

        /**
         * 客户经理姓名，必须为系统后台的管理员真实姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountManagerName = null;

        /**
         * 终端数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TerminalCount = null;

        /**
         * 审核备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 财务联系人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinancialContact = null;

        /**
         * 商户名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 法人性别（1男，2女）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossSex = null;

        /**
         * 商户编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 法人住址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossAddress = null;

        /**
         * 县/区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 详细地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 法人职业
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossJob = null;

        /**
         * 许可证图片【私密区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LicencePicture = null;

        /**
         * 组织机构代码证过期时间（yyyy-mm-dd）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationCodeEndDate = null;

        /**
         * 营业时间，多个以小写逗号分开(9:00-12:00,13:00-18:00)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenHours = null;

        /**
         * 其他资料2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OtherPictureTwo = null;

        /**
         * 其他资料1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OtherPictureOne = null;

        /**
         * 银行户名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 合同数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractCount = null;

        /**
         * 授权文件【私密区】（当结算帐户身份为法人亲属时必传）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LicencePictureTwo = null;

        /**
         * 银行账号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountNo = null;

        /**
         * 法人邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossEmail = null;

        /**
         * 结算账户类型（2对私，1对公）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 税务登记证过期时间（yyyy-mm-dd）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaxCollectionEndDate = null;

        /**
         * 开户行名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankName = null;

        /**
         * 联系电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Telephone = null;

        /**
         * 外部商户主键编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutMerchantId = null;

        /**
         * 城市编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * 法人证件国别/地区（中国CHN，香港HKG，澳门MAC，台湾CTN）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossIdCount = null;

        /**
         * 商户标记，自定义参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 财务联系人电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FinancialTelephone = null;

        /**
         * 法人姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BossName = null;

        /**
         * 组织机构代码证生效时间（yyyy-mm-dd）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationCodeStartDate = null;

        /**
         * 商户logo【公共区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Logo = null;

        /**
         * 其他资料4
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OtherPictureFour = null;

        /**
         * 税务登记证号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TaxCollectionNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.City = 'City' in params ? params.City : null;
        this.TaxCollectionPicture = 'TaxCollectionPicture' in params ? params.TaxCollectionPicture : null;
        this.BossIdNo = 'BossIdNo' in params ? params.BossIdNo : null;
        this.AccountIdNo = 'AccountIdNo' in params ? params.AccountIdNo : null;
        this.OtherPictureThree = 'OtherPictureThree' in params ? params.OtherPictureThree : null;
        this.AccountIdType = 'AccountIdType' in params ? params.AccountIdType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.BusinessLicensePicture = 'BusinessLicensePicture' in params ? params.BusinessLicensePicture : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.BossPositive = 'BossPositive' in params ? params.BossPositive : null;
        this.AppCount = 'AppCount' in params ? params.AppCount : null;
        this.BossBack = 'BossBack' in params ? params.BossBack : null;
        this.OrganizationCodePicture = 'OrganizationCodePicture' in params ? params.OrganizationCodePicture : null;
        this.BusinessLicenseEndDate = 'BusinessLicenseEndDate' in params ? params.BusinessLicenseEndDate : null;
        this.OrganizationCodeNo = 'OrganizationCodeNo' in params ? params.OrganizationCodeNo : null;
        this.AgentNo = 'AgentNo' in params ? params.AgentNo : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.BossStartDate = 'BossStartDate' in params ? params.BossStartDate : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.BankNo = 'BankNo' in params ? params.BankNo : null;
        this.TaxCollectionStartDate = 'TaxCollectionStartDate' in params ? params.TaxCollectionStartDate : null;
        this.BusinessLicenseStartDate = 'BusinessLicenseStartDate' in params ? params.BusinessLicenseStartDate : null;
        this.AccountManagerId = 'AccountManagerId' in params ? params.AccountManagerId : null;
        this.ClassificationIds = 'ClassificationIds' in params ? params.ClassificationIds : null;
        this.BusinessLicenseType = 'BusinessLicenseType' in params ? params.BusinessLicenseType : null;
        this.BossEndDate = 'BossEndDate' in params ? params.BossEndDate : null;
        this.BusinessLicenseNo = 'BusinessLicenseNo' in params ? params.BusinessLicenseNo : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.Intro = 'Intro' in params ? params.Intro : null;
        this.BossIdType = 'BossIdType' in params ? params.BossIdType : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.ShopCount = 'ShopCount' in params ? params.ShopCount : null;
        this.AccountBoss = 'AccountBoss' in params ? params.AccountBoss : null;
        this.ClassificationNames = 'ClassificationNames' in params ? params.ClassificationNames : null;
        this.BossTelephone = 'BossTelephone' in params ? params.BossTelephone : null;
        this.AccountManagerName = 'AccountManagerName' in params ? params.AccountManagerName : null;
        this.TerminalCount = 'TerminalCount' in params ? params.TerminalCount : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.FinancialContact = 'FinancialContact' in params ? params.FinancialContact : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.BossSex = 'BossSex' in params ? params.BossSex : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.BossAddress = 'BossAddress' in params ? params.BossAddress : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.BossJob = 'BossJob' in params ? params.BossJob : null;
        this.LicencePicture = 'LicencePicture' in params ? params.LicencePicture : null;
        this.OrganizationCodeEndDate = 'OrganizationCodeEndDate' in params ? params.OrganizationCodeEndDate : null;
        this.OpenHours = 'OpenHours' in params ? params.OpenHours : null;
        this.OtherPictureTwo = 'OtherPictureTwo' in params ? params.OtherPictureTwo : null;
        this.OtherPictureOne = 'OtherPictureOne' in params ? params.OtherPictureOne : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.ContractCount = 'ContractCount' in params ? params.ContractCount : null;
        this.LicencePictureTwo = 'LicencePictureTwo' in params ? params.LicencePictureTwo : null;
        this.AccountNo = 'AccountNo' in params ? params.AccountNo : null;
        this.BossEmail = 'BossEmail' in params ? params.BossEmail : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.TaxCollectionEndDate = 'TaxCollectionEndDate' in params ? params.TaxCollectionEndDate : null;
        this.BankName = 'BankName' in params ? params.BankName : null;
        this.Telephone = 'Telephone' in params ? params.Telephone : null;
        this.OutMerchantId = 'OutMerchantId' in params ? params.OutMerchantId : null;
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.BossIdCount = 'BossIdCount' in params ? params.BossIdCount : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.FinancialTelephone = 'FinancialTelephone' in params ? params.FinancialTelephone : null;
        this.BossName = 'BossName' in params ? params.BossName : null;
        this.OrganizationCodeStartDate = 'OrganizationCodeStartDate' in params ? params.OrganizationCodeStartDate : null;
        this.Logo = 'Logo' in params ? params.Logo : null;
        this.OtherPictureFour = 'OtherPictureFour' in params ? params.OtherPictureFour : null;
        this.TaxCollectionNo = 'TaxCollectionNo' in params ? params.TaxCollectionNo : null;

    }
}

/**
 * QueryOpenBankSupportBankList请求参数结构体
 * @class
 */
class QueryOpenBankSupportBankListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户ID。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式。
__EBANK_PAYMENT__:ebank付款
__OPENBANK_PAYMENT__: openbank付款
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 环境类型。
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * ContractOrder请求参数结构体
 * @class
 */
class ContractOrderRequest extends  AbstractModel {
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
         * 签约通知地址
         * @type {string || null}
         */
        this.ContractNotifyUrl = null;

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
         * @type {Array.<ContractOrderInSubOrder> || null}
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

        /**
         * 微信商户应用ID
         * @type {string || null}
         */
        this.WxAppId = null;

        /**
         * 微信商户子应用ID
         * @type {string || null}
         */
        this.WxSubAppId = null;

        /**
         * 支付通知地址
         * @type {string || null}
         */
        this.PaymentNotifyUrl = null;

        /**
         * 传入调用方在Midas注册签约信息时获得的ContractSceneId。若未在Midas注册签约信息，则传入ExternalContractData。注意：ContractSceneId与ExternalContractData必须二选一传入其中一个
         * @type {string || null}
         */
        this.ContractSceneId = null;

        /**
         * 需要按照各个渠道的扩展签约信息规范组装好该字段。若未在Midas注册签约信息，则传入该字段。注意：ContractSceneId与ExternalContractData必须二选一传入其中一个
         * @type {string || null}
         */
        this.ExternalContractData = null;

        /**
         * 外部签约协议号，唯一标记一个签约关系。仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
         * @type {string || null}
         */
        this.OutContractCode = null;

        /**
         * 透传给第三方渠道的附加数据
         * @type {string || null}
         */
        this.AttachData = null;

        /**
         * 展示用的签约用户名称，若不传入时，默认取UserId
         * @type {string || null}
         */
        this.ContractDisplayName = null;

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
        this.ContractNotifyUrl = 'ContractNotifyUrl' in params ? params.ContractNotifyUrl : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

        if (params.SubOrderList) {
            this.SubOrderList = new Array();
            for (let z in params.SubOrderList) {
                let obj = new ContractOrderInSubOrder();
                obj.deserialize(params.SubOrderList[z]);
                this.SubOrderList.push(obj);
            }
        }
        this.TotalMchIncome = 'TotalMchIncome' in params ? params.TotalMchIncome : null;
        this.TotalPlatformIncome = 'TotalPlatformIncome' in params ? params.TotalPlatformIncome : null;
        this.WxOpenId = 'WxOpenId' in params ? params.WxOpenId : null;
        this.WxSubOpenId = 'WxSubOpenId' in params ? params.WxSubOpenId : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;
        this.WxSubAppId = 'WxSubAppId' in params ? params.WxSubAppId : null;
        this.PaymentNotifyUrl = 'PaymentNotifyUrl' in params ? params.PaymentNotifyUrl : null;
        this.ContractSceneId = 'ContractSceneId' in params ? params.ContractSceneId : null;
        this.ExternalContractData = 'ExternalContractData' in params ? params.ExternalContractData : null;
        this.OutContractCode = 'OutContractCode' in params ? params.OutContractCode : null;
        this.AttachData = 'AttachData' in params ? params.AttachData : null;
        this.ContractDisplayName = 'ContractDisplayName' in params ? params.ContractDisplayName : null;

    }
}

/**
 * QueryContractPayFee返回参数结构体
 * @class
 */
class QueryContractPayFeeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码，0表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 查询支付方式费率及自定义表单项响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryContractPayFeeResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new QueryContractPayFeeResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 查询支持的银行列表返回结果
 * @class
 */
class QueryOpenBankSupportBankListResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支持的银行列表
         * @type {Array.<SupportBankInfo> || null}
         */
        this.SupportBankList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SupportBankList) {
            this.SupportBankList = new Array();
            for (let z in params.SupportBankList) {
                let obj = new SupportBankInfo();
                obj.deserialize(params.SupportBankList[z]);
                this.SupportBankList.push(obj);
            }
        }

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
 * QueryTransferDetail返回参数结构体
 * @class
 */
class QueryTransferDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号。
示例值：19300009329
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
         * @type {string || null}
         */
        this.MerchantBatchNo = null;

        /**
         * 微信批次单号。
微信商家转账系统返回的唯一标识。
示例值：1030000071100999991182020050700019480001
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 商家明细单号。
商户系统内部的商家明细单号
示例值：plfk2020042013
         * @type {string || null}
         */
        this.MerchantDetailNo = null;

        /**
         * 微信明细单号。
微信区分明细单返回的唯一标识。
示例值：1030000071100999991182020050700019480001
         * @type {string || null}
         */
        this.DetailId = null;

        /**
         * 明细状态。
PROCESSING：转账中，正在处理，结果未明；
SUCCESS：转账成功；
FAIL：转账失败，需要确认失败原因以后，再决定是否重新发起地该笔明细的转账。
示例值：SUCCESS
         * @type {string || null}
         */
        this.DetailStatus = null;

        /**
         * 转账金额。
单位为分。
示例值：200
         * @type {number || null}
         */
        this.TransferAmount = null;

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
         * @type {string || null}
         */
        this.FailReason = null;

        /**
         * 转账发起时间。
遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InitiateTime = null;

        /**
         * 转账更新时间。
遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 用户名。
示例值：张三
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 转账备注。
单条转账备注（微信用户会收到该备注）。UTF8编码，最多32字符。
示例值：2020年4月报销
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransferRemark = null;

        /**
         * 商家绑定公众号APPID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 用户openId。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenId = null;

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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.MerchantBatchNo = 'MerchantBatchNo' in params ? params.MerchantBatchNo : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.MerchantDetailNo = 'MerchantDetailNo' in params ? params.MerchantDetailNo : null;
        this.DetailId = 'DetailId' in params ? params.DetailId : null;
        this.DetailStatus = 'DetailStatus' in params ? params.DetailStatus : null;
        this.TransferAmount = 'TransferAmount' in params ? params.TransferAmount : null;
        this.FailReason = 'FailReason' in params ? params.FailReason : null;
        this.InitiateTime = 'InitiateTime' in params ? params.InitiateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.TransferRemark = 'TransferRemark' in params ? params.TransferRemark : null;
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryTransferBatch返回参数结构体
 * @class
 */
class QueryTransferBatchResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号。
示例值：19300009329
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
         * @type {string || null}
         */
        this.MerchantBatchNo = null;

        /**
         * 微信批次单号。
微信商家转账系统返回的唯一标识。
示例值：1030000071100999991182020050700019480001
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 直连商户appId。
商户号绑定的appid。
示例值：wxf636efh567hg4356
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 批次状态。
ACCEPTED:已受理，批次已受理成功，若发起批量转账的30分钟后，转账批次单仍处于该状态，可能原因是商户账户余额不足等。商户可查询账户资金流水，若该笔转账批次单的扣款已经发生，则表示批次已经进入转账中，请再次查单确认；
PROCESSING:转账中，已开始处理批次内的转账明细单；
FINISHED:已完成，批次内的所有转账明细单都已处理完成；
CLOSED:已关闭，可查询具体的批次关闭原因确认；
示例值：ACCEPTED
         * @type {string || null}
         */
        this.BatchStatus = null;

        /**
         * 批次关闭原因。
如果批次单状态为“CLOSED”（已关闭），则有关闭原因；
MERCHANT_REVOCATION：商户主动撤销；
OVERDUE_CLOSE：系统超时关闭。
示例值：OVERDUE_CLOSE
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CloseReason = null;

        /**
         * 转账总金额。
转账金额，单位为分。
示例值：4000000
         * @type {number || null}
         */
        this.TotalAmount = null;

        /**
         * 转账总笔数。
一个转账批次最多允许发起三千笔转账。
示例值：200
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 批次受理成功时返回，遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * 批次最近一次更新时间，遵循rfc3339标准格式。格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，YYYY-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.sss表示时分秒毫秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35.120+08:00表示北京时间2015年05月20日13点29分35秒。
示例值：2015-05-20T13:29:35.120+08:00
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 转账成功金额。
转账成功的金额，单位为分，可能随时变化。
示例值：4000000
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessAmount = null;

        /**
         * 转账成功的笔数。
可能随时变化。
示例值：200
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.SuccessNum = null;

        /**
         * 转账失败金额。
转账失败的金额，单位为分，可能随时变化。
示例值：4000000
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailAmount = null;

        /**
         * 转账失败笔数。
可能随时变化。
示例值：200
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.FailNum = null;

        /**
         * 转账明细列表。
返回明细详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<TransferDetailResponse> || null}
         */
        this.TransferDetails = null;

        /**
         * 批次类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchType = null;

        /**
         * 批次名称。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchName = null;

        /**
         * 批次标注。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchRemark = null;

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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.MerchantBatchNo = 'MerchantBatchNo' in params ? params.MerchantBatchNo : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.BatchStatus = 'BatchStatus' in params ? params.BatchStatus : null;
        this.CloseReason = 'CloseReason' in params ? params.CloseReason : null;
        this.TotalAmount = 'TotalAmount' in params ? params.TotalAmount : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.SuccessAmount = 'SuccessAmount' in params ? params.SuccessAmount : null;
        this.SuccessNum = 'SuccessNum' in params ? params.SuccessNum : null;
        this.FailAmount = 'FailAmount' in params ? params.FailAmount : null;
        this.FailNum = 'FailNum' in params ? params.FailNum : null;

        if (params.TransferDetails) {
            this.TransferDetails = new Array();
            for (let z in params.TransferDetails) {
                let obj = new TransferDetailResponse();
                obj.deserialize(params.TransferDetails[z]);
                this.TransferDetails.push(obj);
            }
        }
        this.BatchType = 'BatchType' in params ? params.BatchType : null;
        this.BatchName = 'BatchName' in params ? params.BatchName : null;
        this.BatchRemark = 'BatchRemark' in params ? params.BatchRemark : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * QueryContractPayFee请求参数结构体
 * @class
 */
class QueryContractPayFeeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 支付方式编号
         * @type {string || null}
         */
        this.PaymentId = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.PaymentId = 'PaymentId' in params ? params.PaymentId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * CreateOpenBankExternalSubMerchantRegistration返回参数结构体
 * @class
 */
class CreateOpenBankExternalSubMerchantRegistrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateOpenBankExternalSubMerchantRegistrationResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new CreateOpenBankExternalSubMerchantRegistrationResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 订单退款响应对象
 * @class
 */
class RefundOrderResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付款订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 开发者流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeveloperNo = null;

        /**
         * 交易优惠金额（免充值券）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeDiscountAmount = null;

        /**
         * 付款方式名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * 商户流水号（从1开始自增长不重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderMerchantId = null;

        /**
         * 实际交易金额（以分为单位，没有小数点）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeAmount = null;

        /**
         * 币种签名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurrencySign = null;

        /**
         * 付款完成时间（以收单机构为准）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradePayTime = null;

        /**
         * 门店流水号（从1开始自增长不重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopOrderId = null;

        /**
         * 支付标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayTag = null;

        /**
         * 订单状态（1交易成功，2待支付，4已取消，9等待用户输入密码确认
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 币种代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderCurrency = null;

        /**
         * 开始交易时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeTime = null;

        /**
         * 折扣金额（以分为单位，没有小数点）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiscountAmount = null;

        /**
         * 原始订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalOrderNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.DeveloperNo = 'DeveloperNo' in params ? params.DeveloperNo : null;
        this.TradeDiscountAmount = 'TradeDiscountAmount' in params ? params.TradeDiscountAmount : null;
        this.PayName = 'PayName' in params ? params.PayName : null;
        this.OrderMerchantId = 'OrderMerchantId' in params ? params.OrderMerchantId : null;
        this.TradeAmount = 'TradeAmount' in params ? params.TradeAmount : null;
        this.CurrencySign = 'CurrencySign' in params ? params.CurrencySign : null;
        this.TradePayTime = 'TradePayTime' in params ? params.TradePayTime : null;
        this.ShopOrderId = 'ShopOrderId' in params ? params.ShopOrderId : null;
        this.PayTag = 'PayTag' in params ? params.PayTag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderCurrency = 'OrderCurrency' in params ? params.OrderCurrency : null;
        this.TradeTime = 'TradeTime' in params ? params.TradeTime : null;
        this.DiscountAmount = 'DiscountAmount' in params ? params.DiscountAmount : null;
        this.OriginalOrderNo = 'OriginalOrderNo' in params ? params.OriginalOrderNo : null;

    }
}

/**
 * QueryBatchPaymentResultData复杂类型中的TransferInfoList
 * @class
 */
class QueryBatchPaymentResultDataInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 代理商ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 代理商名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentName = null;

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
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 转账金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransferAmount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.TransferAmount = 'TransferAmount' in params ? params.TransferAmount : null;

    }
}

/**
 * 支付中签约子订单列表
 * @class
 */
class ContractOrderInSubOrder extends  AbstractModel {
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
         * 子订单原始金额
         * @type {number || null}
         */
        this.OriginalAmt = null;

        /**
         * 发货标识，由业务在调用聚鑫下单接口的 时候下发
         * @type {string || null}
         */
        this.Metadata = null;

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
        this.OriginalAmt = 'OriginalAmt' in params ? params.OriginalAmt : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;

    }
}

/**
 * RegisterBehavior请求参数结构体
 * @class
 */
class RegisterBehaviorRequest extends  AbstractModel {
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
         * 功能标志
1：登记行为记录信息
2：查询补录信息
         * @type {number || null}
         */
        this.FunctionFlag = null;

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
         * 操作点击时间
yyyyMMddHHmmss
功能标志FunctionFlag=1时必输
         * @type {string || null}
         */
        this.OperationClickTime = null;

        /**
         * IP地址
功能标志FunctionFlag=1时必输
         * @type {string || null}
         */
        this.IpAddress = null;

        /**
         * MAC地址
功能标志FunctionFlag=1时必输
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 签约渠道
1:  App
2:  平台H5网页
3：公众号
4：小程序
功能标志FunctionFlag=1时必输
         * @type {number || null}
         */
        this.SignChannel = null;

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
        this.FunctionFlag = 'FunctionFlag' in params ? params.FunctionFlag : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.OperationClickTime = 'OperationClickTime' in params ? params.OperationClickTime : null;
        this.IpAddress = 'IpAddress' in params ? params.IpAddress : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.SignChannel = 'SignChannel' in params ? params.SignChannel : null;

    }
}

/**
 * UnifiedCloudOrder返回参数结构体
 * @class
 */
class UnifiedCloudOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师的交易订单号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 开发者的支付订单号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * SDK的支付参数。
支付参数透传给米大师SDK（原文透传给SDK即可，不需要解码）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayInfo = null;

        /**
         * 支付金额，单位：分。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalAmt = null;

        /**
         * 渠道信息，用于拉起渠道支付。j
son字符串，注意此字段仅会在传入正确的PayScene入参时才会有效。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelInfo = null;

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
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.PayInfo = 'PayInfo' in params ? params.PayInfo : null;
        this.TotalAmt = 'TotalAmt' in params ? params.TotalAmt : null;
        this.ChannelInfo = 'ChannelInfo' in params ? params.ChannelInfo : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnbindOpenBankExternalSubMerchantBankAccount返回参数结构体
 * @class
 */
class UnbindOpenBankExternalSubMerchantBankAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UnbindOpenBankExternalSubMerchantBankAccountResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new UnbindOpenBankExternalSubMerchantBankAccountResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 返回订单信息
 * @class
 */
class CloudOrderReturn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师分配的支付主MidasAppId
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 开发者支付订单号
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 调用下单接口传进来的子单列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudSubOrderReturn> || null}
         */
        this.SubOrderList = null;

        /**
         * 调用下单接口获取的米大师交易订单号
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 用户Id
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 支付渠道
wechat:微信支付
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 物品Id
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 发货标识，由开发者在调用下单接口的时候传入
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * ISO货币代码
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 支付金额，单位：分
         * @type {number || null}
         */
        this.Amt = null;

        /**
         * 订单状态
0:初始状态，获取米大师交易订单成功
1:拉起米大师支付页面成功，用户未支付
2:用户支付成功，正在发货
3:用户支付成功，发货失败
4:用户支付成功，发货成功
5:关单中
6:已关单
         * @type {string || null}
         */
        this.OrderState = null;

        /**
         * 下单时间，unix时间戳
         * @type {string || null}
         */
        this.OrderTime = null;

        /**
         * 支付时间，unix时间戳
         * @type {string || null}
         */
        this.PayTime = null;

        /**
         * 支付回调时间，unix时间戳
         * @type {string || null}
         */
        this.CallBackTime = null;

        /**
         * 支付机构订单号
         * @type {string || null}
         */
        this.ChannelExternalOrderId = null;

        /**
         * 米大师内部渠道订单号
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 是否曾退款
         * @type {string || null}
         */
        this.RefundFlag = null;

        /**
         * 用户支付金额
         * @type {string || null}
         */
        this.CashAmt = null;

        /**
         * 抵扣券金额
         * @type {string || null}
         */
        this.CouponAmt = null;

        /**
         * 商品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 结算信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloudSettleInfo || null}
         */
        this.SettleInfo = null;

        /**
         * 附加项信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudAttachmentInfo> || null}
         */
        this.AttachmentInfoList = null;

        /**
         * 渠道方返回的用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudChannelExternalUserInfo> || null}
         */
        this.ChannelExternalUserInfoList = null;

        /**
         * 渠道扩展促销列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudExternalPromptGroup> || null}
         */
        this.ExternalReturnPromptGroupList = null;

        /**
         * 场景扩展信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SceneInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;

        if (params.SubOrderList) {
            this.SubOrderList = new Array();
            for (let z in params.SubOrderList) {
                let obj = new CloudSubOrderReturn();
                obj.deserialize(params.SubOrderList[z]);
                this.SubOrderList.push(obj);
            }
        }
        this.TransactionId = 'TransactionId' in params ? params.TransactionId : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.OrderState = 'OrderState' in params ? params.OrderState : null;
        this.OrderTime = 'OrderTime' in params ? params.OrderTime : null;
        this.PayTime = 'PayTime' in params ? params.PayTime : null;
        this.CallBackTime = 'CallBackTime' in params ? params.CallBackTime : null;
        this.ChannelExternalOrderId = 'ChannelExternalOrderId' in params ? params.ChannelExternalOrderId : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.RefundFlag = 'RefundFlag' in params ? params.RefundFlag : null;
        this.CashAmt = 'CashAmt' in params ? params.CashAmt : null;
        this.CouponAmt = 'CouponAmt' in params ? params.CouponAmt : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;

        if (params.SettleInfo) {
            let obj = new CloudSettleInfo();
            obj.deserialize(params.SettleInfo)
            this.SettleInfo = obj;
        }

        if (params.AttachmentInfoList) {
            this.AttachmentInfoList = new Array();
            for (let z in params.AttachmentInfoList) {
                let obj = new CloudAttachmentInfo();
                obj.deserialize(params.AttachmentInfoList[z]);
                this.AttachmentInfoList.push(obj);
            }
        }

        if (params.ChannelExternalUserInfoList) {
            this.ChannelExternalUserInfoList = new Array();
            for (let z in params.ChannelExternalUserInfoList) {
                let obj = new CloudChannelExternalUserInfo();
                obj.deserialize(params.ChannelExternalUserInfoList[z]);
                this.ChannelExternalUserInfoList.push(obj);
            }
        }

        if (params.ExternalReturnPromptGroupList) {
            this.ExternalReturnPromptGroupList = new Array();
            for (let z in params.ExternalReturnPromptGroupList) {
                let obj = new CloudExternalPromptGroup();
                obj.deserialize(params.ExternalReturnPromptGroupList[z]);
                this.ExternalReturnPromptGroupList.push(obj);
            }
        }
        this.SceneInfo = 'SceneInfo' in params ? params.SceneInfo : null;

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
 * 子商户银行卡绑定结果查询返回结果
 * @class
 */
class QueryOpenBankBindExternalSubMerchantBankAccountResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道子商户收款方银行卡信息, 为JSON格式字符串（绑定成功状态下返回）。详情见附录-复杂类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalSubMerchantBankAccountReturnData = null;

        /**
         * 渠道申请编号。
         * @type {string || null}
         */
        this.ChannelApplyId = null;

        /**
         * 绑定状态。
__SUCCESS__: 绑定成功
__FAILED__: 绑定失败
__PROCESSING__: 绑定中
         * @type {string || null}
         */
        this.BindStatus = null;

        /**
         * 绑定返回描述, 例如失败原因等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BindMessage = null;

        /**
         * 绑卡序列号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BindSerialNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExternalSubMerchantBankAccountReturnData = 'ExternalSubMerchantBankAccountReturnData' in params ? params.ExternalSubMerchantBankAccountReturnData : null;
        this.ChannelApplyId = 'ChannelApplyId' in params ? params.ChannelApplyId : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.BindMessage = 'BindMessage' in params ? params.BindMessage : null;
        this.BindSerialNo = 'BindSerialNo' in params ? params.BindSerialNo : null;

    }
}

/**
 * 超额信息结果
 * @class
 */
class QueryExceedingInfoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 记录总数。
         * @type {number || null}
         */
        this.Count = null;

        /**
         * 超额信息数据。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QueryExceedingInfoData> || null}
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
        this.Count = 'Count' in params ? params.Count : null;

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new QueryExceedingInfoData();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }

    }
}

/**
 * QueryMerchantPayWayList请求参数结构体
 * @class
 */
class QueryMerchantPayWayListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 支付类型，逗号分隔。1-现金，2-主扫，3-被扫，4-JSAPI。
         * @type {string || null}
         */
        this.PayType = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.PayType = 'PayType' in params ? params.PayType : null;
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
 * AddMerchant请求参数结构体
 * @class
 */
class AddMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 机构商户主键（系统有唯一性校验），建议使用商户表的主键ID，防止重复添加商户
         * @type {string || null}
         */
        this.OutMerchantId = null;

        /**
         * 商户名称，小微商户命名要符合“”商户_名字” （例如：商户_张三）
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 营业执照类型（1三证合一，2非三证合一）
         * @type {string || null}
         */
        this.BusinessLicenseType = null;

        /**
         * 营业执照编号（系统有唯一性校验），（小微商户不效验，随意传要有值，公司/个体户必传）
         * @type {string || null}
         */
        this.BusinessLicenseNo = null;

        /**
         * 营业执照图片【私密区】（系统返回的图片路径），（小微商户不效验，随意传要有值，公司/个体户必传）
         * @type {string || null}
         */
        this.BusinessLicensePicture = null;

        /**
         * 营业执照生效时间（yyyy-mm-dd），（小微商户不效验，随意传要有值，公司/个体户必传）
         * @type {string || null}
         */
        this.BusinessLicenseStartDate = null;

        /**
         * 营业执照过期时间（yyyy-mm-dd），（小微商户不效验，随意传要有值，公司/个体户必传）
         * @type {string || null}
         */
        this.BusinessLicenseEndDate = null;

        /**
         * 行业分类编号列表（第一个分类编号为主分类，后面的为二级分类）
         * @type {Array.<string> || null}
         */
        this.ClassificationIds = null;

        /**
         * 招牌名称
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 联系电话
         * @type {string || null}
         */
        this.Telephone = null;

        /**
         * 城市编号
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * 详细地址，不含省市区县名称，长度需要大于5。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 营业时间，多个以小写逗号分开(9:00-12:00,13:00-18:00)
         * @type {string || null}
         */
        this.OpenHours = null;

        /**
         * 结算账户类型（2对私，1对公）
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 清算联行号，开户行行号
         * @type {string || null}
         */
        this.BankNo = null;

        /**
         * 开户行名称
         * @type {string || null}
         */
        this.BankName = null;

        /**
         * 银行账号
         * @type {string || null}
         */
        this.AccountNo = null;

        /**
         * 银行户名
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 法人证件类型（1居民身份证,2临时居民身份证,3居民户口簿,4护照,5港澳居民来往内地通行证,6回乡证,7军人证,8武警身份证,9其他法定文件）
         * @type {string || null}
         */
        this.BossIdType = null;

        /**
         * 法人证件号码
         * @type {string || null}
         */
        this.BossIdNo = null;

        /**
         * 法人姓名
         * @type {string || null}
         */
        this.BossName = null;

        /**
         * 法人性别（1男，2女）
         * @type {string || null}
         */
        this.BossSex = null;

        /**
         * 法人证件国别/地区（中国CHN，香港HKG，澳门MAC，台湾CTN）
         * @type {string || null}
         */
        this.BossIdCountry = null;

        /**
         * 法人身份证正面【私密区】（系统返回的图片路径）
         * @type {string || null}
         */
        this.BossPositive = null;

        /**
         * 法人身份证背面【私密区】（系统返回的图片路径）
         * @type {string || null}
         */
        this.BossBack = null;

        /**
         * 法人证件生效时间（yyyy-mm-dd）
         * @type {string || null}
         */
        this.BossStartDate = null;

        /**
         * 法人证件过期时间（yyyy-mm-dd）
         * @type {string || null}
         */
        this.BossEndDate = null;

        /**
         * 许可证图片【私密区】，（小微商户不效验，随意传要有值，公司/个体户必传）
         * @type {string || null}
         */
        this.LicencePicture = null;

        /**
         * 商户类型：1-个体，2-小微，3-企业。不传默认为2-小微商户。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 组织机构代码证号
         * @type {string || null}
         */
        this.OrganizationNo = null;

        /**
         * 组织机构代码证生效时间（yyyy-mm-dd）
         * @type {string || null}
         */
        this.OrganizationStartDate = null;

        /**
         * 组织机构代码证图片【私密区】
         * @type {string || null}
         */
        this.OrganizationPicture = null;

        /**
         * 组织机构代码证过期时间（yyyy-mm-dd）
         * @type {string || null}
         */
        this.OrganizationEndDate = null;

        /**
         * 商户简介
         * @type {string || null}
         */
        this.Intro = null;

        /**
         * 商户logo【公共区】
         * @type {string || null}
         */
        this.Logo = null;

        /**
         * 商户标记，自定义参数
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 财务联系人电话
         * @type {string || null}
         */
        this.FinancialTelephone = null;

        /**
         * 财务联系人
         * @type {string || null}
         */
        this.FinancialContact = null;

        /**
         * 税务登记证号
         * @type {string || null}
         */
        this.TaxRegistrationNo = null;

        /**
         * 税务登记证图片【私密区】
         * @type {string || null}
         */
        this.TaxRegistrationPicture = null;

        /**
         * 税务登记证生效时间（yyyy-mm-dd）
         * @type {string || null}
         */
        this.TaxRegistrationStartDate = null;

        /**
         * 税务登记证过期时间（yyyy-mm-dd）
         * @type {string || null}
         */
        this.TaxRegistrationEndDate = null;

        /**
         * 结算账户人身份（1法人，2法人亲属），结算帐户为对私时必填
         * @type {string || null}
         */
        this.AccountBoss = null;

        /**
         * 客户经理姓名，必须为系统后台的管理员真实姓名
         * @type {string || null}
         */
        this.AccountManagerName = null;

        /**
         * 法人电话
         * @type {string || null}
         */
        this.BossTelephone = null;

        /**
         * 法人职业
         * @type {string || null}
         */
        this.BossJob = null;

        /**
         * 法人邮箱
         * @type {string || null}
         */
        this.BossEmail = null;

        /**
         * 法人住址
         * @type {string || null}
         */
        this.BossAddress = null;

        /**
         * 法人亲属证件类型（1居民身份证,2临时居民身份证,3居民户口簿,4护照,5港澳居民来往内地通行证,6回乡证,7军人证,8武警身份证,9其他法定文件）结算账户人身份为法人亲属时必填
         * @type {string || null}
         */
        this.AccountIdType = null;

        /**
         * 法人亲属证件号码
         * @type {string || null}
         */
        this.AccountIdNo = null;

        /**
         * 授权文件【私密区】
         * @type {string || null}
         */
        this.LicencePictureTwo = null;

        /**
         * 其他资料1
         * @type {string || null}
         */
        this.OtherPictureOne = null;

        /**
         * 其他资料2
         * @type {string || null}
         */
        this.OtherPictureTwo = null;

        /**
         * 其他资料3
         * @type {string || null}
         */
        this.OtherPictureThree = null;

        /**
         * 其他资料4
         * @type {string || null}
         */
        this.OtherPictureFour = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.OutMerchantId = 'OutMerchantId' in params ? params.OutMerchantId : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.BusinessLicenseType = 'BusinessLicenseType' in params ? params.BusinessLicenseType : null;
        this.BusinessLicenseNo = 'BusinessLicenseNo' in params ? params.BusinessLicenseNo : null;
        this.BusinessLicensePicture = 'BusinessLicensePicture' in params ? params.BusinessLicensePicture : null;
        this.BusinessLicenseStartDate = 'BusinessLicenseStartDate' in params ? params.BusinessLicenseStartDate : null;
        this.BusinessLicenseEndDate = 'BusinessLicenseEndDate' in params ? params.BusinessLicenseEndDate : null;
        this.ClassificationIds = 'ClassificationIds' in params ? params.ClassificationIds : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.Telephone = 'Telephone' in params ? params.Telephone : null;
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.OpenHours = 'OpenHours' in params ? params.OpenHours : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.BankNo = 'BankNo' in params ? params.BankNo : null;
        this.BankName = 'BankName' in params ? params.BankName : null;
        this.AccountNo = 'AccountNo' in params ? params.AccountNo : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.BossIdType = 'BossIdType' in params ? params.BossIdType : null;
        this.BossIdNo = 'BossIdNo' in params ? params.BossIdNo : null;
        this.BossName = 'BossName' in params ? params.BossName : null;
        this.BossSex = 'BossSex' in params ? params.BossSex : null;
        this.BossIdCountry = 'BossIdCountry' in params ? params.BossIdCountry : null;
        this.BossPositive = 'BossPositive' in params ? params.BossPositive : null;
        this.BossBack = 'BossBack' in params ? params.BossBack : null;
        this.BossStartDate = 'BossStartDate' in params ? params.BossStartDate : null;
        this.BossEndDate = 'BossEndDate' in params ? params.BossEndDate : null;
        this.LicencePicture = 'LicencePicture' in params ? params.LicencePicture : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OrganizationNo = 'OrganizationNo' in params ? params.OrganizationNo : null;
        this.OrganizationStartDate = 'OrganizationStartDate' in params ? params.OrganizationStartDate : null;
        this.OrganizationPicture = 'OrganizationPicture' in params ? params.OrganizationPicture : null;
        this.OrganizationEndDate = 'OrganizationEndDate' in params ? params.OrganizationEndDate : null;
        this.Intro = 'Intro' in params ? params.Intro : null;
        this.Logo = 'Logo' in params ? params.Logo : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.FinancialTelephone = 'FinancialTelephone' in params ? params.FinancialTelephone : null;
        this.FinancialContact = 'FinancialContact' in params ? params.FinancialContact : null;
        this.TaxRegistrationNo = 'TaxRegistrationNo' in params ? params.TaxRegistrationNo : null;
        this.TaxRegistrationPicture = 'TaxRegistrationPicture' in params ? params.TaxRegistrationPicture : null;
        this.TaxRegistrationStartDate = 'TaxRegistrationStartDate' in params ? params.TaxRegistrationStartDate : null;
        this.TaxRegistrationEndDate = 'TaxRegistrationEndDate' in params ? params.TaxRegistrationEndDate : null;
        this.AccountBoss = 'AccountBoss' in params ? params.AccountBoss : null;
        this.AccountManagerName = 'AccountManagerName' in params ? params.AccountManagerName : null;
        this.BossTelephone = 'BossTelephone' in params ? params.BossTelephone : null;
        this.BossJob = 'BossJob' in params ? params.BossJob : null;
        this.BossEmail = 'BossEmail' in params ? params.BossEmail : null;
        this.BossAddress = 'BossAddress' in params ? params.BossAddress : null;
        this.AccountIdType = 'AccountIdType' in params ? params.AccountIdType : null;
        this.AccountIdNo = 'AccountIdNo' in params ? params.AccountIdNo : null;
        this.LicencePictureTwo = 'LicencePictureTwo' in params ? params.LicencePictureTwo : null;
        this.OtherPictureOne = 'OtherPictureOne' in params ? params.OtherPictureOne : null;
        this.OtherPictureTwo = 'OtherPictureTwo' in params ? params.OtherPictureTwo : null;
        this.OtherPictureThree = 'OtherPictureThree' in params ? params.OtherPictureThree : null;
        this.OtherPictureFour = 'OtherPictureFour' in params ? params.OtherPictureFour : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 红票结果V2
 * @class
 */
class CreateRedInvoiceResultV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 红票ID
         * @type {string || null}
         */
        this.InvoiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvoiceId = 'InvoiceId' in params ? params.InvoiceId : null;

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
 * CreateOpenBankPaymentOrder请求参数结构体
 * @class
 */
class CreateOpenBankPaymentOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云企付渠道商户号。外部接入平台入驻云企付平台后下发。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
__WECHAT__: 微信支付
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 付款方式。如
__EBANK_PAYMENT__:B2B EBank付款
__OPENBANK_PAYMENT__:B2C  openbank付款
__SAFT_ISV__:支付宝安心发
__TRANS_TO_CHANGE__: 微信支付转账到零钱v2
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 付款模式。默认直接支付，如
__DIRECT__:直接支付
__FREEZE__:担保支付
         * @type {string || null}
         */
        this.PaymentMode = null;

        /**
         * 外部订单号,只能是数字、大小写字母，且在同一个接入平台下唯一，限定长度40位。
         * @type {string || null}
         */
        this.OutOrderId = null;

        /**
         * 付款金额，单位分。
         * @type {number || null}
         */
        this.TotalAmount = null;

        /**
         * 固定值CNY。
         * @type {string || null}
         */
        this.Currency = null;

        /**
         * 付款方信息。
         * @type {OpenBankPayerInfo || null}
         */
        this.PayerInfo = null;

        /**
         * 收款方信息。
         * @type {OpenBankPayeeInfo || null}
         */
        this.PayeeInfo = null;

        /**
         * 通知地址，如www.test.com。
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 订单过期时间，yyyy-MM-dd HH:mm:ss格式。
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 前端成功回调URL。条件可选。
         * @type {string || null}
         */
        this.FrontUrl = null;

        /**
         * 前端刷新 URL。条件可选。
         * @type {string || null}
         */
        this.RefreshUrl = null;

        /**
         * 设备信息，条件可选。
         * @type {OpenBankSceneInfo || null}
         */
        this.SceneInfo = null;

        /**
         * 商品信息，条件可选。
         * @type {OpenBankGoodsInfo || null}
         */
        this.GoodsInfo = null;

        /**
         * 附加信息，查询时原样返回。
         * @type {string || null}
         */
        this.Attachment = null;

        /**
         * 若不上传，即使用默认值无需分润
__NO_NEED_SHARE__：无需分润；
__SHARE_BY_INFO__：分润时指定金额，此时如果分润信息 ProfitShareInfo为空，只冻结，不分账给其他商户；需要调用解冻接口。
__SHARE_BY_API__：后续调用分润接口决定分润金额
         * @type {string || null}
         */
        this.ProfitShareFlag = null;

        /**
         * 分润信息，配合ProfitShareFlag使用。
         * @type {Array.<OpenBankProfitShareInfo> || null}
         */
        this.ProfitShareInfoList = null;

        /**
         * 备注信息。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 环境类型
__release__:生产环境
__sandbox__:沙箱环境
缺省默认为生产环境
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.PaymentMode = 'PaymentMode' in params ? params.PaymentMode : null;
        this.OutOrderId = 'OutOrderId' in params ? params.OutOrderId : null;
        this.TotalAmount = 'TotalAmount' in params ? params.TotalAmount : null;
        this.Currency = 'Currency' in params ? params.Currency : null;

        if (params.PayerInfo) {
            let obj = new OpenBankPayerInfo();
            obj.deserialize(params.PayerInfo)
            this.PayerInfo = obj;
        }

        if (params.PayeeInfo) {
            let obj = new OpenBankPayeeInfo();
            obj.deserialize(params.PayeeInfo)
            this.PayeeInfo = obj;
        }
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.FrontUrl = 'FrontUrl' in params ? params.FrontUrl : null;
        this.RefreshUrl = 'RefreshUrl' in params ? params.RefreshUrl : null;

        if (params.SceneInfo) {
            let obj = new OpenBankSceneInfo();
            obj.deserialize(params.SceneInfo)
            this.SceneInfo = obj;
        }

        if (params.GoodsInfo) {
            let obj = new OpenBankGoodsInfo();
            obj.deserialize(params.GoodsInfo)
            this.GoodsInfo = obj;
        }
        this.Attachment = 'Attachment' in params ? params.Attachment : null;
        this.ProfitShareFlag = 'ProfitShareFlag' in params ? params.ProfitShareFlag : null;

        if (params.ProfitShareInfoList) {
            this.ProfitShareInfoList = new Array();
            for (let z in params.ProfitShareInfoList) {
                let obj = new OpenBankProfitShareInfo();
                obj.deserialize(params.ProfitShareInfoList[z]);
                this.ProfitShareInfoList.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * 单笔交易回单申请结果查询
 * @class
 */
class QueryOpenBankOrderDetailReceiptInfoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道回单申请ID
         * @type {string || null}
         */
        this.ChannelApplyId = null;

        /**
         * 申请状态。
SUCCESS：申请成功；
FAILED：申请失败；
PROCESSING：申请中。
注意：若返回申请中，需要再次调用回单申请结果查询接口，查询结果。
         * @type {string || null}
         */
        this.ReceiptStatus = null;

        /**
         * 申请返回描述，例如失败原因等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReceiptMessage = null;

        /**
         * 回单下载链接，申请成功时返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 过期时间，yyyy-MM-dd HH:mm:ss格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelApplyId = 'ChannelApplyId' in params ? params.ChannelApplyId : null;
        this.ReceiptStatus = 'ReceiptStatus' in params ? params.ReceiptStatus : null;
        this.ReceiptMessage = 'ReceiptMessage' in params ? params.ReceiptMessage : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

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
 * 第三方子商户银行卡列表查询返回数据
 * @class
 */
class QueryOpenBankExternalSubMerchantBankAccountData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开户银行。
         * @type {string || null}
         */
        this.AccountBank = null;

        /**
         * 绑卡序列号。
         * @type {string || null}
         */
        this.BindSerialNo = null;

        /**
         * 账号类型。
__COLLECT_MONEY__: 收款卡
__PAYMENT__: 付款卡
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 支行号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankBranchId = null;

        /**
         * 银行卡卡后四位。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AccountNumberLastFour = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountBank = 'AccountBank' in params ? params.AccountBank : null;
        this.BindSerialNo = 'BindSerialNo' in params ? params.BindSerialNo : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.BankBranchId = 'BankBranchId' in params ? params.BankBranchId : null;
        this.AccountNumberLastFour = 'AccountNumberLastFour' in params ? params.AccountNumberLastFour : null;

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
 * CreateOpenBankExternalSubMerchantRegistration请求参数结构体
 * @class
 */
class CreateOpenBankExternalSubMerchantRegistrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部进件序列号。
         * @type {string || null}
         */
        this.OutRegistrationNo = null;

        /**
         * 渠道商户ID。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 外部子商户ID,平台侧商户唯一ID。
         * @type {string || null}
         */
        this.OutSubMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式。
__EBANK_PAYMENT__: ebank支付
__OPENBANK_PAYMENT__: openbank支付
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 社会信用代码。
         * @type {string || null}
         */
        this.BusinessLicenseNumber = null;

        /**
         * 外部子商户名称。
         * @type {string || null}
         */
        this.OutSubMerchantName = null;

        /**
         * 法人姓名。
         * @type {string || null}
         */
        this.LegalName = null;

        /**
         * 外部子商户简称。
         * @type {string || null}
         */
        this.OutSubMerchantShortName = null;

        /**
         * 外部子商户描述。
         * @type {string || null}
         */
        this.OutSubMerchantDescription = null;

        /**
         * 第三方子商户进件信息，为JSON格式字符串。详情见附录-复杂类型。
         * @type {string || null}
         */
        this.ExternalSubMerchantRegistrationData = null;

        /**
         * 通知地址。
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 环境类型。
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutRegistrationNo = 'OutRegistrationNo' in params ? params.OutRegistrationNo : null;
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.OutSubMerchantId = 'OutSubMerchantId' in params ? params.OutSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.BusinessLicenseNumber = 'BusinessLicenseNumber' in params ? params.BusinessLicenseNumber : null;
        this.OutSubMerchantName = 'OutSubMerchantName' in params ? params.OutSubMerchantName : null;
        this.LegalName = 'LegalName' in params ? params.LegalName : null;
        this.OutSubMerchantShortName = 'OutSubMerchantShortName' in params ? params.OutSubMerchantShortName : null;
        this.OutSubMerchantDescription = 'OutSubMerchantDescription' in params ? params.OutSubMerchantDescription : null;
        this.ExternalSubMerchantRegistrationData = 'ExternalSubMerchantRegistrationData' in params ? params.ExternalSubMerchantRegistrationData : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * GetDistributeBillDownloadUrl返回参数结构体
 * @class
 */
class GetDistributeBillDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 账单文件下载地址响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BillDownloadUrlResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new BillDownloadUrlResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ViewContract返回参数结构体
 * @class
 */
class ViewContractResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 合同明细响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ViewContractResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new ViewContractResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateOpenBankMerchant请求参数结构体
 * @class
 */
class CreateOpenBankMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部商户ID。
         * @type {string || null}
         */
        this.OutMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 外部商户名称。
         * @type {string || null}
         */
        this.OutMerchantName = null;

        /**
         * 第三方渠道商户信息。详情见附录-复杂类型。
         * @type {string || null}
         */
        this.ExternalMerchantInfo = null;

        /**
         * 外部商户简称。
         * @type {string || null}
         */
        this.OutMerchantShortName = null;

        /**
         * 外部商户描述
         * @type {string || null}
         */
        this.OutMerchantDescription = null;

        /**
         * 环境类型。
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutMerchantId = 'OutMerchantId' in params ? params.OutMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.OutMerchantName = 'OutMerchantName' in params ? params.OutMerchantName : null;
        this.ExternalMerchantInfo = 'ExternalMerchantInfo' in params ? params.ExternalMerchantInfo : null;
        this.OutMerchantShortName = 'OutMerchantShortName' in params ? params.OutMerchantShortName : null;
        this.OutMerchantDescription = 'OutMerchantDescription' in params ? params.OutMerchantDescription : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

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
 * QueryBatchPaymentResult返回参数结构体
 * @class
 */
class QueryBatchPaymentResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回响应
         * @type {QueryBatchPaymentResultData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryBatchPaymentResultData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 附加项信息对象
 * @class
 */
class CloudAttachmentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 附加项金额。
附加项的金额（必须是正数，单位：分），代表积分的数量、抵扣的金额、溢价的金额、补贴的金额
         * @type {number || null}
         */
        this.AttachmentAmount = null;

        /**
         * 附加项类型。
Add：加项；
Sub：减项；
Point：积分项；
Subsidy：补贴项。
         * @type {string || null}
         */
        this.AttachmentType = null;

        /**
         * 附加项名称。
当银行作为收单机构可能会对该字段有要求，请向米大师确认。
         * @type {string || null}
         */
        this.AttachmentName = null;

        /**
         * 附加项编号。
当银行作为收单机构可能会对该字段有要求，请向米大师确认。
         * @type {string || null}
         */
        this.AttachmentCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AttachmentAmount = 'AttachmentAmount' in params ? params.AttachmentAmount : null;
        this.AttachmentType = 'AttachmentType' in params ? params.AttachmentType : null;
        this.AttachmentName = 'AttachmentName' in params ? params.AttachmentName : null;
        this.AttachmentCode = 'AttachmentCode' in params ? params.AttachmentCode : null;

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
 * QueryOpenBankDailyReceiptDownloadUrl请求参数结构体
 * @class
 */
class QueryOpenBankDailyReceiptDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云企付渠道商户号。外部接入平台入驻云企付平台后下发。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 云企付渠道子商户号。入驻在渠道商户下的子商户ID，如付款方的商户ID，对应创建支付订单中接口参数中的PayerInfo中的payerId。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 付款方式。如
__EBANK_PAYMENT__:ebank付款
__OPENBANK_PAYMENT__: openbank付款
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 绑卡序列号，银行卡唯一标记，资金账户ID，用于区分商户绑定多卡或多账户场景
         * @type {string || null}
         */
        this.BindSerialNo = null;

        /**
         * 查询日期，D日查询D-1日的回单文件
         * @type {string || null}
         */
        this.QueryDate = null;

        /**
         * 环境类型
release:生产环境
sandbox:沙箱环境
缺省默认为生产环境
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.BindSerialNo = 'BindSerialNo' in params ? params.BindSerialNo : null;
        this.QueryDate = 'QueryDate' in params ? params.QueryDate : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

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
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
         * @type {string || null}
         */
        this.Contact = null;

        /**
         * 联系人手机号
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
         * @type {string || null}
         */
        this.Mobile = null;

        /**
         * 邮箱 
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
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
个体工商户: individual
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
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
         * @type {string || null}
         */
        this.SubMerchantKey = null;

        /**
         * 子商户私钥
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
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

        /**
         * 店铺名称
企业、个体工商户必输
         * @type {string || null}
         */
        this.SubMerchantStoreName = null;

        /**
         * 公司信息
         * @type {OrganizationInfo || null}
         */
        this.OrganizationInfo = null;

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
        this.SubMerchantStoreName = 'SubMerchantStoreName' in params ? params.SubMerchantStoreName : null;

        if (params.OrganizationInfo) {
            let obj = new OrganizationInfo();
            obj.deserialize(params.OrganizationInfo)
            this.OrganizationInfo = obj;
        }

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
 * QueryReconciliationFileApplyInfo请求参数结构体
 * @class
 */
class QueryReconciliationFileApplyInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请对账文件的任务ID。
         * @type {string || null}
         */
        this.ApplyFileId = null;

        /**
         * 环境名。
__release__: 现网环境
__sandbox__: 沙箱环境
__development__: 开发环境
_缺省: release_
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
        this.ApplyFileId = 'ApplyFileId' in params ? params.ApplyFileId : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * CreatePayRollPreOrderWithAuth请求参数结构体
 * @class
 */
class CreatePayRollPreOrderWithAuthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

        /**
         * 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一
         * @type {string || null}
         */
        this.AuthNumber = null;

        /**
         * 该劳务活动的项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 该工人所属的用工企业
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 用户实名信息，该字段需进行加密处理，加密方法详见[敏感信息加密说明](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/wechatpay/wechatpay4_3.shtml)
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户证件号，该字段需进行加密处理，加密方法详见[敏感信息加密说明](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/wechatpay/wechatpay4_3.shtml)
         * @type {string || null}
         */
        this.IdNo = null;

        /**
         * 微工卡服务仅支持用于与商户有用工关系的用户，需明确用工类型；参考值：
LONG_TERM_EMPLOYMENT：长期用工，
SHORT_TERM_EMPLOYMENT： 短期用工，
COOPERATION_EMPLOYMENT：合作关系
         * @type {string || null}
         */
        this.EmploymentType = null;

        /**
         * 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）
当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatAppId = null;

        /**
         * 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）
当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatSubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;
        this.AuthNumber = 'AuthNumber' in params ? params.AuthNumber : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.IdNo = 'IdNo' in params ? params.IdNo : null;
        this.EmploymentType = 'EmploymentType' in params ? params.EmploymentType : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;
        this.WechatSubAppId = 'WechatSubAppId' in params ? params.WechatSubAppId : null;

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
 * QueryContract请求参数结构体
 * @class
 */
class QueryContractRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户ID，长度不小于5位，仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 指定渠道：  wechat：微信支付  qqwallet：QQ钱包 
 bank：网银支付  只有一个渠道时需要指定
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 枚举值：
CONTRACT_QUERY_MODE_BY_OUT_CONTRACT_CODE：按 OutContractCode + ContractSceneId 查询
CONTRACT_QUERY_MODE_BY_CHANNEL_CONTRACT_CODE：按ChannelContractCode查询
         * @type {string || null}
         */
        this.ContractQueryMode = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 业务签约合同协议号 当 ContractQueryMode=CONTRACT_QUERY_MODE_BY_OUT_CONTRACT_CODE 时 ，必填
         * @type {string || null}
         */
        this.OutContractCode = null;

        /**
         * 签约场景ID，当 ContractQueryMode=CONTRACT_QUERY_MODE_BY_OUT_CONTRACT_CODE 时 必填，在米大师侧托管后生成
         * @type {string || null}
         */
        this.ContractSceneId = null;

        /**
         * 米大师生成的协议号 ，当 ContractQueryMode=CONTRACT_QUERY_MODE_BY_CHANNEL_CONTRACT_CODE 时必填
         * @type {string || null}
         */
        this.ChannelContractCode = null;

        /**
         * 第三方渠道合约数据，为json字符串，与特定渠道有关
         * @type {string || null}
         */
        this.ExternalContractData = null;

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
         * USER_ID: 用户ID
ANONYMOUS: 匿名类型 USER_ID
默认值为 USER_ID
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * 签约代扣穿透查询存量数据迁移模式
         * @type {string || null}
         */
        this.MigrateMode = null;

        /**
         * 签约方式
         * @type {string || null}
         */
        this.ContractMethod = null;

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
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.ContractQueryMode = 'ContractQueryMode' in params ? params.ContractQueryMode : null;
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.OutContractCode = 'OutContractCode' in params ? params.OutContractCode : null;
        this.ContractSceneId = 'ContractSceneId' in params ? params.ContractSceneId : null;
        this.ChannelContractCode = 'ChannelContractCode' in params ? params.ChannelContractCode : null;
        this.ExternalContractData = 'ExternalContractData' in params ? params.ExternalContractData : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.MigrateMode = 'MigrateMode' in params ? params.MigrateMode : null;
        this.ContractMethod = 'ContractMethod' in params ? params.ContractMethod : null;

    }
}

/**
 * CreateOpenBankRechargeOrder返回参数结构体
 * @class
 */
class CreateOpenBankRechargeOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，SUCCESS表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 充值响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateOpenBankOrderRechargeResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new CreateOpenBankOrderRechargeResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryDownloadBillURL请求参数结构体
 * @class
 */
class QueryDownloadBillURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配给商户的AppId。进件成功后返给商户方的AppId。
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 渠道编号。固定值：ZSB2B
         * @type {string || null}
         */
        this.ChannelCode = null;

        /**
         * 对账单日期，格式yyyyMMdd
         * @type {string || null}
         */
        this.BillDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.ChannelCode = 'ChannelCode' in params ? params.ChannelCode : null;
        this.BillDate = 'BillDate' in params ? params.BillDate : null;

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
 * QueryOpenBankOrderDetailReceiptInfo请求参数结构体
 * @class
 */
class QueryOpenBankOrderDetailReceiptInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户ID
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道子商户ID
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道名称，目前只支持ALIPAY
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式，目前只支持SAFT_ISV
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 外部回单申请ID，与渠道回单申请ID二者选填其一
         * @type {string || null}
         */
        this.OutApplyId = null;

        /**
         * 渠道回单申请ID，与外部回单申请ID二者选填其一
         * @type {string || null}
         */
        this.ChannelApplyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.OutApplyId = 'OutApplyId' in params ? params.OutApplyId : null;
        this.ChannelApplyId = 'ChannelApplyId' in params ? params.ChannelApplyId : null;

    }
}

/**
 * QueryOpenBankExternalSubAccountBookBalance返回参数结构体
 * @class
 */
class QueryOpenBankExternalSubAccountBookBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryExternalAccountBookResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryExternalAccountBookResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryOrderStatus请求参数结构体
 * @class
 */
class QueryOrderStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 开发者流水号
         * @type {string || null}
         */
        this.DeveloperNo = null;

        /**
         * 付款订单号
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.DeveloperNo = 'DeveloperNo' in params ? params.DeveloperNo : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * CreateExternalAnchor返回参数结构体
 * @class
 */
class CreateExternalAnchorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回响应
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateExternalAnchorData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new CreateExternalAnchorData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * QueryMerchantOrder请求参数结构体
 * @class
 */
class QueryMerchantOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进件成功后返给商户方的AppId。
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 平台流水号。平台唯一订单号。
         * @type {string || null}
         */
        this.OrderNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;

    }
}

/**
 * DistributeQuery返回参数结构体
 * @class
 */
class DistributeQueryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 分账结果响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DistributeQueryResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new DistributeQueryResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInvoiceV2请求参数结构体
 * @class
 */
class CreateInvoiceV2Request extends  AbstractModel {
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
         * 开票渠道。0：APP渠道，1：线下渠道，2：小程序渠道。不填默认为APP渠道
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
 * UploadExternalAnchorInfo返回参数结构体
 * @class
 */
class UploadExternalAnchorInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 该字段为null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadTaxList返回参数结构体
 * @class
 */
class UploadTaxListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 完税ID
         * @type {string || null}
         */
        this.TaxId = null;

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
        this.TaxId = 'TaxId' in params ? params.TaxId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryReconciliationFileApplyInfo返回参数结构体
 * @class
 */
class QueryReconciliationFileApplyInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryReconciliationFileApplyInfoResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryReconciliationFileApplyInfoResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * 查询会员资金交易信息列表结果
 * @class
 */
class QueryFundsTransactionDetailsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次交易返回查询结果记录数。
         * @type {number || null}
         */
        this.ResultCount = null;

        /**
         * 符合业务查询条件的记录总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 结束标志。
__0__：否
__1__：是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndFlag = null;

        /**
         * 会员资金交易信息数组。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FundsTransactionItem> || null}
         */
        this.TranItemArray = null;

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
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;

        if (params.TranItemArray) {
            this.TranItemArray = new Array();
            for (let z in params.TranItemArray) {
                let obj = new FundsTransactionItem();
                obj.deserialize(params.TranItemArray[z]);
                this.TranItemArray.push(obj);
            }
        }

    }
}

/**
 * QueryCloudOrder返回参数结构体
 * @class
 */
class QueryCloudOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单数量
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 订单列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudOrderReturn> || null}
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
                let obj = new CloudOrderReturn();
                obj.deserialize(params.OrderList[z]);
                this.OrderList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分页参数
 * @class
 */
class Paging extends  AbstractModel {
    constructor(){
        super();

        /**
         * 页码
         * @type {number || null}
         */
        this.Index = null;

        /**
         * 页长
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * CreateOpenBankExternalSubMerchantAccountBook请求参数结构体
 * @class
 */
class CreateOpenBankExternalSubMerchantAccountBookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部账本ID
         * @type {string || null}
         */
        this.OutAccountBookId = null;

        /**
         * 渠道商户ID
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道子商户ID
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道名称。目前只支持支付宝
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式。目前只支持安心发支付
__EBANK_PAYMENT__: ebank支付
__OPENBANK_PAYMENT__: openbank支付
__SAFT_ISV__: 安心发支付
         * @type {string || null}
         */
        this.PaymentMethod = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutAccountBookId = 'OutAccountBookId' in params ? params.OutAccountBookId : null;
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;

    }
}

/**
 * RegisterBehavior返回参数结构体
 * @class
 */
class RegisterBehaviorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 补录是否成功标志
功能标志为2时存在。
S：成功
F：失败
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReplenishSuccessFlag = null;

        /**
         * 签约信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {RegisterInfo || null}
         */
        this.RegisterInfo = null;

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
        this.ReplenishSuccessFlag = 'ReplenishSuccessFlag' in params ? params.ReplenishSuccessFlag : null;

        if (params.RegisterInfo) {
            let obj = new RegisterInfo();
            obj.deserialize(params.RegisterInfo)
            this.RegisterInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPayRollAuthList请求参数结构体
 * @class
 */
class GetPayRollAuthListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

        /**
         * 核身日期，一次只能查询一天，最久可查询90天内的记录，格式为YYYY-MM-DD
         * @type {string || null}
         */
        this.AuthDate = null;

        /**
         * 非负整数，表示该次请求资源的起始位置，从0开始计数
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 非0非负的整数，该次请求可返回的最大资源条数，默认值为10，最大支持10条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）
当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatAppId = null;

        /**
         * 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）
当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatSubAppId = null;

        /**
         * 核身状态，列表查询仅提供成功状态的核身记录查询，故此字段固定AUTHENTICATE_SUCCESS即可
         * @type {string || null}
         */
        this.AuthStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;
        this.AuthDate = 'AuthDate' in params ? params.AuthDate : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;
        this.WechatSubAppId = 'WechatSubAppId' in params ? params.WechatSubAppId : null;
        this.AuthStatus = 'AuthStatus' in params ? params.AuthStatus : null;

    }
}

/**
 * 智能代发-单笔代发转账对账单返回数据
 * @class
 */
class QueryBillDownloadURLData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统一对账单下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BillDownloadURL = null;

        /**
         * 渠道原始对账单下载链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalBillDownloadURL = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BillDownloadURL = 'BillDownloadURL' in params ? params.BillDownloadURL : null;
        this.OriginalBillDownloadURL = 'OriginalBillDownloadURL' in params ? params.OriginalBillDownloadURL : null;

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
 * UnifiedTlinxOrder请求参数结构体
 * @class
 */
class UnifiedTlinxOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 开发者流水号
         * @type {string || null}
         */
        this.DeveloperNo = null;

        /**
         * 支付标签
         * @type {string || null}
         */
        this.PayTag = null;

        /**
         * 实际交易金额（以分为单位，没有小数点）
         * @type {string || null}
         */
        this.TradeAmount = null;

        /**
         * 交易结果异步通知url地址
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 付款方式名称(当PayTag为Diy时，PayName不能为空)
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * 公众号支付时，支付成功后跳转url地址
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 订单名称（描述）
         * @type {string || null}
         */
        this.OrderName = null;

        /**
         * 原始交易金额（以分为单位，没有小数点）
         * @type {string || null}
         */
        this.OriginalAmount = null;

        /**
         * 抹零金额（以分为单位，没有小数点）
         * @type {string || null}
         */
        this.IgnoreAmount = null;

        /**
         * 折扣金额（以分为单位，没有小数点）
         * @type {string || null}
         */
        this.DiscountAmount = null;

        /**
         * 交易帐号（银行卡号）
         * @type {string || null}
         */
        this.TradeAccount = null;

        /**
         * 交易号（收单机构交易号）
         * @type {string || null}
         */
        this.TradeNo = null;

        /**
         * 条码支付的授权码（条码抢扫手机扫到的一串数字）
         * @type {string || null}
         */
        this.AuthCode = null;

        /**
         * 订单标记，订单附加数据。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 订单备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 收单机构原始交易报文，请转换为json
         * @type {string || null}
         */
        this.TradeResult = null;

        /**
         * 0-不分账，1-需分账。为1时标记为待分账订单，待分账订单不会进行清算。不传默认为不分账。
         * @type {string || null}
         */
        this.Royalty = null;

        /**
         * 小程序支付参数：填默认值 1
         * @type {string || null}
         */
        this.Jsapi = null;

        /**
         * 小程序支付参数：
当前调起支付的小程序APPID
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 小程序支付参数:
用户在子商户appid下的唯一标识。
         * @type {string || null}
         */
        this.SubOpenId = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.DeveloperNo = 'DeveloperNo' in params ? params.DeveloperNo : null;
        this.PayTag = 'PayTag' in params ? params.PayTag : null;
        this.TradeAmount = 'TradeAmount' in params ? params.TradeAmount : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.PayName = 'PayName' in params ? params.PayName : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;
        this.OrderName = 'OrderName' in params ? params.OrderName : null;
        this.OriginalAmount = 'OriginalAmount' in params ? params.OriginalAmount : null;
        this.IgnoreAmount = 'IgnoreAmount' in params ? params.IgnoreAmount : null;
        this.DiscountAmount = 'DiscountAmount' in params ? params.DiscountAmount : null;
        this.TradeAccount = 'TradeAccount' in params ? params.TradeAccount : null;
        this.TradeNo = 'TradeNo' in params ? params.TradeNo : null;
        this.AuthCode = 'AuthCode' in params ? params.AuthCode : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TradeResult = 'TradeResult' in params ? params.TradeResult : null;
        this.Royalty = 'Royalty' in params ? params.Royalty : null;
        this.Jsapi = 'Jsapi' in params ? params.Jsapi : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SubOpenId = 'SubOpenId' in params ? params.SubOpenId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * DeduceQuota请求参数结构体
 * @class
 */
class DeduceQuotaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播ID
         * @type {string || null}
         */
        this.AnchorId = null;

        /**
         * 提现金额，单位为"分"
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 外部业务订单号
         * @type {string || null}
         */
        this.OrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;

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
 * 超额信息数据
 * @class
 */
class QueryExceedingInfoData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理商ID。
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 代理商名称。
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * 主播ID。当入参Dimension为ANCHOR或ORDER时，该字段才会有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnchorId = null;

        /**
         * 主播名称。当入参Dimension为ANCHOR或ORDER时，该字段才会有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AnchorName = null;

        /**
         * 订单号。当入参Dimension为ORDER时，该字段才会有值。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 超额类型。目前支持 AGENT_EXCEED_100 和 ANCHOR_EXCEED_100_12 两种类型。
         * @type {string || null}
         */
        this.ExceedingType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.AnchorName = 'AnchorName' in params ? params.AnchorName : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.ExceedingType = 'ExceedingType' in params ? params.ExceedingType : null;

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
 * QueryMemberTransactionDetails请求参数结构体
 * @class
 */
class QueryMemberTransactionDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的交易发生时间类型。
__1__：当日
__2__：历史
         * @type {string || null}
         */
        this.QueryDateType = null;

        /**
         * 查询的交易类型。
__1__：全部
__2__：转出
__3__：转入
         * @type {string || null}
         */
        this.QueryTranType = null;

        /**
         * 父账户账号。
_平安渠道为资金汇总账号_
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 子账户账号。
_平安渠道为见证子账户的账号_
         * @type {string || null}
         */
        this.SubAccountNumber = null;

        /**
         * 分页号, 起始值为1。
         * @type {string || null}
         */
        this.PageOffSet = null;

        /**
         * 查询开始日期，格式：yyyyMMdd。
__若是历史查询，则必输，当日查询时，不起作用；开始日期不能超过当前日期__
         * @type {string || null}
         */
        this.QueryStartDate = null;

        /**
         * 查询终止日期，格式：yyyyMMdd。
__若是历史查询，则必输，当日查询时，不起作用；终止日期不能超过当前日期__
         * @type {string || null}
         */
        this.QueryEndDate = null;

        /**
         * 环境名。
__release__: 现网环境
__sandbox__: 沙箱环境
__development__: 开发环境
_缺省: release_
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
        this.QueryDateType = 'QueryDateType' in params ? params.QueryDateType : null;
        this.QueryTranType = 'QueryTranType' in params ? params.QueryTranType : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.SubAccountNumber = 'SubAccountNumber' in params ? params.SubAccountNumber : null;
        this.PageOffSet = 'PageOffSet' in params ? params.PageOffSet : null;
        this.QueryStartDate = 'QueryStartDate' in params ? params.QueryStartDate : null;
        this.QueryEndDate = 'QueryEndDate' in params ? params.QueryEndDate : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * QueryBatchPaymentResult请求参数结构体
 * @class
 */
class QueryBatchPaymentResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次号
         * @type {string || null}
         */
        this.BatchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

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
 * UploadExternalAnchorInfo请求参数结构体
 * @class
 */
class UploadExternalAnchorInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播Id
         * @type {string || null}
         */
        this.AnchorId = null;

        /**
         * 身份证正面图片下载链接
         * @type {string || null}
         */
        this.IdCardFront = null;

        /**
         * 身份证反面图片下载链接
         * @type {string || null}
         */
        this.IdCardReverse = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.IdCardFront = 'IdCardFront' in params ? params.IdCardFront : null;
        this.IdCardReverse = 'IdCardReverse' in params ? params.IdCardReverse : null;

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
 * 银企直连-单笔支付响应结果
 * @class
 */
class CreateSinglePayResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 受理状态（S：处理成功；F：处理失败）
         * @type {string || null}
         */
        this.HandleStatus = null;

        /**
         * 受理状态描述
         * @type {string || null}
         */
        this.HandleMsg = null;

        /**
         * 业务流水号，历史唯一
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 银行指令流水
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankSerialNo = null;

        /**
         * 付款状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayStatus = null;

        /**
         * 银行原始返回码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankRetCode = null;

        /**
         * 银行原始返回
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankRetMsg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HandleStatus = 'HandleStatus' in params ? params.HandleStatus : null;
        this.HandleMsg = 'HandleMsg' in params ? params.HandleMsg : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.BankSerialNo = 'BankSerialNo' in params ? params.BankSerialNo : null;
        this.PayStatus = 'PayStatus' in params ? params.PayStatus : null;
        this.BankRetCode = 'BankRetCode' in params ? params.BankRetCode : null;
        this.BankRetMsg = 'BankRetMsg' in params ? params.BankRetMsg : null;

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
 * MigrateOrderRefundQuery请求参数结构体
 * @class
 */
class MigrateOrderRefundQueryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 支付渠道，ALIPAY对应支付宝渠道；UNIONPAY对应银联渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 退款订单号，最长64位，仅支持数字、 字母
         * @type {string || null}
         */
        this.RefundOrderId = null;

        /**
         * 退款流水号
         * @type {string || null}
         */
        this.TradeSerialNo = null;

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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.RefundOrderId = 'RefundOrderId' in params ? params.RefundOrderId : null;
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 子订单对象
 * @class
 */
class CloudSubOrder extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子订单号。
长度32个字符供参考，部分渠道存在长度更短的情况接入时请联系开发咨询。
         * @type {string || null}
         */
        this.SubOutTradeNo = null;

        /**
         * 支付子商户ID。
米大师计费SubAppId，代表子商户。
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 商品名称。
业务自定义的子订单商品名称，无需URL编码，长度限制以具体所接入渠道为准。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 商品详情。
业务自定义的子订单商品详情，无需URL编码，长度限制以具体所接入渠道为准。
         * @type {string || null}
         */
        this.ProductDetail = null;

        /**
         * 平台应收。
子订单平台应收金额，单位：分，需要注意的是Amt = PlatformIncome+SubMchIncome。
         * @type {number || null}
         */
        this.PlatformIncome = null;

        /**
         * 商户应收。
子订单结算应收金额，单位：分，需要注意的是Amt = PlatformIncome+SubMchIncome。
         * @type {number || null}
         */
        this.SubMchIncome = null;

        /**
         * 透传字段。
发货标识，由开发者在调用米大师下单接口的 时候下发。
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 支付金额。
子订单支付金额，需要注意的是Amt = PlatformIncome+SubMchIncome。
         * @type {number || null}
         */
        this.Amt = null;

        /**
         * 原始金额。
子订单原始金额，OriginalAmt>=Amt。
         * @type {number || null}
         */
        this.OriginalAmt = null;

        /**
         * 微信子商户号。
         * @type {string || null}
         */
        this.WxSubMchId = null;

        /**
         * 结算信息。
例如是否需要分账、是否需要支付确认等。
         * @type {CloudSettleInfo || null}
         */
        this.SettleInfo = null;

        /**
         * 附加项信息列表。
例如溢价信息、抵扣信息、积分信息、补贴信息
通过该字段可以实现渠道方的优惠抵扣补贴等营销功能。
         * @type {Array.<CloudAttachmentInfo> || null}
         */
        this.AttachmentInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubOutTradeNo = 'SubOutTradeNo' in params ? params.SubOutTradeNo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductDetail = 'ProductDetail' in params ? params.ProductDetail : null;
        this.PlatformIncome = 'PlatformIncome' in params ? params.PlatformIncome : null;
        this.SubMchIncome = 'SubMchIncome' in params ? params.SubMchIncome : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.OriginalAmt = 'OriginalAmt' in params ? params.OriginalAmt : null;
        this.WxSubMchId = 'WxSubMchId' in params ? params.WxSubMchId : null;

        if (params.SettleInfo) {
            let obj = new CloudSettleInfo();
            obj.deserialize(params.SettleInfo)
            this.SettleInfo = obj;
        }

        if (params.AttachmentInfoList) {
            this.AttachmentInfoList = new Array();
            for (let z in params.AttachmentInfoList) {
                let obj = new CloudAttachmentInfo();
                obj.deserialize(params.AttachmentInfoList[z]);
                this.AttachmentInfoList.push(obj);
            }
        }

    }
}

/**
 * 主播扩展信息
 * @class
 */
class AnchorExtendInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 扩展信息类型
__id_card_no__:身份证号码
__id_card_name__:身份证姓名
__id_card_front__:身份证图片正面
__id_card_back__:身份证图片反面
__tax_type__:完税类型:0-自然人,1-个体工商户
__channel_account__:渠道账号(_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 扩展信息
         * @type {string || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * QueryOpenBankExternalSubMerchantRegistration返回参数结构体
 * @class
 */
class QueryOpenBankExternalSubMerchantRegistrationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankExternalSubMerchantRegistrationResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankExternalSubMerchantRegistrationResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetBillDownloadUrl请求参数结构体
 * @class
 */
class GetBillDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 清算日期（YYYYMMDD，今天传昨天的日期，每日下午1点后出前一日的账单）
         * @type {string || null}
         */
        this.Day = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Day = 'Day' in params ? params.Day : null;

    }
}

/**
 * CreatePayMerchant返回参数结构体
 * @class
 */
class CreatePayMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配给商户的 AppId。该 AppId 为后续各项 交易的商户标识。
         * @type {string || null}
         */
        this.MerchantAppId = null;

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
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * GetDistributeBillDownloadUrl请求参数结构体
 * @class
 */
class GetDistributeBillDownloadUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 分账日期（YYYYMMDD，今天传昨天的日期）
         * @type {string || null}
         */
        this.Day = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Day = 'Day' in params ? params.Day : null;

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
 * SyncContractData请求参数结构体
 * @class
 */
class SyncContractDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 聚鑫分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户ID，长度不小于5位，仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 签约使用的渠道
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 业务签约合同协议号
         * @type {string || null}
         */
        this.OutContractCode = null;

        /**
         * 签约状态，枚举值
CONTRACT_STATUS_INVALID=无效状态
CONTRACT_STATUS_SIGNED=已签约
CONTRACT_STATUS_TERMINATED=已解约
CONTRACT_STATUS_PENDING=签约进行中
         * @type {string || null}
         */
        this.ContractStatus = null;

        /**
         * 签约同步信息
         * @type {ContractSyncInfo || null}
         */
        this.ContractSyncInfo = null;

        /**
         * 按照聚鑫安全密钥计算的签名
         * @type {string || null}
         */
        this.MidasSignature = null;

        /**
         * 聚鑫分配的安全ID
         * @type {string || null}
         */
        this.MidasSecretId = null;

        /**
         * 聚鑫计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 用户类型，枚举值
USER_ID: 用户ID
ANONYMOUS: 匿名类型 USER_ID
默认值为 USER_ID
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * 场景信息
         * @type {SceneInfo || null}
         */
        this.SceneInfo = null;

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
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.OutContractCode = 'OutContractCode' in params ? params.OutContractCode : null;
        this.ContractStatus = 'ContractStatus' in params ? params.ContractStatus : null;

        if (params.ContractSyncInfo) {
            let obj = new ContractSyncInfo();
            obj.deserialize(params.ContractSyncInfo)
            this.ContractSyncInfo = obj;
        }
        this.MidasSignature = 'MidasSignature' in params ? params.MidasSignature : null;
        this.MidasSecretId = 'MidasSecretId' in params ? params.MidasSecretId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.UserType = 'UserType' in params ? params.UserType : null;

        if (params.SceneInfo) {
            let obj = new SceneInfo();
            obj.deserialize(params.SceneInfo)
            this.SceneInfo = obj;
        }
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * GetPayRollAuthList返回参数结构体
 * @class
 */
class GetPayRollAuthListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核身结果列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<PayRollAuthResult> || null}
         */
        this.Results = null;

        /**
         * 总记录条数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 记录起始位置，该次请求资源的起始位置，请求中包含偏移量时应答消息返回相同偏移量，否则返回默认值0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 本次返回条数
         * @type {number || null}
         */
        this.Limit = null;

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

        if (params.Results) {
            this.Results = new Array();
            for (let z in params.Results) {
                let obj = new PayRollAuthResult();
                obj.deserialize(params.Results[z]);
                this.Results.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 第三方渠道数据信息
 * @class
 */
class CloudExternalChannelData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方渠道数据名。
PAYMENT_ORDER_EXTERNAL_REQUEST_DATA: 支付下单请求数据
PAYMENT_ORDER_EXTERNAL_RETURN_DATA: 支付下单返回数据
PAYMENT_ORDER_EXTERNAL_NOTIFY_DATA: 支付通知数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalChannelDataName = null;

        /**
         * 第三方渠道数据值。
当ExternalChannelDataType=PAYMENT时，反序列化格式请参考[ExternalChannelPaymentDataValue](https://dev.tke.midas.qq.com/juxin-doc-next/apidocs/external-channel-data/QueryExternalChannelData.html#externalchannelpaymentdatavalue)
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalChannelDataValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExternalChannelDataName = 'ExternalChannelDataName' in params ? params.ExternalChannelDataName : null;
        this.ExternalChannelDataValue = 'ExternalChannelDataValue' in params ? params.ExternalChannelDataValue : null;

    }
}

/**
 * DistributeApply返回参数结构体
 * @class
 */
class DistributeApplyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 分账申请响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DistributeMultiApplyResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new DistributeMultiApplyResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateBatchPayment接口返回响应
 * @class
 */
class CreateBatchPaymentData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次号
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 批次列表详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CreateBatchPaymentBatchData> || null}
         */
        this.BatchInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;

        if (params.BatchInfoList) {
            this.BatchInfoList = new Array();
            for (let z in params.BatchInfoList) {
                let obj = new CreateBatchPaymentBatchData();
                obj.deserialize(params.BatchInfoList[z]);
                this.BatchInfoList.push(obj);
            }
        }

    }
}

/**
 * DistributeQuery请求参数结构体
 * @class
 */
class DistributeQueryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 查询类型（1-全部，2-单笔）
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 商户分账单号，type为2时，和DistributeNo二者传其一
         * @type {string || null}
         */
        this.OutDistributeNo = null;

        /**
         * 平台分账单号，type为2时，和OutDistributeNo二者传其一
         * @type {string || null}
         */
        this.DistributeNo = null;

        /**
         * 平台交易订单号
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.OutDistributeNo = 'OutDistributeNo' in params ? params.OutDistributeNo : null;
        this.DistributeNo = 'DistributeNo' in params ? params.DistributeNo : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * 门店明细响应对象
 * @class
 */
class ViewShopResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 门店简称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopName = null;

        /**
         * 百度地图纬度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Latitude = null;

        /**
         * 品牌名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 开通应用数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppCount = null;

        /**
         * 负责人手机号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContactTelephone = null;

        /**
         * 商户名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 省份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 县/区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.County = null;

        /**
         * 更新时间（yyyy-mm-dd hh:ii:ss）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 终端数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TerminalCount = null;

        /**
         * 收银台图片【公共区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PictureTwo = null;

        /**
         * 高德地图纬度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LatitudeTwo = null;

        /**
         * 机构名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * 其他照片【公共区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PictureFour = null;

        /**
         * 高德地图经度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LongitudeTwo = null;

        /**
         * 门店状态（0未审核，1已审核，2审核未通过，3待审核，4已删除，5初审通过）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 审核备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 机构编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentNo = null;

        /**
         * 商户编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 添加时间（yyyy-mm-dd hh:ii:ss）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 详细地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 百度地图经度
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Longitude = null;

        /**
         * 门店编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopNo = null;

        /**
         * 门店全称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopFullName = null;

        /**
         * 门店负责人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Contact = null;

        /**
         * 店内环境图片【公共区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PictureThree = null;

        /**
         * 整体门面（含招牌）图片【公共区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PictureOne = null;

        /**
         * 门店电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Telephone = null;

        /**
         * 机构门店主键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutShopId = null;

        /**
         * 城市编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CityId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.City = 'City' in params ? params.City : null;
        this.ShopName = 'ShopName' in params ? params.ShopName : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.AppCount = 'AppCount' in params ? params.AppCount : null;
        this.ContactTelephone = 'ContactTelephone' in params ? params.ContactTelephone : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.County = 'County' in params ? params.County : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.TerminalCount = 'TerminalCount' in params ? params.TerminalCount : null;
        this.PictureTwo = 'PictureTwo' in params ? params.PictureTwo : null;
        this.LatitudeTwo = 'LatitudeTwo' in params ? params.LatitudeTwo : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.PictureFour = 'PictureFour' in params ? params.PictureFour : null;
        this.LongitudeTwo = 'LongitudeTwo' in params ? params.LongitudeTwo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.AgentNo = 'AgentNo' in params ? params.AgentNo : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.ShopNo = 'ShopNo' in params ? params.ShopNo : null;
        this.ShopFullName = 'ShopFullName' in params ? params.ShopFullName : null;
        this.Contact = 'Contact' in params ? params.Contact : null;
        this.PictureThree = 'PictureThree' in params ? params.PictureThree : null;
        this.PictureOne = 'PictureOne' in params ? params.PictureOne : null;
        this.Telephone = 'Telephone' in params ? params.Telephone : null;
        this.OutShopId = 'OutShopId' in params ? params.OutShopId : null;
        this.CityId = 'CityId' in params ? params.CityId : null;

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
 * 第三方子商户进件结果查询返回结果
 * @class
 */
class QueryOpenBankExternalSubMerchantRegistrationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进件状态。
__SUCCESS__: 进件成功
__FAILED__: 进件失败
__PROCESSING__: 进件中
         * @type {string || null}
         */
        this.RegistrationStatus = null;

        /**
         * 进件返回描述, 例如失败原因等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegistrationMessage = null;

        /**
         * 渠道进件号。
         * @type {string || null}
         */
        this.ChannelRegistrationNo = null;

        /**
         * 渠道子商户ID（进件成功返回）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 外部子商户名称（进件成功返回）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutSubMerchantName = null;

        /**
         * 渠道名称（进件成功返回）。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式（进件成功返回）。
__EBANK_PAYMENT__: ebank支付
__OPENBANK_PAYMENT__: openbank支付
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 社会信用代码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BusinessLicenseNumber = null;

        /**
         * 法人姓名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LegalName = null;

        /**
         * 第三方渠道查询进件返回数据。详情见附录-复杂类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegistrationStatus = 'RegistrationStatus' in params ? params.RegistrationStatus : null;
        this.RegistrationMessage = 'RegistrationMessage' in params ? params.RegistrationMessage : null;
        this.ChannelRegistrationNo = 'ChannelRegistrationNo' in params ? params.ChannelRegistrationNo : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.OutSubMerchantName = 'OutSubMerchantName' in params ? params.OutSubMerchantName : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.BusinessLicenseNumber = 'BusinessLicenseNumber' in params ? params.BusinessLicenseNumber : null;
        this.LegalName = 'LegalName' in params ? params.LegalName : null;
        this.ExternalReturnData = 'ExternalReturnData' in params ? params.ExternalReturnData : null;

    }
}

/**
 * 云企付-跳转参数，用于小程序前端跳转
 * @class
 */
class OpenBankRedirectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 生成二维码，引导用户扫码
         * @type {string || null}
         */
        this.QRCodeUrl = null;

        /**
         * 二维码凭证
         * @type {string || null}
         */
        this.QRCodeKey = null;

        /**
         * 跳转 URL,用于客户端跳转，订单未支付时返回该参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 跳转凭证过期时间,yyyy-MM-dd HH:mm:ss
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 小程序 appid
         * @type {string || null}
         */
        this.MpAppId = null;

        /**
         * 小程序路径
         * @type {string || null}
         */
        this.MpPath = null;

        /**
         * 小程序原始 id
         * @type {string || null}
         */
        this.MpUserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.QRCodeUrl = 'QRCodeUrl' in params ? params.QRCodeUrl : null;
        this.QRCodeKey = 'QRCodeKey' in params ? params.QRCodeKey : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.MpAppId = 'MpAppId' in params ? params.MpAppId : null;
        this.MpPath = 'MpPath' in params ? params.MpPath : null;
        this.MpUserName = 'MpUserName' in params ? params.MpUserName : null;

    }
}

/**
 * ViewContract请求参数结构体
 * @class
 */
class ViewContractRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 外部合同主键编号（ContractId或OutContractId必须传一个）
         * @type {string || null}
         */
        this.OutContractId = null;

        /**
         * 合同主键（ContractId或OutContractId必须传一个）
         * @type {string || null}
         */
        this.ContractId = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.OutContractId = 'OutContractId' in params ? params.OutContractId : null;
        this.ContractId = 'ContractId' in params ? params.ContractId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * 子订单详情
 * @class
 */
class CloudSubOrderReturn extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子订单号
         * @type {string || null}
         */
        this.SubOutTradeNo = null;

        /**
         * 米大师计费SubAppId，代表子商户
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 子订单商品名称
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 子订单商品详情
         * @type {string || null}
         */
        this.ProductDetail = null;

        /**
         * 子订单平台应收金额，单位：分
         * @type {number || null}
         */
        this.PlatformIncome = null;

        /**
         * 子订单结算应收金额，单位：分
         * @type {number || null}
         */
        this.SubMchIncome = null;

        /**
         * 子订单支付金额
         * @type {number || null}
         */
        this.Amt = null;

        /**
         * 子订单原始金额
         * @type {number || null}
         */
        this.OriginalAmt = null;

        /**
         * 核销状态，1表示核销，0表示未核销
         * @type {number || null}
         */
        this.SettleCheck = null;

        /**
         * 结算信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloudSettleInfo || null}
         */
        this.SettleInfo = null;

        /**
         * 透传字段，由开发者在调用米大师下单接口的时候下发
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 附加项信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CloudAttachmentInfo || null}
         */
        this.AttachmentInfoList = null;

        /**
         * 渠道方应答的订单号，透传处理
         * @type {string || null}
         */
        this.ChannelExternalSubOrderId = null;

        /**
         * 微信子商户号
         * @type {string || null}
         */
        this.WxSubMchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SubOutTradeNo = 'SubOutTradeNo' in params ? params.SubOutTradeNo : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductDetail = 'ProductDetail' in params ? params.ProductDetail : null;
        this.PlatformIncome = 'PlatformIncome' in params ? params.PlatformIncome : null;
        this.SubMchIncome = 'SubMchIncome' in params ? params.SubMchIncome : null;
        this.Amt = 'Amt' in params ? params.Amt : null;
        this.OriginalAmt = 'OriginalAmt' in params ? params.OriginalAmt : null;
        this.SettleCheck = 'SettleCheck' in params ? params.SettleCheck : null;

        if (params.SettleInfo) {
            let obj = new CloudSettleInfo();
            obj.deserialize(params.SettleInfo)
            this.SettleInfo = obj;
        }
        this.Metadata = 'Metadata' in params ? params.Metadata : null;

        if (params.AttachmentInfoList) {
            let obj = new CloudAttachmentInfo();
            obj.deserialize(params.AttachmentInfoList)
            this.AttachmentInfoList = obj;
        }
        this.ChannelExternalSubOrderId = 'ChannelExternalSubOrderId' in params ? params.ChannelExternalSubOrderId : null;
        this.WxSubMchId = 'WxSubMchId' in params ? params.WxSubMchId : null;

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
 * AddContract返回参数结构体
 * @class
 */
class AddContractResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 添加合同响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AddContractResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new AddContractResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryBillDownloadURL请求参数结构体
 * @class
 */
class QueryBillDownloadURLRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 代发类型：
1、 微信企业付款 
2、 支付宝转账 
3、 平安银企直联代发转账
         * @type {number || null}
         */
        this.TransferType = null;

        /**
         * 账单日期，格式yyyy-MM-dd
         * @type {string || null}
         */
        this.BillDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.TransferType = 'TransferType' in params ? params.TransferType : null;
        this.BillDate = 'BillDate' in params ? params.BillDate : null;

    }
}

/**
 * 子单退款信息
 * @class
 */
class CloudSubRefundItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道方应答的退款ID，透传处理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelExternalRefundId = null;

        /**
         * 渠道方应答的订单号，透传处理
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelExternalOrderId = null;

        /**
         * 子单退款金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RefundAmt = null;

        /**
         * 子单订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubOutTradeNo = null;

        /**
         * 子单退款id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubRefundId = null;

        /**
         * 子应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 渠道子单支付订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelSubOrderId = null;

        /**
         * 渠道子退款订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelSubRefundId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelExternalRefundId = 'ChannelExternalRefundId' in params ? params.ChannelExternalRefundId : null;
        this.ChannelExternalOrderId = 'ChannelExternalOrderId' in params ? params.ChannelExternalOrderId : null;
        this.RefundAmt = 'RefundAmt' in params ? params.RefundAmt : null;
        this.SubOutTradeNo = 'SubOutTradeNo' in params ? params.SubOutTradeNo : null;
        this.SubRefundId = 'SubRefundId' in params ? params.SubRefundId : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.ChannelSubOrderId = 'ChannelSubOrderId' in params ? params.ChannelSubOrderId : null;
        this.ChannelSubRefundId = 'ChannelSubRefundId' in params ? params.ChannelSubRefundId : null;

    }
}

/**
 * QueryOpenBankDownLoadUrl返回参数结构体
 * @class
 */
class QueryOpenBankDownLoadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，SUCCESS表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 查询对账文件下载响应对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankDownLoadUrlResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankDownLoadUrlResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 分账结果响应对象
 * @class
 */
class DistributeQueryResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分账订单列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MultiApplyOrder> || null}
         */
        this.Orders = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Orders) {
            this.Orders = new Array();
            for (let z in params.Orders) {
                let obj = new MultiApplyOrder();
                obj.deserialize(params.Orders[z]);
                this.Orders.push(obj);
            }
        }

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
 * CreateSinglePayment返回参数结构体
 * @class
 */
class CreateSinglePaymentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateSinglePaymentData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new CreateSinglePaymentData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseOpenBankPaymentOrder请求参数结构体
 * @class
 */
class CloseOpenBankPaymentOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户ID，云企付平台下发给外部接入平台。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 外部商户订单号，与ChannelOrderId不能同时为空
         * @type {string || null}
         */
        this.OutOrderId = null;

        /**
         * 云企付平台订单号，与OutOrderId不能同时为空
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 接入环境。沙箱环境填 sandbox。缺省默认调用生产环境
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.OutOrderId = 'OutOrderId' in params ? params.OutOrderId : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * GetPayRollAuth请求参数结构体
 * @class
 */
class GetPayRollAuthRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

        /**
         * 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）
当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatAppId = null;

        /**
         * 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）
当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatSubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;
        this.WechatSubAppId = 'WechatSubAppId' in params ? params.WechatSubAppId : null;

    }
}

/**
 * 合同明细响应对象
 * @class
 */
class ViewContractResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支付标签（唯一性）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentTag = null;

        /**
         * 城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 机构编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentNo = null;

        /**
         * 合同选项值4
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionFour = null;

        /**
         * 合同选项值2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionTwo = null;

        /**
         * 合同状态（0未审核，1已审核，2审核未通过，3待审核，4已删除，5初审通过）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 支付方式编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentId = null;

        /**
         * 商户签约扣率
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Fee = null;

        /**
         * 合同选项名称5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionFive = null;

        /**
         * 机构合同主键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutContractId = null;

        /**
         * 不同的支付方式对于进件有不同的个性化需求，支付方式字段都是以双下划写开头的字段名称，请以支付方式规定的格式传值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelExtJson = null;

        /**
         * 合同选项值5
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionFive = null;

        /**
         * 省份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 生效日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 详细地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 过期日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 合同选项值6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionSix = null;

        /**
         * 合同选项名称7
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionSeven = null;

        /**
         * 合同照片补充【私密区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PictureTwo = null;

        /**
         * 商户编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 机构名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * 合同选项值8
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionOther = null;

        /**
         * 合同选项值3
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionThree = null;

        /**
         * 县/区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 合同关联的门店数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopCount = null;

        /**
         * 合同选项名称3
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionThree = null;

        /**
         * 支付方式行业名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentClassificationName = null;

        /**
         * 合同选项值7
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionSeven = null;

        /**
         * 合同选项名称4
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionFour = null;

        /**
         * 商户签约扣率封顶值（分为单位）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentClassificationLimit = null;

        /**
         * 审核备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 合同选项名称6
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionSix = null;

        /**
         * 品牌名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 合同选项值1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionOne = null;

        /**
         * 合同选项名称8
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionOther = null;

        /**
         * 合同选项名称2
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionTwo = null;

        /**
         * 合同选项名称1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionOne = null;

        /**
         * 更新时间（yyyy-mm-dd hh:ii:ss）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * 联系人电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContactTelephone = null;

        /**
         * 联系人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Contact = null;

        /**
         * 签约日期
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignDate = null;

        /**
         * 合同选项名称9
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionNine = null;

        /**
         * 付款方式名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentName = null;

        /**
         * 付款方式名称（内部名称）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentInternalName = null;

        /**
         * 合同选项值10
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionTen = null;

        /**
         * 合同编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 合同照片【私密区】
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PictureOne = null;

        /**
         * 签约人
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SignMan = null;

        /**
         * 渠道号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelNo = null;

        /**
         * 添加时间（yyyy-mm-dd hh:ii:ss）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 是否自动续签（1是，0否）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AutoSign = null;

        /**
         * 合同选项值9
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractOptionNine = null;

        /**
         * 城市编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * 交易类型（多个以小写逗号分开，0现金，1刷卡，2主扫，3被扫，4JSPAY，5预授权）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentType = null;

        /**
         * 支付方式行业编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentClassificationId = null;

        /**
         * 品牌名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 合同选项名称10
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionTen = null;

        /**
         * 合同主键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PaymentTag = 'PaymentTag' in params ? params.PaymentTag : null;
        this.City = 'City' in params ? params.City : null;
        this.AgentNo = 'AgentNo' in params ? params.AgentNo : null;
        this.ContractOptionFour = 'ContractOptionFour' in params ? params.ContractOptionFour : null;
        this.ContractOptionTwo = 'ContractOptionTwo' in params ? params.ContractOptionTwo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.PaymentId = 'PaymentId' in params ? params.PaymentId : null;
        this.Fee = 'Fee' in params ? params.Fee : null;
        this.PaymentOptionFive = 'PaymentOptionFive' in params ? params.PaymentOptionFive : null;
        this.OutContractId = 'OutContractId' in params ? params.OutContractId : null;
        this.ChannelExtJson = 'ChannelExtJson' in params ? params.ChannelExtJson : null;
        this.ContractOptionFive = 'ContractOptionFive' in params ? params.ContractOptionFive : null;
        this.Province = 'Province' in params ? params.Province : null;
        this.StartDate = 'StartDate' in params ? params.StartDate : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.EndDate = 'EndDate' in params ? params.EndDate : null;
        this.ContractOptionSix = 'ContractOptionSix' in params ? params.ContractOptionSix : null;
        this.PaymentOptionSeven = 'PaymentOptionSeven' in params ? params.PaymentOptionSeven : null;
        this.PictureTwo = 'PictureTwo' in params ? params.PictureTwo : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.ContractOptionOther = 'ContractOptionOther' in params ? params.ContractOptionOther : null;
        this.ContractOptionThree = 'ContractOptionThree' in params ? params.ContractOptionThree : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.ShopCount = 'ShopCount' in params ? params.ShopCount : null;
        this.PaymentOptionThree = 'PaymentOptionThree' in params ? params.PaymentOptionThree : null;
        this.PaymentClassificationName = 'PaymentClassificationName' in params ? params.PaymentClassificationName : null;
        this.ContractOptionSeven = 'ContractOptionSeven' in params ? params.ContractOptionSeven : null;
        this.PaymentOptionFour = 'PaymentOptionFour' in params ? params.PaymentOptionFour : null;
        this.PaymentClassificationLimit = 'PaymentClassificationLimit' in params ? params.PaymentClassificationLimit : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.PaymentOptionSix = 'PaymentOptionSix' in params ? params.PaymentOptionSix : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.ContractOptionOne = 'ContractOptionOne' in params ? params.ContractOptionOne : null;
        this.PaymentOptionOther = 'PaymentOptionOther' in params ? params.PaymentOptionOther : null;
        this.PaymentOptionTwo = 'PaymentOptionTwo' in params ? params.PaymentOptionTwo : null;
        this.PaymentOptionOne = 'PaymentOptionOne' in params ? params.PaymentOptionOne : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.ContactTelephone = 'ContactTelephone' in params ? params.ContactTelephone : null;
        this.Contact = 'Contact' in params ? params.Contact : null;
        this.SignDate = 'SignDate' in params ? params.SignDate : null;
        this.PaymentOptionNine = 'PaymentOptionNine' in params ? params.PaymentOptionNine : null;
        this.PaymentName = 'PaymentName' in params ? params.PaymentName : null;
        this.PaymentInternalName = 'PaymentInternalName' in params ? params.PaymentInternalName : null;
        this.ContractOptionTen = 'ContractOptionTen' in params ? params.ContractOptionTen : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.PictureOne = 'PictureOne' in params ? params.PictureOne : null;
        this.SignMan = 'SignMan' in params ? params.SignMan : null;
        this.ChannelNo = 'ChannelNo' in params ? params.ChannelNo : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.AutoSign = 'AutoSign' in params ? params.AutoSign : null;
        this.ContractOptionNine = 'ContractOptionNine' in params ? params.ContractOptionNine : null;
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.PaymentType = 'PaymentType' in params ? params.PaymentType : null;
        this.PaymentClassificationId = 'PaymentClassificationId' in params ? params.PaymentClassificationId : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.PaymentOptionTen = 'PaymentOptionTen' in params ? params.PaymentOptionTen : null;
        this.ContractId = 'ContractId' in params ? params.ContractId : null;

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
         * 子账号
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
 * 云企付-充值单收款人信息
 * @class
 */
class OpenBankRechargePayeeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收款方标识
收款方类型为电子记账本时，上送渠道电子记账本ID
         * @type {string || null}
         */
        this.PayeeId = null;

        /**
         * 收款方标识类型
ACCOUNT_BOOK_ID：电子记账本ID
         * @type {string || null}
         */
        this.PayeeIdType = null;

        /**
         * 收款方名称
         * @type {string || null}
         */
        this.PayeeName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayeeId = 'PayeeId' in params ? params.PayeeId : null;
        this.PayeeIdType = 'PayeeIdType' in params ? params.PayeeIdType : null;
        this.PayeeName = 'PayeeName' in params ? params.PayeeName : null;

    }
}

/**
 * 合同可关联门店响应对象
 * @class
 */
class QueryContractRelateShopResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 省份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 城市编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * 门店简称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopName = null;

        /**
         * 终端数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TerminalCount = null;

        /**
         * 城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 门店状态（0未审核，1已审核，2审核未通过，3待审核，4已删除，5初审通过）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopStatus = null;

        /**
         * 若是支付宝合同，支付宝上线状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AliPayOnline = null;

        /**
         * 门店编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopNo = null;

        /**
         * 县/区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Country = null;

        /**
         * 若是支付宝合同，支付宝审核状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AliPayStatus = null;

        /**
         * 为空或者0表示未关联，大于0表示已关联
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IsChecked = null;

        /**
         * 详细地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 若是支付宝合同，支付宝审核描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AliPayDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Province = 'Province' in params ? params.Province : null;
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.ShopName = 'ShopName' in params ? params.ShopName : null;
        this.TerminalCount = 'TerminalCount' in params ? params.TerminalCount : null;
        this.City = 'City' in params ? params.City : null;
        this.ShopStatus = 'ShopStatus' in params ? params.ShopStatus : null;
        this.AliPayOnline = 'AliPayOnline' in params ? params.AliPayOnline : null;
        this.ShopNo = 'ShopNo' in params ? params.ShopNo : null;
        this.Country = 'Country' in params ? params.Country : null;
        this.AliPayStatus = 'AliPayStatus' in params ? params.AliPayStatus : null;
        this.IsChecked = 'IsChecked' in params ? params.IsChecked : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.AliPayDesc = 'AliPayDesc' in params ? params.AliPayDesc : null;

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
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
         * @type {string || null}
         */
        this.SettleAcctNo = null;

        /**
         * 结算账户户名
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
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
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
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
 * QueryAssignment返回参数结构体
 * @class
 */
class QueryAssignmentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 返回响应
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AssignmentData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.Result) {
            let obj = new AssignmentData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QuerySinglePaymentResult返回参数结构体
 * @class
 */
class QuerySinglePaymentResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回响应
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QuerySinglePaymentResultData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QuerySinglePaymentResultData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * QueryCloudRefundOrder请求参数结构体
 * @class
 */
class QueryCloudRefundOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户Id，长度不小于5位，仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 退款订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合
         * @type {string || null}
         */
        this.RefundId = null;

        /**
         * 环境类型
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
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
        this.RefundId = 'RefundId' in params ? params.RefundId : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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

        /**
         * 微信商户应用ID
         * @type {string || null}
         */
        this.WxAppId = null;

        /**
         * 微信商户子应用ID
         * @type {string || null}
         */
        this.WxSubAppId = null;

        /**
         * 支付通知地址
         * @type {string || null}
         */
        this.PaymentNotifyUrl = null;

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
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;
        this.WxSubAppId = 'WxSubAppId' in params ? params.WxSubAppId : null;
        this.PaymentNotifyUrl = 'PaymentNotifyUrl' in params ? params.PaymentNotifyUrl : null;

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
 * DistributeRemoveReceiver返回参数结构体
 * @class
 */
class DistributeRemoveReceiverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 解除分账接收方响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DistributeReceiverResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new DistributeReceiverResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryInvoiceV2请求参数结构体
 * @class
 */
class QueryInvoiceV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开票平台ID
0 : 高灯
1 : 票易通
         * @type {number || null}
         */
        this.InvoicePlatformId = null;

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

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
        this.IsRed = 'IsRed' in params ? params.IsRed : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.InvoiceChannel = 'InvoiceChannel' in params ? params.InvoiceChannel : null;
        this.SellerTaxpayerNum = 'SellerTaxpayerNum' in params ? params.SellerTaxpayerNum : null;

    }
}

/**
 * DistributeAccreditQuery请求参数结构体
 * @class
 */
class DistributeAccreditQueryRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryMerchant返回参数结构体
 * @class
 */
class QueryMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配给商户的 AppId，该 AppId 为后续各项 交易的商户标识。
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 收款商户名称。
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * B2B 支付标志。是否开通 B2B 支付， 1:开通 0:不开通。
         * @type {string || null}
         */
        this.BusinessPayFlag = null;

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
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.BusinessPayFlag = 'BusinessPayFlag' in params ? params.BusinessPayFlag : null;
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

/**
 * 授权申请响应对象
 * @class
 */
class DistributeAccreditResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同h5地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractUrl = null;

        /**
         * 系统商户号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContractUrl = 'ContractUrl' in params ? params.ContractUrl : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;

    }
}

/**
 * ViewShop返回参数结构体
 * @class
 */
class ViewShopResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 门店明细响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ViewShopResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new ViewShopResult();
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
 * 支持的银行信息
 * @class
 */
class SupportBankInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 银行简称。
         * @type {string || null}
         */
        this.BankCode = null;

        /**
         * 银行名称。
         * @type {string || null}
         */
        this.BankName = null;

        /**
         * 状态。
__MAINTAINING__: 维护中
__WORKING__: 正常工作
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MaintainStatus = null;

        /**
         * 银行渠道维护公告。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankNotice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BankCode = 'BankCode' in params ? params.BankCode : null;
        this.BankName = 'BankName' in params ? params.BankName : null;
        this.MaintainStatus = 'MaintainStatus' in params ? params.MaintainStatus : null;
        this.BankNotice = 'BankNotice' in params ? params.BankNotice : null;

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
 * QueryMerchantPayWayList返回参数结构体
 * @class
 */
class QueryMerchantPayWayListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，0表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 查询商户支付方式列表结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MerchantPayWayData> || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new MerchantPayWayData();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 微工卡核身结果
 * @class
 */
class PayRollAuthResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果为核身失败时的原因描述，仅在失败记录返回，空字符串等同null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthFailedReason = null;

        /**
         * 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一
         * @type {string || null}
         */
        this.AuthNumber = null;

        /**
         * 核身渠道，发起核身时的来源渠道，如通过小程序，硬件设备等
FROM_MINI_APP：来自小程序方式核身
FROM_HARDWARE：来自硬件设备方式核身
         * @type {string || null}
         */
        this.AuthScene = null;

        /**
         * 核身渠道标识，用于定位渠道具体来源，如果是扫码打卡渠道标识就是具体的小程序appid，若是硬件设备，则是设备的序列号等
         * @type {string || null}
         */
        this.AuthSource = null;

        /**
         * 核身状态
AUTHENTICATE_PROCESSING：核身中
AUTHENTICATE_SUCCESS：核身成功
AUTHENTICATE_FAILED：核身失败
         * @type {string || null}
         */
        this.AuthStatus = null;

        /**
         * 核身时间，遵循[rfc3339](https://datatracker.ietf.org/doc/html/rfc3339)标准格式，格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE
         * @type {string || null}
         */
        this.AuthTime = null;

        /**
         * 该用户所属的单位名称
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 微信服务商商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 该项目的名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AuthFailedReason = 'AuthFailedReason' in params ? params.AuthFailedReason : null;
        this.AuthNumber = 'AuthNumber' in params ? params.AuthNumber : null;
        this.AuthScene = 'AuthScene' in params ? params.AuthScene : null;
        this.AuthSource = 'AuthSource' in params ? params.AuthSource : null;
        this.AuthStatus = 'AuthStatus' in params ? params.AuthStatus : null;
        this.AuthTime = 'AuthTime' in params ? params.AuthTime : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;

    }
}

/**
 * 全局支付时间信息
 * @class
 */
class CloudGlobalPayTimeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单开始时间。
不指定时默认为当前时间。
         * @type {number || null}
         */
        this.StartTimestamp = null;

        /**
         * 订单结束时间。
逾期将会拒绝下单。不指定时默认为当前时间的7天后结束。
         * @type {number || null}
         */
        this.ExpireTimestamp = null;

        /**
         * 时区。
不指定时默认为28800，表示北京时间（东八区）。
         * @type {number || null}
         */
        this.TimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimestamp = 'StartTimestamp' in params ? params.StartTimestamp : null;
        this.ExpireTimestamp = 'ExpireTimestamp' in params ? params.ExpireTimestamp : null;
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;

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
 * 查询第三方电子记账本余额返回值
 * @class
 */
class QueryExternalAccountBookResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道记账本ID
         * @type {string || null}
         */
        this.ChannelAccountBookId = null;

        /**
         * 可用余额。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AvailableBalance = null;

        /**
         * 电子记账本对外收款的账户信息。为JSON格式字符串（成功状态下返回）。详情见附录-复杂类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CollectMoneyAccountInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelAccountBookId = 'ChannelAccountBookId' in params ? params.ChannelAccountBookId : null;
        this.AvailableBalance = 'AvailableBalance' in params ? params.AvailableBalance : null;
        this.CollectMoneyAccountInfo = 'CollectMoneyAccountInfo' in params ? params.CollectMoneyAccountInfo : null;

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
 * UploadFile请求参数结构体
 * @class
 */
class UploadFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件名
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * 文件类型
__IdCard__:身份证
__IdCardCheck__:身份证加验证(只支持人像面)
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * 文件链接
__FileUrl和FileContent二选一__
         * @type {string || null}
         */
        this.FileUrl = null;

        /**
         * 文件内容，Base64编码
__FileUrl和FileContent二选一__
         * @type {string || null}
         */
        this.FileContent = null;

        /**
         * 文件扩展信息
         * @type {Array.<AnchorExtendInfo> || null}
         */
        this.FileExtendInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;
        this.FileContent = 'FileContent' in params ? params.FileContent : null;

        if (params.FileExtendInfo) {
            this.FileExtendInfo = new Array();
            for (let z in params.FileExtendInfo) {
                let obj = new AnchorExtendInfo();
                obj.deserialize(params.FileExtendInfo[z]);
                this.FileExtendInfo.push(obj);
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
 * UploadTaxPayment返回参数结构体
 * @class
 */
class UploadTaxPaymentResponse extends  AbstractModel {
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
 * QueryCloudRefundOrder返回参数结构体
 * @class
 */
class QueryCloudRefundOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 该笔退款订单对应的UnifiedOrder下单时传入的OutTradeNo
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 该笔退款订单对应的支付成功后支付机构返回的支付订单号
         * @type {string || null}
         */
        this.ChannelExternalOrderId = null;

        /**
         * 该笔退款订单退款后支付机构返回的退款单号
         * @type {string || null}
         */
        this.ChannelExternalRefundId = null;

        /**
         * 内部请求微信支付、银行等支付机构的订单号
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 请求退款时传的退款ID后查询退款时传的RefundId
         * @type {string || null}
         */
        this.RefundId = null;

        /**
         * 被使用的RefundId，业务可忽略该字段
         * @type {string || null}
         */
        this.UsedRefundId = null;

        /**
         * 退款总金额
         * @type {number || null}
         */
        this.TotalRefundAmt = null;

        /**
         * ISO货币代码
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 退款状态码，退款提交成功后返回
1:退款中
2:退款成功
3:退款失败
         * @type {string || null}
         */
        this.State = null;

        /**
         * 子单退款信息列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CloudSubRefundItem> || null}
         */
        this.SubRefundList = null;

        /**
         * 透传字段，退款成功回调透传给应用，用于开发者透传自定义内容
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 米大师分配的支付主MidasAppId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * 该笔退款订单退款后内部返回的退款单号
         * @type {string || null}
         */
        this.ChannelRefundId = null;

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
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.ChannelExternalOrderId = 'ChannelExternalOrderId' in params ? params.ChannelExternalOrderId : null;
        this.ChannelExternalRefundId = 'ChannelExternalRefundId' in params ? params.ChannelExternalRefundId : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.RefundId = 'RefundId' in params ? params.RefundId : null;
        this.UsedRefundId = 'UsedRefundId' in params ? params.UsedRefundId : null;
        this.TotalRefundAmt = 'TotalRefundAmt' in params ? params.TotalRefundAmt : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.State = 'State' in params ? params.State : null;

        if (params.SubRefundList) {
            this.SubRefundList = new Array();
            for (let z in params.SubRefundList) {
                let obj = new CloudSubRefundItem();
                obj.deserialize(params.SubRefundList[z]);
                this.SubRefundList.push(obj);
            }
        }
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ChannelRefundId = 'ChannelRefundId' in params ? params.ChannelRefundId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 经办人信息
 * @class
 */
class AgencyClientInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 经办人姓名，存在经办人必输
         * @type {string || null}
         */
        this.AgencyClientName = null;

        /**
         * 经办人证件类型，存在经办人必输
         * @type {string || null}
         */
        this.AgencyClientGlobalType = null;

        /**
         * 经办人证件号，存在经办人必输
         * @type {string || null}
         */
        this.AgencyClientGlobalId = null;

        /**
         * 经办人手机号，存在经办人必输
         * @type {string || null}
         */
        this.AgencyClientMobile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgencyClientName = 'AgencyClientName' in params ? params.AgencyClientName : null;
        this.AgencyClientGlobalType = 'AgencyClientGlobalType' in params ? params.AgencyClientGlobalType : null;
        this.AgencyClientGlobalId = 'AgencyClientGlobalId' in params ? params.AgencyClientGlobalId : null;
        this.AgencyClientMobile = 'AgencyClientMobile' in params ? params.AgencyClientMobile : null;

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
 * 第三方子商户银行卡解绑结果查询返回结果
 * @class
 */
class QueryOpenBankUnbindExternalSubMerchantBankAccountResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道申请编号。
         * @type {string || null}
         */
        this.ChannelApplyId = null;

        /**
         * 解绑状态。
__SUCCESS__: 解绑成功
__FAILED__: 解绑失败
__PROCESSING__: 解绑中
         * @type {string || null}
         */
        this.UnbindStatus = null;

        /**
         * 解绑返回描述, 例如失败原因等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UnbindMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelApplyId = 'ChannelApplyId' in params ? params.ChannelApplyId : null;
        this.UnbindStatus = 'UnbindStatus' in params ? params.UnbindStatus : null;
        this.UnbindMessage = 'UnbindMessage' in params ? params.UnbindMessage : null;

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
 * DistributeAccreditQuery返回参数结构体
 * @class
 */
class DistributeAccreditQueryResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 查询授权申请结果响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DistributeAccreditQueryResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new DistributeAccreditQueryResult();
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
 * 获取门店OpenId响应对象
 * @class
 */
class QueryShopOpenIdResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 省份
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 城市
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.City = null;

        /**
         * 门店简称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopName = null;

        /**
         * 商户编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 城市编码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * open_id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 门店电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Telephone = null;

        /**
         * 门店编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopNo = null;

        /**
         * 县/区
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.County = null;

        /**
         * 门店全称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopFullName = null;

        /**
         * 品牌名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BrandName = null;

        /**
         * 详细地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * open_key
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 商户名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Province = 'Province' in params ? params.Province : null;
        this.City = 'City' in params ? params.City : null;
        this.ShopName = 'ShopName' in params ? params.ShopName : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Telephone = 'Telephone' in params ? params.Telephone : null;
        this.ShopNo = 'ShopNo' in params ? params.ShopNo : null;
        this.County = 'County' in params ? params.County : null;
        this.ShopFullName = 'ShopFullName' in params ? params.ShopFullName : null;
        this.BrandName = 'BrandName' in params ? params.BrandName : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;

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
 * GetPayRollAuthResult返回参数结构体
 * @class
 */
class GetPayRollAuthResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 核身结果
         * @type {PayRollAuthResult || null}
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
            let obj = new PayRollAuthResult();
            obj.deserialize(params.Result)
            this.Result = obj;
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
 * 云企付-商品信息
 * @class
 */
class OpenBankGoodsInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商品标题，默认值“商品支付”
         * @type {string || null}
         */
        this.GoodsName = null;

        /**
         * 商品详细描述（商品列表）
         * @type {string || null}
         */
        this.GoodsDetail = null;

        /**
         * 银行附言，不可以有以下字符：<>+{}()%*&';"[]等特殊符号
         * @type {string || null}
         */
        this.GoodsDescription = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GoodsName = 'GoodsName' in params ? params.GoodsName : null;
        this.GoodsDetail = 'GoodsDetail' in params ? params.GoodsDetail : null;
        this.GoodsDescription = 'GoodsDescription' in params ? params.GoodsDescription : null;

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
 * CreateBatchPayment返回参数结构体
 * @class
 */
class CreateBatchPaymentResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回响应
         * @type {CreateBatchPaymentData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new CreateBatchPaymentData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateExternalAnchor请求参数结构体
 * @class
 */
class CreateExternalAnchorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台业务系统唯一标示的主播id
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 主播名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 身份证号
         * @type {string || null}
         */
        this.IdNo = null;

        /**
         * 身份证正面图片下载链接
         * @type {string || null}
         */
        this.IdCardFront = null;

        /**
         * 身份证反面图片下载链接
         * @type {string || null}
         */
        this.IdCardReverse = null;

        /**
         * 指定分配的代理商ID
         * @type {string || null}
         */
        this.AgentId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.IdNo = 'IdNo' in params ? params.IdNo : null;
        this.IdCardFront = 'IdCardFront' in params ? params.IdCardFront : null;
        this.IdCardReverse = 'IdCardReverse' in params ? params.IdCardReverse : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;

    }
}

/**
 * ConfirmOrder返回参数结构体
 * @class
 */
class ConfirmOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配给商户的AppId
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 平台流水号。消费订单发起成功后，返回的平台唯一订单号。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 订单确认状态。0-确认失败
1-确认成功 
2-可疑状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 订单确认状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

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
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetPayRollAuth返回参数结构体
 * @class
 */
class GetPayRollAuthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 授权状态：
UNAUTHORIZED：未授权
AUTHORIZED：已授权
DEAUTHORIZED：已取消授权
         * @type {string || null}
         */
        this.AuthStatus = null;

        /**
         * 授权时间，遵循[rfc3339](https://datatracker.ietf.org/doc/html/rfc3339)标准格式，格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，空字符串等同null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AuthTime = null;

        /**
         * 授权时间，遵循[rfc3339](https://datatracker.ietf.org/doc/html/rfc3339)标准格式，格式为YYYY-MM-DDTHH:mm:ss.sss+TIMEZONE，空字符串等同null
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CancelAuthTime = null;

        /**
         * 微信服务商商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

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
        this.AuthStatus = 'AuthStatus' in params ? params.AuthStatus : null;
        this.AuthTime = 'AuthTime' in params ? params.AuthTime : null;
        this.CancelAuthTime = 'CancelAuthTime' in params ? params.CancelAuthTime : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnifiedTlinxOrder返回参数结构体
 * @class
 */
class UnifiedTlinxOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码，0表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 统一下单响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {PayOrderResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new PayOrderResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSinglePayment接口返回响应
 * @class
 */
class CreateSinglePaymentData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台交易流水号，唯一
         * @type {string || null}
         */
        this.TradeSerialNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;

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
 * QueryCityCode返回参数结构体
 * @class
 */
class QueryCityCodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 查询城市编码响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CityCodeResult> || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new CityCodeResult();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
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
 * 创建第三方电子记账本返回值
 * @class
 */
class CreateExternalAccountBookResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 处理状态。
__SUCCESS__: 成功
__FAILED__: 失败
__PROCESSING__: 进行中。
         * @type {string || null}
         */
        this.DealStatus = null;

        /**
         * 处理返回描述，例如失败原因等
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DealMessage = null;

        /**
         * 渠道电子记账本ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelAccountBookId = null;

        /**
         * 电子记账本对外收款的账户信息。为JSON格式字符串（成功状态下返回）。详情见附录-复杂类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CollectMoneyAccountInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealStatus = 'DealStatus' in params ? params.DealStatus : null;
        this.DealMessage = 'DealMessage' in params ? params.DealMessage : null;
        this.ChannelAccountBookId = 'ChannelAccountBookId' in params ? params.ChannelAccountBookId : null;
        this.CollectMoneyAccountInfo = 'CollectMoneyAccountInfo' in params ? params.CollectMoneyAccountInfo : null;

    }
}

/**
 * 智能代发-单笔代发转账查询接口返回内容
 * @class
 */
class QueryTransferResultData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台交易流水号
         * @type {string || null}
         */
        this.TradeSerialNo = null;

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 交易状态。
0 处理中  
1 提交成功 
2 交易成功 
3 交易失败 
4 未知渠道异常 
99 未知系统异常
         * @type {number || null}
         */
        this.TradeStatus = null;

        /**
         * 业务备注
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
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.TradeStatus = 'TradeStatus' in params ? params.TradeStatus : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 分账明细
 * @class
 */
class MultiApplyDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户编号
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 分账金额
         * @type {string || null}
         */
        this.Amount = null;

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
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 解约数据
 * @class
 */
class ResponseTerminateContract extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方渠道错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnCode = null;

        /**
         * 第三方渠道错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnMessage = null;

        /**
         * 第三方渠道返回的原始数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExternalReturnCode = 'ExternalReturnCode' in params ? params.ExternalReturnCode : null;
        this.ExternalReturnMessage = 'ExternalReturnMessage' in params ? params.ExternalReturnMessage : null;
        this.ExternalReturnData = 'ExternalReturnData' in params ? params.ExternalReturnData : null;

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
 * QueryOpenBankBindExternalSubMerchantBankAccount请求参数结构体
 * @class
 */
class QueryOpenBankBindExternalSubMerchantBankAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道子商户ID。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道商户ID。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道申请编号，与外部申请编号二者选填其一。
         * @type {string || null}
         */
        this.ChannelApplyId = null;

        /**
         * 环境类型。
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * 外部申请编号，与渠道申请编号二者选填其一。
         * @type {string || null}
         */
        this.OutApplyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelApplyId = 'ChannelApplyId' in params ? params.ChannelApplyId : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.OutApplyId = 'OutApplyId' in params ? params.OutApplyId : null;

    }
}

/**
 * DistributeRemoveReceiver请求参数结构体
 * @class
 */
class DistributeRemoveReceiverRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 商户编号
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 机构账单文件下载地址响应对象
 * @class
 */
class BillDownloadUrlResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 对账单下载地址。GET方式访问，返回zip包，解压后为csv格式文件。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;

    }
}

/**
 * CreatePayRollPreOrder请求参数结构体
 * @class
 */
class CreatePayRollPreOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

        /**
         * 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一
         * @type {string || null}
         */
        this.AuthNumber = null;

        /**
         * 该劳务活动的项目名称
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * 该工人所属的用工企业
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）
当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatAppId = null;

        /**
         * 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）
当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatSubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;
        this.AuthNumber = 'AuthNumber' in params ? params.AuthNumber : null;
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;
        this.WechatSubAppId = 'WechatSubAppId' in params ? params.WechatSubAppId : null;

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
 * CreatePayRollToken请求参数结构体
 * @class
 */
class CreatePayRollTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

        /**
         * 用户实名信息，该字段需进行加密处理，加密方法详见[敏感信息加密说明](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/wechatpay/wechatpay4_3.shtml)
         * @type {string || null}
         */
        this.UserName = null;

        /**
         * 用户证件号，该字段需进行加密处理，加密方法详见[敏感信息加密说明](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/wechatpay/wechatpay4_3.shtml)
         * @type {string || null}
         */
        this.IdNo = null;

        /**
         * 微工卡服务仅支持用于与商户有用工关系的用户，需明确用工类型；参考值：
LONG_TERM_EMPLOYMENT：长期用工，
SHORT_TERM_EMPLOYMENT： 短期用工，
COOPERATION_EMPLOYMENT：合作关系
         * @type {string || null}
         */
        this.EmploymentType = null;

        /**
         * 是服务商在微信申请公众号/小程序或移动应用成功后分配的账号ID（与服务商主体一致）
当输入服务商Appid时，会校验其与服务商商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatAppId = null;

        /**
         * 特约商户在微信申请公众号/小程序或移动应用成功后分配的账号ID（与特约商户主体一致）
当输入特约商户Appid时，会校验其与特约商户号的绑定关系。服务商APPID和与特约商户APPID至少输入一个，且必须要有拉起领薪卡小程序时使用的APPID
         * @type {string || null}
         */
        this.WechatSubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;
        this.IdNo = 'IdNo' in params ? params.IdNo : null;
        this.EmploymentType = 'EmploymentType' in params ? params.EmploymentType : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;
        this.WechatSubAppId = 'WechatSubAppId' in params ? params.WechatSubAppId : null;

    }
}

/**
 * AddShop请求参数结构体
 * @class
 */
class AddShopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 机构门店主键（系统有唯一性校验），建议使用门店表的主键ID，防止重复添加门店
         * @type {string || null}
         */
        this.OutShopId = null;

        /**
         * 门店简称（例如：南山店）
         * @type {string || null}
         */
        this.ShopName = null;

        /**
         * 门店全称（例如：江山小厨（南山店））
         * @type {string || null}
         */
        this.ShopFullName = null;

        /**
         * 商户编号
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 门店电话
         * @type {string || null}
         */
        this.Telephone = null;

        /**
         * 营业时间，多个以小写逗号分开(9:00-12:00,13:00-18:00)
         * @type {string || null}
         */
        this.OpenHours = null;

        /**
         * 门店所在的城市编码
         * @type {string || null}
         */
        this.CityId = null;

        /**
         * 门店详细地址，不含省市区县名称
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 整体门面（含招牌）图片【公共区】
         * @type {string || null}
         */
        this.PictureOne = null;

        /**
         * 整体门面（含招牌）图片【公共区】
         * @type {string || null}
         */
        this.PictureTwo = null;

        /**
         * 店内环境图片【公共区】
         * @type {string || null}
         */
        this.PictureThree = null;

        /**
         * 负责人手机号码
         * @type {string || null}
         */
        this.FinancialTelephone = null;

        /**
         * 门店负责人
         * @type {string || null}
         */
        this.Contact = null;

        /**
         * 百度地图纬度
         * @type {string || null}
         */
        this.Latitude = null;

        /**
         * 高德地图纬度
         * @type {string || null}
         */
        this.LatitudeTwo = null;

        /**
         * 百度地图经度
         * @type {string || null}
         */
        this.Longitude = null;

        /**
         * 高德地图经度
         * @type {string || null}
         */
        this.LongitudeTwo = null;

        /**
         * 其他照片【公共区】
         * @type {string || null}
         */
        this.OtherPicture = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.OutShopId = 'OutShopId' in params ? params.OutShopId : null;
        this.ShopName = 'ShopName' in params ? params.ShopName : null;
        this.ShopFullName = 'ShopFullName' in params ? params.ShopFullName : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.Telephone = 'Telephone' in params ? params.Telephone : null;
        this.OpenHours = 'OpenHours' in params ? params.OpenHours : null;
        this.CityId = 'CityId' in params ? params.CityId : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.PictureOne = 'PictureOne' in params ? params.PictureOne : null;
        this.PictureTwo = 'PictureTwo' in params ? params.PictureTwo : null;
        this.PictureThree = 'PictureThree' in params ? params.PictureThree : null;
        this.FinancialTelephone = 'FinancialTelephone' in params ? params.FinancialTelephone : null;
        this.Contact = 'Contact' in params ? params.Contact : null;
        this.Latitude = 'Latitude' in params ? params.Latitude : null;
        this.LatitudeTwo = 'LatitudeTwo' in params ? params.LatitudeTwo : null;
        this.Longitude = 'Longitude' in params ? params.Longitude : null;
        this.LongitudeTwo = 'LongitudeTwo' in params ? params.LongitudeTwo : null;
        this.OtherPicture = 'OtherPicture' in params ? params.OtherPicture : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 批量转账明细实体
 * @class
 */
class TransferDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商家明细单号。
商户系统内部区分转账批次单下不同转账明细单的唯一标识，要求此参数只能由数字、大小写字母组成。
示例值：x23zy545Bd5436
         * @type {string || null}
         */
        this.MerchantDetailNo = null;

        /**
         * 转账金额。
转账金额单位为分。
示例值：200000
         * @type {number || null}
         */
        this.TransferAmount = null;

        /**
         * 转账备注。
单条转账备注（微信用户会收到该备注）。UTF8编码，最多32字符。
示例值：2020年4月报销
         * @type {string || null}
         */
        this.TransferRemark = null;

        /**
         * 用户在直连商户下的唯一标识。
示例值：o-MYE42l80oelYMDE34nYD456Xoy
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收款用户姓名。
收款方姓名。
示例值：张三
         * @type {string || null}
         */
        this.UserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantDetailNo = 'MerchantDetailNo' in params ? params.MerchantDetailNo : null;
        this.TransferAmount = 'TransferAmount' in params ? params.TransferAmount : null;
        this.TransferRemark = 'TransferRemark' in params ? params.TransferRemark : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.UserName = 'UserName' in params ? params.UserName : null;

    }
}

/**
 * QueryOrderStatus返回参数结构体
 * @class
 */
class QueryOrderStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，0表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 查询订单付款状态结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOrderStatusResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOrderStatusResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryTransferResult返回参数结构体
 * @class
 */
class QueryTransferResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryTransferResultData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryTransferResultData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseCloudOrder请求参数结构体
 * @class
 */
class CloseCloudOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户Id，长度不小于5位，仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 开发者订单号
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 环境类型
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
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
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * 发票结果V2
 * @class
 */
class CreateInvoiceResultV2 extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发票ID
         * @type {string || null}
         */
        this.InvoiceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InvoiceId = 'InvoiceId' in params ? params.InvoiceId : null;

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
 * DistributeQueryReceiver返回参数结构体
 * @class
 */
class DistributeQueryReceiverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 查询询已添加分账接收方响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DistributeReceiverResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new DistributeReceiverResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryTransferResult请求参数结构体
 * @class
 */
class QueryTransferResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 申请商户号的appid或者商户号绑定的appid
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 1、 微信企业付款 
2、 支付宝转账 
3、 平安银企直联代发转账
         * @type {number || null}
         */
        this.TransferType = null;

        /**
         * 交易流水流水号（与 OrderId 不能同时为空）
         * @type {string || null}
         */
        this.TradeSerialNo = null;

        /**
         * 订单号（与 TradeSerialNo 不能同时为空）
         * @type {string || null}
         */
        this.OrderId = null;

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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.TransferType = 'TransferType' in params ? params.TransferType : null;
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 查询对账文件申请结果
 * @class
 */
class QueryReconciliationFileApplyInfoResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请对账文件的任务ID。
         * @type {string || null}
         */
        this.ApplyFileId = null;

        /**
         * 对账文件申请状态。
__I__：申请中
__S__：申请成功
__F__：申请失败
         * @type {string || null}
         */
        this.ApplyStatus = null;

        /**
         * 申请结果描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplyMessage = null;

        /**
         * 对账文件下载地址列表。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.FileUrlArray = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplyFileId = 'ApplyFileId' in params ? params.ApplyFileId : null;
        this.ApplyStatus = 'ApplyStatus' in params ? params.ApplyStatus : null;
        this.ApplyMessage = 'ApplyMessage' in params ? params.ApplyMessage : null;
        this.FileUrlArray = 'FileUrlArray' in params ? params.FileUrlArray : null;

    }
}

/**
 * 申请对账文件结果
 * @class
 */
class ApplyReconciliationFileResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请对账文件的任务ID。
         * @type {string || null}
         */
        this.ApplyFileId = null;

        /**
         * 对账文件申请状态。
__I__：申请中
__S__：申请成功
__F__：申请失败
         * @type {string || null}
         */
        this.ApplyStatus = null;

        /**
         * 申请结果描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ApplyMessage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplyFileId = 'ApplyFileId' in params ? params.ApplyFileId : null;
        this.ApplyStatus = 'ApplyStatus' in params ? params.ApplyStatus : null;
        this.ApplyMessage = 'ApplyMessage' in params ? params.ApplyMessage : null;

    }
}

/**
 * QueryOpenBankExternalSubMerchantBankAccount返回参数结构体
 * @class
 */
class QueryOpenBankExternalSubMerchantBankAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankExternalSubMerchantBankAccountResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankExternalSubMerchantBankAccountResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateRedInvoiceV2请求参数结构体
 * @class
 */
class CreateRedInvoiceV2Request extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开票平台ID
0 : 高灯
1 : 票易通
         * @type {number || null}
         */
        this.InvoicePlatformId = null;

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

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
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.InvoiceChannel = 'InvoiceChannel' in params ? params.InvoiceChannel : null;

    }
}

/**
 * ApplyOpenBankOrderDetailReceipt返回参数结构体
 * @class
 */
class ApplyOpenBankOrderDetailReceiptResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplyOpenBankOrderDetailReceiptResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new ApplyOpenBankOrderDetailReceiptResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 银行复核指引。银行侧返回网银授权指引链接，一般PC网银，手机网银链接
 * @class
 */
class OpenBankApprovalGuideInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * PC网银指引
         * @type {string || null}
         */
        this.PcGuideUrl = null;

        /**
         * 手机网银指引
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MobileGuideUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PcGuideUrl = 'PcGuideUrl' in params ? params.PcGuideUrl : null;
        this.MobileGuideUrl = 'MobileGuideUrl' in params ? params.MobileGuideUrl : null;

    }
}

/**
 * CreateOrder返回参数结构体
 * @class
 */
class CreateOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进件成功后返给商户方的AppId。
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 商户流水号，商户唯一订单号由字母或数字组成。
         * @type {string || null}
         */
        this.TraceNo = null;

        /**
         * 平台流水号，若下单成功则返回。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 支付页面跳转地址，若下单成功则返回。
         * @type {string || null}
         */
        this.PayUrl = null;

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
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.TraceNo = 'TraceNo' in params ? params.TraceNo : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.PayUrl = 'PayUrl' in params ? params.PayUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分账订单信息
 * @class
 */
class MultiApplyOrder extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户分账单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutDistributeNo = null;

        /**
         * 平台分账单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DistributeNo = null;

        /**
         * 平台交易订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 分账订单状态（0初始1成功2失败3撤销）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 入账日期，格式yyyy-MM-dd
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InDate = null;

        /**
         * 备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 分账明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MultiApplyDetail> || null}
         */
        this.Details = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutDistributeNo = 'OutDistributeNo' in params ? params.OutDistributeNo : null;
        this.DistributeNo = 'DistributeNo' in params ? params.DistributeNo : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InDate = 'InDate' in params ? params.InDate : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new MultiApplyDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

    }
}

/**
 * ModifyMerchant请求参数结构体
 * @class
 */
class ModifyMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进件成功后返给商户的AppId
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 收款商户名称
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * B2B 支付标志。是否开通 B2B支付， 1:开通 0:不开通。
         * @type {string || null}
         */
        this.BusinessPayFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.BusinessPayFlag = 'BusinessPayFlag' in params ? params.BusinessPayFlag : null;

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
 * CreateCloudSubMerchant返回参数结构体
 * @class
 */
class CreateCloudSubMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子应用Id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 渠道子商户Id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 层级，从0开始。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Level = null;

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
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryFundsTransactionDetails请求参数结构体
 * @class
 */
class QueryFundsTransactionDetailsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询的交易发生时间类型。
__1__：当日
__2__：历史
         * @type {string || null}
         */
        this.QueryDateType = null;

        /**
         * 查询的交易类型。
__2__：提现/退款
__3__：清分/充值
         * @type {string || null}
         */
        this.QueryTranType = null;

        /**
         * 父账户账号。
_平安渠道为资金汇总账号_
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 子账户账号。
_平安渠道为见证子账户的账号_
         * @type {string || null}
         */
        this.SubAccountNumber = null;

        /**
         * 分页号, 起始值为1。
         * @type {string || null}
         */
        this.PageOffSet = null;

        /**
         * 查询开始日期，格式：yyyyMMdd。
__若是历史查询，则必输，当日查询时，不起作用；开始日期不能超过当前日期__
         * @type {string || null}
         */
        this.QueryStartDate = null;

        /**
         * 查询终止日期，格式：yyyyMMdd。
__若是历史查询，则必输，当日查询时，不起作用；终止日期不能超过当前日期__
         * @type {string || null}
         */
        this.QueryEndDate = null;

        /**
         * 环境名。
__release__: 现网环境
__sandbox__: 沙箱环境
__development__: 开发环境
_缺省: release_
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
        this.QueryDateType = 'QueryDateType' in params ? params.QueryDateType : null;
        this.QueryTranType = 'QueryTranType' in params ? params.QueryTranType : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.SubAccountNumber = 'SubAccountNumber' in params ? params.SubAccountNumber : null;
        this.PageOffSet = 'PageOffSet' in params ? params.PageOffSet : null;
        this.QueryStartDate = 'QueryStartDate' in params ? params.QueryStartDate : null;
        this.QueryEndDate = 'QueryEndDate' in params ? params.QueryEndDate : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

    }
}

/**
 * 第三方子商户银行卡绑定返回结果
 * @class
 */
class BindOpenBankExternalSubMerchantBankAccountResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道申请编号。
         * @type {string || null}
         */
        this.ChannelApplyId = null;

        /**
         * 绑定状态。
__SUCCESS__: 绑定成功
__FAILED__: 绑定失败
__PROCESSING__: 绑定中。
注意：若返回绑定中，需要再次调用绑定结果查询接口,查询结果。
         * @type {string || null}
         */
        this.BindStatus = null;

        /**
         * 绑定返回描述, 例如失败原因等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BindMessage = null;

        /**
         * 渠道子商户银行账户信息, 为JSON格式字符串（绑定成功状态下返回）。详情见附录-复杂类型。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalSubMerchantBankAccountReturnData = null;

        /**
         * 绑卡序列号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BindSerialNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelApplyId = 'ChannelApplyId' in params ? params.ChannelApplyId : null;
        this.BindStatus = 'BindStatus' in params ? params.BindStatus : null;
        this.BindMessage = 'BindMessage' in params ? params.BindMessage : null;
        this.ExternalSubMerchantBankAccountReturnData = 'ExternalSubMerchantBankAccountReturnData' in params ? params.ExternalSubMerchantBankAccountReturnData : null;
        this.BindSerialNo = 'BindSerialNo' in params ? params.BindSerialNo : null;

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
 * DistributeCancel请求参数结构体
 * @class
 */
class DistributeCancelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 平台交易订单号
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 商户分账单号，type为2时，和DistributeNo二者传其一
         * @type {string || null}
         */
        this.OutDistributeNo = null;

        /**
         * 平台分账单号，type为2时，和OutDistributeNo二者传其一
         * @type {string || null}
         */
        this.DistributeNo = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.OutDistributeNo = 'OutDistributeNo' in params ? params.OutDistributeNo : null;
        this.DistributeNo = 'DistributeNo' in params ? params.DistributeNo : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * QueryOpenBankSupportBankList返回参数结构体
 * @class
 */
class QueryOpenBankSupportBankListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankSupportBankListResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankSupportBankListResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * QueryCloudOrder请求参数结构体
 * @class
 */
class QueryCloudOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户Id，长度不小于5位，仅支持字母和数字的组合
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 查询类型
by_order:根据订单号查订单
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 环境类型
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 开发者的主订单号
         * @type {string || null}
         */
        this.OutTradeNo = null;

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
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;

    }
}

/**
 * 云企付-充值跳转参数
 * @class
 */
class OpenBankRechargeRedirectInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 跳转URL
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

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
 * ApplyOpenBankOrderDetailReceipt请求参数结构体
 * @class
 */
class ApplyOpenBankOrderDetailReceiptRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部回单申请编号
         * @type {string || null}
         */
        this.OutApplyId = null;

        /**
         * 渠道商户ID
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道子商户ID
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道名称，目前只支持ALIPAY
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式，目前只支持SAFT_ISV
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 云企付平台订单号
         * @type {string || null}
         */
        this.ChannelOrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutApplyId = 'OutApplyId' in params ? params.OutApplyId : null;
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;

    }
}

/**
 * GetBillDownloadUrl返回参数结构体
 * @class
 */
class GetBillDownloadUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 账单文件下载地址响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {BillDownloadUrlResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new BillDownloadUrlResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryTransferDetail请求参数结构体
 * @class
 */
class QueryTransferDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号。
示例值：129284394
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
         * @type {string || null}
         */
        this.MerchantBatchNo = null;

        /**
         * 商家明细单号。
商户系统内部的商家明细单号
示例值：plfk2020042013
         * @type {string || null}
         */
        this.MerchantDetailNo = null;

        /**
         * 微信批次单号。
微信商家转账系统返回的唯一标识。
商家单号（包含批次号和明细单号）和微信单号（包含批次号和明细单号）二者必填其一。
示例值：1030000071100999991182020050700019480001
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 微信明细单号。
微信区分明细单返回的唯一标识。
示例值：1030000071100999991182020050700019480001
         * @type {string || null}
         */
        this.DetailId = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.MerchantBatchNo = 'MerchantBatchNo' in params ? params.MerchantBatchNo : null;
        this.MerchantDetailNo = 'MerchantDetailNo' in params ? params.MerchantDetailNo : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.DetailId = 'DetailId' in params ? params.DetailId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * DownloadOrgFile返回参数结构体
 * @class
 */
class DownloadOrgFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 下载机构文件响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DownloadFileResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new DownloadFileResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云企付-收款人信息
 * @class
 */
class OpenBankPayeeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收款方唯一标识。
当渠道为TENPAY，付款方式为EBANK_PAYMENT，必填，上送收款方入驻云企付商户ID；
付款方式为OPENBANK_PAYMENT时，非必填，输入外部收款方的标识ID
渠道为WECHAT，付款方式为TRANS_TO_CHANGE时，上送微信OPEN_ID；
         * @type {string || null}
         */
        this.PayeeId = null;

        /**
         * 支行名称。
         * @type {string || null}
         */
        this.BankBranchName = null;

        /**
         * 银行账号。渠道为TENPAY，付款方式为OPENBANK_PAYMENT时必选
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 收款方名称。
当渠道为TENPAY，付款方式为EBANK_PAYMENT时，上送收款方入驻云企付的商户名称；
渠道为TENPAY，付款方式为OPENBANK_PAYMENT时必选，上送收款方账户名称；
渠道为ALIPAY，付款方式为SAFT_ISV时，收款账户标识类型为ALIPAY_LOGON_ID时必传，上送收款方真实姓名。
渠道为WECHAT，付款方式为TRANS_TO_CHANGE时，上送收款人姓名。
         * @type {string || null}
         */
        this.PayeeName = null;

        /**
         * 联行号。渠道为TENPAY，付款方式为OPENBANK_PAYMENT时必选
         * @type {string || null}
         */
        this.BankBranchId = null;

        /**
         * 收款方绑卡序列号。
当渠道为TENPAY，付款方式为EBANK_PAYMENT时，必填，上送收款方入驻云企付平台时，下发的绑卡序列号；当渠道为ALIPAY，付款方式为SAFT_ISV时，必填，根据收款账户标识类型上送。
         * @type {string || null}
         */
        this.BindSerialNo = null;

        /**
         * 收款账户标识类型
BANK_ACCOUNT：绑定银行账户
ACCOUNT_BOOK_ID：电子记账本ID
ALIPAY_USER_ID：支付宝的会员ID
ALIPAY_LOGON_ID：支付宝登录号。
付款方式为SAFT_ISV时，必填。
         * @type {string || null}
         */
        this.AccountType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayeeId = 'PayeeId' in params ? params.PayeeId : null;
        this.BankBranchName = 'BankBranchName' in params ? params.BankBranchName : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.PayeeName = 'PayeeName' in params ? params.PayeeName : null;
        this.BankBranchId = 'BankBranchId' in params ? params.BankBranchId : null;
        this.BindSerialNo = 'BindSerialNo' in params ? params.BindSerialNo : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;

    }
}

/**
 * 添加门店响应对象
 * @class
 */
class AddShopResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 门店编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShopNo = 'ShopNo' in params ? params.ShopNo : null;

    }
}

/**
 * pay支付方式json数据
 * @class
 */
class PayDataResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支付标签（唯一性）
         * @type {string || null}
         */
        this.PaymentTag = null;

        /**
         * 添加合同时需要隐藏的选项（多个以小写逗号分开）
         * @type {string || null}
         */
        this.PaymentOptionHide = null;

        /**
         * 支付方式图片url路径
         * @type {string || null}
         */
        this.PaymentIcon = null;

        /**
         * 合同选项名称6
         * @type {string || null}
         */
        this.PaymentOptionSix = null;

        /**
         * 付款方式名称
         * @type {string || null}
         */
        this.PaymentName = null;

        /**
         * 合同选项名称7
         * @type {string || null}
         */
        this.PaymentOptionSeven = null;

        /**
         * 合同选项名称8
         * @type {string || null}
         */
        this.PaymentOptionOther = null;

        /**
         * 合同选项名称2
         * @type {string || null}
         */
        this.PaymentOptionTwo = null;

        /**
         * 合同选项名称1
         * @type {string || null}
         */
        this.PaymentOptionOne = null;

        /**
         * 是否开启智能扣率（1是，0否）
         * @type {string || null}
         */
        this.PaymentDiscountFee = null;

        /**
         * 支持的交易类型（多个以小写逗号分开，0现金，1刷卡，2主扫，3被扫，4JSPAY，5预授权）
         * @type {string || null}
         */
        this.PaymentType = null;

        /**
         * 合同选项名称5
         * @type {string || null}
         */
        this.PaymentOptionFive = null;

        /**
         * 合同选项名称9
         * @type {string || null}
         */
        this.PaymentOptionNine = null;

        /**
         * 支付方式编号
         * @type {string || null}
         */
        this.PaymentId = null;

        /**
         * 合同选项名称3
         * @type {string || null}
         */
        this.PaymentOptionThree = null;

        /**
         * 付款方式名称（内部名称）
         * @type {string || null}
         */
        this.PaymentInternalName = null;

        /**
         * 合同选项名称4
         * @type {string || null}
         */
        this.PaymentOptionFour = null;

        /**
         * 合同选项名称10
         * @type {string || null}
         */
        this.PaymentOptionTen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PaymentTag = 'PaymentTag' in params ? params.PaymentTag : null;
        this.PaymentOptionHide = 'PaymentOptionHide' in params ? params.PaymentOptionHide : null;
        this.PaymentIcon = 'PaymentIcon' in params ? params.PaymentIcon : null;
        this.PaymentOptionSix = 'PaymentOptionSix' in params ? params.PaymentOptionSix : null;
        this.PaymentName = 'PaymentName' in params ? params.PaymentName : null;
        this.PaymentOptionSeven = 'PaymentOptionSeven' in params ? params.PaymentOptionSeven : null;
        this.PaymentOptionOther = 'PaymentOptionOther' in params ? params.PaymentOptionOther : null;
        this.PaymentOptionTwo = 'PaymentOptionTwo' in params ? params.PaymentOptionTwo : null;
        this.PaymentOptionOne = 'PaymentOptionOne' in params ? params.PaymentOptionOne : null;
        this.PaymentDiscountFee = 'PaymentDiscountFee' in params ? params.PaymentDiscountFee : null;
        this.PaymentType = 'PaymentType' in params ? params.PaymentType : null;
        this.PaymentOptionFive = 'PaymentOptionFive' in params ? params.PaymentOptionFive : null;
        this.PaymentOptionNine = 'PaymentOptionNine' in params ? params.PaymentOptionNine : null;
        this.PaymentId = 'PaymentId' in params ? params.PaymentId : null;
        this.PaymentOptionThree = 'PaymentOptionThree' in params ? params.PaymentOptionThree : null;
        this.PaymentInternalName = 'PaymentInternalName' in params ? params.PaymentInternalName : null;
        this.PaymentOptionFour = 'PaymentOptionFour' in params ? params.PaymentOptionFour : null;
        this.PaymentOptionTen = 'PaymentOptionTen' in params ? params.PaymentOptionTen : null;

    }
}

/**
 * ModifyBindedAccount返回参数结构体
 * @class
 */
class ModifyBindedAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 该字段为null。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.Result = 'Result' in params ? params.Result : null;
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
 * TransferSinglePay请求参数结构体
 * @class
 */
class TransferSinglePayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 微信申请商户号的appid或者商户号绑定的appid
支付宝、平安填入MerchantId
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 1、 微信企业付款 
2、 支付宝转账 
3、 平安银企直联代发转账
         * @type {number || null}
         */
        this.TransferType = null;

        /**
         * 订单流水号，唯一，不能包含特殊字符，长度最大限制64位，推荐使用字母，数字组合，"_","-"组合
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 转账金额，单位分
         * @type {number || null}
         */
        this.TransferAmount = null;

        /**
         * 收款方标识。
微信为open_id；
支付宝为会员alipay_user_id;
平安为收款方银行账号
         * @type {string || null}
         */
        this.PayeeId = null;

        /**
         * 收款方姓名。支付宝可选；微信，平安模式下必传
         * @type {string || null}
         */
        this.PayeeName = null;

        /**
         * 收款方附加信息，平安接入使用。需要以JSON格式提供以下字段：
PayeeBankName：收款人开户行名称
 CcyCode：货币类型（RMB-人民币）
 UnionFlag：行内跨行标志（1：行内转账，0：跨行转账）。
         * @type {string || null}
         */
        this.PayeeExtends = null;

        /**
         * 请求预留字段，原样透传返回
         * @type {string || null}
         */
        this.ReqReserved = null;

        /**
         * 业务备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 转账结果回调通知URL。若不填，则不进行回调。
         * @type {string || null}
         */
        this.NotifyUrl = null;

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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.TransferType = 'TransferType' in params ? params.TransferType : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.TransferAmount = 'TransferAmount' in params ? params.TransferAmount : null;
        this.PayeeId = 'PayeeId' in params ? params.PayeeId : null;
        this.PayeeName = 'PayeeName' in params ? params.PayeeName : null;
        this.PayeeExtends = 'PayeeExtends' in params ? params.PayeeExtends : null;
        this.ReqReserved = 'ReqReserved' in params ? params.ReqReserved : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * CreateSinglePay返回参数结构体
 * @class
 */
class CreateSinglePayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
         * @type {CreateSinglePayResult || null}
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
            let obj = new CreateSinglePayResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * MigrateOrderRefund请求参数结构体
 * @class
 */
class MigrateOrderRefundRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户代码
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 支付渠道，ALIPAY对应支付宝渠道；UNIONPAY对应银联渠道
         * @type {string || null}
         */
        this.PayChannel = null;

        /**
         * 正向支付商户订单号
         * @type {string || null}
         */
        this.PayOrderId = null;

        /**
         * 退款订单号，最长64位，仅支持数字、 字母
         * @type {string || null}
         */
        this.RefundOrderId = null;

        /**
         * 退款金额，单位：分。备注：改字段必须大于0 和小于10000000000的整数。
         * @type {number || null}
         */
        this.RefundAmt = null;

        /**
         * 第三方支付机构支付交易号
         * @type {string || null}
         */
        this.ThirdChannelOrderId = null;

        /**
         * 原始支付金额，单位：分。备注：当该字段为空或者为0 时，系统会默认使用订单当 实付金额作为退款金额
         * @type {number || null}
         */
        this.PayAmt = null;

        /**
         * 接入环境。沙箱环境填 sandbox。
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * 退款原因
         * @type {string || null}
         */
        this.RefundReason = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.PayChannel = 'PayChannel' in params ? params.PayChannel : null;
        this.PayOrderId = 'PayOrderId' in params ? params.PayOrderId : null;
        this.RefundOrderId = 'RefundOrderId' in params ? params.RefundOrderId : null;
        this.RefundAmt = 'RefundAmt' in params ? params.RefundAmt : null;
        this.ThirdChannelOrderId = 'ThirdChannelOrderId' in params ? params.ThirdChannelOrderId : null;
        this.PayAmt = 'PayAmt' in params ? params.PayAmt : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.RefundReason = 'RefundReason' in params ? params.RefundReason : null;

    }
}

/**
 * 云企付-查询账户余额
 * @class
 */
class QueryOpenBankBankAccountBalanceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总余额，单位分
         * @type {string || null}
         */
        this.TotalBalance = null;

        /**
         * 昨日余额，单位分
         * @type {string || null}
         */
        this.YesterdayBalance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalBalance = 'TotalBalance' in params ? params.TotalBalance : null;
        this.YesterdayBalance = 'YesterdayBalance' in params ? params.YesterdayBalance : null;

    }
}

/**
 * QuerySinglePaymentResult接口返回响应
 * @class
 */
class QuerySinglePaymentResultData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台交易流水号，唯一
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeSerialNo = null;

        /**
         * 订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

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
         * @type {number || null}
         */
        this.TradeStatus = null;

        /**
         * 业务备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 代理商ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 代理商名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentName = null;

        /**
         * 交易状态描述。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeStatusDesc = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.TradeStatus = 'TradeStatus' in params ? params.TradeStatus : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;
        this.TradeStatusDesc = 'TradeStatusDesc' in params ? params.TradeStatusDesc : null;

    }
}

/**
 * UploadOrgFile返回参数结构体
 * @class
 */
class UploadOrgFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 上传机构文件响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {UploadFileResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new UploadFileResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryOpenBankOrderDetailReceiptInfo返回参数结构体
 * @class
 */
class QueryOpenBankOrderDetailReceiptInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankOrderDetailReceiptInfoResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankOrderDetailReceiptInfoResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAnchor请求参数结构体
 * @class
 */
class CreateAnchorRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播业务ID，唯一
         * @type {string || null}
         */
        this.AnchorUid = null;

        /**
         * 主播姓名
         * @type {string || null}
         */
        this.AnchorName = null;

        /**
         * 主播电话
_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密
         * @type {string || null}
         */
        this.AnchorPhone = null;

        /**
         * 主播邮箱
_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密
         * @type {string || null}
         */
        this.AnchorEmail = null;

        /**
         * 主播地址
_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密
         * @type {string || null}
         */
        this.AnchorAddress = null;

        /**
         * 主播身份证号
_敏感信息_ 使用 __AES128-CBC-PKCS#7__ 加密
         * @type {string || null}
         */
        this.AnchorIdNo = null;

        /**
         * 主播类型
__KMusic__:全民K歌
__QMusic__:QQ音乐
__WeChat__:微信视频号
         * @type {string || null}
         */
        this.AnchorType = null;

        /**
         * 主播扩展信息
         * @type {Array.<AnchorExtendInfo> || null}
         */
        this.AnchorExtendInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnchorUid = 'AnchorUid' in params ? params.AnchorUid : null;
        this.AnchorName = 'AnchorName' in params ? params.AnchorName : null;
        this.AnchorPhone = 'AnchorPhone' in params ? params.AnchorPhone : null;
        this.AnchorEmail = 'AnchorEmail' in params ? params.AnchorEmail : null;
        this.AnchorAddress = 'AnchorAddress' in params ? params.AnchorAddress : null;
        this.AnchorIdNo = 'AnchorIdNo' in params ? params.AnchorIdNo : null;
        this.AnchorType = 'AnchorType' in params ? params.AnchorType : null;

        if (params.AnchorExtendInfo) {
            this.AnchorExtendInfo = new Array();
            for (let z in params.AnchorExtendInfo) {
                let obj = new AnchorExtendInfo();
                obj.deserialize(params.AnchorExtendInfo[z]);
                this.AnchorExtendInfo.push(obj);
            }
        }

    }
}

/**
 * QueryExceedingInfo请求参数结构体
 * @class
 */
class QueryExceedingInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 超额日期。格式为yyyy-MM-dd。
         * @type {string || null}
         */
        this.TimeStr = null;

        /**
         * 维度。目前支持三个维度: AGENT, ANCHOR, ORDER。不填默认使用AGENT维度。
         * @type {string || null}
         */
        this.Dimension = null;

        /**
         * 分页信息。不填默认Index为1，Count为100。
         * @type {Paging || null}
         */
        this.PageNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeStr = 'TimeStr' in params ? params.TimeStr : null;
        this.Dimension = 'Dimension' in params ? params.Dimension : null;

        if (params.PageNumber) {
            let obj = new Paging();
            obj.deserialize(params.PageNumber)
            this.PageNumber = obj;
        }

    }
}

/**
 * 第三方渠道用户信息
 * @class
 */
class ExternalContractUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方用户类型，例如:  WX_OPENID, WX_SUB_OPENID,WX_PAYER_OPENID
         * @type {string || null}
         */
        this.ExternalUserType = null;

        /**
         * 第三方用户ID
         * @type {string || null}
         */
        this.ExternalUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExternalUserType = 'ExternalUserType' in params ? params.ExternalUserType : null;
        this.ExternalUserId = 'ExternalUserId' in params ? params.ExternalUserId : null;

    }
}

/**
 * 支行信息
 * @class
 */
class BankBranchInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 银行名称。
         * @type {string || null}
         */
        this.BankName = null;

        /**
         * 银行简称。
         * @type {string || null}
         */
        this.BankAbbreviation = null;

        /**
         * 支行名。
         * @type {string || null}
         */
        this.BankBranchName = null;

        /**
         * 联行号。
         * @type {string || null}
         */
        this.BankBranchId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BankName = 'BankName' in params ? params.BankName : null;
        this.BankAbbreviation = 'BankAbbreviation' in params ? params.BankAbbreviation : null;
        this.BankBranchName = 'BankBranchName' in params ? params.BankBranchName : null;
        this.BankBranchId = 'BankBranchId' in params ? params.BankBranchId : null;

    }
}

/**
 * 用户信息
 * @class
 */
class ContractUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * USER_ID: 用户ID
ANONYMOUS: 匿名类型用户ID
         * @type {string || null}
         */
        this.UserType = null;

        /**
         * 用户类型
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserType = 'UserType' in params ? params.UserType : null;
        this.UserId = 'UserId' in params ? params.UserId : null;

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
 * QueryCloudChannelData请求参数结构体
 * @class
 */
class QueryCloudChannelDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 业务订单号，外部订单号
         * @type {string || null}
         */
        this.OutOrderNo = null;

        /**
         * 数据类型
PAYMENT:支付
         * @type {string || null}
         */
        this.ExternalChannelDataType = null;

        /**
         * 环境类型
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 子应用ID
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 渠道订单号
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 渠道名称，指定渠道查询
wechat:微信支付
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.OutOrderNo = 'OutOrderNo' in params ? params.OutOrderNo : null;
        this.ExternalChannelDataType = 'ExternalChannelDataType' in params ? params.ExternalChannelDataType : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * QueryOpenBankBankAccountBalance请求参数结构体
 * @class
 */
class QueryOpenBankBankAccountBalanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云企付渠道商户号。外部接入平台入驻云企付平台后下发。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 云企付渠道子商户号。入驻在渠道商户下的子商户ID，如付款方的商户ID，对应创建支付订单中接口参数中的PayerInfo中的payerId。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式，如
__EBANK_PAYMENT__:ebank付款
__OPENBANK_PAYMENT__: openbank付款
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 绑卡序列号，银行账户唯一ID，区分多卡或多账户的场景
         * @type {string || null}
         */
        this.BindSerialNo = null;

        /**
         * 环境类型
release:生产环境
sandbox:沙箱环境
缺省默认为生产环境
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.BindSerialNo = 'BindSerialNo' in params ? params.BindSerialNo : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

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
 * DownloadReconciliationUrl请求参数结构体
 * @class
 */
class DownloadReconciliationUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台应用ID
         * @type {string || null}
         */
        this.MainAppId = null;

        /**
         * 平台代码
         * @type {string || null}
         */
        this.AppCode = null;

        /**
         * 账单日期，yyyy-MM-dd
         * @type {string || null}
         */
        this.BillDate = null;

        /**
         * 商户或者代理商ID
         * @type {string || null}
         */
        this.SubAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MainAppId = 'MainAppId' in params ? params.MainAppId : null;
        this.AppCode = 'AppCode' in params ? params.AppCode : null;
        this.BillDate = 'BillDate' in params ? params.BillDate : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;

    }
}

/**
 * CreateBatchPayment请求参数结构体
 * @class
 */
class CreateBatchPaymentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1 微信企业付款 
2 支付宝转账 
3 平安银企直连代发转账
         * @type {number || null}
         */
        this.TransferType = null;

        /**
         * 转账详情
         * @type {Array.<CreateBatchPaymentRecipient> || null}
         */
        this.RecipientList = null;

        /**
         * 请求预留字段
         * @type {string || null}
         */
        this.ReqReserved = null;

        /**
         * 回调Url
         * @type {string || null}
         */
        this.NotifyUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransferType = 'TransferType' in params ? params.TransferType : null;

        if (params.RecipientList) {
            this.RecipientList = new Array();
            for (let z in params.RecipientList) {
                let obj = new CreateBatchPaymentRecipient();
                obj.deserialize(params.RecipientList[z]);
                this.RecipientList.push(obj);
            }
        }
        this.ReqReserved = 'ReqReserved' in params ? params.ReqReserved : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;

    }
}

/**
 * CreateOpenBankExternalSubMerchantAccountBook返回参数结构体
 * @class
 */
class CreateOpenBankExternalSubMerchantAccountBookResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateExternalAccountBookResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new CreateExternalAccountBookResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
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
 * SyncContractData返回参数结构体
 * @class
 */
class SyncContractDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求处理信息
         * @type {string || null}
         */
        this.Msg = null;

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
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
 * 签约数据
 * @class
 */
class ResponseQueryContract extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方渠道错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnCode = null;

        /**
         * 第三方渠道错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnMessage = null;

        /**
         * 第三方渠道返回的原始数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExternalReturnData = null;

        /**
         * 米大师内部商户号
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 米大师内部子商户号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 米大师内部应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelAppId = null;

        /**
         * 米大师内部子应用ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ChannelSubAppId = null;

        /**
         * 渠道名称
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 返回的合约信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ReturnContractInfo || null}
         */
        this.ReturnContractInfo = null;

        /**
         * 签约通知地址
         * @type {string || null}
         */
        this.NotifyUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExternalReturnCode = 'ExternalReturnCode' in params ? params.ExternalReturnCode : null;
        this.ExternalReturnMessage = 'ExternalReturnMessage' in params ? params.ExternalReturnMessage : null;
        this.ExternalReturnData = 'ExternalReturnData' in params ? params.ExternalReturnData : null;
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelAppId = 'ChannelAppId' in params ? params.ChannelAppId : null;
        this.ChannelSubAppId = 'ChannelSubAppId' in params ? params.ChannelSubAppId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;

        if (params.ReturnContractInfo) {
            let obj = new ReturnContractInfo();
            obj.deserialize(params.ReturnContractInfo)
            this.ReturnContractInfo = obj;
        }
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;

    }
}

/**
 * DownloadOrgFile请求参数结构体
 * @class
 */
class DownloadOrgFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 存储区域（0私密区，1公共区），请严格按文件要求，上传到不同的区域
         * @type {string || null}
         */
        this.Storage = null;

        /**
         * 文件路径
         * @type {string || null}
         */
        this.FilePath = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * 签约同步信息
 * @class
 */
class ContractSyncInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方渠道合约信息
         * @type {ExternalReturnContractInfo || null}
         */
        this.ExternalReturnContractInfo = null;

        /**
         * 第三方渠道用户信息
         * @type {Array.<ExternalContractUserInfo> || null}
         */
        this.ExternalContractUserInfo = null;

        /**
         * 签约方式，枚举值，
<br/>CONTRACT_METHOD_WECHAT_INVALID: 无效
CONTRACT_METHOD_WECHAT_APP: 微信APP
CONTRACT_METHOD_WECHAT_PUBLIC: 微信公众号
CONTRACT_METHOD_WECHAT_MINIPROGRAM: 微信小程序
CONTRACT_METHOD_WECHAT_H5: 微信H5
         * @type {string || null}
         */
        this.ContractMethod = null;

        /**
         * 在米大师侧分配的场景id
         * @type {string || null}
         */
        this.ContractSceneId = null;

        /**
         * 调用方从第三方渠道查询到的签约数据，由各个渠道定义
         * @type {string || null}
         */
        this.ExternalReturnContractData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ExternalReturnContractInfo) {
            let obj = new ExternalReturnContractInfo();
            obj.deserialize(params.ExternalReturnContractInfo)
            this.ExternalReturnContractInfo = obj;
        }

        if (params.ExternalContractUserInfo) {
            this.ExternalContractUserInfo = new Array();
            for (let z in params.ExternalContractUserInfo) {
                let obj = new ExternalContractUserInfo();
                obj.deserialize(params.ExternalContractUserInfo[z]);
                this.ExternalContractUserInfo.push(obj);
            }
        }
        this.ContractMethod = 'ContractMethod' in params ? params.ContractMethod : null;
        this.ContractSceneId = 'ContractSceneId' in params ? params.ContractSceneId : null;
        this.ExternalReturnContractData = 'ExternalReturnContractData' in params ? params.ExternalReturnContractData : null;

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
 * CreateExternalAnchor接口返回参数
 * @class
 */
class CreateExternalAnchorData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播Id
         * @type {string || null}
         */
        this.AnchorId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;

    }
}

/**
 * BindOpenBankExternalSubMerchantBankAccount请求参数结构体
 * @class
 */
class BindOpenBankExternalSubMerchantBankAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户ID。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道子商户ID。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式。
__EBANK_PAYMENT__: ebank支付
__OPENBANK_PAYMENT__: openbank支付
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 第三方渠道子商户收款方银行卡信息, 为JSON格式字符串。详情见附录-复杂类型。
         * @type {string || null}
         */
        this.ExternalSubMerchantBindBankAccountData = null;

        /**
         * 外部申请编号。
         * @type {string || null}
         */
        this.OutApplyId = null;

        /**
         * 通知地址。
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 环境类型。
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.ExternalSubMerchantBindBankAccountData = 'ExternalSubMerchantBindBankAccountData' in params ? params.ExternalSubMerchantBindBankAccountData : null;
        this.OutApplyId = 'OutApplyId' in params ? params.OutApplyId : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * 云企付-分润信息
 * @class
 */
class OpenBankProfitShareInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分润接收方，渠道商户号ID
         * @type {string || null}
         */
        this.RecvId = null;

        /**
         * 分润金额，单位分
         * @type {number || null}
         */
        this.ProfitShareFee = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RecvId = 'RecvId' in params ? params.RecvId : null;
        this.ProfitShareFee = 'ProfitShareFee' in params ? params.ProfitShareFee : null;

    }
}

/**
 * MigrateOrderRefund返回参数结构体
 * @class
 */
class MigrateOrderRefundResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求成功状态
         * @type {boolean || null}
         */
        this.IsSuccess = null;

        /**
         * 退款流水号
         * @type {string || null}
         */
        this.TradeSerialNo = null;

        /**
         * 交易备注
         * @type {string || null}
         */
        this.TradeMsg = null;

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
        this.IsSuccess = 'IsSuccess' in params ? params.IsSuccess : null;
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;
        this.TradeMsg = 'TradeMsg' in params ? params.TradeMsg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TransferSinglePay返回参数结构体
 * @class
 */
class TransferSinglePayResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {TransferSinglePayData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new TransferSinglePayData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 门店信息
 * @class
 */
class CloudStoreInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 门店ID。
         * @type {string || null}
         */
        this.StoreId = null;

        /**
         * 门店名称。
         * @type {string || null}
         */
        this.StoreName = null;

        /**
         * 门店地址。
         * @type {string || null}
         */
        this.StoreAddress = null;

        /**
         * 门店地区代码。
         * @type {string || null}
         */
        this.StoreAreaCode = null;

        /**
         * 设备ID。
wechat_ecommerce渠道 - h5支付方式，此字段必填。
         * @type {string || null}
         */
        this.StoreDeviceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StoreId = 'StoreId' in params ? params.StoreId : null;
        this.StoreName = 'StoreName' in params ? params.StoreName : null;
        this.StoreAddress = 'StoreAddress' in params ? params.StoreAddress : null;
        this.StoreAreaCode = 'StoreAreaCode' in params ? params.StoreAreaCode : null;
        this.StoreDeviceId = 'StoreDeviceId' in params ? params.StoreDeviceId : null;

    }
}

/**
 * ContractOrder返回参数结构体
 * @class
 */
class ContractOrderResponse extends  AbstractModel {
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
         * 聚鑫的交易订单号
         * @type {string || null}
         */
        this.TransactionId = null;

        /**
         * 外部签约协议号
         * @type {string || null}
         */
        this.OutContractCode = null;

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
        this.OutContractCode = 'OutContractCode' in params ? params.OutContractCode : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

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
 * QueryOpenBankBankAccountBalance返回参数结构体
 * @class
 */
class QueryOpenBankBankAccountBalanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，SUCCESS表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 账户余额查询响应对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankBankAccountBalanceResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankBankAccountBalanceResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ViewMerchant返回参数结构体
 * @class
 */
class ViewMerchantResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 商户明细响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ViewMerchantResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new ViewMerchantResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddShop返回参数结构体
 * @class
 */
class AddShopResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 添加申请响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AddShopResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new AddShopResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UploadFile返回参数结构体
 * @class
 */
class UploadFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文件ID
         * @type {string || null}
         */
        this.FileId = null;

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
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 聚鑫-查询会员间交易信息列表结果
 * @class
 */
class QueryMemberTransactionDetailsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 本次交易返回查询结果记录数。
         * @type {number || null}
         */
        this.ResultCount = null;

        /**
         * 符合业务查询条件的记录总数。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 结束标志。
__0__：否
__1__：是
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.EndFlag = null;

        /**
         * 会员间交易信息数组
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MemberTransactionItem> || null}
         */
        this.TranItemArray = null;

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
        this.EndFlag = 'EndFlag' in params ? params.EndFlag : null;

        if (params.TranItemArray) {
            this.TranItemArray = new Array();
            for (let z in params.TranItemArray) {
                let obj = new MemberTransactionItem();
                obj.deserialize(params.TranItemArray[z]);
                this.TranItemArray.push(obj);
            }
        }

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
 * CreateTransferBatch请求参数结构体
 * @class
 */
class CreateTransferBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号。
示例值：129284394
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 转账明细列表。
发起批量转账的明细列表，最多三千笔
         * @type {Array.<TransferDetailRequest> || null}
         */
        this.TransferDetails = null;

        /**
         * 直连商户appId。
即商户号绑定的appid。
示例值：wxf636efh567hg4356
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
         * @type {string || null}
         */
        this.MerchantBatchNo = null;

        /**
         * 批次名称。
批量转账的名称。
示例值：2019年1月深圳分部报销单
         * @type {string || null}
         */
        this.BatchName = null;

        /**
         * 转账说明。
UTF8编码，最多32个字符。
示例值：2019年深圳分部报销单
         * @type {string || null}
         */
        this.BatchRemark = null;

        /**
         * 转账总金额。
转账金额，单位为分。
示例值：4000000
         * @type {number || null}
         */
        this.TotalAmount = null;

        /**
         * 转账总笔数。
一个转账批次最多允许发起三千笔转账。
示例值：200
         * @type {number || null}
         */
        this.TotalNum = null;

        /**
         * 环境名。
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
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
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;

        if (params.TransferDetails) {
            this.TransferDetails = new Array();
            for (let z in params.TransferDetails) {
                let obj = new TransferDetailRequest();
                obj.deserialize(params.TransferDetails[z]);
                this.TransferDetails.push(obj);
            }
        }
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.MerchantBatchNo = 'MerchantBatchNo' in params ? params.MerchantBatchNo : null;
        this.BatchName = 'BatchName' in params ? params.BatchName : null;
        this.BatchRemark = 'BatchRemark' in params ? params.BatchRemark : null;
        this.TotalAmount = 'TotalAmount' in params ? params.TotalAmount : null;
        this.TotalNum = 'TotalNum' in params ? params.TotalNum : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * QueryCityCode请求参数结构体
 * @class
 */
class QueryCityCodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * CreateOrder请求参数结构体
 * @class
 */
class CreateOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道编号。ZSB2B：招商银行B2B。
         * @type {string || null}
         */
        this.ChannelCode = null;

        /**
         * 进件成功后返给商户方的 AppId。
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 交易金额。单位：元
         * @type {string || null}
         */
        this.Amount = null;

        /**
         * 商户流水号。商户唯一订单号由字母或数字组成。
         * @type {string || null}
         */
        this.TraceNo = null;

        /**
         * 通知地址。商户接收交易结果的通知地址。
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * 返回地址。支付成功后，页面将跳 转返回到商户的该地址。
         * @type {string || null}
         */
        this.ReturnUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelCode = 'ChannelCode' in params ? params.ChannelCode : null;
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.TraceNo = 'TraceNo' in params ? params.TraceNo : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.ReturnUrl = 'ReturnUrl' in params ? params.ReturnUrl : null;

    }
}

/**
 * ModifyBindedAccount请求参数结构体
 * @class
 */
class ModifyBindedAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播Id
         * @type {string || null}
         */
        this.AnchorId = null;

        /**
         * 1 微信企业付款 
2 支付宝转账 
3 平安银企直连代发转账
         * @type {number || null}
         */
        this.TransferType = null;

        /**
         * 收款方标识。
微信为open_id；
支付宝为会员alipay_user_id;
平安为收款方银行账号;
         * @type {string || null}
         */
        this.AccountNo = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.PhoneNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.TransferType = 'TransferType' in params ? params.TransferType : null;
        this.AccountNo = 'AccountNo' in params ? params.AccountNo : null;
        this.PhoneNum = 'PhoneNum' in params ? params.PhoneNum : null;

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
 * CreateSinglePayment请求参数结构体
 * @class
 */
class CreateSinglePaymentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转账类型
         * @type {number || null}
         */
        this.TransferType = null;

        /**
         * 订单流水号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 转账金额
         * @type {number || null}
         */
        this.TransferAmount = null;

        /**
         * 主播ID（与主播业务ID不能同时为空，两者都填取主播ID）
         * @type {string || null}
         */
        this.AnchorId = null;

        /**
         * 请求预留字段，原样透传返回
         * @type {string || null}
         */
        this.ReqReserved = null;

        /**
         * 业务备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 主播名称。如果该字段填入，则会对AnchorName和AnchorId/Uid进行校验。
         * @type {string || null}
         */
        this.AnchorName = null;

        /**
         * 主播业务ID（与主播ID不能同时为空，两者都填取主播ID）
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 转账结果回调通知URL。若不填，则不进行回调。
         * @type {string || null}
         */
        this.NotifyUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransferType = 'TransferType' in params ? params.TransferType : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.TransferAmount = 'TransferAmount' in params ? params.TransferAmount : null;
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.ReqReserved = 'ReqReserved' in params ? params.ReqReserved : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.AnchorName = 'AnchorName' in params ? params.AnchorName : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;

    }
}

/**
 * 会员间交易明细信息
 * @class
 */
class MemberTransactionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * 交易类型。
__1__：转出
__2__：转入
         * @type {string || null}
         */
        this.TransType = null;

        /**
         * 交易状态。
__0__：成功
         * @type {string || null}
         */
        this.TranStatus = null;

        /**
         * 交易金额。
         * @type {string || null}
         */
        this.TransAmount = null;

        /**
         * 交易日期，格式：yyyyMMdd。
         * @type {string || null}
         */
        this.TransDate = null;

        /**
         * 交易时间，格式：HHmmss。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TransTime = null;

        /**
         * 银行系统流水号。
_平安渠道为见证系统流水号_
         * @type {string || null}
         */
        this.BankSequenceNumber = null;

        /**
         * 银行记账类型。
_平安渠道为：_
_1：会员支付_
_2：会员冻结_
_3：会员解冻_
_4：登记挂账_
_6：下单预支付_
_7：确认并付款_
_8：会员退款_
_22：见证+收单平台调账_
_23：见证+收单资金冻结_
_24：见证+收单资金解冻_
_25：会员间交易退款_
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BankBookingType = null;

        /**
         * 转入方子账户账号。
_平安渠道为转入见证子账户的账号_
         * @type {string || null}
         */
        this.InSubAccountNumber = null;

        /**
         * 转出方子账户账号。
_平安渠道为转出见证子账户的账号_
         * @type {string || null}
         */
        this.OutSubAccountNumber = null;

        /**
         * 备注。
_平安渠道，如果是见证+收单的交易，返回交易订单号_
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
        this.TransType = 'TransType' in params ? params.TransType : null;
        this.TranStatus = 'TranStatus' in params ? params.TranStatus : null;
        this.TransAmount = 'TransAmount' in params ? params.TransAmount : null;
        this.TransDate = 'TransDate' in params ? params.TransDate : null;
        this.TransTime = 'TransTime' in params ? params.TransTime : null;
        this.BankSequenceNumber = 'BankSequenceNumber' in params ? params.BankSequenceNumber : null;
        this.BankBookingType = 'BankBookingType' in params ? params.BankBookingType : null;
        this.InSubAccountNumber = 'InSubAccountNumber' in params ? params.InSubAccountNumber : null;
        this.OutSubAccountNumber = 'OutSubAccountNumber' in params ? params.OutSubAccountNumber : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 分账接收方响应对象
 * @class
 */
class DistributeReceiverResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;

    }
}

/**
 * DistributeApply请求参数结构体
 * @class
 */
class DistributeApplyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 使用门店OpenId
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 使用门店OpenKey
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 商户分账单号
         * @type {string || null}
         */
        this.OutDistributeNo = null;

        /**
         * 分账明细
         * @type {Array.<MultiApplyDetail> || null}
         */
        this.Details = null;

        /**
         * 商户交易订单号，和OrderNo二者传其一
         * @type {string || null}
         */
        this.DeveloperNo = null;

        /**
         * 平台交易订单号，和DeveloperNo二者传其一
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 说明
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.OutDistributeNo = 'OutDistributeNo' in params ? params.OutDistributeNo : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new MultiApplyDetail();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }
        this.DeveloperNo = 'DeveloperNo' in params ? params.DeveloperNo : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

    }
}

/**
 * ViewShop请求参数结构体
 * @class
 */
class ViewShopRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 收单系统分配的开放ID
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 收单系统分配的密钥
         * @type {string || null}
         */
        this.OpenKey = null;

        /**
         * 外部商户主键编号（ShopNo或OutShopId必须传一个）
         * @type {string || null}
         */
        this.OutShopId = null;

        /**
         * 门店编号（ShopNo或OutShopId必须传一个）
         * @type {string || null}
         */
        this.ShopNo = null;

        /**
         * 沙箱环境填sandbox，正式环境不填
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
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.OpenKey = 'OpenKey' in params ? params.OpenKey : null;
        this.OutShopId = 'OutShopId' in params ? params.OutShopId : null;
        this.ShopNo = 'ShopNo' in params ? params.ShopNo : null;
        this.Profile = 'Profile' in params ? params.Profile : null;

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
 * 分账授权申请查询响应对象
 * @class
 */
class DistributeAccreditQueryResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 状态（0-未开通，1-已开通，2-商户主动关闭，3-待审核，4-冻结，5-注销，6-待签合同）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 合同h5地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractUrl = null;

        /**
         * 说明
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
        this.Status = 'Status' in params ? params.Status : null;
        this.ContractUrl = 'ContractUrl' in params ? params.ContractUrl : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * QueryShopOpenId返回参数结构体
 * @class
 */
class QueryShopOpenIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 获取门店OpenId响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryShopOpenIdResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new QueryShopOpenIdResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
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
         * 短信验证码或指令号
BindType==2必填，平安渠道必填
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
 * ApplyReconciliationFile返回参数结构体
 * @class
 */
class ApplyReconciliationFileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {ApplyReconciliationFileResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new ApplyReconciliationFileResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 合同-支付方式列表响应对象
 * @class
 */
class ContractPayListResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支付方式编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentId = null;

        /**
         * 支持的交易类型（多个以小写逗号分开，0现金，1刷卡，2主扫，3被扫，4JSPAY，5预授权）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentType = null;

        /**
         * 支付标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentTag = null;

        /**
         * 支付方式图片url路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentIcon = null;

        /**
         * 付款方式名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentName = null;

        /**
         * 付款方式名称（内部名称）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentInternalName = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionOne = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionTwo = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionThree = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionFour = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionFive = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionSix = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionSeven = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionOther = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionNine = null;

        /**
         * 支付方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PaymentOptionTen = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PaymentId = 'PaymentId' in params ? params.PaymentId : null;
        this.PaymentType = 'PaymentType' in params ? params.PaymentType : null;
        this.PaymentTag = 'PaymentTag' in params ? params.PaymentTag : null;
        this.PaymentIcon = 'PaymentIcon' in params ? params.PaymentIcon : null;
        this.PaymentName = 'PaymentName' in params ? params.PaymentName : null;
        this.PaymentInternalName = 'PaymentInternalName' in params ? params.PaymentInternalName : null;
        this.PaymentOptionOne = 'PaymentOptionOne' in params ? params.PaymentOptionOne : null;
        this.PaymentOptionTwo = 'PaymentOptionTwo' in params ? params.PaymentOptionTwo : null;
        this.PaymentOptionThree = 'PaymentOptionThree' in params ? params.PaymentOptionThree : null;
        this.PaymentOptionFour = 'PaymentOptionFour' in params ? params.PaymentOptionFour : null;
        this.PaymentOptionFive = 'PaymentOptionFive' in params ? params.PaymentOptionFive : null;
        this.PaymentOptionSix = 'PaymentOptionSix' in params ? params.PaymentOptionSix : null;
        this.PaymentOptionSeven = 'PaymentOptionSeven' in params ? params.PaymentOptionSeven : null;
        this.PaymentOptionOther = 'PaymentOptionOther' in params ? params.PaymentOptionOther : null;
        this.PaymentOptionNine = 'PaymentOptionNine' in params ? params.PaymentOptionNine : null;
        this.PaymentOptionTen = 'PaymentOptionTen' in params ? params.PaymentOptionTen : null;

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
 * 米大师内部存放的合约信息
 * @class
 */
class ChannelContractInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部合约协议号
         * @type {string || null}
         */
        this.OutContractCode = null;

        /**
         * 米大师内部生成的合约协议号
         * @type {string || null}
         */
        this.ChannelContractCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutContractCode = 'OutContractCode' in params ? params.OutContractCode : null;
        this.ChannelContractCode = 'ChannelContractCode' in params ? params.ChannelContractCode : null;

    }
}

/**
 * CreateAnchor返回参数结构体
 * @class
 */
class CreateAnchorResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 主播ID
         * @type {string || null}
         */
        this.AnchorId = null;

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
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UnifiedCloudOrder请求参数结构体
 * @class
 */
class UnifiedCloudOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师分配的支付主MidasAppId
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 用户ID
长度不小于5位，仅支持字母和数字的组合，长度限制以具体接入渠道为准
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 开发者主订单号
支付订单号，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合，长度供参考，部分渠道存在长度更短的情况接入时请联系开发咨询
         * @type {string || null}
         */
        this.OutTradeNo = null;

        /**
         * 货币类型
ISO货币代码，CNY
         * @type {string || null}
         */
        this.CurrencyType = null;

        /**
         * 商品ID
业务自定义的商品id，仅支持数字、字母、下划线（_）、横杠字符（-）、点（.）的组合。
         * @type {string || null}
         */
        this.ProductId = null;

        /**
         * 商品名称
业务自定义的商品名称，无需URL编码，长度限制以具体所接入渠道为准。
         * @type {string || null}
         */
        this.ProductName = null;

        /**
         * 商品详情
业务自定义的商品详情，无需URL编码，长度限制以具体所接入渠道为准。
         * @type {string || null}
         */
        this.ProductDetail = null;

        /**
         * 原始金额
单位：分，需要注意的是，OriginalAmt>=TotalAmt
         * @type {number || null}
         */
        this.OriginalAmt = null;

        /**
         * 支付金额
单位：分，需要注意的是，TotalAmt=TotalPlatformIncome+TotalMchIncome。
         * @type {number || null}
         */
        this.TotalAmt = null;

        /**
         * 环境类型
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 支付SubAppId
米大师计费SubAppId，代表子商户。指定使用该商户的商户号下单时必传。
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 顶层支付渠道
银行收单:
openbank_ccb: 建设银行
openbank_icbc: 工商银行
openbank_cmb: 招商银行
openbank_ping: 平安银行
openbank_icbc_jft：工商银行聚付通
非银行收单，可以为空
         * @type {string || null}
         */
        this.RealChannel = null;

        /**
         * 支付渠道
wechat：微信支付
wechat_ecommerce: 微信电商收付通
open_alipay: 支付宝
open_quickpass: 银联云闪付
icbc_epay: 工银e支付
foreign_cardpay: 外卡支付
icbc_jft_wechat: 工行聚付通-微信
icbc_jft_alipay: 工行聚付通-支付宝
icbc_jft_epay: 工行聚付通-e支付
指定渠道下单时必传
         * @type {string || null}
         */
        this.Channel = null;

        /**
         * 透传字段
支付成功回调透传给应用，用于开发者透传自定义内容。
         * @type {string || null}
         */
        this.Metadata = null;

        /**
         * 数量
购买数量,不传默认为1。
         * @type {number || null}
         */
        this.Quantity = null;

        /**
         * Web端回调地址
Web端网页回调地址，仅当Web端SDK使用页面跳转方式时有效。
         * @type {string || null}
         */
        this.CallbackUrl = null;

        /**
         * 支付取消地址
         * @type {string || null}
         */
        this.CancelUrl = null;

        /**
         * 微信AppId
wechat渠道或wchat_ecommerce渠道可以指定下单时的wxappid。
         * @type {string || null}
         */
        this.WxAppId = null;

        /**
         * 微信SubAppId
wechat渠道可以指定下单时的sub_appid。
         * @type {string || null}
         */
        this.WxSubAppId = null;

        /**
         * 微信公众号/小程序OpenId
微信公众号/小程序支付时为必选，需要传微信下的openid。
         * @type {string || null}
         */
        this.WxOpenId = null;

        /**
         * 微信公众号/小程序SubOpenId
在服务商模式下，微信公众号/小程序支付时wx_sub_openid和wx_openid二选一。
         * @type {string || null}
         */
        this.WxSubOpenId = null;

        /**
         * 平台应收金额
单位：分，需要注意的是，TotalAmt=TotalPlatformIncome+TotalMchIncome
         * @type {number || null}
         */
        this.TotalPlatformIncome = null;

        /**
         * 结算应收金额
单位：分，需要注意的是，TotalAmt=TotalPlatformIncome+TotalMchIncome
         * @type {number || null}
         */
        this.TotalMchIncome = null;

        /**
         * 子订单列表
格式：子订单号、子应用Id、金额。压缩后最长不可超过32K字节(去除空格，换行，制表符等无意义字符)。
         * @type {Array.<CloudSubOrder> || null}
         */
        this.SubOrderList = null;

        /**
         * 结算信息
例如是否需要分账、是否需要支付确认等，
注意：如果子单列表中传入了SettleInfo，在主单中不可再传入SettleInfo字段。
         * @type {CloudSettleInfo || null}
         */
        this.SettleInfo = null;

        /**
         * 附加项信息列表
例如溢价信息、抵扣信息、积分信息、补贴信息
通过该字段可以实现渠道方的优惠抵扣补贴等营销功能
注意：当传SubOrderList时，请在子单信息中传附加项信息，不要在主单中传该字段。
         * @type {Array.<CloudAttachmentInfo> || null}
         */
        this.AttachmentInfoList = null;

        /**
         * 支付通知地址
调用方可通过该字段传入自定义支付通知地址。
         * @type {string || null}
         */
        this.PaymentNotifyUrl = null;

        /**
         * 支付场景
需要结合 RealChannel和Channel字段使用可选值:
wechat-app 微信APP支付方式
wechat-mini 微信小程序支付，示例：当 RealChannel=wechat Channel=wechat PayScene=wechat-mini时，内部会直接以小程序方式调用微信统一下单接口。
         * @type {string || null}
         */
        this.PayScene = null;

        /**
         * 语言代码
取值请参考[ISO 639-1代码表](https://zh.wikipedia.org/zh-cn/ISO_639-1%E4%BB%A3%E7%A0%81%E8%A1%A8)
         * @type {string || null}
         */
        this.LocaleCode = null;

        /**
         * 地区代码
取值请参考[ISO 3166-1二位字母代码表](https://zh.wikipedia.org/zh-cn/ISO_3166-1%E4%BA%8C%E4%BD%8D%E5%AD%97%E6%AF%8D%E4%BB%A3%E7%A0%81#%E6%AD%A3%E5%BC%8F%E5%88%86%E9%85%8D%E4%BB%A3%E7%A0%81)
         * @type {string || null}
         */
        this.RegionCode = null;

        /**
         * 用户IP
请求用户的IP地址，特定的渠道或特定的支付方式，此字段为必填
wechat_ecommerce渠道 - h5支付方式，此字段必填。
         * @type {string || null}
         */
        this.UserClientIp = null;

        /**
         * 渠道订单号生成模式
枚举值。决定请求渠道方时的订单号的生成模式，详情请联系米大师沟通。不指定时默认为由米大师自行生成。
         * @type {string || null}
         */
        this.ChannelOrderIdMode = null;

        /**
         * 全局支付时间信息
         * @type {CloudGlobalPayTimeInfo || null}
         */
        this.GlobalPayTimeInfo = null;

        /**
         * 渠道应用ID取用方式
USE_APPID 使用渠道应用Id;
USE_SUB_APPID 使用子渠道应用Id;
USE_APPID_AND_SUB_APPID 既使用渠道应用Id也使用子渠道应用ID。
         * @type {string || null}
         */
        this.ChannelAppIdPolicy = null;

        /**
         * 门店信息
特定的渠道或特定的支付方式，此字段为必填
wechat_ecommerce渠道 - h5支付方式，此字段必填
         * @type {CloudStoreInfo || null}
         */
        this.StoreInfo = null;

        /**
         * 客户端信息
特定的渠道或特定的支付方式，此字段为必填
wechat_ecommerce渠道 - h5支付方式，此字段必填
         * @type {CloudClientInfo || null}
         */
        this.ClientInfo = null;

        /**
         * 渠道扩展促销列表
可将各个渠道的促销信息放于该列表。
         * @type {Array.<CloudExternalPromptGroup> || null}
         */
        this.ExternalPromptGroupList = null;

        /**
         * 收单模式
ORDER_RECEIVE_MODE_COMMON - 普通支付
ORDER_RECEIVE_MODE_COMBINE - 合单支付
ORDER_RECEIVE_MODE_V_COMBINE - 虚拟合单支付
若不传入该字段，则会根据是否传入子单来判断是 普通支付 还是 合单支付
         * @type {string || null}
         */
        this.OrderReceiveMode = null;

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
        this.OutTradeNo = 'OutTradeNo' in params ? params.OutTradeNo : null;
        this.CurrencyType = 'CurrencyType' in params ? params.CurrencyType : null;
        this.ProductId = 'ProductId' in params ? params.ProductId : null;
        this.ProductName = 'ProductName' in params ? params.ProductName : null;
        this.ProductDetail = 'ProductDetail' in params ? params.ProductDetail : null;
        this.OriginalAmt = 'OriginalAmt' in params ? params.OriginalAmt : null;
        this.TotalAmt = 'TotalAmt' in params ? params.TotalAmt : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.RealChannel = 'RealChannel' in params ? params.RealChannel : null;
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.Metadata = 'Metadata' in params ? params.Metadata : null;
        this.Quantity = 'Quantity' in params ? params.Quantity : null;
        this.CallbackUrl = 'CallbackUrl' in params ? params.CallbackUrl : null;
        this.CancelUrl = 'CancelUrl' in params ? params.CancelUrl : null;
        this.WxAppId = 'WxAppId' in params ? params.WxAppId : null;
        this.WxSubAppId = 'WxSubAppId' in params ? params.WxSubAppId : null;
        this.WxOpenId = 'WxOpenId' in params ? params.WxOpenId : null;
        this.WxSubOpenId = 'WxSubOpenId' in params ? params.WxSubOpenId : null;
        this.TotalPlatformIncome = 'TotalPlatformIncome' in params ? params.TotalPlatformIncome : null;
        this.TotalMchIncome = 'TotalMchIncome' in params ? params.TotalMchIncome : null;

        if (params.SubOrderList) {
            this.SubOrderList = new Array();
            for (let z in params.SubOrderList) {
                let obj = new CloudSubOrder();
                obj.deserialize(params.SubOrderList[z]);
                this.SubOrderList.push(obj);
            }
        }

        if (params.SettleInfo) {
            let obj = new CloudSettleInfo();
            obj.deserialize(params.SettleInfo)
            this.SettleInfo = obj;
        }

        if (params.AttachmentInfoList) {
            this.AttachmentInfoList = new Array();
            for (let z in params.AttachmentInfoList) {
                let obj = new CloudAttachmentInfo();
                obj.deserialize(params.AttachmentInfoList[z]);
                this.AttachmentInfoList.push(obj);
            }
        }
        this.PaymentNotifyUrl = 'PaymentNotifyUrl' in params ? params.PaymentNotifyUrl : null;
        this.PayScene = 'PayScene' in params ? params.PayScene : null;
        this.LocaleCode = 'LocaleCode' in params ? params.LocaleCode : null;
        this.RegionCode = 'RegionCode' in params ? params.RegionCode : null;
        this.UserClientIp = 'UserClientIp' in params ? params.UserClientIp : null;
        this.ChannelOrderIdMode = 'ChannelOrderIdMode' in params ? params.ChannelOrderIdMode : null;

        if (params.GlobalPayTimeInfo) {
            let obj = new CloudGlobalPayTimeInfo();
            obj.deserialize(params.GlobalPayTimeInfo)
            this.GlobalPayTimeInfo = obj;
        }
        this.ChannelAppIdPolicy = 'ChannelAppIdPolicy' in params ? params.ChannelAppIdPolicy : null;

        if (params.StoreInfo) {
            let obj = new CloudStoreInfo();
            obj.deserialize(params.StoreInfo)
            this.StoreInfo = obj;
        }

        if (params.ClientInfo) {
            let obj = new CloudClientInfo();
            obj.deserialize(params.ClientInfo)
            this.ClientInfo = obj;
        }

        if (params.ExternalPromptGroupList) {
            this.ExternalPromptGroupList = new Array();
            for (let z in params.ExternalPromptGroupList) {
                let obj = new CloudExternalPromptGroup();
                obj.deserialize(params.ExternalPromptGroupList[z]);
                this.ExternalPromptGroupList.push(obj);
            }
        }
        this.OrderReceiveMode = 'OrderReceiveMode' in params ? params.OrderReceiveMode : null;

    }
}

/**
 * 商户风险信息
 * @class
 */
class MerchantRiskInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意注册等级，0-9级，9级最高
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.RiskLevel = null;

        /**
         * 恶意注册代码，代码以|分割，如"G001|T002"
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RiskTypes = 'RiskTypes' in params ? params.RiskTypes : null;

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
 * 查询订单付款状态响应对象
 * @class
 */
class QueryOrderStatusResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付款订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 开发者流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeveloperNo = null;

        /**
         * 交易优惠金额（免充值券）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeDiscountAmount = null;

        /**
         * 付款方式名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * 商户流水号（从1开始自增长不重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderMerchantId = null;

        /**
         * 交易帐号（银行卡号、支付宝帐号、微信帐号等，某些收单机构没有此数据）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeAccount = null;

        /**
         * 实际交易金额（以分为单位，没有小数点）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeAmount = null;

        /**
         * 币种签名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurrencySign = null;

        /**
         * 付款完成时间（以收单机构为准）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradePayTime = null;

        /**
         * 门店流水号（从1开始自增长不重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopOrderId = null;

        /**
         * 支付标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayTag = null;

        /**
         * 订单状态（1交易成功，2待支付，4已取消，9等待用户输入密码确认
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 币种代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderCurrency = null;

        /**
         * 二维码字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeQrcode = null;

        /**
         * 开始交易时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeTime = null;

        /**
         * 折扣金额（以分为单位，没有小数点）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DiscountAmount = null;

        /**
         * 商户号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.MerchantNo = null;

        /**
         * 订单备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 订单标题
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderName = null;

        /**
         * 原始金额（以分为单位，没有小数点）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalAmount = null;

        /**
         * 门店编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopNo = null;

        /**
         * 收单机构原始交易数据，如果返回非标准json数据，请自行转换
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeResult = null;

        /**
         * 订单流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 订单类型（1消费，2辙单）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderType = null;

        /**
         * 收单机构交易号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeNo = null;

        /**
         * 原始订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OriginalOrderNo = null;

        /**
         * 订单标记，订单附加数据
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 下单时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AddTime = null;

        /**
         * 收银员编号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CashierId = null;

        /**
         * 收银员名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CashierRealName = null;

        /**
         * 店铺全称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopFullName = null;

        /**
         * 店铺名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.DeveloperNo = 'DeveloperNo' in params ? params.DeveloperNo : null;
        this.TradeDiscountAmount = 'TradeDiscountAmount' in params ? params.TradeDiscountAmount : null;
        this.PayName = 'PayName' in params ? params.PayName : null;
        this.OrderMerchantId = 'OrderMerchantId' in params ? params.OrderMerchantId : null;
        this.TradeAccount = 'TradeAccount' in params ? params.TradeAccount : null;
        this.TradeAmount = 'TradeAmount' in params ? params.TradeAmount : null;
        this.CurrencySign = 'CurrencySign' in params ? params.CurrencySign : null;
        this.TradePayTime = 'TradePayTime' in params ? params.TradePayTime : null;
        this.ShopOrderId = 'ShopOrderId' in params ? params.ShopOrderId : null;
        this.PayTag = 'PayTag' in params ? params.PayTag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderCurrency = 'OrderCurrency' in params ? params.OrderCurrency : null;
        this.TradeQrcode = 'TradeQrcode' in params ? params.TradeQrcode : null;
        this.TradeTime = 'TradeTime' in params ? params.TradeTime : null;
        this.DiscountAmount = 'DiscountAmount' in params ? params.DiscountAmount : null;
        this.MerchantNo = 'MerchantNo' in params ? params.MerchantNo : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.OrderName = 'OrderName' in params ? params.OrderName : null;
        this.OriginalAmount = 'OriginalAmount' in params ? params.OriginalAmount : null;
        this.ShopNo = 'ShopNo' in params ? params.ShopNo : null;
        this.TradeResult = 'TradeResult' in params ? params.TradeResult : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.TradeNo = 'TradeNo' in params ? params.TradeNo : null;
        this.OriginalOrderNo = 'OriginalOrderNo' in params ? params.OriginalOrderNo : null;
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.AddTime = 'AddTime' in params ? params.AddTime : null;
        this.CashierId = 'CashierId' in params ? params.CashierId : null;
        this.CashierRealName = 'CashierRealName' in params ? params.CashierRealName : null;
        this.ShopFullName = 'ShopFullName' in params ? params.ShopFullName : null;
        this.ShopName = 'ShopName' in params ? params.ShopName : null;

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
 * QueryMerchantClassification返回参数结构体
 * @class
 */
class QueryMerchantClassificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 查询商户分类响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<MerchantClassificationId> || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            this.Result = new Array();
            for (let z in params.Result) {
                let obj = new MerchantClassificationId();
                obj.deserialize(params.Result[z]);
                this.Result.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 场景信息
 * @class
 */
class SceneInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语言代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LocaleCode = null;

        /**
         * 地区代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RegionCode = null;

        /**
         * 用户IP
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserClientIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LocaleCode = 'LocaleCode' in params ? params.LocaleCode : null;
        this.RegionCode = 'RegionCode' in params ? params.RegionCode : null;
        this.UserClientIp = 'UserClientIp' in params ? params.UserClientIp : null;

    }
}

/**
 * QueryContract返回参数结构体
 * @class
 */
class QueryContractResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签约数据
         * @type {ResponseQueryContract || null}
         */
        this.ContractData = null;

        /**
         * 请求处理信息
         * @type {string || null}
         */
        this.Msg = null;

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

        if (params.ContractData) {
            let obj = new ResponseQueryContract();
            obj.deserialize(params.ContractData)
            this.ContractData = obj;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
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
 * RefundOrder返回参数结构体
 * @class
 */
class RefundOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进件成功后返给商户方的AppId
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 平台流水号。消费订单发起成功后，返回的平台唯一订单号。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 订单退款状态。0-退款失败
1-退款成功 
2-可疑状态
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 订单退款状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Description = null;

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
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
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
 * UploadTaxList请求参数结构体
 * @class
 */
class UploadTaxListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台渠道
         * @type {number || null}
         */
        this.Channel = null;

        /**
         * 起始月份，YYYY-MM
         * @type {string || null}
         */
        this.BeginMonth = null;

        /**
         * 结束月份。如果只上传一个月，结束月份等于起始月份
         * @type {string || null}
         */
        this.EndMonth = null;

        /**
         * 完税列表下载地址
         * @type {string || null}
         */
        this.FileUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Channel = 'Channel' in params ? params.Channel : null;
        this.BeginMonth = 'BeginMonth' in params ? params.BeginMonth : null;
        this.EndMonth = 'EndMonth' in params ? params.EndMonth : null;
        this.FileUrl = 'FileUrl' in params ? params.FileUrl : null;

    }
}

/**
 * 结算信息对象
 * @class
 */
class CloudSettleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否需要支付确认。
0: 不需要支付确认
1: 需要支付确认
传1时，需要在支付完成后成功调用了《支付确认》接口，该笔订单才会被清分出去
         * @type {number || null}
         */
        this.NeedToBeConfirmed = null;

        /**
         * 是否指定分账。
0: 不指定分账
1: 指定分账
         * @type {number || null}
         */
        this.ProfitSharing = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NeedToBeConfirmed = 'NeedToBeConfirmed' in params ? params.NeedToBeConfirmed : null;
        this.ProfitSharing = 'ProfitSharing' in params ? params.ProfitSharing : null;

    }
}

/**
 * 签约信息
 * @class
 */
class RegisterInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 法人证件号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LegalPersonIdCode = null;

        /**
         * 法人证件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LegalPersonIdType = null;

        /**
         * 法人名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LegalPersonName = null;

        /**
         * 公司证件号码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationCode = null;

        /**
         * 公司名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationName = null;

        /**
         * 公司证件类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrganizationType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LegalPersonIdCode = 'LegalPersonIdCode' in params ? params.LegalPersonIdCode : null;
        this.LegalPersonIdType = 'LegalPersonIdType' in params ? params.LegalPersonIdType : null;
        this.LegalPersonName = 'LegalPersonName' in params ? params.LegalPersonName : null;
        this.OrganizationCode = 'OrganizationCode' in params ? params.OrganizationCode : null;
        this.OrganizationName = 'OrganizationName' in params ? params.OrganizationName : null;
        this.OrganizationType = 'OrganizationType' in params ? params.OrganizationType : null;

    }
}

/**
 * QueryOpenBankPaymentOrder返回参数结构体
 * @class
 */
class QueryOpenBankPaymentOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，SUCCESS表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 查询支付结果响应对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryOpenBankPaymentOrderResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryOpenBankPaymentOrderResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryMaliciousRegistration请求参数结构体
 * @class
 */
class QueryMaliciousRegistrationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户ID，调用方使用的商户号信息，与商户主体一一对应
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 商户名称
         * @type {string || null}
         */
        this.MerchantName = null;

        /**
         * 企业工商注册标准名称
         * @type {string || null}
         */
        this.CompanyName = null;

        /**
         * 注册地址
         * @type {string || null}
         */
        this.RegAddress = null;

        /**
         * 商户进件Unix时间，单位秒（非企业注册工商时间)
         * @type {number || null}
         */
        this.RegTime = null;

        /**
         * 统一社会信用代码
         * @type {string || null}
         */
        this.USCI = null;

        /**
         * 工商注册码，匹配优先级为Usci>RegNumber>CompanyName
         * @type {string || null}
         */
        this.RegNumber = null;

        /**
         * 手机号码32位MD5加密结果，全大写，格式为0086-13812345678
         * @type {string || null}
         */
        this.EncryptedPhoneNumber = null;

        /**
         * 邮箱32位MD5加密结果，全大写
         * @type {string || null}
         */
        this.EncryptedEmailAddress = null;

        /**
         * 身份证MD5加密结果，最后一位x大写
         * @type {string || null}
         */
        this.EncryptedPersonId = null;

        /**
         * 填写信息设备的IP地址
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * 进件渠道号，客户自行编码即可
         * @type {string || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.MerchantName = 'MerchantName' in params ? params.MerchantName : null;
        this.CompanyName = 'CompanyName' in params ? params.CompanyName : null;
        this.RegAddress = 'RegAddress' in params ? params.RegAddress : null;
        this.RegTime = 'RegTime' in params ? params.RegTime : null;
        this.USCI = 'USCI' in params ? params.USCI : null;
        this.RegNumber = 'RegNumber' in params ? params.RegNumber : null;
        this.EncryptedPhoneNumber = 'EncryptedPhoneNumber' in params ? params.EncryptedPhoneNumber : null;
        this.EncryptedEmailAddress = 'EncryptedEmailAddress' in params ? params.EncryptedEmailAddress : null;
        this.EncryptedPersonId = 'EncryptedPersonId' in params ? params.EncryptedPersonId : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * 添加合同响应对象
 * @class
 */
class AddContractResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 合同主键
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ContractId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContractId = 'ContractId' in params ? params.ContractId : null;

    }
}

/**
 * QueryBillDownloadURL返回参数结构体
 * @class
 */
class QueryBillDownloadURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryBillDownloadURLData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryBillDownloadURLData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 上传文件响应对象
 * @class
 */
class UploadFileResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 存储区域（0私密区，1公共区），请严格按文件要求，上传到不同的区域
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Storage = null;

        /**
         * 文件路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.FilePath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.FilePath = 'FilePath' in params ? params.FilePath : null;

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
 * 订单支付响应对象
 * @class
 */
class PayOrderResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付款订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 开发者流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DeveloperNo = null;

        /**
         * 交易优惠金额（免充值券）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeDiscountAmount = null;

        /**
         * 付款方式名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayName = null;

        /**
         * 商户流水号（从1开始自增长不重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderMerchantId = null;

        /**
         * 交易帐号（银行卡号、支付宝帐号、微信帐号等，某些收单机构没有此数据）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeAccount = null;

        /**
         * 实际交易金额（以分为单位，没有小数点）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeAmount = null;

        /**
         * 币种签名
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CurrencySign = null;

        /**
         * 付款完成时间（以收单机构为准）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradePayTime = null;

        /**
         * 门店流水号（从1开始自增长不重复）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ShopOrderId = null;

        /**
         * 支付标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PayTag = null;

        /**
         * 订单状态（1交易成功，2待支付，4已取消，9等待用户输入密码确认
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 币种代码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderCurrency = null;

        /**
         * 二维码字符串
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeQrcode = null;

        /**
         * 微信返回调起小程序/原生JS支付的appid参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatAppId = null;

        /**
         * 微信返回调起小程序/原生JS支付的timeStamp参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatTimeStamp = null;

        /**
         * 微信返回调起小程序/原生JS支付的nonceStr参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatNonceStr = null;

        /**
         * 微信返回调起小程序/原生JS支付的signType参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatSignType = null;

        /**
         * 微信返回调起小程序/原生JS支付的package参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatPackage = null;

        /**
         * 微信返回调起小程序/原生JS支付的paySign参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.WechatPaySign = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.DeveloperNo = 'DeveloperNo' in params ? params.DeveloperNo : null;
        this.TradeDiscountAmount = 'TradeDiscountAmount' in params ? params.TradeDiscountAmount : null;
        this.PayName = 'PayName' in params ? params.PayName : null;
        this.OrderMerchantId = 'OrderMerchantId' in params ? params.OrderMerchantId : null;
        this.TradeAccount = 'TradeAccount' in params ? params.TradeAccount : null;
        this.TradeAmount = 'TradeAmount' in params ? params.TradeAmount : null;
        this.CurrencySign = 'CurrencySign' in params ? params.CurrencySign : null;
        this.TradePayTime = 'TradePayTime' in params ? params.TradePayTime : null;
        this.ShopOrderId = 'ShopOrderId' in params ? params.ShopOrderId : null;
        this.PayTag = 'PayTag' in params ? params.PayTag : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderCurrency = 'OrderCurrency' in params ? params.OrderCurrency : null;
        this.TradeQrcode = 'TradeQrcode' in params ? params.TradeQrcode : null;
        this.WechatAppId = 'WechatAppId' in params ? params.WechatAppId : null;
        this.WechatTimeStamp = 'WechatTimeStamp' in params ? params.WechatTimeStamp : null;
        this.WechatNonceStr = 'WechatNonceStr' in params ? params.WechatNonceStr : null;
        this.WechatSignType = 'WechatSignType' in params ? params.WechatSignType : null;
        this.WechatPackage = 'WechatPackage' in params ? params.WechatPackage : null;
        this.WechatPaySign = 'WechatPaySign' in params ? params.WechatPaySign : null;

    }
}

/**
 * CreateCloudSubMerchant请求参数结构体
 * @class
 */
class CreateCloudSubMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 米大师分配的支付主MidasAppId，根应用Id。
         * @type {string || null}
         */
        this.MidasAppId = null;

        /**
         * 父应用Id。
         * @type {string || null}
         */
        this.ParentAppId = null;

        /**
         * 子商户名。
         * @type {string || null}
         */
        this.SubMchName = null;

        /**
         * 子商户描述。
         * @type {string || null}
         */
        this.SubMchDescription = null;

        /**
         * 环境类型
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.MidasEnvironment = null;

        /**
         * 子应用Id，为空则自动创建子应用id。
         * @type {string || null}
         */
        this.SubAppId = null;

        /**
         * 子商户名缩写。
         * @type {string || null}
         */
        this.SubMchShortName = null;

        /**
         * 业务平台自定义的子商户Id，唯一。
         * @type {string || null}
         */
        this.OutSubMerchantId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MidasAppId = 'MidasAppId' in params ? params.MidasAppId : null;
        this.ParentAppId = 'ParentAppId' in params ? params.ParentAppId : null;
        this.SubMchName = 'SubMchName' in params ? params.SubMchName : null;
        this.SubMchDescription = 'SubMchDescription' in params ? params.SubMchDescription : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;
        this.SubAppId = 'SubAppId' in params ? params.SubAppId : null;
        this.SubMchShortName = 'SubMchShortName' in params ? params.SubMchShortName : null;
        this.OutSubMerchantId = 'OutSubMerchantId' in params ? params.OutSubMerchantId : null;

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
 * 渠道方用户信息
 * @class
 */
class CloudChannelExternalUserInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道方用户类型，枚举值:
WX_OPENID 微信支付类型
ALIPAY_BUYERID 支付宝支付类型
         * @type {string || null}
         */
        this.ChannelExternalUserType = null;

        /**
         * 渠道方用户Id
         * @type {string || null}
         */
        this.ChannelExternalUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelExternalUserType = 'ChannelExternalUserType' in params ? params.ChannelExternalUserType : null;
        this.ChannelExternalUserId = 'ChannelExternalUserId' in params ? params.ChannelExternalUserId : null;

    }
}

/**
 * ApplyReconciliationFile请求参数结构体
 * @class
 */
class ApplyReconciliationFileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 申请的文件类型。
__CZ__：充值文件
__TX__：提现文件
__JY__：交易文件
__YE__：余额文件
         * @type {string || null}
         */
        this.ApplyFileType = null;

        /**
         * 申请的对账文件日期，格式：yyyyMMdd。
         * @type {string || null}
         */
        this.ApplyFileDate = null;

        /**
         * 父账户账号。
_平安渠道为资金汇总账号_
         * @type {string || null}
         */
        this.BankAccountNumber = null;

        /**
         * 环境名。
__release__: 现网环境
__sandbox__: 沙箱环境
__development__: 开发环境
_缺省: release_
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
        this.ApplyFileType = 'ApplyFileType' in params ? params.ApplyFileType : null;
        this.ApplyFileDate = 'ApplyFileDate' in params ? params.ApplyFileDate : null;
        this.BankAccountNumber = 'BankAccountNumber' in params ? params.BankAccountNumber : null;
        this.MidasEnvironment = 'MidasEnvironment' in params ? params.MidasEnvironment : null;

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
 * 分配关系
 * @class
 */
class AssignmentData extends  AbstractModel {
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

    }
}

/**
 * DistributeAccreditTlinx返回参数结构体
 * @class
 */
class DistributeAccreditTlinxResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 授权申请响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DistributeAccreditResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new DistributeAccreditResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
         * 开票渠道。0：APP渠道，1：线下渠道，2：小程序渠道。不填默认为APP渠道
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
 * QueryFundsTransactionDetails返回参数结构体
 * @class
 */
class QueryFundsTransactionDetailsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。
__SUCCESS__: 成功
__其他__: 见附录-错误码表
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {QueryFundsTransactionDetailsResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new QueryFundsTransactionDetailsResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 米大师内部生成的合约信息
 * @class
 */
class ChannelReturnContractInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台合约状态
协议状态，枚举值：
CONTRACT_STATUS_SIGNED：已签约
CONTRACT_STATUS_TERMINATED：未签约
CONTRACT_STATUS_PENDING：签约进行中
         * @type {string || null}
         */
        this.ContractStatus = null;

        /**
         * 米大师内部存放的合约信息
         * @type {ChannelContractInfo || null}
         */
        this.ChannelContractInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContractStatus = 'ContractStatus' in params ? params.ContractStatus : null;

        if (params.ChannelContractInfo) {
            let obj = new ChannelContractInfo();
            obj.deserialize(params.ChannelContractInfo)
            this.ChannelContractInfo = obj;
        }

    }
}

/**
 * 申请单笔交易回单结果
 * @class
 */
class ApplyOpenBankOrderDetailReceiptResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道回单申请ID
         * @type {string || null}
         */
        this.ChannelApplyId = null;

        /**
         * 申请状态。
SUCCESS：申请成功；
FAILED：申请失败；
PROCESSING：申请中。
注意：若返回申请中，需要再次调用回单申请结果查询接口，查询结果。
         * @type {string || null}
         */
        this.ReceiptStatus = null;

        /**
         * 申请返回描述，例如失败原因等。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReceiptMessage = null;

        /**
         * 回单下载链接，申请成功时返回。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 过期时间，yyyy-MM-dd HH:mm:ss格式。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelApplyId = 'ChannelApplyId' in params ? params.ChannelApplyId : null;
        this.ReceiptStatus = 'ReceiptStatus' in params ? params.ReceiptStatus : null;
        this.ReceiptMessage = 'ReceiptMessage' in params ? params.ReceiptMessage : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * CreateRedInvoiceV2返回参数结构体
 * @class
 */
class CreateRedInvoiceV2Response extends  AbstractModel {
    constructor(){
        super();

        /**
         * 红冲结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateRedInvoiceResultV2 || null}
         */
        this.Result = null;

        /**
         * 错误码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 错误消息
         * @type {string || null}
         */
        this.ErrMessage = null;

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
            let obj = new CreateRedInvoiceResultV2();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分账申请响应对象
 * @class
 */
class DistributeMultiApplyResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分账状态（0分账初始 1分账成功 2分账失败）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 平台分账单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DistributeNo = null;

        /**
         * 入账日期，yyyy-MM-dd格式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.InDate = null;

        /**
         * 分账金额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Amount = null;

        /**
         * 商户分账单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutDistributeNo = null;

        /**
         * 平台支付单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.DistributeNo = 'DistributeNo' in params ? params.DistributeNo : null;
        this.InDate = 'InDate' in params ? params.InDate : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.OutDistributeNo = 'OutDistributeNo' in params ? params.OutDistributeNo : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;

    }
}

/**
 * RefundOrder请求参数结构体
 * @class
 */
class RefundOrderRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进件成功后返给商户方的AppId
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 平台流水号。消费订单发起成功后，返回的平台唯一订单号。
         * @type {string || null}
         */
        this.OrderNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;

    }
}

/**
 * 云企付-付款人信息
 * @class
 */
class OpenBankPayerInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 付款方唯一标识。当TENPAY时，必填上送
付款方入驻云企付商户ID。
         * @type {string || null}
         */
        this.PayerId = null;

        /**
         * 付款方名称。当TENPAY上送付款方入驻云企付的商户名称。
         * @type {string || null}
         */
        this.PayerName = null;

        /**
         * 付款方付款账户标识。
当付款方式为OPENBANK_PAYMENT时，必输表示企业账户ID；当付款方式为SAFT_ISV时，必须上送付款方的渠道电子记账本ID。
         * @type {string || null}
         */
        this.BindSerialNo = null;

        /**
         * 付款账户标识类型
BANK_ACCOUNT：绑定银行账户
ACCOUNT_BOOK_ID：电子记账本ID。
当付款方式为SAFT_ISV时，必须上送类型为ACCOUNT_BOOK_ID。
         * @type {string || null}
         */
        this.AccountType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PayerId = 'PayerId' in params ? params.PayerId : null;
        this.PayerName = 'PayerName' in params ? params.PayerName : null;
        this.BindSerialNo = 'BindSerialNo' in params ? params.BindSerialNo : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;

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
 * QueryTransferBatch请求参数结构体
 * @class
 */
class QueryTransferBatchRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户号。
示例值：129284394
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 微信明细单号。
微信区分明细单返回的唯一标识。
示例值：1030000071100999991182020050700019480101
         * @type {boolean || null}
         */
        this.NeedQueryDetail = null;

        /**
         * 商家批次单号。
商户系统内部的商家批次单号，此参数只能由数字、字母组成，商户系统内部唯一，UTF8编码，最多32个字符。
示例值：plfk2020042013
         * @type {string || null}
         */
        this.MerchantBatchNo = null;

        /**
         * 是否查询账单明细。
true-是；
false-否，默认否。
商户可选择是否查询指定状态的转账明细单，当转账批次单状态为“FINISHED”（已完成）时，才会返回满足条件的转账明细单。
示例值：true
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 环境名:
release: 现网环境
sandbox: 沙箱环境
development: 开发环境
缺省: release
         * @type {string || null}
         */
        this.Profile = null;

        /**
         * 请求资源起始位置。
从0开始，默认值为0。
示例值：20
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 最大资源条数。
该次请求可返回的最大资源（转账明细单）条数，最小20条，最大100条，不传则默认20条。不足20条按实际条数返回
示例值：20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 明细状态。
ALL：全部，需要同时查询转账成功喝失败的明细单；
SUCCESS：转账成功，只查询成功的明细单；
FAIL：转账失败，只查询转账失败的明细单。
示例值：FAIL
         * @type {string || null}
         */
        this.DetailStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.NeedQueryDetail = 'NeedQueryDetail' in params ? params.NeedQueryDetail : null;
        this.MerchantBatchNo = 'MerchantBatchNo' in params ? params.MerchantBatchNo : null;
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.Profile = 'Profile' in params ? params.Profile : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.DetailStatus = 'DetailStatus' in params ? params.DetailStatus : null;

    }
}

/**
 * 智能代发-单笔代发转账接口返回数据
 * @class
 */
class TransferSinglePayData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 平台交易流水号，唯一
         * @type {string || null}
         */
        this.TradeSerialNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;

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
 * 退款子单
 * @class
 */
class CloudSubOrderRefund extends  AbstractModel {
    constructor(){
        super();

        /**
         * 子订单退款金额
         * @type {number || null}
         */
        this.RefundAmt = null;

        /**
         * 平台应退金额
         * @type {number || null}
         */
        this.PlatformRefundAmt = null;

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
         * 子退款单号，调用方需要保证全局唯一性
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
        this.RefundAmt = 'RefundAmt' in params ? params.RefundAmt : null;
        this.PlatformRefundAmt = 'PlatformRefundAmt' in params ? params.PlatformRefundAmt : null;
        this.SubMchRefundAmt = 'SubMchRefundAmt' in params ? params.SubMchRefundAmt : null;
        this.SubOutTradeNo = 'SubOutTradeNo' in params ? params.SubOutTradeNo : null;
        this.SubRefundId = 'SubRefundId' in params ? params.SubRefundId : null;

    }
}

/**
 * QueryOpenBankExternalSubAccountBookBalance请求参数结构体
 * @class
 */
class QueryOpenBankExternalSubAccountBookBalanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户ID
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道子商户ID
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道名称。目前只支持支付宝
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式。目前只支持安心发支付
__EBANK_PAYMENT__: ebank支付
__OPENBANK_PAYMENT__: openbank支付
__SAFT_ISV__: 安心发支付
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 外部账本号ID。与ChannelAccountBookId二者选填其一。
         * @type {string || null}
         */
        this.OutAccountBookId = null;

        /**
         * 渠道账本号ID。与OutAccountBookId二者选填其一。
         * @type {string || null}
         */
        this.ChannelAccountBookId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.OutAccountBookId = 'OutAccountBookId' in params ? params.OutAccountBookId : null;
        this.ChannelAccountBookId = 'ChannelAccountBookId' in params ? params.ChannelAccountBookId : null;

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
 * CreateBatchPayment接口BatchInfo对象
 * @class
 */
class CreateBatchPaymentBatchData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 交易流水号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.TradeSerialNo = null;

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
         * @type {number || null}
         */
        this.Status = null;

        /**
         * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * 代理商ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentId = null;

        /**
         * 代理商名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AgentName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.TradeSerialNo = 'TradeSerialNo' in params ? params.TradeSerialNo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.AgentId = 'AgentId' in params ? params.AgentId : null;
        this.AgentName = 'AgentName' in params ? params.AgentName : null;

    }
}

/**
 * DownloadReconciliationUrl返回参数结构体
 * @class
 */
class DownloadReconciliationUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下载地址
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * hash类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HashType = null;

        /**
         * hash值
         * @type {string || null}
         */
        this.HashValue = null;

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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.HashType = 'HashType' in params ? params.HashType : null;
        this.HashValue = 'HashValue' in params ? params.HashValue : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryDownloadBillURL返回参数结构体
 * @class
 */
class QueryDownloadBillURLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分配给商户的AppId。进件成功后返给商户方的AppId。
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 对账单下载地址。
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
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 分账撤销响应对象
 * @class
 */
class DistributeCancelResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分账订单状态（0初始1成功2失败3撤销）
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Status = null;

        /**
         * 平台交易订单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 商户分账单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.OutDistributeNo = null;

        /**
         * 平台分账单号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.DistributeNo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.OutDistributeNo = 'OutDistributeNo' in params ? params.OutDistributeNo : null;
        this.DistributeNo = 'DistributeNo' in params ? params.DistributeNo : null;

    }
}

/**
 * CreatePayRollPreOrderWithAuth返回参数结构体
 * @class
 */
class CreatePayRollPreOrderWithAuthResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 商户系统内部的商家核身单号，要求此参数只能由数字、大小写字母组成，在服务商内部唯一
         * @type {string || null}
         */
        this.AuthNumber = null;

        /**
         * Token有效时间，单位秒
         * @type {number || null}
         */
        this.ExpireTime = null;

        /**
         * 微信服务商商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.MerchantId = null;

        /**
         * 用户在商户对应appid下的唯一标识
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 微信服务商下特约商户的商户号，由微信支付生成并下发
         * @type {string || null}
         */
        this.SubMerchantId = null;

        /**
         * Token值
         * @type {string || null}
         */
        this.Token = null;

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
        this.AuthNumber = 'AuthNumber' in params ? params.AuthNumber : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.MerchantId = 'MerchantId' in params ? params.MerchantId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.SubMerchantId = 'SubMerchantId' in params ? params.SubMerchantId : null;
        this.Token = 'Token' in params ? params.Token : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云企付-充值下单返回响应
 * @class
 */
class CreateOpenBankOrderRechargeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 云企付平台订单号。
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 第三方支付平台返回支付订单号。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ThirdPayOrderId = null;

        /**
         * 跳转参数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OpenBankRechargeRedirectInfo || null}
         */
        this.RedirectInfo = null;

        /**
         * 外部商户订单号，只能是数字、大小写字母，且在同一个接入平台下唯一。
         * @type {string || null}
         */
        this.OutOrderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.ThirdPayOrderId = 'ThirdPayOrderId' in params ? params.ThirdPayOrderId : null;

        if (params.RedirectInfo) {
            let obj = new OpenBankRechargeRedirectInfo();
            obj.deserialize(params.RedirectInfo)
            this.RedirectInfo = obj;
        }
        this.OutOrderId = 'OutOrderId' in params ? params.OutOrderId : null;

    }
}

/**
 * 银企直连-查询单笔支付状态结果
 * @class
 */
class QuerySinglePayResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 受理状态（S：处理成功；F：处理失败）
         * @type {string || null}
         */
        this.HandleStatus = null;

        /**
         * 受理状态描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.HandleMsg = null;

        /**
         * 业务流水号
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 支付明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QuerySinglePayItem> || null}
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
        this.HandleStatus = 'HandleStatus' in params ? params.HandleStatus : null;
        this.HandleMsg = 'HandleMsg' in params ? params.HandleMsg : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new QuerySinglePayItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * 渠道扩展促销信息
 * @class
 */
class CloudExternalPromptInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 优惠商品信息类型。
         * @type {string || null}
         */
        this.ExternalPromptType = null;

        /**
         * 优惠商品信息数据。
         * @type {string || null}
         */
        this.ExternalPromptValue = null;

        /**
         * 优惠商品名称。
         * @type {string || null}
         */
        this.ExternalPromptName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExternalPromptType = 'ExternalPromptType' in params ? params.ExternalPromptType : null;
        this.ExternalPromptValue = 'ExternalPromptValue' in params ? params.ExternalPromptValue : null;
        this.ExternalPromptName = 'ExternalPromptName' in params ? params.ExternalPromptName : null;

    }
}

/**
 * DistributeCancel返回参数结构体
 * @class
 */
class DistributeCancelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 分账撤销响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DistributeCancelResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new DistributeCancelResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryOpenBankBankBranchList请求参数结构体
 * @class
 */
class QueryOpenBankBankBranchListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道商户ID。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道名称。
__TENPAY__: 商企付
__WECHAT__: 微信支付
__ALIPAY__: 支付宝
         * @type {string || null}
         */
        this.ChannelName = null;

        /**
         * 支付方式。
__EBANK_PAYMENT__:ebank付款
__OPENBANK_PAYMENT__: openbank付款
         * @type {string || null}
         */
        this.PaymentMethod = null;

        /**
         * 支行名称。
         * @type {string || null}
         */
        this.BankBranchName = null;

        /**
         * 银行简称。
         * @type {string || null}
         */
        this.BankAbbreviation = null;

        /**
         * 页码。Index和Count必须大于等于1。
         * @type {Paging || null}
         */
        this.PageNumber = null;

        /**
         * 环境类型。
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelName = 'ChannelName' in params ? params.ChannelName : null;
        this.PaymentMethod = 'PaymentMethod' in params ? params.PaymentMethod : null;
        this.BankBranchName = 'BankBranchName' in params ? params.BankBranchName : null;
        this.BankAbbreviation = 'BankAbbreviation' in params ? params.BankAbbreviation : null;

        if (params.PageNumber) {
            let obj = new Paging();
            obj.deserialize(params.PageNumber)
            this.PageNumber = obj;
        }
        this.Environment = 'Environment' in params ? params.Environment : null;

    }
}

/**
 * 查询联行号返回结果
 * @class
 */
class QueryOpenBankBankBranchListResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 支行列表。
         * @type {Array.<BankBranchInfo> || null}
         */
        this.BankBranchList = null;

        /**
         * 列表总数。
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BankBranchList) {
            this.BankBranchList = new Array();
            for (let z in params.BankBranchList) {
                let obj = new BankBranchInfo();
                obj.deserialize(params.BankBranchList[z]);
                this.BankBranchList.push(obj);
            }
        }
        this.Count = 'Count' in params ? params.Count : null;

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
 * 第三方子商户银行卡列表查询返回结果
 * @class
 */
class QueryOpenBankExternalSubMerchantBankAccountResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 第三方渠道子商户查询银行账户返回。
         * @type {Array.<QueryOpenBankExternalSubMerchantBankAccountData> || null}
         */
        this.AccountList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AccountList) {
            this.AccountList = new Array();
            for (let z in params.AccountList) {
                let obj = new QueryOpenBankExternalSubMerchantBankAccountData();
                obj.deserialize(params.AccountList[z]);
                this.AccountList.push(obj);
            }
        }

    }
}

/**
 * CreateOpenBankPaymentOrder返回参数结构体
 * @class
 */
class CreateOpenBankPaymentOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回码，SUCCESS表示成功，其他表示失败。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 业务系统返回消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 统一下单响应对象。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CreateOpenBankOrderPaymentResult || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;

        if (params.Result) {
            let obj = new CreateOpenBankOrderPaymentResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeduceQuota返回参数结构体
 * @class
 */
class DeduceQuotaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 错误码。响应成功："SUCCESS"，其他为不成功。
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 响应消息
         * @type {string || null}
         */
        this.ErrMsg = null;

        /**
         * 返回响应
注意：此字段可能返回 null，表示取不到有效值。
         * @type {AssignmentData || null}
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
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.ErrMsg = 'ErrMsg' in params ? params.ErrMsg : null;

        if (params.Result) {
            let obj = new AssignmentData();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 云企付-关单响应
 * @class
 */
class CloseOpenBankPaymentOrderResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 外部商户订单号
         * @type {string || null}
         */
        this.OutOrderId = null;

        /**
         * 云企付平台订单号
         * @type {string || null}
         */
        this.ChannelOrderId = null;

        /**
         * 订单状态。关单成功CLOSED
         * @type {string || null}
         */
        this.OrderStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OutOrderId = 'OutOrderId' in params ? params.OutOrderId : null;
        this.ChannelOrderId = 'ChannelOrderId' in params ? params.ChannelOrderId : null;
        this.OrderStatus = 'OrderStatus' in params ? params.OrderStatus : null;

    }
}

/**
 * CreateBatchPayment转账明细
 * @class
 */
class CreateBatchPaymentRecipient extends  AbstractModel {
    constructor(){
        super();

        /**
         * 转账金额
         * @type {number || null}
         */
        this.TransferAmount = null;

        /**
         * 订单号
         * @type {string || null}
         */
        this.OrderId = null;

        /**
         * 主播ID（与主播业务ID不能同时为空，两者都填取主播ID）
         * @type {string || null}
         */
        this.AnchorId = null;

        /**
         * 主播业务ID（与主播业务ID不能同时为空，两者都填取主播ID）
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 主播名称。如果该字段填入，则会对AnchorName和AnchorId/Uid进行校验。
         * @type {string || null}
         */
        this.AnchorName = null;

        /**
         * 业务备注
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 子单请求预留字段
         * @type {string || null}
         */
        this.ReqReserved = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TransferAmount = 'TransferAmount' in params ? params.TransferAmount : null;
        this.OrderId = 'OrderId' in params ? params.OrderId : null;
        this.AnchorId = 'AnchorId' in params ? params.AnchorId : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.AnchorName = 'AnchorName' in params ? params.AnchorName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReqReserved = 'ReqReserved' in params ? params.ReqReserved : null;

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
 * 云企付-按日期查询回单下载地址
 * @class
 */
class QueryOpenBankDailyReceiptDownloadUrlResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回单文件下载链接
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * 过期时间
         * @type {string || null}
         */
        this.ExpireTime = null;

        /**
         * 回单状态
PENDING: 处理中
READY: 可以下载
         * @type {string || null}
         */
        this.ReceiptStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;
        this.ReceiptStatus = 'ReceiptStatus' in params ? params.ReceiptStatus : null;

    }
}

/**
 * CreateSinglePay请求参数结构体
 * @class
 */
class CreateSinglePayRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务流水号，历史唯一
         * @type {string || null}
         */
        this.SerialNumber = null;

        /**
         * 付方账户号
         * @type {string || null}
         */
        this.PayAccountNumber = null;

        /**
         * 付方账户名称
         * @type {string || null}
         */
        this.PayAccountName = null;

        /**
         * 金额
         * @type {number || null}
         */
        this.Amount = null;

        /**
         * 收方账户号
         * @type {string || null}
         */
        this.RecvAccountNumber = null;

        /**
         * 收方账户名称
         * @type {string || null}
         */
        this.RecvAccountName = null;

        /**
         * 付方账户CNAPS号
         * @type {string || null}
         */
        this.PayBankCnaps = null;

        /**
         * 付方账户银行大类，PayBankCnaps为空时必传（见常见问题-银企直连银行类型）
         * @type {string || null}
         */
        this.PayBankType = null;

        /**
         * 付方账户银行所在省，PayBankCnaps为空时必传（见常见问题-银企直连省份枚举信息）
         * @type {string || null}
         */
        this.PayBankProvince = null;

        /**
         * 付方账户银行所在地区，PayBankCnaps为空时必传（见常见问题-银企直连城市枚举信息）
         * @type {string || null}
         */
        this.PayBankCity = null;

        /**
         * 收方账户CNAPS号
         * @type {string || null}
         */
        this.RecvBankCnaps = null;

        /**
         * 收方账户银行大类，RecvBankCnaps为空时必传（见常见问题-银企直连银行类型）
         * @type {string || null}
         */
        this.RecvBankType = null;

        /**
         * 收方账户银行所在省，RecvBankCnaps为空时必传（见常见问题-银企直连省份枚举信息）
         * @type {string || null}
         */
        this.RecvBankProvince = null;

        /**
         * 收方账户银行所在地区，RecvBankCnaps为空时必传（见常见问题-银企直连城市枚举信息）
         * @type {string || null}
         */
        this.RecvBankCity = null;

        /**
         * 收款方证件类型（见常见问题-银企直连证件类型枚举信息）
         * @type {string || null}
         */
        this.RecvCertType = null;

        /**
         * 收款方证件号码
         * @type {string || null}
         */
        this.RecvCertNo = null;

        /**
         * 摘要信息
         * @type {string || null}
         */
        this.Summary = null;

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
        this.SerialNumber = 'SerialNumber' in params ? params.SerialNumber : null;
        this.PayAccountNumber = 'PayAccountNumber' in params ? params.PayAccountNumber : null;
        this.PayAccountName = 'PayAccountName' in params ? params.PayAccountName : null;
        this.Amount = 'Amount' in params ? params.Amount : null;
        this.RecvAccountNumber = 'RecvAccountNumber' in params ? params.RecvAccountNumber : null;
        this.RecvAccountName = 'RecvAccountName' in params ? params.RecvAccountName : null;
        this.PayBankCnaps = 'PayBankCnaps' in params ? params.PayBankCnaps : null;
        this.PayBankType = 'PayBankType' in params ? params.PayBankType : null;
        this.PayBankProvince = 'PayBankProvince' in params ? params.PayBankProvince : null;
        this.PayBankCity = 'PayBankCity' in params ? params.PayBankCity : null;
        this.RecvBankCnaps = 'RecvBankCnaps' in params ? params.RecvBankCnaps : null;
        this.RecvBankType = 'RecvBankType' in params ? params.RecvBankType : null;
        this.RecvBankProvince = 'RecvBankProvince' in params ? params.RecvBankProvince : null;
        this.RecvBankCity = 'RecvBankCity' in params ? params.RecvBankCity : null;
        this.RecvCertType = 'RecvCertType' in params ? params.RecvCertType : null;
        this.RecvCertNo = 'RecvCertNo' in params ? params.RecvCertNo : null;
        this.Summary = 'Summary' in params ? params.Summary : null;
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
 * DistributeAddReceiver返回参数结构体
 * @class
 */
class DistributeAddReceiverResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务系统返回消息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ErrMessage = null;

        /**
         * 业务系统返回码
         * @type {string || null}
         */
        this.ErrCode = null;

        /**
         * 添加分账接收方响应对象
注意：此字段可能返回 null，表示取不到有效值。
         * @type {DistributeReceiverResult || null}
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
        this.ErrMessage = 'ErrMessage' in params ? params.ErrMessage : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;

        if (params.Result) {
            let obj = new DistributeReceiverResult();
            obj.deserialize(params.Result)
            this.Result = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TerminateContract返回参数结构体
 * @class
 */
class TerminateContractResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 解约数据
         * @type {ResponseTerminateContract || null}
         */
        this.ContractTerminateData = null;

        /**
         * 请求处理信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Msg = null;

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

        if (params.ContractTerminateData) {
            let obj = new ResponseTerminateContract();
            obj.deserialize(params.ContractTerminateData)
            this.ContractTerminateData = obj;
        }
        this.Msg = 'Msg' in params ? params.Msg : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryOpenBankUnbindExternalSubMerchantBankAccount请求参数结构体
 * @class
 */
class QueryOpenBankUnbindExternalSubMerchantBankAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道子商户ID。
         * @type {string || null}
         */
        this.ChannelSubMerchantId = null;

        /**
         * 渠道商户ID。
         * @type {string || null}
         */
        this.ChannelMerchantId = null;

        /**
         * 渠道申请编号，与外部申请编号二者选填其一。
         * @type {string || null}
         */
        this.ChannelApplyId = null;

        /**
         * 环境类型。
__release__:生产环境
__sandbox__:沙箱环境
_不填默认为生产环境_
         * @type {string || null}
         */
        this.Environment = null;

        /**
         * 外部申请编号，与渠道申请编号二者选填其一。
         * @type {string || null}
         */
        this.OutApplyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ChannelSubMerchantId = 'ChannelSubMerchantId' in params ? params.ChannelSubMerchantId : null;
        this.ChannelMerchantId = 'ChannelMerchantId' in params ? params.ChannelMerchantId : null;
        this.ChannelApplyId = 'ChannelApplyId' in params ? params.ChannelApplyId : null;
        this.Environment = 'Environment' in params ? params.Environment : null;
        this.OutApplyId = 'OutApplyId' in params ? params.OutApplyId : null;

    }
}

/**
 * QueryMerchant请求参数结构体
 * @class
 */
class QueryMerchantRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进件成功后返给商户方的 AppId
         * @type {string || null}
         */
        this.MerchantAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;

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
 * 商户分类
 * @class
 */
class MerchantClassificationId extends  AbstractModel {
    constructor(){
        super();

        /**
         * 分类编号
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 分类名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 父级编号（0为一级编号，大于0为父级分类编号）
         * @type {string || null}
         */
        this.Parent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Parent = 'Parent' in params ? params.Parent : null;

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
 * QueryBatchPaymentResult接口返回响应
 * @class
 */
class QueryBatchPaymentResultData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 批次号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.BatchId = null;

        /**
         * 批次总额
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalAmount = null;

        /**
         * 批次总量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 批次预留字段
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ReqReserved = null;

        /**
         * 批次备注
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * 渠道类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.TransferType = null;

        /**
         * 转账明细
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<QueryBatchPaymentResultDataInfo> || null}
         */
        this.TransferInfoList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BatchId = 'BatchId' in params ? params.BatchId : null;
        this.TotalAmount = 'TotalAmount' in params ? params.TotalAmount : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ReqReserved = 'ReqReserved' in params ? params.ReqReserved : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.TransferType = 'TransferType' in params ? params.TransferType : null;

        if (params.TransferInfoList) {
            this.TransferInfoList = new Array();
            for (let z in params.TransferInfoList) {
                let obj = new QueryBatchPaymentResultDataInfo();
                obj.deserialize(params.TransferInfoList[z]);
                this.TransferInfoList.push(obj);
            }
        }

    }
}

/**
 * QueryMerchantOrder返回参数结构体
 * @class
 */
class QueryMerchantOrderResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 进件成功后返给商户方的AppId。
         * @type {string || null}
         */
        this.MerchantAppId = null;

        /**
         * 平台流水号。平台唯一订单号。
         * @type {string || null}
         */
        this.OrderNo = null;

        /**
         * 订单支付状态。0-下单失败 1-下单成功未支付 2-支付成功 3-支付失败 4-退款中 5-退款成功 6-退款失败 7-待付款 8-待确认。
         * @type {string || null}
         */
        this.Status = null;

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
        this.MerchantAppId = 'MerchantAppId' in params ? params.MerchantAppId : null;
        this.OrderNo = 'OrderNo' in params ? params.OrderNo : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

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
<敏感信息>加密详见<a href="https://cloud.tencent.com/document/product/1122/48979" target="_blank">《商户端接口敏感信息加密说明》</a>
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

module.exports = {
    UploadTaxPaymentRequest: UploadTaxPaymentRequest,
    QueryAcctBindingRequest: QueryAcctBindingRequest,
    ReviseMbrPropertyResponse: ReviseMbrPropertyResponse,
    ApplyPayerInfoResponse: ApplyPayerInfoResponse,
    RevokeRechargeByThirdPayRequest: RevokeRechargeByThirdPayRequest,
    UnifiedOrderResponse: UnifiedOrderResponse,
    CreatePayRollTokenResponse: CreatePayRollTokenResponse,
    ApplyPayerinfoResult: ApplyPayerinfoResult,
    BindAcctRequest: BindAcctRequest,
    QueryOpenBankBankBranchListResponse: QueryOpenBankBankBranchListResponse,
    MigrateOrderRefundQueryResponse: MigrateOrderRefundQueryResponse,
    QueryOpenBankPaymentOrderRequest: QueryOpenBankPaymentOrderRequest,
    QueryOpenBankBindExternalSubMerchantBankAccountResponse: QueryOpenBankBindExternalSubMerchantBankAccountResponse,
    UploadOrgFileRequest: UploadOrgFileRequest,
    GetPayRollAuthResultRequest: GetPayRollAuthResultRequest,
    RefundTlinxOrderResponse: RefundTlinxOrderResponse,
    QueryItem: QueryItem,
    QueryContractPayWayListResponse: QueryContractPayWayListResponse,
    QueryContractPayWayListRequest: QueryContractPayWayListRequest,
    QueryAssignmentRequest: QueryAssignmentRequest,
    ApplyTradeResult: ApplyTradeResult,
    RefundOutSubOrderRefundList: RefundOutSubOrderRefundList,
    UnbindRelateAcctRequest: UnbindRelateAcctRequest,
    CreateMerchantRequest: CreateMerchantRequest,
    QueryContractRelateShopResponse: QueryContractRelateShopResponse,
    CreateOpenBankExternalSubMerchantRegistrationResult: CreateOpenBankExternalSubMerchantRegistrationResult,
    RefundTlinxOrderRequest: RefundTlinxOrderRequest,
    QueryInvoiceResult: QueryInvoiceResult,
    QueryAcctBindingResponse: QueryAcctBindingResponse,
    QueryPayerinfoData: QueryPayerinfoData,
    CreateInvoiceItem: CreateInvoiceItem,
    ApplyOutwardOrderData: ApplyOutwardOrderData,
    MerchantPayWayData: MerchantPayWayData,
    QueryOpenBankDownLoadUrlResult: QueryOpenBankDownLoadUrlResult,
    BindAccountResponse: BindAccountResponse,
    CreateInvoiceResultData: CreateInvoiceResultData,
    CloudClientInfo: CloudClientInfo,
    FileItem: FileItem,
    UnbindOpenBankExternalSubMerchantBankAccountRequest: UnbindOpenBankExternalSubMerchantBankAccountRequest,
    CreateRedInvoiceItem: CreateRedInvoiceItem,
    AddMerchantResult: AddMerchantResult,
    QueryOpenBankExternalSubMerchantRegistrationRequest: QueryOpenBankExternalSubMerchantRegistrationRequest,
    QueryMerchantInfoForManagementResponse: QueryMerchantInfoForManagementResponse,
    CreateTransferBatchResponse: CreateTransferBatchResponse,
    BindAccountRequest: BindAccountRequest,
    QueryCloudChannelDataResponse: QueryCloudChannelDataResponse,
    QuerySinglePayResponse: QuerySinglePayResponse,
    QueryCustAcctIdBalanceResponse: QueryCustAcctIdBalanceResponse,
    CreateRedInvoiceRequest: CreateRedInvoiceRequest,
    QueryAcctInfoListResponse: QueryAcctInfoListResponse,
    ContractInfo: ContractInfo,
    QueryOpenBankExternalSubMerchantBankAccountRequest: QueryOpenBankExternalSubMerchantBankAccountRequest,
    ExternalReturnContractInfo: ExternalReturnContractInfo,
    ExecuteMemberTransactionResponse: ExecuteMemberTransactionResponse,
    OrganizationInfo: OrganizationInfo,
    QueryApplicationMaterialRequest: QueryApplicationMaterialRequest,
    ConfirmOrderRequest: ConfirmOrderRequest,
    CloudExternalPromptGroup: CloudExternalPromptGroup,
    ModifyMerchantResponse: ModifyMerchantResponse,
    ReturnContractInfo: ReturnContractInfo,
    QuerySmallAmountTransferResponse: QuerySmallAmountTransferResponse,
    CityCodeResult: CityCodeResult,
    QueryMerchantClassificationRequest: QueryMerchantClassificationRequest,
    UnbindOpenBankExternalSubMerchantBankAccountResult: UnbindOpenBankExternalSubMerchantBankAccountResult,
    QuerySingleTransactionStatusResponse: QuerySingleTransactionStatusResponse,
    CreateOpenBankMerchantResponse: CreateOpenBankMerchantResponse,
    ApplyDeclareData: ApplyDeclareData,
    TransferDetailResponse: TransferDetailResponse,
    QueryOrderRequest: QueryOrderRequest,
    RevokeMemberRechargeThirdPayResponse: RevokeMemberRechargeThirdPayResponse,
    DistributeAccreditTlinxRequest: DistributeAccreditTlinxRequest,
    QueryContractRelateShopRequest: QueryContractRelateShopRequest,
    CreateOpenBankRechargeOrderRequest: CreateOpenBankRechargeOrderRequest,
    QueryContractPayFeeResult: QueryContractPayFeeResult,
    QueryExceedingInfoResponse: QueryExceedingInfoResponse,
    AddContractRequest: AddContractRequest,
    CreateAcctResponse: CreateAcctResponse,
    DistributeAddReceiverRequest: DistributeAddReceiverRequest,
    QueryExchangerateData: QueryExchangerateData,
    WithdrawBill: WithdrawBill,
    QueryOpenBankDailyReceiptDownloadUrlResponse: QueryOpenBankDailyReceiptDownloadUrlResponse,
    QueryPayerInfoResponse: QueryPayerInfoResponse,
    BindOpenBankExternalSubMerchantBankAccountResponse: BindOpenBankExternalSubMerchantBankAccountResponse,
    QueryMemberTransactionDetailsResponse: QueryMemberTransactionDetailsResponse,
    QueryInvoiceResultData: QueryInvoiceResultData,
    FundsTransactionItem: FundsTransactionItem,
    AddMerchantResponse: AddMerchantResponse,
    RefundCloudOrderRequest: RefundCloudOrderRequest,
    RegisterBillResponse: RegisterBillResponse,
    ApplyReWithdrawalRequest: ApplyReWithdrawalRequest,
    DownloadFileResult: DownloadFileResult,
    RechargeByThirdPayResponse: RechargeByThirdPayResponse,
    QueryOutwardOrderRequest: QueryOutwardOrderRequest,
    ViewMerchantRequest: ViewMerchantRequest,
    CloseCloudOrderResponse: CloseCloudOrderResponse,
    QueryOpenBankPaymentOrderResult: QueryOpenBankPaymentOrderResult,
    QueryTradeResult: QueryTradeResult,
    ClearItem: ClearItem,
    PayFeeDataResult: PayFeeDataResult,
    CreateInvoiceV2Response: CreateInvoiceV2Response,
    QuerySinglePayItem: QuerySinglePayItem,
    QueryInvoiceV2Response: QueryInvoiceV2Response,
    QueryAgentStatementsResponse: QueryAgentStatementsResponse,
    QueryOutwardOrderResponse: QueryOutwardOrderResponse,
    QuerySinglePaymentResultRequest: QuerySinglePaymentResultRequest,
    QueryShopOpenIdRequest: QueryShopOpenIdRequest,
    QueryBalanceResponse: QueryBalanceResponse,
    CreateOpenBankOrderPaymentResult: CreateOpenBankOrderPaymentResult,
    CloseOpenBankPaymentOrderResponse: CloseOpenBankPaymentOrderResponse,
    TerminateContractRequest: TerminateContractRequest,
    OpenBankSceneInfo: OpenBankSceneInfo,
    CreatePayMerchantRequest: CreatePayMerchantRequest,
    QueryMaliciousRegistrationResponse: QueryMaliciousRegistrationResponse,
    RefundCloudOrderResponse: RefundCloudOrderResponse,
    QueryBankClearRequest: QueryBankClearRequest,
    QueryInvoiceRequest: QueryInvoiceRequest,
    CreatePayRollPreOrderResponse: CreatePayRollPreOrderResponse,
    CreateOpenBankMerchantResult: CreateOpenBankMerchantResult,
    DistributeQueryReceiverRequest: DistributeQueryReceiverRequest,
    QueryOpenBankUnbindExternalSubMerchantBankAccountResponse: QueryOpenBankUnbindExternalSubMerchantBankAccountResponse,
    QueryOpenBankDownLoadUrlRequest: QueryOpenBankDownLoadUrlRequest,
    DownloadBillRequest: DownloadBillRequest,
    RevokeMemberRechargeThirdPayRequest: RevokeMemberRechargeThirdPayRequest,
    QuerySinglePayRequest: QuerySinglePayRequest,
    ApplyTradeResponse: ApplyTradeResponse,
    ViewMerchantResult: ViewMerchantResult,
    QueryOpenBankSupportBankListRequest: QueryOpenBankSupportBankListRequest,
    ContractOrderRequest: ContractOrderRequest,
    QueryContractPayFeeResponse: QueryContractPayFeeResponse,
    BindRelateAcctSmallAmountResponse: BindRelateAcctSmallAmountResponse,
    QueryBalanceRequest: QueryBalanceRequest,
    QueryOpenBankSupportBankListResult: QueryOpenBankSupportBankListResult,
    BindRelateAcctSmallAmountRequest: BindRelateAcctSmallAmountRequest,
    QueryTransferDetailResponse: QueryTransferDetailResponse,
    QueryTransferBatchResponse: QueryTransferBatchResponse,
    QueryDeclareData: QueryDeclareData,
    QueryContractPayFeeRequest: QueryContractPayFeeRequest,
    QueryOrderResponse: QueryOrderResponse,
    CreateOpenBankExternalSubMerchantRegistrationResponse: CreateOpenBankExternalSubMerchantRegistrationResponse,
    RefundOrderResult: RefundOrderResult,
    QueryBatchPaymentResultDataInfo: QueryBatchPaymentResultDataInfo,
    ContractOrderInSubOrder: ContractOrderInSubOrder,
    RegisterBehaviorRequest: RegisterBehaviorRequest,
    UnifiedCloudOrderResponse: UnifiedCloudOrderResponse,
    UnbindOpenBankExternalSubMerchantBankAccountResponse: UnbindOpenBankExternalSubMerchantBankAccountResponse,
    QueryTradeRequest: QueryTradeRequest,
    CloudOrderReturn: CloudOrderReturn,
    QueryBankWithdrawCashDetailsRequest: QueryBankWithdrawCashDetailsRequest,
    QueryOpenBankBindExternalSubMerchantBankAccountResult: QueryOpenBankBindExternalSubMerchantBankAccountResult,
    QueryExceedingInfoResult: QueryExceedingInfoResult,
    QueryMerchantPayWayListRequest: QueryMerchantPayWayListRequest,
    WithdrawCashMembershipRequest: WithdrawCashMembershipRequest,
    RevResigterBillSupportWithdrawRequest: RevResigterBillSupportWithdrawRequest,
    CreateInvoiceResponse: CreateInvoiceResponse,
    AddMerchantRequest: AddMerchantRequest,
    CreateRedInvoiceResultV2: CreateRedInvoiceResultV2,
    QueryAnchorContractInfoRequest: QueryAnchorContractInfoRequest,
    CreateRedInvoiceResult: CreateRedInvoiceResult,
    CreateOpenBankPaymentOrderRequest: CreateOpenBankPaymentOrderRequest,
    QueryOpenBankOrderDetailReceiptInfoResult: QueryOpenBankOrderDetailReceiptInfoResult,
    QueryReconciliationDocumentRequest: QueryReconciliationDocumentRequest,
    QueryOpenBankExternalSubMerchantBankAccountData: QueryOpenBankExternalSubMerchantBankAccountData,
    DeleteAgentTaxPaymentInfoRequest: DeleteAgentTaxPaymentInfoRequest,
    CreateOpenBankExternalSubMerchantRegistrationRequest: CreateOpenBankExternalSubMerchantRegistrationRequest,
    GetDistributeBillDownloadUrlResponse: GetDistributeBillDownloadUrlResponse,
    ViewContractResponse: ViewContractResponse,
    CreateOpenBankMerchantRequest: CreateOpenBankMerchantRequest,
    QueryOrderOutOrderList: QueryOrderOutOrderList,
    ModifyAgentTaxPaymentInfoResponse: ModifyAgentTaxPaymentInfoResponse,
    QueryBatchPaymentResultResponse: QueryBatchPaymentResultResponse,
    CloudAttachmentInfo: CloudAttachmentInfo,
    RevokeRechargeByThirdPayResponse: RevokeRechargeByThirdPayResponse,
    QueryOpenBankDailyReceiptDownloadUrlRequest: QueryOpenBankDailyReceiptDownloadUrlRequest,
    CreateAcctRequest: CreateAcctRequest,
    CreateAgentTaxPaymentInfosRequest: CreateAgentTaxPaymentInfosRequest,
    QueryReconciliationFileApplyInfoRequest: QueryReconciliationFileApplyInfoRequest,
    CreatePayRollPreOrderWithAuthRequest: CreatePayRollPreOrderWithAuthRequest,
    QueryMerchantBalanceRequest: QueryMerchantBalanceRequest,
    QueryOutwardOrderResult: QueryOutwardOrderResult,
    QueryPayerInfoRequest: QueryPayerInfoRequest,
    QuerySingleTransactionStatusRequest: QuerySingleTransactionStatusRequest,
    QueryContractRequest: QueryContractRequest,
    CreateOpenBankRechargeOrderResponse: CreateOpenBankRechargeOrderResponse,
    QueryDownloadBillURLRequest: QueryDownloadBillURLRequest,
    QueryMerchantBalanceResult: QueryMerchantBalanceResult,
    QueryOpenBankOrderDetailReceiptInfoRequest: QueryOpenBankOrderDetailReceiptInfoRequest,
    QueryOpenBankExternalSubAccountBookBalanceResponse: QueryOpenBankExternalSubAccountBookBalanceResponse,
    QueryOrderStatusRequest: QueryOrderStatusRequest,
    CreateExternalAnchorResponse: CreateExternalAnchorResponse,
    QueryTradeResponse: QueryTradeResponse,
    QueryMerchantOrderRequest: QueryMerchantOrderRequest,
    DistributeQueryResponse: DistributeQueryResponse,
    CreateInvoiceV2Request: CreateInvoiceV2Request,
    UploadExternalAnchorInfoResponse: UploadExternalAnchorInfoResponse,
    UploadTaxListResponse: UploadTaxListResponse,
    QueryReconciliationFileApplyInfoResponse: QueryReconciliationFileApplyInfoResponse,
    BindRelateAcctUnionPayRequest: BindRelateAcctUnionPayRequest,
    QueryFundsTransactionDetailsResult: QueryFundsTransactionDetailsResult,
    QueryCloudOrderResponse: QueryCloudOrderResponse,
    Paging: Paging,
    CreateOpenBankExternalSubMerchantAccountBookRequest: CreateOpenBankExternalSubMerchantAccountBookRequest,
    RegisterBehaviorResponse: RegisterBehaviorResponse,
    GetPayRollAuthListRequest: GetPayRollAuthListRequest,
    QueryBillDownloadURLData: QueryBillDownloadURLData,
    ApplyWithdrawalResponse: ApplyWithdrawalResponse,
    QueryMerchantInfoForManagementRequest: QueryMerchantInfoForManagementRequest,
    UnifiedTlinxOrderRequest: UnifiedTlinxOrderRequest,
    DeduceQuotaRequest: DeduceQuotaRequest,
    QueryMerchantBalanceData: QueryMerchantBalanceData,
    RechargeMemberThirdPayResponse: RechargeMemberThirdPayResponse,
    QueryExceedingInfoData: QueryExceedingInfoData,
    QueryExchangerateResult: QueryExchangerateResult,
    QueryMemberTransactionDetailsRequest: QueryMemberTransactionDetailsRequest,
    QueryBatchPaymentResultRequest: QueryBatchPaymentResultRequest,
    BindAcctResponse: BindAcctResponse,
    UploadExternalAnchorInfoRequest: UploadExternalAnchorInfoRequest,
    BindRelateAccReUnionPayRequest: BindRelateAccReUnionPayRequest,
    CreateSinglePayResult: CreateSinglePayResult,
    QueryAcctInfoResponse: QueryAcctInfoResponse,
    MigrateOrderRefundQueryRequest: MigrateOrderRefundQueryRequest,
    CloudSubOrder: CloudSubOrder,
    AnchorExtendInfo: AnchorExtendInfo,
    QueryOpenBankExternalSubMerchantRegistrationResponse: QueryOpenBankExternalSubMerchantRegistrationResponse,
    GetBillDownloadUrlRequest: GetBillDownloadUrlRequest,
    CreatePayMerchantResponse: CreatePayMerchantResponse,
    UnbindRelateAcctResponse: UnbindRelateAcctResponse,
    GetDistributeBillDownloadUrlRequest: GetDistributeBillDownloadUrlRequest,
    AgentTaxPaymentBatch: AgentTaxPaymentBatch,
    SyncContractDataRequest: SyncContractDataRequest,
    GetPayRollAuthListResponse: GetPayRollAuthListResponse,
    QueryRefundRequest: QueryRefundRequest,
    CreateCustAcctIdRequest: CreateCustAcctIdRequest,
    CloudExternalChannelData: CloudExternalChannelData,
    DistributeApplyResponse: DistributeApplyResponse,
    CreateBatchPaymentData: CreateBatchPaymentData,
    DistributeQueryRequest: DistributeQueryRequest,
    CloseOrderRequest: CloseOrderRequest,
    ViewShopResult: ViewShopResult,
    QueryOutwardOrderData: QueryOutwardOrderData,
    QueryOpenBankExternalSubMerchantRegistrationResult: QueryOpenBankExternalSubMerchantRegistrationResult,
    OpenBankRedirectInfo: OpenBankRedirectInfo,
    ViewContractRequest: ViewContractRequest,
    QueryBankTransactionDetailsRequest: QueryBankTransactionDetailsRequest,
    CloudSubOrderReturn: CloudSubOrderReturn,
    QueryExchangeRateRequest: QueryExchangeRateRequest,
    AddContractResponse: AddContractResponse,
    QueryBillDownloadURLRequest: QueryBillDownloadURLRequest,
    CloudSubRefundItem: CloudSubRefundItem,
    QueryOpenBankDownLoadUrlResponse: QueryOpenBankDownLoadUrlResponse,
    RevResigterBillSupportWithdrawResponse: RevResigterBillSupportWithdrawResponse,
    ApplyApplicationMaterialResponse: ApplyApplicationMaterialResponse,
    DistributeQueryResult: DistributeQueryResult,
    ExecuteMemberTransactionRequest: ExecuteMemberTransactionRequest,
    QueryBankClearResponse: QueryBankClearResponse,
    DescribeOrderStatusResponse: DescribeOrderStatusResponse,
    CreateMerchantResponse: CreateMerchantResponse,
    CreateSinglePaymentResponse: CreateSinglePaymentResponse,
    CloseOpenBankPaymentOrderRequest: CloseOpenBankPaymentOrderRequest,
    GetPayRollAuthRequest: GetPayRollAuthRequest,
    ViewContractResult: ViewContractResult,
    QueryAcctItem: QueryAcctItem,
    OpenBankRechargePayeeInfo: OpenBankRechargePayeeInfo,
    QueryContractRelateShopResult: QueryContractRelateShopResult,
    RefundRequest: RefundRequest,
    ApplyWithdrawalRequest: ApplyWithdrawalRequest,
    QueryAssignmentResponse: QueryAssignmentResponse,
    QuerySinglePaymentResultResponse: QuerySinglePaymentResultResponse,
    QueryMemberBindResponse: QueryMemberBindResponse,
    QueryMemberBindRequest: QueryMemberBindRequest,
    BindRelateAcctUnionPayResponse: BindRelateAcctUnionPayResponse,
    QueryCloudRefundOrderRequest: QueryCloudRefundOrderRequest,
    UnifiedOrderRequest: UnifiedOrderRequest,
    RechargeByThirdPayRequest: RechargeByThirdPayRequest,
    DistributeRemoveReceiverResponse: DistributeRemoveReceiverResponse,
    QueryInvoiceV2Request: QueryInvoiceV2Request,
    DistributeAccreditQueryRequest: DistributeAccreditQueryRequest,
    QueryMerchantResponse: QueryMerchantResponse,
    BankCardItem: BankCardItem,
    DistributeAccreditResult: DistributeAccreditResult,
    ViewShopResponse: ViewShopResponse,
    ApplyTradeRequest: ApplyTradeRequest,
    QueryExchangeRateResponse: QueryExchangeRateResponse,
    QuerySmallAmountTransferRequest: QuerySmallAmountTransferRequest,
    SupportBankInfo: SupportBankInfo,
    ModifyMntMbrBindRelateAcctBankCodeRequest: ModifyMntMbrBindRelateAcctBankCodeRequest,
    QueryMerchantPayWayListResponse: QueryMerchantPayWayListResponse,
    PayRollAuthResult: PayRollAuthResult,
    CloudGlobalPayTimeInfo: CloudGlobalPayTimeInfo,
    QueryCustAcctIdBalanceRequest: QueryCustAcctIdBalanceRequest,
    QueryExternalAccountBookResult: QueryExternalAccountBookResult,
    ReviseMbrPropertyRequest: ReviseMbrPropertyRequest,
    AgentTaxPayment: AgentTaxPayment,
    UploadFileRequest: UploadFileRequest,
    QueryBankWithdrawCashDetailsResponse: QueryBankWithdrawCashDetailsResponse,
    UploadTaxPaymentResponse: UploadTaxPaymentResponse,
    QueryCloudRefundOrderResponse: QueryCloudRefundOrderResponse,
    AgencyClientInfo: AgencyClientInfo,
    QueryTradeData: QueryTradeData,
    QueryOpenBankUnbindExternalSubMerchantBankAccountResult: QueryOpenBankUnbindExternalSubMerchantBankAccountResult,
    ApplyDeclareResult: ApplyDeclareResult,
    DistributeAccreditQueryResponse: DistributeAccreditQueryResponse,
    UnifiedOrderInSubOrderList: UnifiedOrderInSubOrderList,
    QueryShopOpenIdResult: QueryShopOpenIdResult,
    ApplyReWithdrawalResponse: ApplyReWithdrawalResponse,
    GetPayRollAuthResultResponse: GetPayRollAuthResultResponse,
    RegisterBillRequest: RegisterBillRequest,
    OpenBankGoodsInfo: OpenBankGoodsInfo,
    QueryOrderOutSubOrderList: QueryOrderOutSubOrderList,
    CreateBatchPaymentResponse: CreateBatchPaymentResponse,
    CreateExternalAnchorRequest: CreateExternalAnchorRequest,
    ConfirmOrderResponse: ConfirmOrderResponse,
    GetPayRollAuthResponse: GetPayRollAuthResponse,
    UnifiedTlinxOrderResponse: UnifiedTlinxOrderResponse,
    CreateSinglePaymentData: CreateSinglePaymentData,
    CheckAmountResponse: CheckAmountResponse,
    MerchantManagementList: MerchantManagementList,
    QueryCityCodeResponse: QueryCityCodeResponse,
    QueryApplicationMaterialResponse: QueryApplicationMaterialResponse,
    CreateExternalAccountBookResult: CreateExternalAccountBookResult,
    QueryTransferResultData: QueryTransferResultData,
    MultiApplyDetail: MultiApplyDetail,
    ResponseTerminateContract: ResponseTerminateContract,
    DownloadBillResponse: DownloadBillResponse,
    QueryOpenBankBindExternalSubMerchantBankAccountRequest: QueryOpenBankBindExternalSubMerchantBankAccountRequest,
    DistributeRemoveReceiverRequest: DistributeRemoveReceiverRequest,
    BillDownloadUrlResult: BillDownloadUrlResult,
    CreatePayRollPreOrderRequest: CreatePayRollPreOrderRequest,
    DeleteAgentTaxPaymentInfosRequest: DeleteAgentTaxPaymentInfosRequest,
    QueryAcctInfoListRequest: QueryAcctInfoListRequest,
    CreatePayRollTokenRequest: CreatePayRollTokenRequest,
    AddShopRequest: AddShopRequest,
    TransferDetailRequest: TransferDetailRequest,
    QueryOrderStatusResponse: QueryOrderStatusResponse,
    QueryTransferResultResponse: QueryTransferResultResponse,
    CloseCloudOrderRequest: CloseCloudOrderRequest,
    CreateInvoiceResultV2: CreateInvoiceResultV2,
    QueryAcctInfoRequest: QueryAcctInfoRequest,
    DescribeChargeDetailResponse: DescribeChargeDetailResponse,
    TranItem: TranItem,
    DistributeQueryReceiverResponse: DistributeQueryReceiverResponse,
    QueryTransferResultRequest: QueryTransferResultRequest,
    QueryReconciliationFileApplyInfoResult: QueryReconciliationFileApplyInfoResult,
    ApplyReconciliationFileResult: ApplyReconciliationFileResult,
    QueryOpenBankExternalSubMerchantBankAccountResponse: QueryOpenBankExternalSubMerchantBankAccountResponse,
    CreateRedInvoiceV2Request: CreateRedInvoiceV2Request,
    ApplyOpenBankOrderDetailReceiptResponse: ApplyOpenBankOrderDetailReceiptResponse,
    OpenBankApprovalGuideInfo: OpenBankApprovalGuideInfo,
    CreateOrderResponse: CreateOrderResponse,
    MultiApplyOrder: MultiApplyOrder,
    ModifyMerchantRequest: ModifyMerchantRequest,
    TransferItem: TransferItem,
    OrderItem: OrderItem,
    RefundMemberTransactionRequest: RefundMemberTransactionRequest,
    CreateCloudSubMerchantResponse: CreateCloudSubMerchantResponse,
    QueryFundsTransactionDetailsRequest: QueryFundsTransactionDetailsRequest,
    BindOpenBankExternalSubMerchantBankAccountResult: BindOpenBankExternalSubMerchantBankAccountResult,
    CheckAmountRequest: CheckAmountRequest,
    CreateMerchantResultData: CreateMerchantResultData,
    DistributeCancelRequest: DistributeCancelRequest,
    QueryOpenBankSupportBankListResponse: QueryOpenBankSupportBankListResponse,
    QueryDeclareResult: QueryDeclareResult,
    RefundMemberTransactionResponse: RefundMemberTransactionResponse,
    QueryCloudOrderRequest: QueryCloudOrderRequest,
    OpenBankRechargeRedirectInfo: OpenBankRechargeRedirectInfo,
    UnBindAcctResponse: UnBindAcctResponse,
    QueryCommonTransferRechargeRequest: QueryCommonTransferRechargeRequest,
    ApplyOpenBankOrderDetailReceiptRequest: ApplyOpenBankOrderDetailReceiptRequest,
    GetBillDownloadUrlResponse: GetBillDownloadUrlResponse,
    QueryTransferDetailRequest: QueryTransferDetailRequest,
    DownloadOrgFileResponse: DownloadOrgFileResponse,
    OpenBankPayeeInfo: OpenBankPayeeInfo,
    AddShopResult: AddShopResult,
    PayDataResult: PayDataResult,
    ModifyBindedAccountResponse: ModifyBindedAccountResponse,
    QueryReconciliationDocumentResponse: QueryReconciliationDocumentResponse,
    QueryBankTransactionDetailsResponse: QueryBankTransactionDetailsResponse,
    TransferSinglePayRequest: TransferSinglePayRequest,
    CreateSinglePayResponse: CreateSinglePayResponse,
    MigrateOrderRefundRequest: MigrateOrderRefundRequest,
    QueryOpenBankBankAccountBalanceResult: QueryOpenBankBankAccountBalanceResult,
    QuerySinglePaymentResultData: QuerySinglePaymentResultData,
    UploadOrgFileResponse: UploadOrgFileResponse,
    QueryOpenBankOrderDetailReceiptInfoResponse: QueryOpenBankOrderDetailReceiptInfoResponse,
    CreateAnchorRequest: CreateAnchorRequest,
    QueryExceedingInfoRequest: QueryExceedingInfoRequest,
    ExternalContractUserInfo: ExternalContractUserInfo,
    BankBranchInfo: BankBranchInfo,
    ContractUserInfo: ContractUserInfo,
    ApplyApplicationMaterialRequest: ApplyApplicationMaterialRequest,
    QueryCloudChannelDataRequest: QueryCloudChannelDataRequest,
    QueryOpenBankBankAccountBalanceRequest: QueryOpenBankBankAccountBalanceRequest,
    ModifyAgentTaxPaymentInfoRequest: ModifyAgentTaxPaymentInfoRequest,
    DownloadReconciliationUrlRequest: DownloadReconciliationUrlRequest,
    CreateBatchPaymentRequest: CreateBatchPaymentRequest,
    CreateOpenBankExternalSubMerchantAccountBookResponse: CreateOpenBankExternalSubMerchantAccountBookResponse,
    ModifyMntMbrBindRelateAcctBankCodeResponse: ModifyMntMbrBindRelateAcctBankCodeResponse,
    SyncContractDataResponse: SyncContractDataResponse,
    CreateRedInvoiceResultData: CreateRedInvoiceResultData,
    ResponseQueryContract: ResponseQueryContract,
    DownloadOrgFileRequest: DownloadOrgFileRequest,
    ContractSyncInfo: ContractSyncInfo,
    Order: Order,
    QueryAgentStatementsRequest: QueryAgentStatementsRequest,
    CreateExternalAnchorData: CreateExternalAnchorData,
    BindOpenBankExternalSubMerchantBankAccountRequest: BindOpenBankExternalSubMerchantBankAccountRequest,
    OpenBankProfitShareInfo: OpenBankProfitShareInfo,
    MigrateOrderRefundResponse: MigrateOrderRefundResponse,
    TransferSinglePayResponse: TransferSinglePayResponse,
    CloudStoreInfo: CloudStoreInfo,
    ContractOrderResponse: ContractOrderResponse,
    QueryInvoiceResponse: QueryInvoiceResponse,
    QueryOpenBankBankAccountBalanceResponse: QueryOpenBankBankAccountBalanceResponse,
    ViewMerchantResponse: ViewMerchantResponse,
    AddShopResponse: AddShopResponse,
    UploadFileResponse: UploadFileResponse,
    QueryMemberTransactionDetailsResult: QueryMemberTransactionDetailsResult,
    CreateMerchantResult: CreateMerchantResult,
    RefundResponse: RefundResponse,
    CreateTransferBatchRequest: CreateTransferBatchRequest,
    WithdrawItem: WithdrawItem,
    QueryMemberTransactionRequest: QueryMemberTransactionRequest,
    QueryCityCodeRequest: QueryCityCodeRequest,
    CreateOrderRequest: CreateOrderRequest,
    ModifyBindedAccountRequest: ModifyBindedAccountRequest,
    WithdrawCashMembershipResponse: WithdrawCashMembershipResponse,
    CreateSinglePaymentRequest: CreateSinglePaymentRequest,
    MemberTransactionItem: MemberTransactionItem,
    DistributeReceiverResult: DistributeReceiverResult,
    DistributeApplyRequest: DistributeApplyRequest,
    ViewShopRequest: ViewShopRequest,
    ApplyOutwardOrderResponse: ApplyOutwardOrderResponse,
    DistributeAccreditQueryResult: DistributeAccreditQueryResult,
    QueryShopOpenIdResponse: QueryShopOpenIdResponse,
    Acct: Acct,
    QueryCommonTransferRechargeResponse: QueryCommonTransferRechargeResponse,
    ApplyPayerinfoData: ApplyPayerinfoData,
    CheckAcctRequest: CheckAcctRequest,
    CreateAgentTaxPaymentInfosResponse: CreateAgentTaxPaymentInfosResponse,
    ApplyReconciliationFileResponse: ApplyReconciliationFileResponse,
    ContractPayListResult: ContractPayListResult,
    CreateInvoiceResult: CreateInvoiceResult,
    DescribeOrderStatusRequest: DescribeOrderStatusRequest,
    QueryMemberTransactionResponse: QueryMemberTransactionResponse,
    ChannelContractInfo: ChannelContractInfo,
    CreateAnchorResponse: CreateAnchorResponse,
    UnifiedCloudOrderRequest: UnifiedCloudOrderRequest,
    MerchantRiskInfo: MerchantRiskInfo,
    QueryPayerinfoResult: QueryPayerinfoResult,
    QueryOrderStatusResult: QueryOrderStatusResult,
    QueryAgentTaxPaymentBatchResponse: QueryAgentTaxPaymentBatchResponse,
    DeleteAgentTaxPaymentInfosResponse: DeleteAgentTaxPaymentInfosResponse,
    QueryMerchantClassificationResponse: QueryMerchantClassificationResponse,
    SceneInfo: SceneInfo,
    QueryContractResponse: QueryContractResponse,
    CreateRedInvoiceResponse: CreateRedInvoiceResponse,
    QueryMerchantBalanceResponse: QueryMerchantBalanceResponse,
    RefundOrderResponse: RefundOrderResponse,
    CloseOrderResponse: CloseOrderResponse,
    MerchantManagementResult: MerchantManagementResult,
    UploadTaxListRequest: UploadTaxListRequest,
    CloudSettleInfo: CloudSettleInfo,
    RegisterInfo: RegisterInfo,
    QueryOpenBankPaymentOrderResponse: QueryOpenBankPaymentOrderResponse,
    QueryMaliciousRegistrationRequest: QueryMaliciousRegistrationRequest,
    AddContractResult: AddContractResult,
    QueryBillDownloadURLResponse: QueryBillDownloadURLResponse,
    UploadFileResult: UploadFileResult,
    DescribeChargeDetailRequest: DescribeChargeDetailRequest,
    PayOrderResult: PayOrderResult,
    CreateCloudSubMerchantRequest: CreateCloudSubMerchantRequest,
    CreateCustAcctIdResponse: CreateCustAcctIdResponse,
    QueryAgentTaxPaymentBatchRequest: QueryAgentTaxPaymentBatchRequest,
    CloudChannelExternalUserInfo: CloudChannelExternalUserInfo,
    ApplyReconciliationFileRequest: ApplyReconciliationFileRequest,
    RegisterBillSupportWithdrawResponse: RegisterBillSupportWithdrawResponse,
    ApplyOutwardOrderRequest: ApplyOutwardOrderRequest,
    AssignmentData: AssignmentData,
    DistributeAccreditTlinxResponse: DistributeAccreditTlinxResponse,
    RechargeMemberThirdPayRequest: RechargeMemberThirdPayRequest,
    CreateInvoiceRequest: CreateInvoiceRequest,
    AnchorContractInfo: AnchorContractInfo,
    QueryFundsTransactionDetailsResponse: QueryFundsTransactionDetailsResponse,
    ChannelReturnContractInfo: ChannelReturnContractInfo,
    ApplyOpenBankOrderDetailReceiptResult: ApplyOpenBankOrderDetailReceiptResult,
    CreateRedInvoiceV2Response: CreateRedInvoiceV2Response,
    DistributeMultiApplyResult: DistributeMultiApplyResult,
    RefundOrderRequest: RefundOrderRequest,
    OpenBankPayerInfo: OpenBankPayerInfo,
    TransactionItem: TransactionItem,
    QueryTransferBatchRequest: QueryTransferBatchRequest,
    TransferSinglePayData: TransferSinglePayData,
    CheckAcctResponse: CheckAcctResponse,
    CloudSubOrderRefund: CloudSubOrderRefund,
    QueryOpenBankExternalSubAccountBookBalanceRequest: QueryOpenBankExternalSubAccountBookBalanceRequest,
    ApplyOutwardOrderResult: ApplyOutwardOrderResult,
    ApplyPayerInfoRequest: ApplyPayerInfoRequest,
    CreateBatchPaymentBatchData: CreateBatchPaymentBatchData,
    DownloadReconciliationUrlResponse: DownloadReconciliationUrlResponse,
    QueryDownloadBillURLResponse: QueryDownloadBillURLResponse,
    DistributeCancelResult: DistributeCancelResult,
    CreatePayRollPreOrderWithAuthResponse: CreatePayRollPreOrderWithAuthResponse,
    CreateOpenBankOrderRechargeResult: CreateOpenBankOrderRechargeResult,
    QuerySinglePayResult: QuerySinglePayResult,
    CloudExternalPromptInfo: CloudExternalPromptInfo,
    DistributeCancelResponse: DistributeCancelResponse,
    QueryOpenBankBankBranchListRequest: QueryOpenBankBankBranchListRequest,
    QueryOpenBankBankBranchListResult: QueryOpenBankBankBranchListResult,
    ApplyTradeData: ApplyTradeData,
    QueryOpenBankExternalSubMerchantBankAccountResult: QueryOpenBankExternalSubMerchantBankAccountResult,
    CreateOpenBankPaymentOrderResponse: CreateOpenBankPaymentOrderResponse,
    DeduceQuotaResponse: DeduceQuotaResponse,
    CloseOpenBankPaymentOrderResult: CloseOpenBankPaymentOrderResult,
    CreateBatchPaymentRecipient: CreateBatchPaymentRecipient,
    RegisterBillSupportWithdrawRequest: RegisterBillSupportWithdrawRequest,
    DeleteAgentTaxPaymentInfoResponse: DeleteAgentTaxPaymentInfoResponse,
    QueryOpenBankDailyReceiptDownloadUrlResult: QueryOpenBankDailyReceiptDownloadUrlResult,
    CreateSinglePayRequest: CreateSinglePayRequest,
    QueryRefundResponse: QueryRefundResponse,
    DistributeAddReceiverResponse: DistributeAddReceiverResponse,
    TerminateContractResponse: TerminateContractResponse,
    QueryOpenBankUnbindExternalSubMerchantBankAccountRequest: QueryOpenBankUnbindExternalSubMerchantBankAccountRequest,
    QueryMerchantRequest: QueryMerchantRequest,
    QueryAnchorContractInfoResponse: QueryAnchorContractInfoResponse,
    MerchantClassificationId: MerchantClassificationId,
    BindRelateAccReUnionPayResponse: BindRelateAccReUnionPayResponse,
    QueryBatchPaymentResultData: QueryBatchPaymentResultData,
    QueryMerchantOrderResponse: QueryMerchantOrderResponse,
    UnBindAcctRequest: UnBindAcctRequest,

}

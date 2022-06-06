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
 * 金融借贷反欺诈 风险码输出类型
 * @class
 */
class RiskDetailInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 风险码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskCode = null;

        /**
         * 风险码对应的风险值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskCode = 'RiskCode' in params ? params.RiskCode : null;
        this.RiskValue = 'RiskValue' in params ? params.RiskValue : null;

    }
}

/**
 * 反欺诈查询结果
 * @class
 */
class AntiFraudRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 公共错误码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 业务侧错误码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodeDesc = null;

        /**
         * 业务侧错误信息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 表示该条记录能否查到：1 为能查到；-1 为查不到，此时 RiskScore 返回-1；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Found = null;

        /**
         * 表示该条记录中的身份 ID 能否查到
1 为能查到
-1 为查不到
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdFound = null;

        /**
         * 当可查到时，返回 0~100 区间，值越高 欺诈可
能性越大。
当查不到时（即 found=-1），返回-1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskScore = null;

        /**
         * 扩展字段，对风险类型的说明。扩展字段并非必
然出现。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<SimpleKindRiskDetail> || null}
         */
        this.RiskInfo = null;

        /**
         * 默认出现，提供模型版本号说明及多模型返回需
要时用到；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OtherModelScoresDetail> || null}
         */
        this.OtherModelScores = null;

        /**
         * 表示请求时间，标准 sunix 时间戳，非必然出现
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PostTime = null;

        /**
         * 拓展字段，非必然出现，和 ExtensionIn 对应；
注：非必然出现，需要返回时天御侧将说明；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ExtensionOut = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.CodeDesc = 'CodeDesc' in params ? params.CodeDesc : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Found = 'Found' in params ? params.Found : null;
        this.IdFound = 'IdFound' in params ? params.IdFound : null;
        this.RiskScore = 'RiskScore' in params ? params.RiskScore : null;

        if (params.RiskInfo) {
            this.RiskInfo = new Array();
            for (let z in params.RiskInfo) {
                let obj = new SimpleKindRiskDetail();
                obj.deserialize(params.RiskInfo[z]);
                this.RiskInfo.push(obj);
            }
        }

        if (params.OtherModelScores) {
            this.OtherModelScores = new Array();
            for (let z in params.OtherModelScores) {
                let obj = new OtherModelScoresDetail();
                obj.deserialize(params.OtherModelScores[z]);
                this.OtherModelScores.push(obj);
            }
        }
        this.PostTime = 'PostTime' in params ? params.PostTime : null;
        this.ExtensionOut = 'ExtensionOut' in params ? params.ExtensionOut : null;

    }
}

/**
 * AntiFraudFilter – 业务入参
 * @class
 */
class AntiFraudFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务方账号 ID
         * @type {string || null}
         */
        this.CustomerUin = null;

        /**
         * 业务方APPID
         * @type {string || null}
         */
        this.CustomerAppid = null;

        /**
         * 身份证号
注 1：下方 idCryptoType 为指定
加密方式
注 2：若 idNumber 加密则必传加
密方式
         * @type {string || null}
         */
        this.IdNumber = null;

        /**
         * 手机号码（注：不需要带国家代码
例如：13430421011）
注 1：下方 phoneCryptoType 为
指定加密方式:
注 2：若 phoneNumber 加密则必
传加密方式
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 业务场景 ID
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 默认不使用，业务方子
账号，若接口使用密钥对应是子账
号则必填
         * @type {string || null}
         */
        this.CustomerSubUin = null;

        /**
         * 已获取约定标识则传 1；
用于基于特定需求而传的标识字段
注：有约定则是必传，若未传则查
询接口失败
         * @type {string || null}
         */
        this.Authorization = null;

        /**
         * 姓名
注 ：不支持加密
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 银行卡号
         * @type {string || null}
         */
        this.BankCardNumber = null;

        /**
         * 用户请求来源 IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 国际移动设备识别码
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * ios 系统广告标示符
         * @type {string || null}
         */
        this.Idfa = null;

        /**
         * 用户邮箱地址
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 用户住址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * MAC 地址
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * 国际移动用户识别码
         * @type {string || null}
         */
        this.Imsi = null;

        /**
         * 关联的腾讯帐号 QQ：1；
开放帐号微信： 2；
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 可选的 QQ 或微信 openid
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * qq 或微信分配给网站或应用的
appid，用来唯一标识网站或应用
         * @type {string || null}
         */
        this.AppIdU = null;

        /**
         * ＷＩＦＩＭＡＣ
         * @type {string || null}
         */
        this.WifiMac = null;

        /**
         * WIFI 服务集标识
         * @type {string || null}
         */
        this.WifiSSID = null;

        /**
         * WIFI-BSSID
         * @type {string || null}
         */
        this.WifiBSSID = null;

        /**
         * 拓展字段类型 ID
注：默认不填写，需要时天御侧将
提供
         * @type {string || null}
         */
        this.ExtensionId = null;

        /**
         * 拓展字段内容
注：默认不填，需要时天御侧将提
供
         * @type {string || null}
         */
        this.ExtensionIn = null;

        /**
         * 业务 ID，默认不传
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 身份证加密类型
0：不加密（默认值）
1：md5
2：sha256
3：SM3
注：若 idNumber 加密则必传加密
方式
         * @type {string || null}
         */
        this.IdCryptoType = null;

        /**
         * 手机号加密类型
0：不加密（默认值）
1：md5,
2：sha256
3：SM3
注：若 phoneNumber 加密则必传
加密方式
         * @type {string || null}
         */
        this.PhoneCryptoType = null;

        /**
         * 姓名加密类型：——注：已经不支持加
密，该字段存在是为了兼容可能历史客户
版本；
0：不加密（默认值）
1：md5
         * @type {string || null}
         */
        this.NameCryptoType = null;

        /**
         * 是否使用旧回包
         * @type {string || null}
         */
        this.OldResponseType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CustomerUin = 'CustomerUin' in params ? params.CustomerUin : null;
        this.CustomerAppid = 'CustomerAppid' in params ? params.CustomerAppid : null;
        this.IdNumber = 'IdNumber' in params ? params.IdNumber : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.CustomerSubUin = 'CustomerSubUin' in params ? params.CustomerSubUin : null;
        this.Authorization = 'Authorization' in params ? params.Authorization : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.BankCardNumber = 'BankCardNumber' in params ? params.BankCardNumber : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Idfa = 'Idfa' in params ? params.Idfa : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.Imsi = 'Imsi' in params ? params.Imsi : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.AppIdU = 'AppIdU' in params ? params.AppIdU : null;
        this.WifiMac = 'WifiMac' in params ? params.WifiMac : null;
        this.WifiSSID = 'WifiSSID' in params ? params.WifiSSID : null;
        this.WifiBSSID = 'WifiBSSID' in params ? params.WifiBSSID : null;
        this.ExtensionId = 'ExtensionId' in params ? params.ExtensionId : null;
        this.ExtensionIn = 'ExtensionIn' in params ? params.ExtensionIn : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.IdCryptoType = 'IdCryptoType' in params ? params.IdCryptoType : null;
        this.PhoneCryptoType = 'PhoneCryptoType' in params ? params.PhoneCryptoType : null;
        this.NameCryptoType = 'NameCryptoType' in params ? params.NameCryptoType : null;
        this.OldResponseType = 'OldResponseType' in params ? params.OldResponseType : null;

    }
}

/**
 * AntiFraudCryptoFilter – 业务入参
 * @class
 */
class AntiFraudCryptoFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 约定用入参，默认不涉及默认BusinessSecurityData 与BusinessCrptoData 不传
         * @type {string || null}
         */
        this.CryptoType = null;

        /**
         * 约定用入参，默认不涉及
         * @type {string || null}
         */
        this.CryptoContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CryptoType = 'CryptoType' in params ? params.CryptoType : null;
        this.CryptoContent = 'CryptoContent' in params ? params.CryptoContent : null;

    }
}

/**
 * 借贷反欺查询返回结果出参
 * @class
 */
class FinanceAntiFraudRecord extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表示该条记录能否查到：1为能查到，-1为查不到
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Found = null;

        /**
         * 表示该条Id能否查到：1为能查到，-1为查不到
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.IdFound = null;

        /**
         * 评分0~100;值越高 欺诈可能性越大
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskScore = null;

        /**
         * 扩展字段，对风险类型的说明
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RiskDetailInfo> || null}
         */
        this.RiskInfo = null;

        /**
         * 多模型返回结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<FinanceOtherModelScores> || null}
         */
        this.OtherModelScores = null;

        /**
         * 业务侧错误码。成功时返回0，错误时返回非0值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 业务侧错误信息。成功时返回Success，错误时返回具体业务错误原因。
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Found = 'Found' in params ? params.Found : null;
        this.IdFound = 'IdFound' in params ? params.IdFound : null;
        this.RiskScore = 'RiskScore' in params ? params.RiskScore : null;

        if (params.RiskInfo) {
            this.RiskInfo = new Array();
            for (let z in params.RiskInfo) {
                let obj = new RiskDetailInfo();
                obj.deserialize(params.RiskInfo[z]);
                this.RiskInfo.push(obj);
            }
        }

        if (params.OtherModelScores) {
            this.OtherModelScores = new Array();
            for (let z in params.OtherModelScores) {
                let obj = new FinanceOtherModelScores();
                obj.deserialize(params.OtherModelScores[z]);
                this.OtherModelScores.push(obj);
            }
        }
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * DescribeAntiFraud返回参数结构体
 * @class
 */
class DescribeAntiFraudResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {FinanceAntiFraudRecord || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new FinanceAntiFraudRecord();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 扩展字段，对风险类型的说明
 * @class
 */
class RiskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 风险码 参数详细定义请加微信：TYXGJ-01
         * @type {number || null}
         */
        this.RiskCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskCode = 'RiskCode' in params ? params.RiskCode : null;

    }
}

/**
 * 借贷反欺返回结果出参中的多模型返回结果
 * @class
 */
class FinanceOtherModelScores extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型ID序号
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 模型ID序号对应的评分结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelScore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelScore = 'ModelScore' in params ? params.ModelScore : null;

    }
}

/**
 * 扩展字段，对风险类型的说明
 * @class
 */
class SimpleKindRiskDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 风险码
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskCode = null;

        /**
         * 风险码详情
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskCodeValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RiskCode = 'RiskCode' in params ? params.RiskCode : null;
        this.RiskCodeValue = 'RiskCodeValue' in params ? params.RiskCodeValue : null;

    }
}

/**
 * 扩展字段，对多模型返回结果的说明，被如下接口引用：GetAntiFraud。
 * @class
 */
class OtherModelScoresDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型版本号；默认顺序为 0、1、2、3、…其中：0=主模型，跟 RiskScore 保持一致；
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelId = null;

        /**
         * 模型版本对应的评分结果；Found=1 时：模型版本对应的评分结果，0~100 分
区间；Found=-1（未查到）时：全部模型结果返回-1
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ModelScore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ModelId = 'ModelId' in params ? params.ModelId : null;
        this.ModelScore = 'ModelScore' in params ? params.ModelScore : null;

    }
}

/**
 * GetAntiFraud请求参数结构体
 * @class
 */
class GetAntiFraudRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 默认不传，约定用原始业务
入参(二选一BusinessSecurityData 或
BusinessCryptoData)。
         * @type {AntiFraudFilter || null}
         */
        this.BusinessSecurityData = null;

        /**
         * 默认不传，约定用密文业务
入参(二选一
BusinessSecurityData 或
BusinessCryptoData)。
         * @type {AntiFraudCryptoFilter || null}
         */
        this.BusinessCryptoData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BusinessSecurityData) {
            let obj = new AntiFraudFilter();
            obj.deserialize(params.BusinessSecurityData)
            this.BusinessSecurityData = obj;
        }

        if (params.BusinessCryptoData) {
            let obj = new AntiFraudCryptoFilter();
            obj.deserialize(params.BusinessCryptoData)
            this.BusinessCryptoData = obj;
        }

    }
}

/**
 * DescribeAntiFraud请求参数结构体
 * @class
 */
class DescribeAntiFraudRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 原始业务入参(二选一）
         * @type {FinanceAntiFraudFilter || null}
         */
        this.BusinessSecurityData = null;

        /**
         * 密文业务入参(二选一）
         * @type {FinanceAntiFraudCryptoFilter || null}
         */
        this.BusinessCryptoData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BusinessSecurityData) {
            let obj = new FinanceAntiFraudFilter();
            obj.deserialize(params.BusinessSecurityData)
            this.BusinessSecurityData = obj;
        }

        if (params.BusinessCryptoData) {
            let obj = new FinanceAntiFraudCryptoFilter();
            obj.deserialize(params.BusinessCryptoData)
            this.BusinessCryptoData = obj;
        }

    }
}

/**
 * 借贷反欺诈原始业务入参
 * @class
 */
class FinanceAntiFraudFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话号码(五选二)
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 身份证Id(五选二) 参数详细定义请加微信：TYXGJ-01
         * @type {string || null}
         */
        this.IdNumber = null;

        /**
         * 银行卡号(五选二)
         * @type {string || null}
         */
        this.BankCardNumber = null;

        /**
         * 用户请求来源 IP(五选二)
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 国际移动设备识别码(五选二)
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * ios 系统广告标示符(五选二)
         * @type {string || null}
         */
        this.Idfa = null;

        /**
         * 业务场景ID，需要找技术对接
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户邮箱地址
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 用户住址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * MAC 地址
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * 国际移动用户识别码
         * @type {string || null}
         */
        this.Imsi = null;

        /**
         * 1：关联的腾讯帐号QQ；2：开放帐号微信
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 可选的 QQ 或微信 openid
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * qq 或微信分配给网站或应用的 appid，用来唯一标识网站或应用
         * @type {string || null}
         */
        this.AppIdU = null;

        /**
         * WIFI MAC
         * @type {string || null}
         */
        this.WifiMac = null;

        /**
         * WIFI 服务集标识
         * @type {string || null}
         */
        this.WifiSSID = null;

        /**
         * WIFI-BSSID
         * @type {string || null}
         */
        this.WifiBSSID = null;

        /**
         * 业务 ID，在多个业务中使用此服务，通过此ID 区分统计数据
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 手机号加密类型 0：不加密（默认值）；1：md5；2：sha256；3：SM3
         * @type {string || null}
         */
        this.PhoneCryptoType = null;

        /**
         * 身份证Id加密类型 0：不加密（默认值）；1：md5；2：sha256；3：SM3
         * @type {string || null}
         */
        this.IdCryptoType = null;

        /**
         * 姓名加密类型 0：不加密（默认值）；1：md5；2：sha256；3：SM3
         * @type {string || null}
         */
        this.NameCryptoType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.IdNumber = 'IdNumber' in params ? params.IdNumber : null;
        this.BankCardNumber = 'BankCardNumber' in params ? params.BankCardNumber : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Idfa = 'Idfa' in params ? params.Idfa : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.Imsi = 'Imsi' in params ? params.Imsi : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.AppIdU = 'AppIdU' in params ? params.AppIdU : null;
        this.WifiMac = 'WifiMac' in params ? params.WifiMac : null;
        this.WifiSSID = 'WifiSSID' in params ? params.WifiSSID : null;
        this.WifiBSSID = 'WifiBSSID' in params ? params.WifiBSSID : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.PhoneCryptoType = 'PhoneCryptoType' in params ? params.PhoneCryptoType : null;
        this.IdCryptoType = 'IdCryptoType' in params ? params.IdCryptoType : null;
        this.NameCryptoType = 'NameCryptoType' in params ? params.NameCryptoType : null;

    }
}

/**
 * QueryAntiFraud返回参数结构体
 * @class
 */
class QueryAntiFraudResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表示该条记录能否查到：1为能查到，-1为查不到
         * @type {number || null}
         */
        this.Found = null;

        /**
         * 表示该条Id能否查到：1为能查到，-1为查不到
         * @type {number || null}
         */
        this.IdFound = null;

        /**
         * 0~100;值越高 欺诈可能性越大
         * @type {number || null}
         */
        this.RiskScore = null;

        /**
         * 扩展字段，对风险类型的说明
         * @type {Array.<RiskDetail> || null}
         */
        this.RiskInfo = null;

        /**
         * 业务侧错误码。成功时返回Success，错误时返回具体业务错误原因。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodeDesc = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Found = 'Found' in params ? params.Found : null;
        this.IdFound = 'IdFound' in params ? params.IdFound : null;
        this.RiskScore = 'RiskScore' in params ? params.RiskScore : null;

        if (params.RiskInfo) {
            this.RiskInfo = new Array();
            for (let z in params.RiskInfo) {
                let obj = new RiskDetail();
                obj.deserialize(params.RiskInfo[z]);
                this.RiskInfo.push(obj);
            }
        }
        this.CodeDesc = 'CodeDesc' in params ? params.CodeDesc : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetAntiFraud返回参数结构体
 * @class
 */
class GetAntiFraudResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 反欺诈评分接口结果
         * @type {AntiFraudRecord || null}
         */
        this.Data = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Data) {
            let obj = new AntiFraudRecord();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * QueryAntiFraud请求参数结构体
 * @class
 */
class QueryAntiFraudRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话号码(五选二)
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Id(五选二)
         * @type {string || null}
         */
        this.IdNumber = null;

        /**
         * 银行卡号(五选二)
         * @type {string || null}
         */
        this.BankCardNumber = null;

        /**
         * 用户请求来源 IP(五选二)
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 国际移动设备识别码(五选二)
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * ios 系统广告标示符(五选二)
         * @type {string || null}
         */
        this.Idfa = null;

        /**
         * 业务场景 ID，需要找技术对接
         * @type {string || null}
         */
        this.Scene = null;

        /**
         * 姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 用户邮箱地址
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 用户住址
         * @type {string || null}
         */
        this.Address = null;

        /**
         * MAC 地址
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * 国际移动用户识别码
         * @type {string || null}
         */
        this.Imsi = null;

        /**
         * 关联的腾讯帐号 QQ：1；
开放帐号微信： 2；
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 可选的 QQ 或微信 openid
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * qq 或微信分配给网站或应用的 appid，用来
唯一标识网站或应用
         * @type {string || null}
         */
        this.AppIdU = null;

        /**
         * WIFI MAC
         * @type {string || null}
         */
        this.WifiMac = null;

        /**
         * WIFI 服务集标识
         * @type {string || null}
         */
        this.WifiSSID = null;

        /**
         * WIFI-BSSID
         * @type {string || null}
         */
        this.WifiBSSID = null;

        /**
         * 业务 ID，在多个业务中使用此服务，通过此
ID 区分统计数据
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * Id加密类型
0：不加密（默认值）
1：md5
2：sha256
3：SM3
         * @type {string || null}
         */
        this.IdCryptoType = null;

        /**
         * 手机号加密类型
0：不加密（默认值）
1：md5, 2：sha256
3：SM3
         * @type {string || null}
         */
        this.PhoneCryptoType = null;

        /**
         * 姓名加密类型
0：不加密（默认值）
1：md5
2：sha256
3：SM3
         * @type {string || null}
         */
        this.NameCryptoType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.IdNumber = 'IdNumber' in params ? params.IdNumber : null;
        this.BankCardNumber = 'BankCardNumber' in params ? params.BankCardNumber : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Idfa = 'Idfa' in params ? params.Idfa : null;
        this.Scene = 'Scene' in params ? params.Scene : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.Imsi = 'Imsi' in params ? params.Imsi : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.AppIdU = 'AppIdU' in params ? params.AppIdU : null;
        this.WifiMac = 'WifiMac' in params ? params.WifiMac : null;
        this.WifiSSID = 'WifiSSID' in params ? params.WifiSSID : null;
        this.WifiBSSID = 'WifiBSSID' in params ? params.WifiBSSID : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.IdCryptoType = 'IdCryptoType' in params ? params.IdCryptoType : null;
        this.PhoneCryptoType = 'PhoneCryptoType' in params ? params.PhoneCryptoType : null;
        this.NameCryptoType = 'NameCryptoType' in params ? params.NameCryptoType : null;

    }
}

/**
 * 借贷反欺诈密文业务入参
 * @class
 */
class FinanceAntiFraudCryptoFilter extends  AbstractModel {
    constructor(){
        super();

        /**
         * 值1定义：AES加密方式[加密模式ECB；填充格式pkcs7padding；秘钥16字节即128位
         * @type {string || null}
         */
        this.CryptoType = null;

        /**
         * 业务字段BusinessSecurityData的json数据格式，采用CryptoType相应的加密方式计算后得到的bash64编码内容。比如对{"PhoneNumber":"13430420001","IdNumber":"420115199501010001","BankCardNumber":"6214000100010001"}包体做加密。
         * @type {string || null}
         */
        this.CryptoContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CryptoType = 'CryptoType' in params ? params.CryptoType : null;
        this.CryptoContent = 'CryptoContent' in params ? params.CryptoContent : null;

    }
}

module.exports = {
    RiskDetailInfo: RiskDetailInfo,
    AntiFraudRecord: AntiFraudRecord,
    AntiFraudFilter: AntiFraudFilter,
    AntiFraudCryptoFilter: AntiFraudCryptoFilter,
    FinanceAntiFraudRecord: FinanceAntiFraudRecord,
    DescribeAntiFraudResponse: DescribeAntiFraudResponse,
    RiskDetail: RiskDetail,
    FinanceOtherModelScores: FinanceOtherModelScores,
    SimpleKindRiskDetail: SimpleKindRiskDetail,
    OtherModelScoresDetail: OtherModelScoresDetail,
    GetAntiFraudRequest: GetAntiFraudRequest,
    DescribeAntiFraudRequest: DescribeAntiFraudRequest,
    FinanceAntiFraudFilter: FinanceAntiFraudFilter,
    QueryAntiFraudResponse: QueryAntiFraudResponse,
    GetAntiFraudResponse: GetAntiFraudResponse,
    QueryAntiFraudRequest: QueryAntiFraudRequest,
    FinanceAntiFraudCryptoFilter: FinanceAntiFraudCryptoFilter,

}

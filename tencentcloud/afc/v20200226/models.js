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
 * QueryAntiFraudVip请求参数结构体
 * @class
 */
class QueryAntiFraudVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电话号码(五选二)
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * Id号(五选二)
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
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.AppIdU = 'AppIdU' in params ? params.AppIdU : null;
        this.WifiMac = 'WifiMac' in params ? params.WifiMac : null;
        this.WifiSSID = 'WifiSSID' in params ? params.WifiSSID : null;
        this.WifiBSSID = 'WifiBSSID' in params ? params.WifiBSSID : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.IdCryptoType = 'IdCryptoType' in params ? params.IdCryptoType : null;
        this.PhoneCryptoType = 'PhoneCryptoType' in params ? params.PhoneCryptoType : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.Imsi = 'Imsi' in params ? params.Imsi : null;
        this.NameCryptoType = 'NameCryptoType' in params ? params.NameCryptoType : null;

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
         * 风险码
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
 * QueryAntiFraudVip返回参数结构体
 * @class
 */
class QueryAntiFraudVipResponse extends  AbstractModel {
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
注意：此字段可能返回 null，表示取不到有效值。
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

module.exports = {
    QueryAntiFraudVipRequest: QueryAntiFraudVipRequest,
    RiskDetail: RiskDetail,
    QueryAntiFraudVipResponse: QueryAntiFraudVipResponse,

}

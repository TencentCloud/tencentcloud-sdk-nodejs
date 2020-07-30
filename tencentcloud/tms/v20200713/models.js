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
 * 账号风险检测结果
 * @class
 */
class RiskDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 风险类别，RiskAccount，RiskIP, RiskIMEI
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 风险等级，1:疑似，2：恶意
         * @type {number || null}
         */
        this.Level = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Level = 'Level' in params ? params.Level : null;

    }
}

/**
 * TextModeration请求参数结构体
 * @class
 */
class TextModerationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文本内容Base64编码。原文长度需小于15000字节，即5000个汉字以内。
         * @type {string || null}
         */
        this.Content = null;

        /**
         * 数据ID，英文字母、下划线、-组成，不超过64个字符
         * @type {string || null}
         */
        this.DataId = null;

        /**
         * 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略。 -- 该字段暂未开放。
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 用户相关信息
         * @type {User || null}
         */
        this.User = null;

        /**
         * 设备相关信息
         * @type {Device || null}
         */
        this.Device = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;
        this.DataId = 'DataId' in params ? params.DataId : null;
        this.BizType = 'BizType' in params ? params.BizType : null;

        if (params.User) {
            let obj = new User();
            obj.deserialize(params.User)
            this.User = obj;
        }

        if (params.Device) {
            let obj = new Device();
            obj.deserialize(params.Device)
            this.Device = obj;
        }

    }
}

/**
 * 文本返回的详细结果
 * @class
 */
class DetailResults extends  AbstractModel {
    constructor(){
        super();

        /**
         * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 建议值,Block：打击,Review：待复审,Normal：正常
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 该标签下命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 该标签模型命中的分值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 仅当Lable为Custom自定义关键词时有效，表示自定义关键词库类型，1:黑白库，2：自定义库
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.LibType = null;

        /**
         * 仅当Lable为Custom自定义关键词时有效，表示自定义库id
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibId = null;

        /**
         * 仅当Lable为Custom自定义关键词时有效，表示自定义库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LibName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.LibType = 'LibType' in params ? params.LibType : null;
        this.LibId = 'LibId' in params ? params.LibId : null;
        this.LibName = 'LibName' in params ? params.LibName : null;

    }
}

/**
 * 用户相关信息
 * @class
 */
class User extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户账号ID，如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户昵称
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 账号类别，"1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 性别 默认0 未知 1 男性 2 女性
         * @type {number || null}
         */
        this.Gender = null;

        /**
         * 年龄 默认0 未知
         * @type {number || null}
         */
        this.Age = null;

        /**
         * 用户等级，默认0 未知 1 低 2 中 3 高
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.Phone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Age = 'Age' in params ? params.Age : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.Phone = 'Phone' in params ? params.Phone : null;

    }
}

/**
 * 设备信息
 * @class
 */
class Device extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户IP
         * @type {string || null}
         */
        this.IP = null;

        /**
         * Mac地址
         * @type {string || null}
         */
        this.Mac = null;

        /**
         * 设备指纹Token
         * @type {string || null}
         */
        this.TokenId = null;

        /**
         * 设备指纹ID
         * @type {string || null}
         */
        this.DeviceId = null;

        /**
         * 设备序列号
         * @type {string || null}
         */
        this.IMEI = null;

        /**
         * IOS设备，Identifier For Advertising（广告标识符）
         * @type {string || null}
         */
        this.IDFA = null;

        /**
         * IOS设备，IDFV - Identifier For Vendor（应用开发商标识符）
         * @type {string || null}
         */
        this.IDFV = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IP = 'IP' in params ? params.IP : null;
        this.Mac = 'Mac' in params ? params.Mac : null;
        this.TokenId = 'TokenId' in params ? params.TokenId : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;
        this.IMEI = 'IMEI' in params ? params.IMEI : null;
        this.IDFA = 'IDFA' in params ? params.IDFA : null;
        this.IDFV = 'IDFV' in params ? params.IDFV : null;

    }
}

/**
 * TextModeration返回参数结构体
 * @class
 */
class TextModerationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 最终使用的BizType
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * 是否恶意 0：正常 1：可疑
         * @type {number || null}
         */
        this.EvilFlag = null;

        /**
         * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
         * @type {string || null}
         */
        this.Label = null;

        /**
         * 建议值,Block：打击,Review：待复审,Normal：正常
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * 命中的模型分值
         * @type {number || null}
         */
        this.Score = null;

        /**
         * 返回的详细结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<DetailResults> || null}
         */
        this.DetailResults = null;

        /**
         * 账号风险检测结果
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<RiskDetails> || null}
         */
        this.RiskDetails = null;

        /**
         * 预留字段，不同客户返回结果不同
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Extra = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.EvilFlag = 'EvilFlag' in params ? params.EvilFlag : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Score = 'Score' in params ? params.Score : null;

        if (params.DetailResults) {
            this.DetailResults = new Array();
            for (let z in params.DetailResults) {
                let obj = new DetailResults();
                obj.deserialize(params.DetailResults[z]);
                this.DetailResults.push(obj);
            }
        }

        if (params.RiskDetails) {
            this.RiskDetails = new Array();
            for (let z in params.RiskDetails) {
                let obj = new RiskDetails();
                obj.deserialize(params.RiskDetails[z]);
                this.RiskDetails.push(obj);
            }
        }
        this.Extra = 'Extra' in params ? params.Extra : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    RiskDetails: RiskDetails,
    TextModerationRequest: TextModerationRequest,
    DetailResults: DetailResults,
    User: User,
    Device: Device,
    TextModerationResponse: TextModerationResponse,

}

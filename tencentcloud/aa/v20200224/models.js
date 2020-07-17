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
 * 网赚防刷相关参数
 * @class
 */
class CrowdAntiRushInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 助力场景建议填写：活动发起人微信OpenID。
         * @type {string || null}
         */
        this.SponsorOpenId = null;

        /**
         * 助力场景建议填写：发起人设备号。
         * @type {string || null}
         */
        this.SponsorDeviceNumber = null;

        /**
         * 助力场景建议填写：发起人手机号。
         * @type {string || null}
         */
        this.SponsorPhone = null;

        /**
         * 助力场景建议填写：发起人IP。
         * @type {string || null}
         */
        this.SponsorIp = null;

        /**
         * 助力场景建议填写：活动链接。
         * @type {string || null}
         */
        this.CampaignUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SponsorOpenId = 'SponsorOpenId' in params ? params.SponsorOpenId : null;
        this.SponsorDeviceNumber = 'SponsorDeviceNumber' in params ? params.SponsorDeviceNumber : null;
        this.SponsorPhone = 'SponsorPhone' in params ? params.SponsorPhone : null;
        this.SponsorIp = 'SponsorIp' in params ? params.SponsorIp : null;
        this.CampaignUrl = 'CampaignUrl' in params ? params.CampaignUrl : null;

    }
}

/**
 * QueryActivityAntiRush返回参数结构体
 * @class
 */
class QueryActivityAntiRushResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作时间戳，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.PostTime = null;

        /**
         * 用户操作的真实外网 IP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 0：表示无恶意。
1 - 4：恶意等级由低到高。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 风险类型。

账号风险：

1，账号信用低，账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素；
2，垃圾账号，疑似批量注册小号，近期存在严重违规或大量举报；
3，无效账号，送检账号参数无法成功解析，请检查微信openid是否有误 ，QQopenid是否与appidU对应，手机号是否有误。
4，黑名单，该账号在业务侧有过拉黑记录
5，白名单，该账号在业务侧有过加白名单记录

行为风险：
101，批量操作，存在ip/设备/环境等因素的聚集性异常；
102，自动机，疑似自动机批量请求；
104，微信登录态无效，检查wxToken参数，是否已经失效；

环境风险：
201，环境异常，操作ip/设备/环境存在异常。当前ip为非常用ip或恶意ip段；
205，非公网有效ip，传进来的IP地址为内网ip地址或者ip保留地址；
206，设备异常，该设备存在异常的使用行为
         * @type {Array.<number> || null}
         */
        this.RiskType = null;

        /**
         * accountType是QQ或微信开放账号时，用于标识QQ或微信用户登录后关联业务自身的账号ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssociateAccount = null;

        /**
         * 用户ID 
accountType不同对应不同的用户ID。如果是QQ或微信用户则填入对应的openId
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 用户操作的目的ID 
比如：点赞，该字段就是被点 赞的消息 id，如果是投票，就是被投号码的 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RootId = null;

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
        this.PostTime = 'PostTime' in params ? params.PostTime : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.RiskType = 'RiskType' in params ? params.RiskType : null;
        this.AssociateAccount = 'AssociateAccount' in params ? params.AssociateAccount : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.RootId = 'RootId' in params ? params.RootId : null;
        this.CodeDesc = 'CodeDesc' in params ? params.CodeDesc : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 活动防刷高级版业务出参。
 * @class
 */
class OutputActivityAntiRushAdvancedValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号ID。对应输入参数：
AccountType是1时，对应QQ的OpenID。
AccountType是2时，对应微信的OpenID/UnionID。
AccountType是4时，对应手机号。
AccountType是8时，对应imei、idfa、imeiMD5或者idfaMD5。
AccountType是0时，对应账号信息。
AccountType是10004时，对应手机号的MD5。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 操作时间戳，单位秒（对应输入参数）。
         * @type {number || null}
         */
        this.PostTime = null;

        /**
         * AccountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号ID（对应输入参数）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssociateAccount = null;

        /**
         * 操作来源的外网IP（对应输入参数）。
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 风险值：
0：表示无恶意。
1～4：恶意等级由低到高。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 风险类型，详情请参见下文RiskType详细说明。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.RiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PostTime = 'PostTime' in params ? params.PostTime : null;
        this.AssociateAccount = 'AssociateAccount' in params ? params.AssociateAccount : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.RiskType = 'RiskType' in params ? params.RiskType : null;

    }
}

/**
 * QQ账号信息。
 * @class
 */
class QQAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * QQ的OpenID。
         * @type {string || null}
         */
        this.QQOpenId = null;

        /**
         * QQ分配给网站或应用的AppId，用来唯一标识网站或应用。
         * @type {string || null}
         */
        this.AppIdUser = null;

        /**
         * 用于标识QQ用户登录后所关联业务自身的账号ID。
         * @type {string || null}
         */
        this.AssociateAccount = null;

        /**
         * 账号绑定的手机号。
         * @type {string || null}
         */
        this.MobilePhone = null;

        /**
         * 用户设备号。
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
        this.QQOpenId = 'QQOpenId' in params ? params.QQOpenId : null;
        this.AppIdUser = 'AppIdUser' in params ? params.AppIdUser : null;
        this.AssociateAccount = 'AssociateAccount' in params ? params.AssociateAccount : null;
        this.MobilePhone = 'MobilePhone' in params ? params.MobilePhone : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * ManageMarketingRisk请求参数结构体
 * @class
 */
class ManageMarketingRiskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务入参
         * @type {InputManageMarketingRisk || null}
         */
        this.BusinessSecurityData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BusinessSecurityData) {
            let obj = new InputManageMarketingRisk();
            obj.deserialize(params.BusinessSecurityData)
            this.BusinessSecurityData = obj;
        }

    }
}

/**
 * 影响风控出参
 * @class
 */
class OutputManageMarketingRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码。0表示成功，非0标识失败错误码。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * UTF-8编码，出错消息。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 业务详情。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputManageMarketingRiskValue || null}
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Value) {
            let obj = new OutputManageMarketingRiskValue();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * 诈骗信息。
 * @class
 */
class OnlineScamInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 内容标签。
         * @type {string || null}
         */
        this.ContentLabel = null;

        /**
         * 内容风险等级：
0：正常。
1：可疑。
         * @type {number || null}
         */
        this.ContentRiskLevel = null;

        /**
         * 内容产生形式：
0：对话。
1：广播。
         * @type {number || null}
         */
        this.ContentType = null;

        /**
         * 诈骗账号类型：
1：11位手机号。
2：QQ账号。
         * @type {number || null}
         */
        this.FraudType = null;

        /**
         * 诈骗账号，手机号或QQ账号。
         * @type {string || null}
         */
        this.FraudAccount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ContentLabel = 'ContentLabel' in params ? params.ContentLabel : null;
        this.ContentRiskLevel = 'ContentRiskLevel' in params ? params.ContentRiskLevel : null;
        this.ContentType = 'ContentType' in params ? params.ContentType : null;
        this.FraudType = 'FraudType' in params ? params.FraudType : null;
        this.FraudAccount = 'FraudAccount' in params ? params.FraudAccount : null;

    }
}

/**
 * 营销风控入参
 * @class
 */
class InputManageMarketingRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号信息。
         * @type {AccountInfo || null}
         */
        this.Account = null;

        /**
         * 场景类型。
1：活动防刷
2：登录保护
3：注册保护
4：活动防刷高级版（网赚）
         * @type {number || null}
         */
        this.SceneType = null;

        /**
         * 登录来源的外网IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 用户操作时间戳，单位秒（格林威治时间精确到秒，如1501590972）。
         * @type {number || null}
         */
        this.PostTime = null;

        /**
         * 用户唯一标识。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 设备指纹token。
         * @type {string || null}
         */
        this.DeviceToken = null;

        /**
         * 设备指纹BusinessId
         * @type {number || null}
         */
        this.DeviceBusinessId = null;

        /**
         * 业务ID。网站或应用在多个业务中使用此服务，通过此ID区分统计数据。
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * 昵称，UTF-8 编码。
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 用户邮箱地址（非系统自动生成）。
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 是否识别设备异常：
0：不识别。
1：识别。
         * @type {number || null}
         */
        this.CheckDevice = null;

        /**
         * 用户HTTP请求中的Cookie进行2次hash的值，只要保证相同Cookie的hash值一致即可。
         * @type {string || null}
         */
        this.CookieHash = null;

        /**
         * 用户HTTP请求的Referer值。
         * @type {string || null}
         */
        this.Referer = null;

        /**
         * 用户HTTP请求的User-Agent值。
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * 用户HTTP请求的X-Forwarded-For值。
         * @type {string || null}
         */
        this.XForwardedFor = null;

        /**
         * MAC地址或设备唯一标识。
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 手机制造商ID，如果手机注册，请带上此信息。
         * @type {string || null}
         */
        this.VendorId = null;

        /**
         * 网赚防刷相关信息。SceneType为4时填写。
         * @type {CrowdAntiRushInfo || null}
         */
        this.CrowdAntiRush = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Account) {
            let obj = new AccountInfo();
            obj.deserialize(params.Account)
            this.Account = obj;
        }
        this.SceneType = 'SceneType' in params ? params.SceneType : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.PostTime = 'PostTime' in params ? params.PostTime : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.DeviceToken = 'DeviceToken' in params ? params.DeviceToken : null;
        this.DeviceBusinessId = 'DeviceBusinessId' in params ? params.DeviceBusinessId : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.CheckDevice = 'CheckDevice' in params ? params.CheckDevice : null;
        this.CookieHash = 'CookieHash' in params ? params.CookieHash : null;
        this.Referer = 'Referer' in params ? params.Referer : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.XForwardedFor = 'XForwardedFor' in params ? params.XForwardedFor : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.VendorId = 'VendorId' in params ? params.VendorId : null;

        if (params.CrowdAntiRush) {
            let obj = new CrowdAntiRushInfo();
            obj.deserialize(params.CrowdAntiRush)
            this.CrowdAntiRush = obj;
        }

    }
}

/**
 * 活动防刷高级版业务入参。
 * @class
 */
class InputActivityAntiRushAdvanced extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号信息。
         * @type {AccountInfo || null}
         */
        this.Account = null;

        /**
         * 用户IP（外网有效IP地址）。
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 用户操作时间戳，单位秒（格林威治时间精确到秒，如1501590972）。
         * @type {number || null}
         */
        this.PostTime = null;

        /**
         * 可选填写。详情请跳转至SponsorInfo查看。
         * @type {SponsorInfo || null}
         */
        this.Sponsor = null;

        /**
         * 可选填写。详情请跳转至OnlineScamInfo查看。
         * @type {OnlineScamInfo || null}
         */
        this.OnlineScam = null;

        /**
         * 业务ID。网站或应用在多个业务中使用此服务，通过此ID区分统计数据。
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * 昵称，UTF-8 编码。
         * @type {string || null}
         */
        this.Nickname = null;

        /**
         * 用户邮箱地址（非系统自动生成）。
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 是否识别设备异常：
0：不识别。
1：识别。
         * @type {number || null}
         */
        this.CheckDevice = null;

        /**
         * 用户HTTP请求中的Cookie进行2次hash的值，只要保证相同Cookie的hash值一致即可。
         * @type {string || null}
         */
        this.CookieHash = null;

        /**
         * 用户HTTP请求的Referer值。
         * @type {string || null}
         */
        this.Referer = null;

        /**
         * 用户HTTP请求的User-Agent值。
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * 用户HTTP请求的X-Forwarded-For值。
         * @type {string || null}
         */
        this.XForwardedFor = null;

        /**
         * MAC地址或设备唯一标识。
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 手机制造商ID，如果手机注册，请带上此信息。
         * @type {string || null}
         */
        this.VendorId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Account) {
            let obj = new AccountInfo();
            obj.deserialize(params.Account)
            this.Account = obj;
        }
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.PostTime = 'PostTime' in params ? params.PostTime : null;

        if (params.Sponsor) {
            let obj = new SponsorInfo();
            obj.deserialize(params.Sponsor)
            this.Sponsor = obj;
        }

        if (params.OnlineScam) {
            let obj = new OnlineScamInfo();
            obj.deserialize(params.OnlineScam)
            this.OnlineScam = obj;
        }
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.Nickname = 'Nickname' in params ? params.Nickname : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.CheckDevice = 'CheckDevice' in params ? params.CheckDevice : null;
        this.CookieHash = 'CookieHash' in params ? params.CookieHash : null;
        this.Referer = 'Referer' in params ? params.Referer : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.XForwardedFor = 'XForwardedFor' in params ? params.XForwardedFor : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.VendorId = 'VendorId' in params ? params.VendorId : null;

    }
}

/**
 * 其它账号信息。
 * @class
 */
class OtherAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 其它账号信息：
AccountType是4时，填入真实的手机号（如13123456789）。
AccountType是8时，支持 imei、idfa、imeiMD5、idfaMD5 入参。
AccountType是0时，填入账号信息。
AccountType是10004时，填入手机号的MD5值。
注：imeiMd5 加密方式为：imei 明文小写后，进行 MD5 加密，加密后取小写值。IdfaMd5 加密方式为：idfa 明文大写后，进行 MD5 加密，加密后取小写值。
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 手机号，若 AccountType 是4（手机号）、或10004（手机号 MD5），则无需重复填写，否则填入对应的手机号（如13123456789）。
         * @type {string || null}
         */
        this.MobilePhone = null;

        /**
         * 用户设备号。若 AccountType 是8（设备号），则无需重复填写，否则填入对应的设备号。
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
        this.AccountId = 'AccountId' in params ? params.AccountId : null;
        this.MobilePhone = 'MobilePhone' in params ? params.MobilePhone : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * 账号信息。
 * @class
 */
class AccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户账号类型（默认开通 QQ 开放账号、手机号，手机 MD5 账号类型查询。如需使用微信开放账号，则需要 提交工单 由腾讯云进行资格审核，审核通过后方可正常使用微信开放账号）：
1：QQ开放账号。
2：微信开放账号。
4：手机号（暂仅支持国内手机号）。
8：设备号（imei/imeiMD5/idfa/idfaMd5）。
0：其他。
10004：手机号MD5。
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * QQ账号信息，AccountType是1时，该字段必填。
         * @type {QQAccountInfo || null}
         */
        this.QQAccount = null;

        /**
         * 微信账号信息，AccountType是2时，该字段必填。
         * @type {WeChatAccountInfo || null}
         */
        this.WeChatAccount = null;

        /**
         * 其它账号信息，AccountType是0、4、8或10004时，该字段必填。
         * @type {OtherAccountInfo || null}
         */
        this.OtherAccount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountType = 'AccountType' in params ? params.AccountType : null;

        if (params.QQAccount) {
            let obj = new QQAccountInfo();
            obj.deserialize(params.QQAccount)
            this.QQAccount = obj;
        }

        if (params.WeChatAccount) {
            let obj = new WeChatAccountInfo();
            obj.deserialize(params.WeChatAccount)
            this.WeChatAccount = obj;
        }

        if (params.OtherAccount) {
            let obj = new OtherAccountInfo();
            obj.deserialize(params.OtherAccount)
            this.OtherAccount = obj;
        }

    }
}

/**
 * QueryActivityAntiRushAdvanced返回参数结构体
 * @class
 */
class QueryActivityAntiRushAdvancedResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 结果信息
         * @type {OutputActivityAntiRushAdvanced || null}
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
            let obj = new OutputActivityAntiRushAdvanced();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ManageMarketingRisk返回参数结构体
 * @class
 */
class ManageMarketingRiskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务出参
注意：此字段可能返回 null，表示取不到有效值。
         * @type {OutputManageMarketingRisk || null}
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
            let obj = new OutputManageMarketingRisk();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 助力场景信息
 * @class
 */
class SponsorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 助力场景建议填写：活动发起人微信OpenID。
         * @type {string || null}
         */
        this.SponsorOpenId = null;

        /**
         * 助力场景建议填写：发起人设备号。
         * @type {string || null}
         */
        this.SponsorDeviceId = null;

        /**
         * 助力场景建议填写：发起人手机号。
         * @type {string || null}
         */
        this.SponsorPhone = null;

        /**
         * 助力场景建议填写：发起人IP。
         * @type {string || null}
         */
        this.SponsorIp = null;

        /**
         * 助力场景建议填写：活动链接。
         * @type {string || null}
         */
        this.CampaignUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SponsorOpenId = 'SponsorOpenId' in params ? params.SponsorOpenId : null;
        this.SponsorDeviceId = 'SponsorDeviceId' in params ? params.SponsorDeviceId : null;
        this.SponsorPhone = 'SponsorPhone' in params ? params.SponsorPhone : null;
        this.SponsorIp = 'SponsorIp' in params ? params.SponsorIp : null;
        this.CampaignUrl = 'CampaignUrl' in params ? params.CampaignUrl : null;

    }
}

/**
 * QueryActivityAntiRush请求参数结构体
 * @class
 */
class QueryActivityAntiRushRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户账号类型（默认开通 QQ 开放账号、手机号，手机 MD5 账号类型查询。如需使用微信开放账号，则需要 提交工单 由腾讯云进行资格审核，审核通过后方可正常使用微信开放账号）：
1：QQ 开放帐号。
2：微信开放账号。
4：手机号。
0：其他。
10004：手机号 MD5。
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * 用户 ID 不同的 accountType 对应不同的用户 ID。如果是 QQ，则填入对应的 openid，微信用户则填入对应的 openid/unionid，手机号则填入对应真实用户手机号（如13123456789）。
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 用户的真实外网 IP。若填入非外网有效ip，会返回level=0的风控结果，risktype中会有205的风险码返回作为标识
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 用户操作时间戳。
         * @type {string || null}
         */
        this.PostTime = null;

        /**
         * accountType 是QQ开放账号时，该参数必填，表示 QQ 开放平台分配给网站或应用的 AppID，用来唯一标识网站或应用。
         * @type {string || null}
         */
        this.AppIdU = null;

        /**
         * 昵称，UTF-8 编码。
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 手机号。若 accountType 选4（手机号）、或10004（手机号 MD5），则无需重复填写。否则填入对应的手机号（如15912345687）。accountType为1或2时，该字段支持MD5值；
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 用户邮箱地址。
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 注册时间戳。
         * @type {string || null}
         */
        this.RegisterTime = null;

        /**
         * 注册来源的外网 IP。
         * @type {string || null}
         */
        this.RegisterIp = null;

        /**
         * 用户 HTTP 请求中的 cookie 进行2次 hash 的值，只要保证相同 cookie 的 hash 值一致即可。
         * @type {string || null}
         */
        this.CookieHash = null;

        /**
         * 地址。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 登录来源：
0：其他。
1：PC 网页。
2：移动页面。
3：App。
4：微信公众号。
         * @type {string || null}
         */
        this.LoginSource = null;

        /**
         * 登录方式：
0：其他。
1：手动账号密码输入。
2：动态短信密码登录。
3：二维码扫描登录。
         * @type {string || null}
         */
        this.LoginType = null;

        /**
         * 登录耗时，单位：秒。
         * @type {string || null}
         */
        this.LoginSpend = null;

        /**
         * 用户操作的目的 ID，如点赞等，该字段就是被点赞的消息 ID，如果是投票，则为被投号码的 ID。
         * @type {string || null}
         */
        this.RootId = null;

        /**
         * 用户 HTTP 请求的 referer 值。
         * @type {string || null}
         */
        this.Referer = null;

        /**
         * 登录成功后跳转页面。
         * @type {string || null}
         */
        this.JumpUrl = null;

        /**
         * 用户 HTTP 请求的 userAgent。
         * @type {string || null}
         */
        this.UserAgent = null;

        /**
         * 用户 HTTP 请求中的 x_forward_for。
         * @type {string || null}
         */
        this.XForwardedFor = null;

        /**
         * 用户操作过程中鼠标单击次数。
         * @type {string || null}
         */
        this.MouseClickCount = null;

        /**
         * 用户操作过程中键盘单击次数。
         * @type {string || null}
         */
        this.KeyboardClickCount = null;

        /**
         * MAC 地址或设备唯一标识。
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 手机制造商 ID，如果手机注册，请带上此信息。
         * @type {string || null}
         */
        this.VendorId = null;

        /**
         * 手机设备号。支持以下格式：
1.imei明文
2.idfa明文,
3.imei小写后MD5值小写
4.idfa大写后MD5值小写
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * App 客户端版本。
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 业务 ID 网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 1：微信公众号。
2：微信小程序。
         * @type {string || null}
         */
        this.WxSubType = null;

        /**
         * Token 签名随机数，WxSubType为微信小程序时必填，建议16个字符。
         * @type {string || null}
         */
        this.RandNum = null;

        /**
         * 如果 accountType为2而且wxSubType有填，该字段必选，否则不需要填写；
如果是微信小程序（WxSubType=2），该字段为以ssesion_key为key去签名随机数radnNum得到的值（ hmac_sha256签名算法）；如果是微信公众号或第三方登录，则为授权的access_token（网页版本的access_Token,而且获取token的scope字段必需填写snsapi_userinfo；）
         * @type {string || null}
         */
        this.WxToken = null;

        /**
         * 是否识别设备异常：
0：不识别。
1：识别。
         * @type {string || null}
         */
        this.CheckDevice = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.PostTime = 'PostTime' in params ? params.PostTime : null;
        this.AppIdU = 'AppIdU' in params ? params.AppIdU : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.RegisterTime = 'RegisterTime' in params ? params.RegisterTime : null;
        this.RegisterIp = 'RegisterIp' in params ? params.RegisterIp : null;
        this.CookieHash = 'CookieHash' in params ? params.CookieHash : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.LoginSource = 'LoginSource' in params ? params.LoginSource : null;
        this.LoginType = 'LoginType' in params ? params.LoginType : null;
        this.LoginSpend = 'LoginSpend' in params ? params.LoginSpend : null;
        this.RootId = 'RootId' in params ? params.RootId : null;
        this.Referer = 'Referer' in params ? params.Referer : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.XForwardedFor = 'XForwardedFor' in params ? params.XForwardedFor : null;
        this.MouseClickCount = 'MouseClickCount' in params ? params.MouseClickCount : null;
        this.KeyboardClickCount = 'KeyboardClickCount' in params ? params.KeyboardClickCount : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.VendorId = 'VendorId' in params ? params.VendorId : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.WxSubType = 'WxSubType' in params ? params.WxSubType : null;
        this.RandNum = 'RandNum' in params ? params.RandNum : null;
        this.WxToken = 'WxToken' in params ? params.WxToken : null;
        this.CheckDevice = 'CheckDevice' in params ? params.CheckDevice : null;

    }
}

/**
 * 活动防刷高级版业务出参。
 * @class
 */
class OutputActivityAntiRushAdvanced extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码。0表示成功，非0标识失败错误码。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * UTF-8编码，出错消息。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 服务调用结果。
         * @type {OutputActivityAntiRushAdvancedValue || null}
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
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Value) {
            let obj = new OutputActivityAntiRushAdvancedValue();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * 营销风控出参值
 * @class
 */
class OutputManageMarketingRiskValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号ID。对应输入参数：
AccountType是1时，对应QQ的OpenID。
AccountType是2时，对应微信的OpenID/UnionID。
AccountType是4时，对应手机号。
AccountType是8时，对应imei、idfa、imeiMD5或者idfaMD5。
AccountType是0时，对应账号信息。
AccountType是10004时，对应手机号的MD5。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 操作时间戳，单位秒（对应输入参数）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.PostTime = null;

        /**
         * 对应输入参数，AccountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssociateAccount = null;

        /**
         * 操作来源的外网IP（对应输入参数）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 风险值
pass : 无恶意
review：需要人工审核
reject：拒绝，高风险恶意
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RiskLevel = null;

        /**
         * 风险类型，请参考官网风险类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.RiskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PostTime = 'PostTime' in params ? params.PostTime : null;
        this.AssociateAccount = 'AssociateAccount' in params ? params.AssociateAccount : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.RiskLevel = 'RiskLevel' in params ? params.RiskLevel : null;
        this.RiskType = 'RiskType' in params ? params.RiskType : null;

    }
}

/**
 * 微信账号信息。
 * @class
 */
class WeChatAccountInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 微信的OpenID/UnionID 。
         * @type {string || null}
         */
        this.WeChatOpenId = null;

        /**
         * 微信开放账号类型：
1：微信公众号/微信第三方登录。
2：微信小程序。
         * @type {number || null}
         */
        this.WeChatSubType = null;

        /**
         * 随机串。如果WeChatSubType是2，该字段必填。Token签名随机数，建议16个字符。
         * @type {string || null}
         */
        this.RandStr = null;

        /**
         * 如果WeChatSubType是1，填入授权的access_token（注意：不是普通access_token，详情请参阅官方说明文档。获取网页版本的access_token时，scope字段必需填写snsapi_userinfo。
如果WeChatSubType是2，填入以session_key为密钥签名随机数RandStr（hmac_sha256签名算法）得到的字符串。
         * @type {string || null}
         */
        this.WeChatAccessToken = null;

        /**
         * 用于标识微信用户登录后所关联业务自身的账号ID。
         * @type {string || null}
         */
        this.AssociateAccount = null;

        /**
         * 账号绑定的手机号。
         * @type {string || null}
         */
        this.MobilePhone = null;

        /**
         * 用户设备号。
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
        this.WeChatOpenId = 'WeChatOpenId' in params ? params.WeChatOpenId : null;
        this.WeChatSubType = 'WeChatSubType' in params ? params.WeChatSubType : null;
        this.RandStr = 'RandStr' in params ? params.RandStr : null;
        this.WeChatAccessToken = 'WeChatAccessToken' in params ? params.WeChatAccessToken : null;
        this.AssociateAccount = 'AssociateAccount' in params ? params.AssociateAccount : null;
        this.MobilePhone = 'MobilePhone' in params ? params.MobilePhone : null;
        this.DeviceId = 'DeviceId' in params ? params.DeviceId : null;

    }
}

/**
 * QueryActivityAntiRushAdvanced请求参数结构体
 * @class
 */
class QueryActivityAntiRushAdvancedRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务入参
         * @type {InputActivityAntiRushAdvanced || null}
         */
        this.BusinessSecurityData = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BusinessSecurityData) {
            let obj = new InputActivityAntiRushAdvanced();
            obj.deserialize(params.BusinessSecurityData)
            this.BusinessSecurityData = obj;
        }

    }
}

module.exports = {
    CrowdAntiRushInfo: CrowdAntiRushInfo,
    QueryActivityAntiRushResponse: QueryActivityAntiRushResponse,
    OutputActivityAntiRushAdvancedValue: OutputActivityAntiRushAdvancedValue,
    QQAccountInfo: QQAccountInfo,
    ManageMarketingRiskRequest: ManageMarketingRiskRequest,
    OutputManageMarketingRisk: OutputManageMarketingRisk,
    OnlineScamInfo: OnlineScamInfo,
    InputManageMarketingRisk: InputManageMarketingRisk,
    InputActivityAntiRushAdvanced: InputActivityAntiRushAdvanced,
    OtherAccountInfo: OtherAccountInfo,
    AccountInfo: AccountInfo,
    QueryActivityAntiRushAdvancedResponse: QueryActivityAntiRushAdvancedResponse,
    ManageMarketingRiskResponse: ManageMarketingRiskResponse,
    SponsorInfo: SponsorInfo,
    QueryActivityAntiRushRequest: QueryActivityAntiRushRequest,
    OutputActivityAntiRushAdvanced: OutputActivityAntiRushAdvanced,
    OutputManageMarketingRiskValue: OutputManageMarketingRiskValue,
    WeChatAccountInfo: WeChatAccountInfo,
    QueryActivityAntiRushAdvancedRequest: QueryActivityAntiRushAdvancedRequest,

}

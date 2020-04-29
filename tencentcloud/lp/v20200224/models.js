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
 * QueryLoginProtection请求参数结构体
 * @class
 */
class QueryLoginProtectionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 登录来源的外网 IP。
         * @type {string || null}
         */
        this.LoginIp = null;

        /**
         * 用户 ID 不同的 accountType 对应不同的用户 ID。如果是 QQ，则填入对应的 openid，微信用户则填入对应的 openid/unionid，手机号则填入对应真实用户手机号（如13123456789）。
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 登录时间戳，单位：秒。
         * @type {string || null}
         */
        this.LoginTime = null;

        /**
         * 用户账号类型（QQ 开放帐号、微信开放账号需要 提交工单 由腾讯云进行资格审核）：
1：QQ 开放帐号。
2：微信开放账号。
4：手机号。
0：其他。
10004：手机号 MD5。
         * @type {string || null}
         */
        this.AccountType = null;

        /**
         * accountType 是 QQ 或微信开放账号时，该参数必填，表示 QQ 或微信分配给网站或应用的 AppID，用来唯一标识网站或应用。
         * @type {string || null}
         */
        this.AppIdU = null;

        /**
         * accountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号 ID。
         * @type {string || null}
         */
        this.AssociateAccount = null;

        /**
         * 昵称，UTF-8 编码。
         * @type {string || null}
         */
        this.NickName = null;

        /**
         * 手机号：国家代码-手机号， 如0086-15912345687（0086前不需要+号）。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 用户邮箱地址（非系统自动生成）。
         * @type {string || null}
         */
        this.EmailAddress = null;

        /**
         * 注册来源的外网 IP。
         * @type {string || null}
         */
        this.RegisterTime = null;

        /**
         * 地址。
         * @type {string || null}
         */
        this.Address = null;

        /**
         * 用户 HTTP 请求中的 cookie 进行2次 hash 的值，只要保证相同 cookie 的 hash 值一致即可。
         * @type {string || null}
         */
        this.CookieHash = null;

        /**
         * 登录来源：
0：其他
1：PC 网页
2：移动页面
3：App
4：微信公众号
         * @type {string || null}
         */
        this.LoginSource = null;

        /**
         * 登录方式：
0：其他
1：手动帐号密码输入
2：动态短信密码登录
3：二维码扫描登录
         * @type {string || null}
         */
        this.LoginType = null;

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
         * 注册结果：
0：失败
1：成功
         * @type {string || null}
         */
        this.Result = null;

        /**
         * 失败原因：
0：其他
1：参数错误
2：帐号冲突
3：验证错误
         * @type {string || null}
         */
        this.Reason = null;

        /**
         * 登录耗时，单位：秒。
         * @type {string || null}
         */
        this.LoginSpend = null;

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
         * App 客户端版本。
         * @type {string || null}
         */
        this.AppVersion = null;

        /**
         * 手机设备号。
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * 业务 ID 网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据。
         * @type {string || null}
         */
        this.BusinessId = null;

        /**
         * 1：微信公众号
2：微信小程序
         * @type {string || null}
         */
        this.WxSubType = null;

        /**
         * Token 签名随机数，微信小程序必填，建议16个字符。
         * @type {string || null}
         */
        this.RandNum = null;

        /**
         * 如果是微信小程序，该字段为以 ssesion_key 为 key 去签名随机数radnNum得到的值（hmac_sha256 签名算法）。
如果是微信公众号或第三方登录，则为授权的 access_token（注意：不是普通 access_token，具体看 微信官方文档）。
         * @type {string || null}
         */
        this.WxToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LoginIp = 'LoginIp' in params ? params.LoginIp : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.AccountType = 'AccountType' in params ? params.AccountType : null;
        this.AppIdU = 'AppIdU' in params ? params.AppIdU : null;
        this.AssociateAccount = 'AssociateAccount' in params ? params.AssociateAccount : null;
        this.NickName = 'NickName' in params ? params.NickName : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.EmailAddress = 'EmailAddress' in params ? params.EmailAddress : null;
        this.RegisterTime = 'RegisterTime' in params ? params.RegisterTime : null;
        this.Address = 'Address' in params ? params.Address : null;
        this.CookieHash = 'CookieHash' in params ? params.CookieHash : null;
        this.LoginSource = 'LoginSource' in params ? params.LoginSource : null;
        this.LoginType = 'LoginType' in params ? params.LoginType : null;
        this.Referer = 'Referer' in params ? params.Referer : null;
        this.JumpUrl = 'JumpUrl' in params ? params.JumpUrl : null;
        this.UserAgent = 'UserAgent' in params ? params.UserAgent : null;
        this.XForwardedFor = 'XForwardedFor' in params ? params.XForwardedFor : null;
        this.MouseClickCount = 'MouseClickCount' in params ? params.MouseClickCount : null;
        this.KeyboardClickCount = 'KeyboardClickCount' in params ? params.KeyboardClickCount : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.Reason = 'Reason' in params ? params.Reason : null;
        this.LoginSpend = 'LoginSpend' in params ? params.LoginSpend : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.VendorId = 'VendorId' in params ? params.VendorId : null;
        this.AppVersion = 'AppVersion' in params ? params.AppVersion : null;
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.WxSubType = 'WxSubType' in params ? params.WxSubType : null;
        this.RandNum = 'RandNum' in params ? params.RandNum : null;
        this.WxToken = 'WxToken' in params ? params.WxToken : null;

    }
}

/**
 * QueryLoginProtection返回参数结构体
 * @class
 */
class QueryLoginProtectionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * AssociateAccount

accountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号 ID。
LoginTime

操作时间。
Uid

用户 ID 不同的 accountType 对应不同的用户 ID。如果是 QQ，则填入对应的 openid，微信用户则填入对应的 openid/unionid，手机号则填入对应真实用户手机号（如13123456789）。
LoginIp

登录 IP。
Level

0：表示无恶意。
1 - 4：恶意等级由低到高。
RiskType

风险类型。
出参不用填"Req业务侧错误码。成功时返回 Success，错误时返回具体业务错误原因。uestId"等公共出参， 详细解释>>>
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CodeDesc = null;

        /**
         * accountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.AssociateAccount = null;

        /**
         * 操作时间。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoginTime = null;

        /**
         * 用户 ID 不同的 accountType 对应不同的用户 ID。如果是 QQ，则填入对应的 openid，微信用户则填入对应的 openid/unionid，手机号则填入对应真实用户手机号（如13123456789）。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 登录 IP。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.LoginIp = null;

        /**
         * 0：表示无恶意。
1 - 4：恶意等级由低到高。
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 风险类型。
         * @type {Array.<number> || null}
         */
        this.RiskType = null;

        /**
         * accountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号 ID。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.RootId = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CodeDesc = 'CodeDesc' in params ? params.CodeDesc : null;
        this.AssociateAccount = 'AssociateAccount' in params ? params.AssociateAccount : null;
        this.LoginTime = 'LoginTime' in params ? params.LoginTime : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.LoginIp = 'LoginIp' in params ? params.LoginIp : null;
        this.Level = 'Level' in params ? params.Level : null;
        this.RiskType = 'RiskType' in params ? params.RiskType : null;
        this.RootId = 'RootId' in params ? params.RootId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    QueryLoginProtectionRequest: QueryLoginProtectionRequest,
    QueryLoginProtectionResponse: QueryLoginProtectionResponse,

}

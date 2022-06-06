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

        /**
         * 业务入参
         * @type {InputCryptoManageMarketingRisk || null}
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
            let obj = new InputManageMarketingRisk();
            obj.deserialize(params.BusinessSecurityData)
            this.BusinessSecurityData = obj;
        }

        if (params.BusinessCryptoData) {
            let obj = new InputCryptoManageMarketingRisk();
            obj.deserialize(params.BusinessCryptoData)
            this.BusinessCryptoData = obj;
        }

    }
}

/**
 * DescribeRiskTrends请求参数结构体
 * @class
 */
class DescribeRiskTrendsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务入参
         * @type {InputFrontRisk || null}
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
            let obj = new InputFrontRisk();
            obj.deserialize(params.BusinessSecurityData)
            this.BusinessSecurityData = obj;
        }

    }
}

/**
 * DescribeRiskAssessment请求参数结构体
 * @class
 */
class DescribeRiskAssessmentRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

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
         * 账号类型
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
 * 风险趋势统计--值
 * @class
 */
class OutputFrontRiskValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求次数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Requests = null;

        /**
         * 日期标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Index = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Requests = 'Requests' in params ? params.Requests : null;
        this.Index = 'Index' in params ? params.Index : null;

    }
}

/**
 * DescribeRiskAssessment返回参数结构体
 * @class
 */
class DescribeRiskAssessmentResponse extends  AbstractModel {
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
 * 全栈式风控引擎出参值
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
账号风险 
1 账号信用低,账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素
11 疑似 低活跃账号,账号活跃度与正常用户有差异
2 垃圾账号 疑似批量注册小号，近期存在严重违规或大量举报
21 疑似小号 账号有疑似线上养号，小号等行为
22 疑似违规账号 账号曾有违规行为、曾被举报过、曾因违规被处罚过等
3 无效账号 送检账号参数无法成功解析，请检查微信 openid 是否有误/appid与QQopenid无法关联/微信openid权限是否有开通/手机号是否为中国大陆手机号；
4 黑名单 该账号在业务侧有过拉黑记录
5 白名单 业务自行有添加过白名单记录
行为风险 
101 批量操作 存在 ip/设备/环境等因素的聚集性异常
1011 疑似 IP 属性聚集，出现 IP 聚集
1012 疑似 设备属性聚集 出现设备聚集
102 自动机 疑似自动机批量请求
103 恶意行为-网赚 疑似网赚
104 微信登录态无效 检查 WeChatAccessToken 参数，是否已经失效；
201 环境风险 环境异常 操作 ip/设备/环境存在异常。当前 ip 为非常用 ip 或恶意 ip 段
2011 疑似 非常用IP 请求 当前请求 IP 非该账号常用 IP
2012 疑似 IP 异常 使用 idc 机房 ip 或 使用代理 ip 或 使用恶意 ip 等
205 非公网有效ip 传进来的 IP 地址为内网 ip 地址或者 ip 保留地址；
设备风险
206  设备异常 该设备存在异常的使用行为
2061 疑似 非常用设备 当前请求的设备非该账号常用设备
2062 疑似 虚拟设备 请求设备为模拟器、脚本、云设备等虚拟设备
2063 疑似 群控设备 请求设备为猫池、手机墙等群控设备
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
        this.RiskType = null;

        /**
         * 唯一ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.ConstId = null;

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
        this.ConstId = 'ConstId' in params ? params.ConstId : null;

    }
}

/**
 * 风险趋势统计--出参
 * @class
 */
class OutputFrontRiskData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回码[0：成功；非0：标识失败错误码]。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 出错消息[UTF-8编码]。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 返回结果。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OutputFrontRisk> || null}
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
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new OutputFrontRisk();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * 风险趋势统计出参，需要为数组
 * @class
 */
class OutputFrontRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 参数值
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<OutputFrontRiskValue> || null}
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
        this.Name = 'Name' in params ? params.Name : null;

        if (params.Value) {
            this.Value = new Array();
            for (let z in params.Value) {
                let obj = new OutputFrontRiskValue();
                obj.deserialize(params.Value[z]);
                this.Value.push(obj);
            }
        }

    }
}

/**
 * 风险趋势统计--入参
 * @class
 */
class InputFrontRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 事件ID
         * @type {number || null}
         */
        this.EventId = null;

        /**
         * 开始时间
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * 结束时间
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 趋势类型
         * @type {number || null}
         */
        this.Type = null;

        /**
         * 当前开始时间
         * @type {string || null}
         */
        this.CurrentStartTime = null;

        /**
         * 当前结束时间
         * @type {string || null}
         */
        this.CurrentEndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EventId = 'EventId' in params ? params.EventId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CurrentStartTime = 'CurrentStartTime' in params ? params.CurrentStartTime : null;
        this.CurrentEndTime = 'CurrentEndTime' in params ? params.CurrentEndTime : null;

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
 * 入参的详细参数信息
 * @class
 */
class InputDetails extends  AbstractModel {
    constructor(){
        super();

        /**
         * 字段名称
         * @type {string || null}
         */
        this.FieldName = null;

        /**
         * 字段值
         * @type {string || null}
         */
        this.FieldValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FieldName = 'FieldName' in params ? params.FieldName : null;
        this.FieldValue = 'FieldValue' in params ? params.FieldValue : null;

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
         * token
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
 * 业务出参
 * @class
 */
class OutputDescribeRiskModel extends  AbstractModel {
    constructor(){
        super();

        /**
         * 请求返回状态值，0为成功，别的结合Message查看
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.Code = null;

        /**
         * 请求返回信息
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 请求返回结果
         * @type {OutputDescribeRiskModelValue || null}
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
            let obj = new OutputDescribeRiskModelValue();
            obj.deserialize(params.Value)
            this.Value = obj;
        }

    }
}

/**
 * 全栈式风控引擎出参
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

        /**
         * 控制台显示的req_id。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.UUid = null;

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
        this.UUid = 'UUid' in params ? params.UUid : null;

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
         * id
         * @type {string || null}
         */
        this.AccountId = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.MobilePhone = null;

        /**
         * id
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
 * DescribeRiskModel返回参数结构体
 * @class
 */
class DescribeRiskModelResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务出参
         * @type {OutputDescribeRiskModel || null}
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
            let obj = new OutputDescribeRiskModel();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 全栈式风控引擎入参
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
         * 场景类型：场景SceneCode, 控制台上新建对应的场景并获取对应的值；
例如：e_register_protection_1521184361
控制台链接：https://console.cloud.tencent.com/rce/risk/sceneroot；
         * @type {string || null}
         */
        this.SceneCode = null;

        /**
         * 登录来源的外网IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 时间戳
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
         * 设备类型：
1：Android
2：IOS
         * @type {number || null}
         */
        this.DeviceType = null;

        /**
         * 详细信息
         * @type {Array.<InputDetails> || null}
         */
        this.Details = null;

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
         * 平台: 1android
         * @type {string || null}
         */
        this.Platform = null;

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
        this.SceneCode = 'SceneCode' in params ? params.SceneCode : null;
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
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;

        if (params.Details) {
            this.Details = new Array();
            for (let z in params.Details) {
                let obj = new InputDetails();
                obj.deserialize(params.Details[z]);
                this.Details.push(obj);
            }
        }

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
        this.Platform = 'Platform' in params ? params.Platform : null;

    }
}

/**
 * 全栈式风控引擎入参
 * @class
 */
class InputCryptoManageMarketingRisk extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否授权
         * @type {string || null}
         */
        this.IsAuthorized = null;

        /**
         * 加密类型
         * @type {string || null}
         */
        this.CryptoType = null;

        /**
         * 加密内容
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
        this.IsAuthorized = 'IsAuthorized' in params ? params.IsAuthorized : null;
        this.CryptoType = 'CryptoType' in params ? params.CryptoType : null;
        this.CryptoContent = 'CryptoContent' in params ? params.CryptoContent : null;

    }
}

/**
 * 网赚防刷相关参数
 * @class
 */
class SponsorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * OpenID
         * @type {string || null}
         */
        this.SponsorOpenId = null;

        /**
         * 设备号
         * @type {string || null}
         */
        this.SponsorDeviceNumber = null;

        /**
         * 手机号
         * @type {string || null}
         */
        this.SponsorPhone = null;

        /**
         * IP
         * @type {string || null}
         */
        this.SponsorIp = null;

        /**
         * 链接
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
         * 类型
         * @type {number || null}
         */
        this.FraudType = null;

        /**
         * 账号
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
 * 风控建模服务出参对应值
 * @class
 */
class OutputDescribeRiskModelValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模型分数值
         * @type {number || null}
         */
        this.ApplyScore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ApplyScore = 'ApplyScore' in params ? params.ApplyScore : null;

    }
}

/**
 * DescribeRiskTrends返回参数结构体
 * @class
 */
class DescribeRiskTrendsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务出参
         * @type {OutputFrontRiskData || null}
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
            let obj = new OutputFrontRiskData();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRiskModel请求参数结构体
 * @class
 */
class DescribeRiskModelRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务入参
         * @type {InputDescribeRiskModelData || null}
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
            let obj = new InputDescribeRiskModelData();
            obj.deserialize(params.BusinessSecurityData)
            this.BusinessSecurityData = obj;
        }

    }
}

/**
 * 客户请求入参
 * @class
 */
class InputDescribeRiskModelData extends  AbstractModel {
    constructor(){
        super();

        /**
         * 业务参数加密后的签名值
         * @type {string || null}
         */
        this.UserData = null;

        /**
         * 调用时间戳，精确到秒
         * @type {number || null}
         */
        this.ApplyDate = null;

        /**
         * 客户业务侧标识用户的唯一ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 是否为测试流量
         * @type {number || null}
         */
        this.IsTest = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserData = 'UserData' in params ? params.UserData : null;
        this.ApplyDate = 'ApplyDate' in params ? params.ApplyDate : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.IsTest = 'IsTest' in params ? params.IsTest : null;

    }
}

module.exports = {
    QQAccountInfo: QQAccountInfo,
    ManageMarketingRiskRequest: ManageMarketingRiskRequest,
    DescribeRiskTrendsRequest: DescribeRiskTrendsRequest,
    DescribeRiskAssessmentRequest: DescribeRiskAssessmentRequest,
    AccountInfo: AccountInfo,
    OutputFrontRiskValue: OutputFrontRiskValue,
    DescribeRiskAssessmentResponse: DescribeRiskAssessmentResponse,
    OutputManageMarketingRiskValue: OutputManageMarketingRiskValue,
    OutputFrontRiskData: OutputFrontRiskData,
    OutputFrontRisk: OutputFrontRisk,
    InputFrontRisk: InputFrontRisk,
    ManageMarketingRiskResponse: ManageMarketingRiskResponse,
    InputDetails: InputDetails,
    WeChatAccountInfo: WeChatAccountInfo,
    OutputDescribeRiskModel: OutputDescribeRiskModel,
    OutputManageMarketingRisk: OutputManageMarketingRisk,
    OtherAccountInfo: OtherAccountInfo,
    DescribeRiskModelResponse: DescribeRiskModelResponse,
    InputManageMarketingRisk: InputManageMarketingRisk,
    InputCryptoManageMarketingRisk: InputCryptoManageMarketingRisk,
    SponsorInfo: SponsorInfo,
    OnlineScamInfo: OnlineScamInfo,
    OutputDescribeRiskModelValue: OutputDescribeRiskModelValue,
    DescribeRiskTrendsResponse: DescribeRiskTrendsResponse,
    DescribeRiskModelRequest: DescribeRiskModelRequest,
    InputDescribeRiskModelData: InputDescribeRiskModelData,

}

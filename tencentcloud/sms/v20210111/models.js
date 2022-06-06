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
 * PullSmsReplyStatus请求参数结构体
 * @class
 */
class PullSmsReplyStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取最大条数，最多100条。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;

    }
}

/**
 * DeleteSmsTemplate返回参数结构体
 * @class
 */
class DeleteSmsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除模板响应
         * @type {DeleteTemplateStatus || null}
         */
        this.DeleteTemplateStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeleteTemplateStatus) {
            let obj = new DeleteTemplateStatus();
            obj.deserialize(params.DeleteTemplateStatus)
            this.DeleteTemplateStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySmsTemplate返回参数结构体
 * @class
 */
class ModifySmsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改模板参数响应
         * @type {ModifyTemplateStatus || null}
         */
        this.ModifyTemplateStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModifyTemplateStatus) {
            let obj = new ModifyTemplateStatus();
            obj.deserialize(params.ModifyTemplateStatus)
            this.ModifyTemplateStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySmsSign请求参数结构体
 * @class
 */
class ModifySmsSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改的签名 ID。
         * @type {number || null}
         */
        this.SignId = null;

        /**
         * 签名名称。
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：
0：公司，可选 DocumentType 有（0，1）。
1：APP，可选 DocumentType 有（0，1，2，3，4） 。
2：网站，可选 DocumentType 有（0，1，2，3，5）。
3：公众号，可选 DocumentType 有（0，1，2，3，8）。
4：商标，可选 DocumentType 有（7）。
5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。
6：小程序，可选 DocumentType 有（0，1，2，3，6）。
注：必须按照对应关系选择证明类型，否则会审核失败。
         * @type {number || null}
         */
        this.SignType = null;

        /**
         * 证明类型：
0：三证合一。
1：企业营业执照。
2：组织机构代码证书。
3：社会信用代码证书。
4：应用后台管理截图（个人开发APP）。
5：网站备案后台截图（个人开发网站）。
6：小程序设置页面截图（个人认证小程序）。
7：商标注册书。
8：公众号设置页面截图（个人认证公众号）。
         * @type {number || null}
         */
        this.DocumentType = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
注：需要和待修改签名International值保持一致，该参数不能直接修改国内签名到国际签名。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 签名用途：
0：自用。
1：他用。
         * @type {number || null}
         */
        this.SignPurpose = null;

        /**
         * 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
         * @type {string || null}
         */
        this.ProofImage = null;

        /**
         * 委托授权证明。选择 SignPurpose 为他用之后需要提交委托的授权证明。
图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
注：只有 SignPurpose 在选择为 1（他用）时，这个字段才会生效。
         * @type {string || null}
         */
        this.CommissionImage = null;

        /**
         * 签名的申请备注。
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
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.SignType = 'SignType' in params ? params.SignType : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.International = 'International' in params ? params.International : null;
        this.SignPurpose = 'SignPurpose' in params ? params.SignPurpose : null;
        this.ProofImage = 'ProofImage' in params ? params.ProofImage : null;
        this.CommissionImage = 'CommissionImage' in params ? params.CommissionImage : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * SmsPackagesStatistics请求参数结构体
 * @class
 */
class SmsPackagesStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * 最大上限(需要拉取的套餐包个数)。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 起始时间，格式为yyyymmddhh，精确到小时，例如2021050113，表示2021年5月1号13时。
注：拉取套餐包的创建时间不小于起始时间。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间，格式为yyyymmddhh，精确到小时，例如2021050118，表示2021年5月1号18时。
注：EndTime 必须大于 BeginTime且小于当前时间，拉取套餐包的创建时间不大于结束时间。
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
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * AddSmsSign请求参数结构体
 * @class
 */
class AddSmsSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名名称。
注：不能重复申请已通过或待审核的签名。
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * 签名类型。其中每种类型后面标注了其可选的 DocumentType（证明类型）：
0：公司，可选 DocumentType 有（0，1）。
1：APP，可选 DocumentType 有（0，1，2，3，4） 。
2：网站，可选 DocumentType 有（0，1，2，3，5）。
3：公众号，可选 DocumentType 有（0，1，2，3，8）。
4：商标，可选 DocumentType 有（7）。
5：政府/机关事业单位/其他机构，可选 DocumentType 有（2，3）。
6：小程序，可选 DocumentType 有（0，1，2，3，6）。
注：必须按照对应关系选择证明类型，否则会审核失败。
         * @type {number || null}
         */
        this.SignType = null;

        /**
         * 证明类型：
0：三证合一。
1：企业营业执照。
2：组织机构代码证书。
3：社会信用代码证书。
4：应用后台管理截图（个人开发APP）。
5：网站备案后台截图（个人开发网站）。
6：小程序设置页面截图（个人认证小程序）。
7：商标注册书。
8：公众号设置页面截图（个人认证公众号）。
         * @type {number || null}
         */
        this.DocumentType = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 签名用途：
0：自用。
1：他用。
         * @type {number || null}
         */
        this.SignPurpose = null;

        /**
         * 签名对应的资质证明图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
         * @type {string || null}
         */
        this.ProofImage = null;

        /**
         * 委托授权证明。选择 SignPurpose 为他用之后需要提交委托的授权证明。
图片需先进行 base64 编码格式转换，将转换后的字符串去掉前缀`data:image/jpeg;base64,`再赋值给该参数。
注：只有 SignPurpose 在选择为 1（他用）时，这个字段才会生效。
         * @type {string || null}
         */
        this.CommissionImage = null;

        /**
         * 签名的申请备注。
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
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.SignType = 'SignType' in params ? params.SignType : null;
        this.DocumentType = 'DocumentType' in params ? params.DocumentType : null;
        this.International = 'International' in params ? params.International : null;
        this.SignPurpose = 'SignPurpose' in params ? params.SignPurpose : null;
        this.ProofImage = 'ProofImage' in params ? params.ProofImage : null;
        this.CommissionImage = 'CommissionImage' in params ? params.CommissionImage : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 添加模板参数响应 
 * @class
 */
class AddTemplateStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID。
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeSmsTemplateList返回参数结构体
 * @class
 */
class DescribeSmsTemplateListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取短信模板信息响应
         * @type {Array.<DescribeTemplateListStatus> || null}
         */
        this.DescribeTemplateStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DescribeTemplateStatusSet) {
            this.DescribeTemplateStatusSet = new Array();
            for (let z in params.DescribeTemplateStatusSet) {
                let obj = new DescribeTemplateListStatus();
                obj.deserialize(params.DescribeTemplateStatusSet[z]);
                this.DescribeTemplateStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePhoneNumberInfo请求参数结构体
 * @class
 */
class DescribePhoneNumberInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询手机号码，采用 E.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号。
例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {Array.<string> || null}
         */
        this.PhoneNumberSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumberSet = 'PhoneNumberSet' in params ? params.PhoneNumberSet : null;

    }
}

/**
 * PullSmsSendStatusByPhoneNumber请求参数结构体
 * @class
 */
class PullSmsSendStatusByPhoneNumberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取起始时间，UNIX 时间戳（时间：秒）。
注：最大可拉取当前时期前7天的数据。
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 偏移量。
注：目前固定设置为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取最大条数，最多 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 下发目的手机号码，依据 E.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * 拉取截止时间，UNIX 时间戳（时间：秒）。
         * @type {number || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * AddSmsTemplate请求参数结构体
 * @class
 */
class AddSmsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 模板内容。
         * @type {string || null}
         */
        this.TemplateContent = null;

        /**
         * 短信类型，0表示普通短信, 1表示营销短信。
         * @type {number || null}
         */
        this.SmsType = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 模板备注，例如申请原因，使用场景等。
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
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateContent = 'TemplateContent' in params ? params.TemplateContent : null;
        this.SmsType = 'SmsType' in params ? params.SmsType : null;
        this.International = 'International' in params ? params.International : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * ModifySmsTemplate请求参数结构体
 * @class
 */
class ModifySmsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待修改模板的ID。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 新的模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 新的模板内容。
         * @type {string || null}
         */
        this.TemplateContent = null;

        /**
         * 短信类型，0表示普通短信, 1表示营销短信。
         * @type {number || null}
         */
        this.SmsType = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 模板备注，例如申请原因，使用场景等。
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.TemplateContent = 'TemplateContent' in params ? params.TemplateContent : null;
        this.SmsType = 'SmsType' in params ? params.SmsType : null;
        this.International = 'International' in params ? params.International : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * 短信回复状态
 * @class
 */
class PullSmsReplyStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81)。
         * @type {string || null}
         */
        this.ExtendCode = null;

        /**
         * 国家（或地区）码。
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信签名名称。
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * 用户回复的内容。
         * @type {string || null}
         */
        this.ReplyContent = null;

        /**
         * 回复时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.ReplyTime = null;

        /**
         * 用户号码，普通格式，示例如：13711112222。
         * @type {string || null}
         */
        this.SubscriberNumber = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExtendCode = 'ExtendCode' in params ? params.ExtendCode : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.ReplyContent = 'ReplyContent' in params ? params.ReplyContent : null;
        this.ReplyTime = 'ReplyTime' in params ? params.ReplyTime : null;
        this.SubscriberNumber = 'SubscriberNumber' in params ? params.SubscriberNumber : null;

    }
}

/**
 * CallbackStatusStatistics返回参数结构体
 * @class
 */
class CallbackStatusStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回执数据统计响应包体。
         * @type {CallbackStatusStatistics || null}
         */
        this.CallbackStatusStatistics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CallbackStatusStatistics) {
            let obj = new CallbackStatusStatistics();
            obj.deserialize(params.CallbackStatusStatistics)
            this.CallbackStatusStatistics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * PullSmsSendStatus请求参数结构体
 * @class
 */
class PullSmsSendStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取最大条数，最多100条。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 添加应用后生成的实际 SdkAppId，例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;

    }
}

/**
 * 套餐包信息统计响应包体
 * @class
 */
class SmsPackagesStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 套餐包创建时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.PackageCreateTime = null;

        /**
         * 套餐包生效时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.PackageEffectiveTime = null;

        /**
         * 套餐包过期时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.PackageExpiredTime = null;

        /**
         * 套餐包条数。
         * @type {number || null}
         */
        this.PackageAmount = null;

        /**
         * 套餐包类别，0表示赠送套餐包，1表示购买套餐包。
         * @type {number || null}
         */
        this.PackageType = null;

        /**
         * 套餐包 ID。
         * @type {number || null}
         */
        this.PackageId = null;

        /**
         * 当前使用套餐包条数。
         * @type {number || null}
         */
        this.CurrentUsage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackageCreateTime = 'PackageCreateTime' in params ? params.PackageCreateTime : null;
        this.PackageEffectiveTime = 'PackageEffectiveTime' in params ? params.PackageEffectiveTime : null;
        this.PackageExpiredTime = 'PackageExpiredTime' in params ? params.PackageExpiredTime : null;
        this.PackageAmount = 'PackageAmount' in params ? params.PackageAmount : null;
        this.PackageType = 'PackageType' in params ? params.PackageType : null;
        this.PackageId = 'PackageId' in params ? params.PackageId : null;
        this.CurrentUsage = 'CurrentUsage' in params ? params.CurrentUsage : null;

    }
}

/**
 * PullSmsSendStatusByPhoneNumber返回参数结构体
 * @class
 */
class PullSmsSendStatusByPhoneNumberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下发状态响应集合。
         * @type {Array.<PullSmsSendStatus> || null}
         */
        this.PullSmsSendStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PullSmsSendStatusSet) {
            this.PullSmsSendStatusSet = new Array();
            for (let z in params.PullSmsSendStatusSet) {
                let obj = new PullSmsSendStatus();
                obj.deserialize(params.PullSmsSendStatusSet[z]);
                this.PullSmsSendStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 修改签名响应 
 * @class
 */
class ModifySignStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名ID。
         * @type {number || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * 获取短信签名信息响应
 * @class
 */
class DescribeSignListStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名ID。
         * @type {number || null}
         */
        this.SignId = null;

        /**
         * 是否国际/港澳台短信，其中0表示国内短信，1表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 申请签名状态，其中0表示审核通过，1表示审核中。
-1：表示审核未通过或审核失败。
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
         * @type {string || null}
         */
        this.ReviewReply = null;

        /**
         * 签名名称。
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * 提交审核时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;
        this.International = 'International' in params ? params.International : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.ReviewReply = 'ReviewReply' in params ? params.ReviewReply : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * SendSms返回参数结构体
 * @class
 */
class SendSmsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信发送状态。
         * @type {Array.<SendStatus> || null}
         */
        this.SendStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SendStatusSet) {
            this.SendStatusSet = new Array();
            for (let z in params.SendStatusSet) {
                let obj = new SendStatus();
                obj.deserialize(params.SendStatusSet[z]);
                this.SendStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendStatusStatistics返回参数结构体
 * @class
 */
class SendStatusStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发送数据统计响应包体。
         * @type {SendStatusStatistics || null}
         */
        this.SendStatusStatistics = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SendStatusStatistics) {
            let obj = new SendStatusStatistics();
            obj.deserialize(params.SendStatusStatistics)
            this.SendStatusStatistics = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendSms请求参数结构体
 * @class
 */
class SendSmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下发手机号码，采用 E.164 标准，格式为+[国家或地区码][手机号]，单次请求最多支持200个手机号且要求全为境内手机号或全为境外手机号。
例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
注：发送国内短信格式还支持0086、86或无任何国家或地区码的11位手机号码，前缀默认为+86。
         * @type {Array.<string> || null}
         */
        this.PhoneNumberSet = null;

        /**
         * 短信 SdkAppId，在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * 模板 ID，必须填写已审核通过的模板 ID。模板 ID 可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-template) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-template) 的正文模板管理查看，若向境外手机号发送短信，仅支持使用国际/港澳台短信模板。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名，例如：腾讯云，签名信息可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-sign) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-sign) 的签名管理查看。
<dx-alert infotype="notice" title="注意">发送国内短信该参数必填。</dx-alert>
         * @type {string || null}
         */
        this.SignName = null;

        /**
         * 模板参数，若无模板参数，则设置为空。
<dx-alert infotype="notice" title="注意">模板参数的个数需要与 TemplateId 对应模板的变量个数保持一致。</dx-alert>
         * @type {Array.<string> || null}
         */
        this.TemplateParamSet = null;

        /**
         * 短信码号扩展号，默认未开通，如需开通请联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81)。
         * @type {string || null}
         */
        this.ExtendCode = null;

        /**
         * 用户的 session 内容，可以携带用户侧 ID 等上下文信息，server 会原样返回。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 国内短信无需填写该项；国际/港澳台短信已申请独立 SenderId 需要填写该字段，默认使用公共 SenderId，无需填写该字段。
注：月度使用量达到指定量级可申请独立 SenderId 使用，详情请联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81)。
         * @type {string || null}
         */
        this.SenderId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PhoneNumberSet = 'PhoneNumberSet' in params ? params.PhoneNumberSet : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.SignName = 'SignName' in params ? params.SignName : null;
        this.TemplateParamSet = 'TemplateParamSet' in params ? params.TemplateParamSet : null;
        this.ExtendCode = 'ExtendCode' in params ? params.ExtendCode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SenderId = 'SenderId' in params ? params.SenderId : null;

    }
}

/**
 * 发送数据统计响应包体
 * @class
 */
class SendStatusStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信计费条数统计，例如提交成功量为100条，其中有20条是长短信（长度为80字）被拆分成2条，则计费条数为： ```80 * 1 + 20 * 2 = 120``` 条。
         * @type {number || null}
         */
        this.FeeCount = null;

        /**
         * 短信提交量统计。
         * @type {number || null}
         */
        this.RequestCount = null;

        /**
         * 短信提交成功量统计。
         * @type {number || null}
         */
        this.RequestSuccessCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FeeCount = 'FeeCount' in params ? params.FeeCount : null;
        this.RequestCount = 'RequestCount' in params ? params.RequestCount : null;
        this.RequestSuccessCount = 'RequestSuccessCount' in params ? params.RequestSuccessCount : null;

    }
}

/**
 * CallbackStatusStatistics请求参数结构体
 * @class
 */
class CallbackStatusStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间，格式为yyyymmddhh，精确到小时，例如2021050113，表示2021年5月1号13时。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间，格式为yyyymmddhh，精确到小时，例如2021050118，表示2021年5月1号18时。
注：EndTime 必须大于 BeginTime，且相差不超过32天。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * 最大上限。
注：目前固定设置为0。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量。
注：目前固定设置为0。
         * @type {number || null}
         */
        this.Offset = null;

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
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 删除模板响应
 * @class
 */
class DeleteTemplateStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除状态信息。
         * @type {string || null}
         */
        this.DeleteStatus = null;

        /**
         * 删除时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.DeleteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeleteStatus = 'DeleteStatus' in params ? params.DeleteStatus : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;

    }
}

/**
 * DescribeSmsSignList请求参数结构体
 * @class
 */
class DescribeSmsSignListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名 ID 数组。
注：默认数组最大长度100。
         * @type {Array.<number> || null}
         */
        this.SignIdSet = null;

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignIdSet = 'SignIdSet' in params ? params.SignIdSet : null;
        this.International = 'International' in params ? params.International : null;

    }
}

/**
 * DescribePhoneNumberInfo返回参数结构体
 * @class
 */
class DescribePhoneNumberInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取号码信息。
         * @type {Array.<PhoneNumberInfo> || null}
         */
        this.PhoneNumberInfoSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PhoneNumberInfoSet) {
            this.PhoneNumberInfoSet = new Array();
            for (let z in params.PhoneNumberInfoSet) {
                let obj = new PhoneNumberInfo();
                obj.deserialize(params.PhoneNumberInfoSet[z]);
                this.PhoneNumberInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 获取短信模板信息响应
 * @class
 */
class DescribeTemplateListStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID。
         * @type {number || null}
         */
        this.TemplateId = null;

        /**
         * 是否国际/港澳台短信，其中0表示国内短信，1表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 申请模板状态，其中0表示审核通过，1表示审核中，-1表示审核未通过或审核失败。
         * @type {number || null}
         */
        this.StatusCode = null;

        /**
         * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
         * @type {string || null}
         */
        this.ReviewReply = null;

        /**
         * 模板名称。
         * @type {string || null}
         */
        this.TemplateName = null;

        /**
         * 提交审核时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 模板内容。
         * @type {string || null}
         */
        this.TemplateContent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.International = 'International' in params ? params.International : null;
        this.StatusCode = 'StatusCode' in params ? params.StatusCode : null;
        this.ReviewReply = 'ReviewReply' in params ? params.ReviewReply : null;
        this.TemplateName = 'TemplateName' in params ? params.TemplateName : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.TemplateContent = 'TemplateContent' in params ? params.TemplateContent : null;

    }
}

/**
 * AddSmsTemplate返回参数结构体
 * @class
 */
class AddSmsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加短信模板响应包体
         * @type {AddTemplateStatus || null}
         */
        this.AddTemplateStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddTemplateStatus) {
            let obj = new AddTemplateStatus();
            obj.deserialize(params.AddTemplateStatus)
            this.AddTemplateStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 短信的下发状态详细信息
 * @class
 */
class PullSmsSendStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户实际接收到短信的时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.UserReceiveTime = null;

        /**
         * 国家（或地区）码。
         * @type {string || null}
         */
        this.CountryCode = null;

        /**
         * 用户号码，普通格式，示例如：13711112222。
         * @type {string || null}
         */
        this.SubscriberNumber = null;

        /**
         * 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 本次发送标识 ID。
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 实际是否收到短信接收状态，SUCCESS（成功）、FAIL（失败）。
         * @type {string || null}
         */
        this.ReportStatus = null;

        /**
         * 用户接收短信状态描述。
         * @type {string || null}
         */
        this.Description = null;

        /**
         * 用户的 session 内容。与请求中的 SessionContext 一致，默认为空，如需开通请联系 [腾讯云短信小助手](https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81)。
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.SessionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserReceiveTime = 'UserReceiveTime' in params ? params.UserReceiveTime : null;
        this.CountryCode = 'CountryCode' in params ? params.CountryCode : null;
        this.SubscriberNumber = 'SubscriberNumber' in params ? params.SubscriberNumber : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.ReportStatus = 'ReportStatus' in params ? params.ReportStatus : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

/**
 * DescribeSmsSignList返回参数结构体
 * @class
 */
class DescribeSmsSignListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 获取签名信息响应
         * @type {Array.<DescribeSignListStatus> || null}
         */
        this.DescribeSignListStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DescribeSignListStatusSet) {
            this.DescribeSignListStatusSet = new Array();
            for (let z in params.DescribeSignListStatusSet) {
                let obj = new DescribeSignListStatus();
                obj.deserialize(params.DescribeSignListStatusSet[z]);
                this.DescribeSignListStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSmsTemplateList请求参数结构体
 * @class
 */
class DescribeSmsTemplateListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
         * @type {number || null}
         */
        this.International = null;

        /**
         * 模板 ID 数组。数组为空时默认查询模板列表信息（仅允许主账号使用），请使用 Limit 和 Offset 字段设置查询范围。
<dx-alert infotype="notice" title="注意">默认数组长度最大100</dx-alert>
         * @type {Array.<number> || null}
         */
        this.TemplateIdSet = null;

        /**
         * 最大上限，最多100。
注：默认为0，TemplateIdSet 为空时启用。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量。
注：默认为0，TemplateIdSet 为空时启用。
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.International = 'International' in params ? params.International : null;
        this.TemplateIdSet = 'TemplateIdSet' in params ? params.TemplateIdSet : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * 回执数据统计响应包体
 * @class
 */
class CallbackStatusStatistics extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信回执量统计。
         * @type {number || null}
         */
        this.CallbackCount = null;

        /**
         * 短信提交成功量统计。
         * @type {number || null}
         */
        this.RequestSuccessCount = null;

        /**
         * 短信回执失败量统计。
         * @type {number || null}
         */
        this.CallbackFailCount = null;

        /**
         * 短信回执成功量统计。
         * @type {number || null}
         */
        this.CallbackSuccessCount = null;

        /**
         * 运营商内部错误统计。
         * @type {number || null}
         */
        this.InternalErrorCount = null;

        /**
         * 号码无效或空号统计。
         * @type {number || null}
         */
        this.InvalidNumberCount = null;

        /**
         * 停机、关机等错误统计。
         * @type {number || null}
         */
        this.ShutdownErrorCount = null;

        /**
         * 号码拉入黑名单统计。
         * @type {number || null}
         */
        this.BlackListCount = null;

        /**
         * 运营商频率限制统计。
         * @type {number || null}
         */
        this.FrequencyLimitCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CallbackCount = 'CallbackCount' in params ? params.CallbackCount : null;
        this.RequestSuccessCount = 'RequestSuccessCount' in params ? params.RequestSuccessCount : null;
        this.CallbackFailCount = 'CallbackFailCount' in params ? params.CallbackFailCount : null;
        this.CallbackSuccessCount = 'CallbackSuccessCount' in params ? params.CallbackSuccessCount : null;
        this.InternalErrorCount = 'InternalErrorCount' in params ? params.InternalErrorCount : null;
        this.InvalidNumberCount = 'InvalidNumberCount' in params ? params.InvalidNumberCount : null;
        this.ShutdownErrorCount = 'ShutdownErrorCount' in params ? params.ShutdownErrorCount : null;
        this.BlackListCount = 'BlackListCount' in params ? params.BlackListCount : null;
        this.FrequencyLimitCount = 'FrequencyLimitCount' in params ? params.FrequencyLimitCount : null;

    }
}

/**
 * 号码信息。
 * @class
 */
class PhoneNumberInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 号码信息查询错误码，查询成功返回 "Ok"。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 号码信息查询错误码描述。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 国家（或地区）码。
         * @type {string || null}
         */
        this.NationCode = null;

        /**
         * 用户号码，去除国家或地区码前缀的普通格式，示例如：13711112222。
         * @type {string || null}
         */
        this.SubscriberNumber = null;

        /**
         * 解析后的规范的 E.164 号码，与下发短信的号码解析结果一致。解析失败时会原样返回。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 国家码或地区码，例如 CN、US 等，对于未识别出国家码或者地区码，默认返回 DEF。
         * @type {string || null}
         */
        this.IsoCode = null;

        /**
         * 国家码或地区名，例如 China，可参考 [国际/港澳台短信价格总览](https://cloud.tencent.com/document/product/382/18051#.E6.97.A5.E7.BB.93.E5.90.8E.E4.BB.98.E8.B4.B9.3Ca-id.3D.22post-payment.22.3E.3C.2Fa.3E)
         * @type {string || null}
         */
        this.IsoName = null;

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
        this.NationCode = 'NationCode' in params ? params.NationCode : null;
        this.SubscriberNumber = 'SubscriberNumber' in params ? params.SubscriberNumber : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.IsoCode = 'IsoCode' in params ? params.IsoCode : null;
        this.IsoName = 'IsoName' in params ? params.IsoName : null;

    }
}

/**
 * SendStatusStatistics请求参数结构体
 * @class
 */
class SendStatusStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 起始时间，格式为yyyymmddhh，精确到小时，例如2021050113，表示2021年5月1号13时。
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * 结束时间，格式为yyyymmddhh，精确到小时，例如2021050118，表示2021年5月1号18时。
注：EndTime 必须大于 BeginTime。
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * 最大上限。
注：目前固定设置为0。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 偏移量。
注：目前固定设置为0。
         * @type {number || null}
         */
        this.Offset = null;

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
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DeleteSmsTemplate请求参数结构体
 * @class
 */
class DeleteSmsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的模板 ID。
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * PullSmsReplyStatusByPhoneNumber返回参数结构体
 * @class
 */
class PullSmsReplyStatusByPhoneNumberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回复状态响应集合。
         * @type {Array.<PullSmsReplyStatus> || null}
         */
        this.PullSmsReplyStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PullSmsReplyStatusSet) {
            this.PullSmsReplyStatusSet = new Array();
            for (let z in params.PullSmsReplyStatusSet) {
                let obj = new PullSmsReplyStatus();
                obj.deserialize(params.PullSmsReplyStatusSet[z]);
                this.PullSmsReplyStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 发送短信状态
 * @class
 */
class SendStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发送流水号。
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 手机号码，E.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 计费条数，计费规则请查询 [计费策略](https://cloud.tencent.com/document/product/382/36135)。
         * @type {number || null}
         */
        this.Fee = null;

        /**
         * 用户 session 内容。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 短信请求错误码，具体含义请参考 [错误码](https://cloud.tencent.com/document/api/382/55981#6.-.E9.94.99.E8.AF.AF.E7.A0.81)，发送成功返回 "Ok"。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 短信请求错误码描述。
         * @type {string || null}
         */
        this.Message = null;

        /**
         * 国家码或地区码，例如 CN、US 等，对于未识别出国家码或者地区码，默认返回 DEF，具体支持列表请参考 [国际/港澳台短信价格总览](https://cloud.tencent.com/document/product/382/18051)。
         * @type {string || null}
         */
        this.IsoCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Fee = 'Fee' in params ? params.Fee : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.IsoCode = 'IsoCode' in params ? params.IsoCode : null;

    }
}

/**
 * DeleteSmsSign返回参数结构体
 * @class
 */
class DeleteSmsSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除签名响应
         * @type {DeleteSignStatus || null}
         */
        this.DeleteSignStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DeleteSignStatus) {
            let obj = new DeleteSignStatus();
            obj.deserialize(params.DeleteSignStatus)
            this.DeleteSignStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AddSmsSign返回参数结构体
 * @class
 */
class AddSmsSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 添加签名响应
         * @type {AddSignStatus || null}
         */
        this.AddSignStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AddSignStatus) {
            let obj = new AddSignStatus();
            obj.deserialize(params.AddSignStatus)
            this.AddSignStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSmsSign请求参数结构体
 * @class
 */
class DeleteSmsSignRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 待删除的签名 ID。
         * @type {number || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * PullSmsReplyStatusByPhoneNumber请求参数结构体
 * @class
 */
class PullSmsReplyStatusByPhoneNumberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取起始时间，UNIX 时间戳（时间：秒）。
注：最大可拉取当前时期前7天的数据。
         * @type {number || null}
         */
        this.BeginTime = null;

        /**
         * 偏移量。
注：目前固定设置为0。
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取最大条数，最多 100。
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 下发目的手机号码，依据 E.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信 SdkAppId 在 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage)  添加应用后生成的实际 SdkAppId，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppId = null;

        /**
         * 拉取截止时间，UNIX 时间戳（时间：秒）。
         * @type {number || null}
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
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SmsSdkAppId = 'SmsSdkAppId' in params ? params.SmsSdkAppId : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * ModifySmsSign返回参数结构体
 * @class
 */
class ModifySmsSignResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 修改签名响应
         * @type {ModifySignStatus || null}
         */
        this.ModifySignStatus = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ModifySignStatus) {
            let obj = new ModifySignStatus();
            obj.deserialize(params.ModifySignStatus)
            this.ModifySignStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 添加签名响应 
 * @class
 */
class AddSignStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名ID。
         * @type {number || null}
         */
        this.SignId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignId = 'SignId' in params ? params.SignId : null;

    }
}

/**
 * 修改模板参数响应 
 * @class
 */
class ModifyTemplateStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板ID。
         * @type {number || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * PullSmsSendStatus返回参数结构体
 * @class
 */
class PullSmsSendStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下发状态响应集合。
         * @type {Array.<PullSmsSendStatus> || null}
         */
        this.PullSmsSendStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PullSmsSendStatusSet) {
            this.PullSmsSendStatusSet = new Array();
            for (let z in params.PullSmsSendStatusSet) {
                let obj = new PullSmsSendStatus();
                obj.deserialize(params.PullSmsSendStatusSet[z]);
                this.PullSmsSendStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SmsPackagesStatistics返回参数结构体
 * @class
 */
class SmsPackagesStatisticsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 发送数据统计响应包体。
         * @type {Array.<SmsPackagesStatistics> || null}
         */
        this.SmsPackagesStatisticsSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SmsPackagesStatisticsSet) {
            this.SmsPackagesStatisticsSet = new Array();
            for (let z in params.SmsPackagesStatisticsSet) {
                let obj = new SmsPackagesStatistics();
                obj.deserialize(params.SmsPackagesStatisticsSet[z]);
                this.SmsPackagesStatisticsSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 删除签名响应
 * @class
 */
class DeleteSignStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除状态信息。
         * @type {string || null}
         */
        this.DeleteStatus = null;

        /**
         * 删除时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.DeleteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DeleteStatus = 'DeleteStatus' in params ? params.DeleteStatus : null;
        this.DeleteTime = 'DeleteTime' in params ? params.DeleteTime : null;

    }
}

/**
 * PullSmsReplyStatus返回参数结构体
 * @class
 */
class PullSmsReplyStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回复状态响应集合。
         * @type {Array.<PullSmsReplyStatus> || null}
         */
        this.PullSmsReplyStatusSet = null;

        /**
         * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PullSmsReplyStatusSet) {
            this.PullSmsReplyStatusSet = new Array();
            for (let z in params.PullSmsReplyStatusSet) {
                let obj = new PullSmsReplyStatus();
                obj.deserialize(params.PullSmsReplyStatusSet[z]);
                this.PullSmsReplyStatusSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    PullSmsReplyStatusRequest: PullSmsReplyStatusRequest,
    DeleteSmsTemplateResponse: DeleteSmsTemplateResponse,
    ModifySmsTemplateResponse: ModifySmsTemplateResponse,
    ModifySmsSignRequest: ModifySmsSignRequest,
    SmsPackagesStatisticsRequest: SmsPackagesStatisticsRequest,
    AddSmsSignRequest: AddSmsSignRequest,
    AddTemplateStatus: AddTemplateStatus,
    DescribeSmsTemplateListResponse: DescribeSmsTemplateListResponse,
    DescribePhoneNumberInfoRequest: DescribePhoneNumberInfoRequest,
    PullSmsSendStatusByPhoneNumberRequest: PullSmsSendStatusByPhoneNumberRequest,
    AddSmsTemplateRequest: AddSmsTemplateRequest,
    ModifySmsTemplateRequest: ModifySmsTemplateRequest,
    PullSmsReplyStatus: PullSmsReplyStatus,
    CallbackStatusStatisticsResponse: CallbackStatusStatisticsResponse,
    PullSmsSendStatusRequest: PullSmsSendStatusRequest,
    SmsPackagesStatistics: SmsPackagesStatistics,
    PullSmsSendStatusByPhoneNumberResponse: PullSmsSendStatusByPhoneNumberResponse,
    ModifySignStatus: ModifySignStatus,
    DescribeSignListStatus: DescribeSignListStatus,
    SendSmsResponse: SendSmsResponse,
    SendStatusStatisticsResponse: SendStatusStatisticsResponse,
    SendSmsRequest: SendSmsRequest,
    SendStatusStatistics: SendStatusStatistics,
    CallbackStatusStatisticsRequest: CallbackStatusStatisticsRequest,
    DeleteTemplateStatus: DeleteTemplateStatus,
    DescribeSmsSignListRequest: DescribeSmsSignListRequest,
    DescribePhoneNumberInfoResponse: DescribePhoneNumberInfoResponse,
    DescribeTemplateListStatus: DescribeTemplateListStatus,
    AddSmsTemplateResponse: AddSmsTemplateResponse,
    PullSmsSendStatus: PullSmsSendStatus,
    DescribeSmsSignListResponse: DescribeSmsSignListResponse,
    DescribeSmsTemplateListRequest: DescribeSmsTemplateListRequest,
    CallbackStatusStatistics: CallbackStatusStatistics,
    PhoneNumberInfo: PhoneNumberInfo,
    SendStatusStatisticsRequest: SendStatusStatisticsRequest,
    DeleteSmsTemplateRequest: DeleteSmsTemplateRequest,
    PullSmsReplyStatusByPhoneNumberResponse: PullSmsReplyStatusByPhoneNumberResponse,
    SendStatus: SendStatus,
    DeleteSmsSignResponse: DeleteSmsSignResponse,
    AddSmsSignResponse: AddSmsSignResponse,
    DeleteSmsSignRequest: DeleteSmsSignRequest,
    PullSmsReplyStatusByPhoneNumberRequest: PullSmsReplyStatusByPhoneNumberRequest,
    ModifySmsSignResponse: ModifySmsSignResponse,
    AddSignStatus: AddSignStatus,
    ModifyTemplateStatus: ModifyTemplateStatus,
    PullSmsSendStatusResponse: PullSmsSendStatusResponse,
    SmsPackagesStatisticsResponse: SmsPackagesStatisticsResponse,
    DeleteSignStatus: DeleteSignStatus,
    PullSmsReplyStatusResponse: PullSmsReplyStatusResponse,

}

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
         * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid,示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;

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
         * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

        /**
         * 最大上限(需要拉取的套餐包个数)。
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
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * @type {number || null}
         */
        this.SendDateTime = null;

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
         * 下发目的手机号码，依据 e.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SendDateTime = 'SendDateTime' in params ? params.SendDateTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;

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
         * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;

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
         * 套餐包创建时间，标准时间，例如：2019-10-08 17:18:37。
         * @type {string || null}
         */
        this.PackageCreateTime = null;

        /**
         * 套餐包创建时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.PackageCreateUnixTime = null;

        /**
         * 套餐包生效时间，标准时间，例如：2019-10-08 17:18:37。
         * @type {string || null}
         */
        this.PackageEffectiveTime = null;

        /**
         * 套餐包生效时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.PackageEffectiveUnixTime = null;

        /**
         * 套餐包过期时间，标准时间，例如：2019-10-08 17:18:37。
         * @type {string || null}
         */
        this.PackageExpiredTime = null;

        /**
         * 套餐包过期时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.PackageExpiredUnixTime = null;

        /**
         * 套餐包条数。
         * @type {number || null}
         */
        this.AmountOfPackage = null;

        /**
         * 0表示赠送套餐包，1表示购买套餐包。
         * @type {number || null}
         */
        this.TypeOfPackage = null;

        /**
         * 套餐包 ID。
         * @type {number || null}
         */
        this.PackageId = null;

        /**
         * 当前使用量。
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
        this.PackageCreateUnixTime = 'PackageCreateUnixTime' in params ? params.PackageCreateUnixTime : null;
        this.PackageEffectiveTime = 'PackageEffectiveTime' in params ? params.PackageEffectiveTime : null;
        this.PackageEffectiveUnixTime = 'PackageEffectiveUnixTime' in params ? params.PackageEffectiveUnixTime : null;
        this.PackageExpiredTime = 'PackageExpiredTime' in params ? params.PackageExpiredTime : null;
        this.PackageExpiredUnixTime = 'PackageExpiredUnixTime' in params ? params.PackageExpiredUnixTime : null;
        this.AmountOfPackage = 'AmountOfPackage' in params ? params.AmountOfPackage : null;
        this.TypeOfPackage = 'TypeOfPackage' in params ? params.TypeOfPackage : null;
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
 * 短信回复状态
 * @class
 */
class PullSmsReplyStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)。
         * @type {string || null}
         */
        this.ExtendCode = null;

        /**
         * 国家（或地区）码。
         * @type {string || null}
         */
        this.NationCode = null;

        /**
         * 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信签名。
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * 用户回复的内容。
         * @type {string || null}
         */
        this.ReplyContent = null;

        /**
         * 回复时间（例如：2019-10-08 17:18:37）。
         * @type {string || null}
         */
        this.ReplyTime = null;

        /**
         * 回复时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.ReplyUnixTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExtendCode = 'ExtendCode' in params ? params.ExtendCode : null;
        this.NationCode = 'NationCode' in params ? params.NationCode : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.ReplyContent = 'ReplyContent' in params ? params.ReplyContent : null;
        this.ReplyTime = 'ReplyTime' in params ? params.ReplyTime : null;
        this.ReplyUnixTime = 'ReplyUnixTime' in params ? params.ReplyUnixTime : null;

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
         * 下发手机号码，采用 e.164 标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号，最多不要超过200个手机号。
         * @type {Array.<string> || null}
         */
        this.PhoneNumberSet = null;

        /**
         * 模板 ID，必须填写已审核通过的模板 ID。模板ID可登录 [短信控制台](https://console.cloud.tencent.com/sms/smslist) 查看。
         * @type {string || null}
         */
        this.TemplateID = null;

        /**
         * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/sms/smslist)  添加应用后生成的实际SdkAppid，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

        /**
         * 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名，签名信息可登录 [短信控制台](https://console.cloud.tencent.com/sms/smslist)  查看。
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * 模板参数，若无模板参数，则设置为空。
         * @type {Array.<string> || null}
         */
        this.TemplateParamSet = null;

        /**
         * 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)。
         * @type {string || null}
         */
        this.ExtendCode = null;

        /**
         * 用户的 session 内容，可以携带用户侧 ID 等上下文信息，server 会原样返回。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 国际/港澳台短信 senderid，国内短信填空，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)。
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
        this.TemplateID = 'TemplateID' in params ? params.TemplateID : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.TemplateParamSet = 'TemplateParamSet' in params ? params.TemplateParamSet : null;
        this.ExtendCode = 'ExtendCode' in params ? params.ExtendCode : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.SenderId = 'SenderId' in params ? params.SenderId : null;

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
         * 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 计费条数，计费规则请查询 [计费策略](https://cloud.tencent.com/document/product/382/36135)。
         * @type {number || null}
         */
        this.Fee = null;

        /**
         * 用户Session内容。
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 短信请求错误码，具体含义请参考错误码。
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 短信请求错误码描述。
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
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.Fee = 'Fee' in params ? params.Fee : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.Code = 'Code' in params ? params.Code : null;
        this.Message = 'Message' in params ? params.Message : null;

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
         * 用户实际接收到短信的时间。
         * @type {string || null}
         */
        this.UserReceiveTime = null;

        /**
         * 用户实际接收到短信的时间，UNIX 时间戳（单位：秒）。
         * @type {number || null}
         */
        this.UserReceiveUnixTime = null;

        /**
         * 国家（或地区）码。
         * @type {string || null}
         */
        this.NationCode = null;

        /**
         * 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PurePhoneNumber = null;

        /**
         * 手机号码，普通格式，示例如：13711112222。
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

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserReceiveTime = 'UserReceiveTime' in params ? params.UserReceiveTime : null;
        this.UserReceiveUnixTime = 'UserReceiveUnixTime' in params ? params.UserReceiveUnixTime : null;
        this.NationCode = 'NationCode' in params ? params.NationCode : null;
        this.PurePhoneNumber = 'PurePhoneNumber' in params ? params.PurePhoneNumber : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.ReportStatus = 'ReportStatus' in params ? params.ReportStatus : null;
        this.Description = 'Description' in params ? params.Description : null;

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
 * SendStatusStatistics请求参数结构体
 * @class
 */
class SendStatusStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取起始时间，yyyymmddhh 需要拉取的起始时间，精确到小时。
         * @type {number || null}
         */
        this.StartDateTime = null;

        /**
         * 结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时
注：EndDataTime 必须大于 StartDateTime。
         * @type {number || null}
         */
        this.EndDataTime = null;

        /**
         * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

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
        this.StartDateTime = 'StartDateTime' in params ? params.StartDateTime : null;
        this.EndDataTime = 'EndDataTime' in params ? params.EndDataTime : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
 * CallbackStatusStatistics请求参数结构体
 * @class
 */
class CallbackStatusStatisticsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 开始时间，yyyymmddhh 需要拉取的起始时间，精确到小时。
         * @type {number || null}
         */
        this.StartDateTime = null;

        /**
         * 结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时。
注：EndDataTime 必须大于 StartDateTime。
         * @type {number || null}
         */
        this.EndDataTime = null;

        /**
         * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

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
        this.StartDateTime = 'StartDateTime' in params ? params.StartDateTime : null;
        this.EndDataTime = 'EndDataTime' in params ? params.EndDataTime : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

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
         * @type {number || null}
         */
        this.SendDateTime = null;

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
         * 下发目的手机号码，依据 e.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信SdkAppid在 [短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid，示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SendDateTime = 'SendDateTime' in params ? params.SendDateTime : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SmsSdkAppid = 'SmsSdkAppid' in params ? params.SmsSdkAppid : null;

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
    SmsPackagesStatisticsRequest: SmsPackagesStatisticsRequest,
    PullSmsSendStatusByPhoneNumberRequest: PullSmsSendStatusByPhoneNumberRequest,
    CallbackStatusStatisticsResponse: CallbackStatusStatisticsResponse,
    PullSmsSendStatusRequest: PullSmsSendStatusRequest,
    SmsPackagesStatistics: SmsPackagesStatistics,
    PullSmsSendStatusByPhoneNumberResponse: PullSmsSendStatusByPhoneNumberResponse,
    PullSmsReplyStatus: PullSmsReplyStatus,
    SendSmsResponse: SendSmsResponse,
    SendStatusStatisticsResponse: SendStatusStatisticsResponse,
    SendSmsRequest: SendSmsRequest,
    SendStatus: SendStatus,
    PullSmsSendStatus: PullSmsSendStatus,
    CallbackStatusStatistics: CallbackStatusStatistics,
    SendStatusStatisticsRequest: SendStatusStatisticsRequest,
    PullSmsReplyStatusByPhoneNumberResponse: PullSmsReplyStatusByPhoneNumberResponse,
    CallbackStatusStatisticsRequest: CallbackStatusStatisticsRequest,
    PullSmsReplyStatusByPhoneNumberRequest: PullSmsReplyStatusByPhoneNumberRequest,
    SendStatusStatistics: SendStatusStatistics,
    PullSmsSendStatusResponse: PullSmsSendStatusResponse,
    SmsPackagesStatisticsResponse: SmsPackagesStatisticsResponse,
    PullSmsReplyStatusResponse: PullSmsReplyStatusResponse,

}

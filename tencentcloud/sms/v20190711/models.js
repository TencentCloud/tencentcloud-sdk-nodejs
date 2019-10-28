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
         * 拉取最大条数，最多100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 短信SdkAppid在[短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid,示例如1400006666。
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
 * PullSmsReplyStatusByPhoneNumber请求参数结构体
 * @class
 */
class PullSmsReplyStatusByPhoneNumberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取起始时间，UNIX 时间戳（时间：秒）
         * @type {string || null}
         */
        this.SendDateTime = null;

        /**
         * 偏移量
注：目前固定设置为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取最大条数，最多 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 下发目的手机号码，依据 e.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信SdkAppid在[短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid,示例如1400006666。
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
 * 短信的下发状态详细信息
 * @class
 */
class PullSmsSendStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户实际接收到短信的时间
         * @type {string || null}
         */
        this.UserReceiveTime = null;

        /**
         * 国家（或地区）码
         * @type {string || null}
         */
        this.NationCode = null;

        /**
         * 手机号码（ e.164 标准）
         * @type {string || null}
         */
        this.PurePhoneNumber = null;

        /**
         * 手机号码
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 本次发送标识 ID
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 实际是否收到短信接收状态，SUCCESS（成功）、FAIL（失败）
         * @type {string || null}
         */
        this.ReportStatus = null;

        /**
         * 用户接收短信状态描述
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
        this.NationCode = 'NationCode' in params ? params.NationCode : null;
        this.PurePhoneNumber = 'PurePhoneNumber' in params ? params.PurePhoneNumber : null;
        this.PhoneNumber = 'PhoneNumber' in params ? params.PhoneNumber : null;
        this.SerialNo = 'SerialNo' in params ? params.SerialNo : null;
        this.ReportStatus = 'ReportStatus' in params ? params.ReportStatus : null;
        this.Description = 'Description' in params ? params.Description : null;

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
         * 拉取最大条数，最多100条
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 短信SdkAppid在[短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid,示例如1400006666。
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
 * PullSmsSendStatusByPhoneNumber返回参数结构体
 * @class
 */
class PullSmsSendStatusByPhoneNumberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下发状态响应集合
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
         * 通道扩展码，默认没有开通（需要填空）
         * @type {string || null}
         */
        this.ExtendCode = null;

        /**
         * 国家（或地区）码
         * @type {string || null}
         */
        this.NationCode = null;

        /**
         * 手机号码（ e.164 标准）
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信签名
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * 用户回复的内容
         * @type {string || null}
         */
        this.ReplyContent = null;

        /**
         * 回复时间，UNIX 时间戳（单位：秒）
         * @type {number || null}
         */
        this.ReplyTime = null;

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
         * 短信发送状态
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
 * PullSmsSendStatusByPhoneNumber请求参数结构体
 * @class
 */
class PullSmsSendStatusByPhoneNumberRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 拉取起始时间，UNIX 时间戳（时间：秒）
         * @type {string || null}
         */
        this.SendDateTime = null;

        /**
         * 偏移量
注：目前固定设置为0
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 拉取最大条数，最多 100
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 下发目的手机号码，依据 e.164 标准为：+[国家（或地区）码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 短信SdkAppid在[短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid,示例如1400006666。
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
 * SendSms请求参数结构体
 * @class
 */
class SendSmsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下发手机号码，采用 e.164 标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。最多不要超过200个手机号。
         * @type {Array.<string> || null}
         */
        this.PhoneNumberSet = null;

        /**
         * 模板 ID，必须填写已审核通过的模板 ID。模板ID可登录[短信控制台](https://console.cloud.tencent.com/sms/smslist)查看。
         * @type {string || null}
         */
        this.TemplateID = null;

        /**
         * 短信SdkAppid在[短信控制台](https://console.cloud.tencent.com/sms/smslist) 添加应用后生成的实际SdkAppid,示例如1400006666。
         * @type {string || null}
         */
        this.SmsSdkAppid = null;

        /**
         * 短信签名内容，使用 UTF-8 编码，必须填写已审核通过的签名
签名信息可登录[短信控制台](https://console.cloud.tencent.com/sms/smslist) 查看。
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * 模板参数，若无模板参数，则设置为空。
         * @type {Array.<string> || null}
         */
        this.TemplateParamSet = null;

        /**
         * 短信码号扩展号，默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)
         * @type {number || null}
         */
        this.ExtendCode = null;

        /**
         * 用户的 session 内容，可以携带用户侧ID等上下文信息,server 会原样返回
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 国际/港澳台短信senderid，国内短信填空。
默认未开通，如需开通请联系 [sms helper](https://cloud.tencent.com/document/product/382/3773)
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
 * PullSmsReplyStatus返回参数结构体
 * @class
 */
class PullSmsReplyStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回复状态响应集合
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
 * PullSmsReplyStatusByPhoneNumber返回参数结构体
 * @class
 */
class PullSmsReplyStatusByPhoneNumberResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 回复状态响应集合
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
         * 发送流水号
         * @type {string || null}
         */
        this.SerialNo = null;

        /**
         * 手机号码,e.164标准，+[国家或地区码][手机号] ，示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号
         * @type {string || null}
         */
        this.PhoneNumber = null;

        /**
         * 计费条数，计费规则请查询[计费策略](https://cloud.tencent.com/document/product/382/36135)
         * @type {number || null}
         */
        this.Fee = null;

        /**
         * 用户Session内容
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * 短信请求错误码，具体含义请参考错误码
         * @type {string || null}
         */
        this.Code = null;

        /**
         * 短信请求错误码描述
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
 * PullSmsSendStatus返回参数结构体
 * @class
 */
class PullSmsSendStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 下发状态响应集合
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

module.exports = {
    PullSmsReplyStatusRequest: PullSmsReplyStatusRequest,
    PullSmsReplyStatusByPhoneNumberRequest: PullSmsReplyStatusByPhoneNumberRequest,
    PullSmsSendStatus: PullSmsSendStatus,
    PullSmsSendStatusRequest: PullSmsSendStatusRequest,
    PullSmsSendStatusByPhoneNumberResponse: PullSmsSendStatusByPhoneNumberResponse,
    PullSmsReplyStatus: PullSmsReplyStatus,
    SendSmsResponse: SendSmsResponse,
    PullSmsSendStatusByPhoneNumberRequest: PullSmsSendStatusByPhoneNumberRequest,
    SendSmsRequest: SendSmsRequest,
    PullSmsReplyStatusResponse: PullSmsReplyStatusResponse,
    PullSmsReplyStatusByPhoneNumberResponse: PullSmsReplyStatusByPhoneNumberResponse,
    SendStatus: SendStatus,
    PullSmsSendStatusResponse: PullSmsSendStatusResponse,

}

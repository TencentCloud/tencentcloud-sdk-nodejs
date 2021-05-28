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
 * SendTtsVoice返回参数结构体
 * @class
 */
class SendTtsVoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音通知发送状态。
         * @type {SendStatus || null}
         */
        this.SendStatus = null;

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

        if (params.SendStatus) {
            let obj = new SendStatus();
            obj.deserialize(params.SendStatus)
            this.SendStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SendCodeVoice返回参数结构体
 * @class
 */
class SendCodeVoiceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 语音验证码发送状态。
         * @type {SendStatus || null}
         */
        this.SendStatus = null;

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

        if (params.SendStatus) {
            let obj = new SendStatus();
            obj.deserialize(params.SendStatus)
            this.SendStatus = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 语音验证码发送状态
 * @class
 */
class SendStatus extends  AbstractModel {
    constructor(){
        super();

        /**
         * 标识本次发送 ID，标识一次下发记录。
         * @type {string || null}
         */
        this.CallId = null;

        /**
         * 用户的 session 内容，腾讯 server 回包中会原样返回。
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
        this.CallId = 'CallId' in params ? params.CallId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

/**
 * SendCodeVoice请求参数结构体
 * @class
 */
class SendCodeVoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码，仅支持填写数字，实际播报语音时，会自动在数字前补充语音文本"您的验证码是"。
         * @type {string || null}
         */
        this.CodeMessage = null;

        /**
         * 被叫手机号码，采用 e.164 标准，格式为+[国家或地区码][用户号码]。
例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.CalledNumber = null;

        /**
         * 在[语音控制台](https://console.cloud.tencent.com/vms)添加应用后生成的实际SdkAppid，示例如1400006666。
         * @type {string || null}
         */
        this.VoiceSdkAppid = null;

        /**
         * 播放次数，可选，最多3次，默认2次。
         * @type {number || null}
         */
        this.PlayTimes = null;

        /**
         * 用户的 session 内容，腾讯 server 回包中会原样返回。
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
        this.CodeMessage = 'CodeMessage' in params ? params.CodeMessage : null;
        this.CalledNumber = 'CalledNumber' in params ? params.CalledNumber : null;
        this.VoiceSdkAppid = 'VoiceSdkAppid' in params ? params.VoiceSdkAppid : null;
        this.PlayTimes = 'PlayTimes' in params ? params.PlayTimes : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

/**
 * SendTtsVoice请求参数结构体
 * @class
 */
class SendTtsVoiceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模板 ID，在控制台审核通过的模板 ID。
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * 被叫手机号码，采用 e.164 标准，格式为+[国家或地区码][用户号码]。
例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
         * @type {string || null}
         */
        this.CalledNumber = null;

        /**
         * 在[语音控制台](https://console.cloud.tencent.com/vms)添加应用后生成的实际SdkAppid，示例如1400006666。
         * @type {string || null}
         */
        this.VoiceSdkAppid = null;

        /**
         * 模板参数，若模板没有参数，请提供为空数组。
注：语音消息的内容长度不超过350字。
         * @type {Array.<string> || null}
         */
        this.TemplateParamSet = null;

        /**
         * 播放次数，可选，最多3次，默认2次。
         * @type {number || null}
         */
        this.PlayTimes = null;

        /**
         * 用户的 session 内容，腾讯 server 回包中会原样返回。
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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.CalledNumber = 'CalledNumber' in params ? params.CalledNumber : null;
        this.VoiceSdkAppid = 'VoiceSdkAppid' in params ? params.VoiceSdkAppid : null;
        this.TemplateParamSet = 'TemplateParamSet' in params ? params.TemplateParamSet : null;
        this.PlayTimes = 'PlayTimes' in params ? params.PlayTimes : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

module.exports = {
    SendTtsVoiceResponse: SendTtsVoiceResponse,
    SendCodeVoiceResponse: SendCodeVoiceResponse,
    SendStatus: SendStatus,
    SendCodeVoiceRequest: SendCodeVoiceRequest,
    SendTtsVoiceRequest: SendTtsVoiceRequest,

}

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
 * DescribeCaptchaResult返回参数结构体
 * @class
 */
class DescribeCaptchaResultResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 1:验证成功，0:验证失败，100:AppSecretKey参数校验错误
         * @type {number || null}
         */
        this.CaptchaCode = null;

        /**
         * 状态描述及验证错误信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
        this.CaptchaMsg = null;

        /**
         * [0,100]，恶意等级
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
        this.EvilLevel = null;

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
        this.CaptchaCode = 'CaptchaCode' in params ? params.CaptchaCode : null;
        this.CaptchaMsg = 'CaptchaMsg' in params ? params.CaptchaMsg : null;
        this.EvilLevel = 'EvilLevel' in params ? params.EvilLevel : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCaptchaResult请求参数结构体
 * @class
 */
class DescribeCaptchaResultRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 验证码类型，9：滑块验证码
         * @type {number || null}
         */
        this.CaptchaType = null;

        /**
         * 验证码返回给用户的票据
         * @type {string || null}
         */
        this.Ticket = null;

        /**
         * 用户操作来源的外网 IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 验证票据需要的随机字符串
         * @type {string || null}
         */
        this.Randstr = null;

        /**
         * 验证码应用ID
         * @type {number || null}
         */
        this.CaptchaAppId = null;

        /**
         * 用于服务器端校验验证码票据的验证密钥，请妥善保密，请勿泄露给第三方
         * @type {string || null}
         */
        this.AppSecretKey = null;

        /**
         * 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据
         * @type {number || null}
         */
        this.BusinessId = null;

        /**
         * 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据
         * @type {number || null}
         */
        this.SceneId = null;

        /**
         * mac 地址或设备唯一标识
         * @type {string || null}
         */
        this.MacAddress = null;

        /**
         * 手机设备号
         * @type {string || null}
         */
        this.Imei = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CaptchaType = 'CaptchaType' in params ? params.CaptchaType : null;
        this.Ticket = 'Ticket' in params ? params.Ticket : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Randstr = 'Randstr' in params ? params.Randstr : null;
        this.CaptchaAppId = 'CaptchaAppId' in params ? params.CaptchaAppId : null;
        this.AppSecretKey = 'AppSecretKey' in params ? params.AppSecretKey : null;
        this.BusinessId = 'BusinessId' in params ? params.BusinessId : null;
        this.SceneId = 'SceneId' in params ? params.SceneId : null;
        this.MacAddress = 'MacAddress' in params ? params.MacAddress : null;
        this.Imei = 'Imei' in params ? params.Imei : null;

    }
}

module.exports = {
    DescribeCaptchaResultResponse: DescribeCaptchaResultResponse,
    DescribeCaptchaResultRequest: DescribeCaptchaResultRequest,

}

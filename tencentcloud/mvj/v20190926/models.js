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
 * MarketingValueJudgement请求参数结构体
 * @class
 */
class MarketingValueJudgementRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 手机账号类型填写4
         * @type {number || null}
         */
        this.AccountType = null;

        /**
         * 填写手机号码，如15317537488
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 用户请求时的客户端外网IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 用户操作时间戳，单位秒（格林威治时间精确到秒，如1501590972）
         * @type {number || null}
         */
        this.PostTime = null;

        /**
         * 用户设备号imei/idfa(建议填写)
         * @type {string || null}
         */
        this.Imei = null;

        /**
         * 活动链接(建议填写)
         * @type {string || null}
         */
        this.Referer = null;

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
        this.Imei = 'Imei' in params ? params.Imei : null;
        this.Referer = 'Referer' in params ? params.Referer : null;

    }
}

/**
 * 返回结构
 * @class
 */
class Data extends  AbstractModel {
    constructor(){
        super();

        /**
         * 操作时间戳，单位秒
         * @type {number || null}
         */
        this.PostTime = null;

        /**
         * 用户ID 
accountType不同对应不同的用户ID。如果是QQ或微信用户则填入对应的openId
         * @type {string || null}
         */
        this.Uid = null;

        /**
         * 操作来源的外网IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 0~100：营销价值评分，分值越高，价值越大
[0,50]低价值
[50,70]价值一般
[70,100]高价值
         * @type {number || null}
         */
        this.ValueScore = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PostTime = 'PostTime' in params ? params.PostTime : null;
        this.Uid = 'Uid' in params ? params.Uid : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.ValueScore = 'ValueScore' in params ? params.ValueScore : null;

    }
}

/**
 * MarketingValueJudgement返回参数结构体
 * @class
 */
class MarketingValueJudgementResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 返回数据
         * @type {Data || null}
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
            let obj = new Data();
            obj.deserialize(params.Data)
            this.Data = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    MarketingValueJudgementRequest: MarketingValueJudgementRequest,
    Data: Data,
    MarketingValueJudgementResponse: MarketingValueJudgementResponse,

}

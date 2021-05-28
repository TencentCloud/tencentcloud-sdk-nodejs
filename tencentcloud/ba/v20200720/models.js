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
 * CreateWeappQRUrl请求参数结构体
 * @class
 */
class CreateWeappQRUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 代理角色临时密钥的Token
         * @type {string || null}
         */
        this.SessionKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SessionKey = 'SessionKey' in params ? params.SessionKey : null;

    }
}

/**
 * CreateWeappQRUrl返回参数结构体
 * @class
 */
class CreateWeappQRUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 渠道备案小程序二维码
         * @type {string || null}
         */
        this.Url = null;

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
        this.Url = 'Url' in params ? params.Url : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    CreateWeappQRUrlRequest: CreateWeappQRUrlRequest,
    CreateWeappQRUrlResponse: CreateWeappQRUrlResponse,

}

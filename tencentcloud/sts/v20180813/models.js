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
 * GetFederationToken请求参数结构体
 * @class
 */
class GetFederationTokenRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 联合身份用户昵称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 策略描述
注意：
1、policy 需要做 urlencode（如果通过 GET 方法请求云 API，发送请求前，所有参数都需要按照云 API 规范再 urlencode 一次）。
2、策略语法参照 CAM 策略语法。
3、策略中不能包含 principal 元素。
         * @type {string || null}
         */
        this.Policy = null;

        /**
         * 指定临时证书的有效期，单位：秒，默认1800秒，最长可设定有效期为7200秒
         * @type {number || null}
         */
        this.DurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Policy = 'Policy' in params ? params.Policy : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;

    }
}

/**
 * 临时证书
 * @class
 */
class Credentials extends  AbstractModel {
    constructor(){
        super();

        /**
         * token
         * @type {string || null}
         */
        this.Token = null;

        /**
         * 临时证书密钥ID
         * @type {string || null}
         */
        this.TmpSecretId = null;

        /**
         * 临时证书密钥Key
         * @type {string || null}
         */
        this.TmpSecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Token = 'Token' in params ? params.Token : null;
        this.TmpSecretId = 'TmpSecretId' in params ? params.TmpSecretId : null;
        this.TmpSecretKey = 'TmpSecretKey' in params ? params.TmpSecretKey : null;

    }
}

/**
 * AssumeRole请求参数结构体
 * @class
 */
class AssumeRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 角色的资源描述。例如：qcs::cam::uin/12345678:role/4611686018427397919、qcs::cam::uin/12345678:roleName/testRoleName
         * @type {string || null}
         */
        this.RoleArn = null;

        /**
         * 临时会话名称，由用户自定义名称
         * @type {string || null}
         */
        this.RoleSessionName = null;

        /**
         * 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒
         * @type {number || null}
         */
        this.DurationSeconds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RoleArn = 'RoleArn' in params ? params.RoleArn : null;
        this.RoleSessionName = 'RoleSessionName' in params ? params.RoleSessionName : null;
        this.DurationSeconds = 'DurationSeconds' in params ? params.DurationSeconds : null;

    }
}

/**
 * AssumeRole返回参数结构体
 * @class
 */
class AssumeRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时安全证书
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * 证书无效的时间，返回 Unix 时间戳，精确到秒
         * @type {number || null}
         */
        this.ExpiredTime = null;

        /**
         * 证书无效的时间，以 iso8601 格式的 UTC 时间表示
         * @type {string || null}
         */
        this.Expiration = null;

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

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Expiration = 'Expiration' in params ? params.Expiration : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * GetFederationToken返回参数结构体
 * @class
 */
class GetFederationTokenResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 临时证书
         * @type {Credentials || null}
         */
        this.Credentials = null;

        /**
         * 临时证书有效的时间，返回 Unix 时间戳，精确到秒
         * @type {number || null}
         */
        this.ExpiredTime = null;

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

        if (params.Credentials) {
            let obj = new Credentials();
            obj.deserialize(params.Credentials)
            this.Credentials = obj;
        }
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

module.exports = {
    GetFederationTokenRequest: GetFederationTokenRequest,
    Credentials: Credentials,
    AssumeRoleRequest: AssumeRoleRequest,
    AssumeRoleResponse: AssumeRoleResponse,
    GetFederationTokenResponse: GetFederationTokenResponse,

}

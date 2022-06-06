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
 * CreateSession返回参数结构体
 * @class
 */
class CreateSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务端session信息，返回给SDK
         * @type {string || null}
         */
        this.ServerSession = null;

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
        this.ServerSession = 'ServerSession' in params ? params.ServerSession : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroySession返回参数结构体
 * @class
 */
class DestroySessionResponse extends  AbstractModel {
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
 * ApplyConcurrent返回参数结构体
 * @class
 */
class ApplyConcurrentResponse extends  AbstractModel {
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
 * ApplyConcurrent请求参数结构体
 * @class
 */
class ApplyConcurrentRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 项目ID
         * @type {string || null}
         */
        this.ProjectId = null;

        /**
         * 应用版本ID
         * @type {string || null}
         */
        this.ApplicationVersionId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.ApplicationVersionId = 'ApplicationVersionId' in params ? params.ApplicationVersionId : null;

    }
}

/**
 * DestroySession请求参数结构体
 * @class
 */
class DestroySessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
         * @type {string || null}
         */
        this.UserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;

    }
}

/**
 * CreateSession请求参数结构体
 * @class
 */
class CreateSessionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 用户IP
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 客户端session信息，从SDK请求中获得
         * @type {string || null}
         */
        this.ClientSession = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.ClientSession = 'ClientSession' in params ? params.ClientSession : null;

    }
}

module.exports = {
    CreateSessionResponse: CreateSessionResponse,
    DestroySessionResponse: DestroySessionResponse,
    ApplyConcurrentResponse: ApplyConcurrentResponse,
    ApplyConcurrentRequest: ApplyConcurrentRequest,
    DestroySessionRequest: DestroySessionRequest,
    CreateSessionRequest: CreateSessionRequest,

}

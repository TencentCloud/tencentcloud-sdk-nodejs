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
 * RemoveUser返回参数结构体
 * @class
 */
class RemoveUserResponse extends  AbstractModel {
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
 * DismissRoom请求参数结构体
 * @class
 */
class DismissRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * RemoveUser请求参数结构体
 * @class
 */
class RemoveUserRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * TRTC的SDKAppId。
         * @type {number || null}
         */
        this.SdkAppId = null;

        /**
         * 房间号。
         * @type {number || null}
         */
        this.RoomId = null;

        /**
         * 要移出的用户列表，最多10个。
         * @type {Array.<string> || null}
         */
        this.UserIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SdkAppId = 'SdkAppId' in params ? params.SdkAppId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.UserIds = 'UserIds' in params ? params.UserIds : null;

    }
}

/**
 * DismissRoom返回参数结构体
 * @class
 */
class DismissRoomResponse extends  AbstractModel {
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

module.exports = {
    RemoveUserResponse: RemoveUserResponse,
    DismissRoomRequest: DismissRoomRequest,
    RemoveUserRequest: RemoveUserRequest,
    DismissRoomResponse: DismissRoomResponse,

}

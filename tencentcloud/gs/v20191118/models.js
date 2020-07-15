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
 * StopGame请求参数结构体
 * @class
 */
class StopGameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏用户ID
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
 * TrylockWorker返回参数结构体
 * @class
 */
class TrylockWorkerResponse extends  AbstractModel {
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
 * StopGame返回参数结构体
 * @class
 */
class StopGameResponse extends  AbstractModel {
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
 * CreateSession返回参数结构体
 * @class
 */
class CreateSessionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 服务端session信息，返回给JSSDK
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
 * TrylockWorker请求参数结构体
 * @class
 */
class TrylockWorkerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 游戏ID
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing等
         * @type {string || null}
         */
        this.GameRegion = null;

        /**
         * 资源池编号，1表示共用，2表示测试
         * @type {number || null}
         */
        this.SetNo = null;

        /**
         * 游戏用户IP，用于就近调度，例如125.127.178.228
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 分组ID
         * @type {string || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.GameRegion = 'GameRegion' in params ? params.GameRegion : null;
        this.SetNo = 'SetNo' in params ? params.SetNo : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

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
         * 客户端session信息，从JSSDK请求中获得
         * @type {string || null}
         */
        this.ClientSession = null;

        /**
         * 游戏用户ID
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 游戏ID
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing等
         * @type {string || null}
         */
        this.GameRegion = null;

        /**
         * 游戏参数
         * @type {string || null}
         */
        this.GameParas = null;

        /**
         * 分辨率,，可设置为1080p或720p
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * 背景图url，格式为png或jpeg，宽高1920*1080
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 资源池编号，1表示正式，2表示测试
         * @type {number || null}
         */
        this.SetNo = null;

        /**
         * 单位Mbps，固定码率，后端不动态调整(MaxBitrate和MinBitrate将无效)
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 单位Mbps，动态调整最大码率
         * @type {number || null}
         */
        this.MaxBitrate = null;

        /**
         * 单位Mbps，动态调整最小码率
         * @type {number || null}
         */
        this.MinBitrate = null;

        /**
         * 帧率，可设置为30、45或60
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 游戏用户IP，用于就近调度，例如125.127.178.228
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 优化项，便于客户灰度开启新的优化项，默认为0
         * @type {number || null}
         */
        this.Optimization = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ClientSession = 'ClientSession' in params ? params.ClientSession : null;
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.GameRegion = 'GameRegion' in params ? params.GameRegion : null;
        this.GameParas = 'GameParas' in params ? params.GameParas : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.SetNo = 'SetNo' in params ? params.SetNo : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.MaxBitrate = 'MaxBitrate' in params ? params.MaxBitrate : null;
        this.MinBitrate = 'MinBitrate' in params ? params.MinBitrate : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Optimization = 'Optimization' in params ? params.Optimization : null;

    }
}

module.exports = {
    StopGameRequest: StopGameRequest,
    TrylockWorkerResponse: TrylockWorkerResponse,
    StopGameResponse: StopGameResponse,
    CreateSessionResponse: CreateSessionResponse,
    TrylockWorkerRequest: TrylockWorkerRequest,
    CreateSessionRequest: CreateSessionRequest,

}

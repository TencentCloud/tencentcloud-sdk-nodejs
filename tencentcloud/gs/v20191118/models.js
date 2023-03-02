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
 * StopPublishStream返回参数结构体
 * @class
 */
class StopPublishStreamResponse extends  AbstractModel {
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
 * StopGame请求参数结构体
 * @class
 */
class StopGameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 【多人游戏】游戏主机用户ID
         * @type {string || null}
         */
        this.HostUserId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.HostUserId = 'HostUserId' in params ? params.HostUserId : null;

    }
}

/**
 * SaveGameArchive返回参数结构体
 * @class
 */
class SaveGameArchiveResponse extends  AbstractModel {
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
 * StopPublishStream请求参数结构体
 * @class
 */
class StopPublishStreamRequest extends  AbstractModel {
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
 * SwitchGameArchive请求参数结构体
 * @class
 */
class SwitchGameArchiveRequest extends  AbstractModel {
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
         * 游戏存档Url
         * @type {string || null}
         */
        this.GameArchiveUrl = null;

        /**
         * 游戏相关参数
         * @type {string || null}
         */
        this.GameContext = null;

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
        this.GameArchiveUrl = 'GameArchiveUrl' in params ? params.GameArchiveUrl : null;
        this.GameContext = 'GameContext' in params ? params.GameContext : null;

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
 * DescribeInstancesCount返回参数结构体
 * @class
 */
class DescribeInstancesCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 客户的实例总数
         * @type {number || null}
         */
        this.Total = null;

        /**
         * 客户的实例运行数
         * @type {number || null}
         */
        this.Running = null;

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
        this.Total = 'Total' in params ? params.Total : null;
        this.Running = 'Running' in params ? params.Running : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * StartPublishStream返回参数结构体
 * @class
 */
class StartPublishStreamResponse extends  AbstractModel {
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
         * 游戏ID
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 【已废弃】只在TrylockWorker时生效
         * @type {string || null}
         */
        this.GameRegion = null;

        /**
         * 游戏参数
         * @type {string || null}
         */
        this.GameParas = null;

        /**
         * 客户端session信息，从JSSDK请求中获得。特殊的，当 RunMode 参数为 RunWithoutClient 时，该字段可以为空
         * @type {string || null}
         */
        this.ClientSession = null;

        /**
         * 分辨率,，可设置为1080p或720p或1920x1080格式
         * @type {string || null}
         */
        this.Resolution = null;

        /**
         * 背景图url，格式为png或jpeg，宽高1920*1080
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * 【已废弃】
         * @type {number || null}
         */
        this.SetNo = null;

        /**
         * 单位Mbps，固定码率建议值，有一定浮动范围，后端不动态调整(MaxBitrate和MinBitrate将无效)
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * 单位Mbps，动态调整最大码率建议值，会按实际情况调整
         * @type {number || null}
         */
        this.MaxBitrate = null;

        /**
         * 单位Mbps，动态调整最小码率建议值，会按实际情况调整
         * @type {number || null}
         */
        this.MinBitrate = null;

        /**
         * 帧率，可设置为30、45、60、90、120、144
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * 【必选】用户IP，用户客户端的公网IP，用于就近调度，不填将严重影响用户体验
         * @type {string || null}
         */
        this.UserIp = null;

        /**
         * 【已废弃】优化项，便于客户灰度开启新的优化项，默认为0
         * @type {number || null}
         */
        this.Optimization = null;

        /**
         * 【互动云游】游戏主机用户ID
         * @type {string || null}
         */
        this.HostUserId = null;

        /**
         * 【互动云游】角色；Player表示玩家；Viewer表示观察者
         * @type {string || null}
         */
        this.Role = null;

        /**
         * 游戏相关参数
         * @type {string || null}
         */
        this.GameContext = null;

        /**
         * 云端运行模式。
RunWithoutClient：允许无客户端连接的情况下仍保持云端 App 运行
默认值（空）：要求必须有客户端连接才会保持云端 App 运行。
         * @type {string || null}
         */
        this.RunMode = null;

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
        this.GameParas = 'GameParas' in params ? params.GameParas : null;
        this.ClientSession = 'ClientSession' in params ? params.ClientSession : null;
        this.Resolution = 'Resolution' in params ? params.Resolution : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.SetNo = 'SetNo' in params ? params.SetNo : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.MaxBitrate = 'MaxBitrate' in params ? params.MaxBitrate : null;
        this.MinBitrate = 'MinBitrate' in params ? params.MinBitrate : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.UserIp = 'UserIp' in params ? params.UserIp : null;
        this.Optimization = 'Optimization' in params ? params.Optimization : null;
        this.HostUserId = 'HostUserId' in params ? params.HostUserId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.GameContext = 'GameContext' in params ? params.GameContext : null;
        this.RunMode = 'RunMode' in params ? params.RunMode : null;

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
         * 【已废弃】
         * @type {string || null}
         */
        this.RoleNumber = null;

        /**
         * 【互动云游】角色；Player表示玩家；Viewer表示观察者
         * @type {string || null}
         */
        this.Role = null;

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
        this.RoleNumber = 'RoleNumber' in params ? params.RoleNumber : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstancesCount请求参数结构体
 * @class
 */
class DescribeInstancesCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏ID
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 实例分组ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * 游戏区域
         * @type {string || null}
         */
        this.GameRegion = null;

        /**
         * 游戏类型。
MOBILE：手游
PC：默认值，端游
         * @type {string || null}
         */
        this.GameType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GameRegion = 'GameRegion' in params ? params.GameRegion : null;
        this.GameType = 'GameType' in params ? params.GameType : null;

    }
}

/**
 * SaveGameArchive请求参数结构体
 * @class
 */
class SaveGameArchiveRequest extends  AbstractModel {
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
         * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 游戏ID
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing等，如果不为空，优先按照该区域进行调度分配机器
         * @type {string || null}
         */
        this.GameRegion = null;

        /**
         * 【废弃】资源池编号
         * @type {number || null}
         */
        this.SetNo = null;

        /**
         * 【必选】用户IP，用户客户端的公网IP，用于就近调度，不填将严重影响用户体验
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
 * SwitchGameArchive返回参数结构体
 * @class
 */
class SwitchGameArchiveResponse extends  AbstractModel {
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
 * StartPublishStream请求参数结构体
 * @class
 */
class StartPublishStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
         * @type {string || null}
         */
        this.UserId = null;

        /**
         * 推流地址，仅支持rtmp协议
         * @type {string || null}
         */
        this.PublishUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.UserId = 'UserId' in params ? params.UserId : null;
        this.PublishUrl = 'PublishUrl' in params ? params.PublishUrl : null;

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

module.exports = {
    StopPublishStreamResponse: StopPublishStreamResponse,
    StopGameRequest: StopGameRequest,
    SaveGameArchiveResponse: SaveGameArchiveResponse,
    StopPublishStreamRequest: StopPublishStreamRequest,
    SwitchGameArchiveRequest: SwitchGameArchiveRequest,
    TrylockWorkerResponse: TrylockWorkerResponse,
    DescribeInstancesCountResponse: DescribeInstancesCountResponse,
    StartPublishStreamResponse: StartPublishStreamResponse,
    CreateSessionRequest: CreateSessionRequest,
    CreateSessionResponse: CreateSessionResponse,
    DescribeInstancesCountRequest: DescribeInstancesCountRequest,
    SaveGameArchiveRequest: SaveGameArchiveRequest,
    TrylockWorkerRequest: TrylockWorkerRequest,
    SwitchGameArchiveResponse: SwitchGameArchiveResponse,
    StartPublishStreamRequest: StartPublishStreamRequest,
    StopGameResponse: StopGameResponse,

}

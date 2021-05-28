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
 * DismissRoom请求参数结构体
 * @class
 */
class DismissRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表示游戏资源唯一 ID, 由后台自动分配, 无法修改。
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 表示游戏房间唯一ID。
         * @type {string || null}
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
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * ChangeRoomPlayerProfile返回参数结构体
 * @class
 */
class ChangeRoomPlayerProfileResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间信息。
         * @type {Room || null}
         */
        this.Room = null;

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

        if (params.Room) {
            let obj = new Room();
            obj.deserialize(params.Room)
            this.Room = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRoom请求参数结构体
 * @class
 */
class ModifyRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏资源Id。
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 房间ID。
         * @type {string || null}
         */
        this.RoomId = null;

        /**
         * 发起者的PlayerId。
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 需要修改的房间选项，0表示房间名称，1表示房主，2表示是否允许观战，3表示是否支持邀请码/密码，4表示是否私有，5表示是否自定义房间属性，6表示是否禁止加人。
         * @type {Array.<number> || null}
         */
        this.ChangeRoomOptionList = null;

        /**
         * 房间名称。
         * @type {string || null}
         */
        this.RoomName = null;

        /**
         * 变更房主。
         * @type {string || null}
         */
        this.Owner = null;

        /**
         * 是否支持观战。
         * @type {boolean || null}
         */
        this.IsViewed = null;

        /**
         * 是否支持邀请码/密码。
         * @type {boolean || null}
         */
        this.IsInvited = null;

        /**
         * 是否私有。
         * @type {boolean || null}
         */
        this.IsPrivate = null;

        /**
         * 自定义房间属性。
         * @type {string || null}
         */
        this.CustomProperties = null;

        /**
         * 房间是否禁止加人。
         * @type {boolean || null}
         */
        this.IsForbidJoin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.ChangeRoomOptionList = 'ChangeRoomOptionList' in params ? params.ChangeRoomOptionList : null;
        this.RoomName = 'RoomName' in params ? params.RoomName : null;
        this.Owner = 'Owner' in params ? params.Owner : null;
        this.IsViewed = 'IsViewed' in params ? params.IsViewed : null;
        this.IsInvited = 'IsInvited' in params ? params.IsInvited : null;
        this.IsPrivate = 'IsPrivate' in params ? params.IsPrivate : null;
        this.CustomProperties = 'CustomProperties' in params ? params.CustomProperties : null;
        this.IsForbidJoin = 'IsForbidJoin' in params ? params.IsForbidJoin : null;

    }
}

/**
 * 房间信息详情。
 * @class
 */
class Room extends  AbstractModel {
    constructor(){
        super();

        /**
         * 表示房间名称。最长不超过32个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 表示房间最大玩家数量。最大不超过100人。
         * @type {number || null}
         */
        this.MaxPlayers = null;

        /**
         * 表示房主OpenId。最长不超过16个字符。
         * @type {string || null}
         */
        this.OwnerOpenId = null;

        /**
         * 表示是否私有，私有指的是不允许其他玩家通过匹配加入房间。
         * @type {boolean || null}
         */
        this.IsPrivate = null;

        /**
         * 表示玩家详情列表。
         * @type {Array.<Player> || null}
         */
        this.Players = null;

        /**
         * 表示团队属性列表。
         * @type {Array.<Team> || null}
         */
        this.Teams = null;

        /**
         * 表示房间 ID。出参用，由后端返回。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 表示房间类型。最长不超过32个字符。
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 表示创建方式：0.单人主动发起创建房间请求；1.多人在线匹配请求分配房间；2. 直接创建满员房间。调用云API的创房请求默认为3，目前通过云API调用只支持第3种方式。
         * @type {number || null}
         */
        this.CreateType = null;

        /**
         * 表示自定义房间属性，不传为空字符串。最长不超过1024个字符。
         * @type {string || null}
         */
        this.CustomProperties = null;

        /**
         * 表示房间帧同步状态。0表示未开始帧同步，1表示已开始帧同步，用于出参。
         * @type {number || null}
         */
        this.FrameSyncState = null;

        /**
         * 表示帧率。由控制台设置，用于出参。
         * @type {number || null}
         */
        this.FrameRate = null;

        /**
         * 表示路由ID。用于出参。
         * @type {string || null}
         */
        this.RouteId = null;

        /**
         * 表示房间创建的时间戳（单位：秒）。
         * @type {number || null}
         */
        this.CreateTime = null;

        /**
         * 表示开始帧同步时的时间戳（单位：秒）,未开始帧同步时返回为0。
         * @type {number || null}
         */
        this.StartGameTime = null;

        /**
         * 表示是否禁止加入房间。出参使用，默认为False，通过SDK的ChangeRoom接口可以修改。
         * @type {boolean || null}
         */
        this.IsForbidJoin = null;

        /**
         * 表示房主PlayerId。
         * @type {string || null}
         */
        this.Owner = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.MaxPlayers = 'MaxPlayers' in params ? params.MaxPlayers : null;
        this.OwnerOpenId = 'OwnerOpenId' in params ? params.OwnerOpenId : null;
        this.IsPrivate = 'IsPrivate' in params ? params.IsPrivate : null;

        if (params.Players) {
            this.Players = new Array();
            for (let z in params.Players) {
                let obj = new Player();
                obj.deserialize(params.Players[z]);
                this.Players.push(obj);
            }
        }

        if (params.Teams) {
            this.Teams = new Array();
            for (let z in params.Teams) {
                let obj = new Team();
                obj.deserialize(params.Teams[z]);
                this.Teams.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.CreateType = 'CreateType' in params ? params.CreateType : null;
        this.CustomProperties = 'CustomProperties' in params ? params.CustomProperties : null;
        this.FrameSyncState = 'FrameSyncState' in params ? params.FrameSyncState : null;
        this.FrameRate = 'FrameRate' in params ? params.FrameRate : null;
        this.RouteId = 'RouteId' in params ? params.RouteId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.StartGameTime = 'StartGameTime' in params ? params.StartGameTime : null;
        this.IsForbidJoin = 'IsForbidJoin' in params ? params.IsForbidJoin : null;
        this.Owner = 'Owner' in params ? params.Owner : null;

    }
}

/**
 * ChangeRoomPlayerProfile请求参数结构体
 * @class
 */
class ChangeRoomPlayerProfileRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏资源Id。
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 发起修改的玩家Id。
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 需要修改的玩家自定义属性。
         * @type {string || null}
         */
        this.CustomProfile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.CustomProfile = 'CustomProfile' in params ? params.CustomProfile : null;

    }
}

/**
 * DescribeRoom返回参数结构体
 * @class
 */
class DescribeRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间信息。
         * @type {Room || null}
         */
        this.Room = null;

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

        if (params.Room) {
            let obj = new Room();
            obj.deserialize(params.Room)
            this.Room = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyRoom返回参数结构体
 * @class
 */
class ModifyRoomResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间信息
         * @type {Room || null}
         */
        this.Room = null;

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

        if (params.Room) {
            let obj = new Room();
            obj.deserialize(params.Room)
            this.Room = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePlayer请求参数结构体
 * @class
 */
class DescribePlayerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏资源Id。
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 玩家OpenId。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 玩家PlayerId，由后台分配，当OpenId不传的时候，PlayerId必传，传入PlayerId可以查询当前PlayerId的玩家信息，当OpenId传入的时候，PlayerId可不传，按照OpenId查询玩家信息。
         * @type {string || null}
         */
        this.PlayerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;

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

/**
 * ChangeRoomPlayerStatus返回参数结构体
 * @class
 */
class ChangeRoomPlayerStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间信息
         * @type {Room || null}
         */
        this.Room = null;

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

        if (params.Room) {
            let obj = new Room();
            obj.deserialize(params.Room)
            this.Room = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * 玩家信息详情
 * @class
 */
class Player extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家 OpenId。最长不超过64个字符。
         * @type {string || null}
         */
        this.OpenId = null;

        /**
         * 玩家昵称。最长不超过32个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 队伍 ID。最长不超过16个字符。
         * @type {string || null}
         */
        this.TeamId = null;

        /**
         * 是否为机器人。
         * @type {boolean || null}
         */
        this.IsRobot = null;

        /**
         * 玩家 PlayerId。出参使用，由后端返回。
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 自定义玩家状态。非负数，最大不超过4294967295。默认为0。
         * @type {number || null}
         */
        this.CustomPlayerStatus = null;

        /**
         * 自定义玩家属性。最长不超过256个字符。默认为空字符串。
         * @type {string || null}
         */
        this.CustomProfile = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OpenId = 'OpenId' in params ? params.OpenId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.TeamId = 'TeamId' in params ? params.TeamId : null;
        this.IsRobot = 'IsRobot' in params ? params.IsRobot : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.CustomPlayerStatus = 'CustomPlayerStatus' in params ? params.CustomPlayerStatus : null;
        this.CustomProfile = 'CustomProfile' in params ? params.CustomProfile : null;

    }
}

/**
 * ChangeRoomPlayerStatus请求参数结构体
 * @class
 */
class ChangeRoomPlayerStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏资源Id。
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 玩家自定义状态。
         * @type {number || null}
         */
        this.CustomStatus = null;

        /**
         * 玩家id。
         * @type {string || null}
         */
        this.PlayerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.CustomStatus = 'CustomStatus' in params ? params.CustomStatus : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;

    }
}

/**
 * RemoveRoomPlayer返回参数结构体
 * @class
 */
class RemoveRoomPlayerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 房间信息
         * @type {Room || null}
         */
        this.Room = null;

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

        if (params.Room) {
            let obj = new Room();
            obj.deserialize(params.Room)
            this.Room = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribePlayer返回参数结构体
 * @class
 */
class DescribePlayerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 玩家信息。
         * @type {Player || null}
         */
        this.Player = null;

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

        if (params.Player) {
            let obj = new Player();
            obj.deserialize(params.Player)
            this.Player = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeRoom请求参数结构体
 * @class
 */
class DescribeRoomRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏资源Id。
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 玩家Id。当房间Id不传的时候，玩家Id必传，传入玩家Id可以查询当前玩家所在的房间信息，当房间Id传入的时候，优先按照房间Id查询房间信息。
         * @type {string || null}
         */
        this.PlayerId = null;

        /**
         * 房间Id。
         * @type {string || null}
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
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.PlayerId = 'PlayerId' in params ? params.PlayerId : null;
        this.RoomId = 'RoomId' in params ? params.RoomId : null;

    }
}

/**
 * RemoveRoomPlayer请求参数结构体
 * @class
 */
class RemoveRoomPlayerRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 游戏资源Id。
         * @type {string || null}
         */
        this.GameId = null;

        /**
         * 被踢出房间的玩家Id。
         * @type {string || null}
         */
        this.RemovePlayerId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GameId = 'GameId' in params ? params.GameId : null;
        this.RemovePlayerId = 'RemovePlayerId' in params ? params.RemovePlayerId : null;

    }
}

/**
 * 团队属性
 * @class
 */
class Team extends  AbstractModel {
    constructor(){
        super();

        /**
         * 队伍ID。最长不超过16个字符。
         * @type {string || null}
         */
        this.Id = null;

        /**
         * 队伍名称。最长不超过32个字符。
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 队伍最小人数。最大不超过100人。
         * @type {number || null}
         */
        this.MinPlayers = null;

        /**
         * 队伍最大人数。最大不超过100人。
         * @type {number || null}
         */
        this.MaxPlayers = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.MinPlayers = 'MinPlayers' in params ? params.MinPlayers : null;
        this.MaxPlayers = 'MaxPlayers' in params ? params.MaxPlayers : null;

    }
}

module.exports = {
    DismissRoomRequest: DismissRoomRequest,
    ChangeRoomPlayerProfileResponse: ChangeRoomPlayerProfileResponse,
    ModifyRoomRequest: ModifyRoomRequest,
    Room: Room,
    ChangeRoomPlayerProfileRequest: ChangeRoomPlayerProfileRequest,
    DescribeRoomResponse: DescribeRoomResponse,
    ModifyRoomResponse: ModifyRoomResponse,
    DescribePlayerRequest: DescribePlayerRequest,
    DismissRoomResponse: DismissRoomResponse,
    ChangeRoomPlayerStatusResponse: ChangeRoomPlayerStatusResponse,
    Player: Player,
    ChangeRoomPlayerStatusRequest: ChangeRoomPlayerStatusRequest,
    RemoveRoomPlayerResponse: RemoveRoomPlayerResponse,
    DescribePlayerResponse: DescribePlayerResponse,
    DescribeRoomRequest: DescribeRoomRequest,
    RemoveRoomPlayerRequest: RemoveRoomPlayerRequest,
    Team: Team,

}

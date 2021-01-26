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

/**
 * DismissRoom请求参数结构体
 */
export interface DismissRoomRequest {
  /**
   * 表示游戏资源唯一 ID, 由后台自动分配, 无法修改。
   */
  GameId: string

  /**
   * 表示游戏房间唯一ID。
   */
  RoomId: string
}

/**
 * ChangeRoomPlayerProfile返回参数结构体
 */
export interface ChangeRoomPlayerProfileResponse {
  /**
   * 房间信息。
   */
  Room?: Room

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRoom请求参数结构体
 */
export interface ModifyRoomRequest {
  /**
   * 游戏资源Id。
   */
  GameId: string

  /**
   * 房间ID。
   */
  RoomId: string

  /**
   * 发起者的PlayerId。
   */
  PlayerId: string

  /**
   * 需要修改的房间选项，0表示房间名称，1表示房主，2表示是否允许观战，3表示是否支持邀请码/密码，4表示是否私有，5表示是否自定义房间属性，6表示是否禁止加人。
   */
  ChangeRoomOptionList: Array<number>

  /**
   * 房间名称。
   */
  RoomName?: string

  /**
   * 变更房主。
   */
  Owner?: string

  /**
   * 是否支持观战。
   */
  IsViewed?: boolean

  /**
   * 是否支持邀请码/密码。
   */
  IsInvited?: boolean

  /**
   * 是否私有。
   */
  IsPrivate?: boolean

  /**
   * 自定义房间属性。
   */
  CustomProperties?: string

  /**
   * 房间是否禁止加人。
   */
  IsForbidJoin?: boolean
}

/**
 * 房间信息详情。
 */
export interface Room {
  /**
   * 表示房间名称。最长不超过32个字符。
   */
  Name: string

  /**
   * 表示房间最大玩家数量。最大不超过100人。
   */
  MaxPlayers: number

  /**
   * 表示房主OpenId。最长不超过16个字符。
   */
  OwnerOpenId: string

  /**
   * 表示是否私有，私有指的是不允许其他玩家通过匹配加入房间。
   */
  IsPrivate: boolean

  /**
   * 表示玩家详情列表。
   */
  Players: Array<Player>

  /**
   * 表示团队属性列表。
   */
  Teams: Array<Team>

  /**
   * 表示房间 ID。出参用，由后端返回。
   */
  Id?: string

  /**
   * 表示房间类型。最长不超过32个字符。
   */
  Type?: string

  /**
   * 表示创建方式：0.单人主动发起创建房间请求；1.多人在线匹配请求分配房间；2. 直接创建满员房间。调用云API的创房请求默认为3，目前通过云API调用只支持第3种方式。
   */
  CreateType?: number

  /**
   * 表示自定义房间属性，不传为空字符串。最长不超过1024个字符。
   */
  CustomProperties?: string

  /**
   * 表示房间帧同步状态。0表示未开始帧同步，1表示已开始帧同步，用于出参。
   */
  FrameSyncState?: number

  /**
   * 表示帧率。由控制台设置，用于出参。
   */
  FrameRate?: number

  /**
   * 表示路由ID。用于出参。
   */
  RouteId?: string

  /**
   * 表示房间创建的时间戳（单位：秒）。
   */
  CreateTime?: number

  /**
   * 表示开始帧同步时的时间戳（单位：秒）,未开始帧同步时返回为0。
   */
  StartGameTime?: number

  /**
   * 表示是否禁止加入房间。出参使用，默认为False，通过SDK的ChangeRoom接口可以修改。
   */
  IsForbidJoin?: boolean

  /**
   * 表示房主PlayerId。
   */
  Owner?: string
}

/**
 * ChangeRoomPlayerProfile请求参数结构体
 */
export interface ChangeRoomPlayerProfileRequest {
  /**
   * 游戏资源Id。
   */
  GameId: string

  /**
   * 发起修改的玩家Id。
   */
  PlayerId: string

  /**
   * 需要修改的玩家自定义属性。
   */
  CustomProfile: string
}

/**
 * DescribeRoom返回参数结构体
 */
export interface DescribeRoomResponse {
  /**
   * 房间信息。
   */
  Room: Room

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRoom返回参数结构体
 */
export interface ModifyRoomResponse {
  /**
   * 房间信息
   */
  Room?: Room

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePlayer请求参数结构体
 */
export interface DescribePlayerRequest {
  /**
   * 游戏资源Id。
   */
  GameId: string

  /**
   * 玩家OpenId。
   */
  OpenId?: string

  /**
   * 玩家PlayerId，由后台分配，当OpenId不传的时候，PlayerId必传，传入PlayerId可以查询当前PlayerId的玩家信息，当OpenId传入的时候，PlayerId可不传，按照OpenId查询玩家信息。
   */
  PlayerId?: string
}

/**
 * DismissRoom返回参数结构体
 */
export interface DismissRoomResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChangeRoomPlayerStatus返回参数结构体
 */
export interface ChangeRoomPlayerStatusResponse {
  /**
   * 房间信息
   */
  Room?: Room

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 玩家信息详情
 */
export interface Player {
  /**
   * 玩家 OpenId。最长不超过64个字符。
   */
  OpenId: string

  /**
   * 玩家昵称。最长不超过32个字符。
   */
  Name: string

  /**
   * 队伍 ID。最长不超过16个字符。
   */
  TeamId: string

  /**
   * 是否为机器人。
   */
  IsRobot: boolean

  /**
   * 玩家 PlayerId。出参使用，由后端返回。
   */
  PlayerId?: string

  /**
   * 自定义玩家状态。非负数，最大不超过4294967295。默认为0。
   */
  CustomPlayerStatus?: number

  /**
   * 自定义玩家属性。最长不超过256个字符。默认为空字符串。
   */
  CustomProfile?: string
}

/**
 * ChangeRoomPlayerStatus请求参数结构体
 */
export interface ChangeRoomPlayerStatusRequest {
  /**
   * 游戏资源Id。
   */
  GameId: string

  /**
   * 玩家自定义状态。
   */
  CustomStatus: number

  /**
   * 玩家id。
   */
  PlayerId: string
}

/**
 * RemoveRoomPlayer返回参数结构体
 */
export interface RemoveRoomPlayerResponse {
  /**
   * 房间信息
   */
  Room?: Room

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePlayer返回参数结构体
 */
export interface DescribePlayerResponse {
  /**
   * 玩家信息。
   */
  Player: Player

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoom请求参数结构体
 */
export interface DescribeRoomRequest {
  /**
   * 游戏资源Id。
   */
  GameId: string

  /**
   * 玩家Id。当房间Id不传的时候，玩家Id必传，传入玩家Id可以查询当前玩家所在的房间信息，当房间Id传入的时候，优先按照房间Id查询房间信息。
   */
  PlayerId?: string

  /**
   * 房间Id。
   */
  RoomId?: string
}

/**
 * RemoveRoomPlayer请求参数结构体
 */
export interface RemoveRoomPlayerRequest {
  /**
   * 游戏资源Id。
   */
  GameId: string

  /**
   * 被踢出房间的玩家Id。
   */
  RemovePlayerId: string
}

/**
 * 团队属性
 */
export interface Team {
  /**
   * 队伍ID。最长不超过16个字符。
   */
  Id: string

  /**
   * 队伍名称。最长不超过32个字符。
   */
  Name: string

  /**
   * 队伍最小人数。最大不超过100人。
   */
  MinPlayers: number

  /**
   * 队伍最大人数。最大不超过100人。
   */
  MaxPlayers: number
}

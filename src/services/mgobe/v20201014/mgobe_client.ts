/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DismissRoomRequest,
  ChangeRoomPlayerProfileResponse,
  ModifyRoomRequest,
  Room,
  ChangeRoomPlayerProfileRequest,
  DescribeRoomResponse,
  ModifyRoomResponse,
  DescribePlayerRequest,
  DismissRoomResponse,
  ChangeRoomPlayerStatusResponse,
  Player,
  ChangeRoomPlayerStatusRequest,
  RemoveRoomPlayerResponse,
  DescribePlayerResponse,
  DescribeRoomRequest,
  RemoveRoomPlayerRequest,
  Team,
} from "./mgobe_models"

/**
 * mgobe client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mgobe.tencentcloudapi.com", "2020-10-14", clientConfig)
  }

  /**
   * 该接口用于查询玩家信息。支持两种用法，当OpenId不传的时候，PlayerId必传，传入PlayerId可以查询当前PlayerId的玩家信息，当OpenId传入的时候，PlayerId可不传，按照OpenId查询玩家信息。
   */
  async DescribePlayer(
    req: DescribePlayerRequest,
    cb?: (error: string, rep: DescribePlayerResponse) => void
  ): Promise<DescribePlayerResponse> {
    return this.request("DescribePlayer", req, cb)
  }

  /**
   * 修改玩家自定义状态
   */
  async ChangeRoomPlayerStatus(
    req: ChangeRoomPlayerStatusRequest,
    cb?: (error: string, rep: ChangeRoomPlayerStatusResponse) => void
  ): Promise<ChangeRoomPlayerStatusResponse> {
    return this.request("ChangeRoomPlayerStatus", req, cb)
  }

  /**
   * 修改房间
   */
  async ModifyRoom(
    req: ModifyRoomRequest,
    cb?: (error: string, rep: ModifyRoomResponse) => void
  ): Promise<ModifyRoomResponse> {
    return this.request("ModifyRoom", req, cb)
  }

  /**
   * 踢出房间玩家
   */
  async RemoveRoomPlayer(
    req: RemoveRoomPlayerRequest,
    cb?: (error: string, rep: RemoveRoomPlayerResponse) => void
  ): Promise<RemoveRoomPlayerResponse> {
    return this.request("RemoveRoomPlayer", req, cb)
  }

  /**
   * 该接口用于查询房间信息。支持两种用法，当房间Id不传的时候，玩家Id必传，传入玩家Id可以查询当前玩家所在的房间信息，当房间Id传入的时候，玩家Id可不传，按照房间Id查询房间信息。
   */
  async DescribeRoom(
    req: DescribeRoomRequest,
    cb?: (error: string, rep: DescribeRoomResponse) => void
  ): Promise<DescribeRoomResponse> {
    return this.request("DescribeRoom", req, cb)
  }

  /**
   * 修改房间玩家自定义属性
   */
  async ChangeRoomPlayerProfile(
    req: ChangeRoomPlayerProfileRequest,
    cb?: (error: string, rep: ChangeRoomPlayerProfileResponse) => void
  ): Promise<ChangeRoomPlayerProfileResponse> {
    return this.request("ChangeRoomPlayerProfile", req, cb)
  }

  /**
   * 通过game_id、room_id解散房间
   */
  async DismissRoom(
    req: DismissRoomRequest,
    cb?: (error: string, rep: DismissRoomResponse) => void
  ): Promise<DismissRoomResponse> {
    return this.request("DismissRoom", req, cb)
  }
}

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
  Room,
  ChangeRoomPlayerProfileRequest,
  RemoveRoomPlayerResponse,
  ModifyRoomResponse,
  ModifyRoomRequest,
  ChangeRoomPlayerStatusResponse,
  Player,
  ChangeRoomPlayerStatusRequest,
  DismissRoomResponse,
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
   * 修改房间玩家自定义属性
   */
  async ChangeRoomPlayerProfile(
    req: ChangeRoomPlayerProfileRequest,
    cb?: (error: string, rep: ChangeRoomPlayerProfileResponse) => void
  ): Promise<ChangeRoomPlayerProfileResponse> {
    return this.request("ChangeRoomPlayerProfile", req, cb)
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
   * 修改玩家自定义状态
   */
  async ChangeRoomPlayerStatus(
    req: ChangeRoomPlayerStatusRequest,
    cb?: (error: string, rep: ChangeRoomPlayerStatusResponse) => void
  ): Promise<ChangeRoomPlayerStatusResponse> {
    return this.request("ChangeRoomPlayerStatus", req, cb)
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

  /**
   * 修改房间
   */
  async ModifyRoom(
    req: ModifyRoomRequest,
    cb?: (error: string, rep: ModifyRoomResponse) => void
  ): Promise<ModifyRoomResponse> {
    return this.request("ModifyRoom", req, cb)
  }
}

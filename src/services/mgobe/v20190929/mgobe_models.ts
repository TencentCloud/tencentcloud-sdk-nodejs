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
 * DismissRoom返回参数结构体
 */
export interface DismissRoomResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

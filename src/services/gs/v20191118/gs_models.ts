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
 * StopGame请求参数结构体
 */
export interface StopGameRequest {
  /**
   * 游戏用户ID
   */
  UserId: string

  /**
   * 用于多人游戏，游戏主机用户ID
   */
  HostUserId?: string
}

/**
 * TrylockWorker返回参数结构体
 */
export interface TrylockWorkerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopGame返回参数结构体
 */
export interface StopGameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSession返回参数结构体
 */
export interface CreateSessionResponse {
  /**
   * 服务端session信息，返回给JSSDK
   */
  ServerSession?: string

  /**
   * 【多人游戏】角色编号；比如Player1、Player2、Viewer1
   */
  RoleNumber?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TrylockWorker请求参数结构体
 */
export interface TrylockWorkerRequest {
  /**
   * 游戏用户ID
   */
  UserId: string

  /**
   * 游戏ID
   */
  GameId: string

  /**
   * 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing等
   */
  GameRegion?: string

  /**
   * 资源池编号，1表示共用，2表示测试
   */
  SetNo?: number

  /**
   * 游戏用户IP，用于就近调度，例如125.127.178.228
   */
  UserIp?: string

  /**
   * 分组ID
   */
  GroupId?: string
}

/**
 * CreateSession请求参数结构体
 */
export interface CreateSessionRequest {
  /**
   * 客户端session信息，从JSSDK请求中获得
   */
  ClientSession: string

  /**
   * 游戏用户ID
   */
  UserId: string

  /**
   * 游戏ID
   */
  GameId: string

  /**
   * 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing、ap-chengdu、ap-chongqing、ap-nanjing等
   */
  GameRegion?: string

  /**
   * 游戏参数
   */
  GameParas?: string

  /**
   * 分辨率,，可设置为1080p或720p
   */
  Resolution?: string

  /**
   * 背景图url，格式为png或jpeg，宽高1920*1080
   */
  ImageUrl?: string

  /**
   * 【将废弃】资源池编号，比如1表示正式，2表示测试
   */
  SetNo?: number

  /**
   * 单位Mbps，固定码率，后端不动态调整(MaxBitrate和MinBitrate将无效)
   */
  Bitrate?: number

  /**
   * 单位Mbps，动态调整最大码率
   */
  MaxBitrate?: number

  /**
   * 单位Mbps，动态调整最小码率
   */
  MinBitrate?: number

  /**
   * 帧率，可设置为30、45、60、90、120、144
   */
  Fps?: number

  /**
   * 游戏用户IP，用于就近调度，例如125.127.178.228
   */
  UserIp?: string

  /**
   * 优化项，便于客户灰度开启新的优化项，默认为0
   */
  Optimization?: number

  /**
   * 【多人云游】游戏主机用户ID
   */
  HostUserId?: string

  /**
   * 【多人云游】角色；Player表示玩家；Viewer表示观察者
   */
  Role?: string
}

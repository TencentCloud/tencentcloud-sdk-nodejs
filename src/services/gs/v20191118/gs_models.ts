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
 * StartPublishStreamToCSS返回参数结构体
 */
export interface StartPublishStreamToCSSResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopGame请求参数结构体
 */
export interface StopGameRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 【多人游戏】游戏主机用户ID
   */
  HostUserId?: string
}

/**
 * SaveGameArchive返回参数结构体
 */
export interface SaveGameArchiveResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopPublishStream请求参数结构体
 */
export interface StopPublishStreamRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
}

/**
 * StopPublishStream返回参数结构体
 */
export interface StopPublishStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TrylockWorker返回参数结构体
 */
export interface TrylockWorkerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SwitchGameArchive请求参数结构体
 */
export interface SwitchGameArchiveRequest {
  /**
   * 游戏用户ID
   */
  UserId: string
  /**
   * 游戏ID
   */
  GameId: string
  /**
   * 游戏存档Url
   */
  GameArchiveUrl?: string
  /**
   * 游戏相关参数
   */
  GameContext?: string
}

/**
 * StartPublishStreamToCSS请求参数结构体
 */
export interface StartPublishStreamToCSSRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 推流参数，推流时携带自定义参数。
   */
  PublishStreamArgs?: string
}

/**
 * DescribeInstancesCount返回参数结构体
 */
export interface DescribeInstancesCountResponse {
  /**
   * 客户的实例总数
   */
  Total?: number
  /**
   * 客户的实例运行数
   */
  Running?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartPublishStream返回参数结构体
 */
export interface StartPublishStreamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSession请求参数结构体
 */
export interface CreateSessionRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 【已废弃】只在TrylockWorker时生效
   */
  GameId: string
  /**
   * 【已废弃】只在TrylockWorker时生效
   */
  GameRegion?: string
  /**
   * 游戏参数
   */
  GameParas?: string
  /**
   * 客户端session信息，从JSSDK请求中获得。特殊的，当 RunMode 参数为 RunWithoutClient 时，该字段可以为空
   */
  ClientSession?: string
  /**
   * 分辨率,，可设置为1080p或720p或1920x1080格式
   */
  Resolution?: string
  /**
   * 背景图url，格式为png或jpeg，宽高1920*1080
   */
  ImageUrl?: string
  /**
   * 【已废弃】
   */
  SetNo?: number
  /**
   * 【已废弃】
   */
  Bitrate?: number
  /**
   * 单位Mbps，动态调整最大码率建议值，会按实际情况调整
   */
  MaxBitrate?: number
  /**
   * 单位Mbps，动态调整最小码率建议值，会按实际情况调整
   */
  MinBitrate?: number
  /**
   * 帧率，可设置为30、45、60、90、120、144
   */
  Fps?: number
  /**
   * 【必选】用户IP，用户客户端的公网IP，用于就近调度，不填将严重影响用户体验
   */
  UserIp?: string
  /**
   * 【已废弃】优化项，便于客户灰度开启新的优化项，默认为0
   */
  Optimization?: number
  /**
   * 【互动云游】游戏主机用户ID
   */
  HostUserId?: string
  /**
   * 【互动云游】角色；Player表示玩家；Viewer表示观察者
   */
  Role?: string
  /**
   * 游戏相关参数
   */
  GameContext?: string
  /**
   * 云端运行模式。
RunWithoutClient：允许无客户端连接的情况下仍保持云端 App 运行
默认值（空）：要求必须有客户端连接才会保持云端 App 运行。
   */
  RunMode?: string
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
   * 【已废弃】
   */
  RoleNumber?: string
  /**
   * 【互动云游】角色；Player表示玩家；Viewer表示观察者
   */
  Role?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancesCount请求参数结构体
 */
export interface DescribeInstancesCountRequest {
  /**
   * 游戏ID
   */
  GameId?: string
  /**
   * 实例分组ID
   */
  GroupId?: string
  /**
   * 游戏区域
   */
  GameRegion?: string
  /**
   * 游戏类型。
MOBILE：手游
PC：默认值，端游
   */
  GameType?: string
}

/**
 * SaveGameArchive请求参数结构体
 */
export interface SaveGameArchiveRequest {
  /**
   * 游戏用户ID
   */
  UserId: string
  /**
   * 游戏ID
   */
  GameId: string
}

/**
 * TrylockWorker请求参数结构体
 */
export interface TrylockWorkerRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 游戏ID
   */
  GameId: string
  /**
   * 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing等，如果不为空，优先按照该区域进行调度分配机器
   */
  GameRegion?: string
  /**
   * 【废弃】资源池编号
   */
  SetNo?: number
  /**
   * 【必选】用户IP，用户客户端的公网IP，用于就近调度，不填将严重影响用户体验
   */
  UserIp?: string
  /**
   * 分组ID
   */
  GroupId?: string
}

/**
 * SwitchGameArchive返回参数结构体
 */
export interface SwitchGameArchiveResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartPublishStream请求参数结构体
 */
export interface StartPublishStreamRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
  /**
   * 推流地址，仅支持rtmp协议
   */
  PublishUrl: string
}

/**
 * StopGame返回参数结构体
 */
export interface StopGameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

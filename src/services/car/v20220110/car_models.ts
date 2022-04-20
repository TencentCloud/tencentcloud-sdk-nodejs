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
 * CreateSession返回参数结构体
 */
export interface CreateSessionResponse {
  /**
   * 服务端session信息，返回给SDK
   */
  ServerSession: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroySession返回参数结构体
 */
export interface DestroySessionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyConcurrent返回参数结构体
 */
export interface ApplyConcurrentResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyConcurrent请求参数结构体
 */
export interface ApplyConcurrentRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string

  /**
   * 用户IP
   */
  UserIp: string

  /**
   * 项目ID
   */
  ProjectId: string

  /**
   * 应用版本ID
   */
  ApplicationVersionId?: string
}

/**
 * DestroySession请求参数结构体
 */
export interface DestroySessionRequest {
  /**
   * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
   */
  UserId: string
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
   * 用户IP
   */
  UserIp: string

  /**
   * 客户端session信息，从SDK请求中获得
   */
  ClientSession: string
}

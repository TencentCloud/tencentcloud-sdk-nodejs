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
 * DescribeTelCdr请求参数结构体
 */
export interface DescribeTelCdrRequest {
  /**
   * 实例 ID
   */
  InstanceId: number

  /**
   * 起始时间戳，Unix 时间戳
   */
  StartTimeStamp: number

  /**
   * 结束时间戳，Unix 时间戳
   */
  EndTimeStamp: number

  /**
   * 返回记录条数
   */
  Limit: number

  /**
   * 偏移量
   */
  Offset: number
}

/**
 * DescribeTelCdr返回参数结构体
 */
export interface DescribeTelCdrResponse {
  /**
   * 话单记录总数
   */
  TotalCount?: number

  /**
   * 话单记录
   */
  TelCdrs?: Array<TelCdrInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSDKLoginToken返回参数结构体
 */
export interface CreateSDKLoginTokenResponse {
  /**
   * SDK 登录 Token。
   */
  Token?: string

  /**
   * 过期时间戳，Unix 时间戳。
   */
  ExpiredTime?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 电话话单信息
 */
export interface TelCdrInfo {
  /**
   * 主叫号码
   */
  Caller: string

  /**
   * 被叫号码
   */
  Callee: string

  /**
   * 呼叫发起时间戳，Unix 时间戳
   */
  Time: number

  /**
   * 呼入呼出方向 0 呼入 1 呼出
   */
  Direction: number

  /**
   * 通话时长
   */
  Duration: number

  /**
   * 录音信息
   */
  RecordURL: string

  /**
   * 坐席信息
   */
  SeatUser: SeatUserInfo

  /**
   * 结束状态 0 未知 1 正常通话 2 未接通
   */
  EndStatus: number

  /**
   * 技能组
   */
  SkillGroup: string

  /**
   * 主叫归属地
   */
  CallerLocation: string
}

/**
 * CreateSDKLoginToken请求参数结构体
 */
export interface CreateSDKLoginTokenRequest {
  /**
   * 应用ID。
   */
  SdkAppId: number

  /**
   * 坐席账号。
   */
  SeatUserId: string
}

/**
 * 坐席用户信息
 */
export interface SeatUserInfo {
  /**
   * 坐席电话号码
   */
  Phone: string

  /**
   * 坐席名称
   */
  Name?: string

  /**
   * 坐席邮箱
   */
  Mail?: string

  /**
   * 坐席昵称
   */
  Nick?: string

  /**
   * 用户ID
   */
  UserId?: string

  /**
      * 坐席关联的技能组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkillGroupNameList?: Array<string>
}

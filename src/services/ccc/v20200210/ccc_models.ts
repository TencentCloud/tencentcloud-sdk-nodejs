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
 * DescribePSTNActiveSessionList请求参数结构体
 */
export interface DescribePSTNActiveSessionListRequest {
  /**
   * 应用 ID
   */
  SdkAppId: number

  /**
   * 数据偏移
   */
  Offset: number

  /**
   * 返回的数据条数，最大 25
   */
  Limit: number
}

/**
 * ivr 按键信息
 */
export interface IVRKeyPressedElement {
  /**
      * 按键
注意：此字段可能返回 null，表示取不到有效值。
      */
  Key: string

  /**
      * 按键关联的标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label: string
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
   * SDK 加载路径会随着 SDK 的发布而变动。
   */
  SdkURL?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateStaff返回参数结构体
 */
export interface CreateStaffResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTelCdr返回参数结构体
 */
export interface DescribeTelCdrResponse {
  /**
   * 话单记录总数
   */
  TotalCount: number

  /**
   * 话单记录
   */
  TelCdrs: Array<TelCdrInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIMCdrs返回参数结构体
 */
export interface DescribeIMCdrsResponse {
  /**
   * 总记录数
   */
  TotalCount?: number

  /**
   * 服务记录列表
   */
  IMCdrs?: Array<IMCdrInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIMCdrs请求参数结构体
 */
export interface DescribeIMCdrsRequest {
  /**
   * 起始时间
   */
  StartTimestamp: number

  /**
   * 结束时间
   */
  EndTimestamp: number

  /**
   * 实例ID
   */
  InstanceId?: number

  /**
   * 应用ID
   */
  SdkAppId?: number

  /**
   * 返回记录条数 最大为100默认20
   */
  Limit?: number

  /**
   * 返回记录偏移 默认为0
   */
  Offset?: number

  /**
   * 1为全媒体，2为文本客服，不填则查询全部
   */
  Type?: number
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
   * 技能组名称
   */
  SkillGroup: string

  /**
   * 主叫归属地
   */
  CallerLocation: string

  /**
      * IVR 阶段耗时
注意：此字段可能返回 null，表示取不到有效值。
      */
  IVRDuration: number

  /**
      * 振铃时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  RingTimestamp: number

  /**
      * 接听时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  AcceptTimestamp: number

  /**
      * 结束时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndedTimestamp: number

  /**
      * IVR 按键信息 ，e.g. ["1","2","3"]
注意：此字段可能返回 null，表示取不到有效值。
      */
  IVRKeyPressed: Array<string>

  /**
      * 挂机方 seat 坐席 user 用户
注意：此字段可能返回 null，表示取不到有效值。
      */
  HungUpSide: string

  /**
      * 服务参与者列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServeParticipants: Array<ServeParticipant>

  /**
      * 技能组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkillGroupId: number

  /**
      * ok 正常结束 
unconnected	未接通
seatGiveUp	坐席未接
seatForward	坐席转接
ivrGiveUp	IVR期间用户放弃
waitingGiveUp	会话排队期间用户放弃
ringingGiveUp	会话振铃期间用户放弃
error	系统错误
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndStatusString: string

  /**
      * 会话开始时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTimestamp: number

  /**
      * 进入排队时间，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  QueuedTimestamp: number

  /**
      * 后置IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]）
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostIVRKeyPressed: Array<IVRKeyPressedElement>

  /**
      * 排队技能组Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  QueuedSkillGroupId: number
}

/**
 * DescribeTelCallInfo请求参数结构体
 */
export interface DescribeTelCallInfoRequest {
  /**
   * 起始时间戳，Unix 时间戳
   */
  StartTimeStamp: number

  /**
   * 结束时间戳，Unix 时间戳，查询时间范围最大为90天
   */
  EndTimeStamp: number

  /**
   * 应用ID列表，多个ID时，返回值为多个ID使用总和
   */
  SdkAppIdList: Array<number>
}

/**
 * DescribeChatMessages返回参数结构体
 */
export interface DescribeChatMessagesResponse {
  /**
   * 总记录数
   */
  TotalCount?: number

  /**
   * 消息列表
   */
  Messages?: Array<MessageBody>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePSTNActiveSessionList返回参数结构体
 */
export interface DescribePSTNActiveSessionListResponse {
  /**
   * 列表总条数
   */
  Total?: number

  /**
   * 列表内容
   */
  Sessions?: Array<PSTNSessionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 全媒体服务记录信息
 */
export interface IMCdrInfo {
  /**
   * 服务记录ID
   */
  Id: string

  /**
   * 服务时长秒数
   */
  Duration: number

  /**
   * 结束状态
   */
  EndStatus: number

  /**
   * 用户昵称
   */
  Nickname: string

  /**
   * 服务类型 1为全媒体，2为文本客服
   */
  Type: number

  /**
   * 客服ID
   */
  StaffId: string

  /**
   * 服务时间戳
   */
  Timestamp: number
}

/**
 * DescribeChatMessages请求参数结构体
 */
export interface DescribeChatMessagesRequest {
  /**
   * 服务记录ID
   */
  CdrId: string

  /**
   * 实例ID
   */
  InstanceId?: number

  /**
   * 应用ID
   */
  SdkAppId?: number

  /**
   * 返回记录条数 最大为100默认20
   */
  Limit?: number

  /**
   * 返回记录偏移 默认为0
   */
  Offset?: number

  /**
   * 1为从早到晚，2为从晚到早，默认为2
   */
  Order?: number
}

/**
 * 参与者信息
 */
export interface ServeParticipant {
  /**
      * 坐席邮箱
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mail: string

  /**
      * 坐席电话
注意：此字段可能返回 null，表示取不到有效值。
      */
  Phone: string

  /**
      * 振铃时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  RingTimestamp: number

  /**
      * 接听时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  AcceptTimestamp: number

  /**
      * 结束时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndedTimestamp: number

  /**
      * 录音 ID，能够索引到坐席侧的录音
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecordId: string

  /**
      * 参与者类型，"staffSeat", "outboundSeat", "staffPhoneSeat"
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 转接来源坐席信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferFrom: string

  /**
      * 转接去向坐席信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferTo: string

  /**
      * 转接去向参与者类型，取值与 Type 一致
注意：此字段可能返回 null，表示取不到有效值。
      */
  TransferToType: string

  /**
      * 技能组 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkillGroupId: number

  /**
      * 结束状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndStatusString: string

  /**
      * 录音 URL
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecordURL: string

  /**
      * 参与者序号，从 0 开始
注意：此字段可能返回 null，表示取不到有效值。
      */
  Sequence: number

  /**
      * 开始时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTimestamp: number

  /**
      * 技能组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkillGroupName: string
}

/**
 * DescribeSeatUserList返回参数结构体
 */
export interface DescribeSeatUserListResponse {
  /**
   * 此实例的坐席用户总数
   */
  TotalCount: number

  /**
   * 坐席用户信息列表
   */
  SeatUsers: Array<SeatUserInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSeatUserList请求参数结构体
 */
export interface DescribeSeatUserListRequest {
  /**
   * 实例ID
   */
  InstanceId: number

  /**
   * 偏移量
   */
  Offset: number

  /**
   * 返回数量
   */
  Limit: number
}

/**
 * DescribeTelCallInfo返回参数结构体
 */
export interface DescribeTelCallInfoResponse {
  /**
   * 电话呼出统计分钟数
   */
  TelCallOutCount?: number

  /**
   * 电话呼入统计分钟数
   */
  TelCallInCount?: number

  /**
   * 坐席使用统计个数
   */
  SeatUsedCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateStaff请求参数结构体
 */
export interface CreateStaffRequest {
  /**
   * 应用ID
   */
  SdkAppId: number

  /**
   * 客服信息，个数不超过 10
   */
  Staffs: Array<SeatUserInfo>
}

/**
 * DescribeTelCdr请求参数结构体
 */
export interface DescribeTelCdrRequest {
  /**
   * 起始时间戳，Unix 时间戳
   */
  StartTimeStamp: number

  /**
   * 结束时间戳，Unix 时间戳
   */
  EndTimeStamp: number

  /**
   * 返回数据条数，上限（deprecated）
   */
  Limit: number

  /**
   * 偏移（deprecated）
   */
  Offset: number

  /**
   * 实例 ID（deprecated）
   */
  InstanceId?: number

  /**
   * 应用 ID
   */
  SdkAppId?: number

  /**
   * 分页尺寸，上限 100
   */
  PageSize?: number

  /**
   * 分页页码，从 0 开始
   */
  PageNumber?: number
}

/**
 * 聊天消息
 */
export interface MessageBody {
  /**
   * 消息时间戳
   */
  Timestamp: number

  /**
   * 发消息的用户ID
   */
  From: string

  /**
   * 消息列表
   */
  Messages: Array<Message>
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
   * 坐席名称
   */
  Name?: string

  /**
   * 坐席邮箱
   */
  Mail?: string

  /**
   * 坐席电话号码（带0086前缀）
   */
  Phone?: string

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

  /**
      * 工号
注意：此字段可能返回 null，表示取不到有效值。
      */
  StaffNumber?: string
}

/**
 * PSTN 会话信息
 */
export interface PSTNSessionInfo {
  /**
   * 会话 ID
   */
  SessionID: string

  /**
   * 会话临时房间 ID
   */
  RoomID: string

  /**
   * 主叫
   */
  Caller: string

  /**
   * 被叫
   */
  Callee: string

  /**
   * 开始时间，Unix 时间戳
   */
  StartTimestamp: string

  /**
   * 接听时间，Unix 时间戳
   */
  AcceptTimestamp: string

  /**
   * 坐席邮箱
   */
  StaffEmail: string

  /**
   * 坐席工号
   */
  StaffNumber: string

  /**
   * 坐席状态 inProgress 进行中
   */
  SessionStatus: string

  /**
   * 会话呼叫方向， 0 呼入 | 1 - 呼出
   */
  Direction: number

  /**
   * 振铃时间，Unix 时间戳
   */
  RingTimestamp: number
}

/**
 * 单条消息
 */
export interface Message {
  /**
   * 消息类型
   */
  Type: string

  /**
   * 消息内容
   */
  Content: string
}

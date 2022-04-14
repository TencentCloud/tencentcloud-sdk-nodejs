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
 * StopAutoCalloutTask请求参数结构体
 */
export interface StopAutoCalloutTaskRequest {
  /**
   * 呼叫中心实例Id
   */
  SdkAppId: number

  /**
   * 任务Id
   */
  TaskId: number
}

/**
 * BindStaffSkillGroupList请求参数结构体
 */
export interface BindStaffSkillGroupListRequest {
  /**
   * 实例ID
   */
  SdkAppId: number

  /**
   * 坐席邮箱
   */
  StaffEmail: string

  /**
   * 绑定技能组列表
   */
  SkillGroupList: Array<number>
}

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
 * CreateAutoCalloutTask请求参数结构体
 */
export interface CreateAutoCalloutTaskRequest {
  /**
   * 呼叫中心实例Id
   */
  SdkAppId: number

  /**
   * 任务起始时间戳，Unix 秒级时间戳
   */
  NotBefore: number

  /**
   * 被叫号码列表
   */
  Callees: Array<string>

  /**
   * 主叫号码列表
   */
  Callers: Array<string>

  /**
   * 呼叫使用的Ivr
   */
  IvrId: number

  /**
   * 任务名
   */
  Name?: string

  /**
   * 任务描述
   */
  Description?: string

  /**
   * 任务停止时间戳，Unix 秒级时间戳
   */
  NotAfter?: number

  /**
   * 最大尝试次数
   */
  Tries?: number
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
 * DescribeCallInMetrics返回参数结构体
 */
export interface DescribeCallInMetricsResponse {
  /**
   * 时间戳
   */
  Timestamp: number

  /**
   * 总体指标
   */
  TotalMetrics: CallInMetrics

  /**
      * 线路维度指标
注意：此字段可能返回 null，表示取不到有效值。
      */
  NumberMetrics: Array<CallInNumberMetrics>

  /**
      * 技能组维度指标
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkillGroupMetrics: Array<CallInSkillGroupMetrics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 呼入技能组相关指标
 */
export interface CallInSkillGroupMetrics {
  /**
   * 技能组ID
   */
  SkillGroupId: number

  /**
   * 数据指标
   */
  Metrics: CallInMetrics

  /**
   * 技能组名称
   */
  Name: string
}

/**
 * DescribeStaffInfoList返回参数结构体
 */
export interface DescribeStaffInfoListResponse {
  /**
   * 坐席用户总数
   */
  TotalCount: number

  /**
   * 坐席用户信息列表
   */
  StaffList: Array<StaffInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAutoCalloutTask返回参数结构体
 */
export interface CreateAutoCalloutTaskResponse {
  /**
   * 任务Id
   */
  TaskId: number

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
      * 结束状态
0	错误
1	正常结束
2	未接通
17	坐席未接
100	黑名单
101	坐席转接
102	IVR 期间用户放弃
103	会话排队期间用户放弃
104	会话振铃期间用户放弃
105	无坐席在线
106	非工作时间
107	IVR后直接结束
201	未知状态
202	未接听
203	拒接挂断
204	关机
205	空号
206	通话中
207	欠费
208	运营商线路异常
209	主叫取消
210	不在服务区
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
      * error                   错误
ok                       正常结束
unconnected      未接通
seatGiveUp         坐席未接
blackList             黑名单
seatForward       坐席转接
ivrGiveUp           IVR 期间用户放弃
waitingGiveUp   会话排队期间用户放弃
ringingGiveUp   会话振铃期间用户放弃
noSeatOnline     无坐席在线
notWorkTime     非工作时间
ivrEnd                 IVR后直接结束
unknown            未知状态
notAnswer          未接听
userReject          拒接挂断
powerOff            关机
numberNotExist  空号
busy                    通话中
outOfCredit        欠费
operatorError     运营商线路异常
callerCancel        主叫取消
notInService       不在服务区
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

  /**
      * 会话 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SessionId: string

  /**
      * 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProtectedCaller: string

  /**
      * 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProtectedCallee: string

  /**
      * 客户自定义数据（User-to-User Interface）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uui: string

  /**
      * IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]）
注意：此字段可能返回 null，表示取不到有效值。
      */
  IVRKeyPressedEx: Array<IVRKeyPressedElement>

  /**
      * 获取录音ASR文本信息地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsrUrl: string

  /**
      * 录音转存第三方COS地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomRecordURL: string
}

/**
 * CreateUserSig请求参数结构体
 */
export interface CreateUserSigRequest {
  /**
   * 应用 ID
   */
  SdkAppId: number

  /**
   * 用户 ID
   */
  Uid: string

  /**
   * 有效期，单位秒，不超过 1 小时
   */
  ExpiredTime: number

  /**
   * 用户签名数据
   */
  ClientData?: string
}

/**
 * 号码购买信息
 */
export interface PhoneNumBuyInfo {
  /**
   * 电话号码
   */
  PhoneNum: string

  /**
   * 号码类型，0-固话|1-虚商号码|2-运营商号码|3-400号码
   */
  Type: number

  /**
   * 号码呼叫类型，1-呼入|2-呼出|3-呼入呼出
   */
  CallType: number

  /**
   * 购买时间戳
   */
  BuyTime: number

  /**
   * 截至时间戳
   */
  EndTime: number

  /**
   * 号码状态，1正常|2停用
   */
  State: number
}

/**
 * UnbindStaffSkillGroupList请求参数结构体
 */
export interface UnbindStaffSkillGroupListRequest {
  /**
   * 实例ID
   */
  SdkAppId: number

  /**
   * 客服邮箱
   */
  StaffEmail: string

  /**
   * 解绑技能组列表
   */
  SkillGroupList: Array<number>
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
 * DescribeAutoCalloutTask返回参数结构体
 */
export interface DescribeAutoCalloutTaskResponse {
  /**
   * 任务名
   */
  Name: string

  /**
   * 任务描述
   */
  Description: string

  /**
   * 任务起始时间戳
   */
  NotBefore: number

  /**
      * 任务结束时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  NotAfter: number

  /**
   * 主叫列表
   */
  Callers: Array<string>

  /**
   * 被叫信息列表
   */
  Callees: Array<AutoCalloutTaskCalleeInfo>

  /**
   * 任务使用的IvrId
   */
  IvrId: number

  /**
   * 任务状态 0初始 1运行中 2已完成 3结束中 4已终止
   */
  State: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStaffStatusMetrics请求参数结构体
 */
export interface DescribeStaffStatusMetricsRequest {
  /**
   * 实例ID
   */
  SdkAppId: number

  /**
   * 筛选坐席列表，默认不传返回全部坐席信息
   */
  StaffList?: Array<string>
}

/**
 * DescribeAutoCalloutTask请求参数结构体
 */
export interface DescribeAutoCalloutTaskRequest {
  /**
   * 呼叫中心实例Id
   */
  SdkAppId: number

  /**
   * 任务Id
   */
  TaskId: number
}

/**
 * 技能组信息
 */
export interface SkillGroupItem {
  /**
   * 技能组ID
   */
  SkillGroupId: number

  /**
   * 技能组名称
   */
  SkillGroupName: string

  /**
   * 优先级
   */
  Priority: number

  /**
   * 类型：IM、TEL、ALL（全媒体）
   */
  Type: string
}

/**
 * CreateUserSig返回参数结构体
 */
export interface CreateUserSigResponse {
  /**
   * 签名结果
   */
  UserSig: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteStaff请求参数结构体
 */
export interface DeleteStaffRequest {
  /**
   * 实例ID
   */
  SdkAppId: number

  /**
   * 待删除客服邮箱列表
   */
  StaffList: Array<string>
}

/**
 * DescribeTelSession请求参数结构体
 */
export interface DescribeTelSessionRequest {
  /**
   * 应用ID
   */
  SdkAppId: number

  /**
   * 会话ID
   */
  SessionId: string
}

/**
 * 呼入实时指标
 */
export interface CallInMetrics {
  /**
   * IVR驻留数量
   */
  IvrCount: number

  /**
   * 排队中数量
   */
  QueueCount: number

  /**
   * 振铃中数量
   */
  RingCount: number

  /**
   * 接通中数量
   */
  AcceptCount: number

  /**
   * 客服转接外线中数量
   */
  TransferOuterCount: number

  /**
   * 最大排队时长
   */
  MaxQueueDuration: number

  /**
   * 平均排队时长
   */
  AvgQueueDuration: number

  /**
   * 最大振铃时长
   */
  MaxRingDuration: number

  /**
   * 平均振铃时长
   */
  AvgRingDuration: number

  /**
   * 最大接通时长
   */
  MaxAcceptDuration: number

  /**
   * 平均接通时长
   */
  AvgAcceptDuration: number
}

/**
 * DescribeCCCBuyInfoList请求参数结构体
 */
export interface DescribeCCCBuyInfoListRequest {
  /**
   * 应用ID列表，不传时查询所有应用
   */
  SdkAppIds?: Array<number>
}

/**
 * DeleteStaff返回参数结构体
 */
export interface DeleteStaffResponse {
  /**
      * 无法删除的状态为在线的客服列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  OnlineStaffList: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量添加客服时，返回出错客服的像个信息
 */
export interface ErrStaffItem {
  /**
   * 坐席邮箱地址
   */
  StaffEmail: string

  /**
   * 错误码
   */
  Code: string

  /**
   * 错误描述
   */
  Message: string
}

/**
 * 坐席状态补充信息
 */
export interface StaffStatusExtra {
  /**
   * im - 文本 | tel - 电话 | all - 全媒体
   */
  Type: string

  /**
   * in - 呼入 | out - 呼出
   */
  Direct: string
}

/**
 * DescribeSkillGroupInfoList请求参数结构体
 */
export interface DescribeSkillGroupInfoListRequest {
  /**
   * 应用ID
   */
  SdkAppId: number

  /**
   * 分页尺寸，上限 100
   */
  PageSize: number

  /**
   * 分页页码，从 0 开始
   */
  PageNumber: number

  /**
   * 技能组ID，查询单个技能组时使用
   */
  SkillGroupId?: number

  /**
   * 查询修改时间大于等于ModifiedTime的技能组时使用
   */
  ModifiedTime?: number
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
 * DescribeChatMessages返回参数结构体
 */
export interface DescribeChatMessagesResponse {
  /**
   * 总记录数
   */
  TotalCount: number

  /**
   * 消息列表
   */
  Messages: Array<MessageBody>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用购买信息
 */
export interface SdkAppIdBuyInfo {
  /**
   * 应用ID
   */
  SdkAppId: number

  /**
   * 应用名称
   */
  Name: string

  /**
   * 坐席购买数（还在有效期内）
   */
  StaffBuyNum: number

  /**
   * 坐席购买列表 （还在有效期内）
   */
  StaffBuyList: Array<StaffBuyInfo>

  /**
   * 号码购买列表
   */
  PhoneNumBuyList: Array<PhoneNumBuyInfo>
}

/**
 * 呼入线路维度相关指标
 */
export interface CallInNumberMetrics {
  /**
   * 线路号码
   */
  Number: string

  /**
   * 线路相关指标
   */
  Metrics: CallInMetrics

  /**
   * 所属技能组相关指标
   */
  SkillGroupMetrics: Array<CallInSkillGroupMetrics>
}

/**
 * 外呼任务被叫信息
 */
export interface AutoCalloutTaskCalleeInfo {
  /**
   * 被叫号码
   */
  Callee: string

  /**
   * 呼叫状态 0初始 1已接听 2未接听 3呼叫中 4待重试
   */
  State: number
}

/**
 * DescribePSTNActiveSessionList返回参数结构体
 */
export interface DescribePSTNActiveSessionListResponse {
  /**
   * 列表总条数
   */
  Total: number

  /**
   * 列表内容
   */
  Sessions: Array<PSTNSessionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCallOutSession返回参数结构体
 */
export interface CreateCallOutSessionResponse {
  /**
   * 新创建的会话 ID
   */
  SessionId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本会话服务记录信息
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
0 异常结束
1 正常结束
3 无坐席在线
17 坐席放弃接听
100 黑名单
101 坐席手动转接
102 IVR阶段放弃
108 用户超时自动结束
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

  /**
      * 会话ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SessionId: string

  /**
      * 技能组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkillGroupId: string

  /**
      * 技能组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkillGroupName: string
}

/**
 * 坐席购买信息
 */
export interface StaffBuyInfo {
  /**
   * 购买坐席数量
   */
  Num: number

  /**
   * 购买时间戳
   */
  BuyTime: number

  /**
   * 截至时间戳
   */
  EndTime: number
}

/**
 * DescribeProtectedTelCdr返回参数结构体
 */
export interface DescribeProtectedTelCdrResponse {
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
 * DescribeAutoCalloutTasks请求参数结构体
 */
export interface DescribeAutoCalloutTasksRequest {
  /**
   * 呼叫中心实例Id
   */
  SdkAppId: number

  /**
   * 分页大小
   */
  PageSize: number

  /**
   * 页数
   */
  PageNumber: number
}

/**
 * DescribeChatMessages请求参数结构体
 */
export interface DescribeChatMessagesRequest {
  /**
   * 实例ID
   */
  InstanceId?: number

  /**
   * 应用ID
   */
  SdkAppId?: number

  /**
   * 服务记录ID
   */
  CdrId?: string

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

  /**
   * 服务记录SessionID
   */
  SessionId?: string
}

/**
 * PSTN 会话类型。
 */
export interface PSTNSession {
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
  StartTimestamp: number

  /**
   * 振铃时间，Unix 时间戳
   */
  RingTimestamp: number

  /**
   * 接听时间，Unix 时间戳
   */
  AcceptTimestamp: number

  /**
   * 坐席邮箱
   */
  StaffEmail: string

  /**
   * 坐席工号
   */
  StaffNumber: string

  /**
      * 会话状态
ringing 振铃中
seatJoining  等待坐席接听
inProgress 进行中
finished 已完成
      */
  SessionStatus: string

  /**
   * 会话呼叫方向， 0 呼入 | 1 - 呼出
   */
  Direction: number

  /**
   * 转外线使用的号码（转外线主叫）
   */
  OutBoundCaller: string

  /**
   * 转外线被叫
   */
  OutBoundCallee: string

  /**
   * 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空
   */
  ProtectedCaller: string

  /**
   * 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空
   */
  ProtectedCallee: string
}

/**
 * DescribeTelSession返回参数结构体
 */
export interface DescribeTelSessionResponse {
  /**
   * 会话信息
   */
  Session: PSTNSession

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStaffInfoList请求参数结构体
 */
export interface DescribeStaffInfoListRequest {
  /**
   * 应用ID
   */
  SdkAppId: number

  /**
   * 分页尺寸，上限 100
   */
  PageSize: number

  /**
   * 分页页码，从 0 开始
   */
  PageNumber: number

  /**
   * 坐席账号，查询单个坐席时使用
   */
  StaffMail?: string

  /**
   * 查询修改时间大于等于ModifiedTime的坐席时使用
   */
  ModifiedTime?: number
}

/**
 * 自动外呼任务列表项
 */
export interface AutoCalloutTaskInfo {
  /**
   * 任务名
   */
  Name: string

  /**
   * 被叫数量
   */
  CalleeCount: number

  /**
   * 主叫号码列表
   */
  Callers: Array<string>

  /**
   * 起始时间戳
   */
  NotBefore: number

  /**
      * 结束时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  NotAfter: number

  /**
   * 任务使用的IvrId
   */
  IvrId: number

  /**
   * 任务状态0初始 1运行中 2已完成 3结束中 4已结束
   */
  State: number
}

/**
 * 带有技能组优先级的坐席信息
 */
export interface StaffInfo {
  /**
      * 坐席名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
   * 坐席邮箱
   */
  Mail: string

  /**
      * 坐席电话号码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Phone: string

  /**
      * 坐席昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Nick: string

  /**
      * 坐席工号
注意：此字段可能返回 null，表示取不到有效值。
      */
  StaffNumber: string

  /**
      * 所属技能组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SkillGroupList: Array<SkillGroupItem>

  /**
      * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastModifyTimestamp: number
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

  /**
   * 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空
   */
  ProtectedCaller: string

  /**
   * 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空
   */
  ProtectedCallee: string
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

  /**
      * 录音转存第三方COS地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomRecordURL: string
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
 * DescribeStaffStatusMetrics返回参数结构体
 */
export interface DescribeStaffStatusMetricsResponse {
  /**
   * 坐席状态实时信息
   */
  Metrics: Array<StaffStatusMetrics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 技能组信息
 */
export interface SkillGroupInfoItem {
  /**
   * 技能组ID
   */
  SkillGroupId: number

  /**
   * 技能组名称
   */
  SkillGroupName: string

  /**
   * 类型：IM、TEL、ALL（全媒体）
   */
  Type: string

  /**
      * 会话分配策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoutePolicy: string

  /**
      * 会话分配是否优先上次服务坐席
注意：此字段可能返回 null，表示取不到有效值。
      */
  UsingLastSeat: number

  /**
      * 单客服最大并发数（电话类型默认1）
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxConcurrency: number

  /**
      * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastModifyTimestamp: number
}

/**
 * StopAutoCalloutTask返回参数结构体
 */
export interface StopAutoCalloutTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateCallOutSession请求参数结构体
 */
export interface CreateCallOutSessionRequest {
  /**
   * 应用 ID
   */
  SdkAppId: number

  /**
   * 客服用户 ID，一般为客服邮箱
   */
  UserId: string

  /**
   * 被叫号码，须带 0086 前缀
   */
  Callee: string

  /**
   * 主叫号码，须带 0086 前缀
   */
  Caller?: string

  /**
   * 是否强制使用手机外呼，当前只支持 true，若为 true 请确保已配置白名单
   */
  IsForceUseMobile?: boolean

  /**
   * 自定义数据，长度限制 1024 字节
   */
  Uui?: string
}

/**
 * 坐席状态相关信息
 */
export interface StaffStatusMetrics {
  /**
   * 坐席邮箱
   */
  Email: string

  /**
   * 坐席状态 free 示闲 | busy 忙碌 | rest 小休 | notReady 示忙 | afterCallWork 话后调整 | offline 离线
   */
  Status: string

  /**
   * 坐席状态补充信息
   */
  StatusExtra: StaffStatusExtra

  /**
   * 当天在线总时长
   */
  OnlineDuration: number

  /**
   * 当天示闲总时长
   */
  FreeDuration: number

  /**
   * 当天忙碌总时长
   */
  BusyDuration: number

  /**
   * 当天示忙总时长
   */
  NotReadyDuration: number

  /**
   * 当天小休总时长
   */
  RestDuration: number

  /**
   * 当天话后调整总时长
   */
  AfterCallWorkDuration: number

  /**
   * 小休原因
   */
  Reason: string

  /**
   * 是否预约小休
   */
  ReserveRest: boolean

  /**
   * 是否预约示忙
   */
  ReserveNotReady: boolean
}

/**
 * BindStaffSkillGroupList返回参数结构体
 */
export interface BindStaffSkillGroupListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAutoCalloutTasks返回参数结构体
 */
export interface DescribeAutoCalloutTasksResponse {
  /**
   * 总数
   */
  TotalCount: number

  /**
   * 任务列表
   */
  Tasks: Array<AutoCalloutTaskInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 套餐包购买信息
 */
export interface PackageBuyInfo {
  /**
   * 套餐包Id
   */
  PackageId: string

  /**
   * 套餐包类型，0-外呼套餐包|1-400呼入套餐包
   */
  Type: number

  /**
   * 套餐包总量
   */
  CapacitySize: number

  /**
   * 套餐包剩余量
   */
  CapacityRemain: number

  /**
   * 购买时间戳
   */
  BuyTime: number

  /**
   * 截至时间戳
   */
  EndTime: number
}

/**
 * DescribeTelCdr请求参数结构体
 */
export interface DescribeTelCdrRequest {
  /**
   * 起始时间戳，Unix 秒级时间戳
   */
  StartTimeStamp: number

  /**
   * 结束时间戳，Unix 秒级时间戳
   */
  EndTimeStamp: number

  /**
   * 实例 ID（废弃）
   */
  InstanceId?: number

  /**
   * 返回数据条数，上限（废弃）
   */
  Limit?: number

  /**
   * 偏移（废弃）
   */
  Offset?: number

  /**
   * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
   */
  SdkAppId?: number

  /**
   * 分页尺寸（必填），上限 100
   */
  PageSize?: number

  /**
   * 分页页码（必填），从 0 开始
   */
  PageNumber?: number

  /**
   * 按手机号筛选
   */
  Phones?: Array<string>

  /**
   * 按SessionId筛选
   */
  SessionIds?: Array<string>
}

/**
 * DescribeProtectedTelCdr请求参数结构体
 */
export interface DescribeProtectedTelCdrRequest {
  /**
   * 起始时间戳，Unix 秒级时间戳
   */
  StartTimeStamp: number

  /**
   * 结束时间戳，Unix 秒级时间戳
   */
  EndTimeStamp: number

  /**
   * 应用 ID，可以查看 https://console.cloud.tencent.com/ccc
   */
  SdkAppId: number

  /**
   * 分页尺寸，上限 100
   */
  PageSize: number

  /**
   * 分页页码，从 0 开始
   */
  PageNumber: number
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
 * DescribeCCCBuyInfoList返回参数结构体
 */
export interface DescribeCCCBuyInfoListResponse {
  /**
   * 应用总数
   */
  TotalCount: number

  /**
   * 应用购买信息列表
   */
  SdkAppIdBuyList: Array<SdkAppIdBuyInfo>

  /**
   * 套餐包购买信息列表
   */
  PackageBuyList: Array<PackageBuyInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnbindStaffSkillGroupList返回参数结构体
 */
export interface UnbindStaffSkillGroupListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCallInMetrics请求参数结构体
 */
export interface DescribeCallInMetricsRequest {
  /**
   * 实例ID
   */
  SdkAppId: number

  /**
   * 是否返回技能组维度信息，默认“是”
   */
  EnabledSkillGroup?: boolean

  /**
   * 是否返回线路维度信息，默认“否”
   */
  EnabledNumber?: boolean
}

/**
 * CreateStaff返回参数结构体
 */
export interface CreateStaffResponse {
  /**
      * 错误坐席列表及错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorStaffList: Array<ErrStaffItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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

/**
 * DescribeSkillGroupInfoList返回参数结构体
 */
export interface DescribeSkillGroupInfoListResponse {
  /**
   * 技能组总数
   */
  TotalCount: number

  /**
   * 技能组信息列表
   */
  SkillGroupList: Array<SkillGroupInfoItem>

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

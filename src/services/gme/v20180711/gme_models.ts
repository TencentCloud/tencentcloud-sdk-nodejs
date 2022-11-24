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
 * 获取应用列表返回
 */
export interface ApplicationList {
  /**
   * 服务开关状态
   */
  ServiceConf: ServiceStatus

  /**
   * 应用ID(AppID)
   */
  BizId: number

  /**
   * 应用名称
   */
  AppName: string

  /**
   * 项目ID，默认为0
   */
  ProjectId: number

  /**
   * 应用状态，返回0表示正常，1表示关闭，2表示欠费停服，3表示欠费回收
   */
  AppStatus: number

  /**
   * 创建时间，Unix时间戳格式
   */
  CreateTime: number

  /**
   * 应用类型，无需关注此数值
   */
  AppType: number
}

/**
 * ScanVoice返回参数结构体
 */
export interface ScanVoiceResponse {
  /**
      * 语音检测返回。Data 字段是 JSON 数组，每一个元素包含：<li>DataId： 请求中对应的 DataId。</li>
<li>TaskID ：该检测任务的 ID，用于轮询语音检测结果。</li>
      */
  Data: Array<ScanVoiceResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用用量统计数据
 */
export interface AppStatisticsItem {
  /**
      * 实时语音统计数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealtimeSpeechStatisticsItem: RealTimeSpeechStatisticsItem

  /**
      * 语音消息统计数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  VoiceMessageStatisticsItem: VoiceMessageStatisticsItem

  /**
      * 语音过滤统计数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  VoiceFilterStatisticsItem: VoiceFilterStatisticsItem

  /**
   * 统计时间
   */
  Date: string

  /**
      * 录音转文本用量统计数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioTextStatisticsItem: AudioTextStatisticsItem

  /**
      * 流式转文本用量数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  StreamTextStatisticsItem: StreamTextStatisticsItem

  /**
      * 海外转文本用量数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  OverseaTextStatisticsItem: OverseaTextStatisticsItem

  /**
      * 实时语音转文本用量数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealtimeTextStatisticsItem: RealtimeTextStatisticsItem
}

/**
 * ModifyAppStatus请求参数结构体
 */
export interface ModifyAppStatusRequest {
  /**
   * 应用ID，创建应用后由后台生成并返回。
   */
  BizId: number

  /**
   * 应用状态，取值：open/close
   */
  Status: string
}

/**
 * CreateCustomization返回参数结构体
 */
export interface CreateCustomizationResponse {
  /**
   * 模型ID
   */
  ModelId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanResultList返回参数结构体
 */
export interface DescribeScanResultListResponse {
  /**
      * 要查询的语音检测任务的结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: Array<DescribeScanResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationData请求参数结构体
 */
export interface DescribeApplicationDataRequest {
  /**
   * 应用ID
   */
  BizId: number

  /**
   * 数据开始时间，格式为 年-月-日，如: 2018-07-13
   */
  StartDate: string

  /**
   * 数据结束时间，格式为 年-月-日，如: 2018-07-13
   */
  EndDate: string
}

/**
 * 用户麦克风状态
 */
export interface UserMicStatus {
  /**
   * 用户ID
   */
  Uid: number

  /**
   * 是否开麦 。1闭麦  2开麦
   */
  EnableMic: number
}

/**
 * DescribeApplicationList返回参数结构体
 */
export interface DescribeApplicationListResponse {
  /**
   * 获取应用列表返回
   */
  ApplicationList: Array<ApplicationList>

  /**
   * 应用总数
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateScanUser返回参数结构体
 */
export interface CreateScanUserResponse {
  /**
   * 返回结果码
   */
  ErrorCode: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRealtimeScanConfig返回参数结构体
 */
export interface DescribeRealtimeScanConfigResponse {
  /**
   * 返回结果码，0正常，非0失败
   */
  ErrorCode: number

  /**
   * 应用ID
   */
  BizId: number

  /**
   * 送检类型，0: 全量送审，1: 自定义送审
   */
  AuditType: number

  /**
   * 用户号正则表达式
   */
  UserIdRegex: Array<string>

  /**
   * 房间号正则表达式
   */
  RoomIdRegex: Array<string>

  /**
   * 用户号字符串，逗号分隔，示例："0001,0002,0003"
   */
  UserIdString: string

  /**
   * 房间号字符串，逗号分隔，示例："0001,0002,0003"
   */
  RoomIdString: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserMicStatus请求参数结构体
 */
export interface ModifyUserMicStatusRequest {
  /**
   * 应用ID
   */
  BizId: number

  /**
   * 房间ID
   */
  RoomId: string

  /**
   * 用户麦克风状态，数组长度不超过20
   */
  Users: Array<UserMicStatus>
}

/**
 * 语音消息转文本自学习模型配置
 */
export interface CustomizationConfigs {
  /**
   * 应用 ID，登录控制台创建应用得到的AppID
   */
  BizId: number

  /**
   * 模型ID
   */
  ModelId: string

  /**
   * 模型状态，-1下线状态，1上线状态, 0训练中, -2训练失败, 3上线中, 4下线中
   */
  ModelState: number

  /**
   * 模型名称
   */
  ModelName?: string

  /**
   * 文本文件的下载地址，服务会从该地址下载文件，目前仅支持腾讯云cos
   */
  TextUrl?: string

  /**
   * 更新时间，11位时间戳
   */
  UpdateTime?: number
}

/**
 * 语音消息用量统计信息
 */
export interface VoiceMessageStatisticsItem {
  /**
   * 离线语音DAU
   */
  Dau: number
}

/**
 * DeleteRoomMember请求参数结构体
 */
export interface DeleteRoomMemberRequest {
  /**
   * 要操作的房间id
   */
  RoomId: string

  /**
   * 要剔除的用户列表
   */
  Uids: Array<string>

  /**
   * 剔除类型 1-删除房间 2-剔除用户
   */
  DeleteType: number

  /**
   * 应用id
   */
  BizId: number
}

/**
 * 房间内用户信息
 */
export interface RoomUser {
  /**
   * 房间id
   */
  RoomId: number

  /**
      * 房间里用户uin列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uins: Array<number>

  /**
      * 字符串房间id
注意：此字段可能返回 null，表示取不到有效值。
      */
  StrRoomId: string
}

/**
 * CreateCustomization请求参数结构体
 */
export interface CreateCustomizationRequest {
  /**
   * 应用 ID，登录控制台创建应用得到的AppID
   */
  BizId: number

  /**
   * 文本文件的下载地址，服务会从该地址下载文件，目前仅支持腾讯云cos
   */
  TextUrl: string

  /**
   * 模型名称，名称长度不超过36，默认为BizId。
   */
  ModelName?: string
}

/**
 * DescribeRoomInfo请求参数结构体
 */
export interface DescribeRoomInfoRequest {
  /**
   * 应用ID，登录[控制台 - 服务管理](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
   */
  SdkAppId: number

  /**
   * 房间号列表，最大不能超过10个（RoomIds、StrRoomIds必须填一个）
   */
  RoomIds?: Array<number>

  /**
   * 字符串类型房间号列表，最大不能超过10个（RoomIds、StrRoomIds必须填一个）
   */
  StrRoomIds?: Array<string>
}

/**
 * 流式转文本用量数据
 */
export interface StreamTextStatisticsItem {
  /**
      * 统计值，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: number
}

/**
 * UpdateScanRooms请求参数结构体
 */
export interface UpdateScanRoomsRequest {
  /**
   * 应用ID
   */
  BizId: number

  /**
   * 需要送检的所有房间号。多个房间号之间用","分隔。示例："0001,0002,0003"
   */
  RoomIdString?: string

  /**
   * 符合此正则表达式规则的房间号将被送检。示例：["^6.*"] 表示所有以6开头的房间号将被送检
   */
  RoomIdRegex?: Array<string>
}

/**
 * ModifyCustomization返回参数结构体
 */
export interface ModifyCustomizationResponse {
  /**
   * 返回值。0为成功，非0为失败。
   */
  ErrorCode: number

  /**
   * 自学习模型ID
   */
  ModelId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRealtimeScanConfig请求参数结构体
 */
export interface DescribeRealtimeScanConfigRequest {
  /**
   * 应用ID
   */
  BizId: number
}

/**
 * DescribeScanResultList请求参数结构体
 */
export interface DescribeScanResultListRequest {
  /**
   * 应用 ID，登录[控制台](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
   */
  BizId: number

  /**
   * 查询的任务 ID 列表，任务 ID 列表最多支持 100 个。
   */
  TaskIdList: Array<string>

  /**
   * 任务返回结果数量，默认10，上限500。大文件任务忽略此参数，返回全量结果
   */
  Limit?: number
}

/**
 * ModifyCustomizationState返回参数结构体
 */
export interface ModifyCustomizationStateResponse {
  /**
   * 自学习模型ID
   */
  ModelId: string

  /**
   * 返回值。0为成功，非0为失败。
   */
  ErrorCode: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgeDetectTask请求参数结构体
 */
export interface CreateAgeDetectTaskRequest {
  /**
   * 应用id
   */
  BizId: number

  /**
      * 语音检测子任务列表，列表最多支持100个检测子任务。结构体中包含：
<li>DataId：数据的唯一ID</li>
<li>Url：数据文件的url，为 urlencode 编码，流式则为拉流地址</li>
      */
  Tasks: Array<AgeDetectTask>

  /**
   * 任务结束时gme后台会自动触发回调
   */
  Callback?: string
}

/**
 * 实时语音用量统计数据
 */
export interface RealTimeSpeechStatisticsItem {
  /**
   * 大陆地区DAU
   */
  MainLandDau: number

  /**
   * 大陆地区PCU
   */
  MainLandPcu: number

  /**
   * 大陆地区总使用时长，单位为min
   */
  MainLandDuration: number

  /**
   * 海外地区DAU
   */
  OverseaDau: number

  /**
   * 海外地区PCU
   */
  OverseaPcu: number

  /**
   * 海外地区总使用时长，单位为min
   */
  OverseaDuration: number
}

/**
 * DescribeAppStatistics请求参数结构体
 */
export interface DescribeAppStatisticsRequest {
  /**
   * GME应用ID
   */
  BizId: number

  /**
   * 数据开始时间，东八区时间，格式: 年-月-日，如: 2018-07-13
   */
  StartDate: string

  /**
   * 数据结束时间，东八区时间，格式: 年-月-日，如: 2018-07-13
   */
  EndDate: string

  /**
   * 要查询的服务列表，取值：RealTimeSpeech/VoiceMessage/VoiceFilter/SpeechToText
   */
  Services: Array<string>
}

/**
 * CreateScanUser请求参数结构体
 */
export interface CreateScanUserRequest {
  /**
   * 应用ID，登录控制台 - 服务管理创建应用得到的AppID
   */
  BizId: number

  /**
   * 需要新增送检的用户号。示例：1234
   */
  UserId?: number
}

/**
 * ModifyCustomizationState请求参数结构体
 */
export interface ModifyCustomizationStateRequest {
  /**
   * 自学习模型ID
   */
  ModelId: string

  /**
   * 想要变换的模型状态，-1代表下线，1代表上线
   */
  ToState: number

  /**
   * 应用 ID，登录控制台创建应用得到的AppID
   */
  BizId: number
}

/**
 * 语音检测任务列表
 */
export interface Task {
  /**
   * 数据的唯一ID
   */
  DataId: string

  /**
   * 数据文件的url，为 urlencode 编码，流式则为拉流地址
   */
  Url: string

  /**
   * gme实时语音房间ID，通过gme实时语音进行语音分析时输入
   */
  RoomId?: string

  /**
   * gme实时语音用户ID，通过gme实时语音进行语音分析时输入
   */
  OpenId?: string
}

/**
 * 标签列表
 */
export interface Tag {
  /**
      * 标签键
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagKey?: string

  /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagValue?: string
}

/**
 * DescribeAgeDetectTask返回参数结构体
 */
export interface DescribeAgeDetectTaskResponse {
  /**
   * 任务ID
   */
  TaskId: string

  /**
      * 语音检测返回。Results 字段是 JSON 数组，每一个元素包含：
DataId： 请求中对应的 DataId。
Url ：该请求中对应的 Url。
Status ：子任务状态，0:已创建，1:运行中，2:已完成，3:任务异常，4:任务超时。
Age ：子任务完成后的结果，0:成年人，1:未成年人，100:未知结果。
      */
  Results: Array<AgeDetectTaskResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCustomizationList返回参数结构体
 */
export interface GetCustomizationListResponse {
  /**
      * 语音消息转文本自学习模型配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomizationConfigs: Array<CustomizationConfigs>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录音转文本用量统计数据
 */
export interface AudioTextStatisticsItem {
  /**
      * 统计值，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: number
}

/**
 * 应用统计数据
 */
export interface ApplicationDataStatistics {
  /**
   * 应用ID
   */
  BizId: number

  /**
   * Dau统计项数目
   */
  DauDataNum: number

  /**
   * 大陆地区Dau统计数据，单位人
   */
  DauDataMainland: Array<StatisticsItem>

  /**
   * 海外地区Dau统计数据，单位人
   */
  DauDataOversea: Array<StatisticsItem>

  /**
   * 大陆和海外地区Dau统计数据汇总，单位人
   */
  DauDataSum: Array<StatisticsItem>

  /**
   * 实时语音时长统计项数目
   */
  DurationDataNum: number

  /**
   * 大陆地区实时语音时长统计数据，单位分钟
   */
  DurationDataMainland: Array<StatisticsItem>

  /**
   * 海外地区实时语音时长统计数据，单位分钟
   */
  DurationDataOversea: Array<StatisticsItem>

  /**
   * 大陆和海外地区实时语音时长统计数据汇总，单位分钟
   */
  DurationDataSum: Array<StatisticsItem>

  /**
   * Pcu统计项数目
   */
  PcuDataNum: number

  /**
   * 大陆地区Pcu统计数据，单位人
   */
  PcuDataMainland: Array<StatisticsItem>

  /**
   * 海外地区Pcu统计数据，单位人
   */
  PcuDataOversea: Array<StatisticsItem>

  /**
   * 大陆和海外地区Pcu统计数据汇总，单位人
   */
  PcuDataSum: Array<StatisticsItem>
}

/**
 * DeleteScanUser请求参数结构体
 */
export interface DeleteScanUserRequest {
  /**
   * 应用ID，登录控制台 - 服务管理创建应用得到的AppID
   */
  BizId: number

  /**
   * 需要删除送检的用户号。示例：1234
   */
  UserId?: number
}

/**
 * ModifyAppStatus接口输出参数
 */
export interface ModifyAppStatusResp {
  /**
   * GME应用ID
   */
  BizId: number

  /**
   * 应用状态，取值：open/close
   */
  Status: string
}

/**
 * DescribeAppStatistics返回参数结构体
 */
export interface DescribeAppStatisticsResponse {
  /**
   * 应用用量统计数据
   */
  Data: DescribeAppStatisticsResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateScanRooms返回参数结构体
 */
export interface UpdateScanRoomsResponse {
  /**
      * 返回结果码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorCode: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateScanUsers返回参数结构体
 */
export interface UpdateScanUsersResponse {
  /**
   * 返回结果码
   */
  ErrorCode: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationData返回参数结构体
 */
export interface DescribeApplicationDataResponse {
  /**
   * 应用统计数据
   */
  Data: ApplicationDataStatistics

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRoomMember返回参数结构体
 */
export interface DeleteRoomMemberResponse {
  /**
   * 剔除房间或成员的操作结果
   */
  DeleteResult: DeleteResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteScanUser返回参数结构体
 */
export interface DeleteScanUserResponse {
  /**
   * 返回结果码
   */
  ErrorCode: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCustomization请求参数结构体
 */
export interface ModifyCustomizationRequest {
  /**
   * 应用 ID，登录控制台创建应用得到的AppID
   */
  BizId: number

  /**
   * 文本文件的下载地址，服务会从该地址下载文件，目前仅支持腾讯云cos
   */
  TextUrl: string

  /**
   * 要修改的模型ID
   */
  ModelId: string
}

/**
 * 离线语音服务配置数据
 */
export interface VoiceMessageConf {
  /**
   * 离线语音服务开关，取值：open/close
   */
  Status?: string

  /**
   * 离线语音支持语种，取值： all-全部，cnen-中英文。默认为中英文
   */
  Language?: string
}

/**
 * 语音过滤用量统计数据
 */
export interface VoiceFilterStatisticsItem {
  /**
   * 语音过滤总时长，单位为min
   */
  Duration: number
}

/**
 * CreateApp的输出参数
 */
export interface CreateAppResp {
  /**
   * 应用ID，由后台自动生成。
   */
  BizId: number

  /**
   * 应用名称，透传输入参数的AppName
   */
  AppName: string

  /**
   * 项目ID，透传输入的ProjectId
   */
  ProjectId: number

  /**
   * 应用密钥，GME SDK初始化时使用
   */
  SecretKey: string

  /**
   * 服务创建时间戳
   */
  CreateTime: number

  /**
   * 实时语音服务配置数据
   */
  RealtimeSpeechConf: RealtimeSpeechConf

  /**
   * 语音消息及转文本服务配置数据
   */
  VoiceMessageConf: VoiceMessageConf

  /**
   * 语音分析服务配置数据
   */
  VoiceFilterConf: VoiceFilterConf
}

/**
 * DescribeRoomInfo返回参数结构体
 */
export interface DescribeRoomInfoResponse {
  /**
      * 操作结果, 0成功, 非0失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: number

  /**
      * 房间用户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoomUsers: Array<RoomUser>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgeDetectTask请求参数结构体
 */
export interface DescribeAgeDetectTaskRequest {
  /**
   * 应用id
   */
  BizId: number

  /**
   * 创建年龄语音识别任务时返回的taskid
   */
  TaskId: string
}

/**
 * DeleteCustomization返回参数结构体
 */
export interface DeleteCustomizationResponse {
  /**
   * 返回值。0为成功，非0为失败。
   */
  ErrorCode: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserMicStatus返回参数结构体
 */
export interface ModifyUserMicStatusResponse {
  /**
   * 返回结果：0为成功，非0为失败
   */
  Result: number

  /**
   * 错误信息
   */
  ErrMsg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationList请求参数结构体
 */
export interface DescribeApplicationListRequest {
  /**
   * 项目ID，0表示默认项目，-1表示所有项目，如果需要查找具体项目下的应用列表，请填入具体项目ID，项目ID在项目管理中查看 https://console.cloud.tencent.com/project
   */
  ProjectId: number

  /**
   * 页码ID，0表示第一页，以此后推。默认填0
   */
  PageNo: number

  /**
   * 每页展示应用数量。默认填200
   */
  PageSize: number

  /**
   * 所查找应用名称的关键字，支持模糊匹配查找。空串表示查询所有应用
   */
  SearchText: string

  /**
   * 标签列表
   */
  TagSet?: Array<Tag>

  /**
   * 查找过滤关键字列表
   */
  Filters?: Array<Filter>
}

/**
 * GetCustomizationList请求参数结构体
 */
export interface GetCustomizationListRequest {
  /**
   * 应用 ID，登录控制台创建应用得到的AppID
   */
  BizId: number
}

/**
 * DescribeUserInAndOutTime返回参数结构体
 */
export interface DescribeUserInAndOutTimeResponse {
  /**
   * 用户在房间得进出时间列表
   */
  InOutList: Array<InOutTimeInfo>

  /**
   * 用户在房间中总时长
   */
  Duration: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateScanUsers请求参数结构体
 */
export interface UpdateScanUsersRequest {
  /**
   * 应用ID
   */
  BizId: number

  /**
   * 需要送检的所有用户号。多个用户号之间用","分隔。示例："0001,0002,0003"
   */
  UserIdString?: string

  /**
   * 符合此正则表达式规则的用户号将被送检。示例：["^6.*"] 表示所有以6开头的用户号将被送检
   */
  UserIdRegex?: Array<string>
}

/**
 * 剔除房间操作结果
 */
export interface DeleteResult {
  /**
   * 错误码，0-剔除成功 其他-剔除失败
   */
  Code: number

  /**
   * 错误描述
   */
  ErrorMsg: string
}

/**
 * 年龄语音任务结果
 */
export interface AgeDetectTaskResult {
  /**
   * 数据唯一ID
   */
  DataId: string

  /**
   * 数据文件的url
   */
  Url: string

  /**
   * 任务状态，0: 已创建，1:运行中，2:正常结束，3:异常结束，4:运行超时
   */
  Status: number

  /**
   * 任务结果：0: 成年，1:未成年，100:未知
   */
  Age: number
}

/**
 * 语音检测结果返回
 */
export interface DescribeScanResult {
  /**
   * 业务返回码
   */
  Code: number

  /**
   * 数据唯一 ID
   */
  DataId: string

  /**
   * 检测完成的时间戳
   */
  ScanFinishTime: number

  /**
   * 是否违规
   */
  HitFlag: boolean

  /**
   * 是否为流
   */
  Live: boolean

  /**
      * 业务返回描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Msg: string

  /**
      * 检测结果，Code 为 0 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanPiece: Array<ScanPiece>

  /**
   * 提交检测的时间戳
   */
  ScanStartTime: number

  /**
   * 语音检测场景，对应请求时的 Scene
   */
  Scenes: Array<string>

  /**
   * 语音检测任务 ID，由后台分配
   */
  TaskId: string

  /**
   * 文件或接流地址
   */
  Url: string

  /**
      * 检测任务执行结果状态，分别为：
<li>Start: 任务开始</li>
<li>Success: 成功结束</li>
<li>Error: 异常</li>
      */
  Status: string

  /**
   * 提交检测的应用 ID
   */
  BizId: number
}

/**
 * 年龄语音识别子任务
 */
export interface AgeDetectTask {
  /**
   * 数据唯一ID
   */
  DataId: string

  /**
   * 数据文件的url，为 urlencode 编码,音频文件格式支持的类型：.wav、.m4a、.amr、.mp3、.aac、.wma、.ogg
   */
  Url: string
}

/**
 * 查找过滤
 */
export interface Filter {
  /**
   * 要过滤的字段名, 比如"AppName"
   */
  Name?: string

  /**
   * 多个关键字
   */
  Values?: Array<string>
}

/**
 * 语音检测详情
 */
export interface ScanDetail {
  /**
   * 违规场景，参照<a href="https://cloud.tencent.com/document/product/607/37622#Label_Value">Label</a>定义
   */
  Label: string

  /**
   * 该场景下概率[0.00,100.00],分值越大违规概率越高
   */
  Rate: string

  /**
   * 违规关键字
   */
  KeyWord: string

  /**
   * 关键字在音频的开始时间，从0开始的偏移量，单位为毫秒
   */
  StartTime: number

  /**
   * 关键字在音频的结束时间，从0开始的偏移量,，单位为毫秒
   */
  EndTime: number
}

/**
 * CreateAgeDetectTask返回参数结构体
 */
export interface CreateAgeDetectTaskResponse {
  /**
   * 本次任务提交后唯一id，用于获取任务运行结果
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApp请求参数结构体
 */
export interface CreateAppRequest {
  /**
   * 应用名称
   */
  AppName: string

  /**
   * 腾讯云项目ID，默认为0，表示默认项目
   */
  ProjectId?: number

  /**
   * 需要支持的引擎列表，默认全选。
   */
  EngineList?: Array<string>

  /**
   * 服务区域列表，默认全选。
   */
  RegionList?: Array<string>

  /**
   * 实时语音服务配置数据
   */
  RealtimeSpeechConf?: RealtimeSpeechConf

  /**
   * 语音消息及转文本服务配置数据
   */
  VoiceMessageConf?: VoiceMessageConf

  /**
   * 语音分析服务配置数据
   */
  VoiceFilterConf?: VoiceFilterConf

  /**
   * 需要添加的标签列表
   */
  Tags?: Array<Tag>
}

/**
 * 实时语音配置数据
 */
export interface RealtimeSpeechConf {
  /**
   * 实时语音服务开关，取值：open/close
   */
  Status?: string

  /**
   * 实时语音音质类型，取值：high-高音质
   */
  Quality?: string
}

/**
 * 获取应用用量统计数据输出参数
 */
export interface DescribeAppStatisticsResp {
  /**
   * 应用用量统计数据
   */
  AppStatistics: Array<AppStatisticsItem>
}

/**
 * 语音检测返回结果
 */
export interface ScanVoiceResult {
  /**
   * 数据ID
   */
  DataId: string

  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * CreateApp返回参数结构体
 */
export interface CreateAppResponse {
  /**
   * 创建应用返回数据
   */
  Data: CreateAppResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 海外转文本用量数据
 */
export interface OverseaTextStatisticsItem {
  /**
      * 统计值，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: number
}

/**
 * 服务开关状态
 */
export interface StatusInfo {
  /**
   * 服务开关状态， 0-正常，1-关闭
   */
  Status: number
}

/**
 * DeleteCustomization请求参数结构体
 */
export interface DeleteCustomizationRequest {
  /**
   * 要删除的模型ID
   */
  ModelId: string

  /**
   * 应用 ID，登录控制台创建应用得到的AppID
   */
  BizId: number
}

/**
 * 语音检测结果，Code 为 0 时返回
 */
export interface ScanPiece {
  /**
      * 流检测时返回，音频转存地址，保留30min
注意：此字段可能返回 null，表示取不到有效值。
      */
  DumpUrl: string

  /**
   * 是否违规
   */
  HitFlag: boolean

  /**
      * 违规主要类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  MainType: string

  /**
   * 语音检测详情
   */
  ScanDetail: Array<ScanDetail>

  /**
      * gme实时语音房间ID，透传任务传入时的RoomId
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoomId: string

  /**
      * gme实时语音用户ID，透传任务传入时的OpenId
注意：此字段可能返回 null，表示取不到有效值。
      */
  OpenId: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Info: string

  /**
      * 流检测时分片在流中的偏移时间，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Offset: number

  /**
      * 流检测时分片时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number

  /**
      * 分片开始检测时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  PieceStartTime: number
}

/**
 * ModifyAppStatus返回参数结构体
 */
export interface ModifyAppStatusResponse {
  /**
   * 修改应用开关状态返回数据
   */
  Data: ModifyAppStatusResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户进出房间信息
 */
export interface InOutTimeInfo {
  /**
   * 进入房间时间
   */
  StartTime: number

  /**
   * 退出房间时间
   */
  EndTime: number
}

/**
 * 语音过滤服务配置数据
 */
export interface VoiceFilterConf {
  /**
   * 语音过滤服务开关，取值：open/close
   */
  Status?: string
}

/**
 * 实时语音转文本用量数据
 */
export interface RealtimeTextStatisticsItem {
  /**
      * 统计值，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: number
}

/**
 * 服务开关状态
 */
export interface ServiceStatus {
  /**
      * 实时语音服务开关状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealTimeSpeech: StatusInfo

  /**
      * 语音消息服务开关状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  VoiceMessage: StatusInfo

  /**
      * 语音内容安全服务开关状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Porn: StatusInfo

  /**
      * 语音录制服务开关状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Live: StatusInfo

  /**
      * 语音转文本服务开关状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  RealTimeAsr: StatusInfo
}

/**
 * 用量数据单元
 */
export interface StatisticsItem {
  /**
   * 日期，格式为年-月-日，如2018-07-13
   */
  StatDate: string

  /**
   * 统计值
   */
  Data: number
}

/**
 * ScanVoice请求参数结构体
 */
export interface ScanVoiceRequest {
  /**
   * 应用ID，登录[控制台 - 服务管理](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
   */
  BizId: number

  /**
   * 语音检测场景，参数值目前要求为 default。 预留场景设置： 谩骂、色情、广告、违禁等场景，<a href="#Label_Value">具体取值见上述 Label 说明。</a>
   */
  Scenes: Array<string>

  /**
   * 是否为直播流。值为 false 时表示普通语音文件检测；为 true 时表示语音流检测。
   */
  Live: boolean

  /**
      * 语音检测任务列表，列表最多支持100个检测任务。结构体中包含：
<li>DataId：数据的唯一ID</li>
<li>Url：数据文件的url，为 urlencode 编码，流式则为拉流地址</li>
      */
  Tasks: Array<Task>

  /**
   * 异步检测结果回调地址，具体见上述<a href="#Callback_Declare">回调相关说明</a>。（说明：该字段为空时，必须通过接口(查询语音检测结果)获取检测结果）。
   */
  Callback?: string

  /**
   * 语种，不传默认中文
   */
  Lang?: string
}

/**
 * DescribeUserInAndOutTime请求参数结构体
 */
export interface DescribeUserInAndOutTimeRequest {
  /**
   * 应用ID
   */
  BizId: number

  /**
   * 房间ID
   */
  RoomId: number

  /**
   * 用户ID
   */
  UserId: number

  /**
   * 字符串类型用户ID
   */
  UserIdStr?: string

  /**
   * 字符串类型房间ID
   */
  RoomIdStr?: string
}

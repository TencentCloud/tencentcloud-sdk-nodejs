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
 * VoiceFilter请求参数结构体
 */
export interface VoiceFilterRequest {
  /**
   * 应用ID，登录[控制台](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
   */
  BizId: number

  /**
   * 文件ID，表示文件唯一ID
   */
  FileId: string

  /**
   * 文件名
   */
  FileName: string

  /**
   * 文件url，urlencode编码，FileUrl和FileContent二选一
   */
  FileUrl?: string

  /**
   * 文件内容，base64编码，FileUrl和FileContent二选一
   */
  FileContent?: string

  /**
   * 用户ID
   */
  OpenId?: string
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
 * 语音消息用量统计信息
 */
export interface VoiceMessageStatisticsItem {
  /**
   * 离线语音DAU
   */
  Dau: number
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
 * DescribeFilterResult返回参数结构体
 */
export interface DescribeFilterResultResponse {
  /**
      * 过滤结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: VoiceFilterInfo

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
 * VoiceFilter返回参数结构体
 */
export interface VoiceFilterResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 语音过滤用量统计数据
 */
export interface VoiceFilterStatisticsItem {
  /**
   * 语音过滤总时长
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
 * ModifyRoomInfo请求参数结构体
 */
export interface ModifyRoomInfoRequest {
  /**
   * 应用ID，登录[控制台 - 服务管理](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
   */
  SdkAppId: number

  /**
   * 房间id
   */
  RoomId: number

  /**
      * 301 启动推流
302 停止推流
303 重置RTMP连接
      */
  OperationType: number
}

/**
 * DescribeUserInAndOutTime返回参数结构体
 */
export interface DescribeUserInAndOutTimeResponse {
  /**
   * 用户在房间得进出时间列表
   */
  InOutList?: Array<InOutTimeInfo>

  /**
   * 用户在房间中总时长
   */
  Duration?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音文件过滤详情
 */
export interface VoiceFilterInfo {
  /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  BizId?: number

  /**
      * 文件ID，表示文件唯一ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileId: string

  /**
      * 文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileName: string

  /**
      * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  OpenId: string

  /**
      * 数据创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  Timestamp: string

  /**
      * 过滤结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<VoiceFilter>
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
 * ModifyRoomInfo返回参数结构体
 */
export interface ModifyRoomInfoResponse {
  /**
      * 操作结果, 0成功, 非0失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: number

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrMsg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeFilterResultList请求参数结构体
 */
export interface DescribeFilterResultListRequest {
  /**
   * 应用ID
   */
  BizId: number

  /**
   * 开始时间，格式为 年-月-日，如: 2018-07-11
   */
  StartDate: string

  /**
   * 结束时间，格式为 年-月-日，如: 2018-07-11
   */
  EndDate: string

  /**
   * 偏移量，默认值为0。
   */
  Offset?: number

  /**
   * 返回数量，默认值为10，最大值为100。
   */
  Limit?: number
}

/**
 * 过滤结果
 */
export interface VoiceFilter {
  /**
      * 过滤类型，1：色情，2：涉毒，3：谩骂
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: number

  /**
      * 过滤命中关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
  Word: string
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
 * DescribeFilterResultList返回参数结构体
 */
export interface DescribeFilterResultListResponse {
  /**
      * 过滤结果总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
      * 当前分页过滤结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: Array<VoiceFilterInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 要查询的服务列表，取值：RealTimeSpeech/VoiceMessage/VoiceFilter
   */
  Services: Array<string>
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
   * 语言，目前jp代表日语
   */
  Lang?: string
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
 * DescribeFilterResult请求参数结构体
 */
export interface DescribeFilterResultRequest {
  /**
   * 应用ID
   */
  BizId: number

  /**
   * 文件ID
   */
  FileId: string
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
}

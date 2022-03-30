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
 * DescribeAbnormalEvent返回参数结构体
 */
export interface DescribeAbnormalEventResponse {
  /**
   * 返回的数据总条数
   */
  Total: number

  /**
   * 异常体验列表
   */
  AbnormalExperienceList: Array<AbnormalExperience>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAbnormalEvent请求参数结构体
 */
export interface DescribeAbnormalEventRequest {
  /**
   * 用户SDKAppID，查询SDKAppID下任意20条异常体验事件（可能不同房间）
   */
  SdkAppId: string

  /**
   * 查询开始时间,本地unix时间戳（1592448600s）
   */
  StartTime: number

  /**
   * 查询结束时间,本地unix时间戳（1592449080s）
   */
  EndTime: number

  /**
   * 房间号，查询房间内任意20条以内异常体验事件
   */
  RoomId?: string
}

/**
 * 查询旁路转码计费时长。
查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
 */
export interface SdkAppIdTrtcMcuTranscodeTimeUsage {
  /**
   * 本组数据对应的时间点，格式如：2020-09-07或2020-09-07 00:05:05。
   */
  TimeKey: string

  /**
   * 语音时长，单位：秒。
   */
  AudioTime: number

  /**
   * 视频时长-标清SD，单位：秒。
   */
  VideoTimeSd: number

  /**
   * 视频时长-高清HD，单位：秒。
   */
  VideoTimeHd: number

  /**
   * 视频时长-全高清FHD，单位：秒。
   */
  VideoTimeFhd: number
}

/**
 * ModifyPicture返回参数结构体
 */
export interface ModifyPictureResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartMCUMixTranscodeByStrRoomId请求参数结构体
 */
export interface StartMCUMixTranscodeByStrRoomIdRequest {
  /**
   * TRTC的SDKAppId。
   */
  SdkAppId: number

  /**
   * 字符串房间号。
   */
  StrRoomId: string

  /**
   * 混流输出控制参数。
   */
  OutputParams: OutputParams

  /**
   * 混流输出编码参数。
   */
  EncodeParams: EncodeParams

  /**
   * 混流输出布局参数。
   */
  LayoutParams: LayoutParams

  /**
   * 第三方CDN转推参数。
   */
  PublishCdnParams?: PublishCdnParams
}

/**
 * MCU混流布局参数
 */
export interface LayoutParams {
  /**
   * 混流布局模板ID，0为悬浮模板(默认);1为九宫格模板;2为屏幕分享模板;3为画中画模板;4为自定义模板。
   */
  Template?: number

  /**
   * 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的用户ID。
   */
  MainVideoUserId?: string

  /**
   * 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的流类型，0为摄像头，1为屏幕分享。左侧大画面为web用户时此值填0。
   */
  MainVideoStreamType?: number

  /**
   * 画中画模板中有效，代表小画面的布局参数。
   */
  SmallVideoLayoutParams?: SmallVideoLayoutParams

  /**
   * 屏幕分享模板有效。设置为1时代表大画面居右，小画面居左布局。默认为0。
   */
  MainVideoRightAlign?: number

  /**
   * 悬浮模板、九宫格、屏幕分享模板有效。设置此参数后，输出流混合此参数中包含用户的音视频，以及其他用户的纯音频。最多可设置16个用户。
   */
  MixVideoUids?: Array<string>

  /**
   * 自定义模板中有效，指定用户视频在混合画面中的位置。
   */
  PresetLayoutConfig?: Array<PresetLayoutConfig>

  /**
   * 自定义模板中有效，设置为1时代表启用占位图功能，0时代表不启用占位图功能，默认为0。启用占位图功能时，在预设位置的用户没有上行视频时可显示对应的占位图。
   */
  PlaceHolderMode?: number

  /**
   * 悬浮模板、九宫格、屏幕分享模板生效，用于控制纯音频上行是否占用画面布局位置。设置为0是代表后台默认处理方式，悬浮小画面占布局位置，九宫格画面占布局位置、屏幕分享小画面不占布局位置；设置为1时代表纯音频上行占布局位置；设置为2时代表纯音频上行不占布局位置。默认为0。
   */
  PureAudioHoldPlaceMode?: number

  /**
   * 水印参数。
   */
  WaterMarkParams?: WaterMarkParams
}

/**
 * 返回的质量数据，时间:值
 */
export interface TimeValue {
  /**
   * 时间，unix时间戳（1590065877s)
   */
  Time: number

  /**
   * 当前时间返回参数取值，如（bigvCapFps在1590065877取值为0，则Value：0 ）
   */
  Value: number
}

/**
 * CreatePicture请求参数结构体
 */
export interface CreatePictureRequest {
  /**
   * 应用id
   */
  SdkAppId: number

  /**
   * 图片内容经base64编码后的string格式
   */
  Content: string

  /**
   * 图片后缀名
   */
  Suffix: string

  /**
   * 图片长度
   */
  Height: number

  /**
   * 图片宽度
   */
  Width: number

  /**
   * 显示位置x轴方向
   */
  XPosition: number

  /**
   * 显示位置y轴方向
   */
  YPosition: number
}

/**
 * DescribeTrtcMcuTranscodeTime请求参数结构体
 */
export interface DescribeTrtcMcuTranscodeTimeRequest {
  /**
   * 查询开始时间，格式为YYYY-MM-DD。
   */
  StartTime: string

  /**
      * 查询结束时间，格式为YYYY-MM-DD。
单次查询统计区间最多不能超过31天。
      */
  EndTime: string

  /**
   * 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。
   */
  SdkAppId?: number
}

/**
 * StopMCUMixTranscode返回参数结构体
 */
export interface StopMCUMixTranscodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveUserByStrRoomId请求参数结构体
 */
export interface RemoveUserByStrRoomIdRequest {
  /**
   * TRTC的SDKAppId。
   */
  SdkAppId: number

  /**
   * 房间号。
   */
  RoomId: string

  /**
   * 要移出的用户列表，最多10个。
   */
  UserIds: Array<string>
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

/**
 * 事件信息，包括，事件时间戳，事件ID,
 */
export interface EventMessage {
  /**
      * 视频流类型：
0：与视频无关的事件；
2：视频为大画面；
3：视频为小画面；
7：视频为旁路画面；
      */
  Type: number

  /**
   * 事件上报的时间戳，unix时间（1589891188801ms)
   */
  Time: number

  /**
   * 事件Id：分为sdk的事件和webrtc的事件，详情见：附录/事件 ID 映射表：https://cloud.tencent.com/document/product/647/44916
   */
  EventId: number

  /**
   * 事件的第一个参数，如视频分辨率宽
   */
  ParamOne: number

  /**
   * 事件的第二个参数，如视频分辨率高
   */
  ParamTwo: number
}

/**
 * DescribeRecordStatistic请求参数结构体
 */
export interface DescribeRecordStatisticRequest {
  /**
   * 查询开始日期，格式为YYYY-MM-DD。
   */
  StartTime: string

  /**
      * 查询结束日期，格式为YYYY-MM-DD。
单次查询统计区间最多不能超过31天。
      */
  EndTime: string

  /**
   * 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。
   */
  SdkAppId?: number
}

/**
 * DescribeUserInformation请求参数结构体
 */
export interface DescribeUserInformationRequest {
  /**
   * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位为s）例：1400353843_218695_1590065777。通过 DescribeRoomInformation（查询房间列表）接口获取（链接：https://cloud.tencent.com/document/product/647/44050）
   */
  CommId: string

  /**
   * 查询开始时间，14天内。本地unix时间戳（1590065777）
   */
  StartTime: number

  /**
   * 查询结束时间，本地unix时间戳（1590065877）
   */
  EndTime: number

  /**
   * 用户SDKAppID（1400353843）
   */
  SdkAppId: string

  /**
   * 需查询的用户数组，不填默认返回6个用户,最多可填6个用户
   */
  UserIds?: Array<string>

  /**
   * 设置分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回6条数据）
   */
  PageNumber?: string

  /**
   * 设置分页大小（PageNumber和PageSize 其中一个不填均默认返回6条数据,PageSize最大不超过100）
   */
  PageSize?: string
}

/**
 * DescribeCallDetail请求参数结构体
 */
export interface DescribeCallDetailRequest {
  /**
   * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位为s）例：1400353843_218695_1590065777。通过 DescribeRoomInformation（查询房间列表）接口获取（链接：https://cloud.tencent.com/document/product/647/44050）
   */
  CommId: string

  /**
   * 查询开始时间，14天内。本地unix时间戳（1590065777s），查询实时数据时，查询起止时间不超过1个小时。
   */
  StartTime: number

  /**
   * 查询结束时间，本地unix时间戳（1590065877s）
   */
  EndTime: number

  /**
   * 用户SDKAppID（1400353843）
   */
  SdkAppId: string

  /**
   * 需查询的用户数组，不填默认返回6个用户,最多可填6个用户
   */
  UserIds?: Array<string>

  /**
      * 需查询的指标，不填则只返回用户列表，填all则返回所有指标。
appCpu：APP CPU使用率；
sysCpu：系统 CPU使用率；
aBit：上/下行音频码率；单位：bps
aBlock：音频卡顿时长；单位：ms
bigvBit：上/下行视频码率；单位：bps
bigvCapFps：视频采集帧率；
bigvEncFps：视频发送帧率；
bigvDecFps：渲染帧率；
bigvBlock：视频卡顿时长；单位：ms
aLoss：上/下行音频丢包率；
bigvLoss：上/下行视频丢包率；
bigvWidth：上/下行分辨率宽；
bigvHeight：上/下行分辨率高
      */
  DataType?: Array<string>

  /**
   * 设置分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回6条数据）
   */
  PageNumber?: string

  /**
   * 设置分页大小（PageNumber和PageSize 其中一个不填均默认返回6条数据,DataType，UserIds不为null，PageSize最大不超过6，DataType，UserIds为null，PageSize最大不超过100）
   */
  PageSize?: string
}

/**
 * 历史规模信息
 */
export interface ScaleInfomation {
  /**
   * 每天开始的时间
   */
  Time: number

  /**
      * 房间人数，用户重复进入同一个房间为1次
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserNumber: number

  /**
      * 房间人次，用户每次进入房间为一次
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserCount: number

  /**
      * sdkappid下一天内的房间数
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoomNumbers: number
}

/**
 * DescribeUserInformation返回参数结构体
 */
export interface DescribeUserInformationResponse {
  /**
   * 返回的用户总条数
   */
  Total: number

  /**
      * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserList: Array<UserInformation>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MCU混流输出流编码参数
 */
export interface EncodeParams {
  /**
   * 混流-输出流音频采样率。取值为[48000, 44100, 32000, 24000, 16000, 8000]，单位是Hz。
   */
  AudioSampleRate: number

  /**
   * 混流-输出流音频码率。取值范围[8,500]，单位为kbps。
   */
  AudioBitrate: number

  /**
   * 混流-输出流音频声道数，取值范围[1,2]，1表示混流输出音频为单声道，2表示混流输出音频为双声道。
   */
  AudioChannels: number

  /**
   * 混流-输出流宽，音视频输出时必填。取值范围[0,1920]，单位为像素值。
   */
  VideoWidth?: number

  /**
   * 混流-输出流高，音视频输出时必填。取值范围[0,1080]，单位为像素值。
   */
  VideoHeight?: number

  /**
   * 混流-输出流码率，音视频输出时必填。取值范围[1,10000]，单位为kbps。
   */
  VideoBitrate?: number

  /**
   * 混流-输出流帧率，音视频输出时必填。取值范围[1,60]，表示混流的输出帧率可选范围为1到60fps。
   */
  VideoFramerate?: number

  /**
   * 混流-输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。
   */
  VideoGop?: number

  /**
      * 混流-输出流背景色，取值是十进制整数。常用的颜色有：
红色：0xff0000，对应的十进制整数是16724736。
黄色：0xffff00。对应的十进制整数是16776960。
绿色：0x33cc00。对应的十进制整数是3394560。
蓝色：0x0066ff。对应的十进制整数是26367。
黑色：0x000000。对应的十进制整数是0。
白色：0xFFFFFF。对应的十进制整数是16777215。
灰色：0x999999。对应的十进制整数是10066329。
      */
  BackgroundColor?: number

  /**
   * 混流-输出流背景图片，取值为实时音视频控制台上传的图片ID。
   */
  BackgroundImageId?: number

  /**
   * 混流-输出流音频编码类型，取值范围[0,1, 2]，0为LC-AAC，1为HE-AAC，2为HE-AACv2。默认值为0。当音频编码设置为HE-AACv2时，只支持输出流音频声道数为双声道。HE-AAC和HE-AACv2支持的输出流音频采样率范围为[48000, 44100, 32000, 24000, 16000]
   */
  AudioCodec?: number

  /**
   * 混流-输出流背景图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。BackgroundImageUrl和BackgroundImageId参数都填时，以BackgroundImageUrl为准。图片大小限制不超过2MB。
   */
  BackgroundImageUrl?: string
}

/**
 * RemoveUserByStrRoomId返回参数结构体
 */
export interface RemoveUserByStrRoomIdResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartMCUMixTranscode请求参数结构体
 */
export interface StartMCUMixTranscodeRequest {
  /**
   * TRTC的SDKAppId。
   */
  SdkAppId: number

  /**
   * 房间号。
   */
  RoomId: number

  /**
   * 混流输出控制参数。
   */
  OutputParams: OutputParams

  /**
   * 混流输出编码参数。
   */
  EncodeParams: EncodeParams

  /**
   * 混流输出布局参数。
   */
  LayoutParams: LayoutParams

  /**
   * 第三方CDN转推参数。
   */
  PublishCdnParams?: PublishCdnParams
}

/**
 * StopMCUMixTranscode请求参数结构体
 */
export interface StopMCUMixTranscodeRequest {
  /**
   * TRTC的SDKAppId。
   */
  SdkAppId: number

  /**
   * 房间号。
   */
  RoomId: number
}

/**
 * 用户信息，包括用户进房时间，退房时间等
 */
export interface UserInformation {
  /**
   * 房间号
   */
  RoomStr: string

  /**
   * 用户Id
   */
  UserId: string

  /**
   * 用户进房时间
   */
  JoinTs: number

  /**
   * 用户退房时间，用户没有退房则返回当前时间
   */
  LeaveTs: number

  /**
   * 终端类型
   */
  DeviceType: string

  /**
   * Sdk版本号
   */
  SdkVersion: string

  /**
   * 客户端IP地址
   */
  ClientIp: string

  /**
   * 判断用户是否已经离开房间
   */
  Finished: boolean
}

/**
 * DescribeHistoryScale请求参数结构体
 */
export interface DescribeHistoryScaleRequest {
  /**
   * 用户sdkappid(1400188366)
   */
  SdkAppId: string

  /**
   * 查询开始时间，5天内。本地unix时间戳（1587571000s）
   */
  StartTime: number

  /**
   * 查询结束时间，本地unix时间戳（1588034999s）
   */
  EndTime: number
}

/**
 * DeletePicture请求参数结构体
 */
export interface DeletePictureRequest {
  /**
   * 图片id
   */
  PictureId: number

  /**
   * 应用id
   */
  SdkAppId: number
}

/**
 * DescribeRoomInformation返回参数结构体
 */
export interface DescribeRoomInformationResponse {
  /**
   * 返回当页数据总数
   */
  Total: number

  /**
   * 房间信息列表
   */
  RoomList: Array<RoomState>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录制的使用信息。
 */
export interface RecordUsage {
  /**
   * 本组数据对应的时间点，格式如:2020-09-07或2020-09-07 00:05:05。
   */
  TimeKey: string

  /**
   * 视频时长-标清SD，单位：秒。
   */
  Class1VideoTime: number

  /**
   * 视频时长-高清HD，单位：秒。
   */
  Class2VideoTime: number

  /**
   * 视频时长-超清HD，单位：秒。
   */
  Class3VideoTime: number

  /**
   * 语音时长，单位：秒。
   */
  AudioTime: number
}

/**
 * RemoveUser请求参数结构体
 */
export interface RemoveUserRequest {
  /**
   * TRTC的SDKAppId。
   */
  SdkAppId: number

  /**
   * 房间号。
   */
  RoomId: number

  /**
   * 要移出的用户列表，最多10个。
   */
  UserIds: Array<string>
}

/**
 * MCU混流的输出参数
 */
export interface OutputParams {
  /**
   * 直播流 ID，由用户自定义设置，该流 ID 不能与用户旁路的流 ID 相同。
   */
  StreamId: string

  /**
   * 取值范围[0,1]， 填0：直播流为音视频(默认); 填1：直播流为纯音频
   */
  PureAudioStream?: number

  /**
   * 自定义录制文件名称前缀。请先在实时音视频控制台开通录制功能，https://cloud.tencent.com/document/product/647/50768
   */
  RecordId?: string

  /**
   * 取值范围[0,1]，填0无实际含义; 填1：指定录制文件格式为mp3。此参数不建议使用，建议在实时音视频控制台配置纯音频录制模板。
   */
  RecordAudioOnly?: number
}

/**
 * ModifyPicture请求参数结构体
 */
export interface ModifyPictureRequest {
  /**
   * 图片id
   */
  PictureId: number

  /**
   * 应用id
   */
  SdkAppId: number

  /**
   * 图片长度
   */
  Height?: number

  /**
   * 图片宽度
   */
  Width?: number

  /**
   * 显示位置x轴方向
   */
  XPosition?: number

  /**
   * 显示位置y轴方向
   */
  YPosition?: number
}

/**
 * CreateTroubleInfo返回参数结构体
 */
export interface CreateTroubleInfoResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopMCUMixTranscodeByStrRoomId请求参数结构体
 */
export interface StopMCUMixTranscodeByStrRoomIdRequest {
  /**
   * TRTC的SDKAppId。
   */
  SdkAppId: number

  /**
   * 字符串房间号。
   */
  StrRoomId: string
}

/**
 * Es返回的质量数据
 */
export interface QualityData {
  /**
   * 数据内容
   */
  Content: Array<TimeValue>

  /**
   * 用户ID
   */
  UserId: string

  /**
      * 对端Id,为空时表示上行数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  PeerId: string

  /**
   * 数据类型
   */
  DataType: string
}

/**
 * 造成异常体验可能的异常事件类型
 */
export interface AbnormalEvent {
  /**
   * 异常事件ID，具体值查看附录：异常体验ID映射表：https://cloud.tencent.com/document/product/647/44916
   */
  AbnormalEventId: number

  /**
      * 远端用户ID,""：表示异常事件不是由远端用户产生
注意：此字段可能返回 null，表示取不到有效值。
      */
  PeerId: string
}

/**
 * StopMCUMixTranscodeByStrRoomId返回参数结构体
 */
export interface StopMCUMixTranscodeByStrRoomIdResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePicture返回参数结构体
 */
export interface DeletePictureResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTroubleInfo请求参数结构体
 */
export interface CreateTroubleInfoRequest {
  /**
   * 应用的ID
   */
  SdkAppId: string

  /**
   * 房间ID
   */
  RoomId: string

  /**
   * 老师用户ID
   */
  TeacherUserId: string

  /**
   * 学生用户ID
   */
  StudentUserId: string

  /**
   * 体验异常端（老师或学生）的用户 ID。
   */
  TroubleUserId: string

  /**
      * 异常类型。
1. 仅视频异常
2. 仅声音异常
3. 音视频都异常
5. 进房异常
4. 切课
6. 求助
7. 问题反馈
8. 投诉
      */
  TroubleType: number

  /**
   * 异常发生的UNIX 时间戳，单位为秒。
   */
  TroubleTime: number

  /**
   * 异常详情
   */
  TroubleMsg: string
}

/**
 * sdk或webrtc的事件列表。
 */
export interface EventList {
  /**
   * 数据内容
   */
  Content: Array<EventMessage>

  /**
   * 发送端的userId
   */
  PeerId: string
}

/**
 * DismissRoom请求参数结构体
 */
export interface DismissRoomRequest {
  /**
   * TRTC的SDKAppId。
   */
  SdkAppId: number

  /**
   * 房间号。
   */
  RoomId: number
}

/**
 * DescribeDetailEvent返回参数结构体
 */
export interface DescribeDetailEventResponse {
  /**
   * 返回的事件列表，若没有数据，会返回空数组。
   */
  Data: Array<EventList>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DismissRoomByStrRoomId请求参数结构体
 */
export interface DismissRoomByStrRoomIdRequest {
  /**
   * TRTC的SDKAppId。
   */
  SdkAppId: number

  /**
   * 房间号。
   */
  RoomId: string
}

/**
 * StartMCUMixTranscode返回参数结构体
 */
export interface StartMCUMixTranscodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 旁路转码时长的查询结果
 */
export interface OneSdkAppIdTranscodeTimeUsagesInfo {
  /**
   * 旁路转码时长查询结果数组
   */
  SdkAppIdTranscodeTimeUsages: Array<SdkAppIdTrtcMcuTranscodeTimeUsage>

  /**
   * 查询记录数量
   */
  TotalNum: number

  /**
   * 所查询的应用ID，可能值为:1-应用的应用ID，2-total，显示为total则表示查询的是所有应用的用量合计值。
   */
  SdkAppId: string
}

/**
 * DescribeTrtcMcuTranscodeTime返回参数结构体
 */
export interface DescribeTrtcMcuTranscodeTimeResponse {
  /**
   * 应用的用量信息数组。
   */
  Usages: Array<OneSdkAppIdTranscodeTimeUsagesInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePicture请求参数结构体
 */
export interface DescribePictureRequest {
  /**
   * 应用ID
   */
  SdkAppId: number

  /**
   * 图片ID，不填时返回该应用下所有图片
   */
  PictureId?: number

  /**
   * 每页数量，不填时默认为10
   */
  PageSize?: number

  /**
   * 页码，不填时默认为1
   */
  PageNo?: number
}

/**
 * SdkAppId级别录制时长数据。
 */
export interface SdkAppIdRecordUsage {
  /**
   * SdkAppId的值。
   */
  SdkAppId: string

  /**
   * 统计的时间点数据。
   */
  Usages: Array<RecordUsage>
}

/**
 * 画中画模板中有效，代表小画面的布局参数
 */
export interface SmallVideoLayoutParams {
  /**
   * 代表小画面对应的用户ID。
   */
  UserId: string

  /**
   * 代表小画面对应的流类型，0为摄像头，1为屏幕分享。小画面为web用户时此值填0。
   */
  StreamType: number

  /**
   * 小画面在输出时的宽度，单位为像素值，不填默认为0。
   */
  ImageWidth?: number

  /**
   * 小画面在输出时的高度，单位为像素值，不填默认为0。
   */
  ImageHeight?: number

  /**
   * 小画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。
   */
  LocationX?: number

  /**
   * 小画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。
   */
  LocationY?: number
}

/**
 * RemoveUser返回参数结构体
 */
export interface RemoveUserResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义模板中有效，指定用户视频在混合画面中的位置。
 */
export interface PresetLayoutConfig {
  /**
   * 指定显示在该画面上的用户ID。如果不指定用户ID，会按照用户加入房间的顺序自动匹配PresetLayoutConfig中的画面设置。
   */
  UserId?: string

  /**
   * 当该画面指定用户时，代表用户的流类型。0为摄像头，1为屏幕分享。小画面为web用户时此值填0。
   */
  StreamType?: number

  /**
   * 该画面在输出时的宽度，单位为像素值，不填默认为0。
   */
  ImageWidth?: number

  /**
   * 该画面在输出时的高度，单位为像素值，不填默认为0。
   */
  ImageHeight?: number

  /**
   * 该画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。
   */
  LocationX?: number

  /**
   * 该画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。
   */
  LocationY?: number

  /**
   * 该画面在输出时的层级，不填默认为0。
   */
  ZOrder?: number

  /**
   * 该画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底。不填默认为0。
   */
  RenderMode?: number

  /**
   * 该当前位置用户混入的流类型：0为混入音视频，1为只混入视频，2为只混入音频。默认为0，建议配合指定用户ID使用。
   */
  MixInputType?: number

  /**
   * 占位图ID。启用占位图功能时，在当前位置的用户没有上行视频时显示占位图。占位图在实时音视频控制台上传并生成，https://cloud.tencent.com/document/product/647/50769
   */
  PlaceImageId?: number
}

/**
 * DescribeCallDetail返回参数结构体
 */
export interface DescribeCallDetailResponse {
  /**
   * 返回的用户总条数
   */
  Total: number

  /**
      * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserList: Array<UserInformation>

  /**
      * 质量数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<QualityData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePicture返回参数结构体
 */
export interface DescribePictureResponse {
  /**
   * 返回的图片记录数
   */
  Total: number

  /**
   * 图片信息列表
   */
  PictureInfo: Array<PictureInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 第三方CDN转推参数
 */
export interface PublishCdnParams {
  /**
   * 腾讯云直播BizId。
   */
  BizId: number

  /**
   * 第三方CDN转推的目的地址，同时只支持转推一个第三方CDN地址。
   */
  PublishCdnUrls: Array<string>
}

/**
 * DescribeRoomInformation请求参数结构体
 */
export interface DescribeRoomInformationRequest {
  /**
   * 用户sdkappid
   */
  SdkAppId: string

  /**
   * 查询开始时间，14天内。本地unix时间戳（1588031999）
   */
  StartTime: number

  /**
   * 查询结束时间，本地unix时间戳（1588034999）
   */
  EndTime: number

  /**
   * 字符串房间号
   */
  RoomId?: string

  /**
   * 分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回10条数据）
   */
  PageNumber?: string

  /**
   * 分页大小（PageNumber和PageSize 其中一个不填均默认返回10条数据,最大不超过100）
   */
  PageSize?: string
}

/**
 * DescribeDetailEvent请求参数结构体
 */
export interface DescribeDetailEventRequest {
  /**
   * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位s）。通过 DescribeRoomInformation（查询房间列表）接口获取。（链接：https://cloud.tencent.com/document/product/647/44050）
   */
  CommId: string

  /**
   * 查询开始时间，14天内。本地unix时间戳（1588055615s）
   */
  StartTime: number

  /**
   * 查询结束时间，本地unix时间戳（1588058615s）
   */
  EndTime: number

  /**
   * 用户id
   */
  UserId: string

  /**
   * 房间号
   */
  RoomId: string
}

/**
 * 用户的异常体验及可能的原因
 */
export interface AbnormalExperience {
  /**
   * 用户ID
   */
  UserId: string

  /**
   * 异常体验ID
   */
  ExperienceId: number

  /**
   * 字符串房间号
   */
  RoomId: string

  /**
   * 异常事件数组
   */
  AbnormalEventList: Array<AbnormalEvent>

  /**
   * 异常事件的上报时间
   */
  EventTime: number
}

/**
 * 房间信息列表
 */
export interface RoomState {
  /**
   * 通话ID（唯一标识一次通话）
   */
  CommId: string

  /**
   * 房间号
   */
  RoomString: string

  /**
   * 房间创建时间
   */
  CreateTime: number

  /**
   * 房间销毁时间
   */
  DestroyTime: number

  /**
   * 房间是否已经结束
   */
  IsFinished: boolean

  /**
   * 房间创建者Id
   */
  UserId: string
}

/**
 * CreatePicture返回参数结构体
 */
export interface CreatePictureResponse {
  /**
   * 图片id
   */
  PictureId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MCU混流水印参数
 */
export interface WaterMarkParams {
  /**
   * 混流-水印图片ID。取值为实时音视频控制台上传的图片ID。
   */
  WaterMarkId: number

  /**
   * 混流-水印宽。单位为像素值。
   */
  WaterMarkWidth: number

  /**
   * 混流-水印高。单位为像素值。
   */
  WaterMarkHeight: number

  /**
   * 水印在输出时的X偏移。单位为像素值。
   */
  LocationX: number

  /**
   * 水印在输出时的Y偏移。单位为像素值。
   */
  LocationY: number

  /**
   * 混流-水印图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。WaterMarkUrl和WaterMarkId参数都填时，以WaterMarkUrl为准。图片大小限制不超过10MB。
   */
  WaterMarkUrl?: string
}

/**
 * DescribeRecordStatistic返回参数结构体
 */
export interface DescribeRecordStatisticResponse {
  /**
   * 应用的用量信息数组。
   */
  SdkAppIdUsages?: Array<SdkAppIdRecordUsage>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DismissRoomByStrRoomId返回参数结构体
 */
export interface DismissRoomByStrRoomIdResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHistoryScale返回参数结构体
 */
export interface DescribeHistoryScaleResponse {
  /**
   * 返回的数据条数
   */
  Total: number

  /**
      * 返回的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScaleList: Array<ScaleInfomation>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartMCUMixTranscodeByStrRoomId返回参数结构体
 */
export interface StartMCUMixTranscodeByStrRoomIdResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 图片列表信息
 */
export interface PictureInfo {
  /**
   * 图片长度
   */
  Height: number

  /**
   * 图片宽度
   */
  Width: number

  /**
   * 显示位置x轴方向
   */
  XPosition: number

  /**
   * 显示位置y轴方向
   */
  YPosition: number

  /**
   * 应用id
   */
  SdkAppId: number

  /**
   * 图片id
   */
  PictureId: number
}

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
 * CreatePicture请求参数结构体
 */
export interface CreatePictureRequest {
  /**
   * 应用id
   */
  SdkAppId: number

  /**
   * 图片内容经base64编码后的string格式,最大长度为2M
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
 * DescribeRelayUsage请求参数结构体
 */
export interface DescribeRelayUsageRequest {
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
   * TRTC的SdkAppId，和房间所对应的SdkAppId相同。如果没有这个参数，返回用户下全部实时音视频应用的汇总。
   */
  SdkAppId?: number
}

/**
 * DescribeTRTCMarketQualityMetricData返回参数结构体
 */
export interface DescribeTRTCMarketQualityMetricDataResponse {
  /**
      * TRTC监控数据出参
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: TRTCDataResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户自定义混流布局参数列表。
 */
export interface MixLayout {
  /**
   * 画布上该画面左上角的 y 轴坐标，取值范围 [0, 1920]，不能超过画布的高。
   */
  Top: number

  /**
   * 画布上该画面左上角的 x 轴坐标，取值范围 [0, 1920]，不能超过画布的宽。
   */
  Left: number

  /**
   * 画布上该画面宽度的相对值，取值范围 [0, 1920]，与Left相加不应超过画布的宽。
   */
  Width: number

  /**
   * 画布上该画面高度的相对值，取值范围 [0, 1920]，与Top相加不应超过画布的高。
   */
  Height: number

  /**
   * 字符串内容为待显示在该画面的主播对应的UserId，如果不指定，会按照主播加入房间的顺序匹配。
   */
  UserId?: string

  /**
   * 画布的透明度值，取值范围[0, 255]。0表示不透明，255表示全透明。默认值为0。
   */
  Alpha?: number

  /**
      * 0 ：拉伸模式，这个模式下整个视频内容会全部显示，并填满子画面，在源视频和目的视频宽高比不一致的时候，画面不会缺少内容，但是画面可能产生形变；

1 ：剪裁模式（默认），这个模式下会严格按照目的视频的宽高比对源视频剪裁之后再拉伸，并填满子画面画布，在源视频和目的视频宽高比不一致的时候，画面保持不变形，但是会被剪裁；

2 ：填黑模式，这个模式下会严格保持源视频的宽高比进行等比缩放，在源视频和目的视频宽高比不一致的时候，画面的上下侧边缘或者左右侧边缘会露出子画面画布的背景；

3 ：智能拉伸模式，这个模式类似剪裁模式，区别是在源视频和目的视频宽高比不一致的时候，限制了最大剪裁比例为画面的宽度或者高度的20%；
      */
  RenderMode?: number

  /**
      * 对应订阅流的主辅路标识：
0：主流（默认）；
1：辅流；
      */
  MediaId?: number

  /**
   * 该画布的图层顺序, 这个值越小表示图层越靠后。默认值为0。
   */
  ImageLayer?: number

  /**
   * 图片的url地址， 只支持jpg， png，大小限制不超过5M，宽高比不一致的处理方案同 RenderMode。
   */
  SubBackgroundImage?: string
}

/**
 * 混流转推的视频相关参数。
 */
export interface McuVideoParams {
  /**
   * 输出流视频编码参数。
   */
  VideoEncode?: VideoEncode

  /**
   * 混流布局参数。
   */
  LayoutParams?: McuLayoutParams

  /**
      * 整个画布背景颜色，常用的颜色有：
红色：0xcc0033。
黄色：0xcc9900。
绿色：0xcccc33。
蓝色：0x99CCFF。
黑色：0x000000。
白色：0xFFFFFF。
灰色：0x999999。
      */
  BackGroundColor?: string

  /**
   * 整个画布的背景图url，优先级高于BackGroundColor。
   */
  BackgroundImageUrl?: string

  /**
   * 混流布局的水印参数。
   */
  WaterMarkList?: Array<McuWaterMarkParams>
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
 * 音量布局SEI参数，可以自定义AppData和PayloadType类型。
该参数内容可以为空，表示携带默认的音量布局SEI。
 */
export interface McuLayoutVolume {
  /**
   * AppData的内容，会被写入自定义SEI中的app_data字段，长度需小于4096。
   */
  AppData?: string

  /**
   * SEI消息的payload_type，默认值100，取值范围100-254（244除外，244为我们内部自定义的时间戳SEI）
   */
  PayloadType?: number

  /**
   * SEI发送间隔，单位毫秒，默认值为1000。
   */
  Interval?: number

  /**
   * 取值范围[0,1]，填1：发送关键帧时会确保带SEI；填0：发送关键帧时不确保带SEI。默认值为0。
   */
  FollowIdr?: number
}

/**
 * DescribeUserEvent请求参数结构体
 */
export interface DescribeUserEventRequest {
  /**
   * 通话 ID（唯一标识一次通话）： SdkAppId_RoomId（房间号）_ CreateTime（房间创建时间，unix时间戳，单位为s）例：1400xxxxxx_218695_1590065777。通过 DescribeRoomInfo（查询历史房间列表）接口获取（[查询历史房间列表](https://cloud.tencent.com/document/product/647/44050)）。
   */
  CommId: string

  /**
      * 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）
注意：支持查询14天内的数据
      */
  StartTime: number

  /**
      * 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）
注意：查询时间大于房间结束时间，以房间结束时间为准。
      */
  EndTime: number

  /**
   * 用户UserId
   */
  UserId: string

  /**
   * 房间号（如：223）
   */
  RoomId: string

  /**
   * 用户SdkAppId（如：1400xxxxxx）
   */
  SdkAppId: number
}

/**
 * 自定义文字水印数据结构
 */
export interface WaterMarkChar {
  /**
   * 文字水印的起始坐标Y值，从左上角开始
   */
  Top: number

  /**
   * 文字水印的起始坐标X值，从左上角开始
   */
  Left: number

  /**
   * 文字水印的宽度，单位像素值
   */
  Width: number

  /**
   * 文字水印的高度，单位像素值
   */
  Height: number

  /**
   * 水印文字的内容
   */
  Chars: string

  /**
   * 水印文字的大小，单位像素，默认14
   */
  FontSize?: number

  /**
   * 水印文字的颜色，默认白色
   */
  FontColor?: string

  /**
   * 水印文字的背景色，为空代表背景透明，默认为空
   */
  BackGroundColor?: string
}

/**
 * DescribeTrtcRoomUsage返回参数结构体
 */
export interface DescribeTrtcRoomUsageResponse {
  /**
   * 房间维度用量数据，csv文件格式。
   */
  Data?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopPublishCdnStream返回参数结构体
 */
export interface StopPublishCdnStreamResponse {
  /**
   * 转推任务唯一的String Id
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeTRTCRealTimeScaleMetricData请求参数结构体
 */
export interface DescribeTRTCRealTimeScaleMetricDataRequest {
  /**
   * 用户SdkAppId（如：1400xxxxxx）
   */
  SdkAppId: string

  /**
   * 开始时间，unix时间戳，单位：秒（查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时）
   */
  StartTime: number

  /**
   * 结束时间，unix时间戳，单位：秒
   */
  EndTime: number

  /**
   * 房间ID
   */
  RoomId?: string
}

/**
 * DescribeUserEvent返回参数结构体
 */
export interface DescribeUserEventResponse {
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
 * 视频编码参数。
 */
export interface VideoEncode {
  /**
   * 输出流宽，音视频输出时必填。取值范围[0,1920]，单位为像素值。
   */
  Width: number

  /**
   * 输出流高，音视频输出时必填。取值范围[0,1080]，单位为像素值。
   */
  Height: number

  /**
   * 输出流帧率，音视频输出时必填。取值范围[1,60]，表示混流的输出帧率可选范围为1到60fps。
   */
  Fps: number

  /**
   * 输出流码率，音视频输出时必填。取值范围[1,10000]，单位为kbps。
   */
  BitRate: number

  /**
   * 输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。
   */
  Gop: number
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

/**
 * DescribeCallDetailInfo请求参数结构体
 */
export interface DescribeCallDetailInfoRequest {
  /**
   * 通话 ID（唯一标识一次通话）： SdkAppId_RoomId（房间号）_ CreateTime（房间创建时间，unix时间戳，单位为s）例：1400xxxxxx_218695_1590065777。通过 DescribeRoomInfo（查询历史房间列表）接口获取（[查询历史房间列表](https://cloud.tencent.com/document/product/647/44050)）。
   */
  CommId: string

  /**
      * 查询开始时间，本地unix时间戳，单位为秒（如：1590065777），
注意：支持查询14天内的数据。
      */
  StartTime: number

  /**
      * 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）
注意：DataType 不为null ，与StartTime间隔时间不超过1小时；DataType 为null，与StartTime间隔时间不超过4小时。
      */
  EndTime: number

  /**
   * 用户SdkAppId（如：1400xxxxxx）。
   */
  SdkAppId: number

  /**
   * 需查询的用户数组，默认不填返回6个用户。
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
      * 当前页数，默认为0，
注意：PageNumber和PageSize 其中一个不填均默认返回6条数据。
      */
  PageNumber?: number

  /**
      * 每页个数，默认为6，
范围：[1，100]
注意：DataType不为null，UserIds长度不能超过6，PageSize最大值不超过6；
DataType 为null，UserIds长度不超过100，PageSize最大不超过100。
      */
  PageSize?: number
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
 * DescribeUserInfo请求参数结构体
 */
export interface DescribeUserInfoRequest {
  /**
   * 通话 ID（唯一标识一次通话）： SdkAppId_RoomId（房间号）_ CreateTime（房间创建时间，unix时间戳，单位为s）例：1400xxxxxx_218695_1590065777。通过 DescribeRoomInfo（查询历史房间列表）接口获取（[查询历史房间列表](https://cloud.tencent.com/document/product/647/44050)）。
   */
  CommId: string

  /**
      * 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）
注意：支持查询14天内的数据
      */
  StartTime: number

  /**
      * 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）
注意：与StartTime间隔时间不超过4小时。
      */
  EndTime: number

  /**
   * 用户SdkAppId（如：1400xxxxxx）
   */
  SdkAppId: number

  /**
      * 需查询的用户数组，不填默认返回6个用户
范围：[1，100]。
      */
  UserIds?: Array<string>

  /**
      * 当前页数，默认为0，
注意：PageNumber和PageSize 其中一个不填均默认返回6条数据。
      */
  PageNumber?: number

  /**
      * 每页个数，默认为6，
范围：[1，100]。
      */
  PageSize?: number
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
   * 混流-水印宽。单位为像素值。水印宽+X偏移不能超过整个画布宽。
   */
  WaterMarkWidth: number

  /**
   * 混流-水印高。单位为像素值。水印高+Y偏移不能超过整个画布高。
   */
  WaterMarkHeight: number

  /**
   * 水印在输出时的X偏移。单位为像素值。水印宽+X偏移不能超过整个画布宽。
   */
  LocationX: number

  /**
   * 水印在输出时的Y偏移。单位为像素值。水印高+Y偏移不能超过整个画布高。
   */
  LocationY: number

  /**
   * 混流-水印图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。WaterMarkUrl和WaterMarkId参数都填时，以WaterMarkUrl为准。图片大小限制不超过2MB。
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
  SdkAppIdUsages: Array<SdkAppIdRecordUsage>

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
 * 第三方云存储的账号信息。
 */
export interface CloudStorage {
  /**
      * 第三方云储存的供应商:
0：腾讯云存储 COS，暂不支持其他家。
      */
  Vendor: number

  /**
   * 第三方云存储的地域信息。
   */
  Region: string

  /**
   * 第三方存储桶信息。
   */
  Bucket: string

  /**
   * 第三方存储的access_key账号信息。
   */
  AccessKey: string

  /**
   * 第三方存储的secret_key账号信息。
   */
  SecretKey: string

  /**
   * 第三方云存储bucket 的指定位置，由字符串数组组成。合法的字符串范围a~z,A~Z,0~9,'_'和'-'，举个例子，录制文件xxx.m3u8在 ["prefix1", "prefix2"]作用下，会变成prefix1/prefix2/TaskId/xxx.m3u8。
   */
  FileNamePrefix?: Array<string>
}

/**
 * DescribeTrtcUsage返回参数结构体
 */
export interface DescribeTrtcUsageResponse {
  /**
   * 用量类型，与UsageValue中各个位置的值对应。
   */
  UsageKey: Array<string>

  /**
   * 各个时间点用量明细。
   */
  UsageList: Array<TrtcUsage>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeTRTCMarketQualityMetricData请求参数结构体
 */
export interface DescribeTRTCMarketQualityMetricDataRequest {
  /**
   * 用户SdkAppId（如：1400xxxxxx）
   */
  SdkAppId: string

  /**
   * 查询开始时间，格式为YYYY-MM-DD。（查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天）
   */
  StartTime: string

  /**
   * 查询结束时间，格式为YYYY-MM-DD。
   */
  EndTime: string

  /**
      * 返回数据的粒度，支持设为以下值：
d：按天。此时返回查询时间范围内 UTC 时间为零点的数据。
h：按小时。此时返回查询时间范围内 UTC 时间为整小时的数据。
      */
  Period: string
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
 * DescribeRoomInfo请求参数结构体
 */
export interface DescribeRoomInfoRequest {
  /**
   * 用户SdkAppId（如：1400xxxxxx）
   */
  SdkAppId: number

  /**
      * 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）
注意：支持查询14天内的数据
      */
  StartTime: number

  /**
      * 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）
注意：与StartTime间隔时间不超过24小时。
      */
  EndTime: number

  /**
   * 房间号（如：223)
   */
  RoomId?: string

  /**
      * 当前页数，默认为0，
注意：PageNumber和PageSize 其中一个不填均默认返回10条数据。
      */
  PageNumber?: number

  /**
      * 每页个数，默认为10，
范围：[1，100]
      */
  PageSize?: number
}

/**
 * 第三方存储参数。
 */
export interface StorageParams {
  /**
   * 第三方云存储的账号信息（特别说明：若您选择存储至对象存储COS将会收取录制文件投递至COS的费用，详见云端录制收费说明，存储至VOD将不收取此项费用。）。
   */
  CloudStorage?: CloudStorage

  /**
   * 腾讯云云点播的账号信息。
   */
  CloudVod?: CloudVod
}

/**
 * 点播相关参数。
 */
export interface CloudVod {
  /**
   * 腾讯云点播相关参数。
   */
  TencentVod?: TencentVod
}

/**
 * SdkAppId级别实时音视频的用量数据
 */
export interface SdkAppIdNewTrtcTimeUsage {
  /**
   * SdkAppId的值。
   */
  SdkAppId: string

  /**
   * 统计的时间点数据。
   */
  TrtcTimeUsages: Array<TrtcTimeNewUsage>

  /**
   * 统计的麦下用量的时间点数据。
   */
  AudienceTrtcTimeUsages: Array<TrtcTimeNewUsage>
}

/**
 * MCU混流输出流编码参数
 */
export interface EncodeParams {
  /**
   * 混流-输出流音频采样率。取值为[48000, 44100, 32000, 24000, 16000, 8000]，单位是Hz。混流任务发起过程中，为了保持CDN链接的稳定，不要修改音频参数（codec、采样率、码率、声道数）。
   */
  AudioSampleRate: number

  /**
   * 混流-输出流音频码率。取值范围[8,500]，单位为kbps。混流任务发起过程中，为了保持CDN链接的稳定，不要修改音频参数（codec、采样率、码率、声道数）。
   */
  AudioBitrate: number

  /**
   * 混流-输出流音频声道数，取值范围[1,2]，1表示混流输出音频为单声道，2表示混流输出音频为双声道。混流任务发起过程中，为了保持CDN链接的稳定，不要修改音频参数（codec、采样率、码率、声道数）。
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
   * 混流-输出流音频编码类型，取值范围[0,1, 2]，0为LC-AAC，1为HE-AAC，2为HE-AACv2。默认值为0。当音频编码设置为HE-AACv2时，只支持输出流音频声道数为双声道。HE-AAC和HE-AACv2支持的输出流音频采样率范围为[48000, 44100, 32000, 24000, 16000]。混流任务发起过程中，为了保持CDN链接的稳定，不要修改音频参数（codec、采样率、码率、声道数）。
   */
  AudioCodec?: number

  /**
   * 混流-输出流背景图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。BackgroundImageUrl和BackgroundImageId参数都填时，以BackgroundImageUrl为准。图片大小限制不超过2MB。
   */
  BackgroundImageUrl?: string
}

/**
 * DescribeCallDetailInfo返回参数结构体
 */
export interface DescribeCallDetailInfoResponse {
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
 * 混流自定义裁剪参数
 */
export interface McuCustomCrop {
  /**
   * 自定义裁剪起始位置的X偏移，单位为像素值，大于等于0。
   */
  LocationX: number

  /**
   * 自定义裁剪起始位置的Y偏移，单位为像素值，大于等于0。
   */
  LocationY: number

  /**
   * 自定义裁剪画面的宽度，单位为像素值，大于0，且LocationX+Width不超过10000
   */
  Width: number

  /**
   * 自定义裁剪画面的高度，单位为像素值，大于0，且LocationY+Height不超过10000
   */
  Height: number
}

/**
 * 实时音视频用量的某一时间段的统计信息.
 */
export interface TrtcTimeNewUsage {
  /**
   * 时间点。
   */
  TimeKey: string

  /**
   * 通话人数。仅供参考。在线人数以仪表盘查询结果为准。
   */
  VoiceUserNum: number

  /**
   * 音视频通话收费时长。单位：秒。
   */
  VideoTime: number

  /**
   * 标清视频通话收费时长。单位：秒。
   */
  Class1VideoTime: number

  /**
   * 高清视频通话收费时长。单位：秒。
   */
  Class2VideoTime: number

  /**
   * 超高清视频通话收费时长。单位：秒。
   */
  Class3VideoTime: number

  /**
   * 音频通话收费时长。单位：秒。
   */
  AudioTime: number

  /**
   * 带宽。单位：Mbps。
   */
  Bandwidth: number

  /**
   * 2k视频通话收费时长。单位：秒。
   */
  Video2KTime: number

  /**
   * 4k视频通话收费时长。单位：秒。
   */
  Video4KTime: number
}

/**
 * DescribeMixTranscodingUsage请求参数结构体
 */
export interface DescribeMixTranscodingUsageRequest {
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
   * TRTC的SdkAppId，和房间所对应的SdkAppId相同。如果没有这个参数，返回用户下全部实时音视频应用的汇总。
   */
  SdkAppId?: number
}

/**
 * 录制的音视频转码参数。
 */
export interface MixTranscodeParams {
  /**
   * 录制视频转码参数，注意如果设置了这个参数，那么里面的字段都是必填的，没有默认值，如果不填这个参数，那么取值为默认值。
   */
  VideoParams?: VideoParams

  /**
   * 录制音频转码参数，注意如果设置了这个参数，那么里面的字段都是必填的，没有默认值，如果不填这个参数，那么取值为默认值。
   */
  AudioParams?: AudioParams
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
 * 指定订阅流白名单或者黑名单，音频的白名单和音频黑名单不能同时设置，视频亦然。同时实际并发订阅的媒体流路数最大支持25路流，混流场景下视频的多画面最大支持24画面。支持通过设置".*$"通配符，来前缀匹配黑白名单的UserId，注意房间里不能有和通配符规则相同的用户，否则将视为订阅具体用户，前缀规则会失效。
 */
export interface SubscribeStreamUserIds {
  /**
   * 订阅音频流白名单，指定订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表订阅UserId 1，2，3的音频流；["1.*$"], 代表订阅UserId前缀为1的音频流。默认不填订阅房间内所有的音频流，订阅列表用户数不超过32。
   */
  SubscribeAudioUserIds?: Array<string>

  /**
   * 订阅音频流黑名单，指定不订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表不订阅UserId 1，2，3的音频流；["1.*$"], 代表不订阅UserId前缀为1的音频流。默认不填订阅房间内所有音频流，订阅列表用户数不超过32。
   */
  UnSubscribeAudioUserIds?: Array<string>

  /**
   * 订阅视频流白名单，指定订阅哪几个UserId的视频流，例如["1", "2", "3"], 代表订阅UserId  1，2，3的视频流；["1.*$"], 代表订阅UserId前缀为1的视频流。默认不填订阅房间内所有视频流，订阅列表用户数不超过32。
   */
  SubscribeVideoUserIds?: Array<string>

  /**
   * 订阅视频流黑名单，指定不订阅哪几个UserId的视频流，例如["1", "2", "3"], 代表不订阅UserId  1，2，3的视频流；["1.*$"], 代表不订阅UserId前缀为1的视频流。默认不填订阅房间内所有视频流，订阅列表用户数不超过32。
   */
  UnSubscribeVideoUserIds?: Array<string>
}

/**
 * 水印类型为图片的参数列表
 */
export interface WaterMarkImage {
  /**
   * 下载的url地址， 只支持jpg， png，大小限制不超过5M。
   */
  WaterMarkUrl: string

  /**
   * 画布上该画面左上角的 y 轴坐标，取值范围 [0, 2560]，不能超过画布的高。
   */
  Top: number

  /**
   * 画布上该画面左上角的 x 轴坐标，取值范围 [0, 2560]，不能超过画布的宽。
   */
  Left: number

  /**
   * 画布上该画面宽度的相对值，取值范围 [0, 2560]，与Left相加不应超过画布的宽。
   */
  Width: number

  /**
   * 画布上该画面高度的相对值，取值范围 [0, 2560]，与Top相加不应超过画布的高。
   */
  Height: number
}

/**
 * 混流用户参数
 */
export interface McuUserInfoParams {
  /**
   * 用户参数。
   */
  UserInfo: MixUserInfo
}

/**
 * 用户媒体流参数。
 */
export interface UserMediaStream {
  /**
   * TRTC用户参数。
   */
  UserInfo?: MixUserInfo

  /**
   * 主辅路流类型，0为摄像头，1为屏幕分享，不填默认为0。
   */
  StreamType?: number
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
 * DescribeTrtcUsage请求参数结构体
 */
export interface DescribeTrtcUsageRequest {
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
   * TRTC的SdkAppId，和房间所对应的SdkAppId相同。如果没有这个参数，返回用户下全部实时音视频应用的汇总。
   */
  SdkAppId?: number
}

/**
 * DescribeRoomInfo返回参数结构体
 */
export interface DescribeRoomInfoResponse {
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
 * 混流布局参数。
 */
export interface McuLayoutParams {
  /**
   * 布局模式：动态布局（1：悬浮布局（默认），2：屏幕分享布局，3：九宫格布局），静态布局（4：自定义布局）。
   */
  MixLayoutMode?: number

  /**
   * 纯音频上行是否占布局位置，只在动态布局中有效。0表示纯音频不占布局位置，1表示纯音频占布局位置，不填默认为0。
   */
  PureAudioHoldPlaceMode?: number

  /**
   * 自定义模板中有效，指定用户视频在混合画面中的位置。
   */
  MixLayoutList?: Array<McuLayout>

  /**
   * 指定动态布局中悬浮布局和屏幕分享布局的大画面信息，只在悬浮布局和屏幕分享布局有效。
   */
  MaxVideoUser?: MaxVideoUser

  /**
   * 屏幕分享模板、悬浮模板、九宫格模版有效，画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底
   */
  RenderMode?: number
}

/**
 * DescribeTRTCRealTimeQualityMetricData请求参数结构体
 */
export interface DescribeTRTCRealTimeQualityMetricDataRequest {
  /**
   * 用户SdkAppId（如：1400xxxxxx）
   */
  SdkAppId: string

  /**
   * 开始时间，unix时间戳，单位：秒（查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时）
   */
  StartTime: number

  /**
   * 结束时间，unix时间戳，单位：秒
   */
  EndTime: number

  /**
   * 房间ID
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

  /**
   * 带宽，单位：Mbps。
   */
  Flux: number
}

/**
 * 混流布局参数。
 */
export interface McuLayout {
  /**
   * 用户媒体流参数。不填时腾讯云后台按照上行主播的进房顺序自动填充。
   */
  UserMediaStream?: UserMediaStream

  /**
   * 子画面在输出时的宽度，单位为像素值，不填默认为0。
   */
  ImageWidth?: number

  /**
   * 子画面在输出时的高度，单位为像素值，不填默认为0。
   */
  ImageHeight?: number

  /**
   * 子画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。
   */
  LocationX?: number

  /**
   * 子画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。
   */
  LocationY?: number

  /**
   * 子画面在输出时的层级，不填默认为0。
   */
  ZOrder?: number

  /**
   * 子画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底。不填默认为0。
   */
  RenderMode?: number

  /**
      * 【此参数配置无效，暂不支持】子画面的背景颜色，常用的颜色有：
红色：0xcc0033。
黄色：0xcc9900。
绿色：0xcccc33。
蓝色：0x99CCFF。
黑色：0x000000。
白色：0xFFFFFF。
灰色：0x999999。
      */
  BackGroundColor?: string

  /**
   * 子画面的背景图url，填写该参数，当用户关闭摄像头或未进入TRTC房间时，会在布局位置填充为指定图片。若指定图片与布局位置尺寸比例不一致，则会对图片进行拉伸处理，优先级高于BackGroundColor。
   */
  BackgroundImageUrl?: string

  /**
   * 客户自定义裁剪，针对原始输入流裁剪
   */
  CustomCrop?: McuCustomCrop
}

/**
 * DescribeUserInfo返回参数结构体
 */
export interface DescribeUserInfoResponse {
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
 * DescribeTRTCRealTimeScaleMetricData返回参数结构体
 */
export interface DescribeTRTCRealTimeScaleMetricDataResponse {
  /**
      * TRTC监控数据出参
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: TRTCDataResp

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
 * 图片水印参数。
 */
export interface McuWaterMarkImage {
  /**
   * 水印图片URL地址，支持png、jpg、jpeg格式。图片大小限制不超过5MB。
   */
  WaterMarkUrl: string

  /**
   * 水印在输出时的宽。单位为像素值。
   */
  WaterMarkWidth: number

  /**
   * 水印在输出时的高。单位为像素值。
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
   * 水印在输出时的层级，不填默认为0。
   */
  ZOrder?: number
}

/**
 * StartPublishCdnStream返回参数结构体
 */
export interface StartPublishCdnStreamResponse {
  /**
   * 用于唯一标识转推任务，由腾讯云服务端生成，后续更新和停止请求都需要携带TaskiD参数。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时音视频用量在某一时间段的统计信息。
 */
export interface TrtcUsage {
  /**
   * 时间点，格式为YYYY-MM-DD HH:mm:ss。多天查询时，HH:mm:ss为00:00:00。
   */
  TimeKey: string

  /**
   * 用量数组。每个数值含义与UsageKey对应。单位：分钟。
   */
  UsageValue: Array<number>
}

/**
 * DescribeTRTCMarketScaleMetricData请求参数结构体
 */
export interface DescribeTRTCMarketScaleMetricDataRequest {
  /**
   * 用户SdkAppId
   */
  SdkAppId: string

  /**
   * 查询开始时间，格式为YYYY-MM-DD。（查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天）
   */
  StartTime: string

  /**
   * 查询结束时间，格式为YYYY-MM-DD。
   */
  EndTime: string

  /**
      * 返回数据的粒度，支持设为以下值：
d：按天。此时返回查询时间范围内 UTC 时间为零点的数据。
h：按小时。此时返回查询时间范围内 UTC 时间为整小时的数据。
      */
  Period: string
}

/**
 * DescribeRelayUsage返回参数结构体
 */
export interface DescribeRelayUsageResponse {
  /**
   * 用量类型，与UsageValue中各个位置的值对应。
   */
  UsageKey: Array<string>

  /**
   * 各个时间点用量明细。
   */
  UsageList: Array<TrtcUsage>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordingUsage返回参数结构体
 */
export interface DescribeRecordingUsageResponse {
  /**
   * 用量类型，与UsageValue中各个位置的值对应。
   */
  UsageKey: Array<string>

  /**
   * 各个时间点用量明细。
   */
  UsageList: Array<TrtcUsage>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyPicture返回参数结构体
 */
export interface ModifyPictureResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordingUsage请求参数结构体
 */
export interface DescribeRecordingUsageRequest {
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
   * 查询单流录制或合流录制，值为"single"或"multi"。
   */
  MixType: string

  /**
   * TRTC的SdkAppId，和房间所对应的SdkAppId相同。如果没有这个参数，返回用户下全部实时音视频应用的汇总。
   */
  SdkAppId?: number
}

/**
 * 云端录制查询接口，录制文件的信息
 */
export interface StorageFile {
  /**
      * 录制文件对应的UserId，如果是混流的话的这里返回的是空串。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserId: string

  /**
   * 录制索引文件名。
   */
  FileName: string

  /**
      * 录制文件流信息。
video：视频录制文件
audio：音频录制文件
audio_video：音视频录制文件
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrackType: string

  /**
   * 录制文件开始Unix时间戳。
   */
  BeginTimeStamp: number
}

/**
 * 水印布局参数
 */
export interface WaterMark {
  /**
   * 水印类型，0为图片（默认），1为文字，2为时间戳。
   */
  WaterMarkType?: number

  /**
   * 水印为图片时的参数列表，水印为图片时校验必填。
   */
  WaterMarkImage?: WaterMarkImage

  /**
   * 水印为文字时的参数列表，水印为文字时校验必填。
   */
  WaterMarkChar?: WaterMarkChar

  /**
   * 水印为时间戳时的参数列表，水印为时间戳时校验必填。
   */
  WaterMarkTimestamp?: WaterMarkTimestamp
}

/**
 * DescribeScaleInfo返回参数结构体
 */
export interface DescribeScaleInfoResponse {
  /**
   * 返回的数据条数
   */
  Total?: number

  /**
      * 返回的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScaleList?: Array<ScaleInfomation>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录制的混流布局参数。
 */
export interface MixLayoutParams {
  /**
      * 布局模式:
1：悬浮布局；
2：屏幕分享布局；
3：九宫格布局（默认）；
4：自定义布局；

悬浮布局：默认第一个进入房间的主播（也可以指定一个主播）的视频画面会铺满整个屏幕。其他主播的视频画面从左下角开始依次按照进房顺序水平排列，显示为小画面，小画面悬浮于大画面之上。当画面数量小于等于17个时，每行4个（4 x 4排列）。当画面数量大于17个时，重新布局小画面为每行5个（5 x 5）排列。最多支持25个画面，如果用户只发送音频，仍然会占用画面位置。

屏幕分享布局：指定一个主播在屏幕左侧的大画面位置（如果不指定，那么大画面位置为背景色），其他主播自上而下依次垂直排列于右侧。当画面数量少于17个的时候，右侧每列最多8人，最多占据两列。当画面数量多于17个的时候，超过17个画面的主播从左下角开始依次水平排列。最多支持25个画面，如果主播只发送音频，仍然会占用画面位置。

九宫格布局：根据主播的数量自动调整每个画面的大小，每个主播的画面大小一致，最多支持25个画面。

自定义布局：根据需要在MixLayoutList内定制每个主播画面的布局。
      */
  MixLayoutMode: number

  /**
   * 如果MixLayoutMode 选择为4自定义布局模式的话，设置此参数为每个主播所对应的布局画面的详细信息，最大不超过25个。
   */
  MixLayoutList?: Array<MixLayout>

  /**
   * 录制背景颜色，RGB的颜色表的16进制表示，每个颜色通过8bit长度标识，默认为黑色。比如橙色对应的RGB为 R:255 G:165 B:0, 那么对应的字符串描述为#FFA500，格式规范：‘#‘开头，后面跟固定RGB的颜色值
   */
  BackGroundColor?: string

  /**
   * 在布局模式为1：悬浮布局和 2：屏幕分享布局时，设定为显示大视频画面的UserId。不填的话：悬浮布局默认是第一个进房间的主播，屏幕分享布局默认是背景色
   */
  MaxResolutionUserId?: string

  /**
      * 主辅路标识，
0：主流（默认）；
1：辅流（屏幕分享）；
这个位置的MediaId代表的是对应MaxResolutionUserId的主辅路，MixLayoutList内代表的是自定义用户的主辅路。
      */
  MediaId?: number

  /**
   * 图片的url地址， 只支持jpg， png，大小限制不超过5M，url不可包含中文。
   */
  BackgroundImageUrl?: string

  /**
   * 设置为1时代表启用占位图功能，0时代表不启用占位图功能，默认为0。启用占位图功能时，在预设位置的用户没有上行视频时可显示对应的占位图。
   */
  PlaceHolderMode?: number

  /**
   * 背景画面宽高比不一致的时候处理方案，与MixLayoufList定义的RenderMode一致。
   */
  BackgroundImageRenderMode?: number

  /**
   * 子画面占位图url地址， 只支持jpg， png，大小限制不超过5M，宽高比不一致的处理方案同 RenderMode。
   */
  DefaultSubBackgroundImage?: string

  /**
   * 水印布局参数， 最多支持25个。
   */
  WaterMarkList?: Array<WaterMark>

  /**
   * 模板布局下，背景画面宽高比不一致的时候处理方案。自定义布局不生效，与MixLayoufList定义的RenderMode一致。
   */
  RenderMode?: number

  /**
   * 屏幕分享模板有效。设置为1时代表大画面居右，小画面居左布局。默认为0。
   */
  MaxResolutionUserAlign?: number
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
 * DescribeMixTranscodingUsage返回参数结构体
 */
export interface DescribeMixTranscodingUsageResponse {
  /**
   * 用量类型，与UsageValue中各个位置的值对应。
   */
  UsageKey: Array<string>

  /**
   * 各个时间点用量明细。
   */
  UsageList: Array<TrtcUsage>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 回推房间参数。
 */
export interface McuFeedBackRoomParams {
  /**
   * 回推房间的RoomId。
   */
  RoomId: string

  /**
   * 房间类型，必须和回推房间所对应的RoomId类型相同，0为整形房间号，1为字符串房间号。
   */
  RoomIdType: number

  /**
   * 回推房间使用的UserId(https://cloud.tencent.com/document/product/647/46351#userid)，注意这个userId不能与其他TRTC或者转推服务等已经使用的UserId重复，建议可以把房间ID作为userId的标识的一部分。
   */
  UserId: string

  /**
   * 回推房间UserId对应的用户签名，相当于登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910#UserSig)的方案。
   */
  UserSig: string
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
 * 音频编码参数。
 */
export interface AudioEncode {
  /**
   * 输出流音频采样率。取值为[48000, 44100, 32000, 24000, 16000, 8000]，单位是Hz。
   */
  SampleRate: number

  /**
   * 输出流音频声道数，取值范围[1,2]，1表示混流输出音频为单声道，2表示混流输出音频为双声道。
   */
  Channel: number

  /**
   * 输出流音频码率。取值范围[8,500]，单位为kbps。
   */
  BitRate: number

  /**
   * 输出流音频编码类型，取值范围[0, 1, 2]，0为LC-AAC，1为HE-AAC，2为HE-AACv2。默认值为0。当音频编码设置为HE-AACv2时，只支持输出流音频声道数为双声道。HE-AAC和HE-AACv2支持的输出流音频采样率范围为[48000, 44100, 32000, 24000, 16000]。
   */
  Codec?: number
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
 * DescribeUnusualEvent请求参数结构体
 */
export interface DescribeUnusualEventRequest {
  /**
   * 用户SdkAppId（如：1400xxxxxx）
   */
  SdkAppId: number

  /**
      * 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）
注意：支持查询14天内的数据
      */
  StartTime: number

  /**
   * 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）注意：与StartTime间隔时间不超过1小时。
   */
  EndTime: number

  /**
   * 房间号，查询房间内任意20条以内异常体验事件
   */
  RoomId?: string
}

/**
 * DescribeCloudRecording请求参数结构体
 */
export interface DescribeCloudRecordingRequest {
  /**
   * TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。
   */
  SdkAppId: number

  /**
   * 录制任务的唯一Id，在启动录制成功后会返回。
   */
  TaskId: string
}

/**
 * 腾讯云点播相关参数。
 */
export interface TencentVod {
  /**
   * 媒体后续任务处理操作，即完成媒体上传后，可自动发起任务流操作。参数值为任务流模板名，云点播支持 创建任务流模板 并为模板命名。
   */
  Procedure?: string

  /**
   * 媒体文件过期时间，为当前时间的绝对过期时间；保存一天，就填"86400"，永久保存就填"0"，默认永久保存。
   */
  ExpireTime?: number

  /**
   * 指定上传园区，仅适用于对上传地域有特殊需求的用户。
   */
  StorageRegion?: string

  /**
      * 分类ID，用于对媒体进行分类管理，可通过 创建分类 接口，创建分类，获得分类 ID。
默认值：0，表示其他分类。
      */
  ClassId?: number

  /**
   * 点播 子应用 ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
   */
  SubAppId?: number

  /**
   * 任务流上下文，任务完成回调时透传。
   */
  SessionContext?: string

  /**
   * 上传上下文，上传完成回调时透传。
   */
  SourceContext?: string

  /**
   * 上传到vod平台的录制文件格式类型，0：mp4(默认), 1: hls, 2:aac(StreamType=1纯音频录制时有效)。
   */
  MediaType?: number

  /**
   * 仅支持API录制上传vod，该参数表示用户可以自定义录制文件名前缀，【限制长度为64字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符】。前缀与自动生成的录制文件名之间用__UserId_u_分开。
   */
  UserDefineRecordId?: string
}

/**
 * 自定义透传SEI
 */
export interface McuPassThrough {
  /**
   * 透传SEI的payload内容。
   */
  PayloadContent: string

  /**
   * SEI消息的payload_type，取值范围5、100-254（244除外，244为我们内部自定义的时间戳SEI）。
   */
  PayloadType: number

  /**
   * PayloadType为5，PayloadUuid必须填写。PayloadType不是5时，不需要填写，填写会被后台忽略。该值必须是32长度的十六进制。
   */
  PayloadUuid?: string

  /**
   * SEI发送间隔，单位毫秒，默认值为1000。
   */
  Interval?: number

  /**
   * 取值范围[0,1]，填1：发送关键帧时会确保带SEI；填0：发送关键帧时不确保带SEI。默认值为0。
   */
  FollowIdr?: number
}

/**
 * DescribeTRTCRealTimeQualityMetricData返回参数结构体
 */
export interface DescribeTRTCRealTimeQualityMetricDataResponse {
  /**
      * TRTC监控数据出参
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: TRTCDataResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 指定混视频的用户ID列表。设置此参数后，输出流混合此参数中包含用户的音视频，以及其他用户的纯音频。悬浮模板、九宫格、屏幕分享模板有效，最多可设置16个用户。
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

  /**
   * 屏幕分享模板、悬浮模板、九宫格模板、画中画模版有效，画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底，不填采用后台的默认渲染方式（屏幕分享大画面为缩放，其他为裁剪）。若此参数不生效，请请提交工单寻求帮助。
   */
  RenderMode?: number
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
 * CreateCloudRecording请求参数结构体
 */
export interface CreateCloudRecordingRequest {
  /**
   * TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351#sdkappid)，和录制的房间所对应的SdkAppId相同。
   */
  SdkAppId: number

  /**
   * TRTC的[RoomId](https://cloud.tencent.com/document/product/647/46351#roomid)，录制的TRTC房间所对应的RoomId。
   */
  RoomId: string

  /**
   * 录制机器人用于进入TRTC房间拉流的[UserId](https://cloud.tencent.com/document/product/647/46351#userid)，注意这个UserId不能与其他TRTC房间内的主播或者其他录制任务等已经使用的UserId重复，建议可以把房间ID作为userId的标识的一部分，即录制机器人进入房间的userid应保证独立且唯一。
   */
  UserId: string

  /**
   * 录制机器人用于进入TRTC房间拉流的用户签名，当前 UserId 对应的验证签名，相当于登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910#UserSig)的方案。
   */
  UserSig: string

  /**
   * 云端录制控制参数。
   */
  RecordParams: RecordParams

  /**
   * 云端录制文件上传到云存储的参数(目前支持云点播VOD和对象存储COS)。点播和对象存储的参数必填其中之一，不支持同时设置点播和对象存储。
   */
  StorageParams: StorageParams

  /**
      * TRTC房间号的类型，必须和录制的房间所对应的RoomId类型相同:
0: 字符串类型的RoomId
1: 32位整型的RoomId（默认）
      */
  RoomIdType?: number

  /**
   * 混流的转码参数，录制模式为混流的时候可以设置。
   */
  MixTranscodeParams?: MixTranscodeParams

  /**
   * 混流的布局参数，录制模式为混流的时候可以设置。
   */
  MixLayoutParams?: MixLayoutParams

  /**
   * 接口可以调用的时效性，从成功开启录制并获得任务ID后开始计算，超时后无法调用查询、更新和停止等接口，但是录制任务不会停止。 参数的单位是小时，默认72小时（3天），最大可设置720小时（30天），最小设置6小时。举例说明：如果不设置该参数，那么开始录制成功后，查询、更新和停止录制的调用时效为72个小时。
   */
  ResourceExpiredHour?: number

  /**
   * TRTC房间权限加密串，只有在TRTC控制台启用了高级权限控制的时候需要携带，在TRTC控制台如果开启高级权限控制后，TRTC 的后台服务系统会校验一个叫做 [PrivateMapKey]（https://cloud.tencent.com/document/product/647/32240） 的“权限票据”，权限票据中包含了一个加密后的 RoomId 和一个加密后的“权限位列表”。由于 PrivateMapKey 中包含 RoomId，所以只提供了 UserSig 没有提供 PrivateMapKey 时，并不能进入指定的房间。
   */
  PrivateMapKey?: string
}

/**
 * MCU混流的输出参数
 */
export interface OutputParams {
  /**
   * 直播流 ID，由用户自定义设置，该流 ID 不能与用户旁路的流 ID 相同，限制64字节。
   */
  StreamId: string

  /**
   * 取值范围[0,1]， 填0：直播流为音视频(默认); 填1：直播流为纯音频
   */
  PureAudioStream?: number

  /**
      * 自定义录制文件名称前缀。请先在实时音视频控制台开通录制功能，https://cloud.tencent.com/document/product/647/50768。
【注意】该方式仅对旧版云端录制功能的应用生效，新版云端录制功能的应用请用接口CreateCloudRecording发起录制。新、旧云端录制类型判断方式请见：https://cloud.tencent.com/document/product/647/50768#record
      */
  RecordId?: string

  /**
   * 取值范围[0,1]，填0无实际含义; 填1：指定录制文件格式为mp3。此参数不建议使用，建议在实时音视频控制台配置纯音频录制模板。
   */
  RecordAudioOnly?: number
}

/**
 * DeleteCloudRecording返回参数结构体
 */
export interface DeleteCloudRecordingResponse {
  /**
   * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。
   */
  TaskId: string

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
 * StopPublishCdnStream请求参数结构体
 */
export interface StopPublishCdnStreamRequest {
  /**
   * TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351#sdkappid)，和转推的房间所对应的SdkAppId相同。
   */
  SdkAppId: number

  /**
   * 唯一标识转推任务。
   */
  TaskId: string
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
 * ModifyCloudRecording请求参数结构体
 */
export interface ModifyCloudRecordingRequest {
  /**
   * TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。
   */
  SdkAppId: number

  /**
   * 录制任务的唯一Id，在启动录制成功后会返回。
   */
  TaskId: string

  /**
   * 需要更新的混流的布局参数。
   */
  MixLayoutParams?: MixLayoutParams

  /**
   * 指定订阅流白名单或者黑名单。
   */
  SubscribeStreamUserIds?: SubscribeStreamUserIds
}

/**
 * 录制视频转码参数。
 */
export interface VideoParams {
  /**
   * 视频的宽度值，单位为像素，默认值360。不能超过1920，与height的乘积不能超过1920*1080。
   */
  Width: number

  /**
   * 视频的高度值，单位为像素，默认值640。不能超过1920，与width的乘积不能超过1920*1080。
   */
  Height: number

  /**
   * 视频的帧率，范围[1, 60]，默认15。
   */
  Fps: number

  /**
   * 视频的码率,单位是bps，范围[64000, 8192000]，默认550000bps。
   */
  BitRate: number

  /**
   * 视频关键帧时间间隔，单位秒，默认值10秒。
   */
  Gop: number
}

/**
 * StartPublishCdnStream请求参数结构体
 */
export interface StartPublishCdnStreamRequest {
  /**
   * TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351#sdkappid)，和转推的房间所对应的SdkAppId相同。
   */
  SdkAppId: number

  /**
   * 主房间信息RoomId，转推的TRTC房间所对应的RoomId。
   */
  RoomId: string

  /**
   * 主房间信息RoomType，必须和转推的房间所对应的RoomId类型相同，0为整形房间号，1为字符串房间号。
   */
  RoomIdType: number

  /**
   * 转推服务加入TRTC房间的机器人参数。
   */
  AgentParams: AgentParams

  /**
   * 是否转码，0表示无需转码，1表示需要转码。是否收取转码费是由WithTranscoding参数决定的，WithTranscoding为0，表示旁路转推，不会收取转码费用，WithTranscoding为1，表示混流转推，会收取转码费用。
   */
  WithTranscoding: number

  /**
   * 转推流的音频编码参数。由于音频是必转码的（不会收取转码费用），所以启动任务的时候，必须填写。
   */
  AudioParams?: McuAudioParams

  /**
   * 转推流的视频编码参数，不填表示纯音频转推。
   */
  VideoParams?: McuVideoParams

  /**
   * 需要单流旁路转推的用户上行参数，单流旁路转推时，WithTranscoding需要设置为0。
   */
  SingleSubscribeParams?: SingleSubscribeParams

  /**
   * 转推的CDN参数。和回推房间参数必须要有一个。
   */
  PublishCdnParams?: Array<McuPublishCdnParam>

  /**
   * 混流SEI参数
   */
  SeiParams?: McuSeiParams

  /**
   * 回推房间信息，和转推CDN参数必须要有一个。注：回推房间需使用特殊的SDK版本，如您有需求，请联系腾讯云技术支持。
   */
  FeedBackRoomParams?: Array<McuFeedBackRoomParams>
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
 * CreateCloudRecording返回参数结构体
 */
export interface CreateCloudRecordingResponse {
  /**
   * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。任务 ID需要业务保存下来，作为下次针对这个录制任务操作的参数。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteCloudRecording请求参数结构体
 */
export interface DeleteCloudRecordingRequest {
  /**
   * TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。
   */
  SdkAppId: number

  /**
   * 录制任务的唯一Id，在启动录制成功后会返回。
   */
  TaskId: string
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
 * TRTC数据大盘/实时监控 API接口数据出参
 */
export interface TRTCDataResp {
  /**
      * StatementID值，监控仪表盘下固定为0。
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatementID: number

  /**
      * 查询结果数据，以Columns-Values形式返回。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Series: Array<SeriesInfo>

  /**
      * Total值，监控仪表盘功能下固定为1。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number
}

/**
 * DescribeExternalTrtcMeasure返回参数结构体
 */
export interface DescribeExternalTrtcMeasureResponse {
  /**
   * 每个SdkAppId的时长使用信息
   */
  SdkAppIdTrtrTimeUsages: Array<SdkAppIdNewTrtcTimeUsage>

  /**
   * 主播的用量统计方式。取值"InRoomTime":房间时长,"SubscribeTime":"订阅时长","Bandwidth":带宽
   */
  AnchorUsageMode: string

  /**
   * 观众的用量统计方式。取值"InRoomTime":在房间时长,"SubscribeTime":"订阅时长","Bandwidth":带宽,"MergeWithAnchor":"不区分麦上麦下"
   */
  AudienceUsageMode: string

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
 * DescribeTrtcRoomUsage请求参数结构体
 */
export interface DescribeTrtcRoomUsageRequest {
  /**
   * TRTC的SdkAppId，和房间所对应的SdkAppId相同。
   */
  SdkAppid: number

  /**
   * 查询开始时间，格式为YYYY-MM-DD HH:MM，精确到分钟级。
   */
  StartTime: string

  /**
   * 查询结束时间，格式为YYYY-MM-DD HH:MM，单次查询不超过24h。
   */
  EndTime: string
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
 * DescribeScaleInfo请求参数结构体
 */
export interface DescribeScaleInfoRequest {
  /**
   * 用户SdkAppId（如：1400xxxxxx）
   */
  SdkAppId: number

  /**
      * 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）
注意：支持查询14天内的数据。
      */
  StartTime: number

  /**
      * 查询结束时间，本地unix时间戳，单位为秒（如：1590065877），建议与StartTime间隔时间超过24小时。
注意：按天统计，结束时间小于前一天，否则查询数据为空（如：需查询20号数据，结束时间需晚于20号0点）。
      */
  EndTime: number
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
 * DescribeUnusualEvent返回参数结构体
 */
export interface DescribeUnusualEventResponse {
  /**
      * 返回的数据总条数
范围：[0，20]
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
 * ModifyCloudRecording返回参数结构体
 */
export interface ModifyCloudRecordingResponse {
  /**
   * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。
   */
  TaskId: string

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
 * DescribeCloudRecording返回参数结构体
 */
export interface DescribeCloudRecordingResponse {
  /**
   * 录制任务的唯一Id。
   */
  TaskId: string

  /**
      * 云端录制任务的状态信息。
Idle：表示当前录制任务空闲中
InProgress：表示当前录制任务正在进行中。
Exited：表示当前录制任务正在退出的过程中。
      */
  Status: string

  /**
      * 录制文件信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageFileList: Array<StorageFile>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TRTC用户参数。
 */
export interface MixUserInfo {
  /**
   * 用户ID。
   */
  UserId: string

  /**
   * 动态布局时房间信息必须和主房间信息保持一致，自定义布局时房间信息必须和MixLayoutList中对应用户的房间信息保持一致，不填时默认与主房间信息一致。
   */
  RoomId?: string

  /**
   * 房间号类型，0为整形房间号，1为字符串房间号。
   */
  RoomIdType?: number
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
 * UpdatePublishCdnStream请求参数结构体
 */
export interface UpdatePublishCdnStreamRequest {
  /**
   * TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351#sdkappid)，和转推的房间所对应的SdkAppId相同。
   */
  SdkAppId: number

  /**
   * 唯一标识转推任务。
   */
  TaskId: string

  /**
   * 客户保证同一个任务，每次更新请求中的SequenceNumber递增，防止请求乱序。
   */
  SequenceNumber: number

  /**
   * 是否转码，0表示无需转码，1表示需要转码。
   */
  WithTranscoding: number

  /**
   * 更新相关参数，只支持更新参与混音的主播列表参数。不填表示不更新此参数。
   */
  AudioParams?: McuAudioParams

  /**
   * 更新视频相关参数，转码时支持更新除编码类型之外的编码参数，视频布局参数，背景图片和背景颜色参数，水印参数。不填表示不更新此参数。
   */
  VideoParams?: McuVideoParams

  /**
   * 更新单流转推的用户上行参数，仅在非转码时有效。不填表示不更新此参数。
   */
  SingleSubscribeParams?: SingleSubscribeParams

  /**
   * 更新转推的CDN参数。不填表示不更新此参数。
   */
  PublishCdnParams?: Array<McuPublishCdnParam>

  /**
   * 混流SEI参数
   */
  SeiParams?: McuSeiParams

  /**
   * 回推房间信息
   */
  FeedBackRoomParams?: Array<McuFeedBackRoomParams>
}

/**
 * 指定动态布局中悬浮布局和屏幕分享布局的大画面信息，只在悬浮布局和屏幕分享布局有效。
 */
export interface MaxVideoUser {
  /**
   * 用户媒体流参数。
   */
  UserMediaStream: UserMediaStream
}

/**
 * 转推服务加入TRTC房间的机器人参数。
 */
export interface AgentParams {
  /**
   * 转推服务在TRTC房间使用的[UserId](https://cloud.tencent.com/document/product/647/46351#userid)，注意这个userId不能与其他TRTC或者转推服务等已经使用的UserId重复，建议可以把房间ID作为userId的标识的一部分。
   */
  UserId: string

  /**
   * 转推服务加入TRTC房间的用户签名，当前 UserId 对应的验证签名，相当于登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910#UserSig)的方案。
   */
  UserSig?: string

  /**
   * 所有参与混流转推的主播持续离开TRTC房间超过MaxIdleTime的时长，自动停止转推，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。
   */
  MaxIdleTime?: number
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
 * 混流SEI参数
 */
export interface McuSeiParams {
  /**
   * 音量布局SEI
   */
  LayoutVolume?: McuLayoutVolume

  /**
   * 透传SEI
   */
  PassThrough?: McuPassThrough
}

/**
 * DescribeExternalTrtcMeasure请求参数结构体
 */
export interface DescribeExternalTrtcMeasureRequest {
  /**
   * 查询开始日期。
   */
  StartTime: string

  /**
   * 查询结束日期。
   */
  EndTime: string

  /**
   * 对应的应用。如果没有这个参数，表示获取用户名下全部实时音视频应用的汇总。
   */
  SdkAppId?: number
}

/**
 * UpdatePublishCdnStream返回参数结构体
 */
export interface UpdatePublishCdnStreamResponse {
  /**
   * 转推任务唯一的String Id
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文字水印参数。
 */
export interface McuWaterMarkText {
  /**
   * 文字水印内容。
   */
  Text: string

  /**
   * 水印在输出时的宽。单位为像素值。
   */
  WaterMarkWidth: number

  /**
   * 水印在输出时的高。单位为像素值。
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
   * 字体大小
   */
  FontSize: number

  /**
   * 字体颜色，默认为白色。常用的颜色有： 红色：0xcc0033。 黄色：0xcc9900。 绿色：0xcccc33。 蓝色：0x99CCFF。 黑色：0x000000。 白色：0xFFFFFF。 灰色：0x999999。
   */
  FontColor?: string

  /**
   * 字体背景色，不配置默认为透明。常用的颜色有： 红色：0xcc0033。 黄色：0xcc9900。 绿色：0xcccc33。 蓝色：0x99CCFF。 黑色：0x000000。 白色：0xFFFFFF。 灰色：0x999999。
   */
  BackGroundColor?: string
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
 * 云端录制控制参数。
 */
export interface RecordParams {
  /**
      * 录制模式：
1：单流录制，分别录制房间的订阅UserId的音频和视频，将录制文件上传至云存储；
2：混流录制，将房间内订阅UserId的音视频混录成一个音视频文件，将录制文件上传至云存储；
      */
  RecordMode: number

  /**
   * 房间内持续没有用户（主播）上行推流的状态超过MaxIdleTime的时长，自动停止录制，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。
   */
  MaxIdleTime?: number

  /**
      * 录制的媒体流类型：
0：录制音频+视频流（默认）;
1：仅录制音频流；
2：仅录制视频流，
      */
  StreamType?: number

  /**
   * 指定订阅流白名单或者黑名单。
   */
  SubscribeStreamUserIds?: SubscribeStreamUserIds

  /**
   * 输出文件的格式，上传到云点播时此参数无效，存储到云点播时请关注TencentVod内的MediaType参数。0：(默认)输出文件为hls格式。1：输出文件格式为hls+mp4。2：输出文件格式为hls+aac 。
   */
  OutputFormat?: number

  /**
   * 单流录制模式下，用户的音视频是否合并，0：单流音视频不合并（默认）。1：单流音视频合并成一个ts。混流录制此参数无需设置，默认音视频合并。
   */
  AvMerge?: number

  /**
      * 如果是aac或者mp4文件格式，超过长度限制后，系统会自动拆分视频文件。单位：分钟。默认为1440min（24h），取值范围为1-1440。【单文件限制最大为2G，满足文件大小 >2G 或录制时长度 > 24h任意一个条件，文件都会自动切分】
Hls 格式录制此参数不生效。
      */
  MaxMediaFileDuration?: number

  /**
   * 指定录制主辅流，0：主流+辅流（默认）；1:主流；2:辅流。
   */
  MediaId?: number
}

/**
 * DescribeTRTCMarketScaleMetricData返回参数结构体
 */
export interface DescribeTRTCMarketScaleMetricDataResponse {
  /**
      * TRTC监控数据出参
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: TRTCDataResp

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 混流转推的音频相关参数。
 */
export interface McuAudioParams {
  /**
   * 音频编码参数。
   */
  AudioEncode?: AudioEncode

  /**
      * 音频用户白名单，start时，为空或不填表示混所有主播音频，填具体值表示混指定主播音频；update时，不填表示不更新，为空表示更新为混所有主播音频，填具体值表示更新为混指定主播音频。
使用黑白名单时，黑白名单必须同时填写。都不填写时表示不更新。同一个用户同时在黑白名单时，以黑名单为主。
      */
  SubscribeAudioList?: Array<McuUserInfoParams>

  /**
      * 音频用户黑名单，为空或不填表示无黑名单，填具体值表示不混指定主播音频。update时，不填表示不更新，为空表示更新为清空黑名单，填具体值表示更新为不混指定主播音频。
使用黑白名单时，黑白名单必须同时填写。都不填写时表示不更新。同一个用户同时在黑白名单时，以黑名单为主。
      */
  UnSubscribeAudioList?: Array<McuUserInfoParams>
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
   * 占位图ID。启用占位图功能时，在当前位置的用户没有上行视频时显示占位图。占位图大小不能超过2M，在实时音视频控制台上传并生成，https://cloud.tencent.com/document/product/647/50769
   */
  PlaceImageId?: number
}

/**
 * 转推参数。
 */
export interface McuPublishCdnParam {
  /**
   * CDN转推URL。
   */
  PublishCdnUrl: string

  /**
   * 是否是腾讯云CDN，0为转推非腾讯云CDN，1为转推腾讯CDN，不携带该参数默认为1。注意：1，为避免误产生转推费用，该参数建议明确填写，转推非腾讯云CDN时会产生转推费用，详情参见接口文档说明；2，国内站默认只支持转推腾讯云CDN，如您有转推第三方CDN需求，请联系腾讯云技术支持。
   */
  IsTencentCdn?: number
}

/**
 * 录制音频转码参数。
 */
export interface AudioParams {
  /**
      * 音频采样率枚举值:(注意1 代表48000HZ, 2 代表44100HZ, 3 代表16000HZ)
1：48000Hz（默认）;
2：44100Hz
3：16000Hz。
      */
  SampleRate: number

  /**
      * 声道数枚举值:
1：单声道;
2：双声道（默认）。
      */
  Channel: number

  /**
   * 音频码率: 取值范围[32000, 128000] ，单位bps，默认64000bps。
   */
  BitRate: number
}

/**
 * SeriesInfo类型
 */
export interface SeriesInfo {
  /**
      * 数据列
注意：此字段可能返回 null，表示取不到有效值。
      */
  Columns: Array<string>

  /**
      * 数据值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Values: Array<number>
}

/**
 * 时间戳水印数据结构
 */
export interface WaterMarkTimestamp {
  /**
   * 时间戳的位置，取值范围0-6，分别代表上左，上右，下左，下右，上居中，下居中，居中
   */
  Pos: number

  /**
   * 显示时间戳的时区，默认东八区
   */
  TimeZone?: number
}

/**
 * 单流旁路转推的用户上行信息。
 */
export interface SingleSubscribeParams {
  /**
   * 用户媒体流参数。
   */
  UserMediaStream: UserMediaStream
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
 * 水印参数。
 */
export interface McuWaterMarkParams {
  /**
   * 水印类型，0为图片（默认），1为文字。
   */
  WaterMarkType?: number

  /**
   * 图片水印参数。WaterMarkType为0指定。
   */
  WaterMarkImage?: McuWaterMarkImage

  /**
   * 文字水印参数。WaterMarkType为1指定。
   */
  WaterMarkText?: McuWaterMarkText
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
  PictureId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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

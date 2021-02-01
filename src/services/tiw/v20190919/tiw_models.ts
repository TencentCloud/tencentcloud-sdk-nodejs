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
 * 混流画布参数
 */
export interface Canvas {
  /**
   * 混流画布宽高配置
   */
  LayoutParams: LayoutParams

  /**
   * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
   */
  BackgroundColor?: string
}

/**
 * SetWhiteboardPushCallbackKey请求参数结构体
 */
export interface SetWhiteboardPushCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number

  /**
   * 设置白板推流回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥。回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * 自定义混流配置布局参数
 */
export interface LayoutParams {
  /**
   * 流画面宽，取值范围[2,3000]
   */
  Width: number

  /**
   * 流画面高，取值范围[2,3000]
   */
  Height: number

  /**
   * 当前画面左上角顶点相对于Canvas左上角顶点的x轴偏移量，默认为0，取值范围[0,3000]
   */
  X?: number

  /**
   * 当前画面左上角顶点相对于Canvas左上角顶点的y轴偏移量，默认为0， 取值范围[0,3000]
   */
  Y?: number

  /**
      * 画面z轴位置，默认为0
z轴确定了重叠画面的遮盖顺序，z轴值大的画面处于顶层
      */
  ZOrder?: number
}

/**
 * SetVideoGenerationTaskCallback请求参数结构体
 */
export interface SetVideoGenerationTaskCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 课后录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头
   */
  Callback: string
}

/**
 * 指定流录制的控制参数，比如是否禁用音频、视频是录制大画面还是录制小画面等
 */
export interface StreamControl {
  /**
      * 视频流ID
视频流ID的取值含义如下：
1. tic_record_user - 表示白板视频流
2. tic_substream - 表示辅路视频流
3. 特定用户ID - 表示指定用户的视频流

在实际录制过程中，视频流ID的匹配规则为前缀匹配，只要真实流ID的前缀与指定的流ID一致就认为匹配成功。
      */
  StreamId: string

  /**
      * 设置是否对此路流开启录制。

true - 表示不对这路流进行录制，录制结果将不包含这路流的视频。
false - 表示需要对这路流进行录制，录制结果会包含这路流的视频。

默认为 false。
      */
  DisableRecord?: boolean

  /**
      * 设置是否禁用这路流的音频录制。

true - 表示不对这路流的音频进行录制，录制结果里这路流的视频将会没有声音。
false - 录制视频会保留音频，如果设置为true，则录制视频会丢弃这路流的音频。

默认为 false。
      */
  DisableAudio?: boolean

  /**
      * 设置当前流录制视频是否只录制小画面。

true - 录制小画面。设置为true时，请确保上行端同时上行了小画面，否则录制视频可能是黑屏。
false - 录制大画面。

默认为 false。
      */
  PullSmallVideo?: boolean
}

/**
 * StopOnlineRecord返回参数结构体
 */
export interface StopOnlineRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetVideoGenerationTaskCallbackKey请求参数结构体
 */
export interface SetVideoGenerationTaskCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number

  /**
   * 设置视频生成回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥
   */
  CallbackKey: string
}

/**
 * StartWhiteboardPush请求参数结构体
 */
export interface StartWhiteboardPushRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 需要推流白板的房间号，取值范围: (1, 4294967295)
   */
  RoomId: number

  /**
   * 用于白板推流服务进房进行推流的用户ID，最大长度不能大于60个字节，该ID必须是一个单独的未在SDK中使用的ID，白板推流服务使用这个用户ID进入房间进行白板音视频推流，若该ID和SDK中使用的ID重复，会导致SDK和白板推流服务互踢，影响正常推流。
   */
  PushUserId: string

  /**
   * 与PushUserId对应的签名
   */
  PushUserSig: string

  /**
   * 白板参数，例如白板宽高、背景颜色等
   */
  Whiteboard?: Whiteboard

  /**
      * 自动停止推流超时时间，单位秒，取值范围[300, 259200], 默认值为1800秒。

当白板超过设定时间没有操作的时候，白板推流服务会自动停止白板推流。
      */
  AutoStopTimeout?: number

  /**
   * 对主白板推流任务进行操作时，是否同时同步操作备份任务
   */
  AutoManageBackup?: boolean

  /**
      * 备份白板推流相关参数。

指定了备份参数的情况下，白板推流服务会在房间内新增一路白板画面视频流，即同一个房间内会有两路白板画面推流。
      */
  Backup?: WhiteboardPushBackupParam

  /**
      * 在实时音视频云端录制模式选择为 `指定用户录制` 模式的时候是否自动录制白板推流。

默认在实时音视频的云端录制模式选择为 `指定用户录制` 模式的情况下，不会自动进行白板推流录制，如果希望进行白板推流录制，请将此参数设置为true。

如果实时音视频的云端录制模式选择为 `全局自动录制` 模式，可忽略此参数。
      */
  AutoRecord?: boolean

  /**
   * 内部参数，不需要关注此参数
   */
  ExtraData?: string
}

/**
 * 拼接视频中被忽略的时间段
 */
export interface OmittedDuration {
  /**
   * 录制暂停时间戳对应的视频播放时间(单位: 毫秒)
   */
  VideoTime: number

  /**
   * 录制暂停时间戳(单位: 毫秒)
   */
  PauseTime: number

  /**
   * 录制恢复时间戳(单位: 毫秒)
   */
  ResumeTime: number
}

/**
 * DescribeWhiteboardPush请求参数结构体
 */
export interface DescribeWhiteboardPushRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 白板推流任务Id
   */
  TaskId: string
}

/**
 * DescribeVideoGenerationTaskCallback返回参数结构体
 */
export interface DescribeVideoGenerationTaskCallbackResponse {
  /**
   * 录制视频生成回调地址
   */
  Callback?: string

  /**
   * 录制视频生成回调鉴权密钥
   */
  CallbackKey?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeOnlineRecord返回参数结构体
 */
export interface ResumeOnlineRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetVideoGenerationTaskCallback返回参数结构体
 */
export interface SetVideoGenerationTaskCallbackResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetWhiteboardPushCallbackKey返回参数结构体
 */
export interface SetWhiteboardPushCallbackKeyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 白板推流备份相关请求参数
 */
export interface WhiteboardPushBackupParam {
  /**
      * 用于白板推流服务进房的用户ID，
该ID必须是一个单独的未在SDK中使用的ID，白板推流服务将使用这个用户ID进入房间进行白板推流，若该ID和SDK中使用的ID重复，会导致SDK和录制服务互踢，影响正常推流。
      */
  PushUserId: string

  /**
   * 与PushUserId对应的签名
   */
  PushUserSig: string
}

/**
 * StartOnlineRecord请求参数结构体
 */
export interface StartOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 需要录制的房间号，取值范围: (1, 4294967295)
   */
  RoomId: number

  /**
      * 用于录制服务进房的用户ID，最大长度不能大于60个字节，格式为`tic_record_user_${RoomId}_${Random}`，其中 `${RoomId} `与录制房间号对应，`${Random}`为一个随机字符串。
该ID必须是一个单独的未在SDK中使用的ID，录制服务使用这个用户ID进入房间进行音视频与白板录制，若该ID和SDK中使用的ID重复，会导致SDK和录制服务互踢，影响正常录制。
      */
  RecordUserId: string

  /**
   * 与RecordUserId对应的签名
   */
  RecordUserSig: string

  /**
   * （已废弃，设置无效）白板的 IM 群组 Id，默认同房间号
   */
  GroupId?: string

  /**
   * 录制视频拼接参数
   */
  Concat?: Concat

  /**
   * 录制白板参数，例如白板宽高等
   */
  Whiteboard?: Whiteboard

  /**
      * 录制混流参数
特别说明：
1. 混流功能需要根据额外开通， 请联系腾讯云互动白板客服人员
2. 使用混流功能，必须提供 Extras 参数，且 Extras 参数中必须包含 "MIX_STREAM"
      */
  MixStream?: MixStream

  /**
      * 使用到的高级功能列表
可以选值列表：
MIX_STREAM - 混流功能
      */
  Extras?: Array<string>

  /**
   * 是否需要在结果回调中返回各路流的纯音频录制文件，文件格式为mp3
   */
  AudioFileNeeded?: boolean

  /**
   * 录制控制参数，用于更精细地指定需要录制哪些流，某一路流是否禁用音频，是否只录制小画面等
   */
  RecordControl?: RecordControl

  /**
      * 录制模式

REALTIME_MODE - 实时录制模式（默认）
VIDEO_GENERATION_MODE - 视频生成模式（内测中，需邮件申请开通）
      */
  RecordMode?: string

  /**
      * 聊天群组ID，此字段仅适用于`视频生成模式`

在`视频生成模式`下，默认会记录白板群组内的非白板信令消息，如果指定了`ChatGroupId`，则会记录指定群ID的聊天消息。
      */
  ChatGroupId?: string

  /**
      * 自动停止录制超时时间，单位秒，取值范围[300, 86400], 默认值为300秒。

当超过设定时间房间内没有音视频上行且没有白板操作的时候，录制服务会自动停止当前录制任务。
      */
  AutoStopTimeout?: number

  /**
   * 内部参数，可忽略
   */
  ExtraData?: string
}

/**
 * StartWhiteboardPush返回参数结构体
 */
export interface StartWhiteboardPushResponse {
  /**
   * 推流任务Id
   */
  TaskId: string

  /**
      * 备份任务结果参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Backup: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOnlineRecordCallback请求参数结构体
 */
export interface DescribeOnlineRecordCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * DescribeOnlineRecordCallback返回参数结构体
 */
export interface DescribeOnlineRecordCallbackResponse {
  /**
   * 实时录制事件回调地址，如果未设置回调地址，该字段为空字符串
   */
  Callback?: string

  /**
   * 实时录制回调鉴权密钥
   */
  CallbackKey?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopWhiteboardPush请求参数结构体
 */
export interface StopWhiteboardPushRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 需要停止的白板推流任务 Id
   */
  TaskId: string
}

/**
 * SetTranscodeCallback返回参数结构体
 */
export interface SetTranscodeCallbackResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopOnlineRecord请求参数结构体
 */
export interface StopOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 需要停止录制的任务 Id
   */
  TaskId: string
}

/**
 * SetVideoGenerationTaskCallbackKey返回参数结构体
 */
export interface SetVideoGenerationTaskCallbackKeyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTranscode返回参数结构体
 */
export interface CreateTranscodeResponse {
  /**
   * 文档转码任务的唯一标识Id，用于查询该任务的进度以及转码结果
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoGenerationTask返回参数结构体
 */
export interface DescribeVideoGenerationTaskResponse {
  /**
   * 任务对应的群组Id
   */
  GroupId?: string

  /**
   * 任务对应的房间号
   */
  RoomId?: number

  /**
   * 任务的Id
   */
  TaskId?: string

  /**
   * 已废弃
   */
  Progress?: number

  /**
      * 录制视频生成任务状态
- QUEUED: 正在排队
- PROCESSING: 正在生成视频
- FINISHED: 生成视频结束（成功完成或失败结束，可以通过错误码和错误信息进一步判断）
      */
  Status?: string

  /**
   * 回放视频总时长,单位：毫秒
   */
  TotalTime?: number

  /**
   * 已废弃，请使用`VideoInfoList`参数
   */
  VideoInfos?: VideoInfo

  /**
   * 录制视频生成视频列表
   */
  VideoInfoList?: Array<VideoInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWhiteboardPushCallback返回参数结构体
 */
export interface DescribeWhiteboardPushCallbackResponse {
  /**
   * 白板推流事件回调地址，如果未设置回调地址，该字段为空字符串
   */
  Callback?: string

  /**
   * 白板推流回调鉴权密钥
   */
  CallbackKey?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义混流布局参数
 */
export interface CustomLayout {
  /**
   * 混流画布参数
   */
  Canvas: Canvas

  /**
   * 流布局参数，每路流的布局不能超出画布区域
   */
  InputStreamList: Array<StreamLayout>
}

/**
 * 视频信息
 */
export interface VideoInfo {
  /**
   * 视频开始播放的时间（单位：毫秒）
   */
  VideoPlayTime: number

  /**
   * 视频大小（字节）
   */
  VideoSize: number

  /**
   * 视频格式
   */
  VideoFormat: string

  /**
   * 视频播放时长（单位：毫秒）
   */
  VideoDuration: number

  /**
   * 视频文件URL
   */
  VideoUrl: string

  /**
   * 视频文件Id
   */
  VideoId: string

  /**
      * 视频流类型 
- 0：摄像头视频 
- 1：屏幕分享视频
- 2：白板视频 
- 3：混流视频
- 4：纯音频（mp3)
      */
  VideoType: number

  /**
   * 摄像头/屏幕分享视频所属用户的 Id（白板视频为空、混流视频tic_mixstream_房间号_混流布局类型、辅路视频tic_substream_用户Id）
   */
  UserId: string

  /**
   * 视频分辨率的宽
   */
  Width: number

  /**
   * 视频分辨率的高
   */
  Height: number
}

/**
 * SetTranscodeCallbackKey返回参数结构体
 */
export interface SetTranscodeCallbackKeyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时录制视频拼接参数
 */
export interface Concat {
  /**
      * 是否开启拼接功能
在开启了视频拼接功能的情况下，实时录制服务会把同一个用户因为暂停导致的多段视频拼接成一个视频
      */
  Enabled: boolean

  /**
   * 视频拼接时使用的垫片图片下载地址，不填默认用全黑的图片进行视频垫片
   */
  Image?: string
}

/**
 * DescribeOnlineRecord请求参数结构体
 */
export interface DescribeOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 实时录制任务Id
   */
  TaskId: string
}

/**
 * DescribeWhiteboardPush返回参数结构体
 */
export interface DescribeWhiteboardPushResponse {
  /**
      * 推流结束原因，
- AUTO: 房间内长时间没有音视频上行及白板操作导致自动停止推流
- USER_CALL: 主动调用了停止推流接口
- EXCEPTION: 推流异常结束
      */
  FinishReason?: string

  /**
   * 需要查询结果的白板推流任务Id
   */
  TaskId?: string

  /**
      * 推流任务状态
- PREPARED: 表示推流正在准备中（进房/启动推流服务等操作）
- PUSHING: 表示推流已开始
- STOPPED: 表示推流已停止
      */
  Status?: string

  /**
   * 房间号
   */
  RoomId?: number

  /**
   * 白板的群组 Id
   */
  GroupId?: string

  /**
   * 推流用户Id
   */
  PushUserId?: string

  /**
   * 实际开始推流时间，Unix 时间戳，单位秒
   */
  PushStartTime?: number

  /**
   * 实际停止推流时间，Unix 时间戳，单位秒
   */
  PushStopTime?: number

  /**
   * 推流过程中出现异常的次数
   */
  ExceptionCnt?: number

  /**
   * 白板推流首帧对应的IM时间戳，可用于录制回放时IM聊天消息与白板推流视频进行同步对时。
   */
  IMSyncTime?: number

  /**
      * 备份推流任务结果信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Backup?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartOnlineRecord返回参数结构体
 */
export interface StartOnlineRecordResponse {
  /**
   * 录制任务Id
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetOnlineRecordCallbackKey返回参数结构体
 */
export interface SetOnlineRecordCallbackKeyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoGenerationTask请求参数结构体
 */
export interface DescribeVideoGenerationTaskRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 录制视频生成的任务Id
   */
  TaskId: string
}

/**
 * CreateVideoGenerationTask返回参数结构体
 */
export interface CreateVideoGenerationTaskResponse {
  /**
   * 视频生成的任务Id
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseOnlineRecord返回参数结构体
 */
export interface PauseOnlineRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTranscode请求参数结构体
 */
export interface CreateTranscodeRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 需要进行转码文件地址
   */
  Url: string

  /**
      * 是否为静态PPT，默认为False；
如果IsStaticPPT为False，后缀名为.ppt或.pptx的文档会动态转码成HTML5页面，其他格式的文档会静态转码成图片；如果IsStaticPPT为True，所有格式的文档会静态转码成图片；
      */
  IsStaticPPT?: boolean

  /**
      * 转码后文档的最小分辨率，不传、传空字符串或分辨率格式错误则使用文档原分辨率

注意分辨率宽高中间为英文字母"xyz"的"x"
      */
  MinResolution?: string

  /**
   * 动态PPT转码可以为文件生成该分辨率的缩略图，不传、传空字符串或分辨率格式错误则不生成缩略图，分辨率格式同MinResolution
   */
  ThumbnailResolution?: string

  /**
      * 转码文件压缩格式，不传、传空字符串或不是指定的格式则不生成压缩文件，目前支持如下压缩格式：

zip： 生成`.zip`压缩包
tar.gz： 生成`.tar.gz`压缩包
      */
  CompressFileType?: string

  /**
   * 内部参数
   */
  ExtraData?: string
}

/**
 * DescribeWhiteboardPushCallback请求参数结构体
 */
export interface DescribeWhiteboardPushCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * DescribeOnlineRecord返回参数结构体
 */
export interface DescribeOnlineRecordResponse {
  /**
      * 录制结束原因，
- AUTO: 房间内长时间没有音视频上行及白板操作导致自动停止录制
- USER_CALL: 主动调用了停止录制接口
- EXCEPTION: 录制异常结束
      */
  FinishReason?: string

  /**
   * 需要查询结果的录制任务Id
   */
  TaskId?: string

  /**
      * 录制任务状态
- PREPARED: 表示录制正在准备中（进房/启动录制服务等操作）
- RECORDING: 表示录制已开始
- PAUSED: 表示录制已暂停
- STOPPED: 表示录制已停止，正在处理并上传视频
- FINISHED: 表示视频处理并上传完成，成功生成录制结果
      */
  Status?: string

  /**
   * 房间号
   */
  RoomId?: number

  /**
   * 白板的群组 Id
   */
  GroupId?: string

  /**
   * 录制用户Id
   */
  RecordUserId?: string

  /**
   * 实际开始录制时间，Unix 时间戳，单位秒
   */
  RecordStartTime?: number

  /**
   * 实际停止录制时间，Unix 时间戳，单位秒
   */
  RecordStopTime?: number

  /**
   * 回放视频总时长（单位：毫秒）
   */
  TotalTime?: number

  /**
   * 录制过程中出现异常的次数
   */
  ExceptionCnt?: number

  /**
   * 拼接视频中被忽略的时间段，只有开启视频拼接功能的时候，这个参数才是有效的
   */
  OmittedDurations?: Array<OmittedDuration>

  /**
   * 录制视频列表
   */
  VideoInfos?: Array<VideoInfo>

  /**
      * 回放URL，需配合信令播放器使用。此字段仅适用于`视频生成模式`
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReplayUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetTranscodeCallbackKey请求参数结构体
 */
export interface SetTranscodeCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number

  /**
   * 设置文档转码回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * DescribeTranscode请求参数结构体
 */
export interface DescribeTranscodeRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 文档转码任务的唯一标识Id
   */
  TaskId: string
}

/**
 * DescribeTranscode返回参数结构体
 */
export interface DescribeTranscodeResponse {
  /**
   * 文档的总页数
   */
  Pages?: number

  /**
   * 转码的当前进度,取值范围为0~100
   */
  Progress?: number

  /**
   * 文档的分辨率
   */
  Resolution?: string

  /**
      * 转码完成后结果的URL
动态转码：PPT转动态H5的链接
静态转码：文档每一页的图片URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/`，那么文档第1页的图片URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推
      */
  ResultUrl?: string

  /**
      * 任务的当前状态
- QUEUED: 正在排队等待转换
- PROCESSING: 转换中
- FINISHED: 转换完成
      */
  Status?: string

  /**
   * 转码任务的唯一标识Id
   */
  TaskId?: string

  /**
   * 文档的文件名
   */
  Title?: string

  /**
      * 缩略图URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/ `，那么动态PPT第1页的缩略图URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推

如果发起文档转码请求参数中带了ThumbnailResolution参数，并且转码类型为动态转码，该参数不为空，其余情况该参数为空字符串
      */
  ThumbnailUrl?: string

  /**
   * 动态转码缩略图生成分辨率
   */
  ThumbnailResolution?: string

  /**
   * 转码压缩文件下载的URL，如果发起文档转码请求参数中`CompressFileType`为空或者不是支持的压缩格式，该参数为空字符串
   */
  CompressFileUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流布局参数
 */
export interface StreamLayout {
  /**
   * 流布局配置参数
   */
  LayoutParams: LayoutParams

  /**
      * 视频流ID
流ID的取值含义如下：
1. tic_record_user - 表示当前画面用于显示白板视频流
2. tic_substream - 表示当前画面用于显示辅路视频流
3. 特定用户ID - 表示当前画面用于显示指定用户的视频流
4. 不填 - 表示当前画面用于备选，当有新的视频流加入时，会从这些备选的空位中选择一个没有被占用的位置来显示新的视频流画面
      */
  InputStreamId?: string

  /**
   * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
   */
  BackgroundColor?: string

  /**
      * 视频画面填充模式。

0 - 自适应模式，对视频画面进行等比例缩放，在指定区域内显示完整的画面。此模式可能存在黑边。
1 - 全屏模式，对视频画面进行等比例缩放，让画面填充满整个指定区域。此模式不会存在黑边，但会将超出区域的那一部分画面裁剪掉。
      */
  FillMode?: number
}

/**
 * SetOnlineRecordCallback返回参数结构体
 */
export interface SetOnlineRecordCallbackResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetOnlineRecordCallbackKey请求参数结构体
 */
export interface SetOnlineRecordCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number

  /**
   * 设置实时录制回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥。回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * CreateVideoGenerationTask请求参数结构体
 */
export interface CreateVideoGenerationTaskRequest {
  /**
   * 录制任务的TaskId
   */
  OnlineRecordTaskId: string

  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
      * 视频生成的白板参数，例如白板宽高等。

此参数与开始录制接口提供的Whiteboard参数互斥，在本接口与开始录制接口都提供了Whiteboard参数时，优先使用本接口指定的Whiteboard参数进行视频生成，否则使用开始录制接口提供的Whiteboard参数进行视频生成。
      */
  Whiteboard?: Whiteboard

  /**
      * 视频拼接参数

此参数与开始录制接口提供的Concat参数互斥，在本接口与开始录制接口都提供了Concat参数时，优先使用本接口指定的Concat参数进行视频拼接，否则使用开始录制接口提供的Concat参数进行视频拼接。
      */
  Concat?: Concat

  /**
      * 视频生成混流参数

此参数与开始录制接口提供的MixStream参数互斥，在本接口与开始录制接口都提供了MixStream参数时，优先使用本接口指定的MixStream参数进行视频混流，否则使用开始录制接口提供的MixStream参数进行视频拼混流。
      */
  MixStream?: MixStream

  /**
      * 视频生成控制参数，用于更精细地指定需要生成哪些流，某一路流是否禁用音频，是否只录制小画面等

此参数与开始录制接口提供的RecordControl参数互斥，在本接口与开始录制接口都提供了RecordControl参数时，优先使用本接口指定的RecordControl参数进行视频生成控制，否则使用开始录制接口提供的RecordControl参数进行视频拼生成控制。
      */
  RecordControl?: RecordControl

  /**
   * 内部参数
   */
  ExtraData?: string
}

/**
 * DescribeTranscodeCallback请求参数结构体
 */
export interface DescribeTranscodeCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * ResumeOnlineRecord请求参数结构体
 */
export interface ResumeOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 恢复录制的实时录制任务 Id
   */
  TaskId: string
}

/**
 * DescribeTranscodeCallback返回参数结构体
 */
export interface DescribeTranscodeCallbackResponse {
  /**
   * 文档转码回调地址
   */
  Callback?: string

  /**
   * 文档转码回调鉴权密钥
   */
  CallbackKey?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetTranscodeCallback请求参数结构体
 */
export interface SetTranscodeCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
      * 文档转码进度回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持http或https协议，即回调地址以http://或https://开头。
回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
      */
  Callback: string
}

/**
 * SetWhiteboardPushCallback请求参数结构体
 */
export interface SetWhiteboardPushCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 白板推流任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  Callback: string
}

/**
 * SetWhiteboardPushCallback返回参数结构体
 */
export interface SetWhiteboardPushCallbackResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录制控制参数， 用于指定全局录制控制及具体流录制控制参数，比如设置需要对哪些流进行录制，是否只录制小画面等
 */
export interface RecordControl {
  /**
   * 设置是否开启录制控制参数，只有设置为true的时候，录制控制参数才生效。
   */
  Enabled: boolean

  /**
      * 设置是否禁用录制的全局控制参数。一般与`StreamControls`参数配合使用。

true - 所有流都不录制。
false - 所有流都录制。默认为false。

这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。
      */
  DisableRecord?: boolean

  /**
      * 设置是否禁用所有流的音频录制的全局控制参数。一般与`StreamControls`参数配合使用。

true - 所有流的录制都不对音频进行录制。
false - 所有流的录制都需要对音频进行录制。默认为false。

这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。
      */
  DisableAudio?: boolean

  /**
      * 设置是否所有流都只录制小画面的全局控制参数。一般与`StreamControls`参数配合使用。

true - 所有流都只录制小画面。设置为true时，请确保上行端在推流的时候同时上行了小画面，否则录制视频可能是黑屏。
false - 所有流都录制大画面，默认为false。

这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。
      */
  PullSmallVideo?: boolean

  /**
   * 针对具体流指定控制参数，如果列表为空，则所有流采用全局配置的控制参数进行录制。列表不为空，则列表中指定的流将优先按此列表指定的控制参数进行录制。
   */
  StreamControls?: Array<StreamControl>
}

/**
 * SetOnlineRecordCallback请求参数结构体
 */
export interface SetOnlineRecordCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 实时录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
   */
  Callback: string
}

/**
 * 实时录制白板参数，例如白板宽高等
 */
export interface Whiteboard {
  /**
   * 实时录制结果里白板视频宽，默认为1280
   */
  Width?: number

  /**
   * 实时录制结果里白板视频高，默认为960
   */
  Height?: number

  /**
   * 白板初始化参数，透传到白板 SDK
   */
  InitParam?: string
}

/**
 * 混流配置
 */
export interface MixStream {
  /**
   * 是否开启混流
   */
  Enabled: boolean

  /**
   * 是否禁用音频混流
   */
  DisableAudio?: boolean

  /**
      * 内置混流布局模板ID, 取值 [1, 2], 区别见内置混流布局模板样式示例说明
在没有填Custom字段时候，ModelId是必填的
      */
  ModelId?: number

  /**
      * 老师用户ID
此字段只有在ModelId填了的情况下生效
填写TeacherId的效果是把指定为TeacherId的用户视频流显示在内置模板的第一个小画面中
      */
  TeacherId?: string

  /**
      * 自定义混流布局参数
当此字段存在时，ModelId 及 TeacherId 字段将被忽略
      */
  Custom?: CustomLayout
}

/**
 * DescribeVideoGenerationTaskCallback请求参数结构体
 */
export interface DescribeVideoGenerationTaskCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * PauseOnlineRecord请求参数结构体
 */
export interface PauseOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 实时录制任务 Id
   */
  TaskId: string
}

/**
 * StopWhiteboardPush返回参数结构体
 */
export interface StopWhiteboardPushResponse {
  /**
      * 备份任务相关参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Backup?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

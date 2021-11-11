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
 * 视频超分
 */
export interface VideoSuperResolution {
  /**
      * 超分视频类型：可选值：lq,hq
lq: 针对低清晰度有较多噪声视频的超分;
hq: 针对高清晰度视频超分;
默认取值：lq。
      */
  Type?: string

  /**
      * 超分倍数，可选值：2。
注意：当前只支持两倍超分。
      */
  Size?: number
}

/**
 * 编辑处理/拼接任务/处理结果
 */
export interface MediaJoiningTaskResult {
  /**
      * 拼接结果文件。
注意：此字段可能返回 null，表示取不到有效值。
      */
  File: TaskResultFile
}

/**
 * 音频降噪
 */
export interface Denoise {
  /**
      * 音频降噪强度，可选项：
1. weak
2.normal，
3.strong
默认为weak
      */
  Type?: string
}

/**
 * 智能拆条结果项
 */
export interface StripTaskResultItem {
  /**
   * 视频拆条片段地址。
   */
  SegmentUrl: string

  /**
   * 拆条封面图片地址。
   */
  CovImgUrl: string

  /**
   * 置信度，取值范围是 0 到 100。
   */
  Confidence: number

  /**
   * 拆条片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number

  /**
   * 拆条片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset: number
}

/**
 * 任务视频cos授权信息
 */
export interface CosAuthMode {
  /**
      * 授权类型，可选值： 
0：bucket授权，需要将对应bucket授权给本服务帐号（3020447271和100012301793），否则会读写cos失败； 
1：key托管，把cos的账号id和key托管于本服务，本服务会提供一个托管id； 
3：临时key授权。
注意：目前智能编辑还不支持临时key授权；画质重生目前只支持bucket授权
      */
  Type: number

  /**
   * cos账号托管id，Type等于1时必选。
   */
  HostedId?: string

  /**
   * cos身份识别id，Type等于3时必选。
   */
  SecretId?: string

  /**
   * cos身份秘钥，Type等于3时必选。
   */
  SecretKey?: string

  /**
   * 临时授权 token，Type等于3时必选。
   */
  Token?: string
}

/**
 * 片头片尾识别结果项
 */
export interface OpeningEndingTaskResultItem {
  /**
   * 视频片头的结束时间点，单位：秒。
   */
  OpeningTimeOffset: number

  /**
   * 片头识别置信度，取值范围是 0 到 100。
   */
  OpeningConfidence: number

  /**
   * 视频片尾的开始时间点，单位：秒。
   */
  EndingTimeOffset: number

  /**
   * 片尾识别置信度，取值范围是 0 到 100。
   */
  EndingConfidence: number
}

/**
 * 编辑处理/剪切任务/处理结果
 */
export interface MediaCuttingTaskResult {
  /**
      * 如果ResultListType不为NoListFile时，结果（TaskResultFile）列表文件的存储位置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListFile: TaskResultFile

  /**
      * 结果个数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultCount: number

  /**
      * 第一个结果文件。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstFile: TaskResultFile

  /**
      * 最后一个结果文件。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastFile: TaskResultFile
}

/**
 * 智能封面结果项
 */
export interface CoverTaskResultItem {
  /**
   * 智能封面地址。
   */
  CoverUrl: string

  /**
   * 置信度，取值范围是 0 到 100。
   */
  Confidence: number
}

/**
 * 编辑处理/剪切任务信息
 */
export interface MediaCuttingInfo {
  /**
   * 截取时间信息。
   */
  TimeInfo: MediaCuttingTimeInfo

  /**
   * 输出结果信息。
   */
  TargetInfo: MediaTargetInfo

  /**
   * 截取结果形式信息。
   */
  OutForm: MediaCuttingOutForm

  /**
      * 列表文件形式，存储到用户存储服务中，可选值：
UseSaveInfo：默认，结果列表和结果存储同一位置；
NoListFile：不存储结果列表。
      */
  ResultListSaveType?: string
}

/**
 * 周期时间点信息。
 */
export interface IntervalTime {
  /**
   * 间隔周期，单位ms
   */
  Interval: number

  /**
   * 开始时间点，单位ms
   */
  StartTime?: number
}

/**
 * 低光照增强参数
 */
export interface LowLightEnhance {
  /**
   * 低光照增强类型，可选项：normal。
   */
  Type: string
}

/**
 * 流封装信息
 */
export interface MuxInfo {
  /**
   * 删除流，可选项：video,audio。
   */
  DeleteStream?: string

  /**
   * Flv 参数，目前支持add_keyframe_index
   */
  FlvFlags?: string
}

/**
 * 目标视频信息。
 */
export interface TargetVideoInfo {
  /**
   * 视频宽度，单位像素
   */
  Width?: number

  /**
   * 视频高度，单位像素
   */
  Height?: number

  /**
   * 视频帧率，范围在1到120之间
   */
  FrameRate?: number
}

/**
 * 视频转码信息
 */
export interface VideoInfo {
  /**
      * 视频帧率，取值范围：[0, 60]，单位：Hz。
注意：当取值为 0，表示帧率和原始视频保持一致。
      */
  Fps?: number

  /**
      * 宽度，取值范围：0 和 [128, 4096]
注意：
当 Width、Height 均为 0，则分辨率同源；
当 Width 为 0，Height 非 0，则 Width 按比例缩放；
当 Width 非 0，Height 为 0，则 Height 按比例缩放；
当 Width、Height 均非 0，则分辨率按用户指定。
      */
  Width?: number

  /**
      * 高度，取值范围：0 和 [128, 4096]
注意：
当 Width、Height 均为 0，则分辨率同源；
当 Width 为 0，Height 非 0，则 Width 按比例缩放；
当 Width 非 0，Height 为 0，则 Height 按比例缩放；
当 Width、Height 均非 0，则分辨率按用户指定。
      */
  Height?: number

  /**
      * 长边分辨率，取值范围：0 和 [128, 4096]
注意：
当 LongSide、ShortSide 均为 0，则分辨率按照Width，Height；
当 LongSide 为 0，ShortSide 非 0，则 LongSide 按比例缩放；
当 LongSide非 0，ShortSide为 0，则 ShortSide 按比例缩放；
当 LongSide、ShortSide 均非 0，则分辨率按用户指定。
长短边优先级高于Weight,Height,设置长短边则忽略宽高。
      */
  LongSide?: number

  /**
      * 短边分辨率，取值范围：0 和 [128, 4096]
注意：
当 LongSide、ShortSide 均为 0，则分辨率按照Width，Height；
当 LongSide 为 0，ShortSide 非 0，则 LongSide 按比例缩放；
当 LongSide非 0，ShortSide为 0，则 ShortSide 按比例缩放；
当 LongSide、ShortSide 均非 0，则分辨率按用户指定。
长短边优先级高于Weight,Height,设置长短边则忽略宽高。
      */
  ShortSide?: number

  /**
   * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。当取值为 0，表示视频码率和原始视频保持一致。
   */
  Bitrate?: number

  /**
   * 固定I帧之间，视频帧数量，取值范围： [25, 2500]，如果不填，使用编码默认最优序列。
   */
  Gop?: number

  /**
      * 编码器支持选项，可选值：
h264,
h265,
av1。
不填默认h264。
      */
  VideoCodec?: string

  /**
   * 图片水印。
   */
  PicMarkInfo?: Array<PicMarkInfoItem>

  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。
   */
  DarInfo?: DarInfo

  /**
      * 支持hdr,可选项：
hdr10,
hlg。
此时，VideoCodec会强制设置为h265, 编码位深为10
      */
  Hdr?: string

  /**
   * 画质增强参数信息。
   */
  VideoEnhance?: VideoEnhance

  /**
   * 数字水印参数信息。
   */
  HiddenMarkInfo?: HiddenMarkInfo

  /**
   * 文本水印参数信息。
   */
  TextMarkInfo?: Array<TextMarkInfoItem>
}

/**
 * DescribeQualityControlTaskResult请求参数结构体
 */
export interface DescribeQualityControlTaskResultRequest {
  /**
   * 质检任务 ID
   */
  TaskId: string
}

/**
 * DescribeMediaQualityRestorationTaskRusult返回参数结构体
 */
export interface DescribeMediaQualityRestorationTaskRusultResponse {
  /**
   * 画质重生任务结果信息
   */
  TaskResult?: MediaQualityRestorationTaskResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频Dar信息
 */
export interface DarInfo {
  /**
      * 填充模式，可选值：
1：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。
2：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“。
默认为2。
      */
  FillMode?: number
}

/**
 * CreateQualityControlTask返回参数结构体
 */
export interface CreateQualityControlTaskResponse {
  /**
      * 质检任务 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 音频响度信息
 */
export interface LoudnessInfo {
  /**
   * 音频整体响度
   */
  Loudness?: number

  /**
   * 音频响度范围
   */
  LoudnessRange?: number
}

/**
 * 画质重生子任务参数信息
 */
export interface SubTaskTranscodeInfo {
  /**
   * 子任务名称。
   */
  TaskName: string

  /**
   * 目标文件信息。
   */
  TargetInfo: TargetInfo

  /**
   * 视频剪辑信息。注意：如果填写了EditInfo，则VideoInfo和AudioInfo必填
   */
  EditInfo?: EditInfo

  /**
   * 视频转码信息，不填保持和源文件一致。
   */
  VideoInfo?: VideoInfo

  /**
   * 音频转码信息，不填保持和源文件一致。
   */
  AudioInfo?: AudioInfo

  /**
   * 指定封装信息。
   */
  MuxInfo?: MuxInfo
}

/**
 * CreateQualityControlTask请求参数结构体
 */
export interface CreateQualityControlTaskRequest {
  /**
   * 质检任务参数
   */
  QualityControlInfo: QualityControlInfo

  /**
   * 视频源信息
   */
  DownInfo: DownInfo

  /**
   * 任务结果回调地址信息
   */
  CallbackInfo?: CallbackInfo
}

/**
 * 帧标签任务参数
 */
export interface FrameTagRec {
  /**
      * 标签类型：
"Common": 通用类型
"Game":游戏类型
      */
  TagType: string

  /**
      * 游戏具体类型:
"HonorOfKings_AnchorViews":王者荣耀主播视角
"HonorOfKings_GameViews":王者荣耀比赛视角
"LOL_AnchorViews":英雄联盟主播视角
"LOL_GameViews":英雄联盟比赛视角
"PUBG_AnchorViews":和平精英主播视角
"PUBG_GameViews":和平精英比赛视角
      */
  GameExtendType?: string
}

/**
 * 智能集锦结果项
 */
export interface HighlightsTaskResultItem {
  /**
   * 智能集锦地址。
   */
  HighlightUrl: string

  /**
   * 智能集锦封面地址。
   */
  CovImgUrl: string

  /**
   * 置信度，取值范围是 0 到 100。
   */
  Confidence: number

  /**
   * 智能集锦持续时间，单位：秒。
   */
  Duration: number

  /**
   * 智能集锦子片段结果集，集锦片段由这些子片段拼接生成。
   */
  SegmentSet: Array<HighlightsTaskResultItemSegment>
}

/**
 * CreateMediaQualityRestorationTask返回参数结构体
 */
export interface CreateMediaQualityRestorationTaskResponse {
  /**
   * 画质重生任务ID，可以通过该ID查询任务状态。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 细节增强参数
 */
export interface Sharp {
  /**
   * 细节增强方式,取值：normal。
   */
  Type?: string

  /**
   * 细节增强强度，可选项：0.0-1.0。小于0.0的默认为0.0，大于1.0的默认为1.0。
   */
  Ratio?: number
}

/**
 * 媒体识别任务处理结果
 */
export interface MediaRecognitionTaskResult {
  /**
      * 帧标签识别结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrameTagResults: FrameTagResult

  /**
      * 语音字幕识别结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubtitleResults: SubtitleResult
}

/**
 * 媒体识别任务参数
 */
export interface MediaRecognitionInfo {
  /**
   * 帧标签识别
   */
  FrameTagRec?: FrameTagRec

  /**
   * 语音字幕识别
   */
  SubtitleRec?: SubtitleRec
}

/**
 * 任务存储信息
 */
export interface SaveInfo {
  /**
      * 存储类型，可选值： 
1：CosInfo。
      */
  Type: number

  /**
   * Cos形式存储信息，当Type等于1时必选。
   */
  CosInfo?: CosInfo
}

/**
 * 去划痕参数
 */
export interface ScratchRepair {
  /**
   * 去划痕方式，取值：normal。
   */
  Type?: string

  /**
   * 去划痕强度， 可选项：0.0-1.0。小于0.0的默认为0.0，大于1.0的默认为1.0。
   */
  Ratio?: number
}

/**
 * 去编码毛刺、伪影参数
 */
export interface ArtifactReduction {
  /**
   * 去毛刺方式：weak,,strong
   */
  Type?: string

  /**
      * 去毛刺算法，可选项：
edaf,
wdaf，
默认edaf。
注意：此参数已经弃用
      */
  Algorithm?: string
}

/**
 * 视频标签识别任务参数信息
 */
export interface TagEditingInfo {
  /**
   * 是否开启视频标签识别。0为关闭，1为开启。其他非0非1值默认为0。
   */
  Switch: number

  /**
   * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
   */
  CustomInfo?: string
}

/**
 * StopMediaQualityRestorationTask返回参数结构体
 */
export interface StopMediaQualityRestorationTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能拆条任务参数信息
 */
export interface StripEditingInfo {
  /**
   * 是否开启智能拆条。0为关闭，1为开启。其他非0非1值默认为0。
   */
  Switch: number

  /**
   * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
   */
  CustomInfo?: string
}

/**
 * 智能编辑任务参数信息
 */
export interface EditingInfo {
  /**
   * 视频标签识别任务参数，不填则不开启。
   */
  TagEditingInfo?: TagEditingInfo

  /**
   * 视频分类识别任务参数，不填则不开启。
   */
  ClassificationEditingInfo?: ClassificationEditingInfo

  /**
   * 智能拆条任务参数，不填则不开启。
   */
  StripEditingInfo?: StripEditingInfo

  /**
   * 智能集锦任务参数，不填则不开启。
   */
  HighlightsEditingInfo?: HighlightsEditingInfo

  /**
   * 智能封面任务参数，不填则不开启。
   */
  CoverEditingInfo?: CoverEditingInfo

  /**
   * 片头片尾识别任务参数，不填则不开启。
   */
  OpeningEndingEditingInfo?: OpeningEndingEditingInfo
}

/**
 * CreateMediaProcessTask请求参数结构体
 */
export interface CreateMediaProcessTaskRequest {
  /**
   * 编辑处理任务参数。
   */
  MediaProcessInfo: MediaProcessInfo

  /**
   * 编辑处理任务输入源列表。
   */
  SourceInfoSet?: Array<MediaSourceInfo>

  /**
   * 结果存储信息，对于涉及存储的请求必选。部子任务支持数组备份写，具体以对应任务文档为准。
   */
  SaveInfoSet?: Array<SaveInfo>

  /**
   * 任务结果回调地址信息。部子任务支持数组备份回调，具体以对应任务文档为准。
   */
  CallbackInfoSet?: Array<CallbackInfo>
}

/**
 * 语音字幕识别结果
 */
export interface SubtitleResult {
  /**
   * 语音字幕数组
   */
  SubtitleItems: Array<SubtitleItem>
}

/**
 * CreateMediaProcessTask返回参数结构体
 */
export interface CreateMediaProcessTaskResponse {
  /**
      * 编辑任务 ID，可以通过该 ID 查询任务状态和结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务结果文件信息
 */
export interface TaskResultFile {
  /**
      * 文件链接。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Url: string

  /**
      * 文件大小，部分任务支持，单位：字节
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSize: number

  /**
      * 媒体信息，对于媒体文件，部分任务支持返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaInfo: MediaResultInfo
}

/**
 * CreateEditingTask返回参数结构体
 */
export interface CreateEditingTaskResponse {
  /**
   * 编辑任务 ID，可以通过该 ID 查询任务状态。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务视频Url形式下载信息。
 */
export interface UrlInfo {
  /**
      * 视频 URL。
注意：编辑理解仅支持mp4、flv等格式的点播文件，不支持hls；
      */
  Url: string

  /**
      * 视频地址格式，可选值： 
0：音视频 ;
1：直播流。 
默认为0。其他非0非1值默认为0。画质重生任务只支持0。
      */
  Format?: number

  /**
   * 【不再支持】指定请求资源时，HTTP头部host的值。
   */
  Host?: string
}

/**
 * 编辑处理的媒体源
 */
export interface MediaSourceInfo {
  /**
   * 媒体源资源下载信息。
   */
  DownInfo: DownInfo

  /**
      * 媒体源ID标记，用于多个输入源时，请内媒体源的定位，对于多输入的任务，一般要求必选。
ID只能包含字母、数字、下划线、中划线，长读不能超过128。
      */
  Id?: string

  /**
      * 媒体源类型，具体类型如下：
Video：视频
Image：图片
Audio：音频
      */
  Type?: string
}

/**
 * 任务结果回调地址信息
 */
export interface CallbackInfo {
  /**
   * 回调URL。
   */
  Url: string
}

/**
 * 时间区间。
 */
export interface SectionTime {
  /**
   * 开始时间点，单位ms
   */
  StartTime: number

  /**
   * 时间区间时长，单位ms
   */
  Duration: number
}

/**
 * 语音字幕任务参数
 */
export interface SubtitleRec {
  /**
      * 语音识别：
zh：中文
en：英文
      */
  AsrDst?: string

  /**
      * 翻译识别：
zh：中文
en：英文
      */
  TransDst?: string
}

/**
 * 结果媒体文件的视频流信息
 */
export interface ResultVideoInfo {
  /**
      * 流在媒体文件中的流ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  StreamId: number

  /**
      * 流的时长，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number

  /**
      * 画面宽度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Width: number

  /**
      * 画面高度
注意：此字段可能返回 null，表示取不到有效值。
      */
  Height: number

  /**
      * 视频帧率
注意：此字段可能返回 null，表示取不到有效值。
      */
  Fps: number
}

/**
 * 图片水印信息
 */
export interface PicMarkInfoItem {
  /**
   * 图片水印的X坐标。
   */
  PosX: number

  /**
   * 图片水印的Y坐标 。
   */
  PosY: number

  /**
   * 图片水印路径,，如果不从Cos拉取水印，则必填
   */
  Path?: string

  /**
   * 图片水印的Cos 信息，从Cos上拉取图片水印时必填。
   */
  CosInfo?: CosInfo

  /**
   * 图片水印宽度，不填为图片原始宽度。
   */
  Width?: number

  /**
   * 图片水印高度，不填为图片原始高度。
   */
  Height?: number

  /**
   * 添加图片水印的开始时间,单位：ms。
   */
  StartTime?: number

  /**
   * 添加图片水印的结束时间,单位：ms。
   */
  EndTime?: number
}

/**
 * 编辑处理/拼接任务信息
 */
export interface MediaJoiningInfo {
  /**
      * 输出目标信息，拼接只采用FileName和Format，用于指定目标文件名和格式。
其中Format只支持mp4.
      */
  TargetInfo: MediaTargetInfo
}

/**
 * DescribeMediaQualityRestorationTaskRusult请求参数结构体
 */
export interface DescribeMediaQualityRestorationTaskRusultRequest {
  /**
   * 画质重生任务ID
   */
  TaskId: string
}

/**
 * 颜色增强参数
 */
export interface ColorEnhance {
  /**
      * 颜色增强类型，可选项：
1.  tra；
2.  weak；
3.  normal;
4.  strong;
注意：tra不支持自适应调整，处理速度更快；weak,normal,strong支持基于画面颜色自适应，处理速度更慢。
      */
  Type: string
}

/**
 * 输出文件切片信息
 */
export interface SegmentInfo {
  /**
   * 每个切片平均时长，默认10s。
   */
  FragmentTime?: number

  /**
   * 切片类型，可选项：hls，不填时默认hls。
   */
  SegmentType?: string

  /**
      * 切片文件名字。注意：
1.不填切片文件名时，默认按照按照如下格式命名：m3u8文件名{order}。
2.若填了切片文件名字，则会按照如下格式命名：用户指定文件名{order}。
      */
  FragmentName?: string
}

/**
 * 片头片尾识别任务参数信息
 */
export interface OpeningEndingEditingInfo {
  /**
   * 是否开启片头片尾识别。0为关闭，1为开启。其他非0非1值默认为0。
   */
  Switch: number

  /**
   * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
   */
  CustomInfo?: string
}

/**
 * 目标媒体信息。
 */
export interface MediaTargetInfo {
  /**
      * 目标文件名，不能带特殊字符（如/等），无需后缀名，最长200字符。

注1：部分子服务支持占位符，形式为： {parameter}
预设parameter有：
index：序号；
      */
  FileName: string

  /**
   * 媒体封装格式，最长5字符，具体格式支持根据子任务确定。
   */
  Format: string

  /**
   * 视频流信息。
   */
  TargetVideoInfo?: TargetVideoInfo

  /**
      * 【不再使用】 对于多输出任务，部分子服务推荐结果信息以列表文件形式，存储到用户存储服务中，可选值：
UseSaveInfo：默认，结果列表和结果存储同一位置；
NoListFile：不存储结果列表。
      */
  ResultListSaveType?: string
}

/**
 * 视频标签识别结果项
 */
export interface TagTaskResultItem {
  /**
   * 标签名称。
   */
  Tag: string

  /**
   * 置信度，取值范围是 0 到 100。
   */
  Confidence: number
}

/**
 * 媒体质检任务参数信息
 */
export interface QualityControlInfo {
  /**
   * 对流进行截图的间隔ms，默认1000ms
   */
  Interval?: number

  /**
   * 是否保存截图
   */
  VideoShot?: boolean

  /**
   * 是否检测抖动重影
   */
  Jitter?: boolean

  /**
   * 是否检测模糊
   */
  Blur?: boolean

  /**
   * 是否检测低光照、过曝
   */
  AbnormalLighting?: boolean

  /**
   * 是否检测花屏
   */
  CrashScreen?: boolean

  /**
   * 是否检测黑边、白边、黑屏、白屏、绿屏
   */
  BlackWhiteEdge?: boolean

  /**
   * 是否检测噪点
   */
  Noise?: boolean

  /**
   * 是否检测马赛克
   */
  Mosaic?: boolean

  /**
   * 是否检测二维码，包括小程序码、条形码
   */
  QRCode?: boolean

  /**
   * 是否开启画面质量评价
   */
  QualityEvaluation?: boolean

  /**
   * 画面质量评价过滤阈值，结果只返回低于阈值的时间段，默认60
   */
  QualityEvalScore?: number

  /**
   * 是否检测视频音频，包含静音、低音、爆音
   */
  Voice?: boolean
}

/**
 * 视频源信息
 */
export interface DownInfo {
  /**
      * 下载类型，可选值： 
0：UrlInfo； 
1：CosInfo。
      */
  Type: number

  /**
   * Url形式下载信息，当Type等于0时必选。
   */
  UrlInfo?: UrlInfo

  /**
   * Cos形式下载信息，当Type等于1时必选。
   */
  CosInfo?: CosInfo
}

/**
 * 视频分类识别任务参数信息
 */
export interface ClassificationEditingInfo {
  /**
   * 是否开启视频分类识别。0为关闭，1为开启。其他非0非1值默认为0。
   */
  Switch: number

  /**
   * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
   */
  CustomInfo?: string
}

/**
 * 智能集锦结果信息
 */
export interface HighlightsTaskResult {
  /**
      * 编辑任务状态。 
1：执行中；2：成功；3：失败。
      */
  Status: number

  /**
      * 编辑任务失败错误码。 
0：成功；其他值：失败。
      */
  ErrCode: number

  /**
   * 编辑任务失败错误描述。
   */
  ErrMsg: string

  /**
      * 智能集锦结果集。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ItemSet: Array<HighlightsTaskResultItem>
}

/**
 * DescribeEditingTaskResult请求参数结构体
 */
export interface DescribeEditingTaskResultRequest {
  /**
   * 编辑任务 ID。
   */
  TaskId: string
}

/**
 * 任务结束后生成的文件音频信息
 */
export interface AudioInfoResultItem {
  /**
   * 音频流的流id。
   */
  Stream: number

  /**
      * 音频采样率 。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Sample: number

  /**
      * 音频声道数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Channel: number

  /**
      * 编码格式，如aac, mp3等。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Codec: string

  /**
      * 码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Bitrate: number

  /**
      * 音频时长，单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number
}

/**
 * 画质重生子任务视频剪辑参数
 */
export interface EditInfo {
  /**
   * 剪辑开始时间，单位：ms。
   */
  StartTime: number

  /**
   * 剪辑结束时间，单位：ms
   */
  EndTime: number
}

/**
 * 音频去除混响
 */
export interface RemoveReverb {
  /**
   * 去混响类型，可选项：normal
   */
  Type?: string
}

/**
 * StopMediaProcessTask返回参数结构体
 */
export interface StopMediaProcessTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEditingTaskResult返回参数结构体
 */
export interface DescribeEditingTaskResultResponse {
  /**
   * 编辑任务结果信息。
   */
  TaskResult: EditingTaskResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 媒体质检结果信息
 */
export interface QualityControlInfoTaskResult {
  /**
   * 质检任务 ID
   */
  TaskId: string

  /**
      * 质检任务状态。
1：执行中；2：成功；3：失败
      */
  Status: number

  /**
   * 表示处理进度百分比
   */
  Progress: number

  /**
   * 处理时长(s)
   */
  UsedTime: number

  /**
   * 计费时长(s)
   */
  Duration: number

  /**
      * 为true时表示视频无音频轨
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoAudio: boolean

  /**
      * 为true时表示视频无视频轨
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoVideo: boolean

  /**
      * 视频无参考质量打分，百分制
注意：此字段可能返回 null，表示取不到有效值。
      */
  QualityEvaluationScore: number

  /**
      * 视频画面无参考评分低于阈值的时间段
注意：此字段可能返回 null，表示取不到有效值。
      */
  QualityEvaluationResults: Array<QualityControlResultItems>

  /**
      * 视频画面抖动时间段
注意：此字段可能返回 null，表示取不到有效值。
      */
  JitterResults: Array<QualityControlResultItems>

  /**
      * 视频画面模糊时间段
注意：此字段可能返回 null，表示取不到有效值。
      */
  BlurResults: Array<QualityControlResultItems>

  /**
      * 视频画面低光、过曝时间段
注意：此字段可能返回 null，表示取不到有效值。
      */
  AbnormalLightingResults: Array<QualityControlResultItems>

  /**
      * 视频画面花屏时间段
注意：此字段可能返回 null，表示取不到有效值。
      */
  CrashScreenResults: Array<QualityControlResultItems>

  /**
      * 视频画面黑边、白边、黑屏、白屏、纯色屏时间段
注意：此字段可能返回 null，表示取不到有效值。
      */
  BlackWhiteEdgeResults: Array<QualityControlResultItems>

  /**
      * 视频画面有噪点时间段
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoiseResults: Array<QualityControlResultItems>

  /**
      * 视频画面有马赛克时间段
注意：此字段可能返回 null，表示取不到有效值。
      */
  MosaicResults: Array<QualityControlResultItems>

  /**
      * 视频画面有二维码的时间段，包括小程序码、条形码
注意：此字段可能返回 null，表示取不到有效值。
      */
  QRCodeResults: Array<QualityControlResultItems>

  /**
      * 视频音频异常时间段，包括静音、低音、爆音
注意：此字段可能返回 null，表示取不到有效值。
      */
  VoiceResults: Array<QualityControlResultItems>

  /**
      * 任务错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrCode: number

  /**
      * 任务错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrMsg: string
}

/**
 * 画质重生任务结果
 */
export interface MediaQualityRestorationTaskResult {
  /**
   * 画质重生任务ID
   */
  TaskId: string

  /**
   * 画质重生处理后文件的详细信息。
   */
  SubTaskResult: Array<SubTaskResultItem>
}

/**
 * 数字水印
 */
export interface HiddenMarkInfo {
  /**
   * 数字水印路径,，如果不从Cos拉取水印，则必填
   */
  Path: string

  /**
   * 数字水印频率，可选值：[1,256]，默认值为30
   */
  Frequency?: number

  /**
   * 数字水印强度，可选值：[32,128]，默认值为64
   */
  Strength?: number

  /**
   * 数字水印的Cos 信息，从Cos上拉取图片水印时必填。
   */
  CosInfo?: CosInfo
}

/**
 * 编辑处理/剪切任务/输出形式信息
 */
export interface MediaCuttingOutForm {
  /**
      * 输出类型，可选值：
Static：静态图；
Dynamic：动态图；
Sprite：雪碧图；
Video：视频。

注1：不同类型时，对应的 TargetInfo.Format 格式支持如下：
Static：jpg、png；
Dynamic：gif；
Sprite：jpg、png；
Video：mp4。

注2：当 Type=Sprite时，TargetInfo指定的尺寸表示小图的大小，最终结果尺寸以输出为准。
      */
  Type: string

  /**
      * 背景填充方式，可选值：
White：白色填充；
Black：黑色填充；
Stretch：拉伸；
Gaussian：高斯模糊；
默认White。
      */
  FillType?: string

  /**
   * Type=Sprite时有效，表示雪碧图行数，范围为 [1,200]，默认100。
   */
  SpriteRowCount?: number

  /**
   * Type=Sprite时有效，表示雪碧图列数，范围为 [1,200]，默认100。
   */
  SpriteColumnCount?: number
}

/**
 * StopMediaQualityRestorationTask请求参数结构体
 */
export interface StopMediaQualityRestorationTaskRequest {
  /**
   * 要删除的画质重生任务ID。
   */
  TaskId: string
}

/**
 * DescribeQualityControlTaskResult返回参数结构体
 */
export interface DescribeQualityControlTaskResultResponse {
  /**
   * 质检任务结果信息
   */
  TaskResult?: QualityControlInfoTaskResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频分类识别结果项
 */
export interface ClassificationTaskResultItem {
  /**
   * 分类名称。
   */
  Classification: string

  /**
   * 置信度，取值范围是 0 到 100。
   */
  Confidence: number
}

/**
 * 音频参数信息
 */
export interface AudioInfo {
  /**
      * 音频码率，取值范围：0 和 [26, 256]，单位：kbps。
注意：当取值为 0，表示音频码率和原始音频保持一致。
      */
  Bitrate: number

  /**
   * 音频编码器，可选项：aac,mp3,ac3,flac,mp2。
   */
  Codec: string

  /**
      * 声道数，可选项：
1：单声道，
2：双声道，
6：立体声。
      */
  Channel: number

  /**
   * 采样率，单位：Hz。可选项：32000，44100,48000
   */
  SampleRate: number

  /**
   * 音频降噪信息
   */
  Denoise?: Denoise

  /**
      * 开启添加静音，可选项：
0：不开启，
1：开启，
默认不开启
      */
  EnableMuteAudio?: number

  /**
   * 音频响度信息
   */
  LoudnessInfo?: LoudnessInfo

  /**
   * 音频音效增强
   */
  AudioEnhance?: AudioEnhance

  /**
   * 去除混音
   */
  RemoveReverb?: RemoveReverb
}

/**
 * 画质重生子任务结果
 */
export interface SubTaskResultItem {
  /**
      * 子任务名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskName: string

  /**
      * 子任务状态。
0：成功；
1：执行中；
其他值：失败。
      */
  StatusCode: number

  /**
   * 子任务状态描述。
   */
  StatusMsg: string

  /**
      * 子任务进度。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProgressRate: number

  /**
      * 画质重生处理后文件的下载地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownloadUrl: string

  /**
      * 画质重生处理后文件的MD5。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Md5: string

  /**
      * 画质重生处理后文件的详细信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileInfo: FileInfo
}

/**
 * 智能拆条结果信息
 */
export interface StripTaskResult {
  /**
      * 编辑任务状态。 
1：执行中；2：成功；3：失败。
      */
  Status: number

  /**
      * 编辑任务失败错误码。 
0：成功；其他值：失败。
      */
  ErrCode: number

  /**
   * 编辑任务失败错误描述。
   */
  ErrMsg: string

  /**
      * 智能拆条结果集。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ItemSet: Array<StripTaskResultItem>
}

/**
 * 智能集锦任务参数信息
 */
export interface HighlightsEditingInfo {
  /**
   * 是否开启智能集锦。0为关闭，1为开启。其他非0非1值默认为0。
   */
  Switch: number

  /**
   * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
   */
  CustomInfo?: string
}

/**
 * 画质重生处理后文件的详细信息
 */
export interface FileInfo {
  /**
      * 任务结束后生成的文件大小。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSize: number

  /**
      * 任务结束后生成的文件格式，例如：mp4,flv等等。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileType: string

  /**
      * 任务结束后生成的文件整体码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Bitrate: number

  /**
      * 任务结束后生成的文件时长，单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number

  /**
      * 任务结束后生成的文件视频信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VideoInfoResult: Array<VideoInfoResultItem>

  /**
      * 任务结束后生成的文件音频信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioInfoResult: Array<AudioInfoResultItem>
}

/**
 * 结果媒体文件的视频流信息
 */
export interface ResultAudioInfo {
  /**
      * 流在媒体文件中的流ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  StreamId: number

  /**
      * 流的时长，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number
}

/**
 * 片头片尾识别结果信息
 */
export interface OpeningEndingTaskResult {
  /**
      * 编辑任务状态。 
1：执行中；2：成功；3：失败。
      */
  Status: number

  /**
      * 编辑任务失败错误码。 
0：成功；其他值：失败。
      */
  ErrCode: number

  /**
   * 编辑任务失败错误描述。
   */
  ErrMsg: string

  /**
      * 片头片尾识别结果项。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Item: OpeningEndingTaskResultItem
}

/**
 * 画质增强参数信息
 */
export interface VideoEnhance {
  /**
   * 去编码毛刺、伪影参数。
   */
  ArtifactReduction?: ArtifactReduction

  /**
   * 去噪声参数。
   */
  Denoising?: Denoising

  /**
   * 颜色增强参数。
   */
  ColorEnhance?: ColorEnhance

  /**
   * 细节增强参数。
   */
  Sharp?: Sharp

  /**
      * 超分参数，可选项：2，目前仅支持2倍超分。
注意：此参数已经弃用，超分可以使用VideoSuperResolution参数
      */
  WdSuperResolution?: number

  /**
   * 人脸保护信息。
   */
  FaceProtect?: FaceProtect

  /**
      * 插帧，取值范围：[0, 60]，单位：Hz。
注意：当取值为 0，表示帧率和原始视频保持一致。
      */
  WdFps?: number

  /**
   * 去划痕参数
   */
  ScratchRepair?: ScratchRepair

  /**
   * 低光照增强参数
   */
  LowLightEnhance?: LowLightEnhance

  /**
   * 视频超分参数
   */
  VideoSuperResolution?: VideoSuperResolution

  /**
   * 视频画质修复参数
   */
  VideoRepair?: VideoRepair
}

/**
 * 综合画质修复，包括：去噪，去毛刺，细节增强，主观画质提升。
 */
export interface VideoRepair {
  /**
      * 画质修复类型，可选值：weak，normal，strong;
默认值: weak
      */
  Type?: string
}

/**
 * 质检结果项数组
 */
export interface QualityControlResultItems {
  /**
      * 异常类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id: string

  /**
   * 质检结果项
   */
  QualityControlItems: Array<QualityControlItem>
}

/**
 * 帧标签
 */
export interface FrameTagItem {
  /**
   * 标签起始时间戳PTS(ms)
   */
  StartPts: number

  /**
   * 语句结束时间戳PTS(ms)
   */
  EndPts: number

  /**
   * 字符串形式的起始结束时间
   */
  Period: string

  /**
   * 标签数组
   */
  TagItems: Array<TagItem>
}

/**
 * 质检结果项
 */
export interface QualityControlItem {
  /**
      * 置信度，取值范围是 0 到 100
注意：此字段可能返回 null，表示取不到有效值。
      */
  Confidence: number

  /**
   * 出现的起始时间戳，秒
   */
  StartTimeOffset: number

  /**
   * 出现的结束时间戳，秒
   */
  EndTimeOffset: number

  /**
      * 区域坐标(px)，即左上角坐标、右下角坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
  AreaCoordsSet: Array<number>
}

/**
 * 智能封面结果信息
 */
export interface CoverTaskResult {
  /**
      * 编辑任务状态。 
1：执行中；2：成功；3：失败。
      */
  Status: number

  /**
      * 编辑任务失败错误码。 
0：成功；其他值：失败。
      */
  ErrCode: number

  /**
   * 编辑任务失败错误描述。
   */
  ErrMsg: string

  /**
      * 智能封面结果集。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ItemSet: Array<CoverTaskResultItem>
}

/**
 * 视频标签识别结果信息
 */
export interface TagTaskResult {
  /**
      * 编辑任务状态。 
1：执行中；2：成功；3：失败。
      */
  Status: number

  /**
      * 编辑任务失败错误码。 
0：成功；其他值：失败。
      */
  ErrCode: number

  /**
   * 编辑任务失败错误描述。
   */
  ErrMsg: string

  /**
      * 视频标签识别结果集。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ItemSet: Array<TagTaskResultItem>
}

/**
 * 音频音效增强，只支持无背景音的音频
 */
export interface AudioEnhance {
  /**
   * 音效增强种类，可选项：normal
   */
  Type?: string
}

/**
 * 任务视频cos信息
 */
export interface CosInfo {
  /**
   * cos 区域值。例如：ap-beijing。
   */
  Region: string

  /**
   * cos 存储桶，格式为BuketName-AppId。例如：test-123456。
   */
  Bucket: string

  /**
      * cos 路径。 
对于写表示目录，例如：/test； 
对于读表示文件路径，例如：/test/test.mp4。
      */
  Path: string

  /**
   * cos 授权信息，不填默认为公有权限。
   */
  CosAuthMode?: CosAuthMode
}

/**
 * 结果文件媒体信息
 */
export interface MediaResultInfo {
  /**
      * 媒体时长，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number

  /**
      * 视频流信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultVideoInfoSet: Array<ResultVideoInfo>

  /**
      * 音频流信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultAudioInfoSet: Array<ResultAudioInfo>
}

/**
 * 帧标签结果
 */
export interface FrameTagResult {
  /**
   * 帧标签结果数组
   */
  FrameTagItems: Array<FrameTagItem>
}

/**
 * 画质重生子任务文字水印信息
 */
export interface TextMarkInfoItem {
  /**
   * 文字内容。
   */
  Text: string

  /**
   * 文字水印X坐标。
   */
  PosX: number

  /**
   * 文字水印Y坐标。
   */
  PosY: number

  /**
   * 文字大小
   */
  FontSize: number

  /**
   * 字体，可选项：hei,song，simkai,arial；默认hei(黑体）。
   */
  FontFile?: string

  /**
   * 字体颜色，颜色见附录，不填默认black。
   */
  FontColor?: string

  /**
   * 文字透明度，可选值0-1。0：不透明，1：全透明。默认为0
   */
  FontAlpha?: number
}

/**
 * 编辑处理/剪切任务/时间信息
 */
export interface MediaCuttingTimeInfo {
  /**
      * 时间类型，可选值：
PointSet：时间点集合；
IntervalPoint：周期采样点；
SectionSet：时间片段集合。
      */
  Type: string

  /**
   * 截取时间点集合，单位毫秒，Type=PointSet时必选。
   */
  PointSet?: Array<number>

  /**
   * 周期采样点信息，Type=IntervalPoint时必选。
   */
  IntervalPoint?: IntervalTime

  /**
   * 时间区间集合信息，Type=SectionSet时必选。
   */
  SectionSet?: Array<SectionTime>
}

/**
 * 输出文件信息
 */
export interface TargetInfo {
  /**
   * 目标文件名
   */
  FileName: string

  /**
   * 目标文件切片信息
   */
  SegmentInfo?: SegmentInfo
}

/**
 * CreateMediaQualityRestorationTask请求参数结构体
 */
export interface CreateMediaQualityRestorationTaskRequest {
  /**
   * 源文件地址。
   */
  DownInfo: DownInfo

  /**
   * 画质重生任务参数信息。
   */
  TransInfo: Array<SubTaskTranscodeInfo>

  /**
   * 任务结束后文件存储信息。
   */
  SaveInfo: SaveInfo

  /**
   * 任务结果回调地址信息。
   */
  CallbackInfo?: CallbackInfo
}

/**
 * CreateEditingTask请求参数结构体
 */
export interface CreateEditingTaskRequest {
  /**
   * 智能编辑任务参数。
   */
  EditingInfo: EditingInfo

  /**
   * 视频源信息。
   */
  DownInfo: DownInfo

  /**
   * 结果存储信息。对于包含智能拆条、智能集锦或者智能封面的任务必选。
   */
  SaveInfo?: SaveInfo

  /**
   * 任务结果回调地址信息。
   */
  CallbackInfo?: CallbackInfo
}

/**
 * 去噪参数
 */
export interface Denoising {
  /**
      * 去噪方式，可选项：
templ：时域降噪；
spatial：空域降噪,
fast-spatial：快速空域降噪。
注意：可选择组合方式：
1.type:"templ,spatial" ;
2.type:"templ,fast-spatial"。
      */
  Type: string

  /**
   * 时域去噪强度，可选值：0.0-1.0 。小于0.0的默认为0.0，大于1.0的默认为1.0。
   */
  TemplStrength?: number

  /**
   * 空域去噪强度，可选值：0.0-1.0 。小于0.0的默认为0.0，大于1.0的默认为1.0。
   */
  SpatialStrength?: number
}

/**
 * 人脸保护参数
 */
export interface FaceProtect {
  /**
   * 人脸区域增强强度，可选项：0.0-1.0。小于0.0的默认为0.0，大于1.0的默认为1.0。
   */
  FaceUsmRatio?: number
}

/**
 * 任务结束后生成的文件视频信息
 */
export interface VideoInfoResultItem {
  /**
   * 视频流的流id。
   */
  Stream: number

  /**
      * 视频宽度。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Width: number

  /**
      * 视频高度。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Height: number

  /**
      * 视频码率，单位：bps。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Bitrate: number

  /**
      * 视频帧率，用分数格式表示，如：25/1, 99/32等等。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Fps: string

  /**
      * 编码格式，如h264,h265等等 。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Codec: string

  /**
      * 播放旋转角度，可选值0-360。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rotate: number

  /**
      * 视频时长，单位：ms 。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number

  /**
      * 颜色空间，如yuv420p，yuv444p等等。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PixFormat: string
}

/**
 * StopMediaProcessTask请求参数结构体
 */
export interface StopMediaProcessTaskRequest {
  /**
   * 编辑处理任务ID。
   */
  TaskId: string
}

/**
 * 智能封面任务参数信息
 */
export interface CoverEditingInfo {
  /**
   * 是否开启智能封面。0为关闭，1为开启。其他非0非1值默认为0。
   */
  Switch: number

  /**
   * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
   */
  CustomInfo?: string
}

/**
 * 语音字幕识别项
 */
export interface SubtitleItem {
  /**
   * 语音识别结果
   */
  Id: string

  /**
      * 中文翻译结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zh: string

  /**
      * 英文翻译结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  En: string

  /**
   * 语句起始时间戳PTS(ms)
   */
  StartPts: number

  /**
   * 语句结束时间戳PTS(ms)
   */
  EndPts: number

  /**
   * 字符串形式的起始结束时间
   */
  Period: string

  /**
   * 结果的置信度（百分制）
   */
  Confidence: number

  /**
   * 当前语句是否结束
   */
  EndFlag: boolean

  /**
      * 语句分割时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  PuncEndTs: string
}

/**
 * DescribeMediaProcessTaskResult请求参数结构体
 */
export interface DescribeMediaProcessTaskResultRequest {
  /**
   * 编辑处理任务ID。
   */
  TaskId: string
}

/**
 * 编辑处理/任务处理结果
 */
export interface MediaProcessTaskResult {
  /**
      * 编辑处理任务ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 编辑处理任务类型，取值：
MediaEditing：视频编辑（待上线）；
MediaCutting：视频剪切；
MediaJoining：视频拼接。
MediaRecognition：媒体识别；
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 处理进度，范围：[0,100]
注意：此字段可能返回 null，表示取不到有效值。
      */
  Progress: number

  /**
      * 任务状态：
1100：等待中；
1200：执行中；
2000：成功；
5000：失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 任务错误码。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrCode: number

  /**
      * 任务错误信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrMsg: string

  /**
      * 剪切任务处理结果，当Type=MediaCutting时才有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaCuttingTaskResult: MediaCuttingTaskResult

  /**
      * 拼接任务处理结果，当Type=MediaJoining时才有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaJoiningTaskResult: MediaJoiningTaskResult

  /**
      * 媒体识别任务处理结果，当Type=MediaRecognition时才有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaRecognitionTaskResult: MediaRecognitionTaskResult
}

/**
 * 智能识别任务结果信息
 */
export interface EditingTaskResult {
  /**
   * 编辑任务 ID。
   */
  TaskId: string

  /**
      * 编辑任务状态。 
1：执行中；2：已完成。
      */
  Status: number

  /**
      * 视频标签识别结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagTaskResult: TagTaskResult

  /**
      * 视频分类识别结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClassificationTaskResult: ClassificationTaskResult

  /**
      * 智能拆条结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  StripTaskResult: StripTaskResult

  /**
      * 智能集锦结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HighlightsTaskResult: HighlightsTaskResult

  /**
      * 智能封面结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CoverTaskResult: CoverTaskResult

  /**
      * 片头片尾识别结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OpeningEndingTaskResult: OpeningEndingTaskResult
}

/**
 * 编辑处理/任务信息
 */
export interface MediaProcessInfo {
  /**
      * 编辑处理任务类型，可选值：
MediaEditing：媒体编辑（待上线）；
MediaCutting：媒体剪切；
MediaJoining：媒体拼接。
MediaRecognition: 媒体识别。
      */
  Type: string

  /**
   * 视频剪切任务参数，Type=MediaCutting时必选。
   */
  MediaCuttingInfo?: MediaCuttingInfo

  /**
   * 视频拼接任务参数，Type=MediaJoining时必选。
   */
  MediaJoiningInfo?: MediaJoiningInfo

  /**
   * 媒体识别任务参数，Type=MediaRecognition时必选
   */
  MediaRecognitionInfo?: MediaRecognitionInfo
}

/**
 * 视频分类识别结果信息
 */
export interface ClassificationTaskResult {
  /**
      * 编辑任务状态。 
1：执行中；2：成功；3：失败。
      */
  Status: number

  /**
      * 编辑任务失败错误码。 
0：成功；其他值：失败。
      */
  ErrCode: number

  /**
   * 编辑任务失败错误描述。
   */
  ErrMsg: string

  /**
      * 视频分类识别结果集。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ItemSet: Array<ClassificationTaskResultItem>
}

/**
 * 标签项
 */
export interface TagItem {
  /**
   * 标签内容
   */
  Id: string

  /**
   * 结果的置信度（百分制）
   */
  Confidence: number

  /**
      * 分级数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  Categorys: Array<string>

  /**
      * 标签备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ext: string
}

/**
 * DescribeMediaProcessTaskResult返回参数结构体
 */
export interface DescribeMediaProcessTaskResultResponse {
  /**
      * 任务处理结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskResult?: MediaProcessTaskResult

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能集锦结果片段
 */
export interface HighlightsTaskResultItemSegment {
  /**
   * 置信度，取值范围是 0 到 100。
   */
  Confidence: number

  /**
   * 集锦片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number

  /**
   * 集锦片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset: number
}

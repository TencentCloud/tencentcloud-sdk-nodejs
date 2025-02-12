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
 * 智能横转竖任务输入类型
 */
export interface AiAnalysisTaskHorizontalToVerticalInput {
  /**
   * 视频智能横转竖模板 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Definition?: number
}

/**
 * ModifySnapshotByTimeOffsetTemplate返回参数结构体
 */
export interface ModifySnapshotByTimeOffsetTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySampleSnapshotTemplate返回参数结构体
 */
export interface ModifySampleSnapshotTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 容器格式诊断结果
 */
export interface ContainerDiagnoseResultItem {
  /**
   * 诊断出的异常类别，取值范围：
DecodeParamException：解码参数异常
TimeStampException：时间戳异常
FrameException： 帧率异常
StreamStatusException：流状态异常
StreamInfo：流信息异常
StreamAbnormalCharacteristics：流特征异常
DecodeException：解码异常
HLSRequirements：HLS 格式异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
  /**
   * 诊断出的具体异常类型，取值如下：

VideoResolutionChanged：视频分辨率变化
AudioSampleRateChanged：音频采样率变化
AudioChannelsChanged：音频通道数变化
ParameterSetsChanged：流参数集信息发生变化
DarOrSarInvalid：视频的宽高比异常
TimestampFallback：DTS时间戳回退
DtsJitter：DTS抖动过大
PtsJitter：PTS抖动过大
AACDurationDeviation：AAC帧时间戳间隔不合理
AudioDroppingFrames：音频丢帧
VideoDroppingFrames：视频丢帧
AVTimestampInterleave：音视频交织不合理
PtsLessThanDts：媒体流的 pts 小于 dts
ReceiveFpsJitter：网络接收帧率抖动过大
ReceiveFpsTooSmall：网络接收视频帧率过小
FpsJitter：通过PTS计算得到的流帧率抖动过大
StreamOpenFailed：流打开失败
StreamEnd：流结束
StreamParseFailed：流解析失败
VideoFirstFrameNotIdr：首帧不是IDR帧
StreamNALUError：NALU起始码错误
TsStreamNoAud：mpegts的H26x流缺失 AUD NALU
AudioStreamLack：无音频流
VideoStreamLack：无视频流
LackAudioRecover：缺失音频流恢复
LackVideoRecover：缺失视频流恢复
VideoBitrateOutofRange：视频流码率(kbps)超出范围
AudioBitrateOutofRange：音频流码率(kbps)超出范围
VideoDecodeFailed：视频解码错误
AudioDecodeFailed：音频解码错误
AudioOutOfPhase：双通道音频相位相反
VideoDuplicatedFrame：视频流中存在重复帧
AudioDuplicatedFrame：音频流中存在重复帧
VideoRotation：视频画面旋转
TsMultiPrograms：MPEG2-TS流有多个program
Mp4InvalidCodecFourcc：MP4中codec fourcc不符合Apple HLS要求
HLSBadM3u8Format：无效的m3u8文件
HLSInvalidMasterM3u8：无效的main m3u8文件
HLSInvalidMediaM3u8：无效的media m3u8文件
HLSMasterM3u8Recommended：main m3u8缺少标准推荐的参数
HLSMediaM3u8Recommended：media m3u8缺少标准推荐的参数
HLSMediaM3u8DiscontinuityExist：media m3u8存在EXT-X-DISCONTINUITY
HLSMediaSegmentsStreamNumChange：切片的流数目发生变化
HLSMediaSegmentsPTSJitterDeviation：切片间PTS跳变且没有EXT-X-DISCONTINUITY
HLSMediaSegmentsDTSJitterDeviation：切片间DTS跳变且没有EXT-X-DISCONTINUITY
TimecodeTrackExist：MP4存在tmcd轨道
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 诊断出的异常级别，取值范围：
Fatal：影响后续播放和解析，
Error： 可能会影响播放，
Warning： 可能会有潜在风险，但不一定会影响播放，
Notice：比较重要的流信息，
Info：一般性的流信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SeverityLevel?: string
  /**
   * 警告出现的时间点，形式如 “2022-12-25T13:14:16Z”
注意：此字段可能返回 null，表示取不到有效值。
   */
  DateTimeSet?: Array<string>
  /**
   * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimestampSet?: Array<number>
}

/**
 * 安全组解绑输入/输出请求信息。
 */
export interface UnattachSecurityGroupInOutInfo {
  /**
   * 该安全组关联的FlowId。
   */
  FlowId: string
  /**
   * 要解绑的输入/输出ID。
   */
  InOutId: string
  /**
   * 输入/输出类型，可选值：
Input：输入
Output：输出。
   */
  InOutType: string
  /**
   * Flow所在的Region，和input共用。
   */
  FlowRegion: string
}

/**
 * ModifyWatermarkTemplate请求参数结构体
 */
export interface ModifyWatermarkTemplateRequest {
  /**
   * 水印模板唯一标识。
   */
  Definition: number
  /**
   * 水印模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 原点位置，可选值：
<li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
   */
  CoordinateOrigin?: string
  /**
   * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
   */
  XPos?: string
  /**
   * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
   */
  YPos?: string
  /**
   * 图片水印模板，该字段仅对图片水印模板有效。
   */
  ImageTemplate?: ImageWatermarkInputForUpdate
  /**
   * 文字水印模板，该字段仅对文字水印模板有效。
   */
  TextTemplate?: TextWatermarkTemplateInputForUpdate
  /**
   * SVG水印模板，当 Type 为 svg，该字段必填。当 Type 为 image 或 text，该字段无效。
   */
  SvgTemplate?: SvgWatermarkInputForUpdate
}

/**
 * 查询输入的RTP配置信息。
 */
export interface DescribeInputRTPSettings {
  /**
   * 是否FEC。
   */
  FEC: string
  /**
   * 空闲超时时间。
   */
  IdleTimeout: number
}

/**
 * 语音全文识别片段。
 */
export interface AiRecognitionTaskAsrFullTextSegmentItem {
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence?: number
  /**
   * 识别片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset?: number
  /**
   * 识别片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset?: number
  /**
   * 识别文本。
   */
  Text?: string
  /**
   * 字词时间戳信息。
   */
  Wordlist?: Array<WordResult>
}

/**
 * DeleteStreamLinkFlow请求参数结构体
 */
export interface DeleteStreamLinkFlowRequest {
  /**
   * 传输流Id。
   */
  FlowId: string
}

/**
 * 插帧帧率配置
 */
export interface FrameRateConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 帧率，取值范围：[0, 100]，单位：Hz。
默认值 0。
注意：对于转码，该参数会覆盖 VideoTemplate 内部的 Fps。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fps?: number
}

/**
 * DeleteStreamLinkSecurityGroup返回参数结构体
 */
export interface DeleteStreamLinkSecurityGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能分类任务输入类型
 */
export interface AiAnalysisTaskClassificationInput {
  /**
   * 视频智能分类模板 ID。
   */
  Definition: number
}

/**
 * SVG水印模板输入参数
 */
export interface SvgWatermarkInput {
  /**
   * 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且
 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；</li>
<li>当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 W%。</li>
默认值为 10W%。
   */
  Width?: string
  /**
   * 水印的高度，支持 px，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且
 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；</li>
<li>当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 H%。</li>
默认值为 0px。
   */
  Height?: string
}

/**
 * 流的统计数据列表。
 */
export interface FlowStatisticsArray {
  /**
   * 时间戳。
   */
  Timestamp: number
  /**
   * 每个会话的统计数据。
   */
  FlowStatistics: Array<FlowStatistics>
}

/**
 * CreateTranscodeTemplate请求参数结构体
 */
export interface CreateTranscodeTemplateRequest {
  /**
   * 封装格式，可选值：mp4、flv、hls、ts、webm、mkv、mxf、mov、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
   */
  Container: string
  /**
   * 转码模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 是否去除视频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
默认值：0。
   */
  RemoveVideo?: number
  /**
   * 是否去除音频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
默认值：0。
   */
  RemoveAudio?: number
  /**
   * 视频流配置参数，当 RemoveVideo 为 0，该字段必填。
   */
  VideoTemplate?: VideoTemplateInfo
  /**
   * 音频流配置参数，当 RemoveAudio 为 0，该字段必填。
   */
  AudioTemplate?: AudioTemplateInfo
  /**
   * 极速高清转码参数。
   */
  TEHDConfig?: TEHDConfig
  /**
   * 音视频增强配置。
   */
  EnhanceConfig?: EnhanceConfig
}

/**
 * ProcessLiveStream返回参数结构体
 */
export interface ProcessLiveStreamResponse {
  /**
   * 任务 ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直播流媒体质检结果
 */
export interface LiveStreamAiQualityControlResultInfo {
  /**
   * 内容质检结果列表。
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  QualityControlResults?: Array<QualityControlResult>
  /**
   * 格式诊断结果列表。
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  DiagnoseResults?: Array<DiagnoseResult>
  /**
   * 内容质检结果列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityControlResultSet?: Array<QualityControlResult>
  /**
   * 格式诊断结果列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiagnoseResultSet?: Array<DiagnoseResult>
}

/**
 * 创建媒体传输流的输出的SRT配置。
 */
export interface CreateOutputSRTSettings {
  /**
   * 转推的目标地址，当Mode为CALLER时必填，且只能填1组。
   */
  Destinations: Array<CreateOutputSRTSettingsDestinations>
  /**
   * 转推SRT的流Id，可选大小写字母、数字和特殊字符（.#!:&,=_-），长度为0~512。
   */
  StreamId?: string
  /**
   * 转推SRT的总延迟，默认0，单位ms，范围为[0, 3000]。此参数同时设置了发送方和接收方的延迟（recvlatency和peerlatency）为相同的值。建议配置为至少3倍RTT，以确保在网络拥塞时能够有效处理数据包的重传和确认
   */
  Latency?: number
  /**
   * 转推SRT的接收延迟，默认120，单位ms，范围为[0, 3000]。 此参数表示接收方用于缓存数据包的时间长度
   */
  RecvLatency?: number
  /**
   * 转推SRT的对端延迟，默认0，单位ms，范围为[0, 3000]。 此参数由发送方设置，用于告知接收方其期望的延迟缓冲时间
   */
  PeerLatency?: number
  /**
   * 转推SRT的对端空闲超时时间，默认5000，单位ms，范围为[1000, 10000]。 如果连接在设定的超时时间内没有活动，将会被关闭
   */
  PeerIdleTimeout?: number
  /**
   * 转推SRT的加密密钥，默认为空，表示不加密。只可填ascii码值，长度为[10, 79]。
   */
  Passphrase?: string
  /**
   * 转推SRT的密钥长度，默认为0，可选[0|16|24|32]。
   */
  PbKeyLen?: number
  /**
   * SRT模式，可选[LISTENER|CALLER]，默认为CALLER。
   */
  Mode?: string
}

/**
 * 智能精彩片段信息
 */
export interface MediaAiAnalysisHighlightItem {
  /**
   * 智能精彩集锦地址。
   */
  HighlightPath?: string
  /**
   * 智能精彩集锦封面地址。
   */
  CovImgPath?: string
  /**
   * 智能精彩集锦的可信度，取值范围是 0 到 100。
   */
  Confidence?: number
  /**
   * 智能精彩集锦持续时间。
   */
  Duration?: number
  /**
   * 智能精彩集锦子片段列表。
   */
  SegmentSet?: Array<HighlightSegmentItem>
}

/**
 * DeleteLiveRecordTemplate请求参数结构体
 */
export interface DeleteLiveRecordTemplateRequest {
  /**
   * 录制模板唯一标识。
   */
  Definition: number
}

/**
 * DescribeAnimatedGraphicsTemplates请求参数结构体
 */
export interface DescribeAnimatedGraphicsTemplatesRequest {
  /**
   * 转动图模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
  /**
   * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type?: string
  /**
   * 转动图模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * 内容审核 Asr 文字鉴任违禁务结果类型
 */
export interface AiReviewTaskProhibitedAsrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核 Asr 文字鉴违禁任务输入。
   */
  Input?: AiReviewProhibitedAsrTaskInput
  /**
   * 内容审核 Asr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewProhibitedAsrTaskOutput
}

/**
 * 转自适应码流模板详情
 */
export interface AdaptiveDynamicStreamingTemplate {
  /**
   * 转自适应码流模板唯一标识。
   */
  Definition?: number
  /**
   * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type?: string
  /**
   * 转自适应码流模板名称。
   */
  Name?: string
  /**
   * 转自适应码流模板描述信息。
   */
  Comment?: string
  /**
   * 转自适应码流格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
   */
  Format?: string
  /**
   * 转自适应码流输入流参数信息，最多输入10路流。
   */
  StreamInfos?: Array<AdaptiveStreamTemplate>
  /**
   * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
   */
  DisableHigherVideoBitrate?: number
  /**
   * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
   */
  DisableHigherVideoResolution?: number
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  CreateTime?: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  UpdateTime?: string
  /**
   * 是否为纯音频，0表示视频，1表示纯音频
注意：此字段可能返回 null，表示取不到有效值。
   */
  PureAudio?: number
  /**
   * hls 分片类型，可选值：
<li>ts-segment：HLS+TS 切片</li>
<li>ts-byterange：HLS+TS byte range</li>
<li>mp4-segment：HLS+MP4 切片</li>
<li>mp4-byterange：HLS+MP4 byte range</li>
<li>ts-packed-audio：TS+Packed Audio</li>
<li>mp4-packed-audio：MP4+Packed Audio</li>
默认值：ts-segment

注：自适应码流的hls分片格式已此字段为准
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentType?: string
}

/**
 * 智能描述信息
 */
export interface MediaAiAnalysisDescriptionItem {
  /**
   * 智能描述。
   */
  Description?: string
  /**
   * 智能描述的可信度，取值范围是 0 到 100。
   */
  Confidence?: number
  /**
   * 智能描述标题
   */
  Title?: string
  /**
   * 智能描述关键词
   */
  Keywords?: Array<string>
  /**
   * 分段结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Paragraphs?: Array<AiParagraphInfo>
}

/**
 * DeleteAnimatedGraphicsTemplate返回参数结构体
 */
export interface DeleteAnimatedGraphicsTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内容审核 Ocr 文字鉴任违禁务结果类型
 */
export interface AiReviewTaskProhibitedOcrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核 Ocr 文字鉴违禁任务输入。
   */
  Input?: AiReviewProhibitedOcrTaskInput
  /**
   * 内容审核 Ocr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewProhibitedOcrTaskOutput
}

/**
 * 语音全文识别结果。
 */
export interface AiRecognitionTaskAsrFullTextResultOutput {
  /**
   * 语音全文识别片段列表。
   */
  SegmentSet?: Array<AiRecognitionTaskAsrFullTextSegmentItem>
  /**
   * 字幕文件地址。
   */
  SubtitlePath?: string
  /**
   * 字幕文件存储位置。
   * @deprecated
   */
  OutputStorage?: TaskOutputStorage
}

/**
 * Ocr 文字涉违禁信息
 */
export interface AiReviewProhibitedOcrTaskOutput {
  /**
   * Ocr 文字涉违禁评分，分值为0到100。
   */
  Confidence: number
  /**
   * Ocr 文字涉违禁结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * Ocr 文字有涉违禁嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewOcrTextSegmentItem>
}

/**
 * DeleteSchedule返回参数结构体
 */
export interface DeleteScheduleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ManageTask返回参数结构体
 */
export interface ManageTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeleteStreamLinkFlow请求参数结构体
 */
export interface BatchDeleteStreamLinkFlowRequest {
  /**
   * EventId。
   */
  EventId: string
  /**
   * Event关联的流Id数组，如果不传默认删除Event下面的所有媒体传输流。
   */
  FlowIds?: Array<string>
}

/**
 * 传输流的媒体数据。
 */
export interface FlowMediaInfo {
  /**
   * 时间戳，单位是秒。
   */
  Timestamp: number
  /**
   * 总带宽。
   */
  Network: number
  /**
   * 传输流的视频数据。
   */
  Video: Array<FlowMediaVideo>
  /**
   * 传输流的音频数据。
   */
  Audio: Array<FlowMediaAudio>
  /**
   * 标志同一次推流。
   */
  SessionId: string
  /**
   * 客户端IP。
   */
  ClientIp: string
}

/**
 * DeleteWorkflow请求参数结构体
 */
export interface DeleteWorkflowRequest {
  /**
   * 工作流 ID。
   */
  WorkflowId: number
}

/**
 * 查询输入的RTMP配置信息。
 */
export interface DescribeRTMPPullSourceAddress {
  /**
   * RTMP源站的TcUrl地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TcUrl: string
  /**
   * RTMP源站的StreamKey。
RTMP源站地址拼接规则为：$TcUrl/$StreamKey。
   */
  StreamKey: string
}

/**
 * 查询输出的RTMP拉流配置信息。
 */
export interface DescribeOutputRTMPPullSettings {
  /**
   * 拉流地址列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerUrls: Array<DescribeOutputRTMPPullServerUrl>
}

/**
 * AWS S3 文件是上传触发器。
 */
export interface AwsS3FileUploadTrigger {
  /**
   * 绑定的 AWS S3 存储桶。
   */
  S3Bucket: string
  /**
   * 绑定的桶所在 AWS 区域，目前支持：  
us-east-1  
eu-west-3
   */
  S3Region: string
  /**
   * 绑定的输入路径目录，必须为绝对路径，即以 `/` 开头和结尾。如`/movie/201907/`，不填代表根目录`/`。
   */
  Dir?: string
  /**
   * 允许触发的文件格式列表，如 ["mp4", "flv", "mov"]。不填代表所有格式的文件都可以触发工作流。
   */
  Formats?: Array<string>
  /**
   * 绑定的 AWS S3 存储桶的秘钥ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3SecretId?: string
  /**
   * 绑定的 AWS S3 存储桶的秘钥Key。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3SecretKey?: string
  /**
   * 绑定的 AWS S3 存储桶对应的 SQS事件队列。
注意：队列和桶需要在同一区域。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AwsSQS?: AwsSQS
}

/**
 * 用户自定义文本审核任务控制参数。
 */
export interface UserDefineOcrTextReviewTemplateInfoForUpdate {
  /**
   * 用户自定文本审核任务开关，可选值：
<li>ON：开启自定义文本审核任务；</li>
<li>OFF：关闭自定义文本审核任务。</li>
   */
  Switch?: string
  /**
   * 用户自定义文本过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 修改Output配置。
 */
export interface ModifyOutputInfo {
  /**
   * 需要修改的Output的Id。
   */
  OutputId: string
  /**
   * 输出的名称。
   */
  OutputName: string
  /**
   * 输出的描述。
   */
  Description: string
  /**
   * 输出的转推协议，支持SRT|RTP|RTMP|RTMP_PULL|RTSP|RIST。
   */
  Protocol: string
  /**
   * 转推SRT的配置。
   */
  SRTSettings?: CreateOutputSRTSettings
  /**
   * 转推RTP的配置。
   */
  RTPSettings?: CreateOutputInfoRTPSettings
  /**
   * 转推RTMP的配置。
   */
  RTMPSettings?: CreateOutputRTMPSettings
  /**
   * IP白名单列表，格式为CIDR，如0.0.0.0/0。
当Protocol为RTMP_PULL有效，为空代表不限制客户端IP。
   */
  AllowIpList?: Array<string>
  /**
   * 最大拉流并发数，最大4，默认4。
   */
  MaxConcurrent?: number
  /**
   * 绑定的安全组 ID。 仅支持关联一组安全组。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 可用区
   */
  Zones?: Array<string>
  /**
   * 转推RIST的配置。
   */
  RISTSettings?: CreateOutputRistSettings
  /**
   * 输出类型：Internet/TencentCSS/StreamLive
   */
  OutputType?: string
  /**
   * 对于含有多个音/视频轨的流，可以指定需要使用的轨道
   */
  PidSelector?: PidSelector
}

/**
 * 点播文件指定时间点截图信息
 */
export interface MediaSnapshotByTimeOffsetItem {
  /**
   * 指定时间点截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
   */
  Definition: number
  /**
   * 同一规格的截图信息集合，每个元素代表一张截图。
   */
  PicInfoSet: Array<MediaSnapshotByTimePicInfoItem>
  /**
   * 指定时间点截图文件的存储位置。
   */
  Storage: TaskOutputStorage
}

/**
 * 输出文件名的`{number}`变量的规则。
 */
export interface NumberFormat {
  /**
   * `{number}`变量的起始值，默认为0。
   */
  InitialValue?: number
  /**
   * `{number}`变量的增长步长，默认为1。
   */
  Increment?: number
  /**
   * `{number}`变量的最小长度，不足时补占位符。默认为1。
   */
  MinLength?: number
  /**
   * `{number}`变量的长度不足时，补充的占位符。默认为"0"。
   */
  PlaceHolder?: string
}

/**
 * ModifySampleSnapshotTemplate请求参数结构体
 */
export interface ModifySampleSnapshotTemplateRequest {
  /**
   * 采样截图模板唯一标识。
   */
  Definition: number
  /**
   * 采样截图模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width?: number
  /**
   * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height?: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive?: string
  /**
   * 采样截图类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
   */
  SampleType?: string
  /**
   * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
   */
  SampleInterval?: number
  /**
   * 图片格式，取值为 jpg、png、webp。
   */
  Format?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
   */
  FillType?: string
}

/**
 * 内容审核 Ocr 文字敏感任务输入参数类型
 */
export interface AiReviewPoliticalOcrTaskInput {
  /**
   * 模板 ID。
   */
  Definition: number
}

/**
 * ManageTask请求参数结构体
 */
export interface ManageTaskRequest {
  /**
   * 操作类型，取值范围：
<ul>
<li>Abort：终止任务。使用说明：
<ul><li>若 [任务类型](/document/product/862/37614#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0) 为直播流处理任务（LiveStreamProcessTask），支持终止 [任务状态](/document/product/862/37614#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0) 为等待中（WAITING）或处理中（PROCESSING）的任务；</li>
<li>否则，对于其他 [任务类型](/document/product/862/37614#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)，只支持终止 [任务状态](/document/product/862/37614#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0) 为等待中（WAITING）的任务。</li></ul>
</li></ul>
   */
  OperationType: string
  /**
   * 视频处理的任务 ID。
   */
  TaskId: string
}

/**
 * 查询Flow的配置信息。
 */
export interface FlowInOutResp {
  /**
   * 流Id。
   */
  FlowId?: string
  /**
   * 流名称。
   */
  FlowName?: string
  /**
   * 该Flow关联的媒体传输事件EventId。
   */
  EventId?: string
  /**
   * 媒体传输输入流所属的区域，取值和InputRegion相同。
   */
  FlowRegion?: string
  /**
   * 当返回是输出类型时非空，output所在Region。
   */
  OutputRegion?: string
  /**
   * EventName。
   */
  EventName?: string
  /**
   * InOutType为Input有效。
   */
  InputName?: string
  /**
   * InOutType为Output有效。
   */
  OutputName?: string
  /**
   * Input或者Output的Id。
   */
  InOutId?: string
  /**
   * 输入/输出类型，可选值：
Input：输入
Outpu：输出。
   */
  InOutType?: string
}

/**
 * 音视频增强配置
 */
export interface EnhanceConfig {
  /**
   * 视频增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoEnhance?: VideoEnhanceConfig
  /**
   * 音频增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioEnhance?: AudioEnhanceConfig
}

/**
 * 媒体处理的输入对象信息。
 */
export interface MediaInputInfo {
  /**
   * 输入来源对象的类型，支持：
<li> COS：COS源</li>
<li> URL：URL源</li>
<li> AWS-S3：AWS 源，目前只支持转码任务 </li>
   */
  Type: string
  /**
   * 当 Type 为 COS 时有效，则该项为必填，表示媒体处理 COS 对象信息。
   */
  CosInputInfo?: CosInputInfo
  /**
   * 当 Type 为 URL 时有效，则该项为必填，表示媒体处理 URL 对象信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UrlInputInfo?: UrlInputInfo
  /**
   * 当 Type 为 AWS-S3 时有效，则该项为必填，表示媒体处理 AWS S3 对象信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3InputInfo?: S3InputInfo
}

/**
 * CreateWorkflow请求参数结构体
 */
export interface CreateWorkflowRequest {
  /**
   * 工作流名称，最多128字符。同一个用户该名称唯一。
   */
  WorkflowName: string
  /**
   * 工作流绑定的触发规则，当上传视频命中该规则到该对象时即触发工作流。
   */
  Trigger: WorkflowTrigger
  /**
   * 媒体处理的文件输出存储位置。不填则继承 Trigger 中的存储位置。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 媒体处理生成的文件输出的目标目录，必选以 / 开头和结尾，如`/movie/201907/`。
如果不填，表示与触发文件所在的目录一致。
   */
  OutputDir?: string
  /**
   * 媒体处理类型任务参数。
   */
  MediaProcessTask?: MediaProcessTaskInput
  /**
   * 视频内容审核类型任务参数。
   */
  AiContentReviewTask?: AiContentReviewTaskInput
  /**
   * 视频内容分析类型任务参数。
   */
  AiAnalysisTask?: AiAnalysisTaskInput
  /**
   * 视频内容识别类型任务参数。
   */
  AiRecognitionTask?: AiRecognitionTaskInput
  /**
   * 任务的事件通知配置，不填代表不获取事件通知。
   */
  TaskNotifyConfig?: TaskNotifyConfig
  /**
   * 工作流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
   */
  TaskPriority?: number
}

/**
 * ModifyStreamLinkEvent请求参数结构体
 */
export interface ModifyStreamLinkEventRequest {
  /**
   * 媒体传输事件Event Id。
   */
  EventId: string
  /**
   * 需要修改的事件名称。
   */
  EventName: string
  /**
   * Event的描述信息。
   */
  Description?: string
}

/**
 * 文本关键词识别控制参数。
 */
export interface OcrWordsConfigureInfo {
  /**
   * 文本关键词识别任务开关，可选值：
<li>ON：开启文本关键词识别任务；</li>
<li>OFF：关闭文本关键词识别任务。</li>
   */
  Switch: string
  /**
   * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
}

/**
 * DescribeStreamLinkEvent请求参数结构体
 */
export interface DescribeStreamLinkEventRequest {
  /**
   * 媒体传输事件ID。
   */
  EventId: string
}

/**
 * 转码信息
 */
export interface MediaTranscodeItem {
  /**
   * 转码后文件的目标存储。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 转码后的视频文件路径。
   */
  Path?: string
  /**
   * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/862/37042)。
   */
  Definition?: number
  /**
   * 视频流码率平均值与音频流码率平均值之和， 单位：bps。
   */
  Bitrate?: number
  /**
   * 视频流高度的最大值，单位：px。
   */
  Height?: number
  /**
   * 视频流宽度的最大值，单位：px。
   */
  Width?: number
  /**
   * 媒体文件总大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
   */
  Size?: number
  /**
   * 视频时长，单位：秒。
   */
  Duration?: number
  /**
   * 容器类型，例如 m4a，mp4 等。
   */
  Container?: string
  /**
   * 视频的 md5 值。
   */
  Md5?: string
  /**
   * 音频流信息。
   */
  AudioStreamSet?: Array<MediaAudioStreamItem>
  /**
   * 视频流信息。
   */
  VideoStreamSet?: Array<MediaVideoStreamItem>
}

/**
 * 诊断结果项。
 */
export interface DiagnoseResult {
  /**
   * 诊断出的异常类别，取值范围：
DecodeParamException：解码参数异常
TimeStampException：时间戳异常
FrameException： 帧率异常
StreamStatusException：流状态异常
StreamInfo：流信息异常
StreamAbnormalCharacteristics：流特征异常
DecodeException：解码异常
HLSRequirements：HLS 格式异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
  /**
   * 诊断出的具体异常类型，取值如下：

VideoResolutionChanged：视频分辨率变化
AudioSampleRateChanged：音频采样率变化
AudioChannelsChanged：音频通道数变化
ParameterSetsChanged：流参数集信息发生变化
DarOrSarInvalid：视频的宽高比异常
TimestampFallback：DTS时间戳回退
DtsJitter：DTS抖动过大
PtsJitter：PTS抖动过大
AACDurationDeviation：AAC帧时间戳间隔不合理
AudioDroppingFrames：音频丢帧
VideoDroppingFrames：视频丢帧
AVTimestampInterleave：音视频交织不合理
PtsLessThanDts：媒体流的 pts 小于 dts
ReceiveFpsJitter：网络接收帧率抖动过大
ReceiveFpsTooSmall：网络接收视频帧率过小
FpsJitter：通过PTS计算得到的流帧率抖动过大
StreamOpenFailed：流打开失败
StreamEnd：流结束
StreamParseFailed：流解析失败
VideoFirstFrameNotIdr：首帧不是IDR帧
StreamNALUError：NALU起始码错误
TsStreamNoAud：mpegts的H26x流缺失 AUD NALU
AudioStreamLack：无音频流
VideoStreamLack：无视频流
LackAudioRecover：缺失音频流恢复
LackVideoRecover：缺失视频流恢复
VideoBitrateOutofRange：视频流码率(kbps)超出范围
AudioBitrateOutofRange：音频流码率(kbps)超出范围
VideoDecodeFailed：视频解码错误
AudioDecodeFailed：音频解码错误
AudioOutOfPhase：双通道音频相位相反
VideoDuplicatedFrame：视频流中存在重复帧
AudioDuplicatedFrame：音频流中存在重复帧
VideoRotation：视频画面旋转
TsMultiPrograms：MPEG2-TS流有多个program
Mp4InvalidCodecFourcc：MP4中codec fourcc不符合Apple HLS要求
HLSBadM3u8Format：无效的m3u8文件
HLSInvalidMasterM3u8：无效的main m3u8文件
HLSInvalidMediaM3u8：无效的media m3u8文件
HLSMasterM3u8Recommended：main m3u8缺少标准推荐的参数
HLSMediaM3u8Recommended：media m3u8缺少标准推荐的参数
HLSMediaM3u8DiscontinuityExist：media m3u8存在EXT-X-DISCONTINUITY
HLSMediaSegmentsStreamNumChange：切片的流数目发生变化
HLSMediaSegmentsPTSJitterDeviation：切片间PTS跳变且没有EXT-X-DISCONTINUITY
HLSMediaSegmentsDTSJitterDeviation：切片间DTS跳变且没有EXT-X-DISCONTINUITY
TimecodeTrackExist：MP4存在tmcd轨道
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 诊断出异常开始的PTS时间戳。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: number
  /**
   * 诊断出的异常描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 诊断到异常的北京时间，采用 ISO 日期格式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DateTime?: string
  /**
   * 诊断出的异常级别，取值范围：
Fatal：影响后续播放和解析，
Error： 可能会影响播放，
Warning： 可能会有潜在风险，但不一定会影响播放，
Notice：比较重要的流信息，
Info：一般性的流信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SeverityLevel?: string
}

/**
 * 自定义水印规格参数。
 */
export interface RawWatermarkParameter {
  /**
   * 水印类型，可选值：
<li>image：图片水印。</li>
   */
  Type: string
  /**
   * 原点位置，目前仅支持：
<li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角。</li>
默认值：TopLeft。
   */
  CoordinateOrigin?: string
  /**
   * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
   */
  XPos?: string
  /**
   * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
   */
  YPos?: string
  /**
   * 图片水印模板，当 Type 为 image，该字段必填。当 Type 为 text，该字段无效。
   */
  ImageTemplate?: RawImageWatermarkInput
}

/**
 * 内容审核 Ocr 文字敏感任务结果类型
 */
export interface AiReviewTaskPoliticalOcrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS，FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核 Ocr 文字敏感任务输入。
   */
  Input?: AiReviewPoliticalOcrTaskInput
  /**
   * 内容审核 Ocr 文字敏感任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewPoliticalOcrTaskOutput
}

/**
 * AI 样本管理，关键词输出信息。
 */
export interface AiSampleWord {
  /**
   * 关键词。
   */
  Keyword: string
  /**
   * 关键词标签。
   */
  TagSet: Array<string>
  /**
   * 关键词应用场景。
   */
  UsageSet: Array<string>
  /**
   * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string
  /**
   * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime: string
}

/**
 * 自定义转码的规格参数。用于覆盖模板中对应参数值。
 */
export interface OverrideTranscodeParameter {
  /**
   * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
   */
  Container?: string
  /**
   * 是否去除视频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
   */
  RemoveVideo?: number
  /**
   * 是否去除音频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
   */
  RemoveAudio?: number
  /**
   * 视频流配置参数。
   */
  VideoTemplate?: VideoTemplateInfoForUpdate
  /**
   * 音频流配置参数。
   */
  AudioTemplate?: AudioTemplateInfoForUpdate
  /**
   * 极速高清转码参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TEHDConfig?: TEHDConfigForUpdate
  /**
   * 字幕流配置参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubtitleTemplate?: SubtitleTemplate
  /**
   * 外挂音轨参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddonAudioStream?: Array<MediaInputInfo>
  /**
   * 转码扩展字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StdExtInfo?: string
  /**
   * 要插入的字幕文件。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddOnSubtitles?: Array<AddOnSubtitle>
}

/**
 * 文本涉敏任务控制参数
 */
export interface PoliticalOcrReviewTemplateInfo {
  /**
   * 文本涉敏任务开关，可选值：
<li>ON：开启文本涉敏任务；</li>
<li>OFF：关闭文本涉敏任务。</li>
   */
  Switch: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * CreateImageSpriteTemplate请求参数结构体
 */
export interface CreateImageSpriteTemplateRequest {
  /**
   * 采样类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
   */
  SampleType: string
  /**
   * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
   */
  SampleInterval: number
  /**
   * 雪碧图中小图的行数。
   */
  RowCount: number
  /**
   * 雪碧图中小图的列数。
   */
  ColumnCount: number
  /**
   * 雪碧图模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width?: number
  /**
   * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height?: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive?: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
   */
  FillType?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 图片格式，取值为 jpg、png、webp。默认为 jpg。
   */
  Format?: string
}

/**
 * 指定时间点截图信息
 */
export interface MediaSnapshotByTimePicInfoItem {
  /**
   * 该张截图对应视频文件中的时间偏移，单位为秒。
   */
  TimeOffset: number
  /**
   * 该张截图的路径。
   */
  Path: string
  /**
   * 截图如果被打上了水印，被打水印的模板 ID 列表。
   */
  WaterMarkDefinition: Array<number | bigint>
}

/**
 * 用户自定义人物审核任务控制参数
 */
export interface UserDefineFaceReviewTemplateInfo {
  /**
   * 用户自定义人物审核任务开关，可选值：
<li>ON：开启自定义人物审核任务；</li>
<li>OFF：关闭自定义人物审核任务。</li>
   */
  Switch: string
  /**
   * 用户自定义人物过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 创建的输入HLS拉流的配置信息。
 */
export interface CreateInputHLSPullSettings {
  /**
   * HLS源站的源站地址，有且只能有一个。
   */
  SourceAddresses: Array<HLSPullSourceAddress>
}

/**
 * DeleteStreamLinkSecurityGroup请求参数结构体
 */
export interface DeleteStreamLinkSecurityGroupRequest {
  /**
   * 安全组 ID。
   */
  Id: string
}

/**
 * 内容审核模板详情
 */
export interface ContentReviewTemplateItem {
  /**
   * 内容审核模板唯一标识。
   */
  Definition: number
  /**
   * 内容审核模板名称，长度限制：64 个字符。
   */
  Name: string
  /**
   * 内容审核模板描述信息，长度限制：256 个字符。
   */
  Comment: string
  /**
   * 鉴黄控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PornConfigure: PornConfigureInfo
  /**
   * 涉敏控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TerrorismConfigure: TerrorismConfigureInfo
  /**
   * 涉敏控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoliticalConfigure: PoliticalConfigureInfo
  /**
   * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProhibitedConfigure: ProhibitedConfigureInfo
  /**
   * 用户自定义内容审核控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserDefineConfigure: UserDefineConfigureInfo
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime: string
  /**
   * 模板类型，取值范围：
* Preset：系统预置模板；
* Custom：用户自定义模板。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
}

/**
 * ModifyStreamLinkFlow返回参数结构体
 */
export interface ModifyStreamLinkFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAIRecognitionTemplate返回参数结构体
 */
export interface DeleteAIRecognitionTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频增强配置
 */
export interface VideoEnhanceConfig {
  /**
   * 插帧帧率配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameRate?: FrameRateConfig
  /**
   * 超分配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuperResolution?: SuperResolutionConfig
  /**
   * HDR配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hdr?: HdrConfig
  /**
   * 视频降噪配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Denoise?: VideoDenoiseConfig
  /**
   * 综合增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageQualityEnhance?: ImageQualityEnhanceConfig
  /**
   * 色彩增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColorEnhance?: ColorEnhanceConfig
  /**
   * 细节增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SharpEnhance?: SharpEnhanceConfig
  /**
   * 人脸增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FaceEnhance?: FaceEnhanceConfig
  /**
   * 低光照增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LowLightEnhance?: LowLightEnhanceConfig
  /**
   * 去划痕配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScratchRepair?: ScratchRepairConfig
  /**
   * 去伪影（毛刺）配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ArtifactRepair?: ArtifactRepairConfig
}

/**
 * DeleteContentReviewTemplate请求参数结构体
 */
export interface DeleteContentReviewTemplateRequest {
  /**
   * 内容审核模板唯一标识。
   */
  Definition: number
}

/**
 * StartStreamLinkFlow返回参数结构体
 */
export interface StartStreamLinkFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内容审核敏感任务输入参数类型
 */
export interface AiReviewPoliticalTaskInput {
  /**
   * 模板 ID。
   */
  Definition: number
}

/**
 * ModifySchedule请求参数结构体
 */
export interface ModifyScheduleRequest {
  /**
   * 编排唯一标识。
   */
  ScheduleId: number
  /**
   * 编排名称。
   */
  ScheduleName?: string
  /**
   * 编排绑定的触发规则。
   */
  Trigger?: WorkflowTrigger
  /**
   * 编排任务列表。
注意：内部不允许部分更新，如果需要更新需全量提交编排任务列表。
   */
  Activities?: Array<Activity>
  /**
   * 媒体处理的文件输出存储位置。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 媒体处理生成的文件输出的目标目录，必选以 / 开头和结尾。
注意：如果设置为空，则表示取消老配置的OutputDir值。
   */
  OutputDir?: string
  /**
   * 任务的事件通知配置。
   */
  TaskNotifyConfig?: TaskNotifyConfig
  /**
   * 资源ID，需要保证对应资源是开启状态。
   */
  ResourceId?: string
}

/**
 * 点播媒体文件元信息
 */
export interface MediaMetaData {
  /**
   * 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
   */
  Size?: number
  /**
   * 容器类型，例如 m4a，mp4 等。
   */
  Container?: string
  /**
   * 视频流码率平均值与音频流码率平均值之和，单位：bps。
   */
  Bitrate?: number
  /**
   * 视频流高度的最大值，单位：px。
   */
  Height?: number
  /**
   * 视频流宽度的最大值，单位：px。
   */
  Width?: number
  /**
   * 视频时长，单位：秒。
   */
  Duration?: number
  /**
   * 视频拍摄时的选择角度，单位：度。
   */
  Rotate?: number
  /**
   * 视频流信息。
   */
  VideoStreamSet?: Array<MediaVideoStreamItem>
  /**
   * 音频流信息。
   */
  AudioStreamSet?: Array<MediaAudioStreamItem>
  /**
   * 视频时长，单位：秒。
   */
  VideoDuration?: number
  /**
   * 音频时长，单位：秒。
   */
  AudioDuration?: number
}

/**
 * 创建媒体传输流的输出的RTP的目标地址。
 */
export interface CreateOutputRTPSettingsDestinations {
  /**
   * 转推的目标IP。
   */
  Ip: string
  /**
   * 转推的目标端口。
   */
  Port: number
}

/**
 * 智能分类任务控制参数
 */
export interface ClassificationConfigureInfo {
  /**
   * 智能分类任务开关，可选值：
<li>ON：开启智能分类任务；</li>
<li>OFF：关闭智能分类任务。</li>
   */
  Switch: string
}

/**
 * 智能分类结果
 */
export interface MediaAiAnalysisClassificationItem {
  /**
   * 智能分类的类别名称。
   */
  Classification: string
  /**
   * 智能分类的可信度，取值范围是 0 到 100。
   */
  Confidence: number
}

/**
 * ModifyWordSample返回参数结构体
 */
export interface ModifyWordSampleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 音频流配置参数
 */
export interface AudioTemplateInfoForUpdate {
  /**
   * 音频流的编码格式。
当不需要对音频进行转码时，可选值为：
<li>copy。</li>
当外层参数 Container 为 mp3 时，可选值为：
<li>mp3。</li>
当外层参数 Container 为 ogg 或 flac 时，可选值为：
<li>flac。</li>
当外层参数 Container 为 m4a 时，可选值为：
<li>aac；</li>
<li>ac3。</li>
当外层参数 Container 为 mp4 或 flv 时，可选值为：
<li>aac：更适合 mp4；</li>
<li>mp3：更适合 flv；</li>
<li>mp2。</li>
当外层参数 Container 为 hls 时，可选值为：
<li>aac；</li>
<li>mp3。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Codec?: string
  /**
   * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。 当取值为 0，表示音频码率和原始音频保持一致。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bitrate?: number
  /**
   * 音频流的采样率，可选值：
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SampleRate?: number
  /**
   * 音频通道方式，可选值：
<li>1：单通道</li>
<li>2：双通道</li>
<li>6：5.1声道</li>
当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为5.1声道。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioChannel?: number
  /**
   * 指定输出要保留的音频轨道。默认是全部保留源的。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamSelects?: Array<number | bigint>
}

/**
 * 工作流信息详情。
 */
export interface WorkflowInfo {
  /**
   * 工作流 ID。
   */
  WorkflowId: number
  /**
   * 工作流名称。
   */
  WorkflowName: string
  /**
   * 工作流状态，取值范围：
<li>Enabled：已启用，</li>
<li>Disabled：已禁用。</li>
   */
  Status: string
  /**
   * 工作流绑定的输入规则，当上传视频命中该规则到该对象时即触发工作流。
   */
  Trigger: WorkflowTrigger
  /**
   * 媒体处理的文件输出存储位置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage: TaskOutputStorage
  /**
   * 媒体处理类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MediaProcessTask: MediaProcessTaskInput
  /**
   * 视频内容审核类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiContentReviewTask: AiContentReviewTaskInput
  /**
   * 视频内容分析类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiAnalysisTask: AiAnalysisTaskInput
  /**
   * 视频内容识别类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiRecognitionTask: AiRecognitionTaskInput
  /**
   * 任务的事件通知信息，不填代表不获取事件通知。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskNotifyConfig: TaskNotifyConfig
  /**
   * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
   */
  TaskPriority: number
  /**
   * 媒体处理生成的文件输出的目标目录，如`/movie/201907/`。
   */
  OutputDir: string
  /**
   * 工作流创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string
  /**
   * 工作流最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime: string
}

/**
 * 超分配置
 */
export interface SuperResolutionConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 类型，可选值：
<li>lq：针对低清晰度有较多噪声视频的超分；</li>
<li>hq：针对高清晰度视频超分。</li>
默认值：lq。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 超分倍数，可选值：
<li>2：目前只支持 2 倍超分。</li>
默认值：2。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
}

/**
 * DeletePersonSample请求参数结构体
 */
export interface DeletePersonSampleRequest {
  /**
   * 素材 ID。
   */
  PersonId: string
}

/**
 * DescribeStreamLinkFlows返回参数结构体
 */
export interface DescribeStreamLinkFlowsResponse {
  /**
   * 流的配置信息列表。
   */
  Infos: Array<DescribeFlow>
  /**
   * 当前页数。
   */
  PageNum: number
  /**
   * 每页大小。
   */
  PageSize: number
  /**
   * 总数量。
   */
  TotalNum: number
  /**
   * 总页数。
   */
  TotalPage: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音识别片段。
 */
export interface AiRecognitionTaskAsrWordsSegmentItem {
  /**
   * 识别片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 识别片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
}

/**
 * 内容审核结果
 */
export interface AiContentReviewResult {
  /**
   * 任务的类型，可以取的值有：
<li>Porn：图片鉴黄</li>
<li>Terrorism：图片敏感</li>
<li>Political：图片敏感</li>
<li>Porn.Asr：Asr 文字鉴黄</li>
<li>Porn.Ocr：Ocr 文字鉴黄</li>
<li>Political.Asr：Asr 文字敏感</li>
<li>Political.Ocr：Ocr 文字敏感</li>
<li>Terrorism.Ocr：Ocr 文字敏感</li>
<li>Prohibited.Asr：Asr 文字鉴违禁</li>
<li>Prohibited.Ocr：Ocr 文字鉴违禁</li>
   */
  Type: string
  /**
   * 采样频率，即对视频每秒截取进行审核的帧数。
   */
  SampleRate: number
  /**
   * 审核的视频时长，单位：秒。
   */
  Duration: number
  /**
   * 视频内容审核智能画面鉴黄任务的查询结果，当任务类型为 Porn 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PornTask: AiReviewTaskPornResult
  /**
   * 视频内容审核智能画面敏感任务的查询结果，当任务类型为 Terrorism 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TerrorismTask: AiReviewTaskTerrorismResult
  /**
   * 视频内容审核智能画面敏感任务的查询结果，当任务类型为 Political 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoliticalTask: AiReviewTaskPoliticalResult
  /**
   * 视频内容审核 Asr 文字鉴黄任务的查询结果，当任务类型为 Porn.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PornAsrTask: AiReviewTaskPornAsrResult
  /**
   * 视频内容审核 Ocr 文字鉴黄任务的查询结果，当任务类型为 Porn.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PornOcrTask: AiReviewTaskPornOcrResult
  /**
   * 视频内容审核 Asr 文字敏感任务的查询结果，当任务类型为 Political.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoliticalAsrTask: AiReviewTaskPoliticalAsrResult
  /**
   * 视频内容审核 Ocr 文字敏感任务的查询结果，当任务类型为 Political.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoliticalOcrTask: AiReviewTaskPoliticalOcrResult
  /**
   * 视频内容审核 Ocr 文字敏感任务的查询结果，当任务类型为 Terrorism.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TerrorismOcrTask: AiReviewTaskTerrorismOcrResult
  /**
   * 视频内容审核 Asr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProhibitedAsrTask: AiReviewTaskProhibitedAsrResult
  /**
   * 视频内容审核 Ocr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProhibitedOcrTask: AiReviewTaskProhibitedOcrResult
}

/**
 * ParseLiveStreamProcessNotification返回参数结构体
 */
export interface ParseLiveStreamProcessNotificationResponse {
  /**
   * 直播流处理结果类型，包含：
<li>AiReviewResult：内容审核结果；</li>
<li>AiRecognitionResult：内容识别结果；</li>
<li>LiveRecordResult：直播录制结果；</li>
<li>AiQualityControlResult：媒体质检结果；</li>
<li>ProcessEof：直播流处理结束。</li>
   */
  NotificationType?: string
  /**
   * 视频处理任务 ID。
   */
  TaskId?: string
  /**
   * 直播流处理错误信息，当 NotificationType 为 ProcessEof 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessEofInfo?: LiveStreamProcessErrorInfo
  /**
   * 内容审核结果，当 NotificationType 为 AiReviewResult 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiReviewResultInfo?: LiveStreamAiReviewResultInfo
  /**
   * 内容识别结果，当 NotificationType 为 AiRecognitionResult 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiRecognitionResultInfo?: LiveStreamAiRecognitionResultInfo
  /**
   * 内容分析结果，当 NotificationType 为 AiAnalysisResult 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiAnalysisResultInfo?: LiveStreamAiAnalysisResultInfo
  /**
   * 媒体质检结果，当 NotificationType 为 AiQualityControlResult 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiQualityControlResultInfo?: LiveStreamAiQualityControlResultInfo
  /**
   * 直播录制结果，当 NotificationType 为 LiveRecordResult 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiveRecordResultInfo?: LiveStreamRecordResultInfo
  /**
   * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
   */
  SessionId?: string
  /**
   * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
   */
  SessionContext?: string
  /**
   * - 过期时间，事件通知签名过期 UNIX 时间戳。 - 来自媒体处理的消息通知默认过期时间是10分钟，如果一条消息通知中的 Timestamp 值所指定的时间已经过期，则可以判定这条通知无效，进而可以防止网络重放攻击。 - Timestamp 的格式为十进制 UNIX 时间戳，即从1970年01月01日（UTC/GMT 的午夜）开始所经过的秒数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: number
  /**
   * 事件通知安全签名 Sign = MD5（Timestamp + NotifyKey）。说明：媒体处理把Timestamp 和 TaskNotifyConfig 里面的NotifyKey 进行字符串拼接后通过 MD5 计算得出 Sign 值，并将其放在通知消息里，您的后台服务器在收到通知消息后可以根据同样的算法确认 Sign 是否正确，进而确认消息是否确实来自媒体处理后台。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sign?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoDatabaseEntryTaskDetail请求参数结构体
 */
export interface DescribeVideoDatabaseEntryTaskDetailRequest {
  /**
   * 待查询的任务Id
   */
  TaskId: string
}

/**
 * 视频内容识别输入参数类型
 */
export interface AiRecognitionTaskInput {
  /**
   * 视频智能识别模板 ID 。
   */
  Definition: number
  /**
   * 用户扩展字段，一般场景不用填。
   */
  UserExtPara?: string
}

/**
 * 音频流配置参数
 */
export interface AudioTemplateInfo {
  /**
   * 音频流的编码格式。
当不需要对音频进行转码时，可选值为：
<li>copy。</li>
当外层参数 Container 为 mp3 时，可选值为：
<li>mp3。</li>
当外层参数 Container 为 ogg 或 flac 时，可选值为：
<li>flac。</li>
当外层参数 Container 为 m4a 时，可选值为：
<li>aac；</li>
<li>ac3。</li>
当外层参数 Container 为 mp4 或 flv 时，可选值为：
<li>aac：更适合 mp4；</li>
<li>mp3：更适合 flv；</li>
<li>mp2。</li>
当外层参数 Container 为 hls 时，可选值为：
<li>aac；</li>
<li>mp3。</li>
   */
  Codec: string
  /**
   * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。
当取值为 0，表示音频码率和原始音频保持一致。
   */
  Bitrate: number
  /**
   * 音频流的采样率，可选值：
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
   */
  SampleRate: number
  /**
   * 音频通道方式，可选值：
<li>1：单通道</li>
<li>2：双通道</li>
<li>6：5.1声道</li>
当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为5.1声道。
默认值：2。
   */
  AudioChannel?: number
}

/**
 * ExecuteFunction返回参数结构体
 */
export interface ExecuteFunctionResponse {
  /**
   * 处理结果打包后的字符串，具体与后台一同协调。
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能封面任务控制参数
 */
export interface CoverConfigureInfo {
  /**
   * 智能封面任务开关，可选值：
<li>ON：开启智能封面任务；</li>
<li>OFF：关闭智能封面任务。</li>
   */
  Switch: string
}

/**
 * 视频内容识别模板详情
 */
export interface AIRecognitionTemplateItem {
  /**
   * 视频内容识别模板唯一标识。
   */
  Definition?: number
  /**
   * 视频内容识别模板名称。
   */
  Name?: string
  /**
   * 视频内容识别模板描述信息。
   */
  Comment?: string
  /**
   * 人脸识别控制参数。
   */
  FaceConfigure?: FaceConfigureInfo
  /**
   * 文本全文识别控制参数。
   */
  OcrFullTextConfigure?: OcrFullTextConfigureInfo
  /**
   * 文本关键词识别控制参数。
   */
  OcrWordsConfigure?: OcrWordsConfigureInfo
  /**
   * 语音全文识别控制参数。
   */
  AsrFullTextConfigure?: AsrFullTextConfigureInfo
  /**
   * 语音关键词识别控制参数。
   */
  AsrWordsConfigure?: AsrWordsConfigureInfo
  /**
   * 语音翻译控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranslateConfigure?: TranslateConfigureInfo
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime?: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime?: string
  /**
   * 模板类型，取值范围：
* Preset：系统预置模板；
* Custom：用户自定义模板。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * 内容审核 Asr 文字鉴黄任务输入参数类型
 */
export interface AiReviewPornAsrTaskInput {
  /**
   * 鉴黄模板 ID。
   */
  Definition: number
}

/**
 * 人脸识别结果。
 */
export interface AiRecognitionTaskFaceResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 人脸识别任务输入信息。
   */
  Input?: AiRecognitionTaskFaceResultInput
  /**
   * 人脸识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiRecognitionTaskFaceResultOutput
}

/**
 * CreateAdaptiveDynamicStreamingTemplate请求参数结构体
 */
export interface CreateAdaptiveDynamicStreamingTemplateRequest {
  /**
   * 自适应转码格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
   */
  Format: string
  /**
   * 转自适应码流输出子流参数信息，最多输出10路子流。
注意：各个子流的帧率必须保持一致；如果不一致，采用第一个子流的帧率作为输出帧率。
   */
  StreamInfos: Array<AdaptiveStreamTemplate>
  /**
   * 模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
默认为否。
   */
  DisableHigherVideoBitrate?: number
  /**
   * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
默认为否。
   */
  DisableHigherVideoResolution?: number
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 是否为纯音频，0表示视频模板，1表示纯音频模板
当值为1：
1. StreamInfos.N.RemoveVideo=1
2. StreamInfos.N.RemoveAudio=0
3. StreamInfos.N.Video.Codec=copy
当值为0：
1. StreamInfos.N.Video.Codec不能为copy
2. StreamInfos.N.Video.Fps不能为null
注意：
此值只是区分模板类型，任务使用RemoveAudio和RemoveVideo的值
   */
  PureAudio?: number
  /**
   * hls 分片类型，可选值： <li>ts-segment：HLS+TS 切片</li> <li>ts-byterange：HLS+TS byte range</li> <li>mp4-segment：HLS+MP4 切片</li> <li>mp4-byterange：HLS+MP4 byte range</li> <li>ts-packed-audio：TS+Packed Audio</li> <li>mp4-packed-audio：MP4+Packed Audio</li> 默认值：ts-segment 
注：自适应码流的hls分片格式已此字段为准
   */
  SegmentType?: string
}

/**
 * 创建的输入RTMP拉流的配置信息。
 */
export interface CreateInputRTMPPullSettings {
  /**
   * RTMP源站的源站地址，有且只能有一个。
   */
  SourceAddresses: Array<RTMPPullSourceAddress>
}

/**
 * 画面涉敏任务控制参数。
 */
export interface TerrorismImgReviewTemplateInfoForUpdate {
  /**
   * 画面涉敏任务开关，可选值：
<li>ON：开启画面涉敏任务；</li>
<li>OFF：关闭画面涉敏任务。</li>
   */
  Switch?: string
  /**
   * 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>guns：武器枪支；</li>
<li>crowd：人群聚集；</li>
<li>bloody：血腥画面；</li>
<li>police：警察部队；</li>
<li>banners：涉敏旗帜；</li>
<li>militant：武装分子；</li>
<li>explosion：爆炸火灾；</li>
<li>terrorists：涉敏人物；</li>
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * ModifyTranscodeTemplate请求参数结构体
 */
export interface ModifyTranscodeTemplateRequest {
  /**
   * 转码模板唯一标识。
   */
  Definition: number
  /**
   * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
   */
  Container?: string
  /**
   * 转码模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 是否去除视频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
   */
  RemoveVideo?: number
  /**
   * 是否去除音频数据，可选值：
<li>0：保留</li>
<li>1：去除</li>
   */
  RemoveAudio?: number
  /**
   * 视频流配置参数。
   */
  VideoTemplate?: VideoTemplateInfoForUpdate
  /**
   * 音频流配置参数。
   */
  AudioTemplate?: AudioTemplateInfoForUpdate
  /**
   * 极速高清转码参数。
   */
  TEHDConfig?: TEHDConfigForUpdate
  /**
   * 音视频增强参数。
   */
  EnhanceConfig?: EnhanceConfig
}

/**
 * ModifyStreamLinkFlow请求参数结构体
 */
export interface ModifyStreamLinkFlowRequest {
  /**
   * 流Id。
   */
  FlowId: string
  /**
   * 需要修改的流名称。
   */
  FlowName: string
}

/**
 * 编辑视频任务的输入。
 */
export interface EditMediaTaskInput {
  /**
   * 输入的视频文件信息。
   */
  FileInfoSet?: Array<EditMediaFileInfo>
}

/**
 * DeleteAIAnalysisTemplate返回参数结构体
 */
export interface DeleteAIAnalysisTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询Event的配置信息。
 */
export interface DescribeEvent {
  /**
   * Event的名称。
   */
  EventName: string
  /**
   * Event的Id，唯一标识一个event。
   */
  EventId: string
  /**
   * Event创建时间，格式为yyyy-MM-ddTHH:mm:ssZ。
   */
  CreateTime: string
  /**
   * Event的描述。
   */
  Description: string
  /**
   * Event的状态信息
0：未运行
1：运行中
   */
  Status: number
  /**
   * Event关联的Flow列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttachedFlowGroup: Array<DescribeFlowId>
}

/**
 * 文字水印模板
 */
export interface TextWatermarkTemplateInputForUpdate {
  /**
   * 字体类型，目前可以支持两种：
<li>simkai.ttf：可以支持中文和英文；</li>
<li>arial.ttf：仅支持英文。</li>
   */
  FontType?: string
  /**
   * 字体大小，格式：Npx，N 为数值。N的取值范围：[0,1] 和 [8, 4096]
   */
  FontSize?: string
  /**
   * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。
   */
  FontColor?: string
  /**
   * 文字透明度，取值范围：(0, 1]
<li>0：完全透明</li>
<li>1：完全不透明</li>
   */
  FontAlpha?: number
  /**
   * 文字内容，长度不超过100个字符。
   */
  TextContent?: string
}

/**
 * 内容审核 Ocr 文字敏感任务输入参数类型
 */
export interface AiReviewTerrorismOcrTaskInput {
  /**
   * 模板 ID。
   */
  Definition: number
}

/**
 * 文本关键词识别输入。
 */
export interface AiRecognitionTaskOcrWordsResultInput {
  /**
   * 文本关键词识别模板 ID。
   */
  Definition: number
}

/**
 * CreateQualityControlTemplate返回参数结构体
 */
export interface CreateQualityControlTemplateResponse {
  /**
   * 媒体质检模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 质检异常项。
 */
export interface QualityControlResult {
  /**
   * 异常类型，取值范围：
Jitter：抖动，
Blur：模糊，
LowLighting：低光照，
HighLighting：过曝，
CrashScreen：花屏，
BlackWhiteEdge：黑白边，
SolidColorScreen：纯色屏，
Noise：噪点，
Mosaic：马赛克，
QRCode：二维码，
AppletCode：小程序码，
BarCode：条形码，
LowVoice：低音，
HighVoice：爆音，
NoVoice：静音，
LowEvaluation：无参考打分低于阈值。
   */
  Type: string
  /**
   * 质检结果项。
   */
  QualityControlItems: Array<QualityControlItem>
}

/**
 * 内容审核鉴黄任务输入参数类型
 */
export interface AiReviewPornTaskInput {
  /**
   * 鉴黄模板 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Definition: number
}

/**
 * HDR配置
 */
export interface HdrConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 类型，可选值：
<li>HDR10</li>
<li>HLG</li>
默认值：HDR10。
注意：video的编码方式需要为h265；
注意：视频编码位深为10。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * 编排任务信息
 */
export interface ScheduleTask {
  /**
   * 编排任务 ID。
   */
  TaskId: string
  /**
   * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
   */
  Status: string
  /**
   * 源异常时返回非0错误码，返回0 时请使用各个具体任务的 ErrCode。
   */
  ErrCode?: number
  /**
   * 源异常时返回对应异常Message，否则请使用各个具体任务的 Message。
   */
  Message?: string
  /**
   * 媒体处理的目标文件信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputInfo: MediaInputInfo
  /**
   * 原始视频的元信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetaData: MediaMetaData
  /**
   * 编排任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivityResultSet: Array<ActivityResult>
}

/**
 * CreateStreamLinkEvent请求参数结构体
 */
export interface CreateStreamLinkEventRequest {
  /**
   * 事件名称。
   */
  EventName: string
  /**
   * 事件描述。
   */
  Description?: string
}

/**
 * CreatePersonSample请求参数结构体
 */
export interface CreatePersonSampleRequest {
  /**
   * 素材名称，长度限制：20 个字符。
   */
  Name: string
  /**
   * 素材应用场景，可选值：
1. Recognition：用于内容识别，等价于 Recognition.Face。
2. Review：用于不适宜内容识别，等价于 Review.Face。
3. All：包含以上全部，等价于 1+2。
   */
  Usages: Array<string>
  /**
   * 素材描述，长度限制：1024 个字符。
   */
  Description?: string
  /**
   * 素材图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 jpeg、png 图片格式。数组长度限制：5 张图片。
注意：图片必须是单人像五官较清晰的照片，像素不低于 200*200。
   */
  FaceContents?: Array<string>
  /**
   * 素材标签
<li>数组长度限制：20 个标签；</li>
<li>单个标签长度限制：128 个字符。</li>
   */
  Tags?: Array<string>
}

/**
 * 图片任务输入参数
 */
export interface ImageTaskInput {
  /**
   * 图片编码配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncodeConfig?: ImageEncodeConfig
  /**
   * 图片增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnhanceConfig?: ImageEnhanceConfig
}

/**
 * 查询输出的HLS拉流URL信息。
 */
export interface DescribeOutputHLSPullServerUrl {
  /**
   * HLS拉流地址的Url。
   */
  Url: string
}

/**
 * DescribeStreamLinkFlowSRTStatistics请求参数结构体
 */
export interface DescribeStreamLinkFlowSRTStatisticsRequest {
  /**
   * 传输流ID。
   */
  FlowId: string
  /**
   * 输入或输出类型，可选[input|output]。
   */
  Type: string
  /**
   * 输入或输出Id。
   */
  InputOutputId: string
  /**
   * 主通道或备通道，可选[0|1]。
   */
  Pipeline: string
  /**
   * 统计的开始时间，默认为前一小时，最多支持查询近7天。
UTC时间，如'2020-01-01T12:00:00Z'。
   */
  StartTime: string
  /**
   * 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。
UTC时间，如'2020-01-01T12:00:00Z'。
   */
  EndTime: string
  /**
   * 查询间隔，可选[5s|1min|5min|15min]。
   */
  Period: string
}

/**
 * 智能封面信息
 */
export interface MediaAiAnalysisCoverItem {
  /**
   * 智能封面存储路径。
   */
  CoverPath: string
  /**
   * 智能封面的可信度，取值范围是 0 到 100。
   */
  Confidence: number
}

/**
 * 媒体处理 COS 对象信息。
 */
export interface CosInputInfo {
  /**
   * 媒体处理对象文件所在的 COS Bucket 名，如 TopRankVideo-125xxx88。
   */
  Bucket: string
  /**
   * 媒体处理对象文件所在的 COS Bucket 所属园区，如 ap-chongqing。
   */
  Region: string
  /**
   * 媒体处理对象文件的输入路径，如`/movie/201907/WildAnimal.mov`。
   */
  Object: string
}

/**
 * CreateSchedule返回参数结构体
 */
export interface CreateScheduleResponse {
  /**
   * 编排 ID。
   */
  ScheduleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能标签任务控制参数
 */
export interface TagConfigureInfo {
  /**
   * 智能标签任务开关，可选值：
<li>ON：开启智能标签任务；</li>
<li>OFF：关闭智能标签任务。</li>
   */
  Switch: string
}

/**
 * 文本关键词识别输出。
 */
export interface AiRecognitionTaskOcrWordsResultOutput {
  /**
   * 文本关键词识别结果集。
   */
  ResultSet: Array<AiRecognitionTaskOcrWordsResultItem>
}

/**
 * 分段信息。
 */
export interface AiParagraphInfo {
  /**
   * 分段摘要
注意：此字段可能返回 null，表示取不到有效值。
   */
  Summary?: string
  /**
   * 分段标题
   */
  Title?: string
  /**
   * 分段关键词
   */
  Keywords?: Array<string>
  /**
   * 分段起始时间点，秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTimeOffset?: number
  /**
   * 分段结束时间点，秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTimeOffset?: number
}

/**
 * 音频分离配置
 */
export interface AudioSeparateConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 场景类型，可选值：
<li>normal：人声背景声场景</li>
<li>music：演唱伴奏场景</li>
默认值：normal。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 输出音轨，可选值：
<li>vocal：输出人声</li>
<li>background：应用场景为normal时输出背景声，应用场景为music时输出伴奏</li>
默认值：vocal。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Track?: string
}

/**
 * DeleteAIRecognitionTemplate请求参数结构体
 */
export interface DeleteAIRecognitionTemplateRequest {
  /**
   * 视频内容识别模板唯一标识。
   */
  Definition: number
}

/**
 * 查询输入的SRT配置信息。
 */
export interface DescribeInputSRTSettings {
  /**
   * SRT模式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * 流Id。
   */
  StreamId?: string
  /**
   * 延迟。
   */
  Latency?: number
  /**
   * 接收延迟。
   */
  RecvLatency?: number
  /**
   * 对端延迟。
   */
  PeerLatency?: number
  /**
   * 对端空闲超时时间。
   */
  PeerIdleTimeout?: number
  /**
   * 解密密钥。
   */
  Passphrase?: string
  /**
   * 密钥长度。
   */
  PbKeyLen?: number
  /**
   * SRT对端地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceAddresses?: Array<SRTSourceAddressResp>
}

/**
 * 智能封面结果类型
 */
export interface AiAnalysisTaskCoverResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 智能封面任务输入。
   */
  Input?: AiAnalysisTaskCoverInput
  /**
   * 智能封面任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskCoverOutput
}

/**
 * 音量美化配置
 */
export interface AudioBeautifyConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 类型，可多选，可选值：
<li>declick：杂音去除</li>
<li>deesser：齿音压制</li>
默认值：declick。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Types?: Array<string>
}

/**
 * CreateStreamLinkSecurityGroup请求参数结构体
 */
export interface CreateStreamLinkSecurityGroupRequest {
  /**
   * 安全组名称，限制大小写、数字和下划线，Region下唯一。
   */
  Name: string
  /**
   * 白名单列表，数量限制[1, 10]。
   */
  Whitelist: Array<string>
}

/**
 * DescribeStreamLinkEvent返回参数结构体
 */
export interface DescribeStreamLinkEventResponse {
  /**
   * 媒体传输事件的配置信息。
   */
  Info: DescribeEvent
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableWorkflow请求参数结构体
 */
export interface EnableWorkflowRequest {
  /**
   * 工作流 ID。
   */
  WorkflowId: number
}

/**
 * CreateStreamLinkFlow返回参数结构体
 */
export interface CreateStreamLinkFlowResponse {
  /**
   * 创建的Flow信息。
   */
  Info?: DescribeFlow
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能分类结果信息
 */
export interface AiAnalysisTaskClassificationOutput {
  /**
   * 视频智能分类列表。
   */
  ClassificationSet: Array<MediaAiAnalysisClassificationItem>
}

/**
 * 转推的目标地址信息。
 */
export interface SRTAddressDestination {
  /**
   * 目标地址的IP。
   */
  Ip?: string
  /**
   * 目标地址的端口。
   */
  Port?: number
}

/**
 * Event管理的Flow列表
 */
export interface DescribeFlowId {
  /**
   * FlowId，唯一标识一个flow。
   */
  FlowId: string
  /**
   * flow所在的区域名称。
   */
  Region: string
}

/**
 * 流状态实时查询接口的流状态信息
 */
export interface FlowRealtimeStatusItem {
  /**
   * 类型，Input|Output。
   */
  Type: string
  /**
   * 输入Id，如果Type为Input，此字段不为空。
   */
  InputId: string
  /**
   * 输出Id，如果Type为Output，此字段不为空。
   */
  OutputId: string
  /**
   * 流Id。
   */
  FlowId: string
  /**
   * 协议， SRT | RTMP。
   */
  Protocol: string
  /**
   * 共同状态信息。
   */
  CommonStatus: FlowRealtimeStatusCommon
  /**
   * 如果是SRT协议则有此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SRTStatus: FlowRealtimeStatusSRT
  /**
   * 如果是RTMP协议则有此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTMPStatus: FlowRealtimeStatusRTMP
  /**
   * 服务器IP。
   */
  ConnectServerIP: string
  /**
   * 如果是RTP协议则有此字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTPStatus: FlowRealtimeStatusRTP
}

/**
 * DisassociateSecurityGroup返回参数结构体
 */
export interface DisassociateSecurityGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本全文识别输出。
 */
export interface AiRecognitionTaskOcrFullTextResultOutput {
  /**
   * 文本全文识别结果集。
   */
  SegmentSet: Array<AiRecognitionTaskOcrFullTextSegmentItem>
}

/**
 * 智能精彩片段结果类型
 */
export interface AiAnalysisTaskHighlightResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，0：成功，其他值：失败。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 智能精彩片段任务输入。
   */
  Input?: AiAnalysisTaskHighlightInput
  /**
   * 智能精彩片段任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskHighlightOutput
}

/**
 * 视频编辑/合成任务 元素转场信息。
 */
export interface ComposeTransitionOperation {
  /**
   * 转场类型。

图像的转场操作，用于两个视频片段图像间的转场处理：
<li>ImageFadeInFadeOut：图像淡入淡出。</li>
<li>BowTieHorizontal：水平蝴蝶结。</li>
<li>BowTieVertical：垂直蝴蝶结。</li>
<li>ButterflyWaveScrawler：晃动。</li>
<li>Cannabisleaf：枫叶。</li>
<li>Circle：弧形收放。</li>
<li>CircleCrop：圆环聚拢。</li>
<li>Circleopen：椭圆聚拢。</li>
<li>Crosswarp：横向翘曲。</li>
<li>Cube：立方体。</li>
<li>DoomScreenTransition：幕布。</li>
<li>Doorway：门廊。</li>
<li>Dreamy：波浪。</li>
<li>DreamyZoom：水平聚拢。</li>
<li>FilmBurn：火烧云。</li>
<li>GlitchMemories：抖动。</li>
<li>Heart：心形。</li>
<li>InvertedPageCurl：翻页。</li>
<li>Luma：腐蚀。</li>
<li>Mosaic：九宫格。</li>
<li>Pinwheel：风车。</li>
<li>PolarFunction：椭圆扩散。</li>
<li>PolkaDotsCurtain：弧形扩散。</li>
<li>Radial：雷达扫描。</li>
<li>RotateScaleFade：上下收放。</li>
<li>Squeeze：上下聚拢。</li>
<li>Swap：放大切换。</li>
<li>Swirl：螺旋。</li>
<li>UndulatingBurnOutSwirl：水流蔓延。</li>
<li>Windowblinds：百叶窗。</li>
<li>WipeDown：向下收起。</li>
<li>WipeLeft：向左收起。</li>
<li>WipeRight：向右收起。</li>
<li>WipeUp：向上收起。</li>
<li>ZoomInCircles：水波纹。</li> 
音频的转场操作，用于两个音频片段间的转场处理：
<li>AudioFadeInFadeOut：声音淡入淡出。</li>
   */
  Type: string
}

/**
 * 用户自定义语音审核任务控制参数
 */
export interface UserDefineAsrTextReviewTemplateInfo {
  /**
   * 用户自定语音审核任务开关，可选值：
<li>ON：开启自定义语音审核任务；</li>
<li>OFF：关闭自定义语音审核任务。</li>
   */
  Switch: string
  /**
   * 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 视频编辑/合成任务 对应元素在目标视频轨道上的时间信息。
 */
export interface ComposeTrackTime {
  /**
   * 元素在轨道上的起始时间，时间点支持：
<li>以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；</li>
注意：不填则默认为前一个元素的结束时间，此时可以通过 ComposeEmptyItem 元素来进行占位，实现轨道起始时间设置。
   */
  Start?: string
  /**
   * 元素时长，时间支持：
<li>以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；</li>
默认：取对应 ComposeSourceMedia 媒体的有效时长（即 EndTime-StartTime），没有 ComposeSourceMedia 则默认为 1 秒。
   */
  Duration?: string
}

/**
 * AI 样本管理，人脸信息。
 */
export interface AiSampleFaceInfo {
  /**
   * 人脸图片 ID。
   */
  FaceId: string
  /**
   * 人脸图片地址。
   */
  Url: string
}

/**
 * 创建的输入RTSP拉流的配置信息。
 */
export interface CreateInputRTSPPullSettings {
  /**
   * RTSP源站的源站地址，有且只能有一个。
   */
  SourceAddresses: Array<RTSPPullSourceAddress>
}

/**
 * CreateVideoDatabaseEntryTask请求参数结构体
 */
export interface CreateVideoDatabaseEntryTaskRequest {
  /**
   * 待入库视频信息
   */
  InputInfo: MediaInputInfo
  /**
   * 可选，入库任务完成后向指定的回调地址传递任务结果，目前仅支持URL
   */
  TaskNotifyConfig?: TaskNotifyConfig
}

/**
 * CreateStreamLinkFlow请求参数结构体
 */
export interface CreateStreamLinkFlowRequest {
  /**
   * 流名称。
   */
  FlowName: string
  /**
   * 最大带宽，单位bps，可选[10000000, 20000000, 50000000]。
   */
  MaxBandwidth: number
  /**
   * 流的输入组。
   */
  InputGroup?: Array<CreateInput>
  /**
   * 该Flow关联的媒体传输事件ID，每个flow只能关联一个Event。
   */
  EventId?: string
}

/**
 * 创建媒体传输流的输出SRT的目标地址。
 */
export interface CreateOutputSRTSettingsDestinations {
  /**
   * 输出的IP。
   */
  Ip: string
  /**
   * 输出的端口。
   */
  Port: number
}

/**
 * RecognizeMediaForZhiXue请求参数结构体
 */
export interface RecognizeMediaForZhiXueRequest {
  /**
   * 输入媒体文件存储信息。
   */
  InputInfo: MediaInputInfo
  /**
   * 表情识别参数配置。默认开启。
   */
  ExpressionConfig?: ExpressionConfigInfo
  /**
   * 动作识别参数配置。默认开启。
   */
  ActionConfig?: ActionConfigInfo
}

/**
 * 对视频转自适应码流任务结果类型
 */
export interface MediaProcessTaskAdaptiveDynamicStreamingResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode: number
  /**
   * 错误信息。
   */
  Message: string
  /**
   * 对视频转自适应码流任务的输入。
   */
  Input: AdaptiveDynamicStreamingTaskInput
  /**
   * 对视频转自适应码流任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output: AdaptiveDynamicStreamingInfoItem
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
}

/**
 * 文本关键词识别控制参数。
 */
export interface OcrWordsConfigureInfoForUpdate {
  /**
   * 文本关键词识别任务开关，可选值：
<li>ON：开启文本关键词识别任务；</li>
<li>OFF：关闭文本关键词识别任务。</li>
   */
  Switch?: string
  /**
   * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
}

/**
 * 水印模板详情
 */
export interface WatermarkTemplate {
  /**
   * 水印模板唯一标识。
   */
  Definition: number
  /**
   * 水印类型，取值：
<li>image：图片水印；</li>
<li>text：文字水印。</li>
   */
  Type: string
  /**
   * 水印模板名称。
   */
  Name: string
  /**
   * 模板描述信息。
   */
  Comment: string
  /**
   * 水印图片原点距离视频图像原点的水平位置。
<li>当字符串以 % 结尾，表示水印 Left 为视频宽度指定百分比的位置，如 10% 表示 Left 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Left 为视频宽度指定像素的位置，如 100px 表示 Left 为 100 像素。</li>
   */
  XPos: string
  /**
   * 水印图片原点距离视频图像原点的垂直位置。
<li>当字符串以 % 结尾，表示水印 Top 为视频高度指定百分比的位置，如 10% 表示 Top 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Top 为视频高度指定像素的位置，如 100px 表示 Top 为 100 像素。</li>
   */
  YPos: string
  /**
   * 图片水印模板，仅当 Type 为 image，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageTemplate: ImageWatermarkTemplate
  /**
   * 文字水印模板，仅当 Type 为 text，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TextTemplate: TextWatermarkTemplateInput
  /**
   * SVG 水印模板，当 Type 为 svg，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SvgTemplate: SvgWatermarkInput
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime: string
  /**
   * 原点位置，可选值：
<li>topLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>topRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>bottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>bottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下。；</li>
   */
  CoordinateOrigin: string
}

/**
 * 文字水印模板
 */
export interface TextWatermarkTemplateInput {
  /**
   * 字体类型，目前可以支持两种：
<li>simkai.ttf：可以支持中文和英文；</li>
<li>arial.ttf：仅支持英文。</li>
   */
  FontType: string
  /**
   * 字体大小，格式：Npx，N 为数值。N的取值范围：[0,1] 和 [8, 4096]
   */
  FontSize: string
  /**
   * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。
   */
  FontColor: string
  /**
   * 文字透明度，取值范围：(0, 1]
<li>0：完全透明</li>
<li>1：完全不透明</li>
默认值：1。
   */
  FontAlpha: number
  /**
   * 文字内容，长度不超过100个字符。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TextContent?: string
}

/**
 * ModifyAIAnalysisTemplate返回参数结构体
 */
export interface ModifyAIAnalysisTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWordSamples返回参数结构体
 */
export interface DescribeWordSamplesResponse {
  /**
   * 符合条件的记录总数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 关键词信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WordSet?: Array<AiSampleWord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIRecognitionTemplates返回参数结构体
 */
export interface DescribeAIRecognitionTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 视频内容识别模板详情列表。
   */
  AIRecognitionTemplateSet?: Array<AIRecognitionTemplateItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 去划痕配置
 */
export interface ScratchRepairConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 强度，取值范围：0.0~1.0。
默认：0.0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Intensity?: number
}

/**
 * 直播流 AI 审核结果
 */
export interface LiveStreamAiReviewResultInfo {
  /**
   * 内容审核结果列表。
   */
  ResultSet: Array<LiveStreamAiReviewResultItem>
}

/**
 * EditMedia返回参数结构体
 */
export interface EditMediaResponse {
  /**
   * 编辑视频的任务 ID，可以通过该 ID 查询编辑任务的状态。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本涉敏任务控制参数。
 */
export interface PoliticalOcrReviewTemplateInfoForUpdate {
  /**
   * 文本涉敏任务开关，可选值：
<li>ON：开启文本涉敏任务；</li>
<li>OFF：关闭文本涉敏任务。</li>
   */
  Switch?: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 极速高清参数配置。
 */
export interface TEHDConfig {
  /**
   * 极速高清类型，可选值：
<li>TEHD-100：极速高清-100（视频极速高清）。</li>
<li>TEHD-200：极速高清-200（音频极速高清）。</li>
不填代表不启用极速高清。
   */
  Type: string
  /**
   * 视频码率上限，当 Type 指定了极速高清类型时有效。
不填或填0表示不设视频码率上限。
   */
  MaxVideoBitrate?: number
}

/**
 * 创建媒体传输流的输出的RTMP的目标地址。
 */
export interface CreateOutputRtmpSettingsDestinations {
  /**
   * 转推的URL，格式如：rtmp://domain/live。
   */
  Url: string
  /**
   * 转推的StreamKey，格式如：stream?key=value。
   */
  StreamKey: string
}

/**
 * 音频降噪配置
 */
export interface AudioDenoiseConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
}

/**
 * 语音鉴黄任务控制参数。
 */
export interface PornAsrReviewTemplateInfoForUpdate {
  /**
   * 语音鉴黄任务开关，可选值：
<li>ON：开启语音鉴黄任务；</li>
<li>OFF：关闭语音鉴黄任务。</li>
   */
  Switch?: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 直播录制模板详情
 */
export interface LiveRecordTemplate {
  /**
   * 录制模板唯一标识。
   */
  Definition?: number
  /**
   * HLS 配置参数
   */
  HLSConfigure?: HLSConfigureInfo
  /**
   * 录制模板名称。
   */
  Name?: string
  /**
   * 模板描述信息。
   */
  Comment?: string
  /**
   * 模板类型，取值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type?: string
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime?: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime?: string
}

/**
 * DescribeSnapshotByTimeOffsetTemplates请求参数结构体
 */
export interface DescribeSnapshotByTimeOffsetTemplatesRequest {
  /**
   * 指定时间点截图模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
  /**
   * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type?: string
  /**
   * 指定时间点截图模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * 编排视频识别任务结果类型
 */
export interface ScheduleRecognitionTaskResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 识别任务的输入。
   */
  Input?: AiRecognitionTaskInput
  /**
   * 识别任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: Array<AiRecognitionResult>
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
}

/**
 * ModifyStreamLinkEvent返回参数结构体
 */
export interface ModifyStreamLinkEventResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WithdrawsWatermark请求参数结构体
 */
export interface WithdrawsWatermarkRequest {
  /**
   * 输入媒体文件存储信息。
   */
  InputInfo: MediaInputInfo
  /**
   * 任务的事件通知信息，不填代表不获取事件通知。
   */
  TaskNotifyConfig?: TaskNotifyConfig
  /**
   * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
   */
  SessionContext?: string
}

/**
 * 视频编辑/合成任务 目标视频信息。
 */
export interface ComposeTargetInfo {
  /**
   * 封装容器格式，可选值：
<li>mp4：视频文件（默认）。</li>
<li>mp3：纯音频文件。</li>
   */
  Container?: string
  /**
   * 是否去除视频数据，可选值：
<li>0：保留（默认）。</li>
<li>1：去除。</li>
   */
  RemoveVideo?: number
  /**
   * 是否去除音频数据，可选值：
<li>0：保留（默认）。</li>
<li>1：去除。</li>
   */
  RemoveAudio?: number
  /**
   * 输出视频流信息。
   */
  VideoStream?: ComposeVideoStream
  /**
   * 输出音频流信息。
   */
  AudioStream?: ComposeAudioStream
}

/**
 * 查询输入的RTMP配置信息。
 */
export interface DescribeInputRTMPPullSettings {
  /**
   * RTMP源站地址信息。
   */
  SourceAddresses: Array<DescribeRTMPPullSourceAddress>
}

/**
 * 媒体处理任务类型
 */
export interface MediaProcessTaskInput {
  /**
   * 视频转码任务列表。
   */
  TranscodeTaskSet?: Array<TranscodeTaskInput>
  /**
   * 视频转动图任务列表。
   */
  AnimatedGraphicTaskSet?: Array<AnimatedGraphicTaskInput>
  /**
   * 对视频按时间点截图任务列表。
   */
  SnapshotByTimeOffsetTaskSet?: Array<SnapshotByTimeOffsetTaskInput>
  /**
   * 对视频采样截图任务列表。
   */
  SampleSnapshotTaskSet?: Array<SampleSnapshotTaskInput>
  /**
   * 对视频截雪碧图任务列表。
   */
  ImageSpriteTaskSet?: Array<ImageSpriteTaskInput>
  /**
   * 转自适应码流任务列表。
   */
  AdaptiveDynamicStreamingTaskSet?: Array<AdaptiveDynamicStreamingTaskInput>
}

/**
 * DisableSchedule请求参数结构体
 */
export interface DisableScheduleRequest {
  /**
   * 编排唯一表示。
   */
  ScheduleId: number
}

/**
 * 智能横转竖结果类型
 */
export interface AiAnalysisTaskHorizontalToVerticalResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 错误码，0：成功，其他值：失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrCode?: number
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 智能横转竖任务输入
注意：此字段可能返回 null，表示取不到有效值。
   */
  Input?: AiAnalysisTaskHorizontalToVerticalInput
  /**
   * 智能横转竖任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskHorizontalToVerticalOutput
}

/**
 * 创建的输入RTMP拉流源站配置信息。
 */
export interface RTMPPullSourceAddress {
  /**
   * RTMP源站的TcUrl地址。
   */
  TcUrl: string
  /**
   * RTMP源站的StreamKey信息。
   */
  StreamKey: string
}

/**
 * 媒体处理 COS 输出对象信息。
 */
export interface CosOutputStorage {
  /**
   * 媒体处理生成的文件输出的目标 Bucket 名，如 TopRankVideo-125xxx88。如果不填，表示继承上层。
   */
  Bucket?: string
  /**
   * 媒体处理生成的文件输出的目标 Bucket 的园区，如 ap-chongqing。如果不填，表示继承上层。
   */
  Region?: string
}

/**
 * 转动图任务结果类型
 */
export interface MediaProcessTaskAnimatedGraphicResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 转动图任务的输入。
   */
  Input?: AnimatedGraphicTaskInput
  /**
   * 转动图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: MediaAnimatedGraphicsItem
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
}

/**
 * ProcessMedia返回参数结构体
 */
export interface ProcessMediaResponse {
  /**
   * 任务 ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWordSamples返回参数结构体
 */
export interface CreateWordSamplesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建媒体传输流的输出的RIST配置。
 */
export interface CreateOutputRistSettings {
  /**
   * RIST模式，可选[LISTENER|CALLER]，默认为LISTENER。
   */
  Mode?: string
  /**
   * RIST配置方案，可选[MAIN|SIMPLE]，默认为MAIN。
   */
  Profile?: string
  /**
   * RIST缓冲区大小，单位为毫秒。最小值为50毫秒，最大值为5000毫秒。默认值：120
   */
  Buffer?: number
}

/**
 * DeleteAdaptiveDynamicStreamingTemplate返回参数结构体
 */
export interface DeleteAdaptiveDynamicStreamingTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询输出的RTMP配置信息。
 */
export interface DescribeOutputRTMPSettings {
  /**
   * 空闲超时时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdleTimeout: number
  /**
   * Chunk大小。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChunkSize: number
  /**
   * 转推RTMP的目标地址信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Destinations: Array<RTMPAddressDestination>
}

/**
 * ParseNotification请求参数结构体
 */
export interface ParseNotificationRequest {
  /**
   * 从 CMQ 获取到的事件通知内容。
   */
  Content: string
}

/**
 * 直播录制任务输入参数类型
 */
export interface LiveRecordTaskInput {
  /**
   * 直播录制模板 ID。
   */
  Definition: number
  /**
   * 直播录制后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 直播录制后文件的输出路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputObjectPath?: string
}

/**
 * CreateWordSamples请求参数结构体
 */
export interface CreateWordSamplesRequest {
  /**
   * <b>关键词应用场景，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过音频识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行不适宜内容识别；
4. Review.Asr：通过音频识别技术，进行不适宜内容识别；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、音频识别技术，进行不适宜内容识别，等价于 3+4；
7. All：通过光学字符识别技术、音频识别技术，进行内容识别、不适宜内容识别，等价于 1+2+3+4。
   */
  Usages: Array<string>
  /**
   * 关键词，数组长度限制：100。
   */
  Words: Array<AiSampleWordInfo>
}

/**
 * DescribeStreamLinkEvents返回参数结构体
 */
export interface DescribeStreamLinkEventsResponse {
  /**
   * 媒体传输事件的配置信息列表。
   */
  Infos?: Array<DescribeEvent>
  /**
   * 当前页数。
   */
  PageNum?: number
  /**
   * 每页大小。
   */
  PageSize?: number
  /**
   * 总数量。
   */
  TotalNum?: number
  /**
   * 总页数。
   */
  TotalPage?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音涉敏任务控制参数。
 */
export interface PoliticalAsrReviewTemplateInfoForUpdate {
  /**
   * 语音涉敏任务开关，可选值：
<li>ON：开启语音涉敏任务；</li>
<li>OFF：关闭语音涉敏任务。</li>
   */
  Switch?: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * DescribeStreamLinkFlowStatistics请求参数结构体
 */
export interface DescribeStreamLinkFlowStatisticsRequest {
  /**
   * 传输流ID。
   */
  FlowId: string
  /**
   * 输入或输出类型，可选[input|output]。
   */
  Type: string
  /**
   * 输入或输出Id。
   */
  InputOutputId: string
  /**
   * 主通道或备通道，可选[0|1]。
   */
  Pipeline: string
  /**
   * 查询间隔，可选[5s|1min|5min|15min]。
   */
  Period: string
  /**
   * 统计的开始时间，默认为前一小时，最多支持查询近7天。
UTC时间，如'2020-01-01T12:00:00Z'。
   */
  StartTime: string
  /**
   * 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。
UTC时间，如'2020-01-01T12:00:00Z'。
   */
  EndTime: string
}

/**
 * AI 样本管理，人脸数据操作。
 */
export interface AiSampleFaceOperation {
  /**
   * 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。重置操作将清空该人物已有人脸数据，并添加 FaceContents 指定人脸数据。
   */
  Type: string
  /**
   * 人脸 ID 集合，当 Type为delete 时，该字段必填。
   */
  FaceIds?: Array<string>
  /**
   * 人脸图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串集合。
<li>当 Type为add 或 reset 时，该字段必填；</li>
<li>数组长度限制：5 张图片。</li>
注意：图片必须是单人像正面人脸较清晰的照片，像素不低于 200*200。
   */
  FaceContents?: Array<string>
}

/**
 * SVG水印模板输入参数
 */
export interface SvgWatermarkInputForUpdate {
  /**
   * 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且
 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；</li>
<li>当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 W%。</li>
默认值为 10W%。
   */
  Width?: string
  /**
   * 水印的高度，支持 px，%，W%，H%，S%，L% 六种格式：
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且
 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；</li>
<li>当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；</li>
<li>当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；</li>
<li>当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；</li>
<li>当字符串以 % 结尾时，含义同 H%。
默认值为 0px。
   */
  Height?: string
}

/**
 * 内容审核 Ocr 文字敏感任务结果类型
 */
export interface AiReviewTaskTerrorismOcrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核 Ocr 文字敏感任务输入。
   */
  Input?: AiReviewTerrorismOcrTaskInput
  /**
   * 内容审核 Ocr 文字敏感任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewTerrorismOcrTaskOutput
}

/**
 * 文本关键识别结果。
 */
export interface AiRecognitionTaskOcrWordsResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 文本关键词识别任务输入信息。
   */
  Input?: AiRecognitionTaskOcrWordsResultInput
  /**
   * 文本关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiRecognitionTaskOcrWordsResultOutput
}

/**
 * 语音鉴黄任务控制参数
 */
export interface PornAsrReviewTemplateInfo {
  /**
   * 语音鉴黄任务开关，可选值：
<li>ON：开启语音鉴黄任务；</li>
<li>OFF：关闭语音鉴黄任务。</li>
   */
  Switch: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 视频编辑/合成任务 视频流信息。
 */
export interface ComposeVideoStream {
  /**
   * 视频流的编码方式，可选值：
<li>H.264：H.264 编码（默认）。</li>
   */
  Codec?: string
  /**
   * 视频帧率，取值范围：[0, 60]，单位：Hz。  
默认值：0，表示和第一个视频帧率一致。
   */
  Fps?: number
  /**
   * 参考码率，单位 kbps，范围：50~35000。
如果设置，编码时会尽量按该码率进行编码。
如果不设置，服务将通过画面复杂度自动采用合适的码率。
   */
  Bitrate?: number
}

/**
 * 语音违禁任务控制参数
 */
export interface ProhibitedAsrReviewTemplateInfoForUpdate {
  /**
   * 语音违禁任务开关，可选值：
<li>ON：开启语音违禁任务；</li>
<li>OFF：关闭语音违禁任务。</li>
   */
  Switch?: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * DisableSchedule返回参数结构体
 */
export interface DisableScheduleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAnimatedGraphicsTemplate返回参数结构体
 */
export interface ModifyAnimatedGraphicsTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能按帧标签结果类型
 */
export interface AiAnalysisTaskFrameTagResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 智能按帧标签任务输入。
   */
  Input?: AiAnalysisTaskFrameTagInput
  /**
   * 智能按帧标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskFrameTagOutput
}

/**
 * DeleteAdaptiveDynamicStreamingTemplate请求参数结构体
 */
export interface DeleteAdaptiveDynamicStreamingTemplateRequest {
  /**
   * 自适应转码模板唯一标识。
   */
  Definition: number
}

/**
 * 文本全文识别片段。
 */
export interface AiRecognitionTaskOcrFullTextSegmentItem {
  /**
   * 识别片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 识别片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset: number
  /**
   * 识别片段结果集。
   */
  TextSet: Array<AiRecognitionTaskOcrFullTextSegmentTextItem>
}

/**
 * 编辑视频的结果文件输出配置。
 */
export interface EditMediaOutputConfig {
  /**
   * 封装格式，可选值：mp4、hls、mov、flv、avi。默认是 mp4。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Container?: string
  /**
   * 剪辑模式，可选值：
normal（默认）：精准编辑
fast：快速编辑，处理速度更快但精准度一定程度降低
注意：fast只支持单文件，normal默认输出转码格式是h264
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * ModifyPersonSample返回参数结构体
 */
export interface ModifyPersonSampleResponse {
  /**
   * 素材信息。
   */
  Person?: AiSamplePerson
  /**
   * 处理失败的五官信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailFaceInfoSet?: Array<AiSampleFailFaceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 媒体质检输入参数类型
 */
export interface AiQualityControlTaskInput {
  /**
   * 媒体质检模板 ID 。
可以直接使用预设模板，也可以在控制台自定义模板。预设模板如下：
- 10：开启所有质检项；
- 20：仅开启格式诊断对应质检项；
- 30：仅开启无参考打分对应质检项；
- 40：仅开启画面质量对应质检项。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Definition?: number
  /**
   * 渠道扩展参数json序列化字符串。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelExtPara?: string
}

/**
 * 视频检索入库任务的结果
 */
export interface VideoDBEntryTaskResult {
  /**
   * 入库的视频ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoId?: string
}

/**
 * 鉴黄任务控制参数。
 */
export interface PornConfigureInfoForUpdate {
  /**
   * 画面鉴黄控制参数。
   */
  ImgReviewInfo?: PornImgReviewTemplateInfoForUpdate
  /**
   * 语音鉴黄控制参数。
   */
  AsrReviewInfo?: PornAsrReviewTemplateInfoForUpdate
  /**
   * 文本鉴黄控制参数。
   */
  OcrReviewInfo?: PornOcrReviewTemplateInfoForUpdate
}

/**
 * 拆条任务输入类型
 */
export interface AiAnalysisTaskSegmentInput {
  /**
   * 拆条任务模板 ID。
   */
  Definition: number
}

/**
 * Asr 文字涉黄信息
 */
export interface AiReviewPornAsrTaskOutput {
  /**
   * Asr 文字涉黄评分，分值为0到100。
   */
  Confidence: number
  /**
   * Asr 文字涉黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * Asr 文字有涉黄嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewAsrTextSegmentItem>
}

/**
 * 视频编辑/合成任务 转场元素信息。
 */
export interface ComposeTransitionItem {
  /**
   * 元素时长，时间支持：<li>以 s 结尾，表示时间点单位为秒，如 3s 表示时间点为第3秒。</li>
默认：1s
注意：
<li>必须是整数s，否则向下取整。</li>
<li>转场 前后必须紧挨着两个不为 Empty 的元素。</li>
<li>转场 Duration 必须小于前一个元素的 Duration，同时必须小于后一个元素的 Duration。</li>
<li>进行转场处理的两个元素，第二个元素在轨道上的起始时间会自动调整为前一个元素的结束时间减去转场的 Duration。</li>
   */
  Duration?: string
  /**
   * 转场操作列表。
默认：淡入淡出。
注意：图像转场操作和音频转场操作各自最多支持一个。
   */
  Transitions?: Array<ComposeTransitionOperation>
}

/**
 * DeleteAIAnalysisTemplate请求参数结构体
 */
export interface DeleteAIAnalysisTemplateRequest {
  /**
   * 视频内容分析模板唯一标识。
   */
  Definition: number
}

/**
 * EditMedia请求参数结构体
 */
export interface EditMediaRequest {
  /**
   * 输入的视频文件信息。
   */
  FileInfos: Array<EditMediaFileInfo>
  /**
   * 媒体处理输出文件的目标存储。
   */
  OutputStorage: TaskOutputStorage
  /**
   * 媒体处理输出文件的目标路径。

注意：对于复杂合成任务，路径中的文件名只可为数字、字母、-、_ 的组合，最长 64 个字符。

   */
  OutputObjectPath: string
  /**
   * 【剪辑】任务生成的文件配置。
   */
  OutputConfig?: EditMediaOutputConfig
  /**
   * 【合成】任务配置。

注意：当其不为空时，认为是合成任务，否则按剪辑任务处理。
   */
  ComposeConfig?: ComposeMediaConfig
  /**
   * 任务的事件通知信息，不填代表不获取事件通知。
   */
  TaskNotifyConfig?: TaskNotifyConfig
  /**
   * 任务优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。
   */
  TasksPriority?: number
  /**
   * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
   */
  SessionId?: string
  /**
   * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
   */
  SessionContext?: string
}

/**
 * CreateStreamLinkOutputInfo返回参数结构体
 */
export interface CreateStreamLinkOutputInfoResponse {
  /**
   * 创建后的Output信息。
   */
  Info?: DescribeOutput
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AWS S3存储输入
 */
export interface S3InputInfo {
  /**
   * S3 bucket。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3Bucket: string
  /**
   * S3 bucket 对应的区域，目前支持：  
us-east-1  
eu-west-3

注意：此字段可能返回 null，表示取不到有效值。
   */
  S3Region: string
  /**
   * S3 bucket 中的媒体资源路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3Object: string
  /**
   * AWS 内网访问 媒体资源的秘钥id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3SecretId?: string
  /**
   * AWS 内网访问 媒体资源的秘钥key。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3SecretKey?: string
}

/**
 * 对视频截雪碧图任务结果类型
 */
export interface MediaProcessTaskImageSpriteResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 对视频截雪碧图任务的输入。
   */
  Input?: ImageSpriteTaskInput
  /**
   * 对视频截雪碧图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: MediaImageSpriteItem
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
}

/**
 * 智能描述结果信息
 */
export interface AiAnalysisTaskDescriptionOutput {
  /**
   * 视频智能描述列表。
   */
  DescriptionSet: Array<MediaAiAnalysisDescriptionItem>
}

/**
 * DescribeStreamLinkEventAttachedFlows请求参数结构体
 */
export interface DescribeStreamLinkEventAttachedFlowsRequest {
  /**
   * EventId。
   */
  EventId: string
  /**
   * 当前页数，默认1。
   */
  PageNum?: number
  /**
   * 每页大小，默认1000。
   */
  PageSize?: number
}

/**
 * 转推的RTP目标地址信息。
 */
export interface RTPAddressDestination {
  /**
   * 转推的目标地址的IP。
   */
  Ip: string
  /**
   * 转推的目标地址的端口。
   */
  Port: number
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates返回参数结构体
 */
export interface DescribeAdaptiveDynamicStreamingTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 转自适应码流模板详情列表。
   */
  AdaptiveDynamicStreamingTemplateSet?: Array<AdaptiveDynamicStreamingTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内容审核 Ocr 文字审核嫌疑片段
 */
export interface MediaContentReviewOcrTextSegmentItem {
  /**
   * 嫌疑片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 嫌疑片段结束的偏移时间，单位：秒。
   */
  EndTimeOffset: number
  /**
   * 嫌疑片段置信度。
   */
  Confidence: number
  /**
   * 嫌疑片段审核结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * 嫌疑关键词列表。
   */
  KeywordSet: Array<string>
  /**
   * 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
   */
  AreaCoordSet: Array<number | bigint>
  /**
   * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
   */
  Url: string
  /**
   * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  PicUrlExpireTime: string
}

/**
 * StopStreamLinkFlow请求参数结构体
 */
export interface StopStreamLinkFlowRequest {
  /**
   * 流Id。
   */
  FlowId: string
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates请求参数结构体
 */
export interface DescribeAdaptiveDynamicStreamingTemplatesRequest {
  /**
   * 转自适应码流模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
  /**
   * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type?: string
  /**
   * 是否为纯音频，0表示视频，1表示纯音频
默认值：0
   */
  PureAudio?: number
  /**
   * 自适应转码模板标识过滤条件，长度限制：64 个字符
   */
  Name?: string
}

/**
 * 图片水印模板输入参数
 */
export interface ImageWatermarkInput {
  /**
   * 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。
   */
  ImageContent: string
  /**
   * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。</li>
当宽高都不填或者为0时，默认为 10%。
   */
  Width?: string
  /**
   * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。</li>
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
   */
  Height?: string
  /**
   * 水印重复类型。使用场景：水印为动态图像。取值范围：
<li>once：动态水印播放完后，不再出现；</li>
<li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
<li>repeat：水印循环播放，直到视频结束（默认值）。</li>
   */
  RepeatType?: string
}

/**
 * 直播录制结果
 */
export interface LiveRecordResult {
  /**
   * 直播录制文件的目标存储。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 直播录制文件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileList?: Array<LiveRecordFile>
}

/**
 * 语音全文识别任务控制参数
 */
export interface AsrFullTextConfigureInfoForUpdate {
  /**
   * 语音全文识别任务开关，可选值：
<li>ON：开启智能语音全文识别任务；</li>
<li>OFF：关闭智能语音全文识别任务。</li>
   */
  Switch?: string
  /**
   * 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
   */
  SubtitleFormat?: string
  /**
   * 视频源语言。
   */
  SourceLanguage?: string
}

/**
 * 直播录制输出文件信息
 */
export interface LiveRecordFile {
  /**
   * 直播录制文件地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 直播录制文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 直播录制文件时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
  /**
   * 直播录制文件开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 直播录制文件结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
}

/**
 * 视频编辑/合成任务  媒体素材源信息。
 */
export interface ComposeSourceMedia {
  /**
   * 媒体对应的素材ID，即 FileInfos 列表中对应素材的 ID。
   */
  FileId: string
  /**
   * 媒体位于素材的起始时间，时间点支持 s、% 两种格式：
<li>当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；</li>
<li>当字符串以 % 结尾，表示时间点为素材时长的百分比大小，如10%表示时间点为素材第10% 的时刻。</li>
默认：0s
   */
  StartTime?: string
  /**
   * 媒体位于素材的结束时间，和 StartTime 构成媒体在源素材的时间区间，时间点支持 s、% 两种格式：
<li>当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；</li>
<li>当字符串以 % 结尾，表示时间点为素材时长的百分比大小，如10%表示时间点为素材第10%的时间。</li>
默认：如果对应轨道时长有设置，则默认轨道时长，否则为素材时长，无时长的素材默认为 1 秒。
注意：至少需要大于 StartTime 0.02 秒。

   */
  EndTime?: string
}

/**
 * 智能标签任务控制参数
 */
export interface TagConfigureInfoForUpdate {
  /**
   * 智能标签任务开关，可选值：
<li>ON：开启智能标签任务；</li>
<li>OFF：关闭智能标签任务。</li>
   */
  Switch?: string
}

/**
 * CreatePersonSample返回参数结构体
 */
export interface CreatePersonSampleResponse {
  /**
   * 素材信息。
   */
  Person?: AiSamplePerson
  /**
   * 处理失败的五官定位信息。
   */
  FailFaceInfoSet?: Array<AiSampleFailFaceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateContentReviewTemplate返回参数结构体
 */
export interface CreateContentReviewTemplateResponse {
  /**
   * 内容审核模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 违禁任务控制参数
 */
export interface ProhibitedConfigureInfoForUpdate {
  /**
   * 语音违禁控制参数。
   */
  AsrReviewInfo?: ProhibitedAsrReviewTemplateInfoForUpdate
  /**
   * 文本违禁控制参数。
   */
  OcrReviewInfo?: ProhibitedOcrReviewTemplateInfoForUpdate
}

/**
 * 视频编辑/合成任务 空白占位元素信息。
 */
export interface ComposeEmptyItem {
  /**
   * 元素时长，时间支持：
<li>以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒。</li>
   */
  Duration: string
}

/**
 * 对于含有多个音/视频轨的流，可以指定需要使用的轨道
 */
export interface PidSelector {
  /**
   * 对于含有多音轨的流, 可以通过输入PID来指定需要使用的音轨，PID可以输入1到8191之间的正整数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioPID?: Array<number | bigint>
  /**
   * 对于含有多个视频轨的流，可以通过输入PID来指定需要使用的视频轨，PID可以输入1到8191之间的正整数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoPID?: Array<number | bigint>
}

/**
 * DeleteWordSamples请求参数结构体
 */
export interface DeleteWordSamplesRequest {
  /**
   * 关键词，数组长度限制：100 个词。
   */
  Keywords: Array<string>
}

/**
 * SRT输入源地址。
 */
export interface SRTSourceAddressReq {
  /**
   * 对端IP。
   */
  Ip: string
  /**
   * 对端端口。
   */
  Port: number
}

/**
 * DescribeLiveRecordTemplates返回参数结构体
 */
export interface DescribeLiveRecordTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 录制模板详情列表。
   */
  LiveRecordTemplateSet?: Array<LiveRecordTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableSchedule请求参数结构体
 */
export interface EnableScheduleRequest {
  /**
   * 编排唯一标识。
   */
  ScheduleId: number
}

/**
 * 自定义转码的规格参数。
 */
export interface RawTranscodeParameter {
  /**
   * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
   */
  Container: string
  /**
   * 是否去除视频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
   */
  RemoveVideo?: number
  /**
   * 是否去除音频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
   */
  RemoveAudio?: number
  /**
   * 视频流配置参数，当 RemoveVideo 为 0，该字段必填。
   */
  VideoTemplate?: VideoTemplateInfo
  /**
   * 音频流配置参数，当 RemoveAudio 为 0，该字段必填。
   */
  AudioTemplate?: AudioTemplateInfo
  /**
   * 极速高清转码参数。
   */
  TEHDConfig?: TEHDConfig
}

/**
 * 任务处理的事件通知配置。
 */
export interface LiveStreamTaskNotifyConfig {
  /**
   * 通知类型：
"CMQ"：回调消息写入cmq队列； 
"URL"： 指定URL时HTTP回调推送到 NotifyUrl 指定的地址，回调协议http+json，包体内容同[解析直播事件通知接口](https://cloud.tencent.com/document/product/862/39229) 的输出参数

<font color="red"> 注：不填或为空时默认 CMQ，如需采用其他类型需填写对应类型值。 </font>
   */
  NotifyType?: string
  /**
   * HTTP回调地址，NotifyType为URL时必填。
   */
  NotifyUrl?: string
  /**
   * CMQ 的模型，有 Queue 和 Topic 两种，目前仅支持 Queue。
   */
  CmqModel?: string
  /**
   * CMQ 的园区，如 sh，bj 等。
   */
  CmqRegion?: string
  /**
   * 当模型为 Queue 时有效，表示接收事件通知的 CMQ 的队列名。
   */
  QueueName?: string
  /**
   * 当模型为 Topic 时有效，表示接收事件通知的 CMQ 的主题名。
   */
  TopicName?: string
  /**
   * 用于生成回调签名的 Key。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyKey?: string
}

/**
 * 视频流配置参数
 */
export interface VideoTemplateInfo {
  /**
   * 视频流的编码格式，可选值：
<li>h264：H.264 编码</li>
<li>h265：H.265 编码</li>
<li>h266：H.266 编码</li>
<li>av1：AOMedia Video 1 编码</li>
<li>vp8：VP8 编码</li>
<li>vp9：VP9 编码</li>
<li>mpeg2：MPEG2 编码</li>
<li>dnxhd：DNxHD 编码</li>
<li>mv-hevc：MV-HEVC 编码</li>

注意：av1 编码容器目前只支持 mp4 ，webm，mkv。
注意：H.266 编码容器目前只支持 mp4 ，hls，ts，mov。
注意：VP8、VP9编码容器目前只支持webm，mkv。
注意：MPEG2、dnxhd 编码容器目前只支持mxf。
注意：MV-HEVC编码容器目前只支持mp4，hls，mov。其中hls格式只支持mp4分片格式。
   */
  Codec: string
  /**
   * 视频帧率，取值范围：
当FpsDenominator的值为空时，范围：[0, 120]，单位：Hz；
当FpsDenominator的值不为空时，Fps/FpsDenominator的范围：[0,120]
当取值为 0，表示帧率和原始视频保持一致。
   */
  Fps: number
  /**
   * 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。
当取值为 0，表示视频码率和原始视频保持一致。
   */
  Bitrate: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
注意：自适应模式时，Width不能小于Height。
   */
  ResolutionAdaptive?: string
  /**
   * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
注意：Codec为MV-HEVC时可以支持到7680
   */
  Width?: number
  /**
   * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
注意：Codec为MV-HEVC时可以支持到7680
   */
  Height?: number
  /**
   * 关键帧 I 帧之间的间隔，允许按帧或秒自定义GOP长度，取值范围：0 和 [1, 100000]，
当填 0 或不填时，系统将自动设置 gop 长度。
   */
  Gop?: number
  /**
   * Gop数值单位，可选值：
frame：表示帧
second：表示秒
默认值：frame
注意：此字段可能返回 null，表示取不到有效值。
   */
  GopUnit?: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。</li>
<li>smarttailor：智能剪裁：智能选取视频画面，来保证画面比例裁剪。</li>
默认值：black 。
   */
  FillType?: string
  /**
   * 视频的恒定码率控制因子，取值范围为[0, 51]，不填表示“自动”。如果没有特殊需求，建议不指定该参数。
当Mode参数设置为VBR时，如果同时配置了Vcrf值，MPS将在VBR模式下处理视频，同时考虑Vcrf和Bitrate参数的设置，以平衡视频质量、码率、转码效率和文件大小。
当Mode参数设置为CRF，Bitrate设置将失效，编码将根据Vcrf值进行。
当Mode参数选择ABR或CBR时，无需配置Vcrf值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vcrf?: number
  /**
   * 分片平均时长，范围：（0-10]，单位：秒
不填表示自动，将根据视频的GOP等特征自动选择合适的分片时长。
注意：只能在封装格式hls的情况下使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  HlsTime?: number
  /**
   * hls 分片类型，可选值 ：
<li>0：HLS+TS 切片</li>
<li>2：HLS+TS byte range</li>
<li>7：HLS+MP4 切片</li>
<li>5：HLS+MP4 byte range</li>
默认值：0
注意：该字段用于普通/极速高清转码设置，对自适应码流不生效，如需给自适应码流配置分片类型，可以使用外层字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentType?: number
  /**
   * 帧率分母部分
注意：值必须大于0
注意：此字段可能返回 null，表示取不到有效值。
   */
  FpsDenominator?: number
  /**
   * 3D视频拼接方式，仅mv-hevc，3D视频生效，可选值：
<li>side_by_side：左右视角</li>
<li>top_bottom：上下视角</li>
默认值:side_by_side
注意：此字段可能返回 null，表示取不到有效值。
   */
  Stereo3dType?: string
  /**
   * Profile，适用于不同场景。
baseline: 只支持I/P帧，并只支持无交错的场景，适用于视频通话、手机视频等场景。
main: 主流Profile，提供I帧、P帧、B帧，并支持无交错模式和交错模式。主要用在主流的音视频消费产品如视频播放器、流媒体传输设备上。
high: 最高编码等级，在Main Profile上添加了8X8的预测，并支持自定义量化。广泛应用在蓝光存储、高清电视等场景。
default：随原视频自动填充。    

仅编码标准选择h264时出现该配置， 支持 baseline/main/high，默认为：default
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoProfile?: string
  /**
   * 编码器级别，默认为自动（""）
若编码标准选择H264: 支持以下选项：""，1 , 1.1 , 1.2 , 1.3 , 2 , 2.1 , 2.2 , 3 , 3.1 , 3.2 , 4 , 4.1 , 4.2 , 5 , 5.1
若编码标准选择H265: 支持以下选项：""，1 , 2 , 2.1 , 3 , 3.1 , 4 , 4.1 , 5 , 5.1 , 5.2 , 6 , 6.1 , 6.2 , 8.5
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoLevel?: string
  /**
   * 参考帧之间的B帧数，默认选自动，支持 0 - 16
注意：不填表示使用自动
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bframes?: number
  /**
   * 码率控制模式：可选值：
VBR（Variable Bit Rate）：动态比特率，根据视频画面的复杂度动态调整输出的码率，使得画面质量更高，适用于存储场景和对画面质量要求较高的应用。
ABR（Average Bit Rate）：平均比特率，尽量保持输出视频的平均码率稳定，但允许短期内的码率波动，适用于需要在保持一定画质的情况下尽量减少整体码率的场景。
CBR（Constant Bit Rate）：恒定比特率，指视频编码时输出的码率保持恒定不变，不考虑画面复杂度的变化，适用于对网络带宽要求较为严格的场景，如直播等。
VCRF（Constant Rate Factor）：恒定质量因子，通过设定一个质量因子来控制视频质量，实现视频的恒定质量编码，码率会根据内容的复杂度自动调整，适用于希望保持一定画质的场景。
默认选择 VBR
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * 显示高宽比，可选值：[1:1，2:1，default]
默认值：default
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sar?: string
  /**
   * 自适应I帧决策，开启后，媒体处理将自动识别视频中不同场景之间的过渡点（通常是视觉上显著不同的帧，比如从一个镜头切换到另一个镜头），在这些点自适应插入关键帧（I帧），从而提高视频的随机访问性和编码效率。可选值：
0：关闭自适应I帧决策 
1：使用自适应I帧决策
默认值：0
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoScenecut?: number
  /**
   * 比特位：支持8/10，默认为8
注意：此字段可能返回 null，表示取不到有效值。
   */
  BitDepth?: number
  /**
   * 保持原始时间戳：可选值：
0：表示关闭
1：表示打开
默认是关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawPts?: number
  /**
   * 按比例压缩码率，开启后，将根据比例来调整输出视频的码率。填写压缩率后，系统会根据视频源码率自动计算目标输出码率。压缩率范围0-100
不填此值表示不开启，默认不开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  Compress?: number
  /**
   * 启动时分片时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentSpecificInfo?: SegmentSpecificInfo
  /**
   * 模板是否开启场景化 
0：不开启 
1：开启 
默认值：0	
注意：只有此字段值为1时，SceneType和CompressType字段的值才会生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScenarioBased?: number
  /**
   * 视频场景化，可选值： 
normal：通用转码场景：通用转码压缩场景。
pgc：PGC高清影视：压缩时会注重影视剧的观看体验，根据影视剧特性进行ROI编码，同时保留高质量的视频内容和音频。 
materials_video：高清素材：素材资源类场景，对画质要求极高，较多透明画面内容，在压缩的同时接近视觉无损。 
ugc：UGC内容：适用于广泛的UGC/短视频场景，针对短视频的特性优化编码码率， 画质提升，提升业务QOS/QOE指标。 
e-commerce_video：秀场/电商类：压缩时会强调细节清晰度和ROI区域提升，尤其注重保持人脸区域的画质。 
educational_video：教育类：压缩时会强调文字和图像的清晰度和可读性，以便学生更好地理解内容，确保讲解内容清晰传达。 
默认值：normal
注意：要使用此值ScenarioBased的值必须为1，否则此值不生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  SceneType?: string
  /**
   * 转码策略，可选值： 
ultra_compress：极致压缩：相比标准压缩，该策略能在保证一定画质的基础上最大限度压缩码率，极大节约带宽和存储成本。 
standard_compress：综合最优：平衡压缩率与画质，在保证主观画质没有明显降低的情况下尽可能压缩文件。该策略仅收取音视频极速高清转码费用。 
high_compress：码率优先：优先保证降低文件体积大小，可能有一定画质损失。该策略仅收取音视频极速高清转码费用。 
low_compress：画质优先：优先保证画质，压缩出来的文件体积可能相对较大。该策略仅收取音视频极速高清转码费用。 
默认值：standard_compress 
注：若需要在电视上观看视频，不建议使用ultra_compress策略。ultra_compress策略计费标准为极速高清转码 + 音视频增强-去毛刺。
注意：要使用此值ScenarioBased的值必须为1，否则此值不生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompressType?: string
}

/**
 * 视频编辑/合成任务 字幕样式。
 */
export interface ComposeSubtitleStyle {
  /**
   * 字幕高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示为画布高度的百分比大小，如 10% 表示为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。</li>
默认为 FontSize 大小。
   */
  Height?: string
  /**
   * 字幕距离下边框距离，支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示为画布高度的百分比大小，如 10% 表示为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。</li>
默认：0px
   */
  MarginBottom?: string
  /**
   * 字体类型，支持：
<li>SimHei：黑体（默认）。</li>
<li>SimSun：宋体。</li>
   */
  FontType?: string
  /**
   * 字体大小，支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示为画布高度的百分比大小，如 10% 表示为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。</li>
默认：2%
   */
  FontSize?: string
  /**
   * 是否使用粗体，和字体相关，可选值：
<li>0：否（默认）。</li>
<li>1：是。</li>
   */
  FontBold?: number
  /**
   * 是否使用斜体，和字体相关，可选值：
<li>0：否（默认）。</li>
<li>1：是。</li>
   */
  FontItalic?: number
  /**
   * 字体颜色，格式：#RRGGBBAA。  
默认值：0x000000FF（黑色）。  
注意：其中 AA 部分指的是透明度，为可选。

   */
  FontColor?: string
  /**
   * 文字对齐方式：
<li>Center：居中（默认）。</li>
<li>Left：左对齐。</li>
<li>Right：右对齐。</li>
   */
  FontAlign?: string
  /**
   * 用于字幕对齐留白：
<li>FontAlign=Left 时，表示距离左边距离。</li>
<li>FontAlign=Right时，表示距离右边距离。</li>
支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示为画布宽度的百分比大小，如 10% 表示为画布宽度的 10%。</li>
<li>当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。</li>
   */
  FontAlignMargin?: string
  /**
   * 字体边框宽度，支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示为画布高度的百分比大小，如 10% 表示为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。</li>
默认： 0，表示不需要边框。
   */
  BorderWidth?: string
  /**
   * 边框颜色，当 BorderWidth 不为 0 时生效，其值格式和 FontColor 一致。
   */
  BorderColor?: string
  /**
   * 文字底色，其值格式和 FontColor 一致。  
默认为空， 表示不使用底色。
   */
  BottomColor?: string
}

/**
 * 文本鉴黄任务控制参数。
 */
export interface PornOcrReviewTemplateInfoForUpdate {
  /**
   * 文本鉴黄任务开关，可选值：
<li>ON：开启文本鉴黄任务；</li>
<li>OFF：关闭文本鉴黄任务。</li>
   */
  Switch?: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 内容审核 Ocr 文字鉴黄任务结果类型
 */
export interface AiReviewTaskPornOcrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核 Ocr 文字鉴黄任务输入。
   */
  Input?: AiReviewPornOcrTaskInput
  /**
   * 内容审核 Ocr 文字鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewPornOcrTaskOutput
}

/**
 * ModifyContentReviewTemplate返回参数结构体
 */
export interface ModifyContentReviewTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWatermarkTemplates请求参数结构体
 */
export interface DescribeWatermarkTemplatesRequest {
  /**
   * 水印模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number | bigint>
  /**
   * 水印类型过滤条件，可选值：
<li>image：图片水印；</li>
<li>text：文字水印。</li>
   */
  Type?: string
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数
<li>默认值：10；</li>
<li>最大值：100。</li>
   */
  Limit?: number
  /**
   * 水印模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * 创建输出的配置信息。
 */
export interface CreateOutputInfo {
  /**
   * 输出的名称。
   */
  OutputName: string
  /**
   * 输出描述。
   */
  Description: string
  /**
   * 输出的转推协议，支持SRT|RTP|RTMP|RTMP_PULL|RTSP|RIST。
   */
  Protocol: string
  /**
   * 输出地区。
   */
  OutputRegion: string
  /**
   * 输出的SRT的配置。
   */
  SRTSettings?: CreateOutputSRTSettings
  /**
   * 输出的RTMP的配置。
   */
  RTMPSettings?: CreateOutputRTMPSettings
  /**
   * 输出的RTP的配置。
   */
  RTPSettings?: CreateOutputInfoRTPSettings
  /**
   * IP白名单列表，格式为CIDR，如0.0.0.0/0。
当Protocol为RTMP_PULL有效，为空代表不限制客户端IP。
   */
  AllowIpList?: Array<string>
  /**
   * 最大拉流并发数，最大4，默认4。
   */
  MaxConcurrent?: number
  /**
   * 绑定的输入安全组 ID。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 可用区，output最多只支持输入一个可用区。
   */
  Zones?: Array<string>
  /**
   * 输出类型：Internet/TencentCSS/StreamLive
   */
  OutputType?: string
  /**
   * 输出的RIST的配置。
   */
  RISTSettings?: CreateOutputRistSettings
  /**
   * 对于含有多个音/视频轨的流，可以指定需要使用的轨道
   */
  PidSelector?: PidSelector
}

/**
 * 媒体处理输出对象信息。
 */
export interface TaskOutputStorage {
  /**
   * 媒体处理输出对象存储位置的类型，支持：
<li>COS：COS存储</li>
<li>AWS-S3：AWS 存储，只适用于AWS任务，且要求同区域</li>
   */
  Type: string
  /**
   * 当 Type 为 COS 时有效，则该项为必填，表示媒体处理 COS 输出位置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosOutputStorage?: CosOutputStorage
  /**
   * 当 Type 为 AWS-S3 时有效，则该项为必填，表示媒体处理 AWS S3 输出位置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3OutputStorage?: S3OutputStorage
}

/**
 * 任务查询结果类型
 */
export interface MediaProcessTaskResult {
  /**
   * 任务的类型，可以取的值有：
<li>Transcode：转码</li>
<li>AnimatedGraphics：转动图</li>
<li>SnapshotByTimeOffset：时间点截图</li>
<li>SampleSnapshot：采样截图</li>
<li>ImageSprites：雪碧图</li>
<li>CoverBySnapshot：截图做封面</li>
<li>AdaptiveDynamicStreaming：自适应码流</li>
   */
  Type: string
  /**
   * 视频转码任务的查询结果，当任务类型为 Transcode 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranscodeTask: MediaProcessTaskTranscodeResult
  /**
   * 视频转动图任务的查询结果，当任务类型为 AnimatedGraphics 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnimatedGraphicTask: MediaProcessTaskAnimatedGraphicResult
  /**
   * 对视频按时间点截图任务的查询结果，当任务类型为 SnapshotByTimeOffset 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotByTimeOffsetTask: MediaProcessTaskSnapshotByTimeOffsetResult
  /**
   * 对视频采样截图任务的查询结果，当任务类型为 SampleSnapshot 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SampleSnapshotTask: MediaProcessTaskSampleSnapshotResult
  /**
   * 对视频截雪碧图任务的查询结果，当任务类型为 ImageSprite 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageSpriteTask: MediaProcessTaskImageSpriteResult
  /**
   * 转自适应码流任务查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdaptiveDynamicStreamingTask: MediaProcessTaskAdaptiveDynamicStreamingResult
}

/**
 * ModifyAIAnalysisTemplate请求参数结构体
 */
export interface ModifyAIAnalysisTemplateRequest {
  /**
   * 视频内容分析模板唯一标识。
   */
  Definition: number
  /**
   * 视频内容分析模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 视频内容分析模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 智能分类任务控制参数。
   */
  ClassificationConfigure?: ClassificationConfigureInfoForUpdate
  /**
   * 智能标签任务控制参数。
   */
  TagConfigure?: TagConfigureInfoForUpdate
  /**
   * 智能封面任务控制参数。
   */
  CoverConfigure?: CoverConfigureInfoForUpdate
  /**
   * 智能按帧标签任务控制参数。
   */
  FrameTagConfigure?: FrameTagConfigureInfoForUpdate
}

/**
 * 用户自定义审核任务控制参数
 */
export interface UserDefineConfigureInfo {
  /**
   * 用户自定义人物审核控制参数。
   */
  FaceReviewInfo?: UserDefineFaceReviewTemplateInfo
  /**
   * 用户自定义语音审核控制参数。
   */
  AsrReviewInfo?: UserDefineAsrTextReviewTemplateInfo
  /**
   * 用户自定义文本审核控制参数。
   */
  OcrReviewInfo?: UserDefineOcrTextReviewTemplateInfo
}

/**
 * DeleteQualityControlTemplate请求参数结构体
 */
export interface DeleteQualityControlTemplateRequest {
  /**
   * 媒体质检模板唯一标识。
   */
  Definition: number
}

/**
 * 色彩增强配置
 */
export interface ColorEnhanceConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 类型，可选值：
<li>weak</li>
<li>normal</li>
<li>strong</li>
默认值：weak。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * 查询输出的RTP配置信息。
 */
export interface DescribeOutputRTPSettings {
  /**
   * 转推RTP的目标地址信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Destinations: Array<RTPAddressDestination>
  /**
   * 是否FEC。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FEC: string
  /**
   * 空闲超时时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdleTimeout: number
}

/**
 * 视频编辑/合成任务 音频元素信息。
 */
export interface ComposeAudioItem {
  /**
   * 元素对应媒体信息。
   */
  SourceMedia: ComposeSourceMedia
  /**
   * 元素在轨道时间轴上的时间信息，不填则紧跟上一个元素。
   */
  TrackTime?: ComposeTrackTime
  /**
   * 对音频进行操作，如静音等。
   */
  AudioOperations?: Array<ComposeAudioOperation>
}

/**
 * 内容审核 Ocr 文字鉴黄任务输入参数类型
 */
export interface AiReviewPornOcrTaskInput {
  /**
   * 鉴黄模板 ID。
   */
  Definition: number
}

/**
 * 直播编排任务信息
 */
export interface LiveScheduleTask {
  /**
   * 直播编排任务 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 源异常时返回非0错误码，返回0 时请使用各个具体任务的 ErrCode。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrCode?: number
  /**
   * 源异常时返回对应异常Message，否则请使用各个具体任务的 Message。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 直播流 URL。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 直播编排任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiveActivityResultSet?: Array<LiveActivityResult>
}

/**
 * 智能按帧标签结果信息
 */
export interface AiAnalysisTaskFrameTagOutput {
  /**
   * 视频按帧标签列表。
   */
  SegmentSet: Array<MediaAiAnalysisFrameTagSegmentItem>
}

/**
 * ModifyAdaptiveDynamicStreamingTemplate请求参数结构体
 */
export interface ModifyAdaptiveDynamicStreamingTemplateRequest {
  /**
   * 转自适应码流模板唯一标识。
   */
  Definition: number
  /**
   * 模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 转自适应码流格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
   */
  Format?: string
  /**
   * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
   */
  DisableHigherVideoBitrate?: number
  /**
   * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
   */
  DisableHigherVideoResolution?: number
  /**
   * 转自适应码流输入流参数信息，最多输入10路流。
注意：
1、各个流的帧率必须保持一致；如果不一致，采用第一个流的帧率作为输出帧率。
2、修改子流信息时需要全量修改添加所有字段值，否则没填字段会使用默认值。
   */
  StreamInfos?: Array<AdaptiveStreamTemplate>
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 是否为纯音频，0表示视频模板，1表示纯音频模板
当值为1：
1. StreamInfos.N.RemoveVideo=1
2. StreamInfos.N.RemoveAudio=0
3. StreamInfos.N.Video.Codec=copy
当值为0：
1. StreamInfos.N.Video.Codec不能为copy
2. StreamInfos.N.Video.Fps不能为null
注意：
此值只是区分模板类型，任务使用RemoveAudio和RemoveVideo的值
   */
  PureAudio?: number
  /**
   * hls 分片类型，可选值： <li>ts-segment：HLS+TS 切片</li> <li>ts-byterange：HLS+TS byte range</li> <li>mp4-segment：HLS+MP4 切片</li> <li>mp4-byterange：HLS+MP4 byte range</li> <li>ts-packed-audio：TS+Packed Audio</li> <li>mp4-packed-audio：MP4+Packed Audio</li> 默认值：ts-segment 
注：自适应码流的hls分片格式已此字段为准
   */
  SegmentType?: string
}

/**
 * 视频转动图结果信息
 */
export interface MediaAnimatedGraphicsItem {
  /**
   * 转动图文件的存储位置。
   */
  Storage: TaskOutputStorage
  /**
   * 转动图的文件路径。
   */
  Path: string
  /**
   * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/862/37042#.E9.A2.84.E7.BD.AE.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
   */
  Definition: number
  /**
   * 动图格式，如 gif。
   */
  Container: string
  /**
   * 动图的高度，单位：px。
   */
  Height: number
  /**
   * 动图的宽度，单位：px。
   */
  Width: number
  /**
   * 动图码率，单位：bps。
   */
  Bitrate: number
  /**
   * 动图大小，单位：字节。
   */
  Size: number
  /**
   * 动图的md5值。
   */
  Md5: string
  /**
   * 动图在视频中的起始时间偏移，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 动图在视频中的结束时间偏移，单位：秒。
   */
  EndTimeOffset: number
}

/**
 * DescribeQualityControlTemplates请求参数结构体
 */
export interface DescribeQualityControlTemplatesRequest {
  /**
   * 媒体质检模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数
<li>默认值：10；</li>
<li>最大值：100。</li>
   */
  Limit?: number
  /**
   * "Preset"：预设，Custom":自定义模板
   */
  Type?: string
  /**
   * 媒体质检模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * ModifyWordSample请求参数结构体
 */
export interface ModifyWordSampleRequest {
  /**
   * 关键词，长度限制：128 个字符。
   */
  Keyword: string
  /**
   * <b>关键词应用场景，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过音频识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行不适宜的内容识别；
4. Review.Asr：通过音频识别技术，进行不适宜的音频识别；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、音频识别技术，进行不适宜的内容识别，等价于 3+4；
7. All：包含以上全部，等价于 1+2+3+4。
   */
  Usages?: Array<string>
  /**
   * 标签操作信息。
   */
  TagOperationInfo?: AiSampleTagOperation
}

/**
 * 编辑视频任务信息
 */
export interface EditMediaTask {
  /**
   * 任务 ID。
   */
  TaskId: string
  /**
   * 任务状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
   */
  Status: string
  /**
   * 错误码
<li>0：成功；</li>
<li>其他值：失败。</li>
   */
  ErrCode: number
  /**
   * 错误信息。
   */
  Message: string
  /**
   * 视频编辑任务的输入。
   */
  Input: EditMediaTaskInput
  /**
   * 视频编辑任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output: EditMediaTaskOutput
}

/**
 * 人脸识别结果片段
 */
export interface AiRecognitionTaskFaceSegmentItem {
  /**
   * 识别片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 识别片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
  /**
   * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
   */
  AreaCoordSet: Array<number | bigint>
}

/**
 * 智能标签结果类型
 */
export interface AiAnalysisTaskTagResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 智能标签任务输入。
   */
  Input?: AiAnalysisTaskTagInput
  /**
   * 智能标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskTagOutput
}

/**
 * 智能擦除任务输入类型
 */
export interface AiAnalysisTaskDelLogoInput {
  /**
   * 视频智能擦除模板 ID。
   */
  Definition?: number
}

/**
 * BatchStopStreamLinkFlow请求参数结构体
 */
export interface BatchStopStreamLinkFlowRequest {
  /**
   * EventId。
   */
  EventId: string
  /**
   * 流Id，如果不传默认停止Event下所有的媒体传输流。
   */
  FlowIds?: Array<string>
}

/**
 * RTMP转推的目标地址信息。
 */
export interface RTMPAddressDestination {
  /**
   * 转推RTMP的目标Url，格式如'rtmp://domain/live'。
   */
  Url: string
  /**
   * 转推RTMP的目标StreamKey，格式如'steamid?key=value'。
   */
  StreamKey: string
}

/**
 * 智能标签结果信息
 */
export interface AiAnalysisTaskTagOutput {
  /**
   * 视频智能标签列表。
   */
  TagSet: Array<MediaAiAnalysisTagItem>
}

/**
 * 智能精彩片段结果信息
 */
export interface AiAnalysisTaskHighlightOutput {
  /**
   * 视频智能精彩片段列表。
   */
  HighlightSet?: Array<MediaAiAnalysisHighlightItem>
  /**
   * 精彩片段的存储位置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
}

/**
 * 质检项配置
 */
export interface QualityControlItemConfig {
  /**
   * 质检项名称。质检项取值如下：
<li>LowEvaluation：无参考打分</li>
<li>Mosaic：马赛克检测</li>
<li>CrashScreen：花屏检测</li>
<li>Blur：模糊检测</li>
<li>BlackWhiteEdge：黑白边检测</li>
<li>SolidColorScreen：纯色屏检测</li>
<li>LowLighting：低光照</li>
<li>HighLighting：过曝</li>
<li>NoVoice：静音检测</li>
<li>LowVoice：低音检测</li>
<li>HighVoice：爆音检测</li>
<li>Jitter：抖动检测</li>
<li>Noise：噪点检测</li>
<li>QRCode：二维码检测</li>
<li>BarCode：条形码检测</li>
<li>AppletCode：小程序码检测</li>
<li>VideoResolutionChanged：视频分辨率变化</li>
<li>AudioSampleRateChanged：音频采样率变化</li>
<li>AudioChannelsChanged：音频通道数变化</li>
<li>ParameterSetsChanged：流参数集信息发生变化</li>
<li>DarOrSarInvalid：视频的宽高比异常</li>
<li>TimestampFallback：DTS时间戳回退</li>
<li>DtsJitter：DTS抖动过大</li>
<li>PtsJitter：PTS抖动过大</li>
<li>AACDurationDeviation：AAC帧时间戳间隔不合理</li>
<li>AudioDroppingFrames：音频丢帧</li>
<li>VideoDroppingFrames：视频丢帧</li>
<li>AVTimestampInterleave：音视频交织不合理</li>
<li>PtsLessThanDts：媒体流的 pts 小于 dts</li>
<li>ReceiveFpsJitter：网络接收帧率抖动过大</li>
<li>ReceiveFpsTooSmall：网络接收视频帧率过小</li>
<li>FpsJitter：通过PTS计算得到的流帧率抖动过大</li>
<li>StreamOpenFailed：流打开失败</li>
<li>StreamEnd：流结束</li>
<li>StreamParseFailed：流解析失败</li>
<li>VideoFirstFrameNotIdr：首帧不是IDR帧</li>
<li>StreamNALUError：NALU起始码错误</li>
<li>TsStreamNoAud：mpegts的H26x流缺失 AUD NALU</li>
<li>AudioStreamLack：无音频流</li>
<li>VideoStreamLack：无视频流</li>
<li>LackAudioRecover：缺失音频流恢复</li>
<li>LackVideoRecover：缺失视频流恢复</li>
<li>VideoBitrateOutofRange：视频流码率(kbps)超出范围</li>
<li>AudioBitrateOutofRange：音频流码率(kbps)超出范围</li>
<li>VideoDecodeFailed：视频解码错误</li>
<li>AudioDecodeFailed：音频解码错误</li>
<li>AudioOutOfPhase：双通道音频相位相反</li>
<li>VideoDuplicatedFrame：视频流中存在重复帧</li>
<li>AudioDuplicatedFrame：音频流中存在重复帧</li>
<li>VideoRotation：视频画面旋转</li>
<li>TsMultiPrograms：MPEG2-TS流有多个program</li>
<li>Mp4InvalidCodecFourcc：MP4中codec fourcc不符合Apple HLS要求</li>
<li>HLSBadM3u8Format：无效的m3u8文件</li>
<li>HLSInvalidMasterM3u8：无效的main m3u8文件</li>
<li>HLSInvalidMediaM3u8：无效的media m3u8文件</li>
<li>HLSMasterM3u8Recommended：main m3u8缺少标准推荐的参数</li>
<li>HLSMediaM3u8Recommended：media m3u8缺少标准推荐的参数</li>
<li>HLSMediaM3u8DiscontinuityExist：media m3u8存在EXT-X-DISCONTINUITY</li>
<li>HLSMediaSegmentsStreamNumChange：切片的流数目发生变化</li>
<li>HLSMediaSegmentsPTSJitterDeviation：切片间PTS跳变且没有EXT-X-DISCONTINUITY</li>
<li>HLSMediaSegmentsDTSJitterDeviation：切片间DTS跳变且没有EXT-X-DISCONTINUITY</li>
<li>TimecodeTrackExist：MP4存在tmcd轨道</li>
   */
  Type: string
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Switch?: string
  /**
   * 采样方式，取值范围：
- Time：根据时间间隔采样。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sampling?: string
  /**
   * 采样间隔时间，单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntervalTime?: number
  /**
   * 异常持续时间，单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: number
  /**
   * 检测项对应的阈值，不同检测项对应阈值不同。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Threshold?: string
}

/**
 * CreateStreamLinkEvent返回参数结构体
 */
export interface CreateStreamLinkEventResponse {
  /**
   * 创建的Event信息。
   */
  Info: DescribeEvent
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转自适应码流信息
 */
export interface AdaptiveDynamicStreamingInfoItem {
  /**
   * 转自适应码流规格。
   */
  Definition: number
  /**
   * 打包格式，可能为 HLS和 MPEG-DASH 两种。
   */
  Package: string
  /**
   * 播放路径。
   */
  Path: string
  /**
   * 自适应码流文件的存储位置。
   */
  Storage: TaskOutputStorage
}

/**
 * ProcessMedia请求参数结构体
 */
export interface ProcessMediaRequest {
  /**
   * 媒体处理的文件输入信息。
   */
  InputInfo: MediaInputInfo
  /**
   * 媒体处理输出文件的目标存储。不填则继承 InputInfo 中的存储位置。
注意：当InputInfo.Type为URL时，该参数是必填项
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 媒体处理生成的文件输出的目标目录，必选以 / 开头和结尾，如`/movie/201907/`。
如果不填，表示与 InputInfo 中文件所在的目录一致。
   */
  OutputDir?: string
  /**
   * 编排ID。
注意1：对于OutputStorage、OutputDir参数：
<li>当服务编排中子任务节点配置了OutputStorage、OutputDir时，该子任务节点中配置的输出作为子任务的输出。</li>
<li>当服务编排中子任务节点没有配置OutputStorage、OutputDir时，若创建任务接口（ProcessMedia）有指定输出，将覆盖原有编排的默认输出。</li>
<li>即输出设置的优先级：编排子任务节点 > 任务接口指定 > 对应编排内的配置 </li>
注意2：对于TaskNotifyConfig参数，若创建任务接口（ProcessMedia）有设置，将覆盖原有编排的默认回调。

注意3：编排的 Trigger 只是用来自动化触发场景，在手动发起的请求中已经配置的 Trigger 无意义。
   */
  ScheduleId?: number
  /**
   * 媒体处理类型任务参数。
   */
  MediaProcessTask?: MediaProcessTaskInput
  /**
   * 视频内容审核类型任务参数。
   */
  AiContentReviewTask?: AiContentReviewTaskInput
  /**
   * 视频内容分析类型任务参数。
   */
  AiAnalysisTask?: AiAnalysisTaskInput
  /**
   * 视频内容识别类型任务参数。
   */
  AiRecognitionTask?: AiRecognitionTaskInput
  /**
   * 媒体质检类型任务参数。
   */
  AiQualityControlTask?: AiQualityControlTaskInput
  /**
   * 任务的事件通知信息，不填代表不获取事件通知。
   */
  TaskNotifyConfig?: TaskNotifyConfig
  /**
   * 任务流的优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。
   */
  TasksPriority?: number
  /**
   * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不传该参数或者参数为空字符串则本次请求不做去重操作。
   */
  SessionId?: string
  /**
   * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
   */
  SessionContext?: string
  /**
   * 任务类型，默认Online
<li> Online：实时任务</li>
<li> Offline：闲时任务，不保证实效性，默认3天内处理完</li>
   */
  TaskType?: string
}

/**
 * ProcessImage返回参数结构体
 */
export interface ProcessImageResponse {
  /**
   * 任务 ID。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询输入的RTSP配置信息。
 */
export interface DescribeRTSPPullSourceAddress {
  /**
   * RTSP源站的Url地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url: string
}

/**
 * 查询输出的RTSP拉流配置信息。
 */
export interface DescribeOutputRTSPPullSettings {
  /**
   * RTSP拉流地址列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerUrls: Array<DescribeOutputRTSPPullServerUrl>
}

/**
 * 文本全文识别结果。
 */
export interface AiRecognitionTaskOcrFullTextResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 文本全文识别任务输入信息。
   */
  Input?: AiRecognitionTaskOcrFullTextResultInput
  /**
   * 文本全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiRecognitionTaskOcrFullTextResultOutput
}

/**
 * 智能拆条结果信息
 */
export interface AiAnalysisTaskSegmentOutput {
  /**
   * 智能拆条子片段列表。
   */
  SegmentSet?: Array<SegmentRecognitionItem>
  /**
   * 视频摘要，离线场景用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Abstract?: string
}

/**
 * 视频编辑/合成任务 视频元素信息。
 */
export interface ComposeVideoItem {
  /**
   * 元素对应媒体信息。
   */
  SourceMedia: ComposeSourceMedia
  /**
   * 元素在轨道时间轴上的时间信息，不填则紧跟上一个元素。
   */
  TrackTime?: ComposeTrackTime
  /**
   * 元素中心点距离画布原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示元素 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布宽度的 10%。</li>
<li>当字符串以 px 结尾，表示元素 XPos 单位为像素，如 100px 表示 XPos 为100像素。</li>
默认：50%。
   */
  XPos?: string
  /**
   * 元素中心点距离画布原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示元素 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示元素 YPos 单位为像素，如 100px 表示 YPos 为100像素。</li>
默认：50%。
   */
  YPos?: string
  /**
   * 视频片段的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示元素 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。</li>
<li>当字符串以 px 结尾，表示元素 Width 单位为像素，如 100px 表示 Width 为100像素。</li>
为空（或0） 的场景：
<li>当 Width、Height 均为空，则 Width 和 Height 取源素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按源素材比例缩放。</li>
<li>当 Width 非空，Height 为空，则 Height 按源素材比例缩放。</li>
   */
  Width?: string
  /**
   * 元素的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示元素 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示元素 Height 单位为像素，如 100px 表示 Height 为100像素。</li>
为空（或0） 的场景：
<li>当 Width、Height 均为空，则 Width 和 Height 取源素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按源素材比例缩放。</li>
<li>当 Width 非空，Height 为空，则 Height 按源素材比例缩放。</li>
   */
  Height?: string
  /**
   * 对图像画面进行的操作，如图像旋转等。
   */
  ImageOperations?: Array<ComposeImageOperation>
  /**
   * 对音频进行操作，如静音等。
   */
  AudioOperations?: Array<ComposeAudioOperation>
}

/**
 * 对视频按指定时间点截图任务结果类型
 */
export interface MediaProcessTaskSnapshotByTimeOffsetResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 对视频按指定时间点截图任务输入。
   */
  Input?: SnapshotByTimeOffsetTaskInput
  /**
   * 对视频按指定时间点截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: MediaSnapshotByTimeOffsetItem
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
}

/**
 * 查询输出的HLS拉流配置信息。
 */
export interface DescribeOutputHLSPullSettings {
  /**
   * HLS拉流地址列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServerUrls: Array<DescribeOutputHLSPullServerUrl>
}

/**
 * 翻译的输入。
 */
export interface AiRecognitionTaskTransTextResultInput {
  /**
   * 翻译模板 ID。
   */
  Definition: number
}

/**
 * DescribeSchedules返回参数结构体
 */
export interface DescribeSchedulesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 编排信息数组。
   */
  ScheduleInfoSet?: Array<SchedulesInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 综合增强配置
 */
export interface ImageQualityEnhanceConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 类型，可选值：
<li>weak</li>
<li>normal</li>
<li>strong</li>
默认值：weak。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * DescribeStreamLinkRegions返回参数结构体
 */
export interface DescribeStreamLinkRegionsResponse {
  /**
   * 媒体传输地区信息。
   */
  Info?: StreamLinkRegionInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoSearchTaskDetail返回参数结构体
 */
export interface DescribeVideoSearchTaskDetailResponse {
  /**
   * 查询的任务Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 查询的任务的状态，可能为WAITING、PROCESSING、FAIL、SUCCESS。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 查询的任务的结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchTaskResults?: Array<SearchTaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 拆条结果类型
 */
export interface AiAnalysisTaskSegmentResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，0：成功，其他值：失败。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 拆条任务输入。
   */
  Input?: AiAnalysisTaskSegmentInput
  /**
   * 拆条任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskSegmentOutput
}

/**
 * 语音全文识别的输入。
 */
export interface AiRecognitionTaskAsrFullTextResultInput {
  /**
   * 语音全文识别模板 ID。
   */
  Definition: number
}

/**
 * DescribeStreamLinkFlowStatistics返回参数结构体
 */
export interface DescribeStreamLinkFlowStatisticsResponse {
  /**
   * 传输流的媒体数据列表。
   */
  Infos: Array<FlowStatisticsArray>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音关键词识别输出。
 */
export interface AiRecognitionTaskAsrWordsResultOutput {
  /**
   * 语音关键词识别结果集。
   */
  ResultSet: Array<AiRecognitionTaskAsrWordsResultItem>
}

/**
 * 直播 AI Ocr 单词识别结果
 */
export interface LiveStreamOcrWordsRecognitionResult {
  /**
   * 文本关键词。
   */
  Word: string
  /**
   * 识别片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 识别片段终止的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
  /**
   * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
   */
  AreaCoords: Array<number | bigint>
}

/**
 * 直播流处理错误信息
 */
export interface LiveStreamProcessErrorInfo {
  /**
   * 错误码：
<li>0表示没有错误；</li>
<li>非0表示错误，请参考 Message 错误信息。</li>
   */
  ErrCode: number
  /**
   * 错误信息。
   */
  Message: string
}

/**
 * ModifyAdaptiveDynamicStreamingTemplate返回参数结构体
 */
export interface ModifyAdaptiveDynamicStreamingTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转码任务结果类型
 */
export interface MediaProcessTaskTranscodeResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode: number
  /**
   * 错误信息。
   */
  Message: string
  /**
   * 转码任务的输入。
   */
  Input: TranscodeTaskInput
  /**
   * 转码任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output: MediaTranscodeItem
  /**
   * 转码进度，取值范围 [0-100]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress: number
}

/**
 * 对视频按指定时间点截图任务输入参数类型
 */
export interface SnapshotByTimeOffsetTaskInput {
  /**
   * 指定时间点截图模板 ID。
   */
  Definition: number
  /**
   * 截图时间点列表，时间点支持 s、% 两种格式：
<li>当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；</li>
<li>当字符串以 % 结尾，表示时间点为视频时长的百分比大小，如10%表示时间点为视频前第10%的时间。</li>
   */
  ExtTimeOffsetSet?: Array<string>
  /**
   * 截图时间点列表，单位为<font color=red>秒</font>。此参数已不再建议使用，建议您使用 ExtTimeOffsetSet 参数。
   */
  TimeOffsetSet?: Array<number>
  /**
   * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
   */
  WatermarkSet?: Array<WatermarkInput>
  /**
   * 时间点截图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 时间点截图后图片文件的输出路径，可以为相对路径或者绝对路径。
若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。
相对路径示例：
<li>文件名_{变量名}.{format}</li>
<li>文件名.{format}</li>
绝对路径示例：
<li>/自定义路径/文件名_{变量名}.{format}</li>
如果不填，则默认为相对路径：`{inputName}_snapshotByTimeOffset_{definition}_{number}.{format}`。
   */
  OutputObjectPath?: string
  /**
   * 时间点截图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectNumberFormat?: NumberFormat
}

/**
 * 对视频截雪碧图任务输入参数类型
 */
export interface ImageSpriteTaskInput {
  /**
   * 雪碧图模板 ID。
   */
  Definition: number
  /**
   * 截取雪碧图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 截取雪碧图后，雪碧图图片文件的输出路径，可以为相对路径或者绝对路径。
若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。
相对路径示例：
<li>文件名_{变量名}.{format}</li>
<li>文件名.{format}</li>
绝对路径示例：
<li>/自定义路径/文件名_{变量名}.{format}</li>
如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}_{number}.{format}`。
   */
  OutputObjectPath?: string
  /**
   * 截取雪碧图后，Web VTT 文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}.{format}`。
   */
  WebVttObjectName?: string
  /**
   * 截取雪碧图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectNumberFormat?: NumberFormat
}

/**
 * DeleteContentReviewTemplate返回参数结构体
 */
export interface DeleteContentReviewTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 图片水印模板
 */
export interface ImageWatermarkTemplate {
  /**
   * 水印图片地址。
   */
  ImageUrl: string
  /**
   * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
   */
  Width: string
  /**
   * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；</li>
0px：表示 Height 按照 Width 对视频宽度的比例缩放。
   */
  Height: string
  /**
   * 水印重复类型。使用场景：水印为动态图像。取值范围：
<li>once：动态水印播放完后，不再出现；</li>
<li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
<li>repeat：水印循环播放，直到视频结束。</li>
   */
  RepeatType: string
}

/**
 * ModifyQualityControlTemplate返回参数结构体
 */
export interface ModifyQualityControlTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音关键词识别控制参数。
 */
export interface AsrWordsConfigureInfo {
  /**
   * 语音关键词识别任务开关，可选值：
<li>ON：开启语音关键词识别任务；</li>
<li>OFF：关闭语音关键词识别任务。</li>
   */
  Switch: string
  /**
   * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
}

/**
 * ModifyStreamLinkOutputInfo请求参数结构体
 */
export interface ModifyStreamLinkOutputInfoRequest {
  /**
   * 流Id。
   */
  FlowId: string
  /**
   * 需要修改的Output配置。
   */
  Output: ModifyOutputInfo
}

/**
 * 直播 AI Asr 单词识别结果
 */
export interface LiveStreamAsrWordsRecognitionResult {
  /**
   * 语音关键词。
   */
  Word: string
  /**
   * 识别片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 识别片段终止的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
}

/**
 * 智能按帧标签结果信息
 */
export interface MediaAiAnalysisFrameTagItem {
  /**
   * 按帧标签名称。
   */
  Tag: string
  /**
   * 按帧标签名称的分类列表，CategorySet.N 表示第 N+1级分类。
比如 Tag 为“塔楼”时，CategorySet 包含两个元素：CategorySet.0 为“场景”，CategorySet.1为 “建筑”，表示按帧标签为“塔楼”，且第1级分类是“场景”，第2级分类是“建筑”。
   */
  CategorySet: Array<string>
  /**
   * 按帧标签的可信度，取值范围是 0 到 100。
   */
  Confidence: number
}

/**
 * RecognizeMediaForZhiXue返回参数结构体
 */
export interface RecognizeMediaForZhiXueResponse {
  /**
   * 任务 ID，可以通过该 ID 查询任务状态和结果。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI 样本管理，人物信息。
 */
export interface AiSamplePerson {
  /**
   * 人物 ID。
   */
  PersonId: string
  /**
   * 人物名称。
   */
  Name: string
  /**
   * 人物描述。
   */
  Description: string
  /**
   * 人脸信息。
   */
  FaceInfoSet: Array<AiSampleFaceInfo>
  /**
   * 人物标签。
   */
  TagSet: Array<string>
  /**
   * 应用场景。
   */
  UsageSet: Array<string>
  /**
   * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string
  /**
   * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime: string
}

/**
 * 流的统计数据。
 */
export interface FlowStatistics {
  /**
   * 会话Id。
   */
  SessionId: string
  /**
   * 对端IP。
   */
  ClientIp: string
  /**
   * 总带宽。
   */
  Network: number
  /**
   * 视频数据。
   */
  Video: Array<FlowVideo>
  /**
   * 音频数据。
   */
  Audio: Array<FlowAudio>
}

/**
 * 创建的输入SRT的配置信息。
 */
export interface CreateInputSRTSettings {
  /**
   * SRT模式，可选[LISTENER|CALLER]，默认为LISTENER。
   */
  Mode?: string
  /**
   * 流Id，可选大小写字母、数字和特殊字符（.#!:&,=_-），长度为0~512。具体格式可以参考：https://github.com/Haivision/srt/blob/master/docs/features/access-control.md#standard-keys。
   */
  StreamId?: string
  /**
   * 延迟，默认0，单位ms，范围为[0, 3000]。
   */
  Latency?: number
  /**
   * 接收延迟，默认120，单位ms，范围为[0, 3000]。
   */
  RecvLatency?: number
  /**
   * 对端延迟，默认0，单位ms，范围为[0, 3000]。
   */
  PeerLatency?: number
  /**
   * 对端超时时间，默认5000，单位ms，范围为[1000, 10000]。
   */
  PeerIdleTimeout?: number
  /**
   * 解密密钥，默认为空，表示不加密。只可填ascii码值，长度为[10, 79]。
   */
  Passphrase?: string
  /**
   * 密钥长度，默认为0，可选[0|16|24|32]。
   */
  PbKeyLen?: number
  /**
   * SRT对端地址，当Mode为CALLER时必填，且只能填1组。
   */
  SourceAddresses?: Array<SRTSourceAddressReq>
}

/**
 * DescribeGroupAttachFlowsById请求参数结构体
 */
export interface DescribeGroupAttachFlowsByIdRequest {
  /**
   * 媒体传输安全组ID。
   */
  Id?: string
}

/**
 * DescribeWorkflows返回参数结构体
 */
export interface DescribeWorkflowsResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 工作流信息数组。
   */
  WorkflowInfoSet?: Array<WorkflowInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音关键词识别控制参数。
 */
export interface AsrWordsConfigureInfoForUpdate {
  /**
   * 语音关键词识别任务开关，可选值：
<li>ON：开启语音关键词识别任务；</li>
<li>OFF：关闭语音关键词识别任务。</li>
   */
  Switch?: string
  /**
   * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
}

/**
 * DeleteImageSpriteTemplate返回参数结构体
 */
export interface DeleteImageSpriteTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeContentReviewTemplates返回参数结构体
 */
export interface DescribeContentReviewTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 内容审核模板详情列表。
   */
  ContentReviewTemplateSet?: Array<ContentReviewTemplateItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamLinkActivateState返回参数结构体
 */
export interface DescribeStreamLinkActivateStateResponse {
  /**
   * 用户已激活为0，否则为非0。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频流配置参数
 */
export interface VideoTemplateInfoForUpdate {
  /**
   * 视频流的编码格式，可选值：
<li>h264：H.264 编码</li>
<li>h265：H.265 编码</li>
<li>h266：H.266 编码</li>
<li>av1：AOMedia Video 1 编码</li>
<li>vp8：VP8 编码</li>
<li>vp9：VP9 编码</li>
<li>mpeg2：MPEG2 编码</li>
<li>dnxhd：DNxHD 编码</li>
<li>mv-hevc：MV-HEVC 编码</li>

注意：av1 编码容器目前只支持 mp4 ，webm，mkv。
注意：H.266 编码容器目前只支持 mp4 ，hls，ts，mov。
注意：VP8、VP9编码容器目前只支持webm，mkv。
注意：MPEG2、dnxhd 编码容器目前只支持mxf。
注意：MV-HEVC编码容器目前只支持mp4，hls，mov。其中hls格式只支持mp4分片格式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Codec?: string
  /**
   * 视频帧率，取值范围：
当FpsDenominator的值为空时，范围：[0, 120]，单位：Hz；
当FpsDenominator的值不为空时，Fps/FpsDenominator的范围：[0,120]
当取值为 0，表示帧率和原始视频保持一致。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fps?: number
  /**
   * 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。
当取值为 0，表示视频码率和原始视频保持一致。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bitrate?: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
注意：自适应模式时，Width不能小于Height。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResolutionAdaptive?: string
  /**
   * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
注意：Codec为MV-HEVC时可以支持到7680
注意：此字段可能返回 null，表示取不到有效值。
   */
  Width?: number
  /**
   * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
注意：Codec为MV-HEVC时可以支持到7680
注意：此字段可能返回 null，表示取不到有效值。
   */
  Height?: number
  /**
   * 关键帧 I 帧之间的间隔，允许按帧或秒自定义GOP长度，取值范围：0 和 [1, 100000]。
当填 0 时，系统将自动设置 gop 长度。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Gop?: number
  /**
   * Gop数值单位，可选值： 
frame：表示帧 
second：表示秒
默认值：frame
注意：此字段可能返回 null，表示取不到有效值。
   */
  GopUnit?: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
 <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。</li>
<li>smarttailor：智能剪裁：智能选取视频画面，来保证画面比例裁剪。</li>
默认值：black 。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FillType?: string
  /**
   * 视频的恒定码率控制因子，取值范围为[0, 51]，不填表示“自动”。如果没有特殊需求，建议不指定该参数。
当Mode参数设置为VBR时，如果同时配置了Vcrf值，MPS将在VBR模式下处理视频，同时考虑Vcrf和Bitrate参数的设置，以平衡视频质量、码率、转码效率和文件大小。
当Mode参数设置为CRF，Bitrate设置将失效，编码将根据Vcrf值进行。
当Mode参数选择ABR或CBR时，无需配置Vcrf值。
注意：需要修改为自动时，填100

注意：此字段可能返回 null，表示取不到有效值。
   */
  Vcrf?: number
  /**
   * 内容自适应编码。可选值：
<li>0：不开启</li>
<li>1：开启</li>
默认值: 0.   当开启该参数时，将会自适应生成多个不同分辨率，不同码率的码流， 其中VideoTemplate的宽和高为多个码流中的最大分辨率，VideoTemplate中的码率为多个码流中的最高码率， VideoTemplate中的vcrf为多个码流中的最高质量。 当不设置分辨率、码率和vcrf时， ContentAdaptStream 参数生成的最高分辨率为视频源的分辨率，视频质量为接近vmaf95分。 若要开启该参数或了解计费细节, 请联系您的腾讯云商务。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContentAdaptStream?: number
  /**
   * 分片平均时长，取值范围：（0-10]，单位：秒
默认值：10
注意：只在封装格式HLS时使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  HlsTime?: number
  /**
   * hls 分片类型，可选值：
<li>0：HLS+TS 切片</li>
<li>2：HLS+TS byte range</li>
<li>7：HLS+MP4 切片</li>
<li>5：HLS+MP4 byte range</li>
默认值：0
注意：该字段用于普通/极速高清转码设置，对自适应码流不生效，如需给自适应码流配置分片类型，可以使用外层字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentType?: number
  /**
   * 帧率分母部分
注意：值必须大于0
注意：此字段可能返回 null，表示取不到有效值。
   */
  FpsDenominator?: number
  /**
   * 3D视频拼接方式，仅mv-hevc，3D视频生效，可选值：
<li>side_by_side：左右视角</li>
<li>top_bottom：上下视角</li>
默认值:side_by_side
注意：此字段可能返回 null，表示取不到有效值。
   */
  Stereo3dType?: string
  /**
   * Profile，适用于不同场景。 
baseline: 只支持I/P帧，并只支持无交错的场景，适用于视频通话、手机视频等场景。 
main: 主流Profile，提供I帧、P帧、B帧，并支持无交错模式和交错模式。主要用在主流的音视频消费产品如视频播放器、流媒体传输设备上。 
high: 最高编码等级，在Main Profile上添加了8X8的预测，并支持自定义量化。广泛应用在蓝光存储、高清电视等场景。
default：随原视频自动填充

仅编码标准选择h264时出现该配置，默认为：default
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoProfile?: string
  /**
   * 编码器级别，默认为自动（""）
若编码标准选择H264: 支持以下选项：""，1 , 1.1 , 1.2 , 1.3 , 2 , 2.1 , 2.2 , 3 , 3.1 , 3.2 , 4 , 4.1 , 4.2 , 5 , 5.1 
若编码标准选择H265: 支持以下选项：""，1 , 2 , 2.1 , 3 , 3.1 , 4 , 4.1 , 5 , 5.1 , 5.2 , 6 , 6.1 , 6.2 , 8.5
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoLevel?: string
  /**
   * 最大连续B帧数，默认选自动，支持 0 - 16和-1
注意：
-1表示修改为自动值	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bframes?: number
  /**
   * 码率控制模式：可选值： 
VBR（Variable Bit Rate）：动态比特率，根据视频画面的复杂度动态调整输出的码率，使得画面质量更高，适用于存储场景和对画面质量要求较高的应用。 
ABR（Average Bit Rate）：平均比特率，尽量保持输出视频的平均码率稳定，但允许短期内的码率波动，适用于需要在保持一定画质的情况下尽量减少整体码率的场景。 
CBR（Constant Bit Rate）：恒定比特率，指视频编码时输出的码率保持恒定不变，不考虑画面复杂度的变化，适用于对网络带宽要求较为严格的场景，如直播等。 
VCRF（Constant Rate Factor）：恒定质量因子，通过设定一个质量因子来控制视频质量，实现视频的恒定质量编码，码率会根据内容的复杂度自动调整，适用于希望保持一定画质的场景。 
默认选择 VBR
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * 显示高宽比，可选值：[1:1，2:1，default]
默认值：default
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sar?: string
  /**
   * 自适应I帧决策，开启后，媒体处理将自动识别视频中不同场景之间的过渡点（通常是视觉上显著不同的帧，比如从一个镜头切换到另一个镜头），在这些点自适应插入关键帧（I帧），从而提高视频的随机访问性和编码效率。可选值： 
0：关闭自适应I帧决策 
1：使用自适应I帧决策 
默认值：0	
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoScenecut?: number
  /**
   * 比特位：支持8/10，默认为8	
注意：此字段可能返回 null，表示取不到有效值。
   */
  BitDepth?: number
  /**
   * 保持原始时间戳：可选值： 
0：表示关闭 
1：表示打开 
默认是关闭	
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawPts?: number
  /**
   * 按比例压缩码率，开启后，将根据比例来调整输出视频的码率。填写压缩率后，系统会根据视频源码率自动计算目标输出码率。压缩率范围0-100，可选值：[0-100]和-1 
注意：-1表示修改为自动	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Compress?: number
  /**
   * 启动时分片时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentSpecificInfo?: SegmentSpecificInfo
  /**
   * 模板是否开启场景化 
0：不开启 
1：开启 
默认值：0	
注意：只有此字段值为1时，SceneType和CompressType字段的值才会生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScenarioBased?: number
  /**
   * 视频场景化，可选值： 
normal：通用转码场景：通用转码压缩场景 pgc：PGC高清影视：压缩时会注重影视剧的观看体验，根据影视剧特性进行ROI编码，同时保留高质量的视频内容和音频。 
materials_video：高清素材：素材资源类场景，对画质要求极高，较多透明画面内容，在压缩的同时接近视觉无损。 
ugc：UGC内容：适用于广泛的UGC/短视频场景，针对短视频的特性优化编码码率， 画质提升，提升业务QOS/QOE指标。 
e-commerce_video：秀场/电商类：压缩时会强调细节清晰度和ROI区域提升，尤其注重保持人脸区域的画质。 
educational_video：教育类：压缩时会强调文字和图像的清晰度和可读性，以便学生更好地理解内容，确保讲解内容清晰传达。
默认值：normal
注意：要使用此值ScenarioBased的值必须为1，否则此值不生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  SceneType?: string
  /**
   * 转码策略，可选值： 
ultra_compress：极致压缩：相比标准压缩，该策略能在保证一定画质的基础上最大限度压缩码率，极大节约带宽和存储成本。 
standard_compress：综合最优：平衡压缩率与画质，在保证主观画质没有明显降低的情况下尽可能压缩文件。该策略仅收取音视频极速高清转码费用。 
high_compress：码率优先：优先保证降低文件体积大小，可能有一定画质损失。该策略仅收取音视频极速高清转码费用。 
low_compress：画质优先：优先保证画质，压缩出来的文件体积可能相对较大。该策略仅收取音视频极速高清转码费用。 
默认值：standard_compress 
注：若需要在电视上观看视频，不建议使用ultra_compress策略。ultra_compress策略计费标准为极速高清转码 + 音视频增强-去毛刺。
注意：要使用此值ScenarioBased的值必须为1，否则此值不生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompressType?: string
}

/**
 * 转动图模板详情。
 */
export interface AnimatedGraphicsTemplate {
  /**
   * 转动图模板唯一标识。
   */
  Definition: number
  /**
   * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type: string
  /**
   * 转动图模板名称。
   */
  Name: string
  /**
   * 转动图模板描述。
   */
  Comment: string
  /**
   * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width: number
  /**
   * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive: string
  /**
   * 动图格式。
   */
  Format: string
  /**
   * 帧率。
   */
  Fps: number
  /**
   * 图片质量。
   */
  Quality: number
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime: string
}

/**
 * 创建输入的配置信息。
 */
export interface CreateInput {
  /**
   * 输入名称，可填大小写、数字和下划线，长度为[1, 32]。
   */
  InputName: string
  /**
   * 输入的协议，可选[SRT|RTP|RTMP_PUSH|RTMP_PULL|RTSP_PULL|RIST]。
   */
  Protocol: string
  /**
   * 输入描述，长度为[0, 255]。
   */
  Description?: string
  /**
   * 输入的IP白名单，格式为CIDR。
   */
  AllowIpList?: Array<string>
  /**
   * 输入的SRT配置信息。
   */
  SRTSettings?: CreateInputSRTSettings
  /**
   * 输入的RTP配置信息。
   */
  RTPSettings?: CreateInputRTPSettings
  /**
   * 输入的主备开关，可选[OPEN|CLOSE]，默认为CLOSE。
   */
  FailOver?: string
  /**
   * 输入的RTMP_PULL配置信息。
   */
  RTMPPullSettings?: CreateInputRTMPPullSettings
  /**
   * 输入的RTSP_PULL配置信息。
   */
  RTSPPullSettings?: CreateInputRTSPPullSettings
  /**
   * 输入的HLS_PULL配置信息。
   */
  HLSPullSettings?: CreateInputHLSPullSettings
  /**
   * 延播平滑吐流配置信息。
   */
  ResilientStream?: ResilientStreamConf
  /**
   * 绑定的输入安全组 ID。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 可用区，非必填，如果开启容灾必须输入两个不同的可用区，否则最多只允许输入一个可用区。
   */
  Zones?: Array<string>
  /**
   * 输入的RIST配置信息。
   */
  RISTSettings?: CreateInputRISTSettings
  /**
   * 输入节点的地区
   */
  InputRegion?: string
}

/**
 * 创建媒体传输流的输出的RTMP配置。
 */
export interface CreateOutputRTMPSettings {
  /**
   * 转推的目标地址，可填1~2个。
   */
  Destinations: Array<CreateOutputRtmpSettingsDestinations>
  /**
   * RTMP的Chunk大小，范围为[4096, 40960]。
   */
  ChunkSize?: number
}

/**
 * 输入规则，当上传视频命中该规则时，即触发工作流。
 */
export interface WorkflowTrigger {
  /**
   * 触发器的类型，可选值：
<li>CosFileUpload：COS触发</li>
<li>AwsS3FileUpload：AWS触发，目前只支持转码任务。只有编排支持，工作流不支持。  </li>


   */
  Type: string
  /**
   * 当 Type 为 CosFileUpload 时必填且有效，为 COS 触发规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosFileUploadTrigger?: CosFileUploadTrigger
  /**
   * 当 Type 为 AwsS3FileUpload 时必填且有效，为 AWS S3 触发规则。

注意：目前AWS的S3、对应触发队列SQS、回调队列SQS的秘钥需要一致。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AwsS3FileUploadTrigger?: AwsS3FileUploadTrigger
}

/**
 * 创建的输入HLS拉流源站配置信息。
 */
export interface HLSPullSourceAddress {
  /**
   * HLS源站的Url地址。
   */
  Url: string
}

/**
 * 直播流 AI 识别结果
 */
export interface LiveStreamAiRecognitionResultInfo {
  /**
   * 内容识别结果列表。
   */
  ResultSet: Array<LiveStreamAiRecognitionResultItem>
}

/**
 * 编排原子任务
 */
export interface ActivityPara {
  /**
   * 视频转码任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranscodeTask?: TranscodeTaskInput
  /**
   * 视频转动图任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnimatedGraphicTask?: AnimatedGraphicTaskInput
  /**
   * 视频按时间点截图任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotByTimeOffsetTask?: SnapshotByTimeOffsetTaskInput
  /**
   * 视频采样截图任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  SampleSnapshotTask?: SampleSnapshotTaskInput
  /**
   * 视频截雪碧图任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageSpriteTask?: ImageSpriteTaskInput
  /**
   * 转自适应码流任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdaptiveDynamicStreamingTask?: AdaptiveDynamicStreamingTaskInput
  /**
   * 视频内容审核类型任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiContentReviewTask?: AiContentReviewTaskInput
  /**
   * 视频内容分析类型任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiAnalysisTask?: AiAnalysisTaskInput
  /**
   * 视频内容识别类型任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiRecognitionTask?: AiRecognitionTaskInput
  /**
   * 媒体质检任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityControlTask?: AiQualityControlTaskInput
}

/**
 * 文本涉敏任务控制参数
 */
export interface TerrorismOcrReviewTemplateInfoForUpdate {
  /**
   * 文本涉敏任务开关，可选值：
<li>ON：开启文本涉敏任务；</li>
<li>OFF：关闭文本涉敏任务。</li>
   */
  Switch?: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 用户自定义语音审核任务控制参数
 */
export interface UserDefineAsrTextReviewTemplateInfoForUpdate {
  /**
   * 用户自定语音审核任务开关，可选值：
<li>ON：开启自定义语音审核任务；</li>
<li>OFF：关闭自定义语音审核任务。</li>
   */
  Switch?: string
  /**
   * 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * ModifyImageSpriteTemplate返回参数结构体
 */
export interface ModifyImageSpriteTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建的输入RIST的配置信息。
 */
export interface CreateInputRISTSettings {
  /**
   * RIST模式，可选[LISTENER]，默认为LISTENER。
   */
  Mode?: string
  /**
   * RIST配置方案，可选[MAIN|SIMPLE]，默认为MAIN。
   */
  Profile?: string
  /**
   * RIST缓冲区大小，单位为毫秒。最小值为50毫秒，最大值为5000毫秒。默认值：120
   */
  Buffer?: number
}

/**
 * CreateWatermarkTemplate请求参数结构体
 */
export interface CreateWatermarkTemplateRequest {
  /**
   * 水印类型，可选值：
<li>image：图片水印；</li>
<li>text：文字水印；</li>
<li>svg：SVG 水印。</li>
   */
  Type: string
  /**
   * 水印模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 原点位置，可选值：
<li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
<li>TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
<li>BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
<li>BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
默认值：TopLeft。
   */
  CoordinateOrigin?: string
  /**
   * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
   */
  XPos?: string
  /**
   * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
   */
  YPos?: string
  /**
   * 图片水印模板，仅当 Type 为 image，该字段必填且有效。
   */
  ImageTemplate?: ImageWatermarkInput
  /**
   * 文字水印模板，仅当 Type 为 text，该字段必填且有效。
   */
  TextTemplate?: TextWatermarkTemplateInput
  /**
   * SVG 水印模板，仅当 Type 为 svg，该字段必填且有效。
   */
  SvgTemplate?: SvgWatermarkInput
}

/**
 * 编排视频分析任务结果类型
 */
export interface ScheduleAnalysisTaskResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode: number
  /**
   * 错误信息。
   */
  Message: string
  /**
   * 分析任务的输入。
   */
  Input: AiAnalysisTaskInput
  /**
   * 分析任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output: Array<AiAnalysisResult>
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
}

/**
 * 视频编辑/合成任务 轨道元素信息。
 */
export interface ComposeMediaItem {
  /**
   * 元素类型。取值有：
<li>Video：视频元素。</li>
<li>Audio：音频元素。</li>
<li>Image：图片元素。</li>
<li>Transition：转场元素。</li>
<li>Subtitle：字幕元素。</li>
<li>Empty：空白元素。</li>
   */
  Type: string
  /**
   * 视频元素，当 Type = Video 时有效。
   */
  Video?: ComposeVideoItem
  /**
   * 音频元素，当 Type = Audio 时有效。
   */
  Audio?: ComposeAudioItem
  /**
   * 图片元素，当 Type = Image 时有效。
   */
  Image?: ComposeImageItem
  /**
   * 转场元素，当 Type = Transition 时有效。
   */
  Transition?: ComposeTransitionItem
  /**
   * 字幕元素，当 Type = Subtitle 是有效。
   */
  Subtitle?: ComposeSubtitleItem
  /**
   * 空白元素，当 Type = Empty 时有效。用于时间轴的占位。
   */
  Empty?: ComposeEmptyItem
}

/**
 * CreateStreamLinkInput请求参数结构体
 */
export interface CreateStreamLinkInputRequest {
  /**
   * 媒体传输流ID。
   */
  FlowId: string
  /**
   * 流的输入组。
   */
  InputGroup?: Array<CreateInput>
}

/**
 * 媒体质检任务结果类型
 */
export interface ScheduleQualityControlTaskResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 媒体质检任务的输入。
   */
  Input?: AiQualityControlTaskInput
  /**
   * 媒体质检任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: QualityControlData
}

/**
 * 涉敏任务控制参数。
 */
export interface TerrorismConfigureInfoForUpdate {
  /**
   * 画面涉敏任务控制参数。
   */
  ImgReviewInfo?: TerrorismImgReviewTemplateInfoForUpdate
  /**
   * 文本涉敏任务控制参数。
   */
  OcrReviewInfo?: TerrorismOcrReviewTemplateInfoForUpdate
}

/**
 * DescribePersonSamples请求参数结构体
 */
export interface DescribePersonSamplesRequest {
  /**
   * 拉取的素材类型，可选值：
<li>UserDefine：用户自定义素材库；</li>
<li>Default：系统默认素材库。</li>

默认值：UserDefine，拉取用户自定义素材库素材。
说明：如果是拉取系统默认素材库，只能使用素材名字或者素材 ID + 素材名字的方式进行拉取，且人脸图片只返回一张。
   */
  Type?: string
  /**
   * 素材 ID，数组长度限制：100。
   */
  PersonIds?: Array<string>
  /**
   * 素材名称，数组长度限制：20。
   */
  Names?: Array<string>
  /**
   * 素材标签，数组长度限制：20。
   */
  Tags?: Array<string>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：100，最大值：100。
   */
  Limit?: number
}

/**
 * EnableSchedule返回参数结构体
 */
export interface EnableScheduleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SRT输出的监听地址。
 */
export interface OutputSRTSourceAddressResp {
  /**
   * 监听IP。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip: string
  /**
   * 监听端口。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port: number
}

/**
 * 智能分类任务控制参数
 */
export interface ClassificationConfigureInfoForUpdate {
  /**
   * 智能分类任务开关，可选值：
<li>ON：开启智能分类任务；</li>
<li>OFF：关闭智能分类任务。</li>
   */
  Switch?: string
}

/**
 * 安全组信息。
 */
export interface SecurityGroupInfo {
  /**
   * 安全组 ID。
   */
  Id?: string
  /**
   * 安全组名称。
   */
  Name?: string
  /**
   * 白名单列表。
   */
  Whitelist?: Array<string>
  /**
   * 绑定的输入流列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OccupiedInputs?: Array<string>
  /**
   * 安全组地址。
   */
  Region?: string
  /**
   * 绑定的输出流列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OccupiedOutputs?: Array<string>
}

/**
 * CreateSchedule请求参数结构体
 */
export interface CreateScheduleRequest {
  /**
   * 编排名称，最多128字符。同一个用户该名称唯一。
   */
  ScheduleName: string
  /**
   * 编排绑定的触发规则，当上传视频命中该规则到该对象时即触发编排。
   */
  Trigger: WorkflowTrigger
  /**
   * 编排任务列表。
   */
  Activities: Array<Activity>
  /**
   * 媒体处理的文件输出存储位置。不填则继承 Trigger 中的存储位置。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 媒体处理生成的文件输出的目标目录，必选以 / 开头和结尾，如`/movie/201907/`。
如果不填，表示与触发文件所在的目录一致。
   */
  OutputDir?: string
  /**
   * 任务的事件通知配置，不填代表不获取事件通知。
   */
  TaskNotifyConfig?: TaskNotifyConfig
  /**
   * 资源ID，需要保证对应资源是开启状态。默认为帐号主资源ID。
   */
  ResourceId?: string
}

/**
 * 媒体传输的地区信息。
 */
export interface StreamLinkRegionInfo {
  /**
   * 媒体直传输的地区信息列表。
   */
  Regions: Array<RegionInfo>
}

/**
 * CreateVideoSearchTask返回参数结构体
 */
export interface CreateVideoSearchTaskResponse {
  /**
   * 检索任务的Id，用于后续查询任务状态和返回任务结果时标识任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVideoSearchTask请求参数结构体
 */
export interface CreateVideoSearchTaskRequest {
  /**
   * 用于检索任务的输入
   */
  SearchValueInput: SearchValueInput
  /**
   * 返回视频的最大数量，取值范围[1,20]，将返回最相近的前Limit条视频,默认为5
   */
  Limit?: number
  /**
   * 可选，用于检索任务完成后向回调方发送检索结果，目前仅支持URL方式
   */
  TaskNotifyConfig?: TaskNotifyConfig
}

/**
 * 直播 AI 打点识别结果
 */
export interface LiveStreamTagRecognitionResult {
  /**
   * 打点事件。
   */
  Id?: string
  /**
   * 识别片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime?: number
  /**
   * 识别片段终止的 PTS 时间，单位：秒。
   */
  EndPtsTime?: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence?: number
}

/**
 * 流状态实时查询接口的RTP流状态信息
 */
export interface FlowRealtimeStatusRTP {
  /**
   * 传输的包个数
   */
  Packets: number
}

/**
 * 转动图任务类型。
 */
export interface AnimatedGraphicTaskInput {
  /**
   * 视频转动图模板 ID。
   */
  Definition: number
  /**
   * 动图在视频中的开始时间，单位为秒。
   */
  StartTimeOffset: number
  /**
   * 动图在视频中的结束时间，单位为秒。
   */
  EndTimeOffset: number
  /**
   * 转动图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 转动图后文件的输出路径，可以为相对路径或者绝对路径。
若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。
相对路径示例：
<li>文件名_{变量名}.{format}</li>
<li>文件名.{format}</li>
绝对路径示例：
<li>/自定义路径/文件名_{变量名}.{format}</li>
如果不填，则默认为相对路径：`{inputName}_animatedGraphic_{definition}.{format}`。
   */
  OutputObjectPath?: string
}

/**
 * 输出的出口的地址。
 */
export interface OutputAddress {
  /**
   * 出口IP。
   */
  Ip: string
}

/**
 * 媒体处理任务中的马赛克参数类型
 */
export interface MosaicInput {
  /**
   * 原点位置，目前仅支持：
<li>TopLeft：表示坐标原点位于视频图像左上角，马赛克原点为图片或文字的左上角。</li>
默认值：TopLeft。
   */
  CoordinateOrigin?: string
  /**
   * 马赛克原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
默认值：0px。
   */
  XPos?: string
  /**
   * 马赛克原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
默认值：0px。
   */
  YPos?: string
  /**
   * 马赛克的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
默认值：10%。
   */
  Width?: string
  /**
   * 马赛克的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示马赛克 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示马赛克 Height 单位为像素，如 100px 表示 Height 为 100 像素。</li>
默认值：10%。
   */
  Height?: string
  /**
   * 马赛克的起始时间偏移，单位：秒。不填或填0，表示马赛克从画面出现时开始显现。
<li>不填或填0，表示马赛克从画面开始就出现；</li>
<li>当数值大于0时（假设为 n），表示马赛克从画面开始的第 n 秒出现；</li>
<li>当数值小于0时（假设为 -n），表示马赛克从离画面结束 n 秒前开始出现。</li>
   */
  StartTimeOffset?: number
  /**
   * 马赛克的结束时间偏移，单位：秒。
<li>不填或填0，表示马赛克持续到画面结束；</li>
<li>当数值大于0时（假设为 n），表示马赛克持续到第 n 秒时消失；</li>
<li>当数值小于0时（假设为 -n），表示马赛克持续到离画面结束 n 秒前消失。</li>
   */
  EndTimeOffset?: number
}

/**
 * DescribeStreamLinkActivateState请求参数结构体
 */
export type DescribeStreamLinkActivateStateRequest = null

/**
 * AI 智能分析模板详情
 */
export interface AIAnalysisTemplateItem {
  /**
   * 智能分析模板唯一标识。
   */
  Definition?: number
  /**
   * 智能分析模板名称。
   */
  Name?: string
  /**
   * 智能分析模板描述信息。
   */
  Comment?: string
  /**
   * 智能分类任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassificationConfigure?: ClassificationConfigureInfo
  /**
   * 智能标签任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagConfigure?: TagConfigureInfo
  /**
   * 智能封面任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CoverConfigure?: CoverConfigureInfo
  /**
   * 智能按帧标签任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameTagConfigure?: FrameTagConfigureInfo
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime?: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime?: string
  /**
   * 模板类型，取值范围：
* Preset：系统预置模板；
* Custom：用户自定义模板。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * 单个物体识别结果。
 */
export interface AiRecognitionTaskObjectResultItem {
  /**
   * 识别的物体名称。
   */
  Name: string
  /**
   * 物体出现的片段列表。
   */
  SegmentSet: Array<AiRecognitionTaskObjectSeqmentItem>
}

/**
 * 视频编辑/合成任务 信息。

关于 轨道、元素、时间轴 关系示意图：

![image](https://ie-mps-1258344699.cos.ap-nanjing.tencentcos.cn/common/cloud/EditMedia-Compose-Track-Item.png)
 */
export interface ComposeMediaConfig {
  /**
   * 合成目标视频信息。
   */
  TargetInfo?: ComposeTargetInfo
  /**
   * 合成目标视频的画布信息。
   */
  Canvas?: ComposeCanvas
  /**
   * 全局样式，和轨道 Tracks 配合使用，用于定于样式，如字幕样式。
   */
  Styles?: Array<ComposeStyles>
  /**
   * 用于描述合成视频的轨道列表，包括：视频、音频、图片、文字等元素组成的多个轨道信息。关于轨道和时间：
<ul><li>轨道时间轴即为目标视频时间轴。</li><li>时间轴上相同时间点的不同轨道上的元素会重叠：</li><ul><li>视频、图片、文字：按轨道顺序进行图像的叠加，轨道顺序靠前的在上面。</li><li>音频 ：进行混音。</li></ul></ul>注意：同一轨道中各个元素（除字幕元素外）的轨道时间不能重叠。
   */
  Tracks?: Array<ComposeMediaTrack>
}

/**
 * 直播 AI 内容审核图片敏感结果
 */
export interface LiveStreamAiReviewImagePoliticalResult {
  /**
   * 嫌疑片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 嫌疑片段结束的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 嫌疑片段敏感分数。
   */
  Confidence: number
  /**
   * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
   */
  Suggestion: string
  /**
   * 视频敏感结果标签，取值范围：
<li>politician：敏感人物。</li>
<li>violation_photo：违规图标。</li>
   */
  Label: string
  /**
   * 敏感人物、违规图标名字。
   */
  Name: string
  /**
   * 敏感人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
   */
  AreaCoordSet: Array<number | bigint>
  /**
   * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
   */
  Url: string
  /**
   * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  PicUrlExpireTime: string
}

/**
 * 图片水印模板输入参数
 */
export interface RawImageWatermarkInput {
  /**
   * 水印图片的输入内容。支持 jpeg、png 图片格式。
   */
  ImageContent: MediaInputInfo
  /**
   * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
默认值：10%。
   */
  Width?: string
  /**
   * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。</li>
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
   */
  Height?: string
  /**
   * 水印重复类型。使用场景：水印为动态图像。取值范围：
<li>once：动态水印播放完后，不再出现；</li>
<li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
<li>repeat：水印循环播放，直到视频结束（默认值）。</li>
   */
  RepeatType?: string
}

/**
 * DescribeImageSpriteTemplates请求参数结构体
 */
export interface DescribeImageSpriteTemplatesRequest {
  /**
   * 雪碧图模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
  /**
   * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type?: string
  /**
   * 雪碧图模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * CreateQualityControlTemplate请求参数结构体
 */
export interface CreateQualityControlTemplateRequest {
  /**
   * 媒体质检模板名称，长度限制：64 个字符。
   */
  Name: string
  /**
   * 媒体质检控制参数。
   */
  QualityControlItemSet: Array<QualityControlItemConfig>
  /**
   * 媒体质检模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
}

/**
 * AI 样本管理，标签操作。
 */
export interface AiSampleTagOperation {
  /**
   * 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。
   */
  Type: string
  /**
   * 标签，长度限制：128 个字符。
   */
  Tags: Array<string>
}

/**
 * SRT输入源地址。
 */
export interface SRTSourceAddressResp {
  /**
   * 对端IP。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip: string
  /**
   * 对端端口。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port: number
}

/**
 * CreateAIRecognitionTemplate返回参数结构体
 */
export interface CreateAIRecognitionTemplateResponse {
  /**
   * 视频内容识别模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询输入配置信息。
 */
export interface DescribeInput {
  /**
   * 输入Id。
   */
  InputId?: string
  /**
   * 输入名称。
   */
  InputName?: string
  /**
   * 输入描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 输入协议。
   */
  Protocol?: string
  /**
   * 输入地址列表。
   */
  InputAddressList?: Array<InputAddress>
  /**
   * 输入IP白名单列表。
   */
  AllowIpList?: Array<string>
  /**
   * 输入的SRT配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SRTSettings?: DescribeInputSRTSettings
  /**
   * 输入的RTP配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTPSettings?: DescribeInputRTPSettings
  /**
   * 输入的地区。
   */
  InputRegion?: string
  /**
   * 输入的RTMP配置信息。
   */
  RTMPSettings?: DescribeInputRTMPSettings
  /**
   * 输入的主备开关。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailOver?: string
  /**
   * 输入的RTMP_PULL配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTMPPullSettings?: DescribeInputRTMPPullSettings
  /**
   * 输入的RTSP_PULL配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTSPPullSettings?: DescribeInputRTSPPullSettings
  /**
   * 输入的HLS_PULL配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HLSPullSettings?: DescribeInputHLSPullSettings
  /**
   * 延播平滑吐流配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResilientStream?: ResilientStreamConf
  /**
   * 绑定的输入安全组 ID。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 可用区配置，开启容灾情况下最多有两个，顺序和pipeline 0、1对应，否则最多只有一个可用区。
   */
  Zones?: Array<string>
  /**
   * 输入的RIST配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RISTSettings?: DescribeInputRISTSettings
}

/**
 * DeleteTranscodeTemplate请求参数结构体
 */
export interface DeleteTranscodeTemplateRequest {
  /**
   * 转码模板唯一标识。
   */
  Definition: number
}

/**
 * 涉敏信息
 */
export interface AiReviewTerrorismTaskOutput {
  /**
   * 视频涉敏评分，分值为0到100。
   */
  Confidence: number
  /**
   * 涉敏结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * 视频涉敏结果标签，取值范围：
<li>guns：武器枪支。</li>
<li>crowd：人群聚集。</li>
<li>police：警察部队。</li>
<li>bloody：血腥画面。</li>
<li>banners：涉敏旗帜。</li>
<li>militant：武装分子。</li>
<li>explosion：爆炸火灾。</li>
<li>terrorists：涉敏人物。</li>
<li>scenario：涉敏画面。</li>
   */
  Label: string
  /**
   * 有涉敏嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewSegmentItem>
}

/**
 * BatchStartStreamLinkFlow返回参数结构体
 */
export interface BatchStartStreamLinkFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateSecurityGroup请求参数结构体
 */
export interface DisassociateSecurityGroupRequest {
  /**
   * 媒体传输安全组ID。
   */
  Id?: string
  /**
   * 要解绑的输入输出信息列表。
   */
  UnattachInOutInfos?: Array<UnattachSecurityGroupInOutInfo>
}

/**
 * 违禁任务控制参数
 */
export interface ProhibitedConfigureInfo {
  /**
   * 语音违禁控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsrReviewInfo?: ProhibitedAsrReviewTemplateInfo
  /**
   * 文本违禁控制参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OcrReviewInfo?: ProhibitedOcrReviewTemplateInfo
}

/**
 * DescribeStreamLinkFlowSRTStatistics返回参数结构体
 */
export interface DescribeStreamLinkFlowSRTStatisticsResponse {
  /**
   * 传输流的SRT质量数据列表。
   */
  Infos: Array<FlowSRTInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Ocr 文字涉敏信息
 */
export interface AiReviewTerrorismOcrTaskOutput {
  /**
   * Ocr 文字涉敏评分，分值为0到100。
   */
  Confidence: number
  /**
   * Ocr 文字涉敏结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * Ocr 文字有涉敏嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewOcrTextSegmentItem>
}

/**
 * 智能分析结果
 */
export interface AiAnalysisResult {
  /**
   * 任务的类型，可以取的值有：
<li>Classification：智能分类</li>
<li>Cover：智能封面</li>
<li>Tag：智能标签</li>
<li>FrameTag：智能按帧标签</li>
<li>Highlight：智能精彩集锦</li>
<li>DeLogo：智能擦除</li>
<li>Description：大模型摘要</li>
   */
  Type?: string
  /**
   * 视频内容分析智能分类任务的查询结果，当任务类型为 Classification 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassificationTask?: AiAnalysisTaskClassificationResult
  /**
   * 视频内容分析智能封面任务的查询结果，当任务类型为 Cover 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CoverTask?: AiAnalysisTaskCoverResult
  /**
   * 视频内容分析智能标签任务的查询结果，当任务类型为 Tag 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagTask?: AiAnalysisTaskTagResult
  /**
   * 视频内容分析智能按帧标签任务的查询结果，当任务类型为 FrameTag 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrameTagTask?: AiAnalysisTaskFrameTagResult
  /**
   * 视频内容分析集锦任务的查询结果，当任务类型为 Highlight时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HighlightTask?: AiAnalysisTaskHighlightResult
  /**
   * 视频内容分析智能擦除任务的查询结果，当任务类型为 DeLogo 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeLogoTask?: AiAnalysisTaskDelLogoResult
  /**
   * 视频内容分析拆条任务的查询结果，当任务类型为 SegmentRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentTask?: AiAnalysisTaskSegmentResult
  /**
   * 视频内容分析片头片尾任务的查询结果，当任务类型为 HeadTailRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HeadTailTask?: AiAnalysisTaskHeadTailResult
  /**
   * 视频内容分析摘要任务的查询结果，当任务类型为 Description 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DescriptionTask?: AiAnalysisTaskDescriptionResult
  /**
   * 视频内容分析横转竖任务的查询结果，当任务类型为 HorizontalToVertical 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HorizontalToVerticalTask?: AiAnalysisTaskHorizontalToVerticalResult
}

/**
 * 图片水印模板输入参数
 */
export interface ImageWatermarkInputForUpdate {
  /**
   * 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。
   */
  ImageContent?: string
  /**
   * 水印的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。</li>
   */
  Width?: string
  /**
   * 水印的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
<li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。</li>

   */
  Height?: string
  /**
   * 水印重复类型。使用场景：水印为动态图像。取值范围：
<li>once：动态水印播放完后，不再出现；</li>
<li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
<li>repeat：水印循环播放，直到视频结束。</li>
   */
  RepeatType?: string
}

/**
 * DescribeAIAnalysisTemplates请求参数结构体
 */
export interface DescribeAIAnalysisTemplatesRequest {
  /**
   * 视频内容分析模板唯一标识过滤条件，数组长度限制：10。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
  /**
   * 模板类型过滤条件，不填则返回所有，可选值：
   * Preset：系统预置模板；
   * Custom：用户自定义模板。
   */
  Type?: string
  /**
   * 视频内容分析模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * 流的视频数据。
 */
export interface FlowVideo {
  /**
   * 帧率。
   */
  Fps: number
  /**
   * 码率，单位是bps。
   */
  Rate: number
  /**
   * 音频Pid。
   */
  Pid: number
}

/**
 * 文本关键词识别结果。
 */
export interface AiRecognitionTaskOcrWordsResultItem {
  /**
   * 文本关键词。
   */
  Word: string
  /**
   * 文本关键出现的片段列表。
   */
  SegmentSet: Array<AiRecognitionTaskOcrWordsSegmentItem>
}

/**
 * ProcessImage请求参数结构体
 */
export interface ProcessImageRequest {
  /**
   * 图片处理的文件输入信息。
   */
  InputInfo: MediaInputInfo
  /**
   * 图片处理输出文件的目标存储。不填则继承 InputInfo 中的存储位置。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 图片处理生成的文件输出的路径。如果不填表示与 InputInfo 中文件所在的目录一致。如果是目录，如`/image/201907/`，表示继承原文件名输出到该目录。
   */
  OutputDir?: string
  /**
   * 图片处理参数。
   */
  ImageTask?: ImageTaskInput
}

/**
 * DeleteSampleSnapshotTemplate返回参数结构体
 */
export interface DeleteSampleSnapshotTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能标签任务输入类型
 */
export interface AiAnalysisTaskTagInput {
  /**
   * 视频智能标签模板 ID。
   */
  Definition: number
}

/**
 * 智能描述结果类型
 */
export interface AiAnalysisTaskDescriptionResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，0：成功，其他值：失败。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 智能描述任务输入。
   */
  Input?: AiAnalysisTaskDescriptionInput
  /**
   * 智能描述任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskDescriptionOutput
}

/**
 * ResetWorkflow请求参数结构体
 */
export interface ResetWorkflowRequest {
  /**
   * 工作流 ID。
   */
  WorkflowId: number
  /**
   * 工作流名称，最多128字符。同一个用户该名称唯一。
   */
  WorkflowName: string
  /**
   * 工作流绑定的触发规则，当上传视频命中该规则到该对象时即触发工作流。
   */
  Trigger: WorkflowTrigger
  /**
   * 视频处理的文件输出配置。不填则继承 Trigger 中的存储位置。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 视频处理生成的文件输出的目标目录，必选以 / 开头和结尾，如`/movie/201907/`。
如果不填，表示与触发文件所在的目录一致，即`{inputDir}`。
   */
  OutputDir?: string
  /**
   * 视频处理类型任务参数。
   */
  MediaProcessTask?: MediaProcessTaskInput
  /**
   * 视频内容审核类型任务参数。
   */
  AiContentReviewTask?: AiContentReviewTaskInput
  /**
   * 视频内容分析类型任务参数。
   */
  AiAnalysisTask?: AiAnalysisTaskInput
  /**
   * 视频内容识别类型任务参数。
   */
  AiRecognitionTask?: AiRecognitionTaskInput
  /**
   * 工作流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
   */
  TaskPriority?: number
  /**
   * 任务的事件通知信息，不填代表不获取事件通知。
   */
  TaskNotifyConfig?: TaskNotifyConfig
}

/**
 * 物体识别任务输入类型。
 */
export interface AiRecognitionTaskObjectResultInput {
  /**
   * 物体识别模板 ID。
   */
  Definition: number
}

/**
 * 内容审核涉敏任务结果类型
 */
export interface AiReviewTaskTerrorismResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核涉敏任务输入。
   */
  Input?: AiReviewTerrorismTaskInput
  /**
   * 内容审核涉敏任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewTerrorismTaskOutput
}

/**
 * 查询输出的配置信息。
 */
export interface DescribeOutput {
  /**
   * 输出Id。
   */
  OutputId?: string
  /**
   * 输出名称。
   */
  OutputName?: string
  /**
   * 输出类型。
   */
  OutputType?: string
  /**
   * 输出描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 输出协议。
   */
  Protocol?: string
  /**
   * 输出的出口地址信息列表。
   */
  OutputAddressList?: Array<OutputAddress>
  /**
   * 输出的地区。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputRegion?: string
  /**
   * 输出的SRT配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SRTSettings?: DescribeOutputSRTSettings
  /**
   * 输出的RTP配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTPSettings?: DescribeOutputRTPSettings
  /**
   * 输出的RTMP配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTMPSettings?: DescribeOutputRTMPSettings
  /**
   * 输出的RTMP拉流配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTMPPullSettings?: DescribeOutputRTMPPullSettings
  /**
   * CIDR白名单列表。
当Protocol为RTMP_PULL有效，为空代表不限制客户端IP。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowIpList?: Array<string>
  /**
   * 输出的RTSP拉流配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RTSPPullSettings?: DescribeOutputRTSPPullSettings
  /**
   * 输出的HLS拉流配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HLSPullSettings?: DescribeOutputHLSPullSettings
  /**
   * 最大拉流并发数，最大为4，默认4。
   */
  MaxConcurrent?: number
  /**
   * 绑定的安全组 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 可用区，output目前最多只支持一个。
   */
  Zones?: Array<string>
  /**
   * 输出的RIST配置信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RISTSettings?: DescribeOutputRISTSettings
  /**
   * 对于含有多个音/视频轨的流，可以指定需要使用的轨道
   */
  PidSelector?: PidSelector
}

/**
 * 直播 AI 内容审核声音鉴黄结果
 */
export interface LiveStreamAiReviewVoicePornResult {
  /**
   * 嫌疑片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 嫌疑片段结束的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 嫌疑片段涉黄分数。
   */
  Confidence: number
  /**
   * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
   */
  Suggestion: string
  /**
   * 视频鉴黄结果标签，取值范围：
<li>sexual_moan：呻吟。</li>
   */
  Label: string
}

/**
 * 内容审核 Asr 文字审核嫌疑片段
 */
export interface MediaContentReviewAsrTextSegmentItem {
  /**
   * 嫌疑片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 嫌疑片段结束的偏移时间，单位：秒。
   */
  EndTimeOffset: number
  /**
   * 嫌疑片段置信度。
   */
  Confidence: number
  /**
   * 嫌疑片段审核结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * 嫌疑关键词列表。
   */
  KeywordSet: Array<string>
}

/**
 * 内容审核涉敏嫌疑片段
 */
export interface MediaContentReviewPoliticalSegmentItem {
  /**
   * 嫌疑片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 嫌疑片段结束的偏移时间，单位：秒。
   */
  EndTimeOffset: number
  /**
   * 嫌疑片段涉敏分数。
   */
  Confidence: number
  /**
   * 嫌疑片段涉敏结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * 涉敏人物、违规图标名字。
   */
  Name: string
  /**
   * 嫌疑片段涉敏结果标签。内容审核模板[画面涉敏任务控制参数](https://cloud.tencent.com/document/api/862/37615#PoliticalImgReviewTemplateInfo)里 LabelSet 参数与此参数取值范围的对应关系：
violation_photo：
<li>violation_photo：违规图标。</li>
politician：
<li>nation_politician：国家领导人；</li>
<li>province_politician: 省部级领导人；</li>
<li>bureau_politician：厅局级领导人；</li>
<li>county_politician：县处级领导人；</li>
<li>rural_politician：乡科级领导人；</li>
<li>sensitive_politician：涉敏人物；</li>
<li>foreign_politician：国外领导人。</li>
entertainment：
<li>sensitive_entertainment：敏感娱乐人物。</li>
sport：
<li>sensitive_sport：敏感体育人物。</li>
entrepreneur：
<li>sensitive_entrepreneur：敏感商业人物。</li>
scholar：
<li>sensitive_scholar：敏感教育学者。</li>
celebrity：
<li>sensitive_celebrity：敏感知名人物；</li>
<li>historical_celebrity：历史知名人物。</li>
military：
<li>sensitive_military：敏感军事人物。</li>
   */
  Label: string
  /**
   * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
   */
  Url: string
  /**
   * 涉敏人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
   */
  AreaCoordSet: Array<number | bigint>
  /**
   * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  PicUrlExpireTime: string
}

/**
 * DeletePersonSample返回参数结构体
 */
export interface DeletePersonSampleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartStreamLinkFlow请求参数结构体
 */
export interface StartStreamLinkFlowRequest {
  /**
   * 流Id。
   */
  FlowId: string
}

/**
 * CreateSnapshotByTimeOffsetTemplate返回参数结构体
 */
export interface CreateSnapshotByTimeOffsetTemplateResponse {
  /**
   * 时间点截图模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyStreamLinkOutputInfo返回参数结构体
 */
export interface ModifyStreamLinkOutputInfoResponse {
  /**
   * 修改后的Output配置。
   */
  Info: DescribeOutput
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyContentReviewTemplate请求参数结构体
 */
export interface ModifyContentReviewTemplateRequest {
  /**
   * 内容审核模板唯一标识。
   */
  Definition: number
  /**
   * 内容审核模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 内容审核模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 令人反感的信息的控制参数。
   */
  PornConfigure?: PornConfigureInfoForUpdate
  /**
   * 令人不安全的信息的控制参数。
   */
  TerrorismConfigure?: TerrorismConfigureInfoForUpdate
  /**
   * 令人不适宜的控制参数。
   */
  PoliticalConfigure?: PoliticalConfigureInfoForUpdate
  /**
   * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此参数尚未支持。
   */
  ProhibitedConfigure?: ProhibitedConfigureInfoForUpdate
  /**
   * 用户自定义内容审核控制参数。
   */
  UserDefineConfigure?: UserDefineConfigureInfoForUpdate
}

/**
 * StopStreamLinkFlow返回参数结构体
 */
export interface StopStreamLinkFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能封面结果信息
 */
export interface AiAnalysisTaskCoverOutput {
  /**
   * 智能封面列表。
   */
  CoverSet: Array<MediaAiAnalysisCoverItem>
  /**
   * 智能封面的存储位置。
   */
  OutputStorage: TaskOutputStorage
}

/**
 * 智能内容审核任务类型
 */
export interface AiContentReviewTaskInput {
  /**
   * 视频内容审核模板 ID。
   */
  Definition: number
}

/**
 * 输入地址信息。
 */
export interface InputAddress {
  /**
   * 输入地址的IP。
   */
  Ip: string
  /**
   * 输入地址的端口。
   */
  Port: number
}

/**
 * DeleteSchedule请求参数结构体
 */
export interface DeleteScheduleRequest {
  /**
   * 编排唯一标识。
   */
  ScheduleId: number
}

/**
 * CreateAdaptiveDynamicStreamingTemplate返回参数结构体
 */
export interface CreateAdaptiveDynamicStreamingTemplateResponse {
  /**
   * 自适应转码模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSampleSnapshotTemplate请求参数结构体
 */
export interface DeleteSampleSnapshotTemplateRequest {
  /**
   * 采样截图模板唯一标识。
   */
  Definition: number
}

/**
 * DescribeTranscodeTemplates返回参数结构体
 */
export interface DescribeTranscodeTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 转码模板详情列表。
   */
  TranscodeTemplateSet?: Array<TranscodeTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 雪碧图模板详情
 */
export interface ImageSpriteTemplate {
  /**
   * 雪碧图模板唯一标识。
   */
  Definition: number
  /**
   * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type: string
  /**
   * 雪碧图模板名称。
   */
  Name: string
  /**
   * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width: number
  /**
   * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive: string
  /**
   * 采样类型。
   */
  SampleType: string
  /**
   * 采样间隔。
   */
  SampleInterval: number
  /**
   * 雪碧图中小图的行数。
   */
  RowCount: number
  /**
   * 雪碧图中小图的列数。
   */
  ColumnCount: number
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
   */
  FillType: string
  /**
   * 模板描述信息。
   */
  Comment: string
  /**
   * 图片格式。
   */
  Format: string
}

/**
 * 文本全文识别片段。
 */
export interface AiRecognitionTaskOcrFullTextSegmentTextItem {
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
  /**
   * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
   */
  AreaCoordSet: Array<number | bigint>
  /**
   * 识别文本。
   */
  Text: string
}

/**
 * 质检结果项
 */
export interface QualityControlItem {
  /**
   * 置信度，取值范围是 0 到 100。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Confidence?: number
  /**
   * 出现的起始时间戳，秒。
   */
  StartTimeOffset?: number
  /**
   * 出现的结束时间戳，秒。
   */
  EndTimeOffset?: number
  /**
   * 区域坐标(px)，即左上角坐标、右下角坐标。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AreaCoordSet?: Array<number | bigint>
}

/**
 * DeleteStreamLinkFlow返回参数结构体
 */
export interface DeleteStreamLinkFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直播识别 Asr 全文识别
 */
export interface LiveStreamAsrFullTextRecognitionResult {
  /**
   * 识别文本。
   */
  Text: string
  /**
   * 识别片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 识别片段终止的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
  /**
   * 识别开始UTC时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 识别结束UTC时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 稳态标记。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SteadyState?: boolean
}

/**
 * Ocr 文字涉黄信息
 */
export interface AiReviewPornOcrTaskOutput {
  /**
   * Ocr 文字涉黄评分，分值为0到100。
   */
  Confidence: number
  /**
   * Ocr 文字涉黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * Ocr 文字有涉黄嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewOcrTextSegmentItem>
}

/**
 * CreateSampleSnapshotTemplate返回参数结构体
 */
export interface CreateSampleSnapshotTemplateResponse {
  /**
   * 采样截图模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能精彩片段任务输入类型
 */
export interface AiAnalysisTaskHighlightInput {
  /**
   * 视频智能精彩片段模板 ID。
   */
  Definition: number
}

/**
 * 语音违禁任务控制参数
 */
export interface ProhibitedAsrReviewTemplateInfo {
  /**
   * 语音违禁任务开关，可选值：
<li>ON：开启语音违禁任务；</li>
<li>OFF：关闭语音违禁任务。</li>
   */
  Switch: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * WithdrawsWatermark返回参数结构体
 */
export interface WithdrawsWatermarkResponse {
  /**
   * 任务 ID，可以通过该 ID 查询任务状态和结果。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能拆条片段。
 */
export interface SegmentRecognitionItem {
  /**
   * 置信度。
   */
  Confidence?: number
  /**
   * 片段起始时间偏移。
   */
  StartTimeOffset?: number
  /**
   * 片段结束时间偏移。
   */
  EndTimeOffset?: number
  /**
   * 拆条片段URL。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentUrl?: string
  /**
   * 拆条片段封面。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CovImgUrl?: string
  /**
   * 分段标题。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 分段概要。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Summary?: string
  /**
   * 分段关键词。
   */
  Keywords?: Array<string>
  /**
   * 直播切片对应直播起始时间点，采用 ISO 日期格式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginTime?: string
  /**
   * 直播切片对应直播结束时间点，采用 ISO 日期格式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 直播拆条用，音频url。
   */
  AudioUrl?: string
  /**
   * 直播拆条用，音频对应起始时间戳；
   */
  AudioBeginTime?: number
  /**
   * 直播拆条用，音频对应结束时间戳。
   */
  AudioEndTime?: number
  /**
   * 直播拆条用，人物位置参考信息用于横转竖。
   */
  PersonPositionUrl?: string
}

/**
 * 内容审核 Asr 文字敏感任务输入参数类型
 */
export interface AiReviewPoliticalAsrTaskInput {
  /**
   * 模板 ID。
   */
  Definition: number
}

/**
 * 直播流分析结果
 */
export interface LiveStreamAiAnalysisResultInfo {
  /**
   * 直播分析子任务结果，暂时只支持直播拆条。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultSet?: Array<LiveStreamAiAnalysisResultItem>
}

/**
 * 切片特殊配置信息。
 */
export interface SegmentSpecificInfo {
  /**
   * 启动分片时长开关，可选值：
on：打开
off：关闭
默认off
注意：此字段可能返回 null，表示取不到有效值。
   */
  Switch?: string
  /**
   * 启动时分片时长，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  FragmentTime?: number
  /**
   * 生效分片数，表示前FragmentEndNum个分片以FragmentTime时长切片，取值>=1
注意：此字段可能返回 null，表示取不到有效值。
   */
  FragmentEndNum?: number
}

/**
 * 动作识别参数配置
 */
export interface ActionConfigInfo {
  /**
   * 动作识别任务开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
   */
  Switch: string
}

/**
 * 智能标签结果信息
 */
export interface MediaAiAnalysisTagItem {
  /**
   * 标签名称。
   */
  Tag: string
  /**
   * 标签的可信度，取值范围是 0 到 100。
   */
  Confidence: number
}

/**
 * 转码模板详情
 */
export interface TranscodeTemplate {
  /**
   * 转码模板唯一标识。
   */
  Definition?: string
  /**
   * 封装格式，取值：mp4、flv、hls、mp3、flac、ogg。
   */
  Container?: string
  /**
   * 转码模板名称。
   */
  Name?: string
  /**
   * 模板描述信息。
   */
  Comment?: string
  /**
   * 模板类型，取值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type?: string
  /**
   * 是否去除视频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
   */
  RemoveVideo?: number
  /**
   * 是否去除音频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
   */
  RemoveAudio?: number
  /**
   * 视频流配置参数，仅当 RemoveVideo 为 0，该字段有效。
   */
  VideoTemplate?: VideoTemplateInfo
  /**
   * 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。
   */
  AudioTemplate?: AudioTemplateInfo
  /**
   * 极速高清转码参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TEHDConfig?: TEHDConfig
  /**
   * 封装格式过滤条件，可选值：
<li>Video：视频格式，可以同时包含视频流和音频流的封装格式；</li>
<li>PureAudio：纯音频格式，只能包含音频流的封装格式板。</li>
   */
  ContainerType?: string
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime?: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime?: string
  /**
   * 音视频增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnhanceConfig?: EnhanceConfig
  /**
   * 转码模板别名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AliasName?: string
}

/**
 * DescribeStreamLinkFlowMediaStatistics返回参数结构体
 */
export interface DescribeStreamLinkFlowMediaStatisticsResponse {
  /**
   * 传输流的媒体数据列表。
   */
  Infos: Array<FlowMediaInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本鉴黄任务控制参数
 */
export interface PornOcrReviewTemplateInfo {
  /**
   * 文本鉴黄任务开关，可选值：
<li>ON：开启文本鉴黄任务；</li>
<li>OFF：关闭文本鉴黄任务。</li>
   */
  Switch: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 创建媒体传输流的输出的RTP配置。
 */
export interface CreateOutputInfoRTPSettings {
  /**
   * 转推的目标地址，可填1~2个。
   */
  Destinations: Array<CreateOutputRTPSettingsDestinations>
  /**
   * 只能填none。
   */
  FEC: string
  /**
   * 空闲超时时间，单位ms。
   */
  IdleTimeout: number
}

/**
 * 内容审核 Asr 文字敏感任务结果类型
 */
export interface AiReviewTaskPoliticalAsrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核 Asr 文字敏感任务输入。
   */
  Input?: AiReviewPoliticalAsrTaskInput
  /**
   * 内容审核 Asr 文字敏感任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewPoliticalAsrTaskOutput
}

/**
 * 查询输入的RTSP配置信息。
 */
export interface DescribeInputRTSPPullSettings {
  /**
   * RTSP源站地址信息。
   */
  SourceAddresses: Array<DescribeRTSPPullSourceAddress>
}

/**
 * 字幕流配置参数。
 */
export interface SubtitleTemplate {
  /**
   * 要压制到视频中的字幕文件地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 指定要压制到视频中的字幕轨道，如果有指定Path，则Path 优先级更高。Path 和 StreamIndex 至少指定一个。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamIndex?: number
  /**
   * 字体类型，
<li>hei.ttf：黑体</li>
<li>song.ttf：宋体</li>
<li>simkai.ttf：楷体</li>
<li>arial.ttf：仅支持英文</li>
默认hei.ttf
注意：此字段可能返回 null，表示取不到有效值。
   */
  FontType?: string
  /**
   * 字体大小，格式：Npx，N 为数值，不指定则以字幕文件中为准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FontSize?: string
  /**
   * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）
注意：此字段可能返回 null，表示取不到有效值。
   */
  FontColor?: string
  /**
   * 文字透明度，取值范围：(0, 1]
<li>0：完全透明</li>
<li>1：完全不透明</li>
默认值：1。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FontAlpha?: number
}

/**
 * 查询Flow的配置信息。
 */
export interface DescribeFlow {
  /**
   * 流Id。
   */
  FlowId?: string
  /**
   * 流名称。
   */
  FlowName?: string
  /**
   * 流状态，目前有IDLE/RUNNING。
   */
  State?: string
  /**
   * 最大带宽值。
   */
  MaxBandwidth?: number
  /**
   * 输入组。
   */
  InputGroup?: Array<DescribeInput>
  /**
   * 输出组。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputGroup?: Array<DescribeOutput>
  /**
   * 该Flow关联的媒体传输事件EventId。
   */
  EventId?: string
  /**
   * 媒体传输输入流所属的区域，取值和InputRegion相同。
   */
  Region?: string
  /**
   * 该Flow允许创建的输入协议
   */
  AllowedInputProtocols?: Array<string>
  /**
   * 该Flow允许创建的输出协议
   */
  AllowedOutputProtocols?: Array<string>
}

/**
 * CreateVideoDatabaseEntryTask返回参数结构体
 */
export interface CreateVideoDatabaseEntryTaskResponse {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内容审核 Asr 文字鉴违禁任务输入参数类型
 */
export interface AiReviewProhibitedAsrTaskInput {
  /**
   * 鉴违禁模板 ID。
   */
  Definition: number
}

/**
 * DescribeMediaMetaData返回参数结构体
 */
export interface DescribeMediaMetaDataResponse {
  /**
   * 媒体元信息。
   */
  MetaData?: MediaMetaData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本涉敏任务控制参数
 */
export interface TerrorismOcrReviewTemplateInfo {
  /**
   * 文本涉敏任务开关，可选值：
<li>ON：开启文本涉敏任务；</li>
<li>OFF：关闭文本涉敏任务。</li>
   */
  Switch: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 细节增强配置
 */
export interface SharpEnhanceConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 强度，取值范围：0.0~1.0。
默认：0.0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Intensity?: number
}

/**
 * 图片编码格式参数
 */
export interface ImageEncodeConfig {
  /**
   * 图片格式，取值范围：JPG、BMP、GIF、PNG、WebP，缺省为原图格式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Format?: string
  /**
   * 图片的相对质量，取值范围：1 - 100，数值以原图质量为标准，缺省为原图质量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Quality?: number
}

/**
 * 内容审核鉴黄任务结果类型
 */
export interface AiReviewTaskPornResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核鉴黄任务输入。
   */
  Input?: AiReviewPornTaskInput
  /**
   * 内容审核鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewPornTaskOutput
}

/**
 * DescribeStreamLinkFlowRealtimeStatus请求参数结构体
 */
export interface DescribeStreamLinkFlowRealtimeStatusRequest {
  /**
   * 流ID。
   */
  FlowId: string
  /**
   * 输入id数组，如果输入输出数组都为空，则代表全量查询。
   */
  InputIds?: Array<string>
  /**
   * 输出id数组，如果输入输出数组都为空，则代表全量查询。
   */
  OutputIds?: Array<string>
}

/**
 * 智能擦除结果信息
 */
export interface AiAnalysisTaskDelLogoOutput {
  /**
   * 擦除后文件的路径。
   */
  Path?: string
  /**
   * 擦除后文件的存储位置。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 基于画面提取的字幕文件路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginSubtitlePath?: string
  /**
   * 基于画面提取的字幕翻译文件路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranslateSubtitlePath?: string
}

/**
 * Asr 文字涉违禁信息
 */
export interface AiReviewProhibitedAsrTaskOutput {
  /**
   * Asr 文字涉违禁评分，分值为0到100。
   */
  Confidence: number
  /**
   * Asr 文字涉违禁结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * Asr 文字有涉违禁嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewAsrTextSegmentItem>
}

/**
 * 直播 AI 人脸识别结果
 */
export interface LiveStreamFaceRecognitionResult {
  /**
   * 人物唯一标识 ID。
   */
  Id: string
  /**
   * 人物名称。
   */
  Name: string
  /**
   * 人物库类型，表示识别出的人物来自哪个人物库：
<li>Default：默认人物库；</li><li>UserDefine：用户自定义人物库。</li>
   */
  Type: string
  /**
   * 识别片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 识别片段终止的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
  /**
   * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
   */
  AreaCoordSet: Array<number | bigint>
}

/**
 * DescribeSampleSnapshotTemplates请求参数结构体
 */
export interface DescribeSampleSnapshotTemplatesRequest {
  /**
   * 采样截图模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
  /**
   * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type?: string
  /**
   * 采样截图模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * 智能封面任务控制参数
 */
export interface CoverConfigureInfoForUpdate {
  /**
   * 智能封面任务开关，可选值：
<li>ON：开启智能封面任务；</li>
<li>OFF：关闭智能封面任务。</li>
   */
  Switch?: string
}

/**
 * DisableWorkflow返回参数结构体
 */
export interface DisableWorkflowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能分类任务结果类型
 */
export interface AiAnalysisTaskClassificationResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 智能分类任务输入。
   */
  Input?: AiAnalysisTaskClassificationInput
  /**
   * 智能分类任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskClassificationOutput
}

/**
 * DescribeQualityControlTemplates返回参数结构体
 */
export interface DescribeQualityControlTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 媒体质检模板详情列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityControlTemplateSet?: Array<QualityControlTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 画面涉敏任务控制参数。
 */
export interface PoliticalImgReviewTemplateInfoForUpdate {
  /**
   * 画面涉敏任务开关，可选值：
<li>ON：开启画面涉敏任务；</li>
<li>OFF：关闭画面涉敏任务。</li>
   */
  Switch?: string
  /**
   * 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>violation_photo：违规图标；</li>
<li>politician：涉敏人物；</li>
<li>entertainment：娱乐人物；</li>
<li>sport：体育人物；</li>
<li>entrepreneur：商业人物；</li>
<li>scholar：教育学者；</li>
<li>celebrity：知名人物；</li>
<li>military：军事人物。</li>
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 流状态实时查询接口的RTMP信息。
 */
export interface FlowRealtimeStatusRTMP {
  /**
   * 视频帧率。
   */
  VideoFPS: number
  /**
   * 音频帧率。
   */
  AudioFPS: number
}

/**
 * 用户自定义文本审核任务控制参数
 */
export interface UserDefineOcrTextReviewTemplateInfo {
  /**
   * 用户自定文本审核任务开关，可选值：
<li>ON：开启自定义文本审核任务；</li>
<li>OFF：关闭自定义文本审核任务。</li>
   */
  Switch: string
  /**
   * 用户自定义文本过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 自适应转码流参数模板
 */
export interface AdaptiveStreamTemplate {
  /**
   * 音频参数信息。
   */
  Audio: AudioTemplateInfo
  /**
   * 视频参数信息。
   */
  Video?: VideoTemplateInfo
  /**
   * 是否移除音频流，取值范围：
<li>0：否，</li>
<li>1：是。</li>
   */
  RemoveAudio?: number
  /**
   * 是否移除视频流，取值范围：
<li>0：否，</li>
<li>1：是。</li>
   */
  RemoveVideo?: number
}

/**
 * DescribeStreamLinkEvents请求参数结构体
 */
export interface DescribeStreamLinkEventsRequest {
  /**
   * 当前页数，默认1。
   */
  PageNum?: number
  /**
   * 每页大小，默认10。
   */
  PageSize?: number
}

/**
 * 转码任务输入参数类型
 */
export interface TranscodeTaskInput {
  /**
   * 视频转码模板 ID。
   */
  Definition: number
  /**
   * 视频转码自定义参数，当 Definition 填 0 时有效。
该参数用于高度定制场景，建议您优先使用 Definition 指定转码参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawParameter?: RawTranscodeParameter
  /**
   * 视频转码自定义参数，当 Definition 不填 0 时有效。
当填写了该结构中的部分转码参数时，将使用填写的参数覆盖转码模板中的参数。
该参数用于高度定制场景，建议您仅使用 Definition 指定转码参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OverrideParameter?: OverrideTranscodeParameter
  /**
   * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WatermarkSet?: Array<WatermarkInput>
  /**
   * 马赛克列表，最大可支持 10 张。
   */
  MosaicSet?: Array<MosaicInput>
  /**
   * 转码后的视频的起始时间偏移，单位：秒。
<li>不填或填0，表示转码后的视频从原始视频的起始位置开始；</li>
<li>当数值大于0时（假设为 n），表示转码后的视频从原始视频的第 n 秒位置开始；</li>
<li>当数值小于0时（假设为 -n），表示转码后的视频从原始视频结束 n 秒前的位置开始。</li>
   */
  StartTimeOffset?: number
  /**
   * 转码后视频的终止时间偏移，单位：秒。
<li>不填或填0，表示转码后的视频持续到原始视频的末尾终止；</li>
<li>当数值大于0时（假设为 n），表示转码后的视频持续到原始视频第 n 秒时终止；</li>
<li>当数值小于0时（假设为 -n），表示转码后的视频持续到原始视频结束 n 秒前终止。</li>
   */
  EndTimeOffset?: number
  /**
   * 转码后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 转码后主文件的输出路径，可以为相对路径或者绝对路径。
若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。
相对路径示例：
<li>文件名_{变量名}.{format}</li>
<li>文件名.{format}</li>
绝对路径示例：
<li>/自定义路径/文件名_{变量名}.{format}</li>
如果不填，则默认为相对路径：`{inputName}_transcode_{definition}.{format}`。

   */
  OutputObjectPath?: string
  /**
   * 转码后分片文件的输出路径（转码 HLS 时 ts 的路径），只能为相对路径。如果不填，则默认为：`{inputName}_transcode_{definition}_{number}.{format}`。
   */
  SegmentObjectName?: string
  /**
   * 转码后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectNumberFormat?: NumberFormat
  /**
   * 片头片尾参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HeadTailParameter?: HeadTailParameter
}

/**
 * CreateStreamLinkSecurityGroup返回参数结构体
 */
export interface CreateStreamLinkSecurityGroupResponse {
  /**
   * 安全组 ID。
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAIRecognitionTemplate请求参数结构体
 */
export interface ModifyAIRecognitionTemplateRequest {
  /**
   * 视频内容识别模板唯一标识。
   */
  Definition: number
  /**
   * 视频内容识别模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 视频内容识别模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 人脸识别控制参数。
   */
  FaceConfigure?: FaceConfigureInfoForUpdate
  /**
   * 文本全文识别控制参数。
   */
  OcrFullTextConfigure?: OcrFullTextConfigureInfoForUpdate
  /**
   * 文本关键词识别控制参数。
   */
  OcrWordsConfigure?: OcrWordsConfigureInfoForUpdate
  /**
   * 语音全文识别控制参数。
   */
  AsrFullTextConfigure?: AsrFullTextConfigureInfoForUpdate
  /**
   * 语音关键词识别控制参数。
   */
  AsrWordsConfigure?: AsrWordsConfigureInfoForUpdate
  /**
   * 语音翻译控制参数。
   */
  TranslateConfigure?: TranslateConfigureInfoForUpdate
}

/**
 * ParseNotification返回参数结构体
 */
export interface ParseNotificationResponse {
  /**
   * 支持事件类型，目前取值有：
<li>WorkflowTask：视频工作流处理任务。</li>
<li>EditMediaTask：视频编辑任务。</li>
<li>ScheduleTask：编排任务。</li>
   */
  EventType?: string
  /**
   * 视频处理任务信息，仅当 EventType 为 WorkflowTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowTaskEvent?: WorkflowTask
  /**
   * 视频编辑任务信息，仅当 EventType 为 EditMediaTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EditMediaTaskEvent?: EditMediaTask
  /**
   * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
   */
  SessionId?: string
  /**
   * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
   */
  SessionContext?: string
  /**
   * 编排任务信息，仅当 EventType 为 ScheduleTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleTaskEvent?: ScheduleTask
  /**
   * - 过期时间，事件通知签名过期 UNIX 时间戳。
- 来自媒体处理的消息通知默认过期时间是10分钟，如果一条消息通知中的 Timestamp 值所指定的时间已经过期，则可以判定这条通知无效，进而可以防止网络重放攻击。
- Timestamp 的格式为十进制 UNIX 时间戳，即从1970年01月01日（UTC/GMT 的午夜）开始所经过的秒数。

   */
  Timestamp?: number
  /**
   * 事件通知安全签名 Sign = MD5（Timestamp + NotifyKey）。说明：媒体处理把Timestamp 和 TaskNotifyConfig 里面的NotifyKey 进行字符串拼接后通过 MD5 计算得出 Sign 值，并将其放在通知消息里，您的后台服务器在收到通知消息后可以根据同样的算法确认 Sign 是否正确，进而确认消息是否确实来自媒体处理后台。
   */
  Sign?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频编辑/合成任务 视频图像转换操作。
 */
export interface ComposeImageOperation {
  /**
   * 类型，取值有：
<li>Rotate：图像旋转。</li>
<li>Flip：图像翻转。</li>
   */
  Type: string
  /**
   * 当 Type = Rotate 时有效。图像以中心点为原点进行旋转的角度，取值范围0~360。
   */
  RotateAngle?: number
  /**
   * 当 Type = Flip 时有效。图像翻转动作，取值有： 
<li>Horizental：水平翻转，即左右镜像。</li>
<li>Vertical：垂直翻转，即上下镜像。</li>
   */
  FlipType?: string
}

/**
 * CreateLiveRecordTemplate返回参数结构体
 */
export interface CreateLiveRecordTemplateResponse {
  /**
   * 录制模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 编排任务输出
 */
export interface ActivityResult {
  /**
   * 原子任务类型。
<li>Transcode：转码。</li>
<li>SampleSnapshot：采样截图。</li>
<li>AnimatedGraphics：转动图。</li>
<li>SnapshotByTimeOffset：时间点截图。</li>
<li>ImageSprites：雪碧图。</li>
<li>AdaptiveDynamicStreaming：自适应码流。</li>
<li>AiContentReview：内容审核。</li>
<li>AIRecognition：智能识别。</li>
<li>AIAnalysis：智能分析。</li>
<li>AiQualityControl：媒体质检。</li>
   */
  ActivityType?: string
  /**
   * 原子任务输出。
   */
  ActivityResItem?: ActivityResItem
}

/**
 * 查询输入的HLS配置信息。
 */
export interface DescribeInputHLSPullSettings {
  /**
   * HLS源站地址信息。
   */
  SourceAddresses: Array<DescribeHLSPullSourceAddress>
}

/**
 * ResetWorkflow返回参数结构体
 */
export interface ResetWorkflowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamLinkFlows请求参数结构体
 */
export interface DescribeStreamLinkFlowsRequest {
  /**
   * 当前页数，默认1。
   */
  PageNum?: number
  /**
   * 每页大小，默认10。
   */
  PageSize?: number
}

/**
 * HLS配置参数
 */
export interface HLSConfigureInfo {
  /**
   * 单个 TS 文件时长，单位：秒，取值范围 5-30 秒。

不填默认为 30 秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ItemDuration?: number
  /**
   * 录制周期，单位：秒，取值范围 10 分钟到  12 小时。

不填默认为 10分钟（3600 秒）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Interval?: number
  /**
   * 续录等待时间，单位：秒。取值范围为60秒-1800秒。
不填默认为0（不启用续录）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContinueTimeout?: number
}

/**
 * CreateAIAnalysisTemplate返回参数结构体
 */
export interface CreateAIAnalysisTemplateResponse {
  /**
   * 视频内容分析模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 对视频做采样截图任务结果类型
 */
export interface MediaProcessTaskSampleSnapshotResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 对视频做采样截图任务输入。
   */
  Input?: SampleSnapshotTaskInput
  /**
   * 对视频做采样截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: MediaSampleSnapshotItem
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
}

/**
 * RIST输出的监听地址。
 */
export interface OutputRISTSourceAddressResp {
  /**
   * 监听IP。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
  /**
   * 监听端口。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
}

/**
 * 用户自定义审核任务控制参数。
 */
export interface UserDefineConfigureInfoForUpdate {
  /**
   * 用户自定义人物审核控制参数。
   */
  FaceReviewInfo: UserDefineFaceReviewTemplateInfoForUpdate
  /**
   * 用户自定义语音审核控制参数。
   */
  AsrReviewInfo: UserDefineAsrTextReviewTemplateInfoForUpdate
  /**
   * 用户自定义文本审核控制参数。
   */
  OcrReviewInfo: UserDefineOcrTextReviewTemplateInfoForUpdate
}

/**
 * AWS S3 输出位置
 */
export interface S3OutputStorage {
  /**
   * S3 bucket。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3Bucket: string
  /**
   * S3 bucket 对应的区域。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3Region: string
  /**
   * AWS 内网上传 媒体资源的秘钥id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3SecretId?: string
  /**
   * AWS 内网上传 媒体资源的秘钥key。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3SecretKey?: string
}

/**
 * 绑定到 COS 的输入规则。
 */
export interface CosFileUploadTrigger {
  /**
   * 工作流绑定的 COS Bucket 名，如 TopRankVideo-125xxx88。
   */
  Bucket: string
  /**
   * 工作流绑定的 COS Bucket 所属园区，如 ap-chongiqng。
   */
  Region: string
  /**
   * 工作流绑定的输入路径目录，必须为绝对路径，即以 `/` 开头和结尾。如`/movie/201907/`，不填代表根目录`/`。
   */
  Dir?: string
  /**
   * 工作流允许触发的文件格式列表，如 ["mp4", "flv", "mov"]。不填代表所有格式的文件都可以触发工作流。
   */
  Formats?: Array<string>
}

/**
 * Asr 文字敏感信息
 */
export interface AiReviewPoliticalAsrTaskOutput {
  /**
   * Asr 文字敏感评分，分值为0到100。
   */
  Confidence: number
  /**
   * Asr 文字敏感结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * Asr 文字敏感嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewAsrTextSegmentItem>
}

/**
 * 流状态实时查询接口的SRT信息。
 */
export interface FlowRealtimeStatusSRT {
  /**
   * 延迟，单位为ms。
   */
  Latency: number
  /**
   * RTT，单位为ms。
   */
  RTT: number
  /**
   * 实时发包数或者收包数。
   */
  Packets: number
  /**
   * 丢包率。
   */
  PacketLossRate: number
  /**
   * 重传率。
   */
  RetransmitRate: number
  /**
   * 实时丢包数。
   */
  DroppedPackets: number
  /**
   * 是否加密，On|Off。
   */
  Encryption: string
}

/**
 * 极速高清参数配置。
 */
export interface TEHDConfigForUpdate {
  /**
   * 极速高清类型，可选值：
<li>TEHD-100：极速高清-100（视频极速高清）。</li>
<li>TEHD-200：极速高清-200（音频极速高清）。</li>
不填代表不修改。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 视频码率上限，不填代表不修改。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxVideoBitrate?: number
}

/**
 * DeleteStreamLinkOutput请求参数结构体
 */
export interface DeleteStreamLinkOutputRequest {
  /**
   * 流Id。
   */
  FlowId: string
  /**
   * 输出Id。
   */
  OutputId: string
}

/**
 * ModifyPersonSample请求参数结构体
 */
export interface ModifyPersonSampleRequest {
  /**
   * 素材 ID。
   */
  PersonId: string
  /**
   * 名称，长度限制：128 个字符。
   */
  Name?: string
  /**
   * 描述，长度限制：1024 个字符。
   */
  Description?: string
  /**
   * 素材应用场景，可选值：
1. Recognition：用于内容识别，等价于 Recognition.Face。
2. Review：用于不适宜的内容识别，等价于 Review.Face。
3. All：用于内容识别、不适宜的内容识别，等价于 1+2。
   */
  Usages?: Array<string>
  /**
   * 五官操作信息。
   */
  FaceOperationInfo?: AiSampleFaceOperation
  /**
   * 标签操作信息。
   */
  TagOperationInfo?: AiSampleTagOperation
}

/**
 * 语音全文识别任务控制参数
 */
export interface AsrFullTextConfigureInfo {
  /**
   * 语音全文识别任务开关，可选值：
<li>ON：开启智能语音全文识别任务；</li>
<li>OFF：关闭智能语音全文识别任务。</li>
   */
  Switch: string
  /**
   * 生成的字幕文件格式，不填或者填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
   */
  SubtitleFormat?: string
  /**
   * 视频源语言。
   */
  SourceLanguage?: string
}

/**
 * 查询输入的RIST配置信息。
 */
export interface DescribeInputRISTSettings {
  /**
   * RIST模式，可选[LISTENER|CALLER]，默认为LISTENER。
   */
  Mode?: string
  /**
   * RIST配置方案，可选[MAIN|SIMPLE]，默认为MAIN。
   */
  Profile?: string
  /**
   * RIST缓冲区大小，单位为毫秒。最小值为50毫秒，最大值为5000毫秒。默认值：120
   */
  Buffer?: number
}

/**
 * 去伪影（毛刺）配置
 */
export interface ArtifactRepairConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 类型，可选值：
<li>weak</li>
<li>strong</li>
默认值：weak。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * CreateAIRecognitionTemplate请求参数结构体
 */
export interface CreateAIRecognitionTemplateRequest {
  /**
   * 视频内容识别模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 视频内容识别模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 人脸识别控制参数。
   */
  FaceConfigure?: FaceConfigureInfo
  /**
   * 文本全文识别控制参数。
   */
  OcrFullTextConfigure?: OcrFullTextConfigureInfo
  /**
   * 文本关键词识别控制参数。
   */
  OcrWordsConfigure?: OcrWordsConfigureInfo
  /**
   * 语音全文识别控制参数。
   */
  AsrFullTextConfigure?: AsrFullTextConfigureInfo
  /**
   * 语音关键词识别控制参数。
   */
  AsrWordsConfigure?: AsrWordsConfigureInfo
  /**
   * 语音翻译控制参数。
   */
  TranslateConfigure?: TranslateConfigureInfo
}

/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
  /**
   * 视频处理任务的任务 ID。
   */
  TaskId: string
}

/**
 * DescribeStreamLinkFlow返回参数结构体
 */
export interface DescribeStreamLinkFlowResponse {
  /**
   * 流的配置信息。
   */
  Info: DescribeFlow
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频编辑/合成任务画布信息。
 */
export interface ComposeCanvas {
  /**
   * 背景颜色对应的 RGB 参考值，取值格式： #RRGGBB，如 #F0F0F0 。 
默认值：#000000（黑色）。
   */
  Color?: string
  /**
   * 画布宽度，即输出视频的宽度，取值范围：0~ 3840，单位：px。  
默认值：0，表示和第一个视频宽度一致。
   */
  Width?: number
  /**
   * 画布高度，即输出视频的高度，取值范围：0~ 3840，单位：px。  
默认值：0，表示和第一个视频高度一致。
   */
  Height?: number
}

/**
 * 鉴黄结果信息
 */
export interface AiReviewPornTaskOutput {
  /**
   * 视频鉴黄评分，分值为0到100。
   */
  Confidence: number
  /**
   * 鉴黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * 视频鉴黄结果标签，取值范围：
<li>porn：色情。</li>
<li>sexy：性感。</li>
<li>vulgar：低俗。</li>
<li>intimacy：亲密行为。</li>
   */
  Label: string
  /**
   * 有涉黄嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewSegmentItem>
}

/**
 * CreateWorkflow返回参数结构体
 */
export interface CreateWorkflowResponse {
  /**
   * 工作流 ID。
   */
  WorkflowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音全文识别结果。
 */
export interface AiRecognitionTaskAsrFullTextResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 语音全文识别任务输入信息。
   */
  Input?: AiRecognitionTaskAsrFullTextResultInput
  /**
   * 语音全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiRecognitionTaskAsrFullTextResultOutput
  /**
   * 任务进度。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: number
}

/**
 * ModifyAIRecognitionTemplate返回参数结构体
 */
export interface ModifyAIRecognitionTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 画面涉敏任务控制参数
 */
export interface PoliticalImgReviewTemplateInfo {
  /**
   * 画面涉敏任务开关，可选值：
<li>ON：开启画面涉敏任务；</li>
<li>OFF：关闭画面涉敏任务。</li>
   */
  Switch: string
  /**
   * 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>violation_photo：违规图标；</li>
<li>politician：涉敏人物；</li>
<li>entertainment：娱乐人物；</li>
<li>sport：体育人物；</li>
<li>entrepreneur：商业人物；</li>
<li>scholar：教育学者；</li>
<li>celebrity：知名人物；</li>
<li>military：军事人物。</li>
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 涉敏任务控制参数
 */
export interface PoliticalConfigureInfo {
  /**
   * 画面涉敏控制参数。
   */
  ImgReviewInfo?: PoliticalImgReviewTemplateInfo
  /**
   * 语音涉敏控制参数。
   */
  AsrReviewInfo?: PoliticalAsrReviewTemplateInfo
  /**
   * 文本涉敏控制参数。
   */
  OcrReviewInfo?: PoliticalOcrReviewTemplateInfo
}

/**
 * ModifyAnimatedGraphicsTemplate请求参数结构体
 */
export interface ModifyAnimatedGraphicsTemplateRequest {
  /**
   * 转动图模板唯一标识。
   */
  Definition: number
  /**
   * 转动图模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width?: number
  /**
   * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height?: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive?: string
  /**
   * 动图格式，取值为 gif 和 webp。
   */
  Format?: string
  /**
   * 帧率，取值范围：[1, 30]，单位：Hz。
   */
  Fps?: number
  /**
   * 图片质量，取值范围：[1, 100]，默认值为 75。
   */
  Quality?: number
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
}

/**
 * 查询输出的RTMP拉流URL信息。
 */
export interface DescribeOutputRTMPPullServerUrl {
  /**
   * RTMP拉流地址的tcUrl。
   */
  TcUrl: string
  /**
   * RTMP拉流地址的流key。
   */
  StreamKey: string
}

/**
 * ModifyStreamLinkSecurityGroup请求参数结构体
 */
export interface ModifyStreamLinkSecurityGroupRequest {
  /**
   * 安全组Id。
   */
  Id: string
  /**
   * 安全组名称，限制大小写、数字和下划线，长度[1, 32]，Region下唯一。
   */
  Name?: string
  /**
   * 白名单列表，最多10个。
   */
  Whitelist?: Array<string>
}

/**
 * 文本识别片段。
 */
export interface AiRecognitionTaskOcrWordsSegmentItem {
  /**
   * 识别片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 识别片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
  /**
   * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
   */
  AreaCoordSet: Array<number | bigint>
}

/**
 * DescribeLiveRecordTemplates请求参数结构体
 */
export interface DescribeLiveRecordTemplatesRequest {
  /**
   * 录制模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
  /**
   * 模板类型过滤条件，不填则返回所有，可选值：
   * Preset：系统预置模板；
   * Custom：用户自定义模板。
   */
  Type?: string
  /**
   * 录制模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * 传输流日志信息。
 */
export interface FlowLogInfo {
  /**
   * 时间戳，单位为秒。
   */
  Timestamp: number
  /**
   * 输入输出类型（input/output）。
   */
  Type: string
  /**
   * 输入或输出Id。
   */
  InputOutputId: string
  /**
   * 协议。
   */
  Protocol: string
  /**
   * 事件代码。
   */
  EventCode: string
  /**
   * 事件信息。
   */
  EventMessage: string
  /**
   * 对端IP。
   */
  RemoteIp: string
  /**
   * 对端端口。
   */
  RemotePort: string
  /**
   * 主备通道，0为主通道，1为备通道。
   */
  Pipeline: string
  /**
   * 输入或输出的名称。
   */
  InputOutputName: string
}

/**
 * DeleteWordSamples返回参数结构体
 */
export interface DeleteWordSamplesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteStreamLinkOutput返回参数结构体
 */
export interface DeleteStreamLinkOutputResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 图片增强参数
 */
export interface ImageEnhanceConfig {
  /**
   * 超分配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuperResolution?: SuperResolutionConfig
  /**
   * 色彩增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColorEnhance?: ColorEnhanceConfig
  /**
   * 细节增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SharpEnhance?: SharpEnhanceConfig
  /**
   * 人脸增强配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FaceEnhance?: FaceEnhanceConfig
}

/**
 * 媒体处理任务中的水印参数类型
 */
export interface WatermarkInput {
  /**
   * 水印模板 ID。
   */
  Definition: number
  /**
   * 水印自定义参数，当 Definition 填 0 时有效。
该参数用于高度定制场景，建议您优先使用 Definition 指定水印参数。
水印自定义参数不支持截图打水印。
   */
  RawParameter?: RawWatermarkParameter
  /**
   * 文字内容，长度不超过100个字符。仅当水印类型为文字水印时填写。
文字水印不支持截图打水印。
   */
  TextContent?: string
  /**
   * SVG 内容。长度不超过 2000000 个字符。仅当水印类型为 SVG 水印时填写。
SVG 水印不支持截图打水印。
   */
  SvgContent?: string
  /**
   * 水印的起始时间偏移，单位：秒。不填或填0，表示水印从画面出现时开始显现。
<li>不填或填0，表示水印从画面开始就出现；</li>
<li>当数值大于0时（假设为 n），表示水印从画面开始的第 n 秒出现；</li>
<li>当数值小于0时（假设为 -n），表示水印从离画面结束 n 秒前开始出现。</li>
注：只用于视频场景，截图不支持。
   */
  StartTimeOffset?: number
  /**
   * 水印的结束时间偏移，单位：秒。
<li>不填或填0，表示水印持续到画面结束；</li>
<li>当数值大于0时（假设为 n），表示水印持续到第 n 秒时消失；</li>
<li>当数值小于0时（假设为 -n），表示水印持续到离画面结束 n 秒前消失。</li>
注：只用于视频场景，截图不支持。
   */
  EndTimeOffset?: number
}

/**
 * EnableWorkflow返回参数结构体
 */
export interface EnableWorkflowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 编排原子任务
 */
export interface Activity {
  /**
   * 原子任务类型：
<li>input: 起始节点</li>
<li>output：终止节点</li>
<li>action-trans：转码</li>
<li>action-samplesnapshot：采样截图</li>
<li>action-AIAnalysis: 分析</li>
<li>action-AIRecognition：识别</li>
<li>action-aiReview：审核</li>
<li>action-animated-graphics：转动图</li>
<li>action-image-sprite：雪碧图</li>
<li>action-snapshotByTimeOffset: 时间点截图</li>
<li>action-adaptive-substream：自适应码流</li>
<li>action-AIQualityControl：媒体质检</li>



注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivityType: string
  /**
   * 后驱节点索引数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReardriveIndex?: Array<number | bigint>
  /**
   * 原子任务参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivityPara?: ActivityPara
}

/**
 * AI 样本管理，关键词输入信息。
 */
export interface AiSampleWordInfo {
  /**
   * 关键词，长度限制：20 个字符。
   */
  Keyword: string
  /**
   * 关键词标签
<li>数组长度限制：20 个标签；</li>
<li>单个标签长度限制：128 个字符。</li>
   */
  Tags?: Array<string>
}

/**
 * DeleteStreamLinkEvent请求参数结构体
 */
export interface DeleteStreamLinkEventRequest {
  /**
   * 媒体传输事件Id，删除前需要保证该Event关联的所有Flow都已经删除。
   */
  EventId: string
}

/**
 * CreateStreamLinkOutputInfo请求参数结构体
 */
export interface CreateStreamLinkOutputInfoRequest {
  /**
   * 传输流Id。
   */
  FlowId: string
  /**
   * 传输流的Output配置。
   */
  Output: CreateOutputInfo
}

/**
 * 视频编辑/合成任务 轨道信息。
 */
export interface ComposeMediaTrack {
  /**
   * 轨道类型，取值有：<ul><li>Video ：视频轨道。视频轨道可由以下元素组成：</li><ul><li>Video 元素</li><li>Image 元素</li><li>Transition 元素</li><li>Empty 元素</li></ul><li>Audio ：音频轨道。音频轨道可由以下元素组成：</li><ul><li>Audio 元素</li><li>Transition 元素</li><li>Empty 元素</li></ul><li>Title：文字轨道。文字轨道可由以下元素组成：</li><ul><li>Subtitle 元素</li></ul>
   */
  Type: string
  /**
   * 轨道上的元素列表。
   */
  Items: Array<ComposeMediaItem>
}

/**
 * 文本违禁任务控制参数
 */
export interface ProhibitedOcrReviewTemplateInfo {
  /**
   * 文本违禁任务开关，可选值：
<li>ON：开启文本违禁任务；</li>
<li>OFF：关闭文本违禁任务。</li>
   */
  Switch: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 直播识别 Ocr 全文识别
 */
export interface LiveStreamOcrFullTextRecognitionResult {
  /**
   * 语音文本。
   */
  Text: string
  /**
   * 识别片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 识别片段终止的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
  /**
   * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
   */
  AreaCoordSet: Array<number | bigint>
}

/**
 * ModifyStreamLinkInput请求参数结构体
 */
export interface ModifyStreamLinkInputRequest {
  /**
   * 流Id。
   */
  FlowId: string
  /**
   * 需要修改的Input信息。
   */
  Input: ModifyInput
}

/**
 * 编排视频审核任务结果类型
 */
export interface ScheduleReviewTaskResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 审核任务的输入。
   */
  Input?: AiContentReviewTaskInput
  /**
   * 审核任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: Array<AiContentReviewResult>
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
}

/**
 * DescribeStreamLinkEventAttachedFlows返回参数结构体
 */
export interface DescribeStreamLinkEventAttachedFlowsResponse {
  /**
   * 流的配置信息列表。
   */
  Infos?: Array<DescribeFlow>
  /**
   * 总数量。
   */
  TotalNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTranscodeTemplate返回参数结构体
 */
export interface ModifyTranscodeTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直播流录制结果
 */
export interface LiveStreamRecordResultInfo {
  /**
   * 录制是否结束。
0：录制未结束，返回单个文件结果
1：录制结束，返回所有录制文件结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordOver?: number
  /**
   * 文件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileResults?: Array<LiveRecordFile>
}

/**
 * 视频编辑/合成任务 样式信息。
 */
export interface ComposeStyles {
  /**
   * 样式 Id，用于和轨道元素中的样式关联。
注意：允许字母、数字、-、_ 组合，最长 32 字符。
   */
  Id: string
  /**
   * 样式类型，取值有：
<li>Subtitle：字幕样式。</li>
   */
  Type: string
  /**
   * 字幕样式信息，当 Type = Subtitle 时有效。
   */
  Subtitle?: ComposeSubtitleStyle
}

/**
 * 表情识别参数配置
 */
export interface ExpressionConfigInfo {
  /**
   * 表情识别任务开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
   */
  Switch: string
}

/**
 * CreateLiveRecordTemplate请求参数结构体
 */
export interface CreateLiveRecordTemplateRequest {
  /**
   * HLS 配置参数
   */
  HLSConfigure: HLSConfigureInfo
  /**
   * 录制模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
}

/**
 * CreateContentReviewTemplate请求参数结构体
 */
export interface CreateContentReviewTemplateRequest {
  /**
   * 内容审核模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 内容审核模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 令人反感的信息的控制参数。
   */
  PornConfigure?: PornConfigureInfo
  /**
   * 令人不安全的信息的控制参数。
   */
  TerrorismConfigure?: TerrorismConfigureInfo
  /**
   * 令人不适宜的信息的控制参数。
   */
  PoliticalConfigure?: PoliticalConfigureInfo
  /**
   * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此参数尚未支持。
   */
  ProhibitedConfigure?: ProhibitedConfigureInfo
  /**
   * 用户自定义内容审核控制参数。
   */
  UserDefineConfigure?: UserDefineConfigureInfo
}

/**
 * DescribeContentReviewTemplates请求参数结构体
 */
export interface DescribeContentReviewTemplatesRequest {
  /**
   * 智能审核模板唯一标识过滤条件，数组长度限制：50。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：50。
   */
  Limit?: number
  /**
   * 模板类型过滤条件，不填则返回所有，可选值：
   * Preset：系统预置模板；
   * Custom：用户自定义模板。
   */
  Type?: string
  /**
   * 智能审核模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * 对视频转自适应码流的输入参数类型
 */
export interface AdaptiveDynamicStreamingTaskInput {
  /**
   * 转自适应码流模板 ID。
   */
  Definition: number
  /**
   * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
   */
  WatermarkSet?: Array<WatermarkInput>
  /**
   * 转自适应码流后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 转自适应码流后，manifest 文件的输出路径，可以为相对路径或者绝对路径。
若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。
相对路径示例：
<li>文件名_{变量名}.{format}</li>
<li>文件名.{format}</li>
绝对路径示例：
<li>/自定义路径/文件名_{变量名}.{format}</li>
如果不填，则默认为相对路径：{inputName}_adaptiveDynamicStreaming_{definition}.{format}。
   */
  OutputObjectPath?: string
  /**
   * 转自适应码流后，子流文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}.{format}`。
   */
  SubStreamObjectName?: string
  /**
   * 转自适应码流（仅 HLS）后，分片文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}_{segmentNumber}.{format}`。
   */
  SegmentObjectName?: string
  /**
   * 要插入的字幕文件。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddOnSubtitles?: Array<AddOnSubtitle>
  /**
   * Drm信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DrmInfo?: DrmInfo
  /**
   * 自适应转码模板类型：
Common：音视频类型
PureAudio：纯音频类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefinitionType?: string
}

/**
 * ModifyQualityControlTemplate请求参数结构体
 */
export interface ModifyQualityControlTemplateRequest {
  /**
   * 媒体质检模板唯一标识。
   */
  Definition: number
  /**
   * 媒体质检模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 媒体质检配置参数。
   */
  QualityControlItemSet?: Array<QualityControlItemConfig>
}

/**
 * DescribeImageSpriteTemplates返回参数结构体
 */
export interface DescribeImageSpriteTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 雪碧图模板详情列表。
   */
  ImageSpriteTemplateSet?: Array<ImageSpriteTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时流状态查询的通用状态信息。
 */
export interface FlowRealtimeStatusCommon {
  /**
   * 当前连接状态，Connected|Waiting|Idle。
   */
  State: string
  /**
   * 连接模式，Listener|Caller。
   */
  Mode: string
  /**
   * 已连接时长，单位为ms。
   */
  ConnectedTime: number
  /**
   * 实时码率，单位为bps。
   */
  Bitrate: number
  /**
   * 重试次数。
   */
  Reconnections: number
}

/**
 * 任务的事件通知配置。
 */
export interface TaskNotifyConfig {
  /**
   * 通知类型，可选值：
<li>CMQ：已下线，建议切换到TDMQ-CMQ</li>
<li>TDMQ-CMQ：消息队列</li>
<li>URL：指定URL时HTTP回调推送到 NotifyUrl 指定的地址，回调协议http+json，包体内容同解析事件通知接口的输出参数 </li>
<li>SCF：不推荐使用，需要在控制台额外配置SCF</li>
<li>AWS-SQS：AWS 队列，只适用于 AWS 任务，且要求同区域</li>
<font color="red"> 注：不填或为空时默认 CMQ，如需采用其他类型需填写对应类型值。 </font>
   */
  NotifyType?: string
  /**
   * 工作流通知的模式，可取值有 Finish 和 Change，不填代表 Finish。
   */
  NotifyMode?: string
  /**
   * HTTP回调地址，NotifyType为URL时必填。
   */
  NotifyUrl?: string
  /**
   * CMQ或TDMQ-CMQ 的模型，有 Queue 和 Topic 两种。
   */
  CmqModel?: string
  /**
   * CMQ或TDMQ-CMQ 的园区，如 sh，bj 等。
   */
  CmqRegion?: string
  /**
   * 当模型为 Topic 时有效，表示接收事件通知的 CMQ 或 TDMQ-CMQ 的主题名。
   */
  TopicName?: string
  /**
   * 当模型为 Queue 时有效，表示接收事件通知的 CMQ 或 TDMQ-CMQ 的队列名。
   */
  QueueName?: string
  /**
   * AWS SQS 回调，NotifyType为 AWS-SQS 时必填。

注意：此字段可能返回 null，表示取不到有效值。
   */
  AwsSQS?: AwsSQS
  /**
   * 用于生成回调签名的key。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyKey?: string
}

/**
 * 人脸增强配置
 */
export interface FaceEnhanceConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 强度，取值范围：0.0~1.0。
默认：0.0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Intensity?: number
}

/**
 * 直播 AI 内容审核图片鉴黄结果
 */
export interface LiveStreamAiReviewImagePornResult {
  /**
   * 嫌疑片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 嫌疑片段结束的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 嫌疑片段涉黄分数。
   */
  Confidence: number
  /**
   * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
   */
  Suggestion: string
  /**
   * 视频鉴黄结果标签，取值范围：
<li>porn：色情。</li>
<li>sexy：性感。</li>
<li>vulgar：低俗。</li>
<li>intimacy：亲密行为。</li>
   */
  Label: string
  /**
   * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
   */
  Url: string
  /**
   * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  PicUrlExpireTime: string
}

/**
 * 智能按帧标签任务输入类型
 */
export interface AiAnalysisTaskFrameTagInput {
  /**
   * 视频智能按帧标签模板 ID。
   */
  Definition: number
}

/**
 * 按帧标签片段列表
 */
export interface MediaAiAnalysisFrameTagSegmentItem {
  /**
   * 按帧标签起始的偏移时间。
   */
  StartTimeOffset: number
  /**
   * 按帧标签结束的偏移时间。
   */
  EndTimeOffset: number
  /**
   * 时间片段内的标签列表。
   */
  TagSet: Array<MediaAiAnalysisFrameTagItem>
}

/**
 * 语音关键词识别结果。
 */
export interface AiRecognitionTaskAsrWordsResultItem {
  /**
   * 语音关键词。
   */
  Word: string
  /**
   * 语音关键词出现的时间片段列表。
   */
  SegmentSet: Array<AiRecognitionTaskAsrWordsSegmentItem>
}

/**
 * DescribeStreamLinkRegions请求参数结构体
 */
export type DescribeStreamLinkRegionsRequest = null

/**
 * ModifyStreamLinkInput返回参数结构体
 */
export interface ModifyStreamLinkInputResponse {
  /**
   * 修改后的Input信息。
   */
  Info: DescribeInput
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 片头片尾参数
 */
export interface HeadTailParameter {
  /**
   * 片头列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HeadSet?: Array<MediaInputInfo>
  /**
   * 片尾列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TailSet?: Array<MediaInputInfo>
}

/**
 * 智能分类任务输入类型
 */
export interface AiAnalysisTaskDescriptionInput {
  /**
   * 视频智能描述模板 ID。
   */
  Definition: number
}

/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
  /**
   * 任务类型，目前取值有：<li>WorkflowTask：视频工作流处理任务。</li><li>EditMediaTask：视频编辑任务。</li><li>LiveStreamProcessTask：直播流处理任务。</li><li>ScheduleTask：编排处理任务。</li><li>EvaluationTask：评测任务。</li>
   */
  TaskType?: string
  /**
   * 任务状态，取值：
<li>WAITING：等待中；</li>
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
   */
  Status?: string
  /**
   * 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime?: string
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  FinishTime?: string
  /**
   * 视频编辑任务信息，仅当 TaskType 为 EditMediaTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EditMediaTask?: EditMediaTask
  /**
   * 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowTask?: WorkflowTask
  /**
   * 直播流处理任务信息，仅当 TaskType 为 LiveStreamProcessTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiveStreamProcessTask?: LiveStreamProcessTask
  /**
   * 任务的事件通知信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskNotifyConfig?: TaskNotifyConfig
  /**
   * 任务流的优先级，取值范围为 [-10, 10]。
   */
  TasksPriority?: number
  /**
   * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
   */
  SessionId?: string
  /**
   * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
   */
  SessionContext?: string
  /**
   * 扩展信息字段，仅用于特定场景。
   */
  ExtInfo?: string
  /**
   * 编排处理任务信息，仅当 TaskType 为 ScheduleTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleTask?: ScheduleTask
  /**
   * 直播编排处理任务信息，仅当 TaskType 为 LiveScheduleTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiveScheduleTask?: LiveScheduleTask
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直播流 AI 识别结果
 */
export interface LiveStreamAiRecognitionResultItem {
  /**
   * 结果的类型，取值范围：
<li>FaceRecognition：人脸识别，</li>
<li>AsrWordsRecognition：语音关键词识别，</li>
<li>OcrWordsRecognition：文本关键词识别，</li>
<li>AsrFullTextRecognition：语音全文识别，</li>
<li>OcrFullTextRecognition：文本全文识别。</li>
<li>TransTextRecognition：语音翻译。</li>
<li>ObjectRecognition：目标检测。</li>
<li>TagRecognition：精彩打点。</li>
   */
  Type?: string
  /**
   * 人脸识别结果，当 Type 为
FaceRecognition 时有效。
   */
  FaceRecognitionResultSet?: Array<LiveStreamFaceRecognitionResult>
  /**
   * 语音关键词识别结果，当 Type 为
AsrWordsRecognition 时有效。
   */
  AsrWordsRecognitionResultSet?: Array<LiveStreamAsrWordsRecognitionResult>
  /**
   * 文本关键词识别结果，当 Type 为
OcrWordsRecognition 时有效。
   */
  OcrWordsRecognitionResultSet?: Array<LiveStreamOcrWordsRecognitionResult>
  /**
   * 语音全文识别结果，当 Type 为
AsrFullTextRecognition 时有效。
   */
  AsrFullTextRecognitionResultSet?: Array<LiveStreamAsrFullTextRecognitionResult>
  /**
   * 文本全文识别结果，当 Type 为
OcrFullTextRecognition 时有效。
   */
  OcrFullTextRecognitionResultSet?: Array<LiveStreamOcrFullTextRecognitionResult>
  /**
   * 翻译结果，当Type 为 TransTextRecognition 时有效。
   */
  TransTextRecognitionResultSet?: Array<LiveStreamTransTextRecognitionResult>
  /**
   * 目标检测结果，当Type为 ObjectRecognition 时有效。
   */
  ObjectRecognitionResultSet?: Array<LiveStreamObjectRecognitionResult>
  /**
   * 打点结果，当Type 为 TagRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagRecognitionResultSet?: Array<LiveStreamTagRecognitionResult>
}

/**
 * DeleteImageSpriteTemplate请求参数结构体
 */
export interface DeleteImageSpriteTemplateRequest {
  /**
   * 雪碧图模板唯一标识。
   */
  Definition: number
}

/**
 * 直播编排直播录制任务结果类型
 */
export interface LiveScheduleLiveRecordTaskResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrCode?: number
  /**
   * 错误信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 直播录制任务的输入。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Input?: LiveRecordTaskInput
  /**
   * 直播录制任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: LiveRecordResult
  /**
   * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeginProcessTime?: string
  /**
   * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime?: string
}

/**
 * AI 样本管理，处理失败的人脸信息
 */
export interface AiSampleFailFaceInfo {
  /**
   * 对应入参 FaceContents 中错误图片下标，从 0 开始。
   */
  Index: number
  /**
   * 错误码，取值：
<li>0：成功；</li>
<li>其他：失败。</li>
   */
  ErrCode: number
  /**
   * 错误描述。
   */
  Message: string
}

/**
 * 用户自定义人物审核任务控制参数。
 */
export interface UserDefineFaceReviewTemplateInfoForUpdate {
  /**
   * 用户自定义人物审核任务开关，可选值：
<li>ON：开启自定义人物审核任务；</li>
<li>OFF：关闭自定义人物审核任务。</li>
   */
  Switch?: string
  /**
   * 用户自定义人物过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 查询输入的RTMP配置信息。
 */
export interface DescribeInputRTMPSettings {
  /**
   * RTMP的推流路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppName: string
  /**
   * RTMP的推流StreamKey。
RTMP的推流地址拼接规则为：rtmp://Ip:1935/AppName/StreamKey
   */
  StreamKey: string
}

/**
 * 直播实时翻译结果
 */
export interface LiveStreamTransTextRecognitionResult {
  /**
   * 识别文本。
   */
  Text: string
  /**
   * 翻译片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 翻译片段终止的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 翻译片段置信度。取值：0~100。
   */
  Confidence: number
  /**
   * 翻译文本。
   */
  Trans: string
  /**
   * 翻译开始UTC时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 翻译结束UTC时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 稳态标记。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SteadyState?: boolean
}

/**
 * DescribeStreamLinkSecurityGroups请求参数结构体
 */
export type DescribeStreamLinkSecurityGroupsRequest = null

/**
 * 文本全文本识别任务控制参数
 */
export interface OcrFullTextConfigureInfoForUpdate {
  /**
   * 文本全文识别任务开关，可选值：
<li>ON：开启智能文本全文识别任务；</li>
<li>OFF：关闭智能文本全文识别任务。</li>
   */
  Switch?: string
}

/**
 * 传输流的SRT质量数据。
 */
export interface FlowSRTInfo {
  /**
   * 时间戳，单位是秒。
   */
  Timestamp: number
  /**
   * 发送丢包率。
   */
  SendPacketLossRate: number
  /**
   * 发送重传率。
   */
  SendRetransmissionRate: number
  /**
   * 接收丢包率。
   */
  RecvPacketLossRate: number
  /**
   * 接收重传率。
   */
  RecvRetransmissionRate: number
  /**
   * 与对端的RTT时延。
   */
  RTT: number
  /**
   * 标志同一次推流。
   */
  SessionId: string
  /**
   * 发送弃包数。
   */
  SendPacketDropNumber: number
  /**
   * 接收弃包数。
   */
  RecvPacketDropNumber: number
}

/**
 * 文本全文识别输入。
 */
export interface AiRecognitionTaskOcrFullTextResultInput {
  /**
   * 文本全文识别模板 ID。
   */
  Definition: number
}

/**
 * DeleteStreamLinkEvent返回参数结构体
 */
export interface DeleteStreamLinkEventResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
   * 任务概要列表。
   */
  TaskSet?: Array<TaskSimpleInfo>
  /**
   * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空字符串，说明已无更多数据。
   */
  ScrollToken?: string
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询输出的SRT配置信息。
 */
export interface DescribeOutputSRTSettings {
  /**
   * 转推的目标的地址信息列表，SRT模式为CALLER时使用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Destinations?: Array<SRTAddressDestination>
  /**
   * 流Id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamId?: string
  /**
   * 延迟。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Latency?: number
  /**
   * 接收延迟。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecvLatency?: number
  /**
   * 对端延迟。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerLatency?: number
  /**
   * 对端空闲超时时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeerIdleTimeout?: number
  /**
   * 加密密钥。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Passphrase?: string
  /**
   * 加密密钥长度。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PbKeyLen?: number
  /**
   * SRT模式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mode?: string
  /**
   * 服务器监听地址，SRT模式为LISTENER时使用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceAddresses?: Array<OutputSRTSourceAddressResp>
}

/**
 * 人脸识别输入。
 */
export interface AiRecognitionTaskFaceResultInput {
  /**
   * 人脸识别模板 ID。
   */
  Definition: number
}

/**
 * 音量均衡配置
 */
export interface VolumeBalanceConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 类型，可选值：
<li>loudNorm：响度标准化</li>
<li>gainControl：减小突变</li>
默认值：loudNorm。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * 涉敏信息
 */
export interface AiReviewPoliticalTaskOutput {
  /**
   * 视频涉敏评分，分值为0到100。
   */
  Confidence: number
  /**
   * 涉敏结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * 视频涉敏结果标签。内容审核模板[画面涉敏任务控制参数](https://cloud.tencent.com/document/api/862/37615#AiReviewPoliticalTaskOutput)里 LabelSet 参数与此参数取值范围的对应关系：
violation_photo：
<li>violation_photo：违规图标。</li>
其他（即 politician/entertainment/sport/entrepreneur/scholar/celebrity/military）：
<li>politician：涉敏人物。</li>
   */
  Label: string
  /**
   * 有涉敏嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewPoliticalSegmentItem>
}

/**
 * 内容审核涉敏任务结果类型
 */
export interface AiReviewTaskPoliticalResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核涉敏任务输入。
   */
  Input?: AiReviewPoliticalTaskInput
  /**
   * 内容审核涉敏任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewPoliticalTaskOutput
}

/**
 * 翻译结果。
 */
export interface AiRecognitionTaskTransTextResultOutput {
  /**
   * 翻译片段列表。
   */
  SegmentSet?: Array<AiRecognitionTaskTransTextSegmentItem>
  /**
   * 字幕文件地址。
   */
  SubtitlePath?: string
}

/**
 * ModifySnapshotByTimeOffsetTemplate请求参数结构体
 */
export interface ModifySnapshotByTimeOffsetTemplateRequest {
  /**
   * 指定时间点截图模板唯一标识。
   */
  Definition: number
  /**
   * 指定时间点截图模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width?: number
  /**
   * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height?: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive?: string
  /**
   * 图片格式，取值可以为 jpg、png、webp。
   */
  Format?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
   */
  FillType?: string
}

/**
 * 直播流 AI 审核结果
 */
export interface LiveStreamAiReviewResultItem {
  /**
   * 审核结果的类型，可以取的值有：
<li>ImagePorn：图片鉴黄</li>
<li>ImageTerrorism：图片涉敏</li>
<li>ImagePolitical：图片涉敏</li>
<li>VoicePorn：声音违规</li>
   */
  Type: string
  /**
   * 图片鉴黄的结果，当 Type 为 ImagePorn 时有效。
   */
  ImagePornResultSet: Array<LiveStreamAiReviewImagePornResult>
  /**
   * 图片涉敏的结果，当 Type 为 ImageTerrorism 时有效。
   */
  ImageTerrorismResultSet: Array<LiveStreamAiReviewImageTerrorismResult>
  /**
   * 图片涉敏的结果，当 Type 为 ImagePolitical 时有效。
   */
  ImagePoliticalResultSet: Array<LiveStreamAiReviewImagePoliticalResult>
  /**
   * 声音违规的结果，当 Type 为 VoicePorn 时有效。
   */
  VoicePornResultSet: Array<LiveStreamAiReviewVoicePornResult>
}

/**
 * DescribeVideoSearchTaskDetail请求参数结构体
 */
export interface DescribeVideoSearchTaskDetailRequest {
  /**
   * 待查询的任务Id
   */
  TaskId: string
}

/**
 * 创建输入的RTP配置信息。
 */
export interface CreateInputRTPSettings {
  /**
   * 默认为“none”，可选值['none']。
   */
  FEC?: string
  /**
   * 空闲超时时间，默认5000，单位ms，范围为[1000, 10000]。
   */
  IdleTimeout?: number
}

/**
 * DeleteLiveRecordTemplate返回参数结构体
 */
export interface DeleteLiveRecordTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频检索的检索结果
 */
export interface SearchTaskResult {
  /**
   * 视频在本次检索中的得分，得分越高和检索值越相似，取值范围[0,1]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Score?: number
  /**
   * 检索获得的视频ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoId?: string
}

/**
 * DescribeSnapshotByTimeOffsetTemplates返回参数结构体
 */
export interface DescribeSnapshotByTimeOffsetTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 指定时间点截图模板详情列表。
   */
  SnapshotByTimeOffsetTemplateSet?: Array<SnapshotByTimeOffsetTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 点播文件视频流信息
 */
export interface MediaVideoStreamItem {
  /**
   * 视频流的码率，单位：bps。
   */
  Bitrate?: number
  /**
   * 视频流的高度，单位：px。
   */
  Height?: number
  /**
   * 视频流的宽度，单位：px。
   */
  Width?: number
  /**
   * 视频流的编码格式，例如 h264。
   */
  Codec?: string
  /**
   * 帧率，单位：hz。
   */
  Fps?: number
  /**
   * 色彩空间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColorPrimaries?: string
  /**
   * 色彩空间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColorSpace?: string
  /**
   * 色彩空间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColorTransfer?: string
  /**
   * HDR类型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HdrType?: string
  /**
   * 视频Codecs。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Codecs?: string
  /**
   * 帧率分子部分
注意：此字段可能返回 null，表示取不到有效值。
   */
  FpsNumerator?: number
  /**
   * 帧率分母部分
注意：此字段可能返回 null，表示取不到有效值。
   */
  FpsDenominator?: number
}

/**
 * 时间点截图模板详情
 */
export interface SnapshotByTimeOffsetTemplate {
  /**
   * 时间点截图模板唯一标识。
   */
  Definition: number
  /**
   * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type: string
  /**
   * 时间点截图模板名称。
   */
  Name: string
  /**
   * 模板描述信息。
   */
  Comment: string
  /**
   * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width: number
  /**
   * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive: string
  /**
   * 图片格式。
   */
  Format: string
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>black：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>black：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
   */
  FillType: string
}

/**
 * DeleteSnapshotByTimeOffsetTemplate返回参数结构体
 */
export interface DeleteSnapshotByTimeOffsetTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本违禁任务控制参数
 */
export interface ProhibitedOcrReviewTemplateInfoForUpdate {
  /**
   * 文本违禁任务开关，可选值：
<li>ON：开启文本违禁任务；</li>
<li>OFF：关闭文本违禁任务。</li>
   */
  Switch?: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 过滤条件：任务状态，可选值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）。
   */
  Status: string
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
  /**
   * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
   */
  ScrollToken?: string
}

/**
 * 人脸识别任务控制参数
 */
export interface FaceConfigureInfoForUpdate {
  /**
   * 人脸识别任务开关，可选值：
<li>ON：开启智能人脸识别任务；</li>
<li>OFF：关闭智能人脸识别任务。</li>
   */
  Switch?: string
  /**
   * 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。取值范围：0-100。
   */
  Score?: number
  /**
   * 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：
<li>entertainment：娱乐明星；</li>
<li>sport：体育明星；</li>
<li>politician：敏感人物。</li>
   */
  DefaultLibraryLabelSet?: Array<string>
  /**
   * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
标签个数最多 100 个，每个标签长度最多 16 个字符。
   */
  UserDefineLibraryLabelSet?: Array<string>
  /**
   * 人物库选择，可选值：
<li>Default：使用默认人物库；</li>
<li>UserDefine：使用用户自定义人物库。</li>
<li>All：同时使用默认人物库和用户自定义人物库。</li>
   */
  FaceLibrary?: string
}

/**
 * CreateTranscodeTemplate返回参数结构体
 */
export interface CreateTranscodeTemplateResponse {
  /**
   * 转码模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音关键词识别输入。
 */
export interface AiRecognitionTaskAsrWordsResultInput {
  /**
   * 语音关键词识别模板 ID。
   */
  Definition: number
}

/**
 * CreateAIAnalysisTemplate请求参数结构体
 */
export interface CreateAIAnalysisTemplateRequest {
  /**
   * 视频内容分析模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 视频内容分析模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 智能分类任务控制参数。
   */
  ClassificationConfigure?: ClassificationConfigureInfo
  /**
   * 智能标签任务控制参数。
   */
  TagConfigure?: TagConfigureInfo
  /**
   * 智能封面任务控制参数。
   */
  CoverConfigure?: CoverConfigureInfo
  /**
   * 智能按帧标签任务控制参数。
   */
  FrameTagConfigure?: FrameTagConfigureInfo
}

/**
 * 内容审核涉敏任务输入参数类型
 */
export interface AiReviewTerrorismTaskInput {
  /**
   * 模板 ID。
   */
  Definition: number
}

/**
 * DescribeWorkflows请求参数结构体
 */
export interface DescribeWorkflowsRequest {
  /**
   * 工作流 ID 过滤条件，数组长度限制：100。
   */
  WorkflowIds?: Array<number | bigint>
  /**
   * 工作流状态，取值范围：
<li>Enabled：已启用，</li>
<li>Disabled：已禁用。</li>
不填此参数，则不区分工作流状态。
   */
  Status?: string
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
}

/**
 * DescribeSchedules请求参数结构体
 */
export interface DescribeSchedulesRequest {
  /**
   * 编排 ID 过滤条件，数组长度限制：100。
   */
  ScheduleIds?: Array<number | bigint>
  /**
   * 编排触发类型，可选值：
<li>CosFileUpload： 腾讯云 COS 文件上传触发</li>
<li>AwsS3FileUpload：Aws S3 文件上传触发。</li>
不填或者为空表示全部。
   */
  TriggerType?: string
  /**
   * 状态，取值范围：
<li>Enabled：已启用，</li>
<li>Disabled：已禁用。</li>
不填此参数，则不区编排状态。
   */
  Status?: string
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
}

/**
 * 点播文件音频流信息
 */
export interface MediaAudioStreamItem {
  /**
   * 音频流的码率，单位：bps。
   */
  Bitrate?: number
  /**
   * 音频流的采样率，单位：hz。
   */
  SamplingRate?: number
  /**
   * 音频流的编码格式，例如 aac。
   */
  Codec?: string
  /**
   * 音频声道数，例如 2。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Channel?: number
  /**
   * 音频Codecs。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Codecs?: string
  /**
   * 音频响度。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Loudness?: number
}

/**
 * 直播 AI 内容审核图片涉敏结果
 */
export interface LiveStreamAiReviewImageTerrorismResult {
  /**
   * 嫌疑片段起始的 PTS 时间，单位：秒。
   */
  StartPtsTime: number
  /**
   * 嫌疑片段结束的 PTS 时间，单位：秒。
   */
  EndPtsTime: number
  /**
   * 嫌疑片段涉敏分数。
   */
  Confidence: number
  /**
   * 嫌疑片段涉敏结果建议，取值范围：
<li>pass</li>
<li>review</li>
<li>block</li>
   */
  Suggestion: string
  /**
   * 视频涉敏结果标签，取值范围：
<li>guns：武器枪支。</li>
<li>crowd：人群聚集。</li>
<li>police：警察部队。</li>
<li>bloody：血腥画面。</li>
<li>banners：涉敏旗帜。</li>
<li>militant：武装分子。</li>
<li>explosion：爆炸火灾。</li>
<li>terrorists：涉敏人物。</li>
   */
  Label: string
  /**
   * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
   */
  Url: string
  /**
   * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  PicUrlExpireTime: string
}

/**
 * ProcessLiveStream请求参数结构体
 */
export interface ProcessLiveStreamRequest {
  /**
   * 直播流 URL（必须是直播文件地址，支持 rtmp，hls 和 flv 等）。
   */
  Url: string
  /**
   * 任务的事件通知信息，用于指定直播流处理的结果。
   */
  TaskNotifyConfig: LiveStreamTaskNotifyConfig
  /**
   * 直播流处理输出文件的目标存储。如处理有文件输出，该参数为必填项。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 直播流处理生成的文件输出的目标目录，如`/movie/201909/`，如果不填为 `/` 目录。
   */
  OutputDir?: string
  /**
   * 视频内容审核类型任务参数。
   */
  AiContentReviewTask?: AiContentReviewTaskInput
  /**
   * 视频内容识别类型任务参数。
   */
  AiRecognitionTask?: AiRecognitionTaskInput
  /**
   * 视频内容分析类型任务参数。
   */
  AiAnalysisTask?: AiAnalysisTaskInput
  /**
   * 媒体质检类型任务参数。
   */
  AiQualityControlTask?: AiQualityControlTaskInput
  /**
   * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
   */
  SessionId?: string
  /**
   * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
   */
  SessionContext?: string
  /**
   * 直播编排ID。
注意1：对于OutputStorage、OutputDir参数：
<li>当服务编排中子任务节点配置了OutputStorage、OutputDir时，该子任务节点中配置的输出作为子任务的输出。</li>
<li>当服务编排中子任务节点没有配置OutputStorage、OutputDir时，若对直播流发起处理（ProcessLiveStream）有输出，将覆盖原有编排的默认输出。</li>
注意2：对于TaskNotifyConfig参数，若创建任务接口（ProcessLiveStream）有设置，将覆盖原有编排的默认回调。
   */
  ScheduleId?: number
}

/**
 * 智能横转竖结果信息
 */
export interface AiAnalysisTaskHorizontalToVerticalOutput {
  /**
   * 视频智能横转竖列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 智能横转竖视频的存储位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 置信度。	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Confidence?: number
}

/**
 * ModifyImageSpriteTemplate请求参数结构体
 */
export interface ModifyImageSpriteTemplateRequest {
  /**
   * 雪碧图模板唯一标识。
   */
  Definition: number
  /**
   * 雪碧图模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width?: number
  /**
   * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height?: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive?: string
  /**
   * 采样类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
   */
  SampleType?: string
  /**
   * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
   */
  SampleInterval?: number
  /**
   * 雪碧图中小图的行数。
   */
  RowCount?: number
  /**
   * 雪碧图中小图的列数。
   */
  ColumnCount?: number
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
   */
  FillType?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 图片格式，取值可以为 jpg、png、webp。
   */
  Format?: string
}

/**
 * 内容审核 Ocr 文字鉴违禁任务输入参数类型
 */
export interface AiReviewProhibitedOcrTaskInput {
  /**
   * 鉴违禁模板 ID。
   */
  Definition: number
}

/**
 * DeleteWatermarkTemplate请求参数结构体
 */
export interface DeleteWatermarkTemplateRequest {
  /**
   * 水印模板唯一标识。
   */
  Definition: number
}

/**
 * 视频编辑/合成任务 字幕元素信息。
 */
export interface ComposeSubtitleItem {
  /**
   * 字幕样式，Styles 列表中对应的 Subtitle样式的 ID。
   */
  StyleId: string
  /**
   * 字幕文本。
   */
  Text: string
  /**
   * 元素在轨道时间轴上的时间信息，不填则紧跟上一个元素。
   */
  TrackTime?: ComposeTrackTime
}

/**
 * DescribeWordSamples请求参数结构体
 */
export interface DescribeWordSamplesRequest {
  /**
   * 关键词过滤条件，数组长度限制：100 个词。
   */
  Keywords?: Array<string>
  /**
   * <b>关键词应用场景过滤条件，可选值：</b>
1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
2. Recognition.Asr：通过音频识别技术，进行内容识别；
3. Review.Ocr：通过光学字符识别技术，进行不适宜内容的识别；
4. Review.Asr：通过音频识别技术，进行不适宜内容的识别；
<b>可合并简写为：</b>
5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；
6. Review：通过光学字符识别技术、音频识别技术，进行不适宜内容的识别，等价于 3+4；
可多选，元素间关系为 or，即关键词的应用场景包含该字段集合中任意元素的记录，均符合该条件。
   */
  Usages?: Array<string>
  /**
   * 标签过滤条件，数组长度限制：20 个词。
   */
  Tags?: Array<string>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：100，最大值：100。
   */
  Limit?: number
}

/**
 * 外挂字幕。
 */
export interface AddOnSubtitle {
  /**
   * 插入形式，可选值：
<li>subtitle-stream：插入字幕轨道</li>
<li>close-caption-708：CEA-708字幕编码到SEI帧</li>
<li>close-caption-608：CEA-608字幕编码到SEI帧</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 字幕文件。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Subtitle?: MediaInputInfo
  /**
   * 字幕名称	。
注意：仅支持中文、英文、数字、空格、下划线(_)、短横线(-)、句点(.)和中英文括号，长度不能超过64个字符。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubtitleName?: string
}

/**
 * Aws SQS 队列信息
 */
export interface AwsSQS {
  /**
   * SQS 队列区域。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SQSRegion: string
  /**
   * SQS 队列名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SQSQueueName: string
  /**
   * 读写SQS的秘钥id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3SecretId?: string
  /**
   * 读写SQS的秘钥key。
注意：此字段可能返回 null，表示取不到有效值。
   */
  S3SecretKey?: string
}

/**
 * 字词信息。
 */
export interface WordResult {
  /**
   * 字词文本。
   */
  Word?: string
  /**
   * 字词起始时间戳，单位秒。
   */
  Start?: number
  /**
   * 字词结束时间戳，单位秒。
   */
  End?: number
}

/**
 * 直播处理任务信息
 */
export interface LiveStreamProcessTask {
  /**
   * 媒体处理任务 ID。
   */
  TaskId: string
  /**
   * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
   */
  Status: string
  /**
   * 错误码，0 表示成功，其他值表示失败。
   */
  ErrCode: number
  /**
   * 错误信息。
   */
  Message: string
  /**
   * 直播流 URL。
   */
  Url: string
}

/**
 * 媒体质检结果输出。
 */
export interface QualityControlData {
  /**
   * 为true时表示视频无音频轨。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoAudio?: boolean
  /**
   * 为true时表示视频无视频轨。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoVideo?: boolean
  /**
   * 视频无参考质量打分，百分制。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityEvaluationScore?: number
  /**
   * 内容质检检出异常项。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityControlResultSet?: Array<QualityControlResult>
  /**
   * 格式诊断检出异常项
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerDiagnoseResultSet?: Array<ContainerDiagnoseResultItem>
}

/**
 * 查询输出的RIST拉流配置信息。
 */
export interface DescribeOutputRISTSettings {
  /**
   * RIST模式，可选[LISTENER|CALLER]，默认为LISTENER。
   */
  Mode?: string
  /**
   * RIST配置方案，可选[MAIN|SIMPLE]，默认为MAIN。
   */
  Profile?: string
  /**
   * RIST缓冲区大小，单位为毫秒。最小值为50毫秒，最大值为5000毫秒。默认值：120
   */
  Buffer?: number
  /**
   * 服务器监听地址，RIST模式为LISTENER时使用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceAddresses?: Array<OutputRISTSourceAddressResp>
}

/**
 * Drm 加密信息。
 */
export interface DrmInfo {
  /**
   * 加密类型：
<li> simpleaes: aes-128 加密</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * SimpleAes 加密信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SimpleAesDrm?: SimpleAesDrm
}

/**
 * DescribeSampleSnapshotTemplates返回参数结构体
 */
export interface DescribeSampleSnapshotTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 采样截图模板详情列表。
   */
  SampleSnapshotTemplateSet?: Array<SampleSnapshotTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频编辑/合成任务 图片元素信息。
 */
export interface ComposeImageItem {
  /**
   * 元素对应媒体信息。
   */
  SourceMedia: ComposeSourceMedia
  /**
   * 元素在轨道时间轴上的时间信息，不填则紧跟上一个元素。
   */
  TrackTime?: ComposeTrackTime
  /**
   * 元素中心点距离画布原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示元素 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布宽度的 10%。</li>
<li>当字符串以 px 结尾，表示元素 XPos 单位为像素，如 100px 表示 XPos 为100像素。</li>
默认：50%。
   */
  XPos?: string
  /**
   * 元素中心点距离画布原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示元素 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示元素 YPos 单位为像素，如 100px 表示 YPos 为100像素。</li>
默认：50%。
   */
  YPos?: string
  /**
   * 视频片段的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示元素 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。</li>
<li>当字符串以 px 结尾，表示元素 Width 单位为像素，如 100px 表示 Width 为100像素。</li>
为空（或0） 的场景：
<li>当 Width、Height 均为空，则 Width 和 Height 取源素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按源素材比例缩放。</li>
<li>当 Width 非空，Height 为空，则 Height 按源素材比例缩放。</li>
   */
  Width?: string
  /**
   * 元素的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示元素 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示元素 Height 单位为像素，如 100px 表示 Height 为100像素。</li>
为空（或0） 的场景：
<li>当 Width、Height 均为空，则 Width 和 Height 取源素材本身的 Width、Height。</li>
<li>当 Width 为空，Height 非空，则 Width 按源素材比例缩放。</li>
<li>当 Width 非空，Height 为空，则 Height 按源素材比例缩放。</li>
   */
  Height?: string
  /**
   * 对图像画面进行的操作，如图像旋转等。
   */
  ImageOperations?: Array<ComposeImageOperation>
}

/**
 * 任务概要信息
 */
export interface TaskSimpleInfo {
  /**
   * 任务 ID。
   */
  TaskId?: string
  /**
   * 任务类型，包含：
<li> WorkflowTask：工作流处理任务；</li>
<li> EditMediaTask：视频编辑任务；</li>
<li> LiveProcessTask：直播处理任务。</li>
   */
  TaskType?: string
  /**
   * 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime?: string
  /**
   * 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。若任务尚未开始，该字段为：0000-00-00T00:00:00Z。
   */
  BeginProcessTime?: string
  /**
   * 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。若任务尚未完成，该字段为：0000-00-00T00:00:00Z。
   */
  FinishTime?: string
  /**
   * 子任务类型。
   */
  SubTaskTypes?: Array<string>
}

/**
 * 内容审核涉黄/涉敏嫌疑片段
 */
export interface MediaContentReviewSegmentItem {
  /**
   * 嫌疑片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 嫌疑片段结束的偏移时间，单位：秒。
   */
  EndTimeOffset: number
  /**
   * 嫌疑片段涉黄分数。
   */
  Confidence: number
  /**
   * 嫌疑片段鉴黄结果标签。
   */
  Label: string
  /**
   * 嫌疑片段鉴黄结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
   */
  Url: string
  /**
   * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  PicUrlExpireTime: string
}

/**
 * DescribeStreamLinkFlowRealtimeStatus返回参数结构体
 */
export interface DescribeStreamLinkFlowRealtimeStatusResponse {
  /**
   * 查询时间，单位s。
   */
  Timestamp: number
  /**
   * 实时数据信息列表。
   */
  Datas: Array<FlowRealtimeStatusItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直播编排任务输出
 */
export interface LiveActivityResult {
  /**
   * 原子任务类型。
<li>LiveRecord：直播录制。</li>
<li>AiQualityControl：媒体质检。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivityType?: string
  /**
   * 原子任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiveActivityResItem?: LiveActivityResItem
}

/**
 * 画面涉敏任务控制参数
 */
export interface TerrorismImgReviewTemplateInfo {
  /**
   * 画面涉敏任务开关，可选值：
<li>ON：开启画面涉敏任务；</li>
<li>OFF：关闭画面涉敏任务。</li>
   */
  Switch: string
  /**
   * 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>guns：武器枪支；</li>
<li>crowd：人群聚集；</li>
<li>bloody：血腥画面；</li>
<li>police：警察部队；</li>
<li>banners：涉敏旗帜；</li>
<li>militant：武装分子；</li>
<li>explosion：爆炸火灾；</li>
<li>terrorists：涉敏人物；</li>
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 80 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * 语音翻译任务控制参数
 */
export interface TranslateConfigureInfo {
  /**
   * 语音翻译任务开关，可选值：
<li>ON：开启智能语音翻译任务；</li>
<li>OFF：关闭智能语音翻译任务。</li>
   */
  Switch: string
  /**
   * 视频源语言。
   */
  SourceLanguage?: string
  /**
   * 翻译目标语言。
   */
  DestinationLanguage?: string
  /**
   * 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubtitleFormat?: string
}

/**
 * 片头片尾任务输入类型
 */
export interface AiAnalysisTaskHeadTailInput {
  /**
   * 片头片尾识别模板 ID。
   */
  Definition: number
}

/**
 * 传输流媒体的音频数据。
 */
export interface FlowMediaAudio {
  /**
   * 帧率。
   */
  Fps: number
  /**
   * 码率，单位是bps。
   */
  Rate: number
  /**
   * 音频Pid。
   */
  Pid: number
  /**
   * 标志同一次推流。
   */
  SessionId: string
}

/**
 * DescribeTranscodeTemplates请求参数结构体
 */
export interface DescribeTranscodeTemplatesRequest {
  /**
   * 转码模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number | bigint>
  /**
   * 模板类型过滤条件，可选值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type?: string
  /**
   * 封装格式过滤条件，可选值：
<li>Video：视频格式，可以同时包含视频流和音频流的封装格式板；</li>
<li>PureAudio：纯音频格式，只能包含音频流的封装格式。</li>
   */
  ContainerType?: string
  /**
   * （建议使用TranscodeType代替）极速高清过滤条件，用于过滤普通转码或极速高清转码模板，可选值：
<li>Common：普通转码模板；</li>
<li>TEHD：极速高清模板。</li>
   */
  TEHDType?: string
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：100。
   */
  Limit?: number
  /**
   * 模板类型（替换旧版本 TEHDType），可选值：
<li>Common：普通转码模板；</li>
<li>TEHD：视频极速高清，老的类型（建议使用 TEHD-100） 。</li>
<li>TEHD-100：视频极速高清</li>
<li>TEHD-200：音频极速高清</li>
<li>Enhance：音视频增强模板。</li>
默认空，不限制类型。

   */
  TranscodeType?: string
  /**
   * 转码模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 视频场景化，可选值： 
normal：通用转码场景：通用转码压缩场景。 
pgc：PGC高清影视：压缩时会注重影视剧的观看体验，根据影视剧特性进行ROI编码，同时保留高质量的视频内容和音频。 
materials_video：高清素材：素材资源类场景，对画质要求极高，较多透明画面内容，在压缩的同时接近视觉无损。 
ugc：UGC内容：适用于广泛的UGC/短视频场景，针对短视频的特性优化编码码率， 画质提升，提升业务QOS/QOE指标。 
e-commerce_video：秀场/电商类：压缩时会强调细节清晰度和ROI区域提升，尤其注重保持人脸区域的画质。 
educational_video：教育类：压缩时会强调文字和图像的清晰度和可读性，以便学生更好地理解内容，确保讲解内容清晰传达。 
no_config：未配置。
   */
  SceneType?: string
  /**
   * 转码策略，可选值： 
ultra_compress：极致压缩：相比标准压缩，该策略能在保证一定画质的基础上最大限度压缩码率，极大节约带宽和存储成本。 
standard_compress：综合最优：平衡压缩率与画质，在保证主观画质没有明显降低的情况下尽可能压缩文件。该策略仅收取音视频极速高清转码费用。 
high_compress：码率优先：优先保证降低文件体积大小，可能有一定画质损失。该策略仅收取音视频极速高清转码费用。 
low_compress：画质优先：优先保证画质，压缩出来的文件体积可能相对较大。该策略仅收取音视频极速高清转码费用。 
no_config：未配置。
   */
  CompressType?: string
}

/**
 * ModifyLiveRecordTemplate返回参数结构体
 */
export interface ModifyLiveRecordTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamLinkSecurityGroups返回参数结构体
 */
export interface DescribeStreamLinkSecurityGroupsResponse {
  /**
   * 安全组信息列表。
   */
  Infos?: Array<SecurityGroupInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeleteStreamLinkFlow返回参数结构体
 */
export interface BatchDeleteStreamLinkFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 编排详情。
 */
export interface SchedulesInfo {
  /**
   * 编排唯一标识。
   */
  ScheduleId?: number
  /**
   * 编排名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleName?: string
  /**
   * 编排类型，可选值：
 <li>Preset：系统预置编排；</li>
<li>Custom：用户自定义编排。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 编排状态，取值范围：
Enabled：已启用，
Disabled：已禁用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 编排绑定的触发规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trigger?: WorkflowTrigger
  /**
   * 编排任务列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Activities?: Array<Activity>
  /**
   * 媒体处理的文件输出存储位置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 媒体处理生成的文件输出的目标目录。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputDir?: string
  /**
   * 任务的事件通知配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskNotifyConfig?: TaskNotifyConfig
  /**
   * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最后编辑时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 资源ID，对于没有关联资源ID的，用账号主资源ID填充。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
}

/**
 * DisableWorkflow请求参数结构体
 */
export interface DisableWorkflowRequest {
  /**
   * 工作流 ID。
   */
  WorkflowId: number
}

/**
 * 涉敏任务控制参数。
 */
export interface PoliticalConfigureInfoForUpdate {
  /**
   * 画面涉敏控制参数。
   */
  ImgReviewInfo?: PoliticalImgReviewTemplateInfoForUpdate
  /**
   * 语音涉敏控制参数。
   */
  AsrReviewInfo?: PoliticalAsrReviewTemplateInfoForUpdate
  /**
   * 文本涉敏控制参数。
   */
  OcrReviewInfo?: PoliticalOcrReviewTemplateInfoForUpdate
}

/**
 * DescribeWatermarkTemplates返回参数结构体
 */
export interface DescribeWatermarkTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 水印模板详情列表。
   */
  WatermarkTemplateSet?: Array<WatermarkTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamLinkFlowLogs请求参数结构体
 */
export interface DescribeStreamLinkFlowLogsRequest {
  /**
   * 传输流Id。
   */
  FlowId: string
  /**
   * 统计的开始时间，默认为前一小时，最多支持查询近7天。
UTC时间，如'2020-01-01T12:00:00Z'。
   */
  StartTime: string
  /**
   * 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。
UTC时间，如'2020-01-01T12:00:00Z'。
   */
  EndTime: string
  /**
   * 输入或输出类型，可选[input|output]。
   */
  Type: Array<string>
  /**
   * 主通道或备通道，可选[0|1]。
   */
  Pipeline: Array<string>
  /**
   * 每页大小，默认100，范围为[1, 1000]。
   */
  PageSize: number
  /**
   * 按Timestamp升序或降序排序，默认降序，可选[desc|asc]。
   */
  SortType?: string
  /**
   * 页码，默认1，范围为[1, 1000]。
   */
  PageNum?: number
}

/**
 * DeleteQualityControlTemplate返回参数结构体
 */
export interface DeleteQualityControlTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAnimatedGraphicsTemplate请求参数结构体
 */
export interface CreateAnimatedGraphicsTemplateRequest {
  /**
   * 帧率，取值范围：[1, 30]，单位：Hz。
   */
  Fps: number
  /**
   * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width?: number
  /**
   * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height?: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive?: string
  /**
   * 动图格式，取值为 gif 和 webp。默认为 gif。
   */
  Format?: string
  /**
   * 图片质量，取值范围：[1, 100]，默认值为 75。
   */
  Quality?: number
  /**
   * 转动图模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
}

/**
 * 智能按帧标签任务控制参数
 */
export interface FrameTagConfigureInfo {
  /**
   * 智能按帧标签任务开关，可选值：
<li>ON：开启智能按帧标签任务；</li>
<li>OFF：关闭智能按帧标签任务。</li>
   */
  Switch: string
}

/**
 * DeleteWorkflow返回参数结构体
 */
export interface DeleteWorkflowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExecuteFunction请求参数结构体
 */
export interface ExecuteFunctionRequest {
  /**
   * 调用后端接口名称。
   */
  FunctionName: string
  /**
   * 接口参数，具体参数格式调用时与后端协调。
   */
  FunctionArg: string
}

/**
 * DescribeStreamLinkFlowLogs返回参数结构体
 */
export interface DescribeStreamLinkFlowLogsResponse {
  /**
   * 日志信息列表。
   */
  Infos: Array<FlowLogInfo>
  /**
   * 当前页码。
   */
  PageNum: number
  /**
   * 每页大小。
   */
  PageSize: number
  /**
   * 总数量。
   */
  TotalNum: number
  /**
   * 总页数。
   */
  TotalPage: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 片头片尾结果信息
 */
export interface AiAnalysisTaskHeadTailOutput {
  /**
   * 片头pts。
注意：此字段可能返回 null，表示取不到有效值。
   */
  HeadTimeOffset: number
  /**
   * 片尾pts。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TailTimeOffset?: number
}

/**
 * DescribeVideoDatabaseEntryTaskDetail返回参数结构体
 */
export interface DescribeVideoDatabaseEntryTaskDetailResponse {
  /**
   * 查询的任务Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 查询的任务的状态，可能为WAITING、PROCESSING、FAIL、SUCCESS。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 查询的任务的结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoDBEntryTaskResults?: Array<VideoDBEntryTaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SimpleAes 加密信息。
 */
export interface SimpleAesDrm {
  /**
   * 请求解密秘钥uri地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uri: string
  /**
   * 加密key(32字节字符串)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 加密初始化向量(32字节字符串)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vector?: string
}

/**
 * DeleteTranscodeTemplate返回参数结构体
 */
export interface DeleteTranscodeTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 直播 AI 物体识别结果
 */
export interface LiveStreamObjectRecognitionResult {
  /**
   * 识别的物体名称。
   */
  Name?: string
  /**
   * 识别片段起始的 PTS 时间，单位：秒。
   */
  StartPtsOffset?: number
  /**
   * 识别片段终止的 PTS 时间，单位：秒。
   */
  EndPtsOffset?: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence?: number
  /**
   * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
   */
  AreaCoordSet?: Array<number | bigint>
  /**
   * 截图链接。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
}

/**
 * 采样截图信息
 */
export interface MediaSampleSnapshotItem {
  /**
   * 采样截图规格 ID，参见[采样截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.87.87.E6.A0.B7.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
   */
  Definition: number
  /**
   * 采样方式，取值范围：
<li>Percent：根据百分比间隔采样。</li>
<li>Time：根据时间间隔采样。</li>
   */
  SampleType: string
  /**
   * 采样间隔
<li>当 SampleType 为 Percent 时，该值表示多少百分比一张图。</li>
<li>当 SampleType 为 Time 时，该值表示多少时间间隔一张图，单位秒， 第一张图均为视频首帧。</li>
   */
  Interval: number
  /**
   * 截图后文件的存储位置。
   */
  Storage: TaskOutputStorage
  /**
   * 生成的截图 path 列表。
   */
  ImagePathSet: Array<string>
  /**
   * 截图如果被打上了水印，被打水印的模板 ID 列表。
   */
  WaterMarkDefinition: Array<number | bigint>
}

/**
 * DescribePersonSamples返回参数结构体
 */
export interface DescribePersonSamplesResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number
  /**
   * 素材信息。
   */
  PersonSet?: Array<AiSamplePerson>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySchedule返回参数结构体
 */
export interface ModifyScheduleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 鉴黄任务控制参数
 */
export interface PornConfigureInfo {
  /**
   * 画面鉴黄控制参数。
   */
  ImgReviewInfo?: PornImgReviewTemplateInfo
  /**
   * 语音鉴黄控制参数。
   */
  AsrReviewInfo?: PornAsrReviewTemplateInfo
  /**
   * 文本鉴黄控制参数。
   */
  OcrReviewInfo?: PornOcrReviewTemplateInfo
}

/**
 * 物体识别结果片段。
 */
export interface AiRecognitionTaskObjectSeqmentItem {
  /**
   * 识别片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number
  /**
   * 识别片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset: number
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number
  /**
   * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
   */
  AreaCoordSet: Array<number | bigint>
}

/**
 * 修改输入信息的参数。
 */
export interface ModifyInput {
  /**
   * 输入Id。
   */
  InputId: string
  /**
   * 输入名称。
   */
  InputName: string
  /**
   * 输入描述。
   */
  Description: string
  /**
   * 允许的推流的IP，CIDR格式。
   */
  AllowIpList: Array<string>
  /**
   * SRT的配置信息。
   */
  SRTSettings: CreateInputSRTSettings
  /**
   * RTP的配置信息。
   */
  RTPSettings: CreateInputRTPSettings
  /**
   * 输入的协议，可选[SRT|RTP|RTMP_PUSH|RTMP_PULL|RTSP_PULL|RIST]。	-
   */
  Protocol?: string
  /**
   * 输入的主备开关，可选[OPEN|CLOSE]。
   */
  FailOver?: string
  /**
   * RTMP_PULL的配置信息。
   */
  RTMPPullSettings?: CreateInputRTMPPullSettings
  /**
   * RTSP_PULL的配置信息。
   */
  RTSPPullSettings?: CreateInputRTSPPullSettings
  /**
   * HLS_PULL的配置信息。
   */
  HLSPullSettings?: CreateInputHLSPullSettings
  /**
   * 延播平滑吐流配置信息。
   */
  ResilientStream?: ResilientStreamConf
  /**
   * 绑定的输入安全组 ID。 仅支持关联一组安全组。
   */
  SecurityGroupIds?: Array<string>
  /**
   * 可用区，非必填，最多支持输入两个可用区，对于需改接口，只要第二个可用区会参与到资源分配。如果input开启容灾或者涉及RTSP_PULL协议切换时有效(会重新分配地址)。
   */
  Zones?: Array<string>
  /**
   * RIST的配置信息。
   */
  RISTSettings?: CreateInputRISTSettings
  /**
   * 输入节点的地区
   */
  InputRegion?: string
}

/**
 * 视频降噪配置
 */
export interface VideoDenoiseConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 类型，可选值：
<li>weak</li>
<li>strong</li>
默认值：weak。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * 物体识别结果。
 */
export interface AiRecognitionTaskObjectResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，0：成功，其他值：失败。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 物体识别任务输入信息。
   */
  Input?: AiRecognitionTaskObjectResultInput
  /**
   * 物体识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiRecognitionTaskObjectResultOutput
}

/**
 * 智能物体识别输出。
 */
export interface AiRecognitionTaskObjectResultOutput {
  /**
   * 智能物体识别结果集。
   */
  ResultSet: Array<AiRecognitionTaskObjectResultItem>
}

/**
 * DescribeAIAnalysisTemplates返回参数结构体
 */
export interface DescribeAIAnalysisTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 视频内容分析模板详情列表。
   */
  AIAnalysisTemplateSet?: Array<AIAnalysisTemplateItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSnapshotByTimeOffsetTemplate请求参数结构体
 */
export interface CreateSnapshotByTimeOffsetTemplateRequest {
  /**
   * 指定时间点截图模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width?: number
  /**
   * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height?: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive?: string
  /**
   * 图片格式，取值可以为 jpg、png、webp。默认为 jpg。
   */
  Format?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
   */
  FillType?: string
}

/**
 * ParseLiveStreamProcessNotification请求参数结构体
 */
export interface ParseLiveStreamProcessNotificationRequest {
  /**
   * 从 CMQ 获取到的直播流事件通知内容。
   */
  Content: string
}

/**
 * 语音关键词识别结果。
 */
export interface AiRecognitionTaskAsrWordsResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 语音关键词识别任务输入信息。
   */
  Input?: AiRecognitionTaskAsrWordsResultInput
  /**
   * 语音关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiRecognitionTaskAsrWordsResultOutput
}

/**
 * 片头片尾结果类型
 */
export interface AiAnalysisTaskHeadTailResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，0：成功，其他值：失败。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 片头片尾任务输入。
   */
  Input?: AiAnalysisTaskHeadTailInput
  /**
   * 片头片尾任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskHeadTailOutput
}

/**
 * CreateSampleSnapshotTemplate请求参数结构体
 */
export interface CreateSampleSnapshotTemplateRequest {
  /**
   * 采样截图类型，取值：
<li>Percent：按百分比。</li>
<li>Time：按时间间隔。</li>
   */
  SampleType: string
  /**
   * 采样间隔。
<li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
<li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
   */
  SampleInterval: number
  /**
   * 采样截图模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width?: number
  /**
   * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height?: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive?: string
  /**
   * 图片格式，取值为 jpg、png、webp。默认为 jpg。
   */
  Format?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
   */
  FillType?: string
}

/**
 * 媒体处理任务信息
 */
export interface WorkflowTask {
  /**
   * 媒体处理任务 ID。
   */
  TaskId?: string
  /**
   * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
   */
  Status?: string
  /**
   * 源异常时返回非0错误码，返回0 时请使用各个具体任务的 ErrCode。
   */
  ErrCode?: number
  /**
   * 源异常时返回对应异常Message，否则请使用各个具体任务的 Message。
   */
  Message?: string
  /**
   * 媒体处理的目标文件信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputInfo?: MediaInputInfo
  /**
   * 原始视频的元信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetaData?: MediaMetaData
  /**
   * 媒体处理任务的执行状态与结果。
   */
  MediaProcessResultSet?: Array<MediaProcessTaskResult>
  /**
   * 视频内容审核任务的执行状态与结果。
   */
  AiContentReviewResultSet?: Array<AiContentReviewResult>
  /**
   * 视频内容分析任务的执行状态与结果。
   */
  AiAnalysisResultSet?: Array<AiAnalysisResult>
  /**
   * 视频内容识别任务的执行状态与结果。
   */
  AiRecognitionResultSet?: Array<AiRecognitionResult>
  /**
   * 媒体质检任务的执行状态与结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiQualityControlTaskResult?: ScheduleQualityControlTaskResult
}

/**
 * 传输流媒体的视频数据。
 */
export interface FlowMediaVideo {
  /**
   * 帧率。
   */
  Fps: number
  /**
   * 码率，单位是bps。
   */
  Rate: number
  /**
   * 视频Pid。
   */
  Pid: number
  /**
   * 标志同一次推流。
   */
  SessionId: string
}

/**
 * 内容审核 Asr 文字鉴黄任务结果类型
 */
export interface AiReviewTaskPornAsrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 内容审核 Asr 文字鉴黄任务输入。
   */
  Input?: AiReviewPornAsrTaskInput
  /**
   * 内容审核 Asr 文字鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiReviewPornAsrTaskOutput
}

/**
 * DescribeStreamLinkFlow请求参数结构体
 */
export interface DescribeStreamLinkFlowRequest {
  /**
   * 流Id。
   */
  FlowId: string
}

/**
 * 媒体处理 URL 对象信息。
 */
export interface UrlInputInfo {
  /**
   * 视频的 URL。
   */
  Url: string
}

/**
 * 视频编辑/合成任务 音频流信息。
 */
export interface ComposeAudioStream {
  /**
   * 音频流的编码方式，可选值：
<li>AAC：AAC 编码（默认），用于容器为 mp4。</li>
<li>MP3：mp3 编码，用于容器为 mp3。</li>
   */
  Codec?: string
  /**
   * 音频流的采样率，单位：Hz，可选值：
<li>16000（默认）</li>
<li>32000</li>
<li>44100</li>
<li>48000</li>
   */
  SampleRate?: number
  /**
   * 声道数，可选值：
<li>1：单声道 。</li>
<li>2：双声道（默认）。</li>
   */
  AudioChannel?: number
  /**
   * 参考码率，单位 kbps，范围：26~10000。
如果设置，编码时会尽量按该码率进行编码。
如果不设置，服务将根据音频参数自动采用合适的码率。
   */
  Bitrate?: number
}

/**
 * 人脸识别任务控制参数
 */
export interface FaceConfigureInfo {
  /**
   * 人脸识别任务开关，可选值：
<li>ON：开启智能人脸识别任务；</li>
<li>OFF：关闭智能人脸识别任务。</li>
   */
  Switch: string
  /**
   * 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。默认 95 分。取值范围：0 - 100。
   */
  Score?: number
  /**
   * 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：
<li>entertainment：娱乐明星；</li>
<li>sport：体育明星；</li>
<li>politician：敏感人物。</li>
   */
  DefaultLibraryLabelSet?: Array<string>
  /**
   * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
标签个数最多 100 个，每个标签长度最多 16 个字符。
   */
  UserDefineLibraryLabelSet?: Array<string>
  /**
   * 人物库选择，可选值：
<li>Default：使用默认人物库；</li>
<li>UserDefine：使用用户自定义人物库。</li>
<li>All：同时使用默认人物库和用户自定义人物库。</li>
默认值：All，使用系统默认人物库及用户自定义人物库。
   */
  FaceLibrary?: string
}

/**
 * 智能人脸识别输出。
 */
export interface AiRecognitionTaskFaceResultOutput {
  /**
   * 智能人脸识别结果集。
   */
  ResultSet: Array<AiRecognitionTaskFaceResultItem>
}

/**
 * 画面鉴黄任务控制参数。
 */
export interface PornImgReviewTemplateInfoForUpdate {
  /**
   * 画面鉴黄任务开关，可选值：
<li>ON：开启画面鉴黄任务；</li>
<li>OFF：关闭画面鉴黄任务。</li>
   */
  Switch?: string
  /**
   * 画面鉴黄过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>porn：色情；</li>
<li>vulgar：低俗；</li>
<li>intimacy：亲密行为；</li>
<li>sexy：性感。</li>
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * BatchStartStreamLinkFlow请求参数结构体
 */
export interface BatchStartStreamLinkFlowRequest {
  /**
   * EventId。
   */
  EventId: string
  /**
   * Event关联的流Id数组，如果不传默认启动Event下面的所有媒体传输流。
   */
  FlowIds?: Array<string>
}

/**
 * CreateWatermarkTemplate返回参数结构体
 */
export interface CreateWatermarkTemplateResponse {
  /**
   * 水印模板唯一标识。
   */
  Definition?: number
  /**
   * 水印图片地址，仅当 Type 为 image，该字段有效。
   */
  ImageUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 画面鉴黄任务控制参数
 */
export interface PornImgReviewTemplateInfo {
  /**
   * 画面鉴黄任务开关，可选值：
<li>ON：开启画面鉴黄任务；</li>
<li>OFF：关闭画面鉴黄任务。</li>
   */
  Switch: string
  /**
   * 画面鉴黄过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
<li>porn：色情；</li>
<li>vulgar：低俗；</li>
<li>intimacy：亲密行为；</li>
<li>sexy：性感。</li>
   */
  LabelSet?: Array<string>
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 0 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * Ocr 文字敏感信息
 */
export interface AiReviewPoliticalOcrTaskOutput {
  /**
   * Ocr 文字敏感评分，分值为0到100。
   */
  Confidence: number
  /**
   * Ocr 文字敏感结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
   */
  Suggestion: string
  /**
   * Ocr 文字有敏感嫌疑的视频片段列表。
   */
  SegmentSet: Array<MediaContentReviewOcrTextSegmentItem>
}

/**
 * 文本全文本识别任务控制参数
 */
export interface OcrFullTextConfigureInfo {
  /**
   * 文本全文识别任务开关，可选值：
<li>ON：开启智能文本全文识别任务；</li>
<li>OFF：关闭智能文本全文识别任务。</li>
   */
  Switch: string
}

/**
 * ModifyStreamLinkSecurityGroup返回参数结构体
 */
export interface ModifyStreamLinkSecurityGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveRecordTemplate请求参数结构体
 */
export interface ModifyLiveRecordTemplateRequest {
  /**
   * 录制模板唯一标识。
   */
  Definition: number
  /**
   * HLS 配置参数
   */
  HLSConfigure?: HLSConfigureInfo
  /**
   * 录制模板名称，长度限制：64 个字符。
   */
  Name?: string
  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
}

/**
 * AI 视频智能分析输入参数类型
 */
export interface AiAnalysisTaskInput {
  /**
   * 视频内容分析模板 ID。
   */
  Definition: number
  /**
   * 扩展参数，其值为序列化的 json字符串。
注意：此参数为定制需求参数，需要线下对接。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtendedParameter?: string
}

/**
 * DeleteAnimatedGraphicsTemplate请求参数结构体
 */
export interface DeleteAnimatedGraphicsTemplateRequest {
  /**
   * 转动图模板唯一标识。
   */
  Definition: number
}

/**
 * DeleteSnapshotByTimeOffsetTemplate请求参数结构体
 */
export interface DeleteSnapshotByTimeOffsetTemplateRequest {
  /**
   * 指定时间点截图模板唯一标识。
   */
  Definition: number
}

/**
 * DescribeAnimatedGraphicsTemplates返回参数结构体
 */
export interface DescribeAnimatedGraphicsTemplatesResponse {
  /**
   * 符合过滤条件的记录总数。
   */
  TotalCount?: number
  /**
   * 转动图模板详情列表。
   */
  AnimatedGraphicsTemplateSet?: Array<AnimatedGraphicsTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流的音频数据。
 */
export interface FlowAudio {
  /**
   * 帧率。
   */
  Fps: number
  /**
   * 码率，单位是bps。
   */
  Rate: number
  /**
   * 音频Pid。
   */
  Pid: number
}

/**
 * 编排子任务输出
 */
export interface ActivityResItem {
  /**
   * 转码任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  TranscodeTask?: MediaProcessTaskTranscodeResult
  /**
   * 转动图任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnimatedGraphicTask?: MediaProcessTaskAnimatedGraphicResult
  /**
   * 时间点截图任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotByTimeOffsetTask?: MediaProcessTaskSnapshotByTimeOffsetResult
  /**
   * 采样截图任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  SampleSnapshotTask?: MediaProcessTaskSampleSnapshotResult
  /**
   * 雪碧图任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageSpriteTask?: MediaProcessTaskImageSpriteResult
  /**
   * 自适应码流任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdaptiveDynamicStreamingTask?: MediaProcessTaskAdaptiveDynamicStreamingResult
  /**
   * 识别任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecognitionTask?: ScheduleRecognitionTaskResult
  /**
   * 审核任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReviewTask?: ScheduleReviewTaskResult
  /**
   * 分析任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisTask?: ScheduleAnalysisTaskResult
  /**
   * 媒体质检任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityControlTask?: ScheduleQualityControlTaskResult
}

/**
 * 直播编排子任务输出
 */
export interface LiveActivityResItem {
  /**
   * 直播录制任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiveRecordTask?: LiveScheduleLiveRecordTaskResult
  /**
   * 媒体质检任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  LiveQualityControlTask?: ScheduleQualityControlTaskResult
}

/**
 * 视频检索的检索输入
 */
export interface SearchValueInput {
  /**
   * 检索输入的类型，目前支持：
Text：文本检索
   */
  SearchValueType: string
  /**
   * 当SearchValueType为Text时有效且必填，用于检索视频的文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  TextInput?: string
}

/**
 * 编辑点播视频文件信息
 */
export interface EditMediaFileInfo {
  /**
   * 视频的输入信息。
   */
  InputInfo: MediaInputInfo
  /**
   * 【剪辑】任务生效，视频剪辑的起始时间偏移，单位：秒。
   */
  StartTimeOffset?: number
  /**
   * 【剪辑】任务生效，视频剪辑的结束时间偏移，单位：秒。
   */
  EndTimeOffset?: number
  /**
   * 【合成】任务必选，用于轨道元素中媒体关联源素材 ID。

注意：允许字母、数字、-、_ ，最长 32 字符
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
}

/**
 * 智能擦除结果类型
 */
export interface AiAnalysisTaskDelLogoResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，0：成功，其他值：失败。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 智能擦除任务输入。
   */
  Input?: AiAnalysisTaskDelLogoInput
  /**
   * 智能擦除任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiAnalysisTaskDelLogoOutput
}

/**
 * 对视频做采样截图任务输入参数类型。
 */
export interface SampleSnapshotTaskInput {
  /**
   * 采样截图模板 ID。
   */
  Definition: number
  /**
   * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
   */
  WatermarkSet?: Array<WatermarkInput>
  /**
   * 采样截图后文件的目标存储，不填则继承上层的 OutputStorage 值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputStorage?: TaskOutputStorage
  /**
   * 采样截图后图片文件的输出路径，可以为相对路径或者绝对路径。
若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。
相对路径示例：
<li>文件名_{变量名}.{format}</li>
<li>文件名.{format}</li>
绝对路径示例：
<li>/自定义路径/文件名_{变量名}.{format}</li>
如果不填，则默认为相对路径：`{inputName}_sampleSnapshot_{definition}_{number}.{format}`。

   */
  OutputObjectPath?: string
  /**
   * 采样截图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectNumberFormat?: NumberFormat
}

/**
 * 媒体质检模板详情
 */
export interface QualityControlTemplate {
  /**
   * 媒体质检模板唯一标识。
   */
  Definition?: number
  /**
   * 媒体质检模板名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 模板描述信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * 模板类型，取值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 媒体质检配置参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityControlItemSet?: Array<QualityControlItemConfig>
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
}

/**
 * 涉敏任务控制参数
 */
export interface TerrorismConfigureInfo {
  /**
   * 画面涉敏任务控制参数。
   */
  ImgReviewInfo?: TerrorismImgReviewTemplateInfo
  /**
   * 文本涉敏任务控制参数。
   */
  OcrReviewInfo?: TerrorismOcrReviewTemplateInfo
}

/**
 * 语音涉敏任务控制参数
 */
export interface PoliticalAsrReviewTemplateInfo {
  /**
   * 语音涉敏任务开关，可选值：
<li>ON：开启语音涉敏任务；</li>
<li>OFF：关闭语音涉敏任务。</li>
   */
  Switch: string
  /**
   * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
   */
  BlockConfidence?: number
  /**
   * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
   */
  ReviewConfidence?: number
}

/**
 * CreateAnimatedGraphicsTemplate返回参数结构体
 */
export interface CreateAnimatedGraphicsTemplateResponse {
  /**
   * 转动图模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音翻译任务控制参数
 */
export interface TranslateConfigureInfoForUpdate {
  /**
   * 语音翻译任务开关，可选值：
<li>ON：开启智能语音翻译任务；</li>
<li>OFF：关闭智能语音翻译任务。</li>
   */
  Switch?: string
  /**
   * 视频源语言。
   */
  SourceLanguage?: string
  /**
   * 翻译目标语言。
   */
  DestinationLanguage?: string
  /**
   * 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
   */
  SubtitleFormat?: string
}

/**
 * 采样截图模板详情
 */
export interface SampleSnapshotTemplate {
  /**
   * 采样截图模板唯一标识。
   */
  Definition: number
  /**
   * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
   */
  Type: string
  /**
   * 采样截图模板名称。
   */
  Name: string
  /**
   * 模板描述信息。
   */
  Comment: string
  /**
   * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Width: number
  /**
   * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
   */
  Height: number
  /**
   * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
   */
  ResolutionAdaptive: string
  /**
   * 图片格式。
   */
  Format: string
  /**
   * 采样截图类型。
   */
  SampleType: string
  /**
   * 采样间隔。
   */
  SampleInterval: number
  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string
  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  UpdateTime: string
  /**
   * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
默认值：black 。
   */
  FillType: string
}

/**
 * 创建的输入RTSP拉流源站配置信息。
 */
export interface RTSPPullSourceAddress {
  /**
   * RTSP源站的Url地址。
   */
  Url: string
}

/**
 * 查询输入的HLS配置信息。
 */
export interface DescribeHLSPullSourceAddress {
  /**
   * HLS源站的Url地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url: string
}

/**
 * 雪碧图信息
 */
export interface MediaImageSpriteItem {
  /**
   * 雪碧图规格，参见[雪碧图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
   */
  Definition: number
  /**
   * 雪碧图小图的高度。
   */
  Height: number
  /**
   * 雪碧图小图的宽度。
   */
  Width: number
  /**
   * 每一张雪碧图大图里小图的数量。
   */
  TotalCount: number
  /**
   * 每一张雪碧图大图的路径。
   */
  ImagePathSet: Array<string>
  /**
   * 雪碧图子图位置与时间关系的 WebVtt 文件路径。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
   */
  WebVttPath: string
  /**
   * 雪碧图文件的存储位置。
   */
  Storage: TaskOutputStorage
}

/**
 * 音频增强配置
 */
export interface AudioEnhanceConfig {
  /**
   * 音频降噪配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Denoise?: AudioDenoiseConfig
  /**
   * 音频分离配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Separate?: AudioSeparateConfig
  /**
   * 音量均衡配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumeBalance?: VolumeBalanceConfig
  /**
   * 音频美化配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Beautify?: AudioBeautifyConfig
}

/**
 * 人脸识别结果
 */
export interface AiRecognitionTaskFaceResultItem {
  /**
   * 人物唯一标识 ID。
   */
  Id?: string
  /**
   * 人物库类型，表示识别出的人物来自哪个人物库：
<li>Default：默认人物库；</li>
<li>UserDefine：用户自定义人物库。</li>
   */
  Type?: string
  /**
   * 人物名称。
   */
  Name?: string
  /**
   * 人物出现的片段结果集。
   */
  SegmentSet?: Array<AiRecognitionTaskFaceSegmentItem>
  /**
   * 人物性别：
<li>Male：男性；</li>
<li>Female：女性。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Gender?: string
  /**
   * 人物出生日期。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Birthday?: string
  /**
   * 人物职业或者职务。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Profession?: string
  /**
   * 人物毕业院校。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchoolOfGraduation?: string
  /**
   * 人物简介。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Abstract?: string
  /**
   * 人物出生地或者籍贯。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PlaceOfBirth?: string
  /**
   * 人物类型：
<li>Politician：官员；</li>
<li>Artist：艺人。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PersonType?: string
  /**
   * 敏感度标注：
<li>Normal：正常；</li>
<li>Sensitive：敏感。</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 截图链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
}

/**
 * DescribeStreamLinkFlowMediaStatistics请求参数结构体
 */
export interface DescribeStreamLinkFlowMediaStatisticsRequest {
  /**
   * 传输流ID。
   */
  FlowId: string
  /**
   * 输入或输出类型，可选[input|output]。
   */
  Type: string
  /**
   * 输入或输出Id。
   */
  InputOutputId: string
  /**
   * 主通道或备通道，可选[0|1]。
   */
  Pipeline: string
  /**
   * 查询间隔，可选[5s|1min|5min|15min]。
   */
  Period: string
  /**
   * 统计的开始时间，默认为前一小时，最多支持查询近7天。
UTC时间，如'2020-01-01T12:00:00Z'。
   */
  StartTime: string
  /**
   * 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。
UTC时间，如'2020-01-01T12:00:00Z'。
   */
  EndTime: string
}

/**
 * 智能分类任务输入类型
 */
export interface AiAnalysisTaskCoverInput {
  /**
   * 视频智能封面模板 ID。
   */
  Definition: number
}

/**
 * 地区信息。
 */
export interface RegionInfo {
  /**
   * 地区名称。
   */
  Name: string
}

/**
 * CreateStreamLinkInput返回参数结构体
 */
export interface CreateStreamLinkInputResponse {
  /**
   * 创建的Flow信息。
   */
  Info?: DescribeFlow
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频编辑/合成任务 音频操作。
 */
export interface ComposeAudioOperation {
  /**
   * 音频操作类型，取值有：
<li>Volume：音量调节。</li>
   */
  Type: string
  /**
   *  当 Type = Volume 时有效。音量调节参数，取值范围: 0~5。 
<li>0 表示静音。</li>
<li>小于1 表示降低音量。</li>
<li>1 表示不变。</li>
<li>大于1表示升高音量。</li>
   */
  Volume?: number
}

/**
 * 直播流 AI 分析结果
 */
export interface LiveStreamAiAnalysisResultItem {
  /**
   * 结果的类型，取值范围：
<li>SegmentRecognition：拆条。</li>
   */
  Type: string
  /**
   * 拆条结果，当 Type 为
SegmentRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentResultSet: Array<SegmentRecognitionItem>
}

/**
 * 翻译结果。
 */
export interface AiRecognitionTaskTransTextResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status?: string
  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
   */
  ErrCodeExt?: string
  /**
   * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  Message?: string
  /**
   * 翻译任务输入信息。
   */
  Input?: AiRecognitionTaskTransTextResultInput
  /**
   * 翻译任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: AiRecognitionTaskTransTextResultOutput
  /**
   * 任务进度。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Progress?: number
}

/**
 * DescribeAIRecognitionTemplates请求参数结构体
 */
export interface DescribeAIRecognitionTemplatesRequest {
  /**
   * 视频内容识别模板唯一标识过滤条件，数组长度限制：10。
   */
  Definitions?: Array<number | bigint>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：50。
   */
  Limit?: number
  /**
   * 模板类型过滤条件，不填则返回所有，可选值：
   * Preset：系统预置模板；
   * Custom：用户自定义模板。
   */
  Type?: string
  /**
   * 视频内容识别模板标识过滤条件，长度限制：64 个字符。
   */
  Name?: string
}

/**
 * BatchStopStreamLinkFlow返回参数结构体
 */
export interface BatchStopStreamLinkFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 编辑视频任务的输出
 */
export interface EditMediaTaskOutput {
  /**
   * 编辑后文件的目标存储。
   */
  OutputStorage: TaskOutputStorage
  /**
   * 编辑后的视频文件路径。
   */
  Path: string
  /**
   * 编辑后的视频文件元信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetaData?: MediaMetaData
}

/**
 * 智能精彩集锦片段列表。
 */
export interface HighlightSegmentItem {
  /**
   * 置信度。
   */
  Confidence?: number
  /**
   * 片段起始时间偏移。
   */
  StartTimeOffset?: number
  /**
   * 片段结束时间偏移。
   */
  EndTimeOffset?: number
  /**
   * 片段标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentTags?: Array<string>
}

/**
 * DeleteWatermarkTemplate返回参数结构体
 */
export interface DeleteWatermarkTemplateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 延播平滑吐流配置。
 */
export interface ResilientStreamConf {
  /**
   * 是否开启延播平滑吐流，true开启，false不开启，默认不开启。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enable?: boolean
  /**
   * 延播时间，单位秒，目前支持的范围为10~300秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BufferTime?: number
}

/**
 * 查询输出的RTSP拉流URL信息。
 */
export interface DescribeOutputRTSPPullServerUrl {
  /**
   * RTSP拉流地址的Url。
   */
  Url: string
}

/**
 * 低光照增强配置
 */
export interface LowLightEnhanceConfig {
  /**
   * 能力配置开关，可选值：
<li>ON：开启；</li>
<li>OFF：关闭。</li>
默认值：ON。
   */
  Switch?: string
  /**
   * 类型，可选值：
<li>normal</li>
默认值：normal。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * DescribeMediaMetaData请求参数结构体
 */
export interface DescribeMediaMetaDataRequest {
  /**
   * 需要获取元信息的文件输入信息。
   */
  InputInfo: MediaInputInfo
}

/**
 * 智能按帧标签任务控制参数
 */
export interface FrameTagConfigureInfoForUpdate {
  /**
   * 智能按帧标签任务开关，可选值：
<li>ON：开启智能按帧标签任务；</li>
<li>OFF：关闭智能按帧标签任务。</li>
   */
  Switch?: string
}

/**
 * CreateImageSpriteTemplate返回参数结构体
 */
export interface CreateImageSpriteTemplateResponse {
  /**
   * 雪碧图模板唯一标识。
   */
  Definition?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGroupAttachFlowsById返回参数结构体
 */
export interface DescribeGroupAttachFlowsByIdResponse {
  /**
   * 安全组反查的Flow信息列表。
   */
  Infos?: Array<FlowInOutResp>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 翻译片段。
 */
export interface AiRecognitionTaskTransTextSegmentItem {
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence?: number
  /**
   * 识别片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset?: number
  /**
   * 识别片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset?: number
  /**
   * 识别文本。
   */
  Text?: string
  /**
   * 翻译文本。
   */
  Trans?: string
  /**
   * 字词时间戳信息。
   */
  Wordlist?: Array<WordResult>
}

/**
 * ModifyWatermarkTemplate返回参数结构体
 */
export interface ModifyWatermarkTemplateResponse {
  /**
   * 图片水印地址，仅当 ImageTemplate.ImageContent 非空，该字段有效。
   */
  ImageUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能识别结果。
 */
export interface AiRecognitionResult {
  /**
   * 任务的类型，取值范围：
<li>FaceRecognition：人脸识别，</li>
<li>AsrWordsRecognition：语音关键词识别，</li>
<li>OcrWordsRecognition：文本关键词识别，</li>
<li>AsrFullTextRecognition：语音全文识别，</li>
<li>OcrFullTextRecognition：文本全文识别。</li>
<li>TransTextRecognition：语音翻译。</li>
   */
  Type?: string
  /**
   * 人脸识别结果，当 Type 为 
 FaceRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FaceTask?: AiRecognitionTaskFaceResult
  /**
   * 语音关键词识别结果，当 Type 为
 AsrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsrWordsTask?: AiRecognitionTaskAsrWordsResult
  /**
   * 语音全文识别结果，当 Type 为
 AsrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsrFullTextTask?: AiRecognitionTaskAsrFullTextResult
  /**
   * 文本关键词识别结果，当 Type 为
 OcrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OcrWordsTask?: AiRecognitionTaskOcrWordsResult
  /**
   * 文本全文识别结果，当 Type 为
 OcrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OcrFullTextTask?: AiRecognitionTaskOcrFullTextResult
  /**
   * 翻译结果，当 Type 为

TransTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransTextTask?: AiRecognitionTaskTransTextResult
  /**
   * 物体识别结果，当Type 为

ObjectRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjectTask?: AiRecognitionTaskObjectResult
}

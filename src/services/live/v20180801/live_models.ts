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
 * CreateLiveSnapshotRule请求参数结构体
 */
export interface CreateLiveSnapshotRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。
   */
  AppName?: string

  /**
      * 流名称。
注：如果本参数设置为非空字符串，规则将只对此推流起作用。
      */
  StreamName?: string
}

/**
 * 带宽和流量信息。
 */
export interface BillDataInfo {
  /**
   * 时间点，格式: yyyy-mm-dd HH:MM:SS。
   */
  Time: string

  /**
   * 带宽，单位是 Mbps。
   */
  Bandwidth: number

  /**
   * 流量，单位是 MB。
   */
  Flux: number

  /**
   * 峰值时间点，格式: yyyy-mm-dd HH:MM:SS，原始数据为5分钟粒度，如果查询小时和天粒度数据，则返回对应粒度内的带宽峰值时间点。
   */
  PeakTime: string
}

/**
 * EnableLiveDomain返回参数结构体
 */
export interface EnableLiveDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveCert请求参数结构体
 */
export interface CreateLiveCertRequest {
  /**
      * 证书类型。0-用户添加证书；1-腾讯云托管证书。
注意：当证书类型为0时，HttpsCrt和HttpsKey必选；
当证书类型为1时，优先使用CloudCertId对应证书，若CloudCertId为空则使用HttpsCrt和HttpsKey。
      */
  CertType: number

  /**
   * 证书名称。
   */
  CertName?: string

  /**
   * 证书内容，即公钥。
   */
  HttpsCrt?: string

  /**
   * 私钥。
   */
  HttpsKey?: string

  /**
   * 描述。
   */
  Description?: string

  /**
   * 腾讯云证书托管ID。
   */
  CloudCertId?: string
}

/**
 * HLS专属录制参数
 */
export interface HlsSpecialParam {
  /**
      * HLS续流超时时间。
取值范围[0，1800]。
      */
  FlowContinueDuration?: number
}

/**
 * 转码总量数据
 */
export interface TranscodeTotalInfo {
  /**
      * 时间点，北京时间，
示例：2019-03-01 00:00:00。
      */
  Time: string

  /**
   * 转码时长，单位：分钟。
   */
  Duration: number

  /**
      * 编码方式，带模块，
示例：
liveprocessor_H264 =》直播转码-H264，
liveprocessor_H265 =》 直播转码-H265，
topspeed_H264 =》极速高清-H264，
topspeed_H265 =》极速高清-H265。
      */
  ModuleCodec: string

  /**
      * 分辨率，
示例：540*480。
      */
  Resolution: string
}

/**
 * StopRecordTask返回参数结构体
 */
export interface StopRecordTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeliverBandwidthList返回参数结构体
 */
export interface DescribeDeliverBandwidthListResponse {
  /**
   * 转推计费带宽数据
   */
  DataInfoList: Array<BandwidthInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveRecordRule请求参数结构体
 */
export interface DeleteLiveRecordRuleRequest {
  /**
      * 推流域名。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
      */
  DomainName: string

  /**
      * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
      */
  AppName?: string

  /**
      * 流名称。
域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。
      */
  StreamName?: string
}

/**
 * ResumeLiveStream请求参数结构体
 */
export interface ResumeLiveStreamRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string

  /**
   * 您的推流域名。
   */
  DomainName: string

  /**
   * 流名称。
   */
  StreamName: string
}

/**
 * DeleteLiveTranscodeTemplate返回参数结构体
 */
export interface DeleteLiveTranscodeTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopScreenshotTask请求参数结构体
 */
export interface StopScreenshotTaskRequest {
  /**
   * 截图任务ID。
   */
  TaskId: string
}

/**
 * DescribeBillBandwidthAndFluxList返回参数结构体
 */
export interface DescribeBillBandwidthAndFluxListResponse {
  /**
   * 峰值带宽所在时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  PeakBandwidthTime: string

  /**
   * 峰值带宽，单位是Mbps。
   */
  PeakBandwidth: number

  /**
   * 95峰值带宽所在时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  P95PeakBandwidthTime: string

  /**
   * 95峰值带宽，单位是Mbps。
   */
  P95PeakBandwidth: number

  /**
   * 总流量，单位是MB。
   */
  SumFlux: number

  /**
   * 明细数据信息。
   */
  DataInfoList: Array<BillDataInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateScreenshotTask返回参数结构体
 */
export interface CreateScreenshotTaskResponse {
  /**
   * 任务ID，全局唯一标识截图任务。返回TaskId字段说明截图任务创建成功。
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveCallbackRule返回参数结构体
 */
export interface DeleteLiveCallbackRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeDelayLiveStream请求参数结构体
 */
export interface ResumeDelayLiveStreamRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
   */
  AppName: string

  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 流名称。
   */
  StreamName: string
}

/**
 * DescribeLiveWatermarkRules返回参数结构体
 */
export interface DescribeLiveWatermarkRulesResponse {
  /**
   * 水印规则列表。
   */
  Rules: Array<RuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveCallbackTemplate返回参数结构体
 */
export interface DescribeLiveCallbackTemplateResponse {
  /**
   * 回调模板信息。
   */
  Template: CallBackTemplateInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLivePullStreamTask请求参数结构体
 */
export interface CreateLivePullStreamTaskRequest {
  /**
      * 拉流源的类型：
PullLivePushLive -直播，
PullVodPushLive -点播。
      */
  SourceType: string

  /**
      * 拉流源 url 列表。
SourceType 为直播（PullLivePushLive）只可以填1个，
SourceType 为点播（PullVodPushLive）可以填多个，上限30个。
当前支持的文件格式：flv，mp4，hls。
当前支持的拉流协议：http，https，rtmp。
注意：
1. 建议优先使用 flv 文件，对于 mp4 未交织好的文件轮播推流易产生卡顿，可通过点播转码进行重新交织后再轮播。
2. 拒绝内网域名等攻击性拉流地址，如有使用，则做账号封禁处理。
3. 源文件请保持时间戳正常交织递增，避免因源文件异常影响推流及播放。
4. 视频编码格式仅支持: H264, H265。
5. 音频编码格式仅支持: AAC。
6. 点播源请使用小文件，尽量时长保持在1小时内，较大文件打开和续播耗时较久，耗时超过15秒会有无法正常转推风险。
      */
  SourceUrls: Array<string>

  /**
      * 推流域名。
将拉取过来的流推到该域名。
注意：请使用已在云直播配置的推流域名。
      */
  DomainName: string

  /**
      * 推流路径。
将拉取过来的流推到该路径。
      */
  AppName: string

  /**
      * 推流名称。
将拉取过来的流推到该流名称。
      */
  StreamName: string

  /**
      * 开始时间。
使用 UTC 格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  StartTime: string

  /**
      * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
使用 UTC 格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  EndTime: string

  /**
   * 任务操作人备注。
   */
  Operator: string

  /**
      * 推流参数。
推流时携带自定义参数。
示例：
bak=1&test=2 。
      */
  PushArgs?: string

  /**
      * 选择需要回调的事件（不填则回调全部）：
TaskStart：任务启动回调，
TaskExit：任务停止回调，
VodSourceFileStart：从点播源文件开始拉流回调，
VodSourceFileFinish：从点播源文件拉流结束回调，
ResetTaskConfig：任务更新回调。

TaskAlarm: 用于告警事件通知，AlarmType 示例:
PullFileUnstable - 文件拉取不稳定，
PushStreamUnstable - 推流不稳定，
PullFileFailed - 文件拉取出错，
PushStreamFailed - 推流出现失败，
FileEndEarly - 文件提前结束。
      */
  CallbackEvents?: Array<string>

  /**
      * 点播拉流转推循环次数。默认：-1。
-1：无限循环，直到任务结束。
0：不循环。
>0：具体循环次数。次数和时间以先结束的为准。
注意：该配置仅对拉流源为点播时生效。
      */
  VodLoopTimes?: string

  /**
      * 点播更新SourceUrls后的播放方式：
ImmediateNewSource：立即播放新的拉流源内容；
ContinueBreakPoint：播放完当前正在播放的点播 url 后再使用新的拉流源播放。（旧拉流源未播放的点播 url 不会再播放）

注意：该配置生效仅对变更前拉流源为点播时生效。
      */
  VodRefreshType?: string

  /**
      * 自定义回调地址。
拉流转推任务相关事件会回调到该地址。
      */
  CallbackUrl?: string

  /**
      * 其他参数。
示例: ignore_region  用于忽略传入地域, 内部按负载分配。
      */
  ExtraCmd?: string

  /**
   * 任务描述，限制 512 字节。
   */
  Comment?: string

  /**
      * 备源的类型：
PullLivePushLive -直播，
PullVodPushLive -点播。
注意：
1. 仅当主源类型为直播源时，备源才会生效。
2. 主直播源拉流中断时，自动使用备源进行拉流。
3. 如果备源为点播文件时，则每次轮播完点播文件就检查主源是否恢复，如果主源恢复则自动切回到主源，否则继续拉备源。
      */
  BackupSourceType?: string

  /**
      * 备源 URL。
只允许填一个备源 URL
      */
  BackupSourceUrl?: string
}

/**
 * DeleteLiveSnapshotTemplate请求参数结构体
 */
export interface DeleteLiveSnapshotTemplateRequest {
  /**
      * 模板 ID。
1. 在创建截图模板接口 [CreateLiveSnapshotTemplate](/document/product/267/32624) 调用的返回值中获取。
2. 可以从接口 [DescribeLiveSnapshotTemplates](/document/product/267/32619) 中查询已创建的截图模板列表。
      */
  TemplateId: number
}

/**
 * DescribeGroupProIspPlayInfoList返回参数结构体
 */
export interface DescribeGroupProIspPlayInfoListResponse {
  /**
   * 数据内容。
   */
  DataInfoList: Array<GroupProIspDataInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 推流鉴权key信息。
 */
export interface PushAuthKeyInfo {
  /**
   * 域名。
   */
  DomainName: string

  /**
   * 是否启用，0：关闭，1：启用。
   */
  Enable: number

  /**
   * 主鉴权 Key。
   */
  MasterAuthKey: string

  /**
   * 备鉴权 Key。
   */
  BackupAuthKey: string

  /**
   * 有效时间，单位：秒。
   */
  AuthDelta: number
}

/**
 * DescribeUploadStreamNums返回参数结构体
 */
export interface DescribeUploadStreamNumsResponse {
  /**
   * 明细数据信息
   */
  DataInfoList: Array<ConcurrentRecordStreamNum>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 各状态码的总次数，支持大多数的 HTTP 协议返回码。
 */
export interface PlayCodeTotalInfo {
  /**
      * HTTP code，可选值包括:
400，403，404，500，502，503，504。
      */
  Code: string

  /**
   * 总次数。
   */
  Num: number
}

/**
 * DeleteLiveRecordTemplate请求参数结构体
 */
export interface DeleteLiveRecordTemplateRequest {
  /**
   * DescribeRecordTemplates接口获取到的模板 ID。
   */
  TemplateId: number
}

/**
 * DeleteLiveCallbackTemplate返回参数结构体
 */
export interface DeleteLiveCallbackTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateScreenshotTask请求参数结构体
 */
export interface CreateScreenshotTaskRequest {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径。
   */
  AppName: string

  /**
   * 截图任务结束时间，Unix时间戳。设置时间必须大于StartTime及当前时间，且EndTime - StartTime不能超过24小时。
   */
  EndTime: number

  /**
   * 截图模板ID，CreateLiveSnapshotTemplate 返回值。如果传入错误ID，则不拉起截图。
   */
  TemplateId: number

  /**
   * 截图任务开始时间，Unix时间戳。如果不填表示立即启动截图。StartTime不能超过当前时间+6天。
   */
  StartTime?: number

  /**
      * 推流类型，默认0。取值：
0-直播推流。
1-合成流，即 A+B=C 类型混流。
      */
  StreamType?: number

  /**
   * 扩展字段，暂无定义。默认为空。
   */
  Extension?: string
}

/**
 * 某条流的推流质量详情数据。
 */
export interface PushQualityData {
  /**
   * 数据时间，格式: %Y-%m-%d %H:%M:%S.%ms，精确到毫秒级。
   */
  Time: string

  /**
   * 推流域名。
   */
  PushDomain: string

  /**
   * 推流路径。
   */
  AppName: string

  /**
   * 推流客户端 IP。
   */
  ClientIp: string

  /**
   * 开始推流时间，格式: %Y-%m-%d %H:%M:%S.%ms，精确到毫秒级。
   */
  BeginPushTime: string

  /**
   * 分辨率信息。
   */
  Resolution: string

  /**
   * 视频编码格式。
   */
  VCodec: string

  /**
   * 音频编码格式。
   */
  ACodec: string

  /**
   * 推流序列号，用来唯一的标志一次推流。
   */
  Sequence: string

  /**
   * 视频帧率。
   */
  VideoFps: number

  /**
   * 视频码率，单位: bps。
   */
  VideoRate: number

  /**
   * 音频帧率。
   */
  AudioFps: number

  /**
   * 音频码率，单位: bps。
   */
  AudioRate: number

  /**
   * 本地流逝时间，单位: ms，音视频流逝时间与本地流逝时间的差距越大表示推流质量越差，上行卡顿越严重。
   */
  LocalTs: number

  /**
   * 视频流逝时间，单位: ms。
   */
  VideoTs: number

  /**
   * 音频流逝时间，单位: ms。
   */
  AudioTs: number

  /**
   * metadata 中的视频码率，单位: kbps。
   */
  MetaVideoRate: number

  /**
   * metadata 中的音频码率，单位: kbps。
   */
  MetaAudioRate: number

  /**
   * metadata 中的帧率。
   */
  MateFps: number

  /**
   * 推流参数
   */
  StreamParam: string

  /**
   * 带宽，单位Mbps。
   */
  Bandwidth: number

  /**
   * 流量，单位MB。
   */
  Flux: number
}

/**
 * UnBindLiveDomainCert返回参数结构体
 */
export interface UnBindLiveDomainCertResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePlayAuthKey请求参数结构体
 */
export interface ModifyLivePlayAuthKeyRequest {
  /**
   * 播放域名。
   */
  DomainName: string

  /**
      * 是否启用，0：关闭，1：启用。
不传表示不修改当前值。
      */
  Enable?: number

  /**
      * 鉴权key。
不传表示不修改当前值。
      */
  AuthKey?: string

  /**
      * 有效时间，单位：秒。
不传表示不修改当前值。
      */
  AuthDelta?: number

  /**
      * 鉴权备用key。
不传表示不修改当前值。
      */
  AuthBackKey?: string
}

/**
 * DescribeLiveDelayInfoList请求参数结构体
 */
export type DescribeLiveDelayInfoListRequest = null

/**
 * 域名证书信息
 */
export interface DomainCertInfo {
  /**
   * 证书Id。
   */
  CertId: number

  /**
   * 证书名称。
   */
  CertName: string

  /**
   * 描述信息。
   */
  Description: string

  /**
   * 创建时间，UTC格式。
   */
  CreateTime: string

  /**
   * 证书内容。
   */
  HttpsCrt: string

  /**
      * 证书类型。
0：用户添加证书，
1：腾讯云托管证书。
      */
  CertType: number

  /**
   * 证书过期时间，UTC格式。
   */
  CertExpireTime: string

  /**
   * 使用此证书的域名名称。
   */
  DomainName: string

  /**
   * 证书状态。
   */
  Status: number

  /**
      * 证书本身标识的域名列表。
比如: ["*.x.com"]
注意：此字段可能返回 null，表示取不到有效值。
      */
  CertDomains: Array<string>

  /**
      * 腾讯云ssl的证书Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  CloudCertId: string
}

/**
 * 录制模板信息
 */
export interface RecordTemplateInfo {
  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
   * 模板名称。
   */
  TemplateName: string

  /**
   * 描述信息。
   */
  Description: string

  /**
   * FLV 录制参数。
   */
  FlvParam: RecordParam

  /**
   * HLS 录制参数。
   */
  HlsParam: RecordParam

  /**
   * MP4 录制参数。
   */
  Mp4Param: RecordParam

  /**
   * AAC 录制参数。
   */
  AacParam: RecordParam

  /**
      * 0：普通直播，
1：慢直播。
      */
  IsDelayLive: number

  /**
   * HLS 录制定制参数
   */
  HlsSpecialParam: HlsSpecialParam

  /**
   * MP3 录制参数。
   */
  Mp3Param: RecordParam

  /**
      * 是否去除水印。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemoveWatermark: boolean
}

/**
 * DeleteLiveTranscodeRule返回参数结构体
 */
export interface DeleteLiveTranscodeRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 并发录制路数
 */
export interface ConcurrentRecordStreamNum {
  /**
   * 时间点。
   */
  Time: string

  /**
   * 路数。
   */
  Num: number
}

/**
 * DescribeStreamPlayInfoList返回参数结构体
 */
export interface DescribeStreamPlayInfoListResponse {
  /**
   * 统计信息列表，时间粒度是1分钟。
   */
  DataInfoList: Array<DayStreamPlayInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenShotSheetNumList返回参数结构体
 */
export interface DescribeScreenShotSheetNumListResponse {
  /**
   * 数据信息列表。
   */
  DataInfoList: Array<TimeValue>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveCert请求参数结构体
 */
export interface DescribeLiveCertRequest {
  /**
   * DescribeLiveCerts接口获取到的证书Id。
   */
  CertId: number
}

/**
 * CreateLivePullStreamTask返回参数结构体
 */
export interface CreateLivePullStreamTaskResponse {
  /**
   * 任务 Id 。
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePushAuthKey请求参数结构体
 */
export interface ModifyLivePushAuthKeyRequest {
  /**
   * 推流域名。
   */
  DomainName: string

  /**
      * 是否启用，0：关闭，1：启用。
不传表示不修改当前值。
      */
  Enable?: number

  /**
      * 主鉴权key。
不传表示不修改当前值。
      */
  MasterAuthKey?: string

  /**
      * 备鉴权key。
不传表示不修改当前值。
      */
  BackupAuthKey?: string

  /**
   * 有效时间，单位：秒。
   */
  AuthDelta?: number
}

/**
 * DeleteLiveCallbackTemplate请求参数结构体
 */
export interface DeleteLiveCallbackTemplateRequest {
  /**
      * 模板 ID。
1. 在创建回调模板接口 [CreateLiveCallbackTemplate](/document/product/267/32637) 调用的返回值中获取模板 ID。
2. 可以从接口 [DescribeLiveCallbackTemplates](/document/product/267/32632) 查询已经创建的过的模板列表。
      */
  TemplateId: number
}

/**
 * DescribeLiveStreamState请求参数结构体
 */
export interface DescribeLiveStreamStateRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string

  /**
   * 您的推流域名。
   */
  DomainName: string

  /**
   * 流名称。
   */
  StreamName: string
}

/**
 * DescribeLivePlayAuthKey返回参数结构体
 */
export interface DescribeLivePlayAuthKeyResponse {
  /**
   * 播放鉴权key信息。
   */
  PlayAuthKeyInfo?: PlayAuthKeyInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveCallbackTemplates请求参数结构体
 */
export type DescribeLiveCallbackTemplatesRequest = null

/**
 * 直播域名信息
 */
export interface DomainInfo {
  /**
   * 直播域名。
   */
  Name: string

  /**
      * 域名类型:
0: 推流。
1: 播放。
      */
  Type: number

  /**
      * 域名状态:
0: 停用。
1: 启用。
      */
  Status: number

  /**
   * 添加时间。
   */
  CreateTime: string

  /**
      * 是否有 CName 到固定规则域名:
0: 否。
1: 是。
      */
  BCName: number

  /**
   * cname 对应的域名。
   */
  TargetDomain: string

  /**
      * 播放区域，只在 Type=1 时该参数有意义。
1: 国内。
2: 全球。
3: 海外。
      */
  PlayType: number

  /**
      * 是否慢直播:
0: 普通直播。
1: 慢直播。
      */
  IsDelayLive: number

  /**
   * 当前客户使用的 cname 信息。
   */
  CurrentCName: string

  /**
   * 失效参数，可忽略。
   */
  RentTag: number

  /**
   * 失效参数，可忽略。
   */
  RentExpireTime: string

  /**
      * 0: 标准直播。
1: 小程序直播。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsMiniProgramLive: number
}

/**
 * DescribeLiveTranscodeRules请求参数结构体
 */
export interface DescribeLiveTranscodeRulesRequest {
  /**
   * 要筛选的模板ID数组。
   */
  TemplateIds?: Array<number>

  /**
   * 要筛选的域名数组。
   */
  DomainNames?: Array<string>
}

/**
 * DeleteLiveSnapshotRule请求参数结构体
 */
export interface DeleteLiveSnapshotRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。
   */
  AppName?: string

  /**
   * 流名称。
   */
  StreamName?: string
}

/**
 * DescribePlayErrorCodeDetailInfoList请求参数结构体
 */
export interface DescribePlayErrorCodeDetailInfoListRequest {
  /**
      * 起始时间，北京时间，
格式：yyyy-mm-dd HH:MM:SS。
      */
  StartTime: string

  /**
      * 结束时间，北京时间，
格式：yyyy-mm-dd HH:MM:SS。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
      */
  EndTime: string

  /**
      * 查询粒度：
1-1分钟粒度。
      */
  Granularity: number

  /**
   * 是，可选值包括”4xx”,”5xx”，支持”4xx,5xx”等这种混合模式。
   */
  StatType: string

  /**
   * 播放域名列表。
   */
  PlayDomains?: Array<string>

  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string
}

/**
 * DeleteLivePullStreamTask请求参数结构体
 */
export interface DeleteLivePullStreamTaskRequest {
  /**
   * 任务 Id。
   */
  TaskId: string

  /**
   * 操作人姓名。
   */
  Operator: string
}

/**
 * 通用混流输出参数。
 */
export interface CommonMixOutputParams {
  /**
   * 输出流名称。
   */
  OutputStreamName: string

  /**
      * 输出流类型，取值范围[0,1]。
不填默认为0。
当输出流为输入流 list 中的一条时，填写0。
当期望生成的混流结果成为一条新流时，该值填为1。
该值为1时，output_stream_id 不能出现在 input_stram_list 中，且直播后台中，不能存在相同 ID 的流。
      */
  OutputStreamType?: number

  /**
      * 输出流比特率。取值范围[1，50000]。
不填的情况下，系统会自动判断。
      */
  OutputStreamBitRate?: number

  /**
      * 输出流GOP大小。取值范围[1,10]。
不填的情况下，系统会自动判断。
      */
  OutputStreamGop?: number

  /**
      * 输出流帧率大小。取值范围[1,60]。
不填的情况下，系统会自动判断。
      */
  OutputStreamFrameRate?: number

  /**
      * 输出流音频比特率。取值范围[1,500]
不填的情况下，系统会自动判断。
      */
  OutputAudioBitRate?: number

  /**
      * 输出流音频采样率。取值范围[96000, 88200, 64000, 48000, 44100, 32000,24000, 22050, 16000, 12000, 11025, 8000]。
不填的情况下，系统会自动判断。
      */
  OutputAudioSampleRate?: number

  /**
      * 输出流音频声道数。取值范围[1,2]。
不填的情况下，系统会自动判断。
      */
  OutputAudioChannels?: number

  /**
   * 输出流中的sei信息。如果无特殊需要，不填。
   */
  MixSei?: string
}

/**
 * DescribePushBandwidthAndFluxList返回参数结构体
 */
export interface DescribePushBandwidthAndFluxListResponse {
  /**
   * 峰值带宽所在时间点，格式为 yyyy-mm-dd HH:MM:SS。
   */
  PeakBandwidthTime: string

  /**
   * 峰值带宽，单位是 Mbps。
   */
  PeakBandwidth: number

  /**
   * 95峰值带宽所在时间点，格式为 yyyy-mm-dd HH:MM:SS。
   */
  P95PeakBandwidthTime: string

  /**
   * 95峰值带宽，单位是 Mbps。
   */
  P95PeakBandwidth: number

  /**
   * 总流量，单位是 MB。
   */
  SumFlux: number

  /**
   * 明细数据信息。
   */
  DataInfoList: Array<BillDataInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUploadStreamNums请求参数结构体
 */
export interface DescribeUploadStreamNumsRequest {
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string

  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过31天。支持最近31天的数据查询
   */
  EndTime: string

  /**
   * 直播域名，若不填，表示总体数据。
   */
  Domains?: Array<string>

  /**
      * 数据粒度，支持如下粒度：
5：5分钟粒度，（跨度不支持超过1天），
1440：天粒度（跨度不支持超过一个月）。
默认值：5。
      */
  Granularity?: number
}

/**
 * DescribeLiveSnapshotRules返回参数结构体
 */
export interface DescribeLiveSnapshotRulesResponse {
  /**
   * 规则列表。
   */
  Rules: Array<RuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeDetailInfo返回参数结构体
 */
export interface DescribeLiveTranscodeDetailInfoResponse {
  /**
   * 统计数据列表。
   */
  DataInfoList: Array<TranscodeDetailInfo>

  /**
   * 页码。
   */
  PageNum: number

  /**
   * 每页个数。
   */
  PageSize: number

  /**
   * 总个数。
   */
  TotalNum: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveDomain请求参数结构体
 */
export interface DescribeLiveDomainRequest {
  /**
   * 域名。
   */
  DomainName: string
}

/**
 * DescribeLiveStreamPublishedList请求参数结构体
 */
export interface DescribeLiveStreamPublishedListRequest {
  /**
   * 您的推流域名。
   */
  DomainName: string

  /**
      * 结束时间。
UTC 格式，例如：2016-06-30T19:00:00Z。
不超过当前时间。
注意：EndTime和StartTime相差不可超过30天。
      */
  EndTime: string

  /**
      * 起始时间。 
UTC 格式，例如：2016-06-29T19:00:00Z。
最长支持查询60天内数据。
      */
  StartTime: string

  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。不支持模糊匹配。
   */
  AppName?: string

  /**
      * 取得第几页。
默认值：1。
      */
  PageNum?: number

  /**
      * 分页大小。
最大值：100。
取值范围：10~100 之前的任意整数。
默认值：10。
      */
  PageSize?: number

  /**
   * 流名称，支持模糊匹配。
   */
  StreamName?: string
}

/**
 * DeleteLiveTranscodeRule请求参数结构体
 */
export interface DeleteLiveTranscodeRuleRequest {
  /**
   * 播放域名。
   */
  DomainName: string

  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string

  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 模板ID。
   */
  TemplateId: number
}

/**
 * DescribePushBandwidthAndFluxList请求参数结构体
 */
export interface DescribePushBandwidthAndFluxListRequest {
  /**
   * 起始时间点，格式为 yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string

  /**
   * 结束时间点，格式为 yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过31天。
   */
  EndTime: string

  /**
   * 域名，可以填多个，若不填，表示总体数据。
   */
  PushDomains?: Array<string>

  /**
      * 可选值：
Mainland：查询中国大陆（境内）数据，
Oversea：则查询国际/港澳台（境外）数据，
不填则默认查询全球地区（境内+境外）的数据。
      */
  MainlandOrOversea?: string

  /**
      * 数据粒度，支持如下粒度：
5：5分钟粒度，（跨度不支持超过1天），
60：1小时粒度（跨度不支持超过一个月），
1440：天粒度（跨度不支持超过一个月）。
默认值：5。
      */
  Granularity?: number

  /**
      * 大区，映射表如下：
China Mainland 中国大陆
Asia Pacific I 亚太一区
Asia Pacific II 亚太二区
Asia Pacific III 亚太三区
Europe 欧洲
North America 北美
South America 南美
Middle East 中东
Africa 非洲。
      */
  RegionNames?: Array<string>
}

/**
 * CreateLiveRecordRule请求参数结构体
 */
export interface CreateLiveRecordRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName?: string

  /**
      * 流名称。
注：如果本参数设置为非空字符串，规则将只对此推流起作用。
      */
  StreamName?: string
}

/**
 * DescribeLiveSnapshotTemplates请求参数结构体
 */
export type DescribeLiveSnapshotTemplatesRequest = null

/**
 * AddLiveWatermark返回参数结构体
 */
export interface AddLiveWatermarkResponse {
  /**
   * 水印ID。
   */
  WatermarkId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamPushInfoList返回参数结构体
 */
export interface DescribeLiveStreamPushInfoListResponse {
  /**
   * 直播流的统计信息列表。
   */
  DataInfoList: Array<PushDataInfo>

  /**
   * 所有在线流的总数量。
   */
  TotalNum: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 当前数据所在页码。
   */
  PageNum: number

  /**
   * 每页的在线流的个数。
   */
  PageSize: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveDomainCert返回参数结构体
 */
export interface DescribeLiveDomainCertResponse {
  /**
   * 证书信息。
   */
  DomainCertInfo?: DomainCertInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveRecordTemplate请求参数结构体
 */
export interface DescribeLiveRecordTemplateRequest {
  /**
   * [DescribeLiveRecordTemplates](/document/product/267/32609)接口获取到的模板 ID。
   */
  TemplateId: number
}

/**
 * ModifyLiveDomainCert请求参数结构体
 */
export interface ModifyLiveDomainCertRequest {
  /**
   * 播放域名。
   */
  DomainName: string

  /**
   * 证书Id。
   */
  CertId?: number

  /**
   * 状态，0：关闭  1：打开。
   */
  Status?: number
}

/**
 * 查询当前正在推流的信息
 */
export interface StreamOnlineInfo {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 推流时间列表
   */
  PublishTimeList: Array<PublishTime>

  /**
   * 应用名称。
   */
  AppName: string

  /**
   * 推流域名。
   */
  DomainName: string
}

/**
 * CreateLiveWatermarkRule返回参数结构体
 */
export interface CreateLiveWatermarkRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveSnapshotTemplate返回参数结构体
 */
export interface ModifyLiveSnapshotTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteScreenshotTask请求参数结构体
 */
export interface DeleteScreenshotTaskRequest {
  /**
   * 任务ID，CreateScreenshotTask返回。删除TaskId指定的截图任务。
   */
  TaskId: string
}

/**
 * DescribeProIspPlaySumInfoList请求参数结构体
 */
export interface DescribeProIspPlaySumInfoListRequest {
  /**
      * 起始时间，北京时间，
格式：yyyy-mm-dd HH:MM:SS。
      */
  StartTime: string

  /**
      * 结束时间，北京时间，
格式：yyyy-mm-dd HH:MM:SS。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
      */
  EndTime: string

  /**
   * 统计的类型，可选值：”Province”(省份)，”Isp”(运营商)，“CountryOrArea”(国家或地区)。
   */
  StatType: string

  /**
   * 播放域名列表，不填则为全部。
   */
  PlayDomains?: Array<string>

  /**
   * 页号，范围是[1,1000]，默认值是1。
   */
  PageNum?: number

  /**
   * 每页个数，范围是[1,1000]，默认值是20。
   */
  PageSize?: number

  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string

  /**
   * 输出字段使用的语言，可选值：Chinese（默认值），English；目前国家，省份和运营商支持多语言。
   */
  OutLanguage?: string
}

/**
 * DescribeDeliverBandwidthList请求参数结构体
 */
export interface DescribeDeliverBandwidthListRequest {
  /**
   * 起始时间，格式为%Y-%m-%d %H:%M:%S。
   */
  StartTime: string

  /**
   * 结束时间，格式为%Y-%m-%d %H:%M:%S，支持最近三个月的数据查询，时间跨度最大是1个月。
   */
  EndTime: string
}

/**
 * DescribeScreenshotTask返回参数结构体
 */
export interface DescribeScreenshotTaskResponse {
  /**
   * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 Token。当该字段为空，说明已无更多数据。
   */
  ScrollToken: string

  /**
   * 截图任务列表。当该字段为空，说明已返回所有数据。
   */
  TaskList: Array<ScreenshotTask>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddLiveWatermark请求参数结构体
 */
export interface AddLiveWatermarkRequest {
  /**
      * 水印图片 URL。
URL中禁止包含的字符：
 ;(){}$>`#"\'|
      */
  PictureUrl: string

  /**
      * 水印名称。
最长16字节。
      */
  WatermarkName: string

  /**
   * 显示位置，X轴偏移，单位是百分比，默认 0。
   */
  XPosition?: number

  /**
   * 显示位置，Y轴偏移，单位是百分比，默认 0。
   */
  YPosition?: number

  /**
   * 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。
   */
  Width?: number

  /**
   * 水印高度，占直播原始画面高度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。
   */
  Height?: number
}

/**
 * ModifyLiveTranscodeTemplate返回参数结构体
 */
export interface ModifyLiveTranscodeTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 海外分区直播带宽出参国家带宽信息
 */
export interface BillCountryInfo {
  /**
   * 国家名称
   */
  Name: string

  /**
   * 带宽明细数据信息。
   */
  BandInfoList: Array<BillDataInfo>
}

/**
 * ModifyLiveRecordTemplate返回参数结构体
 */
export interface ModifyLiveRecordTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePlayDomain请求参数结构体
 */
export interface ModifyLivePlayDomainRequest {
  /**
   * 播放域名。
   */
  DomainName: string

  /**
   * 拉流域名类型。1-国内；2-全球；3-境外
   */
  PlayType: number
}

/**
 * DeleteLiveRecordTemplate返回参数结构体
 */
export interface DeleteLiveRecordTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveWatermark请求参数结构体
 */
export interface DescribeLiveWatermarkRequest {
  /**
   * DescribeLiveWatermarks接口返回的水印 ID。
   */
  WatermarkId: number
}

/**
 * 日志url信息。
 */
export interface LogInfo {
  /**
   * 日志名称。
   */
  LogName: string

  /**
   * 日志 URL。
   */
  LogUrl: string

  /**
   * 日志生成时间。
   */
  LogTime: string

  /**
   * 文件大小。
   */
  FileSize: number
}

/**
 * 通用混流布局参数。
 */
export interface CommonMixLayoutParams {
  /**
      * 输入图层。取值范围[1，16]。
1)背景流（即大主播画面或画布）的 image_layer 填1。
2)纯音频混流，该参数也需填。
注意：不同输入，该值不可重复
      */
  ImageLayer: number

  /**
      * 输入类型。取值范围[0，5]。
不填默认为0。
0表示输入流为音视频。
2表示输入流为图片。
3表示输入流为画布。 
4表示输入流为音频。
5表示输入流为纯视频。
      */
  InputType?: number

  /**
      * 输入画面在输出时的高度。取值范围：
像素：[0，2000]
百分比：[0.01，0.99]
不填默认为输入流的高度。
使用百分比时，期望输出为（百分比 * 背景高）。
      */
  ImageHeight?: number

  /**
      * 输入画面在输出时的宽度。取值范围：
像素：[0，2000]
百分比：[0.01，0.99]
不填默认为输入流的宽度。
使用百分比时，期望输出为（百分比 * 背景宽）。
      */
  ImageWidth?: number

  /**
      * 输入在输出画面的X偏移。取值范围：
像素：[0，2000]
百分比：[0.01，0.99]
不填默认为0。
相对于大主播背景画面左上角的横向偏移。 
使用百分比时，期望输出为（百分比 * 背景宽）。
      */
  LocationX?: number

  /**
      * 输入在输出画面的Y偏移。取值范围：
像素：[0，2000]
百分比：[0.01，0.99]
不填默认为0。
相对于大主播背景画面左上角的纵向偏移。 
使用百分比时，期望输出为（百分比 * 背景宽）
      */
  LocationY?: number

  /**
      * 当InputType为3(画布)时，该值表示画布的颜色。
常用的颜色有：
红色：0xcc0033。
黄色：0xcc9900。
绿色：0xcccc33。
蓝色：0x99CCFF。
黑色：0x000000。
白色：0xFFFFFF。
灰色：0x999999。
      */
  Color?: string

  /**
   * 当InputType为2(图片)时，该值是水印ID。
   */
  WatermarkId?: number
}

/**
 * DescribeLiveDomainCert请求参数结构体
 */
export interface DescribeLiveDomainCertRequest {
  /**
   * 播放域名。
   */
  DomainName: string
}

/**
 * DescribeLiveStreamEventList请求参数结构体
 */
export interface DescribeLiveStreamEventListRequest {
  /**
      * 起始时间。 
UTC 格式，例如：2018-12-29T19:00:00Z。
支持查询60天内的历史记录。
      */
  StartTime: string

  /**
      * 结束时间。
UTC 格式，例如：2018-12-29T20:00:00Z。
不超过当前时间，且和起始时间相差不得超过30天。
      */
  EndTime: string

  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName?: string

  /**
   * 推流域名。
   */
  DomainName?: string

  /**
      * 流名称，不支持通配符（*）查询，默认模糊匹配。
可使用IsStrict字段改为精确查询。
      */
  StreamName?: string

  /**
      * 取得第几页。
默认值：1。
注： 目前只支持10000条内的查询。
      */
  PageNum?: number

  /**
      * 分页大小。
最大值：100。
取值范围：1~100 之间的任意整数。
默认值：10。
注： 目前只支持10000条内的查询。
      */
  PageSize?: number

  /**
      * 是否过滤，默认不过滤。
0：不进行任何过滤。
1：过滤掉开播失败的，只返回开播成功的。
      */
  IsFilter?: number

  /**
      * 是否精确查询，默认模糊匹配。
0：模糊匹配。
1：精确查询。
注：使用StreamName时该参数生效。
      */
  IsStrict?: number

  /**
      * 是否按结束时间正序显示，默认逆序。
0：逆序。
1：正序。
      */
  IsAsc?: number
}

/**
 * DescribePullStreamConfigs请求参数结构体
 */
export interface DescribePullStreamConfigsRequest {
  /**
      * 配置 ID。
获取途径：从 CreatePullStreamConfig 接口返回值获取。
      */
  ConfigId?: string
}

/**
 * 回调模板信息。
 */
export interface CallBackTemplateInfo {
  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
   * 模板名称。
   */
  TemplateName: string

  /**
   * 描述信息。
   */
  Description: string

  /**
   * 开播回调 URL。
   */
  StreamBeginNotifyUrl: string

  /**
   * 混流回调 URL。(参数已弃用)。
   */
  StreamMixNotifyUrl: string

  /**
   * 断流回调 URL。
   */
  StreamEndNotifyUrl: string

  /**
   * 录制回调 URL。
   */
  RecordNotifyUrl: string

  /**
   * 截图回调 URL。
   */
  SnapshotNotifyUrl: string

  /**
   * 鉴黄回调 URL。
   */
  PornCensorshipNotifyUrl: string

  /**
   * 回调的鉴权 key。
   */
  CallbackKey: string
}

/**
 * DescribePlayErrorCodeSumInfoList返回参数结构体
 */
export interface DescribePlayErrorCodeSumInfoListResponse {
  /**
   * 分省份分运营商错误码为2或3或4或5开头的状态码数据信息。
   */
  ProIspInfoList: Array<ProIspPlayCodeDataInfo>

  /**
   * 所有状态码的加和的次数。
   */
  TotalCodeAll: number

  /**
   * 状态码为4开头的总次数。
   */
  TotalCode4xx: number

  /**
   * 状态码为5开头的总次数。
   */
  TotalCode5xx: number

  /**
   * 各状态码的总次数。
   */
  TotalCodeList: Array<PlayCodeTotalInfo>

  /**
   * 页号。
   */
  PageNum: number

  /**
   * 每页大小。
   */
  PageSize: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 总记录数。
   */
  TotalNum: number

  /**
   * 状态码为2开头的总次数。
   */
  TotalCode2xx: number

  /**
   * 状态码为3开头的总次数。
   */
  TotalCode3xx: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnBindLiveDomainCert请求参数结构体
 */
export interface UnBindLiveDomainCertRequest {
  /**
   * 播放域名。
   */
  DomainName: string

  /**
      * 枚举值：
gray: 解绑灰度规则
formal(默认): 解绑正式规则

不传则为formal
      */
  Type?: string
}

/**
 * DeleteLiveRecord返回参数结构体
 */
export interface DeleteLiveRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenShotSheetNumList请求参数结构体
 */
export interface DescribeScreenShotSheetNumListRequest {
  /**
   * utc起始时间，格式为yyyy-mm-ddTHH:MM:SSZ
   */
  StartTime: string

  /**
   * utc结束时间，格式为yyyy-mm-ddTHH:MM:SSZ，支持查询最近1年数据。
   */
  EndTime: string

  /**
   * 地域信息，可选值包括Mainland，Oversea，前者是查询中国大陆范围内的数据，后者是除中国大陆范围之外的数据，若不传该参数，则查询所有地区的数据。
   */
  Zone?: string

  /**
   * 推流域名（支持查询2019年11 月1日之后的域名维度数据）。
   */
  PushDomains?: Array<string>

  /**
   * 数据维度，数据延迟1个半小时，可选值包括：1、Minute（5分钟粒度，最大支持查询时间范围是31天），2、Day（天粒度，默认值，按照北京时间做跨天处理，最大支持查询时间范围是186天当天）。
   */
  Granularity?: string
}

/**
 * ForbidLiveStream请求参数结构体
 */
export interface ForbidLiveStreamRequest {
  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string

  /**
   * 您的推流域名。
   */
  DomainName: string

  /**
   * 流名称。
   */
  StreamName: string

  /**
      * 恢复流的时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：
1. 默认禁播7天，且最长支持禁播90天。
2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  ResumeTime?: string

  /**
      * 禁推原因。
注明：请务必填写禁推原因，防止误操作。
长度限制：2048字节。
      */
  Reason?: string
}

/**
 * DescribeLiveDomains返回参数结构体
 */
export interface DescribeLiveDomainsResponse {
  /**
   * 总记录数。
   */
  AllCount: number

  /**
   * 域名详细信息列表。
   */
  DomainList: Array<DomainInfo>

  /**
      * 可继续添加域名数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateLimitCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 某个时间点的指标的数值是多少。
 */
export interface TimeValue {
  /**
   * UTC 时间，时间格式：yyyy-mm-ddTHH:MM:SSZ。
   */
  Time: string

  /**
   * 数值。
   */
  Num: number
}

/**
 * ModifyLivePullStreamTask请求参数结构体
 */
export interface ModifyLivePullStreamTaskRequest {
  /**
   * 任务Id。
   */
  TaskId: string

  /**
   * 操作人姓名。
   */
  Operator: string

  /**
      * 拉流源url列表。
SourceType为直播（PullLivePushLive）只可以填1个，
SourceType为点播（PullVodPushLive）可以填多个，上限30个。
      */
  SourceUrls?: Array<string>

  /**
      * 开始时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  StartTime?: string

  /**
      * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  EndTime?: string

  /**
      * 点播拉流转推循环次数。
-1：无限循环，直到任务结束。
0：不循环。
>0：具体循环次数。次数和时间以先结束的为准。
注意：拉流源为点播，该配置生效。
      */
  VodLoopTimes?: number

  /**
      * 点播更新SourceUrls后的播放方式：
ImmediateNewSource：立即从更新的拉流源开始播放；
ContinueBreakPoint：从上次断流url源的断点处继续，结束后再使用新的拉流源。
注意：拉流源为点播，该配置生效。
      */
  VodRefreshType?: string

  /**
      * 任务状态：
enable - 启用，
pause - 暂停。
      */
  Status?: string

  /**
      * 选择需要回调的事件（不填则回调全部）：
TaskStart：任务启动回调，
TaskExit：任务停止回调，
VodSourceFileStart：从点播源文件开始拉流回调，
VodSourceFileFinish：从点播源文件拉流结束回调，
ResetTaskConfig：任务更新回调。
      */
  CallbackEvents?: Array<string>

  /**
      * 自定义回调地址。
相关事件会回调到该地址。
      */
  CallbackUrl?: string

  /**
      * 指定播放文件索引。
注意： 从1开始，不大于SourceUrls中文件个数。
      */
  FileIndex?: number

  /**
      * 指定播放文件偏移。
注意：
1. 单位：秒，配合FileIndex使用。
      */
  OffsetTime?: number

  /**
   * 任务备注。
   */
  Comment?: string

  /**
      * 备源的类型：
PullLivePushLive -直播，
PullVodPushLive -点播。
注意：
1. 仅当主源类型为直播源时，备源才会生效。
2. 主直播源拉流中断时，自动使用备源进行拉流。
3. 如果备源为点播文件时，则每次轮播完点播文件就检查主源是否恢复，如果主源恢复则自动切回到主源，否则继续拉备源。
      */
  BackupSourceType?: string

  /**
      * 备源 URL。
只允许填一个备源 URL
      */
  BackupSourceUrl?: string
}

/**
 * 拉流配置。
 */
export interface PullStreamConfig {
  /**
   * 拉流配置 ID。
   */
  ConfigId: string

  /**
   * 源 URL。
   */
  FromUrl: string

  /**
   * 目的 URL。
   */
  ToUrl: string

  /**
   * 区域名。
   */
  AreaName: string

  /**
   * 运营商名。
   */
  IspName: string

  /**
      * 开始时间。
UTC格式时间，例如: 2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  StartTime: string

  /**
      * 结束时间。

UTC格式时间，例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  EndTime: string

  /**
      * 状态:
0: 无效。
1: 初始状态。
2: 正在运行。
3: 拉起失败。
4: 暂停。
      */
  Status: string
}

/**
 * CreateLiveRecord返回参数结构体
 */
export interface CreateLiveRecordResponse {
  /**
   * 任务 ID，全局唯一标识录制任务。
   */
  TaskId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则信息。
 */
export interface RuleInfo {
  /**
   * 规则创建时间。
   */
  CreateTime: string

  /**
   * 规则更新时间。
   */
  UpdateTime: string

  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径。
   */
  AppName: string

  /**
   * 流名称。
   */
  StreamName: string
}

/**
 * UpdateLiveWatermark返回参数结构体
 */
export interface UpdateLiveWatermarkResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordTask请求参数结构体
 */
export interface DescribeRecordTaskRequest {
  /**
   * 查询任务开始时间，Unix 时间戳。设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。
   */
  StartTime: number

  /**
   * 查询任务结束时间，Unix 时间戳。EndTime 必须大于 StartTime，设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。（注意：任务开始结束时间必须在查询时间范围内）。
   */
  EndTime: number

  /**
   * 流名称。
   */
  StreamName?: string

  /**
   * 推流域名。
   */
  DomainName?: string

  /**
   * 推流路径。
   */
  AppName?: string

  /**
   * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
   */
  ScrollToken?: string
}

/**
 * 直播包信息。
 */
export interface LivePackageInfo {
  /**
   * 包 ID。
   */
  Id: string

  /**
      * 总量。
注意：当为流量包时单位为字节。
当为转码包时单位为分钟。
      */
  Total: number

  /**
      * 使用量。
注意：当为流量包时单位为字节。
当为转码包时单位为分钟。
当为连麦包时单位为小时。
      */
  Used: number

  /**
      * 剩余量。
注意：当为流量包时单位为字节。
当为转码包时单位为分钟。
当为连麦包时单位为小时。
      */
  Left: number

  /**
   * 购买时间。
   */
  BuyTime: string

  /**
   * 过期时间。
   */
  ExpireTime: string

  /**
      * 包类型，可选值:
0: 流量包。
1: 普通转码包。
2: 极速高清包。
3: 连麦包。
      */
  Type: number

  /**
      * 包状态，可选值:
0: 未使用。
1: 使用中。
2: 已过期。
3: 已冻结。
4: 已耗尽。
5: 已退款
      */
  Status: number
}

/**
 * CreateLiveTranscodeTemplate返回参数结构体
 */
export interface CreateLiveTranscodeTemplateResponse {
  /**
   * 模板Id。
   */
  TemplateId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 海外分区直播带宽出参，分区信息
 */
export interface BillAreaInfo {
  /**
   * 大区名称
   */
  Name: string

  /**
   * 国家明细数据
   */
  Countrys: Array<BillCountryInfo>
}

/**
 * 流维度的播放信息。
 */
export interface PlayDataInfoByStream {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 总流量，单位: MB。
   */
  TotalFlux: number
}

/**
 * DescribeVisitTopSumInfoList请求参数结构体
 */
export interface DescribeVisitTopSumInfoListRequest {
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string

  /**
      * 结束时间点，格式为yyyy-mm-dd HH:MM:SS
时间跨度在(0,4小时]，支持最近1天数据查询。
      */
  EndTime: string

  /**
   * 峰值指标，可选值包括”Domain”，”StreamId”。
   */
  TopIndex: string

  /**
   * 播放域名，默认为不填，表示求总体数据。
   */
  PlayDomains?: Array<string>

  /**
      * 页号，
范围是[1,1000]，
默认值是1。
      */
  PageNum?: number

  /**
      * 每页个数，范围是[1,1000]，
默认值是20。
      */
  PageSize?: number

  /**
   * 排序指标，可选值包括” AvgFluxPerSecond”，”TotalRequest”（默认）,“TotalFlux”。
   */
  OrderParam?: string
}

/**
 * 流播放信息
 */
export interface DayStreamPlayInfo {
  /**
   * 数据时间点，格式：yyyy-mm-dd HH:MM:SS。
   */
  Time: string

  /**
   * 带宽（单位Mbps）。
   */
  Bandwidth: number

  /**
   * 流量 （单位MB）。
   */
  Flux: number

  /**
   * 请求数。
   */
  Request: number

  /**
   * 在线人数。
   */
  Online: number
}

/**
 * ModifyPullStreamStatus返回参数结构体
 */
export interface ModifyPullStreamStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePlayDomain返回参数结构体
 */
export interface ModifyLivePlayDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelCommonMixStream返回参数结构体
 */
export interface CancelCommonMixStreamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConcurrentRecordStreamNum返回参数结构体
 */
export interface DescribeConcurrentRecordStreamNumResponse {
  /**
   * 统计信息列表。
   */
  DataInfoList: Array<ConcurrentRecordStreamNum>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录制任务
 */
export interface RecordTask {
  /**
   * 录制任务ID。
   */
  TaskId: string

  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径。
   */
  AppName: string

  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 任务开始时间，Unix时间戳。
   */
  StartTime: number

  /**
   * 任务结束时间，Unix时间戳。
   */
  EndTime: number

  /**
   * 录制模板ID。
   */
  TemplateId: number

  /**
   * 调用 StopRecordTask 停止任务时间，Unix时间戳。值为0表示未曾调用接口停止任务。
   */
  Stopped: number
}

/**
 * DescribeLiveCerts返回参数结构体
 */
export interface DescribeLiveCertsResponse {
  /**
   * 证书信息列表。
   */
  CertInfoSet?: Array<CertInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用混流输入参数。
 */
export interface CommonMixInputParam {
  /**
      * 输入流名称。80字节以内，仅含字母、数字以及下划线的字符串。
当LayoutParams.InputType=0(音视频)/4(纯音频)/5(纯视频)时，该值为需要混流的流名称。
当LayoutParams.InputType=2(图片)/3(画布)时，该值仅用作标识输入，可用类似Canvas1、Pictrue1的名称。
      */
  InputStreamName: string

  /**
   * 输入流布局参数。
   */
  LayoutParams: CommonMixLayoutParams

  /**
   * 输入流裁剪参数。
   */
  CropParams?: CommonMixCropParams
}

/**
 * DescribeProvinceIspPlayInfoList返回参数结构体
 */
export interface DescribeProvinceIspPlayInfoListResponse {
  /**
   * 播放信息列表。
   */
  DataInfoList: Array<PlayStatInfo>

  /**
   * 统计的类型，和输入参数保持一致。
   */
  StatType: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveRecordTemplates返回参数结构体
 */
export interface DescribeLiveRecordTemplatesResponse {
  /**
   * 录制模板信息列表。
   */
  Templates: Array<RecordTemplateInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScreenshotTask请求参数结构体
 */
export interface DescribeScreenshotTaskRequest {
  /**
   * 查询任务开始时间，Unix 时间戳。设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。
   */
  StartTime: number

  /**
   * 查询任务结束时间，Unix 时间戳。EndTime 必须大于 StartTime，设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。（注意：任务开始结束时间必须在查询时间范围内）。
   */
  EndTime: number

  /**
   * 流名称。
   */
  StreamName?: string

  /**
   * 推流域名。
   */
  DomainName?: string

  /**
   * 推流路径。
   */
  AppName?: string

  /**
   * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
   */
  ScrollToken?: string
}

/**
 * DescribeCallbackRecordsList请求参数结构体
 */
export interface DescribeCallbackRecordsListRequest {
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string

  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过1天。
   */
  EndTime: string

  /**
   * 流名称，精确匹配。
   */
  StreamName: string

  /**
   * 页码。
   */
  PageNum: number

  /**
   * 每页条数。
   */
  PageSize: number

  /**
      * 事件类型。
0: "断流",
1: "推流",
100: "录制"
200: "截图回调"。
      */
  EventType?: number

  /**
      * 回调结果。
0为成功，其他为失败。
      */
  ResultCode?: number
}

/**
 * DescribeLiveCallbackTemplates返回参数结构体
 */
export interface DescribeLiveCallbackTemplatesResponse {
  /**
   * 模板信息列表。
   */
  Templates: Array<CallBackTemplateInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePlayAuthKey返回参数结构体
 */
export interface ModifyLivePlayAuthKeyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveCallbackTemplate请求参数结构体
 */
export interface CreateLiveCallbackTemplateRequest {
  /**
      * 模板名称。
长度上限：255字节。
仅支持中文、英文、数字、_、-。
      */
  TemplateName: string

  /**
      * 描述信息。
长度上限：1024字节。
仅支持中文、英文、数字、_、-。
      */
  Description?: string

  /**
      * 开播回调 URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
      */
  StreamBeginNotifyUrl?: string

  /**
      * 断流回调 URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
      */
  StreamEndNotifyUrl?: string

  /**
      * 录制回调 URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
      */
  RecordNotifyUrl?: string

  /**
      * 截图回调 URL，
相关协议文档：[事件消息通知](/document/product/267/32744)。
      */
  SnapshotNotifyUrl?: string

  /**
      * 鉴黄回调 URL，
相关协议文档：[事件消息通知](/document/product/267/32741)。
      */
  PornCensorshipNotifyUrl?: string

  /**
      * 回调 Key，回调 URL 公用，回调签名详见事件消息通知文档。
[事件消息通知](/document/product/267/32744)。
      */
  CallbackKey?: string

  /**
   * 参数已弃用。
   */
  StreamMixNotifyUrl?: string
}

/**
 * 回调事件信息
 */
export interface CallbackEventInfo {
  /**
   * 事件时间
   */
  EventTime: string

  /**
   * 事件类型
   */
  EventType: number

  /**
   * 回调请求
   */
  Request: string

  /**
   * 回调响应
   */
  Response: string

  /**
   * 客户接口响应时间
   */
  ResponseTime: string

  /**
   * 回调结果
   */
  ResultCode: number

  /**
   * 流名称
   */
  StreamId: string
}

/**
 * DescribeTopClientIpSumInfoList返回参数结构体
 */
export interface DescribeTopClientIpSumInfoListResponse {
  /**
   * 页号，范围是[1,1000]，默认值是1。
   */
  PageNum: number

  /**
   * 每页个数，范围是[1,1000]，默认值是20。
   */
  PageSize: number

  /**
   * 排序指标，可选值包括”TotalRequest”，”FailedRequest”,“TotalFlux”。
   */
  OrderParam: string

  /**
   * 记录总数。
   */
  TotalNum: number

  /**
   * 记录总页数。
   */
  TotalPage: number

  /**
   * 数据内容。
   */
  DataInfoList: Array<ClientIpPlaySumInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DropLiveStream返回参数结构体
 */
export interface DropLiveStreamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamState返回参数结构体
 */
export interface DescribeLiveStreamStateResponse {
  /**
      * 流状态，
active：活跃，
inactive：非活跃，
forbid：禁播。
      */
  StreamState: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 截图任务
 */
export interface ScreenshotTask {
  /**
   * 截图任务ID。
   */
  TaskId: string

  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径。
   */
  AppName: string

  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 任务开始时间，Unix时间戳。
   */
  StartTime: number

  /**
   * 任务结束时间，Unix时间戳。
   */
  EndTime: number

  /**
   * 截图模板ID。
   */
  TemplateId: number

  /**
   * 调用 StopScreenshotTask 停止任务时间，Unix时间戳。值为0表示未曾调用接口停止任务。
   */
  Stopped: number
}

/**
 * DeletePullStreamConfig返回参数结构体
 */
export interface DeletePullStreamConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveWatermarkRule请求参数结构体
 */
export interface DeleteLiveWatermarkRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径。与推流和播放地址中的 AppName 保持一致，默认为live。
   */
  AppName: string

  /**
   * 流名称。
   */
  StreamName: string
}

/**
 * 推断流事件信息。
 */
export interface StreamEventInfo {
  /**
   * 应用名称。
   */
  AppName: string

  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 流名称。
   */
  StreamName: string

  /**
      * 推流开始时间。
UTC 格式时间，例如：2019-01-07T12:00:00Z。
      */
  StreamStartTime: string

  /**
      * 推流结束时间。
UTC 格式时间，例如：2019-01-07T15:00:00Z。
      */
  StreamEndTime: string

  /**
   * 停止原因。
   */
  StopReason: string

  /**
   * 推流持续时长，单位：秒。
   */
  Duration: number

  /**
   * 主播 IP。
   */
  ClientIp: string

  /**
   * 分辨率。
   */
  Resolution: string
}

/**
 * DeleteRecordTask返回参数结构体
 */
export interface DeleteRecordTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveWatermarks请求参数结构体
 */
export type DescribeLiveWatermarksRequest = null

/**
 * DescribeLivePackageInfo返回参数结构体
 */
export interface DescribeLivePackageInfoResponse {
  /**
      * 套餐包信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LivePackageInfoList: Array<LivePackageInfo>

  /**
      * 套餐包当前计费方式:
-1: 无计费方式或获取失败
0: 无计费方式
201: 月结带宽
202: 月结流量
203: 日结带宽
204: 日结流量
205: 日结时长
206: 月结时长
304: 日结流量。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageBillMode: number

  /**
      * 总页数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalPage: number

  /**
      * 数据总条数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalNum: number

  /**
      * 当前页数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageNum: number

  /**
      * 当前每页数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageSize: number

  /**
      * 当请求参数 PackageType = 0 时生效，逗号分隔，从第一个到最后一个分别表示：
标准直播，中国大陆（境内全地区）计费方式。
标准直播，国际/港澳台（境外多地区）计费方式。
快直播，中国大陆（境内全地区）计费方式。
快直播，国际/港澳台（境外多地区）计费方式。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FluxPackageBillMode: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveTranscodeRule请求参数结构体
 */
export interface CreateLiveTranscodeRuleRequest {
  /**
   * 播放域名。
   */
  DomainName: string

  /**
   * 推流路径，与推流和播放地址中的AppName保持一致。如果只绑定域名，则此处填空。
   */
  AppName: string

  /**
   * 流名称。如果只绑定域名或路径，则此处填空。
   */
  StreamName: string

  /**
   * 指定已有的模板Id。
   */
  TemplateId: number
}

/**
 * DescribeLiveWatermarkRules请求参数结构体
 */
export type DescribeLiveWatermarkRulesRequest = null

/**
 * DropLiveStream请求参数结构体
 */
export interface DropLiveStreamRequest {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 您的推流域名。
   */
  DomainName: string

  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName: string
}

/**
 * StopLiveRecord返回参数结构体
 */
export interface StopLiveRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateLiveWatermark请求参数结构体
 */
export interface UpdateLiveWatermarkRequest {
  /**
      * 水印 ID。
在添加水印接口 [AddLiveWatermark](/document/product/267/30154) 调用返回值中获取水印 ID。
      */
  WatermarkId: number

  /**
      * 水印图片 URL。
URL中禁止包含的字符：
 ;(){}$>`#"\'|
      */
  PictureUrl: string

  /**
   * 显示位置，X轴偏移，单位是百分比，默认 0。
   */
  XPosition: number

  /**
   * 显示位置，Y轴偏移，单位是百分比，默认 0。
   */
  YPosition: number

  /**
      * 水印名称。
最长16字节。
      */
  WatermarkName?: string

  /**
   * 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。
   */
  Width?: number

  /**
   * 水印高度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。
   */
  Height?: number
}

/**
 * CreateCommonMixStream请求参数结构体
 */
export interface CreateCommonMixStreamRequest {
  /**
   * 混流会话（申请混流开始到取消混流结束）标识 ID。80字节以内，仅含字母、数字以及下划线的字符串。
   */
  MixStreamSessionId: string

  /**
   * 混流输入流列表。
   */
  InputStreamList: Array<CommonMixInputParam>

  /**
   * 混流输出流参数。
   */
  OutputParams: CommonMixOutputParams

  /**
      * 输入模板 ID，若设置该参数，将按默认模板布局输出，无需填入自定义位置参数。
不填默认为0。
两输入源支持10，20，30，40，50。
三输入源支持310，390，391。
四输入源支持410。
五输入源支持510，590。
六输入源支持610。
      */
  MixStreamTemplateId?: number

  /**
   * 混流的特殊控制参数。如无特殊需求，无需填写。
   */
  ControlParams?: CommonMixControlParams
}

/**
 * 直播域名Referer黑白名单配置
 */
export interface RefererAuthConfig {
  /**
   * 域名。
   */
  DomainName: string

  /**
   * 是否启用，0：关闭，1：启用。
   */
  Enable: number

  /**
   * 名单类型，0：黑名单，1：白名单。
   */
  Type: number

  /**
   * 是否允许空Referer，0：不允许，1：允许。
   */
  AllowEmpty: number

  /**
   * 名单列表，以分号(;)分隔。
   */
  Rules: string
}

/**
 * CreateLiveCert返回参数结构体
 */
export interface CreateLiveCertResponse {
  /**
   * 证书ID
   */
  CertId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 推流数据信息
 */
export interface PushDataInfo {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 推流路径。
   */
  AppName: string

  /**
   * 推流客户端 IP。
   */
  ClientIp: string

  /**
   * 接流服务器 IP。
   */
  ServerIp: string

  /**
   * 推流视频帧率，单位: Hz。
   */
  VideoFps: number

  /**
   * 推流视频码率，单位: bps。
   */
  VideoSpeed: number

  /**
   * 推流音频帧率，单位: Hz。
   */
  AudioFps: number

  /**
   * 推流音频码率，单位: bps。
   */
  AudioSpeed: number

  /**
   * 推流域名。
   */
  PushDomain: string

  /**
   * 推流开始时间。
   */
  BeginPushTime: string

  /**
      * 音频编码格式，
例："AAC"。
      */
  Acodec: string

  /**
      * 视频编码格式，
例："H264"。
      */
  Vcodec: string

  /**
   * 分辨率。
   */
  Resolution: string

  /**
   * 采样率。
   */
  AsampleRate: number

  /**
   * metadata 中的音频码率，单位: bps。
   */
  MetaAudioSpeed: number

  /**
   * metadata 中的视频码率，单位: bps。
   */
  MetaVideoSpeed: number

  /**
   * metadata 中的帧率。
   */
  MetaFps: number
}

/**
 * AddDelayLiveStream请求参数结构体
 */
export interface AddDelayLiveStreamRequest {
  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。
   */
  AppName: string

  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 延播时间，单位：秒，上限：600秒。
   */
  DelayTime: number

  /**
      * 延播设置的过期时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：
1. 默认7天后过期，且最长支持7天内生效。
2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  ExpireTime?: string
}

/**
 * DescribeGroupProIspPlayInfoList请求参数结构体
 */
export interface DescribeGroupProIspPlayInfoListRequest {
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string

  /**
      * 结束时间点，格式为yyyy-mm-dd HH:MM:SS
时间跨度在（0,3小时]，支持最近1个月数据查询。
      */
  EndTime: string

  /**
   * 播放域名，默认为不填，表示求总体数据。
   */
  PlayDomains?: Array<string>

  /**
   * 省份列表，默认不填，则返回各省份的数据。
   */
  ProvinceNames?: Array<string>

  /**
   * 运营商列表，默认不填，则返回整个运营商的数据。
   */
  IspNames?: Array<string>

  /**
   * 国内还是国外，如果为空，查询所有地区数据；如果为“Mainland”，查询国内数据；如果为“Oversea”，则查询国外数据。
   */
  MainlandOrOversea?: string
}

/**
 * ModifyPullStreamStatus请求参数结构体
 */
export interface ModifyPullStreamStatusRequest {
  /**
   * 配置 ID 列表。
   */
  ConfigIds: Array<string>

  /**
   * 目标状态。0无效，2正在运行，4暂停。
   */
  Status: string
}

/**
 * DescribeStreamDayPlayInfoList请求参数结构体
 */
export interface DescribeStreamDayPlayInfoListRequest {
  /**
      * 日期，格式：YYYY-mm-dd。
第二天凌晨3点出昨天的数据，建议在这个时间点之后查询最新数据。支持最近3个月的数据查询。
      */
  DayTime: string

  /**
   * 播放域名。
   */
  PlayDomain?: string

  /**
   * 页号，范围[1,1000]，默认值是1。
   */
  PageNum?: number

  /**
   * 每页个数，范围[100,1000]，默认值是1000。
   */
  PageSize?: number

  /**
      * 可选值：
Mainland：查询国内数据，
Oversea：则查询国外数据，
默认：查询国内+国外的数据。
      */
  MainlandOrOversea?: string

  /**
   * 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。
   */
  ServiceName?: string
}

/**
 * 转码详细信息。
 */
export interface TranscodeDetailInfo {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 开始时间（北京时间），格式：yyyy-mm-dd HH:MM。
   */
  StartTime: string

  /**
   * 结束时间（北京时间），格式：yyyy-mm-dd HH:MM。
   */
  EndTime: string

  /**
      * 转码时长，单位：分钟。
注意：因推流过程中可能有中断重推情况，此处时长为真实转码时长累加值，并非结束时间和开始时间的间隔。
      */
  Duration: number

  /**
      * 编码方式，带模块，
示例：
liveprocessor_H264：直播转码-H264，
liveprocessor_H265： 直播转码-H265，
topspeed_H264：极速高清-H264，
topspeed_H265：极速高清-H265。
      */
  ModuleCodec: string

  /**
   * 码率。
   */
  Bitrate: number

  /**
   * 类型，包含：转码（Transcode），混流（MixStream），水印（WaterMark）。
   */
  Type: string

  /**
   * 推流域名。
   */
  PushDomain: string

  /**
   * 分辨率。
   */
  Resolution: string
}

/**
 * DescribeLiveSnapshotTemplate返回参数结构体
 */
export interface DescribeLiveSnapshotTemplateResponse {
  /**
   * 截图模板信息。
   */
  Template?: SnapshotTemplateInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeRules返回参数结构体
 */
export interface DescribeLiveTranscodeRulesResponse {
  /**
   * 转码规则列表。
   */
  Rules: Array<RuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveDomainReferer返回参数结构体
 */
export interface DescribeLiveDomainRefererResponse {
  /**
   * 域名 Referer 黑白名单配置。
   */
  RefererAuthConfig: RefererAuthConfig

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddLiveDomain请求参数结构体
 */
export interface AddLiveDomainRequest {
  /**
   * 域名名称。
   */
  DomainName: string

  /**
      * 域名类型，
0：推流域名，
1：播放域名。
      */
  DomainType: number

  /**
      * 拉流域名类型：
1：国内，
2：全球，
3：境外。
默认值：1。
      */
  PlayType?: number

  /**
      * 是否是慢直播：
0： 普通直播，
1 ：慢直播 。
默认值： 0。
      */
  IsDelayLive?: number

  /**
      * 是否是小程序直播：
0： 标准直播，
1 ：小程序直播 。
默认值： 0。
      */
  IsMiniProgramLive?: number
}

/**
 * 流名称列表。
 */
export interface StreamName {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 应用名称。
   */
  AppName: string

  /**
   * 推流域名。
   */
  DomainName: string

  /**
      * 推流开始时间。
UTC格式时间，例如：2019-01-07T12:00:00Z。
      */
  StreamStartTime: string

  /**
      * 推流结束时间。
UTC格式时间，例如：2019-01-07T15:00:00Z。
      */
  StreamEndTime: string

  /**
   * 停止原因。
   */
  StopReason: string

  /**
   * 推流持续时长，单位：秒。
   */
  Duration: number

  /**
   * 主播 IP。
   */
  ClientIp: string

  /**
   * 分辨率。
   */
  Resolution: string
}

/**
 * DescribeLivePackageInfo请求参数结构体
 */
export interface DescribeLivePackageInfoRequest {
  /**
      * 包类型，可选值：
0：流量包
1：转码包
2: 连麦包。
      */
  PackageType: number

  /**
      * 排序规则:
1. BuyTimeDesc： 最新购买的排在最前面
2. BuyTimeAsc： 最老购买的排在最前面
3. ExpireTimeDesc： 最后过期的排在最前面
4. ExpireTimeAsc：最先过期的排在最前面。

注意：
1. PackageType 为 2（连麦包） 的时候，不支持 3、4 排序。
      */
  OrderBy?: string

  /**
   * 取得第几页的数据，和 PageSize 同时传递才会生效。
   */
  PageNum?: number

  /**
      * 分页大小，和 PageNum 同时传递才会生效。
取值：10 ～ 100 之间的任意整数。
      */
  PageSize?: number
}

/**
 * CreatePullStreamConfig请求参数结构体
 */
export interface CreatePullStreamConfigRequest {
  /**
      * 源 Url ，用于拉流的地址。目前可支持直播流及点播文件。
注意：
1. 多个点播url之间使用空格拼接。
2. 目前上限支持10个url。
3. 支持拉流文件格式：flv，rtmp，hls，mp4。
      */
  FromUrl: string

  /**
      * 目的 Url ，用于推流的地址，目前限制该目标地址为腾讯域名。
仅支持：rtmp 协议。
      */
  ToUrl: string

  /**
      * 选择完成转拉推的服务所在区域:
1-深圳，
2-上海，
3-天津，
4-中国香港。
      */
  AreaId: number

  /**
      * 选择完成转拉推服务使用的运营商网络：
1-电信，
2-移动，
3-联通，
4-其他。
注：AreaId 为4的时候，IspId 只能为其他。
      */
  IspId: number

  /**
      * 开始时间。
使用 UTC 格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  StartTime: string

  /**
      * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
使用 UTC 格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  EndTime: string
}

/**
 * DescribeLiveCerts请求参数结构体
 */
export type DescribeLiveCertsRequest = null

/**
 * DescribeLivePullStreamTasks请求参数结构体
 */
export interface DescribeLivePullStreamTasksRequest {
  /**
      * 任务 ID。 
来源：调用 CreateLivePullStreamTask 接口时返回。
不填默认查询所有任务，按更新时间倒序排序。
      */
  TaskId?: string

  /**
   * 取得第几页，默认值：1。
   */
  PageNum?: number

  /**
      * 分页大小，默认值：10。
取值范围：1~20 之前的任意整数。
      */
  PageSize?: number
}

/**
 * 下行播放统计指标
 */
export interface CdnPlayStatData {
  /**
   * 时间点，格式: yyyy-mm-dd HH:MM:SS。
   */
  Time: string

  /**
   * 带宽，单位: Mbps。
   */
  Bandwidth: number

  /**
   * 流量，单位: MB。
   */
  Flux: number

  /**
   * 新增请求数。
   */
  Request: number

  /**
   * 并发连接数。
   */
  Online: number
}

/**
 * AddLiveDomain返回参数结构体
 */
export interface AddLiveDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHttpStatusInfoList请求参数结构体
 */
export interface DescribeHttpStatusInfoListRequest {
  /**
      * 起始时间，北京时间，
格式：yyyy-mm-dd HH:MM:SS。
      */
  StartTime: string

  /**
      * 结束时间，北京时间，
格式：yyyy-mm-dd HH:MM:SS。
注：最大时间跨度支持1天，支持最近3个月的数据查询。
      */
  EndTime: string

  /**
   * 播放域名列表。
   */
  PlayDomains?: Array<string>
}

/**
 * ModifyPullStreamConfig返回参数结构体
 */
export interface ModifyPullStreamConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveCallbackTemplate请求参数结构体
 */
export interface ModifyLiveCallbackTemplateRequest {
  /**
   * DescribeLiveCallbackTemplates接口返回的模板 ID。
   */
  TemplateId: number

  /**
   * 模板名称。
   */
  TemplateName?: string

  /**
   * 描述信息。
   */
  Description?: string

  /**
   * 开播回调 URL。
   */
  StreamBeginNotifyUrl?: string

  /**
   * 断流回调 URL。
   */
  StreamEndNotifyUrl?: string

  /**
   * 录制回调 URL。
   */
  RecordNotifyUrl?: string

  /**
   * 截图回调 URL。
   */
  SnapshotNotifyUrl?: string

  /**
   * 鉴黄回调 URL。
   */
  PornCensorshipNotifyUrl?: string

  /**
      * 回调 Key，回调 URL 公用，回调签名详见事件消息通知文档。
[事件消息通知](/document/product/267/32744)。
      */
  CallbackKey?: string
}

/**
 * 播放错误码信息
 */
export interface ProIspPlayCodeDataInfo {
  /**
   * 国家或地区。
   */
  CountryAreaName: string

  /**
   * 省份。
   */
  ProvinceName: string

  /**
   * 运营商。
   */
  IspName: string

  /**
   * 错误码为2开头的次数。
   */
  Code2xx: number

  /**
   * 错误码为3开头的次数。
   */
  Code3xx: number

  /**
   * 错误码为4开头的次数。
   */
  Code4xx: number

  /**
   * 错误码为5开头的次数。
   */
  Code5xx: number
}

/**
 * DescribeProvinceIspPlayInfoList请求参数结构体
 */
export interface DescribeProvinceIspPlayInfoListRequest {
  /**
      * 起始时间点，当前使用北京时间，
例：2019-02-21 10:00:00。
      */
  StartTime: string

  /**
      * 结束时间点，当前使用北京时间，
例：2019-02-21 12:00:00。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
      */
  EndTime: string

  /**
      * 支持如下粒度：
1：1分钟粒度（跨度不支持超过1天）
      */
  Granularity: number

  /**
      * 统计指标类型：
“Bandwidth”：带宽
“FluxPerSecond”：平均流量
“Flux”：流量
“Request”：请求数
“Online”：并发连接数
      */
  StatType: string

  /**
   * 播放域名列表。
   */
  PlayDomains?: Array<string>

  /**
   * 要查询的省份（地区）英文名称列表，如 Beijing。
   */
  ProvinceNames?: Array<string>

  /**
   * 要查询的运营商英文名称列表，如 China Mobile ，如果为空，查询所有运营商的数据。
   */
  IspNames?: Array<string>

  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string

  /**
      * ip类型：
“Ipv6”：Ipv6数据
如果为空，查询总的数据；
      */
  IpType?: string
}

/**
 * DescribeLivePlayAuthKey请求参数结构体
 */
export interface DescribeLivePlayAuthKeyRequest {
  /**
   * 域名。
   */
  DomainName: string
}

/**
 * DeleteLivePullStreamTask返回参数结构体
 */
export interface DeleteLivePullStreamTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveForbidStreamList返回参数结构体
 */
export interface DescribeLiveForbidStreamListResponse {
  /**
   * 符合条件的总个数。
   */
  TotalNum: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 分页的页码。
   */
  PageNum: number

  /**
   * 每页显示的条数。
   */
  PageSize: number

  /**
   * 禁推流列表。
   */
  ForbidStreamList: Array<ForbidStreamInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamPushInfoList请求参数结构体
 */
export interface DescribeStreamPushInfoListRequest {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 起始时间点，北京时间，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string

  /**
   * 结束时间点，北京时间，格式为yyyy-mm-dd HH:MM:SS，支持查询最近7天数据，建议查询时间跨度在3小时之内。
   */
  EndTime: string

  /**
   * 推流域名。
   */
  PushDomain?: string

  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。
   */
  AppName?: string
}

/**
 * DescribeLivePullStreamTasks返回参数结构体
 */
export interface DescribeLivePullStreamTasksResponse {
  /**
   * 直播拉流任务信息列表。
   */
  TaskInfos: Array<PullStreamTaskInfo>

  /**
   * 分页的页码。
   */
  PageNum: number

  /**
   * 每页大小。
   */
  PageSize: number

  /**
   * 符合条件的总个数。
   */
  TotalNum: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 限制可创建的最大任务数。
   */
  LimitTaskNum: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePushAuthKey返回参数结构体
 */
export interface ModifyLivePushAuthKeyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多个域名信息列表
 */
export interface DomainInfoList {
  /**
   * 域名。
   */
  Domain: string

  /**
   * 明细信息。
   */
  DetailInfoList: Array<DomainDetailInfo>
}

/**
 * DescribeLiveWatermark返回参数结构体
 */
export interface DescribeLiveWatermarkResponse {
  /**
   * 水印信息。
   */
  Watermark: WatermarkInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeLiveStream返回参数结构体
 */
export interface ResumeLiveStreamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamOnlineList返回参数结构体
 */
export interface DescribeLiveStreamOnlineListResponse {
  /**
   * 符合条件的总个数。
   */
  TotalNum: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 分页的页码。
   */
  PageNum: number

  /**
   * 每页显示的条数。
   */
  PageSize: number

  /**
   * 正在推送流的信息列表。
   */
  OnlineInfo: Array<StreamOnlineInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePullStreamConfig请求参数结构体
 */
export interface DeletePullStreamConfigRequest {
  /**
      * 配置 ID。
1. 在添加拉流配置接口 [CreatePullStreamConfig](/document/api/267/30159) 调用返回值中获取配置 ID。
2. 可以从接口 [DescribePullStreamConfigs](/document/api/267/30158) 中查询已创建过的拉流配置列表。
      */
  ConfigId: string
}

/**
 * ModifyPullStreamConfig请求参数结构体
 */
export interface ModifyPullStreamConfigRequest {
  /**
      * 配置 ID。
获取来源：
1. 创建拉流配置接口CreatePullStreamConfig返回的配置 ID。
2. 通过查询接口DescribePullStreamConfigs获取配置 ID。
      */
  ConfigId: string

  /**
      * 源 URL，用于拉流的地址。目前可支持直播流及点播文件。
注意：
1. 多个点播 URL 之间使用空格拼接。
2. 目前上限支持10个 URL。
3. 支持拉流文件格式：FLV，RTMP，HLS，MP4。
4. 使用标准三层样式，如：http://test.com/live/stream.flv。
      */
  FromUrl?: string

  /**
      * 目的 URL，用于推流的地址，目前限制该目标地址为腾讯域名。
1. 仅支持 RTMP 协议。
2. 使用标准三层样式，如：http://test.com/live/stream.flv。
      */
  ToUrl?: string

  /**
      * 区域 ID：
1-深圳。
2-上海。
3-天津。
4-中国香港。
如有改动，需同时传入IspId。
      */
  AreaId?: number

  /**
      * 运营商 ID，
1：电信。
2：移动。
3：联通。
4：其他。
AreaId为4的时候，IspId只能为其他。如有改动，需同时传入AreaId。
      */
  IspId?: number

  /**
      * 开始时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  StartTime?: string

  /**
      * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。

使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  EndTime?: string
}

/**
 * DescribeStreamPushInfoList返回参数结构体
 */
export interface DescribeStreamPushInfoListResponse {
  /**
   * 返回的数据列表。
   */
  DataInfoList: Array<PushQualityData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveStreamPushInfoList请求参数结构体
 */
export interface DescribeLiveStreamPushInfoListRequest {
  /**
   * 推流域名。
   */
  PushDomain?: string

  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
   */
  AppName?: string

  /**
      * 页数，
范围[1,10000]，
默认值：1。
      */
  PageNum?: number

  /**
      * 每页个数，
范围：[1,1000]，
默认值： 200。
      */
  PageSize?: number
}

/**
 * DescribeLiveWatermarks返回参数结构体
 */
export interface DescribeLiveWatermarksResponse {
  /**
   * 水印总个数。
   */
  TotalNum?: number

  /**
   * 水印信息列表。
   */
  WatermarkList?: Array<WatermarkInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 水印信息。
 */
export interface WatermarkInfo {
  /**
   * 水印 ID。
   */
  WatermarkId: number

  /**
   * 水印图片 URL。
   */
  PictureUrl: string

  /**
   * 显示位置，X 轴偏移。
   */
  XPosition: number

  /**
   * 显示位置，Y 轴偏移。
   */
  YPosition: number

  /**
   * 水印名称。
   */
  WatermarkName: string

  /**
   * 当前状态。0：未使用，1:使用中。
   */
  Status: number

  /**
   * 添加时间。
   */
  CreateTime: string

  /**
   * 水印宽。
   */
  Width: number

  /**
   * 水印高。
   */
  Height: number
}

/**
 * DescribeLiveForbidStreamList请求参数结构体
 */
export interface DescribeLiveForbidStreamListRequest {
  /**
   * 取得第几页，默认1。
   */
  PageNum?: number

  /**
      * 每页大小，最大100。 
取值：1~100之前的任意整数。
默认值：10。
      */
  PageSize?: number

  /**
   * 按流名称查询。
   */
  StreamName?: string
}

/**
 * DescribeLiveDomainPlayInfoList请求参数结构体
 */
export interface DescribeLiveDomainPlayInfoListRequest {
  /**
   * 播放域名列表。
   */
  PlayDomains?: Array<string>
}

/**
 * CreatePullStreamConfig返回参数结构体
 */
export interface CreatePullStreamConfigResponse {
  /**
   * 配置成功后的 ID。
   */
  ConfigId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindLiveDomainCert请求参数结构体
 */
export interface BindLiveDomainCertRequest {
  /**
   * 证书Id。使用添加证书接口获取证书Id。
   */
  CertId: number

  /**
   * 播放域名。
   */
  DomainName: string

  /**
   * HTTPS开启状态，0： 关闭  1：打开。
   */
  Status?: number
}

/**
 * DescribeTopClientIpSumInfoList请求参数结构体
 */
export interface DescribeTopClientIpSumInfoListRequest {
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string

  /**
      * 结束时间点，格式为yyyy-mm-dd HH:MM:SS
时间跨度在[0,4小时]，支持最近1天数据查询。
      */
  EndTime: string

  /**
   * 播放域名，默认为不填，表示求总体数据。
   */
  PlayDomains?: Array<string>

  /**
   * 页号，范围是[1,1000]，默认值是1。
   */
  PageNum?: number

  /**
   * 每页个数，范围是[1,1000]，默认值是20。
   */
  PageSize?: number

  /**
   * 排序指标，可选值包括TotalRequest（默认值），FailedRequest,TotalFlux。
   */
  OrderParam?: string

  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string

  /**
   * 输出字段使用的语言，可选值：Chinese（默认值），English；目前国家，省份和运营商支持多语言。
   */
  OutLanguage?: string
}

/**
 * CreateLiveCallbackRule请求参数结构体
 */
export interface CreateLiveCallbackRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
   */
  AppName: string

  /**
   * 模板ID。
   */
  TemplateId: number
}

/**
 * DeleteLiveWatermarkRule返回参数结构体
 */
export interface DeleteLiveWatermarkRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCallbackRecordsList返回参数结构体
 */
export interface DescribeCallbackRecordsListResponse {
  /**
   * 回调事件列表。
   */
  DataInfoList: Array<CallbackEventInfo>

  /**
   * 页码。
   */
  PageNum: number

  /**
   * 每页条数。
   */
  PageSize: number

  /**
   * 总条数。
   */
  TotalNum: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 推流时间。
 */
export interface PublishTime {
  /**
      * 推流时间。
UTC 格式，例如：2018-06-29T19:00:00Z。
      */
  PublishTime: string
}

/**
 * ModifyLiveCert返回参数结构体
 */
export interface ModifyLiveCertResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监控播放数据
 */
export interface MonitorStreamPlayInfo {
  /**
   * 播放域名。
   */
  PlayDomain: string

  /**
   * 流id。
   */
  StreamName: string

  /**
   * 播放码率，0表示原始码率。
   */
  Rate: number

  /**
   * 播放协议，可选值包括 Unknown，Flv，Hls，Rtmp，Huyap2p。
   */
  Protocol: string

  /**
   * 带宽，单位是Mbps。
   */
  Bandwidth: number

  /**
   * 在线人数，1分钟采样一个点，统计采样点的tcp链接数目。
   */
  Online: number

  /**
   * 请求数。
   */
  Request: number
}

/**
 * DescribePlayErrorCodeSumInfoList请求参数结构体
 */
export interface DescribePlayErrorCodeSumInfoListRequest {
  /**
      * 起始时间点，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
      */
  StartTime: string

  /**
      * 结束时间点，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
注：EndTime 和 StartTime 只支持最近1天的数据查询。
      */
  EndTime: string

  /**
   * 播放域名列表，不填表示总体数据。
   */
  PlayDomains?: Array<string>

  /**
   * 页数，范围[1,1000]，默认值是1。
   */
  PageNum?: number

  /**
   * 每页个数，范围：[1,1000]，默认值是20。
   */
  PageSize?: number

  /**
   * 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。
   */
  MainlandOrOversea?: string

  /**
   * 分组参数，可选值：CountryProIsp（默认值），Country（国家），默认是按照国家+省份+运营商来进行分组；目前国外的省份和运营商暂时无法识别。
   */
  GroupType?: string

  /**
   * 输出字段使用的语言，可选值：Chinese（默认值），English，目前国家，省份和运营商支持多语言。
   */
  OutLanguage?: string
}

/**
 * DescribeLiveTranscodeDetailInfo请求参数结构体
 */
export interface DescribeLiveTranscodeDetailInfoRequest {
  /**
   * 推流域名。
   */
  PushDomain?: string

  /**
   * 流名称。
   */
  StreamName?: string

  /**
      * 查询时间，北京时间，
格式：yyyymmdd。
注意：支持查询近1个月内某天的详细数据，截止到昨天。
      */
  DayTime?: string

  /**
      * 页数，默认1，
不超过100页。
      */
  PageNum?: number

  /**
      * 每页个数，默认20，
范围：[10,1000]。
      */
  PageSize?: number

  /**
      * 起始天时间，北京时间，
格式：yyyymmdd。
注意：支持查询近1个月内的详细数据。
      */
  StartDayTime?: string

  /**
      * 结束天时间，北京时间，
格式：yyyymmdd。
注意：支持查询近1个月内的详细数据，截止到昨天，注意DayTime 与（StartDayTime，EndDayTime）必须要传一个，如果都传，会以DayTime为准 。
      */
  EndDayTime?: string
}

/**
 * ModifyLiveDomainReferer返回参数结构体
 */
export interface ModifyLiveDomainRefererResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveWatermark请求参数结构体
 */
export interface DeleteLiveWatermarkRequest {
  /**
      * 水印 ID。
在添加水印接口 [AddLiveWatermark](/document/product/267/30154) 调用返回值中获取水印 ID。
或DescribeLiveWatermarks接口返回的水印ID。
      */
  WatermarkId: number
}

/**
 * DescribeLiveDomains请求参数结构体
 */
export interface DescribeLiveDomainsRequest {
  /**
   * 域名状态过滤。0-停用，1-启用。
   */
  DomainStatus?: number

  /**
   * 域名类型过滤。0-推流，1-播放。
   */
  DomainType?: number

  /**
   * 分页大小，范围：10~100。默认10。
   */
  PageSize?: number

  /**
   * 取第几页，范围：1~100000。默认1。
   */
  PageNum?: number

  /**
   * 0 普通直播 1慢直播 默认0。
   */
  IsDelayLive?: number

  /**
   * 域名前缀。
   */
  DomainPrefix?: string

  /**
      * 播放区域，只在 DomainType=1 时该参数有意义。
1: 国内。
2: 全球。
3: 海外。
      */
  PlayType?: number
}

/**
 * 获取省份/运营商的播放信息。
 */
export interface ProIspPlaySumInfo {
  /**
   * 省份/运营商/国家或地区。
   */
  Name: string

  /**
   * 总流量，单位: MB。
   */
  TotalFlux: number

  /**
   * 总请求数。
   */
  TotalRequest: number

  /**
   * 平均下载流量，单位: MB/s。
   */
  AvgFluxPerSecond: number
}

/**
 * 截图模板信息。
 */
export interface SnapshotTemplateInfo {
  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
   * 模板名称。
   */
  TemplateName: string

  /**
   * 截图时间间隔，5-300秒。
   */
  SnapshotInterval: number

  /**
      * 截图宽度，范围：0-3000。 
0：原始宽度并适配原始比例。
      */
  Width: number

  /**
      * 截图高度，范围：0-2000。
0：原始高度并适配原始比例。
      */
  Height: number

  /**
   * 是否开启鉴黄，0：不开启，1：开启。
   */
  PornFlag: number

  /**
   * Cos 应用 ID。
   */
  CosAppId: number

  /**
   * Cos Bucket名称。
   */
  CosBucket: string

  /**
   * Cos 地域。
   */
  CosRegion: string

  /**
   * 模板描述。
   */
  Description: string

  /**
      * Cos Bucket文件夹前缀。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosPrefix: string

  /**
      * Cos 文件名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosFileName: string
}

/**
 * DeleteLiveSnapshotRule返回参数结构体
 */
export interface DeleteLiveSnapshotRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveRecord请求参数结构体
 */
export interface CreateLiveRecordRequest {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 推流路径，与推流和播放地址中的 AppName保持一致，默认为 live。
   */
  AppName?: string

  /**
   * 推流域名。多域名推流必须设置。
   */
  DomainName?: string

  /**
      * 录制开始时间。中国标准时间，需要 URLEncode(rfc3986)。如 2017-01-01 10:10:01，编码为：2017-01-01+10%3a10%3a01。
定时录制模式，必须设置该字段；实时视频录制模式，忽略该字段。
      */
  StartTime?: string

  /**
      * 录制结束时间。中国标准时间，需要 URLEncode(rfc3986)。如 2017-01-01 10:30:01，编码为：2017-01-01+10%3a30%3a01。
定时录制模式，必须设置该字段；实时录制模式，为可选字段。如果通过Highlight参数，设置录制为实时视频录制模式，其设置的结束时间不应超过当前时间+30分钟，如果设置的结束时间超过当前时间+30分钟或者小于当前时间或者不设置该参数，则实际结束时间为当前时间+30分钟。
      */
  EndTime?: string

  /**
      * 录制类型。
“video” : 音视频录制【默认】。
“audio” : 纯音频录制。
在定时录制模式或实时视频录制模式下，该参数均有效，不区分大小写。
      */
  RecordType?: string

  /**
      * 录制文件格式。其值为：
“flv”【默认】,“hls”,”mp4”,“aac”,”mp3”。
在定时录制模式或实时视频录制模式下，该参数均有效，不区分大小写。
      */
  FileFormat?: string

  /**
      * 开启实时视频录制模式标志。
0：不开启实时视频录制模式，即定时录制模式【默认】。见[示例一](#.E7.A4.BA.E4.BE.8B1-.E5.88.9B.E5.BB.BA.E5.AE.9A.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1)。
1：开启实时视频录制模式。见[示例二](#.E7.A4.BA.E4.BE.8B2-.E5.88.9B.E5.BB.BA.E5.AE.9E.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1)。
      */
  Highlight?: number

  /**
      * 开启 A+B=C混流C流录制标志。
0：不开启 A+B=C混流C流录制【默认】。
1：开启 A+B=C混流C流录制。
在定时录制模式或实时视频录制模式下，该参数均有效。
      */
  MixStream?: number

  /**
      * 录制流参数。当前支持以下参数：
record_interval - 录制分片时长，单位 秒，1800 - 7200。
storage_time - 录制文件存储时长，单位 秒。
eg. record_interval=3600&storage_time=2592000。
注：参数需要url encode。
在定时录制模式或实时视频录制模式下，该参数均有效。
      */
  StreamParam?: string
}

/**
 * ForbidLiveStream返回参数结构体
 */
export interface ForbidLiveStreamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 带宽信息
 */
export interface BandwidthInfo {
  /**
      * 返回格式：
yyyy-mm-dd HH:MM:SS
根据粒度会有不同程度的缩减。
      */
  Time: string

  /**
   * 带宽。
   */
  Bandwidth: number
}

/**
 * DescribeLogDownloadList返回参数结构体
 */
export interface DescribeLogDownloadListResponse {
  /**
   * 日志信息列表。
   */
  LogInfoList?: Array<LogInfo>

  /**
   * 总条数。
   */
  TotalNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelCommonMixStream请求参数结构体
 */
export interface CancelCommonMixStreamRequest {
  /**
      * 混流会话（申请混流开始到取消混流结束）标识 ID。
该值与CreateCommonMixStream中的MixStreamSessionId保持一致。
      */
  MixStreamSessionId: string
}

/**
 * 直播拉流当前正在拉的文件信息。
 */
export interface RecentPullInfo {
  /**
   * 当前正在拉的文件地址。
   */
  FileUrl: string

  /**
   * 当前正在拉的文件偏移，单位：秒。
   */
  OffsetTime: number

  /**
      * 最新上报偏移信息时间。UTC格式。
如：2020-07-23T03:20:39Z。
注意：与北京时间相差八小时。
      */
  ReportTime: string

  /**
   * 已经轮播的次数。
   */
  LoopedTimes: number
}

/**
 * 证书信息。
 */
export interface CertInfo {
  /**
   * 证书 ID。
   */
  CertId: number

  /**
   * 证书名称。
   */
  CertName: string

  /**
   * 描述信息。
   */
  Description: string

  /**
   * 创建时间，UTC 格式。
   */
  CreateTime: string

  /**
   * 证书内容。
   */
  HttpsCrt: string

  /**
      * 证书类型。
0：用户添加证书，
1：腾讯云托管证书。
      */
  CertType: number

  /**
   * 证书过期时间，UTC 格式。
   */
  CertExpireTime: string

  /**
   * 使用此证书的域名列表。
   */
  DomainList: Array<string>
}

/**
 * DescribeRecordTask返回参数结构体
 */
export interface DescribeRecordTaskResponse {
  /**
   * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 Token。当该字段为空，说明已无更多数据。
   */
  ScrollToken: string

  /**
   * 录制任务列表。当该字段为空，说明已返回所有数据。
   */
  TaskList: Array<RecordTask>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveDelayInfoList返回参数结构体
 */
export interface DescribeLiveDelayInfoListResponse {
  /**
   * 延播信息列表。
   */
  DelayInfoList?: Array<DelayInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveTranscodeTemplate请求参数结构体
 */
export interface DeleteLiveTranscodeTemplateRequest {
  /**
      * 模板 ID。
1. 在创建转码模板接口 [CreateLiveTranscodeTemplate](/document/product/267/32646) 调用的返回值中获取模板 ID。
2. 可以从接口 [DescribeLiveTranscodeTemplates](/document/product/267/32641) 查询已经创建的过的模板列表。
      */
  TemplateId: number
}

/**
 * DescribeLiveCallbackRules请求参数结构体
 */
export type DescribeLiveCallbackRulesRequest = null

/**
 * 客户端ip播放汇总信息。
 */
export interface ClientIpPlaySumInfo {
  /**
   * 客户端 IP，点分型。
   */
  ClientIp: string

  /**
   * 客户端所在省份。
   */
  Province: string

  /**
   * 总流量。
   */
  TotalFlux: number

  /**
   * 总请求数。
   */
  TotalRequest: number

  /**
   * 总失败请求数。
   */
  TotalFailedRequest: number

  /**
   * 客户端所在国家。
   */
  CountryArea: string
}

/**
 * DescribeLiveTranscodeTemplate返回参数结构体
 */
export interface DescribeLiveTranscodeTemplateResponse {
  /**
   * 模板信息。
   */
  Template: TemplateInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveSnapshotTemplate返回参数结构体
 */
export interface CreateLiveSnapshotTemplateResponse {
  /**
   * 模板Id。
   */
  TemplateId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConcurrentRecordStreamNum请求参数结构体
 */
export interface DescribeConcurrentRecordStreamNumRequest {
  /**
      * 直播类型，SlowLive：慢直播。
NormalLive：普通直播。
      */
  LiveType: string

  /**
      * 起始时间，格式：yyyy-mm-dd HH:MM:SS。
可以查询最近180天的数据。
      */
  StartTime: string

  /**
      * 结束时间，格式：yyyy-mm-dd HH:MM:SS。
时间跨度最大支持31天。
      */
  EndTime: string

  /**
   * 如果为空，查询所有地区数据；如果为“Mainland”，查询国内数据；如果为“Oversea”，则查询国外数据。
   */
  MainlandOrOversea?: string

  /**
   * 推流域名列表，不填表示总体数据。
   */
  PushDomains?: Array<string>
}

/**
 * DeleteScreenshotTask返回参数结构体
 */
export interface DeleteScreenshotTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveCert请求参数结构体
 */
export interface ModifyLiveCertRequest {
  /**
   * 证书Id。
   */
  CertId: string

  /**
   * 证书类型。0-用户添加证书；1-腾讯云托管证书。
   */
  CertType?: number

  /**
   * 证书名称。
   */
  CertName?: string

  /**
   * 证书内容，即公钥。
   */
  HttpsCrt?: string

  /**
   * 私钥。
   */
  HttpsKey?: string

  /**
   * 描述信息。
   */
  Description?: string
}

/**
 * 通用混流控制参数
 */
export interface CommonMixControlParams {
  /**
      * 取值范围[0,1]。
填1时，当参数中图层分辨率参数与视频实际分辨率不一致时，自动从视频中按图层设置的分辨率比例进行裁剪。
      */
  UseMixCropCenter?: number

  /**
      * 取值范围[0,1]
填1时，当InputStreamList中个数为1时，且OutputParams.OutputStreamType为1时，不执行取消操作，执行拷贝流操作
      */
  AllowCopy?: number

  /**
      * 取值范围[0,1]
填1时，透传原始流的sei
      */
  PassInputSei?: number
}

/**
 * ModifyLiveRecordTemplate请求参数结构体
 */
export interface ModifyLiveRecordTemplateRequest {
  /**
   * DescribeRecordTemplates接口获取到的模板 ID。
   */
  TemplateId: number

  /**
   * 模板名称。
   */
  TemplateName?: string

  /**
   * 描述信息。
   */
  Description?: string

  /**
   * FLV 录制参数，开启 FLV 录制时设置。
   */
  FlvParam?: RecordParam

  /**
   * HLS 录制参数，开启 HLS 录制时设置。
   */
  HlsParam?: RecordParam

  /**
   * MP4 录制参数，开启 MP4 录制时设置。
   */
  Mp4Param?: RecordParam

  /**
   * AAC 录制参数，开启 AAC 录制时设置。
   */
  AacParam?: RecordParam

  /**
   * HLS 录制定制参数。
   */
  HlsSpecialParam?: HlsSpecialParam

  /**
   * MP3 录制参数，开启 MP3 录制时设置。
   */
  Mp3Param?: RecordParam

  /**
   * 是否去除水印，类型为慢直播时此参数无效。
   */
  RemoveWatermark?: boolean
}

/**
 * DescribeAreaBillBandwidthAndFluxList返回参数结构体
 */
export interface DescribeAreaBillBandwidthAndFluxListResponse {
  /**
   * 明细数据信息。
   */
  DataInfoList: Array<BillAreaInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ForbidLiveDomain请求参数结构体
 */
export interface ForbidLiveDomainRequest {
  /**
   * 待停用的直播域名。
   */
  DomainName: string
}

/**
 * DescribeLiveRecordRules请求参数结构体
 */
export type DescribeLiveRecordRulesRequest = null

/**
 * DescribePlayErrorCodeDetailInfoList返回参数结构体
 */
export interface DescribePlayErrorCodeDetailInfoListResponse {
  /**
   * 统计信息列表。
   */
  HttpCodeList: Array<HttpCodeInfo>

  /**
   * 统计类型。
   */
  StatType: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveRecordTemplate返回参数结构体
 */
export interface CreateLiveRecordTemplateResponse {
  /**
   * 模板Id。
   */
  TemplateId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录制模板参数。
 */
export interface RecordParam {
  /**
      * 录制间隔。
单位秒，默认：1800。
取值范围：30-7200。
此参数对 HLS 无效，当录制 HLS 时从推流到断流生成一个文件。
      */
  RecordInterval?: number

  /**
      * 录制存储时长。
单位秒，取值范围： 0 - 1500天。
0：表示永久存储。
      */
  StorageTime?: number

  /**
   * 是否开启当前格式录制，默认值为0，0：否， 1：是。
   */
  Enable?: number

  /**
   * 点播子应用 ID。
   */
  VodSubAppId?: number

  /**
      * 录制文件名。
支持的特殊占位符有：
{StreamID}: 流ID
{StartYear}: 开始时间-年
{StartMonth}: 开始时间-月
{StartDay}: 开始时间-日
{StartHour}: 开始时间-小时
{StartMinute}: 开始时间-分钟
{StartSecond}: 开始时间-秒
{StartMillisecond}: 开始时间-毫秒
{EndYear}: 结束时间-年
{EndMonth}: 结束时间-月
{EndDay}: 结束时间-日
{EndHour}: 结束时间-小时
{EndMinute}: 结束时间-分钟
{EndSecond}: 结束时间-秒
{EndMillisecond}: 结束时间-毫秒

若未设置默认录制文件名为{StreamID}_{StartYear}-{StartMonth}-{StartDay}-{StartHour}-{StartMinute}-{StartSecond}_{EndYear}-{EndMonth}-{EndDay}-{EndHour}-{EndMinute}-{EndSecond}
      */
  VodFileName?: string

  /**
      * 任务流
注意：此字段可能返回 null，表示取不到有效值。
      */
  Procedure?: string

  /**
      * 视频存储策略。
normal：标准存储。
cold：低频存储。
注意：此字段可能返回 null，表示取不到有效值。
      */
  StorageMode?: string

  /**
      * 点播应用分类
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClassId?: number
}

/**
 * 每个域名的统计信息。
 */
export interface DomainDetailInfo {
  /**
      * 国内还是国外:
Mainland: 表示国内数据。
Oversea: 表示国外数据。
      */
  MainlandOrOversea: string

  /**
   * 带宽，单位: Mbps。
   */
  Bandwidth: number

  /**
   * 流量，单位: MB。
   */
  Flux: number

  /**
   * 人数。
   */
  Online: number

  /**
   * 请求数。
   */
  Request: number
}

/**
 * 播放错误码信息
 */
export interface HttpStatusInfo {
  /**
   * 播放HTTP状态码。
   */
  HttpStatus: string

  /**
   * 个数。
   */
  Num: number
}

/**
 * DeleteLiveRecord请求参数结构体
 */
export interface DeleteLiveRecordRequest {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 任务ID，由CreateLiveRecord接口返回。
   */
  TaskId: number
}

/**
 * DescribeLiveSnapshotTemplates返回参数结构体
 */
export interface DescribeLiveSnapshotTemplatesResponse {
  /**
   * 截图模板列表。
   */
  Templates: Array<SnapshotTemplateInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopRecordTask请求参数结构体
 */
export interface StopRecordTaskRequest {
  /**
   * 录制任务ID。
   */
  TaskId: string
}

/**
 * DescribeLiveDomainReferer请求参数结构体
 */
export interface DescribeLiveDomainRefererRequest {
  /**
   * 播放域名。
   */
  DomainName: string
}

/**
 * 播放错误码信息
 */
export interface HttpStatusData {
  /**
      * 数据时间点，
格式：yyyy-mm-dd HH:MM:SS。
      */
  Time: string

  /**
   * 播放状态码详细信息。
   */
  HttpStatusInfoList: Array<HttpStatusInfo>
}

/**
 * HTTP返回码和统计数据
 */
export interface HttpCodeInfo {
  /**
      * HTTP协议返回码。
例："2xx", "3xx", "4xx", "5xx"。
      */
  HttpCode: string

  /**
   * 统计信息，对于无数据的时间点，会补0。
   */
  ValueList: Array<HttpCodeValue>
}

/**
 * DescribeStreamPlayInfoList请求参数结构体
 */
export interface DescribeStreamPlayInfoListRequest {
  /**
   * 开始时间，北京时间，格式为yyyy-mm-dd HH:MM:SS
   */
  StartTime: string

  /**
      * 结束时间，北京时间，格式为yyyy-mm-dd HH:MM:SS，
结束时间 和 开始时间跨度不支持超过24小时，支持距当前时间15天内的数据查询。
      */
  EndTime: string

  /**
      * 播放域名，
若不填，则为查询所有播放域名的在线流数据。
      */
  PlayDomain?: string

  /**
      * 流名称，精确匹配。
若不填，则为查询总体播放数据。
      */
  StreamName?: string

  /**
      * 推流路径，与播放地址中的AppName保持一致，会精确匹配，在同时传递了StreamName时生效。
若不填，则为查询总体播放数据。
注意：按AppName查询请先联系工单申请，开通后配置生效预计需要5个工作日左右，具体时间以最终回复为准。
      */
  AppName?: string

  /**
   * 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。
   */
  ServiceName?: string
}

/**
 * CreateLiveTranscodeTemplate请求参数结构体
 */
export interface CreateLiveTranscodeTemplateRequest {
  /**
      * 模板名称，例： 900p 仅支持字母和数字的组合。
长度限制：
  标准转码：1-10个字符
  极速高清转码：3-10个字符
      */
  TemplateName: string

  /**
      * 视频码率。范围：0kbps - 8000kbps。
0为保持原始码率。
注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。
      */
  VideoBitrate: number

  /**
      * 音频编码：aac，默认aac。
注意：当前该参数未生效，待后续支持！
      */
  Acodec?: string

  /**
      * 音频码率，默认0。
范围：0-500。
      */
  AudioBitrate?: number

  /**
      * 视频编码：h264/h265/origin，默认origin。

origin: 保持原始编码格式
      */
  Vcodec?: string

  /**
   * 模板描述。
   */
  Description?: string

  /**
   * 是否保留视频，0：否，1：是。默认1。
   */
  NeedVideo?: number

  /**
      * 宽，默认0。
范围[0-3000]
数值必须是2的倍数，0是原始宽度
      */
  Width?: number

  /**
   * 是否保留音频，0：否，1：是。默认1。
   */
  NeedAudio?: number

  /**
      * 高，默认0。
范围[0-3000]
数值必须是2的倍数，0是原始高度。
极速高清模板（AiTransCode = 1 的时候）必须传。
      */
  Height?: number

  /**
      * 帧率，默认0。
范围0-60fps
      */
  Fps?: number

  /**
      * 关键帧间隔，单位：秒。
默认原始的间隔
范围2-6
      */
  Gop?: number

  /**
      * 旋转角度，默认0。
可取值：0，90，180，270
      */
  Rotate?: number

  /**
      * 编码质量：
baseline/main/high。默认baseline
      */
  Profile?: string

  /**
      * 当设置的码率>原始码率时，是否以原始码率为准。
0：否， 1：是
默认 0。
      */
  BitrateToOrig?: number

  /**
      * 当设置的高度>原始高度时，是否以原始高度为准。
0：否， 1：是
默认 0。
      */
  HeightToOrig?: number

  /**
      * 当设置的帧率>原始帧率时，是否以原始帧率为准。
0：否， 1：是
默认 0。
      */
  FpsToOrig?: number

  /**
   * 是否是极速高清模板，0：否，1：是。默认0。
   */
  AiTransCode?: number

  /**
      * 极速高清视频码率压缩比。
极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)

取值范围：0.0到0.5
      */
  AdaptBitratePercent?: number

  /**
   * 是否以短边作为高度，0：否，1：是。默认0。
   */
  ShortEdgeAsHeight?: number
}

/**
 * DescribeLiveStreamPublishedList返回参数结构体
 */
export interface DescribeLiveStreamPublishedListResponse {
  /**
   * 推流记录信息。
   */
  PublishInfo?: Array<StreamName>

  /**
   * 分页的页码。
   */
  PageNum?: number

  /**
   * 每页大小
   */
  PageSize?: number

  /**
   * 符合条件的总个数。
   */
  TotalNum?: number

  /**
   * 总页数。
   */
  TotalPage?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveDomain请求参数结构体
 */
export interface DeleteLiveDomainRequest {
  /**
   * 要删除的域名
   */
  DomainName: string

  /**
   * 类型。0-推流，1-播放
   */
  DomainType: number
}

/**
 * ForbidLiveDomain返回参数结构体
 */
export interface ForbidLiveDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddDelayLiveStream返回参数结构体
 */
export interface AddDelayLiveStreamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeTemplates返回参数结构体
 */
export interface DescribeLiveTranscodeTemplatesResponse {
  /**
   * 转码模板列表。
   */
  Templates: Array<TemplateInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveCallbackRule请求参数结构体
 */
export interface DeleteLiveCallbackRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。
   */
  AppName: string
}

/**
 * 播放鉴权key信息。
 */
export interface PlayAuthKeyInfo {
  /**
   * 域名。
   */
  DomainName: string

  /**
      * 是否启用:
0: 关闭。
1: 启用。
      */
  Enable: number

  /**
   * 鉴权 Key。
   */
  AuthKey: string

  /**
   * 有效时间，单位：秒。
   */
  AuthDelta: number

  /**
   * 鉴权 BackKey。
   */
  AuthBackKey: string
}

/**
 * ModifyLiveTranscodeTemplate请求参数结构体
 */
export interface ModifyLiveTranscodeTemplateRequest {
  /**
   * 模板 Id。
   */
  TemplateId: number

  /**
      * 视频编码：h264/h265/origin，默认origin。

origin: 保持原始编码格式
      */
  Vcodec?: string

  /**
      * 音频编码：aac，默认aac。
注意：当前该参数未生效，待后续支持！
      */
  Acodec?: string

  /**
      * 音频码率，默认0。
范围：0-500。
      */
  AudioBitrate?: number

  /**
   * 模板描述。
   */
  Description?: string

  /**
      * 视频码率。范围：0kbps - 8000kbps。
0为保持原始码率。
注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。
      */
  VideoBitrate?: number

  /**
      * 宽。0-3000。
数值必须是2的倍数，0是原始宽度
      */
  Width?: number

  /**
   * 是否保留视频，0：否，1：是。默认1。
   */
  NeedVideo?: number

  /**
   * 是否保留音频，0：否，1：是。默认1。
   */
  NeedAudio?: number

  /**
      * 高。0-3000。
数值必须是2的倍数，0是原始宽度
      */
  Height?: number

  /**
      * 帧率，默认0。
范围0-60
      */
  Fps?: number

  /**
      * 关键帧间隔，单位：秒。
范围2-6
      */
  Gop?: number

  /**
      * 旋转角度，默认0。
可取值：0，90，180，270
      */
  Rotate?: number

  /**
      * 编码质量：
baseline/main/high。
      */
  Profile?: string

  /**
      * 当设置的码率>原始码率时，是否以原始码率为准。
0：否， 1：是
默认 0。
      */
  BitrateToOrig?: number

  /**
      * 当设置的高度>原始高度时，是否以原始高度为准。
0：否， 1：是
默认 0。
      */
  HeightToOrig?: number

  /**
      * 当设置的帧率>原始帧率时，是否以原始帧率为准。
0：否， 1：是
默认 0。
      */
  FpsToOrig?: number

  /**
      * 极速高清视频码率压缩比。
极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)

取值范围：0.0到0.5
      */
  AdaptBitratePercent?: number

  /**
   * 是否以短边作为高度，0：否，1：是。默认0。
   */
  ShortEdgeAsHeight?: number
}

/**
 * ModifyLiveDomainCert返回参数结构体
 */
export interface ModifyLiveDomainCertResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveCallbackTemplate返回参数结构体
 */
export interface ModifyLiveCallbackTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableLiveDomain请求参数结构体
 */
export interface EnableLiveDomainRequest {
  /**
   * 待启用的直播域名。
   */
  DomainName: string
}

/**
 * DescribeAllStreamPlayInfoList返回参数结构体
 */
export interface DescribeAllStreamPlayInfoListResponse {
  /**
   * 查询时间点，回传的输入参数中的查询时间。
   */
  QueryTime: string

  /**
   * 数据信息列表。
   */
  DataInfoList: Array<MonitorStreamPlayInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeTotalInfo返回参数结构体
 */
export interface DescribeLiveTranscodeTotalInfoResponse {
  /**
      * 统计数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataInfoList: Array<TranscodeTotalInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveSnapshotRules请求参数结构体
 */
export type DescribeLiveSnapshotRulesRequest = null

/**
 * CreateRecordTask请求参数结构体
 */
export interface CreateRecordTaskRequest {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径。
   */
  AppName: string

  /**
   * 录制任务结束时间，Unix时间戳。设置时间必须大于StartTime及当前时间，且EndTime - StartTime不能超过24小时。
   */
  EndTime: number

  /**
   * 录制任务开始时间，Unix时间戳。如果不填表示立即启动录制。StartTime不能超过当前时间+6天。
   */
  StartTime?: number

  /**
      * 推流类型，默认0。取值：
0-直播推流。
1-合成流，即 A+B=C 类型混流。
      */
  StreamType?: number

  /**
   * 录制模板ID，CreateLiveRecordTemplate 返回值。如果不填或者传入错误ID，则默认录制HLS格式、永久存储。
   */
  TemplateId?: number

  /**
   * 扩展字段，暂无定义。默认为空。
   */
  Extension?: string
}

/**
 * CreateLiveTranscodeRule返回参数结构体
 */
export interface CreateLiveTranscodeRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveCallbackRule返回参数结构体
 */
export interface CreateLiveCallbackRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveRecordTemplate返回参数结构体
 */
export interface DescribeLiveRecordTemplateResponse {
  /**
   * 录制模板信息。
   */
  Template: RecordTemplateInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAreaBillBandwidthAndFluxList请求参数结构体
 */
export interface DescribeAreaBillBandwidthAndFluxListRequest {
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string

  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过1天。
   */
  EndTime: string

  /**
   * 直播播放域名，若不填，表示总体数据。
   */
  PlayDomains?: Array<string>
}

/**
 * BindLiveDomainCert返回参数结构体
 */
export interface BindLiveDomainCertResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则信息
 */
export interface CallBackRuleInfo {
  /**
   * 规则创建时间。
   */
  CreateTime: string

  /**
   * 规则更新时间。
   */
  UpdateTime: string

  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径。
   */
  AppName: string
}

/**
 * 播放汇总统计信息。
 */
export interface PlaySumStatInfo {
  /**
   * 域名或流 ID。
   */
  Name: string

  /**
      * 平均下载速度，
单位: MB/s。
计算公式: 每分钟的下载速度求平均值。
      */
  AvgFluxPerSecond: number

  /**
   * 总流量，单位: MB。
   */
  TotalFlux: number

  /**
   * 总请求数。
   */
  TotalRequest: number
}

/**
 * DescribeLiveTranscodeTemplates请求参数结构体
 */
export type DescribeLiveTranscodeTemplatesRequest = null

/**
 * DescribeBillBandwidthAndFluxList请求参数结构体
 */
export interface DescribeBillBandwidthAndFluxListRequest {
  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime: string

  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过31天。支持最近3年的数据查询
   */
  EndTime: string

  /**
   * 直播播放域名，若不填，表示总体数据。
   */
  PlayDomains?: Array<string>

  /**
      * 可选值：
Mainland：查询国内数据，
Oversea：则查询国外数据，
默认：查询国内+国外的数据。
注：LEB（快直播）只支持国内+国外数据查询。
      */
  MainlandOrOversea?: string

  /**
      * 数据粒度，支持如下粒度：
5：5分钟粒度，（跨度不支持超过1天），
60：1小时粒度（跨度不支持超过一个月），
1440：天粒度（跨度不支持超过一个月）。
默认值：5。
      */
  Granularity?: number

  /**
   * 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。
   */
  ServiceName?: string

  /**
      * 大区，映射表如下：
China Mainland 中国大陆
Asia Pacific I 亚太一区
Asia Pacific II 亚太二区
Asia Pacific III 亚太三区
Europe 欧洲
North America 北美
South America 南美
Middle East 中东
Africa 非洲。
      */
  RegionNames?: Array<string>
}

/**
 * DescribeLiveRecordRules返回参数结构体
 */
export interface DescribeLiveRecordRulesResponse {
  /**
   * 规则列表。
   */
  Rules: Array<RuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveSnapshotTemplate请求参数结构体
 */
export interface CreateLiveSnapshotTemplateRequest {
  /**
      * 模板名称。
长度上限：255字节。
仅支持中文、英文、数字、_、-。
      */
  TemplateName: string

  /**
   * Cos 应用 ID。
   */
  CosAppId: number

  /**
      * Cos Bucket名称。
注：CosBucket参数值不能包含-[appid] 部分。
      */
  CosBucket: string

  /**
   * Cos地区。
   */
  CosRegion: string

  /**
      * 描述信息。
长度上限：1024字节。
仅支持中文、英文、数字、_、-。
      */
  Description?: string

  /**
      * 截图间隔，单位s，默认10s。
范围： 2s ~ 300s。
      */
  SnapshotInterval?: number

  /**
      * 截图宽度。默认：0（原始宽）。
范围：0-3000 。
      */
  Width?: number

  /**
      * 截图高度。默认：0（原始高）。
范围：0-2000 。
      */
  Height?: number

  /**
   * 是否开启鉴黄，0：不开启，1：开启。默认：0。
   */
  PornFlag?: number

  /**
      * Cos Bucket文件夹前缀。
如不传，实际按默认值
/{Year}-{Month}-{Day}
生效
      */
  CosPrefix?: string

  /**
      * Cos 文件名称。
如不传，实际按默认值
{StreamID}-screenshot-{Hour}-{Minute}-{Second}-{Width}x{Height}{Ext}
生效
      */
  CosFileName?: string
}

/**
 * DescribeLiveDomainPlayInfoList返回参数结构体
 */
export interface DescribeLiveDomainPlayInfoListResponse {
  /**
   * 数据时间，格式为yyyy-mm-dd HH:MM:SS。
   */
  Time: string

  /**
   * 实时总带宽。
   */
  TotalBandwidth: number

  /**
   * 实时总流量。
   */
  TotalFlux: number

  /**
   * 总请求数。
   */
  TotalRequest: number

  /**
   * 实时总连接数。
   */
  TotalOnline: number

  /**
   * 分域名的数据情况。
   */
  DomainInfoList: Array<DomainInfoList>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HTTP返回码数据信息
 */
export interface HttpCodeValue {
  /**
   * 时间，格式：yyyy-mm-dd HH:MM:SS。
   */
  Time: string

  /**
   * 次数。
   */
  Numbers: number

  /**
   * 占比。
   */
  Percentage: number
}

/**
 * DescribeLiveStreamOnlineList请求参数结构体
 */
export interface DescribeLiveStreamOnlineListRequest {
  /**
   * 推流域名。多域名用户需要填写 DomainName。
   */
  DomainName?: string

  /**
   * 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。多路径用户需要填写 AppName。
   */
  AppName?: string

  /**
   * 取得第几页，默认1。
   */
  PageNum?: number

  /**
      * 每页大小，最大100。 
取值：10~100之间的任意整数。
默认值：10。
      */
  PageSize?: number

  /**
   * 流名称，用于精确查询。
   */
  StreamName?: string
}

/**
 * DeleteLiveSnapshotTemplate返回参数结构体
 */
export interface DeleteLiveSnapshotTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveSnapshotTemplate请求参数结构体
 */
export interface DescribeLiveSnapshotTemplateRequest {
  /**
      * 模板 ID。
调用 [CreateLiveSnapshotTemplate](/document/product/267/32624) 时返回的模板 ID。
      */
  TemplateId: number
}

/**
 * DeleteLiveCert返回参数结构体
 */
export interface DeleteLiveCertResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCommonMixStream返回参数结构体
 */
export interface CreateCommonMixStreamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLiveDomainReferer请求参数结构体
 */
export interface ModifyLiveDomainRefererRequest {
  /**
   * 播放域名。
   */
  DomainName: string

  /**
   * 是否开启当前域名的 Referer 黑白名单鉴权。
   */
  Enable: number

  /**
   * 名单类型，0：黑名单，1：白名单。
   */
  Type: number

  /**
   * 是否允许空 Referer，0：不允许，1：允许。
   */
  AllowEmpty: number

  /**
   * Referer 名单列表，以;分隔。
   */
  Rules: string
}

/**
 * CreateLiveCallbackTemplate返回参数结构体
 */
export interface CreateLiveCallbackTemplateResponse {
  /**
   * 模板ID。
   */
  TemplateId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePushAuthKey请求参数结构体
 */
export interface DescribeLivePushAuthKeyRequest {
  /**
   * 推流域名。
   */
  DomainName: string
}

/**
 * 按省份运营商查询的播放信息。
 */
export interface PlayStatInfo {
  /**
   * 数据时间点。
   */
  Time: string

  /**
      * 带宽/流量/请求数/并发连接数/下载速度的值，若没数据返回时该值为0。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: number
}

/**
 * DescribeLiveCallbackTemplate请求参数结构体
 */
export interface DescribeLiveCallbackTemplateRequest {
  /**
      * 模板 ID。
1. 在创建回调模板接口 [CreateLiveCallbackTemplate](/document/product/267/32637) 调用的返回值中获取模板 ID。
2. 可以从接口 [DescribeLiveCallbackTemplates](/document/product/267/32632) 查询已经创建的过的模板列表。
      */
  TemplateId: number
}

/**
 * ModifyLiveSnapshotTemplate请求参数结构体
 */
export interface ModifyLiveSnapshotTemplateRequest {
  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
      * 模板名称。
长度上限：255字节。
      */
  TemplateName?: string

  /**
      * 描述信息。
长度上限：1024字节。
      */
  Description?: string

  /**
      * 截图间隔，单位s，默认10s。
范围： 5s ~ 300s。
      */
  SnapshotInterval?: number

  /**
   * 截图宽度。默认：0（原始宽）。
   */
  Width?: number

  /**
   * 截图高度。默认：0（原始高）。
   */
  Height?: number

  /**
      * 是否开启鉴黄，默认 0 。
0：不开启。
1：开启。
      */
  PornFlag?: number

  /**
   * Cos 应用 ID。
   */
  CosAppId?: number

  /**
      * Cos Bucket名称。
注：CosBucket参数值不能包含-[appid] 部分。
      */
  CosBucket?: string

  /**
   * Cos 地域。
   */
  CosRegion?: string

  /**
   * Cos Bucket文件夹前缀。
   */
  CosPrefix?: string

  /**
   * Cos 文件名称。
   */
  CosFileName?: string
}

/**
 * DescribeLiveCert返回参数结构体
 */
export interface DescribeLiveCertResponse {
  /**
   * 证书信息。
   */
  CertInfo?: CertInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveRecordRule返回参数结构体
 */
export interface CreateLiveRecordRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeTemplate请求参数结构体
 */
export interface DescribeLiveTranscodeTemplateRequest {
  /**
      * 模板 ID。
注意：在创建转码模板接口 [CreateLiveTranscodeTemplate](/document/product/267/32646) 调用的返回值中获取模板 ID。
      */
  TemplateId: number
}

/**
 * DescribeLogDownloadList请求参数结构体
 */
export interface DescribeLogDownloadListRequest {
  /**
      * 开始时间，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
      */
  StartTime: string

  /**
      * 结束时间，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
注意：结束时间 - 开始时间 <=7天。
      */
  EndTime: string

  /**
   * 域名列表。
   */
  PlayDomains: Array<string>
}

/**
 * DeleteLiveWatermark返回参数结构体
 */
export interface DeleteLiveWatermarkResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLivePushAuthKey返回参数结构体
 */
export interface DescribeLivePushAuthKeyResponse {
  /**
   * 推流鉴权key信息。
   */
  PushAuthKeyInfo?: PushAuthKeyInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveWatermarkRule请求参数结构体
 */
export interface CreateLiveWatermarkRuleRequest {
  /**
   * 推流域名。
   */
  DomainName: string

  /**
   * 推流路径，与推流和播放地址中的AppName保持一致，默认为live。
   */
  AppName: string

  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 水印Id，即调用[AddLiveWatermark](/document/product/267/30154)接口返回的WatermarkId。
   */
  TemplateId: number
}

/**
 * DescribeLiveRecordTemplates请求参数结构体
 */
export interface DescribeLiveRecordTemplatesRequest {
  /**
      * 是否属于慢直播模板，默认：0。
0： 标准直播。
1：慢直播。
      */
  IsDelayLive?: number
}

/**
 * DescribeAllStreamPlayInfoList请求参数结构体
 */
export interface DescribeAllStreamPlayInfoListRequest {
  /**
   * 查询时间点，精确到分钟粒度，支持最近1个月的数据查询，数据延迟为5分钟左右，如果要查询实时的数据，建议传递5分钟前的时间点，格式为yyyy-mm-dd HH:MM:00。（只精确至分钟，秒数填00）。
   */
  QueryTime: string

  /**
   * 播放域名列表，若不填，表示总体数据。
   */
  PlayDomains?: Array<string>
}

/**
 * DescribeLiveDomain返回参数结构体
 */
export interface DescribeLiveDomainResponse {
  /**
      * 域名信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DomainInfo?: DomainInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRecordTask请求参数结构体
 */
export interface DeleteRecordTaskRequest {
  /**
   * 任务ID，CreateRecordTask返回。删除TaskId指定的录制任务。
   */
  TaskId: string
}

/**
 * 直播拉流任务信息。
 */
export interface PullStreamTaskInfo {
  /**
   * 拉流任务Id。
   */
  TaskId: string

  /**
      * 拉流源的类型：
PullLivePushLive -直播，
PullVodPushLive -点播。
      */
  SourceType: string

  /**
      * 拉流源url列表。
SourceType为直播（PullLiveToLive）只可以填1个，
SourceType为点播（PullVodToLive）可以填多个，上限10个。
      */
  SourceUrls: Array<string>

  /**
      * 推流域名。
将拉到的源推到该域名。
      */
  DomainName: string

  /**
      * 推流路径。
将拉到的源推到该路径。
      */
  AppName: string

  /**
      * 流名称。
将拉到的源推到该流名称。
      */
  StreamName: string

  /**
      * 推流参数。
推流携带的自定义参数。
      */
  PushArgs: string

  /**
      * 开始时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  StartTime: string

  /**
      * 结束时间，注意：
1. 结束时间必须大于开始时间；
2. 结束时间和开始时间必须大于当前时间；
3. 结束时间 和 开始时间 间隔必须小于七天。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  EndTime: string

  /**
      * 拉流源所在地域（请就近选取）：
ap-beijing - 华北地区(北京)，
ap-shanghai -华东地区(上海)，
ap-guangzhou -华南地区(广州)，
ap-mumbai - 印度。
      */
  Region: string

  /**
      * 点播拉流转推循环次数。
-1：无限循环，直到任务结束。
0：不循环。
>0：具体循环次数。次数和时间以先结束的为准。
注意：拉流源为点播，该配置生效。
      */
  VodLoopTimes: number

  /**
      * 点播更新SourceUrls后的播放方式：
ImmediateNewSource：立即从更新的拉流源开始播放；
ContinueBreakPoint：从上次断流url源的断点处继续，结束后再使用新的拉流源。

注意：拉流源为点播，该配置生效。
      */
  VodRefreshType: string

  /**
      * 任务创建时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  CreateTime: string

  /**
      * 任务更新时间。
使用UTC格式时间，
例如：2019-01-08T10:00:00Z。
注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
  UpdateTime: string

  /**
   * 创建任务的操作者。
   */
  CreateBy: string

  /**
   * 最后更新任务的操作者。
   */
  UpdateBy: string

  /**
   * 回调地址。
   */
  CallbackUrl: string

  /**
      * 选择需要回调的事件：
TaskStart：任务启动回调，
TaskExit：任务停止回调，
VodSourceFileStart：从点播源文件开始拉流回调，
VodSourceFileFinish：从点播源文件拉流结束回调，
ResetTaskConfig：任务更新回调。
      */
  CallbackEvents: Array<string>

  /**
      * 注意：该信息暂不返回。
最后一次回调信息。
      */
  CallbackInfo: string

  /**
      * 注意：该信息暂不返回。
错误信息。
      */
  ErrorInfo: string

  /**
      * 状态。
enable：生效中。
pause：暂停中。
      */
  Status: string

  /**
      * 注意：该信息仅在查询单个任务时返回。
任务最新拉流信息。
包含：源 url，偏移时间，上报时间。
      */
  RecentPullInfo: RecentPullInfo

  /**
   * 任务备注信息。
   */
  Comment: string
}

/**
 * DescribeStreamDayPlayInfoList返回参数结构体
 */
export interface DescribeStreamDayPlayInfoListResponse {
  /**
   * 播放数据信息列表。
   */
  DataInfoList: Array<PlayDataInfoByStream>

  /**
   * 总数量。
   */
  TotalNum: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 当前数据所处页码。
   */
  PageNum: number

  /**
   * 每页个数。
   */
  PageSize: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopLiveRecord请求参数结构体
 */
export interface StopLiveRecordRequest {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 任务ID，由CreateLiveRecord接口返回。
   */
  TaskId: number
}

/**
 * DescribeVisitTopSumInfoList返回参数结构体
 */
export interface DescribeVisitTopSumInfoListResponse {
  /**
      * 页号，
范围是[1,1000]，
默认值是1。
      */
  PageNum: number

  /**
      * 每页个数，范围是[1,1000]，
默认值是20。
      */
  PageSize: number

  /**
   * 峰值指标，可选值包括”Domain”，”StreamId”。
   */
  TopIndex: string

  /**
   * 排序指标，可选值包括” AvgFluxPerSecond”(按每秒平均流量排序)，”TotalRequest”（默认，按总请求数排序）,“TotalFlux”（按总流量排序）。
   */
  OrderParam: string

  /**
   * 记录总数。
   */
  TotalNum: number

  /**
   * 记录总页数。
   */
  TotalPage: number

  /**
   * 数据内容。
   */
  DataInfoList: Array<PlaySumStatInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLivePullStreamTask返回参数结构体
 */
export interface ModifyLivePullStreamTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateLiveSnapshotRule返回参数结构体
 */
export interface CreateLiveSnapshotRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 延播信息。
 */
export interface DelayInfo {
  /**
   * 推流域名。
   */
  DomainName: string

  /**
      * 推流路径，与推流和播放地址中的 
 AppName 保持一致，默认为 live。
      */
  AppName: string

  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 延播时间，单位：秒。
   */
  DelayInterval: number

  /**
      * 创建时间，UTC 时间。
注意：UTC时间和北京时间相差8小时。
例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。
      */
  CreateTime: string

  /**
      * 过期时间，UTC 时间。
注意：UTC时间和北京时间相差8小时。
例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。
      */
  ExpireTime: string

  /**
      * 当前状态:
-1：已过期。
1： 生效中。
      */
  Status: number
}

/**
 * DescribeLiveStreamEventList返回参数结构体
 */
export interface DescribeLiveStreamEventListResponse {
  /**
   * 推断流事件列表。
   */
  EventList: Array<StreamEventInfo>

  /**
   * 分页的页码。
   */
  PageNum: number

  /**
   * 每页大小。
   */
  PageSize: number

  /**
   * 符合条件的总个数。
   */
  TotalNum: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePullStreamConfigs返回参数结构体
 */
export interface DescribePullStreamConfigsResponse {
  /**
   * 拉流配置。
   */
  PullStreamConfigs?: Array<PullStreamConfig>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveCallbackRules返回参数结构体
 */
export interface DescribeLiveCallbackRulesResponse {
  /**
   * 规则信息列表。
   */
  Rules?: Array<CallBackRuleInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLiveTranscodeTotalInfo请求参数结构体
 */
export interface DescribeLiveTranscodeTotalInfoRequest {
  /**
      * 开始时间，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
      */
  StartTime: string

  /**
      * 结束时间，北京时间。
格式：yyyy-mm-dd HH:MM:SS。
      */
  EndTime: string

  /**
      * 推流域名列表，若不填，表示查询所有域名总体数据。
指定域名时返回1小时粒度数据。
      */
  PushDomains?: Array<string>

  /**
      * 可选值：
Mainland：查询中国大陆（境内）数据，
Oversea：则查询国际/港澳台（境外）数据，
默认：查询全球地区（境内+境外）的数据。
      */
  MainlandOrOversea?: string
}

/**
 * StopScreenshotTask返回参数结构体
 */
export interface StopScreenshotTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRecordTask返回参数结构体
 */
export interface CreateRecordTaskResponse {
  /**
   * 任务ID，全局唯一标识录制任务。返回TaskId字段说明录制任务创建成功。
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 禁推流列表
 */
export interface ForbidStreamInfo {
  /**
   * 流名称。
   */
  StreamName: string

  /**
   * 创建时间。
   */
  CreateTime: string

  /**
   * 禁推过期时间。
   */
  ExpireTime: string
}

/**
 * ResumeDelayLiveStream返回参数结构体
 */
export interface ResumeDelayLiveStreamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 某省份某运营商在某段时间内的带宽，流量，请求数和并发数
 */
export interface GroupProIspDataInfo {
  /**
   * 省份。
   */
  ProvinceName: string

  /**
   * 运营商。
   */
  IspName: string

  /**
   * 分钟维度的明细数据。
   */
  DetailInfoList: Array<CdnPlayStatData>
}

/**
 * DeleteLiveDomain返回参数结构体
 */
export interface DeleteLiveDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用混流输入裁剪参数。
 */
export interface CommonMixCropParams {
  /**
   * 裁剪的宽度。取值范围[0，2000]。
   */
  CropWidth?: number

  /**
   * 裁剪的高度。取值范围[0，2000]。
   */
  CropHeight?: number

  /**
   * 裁剪的起始X坐标。取值范围[0，2000]。
   */
  CropStartLocationX?: number

  /**
   * 裁剪的起始Y坐标。取值范围[0，2000]。
   */
  CropStartLocationY?: number
}

/**
 * CreateLiveRecordTemplate请求参数结构体
 */
export interface CreateLiveRecordTemplateRequest {
  /**
   * 模板名。仅支持中文、英文、数字、_、-。
   */
  TemplateName: string

  /**
   * 描述信息。
   */
  Description?: string

  /**
   * Flv录制参数，开启Flv录制时设置。
   */
  FlvParam?: RecordParam

  /**
   * Hls录制参数，开启hls录制时设置。
   */
  HlsParam?: RecordParam

  /**
   * Mp4录制参数，开启Mp4录制时设置。
   */
  Mp4Param?: RecordParam

  /**
   * Aac录制参数，开启Aac录制时设置。
   */
  AacParam?: RecordParam

  /**
      * 直播类型，默认 0。
0：普通直播，
1：慢直播。
      */
  IsDelayLive?: number

  /**
   * HLS专属录制参数。
   */
  HlsSpecialParam?: HlsSpecialParam

  /**
   * Mp3录制参数，开启Mp3录制时设置。
   */
  Mp3Param?: RecordParam

  /**
   * 是否去除水印，类型为慢直播时此参数无效。
   */
  RemoveWatermark?: boolean
}

/**
 * 转码模板信息。
 */
export interface TemplateInfo {
  /**
      * 视频编码：h264/h265/origin，默认h264。

origin: 保持原始编码格式
      */
  Vcodec: string

  /**
      * 视频码率。范围：0kbps - 8000kbps。
0为保持原始码率。
注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。
      */
  VideoBitrate: number

  /**
      * 音频编码：aac，默认aac。
注意：当前该参数未生效，待后续支持！
      */
  Acodec: string

  /**
      * 音频码率。取值范围：0kbps - 500kbps。
默认0。
      */
  AudioBitrate: number

  /**
      * 宽，默认0。
范围[0-3000]
数值必须是2的倍数，0是原始宽度
      */
  Width: number

  /**
      * 高，默认0。
范围[0-3000]
数值必须是2的倍数，0是原始宽度
      */
  Height: number

  /**
      * 帧率，默认0。
范围0-60fps
      */
  Fps: number

  /**
      * 关键帧间隔，单位：秒。
默认原始的间隔
范围2-6
      */
  Gop: number

  /**
      * 旋转角度，默认0。
可取值：0，90，180，270
      */
  Rotate: number

  /**
      * 编码质量：
baseline/main/high。默认baseline
      */
  Profile: string

  /**
      * 当设置的码率>原始码率时，是否以原始码率为准。
0：否， 1：是
默认 0。
      */
  BitrateToOrig: number

  /**
      * 当设置的高度>原始高度时，是否以原始高度为准。
0：否， 1：是
默认 0。
      */
  HeightToOrig: number

  /**
      * 当设置的帧率>原始帧率时，是否以原始帧率为准。
0：否， 1：是
默认 0。
      */
  FpsToOrig: number

  /**
   * 是否保留视频。0：否，1：是。
   */
  NeedVideo: number

  /**
   * 是否保留音频。0：否，1：是。
   */
  NeedAudio: number

  /**
   * 模板 ID。
   */
  TemplateId: number

  /**
   * 模板名称。
   */
  TemplateName: string

  /**
   * 模板描述。
   */
  Description: string

  /**
   * 是否是极速高清模板，0：否，1：是。默认0。
   */
  AiTransCode: number

  /**
      * 极速高清视频码率压缩比。
极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)

取值范围：0.0到0.5
      */
  AdaptBitratePercent: number

  /**
      * 是否以短边作为高度，0：否，1：是。默认0。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShortEdgeAsHeight: number
}

/**
 * DescribeProIspPlaySumInfoList返回参数结构体
 */
export interface DescribeProIspPlaySumInfoListResponse {
  /**
   * 总流量。
   */
  TotalFlux: number

  /**
   * 总请求数。
   */
  TotalRequest: number

  /**
   * 统计的类型。
   */
  StatType: string

  /**
   * 每页的记录数。
   */
  PageSize: number

  /**
   * 页号。
   */
  PageNum: number

  /**
   * 总记录数。
   */
  TotalNum: number

  /**
   * 总页数。
   */
  TotalPage: number

  /**
   * 省份，运营商，国家或地区汇总数据列表。
   */
  DataInfoList: Array<ProIspPlaySumInfo>

  /**
   * 下载速度，单位：MB/s，计算方式：总流量/总时长。
   */
  AvgFluxPerSecond: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveCert请求参数结构体
 */
export interface DeleteLiveCertRequest {
  /**
   * DescribeLiveCerts接口获取到的证书Id。
   */
  CertId: number
}

/**
 * DescribeHttpStatusInfoList返回参数结构体
 */
export interface DescribeHttpStatusInfoListResponse {
  /**
   * 播放状态码列表。
   */
  DataInfoList: Array<HttpStatusData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLiveRecordRule返回参数结构体
 */
export interface DeleteLiveRecordRuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

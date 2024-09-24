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
 * 音频流信息。
 */
export interface AudioStreamInfo {
  /**
   * 码率，单位：bps。
   */
  Bitrate: number
  /**
   * 采样率，单位：hz。
   */
  SamplingRate: number
  /**
   * 编码格式。
   */
  Codec: string
}

/**
 * 分类删除事件。
 */
export interface ClassDeletedEvent {
  /**
   * 删除的分类归属。
   */
  Owner: Entity
  /**
   * 删除的分类路径列表。
   */
  ClassPathSet: Array<string>
}

/**
 * ModifyMaterial返回参数结构体
 */
export interface ModifyMaterialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 要删除的项目 Id。
   */
  ProjectId: string
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以删除一切项目。如果指定操作者，则操作者必须为项目所有者。
   */
  Operator?: string
}

/**
 * ExportVideoByVideoSegmentationData返回参数结构体
 */
export interface ExportVideoByVideoSegmentationDataResponse {
  /**
   * 任务 Id。
   */
  TaskId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 媒体删除事件。
 */
export interface MaterialDeletedEvent {
  /**
   * 删除的媒体 Id 列表。
   */
  MaterialIdSet: Array<string>
}

/**
 * ImportMaterial返回参数结构体
 */
export interface ImportMaterialResponse {
  /**
   * 媒体 Id。
   */
  MaterialId?: string
  /**
   * 媒体文件预处理任务 ID，如果未指定发起预处理任务则为空。
   */
  PreProcessTaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云转推项目输入信息。
 */
export interface StreamConnectProjectInput {
  /**
   * 云转推主输入源信息。
   */
  MainInput?: StreamInputInfo
  /**
   * 云转推备输入源信息。
   */
  BackupInput?: StreamInputInfo
  /**
   * 云转推输出源信息。
   */
  Outputs?: Array<StreamConnectOutput>
}

/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 手机号码。指定手机号获取账号信息，目前仅支持国内手机号，且号码不加地区码 `+86` 等。
   */
  Phone?: string
  /**
   * 分页返回的起始偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 分页返回的记录条数，默认值：10，最大值：20。
   */
  Limit?: number
}

/**
 * ExportVideoByVideoSegmentationData请求参数结构体
 */
export interface ExportVideoByVideoSegmentationDataRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 视频拆条项目 Id 。
   */
  ProjectId: string
  /**
   * 指定需要导出的智能拆条片段的组 Id 。
   */
  SegmentGroupId: string
  /**
   * 指定需要导出的智能拆条片段 Id  集合。
   */
  SegmentIds: Array<string>
  /**
   * 导出模板 Id，目前不支持自定义创建，只支持下面的预置模板 Id。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
   */
  Definition: number
  /**
   * 导出目标，指定导出视频的目标媒资库，可取值有：
<li>CME：多媒体创作引擎，即导出为多媒体创作引擎媒资库，此导出目标在云点播媒资库依然可见；</li>
<li>VOD：云点播，即导出为云点播媒资库，此导出目标在多媒体创作引擎媒资库将不可见。</li>
   */
  ExportDestination: string
  /**
   * 导出的多媒体创作引擎媒体信息。当导出目标为 CME 时必填。
   */
  CMEExportInfo?: CMEExportInfo
  /**
   * 导出的云点播媒资信息。当导出目标为 VOD 时必填。
   */
  VODExportInfo?: VODExportInfo
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以操作任意智能拆条项目。如果指定操作者，则操作者必须为项目所有。
   */
  Operator?: string
}

/**
 * 转场信息
 */
export interface MediaTransitionItem {
  /**
   * 转场 Id 。暂只支持一个转场。
   */
  TransitionId: string
  /**
   * 转场持续时间，单位为秒，默认为2秒。进行转场处理的两个媒体片段，第二个片段在轨道上的起始时间会自动进行调整，设置为前面一个片段的结束时间减去转场的持续时间。
   */
  Duration?: number
}

/**
 * DescribeTeams返回参数结构体
 */
export interface DescribeTeamsResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount: number
  /**
   * 团队列表。
   */
  TeamSet: Array<TeamInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
  /**
   * 任务状态，取值有：
<li>PROCESSING：处理中：</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
   */
  Status?: string
  /**
   * 任务进度，取值为：0~100。
   */
  Progress?: number
  /**
   * 错误码。
<li>0：成功；</li>
<li>其他值：失败。</li>
   */
  ErrCode?: number
  /**
   * 错误信息。
   */
  ErrMsg?: string
  /**
   * 任务类型，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：视频编辑项目导出。</li>
   */
  TaskType?: string
  /**
   * 导出项目输出信息。仅当 TaskType 为 VIDEO_EDIT_PROJECT_EXPORT 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoEditProjectOutput?: VideoEditProjectOutput
  /**
   * 创建时间，格式按照 ISO 8601 标准表示。
   */
  CreateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVideoEditProject请求参数结构体
 */
export interface ExportVideoEditProjectRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 项目 Id。
   */
  ProjectId: string
  /**
   * 视频编码配置 ID，支持自定义创建，推荐优先使用系统预置的导出配置。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
   */
  Definition: number
  /**
   * 导出目标，指定导出视频的目标媒资库，可取值有：
<li>CME：多媒体创作引擎，即导出为多媒体创作引擎媒资库，此导出目标在云点播媒资库依然可见；</li>
<li>VOD：云点播，即导出为云点播媒资库，此导出目标在多媒体创作引擎媒资库将不可见。</li>
   */
  ExportDestination: string
  /**
   * 视频封面图片文件（如 jpeg, png 等）进行 Base64 编码后的字符串，仅支持 gif、jpeg、png 三种图片格式，原图片文件不能超过2 M大 小。
   */
  CoverData?: string
  /**
   * 导出的多媒体创作引擎媒体信息。当导出目标为 CME 时必填。
   */
  CMEExportInfo?: CMEExportInfo
  /**
   * 导出的云点播媒资信息。当导出目标为 VOD 时必填。
   */
  VODExportInfo?: VODExportInfo
  /**
   * 视频导出扩展参数。可以覆盖导出模板中的参数，灵活的指定导出规格及参数。
   */
  ExportExtensionArgs?: VideoExportExtensionArgs
  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验项目导出权限。
   */
  Operator?: string
}

/**
 * 云转推输入断流信息。
 */
export interface StreamConnectInputInterruptInfo {
  /**
   * 云转推输入源标识，取值有：
<li>Main：主源；</li>
<li>Backup：备源。</li>
   */
  EndPoint: string
}

/**
 * 点播转直播播放信息。
 */
export interface MediaCastPlayInfo {
  /**
   * 点播转直播项目运行状态，取值有：
<li> Working : 运行中；</li>
<li> Idle: 空闲状态。</li>
   */
  Status: string
  /**
   * 当前播放的输入源 Id。
   */
  CurrentSourceId?: string
  /**
   * 当前播放的输入源的播放位置，单位：秒。
   */
  CurrentSourcePosition: number
  /**
   * 当前播放的输入源时长，单位：秒。
   */
  CurrentSourceDuration: number
  /**
   * 输出源状态信息。
   */
  DestinationStatusSet: Array<MediaCastDestinationStatus>
  /**
   * 已经循环播放的次数。
   */
  LoopCount: number
}

/**
 * 团队信息
 */
export interface TeamInfo {
  /**
   * 团队 ID。
   */
  TeamId: string
  /**
   * 团队名称。
   */
  Name: string
  /**
   * 团队成员个数
   */
  MemberCount?: number
  /**
   * 团队创建时间，格式按照 ISO 8601 标准表示。
   */
  CreateTime?: string
  /**
   * 团队最后更新时间，格式按照 ISO 8601 标准表示。
   */
  UpdateTime: string
}

/**
 * 分类信息
 */
export interface ClassInfo {
  /**
   * 归属者。
   */
  Owner: Entity
  /**
   * 分类路径。
   */
  ClassPath: string
}

/**
 * 点播转直播输出断流信息。
 */
export interface MediaCastDestinationInterruptInfo {
  /**
   * 发生断流的输出源信息。
   */
  DestinationInfo: MediaCastDestinationInfo
  /**
   * 输出源断流原因，取值有：
<li>SystemError：系统错误；</li>
<li>Unknown：未知错误。</li>
   */
  Reason: string
}

/**
 * 音频轨道上的音频片段信息。
 */
export interface AudioTrackItem {
  /**
   * 音频媒体来源类型，取值有：
<ul>
<li>VOD ：素材来源于云点播文件 ；</li>
<li>CME ：视频来源于制作云媒体文件 ；</li>
<li>EXTERNAL ：视频来源于媒资绑定，如果媒体不是存储在腾讯云点播中或者云创中，都需要使用媒资绑定。</li>
</ul>
   */
  SourceType: string
  /**
   * 音频媒体，可取值为：
<ul>
<li>当 SourceType 为 VOD 时，参数填云点播 FileId ；</li>
<li>当 SourceType 为 CME 时，参数填多媒体创作引擎媒体 Id；</li>
<li>当 SourceType 为 EXTERNAL 时，目前仅支持外部媒体 URL(如`https://www.example.com/a.mp3`)，参数填写规则请参见注意事项。</li>
</ul>

注意：
<li>当 SourceType 为 EXTERNAL 并且媒体 URL Scheme 为 `https` 时(如：`https://www.example.com/a.mp3`)，参数为：`1000000:www.example.com/a.mp3`。</li>
<li>当 SourceType 为 EXTERNAL 并且媒体 URL Scheme 为 `http` 时(如：`http://www.example.com/b.mp3`)，参数为：`1000001:www.example.com/b.mp3`。</li>
   */
  SourceMedia: string
  /**
   * 音频片段取自媒体文件的起始时间，单位为秒。0 表示从媒体开始位置截取。默认为0。
   */
  SourceMediaStartTime?: number
  /**
   * 音频片段的时长，单位为秒。默认和媒体本身长度一致，表示截取全部媒体。
   */
  Duration?: number
}

/**
 * 云转推项目信息，包含输入源、输出源、当前转推开始时间等信息。
 */
export interface StreamConnectProjectInfo {
  /**
   * 转推项目状态，取值有：
<li>Working ：转推中；</li>
<li>Idle ：空闲中。</li>
   */
  Status: string
  /**
   * 当前转推输入源，取值有：
<li>Main ：主输入源；</li>
<li>Backup ：备输入源。</li>
   */
  CurrentInputEndpoint: string
  /**
   * 当前转推开始时间， 采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。仅 Status 取值 Working 时有效。
   */
  CurrentStartTime: string
  /**
   * 当前转推计划结束时间， 采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。仅 Status 取值 Working 时有效。
   */
  CurrentStopTime: string
  /**
   * 上一次转推结束时间， 采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。仅 Status 取值 Idle 时有效。
   */
  LastStopTime: string
  /**
   * 云转推主输入源。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MainInput: StreamInputInfo
  /**
   * 云转推备输入源。
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupInput: StreamInputInfo
  /**
   * 云转推输出源。
   */
  OutputSet: Array<StreamConnectOutputInfo>
}

/**
 * 视频编码配置中的音频设置更新信息
 */
export interface VideoEncodingPresetAudioSettingForUpdate {
  /**
   * 音频码率，单位：bps。
不填则不修改。
   */
  Bitrate?: string
  /**
   * 音频声道数，可选值： 
<li>1：单声道；</li>
<li>2：双声道。</li> 
不填则不修改。
   */
  Channels?: number
  /**
   * 音频流的采样率，目前仅支持： 16000； 32000； 44100； 48000。单位：Hz。
不填则不修改。
   */
  SampleRate?: number
}

/**
 * 视频编码配置中的音频设置
 */
export interface VideoEncodingPresetAudioSetting {
  /**
   * 音频流的编码格式，可选值：
AAC：AAC 编码。

默认值：AAC。
   */
  Codec?: string
  /**
   * 音频码率，单位：bps。
默认值：64K。
   */
  Bitrate?: number
  /**
   * 音频声道数，可选值： 
<li>1：单声道；</li>
<li>2：双声道。</li> 
默认值：2。
   */
  Channels?: number
  /**
   * 音频流的采样率，仅支持 16000； 32000； 44100； 48000。单位：Hz。 
默认值：16000。
   */
  SampleRate?: number
}

/**
 * 整型范围
 */
export interface IntegerRange {
  /**
   * 按整形代表值的下限检索。
   */
  LowerBound: number
  /**
   * 按整形代表值的上限检索。
   */
  UpperBound: number
}

/**
 * SearchMaterial请求参数结构体
 */
export interface SearchMaterialRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 指定搜索空间，数组长度不得超过5。
   */
  SearchScopes: Array<SearchScope>
  /**
   * 媒体类型，可取值有：
<li>AUDIO：音频；</li>
<li>VIDEO：视频 ；</li>
<li>IMAGE：图片；</li>
<li>VIDEO_EDIT_TEMPLATE：剪辑模板。</li>
   */
  MaterialTypes?: Array<string>
  /**
   * 搜索文本，模糊匹配媒体名称或描述信息，匹配项越多，匹配度越高，排序越优先。长度限制：15个字符。
   */
  Text?: string
  /**
   * 按画质检索，取值为：LD/SD/HD/FHD/2K/4K。
   */
  Resolution?: string
  /**
   * 按媒体时长检索，单位s。
   */
  DurationRange?: IntegerRange
  /**
   * 按照媒体创建时间检索。
   */
  CreateTimeRange?: TimeRange
  /**
   * 按标签检索，填入检索的标签名。
   */
  Tags?: Array<string>
  /**
   * 排序方式。Sort.Field 可选值：CreateTime。指定 Text 搜索时，将根据匹配度排序，该字段无效。
   */
  Sort?: SortBy
  /**
   * 偏移量。默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：50。
   */
  Limit?: number
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以搜索任意媒体的信息。如果指定操作者，则操作者必须对媒体有读权限。
   */
  Operator?: string
}

/**
 * 新文件生成事件
 */
export interface StorageNewFileCreatedEvent {
  /**
   * 云点播文件  Id。
   */
  FileId: string
  /**
   * 媒体 Id。
   */
  MaterialId: string
  /**
   * 操作者 Id。（废弃，请勿使用）
   */
  Operator: string
  /**
   * 操作类型，可取值有：
<li>Upload：本地上传；</li>
<li>PullUpload：拉取上传；</li>
<li>VideoEdit：视频剪辑；</li>
<li>LiveStreamClip：直播流剪辑；</li>
<li>LiveStreamRecord：直播流录制。</li>
   */
  OperationType: string
  /**
   * 媒体归属。
   */
  Owner: Entity
  /**
   * 媒体分类路径。
   */
  ClassPath: string
  /**
   * 生成文件的任务 Id。当生成新文件是拉取上传、视频剪辑、直播流剪辑时为任务 Id。
   */
  TaskId: string
  /**
   * 来源上下文信息。视频剪辑生成新文件时此字段为项目 Id；直播流剪辑或者直播流录制生成新文件则为原始流地址。
   */
  SourceContext: string
}

/**
 * DeleteTeam返回参数结构体
 */
export interface DeleteTeamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云转推输出源。
 */
export interface StreamConnectOutput {
  /**
   * 云转推输出源标识，转推项目级别唯一。若不填则由后端生成。
   */
  Id?: string
  /**
   * 云转推输出源名称。
   */
  Name?: string
  /**
   * 云转推输出源类型，取值：
<li>URL ：URL类型</li>
不填默认为URL类型。
   */
  Type?: string
  /**
   * 云转推推流地址。
   */
  PushUrl?: string
}

/**
 * CopyProject请求参数结构体
 */
export interface CopyProjectRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 被复制的项目 ID。
   */
  ProjectId: string
  /**
   * 复制后的项目名称，不填为原项目名称+"(副本)"。
   */
  Name?: string
  /**
   * 复制后的项目归属者，不填为原项目归属者。
   */
  Owner?: Entity
  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * 搜索空间
 */
export interface SearchScope {
  /**
   * 分类路径归属。
   */
  Owner: Entity
  /**
   * 按分类路径检索。 不填则默认按根分类路径检索。
   */
  ClassPath?: string
}

/**
 * 点播文件播放信息，包含当前在播地址和该地址已播时长 。
 */
export interface VodPullInputPlayInfo {
  /**
   * 当前正在播放文件 Url 。
   */
  Url: string
  /**
   * 点播文件已播放时长，单位：秒。
   */
  TimeOffset: number
}

/**
 * RevokeResourceAuthorization返回参数结构体
 */
export interface RevokeResourceAuthorizationResponse {
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
   * 符合搜索条件的记录总数。
   */
  TotalCount?: number
  /**
   * 任务基础信息列表。
   */
  TaskBaseInfoSet?: Array<TaskBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 项目信息。
 */
export interface ProjectInfo {
  /**
   * 项目 Id。
   */
  ProjectId: string
  /**
   * 项目名称。
   */
  Name: string
  /**
   * 画布宽高比。
   */
  AspectRatio: string
  /**
   * 项目类别，取值有：
<li>VIDEO_EDIT：视频编辑。</li>
<li>SWITCHER：导播台。</li>
<li>VIDEO_SEGMENTATION：视频拆条。</li>
<li>STREAM_CONNECT：云转推。</li>
<li>RECORD_REPLAY：录制回放。</li>
   */
  Category: string
  /**
   * 归属者。
   */
  Owner: Entity
  /**
   * 项目封面图片地址。
   */
  CoverUrl: string
  /**
   * 云转推项目信息，仅当项目类别取值 STREAM_CONNECT 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamConnectProjectInfo: StreamConnectProjectInfo
  /**
   * 点播转直播项目信息，仅当项目类别取值为 MEDIA_CAST 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MediaCastProjectInfo: MediaCastProjectInfo
  /**
   * 项目更新时间，格式按照 ISO 8601 标准表示。
   */
  UpdateTime: string
  /**
   * 项目创建时间，格式按照 ISO 8601 标准表示。
   */
  CreateTime: string
}

/**
 * 视频轨的视频片段信息。
 */
export interface VideoTrackItem {
  /**
   * 视频媒体来源类型，取值有：
<ul>
<li>VOD ：媒体来源于云点播文件 。</li>
<li>CME ：视频来源制作云媒体文件。</li>
<li>EXTERNAL ：视频来源于媒资绑定，如果媒体不是存储在腾讯云点播中或者云创中，都需要使用媒资绑定。</li>
</ul>
   */
  SourceType: string
  /**
   * 视频媒体，可取值为：
<ul>
<li>当 SourceType 为 VOD 时，参数填云点播 FileId ；</li>
<li>当 SourceType 为 CME 时，参数填多媒体创作引擎媒体 Id；</li>
<li>当 SourceType 为 EXTERNAL 时，目前仅支持外部媒体 URL(如`https://www.example.com/a.mp4`)，参数填写规则请参见注意事项。</li>
</ul>

注意：
<li>当 SourceType 为 EXTERNAL 并且媒体 URL Scheme 为 `https` 时(如：`https://www.example.com/a.mp4`)，参数为：`1000000:www.example.com/a.mp4`。</li>
<li>当 SourceType 为 EXTERNAL 并且媒体 URL Scheme 为 `http` 时(如：`http://www.example.com/b.mp4`)，参数为：`1000001:www.example.com/b.mp4`。</li>
   */
  SourceMedia: string
  /**
   * 视频片段取自媒体文件的起始时间，单位为秒。默认为0。
   */
  SourceMediaStartTime?: number
  /**
   * 视频片段时长，单位为秒。默认取视频媒体文件本身长度，表示截取全部媒体文件。如果源文件是图片，Duration需要大于0。
   */
  Duration?: number
  /**
   * 视频片段原点距离画布原点的水平位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布口宽度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 XPos 单位为像素，如 100px 表示 XPos 为100像素。</li>
默认值：0px。
   */
  XPos?: string
  /**
   * 视频片段原点距离画布原点的垂直位置。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
<li>当字符串以 px 结尾，表示视频片段 YPos 单位为像素，如 100px 表示 YPos 为100像素。</li>
默认值：0px。
   */
  YPos?: string
  /**
   * 视频原点位置，取值有：
<li>Center：坐标原点为中心位置，如画布中心。</li>
默认值 ：Center。
   */
  CoordinateOrigin?: string
  /**
   * 视频片段的高度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%；</li>
<li>当字符串以 px 结尾，表示视频片段 Height 单位为像素，如 100px 表示 Height 为100像素；</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取视频媒体文件本身的 Width、Height；</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放；</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
   */
  Height?: string
  /**
   * 视频片段的宽度。支持 %、px 两种格式：
<li>当字符串以 % 结尾，表示视频片段 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%；</li>
<li>当字符串以 px 结尾，表示视频片段 Width 单位为像素，如 100px 表示 Width 为100像素；</li>
<li>当 Width、Height 均为空，则 Width 和 Height 取视频媒体文件本身的 Width、Height；</li>
<li>当 Width 为空，Height 非空，则 Width 按比例缩放；</li>
<li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
   */
  Width?: string
}

/**
 * DeleteTeam请求参数结构体
 */
export interface DeleteTeamRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 要删除的团队  ID。
   */
  TeamId: string
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以删除所有团队。如果指定操作者，则操作者必须为团队所有者。
   */
  Operator?: string
}

/**
 * DescribeTeams请求参数结构体
 */
export interface DescribeTeamsRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 团队 ID 列表，限30个。若不填，则默认获取平台下所有团队。
   */
  TeamIds?: Array<string>
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：20，最大值：30。
   */
  Limit?: number
}

/**
 * 平台信息。
 */
export interface PlatformInfo {
  /**
   * 平台标识。
   */
  Platform: string
  /**
   * 平台描述。
   */
  Description: string
  /**
   * 云点播子应用 Id。
   */
  VodSubAppId: number
  /**
   * 平台绑定的 license Id。
   */
  LicenseId: string
  /**
   * 平台状态，可取值为：
<li>Normal：正常，可使用。；</li>
<li>Stopped：已停用，暂无法使用；</li>
<li>Expired：已过期，需要重新购买会员包。</li>
   */
  Status: string
  /**
   * 创建时间，格式按照 ISO 8601 标准表示。
   */
  CreateTime: string
  /**
   * 更新时间，格式按照 ISO 8601 标准表示。
   */
  UpdateTime: string
}

/**
 * HandleMediaCastProject返回参数结构体
 */
export interface HandleMediaCastProjectResponse {
  /**
   * 播放信息，Operation 为 DescribePlayInfo 时返回。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PlayInfo?: MediaCastPlayInfo
  /**
   * 输入源信息， Operation 为 AddSource 时返回添加成功的输入源信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceInfoSet?: Array<MediaCastSourceInfo>
  /**
   * 输出源信息， Operation 为 AddDestination 时返回添加成功的输出源信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestinationInfoSet?: Array<MediaCastDestinationInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 链接类型的素材信息
 */
export interface LinkMaterial {
  /**
   * 链接类型取值:
<li>CLASS: 分类链接;</li>
<li> MATERIAL：素材链接。</li>
   */
  LinkType: string
  /**
   * 链接状态取值：
<li> Normal：正常 ；</li>
<li>NotFound：链接目标不存在；</li> <li>Forbidden：无权限。</li>
   */
  LinkStatus: string
  /**
   * 素材链接详细信息，当LinkType="MATERIAL"时有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkMaterialInfo: LinkMaterialInfo
  /**
   * 分类链接目标信息，当LinkType=“CLASS”时有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkClassInfo: ClassInfo
}

/**
 * 导播台项目输入信息
 */
export interface SwitcherProjectInput {
  /**
   * 导播台停止时间，格式按照 ISO 8601 标准表示。若不填，该值默认为当前时间加七天。
   */
  StopTime?: string
  /**
   * 导播台主监输出配置信息。若不填，默认输出 720P。
   */
  PgmOutputConfig?: SwitcherPgmOutputConfig
}

/**
 * FlattenListMedia请求参数结构体
 */
export interface FlattenListMediaRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 媒体分类路径，例如填写"/a/b"，则代表平铺该分类路径下及其子分类路径下的媒体信息。
   */
  ClassPath: string
  /**
   * 媒体分类的归属者。
   */
  Owner: Entity
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：50。
   */
  Limit?: number
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以平铺查询任意分类下的媒体信息。如果指定操作者，则操作者必须对当前分类有读权限。
   */
  Operator?: string
}

/**
 * 点播转直播输出源状态信息。
 */
export interface MediaCastDestinationStatus {
  /**
   * 输出源 Id，由系统分配。
   */
  Id?: string
  /**
   * 输出源直播地址。
   */
  PushUrl: string
  /**
   * 输出源的状态。取值有：
<li> Working ：运行中；</li>
<li> Stopped：停止输出；</li>
<li> Failed：输出失败。</li>
   */
  Status: string
}

/**
 * 直播推流信息，包括推流地址有效时长，多媒体创作引擎后端生成直播推流地址。
 */
export interface RtmpPushInputInfo {
  /**
   * 直播推流地址有效期，单位：秒 。
   */
  ExpiredSecond: number
  /**
   * 直播推流地址，入参不填默认由多媒体创作引擎生成。
   */
  PushUrl?: string
}

/**
 * 音频素材信息
 */
export interface AudioMaterial {
  /**
   * 素材元信息。
   */
  MetaData: MediaMetaData
  /**
   * 素材媒体文件的播放 URL 地址。
   */
  MaterialUrl: string
  /**
   * 素材媒体文件的封面图片地址。
   */
  CoverUrl: string
  /**
   * 素材状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialStatus: MaterialStatus
  /**
   * 素材媒体文件的原始 URL 地址。
   */
  OriginalUrl: string
  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string
}

/**
 * 添加的团队成员信息
 */
export interface AddMemberInfo {
  /**
   * 团队成员 ID。
   */
  MemberId: string
  /**
   * 团队成员备注。
   */
  Remark?: string
  /**
   * 团队成员角色，不填则默认添加普通成员。可选值：
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
   */
  Role?: string
}

/**
 * 用于描述资源的归属，归属者为个人或者团队。
 */
export interface Entity {
  /**
   * 类型，取值有：
<li>PERSON：个人。</li>
<li>TEAM：团队。</li>
   */
  Type: string
  /**
   * Id，当 Type=PERSON，取值为用户 Id，当 Type=TEAM，取值为团队 Id。
   */
  Id: string
}

/**
 * 点播转直播项目输入信息。
 */
export interface MediaCastProjectInput {
  /**
   * 输入源列表。输入源列表最大个数为100.
   */
  SourceInfos?: Array<MediaCastSourceInfo>
  /**
   * 输出源列表。输出源列表最大个数为10.
   */
  DestinationInfos?: Array<MediaCastDestinationInfo>
  /**
   * 输出媒体配置。
   */
  OutputMediaSetting?: MediaCastOutputMediaSetting
  /**
   * 播放控制参数。
   */
  PlaySetting?: MediaCastPlaySetting
}

/**
 * 点播转直播视频配置
 */
export interface MediaCastVideoSetting {
  /**
   * 视频宽度，单位：px，默认值为1280。
   */
  Width: number
  /**
   * 视频高度，单位：px，默认值为720。支持的视频分辨率最大为1920*1080。
   */
  Height: number
  /**
   * 视频码率，单位：kbps，默认值为2500。最大值为10000 kbps。
   */
  Bitrate?: number
  /**
   * 视频帧率，单位：Hz，默认值为25。最大值为60。
   */
  FrameRate?: number
}

/**
 * ExportVideoByEditorTrackData请求参数结构体
 */
export interface ExportVideoByEditorTrackDataRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 导出视频预设配置 Id，推荐优先使用下面的默认预设配置 Id，有其他需求可通过接口定制预设配置。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
   */
  Definition: number
  /**
   * 导出目标，指定导出视频的目标媒资库，可取值有：
<li>CME：多媒体创建引擎，即导出到多媒体创作引擎媒资库，此导出目标在云点播媒资库依然可见；</li>
<li>VOD：云点播，即导出为云点播媒资库，此导出目标在多媒体创作引擎媒资库将不可见。</li>
   */
  ExportDestination: string
  /**
   * 轨道数据，用于描述待导出视频的内容。关于轨道数据的格式请查看 [视频合成协议](https://cloud.tencent.com/document/product/1156/51225)。文档中也描述了如何在页面上查看一个剪辑项目的轨道数据，该能力可以帮助开发者更方便地构造自己的轨道数据。
   */
  TrackData: string
  /**
   * 轨道数据对应的画布宽高比，配合预设配置中的视频短边尺寸，可决定导出画面的尺寸。例：
<li>如果 AspectRatio 取值 16:9，预设配置选为12（短边1080），则导出尺寸为 1920 * 1080；</li>
<li>如果 AspectRatio 取值 9:16，预设配置选为11（短边720），则导出尺寸为 720 *1280。</li>
   */
  AspectRatio?: string
  /**
   * 视频封面图片文件（如 jpeg, png 等）进行 Base64 编码后的字符串，仅支持 gif、jpeg、png 三种图片格式，原图片文件不能超过2 M大 小。
   */
  CoverData?: string
  /**
   * 导出的多媒体创作引擎媒体信息。当导出目标为 CME 时必填。
   */
  CMEExportInfo?: CMEExportInfo
  /**
   * 导出的云点播媒资信息。当导出目标为 VOD 时必填。
   */
  VODExportInfo?: VODExportInfo
  /**
   * 视频导出扩展参数。可以覆盖导出模板中的参数，灵活的指定导出规格及参数。
   */
  ExportExtensionArgs?: VideoExportExtensionArgs
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，无权限限制。如果指定操作者，轨道数据中使用的媒资该操作者需要拥有使用权限。
   */
  Operator?: string
}

/**
 * 素材标签信息
 */
export interface MaterialTagInfo {
  /**
   * 标签类型，取值为：
<li>PRESET：预置标签；</li>
   */
  Type: string
  /**
   * 标签 Id 。当标签类型为 PRESET 时，标签 Id 为预置标签 Id 。
   */
  Id: string
  /**
   * 标签名称。
   */
  Name: string
}

/**
 * 项目导出信息。
 */
export interface VideoEditProjectOutput {
  /**
   * 导出的多媒体创作引擎媒体 Id，仅当导出目标为多媒体创作引擎媒体时有效。
   */
  MaterialId?: string
  /**
   * 云点播媒资 FileId。
   */
  VodFileId?: string
  /**
   * 导出的媒资 URL。
   */
  URL?: string
  /**
   * 元信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetaData?: MediaMetaData
  /**
   * 导出视频的封面图片 URL。
   */
  CoverURL?: string
}

/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
  /**
   * 平台 Id，指定访问的平台。平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 项目名称，不可超过30个字符。
   */
  Name: string
  /**
   * 项目归属者，即项目的所有者，后续操作只有该所有者有权限操作。

注：目前所有项目只能设置归属个人，暂不支持团队项目。
   */
  Owner: Entity
  /**
   * 项目类别，取值有：
<li>VIDEO_EDIT：视频编辑。</li>
<li>SWITCHER：导播台。</li>
<li>VIDEO_SEGMENTATION：视频拆条。</li>
<li>STREAM_CONNECT：云转推。</li>
<li>RECORD_REPLAY：录制回放。</li>
<li>MEDIA_CAST：媒体转推。</li>
   */
  Category: string
  /**
   * 项目模式，一个项目可以有多种模式并相互切换。
当 Category 为 VIDEO_EDIT 时，可选模式有：
<li>Default：默认模式，即普通视频编辑项目。</li>
<li>VideoEditTemplate：剪辑模板制作模式，用于制作剪辑模板。</li>

注：不填则为默认模式。
   */
  Mode?: string
  /**
   * 画布宽高比。
该字段已经废弃，请使用具体项目输入中的 AspectRatio 字段。
   */
  AspectRatio?: string
  /**
   * 项目描述信息。
   */
  Description?: string
  /**
   * 导播台项目输入信息，仅当项目类型为 SWITCHER 时必填。
   */
  SwitcherProjectInput?: SwitcherProjectInput
  /**
   * 直播剪辑项目输入信息，暂未开放，请勿使用。
   */
  LiveStreamClipProjectInput?: LiveStreamClipProjectInput
  /**
   * 视频编辑项目输入信息，仅当项目类型为 VIDEO_EDIT 时必填。
   */
  VideoEditProjectInput?: VideoEditProjectInput
  /**
   * 视频拆条项目输入信息，仅当项目类型为 VIDEO_SEGMENTATION  时必填。
   */
  VideoSegmentationProjectInput?: VideoSegmentationProjectInput
  /**
   * 云转推项目输入信息，仅当项目类型为 STREAM_CONNECT 时必填。
   */
  StreamConnectProjectInput?: StreamConnectProjectInput
  /**
   * 录制回放项目输入信息，仅当项目类型为 RECORD_REPLAY 时必填。
   */
  RecordReplayProjectInput?: RecordReplayProjectInput
  /**
   * 媒体转推项目输入信息，仅当项目类型为 MEDIA_CAST 时必填。
   */
  MediaCastProjectInput?: MediaCastProjectInput
}

/**
 * ModifyMaterial请求参数结构体
 */
export interface ModifyMaterialRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 要修改的媒体 Id。
   */
  MaterialId: string
  /**
   * 媒体归属者。
   */
  Owner?: Entity
  /**
   * 媒体名称，不能超过30个字符，不填则不修改。
   */
  Name?: string
  /**
   * 媒体分类路径，例如填写"/a/b"，则代表该媒体存储的路径为"/a/b"。若修改分类路径，则 Owner 字段必填。
   */
  ClassPath?: string
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以修改任意媒体的信息。如果指定操作者，则操作者必须对媒体有写权限。
   */
  Operator?: string
}

/**
 * 授权者
 */
export interface Authorizer {
  /**
   * 授权者类型，取值有：
<li>PERSON：个人。</li>
<li>TEAM：团队。</li>
   */
  Type: string
  /**
   * Id，当 Type=PERSON，取值为用户 Id。当Type=TEAM，取值为团队 ID。
   */
  Id: string
}

/**
 * DescribePlatforms返回参数结构体
 */
export interface DescribePlatformsResponse {
  /**
   * 符合查询条件的记录总数。
   */
  TotalCount: number
  /**
   * 平台信息列表。
   */
  PlatformInfoSet: Array<PlatformInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 项目 Id，使用项目 Id 进行过滤。
   */
  ProjectId?: string
  /**
   * 任务类型集合，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：视频编辑项目导出。</li>

注：不填不使用任务类型进行过滤。
   */
  TaskTypeSet?: Array<string>
  /**
   * 任务状态集合，取值有：
<li>PROCESSING：处理中；</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>

注：不填则不使用任务状态进行过滤。
   */
  StatusSet?: Array<string>
  /**
   * 分页返回的起始偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 分页返回的记录条数，默认值：10。最大值：20。
   */
  Limit?: number
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以获取所有任务信息。如果指定操作者，则操作者需要是任务发起者。
   */
  Operator?: string
}

/**
 *  点播转直播项目状态变更事件。
 */
export interface ProjectMediaCastStatusChangedEvent {
  /**
   * 项目 Id。
   */
  ProjectId: string
  /**
   * 项目状态，取值有：
<li>Started：点播转直播开始；</li>
<li>Stopped：点播转直播结束；</li>
<li>SourceInterrupted：点播转直播输入断流；</li>
<li>DestinationInterrupted：点播转直播输出断流。</li>
   */
  Status: string
  /**
   * 点播转直播输入断流信息，仅当 Status 取值 SourceInterrupted 时有效。
   */
  SourceInterruptInfo: MediaCastSourceInterruptInfo
  /**
   * 点播转直播输出断流信息，仅当 Status 取值 DestinationInterrupted 时有效。
   */
  DestinationInterruptInfo: MediaCastDestinationInterruptInfo
}

/**
 * 媒体轨道的片段信息
 */
export interface MediaTrackItem {
  /**
   * 片段类型。取值有：
<li>Video：视频片段；</li>
<li>Audio：音频片段；</li>
<li>Empty：空白片段；</li>
<li>Transition：转场。</li>
   */
  Type: string
  /**
   * 视频片段，当 Type = Video 时有效。
   */
  VideoItem?: VideoTrackItem
  /**
   * 音频片段，当 Type = Audio 时有效。
   */
  AudioItem?: AudioTrackItem
  /**
   * 空白片段，当 Type = Empty 时有效。空片段用于时间轴的占位。<li>如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。</li>
<li>使用 EmptyTrackItem 进行占位，来定位某个Item。</li>
   */
  EmptyItem?: EmptyTrackItem
  /**
   * 转场，当 Type = Transition 时有效。
   */
  TransitionItem?: MediaTransitionItem
}

/**
 * 点播转直播输出信息。
 */
export interface MediaCastDestinationInfo {
  /**
   * 输出源 Id。由系统进行分配。
   */
  Id?: string
  /**
   * 输出直播流地址。支持的直播流类型为 RTMP 和 SRT。
   */
  PushUrl?: string
  /**
   * 输出源的名称。
   */
  Name?: string
}

/**
 * DescribeLoginStatus请求参数结构体
 */
export interface DescribeLoginStatusRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 用户 Id 列表，N 从0开始取值，最大19。
   */
  UserIds: Array<string>
}

/**
 * 轨道信息
 */
export interface MediaTrack {
  /**
   * 轨道类型，取值有：
<ul>
<li>Video ：视频轨道。视频轨道由以下 Item 组成：<ul><li>VideoTrackItem</li><li>EmptyTrackItem</li><li>MediaTransitionItem</li></ul> </li>
<li>Audio ：音频轨道。音频轨道由以下 Item 组成：<ul><li>AudioTrackItem</li><li>EmptyTrackItem</li></ul> </li>
</ul>
   */
  Type: string
  /**
   * 轨道上的媒体片段列表。
   */
  TrackItems: Array<MediaTrackItem>
}

/**
 * DeleteLoginStatus返回参数结构体
 */
export interface DeleteLoginStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 微博发布信息。
 */
export interface WeiboPublishInfo {
  /**
   * 视频发布标题。
   */
  Title?: string
  /**
   * 视频发布描述信息。
   */
  Description?: string
  /**
   * 微博可见性，可取值为：
<li>Public：公开，所有人可见；</li>
<li>Private：私有，仅自己可见。</li>

默认为 Public，所有人可见。
   */
  Visible?: string
}

/**
 * 点播转直播输入源信息。
 */
export interface MediaCastSourceInfo {
  /**
   * 输入源 Id，由系统分配。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 输入源的媒体类型，取值有：
<li>CME：多媒体创作引擎的媒体文件；</li>
<li>VOD：云点播的媒资文件。</li>
<li>EXTERNAL：非多媒体创建引擎或者云点播的媒资文件。</li>
   */
  Type?: string
  /**
   * 云点播媒体文件 ID。当 Type = VOD 时必填。
   */
  FileId?: string
  /**
   * 多媒体创作引擎的媒体 ID。当 Type = CME  时必填。
   */
  MaterialId?: string
  /**
   * 文件播放的起始位置，单位：秒。默认为0，从文件头开始播放。当 Type = CME  或者 VOD 时有效。
   */
  Offset?: number
  /**
   * 播放时长，单位：秒。默认播放整个文件。当 Type = CME  或者 VOD 时有效。
   */
  Duration?: number
  /**
   * 外部文件的 Url， Type=EXTERNAL 时必填，可以是点播文件或者直播文件，支持的 Scheme 包括HTTP、HTTPS、RTMP。
   */
  Url?: string
}

/**
 * CreateLink返回参数结构体
 */
export interface CreateLinkResponse {
  /**
   * 新建链接的媒体 Id。
   */
  MaterialId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportVideoByTemplate返回参数结构体
 */
export interface ExportVideoByTemplateResponse {
  /**
   * 导出任务 Id。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 输入流信息。
 */
export interface StreamInputInfo {
  /**
   * 流输入类型，取值：
<li>VodPull ： 点播拉流；</li>
<li>LivePull ：直播拉流；</li>
<li>RtmpPush ： 直播推流。</li>
   */
  InputType: string
  /**
   * 点播拉流信息，当 InputType = VodPull 时必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VodPullInputInfo?: VodPullInputInfo
  /**
   * 直播拉流信息，当 InputType = LivePull  时必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LivePullInputInfo?: LivePullInputInfo
  /**
   * 直播推流信息，当 InputType = RtmpPush 时必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RtmpPushInputInfo?: RtmpPushInputInfo
}

/**
 * ListMedia返回参数结构体
 */
export interface ListMediaResponse {
  /**
   * 符合条件的媒体记录总数。
   */
  MaterialTotalCount?: number
  /**
   * 浏览分类路径下的媒体列表信息。
   */
  MaterialInfoSet?: Array<MaterialInfo>
  /**
   * 浏览分类路径下的一级子类。
   */
  ClassInfoSet?: Array<ClassInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchMaterial返回参数结构体
 */
export interface SearchMaterialResponse {
  /**
   * 符合记录总条数。
   */
  TotalCount?: number
  /**
   * 媒体信息，仅返回基础信息。
   */
  MaterialInfoSet?: Array<MaterialInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云转推输出源信息，包含输出源和输出源转推状态。
 */
export interface StreamConnectOutputInfo {
  /**
   * 输出源。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StreamConnectOutput: StreamConnectOutput
  /**
   * 输出流状态：
<li>On ：开；</li>
<li>Off ：关 。</li>
   */
  PushSwitch: string
}

/**
 * ParseEvent请求参数结构体
 */
export interface ParseEventRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 回调事件内容。
   */
  EventContent: string
}

/**
 * 空的轨道片段，用来进行时间轴的占位。如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。
 */
export interface EmptyTrackItem {
  /**
   * 持续时间，单位为秒。
   */
  Duration: number
}

/**
 * 分类移动事件。
 */
export interface ClassMovedEvent {
  /**
   * 源分类归属。
   */
  SourceOwner: Entity
  /**
   * 源分类路径列表。
   */
  SourceClassPathSet: Array<string>
  /**
   * 目标分类归属。
   */
  DestinationOwner: Entity
  /**
   * 目标分类归属。
   */
  DestinationClassPath: string
}

/**
 * DeleteVideoEncodingPreset请求参数结构体
 */
export interface DeleteVideoEncodingPresetRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 要删除的视频编码配置 ID。
   */
  Id: number
}

/**
 * 媒体导入事件
 */
export interface MaterialImportedEvent {
  /**
   * 导入的媒体信息列表。
   */
  MediaInfoSet: Array<ImportMediaInfo>
  /**
   * 媒体归属。
   */
  Owner: Entity
  /**
   * 媒体分类路径。
   */
  ClassPath: string
}

/**
 * ModifyVideoEncodingPreset返回参数结构体
 */
export interface ModifyVideoEncodingPresetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeJoinTeams请求参数结构体
 */
export interface DescribeJoinTeamsRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 团队成员　ID。
   */
  MemberId: string
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：30，最大值：30。
   */
  Limit?: number
}

/**
 * 点播转直播输入断流信息。
 */
export interface MediaCastSourceInterruptInfo {
  /**
   * 发生断流的输入源信息。
   */
  SourceInfo: MediaCastSourceInfo
  /**
   * 输入源断开原因。取值有：
<li>SystemError：系统错误；</li>
<li>Unknown：未知错误。</li>
   */
  Reason: string
}

/**
 * 视频拆条项目的输入信息。
 */
export interface VideoSegmentationProjectInput {
  /**
   * 画布宽高比，取值有：
<li>16:9；</li>
<li>9:16；</li>
<li>2:1。</li>
默认值 16:9 。
   */
  AspectRatio?: string
  /**
   * 视频拆条处理模型，不填则默认为手工分割视频。取值 ：
<li>AI.GameHighlights.PUBG：和平精英集锦 ;</li>
<li>AI.GameHighlights.Honor OfKings：王者荣耀集锦 ;</li>
<li>AI.SportHighlights.Football：足球集锦 </li>
<li>AI.SportHighlights.Basketball：篮球集锦 ；</li>
<li>AI.PersonSegmentation：人物集锦  ;</li>
<li>AI.NewsSegmentation：新闻拆条。</li>
   */
  ProcessModel?: string
}

/**
 * DeleteMaterial请求参数结构体
 */
export interface DeleteMaterialRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 媒体 Id。
   */
  MaterialId: string
  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验媒体删除权限。
   */
  Operator?: string
}

/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * 项目 Id。
   */
  ProjectId?: string
  /**
   * <li> 当 Catagory 为 STREAM_CONNECT 时，数组返回长度为2 ，第0个代表主输入源推流信息，第1个代表备输入源推流信息。只有当各自输入源类型为推流时才有有效内容。</li>
   */
  RtmpPushInputInfoSet?: Array<RtmpPushInputInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频编辑项目输入参数
 */
export interface VideoEditProjectInput {
  /**
   * 画布宽高比，取值有：
<li>16:9；</li>
<li>9:16；</li>
<li>2:1。</li>
默认值 16:9 。
   */
  AspectRatio?: string
  /**
   * 视频编辑模板媒体 ID ，通过模板媒体导入项目轨道数据时填写。
   */
  VideoEditTemplateId?: string
  /**
   * 输入的媒体轨道列表，包括视频、音频，等媒体组成的多个轨道信息。其中：<li>输入的多个轨道在时间轴上和输出媒体文件的时间轴对齐；</li><li>时间轴上相同时间点的各个轨道的素材进行重叠，视频或者图片按轨道顺序进行图像的叠加，轨道顺序高的素材叠加在上面，音频素材进行混音；</li><li>视频、音频，每一种类型的轨道最多支持10个。</li>
注：当从模板导入项目时（即 VideoEditTemplateId 不为空时），该参数无效。
   */
  InitTracks?: Array<MediaTrack>
}

/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频编码配置中的视频设置信息
 */
export interface VideoEncodingPresetVideoSetting {
  /**
   * 视频流的编码格式，可选值：
<li>H264：H.264 编码。</li>
   */
  Codec?: string
  /**
   * 视频短边尺寸，取值范围： [128, 4096]，单位：px。
视频最后的分辨率，根据短边尺寸和宽高比进行计算。
例：如果项目的宽高比是 16：9 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1920 * 1080。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 1280 * 720。</li>
如果项目的宽高比是 9：16 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1080 * 1920。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 720 * 1280。</li>
默认值：1080。
   */
  ShortEdge?: number
  /**
   * 指定码率，单位 bps。当该参数为'0'时则不强制限定码率。
默认值：0。
   */
  Bitrate?: number
}

/**
 * 雪碧图
 */
export interface MediaImageSpriteInfo {
  /**
   * 雪碧图小图的高度。
   */
  Height: number
  /**
   * 雪碧图小图的宽度。
   */
  Width: number
  /**
   * 雪碧图小图的总数量。
   */
  TotalCount: number
  /**
   * 截取雪碧图输出的地址。
   */
  ImageUrlSet: Array<string>
  /**
   * 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
   */
  WebVttUrl: string
}

/**
 * DeleteClass请求参数结构体
 */
export interface DeleteClassRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 归属者。
   */
  Owner: Entity
  /**
   * 分类路径。
   */
  ClassPath: string
  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * CreateLink请求参数结构体
 */
export interface CreateLinkRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 链接类型，可取值有:
<li>CLASS: 分类链接；</li>
<li> MATERIAL：媒体文件链接。</li>
   */
  Type: string
  /**
   * 链接名称，不能超过30个字符。
   */
  Name: string
  /**
   * 链接归属者。
   */
  Owner: Entity
  /**
   * 目标资源Id。可取值有：
<li>当 Type 为 MATERIAL 时填媒体 ID；</li>
<li>当 Type 为 CLASS 时填写分类路径。</li>
   */
  DestinationId: string
  /**
   * 目标资源归属者。
   */
  DestinationOwner: Entity
  /**
   * 链接的分类路径，如填"/a/b"则代表链接属于该分类路径，不填则默认为根路径。
   */
  ClassPath?: string
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以创建任意源及目标资源的链接。如果指定操作者，则操作者必须对源资源有读权限，对目标媒体有写权限。
   */
  Operator?: string
}

/**
 * CreateClass请求参数结构体
 */
export interface CreateClassRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 归属者。
   */
  Owner: Entity
  /**
   * 分类路径。
   */
  ClassPath: string
  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验分类创建权限。
   */
  Operator?: string
}

/**
 * DescribeMaterials返回参数结构体
 */
export interface DescribeMaterialsResponse {
  /**
   * 媒体列表信息。
   */
  MaterialInfoSet?: Array<MaterialInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVideoEncodingPreset返回参数结构体
 */
export interface CreateVideoEncodingPresetResponse {
  /**
   * 模板 ID。
   */
  Id: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频编码配置的视频设置更新信息
 */
export interface VideoEncodingPresetVideoSettingForUpdate {
  /**
   * 视频短边尺寸，取值范围： [128, 4096]，单位：px。
视频最后的分辨率，根据短边尺寸和宽高比进行计算。
例：如果项目的宽高比是 16：9 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1920 * 1080。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 1280 * 720。</li>
如果项目的宽高比是 9：16 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1080 * 1920。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 720 * 1280。</li>
不填则不修改。
   */
  ShortEdge?: number
  /**
   * 指定码率，单位 bps。当该参数为'0' 时则不强制限定码率。
不填则不修改。
   */
  Bitrate?: number
  /**
   * 指定帧率。单位 Hz。
不填则不修改。
   */
  FrameRate?: number
}

/**
 * GrantResourceAuthorization返回参数结构体
 */
export interface GrantResourceAuthorizationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 导播台主监输出配置信息
 */
export interface SwitcherPgmOutputConfig {
  /**
   * 导播台输出模板 ID，可取值：
<li>10001：分辨率为1080 P；</li>
<li>10002：分辨率为720 P；</li>
<li>10003：分辨率为480 P。</li>
   */
  TemplateId?: number
  /**
   * 导播台输出宽，单位：像素。
   */
  Width?: number
  /**
   * 导播台输出高，单位：像素。
   */
  Height?: number
  /**
   * 导播台输出帧率，单位：帧/秒
   */
  Fps?: number
  /**
   * 导播台输出码率， 单位：bit/s。
   */
  BitRate?: number
}

/**
 * 用于描述资源
 */
export interface Resource {
  /**
   * 类型，取值有：
<li>MATERIAL：素材。</li>
<li>CLASS：分类。</li>
   */
  Type: string
  /**
   * 资源 Id，当 Type 为 MATERIAL 时，取值为素材 Id；当 Type 为 CLASS 时，取值为分类路径 ClassPath。
   */
  Id: string
}

/**
 * 多媒体创作引擎导出信息。
 */
export interface CMEExportInfo {
  /**
   * 导出媒体归属，个人或团队。
   */
  Owner: Entity
  /**
   * 导出的媒体名称，不得超过30个字符。
   */
  Name?: string
  /**
   * 导出的媒体信息，不得超过50个字符。
   */
  Description?: string
  /**
   * 导出的媒体分类路径，长度不能超过15字符。不存在默认创建。
   */
  ClassPath?: string
  /**
   * 导出的媒体标签，单个标签不得超过10个字符。
   */
  TagSet?: Array<string>
  /**
   * 第三方平台发布信息列表。暂未正式对外，请勿使用。
   */
  ThirdPartyPublishInfos?: Array<ThirdPartyPublishInfo>
}

/**
 * MoveResource请求参数结构体
 */
export interface MoveResourceRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 待移动的原始资源信息，包含原始媒体或分类资源，以及资源归属。
   */
  SourceResource: ResourceInfo
  /**
   * 目标信息，包含分类及归属，仅支持移动资源到分类。
   */
  DestinationResource: ResourceInfo
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以移动任务资源。如果指定操作者，则操作者必须对源及目标资源有写权限。
   */
  Operator?: string
}

/**
 * 直播拉流信息
 */
export interface LivePullInputInfo {
  /**
   * 直播拉流地址。
   */
  InputUrl: string
}

/**
 * ImportMediaToProject请求参数结构体
 */
export interface ImportMediaToProjectRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 项目 Id。
   */
  ProjectId: string
  /**
   * 导入媒资类型，取值：
<li>VOD：云点播文件；</li>
<li>EXTERNAL：媒资绑定。</li>

注意：如果不填默认为云点播文件，如果媒体存储在非腾讯云点播中，都需要使用媒资绑定。
   */
  SourceType?: string
  /**
   * 云点播媒资文件 Id，当 SourceType 取值 VOD 或者缺省的时候必填。
   */
  VodFileId?: string
  /**
   * 原始媒资文件信息，当 SourceType 取值 EXTERNAL 的时候必填。
   */
  ExternalMediaInfo?: ExternalMediaInfo
  /**
   * 媒体名称，不能超过30个字符。如果不填，则媒体名称为点播媒资文件名称。
   */
  Name?: string
  /**
   * 媒体预处理配置 ID，取值：
<li>10：进行视频编辑预处理。</li>

注意：如果填0或者不填则不进行处理，如果原始视频不可在浏览器直接播放将无法在编辑页面编辑。
   */
  PreProcessDefinition?: number
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以向所有视频编辑项目导入媒体；如果指定操作者，则操作者必须为项目所有者。
   */
  Operator?: string
}

/**
 * 云点播导出信息。
 */
export interface VODExportInfo {
  /**
   * 导出的媒资名称。
   */
  Name?: string
  /**
   * 导出的媒资分类 Id。
   */
  ClassId?: number
  /**
   * 第三方平台发布信息列表。暂未正式对外，请勿使用。
   */
  ThirdPartyPublishInfos?: Array<ThirdPartyPublishInfo>
}

/**
 * 排序
 */
export interface SortBy {
  /**
   * 排序字段。
   */
  Field: string
  /**
   * 排序方式，可选值：Asc（升序）、Desc（降序），默认降序。
   */
  Order?: string
}

/**
 * 企鹅号发布信息。
 */
export interface PenguinMediaPlatformPublishInfo {
  /**
   * 视频发布标题。
   */
  Title?: string
  /**
   * 视频发布描述信息。
   */
  Description?: string
  /**
   * 视频标签。
   */
  Tags?: Array<string>
  /**
   * 视频分类，详见[企鹅号官网](https://open.om.qq.com/resources/resourcesCenter)视频分类。
   */
  Category?: number
}

/**
 * 图片素材信息
 */
export interface ImageMaterial {
  /**
   * 图片高度，单位：px。
   */
  Height: number
  /**
   * 图片宽度，单位：px。
   */
  Width: number
  /**
   * 素材媒体文件的展示 URL 地址。
   */
  MaterialUrl: string
  /**
   * 图片大小，单位：字节。
   */
  Size: number
  /**
   * 素材媒体文件的原始 URL 地址。
   */
  OriginalUrl: string
  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string
}

/**
 * DescribeClass请求参数结构体
 */
export interface DescribeClassRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 归属者。
   */
  Owner: Entity
  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * DescribeSharedSpace返回参数结构体
 */
export interface DescribeSharedSpaceResponse {
  /**
   * 查询到的共享空间总数。
   */
  TotalCount: number
  /**
   * 各个共享空间对应的授权者信息。
   */
  AuthorizerSet: Array<Authorizer>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
  /**
   * 符合搜索条件的记录总数。
   */
  TotalCount?: number
  /**
   * 账号信息列表。
   */
  AccountInfoSet?: Array<AccountInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MoveResource返回参数结构体
 */
export interface MoveResourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MoveClass请求参数结构体
 */
export interface MoveClassRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 归属者。
   */
  Owner: Entity
  /**
   * 源分类路径。
   */
  SourceClassPath: string
  /**
   * 目标分类路径。
   */
  DestinationClassPath: string
  /**
   * 操作者。填写用户的 Id，用于标识调用者及校验操作权限。
   */
  Operator?: string
}

/**
 * 文本类型卡槽信息。
 */
export interface TextSlotInfo {
  /**
   * 文本内容。
   */
  Text?: string
}

/**
 * DeleteTeamMembers返回参数结构体
 */
export interface DeleteTeamMembersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MoveClass返回参数结构体
 */
export interface MoveClassResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportMediaToProject返回参数结构体
 */
export interface ImportMediaToProjectResponse {
  /**
   * 媒体 Id。
   */
  MaterialId?: string
  /**
   * 媒体预处理任务 ID，如果未指定发起预处理任务则为空。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTeamMember返回参数结构体
 */
export interface ModifyTeamMemberResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTeamMembers返回参数结构体
 */
export interface DescribeTeamMembersResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount: number
  /**
   * 团队成员列表。
   */
  MemberSet: Array<TeamMemberInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddTeamMember返回参数结构体
 */
export interface AddTeamMemberResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTeam返回参数结构体
 */
export interface CreateTeamResponse {
  /**
   * 创建的团队 ID。
   */
  TeamId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTeam请求参数结构体
 */
export interface ModifyTeamRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 团队 ID。
   */
  TeamId: string
  /**
   * 团队名称。团队名称不能置空，并且不能超过30个字符。
   */
  Name?: string
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以修改所有团队的信息。如果指定操作者，则操作者必须为团队管理员或者所有者。
   */
  Operator?: string
}

/**
 * ModifyTeamMember请求参数结构体
 */
export interface ModifyTeamMemberRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 团队 ID。
   */
  TeamId: string
  /**
   * 团队成员 ID。
   */
  MemberId: string
  /**
   * 成员备注，长度不能超过15个字符。
   */
  Remark?: string
  /**
   * 成员角色，可取值有：
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
   */
  Role?: string
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以修改任意团队成员的信息。如果指定操作者，则操作者必须为团队的管理员或者所有者。
   */
  Operator?: string
}

/**
 * 媒体移动事件
 */
export interface MaterialMovedEvent {
  /**
   * 要移动的媒体 Id 列表。
   */
  MaterialIdSet: Array<string>
  /**
   * 源媒体归属。
   */
  SourceOwner: Entity
  /**
   * 源媒体分类路径。
   */
  SourceClassPath: string
  /**
   * 目标媒体分类归属。
   */
  DestinationOwner: Entity
  /**
   * 目标媒体分类路径。
   */
  DestinationClassPath: string
}

/**
 * CreateTeam请求参数结构体
 */
export interface CreateTeamRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 团队名称，限30个字符。
   */
  Name: string
  /**
   * 团队所有者，指定用户 ID。
   */
  OwnerId: string
  /**
   * 团队所有者的备注，限30个字符。
   */
  OwnerRemark?: string
  /**
   * 自定义团队 ID。创建后不可修改，限20个英文字符及"-"。同时不能以 cmetid_开头。不填会生成默认团队 ID。
   */
  TeamId?: string
}

/**
 * 媒体基本信息。
 */
export interface MaterialBasicInfo {
  /**
   * 媒体 Id。
   */
  MaterialId: string
  /**
   * 媒体类型，取值为：
<li> AUDIO :音频;</li>
<li> VIDEO :视频;</li>
<li> IMAGE :图片;</li>
<li> LINK  :链接.</li>
<li> OTHER : 其他.</li>
   */
  MaterialType: string
  /**
   * 媒体归属实体。
   */
  Owner: Entity
  /**
   * 媒体名称。
   */
  Name: string
  /**
   * 媒体文件的创建时间，使用 ISO 日期格式。
   */
  CreateTime: string
  /**
   * 媒体文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 ISO 日期格式。
   */
  UpdateTime: string
  /**
   * 媒体的分类路径。
   */
  ClassPath: string
  /**
   * 预置标签列表。
   */
  PresetTagSet: Array<PresetTagInfo>
  /**
   * 人工标签列表。
   */
  TagSet: Array<string>
  /**
   * 媒体文件的预览图。
   */
  PreviewUrl: string
  /**
   * 媒体绑定的标签信息列表 。
该字段已废弃。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagInfoSet: Array<MaterialTagInfo>
}

/**
 * 视频导出完成事件。
 */
export interface VideoExportCompletedEvent {
  /**
   * 任务 Id。
   */
  TaskId: string
  /**
   * 任务状态，取值有：
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
   */
  Status: string
  /**
   * 错误码，取值有：
<li>0：成功；</li>
<li>其他值：失败。</li>
   */
  ErrCode: number
  /**
   * 错误信息。
   */
  ErrMsg: string
  /**
   * 任务输出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output: VideoEditProjectOutput
}

/**
 * 资源信息，包含资源以及归属信息
 */
export interface ResourceInfo {
  /**
   * 媒资和分类资源。
   */
  Resource: Resource
  /**
   * 资源归属，个人或团队。
   */
  Owner: Entity
}

/**
 * 媒体处理视频合成任务的预处理操作。
 */
export interface MediaPreprocessOperation {
  /**
   * 预处理操作的类型，取值范围：
<li>ImageTextMask：图片文字遮罩。</li>
   */
  Type: string
  /**
   * 预处理操作参数。
当 Type 取值 ImageTextMask 时，参数为要保留的文字。
   */
  Args?: Array<string>
}

/**
 * 云转推输出断流信息
 */
export interface StreamConnectOutputInterruptInfo {
  /**
   * 云转推输出标识。
   */
  Id: string
  /**
   * 云转推输出名称。
   */
  Name: string
  /**
   * 云转推输出地址。
   */
  Url: string
}

/**
 * 加入的团队信息
 */
export interface JoinTeamInfo {
  /**
   * 团队 ID。
   */
  TeamId: string
  /**
   * 团队名称。
   */
  Name: string
  /**
   * 团队成员个数。
   */
  MemberCount: number
  /**
   * 成员在团队中的角色，取值有：
<li>Owner：团队所有者，添加团队成员及修改团队成员解决时不能填此角色；</li>
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
   */
  Role: string
}

/**
 * DescribeResourceAuthorization请求参数结构体
 */
export interface DescribeResourceAuthorizationRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 归属者。
   */
  Owner?: Entity
  /**
   * 资源。
   */
  Resource?: Resource
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以查询任意资源的被授权情况。如果指定操作者，则操作者必须对被授权资源有读权限。
   */
  Operator?: string
}

/**
 * CreateClass返回参数结构体
 */
export interface CreateClassResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 卡槽信息。
 */
export interface SlotInfo {
  /**
   * 卡槽 Id。
   */
  Id?: number
  /**
   * 卡槽类型，可取值有：
<li> AUDIO：音频卡槽，可替换素材类型为 AUDIO 的音频素材;</li>
<li> VIDEO：视频卡槽，可替换素材类型为 VIDEO 的视频素材;</li>
<li> IMAGE：图片卡槽，可替换素材类型为 IMAGE 的图片素材;</li>
<li> TEXT：文本卡槽，可替换文本内容。</li>
   */
  Type?: string
  /**
   * 默认素材ID。当卡槽类型为 AUDIO，VIDEO，或 IMAGE 中的一种时有效。
   */
  DefaultMaterialId?: string
  /**
   * 默认文本卡槽信息。当卡槽类型为 TEXT 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultTextSlotInfo?: TextSlotInfo
  /**
   * 素材时长，单位秒。
   */
  Duration?: number
  /**
   * 卡槽起始时间，单位秒。
   */
  StartTime?: number
}

/**
 * 媒体替换信息。
 */
export interface MediaReplacementInfo {
  /**
   * 替换的媒体类型，取值有：
<li>CMEMaterialId：替换的媒体类型为媒体 ID；</li>
<li>ImageUrl：替换的媒体类型为图片 URL；</li>

注：默认为 CMEMaterialId 。
   */
  MediaType?: string
  /**
   * 媒体 ID。
当媒体类型取值为 CMEMaterialId 时有效。
   */
  MaterialId?: string
  /**
   * 媒体 URL。
当媒体类型取值为 ImageUrl 时有效，
图片仅支持 jpg、png 格式，且大小不超过 2M 。
   */
  MediaUrl?: string
  /**
   * 替换媒体选取的开始时间，单位为秒，默认为 0。
   */
  StartTimeOffset?: number
  /**
   * 预处理操作。
注：目前该功能暂不支持，请勿使用。
   */
  PreprocessOperation?: MediaPreprocessOperation
}

/**
 * 任务基础信息。
 */
export interface TaskBaseInfo {
  /**
   * 任务 Id。
   */
  TaskId: string
  /**
   * 任务类型，取值有：
<li>VIDEO_EDIT_PROJECT_EXPORT：项目导出。</li>
   */
  TaskType: string
  /**
   * 任务状态，取值有：
<li>PROCESSING：处理中：</li>
<li>SUCCESS：成功；</li>
<li>FAIL：失败。</li>
   */
  Status: string
  /**
   * 任务进度，取值为：0~100。
   */
  Progress: number
  /**
   * 错误码。
<li>0：成功；</li>
<li>其他值：失败。</li>
   */
  ErrCode: number
  /**
   * 错误信息。
   */
  ErrMsg: string
  /**
   * 创建时间，格式按照 ISO 8601 标准表示。
   */
  CreateTime: string
}

/**
 * 录制回放项目输入信息。
 */
export interface RecordReplayProjectInput {
  /**
   * 录制拉流地址。
   */
  PullStreamUrl: string
  /**
   * 录制文件归属者。
   */
  MaterialOwner: Entity
  /**
   * 录制文件存储分类路径。
   */
  MaterialClassPath: string
  /**
   * 回放推流地址。
   */
  PushStreamUrl: string
}

/**
 * 视频流信息。
 */
export interface VideoStreamInfo {
  /**
   * 码率，单位：bps。
   */
  Bitrate: number
  /**
   * 高度，单位：px。
   */
  Height: number
  /**
   * 宽度，单位：px。
   */
  Width: number
  /**
   * 编码格式。
   */
  Codec: string
  /**
   * 帧率，单位：hz。
   */
  Fps: number
}

/**
 * AddTeamMember请求参数结构体
 */
export interface AddTeamMemberRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 团队 ID。
   */
  TeamId: string
  /**
   * 要添加的成员列表，一次最多添加30个成员。
   */
  TeamMembers: Array<AddMemberInfo>
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以向任意团队中添加成员。如果指定操作者，则操作者必须为管理员或者团队所有者。
   */
  Operator?: string
}

/**
 * GrantResourceAuthorization请求参数结构体
 */
export interface GrantResourceAuthorizationRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 资源归属者，个人或者团队。
   */
  Owner: Entity
  /**
   * 被授权资源。
   */
  Resources: Array<Resource>
  /**
   * 被授权目标，个人或者团队。
   */
  Authorizees: Array<Entity>
  /**
   * 详细授权值。 取值有：
<li>R：可读，可以浏览媒体，但不能使用该媒体文件（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
   */
  Permissions: Array<string>
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以授权任意归属者的资源。如果指定操作者，则操作者必须对资源拥有写权限。
   */
  Operator?: string
}

/**
 * 时间范围
 */
export interface TimeRange {
  /**
   * 开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  StartTime: string
  /**
   * 结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  EndTime: string
}

/**
 * 第三方平台视频发布信息。
 */
export interface ThirdPartyPublishInfo {
  /**
   * 发布通道  ID。
   */
  ChannelMaterialId: string
  /**
   * 企鹅号发布信息，如果使用的发布通道为企鹅号时必填。
   */
  PenguinMediaPlatformPublishInfo?: PenguinMediaPlatformPublishInfo
  /**
   * 新浪微博发布信息，如果使用的发布通道为新浪微博时必填。
   */
  WeiboPublishInfo?: WeiboPublishInfo
  /**
   * 快手发布信息，如果使用的发布通道为快手时必填。
   */
  KuaishouPublishInfo?: KuaishouPublishInfo
  /**
   * 腾讯云对象存储发布信息， 如果使用的发布通道为腾讯云对象存储时必填。
   */
  CosPublishInfo?: CosPublishInputInfo
}

/**
 * ListMedia请求参数结构体
 */
export interface ListMediaRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 媒体分类路径，例如填写"/a/b"，则代表浏览该分类路径下的媒体和子分类信息。
   */
  ClassPath: string
  /**
   * 媒体和分类的归属者。
   */
  Owner: Entity
  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：10，最大值：50。
   */
  Limit?: number
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以浏览任意分类的信息。如果指定操作者，则操作者必须对分类有读权限。
   */
  Operator?: string
}

/**
 * DeleteVideoEncodingPreset返回参数结构体
 */
export interface DeleteVideoEncodingPresetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 点播拉流信息，包括输入拉流地址和播放次数。
 */
export interface VodPullInputInfo {
  /**
   * 点播输入拉流 URL 。
   */
  InputUrls: Array<string>
  /**
   * 播放次数，取值有：
<li>-1 : 循环播放，直到转推结束；</li>
<li>0 : 不循环；</li>
<li>大于0 : 具体循环次数，次数和时间以先结束的为准。</li>
默认不循环。
   */
  LoopTimes?: number
}

/**
 * ModifyTeam返回参数结构体
 */
export interface ModifyTeamResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLoginStatus请求参数结构体
 */
export interface DeleteLoginStatusRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 用户 Id 列表，N 从 0 开始取值，最大 19。
   */
  UserIds: Array<string>
}

/**
 * GenerateVideoSegmentationSchemeByAi请求参数结构体
 */
export interface GenerateVideoSegmentationSchemeByAiRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 视频拆条项目 Id 。
   */
  ProjectId: string
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以对任务视频拆条项目发起拆条任务。如果指定操作者，则操作者必须为项目所有者。
   */
  Operator?: string
}

/**
 * 直播剪辑项目输入参数。
 */
export interface LiveStreamClipProjectInput {
  /**
   * 直播流播放地址，目前仅支持 HLS 和 FLV 格式。
   */
  Url: string
  /**
   * 直播流录制时长，单位为秒，最大值为 7200。
   */
  StreamRecordDuration: number
}

/**
 * 媒体更新事件。
 */
export interface MaterialModifiedEvent {
  /**
   * 媒体 Id。
   */
  MaterialId: string
  /**
   * 更新后的媒体名称。如未更新则为空。
   */
  Name: string
  /**
   * 更新后的媒体预置标签列表。如未更新媒体预置标签，则该字段为空数组。
   */
  PresetTagIdSet: Array<string>
  /**
   * 更新后的媒体自定义标签列表。如未更新媒体自定义标签，则该字段为空数组。
   */
  TagSet: Array<string>
}

/**
 * HandleStreamConnectProject返回参数结构体
 */
export interface HandleStreamConnectProjectResponse {
  /**
   * 输入源推流地址，当 Operation 取值 AddInput 且 InputType 为 RtmpPush 类型时有效。
   */
  StreamInputRtmpPushUrl?: string
  /**
   * 点播输入源播放进度信息，当 Operation 取值 DescribeInputPlayInfo 且 InputType 为 VodPull 类型时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VodPullInputPlayInfo?: VodPullInputPlayInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTeamMembers请求参数结构体
 */
export interface DeleteTeamMembersRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 团队 ID。
   */
  TeamId: string
  /**
   * 要删除的成员列表。
   */
  MemberIds: Array<string>
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以删除所有团队的成员。如果指定操作者，则操作者必须为团队管理员或者所有者。
   */
  Operator?: string
}

/**
 * 点播转直播项目信息。
 */
export interface MediaCastProjectInfo {
  /**
   * 点播转直播项目状态，取值有：
<li>Working ：运行中；</li>
<li>Idle ：空闲。</li>
   */
  Status?: string
  /**
   * 输入源列表。
   */
  SourceInfos?: Array<MediaCastSourceInfo>
  /**
   * 输出源列表。
   */
  DestinationInfos?: Array<MediaCastDestinationInfo>
  /**
   * 输出媒体配置。
   */
  OutputMediaSetting?: MediaCastOutputMediaSetting
  /**
   * 播放参数。
   */
  PlaySetting?: MediaCastPlaySetting
  /**
   * 项目启动时间。采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  StartTime?: string
  /**
   * 项目结束时间。采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。如果项目还在运行中，该字段为空。
   */
  StopTime?: string
  /**
   * 推流时长，单位：秒。项目结束后，返回上次项目运行时的推流时长。如果项目是 Working 状态，返回的时长是0。
   */
  Duration?: number
}

/**
 * ExportVideoByTemplate请求参数结构体
 */
export interface ExportVideoByTemplateRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 视频编辑模板  Id。
   */
  TemplateId: string
  /**
   * 导出视频预设配置 Id，推荐优先使用下面的默认预设配置 Id，有其他需求可通过接口定制预设配置。
<li>10：分辨率为 480P，输出视频格式为 MP4；</li>
<li>11：分辨率为 720P，输出视频格式为 MP4；</li>
<li>12：分辨率为 1080P，输出视频格式为 MP4。</li>
   */
  Definition: number
  /**
   * 导出目标，指定导出视频的目标媒资库，可取值有：
<li>CME：多媒体创作引擎，即导出为多媒体创作引擎媒资库，此导出目标在云点播媒资库依然可见；</li>
<li>VOD：云点播，即导出为云点播媒资库，此导出目标在多媒体创作引擎媒资库将不可见。</li>
   */
  ExportDestination: string
  /**
   * 需要替换的素材信息。
   */
  SlotReplacements?: Array<SlotReplacementInfo>
  /**
   * 导出的多媒体创作引擎媒资信息。当导出目标为 CME 时必填。
   */
  CMEExportInfo?: CMEExportInfo
  /**
   * 导出的云点播媒资信息。当导出目标为 VOD 时必填。
   */
  VODExportInfo?: VODExportInfo
  /**
   * 视频导出扩展参数。可以覆盖导出模板中的参数，灵活的指定导出规格及参数。
   */
  ExportExtensionArgs?: VideoExportExtensionArgs
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，无权限限制。如果指定操作者，则操作者需要有替换媒体及剪辑模板的权限。
   */
  Operator?: string
}

/**
 * DescribePlatforms请求参数结构体
 */
export interface DescribePlatformsRequest {
  /**
   * 平台 Id 列表。如果不填，则不按平台 Id 进行过滤。
   */
  Platforms?: Array<string>
  /**
   * 平台绑定的 License Id 列表。如果不填，则不按平台绑定的 License Id 进行过滤。
   */
  LicenseIds?: Array<string>
  /**
   * 分页返回的起始偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 分页返回的记录条数，默认值：10，最大值：20。
   */
  Limit?: number
}

/**
 * 其他类型素材
 */
export interface OtherMaterial {
  /**
   * 素材媒体文件的播放 URL 地址。
   */
  MaterialUrl: string
  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string
}

/**
 * 回调事件内容。
 */
export interface EventContent {
  /**
   * 事件类型，可取值有：
<li>Storage.NewFileCreated：新文件产生事件；</li>
<li>Project.StreamConnect.StatusChanged：云转推项目状态变更事件；</li>
<li>Project.Switcher.StatusChanged：导播台项目状态变更事件；</li>
<li>Material.Imported：媒体导入事件；</li>
<li>Material.Added：媒体添加事件；</li>
<li>Material.Moved：媒体移动事件；</li>
<li>Material.Modified：媒体变更事件；</li>
<li>Material.Deleted：媒体删除事件；</li>
<li>Class.Created：分类新增事件；</li>
<li>Class.Moved：分类移动事件；</li>
<li>Class.Deleted：分类删除事件；</li>
<li>Task.VideoExportCompleted：视频导出完成事件； </li>
<li>Project.MediaCast.StatusChanged：点播转直播项目状态变更事件。 </li>
   */
  EventType: string
  /**
   * 操作者，表示触发事件的操作者。如果是 `cmeid_system` 表示平台管理员操作。
   */
  Operator: string
  /**
   * 新文件产生事件。仅当 EventType 为 Storage.NewFileCreated 时有效。
   */
  StorageNewFileCreatedEvent: StorageNewFileCreatedEvent
  /**
   * 云转推项目状态变更事件。仅当 EventType 为 Project.StreamConnect.StatusChanged 时有效。
   */
  ProjectStreamConnectStatusChangedEvent: ProjectStreamConnectStatusChangedEvent
  /**
   * 导播台项目状态变更事件。仅当 EventType 为 Project.Switcher.StatusChanged 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectSwitcherStatusChangedEvent: ProjectSwitcherStatusChangedEvent
  /**
   * 媒体导入事件。仅当 EventType 为 Material.Imported 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialImportedEvent: MaterialImportedEvent
  /**
   * 媒体添加事件。仅当 EventType 为 Material.Added 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialAddedEvent: MaterialAddedEvent
  /**
   * 媒体移动事件。仅当 EventType 为 Material.Moved 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialMovedEvent: MaterialMovedEvent
  /**
   * 媒体更新事件。仅当 EventType 为 Material.Modified 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialModifiedEvent: MaterialModifiedEvent
  /**
   * 媒体删除事件。仅当 EventType 为 Material.Deleted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialDeletedEvent: MaterialDeletedEvent
  /**
   * 分类创建事件。仅当 EventType 为 Class.Created 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassCreatedEvent: ClassCreatedEvent
  /**
   * 分类移动事件。仅当 EventType 为 Class.Moved 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassMovedEvent: ClassMovedEvent
  /**
   * 分类删除事件。仅当 EventType 为 Class.Deleted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassDeletedEvent: ClassDeletedEvent
  /**
   * 视频导出完成事件。仅当 EventType 为 Task.VideoExportCompleted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoExportCompletedEvent: VideoExportCompletedEvent
  /**
   * 点播转直播项目状态变更事件。仅当 EventType 为 Project.MediaCast.StatusChanged 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectMediaCastStatusChangedEvent: ProjectMediaCastStatusChangedEvent
}

/**
 * 视频素材信息
 */
export interface VideoMaterial {
  /**
   * 素材元信息。
   */
  MetaData: MediaMetaData
  /**
   * 雪碧图信息。
   */
  ImageSpriteInfo: MediaImageSpriteInfo
  /**
   * 素材媒体文件的播放 URL 地址。
   */
  MaterialUrl: string
  /**
   * 素材媒体文件的封面图片地址。
   */
  CoverUrl: string
  /**
   * 媒体文件分辨率。取值为：LD/SD/HD/FHD/2K/4K。
   */
  Resolution: string
  /**
   * 素材状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaterialStatus: MaterialStatus
  /**
   * 素材媒体文件的原始 URL 地址。
   */
  OriginalUrl: string
  /**
   * 云点播媒资 FileId。
   */
  VodFileId: string
}

/**
 * DescribeVideoEncodingPresets返回参数结构体
 */
export interface DescribeVideoEncodingPresetsResponse {
  /**
   * 符合条件的编码配置总个数。
   */
  TotalCount: number
  /**
   * 视频编码配置信息。
   */
  VideoEncodingPresetSet: Array<VideoEncodingPreset>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceAuthorization返回参数结构体
 */
export interface DescribeResourceAuthorizationResponse {
  /**
   * 符合条件的资源授权记录总数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 授权信息列表。
   */
  AuthorizationInfoSet: Array<AuthorizationInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FlattenListMedia返回参数结构体
 */
export interface FlattenListMediaResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount: number
  /**
   * 该分类路径下及其子分类下的所有媒体基础信息列表。
   */
  MaterialInfoSet: Array<MaterialInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 制作云用户账号信息。
 */
export interface AccountInfo {
  /**
   * 用户 Id。
   */
  UserId: string
  /**
   * 用户手机号码。
   */
  Phone: string
  /**
   * 用户昵称。
   */
  Nick: string
  /**
   * 账号状态，取值：
<li>Normal：有效；</li>
<li>Stopped：无效。</li>
   */
  Status: string
}

/**
 * DescribeProjects请求参数结构体
 */
export interface DescribeProjectsRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 项目 Id 过滤参数列表，最大支持20个项目 Id 过滤。如果不填不需要项目 Id 进行过滤。
   */
  ProjectIds?: Array<string>
  /**
   * 画布宽高比过滤参数列表。如果不填则不用画布宽高比进行过滤。
   */
  AspectRatioSet?: Array<string>
  /**
   * 项目类型过滤参数列表，取值有：
<li>VIDEO_EDIT：视频编辑。</li>
<li>SWITCHER：导播台。</li>
<li>VIDEO_SEGMENTATION：视频拆条。</li>
<li>STREAM_CONNECT：云转推。</li>
<li>RECORD_REPLAY：录制回放。</li>
<li>MEDIA_CAST：点播转直播。</li>

注：如果不填则不使用项目类型进行过滤。
   */
  CategorySet?: Array<string>
  /**
   * 项目模式过滤参数列表，一个项目可以有多种模式并相互切换。
当 Category 为 VIDEO_EDIT 时，可选模式有：
<li>Default：默认模式。</li>
<li>VideoEditTemplate：视频编辑模板制作模式。</li>

注：不填不使用项目模式进行过滤。
   */
  Modes?: Array<string>
  /**
   * 结果排序方式，支持下列排序字段：
<li>CreateTime：创建时间；</li>
<li>UpdateTime：更新时间。</li>

注：如不填，则使用项目创建时间倒序排列。
   */
  Sort?: SortBy
  /**
   * 项目所有者，目前仅支持个人项目过滤。
   */
  Owner?: Entity
  /**
   * 分页返回的起始偏移量，默认值：0。
   */
  Offset?: number
  /**
   * 分页返回的记录条数，默认值：10。
   */
  Limit?: number
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以查询一切用户项目信息。如果指定操作者，则操作者必须为项目所有者。
   */
  Operator?: string
}

/**
 * DescribeLoginStatus返回参数结构体
 */
export interface DescribeLoginStatusResponse {
  /**
   * 用户登录状态列表。
   */
  LoginStatusInfoSet?: Array<LoginStatusInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 播放控制参数。
 */
export interface MediaCastPlaySetting {
  /**
   * 循环播放次数。LoopCount 和 EndTime 同时只能有一个生效。默认循环播放次数为一次。如果同时设置了 LoopCount 和 EndTime 参数，优先使用 LoopCount 参数。
   */
  LoopCount?: number
  /**
   * 结束时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  EndTime?: string
  /**
   * 自动启动时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  AutoStartTime?: string
}

/**
 * 媒体添加事件。
 */
export interface MaterialAddedEvent {
  /**
   * 添加的媒体 Id 列表。
   */
  MaterialIdSet: Array<string>
  /**
   * 添加的媒体归属。
   */
  Owner: Entity
  /**
   * 添加的媒体分类路径。
   */
  ClassPath: string
}

/**
 * CreateVideoEncodingPreset请求参数结构体
 */
export interface CreateVideoEncodingPresetRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 配置名，可用来简单描述该配置的作用。
   */
  Name: string
  /**
   * 封装格式，可选值：
<li>mp4 ；</li>
<li>mov 。</li>
默认值：mp4。
   */
  Container?: string
  /**
   * 是否去除视频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
   */
  RemoveVideo?: number
  /**
   * 是否去除音频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
   */
  RemoveAudio?: number
  /**
   * 编码配置的视频设置。默认值参考VideoEncodingPresetVideoSetting 定义。
   */
  VideoSetting?: VideoEncodingPresetVideoSetting
  /**
   * 编码配置的音频设置。默认值参考VideoEncodingPresetAudioSetting 定义。
   */
  AudioSetting?: VideoEncodingPresetAudioSetting
}

/**
 * 云转推项目状态变更事件。
 */
export interface ProjectStreamConnectStatusChangedEvent {
  /**
   * 项目 Id。
   */
  ProjectId: string
  /**
   * 项目状态，取值有：
<li>Working：云转推推流开始；</li>
<li>Stopped：云转推推流结束；</li>
<li>InputInterrupted：云转推输入断流；</li>
<li>OutputInterrupted：云转推输出断流。</li>
   */
  Status: string
  /**
   * 云转推输入断流信息，仅当 Status 取值 InputInterrupted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputInterruptInfo: StreamConnectInputInterruptInfo
  /**
   * 云转推输出断流信息，仅当 Status 取值 OutputInterrupted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputInterruptInfo: StreamConnectOutputInterruptInfo
}

/**
 * DescribeJoinTeams返回参数结构体
 */
export interface DescribeJoinTeamsResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount: number
  /**
   * 团队列表。
   */
  TeamSet: Array<JoinTeamInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTeamMembers请求参数结构体
 */
export interface DescribeTeamMembersRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 团队 ID。
   */
  TeamId: string
  /**
   * 成员 ID 列表，限指定30个指定成员。如不填，则返回指定团队下的所有成员。
   */
  MemberIds?: Array<string>
  /**
   * 分页偏移量，默认值：0
   */
  Offset?: number
  /**
   * 返回记录条数，默认值：30，最大值：30。
   */
  Limit?: number
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以拉取任意团队成员的信息。如果指定操作者，则操作者必须为团队成员。
   */
  Operator?: string
}

/**
 * 素材的状态，目前仅包含素材编辑可用状态。
 */
export interface MaterialStatus {
  /**
   * 素材编辑可用状态，取值有：
<li>NORMAL：正常，可直接用于编辑；</li>
<li>ABNORMAL : 异常，不可用于编辑；</li>
<li>PROCESSING：处理中，暂不可用于编辑。</li>
   */
  EditorUsableStatus: string
}

/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number
  /**
   * 项目信息列表。
   */
  ProjectInfoSet?: Array<ProjectInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源权限信息
 */
export interface AuthorizationInfo {
  /**
   * 被授权者实体。
   */
  Authorizee?: Entity
  /**
   * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中。</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
   */
  PermissionSet?: Array<string>
}

/**
 * 视频编辑模板素材信息。
 */
export interface VideoEditTemplateMaterial {
  /**
   * 视频编辑模板宽高比。
   */
  AspectRatio: string
  /**
   * 卡槽信息。
   */
  SlotSet: Array<SlotInfo>
  /**
   * 模板预览视频 URL 地址 。
   */
  PreviewVideoUrl: string
}

/**
 * 视频导出扩展参数
 */
export interface VideoExportExtensionArgs {
  /**
   * 封装格式，可选值：
<li>mp4 </li>
<li>mov </li>
不填则使用视频导出编码配置。
   */
  Container?: string
  /**
   * 视频短边尺寸，取值范围： [128, 4096]，单位：px。
视频最后的分辨率，根据短边尺寸和宽高比进行计算。
例如：项目的宽高比是 16：9 ：
<li>短边尺寸为 1080，则导出视频的分辨率为 1920 * 1080。</li>
<li>短边尺寸为 720，则导出视频的分辨率为 1280 * 720</li>
不填则使用视频导出编码配置。
   */
  ShortEdge?: number
  /**
   * 指定码率，单位 bps。当该参数为 0 时则不强制限定码率。
不填则使用视频导出编码配置。
   */
  VideoBitrate?: number
  /**
   * 帧率。取值范围：[15, 60]，不填默认值为 25。
   */
  FrameRate?: number
  /**
   * 是否去除视频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
不填则使用视频导出编码配置。
   */
  RemoveVideo?: number
  /**
   * 是否去除音频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
不填则使用视频导出编码配置。
   */
  RemoveAudio?: number
  /**
   * 片段起始时间，单位：毫秒。
   */
  StartTime?: number
  /**
   * 片段结束时间，单位：毫秒。
   */
  EndTime?: number
}

/**
 * 卡槽替换信息。
 */
export interface SlotReplacementInfo {
  /**
   * 卡槽 Id。
   */
  Id: number
  /**
   * 替换类型，可取值有：
<li> AUDIO ：音频；</li>
<li> VIDEO ：视频；</li>
<li> IMAGE ：图片；</li>
<li> TEXT ：文本。</li>
注意：这里必须保证替换的素材类型与模板轨道数据的素材类型一致。如果替换的类型为Text,，则必须保证模板轨道数据中相应卡槽的位置标记的是文本。
   */
  ReplacementType: string
  /**
   * 媒体替换信息，仅当要替换的媒体类型为音频、视频、图片时有效。
   */
  MediaReplacementInfo?: MediaReplacementInfo
  /**
   * 文本替换信息，仅当要替换的卡槽类型为文本时有效。
   */
  TextReplacementInfo?: TextReplacementInfo
}

/**
 * ParseEvent返回参数结构体
 */
export interface ParseEventResponse {
  /**
   * 事件内容。
   */
  EventContent?: EventContent
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMaterial返回参数结构体
 */
export interface DeleteMaterialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevokeResourceAuthorization请求参数结构体
 */
export interface RevokeResourceAuthorizationRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 资源所属实体。
   */
  Owner: Entity
  /**
   * 被授权资源。
   */
  Resources: Array<Resource>
  /**
   * 被授权目标实体。
   */
  Authorizees: Array<Entity>
  /**
   * 详细授权值。 取值有：
<li>R：可读，可以浏览素材，但不能使用该素材（将其添加到 Project），或复制到自己的媒资库中</li>
<li>X：可用，可以使用该素材（将其添加到 Project），但不能将其复制到自己的媒资库中，意味着被授权者无法将该资源进一步扩散给其他个人或团队。</li>
<li>C：可复制，既可以使用该素材（将其添加到 Project），也可以将其复制到自己的媒资库中。</li>
<li>W：可修改、删除媒资。</li>
   */
  Permissions: Array<string>
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，撤销任意资源的授权权限。如果指定操作者，则操作者必须对被授权资源有写权限。
   */
  Operator?: string
}

/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 任务 Id。
   */
  TaskId: string
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以获取任意任务信息。如果指定操作者，则操作者需要是任务发起者。
   */
  Operator?: string
}

/**
 * ModifyVideoEncodingPreset请求参数结构体
 */
export interface ModifyVideoEncodingPresetRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 配置 ID。
   */
  Id: number
  /**
   * 更改后的视频编码配置名，不填则不修改。
   */
  Name?: string
  /**
   * 是否去除视频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
   */
  RemoveVideo?: number
  /**
   * 是否去除音频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
   */
  RemoveAudio?: number
  /**
   * 更改后的编码配置的视频设置。
   */
  VideoSetting?: VideoEncodingPresetVideoSettingForUpdate
  /**
   * 更改后的编码配置的音频设置。
   */
  AudioSetting?: VideoEncodingPresetAudioSettingForUpdate
}

/**
 * 团队成员信息
 */
export interface TeamMemberInfo {
  /**
   * 团队成员 ID。
   */
  MemberId: string
  /**
   * 团队成员备注。
   */
  Remark?: string
  /**
   * 团队成员角色，取值：
<li>Owner：团队所有者，添加团队成员及修改团队成员解决时不能填此角色；</li>
<li>Admin：团队管理员；</li>
<li>Member：普通成员。</li>
   */
  Role?: string
}

/**
 * COS 发布信息。
 */
export interface CosPublishInputInfo {
  /**
   * 发布生成的对象存储文件所在的 COS Bucket 名，如 TopRankVideo-125xxx88。
   */
  Bucket: string
  /**
   * 发布生成的对象存储文件所在的 COS Bucket 所属园区，如 ap-chongqing。
   */
  Region: string
  /**
   * 发布生成的视频在 COS 存储的对象键。对象键（ObjectKey）是对象（Object）在存储桶（Bucket）中的唯一标识。
   */
  VideoKey: string
  /**
   * 发布生成的封面在 COS 存储的对象键。
   */
  CoverKey: string
}

/**
 * HandleStreamConnectProject请求参数结构体
 */
export interface HandleStreamConnectProjectRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 云转推项目 Id 。
   */
  ProjectId: string
  /**
   * 请参考 [操作类型](#Operation)
   */
  Operation: string
  /**
   * 转推输入源操作参数。具体操作方式详见 [操作类型](#Operation) 及下文示例。
   */
  InputInfo?: StreamInputInfo
  /**
   * 主备输入源标识，取值有：
<li> Main ：主源；</li>
<li> Backup ：备源。</li>
   */
  InputEndpoint?: string
  /**
   * 转推输出源操作参数。具体操作方式详见 [操作类型](#Operation) 及下文示例。
   */
  OutputInfo?: StreamConnectOutput
  /**
   * 云转推当前预计结束时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。具体操作方式详见 [操作类型](#Operation) 及下文示例。
   */
  CurrentStopTime?: string
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以操作所有云转推项目。如果指定操作者，则操作者必须为项目所有者。
   */
  Operator?: string
}

/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 项目 Id。
   */
  ProjectId: string
  /**
   * 项目名称，不可超过30个字符。
   */
  Name?: string
  /**
   * 画布宽高比，值为视频编辑项目画布宽与高的像素值的比值，如 16:9、9:16 等。
   */
  AspectRatio?: string
  /**
   * 项目所有者。目前仅支持个人项目，不支持团队项目。
   */
  Owner?: Entity
  /**
   * 项目模式，一个项目可以有多种模式并相互切换。
当 Category 为 VIDEO_EDIT 时，可选模式有：
<li>Default：默认模式，即普通视频编辑项目。</li>
<li>VideoEditTemplate：剪辑模板制作模式，用于制作剪辑模板。</li>
   */
  Mode?: string
}

/**
 * 媒体详情信息
 */
export interface MaterialInfo {
  /**
   * 媒体基本信息。
   */
  BasicInfo?: MaterialBasicInfo
  /**
   * 视频媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoMaterial?: VideoMaterial
  /**
   * 音频媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioMaterial?: AudioMaterial
  /**
   * 图片媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageMaterial?: ImageMaterial
  /**
   * 链接媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkMaterial?: LinkMaterial
  /**
   * 模板媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoEditTemplateMaterial?: VideoEditTemplateMaterial
  /**
   * 其他类型媒体信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OtherMaterial?: OtherMaterial
}

/**
 * DescribeVideoEncodingPresets请求参数结构体
 */
export interface DescribeVideoEncodingPresetsRequest {
  /**
   * 平台名称，指定访问的平台。
   */
  Platform: string
  /**
   * 要查询的配置 ID 列表。填写该参数则按照配置 ID 进行查询。
   */
  Ids?: Array<number | bigint>
  /**
   * 分页大小，默认20。最大值50。
   */
  Limit?: number
  /**
   * 分页起始，默认0。
   */
  Offset?: number
}

/**
 * 登录态信息
 */
export interface LoginStatusInfo {
  /**
   * 用户 Id。
   */
  UserId: string
  /**
   * 用户登录状态。
<li>Online：在线；</li>
<li>Offline：离线。</li>
   */
  Status: string
}

/**
 * DescribeClass返回参数结构体
 */
export interface DescribeClassResponse {
  /**
   * 分类信息列表。
   */
  ClassInfoSet: Array<ClassInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GenerateVideoSegmentationSchemeByAi返回参数结构体
 */
export interface GenerateVideoSegmentationSchemeByAiResponse {
  /**
   * 视频智能拆条任务 Id 。
   */
  TaskId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 预置标签信息
 */
export interface PresetTagInfo {
  /**
   * 标签 Id 。
   */
  Id: string
  /**
   * 标签名称。
   */
  Name: string
  /**
   * 父级预设 Id。
   */
  ParentTagId?: string
}

/**
 * DescribeSharedSpace请求参数结构体
 */
export interface DescribeSharedSpaceRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 被授权目标，个人或团队。
   */
  Authorizee: Entity
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以查询任意个人或者团队的共享空间。如果指定操作者，则操作者必须本人或者团队成员。
   */
  Operator?: string
}

/**
 * 快手视频发布信息。
 */
export interface KuaishouPublishInfo {
  /**
   * 视频发布标题，限30个字符。
   */
  Title?: string
}

/**
 * CopyProject返回参数结构体
 */
export interface CopyProjectResponse {
  /**
   * 复制后的项目 ID。
   */
  ProjectId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteClass返回参数结构体
 */
export interface DeleteClassResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HandleMediaCastProject请求参数结构体
 */
export interface HandleMediaCastProjectRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 媒体转推项目 Id 。
   */
  ProjectId: string
  /**
   * 请参考 [操作类型](#Operation)。
   */
  Operation: string
  /**
   * 输入源信息。具体操作方式详见 [操作类型](#Operation) 及下文示例。
当 Operation 为 AddSource、DeleteSource、SwitchSource 时必填。
   */
  SourceInfos?: Array<MediaCastSourceInfo>
  /**
   * 输出源信息。具体操作方式详见 [操作类型](#Operation) 及下文示例。
当 Operation 为 AddDestination、DeleteDestination、EnableDestination、DisableDestination、ModifyDestination 时必填。
   */
  DestinationInfos?: Array<MediaCastDestinationInfo>
  /**
   * 输出媒体配置。具体操作方式详见 [操作类型](#Operation) 及下文示例。
当 Operation 为 ModfiyOutputSetting 时必填。
   */
  OutputMediaSetting?: MediaCastOutputMediaSetting
  /**
   * 播放控制参数。具体操作方式详见 [操作类型](#Operation) 及下文示例。
当 Operation 为 ModifyPlaySetting 时必填。
   */
  PlaySetting?: MediaCastPlaySetting
  /**
   * 新添加的输入源位于输入源列表的位置，从0开始。默认加在输入源列表的后面。具体操作方式详见 [操作类型](#Operation) 及下文示例。
当 Operation 为 AddSource 时必填。
   */
  Position?: number
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以操作所有媒体转推项目。如果指定操作者，则操作者必须为项目所有者。
   */
  Operator?: string
}

/**
 * ExportVideoEditProject返回参数结构体
 */
export interface ExportVideoEditProjectResponse {
  /**
   * 任务 Id。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件元信息。
 */
export interface MediaMetaData {
  /**
   * 大小。
   */
  Size: number
  /**
   * 容器类型。
   */
  Container: string
  /**
   * 视频流码率平均值与音频流码率平均值之和，单位：bps。
   */
  Bitrate: number
  /**
   * 视频流高度的最大值，单位：px。
   */
  Height: number
  /**
   * 视频流宽度的最大值，单位：px。
   */
  Width: number
  /**
   * 时长，单位：秒。
   */
  Duration: number
  /**
   * 视频拍摄时的选择角度，单位：度
   */
  Rotate: number
  /**
   * 视频流信息。
   */
  VideoStreamInfoSet: Array<VideoStreamInfo>
  /**
   * 音频流信息。
   */
  AudioStreamInfoSet: Array<AudioStreamInfo>
}

/**
 * 导播台项目状态变更事件
 */
export interface ProjectSwitcherStatusChangedEvent {
  /**
   * 导播台项目 Id。
   */
  ProjectId: string
  /**
   * 导播台项目状态，可取值有：
<li>Started：导播台启动；</li>
<li>Stopped：导播台停止；</li>
<li>PvwStarted：导播台 PVW 开启；</li>
<li>PgmStarted：导播台 PGM 开启，输出推流开始；</li>
<li>PvwStopped：导播台 PVW 停止；</li>
<li>PgmStopped：导播台 PGM 停止，输出推流结束。</li>
   */
  Status: string
}

/**
 * 媒资绑定资源信息，包含媒资绑定模板 ID 和文件信息。
 */
export interface ExternalMediaInfo {
  /**
   * 目前仅支持绑定 COS 桶的媒体，请填写存储对象 Key 值，例如：`example-folder/example.mp4`。
   */
  MediaKey: string
  /**
   * 该字段废弃，请勿使用。
   */
  Definition?: number
  /**
   * 媒资挂载的存储 Id。
   */
  StorageId?: string
}

/**
 * 链接素材信息
 */
export interface LinkMaterialInfo {
  /**
   * 素材基本信息。
   */
  BasicInfo: MaterialBasicInfo
  /**
   * 视频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VideoMaterial: VideoMaterial
  /**
   * 音频素材信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AudioMaterial: AudioMaterial
  /**
   * 图片素材信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageMaterial: ImageMaterial
}

/**
 * ExportVideoByEditorTrackData返回参数结构体
 */
export interface ExportVideoByEditorTrackDataResponse {
  /**
   * 任务 Id。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 点播转直播输出媒体配置。
 */
export interface MediaCastOutputMediaSetting {
  /**
   * 视频配置。
   */
  VideoSetting: MediaCastVideoSetting
  /**
   * 视频配置是否和第一个输入源的视频配置相同，默认值：false。如果 FollowSourceInfo 的值为 true，忽略 VideoSetting 参数。
   */
  FollowSourceInfo?: boolean
}

/**
 * 分类创建事件。
 */
export interface ClassCreatedEvent {
  /**
   * 分类归属。
   */
  Owner: Entity
  /**
   * 分类路径。
   */
  ClassPath: string
}

/**
 * 视频编码配置
 */
export interface VideoEncodingPreset {
  /**
   * 配置 ID。
   */
  Id: number
  /**
   * 配置名。
   */
  Name: string
  /**
   * 封装格式，可选值：
<li>mp4 ；</li>
<li>mov 。</li>
   */
  Container: string
  /**
   * 是否去除视频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
   */
  RemoveVideo: number
  /**
   * 是否去除音频数据，可选值：
<li>0：保留；</li>
<li>1：去除。</li>
默认值：0。
   */
  RemoveAudio: number
  /**
   * 视频编码配置中的视频设置。
   */
  VideoSetting: VideoEncodingPresetVideoSetting
  /**
   * 视频编码配置中的音频设置。
   */
  AudioSetting: VideoEncodingPresetAudioSetting
}

/**
 * ImportMaterial请求参数结构体
 */
export interface ImportMaterialRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 媒体归属者，可支持归属团队或个人。
   */
  Owner: Entity
  /**
   * 媒体名称，不能超过30个字符。
   */
  Name: string
  /**
   * 导入媒资类型，取值：
<li>VOD：云点播文件；</li>
<li>EXTERNAL：媒资绑定。</li>

注意：如果不填默认为云点播文件，如果媒体存储在非腾讯云点播中，都需要使用媒资绑定。另外，导入云点播的文件，使用云点播的子应用 Id 必须与创建多媒体创作引擎平台时使用的云点播子应用一致。
   */
  SourceType?: string
  /**
   * 云点播媒资 FileId，仅当 SourceType 为 VOD 时有效。
   */
  VodFileId?: string
  /**
   * 原始媒资文件信息，当 SourceType 取值 EXTERNAL 的时候必填。
   */
  ExternalMediaInfo?: ExternalMediaInfo
  /**
   * 媒体分类路径，形如："/a/b"，层级数不能超过10，每个层级长度不能超过15字符。若不填则默认为根路径。
   */
  ClassPath?: string
  /**
   * 媒体预处理任务参数 ID。可取值有：
<li>10：进行编辑预处理。</li>
   */
  PreProcessDefinition?: number
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以向任意团队或者个人导入媒体。如果指定操作者，如果媒体归属为个人，则操作者必须与归属者一致；如果媒体归属为团队，则必须为团队可导入媒体的团队成员(如果没有特殊设置，所有团队成员可导入媒体)。
   */
  Operator?: string
}

/**
 * 模板插槽文本替换信息。
 */
export interface TextReplacementInfo {
  /**
   * 替换的文本信息。
   */
  Text: string
}

/**
 * 导入媒资信息
 */
export interface ImportMediaInfo {
  /**
   * 云点播文件 FileId。
   */
  FileId: string
  /**
   * 媒体 Id。
   */
  MaterialId: string
}

/**
 * DescribeMaterials请求参数结构体
 */
export interface DescribeMaterialsRequest {
  /**
   * 平台 Id，指定访问的平台。关于平台概念，请参见文档 [平台](https://cloud.tencent.com/document/product/1156/43767)。
   */
  Platform: string
  /**
   * 媒体 ID 列表，一次最多可拉取20个媒体的信息。
   */
  MaterialIds: Array<string>
  /**
   * 列表排序，支持下列排序字段：
<li>CreateTime：创建时间；</li>
<li>UpdateTime：更新时间。</li>
   */
  Sort?: SortBy
  /**
   * 操作者。如不填，默认为 `cmeid_system`，表示平台管理员操作，可以获取任意媒体的信息。如果指定操作者，则操作者必须对媒体有读权限。
   */
  Operator?: string
}

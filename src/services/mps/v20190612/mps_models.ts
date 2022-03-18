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
 * ModifySnapshotByTimeOffsetTemplate返回参数结构体
 */
export interface ModifySnapshotByTimeOffsetTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySampleSnapshotTemplate返回参数结构体
 */
export interface ModifySampleSnapshotTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 语音全文识别片段。
 */
export interface AiRecognitionTaskAsrFullTextSegmentItem {
  /**
   * 识别片段置信度。取值：0~100。
   */
  Confidence: number

  /**
   * 识别片段起始的偏移时间，单位：秒。
   */
  StartTimeOffset: number

  /**
   * 识别片段终止的偏移时间，单位：秒。
   */
  EndTimeOffset: number

  /**
   * 识别文本。
   */
  Text: string
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
  LabelSet?: string

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
   */
  TEHDConfig?: TEHDConfigForUpdate
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
      * 视频处理的文件输出存储位置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutputStorage: TaskOutputStorage

  /**
      * 视频处理类型任务参数。
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
   * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。
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
 * CreateTranscodeTemplate请求参数结构体
 */
export interface CreateTranscodeTemplateRequest {
  /**
   * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
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
}

/**
 * ProcessLiveStream返回参数结构体
 */
export interface ProcessLiveStreamResponse {
  /**
   * 任务 ID
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAnimatedGraphicsTemplates请求参数结构体
 */
export interface DescribeAnimatedGraphicsTemplatesRequest {
  /**
   * 转动图模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number>

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
}

/**
 * 内容审核 Asr 文字鉴任违禁务结果类型
 */
export interface AiReviewTaskProhibitedAsrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核 Asr 文字鉴违禁任务输入。
   */
  Input: AiReviewProhibitedAsrTaskInput

  /**
      * 内容审核 Asr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewProhibitedAsrTaskOutput
}

/**
 * 转自适应码流模板详情
 */
export interface AdaptiveDynamicStreamingTemplate {
  /**
   * 转自适应码流模板唯一标识。
   */
  Definition: number

  /**
      * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
      */
  Type: string

  /**
   * 转自适应码流模板名称。
   */
  Name: string

  /**
   * 转自适应码流模板描述信息。
   */
  Comment: string

  /**
      * 转自适应码流格式，取值范围：
<li>HLS，</li>
<li>MPEG-DASH。</li>
      */
  Format: string

  /**
   * 转自适应码流输入流参数信息，最多输入10路流。
   */
  StreamInfos: Array<AdaptiveStreamTemplate>

  /**
      * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
      */
  DisableHigherVideoBitrate: number

  /**
      * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
      */
  DisableHigherVideoResolution: number

  /**
   * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  CreateTime: string

  /**
   * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
   */
  UpdateTime: string
}

/**
 * DeleteAnimatedGraphicsTemplate返回参数结构体
 */
export interface DeleteAnimatedGraphicsTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核 Ocr 文字鉴违禁任务输入。
   */
  Input: AiReviewProhibitedOcrTaskInput

  /**
      * 内容审核 Ocr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewProhibitedOcrTaskOutput
}

/**
 * 语音全文识别结果。
 */
export interface AiRecognitionTaskAsrFullTextResultOutput {
  /**
   * 语音全文识别片段列表。
   */
  SegmentSet: Array<AiRecognitionTaskAsrFullTextSegmentItem>

  /**
   * 字幕文件地址。
   */
  SubtitlePath: string

  /**
   * 字幕文件存储位置。
   */
  OutputStorage: TaskOutputStorage
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
 * ManageTask返回参数结构体
 */
export interface ManageTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 智能封面结果类型
 */
export interface AiAnalysisTaskCoverResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 智能封面任务输入。
   */
  Input: AiAnalysisTaskCoverInput

  /**
      * 智能封面任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiAnalysisTaskCoverOutput
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
   * 图片格式，取值为 jpg 和 png。
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
 * 视频处理的输入对象信息。
 */
export interface MediaInputInfo {
  /**
   * 输入来源对象的类型，支持 COS 和 URL 两种。
   */
  Type: string

  /**
   * 当 Type 为 COS 时有效，则该项为必填，表示视频处理 COS 对象信息。
   */
  CosInputInfo?: CosInputInfo

  /**
      * 当 Type 为 URL 时有效，则该项为必填，表示视频处理 URL 对象信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UrlInputInfo?: UrlInputInfo
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
   * 视频处理的文件输出存储位置。不填则继承 Trigger 中的存储位置。
   */
  OutputStorage?: TaskOutputStorage

  /**
   * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致。
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
   * 任务的事件通知配置，不填代表不获取事件通知。
   */
  TaskNotifyConfig?: TaskNotifyConfig

  /**
   * 工作流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
   */
  TaskPriority?: number
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
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核 Ocr 文字敏感任务输入。
   */
  Input: AiReviewPoliticalOcrTaskInput

  /**
      * 内容审核 Ocr 文字敏感任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewPoliticalOcrTaskOutput
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
  WaterMarkDefinition: Array<number>
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
}

/**
 * DeleteAIRecognitionTemplate返回参数结构体
 */
export interface DeleteAIRecognitionTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频处理任务中的马赛克参数类型
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
 * 内容审核敏感任务输入参数类型
 */
export interface AiReviewPoliticalTaskInput {
  /**
   * 模板 ID。
   */
  Definition: number
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
 * 音频流配置参数
 */
export interface AudioTemplateInfoForUpdate {
  /**
      * 音频流的编码格式。
当外层参数 Container 为 mp3 时，可选值为：
<li>libmp3lame。</li>
当外层参数 Container 为 ogg 或 flac 时，可选值为：
<li>flac。</li>
当外层参数 Container 为 m4a 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame；</li>
<li>ac3。</li>
当外层参数 Container 为 mp4 或 flv 时，可选值为：
<li>libfdk_aac：更适合 mp4；</li>
<li>libmp3lame：更适合 flv；</li>
<li>mp2。</li>
当外层参数 Container 为 hls 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame。</li>
      */
  Codec?: string

  /**
   * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。 当取值为 0，表示音频码率和原始音频保持一致。
   */
  Bitrate?: number

  /**
      * 音频流的采样率，可选值：
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
      */
  SampleRate?: number

  /**
      * 音频通道方式，可选值：
<li>1：单通道</li>
<li>2：双通道</li>
<li>6：立体声</li>
当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。
      */
  AudioChannel?: number
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
  WaterMarkDefinition: Array<number>
}

/**
 * ParseLiveStreamProcessNotification返回参数结构体
 */
export interface ParseLiveStreamProcessNotificationResponse {
  /**
      * 直播流处理结果类型，包含：
<li>AiReviewResult：内容审核结果；</li>
<li>AiRecognitionResult：内容识别结果；</li>
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
   * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。
   */
  SessionId?: string

  /**
   * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。
   */
  SessionContext?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频内容识别输入参数类型
 */
export interface AiRecognitionTaskInput {
  /**
   * 视频智能识别模板 ID 。
   */
  Definition: number
}

/**
 * 音频流配置参数
 */
export interface AudioTemplateInfo {
  /**
      * 音频流的编码格式。
当外层参数 Container 为 mp3 时，可选值为：
<li>libmp3lame。</li>
当外层参数 Container 为 ogg 或 flac 时，可选值为：
<li>flac。</li>
当外层参数 Container 为 m4a 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame；</li>
<li>ac3。</li>
当外层参数 Container 为 mp4 或 flv 时，可选值为：
<li>libfdk_aac：更适合 mp4；</li>
<li>libmp3lame：更适合 flv。</li>
当外层参数 Container 为 hls 时，可选值为：
<li>libfdk_aac；</li>
<li>libmp3lame。</li>
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
<li>6：立体声</li>
当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Definition: number

  /**
   * 视频内容识别模板名称。
   */
  Name: string

  /**
   * 视频内容识别模板描述信息。
   */
  Comment: string

  /**
   * 人脸识别控制参数。
   */
  FaceConfigure: FaceConfigureInfo

  /**
   * 文本全文识别控制参数。
   */
  OcrFullTextConfigure: OcrFullTextConfigureInfo

  /**
   * 文本关键词识别控制参数。
   */
  OcrWordsConfigure: OcrWordsConfigureInfo

  /**
   * 语音全文识别控制参数。
   */
  AsrFullTextConfigure: AsrFullTextConfigureInfo

  /**
   * 语音关键词识别控制参数。
   */
  AsrWordsConfigure: AsrWordsConfigureInfo

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
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 人脸识别任务输入信息。
   */
  Input: AiRecognitionTaskFaceResultInput

  /**
      * 人脸识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiRecognitionTaskFaceResultOutput
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
<li>scenario：涉敏画面。</li>
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
 * 文本全文识别输出。
 */
export interface AiRecognitionTaskOcrFullTextResultOutput {
  /**
   * 文本全文识别结果集。
   */
  SegmentSet: Array<AiRecognitionTaskOcrFullTextSegmentItem>
}

/**
 * DeleteAIAnalysisTemplate返回参数结构体
 */
export interface DeleteAIAnalysisTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 字体大小，格式：Npx，N 为数值。
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
 * DeleteWorkflow返回参数结构体
 */
export interface DeleteWorkflowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内容审核鉴黄任务输入参数类型
 */
export interface AiReviewPornTaskInput {
  /**
   * 鉴黄模板 ID。
   */
  Definition: number
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
 * 视频处理 COS 对象信息。
 */
export interface CosInputInfo {
  /**
   * 视频处理对象文件所在的 COS Bucket 名，如 TopRankVideo-125xxx88。
   */
  Bucket: string

  /**
   * 视频处理对象文件所在的 COS Bucket 所属园区，如 ap-chongqing。
   */
  Region: string

  /**
   * 视频处理对象文件的输入路径，如`/movie/201907/WildAnimal.mov`。
   */
  Object: string
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
 * DeleteAIRecognitionTemplate请求参数结构体
 */
export interface DeleteAIRecognitionTemplateRequest {
  /**
   * 视频内容识别模板唯一标识。
   */
  Definition: number
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
 * EnableWorkflow请求参数结构体
 */
export interface EnableWorkflowRequest {
  /**
   * 工作流 ID。
   */
  WorkflowId: number
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
}

/**
 * 编辑视频任务的输入。
 */
export interface EditMediaTaskInput {
  /**
   * 输入的视频文件信息。
   */
  FileInfoSet: Array<EditMediaFileInfo>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 字体大小，格式：Npx，N 为数值。
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
}

/**
 * ModifyAIAnalysisTemplate返回参数结构体
 */
export interface ModifyAIAnalysisTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeSnapshotByTimeOffsetTemplates请求参数结构体
 */
export interface DescribeSnapshotByTimeOffsetTemplatesRequest {
  /**
   * 指定时间点截图模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number>

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
 * 视频处理任务类型
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
 * 视频处理 COS 输出对象信息。
 */
export interface CosOutputStorage {
  /**
   * 视频处理生成的文件输出的目标 Bucket 名，如 TopRankVideo-125xxx88。如果不填，表示继承上层。
   */
  Bucket?: string

  /**
   * 视频处理生成的文件输出的目标 Bucket 的园区，如 ap-chongqing。如果不填，表示继承上层。
   */
  Region?: string
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
  AreaCoordSet: Array<number>
}

/**
 * ProcessMedia返回参数结构体
 */
export interface ProcessMediaResponse {
  /**
   * 任务 ID。
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWordSamples返回参数结构体
 */
export interface CreateWordSamplesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DeleteAdaptiveDynamicStreamingTemplate返回参数结构体
 */
export interface DeleteAdaptiveDynamicStreamingTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核 Ocr 文字敏感任务输入。
   */
  Input: AiReviewTerrorismOcrTaskInput

  /**
      * 内容审核 Ocr 文字敏感任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewTerrorismOcrTaskOutput
}

/**
 * 文本关键识别结果。
 */
export interface AiRecognitionTaskOcrWordsResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 文本关键词识别任务输入信息。
   */
  Input: AiRecognitionTaskOcrWordsResultInput

  /**
      * 文本关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiRecognitionTaskOcrWordsResultOutput
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
 * ModifyAnimatedGraphicsTemplate返回参数结构体
 */
export interface ModifyAnimatedGraphicsTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   */
  Container?: string
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
   * 视频处理输出文件的目标存储。
   */
  OutputStorage: TaskOutputStorage

  /**
   * 视频处理输出文件的目标路径。
   */
  OutputObjectPath: string

  /**
   * 编辑后生成的文件配置。
   */
  OutputConfig?: EditMediaOutputConfig

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
 * 对视频截雪碧图任务结果类型
 */
export interface MediaProcessTaskImageSpriteResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 对视频截雪碧图任务的输入。
   */
  Input: ImageSpriteTaskInput

  /**
      * 对视频截雪碧图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: MediaImageSpriteItem
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  AreaCoordSet: Array<number>

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
 * 视频处理 URL 对象信息。
 */
export interface UrlInputInfo {
  /**
   * 视频的 URL。
   */
  Url: string
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates请求参数结构体
 */
export interface DescribeAdaptiveDynamicStreamingTemplatesRequest {
  /**
   * 转自适应码流模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number>

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
默认值：10%。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateContentReviewTemplate返回参数结构体
 */
export interface CreateContentReviewTemplateResponse {
  /**
   * 内容智能识别模板唯一标识。
   */
  Definition: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteWordSamples请求参数结构体
 */
export interface DeleteWordSamplesRequest {
  /**
   * 关键词，数组长度限制：100 个词。
   */
  Keywords: Array<string>
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
   * CMQ 的模型，有 Queue 和 Topic 两种，目前仅支持 Queue。
   */
  CmqModel: string

  /**
   * CMQ 的园区，如 sh，bj 等。
   */
  CmqRegion: string

  /**
   * 当模型为 Queue 时有效，表示接收事件通知的 CMQ 的队列名。
   */
  QueueName?: string

  /**
   * 当模型为 Topic 时有效，表示接收事件通知的 CMQ 的主题名。
   */
  TopicName?: string

  /**
   * 通知类型，默认CMQ，指定URL时HTTP回调推送到 NotifyUrl 指定的地址。
   */
  NotifyType?: string

  /**
   * HTTP回调地址，NotifyType为URL时必填。
   */
  NotifyUrl?: string
}

/**
 * 视频流配置参数
 */
export interface VideoTemplateInfo {
  /**
      * 视频流的编码格式，可选值：
<li>libx264：H.264 编码</li>
<li>libx265：H.265 编码</li>
<li>av1：AOMedia Video 1 编码</li>
      */
  Codec: string

  /**
      * 视频帧率，取值范围：[0, 100]，单位：Hz。
当取值为 0，表示帧率和原始视频保持一致。
      */
  Fps: number

  /**
      * 视频流的码率，取值范围：0 和 [75, 35000]，单位：kbps。
当取值为 0，表示视频码率和原始视频保持一致。
      */
  Bitrate: number

  /**
      * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
默认值：open。
      */
  ResolutionAdaptive?: string

  /**
      * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
      */
  Width?: number

  /**
      * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
      */
  Height?: number

  /**
      * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。
当填 0 或不填时，系统将自动设置 gop 长度。
      */
  Gop?: number

  /**
      * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。</li>
默认值：black 。
      */
  FillType?: string

  /**
      * 视频恒定码率控制因子，取值范围为[1, 51]。
如果指定该参数，将使用 CRF 的码率控制方式做转码（视频码率将不再生效）。
如果没有特殊需求，不建议指定该参数。
      */
  Vcrf?: number
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
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核 Ocr 文字鉴黄任务输入。
   */
  Input: AiReviewPornOcrTaskInput

  /**
      * 内容审核 Ocr 文字鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewPornOcrTaskOutput
}

/**
 * ModifyContentReviewTemplate返回参数结构体
 */
export interface ModifyContentReviewTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Definitions?: Array<number>

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
}

/**
 * 视频处理输出对象信息。
 */
export interface TaskOutputStorage {
  /**
   * 视频处理输出对象存储位置的类型，现在仅支持 COS。
   */
  Type: string

  /**
      * 当 Type 为 COS 时有效，则该项为必填，表示视频处理 COS 输出位置。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosOutputStorage?: CosOutputStorage
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
 * 内容审核 Ocr 文字鉴黄任务输入参数类型
 */
export interface AiReviewPornOcrTaskInput {
  /**
   * 鉴黄模板 ID。
   */
  Definition: number
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
注意：各个流的帧率必须保持一致；如果不一致，采用第一个流的帧率作为输出帧率。
      */
  StreamInfos?: Array<AdaptiveStreamTemplate>

  /**
   * 模板描述信息，长度限制：256 个字符。
   */
  Comment?: string
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
 * 转动图任务结果类型
 */
export interface MediaProcessTaskAnimatedGraphicResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 转动图任务的输入。
   */
  Input: AnimatedGraphicTaskInput

  /**
      * 转动图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: MediaAnimatedGraphicsItem
}

/**
 * 智能标签结果类型
 */
export interface AiAnalysisTaskTagResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 智能标签任务输入。
   */
  Input: AiAnalysisTaskTagInput

  /**
      * 智能标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiAnalysisTaskTagOutput
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
 * ProcessMedia请求参数结构体
 */
export interface ProcessMediaRequest {
  /**
   * 视频处理的文件输入信息。
   */
  InputInfo: MediaInputInfo

  /**
   * 视频处理输出文件的目标存储。不填则继承 InputInfo 中的存储位置。
   */
  OutputStorage?: TaskOutputStorage

  /**
   * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与 InputInfo 中文件所在的目录一致。
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
   * 任务的事件通知信息，不填代表不获取事件通知。
   */
  TaskNotifyConfig?: TaskNotifyConfig

  /**
   * 任务流的优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。
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
 * 文本全文识别结果。
 */
export interface AiRecognitionTaskOcrFullTextResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 文本全文识别任务输入信息。
   */
  Input: AiRecognitionTaskOcrFullTextResultInput

  /**
      * 文本全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiRecognitionTaskOcrFullTextResultOutput
}

/**
 * 对视频按指定时间点截图任务结果类型
 */
export interface MediaProcessTaskSnapshotByTimeOffsetResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 对视频按指定时间点截图任务输入。
   */
  Input: SnapshotByTimeOffsetTaskInput

  /**
      * 对视频按指定时间点截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: MediaSnapshotByTimeOffsetItem
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
  AreaCoords: Array<number>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 时间点截图后图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_snapshotByTimeOffset_{definition}_{number}.{format}`。
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
   * 截取雪碧图后，雪碧图图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}_{number}.{format}`。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * RecognizeMediaForZhiXue返回参数结构体
 */
export interface RecognizeMediaForZhiXueResponse {
  /**
   * 任务 ID，可以通过该 ID 查询任务状态和结果。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  TotalCount: number

  /**
   * 内容审核模板详情列表。
   */
  ContentReviewTemplateSet: Array<ContentReviewTemplateItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 极速高清参数配置。
 */
export interface TEHDConfig {
  /**
      * 极速高清类型，可选值：
<li>TEHD-100：极速高清-100。</li>
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
 * 输入规则，当上传视频命中该规则时，即触发工作流。
 */
export interface WorkflowTrigger {
  /**
   * 触发器的类型，目前仅支持 CosFileUpload。
   */
  Type: string

  /**
      * 当 Type 为 CosFileUpload 时必填且有效，为 COS 触发规则。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CosFileUploadTrigger?: CosFileUploadTrigger
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
  AreaCoordSet: Array<number>

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 转动图后文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_animatedGraphic_{definition}.{format}`。
   */
  OutputObjectPath?: string
}

/**
 * DeleteContentReviewTemplate请求参数结构体
 */
export interface DeleteContentReviewTemplateRequest {
  /**
   * 内容智能识别模板唯一标识。
   */
  Definition: number
}

/**
 * AI 智能分析模板详情
 */
export interface AIAnalysisTemplateItem {
  /**
   * 智能分析模板唯一标识。
   */
  Definition: number

  /**
   * 智能分析模板名称。
   */
  Name: string

  /**
   * 智能分析模板描述信息。
   */
  Comment: string

  /**
      * 智能分类任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClassificationConfigure: ClassificationConfigureInfo

  /**
      * 智能标签任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagConfigure: TagConfigureInfo

  /**
      * 智能封面任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CoverConfigure: CoverConfigureInfo

  /**
      * 智能按帧标签任务控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrameTagConfigure: FrameTagConfigureInfo

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
 * 片头片尾参数
 */
export interface HeadTailParameter {
  /**
   * 片头列表。
   */
  HeadSet?: Array<MediaInputInfo>

  /**
   * 片尾列表。
   */
  TailSet?: Array<MediaInputInfo>
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
  Definitions?: Array<number>

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
 * CreateAIRecognitionTemplate返回参数结构体
 */
export interface CreateAIRecognitionTemplateResponse {
  /**
   * 视频内容识别模板唯一标识。
   */
  Definition: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
      */
  Type: string

  /**
      * 视频内容分析智能分类任务的查询结果，当任务类型为 Classification 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClassificationTask: AiAnalysisTaskClassificationResult

  /**
      * 视频内容分析智能封面任务的查询结果，当任务类型为 Cover 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CoverTask: AiAnalysisTaskCoverResult

  /**
      * 视频内容分析智能标签任务的查询结果，当任务类型为 Tag 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagTask: AiAnalysisTaskTagResult

  /**
      * 视频内容分析智能按帧标签任务的查询结果，当任务类型为 FrameTag 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrameTagTask: AiAnalysisTaskFrameTagResult
}

/**
 * DescribeAIAnalysisTemplates请求参数结构体
 */
export interface DescribeAIAnalysisTemplatesRequest {
  /**
   * 视频内容分析模板唯一标识过滤条件，数组长度限制：10。
   */
  Definitions?: Array<number>

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
 * DeleteSampleSnapshotTemplate返回参数结构体
 */
export interface DeleteSampleSnapshotTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致，即`{inputDir}`。
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
 * 内容审核涉敏任务结果类型
 */
export interface AiReviewTaskTerrorismResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核涉敏任务输入。
   */
  Input: AiReviewTerrorismTaskInput

  /**
      * 内容审核涉敏任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewTerrorismTaskOutput
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
  AreaCoordSet: Array<number>

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyContentReviewTemplate请求参数结构体
 */
export interface ModifyContentReviewTemplateRequest {
  /**
   * 内容智能识别模板唯一标识。
   */
  Definition: number

  /**
   * 内容智能识别模板名称，长度限制：64 个字符。
   */
  Name?: string

  /**
   * 内容智能识别模板描述信息，长度限制：256 个字符。
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
   * 用户自定义内容智能识别控制参数。
   */
  UserDefineConfigure?: UserDefineConfigureInfoForUpdate
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
默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
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
 * 智能内容审核任务类型
 */
export interface AiContentReviewTaskInput {
  /**
   * 视频内容审核模板 ID。
   */
  Definition: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * AI 视频智能分析输入参数类型
 */
export interface AiAnalysisTaskInput {
  /**
   * 视频内容分析模板 ID。
   */
  Definition: number
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
  AreaCoordSet: Array<number>

  /**
   * 识别文本。
   */
  Text: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 内容审核 Asr 文字敏感任务输入参数类型
 */
export interface AiReviewPoliticalAsrTaskInput {
  /**
   * 模板 ID。
   */
  Definition: number
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
  Definition: string

  /**
   * 封装格式，取值：mp4、flv、hls、mp3、flac、ogg。
   */
  Container: string

  /**
   * 转码模板名称。
   */
  Name: string

  /**
   * 模板描述信息。
   */
  Comment: string

  /**
      * 模板类型，取值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
      */
  Type: string

  /**
      * 是否去除视频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
      */
  RemoveVideo: number

  /**
      * 是否去除音频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
      */
  RemoveAudio: number

  /**
   * 视频流配置参数，仅当 RemoveVideo 为 0，该字段有效。
   */
  VideoTemplate: VideoTemplateInfo

  /**
   * 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。
   */
  AudioTemplate: AudioTemplateInfo

  /**
      * 极速高清转码参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TEHDConfig: TEHDConfig

  /**
      * 封装格式过滤条件，可选值：
<li>Video：视频格式，可以同时包含视频流和音频流的封装格式；</li>
<li>PureAudio：纯音频格式，只能包含音频流的封装格式板。</li>
      */
  ContainerType: string

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
 * 内容审核 Asr 文字敏感任务结果类型
 */
export interface AiReviewTaskPoliticalAsrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核 Asr 文字敏感任务输入。
   */
  Input: AiReviewPoliticalAsrTaskInput

  /**
      * 内容审核 Asr 文字敏感任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewPoliticalAsrTaskOutput
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
 * 内容审核 Asr 文字鉴违禁任务输入参数类型
 */
export interface AiReviewProhibitedAsrTaskInput {
  /**
   * 鉴违禁模板 ID。
   */
  Definition: number
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
 * 内容审核鉴黄任务结果类型
 */
export interface AiReviewTaskPornResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核鉴黄任务输入。
   */
  Input: AiReviewPornTaskInput

  /**
      * 内容审核鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewPornTaskOutput
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
  AreaCoordSet: Array<number>
}

/**
 * DescribeSampleSnapshotTemplates请求参数结构体
 */
export interface DescribeSampleSnapshotTemplatesRequest {
  /**
   * 采样截图模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number>

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 视频参数信息。
   */
  Video: VideoTemplateInfo

  /**
   * 音频参数信息。
   */
  Audio: AudioTemplateInfo

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
   * 转码后主文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_transcode_{definition}.{format}`。
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
}

/**
 * ParseNotification返回参数结构体
 */
export interface ParseNotificationResponse {
  /**
      * 支持事件类型，目前取值有：
<li>WorkflowTask：视频工作流处理任务。</li>
<li>EditMediaTask：视频编辑任务。</li>
      */
  EventType?: string

  /**
      * 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowTaskEvent?: WorkflowTask

  /**
      * 视频编辑任务信息，仅当 TaskType 为 EditMediaTask，该字段有值。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetWorkflow返回参数结构体
 */
export interface ResetWorkflowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 对视频做采样截图任务输入。
   */
  Input: SampleSnapshotTaskInput

  /**
      * 对视频做采样截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: MediaSampleSnapshotItem
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
 * 极速高清参数配置。
 */
export interface TEHDConfigForUpdate {
  /**
      * 极速高清类型，可选值：
<li>TEHD-100：极速高清-100。</li>
不填代表不修改。
      */
  Type?: string

  /**
   * 视频码率上限，不填代表不修改。
   */
  MaxVideoBitrate?: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 智能按帧标签结果类型
 */
export interface AiAnalysisTaskFrameTagResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 智能按帧标签任务输入。
   */
  Input: AiAnalysisTaskFrameTagInput

  /**
      * 智能按帧标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiAnalysisTaskFrameTagOutput
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
  WorkflowId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 语音全文识别任务输入信息。
   */
  Input: AiRecognitionTaskAsrFullTextResultInput

  /**
      * 语音全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiRecognitionTaskAsrFullTextResultOutput
}

/**
 * ModifyAIRecognitionTemplate返回参数结构体
 */
export interface ModifyAIRecognitionTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  AreaCoordSet: Array<number>
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
 * DeleteWordSamples返回参数结构体
 */
export interface DeleteWordSamplesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频处理任务中的水印参数类型
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
      */
  StartTimeOffset?: number

  /**
      * 水印的结束时间偏移，单位：秒。
<li>不填或填0，表示水印持续到画面结束；</li>
<li>当数值大于0时（假设为 n），表示水印持续到第 n 秒时消失；</li>
<li>当数值小于0时（假设为 -n），表示水印持续到离画面结束 n 秒前消失。</li>
      */
  EndTimeOffset?: number
}

/**
 * EnableWorkflow返回参数结构体
 */
export interface EnableWorkflowResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  AreaCoordSet: Array<number>
}

/**
 * ModifyTranscodeTemplate返回参数结构体
 */
export interface ModifyTranscodeTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 点播媒体文件元信息
 */
export interface MediaMetaData {
  /**
   * 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
   */
  Size: number

  /**
   * 容器类型，例如 m4a，mp4 等。
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
   * 视频时长，单位：秒。
   */
  Duration: number

  /**
   * 视频拍摄时的选择角度，单位：度。
   */
  Rotate: number

  /**
   * 视频流信息。
   */
  VideoStreamSet: Array<MediaVideoStreamItem>

  /**
   * 音频流信息。
   */
  AudioStreamSet: Array<MediaAudioStreamItem>

  /**
   * 视频时长，单位：秒。
   */
  VideoDuration: number

  /**
   * 音频时长，单位：秒。
   */
  AudioDuration: number
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
 * 视频流配置参数
 */
export interface VideoTemplateInfoForUpdate {
  /**
      * 视频流的编码格式，可选值：
<li>libx264：H.264 编码</li>
<li>libx265：H.265 编码</li>
<li>av1：AOMedia Video 1 编码</li>
目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。av1 编码容器目前只支持 mp4 。
      */
  Codec?: string

  /**
      * 视频帧率，取值范围：[0, 100]，单位：Hz。
当取值为 0，表示帧率和原始视频保持一致。
      */
  Fps?: number

  /**
      * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。
当取值为 0，表示视频码率和原始视频保持一致。
      */
  Bitrate?: number

  /**
      * 分辨率自适应，可选值：
<li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
<li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
      */
  ResolutionAdaptive?: string

  /**
      * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
      */
  Width?: number

  /**
   * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
   */
  Height?: number

  /**
   * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。当填 0 时，系统将自动设置 gop 长度。
   */
  Gop?: number

  /**
      * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。</li>
      */
  FillType?: string

  /**
      * 视频恒定码率控制因子。取值范围为[0, 51]，填0表示禁用该参数。
如果没有特殊需求，不建议指定该参数。
      */
  Vcrf?: number
}

/**
 * CreateContentReviewTemplate请求参数结构体
 */
export interface CreateContentReviewTemplateRequest {
  /**
   * 内容智能识别模板名称，长度限制：64 个字符。
   */
  Name?: string

  /**
   * 内容智能识别模板描述信息，长度限制：256 个字符。
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
   * 用户自定义内容智能识别控制参数。
   */
  UserDefineConfigure?: UserDefineConfigureInfo
}

/**
 * DescribeContentReviewTemplates请求参数结构体
 */
export interface DescribeContentReviewTemplatesRequest {
  /**
   * 内容智能识别模板唯一标识过滤条件，数组长度限制：50。
   */
  Definitions?: Array<number>

  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number

  /**
   * 返回记录条数，默认值：10，最大值：50。
   */
  Limit?: number
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
   * 转自适应码流后，manifest 文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}.{format}`。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务的事件通知配置。
 */
export interface TaskNotifyConfig {
  /**
   * CMQ 的模型，有 Queue 和 Topic 两种，目前仅支持 Queue。
   */
  CmqModel: string

  /**
   * CMQ 的园区，如 sh，bj 等。
   */
  CmqRegion: string

  /**
   * 当模型为 Queue 时有效，表示接收事件通知的 CMQ 的队列名。
   */
  QueueName?: string

  /**
   * 当模型为 Topic 时有效，表示接收事件通知的 CMQ 的主题名。
   */
  TopicName?: string

  /**
   * 工作流通知的模式，可取值有 Finish 和 Change，不填代表 Finish。
   */
  NotifyMode?: string

  /**
   * 通知类型，默认CMQ，指定URL时HTTP回调推送到 NotifyUrl 指定的地址。
   */
  NotifyType?: string

  /**
   * HTTP回调地址，NotifyType为URL时必填。
   */
  NotifyUrl?: string
}

/**
 * 内容审核涉敏任务结果类型
 */
export interface AiReviewTaskPoliticalResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核涉敏任务输入。
   */
  Input: AiReviewPoliticalTaskInput

  /**
      * 内容审核涉敏任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewPoliticalTaskOutput
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
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
  /**
      * 任务类型，目前取值有：
<li>WorkflowTask：视频工作流处理任务。</li>
<li>EditMediaTask：视频编辑任务。</li>
<li>LiveStreamProcessTask：直播流处理任务。</li>
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
      * 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkflowTask?: WorkflowTask

  /**
      * 视频编辑任务信息，仅当 TaskType 为 EditMediaTask，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  EditMediaTask?: EditMediaTask

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      */
  Type: string

  /**
      * 人脸识别结果，当 Type 为
FaceRecognition 时有效。
      */
  FaceRecognitionResultSet: Array<LiveStreamFaceRecognitionResult>

  /**
      * 语音关键词识别结果，当 Type 为
AsrWordsRecognition 时有效。
      */
  AsrWordsRecognitionResultSet: Array<LiveStreamAsrWordsRecognitionResult>

  /**
      * 文本关键词识别结果，当 Type 为
OcrWordsRecognition 时有效。
      */
  OcrWordsRecognitionResultSet: Array<LiveStreamOcrWordsRecognitionResult>

  /**
      * 语音全文识别结果，当 Type 为
AsrFullTextRecognition 时有效。
      */
  AsrFullTextRecognitionResultSet: Array<LiveStreamAsrFullTextRecognitionResult>

  /**
      * 文本全文识别结果，当 Type 为
OcrFullTextRecognition 时有效。
      */
  OcrFullTextRecognitionResultSet: Array<LiveStreamOcrFullTextRecognitionResult>
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
 * 文本全文识别输入。
 */
export interface AiRecognitionTaskOcrFullTextResultInput {
  /**
   * 文本全文识别模板 ID。
   */
  Definition: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 图片格式，取值可以为 jpg 和 png。
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
<li>PornVoice：声音鉴黄</li>
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
   * 声音鉴黄的结果，当 Type 为 PornVoice 时有效。
   */
  VoicePornResultSet: Array<LiveStreamAiReviewVoicePornResult>
}

/**
 * 任务概要信息
 */
export interface TaskSimpleInfo {
  /**
   * 任务 ID。
   */
  TaskId: string

  /**
      * 任务类型，包含：
<li> WorkflowTask：工作流处理任务；</li>
<li> EditMediaTask：视频编辑任务；</li>
<li> LiveProcessTask：直播处理任务。</li>
      */
  TaskType: string

  /**
   * 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。
   */
  CreateTime: string

  /**
   * 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。若任务尚未开始，该字段为：0000-00-00T00:00:00Z。
   */
  BeginProcessTime: string

  /**
   * 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710#52)。若任务尚未完成，该字段为：0000-00-00T00:00:00Z。
   */
  FinishTime: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Bitrate: number

  /**
   * 视频流的高度，单位：px。
   */
  Height: number

  /**
   * 视频流的宽度，单位：px。
   */
  Width: number

  /**
   * 视频流的编码格式，例如 h264。
   */
  Codec: string

  /**
   * 帧率，单位：hz。
   */
  Fps: number

  /**
      * 色彩空间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColorPrimaries: string

  /**
      * 色彩空间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColorSpace: string

  /**
      * 色彩空间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ColorTransfer: string

  /**
      * HDR类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HdrType: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  WorkflowIds?: Array<number>

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
 * 点播文件音频流信息
 */
export interface MediaAudioStreamItem {
  /**
   * 音频流的码率，单位：bps。
   */
  Bitrate: number

  /**
   * 音频流的采样率，单位：hz。
   */
  SamplingRate: number

  /**
   * 音频流的编码格式，例如 aac。
   */
  Codec: string

  /**
      * 音频声道数，例如 2。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Channel: number
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
   * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
   */
  SessionId?: string

  /**
   * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
   */
  SessionContext?: string
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
 * 直播处理任务信息
 */
export interface LiveStreamProcessTask {
  /**
   * 视频处理任务 ID。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWordSample返回参数结构体
 */
export interface ModifyWordSampleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
<li>scenario：涉敏画面。</li>
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
 * DescribeTranscodeTemplates请求参数结构体
 */
export interface DescribeTranscodeTemplatesRequest {
  /**
   * 转码模板唯一标识过滤条件，数组长度限制：100。
   */
  Definitions?: Array<number>

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
      * 极速高清过滤条件，用于过滤普通转码或极速高清转码模板，可选值：
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTranscodeTemplate返回参数结构体
 */
export interface DeleteTranscodeTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转码信息
 */
export interface MediaTranscodeItem {
  /**
   * 转码后文件的目标存储。
   */
  OutputStorage: TaskOutputStorage

  /**
   * 转码后的视频文件路径。
   */
  Path: string

  /**
   * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/862/37042)。
   */
  Definition: number

  /**
   * 视频流码率平均值与音频流码率平均值之和， 单位：bps。
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
   * 媒体文件总大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
   */
  Size: number

  /**
   * 视频时长，单位：秒。
   */
  Duration: number

  /**
   * 容器类型，例如 m4a，mp4 等。
   */
  Container: string

  /**
   * 视频的 md5 值。
   */
  Md5: string

  /**
   * 音频流信息。
   */
  AudioStreamSet: Array<MediaAudioStreamItem>

  /**
   * 视频流信息。
   */
  VideoStreamSet: Array<MediaVideoStreamItem>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 图片格式，取值可以为 jpg 和 png。默认为 jpg。
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
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 语音关键词识别任务输入信息。
   */
  Input: AiRecognitionTaskAsrWordsResultInput

  /**
      * 语音关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiRecognitionTaskAsrWordsResultOutput
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
   * 图片格式，取值为 jpg 和 png。默认为 jpg。
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
 * 视频处理任务信息
 */
export interface WorkflowTask {
  /**
   * 视频处理任务 ID。
   */
  TaskId: string

  /**
      * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
      */
  Status: string

  /**
   * 已弃用，请使用各个具体任务的 ErrCode。
   */
  ErrCode: number

  /**
   * 已弃用，请使用各个具体任务的 Message。
   */
  Message: string

  /**
      * 视频处理的目标文件信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InputInfo: MediaInputInfo

  /**
      * 原始视频的元信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MetaData: MediaMetaData

  /**
   * 视频处理任务的执行状态与结果。
   */
  MediaProcessResultSet: Array<MediaProcessTaskResult>

  /**
   * 视频内容审核任务的执行状态与结果。
   */
  AiContentReviewResultSet: Array<AiContentReviewResult>

  /**
   * 视频内容分析任务的执行状态与结果。
   */
  AiAnalysisResultSet: Array<AiAnalysisResult>

  /**
   * 视频内容识别任务的执行状态与结果。
   */
  AiRecognitionResultSet: Array<AiRecognitionResult>
}

/**
 * 内容审核 Asr 文字鉴黄任务结果类型
 */
export interface AiReviewTaskPornAsrResult {
  /**
   * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
   */
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 内容审核 Asr 文字鉴黄任务输入。
   */
  Input: AiReviewPornAsrTaskInput

  /**
      * 内容审核 Asr 文字鉴黄任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiReviewPornAsrTaskOutput
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
   * 视频剪辑的起始时间偏移，单位：秒。
   */
  StartTimeOffset?: number

  /**
   * 视频剪辑的结束时间偏移，单位：秒。
   */
  EndTimeOffset?: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 采样截图后图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_sampleSnapshot_{definition}_{number}.{format}`。
   */
  OutputObjectPath?: string

  /**
      * 采样截图后输出路径中的`{number}`变量的规则。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ObjectNumberFormat?: NumberFormat
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
  OcrReviewInfo: TerrorismOcrReviewTemplateInfo
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Status: string

  /**
   * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/862/50369#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
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
   * 智能分类任务输入。
   */
  Input: AiAnalysisTaskClassificationInput

  /**
      * 智能分类任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Output: AiAnalysisTaskClassificationOutput
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
 * 人脸识别结果
 */
export interface AiRecognitionTaskFaceResultItem {
  /**
   * 人物唯一标识 ID。
   */
  Id: string

  /**
      * 人物库类型，表示识别出的人物来自哪个人物库：
<li>Default：默认人物库；</li>
<li>UserDefine：用户自定义人物库。</li>
      */
  Type: string

  /**
   * 人物名称。
   */
  Name: string

  /**
   * 人物出现的片段结果集。
   */
  SegmentSet: Array<AiRecognitionTaskFaceSegmentItem>
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
}

/**
 * DeleteWatermarkTemplate返回参数结构体
 */
export interface DeleteWatermarkTemplateResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIRecognitionTemplates请求参数结构体
 */
export interface DescribeAIRecognitionTemplatesRequest {
  /**
   * 视频内容识别模板唯一标识过滤条件，数组长度限制：10。
   */
  Definitions?: Array<number>

  /**
   * 分页偏移量，默认值：0。
   */
  Offset?: number

  /**
   * 返回记录条数，默认值：10，最大值：50。
   */
  Limit?: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      */
  Type: string

  /**
      * 人脸识别结果，当 Type 为 
 FaceRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FaceTask: AiRecognitionTaskFaceResult

  /**
      * 语音关键词识别结果，当 Type 为
 AsrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsrWordsTask: AiRecognitionTaskAsrWordsResult

  /**
      * 语音全文识别结果，当 Type 为
 AsrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AsrFullTextTask: AiRecognitionTaskAsrFullTextResult

  /**
      * 文本关键词识别结果，当 Type 为
 OcrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OcrWordsTask: AiRecognitionTaskOcrWordsResult

  /**
      * 文本全文识别结果，当 Type 为
 OcrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
  OcrFullTextTask: AiRecognitionTaskOcrFullTextResult
}

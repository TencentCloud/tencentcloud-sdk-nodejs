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
 * 文本片段及其时间戳
 */
export interface AsrTimestamps {
  /**
   * 文本片段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Text?: string
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartMs?: number
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndMs?: number
}

/**
 * ConfirmVideoTranslateJob请求参数结构体
 */
export interface ConfirmVideoTranslateJobRequest {
  /**
   * 视频翻译任务 ID
   */
  JobId: string
  /**
   * 待确认文本
   */
  TranslateResults: Array<AudioTranslateResult>
}

/**
 * SubmitVideoTranslateJob请求参数结构体
 */
export interface SubmitVideoTranslateJobRequest {
  /**
   * 视频地址URL。
格式要求：支持 mp4、mov 。
时长要求：【10-300】秒。
fps 要求：【15-60】fps
分辨率要求：单边像素要求在 【540~1920】 之间。
   */
  VideoUrl: string
  /**
   * 源语言：zh(中文), en(英文)
   */
  SrcLang: string
  /**
   * 目标语种：
zh(简体中文)、en(英语)、ar(阿拉伯语)、de(德语)、es(西班牙语)、fr(法语)、id(印尼语)、it(意大利语)、ja(日语)、ko(韩语)、ms(马来语)、pt(葡萄牙语)、ru(俄语)、th(泰语)、tr(土耳其语)、vi(越南语)
示例值：ar(阿拉伯语)
   */
  DstLang: string
  /**
   * 当音频 URL 不为空时，默认以音频驱动视频任务口型。
格式要求：支持 mp3、m4a、acc、wav 格式。
时长要求：【10~300】秒
大小要求：不超过 100M。
示例值：http://xxx/audio.mp3
   */
  AudioUrl?: string
  /**
   * 是否需要去除VideoUrl或AudioUrl中背景音，取值范围：0-不需要，1-需要，默认0 。
   */
  RemoveVocal?: number
  /**
   * 是否需要确认翻译结果0：不需要，1：需要
   */
  Confirm?: number
  /**
   * 是否开启口型驱动，0：不开启，1：开启。默认开启。
   */
  LipSync?: number
  /**
   * 音色种别：一种音色种别对应一种不同区域的音色
1）目标语种为小语种(非zh,en)时，该项为必填
2）目标语种为zh,en时，该项为非必填，若填入，则对应填入的音色

具体音色包含请见“支持音色种别列表”
   */
  VoiceType?: string
}

/**
 * ConfirmVideoTranslateJob返回参数结构体
 */
export interface ConfirmVideoTranslateJobResponse {
  /**
   * 视频翻译任务 ID
   */
  JobId?: string
  /**
   * 音频转换任务 ID
   */
  TaskId?: string
  /**
   * 音频翻译结果确认 session
   */
  SessionId?: string
  /**
   * 视频转译任务状态
   */
  Status?: number
  /**
   * 视频转译任务信息
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoTranslateJob请求参数结构体
 */
export interface DescribeVideoTranslateJobRequest {
  /**
   * JobId。
   */
  JobId: string
}

/**
 * SubmitVideoTranslateJob返回参数结构体
 */
export interface SubmitVideoTranslateJobResponse {
  /**
   * 视频转译任务的Job id
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 音频翻译结果。
 */
export interface TranslateResult {
  /**
   * 翻译源文字。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceText?: string
  /**
   * 翻译后文字。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetText?: string
}

/**
 * 音频翻译结果
 */
export interface AudioTranslateResult {
  /**
   * 原文本
   */
  SourceText: string
  /**
   * 目标文本
   */
  TargetText: string
}

/**
 * DescribeVideoTranslateJob返回参数结构体
 */
export interface DescribeVideoTranslateJobResponse {
  /**
   * 任务状态。 1：音频翻译中。 2：音频翻译失败。 3：音频翻译成功。 4：音频结果待确认。 5：音频结果已确认完毕。6：视频翻译中。 7：视频翻译失败。 8：视频翻译成功。
   */
  JobStatus?: number
  /**
   * 任务错误码。
   */
  JobErrorCode?: string
  /**
   * 任务错误信息。
   */
  JobErrorMsg?: string
  /**
   * 视频翻译结果。
   */
  ResultVideoUrl?: string
  /**
   * 音频翻译结果。
   */
  TranslateResults?: Array<TranslateResult>
  /**
   * 是否需要确认翻译结果。0：不需要，1：需要
   */
  JobConfirm?: number
  /**
   * 音频任务 ID
   */
  JobAudioTaskId?: string
  /**
   * 视频审核任务ID
   */
  JobVideoModerationId?: string
  /**
   * 视频生成任务 ID
   */
  JobVideoId?: string
  /**
   * 视频素材原始 URL
   */
  OriginalVideoUrl?: string
  /**
   * 文本片段及其时间戳
   */
  AsrTimestamps?: Array<AsrTimestamps>
  /**
   * 提交视频翻译任务时的 requestId
   */
  JobSubmitReqId?: string
  /**
   * 音频审核任务 ID
   */
  JobAudioModerationId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

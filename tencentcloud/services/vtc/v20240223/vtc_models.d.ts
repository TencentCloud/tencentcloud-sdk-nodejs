/**
 * 文本片段及其时间戳
 */
export interface AsrTimestamps {
    /**
     * 文本片段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Text?: string;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartMs?: number;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndMs?: number;
}
/**
 * ConfirmVideoTranslateJob请求参数结构体
 */
export interface ConfirmVideoTranslateJobRequest {
    /**
     * 视频翻译任务 ID
     */
    JobId: string;
    /**
     * 待确认文本
     */
    TranslateResults: Array<AudioTranslateResult>;
}
/**
 * SubmitVideoTranslateJob请求参数结构体
 */
export interface SubmitVideoTranslateJobRequest {
    /**
     * 视频地址URL。
     */
    VideoUrl: string;
    /**
     * 源语言：zh, en
     */
    SrcLang: string;
    /**
     * 目标语言：zh, en
     */
    DstLang: string;
    /**
     * 当音频 URL 不为空时，默认以音频驱动视频任务口型
     */
    AudioUrl?: string;
    /**
     * 是否需要确认翻译结果0：不需要，1：需要
     */
    Confirm?: number;
    /**
     * 是否开启口型驱动，0：不开启，1：开启。默认开启。
     */
    LipSync?: number;
}
/**
 * ConfirmVideoTranslateJob返回参数结构体
 */
export interface ConfirmVideoTranslateJobResponse {
    /**
     * 视频翻译任务 ID
     */
    JobId?: string;
    /**
     * 音频转换任务 ID
     */
    TaskId?: string;
    /**
     * 音频翻译结果确认 session
     */
    SessionId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVideoTranslateJob请求参数结构体
 */
export interface DescribeVideoTranslateJobRequest {
    /**
     * JobId。
     */
    JobId: string;
}
/**
 * SubmitVideoTranslateJob返回参数结构体
 */
export interface SubmitVideoTranslateJobResponse {
    /**
     * 任务ID。
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音频翻译结果。
 */
export interface TranslateResult {
    /**
     * 翻译源文字。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceText?: string;
    /**
     * 翻译后文字。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetText?: string;
}
/**
 * 音频翻译结果
 */
export interface AudioTranslateResult {
    /**
     * 原文本
     */
    SourceText: string;
    /**
     * 目标文本
     */
    TargetText: string;
}
/**
 * DescribeVideoTranslateJob返回参数结构体
 */
export interface DescribeVideoTranslateJobResponse {
    /**
     * 任务状态。 1：音频翻译中。 2：音频翻译失败。 3：音频翻译成功。 4：音频结果待确认。 5：音频结果已确认完毕。6：视频翻译中。 7：视频翻译失败。 8：视频翻译成功。
     */
    JobStatus?: number;
    /**
     * 任务错误码。
     */
    JobErrorCode?: string;
    /**
     * 任务错误信息。
     */
    JobErrorMsg?: string;
    /**
     * 视频翻译结果。
     */
    ResultVideoUrl?: string;
    /**
     * 音频翻译结果。
     */
    TranslateResults?: Array<TranslateResult>;
    /**
     * 是否需要确认翻译结果。0：不需要，1：需要
     */
    JobConfirm?: number;
    /**
     * 音频任务 ID
     */
    JobAudioTaskId?: string;
    /**
     * 视频审核任务ID
     */
    JobVideoModerationId?: string;
    /**
     * 视频生成任务 ID
     */
    JobVideoId?: string;
    /**
     * 视频素材原始 URL
     */
    OriginalVideoUrl?: string;
    /**
     * 文本片段及其时间戳
     */
    AsrTimestamps?: Array<AsrTimestamps>;
    /**
     * 提交视频翻译任务时的 requestId
     */
    JobSubmitReqId?: string;
    /**
     * 音频审核任务 ID
     */
    JobAudioModerationId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}

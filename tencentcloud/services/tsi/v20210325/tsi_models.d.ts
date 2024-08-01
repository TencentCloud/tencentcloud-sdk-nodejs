/**
 * TongChuanSync返回参数结构体
 */
export interface TongChuanSyncResponse {
    /**
     * 同传结果数组
     */
    List?: Array<DisplayInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 同传结果数据
 */
export interface DisplayInfo {
    /**
     * 句子 ID
     */
    SeId?: string;
    /**
     * 句子版本号
     */
    SeVer?: number;
    /**
     * 识别结果
     */
    SourceText?: string;
    /**
     *  翻译结果
     */
    TargetText?: string;
    /**
     * 句子开始时间
     */
    StartTime?: number;
    /**
     * 句子结束时间
     */
    EndTime?: number;
    /**
     *  当前句子是否已结束
     */
    IsEnd?: boolean;
}
/**
 * TongChuanRecognize返回参数结构体
 */
export interface TongChuanRecognizeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TongChuanDisplay请求参数结构体
 */
export interface TongChuanDisplayRequest {
    /**
     * 一段完整的语音对应一个SessionUuid
     */
    SessionUuid: string;
    /**
     * 句子排序方式，1-由新到旧
     */
    IsNew: number;
    /**
     * 最多返回几句，目前只支持 5 条数据
     */
    SeMax: number;
}
/**
 * TongChuanRecognize请求参数结构体
 */
export interface TongChuanRecognizeRequest {
    /**
     * 一段完整的语音对应一个SessionUuid
     */
    SessionUuid: string;
    /**
     * 源语言，支持：
  zh：中文
  en：英语
  ja：日语
  ko：韩语
  yue：粤语
     */
    Source: string;
    /**
     * 目标语言，各源语言的目标语言支持列表如下
  <li>zh（中文）：en（英语）、ja（日语）、ko（韩语）、yue（粤语）</li>
  <li>en（英语）：zh（中文）</li>
  <li>ja（日语）：zh（中文）</li>
  <li>ko（韩语）：zh（中文）</li>
  <li>yue（粤语）：zh（中文）</li>
     */
    Target: string;
    /**
     * 语音编码类型，1-pcm
     */
    AudioFormat: number;
    /**
     * 语音分片的序号，从0开始
     */
    Seq: number;
    /**
     * 语音开始的时间戳
     */
    Utc: number;
    /**
     * 是否最后一片语音分片，0-否，1-是
     */
    IsEnd: number;
    /**
     * 翻译时机，0-不翻译 2-句子实时翻译
     */
    TranslateTime: number;
    /**
     * 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。
     */
    Data: string;
}
/**
 * TongChuanDisplay返回参数结构体
 */
export interface TongChuanDisplayResponse {
    /**
     * 同传结果数组
     */
    List?: Array<DisplayInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TongChuanSync请求参数结构体
 */
export interface TongChuanSyncRequest {
    /**
     * 一段完整的语音对应一个SessionUuid
     */
    SessionUuid: string;
    /**
     * 源语言，支持：
  zh：中文
  en：英语
  ja：日语
  ko：韩语
  yue：粤语
     */
    Source: string;
    /**
     * 目标语言，各源语言的目标语言支持列表如下
  <li>zh（中文）：en（英语）、ja（日语）、ko（韩语）、yue（粤语）</li>
  <li>en（英语）：zh（中文）</li>
  <li>ja（日语）：zh（中文）</li>
  <li>ko（韩语）：zh（中文）</li>
  <li>yue（粤语）：zh（中文）</li>
     */
    Target: string;
    /**
     * 语音编码类型，1-pcm
     */
    AudioFormat: number;
    /**
     * 语音分片的序号，从0开始
     */
    Seq: number;
    /**
     * 语音开始的时间戳
     */
    Utc: number;
    /**
     * 是否最后一片语音分片，0-否，1-是
     */
    IsEnd: number;
    /**
     * 翻译时机，0-不翻译 2-句子实时翻译
     */
    TranslateTime: number;
    /**
     * 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。
     */
    Data: string;
}

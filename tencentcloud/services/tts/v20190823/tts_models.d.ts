/**
 * TextToVoice返回参数结构体
 */
export interface TextToVoiceResponse {
    /**
     * base64编码的wav/mp3音频数据
     */
    Audio?: string;
    /**
     * 一次请求对应一个SessionId
     */
    SessionId?: string;
    /**
     * 时间戳信息，若未开启时间戳，则返回空数组。
     */
    Subtitles?: Array<Subtitle>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTtsTask返回参数结构体
 */
export interface CreateTtsTaskResponse {
    /**
     * 任务 id
     */
    Data?: CreateTtsTaskRespData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTtsTaskStatus返回参数结构体
 */
export interface DescribeTtsTaskStatusResponse {
    /**
     * 任务状态返回
     */
    Data?: DescribeTtsTaskStatusRespData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 异步合成请求的返回数据
 */
export interface CreateTtsTaskRespData {
    /**
     * 任务ID，可通过此ID在轮询接口获取合成状态与结果。注意：TaskId数据类型为string
     */
    TaskId: string;
}
/**
 * 获取异步合成结果的返回参数
 */
export interface DescribeTtsTaskStatusRespData {
    /**
     * 任务标识。
     */
    TaskId?: string;
    /**
     * 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。
     */
    Status?: number;
    /**
     * 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。
     */
    StatusStr?: string;
    /**
     * 合成音频COS地址（链接有效期1天）。
     */
    ResultUrl?: string;
    /**
     * 时间戳信息，若未开启时间戳，则返回空数组。
     */
    Subtitles?: Array<Subtitle>;
    /**
     * 失败原因说明。
     */
    ErrorMsg?: string;
}
/**
 * 时间戳信息。
 */
export interface Subtitle {
    /**
     * ⽂本信息。
     */
    Text?: string;
    /**
     * ⽂本对应tts语⾳开始时间戳，单位ms。
     */
    BeginTime?: number;
    /**
     * ⽂本对应tts语⾳结束时间戳，单位ms。
     */
    EndTime?: number;
    /**
     * 该文本在时间戳数组中的开始位置，从0开始。
     */
    BeginIndex?: number;
    /**
     * 该文本在时间戳数组中的结束位置，从0开始。
     */
    EndIndex?: number;
    /**
     * 该字的音素。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Phoneme?: string;
}
/**
 * DescribeTtsTaskStatus请求参数结构体
 */
export interface DescribeTtsTaskStatusRequest {
    /**
     * 任务id
     */
    TaskId: string;
}
/**
 * CreateTtsTask请求参数结构体
 */
export interface CreateTtsTaskRequest {
    /**
     * 合成语音的源文本，按UTF-8编码统一计算，最多支持10万字符
     */
    Text: string;
    /**
     * 音量大小，范围[-10，10]，对应音量大小。默认为0，代表正常音量，值越大音量越高。
     */
    Volume?: number;
    /**
     * 语速，范围：[-2，6]，分别对应不同语速：<li>-2代表0.6倍</li><li>-1代表0.8倍</li><li>0代表1.0倍（默认）</li><li>1代表1.2倍</li><li>2代表1.5倍</li><li>6代表2.5倍</li>如果需要更细化的语速，可以保留小数点后 2 位，例如0.5/1.25/2.81等。<br>参数值与实际语速转换，可参考[代码示例](https://sdk-1300466766.cos.ap-shanghai.myqcloud.com/sample/speed_sample.tar.gz)
     */
    Speed?: number;
    /**
     * 项目id，用户自定义，默认为0。
     */
    ProjectId?: number;
    /**
     * 模型类型，1-默认模型。
     */
    ModelType?: number;
    /**
     * 音色 ID，包括标准音色与精品音色，精品音色拟真度更高，价格不同于标准音色，请参见[购买指南](https://cloud.tencent.com/document/product/1073/34112)。完整的音色 ID 列表请参见[音色列表](https://cloud.tencent.com/document/product/1073/92668)。
     */
    VoiceType?: number;
    /**
     * 主语言类型：<li>1-中文（默认）</li><li>2-英文</li><li>3-日文</li>
     */
    PrimaryLanguage?: number;
    /**
     * 音频采样率：<li>16000：16k（默认）</li><li>8000：8k</li>
     */
    SampleRate?: number;
    /**
     * 返回音频格式，可取值：mp3（默认），wav，pcm
     */
    Codec?: string;
    /**
     * 回调 URL，用户自行搭建的用于接收识别结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。[回调说明](https://cloud.tencent.com/document/product/1073/55746)
     */
    CallbackUrl?: string;
    /**
     * 是否开启时间戳功能，默认为false。
     */
    EnableSubtitle?: boolean;
    /**
     * 旁白与对白文本解析，分别合成相应风格（仅适用于旁对白音色10510000、100510000），默认 false
     */
    VoiceoverDialogueSplit?: boolean;
    /**
     * 控制合成音频的情感，仅支持多情感音色使用。取值: neutral(中性)、sad(悲伤)、happy(高兴)、angry(生气)、fear(恐惧)、news(新闻)、story(故事)、radio(广播)、poetry(诗歌)、call(客服)、sajiao(撒娇)、disgusted(厌恶)、amaze(震惊)、peaceful(平静)、exciting(兴奋)、aojiao(傲娇)、jieshuo(解说)
     */
    EmotionCategory?: string;
    /**
     * 控制合成音频情感程度，取值范围为[50,200],默认为100；只有EmotionCategory不为空时生效。
     */
    EmotionIntensity?: number;
}
/**
 * TextToVoice请求参数结构体
 */
export interface TextToVoiceRequest {
    /**
     * 合成语音的源文本，按UTF-8编码统一计算。
  中文最大支持150个汉字（全角标点符号算一个汉字）；英文最大支持500个字母（半角标点符号算一个字母）。
     */
    Text: string;
    /**
     * 一次请求对应一个SessionId，会原样返回，建议传入类似于uuid的字符串防止重复。
     */
    SessionId: string;
    /**
     * 音量大小，范围[-10，10]，对应音量大小。默认为0，代表正常音量，值越大音量越高。
     */
    Volume?: number;
    /**
     * 语速，范围：[-2，6]，分别对应不同语速：<li>-2代表0.6倍</li><li>-1代表0.8倍</li><li>0代表1.0倍（默认）</li><li>1代表1.2倍</li><li>2代表1.5倍</li><li>6代表2.5倍</li>如果需要更细化的语速，可以保留小数点后 2 位，例如0.5/1.25/2.81等。<br>参数值与实际语速转换，可参考[代码示例](https://sdk-1300466766.cos.ap-shanghai.myqcloud.com/sample/speed_sample.tar.gz)
     */
    Speed?: number;
    /**
     * 项目id，用户自定义，默认为0。
     */
    ProjectId?: number;
    /**
     * 模型类型，1-默认模型。
     */
    ModelType?: number;
    /**
     * 音色 ID，包括标准音色与精品音色，精品音色拟真度更高，价格不同于标准音色，请参见[购买指南](https://cloud.tencent.com/document/product/1073/34112)。完整的音色 ID 列表请参见[音色列表](https://cloud.tencent.com/document/product/1073/92668)。
  若使用一句话版声音复刻，请填入固定值“200000000”
     */
    VoiceType?: number;
    /**
     * 主语言类型：<li>1-中文（默认）</li><li>2-英文</li><li>3-日文</li>
     */
    PrimaryLanguage?: number;
    /**
     * 音频采样率：
  <li>24000：24k（部分音色支持，请参见[音色列表](https://cloud.tencent.com/document/product/1073/92668)）</li>
  <li>16000：16k（默认）</li>
  <li>8000：8k</li>
     */
    SampleRate?: number;
    /**
     * 返回音频格式，可取值：wav（默认），mp3，pcm
     */
    Codec?: string;
    /**
     * 是否开启时间戳功能，默认为false。
     */
    EnableSubtitle?: boolean;
    /**
     * 断句敏感阈值，默认值为：0，取值范围：[0,1,2]。该值越大越不容易断句，模型会更倾向于仅按照标点符号断句。此参数建议不要随意调整，可能会影响合成效果。
     */
    SegmentRate?: number;
    /**
     * 控制合成音频的情感，仅支持多情感音色使用。取值: neutral(中性)、sad(悲伤)、happy(高兴)、angry(生气)、fear(恐惧)、news(新闻)、story(故事)、radio(广播)、poetry(诗歌)、call(客服)、sajiao(撒娇)、disgusted(厌恶)、amaze(震惊)、peaceful(平静)、exciting(兴奋)、aojiao(傲娇)、jieshuo(解说)
  示例值：neutral
     */
    EmotionCategory?: string;
    /**
     * 控制合成音频情感程度，取值范围为[50,200],默认为100；只有EmotionCategory不为空时生效；
     */
    EmotionIntensity?: number;
    /**
     * 一句话版声音复刻音色ID，使用一句话版声音复刻音色时需填写。【已废弃】
     */
    FastVoiceType?: string;
}

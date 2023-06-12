/**
 * Chat请求参数结构体
 */
export interface ChatRequest {
    /**
     * 聊天输入文本
     */
    Text: string;
    /**
     * 腾讯云项目 ID，可填 0，总长度不超过 1024 字节。
     */
    ProjectId: number;
    /**
     * json格式，比如 {"id":"test","gender":"male"}。记录当前与机器人交互的用户id，非必须但强烈建议传入，否则多轮聊天功能会受影响
     */
    User?: string;
}
/**
 * SentenceRecognition返回参数结构体
 */
export interface SentenceRecognitionResponse {
    /**
     * 识别结果。
     */
    Result?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SimultaneousInterpreting返回参数结构体
 */
export interface SimultaneousInterpretingResponse {
    /**
     * 语音识别的结果
     */
    AsrText?: string;
    /**
     * 机器翻译的结果
     */
    NmtText?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SimultaneousInterpreting请求参数结构体
 */
export interface SimultaneousInterpretingRequest {
    /**
     * 腾讯云项目 ID，可填 0，总长度不超过 1024 字节。
     */
    ProjectId: number;
    /**
     * 子服务类型。0：离线语音识别。1：实时流式识别，2，一句话识别。3：同传。
     */
    SubServiceType: number;
    /**
     * 识别引擎类型。8k_zh： 8k 中文会场模型；16k_zh：16k 中文会场模型，8k_en： 8k 英文会场模型；16k_en：16k 英文会场模型。当前仅支持16K。
     */
    RecEngineModelType: string;
    /**
     * 语音数据，要base64编码。
     */
    Data: string;
    /**
     * 数据长度。
     */
    DataLen: number;
    /**
     * 声音id，标识一句话。
     */
    VoiceId: string;
    /**
     * 是否是一句话的结束。
     */
    IsEnd: number;
    /**
     * 声音编码的格式1:pcm，4:speex，6:silk，默认为1。
     */
    VoiceFormat: number;
    /**
     * 是否需要翻译结果，1表示需要翻译，0是不需要。
     */
    OpenTranslate: number;
    /**
     * 如果需要翻译，表示源语言类型，可取值：zh，en。
     */
    SourceLanguage: string;
    /**
     * 如果需要翻译，表示目标语言类型，可取值：zh，en。
     */
    TargetLanguage: string;
    /**
     * 表明当前语音分片的索引，从0开始
     */
    Seq: number;
}
/**
 * SentenceRecognition请求参数结构体
 */
export interface SentenceRecognitionRequest {
    /**
     * 腾讯云项目 ID，可填 0，总长度不超过 1024 字节。
     */
    ProjectId: number;
    /**
     * 子服务类型。2，一句话识别。
     */
    SubServiceType: number;
    /**
     * 引擎类型。8k：电话 8k 通用模型；16k：16k 通用模型。只支持单声道音频识别。
     */
    EngSerViceType: string;
    /**
     * 语音数据来源。0：语音 URL；1：语音数据（post body）。
     */
    SourceType: number;
    /**
     * 识别音频的音频格式（支持mp3,wav）。
     */
    VoiceFormat: string;
    /**
     * 用户端对此任务的唯一标识，用户自助生成，用于用户查找识别结果。
     */
    UsrAudioKey: string;
    /**
     * 语音 URL，公网可下载。当 SourceType 值为 0 时须填写该字段，为 1 时不填；URL 的长度大于 0，小于 2048，需进行urlencode编码。音频时间长度要小于60s。
     */
    Url?: string;
    /**
     * 语音数据，当SourceType 值为1时必须填写，为0可不写。要base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频数据要小于600kB。
     */
    Data?: string;
    /**
     * 数据长度，当 SourceType 值为1时必须填写，为0可不写（此数据长度为数据未进行base64编码时的数据长度）。
     */
    DataLen?: number;
}
/**
 * TextToVoice请求参数结构体
 */
export interface TextToVoiceRequest {
    /**
     * 合成语音的源文本，按UTF-8编码统一计算。
  中文最大支持100个汉字（全角标点符号算一个汉字）；英文最大支持400个字母（半角标点符号算一个字母）。包含空格等字符时需要url encode再传输。
     */
    Text: string;
    /**
     * 一次请求对应一个SessionId，会原样返回，建议传入类似于uuid的字符串防止重复。
     */
    SessionId: string;
    /**
     * 模型类型，1-默认模型。
     */
    ModelType: number;
    /**
     * 音量大小，范围：[0，10]，分别对应11个等级的音量，默认为0，代表正常音量。没有静音选项。
  输入除以上整数之外的其他参数不生效，按默认值处理。
     */
    Volume?: number;
    /**
     * 语速，范围：[-2，2]，分别对应不同语速：<li>-2代表0.6倍</li><li>-1代表0.8倍</li><li>0代表1.0倍（默认）</li><li>1代表1.2倍</li><li>2代表1.5倍</li>输入除以上整数之外的其他参数不生效，按默认值处理。
     */
    Speed?: number;
    /**
     * 项目id，用户自定义，默认为0。
     */
    ProjectId?: number;
    /**
     * 音色<li>0-亲和女声(默认)</li><li>1-亲和男声</li><li>2-成熟男声</li><li>3-活力男声</li><li>4-温暖女声</li><li>5-情感女声</li><li>6-情感男声</li>
     */
    VoiceType?: number;
    /**
     * 主语言类型：<li>1-中文（默认）</li><li>2-英文</li>
     */
    PrimaryLanguage?: number;
    /**
     * 音频采样率：<li>16000：16k（默认）</li><li>8000：8k</li>
     */
    SampleRate?: number;
    /**
     * 返回音频格式，可取值：wav（默认），mp3
     */
    Codec?: string;
}
/**
 * Chat返回参数结构体
 */
export interface ChatResponse {
    /**
     * 聊天输出文本
     */
    Answer?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}

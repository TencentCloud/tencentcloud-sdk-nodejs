/**
 * CreateCustomization返回参数结构体
 */
export interface CreateCustomizationResponse {
    /**
     * 模型ID
     */
    ModelId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 关键字识别结果
 */
export interface KeyWordResult {
    /**
     * 关键词库ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyWordLibID?: string;
    /**
     * 关键词库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyWordLibName?: string;
    /**
     * 匹配到的关键词
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyWords?: Array<string>;
}
/**
 * ModifyCustomizationState请求参数结构体
 */
export interface ModifyCustomizationStateRequest {
    /**
     * 自学习模型ID
     */
    ModelId: string;
    /**
     * 想要变换的模型状态，-1代表下线，1代表上线
     */
    ToState: number;
}
/**
 * CreateRecTask返回参数结构体
 */
export interface CreateRecTaskResponse {
    /**
     * 录音文件识别的请求返回结果，包含结果查询需要的TaskId。
  **注意：TaskId有效期为24小时，不同日期可能出现重复TaskId，请不要依赖TaskId作为您业务系统里的唯一ID。**
  
     */
    Data?: Task;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateAsrVocab返回参数结构体
 */
export interface UpdateAsrVocabResponse {
    /**
     * 热词表ID
     */
    VocabId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAsrKeyWordLib返回参数结构体
 */
export interface DeleteAsrKeyWordLibResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAsrKeyWordLib请求参数结构体
 */
export interface CreateAsrKeyWordLibRequest {
    /**
     * 词表名称，长度在1-20之间
  仅限中英文数字-_
     */
    Name: string;
    /**
     * 词文件（纯文本文件）的二进制base64编码，以行分隔
  格式要求：TXT
  每行只有一个词，不满足格式则报错无法上传
  每个词限制**5个汉字，15个字符**，单个词库最多不超过100个词
  注意不要有空行，尤其是最后一行
     */
    KeyWordFile?: string;
}
/**
 * VoicePrintGroupVerify请求参数结构体
 */
export interface VoicePrintGroupVerifyRequest {
    /**
     * 音频格式 0: pcm, 1: wav
     */
    VoiceFormat: number;
    /**
     * 音频采样率，目前支持16000，单位：Hz，必填
     */
    SampleRate: number;
    /**
     * 音频数据, base64 编码, 音频时长不能超过30s，数据大小不超过2M
     */
    Data: string;
    /**
     * 分组id, 支持数字，字母，下划线，长度不超过128
     */
    GroupId: string;
    /**
     * 返回打分结果降序排列topN, TopN大于0， 小于可创建声纹最大数量
     */
    TopN: number;
}
/**
 * GetCustomizationList返回参数结构体
 */
export interface GetCustomizationListResponse {
    /**
     * 自学习模型数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<Model>;
    /**
     * 自学习模型总量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CloseAsyncRecognitionTask请求参数结构体
 */
export interface CloseAsyncRecognitionTaskRequest {
    /**
     * 语音流异步识别任务的唯一标识，在创建任务时会返回
     */
    TaskId: number;
}
/**
 * [录音文件识别](https://cloud.tencent.com/document/product/1093/37823#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)、[实时语音异步识别](https://cloud.tencent.com/document/product/1093/52061#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)请求的返回数据
 */
export interface Task {
    /**
     * 任务ID，可通过此ID在轮询接口获取识别状态与结果。TaskId数据类型为**uint64**。
  **注意：TaskId有效期为24小时，不同日期可能出现重复TaskId，请不要依赖TaskId作为您业务系统里的唯一ID。**
     */
    TaskId?: number;
}
/**
 * [音频流异步识别任务列表](https://cloud.tencent.com/document/product/1093/52060#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)
 */
export interface AsyncRecognitionTasks {
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tasks?: Array<AsyncRecognitionTaskInfo>;
}
/**
 * DeleteCustomization返回参数结构体
 */
export interface DeleteCustomizationResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * [获取录音识别结果的返回参数](https://cloud.tencent.com/document/product/1093/37822#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)
 */
export interface TaskStatus {
    /**
     * 任务标识。注意：TaskId数据类型为uint64。
     */
    TaskId?: number;
    /**
     * 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。
     */
    Status?: number;
    /**
     * 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。
     */
    StatusStr?: string;
    /**
     * 识别结果。
     */
    Result?: string;
    /**
     * 失败原因说明。
     */
    ErrorMsg?: string;
    /**
     * 识别结果详情，包含每个句子中的词时间偏移，一般用于生成字幕的场景。(录音识别请求中ResTextFormat=1时该字段不为空)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultDetail?: Array<SentenceDetail>;
    /**
     * 音频时长(秒)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioDuration?: number;
}
/**
 * GetCustomizationList请求参数结构体
 */
export interface GetCustomizationListRequest {
    /**
     * 标签信息，格式为“$TagKey : $TagValue ”，中间分隔符为“空格”+“:”+“空格”
     * @deprecated
     */
    TagInfos?: Array<string>;
    /**
     * 分页大小，默认1000
     */
    Limit?: number;
    /**
     * 分页offset，默认0
     */
    Offset?: number;
}
/**
 * SentenceRecognition请求参数结构体
 */
export interface SentenceRecognitionRequest {
    /**
     * 引擎模型类型。
  电话场景：
  • 8k_zh：中文电话通用；
  • 8k_en：英文电话通用；
  
  非电话场景：
  • 16k_zh：中文通用；
  • 16k_zh-PY：中英粤;
  • 16k_zh_medical：中文医疗；
  • 16k_en：英语；
  • 16k_yue：粤语；
  • 16k_ja：日语；
  • 16k_ko：韩语；
  • 16k_vi：越南语；
  • 16k_ms：马来语；
  • 16k_id：印度尼西亚语；
  • 16k_fil：菲律宾语；
  • 16k_th：泰语；
  • 16k_pt：葡萄牙语；
  • 16k_tr：土耳其语；
  • 16k_ar：阿拉伯语；
  • 16k_es：西班牙语；
  • 16k_hi：印地语；
  • 16k_fr：法语；
  • 16k_de：德语；
  • 16k_zh_dialect：多方言，支持23种方言（上海话、四川话、武汉话、贵阳话、昆明话、西安话、郑州话、太原话、兰州话、银川话、西宁话、南京话、合肥话、南昌话、长沙话、苏州话、杭州话、济南话、天津话、石家庄话、黑龙江话、吉林话、辽宁话）；
     */
    EngSerViceType: string;
    /**
     * 语音数据来源。0：语音 URL；1：语音数据（post body）。
     */
    SourceType: number;
    /**
     * 识别音频的音频格式，支持wav、pcm、ogg-opus、speex、silk、mp3、m4a、aac、amr。
     */
    VoiceFormat: string;
    /**
     * 腾讯云项目 ID，废弃参数，填写0即可。
     * @deprecated
     */
    ProjectId?: number;
    /**
     * 子服务类型。2： 一句话识别。
     * @deprecated
     */
    SubServiceType?: number;
    /**
     * 语音的URL地址，需要公网环境浏览器可下载。当 SourceType 值为 0时须填写该字段，为 1 时不填。音频时长不能超过60s，音频文件大小不能超过3MB。
  
  注意：推荐使用 [腾讯云COS](https://cloud.tencent.com/document/product/436/38484) 来存储音频、生成URL并提交请求，此种方式会走内网下载音频，极大降低整体请求时延；并且不会产生外网和流量下行费用，可节约成本（COS桶权限需要设置公有读私有写，或URL设置时效访问签名）
     */
    Url?: string;
    /**
     * 废弃参数，填写任意字符串即可。
     * @deprecated
     */
    UsrAudioKey?: string;
    /**
     * 语音数据，当SourceType 值为1（本地语音数据上传）时必须填写，当SourceType 值为0（语音 URL上传）可不写。要使用base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频时长不能超过60s，音频文件大小不能超过3MB（Base64后）。
     */
    Data?: string;
    /**
     * 数据长度，单位为字节。当 SourceType 值为1（本地语音数据上传）时必须填写，当 SourceType 值为0（语音 URL上传）可不写（此数据长度为数据未进行base64编码时的数据长度）。
     */
    DataLen?: number;
    /**
     * 是否显示词级别时间戳。0：不显示；1：显示，不包含标点时间戳，2：显示，包含标点时间戳。默认值为 0。
     */
    WordInfo?: number;
    /**
     * 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0。
     */
    FilterDirty?: number;
    /**
     * 是否过滤语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0。
     */
    FilterModal?: number;
    /**
     * 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认值为 0。
     */
    FilterPunc?: number;
    /**
     * 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1。
     */
    ConvertNumMode?: number;
    /**
     * 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。
     */
    HotwordId?: string;
    /**
     * 自学习模型 id。如设置了该参数，将生效对应的自学习模型。
     */
    CustomizationId?: string;
    /**
     * 热词增强功能。1:开启后（仅支持8k_zh,16k_zh），将开启同音替换功能，同音字、词在热词中配置。举例：热词配置“蜜制”并开启增强功能后，与“蜜制”同拼音（mizhi）的“秘制”的识别结果会被强制替换成“蜜制”。因此建议客户根据自己的实际情况开启该功能。
     * @deprecated
     */
    ReinforceHotword?: number;
    /**
     * 临时热词表：该参数用于提升识别准确率。
  单个热词限制："热词|权重"，单个热词不超过30个字符（最多10个汉字），权重1-11或者100，如：“腾讯云|5” 或 “ASR|11”；
  临时热词表限制：多个热词用英文逗号分割，最多支持128个热词，如：“腾讯云|10,语音识别|5,ASR|11”；
  参数 hotword_list（临时热词表） 与 hotword_id（热词表） 区别：
  hotword_id：热词表。需要先在控制台或接口创建热词表，获得对应hotword_id传入参数来使用热词功能；
  hotword_list：临时热词表。每次请求时直接传入临时热词表来使用热词功能，云端不保留临时热词表。适用于有极大量热词需求的用户；
  注意：
  • 如果同时传入了 hotword_id 和 hotword_list，会优先使用 hotword_list；
  • 热词权重设置为11时，当前热词将升级为超级热词，建议仅将重要且必须生效的热词设置到11，设置过多权重为11的热词将影响整体字准率。
  • 热词权重设置为100时，当前热词开启热词增强同音替换功能（仅支持8k_zh,16k_zh），举例：热词配置“蜜制|100”时，与“蜜制”同拼音（mizhi）的“秘制”的识别结果会被强制替换成“蜜制”。因此建议客户根据自己的实际情况开启该功能。建议仅将重要且必须生效的热词设置到100，设置过多权重为100的热词将影响整体字准率。
     */
    HotwordList?: string;
    /**
     * 支持pcm格式的8k音频在与引擎采样率不匹配的情况下升采样到16k后识别，能有效提升识别准确率。仅支持：8000。如：传入 8000 ，则pcm音频采样率为8k，当引擎选用16k_zh， 那么该8k采样率的pcm音频可以在16k_zh引擎下正常识别。 注：此参数仅适用于pcm格式音频，不传入值将维持默认状态，即默认调用的引擎采样率等于pcm音频采样率。
     */
    InputSampleRate?: number;
}
/**
 * VoicePrintCount请求参数结构体
 */
export interface VoicePrintCountRequest {
    /**
     * 分组ID,仅支持大小写字母和下划线的组合，不超过128个字符
     */
    GroupId?: string;
    /**
     * 统计模式
  0: 统计所有声纹数量
  1: 统计指定分组下的声纹数量
     */
    CountMod?: number;
}
/**
 * VoicePrintCompare返回参数结构体
 */
export interface VoicePrintCompareResponse {
    /**
     * 音频声纹比对结果，包含相似度打分
     */
    Data?: VoicePrintCompareData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 声纹组对比结果top数据
 */
export interface VerifyTop {
    /**
     * 相似度打分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: string;
    /**
     * 说话人id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoicePrintId?: string;
    /**
     * 说话人昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpeakerId?: string;
}
/**
 * SetVocabState返回参数结构体
 */
export interface SetVocabStateResponse {
    /**
     * 热词表ID
     */
    VocabId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户用量信息
 */
export interface UsageByDateInfoData {
    /**
     * 用量信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsageByDateInfoList?: Array<UsageByDateInfo>;
}
/**
 * VoicePrintDelete请求参数结构体
 */
export interface VoicePrintDeleteRequest {
    /**
     * 说话人id，说话人唯一标识
     */
    VoicePrintId?: string;
    /**
     * 说话人分组ID,仅支持大小写字母和下划线的组合，不超过128个字符
     */
    GroupId?: string;
    /**
     * 删除模式:
  0.默认值，删除该条声纹
  1.从分组中删除该条声纹，声纹本身不删除
  2.从声纹库中删除分组，仅删除分组信息，不会真正删除分组中的声纹
     */
    DelMod?: number;
}
/**
 * DescribeAsyncRecognitionTasks请求参数结构体
 */
export declare type DescribeAsyncRecognitionTasksRequest = null;
/**
 * GetAsrKeyWordLibList返回参数结构体
 */
export interface GetAsrKeyWordLibListResponse {
    /**
     * 关键词列表返回数据
     */
    Data?: KeyWordLibListData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VoicePrintEnroll返回参数结构体
 */
export interface VoicePrintEnrollResponse {
    /**
     * 说话人基本数据
     */
    Data?: VoicePrintBaseData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAsrKeyWordLib返回参数结构体
 */
export interface CreateAsrKeyWordLibResponse {
    /**
     * 词表ID数据
     */
    Data?: KeyWordLibIdData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAsyncRecognitionTask请求参数结构体
 */
export interface CreateAsyncRecognitionTaskRequest {
    /**
     * 引擎模型类型。
  • 16k_zh：中文普通话通用；
  • 16k_en：英语；
  • 16k_yue：粤语；
  • 16k_id：印度尼西亚语；
  • 16k_fil：菲律宾语；
  • 16k_th：泰语；
  • 16k_pt：葡萄牙语；
  • 16k_tr：土耳其语；
  • 16k_ar：阿拉伯语；
  • 16k_es：西班牙语；
  • 16k_hi：印地语；
  • 16k_fr：法语；
  • 16k_de：德语；
     */
    EngineType: string;
    /**
     * 语音流地址，支持rtmp、rtsp等流媒体协议，以及各类基于http协议的直播流(不支持hls, m3u8)
     */
    Url: string;
    /**
     * 支持HTTP和HTTPS协议，用于接收识别结果，您需要自行搭建公网可调用的服务。回调格式&内容详见：[语音流异步识别回调说明](https://cloud.tencent.com/document/product/1093/52633)
     */
    CallbackUrl: string;
    /**
     * 用于生成回调通知中的签名
     */
    SignToken?: string;
    /**
     * 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0
     */
    FilterDirty?: number;
    /**
     * 是否过滤语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0
     */
    FilterModal?: number;
    /**
     * 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认为0
     */
    FilterPunc?: number;
    /**
     * 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1
     */
    ConvertNumMode?: number;
    /**
     * 是否显示词级别时间戳。0：不显示；1：显示，不包含标点时间戳，2：显示，包含标点时间戳。默认为0
     */
    WordInfo?: number;
    /**
     * 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。
     */
    HotwordId?: string;
    /**
     * 回调数据中，是否需要对应音频数据。
     */
    AudioData?: boolean;
}
/**
 * GetAsrVocab请求参数结构体
 */
export interface GetAsrVocabRequest {
    /**
     * 热词表ID
     */
    VocabId: string;
}
/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
    /**
     * 录音文件识别的请求返回结果。
     */
    Data?: TaskStatus;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * [说话人验证数据](https://cloud.tencent.com/document/product/1093/94481#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)
 */
export interface VoicePrintVerifyData {
    /**
     * 说话人id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoicePrintId?: string;
    /**
     * 匹配度 取值范围(0.0 - 100.0)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: string;
    /**
     * 验证结果 0: 未通过 1: 通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Decision?: number;
}
/**
 * [一句话识别](https://cloud.tencent.com/document/product/1093/35646#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)返回的词时间戳
 */
export interface SentenceWord {
    /**
     * 词结果
     */
    Word?: string;
    /**
     * 词在音频中的开始时间
     */
    StartTime?: number;
    /**
     * 词在音频中的结束时间
     */
    EndTime?: number;
}
/**
 * DownloadAsrVocab返回参数结构体
 */
export interface DownloadAsrVocabResponse {
    /**
     * 词表ID。
     */
    VocabId?: string;
    /**
     * 词表权重文件形式的base64值。
     */
    WordWeightStr?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCustomization返回参数结构体
 */
export interface ModifyCustomizationResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAsrVocabList请求参数结构体
 */
export interface GetAsrVocabListRequest {
    /**
     * 标签信息，格式为“$TagKey : $TagValue ”，中间分隔符为“空格”+“:”+“空格”
     */
    TagInfos?: Array<string>;
    /**
     * 分页Offset
     */
    Offset?: number;
    /**
     * 分页Limit
     */
    Limit?: number;
}
/**
 * 统计返回[说话人注册数量](https://cloud.tencent.com/document/product/1093/96061#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)
 */
export interface VoicePrintCountData {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 说话人id列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoicePrintList?: Array<VoicePrintBaseData>;
}
/**
 * VoicePrintUpdate请求参数结构体
 */
export interface VoicePrintUpdateRequest {
    /**
     * 音频格式 0: pcm, 1: wav
     */
    VoiceFormat: number;
    /**
     * 音频采样率 目前仅支持16000 单位Hz
     */
    SampleRate: number;
    /**
     * 说话人id， 说话人唯一标识
     */
    VoicePrintId: string;
    /**
     * 音频数据, base64 编码, 音频时长不能超过30s，数据大小不超过2M
     */
    Data: string;
    /**
     * 说话人昵称  不超过32字节
     */
    SpeakerNick?: string;
}
/**
 * DeleteAsrVocab请求参数结构体
 */
export interface DeleteAsrVocabRequest {
    /**
     * 热词表Id
     */
    VocabId: string;
}
/**
 * UpdateAsrVocab请求参数结构体
 */
export interface UpdateAsrVocabRequest {
    /**
     * 热词表ID
     */
    VocabId: string;
    /**
     * 热词表名称，长度在1-255之间
     */
    Name?: string;
    /**
     * 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10个汉字或30个英文字符，权重为[1,11]之间整数或100，数组长度不大于1000 (注意：如果仅更新热词表名称或者描述字段，请求不用带本参数）
     */
    WordWeights?: Array<HotWord>;
    /**
     * 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。
  当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略
   (注意：如果仅更新热词表名称或者描述字段，请求不用带本参数）
     */
    WordWeightStr?: string;
    /**
     * 热词表描述，长度在0-1000之间
     */
    Description?: string;
}
/**
 * CreateAsrVocab返回参数结构体
 */
export interface CreateAsrVocabResponse {
    /**
     * 词表ID，可用于获取词表信息
     */
    VocabId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 请求的音频时长，单位为ms
     */
    AudioDuration?: number;
    /**
     * 词时间戳列表的长度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WordSize?: number;
    /**
     * 词时间戳列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WordList?: Array<SentenceWord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * [说话人基础数据](https://cloud.tencent.com/document/product/1093/94483#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)，包括说话人id和说话人昵称
 */
export interface VoicePrintBaseData {
    /**
     * 说话人id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoicePrintId?: string;
    /**
     * 说话人昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpeakerNick?: string;
}
/**
 * DescribeAsyncRecognitionTasks返回参数结构体
 */
export interface DescribeAsyncRecognitionTasksResponse {
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: AsyncRecognitionTasks;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAsrVocabList返回参数结构体
 */
export interface GetAsrVocabListResponse {
    /**
     * 热词表列表
     */
    VocabList?: Array<Vocab>;
    /**
     * 热词列表总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadCustomization请求参数结构体
 */
export interface DownloadCustomizationRequest {
    /**
     * 自学习模型ID
     */
    ModelId: string;
}
/**
 * 说话人验证1:N返回结果
 */
export interface VerifyTopResult {
    /**
     * 对比打分结果，按照打分降序排列返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyTops?: Array<VerifyTop>;
}
/**
 * GetAsrVocab返回参数结构体
 */
export interface GetAsrVocabResponse {
    /**
     * 热词表名称
     */
    Name?: string;
    /**
     * 热词表描述
     */
    Description?: string;
    /**
     * 热词表ID
     */
    VocabId?: string;
    /**
     * 词权重列表
     */
    WordWeights?: Array<HotWord>;
    /**
     * 词表创建时间
     */
    CreateTime?: string;
    /**
     * 词表更新时间
     */
    UpdateTime?: string;
    /**
     * 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态
     */
    State?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * [热词的词和权重](https://cloud.tencent.com/document/product/1093/41111#2.-.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0)
 */
export interface HotWord {
    /**
     * 热词
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Word: string;
    /**
     * 权重
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Weight: number;
}
/**
 * UpdateAsrKeyWordLib请求参数结构体
 */
export interface UpdateAsrKeyWordLibRequest {
    /**
     * 关键词表ID
     */
    KeyWordLibId: string;
    /**
     * 词表名称，长度在1-20之间
  仅限中英文数字-_
     */
    Name?: string;
    /**
     * - 词文件（纯文本文件）以行分隔 ，进行二进制base64编码
  - 格式要求：TXT 每行只有一个词，不满足格式则报错无法上传
  - 每个词最多5个汉字或15个字符，单个词库最多不超过100个词
  - 此参数为空则只更新词表名称
     */
    KeyWordFile?: string;
}
/**
 * GetUsageByDate返回参数结构体
 */
export interface GetUsageByDateResponse {
    /**
     * 用量次数
     */
    Data?: UsageByDateInfoData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VoicePrintDelete返回参数结构体
 */
export interface VoicePrintDeleteResponse {
    /**
     * 说话人基本信息
     */
    Data?: VoicePrintBaseData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadCustomization返回参数结构体
 */
export interface DownloadCustomizationResponse {
    /**
     * 下载地址
     */
    DownloadUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRecTask请求参数结构体
 */
export interface CreateRecTaskRequest {
    /**
     * 引擎模型类型
  识别引擎采用分级计费方案，标记为“大模型版”的引擎适用大模型计费方案，[点击这里](https://cloud.tencent.com/document/product/1093/35686) 查看产品计费说明
  
  电话通讯场景引擎：
  **注意：电话通讯场景，请务必使用以下8k引擎**
  • 8k_zh：中文电话通讯；
  • 8k_en：英文电话通讯；
  • **8k_zh_large：**普方大模型引擎【大模型版】。当前模型同时支持中文、[多种中文方言](https://cloud.tencent.com/document/product/1093/35682)等语言的识别，模型参数量极大，语言模型性能增强，针对电话音频中各类场景、各类中文方言的识别准确率极大提升，[点击这里](https://console.cloud.tencent.com/asr/demonstrate) 对比常规版本与普方大模型版本的识别效果；
  
  注意：如您有电话通讯场景识别需求，但发现需求语种仅支持16k，可将8k音频传入下方16k引擎，亦能获取识别结果。但**16k引擎并非基于电话通讯数据训练，无法承诺此种调用方式的识别效果，需由您自行验证识别结果是否可用**
  
  通用场景引擎：
  **注意：除电话通讯场景以外的其它识别场景，请务必使用以下16k引擎**
  • **16k_zh：**中文普通话通用引擎，支持中文普通话和少量英语，使用丰富的中文普通话语料训练，覆盖场景广泛，适用于除电话通讯外的所有中文普通话识别场景；
  • **16k_zh_large：**普方英大模型引擎【大模型版】。当前模型同时支持中文、英文、[多种中文方言](https://cloud.tencent.com/document/product/1093/35682)等语言的识别，模型参数量极大，语言模型性能增强，针对噪声大、回音大、人声小、人声远等低质量音频的识别准确率极大提升，[点击这里](https://console.cloud.tencent.com/asr/demonstrate) 对比中文普通话常规版本与普方英大模型版本的识别效果；
  • **16k_multi_lang：**多语种大模型引擎【大模型版】。当前模型同时支持英语、日语、韩语、阿拉伯语、菲律宾语、法语、印地语、印尼语、马来语、葡萄牙语、西班牙语、泰语、土耳其语、越南语、德语的识别，可实现15个语种的自动识别(句子/段落级别)；
  • **16k_zh_dialect：**中文普通话+多方言混合引擎，除普通话外支持23种方言（上海话、四川话、武汉话、贵阳话、昆明话、西安话、郑州话、太原话、兰州话、银川话、西宁话、南京话、合肥话、南昌话、长沙话、苏州话、杭州话、济南话、天津话、石家庄话、黑龙江话、吉林话、辽宁话）；
  • **16k_zh_en**：中英大模型引擎【大模型版】。当前模型同时支持中文、英语识别，模型参数量极大，语言模型性能增强，针对噪声大、回音大、人声小、人声远等低质量音频的识别准确率极大提升;
  • **16k_en：**英语；
  • **16k_yue：**粤语；
  • **16k_zh-PY：**中英粤混合引擎，使用一个引擎同时识别中文普通话、英语、粤语三个语言;
  • **16k_zh-TW**：中文繁体；
  • **16k_ja：**日语；
  • **16k_ko：**韩语；
  • **16k_vi：**越南语；
  • **16k_ms：**马来语；
  • **16k_id：**印度尼西亚语；
  • **16k_fil：**菲律宾语；
  • **16k_th：**泰语；
  • **16k_pt：**葡萄牙语；
  • **16k_tr：**土耳其语；
  • **16k_ar：**阿拉伯语；
  • **16k_es：**西班牙语；
  • **16k_hi：**印地语；
  • **16k_fr：**法语；
  • **16k_zh_medical：**中文医疗引擎；
  • **16k_de：**德语；
     */
    EngineModelType: string;
    /**
     * 识别声道数
  1：单声道（16k音频仅支持单声道，**请勿**设置为双声道）；
  2：双声道（仅支持8k电话音频，且双声道应分别为通话双方）
  
  注意：
  • 16k音频：仅支持单声道识别，**需设置ChannelNum=1**；
  • 8k电话音频：支持单声道、双声道识别，**建议设置ChannelNum=2，即双声道**。双声道能够物理区分说话人、避免说话双方重叠产生的识别错误，能达到最好的说话人分离效果和识别效果。设置双声道后，将自动区分说话人，因此**无需再开启说话人分离功能**，相关参数（**SpeakerDiarization、SpeakerNumber**）使用默认值即可，返回的ResultDetail中的speakerId的值为0代表左声道，值为1代表右声道。
     */
    ChannelNum: number;
    /**
     * 识别结果返回样式
  0：基础识别结果（仅包含有效人声时间戳，无词粒度的[详细识别结果](https://cloud.tencent.com/document/api/1093/37824#SentenceDetail)）；
  1：基础识别结果之上，增加词粒度的[详细识别结果](https://cloud.tencent.com/document/api/1093/37824#SentenceDetail)（包含词级别时间戳、语速值，**不含标点**）；
  2：基础识别结果之上，增加词粒度的[详细识别结果](https://cloud.tencent.com/document/api/1093/37824#SentenceDetail)（包含词级别时间戳、语速值和标点）；
  3：基础识别结果之上，增加词粒度的[详细识别结果](https://cloud.tencent.com/document/api/1093/37824#SentenceDetail)（包含词级别时间戳、语速值和标点），且识别结果按标点符号分段，**适用字幕场景**；
  4：**【增值付费功能】**基础识别结果之上，增加词粒度的[详细识别结果](https://cloud.tencent.com/document/api/1093/37824#SentenceDetail)（包含词级别时间戳、语速值和标点），且识别结果按nlp语义分段，**适用会议、庭审记录转写等场景**，仅支持8k_zh/16k_zh引擎
  5：**【增值付费功能】**基础识别结果之上，增加词粒度的[详细识别结果](https://cloud.tencent.com/document/api/1093/37824#SentenceDetail)（包含词级别时间戳、语速值和标点），并输出口语转书面语转写结果，该结果去除语气词、重复词、精简冗余表达，并修正发言人口误，实现口语转书面语的效果，**适用于线上、线下会议直接总结为书面会议纪要的场景**，仅支持8k_zh/16k_zh引擎
  
  注意：
  如果传入参数值4，需确保账号已购买[语义分段资源包](https://cloud.tencent.com/document/product/1093/35686#97ae4aa0-29a0-4066-9f07-ccaf8856a16b)，或账号开启后付费；**若当前账号已开启后付费功能，并传入参数值4，将[自动计费](https://cloud.tencent.com/document/product/1093/35686#d912167d-ffd5-41a9-8b1c-2e89845a6852)**
  如果传入参数值5，需确保账号已购买[口语转书面语资源包](https://cloud.tencent.com/document/product/1093/35686#97ae4aa0-29a0-4066-9f07-ccaf8856a16b)，或账号开启后付费；**若当前账号已开启后付费功能，并传入参数值5，将自动计费[自动计费](https://cloud.tencent.com/document/product/1093/35686#d912167d-ffd5-41a9-8b1c-2e89845a6852)**
     */
    ResTextFormat: number;
    /**
     * 音频数据来源
  0：音频URL；
  1：音频数据（post body）
     */
    SourceType: number;
    /**
     * 音频数据base64编码
  **当 SourceType 值为 1 时须填写该字段，为 0 时不需要填写**
  
  注意：音频数据要小于5MB（含）
     */
    Data?: string;
    /**
     * 数据长度（此数据长度为数据未进行base64编码时的长度）
     */
    DataLen?: number;
    /**
     * 音频URL的地址（需要公网环境浏览器可下载）
  **当 SourceType 值为 0 时须填写该字段，为 1 时不需要填写**
  
  注意：
  1. 请确保录音文件时长在5个小时（含）之内，否则可能识别失败；
  2. 请保证文件的下载速度，否则可能下载失败
     */
    Url?: string;
    /**
     * 回调 URL
  用户自行搭建的用于接收识别结果的服务URL
  回调格式和内容详见：[录音识别回调说明](https://cloud.tencent.com/document/product/1093/52632)
  
  注意：
  
  - 如果用户使用轮询方式获取识别结果，则无需提交该参数
  - 建议在回调URL中带上您的业务ID等信息，以便处理业务逻辑
     */
    CallbackUrl?: string;
    /**
     * 是否开启说话人分离
  0：不开启；
  1：开启（仅支持以下引擎：8k_zh/16k_zh/16k_ms/16k_en/16k_id/16k_zh_large/16k_zh_dialect，且ChannelNum=1时可用）；
  默认值为 0
  
  注意：
  8k双声道电话音频请按 **ChannelNum 识别声道数** 的参数描述使用默认值
     */
    SpeakerDiarization?: number;
    /**
     * 说话人分离人数
  **需配合开启说话人分离使用，不开启无效**，取值范围：0-10
  0：自动分离（最多分离出20个人）；
  1-10：指定人数分离；
  默认值为 0
     */
    SpeakerNumber?: number;
    /**
     * 热词表id
  如不设置该参数，将自动生效默认热词表；
  如设置该参数，将生效对应id的热词表；
  点击这里查看[热词表配置方法](https://cloud.tencent.com/document/product/1093/40996)
     */
    HotwordId?: string;
    /**
     * 热词增强功能（目前仅支持8k_zh/16k_zh引擎）
  1：开启热词增强功能
  
  注意：热词增强功能开启后，将对传入的热词表id开启同音替换功能，可以在这里查看[热词表配置方法](https://cloud.tencent.com/document/product/1093/40996)。效果举例：在热词表中配置“蜜制”一词，并开启增强功能，与“蜜制”（mìzhì）同音同调的“秘制”（mìzhì）的识别结果会被强制替换成“蜜制”。**建议客户根据实际的业务需求开启该功能**
     * @deprecated
     */
    ReinforceHotword?: number;
    /**
     * 自学习定制模型 id
  如设置了该参数，将生效对应id的自学习定制模型；
  点击这里查看[自学习定制模型配置方法](https://cloud.tencent.com/document/product/1093/38416)
     */
    CustomizationId?: string;
    /**
     * **【增值付费功能】**情绪识别能力（目前仅支持16k_zh,8k_zh）
  0：不开启；
  1：开启情绪识别，但不在文本展示情绪标签；
  2：开启情绪识别，并且在文本展示情绪标签（**该功能需要设置ResTextFormat 大于0**）
  默认值为0
  支持的情绪分类为：高兴、伤心、愤怒
  
  注意：
  1. **本功能为增值服务**，需将参数设置为1或2时方可按对应方式生效；
  2. 如果传入参数值1或2，需确保账号已购买[情绪识别资源包](https://cloud.tencent.com/document/product/1093/35686#97ae4aa0-29a0-4066-9f07-ccaf8856a16b)，或账号开启后付费；**若当前账号已开启后付费功能，并传入参数值1或2，将[自动计费](https://cloud.tencent.com/document/product/1093/35686#d912167d-ffd5-41a9-8b1c-2e89845a6852)）**；
  3. 参数设置为0时，无需购买资源包，也不会消耗情绪识别对应资源
     */
    EmotionRecognition?: number;
    /**
     * 情绪能量值
  取值为音量分贝值/10，取值范围：[1,10]，值越高情绪越强烈
  0：不开启；
  1：开启；
  默认值为0
     */
    EmotionalEnergy?: number;
    /**
     * 阿拉伯数字智能转换（目前支持中文普通话引擎）
  0：不转换，直接输出中文数字；
  1：根据场景智能转换为阿拉伯数字；
  3：打开数学相关数字转换（如：阿尔法转写为α）；
  默认值为 1
     */
    ConvertNumMode?: number;
    /**
     * 脏词过滤（目前支持中文普通话引擎）
  0：不过滤脏词；
  1：过滤脏词；
  2：将脏词替换为 * ；
  默认值为 0
     */
    FilterDirty?: number;
    /**
     * 标点符号过滤（目前支持中文普通话引擎）
  0：不过滤标点；
  1：过滤句末标点；
  2：过滤所有标点；
  默认值为 0
     */
    FilterPunc?: number;
    /**
     * 语气词过滤（目前支持中文普通话引擎）
  0：不过滤语气词；
  1：过滤部分语气词；
  2：严格过滤语气词；
  默认值为 0
     */
    FilterModal?: number;
    /**
     * 单标点最多字数（目前支持中文普通话引擎）
  **可控制单行字幕最大字数，适用于字幕生成场景**，取值范围：[6，40]
  0：不开启该功能；
  默认值为0
  
  注意：需设置ResTextFormat为3，解析返回的ResultDetail列表，通过结构中FinalSentence获取单个标点断句结果
     */
    SentenceMaxLength?: number;
    /**
     * 附加参数**（该参数无意义，忽略即可）**
     */
    Extra?: string;
    /**
     * 临时热词表：该参数用于提升识别准确率。
  
  - 单个热词限制："热词|权重"，单个热词不超过30个字符（最多10个汉字），权重[1-11]或者100，如：“腾讯云|5” 或“ASR|11”；
  
  - 临时热词表限制：多个热词用英文逗号分割，最多支持128个热词，如：“腾讯云|10,语音识别|5,ASR|11”；
  
  - 参数 hotword_id（热词表） 与 hotword_list（临时热词表） 区别：
  
      - hotword_id：热词表。需要先在控制台或接口创建热词表，获得对应hotword_id传入参数来使用热词功能；
  
      - hotword_list：临时热词表。每次请求时直接传入临时热词表来使用热词功能，云端不保留临时热词表。适用于有极大量热词需求的用户；
  
  注意：
  
  - 如果同时传入了 hotword_id 和 hotword_list，只有hotword_list 生效；
  
  - 热词权重设置为11时，当前热词将升级为超级热词，建议仅将重要且必须生效的热词设置到11，设置过多权重为11的热词将影响整体字准率。
  
  - 热词权重设置为100时，当前热词开启热词增强同音替换功能（仅支持8k_zh,16k_zh），举例：热词配置“蜜制|100”时，与“蜜制”同拼音（mizhi）的“秘制”的识别结果会被强制替换成“蜜制”。因此建议客户根据自己的实际情况开启该功能。建议仅将重要且必须生效的热词设置到100，设置过多权重为100的热词将影响整体字准率。
     */
    HotwordList?: string;
    /**
     * 关键词识别ID列表，默认空为不进行识别，最多10个
  
     */
    KeyWordLibIdList?: Array<string>;
}
/**
 * 单句的详细识别结果，包含单个词的时间偏移，一般用于生成字幕的场景。
 */
export interface SentenceDetail {
    /**
     * 单句最终识别结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FinalSentence?: string;
    /**
     * 单句中间识别结果，使用空格拆分为多个词
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SliceSentence?: string;
    /**
     * 口语转书面语结果，开启改功能才有值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WrittenText?: string;
    /**
     * 单句开始时间（毫秒）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartMs?: number;
    /**
     * 单句结束时间（毫秒）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndMs?: number;
    /**
     * 单句中词个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WordsNum?: number;
    /**
     * 单句中词详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Words?: Array<SentenceWords>;
    /**
     * 单句语速，单位：字数/秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpeechSpeed?: number;
    /**
     * 声道或说话人 Id（请求中如果设置了 speaker_diarization或者ChannelNum为双声道，可区分说话人或声道）
  单声道话者分离时不同的值代表不同的说话人； 8k双声道话者分离时speakerId的值为0代表左声道，值为1代表右声道。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpeakerId?: number;
    /**
     * 情绪能量值，取值为音量分贝值/10。取值范围：[1,10]。值越高情绪越强烈。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EmotionalEnergy?: number;
    /**
     * 本句与上一句之间的静音时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SilenceTime?: number;
    /**
     * 情绪类型（可能为空，有2种情况 1、没有对应资源包；2、情绪跟语音效果相关，如果情绪不够强烈时可能无法识别）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EmotionType?: Array<string>;
    /**
     * 关键词识别结果列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyWordResults?: Array<KeyWordResult>;
}
/**
 * DownloadAsrVocab请求参数结构体
 */
export interface DownloadAsrVocabRequest {
    /**
     * 词表ID。
     */
    VocabId: string;
}
/**
 * [词表内容](https://cloud.tencent.com/document/product/1093/41484#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)
 */
export interface Vocab {
    /**
     * 热词表名称
     */
    Name?: string;
    /**
     * 热词表描述
     */
    Description?: string;
    /**
     * 热词表ID
     */
    VocabId?: string;
    /**
     * 词权重列表
     */
    WordWeights?: Array<HotWord>;
    /**
     * 词表创建时间
     */
    CreateTime?: string;
    /**
     * 词表更新时间
     */
    UpdateTime?: string;
    /**
     * 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态
     */
    State?: number;
    /**
     * 标签数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagInfos?: Array<string>;
}
/**
 * 关键词表信息
 */
export interface KeyWordLib {
    /**
     * 关键词表ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyWordLibId?: string;
    /**
     * 关键词表名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 关键词列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyWordList?: Array<string>;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * ModifyCustomization请求参数结构体
 */
export interface ModifyCustomizationRequest {
    /**
     * 要修改的模型ID
     */
    ModelId: string;
    /**
     * 要修改的模型名称，长度需在1-20个字符之间
     */
    ModelName?: string;
    /**
     * 要修改的模型类型，为8k或者16k
     */
    ModelType?: string;
    /**
     * 要修改的模型语料的下载地址，目前仅支持腾讯云cos
     */
    TextUrl?: string;
}
/**
 * VoicePrintVerify返回参数结构体
 */
export interface VoicePrintVerifyResponse {
    /**
     * 说话人验证数据
     */
    Data?: VoicePrintVerifyData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetModelInfo返回参数结构体
 */
export interface GetModelInfoResponse {
    /**
     * 模型信息
     */
    Data?: Model;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
    /**
     * 从CreateRecTask接口获取的TaskId，用于获取任务状态与结果。
  **注意：TaskId有效期为24小时，超过24小时的TaskId请不要再查询。**
     */
    TaskId: number;
}
/**
 * VoicePrintCompare请求参数结构体
 */
export interface VoicePrintCompareRequest {
    /**
     * 音频格式 0: pcm, 1: wav；pcm和wav音频无损压缩，识别准确度更高
     */
    VoiceFormat: number;
    /**
     * 音频采样率，目前仅支持16k，请填写16000
     */
    SampleRate: number;
    /**
     * 对比源音频数据, 音频要求：base64 编码,16k采样率， 16bit位深，pcm或者wav格式， 单声道，音频时长不超过30秒的音频，base64编码数据大小不超过2M
     */
    SrcAudioData: string;
    /**
     * 对比目标音频数据, 音频要求：base64 编码,16k采样率， 16bit位深，pcm或者wav格式， 单声道，音频时长不超过30秒的音频，base64编码数据大小不超过2M
     */
    DestAudioData: string;
}
/**
 * DeleteCustomization请求参数结构体
 */
export interface DeleteCustomizationRequest {
    /**
     * 要删除的模型ID
     */
    ModelId: string;
}
/**
 * [音频流异步识别](https://cloud.tencent.com/document/api/1093/37824#AsyncRecognitionTasks)任务信息
 */
export interface AsyncRecognitionTaskInfo {
    /**
     * 任务ID
     */
    TaskId?: number;
    /**
     * 音频流Url
     */
    Url?: string;
}
/**
 * VoicePrintCount返回参数结构体
 */
export interface VoicePrintCountResponse {
    /**
     * 统计数据
     */
    Data?: VoicePrintCountData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询列表返回数据
 */
export interface KeyWordLibListData {
    /**
     * 关键词表列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyWordLibList?: Array<KeyWordLib>;
    /**
     * 关键词列表总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * CloseAsyncRecognitionTask返回参数结构体
 */
export interface CloseAsyncRecognitionTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VoicePrintGroupVerify返回参数结构体
 */
export interface VoicePrintGroupVerifyResponse {
    /**
     * TopN 返回结果;系统建议打分70分以上为同一个人音色，评分也取决于音频质量、长度等其他原因影响，您可以按照业务需求适当提高或降低分数要求
     */
    Data?: VerifyTopResult;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCustomization请求参数结构体
 */
export interface CreateCustomizationRequest {
    /**
     * 自学习模型名称，需在1-20字符之间
     */
    ModelName: string;
    /**
     * 文本文件的下载地址，服务会从该地址下载文件，目前仅支持腾讯云cos
     */
    TextUrl: string;
    /**
     * 自学习模型类型，填写8k或者16k
     */
    ModelType: string;
    /**
     * 标签信息
     * @deprecated
     */
    TagInfos?: Array<string>;
}
/**
 * 用户用量信息
 */
export interface UsageByDateInfo {
    /**
     * 业务类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizName?: string;
    /**
     * 识别次数
  单位：次
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count?: number;
    /**
     * 识别时长
  单位：秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Duration?: number;
}
/**
 * UpdateAsrKeyWordLib返回参数结构体
 */
export interface UpdateAsrKeyWordLibResponse {
    /**
     * 关键词表ID数据
     */
    Data?: KeyWordLibIdData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAsyncRecognitionTask返回参数结构体
 */
export interface CreateAsyncRecognitionTaskResponse {
    /**
     * 请求返回结果，包含本次的任务ID(TaskId)
     */
    Data?: Task;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAsrKeyWordLibList请求参数结构体
 */
export interface GetAsrKeyWordLibListRequest {
    /**
     * 分页Offset
     */
    Offset?: number;
    /**
     * 分页Limit
     */
    Limit?: number;
    /**
     * 词库名称或者UIN检索
     */
    SpecifyNames?: Array<string>;
    /**
     * 只看用户自己创建的
     */
    OnlySelf?: boolean;
}
/**
 * DeleteAsrVocab返回参数结构体
 */
export interface DeleteAsrVocabResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 关键词ID
 */
export interface KeyWordLibIdData {
    /**
     * 关键词ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyWordLibId?: string;
}
/**
 * 音频声纹比对结果，包含比对分数
 */
export interface VoicePrintCompareData {
    /**
     * 匹配度 取值范围(0.0 - 100.0)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: string;
    /**
     * 验证结果 0: 未通过 1: 通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Decision?: number;
}
/**
 * VoicePrintVerify请求参数结构体
 */
export interface VoicePrintVerifyRequest {
    /**
     * 音频格式 0: pcm, 1: wav
     */
    VoiceFormat: number;
    /**
     * 音频采样率，目前支持16000，单位：Hz，必填
     */
    SampleRate: number;
    /**
     * 音频数据, base64 编码, 音频时长不能超过30s，数据大小不超过2M
     */
    Data: string;
    /**
     * 说话人id, 说话人唯一标识
     */
    VoicePrintId: string;
}
/**
 * SetVocabState请求参数结构体
 */
export interface SetVocabStateRequest {
    /**
     * 热词表ID。
     */
    VocabId: string;
    /**
     * 热词表状态，1：设为默认状态；0：设为非默认状态。
     */
    State: number;
}
/**
 * [自学习模型信息](https://cloud.tencent.com/document/product/1093/90813#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0)
 */
export interface Model {
    /**
     * 模型名称
     */
    ModelName?: string;
    /**
     * 模型文件名称
     */
    DictName?: string;
    /**
     * 模型Id
     */
    ModelId?: string;
    /**
     * 模型类型，“8k”或者”16k“
     */
    ModelType?: string;
    /**
     * 服务类型
     */
    ServiceType?: string;
    /**
     * 模型状态：
  -2：模型训练失败；
  -1：已下线；
  0：训练中；
  1：已上线；
  3：上线中；
  4：下线中；
     */
    ModelState?: number;
    /**
     * 最后更新时间
     */
    AtUpdated?: string;
    /**
     * 标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagInfos?: Array<string>;
}
/**
 * CreateAsrVocab请求参数结构体
 */
export interface CreateAsrVocabRequest {
    /**
     * 热词表名称，长度在1-255之间
     */
    Name: string;
    /**
     * 热词表描述，长度在0-1000之间
     */
    Description?: string;
    /**
     * 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10个汉字或30个英文字符，权重为[1,11]之间整数或者100，数组长度不大于1000
  注意:
  - 热词权重设置为11时，当前热词将升级为超级热词，建议仅将重要且必须生效的热词设置到11，设置过多权重为11的热词将影响整体字准率。
  - 热词权重设置为100时，当前热词开启热词增强同音替换功能（仅支持8k_zh,16k_zh），举例：热词配置“蜜制|100”时，与“蜜制”同拼音（mizhi）的“秘制”的识别结果会被强制替换成“蜜制”。因此建议客户根据自己的实际情况开启该功能。建议仅将重要且必须生效的热词设置到100，设置过多权重为100的热词将影响整体字准率。
     */
    WordWeights?: Array<HotWord>;
    /**
     * 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。
  当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略
     */
    WordWeightStr?: string;
}
/**
 * VoicePrintUpdate返回参数结构体
 */
export interface VoicePrintUpdateResponse {
    /**
     * 说话人基础数据
     */
    Data?: VoicePrintBaseData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAsrKeyWordLib请求参数结构体
 */
export interface DeleteAsrKeyWordLibRequest {
    /**
     * 关键词表ID
     */
    KeyWordLibId: string;
}
/**
 * GetModelInfo请求参数结构体
 */
export interface GetModelInfoRequest {
    /**
     * 模型id
     */
    ModelId: string;
}
/**
 * ModifyCustomizationState返回参数结构体
 */
export interface ModifyCustomizationStateResponse {
    /**
     * 自学习模型ID
     */
    ModelId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetUsageByDate请求参数结构体
 */
export interface GetUsageByDateRequest {
    /**
     * 需要查询的业务类型名字列表
  - asr_rt 实时识别
  - asr_rec 录音文件识别
     */
    BizNameList: Array<string>;
    /**
     * 查询开始时间
  开始时间包含当天，支持 YYYY-MM-DD 日期以国内时区为准
  开始时间到结束时间需要在3个月以内
     */
    StartDate: string;
    /**
     * 查询结束时间
  结束时间包含当天，，支持 YYYY-MM-DD 日期以国内时区为准
  开始时间到结束时间需要在3个月以内
     */
    EndDate: string;
}
/**
 * VoicePrintEnroll请求参数结构体
 */
export interface VoicePrintEnrollRequest {
    /**
     * 音频格式 0: pcm, 1: wav
     */
    VoiceFormat: number;
    /**
     * 音频采样率，目前支持16000，单位：Hz，必填
     */
    SampleRate: number;
    /**
     * 音频数据, base64 编码, 音频时长不能超过30s，数据大小不超过2M
     */
    Data: string;
    /**
     * 说话人昵称  不超过32字节
     */
    SpeakerNick?: string;
    /**
     * 分组id, 仅支持大小写字母和下划线的组合，不超过128个字符
     */
    GroupId?: string;
}
/**
 * 识别结果中词文本，以及对应时间偏移
 */
export interface SentenceWords {
    /**
     * 词文本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Word?: string;
    /**
     * 在句子中的开始时间偏移量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffsetStartMs?: number;
    /**
     * 在句子中的结束时间偏移量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffsetEndMs?: number;
}

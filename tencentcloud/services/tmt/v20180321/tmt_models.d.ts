/**
 * TextTranslate返回参数结构体
 */
export interface TextTranslateResponse {
    /**
     * 翻译后的文本
     */
    TargetText?: string;
    /**
     * 源语言，详见入参Source
     */
    Source?: string;
    /**
     * 目标语言，详见入参Target
     */
    Target?: string;
    /**
     * 本次翻译消耗的字符数
     */
    UsedAmount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImageTranslate请求参数结构体
 */
export interface ImageTranslateRequest {
    /**
     * 唯一id，返回时原样返回
     */
    SessionUuid: string;
    /**
     * doc:文档扫描
     */
    Scene: string;
    /**
     * 图片数据的Base64字符串，经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。图片中包含文字需要少于6000字符。
     */
    Data: string;
    /**
     * 源语言，支持语言列表：<li> auto：自动识别（识别为一种语言）</li> <li>zh：简体中文</li> <li>zh-TW：繁体中文</li> <li>en：英语</li> <li>ja：日语</li> <li>ko：韩语</li> <li>ru：俄语</li> <li>fr：法语</li> <li>de：德语</li> <li>it：意大利语</li> <li>es：西班牙语</li> <li>pt：葡萄牙语</li> <li>ms：马来西亚语</li> <li>th：泰语</li><li>vi：越南语</li>
     */
    Source: string;
    /**
     * 目标语言，各源语言的目标语言支持列表如下：
  <li>zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、ru（俄语）、fr（法语）、de（德语）、it（意大利语）、es（西班牙语）、pt（葡萄牙语）、ms（马来语）、th（泰语）、vi（越南语）</li>
  <li>zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、ru（俄语）、fr（法语）、de（德语）、it（意大利语）、es（西班牙语）、pt（葡萄牙语）、ms（马来语）、th（泰语）、vi（越南语）</li>
  <li>en（英语）：zh（中文）、ja（日语）、ko（韩语）、ru（俄语）、fr（法语）、de（德语）、it（意大利语）、es（西班牙语）、pt（葡萄牙语）、ms（马来语）、th（泰语）、vi（越南语）</li>
  <li>ja（日语）：zh（中文）、en（英语）、ko（韩语）</li>
  <li>ko（韩语）：zh（中文）、en（英语）、ja（日语）</li>
  <li>ru：俄语：zh（中文）、en（英语）</li>
  <li>fr：法语：zh（中文）、en（英语）</li>
  <li>de：德语：zh（中文）、en（英语）</li>
  <li>it：意大利语：zh（中文）、en（英语）</li>
  <li>es：西班牙语：zh（中文）、en（英语）</li>
  <li>pt：葡萄牙语：zh（中文）、en（英语）</li>
  <li>ms：马来西亚语：zh（中文）、en（英语）</li>
  <li>th：泰语：zh（中文）、en（英语）</li>
  <li>vi：越南语：zh（中文）、en（英语）</li>
     */
    Target: string;
    /**
     * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
     */
    ProjectId: number;
}
/**
 * 文件翻译任务结果
 */
export interface GetFileTranslateData {
    /**
     * 任务ID
     */
    TaskId?: string;
    /**
     * 任务状态
  
  - init：任务已初始化
  - wait：任务等待执行
  - success：任务执行成功
  - fail：任务执行失败
     */
    Status?: string;
    /**
     * 文件数据，目标文件必须小于50M，否则请通过回调方式请求文件翻译接口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileData?: string;
    /**
     * 错误提示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
    /**
     * 任务进度
     */
    Progress?: number;
    /**
     * 本次翻译消耗的字符数
     */
    UsedAmount?: number;
}
/**
 * SpeechTranslate返回参数结构体
 */
export interface SpeechTranslateResponse {
    /**
     * 请求的SessionUuid直接返回
     */
    SessionUuid?: string;
    /**
     * 语音识别状态 1-进行中 0-完成
     */
    RecognizeStatus?: number;
    /**
     * 识别出的原文
     */
    SourceText?: string;
    /**
     * 翻译出的译文
     */
    TargetText?: string;
    /**
     * 第几个语音分片
     */
    Seq?: number;
    /**
     * 原语言
     */
    Source?: string;
    /**
     * 目标语言
     */
    Target?: string;
    /**
     * 当请求的Mode参数填写bvad是，启动VadSeq。此时Seq会被设置为后台vad（静音检测）后的新序号，而VadSeq代表客户端原始Seq值
     */
    VadSeq?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图片翻译结果
 */
export interface ImageRecord {
    /**
     * 图片翻译结果
     */
    Value: Array<ItemValue>;
}
/**
 * ImageTranslate返回参数结构体
 */
export interface ImageTranslateResponse {
    /**
     * 请求的SessionUuid返回
     */
    SessionUuid?: string;
    /**
     * 源语言
     */
    Source?: string;
    /**
     * 目标语言
     */
    Target?: string;
    /**
     * 图片翻译结果，翻译结果按识别的文本每一行独立翻译，后续会推出按段落划分并翻译的版本
     */
    ImageRecord?: ImageRecord;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LanguageDetect请求参数结构体
 */
export interface LanguageDetectRequest {
    /**
     * 待识别的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败。单次请求的文本长度需要低于2000。
     */
    Text: string;
    /**
     * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
     */
    ProjectId: number;
}
/**
 * TextTranslateBatch返回参数结构体
 */
export interface TextTranslateBatchResponse {
    /**
     * 源语言，详见入参Source
     */
    Source?: string;
    /**
     * 目标语言，详见入参Target
     */
    Target?: string;
    /**
     * 翻译后的文本列表
     */
    TargetTextList?: Array<string>;
    /**
     * 本次翻译消耗的字符数
     */
    UsedAmount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TextTranslateBatch请求参数结构体
 */
export interface TextTranslateBatchRequest {
    /**
     * 源语言，支持：
  auto：自动识别（识别为一种语言）
  zh：简体中文
  zh-TW：繁体中文
  en：英语
  ja：日语
  ko：韩语
  fr：法语
  es：西班牙语
  it：意大利语
  de：德语
  tr：土耳其语
  ru：俄语
  pt：葡萄牙语
  vi：越南语
  id：印尼语
  th：泰语
  ms：马来西亚语
  ar：阿拉伯语
  hi：印地语
     */
    Source: string;
    /**
     * 目标语言，各源语言的目标语言支持列表如下
  
  <li> zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）</li>
  <li>zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）</li>
  <li>en（英语）：zh（中文）、zh-TW（繁体中文）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）、hi（印地语）</li>
  <li>ja（日语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ko（韩语）</li>
  <li>ko（韩语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ja（日语）</li>
  <li>fr（法语）：zh（中文）、zh-TW（繁体中文）、en（英语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>es（西班牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>it（意大利语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>de（德语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>tr（土耳其语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>ru（俄语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、pt（葡萄牙语）</li>
  <li>pt（葡萄牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）</li>
  <li>vi（越南语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>id（印尼语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>th（泰语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>ms（马来语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>ar（阿拉伯语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>hi（印地语）：en（英语）</li>
     */
    Target: string;
    /**
     * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
     */
    ProjectId: number;
    /**
     * 待翻译的文本列表，批量接口可以以数组方式在一次请求中填写多个待翻译文本。文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本可能会翻译失败。单次请求的文本长度总和需要低于6000字符。
     */
    SourceTextList: Array<string>;
    /**
     * 需要使用的术语库列表
     */
    TermRepoIDList?: Array<string>;
    /**
     * 需要使用的例句库列表
     */
    SentRepoIDList?: Array<string>;
}
/**
 * 文件翻译请求的返回数据
 */
export interface Task {
    /**
     * 任务ID，可通过此ID在轮询接口获取识别状态与结果。注意：TaskId数据类型为字符串类型
     */
    TaskId: string;
}
/**
 * LanguageDetect返回参数结构体
 */
export interface LanguageDetectResponse {
    /**
     * 识别出的语言种类，参考语言列表
  <li> zh : 中文 </li> <li> en : 英文 </li><li> jp : 日语 </li> <li> kr : 韩语 </li><li> de : 德语 </li><li> fr : 法语 </li><li> es : 西班牙文 </li> <li> it : 意大利文 </li><li> tr : 土耳其文 </li><li> ru : 俄文 </li><li> pt : 葡萄牙文 </li><li> vi : 越南文 </li><li> id : 印度尼西亚文 </li><li> ms : 马来西亚文 </li><li> th : 泰文 </li>
     */
    Lang?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetFileTranslate返回参数结构体
 */
export interface GetFileTranslateResponse {
    /**
     * 任务id
     */
    Data?: GetFileTranslateData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SpeechTranslate请求参数结构体
 */
export interface SpeechTranslateRequest {
    /**
     * 一段完整的语音对应一个SessionUuid
     */
    SessionUuid: string;
    /**
     * 音频中的语言类型，支持语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
     */
    Source: string;
    /**
     * 翻译目标语言类型，支持的语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
     */
    Target: string;
    /**
     * pcm : 146   speex : 16779154   mp3 : 83886080
     */
    AudioFormat: number;
    /**
     * 语音分片的序号，从0开始
     */
    Seq: number;
    /**
     * 是否最后一片语音分片，0-否，1-是
     */
    IsEnd: number;
    /**
     * 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。
     */
    Data: string;
    /**
     * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
     */
    ProjectId?: number;
    /**
     * 识别模式，该参数已废弃
     * @deprecated
     */
    Mode?: string;
    /**
     * 该参数已废弃
     * @deprecated
     */
    TransType?: number;
}
/**
 * FileTranslate返回参数结构体
 */
export interface FileTranslateResponse {
    /**
     * 文件翻译的请求返回结果，包含结果查询需要的TaskId
     */
    Data?: Task;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FileTranslate请求参数结构体
 */
export interface FileTranslateRequest {
    /**
     * 源语言，支持
  zh：简体中文
  zh-HK：繁体中文
  zh-TW：繁体中文
  zh-TR：繁体中文
  en：英语
  ar：阿拉伯语
  de：德语
  es：西班牙语
  fr：法语
  it：意大利语
  ja：日语
  pt：葡萄牙语
  ru：俄语
  ko：韩语
  tr：土耳其语
  vi：越南语
  th：泰语
     */
    Source: string;
    /**
     * 目标语言，各源语言的目标语言支持列表如下
  zh（简体中文）：en（英语）、ar（阿拉伯语）、de（德语）、es（西班牙语）、fr（法语）、it（意大利语）、ja（日语）、pt（葡萄牙语）、ru（俄语）、ko（韩语）、tr（土耳其语）、vi（越南语）、th（泰语）
  zh-HK（繁体中文）：en（英语）、ar（阿拉伯语）、de（德语）、es（西班牙语）、fr（法语）、it（意大利语）、ja（日语）、pt（葡萄牙语）、ru（俄语）、ko（韩语）、tr（土耳其语）、vi（越南语）、th（泰语）
  zh-TW（繁体中文）：en（英语）、ar（阿拉伯语）、de（德语）、es（西班牙语）、fr（法语）、it（意大利语）、ja（日语）、pt（葡萄牙语）、ru（俄语）、ko（韩语）、tr（土耳其语）、vi（越南语）、th（泰语）
  zh-TR（繁体中文）:en（英语）、ar（阿拉伯语）、de（德语）、es（西班牙语）、fr（法语）、it（意大利语）、ja（日语）、pt（葡萄牙语）、ru（俄语）、ko（韩语）、tr（土耳其语）、vi（越南语）、th（泰语）
  en（英语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、ar（阿拉伯语）、de（德语）、es（西班牙语）、fr（法语）、it（意大利语）、ja（日语）、pt（葡萄牙语）、ru（俄语）、ko（韩语）、tr（土耳其语）、vi（越南语）、th（泰语）
  ar（阿拉伯语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
  de（德语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
  es（西班牙语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）、fr（法语）
  fr（法语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）、es（西班牙语）
  it（意大利语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
  ja（日语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
  pt（葡萄牙语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
  ru（俄语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
  ko（韩语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
  tr（土耳其语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
  vi（越南语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
  th（泰语）：zh（简体中文）、zh-HK（繁体中文）、zh-TW（繁体中文）、zh-TR（繁体中文）、en（英语）
     */
    Target: string;
    /**
     * 文档类型：可支持以下几种(pdf,docx,pptx,xlsx,txt,xml,html,markdown,properties)
     */
    DocumentType: string;
    /**
     * 数据来源，0：url，1：直接传文件编码后数据
     */
    SourceType?: number;
    /**
     * 需要翻译文件url，URL长度不能超过1000字符。文件限制如下：docx/xIsx/html/markdown文件不超过800万字符，doc/pdf/pptx文件不超过300页，txt/po文件不超过10MB，pdf/docx/pptx/xlsx不超过40MB
     */
    Url?: string;
    /**
     * 原始文档类型。该参数为高级参数，请留空，如需使用，请与工作人员确认后再使用。
     */
    BasicDocumentType?: string;
    /**
     * 回调url，URL长度不能超过256字符。文件大于10MB或字符较多时，建议采用回调方式；回调时，所有内容会放入 Body 中，具体请参见[文件翻译回调说明](https://cloud.tencent.com/document/product/551/91138)。
     */
    CallbackUrl?: string;
    /**
     * 文件数据，当SourceType 值为1时必须填写，为0可不写。要base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。数据要小于5MB。
     */
    Data?: string;
}
/**
 * TextTranslate请求参数结构体
 */
export interface TextTranslateRequest {
    /**
     * 待翻译的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本可能会翻译失败。单次请求的文本长度需要低于6000字符。
     */
    SourceText: string;
    /**
     * 源语言，支持：
  auto：自动识别（识别为一种语言）
  zh：简体中文
  zh-TW：繁体中文
  en：英语
  ja：日语
  ko：韩语
  fr：法语
  es：西班牙语
  it：意大利语
  de：德语
  tr：土耳其语
  ru：俄语
  pt：葡萄牙语
  vi：越南语
  id：印尼语
  th：泰语
  ms：马来西亚语
  ar：阿拉伯语
  hi：印地语
     */
    Source: string;
    /**
     * 目标语言，各源语言的目标语言支持列表如下
  
  <li> zh（简体中文）：zh-TW（繁体中文）、en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）</li>
  <li>zh-TW（繁体中文）：zh（简体中文）、en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）</li>
  <li>en（英语）：zh（中文）、zh-TW（繁体中文）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）、hi（印地语）</li>
  <li>ja（日语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ko（韩语）</li>
  <li>ko（韩语）：zh（中文）、zh-TW（繁体中文）、en（英语）、ja（日语）</li>
  <li>fr（法语）：zh（中文）、zh-TW（繁体中文）、en（英语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>es（西班牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>it（意大利语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>de（德语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>tr（土耳其语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、ru（俄语）、pt（葡萄牙语）</li>
  <li>ru（俄语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、pt（葡萄牙语）</li>
  <li>pt（葡萄牙语）：zh（中文）、zh-TW（繁体中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）</li>
  <li>vi（越南语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>id（印尼语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>th（泰语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>ms（马来语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>ar（阿拉伯语）：zh（中文）、zh-TW（繁体中文）、en（英语）</li>
  <li>hi（印地语）：en（英语）</li>
     */
    Target: string;
    /**
     * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
     */
    ProjectId: number;
    /**
     * 用来标记不希望被翻译的文本内容，如句子中的特殊符号、人名、地名等；每次请求只支持配置一个不被翻译的单词；仅支持配置人名、地名等名词，不要配置动词或短语，否则会影响翻译结果。
     */
    UntranslatedText?: string;
    /**
     * 需要使用的术语库列表
     */
    TermRepoIDList?: Array<string>;
    /**
     * 需要使用的例句库列表
     */
    SentRepoIDList?: Array<string>;
}
/**
 * GetFileTranslate请求参数结构体
 */
export interface GetFileTranslateRequest {
    /**
     * 任务ID
     */
    TaskId: string;
}
/**
 * 翻译结果
 */
export interface ItemValue {
    /**
     * 识别出的源文
     */
    SourceText: string;
    /**
     * 翻译后的译文
     */
    TargetText: string;
    /**
     * X坐标
     */
    X: number;
    /**
     * Y坐标
     */
    Y: number;
    /**
     * 宽度
     */
    W: number;
    /**
     * 高度
     */
    H: number;
}

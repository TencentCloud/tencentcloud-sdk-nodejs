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
  Source: string

  /**
      * 目标语言，各源语言的目标语言支持列表如下

<li> zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）</li>
<li>zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）</li>
<li>en（英语）：zh（中文）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）、hi（印地语）</li>
<li>ja（日语）：zh（中文）、en（英语）、ko（韩语）</li>
<li>ko（韩语）：zh（中文）、en（英语）、ja（日语）</li>
<li>fr（法语）：zh（中文）、en（英语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>es（西班牙语）：zh（中文）、en（英语）、fr（法语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>it（意大利语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>de（德语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>tr（土耳其语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、ru（俄语）、pt（葡萄牙语）</li>
<li>ru（俄语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、pt（葡萄牙语）</li>
<li>pt（葡萄牙语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）</li>
<li>vi（越南语）：zh（中文）、en（英语）</li>
<li>id（印尼语）：zh（中文）、en（英语）</li>
<li>th（泰语）：zh（中文）、en（英语）</li>
<li>ms（马来语）：zh（中文）、en（英语）</li>
<li>ar（阿拉伯语）：en（英语）</li>
<li>hi（印地语）：en（英语）</li>
      */
  Target: string

  /**
   * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
   */
  ProjectId: number

  /**
   * 待翻译的文本列表，批量接口可以以数组方式在一次请求中填写多个待翻译文本。文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本可能会翻译失败。单次请求的文本长度总和需要低于2000。
   */
  SourceTextList: Array<string>
}

/**
 * ImageTranslate返回参数结构体
 */
export interface ImageTranslateResponse {
  /**
   * 请求的SessionUuid返回
   */
  SessionUuid: string

  /**
   * 源语言
   */
  Source: string

  /**
   * 目标语言
   */
  Target: string

  /**
   * 图片翻译结果，翻译结果按识别的文本每一行独立翻译，后续会推出按段落划分并翻译的版本
   */
  ImageRecord: ImageRecord

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SpeechTranslate返回参数结构体
 */
export interface SpeechTranslateResponse {
  /**
   * 请求的SessionUuid直接返回
   */
  SessionUuid?: string

  /**
   * 语音识别状态 1-进行中 0-完成
   */
  RecognizeStatus?: number

  /**
   * 识别出的原文
   */
  SourceText?: string

  /**
   * 翻译出的译文
   */
  TargetText?: string

  /**
   * 第几个语音分片
   */
  Seq?: number

  /**
   * 原语言
   */
  Source?: string

  /**
   * 目标语言
   */
  Target?: string

  /**
   * 当请求的Mode参数填写bvad是，启动VadSeq。此时Seq会被设置为后台vad（静音检测）后的新序号，而VadSeq代表客户端原始Seq值
   */
  VadSeq?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 图片翻译结果
 */
export interface ImageRecord {
  /**
   * 图片翻译结果
   */
  Value: Array<ItemValue>
}

/**
 * LanguageDetect请求参数结构体
 */
export interface LanguageDetectRequest {
  /**
   * 待识别的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败。单次请求的文本长度需要低于2000。
   */
  Text: string

  /**
   * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
   */
  ProjectId: number
}

/**
 * TextTranslateBatch返回参数结构体
 */
export interface TextTranslateBatchResponse {
  /**
   * 源语言，详见入参Target
   */
  Source: string

  /**
   * 目标语言，详见入参Target
   */
  Target: string

  /**
   * 翻译后的文本列表
   */
  TargetTextList: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LanguageDetect返回参数结构体
 */
export interface LanguageDetectResponse {
  /**
      * 识别出的语言种类，参考语言列表
<li> zh : 中文 </li> <li> en : 英文 </li><li> jp : 日语 </li> <li> kr : 韩语 </li><li> de : 德语 </li><li> fr : 法语 </li><li> es : 西班牙文 </li> <li> it : 意大利文 </li><li> tr : 土耳其文 </li><li> ru : 俄文 </li><li> pt : 葡萄牙文 </li><li> vi : 越南文 </li><li> id : 印度尼西亚文 </li><li> ms : 马来西亚文 </li><li> th : 泰文 </li>
      */
  Lang?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 翻译结果
 */
export interface ItemValue {
  /**
   * 识别出的源文
   */
  SourceText: string

  /**
   * 翻译后的译文
   */
  TargetText: string

  /**
   * X坐标
   */
  X: number

  /**
   * Y坐标
   */
  Y: number

  /**
   * 宽度
   */
  W: number

  /**
   * 高度
   */
  H: number
}

/**
 * TextTranslate返回参数结构体
 */
export interface TextTranslateResponse {
  /**
   * 翻译后的文本
   */
  TargetText: string

  /**
   * 源语言，详见入参Target
   */
  Source: string

  /**
   * 目标语言，详见入参Target
   */
  Target: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SpeechTranslate请求参数结构体
 */
export interface SpeechTranslateRequest {
  /**
   * 一段完整的语音对应一个SessionUuid
   */
  SessionUuid: string

  /**
   * 音频中的语言类型，支持语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
   */
  Source: string

  /**
   * 翻译目标语言类型，支持的语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
   */
  Target: string

  /**
   * pcm : 146   speex : 16779154   mp3 : 83886080
   */
  AudioFormat: number

  /**
   * 语音分片的序号，从0开始
   */
  Seq: number

  /**
   * 是否最后一片语音分片，0-否，1-是
   */
  IsEnd: number

  /**
   * 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。
   */
  Data: string

  /**
   * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
   */
  ProjectId?: number

  /**
   * 识别模式，该参数已废弃
   */
  Mode?: string

  /**
   * 该参数已废弃
   */
  TransType?: number
}

/**
 * ImageTranslate请求参数结构体
 */
export interface ImageTranslateRequest {
  /**
   * 唯一id，返回时原样返回
   */
  SessionUuid: string

  /**
   * doc:文档扫描
   */
  Scene: string

  /**
   * 图片数据的Base64字符串，图片大小上限为4M，建议对源图片进行一定程度压缩
   */
  Data: string

  /**
   * 源语言，支持语言列表：<li> auto：自动识别（识别为一种语言）</li> <li>zh：简体中文</li> <li>zh-TW：繁体中文</li> <li>en：英语</li> <li>ja：日语</li> <li>ko：韩语</li> <li>ru：俄语</li> <li>fr：法语</li> <li>de：德语</li> <li>it：意大利语</li> <li>es：西班牙语</li> <li>pt：葡萄牙语</li> <li>ms：马来西亚语</li> <li>th：泰语</li><li>vi：越南语</li>
   */
  Source: string

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
  Target: string

  /**
   * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
   */
  ProjectId: number
}

/**
 * TextTranslate请求参数结构体
 */
export interface TextTranslateRequest {
  /**
   * 待翻译的文本，文本统一使用utf-8格式编码，非utf-8格式编码字符会翻译失败，请传入有效文本，html标记等非常规翻译文本可能会翻译失败。单次请求的文本长度需要低于2000。
   */
  SourceText: string

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
  Source: string

  /**
      * 目标语言，各源语言的目标语言支持列表如下

<li> zh（简体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）</li>
<li>zh-TW（繁体中文）：en（英语）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）</li>
<li>en（英语）：zh（中文）、ja（日语）、ko（韩语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）、vi（越南语）、id（印尼语）、th（泰语）、ms（马来语）、ar（阿拉伯语）、hi（印地语）</li>
<li>ja（日语）：zh（中文）、en（英语）、ko（韩语）</li>
<li>ko（韩语）：zh（中文）、en（英语）、ja（日语）</li>
<li>fr（法语）：zh（中文）、en（英语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>es（西班牙语）：zh（中文）、en（英语）、fr（法语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>it（意大利语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、de（德语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>de（德语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、tr（土耳其语）、ru（俄语）、pt（葡萄牙语）</li>
<li>tr（土耳其语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、ru（俄语）、pt（葡萄牙语）</li>
<li>ru（俄语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、pt（葡萄牙语）</li>
<li>pt（葡萄牙语）：zh（中文）、en（英语）、fr（法语）、es（西班牙语）、it（意大利语）、de（德语）、tr（土耳其语）、ru（俄语）</li>
<li>vi（越南语）：zh（中文）、en（英语）</li>
<li>id（印尼语）：zh（中文）、en（英语）</li>
<li>th（泰语）：zh（中文）、en（英语）</li>
<li>ms（马来语）：zh（中文）、en（英语）</li>
<li>ar（阿拉伯语）：en（英语）</li>
<li>hi（印地语）：en（英语）</li>
      */
  Target: string

  /**
   * 项目ID，可以根据控制台-账号中心-项目管理中的配置填写，如无配置请填写默认项目ID:0
   */
  ProjectId: number

  /**
   * 用来标记不希望被翻译的文本内容，如句子中的特殊符号、人名、地名等；每次请求只支持配置一个不被翻译的单词；仅支持配置人名、地名等名词，不要配置动词或短语，否则会影响翻译结果。
   */
  UntranslatedText?: string
}

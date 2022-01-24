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
 * 语音过程中断句的中间结果
 */
export interface SentenceInfo {
  /**
   * 句子序号，在段落、自由说模式下有效，表示断句序号，最后的综合结果的为-1.
   */
  SentenceId: number

  /**
   * 详细发音评估结果
   */
  Words: Array<WordRsp>

  /**
   * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。
   */
  PronAccuracy: number

  /**
   * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
   */
  PronFluency: number

  /**
   * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
   */
  PronCompletion: number

  /**
   * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracyfloat）* 完整度（PronCompletionfloat）*（2 - 完整度（PronCompletionfloat）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
   */
  SuggestedScore: number
}

/**
 * InitOralProcess请求参数结构体
 */
export interface InitOralProcessRequest {
  /**
   * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
   */
  SessionId: string

  /**
      * 被评估语音对应的文本，仅支持中文和英文。
句子模式下不超过个 30 单词或者中文文字，段落模式不超过 120 单词或者中文文字，中文评估使用 utf-8 编码，自由说模式RefText可以不填。
关于RefText的文本键入要求，请参考[评测模式介绍](https://cloud.tencent.com/document/product/884/56131)。
如需要在评测模式下使用自定义注音（支持中英文），可以通过设置「TextMode」参数实现，设置方式请参考[音素标注](https://cloud.tencent.com/document/product/884/33698)。
      */
  RefText: string

  /**
      * 语音输入模式
0：流式分片
1：非流式一次性评估
推荐使用流式分片传输。
      */
  WorkMode: number

  /**
      * 评测模式
0：单词/单字模式（中文评测模式下为单字模式）
1：句子模式
2：段落模式
3：自由说模式
4：单词音素纠错模式
5：情景评测模式
6：句子多分支评测模式
7：单词实时评测模式
8：拼音评测模式
关于每种评测模式的详细介绍，以及适用场景，请参考[评测模式介绍](https://cloud.tencent.com/document/product/884/56131)。
      */
  EvalMode: number

  /**
      * 评价苛刻指数。取值为[1.0 - 4.0]范围内的浮点数，用于平滑不同年龄段的分数。
1.0：适用于最小年龄段用户，一般对应儿童应用场景；
4.0：适用于最高年龄段用户，一般对应成人严格打分场景。
      */
  ScoreCoeff: number

  /**
   * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。如果没有新建SoeAppId，请勿填入该参数，否则会报欠费错误。
   */
  SoeAppId?: string

  /**
   * 长效session标识，当该参数为1时，session的持续时间为300s，但会一定程度上影响第一个数据包的返回速度，且TransmitOralProcess必须同时为1才可生效。
   */
  IsLongLifeSession?: number

  /**
      * 音频存储模式，此参数已废弃，无需设置，设置与否都默认为0不存储；
注：有存储需求的用户建议自行存储至腾讯云COS[对象存储](https://cloud.tencent.com/product/cos)使用。
      */
  StorageMode?: number

  /**
      * 输出断句中间结果标识
0：不输出
1：输出，通过设置该参数
可以在评估过程中的分片传输请求中，返回已经评估断句的中间结果，中间结果可用于客户端 UI 更新，输出结果为TransmitOralProcess请求返回结果 SentenceInfoSet 字段。
      */
  SentenceInfoEnabled?: number

  /**
      * 评估语言
0：英文
1：中文
ServerType不填默认为0
      */
  ServerType?: number

  /**
      * 异步模式标识
0：同步模式
1：异步模式（一般情况不建议使用异步模式）
可选值参考[服务模式](https://cloud.tencent.com/document/product/884/33697)。
      */
  IsAsync?: number

  /**
      * 输入文本模式
0: 普通文本
1：[音素结构](https://cloud.tencent.com/document/product/884/33698)文本
2：音素注册模式（提工单注册需要使用音素的单词）。
      */
  TextMode?: number
}

/**
 * 评测关键词
 */
export interface Keyword {
  /**
   * 被评估语音对应的文本，句子模式下不超过个 20 单词或者中文文字，段落模式不超过 120 单词或者中文文字，中文评估使用 utf-8 编码，自由说模式RefText可以不填。如需要在单词模式和句子模式下使用自定义音素，可以通过设置 TextMode 使用[音素标注](https://cloud.tencent.com/document/product/884/33698)。
   */
  RefText: string

  /**
   * 评估模式，0：词模式（中文评测模式下为文字模式），1：句子模式，2：段落模式，3：自由说模式，当为词模式评估时，能够提供每个音节的评估信息，当为句子模式时，能够提供完整度和流利度信息。
   */
  EvalMode: number

  /**
   * 评价苛刻指数，取值为[1.0 - 4.0]范围内的浮点数，用于平滑不同年龄段的分数，1.0为小年龄段，4.0为最高年龄段
   */
  ScoreCoeff: number

  /**
      * 评估语言，0：英文，1：中文。
ServerType不填默认传0
      */
  ServerType?: number

  /**
   * 输入文本模式，0: 普通文本，1：[音素结构](https://cloud.tencent.com/document/product/884/33698)文本。
   */
  TextMode?: number
}

/**
 * KeywordEvaluate请求参数结构体
 */
export interface KeywordEvaluateRequest {
  /**
      * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义，当IsLongLifeSession不为1且为非流式模式时无意义。
注意：序号上限为3000，不能超过上限。
      */
  SeqId: number

  /**
   * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
   */
  IsEnd: number

  /**
      * 语音文件类型
1: raw
2: wav
3: mp3
4: speex
语音文件格式目前仅支持 16k 采样率 16bit 编码单声道，如有不一致可能导致评估不准确或失败。
      */
  VoiceFileType: number

  /**
      * 语音编码类型
1:pcm
      */
  VoiceEncodeType: number

  /**
   * 当前数据包数据, 流式模式下数据包大小可以按需设置，在网络良好的情况下，建议设置为1k，且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数），编码格式要求为BASE64。
   */
  UserVoiceData: string

  /**
   * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
   */
  SessionId: string

  /**
   * 关键词列表
   */
  Keywords: Array<Keyword>

  /**
   * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。如果没有新建SoeAppId，请勿填入该参数，否则会报欠费错误。
   */
  SoeAppId?: string

  /**
   * 查询标识，当该参数为1时，该请求为查询请求，请求返回该 Session 评估结果。
   */
  IsQuery?: number
}

/**
 * TransmitOralProcess请求参数结构体
 */
export interface TransmitOralProcessRequest {
  /**
      * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义，当IsLongLifeSession不为1且为非流式模式时无意义。
注意：序号上限为3000，不能超过上限。
      */
  SeqId: number

  /**
   * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
   */
  IsEnd: number

  /**
      * 语音文件类型
1: raw
2: wav
3: mp3
4: speex
语音文件格式目前仅支持 16k 采样率 16bit 编码单声道，如有不一致可能导致评估不准确或失败。
      */
  VoiceFileType: number

  /**
      * 语音编码类型
1:pcm
      */
  VoiceEncodeType: number

  /**
   * 当前数据包数据, 流式模式下数据包大小可以按需设置，在网络稳定时，分片大小建议设置0.5k，且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数），编码格式要求为BASE64。
   */
  UserVoiceData: string

  /**
   * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
   */
  SessionId: string

  /**
   * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。如果没有新建SoeAppId，请勿填入该参数，否则会报欠费错误。
   */
  SoeAppId?: string

  /**
   * 长效session标识，当该参数为1时，session的持续时间为300s，但会一定程度上影响第一个数据包的返回速度。当InitOralProcess接口调用时此项为1时，此项必填1才可生效。
   */
  IsLongLifeSession?: number

  /**
   * 查询标识，当该参数为1时，该请求为查询请求，请求返回该 Session 的评估结果。
   */
  IsQuery?: number
}

/**
 * TransmitOralProcess返回参数结构体
 */
export interface TransmitOralProcessResponse {
  /**
   * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。当为流式模式且请求中IsEnd未置1时，取值无意义。
   */
  PronAccuracy: number

  /**
   * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
   */
  PronFluency: number

  /**
   * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
   */
  PronCompletion: number

  /**
   * 详细发音评估结果
   */
  Words: Array<WordRsp>

  /**
   * 语音段唯一标识，一段语音一个SessionId
   */
  SessionId: string

  /**
   * 保存语音音频文件下载地址
   */
  AudioUrl: string

  /**
   * 断句中间结果，中间结果是局部最优而非全局最优的结果，所以中间结果有可能和最终整体结果对应部分不一致；中间结果的输出便于客户端UI更新；待用户发音完全结束后，系统会给出一个综合所有句子的整体结果。
   */
  SentenceInfoSet: Array<SentenceInfo>

  /**
   * 评估 session 状态，“Evaluating"：评估中、"Failed"：评估失败、"Finished"：评估完成
   */
  Status: string

  /**
   * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracyfloat）× 完整度（PronCompletionfloat）×（2 - 完整度（PronCompletionfloat）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
   */
  SuggestedScore: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InitOralProcess返回参数结构体
 */
export interface InitOralProcessResponse {
  /**
   * 语音段唯一标识，一个完整语音一个SessionId
   */
  SessionId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KeywordEvaluate返回参数结构体
 */
export interface KeywordEvaluateResponse {
  /**
   * 关键词得分
   */
  KeywordScores: Array<KeywordScore>

  /**
   * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
   */
  SessionId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单音节评价结果
 */
export interface PhoneInfo {
  /**
   * 当前音节语音起始时间点，单位为ms
   */
  MemBeginTime: number

  /**
   * 当前音节语音终止时间点，单位为ms
   */
  MemEndTime: number

  /**
   * 音节发音准确度，取值范围[-1, 100]，当取-1时指完全不匹配
   */
  PronAccuracy: number

  /**
   * 当前音节是否检测为重音
   */
  DetectedStress: boolean

  /**
   * 当前音节，当前评测识别的音素
   */
  Phone: string

  /**
   * 当前音节是否应为重音
   */
  Stress: boolean

  /**
   * 参考音素，在单词诊断模式下，代表标准音素
   */
  ReferencePhone: string

  /**
   * 当前词与输入语句的匹配情况，0：匹配单词、1：新增单词、2：缺少单词、3：错读的词、4：未录入单词。
   */
  MatchTag: number

  /**
   * 参考字符，在单词诊断模式下，代表音素对应的原始文本
   */
  ReferenceLetter: string
}

/**
 * 单词评分细则
 */
export interface WordRsp {
  /**
   * 当前单词语音起始时间点，单位为ms，该字段段落模式下无意义。
   */
  MemBeginTime: number

  /**
   * 当前单词语音终止时间点，单位为ms，该字段段落模式下无意义。
   */
  MemEndTime: number

  /**
   * 单词发音准确度，取值范围[-1, 100]，当取-1时指完全不匹配
   */
  PronAccuracy: number

  /**
   * 单词发音流利度，取值范围[0, 1]
   */
  PronFluency: number

  /**
   * 当前词
   */
  Word: string

  /**
   * 当前词与输入语句的匹配情况，0：匹配单词、1：新增单词、2：缺少单词、3：错读的词、4：未录入单词。
   */
  MatchTag: number

  /**
   * 音节评估详情
   */
  PhoneInfos: Array<PhoneInfo>

  /**
   * 参考词，目前为保留字段。
   */
  ReferenceWord: string
}

/**
 * 关键词得分
 */
export interface KeywordScore {
  /**
   * 关键词
   */
  Keyword: string

  /**
   * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。当为流式模式且请求中IsEnd未置1时，取值无意义。
   */
  PronAccuracy: number

  /**
   * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
   */
  PronFluency: number

  /**
   * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
   */
  PronCompletion: number

  /**
      * 详细发音评估结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Words: Array<WordRsp>

  /**
   * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracyfloat）× 完整度（PronCompletionfloat）×（2 - 完整度（PronCompletionfloat）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
   */
  SuggestedScore: number
}

/**
 * TransmitOralProcessWithInit请求参数结构体
 */
export interface TransmitOralProcessWithInitRequest {
  /**
      * 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义，当IsLongLifeSession不为1且为非流式模式时无意义。
注意：序号上限为3000，不能超过上限。
      */
  SeqId: number

  /**
   * 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。
   */
  IsEnd: number

  /**
      * 语音文件类型
1: raw
2: wav
3: mp3
4: speex
语音文件格式目前仅支持 16k 采样率 16bit 编码单声道，如有不一致可能导致评估不准确或失败。
      */
  VoiceFileType: number

  /**
      * 语音编码类型
1:pcm
      */
  VoiceEncodeType: number

  /**
   * 当前数据包数据, 流式模式下数据包大小可以按需设置，在网络良好的情况下，建议设置为1k，且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数），编码格式要求为BASE64。
   */
  UserVoiceData: string

  /**
   * 语音段唯一标识，一段完整语音使用一个SessionId，不同语音段的评测需要使用不同的SessionId。一般使用uuid(通用唯一识别码)来作为它的值，要尽量保证SessionId的唯一性。
   */
  SessionId: string

  /**
      * 被评估语音对应的文本，仅支持中文和英文。
句子模式下不超过个 30 单词或者中文文字，段落模式不超过 120 单词或者中文文字，中文评估使用 utf-8 编码，自由说模式RefText可以不填。
关于RefText的文本键入要求，请参考[评测模式介绍](https://cloud.tencent.com/document/product/884/56131)。
如需要在评测模式下使用自定义注音（支持中英文），可以通过设置「TextMode」参数实现，设置方式请参考[音素标注](https://cloud.tencent.com/document/product/884/33698)。
      */
  RefText: string

  /**
      * 语音输入模式
0：流式分片
1：非流式一次性评估
推荐使用流式分片传输。
      */
  WorkMode: number

  /**
      * 评测模式
0：单词/单字模式（中文评测模式下为单字模式）
1：句子模式
2：段落模式
3：自由说模式
4：单词音素纠错模式
5：情景评测模式
6：句子多分支评测模式
7：单词实时评测模式
8：拼音评测模式
关于每种评测模式的详细介绍，以及适用场景，请参考[评测模式介绍](https://cloud.tencent.com/document/product/884/56131)。
      */
  EvalMode: number

  /**
      * 评价苛刻指数。取值为[1.0 - 4.0]范围内的浮点数，用于平滑不同年龄段的分数。
1.0：适用于最小年龄段用户，一般对应儿童应用场景；
4.0：适用于最高年龄段用户，一般对应成人严格打分场景。
      */
  ScoreCoeff: number

  /**
   * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数，新的 SoeAppId 可以在[控制台](https://console.cloud.tencent.com/soe)【应用管理】下新建。如果没有新建SoeAppId，请勿填入该参数，否则会报欠费错误。
   */
  SoeAppId?: string

  /**
      * 音频存储模式，此参数已废弃，无需设置，设置与否都默认为0不存储；
注：有存储需求的用户建议自行存储至腾讯云COS[对象存储](https://cloud.tencent.com/product/cos)使用。
      */
  StorageMode?: number

  /**
      * 输出断句中间结果标识
0：不输出
1：输出，通过设置该参数
可以在评估过程中的分片传输请求中，返回已经评估断句的中间结果，中间结果可用于客户端 UI 更新，输出结果为TransmitOralProcess请求返回结果 SentenceInfoSet 字段。
      */
  SentenceInfoEnabled?: number

  /**
      * 评估语言
0：英文
1：中文
ServerType不填默认为0
      */
  ServerType?: number

  /**
      * 异步模式标识
0：同步模式
1：异步模式（一般情况不建议使用异步模式）
可选值参考[服务模式](https://cloud.tencent.com/document/product/884/33697)。
      */
  IsAsync?: number

  /**
   * 查询标识，当该参数为1时，该请求为查询请求，请求返回该 Session 评估结果。
   */
  IsQuery?: number

  /**
      * 输入文本模式
0: 普通文本
1：[音素结构](https://cloud.tencent.com/document/product/884/33698)文本
2：音素注册模式（提工单注册需要使用音素的单词）。
      */
  TextMode?: number
}

/**
 * TransmitOralProcessWithInit返回参数结构体
 */
export interface TransmitOralProcessWithInitResponse {
  /**
   * 发音精准度，取值范围[-1, 100]，当取-1时指完全不匹配，当为句子模式时，是所有已识别单词准确度的加权平均值，在reftext中但未识别出来的词不计入分数中。当为流式模式且请求中IsEnd未置1时，取值无意义。
   */
  PronAccuracy: number

  /**
   * 发音流利度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
   */
  PronFluency: number

  /**
   * 发音完整度，取值范围[0, 1]，当为词模式时，取值无意义；当为流式模式且请求中IsEnd未置1时，取值无意义
   */
  PronCompletion: number

  /**
   * 详细发音评估结果
   */
  Words: Array<WordRsp>

  /**
   * 语音段唯一标识，一段语音一个SessionId
   */
  SessionId: string

  /**
   * 保存语音音频文件下载地址
   */
  AudioUrl: string

  /**
   * 断句中间结果，中间结果是局部最优而非全局最优的结果，所以中间结果有可能和最终整体结果对应部分不一致；中间结果的输出便于客户端UI更新；待用户发音完全结束后，系统会给出一个综合所有句子的整体结果。
   */
  SentenceInfoSet: Array<SentenceInfo>

  /**
   * 评估 session 状态，“Evaluating"：评估中、"Failed"：评估失败、"Finished"：评估完成
   */
  Status: string

  /**
   * 建议评分，取值范围[0,100]，评分方式为建议评分 = 准确度（PronAccuracyfloat）× 完整度（PronCompletionfloat）×（2 - 完整度（PronCompletionfloat）），如若评分策略不符合请参考Words数组中的详细分数自定义评分逻辑。
   */
  SuggestedScore: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

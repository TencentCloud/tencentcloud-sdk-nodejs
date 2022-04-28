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
 * SetVocabState返回参数结构体
 */
export interface SetVocabStateResponse {
  /**
   * 热词表ID
   */
  VocabId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCustomization返回参数结构体
 */
export interface CreateCustomizationResponse {
  /**
   * 模型ID
   */
  ModelId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAsyncRecognitionTasks请求参数结构体
 */
export type DescribeAsyncRecognitionTasksRequest = null

/**
 * ModifyCustomizationState请求参数结构体
 */
export interface ModifyCustomizationStateRequest {
  /**
   * 自学习模型ID
   */
  ModelId: string

  /**
   * 想要变换的模型状态，-1代表下线，1代表上线
   */
  ToState: number
}

/**
 * GetAsrVocab返回参数结构体
 */
export interface GetAsrVocabResponse {
  /**
   * 热词表名称
   */
  Name?: string

  /**
   * 热词表描述
   */
  Description?: string

  /**
   * 热词表ID
   */
  VocabId?: string

  /**
   * 词权重列表
   */
  WordWeights?: Array<HotWord>

  /**
   * 词表创建时间
   */
  CreateTime?: string

  /**
   * 词表更新时间
   */
  UpdateTime?: string

  /**
   * 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态
   */
  State?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAsyncRecognitionTask请求参数结构体
 */
export interface CreateAsyncRecognitionTaskRequest {
  /**
      * 引擎模型类型。
• 16k_zh：16k 中文普通话通用；
• 16k_zh_video：16k 音视频领域；
• 16k_en：16k 英语；
• 16k_ca：16k 粤语；
      */
  EngineType: string

  /**
   * 语音流地址，支持rtmp、hls、rtsp等流媒体协议，以及各类基于http协议的直播流
   */
  Url: string

  /**
   * 支持HTTP和HTTPS协议，用于接收识别结果，您需要自行搭建公网可调用的服务。回调格式&内容详见：[语音流异步识别回调说明](https://cloud.tencent.com/document/product/1093/52633)
   */
  CallbackUrl: string

  /**
   * 用于生成回调通知中的签名
   */
  SignToken?: string

  /**
   * 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0
   */
  FilterDirty?: number

  /**
   * 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0
   */
  FilterModal?: number

  /**
   * 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认为0
   */
  FilterPunc?: number

  /**
   * 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1
   */
  ConvertNumMode?: number

  /**
   * 是否显示词级别时间戳。0：不显示；1：显示，不包含标点时间戳，2：显示，包含标点时间戳。默认为0
   */
  WordInfo?: number

  /**
   * 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。
   */
  HotwordId?: string

  /**
   * 回调数据中，是否需要对应音频数据。
   */
  AudioData?: boolean
}

/**
 * 热词的词和权重
 */
export interface HotWord {
  /**
   * 热词
   */
  Word: string

  /**
   * 权重
   */
  Weight: number
}

/**
 * GetAsrVocab请求参数结构体
 */
export interface GetAsrVocabRequest {
  /**
   * 热词表ID
   */
  VocabId: string
}

/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
  /**
   * 录音文件识别的请求返回结果。
   */
  Data: TaskStatus

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SentenceRecognition请求参数结构体
 */
export interface SentenceRecognitionRequest {
  /**
   * 腾讯云项目 ID，可填 0，总长度不超过 1024 字节。
   */
  ProjectId: number

  /**
   * 子服务类型。2： 一句话识别。
   */
  SubServiceType: number

  /**
      * 引擎模型类型。
电话场景：
• 8k_en：电话 8k 英语；
• 8k_zh：电话 8k 中文普通话通用；
非电话场景：
• 16k_zh：16k 中文普通话通用；
• 16k_en：16k 英语；
• 16k_ca：16k 粤语；
• 16k_ja：16k 日语；
• 16k_zh_medical：16k 医疗；
• 16k_zh_dialect：多方言。
      */
  EngSerViceType: string

  /**
   * 语音数据来源。0：语音 URL；1：语音数据（post body）。
   */
  SourceType: number

  /**
   * 识别音频的音频格式，支持wav、pcm、ogg-opus、speex、silk、mp3、m4a、aac。
   */
  VoiceFormat: string

  /**
   * 用户端对此任务的唯一标识，用户自助生成，用于用户查找识别结果。
   */
  UsrAudioKey: string

  /**
   * 语音 URL，公网可下载。当 SourceType 值为 0（语音 URL上传） 时须填写该字段，为 1 时不填；URL 的长度大于 0，小于 2048，需进行urlencode编码。音频时长不能超过60s，音频文件大小不能超过3MB。
   */
  Url?: string

  /**
   * 语音数据，当SourceType 值为1（本地语音数据上传）时必须填写，当SourceType 值为0（语音 URL上传）可不写。要使用base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频时长不能超过60s，音频文件大小不能超过3MB（Base64后）。
   */
  Data?: string

  /**
   * 数据长度，单位为字节。当 SourceType 值为1（本地语音数据上传）时必须填写，当 SourceType 值为0（语音 URL上传）可不写（此数据长度为数据未进行base64编码时的数据长度）。
   */
  DataLen?: number

  /**
   * 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。
   */
  HotwordId?: string

  /**
   * 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0。
   */
  FilterDirty?: number

  /**
   * 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0。
   */
  FilterModal?: number

  /**
   * 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认值为 0。
   */
  FilterPunc?: number

  /**
   * 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1。
   */
  ConvertNumMode?: number

  /**
   * 是否显示词级别时间戳。0：不显示；1：显示，不包含标点时间戳，2：显示，包含标点时间戳。默认值为 0。
   */
  WordInfo?: number
}

/**
 * CloseAsyncRecognitionTask返回参数结构体
 */
export interface CloseAsyncRecognitionTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 一句话识别返回的词时间戳
 */
export interface SentenceWord {
  /**
   * 词结果
   */
  Word: string

  /**
   * 词在音频中的开始时间
   */
  StartTime: number

  /**
   * 词在音频中的结束时间
   */
  EndTime: number
}

/**
 * CreateCustomization请求参数结构体
 */
export interface CreateCustomizationRequest {
  /**
   * 自学习模型名称，需在1-20字符之间
   */
  ModelName: string

  /**
   * 文本文件的下载地址，服务会从该地址下载文件，目前仅支持腾讯云cos
   */
  TextUrl: string

  /**
   * 自学习模型类型，填写8k或者16k
   */
  ModelType: string

  /**
   * 标签信息
   */
  TagInfos?: Array<string>
}

/**
 * DownloadAsrVocab返回参数结构体
 */
export interface DownloadAsrVocabResponse {
  /**
   * 词表ID。
   */
  VocabId?: string

  /**
   * 词表权重文件形式的base64值。
   */
  WordWeightStr?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRecTask返回参数结构体
 */
export interface CreateRecTaskResponse {
  /**
   * 录音文件识别的请求返回结果，包含结果查询需要的TaskId
   */
  Data: Task

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCustomization返回参数结构体
 */
export interface ModifyCustomizationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAsyncRecognitionTask返回参数结构体
 */
export interface CreateAsyncRecognitionTaskResponse {
  /**
   * 请求返回结果，包含本次的任务ID(TaskId)
   */
  Data: Task

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAsrVocab返回参数结构体
 */
export interface DeleteAsrVocabResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadCustomization返回参数结构体
 */
export interface DownloadCustomizationResponse {
  /**
   * 下载地址
   */
  DownloadUrl: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRecTask请求参数结构体
 */
export interface CreateRecTaskRequest {
  /**
      * 引擎模型类型。
电话场景：
• 8k_en：电话 8k 英语；
• 8k_zh：电话 8k 中文普通话通用；
非电话场景：
• 16k_zh：16k 中文普通话通用；
• 16k_zh_video：16k 音视频领域；
• 16k_en：16k 英语；
• 16k_ca：16k 粤语；
• 16k_ja：16k 日语；
• 16k_zh_edu 中文教育；
• 16k_en_edu 英文教育；
• 16k_zh_medical  医疗；
• 16k_th 泰语；
• 16k_wuu-SH：16k 上海话方言；
• 16k_zh_dialect：多方言。
      */
  EngineModelType: string

  /**
   * 识别声道数。1：单声道（非电话场景，直接选择单声道即可，忽略音频声道数）；2：双声道（仅支持8k_zh电话场景，双声道应分别对应通话双方）。注意：双声道的电话音频已物理分离说话人，无需再开启说话人分离功能。
   */
  ChannelNum: number

  /**
   * 识别结果返回形式。0： 识别结果文本(含分段时间戳)； 1：词级别粒度的[详细识别结果](https://cloud.tencent.com/document/api/1093/37824#SentenceDetail)(不含标点，含语速值)；2：词级别粒度的详细识别结果（包含标点、语速值）
   */
  ResTextFormat: number

  /**
   * 语音数据来源。0：语音 URL；1：语音数据（post body）。
   */
  SourceType: number

  /**
      * 是否开启说话人分离，0：不开启，1：开启(仅支持8k_zh，16k_zh，16k_zh_video，单声道音频)，默认值为 0。
注意：8k电话场景建议使用双声道来区分通话双方，设置ChannelNum=2即可，不用开启说话人分离。
      */
  SpeakerDiarization?: number

  /**
      * 说话人分离人数（需配合开启说话人分离使用），取值范围：0-10，0代表自动分离（目前仅支持≤6个人），1-10代表指定说话人数分离。默认值为 0。
注：话者分离目前是beta版本，请根据您的需要谨慎使用
      */
  SpeakerNumber?: number

  /**
   * 回调 URL，用户自行搭建的用于接收识别结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。回调格式&内容详见：[录音识别回调说明](https://cloud.tencent.com/document/product/1093/52632)
   */
  CallbackUrl?: string

  /**
   * 语音的URL地址，需要公网可下载。长度小于2048字节，当 SourceType 值为 0 时须填写该字段，为 1 时不需要填写。注意：请确保录音文件时长在5个小时之内，否则可能识别失败。请保证文件的下载速度，否则可能下载失败。
   */
  Url?: string

  /**
   * 语音数据base64编码，当SourceType 值为1时必须填写，为0可不写。音频数据要小于5MB。
   */
  Data?: string

  /**
   * 数据长度，非必填（此数据长度为数据未进行base64编码时的数据长度）。
   */
  DataLen?: number

  /**
   * 是否进行阿拉伯数字智能转换（目前支持中文普通话引擎）。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字，3: 打开数学相关数字转换。默认值为 1。
   */
  ConvertNumMode?: number

  /**
   * 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0。
   */
  FilterDirty?: number

  /**
   * 热词表id。如不设置该参数，自动生效默认热词表；如果设置了该参数，那么将生效对应的热词表。
   */
  HotwordId?: string

  /**
   * 自学习模型 id。如不设置该参数，自动生效最后一次上线的自学习模型；如果设置了该参数，那么将生效对应的自学习模型。
   */
  CustomizationId?: string

  /**
   * 附加参数(该参数无意义，忽略即可)
   */
  Extra?: string

  /**
   * 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认值为 0。
   */
  FilterPunc?: number

  /**
   * 是否过滤语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0。
   */
  FilterModal?: number
}

/**
 * GetAsrVocabList请求参数结构体
 */
export interface GetAsrVocabListRequest {
  /**
   * 标签信息，格式为“$TagKey : $TagValue ”，中间分隔符为“空格”+“:”+“空格”
   */
  TagInfos?: Array<string>

  /**
   * 分页Offset
   */
  Offset?: number

  /**
   * 分页Limit
   */
  Limit?: number
}

/**
 * GetCustomizationList返回参数结构体
 */
export interface GetCustomizationListResponse {
  /**
      * 自学习模型数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<Model>

  /**
      * 自学习模型总量
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadAsrVocab请求参数结构体
 */
export interface DownloadAsrVocabRequest {
  /**
   * 词表ID。
   */
  VocabId: string
}

/**
 * SetVocabState请求参数结构体
 */
export interface SetVocabStateRequest {
  /**
   * 热词表ID。
   */
  VocabId: string

  /**
   * 热词表状态，1：设为默认状态；0：设为非默认状态。
   */
  State: number
}

/**
 * 词表内容
 */
export interface Vocab {
  /**
   * 热词表名称
   */
  Name: string

  /**
   * 热词表描述
   */
  Description: string

  /**
   * 热词表ID
   */
  VocabId: string

  /**
   * 词权重列表
   */
  WordWeights: Array<HotWord>

  /**
   * 词表创建时间
   */
  CreateTime: string

  /**
   * 词表更新时间
   */
  UpdateTime: string

  /**
   * 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态
   */
  State: number

  /**
      * 标签数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagInfos: Array<string>
}

/**
 * CloseAsyncRecognitionTask请求参数结构体
 */
export interface CloseAsyncRecognitionTaskRequest {
  /**
   * 语音流异步识别任务的唯一标识，在创建任务时会返回
   */
  TaskId: number
}

/**
 * 录音文件识别、实时语音异步识别请求的返回数据
 */
export interface Task {
  /**
   * 任务ID，可通过此ID在轮询接口获取识别状态与结果。注意：TaskId数据类型为uint64
   */
  TaskId: number
}

/**
 * 音频流异步识别任务列表
 */
export interface AsyncRecognitionTasks {
  /**
      * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tasks: Array<AsyncRecognitionTaskInfo>
}

/**
 * ModifyCustomization请求参数结构体
 */
export interface ModifyCustomizationRequest {
  /**
   * 要修改的模型ID
   */
  ModelId: string

  /**
   * 要修改的模型名称，长度需在1-20个字符之间
   */
  ModelName?: string

  /**
   * 要修改的模型类型，为8k或者16k
   */
  ModelType?: string

  /**
   * 要修改的模型语料的下载地址，目前仅支持腾讯云cos
   */
  TextUrl?: string
}

/**
 * DeleteCustomization返回参数结构体
 */
export interface DeleteCustomizationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取录音识别结果结果的返回参数
 */
export interface TaskStatus {
  /**
   * 任务标识。
   */
  TaskId: number

  /**
   * 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。
   */
  Status: number

  /**
   * 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。
   */
  StatusStr: string

  /**
   * 识别结果。
   */
  Result: string

  /**
   * 失败原因说明。
   */
  ErrorMsg: string

  /**
      * 识别结果详情，包含每个句子中的词时间偏移，一般用于生成字幕的场景。(录音识别请求中ResTextFormat=1时该字段不为空)
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultDetail: Array<SentenceDetail>

  /**
      * 音频时长(秒)。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioDuration: number
}

/**
 * DeleteAsrVocab请求参数结构体
 */
export interface DeleteAsrVocabRequest {
  /**
   * 热词表Id
   */
  VocabId: string
}

/**
 * GetCustomizationList请求参数结构体
 */
export interface GetCustomizationListRequest {
  /**
   * 标签信息，格式为“$TagKey : $TagValue ”，中间分隔符为“空格”+“:”+“空格”
   */
  TagInfos?: Array<string>

  /**
   * 分页大小，默认1000
   */
  Limit?: number

  /**
   * 分页offset，默认0
   */
  Offset?: number
}

/**
 * UpdateAsrVocab返回参数结构体
 */
export interface UpdateAsrVocabResponse {
  /**
   * 热词表ID
   */
  VocabId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAsrVocab返回参数结构体
 */
export interface CreateAsrVocabResponse {
  /**
   * 词表ID，可用于获取词表信息
   */
  VocabId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自学习模型信息
 */
export interface Model {
  /**
   * 模型名称
   */
  ModelName: string

  /**
   * 模型文件名称
   */
  DictName: string

  /**
   * 模型Id
   */
  ModelId: string

  /**
   * 模型类型，“8k”或者”16k“
   */
  ModelType: string

  /**
   * 服务类型
   */
  ServiceType: string

  /**
   * 模型状态，-1下线状态，1上线状态, 0训练中, -2 训练失败
   */
  ModelState: number

  /**
   * 最后更新时间
   */
  AtUpdated: string

  /**
      * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagInfos: Array<string>
}

/**
 * CreateAsrVocab请求参数结构体
 */
export interface CreateAsrVocabRequest {
  /**
   * 热词表名称，长度在1-255之间
   */
  Name: string

  /**
   * 热词表描述，长度在0-1000之间
   */
  Description?: string

  /**
   * 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10，权重为[1,10]之间整数，数组长度不大于128
   */
  WordWeights?: Array<HotWord>

  /**
      * 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。
当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略
      */
  WordWeightStr?: string
}

/**
 * 单句的详细识别结果，包含单个词的时间偏移，一般用于生成字幕的场景。
 */
export interface SentenceDetail {
  /**
      * 单句最终识别结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  FinalSentence: string

  /**
      * 单句中间识别结果，使用空格拆分为多个词
注意：此字段可能返回 null，表示取不到有效值。
      */
  SliceSentence: string

  /**
      * 单句开始时间（毫秒）
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartMs: number

  /**
      * 单句结束时间（毫秒）
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndMs: number

  /**
      * 单句中词个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  WordsNum: number

  /**
      * 单句中词详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Words: Array<SentenceWords>

  /**
      * 单句语速，单位：字数/秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpeechSpeed: number

  /**
      * 声道或说话人 Id（请求中如果设置了 speaker_diarization或者ChannelNum为双声道，可区分说话人或声道）
注意：此字段可能返回 null，表示取不到有效值。
      */
  SpeakerId: number
}

/**
 * UpdateAsrVocab请求参数结构体
 */
export interface UpdateAsrVocabRequest {
  /**
   * 热词表ID
   */
  VocabId: string

  /**
   * 热词表名称，长度在1-255之间
   */
  Name?: string

  /**
   * 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10，权重为[1,10]之间整数，数组长度不大于128
   */
  WordWeights?: Array<HotWord>

  /**
      * 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。
当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略
      */
  WordWeightStr?: string

  /**
   * 热词表描述，长度在0-1000之间
   */
  Description?: string
}

/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
  /**
   * 从CreateRecTask接口获取的TaskId，用于获取任务状态与结果。
   */
  TaskId: number
}

/**
 * SentenceRecognition返回参数结构体
 */
export interface SentenceRecognitionResponse {
  /**
   * 识别结果。
   */
  Result: string

  /**
   * 请求的音频时长，单位为ms
   */
  AudioDuration: number

  /**
      * 词时间戳列表的长度
注意：此字段可能返回 null，表示取不到有效值。
      */
  WordSize: number

  /**
      * 词时间戳列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  WordList: Array<SentenceWord>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCustomization请求参数结构体
 */
export interface DeleteCustomizationRequest {
  /**
   * 要删除的模型ID
   */
  ModelId: string
}

/**
 * 音频流异步识别任务信息
 */
export interface AsyncRecognitionTaskInfo {
  /**
   * 任务ID
   */
  TaskId: number

  /**
   * 音频流Url
   */
  Url: string
}

/**
 * ModifyCustomizationState返回参数结构体
 */
export interface ModifyCustomizationStateResponse {
  /**
   * 自学习模型ID
   */
  ModelId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAsyncRecognitionTasks返回参数结构体
 */
export interface DescribeAsyncRecognitionTasksResponse {
  /**
      * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: AsyncRecognitionTasks

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAsrVocabList返回参数结构体
 */
export interface GetAsrVocabListResponse {
  /**
   * 热词表列表
   */
  VocabList: Array<Vocab>

  /**
   * 热词列表总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 识别结果中词文本，以及对应时间偏移
 */
export interface SentenceWords {
  /**
      * 词文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Word: string

  /**
      * 在句子中的开始时间偏移量
注意：此字段可能返回 null，表示取不到有效值。
      */
  OffsetStartMs: number

  /**
      * 在句子中的结束时间偏移量
注意：此字段可能返回 null，表示取不到有效值。
      */
  OffsetEndMs: number
}

/**
 * DownloadCustomization请求参数结构体
 */
export interface DownloadCustomizationRequest {
  /**
   * 自学习模型ID
   */
  ModelId: string
}

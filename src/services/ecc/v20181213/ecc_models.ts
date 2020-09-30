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
 * CorrectMultiImage返回参数结构体
 */
export interface CorrectMultiImageResponse {
  /**
   * 接口返回数据
   */
  Data?: CompostionContext

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTask请求参数结构体
 */
export interface DescribeTaskRequest {
  /**
   * 任务 ID
   */
  TaskId: string

  /**
   * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数（暂时无需传入）。
   */
  EccAppid?: string
}

/**
 * 句子的相关信息
 */
export interface SentenceItem {
  /**
   * 英语句子
   */
  Sentence: string

  /**
   * 段落id
   */
  ParaID: number

  /**
   * 句子id
   */
  SentenceID: number
}

/**
 * ECC返回参数结构体
 */
export interface ECCResponse {
  /**
      * 整体的批改结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: CorrectData

  /**
      * 任务 id，用于查询接口
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EHOCR返回参数结构体
 */
export interface EHOCRResponse {
  /**
   * 接口返回数据
   */
  Data?: CompostionContext

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 维度单词坐标
 */
export interface ErrorCoordinate {
  /**
   * 维度单词坐标
   */
  Coordinate: Array<number>
}

/**
 * ECC请求参数结构体
 */
export interface ECCRequest {
  /**
   * 作文文本，必填
   */
  Content: string

  /**
   * 作文题目，可选参数
   */
  Title?: string

  /**
   * 年级标准， 默认以cet4为标准，取值与意义如下：elementary 小学，grade7 grade8 grade9分别对应初一，初二，初三。 grade10 grade11 grade12 分别对应高一，高二，高三，以及cet4和cet6 分别表示 英语4级和6级。
   */
  Grade?: string

  /**
   * 作文提纲，可选参数，作文的写作要求。
   */
  Requirement?: string

  /**
   * 范文标题，可选参数，本接口可以依据提供的范文对作文进行评分。
   */
  ModelTitle?: string

  /**
   * 范文内容，可选参数，同上，范文的正文部分。
   */
  ModelContent?: string

  /**
   * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数（暂时无需传入）。
   */
  EccAppid?: string

  /**
   * 异步模式标识，0：同步模式，1：异步模式，默认为同步模式
   */
  IsAsync?: number

  /**
   * 图像识别唯一标识，一次识别一个 SessionId。当传入此前识别接口使用过的 SessionId，则本次批改按图像批改价格收费；如使用了识别接口且本次没有传入 SessionId，则需要加取文本批改的费用；如果直接使用文本批改接口，则只收取文本批改的费用
   */
  SessionId?: string
}

/**
 * 批改结果按句点评的详细信息
 */
export interface SentenceCom {
  /**
   * 句子错误纠正信息
   */
  Suggestions: Array<SentenceSuggest>

  /**
   * 句子信息
   */
  Sentence: SentenceItem
}

/**
 * 句子批阅建议
 */
export interface SentenceSuggest {
  /**
   * 类型
   */
  Type: string

  /**
   * 错误类型
   */
  ErrorType: string

  /**
   * 原始单词
   */
  Origin: string

  /**
   * 替换成 的单词
   */
  Replace: string

  /**
   * 提示信息
   */
  Message: string

  /**
   * 维度单词位置，在句子的第几个到第几个单词之间
   */
  ErrorPosition: Array<number>

  /**
   * 维度单词坐标，错误单词在图片中的坐标，只有传图片时正常返回，传文字时返回[ ]
   */
  ErrorCoordinates: Array<ErrorCoordinate>
}

/**
 * 批改的结果
 */
export interface CorrectData {
  /**
   * 总得分
   */
  Score: number

  /**
   * 各项得分详情
   */
  ScoreCat: ScoreCategory

  /**
   * 综合评价
   */
  Comment: string

  /**
   * 句子点评
   */
  SentenceComments: Array<SentenceCom>
}

/**
 * 四个维度的得分
 */
export interface ScoreCategory {
  /**
   * 词汇维度
   */
  Words: Aspect

  /**
   * 句子维度
   */
  Sentences: Aspect

  /**
   * 篇章结构维度
   */
  Structure: Aspect

  /**
   * 内容维度
   */
  Content: Aspect

  /**
   * 维度得分
   */
  Score: number

  /**
   * 维度分数占比
   */
  Percentage: number
}

/**
 * 作文批改每个维度名字与得分
 */
export interface Aspect {
  /**
   * 维度名字
   */
  Name: string

  /**
   * 维度得分
   */
  Score: number

  /**
   * 维度分数占比
   */
  Percentage: number
}

/**
 * 图像识别批改接口返回的作文文本信息或批改信息
 */
export interface CompostionContext {
  /**
   * 作文内容
   */
  Content: string

  /**
      * 批改结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  CorrectData: CorrectData

  /**
      * 任务 id，用于查询接口
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 图像识别唯一标识，一次识别一个 SessionId
注意：此字段可能返回 null，表示取不到有效值。
      */
  SessionId: string
}

/**
 * DescribeTask返回参数结构体
 */
export interface DescribeTaskResponse {
  /**
      * 作文识别文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Content?: string

  /**
      * 整体的批改结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  CorrectData?: CorrectData

  /**
   * 任务状态，“Progressing”: 处理中（此时无结果返回）、“Finished”: 处理完成
   */
  Status?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EHOCR请求参数结构体
 */
export interface EHOCRRequest {
  /**
   * 图片所在的url或base64编码后的图像数据，依据InputType而定
   */
  Image: string

  /**
   * 输出图片类型，0 表示 Image 字段是图片所在的 url，1 表示 Image 字段是 base64 编码后的图像数据
   */
  InputType: number

  /**
   * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数（暂时无需传入）。
   */
  EccAppid?: string

  /**
   * 图像识别唯一标识，一次识别一个 SessionId，使用识别功能时 SessionId 可用于使用文本批改接口，此时按图像批改价格收费；如使用文本批改接口时没有传入 SessionId，则需要收取文本批改的费用
   */
  SessionId?: string

  /**
   * 服务类型，0：“图像识别”，只返回识别结果，1：“图像批改”，同时返回识别结果与批改结果。默认为 0
   */
  ServerType?: number

  /**
   * 作文题目，可选参数
   */
  Title?: string

  /**
   * 年级标准， 默认以 cet4 为标准，取值与意义如下：elementary 小学，grade7 grade8 grade9分别对应初一，初二，初三。 grade10 grade11 grade12 分别对应高一，高二，高三，以及 cet4 和 cet6 分别表示 英语4级和6级。
   */
  Grade?: string

  /**
   * 作文提纲，可选参数，作文的写作要求。
   */
  Requirement?: string

  /**
   * 范文标题，可选参数，本接口可以依据提供的范文对作文进行评分。
   */
  ModelTitle?: string

  /**
   * 范文内容，可选参数，同上，范文的正文部分。
   */
  ModelContent?: string

  /**
   * 异步模式标识，0：同步模式，1：异步模式。默认为同步模式
   */
  IsAsync?: number
}

/**
 * CorrectMultiImage请求参数结构体
 */
export interface CorrectMultiImageRequest {
  /**
   * 图片的url链接或base64数据。每张图片数据作为数组的一个元素，数组个数与图片个数保持一致。存放类别依据InputType而定，url与base64编码不能混合使用。
   */
  Image: Array<string>

  /**
   * 输出图片类型，0 表示 Image 字段是图片所在的 url，1 表示 Image 字段是 base64 编码后的图像数据。
   */
  InputType: number

  /**
   * 业务应用ID，与账号应用APPID无关，是用来方便客户管理服务的参数。
   */
  EccAppid?: string

  /**
   * 图像识别唯一标识，一次识别一个 SessionId，使用识别功能时 SessionId 可用于使用文本批改接口，此时按图像批改价格收费；如使用文本批改接口时没有传入 SessionId，则需要收取文本批改的费用。
   */
  SessionId?: string

  /**
   * 服务类型，0：“多图像识别”，只返回识别结果；1：“多图像批改”，同时返回识别结果与批改结果。默认为 0。
   */
  ServerType?: number

  /**
   * 作文题目，可选参数
   */
  Title?: string

  /**
   * 年级标准， 默认以 cet4 为标准，取值与意义如下：elementary 小学，grade7 grade8 grade9分别对应初一，初二，初三。 grade10 grade11 grade12 分别对应高一，高二，高三，以及 cet4 和 cet6 分别表示 英语4级和6级。
   */
  Grade?: string

  /**
   * 作文提纲，可选参数，作文的写作要求。
   */
  Requirement?: string

  /**
   * 范文标题，可选参数，本接口可以依据提供的范文对作文进行评分。
   */
  ModelTitle?: string

  /**
   * 范文内容，可选参数，同上，范文的正文部分。
   */
  ModelContent?: string

  /**
   * 异步模式标识，0：同步模式，1：异步模式。默认为同步模式
   */
  IsAsync?: number
}

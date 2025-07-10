/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * 分类详细信息
 */
export interface Category {
  /**
   * 分类id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 分类英文名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Label?: string
  /**
   * 分类中文名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 分类置信度。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Score?: number
}

/**
 * ComposeCouplet请求参数结构体
 */
export interface ComposeCoupletRequest {
  /**
   * 生成对联的关键词。长度需>=2，当长度>2时，自动截取前两个字作为关键字。内容需为常用汉字（不含有数字、英文、韩语、日语、符号等等其他）。
   */
  Text: string
  /**
   * 返回的文本结果为繁体还是简体。0：简体；1：繁体。默认为0。
   */
  TargetType?: number
}

/**
 * EvaluateSentenceSimilarity请求参数结构体
 */
export interface EvaluateSentenceSimilarityRequest {
  /**
   * 待分析的句子对数组。句子对应不超过1对，仅支持中文文本，原句子与目标句子均应不超过500字符。
   */
  SentencePairList: Array<SentencePair>
}

/**
 * 待分析的句子对
 */
export interface SentencePair {
  /**
   * 需要与目标句子计算相似度的源句子。（仅支持UTF-8格式，不超过500字符）
   */
  SourceText: string
  /**
   * 目标句子。（仅支持UTF-8格式，不超过500字符）

   */
  TargetText: string
}

/**
 * SentenceCorrection返回参数结构体
 */
export interface SentenceCorrectionResponse {
  /**
   * 纠错结果列表。
（注意仅展示错误句子的纠错结果，若句子无错则不展示，若全部待纠错句子都被认为无错，则可能返回数组为空）
   */
  CorrectionList?: Array<CorrectionItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClassifyContent请求参数结构体
 */
export interface ClassifyContentRequest {
  /**
   * 待分类的文章的标题（仅支持UTF-8格式，不超过100字符）。
   */
  Title: string
  /**
   * 待分类文章的内容, 每个元素对应一个段落。（仅支持UTF-8格式，文章内容长度总和不超过2000字符）
   */
  Content: Array<string>
}

/**
 * 实体识别结果。
 */
export interface Entity {
  /**
   * 基础词。
   */
  Word?: string
  /**
   * 基础词在NormalText中的起始位置。
   */
  BeginOffset?: number
  /**
   * 基础词的长度。
   */
  Length?: number
  /**
   * 实体类型的标准名字。
   */
  Type?: string
  /**
   * 类型名字的自然语言表达。（中文或英文）
   */
  Name?: string
}

/**
 * EvaluateSentenceSimilarity返回参数结构体
 */
export interface EvaluateSentenceSimilarityResponse {
  /**
   * 每个句子对的相似度分值。
   */
  ScoreList?: Array<number>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClassifyContent返回参数结构体
 */
export interface ClassifyContentResponse {
  /**
   * 一级分类。（请参见附录[三级分类体系表](https://cloud.tencent.com/document/product/271/94286)）
   */
  FirstClassification?: Category
  /**
   * 二级分类。（请参见附录[三级分类体系表](https://cloud.tencent.com/document/product/271/94286)）
   */
  SecondClassification?: Category
  /**
   * 三级分类。（请参见附录[三级分类体系表](https://cloud.tencent.com/document/product/271/94286)）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThirdClassification?: Category
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SentenceCorrection请求参数结构体
 */
export interface SentenceCorrectionRequest {
  /**
   * 待纠错的句子列表。可以以数组方式在一次请求中填写多个待纠错的句子。文本统一使用utf-8格式编码，每个中文句子的长度不超过150字符，每个英文句子的长度不超过100个单词，且数组长度需小于30，即句子总数需少于30句。
   */
  TextList: Array<string>
}

/**
 * AnalyzeSentiment请求参数结构体
 */
export interface AnalyzeSentimentRequest {
  /**
   * 待分析的文本（仅支持UTF-8格式，不超过200字）。
   */
  Text: string
}

/**
 * AnalyzeSentiment返回参数结构体
 */
export interface AnalyzeSentimentResponse {
  /**
   * 正面情感概率。
   */
  Positive?: number
  /**
   * 中性情感概率。
   */
  Neutral?: number
  /**
   * 负面情感概率。
   */
  Negative?: number
  /**
   * 情感分类结果：
positive：正面情感
negative：负面情感
neutral：中性、无情感
   */
  Sentiment?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ParseWords返回参数结构体
 */
export interface ParseWordsResponse {
  /**
   * 输入文本正则化的结果。（包括对英文文本中的开头和实体进行大写等）
   */
  NormalText?: string
  /**
   * 基础粒度分词和词性标注的结果。（请参见附录[词性表](https://cloud.tencent.com/document/product/271/36460)）
   */
  BasicParticiples?: Array<BasicParticiple>
  /**
   * 复合粒度分词和词性标注的结果。（请参见附录[词性表](https://cloud.tencent.com/document/product/271/36460)）
   */
  CompoundParticiples?: Array<CompoundParticiple>
  /**
   * 实体识别结果。（请参见附录[实体类型数据](https://cloud.tencent.com/document/product/271/90592)）

   */
  Entities?: Array<Entity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基础粒度分词和词性标注的结果
 */
export interface BasicParticiple {
  /**
   * 基础词。
   */
  Word?: string
  /**
   * 基础词在NormalText中的起始位置。
   */
  BeginOffset?: number
  /**
   * 基础词的长度。
   */
  Length?: number
  /**
   * 词性。
   */
  Pos?: string
}

/**
 * 纠错结果列表
 */
export interface CorrectionItem {
  /**
   * 纠错句子的序号。
   */
  Order?: number
  /**
   * 错误的起始位置，从0开始。
   */
  BeginOffset?: number
  /**
   * 错误内容长度。
   */
  Len?: number
  /**
   * 错误内容。
   */
  Word?: string
  /**
   * 纠错结果，当为删除类错误时，结果为null。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CorrectWord?: Array<string>
  /**
   * 纠错类型。0：替换；1：插入；2：删除。
   */
  CorrectionType?: number
  /**
   * 纠错信息置信度。0：error；1：warning；error的置信度更高。（仅供参考）
   */
  Confidence?: number
  /**
   * 纠错信息中文描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DescriptionZh?: string
  /**
   * 纠错信息英文描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DescriptionEn?: string
}

/**
 * 复合粒度分词和词性标注的结果。
 */
export interface CompoundParticiple {
  /**
   * 基础词。
   */
  Word?: string
  /**
   * 基础词在NormalText中的起始位置。
   */
  BeginOffset?: number
  /**
   * 基础词的长度。
   */
  Length?: number
  /**
   * 词性。
   */
  Pos?: string
}

/**
 * ParseWords请求参数结构体
 */
export interface ParseWordsRequest {
  /**
   * 待分析的文本（支持中英文文本，不超过500字符）
   */
  Text: string
}

/**
 * ComposeCouplet返回参数结构体
 */
export interface ComposeCoupletResponse {
  /**
   * 横批。
   */
  TopScroll?: string
  /**
   * 上联与下联。
   */
  Content?: Array<string>
  /**
   * 当对联随机生成时，展示随机生成原因。
   */
  RandomCause?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

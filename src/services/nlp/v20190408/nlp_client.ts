/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  Category,
  TextEmbellishRequest,
  EvaluateWordSimilarityResponse,
  RetrieveSimilarWordsRequest,
  ClassifyContentResponse,
  ParseWordsResponse,
  BasicParticiple,
  ComposePoetryResponse,
  ClassifyContentRequest,
  RetrieveSimilarWordsResponse,
  EvaluateSentenceSimilarityResponse,
  Embellish,
  EvaluateWordSimilarityRequest,
  CompoundParticiple,
  TextWritingResponse,
  AnalyzeSentimentResponse,
  ParseWordsRequest,
  Writing,
  SentenceCorrectionResponse,
  SentencePair,
  KeywordSentence,
  ComposeCoupletRequest,
  EvaluateSentenceSimilarityRequest,
  TextWritingRequest,
  GenerateKeywordSentenceResponse,
  Entity,
  ComposePoetryRequest,
  SentenceCorrectionRequest,
  TextEmbellishResponse,
  AnalyzeSentimentRequest,
  CorrectionItem,
  GenerateKeywordSentenceRequest,
  ComposeCoupletResponse,
} from "./nlp_models"

/**
 * nlp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("nlp.tencentcloudapi.com", "2019-04-08", clientConfig)
  }

  /**
   * 运用先进的自然语言处理技术，对原始文本进行优化润色，提升文本的通顺性、表达力和语言质量。
   */
  async TextEmbellish(
    req: TextEmbellishRequest,
    cb?: (error: string, rep: TextEmbellishResponse) => void
  ): Promise<TextEmbellishResponse> {
    return this.request("TextEmbellish", req, cb)
  }

  /**
   * 文本分类接口能够对用户输入的文章进行自动分类，将其映射到具体的类目上，用户只需要提供待分类的文本，而无需关注具体实现。该功能定义了一套较为完备的[三级分类体系](https://cloud.tencent.com/document/product/271/94286)，积累了数百万的语料，经过多轮迭代优化打造了较先进的深度学习模型，以保证效果不断提升。
   */
  async ClassifyContent(
    req: ClassifyContentRequest,
    cb?: (error: string, rep: ClassifyContentResponse) => void
  ): Promise<ClassifyContentResponse> {
    return this.request("ClassifyContent", req, cb)
  }

  /**
   * 智能识别并纠正句子中的语法、拼写、用词等错误，确保文本的准确性和可读性。
   */
  async SentenceCorrection(
    req: SentenceCorrectionRequest,
    cb?: (error: string, rep: SentenceCorrectionResponse) => void
  ): Promise<SentenceCorrectionResponse> {
    return this.request("SentenceCorrection", req, cb)
  }

  /**
   * 诗词生成接口利用现代的自然语言处理和深度学习技术，模仿了古代著名诗人的风格，为用户产生独特的诗词。用户只需输入的命题关键词，接口就能自动生成一首七言律诗或五言律诗。
   */
  async ComposePoetry(
    req: ComposePoetryRequest,
    cb?: (error: string, rep: ComposePoetryResponse) => void
  ): Promise<ComposePoetryResponse> {
    return this.request("ComposePoetry", req, cb)
  }

  /**
   * 基于大数据和深度学习技术，可以快速地找到与给定词语高度相似的其他词语，有助于提高搜索和推荐的准确性。（目前仅支持中文）
   */
  async RetrieveSimilarWords(
    req: RetrieveSimilarWordsRequest,
    cb?: (error: string, rep: RetrieveSimilarWordsResponse) => void
  ): Promise<RetrieveSimilarWordsResponse> {
    return this.request("RetrieveSimilarWords", req, cb)
  }

  /**
   * 通过计算句子间的语义相似性，帮助您快速找到文本中重复或相似的句子，用于文本聚类、相似问题检索等应用场景。
   */
  async EvaluateSentenceSimilarity(
    req: EvaluateSentenceSimilarityRequest,
    cb?: (error: string, rep: EvaluateSentenceSimilarityResponse) => void
  ): Promise<EvaluateSentenceSimilarityResponse> {
    return this.request("EvaluateSentenceSimilarity", req, cb)
  }

  /**
   * 根据提供的关键词，生成简洁明了的关键句子，便于用户快速获取核心观点。
   */
  async GenerateKeywordSentence(
    req: GenerateKeywordSentenceRequest,
    cb?: (error: string, rep: GenerateKeywordSentenceResponse) => void
  ): Promise<GenerateKeywordSentenceResponse> {
    return this.request("GenerateKeywordSentence", req, cb)
  }

  /**
   * 通过自动补全文本片段，帮助用户快速生成高质量、连贯的完整文本，提高创作效率。
   */
  async TextWriting(
    req: TextWritingRequest,
    cb?: (error: string, rep: TextWritingResponse) => void
  ): Promise<TextWritingResponse> {
    return this.request("TextWriting", req, cb)
  }

  /**
   * 评估两个词语在语义空间的相似程度，为您的场景应用提供有力支持，如关键词过滤、热门话题挖掘等。（目前仅支持中文）
   */
  async EvaluateWordSimilarity(
    req: EvaluateWordSimilarityRequest,
    cb?: (error: string, rep: EvaluateWordSimilarityResponse) => void
  ): Promise<EvaluateWordSimilarityResponse> {
    return this.request("EvaluateWordSimilarity", req, cb)
  }

  /**
   * 对联生成接口根据用户输入的命题关键词，智能生成一副完整的春联，包括上联、下联和横批。该接口利用先进的自然语言处理技术，确保生成的春联既符合传统对仗、对韵、对义的要求，又具有新意和创意，为用户提供独特的春节祝福。
   */
  async ComposeCouplet(
    req: ComposeCoupletRequest,
    cb?: (error: string, rep: ComposeCoupletResponse) => void
  ): Promise<ComposeCoupletResponse> {
    return this.request("ComposeCouplet", req, cb)
  }

  /**
   * 情感分析接口能够对带有情感色彩的主观性文本进行分析、处理、归纳和推理，识别出用户的情感倾向，是积极、中性还是消极，并且提供各自概率。
   */
  async AnalyzeSentiment(
    req: AnalyzeSentimentRequest,
    cb?: (error: string, rep: AnalyzeSentimentResponse) => void
  ): Promise<AnalyzeSentimentResponse> {
    return this.request("AnalyzeSentiment", req, cb)
  }

  /**
   * 通过精准地对文本进行分词、词性标注、命名实体识别等功能，助您更好地理解文本内容，挖掘出潜在的价值信息。
   */
  async ParseWords(
    req: ParseWordsRequest,
    cb?: (error: string, rep: ParseWordsResponse) => void
  ): Promise<ParseWordsResponse> {
    return this.request("ParseWords", req, cb)
  }
}

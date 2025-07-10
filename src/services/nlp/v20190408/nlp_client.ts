/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  Category,
  ComposeCoupletRequest,
  EvaluateSentenceSimilarityRequest,
  SentencePair,
  SentenceCorrectionResponse,
  ClassifyContentRequest,
  Entity,
  EvaluateSentenceSimilarityResponse,
  ClassifyContentResponse,
  SentenceCorrectionRequest,
  AnalyzeSentimentRequest,
  AnalyzeSentimentResponse,
  ParseWordsResponse,
  BasicParticiple,
  CorrectionItem,
  CompoundParticiple,
  ParseWordsRequest,
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
   * 通过计算句子间的语义相似性，帮助您快速找到文本中重复或相似的句子，用于文本聚类、相似问题检索等应用场景。
   */
  async EvaluateSentenceSimilarity(
    req: EvaluateSentenceSimilarityRequest,
    cb?: (error: string, rep: EvaluateSentenceSimilarityResponse) => void
  ): Promise<EvaluateSentenceSimilarityResponse> {
    return this.request("EvaluateSentenceSimilarity", req, cb)
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

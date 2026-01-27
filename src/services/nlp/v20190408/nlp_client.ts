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
  SentenceCorrectionResponse,
  ParseWordsRequest,
  Entity,
  SentenceCorrectionRequest,
  AnalyzeSentimentRequest,
  AnalyzeSentimentResponse,
  ParseWordsResponse,
  BasicParticiple,
  CorrectionItem,
  CompoundParticiple,
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
   * 智能识别并纠正句子中的语法、拼写、用词等错误，确保文本的准确性和可读性。
   */
  async SentenceCorrection(
    req: SentenceCorrectionRequest,
    cb?: (error: string, rep: SentenceCorrectionResponse) => void
  ): Promise<SentenceCorrectionResponse> {
    return this.request("SentenceCorrection", req, cb)
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

  /**
   * 情感分析接口能够对带有情感色彩的主观性文本进行分析、处理、归纳和推理，识别出用户的情感倾向，是积极、中性还是消极，并且提供各自概率。
   */
  async AnalyzeSentiment(
    req: AnalyzeSentimentRequest,
    cb?: (error: string, rep: AnalyzeSentimentResponse) => void
  ): Promise<AnalyzeSentimentResponse> {
    return this.request("AnalyzeSentiment", req, cb)
  }
}

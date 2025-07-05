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
  SentenceInfo,
  Tone,
  InitOralProcessRequest,
  Keyword,
  KeywordEvaluateRequest,
  TransmitOralProcessRequest,
  TransmitOralProcessResponse,
  InitOralProcessResponse,
  KeywordEvaluateResponse,
  PhoneInfo,
  WordRsp,
  KeywordScore,
  TransmitOralProcessWithInitRequest,
  TransmitOralProcessWithInitResponse,
} from "./soe_models"

/**
 * soe client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("soe.tencentcloudapi.com", "2018-07-24", clientConfig)
  }

  /**
   * 初始化发音评估过程，每一轮评估前进行调用。语音输入模式分为流式模式和非流式模式，流式模式支持数据分片传输，可以加快评估响应速度。评估模式分为词模式和句子模式，词模式会标注每个音节的详细信息；句子模式会有完整度和流利度的评估。
   */
  async InitOralProcess(
    req: InitOralProcessRequest,
    cb?: (error: string, rep: InitOralProcessResponse) => void
  ): Promise<InitOralProcessResponse> {
    return this.request("InitOralProcess", req, cb)
  }

  /**
   * 指定主题关键词词汇评估，分析语音与关键词的切合程度，可指定多个关键词，支持中文英文同时评测。分片传输时，尽量保证纯异步调用，即不等待上一个分片的传输结果边录边传，这样可以尽可能早的提供音频数据。音频源目前仅支持16k采样率16bit单声道编码方式，如有不一致可能导致评估不准确或失败。
   */
  async KeywordEvaluate(
    req: KeywordEvaluateRequest,
    cb?: (error: string, rep: KeywordEvaluateResponse) => void
  ): Promise<KeywordEvaluateResponse> {
    return this.request("KeywordEvaluate", req, cb)
  }

  /**
   * 本接口可用于中英文发音评测数据传输。在使用本接口时需要注意：传输音频数据，必须在完成发音评估初始化接口之后调用，且SessonId要与初始化接口保持一致。分片传输时，尽量保证SeqId顺序传输（请确认SeqId由1开始）。音频源目前仅支持16k采样率16bit单声道编码方式，如有不一致可能导致评估不准确或失败。
   */
  async TransmitOralProcess(
    req: TransmitOralProcessRequest,
    cb?: (error: string, rep: TransmitOralProcessResponse) => void
  ): Promise<TransmitOralProcessResponse> {
    return this.request("TransmitOralProcess", req, cb)
  }

  /**
   * 本接口可用于中英文发音评测。在使用本接口时需要注意：初始化并传输音频数据，分片传输时，尽量保证SeqId顺序传输（请确认SeqId由1开始）。音频源目前仅支持16k采样率16bit单声道编码方式，如有不一致可能导致评估不准确或失败。
   */
  async TransmitOralProcessWithInit(
    req: TransmitOralProcessWithInitRequest,
    cb?: (error: string, rep: TransmitOralProcessWithInitResponse) => void
  ): Promise<TransmitOralProcessWithInitResponse> {
    return this.request("TransmitOralProcessWithInit", req, cb)
  }
}

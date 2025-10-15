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
  ChatCompletionsRequest,
  DocumentChunkUsage,
  ChunkDocumentAsyncRequest,
  ChunkDocumentRequest,
  WebContent,
  GetDocumentChunkResultRequest,
  RerankResult,
  GetDocumentParseResultRequest,
  PageUsage,
  Usage,
  DocumentParseConfig,
  ParseDocumentResponse,
  Document,
  GetTextEmbeddingRequest,
  ParseDocumentAsyncResponse,
  ChunkDocumentResponse,
  Tool,
  GetDocumentParseResultResponse,
  TokenUsage,
  Choice,
  RunRerankRequest,
  EmbeddingData,
  ChunkConfig,
  MultiModalEmbeddingData,
  ToolFunction,
  ToolCallFunction,
  OutputMessage,
  ToolCall,
  ParseDocument,
  GetDocumentChunkResultResponse,
  ChunkDocumentAsyncResponse,
  GetMultiModalEmbeddingResponse,
  GetMultiModalEmbeddingRequest,
  OnlineSearchOptions,
  ParseDocumentRequest,
  Chunk,
  ChunkConfigAsync,
  GetTextEmbeddingResponse,
  RunRerankResponse,
  ParseDocumentAsyncRequest,
  ChunkDocument,
  Message,
  MultiModalUsage,
  ChatCompletionsResponse,
} from "./es_models"

/**
 * es client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("es.tencentcloudapi.com", "2025-01-01", clientConfig)
  }

  /**
     * 文本切片是将长文本分割为短片段的技术，用于适配模型输入、提升处理效率或信息检索，平衡片段长度与语义连贯性，适用于NLP、数据分析等场景。
本接口为异步接口，有单账号调用上限控制，如您有提高并发限制的需求请[联系我们](https://cloud.tencent.com/act/event/Online_service) 。
     */
  async ChunkDocumentAsync(
    req: ChunkDocumentAsyncRequest,
    cb?: (error: string, rep: ChunkDocumentAsyncResponse) => void
  ): Promise<ChunkDocumentAsyncResponse> {
    return this.request("ChunkDocumentAsync", req, cb)
  }

  /**
   * 获取文档切片结果
   */
  async GetDocumentChunkResult(
    req: GetDocumentChunkResultRequest,
    cb?: (error: string, rep: GetDocumentChunkResultResponse) => void
  ): Promise<GetDocumentChunkResultResponse> {
    return this.request("GetDocumentChunkResult", req, cb)
  }

  /**
     * 本服务可将各类格式文档精准转换为标准格式，满足企业知识库建设、技术文档迁移、内容平台结构化存储等需求。
本接口为异步接口，有单账号调用上限控制，如您有提高并发限制的需求请[联系我们](https://cloud.tencent.com/act/event/Online_service)  。
     */
  async ParseDocumentAsync(
    req: ParseDocumentAsyncRequest,
    cb?: (error: string, rep: ParseDocumentAsyncResponse) => void
  ): Promise<ParseDocumentAsyncResponse> {
    return this.request("ParseDocumentAsync", req, cb)
  }

  /**
   * 本接口用于获取文档解析异步处理结果。
   */
  async GetDocumentParseResult(
    req: GetDocumentParseResultRequest,
    cb?: (error: string, rep: GetDocumentParseResultResponse) => void
  ): Promise<GetDocumentParseResultResponse> {
    return this.request("GetDocumentParseResult", req, cb)
  }

  /**
     * Embedding是一种将高维数据映射到低维空间的技术，通常用于将非结构化数据，如文本、图像或音频转化为向量表示，使其更容易输入机器模型进行处理，并且向量之间的距离可以反映对象之间的相似性。
本接口有模型维度调用上限控制，单个模型qps限制20，如您有提高并发限制的需求请[联系我们](https://cloud.tencent.com/act/event/Online_service)  。
     */
  async GetTextEmbedding(
    req: GetTextEmbeddingRequest,
    cb?: (error: string, rep: GetTextEmbeddingResponse) => void
  ): Promise<GetTextEmbeddingResponse> {
    return this.request("GetTextEmbedding", req, cb)
  }

  /**
     * 本服务可将各类格式文档精准转换为标准格式，满足企业知识库建设、技术文档迁移、内容平台结构化存储等需求。
本接口有单账号调用上限控制，如您有提高并发限制的需求请[联系我们](https://cloud.tencent.com/act/event/Online_service)。
     */
  async ParseDocument(
    req: ParseDocumentRequest,
    cb?: (error: string, rep: ParseDocumentResponse) => void
  ): Promise<ParseDocumentResponse> {
    return this.request("ParseDocument", req, cb)
  }

  /**
     * 本服务支持一系列高性能的大语言模型，包括DeepSeek以及腾讯自主研发的混元大模型，结合混合搜索等先进搜索技术，快速高效实现RAG，有效解决幻觉和知识更新问题。
本接口有单账号调用上限控制，如您有提高并发限制的需求请[联系我们](https://cloud.tencent.com/act/event/Online_service)  。
     */
  async ChatCompletions(
    req: ChatCompletionsRequest,
    cb?: (error: string, rep: ChatCompletionsResponse) => void
  ): Promise<ChatCompletionsResponse> {
    return this.request("ChatCompletions", req, cb)
  }

  /**
     * 文本切片是将长文本分割为短片段的技术，用于适配模型输入、提升处理效率或信息检索，平衡片段长度与语义连贯性，适用于NLP、数据分析等场景。
本接口为分隔符规则切片接口，有单账号调用上限控制，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service)  。
     */
  async ChunkDocument(
    req: ChunkDocumentRequest,
    cb?: (error: string, rep: ChunkDocumentResponse) => void
  ): Promise<ChunkDocumentResponse> {
    return this.request("ChunkDocument", req, cb)
  }

  /**
   * Embedding是一种将高维数据映射到低维空间的技术，通常用于将非结构化数据，如文本、图像或音频转化为向量表示，使其更容易输入机器模型进行处理，并且向量之间的距离可以反映对象之间的相似性。 本接口有模型维度调用上限控制，单个模型qps限制10，如您有提高并发限制的需求请[联系我们](https://cloud.tencent.com/act/event/Online_service)  。
   */
  async GetMultiModalEmbedding(
    req: GetMultiModalEmbeddingRequest,
    cb?: (error: string, rep: GetMultiModalEmbeddingResponse) => void
  ): Promise<GetMultiModalEmbeddingResponse> {
    return this.request("GetMultiModalEmbedding", req, cb)
  }

  /**
     * 重排是指在 RAG 过程中，通过评估文档与查询之间的相关性，将最相关的文档放在前面，确保语言模型在生成回答时优先考虑排名靠前的上下文，提高生成结果的准确性和可信度，也可以通过这种方式进行过滤，减少大模型成本。
本接口有单账号调用上限控制，如您有提高并发限制的需求请[联系我们](https://cloud.tencent.com/act/event/Online_service)  。
     */
  async RunRerank(
    req: RunRerankRequest,
    cb?: (error: string, rep: RunRerankResponse) => void
  ): Promise<RunRerankResponse> {
    return this.request("RunRerank", req, cb)
  }
}

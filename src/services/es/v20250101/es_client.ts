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
  ChatCompletionsRequest,
  DocumentChunkUsage,
  ChunkDocumentAsyncRequest,
  ChunkDocumentRequest,
  WebContent,
  GetDocumentChunkResultRequest,
  RerankResult,
  GetDocumentParseResultRequest,
  Usage,
  ParseDocumentResponse,
  Document,
  GetTextEmbeddingRequest,
  ParseDocumentAsyncResponse,
  ChunkDocumentResponse,
  GetDocumentParseResultResponse,
  TokenUsage,
  Choice,
  RunRerankRequest,
  EmbeddingData,
  ChunkConfig,
  WebSearchRequest,
  WebPage,
  OutputMessage,
  ParseDocument,
  GetDocumentChunkResultResponse,
  ChunkDocumentAsyncResponse,
  WebSearchResponse,
  OnlineSearchOptions,
  ParseDocumentRequest,
  Chunk,
  ChunkConfigAsync,
  GetTextEmbeddingResponse,
  RunRerankResponse,
  ParseDocumentAsyncRequest,
  ChunkDocument,
  Message,
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
本接口有单账号调用上限控制，如您有提高并发限制的需求请[联系我们](https://cloud.tencent.com/act/event/Online_service)  。
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
   * 实时文档切片
   */
  async ChunkDocument(
    req: ChunkDocumentRequest,
    cb?: (error: string, rep: ChunkDocumentResponse) => void
  ): Promise<ChunkDocumentResponse> {
    return this.request("ChunkDocument", req, cb)
  }

  /**
   * WebSearch API 是一个网页搜索服务，支持多种搜索引擎，可以获取网页的标题、URL、摘要和正文内容。
   */
  async WebSearch(
    req: WebSearchRequest,
    cb?: (error: string, rep: WebSearchResponse) => void
  ): Promise<WebSearchResponse> {
    return this.request("WebSearch", req, cb)
  }

  /**
   * 重排序
   */
  async RunRerank(
    req: RunRerankRequest,
    cb?: (error: string, rep: RunRerankResponse) => void
  ): Promise<RunRerankResponse> {
    return this.request("RunRerank", req, cb)
  }
}

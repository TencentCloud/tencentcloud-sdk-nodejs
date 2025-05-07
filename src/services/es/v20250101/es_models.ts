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
 * ChatCompletions请求参数结构体
 */
export interface ChatCompletionsRequest {
  /**
   * 会话内容，按对话时间从旧到新在数组中排列，长度受模型窗口大小限制。
   */
  Messages: Array<Message>
  /**
   * 模型名称，可选模型列表：hunyuan-turbo，hunyuan-large，hunyuan-large-longcontext，hunyuan-standard，hunyuan-standard-256K，deepseek-r1，deepseek-v3，deepseek-r1-distill-qwen-32b。
   */
  ModelName: string
  /**
   * 是否以流式接口的形式返回数据，默认true。
   */
  Stream?: boolean
  /**
   * 取值区间为[0.0, 1.0], 非必要不建议使用, 不合理的取值会影响效果 。
   */
  TopP?: number
  /**
   * 取值区间为[0.0, 2.0], 非必要不建议使用, 不合理的取值会影响效果 。
   */
  Temperature?: number
  /**
   * 是否开启联网搜索。默认为 false。
   */
  OnlineSearch?: boolean
  /**
   * 当 OnlineSearch 为 true 时，指定的搜索引擎，默认为 bing。
   */
  OnlineSearchOptions?: OnlineSearchOptions
}

/**
 * 文档切片用量
 */
export interface DocumentChunkUsage {
  /**
   *  解析页面数量
   */
  PageNumber?: number
  /**
   * 消耗 token数量
   */
  TotalTokens?: number
}

/**
 * ChunkDocumentAsync请求参数结构体
 */
export interface ChunkDocumentAsyncRequest {
  /**
   * 文件信息。
   */
  Document: Document
  /**
   * 模型名称，可选模型列表：doc-tree-chunk。
   */
  ModelName: string
  /**
   * 文件切片配置。
   */
  Config?: ChunkConfigAsync
}

/**
 * ChunkDocument请求参数结构体
 */
export interface ChunkDocumentRequest {
  /**
   * 切片文件信息。
   */
  Document: ChunkDocument
  /**
   * 模型名称，可选模型列表：doc-chunk。
   */
  ModelName: string
  /**
   * 文件切片配置。
   */
  Config?: ChunkConfig
}

/**
 * 搜索结果网页信息。
 */
export interface WebContent {
  /**
   * 搜素问题
   */
  Query?: string
  /**
   * 标题
   */
  Title?: string
  /**
   * 链接
   */
  Url?: string
  /**
   * 时间
   */
  Time?: string
  /**
   * 网页内容
   */
  Content?: string
  /**
   * 切片索引
   */
  ChunkIndex?: string
  /**
   * 分数
   */
  Score?: string
}

/**
 * GetDocumentChunkResult请求参数结构体
 */
export interface GetDocumentChunkResultRequest {
  /**
   *  任务 ID
   */
  TaskId: string
}

/**
 * 输出结果
 */
export interface RerankResult {
  /**
   * 对应的doc在输入候选doc数组中的位置索引值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
  /**
   * 相似度分数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelevanceScore?: number
  /**
   * doc原文内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Document?: string
}

/**
 * GetDocumentParseResult请求参数结构体
 */
export interface GetDocumentParseResultRequest {
  /**
   * 任务 Id
   */
  TaskId: string
}

/**
 * token消耗总数
 */
export interface Usage {
  /**
   * tokens总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalTokens?: number
}

/**
 * ParseDocument返回参数结构体
 */
export interface ParseDocumentResponse {
  /**
   * 进度：0-100。
   */
  Progress?: string
  /**
   *  解析文件结果。
   */
  DocumentParseResultUrl?: string
  /**
   * 失败页码。
   */
  FailedPages?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 文档信息
 */
export interface Document {
  /**
   * 文件类型。
支持的文件类型：PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、IM、PCX、PPM、TIFF、XBM、HEIF、JP2
支持的文件大小：
- PDF、DOC、DOCX、PPT、PPTX 支持100M
- MD、TXT、XLS、XLSX、CSV 支持10M
- 其他支持20M
   */
  FileType: string
  /**
   * 文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，使用腾讯云COS 文件地址。
   */
  FileUrl?: string
  /**
   * 文件的 base64 值，携带 MineType前缀信息。编码后的后的文件不超过 10M。
支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过3秒。
支持的图片像素：单边介于20-10000px之间。
   */
  FileContent?: string
  /**
   * 文件名称，当使用 base64上传的时候使用。
   */
  FileName?: string
}

/**
 * GetTextEmbedding请求参数结构体
 */
export interface GetTextEmbeddingRequest {
  /**
   * 模型名称，可选模型列表：bge-base-zh-v1.5,conan-embedding-v1,bge-m3,KaLM-embedding-multilingual-mini-v1。
   */
  ModelName: string
  /**
   * 需进行向量化的文本集。
   */
  Texts: Array<string>
}

/**
 * ParseDocumentAsync返回参数结构体
 */
export interface ParseDocumentAsyncResponse {
  /**
   * 任务 id
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChunkDocument返回参数结构体
 */
export interface ChunkDocumentResponse {
  /**
   * 无
   */
  Chunks?: Array<Chunk>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDocumentParseResult返回参数结构体
 */
export interface GetDocumentParseResultResponse {
  /**
   * 任务状态，-1：失败，0：运行中，1：成功。
   */
  Status?: number
  /**
   * 结果文件。
   */
  DocumentParseResultUrl?: string
  /**
   * 失败的页码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedPages?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * token使用量
 */
export interface TokenUsage {
  /**
   * 表示prompt的tokens数，多次返回中保持不变
   */
  PromptTokens?: number
  /**
   * 回答的token总数，在流式返回中，表示到目前为止所有completion的tokens总数，多次返回中持续累加
   */
  CompletionTokens?: number
  /**
   * 表示prompt_tokens和completion_tokens之和
   */
  TotalTokens?: number
}

/**
 * 返回的回复, 支持多个。
 */
export interface Choice {
  /**
   * 返回的回复。
   */
  Message?: OutputMessage
}

/**
 * RunRerank请求参数结构体
 */
export interface RunRerankRequest {
  /**
   * 模型名称，可选模型列表：bge-reranker-large，bge-reranker-v2-m3。
   */
  ModelName: string
  /**
   * 查询文本。
   */
  Query: string
  /**
   * 待排序的候选doc列表。
   */
  Documents: Array<string>
  /**
   * 排序返回的top文档数量, 如果没有指定则返回全部候选doc，如果指定的top_n值大于输入的候选doc数量，返回全部doc。
   */
  TopN?: number
  /**
   * 返回的排序结果列表里面是否返回每一条document原文，默认值False。
   */
  ReturnDocuments?: boolean
}

/**
 * 向量内容
 */
export interface EmbeddingData {
  /**
   * embedding 内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Embedding?: Array<number>
  /**
   * 索引序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
}

/**
 * 文档分片配置
 */
export interface ChunkConfig {
  /**
   * 最大分片长度
   */
  MaxChunkSize?: number
  /**
   * 分隔符列表
   */
  Delimiters?: Array<string>
}

/**
 * WebSearch请求参数结构体
 */
export interface WebSearchRequest {
  /**
   * 查询
   */
  Query: string
  /**
   * 搜索的网页数量，默认20
   */
  Count?: number
  /**
   * 指定域名，gov.cn 可匹配 *.gov.cn的域名。
   */
  Site?: string
  /**
   * 是否获取返回网页全文，默认 false。
   */
  FetchContent?: boolean
  /**
   * 域名白名单，在不指定 Site 时，只保存匹配白名单域名的网页。
   */
  WhiteSites?: Array<string>
  /**
   * 域名黑名单，在不指定 Site 和白名单时，过滤黑名单中的域名。
   */
  BlackSites?: Array<string>
  /**
   * 秒级时间戳，搜索网页的开始时间，默认不限制开始时间。
   */
  StartTime?: number
  /**
   * 秒级时间戳，搜索网页的结束时间，默认为现在。
   */
  EndTime?: number
  /**
   * 指定搜索引擎，可选混合搜索 mixed，或 bing, baidu, sogou, 默认为 sogou
   */
  SearchEngine?: string
}

/**
 * 网页搜索结果
 */
export interface WebPage {
  /**
   * 标题
   */
  Title?: string
  /**
   * url
   */
  Url?: string
  /**
   * 网页摘要
注意：此字段可能返回 null，表示取不到有效值。
   */
  Summary?: string
  /**
   * 网页收录时间。可能为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: string
  /**
   * Markdown 格式的网页正文
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
}

/**
 * 会话内容，按对话时间从旧到新在数组中排列，长度受模型窗口大小限制。
 */
export interface OutputMessage {
  /**
   * 角色
   */
  Role?: string
  /**
   * 文本内容
   */
  Content?: string
  /**
   * 推理内容
   */
  ReasoningContent?: string
}

/**
 * 文档信息
 */
export interface ParseDocument {
  /**
   * 文件类型。
支持的文件类型：PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、IM、PCX、PPM、TIFF、XBM、HEIF、JP2
支持的文件大小：
- PDF、DOC、DOCX、PPT、PPTX 支持100M
- MD、TXT、XLS、XLSX、CSV 支持10M
- 其他支持20M
   */
  FileType: string
  /**
   * 文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，使用腾讯云COS 文件地址。
   */
  FileUrl?: string
  /**
   * 文件的 base64 值，携带 MineType前缀信息。编码后的后的文件不超过 10M。
支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过3秒。
支持的图片像素：单边介于20-10000px之间。
   */
  FileContent?: string
}

/**
 * GetDocumentChunkResult返回参数结构体
 */
export interface GetDocumentChunkResultResponse {
  /**
   * 任务状态，-1：失败，0：运行中，1：成功。
   */
  Status?: number
  /**
   * 切片结果文件。
   */
  DocumentChunkResultUrl?: string
  /**
   * Token用量。
   */
  Usage?: DocumentChunkUsage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChunkDocumentAsync返回参数结构体
 */
export interface ChunkDocumentAsyncResponse {
  /**
   * 任务 ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WebSearch返回参数结构体
 */
export interface WebSearchResponse {
  /**
   * 查询
   */
  Query?: string
  /**
   * 响应状态
   */
  Status?: string
  /**
   * 执行搜索的引擎
   */
  SearchEngine?: string
  /**
   * 搜索结果
   */
  Results?: Array<WebPage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 联网搜索选项。
 */
export interface OnlineSearchOptions {
  /**
   * 搜索引擎。支持 bing 和 sogou。
   */
  Engine?: string
}

/**
 * ParseDocument请求参数结构体
 */
export interface ParseDocumentRequest {
  /**
   * 文件信息
   */
  Document: ParseDocument
  /**
   * 模型名称，doc-llm。
   */
  ModelName: string
}

/**
 * 切片对象信息
 */
export interface Chunk {
  /**
   * chunk索引。切片顺序 id。
   */
  Index?: number
  /**
   * chunk内容。
   */
  Content?: string
}

/**
 * 文档切片异步任务
 */
export interface ChunkConfigAsync {
  /**
   * 最大分片长度
   */
  MaxChunkSize?: number
}

/**
 * GetTextEmbedding返回参数结构体
 */
export interface GetTextEmbeddingResponse {
  /**
   * 结果集
   */
  Data?: Array<EmbeddingData>
  /**
   * 向量化消耗的token数量。
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunRerank返回参数结构体
 */
export interface RunRerankResponse {
  /**
   * 输出结果集。
   */
  Data?: Array<RerankResult>
  /**
   * 消耗token数量。
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ParseDocumentAsync请求参数结构体
 */
export interface ParseDocumentAsyncRequest {
  /**
   * 文件信息。
   */
  Document: Document
  /**
   * 模型名称，可选模型列表：doc-llm。
   */
  ModelName: string
}

/**
 * 切片文档信息
 */
export interface ChunkDocument {
  /**
   * 文件类型，支持 MD，TXT 格式。
   */
  FileType?: string
  /**
   * 文本原文，使用字符串格式输入。
   */
  FileContent?: string
}

/**
 * 会话内容，按对话时间从旧到新在数组中排列，长度受模型窗口大小限制。
 */
export interface Message {
  /**
   * 角色, ‘system', ‘user'，'assistant'或者'tool', 在message中, 除了system，其他必须是user与assistant交替(一问一答)
   */
  Role?: string
  /**
   * 具体文本内容
   */
  Content?: string
}

/**
 * ChatCompletions返回参数结构体
 */
export interface ChatCompletionsResponse {
  /**
   * 此次请求的id
   */
  Id?: string
  /**
   * 回复内容
   */
  Choices?: Array<Choice>
  /**
   * token使用量
   */
  Usage?: TokenUsage
  /**
   * 联网搜索结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OnlineSearchContent?: Array<WebContent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

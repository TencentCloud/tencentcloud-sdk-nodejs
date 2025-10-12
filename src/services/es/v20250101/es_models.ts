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
  /**
   * 可调用的工具列表，当前支持模型：hunyuan-turbo, deepseek-v3。
   */
  Tools?: Array<Tool>
  /**
   * 工具使用选项，可选值包括 none、auto、custom。说明：1. 仅对 hunyuan-turbo、deepseek-v3 模型生效。2. none：不调用工具；auto：模型自行选择生成回复或调用工具；custom：强制模型调用指定的工具。3. 未设置时，默认值为auto
   */
  ToolChoice?: string
  /**
   * 强制模型调用指定的工具，当参数ToolChoice为custom时，此参数为必填
   */
  CustomTool?: Tool
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
 * 消耗页数
 */
export interface PageUsage {
  /**
   * 消耗总页数
   */
  TotalPages?: number
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
 * 文档解析配置
 */
export interface DocumentParseConfig {
  /**
   * 0:图片以链接形式返回
1:返回图片中提取的文本内容
   */
  ImageResponseType?: number
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
   * 消耗页数
   */
  Usage?: PageUsage
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
   * 支持的文件类型：PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、
XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、
IM、PCX、PPM、TIFF、XBM、HEIF、JP2

文档解析支持的文件大小：
-PDF、DOC、DOCX、PPT、PPTX支持100M
-MD、TXT、XLS、XLSX、CSV支特10M
-其他支持20M

文本切片支持的文件大小：
-PDF最大300M
-D0CX、D0C、PPT、PPTX最大200M
-TXT、MD最大10M
-其他最大20M
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
  /**
   * 文档的起始页码
   */
  FileStartPageNumber?: number
  /**
   * 文档的结束页码
   */
  FileEndPageNumber?: number
}

/**
 * GetTextEmbedding请求参数结构体
 */
export interface GetTextEmbeddingRequest {
  /**
   * 模型名称，可选模型列表：bge-base-zh-v1.5,Conan-embedding-v1,bge-m3,KaLM-embedding-multilingual-mini-v1,Qwen3-Embedding-0.6B。
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
   * token消耗量
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户指定模型使用的工具
 */
export interface Tool {
  /**
   * 工具类型，当前只支持function
   */
  Type: string
  /**
   * 具体要调用的function
   */
  Function: ToolFunction
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
   * 消耗页数
   */
  Usage?: PageUsage
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
  /**
   * 相邻切片重合字符数，需要小于分片长度
   */
  ChunkOverlap?: number
}

/**
 * function定义
 */
export interface ToolFunction {
  /**
   * function名称，只能包含a-z，A-Z，0-9，_或-
   */
  Name: string
  /**
   * function参数，一般为json字符串
   */
  Parameters: string
  /**
   * function的简单描述
   */
  Description?: string
}

/**
 * 具体的function调用
 */
export interface ToolCallFunction {
  /**
   * function名称
   */
  Name?: string
  /**
   * function参数，一般为json字符串
   */
  Arguments?: string
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
  /**
   * 模型生成的工具调用
   */
  ToolCalls?: Array<ToolCall>
}

/**
 * 文档信息
 */
export interface ParseDocument {
  /**
   * 支持的文件类型：PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、
XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、
IM、PCX、PPM、TIFF、XBM、HEIF、JP2

文档解析支持的文件大小：
-PDF、DOC、DOCX、PPT、PPTX支持100M
-MD、TXT、XLS、XLSX、CSV支特10M
-其他支持20M

文本切片支持的文件大小：
-PDF最大300M
-D0CX、D0C、PPT、PPTX最大200M
-TXT、MD最大10M
-其他最大20M
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
文件的 FileUrl、FileContent必须提供一个，如果都提供只使用 FileUrl。
   */
  FileContent?: string
  /**
   * 文档解析配置
   */
  DocumentParseConfig?: DocumentParseConfig
  /**
   * 文档的起始页码
   */
  FileStartPageNumber?: number
  /**
   * 文档的结束页码
   */
  FileEndPageNumber?: number
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
 * 模型生成的工具调用
 */
export interface ToolCall {
  /**
   * 工具调用id
   */
  Id?: string
  /**
   * 工具调用类型，当前只支持function
   */
  Type?: string
  /**
   * 具体的function调用
   */
  Function?: ToolCallFunction
  /**
   * 索引值
   */
  Index?: number
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
   * 角色，可选值包括 system、user、assistant、 tool。
   */
  Role?: string
  /**
   * 具体文本内容
   */
  Content?: string
  /**
   * 当role为tool时传入，标识具体的函数调用
   */
  ToolCallId?: string
  /**
   * 模型生成的工具调用
   */
  ToolCalls?: Array<ToolCall>
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

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
   * 模型名称
   */
  Model: string
  /**
   * 聊天上下文信息。
说明：
1. 长度最多为 40，按对话时间从旧到新在数组中排列。
2. Message.Role 可选值：system、user、assistant。
其中，system 角色可选，如存在则必须位于列表的最开始。user 和 assistant 需交替出现，以 user 提问开始，user 提问结束，Content 不能为空。Role 的顺序示例：[system（可选） user assistant user assistant user ...]。

   */
  Messages: Array<Message>
  /**
   * 是否流式输出
   */
  Stream?: boolean
  /**
   * 控制生成的随机性，较高的值会产生更多样化的输出。
   */
  Temperature?: number
  /**
   * 模型最大输出长度（单位 token），不包含思维链内容。
默认为4096，取值范围：各个模型不同，参考各个模型最大输出长度（示例：4k，即4096）。
输出 token 的总长度受模型的上下文长度限制。
   */
  MaxTokens?: number
  /**
   * 是否启用联网搜索
   */
  EnableSearch?: boolean
  /**
   * 思维链开关，本参数仅在deepseek v3.1时生效
   */
  Thinking?: Thinking
}

/**
 * CreateSplitDocumentFlow请求参数结构体
 */
export interface CreateSplitDocumentFlowRequest {
  /**
   * 文件类型。**支持的文件类型：**- `WPS`、`PDF`、`DOC`、`DOCX`、`XLS`、`XLSX`、`PPT`、`PPTX`、`MD`、`TXT`、`PNG`、`JPG`、`JPEG`、`CSV`、`HTML`、`EPUB`**支持的文件大小：** - `PDF` 最大300M - `WPS`、`DOCX`、`DOC`、`PPT`、`PPTX` 最大 200M - `TXT`、`MD` 最大10M - 其他 最大20M
   */
  FileType: string
  /**
   * 文件的 URL 地址。
文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。
参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749)
   */
  FileUrl: string
  /**
   * 文件名，可选。
   **需带文件类型后缀**，当文件名无法从传入的`FileUrl`获取时需要通过该字段来明确。
   */
  FileName?: string
  /**
   * 文件的 Base64 值。
支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。
支持的图片像素：单边介于20-10000px之间。
文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。
   * @deprecated
   */
  FileBase64?: string
  /**
   * 文档的起始页码。
当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的起始页码，识别的页码包含当前值。
   */
  FileStartPageNumber?: number
  /**
   * 文档的结束页码。
当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的结束页码，识别的页码包含当前值。
   */
  FileEndPageNumber?: number
  /**
   * 文档拆分任务的配置信息。

   */
  Config?: CreateSplitDocumentFlowConfig
}

/**
 * ReconstructDocumentSSE返回参数结构体
 */
export interface ReconstructDocumentSSEResponse {
  /**
   * 任务ID。本次请求的唯一标识
   */
  TaskId?: string
  /**
   * 响应类型。1：返回进度信息， 2：返回解析结果
   */
  ResponseType?: string
  /**
   * 进度。0~100
   */
  Progress?: string
  /**
   * 进度信息。
   */
  ProgressMessage?: string
  /**
   * 文档解析结果的临时下载地址。文件类型为zip压缩包，下载链接有效期30分钟。压缩包内包含*.md、*.json以及images文件夹。

   */
  DocumentRecognizeResultUrl?: string
  /**
   * 文档解析失败的页码。
   */
  FailedPages?: Array<ReconstructDocumentFailedPage>
  /**
   * 文档解析失败页数
   */
  FailPageNum?: number
  /**
   * 文档解析成功页数
   */
  SuccessPageNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 思维链开关类型
 */
export interface Thinking {
  /**
   * 控制开启思维链，默认disabled

enabled：开启思维链
disabled：关闭思维链
   */
  Type?: string
}

/**
 * GetEmbedding请求参数结构体
 */
export interface GetEmbeddingRequest {
  /**
   * <p>说明：选择生成向量的模型</p><p>枚举值：</p><ul><li>lke-text-embedding-v1： 文本embedding v1</li><li>lke-text-embedding-v2： 文本embedding v2</li></ul>
   */
  Model: string
  /**
   * <p>说明：需要 embedding 的文本<br>备注：单条query最多2000个字符，总条数最多7条</p>
   */
  Inputs: Array<string>
  /**
   * <p>说明：文本向量化的类型，为使得检索任务有更好的检索效果，建议区分查询文本（query）和文档文本（document）类型, 聚类、分类等对称任务可以不用特殊指定，采用系统默认值document即可。</p>
   */
  TextType?: string
  /**
   * <p>说明：自定义任务指令词，当且仅当TextType=query且Model为lke-text-embedding-v1时，生效</p>
   */
  Instruction?: string
}

/**
 * GetReconstructDocumentResult请求参数结构体
 */
export interface GetReconstructDocumentResultRequest {
  /**
   * 说明：解析任务ID
备注：仅支持单个任务ID
   */
  TaskId: string
}

/**
 * 消耗量
 */
export interface Usage {
  /**
   * 文档页数
   */
  TotalPages?: number
  /**
   * 输入token数
   */
  InputTokens?: number
  /**
   * 输出token数
   */
  OutputTokens?: number
  /**
   * 总token数
   */
  TotalTokens?: number
}

/**
 * CancelTask请求参数结构体
 */
export interface CancelTaskRequest {
  /**
   * 取消任务的任务ID
   */
  TaskId: string
}

/**
 * 返回的回复, 支持多个
 */
export interface Choice {
  /**
   * 结束标志位，可能为 stop、 content_filter。
stop 表示输出正常结束。
content_filter 只在开启流式输出审核时会出现，表示安全审核未通过。
   */
  FinishReason?: string
  /**
   * 增量返回值，流式调用时使用该字段。
   */
  Delta?: Delta
  /**
   * 返回值，非流式调用时使用该字段。
   */
  Message?: Message
  /**
   * 索引值，流式调用时使用该字段。
   */
  Index?: number
}

/**
 * GetCharacterUsage请求参数结构体
 */
export type GetCharacterUsageRequest = null

/**
 * ReconstructDocumentSSE 功能配置参数
 */
export interface ReconstructDocumentSSEConfig {
  /**
   * Markdown文件中表格返回的形式
0，表格以MD形式返回
1，表格以HTML形式返回
默认为0
   */
  TableResultType?: string
  /**
   * Markdown文件中图片返回的形式
0:markdown中图片以链接形式返回
1:markdown中图片只返回图片中提取的文本内容
默认是0
   */
  MarkdownImageResponseType?: string
  /**
   * Markdown文件中是否包含页码信息
   */
  ReturnPageFormat?: boolean
  /**
   * 自定义输出页码样式,{{p}}为页码占位符，开启ReturnPageFormat生效。未填默认样式:<page_num>page {{p}}</page_num>
   */
  PageFormat?: string
  /**
   * 是否忽略失败页，返回已成功的页数据
   */
  IgnoreFailedPage?: boolean
}

/**
 * 文档拆分任务的用量
 */
export interface DocumentUsage {
  /**
   * 文档拆分任务的页数
   */
  PageNumber?: number
  /**
   * 文档拆分任务消耗的总token数
   * @deprecated
   */
  TotalToken?: number
  /**
   * 文档拆分任务消耗的总token数
   */
  TotalTokens?: number
  /**
   * 拆分消耗的token数
   */
  SplitTokens?: number
  /**
   * mllm消耗的token数
   */
  MllmTokens?: number
  /**
   * 解析成功页数
   */
  SuccessPageNum?: number
  /**
   * 解析失败页数
   */
  FailPageNum?: number
  /**
   * 文件大小，单位：字节
   */
  FileSize?: number
}

/**
 * 搜索结果
 */
export interface SearchResult {
  /**
   * 索引
   */
  Index?: number
  /**
   * 链接地址
   */
  Url?: string
  /**
   * 标题
   */
  Name?: string
  /**
   * 摘要
   */
  Snippet?: string
  /**
   * 图标
   */
  Icon?: string
  /**
   * 站点
   */
  Site?: string
  /**
   * 1740412800
   */
  PublishedTime?: number
}

/**
 * GetReconstructDocumentResult返回参数结构体
 */
export interface GetReconstructDocumentResultResponse {
  /**
   * 任务状态。
- `Success`：执行完成
- `Processing`：执行中
-  `Pause`: 暂停
-  `Failed`：执行失败
-  `WaitExecute`：等待执行
   */
  Status?: string
  /**
   * 解析结果的临时下载地址。文件类型为zip压缩包，下载链接有效期30分钟
   */
  DocumentRecognizeResultUrl?: string
  /**
   * 文档解析失败的页码
   */
  FailedPages?: Array<ReconstructDocumentFailedPage>
  /**
   * 文档拆分任务的用量
   */
  Usage?: DocumentUsage
  /**
   * 文档解析任务失败错误信息，当文档解析任务失败会返回具体的错误信息
   */
  Error?: ErrorInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建智能文档解析任务的配置信息
 */
export interface CreateReconstructDocumentFlowConfig {
  /**
   * <p>Markdown文件中表格返回的形式<br>0，表格以MD形式返回<br>1，表格以HTML形式返回<br>默认为0</p>
   */
  TableResultType?: string
  /**
   * <p>智能文档解析返回结果的格式<br>0：只返回全文MD；<br>1：只返回每一页的OCR原始Json；<br>2：只返回每一页的MD，<br>3：返回全文MD + 每一页的OCR原始Json；<br>4：返回全文MD + 每一页的MD<br>5: 返回全文md，每一页ocr原始json，每一页md<br>默认值为0</p>
   */
  ResultType?: string
  /**
   * <p>是否忽略失败页，返回已成功的页数据。默认为true。</p>
   */
  IgnoreFailedPage?: boolean
  /**
   * <p>Markdown文件中是否包含页码信息</p>
   */
  ReturnPageFormat?: boolean
  /**
   * <p>自定义输出页码样式,{{p}}为页码占位符，开启ReturnPageFormat生效。未填默认样式:<page_num>page {{p}}</page_num></p>
   */
  PageFormat?: string
}

/**
 * RunRerank请求参数结构体
 */
export interface RunRerankRequest {
  /**
   * 说明：查询内容
备注：用于匹配的query
   */
  Query: string
  /**
   * 说明：文档列表
备注：最多60个，Query字段和Docs字段的总长度上限为2000字符
   */
  Docs: Array<string>
  /**
   * 说明：模型名称
备注：仅一个模型可选
默认值：lke-reranker-base
   */
  Model?: string
}

/**
 * 消耗量
 */
export interface ChatUsage {
  /**
   * 输入token数
   */
  PromptTokens?: number
  /**
   * 输出token数
   */
  CompletionTokens?: number
  /**
   * 总token数
   */
  TotalTokens?: number
}

/**
 * CreateSplitDocumentFlow返回参数结构体
 */
export interface CreateSplitDocumentFlowResponse {
  /**
   * 拆分任务唯一ID。
30天内可以通过`GetSplitDocumentResult`接口查询TaskId对应的拆分结果。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回的内容
 */
export interface Delta {
  /**
   * 角色名称。
   */
  Role?: string
  /**
   * 内容详情。
   */
  Content?: string
  /**
   * 思维链内容。 ReasoningConent参数仅支持出参，且只有deepseek-r1模型会返回。
   */
  ReasoningContent?: string
}

/**
 * ReconstructDocumentSSE请求参数结构体
 */
export interface ReconstructDocumentSSERequest {
  /**
   * 支持解析的文件类型。**支持的文件类型**：WPS、PDF、DOC、DOCX、PPT、PPTX、MD、TXT、XLS、XLSX、CSV、PNG、JPG、JPEG、BMP、GIF、WEBP、HEIC、EPS、ICNS、IM、PCX、PPM、TIFF、XBM、HEIF、JP2**支持的文件大小**：- WPS、PDF、DOC、DOCX、PPT、PPTX 支持100M- MD、TXT、XLS、XLSX、CSV 支持10M- 其他支持20M
   */
  FileType: string
  /**
   * 文件的 URL 地址。文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。
参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749)

默认值：无
   */
  FileUrl?: string
  /**
   * 说明：文件的 Base64 值。
备注：支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。
支持的图片像素：单边介于20-10000px之间。文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。

默认值：无
   */
  FileBase64?: string
  /**
   * 说明：文档的起始页码。
备注：当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的起始页码，识别的页码包含当前值。
默认值：无
   */
  FileStartPageNumber?: number
  /**
   * 说明：文档的结束页码。备注：当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的结束页码，识别的页码包含当前值，文档页码大于100页建议使用异步解析接入。默认值：无
   */
  FileEndPageNumber?: number
  /**
   * 说明：文档解析配置信息	
备注：可设置返回markdown结果的格式
默认值：无

   */
  Config?: ReconstructDocumentSSEConfig
}

/**
 * CreateReconstructDocumentFlow请求参数结构体
 */
export interface CreateReconstructDocumentFlowRequest {
  /**
   * 文件类型。**支持的文件类型：**- `WPS、PDF`、`DOC`、`DOCX`、`XLS`、`XLSX`、`PPT`、`PPTX`、`MD`、`TXT`、`PNG`、`JPG`、`JPEG`、`CSV`、`HTML`、`EPUB`、`BMP`、`GIF`、`WEBP`、`HEIC`、`EPS`、`ICNS`、`IM`、`PCX`、`PPM`、`TIFF`、`XBM`、`HEIF`、`JP2`**支持的文件大小：** - `PDF` 最大300M - `WPS`、`DOCX`、`DOC`、`PPT`、`PPTX` 最大 200M - `TXT`、`MD` 最大10M - 其他 最大20M
   */
  FileType: string
  /**
   * 说明：文件的 URL 地址。
备注：文件存储于腾讯云的 URL 可保障更高的下载速度和稳定性，建议文件存储于腾讯云。 非腾讯云存储的 URL 速度和稳定性可能受一定影响。
参考：[腾讯云COS文档](https://cloud.tencent.com/document/product/436/7749)
   */
  FileUrl?: string
  /**
   * 文件的 Base64 值。
支持的文件类型： PNG、JPG、JPEG、PDF、GIF、BMP、TIFF
支持的文件大小：所下载文件经Base64编码后不超过 8M。文件下载时间不超过 3 秒。
支持的图片像素：单边介于20-10000px之间。
文件的 FileUrl、FileBase64 必须提供一个，如果都提供，只使用 FileUrl。
   */
  FileBase64?: string
  /**
   * 说明：文档的起始页码。
备注：当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的起始页码，识别的页码包含当前值。
默认值：无
   */
  FileStartPageNumber?: number
  /**
   * 说明：文档的结束页码。
备注：当传入文件是PDF、PDF、PPT、PPTX、DOC类型时，用来指定识别的结束页码，识别的页码包含当前值。
默认值：无
   */
  FileEndPageNumber?: number
  /**
   * 说明：创建文档解析任务配置信息。
备注：可设置结果的返回格式
默认值：无
   */
  Config?: CreateReconstructDocumentFlowConfig
}

/**
 * GetSplitDocumentResult返回参数结构体
 */
export interface GetSplitDocumentResultResponse {
  /**
   * 任务状态。

- `Success`：执行完成
- `Processing`：执行中
- `Pause`: 暂停
- `Failed`：执行失败
- `WaitExecute`：等待执行
   */
  Status?: string
  /**
   * 拆分结果的临时下载地址。
文件类型为zip压缩包，下载链接有效期30分钟。
压缩包内包含\*.md、\*.jsonl、\*mllm.json以及images文件夹。

> **jsonl** 结构说明：
- `page_content`:
 用于生成嵌入（embedding）库，以便于检索使用。该字段中的图片将使用占位符替换。
- `org_data`:
 表示与 page_content 对应的最小语义完整性块，用于问答模型的处理。
- `big_data`:
 表示与 page_content 对应的最大语义完整性块，也用于问答模型的处理。
   */
  DocumentRecognizeResultUrl?: string
  /**
   * 文档拆分失败的页码
   * @deprecated
   */
  FailedPages?: Array<SplitDocumentFailedPage>
  /**
   * 文档拆分任务的用量
   */
  Usage?: DocumentUsage
  /**
   * 文档拆分失败的错误信息，当拆分任务失败时返回该错误信息
   */
  Error?: ErrorInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文档解析失败记录
 */
export interface ReconstructDocumentFailedPage {
  /**
   * 失败页码	
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
}

/**
 * 文档解析失败记录
 */
export interface SplitDocumentFailedPage {
  /**
   * 失败页码	
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
}

/**
 * CancelTask返回参数结构体
 */
export interface CancelTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetEmbedding返回参数结构体
 */
export interface GetEmbeddingResponse {
  /**
   * <p>特征</p>
   */
  Data?: Array<EmbeddingObject>
  /**
   * <p>消耗量，返回TotalToken</p>
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryRewrite请求参数结构体
 */
export interface QueryRewriteRequest {
  /**
   * 说明：需要改写的多轮历史会话，每轮历史对话需要包含user（问）和assistant（答）成对输入
备注：由于模型字符限制，最多提供4轮对话。针对最后一轮对话进行改写。四轮对话最多包含3600个字符。
   */
  Messages: Array<Message>
  /**
   * 说明：模型名称
备注：仅一个模型可选
默认值：lke-query-rewrite-base
   */
  Model?: string
}

/**
 * 创建智能文档拆分任务的配置信息
 */
export interface CreateSplitDocumentFlowConfig {
  /**
   * <p>Markdown文件中表格返回的形式<br>0，表格以MD形式返回<br>1，表格以HTML形式返回<br>默认为</p>
   * @deprecated
   */
  TableResultType?: string
  /**
   * <p>智能文档解析返回结果的格式<br>0：只返回全文MD；<br>1：只返回每一页的OCR原始Json；<br>2：只返回每一页的MD；<br>3：返回全文MD + 每一页的OCR原始Json；<br>4：返回全文MD + 每一页的MD；<br>5：返回全文md，每一页ocr原始json，每一页md。</p>
   * @deprecated
   */
  ResultType?: string
  /**
   * <p>是否开启mllm</p>
   */
  EnableMllm?: boolean
  /**
   * <p>最大分片长度</p>
   */
  MaxChunkSize?: number
  /**
   * <p>是否忽略返回失败页码</p>
   */
  IgnoreFailedPage?: boolean
  /**
   * <p>智能文档解析返回结果的格式<br>0：只返回全文MD；<br>1：只返回每一页的OCR原始Json；<br>2：只返回每一页的MD；<br>3：返回全文MD + 每一页的OCR原始Json；<br>4：返回全文MD + 每一页的MD；<br>5：返回全文md，每一页ocr原始json，每一页md。</p>
   */
  SplitResultType?: string
  /**
   * <p>Markdown文件中表格返回的形式<br>0，表格以MD形式返回<br>1，表格以HTML形式返回<br>默认为</p>
   */
  SplitTableResultType?: string
  /**
   * <p>Markdown文件中是否包含页码信息</p>
   */
  ReturnPageFormat?: boolean
  /**
   * <p>自定义输出页码样式,{{p}}为页码占位符，开启ReturnPageFormat生效。未填默认样式:<page_num>page {{p}}</page_num></p>
   */
  PageFormat?: string
}

/**
 * RunRerank返回参数结构体
 */
export interface RunRerankResponse {
  /**
   * 相关性, 数值越大越相关
   */
  ScoreList?: Array<number>
  /**
   * 消耗量，仅返回TotalToken
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateReconstructDocumentFlow返回参数结构体
 */
export interface CreateReconstructDocumentFlowResponse {
  /**
   * 任务唯一id。30天内可以通过GetReconstructDocumentResult接口查询TaskId对应的处理结果。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryRewrite返回参数结构体
 */
export interface QueryRewriteResponse {
  /**
   * 改写结果
   */
  Content?: string
  /**
   * 消耗量，返回输入token数，输出token数以及总token数
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetSplitDocumentResult请求参数结构体
 */
export interface GetSplitDocumentResultRequest {
  /**
   * 拆分任务ID
   */
  TaskId: string
}

/**
 * 向量
 */
export interface EmbeddingObject {
  /**
   * 向量
   */
  Embedding?: Array<number>
}

/**
 * 会话内容
 */
export interface Message {
  /**
   * 角色
   */
  Role?: string
  /**
   * 内容
   */
  Content?: string
  /**
   * 思维链内容。
ReasoningConent参数仅支持出参，且只有deepseek-r1模型会返回。
   */
  ReasoningContent?: string
  /**
   * 搜索结果
   */
  SearchResults?: Array<SearchResult>
}

/**
 * 错误信息
 */
export interface ErrorInfo {
  /**
   * 错误码
   */
  Code?: string
  /**
   * 错误信息
   */
  Message?: string
}

/**
 * ChatCompletions返回参数结构体
 */
export interface ChatCompletionsResponse {
  /**
   * Unix 时间戳，单位为秒。
   */
  Created?: number
  /**
   * Token 统计信息。
按照总 Token 数量计费。
   */
  Usage?: ChatUsage
  /**
   * 本次请求的 RequestId。
   */
  Id?: string
  /**
   * 回复内容。
   */
  Choices?: Array<Choice>
  /**
   * 模型名称。
   */
  Model?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * GetCharacterUsage返回参数结构体
 */
export interface GetCharacterUsageResponse {
  /**
   * 已用字符数
   */
  Used?: number
  /**
   * 可用字符数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

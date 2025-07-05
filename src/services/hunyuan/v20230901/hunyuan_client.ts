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
  Character,
  Approximate,
  TranslationChoice,
  Usage,
  LogoParam,
  RunThreadRequest,
  SubmitHunyuanImageChatJobRequest,
  QueryHunyuanImageJobRequest,
  File3D,
  QueryHunyuanImageChatJobRequest,
  EmbeddingData,
  SetPayModeResponse,
  TranslationDelta,
  SongExt,
  LogoRect,
  SubmitHunyuanImageJobResponse,
  GetThreadResponse,
  Reference,
  SearchInfo,
  FilesDeletionsRequest,
  Mindmap,
  RunThreadResponse,
  ChatCompletionsResponse,
  GetThreadMessageListRequest,
  QueryHunyuanTo3DJobRequest,
  GetThreadMessageRequest,
  SubmitHunyuanImageChatJobResponse,
  ChatTranslationsRequest,
  GetThreadMessageResponse,
  Tool,
  SearchResult,
  Choice,
  ThreadMessage,
  GroupChatCompletionsRequest,
  ToolFunction,
  ImageQuestionResponse,
  ImageMessage,
  SetPayModeRequest,
  GroupMessage,
  RelevantEvent,
  FilesDeletionsResponse,
  FileObject,
  ToolCall,
  GetThreadMessageListResponse,
  Image,
  ThreadToolResources,
  Replace,
  CreateThreadRequest,
  Message,
  TranslationMessage,
  ChatCompletionsRequest,
  Knowledge,
  FilesUploadsRequest,
  GetEmbeddingRequest,
  ImageUrl,
  Multimedia,
  GroupChatCompletionsResponse,
  SubmitHunyuanImageJobRequest,
  GetTokenCountResponse,
  Timeline,
  File3Ds,
  Delta,
  Processes,
  TextToImageLiteResponse,
  TextToImageLiteRequest,
  QueryHunyuanImageJobResponse,
  History,
  UserLocation,
  FilesListRequest,
  GetTokenCountRequest,
  GroupChatConfig,
  QueryHunyuanTo3DJobResponse,
  WebSearchOptions,
  ActivateServiceRequest,
  GetThreadRequest,
  Content,
  ChatTranslationsResponse,
  ThreadMessageInCompleteDetailsObject,
  SubmitHunyuanTo3DJobRequest,
  ImageQuestionRequest,
  SubmitHunyuanTo3DJobResponse,
  QueryHunyuanImageChatJobResponse,
  GetEmbeddingResponse,
  ThreadAdditionalMessage,
  ToolCallFunction,
  RelevantEntity,
  CreateThreadResponse,
  ActivateServiceResponse,
  FilesUploadsResponse,
  ErrorMsg,
  FilesListResponse,
  EmbeddingUsage,
  ThreadMessageAttachmentObject,
} from "./hunyuan_models"

/**
 * hunyuan client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("hunyuan.tencentcloudapi.com", "2023-09-01", clientConfig)
  }

  /**
     * 腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
  async GetThread(
    req: GetThreadRequest,
    cb?: (error: string, rep: GetThreadResponse) => void
  ): Promise<GetThreadResponse> {
    return this.request("GetThread", req, cb)
  }

  /**
     * 混元生图接口基于混元大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个混元生图异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。混元生图默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
  async SubmitHunyuanImageJob(
    req: SubmitHunyuanImageJobRequest,
    cb?: (error: string, rep: SubmitHunyuanImageJobResponse) => void
  ): Promise<SubmitHunyuanImageJobResponse> {
    return this.request("SubmitHunyuanImageJob", req, cb)
  }

  /**
     * 混元生图接口基于混元大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个混元生图异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。混元生图默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
  async QueryHunyuanImageJob(
    req: QueryHunyuanImageJobRequest,
    cb?: (error: string, rep: QueryHunyuanImageJobResponse) => void
  ): Promise<QueryHunyuanImageJobResponse> {
    return this.request("QueryHunyuanImageJob", req, cb)
  }

  /**
     * 腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
  async ChatTranslations(
    req: ChatTranslationsRequest,
    cb?: (error: string, rep: ChatTranslationsResponse) => void
  ): Promise<ChatTranslationsResponse> {
    return this.request("ChatTranslations", req, cb)
  }

  /**
     * 腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
  async GetThreadMessageList(
    req: GetThreadMessageListRequest,
    cb?: (error: string, rep: GetThreadMessageListResponse) => void
  ): Promise<GetThreadMessageListResponse> {
    return this.request("GetThreadMessageList", req, cb)
  }

  /**
   * 腾讯混元 Embedding 接口，可以将文本转化为高质量的向量数据。向量维度为1024维。
   */
  async GetEmbedding(
    req: GetEmbeddingRequest,
    cb?: (error: string, rep: GetEmbeddingResponse) => void
  ): Promise<GetEmbeddingResponse> {
    return this.request("GetEmbedding", req, cb)
  }

  /**
     * 如需使用OpenAI兼容接口， 请参考文档：[OpenAI 兼容接口](https://cloud.tencent.com/document/product/1729/111007)

腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
  async ImageQuestion(
    req: ImageQuestionRequest,
    cb?: (error: string, rep: ImageQuestionResponse) => void
  ): Promise<ImageQuestionResponse> {
    return this.request("ImageQuestion", req, cb)
  }

  /**
     * 如需使用OpenAI兼容接口， 请参考文档：[OpenAI 兼容接口](https://cloud.tencent.com/document/product/1729/111007)

腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
  async GroupChatCompletions(
    req: GroupChatCompletionsRequest,
    cb?: (error: string, rep: GroupChatCompletionsResponse) => void
  ): Promise<GroupChatCompletionsResponse> {
    return this.request("GroupChatCompletions", req, cb)
  }

  /**
     * 腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
  async RunThread(
    req: RunThreadRequest,
    cb?: (error: string, rep: RunThreadResponse) => void
  ): Promise<RunThreadResponse> {
    return this.request("RunThread", req, cb)
  }

  /**
   * 设置付费模式
   */
  async SetPayMode(
    req: SetPayModeRequest,
    cb?: (error: string, rep: SetPayModeResponse) => void
  ): Promise<SetPayModeResponse> {
    return this.request("SetPayMode", req, cb)
  }

  /**
     * 混元生图（多轮对话）接口基于混元大模型，将根据输入的文本描述生成图像，支持通过多轮对话的方式不断调整图像内容。分为提交任务和查询任务2个接口。
提交任务：输入文本和前置对话 ID 等，提交一个混元生图多轮对话异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得在上一轮对话基础上继续生成的图像结果。
混元生图（多轮对话）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
  async QueryHunyuanImageChatJob(
    req: QueryHunyuanImageChatJobRequest,
    cb?: (error: string, rep: QueryHunyuanImageChatJobResponse) => void
  ): Promise<QueryHunyuanImageChatJobResponse> {
    return this.request("QueryHunyuanImageChatJob", req, cb)
  }

  /**
     * 腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
  async CreateThread(
    req?: CreateThreadRequest,
    cb?: (error: string, rep: CreateThreadResponse) => void
  ): Promise<CreateThreadResponse> {
    return this.request("CreateThread", req, cb)
  }

  /**
   * 删除文件。
   */
  async FilesDeletions(
    req: FilesDeletionsRequest,
    cb?: (error: string, rep: FilesDeletionsResponse) => void
  ): Promise<FilesDeletionsResponse> {
    return this.request("FilesDeletions", req, cb)
  }

  /**
     * 腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
  async GetThreadMessage(
    req: GetThreadMessageRequest,
    cb?: (error: string, rep: GetThreadMessageResponse) => void
  ): Promise<GetThreadMessageResponse> {
    return this.request("GetThreadMessage", req, cb)
  }

  /**
   * 提交混元生3D任务
   */
  async SubmitHunyuanTo3DJob(
    req: SubmitHunyuanTo3DJobRequest,
    cb?: (error: string, rep: SubmitHunyuanTo3DJobResponse) => void
  ): Promise<SubmitHunyuanTo3DJobResponse> {
    return this.request("SubmitHunyuanTo3DJob", req, cb)
  }

  /**
     * 上传用于不同用途的文件。
当前用途仅支持 hunyuan 等模型的文档理解。
     */
  async FilesUploads(
    req: FilesUploadsRequest,
    cb?: (error: string, rep: FilesUploadsResponse) => void
  ): Promise<FilesUploadsResponse> {
    return this.request("FilesUploads", req, cb)
  }

  /**
   * 开通服务
   */
  async ActivateService(
    req: ActivateServiceRequest,
    cb?: (error: string, rep: ActivateServiceResponse) => void
  ): Promise<ActivateServiceResponse> {
    return this.request("ActivateService", req, cb)
  }

  /**
   * 文件列表。
   */
  async FilesList(
    req: FilesListRequest,
    cb?: (error: string, rep: FilesListResponse) => void
  ): Promise<FilesListResponse> {
    return this.request("FilesList", req, cb)
  }

  /**
   * 查询混元生3D任务
   */
  async QueryHunyuanTo3DJob(
    req: QueryHunyuanTo3DJobRequest,
    cb?: (error: string, rep: QueryHunyuanTo3DJobResponse) => void
  ): Promise<QueryHunyuanTo3DJobResponse> {
    return this.request("QueryHunyuanTo3DJob", req, cb)
  }

  /**
     * 混元生图（多轮对话）接口基于混元大模型，将根据输入的文本描述生成图像，支持通过多轮对话的方式不断调整图像内容。分为提交任务和查询任务2个接口。
提交任务：输入文本和前置对话 ID 等，提交一个混元生图多轮对话异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得在上一轮对话基础上继续生成的图像结果。
混元生图（多轮对话）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
  async SubmitHunyuanImageChatJob(
    req: SubmitHunyuanImageChatJobRequest,
    cb?: (error: string, rep: SubmitHunyuanImageChatJobResponse) => void
  ): Promise<SubmitHunyuanImageChatJobResponse> {
    return this.request("SubmitHunyuanImageChatJob", req, cb)
  }

  /**
     * 如需使用OpenAI兼容接口， 请参考文档：[OpenAI 兼容接口](https://cloud.tencent.com/document/product/1729/111007)

腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
  async ChatCompletions(
    req: ChatCompletionsRequest,
    cb?: (error: string, rep: ChatCompletionsResponse) => void
  ): Promise<ChatCompletionsResponse> {
    return this.request("ChatCompletions", req, cb)
  }

  /**
   * 该接口用于计算文本对应Token数、字符数。
   */
  async GetTokenCount(
    req: GetTokenCountRequest,
    cb?: (error: string, rep: GetTokenCountResponse) => void
  ): Promise<GetTokenCountResponse> {
    return this.request("GetTokenCount", req, cb)
  }

  /**
     * 文生图轻量版接口根据输入的文本描述，智能生成与之相关的结果图。
文生图轻量版默认提供3个并发任务数，代表最多能同时处理3个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
  async TextToImageLite(
    req: TextToImageLiteRequest,
    cb?: (error: string, rep: TextToImageLiteResponse) => void
  ): Promise<TextToImageLiteResponse> {
    return this.request("TextToImageLite", req, cb)
  }
}

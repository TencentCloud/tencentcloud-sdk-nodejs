import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ChatCompletionsRequest, GetTokenCountResponse, GetEmbeddingResponse, ChatStdResponse, GetEmbeddingRequest, ChatProResponse, ChatProRequest, GetTokenCountRequest, ChatCompletionsResponse, ChatStdRequest } from "./hunyuan_models";
/**
 * hunyuan client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认每种模型单账号限制并发数为 5 路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
     */
    ChatCompletions(req: ChatCompletionsRequest, cb?: (error: string, rep: ChatCompletionsResponse) => void): Promise<ChatCompletionsResponse>;
    /**
     * 腾讯混元大模型（hunyuan-pro）是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认单账号限制并发数为 5 路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
     */
    ChatPro(req: ChatProRequest, cb?: (error: string, rep: ChatProResponse) => void): Promise<ChatProResponse>;
    /**
     * 腾讯混元大模型标准版是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认单账号限制并发数为 5 路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
     */
    ChatStd(req: ChatStdRequest, cb?: (error: string, rep: ChatStdResponse) => void): Promise<ChatStdResponse>;
    /**
     * 该接口用于计算文本对应Token数、字符数。
     */
    GetTokenCount(req: GetTokenCountRequest, cb?: (error: string, rep: GetTokenCountResponse) => void): Promise<GetTokenCountResponse>;
    /**
     * 腾讯混元 Embedding 接口，可以将文本转化为高质量的向量数据。
     */
    GetEmbedding(req: GetEmbeddingRequest, cb?: (error: string, rep: GetEmbeddingResponse) => void): Promise<GetEmbeddingResponse>;
}

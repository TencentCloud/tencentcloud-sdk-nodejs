import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ChatCompletionsRequest, GetEmbeddingRequest, ActivateServiceRequest, SubmitHunyuanImageJobRequest, SubmitHunyuanImageChatJobResponse, QueryHunyuanImageChatJobRequest, SubmitHunyuanImageChatJobRequest, QueryHunyuanImageJobRequest, GetTokenCountResponse, QueryHunyuanImageChatJobResponse, SetPayModeResponse, SetPayModeRequest, TextToImageLiteRequest, SubmitHunyuanImageJobResponse, ActivateServiceResponse, QueryHunyuanImageJobResponse, GetEmbeddingResponse, GetTokenCountRequest, TextToImageLiteResponse, ChatCompletionsResponse } from "./hunyuan_models";
/**
 * hunyuan client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 混元生图（多轮对话）接口基于混元大模型，将根据输入的文本描述生成图像，支持通过多轮对话的方式不断调整图像内容。分为提交任务和查询任务2个接口。
提交任务：输入文本和前置对话 ID 等，提交一个混元生图多轮对话异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得在上一轮对话基础上继续生成的图像结果。
混元生图（多轮对话）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    QueryHunyuanImageChatJob(req: QueryHunyuanImageChatJobRequest, cb?: (error: string, rep: QueryHunyuanImageChatJobResponse) => void): Promise<QueryHunyuanImageChatJobResponse>;
    /**
     * 混元生图接口基于混元大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个混元生图异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。混元生图默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    SubmitHunyuanImageJob(req: SubmitHunyuanImageJobRequest, cb?: (error: string, rep: SubmitHunyuanImageJobResponse) => void): Promise<SubmitHunyuanImageJobResponse>;
    /**
     * 混元生图接口基于混元大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个混元生图异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。混元生图默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    QueryHunyuanImageJob(req: QueryHunyuanImageJobRequest, cb?: (error: string, rep: QueryHunyuanImageJobResponse) => void): Promise<QueryHunyuanImageJobResponse>;
    /**
     * 设置付费模式
     */
    SetPayMode(req: SetPayModeRequest, cb?: (error: string, rep: SetPayModeResponse) => void): Promise<SetPayModeResponse>;
    /**
     * 混元生图（多轮对话）接口基于混元大模型，将根据输入的文本描述生成图像，支持通过多轮对话的方式不断调整图像内容。分为提交任务和查询任务2个接口。
提交任务：输入文本和前置对话 ID 等，提交一个混元生图多轮对话异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得在上一轮对话基础上继续生成的图像结果。
混元生图（多轮对话）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    SubmitHunyuanImageChatJob(req: SubmitHunyuanImageChatJobRequest, cb?: (error: string, rep: SubmitHunyuanImageChatJobResponse) => void): Promise<SubmitHunyuanImageChatJobResponse>;
    /**
     * 腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认该接口下单账号限制并发数为  5 路，如您有提高并发限制的需求请 [购买](https://buy.cloud.tencent.com/hunyuan) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
 4. 我们推荐您使用 API Explorer，方便快速地在线调试接口和下载各语言的示例代码，[点击打开](https://console.cloud.tencent.com/api/explorer?Product=hunyuan&Version=2023-09-01&Action=ChatCompletions)。
     */
    ChatCompletions(req: ChatCompletionsRequest, cb?: (error: string, rep: ChatCompletionsResponse) => void): Promise<ChatCompletionsResponse>;
    /**
     * 开通服务
     */
    ActivateService(req: ActivateServiceRequest, cb?: (error: string, rep: ActivateServiceResponse) => void): Promise<ActivateServiceResponse>;
    /**
     * 该接口用于计算文本对应Token数、字符数。
     */
    GetTokenCount(req: GetTokenCountRequest, cb?: (error: string, rep: GetTokenCountResponse) => void): Promise<GetTokenCountResponse>;
    /**
     * 文生图轻量版接口根据输入的文本描述，智能生成与之相关的结果图。
文生图轻量版默认提供3个并发任务数，代表最多能同时处理3个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    TextToImageLite(req: TextToImageLiteRequest, cb?: (error: string, rep: TextToImageLiteResponse) => void): Promise<TextToImageLiteResponse>;
    /**
     * 腾讯混元 Embedding 接口，可以将文本转化为高质量的向量数据。向量维度为1024维。
     */
    GetEmbedding(req: GetEmbeddingRequest, cb?: (error: string, rep: GetEmbeddingResponse) => void): Promise<GetEmbeddingResponse>;
}

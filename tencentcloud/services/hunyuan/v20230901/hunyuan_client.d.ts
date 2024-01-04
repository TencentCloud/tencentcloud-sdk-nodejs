import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetTokenCountResponse, GetEmbeddingResponse, ChatStdResponse, GetEmbeddingRequest, ChatProResponse, ChatProRequest, GetTokenCountRequest, ChatStdRequest } from "./hunyuan_models";
/**
 * hunyuan client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 腾讯混元大模型高级版是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口为SSE协议。

 1.本接口暂不支持返回图片内容。
 2.默认单账号限制并发数为5路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3.请使用SDK调用本接口 ，SDK GitHub仓库examples/hunyuan/v20230901/目录有提供[参考示例](https://github.com/TencentCloud/tencentcloud-sdk-python/blob/master/examples/hunyuan/v20230901/chat_std.py)。
     */
    ChatPro(req: ChatProRequest, cb?: (error: string, rep: ChatProResponse) => void): Promise<ChatProResponse>;
    /**
     * 腾讯混元大模型标准版是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口为SSE协议。

 1.本接口暂不支持返回图片内容。
 2.默认单账号限制并发数为5路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3.请使用SDK调用本接口 ，SDK GitHub仓库examples/hunyuan/v20230901/目录有提供[参考示例](https://github.com/TencentCloud/tencentcloud-sdk-python/blob/master/examples/hunyuan/v20230901/chat_std.py)。
     */
    ChatStd(req: ChatStdRequest, cb?: (error: string, rep: ChatStdResponse) => void): Promise<ChatStdResponse>;
    /**
     * 该接口用于计算文本对应Token数、字符数。
     */
    GetTokenCount(req: GetTokenCountRequest, cb?: (error: string, rep: GetTokenCountResponse) => void): Promise<GetTokenCountResponse>;
    /**
     * 腾讯混元-Embedding接口，可以将文本转化为高质量的向量数据。
     */
    GetEmbedding(req: GetEmbeddingRequest, cb?: (error: string, rep: GetEmbeddingResponse) => void): Promise<GetEmbeddingResponse>;
}

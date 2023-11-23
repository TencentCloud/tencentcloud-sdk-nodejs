import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetTokenCountResponse, ChatStdResponse, ChatProResponse, ChatProRequest, GetTokenCountRequest, ChatStdRequest } from "./hunyuan_models";
/**
 * hunyuan client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 腾讯混元大模型高级版是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口为SSE协议。
     */
    ChatPro(req: ChatProRequest, cb?: (error: string, rep: ChatProResponse) => void): Promise<ChatProResponse>;
    /**
     * 腾讯混元大模型标准版是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口为SSE协议。
     */
    ChatStd(req: ChatStdRequest, cb?: (error: string, rep: ChatStdResponse) => void): Promise<ChatStdResponse>;
    /**
     * 该接口用于计算文本对应Token数、字符数。
     */
    GetTokenCount(req: GetTokenCountRequest, cb?: (error: string, rep: GetTokenCountResponse) => void): Promise<GetTokenCountResponse>;
}

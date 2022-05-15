import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateEmbedTokenResponse, ApplyEmbedIntervalRequest, ApplyEmbedIntervalResponse, CreateEmbedTokenRequest } from "./bi_models";
/**
 * bi client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建嵌出报表-强鉴权
     */
    CreateEmbedToken(req: CreateEmbedTokenRequest, cb?: (error: string, rep: CreateEmbedTokenResponse) => void): Promise<CreateEmbedTokenResponse>;
    /**
     * 申请延长Token可用时间接口-强鉴权
     */
    ApplyEmbedInterval(req: ApplyEmbedIntervalRequest, cb?: (error: string, rep: ApplyEmbedIntervalResponse) => void): Promise<ApplyEmbedIntervalResponse>;
}

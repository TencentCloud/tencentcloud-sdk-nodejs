import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryActivityAntiRushResponse, QueryActivityAntiRushRequest } from "./aa_models";
/**
 * aa client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 腾讯云活动防刷（ActivityAntiRush，AA）是针对电商、O2O、P2P、游戏、支付等行业在促销活动中遇到“羊毛党”恶意刷取优惠福利的行为时，通过防刷引擎，精准识别出“薅羊毛”恶意行为的活动防刷服务，避免了企业被刷带来的巨大经济损失。
     */
    QueryActivityAntiRush(req: QueryActivityAntiRushRequest, cb?: (error: string, rep: QueryActivityAntiRushResponse) => void): Promise<QueryActivityAntiRushResponse>;
}

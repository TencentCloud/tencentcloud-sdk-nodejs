import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryLoginProtectionRequest, QueryLoginProtectionResponse } from "./lp_models";
/**
 * lp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 登录保护服务（LoginProtection，LP）针对网站和 APP 的用户登录场景，实时检测是否存在盗号、撞库等恶意登录行为，帮助开发者发现异常登录，降低恶意用户登录给业务带来的风险。
     */
    QueryLoginProtection(req: QueryLoginProtectionRequest, cb?: (error: string, rep: QueryLoginProtectionResponse) => void): Promise<QueryLoginProtectionResponse>;
}

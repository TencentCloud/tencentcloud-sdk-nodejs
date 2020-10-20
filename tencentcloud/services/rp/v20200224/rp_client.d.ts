import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryRegisterProtectionResponse, QueryRegisterProtectionRequest } from "./rp_models";
/**
 * rp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 注册保护服务（RegisterProtection，RP）针对网站、APP 的线上注册场景，遇到 “恶意注册” 、“小号注册” 、“注册器注册” 等恶意行为，提供基于天御 DNA 算法的恶意防护引擎，从账号、设备、行为三个维度有效识别 “恶意注册”，从“源头”上防范业务风险。
     */
    QueryRegisterProtection(req: QueryRegisterProtectionRequest, cb?: (error: string, rep: QueryRegisterProtectionResponse) => void): Promise<QueryRegisterProtectionResponse>;
}

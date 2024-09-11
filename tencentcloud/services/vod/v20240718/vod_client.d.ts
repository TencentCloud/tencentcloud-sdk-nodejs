import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateStorageCredentialsRequest, CreateStorageCredentialsResponse } from "./vod_models";
/**
 * vod client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用于按指定策略，生成专业版应用的临时访问凭证，比如生成用于客户端上传的临时凭证。
     */
    CreateStorageCredentials(req: CreateStorageCredentialsRequest, cb?: (error: string, rep: CreateStorageCredentialsResponse) => void): Promise<CreateStorageCredentialsResponse>;
}

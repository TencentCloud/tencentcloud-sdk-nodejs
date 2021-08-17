import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateCredentialRequest, CreateTDidRequest, CreateSelectiveCredentialRequest, CreateTDidResponse, CreateSelectiveCredentialResponse, VerifyCredentialResponse, CreateCredentialResponse, VerifyCredentialRequest } from "./tdid_models";
/**
 * tdid client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 验证凭证
     */
    VerifyCredential(req: VerifyCredentialRequest, cb?: (error: string, rep: VerifyCredentialResponse) => void): Promise<VerifyCredentialResponse>;
    /**
     * 创建机构DID
     */
    CreateTDid(req: CreateTDidRequest, cb?: (error: string, rep: CreateTDidResponse) => void): Promise<CreateTDidResponse>;
    /**
     * 创建选择性批露凭证
     */
    CreateSelectiveCredential(req: CreateSelectiveCredentialRequest, cb?: (error: string, rep: CreateSelectiveCredentialResponse) => void): Promise<CreateSelectiveCredentialResponse>;
    /**
     * 创建凭证
     */
    CreateCredential(req: CreateCredentialRequest, cb?: (error: string, rep: CreateCredentialResponse) => void): Promise<CreateCredentialResponse>;
}

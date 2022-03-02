import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateCredentialRequest, CreateTDidRequest, GetAuthorityIssuerResponse, CreateSelectiveCredentialRequest, GetDidDocumentRequest, CreateTDidResponse, CreateSelectiveCredentialResponse, SetCredentialStatusRequest, CreateTDidByPublicKeyRequest, CreateTDidByPublicKeyResponse, CreateCredentialResponse, GetAuthorityIssuerRequest, GetDidDocumentResponse, VerifyCredentialResponse, SetCredentialStatusResponse, VerifyCredentialRequest } from "./tdid_models";
/**
 * tdid client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查看DID文档

     */
    GetDidDocument(req: GetDidDocumentRequest, cb?: (error: string, rep: GetDidDocumentResponse) => void): Promise<GetDidDocumentResponse>;
    /**
     * 创建选择性批露凭证
     */
    CreateSelectiveCredential(req: CreateSelectiveCredentialRequest, cb?: (error: string, rep: CreateSelectiveCredentialResponse) => void): Promise<CreateSelectiveCredentialResponse>;
    /**
     * 创建凭证
     */
    CreateCredential(req: CreateCredentialRequest, cb?: (error: string, rep: CreateCredentialResponse) => void): Promise<CreateCredentialResponse>;
    /**
     *  新建DID根据公钥生成Tdid
     */
    CreateTDidByPublicKey(req: CreateTDidByPublicKeyRequest, cb?: (error: string, rep: CreateTDidByPublicKeyResponse) => void): Promise<CreateTDidByPublicKeyResponse>;
    /**
     * 验证凭证
     */
    VerifyCredential(req: VerifyCredentialRequest, cb?: (error: string, rep: VerifyCredentialResponse) => void): Promise<VerifyCredentialResponse>;
    /**
     * 创建机构DID
     */
    CreateTDid(req: CreateTDidRequest, cb?: (error: string, rep: CreateTDidResponse) => void): Promise<CreateTDidResponse>;
    /**
     * 获取权威机构信息
     */
    GetAuthorityIssuer(req: GetAuthorityIssuerRequest, cb?: (error: string, rep: GetAuthorityIssuerResponse) => void): Promise<GetAuthorityIssuerResponse>;
    /**
     * 设置凭证链上状态
     */
    SetCredentialStatus(req: SetCredentialStatusRequest, cb?: (error: string, rep: SetCredentialStatusResponse) => void): Promise<SetCredentialStatusResponse>;
}

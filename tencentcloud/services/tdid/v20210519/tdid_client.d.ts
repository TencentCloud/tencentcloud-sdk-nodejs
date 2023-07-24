import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateTDidRequest, CreateSelectiveCredentialRequest, CreateTDidByPrivateKeyResponse, CheckChainResponse, CreateTDidByPublicKeyRequest, CreateCredentialResponse, GetAuthorityIssuerRequest, CreateCredentialRequest, GetDidDocumentRequest, GetCredentialStatusRequest, VerifyCredentialResponse, SetCredentialStatusResponse, GetCptInfoResponse, CheckChainRequest, GetAuthorityIssuerResponse, GetDidDocumentResponse, CreateTDidResponse, CreateSelectiveCredentialResponse, RegisterCptRequest, CreateTDidByPublicKeyResponse, CreateTDidByPrivateKeyRequest, VerifyCredentialRequest, SetCredentialStatusRequest, GetCptInfoRequest, GetCredentialStatusResponse, RegisterCptResponse } from "./tdid_models";
/**
 * tdid client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 该接口不再使用

凭证模版详情
     */
    GetCptInfo(req: GetCptInfoRequest, cb?: (error: string, rep: GetCptInfoResponse) => void): Promise<GetCptInfoResponse>;
    /**
     * 该接口不再使用

查看DID文档

     */
    GetDidDocument(req: GetDidDocumentRequest, cb?: (error: string, rep: GetDidDocumentResponse) => void): Promise<GetDidDocumentResponse>;
    /**
     * 该接口不再使用

创建选择性批露凭证
     */
    CreateSelectiveCredential(req: CreateSelectiveCredentialRequest, cb?: (error: string, rep: CreateSelectiveCredentialResponse) => void): Promise<CreateSelectiveCredentialResponse>;
    /**
     * 该接口不再使用

创建机构DID
     */
    CreateTDid(req: CreateTDidRequest, cb?: (error: string, rep: CreateTDidResponse) => void): Promise<CreateTDidResponse>;
    /**
     * 该接口不再使用

创建凭证
     */
    CreateCredential(req: CreateCredentialRequest, cb?: (error: string, rep: CreateCredentialResponse) => void): Promise<CreateCredentialResponse>;
    /**
     * 该接口不再使用

 新建DID根据公钥生成Tdid
     */
    CreateTDidByPublicKey(req: CreateTDidByPublicKeyRequest, cb?: (error: string, rep: CreateTDidByPublicKeyResponse) => void): Promise<CreateTDidByPublicKeyResponse>;
    /**
     * 该接口不再使用

获取凭证链上状态信息
     */
    GetCredentialStatus(req: GetCredentialStatusRequest, cb?: (error: string, rep: GetCredentialStatusResponse) => void): Promise<GetCredentialStatusResponse>;
    /**
     * 该接口不再使用

新建DID根据私钥生成Tdid
     */
    CreateTDidByPrivateKey(req: CreateTDidByPrivateKeyRequest, cb?: (error: string, rep: CreateTDidByPrivateKeyResponse) => void): Promise<CreateTDidByPrivateKeyResponse>;
    /**
     * 该接口不再使用

检查区块链信息
     */
    CheckChain(req: CheckChainRequest, cb?: (error: string, rep: CheckChainResponse) => void): Promise<CheckChainResponse>;
    /**
     * 该接口不再使用

凭证模版新建
     */
    RegisterCpt(req: RegisterCptRequest, cb?: (error: string, rep: RegisterCptResponse) => void): Promise<RegisterCptResponse>;
    /**
     * 该接口不再使用

验证凭证
     */
    VerifyCredential(req: VerifyCredentialRequest, cb?: (error: string, rep: VerifyCredentialResponse) => void): Promise<VerifyCredentialResponse>;
    /**
     * 该接口不再使用

获取权威机构信息
     */
    GetAuthorityIssuer(req: GetAuthorityIssuerRequest, cb?: (error: string, rep: GetAuthorityIssuerResponse) => void): Promise<GetAuthorityIssuerResponse>;
    /**
     * 该接口不再使用

设置凭证链上状态
     */
    SetCredentialStatus(req: SetCredentialStatusRequest, cb?: (error: string, rep: SetCredentialStatusResponse) => void): Promise<SetCredentialStatusResponse>;
}

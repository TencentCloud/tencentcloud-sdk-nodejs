import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateTDidByPubKeyResponse, GetTDidDocumentResponse, GetCredentialStateRequest, CheckNewPurchaseRequest, VerifyCredentialsRequest, GetTDidDocumentRequest, IssueCredentialResponse, GetCredentialStateResponse, CreateTDidByHostRequest, IssueCredentialRequest, VerifyCredentialsResponse, UpdateCredentialStateRequest, CreateTDidByPubKeyRequest, DeactivateTDidRequest, CheckNewPurchaseResponse, UpdateCredentialStateResponse, DeactivateTDidResponse, CreateTDidByHostResponse } from "./tdid_models";
/**
 * tdid client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 验证已签名的可验证凭证
     */
    VerifyCredentials(req: VerifyCredentialsRequest, cb?: (error: string, rep: VerifyCredentialsResponse) => void): Promise<VerifyCredentialsResponse>;
    /**
     * 自动生成公私钥对托管在DID平台，并注册DID标识
     */
    CreateTDidByHost(req: CreateTDidByHostRequest, cb?: (error: string, rep: CreateTDidByHostResponse) => void): Promise<CreateTDidByHostResponse>;
    /**
     * 使用导入的公钥文件注册DID标识
     */
    CreateTDidByPubKey(req: CreateTDidByPubKeyRequest, cb?: (error: string, rep: CreateTDidByPubKeyResponse) => void): Promise<CreateTDidByPubKeyResponse>;
    /**
     * 获取DID标识的文档
     */
    GetTDidDocument(req: GetTDidDocumentRequest, cb?: (error: string, rep: GetTDidDocumentResponse) => void): Promise<GetTDidDocumentResponse>;
    /**
     * 更新凭证的链上状态
     */
    UpdateCredentialState(req: UpdateCredentialStateRequest, cb?: (error: string, rep: UpdateCredentialStateResponse) => void): Promise<UpdateCredentialStateResponse>;
    /**
     * 更新DID标识的禁用状态
     */
    DeactivateTDid(req: DeactivateTDidRequest, cb?: (error: string, rep: DeactivateTDidResponse) => void): Promise<DeactivateTDidResponse>;
    /**
     * 获取凭证链上状态信息
     */
    GetCredentialState(req: GetCredentialStateRequest, cb?: (error: string, rep: GetCredentialStateResponse) => void): Promise<GetCredentialStateResponse>;
    /**
     * 颁发可验证凭证
     */
    IssueCredential(req: IssueCredentialRequest, cb?: (error: string, rep: IssueCredentialResponse) => void): Promise<IssueCredentialResponse>;
    /**
     * 检查用户套餐购买状态
     */
    CheckNewPurchase(req?: CheckNewPurchaseRequest, cb?: (error: string, rep: CheckNewPurchaseResponse) => void): Promise<CheckNewPurchaseResponse>;
}

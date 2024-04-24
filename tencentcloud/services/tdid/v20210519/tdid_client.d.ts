import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetTDidDocumentResponse, VerifyPresentationRequest, SetTDidAttributeResponse, IssueCredentialResponse, SetTDidAttributeRequest, CreateDisclosedCredentialRequest, QueryCPTResponse, CreateTDidByPubKeyResponse, QueryAuthorityInfoResponse, VerifyCredentialsResponse, GetCredentialStateResponse, IssueCredentialRequest, GetTDidByObjectIdResponse, CreateDisclosedCredentialResponse, GetOverSummaryRequest, GetTDidPubKeyRequest, GetTDidDocumentRequest, CreateTDidByHostResponse, VerifyCredentialsRequest, QueryAuthorityInfoRequest, VerifyPresentationResponse, GetCredentialStateRequest, QueryCPTRequest, CreatePresentationRequest, CreateTDidByHostRequest, GetAppSummaryResponse, GetTDidPubKeyResponse, UpdateCredentialStateResponse, DeactivateTDidResponse, CreatePresentationResponse, UpdateCredentialStateRequest, GetOverSummaryResponse, CreateTDidByPubKeyRequest, DeactivateTDidRequest, GetTDidByObjectIdRequest, GetAppSummaryRequest } from "./tdid_models";
/**
 * tdid client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取某个应用关键指标统计数据
     */
    GetOverSummary(req?: GetOverSummaryRequest, cb?: (error: string, rep: GetOverSummaryResponse) => void): Promise<GetOverSummaryResponse>;
    /**
     * 查询权威机构信息
     */
    QueryAuthorityInfo(req: QueryAuthorityInfoRequest, cb?: (error: string, rep: QueryAuthorityInfoResponse) => void): Promise<QueryAuthorityInfoResponse>;
    /**
     * 验证已签名的可验证凭证
     */
    VerifyCredentials(req: VerifyCredentialsRequest, cb?: (error: string, rep: VerifyCredentialsResponse) => void): Promise<VerifyCredentialsResponse>;
    /**
     * 查询凭证模板内容
     */
    QueryCPT(req: QueryCPTRequest, cb?: (error: string, rep: QueryCPTResponse) => void): Promise<QueryCPTResponse>;
    /**
     * 创建凭证持有人的可验证表达
     */
    CreatePresentation(req: CreatePresentationRequest, cb?: (error: string, rep: CreatePresentationResponse) => void): Promise<CreatePresentationResponse>;
    /**
     * 自动生成公私钥对托管在DID平台，并注册DID标识
     */
    CreateTDidByHost(req: CreateTDidByHostRequest, cb?: (error: string, rep: CreateTDidByHostResponse) => void): Promise<CreateTDidByHostResponse>;
    /**
     * 通过业务层绑定的对象ID获取DID标识
     */
    GetTDidByObjectId(req: GetTDidByObjectIdRequest, cb?: (error: string, rep: GetTDidByObjectIdResponse) => void): Promise<GetTDidByObjectIdResponse>;
    /**
     * 使用导入的公钥文件注册DID标识
     */
    CreateTDidByPubKey(req: CreateTDidByPubKeyRequest, cb?: (error: string, rep: CreateTDidByPubKeyResponse) => void): Promise<CreateTDidByPubKeyResponse>;
    /**
     * 验证可验证表达的内容
     */
    VerifyPresentation(req: VerifyPresentationRequest, cb?: (error: string, rep: VerifyPresentationResponse) => void): Promise<VerifyPresentationResponse>;
    /**
     * 根据披露策略创建选择性披露凭证
     */
    CreateDisclosedCredential(req: CreateDisclosedCredentialRequest, cb?: (error: string, rep: CreateDisclosedCredentialResponse) => void): Promise<CreateDisclosedCredentialResponse>;
    /**
     * 获取某个应用关键指标统计数据
     */
    GetAppSummary(req: GetAppSummaryRequest, cb?: (error: string, rep: GetAppSummaryResponse) => void): Promise<GetAppSummaryResponse>;
    /**
     * 获取DID标识的文档
     */
    GetTDidDocument(req: GetTDidDocumentRequest, cb?: (error: string, rep: GetTDidDocumentResponse) => void): Promise<GetTDidDocumentResponse>;
    /**
     * 查询DID标识的认证公钥
     */
    GetTDidPubKey(req: GetTDidPubKeyRequest, cb?: (error: string, rep: GetTDidPubKeyResponse) => void): Promise<GetTDidPubKeyResponse>;
    /**
     * 设置DID文档的自定义属性
     */
    SetTDidAttribute(req: SetTDidAttributeRequest, cb?: (error: string, rep: SetTDidAttributeResponse) => void): Promise<SetTDidAttributeResponse>;
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
}

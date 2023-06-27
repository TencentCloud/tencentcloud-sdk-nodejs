import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateTDidRequest, CreateSelectiveCredentialRequest, CreateTDidByPrivateKeyResponse, CheckChainResponse, CreateTDidByPublicKeyRequest, CreateCredentialResponse, CheckChainRequest, GetAuthorityIssuerRequest, GetConsortiumListRequest, CreateCredentialRequest, GetDidDocumentRequest, GetConsortiumListResponse, GetCredentialStatusRequest, GetAgencyTDidResponse, AddLabelResponse, VerifyCredentialResponse, SetCredentialStatusResponse, GetCptInfoResponse, GetCredentialCptRankResponse, GetConsortiumClusterListResponse, AddLabelRequest, GetAuthorityIssuerResponse, GetDidDocumentResponse, CreateTDidResponse, CreateSelectiveCredentialResponse, GetAgencyTDidRequest, CreateTDidByPublicKeyResponse, GetCredentialCptRankRequest, RegisterCptRequest, VerifyCredentialRequest, GetConsortiumClusterListRequest, CreateTDidByPrivateKeyRequest, SetCredentialStatusRequest, GetCptInfoRequest, GetCredentialStatusResponse, RegisterCptResponse } from "./tdid_models";
/**
 * tdid client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 该接口不再使用

检查区块链信息
     */
    CheckChain(req: CheckChainRequest, cb?: (error: string, rep: CheckChainResponse) => void): Promise<CheckChainResponse>;
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
     * 下线已有内测接口，待上线正式版本的接口

凭证颁发按机构排行
     */
    GetCredentialCptRank(req: GetCredentialCptRankRequest, cb?: (error: string, rep: GetCredentialCptRankResponse) => void): Promise<GetCredentialCptRankResponse>;
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
     * 下线已有内测接口，待上线正式版本的接口

获取联盟列表
     */
    GetConsortiumList(req?: GetConsortiumListRequest, cb?: (error: string, rep: GetConsortiumListResponse) => void): Promise<GetConsortiumListResponse>;
    /**
     * 该接口已废弃

本机构DID详情
     */
    GetAgencyTDid(req: GetAgencyTDidRequest, cb?: (error: string, rep: GetAgencyTDidResponse) => void): Promise<GetAgencyTDidResponse>;
    /**
     * 该接口不再使用

新建DID根据私钥生成Tdid
     */
    CreateTDidByPrivateKey(req: CreateTDidByPrivateKeyRequest, cb?: (error: string, rep: CreateTDidByPrivateKeyResponse) => void): Promise<CreateTDidByPrivateKeyResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

DID添加标签

     */
    AddLabel(req: AddLabelRequest, cb?: (error: string, rep: AddLabelResponse) => void): Promise<AddLabelResponse>;
    /**
     * 该接口不再使用

获取凭证链上状态信息
     */
    GetCredentialStatus(req: GetCredentialStatusRequest, cb?: (error: string, rep: GetCredentialStatusResponse) => void): Promise<GetCredentialStatusResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

获取联盟bcos网络列表
     */
    GetConsortiumClusterList(req: GetConsortiumClusterListRequest, cb?: (error: string, rep: GetConsortiumClusterListResponse) => void): Promise<GetConsortiumClusterListResponse>;
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
    /**
     * 该接口不再使用

凭证模版新建
     */
    RegisterCpt(req: RegisterCptRequest, cb?: (error: string, rep: RegisterCptResponse) => void): Promise<RegisterCptResponse>;
}

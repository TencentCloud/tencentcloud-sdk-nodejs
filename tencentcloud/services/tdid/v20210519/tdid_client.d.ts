import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryPolicyRequest, RegisterClaimPolicyRequest, GetDidServiceDetailResponse, CreateCredentialResponse, GetConsortiumListRequest, DownCptResponse, GetCredentialIssueTrendResponse, CreateCredentialRequest, CreateDidServiceResponse, GetConsortiumListResponse, GetCredentialCptRankRequest, GetPolicyListRequest, GetConsortiumClusterListResponse, GetCptListRequest, GetAuthoritiesListRequest, GetAgencyTDidRequest, RemoveHashRequest, GetGroupListRequest, GetDeployInfoRequest, CreateLabelResponse, GetPublicKeyRequest, GetDidServiceListResponse, DeployByNameResponse, CreateLabelRequest, CreateDidServiceRequest, GetDidClusterDetailResponse, RecognizeAuthorityIssuerResponse, EnableHashResponse, GetCredentialIssueTrendRequest, EnableHashRequest, GetDidClusterListRequest, GetCptInfoRequest, DownCptRequest, GetCptListResponse, GetCptInfoResponse, GetDidRegisterTrendRequest, AddLabelRequest, GetAuthorityIssuerResponse, CreateSelectiveCredentialResponse, VerifyCredentialResponse, CreateTDidByPrivateKeyRequest, RegisterCptResponse, SetCredentialStatusRequest, RemoveHashResponse, CheckDidDeployRequest, GetDidDocumentResponse, RegisterIssuerResponse, CancelAuthorityIssuerRequest, CancelAuthorityIssuerResponse, CreateTDidRequest, GetAuthoritiesListResponse, CreateSelectiveCredentialRequest, CreateTDidByPrivateKeyResponse, DeployByNameRequest, GetDidServiceListRequest, GetAuthorityIssuerRequest, GetDidClusterListResponse, RecognizeAuthorityIssuerRequest, GetCredentialStatusRequest, GetAgencyTDidResponse, SetCredentialStatusResponse, GetCredentialCptRankResponse, RegisterIssuerRequest, GetDidListResponse, GetDeployInfoResponse, CreateTDidByPublicKeyResponse, CheckDidDeployResponse, GetDidClusterDetailRequest, GetConsortiumClusterListRequest, GetDidDetailResponse, GetLabelListRequest, GetDataPanelResponse, QueryPolicyResponse, GetDidListRequest, CheckChainResponse, CreateTDidByPublicKeyRequest, GetDataPanelRequest, GetGroupListResponse, RegisterClaimPolicyResponse, GetDidDetailRequest, GetDidServiceDetailRequest, GetDidDocumentRequest, GetCredentialIssueRankResponse, AddLabelResponse, GetDeployListResponse, CheckChainRequest, GetPublicKeyResponse, GetDidRegisterTrendResponse, GetCredentialStatusResponse, CreateTDidResponse, VerifyCredentialRequest, RegisterCptRequest, GetLabelListResponse, GetPolicyListResponse, GetCredentialIssueRankRequest, GetDeployListRequest } from "./tdid_models";
/**
 * tdid client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建选择性批露凭证
     */
    CreateSelectiveCredential(req: CreateSelectiveCredentialRequest, cb?: (error: string, rep: CreateSelectiveCredentialResponse) => void): Promise<CreateSelectiveCredentialResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

权威机构列表
     */
    GetAuthoritiesList(req: GetAuthoritiesListRequest, cb?: (error: string, rep: GetAuthoritiesListResponse) => void): Promise<GetAuthoritiesListResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

披露策略Policy管理列表
     */
    GetPolicyList(req: GetPolicyListRequest, cb?: (error: string, rep: GetPolicyListResponse) => void): Promise<GetPolicyListResponse>;
    /**
     * 获取凭证链上状态信息
     */
    GetCredentialStatus(req: GetCredentialStatusRequest, cb?: (error: string, rep: GetCredentialStatusResponse) => void): Promise<GetCredentialStatusResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

查看公钥
     */
    GetPublicKey(req: GetPublicKeyRequest, cb?: (error: string, rep: GetPublicKeyResponse) => void): Promise<GetPublicKeyResponse>;
    /**
     * 检查区块链信息
     */
    CheckChain(req: CheckChainRequest, cb?: (error: string, rep: CheckChainResponse) => void): Promise<CheckChainResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

披露策略Policy查看
     */
    QueryPolicy(req: QueryPolicyRequest, cb?: (error: string, rep: QueryPolicyResponse) => void): Promise<QueryPolicyResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

检查部署情况
     */
    CheckDidDeploy(req: CheckDidDeployRequest, cb?: (error: string, rep: CheckDidDeployResponse) => void): Promise<CheckDidDeployResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

认证权威机构
     */
    RecognizeAuthorityIssuer(req: RecognizeAuthorityIssuerRequest, cb?: (error: string, rep: RecognizeAuthorityIssuerResponse) => void): Promise<RecognizeAuthorityIssuerResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

撤消权威机构认证
     */
    CancelAuthorityIssuer(req: CancelAuthorityIssuerRequest, cb?: (error: string, rep: CancelAuthorityIssuerResponse) => void): Promise<CancelAuthorityIssuerResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

DID注册趋势
     */
    GetDidRegisterTrend(req: GetDidRegisterTrendRequest, cb?: (error: string, rep: GetDidRegisterTrendResponse) => void): Promise<GetDidRegisterTrendResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

DID详情
     */
    GetDidDetail(req: GetDidDetailRequest, cb?: (error: string, rep: GetDidDetailResponse) => void): Promise<GetDidDetailResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

删除合约
     */
    RemoveHash(req: RemoveHashRequest, cb?: (error: string, rep: RemoveHashResponse) => void): Promise<RemoveHashResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

凭证颁发按机构排行
     */
    GetCredentialIssueRank(req: GetCredentialIssueRankRequest, cb?: (error: string, rep: GetCredentialIssueRankResponse) => void): Promise<GetCredentialIssueRankResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

主群组配置列表
     */
    GetGroupList(req: GetGroupListRequest, cb?: (error: string, rep: GetGroupListResponse) => void): Promise<GetGroupListResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

披露策略Policy注册
     */
    RegisterClaimPolicy(req: RegisterClaimPolicyRequest, cb?: (error: string, rep: RegisterClaimPolicyResponse) => void): Promise<RegisterClaimPolicyResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

获取联盟列表
     */
    GetConsortiumList(req?: GetConsortiumListRequest, cb?: (error: string, rep: GetConsortiumListResponse) => void): Promise<GetConsortiumListResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

获取用户的DID网络列表
     */
    GetDidClusterList(req?: GetDidClusterListRequest, cb?: (error: string, rep: GetDidClusterListResponse) => void): Promise<GetDidClusterListResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

获取DID服务详情
     */
    GetDidServiceDetail(req: GetDidServiceDetailRequest, cb?: (error: string, rep: GetDidServiceDetailResponse) => void): Promise<GetDidServiceDetailResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

凭证模版列表
     */
    GetCptList(req: GetCptListRequest, cb?: (error: string, rep: GetCptListResponse) => void): Promise<GetCptListResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

凭证颁发趋势
     */
    GetCredentialIssueTrend(req: GetCredentialIssueTrendRequest, cb?: (error: string, rep: GetCredentialIssueTrendResponse) => void): Promise<GetCredentialIssueTrendResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

通过Name部署TDID合约
     */
    DeployByName(req: DeployByNameRequest, cb?: (error: string, rep: DeployByNameResponse) => void): Promise<DeployByNameResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

创建DID服务
     */
    CreateDidService(req: CreateDidServiceRequest, cb?: (error: string, rep: CreateDidServiceResponse) => void): Promise<CreateDidServiceResponse>;
    /**
     * 创建凭证
     */
    CreateCredential(req: CreateCredentialRequest, cb?: (error: string, rep: CreateCredentialResponse) => void): Promise<CreateCredentialResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

获取DID区块链网络详情
     */
    GetDidClusterDetail(req: GetDidClusterDetailRequest, cb?: (error: string, rep: GetDidClusterDetailResponse) => void): Promise<GetDidClusterDetailResponse>;
    /**
     * 设置凭证链上状态
     */
    SetCredentialStatus(req: SetCredentialStatusRequest, cb?: (error: string, rep: SetCredentialStatusResponse) => void): Promise<SetCredentialStatusResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

标签列表
     */
    GetLabelList(req: GetLabelListRequest, cb?: (error: string, rep: GetLabelListResponse) => void): Promise<GetLabelListResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

启用合约
     */
    EnableHash(req: EnableHashRequest, cb?: (error: string, rep: EnableHashResponse) => void): Promise<EnableHashResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

合约部署列表
     */
    GetDeployList(req: GetDeployListRequest, cb?: (error: string, rep: GetDeployListResponse) => void): Promise<GetDeployListResponse>;
    /**
     * 创建机构DID
     */
    CreateTDid(req: CreateTDidRequest, cb?: (error: string, rep: CreateTDidResponse) => void): Promise<CreateTDidResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

注册为权威机构
     */
    RegisterIssuer(req: RegisterIssuerRequest, cb?: (error: string, rep: RegisterIssuerResponse) => void): Promise<RegisterIssuerResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

合约部署详情

     */
    GetDeployInfo(req: GetDeployInfoRequest, cb?: (error: string, rep: GetDeployInfoResponse) => void): Promise<GetDeployInfoResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

凭证颁发按机构排行
     */
    GetCredentialCptRank(req: GetCredentialCptRankRequest, cb?: (error: string, rep: GetCredentialCptRankResponse) => void): Promise<GetCredentialCptRankResponse>;
    /**
     * 凭证模版详情
     */
    GetCptInfo(req: GetCptInfoRequest, cb?: (error: string, rep: GetCptInfoResponse) => void): Promise<GetCptInfoResponse>;
    /**
     * 查看DID文档

     */
    GetDidDocument(req: GetDidDocumentRequest, cb?: (error: string, rep: GetDidDocumentResponse) => void): Promise<GetDidDocumentResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

获取DID服务列表
     */
    GetDidServiceList(req: GetDidServiceListRequest, cb?: (error: string, rep: GetDidServiceListResponse) => void): Promise<GetDidServiceListResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

DID列表
     */
    GetDidList(req: GetDidListRequest, cb?: (error: string, rep: GetDidListResponse) => void): Promise<GetDidListResponse>;
    /**
     *  新建DID根据公钥生成Tdid
     */
    CreateTDidByPublicKey(req: CreateTDidByPublicKeyRequest, cb?: (error: string, rep: CreateTDidByPublicKeyResponse) => void): Promise<CreateTDidByPublicKeyResponse>;
    /**
     * 该接口已废弃

本机构DID详情
     */
    GetAgencyTDid(req: GetAgencyTDidRequest, cb?: (error: string, rep: GetAgencyTDidResponse) => void): Promise<GetAgencyTDidResponse>;
    /**
     * 新建DID根据私钥生成Tdid
     */
    CreateTDidByPrivateKey(req: CreateTDidByPrivateKeyRequest, cb?: (error: string, rep: CreateTDidByPrivateKeyResponse) => void): Promise<CreateTDidByPrivateKeyResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

DID添加标签

     */
    AddLabel(req: AddLabelRequest, cb?: (error: string, rep: AddLabelResponse) => void): Promise<AddLabelResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

凭证模版下载
     */
    DownCpt(req: DownCptRequest, cb?: (error: string, rep: DownCptResponse) => void): Promise<DownCptResponse>;
    /**
     * 凭证模版新建
     */
    RegisterCpt(req: RegisterCptRequest, cb?: (error: string, rep: RegisterCptResponse) => void): Promise<RegisterCptResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

获取联盟bcos网络列表
     */
    GetConsortiumClusterList(req: GetConsortiumClusterListRequest, cb?: (error: string, rep: GetConsortiumClusterListResponse) => void): Promise<GetConsortiumClusterListResponse>;
    /**
     * 验证凭证
     */
    VerifyCredential(req: VerifyCredentialRequest, cb?: (error: string, rep: VerifyCredentialResponse) => void): Promise<VerifyCredentialResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

概览

     */
    GetDataPanel(req: GetDataPanelRequest, cb?: (error: string, rep: GetDataPanelResponse) => void): Promise<GetDataPanelResponse>;
    /**
     * 获取权威机构信息
     */
    GetAuthorityIssuer(req: GetAuthorityIssuerRequest, cb?: (error: string, rep: GetAuthorityIssuerResponse) => void): Promise<GetAuthorityIssuerResponse>;
    /**
     * 下线已有内测接口，待上线正式版本的接口

新建标签
     */
    CreateLabel(req: CreateLabelRequest, cb?: (error: string, rep: CreateLabelResponse) => void): Promise<CreateLabelResponse>;
}

import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryRequest, GetChaincodeInitializeResultForUserResponse, GetClusterListForUserResponse, GetBlockTransactionListForUserResponse, SendTransactionHandlerResponse, ApplyUserCertRequest, TransByDynamicContractHandlerRequest, GetTransListHandlerResponse, GetChaincodeInitializeResultForUserRequest, InitializeChaincodeForUserRequest, DeployDynamicContractHandlerResponse, ApplyUserCertResponse, GetChaincodeCompileLogForUserRequest, GetInvokeTxRequest, GetPeerLogForUserResponse, GetTransListHandlerRequest, DownloadUserCertResponse, GetChaincodeLogForUserRequest, GetLatesdTransactionListRequest, InvokeResponse, GetTransactionDetailForUserRequest, GetBlockListResponse, SrvInvokeRequest, GetClusterSummaryRequest, BlockByNumberHandlerResponse, GetTransByHashHandlerResponse, DeployDynamicContractHandlerRequest, GetPeerLogForUserRequest, GetLatesdTransactionListResponse, DownloadUserCertRequest, GetClusterSummaryResponse, TransByDynamicContractHandlerResponse, GetBlockTransactionListForUserRequest, CreateChaincodeAndInstallForUserRequest, SrvInvokeResponse, GetBlockListHandlerRequest, GetChaincodeLogForUserResponse, InitializeChaincodeForUserResponse, GetClusterListForUserRequest, GetBlockListRequest, InvokeRequest, GetInvokeTxResponse, GetBlockListHandlerResponse, GetTransactionDetailForUserResponse, GetChannelListForUserResponse, GetChaincodeCompileLogForUserResponse, SendTransactionHandlerRequest, BlockByNumberHandlerRequest, GetTransByHashHandlerRequest, CreateChaincodeAndInstallForUserResponse, GetChannelListForUserRequest, QueryResponse } from "./tbaas_models";
/**
 * tbaas client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取合约容器日志
     */
    GetChaincodeLogForUser(req: GetChaincodeLogForUserRequest, cb?: (error: string, rep: GetChaincodeLogForUserResponse) => void): Promise<GetChaincodeLogForUserResponse>;
    /**
     * 获取该用户的网络列表。网络信息中包含组织信息，但仅包含该用户所在组织的信息。
     */
    GetClusterListForUser(req: GetClusterListForUserRequest, cb?: (error: string, rep: GetClusterListForUserResponse) => void): Promise<GetClusterListForUserResponse>;
    /**
     * Bcos分页查询当前群组下的区块列表
     */
    GetBlockListHandler(req: GetBlockListHandlerRequest, cb?: (error: string, rep: GetBlockListHandlerResponse) => void): Promise<GetBlockListHandlerResponse>;
    /**
     * 动态部署合约
     */
    DeployDynamicContractHandler(req: DeployDynamicContractHandlerRequest, cb?: (error: string, rep: DeployDynamicContractHandlerResponse) => void): Promise<DeployDynamicContractHandlerResponse>;
    /**
     * 新增交易
     */
    Invoke(req: InvokeRequest, cb?: (error: string, rep: InvokeResponse) => void): Promise<InvokeResponse>;
    /**
     * 获取区块链网络概要
     */
    GetClusterSummary(req: GetClusterSummaryRequest, cb?: (error: string, rep: GetClusterSummaryResponse) => void): Promise<GetClusterSummaryResponse>;
    /**
     * 获取节点日志
     */
    GetPeerLogForUser(req: GetPeerLogForUserRequest, cb?: (error: string, rep: GetPeerLogForUserResponse) => void): Promise<GetPeerLogForUserResponse>;
    /**
     * 下载用户证书
     */
    DownloadUserCert(req: DownloadUserCertRequest, cb?: (error: string, rep: DownloadUserCertResponse) => void): Promise<DownloadUserCertResponse>;
    /**
     * 创建并安装合约
     */
    CreateChaincodeAndInstallForUser(req: CreateChaincodeAndInstallForUserRequest, cb?: (error: string, rep: CreateChaincodeAndInstallForUserResponse) => void): Promise<CreateChaincodeAndInstallForUserResponse>;
    /**
     * 获取区块内的交易列表
     */
    GetBlockTransactionListForUser(req: GetBlockTransactionListForUserRequest, cb?: (error: string, rep: GetBlockTransactionListForUserResponse) => void): Promise<GetBlockTransactionListForUserResponse>;
    /**
     * 申请用户证书
     */
    ApplyUserCert(req: ApplyUserCertRequest, cb?: (error: string, rep: ApplyUserCertResponse) => void): Promise<ApplyUserCertResponse>;
    /**
     * Bcos根据块高查询区块信息
     */
    BlockByNumberHandler(req: BlockByNumberHandlerRequest, cb?: (error: string, rep: BlockByNumberHandlerResponse) => void): Promise<BlockByNumberHandlerResponse>;
    /**
     * Invoke异步调用结果查询
     */
    GetInvokeTx(req: GetInvokeTxRequest, cb?: (error: string, rep: GetInvokeTxResponse) => void): Promise<GetInvokeTxResponse>;
    /**
     * 实例化结果查询
     */
    GetChaincodeInitializeResultForUser(req: GetChaincodeInitializeResultForUserRequest, cb?: (error: string, rep: GetChaincodeInitializeResultForUserResponse) => void): Promise<GetChaincodeInitializeResultForUserResponse>;
    /**
     * 获取通道列表
     */
    GetChannelListForUser(req: GetChannelListForUserRequest, cb?: (error: string, rep: GetChannelListForUserResponse) => void): Promise<GetChannelListForUserResponse>;
    /**
     * 实例化合约
     */
    InitializeChaincodeForUser(req: InitializeChaincodeForUserRequest, cb?: (error: string, rep: InitializeChaincodeForUserResponse) => void): Promise<InitializeChaincodeForUserResponse>;
    /**
     * 获取交易详情
     */
    GetTransactionDetailForUser(req: GetTransactionDetailForUserRequest, cb?: (error: string, rep: GetTransactionDetailForUserResponse) => void): Promise<GetTransactionDetailForUserResponse>;
    /**
     * trustsql服务统一接口
     */
    SrvInvoke(req: SrvInvokeRequest, cb?: (error: string, rep: SrvInvokeResponse) => void): Promise<SrvInvokeResponse>;
    /**
     * 根据动态部署的合约发送交易
     */
    TransByDynamicContractHandler(req: TransByDynamicContractHandlerRequest, cb?: (error: string, rep: TransByDynamicContractHandlerResponse) => void): Promise<TransByDynamicContractHandlerResponse>;
    /**
     * Bcos发送交易
     */
    SendTransactionHandler(req: SendTransactionHandlerRequest, cb?: (error: string, rep: SendTransactionHandlerResponse) => void): Promise<SendTransactionHandlerResponse>;
    /**
     * 获取合约编译日志
     */
    GetChaincodeCompileLogForUser(req: GetChaincodeCompileLogForUserRequest, cb?: (error: string, rep: GetChaincodeCompileLogForUserResponse) => void): Promise<GetChaincodeCompileLogForUserResponse>;
    /**
     * Bcos分页查询当前群组的交易信息列表
     */
    GetTransListHandler(req: GetTransListHandlerRequest, cb?: (error: string, rep: GetTransListHandlerResponse) => void): Promise<GetTransListHandlerResponse>;
    /**
     * 查看当前网络下的所有区块列表，分页展示
     */
    GetBlockList(req: GetBlockListRequest, cb?: (error: string, rep: GetBlockListResponse) => void): Promise<GetBlockListResponse>;
    /**
     * 查询交易
     */
    Query(req: QueryRequest, cb?: (error: string, rep: QueryResponse) => void): Promise<QueryResponse>;
    /**
     * 获取最新交易列表
     */
    GetLatesdTransactionList(req: GetLatesdTransactionListRequest, cb?: (error: string, rep: GetLatesdTransactionListResponse) => void): Promise<GetLatesdTransactionListResponse>;
    /**
     * Bcos根据交易哈希查看交易详细信息
     */
    GetTransByHashHandler(req: GetTransByHashHandlerRequest, cb?: (error: string, rep: GetTransByHashHandlerResponse) => void): Promise<GetTransByHashHandlerResponse>;
}

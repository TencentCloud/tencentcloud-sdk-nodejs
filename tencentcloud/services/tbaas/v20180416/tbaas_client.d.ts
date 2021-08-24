import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetBcosTransListRequest, QueryRequest, QueryChainMakerContractRequest, DeployDynamicBcosContractResponse, GetClusterListForUserResponse, SendTransactionHandlerRequest, GetBlockTransactionListForUserResponse, SendTransactionHandlerResponse, ApplyUserCertRequest, TransByDynamicContractHandlerRequest, GetTransListHandlerResponse, InvokeBcosTransRequest, GetChaincodeInitializeResultForUserRequest, InitializeChaincodeForUserRequest, DeployDynamicContractHandlerResponse, SrvInvokeRequest, ApplyUserCertResponse, GetChaincodeCompileLogForUserRequest, GetBcosBlockByNumberRequest, GetPeerLogForUserResponse, GetBcosBlockListResponse, DownloadUserCertResponse, QueryChainMakerBlockTransactionRequest, GetChaincodeLogForUserRequest, GetLatesdTransactionListRequest, InvokeResponse, GetTransactionDetailForUserRequest, GetBlockListResponse, GetBlockTransactionListForUserRequest, QueryChainMakerBlockTransactionResponse, GetBcosBlockListRequest, GetClusterSummaryRequest, BlockByNumberHandlerResponse, GetTransListHandlerRequest, InvokeChainMakerContractResponse, GetTransByHashHandlerResponse, GetInvokeTxRequest, DeployDynamicContractHandlerRequest, GetPeerLogForUserRequest, GetLatesdTransactionListResponse, QueryChainMakerTransactionResponse, DownloadUserCertRequest, GetClusterSummaryResponse, TransByDynamicContractHandlerResponse, CreateChaincodeAndInstallForUserRequest, SrvInvokeResponse, GetBcosTransByHashResponse, GetBlockListHandlerRequest, GetChaincodeLogForUserResponse, InvokeBcosTransResponse, InitializeChaincodeForUserResponse, GetBcosBlockByNumberResponse, GetClusterListForUserRequest, GetBlockListRequest, GetChaincodeInitializeResultForUserResponse, InvokeRequest, GetInvokeTxResponse, GetBlockListHandlerResponse, GetTransactionDetailForUserResponse, QueryChainMakerContractResponse, GetBcosTransByHashRequest, GetChannelListForUserResponse, QueryChainMakerTransactionRequest, GetChaincodeCompileLogForUserResponse, DeployDynamicBcosContractRequest, InvokeChainMakerContractRequest, GetBcosTransListResponse, BlockByNumberHandlerRequest, GetTransByHashHandlerRequest, CreateChaincodeAndInstallForUserResponse, GetChannelListForUserRequest, QueryResponse } from "./tbaas_models";
/**
 * tbaas client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 执行Bcos交易，支持动态部署的合约
     */
    InvokeBcosTrans(req: InvokeBcosTransRequest, cb?: (error: string, rep: InvokeBcosTransResponse) => void): Promise<InvokeBcosTransResponse>;
    /**
     * 通过交易ID查询长安链交易
     */
    QueryChainMakerTransaction(req: QueryChainMakerTransactionRequest, cb?: (error: string, rep: QueryChainMakerTransactionResponse) => void): Promise<QueryChainMakerTransactionResponse>;
    /**
     * 使用块高查询Bcos区块信息
     */
    GetBcosBlockByNumber(req: GetBcosBlockByNumberRequest, cb?: (error: string, rep: GetBcosBlockByNumberResponse) => void): Promise<GetBcosBlockByNumberResponse>;
    /**
     * 调用长安链合约查询
     */
    QueryChainMakerContract(req: QueryChainMakerContractRequest, cb?: (error: string, rep: QueryChainMakerContractResponse) => void): Promise<QueryChainMakerContractResponse>;
    /**
     * 获取合约容器日志
     */
    GetChaincodeLogForUser(req: GetChaincodeLogForUserRequest, cb?: (error: string, rep: GetChaincodeLogForUserResponse) => void): Promise<GetChaincodeLogForUserResponse>;
    /**
     * Bcos根据交易哈希查看交易详细信息
     */
    GetBcosTransByHash(req: GetBcosTransByHashRequest, cb?: (error: string, rep: GetBcosTransByHashResponse) => void): Promise<GetBcosTransByHashResponse>;
    /**
     * 获取该用户的网络列表。网络信息中包含组织信息，但仅包含该用户所在组织的信息。
     */
    GetClusterListForUser(req: GetClusterListForUserRequest, cb?: (error: string, rep: GetClusterListForUserResponse) => void): Promise<GetClusterListForUserResponse>;
    /**
     * Bcos分页查询当前群组下的区块列表
     */
    GetBcosBlockList(req: GetBcosBlockListRequest, cb?: (error: string, rep: GetBcosBlockListResponse) => void): Promise<GetBcosBlockListResponse>;
    /**
     * 获取交易详情
     */
    GetTransactionDetailForUser(req: GetTransactionDetailForUserRequest, cb?: (error: string, rep: GetTransactionDetailForUserResponse) => void): Promise<GetTransactionDetailForUserResponse>;
    /**
     * 版本升级

Bcos分页查询当前群组的交易信息列表
     */
    GetTransListHandler(req: GetTransListHandlerRequest, cb?: (error: string, rep: GetTransListHandlerResponse) => void): Promise<GetTransListHandlerResponse>;
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
     * 动态部署并发布Bcos合约
     */
    DeployDynamicBcosContract(req: DeployDynamicBcosContractRequest, cb?: (error: string, rep: DeployDynamicBcosContractResponse) => void): Promise<DeployDynamicBcosContractResponse>;
    /**
     * 下载用户证书
     */
    DownloadUserCert(req: DownloadUserCertRequest, cb?: (error: string, rep: DownloadUserCertResponse) => void): Promise<DownloadUserCertResponse>;
    /**
     * 创建并安装合约
     */
    CreateChaincodeAndInstallForUser(req: CreateChaincodeAndInstallForUserRequest, cb?: (error: string, rep: CreateChaincodeAndInstallForUserResponse) => void): Promise<CreateChaincodeAndInstallForUserResponse>;
    /**
     * 版本升级

Bcos根据交易哈希查看交易详细信息
     */
    GetTransByHashHandler(req: GetTransByHashHandlerRequest, cb?: (error: string, rep: GetTransByHashHandlerResponse) => void): Promise<GetTransByHashHandlerResponse>;
    /**
     * 获取最新交易列表
     */
    GetLatesdTransactionList(req: GetLatesdTransactionListRequest, cb?: (error: string, rep: GetLatesdTransactionListResponse) => void): Promise<GetLatesdTransactionListResponse>;
    /**
     * 申请用户证书
     */
    ApplyUserCert(req: ApplyUserCertRequest, cb?: (error: string, rep: ApplyUserCertResponse) => void): Promise<ApplyUserCertResponse>;
    /**
     * 调用长安链合约执行交易
     */
    InvokeChainMakerContract(req: InvokeChainMakerContractRequest, cb?: (error: string, rep: InvokeChainMakerContractResponse) => void): Promise<InvokeChainMakerContractResponse>;
    /**
     * 版本升级

Bcos根据块高查询区块信息
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
     * 查询长安链指定高度区块的交易
     */
    QueryChainMakerBlockTransaction(req: QueryChainMakerBlockTransactionRequest, cb?: (error: string, rep: QueryChainMakerBlockTransactionResponse) => void): Promise<QueryChainMakerBlockTransactionResponse>;
    /**
     * 实例化合约
     */
    InitializeChaincodeForUser(req: InitializeChaincodeForUserRequest, cb?: (error: string, rep: InitializeChaincodeForUserResponse) => void): Promise<InitializeChaincodeForUserResponse>;
    /**
     * 版本升级

动态部署合约
     */
    DeployDynamicContractHandler(req: DeployDynamicContractHandlerRequest, cb?: (error: string, rep: DeployDynamicContractHandlerResponse) => void): Promise<DeployDynamicContractHandlerResponse>;
    /**
     * trustsql服务统一接口
     */
    SrvInvoke(req: SrvInvokeRequest, cb?: (error: string, rep: SrvInvokeResponse) => void): Promise<SrvInvokeResponse>;
    /**
     * Bcos分页查询当前群组的交易信息列表
     */
    GetBcosTransList(req: GetBcosTransListRequest, cb?: (error: string, rep: GetBcosTransListResponse) => void): Promise<GetBcosTransListResponse>;
    /**
     * 版本升级

根据动态部署的合约发送交易
     */
    TransByDynamicContractHandler(req: TransByDynamicContractHandlerRequest, cb?: (error: string, rep: TransByDynamicContractHandlerResponse) => void): Promise<TransByDynamicContractHandlerResponse>;
    /**
     * 版本升级

Bcos发送交易
     */
    SendTransactionHandler(req: SendTransactionHandlerRequest, cb?: (error: string, rep: SendTransactionHandlerResponse) => void): Promise<SendTransactionHandlerResponse>;
    /**
     * 获取合约编译日志
     */
    GetChaincodeCompileLogForUser(req: GetChaincodeCompileLogForUserRequest, cb?: (error: string, rep: GetChaincodeCompileLogForUserResponse) => void): Promise<GetChaincodeCompileLogForUserResponse>;
    /**
     * 获取区块内的交易列表
     */
    GetBlockTransactionListForUser(req: GetBlockTransactionListForUserRequest, cb?: (error: string, rep: GetBlockTransactionListForUserResponse) => void): Promise<GetBlockTransactionListForUserResponse>;
    /**
     * 查看当前网络下的所有区块列表，分页展示
     */
    GetBlockList(req: GetBlockListRequest, cb?: (error: string, rep: GetBlockListResponse) => void): Promise<GetBlockListResponse>;
    /**
     * 查询交易
     */
    Query(req: QueryRequest, cb?: (error: string, rep: QueryResponse) => void): Promise<QueryResponse>;
    /**
     * 版本升级

Bcos分页查询当前群组下的区块列表
     */
    GetBlockListHandler(req: GetBlockListHandlerRequest, cb?: (error: string, rep: GetBlockListHandlerResponse) => void): Promise<GetBlockListHandlerResponse>;
}

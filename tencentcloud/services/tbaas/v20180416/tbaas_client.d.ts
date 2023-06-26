import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryChainMakerDemoBlockTransactionResponse, QueryChainMakerContractRequest, QueryChainMakerBlockTransactionRequest, GetClusterListForUserResponse, GetBlockTransactionListForUserResponse, ApplyChainMakerBatchUserCertResponse, ApplyUserCertRequest, SrvInvokeResponse, GetChaincodeInitializeResultForUserRequest, InitializeChaincodeForUserRequest, GetTransactionDetailForUserResponse, SrvInvokeRequest, ApplyUserCertResponse, GetChaincodeCompileLogForUserRequest, GetInvokeTxRequest, InvokeResponse, DownloadUserCertResponse, GetChaincodeLogForUserRequest, GetLatesdTransactionListRequest, DownloadUserCertRequest, GetTransactionDetailForUserRequest, GetBlockListResponse, GetBlockTransactionListForUserRequest, QueryChainMakerBlockTransactionResponse, InvokeChainMakerDemoContractRequest, GetClusterSummaryRequest, InvokeChainMakerContractResponse, QueryChainMakerTransactionRequest, GetPeerLogForUserRequest, GetLatesdTransactionListResponse, QueryChainMakerTransactionResponse, GetChaincodeInitializeResultForUserResponse, GetClusterSummaryResponse, CreateChaincodeAndInstallForUserRequest, GetLatestTransactionListRequest, QueryChainMakerDemoTransactionResponse, ApplyChainMakerBatchUserCertRequest, GetChaincodeLogForUserResponse, QueryChainMakerDemoTransactionRequest, InitializeChaincodeForUserResponse, QueryChainMakerDemoContractRequest, GetClusterListForUserRequest, QueryChainMakerDemoContractResponse, GetBlockListRequest, GetPeerLogForUserResponse, InvokeRequest, GetInvokeTxResponse, GetChannelListForUserResponse, QueryChainMakerContractResponse, GetChaincodeCompileLogForUserResponse, InvokeChainMakerContractRequest, GetLatestTransactionListResponse, QueryChainMakerDemoBlockTransactionRequest, QueryRequest, CreateChaincodeAndInstallForUserResponse, GetChannelListForUserRequest, InvokeChainMakerDemoContractResponse, QueryResponse } from "./tbaas_models";
/**
 * tbaas client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 通过交易ID查询长安链交易
     */
    QueryChainMakerTransaction(req: QueryChainMakerTransactionRequest, cb?: (error: string, rep: QueryChainMakerTransactionResponse) => void): Promise<QueryChainMakerTransactionResponse>;
    /**
     * 批量申请长安链用户签名证书
     */
    ApplyChainMakerBatchUserCert(req: ApplyChainMakerBatchUserCertRequest, cb?: (error: string, rep: ApplyChainMakerBatchUserCertResponse) => void): Promise<ApplyChainMakerBatchUserCertResponse>;
    /**
     * 获取合约容器日志
     */
    GetChaincodeLogForUser(req: GetChaincodeLogForUserRequest, cb?: (error: string, rep: GetChaincodeLogForUserResponse) => void): Promise<GetChaincodeLogForUserResponse>;
    /**
     * 通过交易ID查询长安链体验网络交易
     */
    QueryChainMakerDemoTransaction(req: QueryChainMakerDemoTransactionRequest, cb?: (error: string, rep: QueryChainMakerDemoTransactionResponse) => void): Promise<QueryChainMakerDemoTransactionResponse>;
    /**
     * 获取该用户的网络列表。网络信息中包含组织信息，但仅包含该用户所在组织的信息。
     */
    GetClusterListForUser(req: GetClusterListForUserRequest, cb?: (error: string, rep: GetClusterListForUserResponse) => void): Promise<GetClusterListForUserResponse>;
    /**
     * 调用长安链合约查询
     */
    QueryChainMakerContract(req: QueryChainMakerContractRequest, cb?: (error: string, rep: QueryChainMakerContractResponse) => void): Promise<QueryChainMakerContractResponse>;
    /**
     * 查询长安链体验网络指定高度区块的交易
     */
    QueryChainMakerDemoBlockTransaction(req: QueryChainMakerDemoBlockTransactionRequest, cb?: (error: string, rep: QueryChainMakerDemoBlockTransactionResponse) => void): Promise<QueryChainMakerDemoBlockTransactionResponse>;
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
     * 获取fabric最新交易列表
     */
    GetLatestTransactionList(req: GetLatestTransactionListRequest, cb?: (error: string, rep: GetLatestTransactionListResponse) => void): Promise<GetLatestTransactionListResponse>;
    /**
     * 下载用户证书
     */
    DownloadUserCert(req: DownloadUserCertRequest, cb?: (error: string, rep: DownloadUserCertResponse) => void): Promise<DownloadUserCertResponse>;
    /**
     * 创建并安装合约
     */
    CreateChaincodeAndInstallForUser(req: CreateChaincodeAndInstallForUserRequest, cb?: (error: string, rep: CreateChaincodeAndInstallForUserResponse) => void): Promise<CreateChaincodeAndInstallForUserResponse>;
    /**
     * 获取最新交易列表（已废弃）
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
     * 调用长安链体验网络合约查询
     */
    QueryChainMakerDemoContract(req: QueryChainMakerDemoContractRequest, cb?: (error: string, rep: QueryChainMakerDemoContractResponse) => void): Promise<QueryChainMakerDemoContractResponse>;
    /**
     * 获取交易详情
     */
    GetTransactionDetailForUser(req: GetTransactionDetailForUserRequest, cb?: (error: string, rep: GetTransactionDetailForUserResponse) => void): Promise<GetTransactionDetailForUserResponse>;
    /**
     * trustsql服务统一接口
     */
    SrvInvoke(req: SrvInvokeRequest, cb?: (error: string, rep: SrvInvokeResponse) => void): Promise<SrvInvokeResponse>;
    /**
     * 调用长安链体验网络合约执行交易
     */
    InvokeChainMakerDemoContract(req: InvokeChainMakerDemoContractRequest, cb?: (error: string, rep: InvokeChainMakerDemoContractResponse) => void): Promise<InvokeChainMakerDemoContractResponse>;
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
}

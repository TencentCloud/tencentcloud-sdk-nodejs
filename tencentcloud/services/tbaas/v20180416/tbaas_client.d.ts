import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryChainMakerDemoBlockTransactionResponse, DescribeFabricTransactionResponse, QueryChainMakerBlockTransactionRequest, GetBlockTransactionListForUserResponse, ApplyChainMakerBatchUserCertResponse, ApplyUserCertRequest, SrvInvokeResponse, GetTransactionDetailForUserResponse, SrvInvokeRequest, ApplyUserCertResponse, GetInvokeTxRequest, InvokeFabricChaincodeResponse, DownloadUserCertResponse, GetLatesdTransactionListRequest, InvokeResponse, QueryFabricChaincodeResponse, GetTransactionDetailForUserRequest, GetBlockListResponse, GetBlockTransactionListForUserRequest, InvokeChainMakerDemoContractRequest, InvokeChainMakerContractResponse, QueryChainMakerTransactionRequest, GetLatesdTransactionListResponse, QueryChainMakerTransactionResponse, DownloadUserCertRequest, GetClusterSummaryResponse, QueryChainMakerDemoContractResponse, GetLatestTransactionListRequest, DescribeFabricBlockResponse, QueryChainMakerDemoContractRequest, QueryChainMakerDemoTransactionResponse, ApplyChainMakerBatchUserCertRequest, QueryChainMakerDemoTransactionRequest, DescribeFabricTransactionRequest, GetClusterSummaryRequest, DescribeFabricBlockRequest, GetBlockListRequest, QueryFabricChaincodeRequest, InvokeFabricChaincodeRequest, InvokeRequest, GetInvokeTxResponse, QueryChainMakerContractResponse, InvokeChainMakerContractRequest, QueryChainMakerContractRequest, GetLatestTransactionListResponse, QueryChainMakerDemoBlockTransactionRequest, QueryRequest, QueryChainMakerBlockTransactionResponse, InvokeChainMakerDemoContractResponse, QueryResponse } from "./tbaas_models";
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
     * 通过交易ID查询长安链体验网络交易
     */
    QueryChainMakerDemoTransaction(req: QueryChainMakerDemoTransactionRequest, cb?: (error: string, rep: QueryChainMakerDemoTransactionResponse) => void): Promise<QueryChainMakerDemoTransactionResponse>;
    /**
     * 调用长安链合约查询
     */
    QueryChainMakerContract(req: QueryChainMakerContractRequest, cb?: (error: string, rep: QueryChainMakerContractResponse) => void): Promise<QueryChainMakerContractResponse>;
    /**
     * 查询长安链体验网络指定高度区块的交易
     */
    QueryChainMakerDemoBlockTransaction(req: QueryChainMakerDemoBlockTransactionRequest, cb?: (error: string, rep: QueryChainMakerDemoBlockTransactionResponse) => void): Promise<QueryChainMakerDemoBlockTransactionResponse>;
    /**
     * 获取Fabric某区块的详细信息
     */
    DescribeFabricBlock(req: DescribeFabricBlockRequest, cb?: (error: string, rep: DescribeFabricBlockResponse) => void): Promise<DescribeFabricBlockResponse>;
    /**
     * 新增交易
     */
    Invoke(req: InvokeRequest, cb?: (error: string, rep: InvokeResponse) => void): Promise<InvokeResponse>;
    /**
     * 获取区块链网络概要
     */
    GetClusterSummary(req: GetClusterSummaryRequest, cb?: (error: string, rep: GetClusterSummaryResponse) => void): Promise<GetClusterSummaryResponse>;
    /**
     * 获取fabric最新交易列表
     */
    GetLatestTransactionList(req: GetLatestTransactionListRequest, cb?: (error: string, rep: GetLatestTransactionListResponse) => void): Promise<GetLatestTransactionListResponse>;
    /**
     * 下载用户证书
     */
    DownloadUserCert(req: DownloadUserCertRequest, cb?: (error: string, rep: DownloadUserCertResponse) => void): Promise<DownloadUserCertResponse>;
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
     * 查询长安链指定高度区块的交易
     */
    QueryChainMakerBlockTransaction(req: QueryChainMakerBlockTransactionRequest, cb?: (error: string, rep: QueryChainMakerBlockTransactionResponse) => void): Promise<QueryChainMakerBlockTransactionResponse>;
    /**
     * 调用长安链体验网络合约查询
     */
    QueryChainMakerDemoContract(req: QueryChainMakerDemoContractRequest, cb?: (error: string, rep: QueryChainMakerDemoContractResponse) => void): Promise<QueryChainMakerDemoContractResponse>;
    /**
     * 获取交易的详情
     */
    GetTransactionDetailForUser(req: GetTransactionDetailForUserRequest, cb?: (error: string, rep: GetTransactionDetailForUserResponse) => void): Promise<GetTransactionDetailForUserResponse>;
    /**
     * 调用Fabric用户合约查询
     */
    QueryFabricChaincode(req: QueryFabricChaincodeRequest, cb?: (error: string, rep: QueryFabricChaincodeResponse) => void): Promise<QueryFabricChaincodeResponse>;
    /**
     * trustsql服务统一接口
     */
    SrvInvoke(req: SrvInvokeRequest, cb?: (error: string, rep: SrvInvokeResponse) => void): Promise<SrvInvokeResponse>;
    /**
     * 获取Fabric交易的详细信息
     */
    DescribeFabricTransaction(req: DescribeFabricTransactionRequest, cb?: (error: string, rep: DescribeFabricTransactionResponse) => void): Promise<DescribeFabricTransactionResponse>;
    /**
     * 调用长安链体验网络合约执行交易
     */
    InvokeChainMakerDemoContract(req: InvokeChainMakerDemoContractRequest, cb?: (error: string, rep: InvokeChainMakerDemoContractResponse) => void): Promise<InvokeChainMakerDemoContractResponse>;
    /**
     * 获取区块内交易列表
     */
    GetBlockTransactionListForUser(req: GetBlockTransactionListForUserRequest, cb?: (error: string, rep: GetBlockTransactionListForUserResponse) => void): Promise<GetBlockTransactionListForUserResponse>;
    /**
     * 查看当前网络下的所有区块列表，分页展示
     */
    GetBlockList(req: GetBlockListRequest, cb?: (error: string, rep: GetBlockListResponse) => void): Promise<GetBlockListResponse>;
    /**
     * 调用Fabric用户合约执行交易
     */
    InvokeFabricChaincode(req: InvokeFabricChaincodeRequest, cb?: (error: string, rep: InvokeFabricChaincodeResponse) => void): Promise<InvokeFabricChaincodeResponse>;
    /**
     * 查询交易
     */
    Query(req: QueryRequest, cb?: (error: string, rep: QueryResponse) => void): Promise<QueryResponse>;
}

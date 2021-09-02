/**
 * 节点详情信息
 */
export interface PeerDetailForUser {
    /**
      * 节点名称
      */
    PeerName: string;
}
/**
 * GetBcosTransList请求参数结构体
 */
export interface GetBcosTransListRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 群组编号，可在群组列表中获取
      */
    GroupId: number;
    /**
      * 当前页数，默认是1
      */
    PageNumber?: number;
    /**
      * 每页记录数，默认为10
      */
    PageSize?: number;
    /**
      * 区块高度，可以从InvokeBcosTrans接口的返回值中解析获取
      */
    BlockNumber?: number;
    /**
      * 交易哈希，可以从InvokeBcosTrans接口的返回值中解析获取
      */
    TransHash?: string;
}
/**
 * Query请求参数结构体
 */
export interface QueryRequest {
    /**
      * 模块名，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名，固定字段：query
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 业务所属智能合约名称，可在智能合约详情或列表中获取
      */
    ChaincodeName: string;
    /**
      * 业务所属通道名称，可在通道详情或列表中获取
      */
    ChannelName: string;
    /**
      * 执行该查询交易的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称及其所属组织名称
      */
    Peers: Array<PeerSet>;
    /**
      * 该笔交易查询需要调用的智能合约中的函数名称
      */
    FuncName: string;
    /**
      * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
    /**
      * 被调用的函数参数列表
      */
    Args?: Array<string>;
}
/**
 * QueryChainMakerContract请求参数结构体
 */
export interface QueryChainMakerContractRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 业务链编号，可在业务链列表中获取
      */
    ChainId: string;
    /**
      * 合约名称，可在合约管理中获取
      */
    ContractName: string;
    /**
      * 合约方法名
      */
    FuncName: string;
    /**
      * 合约方法入参，json格式字符串，key/value都是string类型的map
      */
    FuncParam?: string;
}
/**
 * DeployDynamicBcosContract返回参数结构体
 */
export interface DeployDynamicBcosContractResponse {
    /**
      * 部署成功返回的合约地址
      */
    ContractAddress: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetClusterListForUser返回参数结构体
 */
export interface GetClusterListForUserResponse {
    /**
      * 网络总数量
      */
    TotalCount?: number;
    /**
      * 网络列表
      */
    ClusterList?: Array<ClusterDetailForUser>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendTransactionHandler请求参数结构体
 */
export interface SendTransactionHandlerRequest {
    /**
      * 模块名，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名，固定字段：send_transaction
      */
    Operation: string;
    /**
      * 群组编号
      */
    GroupPk: string;
    /**
      * 合约编号
      */
    ContractId: number;
    /**
      * 合约方法名
      */
    FuncName: string;
    /**
      * 合约方法入参
      */
    FuncParam?: Array<string>;
}
/**
 * GetBlockTransactionListForUser返回参数结构体
 */
export interface GetBlockTransactionListForUserResponse {
    /**
      * 交易总数量
      */
    TotalCount?: number;
    /**
      * 交易列表
      */
    TransactionList?: Array<TransactionItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendTransactionHandler返回参数结构体
 */
export interface SendTransactionHandlerResponse {
    /**
      * 交易结果json字符串
      */
    TransactionRsp?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ApplyUserCert请求参数结构体
 */
export interface ApplyUserCertRequest {
    /**
      * 模块名，固定字段：cert_mng
      */
    Module: string;
    /**
      * 操作名，固定字段：cert_apply_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 申请证书的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
    /**
      * 用户证书标识，用于标识用户证书，要求由纯小写字母组成，长度小于10
      */
    UserIdentity: string;
    /**
      * 证书申请实体，使用腾讯云账号实名认证的名称
      */
    Applicant: string;
    /**
      * 证件号码。如果腾讯云账号对应的实名认证类型为企业认证，填入“0”；如果腾讯云账号对应的实名认证类型为个人认证，填入个人身份证号码
      */
    IdentityNum: string;
    /**
      * csr p10证书文件。需要用户根据文档生成证书的CSR文件
      */
    CsrData: string;
    /**
      * 证书备注信息
      */
    Notes?: string;
}
/**
 * TransByDynamicContractHandler请求参数结构体
 */
export interface TransByDynamicContractHandlerRequest {
    /**
      * 模块名，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名，固定字段：trans_by_dynamic_contract
      */
    Operation: string;
    /**
      * 群组编号
      */
    GroupPk: string;
    /**
      * 合约地址（合约部署成功，可得到合约地址）
      */
    ContractAddress: string;
    /**
      * 合约名
      */
    ContractName: string;
    /**
      * 合约编译后的abi
      */
    AbiInfo: string;
    /**
      * 合约被调用方法名
      */
    FuncName: string;
    /**
      * 合约被调用方法的入参
      */
    FuncParam?: Array<string>;
}
/**
 * GetTransListHandler返回参数结构体
 */
export interface GetTransListHandlerResponse {
    /**
      * 总记录数
      */
    TotalCount?: number;
    /**
      * 当前群组编号
      */
    GroupPk?: string;
    /**
      * 返回数据列表
      */
    List?: Array<BcosTransInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InvokeBcosTrans请求参数结构体
 */
export interface InvokeBcosTransRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 群组编号，可在群组列表中获取
      */
    GroupId: number;
    /**
      * 合约地址，可在合约详情获取
      */
    ContractAddress: string;
    /**
      * 合约Abi的json数组格式的字符串，可在合约详情获取
      */
    AbiInfo: string;
    /**
      * 合约方法名
      */
    FuncName: string;
    /**
      * 签名用户编号，可在私钥管理页面获取
      */
    SignUserId: string;
    /**
      * 合约方法入参，json格式字符串
      */
    FuncParam?: string;
}
/**
 * GetChaincodeInitializeResultForUser请求参数结构体
 */
export interface GetChaincodeInitializeResultForUserRequest {
    /**
      * 模块名，本接口取值：chaincode_mng
      */
    Module: string;
    /**
      * 操作名，本接口取值：chaincode_init_result_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 调用合约的组织名称
      */
    GroupName: string;
    /**
      * 业务所属通道名称
      */
    ChannelName: string;
    /**
      * 业务所属合约名称
      */
    ChaincodeName: string;
    /**
      * 业务所属智能合约版本
      */
    ChaincodeVersion: string;
    /**
      * 实例化任务ID
      */
    TaskId: number;
}
/**
 * InitializeChaincodeForUser请求参数结构体
 */
export interface InitializeChaincodeForUserRequest {
    /**
      * 模块名，本接口取值：chaincode_mng
      */
    Module: string;
    /**
      * 操作名，本接口取值：chaincode_init_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 调用合约的组织名称
      */
    GroupName: string;
    /**
      * 业务所属智能合约名称
      */
    ChaincodeName: string;
    /**
      * 业务所属智能合约版本
      */
    ChaincodeVersion: string;
    /**
      * 业务所属通道名称
      */
    ChannelName: string;
    /**
      * 合约实例化节点名称，可以在通道详情中获取该通道上的节点名称
      */
    PeerName: string;
    /**
      * 实例化的函数参数列表
      */
    Args?: Array<string>;
}
/**
 * DeployDynamicContractHandler返回参数结构体
 */
export interface DeployDynamicContractHandlerResponse {
    /**
      * 部署成功返回的合约地址
      */
    ContractAddress?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SrvInvoke请求参数结构体
 */
export interface SrvInvokeRequest {
    /**
      * 服务类型，iss或者dam
      */
    Service: string;
    /**
      * 服务接口，要调用的方法函数名
      */
    Method: string;
    /**
      * 用户自定义json字符串
      */
    Param: string;
}
/**
 * ApplyUserCert返回参数结构体
 */
export interface ApplyUserCertResponse {
    /**
      * 证书ID
      */
    CertId?: number;
    /**
      * 证书DN
      */
    CertDn?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetChaincodeCompileLogForUser请求参数结构体
 */
export interface GetChaincodeCompileLogForUserRequest {
    /**
      * 模块名，本接口取值：chaincode_mng
      */
    Module: string;
    /**
      * 操作名，本接口取值：chaincode_compile_log_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 调用合约的组织名称
      */
    GroupName: string;
    /**
      * 业务所属智能合约名称
      */
    ChaincodeName: string;
    /**
      * 业务所属智能合约版本
      */
    ChaincodeVersion: string;
    /**
      * 合约安装节点名称，可以在通道详情中获取该通道上的节点名称
      */
    PeerName: string;
    /**
      * 返回数据项数，本接口默认取值：10
      */
    Limit?: number;
    /**
      * 返回数据起始偏移，本接口默认取值：0
      */
    Offset?: number;
}
/**
 * GetBcosBlockByNumber请求参数结构体
 */
export interface GetBcosBlockByNumberRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 群组编号，可在群组列表中获取
      */
    GroupId: number;
    /**
      * 区块高度，可以从InvokeBcosTrans接口的返回值中解析获取
      */
    BlockNumber: number;
}
/**
 * GetPeerLogForUser返回参数结构体
 */
export interface GetPeerLogForUserResponse {
    /**
      * 返回日志总行数，不会超过入参的RowNum
      */
    TotalCount: number;
    /**
      * 日志列表
      */
    PeerLogList: Array<LogDetailForUser>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetBcosBlockList返回参数结构体
 */
export interface GetBcosBlockListResponse {
    /**
      * 总记录数
      */
    TotalCount: number;
    /**
      * 返回数据列表
      */
    List: Array<BcosBlockObj>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DownloadUserCert返回参数结构体
 */
export interface DownloadUserCertResponse {
    /**
      * 证书名称
      */
    CertName?: string;
    /**
      * 证书内容
      */
    CertCtx?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * QueryChainMakerBlockTransaction请求参数结构体
 */
export interface QueryChainMakerBlockTransactionRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 业务链编号，可在业务链列表中获取
      */
    ChainId: string;
    /**
      * 区块高度，-1表示最新区块
      */
    BlockHeight: number;
}
/**
 * GetChaincodeLogForUser请求参数结构体
 */
export interface GetChaincodeLogForUserRequest {
    /**
      * 模块名，本接口取值：chaincode_mng
      */
    Module: string;
    /**
      * 操作名，本接口取值：chaincode_log_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 调用合约的组织名称
      */
    GroupName: string;
    /**
      * 业务所属智能合约名称
      */
    ChaincodeName: string;
    /**
      * 业务所属智能合约版本
      */
    ChaincodeVersion: string;
    /**
      * 合约安装节点名称，可以在通道详情中获取该通道上的节点名称
      */
    PeerName: string;
    /**
      * 日志开始时间，如"2020-11-24 19:49:25"
      */
    BeginTime: string;
    /**
      * 返回日志行数的最大值，系统设定该参数最大为1000，且一行日志的最大字节数是500，即最大返回50万个字节数的日志数据
      */
    RowNum: number;
}
/**
 * GetLatesdTransactionList请求参数结构体
 */
export interface GetLatesdTransactionListRequest {
    /**
      * 模块名称，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名称，固定字段：latest_transaction_list
      */
    Operation: string;
    /**
      * 组织ID，固定字段：0
      */
    GroupId: number;
    /**
      * 通道ID，固定字段：0
      */
    ChannelId: number;
    /**
      * 获取的最新交易的区块数量，取值范围1~5
      */
    LatestBlockNumber: number;
    /**
      * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
    /**
      * 需要查询的通道名称，可在通道详情或列表中获取
      */
    ChannelName: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 需要获取的起始交易偏移
      */
    Offset?: number;
    /**
      * 需要获取的交易数量
      */
    Limit?: number;
}
/**
 * Invoke返回参数结构体
 */
export interface InvokeResponse {
    /**
      * 交易ID
      */
    Txid: string;
    /**
      * 交易执行结果
      */
    Events: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTransactionDetailForUser请求参数结构体
 */
export interface GetTransactionDetailForUserRequest {
    /**
      * 模块名，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名，固定字段：transaction_detail_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
    /**
      * 业务所属通道名称，可在通道详情或列表中获取
      */
    ChannelName: string;
    /**
      * 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID
      */
    BlockId: number;
    /**
      * 交易ID，需要查询的详情的交易ID
      */
    TransactionId: string;
}
/**
 * GetBlockList返回参数结构体
 */
export interface GetBlockListResponse {
    /**
      * 区块数量
      */
    TotalCount?: number;
    /**
      * 区块列表
      */
    BlockList?: Array<Block>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetBlockTransactionListForUser请求参数结构体
 */
export interface GetBlockTransactionListForUserRequest {
    /**
      * 模块名，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名，固定字段：block_transaction_list_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
    /**
      * 业务所属通道名称，可在通道详情或列表中获取
      */
    ChannelName: string;
    /**
      * 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID
      */
    BlockId: number;
    /**
      * 查询的交易列表起始偏移地址
      */
    Offset?: number;
    /**
      * 查询的交易列表数量
      */
    Limit?: number;
}
/**
 * QueryChainMakerBlockTransaction返回参数结构体
 */
export interface QueryChainMakerBlockTransactionResponse {
    /**
      * 区块交易
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: Array<ChainMakerTransactionResult>;
    /**
      * 区块高度
      */
    BlockHeight: number;
    /**
      * 交易数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TxCount: number;
    /**
      * 区块时间戳，单位是秒
      */
    BlockTimestamp: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetBcosBlockList请求参数结构体
 */
export interface GetBcosBlockListRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 群组编号，可在群组列表中获取
      */
    GroupId: number;
    /**
      * 当前页数，默认为1
      */
    PageNumber?: number;
    /**
      * 每页记录数，默认为10
      */
    PageSize?: number;
    /**
      * 区块高度，可以从InvokeBcosTrans接口的返回值中解析获取
      */
    BlockNumber?: number;
    /**
      * 区块哈希，可以从InvokeBcosTrans接口的返回值中解析获取
      */
    BlockHash?: string;
}
/**
 * GetClusterSummary请求参数结构体
 */
export interface GetClusterSummaryRequest {
    /**
      * 模块名称，固定字段：cluster_mng
      */
    Module: string;
    /**
      * 操作名称，固定字段：cluster_summary
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 组织ID，固定字段：0
      */
    GroupId: number;
    /**
      * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
}
/**
 * BlockByNumberHandler返回参数结构体
 */
export interface BlockByNumberHandlerResponse {
    /**
      * 返回区块json字符串
      */
    BlockJson?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTransListHandler请求参数结构体
 */
export interface GetTransListHandlerRequest {
    /**
      * 模块名，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名，固定字段：get_trans_list
      */
    Operation: string;
    /**
      * 记录偏移量
      */
    Offset: number;
    /**
      * 每页记录数
      */
    Limit: number;
    /**
      * 群组编号
      */
    GroupPk: string;
    /**
      * 交易哈希
      */
    TransHash?: string;
}
/**
 * InvokeChainMakerContract返回参数结构体
 */
export interface InvokeChainMakerContractResponse {
    /**
      * 交易结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: ChainMakerContractResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTransByHashHandler返回参数结构体
 */
export interface GetTransByHashHandlerResponse {
    /**
      * 交易信息json字符串
      */
    TransactionJson?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetInvokeTx请求参数结构体
 */
export interface GetInvokeTxRequest {
    /**
      * 模块名，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名，固定字段：query_txid
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 业务所属通道名称，可在通道详情或列表中获取
      */
    ChannelName: string;
    /**
      * 执行该查询交易的节点名称，可以在通道详情中获取该通道上的节点名称极其所属组织名称
      */
    PeerName: string;
    /**
      * 执行该查询交易的节点所属组织名称，可以在通道详情中获取该通道上的节点名称极其所属组织名称
      */
    PeerGroup: string;
    /**
      * 交易ID
      */
    TxId: string;
    /**
      * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
}
/**
 * DeployDynamicContractHandler请求参数结构体
 */
export interface DeployDynamicContractHandlerRequest {
    /**
      * 模块名，固定字段：contract
      */
    Module: string;
    /**
      * 操作名，固定字段：deploy_dynamic_contract
      */
    Operation: string;
    /**
      * 群组编号
      */
    GroupPk: string;
    /**
      * 合约名称
      */
    ContractName: string;
    /**
      * 合约编译后的abi
      */
    AbiInfo: string;
    /**
      * 合约编译后的binary
      */
    ByteCodeBin: string;
    /**
      * 构造函数入参
      */
    ConstructorParams?: Array<string>;
}
/**
 * 网络详情信息
 */
export interface ClusterDetailForUser {
    /**
      * 网络ID
      */
    ClusterId: string;
    /**
      * 组织列表
      */
    GroupList: Array<GroupDetailForUser>;
    /**
      * 网络名称
      */
    ClusterName: string;
}
/**
 * GetPeerLogForUser请求参数结构体
 */
export interface GetPeerLogForUserRequest {
    /**
      * 模块名，本接口取值：peer_mng
      */
    Module: string;
    /**
      * 操作名，本接口取值：peer_log_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 调用合约的组织名称
      */
    GroupName: string;
    /**
      * 节点名称
      */
    PeerName: string;
    /**
      * 日志开始时间，如"2020-11-24 19:49:25"
      */
    BeginTime: string;
    /**
      * 返回日志行数的最大值，系统设定该参数最大为1000，且一行日志的最大字节数是500，即最大返回50万个字节数的日志数据
      */
    RowNum: number;
}
/**
 * GetLatesdTransactionList返回参数结构体
 */
export interface GetLatesdTransactionListResponse {
    /**
      * 交易总数量
      */
    TotalCount?: number;
    /**
      * 交易列表
      */
    TransactionList?: Array<TransactionItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * QueryChainMakerTransaction返回参数结构体
 */
export interface QueryChainMakerTransactionResponse {
    /**
      * 交易结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: ChainMakerTransactionResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DownloadUserCert请求参数结构体
 */
export interface DownloadUserCertRequest {
    /**
      * 模块名，固定字段：cert_mng
      */
    Module: string;
    /**
      * 操作名，固定字段：cert_download_for_user
      */
    Operation: string;
    /**
      * 证书ID，可以在证书详情页面获取
      */
    CertId: number;
    /**
      * 证书DN，可以在证书详情页面获取
      */
    CertDn: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 下载证书的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
}
/**
 * GetClusterSummary返回参数结构体
 */
export interface GetClusterSummaryResponse {
    /**
      * 网络通道总数量
      */
    TotalChannelCount?: number;
    /**
      * 当前组织创建的通道数量
      */
    MyChannelCount?: number;
    /**
      * 当前组织加入的通道数量
      */
    JoinChannelCount?: number;
    /**
      * 网络节点总数量
      */
    TotalPeerCount?: number;
    /**
      * 当前组织创建的节点数量
      */
    MyPeerCount?: number;
    /**
      * 其他组织创建的节点数量
      */
    OrderCount?: number;
    /**
      * 网络组织总数量
      */
    TotalGroupCount?: number;
    /**
      * 当前组织创建的组织数量
      */
    MyGroupCount?: number;
    /**
      * 网络智能合约总数量
      */
    TotalChaincodeCount?: number;
    /**
      * 最近7天发起的智能合约数量
      */
    RecentChaincodeCount?: number;
    /**
      * 当前组织发起的智能合约数量
      */
    MyChaincodeCount?: number;
    /**
      * 当前组织的证书总数量
      */
    TotalCertCount?: number;
    /**
      * 颁发给当前组织的证书数量
      */
    TlsCertCount?: number;
    /**
      * 网络背书节点证书数量
      */
    PeerCertCount?: number;
    /**
      * 当前组织业务证书数量
      */
    ClientCertCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TransByDynamicContractHandler返回参数结构体
 */
export interface TransByDynamicContractHandlerResponse {
    /**
      * 交易结果json字符串
      */
    TransactionRsp?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * PeerSet
 */
export interface PeerSet {
    /**
      * 节点名称
      */
    PeerName: string;
    /**
      * 组织名称
      */
    OrgName: string;
}
/**
 * 长安链交易查询结果
 */
export interface ChainMakerTransactionResult {
    /**
      * 交易结果码
      */
    Code: number;
    /**
      * 交易结果码含义
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeMessage: string;
    /**
      * 交易ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TxId: string;
    /**
      * Gas使用量
注意：此字段可能返回 null，表示取不到有效值。
      */
    GasUsed: number;
    /**
      * 区块高度
注意：此字段可能返回 null，表示取不到有效值。
      */
    BlockHeight: number;
    /**
      * 合约执行结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContractEvent: string;
    /**
      * 合约返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 交易时间，单位是秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp: number;
}
/**
 * CreateChaincodeAndInstallForUser请求参数结构体
 */
export interface CreateChaincodeAndInstallForUserRequest {
    /**
      * 模块名，本接口取值：chaincode_mng
      */
    Module: string;
    /**
      * 操作名，本接口取值：chaincode_create_and_install_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
    /**
      * 合约安装节点名称，可以在通道详情中获取该通道上的节点名称
      */
    PeerName: string;
    /**
      * 智能合约名称，格式说明：以小写字母开头，由2-12位数字或小写字母组成
      */
    ChaincodeName: string;
    /**
      * 智能合约版本，格式说明：由1-12位数字、小写字母、特殊符号(“.”)组成，如v1.0
      */
    ChaincodeVersion: string;
    /**
      * 智能合约代码文件类型，支持类型：
1. "go"：.go合约文件
2. "gozip"：go合约工程zip包，要求压缩目录为代码根目录
3. "javazip"：java合约工程zip包，要求压缩目录为代码根目录
4. "nodezip"：nodejs合约工程zip包，要求压缩目录为代码根目录
      */
    ChaincodeFileType: string;
    /**
      * 合约内容，合约文件或压缩包内容的base64编码，大小要求小于等于5M
      */
    Chaincode: string;
}
/**
 * SrvInvoke返回参数结构体
 */
export interface SrvInvokeResponse {
    /**
      * 返回码
      */
    RetCode?: number;
    /**
      * 返回消息
      */
    RetMsg?: string;
    /**
      * 返回数据
      */
    Data?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetBcosTransByHash返回参数结构体
 */
export interface GetBcosTransByHashResponse {
    /**
      * 交易信息json字符串
      */
    TransactionJson: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetBlockListHandler请求参数结构体
 */
export interface GetBlockListHandlerRequest {
    /**
      * 模块名，固定字段：block
      */
    Module: string;
    /**
      * 操作名，固定字段：get_block_list
      */
    Operation: string;
    /**
      * 记录偏移数
      */
    Offset: number;
    /**
      * 每页记录数
      */
    Limit: number;
    /**
      * 当前群组编号
      */
    GroupPk: string;
    /**
      * 区块哈希
      */
    BlockHash: string;
}
/**
 * GetChaincodeLogForUser返回参数结构体
 */
export interface GetChaincodeLogForUserResponse {
    /**
      * 返回日志总行数，不会超过入参的RowNum
      */
    TotalCount: number;
    /**
      * 日志列表
      */
    ChaincodeLogList: Array<LogDetailForUser>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 日志详情信息
 */
export interface LogDetailForUser {
    /**
      * 日志行号
      */
    LineNumber: number;
    /**
      * 日志详情
      */
    LogMessage: string;
}
/**
 * InvokeBcosTrans返回参数结构体
 */
export interface InvokeBcosTransResponse {
    /**
      * 交易结果json字符串
      */
    TransactionRsp: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * InitializeChaincodeForUser返回参数结构体
 */
export interface InitializeChaincodeForUserResponse {
    /**
      * 实例化任务ID，用于查询实例化结果
      */
    TaskId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 组织详情信息
 */
export interface GroupDetailForUser {
    /**
      * 组织名称
      */
    GroupName: string;
    /**
      * 组织MSP Identity
      */
    GroupMSPId: string;
}
/**
 * GetBcosBlockByNumber返回参数结构体
 */
export interface GetBcosBlockByNumberResponse {
    /**
      * 返回区块json字符串
      */
    BlockJson: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 长安链合约执行结果
 */
export interface ChainMakerContractResult {
    /**
      * 交易结果码
      */
    Code: number;
    /**
      * 交易结果码含义
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeMessage: string;
    /**
      * 交易ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TxId: string;
    /**
      * Gas使用量
注意：此字段可能返回 null，表示取不到有效值。
      */
    GasUsed: number;
    /**
      * 合约返回消息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 合约函数返回，base64编码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
}
/**
 * GetClusterListForUser请求参数结构体
 */
export interface GetClusterListForUserRequest {
    /**
      * 模块名，本接口取值：cluster_mng
      */
    Module: string;
    /**
      * 操作名，本接口取值：cluster_list_for_user
      */
    Operation: string;
    /**
      * 返回数据项数，本接口默认取值：10，上限取值：20
      */
    Limit?: number;
    /**
      * 返回数据起始偏移，本接口默认取值：0
      */
    Offset?: number;
}
/**
 * 区块对象
 */
export interface Block {
    /**
      * 区块编号
      */
    BlockNum: number;
    /**
      * 区块数据Hash数值
      */
    DataHash: string;
    /**
      * 区块ID，与区块编号一致
      */
    BlockId: number;
    /**
      * 前一个区块Hash
      */
    PreHash: string;
    /**
      * 区块内的交易数量
      */
    TxCount: number;
}
/**
 * GetBlockList请求参数结构体
 */
export interface GetBlockListRequest {
    /**
      * 模块名称，固定字段：block
      */
    Module: string;
    /**
      * 操作名称，固定字段：block_list
      */
    Operation: string;
    /**
      * 通道ID，固定字段：0
      */
    ChannelId: number;
    /**
      * 组织ID，固定字段：0
      */
    GroupId: number;
    /**
      * 需要查询的通道名称，可在通道详情或列表中获取
      */
    ChannelName: string;
    /**
      * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 需要获取的起始交易偏移
      */
    Offset?: number;
    /**
      * 需要获取的交易数量
      */
    Limit?: number;
}
/**
 * Bcos交易信息对象
 */
export interface BcosTransInfo {
    /**
      * 所属区块高度
      */
    BlockNumber: number;
    /**
      * 区块时间戳
      */
    BlockTimestamp: string;
    /**
      * 交易哈希
      */
    TransHash: string;
    /**
      * 交易发起者
      */
    TransFrom: string;
    /**
      * 交易接收者
      */
    TransTo: string;
    /**
      * 落库时间
      */
    CreateTime: string;
    /**
      * 修改时间
      */
    ModifyTime: string;
}
/**
 * GetChaincodeInitializeResultForUser返回参数结构体
 */
export interface GetChaincodeInitializeResultForUserResponse {
    /**
      * 实例化结果：0，实例化中；1，实例化成功；2，实例化失败
      */
    InitResult?: number;
    /**
      * 实例化信息
      */
    InitMessage?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Invoke请求参数结构体
 */
export interface InvokeRequest {
    /**
      * 模块名，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名，固定字段：invoke
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 业务所属智能合约名称，可在智能合约详情或列表中获取
      */
    ChaincodeName: string;
    /**
      * 业务所属通道名称，可在通道详情或列表中获取
      */
    ChannelName: string;
    /**
      * 对该笔交易进行背书的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称及其所属组织名称
      */
    Peers: Array<PeerSet>;
    /**
      * 该笔交易需要调用的智能合约中的函数名称
      */
    FuncName: string;
    /**
      * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
      */
    GroupName: string;
    /**
      * 被调用的函数参数列表，参数列表大小总和要求小于2M
      */
    Args?: Array<string>;
    /**
      * 同步调用标识，可选参数，值为0或者不传表示使用同步方法调用，调用后会等待交易执行后再返回执行结果；值为1时表示使用异步方式调用Invoke，执行后会立即返回交易对应的Txid，后续需要通过GetInvokeTx这个API查询该交易的执行结果。（对于逻辑较为简单的交易，可以使用同步模式；对于逻辑较为复杂的交易，建议使用异步模式，否则容易导致API因等待时间过长，返回等待超时）
      */
    AsyncFlag?: number;
}
/**
 * GetInvokeTx返回参数结构体
 */
export interface GetInvokeTxResponse {
    /**
      * 交易执行状态码
      */
    TxValidationCode: number;
    /**
      * 交易执行消息
      */
    TxValidationMsg: string;
    /**
      * 交易所在区块ID
      */
    BlockId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetBlockListHandler返回参数结构体
 */
export interface GetBlockListHandlerResponse {
    /**
      * 总记录数
      */
    TotalCount?: number;
    /**
      * 当前群组编号
      */
    GroupPk?: string;
    /**
      * 返回数据列表
      */
    List?: Array<BcosBlockObj>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTransactionDetailForUser返回参数结构体
 */
export interface GetTransactionDetailForUserResponse {
    /**
      * 交易ID
      */
    TransactionId?: string;
    /**
      * 交易hash
      */
    TransactionHash?: string;
    /**
      * 创建交易的组织名
      */
    CreateOrgName?: string;
    /**
      * 交易类型（普通交易和配置交易）
      */
    TransactionType?: string;
    /**
      * 交易状态
      */
    TransactionStatus?: string;
    /**
      * 交易创建时间
      */
    CreateTime?: string;
    /**
      * 交易数据
      */
    TransactionData?: string;
    /**
      * 交易所在区块号
      */
    BlockId?: number;
    /**
      * 交易所在区块哈希
      */
    BlockHash?: string;
    /**
      * 交易所在区块高度
      */
    BlockHeight?: number;
    /**
      * 通道名称
      */
    ChannelName?: string;
    /**
      * 交易所在合约名称
      */
    ContractName?: string;
    /**
      * 背书组织列表
      */
    EndorserOrgList?: Array<EndorserGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * QueryChainMakerContract返回参数结构体
 */
export interface QueryChainMakerContractResponse {
    /**
      * 交易结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: ChainMakerContractResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetBcosTransByHash请求参数结构体
 */
export interface GetBcosTransByHashRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 群组编号，可在群组列表中获取
      */
    GroupId: number;
    /**
      * 交易哈希值，可以从InvokeBcosTrans接口的返回值中解析获取
      */
    TransHash: string;
}
/**
 * GetChannelListForUser返回参数结构体
 */
export interface GetChannelListForUserResponse {
    /**
      * 通道总数量
      */
    TotalCount?: number;
    /**
      * 通道列表
      */
    ChannelList?: Array<ChannelDetailForUser>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * QueryChainMakerTransaction请求参数结构体
 */
export interface QueryChainMakerTransactionRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 业务链编号，可在业务链列表中获取
      */
    ChainId: string;
    /**
      * 交易ID，通过调用合约的返回值获取
      */
    TxID: string;
}
/**
 * GetChaincodeCompileLogForUser返回参数结构体
 */
export interface GetChaincodeCompileLogForUserResponse {
    /**
      * 日志总行数，上限2000条日志
      */
    TotalCount?: number;
    /**
      * 日志列表
      */
    CompileLogList?: Array<LogDetailForUser>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeployDynamicBcosContract请求参数结构体
 */
export interface DeployDynamicBcosContractRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 群组编号，可在群组列表中获取
      */
    GroupId: number;
    /**
      * 合约编译后的ABI，可在合约详情获取
      */
    AbiInfo: string;
    /**
      * 合约编译得到的字节码，hex编码，可在合约详情获取
      */
    ByteCodeBin: string;
    /**
      * 签名用户编号，可在私钥管理页面获取
      */
    SignUserId: string;
    /**
      * 构造函数入参，Json数组，多个参数以逗号分隔（参数为数组时同理），如：["str1",["arr1","arr2"]]
      */
    ConstructorParams?: string;
}
/**
 * InvokeChainMakerContract请求参数结构体
 */
export interface InvokeChainMakerContractRequest {
    /**
      * 网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 业务链编号，可在业务链列表中获取
      */
    ChainId: string;
    /**
      * 合约名称，可在合约管理中获取
      */
    ContractName: string;
    /**
      * 合约方法名
      */
    FuncName: string;
    /**
      * 合约方法入参，json格式字符串，key/value都是string类型的map
      */
    FuncParam?: string;
    /**
      * 是否异步执行，1为是，否则为0；如果异步执行，可使用返回值中的交易TxID查询执行结果
      */
    AsyncFlag?: number;
}
/**
 * GetBcosTransList返回参数结构体
 */
export interface GetBcosTransListResponse {
    /**
      * 总记录数
      */
    TotalCount: number;
    /**
      * 返回数据列表
      */
    List: Array<BcosTransInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BlockByNumberHandler请求参数结构体
 */
export interface BlockByNumberHandlerRequest {
    /**
      * 模块名，固定字段：block
      */
    Module: string;
    /**
      * 操作名，固定字段：block_by_number
      */
    Operation: string;
    /**
      * 当前群组编号
      */
    GroupPk: string;
    /**
      * 区块高度
      */
    BlockNumber: number;
}
/**
 * Bcos区块对象
 */
export interface BcosBlockObj {
    /**
      * 区块哈希
      */
    BlockHash: string;
    /**
      * 区块高度
      */
    BlockNumber: number;
    /**
      * 区块时间戳
      */
    BlockTimestamp: string;
    /**
      * 打包节点ID
      */
    Sealer: string;
    /**
      * 打包节点索引
      */
    SealerIndex: number;
    /**
      * 记录保存时间
      */
    CreateTime: string;
    /**
      * 交易数量
      */
    TransCount: number;
    /**
      * 记录修改时间
      */
    ModifyTime: string;
}
/**
 * 通道详情信息
 */
export interface ChannelDetailForUser {
    /**
      * 通道名称
      */
    ChannelName: string;
    /**
      * 当前组织加入通道的节点列表
      */
    PeerList: Array<PeerDetailForUser>;
}
/**
 * GetTransByHashHandler请求参数结构体
 */
export interface GetTransByHashHandlerRequest {
    /**
      * 模块名，固定字段：transaction
      */
    Module: string;
    /**
      * 操作名，固定字段：get_trans_by_hash
      */
    Operation: string;
    /**
      * 群组编号
      */
    GroupPk: string;
    /**
      * 交易哈希
      */
    TransHash: string;
}
/**
 * CreateChaincodeAndInstallForUser返回参数结构体
 */
export interface CreateChaincodeAndInstallForUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetChannelListForUser请求参数结构体
 */
export interface GetChannelListForUserRequest {
    /**
      * 模块名，本接口取值：channel_mng
      */
    Module: string;
    /**
      * 操作名，本接口取值：channel_list_for_user
      */
    Operation: string;
    /**
      * 区块链网络ID，可在区块链网络详情或列表中获取
      */
    ClusterId: string;
    /**
      * 组织名称
      */
    GroupName: string;
    /**
      * 返回数据项数，本接口默认取值：10，上限取值：20
      */
    Limit?: number;
    /**
      * 返回数据起始偏移，本接口默认取值：0
      */
    Offset?: number;
}
/**
 * Query返回参数结构体
 */
export interface QueryResponse {
    /**
      * 查询结果数据
      */
    Data: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 背书组织及其节点列表
 */
export interface EndorserGroup {
    /**
      * 背书组织名称
      */
    EndorserGroupName: string;
    /**
      * 背书节点列表
      */
    EndorserPeerList: Array<string>;
}
/**
 * 交易列表项信息
 */
export interface TransactionItem {
    /**
      * 交易ID
      */
    TransactionId: string;
    /**
      * 交易hash
      */
    TransactionHash: string;
    /**
      * 创建交易的组织名
      */
    CreateOrgName: string;
    /**
      * 交易所在区块号
      */
    BlockId: number;
    /**
      * 交易类型（普通交易和配置交易）
      */
    TransactionType: string;
    /**
      * 交易创建时间
      */
    CreateTime: string;
    /**
      * 交易所在区块高度
      */
    BlockHeight: number;
    /**
      * 交易状态
      */
    TransactionStatus: string;
}

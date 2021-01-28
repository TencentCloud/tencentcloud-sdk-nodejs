/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Query请求参数结构体
 */
export interface QueryRequest {
  /**
   * 模块名，固定字段：transaction
   */
  Module: string

  /**
   * 操作名，固定字段：query
   */
  Operation: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 业务所属智能合约名称，可在智能合约详情或列表中获取
   */
  ChaincodeName: string

  /**
   * 业务所属通道名称，可在通道详情或列表中获取
   */
  ChannelName: string

  /**
   * 执行该查询交易的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称及其所属组织名称
   */
  Peers: Array<PeerSet>

  /**
   * 该笔交易查询需要调用的智能合约中的函数名称
   */
  FuncName: string

  /**
   * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string

  /**
   * 被调用的函数参数列表
   */
  Args?: Array<string>
}

/**
 * GetBlockTransactionListForUser返回参数结构体
 */
export interface GetBlockTransactionListForUserResponse {
  /**
   * 交易总数量
   */
  TotalCount?: number

  /**
   * 交易列表
   */
  TransactionList?: Array<TransactionItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendTransactionHandler返回参数结构体
 */
export interface SendTransactionHandlerResponse {
  /**
   * 交易结果json字符串
   */
  TransactionRsp?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyUserCert请求参数结构体
 */
export interface ApplyUserCertRequest {
  /**
   * 模块名，固定字段：cert_mng
   */
  Module: string

  /**
   * 操作名，固定字段：cert_apply_for_user
   */
  Operation: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 申请证书的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string

  /**
   * 用户证书标识，用于标识用户证书，要求由纯小写字母组成，长度小于10
   */
  UserIdentity: string

  /**
   * 证书申请实体，使用腾讯云账号实名认证的名称
   */
  Applicant: string

  /**
   * 证件号码。如果腾讯云账号对应的实名认证类型为企业认证，填入“0”；如果腾讯云账号对应的实名认证类型为个人认证，填入个人身份证号码
   */
  IdentityNum: string

  /**
   * csr p10证书文件。需要用户根据文档生成证书的CSR文件
   */
  CsrData: string

  /**
   * 证书备注信息
   */
  Notes?: string
}

/**
 * TransByDynamicContractHandler请求参数结构体
 */
export interface TransByDynamicContractHandlerRequest {
  /**
   * 模块名，固定字段：transaction
   */
  Module: string

  /**
   * 操作名，固定字段：trans_by_dynamic_contract
   */
  Operation: string

  /**
   * 群组编号
   */
  GroupPk: string

  /**
   * 合约地址（合约部署成功，可得到合约地址）
   */
  ContractAddress: string

  /**
   * 合约名
   */
  ContractName: string

  /**
   * 合约编译后的abi
   */
  AbiInfo: string

  /**
   * 合约被调用方法名
   */
  FuncName: string

  /**
   * 合约被调用方法的入参
   */
  FuncParam?: Array<string>
}

/**
 * GetTransListHandler返回参数结构体
 */
export interface GetTransListHandlerResponse {
  /**
   * 总记录数
   */
  TotalCount?: number

  /**
   * 当前群组编号
   */
  GroupPk?: string

  /**
   * 返回数据列表
   */
  List?: Array<BcosTransInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeployDynamicContractHandler返回参数结构体
 */
export interface DeployDynamicContractHandlerResponse {
  /**
   * 部署成功返回的合约地址
   */
  ContractAddress?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyUserCert返回参数结构体
 */
export interface ApplyUserCertResponse {
  /**
   * 证书ID
   */
  CertId?: number

  /**
   * 证书DN
   */
  CertDn?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetInvokeTx请求参数结构体
 */
export interface GetInvokeTxRequest {
  /**
   * 模块名，固定字段：transaction
   */
  Module: string

  /**
   * 操作名，固定字段：query_txid
   */
  Operation: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 业务所属通道名称，可在通道详情或列表中获取
   */
  ChannelName: string

  /**
   * 执行该查询交易的节点名称，可以在通道详情中获取该通道上的节点名称极其所属组织名称
   */
  PeerName: string

  /**
   * 执行该查询交易的节点所属组织名称，可以在通道详情中获取该通道上的节点名称极其所属组织名称
   */
  PeerGroup: string

  /**
   * 交易ID
   */
  TxId: string

  /**
   * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string
}

/**
 * Invoke返回参数结构体
 */
export interface InvokeResponse {
  /**
   * 交易ID
   */
  Txid: string

  /**
   * 交易执行结果
   */
  Events: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadUserCert返回参数结构体
 */
export interface DownloadUserCertResponse {
  /**
   * 证书名称
   */
  CertName?: string

  /**
   * 证书内容
   */
  CertCtx?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetLatesdTransactionList请求参数结构体
 */
export interface GetLatesdTransactionListRequest {
  /**
   * 模块名称，固定字段：transaction
   */
  Module: string

  /**
   * 操作名称，固定字段：latest_transaction_list
   */
  Operation: string

  /**
   * 组织ID，固定字段：0
   */
  GroupId: number

  /**
   * 通道ID，固定字段：0
   */
  ChannelId: number

  /**
   * 获取的最新交易的区块数量，取值范围1~5
   */
  LatestBlockNumber: number

  /**
   * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string

  /**
   * 需要查询的通道名称，可在通道详情或列表中获取
   */
  ChannelName: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 需要获取的起始交易偏移
   */
  Offset?: number

  /**
   * 需要获取的交易数量
   */
  Limit?: number
}

/**
 * GetTransactionDetailForUser请求参数结构体
 */
export interface GetTransactionDetailForUserRequest {
  /**
   * 模块名，固定字段：transaction
   */
  Module: string

  /**
   * 操作名，固定字段：transaction_detail_for_user
   */
  Operation: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string

  /**
   * 业务所属通道名称，可在通道详情或列表中获取
   */
  ChannelName: string

  /**
   * 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID
   */
  BlockId: number

  /**
   * 交易ID，需要查询的详情的交易ID
   */
  TransactionId: string
}

/**
 * GetBlockList返回参数结构体
 */
export interface GetBlockListResponse {
  /**
   * 区块数量
   */
  TotalCount?: number

  /**
   * 区块列表
   */
  BlockList?: Array<Block>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SrvInvoke请求参数结构体
 */
export interface SrvInvokeRequest {
  /**
   * 服务类型，iss或者dam
   */
  Service: string

  /**
   * 服务接口，要调用的方法函数名
   */
  Method: string

  /**
   * 用户自定义json字符串
   */
  Param: string
}

/**
 * BlockByNumberHandler返回参数结构体
 */
export interface BlockByNumberHandlerResponse {
  /**
   * 返回区块json字符串
   */
  BlockJson?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTransByHashHandler返回参数结构体
 */
export interface GetTransByHashHandlerResponse {
  /**
   * 交易信息json字符串
   */
  TransactionJson?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeployDynamicContractHandler请求参数结构体
 */
export interface DeployDynamicContractHandlerRequest {
  /**
   * 模块名，固定字段：contract
   */
  Module: string

  /**
   * 操作名，固定字段：deploy_dynamic_contract
   */
  Operation: string

  /**
   * 群组编号
   */
  GroupPk: string

  /**
   * 合约名称
   */
  ContractName: string

  /**
   * 合约编译后的abi
   */
  AbiInfo: string

  /**
   * 合约编译后的binary
   */
  ByteCodeBin: string

  /**
   * 构造函数入参
   */
  ConstructorParams?: Array<string>
}

/**
 * GetLatesdTransactionList返回参数结构体
 */
export interface GetLatesdTransactionListResponse {
  /**
   * 交易总数量
   */
  TotalCount?: number

  /**
   * 交易列表
   */
  TransactionList?: Array<TransactionItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadUserCert请求参数结构体
 */
export interface DownloadUserCertRequest {
  /**
   * 模块名，固定字段：cert_mng
   */
  Module: string

  /**
   * 操作名，固定字段：cert_download_for_user
   */
  Operation: string

  /**
   * 证书ID，可以在证书详情页面获取
   */
  CertId: number

  /**
   * 证书DN，可以在证书详情页面获取
   */
  CertDn: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 下载证书的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string
}

/**
 * GetClusterSummary返回参数结构体
 */
export interface GetClusterSummaryResponse {
  /**
   * 网络通道总数量
   */
  TotalChannelCount?: number

  /**
   * 当前组织创建的通道数量
   */
  MyChannelCount?: number

  /**
   * 当前组织加入的通道数量
   */
  JoinChannelCount?: number

  /**
   * 网络节点总数量
   */
  TotalPeerCount?: number

  /**
   * 当前组织创建的节点数量
   */
  MyPeerCount?: number

  /**
   * 其他组织创建的节点数量
   */
  OrderCount?: number

  /**
   * 网络组织总数量
   */
  TotalGroupCount?: number

  /**
   * 当前组织创建的组织数量
   */
  MyGroupCount?: number

  /**
   * 网络智能合约总数量
   */
  TotalChaincodeCount?: number

  /**
   * 最近7天发起的智能合约数量
   */
  RecentChaincodeCount?: number

  /**
   * 当前组织发起的智能合约数量
   */
  MyChaincodeCount?: number

  /**
   * 当前组织的证书总数量
   */
  TotalCertCount?: number

  /**
   * 颁发给当前组织的证书数量
   */
  TlsCertCount?: number

  /**
   * 网络背书节点证书数量
   */
  PeerCertCount?: number

  /**
   * 当前组织业务证书数量
   */
  ClientCertCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TransByDynamicContractHandler返回参数结构体
 */
export interface TransByDynamicContractHandlerResponse {
  /**
   * 交易结果json字符串
   */
  TransactionRsp?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PeerSet
 */
export interface PeerSet {
  /**
   * 节点名称
   */
  PeerName: string

  /**
   * 组织名称
   */
  OrgName: string
}

/**
 * GetBlockTransactionListForUser请求参数结构体
 */
export interface GetBlockTransactionListForUserRequest {
  /**
   * 模块名，固定字段：transaction
   */
  Module: string

  /**
   * 操作名，固定字段：block_transaction_list_for_user
   */
  Operation: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string

  /**
   * 业务所属通道名称，可在通道详情或列表中获取
   */
  ChannelName: string

  /**
   * 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID
   */
  BlockId: number

  /**
   * 查询的交易列表起始偏移地址
   */
  Offset?: number

  /**
   * 查询的交易列表数量
   */
  Limit?: number
}

/**
 * SrvInvoke返回参数结构体
 */
export interface SrvInvokeResponse {
  /**
   * 返回码
   */
  RetCode?: number

  /**
   * 返回消息
   */
  RetMsg?: string

  /**
   * 返回数据
   */
  Data?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetBlockListHandler请求参数结构体
 */
export interface GetBlockListHandlerRequest {
  /**
   * 模块名，固定字段：block
   */
  Module: string

  /**
   * 操作名，固定字段：get_block_list
   */
  Operation: string

  /**
   * 记录偏移数
   */
  Offset: number

  /**
   * 每页记录数
   */
  Limit: number

  /**
   * 当前群组编号
   */
  GroupPk: string

  /**
   * 区块哈希
   */
  BlockHash: string
}

/**
 * GetClusterSummary请求参数结构体
 */
export interface GetClusterSummaryRequest {
  /**
   * 模块名称，固定字段：cluster_mng
   */
  Module: string

  /**
   * 操作名称，固定字段：cluster_summary
   */
  Operation: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 组织ID，固定字段：0
   */
  GroupId: number

  /**
   * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string
}

/**
 * 区块对象
 */
export interface Block {
  /**
   * 区块编号
   */
  BlockNum: number

  /**
   * 区块数据Hash数值
   */
  DataHash: string

  /**
   * 区块ID，与区块编号一致
   */
  BlockId: number

  /**
   * 前一个区块Hash
   */
  PreHash: string

  /**
   * 区块内的交易数量
   */
  TxCount: number
}

/**
 * GetBlockList请求参数结构体
 */
export interface GetBlockListRequest {
  /**
   * 模块名称，固定字段：block
   */
  Module: string

  /**
   * 操作名称，固定字段：block_list
   */
  Operation: string

  /**
   * 通道ID，固定字段：0
   */
  ChannelId: number

  /**
   * 组织ID，固定字段：0
   */
  GroupId: number

  /**
   * 需要查询的通道名称，可在通道详情或列表中获取
   */
  ChannelName: string

  /**
   * 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 需要获取的起始交易偏移
   */
  Offset?: number

  /**
   * 需要获取的交易数量
   */
  Limit?: number
}

/**
 * Bcos交易信息对象
 */
export interface BcosTransInfo {
  /**
   * 所属区块高度
   */
  BlockNumber: number

  /**
   * 区块时间戳
   */
  BlockTimestamp: string

  /**
   * 交易哈希
   */
  TransHash: string

  /**
   * 交易发起者
   */
  TransFrom: string

  /**
   * 交易接收者
   */
  TransTo: string

  /**
   * 落库时间
   */
  CreateTime: string

  /**
   * 修改时间
   */
  ModifyTime: string
}

/**
 * Invoke请求参数结构体
 */
export interface InvokeRequest {
  /**
   * 模块名，固定字段：transaction
   */
  Module: string

  /**
   * 操作名，固定字段：invoke
   */
  Operation: string

  /**
   * 区块链网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string

  /**
   * 业务所属智能合约名称，可在智能合约详情或列表中获取
   */
  ChaincodeName: string

  /**
   * 业务所属通道名称，可在通道详情或列表中获取
   */
  ChannelName: string

  /**
   * 对该笔交易进行背书的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称及其所属组织名称
   */
  Peers: Array<PeerSet>

  /**
   * 该笔交易需要调用的智能合约中的函数名称
   */
  FuncName: string

  /**
   * 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称
   */
  GroupName: string

  /**
   * 被调用的函数参数列表，参数列表大小总和要求小于2M
   */
  Args?: Array<string>

  /**
   * 同步调用标识，可选参数，值为0或者不传表示使用同步方法调用，调用后会等待交易执行后再返回执行结果；值为1时表示使用异步方式调用Invoke，执行后会立即返回交易对应的Txid，后续需要通过GetInvokeTx这个API查询该交易的执行结果。（对于逻辑较为简单的交易，可以使用同步模式；对于逻辑较为复杂的交易，建议使用异步模式，否则容易导致API因等待时间过长，返回等待超时）
   */
  AsyncFlag?: number
}

/**
 * GetInvokeTx返回参数结构体
 */
export interface GetInvokeTxResponse {
  /**
   * 交易执行状态码
   */
  TxValidationCode?: number

  /**
   * 交易执行消息
   */
  TxValidationMsg?: string

  /**
   * 交易所在区块ID
   */
  BlockId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetBlockListHandler返回参数结构体
 */
export interface GetBlockListHandlerResponse {
  /**
   * 总记录数
   */
  TotalCount?: number

  /**
   * 当前群组编号
   */
  GroupPk?: string

  /**
   * 返回数据列表
   */
  List?: Array<BcosBlockObj>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTransactionDetailForUser返回参数结构体
 */
export interface GetTransactionDetailForUserResponse {
  /**
   * 交易ID
   */
  TransactionId?: string

  /**
   * 交易hash
   */
  TransactionHash?: string

  /**
   * 创建交易的组织名
   */
  CreateOrgName?: string

  /**
   * 交易类型（普通交易和配置交易）
   */
  TransactionType?: string

  /**
   * 交易状态
   */
  TransactionStatus?: string

  /**
   * 交易创建时间
   */
  CreateTime?: string

  /**
   * 交易数据
   */
  TransactionData?: string

  /**
   * 交易所在区块号
   */
  BlockId?: number

  /**
   * 交易所在区块哈希
   */
  BlockHash?: string

  /**
   * 交易所在区块高度
   */
  BlockHeight?: number

  /**
   * 通道名称
   */
  ChannelName?: string

  /**
   * 交易所在合约名称
   */
  ContractName?: string

  /**
   * 背书组织列表
   */
  EndorserOrgList?: Array<EndorserGroup>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTransListHandler请求参数结构体
 */
export interface GetTransListHandlerRequest {
  /**
   * 模块名，固定字段：transaction
   */
  Module: string

  /**
   * 操作名，固定字段：get_trans_list
   */
  Operation: string

  /**
   * 记录偏移量
   */
  Offset: number

  /**
   * 每页记录数
   */
  Limit: number

  /**
   * 群组编号
   */
  GroupPk: string

  /**
   * 交易哈希
   */
  TransHash?: string
}

/**
 * SendTransactionHandler请求参数结构体
 */
export interface SendTransactionHandlerRequest {
  /**
   * 模块名，固定字段：transaction
   */
  Module: string

  /**
   * 操作名，固定字段：send_transaction
   */
  Operation: string

  /**
   * 群组编号
   */
  GroupPk: string

  /**
   * 合约编号
   */
  ContractId: number

  /**
   * 合约方法名
   */
  FuncName: string

  /**
   * 合约方法入参
   */
  FuncParam?: Array<string>
}

/**
 * 交易列表项信息
 */
export interface TransactionItem {
  /**
   * 交易ID
   */
  TransactionId: string

  /**
   * 交易hash
   */
  TransactionHash: string

  /**
   * 创建交易的组织名
   */
  CreateOrgName: string

  /**
   * 交易所在区块号
   */
  BlockId: number

  /**
   * 交易类型（普通交易和配置交易）
   */
  TransactionType: string

  /**
   * 交易创建时间
   */
  CreateTime: string

  /**
   * 交易所在区块高度
   */
  BlockHeight: number

  /**
   * 交易状态
   */
  TransactionStatus: string
}

/**
 * BlockByNumberHandler请求参数结构体
 */
export interface BlockByNumberHandlerRequest {
  /**
   * 模块名，固定字段：block
   */
  Module: string

  /**
   * 操作名，固定字段：block_by_number
   */
  Operation: string

  /**
   * 当前群组编号
   */
  GroupPk: string

  /**
   * 区块高度
   */
  BlockNumber: number
}

/**
 * Bcos区块对象
 */
export interface BcosBlockObj {
  /**
   * 区块哈希
   */
  BlockHash: string

  /**
   * 区块高度
   */
  BlockNumber: number

  /**
   * 区块时间戳
   */
  BlockTimestamp: string

  /**
   * 打包节点ID
   */
  Sealer: string

  /**
   * 打包节点索引
   */
  SealerIndex: number

  /**
   * 记录保存时间
   */
  CreateTime: string

  /**
   * 交易数量
   */
  TransCount: number

  /**
   * 记录修改时间
   */
  ModifyTime: string
}

/**
 * GetTransByHashHandler请求参数结构体
 */
export interface GetTransByHashHandlerRequest {
  /**
   * 模块名，固定字段：transaction
   */
  Module: string

  /**
   * 操作名，固定字段：get_trans_by_hash
   */
  Operation: string

  /**
   * 群组编号
   */
  GroupPk: string

  /**
   * 交易哈希
   */
  TransHash: string
}

/**
 * Query返回参数结构体
 */
export interface QueryResponse {
  /**
   * 查询结果数据
   */
  Data: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 背书组织及其节点列表
 */
export interface EndorserGroup {
  /**
   * 背书组织名称
   */
  EndorserGroupName: string

  /**
   * 背书节点列表
   */
  EndorserPeerList: Array<string>
}

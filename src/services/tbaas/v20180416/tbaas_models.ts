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
 * QueryChainMakerDemoBlockTransaction返回参数结构体
 */
export interface QueryChainMakerDemoBlockTransactionResponse {
  /**
   * 区块交易
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: Array<ChainMakerTransactionResult>
  /**
   * 区块高度
   */
  BlockHeight?: number
  /**
   * 交易数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TxCount?: number
  /**
   * 区块时间戳，单位是秒
   */
  BlockTimestamp?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFabricTransaction返回参数结构体
 */
export interface DescribeFabricTransactionResponse {
  /**
   * 交易ID
   */
  TxId?: string
  /**
   * 交易Hash
   */
  TxHash?: string
  /**
   * 交易状态
   */
  TxStatus?: string
  /**
   * 参与的组织列表
   */
  JoinOrgList?: Array<string>
  /**
   * 交易发送者
   */
  Sender?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 区块高度
   */
  BlockHeight?: number
  /**
   * 交易所属合约
   */
  ChaincodeName?: string
  /**
   * 交易数据，base64编码，解码后为json化的字符串
   */
  TransactionData?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChainMakerBlockTransaction请求参数结构体
 */
export interface QueryChainMakerBlockTransactionRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 业务链ID，可在网络概览页获取
   */
  ChainId: string
  /**
   * 区块高度
   */
  BlockHeight: number
}

/**
 * GetBlockTransactionListForUser返回参数结构体
 */
export interface GetBlockTransactionListForUserResponse {
  /**
   * 交易总数量
   */
  TotalCount: number
  /**
   * 交易列表
   */
  TransactionList: Array<TransactionItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyChainMakerBatchUserCert返回参数结构体
 */
export interface ApplyChainMakerBatchUserCertResponse {
  /**
   * 成功生成的用户证书的base64编码字符串列表，与SignUserCsrList一一对应
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignUserCrtList: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 执行该查询交易的节点名称，可以在通道详情中获取该通道上的节点名称及其所属组织名称
   */
  PeerName: string
  /**
   * 执行该查询交易的节点所属组织名称，可以在通道详情中获取该通道上的节点名称及其所属组织名称
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
 * InvokeFabricChaincode返回参数结构体
 */
export interface InvokeFabricChaincodeResponse {
  /**
   * 交易ID
   */
  TxId?: string
  /**
   * 交易状态
   */
  TxStatus?: string
  /**
   * 交易结果
   */
  TxResult?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于申请用户签名证书的结构体
 */
export interface SignCertCsr {
  /**
   * 用户签名证书的标识，会存在于用户申请的证书中
   */
  CertMark: string
  /**
   * 用户申请签名证书所需要的证书请求文件的base64编码
   */
  SignCsrContent: string
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
   * @deprecated
   */
  CertCtx?: string
  /**
   * 证书内容
   */
  Cert?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * Invoke返回参数结构体
 */
export interface InvokeResponse {
  /**
   * 交易ID
   * @deprecated
   */
  Txid?: string
  /**
   * 交易执行结果
   */
  Events?: string
  /**
   * 交易ID
   */
  TxId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryFabricChaincode返回参数结构体
 */
export interface QueryFabricChaincodeResponse {
  /**
   * 交易ID
   */
  TxId?: string
  /**
   * 交易状态
   */
  TxStatus?: string
  /**
   * 交易结果
   */
  TxResult?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 交易列表项信息
 */
export interface TransactionItem {
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
   * 交易所在区块号
   */
  BlockId?: number
  /**
   * 交易类型（普通交易和配置交易）
   */
  TransactionType?: string
  /**
   * 交易创建时间
   */
  CreateTime?: string
  /**
   * 交易所在区块高度
   */
  BlockHeight?: number
  /**
   * 交易状态
   */
  TransactionStatus?: string
}

/**
 * InvokeChainMakerDemoContract请求参数结构体
 */
export interface InvokeChainMakerDemoContractRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 业务链ID，可在网络概览页获取
   */
  ChainId: string
  /**
   * 合约名称，可在合约管理中获取
   */
  ContractName: string
  /**
   * 合约方法名
   */
  FuncName: string
  /**
   * 合约方法入参，json格式字符串，key/value都是string类型的map
   */
  FuncParam?: string
  /**
   * 是否异步执行，1为是，否则为0；如果异步执行，可使用返回值中的交易TxID查询执行结果
   */
  AsyncFlag?: number
}

/**
 * InvokeChainMakerContract返回参数结构体
 */
export interface InvokeChainMakerContractResponse {
  /**
   * 交易结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: ChainMakerContractResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChainMakerTransaction请求参数结构体
 */
export interface QueryChainMakerTransactionRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 业务链ID，可在网络概览页获取
   */
  ChainId: string
  /**
   * 交易ID，通过调用合约的返回值获取
   */
  TxID: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChainMakerTransaction返回参数结构体
 */
export interface QueryChainMakerTransactionResponse {
  /**
   * 交易结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: ChainMakerTransactionResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChainMakerDemoContract返回参数结构体
 */
export interface QueryChainMakerDemoContractResponse {
  /**
   * 交易结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: ChainMakerContractResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 长安链交易查询结果
 */
export interface ChainMakerTransactionResult {
  /**
   * 交易结果码
   */
  Code?: number
  /**
   * 交易结果码含义
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeMessage?: string
  /**
   * 交易ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TxId?: string
  /**
   * Gas使用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  GasUsed?: number
  /**
   * 区块高度
注意：此字段可能返回 null，表示取不到有效值。
   */
  BlockHeight?: number
  /**
   * 合约执行结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContractEvent?: string
  /**
   * 合约返回信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 交易时间，单位是秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: number
}

/**
 * GetLatestTransactionList请求参数结构体
 */
export interface GetLatestTransactionListRequest {
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
 * DescribeFabricBlock返回参数结构体
 */
export interface DescribeFabricBlockResponse {
  /**
   * 区块高度
   */
  BlockHeight?: number
  /**
   * 区块Hash
   */
  BlockHash?: string
  /**
   * 前置区块Hash
   */
  PreBlockHash?: string
  /**
   * 区块中交易数量
   */
  TxCount?: number
  /**
   * 区块中交易列表
   */
  TransactionList?: Array<Transaction>
  /**
   * 创建时间戳
   */
  CreateTimestamp?: string
  /**
   * 提案组织
   */
  ProposerOrg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChainMakerDemoContract请求参数结构体
 */
export interface QueryChainMakerDemoContractRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 业务链ID，可在网络概览页获取
   */
  ChainId: string
  /**
   * 合约名称，可在合约管理中获取
   */
  ContractName: string
  /**
   * 合约方法名
   */
  FuncName: string
  /**
   * 合约方法入参，json格式字符串，key/value都是string类型的map
   */
  FuncParam?: string
}

/**
 * QueryChainMakerDemoTransaction返回参数结构体
 */
export interface QueryChainMakerDemoTransactionResponse {
  /**
   * 交易结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: ChainMakerTransactionResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyChainMakerBatchUserCert请求参数结构体
 */
export interface ApplyChainMakerBatchUserCertRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 证书标识和证书请求文件，可参考TBaaS证书生成相关文档生成证书请求文件
   */
  SignUserCsrList: Array<SignCertCsr>
}

/**
 * QueryChainMakerDemoTransaction请求参数结构体
 */
export interface QueryChainMakerDemoTransactionRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 业务链ID，可在网络概览页获取
   */
  ChainId: string
  /**
   * 交易ID，通过调用合约的返回值获取
   */
  TxID: string
}

/**
 * DescribeFabricTransaction请求参数结构体
 */
export interface DescribeFabricTransactionRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 通道ID，可在通道列表或通道详情获取
   */
  ChannelId: string
  /**
   * 交易ID
   */
  TxId: string
}

/**
 * 长安链合约执行结果
 */
export interface ChainMakerContractResult {
  /**
   * 交易结果码
   */
  Code?: number
  /**
   * 交易结果码含义
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeMessage?: string
  /**
   * 交易ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TxId?: string
  /**
   * Gas使用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  GasUsed?: number
  /**
   * 合约返回消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 合约函数返回，base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: string
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
  BlockNum?: number
  /**
   * 区块数据Hash数值
   */
  DataHash?: string
  /**
   * 区块ID，与区块编号一致
   */
  BlockId?: number
  /**
   * 前一个区块Hash
   */
  PreHash?: string
  /**
   * 区块内的交易数量
   */
  TxCount?: number
}

/**
 * DescribeFabricBlock请求参数结构体
 */
export interface DescribeFabricBlockRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 通道ID，可在通道列表或通道详情获取
   */
  ChannelId: string
  /**
   * 区块高度，从0开始
   */
  BlockHeight: number
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
 * QueryFabricChaincode请求参数结构体
 */
export interface QueryFabricChaincodeRequest {
  /**
   * 网络ID，可在区块链网络详情获取
   */
  ClusterId: string
  /**
   * 通道ID，可在通道列表或通道详情获取
   */
  ChannelId: string
  /**
   * 合约名称，可在合约列表或合约详情获取
   */
  ChaincodeName: string
  /**
   * 合约方法
   */
  FuncName: string
  /**
   * 合约方法入参
   */
  FuncParam?: Array<string>
}

/**
 * InvokeFabricChaincode请求参数结构体
 */
export interface InvokeFabricChaincodeRequest {
  /**
   * 网络ID，可在区块链网络详情获取
   */
  ClusterId: string
  /**
   * 通道ID，可在通道列表或通道详情获取
   */
  ChannelId: string
  /**
   * 合约名称，可在合约列表或合约详情获取
   */
  ChaincodeName: string
  /**
   * 合约方法
   */
  FuncName: string
  /**
   * 合约方法入参
   */
  FuncParam?: Array<string>
  /**
   * 是否异步执行，如果异步执行，可使用返回值中的交易TxID查询执行结果
   */
  WithAsyncResult?: boolean
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
  TxValidationCode: number
  /**
   * 交易执行消息
   */
  TxValidationMsg: string
  /**
   * 交易所在区块ID
   */
  BlockId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChainMakerContract返回参数结构体
 */
export interface QueryChainMakerContractResponse {
  /**
   * 交易结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: ChainMakerContractResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InvokeChainMakerContract请求参数结构体
 */
export interface InvokeChainMakerContractRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 业务链ID，可在网络概览页获取
   */
  ChainId: string
  /**
   * 合约名称，可在合约管理中获取
   */
  ContractName: string
  /**
   * 合约方法名
   */
  FuncName: string
  /**
   * 合约方法入参，json格式字符串，key/value都是string类型的map
   */
  FuncParam?: string
  /**
   * 是否异步执行，1为是，否则为0；如果异步执行，可使用返回值中的交易TxID查询执行结果
   */
  AsyncFlag?: number
}

/**
 * QueryChainMakerContract请求参数结构体
 */
export interface QueryChainMakerContractRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 业务链ID，可在网络概览页获取
   */
  ChainId: string
  /**
   * 合约名称，可在合约管理中获取
   */
  ContractName: string
  /**
   * 合约方法名
   */
  FuncName: string
  /**
   * 合约方法入参，json格式字符串，key/value都是string类型的map
   */
  FuncParam?: string
}

/**
 * GetLatestTransactionList返回参数结构体
 */
export interface GetLatestTransactionListResponse {
  /**
   * 交易总数量
   */
  TotalCount?: number
  /**
   * 交易列表
   */
  TransactionList?: Array<TransactionItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChainMakerDemoBlockTransaction请求参数结构体
 */
export interface QueryChainMakerDemoBlockTransactionRequest {
  /**
   * 网络ID，可在区块链网络详情或列表中获取
   */
  ClusterId: string
  /**
   * 业务链ID，可在网络概览页获取
   */
  ChainId: string
  /**
   * 区块高度
   */
  BlockHeight: number
}

/**
 * 交易显示概述信息
 */
export interface Transaction {
  /**
   * 交易ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TxId?: string
  /**
   * 合约名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChaincodeName?: string
  /**
   * 交易发送者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sender?: string
  /**
   * 交易创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 交易所在区块高度
注意：此字段可能返回 null，表示取不到有效值。
   */
  BlockHeight?: number
  /**
   * 交易在区块中的序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  TxIndex?: number
}

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
 * QueryChainMakerBlockTransaction返回参数结构体
 */
export interface QueryChainMakerBlockTransactionResponse {
  /**
   * 区块交易
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: Array<ChainMakerTransactionResult>
  /**
   * 区块高度
   */
  BlockHeight?: number
  /**
   * 交易数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TxCount?: number
  /**
   * 区块时间戳，单位是秒
   */
  BlockTimestamp?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InvokeChainMakerDemoContract返回参数结构体
 */
export interface InvokeChainMakerDemoContractResponse {
  /**
   * 交易结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: ChainMakerContractResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  EndorserGroupName?: string
  /**
   * 背书节点列表
   */
  EndorserPeerList?: Array<string>
}

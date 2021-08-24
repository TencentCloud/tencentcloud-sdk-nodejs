/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  PeerDetailForUser,
  GetBcosTransListRequest,
  QueryRequest,
  QueryChainMakerContractRequest,
  DeployDynamicBcosContractResponse,
  GetClusterListForUserResponse,
  SendTransactionHandlerRequest,
  GetBlockTransactionListForUserResponse,
  SendTransactionHandlerResponse,
  ApplyUserCertRequest,
  TransByDynamicContractHandlerRequest,
  GetTransListHandlerResponse,
  InvokeBcosTransRequest,
  GetChaincodeInitializeResultForUserRequest,
  InitializeChaincodeForUserRequest,
  DeployDynamicContractHandlerResponse,
  SrvInvokeRequest,
  ApplyUserCertResponse,
  GetChaincodeCompileLogForUserRequest,
  GetBcosBlockByNumberRequest,
  GetPeerLogForUserResponse,
  GetBcosBlockListResponse,
  DownloadUserCertResponse,
  QueryChainMakerBlockTransactionRequest,
  GetChaincodeLogForUserRequest,
  GetLatesdTransactionListRequest,
  InvokeResponse,
  GetTransactionDetailForUserRequest,
  GetBlockListResponse,
  GetBlockTransactionListForUserRequest,
  QueryChainMakerBlockTransactionResponse,
  GetBcosBlockListRequest,
  GetClusterSummaryRequest,
  BlockByNumberHandlerResponse,
  GetTransListHandlerRequest,
  InvokeChainMakerContractResponse,
  GetTransByHashHandlerResponse,
  GetInvokeTxRequest,
  DeployDynamicContractHandlerRequest,
  ClusterDetailForUser,
  GetPeerLogForUserRequest,
  GetLatesdTransactionListResponse,
  QueryChainMakerTransactionResponse,
  DownloadUserCertRequest,
  GetClusterSummaryResponse,
  TransByDynamicContractHandlerResponse,
  PeerSet,
  ChainMakerTransactionResult,
  CreateChaincodeAndInstallForUserRequest,
  SrvInvokeResponse,
  GetBcosTransByHashResponse,
  GetBlockListHandlerRequest,
  GetChaincodeLogForUserResponse,
  LogDetailForUser,
  InvokeBcosTransResponse,
  InitializeChaincodeForUserResponse,
  GroupDetailForUser,
  GetBcosBlockByNumberResponse,
  ChainMakerContractResult,
  GetClusterListForUserRequest,
  Block,
  GetBlockListRequest,
  BcosTransInfo,
  GetChaincodeInitializeResultForUserResponse,
  InvokeRequest,
  GetInvokeTxResponse,
  GetBlockListHandlerResponse,
  GetTransactionDetailForUserResponse,
  QueryChainMakerContractResponse,
  GetBcosTransByHashRequest,
  GetChannelListForUserResponse,
  QueryChainMakerTransactionRequest,
  GetChaincodeCompileLogForUserResponse,
  DeployDynamicBcosContractRequest,
  InvokeChainMakerContractRequest,
  GetBcosTransListResponse,
  BlockByNumberHandlerRequest,
  BcosBlockObj,
  ChannelDetailForUser,
  GetTransByHashHandlerRequest,
  CreateChaincodeAndInstallForUserResponse,
  GetChannelListForUserRequest,
  QueryResponse,
  EndorserGroup,
  TransactionItem,
} from "./tbaas_models"

/**
 * tbaas client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tbaas.tencentcloudapi.com", "2018-04-16", clientConfig)
  }

  /**
   * 执行Bcos交易，支持动态部署的合约
   */
  async InvokeBcosTrans(
    req: InvokeBcosTransRequest,
    cb?: (error: string, rep: InvokeBcosTransResponse) => void
  ): Promise<InvokeBcosTransResponse> {
    return this.request("InvokeBcosTrans", req, cb)
  }

  /**
   * 通过交易ID查询长安链交易
   */
  async QueryChainMakerTransaction(
    req: QueryChainMakerTransactionRequest,
    cb?: (error: string, rep: QueryChainMakerTransactionResponse) => void
  ): Promise<QueryChainMakerTransactionResponse> {
    return this.request("QueryChainMakerTransaction", req, cb)
  }

  /**
   * 使用块高查询Bcos区块信息
   */
  async GetBcosBlockByNumber(
    req: GetBcosBlockByNumberRequest,
    cb?: (error: string, rep: GetBcosBlockByNumberResponse) => void
  ): Promise<GetBcosBlockByNumberResponse> {
    return this.request("GetBcosBlockByNumber", req, cb)
  }

  /**
   * 调用长安链合约查询
   */
  async QueryChainMakerContract(
    req: QueryChainMakerContractRequest,
    cb?: (error: string, rep: QueryChainMakerContractResponse) => void
  ): Promise<QueryChainMakerContractResponse> {
    return this.request("QueryChainMakerContract", req, cb)
  }

  /**
   * 获取合约容器日志
   */
  async GetChaincodeLogForUser(
    req: GetChaincodeLogForUserRequest,
    cb?: (error: string, rep: GetChaincodeLogForUserResponse) => void
  ): Promise<GetChaincodeLogForUserResponse> {
    return this.request("GetChaincodeLogForUser", req, cb)
  }

  /**
   * Bcos根据交易哈希查看交易详细信息
   */
  async GetBcosTransByHash(
    req: GetBcosTransByHashRequest,
    cb?: (error: string, rep: GetBcosTransByHashResponse) => void
  ): Promise<GetBcosTransByHashResponse> {
    return this.request("GetBcosTransByHash", req, cb)
  }

  /**
   * 获取该用户的网络列表。网络信息中包含组织信息，但仅包含该用户所在组织的信息。
   */
  async GetClusterListForUser(
    req: GetClusterListForUserRequest,
    cb?: (error: string, rep: GetClusterListForUserResponse) => void
  ): Promise<GetClusterListForUserResponse> {
    return this.request("GetClusterListForUser", req, cb)
  }

  /**
   * Bcos分页查询当前群组下的区块列表
   */
  async GetBcosBlockList(
    req: GetBcosBlockListRequest,
    cb?: (error: string, rep: GetBcosBlockListResponse) => void
  ): Promise<GetBcosBlockListResponse> {
    return this.request("GetBcosBlockList", req, cb)
  }

  /**
   * 获取交易详情
   */
  async GetTransactionDetailForUser(
    req: GetTransactionDetailForUserRequest,
    cb?: (error: string, rep: GetTransactionDetailForUserResponse) => void
  ): Promise<GetTransactionDetailForUserResponse> {
    return this.request("GetTransactionDetailForUser", req, cb)
  }

  /**
     * 版本升级

Bcos分页查询当前群组的交易信息列表
     */
  async GetTransListHandler(
    req: GetTransListHandlerRequest,
    cb?: (error: string, rep: GetTransListHandlerResponse) => void
  ): Promise<GetTransListHandlerResponse> {
    return this.request("GetTransListHandler", req, cb)
  }

  /**
   * 新增交易
   */
  async Invoke(
    req: InvokeRequest,
    cb?: (error: string, rep: InvokeResponse) => void
  ): Promise<InvokeResponse> {
    return this.request("Invoke", req, cb)
  }

  /**
   * 获取区块链网络概要
   */
  async GetClusterSummary(
    req: GetClusterSummaryRequest,
    cb?: (error: string, rep: GetClusterSummaryResponse) => void
  ): Promise<GetClusterSummaryResponse> {
    return this.request("GetClusterSummary", req, cb)
  }

  /**
   * 获取节点日志
   */
  async GetPeerLogForUser(
    req: GetPeerLogForUserRequest,
    cb?: (error: string, rep: GetPeerLogForUserResponse) => void
  ): Promise<GetPeerLogForUserResponse> {
    return this.request("GetPeerLogForUser", req, cb)
  }

  /**
   * 动态部署并发布Bcos合约
   */
  async DeployDynamicBcosContract(
    req: DeployDynamicBcosContractRequest,
    cb?: (error: string, rep: DeployDynamicBcosContractResponse) => void
  ): Promise<DeployDynamicBcosContractResponse> {
    return this.request("DeployDynamicBcosContract", req, cb)
  }

  /**
   * 下载用户证书
   */
  async DownloadUserCert(
    req: DownloadUserCertRequest,
    cb?: (error: string, rep: DownloadUserCertResponse) => void
  ): Promise<DownloadUserCertResponse> {
    return this.request("DownloadUserCert", req, cb)
  }

  /**
   * 创建并安装合约
   */
  async CreateChaincodeAndInstallForUser(
    req: CreateChaincodeAndInstallForUserRequest,
    cb?: (error: string, rep: CreateChaincodeAndInstallForUserResponse) => void
  ): Promise<CreateChaincodeAndInstallForUserResponse> {
    return this.request("CreateChaincodeAndInstallForUser", req, cb)
  }

  /**
     * 版本升级

Bcos根据交易哈希查看交易详细信息
     */
  async GetTransByHashHandler(
    req: GetTransByHashHandlerRequest,
    cb?: (error: string, rep: GetTransByHashHandlerResponse) => void
  ): Promise<GetTransByHashHandlerResponse> {
    return this.request("GetTransByHashHandler", req, cb)
  }

  /**
   * 获取最新交易列表
   */
  async GetLatesdTransactionList(
    req: GetLatesdTransactionListRequest,
    cb?: (error: string, rep: GetLatesdTransactionListResponse) => void
  ): Promise<GetLatesdTransactionListResponse> {
    return this.request("GetLatesdTransactionList", req, cb)
  }

  /**
   * 申请用户证书
   */
  async ApplyUserCert(
    req: ApplyUserCertRequest,
    cb?: (error: string, rep: ApplyUserCertResponse) => void
  ): Promise<ApplyUserCertResponse> {
    return this.request("ApplyUserCert", req, cb)
  }

  /**
   * 调用长安链合约执行交易
   */
  async InvokeChainMakerContract(
    req: InvokeChainMakerContractRequest,
    cb?: (error: string, rep: InvokeChainMakerContractResponse) => void
  ): Promise<InvokeChainMakerContractResponse> {
    return this.request("InvokeChainMakerContract", req, cb)
  }

  /**
     * 版本升级

Bcos根据块高查询区块信息
     */
  async BlockByNumberHandler(
    req: BlockByNumberHandlerRequest,
    cb?: (error: string, rep: BlockByNumberHandlerResponse) => void
  ): Promise<BlockByNumberHandlerResponse> {
    return this.request("BlockByNumberHandler", req, cb)
  }

  /**
   * Invoke异步调用结果查询
   */
  async GetInvokeTx(
    req: GetInvokeTxRequest,
    cb?: (error: string, rep: GetInvokeTxResponse) => void
  ): Promise<GetInvokeTxResponse> {
    return this.request("GetInvokeTx", req, cb)
  }

  /**
   * 实例化结果查询
   */
  async GetChaincodeInitializeResultForUser(
    req: GetChaincodeInitializeResultForUserRequest,
    cb?: (error: string, rep: GetChaincodeInitializeResultForUserResponse) => void
  ): Promise<GetChaincodeInitializeResultForUserResponse> {
    return this.request("GetChaincodeInitializeResultForUser", req, cb)
  }

  /**
   * 获取通道列表
   */
  async GetChannelListForUser(
    req: GetChannelListForUserRequest,
    cb?: (error: string, rep: GetChannelListForUserResponse) => void
  ): Promise<GetChannelListForUserResponse> {
    return this.request("GetChannelListForUser", req, cb)
  }

  /**
   * 查询长安链指定高度区块的交易
   */
  async QueryChainMakerBlockTransaction(
    req: QueryChainMakerBlockTransactionRequest,
    cb?: (error: string, rep: QueryChainMakerBlockTransactionResponse) => void
  ): Promise<QueryChainMakerBlockTransactionResponse> {
    return this.request("QueryChainMakerBlockTransaction", req, cb)
  }

  /**
   * 实例化合约
   */
  async InitializeChaincodeForUser(
    req: InitializeChaincodeForUserRequest,
    cb?: (error: string, rep: InitializeChaincodeForUserResponse) => void
  ): Promise<InitializeChaincodeForUserResponse> {
    return this.request("InitializeChaincodeForUser", req, cb)
  }

  /**
     * 版本升级

动态部署合约
     */
  async DeployDynamicContractHandler(
    req: DeployDynamicContractHandlerRequest,
    cb?: (error: string, rep: DeployDynamicContractHandlerResponse) => void
  ): Promise<DeployDynamicContractHandlerResponse> {
    return this.request("DeployDynamicContractHandler", req, cb)
  }

  /**
   * trustsql服务统一接口
   */
  async SrvInvoke(
    req: SrvInvokeRequest,
    cb?: (error: string, rep: SrvInvokeResponse) => void
  ): Promise<SrvInvokeResponse> {
    return this.request("SrvInvoke", req, cb)
  }

  /**
   * Bcos分页查询当前群组的交易信息列表
   */
  async GetBcosTransList(
    req: GetBcosTransListRequest,
    cb?: (error: string, rep: GetBcosTransListResponse) => void
  ): Promise<GetBcosTransListResponse> {
    return this.request("GetBcosTransList", req, cb)
  }

  /**
     * 版本升级

根据动态部署的合约发送交易
     */
  async TransByDynamicContractHandler(
    req: TransByDynamicContractHandlerRequest,
    cb?: (error: string, rep: TransByDynamicContractHandlerResponse) => void
  ): Promise<TransByDynamicContractHandlerResponse> {
    return this.request("TransByDynamicContractHandler", req, cb)
  }

  /**
     * 版本升级

Bcos发送交易
     */
  async SendTransactionHandler(
    req: SendTransactionHandlerRequest,
    cb?: (error: string, rep: SendTransactionHandlerResponse) => void
  ): Promise<SendTransactionHandlerResponse> {
    return this.request("SendTransactionHandler", req, cb)
  }

  /**
   * 获取合约编译日志
   */
  async GetChaincodeCompileLogForUser(
    req: GetChaincodeCompileLogForUserRequest,
    cb?: (error: string, rep: GetChaincodeCompileLogForUserResponse) => void
  ): Promise<GetChaincodeCompileLogForUserResponse> {
    return this.request("GetChaincodeCompileLogForUser", req, cb)
  }

  /**
   * 获取区块内的交易列表
   */
  async GetBlockTransactionListForUser(
    req: GetBlockTransactionListForUserRequest,
    cb?: (error: string, rep: GetBlockTransactionListForUserResponse) => void
  ): Promise<GetBlockTransactionListForUserResponse> {
    return this.request("GetBlockTransactionListForUser", req, cb)
  }

  /**
   * 查看当前网络下的所有区块列表，分页展示
   */
  async GetBlockList(
    req: GetBlockListRequest,
    cb?: (error: string, rep: GetBlockListResponse) => void
  ): Promise<GetBlockListResponse> {
    return this.request("GetBlockList", req, cb)
  }

  /**
   * 查询交易
   */
  async Query(
    req: QueryRequest,
    cb?: (error: string, rep: QueryResponse) => void
  ): Promise<QueryResponse> {
    return this.request("Query", req, cb)
  }

  /**
     * 版本升级

Bcos分页查询当前群组下的区块列表
     */
  async GetBlockListHandler(
    req: GetBlockListHandlerRequest,
    cb?: (error: string, rep: GetBlockListHandlerResponse) => void
  ): Promise<GetBlockListHandlerResponse> {
    return this.request("GetBlockListHandler", req, cb)
  }
}

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
  QueryChainMakerDemoBlockTransactionResponse,
  DescribeFabricTransactionResponse,
  QueryChainMakerBlockTransactionRequest,
  GetBlockTransactionListForUserResponse,
  ApplyChainMakerBatchUserCertResponse,
  ApplyUserCertRequest,
  SrvInvokeResponse,
  GetTransactionDetailForUserResponse,
  SrvInvokeRequest,
  ApplyUserCertResponse,
  GetInvokeTxRequest,
  InvokeFabricChaincodeResponse,
  SignCertCsr,
  DownloadUserCertResponse,
  GetLatesdTransactionListRequest,
  InvokeResponse,
  QueryFabricChaincodeResponse,
  GetTransactionDetailForUserRequest,
  GetBlockListResponse,
  GetBlockTransactionListForUserRequest,
  TransactionItem,
  InvokeChainMakerDemoContractRequest,
  InvokeChainMakerContractResponse,
  QueryChainMakerTransactionRequest,
  GetLatesdTransactionListResponse,
  QueryChainMakerTransactionResponse,
  DownloadUserCertRequest,
  GetClusterSummaryResponse,
  QueryChainMakerDemoContractResponse,
  PeerSet,
  ChainMakerTransactionResult,
  GetLatestTransactionListRequest,
  DescribeFabricBlockResponse,
  QueryChainMakerDemoContractRequest,
  QueryChainMakerDemoTransactionResponse,
  ApplyChainMakerBatchUserCertRequest,
  QueryChainMakerDemoTransactionRequest,
  DescribeFabricTransactionRequest,
  ChainMakerContractResult,
  GetClusterSummaryRequest,
  Block,
  DescribeFabricBlockRequest,
  GetBlockListRequest,
  QueryFabricChaincodeRequest,
  InvokeFabricChaincodeRequest,
  InvokeRequest,
  GetInvokeTxResponse,
  QueryChainMakerContractResponse,
  InvokeChainMakerContractRequest,
  QueryChainMakerContractRequest,
  GetLatestTransactionListResponse,
  QueryChainMakerDemoBlockTransactionRequest,
  Transaction,
  QueryRequest,
  QueryChainMakerBlockTransactionResponse,
  InvokeChainMakerDemoContractResponse,
  QueryResponse,
  EndorserGroup,
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
   * 通过交易ID查询长安链交易
   */
  async QueryChainMakerTransaction(
    req: QueryChainMakerTransactionRequest,
    cb?: (error: string, rep: QueryChainMakerTransactionResponse) => void
  ): Promise<QueryChainMakerTransactionResponse> {
    return this.request("QueryChainMakerTransaction", req, cb)
  }

  /**
   * 批量申请长安链用户签名证书
   */
  async ApplyChainMakerBatchUserCert(
    req: ApplyChainMakerBatchUserCertRequest,
    cb?: (error: string, rep: ApplyChainMakerBatchUserCertResponse) => void
  ): Promise<ApplyChainMakerBatchUserCertResponse> {
    return this.request("ApplyChainMakerBatchUserCert", req, cb)
  }

  /**
   * 通过交易ID查询长安链体验网络交易
   */
  async QueryChainMakerDemoTransaction(
    req: QueryChainMakerDemoTransactionRequest,
    cb?: (error: string, rep: QueryChainMakerDemoTransactionResponse) => void
  ): Promise<QueryChainMakerDemoTransactionResponse> {
    return this.request("QueryChainMakerDemoTransaction", req, cb)
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
   * 查询长安链体验网络指定高度区块的交易
   */
  async QueryChainMakerDemoBlockTransaction(
    req: QueryChainMakerDemoBlockTransactionRequest,
    cb?: (error: string, rep: QueryChainMakerDemoBlockTransactionResponse) => void
  ): Promise<QueryChainMakerDemoBlockTransactionResponse> {
    return this.request("QueryChainMakerDemoBlockTransaction", req, cb)
  }

  /**
   * 获取Fabric某区块的详细信息
   */
  async DescribeFabricBlock(
    req: DescribeFabricBlockRequest,
    cb?: (error: string, rep: DescribeFabricBlockResponse) => void
  ): Promise<DescribeFabricBlockResponse> {
    return this.request("DescribeFabricBlock", req, cb)
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
   * 获取fabric最新交易列表
   */
  async GetLatestTransactionList(
    req: GetLatestTransactionListRequest,
    cb?: (error: string, rep: GetLatestTransactionListResponse) => void
  ): Promise<GetLatestTransactionListResponse> {
    return this.request("GetLatestTransactionList", req, cb)
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
   * 获取最新交易列表（已废弃）
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
   * Invoke异步调用结果查询
   */
  async GetInvokeTx(
    req: GetInvokeTxRequest,
    cb?: (error: string, rep: GetInvokeTxResponse) => void
  ): Promise<GetInvokeTxResponse> {
    return this.request("GetInvokeTx", req, cb)
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
   * 调用长安链体验网络合约查询
   */
  async QueryChainMakerDemoContract(
    req: QueryChainMakerDemoContractRequest,
    cb?: (error: string, rep: QueryChainMakerDemoContractResponse) => void
  ): Promise<QueryChainMakerDemoContractResponse> {
    return this.request("QueryChainMakerDemoContract", req, cb)
  }

  /**
   * 获取交易的详情
   */
  async GetTransactionDetailForUser(
    req: GetTransactionDetailForUserRequest,
    cb?: (error: string, rep: GetTransactionDetailForUserResponse) => void
  ): Promise<GetTransactionDetailForUserResponse> {
    return this.request("GetTransactionDetailForUser", req, cb)
  }

  /**
   * 调用Fabric用户合约查询
   */
  async QueryFabricChaincode(
    req: QueryFabricChaincodeRequest,
    cb?: (error: string, rep: QueryFabricChaincodeResponse) => void
  ): Promise<QueryFabricChaincodeResponse> {
    return this.request("QueryFabricChaincode", req, cb)
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
   * 获取Fabric交易的详细信息
   */
  async DescribeFabricTransaction(
    req: DescribeFabricTransactionRequest,
    cb?: (error: string, rep: DescribeFabricTransactionResponse) => void
  ): Promise<DescribeFabricTransactionResponse> {
    return this.request("DescribeFabricTransaction", req, cb)
  }

  /**
   * 调用长安链体验网络合约执行交易
   */
  async InvokeChainMakerDemoContract(
    req: InvokeChainMakerDemoContractRequest,
    cb?: (error: string, rep: InvokeChainMakerDemoContractResponse) => void
  ): Promise<InvokeChainMakerDemoContractResponse> {
    return this.request("InvokeChainMakerDemoContract", req, cb)
  }

  /**
   * 获取区块内交易列表
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
   * 调用Fabric用户合约执行交易
   */
  async InvokeFabricChaincode(
    req: InvokeFabricChaincodeRequest,
    cb?: (error: string, rep: InvokeFabricChaincodeResponse) => void
  ): Promise<InvokeFabricChaincodeResponse> {
    return this.request("InvokeFabricChaincode", req, cb)
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
}

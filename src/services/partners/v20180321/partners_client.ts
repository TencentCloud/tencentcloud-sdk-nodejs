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
  AgentClientElem,
  DescribeAgentDealsCacheRequest,
  DescribeSalesmansRequest,
  DescribeAgentAuditedClientsRequest,
  RemovePayRelationForClientRequest,
  AgentPayDealsRequest,
  DescribeAgentClientGradeResponse,
  DescribeAgentDealsByCacheResponse,
  RebateInfoElem,
  DescribeClientBalanceResponse,
  DescribeAgentSelfPayDealsResponse,
  DescribeAgentPayDealsV2Response,
  AgentTransferMoneyRequest,
  DescribeClientBalanceRequest,
  DescribeAgentPayDealsV2Request,
  ProductInfoElem,
  UnbindClientElem,
  RemovePayRelationForClientResponse,
  DescribeRebateInfosRequest,
  CreatePayRelationForClientResponse,
  DescribeAgentAuditedClientsResponse,
  DescribeAgentBillsResponse,
  DescribeAgentPayDealsRequest,
  AuditApplyClientRequest,
  ModifyClientRemarkResponse,
  DescribeAgentClientsResponse,
  AgentDealNewElem,
  DescribeAgentClientsRequest,
  DescribeAgentSelfPayDealsV2Request,
  DescribeSalesmansResponse,
  AgentAuditedClient,
  DescribeUnbindClientListRequest,
  DescribeAgentPayDealsResponse,
  DealGoodsPriceElem,
  DescribeAgentDealsByCacheRequest,
  DescribeAgentSelfPayDealsRequest,
  ModifyClientRemarkRequest,
  CreatePayRelationForClientRequest,
  AgentTransferMoneyResponse,
  DescribeUnbindClientListResponse,
  DescribeAgentSelfPayDealsV2Response,
  AgentBillElem,
  AuditApplyClientResponse,
  DescribeAgentDealsCacheResponse,
  DescribeAgentBillsRequest,
  AgentPayDealsResponse,
  AgentDealElem,
  AgentSalesmanElem,
  DescribeClientBalanceNewRequest,
  DealGoodsPriceNewElem,
  DescribeRebateInfosResponse,
  DescribeAgentClientGradeRequest,
  DescribeClientBalanceNewResponse,
} from "./partners_models"

/**
 * partners client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("partners.tencentcloudapi.com", "2018-03-21", clientConfig)
  }

  /**
   * 【该接口将逐步下线，请切换使用升级版本DescribeAgentSelfPayDealsV2】可以查询代理商下指定客户的自付订单
   */
  async DescribeAgentSelfPayDeals(
    req: DescribeAgentSelfPayDealsRequest,
    cb?: (error: string, rep: DescribeAgentSelfPayDealsResponse) => void
  ): Promise<DescribeAgentSelfPayDealsResponse> {
    return this.request("DescribeAgentSelfPayDeals", req, cb)
  }

  /**
   * 【该接口将逐步下线，请切换使用升级版本DescribeAgentDealsByCache】代理商拉取缓存的全量客户订单
   */
  async DescribeAgentDealsCache(
    req: DescribeAgentDealsCacheRequest,
    cb?: (error: string, rep: DescribeAgentDealsCacheResponse) => void
  ): Promise<DescribeAgentDealsCacheResponse> {
    return this.request("DescribeAgentDealsCache", req, cb)
  }

  /**
   * 代理商可以对名下客户添加备注、修改备注
   */
  async ModifyClientRemark(
    req: ModifyClientRemarkRequest,
    cb?: (error: string, rep: ModifyClientRemarkResponse) => void
  ): Promise<ModifyClientRemarkResponse> {
    return this.request("ModifyClientRemark", req, cb)
  }

  /**
   * 查询代理商名下指定代客的自付订单
   */
  async DescribeAgentSelfPayDealsV2(
    req: DescribeAgentSelfPayDealsV2Request,
    cb?: (error: string, rep: DescribeAgentSelfPayDealsV2Response) => void
  ): Promise<DescribeAgentSelfPayDealsV2Response> {
    return this.request("DescribeAgentSelfPayDealsV2", req, cb)
  }

  /**
   * 代理商支付订单接口，支持自付/代付
   */
  async AgentPayDeals(
    req: AgentPayDealsRequest,
    cb?: (error: string, rep: AgentPayDealsResponse) => void
  ): Promise<AgentPayDealsResponse> {
    return this.request("AgentPayDeals", req, cb)
  }

  /**
   * 代理商可查询自己及名下代客所有业务明细
   */
  async DescribeAgentBills(
    req: DescribeAgentBillsRequest,
    cb?: (error: string, rep: DescribeAgentBillsResponse) => void
  ): Promise<DescribeAgentBillsResponse> {
    return this.request("DescribeAgentBills", req, cb)
  }

  /**
   * 为合作伙伴提供转账给客户能力。仅支持合作伙伴为自己名下客户转账。
   */
  async AgentTransferMoney(
    req: AgentTransferMoneyRequest,
    cb?: (error: string, rep: AgentTransferMoneyResponse) => void
  ): Promise<AgentTransferMoneyResponse> {
    return this.request("AgentTransferMoney", req, cb)
  }

  /**
   * 代理商可查询自己名下全部返佣信息
   */
  async DescribeRebateInfos(
    req: DescribeRebateInfosRequest,
    cb?: (error: string, rep: DescribeRebateInfosResponse) => void
  ): Promise<DescribeRebateInfosResponse> {
    return this.request("DescribeRebateInfos", req, cb)
  }

  /**
   * 代理商查询名下业务员列表信息
   */
  async DescribeSalesmans(
    req: DescribeSalesmansRequest,
    cb?: (error: string, rep: DescribeSalesmansResponse) => void
  ): Promise<DescribeSalesmansResponse> {
    return this.request("DescribeSalesmans", req, cb)
  }

  /**
   * 合作伙伴为客户消除强代付关系
   */
  async RemovePayRelationForClient(
    req: RemovePayRelationForClientRequest,
    cb?: (error: string, rep: RemovePayRelationForClientResponse) => void
  ): Promise<RemovePayRelationForClientResponse> {
    return this.request("RemovePayRelationForClient", req, cb)
  }

  /**
   * 为合作伙伴提供查询客户余额能力。调用者必须是合作伙伴，只能查询自己名下客户余额
   */
  async DescribeClientBalanceNew(
    req: DescribeClientBalanceNewRequest,
    cb?: (error: string, rep: DescribeClientBalanceNewResponse) => void
  ): Promise<DescribeClientBalanceNewResponse> {
    return this.request("DescribeClientBalanceNew", req, cb)
  }

  /**
   * 【该接口将逐步下线，请切换使用升级版本DescribeAgentPayDealsV2】可以查询代理商代付的所有订单
   */
  async DescribeAgentPayDeals(
    req: DescribeAgentPayDealsRequest,
    cb?: (error: string, rep: DescribeAgentPayDealsResponse) => void
  ): Promise<DescribeAgentPayDealsResponse> {
    return this.request("DescribeAgentPayDeals", req, cb)
  }

  /**
   * 代理商名下客户解绑记录查询接口
   */
  async DescribeUnbindClientList(
    req: DescribeUnbindClientListRequest,
    cb?: (error: string, rep: DescribeUnbindClientListResponse) => void
  ): Promise<DescribeUnbindClientListResponse> {
    return this.request("DescribeUnbindClientList", req, cb)
  }

  /**
   * 代理商可查询自己名下待审核客户列表
   */
  async DescribeAgentClients(
    req: DescribeAgentClientsRequest,
    cb?: (error: string, rep: DescribeAgentClientsResponse) => void
  ): Promise<DescribeAgentClientsResponse> {
    return this.request("DescribeAgentClients", req, cb)
  }

  /**
   * 【该接口将逐步下线，请切换使用升级版本DescribeClientBalanceNew】为合作伙伴提供查询客户余额能力。调用者必须是合作伙伴，只能查询自己名下客户余额.
   */
  async DescribeClientBalance(
    req: DescribeClientBalanceRequest,
    cb?: (error: string, rep: DescribeClientBalanceResponse) => void
  ): Promise<DescribeClientBalanceResponse> {
    return this.request("DescribeClientBalance", req, cb)
  }

  /**
   * 传入代客uin，查客户级别，客户审核状态，客户实名认证状态
   */
  async DescribeAgentClientGrade(
    req: DescribeAgentClientGradeRequest,
    cb?: (error: string, rep: DescribeAgentClientGradeResponse) => void
  ): Promise<DescribeAgentClientGradeResponse> {
    return this.request("DescribeAgentClientGrade", req, cb)
  }

  /**
   * 可以查询代理商代付的所有订单
   */
  async DescribeAgentPayDealsV2(
    req: DescribeAgentPayDealsV2Request,
    cb?: (error: string, rep: DescribeAgentPayDealsV2Response) => void
  ): Promise<DescribeAgentPayDealsV2Response> {
    return this.request("DescribeAgentPayDealsV2", req, cb)
  }

  /**
   * 查询已审核客户列表
   */
  async DescribeAgentAuditedClients(
    req: DescribeAgentAuditedClientsRequest,
    cb?: (error: string, rep: DescribeAgentAuditedClientsResponse) => void
  ): Promise<DescribeAgentAuditedClientsResponse> {
    return this.request("DescribeAgentAuditedClients", req, cb)
  }

  /**
   * 合作伙伴为客户创建强代付关系
   */
  async CreatePayRelationForClient(
    req: CreatePayRelationForClientRequest,
    cb?: (error: string, rep: CreatePayRelationForClientResponse) => void
  ): Promise<CreatePayRelationForClientResponse> {
    return this.request("CreatePayRelationForClient", req, cb)
  }

  /**
   * 代理商可以审核其名下申请中代客
   */
  async AuditApplyClient(
    req: AuditApplyClientRequest,
    cb?: (error: string, rep: AuditApplyClientResponse) => void
  ): Promise<AuditApplyClientResponse> {
    return this.request("AuditApplyClient", req, cb)
  }

  /**
   * 供代理商拉取缓存的全量客户订单
   */
  async DescribeAgentDealsByCache(
    req: DescribeAgentDealsByCacheRequest,
    cb?: (error: string, rep: DescribeAgentDealsByCacheResponse) => void
  ): Promise<DescribeAgentDealsByCacheResponse> {
    return this.request("DescribeAgentDealsByCache", req, cb)
  }
}

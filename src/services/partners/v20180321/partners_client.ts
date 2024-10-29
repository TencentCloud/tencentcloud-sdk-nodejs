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
  DescribeSalesmansRequest,
  DescribeAgentAuditedClientsRequest,
  DescribeRebateInfosNewRequest,
  RemovePayRelationForClientRequest,
  DescribeRebateInfosNewResponse,
  AgentPayDealsRequest,
  DescribeAgentClientGradeResponse,
  DescribeAgentDealsByCacheResponse,
  RebateInfoElem,
  DescribeAgentPayDealsV2Response,
  AgentTransferMoneyRequest,
  DescribeAgentPayDealsV2Request,
  ProductInfoElem,
  UnbindClientElem,
  RemovePayRelationForClientResponse,
  DescribeAgentRelateBigDealIdsRequest,
  DescribeRebateInfosRequest,
  CreatePayRelationForClientResponse,
  DescribeAgentAuditedClientsResponse,
  DescribeAgentBillsResponse,
  AuditApplyClientRequest,
  ModifyClientRemarkResponse,
  DescribeAgentClientsResponse,
  AgentDealNewElem,
  DescribeAgentClientsRequest,
  DescribeAgentRelateBigDealIdsResponse,
  DescribeAgentSelfPayDealsV2Request,
  DescribeSalesmansResponse,
  AgentAuditedClient,
  DescribeUnbindClientListRequest,
  DescribeAgentDealsByCacheRequest,
  ModifyClientRemarkRequest,
  CreatePayRelationForClientRequest,
  AgentTransferMoneyResponse,
  DescribeUnbindClientListResponse,
  DescribeAgentSelfPayDealsV2Response,
  AssignClientsToSalesResponse,
  AgentBillElem,
  AuditApplyClientResponse,
  DescribeAgentBillsRequest,
  AgentPayDealsResponse,
  RefundMap,
  AgentSalesmanElem,
  DescribeClientBalanceNewRequest,
  DealGoodsPriceNewElem,
  DescribeRebateInfosResponse,
  DescribeAgentClientGradeRequest,
  RebateInfoElemNew,
  AssignClientsToSalesRequest,
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
     * 为代客or申请中代客分派跟进人（业务员），入参可从以下API获取
- 代客列表获取API： [DescribeAgentAuditedClients](https://cloud.tencent.com/document/product/563/19184)
- 申请中代客列表获取API：[DescribeAgentClients](https://cloud.tencent.com/document/product/563/16046)
- 业务员列表获取API：[DescribeSalesmans](https://cloud.tencent.com/document/product/563/35196) <br><br>
     */
  async AssignClientsToSales(
    req: AssignClientsToSalesRequest,
    cb?: (error: string, rep: AssignClientsToSalesResponse) => void
  ): Promise<AssignClientsToSalesResponse> {
    return this.request("AssignClientsToSales", req, cb)
  }

  /**
   * 查询代理商名下指定代客的自付订单（预付费）
   */
  async DescribeAgentSelfPayDealsV2(
    req: DescribeAgentSelfPayDealsV2Request,
    cb?: (error: string, rep: DescribeAgentSelfPayDealsV2Response) => void
  ): Promise<DescribeAgentSelfPayDealsV2Response> {
    return this.request("DescribeAgentSelfPayDealsV2", req, cb)
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
   * 代理商可以对名下客户添加备注、修改备注
   */
  async ModifyClientRemark(
    req: ModifyClientRemarkRequest,
    cb?: (error: string, rep: ModifyClientRemarkResponse) => void
  ): Promise<ModifyClientRemarkResponse> {
    return this.request("ModifyClientRemark", req, cb)
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
   * 代理商可查询自己名下全部返佣信息
   */
  async DescribeRebateInfosNew(
    req: DescribeRebateInfosNewRequest,
    cb?: (error: string, rep: DescribeRebateInfosNewResponse) => void
  ): Promise<DescribeRebateInfosNewResponse> {
    return this.request("DescribeRebateInfosNew", req, cb)
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
   * 【该接口已下线，请切换使用升级版本DescribeRebateInfosNew】代理商可查询自己名下全部返佣信息
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
   * 根据大订单号查询关联申请合并支付的其他订单号
   */
  async DescribeAgentRelateBigDealIds(
    req: DescribeAgentRelateBigDealIdsRequest,
    cb?: (error: string, rep: DescribeAgentRelateBigDealIdsResponse) => void
  ): Promise<DescribeAgentRelateBigDealIdsResponse> {
    return this.request("DescribeAgentRelateBigDealIds", req, cb)
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
   * 传入代客uin，查客户级别，客户审核状态，客户实名认证状态
   */
  async DescribeAgentClientGrade(
    req: DescribeAgentClientGradeRequest,
    cb?: (error: string, rep: DescribeAgentClientGradeResponse) => void
  ): Promise<DescribeAgentClientGradeResponse> {
    return this.request("DescribeAgentClientGrade", req, cb)
  }

  /**
   * 可以查询代理商代付的预付费订单
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
   * 供代理商拉取缓存的全量预付费客户订单
   */
  async DescribeAgentDealsByCache(
    req: DescribeAgentDealsByCacheRequest,
    cb?: (error: string, rep: DescribeAgentDealsByCacheResponse) => void
  ): Promise<DescribeAgentDealsByCacheResponse> {
    return this.request("DescribeAgentDealsByCache", req, cb)
  }
}

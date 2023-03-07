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
  GetCountryCodesRequest,
  QueryPartnerCreditResponse,
  QueryVoucherListByUinRequest,
  QueryVoucherAmountByUinResponse,
  QueryVoucherAmountByUinItem,
  QueryCreditAllocationHistoryData,
  AllocateCustomerCreditRequest,
  GetCountryCodesResponse,
  QueryCustomersCreditRequest,
  QueryCreditByUinListRequest,
  CreateAccountResponse,
  QueryPartnerCreditRequest,
  QueryCreditByUinListResponse,
  QueryVoucherPoolResponse,
  QueryCreditAllocationHistoryResponse,
  CreateAccountRequest,
  QueryDirectCustomersCreditRequest,
  AllocateCustomerCreditResponse,
  QueryVoucherListByUinVoucherItem,
  QueryVoucherAmountByUinRequest,
  QueryDirectCustomersCreditData,
  QueryCreditAllocationHistoryRequest,
  CountryCodeItem,
  QueryDirectCustomersCreditResponse,
  QueryVoucherListByUinResponse,
  QueryVoucherPoolRequest,
  QueryVoucherListByUinItem,
  QueryCustomersCreditData,
  QueryCustomersCreditResponse,
} from "./intlpartnersmgt_models"

/**
 * intlpartnersmgt client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("intlpartnersmgt.tencentcloudapi.com", "2022-09-28", clientConfig)
  }

  /**
   * 查询用户列表信用
   */
  async QueryCreditByUinList(
    req: QueryCreditByUinListRequest,
    cb?: (error: string, rep: QueryCreditByUinListResponse) => void
  ): Promise<QueryCreditByUinListResponse> {
    return this.request("QueryCreditByUinList", req, cb)
  }

  /**
   * 查询代金券额度池
   */
  async QueryVoucherPool(
    req?: QueryVoucherPoolRequest,
    cb?: (error: string, rep: QueryVoucherPoolResponse) => void
  ): Promise<QueryVoucherPoolResponse> {
    return this.request("QueryVoucherPool", req, cb)
  }

  /**
   * 查询直接子客信用
   */
  async QueryDirectCustomersCredit(
    req?: QueryDirectCustomersCreditRequest,
    cb?: (error: string, rep: QueryDirectCustomersCreditResponse) => void
  ): Promise<QueryDirectCustomersCreditResponse> {
    return this.request("QueryDirectCustomersCredit", req, cb)
  }

  /**
     * 在合作伙伴平台，创建腾讯云账号，子客户注册完成后，自动与合作伙伴账号绑定。

注意事项：<br>
1、创建腾讯云账号，输入的邮箱、手机号，需要合作伙伴做有效性验证。<br>
2、客户首次登录需要补充个人信息
     */
  async CreateAccount(
    req: CreateAccountRequest,
    cb?: (error: string, rep: CreateAccountResponse) => void
  ): Promise<CreateAccountResponse> {
    return this.request("CreateAccount", req, cb)
  }

  /**
   * 根据客户uin查询代金券列表
   */
  async QueryVoucherListByUin(
    req: QueryVoucherListByUinRequest,
    cb?: (error: string, rep: QueryVoucherListByUinResponse) => void
  ): Promise<QueryVoucherListByUinResponse> {
    return this.request("QueryVoucherListByUin", req, cb)
  }

  /**
   * 查询合作伙伴自己的总信用额度、可用信用额度、已使用信用额度，单位为美元
   */
  async QueryPartnerCredit(
    req?: QueryPartnerCreditRequest,
    cb?: (error: string, rep: QueryPartnerCreditResponse) => void
  ): Promise<QueryPartnerCreditResponse> {
    return this.request("QueryPartnerCredit", req, cb)
  }

  /**
     * 合作伙伴可以为关联客户设置信用额度，包括调高额度、降低额度、设置额度为0
1、信用额度长期有效，不会定期清0；
2、可用信用额度为0，会触发客户停服，请谨慎操作；
3、如需限制客户新购，但不影响已购产品使用，可与渠道经理申请客户欠费不停服特权后，设置可用信用额度为0；
4、设置的额度，为当前可用信用额度的增量，最大不能超过合作伙伴可分配的剩余额度，设置负数代表回收额度，可用信用额度最低设置为0。
     */
  async AllocateCustomerCredit(
    req: AllocateCustomerCreditRequest,
    cb?: (error: string, rep: AllocateCustomerCreditResponse) => void
  ): Promise<AllocateCustomerCreditResponse> {
    return this.request("AllocateCustomerCredit", req, cb)
  }

  /**
   * 获取国家和地区的代码
   */
  async GetCountryCodes(
    req?: GetCountryCodesRequest,
    cb?: (error: string, rep: GetCountryCodesResponse) => void
  ): Promise<GetCountryCodesResponse> {
    return this.request("GetCountryCodes", req, cb)
  }

  /**
   * 查询单个客户的全部历史分配记录
   */
  async QueryCreditAllocationHistory(
    req: QueryCreditAllocationHistoryRequest,
    cb?: (error: string, rep: QueryCreditAllocationHistoryResponse) => void
  ): Promise<QueryCreditAllocationHistoryResponse> {
    return this.request("QueryCreditAllocationHistory", req, cb)
  }

  /**
   * 合作伙伴可以查询关联客户的信用额度，以及客户的基础信息
   */
  async QueryCustomersCredit(
    req: QueryCustomersCreditRequest,
    cb?: (error: string, rep: QueryCustomersCreditResponse) => void
  ): Promise<QueryCustomersCreditResponse> {
    return this.request("QueryCustomersCredit", req, cb)
  }

  /**
   * 根据客户uin查询代金券额度
   */
  async QueryVoucherAmountByUin(
    req: QueryVoucherAmountByUinRequest,
    cb?: (error: string, rep: QueryVoucherAmountByUinResponse) => void
  ): Promise<QueryVoucherAmountByUinResponse> {
    return this.request("QueryVoucherAmountByUin", req, cb)
  }
}

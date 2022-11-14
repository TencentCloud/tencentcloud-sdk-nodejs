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
  OtherModelScores,
  TransportGeneralInterfaceInput,
  TransportGeneralInterfaceOutput,
  QueryAntiFraudVipResponse,
  RiskDetail,
  TransportGeneralInterfaceRequest,
  SimpleKindRiskDetail,
  GetAntiFraudVipResponse,
  TransportGeneralInterfaceResponse,
  AntiFraudVipCryptoFilter,
  AntiFraudVipFilter,
  QueryAntiFraudVipRequest,
  GetAntiFraudVipRequest,
  AntiFraudVipRecord,
} from "./afc_models"

/**
 * afc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("afc.tencentcloudapi.com", "2020-02-26", clientConfig)
  }

  /**
     * 天御反欺诈服务，主要应用于银行、证券、保险、P2P等金融行业客户，通过腾讯的大数据风控能力，
可以准确识别恶意用户信息，解决客户在支付、活动、理财，风控等业务环节遇到的欺诈威胁，降低企业
的损失。
     */
  async QueryAntiFraudVip(
    req: QueryAntiFraudVipRequest,
    cb?: (error: string, rep: QueryAntiFraudVipResponse) => void
  ): Promise<QueryAntiFraudVipResponse> {
    return this.request("QueryAntiFraudVip", req, cb)
  }

  /**
   * 反欺诈VIP评分接口
   */
  async GetAntiFraudVip(
    req: GetAntiFraudVipRequest,
    cb?: (error: string, rep: GetAntiFraudVipResponse) => void
  ): Promise<GetAntiFraudVipResponse> {
    return this.request("GetAntiFraudVip", req, cb)
  }

  /**
   * 天御信鸽取数平台接口
   */
  async TransportGeneralInterface(
    req: TransportGeneralInterfaceRequest,
    cb?: (error: string, rep: TransportGeneralInterfaceResponse) => void
  ): Promise<TransportGeneralInterfaceResponse> {
    return this.request("TransportGeneralInterface", req, cb)
  }
}

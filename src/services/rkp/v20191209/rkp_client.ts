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
  GetTokenResponse,
  QueryDevAndRiskRequest,
  DevInfoQ,
  RiskDetail,
  RiskInfo,
  GetOpenIdRequest,
  QueryDevAndRiskResponse,
  GetTokenRequest,
  GetOpenIdResponse,
} from "./rkp_models"

/**
 * rkp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("rkp.tencentcloudapi.com", "2019-12-09", clientConfig)
  }

  /**
   * 根据DevicceToken查询OpenID。
   */
  async GetOpenId(
    req: GetOpenIdRequest,
    cb?: (error: string, rep: GetOpenIdResponse) => void
  ): Promise<GetOpenIdResponse> {
    return this.request("GetOpenId", req, cb)
  }

  /**
   * 获取token接口。
   */
  async GetToken(
    req: GetTokenRequest,
    cb?: (error: string, rep: GetTokenResponse) => void
  ): Promise<GetTokenResponse> {
    return this.request("GetToken", req, cb)
  }

  /**
   * 腾讯天御设备风险查询接口，输入由客户应用自主采集的设备信息， 通过腾讯大数据风控能力，可以准确根据输入设备信息，还原设备库中的设备ID，并且识别设备的风险，解决客户业务过程中的设备风险，降低企业损失。
   */
  async QueryDevAndRisk(
    req: QueryDevAndRiskRequest,
    cb?: (error: string, rep: QueryDevAndRiskResponse) => void
  ): Promise<QueryDevAndRiskResponse> {
    return this.request("QueryDevAndRisk", req, cb)
  }
}

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
  DescribeTrustedIDResponse,
  DescribeFraudUltimateRequest,
  DescribeFraudPremiumResponse,
  DescribeFraudBaseRequest,
  DescribeFraudBaseResponse,
  DataAuthorizationInfo,
  DescribeTrustedIDRequest,
  DescribeFraudPremiumRequest,
  DescribeFraudUltimateResponse,
  RiskInfo,
} from "./tds_models"

/**
 * tds client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tds.tencentcloudapi.com", "2022-08-01", clientConfig)
  }

  /**
   * 查询设备风险
   */
  async DescribeFraudBase(
    req: DescribeFraudBaseRequest,
    cb?: (error: string, rep: DescribeFraudBaseResponse) => void
  ): Promise<DescribeFraudBaseResponse> {
    return this.request("DescribeFraudBase", req, cb)
  }

  /**
   * 查询设备标识
   */
  async DescribeTrustedID(
    req: DescribeTrustedIDRequest,
    cb?: (error: string, rep: DescribeTrustedIDResponse) => void
  ): Promise<DescribeTrustedIDResponse> {
    return this.request("DescribeTrustedID", req, cb)
  }

  /**
   * 查询设备标识及风险
   */
  async DescribeFraudPremium(
    req: DescribeFraudPremiumRequest,
    cb?: (error: string, rep: DescribeFraudPremiumResponse) => void
  ): Promise<DescribeFraudPremiumResponse> {
    return this.request("DescribeFraudPremium", req, cb)
  }

  /**
   * 查询设备标识及风险（旗舰版）
   */
  async DescribeFraudUltimate(
    req: DescribeFraudUltimateRequest,
    cb?: (error: string, rep: DescribeFraudUltimateResponse) => void
  ): Promise<DescribeFraudUltimateResponse> {
    return this.request("DescribeFraudUltimate", req, cb)
  }
}

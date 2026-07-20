/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  RiskLabel,
  IPLocation,
  AssessEnvironmentRiskRsp,
  AssessEnvironmentRiskResponse,
  DataScore,
  Environment,
  IPNetwork,
  AssessEnvironmentRiskRequest,
} from "./rce_models"

/**
 * rce client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("rce.tencentcloudapi.com", "2026-01-30", clientConfig)
  }

  /**
   * 环境风险评估
   */
  async AssessEnvironmentRisk(
    req: AssessEnvironmentRiskRequest,
    cb?: (error: string, rep: AssessEnvironmentRiskResponse) => void
  ): Promise<AssessEnvironmentRiskResponse> {
    return this.request("AssessEnvironmentRisk", req, cb)
  }
}

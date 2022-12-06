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
  EvaluateUserRiskRequest,
  DeviceDetailInfo,
  UniversalAccountInfo,
  MarketingInfo,
  DeviceFingerprintInfo,
  AccountInfo,
  UserInfo,
  EvaluateUserRiskResponse,
  EvaluationResult,
} from "./trdp_models"

/**
 * trdp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("trdp.tencentcloudapi.com", "2022-07-26", clientConfig)
  }

  /**
   * 用户风险质量接口
   */
  async EvaluateUserRisk(
    req: EvaluateUserRiskRequest,
    cb?: (error: string, rep: EvaluateUserRiskResponse) => void
  ): Promise<EvaluateUserRiskResponse> {
    return this.request("EvaluateUserRisk", req, cb)
  }
}

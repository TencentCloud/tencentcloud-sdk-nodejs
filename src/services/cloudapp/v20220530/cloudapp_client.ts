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
import { SaleParam, VerifyLicenseRequest, VerifyLicenseResponse, License } from "./cloudapp_models"

/**
 * cloudapp client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cloudapp.tencentcloudapi.com", "2022-05-30", clientConfig)
  }

  /**
   * 从软件进程读取 LICENSE。
   */
  async VerifyLicense(
    req?: VerifyLicenseRequest,
    cb?: (error: string, rep: VerifyLicenseResponse) => void
  ): Promise<VerifyLicenseResponse> {
    return this.request("VerifyLicense", req, cb)
  }
}

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
  VerifyFunctionArg,
  CreateCredentialRequest,
  TransactionArg,
  CreateTDidRequest,
  FunctionArg,
  CreateSelectiveCredentialRequest,
  CreateTDidResponse,
  CreateSelectiveCredentialResponse,
  VerifyCredentialResponse,
  CreateCredentialResponse,
  VerifyCredentialRequest,
  Proof,
} from "./tdid_models"

/**
 * tdid client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tdid.tencentcloudapi.com", "2021-05-19", clientConfig)
  }

  /**
   * 验证凭证
   */
  async VerifyCredential(
    req: VerifyCredentialRequest,
    cb?: (error: string, rep: VerifyCredentialResponse) => void
  ): Promise<VerifyCredentialResponse> {
    return this.request("VerifyCredential", req, cb)
  }

  /**
   * 创建机构DID
   */
  async CreateTDid(
    req: CreateTDidRequest,
    cb?: (error: string, rep: CreateTDidResponse) => void
  ): Promise<CreateTDidResponse> {
    return this.request("CreateTDid", req, cb)
  }

  /**
   * 创建选择性批露凭证
   */
  async CreateSelectiveCredential(
    req: CreateSelectiveCredentialRequest,
    cb?: (error: string, rep: CreateSelectiveCredentialResponse) => void
  ): Promise<CreateSelectiveCredentialResponse> {
    return this.request("CreateSelectiveCredential", req, cb)
  }

  /**
   * 创建凭证
   */
  async CreateCredential(
    req: CreateCredentialRequest,
    cb?: (error: string, rep: CreateCredentialResponse) => void
  ): Promise<CreateCredentialResponse> {
    return this.request("CreateCredential", req, cb)
  }
}

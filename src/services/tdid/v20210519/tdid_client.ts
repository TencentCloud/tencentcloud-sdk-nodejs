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
  CreateTDidByPubKeyResponse,
  GetTDidDocumentResponse,
  GetCredentialStateRequest,
  CheckNewPurchaseRequest,
  VerifyCredentialsRequest,
  CRDLArg,
  GetTDidDocumentRequest,
  IssueCredentialResponse,
  GetCredentialStateResponse,
  CreateTDidByHostRequest,
  IssueCredentialRequest,
  VerifyCredentialsResponse,
  UpdateCredentialStateRequest,
  CredentialState,
  CreateTDidByPubKeyRequest,
  DeactivateTDidRequest,
  CheckNewPurchaseResponse,
  UpdateCredentialStateResponse,
  ChainTransaction,
  DeactivateTDidResponse,
  CreateTDidByHostResponse,
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
   * 验证已签名的可验证凭证
   */
  async VerifyCredentials(
    req: VerifyCredentialsRequest,
    cb?: (error: string, rep: VerifyCredentialsResponse) => void
  ): Promise<VerifyCredentialsResponse> {
    return this.request("VerifyCredentials", req, cb)
  }

  /**
   * 自动生成公私钥对托管在DID平台，并注册DID标识
   */
  async CreateTDidByHost(
    req: CreateTDidByHostRequest,
    cb?: (error: string, rep: CreateTDidByHostResponse) => void
  ): Promise<CreateTDidByHostResponse> {
    return this.request("CreateTDidByHost", req, cb)
  }

  /**
   * 使用导入的公钥文件注册DID标识
   */
  async CreateTDidByPubKey(
    req: CreateTDidByPubKeyRequest,
    cb?: (error: string, rep: CreateTDidByPubKeyResponse) => void
  ): Promise<CreateTDidByPubKeyResponse> {
    return this.request("CreateTDidByPubKey", req, cb)
  }

  /**
   * 获取DID标识的文档
   */
  async GetTDidDocument(
    req: GetTDidDocumentRequest,
    cb?: (error: string, rep: GetTDidDocumentResponse) => void
  ): Promise<GetTDidDocumentResponse> {
    return this.request("GetTDidDocument", req, cb)
  }

  /**
   * 更新凭证的链上状态
   */
  async UpdateCredentialState(
    req: UpdateCredentialStateRequest,
    cb?: (error: string, rep: UpdateCredentialStateResponse) => void
  ): Promise<UpdateCredentialStateResponse> {
    return this.request("UpdateCredentialState", req, cb)
  }

  /**
   * 更新DID标识的禁用状态
   */
  async DeactivateTDid(
    req: DeactivateTDidRequest,
    cb?: (error: string, rep: DeactivateTDidResponse) => void
  ): Promise<DeactivateTDidResponse> {
    return this.request("DeactivateTDid", req, cb)
  }

  /**
   * 获取凭证链上状态信息
   */
  async GetCredentialState(
    req: GetCredentialStateRequest,
    cb?: (error: string, rep: GetCredentialStateResponse) => void
  ): Promise<GetCredentialStateResponse> {
    return this.request("GetCredentialState", req, cb)
  }

  /**
   * 颁发可验证凭证
   */
  async IssueCredential(
    req: IssueCredentialRequest,
    cb?: (error: string, rep: IssueCredentialResponse) => void
  ): Promise<IssueCredentialResponse> {
    return this.request("IssueCredential", req, cb)
  }

  /**
   * 检查用户套餐购买状态
   */
  async CheckNewPurchase(
    req?: CheckNewPurchaseRequest,
    cb?: (error: string, rep: CheckNewPurchaseResponse) => void
  ): Promise<CheckNewPurchaseResponse> {
    return this.request("CheckNewPurchase", req, cb)
  }
}

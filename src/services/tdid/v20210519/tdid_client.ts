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
  CredentialStatus,
  CreateTDidRequest,
  CreateSelectiveCredentialRequest,
  CreateTDidByPrivateKeyResponse,
  CheckChainResponse,
  CreateTDidByPublicKeyRequest,
  CreateCredentialResponse,
  GetAuthorityIssuerRequest,
  CreateCredentialRequest,
  GetDidDocumentRequest,
  GetCredentialStatusRequest,
  VerifyCredentialResponse,
  SetCredentialStatusResponse,
  GetCptInfoResponse,
  TransactionArg,
  CheckChainRequest,
  GetAuthorityIssuerResponse,
  GetDidDocumentResponse,
  CreateTDidResponse,
  CreateSelectiveCredentialResponse,
  RegisterCptRequest,
  CreateTDidByPublicKeyResponse,
  Proof,
  VerifyFunctionArg,
  FunctionArg,
  CreateTDidByPrivateKeyRequest,
  VerifyCredentialRequest,
  SetCredentialStatusRequest,
  GetCptInfoRequest,
  GetCredentialStatusResponse,
  RegisterCptResponse,
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
     * 该接口不再使用

凭证模版详情
     */
  async GetCptInfo(
    req: GetCptInfoRequest,
    cb?: (error: string, rep: GetCptInfoResponse) => void
  ): Promise<GetCptInfoResponse> {
    return this.request("GetCptInfo", req, cb)
  }

  /**
     * 该接口不再使用

查看DID文档

     */
  async GetDidDocument(
    req: GetDidDocumentRequest,
    cb?: (error: string, rep: GetDidDocumentResponse) => void
  ): Promise<GetDidDocumentResponse> {
    return this.request("GetDidDocument", req, cb)
  }

  /**
     * 该接口不再使用

创建选择性批露凭证
     */
  async CreateSelectiveCredential(
    req: CreateSelectiveCredentialRequest,
    cb?: (error: string, rep: CreateSelectiveCredentialResponse) => void
  ): Promise<CreateSelectiveCredentialResponse> {
    return this.request("CreateSelectiveCredential", req, cb)
  }

  /**
     * 该接口不再使用

创建机构DID
     */
  async CreateTDid(
    req: CreateTDidRequest,
    cb?: (error: string, rep: CreateTDidResponse) => void
  ): Promise<CreateTDidResponse> {
    return this.request("CreateTDid", req, cb)
  }

  /**
     * 该接口不再使用

创建凭证
     */
  async CreateCredential(
    req: CreateCredentialRequest,
    cb?: (error: string, rep: CreateCredentialResponse) => void
  ): Promise<CreateCredentialResponse> {
    return this.request("CreateCredential", req, cb)
  }

  /**
     * 该接口不再使用

 新建DID根据公钥生成Tdid
     */
  async CreateTDidByPublicKey(
    req: CreateTDidByPublicKeyRequest,
    cb?: (error: string, rep: CreateTDidByPublicKeyResponse) => void
  ): Promise<CreateTDidByPublicKeyResponse> {
    return this.request("CreateTDidByPublicKey", req, cb)
  }

  /**
     * 该接口不再使用

获取凭证链上状态信息
     */
  async GetCredentialStatus(
    req: GetCredentialStatusRequest,
    cb?: (error: string, rep: GetCredentialStatusResponse) => void
  ): Promise<GetCredentialStatusResponse> {
    return this.request("GetCredentialStatus", req, cb)
  }

  /**
     * 该接口不再使用

新建DID根据私钥生成Tdid
     */
  async CreateTDidByPrivateKey(
    req: CreateTDidByPrivateKeyRequest,
    cb?: (error: string, rep: CreateTDidByPrivateKeyResponse) => void
  ): Promise<CreateTDidByPrivateKeyResponse> {
    return this.request("CreateTDidByPrivateKey", req, cb)
  }

  /**
     * 该接口不再使用

检查区块链信息
     */
  async CheckChain(
    req: CheckChainRequest,
    cb?: (error: string, rep: CheckChainResponse) => void
  ): Promise<CheckChainResponse> {
    return this.request("CheckChain", req, cb)
  }

  /**
     * 该接口不再使用

凭证模版新建
     */
  async RegisterCpt(
    req: RegisterCptRequest,
    cb?: (error: string, rep: RegisterCptResponse) => void
  ): Promise<RegisterCptResponse> {
    return this.request("RegisterCpt", req, cb)
  }

  /**
     * 该接口不再使用

验证凭证
     */
  async VerifyCredential(
    req: VerifyCredentialRequest,
    cb?: (error: string, rep: VerifyCredentialResponse) => void
  ): Promise<VerifyCredentialResponse> {
    return this.request("VerifyCredential", req, cb)
  }

  /**
     * 该接口不再使用

获取权威机构信息
     */
  async GetAuthorityIssuer(
    req: GetAuthorityIssuerRequest,
    cb?: (error: string, rep: GetAuthorityIssuerResponse) => void
  ): Promise<GetAuthorityIssuerResponse> {
    return this.request("GetAuthorityIssuer", req, cb)
  }

  /**
     * 该接口不再使用

设置凭证链上状态
     */
  async SetCredentialStatus(
    req: SetCredentialStatusRequest,
    cb?: (error: string, rep: SetCredentialStatusResponse) => void
  ): Promise<SetCredentialStatusResponse> {
    return this.request("SetCredentialStatus", req, cb)
  }
}

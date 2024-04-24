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
  GetTDidDocumentResponse,
  VerifyPresentationRequest,
  SetTDidAttributeResponse,
  IssueCredentialResponse,
  ResourceCounterData,
  SetTDidAttributeRequest,
  CreateDisclosedCredentialRequest,
  QueryCPTResponse,
  CreateTDidByPubKeyResponse,
  QueryAuthorityInfoResponse,
  VerifyCredentialsResponse,
  GetCredentialStateResponse,
  IssueCredentialRequest,
  GetTDidByObjectIdResponse,
  CreateDisclosedCredentialResponse,
  GetOverSummaryRequest,
  GetTDidPubKeyRequest,
  GetTDidDocumentRequest,
  CreateTDidByHostResponse,
  VerifyCredentialsRequest,
  QueryAuthorityInfoRequest,
  VerifyPresentationResponse,
  GetCredentialStateRequest,
  QueryCPTRequest,
  CreatePresentationRequest,
  CreateTDidByHostRequest,
  GetAppSummaryResponse,
  CRDLArg,
  GetTDidPubKeyResponse,
  UpdateCredentialStateResponse,
  DeactivateTDidResponse,
  CredentialProof,
  CredentialState,
  ChainTransaction,
  CreatePresentationResponse,
  DidAttribute,
  UpdateCredentialStateRequest,
  GetOverSummaryResponse,
  CreateTDidByPubKeyRequest,
  DeactivateTDidRequest,
  GetTDidByObjectIdRequest,
  GetAppSummaryRequest,
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
   * 获取某个应用关键指标统计数据
   */
  async GetOverSummary(
    req?: GetOverSummaryRequest,
    cb?: (error: string, rep: GetOverSummaryResponse) => void
  ): Promise<GetOverSummaryResponse> {
    return this.request("GetOverSummary", req, cb)
  }

  /**
   * 查询权威机构信息
   */
  async QueryAuthorityInfo(
    req: QueryAuthorityInfoRequest,
    cb?: (error: string, rep: QueryAuthorityInfoResponse) => void
  ): Promise<QueryAuthorityInfoResponse> {
    return this.request("QueryAuthorityInfo", req, cb)
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
   * 查询凭证模板内容
   */
  async QueryCPT(
    req: QueryCPTRequest,
    cb?: (error: string, rep: QueryCPTResponse) => void
  ): Promise<QueryCPTResponse> {
    return this.request("QueryCPT", req, cb)
  }

  /**
   * 创建凭证持有人的可验证表达
   */
  async CreatePresentation(
    req: CreatePresentationRequest,
    cb?: (error: string, rep: CreatePresentationResponse) => void
  ): Promise<CreatePresentationResponse> {
    return this.request("CreatePresentation", req, cb)
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
   * 通过业务层绑定的对象ID获取DID标识
   */
  async GetTDidByObjectId(
    req: GetTDidByObjectIdRequest,
    cb?: (error: string, rep: GetTDidByObjectIdResponse) => void
  ): Promise<GetTDidByObjectIdResponse> {
    return this.request("GetTDidByObjectId", req, cb)
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
   * 验证可验证表达的内容
   */
  async VerifyPresentation(
    req: VerifyPresentationRequest,
    cb?: (error: string, rep: VerifyPresentationResponse) => void
  ): Promise<VerifyPresentationResponse> {
    return this.request("VerifyPresentation", req, cb)
  }

  /**
   * 根据披露策略创建选择性披露凭证
   */
  async CreateDisclosedCredential(
    req: CreateDisclosedCredentialRequest,
    cb?: (error: string, rep: CreateDisclosedCredentialResponse) => void
  ): Promise<CreateDisclosedCredentialResponse> {
    return this.request("CreateDisclosedCredential", req, cb)
  }

  /**
   * 获取某个应用关键指标统计数据
   */
  async GetAppSummary(
    req: GetAppSummaryRequest,
    cb?: (error: string, rep: GetAppSummaryResponse) => void
  ): Promise<GetAppSummaryResponse> {
    return this.request("GetAppSummary", req, cb)
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
   * 查询DID标识的认证公钥
   */
  async GetTDidPubKey(
    req: GetTDidPubKeyRequest,
    cb?: (error: string, rep: GetTDidPubKeyResponse) => void
  ): Promise<GetTDidPubKeyResponse> {
    return this.request("GetTDidPubKey", req, cb)
  }

  /**
   * 设置DID文档的自定义属性
   */
  async SetTDidAttribute(
    req: SetTDidAttributeRequest,
    cb?: (error: string, rep: SetTDidAttributeResponse) => void
  ): Promise<SetTDidAttributeResponse> {
    return this.request("SetTDidAttribute", req, cb)
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
}

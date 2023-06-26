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
  TransactionArg,
  CreateTDidByPublicKeyRequest,
  CreateCredentialResponse,
  CheckChainRequest,
  GetAuthorityIssuerRequest,
  VerifyFunctionArg,
  GetConsortiumListRequest,
  GetDidClusterListResponse,
  CreateCredentialRequest,
  GetDidClusterDetailResponse,
  GetDidDocumentRequest,
  GetConsortiumListResponse,
  ConsortiumItem,
  GetDidClusterListRequest,
  GetCredentialStatusRequest,
  GetAgencyTDidResponse,
  AddLabelResponse,
  VerifyCredentialResponse,
  SetCredentialStatusResponse,
  GetCptInfoResponse,
  CptIssueRank,
  GetCredentialCptRankResponse,
  GetConsortiumClusterListResponse,
  AddLabelRequest,
  GetAuthorityIssuerResponse,
  GetDidDocumentResponse,
  CreateTDidResponse,
  CreateSelectiveCredentialResponse,
  GetAgencyTDidRequest,
  CreateTDidByPublicKeyResponse,
  GetCredentialCptRankRequest,
  RegisterCptRequest,
  GetDidClusterDetailRequest,
  Proof,
  VerifyCredentialRequest,
  GetConsortiumClusterListRequest,
  FunctionArg,
  CreateTDidByPrivateKeyRequest,
  BcosClusterItem,
  SetCredentialStatusRequest,
  DidCluster,
  GetCptInfoRequest,
  Identity,
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
   * 检查区块链信息
   */
  async CheckChain(
    req: CheckChainRequest,
    cb?: (error: string, rep: CheckChainResponse) => void
  ): Promise<CheckChainResponse> {
    return this.request("CheckChain", req, cb)
  }

  /**
   * 凭证模版详情
   */
  async GetCptInfo(
    req: GetCptInfoRequest,
    cb?: (error: string, rep: GetCptInfoResponse) => void
  ): Promise<GetCptInfoResponse> {
    return this.request("GetCptInfo", req, cb)
  }

  /**
     * 查看DID文档

     */
  async GetDidDocument(
    req: GetDidDocumentRequest,
    cb?: (error: string, rep: GetDidDocumentResponse) => void
  ): Promise<GetDidDocumentResponse> {
    return this.request("GetDidDocument", req, cb)
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
   * 创建机构DID
   */
  async CreateTDid(
    req: CreateTDidRequest,
    cb?: (error: string, rep: CreateTDidResponse) => void
  ): Promise<CreateTDidResponse> {
    return this.request("CreateTDid", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

凭证颁发按机构排行
     */
  async GetCredentialCptRank(
    req: GetCredentialCptRankRequest,
    cb?: (error: string, rep: GetCredentialCptRankResponse) => void
  ): Promise<GetCredentialCptRankResponse> {
    return this.request("GetCredentialCptRank", req, cb)
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

  /**
   *  新建DID根据公钥生成Tdid
   */
  async CreateTDidByPublicKey(
    req: CreateTDidByPublicKeyRequest,
    cb?: (error: string, rep: CreateTDidByPublicKeyResponse) => void
  ): Promise<CreateTDidByPublicKeyResponse> {
    return this.request("CreateTDidByPublicKey", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

获取联盟列表
     */
  async GetConsortiumList(
    req?: GetConsortiumListRequest,
    cb?: (error: string, rep: GetConsortiumListResponse) => void
  ): Promise<GetConsortiumListResponse> {
    return this.request("GetConsortiumList", req, cb)
  }

  /**
     * 该接口已废弃

本机构DID详情
     */
  async GetAgencyTDid(
    req: GetAgencyTDidRequest,
    cb?: (error: string, rep: GetAgencyTDidResponse) => void
  ): Promise<GetAgencyTDidResponse> {
    return this.request("GetAgencyTDid", req, cb)
  }

  /**
   * 新建DID根据私钥生成Tdid
   */
  async CreateTDidByPrivateKey(
    req: CreateTDidByPrivateKeyRequest,
    cb?: (error: string, rep: CreateTDidByPrivateKeyResponse) => void
  ): Promise<CreateTDidByPrivateKeyResponse> {
    return this.request("CreateTDidByPrivateKey", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

DID添加标签

     */
  async AddLabel(
    req: AddLabelRequest,
    cb?: (error: string, rep: AddLabelResponse) => void
  ): Promise<AddLabelResponse> {
    return this.request("AddLabel", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

获取用户的DID网络列表
     */
  async GetDidClusterList(
    req?: GetDidClusterListRequest,
    cb?: (error: string, rep: GetDidClusterListResponse) => void
  ): Promise<GetDidClusterListResponse> {
    return this.request("GetDidClusterList", req, cb)
  }

  /**
   * 获取凭证链上状态信息
   */
  async GetCredentialStatus(
    req: GetCredentialStatusRequest,
    cb?: (error: string, rep: GetCredentialStatusResponse) => void
  ): Promise<GetCredentialStatusResponse> {
    return this.request("GetCredentialStatus", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

获取联盟bcos网络列表
     */
  async GetConsortiumClusterList(
    req: GetConsortiumClusterListRequest,
    cb?: (error: string, rep: GetConsortiumClusterListResponse) => void
  ): Promise<GetConsortiumClusterListResponse> {
    return this.request("GetConsortiumClusterList", req, cb)
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
     * 下线已有内测接口，待上线正式版本的接口

获取DID区块链网络详情
     */
  async GetDidClusterDetail(
    req: GetDidClusterDetailRequest,
    cb?: (error: string, rep: GetDidClusterDetailResponse) => void
  ): Promise<GetDidClusterDetailResponse> {
    return this.request("GetDidClusterDetail", req, cb)
  }

  /**
   * 获取权威机构信息
   */
  async GetAuthorityIssuer(
    req: GetAuthorityIssuerRequest,
    cb?: (error: string, rep: GetAuthorityIssuerResponse) => void
  ): Promise<GetAuthorityIssuerResponse> {
    return this.request("GetAuthorityIssuer", req, cb)
  }

  /**
   * 设置凭证链上状态
   */
  async SetCredentialStatus(
    req: SetCredentialStatusRequest,
    cb?: (error: string, rep: SetCredentialStatusResponse) => void
  ): Promise<SetCredentialStatusResponse> {
    return this.request("SetCredentialStatus", req, cb)
  }

  /**
   * 凭证模版新建
   */
  async RegisterCpt(
    req: RegisterCptRequest,
    cb?: (error: string, rep: RegisterCptResponse) => void
  ): Promise<RegisterCptResponse> {
    return this.request("RegisterCpt", req, cb)
  }
}

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
  QueryPolicyRequest,
  RegisterClaimPolicyRequest,
  GetDidServiceDetailResponse,
  CreateCredentialResponse,
  GetConsortiumListRequest,
  DownCptResponse,
  GetCredentialIssueTrendResponse,
  CreateCredentialRequest,
  CreateDidServiceResponse,
  GetConsortiumListResponse,
  GetCredentialCptRankRequest,
  GetPolicyListRequest,
  GetConsortiumClusterListResponse,
  Task,
  GetCptListRequest,
  GetAuthoritiesListRequest,
  GetAgencyTDidRequest,
  RemoveHashRequest,
  GetGroupListRequest,
  Proof,
  GetDeployInfoRequest,
  Authority,
  CreateLabelResponse,
  GetPublicKeyRequest,
  Label,
  GetDidServiceListResponse,
  DeployByNameResponse,
  CreateLabelRequest,
  CreateDidServiceRequest,
  GetDidClusterDetailResponse,
  RecognizeAuthorityIssuerResponse,
  EnableHashResponse,
  GetCredentialIssueTrendRequest,
  EnableHashRequest,
  GetDidClusterListRequest,
  GetCptInfoRequest,
  DownCptRequest,
  GetCptListResponse,
  GetCptInfoResponse,
  GetDidRegisterTrendRequest,
  AddLabelRequest,
  GetAuthorityIssuerResponse,
  CreateSelectiveCredentialResponse,
  VerifyCredentialResponse,
  CptListData,
  FunctionArg,
  CreateTDidByPrivateKeyRequest,
  RegisterCptResponse,
  SetCredentialStatusRequest,
  RemoveHashResponse,
  CheckDidDeployRequest,
  GetDidDocumentResponse,
  RegisterIssuerResponse,
  CancelAuthorityIssuerRequest,
  CancelAuthorityIssuerResponse,
  CreateTDidRequest,
  GetAuthoritiesListResponse,
  CreateSelectiveCredentialRequest,
  CreateTDidByPrivateKeyResponse,
  DeployByNameRequest,
  GetDidServiceListRequest,
  GetAuthorityIssuerRequest,
  GetDidClusterListResponse,
  RecognizeAuthorityIssuerRequest,
  GetCredentialStatusRequest,
  GetAgencyTDidResponse,
  DidServiceInfo,
  SetCredentialStatusResponse,
  CptIssueRank,
  GetCredentialCptRankResponse,
  TransactionArg,
  RegisterIssuerRequest,
  GetDidListResponse,
  GetDeployInfoResponse,
  Contract,
  CreateTDidByPublicKeyResponse,
  CheckDidDeployResponse,
  GetDidClusterDetailRequest,
  GetConsortiumClusterListRequest,
  GetDidDetailResponse,
  Trend,
  BcosClusterItem,
  GetLabelListRequest,
  DidCluster,
  GetDataPanelResponse,
  Identity,
  QueryPolicyResponse,
  GetDidListRequest,
  Group,
  CheckChainResponse,
  CreateTDidByPublicKeyRequest,
  Policy,
  GetDataPanelRequest,
  GetGroupListResponse,
  RegisterClaimPolicyResponse,
  GetDidDetailRequest,
  GetDidServiceDetailRequest,
  GetDidDocumentRequest,
  ConsortiumItem,
  GetCredentialIssueRankResponse,
  AddLabelResponse,
  GetDeployListResponse,
  CheckChainRequest,
  GetPublicKeyResponse,
  GetDidRegisterTrendResponse,
  GetCredentialStatusResponse,
  CreateTDidResponse,
  VerifyCredentialRequest,
  RegisterCptRequest,
  GetLabelListResponse,
  VerifyFunctionArg,
  GetPolicyListResponse,
  DidData,
  GetCredentialIssueRankRequest,
  GetDeployListRequest,
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
   * 创建选择性批露凭证
   */
  async CreateSelectiveCredential(
    req: CreateSelectiveCredentialRequest,
    cb?: (error: string, rep: CreateSelectiveCredentialResponse) => void
  ): Promise<CreateSelectiveCredentialResponse> {
    return this.request("CreateSelectiveCredential", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

权威机构列表
     */
  async GetAuthoritiesList(
    req: GetAuthoritiesListRequest,
    cb?: (error: string, rep: GetAuthoritiesListResponse) => void
  ): Promise<GetAuthoritiesListResponse> {
    return this.request("GetAuthoritiesList", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

披露策略Policy管理列表
     */
  async GetPolicyList(
    req: GetPolicyListRequest,
    cb?: (error: string, rep: GetPolicyListResponse) => void
  ): Promise<GetPolicyListResponse> {
    return this.request("GetPolicyList", req, cb)
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

查看公钥
     */
  async GetPublicKey(
    req: GetPublicKeyRequest,
    cb?: (error: string, rep: GetPublicKeyResponse) => void
  ): Promise<GetPublicKeyResponse> {
    return this.request("GetPublicKey", req, cb)
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
     * 下线已有内测接口，待上线正式版本的接口

披露策略Policy查看
     */
  async QueryPolicy(
    req: QueryPolicyRequest,
    cb?: (error: string, rep: QueryPolicyResponse) => void
  ): Promise<QueryPolicyResponse> {
    return this.request("QueryPolicy", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

检查部署情况
     */
  async CheckDidDeploy(
    req: CheckDidDeployRequest,
    cb?: (error: string, rep: CheckDidDeployResponse) => void
  ): Promise<CheckDidDeployResponse> {
    return this.request("CheckDidDeploy", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

认证权威机构
     */
  async RecognizeAuthorityIssuer(
    req: RecognizeAuthorityIssuerRequest,
    cb?: (error: string, rep: RecognizeAuthorityIssuerResponse) => void
  ): Promise<RecognizeAuthorityIssuerResponse> {
    return this.request("RecognizeAuthorityIssuer", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

撤消权威机构认证
     */
  async CancelAuthorityIssuer(
    req: CancelAuthorityIssuerRequest,
    cb?: (error: string, rep: CancelAuthorityIssuerResponse) => void
  ): Promise<CancelAuthorityIssuerResponse> {
    return this.request("CancelAuthorityIssuer", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

DID注册趋势
     */
  async GetDidRegisterTrend(
    req: GetDidRegisterTrendRequest,
    cb?: (error: string, rep: GetDidRegisterTrendResponse) => void
  ): Promise<GetDidRegisterTrendResponse> {
    return this.request("GetDidRegisterTrend", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

DID详情
     */
  async GetDidDetail(
    req: GetDidDetailRequest,
    cb?: (error: string, rep: GetDidDetailResponse) => void
  ): Promise<GetDidDetailResponse> {
    return this.request("GetDidDetail", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

删除合约
     */
  async RemoveHash(
    req: RemoveHashRequest,
    cb?: (error: string, rep: RemoveHashResponse) => void
  ): Promise<RemoveHashResponse> {
    return this.request("RemoveHash", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

凭证颁发按机构排行
     */
  async GetCredentialIssueRank(
    req: GetCredentialIssueRankRequest,
    cb?: (error: string, rep: GetCredentialIssueRankResponse) => void
  ): Promise<GetCredentialIssueRankResponse> {
    return this.request("GetCredentialIssueRank", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

主群组配置列表
     */
  async GetGroupList(
    req: GetGroupListRequest,
    cb?: (error: string, rep: GetGroupListResponse) => void
  ): Promise<GetGroupListResponse> {
    return this.request("GetGroupList", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

披露策略Policy注册
     */
  async RegisterClaimPolicy(
    req: RegisterClaimPolicyRequest,
    cb?: (error: string, rep: RegisterClaimPolicyResponse) => void
  ): Promise<RegisterClaimPolicyResponse> {
    return this.request("RegisterClaimPolicy", req, cb)
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
     * 下线已有内测接口，待上线正式版本的接口

获取DID服务详情
     */
  async GetDidServiceDetail(
    req: GetDidServiceDetailRequest,
    cb?: (error: string, rep: GetDidServiceDetailResponse) => void
  ): Promise<GetDidServiceDetailResponse> {
    return this.request("GetDidServiceDetail", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

凭证模版列表
     */
  async GetCptList(
    req: GetCptListRequest,
    cb?: (error: string, rep: GetCptListResponse) => void
  ): Promise<GetCptListResponse> {
    return this.request("GetCptList", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

凭证颁发趋势
     */
  async GetCredentialIssueTrend(
    req: GetCredentialIssueTrendRequest,
    cb?: (error: string, rep: GetCredentialIssueTrendResponse) => void
  ): Promise<GetCredentialIssueTrendResponse> {
    return this.request("GetCredentialIssueTrend", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

通过Name部署TDID合约
     */
  async DeployByName(
    req: DeployByNameRequest,
    cb?: (error: string, rep: DeployByNameResponse) => void
  ): Promise<DeployByNameResponse> {
    return this.request("DeployByName", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

创建DID服务
     */
  async CreateDidService(
    req: CreateDidServiceRequest,
    cb?: (error: string, rep: CreateDidServiceResponse) => void
  ): Promise<CreateDidServiceResponse> {
    return this.request("CreateDidService", req, cb)
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
   * 设置凭证链上状态
   */
  async SetCredentialStatus(
    req: SetCredentialStatusRequest,
    cb?: (error: string, rep: SetCredentialStatusResponse) => void
  ): Promise<SetCredentialStatusResponse> {
    return this.request("SetCredentialStatus", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

标签列表
     */
  async GetLabelList(
    req: GetLabelListRequest,
    cb?: (error: string, rep: GetLabelListResponse) => void
  ): Promise<GetLabelListResponse> {
    return this.request("GetLabelList", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

启用合约
     */
  async EnableHash(
    req: EnableHashRequest,
    cb?: (error: string, rep: EnableHashResponse) => void
  ): Promise<EnableHashResponse> {
    return this.request("EnableHash", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

合约部署列表
     */
  async GetDeployList(
    req: GetDeployListRequest,
    cb?: (error: string, rep: GetDeployListResponse) => void
  ): Promise<GetDeployListResponse> {
    return this.request("GetDeployList", req, cb)
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

注册为权威机构
     */
  async RegisterIssuer(
    req: RegisterIssuerRequest,
    cb?: (error: string, rep: RegisterIssuerResponse) => void
  ): Promise<RegisterIssuerResponse> {
    return this.request("RegisterIssuer", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

合约部署详情

     */
  async GetDeployInfo(
    req: GetDeployInfoRequest,
    cb?: (error: string, rep: GetDeployInfoResponse) => void
  ): Promise<GetDeployInfoResponse> {
    return this.request("GetDeployInfo", req, cb)
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
     * 下线已有内测接口，待上线正式版本的接口

获取DID服务列表
     */
  async GetDidServiceList(
    req: GetDidServiceListRequest,
    cb?: (error: string, rep: GetDidServiceListResponse) => void
  ): Promise<GetDidServiceListResponse> {
    return this.request("GetDidServiceList", req, cb)
  }

  /**
     * 下线已有内测接口，待上线正式版本的接口

DID列表
     */
  async GetDidList(
    req: GetDidListRequest,
    cb?: (error: string, rep: GetDidListResponse) => void
  ): Promise<GetDidListResponse> {
    return this.request("GetDidList", req, cb)
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

凭证模版下载
     */
  async DownCpt(
    req: DownCptRequest,
    cb?: (error: string, rep: DownCptResponse) => void
  ): Promise<DownCptResponse> {
    return this.request("DownCpt", req, cb)
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

概览

     */
  async GetDataPanel(
    req: GetDataPanelRequest,
    cb?: (error: string, rep: GetDataPanelResponse) => void
  ): Promise<GetDataPanelResponse> {
    return this.request("GetDataPanel", req, cb)
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
     * 下线已有内测接口，待上线正式版本的接口

新建标签
     */
  async CreateLabel(
    req: CreateLabelRequest,
    cb?: (error: string, rep: CreateLabelResponse) => void
  ): Promise<CreateLabelResponse> {
    return this.request("CreateLabel", req, cb)
  }
}

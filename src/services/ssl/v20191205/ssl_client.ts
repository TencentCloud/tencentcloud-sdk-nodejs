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
  ApplyCertificateResponse,
  ManagerInfo,
  CompleteCertificateRequest,
  DeleteCertificateRequest,
  DescribeCertificateOperateLogsResponse,
  CommitCertificateInformationRequest,
  DownloadCertificateResponse,
  ReplaceCertificateResponse,
  SubmitAuditManagerResponse,
  DownloadCertificateRequest,
  CancelCertificateOrderRequest,
  ModifyCertificateProjectResponse,
  Certificates,
  CertificateExtra,
  CompanyInfo,
  DescribeManagersResponse,
  DescribeCertificateResponse,
  UploadCertificateRequest,
  UploadConfirmLetterRequest,
  OperationLog,
  VerifyManagerResponse,
  DescribeCertificateDetailRequest,
  Tags,
  SubmitAuditManagerRequest,
  DeleteManagerRequest,
  ApplyCertificateRequest,
  ReplaceCertificateRequest,
  UploadRevokeLetterResponse,
  DescribeDeployedResourcesRequest,
  CreateCertificateResponse,
  UploadRevokeLetterRequest,
  DeleteCertificateResponse,
  RevokeCertificateResponse,
  DeployedResources,
  DescribeCertificateDetailResponse,
  CheckCertificateChainResponse,
  ModifyCertificateProjectRequest,
  DvAuths,
  ModifyCertificateAliasRequest,
  DescribeCertificateRequest,
  DescribeManagerDetailRequest,
  DvAuthDetail,
  ProjectInfo,
  DescribeDeployedResourcesResponse,
  DescribeCertificateOperateLogsRequest,
  CancelCertificateOrderResponse,
  CreateCertificateRequest,
  DescribeCertificatesResponse,
  CommitCertificateInformationResponse,
  UploadConfirmLetterResponse,
  DeleteManagerResponse,
  VerifyManagerRequest,
  RevokeDomainValidateAuths,
  UploadCertificateResponse,
  CheckCertificateChainRequest,
  ModifyCertificateAliasResponse,
  DescribeManagerDetailResponse,
  ManagerStatusInfo,
  SubmitCertificateInformationRequest,
  DescribeCertificatesRequest,
  DescribeManagersRequest,
  CompleteCertificateResponse,
  SubmitCertificateInformationResponse,
  RevokeCertificateRequest,
  SubmittedData,
} from "./ssl_models"

/**
 * ssl client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ssl.tencentcloudapi.com", "2019-12-05", clientConfig)
  }

  /**
   * 本接口（DescribeCertificates）用于获取证书列表。
   */
  async DescribeCertificates(
    req: DescribeCertificatesRequest,
    cb?: (error: string, rep: DescribeCertificatesResponse) => void
  ): Promise<DescribeCertificatesResponse> {
    return this.request("DescribeCertificates", req, cb)
  }

  /**
   * 本接口（UploadRevokeLetter）用于上传证书吊销确认函。
   */
  async UploadRevokeLetter(
    req: UploadRevokeLetterRequest,
    cb?: (error: string, rep: UploadRevokeLetterResponse) => void
  ): Promise<UploadRevokeLetterResponse> {
    return this.request("UploadRevokeLetter", req, cb)
  }

  /**
   * 删除管理人
   */
  async DeleteManager(
    req: DeleteManagerRequest,
    cb?: (error: string, rep: DeleteManagerResponse) => void
  ): Promise<DeleteManagerResponse> {
    return this.request("DeleteManager", req, cb)
  }

  /**
   * 本接口（UploadConfirmLetter）用于上传证书确认函。
   */
  async UploadConfirmLetter(
    req: UploadConfirmLetterRequest,
    cb?: (error: string, rep: UploadConfirmLetterResponse) => void
  ): Promise<UploadConfirmLetterResponse> {
    return this.request("UploadConfirmLetter", req, cb)
  }

  /**
   * 重新提交审核管理人
   */
  async SubmitAuditManager(
    req: SubmitAuditManagerRequest,
    cb?: (error: string, rep: SubmitAuditManagerResponse) => void
  ): Promise<SubmitAuditManagerResponse> {
    return this.request("SubmitAuditManager", req, cb)
  }

  /**
   * 提交证书资料。输入参数信息可以分多次提交，但提交的证书资料应最低限度保持完整。
   */
  async SubmitCertificateInformation(
    req: SubmitCertificateInformationRequest,
    cb?: (error: string, rep: SubmitCertificateInformationResponse) => void
  ): Promise<SubmitCertificateInformationResponse> {
    return this.request("SubmitCertificateInformation", req, cb)
  }

  /**
   * 重新核验管理人
   */
  async VerifyManager(
    req: VerifyManagerRequest,
    cb?: (error: string, rep: VerifyManagerResponse) => void
  ): Promise<VerifyManagerResponse> {
    return this.request("VerifyManager", req, cb)
  }

  /**
   * 取消证书订单。
   */
  async CancelCertificateOrder(
    req: CancelCertificateOrderRequest,
    cb?: (error: string, rep: CancelCertificateOrderResponse) => void
  ): Promise<CancelCertificateOrderResponse> {
    return this.request("CancelCertificateOrder", req, cb)
  }

  /**
   * 本接口（DownloadCertificate）用于下载证书。
   */
  async DownloadCertificate(
    req: DownloadCertificateRequest,
    cb?: (error: string, rep: DownloadCertificateResponse) => void
  ): Promise<DownloadCertificateResponse> {
    return this.request("DownloadCertificate", req, cb)
  }

  /**
   * 本接口（DeleteCertificate）用于删除证书。
   */
  async DeleteCertificate(
    req: DeleteCertificateRequest,
    cb?: (error: string, rep: DeleteCertificateResponse) => void
  ): Promise<DeleteCertificateResponse> {
    return this.request("DeleteCertificate", req, cb)
  }

  /**
   * 本接口（CompleteCertificate）用于主动触发证书验证。仅非DNSPod和Wotrus品牌证书支持使用此接口。
   */
  async CompleteCertificate(
    req: CompleteCertificateRequest,
    cb?: (error: string, rep: CompleteCertificateResponse) => void
  ): Promise<CompleteCertificateResponse> {
    return this.request("CompleteCertificate", req, cb)
  }

  /**
   * 本接口（UploadCertificate）用于上传证书。
   */
  async UploadCertificate(
    req: UploadCertificateRequest,
    cb?: (error: string, rep: UploadCertificateResponse) => void
  ): Promise<UploadCertificateResponse> {
    return this.request("UploadCertificate", req, cb)
  }

  /**
   * 本接口（CheckCertificateChain）用于检查证书链是否完整。
   */
  async CheckCertificateChain(
    req: CheckCertificateChainRequest,
    cb?: (error: string, rep: CheckCertificateChainResponse) => void
  ): Promise<CheckCertificateChainResponse> {
    return this.request("CheckCertificateChain", req, cb)
  }

  /**
   * 本接口（DescribeCertificate）用于获取证书信息。
   */
  async DescribeCertificate(
    req: DescribeCertificateRequest,
    cb?: (error: string, rep: DescribeCertificateResponse) => void
  ): Promise<DescribeCertificateResponse> {
    return this.request("DescribeCertificate", req, cb)
  }

  /**
   * 获取证书详情。
   */
  async DescribeCertificateDetail(
    req: DescribeCertificateDetailRequest,
    cb?: (error: string, rep: DescribeCertificateDetailResponse) => void
  ): Promise<DescribeCertificateDetailResponse> {
    return this.request("DescribeCertificateDetail", req, cb)
  }

  /**
   * 查询管理人详情
   */
  async DescribeManagerDetail(
    req: DescribeManagerDetailRequest,
    cb?: (error: string, rep: DescribeManagerDetailResponse) => void
  ): Promise<DescribeManagerDetailResponse> {
    return this.request("DescribeManagerDetail", req, cb)
  }

  /**
   * 批量修改证书所属项目。
   */
  async ModifyCertificateProject(
    req: ModifyCertificateProjectRequest,
    cb?: (error: string, rep: ModifyCertificateProjectResponse) => void
  ): Promise<ModifyCertificateProjectResponse> {
    return this.request("ModifyCertificateProject", req, cb)
  }

  /**
   * 用户传入证书id和备注来修改证书备注。
   */
  async ModifyCertificateAlias(
    req: ModifyCertificateAliasRequest,
    cb?: (error: string, rep: ModifyCertificateAliasResponse) => void
  ): Promise<ModifyCertificateAliasResponse> {
    return this.request("ModifyCertificateAlias", req, cb)
  }

  /**
   * 证书查询关联资源
   */
  async DescribeDeployedResources(
    req: DescribeDeployedResourcesRequest,
    cb?: (error: string, rep: DescribeDeployedResourcesResponse) => void
  ): Promise<DescribeDeployedResourcesResponse> {
    return this.request("DescribeDeployedResources", req, cb)
  }

  /**
   * 本接口（CreateCertificate）用于创建付费证书。
   */
  async CreateCertificate(
    req: CreateCertificateRequest,
    cb?: (error: string, rep: CreateCertificateResponse) => void
  ): Promise<CreateCertificateResponse> {
    return this.request("CreateCertificate", req, cb)
  }

  /**
   * 提交证书订单。
   */
  async CommitCertificateInformation(
    req: CommitCertificateInformationRequest,
    cb?: (error: string, rep: CommitCertificateInformationResponse) => void
  ): Promise<CommitCertificateInformationResponse> {
    return this.request("CommitCertificateInformation", req, cb)
  }

  /**
   * 获取用户账号下有关证书的操作日志。
   */
  async DescribeCertificateOperateLogs(
    req: DescribeCertificateOperateLogsRequest,
    cb?: (error: string, rep: DescribeCertificateOperateLogsResponse) => void
  ): Promise<DescribeCertificateOperateLogsResponse> {
    return this.request("DescribeCertificateOperateLogs", req, cb)
  }

  /**
   * 本接口（ReplaceCertificate）用于重颁发证书。已申请的免费证书仅支持 RSA 算法、密钥对参数为2048的证书重颁发，并且目前仅支持1次重颁发。
   */
  async ReplaceCertificate(
    req: ReplaceCertificateRequest,
    cb?: (error: string, rep: ReplaceCertificateResponse) => void
  ): Promise<ReplaceCertificateResponse> {
    return this.request("ReplaceCertificate", req, cb)
  }

  /**
   * 本接口（ApplyCertificate）用于免费证书申请。
   */
  async ApplyCertificate(
    req: ApplyCertificateRequest,
    cb?: (error: string, rep: ApplyCertificateResponse) => void
  ): Promise<ApplyCertificateResponse> {
    return this.request("ApplyCertificate", req, cb)
  }

  /**
   * 本接口（RevokeCertificate）用于吊销证书。
   */
  async RevokeCertificate(
    req: RevokeCertificateRequest,
    cb?: (error: string, rep: RevokeCertificateResponse) => void
  ): Promise<RevokeCertificateResponse> {
    return this.request("RevokeCertificate", req, cb)
  }

  /**
   * 查询管理人列表
   */
  async DescribeManagers(
    req: DescribeManagersRequest,
    cb?: (error: string, rep: DescribeManagersResponse) => void
  ): Promise<DescribeManagersResponse> {
    return this.request("DescribeManagers", req, cb)
  }
}

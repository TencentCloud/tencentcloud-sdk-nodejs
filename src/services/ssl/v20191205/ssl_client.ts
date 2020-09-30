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
  DeleteCertificateRequest,
  DescribeCertificateOperateLogsResponse,
  CommitCertificateInformationRequest,
  CommitCertificateInformationResponse,
  ReplaceCertificateResponse,
  DownloadCertificateRequest,
  CancelCertificateOrderRequest,
  ModifyCertificateProjectResponse,
  Certificates,
  CertificateExtra,
  DescribeCertificateResponse,
  OperationLog,
  UploadCertificateRequest,
  DescribeCertificateDetailRequest,
  ApplyCertificateRequest,
  ReplaceCertificateRequest,
  DeleteCertificateResponse,
  DvAuthDetail,
  ModifyCertificateProjectRequest,
  DvAuths,
  ModifyCertificateAliasRequest,
  DescribeCertificateRequest,
  ProjectInfo,
  DescribeCertificateOperateLogsRequest,
  CancelCertificateOrderResponse,
  SubmitCertificateInformationResponse,
  DescribeCertificatesResponse,
  DownloadCertificateResponse,
  UploadCertificateResponse,
  DescribeCertificateDetailResponse,
  ModifyCertificateAliasResponse,
  SubmitCertificateInformationRequest,
  SubmittedData,
  DescribeCertificatesRequest,
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
   * 批量修改证书所属项目。
   */
  async ModifyCertificateProject(
    req: ModifyCertificateProjectRequest,
    cb?: (error: string, rep: ModifyCertificateProjectResponse) => void
  ): Promise<ModifyCertificateProjectResponse> {
    return this.request("ModifyCertificateProject", req, cb)
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
   * 取消证书订单。
   */
  async CancelCertificateOrder(
    req: CancelCertificateOrderRequest,
    cb?: (error: string, rep: CancelCertificateOrderResponse) => void
  ): Promise<CancelCertificateOrderResponse> {
    return this.request("CancelCertificateOrder", req, cb)
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
   * 本接口（DeleteCertificate）用于删除证书。
   */
  async DeleteCertificate(
    req: DeleteCertificateRequest,
    cb?: (error: string, rep: DeleteCertificateResponse) => void
  ): Promise<DeleteCertificateResponse> {
    return this.request("DeleteCertificate", req, cb)
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
   * 本接口（DownloadCertificate）用于下载证书。
   */
  async DownloadCertificate(
    req: DownloadCertificateRequest,
    cb?: (error: string, rep: DownloadCertificateResponse) => void
  ): Promise<DownloadCertificateResponse> {
    return this.request("DownloadCertificate", req, cb)
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
   * 获取用户账号下有关证书的操作日志。
   */
  async DescribeCertificateOperateLogs(
    req: DescribeCertificateOperateLogsRequest,
    cb?: (error: string, rep: DescribeCertificateOperateLogsResponse) => void
  ): Promise<DescribeCertificateOperateLogsResponse> {
    return this.request("DescribeCertificateOperateLogs", req, cb)
  }

  /**
   * 提交证书资料。
   */
  async SubmitCertificateInformation(
    req: SubmitCertificateInformationRequest,
    cb?: (error: string, rep: SubmitCertificateInformationResponse) => void
  ): Promise<SubmitCertificateInformationResponse> {
    return this.request("SubmitCertificateInformation", req, cb)
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
   * 本接口（DescribeCertificate）用于获取证书信息。
   */
  async DescribeCertificate(
    req: DescribeCertificateRequest,
    cb?: (error: string, rep: DescribeCertificateResponse) => void
  ): Promise<DescribeCertificateResponse> {
    return this.request("DescribeCertificate", req, cb)
  }
}

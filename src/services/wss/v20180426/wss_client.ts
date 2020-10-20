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
  DeleteCertRequest,
  UploadCertResponse,
  DeleteCertResponse,
  DescribeCertListResponse,
  UploadCertRequest,
  SSLCertificate,
  DescribeCertListRequest,
  SSLProjectInfo,
} from "./wss_models"

/**
 * wss client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("wss.tencentcloudapi.com", "2018-04-26", clientConfig)
  }

  /**
   * 本接口（DeleteCert）用于删除证书。
   */
  async DeleteCert(
    req: DeleteCertRequest,
    cb?: (error: string, rep: DeleteCertResponse) => void
  ): Promise<DeleteCertResponse> {
    return this.request("DeleteCert", req, cb)
  }

  /**
   * 本接口(DescribeCertList)用于获取证书列表。
   */
  async DescribeCertList(
    req: DescribeCertListRequest,
    cb?: (error: string, rep: DescribeCertListResponse) => void
  ): Promise<DescribeCertListResponse> {
    return this.request("DescribeCertList", req, cb)
  }

  /**
   * 本接口（UploadCert）用于上传证书。
   */
  async UploadCert(
    req: UploadCertRequest,
    cb?: (error: string, rep: UploadCertResponse) => void
  ): Promise<UploadCertResponse> {
    return this.request("UploadCert", req, cb)
  }
}

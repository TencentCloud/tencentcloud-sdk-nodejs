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
  CreateLicenseResponse,
  KeyParam,
  GenerateTDRMKeyResponse,
  FairPlayPemDigestInfo,
  GenerateTDRMKeyRequest,
  CreateEncryptKeysResponse,
  CreateLicenseRequest,
  DescribeAllKeysRequest,
  DrmSourceObject,
  CreateEncryptKeysRequest,
  ModifyFairPlayPemResponse,
  DescribeFairPlayPemResponse,
  Key,
  DescribeDRMLicenseResponse,
  PlaybackPolicy,
  AddFairPlayPemResponse,
  AddFairPlayPemRequest,
  DeleteFairPlayPemRequest,
  DescribeKeysResponse,
  DescribeDRMLicenseRequest,
  DescribeAllKeysResponse,
  StartEncryptionRequest,
  ModifyFairPlayPemRequest,
  DeleteFairPlayPemResponse,
  DrmOutputPara,
  StartEncryptionResponse,
  DescribeFairPlayPemRequest,
  DescribeKeysRequest,
  DrmOutputObject,
} from "./drm_models"

/**
 * drm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("drm.tencentcloudapi.com", "2018-11-15", clientConfig)
  }

  /**
     * 开发者调用该接口，启动一次内容文件的DRM加密工作流。
注意：该接口已下线。
     */
  async StartEncryption(
    req: StartEncryptionRequest,
    cb?: (error: string, rep: StartEncryptionResponse) => void
  ): Promise<StartEncryptionResponse> {
    return this.request("StartEncryption", req, cb)
  }

  /**
     * 本接口用来设置fairplay方案所需的私钥、私钥密钥、ask等信息。
如需使用fairplay方案，请务必先设置私钥。
     */
  async AddFairPlayPem(
    req: AddFairPlayPemRequest,
    cb?: (error: string, rep: AddFairPlayPemResponse) => void
  ): Promise<AddFairPlayPemResponse> {
    return this.request("AddFairPlayPem", req, cb)
  }

  /**
   * 该接口用来设置加密的密钥。注意，同一个content id，只能设置一次！
   */
  async CreateEncryptKeys(
    req: CreateEncryptKeysRequest,
    cb?: (error: string, rep: CreateEncryptKeysResponse) => void
  ): Promise<CreateEncryptKeysResponse> {
    return this.request("CreateEncryptKeys", req, cb)
  }

  /**
     * 本接口用来生成DRM方案对应的播放许可证，开发者需提供DRM方案类型、内容类型参数，后台将生成许可证后返回许可证数据
开发者需要转发终端设备发出的许可证请求信息。
     */
  async CreateLicense(
    req: CreateLicenseRequest,
    cb?: (error: string, rep: CreateLicenseResponse) => void
  ): Promise<CreateLicenseResponse> {
    return this.request("CreateLicense", req, cb)
  }

  /**
     * 本接口用来设置fairplay方案所需的私钥、私钥密钥、ask等信息。
如需使用fairplay方案，请务必先设置私钥。
     */
  async ModifyFairPlayPem(
    req: ModifyFairPlayPemRequest,
    cb?: (error: string, rep: ModifyFairPlayPemResponse) => void
  ): Promise<ModifyFairPlayPemResponse> {
    return this.request("ModifyFairPlayPem", req, cb)
  }

  /**
     * 开发者需要指定使用的DRM类型、和需要加密的Track类型，后台返回加密使用的密钥
如果加密使用的ContentID没有关联的密钥信息，后台会自动生成新的密钥返回

     */
  async DescribeKeys(
    req: DescribeKeysRequest,
    cb?: (error: string, rep: DescribeKeysResponse) => void
  ): Promise<DescribeKeysResponse> {
    return this.request("DescribeKeys", req, cb)
  }

  /**
     * 开发者需要指定使用的DRM类型取值 NORMALAES、和需要加密的Track类型取值 SD,ContentType取值 LiveVideo

     */
  async DescribeDRMLicense(
    req: DescribeDRMLicenseRequest,
    cb?: (error: string, rep: DescribeDRMLicenseResponse) => void
  ): Promise<DescribeDRMLicenseResponse> {
    return this.request("DescribeDRMLicense", req, cb)
  }

  /**
     * 本接口用来查询指定DRM类型、ContentType的所有加密密钥

     */
  async DescribeAllKeys(
    req: DescribeAllKeysRequest,
    cb?: (error: string, rep: DescribeAllKeysResponse) => void
  ): Promise<DescribeAllKeysResponse> {
    return this.request("DescribeAllKeys", req, cb)
  }

  /**
     * 本接口用来删除fairplay方案的私钥、ask等信息
注：高风险操作，删除后，您将无法使用腾讯云DRM提供的fairplay服务。
由于缓存，删除操作需要约半小时生效
     */
  async DeleteFairPlayPem(
    req: DeleteFairPlayPemRequest,
    cb?: (error: string, rep: DeleteFairPlayPemResponse) => void
  ): Promise<DeleteFairPlayPemResponse> {
    return this.request("DeleteFairPlayPem", req, cb)
  }

  /**
   * 该接口用来查询设置的FairPlay私钥校验信息。可用该接口校验设置的私钥与本身的私钥是否一致。
   */
  async DescribeFairPlayPem(
    req: DescribeFairPlayPemRequest,
    cb?: (error: string, rep: DescribeFairPlayPemResponse) => void
  ): Promise<DescribeFairPlayPemResponse> {
    return this.request("DescribeFairPlayPem", req, cb)
  }

  /**
   * 开发者需要指定使用的DRM类型取值 NORMALAES、和需要加密的Track类型取值 SD,ContentType取值 LiveVideo
   */
  async GenerateTDRMKey(
    req: GenerateTDRMKeyRequest,
    cb?: (error: string, rep: GenerateTDRMKeyResponse) => void
  ): Promise<GenerateTDRMKeyResponse> {
    return this.request("GenerateTDRMKey", req, cb)
  }
}

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
  DeleteSecretVersionResponse,
  RestoreSecretResponse,
  UpdateDescriptionResponse,
  DescribeSecretResponse,
  DescribeSupportedProductsRequest,
  GetSecretValueRequest,
  DeleteSecretRequest,
  CreateSecretRequest,
  RotateProductSecretRequest,
  CreateProductSecretRequest,
  GetSecretValueResponse,
  GetRegionsResponse,
  DescribeSupportedProductsResponse,
  DeleteSecretVersionRequest,
  SecretMetadata,
  ListSecretVersionIdsRequest,
  DescribeRotationDetailRequest,
  CreateSSHKeyPairSecretResponse,
  UpdateRotationStatusResponse,
  CreateSecretResponse,
  GetRegionsRequest,
  UpdateSecretResponse,
  DisableSecretResponse,
  Tag,
  ListSecretsRequest,
  UpdateDescriptionRequest,
  EnableSecretResponse,
  CreateSSHKeyPairSecretRequest,
  UpdateRotationStatusRequest,
  UpdateSecretRequest,
  DescribeAsyncRequestInfoResponse,
  RestoreSecretRequest,
  RotateProductSecretResponse,
  VersionInfo,
  TagFilter,
  PutSecretValueRequest,
  PutSecretValueResponse,
  DescribeRotationHistoryResponse,
  GetSSHKeyPairValueRequest,
  DescribeAsyncRequestInfoRequest,
  GetServiceStatusResponse,
  DescribeRotationDetailResponse,
  EnableSecretRequest,
  ProductPrivilegeUnit,
  DescribeRotationHistoryRequest,
  GetSSHKeyPairValueResponse,
  DeleteSecretResponse,
  DisableSecretRequest,
  CreateProductSecretResponse,
  ListSecretsResponse,
  DescribeSecretRequest,
  GetServiceStatusRequest,
  ListSecretVersionIdsResponse,
} from "./ssm_models"

/**
 * ssm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ssm.tencentcloudapi.com", "2019-09-23", clientConfig)
  }

  /**
     * 查询凭据轮转历史版本。
本接口仅适用于云产品凭据。
     */
  async DescribeRotationHistory(
    req: DescribeRotationHistoryRequest,
    cb?: (error: string, rep: DescribeRotationHistoryResponse) => void
  ): Promise<DescribeRotationHistoryResponse> {
    return this.request("DescribeRotationHistory", req, cb)
  }

  /**
     * 轮转云产品凭据或云API密钥对凭据。
该接口仅适用于处于Enabled状态的云产品凭据或处于Enable状态的云API密钥对凭据，对于其他状态的云产品凭据或云API密钥对凭据或用户自定义凭据不适用。
     */
  async RotateProductSecret(
    req: RotateProductSecretRequest,
    cb?: (error: string, rep: RotateProductSecretResponse) => void
  ): Promise<RotateProductSecretResponse> {
    return this.request("RotateProductSecret", req, cb)
  }

  /**
   * 删除指定的凭据信息，可以通过RecoveryWindowInDays参数设置立即删除或者计划删除。对于计划删除的凭据，在删除日期到达之前状态为 PendingDelete，并可以通过RestoreSecret 进行恢复，超出指定删除日期之后会被彻底删除。您必须先通过 DisableSecret 停用凭据后才可以进行（计划）删除操作。
   */
  async DeleteSecret(
    req: DeleteSecretRequest,
    cb?: (error: string, rep: DeleteSecretResponse) => void
  ): Promise<DeleteSecretResponse> {
    return this.request("DeleteSecret", req, cb)
  }

  /**
     * 该接口用于更新指定凭据名称和版本号的内容，调用该接口会对新的凭据内容加密后覆盖旧的内容。仅允许更新Enabled 和 Disabled 状态的凭据。
本接口仅适用于用户自定义凭据，不能对云产品凭据操作。
     */
  async UpdateSecret(
    req: UpdateSecretRequest,
    cb?: (error: string, rep: UpdateSecretResponse) => void
  ): Promise<UpdateSecretResponse> {
    return this.request("UpdateSecret", req, cb)
  }

  /**
   * 该接口用于获取所有凭据的详细列表，可以指定过滤字段、排序方式等。
   */
  async ListSecrets(
    req: ListSecretsRequest,
    cb?: (error: string, rep: ListSecretsResponse) => void
  ): Promise<ListSecretsResponse> {
    return this.request("ListSecrets", req, cb)
  }

  /**
   * 创建用于托管SSH密钥对的凭据
   */
  async CreateSSHKeyPairSecret(
    req: CreateSSHKeyPairSecretRequest,
    cb?: (error: string, rep: CreateSSHKeyPairSecretResponse) => void
  ): Promise<CreateSSHKeyPairSecretResponse> {
    return this.request("CreateSSHKeyPairSecret", req, cb)
  }

  /**
     * 设置云产品凭据轮转策略，可以设置：
是否开启轮转
轮转周期
轮转开始时间
     */
  async UpdateRotationStatus(
    req: UpdateRotationStatusRequest,
    cb?: (error: string, rep: UpdateRotationStatusResponse) => void
  ): Promise<UpdateRotationStatusResponse> {
    return this.request("UpdateRotationStatus", req, cb)
  }

  /**
   * 查询支持的云产品列表
   */
  async DescribeSupportedProducts(
    req?: DescribeSupportedProductsRequest,
    cb?: (error: string, rep: DescribeSupportedProductsResponse) => void
  ): Promise<DescribeSupportedProductsResponse> {
    return this.request("DescribeSupportedProducts", req, cb)
  }

  /**
     * 对于用户自定义凭据，通过指定凭据名称和版本来获取凭据的明文信息；
对于云产品凭据如Mysql凭据，通过指定凭据名称和历史版本号来获取历史轮转凭据的明文信息，如果要获取当前正在使用的凭据版本的明文，需要将版本号指定为：SSM_Current。
     */
  async GetSecretValue(
    req: GetSecretValueRequest,
    cb?: (error: string, rep: GetSecretValueResponse) => void
  ): Promise<GetSecretValueResponse> {
    return this.request("GetSecretValue", req, cb)
  }

  /**
   * 查询异步任务的执行结果
   */
  async DescribeAsyncRequestInfo(
    req: DescribeAsyncRequestInfoRequest,
    cb?: (error: string, rep: DescribeAsyncRequestInfoResponse) => void
  ): Promise<DescribeAsyncRequestInfoResponse> {
    return this.request("DescribeAsyncRequestInfo", req, cb)
  }

  /**
   * 创建云产品凭据
   */
  async CreateProductSecret(
    req: CreateProductSecretRequest,
    cb?: (error: string, rep: CreateProductSecretResponse) => void
  ): Promise<CreateProductSecretResponse> {
    return this.request("CreateProductSecret", req, cb)
  }

  /**
     * 该接口用于直接删除指定凭据下的单个版本凭据，删除操作立即生效，对所有状态下的凭据版本都可以删除。
本接口仅适用于用户自定义凭据，本接口不能对云产品凭据进行操作。
     */
  async DeleteSecretVersion(
    req: DeleteSecretVersionRequest,
    cb?: (error: string, rep: DeleteSecretVersionResponse) => void
  ): Promise<DeleteSecretVersionResponse> {
    return this.request("DeleteSecretVersion", req, cb)
  }

  /**
   * 该接口用于修改指定凭据的描述信息，仅能修改Enabled 和 Disabled 状态的凭据。
   */
  async UpdateDescription(
    req: UpdateDescriptionRequest,
    cb?: (error: string, rep: UpdateDescriptionResponse) => void
  ): Promise<UpdateDescriptionResponse> {
    return this.request("UpdateDescription", req, cb)
  }

  /**
     * 该接口在指定名称的凭据下增加新版本的凭据内容，一个凭据下最多可以支持10个版本。只能对处于Enabled 和 Disabled 状态的凭据添加新的版本。
本接口仅适用于用户自定义凭据，对云产品凭据不能操作。
     */
  async PutSecretValue(
    req: PutSecretValueRequest,
    cb?: (error: string, rep: PutSecretValueResponse) => void
  ): Promise<PutSecretValueResponse> {
    return this.request("PutSecretValue", req, cb)
  }

  /**
   * 获取凭据的详细属性信息。
   */
  async DescribeSecret(
    req: DescribeSecretRequest,
    cb?: (error: string, rep: DescribeSecretResponse) => void
  ): Promise<DescribeSecretResponse> {
    return this.request("DescribeSecret", req, cb)
  }

  /**
     * 查询凭据轮转策略详情。
本接口只适用于云产品凭据。
     */
  async DescribeRotationDetail(
    req: DescribeRotationDetailRequest,
    cb?: (error: string, rep: DescribeRotationDetailResponse) => void
  ): Promise<DescribeRotationDetailResponse> {
    return this.request("DescribeRotationDetail", req, cb)
  }

  /**
   * 获取SSH密钥对凭据明文信息。
   */
  async GetSSHKeyPairValue(
    req: GetSSHKeyPairValueRequest,
    cb?: (error: string, rep: GetSSHKeyPairValueResponse) => void
  ): Promise<GetSSHKeyPairValueResponse> {
    return this.request("GetSSHKeyPairValue", req, cb)
  }

  /**
   * 该接口用于获取指定凭据下的版本列表信息
   */
  async ListSecretVersionIds(
    req: ListSecretVersionIdsRequest,
    cb?: (error: string, rep: ListSecretVersionIdsResponse) => void
  ): Promise<ListSecretVersionIdsResponse> {
    return this.request("ListSecretVersionIds", req, cb)
  }

  /**
   * 创建新的凭据信息，通过KMS进行加密保护。每个Region最多可创建存储1000个凭据信息。
   */
  async CreateSecret(
    req: CreateSecretRequest,
    cb?: (error: string, rep: CreateSecretResponse) => void
  ): Promise<CreateSecretResponse> {
    return this.request("CreateSecret", req, cb)
  }

  /**
   * 该接口用于开启凭据，状态为Enabled。可以通过 GetSecretValue 接口获取凭据明文。处于PendingDelete状态的凭据不能直接开启，需要通过RestoreSecret 恢复后再开启使用。
   */
  async EnableSecret(
    req: EnableSecretRequest,
    cb?: (error: string, rep: EnableSecretResponse) => void
  ): Promise<EnableSecretResponse> {
    return this.request("EnableSecret", req, cb)
  }

  /**
   * 该接口用于恢复计划删除（PendingDelete状态）中的凭据，取消计划删除。取消计划删除的凭据将处于Disabled 状态，如需恢复使用，通过EnableSecret 接口开启凭据。
   */
  async RestoreSecret(
    req: RestoreSecretRequest,
    cb?: (error: string, rep: RestoreSecretResponse) => void
  ): Promise<RestoreSecretResponse> {
    return this.request("RestoreSecret", req, cb)
  }

  /**
   * 该接口用户获取用户SecretsManager服务开通状态。
   */
  async GetServiceStatus(
    req?: GetServiceStatusRequest,
    cb?: (error: string, rep: GetServiceStatusResponse) => void
  ): Promise<GetServiceStatusResponse> {
    return this.request("GetServiceStatus", req, cb)
  }

  /**
   * 获取控制台展示region列表
   */
  async GetRegions(
    req?: GetRegionsRequest,
    cb?: (error: string, rep: GetRegionsResponse) => void
  ): Promise<GetRegionsResponse> {
    return this.request("GetRegions", req, cb)
  }

  /**
   * 停用指定的凭据，停用后状态为 Disabled，无法通过接口获取该凭据的明文。
   */
  async DisableSecret(
    req: DisableSecretRequest,
    cb?: (error: string, rep: DisableSecretResponse) => void
  ): Promise<DisableSecretResponse> {
    return this.request("DisableSecret", req, cb)
  }
}

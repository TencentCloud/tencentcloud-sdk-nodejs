/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  CreateIncrementalMigrationStrategyResponse,
  IncrementalMigrationStrategyInfo,
  DeleteIncrementalMigrationStrategyRequest,
  IncrementalMigrationHttpOriginInfo,
  CreateStorageCredentialsRequest,
  IncrementalMigrationHttpEndpointInfo,
  IncrementalMigrationOriginPrefixConfig,
  DescribeIncrementalMigrationStrategyInfosResponse,
  IncrementalMigrationHttpHeader,
  StorageInfo,
  DescribeStorageRequest,
  DescribeIncrementalMigrationStrategyInfosRequest,
  IncrementalMigrationHttpHeaderInfo,
  ModifyIncrementalMigrationStrategyRequest,
  CreateStorageCredentialsResponse,
  IncrementalMigrationOriginFixedFileConfig,
  Filter,
  DeleteIncrementalMigrationStrategyResponse,
  IncrementalMigrationOriginFileInfo,
  Credentials,
  CreateStorageRequest,
  DescribeStorageResponse,
  ModifyIncrementalMigrationStrategyResponse,
  IncrementalMigrationHttpOriginCondition,
  CreateStorageResponse,
  IncrementalMigrationHttpOriginParameter,
  IncrementalMigrationOriginSuffixConfig,
  IncrementalMigrationHttpOriginConfig,
  SortBy,
  CreateIncrementalMigrationStrategyRequest,
} from "./vod_models"

/**
 * vod client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vod.tencentcloudapi.com", "2024-07-18", clientConfig)
  }

  /**
   * 创建增量迁移策略。
   */
  async ModifyIncrementalMigrationStrategy(
    req: ModifyIncrementalMigrationStrategyRequest,
    cb?: (error: string, rep: ModifyIncrementalMigrationStrategyResponse) => void
  ): Promise<ModifyIncrementalMigrationStrategyResponse> {
    return this.request("ModifyIncrementalMigrationStrategy", req, cb)
  }

  /**
   * 查询增量迁移策略信息。
   */
  async DescribeIncrementalMigrationStrategyInfos(
    req: DescribeIncrementalMigrationStrategyInfosRequest,
    cb?: (error: string, rep: DescribeIncrementalMigrationStrategyInfosResponse) => void
  ): Promise<DescribeIncrementalMigrationStrategyInfosResponse> {
    return this.request("DescribeIncrementalMigrationStrategyInfos", req, cb)
  }

  /**
     * 该接口用于为专业版应用创建存储桶。

注：
- 本接口仅用于专业版应用；
- 客户创建点播专业版应用时，系统默认为客户开通了部分地域的存储，用户如果需要开通其它地域的存储，可以通过该接口进行开通；
- 通过 [DescribeStorageRegions](https://cloud.tencent.com/document/product/266/72480) 接口可以查询到所有存储地域及已经开通存储桶的地域。
     */
  async CreateStorage(
    req: CreateStorageRequest,
    cb?: (error: string, rep: CreateStorageResponse) => void
  ): Promise<CreateStorageResponse> {
    return this.request("CreateStorage", req, cb)
  }

  /**
   * 创建增量迁移策略。
   */
  async CreateIncrementalMigrationStrategy(
    req: CreateIncrementalMigrationStrategyRequest,
    cb?: (error: string, rep: CreateIncrementalMigrationStrategyResponse) => void
  ): Promise<CreateIncrementalMigrationStrategyResponse> {
    return this.request("CreateIncrementalMigrationStrategy", req, cb)
  }

  /**
   * 删除增量迁移策略。
   */
  async DeleteIncrementalMigrationStrategy(
    req: DeleteIncrementalMigrationStrategyRequest,
    cb?: (error: string, rep: DeleteIncrementalMigrationStrategyResponse) => void
  ): Promise<DeleteIncrementalMigrationStrategyResponse> {
    return this.request("DeleteIncrementalMigrationStrategy", req, cb)
  }

  /**
     * 该接口用于查询专业版应用中的存储桶信息，同时支持分页查询。

注：
- 本接口仅用于专业版应用。
     */
  async DescribeStorage(
    req: DescribeStorageRequest,
    cb?: (error: string, rep: DescribeStorageResponse) => void
  ): Promise<DescribeStorageResponse> {
    return this.request("DescribeStorage", req, cb)
  }

  /**
   * 用于按指定策略，生成专业版应用的临时访问凭证，比如生成用于客户端上传的临时凭证。
   */
  async CreateStorageCredentials(
    req: CreateStorageCredentialsRequest,
    cb?: (error: string, rep: CreateStorageCredentialsResponse) => void
  ): Promise<CreateStorageCredentialsResponse> {
    return this.request("CreateStorageCredentials", req, cb)
  }
}

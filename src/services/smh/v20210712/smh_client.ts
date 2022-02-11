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
  ModifyLibraryResponse,
  DescribeLibrariesResponse,
  SendSmsCodeResponse,
  Instance,
  TrafficPackage,
  DeleteLibraryRequest,
  DescribeTrafficPackagesRequest,
  DescribeTrafficPackagesResponse,
  DescribeLibrarySecretRequest,
  DescribeLibrarySecretResponse,
  SendSmsCodeRequest,
  DescribeOfficialInstancesRequest,
  DescribeLibrariesRequest,
  LibraryExtension,
  VerifySmsCodeResponse,
  ModifyLibraryRequest,
  DescribeOfficialOverviewRequest,
  DeleteLibraryResponse,
  DescribeOfficialInstancesResponse,
  VerifySmsCodeRequest,
  CreateLibraryResponse,
  Library,
  CreateLibraryRequest,
  DescribeOfficialOverviewResponse,
} from "./smh_models"

/**
 * smh client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("smh.tencentcloudapi.com", "2021-07-12", clientConfig)
  }

  /**
   * 查询官方云盘实例
   */
  async DescribeOfficialInstances(
    req: DescribeOfficialInstancesRequest,
    cb?: (error: string, rep: DescribeOfficialInstancesResponse) => void
  ): Promise<DescribeOfficialInstancesResponse> {
    return this.request("DescribeOfficialInstances", req, cb)
  }

  /**
   * 创建 PaaS 服务媒体库
   */
  async CreateLibrary(
    req: CreateLibraryRequest,
    cb?: (error: string, rep: CreateLibraryResponse) => void
  ): Promise<CreateLibraryResponse> {
    return this.request("CreateLibrary", req, cb)
  }

  /**
   * 发送用于换绑官方云盘实例的超级管理员账号的短信验证码
   */
  async SendSmsCode(
    req: SendSmsCodeRequest,
    cb?: (error: string, rep: SendSmsCodeResponse) => void
  ): Promise<SendSmsCodeResponse> {
    return this.request("SendSmsCode", req, cb)
  }

  /**
   * 验证短信验证码以换绑官方云盘实例的超级管理员账号
   */
  async VerifySmsCode(
    req: VerifySmsCodeRequest,
    cb?: (error: string, rep: VerifySmsCodeResponse) => void
  ): Promise<VerifySmsCodeResponse> {
    return this.request("VerifySmsCode", req, cb)
  }

  /**
   * 查询 PaaS 服务媒体库列表
   */
  async DescribeLibraries(
    req: DescribeLibrariesRequest,
    cb?: (error: string, rep: DescribeLibrariesResponse) => void
  ): Promise<DescribeLibrariesResponse> {
    return this.request("DescribeLibraries", req, cb)
  }

  /**
   * 修改 PaaS 服务媒体库配置项
   */
  async ModifyLibrary(
    req: ModifyLibraryRequest,
    cb?: (error: string, rep: ModifyLibraryResponse) => void
  ): Promise<ModifyLibraryResponse> {
    return this.request("ModifyLibrary", req, cb)
  }

  /**
   * 查询官方云盘实例概览数据
   */
  async DescribeOfficialOverview(
    req?: DescribeOfficialOverviewRequest,
    cb?: (error: string, rep: DescribeOfficialOverviewResponse) => void
  ): Promise<DescribeOfficialOverviewResponse> {
    return this.request("DescribeOfficialOverview", req, cb)
  }

  /**
   * 查询流量资源包
   */
  async DescribeTrafficPackages(
    req: DescribeTrafficPackagesRequest,
    cb?: (error: string, rep: DescribeTrafficPackagesResponse) => void
  ): Promise<DescribeTrafficPackagesResponse> {
    return this.request("DescribeTrafficPackages", req, cb)
  }

  /**
   * 删除 PaaS 服务媒体库
   */
  async DeleteLibrary(
    req: DeleteLibraryRequest,
    cb?: (error: string, rep: DeleteLibraryResponse) => void
  ): Promise<DeleteLibraryResponse> {
    return this.request("DeleteLibrary", req, cb)
  }

  /**
   * 查询 PaaS 服务媒体库密钥
   */
  async DescribeLibrarySecret(
    req: DescribeLibrarySecretRequest,
    cb?: (error: string, rep: DescribeLibrarySecretResponse) => void
  ): Promise<DescribeLibrarySecretResponse> {
    return this.request("DescribeLibrarySecret", req, cb)
  }
}

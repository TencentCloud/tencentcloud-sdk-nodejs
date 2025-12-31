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
  CosStorageSource,
  StartSandboxInstanceRequest,
  SandboxInstance,
  StopSandboxInstanceRequest,
  DescribeSandboxToolListResponse,
  CreateAPIKeyResponse,
  DescribeSandboxToolListRequest,
  CreateSandboxToolRequest,
  HttpGetAction,
  DeleteAPIKeyResponse,
  APIKeyInfo,
  UpdateSandboxInstanceResponse,
  StorageSource,
  ResourceConfiguration,
  DeleteSandboxToolRequest,
  CreateAPIKeyRequest,
  NetworkConfiguration,
  DeleteSandboxToolResponse,
  PortConfiguration,
  SandboxTool,
  MountOption,
  Filter,
  StartSandboxInstanceResponse,
  CustomConfiguration,
  ImageStorageSource,
  AcquireSandboxInstanceTokenRequest,
  DescribeAPIKeyListResponse,
  DescribeSandboxInstanceListRequest,
  CustomConfigurationDetail,
  DescribeAPIKeyListRequest,
  UpdateSandboxInstanceRequest,
  CreateSandboxToolResponse,
  UpdateSandboxToolResponse,
  VPCConfig,
  DeleteAPIKeyRequest,
  AcquireSandboxInstanceTokenResponse,
  ProbeConfiguration,
  StorageMount,
  Tag,
  UpdateSandboxToolRequest,
  EnvVar,
  DescribeSandboxInstanceListResponse,
  StopSandboxInstanceResponse,
} from "./ags_models"

/**
 * ags client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ags.tencentcloudapi.com", "2025-09-20", clientConfig)
  }

  /**
   * 更新沙箱实例
   */
  async UpdateSandboxInstance(
    req: UpdateSandboxInstanceRequest,
    cb?: (error: string, rep: UpdateSandboxInstanceResponse) => void
  ): Promise<UpdateSandboxInstanceResponse> {
    return this.request("UpdateSandboxInstance", req, cb)
  }

  /**
   * 启动沙箱实例
   */
  async StartSandboxInstance(
    req: StartSandboxInstanceRequest,
    cb?: (error: string, rep: StartSandboxInstanceResponse) => void
  ): Promise<StartSandboxInstanceResponse> {
    return this.request("StartSandboxInstance", req, cb)
  }

  /**
     * 获取访问沙箱工具时所需要使用的访问Token，创建沙箱实例后需调用此接口获取沙箱实例访问Token。
此Token可用于调用代码沙箱实例执行代码，或浏览器沙箱实例进行浏览器操作等。
     */
  async AcquireSandboxInstanceToken(
    req: AcquireSandboxInstanceTokenRequest,
    cb?: (error: string, rep: AcquireSandboxInstanceTokenResponse) => void
  ): Promise<AcquireSandboxInstanceTokenResponse> {
    return this.request("AcquireSandboxInstanceToken", req, cb)
  }

  /**
   * 查询沙箱工具列表
   */
  async DescribeSandboxToolList(
    req: DescribeSandboxToolListRequest,
    cb?: (error: string, rep: DescribeSandboxToolListResponse) => void
  ): Promise<DescribeSandboxToolListResponse> {
    return this.request("DescribeSandboxToolList", req, cb)
  }

  /**
   * 停止沙箱实例
   */
  async StopSandboxInstance(
    req: StopSandboxInstanceRequest,
    cb?: (error: string, rep: StopSandboxInstanceResponse) => void
  ): Promise<StopSandboxInstanceResponse> {
    return this.request("StopSandboxInstance", req, cb)
  }

  /**
   * 获取API密钥列表，包含API密钥简略信息，包含名称、创建时间等。
   */
  async DescribeAPIKeyList(
    req?: DescribeAPIKeyListRequest,
    cb?: (error: string, rep: DescribeAPIKeyListResponse) => void
  ): Promise<DescribeAPIKeyListResponse> {
    return this.request("DescribeAPIKeyList", req, cb)
  }

  /**
   * 查询沙箱实例列表
   */
  async DescribeSandboxInstanceList(
    req: DescribeSandboxInstanceListRequest,
    cb?: (error: string, rep: DescribeSandboxInstanceListResponse) => void
  ): Promise<DescribeSandboxInstanceListResponse> {
    return this.request("DescribeSandboxInstanceList", req, cb)
  }

  /**
   * 创建新的API密钥，用于调用Agent Sandbox接口。相较于腾讯云Secret ID Secret Key支持调用所有接口使用，仅有部分接口支持使用API密钥调用。
   */
  async CreateAPIKey(
    req: CreateAPIKeyRequest,
    cb?: (error: string, rep: CreateAPIKeyResponse) => void
  ): Promise<CreateAPIKeyResponse> {
    return this.request("CreateAPIKey", req, cb)
  }

  /**
   * 删除沙箱工具
   */
  async DeleteSandboxTool(
    req: DeleteSandboxToolRequest,
    cb?: (error: string, rep: DeleteSandboxToolResponse) => void
  ): Promise<DeleteSandboxToolResponse> {
    return this.request("DeleteSandboxTool", req, cb)
  }

  /**
   * 删除API密钥。注意区别于腾讯云Secret ID Secret Key，本接口删除的是Agent Sandbox专用API key。
   */
  async DeleteAPIKey(
    req: DeleteAPIKeyRequest,
    cb?: (error: string, rep: DeleteAPIKeyResponse) => void
  ): Promise<DeleteAPIKeyResponse> {
    return this.request("DeleteAPIKey", req, cb)
  }

  /**
   * 创建沙箱工具
   */
  async CreateSandboxTool(
    req: CreateSandboxToolRequest,
    cb?: (error: string, rep: CreateSandboxToolResponse) => void
  ): Promise<CreateSandboxToolResponse> {
    return this.request("CreateSandboxTool", req, cb)
  }

  /**
   * 更新沙箱工具
   */
  async UpdateSandboxTool(
    req: UpdateSandboxToolRequest,
    cb?: (error: string, rep: UpdateSandboxToolResponse) => void
  ): Promise<UpdateSandboxToolResponse> {
    return this.request("UpdateSandboxTool", req, cb)
  }
}

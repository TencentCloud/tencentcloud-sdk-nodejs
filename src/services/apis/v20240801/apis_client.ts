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
  CreateModelServiceRequest,
  AgentAppSecretKeyVO,
  McpSecurityRule,
  ModifyAgentAppRequest,
  InvokeLimitConfigDTO,
  ToolConfigDTO,
  CreateAgentAppResponse,
  DescribeAgentAppModelServicesRequest,
  DeleteAgentCredentialResponse,
  DescribeMcpServerResponse,
  DescribeModelsResponseVO,
  BindMcpSecurityRuleDTO,
  AgentAppMcpServerVO,
  DeleteModelServiceResponse,
  DescribeMcpServerResponseVO,
  McpToolAnnotation,
  StartEndTime,
  DeleteModelResponse,
  IDNameVO,
  DescribeMcpServersResponseVO,
  ModifyModelServiceRequest,
  ModifyModelResponse,
  CreateAgentAppModelServicesRequest,
  DescribeModelServicesResponseVO,
  DeleteMcpServerResponse,
  ResultIDsVO,
  DescribeAgentCredentialsRequest,
  CreateAgentAppResp,
  CreateMcpServerResponse,
  DescribeAgentAppsRequest,
  ToolConfigVO,
  DescribeAgentAppResponse,
  ResultIDVO,
  CreateModelRequest,
  DescribeModelRequest,
  AgentCredentialContentHeaderDTO,
  SensitiveDataCheckConfigDTO,
  BindMcpSecurityRuleVO,
  McpSecurityRulesVO,
  DeleteAgentAppModelServicesResponse,
  CreateModelResponse,
  DescribeModelServicesSort,
  DescribeAgentAppsSortDTO,
  DescribeMcpServersRequest,
  DescribeAgentAppsResponse,
  ModifyAgentAppResponse,
  DescribeModelServiceResponse,
  AgentCredentialContentDTO,
  DescribeAgentCredentialResponse,
  McpUrlObj,
  ModifyAgentAppModelServicesRequest,
  DescribeModelServiceRequest,
  DeleteAgentAppMcpServersRequest,
  DescribeAgentAppResp,
  CreateMcpServerRequest,
  DeleteModelServiceRequest,
  DeleteAgentAppRequest,
  DeleteMcpServerRequest,
  ModifyModelRequest,
  DescribeAgentCredentialResp,
  CreateAgentAppModelServicesResponse,
  DescribeAgentAppMcpServersResponse,
  DescribeModelServicesRequest,
  DescribeMcpServerRequest,
  TmsConfigDTO,
  AgentAppModelServiceDTO,
  McpTool,
  ModifyAgentAppModelServicesResponse,
  DeleteAgentAppModelServicesRequest,
  ModifyAgentCredentialResponse,
  DescribeModelResponseVO,
  DeleteAgentCredentialRequest,
  ModifyModelServiceResponse,
  CreateAgentAppMcpServersRequest,
  DescribeMcpServersResponse,
  ModifyAgentCredentialRequest,
  CreateAgentAppRequest,
  DescribeAgentAppsResp,
  CreateModelServiceResponse,
  DescribeAgentCredentialsResponse,
  DeleteAgentAppMcpServersResponse,
  PromptModerateConfigDTO,
  TargetHostDTO,
  DescribeModelsRequest,
  DescribeAgentCredentialRequest,
  LimitWindowsDTO,
  CreateAgentCredentialRequest,
  IpConfig,
  CreateAgentAppMcpServersResponse,
  ModifyMcpServerRequest,
  DescribeModelResponse,
  DescribeAgentAppMcpServersRequest,
  AgentAppMcpServerDTO,
  TargetModelDTO,
  TokenLimitConfigDTO,
  DescribeAgentAppMcpServersResp,
  DescribeModelServiceResponseVO,
  DescribeModelsSort,
  PluginConfigDTO,
  PluginFormValueDTO,
  DescribeAgentAppRequest,
  DeleteAgentAppResponse,
  CreateAgentCredentialResponse,
  DescribeAgentAppModelServicesResponse,
  ModifyMcpServerResponse,
  DeleteModelRequest,
  DescribeModelsResponse,
  DescribeModelServicesResponse,
  McpInputOutSchema,
} from "./apis_models"

/**
 * apis client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("apis.tencentcloudapi.com", "2024-08-01", clientConfig)
  }

  /**
   * 查询Credential详情
   */
  async DescribeAgentCredential(
    req?: DescribeAgentCredentialRequest,
    cb?: (error: string, rep: DescribeAgentCredentialResponse) => void
  ): Promise<DescribeAgentCredentialResponse> {
    return this.request("DescribeAgentCredential", req, cb)
  }

  /**
   * 查询app列表
   */
  async DescribeAgentApps(
    req: DescribeAgentAppsRequest,
    cb?: (error: string, rep: DescribeAgentAppsResponse) => void
  ): Promise<DescribeAgentAppsResponse> {
    return this.request("DescribeAgentApps", req, cb)
  }

  /**
   * 查询模型详情
   */
  async DescribeModel(
    req: DescribeModelRequest,
    cb?: (error: string, rep: DescribeModelResponse) => void
  ): Promise<DescribeModelResponse> {
    return this.request("DescribeModel", req, cb)
  }

  /**
   * 删除app的mcp server
   */
  async DeleteAgentAppMcpServers(
    req: DeleteAgentAppMcpServersRequest,
    cb?: (error: string, rep: DeleteAgentAppMcpServersResponse) => void
  ): Promise<DeleteAgentAppMcpServersResponse> {
    return this.request("DeleteAgentAppMcpServers", req, cb)
  }

  /**
   * 查询模型服务详情
   */
  async DescribeModelService(
    req: DescribeModelServiceRequest,
    cb?: (error: string, rep: DescribeModelServiceResponse) => void
  ): Promise<DescribeModelServiceResponse> {
    return this.request("DescribeModelService", req, cb)
  }

  /**
   * 查询Credential列表
   */
  async DescribeAgentCredentials(
    req?: DescribeAgentCredentialsRequest,
    cb?: (error: string, rep: DescribeAgentCredentialsResponse) => void
  ): Promise<DescribeAgentCredentialsResponse> {
    return this.request("DescribeAgentCredentials", req, cb)
  }

  /**
   * 创建app的mcp server关联
   */
  async CreateAgentAppMcpServers(
    req: CreateAgentAppMcpServersRequest,
    cb?: (error: string, rep: CreateAgentAppMcpServersResponse) => void
  ): Promise<CreateAgentAppMcpServersResponse> {
    return this.request("CreateAgentAppMcpServers", req, cb)
  }

  /**
   * 查询app详情
   */
  async DescribeAgentApp(
    req: DescribeAgentAppRequest,
    cb?: (error: string, rep: DescribeAgentAppResponse) => void
  ): Promise<DescribeAgentAppResponse> {
    return this.request("DescribeAgentApp", req, cb)
  }

  /**
   * 查询app mcpServer关联列表
   */
  async DescribeAgentAppMcpServers(
    req: DescribeAgentAppMcpServersRequest,
    cb?: (error: string, rep: DescribeAgentAppMcpServersResponse) => void
  ): Promise<DescribeAgentAppMcpServersResponse> {
    return this.request("DescribeAgentAppMcpServers", req, cb)
  }

  /**
   * 修改模型
   */
  async ModifyModel(
    req: ModifyModelRequest,
    cb?: (error: string, rep: ModifyModelResponse) => void
  ): Promise<ModifyModelResponse> {
    return this.request("ModifyModel", req, cb)
  }

  /**
   * 查询mcp server详情
   */
  async DescribeMcpServer(
    req: DescribeMcpServerRequest,
    cb?: (error: string, rep: DescribeMcpServerResponse) => void
  ): Promise<DescribeMcpServerResponse> {
    return this.request("DescribeMcpServer", req, cb)
  }

  /**
   * 修改Credential
   */
  async ModifyAgentCredential(
    req?: ModifyAgentCredentialRequest,
    cb?: (error: string, rep: ModifyAgentCredentialResponse) => void
  ): Promise<ModifyAgentCredentialResponse> {
    return this.request("ModifyAgentCredential", req, cb)
  }

  /**
   * 删除mcp server
   */
  async DeleteMcpServer(
    req: DeleteMcpServerRequest,
    cb?: (error: string, rep: DeleteMcpServerResponse) => void
  ): Promise<DeleteMcpServerResponse> {
    return this.request("DeleteMcpServer", req, cb)
  }

  /**
   * 查询mcp server列表
   */
  async DescribeMcpServers(
    req: DescribeMcpServersRequest,
    cb?: (error: string, rep: DescribeMcpServersResponse) => void
  ): Promise<DescribeMcpServersResponse> {
    return this.request("DescribeMcpServers", req, cb)
  }

  /**
   * 修改mcp server
   */
  async ModifyMcpServer(
    req: ModifyMcpServerRequest,
    cb?: (error: string, rep: ModifyMcpServerResponse) => void
  ): Promise<ModifyMcpServerResponse> {
    return this.request("ModifyMcpServer", req, cb)
  }

  /**
   * 创建app
   */
  async CreateAgentApp(
    req: CreateAgentAppRequest,
    cb?: (error: string, rep: CreateAgentAppResponse) => void
  ): Promise<CreateAgentAppResponse> {
    return this.request("CreateAgentApp", req, cb)
  }

  /**
   * 查询app modelService关联列表
   */
  async DescribeAgentAppModelServices(
    req?: DescribeAgentAppModelServicesRequest,
    cb?: (error: string, rep: DescribeAgentAppModelServicesResponse) => void
  ): Promise<DescribeAgentAppModelServicesResponse> {
    return this.request("DescribeAgentAppModelServices", req, cb)
  }

  /**
   * 删除app的model service关联
   */
  async DeleteAgentAppModelServices(
    req: DeleteAgentAppModelServicesRequest,
    cb?: (error: string, rep: DeleteAgentAppModelServicesResponse) => void
  ): Promise<DeleteAgentAppModelServicesResponse> {
    return this.request("DeleteAgentAppModelServices", req, cb)
  }

  /**
   * 创建模型服务
   */
  async CreateModelService(
    req: CreateModelServiceRequest,
    cb?: (error: string, rep: CreateModelServiceResponse) => void
  ): Promise<CreateModelServiceResponse> {
    return this.request("CreateModelService", req, cb)
  }

  /**
   * 创建Credential
   */
  async CreateAgentCredential(
    req?: CreateAgentCredentialRequest,
    cb?: (error: string, rep: CreateAgentCredentialResponse) => void
  ): Promise<CreateAgentCredentialResponse> {
    return this.request("CreateAgentCredential", req, cb)
  }

  /**
   * 删除Credential
   */
  async DeleteAgentCredential(
    req?: DeleteAgentCredentialRequest,
    cb?: (error: string, rep: DeleteAgentCredentialResponse) => void
  ): Promise<DeleteAgentCredentialResponse> {
    return this.request("DeleteAgentCredential", req, cb)
  }

  /**
   * 创建app的model service关联
   */
  async CreateAgentAppModelServices(
    req: CreateAgentAppModelServicesRequest,
    cb?: (error: string, rep: CreateAgentAppModelServicesResponse) => void
  ): Promise<CreateAgentAppModelServicesResponse> {
    return this.request("CreateAgentAppModelServices", req, cb)
  }

  /**
   * 删除模型服务
   */
  async DeleteModelService(
    req: DeleteModelServiceRequest,
    cb?: (error: string, rep: DeleteModelServiceResponse) => void
  ): Promise<DeleteModelServiceResponse> {
    return this.request("DeleteModelService", req, cb)
  }

  /**
   * 查询模型列表
   */
  async DescribeModels(
    req: DescribeModelsRequest,
    cb?: (error: string, rep: DescribeModelsResponse) => void
  ): Promise<DescribeModelsResponse> {
    return this.request("DescribeModels", req, cb)
  }

  /**
   * 修改app
   */
  async ModifyAgentApp(
    req: ModifyAgentAppRequest,
    cb?: (error: string, rep: ModifyAgentAppResponse) => void
  ): Promise<ModifyAgentAppResponse> {
    return this.request("ModifyAgentApp", req, cb)
  }

  /**
   * 修改模型服务
   */
  async ModifyModelService(
    req: ModifyModelServiceRequest,
    cb?: (error: string, rep: ModifyModelServiceResponse) => void
  ): Promise<ModifyModelServiceResponse> {
    return this.request("ModifyModelService", req, cb)
  }

  /**
   * 删除app
   */
  async DeleteAgentApp(
    req: DeleteAgentAppRequest,
    cb?: (error: string, rep: DeleteAgentAppResponse) => void
  ): Promise<DeleteAgentAppResponse> {
    return this.request("DeleteAgentApp", req, cb)
  }

  /**
   * 创建模型
   */
  async CreateModel(
    req: CreateModelRequest,
    cb?: (error: string, rep: CreateModelResponse) => void
  ): Promise<CreateModelResponse> {
    return this.request("CreateModel", req, cb)
  }

  /**
   * 查询模型服务列表
   */
  async DescribeModelServices(
    req: DescribeModelServicesRequest,
    cb?: (error: string, rep: DescribeModelServicesResponse) => void
  ): Promise<DescribeModelServicesResponse> {
    return this.request("DescribeModelServices", req, cb)
  }

  /**
   * 编辑app的model service关联
   */
  async ModifyAgentAppModelServices(
    req: ModifyAgentAppModelServicesRequest,
    cb?: (error: string, rep: ModifyAgentAppModelServicesResponse) => void
  ): Promise<ModifyAgentAppModelServicesResponse> {
    return this.request("ModifyAgentAppModelServices", req, cb)
  }

  /**
   * 创建mcp server
   */
  async CreateMcpServer(
    req: CreateMcpServerRequest,
    cb?: (error: string, rep: CreateMcpServerResponse) => void
  ): Promise<CreateMcpServerResponse> {
    return this.request("CreateMcpServer", req, cb)
  }

  /**
   * 删除模型
   */
  async DeleteModel(
    req: DeleteModelRequest,
    cb?: (error: string, rep: DeleteModelResponse) => void
  ): Promise<DeleteModelResponse> {
    return this.request("DeleteModel", req, cb)
  }
}

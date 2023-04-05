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
  UserDefinedTemplatePatchedParams,
  WorkspaceInfoDTO,
  RecoverWorkspaceResponse,
  DescribeWorkspaceIsReadyRequest,
  DescribeWorkspaceStatusRequest,
  CreateCustomizeTemplatesRequest,
  RecoverWorkspaceRequest,
  DescribeCustomizeTemplatesByIdRequest,
  CreateWorkspaceByVersionControlRequest,
  ModifyCustomizeTemplateVersionControlRequest,
  WorkspaceResourceDTO,
  CreateCustomizeTemplatesResponse,
  WorkspaceTokenInfoV0,
  ImageUserDTO,
  RunWorkspaceRequest,
  DescribeWorkspaceStatusResponse,
  CreateWorkspaceByAgentRequest,
  DeleteCustomizeTemplatesByIdRequest,
  StopWorkspaceRequest,
  DescribeWorkspaceEnvListResponse,
  WorkspaceShareInfo,
  WorkspaceTemplateInfo,
  UserSubInfo,
  DescribeWorkspaceStatusListResponse,
  ModifyCustomizeTemplatesFullByIdRequest,
  ModifyCustomizeTemplateVersionControlResponse,
  UserInfoRsp,
  DescribeWorkspaceEnvListRequest,
  ModifyWorkspaceAttributesResponse,
  WorkspaceStatusInfo,
  DescribeCustomizeTemplatesPresetsRequest,
  StopWorkspaceResponse,
  DescribeWorkspaceNameExistRequest,
  DescribeWorkspaceStatusListRequest,
  RemoveWorkspaceRequest,
  DescribeCustomizeTemplatesRequest,
  CustomizeTemplatesPresetsInfo,
  RunWorkspaceResponse,
  DescribeCustomizeTemplatesByIdResponse,
  DescribeWorkspaceNameExistResponse,
  CreateWorkspaceByTemplateResponse,
  CreateWorkspaceByAgentResponse,
  RemoveWorkspaceResponse,
  CreateWorkspaceTemporaryTokenRequest,
  WorkspaceDTO,
  ModifyCustomizeTemplatesFullByIdResponse,
  DescribeCustomizeTemplatesResponse,
  CreateWorkspaceByVersionControlResponse,
  ModifyCustomizeTemplatesPartByIdRequest,
  DescribeWorkspaceIsReadyResponse,
  WorkspaceTokenDTO,
  UserDefinedTemplateParams,
  DeleteCustomizeTemplatesByIdResponse,
  WorkspaceInfo,
  CreateWorkspaceTemporaryTokenResponse,
  AgentSpaceDTO,
  DescribeCustomizeTemplatesPresetsResponse,
  CreateWorkspaceByTemplateRequest,
  ModifyCustomizeTemplatesPartByIdResponse,
  ModifyWorkspaceAttributesRequest,
} from "./cloudstudio_models"

/**
 * cloudstudio client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cloudstudio.tencentcloudapi.com", "2021-05-24", clientConfig)
  }

  /**
   * 获取特定模板信息
   */
  async DescribeCustomizeTemplatesById(
    req: DescribeCustomizeTemplatesByIdRequest,
    cb?: (error: string, rep: DescribeCustomizeTemplatesByIdResponse) => void
  ): Promise<DescribeCustomizeTemplatesByIdResponse> {
    return this.request("DescribeCustomizeTemplatesById", req, cb)
  }

  /**
   * 为工作空间创建临时访问凭证，重复调用会创建新的 Token，旧的 Token 将会自动失效
   */
  async CreateWorkspaceTemporaryToken(
    req: CreateWorkspaceTemporaryTokenRequest,
    cb?: (error: string, rep: CreateWorkspaceTemporaryTokenResponse) => void
  ): Promise<CreateWorkspaceTemporaryTokenResponse> {
    return this.request("CreateWorkspaceTemporaryToken", req, cb)
  }

  /**
   * 全量修改自定义模板，忽略空
   */
  async ModifyCustomizeTemplatesPartById(
    req: ModifyCustomizeTemplatesPartByIdRequest,
    cb?: (error: string, rep: ModifyCustomizeTemplatesPartByIdResponse) => void
  ): Promise<ModifyCustomizeTemplatesPartByIdResponse> {
    return this.request("ModifyCustomizeTemplatesPartById", req, cb)
  }

  /**
   * 获取工作空间是否已经启动就绪
   */
  async DescribeWorkspaceIsReady(
    req: DescribeWorkspaceIsReadyRequest,
    cb?: (error: string, rep: DescribeWorkspaceIsReadyResponse) => void
  ): Promise<DescribeWorkspaceIsReadyResponse> {
    return this.request("DescribeWorkspaceIsReady", req, cb)
  }

  /**
   * 运行空间
   */
  async RunWorkspace(
    req: RunWorkspaceRequest,
    cb?: (error: string, rep: RunWorkspaceResponse) => void
  ): Promise<RunWorkspaceResponse> {
    return this.request("RunWorkspace", req, cb)
  }

  /**
   * 获取所有模板列表
   */
  async DescribeCustomizeTemplates(
    req: DescribeCustomizeTemplatesRequest,
    cb?: (error: string, rep: DescribeCustomizeTemplatesResponse) => void
  ): Promise<DescribeCustomizeTemplatesResponse> {
    return this.request("DescribeCustomizeTemplates", req, cb)
  }

  /**
     * 恢复工作空间

     */
  async RecoverWorkspace(
    req: RecoverWorkspaceRequest,
    cb?: (error: string, rep: RecoverWorkspaceResponse) => void
  ): Promise<RecoverWorkspaceResponse> {
    return this.request("RecoverWorkspace", req, cb)
  }

  /**
   * 根据模板创建工作空间
   */
  async CreateWorkspaceByVersionControl(
    req: CreateWorkspaceByVersionControlRequest,
    cb?: (error: string, rep: CreateWorkspaceByVersionControlResponse) => void
  ): Promise<CreateWorkspaceByVersionControlResponse> {
    return this.request("CreateWorkspaceByVersionControl", req, cb)
  }

  /**
   * 修改模板默认代码仓库
   */
  async ModifyCustomizeTemplateVersionControl(
    req: ModifyCustomizeTemplateVersionControlRequest,
    cb?: (error: string, rep: ModifyCustomizeTemplateVersionControlResponse) => void
  ): Promise<ModifyCustomizeTemplateVersionControlResponse> {
    return this.request("ModifyCustomizeTemplateVersionControl", req, cb)
  }

  /**
   * 云服务器方式创建工作空间
   */
  async CreateWorkspaceByAgent(
    req: CreateWorkspaceByAgentRequest,
    cb?: (error: string, rep: CreateWorkspaceByAgentResponse) => void
  ): Promise<CreateWorkspaceByAgentResponse> {
    return this.request("CreateWorkspaceByAgent", req, cb)
  }

  /**
   * 删除工作空间
   */
  async RemoveWorkspace(
    req: RemoveWorkspaceRequest,
    cb?: (error: string, rep: RemoveWorkspaceResponse) => void
  ): Promise<RemoveWorkspaceResponse> {
    return this.request("RemoveWorkspace", req, cb)
  }

  /**
   * 环境列表接口返回信息
   */
  async DescribeWorkspaceEnvList(
    req: DescribeWorkspaceEnvListRequest,
    cb?: (error: string, rep: DescribeWorkspaceEnvListResponse) => void
  ): Promise<DescribeWorkspaceEnvListResponse> {
    return this.request("DescribeWorkspaceEnvList", req, cb)
  }

  /**
   * 删除自定义模板
   */
  async DeleteCustomizeTemplatesById(
    req: DeleteCustomizeTemplatesByIdRequest,
    cb?: (error: string, rep: DeleteCustomizeTemplatesByIdResponse) => void
  ): Promise<DeleteCustomizeTemplatesByIdResponse> {
    return this.request("DeleteCustomizeTemplatesById", req, cb)
  }

  /**
   * 停止运行空间
   */
  async StopWorkspace(
    req: StopWorkspaceRequest,
    cb?: (error: string, rep: StopWorkspaceResponse) => void
  ): Promise<StopWorkspaceResponse> {
    return this.request("StopWorkspace", req, cb)
  }

  /**
   * 获取工作空间元信息
   */
  async DescribeWorkspaceStatus(
    req: DescribeWorkspaceStatusRequest,
    cb?: (error: string, rep: DescribeWorkspaceStatusResponse) => void
  ): Promise<DescribeWorkspaceStatusResponse> {
    return this.request("DescribeWorkspaceStatus", req, cb)
  }

  /**
   * 获取创建模板的预置参数
   */
  async DescribeCustomizeTemplatesPresets(
    req: DescribeCustomizeTemplatesPresetsRequest,
    cb?: (error: string, rep: DescribeCustomizeTemplatesPresetsResponse) => void
  ): Promise<DescribeCustomizeTemplatesPresetsResponse> {
    return this.request("DescribeCustomizeTemplatesPresets", req, cb)
  }

  /**
   * 添加自定义模板
   */
  async CreateCustomizeTemplates(
    req: CreateCustomizeTemplatesRequest,
    cb?: (error: string, rep: CreateCustomizeTemplatesResponse) => void
  ): Promise<CreateCustomizeTemplatesResponse> {
    return this.request("CreateCustomizeTemplates", req, cb)
  }

  /**
   * 全量修改自定义模板，不忽略空
   */
  async ModifyCustomizeTemplatesFullById(
    req: ModifyCustomizeTemplatesFullByIdRequest,
    cb?: (error: string, rep: ModifyCustomizeTemplatesFullByIdResponse) => void
  ): Promise<ModifyCustomizeTemplatesFullByIdResponse> {
    return this.request("ModifyCustomizeTemplatesFullById", req, cb)
  }

  /**
   * 快速开始, 基于模板创建工作空间
   */
  async CreateWorkspaceByTemplate(
    req: CreateWorkspaceByTemplateRequest,
    cb?: (error: string, rep: CreateWorkspaceByTemplateResponse) => void
  ): Promise<CreateWorkspaceByTemplateResponse> {
    return this.request("CreateWorkspaceByTemplate", req, cb)
  }

  /**
   * 获取用户工作空间列表
   */
  async DescribeWorkspaceStatusList(
    req: DescribeWorkspaceStatusListRequest,
    cb?: (error: string, rep: DescribeWorkspaceStatusListResponse) => void
  ): Promise<DescribeWorkspaceStatusListResponse> {
    return this.request("DescribeWorkspaceStatusList", req, cb)
  }

  /**
   * 检查工作空间是否存在
   */
  async DescribeWorkspaceNameExist(
    req: DescribeWorkspaceNameExistRequest,
    cb?: (error: string, rep: DescribeWorkspaceNameExistResponse) => void
  ): Promise<DescribeWorkspaceNameExistResponse> {
    return this.request("DescribeWorkspaceNameExist", req, cb)
  }

  /**
   * 修改工作空间的名称和描述
   */
  async ModifyWorkspaceAttributes(
    req: ModifyWorkspaceAttributesRequest,
    cb?: (error: string, rep: ModifyWorkspaceAttributesResponse) => void
  ): Promise<ModifyWorkspaceAttributesResponse> {
    return this.request("ModifyWorkspaceAttributes", req, cb)
  }
}

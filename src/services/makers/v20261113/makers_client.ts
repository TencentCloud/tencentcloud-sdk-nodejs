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
  ProjectFilter,
  ProjectDeployment,
  DeleteProjectCustomDomainsRequest,
  DeleteProjectRequest,
  CreateDeploymentRequest,
  DescribeDeploymentsRequest,
  Environment,
  DescribeProjectsRequest,
  CosCredentials,
  CustomDomainItem,
  DescribeCosTempTokenRequest,
  BlockProjectRequest,
  DescribeEnvironmentsResponse,
  ModifyZoneCustomDomainEnvRequest,
  DescribeProjectsResponse,
  OwnershipVerification,
  ModifyProjectEnvsRequest,
  CustomDomainInput,
  DeleteProjectEnvsRequest,
  DeleteProjectEnvsResponse,
  ModifyProjectResponse,
  NsVerification,
  FileVerification,
  Deployment,
  DeleteProjectCustomDomainsResponse,
  DescribeProjectEnvsResponse,
  DescribeDeploymentLogRequest,
  DescribeDeploymentLogResponse,
  SwitchConfig,
  DescribeZoneCustomDomainsResponse,
  ModifyProjectRequest,
  ModifyZoneCustomDomainEnvResponse,
  EnvironmentEnvVar,
  BlockProjectResponse,
  DescribeCosTempTokenResponse,
  Project,
  CreateProjectResponse,
  CreateZoneCustomDomainResponse,
  DnsVerification,
  DeleteProjectResponse,
  DescribeDeploymentsResponse,
  DescribeZoneCustomDomainsRequest,
  DescribeProjectEnvsRequest,
  CreateDeploymentResponse,
  Regions,
  ZoneDomain,
  HstsConfig,
  ProjectEnvVar,
  CreateZoneCustomDomainRequest,
  DescribeEnvironmentsRequest,
  ForceRedirectConfig,
  ModifyProjectEnvsResponse,
  EnvVar,
  DeploymentFilter,
  CreateProjectRequest,
} from "./makers_models"

/**
 * makers client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("makers.tencentcloudapi.com", "2026-11-13", clientConfig)
  }

  /**
   * 按传入的 EnvVars 写入环境变量。
   */
  async ModifyProjectEnvs(
    req: ModifyProjectEnvsRequest,
    cb?: (error: string, rep: ModifyProjectEnvsResponse) => void
  ): Promise<ModifyProjectEnvsResponse> {
    return this.request("ModifyProjectEnvs", req, cb)
  }

  /**
   * 把一个自定义域名绑到项目的指定环境。
   */
  async CreateZoneCustomDomain(
    req: CreateZoneCustomDomainRequest,
    cb?: (error: string, rep: CreateZoneCustomDomainResponse) => void
  ): Promise<CreateZoneCustomDomainResponse> {
    return this.request("CreateZoneCustomDomain", req, cb)
  }

  /**
   * 封禁或解封当前账号指定站点下的项目及域名。Status 支持 Ban或Normal。
   */
  async BlockProject(
    req: BlockProjectRequest,
    cb?: (error: string, rep: BlockProjectResponse) => void
  ): Promise<BlockProjectResponse> {
    return this.request("BlockProject", req, cb)
  }

  /**
   * 按 EnvVars 删除环境变量。按 Id 或 Key 匹配。Value 必填但不参与匹配，可传任意值。
   */
  async DeleteProjectEnvs(
    req: DeleteProjectEnvsRequest,
    cb?: (error: string, rep: DeleteProjectEnvsResponse) => void
  ): Promise<DeleteProjectEnvsResponse> {
    return this.request("DeleteProjectEnvs", req, cb)
  }

  /**
   * 分页查询站点下的项目。Offset 是页码偏移，后端按 Offset * Limit 跳过。
   */
  async DescribeProjects(
    req: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
  }

  /**
   * 查询项目下的环境，含内置 Production、Preview 和自定义环境。
   */
  async DescribeEnvironments(
    req: DescribeEnvironmentsRequest,
    cb?: (error: string, rep: DescribeEnvironmentsResponse) => void
  ): Promise<DescribeEnvironmentsResponse> {
    return this.request("DescribeEnvironments", req, cb)
  }

  /**
   * 查询项目的部署记录。
   */
  async DescribeDeployments(
    req: DescribeDeploymentsRequest,
    cb?: (error: string, rep: DescribeDeploymentsResponse) => void
  ): Promise<DescribeDeploymentsResponse> {
    return this.request("DescribeDeployments", req, cb)
  }

  /**
   * 创建项目。上传制品时 Provider 传 Upload，Channel 传 Custom。
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
   * 把已绑定的自定义域名切到另一个环境。
   */
  async ModifyZoneCustomDomainEnv(
    req: ModifyZoneCustomDomainEnvRequest,
    cb?: (error: string, rep: ModifyZoneCustomDomainEnvResponse) => void
  ): Promise<ModifyZoneCustomDomainEnvResponse> {
    return this.request("ModifyZoneCustomDomainEnv", req, cb)
  }

  /**
   * 查询项目环境变量。不传 Env 时返回全部作用域。
   */
  async DescribeProjectEnvs(
    req: DescribeProjectEnvsRequest,
    cb?: (error: string, rep: DescribeProjectEnvsResponse) => void
  ): Promise<DescribeProjectEnvsResponse> {
    return this.request("DescribeProjectEnvs", req, cb)
  }

  /**
   * 删除项目。进行中的构建会阻止删除。
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 查询项目在站点下的自定义域名和预设域名。
   */
  async DescribeZoneCustomDomains(
    req: DescribeZoneCustomDomainsRequest,
    cb?: (error: string, rep: DescribeZoneCustomDomainsResponse) => void
  ): Promise<DescribeZoneCustomDomainsResponse> {
    return this.request("DescribeZoneCustomDomains", req, cb)
  }

  /**
   * 修改项目名称和构建配置。未传的字段保持原值。
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
  }

  /**
   * 创建部署。上传制品时 ViaMeta 和 Provider 传 Upload，TempBucketPath 传已上传对象的路径。
   */
  async CreateDeployment(
    req: CreateDeploymentRequest,
    cb?: (error: string, rep: CreateDeploymentResponse) => void
  ): Promise<CreateDeploymentResponse> {
    return this.request("CreateDeployment", req, cb)
  }

  /**
   * 返回构建日志的访问地址。
   */
  async DescribeDeploymentLog(
    req: DescribeDeploymentLogRequest,
    cb?: (error: string, rep: DescribeDeploymentLogResponse) => void
  ): Promise<DescribeDeploymentLogResponse> {
    return this.request("DescribeDeploymentLog", req, cb)
  }

  /**
   * 按域名解绑项目的自定义域名。
   */
  async DeleteProjectCustomDomains(
    req: DeleteProjectCustomDomainsRequest,
    cb?: (error: string, rep: DeleteProjectCustomDomainsResponse) => void
  ): Promise<DeleteProjectCustomDomainsResponse> {
    return this.request("DeleteProjectCustomDomains", req, cb)
  }

  /**
   * 获取上传制品用的 COS 桶、地域、目标路径和临时密钥。
   */
  async DescribeCosTempToken(
    req: DescribeCosTempTokenRequest,
    cb?: (error: string, rep: DescribeCosTempTokenResponse) => void
  ): Promise<DescribeCosTempTokenResponse> {
    return this.request("DescribeCosTempToken", req, cb)
  }
}

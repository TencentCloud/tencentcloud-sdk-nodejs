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
  PageScreenVO,
  DataId,
  DescribeUserRoleListResponse,
  ExportScreenPageResponse,
  ModifyProjectResponse,
  DeleteProjectRequest,
  DescribeUserProjectListResponse,
  CreateDatasourceRequest,
  DeleteDatasourceRequest,
  ModifyDatasourceResponse,
  UserRoleListDataRoleInfo,
  ApplyEmbedIntervalRequest,
  ProjectConfigResult,
  EmbedTokenInfo,
  DescribePageWidgetListResponse,
  DeleteUserRoleResponse,
  ErrorInfo,
  DescribeUserProjectListRequest,
  DescribePageWidgetListRequest,
  CreateDatasourceCloudResponse,
  ProjectConfigList,
  DeleteUserRoleRequest,
  CreateUserRoleRequest,
  ModifyUserRoleRequest,
  DatasourceInfoData,
  DescribeProjectListResponse,
  CorpUserListData,
  IdDTO,
  ModifyUserRoleResponse,
  CreateEmbedTokenRequest,
  CreateUserRoleProjectResponse,
  PageScreenListVO,
  DescribeProjectInfoRequest,
  BaseStateAction,
  Data,
  ModifyUserRoleProjectResponse,
  DescribeUserRoleProjectListResponse,
  ModifyDatasourceCloudResponse,
  ModifyDatasourceCloudRequest,
  ModifyDatasourceRequest,
  ModifyProjectRequest,
  ModifyUserRoleProjectRequest,
  CreateUserRoleResponse,
  ApplyEmbedTokenInfo,
  DescribeProjectListRequest,
  UserRoleListDataUserRoleInfo,
  UserRoleListData,
  Project,
  DatasourceInfo,
  DeleteUserRoleProjectRequest,
  CreateProjectResponse,
  DescribeProjectInfoResponse,
  ExportScreenPageRequest,
  DescribeUserRoleListRequest,
  DeleteProjectResponse,
  ProjectListData,
  DescribeUserRoleProjectListRequest,
  PermissionGroup,
  CreateEmbedTokenResponse,
  CreateUserRoleProjectRequest,
  WidgetListVO,
  WidgetVO,
  DescribeDatasourceListRequest,
  ApplyEmbedIntervalResponse,
  CreateDatasourceResponse,
  DeleteUserRoleProjectResponse,
  CreateDatasourceCloudRequest,
  UserInfo,
  DescribeDatasourceListResponse,
  UserIdAndUserName,
  DeleteDatasourceResponse,
  CreateProjectRequest,
  PermissionComponent,
} from "./bi_models"

/**
 * bi client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bi.tencentcloudapi.com", "2022-01-05", clientConfig)
  }

  /**
   * 更新数据源
   */
  async ModifyDatasource(
    req: ModifyDatasourceRequest,
    cb?: (error: string, rep: ModifyDatasourceResponse) => void
  ): Promise<ModifyDatasourceResponse> {
    return this.request("ModifyDatasource", req, cb)
  }

  /**
   * 查询数据源列表
   */
  async DescribeDatasourceList(
    req: DescribeDatasourceListRequest,
    cb?: (error: string, rep: DescribeDatasourceListResponse) => void
  ): Promise<DescribeDatasourceListResponse> {
    return this.request("DescribeDatasourceList", req, cb)
  }

  /**
   * 创建数据源
   */
  async CreateDatasource(
    req: CreateDatasourceRequest,
    cb?: (error: string, rep: CreateDatasourceResponse) => void
  ): Promise<CreateDatasourceResponse> {
    return this.request("CreateDatasource", req, cb)
  }

  /**
   * 项目详情接口
   */
  async DescribeProjectInfo(
    req: DescribeProjectInfoRequest,
    cb?: (error: string, rep: DescribeProjectInfoResponse) => void
  ): Promise<DescribeProjectInfoResponse> {
    return this.request("DescribeProjectInfo", req, cb)
  }

  /**
   * 申请延长Token可用时间接口-强鉴权
   */
  async ApplyEmbedInterval(
    req: ApplyEmbedIntervalRequest,
    cb?: (error: string, rep: ApplyEmbedIntervalResponse) => void
  ): Promise<ApplyEmbedIntervalResponse> {
    return this.request("ApplyEmbedInterval", req, cb)
  }

  /**
   * 页面截图导出
   */
  async ExportScreenPage(
    req: ExportScreenPageRequest,
    cb?: (error: string, rep: ExportScreenPageResponse) => void
  ): Promise<ExportScreenPageResponse> {
    return this.request("ExportScreenPage", req, cb)
  }

  /**
   * 修改用户角色信息
   */
  async ModifyUserRole(
    req: ModifyUserRoleRequest,
    cb?: (error: string, rep: ModifyUserRoleResponse) => void
  ): Promise<ModifyUserRoleResponse> {
    return this.request("ModifyUserRole", req, cb)
  }

  /**
   * 创建云数据库
   */
  async CreateDatasourceCloud(
    req: CreateDatasourceCloudRequest,
    cb?: (error: string, rep: CreateDatasourceCloudResponse) => void
  ): Promise<CreateDatasourceCloudResponse> {
    return this.request("CreateDatasourceCloud", req, cb)
  }

  /**
   * 创建嵌出报表-强鉴权
   */
  async CreateEmbedToken(
    req: CreateEmbedTokenRequest,
    cb?: (error: string, rep: CreateEmbedTokenResponse) => void
  ): Promise<CreateEmbedTokenResponse> {
    return this.request("CreateEmbedToken", req, cb)
  }

  /**
   * 创建用户角色
   */
  async CreateUserRole(
    req: CreateUserRoleRequest,
    cb?: (error: string, rep: CreateUserRoleResponse) => void
  ): Promise<CreateUserRoleResponse> {
    return this.request("CreateUserRole", req, cb)
  }

  /**
   * 删除数据源
   */
  async DeleteDatasource(
    req: DeleteDatasourceRequest,
    cb?: (error: string, rep: DeleteDatasourceResponse) => void
  ): Promise<DeleteDatasourceResponse> {
    return this.request("DeleteDatasource", req, cb)
  }

  /**
   * 删除用户角色，会删除用户
   */
  async DeleteUserRole(
    req: DeleteUserRoleRequest,
    cb?: (error: string, rep: DeleteUserRoleResponse) => void
  ): Promise<DeleteUserRoleResponse> {
    return this.request("DeleteUserRole", req, cb)
  }

  /**
   * 修改项目信息
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
  }

  /**
   * 用户角色列表
   */
  async DescribeUserRoleList(
    req: DescribeUserRoleListRequest,
    cb?: (error: string, rep: DescribeUserRoleListResponse) => void
  ): Promise<DescribeUserRoleListResponse> {
    return this.request("DescribeUserRoleList", req, cb)
  }

  /**
   * 查询页面组件信息
   */
  async DescribePageWidgetList(
    req: DescribePageWidgetListRequest,
    cb?: (error: string, rep: DescribePageWidgetListResponse) => void
  ): Promise<DescribePageWidgetListResponse> {
    return this.request("DescribePageWidgetList", req, cb)
  }

  /**
   * 项目内-用户角色列表
   */
  async DescribeUserRoleProjectList(
    req: DescribeUserRoleProjectListRequest,
    cb?: (error: string, rep: DescribeUserRoleProjectListResponse) => void
  ): Promise<DescribeUserRoleProjectListResponse> {
    return this.request("DescribeUserRoleProjectList", req, cb)
  }

  /**
   * 更新云数据库
   */
  async ModifyDatasourceCloud(
    req: ModifyDatasourceCloudRequest,
    cb?: (error: string, rep: ModifyDatasourceCloudResponse) => void
  ): Promise<ModifyDatasourceCloudResponse> {
    return this.request("ModifyDatasourceCloud", req, cb)
  }

  /**
   * 项目内-创建用户角色
   */
  async CreateUserRoleProject(
    req: CreateUserRoleProjectRequest,
    cb?: (error: string, rep: CreateUserRoleProjectResponse) => void
  ): Promise<CreateUserRoleProjectResponse> {
    return this.request("CreateUserRoleProject", req, cb)
  }

  /**
   * 项目内-删除用户角色
   */
  async DeleteUserRoleProject(
    req: DeleteUserRoleProjectRequest,
    cb?: (error: string, rep: DeleteUserRoleProjectResponse) => void
  ): Promise<DeleteUserRoleProjectResponse> {
    return this.request("DeleteUserRoleProject", req, cb)
  }

  /**
   * 创建项目
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
   * 项目内-用户接口
   */
  async DescribeUserProjectList(
    req: DescribeUserProjectListRequest,
    cb?: (error: string, rep: DescribeUserProjectListResponse) => void
  ): Promise<DescribeUserProjectListResponse> {
    return this.request("DescribeUserProjectList", req, cb)
  }

  /**
   * 删除项目
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 项目-修改用户角色信息
   */
  async ModifyUserRoleProject(
    req: ModifyUserRoleProjectRequest,
    cb?: (error: string, rep: ModifyUserRoleProjectResponse) => void
  ): Promise<ModifyUserRoleProjectResponse> {
    return this.request("ModifyUserRoleProject", req, cb)
  }

  /**
   * 项目信息
   */
  async DescribeProjectList(
    req: DescribeProjectListRequest,
    cb?: (error: string, rep: DescribeProjectListResponse) => void
  ): Promise<DescribeProjectListResponse> {
    return this.request("DescribeProjectList", req, cb)
  }
}

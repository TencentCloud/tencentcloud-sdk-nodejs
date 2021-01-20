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
  DuplicateImagePersonalRequest,
  DescribeImagePersonalResponse,
  DescribeUserQuotaPersonalRequest,
  WebhookTarget,
  DescribeReplicationInstancesResponse,
  DescribeReplicationInstanceCreateTasksResponse,
  WebhookTriggerLog,
  AccessVpc,
  ModifyRepositoryResponse,
  TriggerInvokePara,
  DescribeNamespacesResponse,
  TriggerLogResp,
  TagInfoResp,
  CreateInstanceResponse,
  DeleteInstanceTokenRequest,
  TaskDetail,
  ModifyRepositoryRequest,
  DescribeWebhookTriggerLogResponse,
  CreateApplicationTriggerPersonalRequest,
  AutoDelStrategyInfo,
  ValidateNamespaceExistPersonalRequest,
  RegistryChargePrepaid,
  RenewInstanceResponse,
  Registry,
  DescribeRepositoriesResponse,
  DeleteInstanceTokenResponse,
  DescribeInstancesResponse,
  ModifyInstanceTokenResponse,
  DescribeApplicationTriggerLogPersonalResponse,
  FavorResp,
  DescribeApplicationTriggerPersonalRequest,
  DeleteNamespacePersonalRequest,
  NamespaceInfo,
  RenewInstanceRequest,
  Limit,
  DescribeReplicationInstancesRequest,
  DeleteRepositoryResponse,
  DeleteImagePersonalResponse,
  RegistryCondition,
  DeleteWebhookTriggerResponse,
  DeleteImageLifecycleGlobalPersonalResponse,
  DuplicateImagePersonalResponse,
  Tag,
  DupImageTagResp,
  DescribeImagesResponse,
  DescribeRepositoryFilterPersonalRequest,
  DescribeInternalEndpointsResponse,
  DescribeRepositoryPersonalRequest,
  AutoDelStrategyInfoResp,
  DeleteApplicationTriggerPersonalRequest,
  SearchUserRepositoryResp,
  DescribeImageLifecyclePersonalResponse,
  ModifyInstanceTokenRequest,
  DeleteImageLifecyclePersonalResponse,
  CreateNamespaceResponse,
  DescribeRepositoryOwnerPersonalResponse,
  ModifyWebhookTriggerResponse,
  CreateImageLifecyclePersonalResponse,
  RepoIsExistResp,
  TcrImageInfo,
  DescribeImageLifecycleGlobalPersonalResponse,
  CreateNamespacePersonalResponse,
  DeleteInstanceResponse,
  DeleteImageLifecycleGlobalPersonalRequest,
  DescribeInstanceStatusRequest,
  ModifyWebhookTriggerRequest,
  DescribeInstanceStatusResponse,
  DeleteNamespaceResponse,
  Favors,
  DescribeRepositoryPersonalResponse,
  DescribeRepositoriesRequest,
  DescribeImageFilterPersonalRequest,
  ModifyNamespaceResponse,
  ValidateRepositoryExistPersonalRequest,
  ModifyUserPasswordPersonalResponse,
  TcrNamespaceInfo,
  DeleteApplicationTriggerPersonalResponse,
  ModifyRepositoryInfoPersonalResponse,
  DescribeWebhookTriggerLogRequest,
  CreateUserPersonalRequest,
  RepoInfoResp,
  ManageImageLifecycleGlobalPersonalResponse,
  RegistryStatus,
  DescribeNamespacePersonalRequest,
  DeleteRepositoryPersonalResponse,
  CreateInstanceTokenResponse,
  DescribeApplicationTriggerLogPersonalResp,
  DeleteImagePersonalRequest,
  DescribeApplicationTriggerPersonalResponse,
  NamespaceInfoResp,
  CreateRepositoryPersonalRequest,
  DescribeImageFilterPersonalResponse,
  CreateImageLifecyclePersonalRequest,
  DeleteWebhookTriggerRequest,
  TriggerInvokeResult,
  CreateUserPersonalResponse,
  DescribeWebhookTriggerResponse,
  DescribeImageManifestsRequest,
  ModifyNamespaceRequest,
  ModifyRepositoryAccessPersonalRequest,
  TagSpecification,
  DescribeImageLifecycleGlobalPersonalRequest,
  DescribeImageLifecyclePersonalRequest,
  RepositoryInfoResp,
  CreateInstanceRequest,
  DescribeInstanceTokenRequest,
  BatchDeleteRepositoryPersonalResponse,
  CreateNamespaceRequest,
  BatchDeleteRepositoryPersonalRequest,
  TriggerInvokeCondition,
  ValidateRepositoryExistPersonalResponse,
  NamespaceIsExistsResp,
  DescribeInstancesRequest,
  Filter,
  DescribeReplicationInstanceCreateTasksRequest,
  RepoInfo,
  ManageImageLifecycleGlobalPersonalRequest,
  DescribeUserQuotaPersonalResponse,
  DescribeImagePersonalRequest,
  DeleteImageLifecyclePersonalRequest,
  ModifyApplicationTriggerPersonalResponse,
  DeleteInstanceRequest,
  DescribeImageManifestsResponse,
  DescribeNamespacePersonalResponse,
  DeleteNamespacePersonalResponse,
  Header,
  CreateWebhookTriggerRequest,
  DescribeRepositoryOwnerPersonalRequest,
  ModifyRepositoryInfoPersonalRequest,
  DescribeApplicationTriggerLogPersonalRequest,
  DescribeFavorRepositoryPersonalRequest,
  DescribeNamespacesRequest,
  ManageInternalEndpointResponse,
  DescribeRepositoryFilterPersonalResponse,
  DescribeFavorRepositoryPersonalResponse,
  CheckInstanceNameResponse,
  ModifyRepositoryAccessPersonalResponse,
  ModifyApplicationTriggerPersonalRequest,
  CreateInstanceTokenRequest,
  ModifyUserPasswordPersonalRequest,
  ReplicationRegistry,
  DescribeInternalEndpointsRequest,
  ValidateNamespaceExistPersonalResponse,
  DescribeApplicationTriggerPersonalResp,
  TagInfo,
  CreateRepositoryRequest,
  DeleteImageResponse,
  DescribeWebhookTriggerRequest,
  DeleteNamespaceRequest,
  BatchDeleteImagePersonalRequest,
  DescribeImagesRequest,
  TriggerResp,
  CreateRepositoryResponse,
  RespLimit,
  CheckInstanceNameRequest,
  DescribeInstanceTokenResponse,
  SameImagesResp,
  CreateNamespacePersonalRequest,
  WebhookTrigger,
  CreateWebhookTriggerResponse,
  TcrRepositoryInfo,
  TcrInstanceToken,
  DeleteRepositoryRequest,
  DeleteImageRequest,
  CreateRepositoryPersonalResponse,
  CreateApplicationTriggerPersonalResponse,
  ManageInternalEndpointRequest,
  BatchDeleteImagePersonalResponse,
  DeleteRepositoryPersonalRequest,
} from "./tcr_models"

/**
 * tcr client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tcr.tencentcloudapi.com", "2019-09-24", clientConfig)
  }

  /**
   * 更新命名空间信息，当前仅支持修改命名空间访问级别
   */
  async ModifyNamespace(
    req: ModifyNamespaceRequest,
    cb?: (error: string, rep: ModifyNamespaceResponse) => void
  ): Promise<ModifyNamespaceResponse> {
    return this.request("ModifyNamespace", req, cb)
  }

  /**
   * 用于在个人版中查询与指定tag镜像内容相同的tag列表
   */
  async DescribeImageFilterPersonal(
    req: DescribeImageFilterPersonalRequest,
    cb?: (error: string, rep: DescribeImageFilterPersonalResponse) => void
  ): Promise<DescribeImageFilterPersonalResponse> {
    return this.request("DescribeImageFilterPersonal", req, cb)
  }

  /**
   * 用于查询应用更新触发器
   */
  async DescribeApplicationTriggerPersonal(
    req: DescribeApplicationTriggerPersonalRequest,
    cb?: (error: string, rep: DescribeApplicationTriggerPersonalResponse) => void
  ): Promise<DescribeApplicationTriggerPersonalResponse> {
    return this.request("DescribeApplicationTriggerPersonal", req, cb)
  }

  /**
   * 用于在个人版中创建清理策略
   */
  async CreateImageLifecyclePersonal(
    req: CreateImageLifecyclePersonalRequest,
    cb?: (error: string, rep: CreateImageLifecyclePersonalResponse) => void
  ): Promise<CreateImageLifecyclePersonalResponse> {
    return this.request("CreateImageLifecyclePersonal", req, cb)
  }

  /**
   * 用于获取个人版镜像仓库tag列表
   */
  async DescribeImagePersonal(
    req: DescribeImagePersonalRequest,
    cb?: (error: string, rep: DescribeImagePersonalResponse) => void
  ): Promise<DescribeImagePersonalResponse> {
    return this.request("DescribeImagePersonal", req, cb)
  }

  /**
   * 用于获取个人版仓库中自动清理策略
   */
  async DescribeImageLifecyclePersonal(
    req: DescribeImageLifecyclePersonalRequest,
    cb?: (error: string, rep: DescribeImageLifecyclePersonalResponse) => void
  ): Promise<DescribeImageLifecyclePersonalResponse> {
    return this.request("DescribeImageLifecyclePersonal", req, cb)
  }

  /**
   * 用于获取个人版全局镜像版本自动清理策略
   */
  async DescribeImageLifecycleGlobalPersonal(
    req?: DescribeImageLifecycleGlobalPersonalRequest,
    cb?: (error: string, rep: DescribeImageLifecycleGlobalPersonalResponse) => void
  ): Promise<DescribeImageLifecycleGlobalPersonalResponse> {
    return this.request("DescribeImageLifecycleGlobalPersonal", req, cb)
  }

  /**
   * 用于在企业版中创建命名空间
   */
  async CreateNamespace(
    req: CreateNamespaceRequest,
    cb?: (error: string, rep: CreateNamespaceResponse) => void
  ): Promise<CreateNamespaceResponse> {
    return this.request("CreateNamespace", req, cb)
  }

  /**
   * 用于修改应用更新触发器
   */
  async ModifyApplicationTriggerPersonal(
    req: ModifyApplicationTriggerPersonalRequest,
    cb?: (error: string, rep: ModifyApplicationTriggerPersonalResponse) => void
  ): Promise<ModifyApplicationTriggerPersonalResponse> {
    return this.request("ModifyApplicationTriggerPersonal", req, cb)
  }

  /**
   * 更新镜像仓库信息，可修改仓库描述信息
   */
  async ModifyRepository(
    req: ModifyRepositoryRequest,
    cb?: (error: string, rep: ModifyRepositoryResponse) => void
  ): Promise<ModifyRepositoryResponse> {
    return this.request("ModifyRepository", req, cb)
  }

  /**
   * 删除命名空间
   */
  async DeleteNamespace(
    req: DeleteNamespaceRequest,
    cb?: (error: string, rep: DeleteNamespaceResponse) => void
  ): Promise<DeleteNamespaceResponse> {
    return this.request("DeleteNamespace", req, cb)
  }

  /**
   * 删除镜像仓库
   */
  async DeleteRepository(
    req: DeleteRepositoryRequest,
    cb?: (error: string, rep: DeleteRepositoryResponse) => void
  ): Promise<DeleteRepositoryResponse> {
    return this.request("DeleteRepository", req, cb)
  }

  /**
   * 删除镜像仓库企业版实例
   */
  async DeleteInstance(
    req: DeleteInstanceRequest,
    cb?: (error: string, rep: DeleteInstanceResponse) => void
  ): Promise<DeleteInstanceResponse> {
    return this.request("DeleteInstance", req, cb)
  }

  /**
   * 查询镜像仓库列表或指定镜像仓库信息
   */
  async DescribeRepositories(
    req: DescribeRepositoriesRequest,
    cb?: (error: string, rep: DescribeRepositoriesResponse) => void
  ): Promise<DescribeRepositoriesResponse> {
    return this.request("DescribeRepositories", req, cb)
  }

  /**
   * 查询实例信息
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 用于在个人版镜像仓库中更新容器镜像描述
   */
  async ModifyRepositoryInfoPersonal(
    req: ModifyRepositoryInfoPersonalRequest,
    cb?: (error: string, rep: ModifyRepositoryInfoPersonalResponse) => void
  ): Promise<ModifyRepositoryInfoPersonalResponse> {
    return this.request("ModifyRepositoryInfoPersonal", req, cb)
  }

  /**
   * 获取触发器日志
   */
  async DescribeWebhookTriggerLog(
    req: DescribeWebhookTriggerLogRequest,
    cb?: (error: string, rep: DescribeWebhookTriggerLogResponse) => void
  ): Promise<DescribeWebhookTriggerLogResponse> {
    return this.request("DescribeWebhookTriggerLog", req, cb)
  }

  /**
   * 检查待创建的实例名称是否符合规范
   */
  async CheckInstanceName(
    req: CheckInstanceNameRequest,
    cb?: (error: string, rep: CheckInstanceNameResponse) => void
  ): Promise<CheckInstanceNameResponse> {
    return this.request("CheckInstanceName", req, cb)
  }

  /**
   * 查询镜像版本列表或指定容器镜像信息
   */
  async DescribeImages(
    req: DescribeImagesRequest,
    cb?: (error: string, rep: DescribeImagesResponse) => void
  ): Promise<DescribeImagesResponse> {
    return this.request("DescribeImages", req, cb)
  }

  /**
   * 查询个人版命名空间信息
   */
  async DescribeNamespacePersonal(
    req: DescribeNamespacePersonalRequest,
    cb?: (error: string, rep: DescribeNamespacePersonalResponse) => void
  ): Promise<DescribeNamespacePersonalResponse> {
    return this.request("DescribeNamespacePersonal", req, cb)
  }

  /**
   * 用于个人版镜像仓库中删除
   */
  async DeleteRepositoryPersonal(
    req: DeleteRepositoryPersonalRequest,
    cb?: (error: string, rep: DeleteRepositoryPersonalResponse) => void
  ): Promise<DeleteRepositoryPersonalResponse> {
    return this.request("DeleteRepositoryPersonal", req, cb)
  }

  /**
   * 查询个人版仓库信息
   */
  async DescribeRepositoryPersonal(
    req: DescribeRepositoryPersonalRequest,
    cb?: (error: string, rep: DescribeRepositoryPersonalResponse) => void
  ): Promise<DescribeRepositoryPersonalResponse> {
    return this.request("DescribeRepositoryPersonal", req, cb)
  }

  /**
   * 查询容器镜像Manifest信息
   */
  async DescribeImageManifests(
    req: DescribeImageManifestsRequest,
    cb?: (error: string, rep: DescribeImageManifestsResponse) => void
  ): Promise<DescribeImageManifestsResponse> {
    return this.request("DescribeImageManifests", req, cb)
  }

  /**
   * 查询长期访问凭证信息
   */
  async DescribeInstanceToken(
    req: DescribeInstanceTokenRequest,
    cb?: (error: string, rep: DescribeInstanceTokenResponse) => void
  ): Promise<DescribeInstanceTokenResponse> {
    return this.request("DescribeInstanceToken", req, cb)
  }

  /**
   * 用于设置个人版全局镜像版本自动清理策略
   */
  async ManageImageLifecycleGlobalPersonal(
    req: ManageImageLifecycleGlobalPersonalRequest,
    cb?: (error: string, rep: ManageImageLifecycleGlobalPersonalResponse) => void
  ): Promise<ManageImageLifecycleGlobalPersonalResponse> {
    return this.request("ManageImageLifecycleGlobalPersonal", req, cb)
  }

  /**
   * 用于查询应用更新触发器触发日志
   */
  async DescribeApplicationTriggerLogPersonal(
    req: DescribeApplicationTriggerLogPersonalRequest,
    cb?: (error: string, rep: DescribeApplicationTriggerLogPersonalResponse) => void
  ): Promise<DescribeApplicationTriggerLogPersonalResponse> {
    return this.request("DescribeApplicationTriggerLogPersonal", req, cb)
  }

  /**
   * 预付费实例续费，同时支持按量计费转包年包月
   */
  async RenewInstance(
    req: RenewInstanceRequest,
    cb?: (error: string, rep: RenewInstanceResponse) => void
  ): Promise<RenewInstanceResponse> {
    return this.request("RenewInstance", req, cb)
  }

  /**
   * 删除长期访问凭证
   */
  async DeleteInstanceToken(
    req: DeleteInstanceTokenRequest,
    cb?: (error: string, rep: DeleteInstanceTokenResponse) => void
  ): Promise<DeleteInstanceTokenResponse> {
    return this.request("DeleteInstanceToken", req, cb)
  }

  /**
   * 修改个人用户登录密码
   */
  async ModifyUserPasswordPersonal(
    req: ModifyUserPasswordPersonalRequest,
    cb?: (error: string, rep: ModifyUserPasswordPersonalResponse) => void
  ): Promise<ModifyUserPasswordPersonalResponse> {
    return this.request("ModifyUserPasswordPersonal", req, cb)
  }

  /**
   * 用于删除应用更新触发器
   */
  async DeleteApplicationTriggerPersonal(
    req: DeleteApplicationTriggerPersonalRequest,
    cb?: (error: string, rep: DeleteApplicationTriggerPersonalResponse) => void
  ): Promise<DeleteApplicationTriggerPersonalResponse> {
    return this.request("DeleteApplicationTriggerPersonal", req, cb)
  }

  /**
   * 查询触发器
   */
  async DescribeWebhookTrigger(
    req: DescribeWebhookTriggerRequest,
    cb?: (error: string, rep: DescribeWebhookTriggerResponse) => void
  ): Promise<DescribeWebhookTriggerResponse> {
    return this.request("DescribeWebhookTrigger", req, cb)
  }

  /**
   * 用于在个人版中删除tag
   */
  async DeleteImagePersonal(
    req: DeleteImagePersonalRequest,
    cb?: (error: string, rep: DeleteImagePersonalResponse) => void
  ): Promise<DeleteImagePersonalResponse> {
    return this.request("DeleteImagePersonal", req, cb)
  }

  /**
   * 管理实例内网访问VPC链接
   */
  async ManageInternalEndpoint(
    req: ManageInternalEndpointRequest,
    cb?: (error: string, rep: ManageInternalEndpointResponse) => void
  ): Promise<ManageInternalEndpointResponse> {
    return this.request("ManageInternalEndpoint", req, cb)
  }

  /**
   * 更新触发器
   */
  async ModifyWebhookTrigger(
    req: ModifyWebhookTriggerRequest,
    cb?: (error: string, rep: ModifyWebhookTriggerResponse) => void
  ): Promise<ModifyWebhookTriggerResponse> {
    return this.request("ModifyWebhookTrigger", req, cb)
  }

  /**
   * 更新实例内指定长期访问凭证的启用状态
   */
  async ModifyInstanceToken(
    req: ModifyInstanceTokenRequest,
    cb?: (error: string, rep: ModifyInstanceTokenResponse) => void
  ): Promise<ModifyInstanceTokenResponse> {
    return this.request("ModifyInstanceToken", req, cb)
  }

  /**
   * 创建实例
   */
  async CreateInstance(
    req: CreateInstanceRequest,
    cb?: (error: string, rep: CreateInstanceResponse) => void
  ): Promise<CreateInstanceResponse> {
    return this.request("CreateInstance", req, cb)
  }

  /**
   * 查询从实例列表
   */
  async DescribeReplicationInstances(
    req: DescribeReplicationInstancesRequest,
    cb?: (error: string, rep: DescribeReplicationInstancesResponse) => void
  ): Promise<DescribeReplicationInstancesResponse> {
    return this.request("DescribeReplicationInstances", req, cb)
  }

  /**
   * 创建触发器
   */
  async CreateWebhookTrigger(
    req: CreateWebhookTriggerRequest,
    cb?: (error: string, rep: CreateWebhookTriggerResponse) => void
  ): Promise<CreateWebhookTriggerResponse> {
    return this.request("CreateWebhookTrigger", req, cb)
  }

  /**
   * 用于创建应用更新触发器
   */
  async CreateApplicationTriggerPersonal(
    req: CreateApplicationTriggerPersonalRequest,
    cb?: (error: string, rep: CreateApplicationTriggerPersonalResponse) => void
  ): Promise<CreateApplicationTriggerPersonalResponse> {
    return this.request("CreateApplicationTriggerPersonal", req, cb)
  }

  /**
   * 用于个人版镜像仓库中批量删除镜像仓库
   */
  async BatchDeleteRepositoryPersonal(
    req: BatchDeleteRepositoryPersonalRequest,
    cb?: (error: string, rep: BatchDeleteRepositoryPersonalResponse) => void
  ): Promise<BatchDeleteRepositoryPersonalResponse> {
    return this.request("BatchDeleteRepositoryPersonal", req, cb)
  }

  /**
   * 查询个人用户配额
   */
  async DescribeUserQuotaPersonal(
    req?: DescribeUserQuotaPersonalRequest,
    cb?: (error: string, rep: DescribeUserQuotaPersonalResponse) => void
  ): Promise<DescribeUserQuotaPersonalResponse> {
    return this.request("DescribeUserQuotaPersonal", req, cb)
  }

  /**
   * 删除触发器
   */
  async DeleteWebhookTrigger(
    req: DeleteWebhookTriggerRequest,
    cb?: (error: string, rep: DeleteWebhookTriggerResponse) => void
  ): Promise<DeleteWebhookTriggerResponse> {
    return this.request("DeleteWebhookTrigger", req, cb)
  }

  /**
   * 查询创建从实例任务状态
   */
  async DescribeReplicationInstanceCreateTasks(
    req: DescribeReplicationInstanceCreateTasksRequest,
    cb?: (error: string, rep: DescribeReplicationInstanceCreateTasksResponse) => void
  ): Promise<DescribeReplicationInstanceCreateTasksResponse> {
    return this.request("DescribeReplicationInstanceCreateTasks", req, cb)
  }

  /**
   * 用于企业版创建镜像仓库
   */
  async CreateRepository(
    req: CreateRepositoryRequest,
    cb?: (error: string, rep: CreateRepositoryResponse) => void
  ): Promise<CreateRepositoryResponse> {
    return this.request("CreateRepository", req, cb)
  }

  /**
   * 查询个人收藏仓库
   */
  async DescribeFavorRepositoryPersonal(
    req: DescribeFavorRepositoryPersonalRequest,
    cb?: (error: string, rep: DescribeFavorRepositoryPersonalResponse) => void
  ): Promise<DescribeFavorRepositoryPersonalResponse> {
    return this.request("DescribeFavorRepositoryPersonal", req, cb)
  }

  /**
   * 用于在个人版中获取用户全部的镜像仓库列表
   */
  async DescribeRepositoryOwnerPersonal(
    req: DescribeRepositoryOwnerPersonalRequest,
    cb?: (error: string, rep: DescribeRepositoryOwnerPersonalResponse) => void
  ): Promise<DescribeRepositoryOwnerPersonalResponse> {
    return this.request("DescribeRepositoryOwnerPersonal", req, cb)
  }

  /**
   * 查询命名空间列表或指定命名空间信息
   */
  async DescribeNamespaces(
    req: DescribeNamespacesRequest,
    cb?: (error: string, rep: DescribeNamespacesResponse) => void
  ): Promise<DescribeNamespacesResponse> {
    return this.request("DescribeNamespaces", req, cb)
  }

  /**
   * 查询实例当前状态以及过程信息
   */
  async DescribeInstanceStatus(
    req: DescribeInstanceStatusRequest,
    cb?: (error: string, rep: DescribeInstanceStatusResponse) => void
  ): Promise<DescribeInstanceStatusResponse> {
    return this.request("DescribeInstanceStatus", req, cb)
  }

  /**
   * 用于在个人版仓库中创建镜像仓库
   */
  async CreateRepositoryPersonal(
    req: CreateRepositoryPersonalRequest,
    cb?: (error: string, rep: CreateRepositoryPersonalResponse) => void
  ): Promise<CreateRepositoryPersonalResponse> {
    return this.request("CreateRepositoryPersonal", req, cb)
  }

  /**
   * 用于在个人版镜像仓库中批量删除Tag
   */
  async BatchDeleteImagePersonal(
    req: BatchDeleteImagePersonalRequest,
    cb?: (error: string, rep: BatchDeleteImagePersonalResponse) => void
  ): Promise<BatchDeleteImagePersonalResponse> {
    return this.request("BatchDeleteImagePersonal", req, cb)
  }

  /**
   * 用于在个人版镜像仓库中复制镜像版本
   */
  async DuplicateImagePersonal(
    req: DuplicateImagePersonalRequest,
    cb?: (error: string, rep: DuplicateImagePersonalResponse) => void
  ): Promise<DuplicateImagePersonalResponse> {
    return this.request("DuplicateImagePersonal", req, cb)
  }

  /**
   * 用于在个人版镜像仓库中，获取满足输入搜索条件的用户镜像仓库
   */
  async DescribeRepositoryFilterPersonal(
    req: DescribeRepositoryFilterPersonalRequest,
    cb?: (error: string, rep: DescribeRepositoryFilterPersonalResponse) => void
  ): Promise<DescribeRepositoryFilterPersonalResponse> {
    return this.request("DescribeRepositoryFilterPersonal", req, cb)
  }

  /**
   * 查询个人版用户命名空间是否存在
   */
  async ValidateNamespaceExistPersonal(
    req: ValidateNamespaceExistPersonalRequest,
    cb?: (error: string, rep: ValidateNamespaceExistPersonalResponse) => void
  ): Promise<ValidateNamespaceExistPersonalResponse> {
    return this.request("ValidateNamespaceExistPersonal", req, cb)
  }

  /**
   * 创建个人版镜像仓库命名空间，此命名空间全局唯一
   */
  async CreateNamespacePersonal(
    req: CreateNamespacePersonalRequest,
    cb?: (error: string, rep: CreateNamespacePersonalResponse) => void
  ): Promise<CreateNamespacePersonalResponse> {
    return this.request("CreateNamespacePersonal", req, cb)
  }

  /**
   * 创建个人用户
   */
  async CreateUserPersonal(
    req: CreateUserPersonalRequest,
    cb?: (error: string, rep: CreateUserPersonalResponse) => void
  ): Promise<CreateUserPersonalResponse> {
    return this.request("CreateUserPersonal", req, cb)
  }

  /**
   * 用于删除个人版全局镜像版本自动清理策略
   */
  async DeleteImageLifecycleGlobalPersonal(
    req?: DeleteImageLifecycleGlobalPersonalRequest,
    cb?: (error: string, rep: DeleteImageLifecycleGlobalPersonalResponse) => void
  ): Promise<DeleteImageLifecycleGlobalPersonalResponse> {
    return this.request("DeleteImageLifecycleGlobalPersonal", req, cb)
  }

  /**
   * 删除共享版命名空间
   */
  async DeleteNamespacePersonal(
    req: DeleteNamespacePersonalRequest,
    cb?: (error: string, rep: DeleteNamespacePersonalResponse) => void
  ): Promise<DeleteNamespacePersonalResponse> {
    return this.request("DeleteNamespacePersonal", req, cb)
  }

  /**
   * 用于更新个人版镜像仓库的访问属性
   */
  async ModifyRepositoryAccessPersonal(
    req: ModifyRepositoryAccessPersonalRequest,
    cb?: (error: string, rep: ModifyRepositoryAccessPersonalResponse) => void
  ): Promise<ModifyRepositoryAccessPersonalResponse> {
    return this.request("ModifyRepositoryAccessPersonal", req, cb)
  }

  /**
   * 查询实例内网访问VPC链接
   */
  async DescribeInternalEndpoints(
    req: DescribeInternalEndpointsRequest,
    cb?: (error: string, rep: DescribeInternalEndpointsResponse) => void
  ): Promise<DescribeInternalEndpointsResponse> {
    return this.request("DescribeInternalEndpoints", req, cb)
  }

  /**
   * 用于在个人版镜像仓库中删除仓库Tag自动清理策略
   */
  async DeleteImageLifecyclePersonal(
    req: DeleteImageLifecyclePersonalRequest,
    cb?: (error: string, rep: DeleteImageLifecyclePersonalResponse) => void
  ): Promise<DeleteImageLifecyclePersonalResponse> {
    return this.request("DeleteImageLifecyclePersonal", req, cb)
  }

  /**
   * 用于判断个人版仓库是否存在
   */
  async ValidateRepositoryExistPersonal(
    req: ValidateRepositoryExistPersonalRequest,
    cb?: (error: string, rep: ValidateRepositoryExistPersonalResponse) => void
  ): Promise<ValidateRepositoryExistPersonalResponse> {
    return this.request("ValidateRepositoryExistPersonal", req, cb)
  }

  /**
   * 删除指定镜像
   */
  async DeleteImage(
    req: DeleteImageRequest,
    cb?: (error: string, rep: DeleteImageResponse) => void
  ): Promise<DeleteImageResponse> {
    return this.request("DeleteImage", req, cb)
  }

  /**
   * 创建实例的临时或长期访问凭证
   */
  async CreateInstanceToken(
    req: CreateInstanceTokenRequest,
    cb?: (error: string, rep: CreateInstanceTokenResponse) => void
  ): Promise<CreateInstanceTokenResponse> {
    return this.request("CreateInstanceToken", req, cb)
  }
}

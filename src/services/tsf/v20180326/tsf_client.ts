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
  DescribeMsApiListRequest,
  TsfApiListResponse,
  DescribeGroupInstancesResponse,
  DescribeMsApiListResponse,
  EnableTaskRequest,
  DisableTaskFlowResponse,
  TaskRule,
  DescribeDownloadInfoRequest,
  ApiDetailResponse,
  ImageTag,
  DescribePublicConfigSummaryRequest,
  DescribeClusterInstancesResponse,
  DisableTaskResponse,
  DescribeMicroserviceRequest,
  CosCredentials,
  HealthCheckSetting,
  DescribeContainerGroupsRequest,
  RedoTaskBatchResponse,
  TerminateTaskFlowBatchRequest,
  ExpandGroupRequest,
  DeleteServerlessGroupRequest,
  DescribeImageTagsRequest,
  ModifyLaneRuleResponse,
  DescribeSimpleClustersResponse,
  SchedulingStrategy,
  DescribePodInstancesResponse,
  VmGroup,
  DescribeRepositoryResponse,
  RevocationConfigRequest,
  GroupPod,
  ModifyUploadInfoRequest,
  DescribeUploadInfoResponse,
  DescribeReleasedConfigRequest,
  DescribeApiVersionsResponse,
  DescribeRepositoriesResponse,
  StopGroupResponse,
  StartContainerGroupResponse,
  CreateGroupRequest,
  ModifyMicroserviceRequest,
  DescribeConfigReleasesRequest,
  ShardArgument,
  DeleteLaneResponse,
  StopTaskBatchResponse,
  DescribeSimpleNamespacesResponse,
  ModifyLaneResponse,
  TsfPageConfigRelease,
  CreateContainGroupResponse,
  DescribeContainerGroupDetailResponse,
  DisableTaskRequest,
  DescribePkgsResponse,
  SimpleApplication,
  DescribePublicConfigSummaryResponse,
  DescribeLaneRulesRequest,
  DescribeSimpleApplicationsResponse,
  DeleteRepositoryResponse,
  DescribePublicConfigReleaseLogsRequest,
  CreateServerlessGroupResponse,
  CreateLaneRequest,
  DeleteApplicationResponse,
  DescribeBasicResourceUsageResponse,
  UpdateRepositoryRequest,
  RevocationConfigResponse,
  Instance,
  DeployServerlessGroupResponse,
  DescribeConfigsResponse,
  DescribeApplicationAttributeResponse,
  DescribeApplicationsResponse,
  VmGroupSimple,
  ModifyContainerReplicasRequest,
  TerminateTaskFlowBatchResponse,
  ExecuteTaskFlowRequest,
  ModifyLaneRequest,
  DescribeLanesRequest,
  DeleteMicroserviceRequest,
  CreatePublicConfigRequest,
  RemoveInstancesResponse,
  StopContainerGroupResponse,
  DescribeApiVersionsRequest,
  ModifyContainerReplicasResponse,
  DescribeConfigRequest,
  Namespace,
  TsfPageCluster,
  DescribeGroupResponse,
  DescribeGroupsResponse,
  TaskId,
  Env,
  DescribeImageRepositoryResponse,
  DeleteContainerGroupResponse,
  DescribeSimpleGroupsRequest,
  CreateNamespaceResponse,
  DeleteServerlessGroupResponse,
  DeleteImageTagsResponse,
  ModifyUploadInfoResponse,
  DescribeImageTagsResponse,
  DeleteGroupRequest,
  ApiDefinitionDescr,
  ExecuteTaskRequest,
  RedoTaskFlowBatchRequest,
  TsfPageMsInstance,
  StopTaskBatchRequest,
  ServerlessGroup,
  DescribeApplicationResponse,
  LaneInfo,
  DescribeConfigReleaseLogsResponse,
  DescribeImageRepositoryRequest,
  DescribeSimpleGroupsResponse,
  StopTaskExecuteRequest,
  DescribeFlowLastBatchStateRequest,
  ContainerGroupDetail,
  DeletePublicConfigRequest,
  TaskLastExecuteStatus,
  DeleteNamespaceResponse,
  CreateMicroserviceRequest,
  DescribePkgsRequest,
  ReleaseConfigResponse,
  RemoveInstancesRequest,
  DisableTaskFlowRequest,
  ShrinkInstancesRequest,
  ShrinkInstancesResponse,
  DeleteImageTagsRequest,
  DescribeRepositoriesRequest,
  DescribeApplicationAttributeRequest,
  DescribePodInstancesRequest,
  DescribeTaskLastStatusRequest,
  OverviewBasicResourceUsage,
  CreateTaskRequest,
  DescribeConfigsRequest,
  OperationInfo,
  AddClusterInstancesRequest,
  DescribePublicConfigResponse,
  RollbackConfigRequest,
  DeleteConfigResponse,
  TsfPageNamespace,
  DescribeContainerGroupsResponse,
  DescribeSimpleApplicationsRequest,
  DescribeConfigResponse,
  DescribeSimpleNamespacesRequest,
  ExecuteTaskFlowResponse,
  LaneRule,
  MsInstance,
  ExpandGroupResponse,
  DescribeServerlessGroupsResponse,
  DescribePublicConfigsResponse,
  ServerlessGroupPage,
  ImageRepository,
  AddInstancesResponse,
  DeleteApplicationRequest,
  ContinueRunFailedTaskBatchResponse,
  DescribeSimpleClustersRequest,
  StartContainerGroupRequest,
  DeleteConfigRequest,
  DescribePublicConfigReleaseLogsResponse,
  DeleteTaskRequest,
  HealthCheckSettings,
  ServiceSetting,
  ExecuteTaskResponse,
  ApiResponseDescr,
  UpdateHealthCheckSettingsRequest,
  DeployServerlessGroupRequest,
  Config,
  CreateClusterResponse,
  DeletePublicConfigResponse,
  ApiRequestDescr,
  CreateMicroserviceResponse,
  ReleasePublicConfigResponse,
  ApiVersionArray,
  CreateClusterRequest,
  StopGroupRequest,
  ConfigReleaseLog,
  ShrinkGroupResponse,
  CosUploadInfo,
  ConfigRelease,
  DeleteContainerGroupRequest,
  AdvanceSettings,
  ReleaseConfigRequest,
  CreateConfigRequest,
  MsApiArray,
  CreateNamespaceRequest,
  DescribeContainerGroupDetailRequest,
  DescribeApiDetailRequest,
  DescribeUploadInfoRequest,
  DescribeClusterInstancesRequest,
  StopContainerGroupRequest,
  ImageRepositoryResult,
  DescribeRepositoryRequest,
  RevocationPublicConfigRequest,
  TaskFlowLastBatchState,
  PropertyField,
  UpdateHealthCheckSettingsResponse,
  TsfPageApplication,
  DescribeGroupRequest,
  RedoTaskRequest,
  ImageTagsResult,
  RepositoryInfo,
  EnableTaskFlowRequest,
  CreateLaneResponse,
  DescribeServerlessGroupRequest,
  TsfPageVmGroup,
  AddInstanceResult,
  DescribeFlowLastBatchStateResponse,
  ContinueRunFailedTaskBatchRequest,
  StopTaskExecuteResponse,
  EnableTaskFlowResponse,
  ApplicationAttribute,
  DeleteImageTag,
  DeletePkgsResponse,
  DescribeConfigReleasesResponse,
  Cluster,
  ModifyLaneRuleRequest,
  ModifyMicroserviceResponse,
  DescribeMicroservicesResponse,
  DescribeDownloadInfoResponse,
  GroupPodResult,
  DescribeApplicationRequest,
  Microservice,
  TsfPageConfigReleaseLog,
  DescribePublicConfigRequest,
  ApplicationForPage,
  StartGroupResponse,
  DeployContainerGroupResponse,
  CreatePublicConfigResponse,
  DeleteMicroserviceResponse,
  DescribeLanesResponse,
  ContainGroupResult,
  ProtocolPort,
  LaneRules,
  DescribeReleasedConfigResponse,
  DescribeMicroservicesRequest,
  ShrinkGroupRequest,
  TsfPageSimpleApplication,
  CreateConfigResponse,
  AddClusterInstancesResponse,
  PkgInfo,
  RepositoryList,
  CreateLaneRuleResponse,
  CreateTaskResponse,
  DescribeApiDetailResponse,
  DescribeGroupsRequest,
  DescribeTaskLastStatusResponse,
  ModifyContainerGroupRequest,
  UpdateRepositoryResponse,
  TsfPageMicroservice,
  DescribePublicConfigsRequest,
  AddInstancesRequest,
  RedoTaskResponse,
  StartGroupRequest,
  LaneRuleTag,
  RollbackConfigResponse,
  DescribeApplicationsRequest,
  OperationInfoDetail,
  CreateRepositoryRequest,
  CreateApplicationRequest,
  DescribePublicConfigReleasesRequest,
  SimpleGroup,
  DeleteNamespaceRequest,
  PkgBind,
  DeleteTaskResponse,
  DeployGroupRequest,
  LaneInfos,
  RedoTaskBatchRequest,
  CreateServerlessGroupRequest,
  DescribeMicroserviceResponse,
  DeleteGroupResponse,
  CreateRepositoryResponse,
  CreateLaneRuleRequest,
  DescribeServerlessGroupsRequest,
  DeployContainerGroupRequest,
  CosDownloadInfo,
  TsfPageSimpleGroup,
  DeletePkgsRequest,
  TsfPageInstance,
  DescribeConfigReleaseLogsRequest,
  DescribeConfigSummaryResponse,
  CreateContainGroupRequest,
  ContainGroup,
  DescribePublicConfigReleasesResponse,
  DescribeLaneRulesResponse,
  PkgList,
  CreateApplicationResponse,
  DeleteRepositoryRequest,
  DescribeConfigSummaryRequest,
  DeleteLaneRequest,
  DeployGroupResponse,
  ModifyContainerGroupResponse,
  EnableTaskResponse,
  ReleasePublicConfigRequest,
  DescribeServerlessGroupResponse,
  LaneGroup,
  DescribeBasicResourceUsageRequest,
  TsfPageConfig,
  RedoTaskFlowBatchResponse,
  RevocationPublicConfigResponse,
  DescribeGroupInstancesRequest,
  CreateGroupResponse,
} from "./tsf_models"

/**
 * tsf client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tsf.tencentcloudapi.com", "2018-03-26", clientConfig)
  }

  /**
   * 创建任务
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
   * 删除公共配置项
   */
  async DeletePublicConfig(
    req: DeletePublicConfigRequest,
    cb?: (error: string, rep: DeletePublicConfigResponse) => void
  ): Promise<DeletePublicConfigResponse> {
    return this.request("DeletePublicConfig", req, cb)
  }

  /**
   * 创建集群
   */
  async CreateCluster(
    req: CreateClusterRequest,
    cb?: (error: string, rep: CreateClusterResponse) => void
  ): Promise<CreateClusterResponse> {
    return this.request("CreateCluster", req, cb)
  }

  /**
   * 对执行失败的任务批次执行续跑
   */
  async ContinueRunFailedTaskBatch(
    req: ContinueRunFailedTaskBatchRequest,
    cb?: (error: string, rep: ContinueRunFailedTaskBatchResponse) => void
  ): Promise<ContinueRunFailedTaskBatchResponse> {
    return this.request("ContinueRunFailedTaskBatch", req, cb)
  }

  /**
   * 修改容器部署组实例数
   */
  async ModifyContainerReplicas(
    req: ModifyContainerReplicasRequest,
    cb?: (error: string, rep: ModifyContainerReplicasResponse) => void
  ): Promise<ModifyContainerReplicasResponse> {
    return this.request("ModifyContainerReplicas", req, cb)
  }

  /**
   * 虚拟机部署组下线实例
   */
  async ShrinkInstances(
    req: ShrinkInstancesRequest,
    cb?: (error: string, rep: ShrinkInstancesResponse) => void
  ): Promise<ShrinkInstancesResponse> {
    return this.request("ShrinkInstances", req, cb)
  }

  /**
   * 获取部署组实例列表
   */
  async DescribePodInstances(
    req: DescribePodInstancesRequest,
    cb?: (error: string, rep: DescribePodInstancesResponse) => void
  ): Promise<DescribePodInstancesResponse> {
    return this.request("DescribePodInstances", req, cb)
  }

  /**
   * 撤回已发布的公共配置
   */
  async RevocationPublicConfig(
    req: RevocationPublicConfigRequest,
    cb?: (error: string, rep: RevocationPublicConfigResponse) => void
  ): Promise<RevocationPublicConfigResponse> {
    return this.request("RevocationPublicConfig", req, cb)
  }

  /**
   * 创建命名空间
   */
  async CreateNamespace(
    req: CreateNamespaceRequest,
    cb?: (error: string, rep: CreateNamespaceResponse) => void
  ): Promise<CreateNamespaceResponse> {
    return this.request("CreateNamespace", req, cb)
  }

  /**
   * 添加云主机节点至TSF集群
   */
  async AddClusterInstances(
    req: AddClusterInstancesRequest,
    cb?: (error: string, rep: AddClusterInstancesResponse) => void
  ): Promise<AddClusterInstancesResponse> {
    return this.request("AddClusterInstances", req, cb)
  }

  /**
   * 重新执行工作流批次
   */
  async RedoTaskFlowBatch(
    req: RedoTaskFlowBatchRequest,
    cb?: (error: string, rep: RedoTaskFlowBatchResponse) => void
  ): Promise<RedoTaskFlowBatchResponse> {
    return this.request("RedoTaskFlowBatch", req, cb)
  }

  /**
   * 查询公共配置汇总列表
   */
  async DescribePublicConfigSummary(
    req: DescribePublicConfigSummaryRequest,
    cb?: (error: string, rep: DescribePublicConfigSummaryResponse) => void
  ): Promise<DescribePublicConfigSummaryResponse> {
    return this.request("DescribePublicConfigSummary", req, cb)
  }

  /**
   * 查询仓库列表
   */
  async DescribeRepositories(
    req: DescribeRepositoriesRequest,
    cb?: (error: string, rep: DescribeRepositoriesResponse) => void
  ): Promise<DescribeRepositoriesResponse> {
    return this.request("DescribeRepositories", req, cb)
  }

  /**
   * 查询配置项列表
   */
  async DescribeConfigs(
    req: DescribeConfigsRequest,
    cb?: (error: string, rep: DescribeConfigsResponse) => void
  ): Promise<DescribeConfigsResponse> {
    return this.request("DescribeConfigs", req, cb)
  }

  /**
   * 停用任务
   */
  async DisableTask(
    req: DisableTaskRequest,
    cb?: (error: string, rep: DisableTaskResponse) => void
  ): Promise<DisableTaskResponse> {
    return this.request("DisableTask", req, cb)
  }

  /**
   * 批量删除镜像版本
   */
  async DeleteImageTags(
    req: DeleteImageTagsRequest,
    cb?: (error: string, rep: DeleteImageTagsResponse) => void
  ): Promise<DeleteImageTagsResponse> {
    return this.request("DeleteImageTags", req, cb)
  }

  /**
   * 查询配置
   */
  async DescribeConfig(
    req: DescribeConfigRequest,
    cb?: (error: string, rep: DescribeConfigResponse) => void
  ): Promise<DescribeConfigResponse> {
    return this.request("DescribeConfig", req, cb)
  }

  /**
   * 停止正在某个节点上执行的任务
   */
  async StopTaskExecute(
    req: StopTaskExecuteRequest,
    cb?: (error: string, rep: StopTaskExecuteResponse) => void
  ): Promise<StopTaskExecuteResponse> {
    return this.request("StopTaskExecute", req, cb)
  }

  /**
   *  容器部署组详情
   */
  async DescribeContainerGroupDetail(
    req: DescribeContainerGroupDetailRequest,
    cb?: (error: string, rep: DescribeContainerGroupDetailResponse) => void
  ): Promise<DescribeContainerGroupDetailResponse> {
    return this.request("DescribeContainerGroupDetail", req, cb)
  }

  /**
   * 回滚配置
   */
  async RollbackConfig(
    req: RollbackConfigRequest,
    cb?: (error: string, rep: RollbackConfigResponse) => void
  ): Promise<RollbackConfigResponse> {
    return this.request("RollbackConfig", req, cb)
  }

  /**
   * 镜像版本列表
   */
  async DescribeImageTags(
    req: DescribeImageTagsRequest,
    cb?: (error: string, rep: DescribeImageTagsResponse) => void
  ): Promise<DescribeImageTagsResponse> {
    return this.request("DescribeImageTags", req, cb)
  }

  /**
     * 调用该接口和COS的上传接口后，需要调用此接口更新TSF中保存的程序包状态。
调用此接口完成后，才标志上传包流程结束。
     */
  async ModifyUploadInfo(
    req: ModifyUploadInfoRequest,
    cb?: (error: string, rep: ModifyUploadInfoResponse) => void
  ): Promise<ModifyUploadInfoResponse> {
    return this.request("ModifyUploadInfo", req, cb)
  }

  /**
   * 查询简单集群列表
   */
  async DescribeSimpleClusters(
    req: DescribeSimpleClustersRequest,
    cb?: (error: string, rep: DescribeSimpleClustersResponse) => void
  ): Promise<DescribeSimpleClustersResponse> {
    return this.request("DescribeSimpleClusters", req, cb)
  }

  /**
   * 查询API详情
   */
  async DescribeApiDetail(
    req: DescribeApiDetailRequest,
    cb?: (error: string, rep: DescribeApiDetailResponse) => void
  ): Promise<DescribeApiDetailResponse> {
    return this.request("DescribeApiDetail", req, cb)
  }

  /**
   * 部署Serverless应用
   */
  async DeployServerlessGroup(
    req: DeployServerlessGroupRequest,
    cb?: (error: string, rep: DeployServerlessGroupResponse) => void
  ): Promise<DeployServerlessGroupResponse> {
    return this.request("DeployServerlessGroup", req, cb)
  }

  /**
   * 创建配置项
   */
  async CreateConfig(
    req: CreateConfigRequest,
    cb?: (error: string, rep: CreateConfigResponse) => void
  ): Promise<CreateConfigResponse> {
    return this.request("CreateConfig", req, cb)
  }

  /**
   * 容器部署组列表
   */
  async DescribeContainerGroups(
    req: DescribeContainerGroupsRequest,
    cb?: (error: string, rep: DescribeContainerGroupsResponse) => void
  ): Promise<DescribeContainerGroupsResponse> {
    return this.request("DescribeContainerGroups", req, cb)
  }

  /**
   * 停用工作流
   */
  async DisableTaskFlow(
    req: DisableTaskFlowRequest,
    cb?: (error: string, rep: DisableTaskFlowResponse) => void
  ): Promise<DisableTaskFlowResponse> {
    return this.request("DisableTaskFlow", req, cb)
  }

  /**
     * TSF上传的程序包存放在腾讯云对象存储（COS）中，通过该API可以获取从COS下载程序包需要的信息，包括包所在的桶、存储路径、鉴权信息等，之后使用COS API（或SDK）进行下载。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     */
  async DescribeDownloadInfo(
    req: DescribeDownloadInfoRequest,
    cb?: (error: string, rep: DescribeDownloadInfoResponse) => void
  ): Promise<DescribeDownloadInfoResponse> {
    return this.request("DescribeDownloadInfo", req, cb)
  }

  /**
   * 获取应用列表
   */
  async DescribeApplications(
    req: DescribeApplicationsRequest,
    cb?: (error: string, rep: DescribeApplicationsResponse) => void
  ): Promise<DescribeApplicationsResponse> {
    return this.request("DescribeApplications", req, cb)
  }

  /**
   * 更新仓库信息
   */
  async UpdateRepository(
    req: UpdateRepositoryRequest,
    cb?: (error: string, rep: UpdateRepositoryResponse) => void
  ): Promise<UpdateRepositoryResponse> {
    return this.request("UpdateRepository", req, cb)
  }

  /**
   * 获取应用详情
   */
  async DescribeApplication(
    req: DescribeApplicationRequest,
    cb?: (error: string, rep: DescribeApplicationResponse) => void
  ): Promise<DescribeApplicationResponse> {
    return this.request("DescribeApplication", req, cb)
  }

  /**
   * 查询简单应用列表
   */
  async DescribeSimpleApplications(
    req: DescribeSimpleApplicationsRequest,
    cb?: (error: string, rep: DescribeSimpleApplicationsResponse) => void
  ): Promise<DescribeSimpleApplicationsResponse> {
    return this.request("DescribeSimpleApplications", req, cb)
  }

  /**
   * 查询泳道列表
   */
  async DescribeLanes(
    req: DescribeLanesRequest,
    cb?: (error: string, rep: DescribeLanesResponse) => void
  ): Promise<DescribeLanesResponse> {
    return this.request("DescribeLanes", req, cb)
  }

  /**
   * 更新健康检查配置
   */
  async UpdateHealthCheckSettings(
    req: UpdateHealthCheckSettingsRequest,
    cb?: (error: string, rep: UpdateHealthCheckSettingsResponse) => void
  ): Promise<UpdateHealthCheckSettingsResponse> {
    return this.request("UpdateHealthCheckSettings", req, cb)
  }

  /**
   * 执行一次任务。
   */
  async ExecuteTask(
    req: ExecuteTaskRequest,
    cb?: (error: string, rep: ExecuteTaskResponse) => void
  ): Promise<ExecuteTaskResponse> {
    return this.request("ExecuteTask", req, cb)
  }

  /**
   * 查询简单命名空间列表
   */
  async DescribeSimpleNamespaces(
    req: DescribeSimpleNamespacesRequest,
    cb?: (error: string, rep: DescribeSimpleNamespacesResponse) => void
  ): Promise<DescribeSimpleNamespacesResponse> {
    return this.request("DescribeSimpleNamespaces", req, cb)
  }

  /**
   * 创建Serverless部署组
   */
  async CreateServerlessGroup(
    req: CreateServerlessGroupRequest,
    cb?: (error: string, rep: CreateServerlessGroupResponse) => void
  ): Promise<CreateServerlessGroupResponse> {
    return this.request("CreateServerlessGroup", req, cb)
  }

  /**
   * 停止容器部署组
   */
  async StopContainerGroup(
    req: StopContainerGroupRequest,
    cb?: (error: string, rep: StopContainerGroupResponse) => void
  ): Promise<StopContainerGroupResponse> {
    return this.request("StopContainerGroup", req, cb)
  }

  /**
   * 创建泳道规则
   */
  async CreateLaneRule(
    req: CreateLaneRuleRequest,
    cb?: (error: string, rep: CreateLaneRuleResponse) => void
  ): Promise<CreateLaneRuleResponse> {
    return this.request("CreateLaneRule", req, cb)
  }

  /**
   * 删除容器部署组
   */
  async DeleteContainerGroup(
    req: DeleteContainerGroupRequest,
    cb?: (error: string, rep: DeleteContainerGroupResponse) => void
  ): Promise<DeleteContainerGroupResponse> {
    return this.request("DeleteContainerGroup", req, cb)
  }

  /**
   * 发布配置
   */
  async ReleaseConfig(
    req: ReleaseConfigRequest,
    cb?: (error: string, rep: ReleaseConfigResponse) => void
  ): Promise<ReleaseConfigResponse> {
    return this.request("ReleaseConfig", req, cb)
  }

  /**
   * 停止一个工作流批次
   */
  async TerminateTaskFlowBatch(
    req: TerminateTaskFlowBatchRequest,
    cb?: (error: string, rep: TerminateTaskFlowBatchResponse) => void
  ): Promise<TerminateTaskFlowBatchResponse> {
    return this.request("TerminateTaskFlowBatch", req, cb)
  }

  /**
   * 获取虚拟机部署组列表
   */
  async DescribeGroups(
    req: DescribeGroupsRequest,
    cb?: (error: string, rep: DescribeGroupsResponse) => void
  ): Promise<DescribeGroupsResponse> {
    return this.request("DescribeGroups", req, cb)
  }

  /**
   * 镜像仓库列表
   */
  async DescribeImageRepository(
    req: DescribeImageRepositoryRequest,
    cb?: (error: string, rep: DescribeImageRepositoryResponse) => void
  ): Promise<DescribeImageRepositoryResponse> {
    return this.request("DescribeImageRepository", req, cb)
  }

  /**
   * 创建仓库
   */
  async CreateRepository(
    req: CreateRepositoryRequest,
    cb?: (error: string, rep: CreateRepositoryResponse) => void
  ): Promise<CreateRepositoryResponse> {
    return this.request("CreateRepository", req, cb)
  }

  /**
   * 查询集群实例
   */
  async DescribeClusterInstances(
    req: DescribeClusterInstancesRequest,
    cb?: (error: string, rep: DescribeClusterInstancesResponse) => void
  ): Promise<DescribeClusterInstancesResponse> {
    return this.request("DescribeClusterInstances", req, cb)
  }

  /**
   * 创建公共配置项
   */
  async CreatePublicConfig(
    req: CreatePublicConfigRequest,
    cb?: (error: string, rep: CreatePublicConfigResponse) => void
  ): Promise<CreatePublicConfigResponse> {
    return this.request("CreatePublicConfig", req, cb)
  }

  /**
   * 查询简单部署组列表
   */
  async DescribeSimpleGroups(
    req: DescribeSimpleGroupsRequest,
    cb?: (error: string, rep: DescribeSimpleGroupsResponse) => void
  ): Promise<DescribeSimpleGroupsResponse> {
    return this.request("DescribeSimpleGroups", req, cb)
  }

  /**
   * 添加云主机节点至TSF集群
   */
  async AddInstances(
    req: AddInstancesRequest,
    cb?: (error: string, rep: AddInstancesResponse) => void
  ): Promise<AddInstancesResponse> {
    return this.request("AddInstances", req, cb)
  }

  /**
   * 查询配置汇总列表
   */
  async DescribeConfigSummary(
    req: DescribeConfigSummaryRequest,
    cb?: (error: string, rep: DescribeConfigSummaryResponse) => void
  ): Promise<DescribeConfigSummaryResponse> {
    return this.request("DescribeConfigSummary", req, cb)
  }

  /**
   * 重新执行任务
   */
  async RedoTask(
    req: RedoTaskRequest,
    cb?: (error: string, rep: RedoTaskResponse) => void
  ): Promise<RedoTaskResponse> {
    return this.request("RedoTask", req, cb)
  }

  /**
   * 无
   */
  async DescribePkgs(
    req: DescribePkgsRequest,
    cb?: (error: string, rep: DescribePkgsResponse) => void
  ): Promise<DescribePkgsResponse> {
    return this.request("DescribePkgs", req, cb)
  }

  /**
   * 查询公共配置（单条）
   */
  async DescribePublicConfig(
    req: DescribePublicConfigRequest,
    cb?: (error: string, rep: DescribePublicConfigResponse) => void
  ): Promise<DescribePublicConfigResponse> {
    return this.request("DescribePublicConfig", req, cb)
  }

  /**
   * 启动容器部署组
   */
  async StartContainerGroup(
    req: StartContainerGroupRequest,
    cb?: (error: string, rep: StartContainerGroupResponse) => void
  ): Promise<StartContainerGroupResponse> {
    return this.request("StartContainerGroup", req, cb)
  }

  /**
   * 查询Serverless部署组列表
   */
  async DescribeServerlessGroups(
    req: DescribeServerlessGroupsRequest,
    cb?: (error: string, rep: DescribeServerlessGroupsResponse) => void
  ): Promise<DescribeServerlessGroupsResponse> {
    return this.request("DescribeServerlessGroups", req, cb)
  }

  /**
   * 创建虚拟机部署组
   */
  async CreateGroup(
    req: CreateGroupRequest,
    cb?: (error: string, rep: CreateGroupResponse) => void
  ): Promise<CreateGroupResponse> {
    return this.request("CreateGroup", req, cb)
  }

  /**
   * 查询任务最近一次执行状态
   */
  async DescribeTaskLastStatus(
    req: DescribeTaskLastStatusRequest,
    cb?: (error: string, rep: DescribeTaskLastStatusResponse) => void
  ): Promise<DescribeTaskLastStatusResponse> {
    return this.request("DescribeTaskLastStatus", req, cb)
  }

  /**
   * 查询虚拟机部署组云主机列表
   */
  async DescribeGroupInstances(
    req: DescribeGroupInstancesRequest,
    cb?: (error: string, rep: DescribeGroupInstancesResponse) => void
  ): Promise<DescribeGroupInstancesResponse> {
    return this.request("DescribeGroupInstances", req, cb)
  }

  /**
     * 从软件仓库批量删除程序包。
一次最多支持删除1000个包，数量超过1000，返回UpperDeleteLimit错误。
     */
  async DeletePkgs(
    req: DeletePkgsRequest,
    cb?: (error: string, rep: DeletePkgsResponse) => void
  ): Promise<DeletePkgsResponse> {
    return this.request("DeletePkgs", req, cb)
  }

  /**
   * 查询公共配置项列表
   */
  async DescribePublicConfigs(
    req: DescribePublicConfigsRequest,
    cb?: (error: string, rep: DescribePublicConfigsResponse) => void
  ): Promise<DescribePublicConfigsResponse> {
    return this.request("DescribePublicConfigs", req, cb)
  }

  /**
   * 启用任务
   */
  async EnableTask(
    req: EnableTaskRequest,
    cb?: (error: string, rep: EnableTaskResponse) => void
  ): Promise<EnableTaskResponse> {
    return this.request("EnableTask", req, cb)
  }

  /**
   * 删除容器部署组
   */
  async DeleteGroup(
    req: DeleteGroupRequest,
    cb?: (error: string, rep: DeleteGroupResponse) => void
  ): Promise<DeleteGroupResponse> {
    return this.request("DeleteGroup", req, cb)
  }

  /**
   * 从 TSF 集群中批量移除云主机节点
   */
  async RemoveInstances(
    req: RemoveInstancesRequest,
    cb?: (error: string, rep: RemoveInstancesResponse) => void
  ): Promise<RemoveInstancesResponse> {
    return this.request("RemoveInstances", req, cb)
  }

  /**
   * 虚拟机部署组添加实例
   */
  async ExpandGroup(
    req: ExpandGroupRequest,
    cb?: (error: string, rep: ExpandGroupResponse) => void
  ): Promise<ExpandGroupResponse> {
    return this.request("ExpandGroup", req, cb)
  }

  /**
   * 删除任务
   */
  async DeleteTask(
    req: DeleteTaskRequest,
    cb?: (error: string, rep: DeleteTaskResponse) => void
  ): Promise<DeleteTaskResponse> {
    return this.request("DeleteTask", req, cb)
  }

  /**
   * 删除泳道
   */
  async DeleteLane(
    req: DeleteLaneRequest,
    cb?: (error: string, rep: DeleteLaneResponse) => void
  ): Promise<DeleteLaneResponse> {
    return this.request("DeleteLane", req, cb)
  }

  /**
   * 查询配置发布信息
   */
  async DescribeConfigReleases(
    req: DescribeConfigReleasesRequest,
    cb?: (error: string, rep: DescribeConfigReleasesResponse) => void
  ): Promise<DescribeConfigReleasesResponse> {
    return this.request("DescribeConfigReleases", req, cb)
  }

  /**
   * 创建泳道
   */
  async CreateLane(
    req: CreateLaneRequest,
    cb?: (error: string, rep: CreateLaneResponse) => void
  ): Promise<CreateLaneResponse> {
    return this.request("CreateLane", req, cb)
  }

  /**
   * 部署虚拟机部署组应用
   */
  async DeployGroup(
    req: DeployGroupRequest,
    cb?: (error: string, rep: DeployGroupResponse) => void
  ): Promise<DeployGroupResponse> {
    return this.request("DeployGroup", req, cb)
  }

  /**
   * 更新泳道信息
   */
  async ModifyLane(
    req: ModifyLaneRequest,
    cb?: (error: string, rep: ModifyLaneResponse) => void
  ): Promise<ModifyLaneResponse> {
    return this.request("ModifyLane", req, cb)
  }

  /**
   * 新增微服务
   */
  async CreateMicroservice(
    req: CreateMicroserviceRequest,
    cb?: (error: string, rep: CreateMicroserviceResponse) => void
  ): Promise<CreateMicroserviceResponse> {
    return this.request("CreateMicroservice", req, cb)
  }

  /**
   * 修改微服务详情
   */
  async ModifyMicroservice(
    req: ModifyMicroserviceRequest,
    cb?: (error: string, rep: ModifyMicroserviceResponse) => void
  ): Promise<ModifyMicroserviceResponse> {
    return this.request("ModifyMicroservice", req, cb)
  }

  /**
   * 启用工作流
   */
  async EnableTaskFlow(
    req: EnableTaskFlowRequest,
    cb?: (error: string, rep: EnableTaskFlowResponse) => void
  ): Promise<EnableTaskFlowResponse> {
    return this.request("EnableTaskFlow", req, cb)
  }

  /**
   * 查询服务API列表
   */
  async DescribeMsApiList(
    req: DescribeMsApiListRequest,
    cb?: (error: string, rep: DescribeMsApiListResponse) => void
  ): Promise<DescribeMsApiListResponse> {
    return this.request("DescribeMsApiList", req, cb)
  }

  /**
   * 创建应用
   */
  async CreateApplication(
    req: CreateApplicationRequest,
    cb?: (error: string, rep: CreateApplicationResponse) => void
  ): Promise<CreateApplicationResponse> {
    return this.request("CreateApplication", req, cb)
  }

  /**
   * 重新执行任务批次
   */
  async RedoTaskBatch(
    req: RedoTaskBatchRequest,
    cb?: (error: string, rep: RedoTaskBatchResponse) => void
  ): Promise<RedoTaskBatchResponse> {
    return this.request("RedoTaskBatch", req, cb)
  }

  /**
   * 查询公共配置发布历史
   */
  async DescribePublicConfigReleaseLogs(
    req: DescribePublicConfigReleaseLogsRequest,
    cb?: (error: string, rep: DescribePublicConfigReleaseLogsResponse) => void
  ): Promise<DescribePublicConfigReleaseLogsResponse> {
    return this.request("DescribePublicConfigReleaseLogs", req, cb)
  }

  /**
   * 查询配置发布历史
   */
  async DescribeConfigReleaseLogs(
    req: DescribeConfigReleaseLogsRequest,
    cb?: (error: string, rep: DescribeConfigReleaseLogsResponse) => void
  ): Promise<DescribeConfigReleaseLogsResponse> {
    return this.request("DescribeConfigReleaseLogs", req, cb)
  }

  /**
   * 执行一次工作流
   */
  async ExecuteTaskFlow(
    req: ExecuteTaskFlowRequest,
    cb?: (error: string, rep: ExecuteTaskFlowResponse) => void
  ): Promise<ExecuteTaskFlowResponse> {
    return this.request("ExecuteTaskFlow", req, cb)
  }

  /**
   * 查询微服务详情
   */
  async DescribeMicroservice(
    req: DescribeMicroserviceRequest,
    cb?: (error: string, rep: DescribeMicroserviceResponse) => void
  ): Promise<DescribeMicroserviceResponse> {
    return this.request("DescribeMicroservice", req, cb)
  }

  /**
   * 删除Serverless部署组
   */
  async DeleteServerlessGroup(
    req: DeleteServerlessGroupRequest,
    cb?: (error: string, rep: DeleteServerlessGroupResponse) => void
  ): Promise<DeleteServerlessGroupResponse> {
    return this.request("DeleteServerlessGroup", req, cb)
  }

  /**
   * 查询工作流最新一个批次的状态信息
   */
  async DescribeFlowLastBatchState(
    req: DescribeFlowLastBatchStateRequest,
    cb?: (error: string, rep: DescribeFlowLastBatchStateResponse) => void
  ): Promise<DescribeFlowLastBatchStateResponse> {
    return this.request("DescribeFlowLastBatchState", req, cb)
  }

  /**
   * 删除仓库
   */
  async DeleteRepository(
    req: DeleteRepositoryRequest,
    cb?: (error: string, rep: DeleteRepositoryResponse) => void
  ): Promise<DeleteRepositoryResponse> {
    return this.request("DeleteRepository", req, cb)
  }

  /**
   * 部署容器应用
   */
  async DeployContainerGroup(
    req: DeployContainerGroupRequest,
    cb?: (error: string, rep: DeployContainerGroupResponse) => void
  ): Promise<DeployContainerGroupResponse> {
    return this.request("DeployContainerGroup", req, cb)
  }

  /**
   * 查询虚拟机部署组详情
   */
  async DescribeGroup(
    req: DescribeGroupRequest,
    cb?: (error: string, rep: DescribeGroupResponse) => void
  ): Promise<DescribeGroupResponse> {
    return this.request("DescribeGroup", req, cb)
  }

  /**
   * 删除应用
   */
  async DeleteApplication(
    req: DeleteApplicationRequest,
    cb?: (error: string, rep: DeleteApplicationResponse) => void
  ): Promise<DeleteApplicationResponse> {
    return this.request("DeleteApplication", req, cb)
  }

  /**
   * 删除微服务
   */
  async DeleteMicroservice(
    req: DeleteMicroserviceRequest,
    cb?: (error: string, rep: DeleteMicroserviceResponse) => void
  ): Promise<DeleteMicroserviceResponse> {
    return this.request("DeleteMicroservice", req, cb)
  }

  /**
   * TSF基本资源信息概览接口
   */
  async DescribeBasicResourceUsage(
    req?: DescribeBasicResourceUsageRequest,
    cb?: (error: string, rep: DescribeBasicResourceUsageResponse) => void
  ): Promise<DescribeBasicResourceUsageResponse> {
    return this.request("DescribeBasicResourceUsage", req, cb)
  }

  /**
   * 删除配置项
   */
  async DeleteConfig(
    req: DeleteConfigRequest,
    cb?: (error: string, rep: DeleteConfigResponse) => void
  ): Promise<DeleteConfigResponse> {
    return this.request("DeleteConfig", req, cb)
  }

  /**
   * 发布公共配置
   */
  async ReleasePublicConfig(
    req: ReleasePublicConfigRequest,
    cb?: (error: string, rep: ReleasePublicConfigResponse) => void
  ): Promise<ReleasePublicConfigResponse> {
    return this.request("ReleasePublicConfig", req, cb)
  }

  /**
   * 停止执行中的任务批次， 非运行中的任务不可调用。
   */
  async StopTaskBatch(
    req: StopTaskBatchRequest,
    cb?: (error: string, rep: StopTaskBatchResponse) => void
  ): Promise<StopTaskBatchResponse> {
    return this.request("StopTaskBatch", req, cb)
  }

  /**
   * 获取微服务列表
   */
  async DescribeMicroservices(
    req: DescribeMicroservicesRequest,
    cb?: (error: string, rep: DescribeMicroservicesResponse) => void
  ): Promise<DescribeMicroservicesResponse> {
    return this.request("DescribeMicroservices", req, cb)
  }

  /**
   * 查询API 版本
   */
  async DescribeApiVersions(
    req: DescribeApiVersionsRequest,
    cb?: (error: string, rep: DescribeApiVersionsResponse) => void
  ): Promise<DescribeApiVersionsResponse> {
    return this.request("DescribeApiVersions", req, cb)
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
   * 创建容器部署组
   */
  async CreateContainGroup(
    req: CreateContainGroupRequest,
    cb?: (error: string, rep: CreateContainGroupResponse) => void
  ): Promise<CreateContainGroupResponse> {
    return this.request("CreateContainGroup", req, cb)
  }

  /**
   * 查询Serverless部署组明细
   */
  async DescribeServerlessGroup(
    req: DescribeServerlessGroupRequest,
    cb?: (error: string, rep: DescribeServerlessGroupResponse) => void
  ): Promise<DescribeServerlessGroupResponse> {
    return this.request("DescribeServerlessGroup", req, cb)
  }

  /**
   * 查询仓库信息
   */
  async DescribeRepository(
    req: DescribeRepositoryRequest,
    cb?: (error: string, rep: DescribeRepositoryResponse) => void
  ): Promise<DescribeRepositoryResponse> {
    return this.request("DescribeRepository", req, cb)
  }

  /**
   * 获取应用列表其它字段，如实例数量信息等
   */
  async DescribeApplicationAttribute(
    req: DescribeApplicationAttributeRequest,
    cb?: (error: string, rep: DescribeApplicationAttributeResponse) => void
  ): Promise<DescribeApplicationAttributeResponse> {
    return this.request("DescribeApplicationAttribute", req, cb)
  }

  /**
   * 撤回已发布的配置
   */
  async RevocationConfig(
    req: RevocationConfigRequest,
    cb?: (error: string, rep: RevocationConfigResponse) => void
  ): Promise<RevocationConfigResponse> {
    return this.request("RevocationConfig", req, cb)
  }

  /**
   * 查询泳道规则列表
   */
  async DescribeLaneRules(
    req: DescribeLaneRulesRequest,
    cb?: (error: string, rep: DescribeLaneRulesResponse) => void
  ): Promise<DescribeLaneRulesResponse> {
    return this.request("DescribeLaneRules", req, cb)
  }

  /**
   * 更新泳道规则
   */
  async ModifyLaneRule(
    req: ModifyLaneRuleRequest,
    cb?: (error: string, rep: ModifyLaneRuleResponse) => void
  ): Promise<ModifyLaneRuleResponse> {
    return this.request("ModifyLaneRule", req, cb)
  }

  /**
   * 查询group发布的配置
   */
  async DescribeReleasedConfig(
    req: DescribeReleasedConfigRequest,
    cb?: (error: string, rep: DescribeReleasedConfigResponse) => void
  ): Promise<DescribeReleasedConfigResponse> {
    return this.request("DescribeReleasedConfig", req, cb)
  }

  /**
   * 查询公共配置发布信息
   */
  async DescribePublicConfigReleases(
    req: DescribePublicConfigReleasesRequest,
    cb?: (error: string, rep: DescribePublicConfigReleasesResponse) => void
  ): Promise<DescribePublicConfigReleasesResponse> {
    return this.request("DescribePublicConfigReleases", req, cb)
  }

  /**
     * TSF会将软件包上传到腾讯云对象存储（COS）。调用此接口获取上传信息，如目标地域，桶，包Id，存储路径，鉴权信息等，之后请使用COS API（或SDK）进行上传。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     */
  async DescribeUploadInfo(
    req: DescribeUploadInfoRequest,
    cb?: (error: string, rep: DescribeUploadInfoResponse) => void
  ): Promise<DescribeUploadInfoResponse> {
    return this.request("DescribeUploadInfo", req, cb)
  }

  /**
   * 停止虚拟机部署组
   */
  async StopGroup(
    req: StopGroupRequest,
    cb?: (error: string, rep: StopGroupResponse) => void
  ): Promise<StopGroupResponse> {
    return this.request("StopGroup", req, cb)
  }

  /**
   * 下线部署组所有机器实例
   */
  async ShrinkGroup(
    req: ShrinkGroupRequest,
    cb?: (error: string, rep: ShrinkGroupResponse) => void
  ): Promise<ShrinkGroupResponse> {
    return this.request("ShrinkGroup", req, cb)
  }

  /**
   * 启动分组
   */
  async StartGroup(
    req: StartGroupRequest,
    cb?: (error: string, rep: StartGroupResponse) => void
  ): Promise<StartGroupResponse> {
    return this.request("StartGroup", req, cb)
  }

  /**
   * 修改容器部署组
   */
  async ModifyContainerGroup(
    req: ModifyContainerGroupRequest,
    cb?: (error: string, rep: ModifyContainerGroupResponse) => void
  ): Promise<ModifyContainerGroupResponse> {
    return this.request("ModifyContainerGroup", req, cb)
  }
}

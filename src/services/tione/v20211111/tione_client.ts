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
  DescribeLogsRequest,
  DescribeModelAccelerateVersionsRequest,
  StopModelAccelerateTaskRequest,
  DeleteTrainingModelVersionResponse,
  ServiceEIP,
  DescribeExportResponse,
  NotebookSetItem,
  ModifyNotebookTagsRequest,
  SSHConfig,
  ModifyServiceGroupWeightsResponse,
  Usage,
  AuthTokenBase,
  DeleteNotebookRequest,
  PushTrainingMetricsRequest,
  Filter,
  DescribeTrainingModelVersionsRequest,
  CodeRepoConfig,
  CreateDatasetResponse,
  Service,
  CrossTenantENIInfo,
  HyperParameter,
  ModifyServiceGroupWeightsRequest,
  DescribeTrainingTasksRequest,
  RollingUpdate,
  VolumeMount,
  ModifyNotebookTagsResponse,
  DescribeBillingResourceGroupResponse,
  SpecUnit,
  ServiceCallInfo,
  CosPathInfo,
  DescribeBillingResourceGroupsResponse,
  DescribeTrainingTaskRequest,
  StartNotebookResponse,
  ModelInputInfo,
  CFSTurbo,
  DescribeTrainingModelVersionRequest,
  ResourceInstanceRunningJobInfo,
  ImageFIlter,
  DefaultNginxGatewayCallInfo,
  CFSConfig,
  StartNotebookRequest,
  NumOrPercent,
  InferTemplate,
  DescribeModelAccelerateVersionsResponse,
  DescribeBuildInImagesRequest,
  StartTrainingTaskRequest,
  ContainerStatus,
  ModifyModelServiceRequest,
  ChatCompletionRequest,
  TrainingTaskSetItem,
  DescribeModelServiceCallInfoRequest,
  DataPoint,
  DescribeNotebookResponse,
  TJCallInfo,
  CBSConfig,
  CreateTrainingModelRequest,
  SchemaInfo,
  StartCmdInfo,
  Event,
  DescribeModelServiceGroupsResponse,
  Spec,
  HTTPGetAction,
  DescribeBillingResourceInstanceRunningJobsResponse,
  InferGatewayCallInfo,
  ResourceGroupInfo,
  CreateNotebookRequest,
  CreatePresignedNotebookUrlResponse,
  ModifyNotebookRequest,
  HorizontalPodAutoscaler,
  ResourceConfigInfo,
  PublicDataSourceFS,
  ExposePortConfig,
  DescribeBillingResourceGroupsRequest,
  Option,
  DeleteExportResponse,
  DefaultInnerCallInfo,
  Choice,
  ModifyModelServiceAuthTokenRequest,
  SchedulingPolicy,
  LogIdentity,
  DescribeDatasetsRequest,
  ModelAccelerateVersion,
  DeleteTrainingModelResponse,
  DescribeInferTemplatesResponse,
  DescribeBillingSpecsRequest,
  RDMAConfig,
  InferCodeInfo,
  DescribeInferTemplatesRequest,
  ModifyModelServiceAuthorizationRequest,
  DeleteModelServiceGroupResponse,
  GpuDetail,
  CreateExportResponse,
  CronScaleJob,
  PrivateLinkInfo,
  DescribeNotebooksResponse,
  InferTemplateGroup,
  DescribeModelServiceHotUpdatedResponse,
  DatasetInfo,
  DescribeModelAccelerateTaskResponse,
  TagFilter,
  PodSSHInfo,
  DescribeModelServiceGroupsRequest,
  SubAccountInfo,
  ImageInfo,
  Tag,
  ServiceInfo,
  StopNotebookResponse,
  DescribeModelServiceRequest,
  CreateTrainingTaskResponse,
  ModifyModelServiceAuthTokenResponse,
  ModifyModelServiceAuthorizationResponse,
  DeleteModelServiceRequest,
  DescribeModelServiceGroupRequest,
  CreateTrainingTaskRequest,
  Message,
  CreatePresignedNotebookUrlRequest,
  ModifyNotebookResponse,
  DescribeModelServiceResponse,
  DescribeBuildInImagesResponse,
  DescribeDatasetsResponse,
  ImageUrl,
  ModelSource,
  CreateNotebookResponse,
  IntranetCallInfo,
  DescribeBillingSpecsPriceRequest,
  WeightEntry,
  Instance,
  SpecPrice,
  CreateExportRequest,
  DescribeBillingSpecsResponse,
  DeleteTrainingTaskResponse,
  AuthToken,
  DescribeEventsResponse,
  DatasetGroup,
  StatefulSetCondition,
  SidecarSpec,
  TCPSocketAction,
  ResourceInfo,
  GroupResource,
  DescribeModelServiceCallInfoResponse,
  DataSetConfig,
  ScheduledAction,
  DescribeNotebooksRequest,
  DeleteNotebookResponse,
  DeleteTrainingTaskRequest,
  CreateModelServiceAuthTokenResponse,
  GooseFS,
  NotebookDetail,
  DescribeBillingResourceInstanceRunningJobsRequest,
  ModifyModelServiceResponse,
  PodInfo,
  ProbeAction,
  DeleteModelServiceAuthTokenResponse,
  ModelInfo,
  CreateDatasetRequest,
  CreateModelServiceResponse,
  DeleteExportRequest,
  ServiceGroup,
  ServiceLimit,
  DescribeModelServiceGroupResponse,
  Attribute,
  ResourceGroup,
  AuthTokenLimit,
  CreateTrainingModelResponse,
  HostPath,
  StopModelAccelerateTaskResponse,
  IngressPrivateLinkInfo,
  UpdateSubAccountLinuxUserInfoResponse,
  ServiceEIPInfo,
  DescribeTrainingTasksResponse,
  DescribeModelAccelerateTaskRequest,
  Container,
  DeleteDatasetResponse,
  ExecAction,
  TrainingTaskDetail,
  DescribeExportRequest,
  UpdateSubAccountLinuxUserInfoRequest,
  DescribeNotebookRequest,
  LocalDisk,
  DescribeLogsResponse,
  EncodedStartCmdInfo,
  StopNotebookRequest,
  DeleteModelServiceGroupRequest,
  TrainingModelVersionDTO,
  CreateModelServiceAuthTokenRequest,
  ExposeNetworkConfig,
  ServiceCallInfoV2,
  DescribeBillingResourceGroupRequest,
  DescribeSubAccountLinuxUserInfosRequest,
  ChatCompletionResponse,
  GooseFSx,
  DescribePlatformImagesResponse,
  DescribeTrainingTaskPodsRequest,
  DescribeTrainingModelVersionsResponse,
  DescribeSubAccountLinuxUserInfosResponse,
  DeleteDatasetRequest,
  DataConfig,
  ResourceConf,
  DeleteModelServiceAuthTokenRequest,
  PushTrainingMetricsResponse,
  StopTrainingTaskResponse,
  HealthProbe,
  HDFSConfig,
  DescribeTrainingTaskPodsResponse,
  ModelAccelerateTask,
  Pod,
  DescribeEventsRequest,
  DeleteTrainingModelRequest,
  DescribeModelServiceHotUpdatedRequest,
  DescribeTrainingTaskResponse,
  PlatformImageInfo,
  DescribePlatformImagesRequest,
  Probe,
  DeleteModelServiceResponse,
  MetricData,
  DeleteTrainingModelVersionRequest,
  DescribeBillingSpecsPriceResponse,
  MultiModalContent,
  DescribeTrainingModelVersionResponse,
  WorkloadStatus,
  EnvVar,
  StopTrainingTaskRequest,
  LogConfig,
  StartTrainingTaskResponse,
} from "./tione_models"

/**
 * tione client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tione.tencentcloudapi.com", "2021-11-11", clientConfig)
  }

  /**
   * 查询模型版本
   */
  async DescribeTrainingModelVersion(
    req: DescribeTrainingModelVersionRequest,
    cb?: (error: string, rep: DescribeTrainingModelVersionResponse) => void
  ): Promise<DescribeTrainingModelVersionResponse> {
    return this.request("DescribeTrainingModelVersion", req, cb)
  }

  /**
   * 查询单个服务
   */
  async DescribeModelService(
    req: DescribeModelServiceRequest,
    cb?: (error: string, rep: DescribeModelServiceResponse) => void
  ): Promise<DescribeModelServiceResponse> {
    return this.request("DescribeModelService", req, cb)
  }

  /**
   * 本接口(DescribeBillingSpecs) 提供查询计费项列表
   */
  async DescribeBillingSpecs(
    req: DescribeBillingSpecsRequest,
    cb?: (error: string, rep: DescribeBillingSpecsResponse) => void
  ): Promise<DescribeBillingSpecsResponse> {
    return this.request("DescribeBillingSpecs", req, cb)
  }

  /**
   * 导入模型
   */
  async CreateTrainingModel(
    req: CreateTrainingModelRequest,
    cb?: (error: string, rep: CreateTrainingModelResponse) => void
  ): Promise<CreateTrainingModelResponse> {
    return this.request("CreateTrainingModel", req, cb)
  }

  /**
   * 本接口(DescribeBillingSpecsPrice)用于查询按量计费计费项价格。
   */
  async DescribeBillingSpecsPrice(
    req: DescribeBillingSpecsPriceRequest,
    cb?: (error: string, rep: DescribeBillingSpecsPriceResponse) => void
  ): Promise<DescribeBillingSpecsPriceResponse> {
    return this.request("DescribeBillingSpecsPrice", req, cb)
  }

  /**
   * 展示服务的调用信息
   */
  async DescribeModelServiceCallInfo(
    req: DescribeModelServiceCallInfoRequest,
    cb?: (error: string, rep: DescribeModelServiceCallInfoResponse) => void
  ): Promise<DescribeModelServiceCallInfoResponse> {
    return this.request("DescribeModelServiceCallInfo", req, cb)
  }

  /**
   * 批量查询子账号Linux用户信息
   */
  async DescribeSubAccountLinuxUserInfos(
    req?: DescribeSubAccountLinuxUserInfosRequest,
    cb?: (error: string, rep: DescribeSubAccountLinuxUserInfosResponse) => void
  ): Promise<DescribeSubAccountLinuxUserInfosResponse> {
    return this.request("DescribeSubAccountLinuxUserInfos", req, cb)
  }

  /**
   * 训练任务详情
   */
  async DescribeTrainingTask(
    req: DescribeTrainingTaskRequest,
    cb?: (error: string, rep: DescribeTrainingTaskResponse) => void
  ): Promise<DescribeTrainingTaskResponse> {
    return this.request("DescribeTrainingTask", req, cb)
  }

  /**
   * 获取任务式建模训练任务，Notebook，在线服务和批量预测任务的事件API
   */
  async DescribeEvents(
    req: DescribeEventsRequest,
    cb?: (error: string, rep: DescribeEventsResponse) => void
  ): Promise<DescribeEventsResponse> {
    return this.request("DescribeEvents", req, cb)
  }

  /**
   * 获取内置镜像列表
   */
  async DescribeBuildInImages(
    req: DescribeBuildInImagesRequest,
    cb?: (error: string, rep: DescribeBuildInImagesResponse) => void
  ): Promise<DescribeBuildInImagesResponse> {
    return this.request("DescribeBuildInImages", req, cb)
  }

  /**
   * 启动Notebook
   */
  async StartNotebook(
    req: StartNotebookRequest,
    cb?: (error: string, rep: StartNotebookResponse) => void
  ): Promise<StartNotebookResponse> {
    return this.request("StartNotebook", req, cb)
  }

  /**
   * 删除数据集
   */
  async DeleteDataset(
    req: DeleteDatasetRequest,
    cb?: (error: string, rep: DeleteDatasetResponse) => void
  ): Promise<DeleteDatasetResponse> {
    return this.request("DeleteDataset", req, cb)
  }

  /**
   * 创建模型训练任务
   */
  async CreateTrainingTask(
    req: CreateTrainingTaskRequest,
    cb?: (error: string, rep: CreateTrainingTaskResponse) => void
  ): Promise<CreateTrainingTaskResponse> {
    return this.request("CreateTrainingTask", req, cb)
  }

  /**
   * 修改服务鉴权配置
   */
  async ModifyModelServiceAuthorization(
    req: ModifyModelServiceAuthorizationRequest,
    cb?: (error: string, rep: ModifyModelServiceAuthorizationResponse) => void
  ): Promise<ModifyModelServiceAuthorizationResponse> {
    return this.request("ModifyModelServiceAuthorization", req, cb)
  }

  /**
   * 修改Notebook
   */
  async ModifyNotebook(
    req: ModifyNotebookRequest,
    cb?: (error: string, rep: ModifyNotebookResponse) => void
  ): Promise<ModifyNotebookResponse> {
    return this.request("ModifyNotebook", req, cb)
  }

  /**
   * 删除Notebook
   */
  async DeleteNotebook(
    req: DeleteNotebookRequest,
    cb?: (error: string, rep: DeleteNotebookResponse) => void
  ): Promise<DeleteNotebookResponse> {
    return this.request("DeleteNotebook", req, cb)
  }

  /**
   * 删除一个 AuthToken
   */
  async DeleteModelServiceAuthToken(
    req: DeleteModelServiceAuthTokenRequest,
    cb?: (error: string, rep: DeleteModelServiceAuthTokenResponse) => void
  ): Promise<DeleteModelServiceAuthTokenResponse> {
    return this.request("DeleteModelServiceAuthToken", req, cb)
  }

  /**
   * 训练任务pod列表
   */
  async DescribeTrainingTaskPods(
    req: DescribeTrainingTaskPodsRequest,
    cb?: (error: string, rep: DescribeTrainingTaskPodsResponse) => void
  ): Promise<DescribeTrainingTaskPodsResponse> {
    return this.request("DescribeTrainingTaskPods", req, cb)
  }

  /**
   * 用于查询模型服务能否开启热更新
   */
  async DescribeModelServiceHotUpdated(
    req: DescribeModelServiceHotUpdatedRequest,
    cb?: (error: string, rep: DescribeModelServiceHotUpdatedResponse) => void
  ): Promise<DescribeModelServiceHotUpdatedResponse> {
    return this.request("DescribeModelServiceHotUpdated", req, cb)
  }

  /**
   * 查询模型优化任务详情
   */
  async DescribeModelAccelerateTask(
    req: DescribeModelAccelerateTaskRequest,
    cb?: (error: string, rep: DescribeModelAccelerateTaskResponse) => void
  ): Promise<DescribeModelAccelerateTaskResponse> {
    return this.request("DescribeModelAccelerateTask", req, cb)
  }

  /**
     * 该接口支持与自行部署的大模型的聊天。

使用该接口调用时需要携带腾讯云的密钥信息用于身份信息鉴权，建议通过腾讯云的云 API SDK调用，具体可以参考
https://cloud.tencent.com/document/product/1278/85305
     */
  async ChatCompletion(
    req: ChatCompletionRequest,
    cb?: (error: string, rep: ChatCompletionResponse) => void
  ): Promise<ChatCompletionResponse> {
    return this.request("ChatCompletion", req, cb)
  }

  /**
   * 修改Notebook标签
   */
  async ModifyNotebookTags(
    req: ModifyNotebookTagsRequest,
    cb?: (error: string, rep: ModifyNotebookTagsResponse) => void
  ): Promise<ModifyNotebookTagsResponse> {
    return this.request("ModifyNotebookTags", req, cb)
  }

  /**
   * 删除模型
   */
  async DeleteTrainingModel(
    req: DeleteTrainingModelRequest,
    cb?: (error: string, rep: DeleteTrainingModelResponse) => void
  ): Promise<DeleteTrainingModelResponse> {
    return this.request("DeleteTrainingModel", req, cb)
  }

  /**
   * 更新推理服务组流量分配
   */
  async ModifyServiceGroupWeights(
    req: ModifyServiceGroupWeightsRequest,
    cb?: (error: string, rep: ModifyServiceGroupWeightsResponse) => void
  ): Promise<ModifyServiceGroupWeightsResponse> {
    return this.request("ModifyServiceGroupWeights", req, cb)
  }

  /**
   * 创建数据集
   */
  async CreateDataset(
    req: CreateDatasetRequest,
    cb?: (error: string, rep: CreateDatasetResponse) => void
  ): Promise<CreateDatasetResponse> {
    return this.request("CreateDataset", req, cb)
  }

  /**
   * 创建Notebook
   */
  async CreateNotebook(
    req: CreateNotebookRequest,
    cb?: (error: string, rep: CreateNotebookResponse) => void
  ): Promise<CreateNotebookResponse> {
    return this.request("CreateNotebook", req, cb)
  }

  /**
   * 启动模型训练任务
   */
  async StartTrainingTask(
    req: StartTrainingTaskRequest,
    cb?: (error: string, rep: StartTrainingTaskResponse) => void
  ): Promise<StartTrainingTaskResponse> {
    return this.request("StartTrainingTask", req, cb)
  }

  /**
   * 查询单个服务组
   */
  async DescribeModelServiceGroup(
    req: DescribeModelServiceGroupRequest,
    cb?: (error: string, rep: DescribeModelServiceGroupResponse) => void
  ): Promise<DescribeModelServiceGroupResponse> {
    return this.request("DescribeModelServiceGroup", req, cb)
  }

  /**
   * 根据服务组id删除服务组下所有模型服务
   */
  async DeleteModelServiceGroup(
    req: DeleteModelServiceGroupRequest,
    cb?: (error: string, rep: DeleteModelServiceGroupResponse) => void
  ): Promise<DeleteModelServiceGroupResponse> {
    return this.request("DeleteModelServiceGroup", req, cb)
  }

  /**
   * 上报训练自定义指标
   */
  async PushTrainingMetrics(
    req: PushTrainingMetricsRequest,
    cb?: (error: string, rep: PushTrainingMetricsResponse) => void
  ): Promise<PushTrainingMetricsResponse> {
    return this.request("PushTrainingMetrics", req, cb)
  }

  /**
   * 停止模型训练任务
   */
  async StopTrainingTask(
    req: StopTrainingTaskRequest,
    cb?: (error: string, rep: StopTrainingTaskResponse) => void
  ): Promise<StopTrainingTaskResponse> {
    return this.request("StopTrainingTask", req, cb)
  }

  /**
   * 模型版本列表
   */
  async DescribeTrainingModelVersions(
    req: DescribeTrainingModelVersionsRequest,
    cb?: (error: string, rep: DescribeTrainingModelVersionsResponse) => void
  ): Promise<DescribeTrainingModelVersionsResponse> {
    return this.request("DescribeTrainingModelVersions", req, cb)
  }

  /**
   * 修改一个 AuthToken
   */
  async ModifyModelServiceAuthToken(
    req: ModifyModelServiceAuthTokenRequest,
    cb?: (error: string, rep: ModifyModelServiceAuthTokenResponse) => void
  ): Promise<ModifyModelServiceAuthTokenResponse> {
    return this.request("ModifyModelServiceAuthToken", req, cb)
  }

  /**
   * 用于创建、发布一个新的模型服务
   */
  async CreateModelService(
    req: CreateModelServiceRequest,
    cb?: (error: string, rep: CreateModelServiceResponse) => void
  ): Promise<CreateModelServiceResponse> {
    return this.request("CreateModelService", req, cb)
  }

  /**
   * 更新子账号Linux用户信息
   */
  async UpdateSubAccountLinuxUserInfo(
    req: UpdateSubAccountLinuxUserInfoRequest,
    cb?: (error: string, rep: UpdateSubAccountLinuxUserInfoResponse) => void
  ): Promise<UpdateSubAccountLinuxUserInfoResponse> {
    return this.request("UpdateSubAccountLinuxUserInfo", req, cb)
  }

  /**
   * 生成Notebook访问链接
   */
  async CreatePresignedNotebookUrl(
    req: CreatePresignedNotebookUrlRequest,
    cb?: (error: string, rep: CreatePresignedNotebookUrlResponse) => void
  ): Promise<CreatePresignedNotebookUrlResponse> {
    return this.request("CreatePresignedNotebookUrl", req, cb)
  }

  /**
   * 获取任务式建模训练任务，Notebook，在线服务和批量预测任务的日志API
   */
  async DescribeLogs(
    req: DescribeLogsRequest,
    cb?: (error: string, rep: DescribeLogsResponse) => void
  ): Promise<DescribeLogsResponse> {
    return this.request("DescribeLogs", req, cb)
  }

  /**
   * 根据服务id删除模型服务
   */
  async DeleteModelService(
    req: DeleteModelServiceRequest,
    cb?: (error: string, rep: DeleteModelServiceResponse) => void
  ): Promise<DeleteModelServiceResponse> {
    return this.request("DeleteModelService", req, cb)
  }

  /**
   * 查询数据集列表
   */
  async DescribeDatasets(
    req: DescribeDatasetsRequest,
    cb?: (error: string, rep: DescribeDatasetsResponse) => void
  ): Promise<DescribeDatasetsResponse> {
    return this.request("DescribeDatasets", req, cb)
  }

  /**
   * 创建一个 AuthToken
   */
  async CreateModelServiceAuthToken(
    req: CreateModelServiceAuthTokenRequest,
    cb?: (error: string, rep: CreateModelServiceAuthTokenResponse) => void
  ): Promise<CreateModelServiceAuthTokenResponse> {
    return this.request("CreateModelServiceAuthToken", req, cb)
  }

  /**
   * 查询资源组节点运行中的任务
   */
  async DescribeBillingResourceInstanceRunningJobs(
    req: DescribeBillingResourceInstanceRunningJobsRequest,
    cb?: (error: string, rep: DescribeBillingResourceInstanceRunningJobsResponse) => void
  ): Promise<DescribeBillingResourceInstanceRunningJobsResponse> {
    return this.request("DescribeBillingResourceInstanceRunningJobs", req, cb)
  }

  /**
   * 训练任务列表
   */
  async DescribeTrainingTasks(
    req: DescribeTrainingTasksRequest,
    cb?: (error: string, rep: DescribeTrainingTasksResponse) => void
  ): Promise<DescribeTrainingTasksResponse> {
    return this.request("DescribeTrainingTasks", req, cb)
  }

  /**
   * 用于更新模型服务
   */
  async ModifyModelService(
    req: ModifyModelServiceRequest,
    cb?: (error: string, rep: ModifyModelServiceResponse) => void
  ): Promise<ModifyModelServiceResponse> {
    return this.request("ModifyModelService", req, cb)
  }

  /**
   * Notebook列表
   */
  async DescribeNotebooks(
    req: DescribeNotebooksRequest,
    cb?: (error: string, rep: DescribeNotebooksResponse) => void
  ): Promise<DescribeNotebooksResponse> {
    return this.request("DescribeNotebooks", req, cb)
  }

  /**
   * 删除训练任务
   */
  async DeleteTrainingTask(
    req: DeleteTrainingTaskRequest,
    cb?: (error: string, rep: DeleteTrainingTaskResponse) => void
  ): Promise<DeleteTrainingTaskResponse> {
    return this.request("DeleteTrainingTask", req, cb)
  }

  /**
   * 模型加速之后的模型版本列表
   */
  async DescribeModelAccelerateVersions(
    req: DescribeModelAccelerateVersionsRequest,
    cb?: (error: string, rep: DescribeModelAccelerateVersionsResponse) => void
  ): Promise<DescribeModelAccelerateVersionsResponse> {
    return this.request("DescribeModelAccelerateVersions", req, cb)
  }

  /**
   * 停止模型加速任务
   */
  async StopModelAccelerateTask(
    req: StopModelAccelerateTaskRequest,
    cb?: (error: string, rep: StopModelAccelerateTaskResponse) => void
  ): Promise<StopModelAccelerateTaskResponse> {
    return this.request("StopModelAccelerateTask", req, cb)
  }

  /**
   * 查询平台镜像信息
   */
  async DescribePlatformImages(
    req: DescribePlatformImagesRequest,
    cb?: (error: string, rep: DescribePlatformImagesResponse) => void
  ): Promise<DescribePlatformImagesResponse> {
    return this.request("DescribePlatformImages", req, cb)
  }

  /**
   * 查询资源组节点列表
   */
  async DescribeBillingResourceGroup(
    req: DescribeBillingResourceGroupRequest,
    cb?: (error: string, rep: DescribeBillingResourceGroupResponse) => void
  ): Promise<DescribeBillingResourceGroupResponse> {
    return this.request("DescribeBillingResourceGroup", req, cb)
  }

  /**
   * 查看任务式建模训练任务，Notebook，在线服务和批量预测任务日志下载任务状态API
   */
  async DescribeExport(
    req: DescribeExportRequest,
    cb?: (error: string, rep: DescribeExportResponse) => void
  ): Promise<DescribeExportResponse> {
    return this.request("DescribeExport", req, cb)
  }

  /**
   * Notebook详情
   */
  async DescribeNotebook(
    req: DescribeNotebookRequest,
    cb?: (error: string, rep: DescribeNotebookResponse) => void
  ): Promise<DescribeNotebookResponse> {
    return this.request("DescribeNotebook", req, cb)
  }

  /**
   * 删除模型版本
   */
  async DeleteTrainingModelVersion(
    req: DeleteTrainingModelVersionRequest,
    cb?: (error: string, rep: DeleteTrainingModelVersionResponse) => void
  ): Promise<DeleteTrainingModelVersionResponse> {
    return this.request("DeleteTrainingModelVersion", req, cb)
  }

  /**
   * 查询资源组详情
   */
  async DescribeBillingResourceGroups(
    req: DescribeBillingResourceGroupsRequest,
    cb?: (error: string, rep: DescribeBillingResourceGroupsResponse) => void
  ): Promise<DescribeBillingResourceGroupsResponse> {
    return this.request("DescribeBillingResourceGroups", req, cb)
  }

  /**
     * 已废弃，收敛到统一接口

查询推理镜像模板
     */
  async DescribeInferTemplates(
    req?: DescribeInferTemplatesRequest,
    cb?: (error: string, rep: DescribeInferTemplatesResponse) => void
  ): Promise<DescribeInferTemplatesResponse> {
    return this.request("DescribeInferTemplates", req, cb)
  }

  /**
   * 列举在线推理服务组
   */
  async DescribeModelServiceGroups(
    req: DescribeModelServiceGroupsRequest,
    cb?: (error: string, rep: DescribeModelServiceGroupsResponse) => void
  ): Promise<DescribeModelServiceGroupsResponse> {
    return this.request("DescribeModelServiceGroups", req, cb)
  }

  /**
   * 删除任务式建模训练任务，Notebook，在线服务和批量预测任务日志导出任务API
   */
  async DeleteExport(
    req: DeleteExportRequest,
    cb?: (error: string, rep: DeleteExportResponse) => void
  ): Promise<DeleteExportResponse> {
    return this.request("DeleteExport", req, cb)
  }

  /**
   * 创建任务式建模训练任务，Notebook，在线服务和批量预测任务日志下载任务API
   */
  async CreateExport(
    req: CreateExportRequest,
    cb?: (error: string, rep: CreateExportResponse) => void
  ): Promise<CreateExportResponse> {
    return this.request("CreateExport", req, cb)
  }

  /**
   * 停止Notebook
   */
  async StopNotebook(
    req: StopNotebookRequest,
    cb?: (error: string, rep: StopNotebookResponse) => void
  ): Promise<StopNotebookResponse> {
    return this.request("StopNotebook", req, cb)
  }
}

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
  CreateModelServiceRequest,
  ModelInfo,
  DescribeLogsRequest,
  StopModelAccelerateTaskRequest,
  DeleteTrainingModelVersionResponse,
  BatchTaskDetail,
  StartTrainingTaskRequest,
  DescribeDatasetDetailStructuredResponse,
  ModifyServiceGroupWeightsResponse,
  RestartModelAccelerateTaskRequest,
  DescribeBillingResourceGroupsRequest,
  DescribeTrainingFrameworksResponse,
  DescribeModelServiceGroupRequest,
  TrainingMetric,
  DescribeTrainingModelVersionsRequest,
  SpecUnit,
  CreateDatasetResponse,
  Service,
  HyperParameter,
  ModifyServiceGroupWeightsRequest,
  DescribeTrainingTasksRequest,
  DescribeBatchTaskRequest,
  DescribeDatasetDetailUnstructuredRequest,
  VolumeMount,
  StopBatchTaskResponse,
  ServiceCallInfo,
  CosPathInfo,
  DescribeBillingResourceGroupsResponse,
  SpecPrice,
  DescribeTrainingMetricsRequest,
  DescribeTrainingTaskPodsRequest,
  CreateBatchTaskRequest,
  DescribeLatestTrainingMetricsResponse,
  DescribeDatasetDetailUnstructuredResponse,
  FilterLabelInfo,
  WorkloadStatus,
  CFSConfig,
  APIConfigDetail,
  InferTemplate,
  StopBatchTaskRequest,
  ContainerStatus,
  ModifyModelServiceRequest,
  FrameworkVersion,
  ModifyModelServicePartialConfigResponse,
  DescribeModelAccEngineVersionsResponse,
  DescribeModelServiceCallInfoRequest,
  DataPoint,
  TagFilter,
  CreateTrainingModelRequest,
  SchemaInfo,
  StartCmdInfo,
  DescribeAPIConfigsRequest,
  DescribeModelServiceGroupsResponse,
  DeleteBatchTaskRequest,
  DescribeTrainingModelsResponse,
  DescribeBatchTaskInstancesResponse,
  DescribeModelServicesRequest,
  ModelAccEngineVersion,
  ResourceConfigInfo,
  Spec,
  TextLabelDistributionInfo,
  Option,
  ResourceGroup,
  DescribeBatchTaskInstancesRequest,
  DescribeModelServiceHistoryRequest,
  Tag,
  DescribeDatasetsRequest,
  DeleteTrainingModelResponse,
  DescribeInferTemplatesResponse,
  DescribeBillingSpecsRequest,
  InferGatewayCallInfo,
  DescribeInferTemplatesRequest,
  DeleteModelServiceGroupResponse,
  GpuDetail,
  DescribeTrainingFrameworksRequest,
  DescribeBatchTasksResponse,
  CronScaleJob,
  InferTemplateGroup,
  DescribeModelServiceHotUpdatedResponse,
  DatasetInfo,
  DescribeModelAccelerateTaskResponse,
  DetectionLabelInfo,
  DescribeModelServiceGroupsRequest,
  TextLabelDistributionDetailInfoSecondClass,
  BatchTaskSetItem,
  ImageInfo,
  ServiceInfo,
  DescribeModelServiceRequest,
  CreateTrainingTaskResponse,
  DeleteModelServiceRequest,
  DeleteModelAccelerateTaskRequest,
  CreateTrainingTaskRequest,
  StatefulSetCondition,
  DescribeModelServiceResponse,
  DescribeDatasetsResponse,
  RestartModelAccelerateTaskResponse,
  CreateBatchModelAccTasksRequest,
  DescribeBillingSpecsPriceRequest,
  WeightEntry,
  Instance,
  DescribeBillingSpecsResponse,
  DeleteTrainingTaskResponse,
  TextLabelDistributionDetailInfoFifthClass,
  BatchTaskInstance,
  CreateBatchTaskResponse,
  DeleteModelServiceResponse,
  DatasetGroup,
  DescribeTrainingModelsRequest,
  TrainingDataPoint,
  TextLabelDistributionDetailInfoFourthClass,
  Pod,
  DescribeLatestTrainingMetricsRequest,
  ResourceInfo,
  GroupResource,
  DescribeModelServiceCallInfoResponse,
  DataSetConfig,
  ScheduledAction,
  DeleteModelAccelerateTaskResponse,
  DeleteTrainingTaskRequest,
  DescribeModelServiceHistoryResponse,
  BatchModelAccTask,
  Filter,
  ModifyModelServiceResponse,
  DeleteBatchTaskResponse,
  EngineVersion,
  DescribeBatchTasksRequest,
  CreateDatasetRequest,
  CreateModelServiceResponse,
  ServiceGroup,
  TrainingModelDTO,
  ServiceLimit,
  DescribeModelServiceGroupResponse,
  TextLabelDistributionDetailInfoThirdClass,
  CustomTrainingData,
  RowItem,
  CreateTrainingModelResponse,
  LogIdentity,
  StopModelAccelerateTaskResponse,
  DescribeAPIConfigsResponse,
  DescribeDatasetDetailStructuredRequest,
  DescribeModelAccelerateTaskRequest,
  Container,
  SegmentationInfo,
  ModifyModelServicePartialConfigRequest,
  DescribeModelAccelerateTasksResponse,
  DeleteDatasetResponse,
  HorizontalPodAutoscaler,
  CreateBatchModelAccTasksResponse,
  CustomTrainingPoint,
  ServiceHistory,
  TrainingTaskDetail,
  DescribeTrainingTasksResponse,
  CronInfo,
  FrameworkInfo,
  DescribeLogsResponse,
  CreateOptimizedModelRequest,
  DeleteModelServiceGroupRequest,
  TrainingModelVersionDTO,
  PushTrainingMetricsRequest,
  DescribeTrainingTaskRequest,
  RowValue,
  TrainingTaskSetItem,
  DescribeTrainingModelVersionsResponse,
  ModelInputInfo,
  DeleteDatasetRequest,
  CustomTrainingMetric,
  DataConfig,
  DescribeTrainingModelVersionRequest,
  DescribeModelAccelerateTasksRequest,
  PushTrainingMetricsResponse,
  StopTrainingTaskResponse,
  CreateOptimizedModelResponse,
  HDFSConfig,
  DescribeTrainingMetricsResponse,
  DescribeTrainingTaskPodsResponse,
  ModelAccelerateTask,
  EnvVar,
  OcrLabelInfo,
  DeleteTrainingModelRequest,
  PointInfo,
  DescribeModelServiceHotUpdatedRequest,
  DescribeTrainingTaskResponse,
  DescribeBatchTaskResponse,
  DefaultNginxGatewayCallInfo,
  MetricData,
  DeleteTrainingModelVersionRequest,
  DescribeModelAccEngineVersionsRequest,
  DescribeBillingSpecsPriceResponse,
  DescribeTrainingModelVersionResponse,
  TextLabelDistributionDetailInfoFirstClass,
  DescribeModelServicesResponse,
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
   * 删除跑批任务
   */
  async DeleteBatchTask(
    req: DeleteBatchTaskRequest,
    cb?: (error: string, rep: DeleteBatchTaskResponse) => void
  ): Promise<DeleteBatchTaskResponse> {
    return this.request("DeleteBatchTask", req, cb)
  }

  /**
   * 本接口(DescribeBillingSpecs)用于查询计费项列表
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
   * 本接口(DescribeBillingSpecsPrice)用于查询计费项价格。
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
   * 增量更新在线推理服务的部分配置，不更新的配置项不需要传入
   */
  async ModifyModelServicePartialConfig(
    req: ModifyModelServicePartialConfigRequest,
    cb?: (error: string, rep: ModifyModelServicePartialConfigResponse) => void
  ): Promise<ModifyModelServicePartialConfigResponse> {
    return this.request("ModifyModelServicePartialConfig", req, cb)
  }

  /**
   * 保存优化模型
   */
  async CreateOptimizedModel(
    req: CreateOptimizedModelRequest,
    cb?: (error: string, rep: CreateOptimizedModelResponse) => void
  ): Promise<CreateOptimizedModelResponse> {
    return this.request("CreateOptimizedModel", req, cb)
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
   * 查询单个服务组
   */
  async DescribeModelServiceGroup(
    req: DescribeModelServiceGroupRequest,
    cb?: (error: string, rep: DescribeModelServiceGroupResponse) => void
  ): Promise<DescribeModelServiceGroupResponse> {
    return this.request("DescribeModelServiceGroup", req, cb)
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
   * 训练框架列表
   */
  async DescribeTrainingFrameworks(
    req?: DescribeTrainingFrameworksRequest,
    cb?: (error: string, rep: DescribeTrainingFrameworksResponse) => void
  ): Promise<DescribeTrainingFrameworksResponse> {
    return this.request("DescribeTrainingFrameworks", req, cb)
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
   * 停止跑批任务
   */
  async StopBatchTask(
    req: StopBatchTaskRequest,
    cb?: (error: string, rep: StopBatchTaskResponse) => void
  ): Promise<StopBatchTaskResponse> {
    return this.request("StopBatchTask", req, cb)
  }

  /**
   * 查询非结构化数据集详情
   */
  async DescribeDatasetDetailUnstructured(
    req: DescribeDatasetDetailUnstructuredRequest,
    cb?: (error: string, rep: DescribeDatasetDetailUnstructuredResponse) => void
  ): Promise<DescribeDatasetDetailUnstructuredResponse> {
    return this.request("DescribeDatasetDetailUnstructured", req, cb)
  }

  /**
   * 模型列表
   */
  async DescribeTrainingModels(
    req: DescribeTrainingModelsRequest,
    cb?: (error: string, rep: DescribeTrainingModelsResponse) => void
  ): Promise<DescribeTrainingModelsResponse> {
    return this.request("DescribeTrainingModels", req, cb)
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
   * 查询训练自定义指标
   */
  async DescribeTrainingMetrics(
    req: DescribeTrainingMetricsRequest,
    cb?: (error: string, rep: DescribeTrainingMetricsResponse) => void
  ): Promise<DescribeTrainingMetricsResponse> {
    return this.request("DescribeTrainingMetrics", req, cb)
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
   * 查询跑批实例列表
   */
  async DescribeBatchTaskInstances(
    req: DescribeBatchTaskInstancesRequest,
    cb?: (error: string, rep: DescribeBatchTaskInstancesResponse) => void
  ): Promise<DescribeBatchTaskInstancesResponse> {
    return this.request("DescribeBatchTaskInstances", req, cb)
  }

  /**
   * 查询模型加速引擎版本列表
   */
  async DescribeModelAccEngineVersions(
    req?: DescribeModelAccEngineVersionsRequest,
    cb?: (error: string, rep: DescribeModelAccEngineVersionsResponse) => void
  ): Promise<DescribeModelAccEngineVersionsResponse> {
    return this.request("DescribeModelAccEngineVersions", req, cb)
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
   * 启动模型训练任务
   */
  async StartTrainingTask(
    req: StartTrainingTaskRequest,
    cb?: (error: string, rep: StartTrainingTaskResponse) => void
  ): Promise<StartTrainingTaskResponse> {
    return this.request("StartTrainingTask", req, cb)
  }

  /**
   * 删除模型加速任务
   */
  async DeleteModelAccelerateTask(
    req: DeleteModelAccelerateTaskRequest,
    cb?: (error: string, rep: DeleteModelAccelerateTaskResponse) => void
  ): Promise<DeleteModelAccelerateTaskResponse> {
    return this.request("DeleteModelAccelerateTask", req, cb)
  }

  /**
   * 列举API
   */
  async DescribeAPIConfigs(
    req: DescribeAPIConfigsRequest,
    cb?: (error: string, rep: DescribeAPIConfigsResponse) => void
  ): Promise<DescribeAPIConfigsResponse> {
    return this.request("DescribeAPIConfigs", req, cb)
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
   * 批量预测任务列表信息
   */
  async DescribeBatchTasks(
    req: DescribeBatchTasksRequest,
    cb?: (error: string, rep: DescribeBatchTasksResponse) => void
  ): Promise<DescribeBatchTasksResponse> {
    return this.request("DescribeBatchTasks", req, cb)
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
   * 查询模型加速任务列表
   */
  async DescribeModelAccelerateTasks(
    req: DescribeModelAccelerateTasksRequest,
    cb?: (error: string, rep: DescribeModelAccelerateTasksResponse) => void
  ): Promise<DescribeModelAccelerateTasksResponse> {
    return this.request("DescribeModelAccelerateTasks", req, cb)
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
   * 查询数据集列表
   */
  async DescribeDatasets(
    req: DescribeDatasetsRequest,
    cb?: (error: string, rep: DescribeDatasetsResponse) => void
  ): Promise<DescribeDatasetsResponse> {
    return this.request("DescribeDatasets", req, cb)
  }

  /**
   * 获取训练、推理、Notebook服务的日志
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
   * 查询结构化数据集详情
   */
  async DescribeDatasetDetailStructured(
    req: DescribeDatasetDetailStructuredRequest,
    cb?: (error: string, rep: DescribeDatasetDetailStructuredResponse) => void
  ): Promise<DescribeDatasetDetailStructuredResponse> {
    return this.request("DescribeDatasetDetailStructured", req, cb)
  }

  /**
   * 重启模型加速任务
   */
  async RestartModelAccelerateTask(
    req: RestartModelAccelerateTaskRequest,
    cb?: (error: string, rep: RestartModelAccelerateTaskResponse) => void
  ): Promise<RestartModelAccelerateTaskResponse> {
    return this.request("RestartModelAccelerateTask", req, cb)
  }

  /**
   * 查询多个服务
   */
  async DescribeModelServices(
    req: DescribeModelServicesRequest,
    cb?: (error: string, rep: DescribeModelServicesResponse) => void
  ): Promise<DescribeModelServicesResponse> {
    return this.request("DescribeModelServices", req, cb)
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
   * 训练任务详情
   */
  async DescribeTrainingTask(
    req: DescribeTrainingTaskRequest,
    cb?: (error: string, rep: DescribeTrainingTaskResponse) => void
  ): Promise<DescribeTrainingTaskResponse> {
    return this.request("DescribeTrainingTask", req, cb)
  }

  /**
   * 创建跑批任务
   */
  async CreateBatchTask(
    req: CreateBatchTaskRequest,
    cb?: (error: string, rep: CreateBatchTaskResponse) => void
  ): Promise<CreateBatchTaskResponse> {
    return this.request("CreateBatchTask", req, cb)
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
   * 批量创建模型加速任务
   */
  async CreateBatchModelAccTasks(
    req: CreateBatchModelAccTasksRequest,
    cb?: (error: string, rep: CreateBatchModelAccTasksResponse) => void
  ): Promise<CreateBatchModelAccTasksResponse> {
    return this.request("CreateBatchModelAccTasks", req, cb)
  }

  /**
   * 查询跑批任务
   */
  async DescribeBatchTask(
    req: DescribeBatchTaskRequest,
    cb?: (error: string, rep: DescribeBatchTaskResponse) => void
  ): Promise<DescribeBatchTaskResponse> {
    return this.request("DescribeBatchTask", req, cb)
  }

  /**
   * 查询最近上报的训练自定义指标
   */
  async DescribeLatestTrainingMetrics(
    req: DescribeLatestTrainingMetricsRequest,
    cb?: (error: string, rep: DescribeLatestTrainingMetricsResponse) => void
  ): Promise<DescribeLatestTrainingMetricsResponse> {
    return this.request("DescribeLatestTrainingMetrics", req, cb)
  }

  /**
   * 展示服务的历史版本
   */
  async DescribeModelServiceHistory(
    req: DescribeModelServiceHistoryRequest,
    cb?: (error: string, rep: DescribeModelServiceHistoryResponse) => void
  ): Promise<DescribeModelServiceHistoryResponse> {
    return this.request("DescribeModelServiceHistory", req, cb)
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
   * 查询推理镜像模板
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
   * 停止模型加速任务
   */
  async StopModelAccelerateTask(
    req: StopModelAccelerateTaskRequest,
    cb?: (error: string, rep: StopModelAccelerateTaskResponse) => void
  ): Promise<StopModelAccelerateTaskResponse> {
    return this.request("StopModelAccelerateTask", req, cb)
  }
}

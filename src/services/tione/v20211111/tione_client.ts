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
  DescribeLogsRequest,
  DeleteTrainingModelVersionResponse,
  PointInfo,
  StartTrainingTaskRequest,
  DescribeDatasetDetailStructuredResponse,
  DescribeBillingResourceGroupsRequest,
  DescribeTrainingFrameworksResponse,
  DescribeTrainingModelVersionsRequest,
  SpecUnit,
  CreateDatasetResponse,
  DescribeTrainingTasksRequest,
  DescribeDatasetDetailUnstructuredRequest,
  CosPathInfo,
  DescribeBillingResourceGroupsResponse,
  SpecPrice,
  DescribeTrainingMetricsRequest,
  DescribeTrainingTaskPodsRequest,
  DescribeTrainingModelVersionRequest,
  DescribeLatestTrainingMetricsResponse,
  DescribeDatasetDetailUnstructuredResponse,
  FilterLabelInfo,
  CFSConfig,
  PushTrainingMetricsRequest,
  InferTemplate,
  FrameworkVersion,
  DataPoint,
  CreateTrainingModelRequest,
  DescribeTrainingModelVersionsResponse,
  StartCmdInfo,
  DescribeTrainingModelsResponse,
  ResourceConfigInfo,
  TrainingMetric,
  Tag,
  DescribeDatasetsRequest,
  DeleteTrainingModelResponse,
  DescribeInferTemplatesResponse,
  DescribeInferTemplatesRequest,
  GpuDetail,
  DescribeTrainingFrameworksRequest,
  DetectionLabelInfo,
  InferTemplateGroup,
  DatasetInfo,
  TagFilter,
  ImageInfo,
  CreateTrainingTaskResponse,
  CreateTrainingTaskRequest,
  DescribeDatasetsResponse,
  DescribeBillingSpecsPriceRequest,
  Instance,
  DeleteTrainingModelRequest,
  DeleteTrainingTaskResponse,
  DatasetGroup,
  TrainingDataPoint,
  DescribeLatestTrainingMetricsRequest,
  ResourceInfo,
  GroupResource,
  DataSetConfig,
  DeleteTrainingTaskRequest,
  Filter,
  CreateDatasetRequest,
  TrainingModelDTO,
  CustomTrainingData,
  RowItem,
  CreateTrainingModelResponse,
  LogIdentity,
  DescribeDatasetDetailStructuredRequest,
  SegmentationInfo,
  DeleteDatasetResponse,
  CustomTrainingPoint,
  TrainingTaskDetail,
  DescribeTrainingTasksResponse,
  FrameworkInfo,
  DescribeLogsResponse,
  TrainingModelVersionDTO,
  DescribeTrainingTaskRequest,
  RowValue,
  TrainingTaskSetItem,
  SchemaInfo,
  DeleteDatasetRequest,
  CustomTrainingMetric,
  DataConfig,
  PushTrainingMetricsResponse,
  StopTrainingTaskResponse,
  HDFSConfig,
  DescribeTrainingMetricsResponse,
  DescribeTrainingTaskPodsResponse,
  OcrLabelInfo,
  DescribeTrainingModelsRequest,
  ResourceGroup,
  DescribeTrainingTaskResponse,
  MetricData,
  DeleteTrainingModelVersionRequest,
  DescribeBillingSpecsPriceResponse,
  DescribeTrainingModelVersionResponse,
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
   * 删除数据集
   */
  async DeleteDataset(
    req: DeleteDatasetRequest,
    cb?: (error: string, rep: DeleteDatasetResponse) => void
  ): Promise<DeleteDatasetResponse> {
    return this.request("DeleteDataset", req, cb)
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
   * 训练任务列表
   */
  async DescribeTrainingTasks(
    req: DescribeTrainingTasksRequest,
    cb?: (error: string, rep: DescribeTrainingTasksResponse) => void
  ): Promise<DescribeTrainingTasksResponse> {
    return this.request("DescribeTrainingTasks", req, cb)
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
   * 导入模型
   */
  async CreateTrainingModel(
    req: CreateTrainingModelRequest,
    cb?: (error: string, rep: CreateTrainingModelResponse) => void
  ): Promise<CreateTrainingModelResponse> {
    return this.request("CreateTrainingModel", req, cb)
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
   * 启动模型训练任务
   */
  async StartTrainingTask(
    req: StartTrainingTaskRequest,
    cb?: (error: string, rep: StartTrainingTaskResponse) => void
  ): Promise<StartTrainingTaskResponse> {
    return this.request("StartTrainingTask", req, cb)
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
   * 查询结构化数据集详情
   */
  async DescribeDatasetDetailStructured(
    req: DescribeDatasetDetailStructuredRequest,
    cb?: (error: string, rep: DescribeDatasetDetailStructuredResponse) => void
  ): Promise<DescribeDatasetDetailStructuredResponse> {
    return this.request("DescribeDatasetDetailStructured", req, cb)
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
   * 查询数据集列表
   */
  async DescribeDatasets(
    req: DescribeDatasetsRequest,
    cb?: (error: string, rep: DescribeDatasetsResponse) => void
  ): Promise<DescribeDatasetsResponse> {
    return this.request("DescribeDatasets", req, cb)
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
   * 删除训练任务
   */
  async DeleteTrainingTask(
    req: DeleteTrainingTaskRequest,
    cb?: (error: string, rep: DeleteTrainingTaskResponse) => void
  ): Promise<DeleteTrainingTaskResponse> {
    return this.request("DeleteTrainingTask", req, cb)
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
}

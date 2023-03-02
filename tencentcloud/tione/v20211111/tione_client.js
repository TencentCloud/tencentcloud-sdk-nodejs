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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const CreateModelServiceRequest = models.CreateModelServiceRequest;
const ModelInfo = models.ModelInfo;
const DescribeLogsRequest = models.DescribeLogsRequest;
const StopModelAccelerateTaskRequest = models.StopModelAccelerateTaskRequest;
const DeleteTrainingModelVersionResponse = models.DeleteTrainingModelVersionResponse;
const BatchTaskDetail = models.BatchTaskDetail;
const StartTrainingTaskRequest = models.StartTrainingTaskRequest;
const DescribeDatasetDetailStructuredResponse = models.DescribeDatasetDetailStructuredResponse;
const ModifyServiceGroupWeightsResponse = models.ModifyServiceGroupWeightsResponse;
const RestartModelAccelerateTaskRequest = models.RestartModelAccelerateTaskRequest;
const DescribeBillingResourceGroupsRequest = models.DescribeBillingResourceGroupsRequest;
const DescribeTrainingFrameworksResponse = models.DescribeTrainingFrameworksResponse;
const DescribeModelServiceGroupRequest = models.DescribeModelServiceGroupRequest;
const TrainingMetric = models.TrainingMetric;
const DescribeTrainingModelVersionsRequest = models.DescribeTrainingModelVersionsRequest;
const SpecUnit = models.SpecUnit;
const CreateDatasetResponse = models.CreateDatasetResponse;
const Service = models.Service;
const HyperParameter = models.HyperParameter;
const ModifyServiceGroupWeightsRequest = models.ModifyServiceGroupWeightsRequest;
const DescribeTrainingTasksRequest = models.DescribeTrainingTasksRequest;
const DescribeBatchTaskRequest = models.DescribeBatchTaskRequest;
const DescribeDatasetDetailUnstructuredRequest = models.DescribeDatasetDetailUnstructuredRequest;
const VolumeMount = models.VolumeMount;
const StopBatchTaskResponse = models.StopBatchTaskResponse;
const ServiceCallInfo = models.ServiceCallInfo;
const CosPathInfo = models.CosPathInfo;
const DescribeBillingResourceGroupsResponse = models.DescribeBillingResourceGroupsResponse;
const SpecPrice = models.SpecPrice;
const DescribeTrainingMetricsRequest = models.DescribeTrainingMetricsRequest;
const DescribeTrainingTaskPodsRequest = models.DescribeTrainingTaskPodsRequest;
const CreateBatchTaskRequest = models.CreateBatchTaskRequest;
const DescribeLatestTrainingMetricsResponse = models.DescribeLatestTrainingMetricsResponse;
const DescribeDatasetDetailUnstructuredResponse = models.DescribeDatasetDetailUnstructuredResponse;
const FilterLabelInfo = models.FilterLabelInfo;
const WorkloadStatus = models.WorkloadStatus;
const CFSConfig = models.CFSConfig;
const APIConfigDetail = models.APIConfigDetail;
const InferTemplate = models.InferTemplate;
const StopBatchTaskRequest = models.StopBatchTaskRequest;
const ContainerStatus = models.ContainerStatus;
const ModifyModelServiceRequest = models.ModifyModelServiceRequest;
const FrameworkVersion = models.FrameworkVersion;
const ModifyModelServicePartialConfigResponse = models.ModifyModelServicePartialConfigResponse;
const DescribeModelAccEngineVersionsResponse = models.DescribeModelAccEngineVersionsResponse;
const DescribeModelServiceCallInfoRequest = models.DescribeModelServiceCallInfoRequest;
const DataPoint = models.DataPoint;
const TagFilter = models.TagFilter;
const CreateTrainingModelRequest = models.CreateTrainingModelRequest;
const SchemaInfo = models.SchemaInfo;
const StartCmdInfo = models.StartCmdInfo;
const DescribeAPIConfigsRequest = models.DescribeAPIConfigsRequest;
const DescribeModelServiceGroupsResponse = models.DescribeModelServiceGroupsResponse;
const DeleteBatchTaskRequest = models.DeleteBatchTaskRequest;
const DescribeTrainingModelsResponse = models.DescribeTrainingModelsResponse;
const DescribeBatchTaskInstancesResponse = models.DescribeBatchTaskInstancesResponse;
const DescribeModelServicesRequest = models.DescribeModelServicesRequest;
const ModelAccEngineVersion = models.ModelAccEngineVersion;
const ResourceConfigInfo = models.ResourceConfigInfo;
const Spec = models.Spec;
const TextLabelDistributionInfo = models.TextLabelDistributionInfo;
const Option = models.Option;
const ResourceGroup = models.ResourceGroup;
const DescribeBatchTaskInstancesRequest = models.DescribeBatchTaskInstancesRequest;
const DescribeModelServiceHistoryRequest = models.DescribeModelServiceHistoryRequest;
const Tag = models.Tag;
const DescribeDatasetsRequest = models.DescribeDatasetsRequest;
const DeleteTrainingModelResponse = models.DeleteTrainingModelResponse;
const DescribeInferTemplatesResponse = models.DescribeInferTemplatesResponse;
const DescribeBillingSpecsRequest = models.DescribeBillingSpecsRequest;
const InferGatewayCallInfo = models.InferGatewayCallInfo;
const DescribeInferTemplatesRequest = models.DescribeInferTemplatesRequest;
const DeleteModelServiceGroupResponse = models.DeleteModelServiceGroupResponse;
const GpuDetail = models.GpuDetail;
const DescribeTrainingFrameworksRequest = models.DescribeTrainingFrameworksRequest;
const DescribeBatchTasksResponse = models.DescribeBatchTasksResponse;
const CronScaleJob = models.CronScaleJob;
const InferTemplateGroup = models.InferTemplateGroup;
const DescribeModelServiceHotUpdatedResponse = models.DescribeModelServiceHotUpdatedResponse;
const DatasetInfo = models.DatasetInfo;
const DescribeModelAccelerateTaskResponse = models.DescribeModelAccelerateTaskResponse;
const DetectionLabelInfo = models.DetectionLabelInfo;
const DescribeModelServiceGroupsRequest = models.DescribeModelServiceGroupsRequest;
const TextLabelDistributionDetailInfoSecondClass = models.TextLabelDistributionDetailInfoSecondClass;
const BatchTaskSetItem = models.BatchTaskSetItem;
const ImageInfo = models.ImageInfo;
const ServiceInfo = models.ServiceInfo;
const DescribeModelServiceRequest = models.DescribeModelServiceRequest;
const CreateTrainingTaskResponse = models.CreateTrainingTaskResponse;
const DeleteModelServiceRequest = models.DeleteModelServiceRequest;
const DeleteModelAccelerateTaskRequest = models.DeleteModelAccelerateTaskRequest;
const CreateTrainingTaskRequest = models.CreateTrainingTaskRequest;
const StatefulSetCondition = models.StatefulSetCondition;
const DescribeModelServiceResponse = models.DescribeModelServiceResponse;
const DescribeDatasetsResponse = models.DescribeDatasetsResponse;
const RestartModelAccelerateTaskResponse = models.RestartModelAccelerateTaskResponse;
const CreateBatchModelAccTasksRequest = models.CreateBatchModelAccTasksRequest;
const DescribeBillingSpecsPriceRequest = models.DescribeBillingSpecsPriceRequest;
const WeightEntry = models.WeightEntry;
const Instance = models.Instance;
const DescribeBillingSpecsResponse = models.DescribeBillingSpecsResponse;
const DeleteTrainingTaskResponse = models.DeleteTrainingTaskResponse;
const TextLabelDistributionDetailInfoFifthClass = models.TextLabelDistributionDetailInfoFifthClass;
const BatchTaskInstance = models.BatchTaskInstance;
const CreateBatchTaskResponse = models.CreateBatchTaskResponse;
const DeleteModelServiceResponse = models.DeleteModelServiceResponse;
const DatasetGroup = models.DatasetGroup;
const DescribeTrainingModelsRequest = models.DescribeTrainingModelsRequest;
const TrainingDataPoint = models.TrainingDataPoint;
const TextLabelDistributionDetailInfoFourthClass = models.TextLabelDistributionDetailInfoFourthClass;
const Pod = models.Pod;
const DescribeLatestTrainingMetricsRequest = models.DescribeLatestTrainingMetricsRequest;
const ResourceInfo = models.ResourceInfo;
const GroupResource = models.GroupResource;
const DescribeModelServiceCallInfoResponse = models.DescribeModelServiceCallInfoResponse;
const DataSetConfig = models.DataSetConfig;
const ScheduledAction = models.ScheduledAction;
const DeleteModelAccelerateTaskResponse = models.DeleteModelAccelerateTaskResponse;
const DeleteTrainingTaskRequest = models.DeleteTrainingTaskRequest;
const DescribeModelServiceHistoryResponse = models.DescribeModelServiceHistoryResponse;
const BatchModelAccTask = models.BatchModelAccTask;
const Filter = models.Filter;
const ModifyModelServiceResponse = models.ModifyModelServiceResponse;
const DeleteBatchTaskResponse = models.DeleteBatchTaskResponse;
const EngineVersion = models.EngineVersion;
const DescribeBatchTasksRequest = models.DescribeBatchTasksRequest;
const CreateDatasetRequest = models.CreateDatasetRequest;
const CreateModelServiceResponse = models.CreateModelServiceResponse;
const ServiceGroup = models.ServiceGroup;
const TrainingModelDTO = models.TrainingModelDTO;
const ServiceLimit = models.ServiceLimit;
const DescribeModelServiceGroupResponse = models.DescribeModelServiceGroupResponse;
const TextLabelDistributionDetailInfoThirdClass = models.TextLabelDistributionDetailInfoThirdClass;
const CustomTrainingData = models.CustomTrainingData;
const RowItem = models.RowItem;
const CreateTrainingModelResponse = models.CreateTrainingModelResponse;
const LogIdentity = models.LogIdentity;
const StopModelAccelerateTaskResponse = models.StopModelAccelerateTaskResponse;
const DescribeAPIConfigsResponse = models.DescribeAPIConfigsResponse;
const DescribeDatasetDetailStructuredRequest = models.DescribeDatasetDetailStructuredRequest;
const DescribeModelAccelerateTaskRequest = models.DescribeModelAccelerateTaskRequest;
const Container = models.Container;
const SegmentationInfo = models.SegmentationInfo;
const ModifyModelServicePartialConfigRequest = models.ModifyModelServicePartialConfigRequest;
const DescribeModelAccelerateTasksResponse = models.DescribeModelAccelerateTasksResponse;
const DeleteDatasetResponse = models.DeleteDatasetResponse;
const HorizontalPodAutoscaler = models.HorizontalPodAutoscaler;
const CreateBatchModelAccTasksResponse = models.CreateBatchModelAccTasksResponse;
const CustomTrainingPoint = models.CustomTrainingPoint;
const ServiceHistory = models.ServiceHistory;
const TrainingTaskDetail = models.TrainingTaskDetail;
const DescribeTrainingTasksResponse = models.DescribeTrainingTasksResponse;
const CronInfo = models.CronInfo;
const FrameworkInfo = models.FrameworkInfo;
const DescribeLogsResponse = models.DescribeLogsResponse;
const CreateOptimizedModelRequest = models.CreateOptimizedModelRequest;
const DeleteModelServiceGroupRequest = models.DeleteModelServiceGroupRequest;
const TrainingModelVersionDTO = models.TrainingModelVersionDTO;
const PushTrainingMetricsRequest = models.PushTrainingMetricsRequest;
const DescribeTrainingTaskRequest = models.DescribeTrainingTaskRequest;
const RowValue = models.RowValue;
const TrainingTaskSetItem = models.TrainingTaskSetItem;
const DescribeTrainingModelVersionsResponse = models.DescribeTrainingModelVersionsResponse;
const ModelInputInfo = models.ModelInputInfo;
const DeleteDatasetRequest = models.DeleteDatasetRequest;
const CustomTrainingMetric = models.CustomTrainingMetric;
const DataConfig = models.DataConfig;
const DescribeTrainingModelVersionRequest = models.DescribeTrainingModelVersionRequest;
const DescribeModelAccelerateTasksRequest = models.DescribeModelAccelerateTasksRequest;
const PushTrainingMetricsResponse = models.PushTrainingMetricsResponse;
const StopTrainingTaskResponse = models.StopTrainingTaskResponse;
const CreateOptimizedModelResponse = models.CreateOptimizedModelResponse;
const HDFSConfig = models.HDFSConfig;
const DescribeTrainingMetricsResponse = models.DescribeTrainingMetricsResponse;
const DescribeTrainingTaskPodsResponse = models.DescribeTrainingTaskPodsResponse;
const ModelAccelerateTask = models.ModelAccelerateTask;
const EnvVar = models.EnvVar;
const OcrLabelInfo = models.OcrLabelInfo;
const DeleteTrainingModelRequest = models.DeleteTrainingModelRequest;
const PointInfo = models.PointInfo;
const DescribeModelServiceHotUpdatedRequest = models.DescribeModelServiceHotUpdatedRequest;
const DescribeTrainingTaskResponse = models.DescribeTrainingTaskResponse;
const DescribeBatchTaskResponse = models.DescribeBatchTaskResponse;
const DefaultNginxGatewayCallInfo = models.DefaultNginxGatewayCallInfo;
const MetricData = models.MetricData;
const DeleteTrainingModelVersionRequest = models.DeleteTrainingModelVersionRequest;
const DescribeModelAccEngineVersionsRequest = models.DescribeModelAccEngineVersionsRequest;
const DescribeBillingSpecsPriceResponse = models.DescribeBillingSpecsPriceResponse;
const DescribeTrainingModelVersionResponse = models.DescribeTrainingModelVersionResponse;
const TextLabelDistributionDetailInfoFirstClass = models.TextLabelDistributionDetailInfoFirstClass;
const DescribeModelServicesResponse = models.DescribeModelServicesResponse;
const StopTrainingTaskRequest = models.StopTrainingTaskRequest;
const LogConfig = models.LogConfig;
const StartTrainingTaskResponse = models.StartTrainingTaskResponse;


/**
 * tione client
 * @class
 */
class TioneClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tione.tencentcloudapi.com", "2021-11-11", credential, region, profile);
    }
    
    /**
     * 查询模型版本
     * @param {DescribeTrainingModelVersionRequest} req
     * @param {function(string, DescribeTrainingModelVersionResponse):void} cb
     * @public
     */
    DescribeTrainingModelVersion(req, cb) {
        let resp = new DescribeTrainingModelVersionResponse();
        this.request("DescribeTrainingModelVersion", req, resp, cb);
    }

    /**
     * 删除跑批任务
     * @param {DeleteBatchTaskRequest} req
     * @param {function(string, DeleteBatchTaskResponse):void} cb
     * @public
     */
    DeleteBatchTask(req, cb) {
        let resp = new DeleteBatchTaskResponse();
        this.request("DeleteBatchTask", req, resp, cb);
    }

    /**
     * 本接口(DescribeBillingSpecs)用于查询计费项列表
     * @param {DescribeBillingSpecsRequest} req
     * @param {function(string, DescribeBillingSpecsResponse):void} cb
     * @public
     */
    DescribeBillingSpecs(req, cb) {
        let resp = new DescribeBillingSpecsResponse();
        this.request("DescribeBillingSpecs", req, resp, cb);
    }

    /**
     * 导入模型
     * @param {CreateTrainingModelRequest} req
     * @param {function(string, CreateTrainingModelResponse):void} cb
     * @public
     */
    CreateTrainingModel(req, cb) {
        let resp = new CreateTrainingModelResponse();
        this.request("CreateTrainingModel", req, resp, cb);
    }

    /**
     * 本接口(DescribeBillingSpecsPrice)用于查询计费项价格。
     * @param {DescribeBillingSpecsPriceRequest} req
     * @param {function(string, DescribeBillingSpecsPriceResponse):void} cb
     * @public
     */
    DescribeBillingSpecsPrice(req, cb) {
        let resp = new DescribeBillingSpecsPriceResponse();
        this.request("DescribeBillingSpecsPrice", req, resp, cb);
    }

    /**
     * 展示服务的调用信息
     * @param {DescribeModelServiceCallInfoRequest} req
     * @param {function(string, DescribeModelServiceCallInfoResponse):void} cb
     * @public
     */
    DescribeModelServiceCallInfo(req, cb) {
        let resp = new DescribeModelServiceCallInfoResponse();
        this.request("DescribeModelServiceCallInfo", req, resp, cb);
    }

    /**
     * 增量更新在线推理服务的部分配置，不更新的配置项不需要传入
     * @param {ModifyModelServicePartialConfigRequest} req
     * @param {function(string, ModifyModelServicePartialConfigResponse):void} cb
     * @public
     */
    ModifyModelServicePartialConfig(req, cb) {
        let resp = new ModifyModelServicePartialConfigResponse();
        this.request("ModifyModelServicePartialConfig", req, resp, cb);
    }

    /**
     * 保存优化模型
     * @param {CreateOptimizedModelRequest} req
     * @param {function(string, CreateOptimizedModelResponse):void} cb
     * @public
     */
    CreateOptimizedModel(req, cb) {
        let resp = new CreateOptimizedModelResponse();
        this.request("CreateOptimizedModel", req, resp, cb);
    }

    /**
     * 训练任务列表
     * @param {DescribeTrainingTasksRequest} req
     * @param {function(string, DescribeTrainingTasksResponse):void} cb
     * @public
     */
    DescribeTrainingTasks(req, cb) {
        let resp = new DescribeTrainingTasksResponse();
        this.request("DescribeTrainingTasks", req, resp, cb);
    }

    /**
     * 查询单个服务组
     * @param {DescribeModelServiceGroupRequest} req
     * @param {function(string, DescribeModelServiceGroupResponse):void} cb
     * @public
     */
    DescribeModelServiceGroup(req, cb) {
        let resp = new DescribeModelServiceGroupResponse();
        this.request("DescribeModelServiceGroup", req, resp, cb);
    }

    /**
     * 查询单个服务
     * @param {DescribeModelServiceRequest} req
     * @param {function(string, DescribeModelServiceResponse):void} cb
     * @public
     */
    DescribeModelService(req, cb) {
        let resp = new DescribeModelServiceResponse();
        this.request("DescribeModelService", req, resp, cb);
    }

    /**
     * 训练框架列表
     * @param {DescribeTrainingFrameworksRequest} req
     * @param {function(string, DescribeTrainingFrameworksResponse):void} cb
     * @public
     */
    DescribeTrainingFrameworks(req, cb) {
        let resp = new DescribeTrainingFrameworksResponse();
        this.request("DescribeTrainingFrameworks", req, resp, cb);
    }

    /**
     * 删除数据集
     * @param {DeleteDatasetRequest} req
     * @param {function(string, DeleteDatasetResponse):void} cb
     * @public
     */
    DeleteDataset(req, cb) {
        let resp = new DeleteDatasetResponse();
        this.request("DeleteDataset", req, resp, cb);
    }

    /**
     * 创建模型训练任务
     * @param {CreateTrainingTaskRequest} req
     * @param {function(string, CreateTrainingTaskResponse):void} cb
     * @public
     */
    CreateTrainingTask(req, cb) {
        let resp = new CreateTrainingTaskResponse();
        this.request("CreateTrainingTask", req, resp, cb);
    }

    /**
     * 停止跑批任务
     * @param {StopBatchTaskRequest} req
     * @param {function(string, StopBatchTaskResponse):void} cb
     * @public
     */
    StopBatchTask(req, cb) {
        let resp = new StopBatchTaskResponse();
        this.request("StopBatchTask", req, resp, cb);
    }

    /**
     * 查询非结构化数据集详情
     * @param {DescribeDatasetDetailUnstructuredRequest} req
     * @param {function(string, DescribeDatasetDetailUnstructuredResponse):void} cb
     * @public
     */
    DescribeDatasetDetailUnstructured(req, cb) {
        let resp = new DescribeDatasetDetailUnstructuredResponse();
        this.request("DescribeDatasetDetailUnstructured", req, resp, cb);
    }

    /**
     * 模型列表
     * @param {DescribeTrainingModelsRequest} req
     * @param {function(string, DescribeTrainingModelsResponse):void} cb
     * @public
     */
    DescribeTrainingModels(req, cb) {
        let resp = new DescribeTrainingModelsResponse();
        this.request("DescribeTrainingModels", req, resp, cb);
    }

    /**
     * 训练任务pod列表
     * @param {DescribeTrainingTaskPodsRequest} req
     * @param {function(string, DescribeTrainingTaskPodsResponse):void} cb
     * @public
     */
    DescribeTrainingTaskPods(req, cb) {
        let resp = new DescribeTrainingTaskPodsResponse();
        this.request("DescribeTrainingTaskPods", req, resp, cb);
    }

    /**
     * 用于查询模型服务能否开启热更新
     * @param {DescribeModelServiceHotUpdatedRequest} req
     * @param {function(string, DescribeModelServiceHotUpdatedResponse):void} cb
     * @public
     */
    DescribeModelServiceHotUpdated(req, cb) {
        let resp = new DescribeModelServiceHotUpdatedResponse();
        this.request("DescribeModelServiceHotUpdated", req, resp, cb);
    }

    /**
     * 查询模型优化任务详情
     * @param {DescribeModelAccelerateTaskRequest} req
     * @param {function(string, DescribeModelAccelerateTaskResponse):void} cb
     * @public
     */
    DescribeModelAccelerateTask(req, cb) {
        let resp = new DescribeModelAccelerateTaskResponse();
        this.request("DescribeModelAccelerateTask", req, resp, cb);
    }

    /**
     * 查询训练自定义指标
     * @param {DescribeTrainingMetricsRequest} req
     * @param {function(string, DescribeTrainingMetricsResponse):void} cb
     * @public
     */
    DescribeTrainingMetrics(req, cb) {
        let resp = new DescribeTrainingMetricsResponse();
        this.request("DescribeTrainingMetrics", req, resp, cb);
    }

    /**
     * 删除模型
     * @param {DeleteTrainingModelRequest} req
     * @param {function(string, DeleteTrainingModelResponse):void} cb
     * @public
     */
    DeleteTrainingModel(req, cb) {
        let resp = new DeleteTrainingModelResponse();
        this.request("DeleteTrainingModel", req, resp, cb);
    }

    /**
     * 更新推理服务组流量分配
     * @param {ModifyServiceGroupWeightsRequest} req
     * @param {function(string, ModifyServiceGroupWeightsResponse):void} cb
     * @public
     */
    ModifyServiceGroupWeights(req, cb) {
        let resp = new ModifyServiceGroupWeightsResponse();
        this.request("ModifyServiceGroupWeights", req, resp, cb);
    }

    /**
     * 创建数据集
     * @param {CreateDatasetRequest} req
     * @param {function(string, CreateDatasetResponse):void} cb
     * @public
     */
    CreateDataset(req, cb) {
        let resp = new CreateDatasetResponse();
        this.request("CreateDataset", req, resp, cb);
    }

    /**
     * 查询跑批实例列表
     * @param {DescribeBatchTaskInstancesRequest} req
     * @param {function(string, DescribeBatchTaskInstancesResponse):void} cb
     * @public
     */
    DescribeBatchTaskInstances(req, cb) {
        let resp = new DescribeBatchTaskInstancesResponse();
        this.request("DescribeBatchTaskInstances", req, resp, cb);
    }

    /**
     * 查询模型加速引擎版本列表
     * @param {DescribeModelAccEngineVersionsRequest} req
     * @param {function(string, DescribeModelAccEngineVersionsResponse):void} cb
     * @public
     */
    DescribeModelAccEngineVersions(req, cb) {
        let resp = new DescribeModelAccEngineVersionsResponse();
        this.request("DescribeModelAccEngineVersions", req, resp, cb);
    }

    /**
     * 停止模型训练任务
     * @param {StopTrainingTaskRequest} req
     * @param {function(string, StopTrainingTaskResponse):void} cb
     * @public
     */
    StopTrainingTask(req, cb) {
        let resp = new StopTrainingTaskResponse();
        this.request("StopTrainingTask", req, resp, cb);
    }

    /**
     * 启动模型训练任务
     * @param {StartTrainingTaskRequest} req
     * @param {function(string, StartTrainingTaskResponse):void} cb
     * @public
     */
    StartTrainingTask(req, cb) {
        let resp = new StartTrainingTaskResponse();
        this.request("StartTrainingTask", req, resp, cb);
    }

    /**
     * 删除模型加速任务
     * @param {DeleteModelAccelerateTaskRequest} req
     * @param {function(string, DeleteModelAccelerateTaskResponse):void} cb
     * @public
     */
    DeleteModelAccelerateTask(req, cb) {
        let resp = new DeleteModelAccelerateTaskResponse();
        this.request("DeleteModelAccelerateTask", req, resp, cb);
    }

    /**
     * 列举API
     * @param {DescribeAPIConfigsRequest} req
     * @param {function(string, DescribeAPIConfigsResponse):void} cb
     * @public
     */
    DescribeAPIConfigs(req, cb) {
        let resp = new DescribeAPIConfigsResponse();
        this.request("DescribeAPIConfigs", req, resp, cb);
    }

    /**
     * 根据服务组id删除服务组下所有模型服务
     * @param {DeleteModelServiceGroupRequest} req
     * @param {function(string, DeleteModelServiceGroupResponse):void} cb
     * @public
     */
    DeleteModelServiceGroup(req, cb) {
        let resp = new DeleteModelServiceGroupResponse();
        this.request("DeleteModelServiceGroup", req, resp, cb);
    }

    /**
     * 上报训练自定义指标
     * @param {PushTrainingMetricsRequest} req
     * @param {function(string, PushTrainingMetricsResponse):void} cb
     * @public
     */
    PushTrainingMetrics(req, cb) {
        let resp = new PushTrainingMetricsResponse();
        this.request("PushTrainingMetrics", req, resp, cb);
    }

    /**
     * 批量预测任务列表信息
     * @param {DescribeBatchTasksRequest} req
     * @param {function(string, DescribeBatchTasksResponse):void} cb
     * @public
     */
    DescribeBatchTasks(req, cb) {
        let resp = new DescribeBatchTasksResponse();
        this.request("DescribeBatchTasks", req, resp, cb);
    }

    /**
     * 模型版本列表
     * @param {DescribeTrainingModelVersionsRequest} req
     * @param {function(string, DescribeTrainingModelVersionsResponse):void} cb
     * @public
     */
    DescribeTrainingModelVersions(req, cb) {
        let resp = new DescribeTrainingModelVersionsResponse();
        this.request("DescribeTrainingModelVersions", req, resp, cb);
    }

    /**
     * 查询模型加速任务列表
     * @param {DescribeModelAccelerateTasksRequest} req
     * @param {function(string, DescribeModelAccelerateTasksResponse):void} cb
     * @public
     */
    DescribeModelAccelerateTasks(req, cb) {
        let resp = new DescribeModelAccelerateTasksResponse();
        this.request("DescribeModelAccelerateTasks", req, resp, cb);
    }

    /**
     * 用于创建、发布一个新的模型服务
     * @param {CreateModelServiceRequest} req
     * @param {function(string, CreateModelServiceResponse):void} cb
     * @public
     */
    CreateModelService(req, cb) {
        let resp = new CreateModelServiceResponse();
        this.request("CreateModelService", req, resp, cb);
    }

    /**
     * 查询数据集列表
     * @param {DescribeDatasetsRequest} req
     * @param {function(string, DescribeDatasetsResponse):void} cb
     * @public
     */
    DescribeDatasets(req, cb) {
        let resp = new DescribeDatasetsResponse();
        this.request("DescribeDatasets", req, resp, cb);
    }

    /**
     * 获取训练、推理、Notebook服务的日志
     * @param {DescribeLogsRequest} req
     * @param {function(string, DescribeLogsResponse):void} cb
     * @public
     */
    DescribeLogs(req, cb) {
        let resp = new DescribeLogsResponse();
        this.request("DescribeLogs", req, resp, cb);
    }

    /**
     * 根据服务id删除模型服务
     * @param {DeleteModelServiceRequest} req
     * @param {function(string, DeleteModelServiceResponse):void} cb
     * @public
     */
    DeleteModelService(req, cb) {
        let resp = new DeleteModelServiceResponse();
        this.request("DeleteModelService", req, resp, cb);
    }

    /**
     * 查询结构化数据集详情
     * @param {DescribeDatasetDetailStructuredRequest} req
     * @param {function(string, DescribeDatasetDetailStructuredResponse):void} cb
     * @public
     */
    DescribeDatasetDetailStructured(req, cb) {
        let resp = new DescribeDatasetDetailStructuredResponse();
        this.request("DescribeDatasetDetailStructured", req, resp, cb);
    }

    /**
     * 重启模型加速任务
     * @param {RestartModelAccelerateTaskRequest} req
     * @param {function(string, RestartModelAccelerateTaskResponse):void} cb
     * @public
     */
    RestartModelAccelerateTask(req, cb) {
        let resp = new RestartModelAccelerateTaskResponse();
        this.request("RestartModelAccelerateTask", req, resp, cb);
    }

    /**
     * 查询多个服务
     * @param {DescribeModelServicesRequest} req
     * @param {function(string, DescribeModelServicesResponse):void} cb
     * @public
     */
    DescribeModelServices(req, cb) {
        let resp = new DescribeModelServicesResponse();
        this.request("DescribeModelServices", req, resp, cb);
    }

    /**
     * 用于更新模型服务
     * @param {ModifyModelServiceRequest} req
     * @param {function(string, ModifyModelServiceResponse):void} cb
     * @public
     */
    ModifyModelService(req, cb) {
        let resp = new ModifyModelServiceResponse();
        this.request("ModifyModelService", req, resp, cb);
    }

    /**
     * 训练任务详情
     * @param {DescribeTrainingTaskRequest} req
     * @param {function(string, DescribeTrainingTaskResponse):void} cb
     * @public
     */
    DescribeTrainingTask(req, cb) {
        let resp = new DescribeTrainingTaskResponse();
        this.request("DescribeTrainingTask", req, resp, cb);
    }

    /**
     * 创建跑批任务
     * @param {CreateBatchTaskRequest} req
     * @param {function(string, CreateBatchTaskResponse):void} cb
     * @public
     */
    CreateBatchTask(req, cb) {
        let resp = new CreateBatchTaskResponse();
        this.request("CreateBatchTask", req, resp, cb);
    }

    /**
     * 删除训练任务
     * @param {DeleteTrainingTaskRequest} req
     * @param {function(string, DeleteTrainingTaskResponse):void} cb
     * @public
     */
    DeleteTrainingTask(req, cb) {
        let resp = new DeleteTrainingTaskResponse();
        this.request("DeleteTrainingTask", req, resp, cb);
    }

    /**
     * 批量创建模型加速任务
     * @param {CreateBatchModelAccTasksRequest} req
     * @param {function(string, CreateBatchModelAccTasksResponse):void} cb
     * @public
     */
    CreateBatchModelAccTasks(req, cb) {
        let resp = new CreateBatchModelAccTasksResponse();
        this.request("CreateBatchModelAccTasks", req, resp, cb);
    }

    /**
     * 查询跑批任务
     * @param {DescribeBatchTaskRequest} req
     * @param {function(string, DescribeBatchTaskResponse):void} cb
     * @public
     */
    DescribeBatchTask(req, cb) {
        let resp = new DescribeBatchTaskResponse();
        this.request("DescribeBatchTask", req, resp, cb);
    }

    /**
     * 查询最近上报的训练自定义指标
     * @param {DescribeLatestTrainingMetricsRequest} req
     * @param {function(string, DescribeLatestTrainingMetricsResponse):void} cb
     * @public
     */
    DescribeLatestTrainingMetrics(req, cb) {
        let resp = new DescribeLatestTrainingMetricsResponse();
        this.request("DescribeLatestTrainingMetrics", req, resp, cb);
    }

    /**
     * 展示服务的历史版本
     * @param {DescribeModelServiceHistoryRequest} req
     * @param {function(string, DescribeModelServiceHistoryResponse):void} cb
     * @public
     */
    DescribeModelServiceHistory(req, cb) {
        let resp = new DescribeModelServiceHistoryResponse();
        this.request("DescribeModelServiceHistory", req, resp, cb);
    }

    /**
     * 删除模型版本
     * @param {DeleteTrainingModelVersionRequest} req
     * @param {function(string, DeleteTrainingModelVersionResponse):void} cb
     * @public
     */
    DeleteTrainingModelVersion(req, cb) {
        let resp = new DeleteTrainingModelVersionResponse();
        this.request("DeleteTrainingModelVersion", req, resp, cb);
    }

    /**
     * 查询资源组详情
     * @param {DescribeBillingResourceGroupsRequest} req
     * @param {function(string, DescribeBillingResourceGroupsResponse):void} cb
     * @public
     */
    DescribeBillingResourceGroups(req, cb) {
        let resp = new DescribeBillingResourceGroupsResponse();
        this.request("DescribeBillingResourceGroups", req, resp, cb);
    }

    /**
     * 查询推理镜像模板
     * @param {DescribeInferTemplatesRequest} req
     * @param {function(string, DescribeInferTemplatesResponse):void} cb
     * @public
     */
    DescribeInferTemplates(req, cb) {
        let resp = new DescribeInferTemplatesResponse();
        this.request("DescribeInferTemplates", req, resp, cb);
    }

    /**
     * 列举在线推理服务组
     * @param {DescribeModelServiceGroupsRequest} req
     * @param {function(string, DescribeModelServiceGroupsResponse):void} cb
     * @public
     */
    DescribeModelServiceGroups(req, cb) {
        let resp = new DescribeModelServiceGroupsResponse();
        this.request("DescribeModelServiceGroups", req, resp, cb);
    }

    /**
     * 停止模型加速任务
     * @param {StopModelAccelerateTaskRequest} req
     * @param {function(string, StopModelAccelerateTaskResponse):void} cb
     * @public
     */
    StopModelAccelerateTask(req, cb) {
        let resp = new StopModelAccelerateTaskResponse();
        this.request("StopModelAccelerateTask", req, resp, cb);
    }


}
module.exports = TioneClient;

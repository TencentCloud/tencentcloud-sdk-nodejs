import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateModelServiceRequest, DescribeLogsRequest, DeleteTrainingModelVersionResponse, StartTrainingTaskRequest, DescribeDatasetDetailStructuredResponse, ModifyServiceGroupWeightsResponse, DescribeBillingResourceGroupsRequest, DescribeTrainingFrameworksResponse, DescribeTrainingModelVersionsRequest, CreateDatasetResponse, ModifyServiceGroupWeightsRequest, DescribeTrainingTasksRequest, DescribeBatchTaskRequest, DescribeDatasetDetailUnstructuredRequest, StopBatchTaskResponse, DescribeBillingResourceGroupsResponse, DescribeTrainingMetricsRequest, DescribeTrainingTaskPodsRequest, CreateBatchTaskRequest, DescribeLatestTrainingMetricsResponse, DescribeDatasetDetailUnstructuredResponse, StopBatchTaskRequest, DescribeModelServiceCallInfoRequest, CreateTrainingModelRequest, DescribeAPIConfigsRequest, DescribeBillingSpecsRequest, DeleteBatchTaskRequest, DescribeTrainingModelsResponse, DescribeBatchTaskInstancesResponse, DescribeBillingSpecsResponse, DescribeBatchTaskInstancesRequest, DescribeModelServiceHistoryRequest, DescribeDatasetsRequest, DeleteTrainingModelResponse, DescribeInferTemplatesResponse, DescribeModelServiceGroupsResponse, DescribeInferTemplatesRequest, DeleteModelServiceGroupResponse, DescribeTrainingFrameworksRequest, DescribeBatchTasksResponse, DescribeModelServiceHotUpdatedResponse, DescribeModelServiceGroupsRequest, DescribeModelServiceRequest, CreateTrainingTaskResponse, DeleteModelServiceRequest, DescribeModelServiceGroupRequest, CreateTrainingTaskRequest, DescribeModelServiceResponse, DescribeDatasetsResponse, DescribeBillingSpecsPriceRequest, DescribeModelServicesRequest, DeleteTrainingTaskResponse, CreateBatchTaskResponse, DescribeTrainingModelsRequest, DescribeLatestTrainingMetricsRequest, DescribeModelServiceCallInfoResponse, DeleteTrainingTaskRequest, DescribeModelServiceHistoryResponse, DeleteBatchTaskResponse, DescribeBatchTasksRequest, CreateDatasetRequest, CreateModelServiceResponse, DescribeModelServiceGroupResponse, CreateTrainingModelResponse, DescribeAPIConfigsResponse, DescribeDatasetDetailStructuredRequest, DeleteDatasetResponse, DescribeTrainingTasksResponse, DescribeLogsResponse, DeleteModelServiceGroupRequest, PushTrainingMetricsRequest, DescribeTrainingTaskRequest, DescribeTrainingModelVersionsResponse, DeleteDatasetRequest, DescribeTrainingModelVersionRequest, PushTrainingMetricsResponse, StopTrainingTaskResponse, DescribeTrainingMetricsResponse, DescribeTrainingTaskPodsResponse, DeleteTrainingModelRequest, DescribeModelServiceHotUpdatedRequest, DescribeTrainingTaskResponse, DescribeBatchTaskResponse, DeleteModelServiceResponse, DeleteTrainingModelVersionRequest, DescribeBillingSpecsPriceResponse, DescribeTrainingModelVersionResponse, DescribeModelServicesResponse, StopTrainingTaskRequest, StartTrainingTaskResponse } from "./tione_models";
/**
 * tione client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询模型版本
     */
    DescribeTrainingModelVersion(req: DescribeTrainingModelVersionRequest, cb?: (error: string, rep: DescribeTrainingModelVersionResponse) => void): Promise<DescribeTrainingModelVersionResponse>;
    /**
     * 删除跑批任务
     */
    DeleteBatchTask(req: DeleteBatchTaskRequest, cb?: (error: string, rep: DeleteBatchTaskResponse) => void): Promise<DeleteBatchTaskResponse>;
    /**
     * 本接口(DescribeBillingSpecs)用于查询计费项列表
     */
    DescribeBillingSpecs(req: DescribeBillingSpecsRequest, cb?: (error: string, rep: DescribeBillingSpecsResponse) => void): Promise<DescribeBillingSpecsResponse>;
    /**
     * 导入模型
     */
    CreateTrainingModel(req: CreateTrainingModelRequest, cb?: (error: string, rep: CreateTrainingModelResponse) => void): Promise<CreateTrainingModelResponse>;
    /**
     * 本接口(DescribeBillingSpecsPrice)用于查询计费项价格。
     */
    DescribeBillingSpecsPrice(req: DescribeBillingSpecsPriceRequest, cb?: (error: string, rep: DescribeBillingSpecsPriceResponse) => void): Promise<DescribeBillingSpecsPriceResponse>;
    /**
     * 展示服务的调用信息
     */
    DescribeModelServiceCallInfo(req: DescribeModelServiceCallInfoRequest, cb?: (error: string, rep: DescribeModelServiceCallInfoResponse) => void): Promise<DescribeModelServiceCallInfoResponse>;
    /**
     * 训练任务列表
     */
    DescribeTrainingTasks(req: DescribeTrainingTasksRequest, cb?: (error: string, rep: DescribeTrainingTasksResponse) => void): Promise<DescribeTrainingTasksResponse>;
    /**
     * 查询单个服务
     */
    DescribeModelService(req: DescribeModelServiceRequest, cb?: (error: string, rep: DescribeModelServiceResponse) => void): Promise<DescribeModelServiceResponse>;
    /**
     * 训练框架列表
     */
    DescribeTrainingFrameworks(req?: DescribeTrainingFrameworksRequest, cb?: (error: string, rep: DescribeTrainingFrameworksResponse) => void): Promise<DescribeTrainingFrameworksResponse>;
    /**
     * 删除数据集
     */
    DeleteDataset(req: DeleteDatasetRequest, cb?: (error: string, rep: DeleteDatasetResponse) => void): Promise<DeleteDatasetResponse>;
    /**
     * 创建模型训练任务
     */
    CreateTrainingTask(req: CreateTrainingTaskRequest, cb?: (error: string, rep: CreateTrainingTaskResponse) => void): Promise<CreateTrainingTaskResponse>;
    /**
     * 停止跑批任务
     */
    StopBatchTask(req: StopBatchTaskRequest, cb?: (error: string, rep: StopBatchTaskResponse) => void): Promise<StopBatchTaskResponse>;
    /**
     * 查询非结构化数据集详情
     */
    DescribeDatasetDetailUnstructured(req: DescribeDatasetDetailUnstructuredRequest, cb?: (error: string, rep: DescribeDatasetDetailUnstructuredResponse) => void): Promise<DescribeDatasetDetailUnstructuredResponse>;
    /**
     * 模型列表
     */
    DescribeTrainingModels(req: DescribeTrainingModelsRequest, cb?: (error: string, rep: DescribeTrainingModelsResponse) => void): Promise<DescribeTrainingModelsResponse>;
    /**
     * 训练任务pod列表
     */
    DescribeTrainingTaskPods(req: DescribeTrainingTaskPodsRequest, cb?: (error: string, rep: DescribeTrainingTaskPodsResponse) => void): Promise<DescribeTrainingTaskPodsResponse>;
    /**
     * 用于查询模型服务能否开启热更新
     */
    DescribeModelServiceHotUpdated(req: DescribeModelServiceHotUpdatedRequest, cb?: (error: string, rep: DescribeModelServiceHotUpdatedResponse) => void): Promise<DescribeModelServiceHotUpdatedResponse>;
    /**
     * 查询训练自定义指标
     */
    DescribeTrainingMetrics(req: DescribeTrainingMetricsRequest, cb?: (error: string, rep: DescribeTrainingMetricsResponse) => void): Promise<DescribeTrainingMetricsResponse>;
    /**
     * 删除模型
     */
    DeleteTrainingModel(req: DeleteTrainingModelRequest, cb?: (error: string, rep: DeleteTrainingModelResponse) => void): Promise<DeleteTrainingModelResponse>;
    /**
     * 更新推理服务组流量分配
     */
    ModifyServiceGroupWeights(req: ModifyServiceGroupWeightsRequest, cb?: (error: string, rep: ModifyServiceGroupWeightsResponse) => void): Promise<ModifyServiceGroupWeightsResponse>;
    /**
     * 创建数据集
     */
    CreateDataset(req: CreateDatasetRequest, cb?: (error: string, rep: CreateDatasetResponse) => void): Promise<CreateDatasetResponse>;
    /**
     * 查询跑批实例列表
     */
    DescribeBatchTaskInstances(req: DescribeBatchTaskInstancesRequest, cb?: (error: string, rep: DescribeBatchTaskInstancesResponse) => void): Promise<DescribeBatchTaskInstancesResponse>;
    /**
     * 停止模型训练任务
     */
    StopTrainingTask(req: StopTrainingTaskRequest, cb?: (error: string, rep: StopTrainingTaskResponse) => void): Promise<StopTrainingTaskResponse>;
    /**
     * 启动模型训练任务
     */
    StartTrainingTask(req: StartTrainingTaskRequest, cb?: (error: string, rep: StartTrainingTaskResponse) => void): Promise<StartTrainingTaskResponse>;
    /**
     * 查询单个服务组
     */
    DescribeModelServiceGroup(req: DescribeModelServiceGroupRequest, cb?: (error: string, rep: DescribeModelServiceGroupResponse) => void): Promise<DescribeModelServiceGroupResponse>;
    /**
     * 列举API
     */
    DescribeAPIConfigs(req: DescribeAPIConfigsRequest, cb?: (error: string, rep: DescribeAPIConfigsResponse) => void): Promise<DescribeAPIConfigsResponse>;
    /**
     * 根据服务组id删除服务组下所有模型服务
     */
    DeleteModelServiceGroup(req: DeleteModelServiceGroupRequest, cb?: (error: string, rep: DeleteModelServiceGroupResponse) => void): Promise<DeleteModelServiceGroupResponse>;
    /**
     * 上报训练自定义指标
     */
    PushTrainingMetrics(req: PushTrainingMetricsRequest, cb?: (error: string, rep: PushTrainingMetricsResponse) => void): Promise<PushTrainingMetricsResponse>;
    /**
     * 批量预测任务列表信息
     */
    DescribeBatchTasks(req: DescribeBatchTasksRequest, cb?: (error: string, rep: DescribeBatchTasksResponse) => void): Promise<DescribeBatchTasksResponse>;
    /**
     * 模型版本列表
     */
    DescribeTrainingModelVersions(req: DescribeTrainingModelVersionsRequest, cb?: (error: string, rep: DescribeTrainingModelVersionsResponse) => void): Promise<DescribeTrainingModelVersionsResponse>;
    /**
     * 用于创建、发布一个新的模型服务
     */
    CreateModelService(req: CreateModelServiceRequest, cb?: (error: string, rep: CreateModelServiceResponse) => void): Promise<CreateModelServiceResponse>;
    /**
     * 查询结构化数据集详情
     */
    DescribeDatasetDetailStructured(req: DescribeDatasetDetailStructuredRequest, cb?: (error: string, rep: DescribeDatasetDetailStructuredResponse) => void): Promise<DescribeDatasetDetailStructuredResponse>;
    /**
     * 获取训练、推理、Notebook服务的日志
     */
    DescribeLogs(req: DescribeLogsRequest, cb?: (error: string, rep: DescribeLogsResponse) => void): Promise<DescribeLogsResponse>;
    /**
     * 根据服务id删除模型服务
     */
    DeleteModelService(req: DeleteModelServiceRequest, cb?: (error: string, rep: DeleteModelServiceResponse) => void): Promise<DeleteModelServiceResponse>;
    /**
     * 查询数据集列表
     */
    DescribeDatasets(req: DescribeDatasetsRequest, cb?: (error: string, rep: DescribeDatasetsResponse) => void): Promise<DescribeDatasetsResponse>;
    /**
     * 查询多个服务
     */
    DescribeModelServices(req: DescribeModelServicesRequest, cb?: (error: string, rep: DescribeModelServicesResponse) => void): Promise<DescribeModelServicesResponse>;
    /**
     * 训练任务详情
     */
    DescribeTrainingTask(req: DescribeTrainingTaskRequest, cb?: (error: string, rep: DescribeTrainingTaskResponse) => void): Promise<DescribeTrainingTaskResponse>;
    /**
     * 创建跑批任务
     */
    CreateBatchTask(req: CreateBatchTaskRequest, cb?: (error: string, rep: CreateBatchTaskResponse) => void): Promise<CreateBatchTaskResponse>;
    /**
     * 删除训练任务
     */
    DeleteTrainingTask(req: DeleteTrainingTaskRequest, cb?: (error: string, rep: DeleteTrainingTaskResponse) => void): Promise<DeleteTrainingTaskResponse>;
    /**
     * 查询跑批任务
     */
    DescribeBatchTask(req: DescribeBatchTaskRequest, cb?: (error: string, rep: DescribeBatchTaskResponse) => void): Promise<DescribeBatchTaskResponse>;
    /**
     * 查询最近上报的训练自定义指标
     */
    DescribeLatestTrainingMetrics(req: DescribeLatestTrainingMetricsRequest, cb?: (error: string, rep: DescribeLatestTrainingMetricsResponse) => void): Promise<DescribeLatestTrainingMetricsResponse>;
    /**
     * 展示服务的历史版本
     */
    DescribeModelServiceHistory(req: DescribeModelServiceHistoryRequest, cb?: (error: string, rep: DescribeModelServiceHistoryResponse) => void): Promise<DescribeModelServiceHistoryResponse>;
    /**
     * 删除模型版本
     */
    DeleteTrainingModelVersion(req: DeleteTrainingModelVersionRequest, cb?: (error: string, rep: DeleteTrainingModelVersionResponse) => void): Promise<DeleteTrainingModelVersionResponse>;
    /**
     * 查询资源组详情
     */
    DescribeBillingResourceGroups(req: DescribeBillingResourceGroupsRequest, cb?: (error: string, rep: DescribeBillingResourceGroupsResponse) => void): Promise<DescribeBillingResourceGroupsResponse>;
    /**
     * 查询推理镜像模板
     */
    DescribeInferTemplates(req?: DescribeInferTemplatesRequest, cb?: (error: string, rep: DescribeInferTemplatesResponse) => void): Promise<DescribeInferTemplatesResponse>;
    /**
     * 列举在线推理服务组
     */
    DescribeModelServiceGroups(req: DescribeModelServiceGroupsRequest, cb?: (error: string, rep: DescribeModelServiceGroupsResponse) => void): Promise<DescribeModelServiceGroupsResponse>;
}

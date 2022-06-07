import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeLogsRequest, DeleteTrainingModelVersionResponse, StartTrainingTaskRequest, DescribeDatasetDetailStructuredResponse, DescribeBillingResourceGroupsRequest, DescribeTrainingFrameworksResponse, DescribeTrainingModelVersionsRequest, CreateDatasetResponse, DescribeTrainingTasksRequest, DescribeDatasetDetailUnstructuredRequest, DescribeBillingResourceGroupsResponse, DescribeTrainingMetricsRequest, DescribeTrainingTaskPodsRequest, DescribeTrainingModelVersionRequest, DescribeLatestTrainingMetricsResponse, DescribeDatasetDetailUnstructuredResponse, PushTrainingMetricsRequest, CreateTrainingModelRequest, DescribeTrainingModelVersionsResponse, DescribeTrainingModelsResponse, DescribeDatasetsRequest, DeleteTrainingModelResponse, DescribeInferTemplatesResponse, DescribeInferTemplatesRequest, DescribeTrainingFrameworksRequest, CreateTrainingTaskResponse, CreateTrainingTaskRequest, DescribeDatasetsResponse, DescribeBillingSpecsPriceRequest, DeleteTrainingModelRequest, DeleteTrainingTaskResponse, DescribeLatestTrainingMetricsRequest, DeleteTrainingTaskRequest, CreateDatasetRequest, CreateTrainingModelResponse, DescribeDatasetDetailStructuredRequest, DeleteDatasetResponse, DescribeTrainingTasksResponse, DescribeLogsResponse, DescribeTrainingTaskRequest, DeleteDatasetRequest, PushTrainingMetricsResponse, StopTrainingTaskResponse, DescribeTrainingMetricsResponse, DescribeTrainingTaskPodsResponse, DescribeTrainingModelsRequest, DescribeTrainingTaskResponse, DeleteTrainingModelVersionRequest, DescribeBillingSpecsPriceResponse, DescribeTrainingModelVersionResponse, StopTrainingTaskRequest, StartTrainingTaskResponse } from "./tione_models";
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
     * 删除数据集
     */
    DeleteDataset(req: DeleteDatasetRequest, cb?: (error: string, rep: DeleteDatasetResponse) => void): Promise<DeleteDatasetResponse>;
    /**
     * 本接口(DescribeBillingSpecsPrice)用于查询计费项价格。
     */
    DescribeBillingSpecsPrice(req: DescribeBillingSpecsPriceRequest, cb?: (error: string, rep: DescribeBillingSpecsPriceResponse) => void): Promise<DescribeBillingSpecsPriceResponse>;
    /**
     * 训练任务列表
     */
    DescribeTrainingTasks(req: DescribeTrainingTasksRequest, cb?: (error: string, rep: DescribeTrainingTasksResponse) => void): Promise<DescribeTrainingTasksResponse>;
    /**
     * 训练框架列表
     */
    DescribeTrainingFrameworks(req?: DescribeTrainingFrameworksRequest, cb?: (error: string, rep: DescribeTrainingFrameworksResponse) => void): Promise<DescribeTrainingFrameworksResponse>;
    /**
     * 导入模型
     */
    CreateTrainingModel(req: CreateTrainingModelRequest, cb?: (error: string, rep: CreateTrainingModelResponse) => void): Promise<CreateTrainingModelResponse>;
    /**
     * 创建模型训练任务
     */
    CreateTrainingTask(req: CreateTrainingTaskRequest, cb?: (error: string, rep: CreateTrainingTaskResponse) => void): Promise<CreateTrainingTaskResponse>;
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
     * 查询训练自定义指标
     */
    DescribeTrainingMetrics(req: DescribeTrainingMetricsRequest, cb?: (error: string, rep: DescribeTrainingMetricsResponse) => void): Promise<DescribeTrainingMetricsResponse>;
    /**
     * 删除模型
     */
    DeleteTrainingModel(req: DeleteTrainingModelRequest, cb?: (error: string, rep: DeleteTrainingModelResponse) => void): Promise<DeleteTrainingModelResponse>;
    /**
     * 启动模型训练任务
     */
    StartTrainingTask(req: StartTrainingTaskRequest, cb?: (error: string, rep: StartTrainingTaskResponse) => void): Promise<StartTrainingTaskResponse>;
    /**
     * 创建数据集
     */
    CreateDataset(req: CreateDatasetRequest, cb?: (error: string, rep: CreateDatasetResponse) => void): Promise<CreateDatasetResponse>;
    /**
     * 上报训练自定义指标
     */
    PushTrainingMetrics(req: PushTrainingMetricsRequest, cb?: (error: string, rep: PushTrainingMetricsResponse) => void): Promise<PushTrainingMetricsResponse>;
    /**
     * 停止模型训练任务
     */
    StopTrainingTask(req: StopTrainingTaskRequest, cb?: (error: string, rep: StopTrainingTaskResponse) => void): Promise<StopTrainingTaskResponse>;
    /**
     * 模型版本列表
     */
    DescribeTrainingModelVersions(req: DescribeTrainingModelVersionsRequest, cb?: (error: string, rep: DescribeTrainingModelVersionsResponse) => void): Promise<DescribeTrainingModelVersionsResponse>;
    /**
     * 查询结构化数据集详情
     */
    DescribeDatasetDetailStructured(req: DescribeDatasetDetailStructuredRequest, cb?: (error: string, rep: DescribeDatasetDetailStructuredResponse) => void): Promise<DescribeDatasetDetailStructuredResponse>;
    /**
     * 获取训练、推理、Notebook服务的日志
     */
    DescribeLogs(req: DescribeLogsRequest, cb?: (error: string, rep: DescribeLogsResponse) => void): Promise<DescribeLogsResponse>;
    /**
     * 查询数据集列表
     */
    DescribeDatasets(req: DescribeDatasetsRequest, cb?: (error: string, rep: DescribeDatasetsResponse) => void): Promise<DescribeDatasetsResponse>;
    /**
     * 训练任务详情
     */
    DescribeTrainingTask(req: DescribeTrainingTaskRequest, cb?: (error: string, rep: DescribeTrainingTaskResponse) => void): Promise<DescribeTrainingTaskResponse>;
    /**
     * 删除训练任务
     */
    DeleteTrainingTask(req: DeleteTrainingTaskRequest, cb?: (error: string, rep: DeleteTrainingTaskResponse) => void): Promise<DeleteTrainingTaskResponse>;
    /**
     * 查询最近上报的训练自定义指标
     */
    DescribeLatestTrainingMetrics(req: DescribeLatestTrainingMetricsRequest, cb?: (error: string, rep: DescribeLatestTrainingMetricsResponse) => void): Promise<DescribeLatestTrainingMetricsResponse>;
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
}

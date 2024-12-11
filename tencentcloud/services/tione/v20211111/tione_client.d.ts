import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateModelServiceRequest, DescribeModelAccelerateVersionsRequest, StopModelAccelerateTaskRequest, DeleteTrainingModelVersionResponse, DescribeBillingResourceGroupsRequest, DeleteNotebookRequest, DescribeTrainingModelVersionsRequest, CreateDatasetResponse, DescribeTrainingTasksRequest, DescribeBillingResourceGroupResponse, DescribeBillingResourceGroupsResponse, StartNotebookResponse, DescribeTrainingModelVersionRequest, StartNotebookRequest, PushTrainingMetricsRequest, DescribeModelAccelerateVersionsResponse, DescribeBuildInImagesRequest, ModifyModelServiceRequest, ChatCompletionRequest, DescribeModelServiceCallInfoRequest, CreateTrainingModelRequest, DescribeModelServiceGroupsResponse, DescribeBillingResourceInstanceRunningJobsResponse, CreateNotebookRequest, CreatePresignedNotebookUrlResponse, DescribeDatasetsRequest, DeleteTrainingModelResponse, DescribeInferTemplatesResponse, DescribeBillingSpecsRequest, DescribeInferTemplatesRequest, DeleteModelServiceGroupResponse, DescribeModelServiceResponse, DescribeModelAccelerateTaskResponse, DescribeModelServiceGroupsRequest, DescribeModelServiceRequest, DeleteModelServiceRequest, DescribeModelServiceGroupRequest, CreatePresignedNotebookUrlRequest, StopNotebookResponse, DescribeModelServiceHotUpdatedResponse, DescribeBuildInImagesResponse, DescribeDatasetsResponse, CreateNotebookResponse, DescribeBillingSpecsPriceRequest, DescribeBillingSpecsResponse, DescribeNotebooksResponse, DescribeModelServiceCallInfoResponse, DescribeNotebooksRequest, DeleteNotebookResponse, ModifyModelServiceResponse, CreateDatasetRequest, CreateModelServiceResponse, DescribeModelServiceGroupResponse, DescribeNotebookResponse, CreateTrainingModelResponse, StopModelAccelerateTaskResponse, DescribeModelAccelerateTaskRequest, DeleteDatasetResponse, DescribeTrainingTasksResponse, DescribeNotebookRequest, DescribeBillingResourceInstanceRunningJobsRequest, StopNotebookRequest, DeleteModelServiceGroupRequest, DescribeBillingResourceGroupRequest, DescribeTrainingTaskRequest, ChatCompletionResponse, DescribeTrainingTaskPodsRequest, DescribeTrainingModelVersionsResponse, DeleteDatasetRequest, PushTrainingMetricsResponse, DescribeTrainingTaskPodsResponse, DeleteTrainingModelRequest, DescribeModelServiceHotUpdatedRequest, DescribeTrainingTaskResponse, DeleteModelServiceResponse, DeleteTrainingModelVersionRequest, DescribeBillingSpecsPriceResponse, DescribeTrainingModelVersionResponse } from "./tione_models";
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
     * 查询单个服务
     */
    DescribeModelService(req: DescribeModelServiceRequest, cb?: (error: string, rep: DescribeModelServiceResponse) => void): Promise<DescribeModelServiceResponse>;
    /**
     * 本接口(DescribeBillingSpecs) 提供查询计费项列表
     */
    DescribeBillingSpecs(req: DescribeBillingSpecsRequest, cb?: (error: string, rep: DescribeBillingSpecsResponse) => void): Promise<DescribeBillingSpecsResponse>;
    /**
     * 导入模型
     */
    CreateTrainingModel(req: CreateTrainingModelRequest, cb?: (error: string, rep: CreateTrainingModelResponse) => void): Promise<CreateTrainingModelResponse>;
    /**
     * 本接口(DescribeBillingSpecsPrice)用于查询按量计费计费项价格。
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
     * 获取内置镜像列表
     */
    DescribeBuildInImages(req: DescribeBuildInImagesRequest, cb?: (error: string, rep: DescribeBuildInImagesResponse) => void): Promise<DescribeBuildInImagesResponse>;
    /**
     * 启动Notebook
     */
    StartNotebook(req: StartNotebookRequest, cb?: (error: string, rep: StartNotebookResponse) => void): Promise<StartNotebookResponse>;
    /**
     * 删除数据集
     */
    DeleteDataset(req: DeleteDatasetRequest, cb?: (error: string, rep: DeleteDatasetResponse) => void): Promise<DeleteDatasetResponse>;
    /**
     * 删除Notebook
     */
    DeleteNotebook(req: DeleteNotebookRequest, cb?: (error: string, rep: DeleteNotebookResponse) => void): Promise<DeleteNotebookResponse>;
    /**
     * 训练任务详情
     */
    DescribeTrainingTask(req: DescribeTrainingTaskRequest, cb?: (error: string, rep: DescribeTrainingTaskResponse) => void): Promise<DescribeTrainingTaskResponse>;
    /**
     * 训练任务pod列表
     */
    DescribeTrainingTaskPods(req: DescribeTrainingTaskPodsRequest, cb?: (error: string, rep: DescribeTrainingTaskPodsResponse) => void): Promise<DescribeTrainingTaskPodsResponse>;
    /**
     * 用于查询模型服务能否开启热更新
     */
    DescribeModelServiceHotUpdated(req: DescribeModelServiceHotUpdatedRequest, cb?: (error: string, rep: DescribeModelServiceHotUpdatedResponse) => void): Promise<DescribeModelServiceHotUpdatedResponse>;
    /**
     * 查询模型优化任务详情
     */
    DescribeModelAccelerateTask(req: DescribeModelAccelerateTaskRequest, cb?: (error: string, rep: DescribeModelAccelerateTaskResponse) => void): Promise<DescribeModelAccelerateTaskResponse>;
    /**
     * 该接口支持与自行部署的大模型的聊天。
     */
    ChatCompletion(req: ChatCompletionRequest, cb?: (error: string, rep: ChatCompletionResponse) => void): Promise<ChatCompletionResponse>;
    /**
     * 模型加速之后的模型版本列表
     */
    DescribeModelAccelerateVersions(req: DescribeModelAccelerateVersionsRequest, cb?: (error: string, rep: DescribeModelAccelerateVersionsResponse) => void): Promise<DescribeModelAccelerateVersionsResponse>;
    /**
     * 创建数据集
     */
    CreateDataset(req: CreateDatasetRequest, cb?: (error: string, rep: CreateDatasetResponse) => void): Promise<CreateDatasetResponse>;
    /**
     * 创建Notebook
     */
    CreateNotebook(req: CreateNotebookRequest, cb?: (error: string, rep: CreateNotebookResponse) => void): Promise<CreateNotebookResponse>;
    /**
     * 查询单个服务组
     */
    DescribeModelServiceGroup(req: DescribeModelServiceGroupRequest, cb?: (error: string, rep: DescribeModelServiceGroupResponse) => void): Promise<DescribeModelServiceGroupResponse>;
    /**
     * 根据服务组id删除服务组下所有模型服务
     */
    DeleteModelServiceGroup(req: DeleteModelServiceGroupRequest, cb?: (error: string, rep: DeleteModelServiceGroupResponse) => void): Promise<DeleteModelServiceGroupResponse>;
    /**
     * 上报训练自定义指标
     */
    PushTrainingMetrics(req: PushTrainingMetricsRequest, cb?: (error: string, rep: PushTrainingMetricsResponse) => void): Promise<PushTrainingMetricsResponse>;
    /**
     * 模型版本列表
     */
    DescribeTrainingModelVersions(req: DescribeTrainingModelVersionsRequest, cb?: (error: string, rep: DescribeTrainingModelVersionsResponse) => void): Promise<DescribeTrainingModelVersionsResponse>;
    /**
     * 用于创建、发布一个新的模型服务
     */
    CreateModelService(req: CreateModelServiceRequest, cb?: (error: string, rep: CreateModelServiceResponse) => void): Promise<CreateModelServiceResponse>;
    /**
     * 生成Notebook访问链接
     */
    CreatePresignedNotebookUrl(req: CreatePresignedNotebookUrlRequest, cb?: (error: string, rep: CreatePresignedNotebookUrlResponse) => void): Promise<CreatePresignedNotebookUrlResponse>;
    /**
     * 根据服务id删除模型服务
     */
    DeleteModelService(req: DeleteModelServiceRequest, cb?: (error: string, rep: DeleteModelServiceResponse) => void): Promise<DeleteModelServiceResponse>;
    /**
     * 查询数据集列表
     */
    DescribeDatasets(req: DescribeDatasetsRequest, cb?: (error: string, rep: DescribeDatasetsResponse) => void): Promise<DescribeDatasetsResponse>;
    /**
     * 查询资源组节点运行中的任务
     */
    DescribeBillingResourceInstanceRunningJobs(req: DescribeBillingResourceInstanceRunningJobsRequest, cb?: (error: string, rep: DescribeBillingResourceInstanceRunningJobsResponse) => void): Promise<DescribeBillingResourceInstanceRunningJobsResponse>;
    /**
     * 用于更新模型服务
     */
    ModifyModelService(req: ModifyModelServiceRequest, cb?: (error: string, rep: ModifyModelServiceResponse) => void): Promise<ModifyModelServiceResponse>;
    /**
     * Notebook列表
     */
    DescribeNotebooks(req: DescribeNotebooksRequest, cb?: (error: string, rep: DescribeNotebooksResponse) => void): Promise<DescribeNotebooksResponse>;
    /**
     * 删除模型
     */
    DeleteTrainingModel(req: DeleteTrainingModelRequest, cb?: (error: string, rep: DeleteTrainingModelResponse) => void): Promise<DeleteTrainingModelResponse>;
    /**
     * 停止模型加速任务
     */
    StopModelAccelerateTask(req: StopModelAccelerateTaskRequest, cb?: (error: string, rep: StopModelAccelerateTaskResponse) => void): Promise<StopModelAccelerateTaskResponse>;
    /**
     * 查询资源组节点列表
     */
    DescribeBillingResourceGroup(req: DescribeBillingResourceGroupRequest, cb?: (error: string, rep: DescribeBillingResourceGroupResponse) => void): Promise<DescribeBillingResourceGroupResponse>;
    /**
     * Notebook详情
     */
    DescribeNotebook(req: DescribeNotebookRequest, cb?: (error: string, rep: DescribeNotebookResponse) => void): Promise<DescribeNotebookResponse>;
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
    /**
     * 停止Notebook
     */
    StopNotebook(req: StopNotebookRequest, cb?: (error: string, rep: StopNotebookResponse) => void): Promise<StopNotebookResponse>;
}

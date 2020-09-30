import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteModelRequest, DeleteJobResponse, CreateJobRequest, CreateJobResponse, InstallAgentResponse, DescribeModelResponse, DescribeModelRequest, DescribeJobRequest, ListJobsRequest, CreateModelResponse, ListModelsRequest, QueryLogsResponse, InstallAgentRequest, ListJobsResponse, QueryLogsRequest, DeleteModelResponse, ListModelsResponse, DeleteJobRequest, CreateModelRequest, DescribeJobResponse } from "./tia_models";
/**
 * tia client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 部署模型，用以对外提供服务。有两种部署模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
     */
    CreateModel(req: CreateModelRequest, cb?: (error: string, rep: CreateModelResponse) => void): Promise<CreateModelResponse>;
    /**
     * 列举训练任务
     */
    ListJobs(req: ListJobsRequest, cb?: (error: string, rep: ListJobsResponse) => void): Promise<ListJobsResponse>;
    /**
     * 创建训练任务
     */
    CreateJob(req: CreateJobRequest, cb?: (error: string, rep: CreateJobResponse) => void): Promise<CreateJobResponse>;
    /**
     * 描述已经部署的某个模型。而模型部署有两种模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
     */
    DescribeModel(req: DescribeModelRequest, cb?: (error: string, rep: DescribeModelResponse) => void): Promise<DescribeModelResponse>;
    /**
     * 查询 TI-A 训练任务的日志
     */
    QueryLogs(req: QueryLogsRequest, cb?: (error: string, rep: QueryLogsResponse) => void): Promise<QueryLogsResponse>;
    /**
     * 用以列举已经部署的模型。而部署有两种模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。不同部署模式下的模型分开列出。
     */
    ListModels(req: ListModelsRequest, cb?: (error: string, rep: ListModelsResponse) => void): Promise<ListModelsResponse>;
    /**
     * 删除训练任务
     */
    DeleteJob(req: DeleteJobRequest, cb?: (error: string, rep: DeleteJobResponse) => void): Promise<DeleteJobResponse>;
    /**
     * 删除指定的部署模型。模型有两种部署模式：`无服务器模式` 和 `集群模式`。`无服务器模式` 下，模型文件被部署到无服务器云函数，即 [SCF](https://cloud.tencent.com/product/scf)，用户可以在其控制台上进一步操作。`集群模式` 下，模型文件被部署到 TI-A 的计算集群中。
     */
    DeleteModel(req: DeleteModelRequest, cb?: (error: string, rep: DeleteModelResponse) => void): Promise<DeleteModelResponse>;
    /**
     * 获取训练任务详情
     */
    DescribeJob(req: DescribeJobRequest, cb?: (error: string, rep: DescribeJobResponse) => void): Promise<DescribeJobResponse>;
    /**
     * 安装agent
     */
    InstallAgent(req: InstallAgentRequest, cb?: (error: string, rep: InstallAgentResponse) => void): Promise<InstallAgentResponse>;
}

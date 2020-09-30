import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { StopTrainingJobResponse, CreateNotebookInstanceRequest, DescribeNotebookSummaryRequest, DescribeNotebookInstanceRequest, DeleteNotebookInstanceResponse, DeleteNotebookLifecycleScriptResponse, DescribeNotebookLifecycleScriptsRequest, DeleteCodeRepositoryRequest, DescribeCodeRepositoryResponse, StartNotebookInstanceResponse, UpdateCodeRepositoryResponse, CreateNotebookInstanceResponse, StopTrainingJobRequest, UpdateNotebookInstanceResponse, UpdateNotebookLifecycleScriptRequest, UpdateNotebookInstanceRequest, CreatePresignedNotebookInstanceUrlRequest, CreateNotebookLifecycleScriptRequest, CreateCodeRepositoryRequest, DescribeNotebookInstancesRequest, DescribeTrainingJobsResponse, DescribeCodeRepositoriesResponse, DescribeNotebookInstancesResponse, DescribeCodeRepositoryRequest, CreateTrainingJobResponse, DescribeNotebookInstanceResponse, DescribeTrainingJobRequest, DescribeNotebookLifecycleScriptsResponse, DescribeNotebookSummaryResponse, StopNotebookInstanceRequest, DeleteNotebookLifecycleScriptRequest, DescribeNotebookLifecycleScriptResponse, DescribeTrainingJobResponse, StopNotebookInstanceResponse, UpdateCodeRepositoryRequest, CreateTrainingJobRequest, DeleteNotebookInstanceRequest, DescribeNotebookLifecycleScriptRequest, CreateNotebookLifecycleScriptResponse, CreatePresignedNotebookInstanceUrlResponse, UpdateNotebookLifecycleScriptResponse, DescribeTrainingJobsRequest, StartNotebookInstanceRequest, CreateCodeRepositoryResponse, DescribeCodeRepositoriesRequest, DeleteCodeRepositoryResponse } from "./tione_models";
/**
 * tione client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新Notebook实例
     */
    UpdateNotebookInstance(req: UpdateNotebookInstanceRequest, cb?: (error: string, rep: UpdateNotebookInstanceResponse) => void): Promise<UpdateNotebookInstanceResponse>;
    /**
     * 查看notebook生命周期脚本列表
     */
    DescribeNotebookLifecycleScripts(req: DescribeNotebookLifecycleScriptsRequest, cb?: (error: string, rep: DescribeNotebookLifecycleScriptsResponse) => void): Promise<DescribeNotebookLifecycleScriptsResponse>;
    /**
     * 启动Notebook实例
     */
    StartNotebookInstance(req: StartNotebookInstanceRequest, cb?: (error: string, rep: StartNotebookInstanceResponse) => void): Promise<StartNotebookInstanceResponse>;
    /**
     * 删除notebook实例
     */
    DeleteNotebookInstance(req: DeleteNotebookInstanceRequest, cb?: (error: string, rep: DeleteNotebookInstanceResponse) => void): Promise<DeleteNotebookInstanceResponse>;
    /**
     * 查看notebook生命周期脚本详情
     */
    DescribeNotebookLifecycleScript(req: DescribeNotebookLifecycleScriptRequest, cb?: (error: string, rep: DescribeNotebookLifecycleScriptResponse) => void): Promise<DescribeNotebookLifecycleScriptResponse>;
    /**
     * 创建Notebook授权Url
     */
    CreatePresignedNotebookInstanceUrl(req: CreatePresignedNotebookInstanceUrlRequest, cb?: (error: string, rep: CreatePresignedNotebookInstanceUrlResponse) => void): Promise<CreatePresignedNotebookInstanceUrlResponse>;
    /**
     * 创建存储库
     */
    CreateCodeRepository(req: CreateCodeRepositoryRequest, cb?: (error: string, rep: CreateCodeRepositoryResponse) => void): Promise<CreateCodeRepositoryResponse>;
    /**
     * 更新notebook生命周期脚本
     */
    UpdateNotebookLifecycleScript(req: UpdateNotebookLifecycleScriptRequest, cb?: (error: string, rep: UpdateNotebookLifecycleScriptResponse) => void): Promise<UpdateNotebookLifecycleScriptResponse>;
    /**
     * 查询训练任务
     */
    DescribeTrainingJob(req: DescribeTrainingJobRequest, cb?: (error: string, rep: DescribeTrainingJobResponse) => void): Promise<DescribeTrainingJobResponse>;
    /**
     * 停止Notebook实例
     */
    StopNotebookInstance(req: StopNotebookInstanceRequest, cb?: (error: string, rep: StopNotebookInstanceResponse) => void): Promise<StopNotebookInstanceResponse>;
    /**
     * 创建Notebook实例
     */
    CreateNotebookInstance(req: CreateNotebookInstanceRequest, cb?: (error: string, rep: CreateNotebookInstanceResponse) => void): Promise<CreateNotebookInstanceResponse>;
    /**
     * 查询存储库详情
     */
    DescribeCodeRepository(req: DescribeCodeRepositoryRequest, cb?: (error: string, rep: DescribeCodeRepositoryResponse) => void): Promise<DescribeCodeRepositoryResponse>;
    /**
     * 查询训练任务列表
     */
    DescribeTrainingJobs(req: DescribeTrainingJobsRequest, cb?: (error: string, rep: DescribeTrainingJobsResponse) => void): Promise<DescribeTrainingJobsResponse>;
    /**
     * 删除存储库
     */
    DeleteCodeRepository(req: DeleteCodeRepositoryRequest, cb?: (error: string, rep: DeleteCodeRepositoryResponse) => void): Promise<DeleteCodeRepositoryResponse>;
    /**
     * 查询Notebook概览数据
     */
    DescribeNotebookSummary(req?: DescribeNotebookSummaryRequest, cb?: (error: string, rep: DescribeNotebookSummaryResponse) => void): Promise<DescribeNotebookSummaryResponse>;
    /**
     * 创建Notebook生命周期脚本
     */
    CreateNotebookLifecycleScript(req: CreateNotebookLifecycleScriptRequest, cb?: (error: string, rep: CreateNotebookLifecycleScriptResponse) => void): Promise<CreateNotebookLifecycleScriptResponse>;
    /**
     * 删除Notebook生命周期脚本
     */
    DeleteNotebookLifecycleScript(req: DeleteNotebookLifecycleScriptRequest, cb?: (error: string, rep: DeleteNotebookLifecycleScriptResponse) => void): Promise<DeleteNotebookLifecycleScriptResponse>;
    /**
     * 查询Notebook实例详情
     */
    DescribeNotebookInstance(req: DescribeNotebookInstanceRequest, cb?: (error: string, rep: DescribeNotebookInstanceResponse) => void): Promise<DescribeNotebookInstanceResponse>;
    /**
     * 更新存储库
     */
    UpdateCodeRepository(req: UpdateCodeRepositoryRequest, cb?: (error: string, rep: UpdateCodeRepositoryResponse) => void): Promise<UpdateCodeRepositoryResponse>;
    /**
     * 查询Notebook实例列表
     */
    DescribeNotebookInstances(req: DescribeNotebookInstancesRequest, cb?: (error: string, rep: DescribeNotebookInstancesResponse) => void): Promise<DescribeNotebookInstancesResponse>;
    /**
     * 创建训练任务
     */
    CreateTrainingJob(req: CreateTrainingJobRequest, cb?: (error: string, rep: CreateTrainingJobResponse) => void): Promise<CreateTrainingJobResponse>;
    /**
     * 查询存储库列表
     */
    DescribeCodeRepositories(req: DescribeCodeRepositoriesRequest, cb?: (error: string, rep: DescribeCodeRepositoriesResponse) => void): Promise<DescribeCodeRepositoriesResponse>;
    /**
     * 停止训练任务
     */
    StopTrainingJob(req: StopTrainingJobRequest, cb?: (error: string, rep: StopTrainingJobResponse) => void): Promise<StopTrainingJobResponse>;
}

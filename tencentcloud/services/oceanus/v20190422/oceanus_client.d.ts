import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeResourceConfigsResponse, CreateResourceRequest, CreateJobRequest, StopJobsRequest, CreateJobResponse, RunJobsRequest, DeleteTableConfigResponse, CreateResourceConfigResponse, CreateJobConfigRequest, CreateResourceConfigRequest, DeleteTableConfigRequest, DescribeResourceRelatedJobsRequest, DeleteResourcesResponse, CreateJobConfigResponse, DescribeResourcesRequest, DeleteResourceConfigsRequest, RunJobsResponse, DeleteResourcesRequest, DescribeJobsResponse, StopJobsResponse, CreateResourceResponse, DescribeSystemResourcesRequest, DescribeJobConfigsRequest, DescribeResourcesResponse, DescribeJobConfigsResponse, DeleteResourceConfigsResponse, DescribeResourceRelatedJobsResponse, DescribeSystemResourcesResponse, DescribeJobsRequest, DescribeResourceConfigsRequest } from "./oceanus_models";
/**
 * oceanus client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 批量停止作业，批量操作数量上限为20
     */
    StopJobs(req: StopJobsRequest, cb?: (error: string, rep: StopJobsResponse) => void): Promise<StopJobsResponse>;
    /**
     * 描述资源接口
     */
    DescribeResources(req: DescribeResourcesRequest, cb?: (error: string, rep: DescribeResourcesResponse) => void): Promise<DescribeResourcesResponse>;
    /**
     * 新建作业接口，一个 AppId 最多允许创建1000个作业
     */
    CreateJob(req: CreateJobRequest, cb?: (error: string, rep: CreateJobResponse) => void): Promise<CreateJobResponse>;
    /**
     * 创建资源接口
     */
    CreateResource(req: CreateResourceRequest, cb?: (error: string, rep: CreateResourceResponse) => void): Promise<CreateResourceResponse>;
    /**
     * 获取资源关联作业信息
     */
    DescribeResourceRelatedJobs(req: DescribeResourceRelatedJobsRequest, cb?: (error: string, rep: DescribeResourceRelatedJobsResponse) => void): Promise<DescribeResourceRelatedJobsResponse>;
    /**
     * 批量启动或者恢复作业，批量操作数量上限20
     */
    RunJobs(req: RunJobsRequest, cb?: (error: string, rep: RunJobsResponse) => void): Promise<RunJobsResponse>;
    /**
     * 删除资源接口
     */
    DeleteResources(req: DeleteResourcesRequest, cb?: (error: string, rep: DeleteResourcesResponse) => void): Promise<DeleteResourcesResponse>;
    /**
     * 查询作业
     */
    DescribeJobs(req: DescribeJobsRequest, cb?: (error: string, rep: DescribeJobsResponse) => void): Promise<DescribeJobsResponse>;
    /**
     * 描述系统资源接口
     */
    DescribeSystemResources(req: DescribeSystemResourcesRequest, cb?: (error: string, rep: DescribeSystemResourcesResponse) => void): Promise<DescribeSystemResourcesResponse>;
    /**
     * 删除资源版本
     */
    DeleteResourceConfigs(req: DeleteResourceConfigsRequest, cb?: (error: string, rep: DeleteResourceConfigsResponse) => void): Promise<DeleteResourceConfigsResponse>;
    /**
     * 创建资源配置接口
     */
    CreateResourceConfig(req: CreateResourceConfigRequest, cb?: (error: string, rep: CreateResourceConfigResponse) => void): Promise<CreateResourceConfigResponse>;
    /**
     * 创建作业配置，一个作业最多有100个配置版本
     */
    CreateJobConfig(req: CreateJobConfigRequest, cb?: (error: string, rep: CreateJobConfigResponse) => void): Promise<CreateJobConfigResponse>;
    /**
     * 删除作业表配置
     */
    DeleteTableConfig(req: DeleteTableConfigRequest, cb?: (error: string, rep: DeleteTableConfigResponse) => void): Promise<DeleteTableConfigResponse>;
    /**
     * 描述资源配置接口
     */
    DescribeResourceConfigs(req: DescribeResourceConfigsRequest, cb?: (error: string, rep: DescribeResourceConfigsResponse) => void): Promise<DescribeResourceConfigsResponse>;
    /**
     * 查询作业配置列表，一次最多查询100个
     */
    DescribeJobConfigs(req: DescribeJobConfigsRequest, cb?: (error: string, rep: DescribeJobConfigsResponse) => void): Promise<DescribeJobConfigsResponse>;
}

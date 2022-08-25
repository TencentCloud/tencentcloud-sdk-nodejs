import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateResourceRequest, CheckSavepointRequest, CreateJobRequest, StopJobsRequest, CreateJobResponse, RunJobsRequest, DeleteJobsRequest, CreateFolderRequest, ModifyJobResponse, CreateJobConfigResponse, CreateResourceConfigResponse, CreateJobConfigRequest, CreateResourceConfigRequest, DescribeSystemResourcesResponse, DescribeClustersRequest, DescribeTreeJobsResponse, DeleteTableConfigRequest, CopyJobsRequest, CopyJobsResponse, DescribeResourceRelatedJobsRequest, DeleteResourcesResponse, DeleteTableConfigResponse, TriggerJobSavepointResponse, DescribeResourcesRequest, DescribeJobConfigsRequest, CheckSavepointResponse, DeleteResourceConfigsRequest, DescribeJobSavepointResponse, DeleteJobsResponse, DescribeTreeResourcesResponse, RunJobsResponse, DeleteResourcesRequest, DescribeJobsResponse, StopJobsResponse, DescribeJobSavepointRequest, CreateResourceResponse, DescribeSystemResourcesRequest, CreateFolderResponse, ModifyJobRequest, DescribeTreeJobsRequest, DescribeJobConfigsResponse, DeleteResourceConfigsResponse, DescribeResourceRelatedJobsResponse, DescribeResourcesResponse, DescribeClustersResponse, TriggerJobSavepointRequest, DescribeResourceConfigsResponse, DescribeJobsRequest, DescribeResourceConfigsRequest, DescribeTreeResourcesRequest } from "./oceanus_models";
/**
 * oceanus client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 生成树状作业显示结构
     */
    DescribeTreeJobs(req: DescribeTreeJobsRequest, cb?: (error: string, rep: DescribeTreeJobsResponse) => void): Promise<DescribeTreeJobsResponse>;
    /**
     * 查询树状结构资源列表
     */
    DescribeTreeResources(req: DescribeTreeResourcesRequest, cb?: (error: string, rep: DescribeTreeResourcesResponse) => void): Promise<DescribeTreeResourcesResponse>;
    /**
     * 单条和批量复制作业
     */
    CopyJobs(req: CopyJobsRequest, cb?: (error: string, rep: CopyJobsResponse) => void): Promise<CopyJobsResponse>;
    /**
     * 删除资源版本
     */
    DeleteResourceConfigs(req: DeleteResourceConfigsRequest, cb?: (error: string, rep: DeleteResourceConfigsResponse) => void): Promise<DeleteResourceConfigsResponse>;
    /**
     * 创建资源配置接口
     */
    CreateResourceConfig(req: CreateResourceConfigRequest, cb?: (error: string, rep: CreateResourceConfigResponse) => void): Promise<CreateResourceConfigResponse>;
    /**
     * 删除作业表配置
     */
    DeleteTableConfig(req: DeleteTableConfigRequest, cb?: (error: string, rep: DeleteTableConfigResponse) => void): Promise<DeleteTableConfigResponse>;
    /**
     * 描述资源配置接口
     */
    DescribeResourceConfigs(req: DescribeResourceConfigsRequest, cb?: (error: string, rep: DescribeResourceConfigsResponse) => void): Promise<DescribeResourceConfigsResponse>;
    /**
     * 查找Savepoint列表
     */
    DescribeJobSavepoint(req: DescribeJobSavepointRequest, cb?: (error: string, rep: DescribeJobSavepointResponse) => void): Promise<DescribeJobSavepointResponse>;
    /**
     * 描述资源接口
     */
    DescribeResources(req: DescribeResourcesRequest, cb?: (error: string, rep: DescribeResourcesResponse) => void): Promise<DescribeResourcesResponse>;
    /**
     * 查询集群
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 新建作业接口，一个 AppId 最多允许创建1000个作业
     */
    CreateJob(req: CreateJobRequest, cb?: (error: string, rep: CreateJobResponse) => void): Promise<CreateJobResponse>;
    /**
     * 触发Savepoint
     */
    TriggerJobSavepoint(req: TriggerJobSavepointRequest, cb?: (error: string, rep: TriggerJobSavepointResponse) => void): Promise<TriggerJobSavepointResponse>;
    /**
     * 批量启动或者恢复作业，批量操作数量上限20
     */
    RunJobs(req: RunJobsRequest, cb?: (error: string, rep: RunJobsResponse) => void): Promise<RunJobsResponse>;
    /**
     * 批量删除作业接口，批量操作数量上限20
     */
    DeleteJobs(req: DeleteJobsRequest, cb?: (error: string, rep: DeleteJobsResponse) => void): Promise<DeleteJobsResponse>;
    /**
     * 作业列表页面新建文件夹请求
     */
    CreateFolder(req: CreateFolderRequest, cb?: (error: string, rep: CreateFolderResponse) => void): Promise<CreateFolderResponse>;
    /**
     * 检查快照是否可用
     */
    CheckSavepoint(req: CheckSavepointRequest, cb?: (error: string, rep: CheckSavepointResponse) => void): Promise<CheckSavepointResponse>;
    /**
     * 创建作业配置，一个作业最多有100个配置版本
     */
    CreateJobConfig(req: CreateJobConfigRequest, cb?: (error: string, rep: CreateJobConfigResponse) => void): Promise<CreateJobConfigResponse>;
    /**
     * 批量停止作业，批量操作数量上限为20
     */
    StopJobs(req: StopJobsRequest, cb?: (error: string, rep: StopJobsResponse) => void): Promise<StopJobsResponse>;
    /**
     * 获取资源关联作业信息
     */
    DescribeResourceRelatedJobs(req: DescribeResourceRelatedJobsRequest, cb?: (error: string, rep: DescribeResourceRelatedJobsResponse) => void): Promise<DescribeResourceRelatedJobsResponse>;
    /**
     * 删除资源接口
     */
    DeleteResources(req: DeleteResourcesRequest, cb?: (error: string, rep: DeleteResourcesResponse) => void): Promise<DeleteResourcesResponse>;
    /**
     * 查询作业
     */
    DescribeJobs(req: DescribeJobsRequest, cb?: (error: string, rep: DescribeJobsResponse) => void): Promise<DescribeJobsResponse>;
    /**
     * 更新作业属性，仅允许以下3种操作，不支持组合操作：
(1)	更新作业名称
(2)	更新作业备注
(3)	更新作业最大并行度
变更前提：WorkerCuNum<=MaxParallelism
如果MaxParallelism变小，不重启作业，待下一次重启生效
如果MaxParallelism变大，则要求入参RestartAllowed必须为True
假设作业运行状态，则先停止作业，再启动作业，中间状态丢失
假设作业暂停状态，则将作业更改为停止状态，中间状态丢失


     */
    ModifyJob(req: ModifyJobRequest, cb?: (error: string, rep: ModifyJobResponse) => void): Promise<ModifyJobResponse>;
    /**
     * 创建资源接口
     */
    CreateResource(req: CreateResourceRequest, cb?: (error: string, rep: CreateResourceResponse) => void): Promise<CreateResourceResponse>;
    /**
     * 描述系统资源接口
     */
    DescribeSystemResources(req: DescribeSystemResourcesRequest, cb?: (error: string, rep: DescribeSystemResourcesResponse) => void): Promise<DescribeSystemResourcesResponse>;
    /**
     * 查询作业配置列表，一次最多查询100个
     */
    DescribeJobConfigs(req: DescribeJobConfigsRequest, cb?: (error: string, rep: DescribeJobConfigsResponse) => void): Promise<DescribeJobConfigsResponse>;
}

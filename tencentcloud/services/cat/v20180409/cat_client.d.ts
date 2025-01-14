import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeNodesRequest, SuspendProbeTaskResponse, DescribeInstantTasksResponse, DescribeDetailedSingleProbeDataRequest, DescribeProbeTasksResponse, UpdateProbeTaskAttributesResponse, DeleteProbeTaskRequest, DescribeDetailedSingleProbeDataResponse, SuspendProbeTaskRequest, DescribeProbeMetricDataRequest, UpdateProbeTaskAttributesRequest, DescribeProbeNodesResponse, DescribeInstantTasksRequest, UpdateProbeTaskConfigurationListRequest, CreateProbeTasksRequest, DescribeProbeTasksRequest, ResumeProbeTaskResponse, DeleteProbeTaskResponse, CreateProbeTasksResponse, ResumeProbeTaskRequest, DescribeProbeNodesRequest, DescribeNodesResponse, DescribeProbeMetricDataResponse, UpdateProbeTaskConfigurationListResponse } from "./cat_models";
/**
 * cat client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 暂停任务
     */
    SuspendProbeTask(req: SuspendProbeTaskRequest, cb?: (error: string, rep: SuspendProbeTaskResponse) => void): Promise<SuspendProbeTaskResponse>;
    /**
     * 查询云拨测指标数据，指标支持使用sum,avg,max,min聚合函数进行指标数据查询
拨测频率与groupby聚合时间设置关联，如拨测频率为 30 分钟，则 grouby 聚合时间建议设置为大于30分钟，避免出现查询数据为空的情况
     */
    DescribeProbeMetricData(req: DescribeProbeMetricDataRequest, cb?: (error: string, rep: DescribeProbeMetricDataResponse) => void): Promise<DescribeProbeMetricDataResponse>;
    /**
     * 查询拨测任务列表
     */
    DescribeProbeTasks(req: DescribeProbeTasksRequest, cb?: (error: string, rep: DescribeProbeTasksResponse) => void): Promise<DescribeProbeTasksResponse>;
    /**
     * 更新探测任务属性
     */
    UpdateProbeTaskAttributes(req: UpdateProbeTaskAttributesRequest, cb?: (error: string, rep: UpdateProbeTaskAttributesResponse) => void): Promise<UpdateProbeTaskAttributesResponse>;
    /**
     * 获取拨测节点
     */
    DescribeNodes(req: DescribeNodesRequest, cb?: (error: string, rep: DescribeNodesResponse) => void): Promise<DescribeNodesResponse>;
    /**
     * 获取历史即时拨测任务
     */
    DescribeInstantTasks(req: DescribeInstantTasksRequest, cb?: (error: string, rep: DescribeInstantTasksResponse) => void): Promise<DescribeInstantTasksResponse>;
    /**
     * 批量更新拨测任务配置
     */
    UpdateProbeTaskConfigurationList(req: UpdateProbeTaskConfigurationListRequest, cb?: (error: string, rep: UpdateProbeTaskConfigurationListResponse) => void): Promise<UpdateProbeTaskConfigurationListResponse>;
    /**
     * 批量创建拨测任务
     */
    CreateProbeTasks(req: CreateProbeTasksRequest, cb?: (error: string, rep: CreateProbeTasksResponse) => void): Promise<CreateProbeTasksResponse>;
    /**
     * 查询拨测节点
     */
    DescribeProbeNodes(req: DescribeProbeNodesRequest, cb?: (error: string, rep: DescribeProbeNodesResponse) => void): Promise<DescribeProbeNodesResponse>;
    /**
     * 根据时间范围、任务ID、运营商等条件查询单次拨测详情数据
     */
    DescribeDetailedSingleProbeData(req: DescribeDetailedSingleProbeDataRequest, cb?: (error: string, rep: DescribeDetailedSingleProbeDataResponse) => void): Promise<DescribeDetailedSingleProbeDataResponse>;
    /**
     * 删除拨测任务
     */
    DeleteProbeTask(req: DeleteProbeTaskRequest, cb?: (error: string, rep: DeleteProbeTaskResponse) => void): Promise<DeleteProbeTaskResponse>;
    /**
     * 恢复拨测任务
     */
    ResumeProbeTask(req: ResumeProbeTaskRequest, cb?: (error: string, rep: ResumeProbeTaskResponse) => void): Promise<ResumeProbeTaskResponse>;
}

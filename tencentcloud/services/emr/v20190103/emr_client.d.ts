import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { InquirePriceRenewEmrResponse, ModifyResourceSchedulerRequest, RunJobFlowRequest, DescribeInstanceRenewNodesRequest, ScaleOutInstanceResponse, InquiryPriceCreateInstanceRequest, TerminateInstanceRequest, TerminateTasksRequest, SyncPodStateResponse, ModifyResourceScheduleConfigRequest, CreateInstanceResponse, InquiryPriceRenewInstanceResponse, DescribeJobFlowRequest, InquiryPriceCreateInstanceResponse, DescribeCvmQuotaRequest, DescribeClusterNodesRequest, SyncPodStateRequest, CreateInstanceRequest, InquirePriceRenewEmrRequest, DescribeResourceScheduleRequest, DescribeInstancesResponse, InquiryPriceScaleOutInstanceRequest, DescribeInstancesRequest, DescribeCvmQuotaResponse, InquiryPriceUpdateInstanceRequest, DescribeInstanceRenewNodesResponse, TerminateInstanceResponse, ModifyResourcePoolsRequest, RunJobFlowResponse, InquiryPriceScaleOutInstanceResponse, ModifyResourceSchedulerResponse, TerminateTasksResponse, ModifyResourcePoolsResponse, ModifyResourceScheduleConfigResponse, DescribeClusterNodesResponse, InquiryPriceUpdateInstanceResponse, DescribeJobFlowResponse, InquiryPriceRenewInstanceRequest, DescribeResourceScheduleResponse, ScaleOutInstanceRequest } from "./emr_models";
/**
 * emr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 预付费集群隔离后续费资源查询
     */
    DescribeInstanceRenewNodes(req: DescribeInstanceRenewNodesRequest, cb?: (error: string, rep: DescribeInstanceRenewNodesResponse) => void): Promise<DescribeInstanceRenewNodesResponse>;
    /**
     * 缩容Task节点
     */
    TerminateTasks(req: TerminateTasksRequest, cb?: (error: string, rep: TerminateTasksResponse) => void): Promise<TerminateTasksResponse>;
    /**
     * 查询EMR实例
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 变配询价
     */
    InquiryPriceUpdateInstance(req: InquiryPriceUpdateInstanceRequest, cb?: (error: string, rep: InquiryPriceUpdateInstanceResponse) => void): Promise<InquiryPriceUpdateInstanceResponse>;
    /**
     * 查询硬件节点信息
     */
    DescribeClusterNodes(req: DescribeClusterNodesRequest, cb?: (error: string, rep: DescribeClusterNodesResponse) => void): Promise<DescribeClusterNodesResponse>;
    /**
     * 修改了yarn的资源调度器，点击部署生效
     */
    ModifyResourceScheduler(req: ModifyResourceSchedulerRequest, cb?: (error: string, rep: ModifyResourceSchedulerResponse) => void): Promise<ModifyResourceSchedulerResponse>;
    /**
     * 续费询价。
     */
    InquiryPriceRenewInstance(req: InquiryPriceRenewInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void): Promise<InquiryPriceRenewInstanceResponse>;
    /**
     * 创建EMR集群实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 刷新动态资源池
     */
    ModifyResourcePools(req: ModifyResourcePoolsRequest, cb?: (error: string, rep: ModifyResourcePoolsResponse) => void): Promise<ModifyResourcePoolsResponse>;
    /**
     * 创建实例询价
     */
    InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse>;
    /**
     * 集群续费询价。
     */
    InquirePriceRenewEmr(req: InquirePriceRenewEmrRequest, cb?: (error: string, rep: InquirePriceRenewEmrResponse) => void): Promise<InquirePriceRenewEmrResponse>;
    /**
     * 获取yarn资源调度页面的数据
     */
    DescribeResourceSchedule(req: DescribeResourceScheduleRequest, cb?: (error: string, rep: DescribeResourceScheduleResponse) => void): Promise<DescribeResourceScheduleResponse>;
    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     */
    InquiryPriceScaleOutInstance(req: InquiryPriceScaleOutInstanceRequest, cb?: (error: string, rep: InquiryPriceScaleOutInstanceResponse) => void): Promise<InquiryPriceScaleOutInstanceResponse>;
    /**
     * 修改yarn资源调度的资源配置
     */
    ModifyResourceScheduleConfig(req: ModifyResourceScheduleConfigRequest, cb?: (error: string, rep: ModifyResourceScheduleConfigResponse) => void): Promise<ModifyResourceScheduleConfigResponse>;
    /**
     * 查询流程任务
     */
    DescribeJobFlow(req: DescribeJobFlowRequest, cb?: (error: string, rep: DescribeJobFlowResponse) => void): Promise<DescribeJobFlowResponse>;
    /**
     * 获取账户的CVM配额
     */
    DescribeCvmQuota(req: DescribeCvmQuotaRequest, cb?: (error: string, rep: DescribeCvmQuotaResponse) => void): Promise<DescribeCvmQuotaResponse>;
    /**
     * EMR同步TKE中POD状态
     */
    SyncPodState(req: SyncPodStateRequest, cb?: (error: string, rep: SyncPodStateResponse) => void): Promise<SyncPodStateResponse>;
    /**
     * 实例扩容
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 创建流程作业
     */
    RunJobFlow(req: RunJobFlowRequest, cb?: (error: string, rep: RunJobFlowResponse) => void): Promise<RunJobFlowResponse>;
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     */
    TerminateInstance(req: TerminateInstanceRequest, cb?: (error: string, rep: TerminateInstanceResponse) => void): Promise<TerminateInstanceResponse>;
}

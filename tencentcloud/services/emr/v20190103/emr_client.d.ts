import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ScaleOutInstanceResponse, SyncPodStateResponse, CreateInstanceResponse, TerminateTasksRequest, ScaleOutInstanceRequest, ModifyResourceScheduleConfigResponse, DescribeInstancesListResponse, DescribeInstanceRenewNodesRequest, InquiryPriceRenewInstanceResponse, DescribeJobFlowRequest, InquiryPriceCreateInstanceResponse, TerminateInstanceRequest, DescribeResourceScheduleRequest, DescribeUsersForUserManagerRequest, RunJobFlowResponse, TerminateInstanceResponse, InquiryPriceUpdateInstanceResponse, DescribeResourceScheduleResponse, ModifyResourceSchedulerRequest, RunJobFlowRequest, DescribeCvmQuotaResponse, DescribeCvmQuotaRequest, DescribeClusterNodesRequest, SyncPodStateRequest, CreateInstanceRequest, DescribeInstancesRequest, InquiryPriceUpdateInstanceRequest, DescribeInstancesListRequest, ModifyResourcePoolsResponse, TerminateTasksResponse, DescribeInstancesResponse, DescribeUsersForUserManagerResponse, InquiryPriceRenewInstanceRequest, InquirePriceRenewEmrResponse, AddUsersForUserManagerRequest, InquiryPriceCreateInstanceRequest, DescribeClusterNodesResponse, ModifyResourceScheduleConfigRequest, InquiryPriceScaleOutInstanceRequest, InquirePriceRenewEmrRequest, DescribeInstanceRenewNodesResponse, InquiryPriceScaleOutInstanceResponse, ModifyResourceSchedulerResponse, AddUsersForUserManagerResponse, ModifyResourcePoolsRequest, DescribeJobFlowResponse } from "./emr_models";
/**
 * emr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     */
    TerminateInstance(req: TerminateInstanceRequest, cb?: (error: string, rep: TerminateInstanceResponse) => void): Promise<TerminateInstanceResponse>;
    /**
     * 变配询价
     */
    InquiryPriceUpdateInstance(req: InquiryPriceUpdateInstanceRequest, cb?: (error: string, rep: InquiryPriceUpdateInstanceResponse) => void): Promise<InquiryPriceUpdateInstanceResponse>;
    /**
     * 批量导出用户
     */
    DescribeUsersForUserManager(req: DescribeUsersForUserManagerRequest, cb?: (error: string, rep: DescribeUsersForUserManagerResponse) => void): Promise<DescribeUsersForUserManagerResponse>;
    /**
     * 续费询价。
     */
    InquiryPriceRenewInstance(req: InquiryPriceRenewInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void): Promise<InquiryPriceRenewInstanceResponse>;
    /**
     * 查询流程任务
     */
    DescribeJobFlow(req: DescribeJobFlowRequest, cb?: (error: string, rep: DescribeJobFlowResponse) => void): Promise<DescribeJobFlowResponse>;
    /**
     * 集群续费询价。
     */
    InquirePriceRenewEmr(req: InquirePriceRenewEmrRequest, cb?: (error: string, rep: InquirePriceRenewEmrResponse) => void): Promise<InquirePriceRenewEmrResponse>;
    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     */
    InquiryPriceScaleOutInstance(req: InquiryPriceScaleOutInstanceRequest, cb?: (error: string, rep: InquiryPriceScaleOutInstanceResponse) => void): Promise<InquiryPriceScaleOutInstanceResponse>;
    /**
     * 获取账户的CVM配额
     */
    DescribeCvmQuota(req: DescribeCvmQuotaRequest, cb?: (error: string, rep: DescribeCvmQuotaResponse) => void): Promise<DescribeCvmQuotaResponse>;
    /**
     * 实例扩容
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 查询EMR实例
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 创建流程作业
     */
    RunJobFlow(req: RunJobFlowRequest, cb?: (error: string, rep: RunJobFlowResponse) => void): Promise<RunJobFlowResponse>;
    /**
     * 新增用户列表（用户管理）
     */
    AddUsersForUserManager(req: AddUsersForUserManagerRequest, cb?: (error: string, rep: AddUsersForUserManagerResponse) => void): Promise<AddUsersForUserManagerResponse>;
    /**
     * 预付费集群隔离后续费资源查询
     */
    DescribeInstanceRenewNodes(req: DescribeInstanceRenewNodesRequest, cb?: (error: string, rep: DescribeInstanceRenewNodesResponse) => void): Promise<DescribeInstanceRenewNodesResponse>;
    /**
     * 修改了yarn的资源调度器，点击部署生效
     */
    ModifyResourceScheduler(req: ModifyResourceSchedulerRequest, cb?: (error: string, rep: ModifyResourceSchedulerResponse) => void): Promise<ModifyResourceSchedulerResponse>;
    /**
     * EMR同步TKE中POD状态
     */
    SyncPodState(req: SyncPodStateRequest, cb?: (error: string, rep: SyncPodStateResponse) => void): Promise<SyncPodStateResponse>;
    /**
     * 创建EMR集群实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 创建实例询价
     */
    InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse>;
    /**
     * 获取yarn资源调度页面的数据
     */
    DescribeResourceSchedule(req: DescribeResourceScheduleRequest, cb?: (error: string, rep: DescribeResourceScheduleResponse) => void): Promise<DescribeResourceScheduleResponse>;
    /**
     * 修改yarn资源调度的资源配置
     */
    ModifyResourceScheduleConfig(req: ModifyResourceScheduleConfigRequest, cb?: (error: string, rep: ModifyResourceScheduleConfigResponse) => void): Promise<ModifyResourceScheduleConfigResponse>;
    /**
     * 缩容Task节点
     */
    TerminateTasks(req: TerminateTasksRequest, cb?: (error: string, rep: TerminateTasksResponse) => void): Promise<TerminateTasksResponse>;
    /**
     * 查询硬件节点信息
     */
    DescribeClusterNodes(req: DescribeClusterNodesRequest, cb?: (error: string, rep: DescribeClusterNodesResponse) => void): Promise<DescribeClusterNodesResponse>;
    /**
     * EMR集群实例列表查询
     */
    DescribeInstancesList(req: DescribeInstancesListRequest, cb?: (error: string, rep: DescribeInstancesListResponse) => void): Promise<DescribeInstancesListResponse>;
    /**
     * 刷新动态资源池
     */
    ModifyResourcePools(req: ModifyResourcePoolsRequest, cb?: (error: string, rep: ModifyResourcePoolsResponse) => void): Promise<ModifyResourcePoolsResponse>;
}

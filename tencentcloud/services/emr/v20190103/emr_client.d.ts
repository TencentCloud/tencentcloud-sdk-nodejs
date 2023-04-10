import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ScaleOutInstanceResponse, SyncPodStateResponse, CreateInstanceResponse, TerminateTasksRequest, ScaleOutClusterRequest, DescribeEmrApplicationStaticsRequest, ScaleOutInstanceRequest, ModifyResourceScheduleConfigResponse, AddUsersForUserManagerResponse, DescribeInstancesListResponse, DescribeInstanceRenewNodesRequest, InquiryPriceRenewInstanceResponse, DescribeJobFlowRequest, InquiryPriceCreateInstanceResponse, StartStopServiceOrMonitorRequest, TerminateInstanceRequest, DescribeResourceScheduleRequest, DescribeUsersForUserManagerRequest, RunJobFlowResponse, StartStopServiceOrMonitorResponse, TerminateInstanceResponse, InquiryPriceUpdateInstanceResponse, DeleteUserManagerUserListRequest, DescribeResourceScheduleResponse, TerminateClusterNodesResponse, ModifyResourceSchedulerRequest, RunJobFlowRequest, CreateClusterResponse, DescribeCvmQuotaResponse, CreateClusterRequest, DescribeCvmQuotaRequest, DescribeClusterNodesRequest, CreateInstanceRequest, DescribeInstancesRequest, InquiryPriceUpdateInstanceRequest, TerminateClusterNodesRequest, DescribeInstancesListRequest, DeleteUserManagerUserListResponse, ModifyResourcePoolsResponse, TerminateTasksResponse, DescribeInstancesResponse, DescribeUsersForUserManagerResponse, InquiryPriceRenewInstanceRequest, InquirePriceRenewEmrResponse, AddUsersForUserManagerRequest, SyncPodStateRequest, InquiryPriceCreateInstanceRequest, DescribeClusterNodesResponse, ModifyResourceScheduleConfigRequest, InquiryPriceScaleOutInstanceRequest, DescribeEmrApplicationStaticsResponse, InquirePriceRenewEmrRequest, DescribeInstanceRenewNodesResponse, InquiryPriceScaleOutInstanceResponse, ModifyResourceSchedulerResponse, ScaleOutClusterResponse, ModifyResourcePoolsRequest, DescribeJobFlowResponse } from "./emr_models";
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
     * 创建EMR集群实例
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
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
     * 扩容节点
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 查询集群实例信息
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 创建流程作业
     */
    RunJobFlow(req: RunJobFlowRequest, cb?: (error: string, rep: RunJobFlowResponse) => void): Promise<RunJobFlowResponse>;
    /**
     * 销毁集群节点
     */
    TerminateClusterNodes(req: TerminateClusterNodesRequest, cb?: (error: string, rep: TerminateClusterNodesResponse) => void): Promise<TerminateClusterNodesResponse>;
    /**
     * 该接口支持安装了OpenLdap组件的集群。
批量导出用户。对于kerberos集群，如果需要kertab文件下载地址，可以将NeedKeytabInfo设置为true；注意SupportDownLoadKeyTab为true，但是DownLoadKeyTabUrl为空字符串，表示keytab文件在后台没有准备好（正在生成）。
     */
    DescribeUsersForUserManager(req: DescribeUsersForUserManagerRequest, cb?: (error: string, rep: DescribeUsersForUserManagerResponse) => void): Promise<DescribeUsersForUserManagerResponse>;
    /**
     * 删除用户列表（用户管理）

     */
    DeleteUserManagerUserList(req: DeleteUserManagerUserListRequest, cb?: (error: string, rep: DeleteUserManagerUserListResponse) => void): Promise<DeleteUserManagerUserListResponse>;
    /**
     * 该接口支持安装了OpenLdap组件的集群。
新增用户列表（用户管理）。
     */
    AddUsersForUserManager(req: AddUsersForUserManagerRequest, cb?: (error: string, rep: AddUsersForUserManagerResponse) => void): Promise<AddUsersForUserManagerResponse>;
    /**
     *  yarn application 统计接口查询
     */
    DescribeEmrApplicationStatics(req: DescribeEmrApplicationStaticsRequest, cb?: (error: string, rep: DescribeEmrApplicationStaticsResponse) => void): Promise<DescribeEmrApplicationStaticsResponse>;
    /**
     * 查询待续费节点信息
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
     * 查询YARN资源调度数据信息
     */
    DescribeResourceSchedule(req: DescribeResourceScheduleRequest, cb?: (error: string, rep: DescribeResourceScheduleResponse) => void): Promise<DescribeResourceScheduleResponse>;
    /**
     * 修改YARN资源调度的资源配置
     */
    ModifyResourceScheduleConfig(req: ModifyResourceScheduleConfigRequest, cb?: (error: string, rep: ModifyResourceScheduleConfigResponse) => void): Promise<ModifyResourceScheduleConfigResponse>;
    /**
     * 用于启动或停止监控或服务
     */
    StartStopServiceOrMonitor(req: StartStopServiceOrMonitorRequest, cb?: (error: string, rep: StartStopServiceOrMonitorResponse) => void): Promise<StartStopServiceOrMonitorResponse>;
    /**
     * 缩容Task节点
     */
    TerminateTasks(req: TerminateTasksRequest, cb?: (error: string, rep: TerminateTasksResponse) => void): Promise<TerminateTasksResponse>;
    /**
     * 查询集群节点信息
     */
    DescribeClusterNodes(req: DescribeClusterNodesRequest, cb?: (error: string, rep: DescribeClusterNodesResponse) => void): Promise<DescribeClusterNodesResponse>;
    /**
     * 查询集群列表
     */
    DescribeInstancesList(req: DescribeInstancesListRequest, cb?: (error: string, rep: DescribeInstancesListResponse) => void): Promise<DescribeInstancesListResponse>;
    /**
     * 刷新YARN的动态资源池
     */
    ModifyResourcePools(req: ModifyResourcePoolsRequest, cb?: (error: string, rep: ModifyResourcePoolsResponse) => void): Promise<ModifyResourcePoolsResponse>;
    /**
     * 扩容集群节点
     */
    ScaleOutCluster(req: ScaleOutClusterRequest, cb?: (error: string, rep: ScaleOutClusterResponse) => void): Promise<ScaleOutClusterResponse>;
}

import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeHBaseTableOverviewRequest, ScaleOutInstanceResponse, ModifyUserManagerPwdResponse, SyncPodStateResponse, CreateInstanceResponse, TerminateTasksRequest, ScaleOutClusterRequest, ModifyUserManagerPwdRequest, ScaleOutInstanceRequest, DescribeHBaseTableOverviewResponse, DescribeAutoScaleGroupGlobalConfRequest, ModifyAutoScaleStrategyRequest, ModifyResourceScheduleConfigResponse, AddUsersForUserManagerResponse, AddMetricScaleStrategyRequest, DescribeInstanceRenewNodesRequest, DescribeAutoScaleStrategiesResponse, InquiryPriceRenewInstanceResponse, DescribeJobFlowRequest, InquiryPriceCreateInstanceResponse, StartStopServiceOrMonitorRequest, DescribeResourceScheduleRequest, DescribeUsersForUserManagerRequest, DescribeInsightListRequest, RunJobFlowResponse, StartStopServiceOrMonitorResponse, DescribeHiveQueriesResponse, DescribeInstanceRenewNodesResponse, ModifyResourcesTagsResponse, DescribeAutoScaleGroupGlobalConfResponse, DescribeEmrApplicationStaticsRequest, DescribeClusterNodesResponse, DescribeYarnApplicationsRequest, InquiryPriceUpdateInstanceResponse, DeleteUserManagerUserListRequest, DescribeResourceScheduleResponse, TerminateInstanceRequest, TerminateClusterNodesResponse, ModifyResourceSchedulerRequest, RunJobFlowRequest, DescribeInsightListResponse, DescribeHiveQueriesRequest, DeleteAutoScaleStrategyResponse, CreateClusterResponse, DescribeAutoScaleRecordsResponse, DescribeCvmQuotaResponse, CreateClusterRequest, AddMetricScaleStrategyResponse, DescribeClusterNodesRequest, DescribeCvmQuotaRequest, DescribeImpalaQueriesRequest, CreateInstanceRequest, DescribeEmrOverviewMetricsResponse, DescribeInstancesRequest, InquiryPriceUpdateInstanceRequest, DescribeAutoScaleStrategiesRequest, TerminateClusterNodesRequest, DescribeInstancesListRequest, DeleteAutoScaleStrategyRequest, DescribeInstancesListResponse, DeleteUserManagerUserListResponse, ModifyResourcePoolsResponse, TerminateTasksResponse, DescribeInstancesResponse, DescribeYarnApplicationsResponse, DescribeUsersForUserManagerResponse, InquiryPriceRenewInstanceRequest, ModifyResourcesTagsRequest, InquirePriceRenewEmrResponse, AddUsersForUserManagerRequest, SyncPodStateRequest, InquiryPriceCreateInstanceRequest, ModifyResourceScheduleConfigRequest, DescribeEmrOverviewMetricsRequest, ScaleOutClusterResponse, ModifyAutoScaleStrategyResponse, InquiryPriceScaleOutInstanceRequest, DescribeEmrApplicationStaticsResponse, InquirePriceRenewEmrRequest, DescribeImpalaQueriesResponse, InquiryPriceScaleOutInstanceResponse, ModifyResourceSchedulerResponse, DescribeAutoScaleRecordsRequest, ModifyResourcePoolsRequest, DescribeJobFlowResponse, TerminateInstanceResponse } from "./emr_models";
/**
 * emr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * DescribeYarnApplications
     */
    DescribeYarnApplications(req: DescribeYarnApplicationsRequest, cb?: (error: string, rep: DescribeYarnApplicationsResponse) => void): Promise<DescribeYarnApplicationsResponse>;
    /**
     * 强制修改标签
     */
    ModifyResourcesTags(req: ModifyResourcesTagsRequest, cb?: (error: string, rep: ModifyResourcesTagsResponse) => void): Promise<ModifyResourcesTagsResponse>;
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
     * DescribeImpalaQueries
     */
    DescribeImpalaQueries(req: DescribeImpalaQueriesRequest, cb?: (error: string, rep: DescribeImpalaQueriesResponse) => void): Promise<DescribeImpalaQueriesResponse>;
    /**
     * 修改YARN资源调度的资源配置
     */
    ModifyResourceScheduleConfig(req: ModifyResourceScheduleConfigRequest, cb?: (error: string, rep: ModifyResourceScheduleConfigResponse) => void): Promise<ModifyResourceScheduleConfigResponse>;
    /**
     * 集群续费询价。
     */
    InquirePriceRenewEmr(req: InquirePriceRenewEmrRequest, cb?: (error: string, rep: InquirePriceRenewEmrResponse) => void): Promise<InquirePriceRenewEmrResponse>;
    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     */
    InquiryPriceScaleOutInstance(req: InquiryPriceScaleOutInstanceRequest, cb?: (error: string, rep: InquiryPriceScaleOutInstanceResponse) => void): Promise<InquiryPriceScaleOutInstanceResponse>;
    /**
     * 获取集群的自动扩缩容的详细记录
     */
    DescribeAutoScaleRecords(req: DescribeAutoScaleRecordsRequest, cb?: (error: string, rep: DescribeAutoScaleRecordsResponse) => void): Promise<DescribeAutoScaleRecordsResponse>;
    /**
     * 获取账户的CVM配额
     */
    DescribeCvmQuota(req: DescribeCvmQuotaRequest, cb?: (error: string, rep: DescribeCvmQuotaResponse) => void): Promise<DescribeCvmQuotaResponse>;
    /**
     * 扩容节点
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 修改用户密码（用户管理）
     */
    ModifyUserManagerPwd(req: ModifyUserManagerPwdRequest, cb?: (error: string, rep: ModifyUserManagerPwdResponse) => void): Promise<ModifyUserManagerPwdResponse>;
    /**
     * 获取Hbase表级监控数据概览接口
     */
    DescribeHBaseTableOverview(req: DescribeHBaseTableOverviewRequest, cb?: (error: string, rep: DescribeHBaseTableOverviewResponse) => void): Promise<DescribeHBaseTableOverviewResponse>;
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
     * 修改自动扩缩容规则
     */
    ModifyAutoScaleStrategy(req: ModifyAutoScaleStrategyRequest, cb?: (error: string, rep: ModifyAutoScaleStrategyResponse) => void): Promise<ModifyAutoScaleStrategyResponse>;
    /**
     * 删除自动扩缩容规则，后台销毁根据该规则扩缩容出来的节点
     */
    DeleteAutoScaleStrategy(req: DeleteAutoScaleStrategyRequest, cb?: (error: string, rep: DeleteAutoScaleStrategyResponse) => void): Promise<DeleteAutoScaleStrategyResponse>;
    /**
     * yarn application 统计接口查询
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
     * 用于启停服务 重启服务等功能
     */
    StartStopServiceOrMonitor(req: StartStopServiceOrMonitorRequest, cb?: (error: string, rep: StartStopServiceOrMonitorResponse) => void): Promise<StartStopServiceOrMonitorResponse>;
    /**
     * 创建EMR集群实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 创建实例询价
     */
    InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse>;
    /**
     * 添加扩缩容规则，按负载和时间
     */
    AddMetricScaleStrategy(req: AddMetricScaleStrategyRequest, cb?: (error: string, rep: AddMetricScaleStrategyResponse) => void): Promise<AddMetricScaleStrategyResponse>;
    /**
     * 查询流程任务
     */
    DescribeJobFlow(req: DescribeJobFlowRequest, cb?: (error: string, rep: DescribeJobFlowResponse) => void): Promise<DescribeJobFlowResponse>;
    /**
     * 获取hive查询信息
     */
    DescribeHiveQueries(req: DescribeHiveQueriesRequest, cb?: (error: string, rep: DescribeHiveQueriesResponse) => void): Promise<DescribeHiveQueriesResponse>;
    /**
     * 查询监控概览页指标数据
     */
    DescribeEmrOverviewMetrics(req: DescribeEmrOverviewMetricsRequest, cb?: (error: string, rep: DescribeEmrOverviewMetricsResponse) => void): Promise<DescribeEmrOverviewMetricsResponse>;
    /**
     * 缩容Task节点
     */
    TerminateTasks(req: TerminateTasksRequest, cb?: (error: string, rep: TerminateTasksResponse) => void): Promise<TerminateTasksResponse>;
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     */
    TerminateInstance(req: TerminateInstanceRequest, cb?: (error: string, rep: TerminateInstanceResponse) => void): Promise<TerminateInstanceResponse>;
    /**
     * 获取自动扩缩容规则
     */
    DescribeAutoScaleStrategies(req: DescribeAutoScaleStrategiesRequest, cb?: (error: string, rep: DescribeAutoScaleStrategiesResponse) => void): Promise<DescribeAutoScaleStrategiesResponse>;
    /**
     * 查询YARN资源调度数据信息
     */
    DescribeResourceSchedule(req: DescribeResourceScheduleRequest, cb?: (error: string, rep: DescribeResourceScheduleResponse) => void): Promise<DescribeResourceScheduleResponse>;
    /**
     * 获取自动扩缩容全局配置
     */
    DescribeAutoScaleGroupGlobalConf(req: DescribeAutoScaleGroupGlobalConfRequest, cb?: (error: string, rep: DescribeAutoScaleGroupGlobalConfResponse) => void): Promise<DescribeAutoScaleGroupGlobalConfResponse>;
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
     * 获取洞察结果信息
     */
    DescribeInsightList(req: DescribeInsightListRequest, cb?: (error: string, rep: DescribeInsightListResponse) => void): Promise<DescribeInsightListResponse>;
    /**
     * 扩容集群节点
     */
    ScaleOutCluster(req: ScaleOutClusterRequest, cb?: (error: string, rep: ScaleOutClusterResponse) => void): Promise<ScaleOutClusterResponse>;
}

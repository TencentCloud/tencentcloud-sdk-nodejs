import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { AddNodeResourceConfigRequest, ModifyResourceResponse, DescribeHBaseTableOverviewRequest, DescribeClusterFlowStatusDetailResponse, RunJobFlowResponse, DescribeHDFSStorageInfoResponse, ModifyUserManagerPwdResponse, DescribeHiveQueriesRequest, ModifyPodNumResponse, CreateInstanceResponse, TerminateTasksRequest, DescribeServiceNodeInfosRequest, DescribeServiceNodeInfosResponse, ResetYarnConfigRequest, DescribeTrinoQueryInfoResponse, DescribeSparkQueriesRequest, DeleteAutoScaleStrategyResponse, ModifyPodNumRequest, ModifyResourcesTagsResponse, CreateCloudInstanceResponse, ScaleOutInstanceRequest, DescribeInstanceRenewNodesResponse, DescribeHBaseTableOverviewResponse, DescribeAutoScaleGroupGlobalConfRequest, ModifyAutoScaleStrategyRequest, AttachDisksRequest, DescribeInstancesResponse, ModifyYarnDeployResponse, ModifyResourceScheduleConfigResponse, DescribeKyuubiQueryInfoResponse, TerminateSLInstanceRequest, AddUsersForUserManagerResponse, DescribeResourceScheduleDiffDetailResponse, DescribeYarnQueueResponse, ScaleOutInstanceResponse, AddMetricScaleStrategyRequest, DeleteNodeResourceConfigRequest, DescribeInstancesListResponse, DescribeInstanceRenewNodesRequest, DescribeSparkQueriesResponse, DescribeAutoScaleStrategiesResponse, DescribeNodeDataDisksRequest, ModifyGlobalConfigRequest, InquiryPriceRenewInstanceResponse, DescribeJobFlowRequest, InquiryPriceCreateInstanceResponse, StartStopServiceOrMonitorRequest, DescribeHDFSStorageInfoRequest, DescribeResourceScheduleRequest, SyncPodStateResponse, DescribeGlobalConfigResponse, ModifyYarnDeployRequest, DeleteNodeResourceConfigResponse, DescribeClusterFlowStatusDetailRequest, DescribeUsersForUserManagerRequest, TerminateClusterNodesResponse, DescribeDAGInfoResponse, DescribeInsightListRequest, DescribeSLInstanceListRequest, StartStopServiceOrMonitorResponse, DescribeHiveQueriesResponse, ResizeDataDisksResponse, DescribeYarnQueueRequest, ModifyResourceRequest, CreateSLInstanceResponse, SetNodeResourceConfigDefaultRequest, DescribeYarnScheduleHistoryResponse, DescribeDAGInfoRequest, DescribeAutoScaleGroupGlobalConfResponse, ResetYarnConfigResponse, DescribeClusterNodesResponse, DescribeYarnApplicationsRequest, DescribeYarnScheduleHistoryRequest, DeleteUserManagerUserListRequest, DescribeResourceScheduleResponse, TerminateInstanceRequest, DescribeNodeResourceConfigFastRequest, ModifyResourceSchedulerRequest, RunJobFlowRequest, DescribeKyuubiQueryInfoRequest, ModifyGlobalConfigResponse, DescribeNodeResourceConfigFastResponse, ModifySLInstanceRequest, DescribeInsightListResponse, CreateClusterResponse, DescribeAutoScaleRecordsResponse, DescribeCvmQuotaResponse, CreateClusterRequest, CreateCloudInstanceRequest, AddMetricScaleStrategyResponse, DescribeClusterNodesRequest, ModifyInstanceBasicResponse, ModifyYarnQueueV2Request, DescribeCvmQuotaRequest, DescribeImpalaQueriesRequest, CreateInstanceRequest, DescribeSLInstanceListResponse, DescribeEmrOverviewMetricsResponse, DescribeInstancesRequest, TerminateSLInstanceResponse, ModifyAutoRenewFlagResponse, InquiryPriceUpdateInstanceRequest, DescribeAutoScaleStrategiesRequest, DeployYarnConfRequest, DescribeNodeDataDisksResponse, DescribeInstancesListRequest, AttachDisksResponse, ResizeDataDisksRequest, DeleteAutoScaleStrategyRequest, DeployYarnConfResponse, DeleteUserManagerUserListResponse, ModifyResourcePoolsResponse, DescribeEmrApplicationStaticsRequest, ModifyInstanceBasicRequest, DescribeYarnApplicationsResponse, DescribeUsersForUserManagerResponse, DescribeResourceScheduleDiffDetailRequest, InquiryPriceRenewInstanceRequest, ModifyResourcesTagsRequest, InquirePriceRenewEmrResponse, AddUsersForUserManagerRequest, DescribeSLInstanceRequest, ScaleOutClusterRequest, InquiryPriceCreateInstanceRequest, DescribeSLInstanceResponse, SyncPodStateRequest, ModifyAutoRenewFlagRequest, AddNodeResourceConfigResponse, ModifyResourceScheduleConfigRequest, DescribeEmrOverviewMetricsRequest, ScaleOutClusterResponse, InquiryPriceUpdateInstanceResponse, ModifyAutoScaleStrategyResponse, InquiryPriceScaleOutInstanceRequest, DescribeStarRocksQueryInfoRequest, ModifySLInstanceResponse, DescribeEmrApplicationStaticsResponse, InquirePriceRenewEmrRequest, DescribeImpalaQueriesResponse, SetNodeResourceConfigDefaultResponse, DescribeStarRocksQueryInfoResponse, ModifyYarnQueueV2Response, ModifyUserManagerPwdRequest, InquiryPriceScaleOutInstanceResponse, DescribeJobFlowResponse, ModifyResourceSchedulerResponse, DescribeTrinoQueryInfoRequest, TerminateTasksResponse, DescribeAutoScaleRecordsRequest, TerminateClusterNodesRequest, ModifyResourcePoolsRequest, CreateSLInstanceRequest, DescribeGlobalConfigRequest, TerminateInstanceResponse } from "./emr_models";
/**
 * emr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询待续费节点信息
     */
    DescribeInstanceRenewNodes(req: DescribeInstanceRenewNodesRequest, cb?: (error: string, rep: DescribeInstanceRenewNodesResponse) => void): Promise<DescribeInstanceRenewNodesResponse>;
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
     * 获取资源调度中的队列信息
     */
    DescribeYarnQueue(req: DescribeYarnQueueRequest, cb?: (error: string, rep: DescribeYarnQueueResponse) => void): Promise<DescribeYarnQueueResponse>;
    /**
     * 修改资源调度中队列信息
     */
    ModifyYarnQueueV2(req: ModifyYarnQueueV2Request, cb?: (error: string, rep: ModifyYarnQueueV2Response) => void): Promise<ModifyYarnQueueV2Response>;
    /**
     * 创建EMR容器集群实例
     */
    CreateCloudInstance(req: CreateCloudInstanceRequest, cb?: (error: string, rep: CreateCloudInstanceResponse) => void): Promise<CreateCloudInstanceResponse>;
    /**
     * yarn资源调度-部署生效
     */
    DeployYarnConf(req: DeployYarnConfRequest, cb?: (error: string, rep: DeployYarnConfResponse) => void): Promise<DeployYarnConfResponse>;
    /**
     * 查询EMR任务运行详情状态
     */
    DescribeClusterFlowStatusDetail(req: DescribeClusterFlowStatusDetailRequest, cb?: (error: string, rep: DescribeClusterFlowStatusDetailResponse) => void): Promise<DescribeClusterFlowStatusDetailResponse>;
    /**
     * EMR同步TKE中POD状态
     */
    SyncPodState(req: SyncPodStateRequest, cb?: (error: string, rep: SyncPodStateResponse) => void): Promise<SyncPodStateResponse>;
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
     * DescribeYarnApplications
     */
    DescribeYarnApplications(req: DescribeYarnApplicationsRequest, cb?: (error: string, rep: DescribeYarnApplicationsResponse) => void): Promise<DescribeYarnApplicationsResponse>;
    /**
     * 修改YARN资源调度的全局配置
     */
    ModifyGlobalConfig(req: ModifyGlobalConfigRequest, cb?: (error: string, rep: ModifyGlobalConfigResponse) => void): Promise<ModifyGlobalConfigResponse>;
    /**
     * 扩容节点
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 云盘挂载
     */
    AttachDisks(req: AttachDisksRequest, cb?: (error: string, rep: AttachDisksResponse) => void): Promise<AttachDisksResponse>;
    /**
     * 设置当前集群的某个节点规格配置为默认或取消默认
     */
    SetNodeResourceConfigDefault(req: SetNodeResourceConfigDefaultRequest, cb?: (error: string, rep: SetNodeResourceConfigDefaultResponse) => void): Promise<SetNodeResourceConfigDefaultResponse>;
    /**
     * 查询YARN资源调度数据信息。已废弃，请使用`DescribeYarnQueue`去查询队列信息。
     */
    DescribeResourceSchedule(req: DescribeResourceScheduleRequest, cb?: (error: string, rep: DescribeResourceScheduleResponse) => void): Promise<DescribeResourceScheduleResponse>;
    /**
     * 查询StarRocks查询信息
     */
    DescribeStarRocksQueryInfo(req: DescribeStarRocksQueryInfoRequest, cb?: (error: string, rep: DescribeStarRocksQueryInfoResponse) => void): Promise<DescribeStarRocksQueryInfoResponse>;
    /**
     * 获取Hbase表级监控数据概览接口
     */
    DescribeHBaseTableOverview(req: DescribeHBaseTableOverviewRequest, cb?: (error: string, rep: DescribeHBaseTableOverviewResponse) => void): Promise<DescribeHBaseTableOverviewResponse>;
    /**
     * 查询服务进程信息
     */
    DescribeServiceNodeInfos(req: DescribeServiceNodeInfosRequest, cb?: (error: string, rep: DescribeServiceNodeInfosResponse) => void): Promise<DescribeServiceNodeInfosResponse>;
    /**
     * 查询集群实例信息
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 部署生效。已废弃，请使用`DeployYarnConf`接口进行部署生效
     */
    ModifyYarnDeploy(req: ModifyYarnDeployRequest, cb?: (error: string, rep: ModifyYarnDeployResponse) => void): Promise<ModifyYarnDeployResponse>;
    /**
     * 查询DAG信息
     */
    DescribeDAGInfo(req: DescribeDAGInfoRequest, cb?: (error: string, rep: DescribeDAGInfoResponse) => void): Promise<DescribeDAGInfoResponse>;
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     */
    TerminateInstance(req: TerminateInstanceRequest, cb?: (error: string, rep: TerminateInstanceResponse) => void): Promise<TerminateInstanceResponse>;
    /**
     * 销毁集群节点
     */
    TerminateClusterNodes(req: TerminateClusterNodesRequest, cb?: (error: string, rep: TerminateClusterNodesResponse) => void): Promise<TerminateClusterNodesResponse>;
    /**
     * 修改YARN资源调度的资源配置
     */
    ResetYarnConfig(req: ResetYarnConfigRequest, cb?: (error: string, rep: ResetYarnConfigResponse) => void): Promise<ResetYarnConfigResponse>;
    /**
     * 该接口支持安装了OpenLdap组件的集群。
批量导出用户。对于kerberos集群，如果需要kertab文件下载地址，可以将NeedKeytabInfo设置为true；注意SupportDownLoadKeyTab为true，但是DownLoadKeyTabUrl为空字符串，表示keytab文件在后台没有准备好（正在生成）。
     */
    DescribeUsersForUserManager(req: DescribeUsersForUserManagerRequest, cb?: (error: string, rep: DescribeUsersForUserManagerResponse) => void): Promise<DescribeUsersForUserManagerResponse>;
    /**
     * 修改用户密码（用户管理）
     */
    ModifyUserManagerPwd(req: ModifyUserManagerPwdRequest, cb?: (error: string, rep: ModifyUserManagerPwdResponse) => void): Promise<ModifyUserManagerPwdResponse>;
    /**
     * 删除用户列表（用户管理）
     */
    DeleteUserManagerUserList(req: DeleteUserManagerUserListRequest, cb?: (error: string, rep: DeleteUserManagerUserListResponse) => void): Promise<DeleteUserManagerUserListResponse>;
    /**
     * 本接口（TerminateSLInstance）用于销毁Serverless HBase实例
     */
    TerminateSLInstance(req: TerminateSLInstanceRequest, cb?: (error: string, rep: TerminateSLInstanceResponse) => void): Promise<TerminateSLInstanceResponse>;
    /**
     * 该接口支持安装了OpenLdap组件的集群。
新增用户列表（用户管理）。
     */
    AddUsersForUserManager(req: AddUsersForUserManagerRequest, cb?: (error: string, rep: AddUsersForUserManagerResponse) => void): Promise<AddUsersForUserManagerResponse>;
    /**
     * 缩容Task节点
     */
    TerminateTasks(req: TerminateTasksRequest, cb?: (error: string, rep: TerminateTasksResponse) => void): Promise<TerminateTasksResponse>;
    /**
     * 前提：预付费集群
资源级别开启或关闭自动续费
     */
    ModifyAutoRenewFlag(req: ModifyAutoRenewFlagRequest, cb?: (error: string, rep: ModifyAutoRenewFlagResponse) => void): Promise<ModifyAutoRenewFlagResponse>;
    /**
     * 本接口（CreateSLInstance）用于创建Serverless HBase实例
- 接口调用成功，会创建Serverless HBase实例，创建实例请求成功会返回创建实例的InstaceId和请求的 RequestID。
- 接口为异步接口，接口返回时操作并未立即完成，实例操作结果可以通过调用DescribeInstancesList查看当前实例的StatusDesc状态。
     */
    CreateSLInstance(req: CreateSLInstanceRequest, cb?: (error: string, rep: CreateSLInstanceResponse) => void): Promise<CreateSLInstanceResponse>;
    /**
     * 本接口（DescribeSLInstanceList）用于查询Serverless HBase实例列表详细信息
     */
    DescribeSLInstanceList(req: DescribeSLInstanceListRequest, cb?: (error: string, rep: DescribeSLInstanceListResponse) => void): Promise<DescribeSLInstanceListResponse>;
    /**
     * 云盘扩容
     */
    ResizeDataDisks(req: ResizeDataDisksRequest, cb?: (error: string, rep: ResizeDataDisksResponse) => void): Promise<ResizeDataDisksResponse>;
    /**
     * 修改自动扩缩容规则
     */
    ModifyAutoScaleStrategy(req: ModifyAutoScaleStrategyRequest, cb?: (error: string, rep: ModifyAutoScaleStrategyResponse) => void): Promise<ModifyAutoScaleStrategyResponse>;
    /**
     * 查询Kyuubi查询信息
     */
    DescribeKyuubiQueryInfo(req: DescribeKyuubiQueryInfoRequest, cb?: (error: string, rep: DescribeKyuubiQueryInfoResponse) => void): Promise<DescribeKyuubiQueryInfoResponse>;
    /**
     * 删除自动扩缩容规则，后台销毁根据该规则扩缩容出来的节点
     */
    DeleteAutoScaleStrategy(req: DeleteAutoScaleStrategyRequest, cb?: (error: string, rep: DeleteAutoScaleStrategyResponse) => void): Promise<DeleteAutoScaleStrategyResponse>;
    /**
     * yarn application 统计接口查询
     */
    DescribeEmrApplicationStatics(req: DescribeEmrApplicationStaticsRequest, cb?: (error: string, rep: DescribeEmrApplicationStaticsResponse) => void): Promise<DescribeEmrApplicationStaticsResponse>;
    /**
     * 查询HDFS存储文件信息
     */
    DescribeHDFSStorageInfo(req: DescribeHDFSStorageInfoRequest, cb?: (error: string, rep: DescribeHDFSStorageInfoResponse) => void): Promise<DescribeHDFSStorageInfoResponse>;
    /**
     * 用于启停服务 重启服务等功能
     */
    StartStopServiceOrMonitor(req: StartStopServiceOrMonitorRequest, cb?: (error: string, rep: StartStopServiceOrMonitorResponse) => void): Promise<StartStopServiceOrMonitorResponse>;
    /**
     * 修改了yarn的资源调度器，点击部署生效。
     */
    ModifyResourceScheduler(req: ModifyResourceSchedulerRequest, cb?: (error: string, rep: ModifyResourceSchedulerResponse) => void): Promise<ModifyResourceSchedulerResponse>;
    /**
     * 快速获取当前集群的节点规格配置
     */
    DescribeNodeResourceConfigFast(req: DescribeNodeResourceConfigFastRequest, cb?: (error: string, rep: DescribeNodeResourceConfigFastResponse) => void): Promise<DescribeNodeResourceConfigFastResponse>;
    /**
     * YARN资源调度-变更详情
     */
    DescribeResourceScheduleDiffDetail(req: DescribeResourceScheduleDiffDetailRequest, cb?: (error: string, rep: DescribeResourceScheduleDiffDetailResponse) => void): Promise<DescribeResourceScheduleDiffDetailResponse>;
    /**
     * 本接口（DescribeSLInstance）用于查询 Serverless HBase实例基本信息
     */
    DescribeSLInstance(req: DescribeSLInstanceRequest, cb?: (error: string, rep: DescribeSLInstanceResponse) => void): Promise<DescribeSLInstanceResponse>;
    /**
     * 查询Spark查询信息列表
     */
    DescribeSparkQueries(req: DescribeSparkQueriesRequest, cb?: (error: string, rep: DescribeSparkQueriesResponse) => void): Promise<DescribeSparkQueriesResponse>;
    /**
     * 创建EMR集群实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 创建实例询价
     */
    InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse>;
    /**
     * 查询YARN资源调度的全局配置
     */
    DescribeGlobalConfig(req: DescribeGlobalConfigRequest, cb?: (error: string, rep: DescribeGlobalConfigResponse) => void): Promise<DescribeGlobalConfigResponse>;
    /**
     * 查看yarn资源调度的调度历史。废弃，请使用流程中心查看历史记录。
     */
    DescribeYarnScheduleHistory(req: DescribeYarnScheduleHistoryRequest, cb?: (error: string, rep: DescribeYarnScheduleHistoryResponse) => void): Promise<DescribeYarnScheduleHistoryResponse>;
    /**
     * 修改YARN资源调度的资源配置。已废弃，请使用`ModifyYarnQueueV2`来修改队列配置
     */
    ModifyResourceScheduleConfig(req: ModifyResourceScheduleConfigRequest, cb?: (error: string, rep: ModifyResourceScheduleConfigResponse) => void): Promise<ModifyResourceScheduleConfigResponse>;
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
     * 增加当前集群的节点规格配置
     */
    AddNodeResourceConfig(req: AddNodeResourceConfigRequest, cb?: (error: string, rep: AddNodeResourceConfigResponse) => void): Promise<AddNodeResourceConfigResponse>;
    /**
     * 集群续费询价。
     */
    InquirePriceRenewEmr(req: InquirePriceRenewEmrRequest, cb?: (error: string, rep: InquirePriceRenewEmrResponse) => void): Promise<InquirePriceRenewEmrResponse>;
    /**
     * 变配实例
     */
    ModifyResource(req: ModifyResourceRequest, cb?: (error: string, rep: ModifyResourceResponse) => void): Promise<ModifyResourceResponse>;
    /**
     * 本接口（ModifySLInstance）用于Serverless HBase变配实例。
- 接口调用成功，会创建Serverless HBase实例，创建实例请求成功会返回请求的 RequestID。
- 接口为异步接口，接口返回时操作并未立即完成，实例操作结果可以通过调用DescribeInstancesList查看当前实例的StatusDesc状态。
     */
    ModifySLInstance(req: ModifySLInstanceRequest, cb?: (error: string, rep: ModifySLInstanceResponse) => void): Promise<ModifySLInstanceResponse>;
    /**
     * 查询节点数据盘信息
     */
    DescribeNodeDataDisks(req: DescribeNodeDataDisksRequest, cb?: (error: string, rep: DescribeNodeDataDisksResponse) => void): Promise<DescribeNodeDataDisksResponse>;
    /**
     * 获取自动扩缩容规则
     */
    DescribeAutoScaleStrategies(req: DescribeAutoScaleStrategiesRequest, cb?: (error: string, rep: DescribeAutoScaleStrategiesResponse) => void): Promise<DescribeAutoScaleStrategiesResponse>;
    /**
     * 添加扩缩容规则，按负载和时间
     */
    AddMetricScaleStrategy(req: AddMetricScaleStrategyRequest, cb?: (error: string, rep: AddMetricScaleStrategyResponse) => void): Promise<AddMetricScaleStrategyResponse>;
    /**
     * 获取自动扩缩容全局配置
     */
    DescribeAutoScaleGroupGlobalConf(req: DescribeAutoScaleGroupGlobalConfRequest, cb?: (error: string, rep: DescribeAutoScaleGroupGlobalConfResponse) => void): Promise<DescribeAutoScaleGroupGlobalConfResponse>;
    /**
     * 查询集群节点信息
     */
    DescribeClusterNodes(req: DescribeClusterNodesRequest, cb?: (error: string, rep: DescribeClusterNodesResponse) => void): Promise<DescribeClusterNodesResponse>;
    /**
     * 查询Trino(PrestoSQL)查询信息
     */
    DescribeTrinoQueryInfo(req: DescribeTrinoQueryInfoRequest, cb?: (error: string, rep: DescribeTrinoQueryInfoResponse) => void): Promise<DescribeTrinoQueryInfoResponse>;
    /**
     * 查询集群列表
     */
    DescribeInstancesList(req: DescribeInstancesListRequest, cb?: (error: string, rep: DescribeInstancesListResponse) => void): Promise<DescribeInstancesListResponse>;
    /**
     * 刷新YARN的动态资源池。已废弃，请使用`DeployYarnConf`
     */
    ModifyResourcePools(req: ModifyResourcePoolsRequest, cb?: (error: string, rep: ModifyResourcePoolsResponse) => void): Promise<ModifyResourcePoolsResponse>;
    /**
     * 获取洞察结果信息
     */
    DescribeInsightList(req: DescribeInsightListRequest, cb?: (error: string, rep: DescribeInsightListResponse) => void): Promise<DescribeInsightListResponse>;
    /**
     * 删除当前集群的节点规格配置
     */
    DeleteNodeResourceConfig(req: DeleteNodeResourceConfigRequest, cb?: (error: string, rep: DeleteNodeResourceConfigResponse) => void): Promise<DeleteNodeResourceConfigResponse>;
    /**
     * 修改集群名称
     */
    ModifyInstanceBasic(req: ModifyInstanceBasicRequest, cb?: (error: string, rep: ModifyInstanceBasicResponse) => void): Promise<ModifyInstanceBasicResponse>;
    /**
     * 调整Pod数量
     */
    ModifyPodNum(req: ModifyPodNumRequest, cb?: (error: string, rep: ModifyPodNumResponse) => void): Promise<ModifyPodNumResponse>;
    /**
     * 扩容集群节点
     */
    ScaleOutCluster(req: ScaleOutClusterRequest, cb?: (error: string, rep: ScaleOutClusterResponse) => void): Promise<ScaleOutClusterResponse>;
    /**
     * 创建流程作业
     */
    RunJobFlow(req: RunJobFlowRequest, cb?: (error: string, rep: RunJobFlowResponse) => void): Promise<RunJobFlowResponse>;
}

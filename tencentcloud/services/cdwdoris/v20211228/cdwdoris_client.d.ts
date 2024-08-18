import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDatabaseAuditResourceRequest, DescribeDorisMetricFilesResponse, DescribeInstanceUsedSubnetsResponse, DescribeFrontEndRequest, CreateInstanceNewResponse, DescribeClusterConfigsHistoryResponse, DescribeInstanceOperationsRequest, DescribeClusterConfigsResponse, ScaleOutInstanceResponse, ModifyUserPrivilegesV3Response, DescribeFederationTokenRequest, ModifyWorkloadGroupStatusResponse, CancelBackupJobRequest, ModifyWorkloadGroupRequest, DescribeSlowQueryRecordsDownloadResponse, DeleteWorkloadGroupRequest, FitClsLogRequest, DescribeDmsSqlHistoryRequest, DescribeFederationTokenResponse, ReduceInstanceResponse, DescribeBackUpTaskDetailRequest, RecoverBackUpJobRequest, DescribeInstanceOperationsResponse, DescribeUserBindWorkloadGroupResponse, ScaleOutInstanceRequest, DescribeInstanceStateRequest, OpenBackUpResponse, DescribeRestoreTaskDetailResponse, DeleteBackUpDataRequest, ResizeDiskResponse, ModifyInstanceResponse, DescribeSlowQueryRecordsDownloadRequest, DescribeAreaRegionResponse, DescribeDorisMetricFilesRequest, ModifyNodeStatusRequest, RestartClusterForNodeResponse, CancelBackupJobResponse, DescribeAreaRegionRequest, DescribeInstanceNodesRequest, DescribeWorkloadGroupRequest, OpenBackUpRequest, DescribeInstanceNodesResponse, DescribeSqlApisRequest, ModifySecurityGroupsRequest, CreateInstanceNewRequest, DescribeDmsSqlHistoryResponse, DescribeSlowQueryRecordsResponse, DescribeRegionZoneResponse, CreateBackUpScheduleRequest, DescribeClusterConfigsHistoryRequest, DescribeInstanceStateResponse, DescribeInstanceNodesInfoRequest, DescribeInstancesHealthStateResponse, DescribeSlowQueryRecordsRequest, DescribeInstanceNodesRoleResponse, DestroyInstanceResponse, DescribeBackUpJobRequest, ResizeDiskRequest, ModifyWorkloadGroupStatusRequest, DescribeRegionZoneRequest, DescribeDatabaseAuditResourceResponse, ModifyUserBindWorkloadGroupRequest, DescribeSqlApisResponse, ModifyInstanceRequest, DescribeSpecResponse, ModifyInstanceKeyValConfigsResponse, DescribeBackUpSchedulesResponse, DescribeBackUpTablesResponse, DescribeDatabaseAuditRecordsResponse, DescribeInstancesHealthStateRequest, RestartClusterForConfigsResponse, ModifySecurityGroupsResponse, DescribeUserBindWorkloadGroupRequest, ScaleUpInstanceRequest, DescribeInstancesRequest, DescribeBackUpSchedulesRequest, DescribeClusterConfigsRequest, ModifyWorkloadGroupResponse, DescribeRestoreTaskDetailRequest, ModifyUserPrivilegesV3Request, CreateBackUpScheduleResponse, ModifyNodeStatusResponse, DescribeInstanceResponse, DescribeBackUpJobResponse, FitClsLogResponse, RestartClusterForNodeRequest, DescribeInstancesResponse, DescribeInstanceUsedSubnetsRequest, DescribeDatabaseAuditRecordsRequest, DescribeBackUpJobDetailResponse, DescribeBackUpJobDetailRequest, DescribeTableListRequest, DescribeWorkloadGroupResponse, DescribeInstanceRequest, DescribeBackUpTaskDetailResponse, ReduceInstanceRequest, DeleteWorkloadGroupResponse, RestartClusterForConfigsRequest, DestroyInstanceRequest, CreateWorkloadGroupResponse, CreateWorkloadGroupRequest, DescribeGoodsDetailResponse, DeleteBackUpDataResponse, ModifyInstanceKeyValConfigsRequest, ModifyUserBindWorkloadGroupResponse, RecoverBackUpJobResponse, DescribeTableListResponse, DescribeReplicaVersionRequest, DescribeDatabaseAuditDownloadRequest, DescribeFrontEndResponse, DescribeGoodsDetailRequest, DescribeSpecRequest, DescribeBackUpTablesRequest, DescribeInstanceNodesRoleRequest, DescribeDatabaseAuditDownloadResponse, DescribeReplicaVersionResponse, DescribeInstanceNodesInfoResponse, ScaleUpInstanceResponse } from "./cdwdoris_models";
/**
 * cdwdoris client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建或者修改备份策略
     */
    CreateBackUpSchedule(req: CreateBackUpScheduleRequest, cb?: (error: string, rep: CreateBackUpScheduleResponse) => void): Promise<CreateBackUpScheduleResponse>;
    /**
     * 查询前端内容
     */
    DescribeFrontEnd(req: DescribeFrontEndRequest, cb?: (error: string, rep: DescribeFrontEndResponse) => void): Promise<DescribeFrontEndResponse>;
    /**
     * 获取备份、迁移的调度任务信息
     */
    DescribeBackUpSchedules(req?: DescribeBackUpSchedulesRequest, cb?: (error: string, rep: DescribeBackUpSchedulesResponse) => void): Promise<DescribeBackUpSchedulesResponse>;
    /**
     * 查询备份实例列表
     */
    DescribeBackUpJob(req: DescribeBackUpJobRequest, cb?: (error: string, rep: DescribeBackUpJobResponse) => void): Promise<DescribeBackUpJobResponse>;
    /**
     * 销毁集群
     */
    DestroyInstance(req: DestroyInstanceRequest, cb?: (error: string, rep: DestroyInstanceResponse) => void): Promise<DestroyInstanceResponse>;
    /**
     * 展示监控指标文件
     */
    DescribeDorisMetricFiles(req: DescribeDorisMetricFilesRequest, cb?: (error: string, rep: DescribeDorisMetricFilesResponse) => void): Promise<DescribeDorisMetricFilesResponse>;
    /**
     * 获取数据库审计记录
     */
    DescribeDatabaseAuditRecords(req: DescribeDatabaseAuditRecordsRequest, cb?: (error: string, rep: DescribeDatabaseAuditRecordsResponse) => void): Promise<DescribeDatabaseAuditRecordsResponse>;
    /**
     * 查询恢复任务进度详情
     */
    DescribeRestoreTaskDetail(req: DescribeRestoreTaskDetailRequest, cb?: (error: string, rep: DescribeRestoreTaskDetailResponse) => void): Promise<DescribeRestoreTaskDetailResponse>;
    /**
     * 创建资源组
     */
    CreateWorkloadGroup(req: CreateWorkloadGroupRequest, cb?: (error: string, rep: CreateWorkloadGroupResponse) => void): Promise<CreateWorkloadGroupResponse>;
    /**
     * 下载数据库审计日志
     */
    DescribeDatabaseAuditDownload(req: DescribeDatabaseAuditDownloadRequest, cb?: (error: string, rep: DescribeDatabaseAuditDownloadResponse) => void): Promise<DescribeDatabaseAuditDownloadResponse>;
    /**
     * 获取当前集群各用户绑定的资源信息
     */
    DescribeUserBindWorkloadGroup(req: DescribeUserBindWorkloadGroupRequest, cb?: (error: string, rep: DescribeUserBindWorkloadGroupResponse) => void): Promise<DescribeUserBindWorkloadGroupResponse>;
    /**
     * 获取BE/FE节点角色
     */
    DescribeInstanceNodesInfo(req: DescribeInstanceNodesInfoRequest, cb?: (error: string, rep: DescribeInstanceNodesInfoResponse) => void): Promise<DescribeInstanceNodesInfoResponse>;
    /**
     * 获取集群已使用子网信息
     */
    DescribeInstanceUsedSubnets(req: DescribeInstanceUsedSubnetsRequest, cb?: (error: string, rep: DescribeInstanceUsedSubnetsResponse) => void): Promise<DescribeInstanceUsedSubnetsResponse>;
    /**
     * 获取指定数据源和库下的表列表
     */
    DescribeTableList(req: DescribeTableListRequest, cb?: (error: string, rep: DescribeTableListResponse) => void): Promise<DescribeTableListResponse>;
    /**
     * 获取可备份表信息
     */
    DescribeBackUpTables(req: DescribeBackUpTablesRequest, cb?: (error: string, rep: DescribeBackUpTablesResponse) => void): Promise<DescribeBackUpTablesResponse>;
    /**
     * 购买页获取地域及可用区列表、内核版本、网络规则等
     */
    DescribeRegionZone(req: DescribeRegionZoneRequest, cb?: (error: string, rep: DescribeRegionZoneResponse) => void): Promise<DescribeRegionZoneResponse>;
    /**
     * 修改节点状态
     */
    ModifyNodeStatus(req: ModifyNodeStatusRequest, cb?: (error: string, rep: ModifyNodeStatusResponse) => void): Promise<ModifyNodeStatusResponse>;
    /**
     * 获取集群配置文件修改历史
     */
    DescribeClusterConfigsHistory(req: DescribeClusterConfigsHistoryRequest, cb?: (error: string, rep: DescribeClusterConfigsHistoryResponse) => void): Promise<DescribeClusterConfigsHistoryResponse>;
    /**
     * 获取慢查询列表
     */
    DescribeSlowQueryRecords(req: DescribeSlowQueryRecordsRequest, cb?: (error: string, rep: DescribeSlowQueryRecordsResponse) => void): Promise<DescribeSlowQueryRecordsResponse>;
    /**
     * 开启或关闭资源组
     */
    ModifyWorkloadGroupStatus(req: ModifyWorkloadGroupStatusRequest, cb?: (error: string, rep: ModifyWorkloadGroupStatusResponse) => void): Promise<ModifyWorkloadGroupStatusResponse>;
    /**
     * 修改用户绑定的资源组
     */
    ModifyUserBindWorkloadGroup(req: ModifyUserBindWorkloadGroupRequest, cb?: (error: string, rep: ModifyUserBindWorkloadGroupResponse) => void): Promise<ModifyUserBindWorkloadGroupResponse>;
    /**
     * 删除备份数据
     */
    DeleteBackUpData(req: DeleteBackUpDataRequest, cb?: (error: string, rep: DeleteBackUpDataResponse) => void): Promise<DeleteBackUpDataResponse>;
    /**
     * 获取集群列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 修改资源组信息
     */
    ModifyWorkloadGroup(req: ModifyWorkloadGroupRequest, cb?: (error: string, rep: ModifyWorkloadGroupResponse) => void): Promise<ModifyWorkloadGroupResponse>;
    /**
     * 集群详情页中显示集群状态、流程进度等
     */
    DescribeInstanceState(req: DescribeInstanceStateRequest, cb?: (error: string, rep: DescribeInstanceStateResponse) => void): Promise<DescribeInstanceStateResponse>;
    /**
     * 获取集群的最新的几个配置文件（config.xml、metrika.xml、user.xml）的内容，显示给用户
     */
    DescribeClusterConfigs(req: DescribeClusterConfigsRequest, cb?: (error: string, rep: DescribeClusterConfigsResponse) => void): Promise<DescribeClusterConfigsResponse>;
    /**
     * 删除资源组
     */
    DeleteWorkloadGroup(req: DeleteWorkloadGroupRequest, cb?: (error: string, rep: DeleteWorkloadGroupResponse) => void): Promise<DeleteWorkloadGroupResponse>;
    /**
     * 开启或者关闭策略
     */
    OpenBackUp(req: OpenBackUpRequest, cb?: (error: string, rep: OpenBackUpResponse) => void): Promise<OpenBackUpResponse>;
    /**
     * 查询sql工作区历史运行记录
     */
    DescribeDmsSqlHistory(req: DescribeDmsSqlHistoryRequest, cb?: (error: string, rep: DescribeDmsSqlHistoryResponse) => void): Promise<DescribeDmsSqlHistoryResponse>;
    /**
     * 检查内核版本是否支持新的备份恢复语法
     */
    DescribeReplicaVersion(req: DescribeReplicaVersionRequest, cb?: (error: string, rep: DescribeReplicaVersionResponse) => void): Promise<DescribeReplicaVersionResponse>;
    /**
     * 获取联合身份临时访问凭证
     */
    DescribeFederationToken(req?: DescribeFederationTokenRequest, cb?: (error: string, rep: DescribeFederationTokenResponse) => void): Promise<DescribeFederationTokenResponse>;
    /**
     * 更改安全组
     */
    ModifySecurityGroups(req: ModifySecurityGroupsRequest, cb?: (error: string, rep: ModifySecurityGroupsResponse) => void): Promise<ModifySecurityGroupsResponse>;
    /**
     * 备份恢复
     */
    RecoverBackUpJob(req: RecoverBackUpJobRequest, cb?: (error: string, rep: RecoverBackUpJobResponse) => void): Promise<RecoverBackUpJobResponse>;
    /**
     * 集群缩容
     */
    ReduceInstance(req: ReduceInstanceRequest, cb?: (error: string, rep: ReduceInstanceResponse) => void): Promise<ReduceInstanceResponse>;
    /**
     * 修改用户权限,支持catalog，全部db，部分db表三种权限设置类别
     */
    ModifyUserPrivilegesV3(req: ModifyUserPrivilegesV3Request, cb?: (error: string, rep: ModifyUserPrivilegesV3Response) => void): Promise<ModifyUserPrivilegesV3Response>;
    /**
     * 在集群详情页面，拉取该集群的操作
     */
    DescribeInstanceOperations(req: DescribeInstanceOperationsRequest, cb?: (error: string, rep: DescribeInstanceOperationsResponse) => void): Promise<DescribeInstanceOperationsResponse>;
    /**
     * 给已存在集群，配置日志服务
     */
    FitClsLog(req: FitClsLogRequest, cb?: (error: string, rep: FitClsLogResponse) => void): Promise<FitClsLogResponse>;
    /**
     * 针对驱动sql命令查询ck集群接口
     */
    DescribeSqlApis(req: DescribeSqlApisRequest, cb?: (error: string, rep: DescribeSqlApisResponse) => void): Promise<DescribeSqlApisResponse>;
    /**
     * 查询备份任务进度详情
     */
    DescribeBackUpTaskDetail(req: DescribeBackUpTaskDetailRequest, cb?: (error: string, rep: DescribeBackUpTaskDetailResponse) => void): Promise<DescribeBackUpTaskDetailResponse>;
    /**
     * 根据集群ID查询某个集群的具体信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 通过API创建集群
     */
    CreateInstanceNew(req: CreateInstanceNewRequest, cb?: (error: string, rep: CreateInstanceNewResponse) => void): Promise<CreateInstanceNewResponse>;
    /**
     * 生成计费相关接口的GoodsDetail结构
     */
    DescribeGoodsDetail(req: DescribeGoodsDetailRequest, cb?: (error: string, rep: DescribeGoodsDetailResponse) => void): Promise<DescribeGoodsDetailResponse>;
    /**
     * 数据库审计数据库、用户等
     */
    DescribeDatabaseAuditResource(req: DescribeDatabaseAuditResourceRequest, cb?: (error: string, rep: DescribeDatabaseAuditResourceResponse) => void): Promise<DescribeDatabaseAuditResourceResponse>;
    /**
     * 取消对应的备份实例任务
     */
    CancelBackupJob(req: CancelBackupJobRequest, cb?: (error: string, rep: CancelBackupJobResponse) => void): Promise<CancelBackupJobResponse>;
    /**
     * 计算资源垂直变配
     */
    ScaleUpInstance(req: ScaleUpInstanceRequest, cb?: (error: string, rep: ScaleUpInstanceResponse) => void): Promise<ScaleUpInstanceResponse>;
    /**
     * 水平扩容节点
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 查询备份任务详情
     */
    DescribeBackUpJobDetail(req: DescribeBackUpJobDetailRequest, cb?: (error: string, rep: DescribeBackUpJobDetailResponse) => void): Promise<DescribeBackUpJobDetailResponse>;
    /**
     * 获取集群节点角色
     */
    DescribeInstanceNodesRole(req: DescribeInstanceNodesRoleRequest, cb?: (error: string, rep: DescribeInstanceNodesRoleResponse) => void): Promise<DescribeInstanceNodesRoleResponse>;
    /**
     * 重启集群让配置文件生效
     */
    RestartClusterForConfigs(req: RestartClusterForConfigsRequest, cb?: (error: string, rep: RestartClusterForConfigsResponse) => void): Promise<RestartClusterForConfigsResponse>;
    /**
     * 购买页拉取集群的数据节点和zookeeper节点的规格列表
     */
    DescribeSpec(req: DescribeSpecRequest, cb?: (error: string, rep: DescribeSpecResponse) => void): Promise<DescribeSpecResponse>;
    /**
     * 集群列表页上显示地域信息及各个地域的集群总数
     */
    DescribeAreaRegion(req: DescribeAreaRegionRequest, cb?: (error: string, rep: DescribeAreaRegionResponse) => void): Promise<DescribeAreaRegionResponse>;
    /**
     * 扩容云盘
     */
    ResizeDisk(req: ResizeDiskRequest, cb?: (error: string, rep: ResizeDiskResponse) => void): Promise<ResizeDiskResponse>;
    /**
     * 集群健康检查
     */
    DescribeInstancesHealthState(req: DescribeInstancesHealthStateRequest, cb?: (error: string, rep: DescribeInstancesHealthStateResponse) => void): Promise<DescribeInstancesHealthStateResponse>;
    /**
     * 集群滚动重启
     */
    RestartClusterForNode(req: RestartClusterForNodeRequest, cb?: (error: string, rep: RestartClusterForNodeResponse) => void): Promise<RestartClusterForNodeResponse>;
    /**
     * 下载慢查询文件
     */
    DescribeSlowQueryRecordsDownload(req: DescribeSlowQueryRecordsDownloadRequest, cb?: (error: string, rep: DescribeSlowQueryRecordsDownloadResponse) => void): Promise<DescribeSlowQueryRecordsDownloadResponse>;
    /**
     * 获取集群节点信息列表
     */
    DescribeInstanceNodes(req: DescribeInstanceNodesRequest, cb?: (error: string, rep: DescribeInstanceNodesResponse) => void): Promise<DescribeInstanceNodesResponse>;
    /**
     * 获取资源组信息
     */
    DescribeWorkloadGroup(req: DescribeWorkloadGroupRequest, cb?: (error: string, rep: DescribeWorkloadGroupResponse) => void): Promise<DescribeWorkloadGroupResponse>;
    /**
     * 修改集群名称
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * KV模式修改配置接口
     */
    ModifyInstanceKeyValConfigs(req: ModifyInstanceKeyValConfigsRequest, cb?: (error: string, rep: ModifyInstanceKeyValConfigsResponse) => void): Promise<ModifyInstanceKeyValConfigsResponse>;
}

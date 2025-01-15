import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstanceUsedSubnetsResponse, DescribeInstanceNodesResponse, DescribeClusterConfigsHistoryResponse, DescribeInstanceOperationsRequest, DescribeClusterConfigsResponse, ScaleOutInstanceResponse, ModifyUserPrivilegesV3Response, ModifyUserPrivilegesV3Request, DestroyInstanceRequest, CancelBackupJobRequest, ModifyWorkloadGroupRequest, DescribeSlowQueryRecordsDownloadResponse, DeleteWorkloadGroupRequest, DescribeInstancesResponse, ReduceInstanceResponse, ModifyCoolDownPolicyRequest, DescribeBackUpTaskDetailRequest, RecoverBackUpJobRequest, DescribeInstanceOperationsResponse, DescribeUserBindWorkloadGroupResponse, ScaleOutInstanceRequest, ModifyClusterConfigsRequest, DescribeInstanceStateRequest, DescribeAreaRegionResponse, DeleteBackUpDataRequest, UpdateCoolDownResponse, ResizeDiskResponse, OpenCoolDownRequest, DescribeCoolDownTableDataRequest, CheckCoolDownWorkingVariableConfigCorrectResponse, ModifyInstanceResponse, DescribeSlowQueryRecordsDownloadRequest, DescribeRestoreTaskDetailResponse, ModifyNodeStatusRequest, RestartClusterForNodeResponse, CancelBackupJobResponse, DescribeAreaRegionRequest, DescribeInstanceNodesRequest, DescribeWorkloadGroupRequest, DescribeCoolDownBackendsRequest, CheckCoolDownWorkingVariableConfigCorrectRequest, CreateInstanceNewResponse, DescribeSqlApisRequest, ModifySecurityGroupsRequest, CreateInstanceNewRequest, UpdateCoolDownRequest, OpenCoolDownPolicyRequest, OpenCoolDownResponse, DescribeSlowQueryRecordsResponse, CreateBackUpScheduleRequest, ActionAlterUserResponse, DescribeSpecRequest, DescribeClusterConfigsHistoryRequest, CreateWorkloadGroupRequest, DescribeInstanceNodesInfoRequest, DescribeInstancesHealthStateResponse, DescribeSlowQueryRecordsRequest, DescribeInstanceNodesRoleResponse, DestroyInstanceResponse, ResizeDiskRequest, ModifyWorkloadGroupStatusRequest, CreateCoolDownPolicyRequest, DescribeSqlApisResponse, ModifyInstanceRequest, DescribeSpecResponse, ModifyInstanceKeyValConfigsResponse, DescribeBackUpSchedulesResponse, DescribeBackUpTablesResponse, DescribeDatabaseAuditRecordsResponse, ModifyCoolDownPolicyResponse, DescribeInstancesHealthStateRequest, RestartClusterForConfigsResponse, DescribeUserBindWorkloadGroupRequest, ScaleUpInstanceRequest, DescribeInstancesRequest, DescribeBackUpSchedulesRequest, DescribeClusterConfigsRequest, CreateCoolDownPolicyResponse, ModifyWorkloadGroupResponse, DescribeRestoreTaskDetailRequest, CreateBackUpScheduleResponse, ModifyNodeStatusResponse, DescribeInstanceResponse, DescribeBackUpJobResponse, RestartClusterForNodeRequest, DescribeInstanceUsedSubnetsRequest, DescribeDatabaseAuditRecordsRequest, DescribeBackUpJobDetailResponse, DescribeBackUpJobDetailRequest, DescribeCoolDownBackendsResponse, DescribeCoolDownPoliciesResponse, DescribeTableListRequest, DescribeWorkloadGroupResponse, ModifySecurityGroupsResponse, DescribeBackUpTaskDetailResponse, OpenCoolDownPolicyResponse, ReduceInstanceRequest, DeleteWorkloadGroupResponse, DescribeCoolDownTableDataResponse, RestartClusterForConfigsRequest, ModifyWorkloadGroupStatusResponse, CreateWorkloadGroupResponse, DescribeInstanceStateResponse, DescribeCoolDownPoliciesRequest, ModifyClusterConfigsResponse, DeleteBackUpDataResponse, ModifyInstanceKeyValConfigsRequest, ModifyUserBindWorkloadGroupResponse, RecoverBackUpJobResponse, DescribeTableListResponse, ModifyUserBindWorkloadGroupRequest, DescribeDatabaseAuditDownloadRequest, DescribeInstanceRequest, DescribeBackUpJobRequest, ActionAlterUserRequest, DescribeBackUpTablesRequest, DescribeInstanceNodesRoleRequest, DescribeDatabaseAuditDownloadResponse, DescribeInstanceNodesInfoResponse, ScaleUpInstanceResponse } from "./cdwdoris_models";
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
     * 开通、描述降冷策略接口
     */
    OpenCoolDownPolicy(req: OpenCoolDownPolicyRequest, cb?: (error: string, rep: OpenCoolDownPolicyResponse) => void): Promise<OpenCoolDownPolicyResponse>;
    /**
     * 获取备份、迁移的调度任务信息
     */
    DescribeBackUpSchedules(req: DescribeBackUpSchedulesRequest, cb?: (error: string, rep: DescribeBackUpSchedulesResponse) => void): Promise<DescribeBackUpSchedulesResponse>;
    /**
     * 查询备份实例列表
     */
    DescribeBackUpJob(req: DescribeBackUpJobRequest, cb?: (error: string, rep: DescribeBackUpJobResponse) => void): Promise<DescribeBackUpJobResponse>;
    /**
     * 销毁集群
     */
    DestroyInstance(req: DestroyInstanceRequest, cb?: (error: string, rep: DestroyInstanceResponse) => void): Promise<DestroyInstanceResponse>;
    /**
     * 查询冷热分层Table数据
     */
    DescribeCoolDownTableData(req: DescribeCoolDownTableDataRequest, cb?: (error: string, rep: DescribeCoolDownTableDataResponse) => void): Promise<DescribeCoolDownTableDataResponse>;
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
     * 水平扩容节点
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
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
     * 备份恢复
     */
    RecoverBackUpJob(req: RecoverBackUpJobRequest, cb?: (error: string, rep: RecoverBackUpJobResponse) => void): Promise<RecoverBackUpJobResponse>;
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
     * 扩容云盘
     */
    ResizeDisk(req: ResizeDiskRequest, cb?: (error: string, rep: ResizeDiskResponse) => void): Promise<ResizeDiskResponse>;
    /**
     * 创建冷热分层策略
     */
    CreateCoolDownPolicy(req: CreateCoolDownPolicyRequest, cb?: (error: string, rep: CreateCoolDownPolicyResponse) => void): Promise<CreateCoolDownPolicyResponse>;
    /**
     * 更新集群冷热分层信息
     */
    UpdateCoolDown(req: UpdateCoolDownRequest, cb?: (error: string, rep: UpdateCoolDownResponse) => void): Promise<UpdateCoolDownResponse>;
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
     * 在集群配置页面修改集群配置文件接口，xml模式
     */
    ModifyClusterConfigs(req: ModifyClusterConfigsRequest, cb?: (error: string, rep: ModifyClusterConfigsResponse) => void): Promise<ModifyClusterConfigsResponse>;
    /**
     * 更改安全组
     */
    ModifySecurityGroups(req: ModifySecurityGroupsRequest, cb?: (error: string, rep: ModifySecurityGroupsResponse) => void): Promise<ModifySecurityGroupsResponse>;
    /**
     * 查询冷热分层backend节点信息列表
     */
    DescribeCoolDownBackends(req: DescribeCoolDownBackendsRequest, cb?: (error: string, rep: DescribeCoolDownBackendsResponse) => void): Promise<DescribeCoolDownBackendsResponse>;
    /**
     * 计算资源垂直变配
     */
    ScaleUpInstance(req: ScaleUpInstanceRequest, cb?: (error: string, rep: ScaleUpInstanceResponse) => void): Promise<ScaleUpInstanceResponse>;
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
     * 开启或关闭资源组
     */
    ModifyWorkloadGroupStatus(req: ModifyWorkloadGroupStatusRequest, cb?: (error: string, rep: ModifyWorkloadGroupStatusResponse) => void): Promise<ModifyWorkloadGroupStatusResponse>;
    /**
     * 修改冷热分层策略
     */
    ModifyCoolDownPolicy(req: ModifyCoolDownPolicyRequest, cb?: (error: string, rep: ModifyCoolDownPolicyResponse) => void): Promise<ModifyCoolDownPolicyResponse>;
    /**
     * 新增和修改用户接口
     */
    ActionAlterUser(req: ActionAlterUserRequest, cb?: (error: string, rep: ActionAlterUserResponse) => void): Promise<ActionAlterUserResponse>;
    /**
     * 针对驱动sql命令查询集群接口
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
     * 修改资源组信息
     */
    ModifyWorkloadGroup(req: ModifyWorkloadGroupRequest, cb?: (error: string, rep: ModifyWorkloadGroupResponse) => void): Promise<ModifyWorkloadGroupResponse>;
    /**
     * 取消对应的备份实例任务
     */
    CancelBackupJob(req: CancelBackupJobRequest, cb?: (error: string, rep: CancelBackupJobResponse) => void): Promise<CancelBackupJobResponse>;
    /**
     * 查询备份任务详情
     */
    DescribeBackUpJobDetail(req: DescribeBackUpJobDetailRequest, cb?: (error: string, rep: DescribeBackUpJobDetailResponse) => void): Promise<DescribeBackUpJobDetailResponse>;
    /**
     * 查询冷热分层生效变量和配置是否正确
     */
    CheckCoolDownWorkingVariableConfigCorrect(req: CheckCoolDownWorkingVariableConfigCorrectRequest, cb?: (error: string, rep: CheckCoolDownWorkingVariableConfigCorrectResponse) => void): Promise<CheckCoolDownWorkingVariableConfigCorrectResponse>;
    /**
     * 获取集群节点角色
     */
    DescribeInstanceNodesRole(req: DescribeInstanceNodesRoleRequest, cb?: (error: string, rep: DescribeInstanceNodesRoleResponse) => void): Promise<DescribeInstanceNodesRoleResponse>;
    /**
     * 重启集群让配置文件生效
     */
    RestartClusterForConfigs(req: RestartClusterForConfigsRequest, cb?: (error: string, rep: RestartClusterForConfigsResponse) => void): Promise<RestartClusterForConfigsResponse>;
    /**
     * 拉取集群节点规格列表
     */
    DescribeSpec(req: DescribeSpecRequest, cb?: (error: string, rep: DescribeSpecResponse) => void): Promise<DescribeSpecResponse>;
    /**
     * 集群列表页上显示地域信息及各个地域的集群总数
     */
    DescribeAreaRegion(req: DescribeAreaRegionRequest, cb?: (error: string, rep: DescribeAreaRegionResponse) => void): Promise<DescribeAreaRegionResponse>;
    /**
     * 开始启用冷热分层
     */
    OpenCoolDown(req: OpenCoolDownRequest, cb?: (error: string, rep: OpenCoolDownResponse) => void): Promise<OpenCoolDownResponse>;
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
     * 查询冷热分层策略列表
     */
    DescribeCoolDownPolicies(req: DescribeCoolDownPoliciesRequest, cb?: (error: string, rep: DescribeCoolDownPoliciesResponse) => void): Promise<DescribeCoolDownPoliciesResponse>;
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

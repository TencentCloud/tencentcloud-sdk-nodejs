import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstanceUsedSubnetsResponse, DescribeInstanceNodesResponse, DescribeInstanceStateRequest, DescribeClusterConfigsResponse, ScaleOutInstanceResponse, ModifyUserPrivilegesV3Response, DescribeFederationTokenRequest, ModifyWorkloadGroupStatusResponse, ModifyWorkloadGroupRequest, ModifyInstanceRequest, DeleteWorkloadGroupRequest, DescribeInstancesResponse, ReduceInstanceResponse, CreateInstanceNewRequest, ScaleOutInstanceRequest, DescribeRestoreTaskDetailResponse, ResizeDiskResponse, ModifyInstanceResponse, DescribeSlowQueryRecordsDownloadRequest, ModifyUserBindWorkloadGroupRequest, DescribeRegionZoneRequest, RestartClusterForNodeResponse, DescribeInstanceNodesRequest, DescribeWorkloadGroupRequest, DestroyInstanceResponse, DescribeSqlApisRequest, ModifySecurityGroupsRequest, ModifyUserPrivilegesV3Request, DescribeSlowQueryRecordsResponse, DescribeRegionZoneResponse, DescribeInstanceStateResponse, DescribeInstanceNodesInfoRequest, DescribeDatabaseAuditDownloadRequest, DescribeGoodsDetailRequest, ResizeDiskRequest, ModifyWorkloadGroupStatusRequest, DescribeSqlApisResponse, DescribeSlowQueryRecordsDownloadResponse, ModifyInstanceKeyValConfigsResponse, DescribeDatabaseAuditRecordsResponse, DescribeUserBindWorkloadGroupRequest, DescribeInstancesRequest, CreateWorkloadGroupResponse, DescribeClusterConfigsRequest, CreateInstanceNewResponse, ModifyWorkloadGroupResponse, DescribeRestoreTaskDetailRequest, DescribeInstanceResponse, FitClsLogRequest, FitClsLogResponse, RestartClusterForNodeRequest, DescribeFederationTokenResponse, DescribeInstanceUsedSubnetsRequest, DescribeDatabaseAuditRecordsRequest, DescribeWorkloadGroupResponse, ModifySecurityGroupsResponse, DeleteWorkloadGroupResponse, DestroyInstanceRequest, DescribeSlowQueryRecordsRequest, CreateWorkloadGroupRequest, DescribeGoodsDetailResponse, ModifyInstanceKeyValConfigsRequest, ModifyUserBindWorkloadGroupResponse, ScaleUpInstanceRequest, DescribeReplicaVersionRequest, DescribeUserBindWorkloadGroupResponse, DescribeInstanceRequest, ReduceInstanceRequest, DescribeDatabaseAuditDownloadResponse, DescribeReplicaVersionResponse, DescribeInstanceNodesInfoResponse, ScaleUpInstanceResponse } from "./cdwdoris_models";
/**
 * cdwdoris client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 销毁集群
     */
    DestroyInstance(req: DestroyInstanceRequest, cb?: (error: string, rep: DestroyInstanceResponse) => void): Promise<DestroyInstanceResponse>;
    /**
     * 针对驱动sql命令查询ck集群接口
     */
    DescribeSqlApis(req: DescribeSqlApisRequest, cb?: (error: string, rep: DescribeSqlApisResponse) => void): Promise<DescribeSqlApisResponse>;
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
     * 获取BE/FE节点角色
     */
    DescribeInstanceNodesInfo(req: DescribeInstanceNodesInfoRequest, cb?: (error: string, rep: DescribeInstanceNodesInfoResponse) => void): Promise<DescribeInstanceNodesInfoResponse>;
    /**
     * 获取集群已使用子网信息
     */
    DescribeInstanceUsedSubnets(req: DescribeInstanceUsedSubnetsRequest, cb?: (error: string, rep: DescribeInstanceUsedSubnetsResponse) => void): Promise<DescribeInstanceUsedSubnetsResponse>;
    /**
     * 获取当前集群各用户绑定的资源信息
     */
    DescribeUserBindWorkloadGroup(req: DescribeUserBindWorkloadGroupRequest, cb?: (error: string, rep: DescribeUserBindWorkloadGroupResponse) => void): Promise<DescribeUserBindWorkloadGroupResponse>;
    /**
     * 计算资源垂直变配
     */
    ScaleUpInstance(req: ScaleUpInstanceRequest, cb?: (error: string, rep: ScaleUpInstanceResponse) => void): Promise<ScaleUpInstanceResponse>;
    /**
     * 购买页获取地域及可用区列表、内核版本、网络规则等
     */
    DescribeRegionZone(req: DescribeRegionZoneRequest, cb?: (error: string, rep: DescribeRegionZoneResponse) => void): Promise<DescribeRegionZoneResponse>;
    /**
     * 修改资源组信息
     */
    ModifyWorkloadGroup(req: ModifyWorkloadGroupRequest, cb?: (error: string, rep: ModifyWorkloadGroupResponse) => void): Promise<ModifyWorkloadGroupResponse>;
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
     * 水平扩容节点
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 获取集群列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
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
     * 更改安全组
     */
    ModifySecurityGroups(req: ModifySecurityGroupsRequest, cb?: (error: string, rep: ModifySecurityGroupsResponse) => void): Promise<ModifySecurityGroupsResponse>;
    /**
     * 获取联合身份临时访问凭证
     */
    DescribeFederationToken(req?: DescribeFederationTokenRequest, cb?: (error: string, rep: DescribeFederationTokenResponse) => void): Promise<DescribeFederationTokenResponse>;
    /**
     * 集群缩容
     */
    ReduceInstance(req: ReduceInstanceRequest, cb?: (error: string, rep: ReduceInstanceResponse) => void): Promise<ReduceInstanceResponse>;
    /**
     * 修改用户权限,支持catalog，全部db，部分db表三种权限设置类别
     */
    ModifyUserPrivilegesV3(req: ModifyUserPrivilegesV3Request, cb?: (error: string, rep: ModifyUserPrivilegesV3Response) => void): Promise<ModifyUserPrivilegesV3Response>;
    /**
     * 给已存在集群，配置日志服务
     */
    FitClsLog(req: FitClsLogRequest, cb?: (error: string, rep: FitClsLogResponse) => void): Promise<FitClsLogResponse>;
    /**
     * 获取数据库审计记录
     */
    DescribeDatabaseAuditRecords(req: DescribeDatabaseAuditRecordsRequest, cb?: (error: string, rep: DescribeDatabaseAuditRecordsResponse) => void): Promise<DescribeDatabaseAuditRecordsResponse>;
    /**
     * 根据集群ID查询某个集群的具体信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 通过API创建集群
     */
    CreateInstanceNew(req: CreateInstanceNewRequest, cb?: (error: string, rep: CreateInstanceNewResponse) => void): Promise<CreateInstanceNewResponse>;
    /**
     * 获取集群节点信息列表
     */
    DescribeInstanceNodes(req: DescribeInstanceNodesRequest, cb?: (error: string, rep: DescribeInstanceNodesResponse) => void): Promise<DescribeInstanceNodesResponse>;
    /**
     * 生成计费相关接口的GoodsDetail结构
     */
    DescribeGoodsDetail(req: DescribeGoodsDetailRequest, cb?: (error: string, rep: DescribeGoodsDetailResponse) => void): Promise<DescribeGoodsDetailResponse>;
    /**
     * 扩容云盘
     */
    ResizeDisk(req: ResizeDiskRequest, cb?: (error: string, rep: ResizeDiskResponse) => void): Promise<ResizeDiskResponse>;
    /**
     * 集群滚动重启
     */
    RestartClusterForNode(req: RestartClusterForNodeRequest, cb?: (error: string, rep: RestartClusterForNodeResponse) => void): Promise<RestartClusterForNodeResponse>;
    /**
     * 下载慢查询文件
     */
    DescribeSlowQueryRecordsDownload(req: DescribeSlowQueryRecordsDownloadRequest, cb?: (error: string, rep: DescribeSlowQueryRecordsDownloadResponse) => void): Promise<DescribeSlowQueryRecordsDownloadResponse>;
    /**
     * 检查内核版本是否支持新的备份恢复语法
     */
    DescribeReplicaVersion(req: DescribeReplicaVersionRequest, cb?: (error: string, rep: DescribeReplicaVersionResponse) => void): Promise<DescribeReplicaVersionResponse>;
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

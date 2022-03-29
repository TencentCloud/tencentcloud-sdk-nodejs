import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyClusterNameRequest, DescribeRollbackTimeRangeRequest, DescribeBackupConfigRequest, DescribeAccountsRequest, ModifyMaintainPeriodConfigRequest, DescribeRollbackTimeRangeResponse, AssociateSecurityGroupsRequest, CreateAccountsResponse, ModifyInstanceNameRequest, DescribeDBSecurityGroupsResponse, DescribeMaintainPeriodRequest, DescribeInstancesResponse, ModifyBackupConfigResponse, IsolateInstanceResponse, ModifyInstanceNameResponse, PauseServerlessRequest, RevokeAccountPrivilegesResponse, CreateClustersResponse, SetRenewFlagRequest, ActivateInstanceRequest, DescribeAccountAllGrantPrivilegesResponse, DescribeClustersRequest, DescribeInstanceDetailResponse, ModifyDBInstanceSecurityGroupsResponse, ModifyAccountParamsRequest, DescribeClusterInstanceGrpsRequest, DescribeResourcesByDealNameResponse, ResumeServerlessResponse, CreateAccountsRequest, IsolateInstanceRequest, DescribeDBSecurityGroupsRequest, RollBackClusterRequest, DescribeClusterDetailRequest, DescribeProjectSecurityGroupsResponse, PauseServerlessResponse, OfflineClusterRequest, DescribeBackupListRequest, GrantAccountPrivilegesRequest, IsolateClusterResponse, CreateClustersRequest, DescribeClustersResponse, DescribeBackupConfigResponse, ModifyDBInstanceSecurityGroupsRequest, AddInstancesResponse, DescribeProjectSecurityGroupsRequest, ModifyClusterParamResponse, AssociateSecurityGroupsResponse, DescribeResourcesByDealNameRequest, DescribeRollbackTimeValidityResponse, GrantAccountPrivilegesResponse, ResumeServerlessRequest, ModifyClusterNameResponse, DescribeInstanceSpecsRequest, UpgradeInstanceResponse, DescribeClusterParamLogsResponse, SetRenewFlagResponse, OfflineClusterResponse, RevokeAccountPrivilegesRequest, DescribeClusterParamLogsRequest, UpgradeInstanceRequest, DescribeMaintainPeriodResponse, DescribeBackupListResponse, RollBackClusterResponse, DescribeClusterDetailResponse, ActivateInstanceResponse, DescribeRollbackTimeValidityRequest, IsolateClusterRequest, DescribeClusterInstanceGrpsResponse, AddInstancesRequest, DescribeInstancesRequest, DescribeInstanceDetailRequest, ModifyMaintainPeriodConfigResponse, DisassociateSecurityGroupsRequest, ModifyClusterParamRequest, DescribeAccountsResponse, ModifyAccountParamsResponse, OfflineInstanceRequest, DescribeInstanceSpecsResponse, DescribeAccountAllGrantPrivilegesRequest, OfflineInstanceResponse, ModifyBackupConfigRequest, DisassociateSecurityGroupsResponse } from "./cynosdb_models";
/**
 * cynosdb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 恢复serverless集群
     */
    ResumeServerless(req: ResumeServerlessRequest, cb?: (error: string, rep: ResumeServerlessResponse) => void): Promise<ResumeServerlessResponse>;
    /**
     * 查询备份文件列表
     */
    DescribeBackupList(req: DescribeBackupListRequest, cb?: (error: string, rep: DescribeBackupListResponse) => void): Promise<DescribeBackupListResponse>;
    /**
     * 批量回收账号权限
     */
    RevokeAccountPrivileges(req: RevokeAccountPrivilegesRequest, cb?: (error: string, rep: RevokeAccountPrivilegesResponse) => void): Promise<RevokeAccountPrivilegesResponse>;
    /**
     * 本接口（RollBackCluster）用于回档集群
     */
    RollBackCluster(req: RollBackClusterRequest, cb?: (error: string, rep: RollBackClusterResponse) => void): Promise<RollBackClusterResponse>;
    /**
     * 获取指定集群的备份配置信息，包括全量备份时间段，备份文件保留时间
     */
    DescribeBackupConfig(req: DescribeBackupConfigRequest, cb?: (error: string, rep: DescribeBackupConfigResponse) => void): Promise<DescribeBackupConfigResponse>;
    /**
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组
     */
    DescribeClusterInstanceGrps(req: DescribeClusterInstanceGrpsRequest, cb?: (error: string, rep: DescribeClusterInstanceGrpsResponse) => void): Promise<DescribeClusterInstanceGrpsResponse>;
    /**
     * 下线集群
     */
    OfflineCluster(req: OfflineClusterRequest, cb?: (error: string, rep: OfflineClusterResponse) => void): Promise<OfflineClusterResponse>;
    /**
     * 暂停serverless集群
     */
    PauseServerless(req: PauseServerlessRequest, cb?: (error: string, rep: PauseServerlessResponse) => void): Promise<PauseServerlessResponse>;
    /**
     * 修改集群名称
     */
    ModifyClusterName(req: ModifyClusterNameRequest, cb?: (error: string, rep: ModifyClusterNameResponse) => void): Promise<ModifyClusterNameResponse>;
    /**
     * 本接口(DescribeInstanceDetail)用于查询实例详情。
     */
    DescribeInstanceDetail(req: DescribeInstanceDetailRequest, cb?: (error: string, rep: DescribeInstanceDetailResponse) => void): Promise<DescribeInstanceDetailResponse>;
    /**
     * 查询指定集群有效回滚时间范围
     */
    DescribeRollbackTimeRange(req: DescribeRollbackTimeRangeRequest, cb?: (error: string, rep: DescribeRollbackTimeRangeResponse) => void): Promise<DescribeRollbackTimeRangeResponse>;
    /**
     * 修改指定集群的备份配置
     */
    ModifyBackupConfig(req: ModifyBackupConfigRequest, cb?: (error: string, rep: ModifyBackupConfigResponse) => void): Promise<ModifyBackupConfigResponse>;
    /**
     * 本接口(DescribeInstances)用于查询实例列表。
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 批量授权账号权限
     */
    GrantAccountPrivileges(req: GrantAccountPrivilegesRequest, cb?: (error: string, rep: GrantAccountPrivilegesResponse) => void): Promise<GrantAccountPrivilegesResponse>;
    /**
     * 本接口（DescribeClusterParamLogs）查询参数修改日志
     */
    DescribeClusterParamLogs(req: DescribeClusterParamLogsRequest, cb?: (error: string, rep: DescribeClusterParamLogsResponse) => void): Promise<DescribeClusterParamLogsResponse>;
    /**
     * 修改维护时间配置
     */
    ModifyMaintainPeriodConfig(req: ModifyMaintainPeriodConfigRequest, cb?: (error: string, rep: ModifyMaintainPeriodConfigResponse) => void): Promise<ModifyMaintainPeriodConfigResponse>;
    /**
     * 修改账号参数
     */
    ModifyAccountParams(req: ModifyAccountParamsRequest, cb?: (error: string, rep: ModifyAccountParamsResponse) => void): Promise<ModifyAccountParamsResponse>;
    /**
     * 下线实例
     */
    OfflineInstance(req: OfflineInstanceRequest, cb?: (error: string, rep: OfflineInstanceResponse) => void): Promise<OfflineInstanceResponse>;
    /**
     * 本接口(ModifyInstanceName)用于修改实例名称。
     */
    ModifyInstanceName(req: ModifyInstanceNameRequest, cb?: (error: string, rep: ModifyInstanceNameResponse) => void): Promise<ModifyInstanceNameResponse>;
    /**
     * 查询实例维护时间窗
     */
    DescribeMaintainPeriod(req: DescribeMaintainPeriodRequest, cb?: (error: string, rep: DescribeMaintainPeriodResponse) => void): Promise<DescribeMaintainPeriodResponse>;
    /**
     * 查询集群列表
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 隔离集群
     */
    IsolateCluster(req: IsolateClusterRequest, cb?: (error: string, rep: IsolateClusterResponse) => void): Promise<IsolateClusterResponse>;
    /**
     * 查询项目安全组信息
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 安全组批量绑定云资源
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * SetRenewFlag设置实例的自动续费功能
     */
    SetRenewFlag(req: SetRenewFlagRequest, cb?: (error: string, rep: SetRenewFlagResponse) => void): Promise<SetRenewFlagResponse>;
    /**
     * 显示集群详情
     */
    DescribeClusterDetail(req: DescribeClusterDetailRequest, cb?: (error: string, rep: DescribeClusterDetailResponse) => void): Promise<DescribeClusterDetailResponse>;
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 本接口(IsolateInstance)用于隔离实例。
     */
    IsolateInstance(req: IsolateInstanceRequest, cb?: (error: string, rep: IsolateInstanceResponse) => void): Promise<IsolateInstanceResponse>;
    /**
     * 本接口（DescribeInstanceSpecs）用于查询实例规格
     */
    DescribeInstanceSpecs(req: DescribeInstanceSpecsRequest, cb?: (error: string, rep: DescribeInstanceSpecsResponse) => void): Promise<DescribeInstanceSpecsResponse>;
    /**
     * 账号所有权限
     */
    DescribeAccountAllGrantPrivileges(req: DescribeAccountAllGrantPrivilegesRequest, cb?: (error: string, rep: DescribeAccountAllGrantPrivilegesResponse) => void): Promise<DescribeAccountAllGrantPrivilegesResponse>;
    /**
     * 本接口(DescribeAccounts)用于查询数据库管理账号。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 根据计费订单id查询资源列表
     */
    DescribeResourcesByDealName(req: DescribeResourcesByDealNameRequest, cb?: (error: string, rep: DescribeResourcesByDealNameResponse) => void): Promise<DescribeResourcesByDealNameResponse>;
    /**
     * 修改集群参数
     */
    ModifyClusterParam(req: ModifyClusterParamRequest, cb?: (error: string, rep: ModifyClusterParamResponse) => void): Promise<ModifyClusterParamResponse>;
    /**
     * 升级实例
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 创建集群
     */
    CreateClusters(req: CreateClustersRequest, cb?: (error: string, rep: CreateClustersResponse) => void): Promise<CreateClustersResponse>;
    /**
     * 创建账号
     */
    CreateAccounts(req: CreateAccountsRequest, cb?: (error: string, rep: CreateAccountsResponse) => void): Promise<CreateAccountsResponse>;
    /**
     * 本接口(ActivateInstance)用于恢复已隔离的实例访问。
     */
    ActivateInstance(req: ActivateInstanceRequest, cb?: (error: string, rep: ActivateInstanceResponse) => void): Promise<ActivateInstanceResponse>;
    /**
     * 查询实例安全组信息
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 安全组批量解绑云资源
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 指定时间和集群查询是否可回滚
     */
    DescribeRollbackTimeValidity(req: DescribeRollbackTimeValidityRequest, cb?: (error: string, rep: DescribeRollbackTimeValidityResponse) => void): Promise<DescribeRollbackTimeValidityResponse>;
    /**
     * 本接口（AddInstances）用于集群添加实例
     */
    AddInstances(req: AddInstancesRequest, cb?: (error: string, rep: AddInstancesResponse) => void): Promise<AddInstancesResponse>;
}

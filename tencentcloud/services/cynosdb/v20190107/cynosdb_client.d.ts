import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { AddInstancesResponse, UpgradeInstanceResponse, DescribeClustersRequest, DescribeProjectSecurityGroupsRequest, SetRenewFlagResponse, ModifyDBInstanceSecurityGroupsResponse, DescribeBackupConfigRequest, DescribeClusterInstanceGrpsRequest, DescribeResourcesByDealNameResponse, DescribeAccountsRequest, IsolateInstanceRequest, DescribeMaintainPeriodResponse, DescribeBackupListResponse, DescribeRollbackTimeRangeResponse, ModifyMaintainPeriodConfigRequest, ModifyBackupConfigRequest, DescribeDBSecurityGroupsRequest, DescribeRollbackTimeValidityRequest, IsolateClusterRequest, DescribeClusterInstanceGrpsResponse, AddInstancesRequest, DescribeClusterDetailRequest, DescribeProjectSecurityGroupsResponse, DescribeDBSecurityGroupsResponse, DescribeMaintainPeriodRequest, DescribeInstancesResponse, DescribeRollbackTimeValidityResponse, DescribeInstanceDetailRequest, ModifyMaintainPeriodConfigResponse, DescribeInstancesRequest, DescribeResourcesByDealNameRequest, IsolateInstanceResponse, DescribeBackupListRequest, DescribeRollbackTimeRangeRequest, DescribeAccountsResponse, UpgradeInstanceRequest, DescribeInstanceDetailResponse, OfflineInstanceRequest, OfflineClusterResponse, DescribeInstanceSpecsResponse, DescribeInstanceSpecsRequest, IsolateClusterResponse, CreateClustersResponse, SetRenewFlagRequest, CreateClustersRequest, OfflineClusterRequest, DescribeClusterDetailResponse, OfflineInstanceResponse, DescribeClustersResponse, ModifyBackupConfigResponse, DescribeBackupConfigResponse, ModifyDBInstanceSecurityGroupsRequest } from "./cynosdb_models";
/**
 * cynosdb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询备份文件列表
     */
    DescribeBackupList(req: DescribeBackupListRequest, cb?: (error: string, rep: DescribeBackupListResponse) => void): Promise<DescribeBackupListResponse>;
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
     * 修改维护时间配置
     */
    ModifyMaintainPeriodConfig(req: ModifyMaintainPeriodConfigRequest, cb?: (error: string, rep: ModifyMaintainPeriodConfigResponse) => void): Promise<ModifyMaintainPeriodConfigResponse>;
    /**
     * 下线实例
     */
    OfflineInstance(req: OfflineInstanceRequest, cb?: (error: string, rep: OfflineInstanceResponse) => void): Promise<OfflineInstanceResponse>;
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
     * 本接口(DescribeAccounts)用于查询数据库管理账号。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 根据计费订单id查询资源列表
     */
    DescribeResourcesByDealName(req: DescribeResourcesByDealNameRequest, cb?: (error: string, rep: DescribeResourcesByDealNameResponse) => void): Promise<DescribeResourcesByDealNameResponse>;
    /**
     * SetRenewFlag设置实例的自动续费功能
     */
    SetRenewFlag(req: SetRenewFlagRequest, cb?: (error: string, rep: SetRenewFlagResponse) => void): Promise<SetRenewFlagResponse>;
    /**
     * 升级实例
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 创建集群
     */
    CreateClusters(req: CreateClustersRequest, cb?: (error: string, rep: CreateClustersResponse) => void): Promise<CreateClustersResponse>;
    /**
     * 指定时间和集群查询是否可回滚
     */
    DescribeRollbackTimeValidity(req: DescribeRollbackTimeValidityRequest, cb?: (error: string, rep: DescribeRollbackTimeValidityResponse) => void): Promise<DescribeRollbackTimeValidityResponse>;
    /**
     * 查询实例安全组信息
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 本接口（AddInstances）用于集群添加实例
     */
    AddInstances(req: AddInstancesRequest, cb?: (error: string, rep: AddInstancesResponse) => void): Promise<AddInstancesResponse>;
}

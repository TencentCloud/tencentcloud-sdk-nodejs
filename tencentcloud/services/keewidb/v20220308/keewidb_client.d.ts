import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyInstanceParamsResponse, ModifyAutoBackupConfigResponse, CreateInstancesRequest, ModifyNetworkConfigResponse, DescribeInstanceBinlogsRequest, AssociateSecurityGroupsRequest, DescribeTaskListResponse, ModifyInstanceRequest, RenewInstanceResponse, CreateBackupManuallyResponse, DescribeDBSecurityGroupsResponse, ModifyAutoBackupConfigRequest, DestroyPostpaidInstanceRequest, ResetPasswordResponse, ClearInstanceRequest, RenewInstanceRequest, CreateBackupManuallyRequest, DescribeInstanceParamRecordsResponse, DescribeInstanceDealDetailRequest, DestroyPrepaidInstanceRequest, DestroyPostpaidInstanceResponse, ModifyInstanceResponse, ModifyDBInstanceSecurityGroupsResponse, DescribeTendisSlowLogResponse, DescribeProductInfoResponse, DescribeDBSecurityGroupsRequest, ChangeInstanceMasterRequest, DescribeProjectSecurityGroupsResponse, DescribeInstanceBackupsResponse, DescribeInstanceReplicasResponse, StartUpInstanceResponse, DescribeInstanceParamRecordsRequest, DescribeTaskListRequest, CreateInstancesResponse, DescribeConnectionConfigResponse, ModifyNetworkConfigRequest, DescribeInstanceParamsRequest, CleanUpInstanceResponse, ModifyDBInstanceSecurityGroupsRequest, DescribeAutoBackupConfigResponse, DescribeProjectSecurityGroupsRequest, StartUpInstanceRequest, DescribeMaintenanceWindowResponse, ResetPasswordRequest, ModifyConnectionConfigRequest, AssociateSecurityGroupsResponse, CleanUpInstanceRequest, DescribeInstanceDealDetailResponse, DescribeInstancesRequest, DescribeTaskInfoResponse, DescribeAutoBackupConfigRequest, UpgradeInstanceResponse, DescribeInstancesResponse, DescribeTaskInfoRequest, ModifyConnectionConfigResponse, ModifyMaintenanceWindowResponse, DescribeInstanceReplicasRequest, DestroyPrepaidInstanceResponse, DescribeConnectionConfigRequest, ModifyInstanceParamsRequest, DescribeInstanceNodeInfoRequest, DescribeMaintenanceWindowRequest, DescribeTendisSlowLogRequest, DescribeProxySlowLogRequest, DescribeProxySlowLogResponse, DescribeProductInfoRequest, DescribeInstanceParamsResponse, DisassociateSecurityGroupsRequest, ModifyMaintenanceWindowRequest, DescribeInstanceBackupsRequest, ClearInstanceResponse, ChangeInstanceMasterResponse, UpgradeInstanceRequest, DescribeInstanceNodeInfoResponse, DisassociateSecurityGroupsResponse, DescribeInstanceBinlogsResponse } from "./keewidb_models";
/**
 * keewidb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DescribeInstanceNodeInfo）查询实例节点信息。
     */
    DescribeInstanceNodeInfo(req: DescribeInstanceNodeInfoRequest, cb?: (error: string, rep: DescribeInstanceNodeInfoResponse) => void): Promise<DescribeInstanceNodeInfoResponse>;
    /**
     * 本接口（ModifyMaintenanceWindow）修改实例维护时间窗时间。
     */
    ModifyMaintenanceWindow(req: ModifyMaintenanceWindowRequest, cb?: (error: string, rep: ModifyMaintenanceWindowResponse) => void): Promise<ModifyMaintenanceWindowResponse>;
    /**
     * 本接口（DescribeTaskList）用于查询任务列表信息。
     */
    DescribeTaskList(req: DescribeTaskListRequest, cb?: (error: string, rep: DescribeTaskListResponse) => void): Promise<DescribeTaskListResponse>;
    /**
     * 本接口（CleanUpInstance）用于立即下线回收站已隔离的实例。
     */
    CleanUpInstance(req: CleanUpInstanceRequest, cb?: (error: string, rep: CleanUpInstanceResponse) => void): Promise<CleanUpInstanceResponse>;
    /**
     * 本接口（DescribeMaintenanceWindow）用于查询实例维护时间窗。
     */
    DescribeMaintenanceWindow(req: DescribeMaintenanceWindowRequest, cb?: (error: string, rep: DescribeMaintenanceWindowResponse) => void): Promise<DescribeMaintenanceWindowResponse>;
    /**
     * 本接口（DescribeInstanceBackups）用于查询实例全量备份列表。
     */
    DescribeInstanceBackups(req: DescribeInstanceBackupsRequest, cb?: (error: string, rep: DescribeInstanceBackupsResponse) => void): Promise<DescribeInstanceBackupsResponse>;
    /**
     * 本接口（ModifyNetworkConfig）用于修改实例网络配置。
     */
    ModifyNetworkConfig(req: ModifyNetworkConfigRequest, cb?: (error: string, rep: ModifyNetworkConfigResponse) => void): Promise<ModifyNetworkConfigResponse>;
    /**
     * 本接口（ModifyAutoBackupConfig）用于修改自动备份配置。
     */
    ModifyAutoBackupConfig(req: ModifyAutoBackupConfigRequest, cb?: (error: string, rep: ModifyAutoBackupConfigResponse) => void): Promise<ModifyAutoBackupConfigResponse>;
    /**
     * 本接口（ResetPassword）用于重置数据库访问密码。
     */
    ResetPassword(req: ResetPasswordRequest, cb?: (error: string, rep: ResetPasswordResponse) => void): Promise<ResetPasswordResponse>;
    /**
     * 本接口（DescribeInstances）可以根据地域、网络、实例id、标签、计费方式等条件，搜索查询实例列表。
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口（DescribeConnectionConfig）用于查询实例连接配置，包括出流量和入流量带宽、最大连接数限制。
     */
    DescribeConnectionConfig(req: DescribeConnectionConfigRequest, cb?: (error: string, rep: DescribeConnectionConfigResponse) => void): Promise<DescribeConnectionConfigResponse>;
    /**
     * 本接口（DescribeInstanceBinlogs）用于查询增量备份列表。
     */
    DescribeInstanceBinlogs(req: DescribeInstanceBinlogsRequest, cb?: (error: string, rep: DescribeInstanceBinlogsResponse) => void): Promise<DescribeInstanceBinlogsResponse>;
    /**
     * 本接口（DescribeAutoBackupConfig）用于获取自动备份配置。
     */
    DescribeAutoBackupConfig(req: DescribeAutoBackupConfigRequest, cb?: (error: string, rep: DescribeAutoBackupConfigResponse) => void): Promise<DescribeAutoBackupConfigResponse>;
    /**
     * 本接口（ChangeInstanceMaster）用于将副本节点提升为主节点。
     */
    ChangeInstanceMaster(req: ChangeInstanceMasterRequest, cb?: (error: string, rep: ChangeInstanceMasterResponse) => void): Promise<ChangeInstanceMasterResponse>;
    /**
     * 创建数据库实例
     */
    CreateInstances(req: CreateInstancesRequest, cb?: (error: string, rep: CreateInstancesResponse) => void): Promise<CreateInstancesResponse>;
    /**
     * 本接口（RenewInstance）用于为包年包月计费实例续费。
     */
    RenewInstance(req: RenewInstanceRequest, cb?: (error: string, rep: RenewInstanceResponse) => void): Promise<RenewInstanceResponse>;
    /**
     * 本接口（DescribeTaskInfo）用于查询异步任务结果。
     */
    DescribeTaskInfo(req: DescribeTaskInfoRequest, cb?: (error: string, rep: DescribeTaskInfoResponse) => void): Promise<DescribeTaskInfoResponse>;
    /**
     * 本接口（DescribeProxySlowLog）用于查询代理（Proxy）慢日志。
     */
    DescribeProxySlowLog(req: DescribeProxySlowLogRequest, cb?: (error: string, rep: DescribeProxySlowLogResponse) => void): Promise<DescribeProxySlowLogResponse>;
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 本接口（DescribeTendisSlowLog）用于查询实例慢日志。
     */
    DescribeTendisSlowLog(req: DescribeTendisSlowLogRequest, cb?: (error: string, rep: DescribeTendisSlowLogResponse) => void): Promise<DescribeTendisSlowLogResponse>;
    /**
     * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定多个指定实例。
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 本接口（ModifyInstanceParams）用于修改实例参数配置。
     */
    ModifyInstanceParams(req: ModifyInstanceParamsRequest, cb?: (error: string, rep: ModifyInstanceParamsResponse) => void): Promise<ModifyInstanceParamsResponse>;
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 本接口（DescribeInstanceParams）用于查询实例的参数列表。
     */
    DescribeInstanceParams(req: DescribeInstanceParamsRequest, cb?: (error: string, rep: DescribeInstanceParamsResponse) => void): Promise<DescribeInstanceParamsResponse>;
    /**
     * 本接口（DescribeInstanceReplicas）用于获取实例副本节点信息。
     */
    DescribeInstanceReplicas(req: DescribeInstanceReplicasRequest, cb?: (error: string, rep: DescribeInstanceReplicasResponse) => void): Promise<DescribeInstanceReplicasResponse>;
    /**
     * 本接口（ModifyConnectionConfig）用于修改实例的连接配置，包括带宽和最大连接数。
     */
    ModifyConnectionConfig(req: ModifyConnectionConfigRequest, cb?: (error: string, rep: ModifyConnectionConfigResponse) => void): Promise<ModifyConnectionConfigResponse>;
    /**
     * 本接口查询指定可用区和实例类型下keewidb 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
     */
    DescribeProductInfo(req?: DescribeProductInfoRequest, cb?: (error: string, rep: DescribeProductInfoResponse) => void): Promise<DescribeProductInfoResponse>;
    /**
     * 本接口（UpgradeInstance）用于对实例进行配置变更。
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 手动发起备份
     */
    CreateBackupManually(req: CreateBackupManuallyRequest, cb?: (error: string, rep: CreateBackupManuallyResponse) => void): Promise<CreateBackupManuallyResponse>;
    /**
     * 本接口（DestroyPrepaidInstance）用于退还包年包月计费实例。
     */
    DestroyPrepaidInstance(req: DestroyPrepaidInstanceRequest, cb?: (error: string, rep: DestroyPrepaidInstanceResponse) => void): Promise<DestroyPrepaidInstanceResponse>;
    /**
     * 本接口（DescribeInstanceParamRecords）查询参数配置修改历史列表。
     */
    DescribeInstanceParamRecords(req: DescribeInstanceParamRecordsRequest, cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void): Promise<DescribeInstanceParamRecordsResponse>;
    /**
     * 本接口（ClearInstance）用于清空实例数据。
> **说明**：在清空数据流程中，系统将自动进行数据备份，耗时较长，请您耐心等待并提前做好时间规划。
     */
    ClearInstance(req: ClearInstanceRequest, cb?: (error: string, rep: ClearInstanceResponse) => void): Promise<ClearInstanceResponse>;
    /**
     * 本接口（DescribeInstanceDealDetail）用于查询预付费订单信息。
     */
    DescribeInstanceDealDetail(req: DescribeInstanceDealDetailRequest, cb?: (error: string, rep: DescribeInstanceDealDetailResponse) => void): Promise<DescribeInstanceDealDetailResponse>;
    /**
     * 本接口（DestroyPostpaidInstance）用于退还按量计费实例。
     */
    DestroyPostpaidInstance(req: DestroyPostpaidInstanceRequest, cb?: (error: string, rep: DestroyPostpaidInstanceResponse) => void): Promise<DestroyPostpaidInstanceResponse>;
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 本接口（ModifyInstance）用于修改实例相关信息。
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 本接口（StartUpInstance）用于按量计费实例解隔离
     */
    StartUpInstance(req: StartUpInstanceRequest, cb?: (error: string, rep: StartUpInstanceResponse) => void): Promise<StartUpInstanceResponse>;
}

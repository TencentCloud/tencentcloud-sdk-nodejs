import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyInstanceParamsResponse, EnableReplicaReadonlyRequest, DescribeInstanceMonitorTopNCmdResponse, ModifyAutoBackupConfigResponse, RestoreInstanceRequest, AllocateWanAddressRequest, ApplyParamsTemplateRequest, UpgradeInstanceVersionResponse, CreateInstancesRequest, CreateReplicationGroupRequest, DescribeInstanceZoneInfoRequest, ModifyNetworkConfigResponse, DescribeInstanceMonitorBigKeyResponse, AssociateSecurityGroupsRequest, DescribeTaskListResponse, ModifyInstanceRequest, KillMasterGroupResponse, RenewInstanceResponse, DescribeSlowLogResponse, DescribeCommonDBInstancesRequest, DescribeDBSecurityGroupsResponse, RestoreInstanceResponse, DescribeBackupUrlRequest, DeleteParamTemplateResponse, DescribeInstancesResponse, DescribeInstanceZoneInfoResponse, ResetPasswordResponse, ClearInstanceRequest, DescribeParamTemplatesRequest, RenewInstanceRequest, UpgradeVersionToMultiAvailabilityZonesResponse, DescribeInstanceParamRecordsResponse, ModifyAutoBackupConfigRequest, DescribeInstanceDealDetailRequest, DescribeProjectSecurityGroupRequest, DescribeInstanceShardsResponse, DestroyPrepaidInstanceRequest, ManualBackupInstanceResponse, DisableReplicaReadonlyResponse, CreateParamTemplateResponse, DescribeInstanceDTSInfoResponse, AddReplicationInstanceResponse, DestroyPostpaidInstanceResponse, SwitchInstanceVipRequest, ChangeReplicaToMasterRequest, ModifyInstanceResponse, ModifyDBInstanceSecurityGroupsResponse, DescribeInstanceMonitorHotKeyRequest, DescribeInstanceDTSInfoRequest, CreateParamTemplateRequest, DescribeTendisSlowLogResponse, DescribeProductInfoResponse, ModifyInstanceAccountRequest, ModifyMaintenanceWindowRequest, DescribeParamTemplateInfoRequest, DescribeBackupUrlResponse, InquiryPriceRenewInstanceResponse, DescribeDBSecurityGroupsRequest, InquiryPriceCreateInstanceResponse, ResetPasswordRequest, ModifyInstanceAccountResponse, DescribeProjectSecurityGroupsResponse, DescribeInstanceMonitorTookDistResponse, DescribeInstanceBackupsResponse, UpgradeVersionToMultiAvailabilityZonesRequest, AllocateWanAddressResponse, DescribeInstanceMonitorTookDistRequest, DeleteReplicationInstanceRequest, KillMasterGroupRequest, DescribeInstanceMonitorTopNCmdTookResponse, DescribeInstanceMonitorBigKeySizeDistRequest, DescribeInstanceAccountRequest, DescribeInstanceParamRecordsRequest, DescribeTaskListRequest, ChangeReplicaToMasterResponse, CreateInstancesResponse, DescribeTaskInfoRequest, ApplyParamsTemplateResponse, DescribeReplicationGroupRequest, DescribeInstanceMonitorTopNCmdRequest, ModifyNetworkConfigRequest, DescribeInstanceSecurityGroupRequest, DescribeInstanceParamsRequest, CleanUpInstanceResponse, ModifyDBInstanceSecurityGroupsRequest, DescribeParamTemplatesResponse, DescribeInstanceShardsRequest, DescribeAutoBackupConfigResponse, InquiryPriceUpgradeInstanceRequest, ModifyParamTemplateResponse, DescribeProjectSecurityGroupsRequest, DescribeInstanceMonitorBigKeySizeDistResponse, CreateInstanceAccountRequest, EnableReplicaReadonlyResponse, DescribeMaintenanceWindowResponse, DescribeInstanceSecurityGroupResponse, ReleaseWanAddressResponse, ModifyConnectionConfigRequest, StartupInstanceResponse, AssociateSecurityGroupsResponse, DescribeTaskInfoResponse, DescribeInstanceMonitorBigKeyTypeDistResponse, DeleteReplicationInstanceResponse, CleanUpInstanceRequest, DescribeInstanceDealDetailResponse, DescribeInstancesRequest, ModfiyInstancePasswordRequest, DescribeSlowLogRequest, DeleteParamTemplateRequest, DescribeAutoBackupConfigRequest, DescribeInstanceMonitorSIPResponse, DestroyPostpaidInstanceRequest, DeleteInstanceAccountRequest, UpgradeInstanceResponse, ManualBackupInstanceRequest, DescribeReplicationGroupResponse, ModifyParamTemplateRequest, ModfiyInstancePasswordResponse, ReleaseWanAddressRequest, InquiryPriceRenewInstanceRequest, ModifyConnectionConfigResponse, ModifyMaintenanceWindowResponse, CreateReplicationGroupResponse, DescribeInstanceMonitorBigKeyTypeDistRequest, DescribeInstanceMonitorTopNCmdTookRequest, DestroyPrepaidInstanceResponse, DescribeCommonDBInstancesResponse, InquiryPriceCreateInstanceRequest, ModifyInstanceParamsRequest, DescribeInstanceNodeInfoRequest, DescribeMaintenanceWindowRequest, AddReplicationInstanceRequest, DescribeTendisSlowLogRequest, DescribeProxySlowLogRequest, DescribeProxySlowLogResponse, UpgradeInstanceVersionRequest, DescribeInstanceAccountResponse, DescribeInstanceMonitorBigKeyRequest, DisableReplicaReadonlyRequest, DescribeParamTemplateInfoResponse, DescribeProductInfoRequest, SwitchInstanceVipResponse, DescribeInstanceParamsResponse, DisassociateSecurityGroupsRequest, StartupInstanceRequest, CreateInstanceAccountResponse, DescribeInstanceBackupsRequest, InquiryPriceUpgradeInstanceResponse, DeleteInstanceAccountResponse, DescribeInstanceMonitorSIPRequest, UpgradeInstanceRequest, DescribeInstanceNodeInfoResponse, DescribeProjectSecurityGroupResponse, DescribeInstanceMonitorHotKeyResponse, DisassociateSecurityGroupsResponse, ClearInstanceResponse } from "./redis_models";
/**
 * redis client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 启用读写分离
     */
    EnableReplicaReadonly(req: EnableReplicaReadonlyRequest, cb?: (error: string, rep: EnableReplicaReadonlyResponse) => void): Promise<EnableReplicaReadonlyResponse>;
    /**
     * 查询复制组
     */
    DescribeReplicationGroup(req: DescribeReplicationGroupRequest, cb?: (error: string, rep: DescribeReplicationGroupResponse) => void): Promise<DescribeReplicationGroupResponse>;
    /**
     * 查询实例节点信息
     */
    DescribeInstanceNodeInfo(req: DescribeInstanceNodeInfoRequest, cb?: (error: string, rep: DescribeInstanceNodeInfoResponse) => void): Promise<DescribeInstanceNodeInfoResponse>;
    /**
     * 查询实例大Key大小分布
     */
    DescribeInstanceMonitorBigKeySizeDist(req: DescribeInstanceMonitorBigKeySizeDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeySizeDistResponse) => void): Promise<DescribeInstanceMonitorBigKeySizeDistResponse>;
    /**
     * 创建实例子账号
     */
    CreateInstanceAccount(req: CreateInstanceAccountRequest, cb?: (error: string, rep: CreateInstanceAccountResponse) => void): Promise<CreateInstanceAccountResponse>;
    /**
     * 修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
     */
    ModifyMaintenanceWindow(req: ModifyMaintenanceWindowRequest, cb?: (error: string, rep: ModifyMaintenanceWindowResponse) => void): Promise<ModifyMaintenanceWindowResponse>;
    /**
     * 查询参数模板列表
     */
    DescribeParamTemplates(req: DescribeParamTemplatesRequest, cb?: (error: string, rep: DescribeParamTemplatesResponse) => void): Promise<DescribeParamTemplatesResponse>;
    /**
     * 关闭外网
     */
    ReleaseWanAddress(req: ReleaseWanAddressRequest, cb?: (error: string, rep: ReleaseWanAddressResponse) => void): Promise<ReleaseWanAddressResponse>;
    /**
     * 查询实例慢查询记录
     */
    DescribeSlowLog(req: DescribeSlowLogRequest, cb?: (error: string, rep: DescribeSlowLogResponse) => void): Promise<DescribeSlowLogResponse>;
    /**
     * 查询任务列表信息
     */
    DescribeTaskList(req: DescribeTaskListRequest, cb?: (error: string, rep: DescribeTaskListResponse) => void): Promise<DescribeTaskListResponse>;
    /**
     * 移除复制组成员 注：接口下线中，请使用 RemoveReplicationInstance
     */
    DeleteReplicationInstance(req: DeleteReplicationInstanceRequest, cb?: (error: string, rep: DeleteReplicationInstanceResponse) => void): Promise<DeleteReplicationInstanceResponse>;
    /**
     * 回收站实例立即下线
     */
    CleanUpInstance(req: CleanUpInstanceRequest, cb?: (error: string, rep: CleanUpInstanceResponse) => void): Promise<CleanUpInstanceResponse>;
    /**
     * 查询参数模板详情。
     */
    DescribeParamTemplateInfo(req: DescribeParamTemplateInfoRequest, cb?: (error: string, rep: DescribeParamTemplateInfoResponse) => void): Promise<DescribeParamTemplateInfoResponse>;
    /**
     * 查看实例子账号信息
     */
    DescribeInstanceAccount(req: DescribeInstanceAccountRequest, cb?: (error: string, rep: DescribeInstanceAccountResponse) => void): Promise<DescribeInstanceAccountResponse>;
    /**
     * 获取备份配置
     */
    DescribeAutoBackupConfig(req: DescribeAutoBackupConfigRequest, cb?: (error: string, rep: DescribeAutoBackupConfigResponse) => void): Promise<DescribeAutoBackupConfigResponse>;
    /**
     * 查询实例CPU耗时
     */
    DescribeInstanceMonitorTopNCmdTook(req: DescribeInstanceMonitorTopNCmdTookRequest, cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdTookResponse) => void): Promise<DescribeInstanceMonitorTopNCmdTookResponse>;
    /**
     * 该接口仅支持多AZ实例副本组提主和单AZ副本提主
     */
    ChangeReplicaToMaster(req: ChangeReplicaToMasterRequest, cb?: (error: string, rep: ChangeReplicaToMasterResponse) => void): Promise<ChangeReplicaToMasterResponse>;
    /**
     * 设置自动备份配置
     */
    ModifyAutoBackupConfig(req: ModifyAutoBackupConfigRequest, cb?: (error: string, rep: ModifyAutoBackupConfigResponse) => void): Promise<ModifyAutoBackupConfigResponse>;
    /**
     * 获取集群版实例分片信息
     */
    DescribeInstanceShards(req: DescribeInstanceShardsRequest, cb?: (error: string, rep: DescribeInstanceShardsResponse) => void): Promise<DescribeInstanceShardsResponse>;
    /**
     * 升级实例
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 恢复 CRS 实例
     */
    RestoreInstance(req: RestoreInstanceRequest, cb?: (error: string, rep: RestoreInstanceResponse) => void): Promise<RestoreInstanceResponse>;
    /**
     * 查询Redis实例列表
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 删除参数模板
     */
    DeleteParamTemplate(req: DeleteParamTemplateRequest, cb?: (error: string, rep: DeleteParamTemplateResponse) => void): Promise<DeleteParamTemplateResponse>;
    /**
     * 添加复制组成员
     */
    AddReplicationInstance(req: AddReplicationInstanceRequest, cb?: (error: string, rep: AddReplicationInstanceResponse) => void): Promise<AddReplicationInstanceResponse>;
    /**
     * 查询实例维护时间窗，在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
     */
    DescribeMaintenanceWindow(req: DescribeMaintenanceWindowRequest, cb?: (error: string, rep: DescribeMaintenanceWindowResponse) => void): Promise<DescribeMaintenanceWindowResponse>;
    /**
     * 查询实例访问命令
     */
    DescribeInstanceMonitorTopNCmd(req: DescribeInstanceMonitorTopNCmdRequest, cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdResponse) => void): Promise<DescribeInstanceMonitorTopNCmdResponse>;
    /**
     * 创建参数模板。
     */
    CreateParamTemplate(req: CreateParamTemplateRequest, cb?: (error: string, rep: CreateParamTemplateResponse) => void): Promise<CreateParamTemplateResponse>;
    /**
     * 禁用读写分离
     */
    DisableReplicaReadonly(req: DisableReplicaReadonlyRequest, cb?: (error: string, rep: DisableReplicaReadonlyResponse) => void): Promise<DisableReplicaReadonlyResponse>;
    /**
     * 查询实例DTS信息
     */
    DescribeInstanceDTSInfo(req: DescribeInstanceDTSInfoRequest, cb?: (error: string, rep: DescribeInstanceDTSInfoResponse) => void): Promise<DescribeInstanceDTSInfoResponse>;
    /**
     * 修改实例网络配置
     */
    ModifyNetworkConfig(req: ModifyNetworkConfigRequest, cb?: (error: string, rep: ModifyNetworkConfigResponse) => void): Promise<ModifyNetworkConfigResponse>;
    /**
     * 创建复制组
     */
    CreateReplicationGroup(req: CreateReplicationGroupRequest, cb?: (error: string, rep: CreateReplicationGroupResponse) => void): Promise<CreateReplicationGroupResponse>;
    /**
     * 查询实例访问来源信息
     */
    DescribeInstanceMonitorSIP(req: DescribeInstanceMonitorSIPRequest, cb?: (error: string, rep: DescribeInstanceMonitorSIPResponse) => void): Promise<DescribeInstanceMonitorSIPResponse>;
    /**
     * 本接口(CreateInstances)用于创建redis实例。
     */
    CreateInstances(req: CreateInstancesRequest, cb?: (error: string, rep: CreateInstancesResponse) => void): Promise<CreateInstancesResponse>;
    /**
     * 修改实例子账号
     */
    ModifyInstanceAccount(req: ModifyInstanceAccountRequest, cb?: (error: string, rep: ModifyInstanceAccountResponse) => void): Promise<ModifyInstanceAccountResponse>;
    /**
     * 将原本实例升级到高版本实例，或者将主从版实例升级到集群版实例
     */
    UpgradeInstanceVersion(req: UpgradeInstanceVersionRequest, cb?: (error: string, rep: UpgradeInstanceVersionResponse) => void): Promise<UpgradeInstanceVersionResponse>;
    /**
     * 查询实例续费价格（包年包月）
     */
    InquiryPriceRenewInstance(req: InquiryPriceRenewInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void): Promise<InquiryPriceRenewInstanceResponse>;
    /**
     * 查询实例扩容价格
     */
    InquiryPriceUpgradeInstance(req: InquiryPriceUpgradeInstanceRequest, cb?: (error: string, rep: InquiryPriceUpgradeInstanceResponse) => void): Promise<InquiryPriceUpgradeInstanceResponse>;
    /**
     * 查询项目安全组信息
     */
    DescribeProjectSecurityGroup(req: DescribeProjectSecurityGroupRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupResponse) => void): Promise<DescribeProjectSecurityGroupResponse>;
    /**
     * 查询实例热Key
     */
    DescribeInstanceMonitorHotKey(req: DescribeInstanceMonitorHotKeyRequest, cb?: (error: string, rep: DescribeInstanceMonitorHotKeyResponse) => void): Promise<DescribeInstanceMonitorHotKeyResponse>;
    /**
     * 用于查询任务结果
     */
    DescribeTaskInfo(req: DescribeTaskInfoRequest, cb?: (error: string, rep: DescribeTaskInfoResponse) => void): Promise<DescribeTaskInfoResponse>;
    /**
     * 开通外网
     */
    AllocateWanAddress(req: AllocateWanAddressRequest, cb?: (error: string, rep: AllocateWanAddressResponse) => void): Promise<AllocateWanAddressResponse>;
    /**
     * 本接口（DescribeProxySlowLog）用于查询代理慢查询。
     */
    DescribeProxySlowLog(req: DescribeProxySlowLogRequest, cb?: (error: string, rep: DescribeProxySlowLogResponse) => void): Promise<DescribeProxySlowLogResponse>;
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 查询Tendis慢查询
     */
    DescribeTendisSlowLog(req: DescribeTendisSlowLogRequest, cb?: (error: string, rep: DescribeTendisSlowLogResponse) => void): Promise<DescribeTendisSlowLogResponse>;
    /**
     * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定多个指定实例。
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 本接口(ModifyInstanceParams)用于修改实例参数。
     */
    ModifyInstanceParams(req: ModifyInstanceParamsRequest, cb?: (error: string, rep: ModifyInstanceParamsResponse) => void): Promise<ModifyInstanceParamsResponse>;
    /**
     * 修改参数模板
     */
    ModifyParamTemplate(req: ModifyParamTemplateRequest, cb?: (error: string, rep: ModifyParamTemplateResponse) => void): Promise<ModifyParamTemplateResponse>;
    /**
     * 查询新购实例价格
     */
    InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse>;
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 按量计费实例销毁
     */
    DestroyPostpaidInstance(req: DestroyPostpaidInstanceRequest, cb?: (error: string, rep: DestroyPostpaidInstanceResponse) => void): Promise<DestroyPostpaidInstanceResponse>;
    /**
     * 查询实例大Key
     */
    DescribeInstanceMonitorBigKey(req: DescribeInstanceMonitorBigKeyRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeyResponse) => void): Promise<DescribeInstanceMonitorBigKeyResponse>;
    /**
     * 在通过DTS支持跨可用区灾备的场景中，通过该接口交换实例VIP完成实例灾备切换。交换VIP后目标实例可写，源和目标实例VIP互换，同时源与目标实例间DTS同步任务断开
     */
    SwitchInstanceVip(req: SwitchInstanceVipRequest, cb?: (error: string, rep: SwitchInstanceVipResponse) => void): Promise<SwitchInstanceVipResponse>;
    /**
     * 查询实例安全组信息
     */
    DescribeInstanceSecurityGroup(req: DescribeInstanceSecurityGroupRequest, cb?: (error: string, rep: DescribeInstanceSecurityGroupResponse) => void): Promise<DescribeInstanceSecurityGroupResponse>;
    /**
     * 查询实例大Key类型分布
     */
    DescribeInstanceMonitorBigKeyTypeDist(req: DescribeInstanceMonitorBigKeyTypeDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeyTypeDistResponse) => void): Promise<DescribeInstanceMonitorBigKeyTypeDistResponse>;
    /**
     * 重置密码
     */
    ResetPassword(req: ResetPasswordRequest, cb?: (error: string, rep: ResetPasswordResponse) => void): Promise<ResetPasswordResponse>;
    /**
     * 模拟故障
     */
    KillMasterGroup(req: KillMasterGroupRequest, cb?: (error: string, rep: KillMasterGroupResponse) => void): Promise<KillMasterGroupResponse>;
    /**
     * 修改实例的连接配置，包括带宽和最大连接数。
     */
    ModifyConnectionConfig(req: ModifyConnectionConfigRequest, cb?: (error: string, rep: ModifyConnectionConfigResponse) => void): Promise<ModifyConnectionConfigResponse>;
    /**
     * 升级实例支持多AZ
     */
    UpgradeVersionToMultiAvailabilityZones(req: UpgradeVersionToMultiAvailabilityZonesRequest, cb?: (error: string, rep: UpgradeVersionToMultiAvailabilityZonesResponse) => void): Promise<UpgradeVersionToMultiAvailabilityZonesResponse>;
    /**
     * 查询Redis实例列表信息。该接口已废弃。
     */
    DescribeCommonDBInstances(req: DescribeCommonDBInstancesRequest, cb?: (error: string, rep: DescribeCommonDBInstancesResponse) => void): Promise<DescribeCommonDBInstancesResponse>;
    /**
     * 本接口查询指定可用区和实例类型下 Redis 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
     */
    DescribeProductInfo(req?: DescribeProductInfoRequest, cb?: (error: string, rep: DescribeProductInfoResponse) => void): Promise<DescribeProductInfoResponse>;
    /**
     * 续费实例
     */
    RenewInstance(req: RenewInstanceRequest, cb?: (error: string, rep: RenewInstanceResponse) => void): Promise<RenewInstanceResponse>;
    /**
     * 手动备份Redis实例
     */
    ManualBackupInstance(req: ManualBackupInstanceRequest, cb?: (error: string, rep: ManualBackupInstanceResponse) => void): Promise<ManualBackupInstanceResponse>;
    /**
     * 修改redis密码
     */
    ModfiyInstancePassword(req: ModfiyInstancePasswordRequest, cb?: (error: string, rep: ModfiyInstancePasswordResponse) => void): Promise<ModfiyInstancePasswordResponse>;
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 查询实例参数列表
     */
    DescribeInstanceParams(req: DescribeInstanceParamsRequest, cb?: (error: string, rep: DescribeInstanceParamsResponse) => void): Promise<DescribeInstanceParamsResponse>;
    /**
     * 应用参数模板到实例
     */
    ApplyParamsTemplate(req: ApplyParamsTemplateRequest, cb?: (error: string, rep: ApplyParamsTemplateResponse) => void): Promise<ApplyParamsTemplateResponse>;
    /**
     * 包年包月实例退还
     */
    DestroyPrepaidInstance(req: DestroyPrepaidInstanceRequest, cb?: (error: string, rep: DestroyPrepaidInstanceResponse) => void): Promise<DestroyPrepaidInstanceResponse>;
    /**
     * 查询参数修改历史列表
     */
    DescribeInstanceParamRecords(req: DescribeInstanceParamRecordsRequest, cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void): Promise<DescribeInstanceParamRecordsResponse>;
    /**
     * 清空Redis实例的实例数据。
     */
    ClearInstance(req: ClearInstanceRequest, cb?: (error: string, rep: ClearInstanceResponse) => void): Promise<ClearInstanceResponse>;
    /**
     * 查询Redis节点详细信息
     */
    DescribeInstanceZoneInfo(req: DescribeInstanceZoneInfoRequest, cb?: (error: string, rep: DescribeInstanceZoneInfoResponse) => void): Promise<DescribeInstanceZoneInfoResponse>;
    /**
     * 查询订单信息
     */
    DescribeInstanceDealDetail(req: DescribeInstanceDealDetailRequest, cb?: (error: string, rep: DescribeInstanceDealDetailResponse) => void): Promise<DescribeInstanceDealDetailResponse>;
    /**
     * 删除实例子账号
     */
    DeleteInstanceAccount(req: DeleteInstanceAccountRequest, cb?: (error: string, rep: DeleteInstanceAccountResponse) => void): Promise<DeleteInstanceAccountResponse>;
    /**
     * 查询 CRS 实例备份列表
     */
    DescribeInstanceBackups(req: DescribeInstanceBackupsRequest, cb?: (error: string, rep: DescribeInstanceBackupsResponse) => void): Promise<DescribeInstanceBackupsResponse>;
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 实例解隔离
     */
    StartupInstance(req: StartupInstanceRequest, cb?: (error: string, rep: StartupInstanceResponse) => void): Promise<StartupInstanceResponse>;
    /**
     * 修改实例相关信息
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 查询实例访问的耗时分布
     */
    DescribeInstanceMonitorTookDist(req: DescribeInstanceMonitorTookDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorTookDistResponse) => void): Promise<DescribeInstanceMonitorTookDistResponse>;
    /**
     * 查询备份Rdb下载地址(接口灰度中，需要加白名单使用)
     */
    DescribeBackupUrl(req: DescribeBackupUrlRequest, cb?: (error: string, rep: DescribeBackupUrlResponse) => void): Promise<DescribeBackupUrlResponse>;
}

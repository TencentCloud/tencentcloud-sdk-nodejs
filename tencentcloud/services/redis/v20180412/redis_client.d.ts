import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpgradeProxyVersionRequest, UpgradeSmallVersionRequest, ModifyInstanceParamsResponse, EnableReplicaReadonlyRequest, ModifyInstanceAvailabilityZonesRequest, DescribeInstanceMonitorTopNCmdResponse, ModifyInstanceAvailabilityZonesResponse, ModifyAutoBackupConfigResponse, RestoreInstanceRequest, AllocateWanAddressRequest, ApplyParamsTemplateRequest, DescribeReplicationGroupInstanceRequest, UpgradeInstanceVersionResponse, CreateInstancesRequest, CreateReplicationGroupRequest, DescribeInstanceSpecBandwidthResponse, DescribeInstanceZoneInfoRequest, ModifyConnectionConfigResponse, ModifyNetworkConfigResponse, DescribeInstanceMonitorBigKeyResponse, AssociateSecurityGroupsRequest, DescribeTaskListResponse, ModifyInstancePasswordResponse, DescribeSecondLevelBackupInfoResponse, RenewInstanceResponse, DescribeSlowLogResponse, DescribeCommonDBInstancesRequest, DescribeDBSecurityGroupsResponse, RestoreInstanceResponse, ModifyBackupDownloadRestrictionResponse, DescribeBackupUrlRequest, DeleteParamTemplateResponse, DescribeInstancesResponse, DescribeInstanceZoneInfoResponse, ResetPasswordResponse, ClearInstanceRequest, UpgradeInstanceVersionRequest, DescribeBandwidthRangeResponse, DescribeParamTemplatesRequest, RenewInstanceRequest, UpgradeVersionToMultiAvailabilityZonesResponse, DescribeBandwidthRangeRequest, DescribeInstanceParamRecordsResponse, ModifyAutoBackupConfigRequest, DescribeInstanceDealDetailRequest, KillMasterGroupResponse, DescribeProjectSecurityGroupRequest, DescribeInstanceShardsResponse, DescribeRedisClusterOverviewResponse, DisableReplicaReadonlyRequest, ModifyInstanceLogDeliveryResponse, ModifyBackupDownloadRestrictionRequest, DisableReplicaReadonlyResponse, DestroyPrepaidInstanceRequest, CreateParamTemplateResponse, DescribeInstanceDTSInfoResponse, DescribeInstanceEventsRequest, DescribeGlobalReplicationAreaRequest, AddReplicationInstanceResponse, DestroyPostpaidInstanceResponse, SwitchInstanceVipRequest, ChangeReplicaToMasterRequest, ModifyInstanceResponse, ModifyDBInstanceSecurityGroupsResponse, ChangeMasterInstanceRequest, DescribeInstanceDTSInfoRequest, CreateParamTemplateRequest, DescribeTendisSlowLogResponse, DescribeProductInfoResponse, ModifyInstanceAccountRequest, ModifyMaintenanceWindowRequest, DescribeParamTemplateInfoRequest, DescribeBackupUrlResponse, InquiryPriceRenewInstanceResponse, DescribeDBSecurityGroupsRequest, ModifyInstanceLogDeliveryRequest, DescribeProductInfoRequest, InquiryPriceCreateInstanceResponse, DescribeInstanceParamsResponse, DescribeReplicationGroupInstanceResponse, UpgradeProxyVersionResponse, ResetPasswordRequest, ModifyInstanceAccountResponse, DescribeProjectSecurityGroupsResponse, ModifyInstanceReadOnlyResponse, DescribeBackupDetailRequest, DescribeInstanceMonitorTookDistResponse, DescribeInstanceBackupsResponse, UpgradeVersionToMultiAvailabilityZonesRequest, ModfiyInstancePasswordResponse, AllocateWanAddressResponse, DescribeInstanceMonitorTookDistRequest, DeleteReplicationInstanceRequest, SwitchAccessNewInstanceRequest, KillMasterGroupRequest, SwitchAccessNewInstanceResponse, CloneInstancesResponse, DescribeInstanceMonitorTopNCmdTookResponse, CloseSSLRequest, DescribeInstanceMonitorBigKeySizeDistRequest, DescribeInstanceAccountRequest, DescribeInstanceLogDeliveryResponse, DescribeInstanceParamRecordsRequest, DescribeTaskListRequest, ChangeMasterInstanceResponse, ModifyInstanceEventRequest, DescribeBackupDetailResponse, ChangeReplicaToMasterResponse, CreateInstancesResponse, DescribeTaskInfoRequest, CloneInstancesRequest, ApplyParamsTemplateResponse, DescribeReplicationGroupRequest, DescribeInstanceMonitorTopNCmdRequest, ModifyNetworkConfigRequest, DescribeInstanceSecurityGroupRequest, DescribeInstanceParamsRequest, CleanUpInstanceResponse, ModifyDBInstanceSecurityGroupsRequest, DescribeParamTemplatesResponse, DescribeInstanceShardsRequest, DescribeAutoBackupConfigResponse, InquiryPriceUpgradeInstanceRequest, ModifyParamTemplateResponse, DescribeProjectSecurityGroupsRequest, DescribeInstanceMonitorBigKeySizeDistResponse, DescribeInstanceEventsResponse, CreateInstanceAccountRequest, RemoveReplicationInstanceRequest, EnableReplicaReadonlyResponse, ModifyInstanceRequest, DescribeMaintenanceWindowResponse, DescribeInstanceSecurityGroupResponse, ReleaseWanAddressResponse, ModifyConnectionConfigRequest, ManualBackupInstanceResponse, ModifyInstanceBackupModeResponse, SwitchProxyResponse, StartupInstanceResponse, AssociateSecurityGroupsResponse, DescribeTaskInfoResponse, DescribeInstanceMonitorBigKeyTypeDistResponse, DeleteReplicationInstanceResponse, CleanUpInstanceRequest, DescribeInstanceDealDetailResponse, ModifyReplicationGroupRequest, DescribeInstancesRequest, ModfiyInstancePasswordRequest, DescribeSlowLogRequest, ModifyInstancePasswordRequest, ModifyReplicationGroupResponse, DeleteParamTemplateRequest, DescribeAutoBackupConfigRequest, DescribeInstanceMonitorSIPResponse, DestroyPostpaidInstanceRequest, ChangeInstanceRoleRequest, DescribeInstanceSupportFeatureRequest, DeleteInstanceAccountRequest, DescribeInstanceMonitorHotKeyRequest, DescribeBackupDownloadRestrictionResponse, UpgradeInstanceResponse, ManualBackupInstanceRequest, DescribeReplicationGroupResponse, ModifyParamTemplateRequest, ReleaseWanAddressRequest, InquiryPriceRenewInstanceRequest, CloseSSLResponse, ModifyMaintenanceWindowResponse, CreateReplicationGroupResponse, DescribeInstanceMonitorBigKeyTypeDistRequest, DescribeInstanceMonitorTopNCmdTookRequest, DestroyPrepaidInstanceResponse, DescribeRedisClusterOverviewRequest, DescribeCommonDBInstancesResponse, InquiryPriceCreateInstanceRequest, DescribeRedisClustersRequest, UpgradeSmallVersionResponse, ModifyInstanceParamsRequest, DescribeSSLStatusRequest, OpenSSLRequest, DescribeInstanceNodeInfoRequest, DescribeMaintenanceWindowRequest, DescribeInstanceSupportFeatureResponse, DescribeInstanceLogDeliveryRequest, AddReplicationInstanceRequest, DescribeSSLStatusResponse, DescribeTendisSlowLogRequest, DescribeProxySlowLogRequest, DescribeRedisClustersResponse, ModifyInstanceBackupModeRequest, DescribeProxySlowLogResponse, ModifyInstanceReadOnlyRequest, DescribeInstanceAccountResponse, DescribeInstanceMonitorBigKeyRequest, DescribeBackupDownloadRestrictionRequest, DescribeParamTemplateInfoResponse, SwitchProxyRequest, DescribeInstanceSpecBandwidthRequest, SwitchInstanceVipResponse, DisassociateSecurityGroupsRequest, StartupInstanceRequest, CreateInstanceAccountResponse, DescribeInstanceBackupsRequest, RemoveReplicationInstanceResponse, DescribeSecondLevelBackupInfoRequest, InquiryPriceUpgradeInstanceResponse, DeleteInstanceAccountResponse, DescribeInstanceMonitorSIPRequest, OpenSSLResponse, ChangeInstanceRoleResponse, DescribeGlobalReplicationAreaResponse, ModifyInstanceEventResponse, UpgradeInstanceRequest, DescribeInstanceNodeInfoResponse, DescribeProjectSecurityGroupResponse, DescribeInstanceMonitorHotKeyResponse, DisassociateSecurityGroupsResponse, ClearInstanceResponse } from "./redis_models";
/**
 * redis client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（ModifyInstanceReadOnly）用于设置实例输入模式。
     */
    ModifyInstanceReadOnly(req: ModifyInstanceReadOnlyRequest, cb?: (error: string, rep: ModifyInstanceReadOnlyResponse) => void): Promise<ModifyInstanceReadOnlyResponse>;
    /**
     * 腾讯云数据库 Redis 已经于2022年10月31日下线查询实例大 Key 接口。具体公告，请参见 [查询实例大 Key 接口下线公告](https://cloud.tencent.com/document/product/239/81005)。
     */
    DescribeInstanceMonitorBigKeySizeDist(req: DescribeInstanceMonitorBigKeySizeDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeySizeDistResponse) => void): Promise<DescribeInstanceMonitorBigKeySizeDistResponse>;
    /**
     * 本接口（DescribeTaskList）用于查询指定实例的任务列表信息。

- 可查询近30天内任务列表数据。
     */
    DescribeTaskList(req: DescribeTaskListRequest, cb?: (error: string, rep: DescribeTaskListResponse) => void): Promise<DescribeTaskListResponse>;
    /**
     * 本接口（DeleteReplicationInstance）移除复制组成员。注：该接口下线中，请使用 [RemoveReplicationInstance](https://cloud.tencent.com/document/product/239/90099)。
     */
    DeleteReplicationInstance(req: DeleteReplicationInstanceRequest, cb?: (error: string, rep: DeleteReplicationInstanceResponse) => void): Promise<DeleteReplicationInstanceResponse>;
    /**
     * 本接口（CleanUpInstance）用于立即下线回收站的实例。
     */
    CleanUpInstance(req: CleanUpInstanceRequest, cb?: (error: string, rep: CleanUpInstanceResponse) => void): Promise<CleanUpInstanceResponse>;
    /**
     * 本接口（DescribeInstanceAccount）用于查看实例子账号信息。
     */
    DescribeInstanceAccount(req: DescribeInstanceAccountRequest, cb?: (error: string, rep: DescribeInstanceAccountResponse) => void): Promise<DescribeInstanceAccountResponse>;
    /**
     * 本接口（SwitchAccessNewInstance）针对处于时间窗口中待切换操作的实例，用户可主动发起该操作。
     */
    SwitchAccessNewInstance(req: SwitchAccessNewInstanceRequest, cb?: (error: string, rep: SwitchAccessNewInstanceResponse) => void): Promise<SwitchAccessNewInstanceResponse>;
    /**
     * 本接口（ChangeReplicaToMaster）适用于实例副本组提主或副本提主。
     */
    ChangeReplicaToMaster(req: ChangeReplicaToMasterRequest, cb?: (error: string, rep: ChangeReplicaToMasterResponse) => void): Promise<ChangeReplicaToMasterResponse>;
    /**
     * 本接口（DescribeInstanceMonitorTopNCmd）用于查询实例访问命令。
     */
    DescribeInstanceMonitorTopNCmd(req: DescribeInstanceMonitorTopNCmdRequest, cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdResponse) => void): Promise<DescribeInstanceMonitorTopNCmdResponse>;
    /**
     * 本接口（UpgradeInstanceVersion）用于将当前实例升级到更高版本，或者将当前标准架构升级至集群架构。
     */
    UpgradeInstanceVersion(req: UpgradeInstanceVersionRequest, cb?: (error: string, rep: UpgradeInstanceVersionResponse) => void): Promise<UpgradeInstanceVersionResponse>;
    /**
     * 本接口（DescribeProductInfo）用于查询全地域 Redis 的售卖规格。
     */
    DescribeProductInfo(req?: DescribeProductInfoRequest, cb?: (error: string, rep: DescribeProductInfoResponse) => void): Promise<DescribeProductInfoResponse>;
    /**
     * 本接口（DescribeTaskInfo）用于获取指定任务的执行情况。
     */
    DescribeTaskInfo(req: DescribeTaskInfoRequest, cb?: (error: string, rep: DescribeTaskInfoResponse) => void): Promise<DescribeTaskInfoResponse>;
    /**
     * 修改实例的备份模式
     */
    ModifyInstanceBackupMode(req: ModifyInstanceBackupModeRequest, cb?: (error: string, rep: ModifyInstanceBackupModeResponse) => void): Promise<ModifyInstanceBackupModeResponse>;
    /**
     * 本接口（ModifyBackupDownloadRestriction）用于修改备份文件下载的网络信息与地址。
     */
    ModifyBackupDownloadRestriction(req: ModifyBackupDownloadRestrictionRequest, cb?: (error: string, rep: ModifyBackupDownloadRestrictionResponse) => void): Promise<ModifyBackupDownloadRestrictionResponse>;
    /**
     * 本接口（ModifyInstanceAccount）用于修改实例子账号。
     */
    ModifyInstanceAccount(req: ModifyInstanceAccountRequest, cb?: (error: string, rep: ModifyInstanceAccountResponse) => void): Promise<ModifyInstanceAccountResponse>;
    /**
     * 本接口（DescribeInstanceSecurityGroup）用于查询实例安全组信息。
     */
    DescribeInstanceSecurityGroup(req: DescribeInstanceSecurityGroupRequest, cb?: (error: string, rep: DescribeInstanceSecurityGroupResponse) => void): Promise<DescribeInstanceSecurityGroupResponse>;
    /**
     * 本接口（DescribeBackupDetail）用于查询实例的备份信息详情。
     */
    DescribeBackupDetail(req: DescribeBackupDetailRequest, cb?: (error: string, rep: DescribeBackupDetailResponse) => void): Promise<DescribeBackupDetailResponse>;
    /**
     * 本接口（UpgradeVersionToMultiAvailabilityZones）用于升级实例支持多AZ。
     */
    UpgradeVersionToMultiAvailabilityZones(req: UpgradeVersionToMultiAvailabilityZonesRequest, cb?: (error: string, rep: UpgradeVersionToMultiAvailabilityZonesResponse) => void): Promise<UpgradeVersionToMultiAvailabilityZonesResponse>;
    /**
     * 本接口（DescribeGlobalReplicationArea）用于查询全球复制支持地域信息。
     */
    DescribeGlobalReplicationArea(req?: DescribeGlobalReplicationAreaRequest, cb?: (error: string, rep: DescribeGlobalReplicationAreaResponse) => void): Promise<DescribeGlobalReplicationAreaResponse>;
    /**
     * 本接口（ModifyInstanceParams）用于修改 Redis 实例的参数配置。
     */
    ModifyInstanceParams(req: ModifyInstanceParamsRequest, cb?: (error: string, rep: ModifyInstanceParamsResponse) => void): Promise<ModifyInstanceParamsResponse>;
    /**
     * 本接口（ClearInstance）用于清空实例数据。
     */
    ClearInstance(req: ClearInstanceRequest, cb?: (error: string, rep: ClearInstanceResponse) => void): Promise<ClearInstanceResponse>;
    /**
     * 本接口（DescribeBackupUrl）用于查询备份 Rdb 文件的下载地址。
     */
    DescribeBackupUrl(req: DescribeBackupUrlRequest, cb?: (error: string, rep: DescribeBackupUrlResponse) => void): Promise<DescribeBackupUrlResponse>;
    /**
     * 查询实例秒级备份信息
     */
    DescribeSecondLevelBackupInfo(req: DescribeSecondLevelBackupInfoRequest, cb?: (error: string, rep: DescribeSecondLevelBackupInfoResponse) => void): Promise<DescribeSecondLevelBackupInfoResponse>;
    /**
     * 本接口（ModifyConnectionConfig）用于修改实例的连接配置，包括带宽和最大连接数。
     */
    ModifyConnectionConfig(req: ModifyConnectionConfigRequest, cb?: (error: string, rep: ModifyConnectionConfigResponse) => void): Promise<ModifyConnectionConfigResponse>;
    /**
     * 本接口（DescribeInstanceLogDelivery）用于查询实例的日志投递配置。
     */
    DescribeInstanceLogDelivery(req: DescribeInstanceLogDeliveryRequest, cb?: (error: string, rep: DescribeInstanceLogDeliveryResponse) => void): Promise<DescribeInstanceLogDeliveryResponse>;
    /**
     * 本接口（ModifyInstance）用于修改实例相关信息。
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 本接口（ChangeInstanceRole）用于更换复制组内实例的角色。
     */
    ChangeInstanceRole(req: ChangeInstanceRoleRequest, cb?: (error: string, rep: ChangeInstanceRoleResponse) => void): Promise<ChangeInstanceRoleResponse>;
    /**
     * 本接口（DescribeInstanceNodeInfo）用于查询实例节点信息。
     */
    DescribeInstanceNodeInfo(req: DescribeInstanceNodeInfoRequest, cb?: (error: string, rep: DescribeInstanceNodeInfoResponse) => void): Promise<DescribeInstanceNodeInfoResponse>;
    /**
     * 本接口（CreateInstanceAccount）用于自定义访问实例的账号。
     */
    CreateInstanceAccount(req: CreateInstanceAccountRequest, cb?: (error: string, rep: CreateInstanceAccountResponse) => void): Promise<CreateInstanceAccountResponse>;
    /**
     * 本接口（ModifyInstanceEvent）用于修改实例的运维事件的执行计划。
     */
    ModifyInstanceEvent(req: ModifyInstanceEventRequest, cb?: (error: string, rep: ModifyInstanceEventResponse) => void): Promise<ModifyInstanceEventResponse>;
    /**
     * 本接口（UpgradeProxyVersion）用于升级实例 Proxy 版本。
     */
    UpgradeProxyVersion(req: UpgradeProxyVersionRequest, cb?: (error: string, rep: UpgradeProxyVersionResponse) => void): Promise<UpgradeProxyVersionResponse>;
    /**
     * 本接口（DescribeInstanceMonitorTopNCmdTook）用于查询实例 CPU 耗时。
     */
    DescribeInstanceMonitorTopNCmdTook(req: DescribeInstanceMonitorTopNCmdTookRequest, cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdTookResponse) => void): Promise<DescribeInstanceMonitorTopNCmdTookResponse>;
    /**
     * 本接口（ModifyAutoBackupConfig）用于设置自动备份的配置。
     */
    ModifyAutoBackupConfig(req: ModifyAutoBackupConfigRequest, cb?: (error: string, rep: ModifyAutoBackupConfigResponse) => void): Promise<ModifyAutoBackupConfigResponse>;
    /**
     * 本接口（DeleteParamTemplate）用于删除参数模板。
     */
    DeleteParamTemplate(req: DeleteParamTemplateRequest, cb?: (error: string, rep: DeleteParamTemplateResponse) => void): Promise<DeleteParamTemplateResponse>;
    /**
     * 本接口（AddReplicationInstance）用于为全球复制组添加实例成员。
     */
    AddReplicationInstance(req: AddReplicationInstanceRequest, cb?: (error: string, rep: AddReplicationInstanceResponse) => void): Promise<AddReplicationInstanceResponse>;
    /**
     * 本接口（CloneInstances）用于基于当前实例的备份文件克隆一个完整的新实例。
     */
    CloneInstances(req: CloneInstancesRequest, cb?: (error: string, rep: CloneInstancesResponse) => void): Promise<CloneInstancesResponse>;
    /**
     * 该接口（CreateParamTemplate）用于创建参数模板。
     */
    CreateParamTemplate(req: CreateParamTemplateRequest, cb?: (error: string, rep: CreateParamTemplateResponse) => void): Promise<CreateParamTemplateResponse>;
    /**
     * 本接口（DisableReplicaReadonly）用于禁用读写分离功能。
     */
    DisableReplicaReadonly(req: DisableReplicaReadonlyRequest, cb?: (error: string, rep: DisableReplicaReadonlyResponse) => void): Promise<DisableReplicaReadonlyResponse>;
    /**
     * 本接口（DescribeInstanceDTSInfo）用于查询实例 DTS 信息。
     */
    DescribeInstanceDTSInfo(req: DescribeInstanceDTSInfoRequest, cb?: (error: string, rep: DescribeInstanceDTSInfoResponse) => void): Promise<DescribeInstanceDTSInfoResponse>;
    /**
     * 本接口（InquiryPriceUpgradeInstance）用于查询实例扩容价格。
     */
    InquiryPriceUpgradeInstance(req: InquiryPriceUpgradeInstanceRequest, cb?: (error: string, rep: InquiryPriceUpgradeInstanceResponse) => void): Promise<InquiryPriceUpgradeInstanceResponse>;
    /**
     * 本接口（RenewInstance）可用于为实例续费。
     */
    RenewInstance(req: RenewInstanceRequest, cb?: (error: string, rep: RenewInstanceResponse) => void): Promise<RenewInstanceResponse>;
    /**
     * 本接口（ModifyInstanceLogDelivery）用于开启或关闭投递实例日志到CLS。
     */
    ModifyInstanceLogDelivery(req: ModifyInstanceLogDeliveryRequest, cb?: (error: string, rep: ModifyInstanceLogDeliveryResponse) => void): Promise<ModifyInstanceLogDeliveryResponse>;
    /**
     * 本接口（AllocateWanAddress）用于开通实例外网访问。
     */
    AllocateWanAddress(req: AllocateWanAddressRequest, cb?: (error: string, rep: AllocateWanAddressResponse) => void): Promise<AllocateWanAddressResponse>;
    /**
     * 本接口（DescribeProjectSecurityGroups）用于查询项目的安全组详情。
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 本接口（DescribeTendisSlowLog）用于查询 Tendis 实例慢查询。
     */
    DescribeTendisSlowLog(req: DescribeTendisSlowLogRequest, cb?: (error: string, rep: DescribeTendisSlowLogResponse) => void): Promise<DescribeTendisSlowLogResponse>;
    /**
     * 本接口（ModifyParamTemplate）用于修改参数模板。
     */
    ModifyParamTemplate(req: ModifyParamTemplateRequest, cb?: (error: string, rep: ModifyParamTemplateResponse) => void): Promise<ModifyParamTemplateResponse>;
    /**
     * 本接口（InquiryPriceCreateInstance）用于查询新购实例价格。
     */
    InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse>;
    /**
     * 本接口（ModifyReplicationGroup）用于修改复制组信息。
     */
    ModifyReplicationGroup(req: ModifyReplicationGroupRequest, cb?: (error: string, rep: ModifyReplicationGroupResponse) => void): Promise<ModifyReplicationGroupResponse>;
    /**
     * 本接口（DescribeInstanceSupportFeature）用于查询实例支持的功能特性。
     */
    DescribeInstanceSupportFeature(req: DescribeInstanceSupportFeatureRequest, cb?: (error: string, rep: DescribeInstanceSupportFeatureResponse) => void): Promise<DescribeInstanceSupportFeatureResponse>;
    /**
     * 本接口（DescribeInstanceParams）用于查询实例参数列表。
     */
    DescribeInstanceParams(req: DescribeInstanceParamsRequest, cb?: (error: string, rep: DescribeInstanceParamsResponse) => void): Promise<DescribeInstanceParamsResponse>;
    /**
     * 腾讯云数据库 Redis 已经于2022年10月31日下线查询实例大 Key 接口。具体公告，请参见 [查询实例大 Key 接口下线公告](https://cloud.tencent.com/document/product/239/81005)。
     */
    DescribeInstanceMonitorBigKeyTypeDist(req: DescribeInstanceMonitorBigKeyTypeDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeyTypeDistResponse) => void): Promise<DescribeInstanceMonitorBigKeyTypeDistResponse>;
    /**
     * 本接口（ReleaseWanAddress）用于关闭外网访问。
     */
    ReleaseWanAddress(req: ReleaseWanAddressRequest, cb?: (error: string, rep: ReleaseWanAddressResponse) => void): Promise<ReleaseWanAddressResponse>;
    /**
     * 本接口（DisassociateSecurityGroups）用于安全组批量解绑实例。
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 本接口（ManualBackupInstance）用于手动备份Redis实例。
     */
    ManualBackupInstance(req: ManualBackupInstanceRequest, cb?: (error: string, rep: ManualBackupInstanceResponse) => void): Promise<ManualBackupInstanceResponse>;
    /**
     * 本接口（DescribeInstanceSpecBandwidth）用于查询或计算带宽规格。
     */
    DescribeInstanceSpecBandwidth(req?: DescribeInstanceSpecBandwidthRequest, cb?: (error: string, rep: DescribeInstanceSpecBandwidthResponse) => void): Promise<DescribeInstanceSpecBandwidthResponse>;
    /**
     * 本接口（DeleteInstanceAccount）用于删除实例子账号。
     */
    DeleteInstanceAccount(req: DeleteInstanceAccountRequest, cb?: (error: string, rep: DeleteInstanceAccountResponse) => void): Promise<DeleteInstanceAccountResponse>;
    /**
     * 本接口（SwitchProxy）为 Proxy 模拟故障接口。
     */
    SwitchProxy(req: SwitchProxyRequest, cb?: (error: string, rep: SwitchProxyResponse) => void): Promise<SwitchProxyResponse>;
    /**
     * 本接口（DestroyPrepaidInstance）用于退还包年包月计费的 Redis 实例。
     */
    DestroyPrepaidInstance(req: DestroyPrepaidInstanceRequest, cb?: (error: string, rep: DestroyPrepaidInstanceResponse) => void): Promise<DestroyPrepaidInstanceResponse>;
    /**
     * 本接口（DescribeInstanceParamRecords）用于查询参数修改历史列表。
     */
    DescribeInstanceParamRecords(req: DescribeInstanceParamRecordsRequest, cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void): Promise<DescribeInstanceParamRecordsResponse>;
    /**
     * 本接口（DescribeParamTemplateInfo）用于查询参数模板详情。
     */
    DescribeParamTemplateInfo(req: DescribeParamTemplateInfoRequest, cb?: (error: string, rep: DescribeParamTemplateInfoResponse) => void): Promise<DescribeParamTemplateInfoResponse>;
    /**
     * 本接口（DestroyPostpaidInstance）用于销毁按量计费实例。
     */
    DestroyPostpaidInstance(req: DestroyPostpaidInstanceRequest, cb?: (error: string, rep: DestroyPostpaidInstanceResponse) => void): Promise<DestroyPostpaidInstanceResponse>;
    /**
     * 本接口（StartupInstance）用于实例解隔离。
     */
    StartupInstance(req: StartupInstanceRequest, cb?: (error: string, rep: StartupInstanceResponse) => void): Promise<StartupInstanceResponse>;
    /**
     * 本接口（DescribeInstanceMonitorTookDist）用于查询实例访问的耗时分布。
     */
    DescribeInstanceMonitorTookDist(req: DescribeInstanceMonitorTookDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorTookDistResponse) => void): Promise<DescribeInstanceMonitorTookDistResponse>;
    /**
     * 本接口（DescribeParamTemplates）用于查询参数模板列表。
     */
    DescribeParamTemplates(req: DescribeParamTemplatesRequest, cb?: (error: string, rep: DescribeParamTemplatesResponse) => void): Promise<DescribeParamTemplatesResponse>;
    /**
     * 本接口（DescribeInstanceBackups）用于查询实例备份列表。
     */
    DescribeInstanceBackups(req: DescribeInstanceBackupsRequest, cb?: (error: string, rep: DescribeInstanceBackupsResponse) => void): Promise<DescribeInstanceBackupsResponse>;
    /**
     * 本接口（ResetPassword）用于重置实例访问密码。
     */
    ResetPassword(req: ResetPasswordRequest, cb?: (error: string, rep: ResetPasswordResponse) => void): Promise<ResetPasswordResponse>;
    /**
     * 本接口（RemoveReplicationInstance）用于移除复制组中的实例。
     */
    RemoveReplicationInstance(req: RemoveReplicationInstanceRequest, cb?: (error: string, rep: RemoveReplicationInstanceResponse) => void): Promise<RemoveReplicationInstanceResponse>;
    /**
     * 本接口（UpgradeSmallVersion）用于实例小版本升级。
     */
    UpgradeSmallVersion(req: UpgradeSmallVersionRequest, cb?: (error: string, rep: UpgradeSmallVersionResponse) => void): Promise<UpgradeSmallVersionResponse>;
    /**
     * 本接口（ModifyInstancePassword）用于修改实例访问密码。
     */
    ModifyInstancePassword(req: ModifyInstancePasswordRequest, cb?: (error: string, rep: ModifyInstancePasswordResponse) => void): Promise<ModifyInstancePasswordResponse>;
    /**
     * 本接口（CreateReplicationGroup）用于创建复制组。
     */
    CreateReplicationGroup(req: CreateReplicationGroupRequest, cb?: (error: string, rep: CreateReplicationGroupResponse) => void): Promise<CreateReplicationGroupResponse>;
    /**
     * 该接口已下线，请使用数据库智能管家 DBbrain 接口 [DescribeProxyProcessStatistics](https://cloud.tencent.com/document/product/1130/84544) 获取实例访问来源。
     */
    DescribeInstanceMonitorSIP(req: DescribeInstanceMonitorSIPRequest, cb?: (error: string, rep: DescribeInstanceMonitorSIPResponse) => void): Promise<DescribeInstanceMonitorSIPResponse>;
    /**
     * 本接口（DescribeProjectSecurityGroup）用于查询项目安全组信息。
     */
    DescribeProjectSecurityGroup(req: DescribeProjectSecurityGroupRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupResponse) => void): Promise<DescribeProjectSecurityGroupResponse>;
    /**
     * 本接口（DescribeInstanceMonitorHotKey）用于查询实例热Key。
     */
    DescribeInstanceMonitorHotKey(req: DescribeInstanceMonitorHotKeyRequest, cb?: (error: string, rep: DescribeInstanceMonitorHotKeyResponse) => void): Promise<DescribeInstanceMonitorHotKeyResponse>;
    /**
     * 本接口（ModfiyInstancePassword）用于修改实例访问密码。鉴于该接口名存在拼写错误，现已更正为（[ModifyInstancePassword](https://cloud.tencent.com/document/product/239/111555)）接口，推荐使用更正后的接口。
     */
    ModfiyInstancePassword(req: ModfiyInstancePasswordRequest, cb?: (error: string, rep: ModfiyInstancePasswordResponse) => void): Promise<ModfiyInstancePasswordResponse>;
    /**
     * 本接口（EnableReplicaReadonly）用于启用读写分离功能。
     */
    EnableReplicaReadonly(req: EnableReplicaReadonlyRequest, cb?: (error: string, rep: EnableReplicaReadonlyResponse) => void): Promise<EnableReplicaReadonlyResponse>;
    /**
     * 本接口 (AssociateSecurityGroups) 用于将一个安全组绑定于一个或多个数据库实例。创建实例时，未配置安全组，建议通过该接口，绑定安全组。
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 本接口（DescribeSSLStatus）用于查询实例 SSL 认证相关信息，包括开启状态、配置状态、证书地址等。
     */
    DescribeSSLStatus(req: DescribeSSLStatusRequest, cb?: (error: string, rep: DescribeSSLStatusResponse) => void): Promise<DescribeSSLStatusResponse>;
    /**
     * 腾讯云数据库 Redis 已经于2022年10月31日下线查询实例大 Key 接口。具体公告，请参见[查询实例大 Key 接口下线公告](https://cloud.tencent.com/document/product/239/81005)。
     */
    DescribeInstanceMonitorBigKey(req: DescribeInstanceMonitorBigKeyRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeyResponse) => void): Promise<DescribeInstanceMonitorBigKeyResponse>;
    /**
     * 本接口（DescribeRedisClusters）用于查询Redis独享集群列表。
     */
    DescribeRedisClusters(req: DescribeRedisClustersRequest, cb?: (error: string, rep: DescribeRedisClustersResponse) => void): Promise<DescribeRedisClustersResponse>;
    /**
     * 本接口（KillMasterGroup）用于模拟故障。
     */
    KillMasterGroup(req: KillMasterGroupRequest, cb?: (error: string, rep: KillMasterGroupResponse) => void): Promise<KillMasterGroupResponse>;
    /**
     * 本接口（DescribeCommonDBInstances）用于查询Redis实例列表信息。当前该接口已废弃。
     */
    DescribeCommonDBInstances(req: DescribeCommonDBInstancesRequest, cb?: (error: string, rep: DescribeCommonDBInstancesResponse) => void): Promise<DescribeCommonDBInstancesResponse>;
    /**
     * 本接口（DescribeSlowLog）查询实例慢查询记录。
     */
    DescribeSlowLog(req: DescribeSlowLogRequest, cb?: (error: string, rep: DescribeSlowLogResponse) => void): Promise<DescribeSlowLogResponse>;
    /**
     * 本接口（DescribeBackupDownloadRestriction）用于查询当前地域数据库备份文件的下载地址。
     */
    DescribeBackupDownloadRestriction(req?: DescribeBackupDownloadRestrictionRequest, cb?: (error: string, rep: DescribeBackupDownloadRestrictionResponse) => void): Promise<DescribeBackupDownloadRestrictionResponse>;
    /**
     * 本接口（DescribeInstanceZoneInfo）用于查询 Redis 节点详细信息。
     */
    DescribeInstanceZoneInfo(req: DescribeInstanceZoneInfoRequest, cb?: (error: string, rep: DescribeInstanceZoneInfoResponse) => void): Promise<DescribeInstanceZoneInfoResponse>;
    /**
     * 本接口（DescribeInstanceEvents）用于查询 Redis 实例事件信息。
     */
    DescribeInstanceEvents(req: DescribeInstanceEventsRequest, cb?: (error: string, rep: DescribeInstanceEventsResponse) => void): Promise<DescribeInstanceEventsResponse>;
    /**
     * 在通过 DTS 支持跨可用区灾备的场景中，通过该接口（SwitchInstanceVip）交换实例 VIP 完成实例灾备切换。交换 VIP 后目标实例可写，源和目标实例VIP互换，同时源与目标实例间 DTS 同步任务断开。
     */
    SwitchInstanceVip(req: SwitchInstanceVipRequest, cb?: (error: string, rep: SwitchInstanceVipResponse) => void): Promise<SwitchInstanceVipResponse>;
    /**
     * 本接口（DescribeDBSecurityGroups）用于查询实例的安全组详情。
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 本接口（DescribeReplicationGroup）用于查询复制组。
     */
    DescribeReplicationGroup(req: DescribeReplicationGroupRequest, cb?: (error: string, rep: DescribeReplicationGroupResponse) => void): Promise<DescribeReplicationGroupResponse>;
    /**
     * 本接口（InquiryPriceRenewInstance）用于查询包年包月计费实例的续费价格。
     */
    InquiryPriceRenewInstance(req: InquiryPriceRenewInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void): Promise<InquiryPriceRenewInstanceResponse>;
    /**
     * 本接口（ModifyMaintenanceWindow）用于修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
     */
    ModifyMaintenanceWindow(req: ModifyMaintenanceWindowRequest, cb?: (error: string, rep: ModifyMaintenanceWindowResponse) => void): Promise<ModifyMaintenanceWindowResponse>;
    /**
     * 本接口（ModifyNetworkConfig）用于修改实例网络配置。
     */
    ModifyNetworkConfig(req: ModifyNetworkConfigRequest, cb?: (error: string, rep: ModifyNetworkConfigResponse) => void): Promise<ModifyNetworkConfigResponse>;
    /**
     * 本接口（DescribeInstanceShards）用于获取集群架构实例的分片信息。
     */
    DescribeInstanceShards(req: DescribeInstanceShardsRequest, cb?: (error: string, rep: DescribeInstanceShardsResponse) => void): Promise<DescribeInstanceShardsResponse>;
    /**
     * 本接口（RestoreInstance）用于恢复实例。
     */
    RestoreInstance(req: RestoreInstanceRequest, cb?: (error: string, rep: RestoreInstanceResponse) => void): Promise<RestoreInstanceResponse>;
    /**
     * 本接口（DescribeInstances）用于查询Redis实例列表。
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口（OpenSSL）用于开启 SSL 加密认证功能。
     */
    OpenSSL(req: OpenSSLRequest, cb?: (error: string, rep: OpenSSLResponse) => void): Promise<OpenSSLResponse>;
    /**
     * 本接口（DescribeAutoBackupConfig）用于获取自动备份配置规则。
     */
    DescribeAutoBackupConfig(req: DescribeAutoBackupConfigRequest, cb?: (error: string, rep: DescribeAutoBackupConfigResponse) => void): Promise<DescribeAutoBackupConfigResponse>;
    /**
     * 本接口（DescribeBandwidthRange）用于查询实例带宽信息。
     */
    DescribeBandwidthRange(req: DescribeBandwidthRangeRequest, cb?: (error: string, rep: DescribeBandwidthRangeResponse) => void): Promise<DescribeBandwidthRangeResponse>;
    /**
     * 本接口（DescribeReplicationGroupInstance）用于查询复制组信息。
     */
    DescribeReplicationGroupInstance(req: DescribeReplicationGroupInstanceRequest, cb?: (error: string, rep: DescribeReplicationGroupInstanceResponse) => void): Promise<DescribeReplicationGroupInstanceResponse>;
    /**
     * 本接口（DescribeProxySlowLog）用于查询代理慢查询。
     */
    DescribeProxySlowLog(req: DescribeProxySlowLogRequest, cb?: (error: string, rep: DescribeProxySlowLogResponse) => void): Promise<DescribeProxySlowLogResponse>;
    /**
     * 本接口（ModifyInstanceAvailabilityZones）用于变更实例可用区
     */
    ModifyInstanceAvailabilityZones(req: ModifyInstanceAvailabilityZonesRequest, cb?: (error: string, rep: ModifyInstanceAvailabilityZonesResponse) => void): Promise<ModifyInstanceAvailabilityZonesResponse>;
    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于对实例原有的安全组列表进行修改。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 该接口（ChangeMasterInstance）用于将复制组内只读实例设置为主实例。
     */
    ChangeMasterInstance(req: ChangeMasterInstanceRequest, cb?: (error: string, rep: ChangeMasterInstanceResponse) => void): Promise<ChangeMasterInstanceResponse>;
    /**
     * 本接口（UpgradeInstance）用于变更实例的配置规格。
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 本接口（DescribeRedisClusterOverview）用于查询 Redis 独享集群概览信息。
     */
    DescribeRedisClusterOverview(req: DescribeRedisClusterOverviewRequest, cb?: (error: string, rep: DescribeRedisClusterOverviewResponse) => void): Promise<DescribeRedisClusterOverviewResponse>;
    /**
     * 本接口（ApplyParamsTemplate）用于应用参数模板到实例。
     */
    ApplyParamsTemplate(req: ApplyParamsTemplateRequest, cb?: (error: string, rep: ApplyParamsTemplateResponse) => void): Promise<ApplyParamsTemplateResponse>;
    /**
     * 本接口（DescribeMaintenanceWindow）用于查询实例维护时间窗。在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
     */
    DescribeMaintenanceWindow(req: DescribeMaintenanceWindowRequest, cb?: (error: string, rep: DescribeMaintenanceWindowResponse) => void): Promise<DescribeMaintenanceWindowResponse>;
    /**
     * 本接口（CreateInstances）用于创建 Redis 实例。
     */
    CreateInstances(req: CreateInstancesRequest, cb?: (error: string, rep: CreateInstancesResponse) => void): Promise<CreateInstancesResponse>;
    /**
     * 本接口（DescribeInstanceDealDetail）用于查询订单信息。
     */
    DescribeInstanceDealDetail(req: DescribeInstanceDealDetailRequest, cb?: (error: string, rep: DescribeInstanceDealDetailResponse) => void): Promise<DescribeInstanceDealDetailResponse>;
    /**
     * 本接口（CloseSSL）用于关闭SSL加密认证。
     */
    CloseSSL(req: CloseSSLRequest, cb?: (error: string, rep: CloseSSLResponse) => void): Promise<CloseSSLResponse>;
}

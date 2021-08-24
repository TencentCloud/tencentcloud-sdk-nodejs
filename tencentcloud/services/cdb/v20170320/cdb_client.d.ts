import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyAuditConfigRequest, CreateDBInstanceRequest, DescribeAccountPrivilegesResponse, CreateDBImportJobRequest, DescribeDatabasesRequest, UpgradeDBInstanceRequest, DescribeBackupConfigRequest, DescribeRoMinScaleResponse, CreateAuditRuleResponse, StopDBImportJobRequest, OfflineIsolatedInstancesResponse, DescribeSlowLogDataResponse, DescribeDBInstanceInfoResponse, DescribeErrorLogDataRequest, DescribeAuditLogFilesResponse, DescribeDBInstanceRebootTimeRequest, DescribeSlowLogsRequest, AssociateSecurityGroupsRequest, CreateAccountsResponse, CreateDeployGroupResponse, DescribeTablesResponse, DescribeDBSecurityGroupsResponse, DeleteAuditRuleRequest, DeleteParamTemplateResponse, DescribeRoMinScaleRequest, DescribeDefaultParamsRequest, ModifyNameOrDescByDpIdResponse, StopDBImportJobResponse, DescribeDBPriceResponse, DescribeTasksResponse, ReleaseIsolatedDBInstancesResponse, DescribeParamTemplatesRequest, DescribeRollbackRangeTimeRequest, DescribeBackupOverviewRequest, DescribeBackupsRequest, DescribeAuditPoliciesResponse, DescribeInstanceParamRecordsResponse, DescribeDBInstanceGTIDResponse, OpenDBInstanceGTIDResponse, DescribeDBZoneConfigRequest, VerifyRootAccountResponse, DescribeDBInstanceRebootTimeResponse, SwitchDrInstanceToMasterRequest, DeleteParamTemplateRequest, DescribeDataBackupOverviewResponse, DeleteAuditPolicyRequest, ModifyInstanceTagResponse, CreateParamTemplateResponse, CreateDBInstanceHourResponse, DescribeCloneListResponse, ModifyAccountMaxUserConnectionsRequest, ReleaseIsolatedDBInstancesRequest, DescribeAccountsRequest, StartDelayReplicationResponse, DescribeTasksRequest, IsolateDBInstanceResponse, DescribeErrorLogDataResponse, AddTimeWindowRequest, SwitchForUpgradeRequest, DeleteAuditLogFileResponse, DescribeRollbackTaskDetailResponse, CreateAccountsRequest, CreateDBInstanceHourRequest, DescribeDeployGroupListRequest, DescribeCloneListRequest, CloseWanServiceResponse, CreateCloneInstanceRequest, DescribeDBInstancesRequest, DescribeDBSecurityGroupsRequest, ModifyDBInstanceVipVportResponse, DescribeDBSwitchRecordsResponse, RenewDBInstanceRequest, DeleteBackupResponse, ModifyInstanceParamRequest, DescribeProjectSecurityGroupsResponse, ModifyDBInstanceProjectRequest, CreateAuditLogFileResponse, StartBatchRollbackResponse, DescribeRoGroupsRequest, DescribeDBSwitchRecordsRequest, ModifyBackupConfigResponse, DescribeSupportedPrivilegesRequest, DescribeAsyncRequestInfoResponse, CreateDBInstanceResponse, ModifyInstanceTagRequest, DescribeDBInstanceCharsetResponse, DeleteAccountsResponse, DescribeRoGroupsResponse, CloseWanServiceRequest, RestartDBInstancesResponse, CreateRoInstanceIpResponse, DescribeBackupDatabasesResponse, VerifyRootAccountRequest, SwitchForUpgradeResponse, ModifyAccountMaxUserConnectionsResponse, DescribeBackupSummariesResponse, DescribeInstanceParamRecordsRequest, SwitchDBInstanceMasterSlaveRequest, StopRollbackResponse, ModifyAutoRenewFlagResponse, DeleteTimeWindowResponse, DescribeBinlogBackupOverviewRequest, DescribeBackupsResponse, CreateAuditPolicyRequest, CreateRoInstanceIpRequest, ModifyInstanceParamResponse, DescribeDBImportRecordsResponse, CreateAuditPolicyResponse, SwitchDBInstanceMasterSlaveResponse, DescribeBackupConfigResponse, DeleteDeployGroupsResponse, ModifyDBInstanceSecurityGroupsRequest, DescribeParamTemplatesResponse, DescribeBackupTablesResponse, ModifyDBInstanceVipVportRequest, ModifyParamTemplateResponse, ModifyDBInstanceSecurityGroupsResponse, DescribeProjectSecurityGroupsRequest, ModifyRoReplicationDelayRequest, StartBatchRollbackRequest, BalanceRoGroupLoadResponse, DescribeBackupSummariesRequest, DescribeSupportedPrivilegesResponse, CreateCloneInstanceResponse, ModifyDBInstanceProjectResponse, ModifyDBInstanceNameRequest, OpenDBInstanceGTIDRequest, UpgradeDBInstanceEngineVersionResponse, InquiryPriceUpgradeInstancesRequest, ModifyAuditRuleResponse, DescribeAsyncRequestInfoRequest, BalanceRoGroupLoadRequest, ModifyRoTypeResponse, DescribeAuditRulesRequest, DescribeBackupOverviewResponse, DescribeUploadedFilesRequest, DescribeDeviceMonitorInfoRequest, DescribeDBPriceRequest, AssociateSecurityGroupsResponse, DescribeUploadedFilesResponse, CreateBackupResponse, DescribeDBInstanceConfigResponse, DescribeDefaultParamsResponse, ModifyAccountPrivilegesResponse, ModifyAuditRuleRequest, ModifyAccountHostResponse, DescribeDeployGroupListResponse, DescribeDBInstanceConfigRequest, DescribeBackupTablesRequest, DescribeBinlogsResponse, ModifyRoTypeRequest, SwitchDrInstanceToMasterResponse, ModifyAuditConfigResponse, ModifyDBInstanceNameResponse, ModifyAccountDescriptionRequest, ModifyAccountPasswordRequest, DescribeAuditPoliciesRequest, DescribeTablesRequest, RenewDBInstanceResponse, DescribeDatabasesResponse, ModifyParamTemplateRequest, AddTimeWindowResponse, DescribeAuditConfigRequest, DescribeAuditRulesResponse, DescribeBinlogBackupOverviewResponse, InitDBInstancesRequest, ModifyAccountHostRequest, CreateParamTemplateRequest, DeleteAuditRuleResponse, IsolateDBInstanceRequest, CreateAuditRuleRequest, ModifyTimeWindowRequest, ModifyAccountPrivilegesRequest, CreateBackupRequest, ModifyRoGroupInfoResponse, DescribeDBInstanceCharsetRequest, DescribeTimeWindowRequest, DescribeBackupDatabasesRequest, ModifyTimeWindowResponse, ModifyAutoRenewFlagRequest, UpgradeDBInstanceEngineVersionRequest, StartDelayReplicationRequest, ModifyBackupConfigRequest, DeleteDeployGroupsRequest, DescribeSlowLogDataRequest, DescribeAuditConfigResponse, UpgradeDBInstanceResponse, CreateAuditLogFileRequest, DeleteAuditLogFileRequest, DescribeSlowLogsResponse, DescribeDBImportRecordsRequest, CreateDBImportJobResponse, DescribeTagsOfInstanceIdsRequest, StopDelayReplicationResponse, DescribeTimeWindowResponse, DeleteTimeWindowRequest, DeleteAuditPolicyResponse, DescribeDBInstancesResponse, DescribeParamTemplateInfoRequest, InitDBInstancesResponse, DescribeDataBackupOverviewRequest, DescribeParamTemplateInfoResponse, RestartDBInstancesRequest, DescribeDBInstanceInfoRequest, DescribeInstanceParamsResponse, DescribeDBZoneConfigResponse, CreateDeployGroupRequest, DisassociateSecurityGroupsRequest, DeleteAccountsRequest, OfflineIsolatedInstancesRequest, ModifyAccountDescriptionResponse, DescribeAccountPrivilegesRequest, DescribeAccountsResponse, OpenWanServiceRequest, StopRollbackRequest, DeleteBackupRequest, ModifyNameOrDescByDpIdRequest, DescribeInstanceParamsRequest, DescribeDeviceMonitorInfoResponse, DescribeRollbackTaskDetailRequest, DescribeRollbackRangeTimeResponse, ModifyRoGroupInfoRequest, OpenWanServiceResponse, ModifyRoReplicationDelayResponse, DescribeAuditLogFilesRequest, DescribeTagsOfInstanceIdsResponse, ModifyAccountPasswordResponse, StopDelayReplicationRequest, DescribeBinlogsRequest, DisassociateSecurityGroupsResponse, DescribeDBInstanceGTIDRequest, InquiryPriceUpgradeInstancesResponse } from "./cdb_models";
/**
 * cdb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口(DescribeDBInstanceGTID)用于查询云数据库实例是否开通了 GTID，不支持版本为 5.5 以及以下的实例。
     */
    DescribeDBInstanceGTID(req: DescribeDBInstanceGTIDRequest, cb?: (error: string, rep: DescribeDBInstanceGTIDResponse) => void): Promise<DescribeDBInstanceGTIDResponse>;
    /**
     * 本接口(CreateRoInstanceIp)用于创建云数据库只读实例的独立VIP。
     */
    CreateRoInstanceIp(req: CreateRoInstanceIpRequest, cb?: (error: string, rep: CreateRoInstanceIpResponse) => void): Promise<CreateRoInstanceIpResponse>;
    /**
     * 本接口(CreateAuditPolicy)用于创建云数据库实例的审计策略，即将审计规则绑定到具体的云数据库实例上。
     */
    CreateAuditPolicy(req: CreateAuditPolicyRequest, cb?: (error: string, rep: CreateAuditPolicyResponse) => void): Promise<CreateAuditPolicyResponse>;
    /**
     * 本接口(DescribeDataBackupOverview)用于查询用户在当前地域总的数据备份概览。
     */
    DescribeDataBackupOverview(req: DescribeDataBackupOverviewRequest, cb?: (error: string, rep: DescribeDataBackupOverviewResponse) => void): Promise<DescribeDataBackupOverviewResponse>;
    /**
     * 本接口(BalanceRoGroupLoad)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
     */
    BalanceRoGroupLoad(req: BalanceRoGroupLoadRequest, cb?: (error: string, rep: BalanceRoGroupLoadResponse) => void): Promise<BalanceRoGroupLoadResponse>;
    /**
     * 本接口(IsolateDBInstance)用于隔离云数据库实例，隔离后不能通过IP和端口访问数据库。隔离的实例可在回收站中进行开机。若为欠费隔离，请尽快进行充值。
     */
    IsolateDBInstance(req: IsolateDBInstanceRequest, cb?: (error: string, rep: IsolateDBInstanceResponse) => void): Promise<IsolateDBInstanceResponse>;
    /**
     * 本接口(RestartDBInstances)用于重启云数据库实例。

注意：
1、本接口只支持主实例进行重启操作；
2、实例状态必须为正常，并且没有其他异步任务在执行中。
     */
    RestartDBInstances(req: RestartDBInstancesRequest, cb?: (error: string, rep: RestartDBInstancesResponse) => void): Promise<RestartDBInstancesResponse>;
    /**
     * 本接口(ModifyInstanceTag)用于对实例标签进行添加、修改或者删除。
     */
    ModifyInstanceTag(req: ModifyInstanceTagRequest, cb?: (error: string, rep: ModifyInstanceTagResponse) => void): Promise<ModifyInstanceTagResponse>;
    /**
     * 本接口(DescribeTimeWindow)用于查询云数据库实例的维护时间窗口。
     */
    DescribeTimeWindow(req: DescribeTimeWindowRequest, cb?: (error: string, rep: DescribeTimeWindowResponse) => void): Promise<DescribeTimeWindowResponse>;
    /**
     * 本接口(DescribeBackupOverview)用于查询用户的备份概览。返回用户当前备份总个数、备份总的占用容量、赠送的免费容量、计费容量（容量单位为字节）。
     */
    DescribeBackupOverview(req: DescribeBackupOverviewRequest, cb?: (error: string, rep: DescribeBackupOverviewResponse) => void): Promise<DescribeBackupOverviewResponse>;
    /**
     * 本接口(ModifyDBInstanceName)用于修改云数据库实例的名称。
     */
    ModifyDBInstanceName(req: ModifyDBInstanceNameRequest, cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void): Promise<ModifyDBInstanceNameResponse>;
    /**
     * 本接口(StopRollback) 用于撤销实例正在进行的回档任务，该接口返回一个异步任务id。 撤销结果可以通过 DescribeAsyncRequestInfo 查询任务的执行情况。
     */
    StopRollback(req: StopRollbackRequest, cb?: (error: string, rep: StopRollbackResponse) => void): Promise<StopRollbackResponse>;
    /**
     * 本接口(OfflineIsolatedInstances)用于立即下线隔离状态的云数据库实例。进行操作的实例状态必须为隔离状态，即通过 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询到 Status 值为 5 的实例。

该接口为异步操作，部分资源的回收可能存在延迟。您可以通过使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口，指定实例 InstanceId 和状态 Status 为 [5,6,7] 进行查询，若返回实例为空，则实例资源已全部释放。

注意，实例下线后，相关资源和数据将无法找回，请谨慎操作。
     */
    OfflineIsolatedInstances(req: OfflineIsolatedInstancesRequest, cb?: (error: string, rep: OfflineIsolatedInstancesResponse) => void): Promise<OfflineIsolatedInstancesResponse>;
    /**
     * 本接口(CreateAuditLogFile)用于创建云数据库实例的审计日志文件。
     */
    CreateAuditLogFile(req: CreateAuditLogFileRequest, cb?: (error: string, rep: CreateAuditLogFileResponse) => void): Promise<CreateAuditLogFileResponse>;
    /**
     * 本接口(OpenDBInstanceGTID)用于开启云数据库实例的 GTID，只支持版本为 5.6 以及以上的实例。
     */
    OpenDBInstanceGTID(req: OpenDBInstanceGTIDRequest, cb?: (error: string, rep: OpenDBInstanceGTIDResponse) => void): Promise<OpenDBInstanceGTIDResponse>;
    /**
     * 本接口(DescribeRollbackTaskDetail)用于查询云数据库实例回档任务详情。
     */
    DescribeRollbackTaskDetail(req: DescribeRollbackTaskDetailRequest, cb?: (error: string, rep: DescribeRollbackTaskDetailResponse) => void): Promise<DescribeRollbackTaskDetailResponse>;
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 本接口(DescribeTasks)用于查询云数据库实例任务列表。
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 本接口(DescribeBackupConfig)用于查询数据库备份配置信息。
     */
    DescribeBackupConfig(req: DescribeBackupConfigRequest, cb?: (error: string, rep: DescribeBackupConfigResponse) => void): Promise<DescribeBackupConfigResponse>;
    /**
     * 本接口(CloseWanService)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问。
     */
    CloseWanService(req: CloseWanServiceRequest, cb?: (error: string, rep: CloseWanServiceResponse) => void): Promise<CloseWanServiceResponse>;
    /**
     * 该接口（DescribeDefaultParams）用于查询默认的可设置参数列表。
     */
    DescribeDefaultParams(req: DescribeDefaultParamsRequest, cb?: (error: string, rep: DescribeDefaultParamsResponse) => void): Promise<DescribeDefaultParamsResponse>;
    /**
     * 本接口(DescribeAuditPolicies)用于查询云数据库实例的审计策略。
     */
    DescribeAuditPolicies(req: DescribeAuditPoliciesRequest, cb?: (error: string, rep: DescribeAuditPoliciesResponse) => void): Promise<DescribeAuditPoliciesResponse>;
    /**
     * 本接口(DescribeTagsOfInstanceIds)用于获取云数据库实例的标签信息。
     */
    DescribeTagsOfInstanceIds(req: DescribeTagsOfInstanceIdsRequest, cb?: (error: string, rep: DescribeTagsOfInstanceIdsResponse) => void): Promise<DescribeTagsOfInstanceIdsResponse>;
    /**
     * 本接口(DescribeDatabases)用于查询云数据库实例的数据库信息，仅支持主实例和灾备实例，不支持只读实例。
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 根据检索条件查询实例错误日志详情。只能查询一个月之内的错误日志。
     */
    DescribeErrorLogData(req: DescribeErrorLogDataRequest, cb?: (error: string, rep: DescribeErrorLogDataResponse) => void): Promise<DescribeErrorLogDataResponse>;
    /**
     * 该接口 (SwitchDBInstanceMasterSlave) 支持用户主动切换实例主从角色。
     */
    SwitchDBInstanceMasterSlave(req: SwitchDBInstanceMasterSlaveRequest, cb?: (error: string, rep: SwitchDBInstanceMasterSlaveResponse) => void): Promise<SwitchDBInstanceMasterSlaveResponse>;
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 本接口(DescribeTables)用于查询云数据库实例的数据库表信息，仅支持主实例和灾备实例，不支持只读实例。
     */
    DescribeTables(req: DescribeTablesRequest, cb?: (error: string, rep: DescribeTablesResponse) => void): Promise<DescribeTablesResponse>;
    /**
     * 本接口(DeleteTimeWindow)用于删除云数据库实例的维护时间窗口。删除实例维护时间窗口之后，默认的维护时间窗为 03:00-04:00，即当选择在维护时间窗口内切换访问新实例时，默认会在 03:00-04:00 点进行切换访问新实例。
     */
    DeleteTimeWindow(req: DeleteTimeWindowRequest, cb?: (error: string, rep: DeleteTimeWindowResponse) => void): Promise<DeleteTimeWindowResponse>;
    /**
     * 本接口(DescribeAccountPrivileges)用于查询云数据库账户支持的权限信息。
     */
    DescribeAccountPrivileges(req: DescribeAccountPrivilegesRequest, cb?: (error: string, rep: DescribeAccountPrivilegesResponse) => void): Promise<DescribeAccountPrivilegesResponse>;
    /**
     * 修改只读实例类型，可以将普通只读实例变为延迟只读实例，或者将延迟只读实例变为普通只读实例。
     */
    ModifyRoType(req: ModifyRoTypeRequest, cb?: (error: string, rep: ModifyRoTypeResponse) => void): Promise<ModifyRoTypeResponse>;
    /**
     * 本接口（ReleaseIsolatedDBInstances）用于恢复已隔离云数据库实例。
     */
    ReleaseIsolatedDBInstances(req: ReleaseIsolatedDBInstancesRequest, cb?: (error: string, rep: ReleaseIsolatedDBInstancesResponse) => void): Promise<ReleaseIsolatedDBInstancesResponse>;
    /**
     * 本接口(CreateCloneInstance) 用于从目标源实例创建一个克隆实例，可以指定克隆实例回档到源实例的指定物理备份文件或者指定的回档时间点。
     */
    CreateCloneInstance(req: CreateCloneInstanceRequest, cb?: (error: string, rep: CreateCloneInstanceResponse) => void): Promise<CreateCloneInstanceResponse>;
    /**
     * 本接口(ModifyAuditConfig)用于修改云数据库审计策略的服务配置，包括审计日志保存时长等。
     */
    ModifyAuditConfig(req: ModifyAuditConfigRequest, cb?: (error: string, rep: ModifyAuditConfigResponse) => void): Promise<ModifyAuditConfigResponse>;
    /**
     * 本接口(ModifyTimeWindow)用于更新云数据库实例的维护时间窗口。
     */
    ModifyTimeWindow(req: ModifyTimeWindowRequest, cb?: (error: string, rep: ModifyTimeWindowResponse) => void): Promise<ModifyTimeWindowResponse>;
    /**
     * 根据置放群组ID删除置放群组（置放群组中有资源存在时不能删除该置放群组）
     */
    DeleteDeployGroups(req: DeleteDeployGroupsRequest, cb?: (error: string, rep: DeleteDeployGroupsResponse) => void): Promise<DeleteDeployGroupsResponse>;
    /**
     * 本接口(SwitchForUpgrade)用于切换访问新实例，针对主升级中的实例处于待切换状态时，用户可主动发起该流程。
     */
    SwitchForUpgrade(req: SwitchForUpgradeRequest, cb?: (error: string, rep: SwitchForUpgradeResponse) => void): Promise<SwitchForUpgradeResponse>;
    /**
     * 该接口（DeleteParamTemplate）用于删除参数模板，全地域公共参数Region均为ap-guangzhou。
     */
    DeleteParamTemplate(req: DeleteParamTemplateRequest, cb?: (error: string, rep: DeleteParamTemplateResponse) => void): Promise<DeleteParamTemplateResponse>;
    /**
     * 本接口(DescribeBackups)用于查询云数据库实例的备份数据。
     */
    DescribeBackups(req: DescribeBackupsRequest, cb?: (error: string, rep: DescribeBackupsResponse) => void): Promise<DescribeBackupsResponse>;
    /**
     * 该接口（CreateParamTemplate）用于创建参数模板，全地域公共参数Region均为ap-guangzhou。
     */
    CreateParamTemplate(req: CreateParamTemplateRequest, cb?: (error: string, rep: CreateParamTemplateResponse) => void): Promise<CreateParamTemplateResponse>;
    /**
     * 本接口(CreateDBInstanceHour)用于创建按量计费的实例，可通过传入实例规格、MySQL 版本号和数量等信息创建云数据库实例，支持主实例、灾备实例和只读实例的创建。

该接口为异步接口，您还可以使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询该实例的详细信息。当该实例的 Status 为 1，且 TaskStatus 为 0，表示实例已经发货成功。

1. 首先请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口查询可创建的实例规格信息，然后请使用 [查询数据库价格](https://cloud.tencent.com/document/api/236/18566) 接口查询可创建实例的售卖价格；
2. 单次创建实例最大支持 100 个，实例时长最大支持 36 个月；
3. 支持创建 MySQL 5.5、MySQL 5.6 、MySQL 5.7 和 MySQL 8.0 版本；
4. 支持创建主实例、灾备实例和只读实例；
5. 当入参指定 Port，ParamList 或 Password 时，该实例会进行初始化操作（暂不支持基础版实例）；
     */
    CreateDBInstanceHour(req: CreateDBInstanceHourRequest, cb?: (error: string, rep: CreateDBInstanceHourResponse) => void): Promise<CreateDBInstanceHourResponse>;
    /**
     * 本接口(AddTimeWindow)用于添加云数据库实例的维护时间窗口，以指定实例在哪些时间段可以自动执行切换访问操作。
     */
    AddTimeWindow(req: AddTimeWindowRequest, cb?: (error: string, rep: AddTimeWindowResponse) => void): Promise<AddTimeWindowResponse>;
    /**
     * 本接口(CreateBackup)用于创建数据库备份。
     */
    CreateBackup(req: CreateBackupRequest, cb?: (error: string, rep: CreateBackupResponse) => void): Promise<CreateBackupResponse>;
    /**
     * 本接口(ModifyDBInstanceVipVport)用于修改云数据库实例的IP和端口号，也可进行基础网络转 VPC 网络和 VPC 网络下的子网变更。
     */
    ModifyDBInstanceVipVport(req: ModifyDBInstanceVipVportRequest, cb?: (error: string, rep: ModifyDBInstanceVipVportResponse) => void): Promise<ModifyDBInstanceVipVportResponse>;
    /**
     * 本接口(DescribeDBInstanceConfig)用于云数据库实例的配置信息，包括同步模式，部署模式等。
     */
    DescribeDBInstanceConfig(req: DescribeDBInstanceConfigRequest, cb?: (error: string, rep: DescribeDBInstanceConfigResponse) => void): Promise<DescribeDBInstanceConfigResponse>;
    /**
     * 本接口(DescribeBackupTables)用于查询指定的数据库的备份数据表名 (已废弃)。
旧版本支持全量备份后，用户如果分库表下载逻辑备份文件，需要用到此接口。
新版本支持(CreateBackup)创建逻辑备份的时候，直接发起指定库表备份，用户直接下载该备份文件即可。
     */
    DescribeBackupTables(req: DescribeBackupTablesRequest, cb?: (error: string, rep: DescribeBackupTablesResponse) => void): Promise<DescribeBackupTablesResponse>;
    /**
     * 本接口(DeleteAuditPolicy)用于删除用户的审计策略。
     */
    DeleteAuditPolicy(req: DeleteAuditPolicyRequest, cb?: (error: string, rep: DeleteAuditPolicyResponse) => void): Promise<DeleteAuditPolicyResponse>;
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 本接口(DescribeSlowLogs)用于获取云数据库实例的慢查询日志。
     */
    DescribeSlowLogs(req: DescribeSlowLogsRequest, cb?: (error: string, rep: DescribeSlowLogsResponse) => void): Promise<DescribeSlowLogsResponse>;
    /**
     * 本接口(InquiryPriceUpgradeInstances)用于查询云数据库实例升级的价格，支持查询按量计费或者包年包月实例的升级价格，实例类型支持主实例、灾备实例和只读实例。
     */
    InquiryPriceUpgradeInstances(req: InquiryPriceUpgradeInstancesRequest, cb?: (error: string, rep: InquiryPriceUpgradeInstancesResponse) => void): Promise<InquiryPriceUpgradeInstancesResponse>;
    /**
     * 停止延迟只读实例的延迟复制。
     */
    StopDelayReplication(req: StopDelayReplicationRequest, cb?: (error: string, rep: StopDelayReplicationResponse) => void): Promise<StopDelayReplicationResponse>;
    /**
     * 本接口(CreateDBInstance)用于创建包年包月的云数据库实例（包括主实例、灾备实例和只读实例），可通过传入实例规格、MySQL 版本号、购买时长和数量等信息创建云数据库实例。

该接口为异步接口，您还可以使用 [查询实例列表](https://cloud.tencent.com/document/api/236/15872) 接口查询该实例的详细信息。当该实例的 Status 为1，且 TaskStatus 为0，表示实例已经发货成功。

1. 首先请使用 [获取云数据库可售卖规格](https://cloud.tencent.com/document/api/236/17229) 接口查询可创建的实例规格信息，然后请使用 [查询数据库价格](https://cloud.tencent.com/document/api/236/18566) 接口查询可创建实例的售卖价格；
2. 单次创建实例最大支持 100 个，实例时长最大支持 36 个月；
3. 支持创建 MySQL 5.5 、 MySQL 5.6 、 MySQL 5.7 、 MySQL 8.0 版本；
4. 支持创建主实例、只读实例、灾备实例；
5. 当入参指定 Port，ParamList 或 Password 时，该实例会进行初始化操作（不支持基础版实例）；
6. 当入参指定 ParamTemplateId 或 AlarmPolicyList 时，需将SDK提升至最新版本方可支持；
     */
    CreateDBInstance(req: CreateDBInstanceRequest, cb?: (error: string, rep: CreateDBInstanceResponse) => void): Promise<CreateDBInstanceResponse>;
    /**
     * 该接口（ModifyParamTemplate）用于修改参数模板，全地域公共参数Region均为ap-guangzhou。
     */
    ModifyParamTemplate(req: ModifyParamTemplateRequest, cb?: (error: string, rep: ModifyParamTemplateResponse) => void): Promise<ModifyParamTemplateResponse>;
    /**
     * 该接口（DescribeInstanceParams）用于查询实例的参数列表。
     */
    DescribeInstanceParams(req: DescribeInstanceParamsRequest, cb?: (error: string, rep: DescribeInstanceParamsResponse) => void): Promise<DescribeInstanceParamsResponse>;
    /**
     * 本接口(DescribeDeployGroupList)用于查询用户的置放群组列表，可以指定置放群组 ID 或置放群组名称。
     */
    DescribeDeployGroupList(req: DescribeDeployGroupListRequest, cb?: (error: string, rep: DescribeDeployGroupListResponse) => void): Promise<DescribeDeployGroupListResponse>;
    /**
     * 本接口(StopDBImportJob)用于终止数据导入任务。
     */
    StopDBImportJob(req: StopDBImportJobRequest, cb?: (error: string, rep: StopDBImportJobResponse) => void): Promise<StopDBImportJobResponse>;
    /**
     * 本接口(CreateAccounts)用于创建云数据库的账户，需要指定新的账户名和域名，以及所对应的密码，同时可以设置账号的备注信息以及最大可用连接数。
     */
    CreateAccounts(req: CreateAccountsRequest, cb?: (error: string, rep: CreateAccountsResponse) => void): Promise<CreateAccountsResponse>;
    /**
     * 本接口(UpgradeDBInstanceEngineVersion)用于升级云数据库实例版本，实例类型支持主实例、灾备实例和只读实例。
     */
    UpgradeDBInstanceEngineVersion(req: UpgradeDBInstanceEngineVersionRequest, cb?: (error: string, rep: UpgradeDBInstanceEngineVersionResponse) => void): Promise<UpgradeDBInstanceEngineVersionResponse>;
    /**
     * 本接口(DescribeAuditLogFiles)用于查询云数据库实例的审计日志文件。
     */
    DescribeAuditLogFiles(req: DescribeAuditLogFilesRequest, cb?: (error: string, rep: DescribeAuditLogFilesResponse) => void): Promise<DescribeAuditLogFilesResponse>;
    /**
     * 该接口（DescribeInstanceParamRecords）用于查询实例参数修改历史。
     */
    DescribeInstanceParamRecords(req: DescribeInstanceParamRecordsRequest, cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void): Promise<DescribeInstanceParamRecordsResponse>;
    /**
     * 本接口(DescribeBackupSummaries)用于查询备份的统计情况，返回以实例为维度的备份占用容量，以及每个实例的数据备份和日志备份的个数和容量（容量单位为字节）。
     */
    DescribeBackupSummaries(req: DescribeBackupSummariesRequest, cb?: (error: string, rep: DescribeBackupSummariesResponse) => void): Promise<DescribeBackupSummariesResponse>;
    /**
     * 该接口（DescribeParamTemplateInfo）用于查询参数模板详情，全地域公共参数Region均为ap-guangzhou。
     */
    DescribeParamTemplateInfo(req: DescribeParamTemplateInfoRequest, cb?: (error: string, rep: DescribeParamTemplateInfoResponse) => void): Promise<DescribeParamTemplateInfoResponse>;
    /**
     * 本接口(DescribeBinlogBackupOverview)用于查询用户在当前地域总的日志备份概览。
     */
    DescribeBinlogBackupOverview(req: DescribeBinlogBackupOverviewRequest, cb?: (error: string, rep: DescribeBinlogBackupOverviewResponse) => void): Promise<DescribeBinlogBackupOverviewResponse>;
    /**
     * 本接口(SwitchDrInstanceToMaster)用于将云数据库灾备实例切换为主实例，注意请求必须发到灾备实例所在的地域。
     */
    SwitchDrInstanceToMaster(req: SwitchDrInstanceToMasterRequest, cb?: (error: string, rep: SwitchDrInstanceToMasterResponse) => void): Promise<SwitchDrInstanceToMasterResponse>;
    /**
     * 本接口(DeleteAccounts)用于删除云数据库的账户。
     */
    DeleteAccounts(req: DeleteAccountsRequest, cb?: (error: string, rep: DeleteAccountsResponse) => void): Promise<DeleteAccountsResponse>;
    /**
     * 查询实例基本信息（实例 ID ，实例名称，是否开通加密 ）
     */
    DescribeDBInstanceInfo(req: DescribeDBInstanceInfoRequest, cb?: (error: string, rep: DescribeDBInstanceInfoResponse) => void): Promise<DescribeDBInstanceInfoResponse>;
    /**
     * 本接口(DescribeRollbackRangeTime)用于查询云数据库实例可回档的时间范围。
     */
    DescribeRollbackRangeTime(req: DescribeRollbackRangeTimeRequest, cb?: (error: string, rep: DescribeRollbackRangeTimeResponse) => void): Promise<DescribeRollbackRangeTimeResponse>;
    /**
     * 该接口（DescribeParamTemplates）查询参数模板列表。
     */
    DescribeParamTemplates(req?: DescribeParamTemplatesRequest, cb?: (error: string, rep: DescribeParamTemplatesResponse) => void): Promise<DescribeParamTemplatesResponse>;
    /**
     * 本接口(DeleteBackup)用于删除数据库备份。本接口只支持删除手动发起的备份。
     */
    DeleteBackup(req: DeleteBackupRequest, cb?: (error: string, rep: DeleteBackupResponse) => void): Promise<DeleteBackupResponse>;
    /**
     * 本接口(DescribeRoMinScale)用于获取只读实例购买、升级时的最小规格。
     */
    DescribeRoMinScale(req: DescribeRoMinScaleRequest, cb?: (error: string, rep: DescribeRoMinScaleResponse) => void): Promise<DescribeRoMinScaleResponse>;
    /**
     * 本接口(ModifyAccountHost)用于修改云数据库账户的主机。
     */
    ModifyAccountHost(req: ModifyAccountHostRequest, cb?: (error: string, rep: ModifyAccountHostResponse) => void): Promise<ModifyAccountHostResponse>;
    /**
     * 本接口(DescribeAuditConfig)用于查询云数据库审计策略的服务配置，包括审计日志保存时长等。
     */
    DescribeAuditConfig(req: DescribeAuditConfigRequest, cb?: (error: string, rep: DescribeAuditConfigResponse) => void): Promise<DescribeAuditConfigResponse>;
    /**
     * 本接口(ModifyInstanceParam)用于修改云数据库实例的参数。
     */
    ModifyInstanceParam(req: ModifyInstanceParamRequest, cb?: (error: string, rep: ModifyInstanceParamResponse) => void): Promise<ModifyInstanceParamResponse>;
    /**
     * 本接口(DescribeAsyncRequestInfo)用于查询云数据库实例异步任务的执行结果。
     */
    DescribeAsyncRequestInfo(req: DescribeAsyncRequestInfoRequest, cb?: (error: string, rep: DescribeAsyncRequestInfoResponse) => void): Promise<DescribeAsyncRequestInfoResponse>;
    /**
     * 本接口(DescribeDBZoneConfig)用于查询可创建的云数据库各地域可售卖的规格配置。
     */
    DescribeDBZoneConfig(req?: DescribeDBZoneConfigRequest, cb?: (error: string, rep: DescribeDBZoneConfigResponse) => void): Promise<DescribeDBZoneConfigResponse>;
    /**
     * 本接口(DescribeDBInstanceRebootTime)用于查询云数据库实例重启预计所需的时间。
     */
    DescribeDBInstanceRebootTime(req: DescribeDBInstanceRebootTimeRequest, cb?: (error: string, rep: DescribeDBInstanceRebootTimeResponse) => void): Promise<DescribeDBInstanceRebootTimeResponse>;
    /**
     * 本接口(DescribeDBInstances)用于查询云数据库实例列表，支持通过项目 ID、实例 ID、访问地址、实例状态等过滤条件来筛选实例。支持查询主实例、灾备实例和只读实例信息列表。
     */
    DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse>;
    /**
     * 本接口（ModifyRoGroupInfo）用于更新云数据库只读组的信息。包括设置实例延迟超限剔除策略，设置只读实例读权重等。
     */
    ModifyRoGroupInfo(req: ModifyRoGroupInfoRequest, cb?: (error: string, rep: ModifyRoGroupInfoResponse) => void): Promise<ModifyRoGroupInfoResponse>;
    /**
     * 本接口(CreateAuditRule)用于创建用户在当前地域的审计规则。
     */
    CreateAuditRule(req: CreateAuditRuleRequest, cb?: (error: string, rep: CreateAuditRuleResponse) => void): Promise<CreateAuditRuleResponse>;
    /**
     * 本接口(DescribeDBInstanceCharset)用于查询云数据库实例的字符集，获取字符集的名称。
     */
    DescribeDBInstanceCharset(req: DescribeDBInstanceCharsetRequest, cb?: (error: string, rep: DescribeDBInstanceCharsetResponse) => void): Promise<DescribeDBInstanceCharsetResponse>;
    /**
     * 本接口(AssociateSecurityGroups)用于安全组批量绑定实例。
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 本接口(InitDBInstances)用于初始化云数据库实例，包括初始化密码、默认字符集、实例端口号等
     */
    InitDBInstances(req: InitDBInstancesRequest, cb?: (error: string, rep: InitDBInstancesResponse) => void): Promise<InitDBInstancesResponse>;
    /**
     * 本接口(ModifyAccountPrivileges)用于修改云数据库的账户的权限信息。

注意，修改账号权限时，需要传入该账号下的全量权限信息。用户可以先通过 [查询云数据库账户的权限信息
](https://cloud.tencent.com/document/api/236/17500) 查询该账号下的全量权限信息，然后进行权限修改。
     */
    ModifyAccountPrivileges(req: ModifyAccountPrivilegesRequest, cb?: (error: string, rep: ModifyAccountPrivilegesResponse) => void): Promise<ModifyAccountPrivilegesResponse>;
    /**
     * 本接口(DescribeDBImportRecords)用于查询云数据库导入任务操作日志。
     */
    DescribeDBImportRecords(req: DescribeDBImportRecordsRequest, cb?: (error: string, rep: DescribeDBImportRecordsResponse) => void): Promise<DescribeDBImportRecordsResponse>;
    /**
     * 本接口(DescribeDBSwitchRecords)用于查询云数据库实例切换记录。
     */
    DescribeDBSwitchRecords(req: DescribeDBSwitchRecordsRequest, cb?: (error: string, rep: DescribeDBSwitchRecordsResponse) => void): Promise<DescribeDBSwitchRecordsResponse>;
    /**
     * 本接口(CreateDBImportJob)用于创建云数据库数据导入任务。

注意，用户进行数据导入任务的文件，必须提前上传到腾讯云。用户须在控制台进行文件导入。
     */
    CreateDBImportJob(req: CreateDBImportJobRequest, cb?: (error: string, rep: CreateDBImportJobResponse) => void): Promise<CreateDBImportJobResponse>;
    /**
     * 本接口(DescribeAccounts)用于查询云数据库的所有账户信息。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 本接口(VerifyRootAccount)用于校验云数据库实例的 ROOT 账号是否有足够的权限进行授权操作。
     */
    VerifyRootAccount(req: VerifyRootAccountRequest, cb?: (error: string, rep: VerifyRootAccountResponse) => void): Promise<VerifyRootAccountResponse>;
    /**
     * 启动延迟只读实例的延迟复制。
     */
    StartDelayReplication(req: StartDelayReplicationRequest, cb?: (error: string, rep: StartDelayReplicationResponse) => void): Promise<StartDelayReplicationResponse>;
    /**
     * 本接口(ModifyAccountPassword)用于修改云数据库账户的密码。
     */
    ModifyAccountPassword(req: ModifyAccountPasswordRequest, cb?: (error: string, rep: ModifyAccountPasswordResponse) => void): Promise<ModifyAccountPasswordResponse>;
    /**
     * 本接口(DescribeUploadedFiles)用于查询用户导入的SQL文件列表。
     */
    DescribeUploadedFiles(req: DescribeUploadedFilesRequest, cb?: (error: string, rep: DescribeUploadedFilesResponse) => void): Promise<DescribeUploadedFilesResponse>;
    /**
     * 本接口(ModifyAccountDescription)用于修改云数据库账户的备注信息。
     */
    ModifyAccountDescription(req: ModifyAccountDescriptionRequest, cb?: (error: string, rep: ModifyAccountDescriptionResponse) => void): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 条件检索实例的慢日志。只允许查看一个月之内的慢日志
     */
    DescribeSlowLogData(req: DescribeSlowLogDataRequest, cb?: (error: string, rep: DescribeSlowLogDataResponse) => void): Promise<DescribeSlowLogDataResponse>;
    /**
     * 本接口(DeleteAuditLogFile)用于删除云数据库实例的审计日志文件。
     */
    DeleteAuditLogFile(req: DeleteAuditLogFileRequest, cb?: (error: string, rep: DeleteAuditLogFileResponse) => void): Promise<DeleteAuditLogFileResponse>;
    /**
     * 本接口(ModifyBackupConfig)用于修改数据库备份配置信息。
     */
    ModifyBackupConfig(req: ModifyBackupConfigRequest, cb?: (error: string, rep: ModifyBackupConfigResponse) => void): Promise<ModifyBackupConfigResponse>;
    /**
     * 本接口(DescribeAuditRules)用于查询用户在当前地域的审计规则。
     */
    DescribeAuditRules(req: DescribeAuditRulesRequest, cb?: (error: string, rep: DescribeAuditRulesResponse) => void): Promise<DescribeAuditRulesResponse>;
    /**
     * 本接口(DescribeBackupDatabases)用于查询备份文件包含的库 (已废弃)。
旧版本支持全量备份后，用户如果分库表下载逻辑备份文件，需要用到此接口。
新版本支持(CreateBackup)创建逻辑备份的时候，直接发起指定库表备份，用户直接下载该备份文件即可。
     */
    DescribeBackupDatabases(req: DescribeBackupDatabasesRequest, cb?: (error: string, rep: DescribeBackupDatabasesResponse) => void): Promise<DescribeBackupDatabasesResponse>;
    /**
     * 本接口(DescribeDBPrice)用于查询购买或续费云数据库实例的价格，支持查询按量计费或者包年包月的价格。可传入实例类型、购买时长、购买数量、内存大小、硬盘大小和可用区信息等来查询实例价格。可传入实例名称来查询实例续费价格。

注意：对某个地域进行询价，请使用对应地域的接入点，接入点信息请参照 <a href="https://cloud.tencent.com/document/api/236/15832">服务地址</a> 文档。例如：对广州地域进行询价，请把请求发到：cdb.ap-guangzhou.tencentcloudapi.com。同理对上海地域询价，把请求发到：cdb.ap-shanghai.tencentcloudapi.com。
     */
    DescribeDBPrice(req: DescribeDBPriceRequest, cb?: (error: string, rep: DescribeDBPriceResponse) => void): Promise<DescribeDBPriceResponse>;
    /**
     * 本接口(ModifyAutoRenewFlag)用于修改云数据库实例的自动续费标记。仅支持包年包月的实例设置自动续费标记。
     */
    ModifyAutoRenewFlag(req: ModifyAutoRenewFlagRequest, cb?: (error: string, rep: ModifyAutoRenewFlagResponse) => void): Promise<ModifyAutoRenewFlagResponse>;
    /**
     * 本接口(RenewDBInstance)用于续费云数据库实例，支持付费模式为包年包月的实例。按量计费实例可通过该接口续费为包年包月的实例。
     */
    RenewDBInstance(req: RenewDBInstanceRequest, cb?: (error: string, rep: RenewDBInstanceResponse) => void): Promise<RenewDBInstanceResponse>;
    /**
     * 该接口（StartBatchRollback）用于批量回档云数据库实例的库表。
     */
    StartBatchRollback(req: StartBatchRollbackRequest, cb?: (error: string, rep: StartBatchRollbackResponse) => void): Promise<StartBatchRollbackResponse>;
    /**
     * 本接口(ModifyDBInstanceProject)用于修改云数据库实例的所属项目。
     */
    ModifyDBInstanceProject(req: ModifyDBInstanceProjectRequest, cb?: (error: string, rep: ModifyDBInstanceProjectResponse) => void): Promise<ModifyDBInstanceProjectResponse>;
    /**
     * 本接口（DescribeDeviceMonitorInfo）用于查询云数据库物理机当天的监控信息，暂只支持内存488G、硬盘6T的实例查询。
     */
    DescribeDeviceMonitorInfo(req: DescribeDeviceMonitorInfoRequest, cb?: (error: string, rep: DescribeDeviceMonitorInfoResponse) => void): Promise<DescribeDeviceMonitorInfoResponse>;
    /**
     * 本接口(OpenWanService)用于开通实例外网访问。

注意，实例开通外网访问之前，需要先将实例进行 [实例初始化](https://cloud.tencent.com/document/api/236/15873) 操作。
     */
    OpenWanService(req: OpenWanServiceRequest, cb?: (error: string, rep: OpenWanServiceResponse) => void): Promise<OpenWanServiceResponse>;
    /**
     * 本接口(ModifyAuditRule)用于修改用户的审计规则。
     */
    ModifyAuditRule(req: ModifyAuditRuleRequest, cb?: (error: string, rep: ModifyAuditRuleResponse) => void): Promise<ModifyAuditRuleResponse>;
    /**
     * 本接口(DeleteAuditRule)用于删除用户的审计规则。
     */
    DeleteAuditRule(req: DeleteAuditRuleRequest, cb?: (error: string, rep: DeleteAuditRuleResponse) => void): Promise<DeleteAuditRuleResponse>;
    /**
     * 本接口(DescribeSupportedPrivileges)用于查询云数据库的支持的权限信息，包括全局权限，数据库权限，表权限以及列权限。
     */
    DescribeSupportedPrivileges(req: DescribeSupportedPrivilegesRequest, cb?: (error: string, rep: DescribeSupportedPrivilegesResponse) => void): Promise<DescribeSupportedPrivilegesResponse>;
    /**
     * 修改延迟只读实例的延迟复制时间。
     */
    ModifyRoReplicationDelay(req: ModifyRoReplicationDelayRequest, cb?: (error: string, rep: ModifyRoReplicationDelayResponse) => void): Promise<ModifyRoReplicationDelayResponse>;
    /**
     * 本接口(DescribeBinlogs)用于查询云数据库实例的 binlog 文件列表。
     */
    DescribeBinlogs(req: DescribeBinlogsRequest, cb?: (error: string, rep: DescribeBinlogsResponse) => void): Promise<DescribeBinlogsResponse>;
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 本接口(DescribeRoGroups)用于查询云数据库实例的所有的RO组的信息。
     */
    DescribeRoGroups(req: DescribeRoGroupsRequest, cb?: (error: string, rep: DescribeRoGroupsResponse) => void): Promise<DescribeRoGroupsResponse>;
    /**
     * 本接口(DescribeCloneList) 用于查询用户实例的克隆任务列表。
     */
    DescribeCloneList(req: DescribeCloneListRequest, cb?: (error: string, rep: DescribeCloneListResponse) => void): Promise<DescribeCloneListResponse>;
    /**
     * 修改置放群组的名称或者描述
     */
    ModifyNameOrDescByDpId(req: ModifyNameOrDescByDpIdRequest, cb?: (error: string, rep: ModifyNameOrDescByDpIdResponse) => void): Promise<ModifyNameOrDescByDpIdResponse>;
    /**
     * 本接口(UpgradeDBInstance)用于升级或降级云数据库实例的配置，实例类型支持主实例、灾备实例和只读实例。
     */
    UpgradeDBInstance(req: UpgradeDBInstanceRequest, cb?: (error: string, rep: UpgradeDBInstanceResponse) => void): Promise<UpgradeDBInstanceResponse>;
    /**
     * 本接口(CreateDeployGroup)用于创建放置实例的置放群组
     */
    CreateDeployGroup(req: CreateDeployGroupRequest, cb?: (error: string, rep: CreateDeployGroupResponse) => void): Promise<CreateDeployGroupResponse>;
    /**
     * 本接口(ModifyAccountMaxUserConnections)用于修改云数据库账户最大可用连接数。
     */
    ModifyAccountMaxUserConnections(req: ModifyAccountMaxUserConnectionsRequest, cb?: (error: string, rep: ModifyAccountMaxUserConnectionsResponse) => void): Promise<ModifyAccountMaxUserConnectionsResponse>;
}

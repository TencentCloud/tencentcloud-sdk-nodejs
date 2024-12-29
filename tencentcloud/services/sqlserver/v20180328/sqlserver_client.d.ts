import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCrossBackupStatisticalResponse, DescribeDatabasesRequest, StartMigrationCheckResponse, DescribeBackupStatisticalResponse, DeleteBackupMigrationRequest, DescribeInstanceTasksResponse, CreateBusinessDBInstancesResponse, DescribeDatabasesNormalRequest, DescribeInquiryPriceParameterResponse, ModifyDatabasePrivilegeRequest, DescribeCollationTimeZoneResponse, CreateBusinessIntelligenceFileResponse, RollbackInstanceResponse, DescribeDBCharsetsResponse, ModifyDBInstanceProjectResponse, DescribeIncrementalMigrationRequest, DescribeSpecSellStatusResponse, RestoreInstanceResponse, DescribeFlowStatusRequest, ModifyAccountPrivilegeResponse, ModifyMigrationResponse, DescribeInstanceTasksRequest, DescribeDBInstancesRequest, ModifyDBInstanceRenewFlagResponse, ModifyBackupNameResponse, CreateReadOnlyDBInstancesRequest, CreateBackupMigrationRequest, DescribeInstanceParamRecordsRequest, SwitchCloudInstanceHARequest, DescribeInstanceByOrdersResponse, CreateReadOnlyDBInstancesResponse, CreatePublishSubscribeResponse, DescribeInstanceParamsRequest, TerminateDBInstanceRequest, RestartDBInstanceRequest, ModifyDBInstanceNameRequest, DeleteAccountRequest, DescribeDBCharsetsRequest, StartIncrementalMigrationResponse, ModifyDBInstanceNetworkResponse, AssociateSecurityGroupsResponse, ModifyDatabaseMdfResponse, CreateMigrationRequest, ModifyDBNameResponse, ModifyDBNameRequest, ModifyDBInstanceRenewFlagRequest, DescribeUpgradeInstanceCheckResponse, DescribeRestoreTimeRangeResponse, ModifyDatabasePrivilegeResponse, CreateIncrementalMigrationResponse, DescribeZonesResponse, UpgradeDBInstanceRequest, ModifyDBInstanceSSLResponse, DescribeReadOnlyGroupDetailsResponse, InquiryPriceRenewDBInstanceRequest, DeleteBackupMigrationResponse, DescribePublishSubscribeRequest, DescribeRegularBackupPlanResponse, InquiryPriceUpgradeDBInstanceResponse, ModifyMigrationRequest, QueryMigrationCheckProcessRequest, RestartDBInstanceResponse, DescribeRollbackTimeResponse, DescribeProductSpecResponse, DescribeInstanceParamsResponse, DisassociateSecurityGroupsRequest, ModifyBackupNameRequest, CreateDBRequest, RollbackInstanceRequest, DescribeRollbackTimeRequest, DescribeIncrementalMigrationResponse, CreateDBInstancesResponse, DeleteAccountResponse, ModifyDReadableRequest, DeleteBusinessIntelligenceFileRequest, AssociateSecurityGroupsRequest, ModifyBackupStrategyResponse, DescribeBackupUploadSizeRequest, StartInstanceXEventResponse, DescribeDBInstanceInterResponse, ModifyPublishSubscribeNameResponse, DeleteIncrementalMigrationRequest, CutXEventsResponse, DescribeBackupsRequest, RestoreInstanceRequest, ModifyDatabaseShrinkMDFRequest, DescribeInstanceTradeParameterResponse, RunMigrationRequest, DescribeInstanceByOrdersRequest, ModifyMaintenanceSpanResponse, InquiryPriceCreateDBInstancesRequest, StartIncrementalMigrationRequest, ModifyDBInstanceNetworkRequest, ModifyDBEncryptAttributesResponse, ModifyMaintenanceSpanRequest, RecycleDBInstanceRequest, DescribeOrdersResponse, ModifyCloseWanIpRequest, ModifyDBInstanceNoteResponse, DescribeDBsResponse, DescribeDBSecurityGroupsRequest, ModifyAccountRemarkResponse, DescribeZonesRequest, ModifyInstanceParamRequest, DescribeCrossRegionZoneResponse, DescribeProductConfigResponse, ModifyBackupMigrationResponse, DescribeDBsNormalResponse, InquiryPriceRenewDBInstanceResponse, DescribeDBsRequest, CompleteExpansionRequest, ModifyDatabaseMdfRequest, DescribeBackupsResponse, StopMigrationRequest, TerminateDBInstanceResponse, ModifyDBRemarkRequest, DescribeAccountPrivilegeByDBResponse, DescribeProjectSecurityGroupsRequest, InquiryPriceUpgradeDBInstanceRequest, ModifyDatabaseCDCRequest, DescribeRestoreTaskRequest, DescribeInstanceTradeParameterRequest, ModifyDatabaseCDCResponse, DescribeBackupCommandResponse, CreateBasicDBInstancesRequest, DescribeDBInstancesAttributeResponse, OpenInterCommunicationRequest, QueryMigrationCheckProcessResponse, ModifyDBInstanceNameResponse, BalanceReadOnlyGroupResponse, DescribeOrdersRequest, CreateBackupMigrationResponse, DescribeMaintenanceSpanRequest, ModifyAccountRemarkRequest, DeletePublishSubscribeResponse, CreateAccountResponse, RenewPostpaidDBInstanceResponse, CloseInterCommunicationResponse, DescribeDBInstancesResponse, DescribeSlowlogsResponse, DescribeUpgradeInstanceCheckRequest, DescribeAccountPrivilegeByDBRequest, ModifyReadOnlyGroupDetailsRequest, DescribeInquiryPriceParameterRequest, DescribeUploadBackupInfoRequest, DescribeAccountsResponse, DeleteDBInstanceResponse, DescribeDBInstancesAttributeRequest, CreateCloudDBInstancesRequest, ModifyInstanceEncryptAttributesRequest, DisassociateSecurityGroupsResponse, DescribeHASwitchLogResponse, ModifyBackupMigrationRequest, CloneDBResponse, CreateBasicDBInstancesResponse, DescribeMaintenanceSpanResponse, CreateCloudDBInstancesResponse, DeletePublishSubscribeRequest, StartBackupMigrationResponse, ModifyOpenWanIpResponse, RunMigrationResponse, DescribeProductConfigRequest, CreateAccountRequest, DescribeReadOnlyGroupByReadOnlyInstanceResponse, DescribeBusinessIntelligenceFileResponse, DescribeProductSpecRequest, CompleteMigrationResponse, DescribeDBRestoreTimeRequest, InquiryPriceCreateDBInstancesResponse, CompleteMigrationRequest, RemoveBackupsRequest, CreateCloudReadOnlyDBInstancesRequest, ModifyInstanceEncryptAttributesResponse, DescribeBackupFilesResponse, RenewDBInstanceRequest, DeleteDBRequest, DescribeMigrationDatabasesResponse, CompleteExpansionResponse, ModifyDatabaseCTRequest, ModifyAccountPrivilegeRequest, DescribeXEventsResponse, DeleteIncrementalMigrationResponse, DescribeFlowStatusResponse, CutXEventsRequest, SwitchCloudInstanceHAResponse, DescribeUploadIncrementalInfoResponse, DeleteRestoreTaskResponse, DescribeBackupFilesRequest, ModifyPublishSubscribeRequest, DescribeCrossRegionsResponse, DescribeBusinessIntelligenceFileRequest, RecycleReadOnlyGroupRequest, DescribeDBInstanceInterRequest, ModifyDatabaseCTResponse, StartInstanceXEventRequest, DescribeDatabasesResponse, DescribeDBRestoreTimeResponse, DescribeSpecSellStatusRequest, DeleteMigrationResponse, DescribeReadOnlyGroupListRequest, CreateBackupRequest, DescribeDBsNormalRequest, ModifyDBInstanceSSLRequest, ModifyPublishSubscribeNameRequest, DescribeCrossRegionZoneRequest, ModifyReadOnlyGroupDetailsResponse, DescribeBackupStatisticalRequest, ModifyDBInstanceProjectRequest, RenewPostpaidDBInstanceRequest, DescribeMigrationDetailRequest, DescribeReadOnlyGroupDetailsRequest, CreateDBInstancesRequest, ModifyCrossBackupStrategyRequest, DescribeReadOnlyGroupAutoWeightResponse, ModifyBackupStrategyRequest, CreatePublishSubscribeRequest, CreateBusinessIntelligenceFileRequest, CreateMigrationResponse, DescribeCollationTimeZoneRequest, ModifyDBInstanceNoteRequest, DeleteDBResponse, ModifyIncrementalMigrationRequest, DescribeDBSecurityGroupsResponse, CreateIncrementalMigrationRequest, DescribeRegularBackupPlanRequest, ModifyDBEncryptAttributesRequest, DescribeDatabasesNormalResponse, CloseInterCommunicationRequest, DescribeReadOnlyGroupListResponse, DescribeRegionsResponse, DescribeBackupSummaryResponse, DescribeDBPrivilegeByAccountResponse, DeleteBusinessIntelligenceFileResponse, DescribeBackupMonitorResponse, DescribeXEventsRequest, DescribeRestoreTaskResponse, DescribeCrossRegionsRequest, OpenInterCommunicationResponse, DescribeDatabaseNamesRequest, ModifyDatabaseShrinkMDFResponse, DescribeDatabaseNamesResponse, RecycleReadOnlyGroupResponse, DescribeHASwitchLogRequest, DescribeMigrationsResponse, DescribeProjectSecurityGroupsResponse, ResetAccountPasswordResponse, DescribeMigrationsRequest, DescribeBackupUploadSizeResponse, DescribeUploadIncrementalInfoRequest, DescribeAccountsRequest, DescribeBackupByFlowIdResponse, DescribeRegionsRequest, ModifyCrossBackupStrategyResponse, DescribeCrossBackupStatisticalRequest, DeleteMigrationRequest, ModifyDBInstanceSecurityGroupsRequest, DescribeBackupMonitorRequest, RemoveBackupsResponse, ModifyCloseWanIpResponse, ModifyDBInstanceSecurityGroupsResponse, DescribeDBPrivilegeByAccountRequest, DescribeBackupMigrationRequest, BalanceReadOnlyGroupRequest, ModifyInstanceParamResponse, DescribeRestoreTimeRangeRequest, CreateCloudReadOnlyDBInstancesResponse, CreateBackupResponse, DescribeBackupMigrationResponse, DescribeUploadBackupInfoResponse, StartMigrationCheckRequest, DescribeBackupCommandRequest, DescribeInstanceParamRecordsResponse, DescribeBackupSummaryRequest, RenewDBInstanceResponse, DescribeReadOnlyGroupAutoWeightRequest, RecycleDBInstanceResponse, DescribeReadOnlyGroupByReadOnlyInstanceRequest, DescribeBackupByFlowIdRequest, StartBackupMigrationRequest, ModifyIncrementalMigrationResponse, DescribeMigrationDatabasesRequest, CloneDBRequest, DescribeMigrationDetailResponse, DeleteDBInstanceRequest, CreateDBResponse, CreateBusinessDBInstancesRequest, ResetAccountPasswordRequest, DescribeSlowlogsRequest, ModifyDReadableResponse, StopMigrationResponse, UpgradeDBInstanceResponse, DescribePublishSubscribeResponse, ModifyDBRemarkResponse, ModifyOpenWanIpRequest, ModifyPublishSubscribeResponse, DeleteRestoreTaskRequest } from "./sqlserver_models";
/**
 * sqlserver client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（ModifyAccountPrivilege）用于修改实例账户权限。
     */
    ModifyAccountPrivilege(req: ModifyAccountPrivilegeRequest, cb?: (error: string, rep: ModifyAccountPrivilegeResponse) => void): Promise<ModifyAccountPrivilegeResponse>;
    /**
     * 本接口（RecycleReadOnlyGroup）立即回收只读组的资源，只读组占用的vip等资源将立即释放且不可找回。
     */
    RecycleReadOnlyGroup(req: RecycleReadOnlyGroupRequest, cb?: (error: string, rep: RecycleReadOnlyGroupResponse) => void): Promise<RecycleReadOnlyGroupResponse>;
    /**
     * 本接口(ModifyBackupName)用于修改备份任务名称。
     */
    ModifyBackupName(req: ModifyBackupNameRequest, cb?: (error: string, rep: ModifyBackupNameResponse) => void): Promise<ModifyBackupNameResponse>;
    /**
     * 本接口（DescribeSpecSellStatus）用于查询售卖规格状态信息，其中包括售卖状态，参考价格等(实际价格以询价接口为准)。
     */
    DescribeSpecSellStatus(req: DescribeSpecSellStatusRequest, cb?: (error: string, rep: DescribeSpecSellStatusResponse) => void): Promise<DescribeSpecSellStatusResponse>;
    /**
     * 本接口（StartIncrementalMigration）用于启动增量备份导入任务。
     */
    StartIncrementalMigration(req: StartIncrementalMigrationRequest, cb?: (error: string, rep: StartIncrementalMigrationResponse) => void): Promise<StartIncrementalMigrationResponse>;
    /**
     * 本接口（QueryMigrationCheckProcess）的作用是查询迁移检查任务的进度，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
     */
    QueryMigrationCheckProcess(req: QueryMigrationCheckProcessRequest, cb?: (error: string, rep: QueryMigrationCheckProcessResponse) => void): Promise<QueryMigrationCheckProcessResponse>;
    /**
     * 本接口（ModifyAccountRemark）用于修改账户备注。
     */
    ModifyAccountRemark(req: ModifyAccountRemarkRequest, cb?: (error: string, rep: ModifyAccountRemarkResponse) => void): Promise<ModifyAccountRemarkResponse>;
    /**
     * 本接口（ModifyPublishSubscribe）用于修改实例的发布订阅关系。
     */
    ModifyPublishSubscribe(req: ModifyPublishSubscribeRequest, cb?: (error: string, rep: ModifyPublishSubscribeResponse) => void): Promise<ModifyPublishSubscribeResponse>;
    /**
     * 本接口（ModifyDBInstanceName）用于修改实例名字。
     */
    ModifyDBInstanceName(req: ModifyDBInstanceNameRequest, cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void): Promise<ModifyDBInstanceNameResponse>;
    /**
     * 本接口（DescribeUploadIncrementalInfo）用于查询增量备份上传权限。
     */
    DescribeUploadIncrementalInfo(req: DescribeUploadIncrementalInfoRequest, cb?: (error: string, rep: DescribeUploadIncrementalInfoResponse) => void): Promise<DescribeUploadIncrementalInfoResponse>;
    /**
     * 本接口(ModifyDatabaseMdf)用于收缩数据库mdf(Shrink mdf)。**本接口已废弃，请使用接口ModifyDatabaseShrinkMDF**。
     */
    ModifyDatabaseMdf(req: ModifyDatabaseMdfRequest, cb?: (error: string, rep: ModifyDatabaseMdfResponse) => void): Promise<ModifyDatabaseMdfResponse>;
    /**
     * 本接口（ModifyDBRemark）用于修改数据库备注。
     */
    ModifyDBRemark(req: ModifyDBRemarkRequest, cb?: (error: string, rep: ModifyDBRemarkResponse) => void): Promise<ModifyDBRemarkResponse>;
    /**
     * 本接口（DeleteIncrementalMigration）用于删除增量备份导入任务。
     */
    DeleteIncrementalMigration(req: DeleteIncrementalMigrationRequest, cb?: (error: string, rep: DeleteIncrementalMigrationResponse) => void): Promise<DeleteIncrementalMigrationResponse>;
    /**
     * 本接口（RunMigration）用于启动迁移任务，开始迁移
     */
    RunMigration(req: RunMigrationRequest, cb?: (error: string, rep: RunMigrationResponse) => void): Promise<RunMigrationResponse>;
    /**
     * 本接口（ModifyDBInstanceNetwork）用于修改运行中实例的网络，仅支持从VPC网络到VPC网络的转换
     */
    ModifyDBInstanceNetwork(req: ModifyDBInstanceNetworkRequest, cb?: (error: string, rep: ModifyDBInstanceNetworkResponse) => void): Promise<ModifyDBInstanceNetworkResponse>;
    /**
     * 本接口（CreateCloudReadOnlyDBInstances）用于创建只读实例 (云盘)。
     */
    CreateCloudReadOnlyDBInstances(req: CreateCloudReadOnlyDBInstancesRequest, cb?: (error: string, rep: CreateCloudReadOnlyDBInstancesResponse) => void): Promise<CreateCloudReadOnlyDBInstancesResponse>;
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 本接口（ModifyMaintenanceSpan）用于修改实例的可维护时间窗
     */
    ModifyMaintenanceSpan(req: ModifyMaintenanceSpanRequest, cb?: (error: string, rep: ModifyMaintenanceSpanResponse) => void): Promise<ModifyMaintenanceSpanResponse>;
    /**
     * 本接口（DescribeMaintenanceSpan）根据实例ID查询该实例的可维护时间窗。
     */
    DescribeMaintenanceSpan(req: DescribeMaintenanceSpanRequest, cb?: (error: string, rep: DescribeMaintenanceSpanResponse) => void): Promise<DescribeMaintenanceSpanResponse>;
    /**
     * 本接口（DescribeReadOnlyGroupDetails）用于查询只读组详情。
     */
    DescribeReadOnlyGroupDetails(req: DescribeReadOnlyGroupDetailsRequest, cb?: (error: string, rep: DescribeReadOnlyGroupDetailsResponse) => void): Promise<DescribeReadOnlyGroupDetailsResponse>;
    /**
     * 本接口（CreatePublishSubscribe）用于创建两个数据库之间的发布订阅关系。作为订阅者，不能再充当发布者，作为发布者可以有多个订阅者实例。
     */
    CreatePublishSubscribe(req: CreatePublishSubscribeRequest, cb?: (error: string, rep: CreatePublishSubscribeResponse) => void): Promise<CreatePublishSubscribeResponse>;
    /**
     * 本接口（DescribeBackupFiles）用于查询单库备份明细。
     */
    DescribeBackupFiles(req: DescribeBackupFilesRequest, cb?: (error: string, rep: DescribeBackupFilesResponse) => void): Promise<DescribeBackupFilesResponse>;
    /**
     * 本接口（DescribeRegularBackupPlan）用于查询实例定期备份保留计划
     */
    DescribeRegularBackupPlan(req: DescribeRegularBackupPlanRequest, cb?: (error: string, rep: DescribeRegularBackupPlanResponse) => void): Promise<DescribeRegularBackupPlanResponse>;
    /**
     * 本接口（DescribePublishSubscribe）用于查询发布订阅关系列表。
     */
    DescribePublishSubscribe(req: DescribePublishSubscribeRequest, cb?: (error: string, rep: DescribePublishSubscribeResponse) => void): Promise<DescribePublishSubscribeResponse>;
    /**
     * 本接口（DescribeDatabases）用于查询数据库列表。
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 本接口（CutXEvents）用于手动切割阻塞日志和死锁日志。
     */
    CutXEvents(req: CutXEventsRequest, cb?: (error: string, rep: CutXEventsResponse) => void): Promise<CutXEventsResponse>;
    /**
     * 本接口（DescribeReadOnlyGroupList）用于查询只读组列表。
     */
    DescribeReadOnlyGroupList(req: DescribeReadOnlyGroupListRequest, cb?: (error: string, rep: DescribeReadOnlyGroupListResponse) => void): Promise<DescribeReadOnlyGroupListResponse>;
    /**
     * 本接口（DescribeMigrationDetail）用于查询迁移任务的详细情况
     */
    DescribeMigrationDetail(req: DescribeMigrationDetailRequest, cb?: (error: string, rep: DescribeMigrationDetailResponse) => void): Promise<DescribeMigrationDetailResponse>;
    /**
     * 本接口 (DescribeZones) 用于查询当前可售卖的可用区信息。
     */
    DescribeZones(req?: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 本接口（DescribeUploadBackupInfo）用于查询备份上传权限。
     */
    DescribeUploadBackupInfo(req: DescribeUploadBackupInfoRequest, cb?: (error: string, rep: DescribeUploadBackupInfoResponse) => void): Promise<DescribeUploadBackupInfoResponse>;
    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     */
    DescribeProductConfig(req: DescribeProductConfigRequest, cb?: (error: string, rep: DescribeProductConfigResponse) => void): Promise<DescribeProductConfigResponse>;
    /**
     * 本接口（DescribeUpgradeInstanceCheck）用于在实例变配前，预检查实例变配的影响情况等。
     */
    DescribeUpgradeInstanceCheck(req: DescribeUpgradeInstanceCheckRequest, cb?: (error: string, rep: DescribeUpgradeInstanceCheckResponse) => void): Promise<DescribeUpgradeInstanceCheckResponse>;
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 本接口(TerminateDBInstance)用于主动隔离实例，使得实例进入回收站。
     */
    TerminateDBInstance(req: TerminateDBInstanceRequest, cb?: (error: string, rep: TerminateDBInstanceResponse) => void): Promise<TerminateDBInstanceResponse>;
    /**
     * 本接口（ModifyDBInstanceNote）用于修改实例备注信息。
     */
    ModifyDBInstanceNote(req: ModifyDBInstanceNoteRequest, cb?: (error: string, rep: ModifyDBInstanceNoteResponse) => void): Promise<ModifyDBInstanceNoteResponse>;
    /**
     * 本接口（DeleteDBInstance）用于释放回收站中的SQL server实例(立即下线)。释放后的实例将保存一段时间后物理销毁。其发布订阅将自动解除，其ro副本将自动释放。
     */
    DeleteDBInstance(req: DeleteDBInstanceRequest, cb?: (error: string, rep: DeleteDBInstanceResponse) => void): Promise<DeleteDBInstanceResponse>;
    /**
     * 本接口（CreateBusinessDBInstances）用于创建商业智能服务实例 (云盘)。
     */
    CreateBusinessDBInstances(req: CreateBusinessDBInstancesRequest, cb?: (error: string, rep: CreateBusinessDBInstancesResponse) => void): Promise<CreateBusinessDBInstancesResponse>;
    /**
     * 本接口（ModifyDBName）用于更新数据库名。
     */
    ModifyDBName(req: ModifyDBNameRequest, cb?: (error: string, rep: ModifyDBNameResponse) => void): Promise<ModifyDBNameResponse>;
    /**
     * 本接口（InquiryPriceCreateDBInstances）用于查询申请实例价格。
     */
    InquiryPriceCreateDBInstances(req: InquiryPriceCreateDBInstancesRequest, cb?: (error: string, rep: InquiryPriceCreateDBInstancesResponse) => void): Promise<InquiryPriceCreateDBInstancesResponse>;
    /**
     * 本接口(DescribeCrossRegionZone)根据主实例查询备机的容灾地域和可用区。
     */
    DescribeCrossRegionZone(req: DescribeCrossRegionZoneRequest, cb?: (error: string, rep: DescribeCrossRegionZoneResponse) => void): Promise<DescribeCrossRegionZoneResponse>;
    /**
     * 本接口(ModifyDatabaseCT)用于启用、禁用数据库数据变更跟踪(CT)
     */
    ModifyDatabaseCT(req: ModifyDatabaseCTRequest, cb?: (error: string, rep: ModifyDatabaseCTResponse) => void): Promise<ModifyDatabaseCTResponse>;
    /**
     * 本接口(DescribeBackups)用于查询备份列表。
     */
    DescribeBackups(req: DescribeBackupsRequest, cb?: (error: string, rep: DescribeBackupsResponse) => void): Promise<DescribeBackupsResponse>;
    /**
     * 本接口（ModifyPublishSubscribeName）修改发布订阅的名称。
     */
    ModifyPublishSubscribeName(req: ModifyPublishSubscribeNameRequest, cb?: (error: string, rep: ModifyPublishSubscribeNameResponse) => void): Promise<ModifyPublishSubscribeNameResponse>;
    /**
     * 本接口（RenewPostpaidDBInstance）用于将通过接口TerminateDBInstance手动隔离的按量计费实例从回收站中恢复。
     */
    RenewPostpaidDBInstance(req: RenewPostpaidDBInstanceRequest, cb?: (error: string, rep: RenewPostpaidDBInstanceResponse) => void): Promise<RenewPostpaidDBInstanceResponse>;
    /**
     * 本接口（DescribeIncrementalMigration）用于查询增量备份导入任务。
     */
    DescribeIncrementalMigration(req: DescribeIncrementalMigrationRequest, cb?: (error: string, rep: DescribeIncrementalMigrationResponse) => void): Promise<DescribeIncrementalMigrationResponse>;
    /**
     * 本接口(CreateBackup)用于创建备份。
     */
    CreateBackup(req: CreateBackupRequest, cb?: (error: string, rep: CreateBackupResponse) => void): Promise<CreateBackupResponse>;
    /**
     * 本接口（DescribeDBRestoreTime）用于查询可回档的数据库
     */
    DescribeDBRestoreTime(req: DescribeDBRestoreTimeRequest, cb?: (error: string, rep: DescribeDBRestoreTimeResponse) => void): Promise<DescribeDBRestoreTimeResponse>;
    /**
     * 本接口（DescribeBackupMigration）用于创建增量备份导入任务。
     */
    DescribeBackupMigration(req: DescribeBackupMigrationRequest, cb?: (error: string, rep: DescribeBackupMigrationResponse) => void): Promise<DescribeBackupMigrationResponse>;
    /**
     * 本接口（BalanceReadOnlyGroup）用于根据预定义的权重平衡每个只读实例的路由权重。预定义权重可根据接口DescribeReadOnlyGroupAutoWeight查询。
     */
    BalanceReadOnlyGroup(req: BalanceReadOnlyGroupRequest, cb?: (error: string, rep: BalanceReadOnlyGroupResponse) => void): Promise<BalanceReadOnlyGroupResponse>;
    /**
     * 本接口(ModifyDatabaseCDC)用于开启、关闭数据库数据变更捕获(CDC)
     */
    ModifyDatabaseCDC(req: ModifyDatabaseCDCRequest, cb?: (error: string, rep: ModifyDatabaseCDCResponse) => void): Promise<ModifyDatabaseCDCResponse>;
    /**
     * 本接口(DeleteRestoreTask)用于删除回档任务记录。
     */
    DeleteRestoreTask(req: DeleteRestoreTaskRequest, cb?: (error: string, rep: DeleteRestoreTaskResponse) => void): Promise<DeleteRestoreTaskResponse>;
    /**
     * 本接口（CompleteMigration）作用是完成一个迁移任务
     */
    CompleteMigration(req: CompleteMigrationRequest, cb?: (error: string, rep: CompleteMigrationResponse) => void): Promise<CompleteMigrationResponse>;
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 本接口（CreateAccount）用于创建实例账号
     */
    CreateAccount(req: CreateAccountRequest, cb?: (error: string, rep: CreateAccountResponse) => void): Promise<CreateAccountResponse>;
    /**
     * 本接口（StopMigration）作用是中止一个迁移任务
     */
    StopMigration(req: StopMigrationRequest, cb?: (error: string, rep: StopMigrationResponse) => void): Promise<StopMigrationResponse>;
    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 本接口（DescribeRestoreTask）用于查询回档任务列表。
     */
    DescribeRestoreTask(req: DescribeRestoreTaskRequest, cb?: (error: string, rep: DescribeRestoreTaskResponse) => void): Promise<DescribeRestoreTaskResponse>;
    /**
     * 该接口（DescribeInstanceParams）用于查询实例的参数列表。
     */
    DescribeInstanceParams(req: DescribeInstanceParamsRequest, cb?: (error: string, rep: DescribeInstanceParamsResponse) => void): Promise<DescribeInstanceParamsResponse>;
    /**
     * 本接口（ModifyDatabasePrivilege）用于修改实例数据库权限。
     */
    ModifyDatabasePrivilege(req: ModifyDatabasePrivilegeRequest, cb?: (error: string, rep: ModifyDatabasePrivilegeResponse) => void): Promise<ModifyDatabasePrivilegeResponse>;
    /**
     * 本接口(ModifyCloseWanIp)用于关闭实例外网。
     */
    ModifyCloseWanIp(req: ModifyCloseWanIpRequest, cb?: (error: string, rep: ModifyCloseWanIpResponse) => void): Promise<ModifyCloseWanIpResponse>;
    /**
     * 本接口（CompleteExpansion）在实例发起扩容后，实例状态处于“升级待切换”时，可立即完成实例升级切换操作，无需等待可维护时间窗。本接口需要在实例低峰时调用，在完全切换成功前，存在部分库不可访问的风险。
     */
    CompleteExpansion(req: CompleteExpansionRequest, cb?: (error: string, rep: CompleteExpansionResponse) => void): Promise<CompleteExpansionResponse>;
    /**
     * 本接口(DescribeBackupStatistical)用于查询备份实时统计列表。
     */
    DescribeBackupStatistical(req: DescribeBackupStatisticalRequest, cb?: (error: string, rep: DescribeBackupStatisticalResponse) => void): Promise<DescribeBackupStatisticalResponse>;
    /**
     * 本接口（CreateDB）用于创建数据库。
     */
    CreateDB(req: CreateDBRequest, cb?: (error: string, rep: CreateDBResponse) => void): Promise<CreateDBResponse>;
    /**
     * 本接口（CreateCloudDBInstances）用于创建高可用实例 (云盘)。
     */
    CreateCloudDBInstances(req: CreateCloudDBInstancesRequest, cb?: (error: string, rep: CreateCloudDBInstancesResponse) => void): Promise<CreateCloudDBInstancesResponse>;
    /**
     * 本接口(DescribeCollationTimeZone)用于查询实例支持的字符集和时区。
     */
    DescribeCollationTimeZone(req: DescribeCollationTimeZoneRequest, cb?: (error: string, rep: DescribeCollationTimeZoneResponse) => void): Promise<DescribeCollationTimeZoneResponse>;
    /**
     * 该接口（DescribeInstanceParamRecords）用于查询实例参数修改历史。
     */
    DescribeInstanceParamRecords(req: DescribeInstanceParamRecordsRequest, cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void): Promise<DescribeInstanceParamRecordsResponse>;
    /**
     * 本接口（CreateBusinessIntelligenceFile）用于添加商业智能服务文件。
     */
    CreateBusinessIntelligenceFile(req: CreateBusinessIntelligenceFileRequest, cb?: (error: string, rep: CreateBusinessIntelligenceFileResponse) => void): Promise<CreateBusinessIntelligenceFileResponse>;
    /**
     * 本接口（DescribeInstanceTasks）用于查询实例相关的异步任务列表。
     */
    DescribeInstanceTasks(req: DescribeInstanceTasksRequest, cb?: (error: string, rep: DescribeInstanceTasksResponse) => void): Promise<DescribeInstanceTasksResponse>;
    /**
     * 本接口(DescribeHASwitchLog)用于手动主备切换。
     */
    DescribeHASwitchLog(req: DescribeHASwitchLogRequest, cb?: (error: string, rep: DescribeHASwitchLogResponse) => void): Promise<DescribeHASwitchLogResponse>;
    /**
     * 本接口（StartMigrationCheck）的作用是启动一个迁移前的校验任务，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
     */
    StartMigrationCheck(req: StartMigrationCheckRequest, cb?: (error: string, rep: StartMigrationCheckResponse) => void): Promise<StartMigrationCheckResponse>;
    /**
     * 本接口（DescribeDBCharsets）用于查询实例支持的数据库字符集。
     */
    DescribeDBCharsets(req: DescribeDBCharsetsRequest, cb?: (error: string, rep: DescribeDBCharsetsResponse) => void): Promise<DescribeDBCharsetsResponse>;
    /**
     * 本接口（DeletePublishSubscribe）用于删除两个数据库间的发布订阅关系。
     */
    DeletePublishSubscribe(req: DeletePublishSubscribeRequest, cb?: (error: string, rep: DeletePublishSubscribeResponse) => void): Promise<DeletePublishSubscribeResponse>;
    /**
     * 本接口(ModifyDatabaseShrinkDMF)用于收缩数据库mdf(Shrink mdf)。
     */
    ModifyDatabaseShrinkMDF(req: ModifyDatabaseShrinkMDFRequest, cb?: (error: string, rep: ModifyDatabaseShrinkMDFResponse) => void): Promise<ModifyDatabaseShrinkMDFResponse>;
    /**
     * 本接口（ResetAccountPassword）用于重置实例的账号密码。
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 本接口(ModifyInstanceParam)用于修改云数据库实例的参数。
<b>注意</b>：如果修改的参数是需要<b>重启实例</b>的，那么实例将会按照WaitSwitch参数的设置(可能是立即执行也可能在可维护时间窗内自动执行)在执行参数修改时<b>重启实例</b>。
您可以通过DescribeInstanceParams接口查询修改参数时是否会重启实例，以免导致您的实例不符合预期重启。
     */
    ModifyInstanceParam(req: ModifyInstanceParamRequest, cb?: (error: string, rep: ModifyInstanceParamResponse) => void): Promise<ModifyInstanceParamResponse>;
    /**
     * 本接口(DescribeRestoreTimeRange)用于查询按照时间点可回档的时间范围。
     */
    DescribeRestoreTimeRange(req: DescribeRestoreTimeRangeRequest, cb?: (error: string, rep: DescribeRestoreTimeRangeResponse) => void): Promise<DescribeRestoreTimeRangeResponse>;
    /**
     * 本接口（DescribeSlowlogs）用于获取慢查询日志文件信息
     */
    DescribeSlowlogs(req: DescribeSlowlogsRequest, cb?: (error: string, rep: DescribeSlowlogsResponse) => void): Promise<DescribeSlowlogsResponse>;
    /**
     * 本接口(ModifyCrossBackupStrategy)用于开启、关闭地域备份策略。
     */
    ModifyCrossBackupStrategy(req: ModifyCrossBackupStrategyRequest, cb?: (error: string, rep: ModifyCrossBackupStrategyResponse) => void): Promise<ModifyCrossBackupStrategyResponse>;
    /**
     * 本接口(DeleteDB)用于删除数据库。
     */
    DeleteDB(req: DeleteDBRequest, cb?: (error: string, rep: DeleteDBResponse) => void): Promise<DeleteDBResponse>;
    /**
     * 本接口(DescribeFlowStatus)用于查询流程状态。
     */
    DescribeFlowStatus(req: DescribeFlowStatusRequest, cb?: (error: string, rep: DescribeFlowStatusResponse) => void): Promise<DescribeFlowStatusResponse>;
    /**
     * 本接口（CreateBasicDBInstances）用于创建基础版实例 (云盘)。
     */
    CreateBasicDBInstances(req: CreateBasicDBInstancesRequest, cb?: (error: string, rep: CreateBasicDBInstancesResponse) => void): Promise<CreateBasicDBInstancesResponse>;
    /**
     * 本接口（RestartDBInstance）用于重启数据库实例。
     */
    RestartDBInstance(req: RestartDBInstanceRequest, cb?: (error: string, rep: RestartDBInstanceResponse) => void): Promise<RestartDBInstanceResponse>;
    /**
     * 本接口（CreateDBInstances）用于创建高可用实例 (本地盘)
     */
    CreateDBInstances(req: CreateDBInstancesRequest, cb?: (error: string, rep: CreateDBInstancesResponse) => void): Promise<CreateDBInstancesResponse>;
    /**
     * 本接口（CreateMigration）作用是创建一个迁移任务
     */
    CreateMigration(req: CreateMigrationRequest, cb?: (error: string, rep: CreateMigrationResponse) => void): Promise<CreateMigrationResponse>;
    /**
     * 本接口（DeleteBusinessIntelligenceFile）用于删除商业智能文件。
     */
    DeleteBusinessIntelligenceFile(req: DeleteBusinessIntelligenceFileRequest, cb?: (error: string, rep: DeleteBusinessIntelligenceFileResponse) => void): Promise<DeleteBusinessIntelligenceFileResponse>;
    /**
     * 本接口（CreateBackupMigration）用于创建备份导入任务。
     */
    CreateBackupMigration(req: CreateBackupMigrationRequest, cb?: (error: string, rep: CreateBackupMigrationResponse) => void): Promise<CreateBackupMigrationResponse>;
    /**
     * 本接口(DescribeDBInstances)用于查询实例列表。
     */
    DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse>;
    /**
     * 本接口（DescribeBusinessIntelligenceFile）用于查询商业智能服务需要的文件。
     */
    DescribeBusinessIntelligenceFile(req: DescribeBusinessIntelligenceFileRequest, cb?: (error: string, rep: DescribeBusinessIntelligenceFileResponse) => void): Promise<DescribeBusinessIntelligenceFileResponse>;
    /**
     * 本接口（StartBackupMigration）用于启动备份导入任务。
     */
    StartBackupMigration(req: StartBackupMigrationRequest, cb?: (error: string, rep: StartBackupMigrationResponse) => void): Promise<StartBackupMigrationResponse>;
    /**
     * 本接口(AssociateSecurityGroups)用于安全组批量绑定实例。
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 本接口（OpenInterCommunication）用于打开实例的互通，实例互通可以实现商业智能服务相互联通。
     */
    OpenInterCommunication(req: OpenInterCommunicationRequest, cb?: (error: string, rep: OpenInterCommunicationResponse) => void): Promise<OpenInterCommunicationResponse>;
    /**
     * 本接口（CreateIncrementalMigration）用于创建增量备份导入任务。
     */
    CreateIncrementalMigration(req: CreateIncrementalMigrationRequest, cb?: (error: string, rep: CreateIncrementalMigrationResponse) => void): Promise<CreateIncrementalMigrationResponse>;
    /**
     * 本接口（DescribeBackupUploadSize）用于查询上传的备份文件大小。在备份上传类型是COS_UPLOAD(备份放在业务的对象存储上)时有效。
     */
    DescribeBackupUploadSize(req: DescribeBackupUploadSizeRequest, cb?: (error: string, rep: DescribeBackupUploadSizeResponse) => void): Promise<DescribeBackupUploadSizeResponse>;
    /**
     * 本接口（StartInstanceXEvent）用于开启、关闭扩展事件。
     */
    StartInstanceXEvent(req: StartInstanceXEventRequest, cb?: (error: string, rep: StartInstanceXEventResponse) => void): Promise<StartInstanceXEventResponse>;
    /**
     * 本接口（DeleteMigration）用于删除迁移任务
     */
    DeleteMigration(req: DeleteMigrationRequest, cb?: (error: string, rep: DeleteMigrationResponse) => void): Promise<DeleteMigrationResponse>;
    /**
     * 本接口（ModifyInstanceEncryptAttributes）用于开通实例的TDE加密功能。
     */
    ModifyInstanceEncryptAttributes(req: ModifyInstanceEncryptAttributesRequest, cb?: (error: string, rep: ModifyInstanceEncryptAttributesResponse) => void): Promise<ModifyInstanceEncryptAttributesResponse>;
    /**
     * 本接口（DescribeDatabaseNames）查询账户关联的数据库名称。
     */
    DescribeDatabaseNames(req: DescribeDatabaseNamesRequest, cb?: (error: string, rep: DescribeDatabaseNamesResponse) => void): Promise<DescribeDatabaseNamesResponse>;
    /**
     * 本接口（DescribeInstanceByOrders）用于根据订单号查询资源ID
     */
    DescribeInstanceByOrders(req: DescribeInstanceByOrdersRequest, cb?: (error: string, rep: DescribeInstanceByOrdersResponse) => void): Promise<DescribeInstanceByOrdersResponse>;
    /**
     * 本接口（DescribeAccounts）用于拉取实例账户列表。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 本接口（ModifyIncrementalMigration）用于修改增量备份导入任务。
     */
    ModifyIncrementalMigration(req: ModifyIncrementalMigrationRequest, cb?: (error: string, rep: ModifyIncrementalMigrationResponse) => void): Promise<ModifyIncrementalMigrationResponse>;
    /**
     * 本接口（ModifyDBEncryptAttributes）用于开启、关闭数据库的TDE加密功能。
     */
    ModifyDBEncryptAttributes(req: ModifyDBEncryptAttributesRequest, cb?: (error: string, rep: ModifyDBEncryptAttributesResponse) => void): Promise<ModifyDBEncryptAttributesResponse>;
    /**
     * 本接口(DescribeCrossRegions)用于查询跨地域备份的目标地域。
     */
    DescribeCrossRegions(req?: DescribeCrossRegionsRequest, cb?: (error: string, rep: DescribeCrossRegionsResponse) => void): Promise<DescribeCrossRegionsResponse>;
    /**
     * 本接口（ModifyDReadable）用于开通或者关闭备机只读
     */
    ModifyDReadable(req: ModifyDReadableRequest, cb?: (error: string, rep: ModifyDReadableResponse) => void): Promise<ModifyDReadableResponse>;
    /**
     * 本接口（RemoveBackups）可以删除用户手动创建的备份文件。待删除的备份策略可以是实例备份，也可以是多库备份。
     */
    RemoveBackups(req: RemoveBackupsRequest, cb?: (error: string, rep: RemoveBackupsResponse) => void): Promise<RemoveBackupsResponse>;
    /**
     * 本接口（DescribeMigrationDatabases）的作用是查询待迁移数据库列表
     */
    DescribeMigrationDatabases(req: DescribeMigrationDatabasesRequest, cb?: (error: string, rep: DescribeMigrationDatabasesResponse) => void): Promise<DescribeMigrationDatabasesResponse>;
    /**
     * 本接口（DescribeDBInstanceInter）用于查询互通实例的信息。
     */
    DescribeDBInstanceInter(req: DescribeDBInstanceInterRequest, cb?: (error: string, rep: DescribeDBInstanceInterResponse) => void): Promise<DescribeDBInstanceInterResponse>;
    /**
     * 本接口（RecycleDBInstance）用于主动回收已下线的SQLSERVER实例
     */
    RecycleDBInstance(req: RecycleDBInstanceRequest, cb?: (error: string, rep: RecycleDBInstanceResponse) => void): Promise<RecycleDBInstanceResponse>;
    /**
     * 本接口（CreateReadOnlyDBInstances）用于创建只读实例 (本地盘)。
     */
    CreateReadOnlyDBInstances(req: CreateReadOnlyDBInstancesRequest, cb?: (error: string, rep: CreateReadOnlyDBInstancesResponse) => void): Promise<CreateReadOnlyDBInstancesResponse>;
    /**
     * 本接口(SwitchCloudInstanceHA)用于手动主备切换。
     */
    SwitchCloudInstanceHA(req: SwitchCloudInstanceHARequest, cb?: (error: string, rep: SwitchCloudInstanceHAResponse) => void): Promise<SwitchCloudInstanceHAResponse>;
    /**
     * 本接口（DescribeInquiryPriceParameter）用于查询实例询价计费参数。当前接口查询实例新购的计费参数。内部接口用于活动页售卖场景。
     */
    DescribeInquiryPriceParameter(req: DescribeInquiryPriceParameterRequest, cb?: (error: string, rep: DescribeInquiryPriceParameterResponse) => void): Promise<DescribeInquiryPriceParameterResponse>;
    /**
     * 本接口（CloseInterCommunication）用于关闭实例互通。
     */
    CloseInterCommunication(req: CloseInterCommunicationRequest, cb?: (error: string, rep: CloseInterCommunicationResponse) => void): Promise<CloseInterCommunicationResponse>;
    /**
     * 本接口(DescribeBackupSummary)用于查询数据库备份概览信息。
     */
    DescribeBackupSummary(req?: DescribeBackupSummaryRequest, cb?: (error: string, rep: DescribeBackupSummaryResponse) => void): Promise<DescribeBackupSummaryResponse>;
    /**
     * 本接口（ModifyMigration）可以修改已有的迁移任务信息
     */
    ModifyMigration(req: ModifyMigrationRequest, cb?: (error: string, rep: ModifyMigrationResponse) => void): Promise<ModifyMigrationResponse>;
    /**
     * 本接口（DescribeOrders）用于查询订单信息
     */
    DescribeOrders(req: DescribeOrdersRequest, cb?: (error: string, rep: DescribeOrdersResponse) => void): Promise<DescribeOrdersResponse>;
    /**
     * 本接口（DescribeInstanceTradeParameter）用于查询实例的计费参数
     */
    DescribeInstanceTradeParameter(req: DescribeInstanceTradeParameterRequest, cb?: (error: string, rep: DescribeInstanceTradeParameterResponse) => void): Promise<DescribeInstanceTradeParameterResponse>;
    /**
     * 本接口(DescribeBackupMonitor)用于查询备份空间使用详情。
     */
    DescribeBackupMonitor(req: DescribeBackupMonitorRequest, cb?: (error: string, rep: DescribeBackupMonitorResponse) => void): Promise<DescribeBackupMonitorResponse>;
    /**
     * 本接口（CloneDB）用于克隆数据库，只支持克隆到本实例，克隆时必须指定新库名称。
     */
    CloneDB(req: CloneDBRequest, cb?: (error: string, rep: CloneDBResponse) => void): Promise<CloneDBResponse>;
    /**
     * 本接口（RestoreInstance）用于按照备份集回档数据库。
     */
    RestoreInstance(req: RestoreInstanceRequest, cb?: (error: string, rep: RestoreInstanceResponse) => void): Promise<RestoreInstanceResponse>;
    /**
     * 本接口（ModifyDBInstanceProject）用于修改数据库实例所属项目。
     */
    ModifyDBInstanceProject(req: ModifyDBInstanceProjectRequest, cb?: (error: string, rep: ModifyDBInstanceProjectResponse) => void): Promise<ModifyDBInstanceProjectResponse>;
    /**
     * 本接口(DescribeCrossBackupStatistical)用于查询跨地域备份实时统计列表。
     */
    DescribeCrossBackupStatistical(req: DescribeCrossBackupStatisticalRequest, cb?: (error: string, rep: DescribeCrossBackupStatisticalResponse) => void): Promise<DescribeCrossBackupStatisticalResponse>;
    /**
     * 本接口（DeleteAccount）用于删除实例账号。
     */
    DeleteAccount(req: DeleteAccountRequest, cb?: (error: string, rep: DeleteAccountResponse) => void): Promise<DeleteAccountResponse>;
    /**
     * 本接口（ModifyDBInstanceSSL）用于开启\关闭\更新SSL加密
     */
    ModifyDBInstanceSSL(req: ModifyDBInstanceSSLRequest, cb?: (error: string, rep: ModifyDBInstanceSSLResponse) => void): Promise<ModifyDBInstanceSSLResponse>;
    /**
     * 本接口（ModifyBackupStrategy）用于修改备份策略
     */
    ModifyBackupStrategy(req: ModifyBackupStrategyRequest, cb?: (error: string, rep: ModifyBackupStrategyResponse) => void): Promise<ModifyBackupStrategyResponse>;
    /**
     * 本接口(DescribeDBsNormal)用于查询数据库配置信息，此接口不包含数据库的关联账号。**此接口已废弃，请使用DescribeDatabasesNormal。**
     */
    DescribeDBsNormal(req: DescribeDBsNormalRequest, cb?: (error: string, rep: DescribeDBsNormalResponse) => void): Promise<DescribeDBsNormalResponse>;
    /**
     * 本接口(ModifyOpenWanIp)用于开通实例外网。
     */
    ModifyOpenWanIp(req: ModifyOpenWanIpRequest, cb?: (error: string, rep: ModifyOpenWanIpResponse) => void): Promise<ModifyOpenWanIpResponse>;
    /**
     * 本接口（DescribeMigrations）根据输入的限定条件，查询符合条件的迁移任务列表
     */
    DescribeMigrations(req: DescribeMigrationsRequest, cb?: (error: string, rep: DescribeMigrationsResponse) => void): Promise<DescribeMigrationsResponse>;
    /**
     * 本接口(DescribeDBsNormal)用于查询数据库配置信息，此接口不包含数据库的关联账号
     */
    DescribeDatabasesNormal(req: DescribeDatabasesNormalRequest, cb?: (error: string, rep: DescribeDatabasesNormalResponse) => void): Promise<DescribeDatabasesNormalResponse>;
    /**
     * 本接口（RollbackInstance）用于按照时间点回档实例
     */
    RollbackInstance(req: RollbackInstanceRequest, cb?: (error: string, rep: RollbackInstanceResponse) => void): Promise<RollbackInstanceResponse>;
    /**
     * 本接口（DescribeDBs）用于查询数据库列表。**已废弃，请使用接口DescribeDatabases**
     */
    DescribeDBs(req: DescribeDBsRequest, cb?: (error: string, rep: DescribeDBsResponse) => void): Promise<DescribeDBsResponse>;
    /**
     * 本接口（DescribeBackupCommand）用于查询以规范的格式创建备份的命令。
     */
    DescribeBackupCommand(req: DescribeBackupCommandRequest, cb?: (error: string, rep: DescribeBackupCommandResponse) => void): Promise<DescribeBackupCommandResponse>;
    /**
     * 本接口（RenewDBInstance）用于续费实例。当被续费实例是按量计费实例时，则按量计费实例转为包年包月计费方式。
按量计费实例转包年包月询价可通过(InquiryPriceRenewDBInstance)接口获得。
     */
    RenewDBInstance(req: RenewDBInstanceRequest, cb?: (error: string, rep: RenewDBInstanceResponse) => void): Promise<RenewDBInstanceResponse>;
    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询包年包月实例升级变配的价格。
     */
    InquiryPriceUpgradeDBInstance(req: InquiryPriceUpgradeDBInstanceRequest, cb?: (error: string, rep: InquiryPriceUpgradeDBInstanceResponse) => void): Promise<InquiryPriceUpgradeDBInstanceResponse>;
    /**
     * 本接口（DescribeReadOnlyGroupAutoWeight）用于查询只读组的自动权重分配结果，在接口BalanceReadOnlyGroup接口中按照自动权重分配结果进行路由权重分配。
     */
    DescribeReadOnlyGroupAutoWeight(req: DescribeReadOnlyGroupAutoWeightRequest, cb?: (error: string, rep: DescribeReadOnlyGroupAutoWeightResponse) => void): Promise<DescribeReadOnlyGroupAutoWeightResponse>;
    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询包年包月实例的续费价格。
     */
    InquiryPriceRenewDBInstance(req: InquiryPriceRenewDBInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewDBInstanceResponse) => void): Promise<InquiryPriceRenewDBInstanceResponse>;
    /**
     * 本接口（DescribeXEvents）用于查询扩展事件列表。
     */
    DescribeXEvents(req: DescribeXEventsRequest, cb?: (error: string, rep: DescribeXEventsResponse) => void): Promise<DescribeXEventsResponse>;
    /**
     * 本接口（ModifyBackupMigration）用于修改备份导入任务。
     */
    ModifyBackupMigration(req: ModifyBackupMigrationRequest, cb?: (error: string, rep: ModifyBackupMigrationResponse) => void): Promise<ModifyBackupMigrationResponse>;
    /**
     * 本接口(DescribeDBPrivilegeByAccount)用于查询账号关联的数据库和权限信息
     */
    DescribeDBPrivilegeByAccount(req: DescribeDBPrivilegeByAccountRequest, cb?: (error: string, rep: DescribeDBPrivilegeByAccountResponse) => void): Promise<DescribeDBPrivilegeByAccountResponse>;
    /**
     * 本接口(DescribeAccountPrivilegeByDB)用于查询数据库关联的账号和权限信息
     */
    DescribeAccountPrivilegeByDB(req: DescribeAccountPrivilegeByDBRequest, cb?: (error: string, rep: DescribeAccountPrivilegeByDBResponse) => void): Promise<DescribeAccountPrivilegeByDBResponse>;
    /**
     * 本接口 (DescribeProductSpec) 用于查询全地域售卖规格配置（内部前端使用不公开）
     */
    DescribeProductSpec(req?: DescribeProductSpecRequest, cb?: (error: string, rep: DescribeProductSpecResponse) => void): Promise<DescribeProductSpecResponse>;
    /**
     * 本接口(DescribeBackupByFlowId)用于通过备份创建流程的ID查询创建的备份详情，流程ID可从接口CreateBackup中获得。
     */
    DescribeBackupByFlowId(req: DescribeBackupByFlowIdRequest, cb?: (error: string, rep: DescribeBackupByFlowIdResponse) => void): Promise<DescribeBackupByFlowIdResponse>;
    /**
     * 本接口（DescribeRollbackTime）用于查询实例可回档时间范围
     */
    DescribeRollbackTime(req: DescribeRollbackTimeRequest, cb?: (error: string, rep: DescribeRollbackTimeResponse) => void): Promise<DescribeRollbackTimeResponse>;
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 本接口（ModifyReadOnlyGroupDetails）用于修改只读组详情。
     */
    ModifyReadOnlyGroupDetails(req: ModifyReadOnlyGroupDetailsRequest, cb?: (error: string, rep: ModifyReadOnlyGroupDetailsResponse) => void): Promise<ModifyReadOnlyGroupDetailsResponse>;
    /**
     * 本接口（DeleteBackupMigration）用于删除备份导入任务。
     */
    DeleteBackupMigration(req: DeleteBackupMigrationRequest, cb?: (error: string, rep: DeleteBackupMigrationResponse) => void): Promise<DeleteBackupMigrationResponse>;
    /**
     * 本接口（DescribeDBInstancesAttribute）用于查询实例附属属性
     */
    DescribeDBInstancesAttribute(req: DescribeDBInstancesAttributeRequest, cb?: (error: string, rep: DescribeDBInstancesAttributeResponse) => void): Promise<DescribeDBInstancesAttributeResponse>;
    /**
     * 本接口（UpgradeDBInstance）用于升级实例
     */
    UpgradeDBInstance(req: UpgradeDBInstanceRequest, cb?: (error: string, rep: UpgradeDBInstanceResponse) => void): Promise<UpgradeDBInstanceResponse>;
    /**
     * 本接口（ModifyDBInstanceRenewFlag）用于修改实例续费标记
     */
    ModifyDBInstanceRenewFlag(req: ModifyDBInstanceRenewFlagRequest, cb?: (error: string, rep: ModifyDBInstanceRenewFlagResponse) => void): Promise<ModifyDBInstanceRenewFlagResponse>;
    /**
     * 本接口（DescribeReadOnlyGroupByReadOnlyInstance）用于通过只读副本实例ID查询其所在的只读组。
     */
    DescribeReadOnlyGroupByReadOnlyInstance(req: DescribeReadOnlyGroupByReadOnlyInstanceRequest, cb?: (error: string, rep: DescribeReadOnlyGroupByReadOnlyInstanceResponse) => void): Promise<DescribeReadOnlyGroupByReadOnlyInstanceResponse>;
}

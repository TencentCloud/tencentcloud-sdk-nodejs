import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDBInstancesRequest, SetAutoRenewFlagRequest, DeleteBackupPlanResponse, DescribeAccountPrivilegesResponse, DescribeDatabasesRequest, DescribeDBXlogsRequest, CreateReadOnlyGroupNetworkAccessRequest, DescribeAccountsRequest, DeleteReadOnlyGroupResponse, OpenDBExtranetAccessRequest, CreateInstancesRequest, CreateDBInstanceNetworkAccessResponse, DescribeAvailableRecoveryTimeResponse, CreateBaseBackupRequest, ModifyDBInstanceReadOnlyGroupResponse, DescribeDBInstanceParametersResponse, DescribeDBInstanceSecurityGroupsResponse, RestoreDBInstanceObjectsResponse, SwitchDBInstancePrimaryRequest, OpenServerlessDBExtranetAccessRequest, RenewInstanceResponse, DeleteServerlessDBInstanceResponse, DeleteLogBackupResponse, ModifyReadOnlyGroupConfigRequest, AddDBInstanceToReadOnlyGroupRequest, DescribeProductConfigRequest, RemoveDBInstanceFromReadOnlyGroupRequest, CreateAccountRequest, InitDBInstancesResponse, DescribeTasksResponse, DescribeMaintainTimeWindowResponse, DescribeDefaultParametersRequest, DescribeDedicatedClustersResponse, RenewInstanceRequest, DescribeBackupOverviewRequest, DescribeRegionsResponse, ModifyBaseBackupExpireTimeResponse, UpgradeDBInstanceMajorVersionResponse, ModifyBackupDownloadRestrictionRequest, ModifyDBInstanceDeploymentRequest, DeleteReadOnlyGroupNetworkAccessRequest, DescribeBackupDownloadRestrictionRequest, CreateDatabaseRequest, DescribeBackupSummariesRequest, CreateBackupPlanRequest, CloseServerlessDBExtranetAccessRequest, CreateBaseBackupResponse, LockAccountResponse, CloneDBInstanceResponse, ModifyDBInstanceReadOnlyGroupRequest, AddDBInstanceToReadOnlyGroupResponse, CreateReadOnlyDBInstanceResponse, DescribeAvailableRecoveryTimeRequest, DescribeTasksRequest, DescribeDBInstanceParametersRequest, DescribeOrdersResponse, DescribeBackupDownloadURLResponse, OpenServerlessDBExtranetAccessResponse, ModifyMaintainTimeWindowResponse, InquiryPriceCreateDBInstancesResponse, CreateDBInstanceNetworkAccessRequest, ModifySwitchTimePeriodResponse, InquiryPriceCreateDBInstancesRequest, DescribeDefaultParametersResponse, DescribeBackupPlansResponse, DescribeDBInstancesRequest, ModifyDBInstanceSpecRequest, ModifyAccountRemarkResponse, UpgradeDBInstanceRequest, DescribeZonesRequest, ModifyMaintainTimeWindowRequest, ModifyBackupDownloadRestrictionResponse, DescribeLogBackupsRequest, SetAutoRenewFlagResponse, DescribeDBInstanceAttributeRequest, ResetAccountPasswordResponse, RemoveDBInstanceFromReadOnlyGroupResponse, DescribeDatabaseObjectsRequest, DescribeParameterTemplatesResponse, UpgradeDBInstanceKernelVersionRequest, SwitchDBInstancePrimaryResponse, ModifyReadOnlyDBInstanceWeightResponse, ModifyDBInstanceHAConfigRequest, DeleteReadOnlyGroupNetworkAccessResponse, DescribeMaintainTimeWindowRequest, DescribeBackupSummariesResponse, DescribeDBErrlogsRequest, ModifyDBInstancesProjectResponse, DeleteBackupPlanRequest, CloneDBInstanceRequest, DeleteParameterTemplateRequest, DescribeClassesRequest, DescribeParamsEventRequest, CreateInstancesResponse, DescribeServerlessDBInstancesRequest, DescribeDBBackupsResponse, DescribeRegionsRequest, DescribeSlowQueryListResponse, CreateReadOnlyGroupRequest, ModifyDBInstanceSSLConfigResponse, DescribeParamsEventResponse, ModifyDBInstanceSecurityGroupsRequest, DescribeDedicatedClustersRequest, CloseServerlessDBExtranetAccessResponse, RestartDBInstanceRequest, DescribeDBInstanceHAConfigRequest, CreateParameterTemplateResponse, DescribeLogBackupsResponse, IsolateDBInstancesResponse, OpenDBExtranetAccessResponse, InquiryPriceUpgradeDBInstanceRequest, DescribeDBInstanceHAConfigResponse, DescribeDatabaseObjectsResponse, IsolateDBInstancesRequest, ModifyDBInstanceNameRequest, DescribeDBInstanceSSLConfigResponse, ModifyParameterTemplateRequest, DeleteAccountRequest, UpgradeDBInstanceKernelVersionResponse, InquiryPriceRenewDBInstanceResponse, DescribeSlowQueryAnalysisRequest, DescribeServerlessDBInstancesResponse, DescribeBackupOverviewResponse, DescribeParameterTemplatesRequest, InitDBInstancesRequest, DescribeClassesResponse, DeleteDBInstanceNetworkAccessRequest, ModifyDBInstanceDeploymentResponse, UnlockAccountRequest, DeleteParameterTemplateResponse, ModifyReadOnlyDBInstanceWeightRequest, ModifyAccountPrivilegesResponse, DeleteReadOnlyGroupRequest, DescribeDBBackupsRequest, RestartDBInstanceResponse, DescribeReadOnlyGroupsRequest, DescribeBaseBackupsResponse, ModifyDBInstanceParametersResponse, DescribeDBVersionsResponse, ModifyDBInstanceSSLConfigRequest, UnlockAccountResponse, ModifyDBInstanceSecurityGroupsResponse, ModifyDBInstanceNameResponse, UpgradeDBInstanceMajorVersionRequest, CloseDBExtranetAccessResponse, DescribeBackupDownloadRestrictionResponse, CreateReadOnlyDBInstanceRequest, DescribeCloneDBInstanceSpecResponse, DescribeZonesResponse, CreateServerlessDBInstanceResponse, DescribeDatabasesResponse, DescribeProductConfigResponse, DescribeOrdersRequest, CloseDBExtranetAccessRequest, ModifyParameterTemplateResponse, DescribeEncryptionKeysRequest, RebalanceReadOnlyGroupRequest, ModifyBackupPlanResponse, DestroyDBInstanceRequest, CreateServerlessDBInstanceRequest, InquiryPriceRenewDBInstanceRequest, CreateReadOnlyGroupResponse, DeleteDBInstanceNetworkAccessResponse, ModifyAccountPrivilegesRequest, DeleteServerlessDBInstanceRequest, ModifyReadOnlyGroupConfigResponse, ModifyAccountRemarkRequest, DescribeParameterTemplateAttributesRequest, DescribeDBErrlogsResponse, ModifyBackupPlanRequest, DeleteBaseBackupRequest, InquiryPriceUpgradeDBInstanceResponse, DisIsolateDBInstancesResponse, CreateParameterTemplateRequest, DescribeDBInstanceSSLConfigRequest, ModifyDatabaseOwnerResponse, ModifySwitchTimePeriodRequest, CreateAccountResponse, DescribeSlowQueryListRequest, DescribeCloneDBInstanceSpecRequest, ModifyDatabaseOwnerRequest, DisIsolateDBInstancesRequest, CreateBackupPlanResponse, LockAccountRequest, DescribeDBInstancesResponse, DescribeDBInstanceSecurityGroupsRequest, DescribeBackupPlansRequest, ModifyBaseBackupExpireTimeRequest, ModifyDBInstanceHAConfigResponse, CreateDatabaseResponse, RebalanceReadOnlyGroupResponse, ResetAccountPasswordRequest, DescribeSlowQueryAnalysisResponse, ModifyDBInstanceParametersRequest, DescribeDBSlowlogsResponse, DescribeAccountPrivilegesRequest, DescribeReadOnlyGroupsResponse, RestoreDBInstanceObjectsRequest, DescribeAccountsResponse, ModifyDBInstanceChargeTypeRequest, DescribeParameterTemplateAttributesResponse, UpgradeDBInstanceResponse, DescribeDBVersionsRequest, ModifyDBInstancesProjectRequest, DescribeDBSlowlogsRequest, DestroyDBInstanceResponse, DescribeDBInstanceAttributeResponse, DeleteLogBackupRequest, DeleteBaseBackupResponse, ModifyDBInstanceSpecResponse, DescribeBackupDownloadURLRequest, DescribeDBXlogsResponse, ModifyDBInstanceChargeTypeResponse, DescribeBaseBackupsRequest, DescribeEncryptionKeysResponse, CreateReadOnlyGroupNetworkAccessResponse, CreateDBInstancesResponse, DeleteAccountResponse } from "./postgres_models";
/**
 * postgres client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口 (ModifyMaintainTimeWindow) 用于实例维护时间窗口的修改。
     */
    ModifyMaintainTimeWindow(req: ModifyMaintainTimeWindowRequest, cb?: (error: string, rep: ModifyMaintainTimeWindowResponse) => void): Promise<ModifyMaintainTimeWindowResponse>;
    /**
     * 本接口 (DescribeBackupDownloadURL) 用于查询指定备份集的下载地址，可包括全量备份集、增量日志备份集。
     */
    DescribeBackupDownloadURL(req: DescribeBackupDownloadURLRequest, cb?: (error: string, rep: DescribeBackupDownloadURLResponse) => void): Promise<DescribeBackupDownloadURLResponse>;
    /**
     * 本接口（DescribeDefaultParameters）主要用于查询某个数据库版本和引擎支持的所有参数。
     */
    DescribeDefaultParameters(req: DescribeDefaultParametersRequest, cb?: (error: string, rep: DescribeDefaultParametersResponse) => void): Promise<DescribeDefaultParametersResponse>;
    /**
     * 本接口（DescribeDBErrlogs）用于查询错误日志。
     */
    DescribeDBErrlogs(req: DescribeDBErrlogsRequest, cb?: (error: string, rep: DescribeDBErrlogsResponse) => void): Promise<DescribeDBErrlogsResponse>;
    /**
     * 本接口（DescribeDBInstanceHAConfig）用于查询实例HA配置信息。其中HA配置信息包括：
<li>允许备节点切换为主节点的条件配置
<li>半同步实例使用同步复制或异步复制的条件配置
     */
    DescribeDBInstanceHAConfig(req: DescribeDBInstanceHAConfigRequest, cb?: (error: string, rep: DescribeDBInstanceHAConfigResponse) => void): Promise<DescribeDBInstanceHAConfigResponse>;
    /**
     * 本接口（DescribeBackupOverview）用于查询用户的备份概览信息。返回用户当前备份个数、备份占用容量、免费容量、收费容量等信息（容量单位为字节）。
     */
    DescribeBackupOverview(req?: DescribeBackupOverviewRequest, cb?: (error: string, rep: DescribeBackupOverviewResponse) => void): Promise<DescribeBackupOverviewResponse>;
    /**
     * 本接口用于查询数据库对象列表。例如查询test数据库下的模式列表。
     */
    DescribeDatabaseObjects(req: DescribeDatabaseObjectsRequest, cb?: (error: string, rep: DescribeDatabaseObjectsResponse) => void): Promise<DescribeDatabaseObjectsResponse>;
    /**
     * 本接口（ModifyAccountRemark）用于修改账号备注。
     */
    ModifyAccountRemark(req: ModifyAccountRemarkRequest, cb?: (error: string, rep: ModifyAccountRemarkResponse) => void): Promise<ModifyAccountRemarkResponse>;
    /**
     * 本接口（SetAutoRenewFlag）用于设置自动续费。
     */
    SetAutoRenewFlag(req: SetAutoRenewFlagRequest, cb?: (error: string, rep: SetAutoRenewFlagResponse) => void): Promise<SetAutoRenewFlagResponse>;
    /**
     * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
     */
    ModifyDBInstanceName(req: ModifyDBInstanceNameRequest, cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void): Promise<ModifyDBInstanceNameResponse>;
    /**
     * 本接口 (DescribeMaintainTimeWindow) 用于查询实例的维护时间窗口
     */
    DescribeMaintainTimeWindow(req: DescribeMaintainTimeWindowRequest, cb?: (error: string, rep: DescribeMaintainTimeWindowResponse) => void): Promise<DescribeMaintainTimeWindowResponse>;
    /**
     * 查询专属集群
     */
    DescribeDedicatedClusters(req: DescribeDedicatedClustersRequest, cb?: (error: string, rep: DescribeDedicatedClustersResponse) => void): Promise<DescribeDedicatedClustersResponse>;
    /**
     * 本接口（DeleteParameterTemplate）主要用于删除某个参数模板。
     */
    DeleteParameterTemplate(req: DeleteParameterTemplateRequest, cb?: (error: string, rep: DeleteParameterTemplateResponse) => void): Promise<DeleteParameterTemplateResponse>;
    /**
     * 本接口（DescribeDBInstanceAttribute）用于查询实例的参数信息。
     */
    DescribeDBInstanceParameters(req: DescribeDBInstanceParametersRequest, cb?: (error: string, rep: DescribeDBInstanceParametersResponse) => void): Promise<DescribeDBInstanceParametersResponse>;
    /**
     * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
     */
    DeleteServerlessDBInstance(req: DeleteServerlessDBInstanceRequest, cb?: (error: string, rep: DeleteServerlessDBInstanceResponse) => void): Promise<DeleteServerlessDBInstanceResponse>;
    /**
     * 本接口（CreateDBInstanceNetworkAccess）用于创建实例网络。
     */
    CreateDBInstanceNetworkAccess(req: CreateDBInstanceNetworkAccessRequest, cb?: (error: string, rep: CreateDBInstanceNetworkAccessResponse) => void): Promise<CreateDBInstanceNetworkAccessResponse>;
    /**
     * 本接口（ModifyDBInstanceSpec）用于修改实例规格，包括内存、磁盘。
     */
    ModifyDBInstanceSpec(req: ModifyDBInstanceSpecRequest, cb?: (error: string, rep: ModifyDBInstanceSpecResponse) => void): Promise<ModifyDBInstanceSpecResponse>;
    /**
     * 本接口（ModifyBackupDownloadRestriction）用于修改备份文件下载限制。
     */
    ModifyBackupDownloadRestriction(req: ModifyBackupDownloadRestrictionRequest, cb?: (error: string, rep: ModifyBackupDownloadRestrictionResponse) => void): Promise<ModifyBackupDownloadRestrictionResponse>;
    /**
     * 本接口（DescribeTasks）用于查询任务列表，展示异步任务的执行进度。
注：本接口中展示的步骤为总结性步骤，可能伴随着版本迭代进行调整，不建议作为关键逻辑使用
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 本接口（RenewInstance）用于续费实例。
     */
    RenewInstance(req: RenewInstanceRequest, cb?: (error: string, rep: RenewInstanceResponse) => void): Promise<RenewInstanceResponse>;
    /**
     * 接口（DescribeDatabases）用来查询实例的数据库列表。
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 本接口 (DescribeParameterTemplates) 用于查询参数模板列表。
     */
    DescribeParameterTemplates(req: DescribeParameterTemplatesRequest, cb?: (error: string, rep: DescribeParameterTemplatesResponse) => void): Promise<DescribeParameterTemplatesResponse>;
    /**
     * 本接口（DescribeProductConfig）用于查询售卖规格配置。本接口已废弃，推荐使用新接口[DescribeClasses](https://cloud.tencent.com/document/api/409/89019)。
     */
    DescribeProductConfig(req: DescribeProductConfigRequest, cb?: (error: string, rep: DescribeProductConfigResponse) => void): Promise<DescribeProductConfigResponse>;
    /**
     * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。本接口已于2021.09.01日废弃，后续此接口将不再返回任何数据，推荐使用接口[DescribeSlowQueryList](https://cloud.tencent.com/document/api/409/60540)替代。
     */
    DescribeDBSlowlogs(req: DescribeDBSlowlogsRequest, cb?: (error: string, rep: DescribeDBSlowlogsResponse) => void): Promise<DescribeDBSlowlogsResponse>;
    /**
     * 查询数据库账号对某数据库对象拥有的权限列表。
     */
    DescribeAccountPrivileges(req: DescribeAccountPrivilegesRequest, cb?: (error: string, rep: DescribeAccountPrivilegesResponse) => void): Promise<DescribeAccountPrivilegesResponse>;
    /**
     * 可对RO组进行网络的删除操作。
     */
    DeleteReadOnlyGroupNetworkAccess(req: DeleteReadOnlyGroupNetworkAccessRequest, cb?: (error: string, rep: DeleteReadOnlyGroupNetworkAccessResponse) => void): Promise<DeleteReadOnlyGroupNetworkAccessResponse>;
    /**
     * 支持实例的计费类型转换（目前仅支持按量计费转包年包月）
     */
    ModifyDBInstanceChargeType(req: ModifyDBInstanceChargeTypeRequest, cb?: (error: string, rep: ModifyDBInstanceChargeTypeResponse) => void): Promise<ModifyDBInstanceChargeTypeResponse>;
    /**
     * 解除数据库账号的锁定，解锁后账号可以登录数据库。
     */
    UnlockAccount(req: UnlockAccountRequest, cb?: (error: string, rep: UnlockAccountResponse) => void): Promise<UnlockAccountResponse>;
    /**
     * 本接口 (DestroyDBInstance) 用于彻底销毁指定DBInstanceId对应的实例，销毁后实例数据将彻底删除，无法找回，调用前请仔细确认要操作的实例。只能销毁隔离中的实例。
     */
    DestroyDBInstance(req: DestroyDBInstanceRequest, cb?: (error: string, rep: DestroyDBInstanceResponse) => void): Promise<DestroyDBInstanceResponse>;
    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表。本接口已废弃，推荐使用接口[DescribeBaseBackups](https://cloud.tencent.com/document/api/409/89022)替代。
     */
    DescribeDBBackups(req: DescribeDBBackupsRequest, cb?: (error: string, rep: DescribeDBBackupsResponse) => void): Promise<DescribeDBBackupsResponse>;
    /**
     * 此接口（DescribeSlowQueryAnalysis）用于统计指定时间范围内的所有慢查询，根据SQL语句抽象参数后，进行聚合分析，并返回同类SQL列表。
     */
    DescribeSlowQueryAnalysis(req: DescribeSlowQueryAnalysisRequest, cb?: (error: string, rep: DescribeSlowQueryAnalysisResponse) => void): Promise<DescribeSlowQueryAnalysisResponse>;
    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买实例的价格信息。
     */
    InquiryPriceCreateDBInstances(req: InquiryPriceCreateDBInstancesRequest, cb?: (error: string, rep: InquiryPriceCreateDBInstancesResponse) => void): Promise<InquiryPriceCreateDBInstancesResponse>;
    /**
     * 本接口（DescribeDBInstanceSecurityGroups）用于查询实例安全组。
     */
    DescribeDBInstanceSecurityGroups(req: DescribeDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBInstanceSecurityGroupsResponse) => void): Promise<DescribeDBInstanceSecurityGroupsResponse>;
    /**
     * 本接口（CreateBaseBackup）用于创建实例的数据备份。
     */
    CreateBaseBackup(req: CreateBaseBackupRequest, cb?: (error: string, rep: CreateBaseBackupResponse) => void): Promise<CreateBaseBackupResponse>;
    /**
     * 本接口（DescribeParameterTemplateAttributes）用于查询某个参数模板的具体内容，包括基本信息和参数信息。
     */
    DescribeParameterTemplateAttributes(req: DescribeParameterTemplateAttributesRequest, cb?: (error: string, rep: DescribeParameterTemplateAttributesResponse) => void): Promise<DescribeParameterTemplateAttributesResponse>;
    /**
     * 根据备份集或恢复目标时间，在原实例上恢复数据库相关对象，例如数据库、表。
     */
    RestoreDBInstanceObjects(req: RestoreDBInstanceObjectsRequest, cb?: (error: string, rep: RestoreDBInstanceObjectsResponse) => void): Promise<RestoreDBInstanceObjectsResponse>;
    /**
     * 本接口（CloseServerlessDBExtranetAccess）用于关闭serverlessDB实例公网地址
     */
    CloseServerlessDBExtranetAccess(req: CloseServerlessDBExtranetAccessRequest, cb?: (error: string, rep: CloseServerlessDBExtranetAccessResponse) => void): Promise<CloseServerlessDBExtranetAccessResponse>;
    /**
     * 本接口（ModifyDBInstanceDeployment）用于修改节点可用区部署方式，仅支持主实例。
     */
    ModifyDBInstanceDeployment(req: ModifyDBInstanceDeploymentRequest, cb?: (error: string, rep: ModifyDBInstanceDeploymentResponse) => void): Promise<ModifyDBInstanceDeploymentResponse>;
    /**
     * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
     */
    CreateServerlessDBInstance(req: CreateServerlessDBInstanceRequest, cb?: (error: string, rep: CreateServerlessDBInstanceResponse) => void): Promise<CreateServerlessDBInstanceResponse>;
    /**
     * 此接口用于创建数据库，需指定数据库名及所有者。
     */
    CreateDatabase(req: CreateDatabaseRequest, cb?: (error: string, rep: CreateDatabaseResponse) => void): Promise<CreateDatabaseResponse>;
    /**
     * 此接口用于创建数据账号，返回的Oid为账号唯一标识。与数据库系统表pg_roles中记录的oid一致。
     */
    CreateAccount(req: CreateAccountRequest, cb?: (error: string, rep: CreateAccountResponse) => void): Promise<CreateAccountResponse>;
    /**
     * 本接口 (ModifyDBInstanceParameters) 用于修改实例参数。
     */
    ModifyDBInstanceParameters(req: ModifyDBInstanceParametersRequest, cb?: (error: string, rep: ModifyDBInstanceParametersResponse) => void): Promise<ModifyDBInstanceParametersResponse>;
    /**
     * 本接口（DescribeBaseBackups）用于查询数据备份列表。
     */
    DescribeBaseBackups(req: DescribeBaseBackupsRequest, cb?: (error: string, rep: DescribeBaseBackupsResponse) => void): Promise<DescribeBaseBackupsResponse>;
    /**
     * 本接口（DescribeAvailableRecoveryTime）用于查询实例可恢复的时间范围。
     */
    DescribeAvailableRecoveryTime(req: DescribeAvailableRecoveryTimeRequest, cb?: (error: string, rep: DescribeAvailableRecoveryTimeResponse) => void): Promise<DescribeAvailableRecoveryTimeResponse>;
    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 本接口（OpenServerlessDBExtranetAccess）用于开通serverlessDB实例公网地址。
     */
    OpenServerlessDBExtranetAccess(req: OpenServerlessDBExtranetAccessRequest, cb?: (error: string, rep: OpenServerlessDBExtranetAccessResponse) => void): Promise<OpenServerlessDBExtranetAccessResponse>;
    /**
     * 本接口（ModifyDBInstanceReadOnlyGroup）用于修改实例所属的只读组
     */
    ModifyDBInstanceReadOnlyGroup(req: ModifyDBInstanceReadOnlyGroupRequest, cb?: (error: string, rep: ModifyDBInstanceReadOnlyGroupResponse) => void): Promise<ModifyDBInstanceReadOnlyGroupResponse>;
    /**
     * 用于克隆实例，支持指定备份集、指定时间点进行克隆。
     */
    CloneDBInstance(req: CloneDBInstanceRequest, cb?: (error: string, rep: CloneDBInstanceResponse) => void): Promise<CloneDBInstanceResponse>;
    /**
     * 本接口（DisIsolateDBInstances）用于解隔离实例
     */
    DisIsolateDBInstances(req: DisIsolateDBInstancesRequest, cb?: (error: string, rep: DisIsolateDBInstancesResponse) => void): Promise<DisIsolateDBInstancesResponse>;
    /**
     * 用于查询一个或多个serverlessDB实例的详细信息
     */
    DescribeServerlessDBInstances(req: DescribeServerlessDBInstancesRequest, cb?: (error: string, rep: DescribeServerlessDBInstancesResponse) => void): Promise<DescribeServerlessDBInstancesResponse>;
    /**
     * 本接口（DescribeDBVersions）用于查询支持的数据库版本。
     */
    DescribeDBVersions(req?: DescribeDBVersionsRequest, cb?: (error: string, rep: DescribeDBVersionsResponse) => void): Promise<DescribeDBVersionsResponse>;
    /**
     * 本接口（ModifyParameterTemplate）主要用于修改参数模板名称，描述等配置，也可用于管理参数模板中的参数列表。
     */
    ModifyParameterTemplate(req: ModifyParameterTemplateRequest, cb?: (error: string, rep: ModifyParameterTemplateResponse) => void): Promise<ModifyParameterTemplateResponse>;
    /**
     * 本接口 (CreateParameterTemplate) 用于创建参数模板。
     */
    CreateParameterTemplate(req: CreateParameterTemplateRequest, cb?: (error: string, rep: CreateParameterTemplateResponse) => void): Promise<CreateParameterTemplateResponse>;
    /**
     * 本接口(CreateReadOnlyDBInstance)用于创建只读实例
     */
    CreateReadOnlyDBInstance(req: CreateReadOnlyDBInstanceRequest, cb?: (error: string, rep: CreateReadOnlyDBInstanceResponse) => void): Promise<CreateReadOnlyDBInstanceResponse>;
    /**
     * 本接口(DescribeBackupSummaries)用于查询实例备份的统计信息，返回以实例为维度的备份个数、占用容量等信息（容量单位为字节）。
     */
    DescribeBackupSummaries(req: DescribeBackupSummariesRequest, cb?: (error: string, rep: DescribeBackupSummariesResponse) => void): Promise<DescribeBackupSummariesResponse>;
    /**
     * 本接口（UpgradeDBInstanceMajorVersion）用于升级实例内核大版本，例如从PostgreSQL 12升级到PostgreSQL 15。
     */
    UpgradeDBInstanceMajorVersion(req: UpgradeDBInstanceMajorVersionRequest, cb?: (error: string, rep: UpgradeDBInstanceMajorVersionResponse) => void): Promise<UpgradeDBInstanceMajorVersionResponse>;
    /**
     * 本接口(RebalanceReadOnlyGroup)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
     */
    RebalanceReadOnlyGroup(req: RebalanceReadOnlyGroupRequest, cb?: (error: string, rep: RebalanceReadOnlyGroupResponse) => void): Promise<RebalanceReadOnlyGroupResponse>;
    /**
     * 本接口（CreateReadOnlyGroupNetworkAccess）用于创建RO组的网络。
     */
    CreateReadOnlyGroupNetworkAccess(req: CreateReadOnlyGroupNetworkAccessRequest, cb?: (error: string, rep: CreateReadOnlyGroupNetworkAccessResponse) => void): Promise<CreateReadOnlyGroupNetworkAccessResponse>;
    /**
     * 本接口 （DescribeEncryptionKeys） 用于查询实例的密钥信息列表。
     */
    DescribeEncryptionKeys(req: DescribeEncryptionKeysRequest, cb?: (error: string, rep: DescribeEncryptionKeysResponse) => void): Promise<DescribeEncryptionKeysResponse>;
    /**
     * 本接口（ModifyDBInstancesProject）用于修改实例所属项目。
     */
    ModifyDBInstancesProject(req: ModifyDBInstancesProjectRequest, cb?: (error: string, rep: ModifyDBInstancesProjectResponse) => void): Promise<ModifyDBInstancesProjectResponse>;
    /**
     * 本接口（UpgradeDBInstanceKernelVersion）用于升级实例的内核版本号。
     */
    UpgradeDBInstanceKernelVersion(req: UpgradeDBInstanceKernelVersionRequest, cb?: (error: string, rep: UpgradeDBInstanceKernelVersionResponse) => void): Promise<UpgradeDBInstanceKernelVersionResponse>;
    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 本接口（RestartDBInstance）用于重启实例。
     */
    RestartDBInstance(req: RestartDBInstanceRequest, cb?: (error: string, rep: RestartDBInstanceResponse) => void): Promise<RestartDBInstanceResponse>;
    /**
     * 可对实例进行网络的删除操作。
     */
    DeleteDBInstanceNetworkAccess(req: DeleteDBInstanceNetworkAccessRequest, cb?: (error: string, rep: DeleteDBInstanceNetworkAccessResponse) => void): Promise<DeleteDBInstanceNetworkAccessResponse>;
    /**
     * 本接口(DeleteReadOnlyGroup)用于删除指定的只读组
     */
    DeleteReadOnlyGroup(req: DeleteReadOnlyGroupRequest, cb?: (error: string, rep: DeleteReadOnlyGroupResponse) => void): Promise<DeleteReadOnlyGroupResponse>;
    /**
     * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。本接口已废弃，推荐使用接口[DescribeLogBackups](https://cloud.tencent.com/document/api/409/89021)替代。
     */
    DescribeDBXlogs(req: DescribeDBXlogsRequest, cb?: (error: string, rep: DescribeDBXlogsResponse) => void): Promise<DescribeDBXlogsResponse>;
    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     */
    DescribeDBInstanceAttribute(req: DescribeDBInstanceAttributeRequest, cb?: (error: string, rep: DescribeDBInstanceAttributeResponse) => void): Promise<DescribeDBInstanceAttributeResponse>;
    /**
     * 本接口（CreateDBInstances）用于创建一个或者多个PostgreSQL实例,仅发货实例不会进行初始化。本接口已废弃，推荐使用接口[CreateInstances](https://cloud.tencent.com/document/api/409/56107)替代。
     */
    CreateDBInstances(req: CreateDBInstancesRequest, cb?: (error: string, rep: CreateDBInstancesResponse) => void): Promise<CreateDBInstancesResponse>;
    /**
     * 本接口（ModifyDBInstanceHAConfig）用于修改实例HA配置信息。其中HA配置信息包括：
<li>允许备节点切换为主节点的条件配置
<li>半同步实例使用同步复制或异步复制的条件配置
     */
    ModifyDBInstanceHAConfig(req: ModifyDBInstanceHAConfigRequest, cb?: (error: string, rep: ModifyDBInstanceHAConfigResponse) => void): Promise<ModifyDBInstanceHAConfigResponse>;
    /**
     * 本接口（DeleteLogBackup）用于删除实例指定日志备份。
     */
    DeleteLogBackup(req: DeleteLogBackupRequest, cb?: (error: string, rep: DeleteLogBackupResponse) => void): Promise<DeleteLogBackupResponse>;
    /**
     * 本接口（IsolateDBInstances）用于隔离实例。
     */
    IsolateDBInstances(req: IsolateDBInstancesRequest, cb?: (error: string, rep: IsolateDBInstancesResponse) => void): Promise<IsolateDBInstancesResponse>;
    /**
     * 本接口（ModifyBaseBackupExpireTime）用于修改实例指定数据备份的过期时间。
     */
    ModifyBaseBackupExpireTime(req: ModifyBaseBackupExpireTimeRequest, cb?: (error: string, rep: ModifyBaseBackupExpireTimeResponse) => void): Promise<ModifyBaseBackupExpireTimeResponse>;
    /**
     * 修改某账号对某数据库对象的权限、修改账号类型。
     */
    ModifyAccountPrivileges(req: ModifyAccountPrivilegesRequest, cb?: (error: string, rep: ModifyAccountPrivilegesResponse) => void): Promise<ModifyAccountPrivilegesResponse>;
    /**
     * 此接口（DescribeSlowQueryList）用于查询指定时间范围内的所有慢查询。
     */
    DescribeSlowQueryList(req: DescribeSlowQueryListRequest, cb?: (error: string, rep: DescribeSlowQueryListResponse) => void): Promise<DescribeSlowQueryListResponse>;
    /**
     * 本接口（DescribeLogBackups）用于查询日志备份列表。
     */
    DescribeLogBackups(req: DescribeLogBackupsRequest, cb?: (error: string, rep: DescribeLogBackupsResponse) => void): Promise<DescribeLogBackupsResponse>;
    /**
     * 本接口（CloseDBExtranetAccess）用于关闭实例公网地址。
     */
    CloseDBExtranetAccess(req: CloseDBExtranetAccessRequest, cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void): Promise<CloseDBExtranetAccessResponse>;
    /**
     * 本接口（AddDBInstanceToReadOnlyGroup）用于添加只读实例到只读组
     */
    AddDBInstanceToReadOnlyGroup(req: AddDBInstanceToReadOnlyGroupRequest, cb?: (error: string, rep: AddDBInstanceToReadOnlyGroupResponse) => void): Promise<AddDBInstanceToReadOnlyGroupResponse>;
    /**
     * 本接口（DescribeAccounts）用于查询实例的数据库账号列表。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 本接口（DescribeCloneDBInstanceSpec）用于查询克隆实例可选择的最小规格，包括SpecCode和磁盘。
     */
    DescribeCloneDBInstanceSpec(req: DescribeCloneDBInstanceSpecRequest, cb?: (error: string, rep: DescribeCloneDBInstanceSpecResponse) => void): Promise<DescribeCloneDBInstanceSpecResponse>;
    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     */
    DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse>;
    /**
     * 本接口（DescribeBackupDownloadRestriction）用于查询备份文件下载限制。
     */
    DescribeBackupDownloadRestriction(req?: DescribeBackupDownloadRestrictionRequest, cb?: (error: string, rep: DescribeBackupDownloadRestrictionResponse) => void): Promise<DescribeBackupDownloadRestrictionResponse>;
    /**
     * 本接口(ModifyReadOnlyGroupConfig)用于更新只读组配置信息
     */
    ModifyReadOnlyGroupConfig(req: ModifyReadOnlyGroupConfigRequest, cb?: (error: string, rep: ModifyReadOnlyGroupConfigResponse) => void): Promise<ModifyReadOnlyGroupConfigResponse>;
    /**
     * 本接口（RemoveDBInstanceFromReadOnlyGroup）用户将只读实例从只读组中移除
     */
    RemoveDBInstanceFromReadOnlyGroup(req: RemoveDBInstanceFromReadOnlyGroupRequest, cb?: (error: string, rep: RemoveDBInstanceFromReadOnlyGroupResponse) => void): Promise<RemoveDBInstanceFromReadOnlyGroupResponse>;
    /**
     * 此接口用于创建备份策略。
     */
    CreateBackupPlan(req: CreateBackupPlanRequest, cb?: (error: string, rep: CreateBackupPlanResponse) => void): Promise<CreateBackupPlanResponse>;
    /**
     * 本接口（DescribeParamsEvent）用于查询参数修改事件。
     */
    DescribeParamsEvent(req: DescribeParamsEventRequest, cb?: (error: string, rep: DescribeParamsEventResponse) => void): Promise<DescribeParamsEventResponse>;
    /**
     * 本接口（DescribeClasses）用于查询实例售卖规格。
     */
    DescribeClasses(req: DescribeClassesRequest, cb?: (error: string, rep: DescribeClassesResponse) => void): Promise<DescribeClassesResponse>;
    /**
     * 本接口（DescribeOrders）用于查询订单信息。
     */
    DescribeOrders(req: DescribeOrdersRequest, cb?: (error: string, rep: DescribeOrdersResponse) => void): Promise<DescribeOrdersResponse>;
    /**
     * 本接口（SwitchDBInstancePrimary）用于切换实例主备关系。
<li>通过主动发起切换，可以验证业务能否正确处理实例主备切换的场景
<li>通过使用强制切换，可以在备节点延迟不满足切换条件时，强制发起主从切换
<li>只有主实例可以执行该操作
     */
    SwitchDBInstancePrimary(req: SwitchDBInstancePrimaryRequest, cb?: (error: string, rep: SwitchDBInstancePrimaryResponse) => void): Promise<SwitchDBInstancePrimaryResponse>;
    /**
     * 本接口（ModifyReadOnlyDBInstanceWeight）用于修改只读实例权重
     */
    ModifyReadOnlyDBInstanceWeight(req: ModifyReadOnlyDBInstanceWeightRequest, cb?: (error: string, rep: ModifyReadOnlyDBInstanceWeightResponse) => void): Promise<ModifyReadOnlyDBInstanceWeightResponse>;
    /**
     * 本接口 (DescribeBackupPlans) 用于实例所有的备份计划查询
     */
    DescribeBackupPlans(req: DescribeBackupPlansRequest, cb?: (error: string, rep: DescribeBackupPlansResponse) => void): Promise<DescribeBackupPlansResponse>;
    /**
     * 当升级完成后，对处于等待切换状态下的实例，强制实例立即切换。
     */
    ModifySwitchTimePeriod(req: ModifySwitchTimePeriodRequest, cb?: (error: string, rep: ModifySwitchTimePeriodResponse) => void): Promise<ModifySwitchTimePeriodResponse>;
    /**
     * 本接口（OpenDBExtranetAccess）用于开通实例公网地址。
     */
    OpenDBExtranetAccess(req: OpenDBExtranetAccessRequest, cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void): Promise<OpenDBExtranetAccessResponse>;
    /**
     * 修改数据库所有者
     */
    ModifyDatabaseOwner(req: ModifyDatabaseOwnerRequest, cb?: (error: string, rep: ModifyDatabaseOwnerResponse) => void): Promise<ModifyDatabaseOwnerResponse>;
    /**
     * 此接口用于删除数据库账号，需要同时输入Oid与UserName，避免误删。
     */
    DeleteAccount(req: DeleteAccountRequest, cb?: (error: string, rep: DeleteAccountResponse) => void): Promise<DeleteAccountResponse>;
    /**
     * 本接口 (ModifyBackupPlan) 用于实例备份计划的修改，默认是在每天的凌晨开始全量备份，备份保留时长是7天。可以根据此接口指定时间进行实例的备份。
     */
    ModifyBackupPlan(req: ModifyBackupPlanRequest, cb?: (error: string, rep: ModifyBackupPlanResponse) => void): Promise<ModifyBackupPlanResponse>;
    /**
     * 本接口用于修改实例SSL配置，功能包含开启、关闭、修改SSL证书保护的连接地址。
     */
    ModifyDBInstanceSSLConfig(req: ModifyDBInstanceSSLConfigRequest, cb?: (error: string, rep: ModifyDBInstanceSSLConfigResponse) => void): Promise<ModifyDBInstanceSSLConfigResponse>;
    /**
     * 本接口（InitDBInstances）用于初始化云数据库PostgreSQL实例。本接口已废弃，推荐使用接口[CreateInstances](https://cloud.tencent.com/document/api/409/56107)替代。
     */
    InitDBInstances(req: InitDBInstancesRequest, cb?: (error: string, rep: InitDBInstancesResponse) => void): Promise<InitDBInstancesResponse>;
    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     */
    DescribeZones(req?: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 本接口用于查询实例SSL状态
     */
    DescribeDBInstanceSSLConfig(req: DescribeDBInstanceSSLConfigRequest, cb?: (error: string, rep: DescribeDBInstanceSSLConfigResponse) => void): Promise<DescribeDBInstanceSSLConfigResponse>;
    /**
     * 删除备份策略
     */
    DeleteBackupPlan(req: DeleteBackupPlanRequest, cb?: (error: string, rep: DeleteBackupPlanResponse) => void): Promise<DeleteBackupPlanResponse>;
    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。只支持按量计费实例。
     */
    InquiryPriceUpgradeDBInstance(req: InquiryPriceUpgradeDBInstanceRequest, cb?: (error: string, rep: InquiryPriceUpgradeDBInstanceResponse) => void): Promise<InquiryPriceUpgradeDBInstanceResponse>;
    /**
     * 本接口（CreateReadOnlyGroup）用于创建只读组
     */
    CreateReadOnlyGroup(req: CreateReadOnlyGroupRequest, cb?: (error: string, rep: CreateReadOnlyGroupResponse) => void): Promise<CreateReadOnlyGroupResponse>;
    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     */
    InquiryPriceRenewDBInstance(req: InquiryPriceRenewDBInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewDBInstanceResponse) => void): Promise<InquiryPriceRenewDBInstanceResponse>;
    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于修改实例安全组。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 本接口（DeleteBaseBackup）用于删除实例指定数据备份。
     */
    DeleteBaseBackup(req: DeleteBaseBackupRequest, cb?: (error: string, rep: DeleteBaseBackupResponse) => void): Promise<DeleteBaseBackupResponse>;
    /**
     * 此接口用于锁定数据库账号，锁定后账号当前连接会断开，并且无法建立新连接。
     */
    LockAccount(req: LockAccountRequest, cb?: (error: string, rep: LockAccountResponse) => void): Promise<LockAccountResponse>;
    /**
     * 本接口（DescribeReadOnlyGroups）用于查询只读组列表
     */
    DescribeReadOnlyGroups(req: DescribeReadOnlyGroupsRequest, cb?: (error: string, rep: DescribeReadOnlyGroupsResponse) => void): Promise<DescribeReadOnlyGroupsResponse>;
    /**
     * 本接口（UpgradeDBInstance）用于升级实例配置。本接口已废弃，推荐使用接口[ModifyDBInstanceSpec](https://cloud.tencent.com/document/api/409/63689)替代。
     */
    UpgradeDBInstance(req: UpgradeDBInstanceRequest, cb?: (error: string, rep: UpgradeDBInstanceResponse) => void): Promise<UpgradeDBInstanceResponse>;
    /**
     * 本接口 (CreateInstances) 用于创建一个或者多个PostgreSQL实例，通过此接口创建的实例无需进行初始化，可直接使用。
<li>实例创建成功后将自动开机启动，实例状态变为“运行中”。</li>
<li>预付费实例的购买会预先扣除本次实例购买所需金额，按小时后付费实例购买会预先冻结本次实例购买一小时内所需金额，在调用本接口前请确保账户余额充足。</li>
     */
    CreateInstances(req: CreateInstancesRequest, cb?: (error: string, rep: CreateInstancesResponse) => void): Promise<CreateInstancesResponse>;
}

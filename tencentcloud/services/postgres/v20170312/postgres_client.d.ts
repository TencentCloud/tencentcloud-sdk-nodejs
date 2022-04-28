import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDBInstancesRequest, SetAutoRenewFlagRequest, DescribeDatabasesRequest, DescribeDBXlogsRequest, CreateReadOnlyGroupNetworkAccessRequest, DescribeAccountsRequest, DeleteReadOnlyGroupResponse, CreateInstancesRequest, CreateDBInstanceNetworkAccessResponse, DescribeAvailableRecoveryTimeResponse, ModifyDBInstanceReadOnlyGroupResponse, CloneDBInstanceRequest, DescribeCloneDBInstanceSpecRequest, OpenServerlessDBExtranetAccessRequest, RenewInstanceResponse, DeleteServerlessDBInstanceResponse, ModifyReadOnlyGroupConfigRequest, AddDBInstanceToReadOnlyGroupRequest, DescribeProductConfigRequest, InitDBInstancesResponse, RenewInstanceRequest, RebalanceReadOnlyGroupRequest, DescribeRegionsResponse, ModifyDBInstanceDeploymentRequest, DeleteReadOnlyGroupNetworkAccessRequest, InquiryPriceCreateDBInstancesRequest, DescribeDBInstanceAttributeRequest, CloseServerlessDBExtranetAccessRequest, CloneDBInstanceResponse, ModifyDBInstanceReadOnlyGroupRequest, AddDBInstanceToReadOnlyGroupResponse, CreateReadOnlyDBInstanceResponse, DescribeAvailableRecoveryTimeRequest, DescribeDBInstanceParametersRequest, DescribeOrdersResponse, OpenServerlessDBExtranetAccessResponse, InquiryPriceCreateDBInstancesResponse, CreateDBInstanceNetworkAccessRequest, ModifySwitchTimePeriodResponse, DisIsolateDBInstancesRequest, DescribeBackupPlansResponse, DescribeDBInstancesRequest, ModifyDBInstanceSpecRequest, ModifyAccountRemarkResponse, UpgradeDBInstanceRequest, DescribeZonesRequest, DescribeReadOnlyGroupsResponse, SetAutoRenewFlagResponse, ResetAccountPasswordResponse, ModifyDBInstancesProjectResponse, DeleteReadOnlyGroupNetworkAccessResponse, DescribeDBErrlogsRequest, DestroyDBInstanceRequest, ModifyDBInstanceDeploymentResponse, DescribeParamsEventRequest, CreateInstancesResponse, DescribeServerlessDBInstancesRequest, DescribeDBBackupsResponse, DescribeRegionsRequest, DescribeSlowQueryListResponse, CreateReadOnlyGroupRequest, CreateReadOnlyGroupNetworkAccessResponse, DescribeParamsEventResponse, CloseServerlessDBExtranetAccessResponse, RestartDBInstanceRequest, IsolateDBInstancesResponse, OpenDBExtranetAccessResponse, InquiryPriceUpgradeDBInstanceRequest, RebalanceReadOnlyGroupResponse, ModifyDBInstanceNameRequest, InquiryPriceRenewDBInstanceResponse, DescribeSlowQueryAnalysisRequest, DescribeServerlessDBInstancesResponse, IsolateDBInstancesRequest, InitDBInstancesRequest, DeleteDBInstanceNetworkAccessRequest, DescribeProductConfigResponse, DeleteReadOnlyGroupRequest, DescribeDBBackupsRequest, DisIsolateDBInstancesResponse, ModifyDBInstanceParametersResponse, OpenDBExtranetAccessRequest, RemoveDBInstanceFromReadOnlyGroupRequest, ModifyDBInstanceNameResponse, CloseDBExtranetAccessResponse, CreateReadOnlyDBInstanceRequest, DescribeCloneDBInstanceSpecResponse, DescribeZonesResponse, CreateServerlessDBInstanceResponse, DescribeDatabasesResponse, DescribeOrdersRequest, ModifyAccountRemarkRequest, CloseDBExtranetAccessRequest, DescribeEncryptionKeysRequest, ModifyBackupPlanResponse, CreateServerlessDBInstanceRequest, InquiryPriceRenewDBInstanceRequest, CreateReadOnlyGroupResponse, DeleteDBInstanceNetworkAccessResponse, DeleteServerlessDBInstanceRequest, ModifyReadOnlyGroupConfigResponse, DescribeDBErrlogsResponse, ModifyBackupPlanRequest, InquiryPriceUpgradeDBInstanceResponse, ModifySwitchTimePeriodRequest, DescribeSlowQueryListRequest, DescribeDBInstanceParametersResponse, RestartDBInstanceResponse, DescribeDBInstancesResponse, RemoveDBInstanceFromReadOnlyGroupResponse, DescribeBackupPlansRequest, ResetAccountPasswordRequest, DescribeSlowQueryAnalysisResponse, ModifyDBInstanceParametersRequest, DescribeReadOnlyGroupsRequest, DescribeAccountsResponse, UpgradeDBInstanceResponse, ModifyDBInstancesProjectRequest, DescribeDBSlowlogsRequest, DestroyDBInstanceResponse, DescribeDBInstanceAttributeResponse, ModifyDBInstanceSpecResponse, DescribeDBXlogsResponse, DescribeEncryptionKeysResponse, DescribeDBSlowlogsResponse, CreateDBInstancesResponse } from "./postgres_models";
/**
 * postgres client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 可对RO组进行网络的添加操作。
     */
    CreateReadOnlyGroupNetworkAccess(req: CreateReadOnlyGroupNetworkAccessRequest, cb?: (error: string, rep: CreateReadOnlyGroupNetworkAccessResponse) => void): Promise<CreateReadOnlyGroupNetworkAccessResponse>;
    /**
     * 获取实例的密钥信息列表。
     */
    DescribeEncryptionKeys(req: DescribeEncryptionKeysRequest, cb?: (error: string, rep: DescribeEncryptionKeysResponse) => void): Promise<DescribeEncryptionKeysResponse>;
    /**
     * 本接口（ModifyDBInstancesProject）用于将实例转至其他项目。
     */
    ModifyDBInstancesProject(req: ModifyDBInstancesProjectRequest, cb?: (error: string, rep: ModifyDBInstancesProjectResponse) => void): Promise<ModifyDBInstancesProjectResponse>;
    /**
     * 本接口（DescribeOrders）用于获取订单信息。
     */
    DescribeOrders(req: DescribeOrdersRequest, cb?: (error: string, rep: DescribeOrdersResponse) => void): Promise<DescribeOrdersResponse>;
    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     */
    DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse>;
    /**
     * 可对RO组进行网络的删除操作。
     */
    DeleteReadOnlyGroupNetworkAccess(req: DeleteReadOnlyGroupNetworkAccessRequest, cb?: (error: string, rep: DeleteReadOnlyGroupNetworkAccessResponse) => void): Promise<DeleteReadOnlyGroupNetworkAccessResponse>;
    /**
     * 本接口（UpgradeDBInstance）用于升级实例配置。
     */
    UpgradeDBInstance(req: UpgradeDBInstanceRequest, cb?: (error: string, rep: UpgradeDBInstanceResponse) => void): Promise<UpgradeDBInstanceResponse>;
    /**
     * 批量修改参数
     */
    ModifyDBInstanceParameters(req: ModifyDBInstanceParametersRequest, cb?: (error: string, rep: ModifyDBInstanceParametersResponse) => void): Promise<ModifyDBInstanceParametersResponse>;
    /**
     * 本接口 (DestroyDBInstance) 用于彻底下线指定DBInstanceId对应的实例，下线后实例数据将彻底删除，无法找回，只能下线隔离中的实例。
     */
    DestroyDBInstance(req: DestroyDBInstanceRequest, cb?: (error: string, rep: DestroyDBInstanceResponse) => void): Promise<DestroyDBInstanceResponse>;
    /**
     * 本接口 (DescribeBackupPlans) 用于实例所有的备份计划查询
     */
    DescribeBackupPlans(req: DescribeBackupPlansRequest, cb?: (error: string, rep: DescribeBackupPlansResponse) => void): Promise<DescribeBackupPlansResponse>;
    /**
     * 本接口（RenewInstance）用于续费实例。
     */
    RenewInstance(req: RenewInstanceRequest, cb?: (error: string, rep: RenewInstanceResponse) => void): Promise<RenewInstanceResponse>;
    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表。
     */
    DescribeDBBackups(req: DescribeDBBackupsRequest, cb?: (error: string, rep: DescribeDBBackupsResponse) => void): Promise<DescribeDBBackupsResponse>;
    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 本接口（DescribeDBErrlogs）用于获取错误日志。
     */
    DescribeDBErrlogs(req: DescribeDBErrlogsRequest, cb?: (error: string, rep: DescribeDBErrlogsResponse) => void): Promise<DescribeDBErrlogsResponse>;
    /**
     * 此接口（DescribeSlowQueryAnalysis）用于统计指定时间范围内的所有慢查询，根据SQL语句抽象参数后，进行聚合分析，并返回同类SQL列表。
     */
    DescribeSlowQueryAnalysis(req: DescribeSlowQueryAnalysisRequest, cb?: (error: string, rep: DescribeSlowQueryAnalysisResponse) => void): Promise<DescribeSlowQueryAnalysisResponse>;
    /**
     * 当升级完成后，对处于等待切换状态下的实例，强制实例立即切换。
     */
    ModifySwitchTimePeriod(req: ModifySwitchTimePeriodRequest, cb?: (error: string, rep: ModifySwitchTimePeriodResponse) => void): Promise<ModifySwitchTimePeriodResponse>;
    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
     */
    InquiryPriceCreateDBInstances(req: InquiryPriceCreateDBInstancesRequest, cb?: (error: string, rep: InquiryPriceCreateDBInstancesResponse) => void): Promise<InquiryPriceCreateDBInstancesResponse>;
    /**
     * 本接口（OpenDBExtranetAccess）用于开通外网。
     */
    OpenDBExtranetAccess(req: OpenDBExtranetAccessRequest, cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void): Promise<OpenDBExtranetAccessResponse>;
    /**
     * 可对实例进行网络的删除操作。
     */
    DeleteDBInstanceNetworkAccess(req: DeleteDBInstanceNetworkAccessRequest, cb?: (error: string, rep: DeleteDBInstanceNetworkAccessResponse) => void): Promise<DeleteDBInstanceNetworkAccessResponse>;
    /**
     * 本接口 (ModifyBackupPlan) 用于实例备份计划的修改，默认是在每天的凌晨开始全量备份，备份保留时长是7天。可以根据此接口指定时间进行实例的备份。
     */
    ModifyBackupPlan(req: ModifyBackupPlanRequest, cb?: (error: string, rep: ModifyBackupPlanResponse) => void): Promise<ModifyBackupPlanResponse>;
    /**
     * 关闭serverlessDB实例外网
     */
    CloseServerlessDBExtranetAccess(req: CloseServerlessDBExtranetAccessRequest, cb?: (error: string, rep: CloseServerlessDBExtranetAccessResponse) => void): Promise<CloseServerlessDBExtranetAccessResponse>;
    /**
     * 本接口(DeleteReadOnlyGroup)用于删除指定的只读组
     */
    DeleteReadOnlyGroup(req: DeleteReadOnlyGroupRequest, cb?: (error: string, rep: DeleteReadOnlyGroupResponse) => void): Promise<DeleteReadOnlyGroupResponse>;
    /**
     * 本接口（ModifyAccountRemark）用于修改帐号备注。
     */
    ModifyAccountRemark(req: ModifyAccountRemarkRequest, cb?: (error: string, rep: ModifyAccountRemarkResponse) => void): Promise<ModifyAccountRemarkResponse>;
    /**
     * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。
     */
    DescribeDBXlogs(req: DescribeDBXlogsRequest, cb?: (error: string, rep: DescribeDBXlogsResponse) => void): Promise<DescribeDBXlogsResponse>;
    /**
     * 本接口（SetAutoRenewFlag）用于设置自动续费。
     */
    SetAutoRenewFlag(req: SetAutoRenewFlagRequest, cb?: (error: string, rep: SetAutoRenewFlagResponse) => void): Promise<SetAutoRenewFlagResponse>;
    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     */
    DescribeDBInstanceAttribute(req: DescribeDBInstanceAttributeRequest, cb?: (error: string, rep: DescribeDBInstanceAttributeResponse) => void): Promise<DescribeDBInstanceAttributeResponse>;
    /**
     * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
     */
    ModifyDBInstanceName(req: ModifyDBInstanceNameRequest, cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void): Promise<ModifyDBInstanceNameResponse>;
    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
     */
    InquiryPriceUpgradeDBInstance(req: InquiryPriceUpgradeDBInstanceRequest, cb?: (error: string, rep: InquiryPriceUpgradeDBInstanceResponse) => void): Promise<InquiryPriceUpgradeDBInstanceResponse>;
    /**
     * 本接口（ModifyDBInstanceDeployment）用于修改节点可用区部署方式，仅支持主实例。
     */
    ModifyDBInstanceDeployment(req: ModifyDBInstanceDeploymentRequest, cb?: (error: string, rep: ModifyDBInstanceDeploymentResponse) => void): Promise<ModifyDBInstanceDeploymentResponse>;
    /**
     * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例,仅发货实例不会进行初始化。
     */
    CreateDBInstances(req: CreateDBInstancesRequest, cb?: (error: string, rep: CreateDBInstancesResponse) => void): Promise<CreateDBInstancesResponse>;
    /**
     * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
     */
    CreateServerlessDBInstance(req: CreateServerlessDBInstanceRequest, cb?: (error: string, rep: CreateServerlessDBInstanceResponse) => void): Promise<CreateServerlessDBInstanceResponse>;
    /**
     * 获取实例可修改参数列表
     */
    DescribeDBInstanceParameters(req: DescribeDBInstanceParametersRequest, cb?: (error: string, rep: DescribeDBInstanceParametersResponse) => void): Promise<DescribeDBInstanceParametersResponse>;
    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     */
    DescribeZones(req?: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 本接口（RestartDBInstance）用于重启实例。
     */
    RestartDBInstance(req: RestartDBInstanceRequest, cb?: (error: string, rep: RestartDBInstanceResponse) => void): Promise<RestartDBInstanceResponse>;
    /**
     * 本接口（IsolateDBInstances）用于隔离实例
     */
    IsolateDBInstances(req: IsolateDBInstancesRequest, cb?: (error: string, rep: IsolateDBInstancesResponse) => void): Promise<IsolateDBInstancesResponse>;
    /**
     * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
     */
    DeleteServerlessDBInstance(req: DeleteServerlessDBInstanceRequest, cb?: (error: string, rep: DeleteServerlessDBInstanceResponse) => void): Promise<DeleteServerlessDBInstanceResponse>;
    /**
     * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
     */
    InitDBInstances(req: InitDBInstancesRequest, cb?: (error: string, rep: InitDBInstancesResponse) => void): Promise<InitDBInstancesResponse>;
    /**
     * 可对实例进行网络的添加操作。
     */
    CreateDBInstanceNetworkAccess(req: CreateDBInstanceNetworkAccessRequest, cb?: (error: string, rep: CreateDBInstanceNetworkAccessResponse) => void): Promise<CreateDBInstanceNetworkAccessResponse>;
    /**
     * 本接口（ModifyDBInstanceSpec）用于调整实例规格，包括内存、磁盘。
     */
    ModifyDBInstanceSpec(req: ModifyDBInstanceSpecRequest, cb?: (error: string, rep: ModifyDBInstanceSpecResponse) => void): Promise<ModifyDBInstanceSpecResponse>;
    /**
     * 本接口（DescribeAvailableRecoveryTime）用于查询实例可恢复的时间范围。
     */
    DescribeAvailableRecoveryTime(req: DescribeAvailableRecoveryTimeRequest, cb?: (error: string, rep: DescribeAvailableRecoveryTimeResponse) => void): Promise<DescribeAvailableRecoveryTimeResponse>;
    /**
     * 本接口（CreateReadOnlyGroup）用于创建只读组
     */
    CreateReadOnlyGroup(req: CreateReadOnlyGroupRequest, cb?: (error: string, rep: CreateReadOnlyGroupResponse) => void): Promise<CreateReadOnlyGroupResponse>;
    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 此接口（DescribeSlowQueryList）用于查询指定时间范围内的所有慢查询。
     */
    DescribeSlowQueryList(req: DescribeSlowQueryListRequest, cb?: (error: string, rep: DescribeSlowQueryListResponse) => void): Promise<DescribeSlowQueryListResponse>;
    /**
     * 本接口（ModifyDBInstanceReadOnlyGroup）用于修改实例所属的只读组
     */
    ModifyDBInstanceReadOnlyGroup(req: ModifyDBInstanceReadOnlyGroupRequest, cb?: (error: string, rep: ModifyDBInstanceReadOnlyGroupResponse) => void): Promise<ModifyDBInstanceReadOnlyGroupResponse>;
    /**
     * 本接口（CloseDBExtranetAccess）用于关闭实例外网链接。
     */
    CloseDBExtranetAccess(req: CloseDBExtranetAccessRequest, cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void): Promise<CloseDBExtranetAccessResponse>;
    /**
     * 用于克隆实例，支持指定备份集、指定时间点进行克隆。
     */
    CloneDBInstance(req: CloneDBInstanceRequest, cb?: (error: string, rep: CloneDBInstanceResponse) => void): Promise<CloneDBInstanceResponse>;
    /**
     * 本接口（AddDBInstanceToReadOnlyGroup）用于添加只读实例到只读组
     */
    AddDBInstanceToReadOnlyGroup(req: AddDBInstanceToReadOnlyGroupRequest, cb?: (error: string, rep: AddDBInstanceToReadOnlyGroupResponse) => void): Promise<AddDBInstanceToReadOnlyGroupResponse>;
    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     */
    InquiryPriceRenewDBInstance(req: InquiryPriceRenewDBInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewDBInstanceResponse) => void): Promise<InquiryPriceRenewDBInstanceResponse>;
    /**
     * 本接口（DescribeAccounts）用于获取实例用户列表。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 本接口（DisIsolateDBInstances）用于解隔离实例
     */
    DisIsolateDBInstances(req: DisIsolateDBInstancesRequest, cb?: (error: string, rep: DisIsolateDBInstancesResponse) => void): Promise<DisIsolateDBInstancesResponse>;
    /**
     * 用于查询一个或多个serverlessDB实例的详细信息
     */
    DescribeServerlessDBInstances(req: DescribeServerlessDBInstancesRequest, cb?: (error: string, rep: DescribeServerlessDBInstancesResponse) => void): Promise<DescribeServerlessDBInstancesResponse>;
    /**
     * 本接口(RebalanceReadOnlyGroup)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
     */
    RebalanceReadOnlyGroup(req: RebalanceReadOnlyGroupRequest, cb?: (error: string, rep: RebalanceReadOnlyGroupResponse) => void): Promise<RebalanceReadOnlyGroupResponse>;
    /**
     * 本接口（DescribeCloneDBInstanceSpec）用于查询克隆实例可选择的最小规格，包括SpecCode和磁盘。
     */
    DescribeCloneDBInstanceSpec(req: DescribeCloneDBInstanceSpecRequest, cb?: (error: string, rep: DescribeCloneDBInstanceSpecResponse) => void): Promise<DescribeCloneDBInstanceSpecResponse>;
    /**
     * 接口（DescribeDatabases）用来拉取数据库列表
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 本接口(CreateReadOnlyDBInstance)用于创建只读实例
     */
    CreateReadOnlyDBInstance(req: CreateReadOnlyDBInstanceRequest, cb?: (error: string, rep: CreateReadOnlyDBInstanceResponse) => void): Promise<CreateReadOnlyDBInstanceResponse>;
    /**
     * 本接口(DescribeReadOnlyGroups)用于查询用户输入指定实例的只读组
     */
    DescribeReadOnlyGroups(req: DescribeReadOnlyGroupsRequest, cb?: (error: string, rep: DescribeReadOnlyGroupsResponse) => void): Promise<DescribeReadOnlyGroupsResponse>;
    /**
     * 本接口(ModifyReadOnlyGroupConfig)用于更新只读组配置信息
     */
    ModifyReadOnlyGroupConfig(req: ModifyReadOnlyGroupConfigRequest, cb?: (error: string, rep: ModifyReadOnlyGroupConfigResponse) => void): Promise<ModifyReadOnlyGroupConfigResponse>;
    /**
     * 本接口 (CreateInstances) 用于创建一个或者多个PostgreSQL实例，通过此接口创建的实例无需进行初始化，可直接使用。
     */
    CreateInstances(req: CreateInstancesRequest, cb?: (error: string, rep: CreateInstancesResponse) => void): Promise<CreateInstancesResponse>;
    /**
     * 本接口（RemoveDBInstanceFromReadOnlyGroup）用户将只读实例从只读组中移除
     */
    RemoveDBInstanceFromReadOnlyGroup(req: RemoveDBInstanceFromReadOnlyGroupRequest, cb?: (error: string, rep: RemoveDBInstanceFromReadOnlyGroupResponse) => void): Promise<RemoveDBInstanceFromReadOnlyGroupResponse>;
    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     */
    DescribeProductConfig(req: DescribeProductConfigRequest, cb?: (error: string, rep: DescribeProductConfigResponse) => void): Promise<DescribeProductConfigResponse>;
    /**
     * 获取参数修改事件详情
     */
    DescribeParamsEvent(req: DescribeParamsEventRequest, cb?: (error: string, rep: DescribeParamsEventResponse) => void): Promise<DescribeParamsEventResponse>;
    /**
     * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。已于2021.09.01日正式废弃，后续此接口将不再返回任何数据，新接口为DescribeSlowQueryList，详细请查看：https://cloud.tencent.com/document/product/409/60540
     */
    DescribeDBSlowlogs(req: DescribeDBSlowlogsRequest, cb?: (error: string, rep: DescribeDBSlowlogsResponse) => void): Promise<DescribeDBSlowlogsResponse>;
    /**
     * 开通serverlessDB实例外网
     */
    OpenServerlessDBExtranetAccess(req: OpenServerlessDBExtranetAccessRequest, cb?: (error: string, rep: OpenServerlessDBExtranetAccessResponse) => void): Promise<OpenServerlessDBExtranetAccessResponse>;
}

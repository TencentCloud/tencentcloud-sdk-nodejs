import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { IsolateHourDBInstanceResponse, CreateDBInstanceRequest, DescribeDBTmpInstancesRequest, DescribeAccountPrivilegesResponse, DescribeDatabasesRequest, DescribeDBParametersRequest, DescribeAccountsRequest, DescribeRenewalPriceResponse, ModifyBackupConfigsRequest, ModifyInstanceNetworkResponse, CreateDedicatedClusterDBInstanceResponse, ModifyInstanceVportResponse, DestroyHourDBInstanceRequest, ModifyInstanceVipResponse, AssociateSecurityGroupsRequest, DescribeUpgradePriceRequest, FlushBinlogResponse, UpgradeHourDBInstanceResponse, DescribeDBSecurityGroupsResponse, CancelDcnJobResponse, DescribeFileDownloadUrlRequest, DescribeDBInstanceSpecsResponse, DestroyHourDBInstanceResponse, DescribeDBSyncModeResponse, DescribeProjectSecurityGroupsRequest, DescribeDBSlowLogsRequest, CreateAccountRequest, InitDBInstancesResponse, DescribeDBParametersResponse, IsolateHourDBInstanceRequest, IsolateDBInstanceResponse, ModifyLogFileRetentionPeriodRequest, DescribeDatabaseTableRequest, ModifyDBInstanceNameResponse, DescribeLogFileRetentionPeriodRequest, DescribeFlowResponse, CloneAccountResponse, IsolateDedicatedDBInstanceRequest, ModifyAccountDescriptionResponse, ModifyDBInstancesProjectResponse, ModifyBackupTimeRequest, DescribeDBLogFilesRequest, UpgradeDedicatedDBInstanceResponse, DescribeOrdersResponse, ModifySyncTaskAttributeResponse, ResetAccountPasswordRequest, CopyAccountPrivilegesResponse, CloneAccountRequest, DescribePriceRequest, DescribeDBInstancesRequest, DescribeDBSecurityGroupsRequest, SwitchDBInstanceHAResponse, DescribeSaleInfoRequest, DescribeBackupFilesResponse, RenewDBInstanceRequest, CreateTmpInstancesRequest, RestartDBInstancesResponse, DescribeProjectSecurityGroupsResponse, ResetAccountPasswordResponse, DescribeDBInstanceDetailResponse, DescribeDatabaseObjectsRequest, CreateDBInstanceResponse, ModifyRealServerAccessStrategyRequest, DescribeBackupTimeRequest, DescribeSaleInfoResponse, TerminateDedicatedDBInstanceResponse, ModifyDBEncryptAttributesResponse, DescribeDBEncryptAttributesResponse, UpgradeDedicatedDBInstanceRequest, DestroyDBInstanceRequest, DescribeDBInstanceDetailRequest, DescribeDBEncryptAttributesRequest, GrantAccountPrivilegesRequest, DescribeBinlogTimeRequest, CreateDedicatedClusterDBInstanceRequest, SwitchDBInstanceHARequest, ModifyDBParametersRequest, DescribeBackupConfigsRequest, ModifyDBInstanceSecurityGroupsRequest, DescribeDcnDetailRequest, DescribeFileDownloadUrlResponse, ModifyDBParametersResponse, CopyAccountPrivilegesRequest, DescribeBackupFilesRequest, OpenDBExtranetAccessResponse, KillSessionRequest, TerminateDedicatedDBInstanceRequest, DescribeDatabaseObjectsResponse, ModifyDBInstanceNameRequest, DeleteAccountRequest, DescribeBinlogTimeResponse, DescribeBackupConfigsResponse, UpgradeHourDBInstanceRequest, CreateTmpInstancesResponse, UpgradeDBInstanceRequest, ModifySyncTaskAttributeRequest, DescribeUpgradePriceResponse, AssociateSecurityGroupsResponse, DescribePriceResponse, InitDBInstancesRequest, ModifyAccountPrivilegesResponse, ModifyBackupTimeResponse, GrantAccountPrivilegesResponse, CancelDcnJobRequest, ModifyInstanceVipRequest, OpenDBExtranetAccessRequest, ModifyDBInstanceSecurityGroupsResponse, DescribeDBSyncModeRequest, CloseDBExtranetAccessResponse, ModifyAccountDescriptionRequest, KillSessionResponse, DescribeBackupTimeResponse, ActivateHourDBInstanceRequest, RenewDBInstanceResponse, DescribeDatabasesResponse, DescribeOrdersRequest, DescribeDBLogFilesResponse, CloseDBExtranetAccessRequest, DescribeDcnDetailResponse, IsolateDBInstanceRequest, DescribeFlowRequest, ModifyAccountPrivilegesRequest, ModifyBackupConfigsResponse, DescribeDBTmpInstancesResponse, ModifyDBSyncModeRequest, ActivateHourDBInstanceResponse, DescribeInstanceNodeInfoRequest, CreateHourDBInstanceResponse, ModifyDBEncryptAttributesRequest, CreateAccountResponse, IsolateDedicatedDBInstanceResponse, DescribeLogFileRetentionPeriodResponse, ModifyInstanceNetworkRequest, DescribeDBInstancesResponse, DescribeRenewalPriceRequest, ModifyRealServerAccessStrategyResponse, RestartDBInstancesRequest, DisassociateSecurityGroupsRequest, CreateHourDBInstanceRequest, DescribeDatabaseTableResponse, DescribeAccountPrivilegesRequest, DescribeAccountsResponse, DescribeDBSlowLogsResponse, UpgradeDBInstanceResponse, DescribeDBInstanceSpecsRequest, ModifyDBInstancesProjectRequest, FlushBinlogRequest, DestroyDBInstanceResponse, ModifyDBSyncModeResponse, DescribeInstanceNodeInfoResponse, ModifyLogFileRetentionPeriodResponse, DisassociateSecurityGroupsResponse, ModifyInstanceVportRequest, DeleteAccountResponse } from "./mariadb_models";
/**
 * mariadb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DescribeAccountPrivileges）用于查询云数据库账号权限。
注意：注意：相同用户名，不同Host是不同的账号。
     */
    DescribeAccountPrivileges(req: DescribeAccountPrivilegesRequest, cb?: (error: string, rep: DescribeAccountPrivilegesResponse) => void): Promise<DescribeAccountPrivilegesResponse>;
    /**
     * 本接口（DescribeRenewalPrice）用于在续费云数据库实例时，查询续费的价格。
     */
    DescribeRenewalPrice(req: DescribeRenewalPriceRequest, cb?: (error: string, rep: DescribeRenewalPriceResponse) => void): Promise<DescribeRenewalPriceResponse>;
    /**
     * 创建MariaDB按量计费实例
     */
    CreateHourDBInstance(req: CreateHourDBInstanceRequest, cb?: (error: string, rep: CreateHourDBInstanceResponse) => void): Promise<CreateHourDBInstanceResponse>;
    /**
     * 本接口（DescribeInstanceNodeInfo）用于获取数据库实例主备节点信息
     */
    DescribeInstanceNodeInfo(req: DescribeInstanceNodeInfoRequest, cb?: (error: string, rep: DescribeInstanceNodeInfoResponse) => void): Promise<DescribeInstanceNodeInfoResponse>;
    /**
     * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的数据库中的对象列表，包含表、存储过程、视图和函数。
     */
    DescribeDatabaseObjects(req: DescribeDatabaseObjectsRequest, cb?: (error: string, rep: DescribeDatabaseObjectsResponse) => void): Promise<DescribeDatabaseObjectsResponse>;
    /**
     * 本接口（ModifyBackupTime）用于设置云数据库实例的备份时间。后台系统将根据此配置定期进行实例备份。
     */
    ModifyBackupTime(req: ModifyBackupTimeRequest, cb?: (error: string, rep: ModifyBackupTimeResponse) => void): Promise<ModifyBackupTimeResponse>;
    /**
     * 本接口（ModifyInstanceVport）用于修改实例VPORT
     */
    ModifyInstanceVport(req: ModifyInstanceVportRequest, cb?: (error: string, rep: ModifyInstanceVportResponse) => void): Promise<ModifyInstanceVportResponse>;
    /**
     * 本接口(DescribeSaleInfo)用于查询云数据库可售卖的地域和可用区信息。
     */
    DescribeSaleInfo(req?: DescribeSaleInfoRequest, cb?: (error: string, rep: DescribeSaleInfoResponse) => void): Promise<DescribeSaleInfoResponse>;
    /**
     * 本接口（ModifyAccountDescription）用于修改云数据库账号备注。
注意：相同用户名，不同Host是不同的账号。
     */
    ModifyAccountDescription(req: ModifyAccountDescriptionRequest, cb?: (error: string, rep: ModifyAccountDescriptionResponse) => void): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 本接口(DestroyDBInstance)用于销毁已隔离的包年包月实例。
     */
    DestroyDBInstance(req: DestroyDBInstanceRequest, cb?: (error: string, rep: DestroyDBInstanceResponse) => void): Promise<DestroyDBInstanceResponse>;
    /**
     * 本接口（SwitchDBInstanceHA）用于发起实例主备切换。
     */
    SwitchDBInstanceHA(req: SwitchDBInstanceHARequest, cb?: (error: string, rep: SwitchDBInstanceHAResponse) => void): Promise<SwitchDBInstanceHAResponse>;
    /**
     * 本接口(DescribeFileDownloadUrl)用于获取数据库指定备份或日志文件的下载连接。
     */
    DescribeFileDownloadUrl(req: DescribeFileDownloadUrlRequest, cb?: (error: string, rep: DescribeFileDownloadUrlResponse) => void): Promise<DescribeFileDownloadUrlResponse>;
    /**
     * 本接口（DescribeBackupTime）用于获取云数据库的备份时间。后台系统将根据此配置定期进行实例备份。
     */
    DescribeBackupTime(req: DescribeBackupTimeRequest, cb?: (error: string, rep: DescribeBackupTimeResponse) => void): Promise<DescribeBackupTimeResponse>;
    /**
     * 解隔离MariaDB按量计费实例
     */
    ActivateHourDBInstance(req: ActivateHourDBInstanceRequest, cb?: (error: string, rep: ActivateHourDBInstanceResponse) => void): Promise<ActivateHourDBInstanceResponse>;
    /**
     * 本接口（ResetAccountPassword）用于重置云数据库账号的密码。
注意：相同用户名，不同Host是不同的账号。
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 本接口(ModifyDBParameters)用于修改数据库参数。
     */
    ModifyDBParameters(req: ModifyDBParametersRequest, cb?: (error: string, rep: ModifyDBParametersResponse) => void): Promise<ModifyDBParametersResponse>;
    /**
     * 本接口（KillSession）用于杀死指定会话。
     */
    KillSession(req: KillSessionRequest, cb?: (error: string, rep: KillSessionResponse) => void): Promise<KillSessionResponse>;
    /**
     * 本接口(DescribeDBSlowLogs)用于查询慢查询日志列表。
     */
    DescribeDBSlowLogs(req: DescribeDBSlowLogsRequest, cb?: (error: string, rep: DescribeDBSlowLogsResponse) => void): Promise<DescribeDBSlowLogsResponse>;
    /**
     * 本接口（DescribeFlow）用于查询流程状态。
     */
    DescribeFlow(req: DescribeFlowRequest, cb?: (error: string, rep: DescribeFlowResponse) => void): Promise<DescribeFlowResponse>;
    /**
     * 创建Mariadb独享集群实例
     */
    CreateDedicatedClusterDBInstance(req: CreateDedicatedClusterDBInstanceRequest, cb?: (error: string, rep: CreateDedicatedClusterDBInstanceResponse) => void): Promise<CreateDedicatedClusterDBInstanceResponse>;
    /**
     * 本接口（ModifyDBInstanceName）用于修改云数据库实例的名称。
     */
    ModifyDBInstanceName(req: ModifyDBInstanceNameRequest, cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void): Promise<ModifyDBInstanceNameResponse>;
    /**
     * 本接口（IsolateDedicatedDBInstance）用于隔离独享云数据库实例。
     */
    IsolateDedicatedDBInstance(req: IsolateDedicatedDBInstanceRequest, cb?: (error: string, rep: IsolateDedicatedDBInstanceResponse) => void): Promise<IsolateDedicatedDBInstanceResponse>;
    /**
     * 本接口（DescribeOrders）用于查询云数据库订单信息。传入订单ID来查询订单关联的云数据库实例，和对应的任务流程ID。
     */
    DescribeOrders(req: DescribeOrdersRequest, cb?: (error: string, rep: DescribeOrdersResponse) => void): Promise<DescribeOrdersResponse>;
    /**
     * 本接口 (ModifySyncTaskAttribute) 用于修改同步任务的属性（目前只支持修改任务名称）
     */
    ModifySyncTaskAttribute(req: ModifySyncTaskAttributeRequest, cb?: (error: string, rep: ModifySyncTaskAttributeResponse) => void): Promise<ModifySyncTaskAttributeResponse>;
    /**
     * 本接口（DeleteAccount）用于删除云数据库账号。用户名+host唯一确定一个账号。
     */
    DeleteAccount(req: DeleteAccountRequest, cb?: (error: string, rep: DeleteAccountResponse) => void): Promise<DeleteAccountResponse>;
    /**
     * 本接口(DescribeDBParameters)用于获取数据库的当前参数设置。
     */
    DescribeDBParameters(req: DescribeDBParametersRequest, cb?: (error: string, rep: DescribeDBParametersResponse) => void): Promise<DescribeDBParametersResponse>;
    /**
     * 本接口（ModifyDBInstancesProject）用于修改云数据库实例所属项目。
     */
    ModifyDBInstancesProject(req: ModifyDBInstancesProjectRequest, cb?: (error: string, rep: ModifyDBInstancesProjectResponse) => void): Promise<ModifyDBInstancesProjectResponse>;
    /**
     * 本接口（RestartDBInstances）用于重启数据库实例
     */
    RestartDBInstances(req: RestartDBInstancesRequest, cb?: (error: string, rep: RestartDBInstancesResponse) => void): Promise<RestartDBInstancesResponse>;
    /**
     * 本接口（ModifyInstanceVip）用于修改实例VIP
     */
    ModifyInstanceVip(req: ModifyInstanceVipRequest, cb?: (error: string, rep: ModifyInstanceVipResponse) => void): Promise<ModifyInstanceVipResponse>;
    /**
     * 本接口(IsolateDBInstance)用于隔离云数据库MariaDB实例（包年包月），隔离后不能通过IP和端口访问数据库。隔离的实例可在回收站中进行开机。若为欠费隔离，请尽快进行充值。
     */
    IsolateDBInstance(req: IsolateDBInstanceRequest, cb?: (error: string, rep: IsolateDBInstanceResponse) => void): Promise<IsolateDBInstanceResponse>;
    /**
     * 本接口(DescribeDBLogFiles)用于获取数据库的各种日志列表，包括冷备、binlog、errlog和slowlog。
     */
    DescribeDBLogFiles(req: DescribeDBLogFilesRequest, cb?: (error: string, rep: DescribeDBLogFilesResponse) => void): Promise<DescribeDBLogFilesResponse>;
    /**
     * 本接口(ModifyRealServerAccessStrategy)用于修改云数据库的VPCGW到RS的访问策略。

**注意**
- 修改策略后只对新建立的连接生效，老连接不受影响
- 就近访问只针对实例是跨可用区部署有用，单可用区部署实例就近与否并无作用
- DB每个Node对应一个proxy，如果开启就近访问，将会把连接集中到对应可用区的proxy上，可能造成热点问题，这种情况下如果是线上业务，请务必根据自己的业务请求量测试符合预期后再进行就近策略变更
     */
    ModifyRealServerAccessStrategy(req: ModifyRealServerAccessStrategyRequest, cb?: (error: string, rep: ModifyRealServerAccessStrategyResponse) => void): Promise<ModifyRealServerAccessStrategyResponse>;
    /**
     * 本接口（ModifyInstanceNetwork）用于修改实例所属网络
     */
    ModifyInstanceNetwork(req: ModifyInstanceNetworkRequest, cb?: (error: string, rep: ModifyInstanceNetworkResponse) => void): Promise<ModifyInstanceNetworkResponse>;
    /**
     * 本接口（DestroyHourDBInstance）用于销毁MariaDB按量计费实例。
     */
    DestroyHourDBInstance(req: DestroyHourDBInstanceRequest, cb?: (error: string, rep: DestroyHourDBInstanceResponse) => void): Promise<DestroyHourDBInstanceResponse>;
    /**
     * 本接口(DescribeDBInstanceSpecs)用于查询可创建的云数据库可售卖的规格配置。
     */
    DescribeDBInstanceSpecs(req?: DescribeDBInstanceSpecsRequest, cb?: (error: string, rep: DescribeDBInstanceSpecsResponse) => void): Promise<DescribeDBInstanceSpecsResponse>;
    /**
     * 本接口（DescribeDBInstances）用于查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回20条实例记录，单次请求最多支持返回100条实例记录。
     */
    DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse>;
    /**
     * 本接口（RenewDBInstance）用于续费云数据库实例。
     */
    RenewDBInstance(req: RenewDBInstanceRequest, cb?: (error: string, rep: RenewDBInstanceResponse) => void): Promise<RenewDBInstanceResponse>;
    /**
     * 本接口（DescribeUpgradePrice）用于在扩容云数据库实例时，查询变配的价格。
     */
    DescribeUpgradePrice(req: DescribeUpgradePriceRequest, cb?: (error: string, rep: DescribeUpgradePriceResponse) => void): Promise<DescribeUpgradePriceResponse>;
    /**
     * 本接口（DescribeProjectSecurityGroups）用于查询项目安全组信息
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定云资源。
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 本接口（CreateAccount）用于创建云数据库账号。一个实例可以创建多个不同的账号，相同的用户名+不同的host是不同的账号。
     */
    CreateAccount(req: CreateAccountRequest, cb?: (error: string, rep: CreateAccountResponse) => void): Promise<CreateAccountResponse>;
    /**
     * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
     */
    OpenDBExtranetAccess(req: OpenDBExtranetAccessRequest, cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void): Promise<OpenDBExtranetAccessResponse>;
    /**
     * 本接口(InitDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     */
    InitDBInstances(req: InitDBInstancesRequest, cb?: (error: string, rep: InitDBInstancesResponse) => void): Promise<InitDBInstancesResponse>;
    /**
     * 本接口(UpgradeDedicatedDBInstance)用于扩容独享云数据库实例。
     */
    UpgradeDedicatedDBInstance(req: UpgradeDedicatedDBInstanceRequest, cb?: (error: string, rep: UpgradeDedicatedDBInstanceResponse) => void): Promise<UpgradeDedicatedDBInstanceResponse>;
    /**
     * 本接口（CreateDBInstance）用于创建包年包月的MariaDB云数据库实例，可通过传入实例规格、数据库版本号、购买时长和数量等信息创建云数据库实例。
     */
    CreateDBInstance(req: CreateDBInstanceRequest, cb?: (error: string, rep: CreateDBInstanceResponse) => void): Promise<CreateDBInstanceResponse>;
    /**
     * 本接口(ModifyAccountPrivileges)用于修改云数据库的账户的权限信息。

**注意**
- 系统保留库："mysql"，只开放["SELECT"]权限
- 只读账号授予读写权限会报错
- 不传权限参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组
     */
    ModifyAccountPrivileges(req: ModifyAccountPrivilegesRequest, cb?: (error: string, rep: ModifyAccountPrivilegesResponse) => void): Promise<ModifyAccountPrivilegesResponse>;
    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于修改云数据库安全组
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 本接口（ModifyDBSyncMode）用于修改云数据库实例的同步模式。
     */
    ModifyDBSyncMode(req: ModifyDBSyncModeRequest, cb?: (error: string, rep: ModifyDBSyncModeResponse) => void): Promise<ModifyDBSyncModeResponse>;
    /**
     * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
     */
    CloseDBExtranetAccess(req: CloseDBExtranetAccessRequest, cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void): Promise<CloseDBExtranetAccessResponse>;
    /**
     * 本接口（CreateTmpInstances）用于创建临时实例。
     */
    CreateTmpInstances(req: CreateTmpInstancesRequest, cb?: (error: string, rep: CreateTmpInstancesResponse) => void): Promise<CreateTmpInstancesResponse>;
    /**
     * 本接口(DescribeBackupFiles)用于查看备份文件列表。
     */
    DescribeBackupFiles(req: DescribeBackupFilesRequest, cb?: (error: string, rep: DescribeBackupFilesResponse) => void): Promise<DescribeBackupFilesResponse>;
    /**
     * 本接口(ModifyDBEncryptAttributes)用于修改实例数据加密。
     */
    ModifyDBEncryptAttributes(req: ModifyDBEncryptAttributesRequest, cb?: (error: string, rep: ModifyDBEncryptAttributesResponse) => void): Promise<ModifyDBEncryptAttributesResponse>;
    /**
     * 本接口（DescribeAccounts）用于查询指定云数据库实例的账号列表。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 获取实例灾备详情
     */
    DescribeDcnDetail(req: DescribeDcnDetailRequest, cb?: (error: string, rep: DescribeDcnDetailResponse) => void): Promise<DescribeDcnDetailResponse>;
    /**
     * 相当于在mysqld中执行flush logs，完成切分的binlog将展示在实例控制台binlog列表里。
     */
    FlushBinlog(req: FlushBinlogRequest, cb?: (error: string, rep: FlushBinlogResponse) => void): Promise<FlushBinlogResponse>;
    /**
     * 本接口（GrantAccountPrivileges）用于给云数据库账号赋权。
注意：相同用户名，不同Host是不同的账号。
     */
    GrantAccountPrivileges(req: GrantAccountPrivilegesRequest, cb?: (error: string, rep: GrantAccountPrivilegesResponse) => void): Promise<GrantAccountPrivilegesResponse>;
    /**
     * 本接口（CopyAccountPrivileges）用于复制云数据库账号的权限。
注意：相同用户名，不同Host是不同的账号，Readonly属性相同的账号之间才能复制权限。
     */
    CopyAccountPrivileges(req: CopyAccountPrivilegesRequest, cb?: (error: string, rep: CopyAccountPrivilegesResponse) => void): Promise<CopyAccountPrivilegesResponse>;
    /**
     * 本接口（DescribeDBTmpInstances）用于获取实例回档生成的临时实例
     */
    DescribeDBTmpInstances(req: DescribeDBTmpInstancesRequest, cb?: (error: string, rep: DescribeDBTmpInstancesResponse) => void): Promise<DescribeDBTmpInstancesResponse>;
    /**
     * 本接口（DescribeDBSyncMode）用于查询云数据库实例的同步模式。
     */
    DescribeDBSyncMode(req: DescribeDBSyncModeRequest, cb?: (error: string, rep: DescribeDBSyncModeResponse) => void): Promise<DescribeDBSyncModeResponse>;
    /**
     * 本接口（DescribeDatabases）用于查询云数据库实例的数据库列表。
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 本接口（DescribePrice）用于在购买实例前，查询实例的价格。
     */
    DescribePrice(req: DescribePriceRequest, cb?: (error: string, rep: DescribePriceResponse) => void): Promise<DescribePriceResponse>;
    /**
     * 本接口（DescribeBinlogTime）用于查询可回档时间范围。
     */
    DescribeBinlogTime(req: DescribeBinlogTimeRequest, cb?: (error: string, rep: DescribeBinlogTimeResponse) => void): Promise<DescribeBinlogTimeResponse>;
    /**
     * 本接口（TerminateDedicatedDBInstance）用于销毁已隔离的独享云数据库实例。
     */
    TerminateDedicatedDBInstance(req: TerminateDedicatedDBInstanceRequest, cb?: (error: string, rep: TerminateDedicatedDBInstanceResponse) => void): Promise<TerminateDedicatedDBInstanceResponse>;
    /**
     * 本接口（DescribeDBSecurityGroups）用于查询实例安全组信息
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 升级MariaDB按量计费实例
     */
    UpgradeHourDBInstance(req: UpgradeHourDBInstanceRequest, cb?: (error: string, rep: UpgradeHourDBInstanceResponse) => void): Promise<UpgradeHourDBInstanceResponse>;
    /**
     * 本接口（DescribeDatabaseTable）用于查询云数据库实例的表信息。
     */
    DescribeDatabaseTable(req: DescribeDatabaseTableRequest, cb?: (error: string, rep: DescribeDatabaseTableResponse) => void): Promise<DescribeDatabaseTableResponse>;
    /**
     * 本接口（CancelDcnJob）用于取消DCN同步
     */
    CancelDcnJob(req: CancelDcnJobRequest, cb?: (error: string, rep: CancelDcnJobResponse) => void): Promise<CancelDcnJobResponse>;
    /**
     * 本接口(DescribeBackupConfigs)用于查询数据库备份配置信息。
     */
    DescribeBackupConfigs(req: DescribeBackupConfigsRequest, cb?: (error: string, rep: DescribeBackupConfigsResponse) => void): Promise<DescribeBackupConfigsResponse>;
    /**
     * 本接口（CloneAccount）用于克隆实例账户。
     */
    CloneAccount(req: CloneAccountRequest, cb?: (error: string, rep: CloneAccountResponse) => void): Promise<CloneAccountResponse>;
    /**
     * 隔离MariaDB按量计费实例
     */
    IsolateHourDBInstance(req: IsolateHourDBInstanceRequest, cb?: (error: string, rep: IsolateHourDBInstanceResponse) => void): Promise<IsolateHourDBInstanceResponse>;
    /**
     * 本接口(UpgradeDBInstance)用于扩容云数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     */
    UpgradeDBInstance(req: UpgradeDBInstanceRequest, cb?: (error: string, rep: UpgradeDBInstanceResponse) => void): Promise<UpgradeDBInstanceResponse>;
    /**
     * 本接口(ModifyBackupConfigs)用于修改数据库备份配置信息。

1. 修改数据库超期备份配置，目前按年、按月、按日只支持一种，存在互斥关系，如当前策略按年备份，如果传入按月备份策略将会覆盖当前的按年备份策略，务必注意。
     */
    ModifyBackupConfigs(req: ModifyBackupConfigsRequest, cb?: (error: string, rep: ModifyBackupConfigsResponse) => void): Promise<ModifyBackupConfigsResponse>;
    /**
     * 本接口(DescribeDBInstanceDetail)用于查询指定实例的详细信息。
     */
    DescribeDBInstanceDetail(req: DescribeDBInstanceDetailRequest, cb?: (error: string, rep: DescribeDBInstanceDetailResponse) => void): Promise<DescribeDBInstanceDetailResponse>;
    /**
     * 本接口(DescribeLogFileRetentionPeriod)用于查看数据库备份日志的备份天数的设置情况。
     */
    DescribeLogFileRetentionPeriod(req: DescribeLogFileRetentionPeriodRequest, cb?: (error: string, rep: DescribeLogFileRetentionPeriodResponse) => void): Promise<DescribeLogFileRetentionPeriodResponse>;
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 本接口(DescribeDBEncryptAttributes)用于查询实例数据加密状态。
     */
    DescribeDBEncryptAttributes(req: DescribeDBEncryptAttributesRequest, cb?: (error: string, rep: DescribeDBEncryptAttributesResponse) => void): Promise<DescribeDBEncryptAttributesResponse>;
    /**
     * 本接口(ModifyLogFileRetentionPeriod)用于修改数据库备份日志保存天数。
     */
    ModifyLogFileRetentionPeriod(req: ModifyLogFileRetentionPeriodRequest, cb?: (error: string, rep: ModifyLogFileRetentionPeriodResponse) => void): Promise<ModifyLogFileRetentionPeriodResponse>;
}

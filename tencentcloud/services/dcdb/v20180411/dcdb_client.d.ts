import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeUserTasksResponse, InitDCDBInstancesResponse, DescribeDBTmpInstancesRequest, DescribeAccountPrivilegesResponse, DescribeDatabasesRequest, DestroyDCDBInstanceResponse, DescribeDBParametersRequest, DescribeAccountsRequest, UpgradeHourDCDBInstanceResponse, ModifyRealServerAccessStrategyResponse, ModifyBackupConfigsRequest, ActiveHourDCDBInstanceResponse, DescribeDCDBPriceResponse, ModifyInstanceVportResponse, DescribeDCDBInstanceDetailRequest, DescribeFileDownloadUrlResponse, ModifyInstanceVipResponse, AssociateSecurityGroupsRequest, CancelOnlineDDLJobRequest, FlushBinlogResponse, DescribeDBSecurityGroupsResponse, CancelDcnJobResponse, DescribeFileDownloadUrlRequest, UpgradeDCDBInstanceResponse, DescribeDBSyncModeResponse, DescribeProjectSecurityGroupsRequest, DescribeDCDBUpgradePriceResponse, DescribeDBSlowLogsRequest, CreateAccountRequest, UpgradeDedicatedDCDBInstanceResponse, CreateOnlineDDLJobResponse, DescribeDBParametersResponse, DescribeDatabaseTableRequest, IsolateHourDCDBInstanceRequest, ModifyDBInstanceNameResponse, DescribeFlowResponse, UpgradeHourDCDBInstanceRequest, CloneAccountResponse, IsolateDCDBInstanceRequest, IsolateDedicatedDBInstanceRequest, ModifyAccountDescriptionResponse, DestroyDCDBInstanceRequest, OpenDBExtranetAccessResponse, CreateDCDBInstanceResponse, ModifyDBInstancesProjectResponse, ModifyDBEncryptAttributesResponse, DescribeDCDBInstanceNodeInfoRequest, SwitchDBInstanceHAResponse, DescribeDBLogFilesRequest, DescribeOrdersResponse, CreateDedicatedClusterDCDBInstanceRequest, ResetAccountPasswordRequest, CopyAccountPrivilegesResponse, CloneAccountRequest, DescribeDCDBInstanceDetailResponse, ModifyInstanceNetworkResponse, DescribeDBSecurityGroupsRequest, DescribeDCDBPriceRequest, DescribeOnlineDDLJobRequest, DescribeBackupFilesResponse, DescribeProjectSecurityGroupsResponse, ResetAccountPasswordResponse, DescribeDCDBSaleInfoRequest, ModifyRealServerAccessStrategyRequest, ModifyAccountConfigRequest, TerminateDedicatedDBInstanceResponse, RenewDCDBInstanceRequest, DescribeDBEncryptAttributesResponse, CreateTmpDCDBInstanceRequest, DescribeDBEncryptAttributesRequest, GrantAccountPrivilegesRequest, DescribeShardSpecRequest, DescribeDCDBShardsRequest, SwitchDBInstanceHARequest, ModifyDBParametersRequest, DescribeBackupConfigsRequest, ModifyDBInstanceSecurityGroupsRequest, DescribeDcnDetailRequest, ModifyDBParametersResponse, CopyAccountPrivilegesRequest, DescribeBackupFilesRequest, DescribeDCDBInstanceNodeInfoResponse, KillSessionRequest, TerminateDedicatedDBInstanceRequest, DescribeDatabaseObjectsResponse, ModifyDBInstanceNameRequest, DescribeDcnDetailResponse, DescribeBackupConfigsResponse, ModifyDBEncryptAttributesRequest, RenewDCDBInstanceResponse, DescribeDCDBRenewalPriceResponse, UpgradeDedicatedDCDBInstanceRequest, AssociateSecurityGroupsResponse, DescribeDCDBBinlogTimeRequest, DescribeShardSpecResponse, DescribeDCDBShardsResponse, CreateHourDCDBInstanceResponse, GrantAccountPrivilegesResponse, CancelDcnJobRequest, IsolateHourDCDBInstanceResponse, ModifyInstanceVipRequest, OpenDBExtranetAccessRequest, ModifyBackupConfigsResponse, DescribeDCDBSaleInfoResponse, ModifyDBInstancesProjectRequest, CreateHourDCDBInstanceRequest, DescribeDBSyncModeRequest, CloseDBExtranetAccessResponse, ModifyAccountDescriptionRequest, KillSessionResponse, DescribeProjectsRequest, CreateOnlineDDLJobRequest, DescribeDatabasesResponse, DescribeOrdersRequest, DescribeDBLogFilesResponse, CloseDBExtranetAccessRequest, InitDCDBInstancesRequest, DeleteAccountRequest, DescribeDCDBInstancesResponse, ModifyAccountPrivilegesResponse, DescribeFlowRequest, ModifyAccountPrivilegesRequest, CreateDCDBInstanceRequest, DescribeDCDBUpgradePriceRequest, CreateDedicatedClusterDCDBInstanceResponse, DescribeDBTmpInstancesResponse, DescribeDCDBBinlogTimeResponse, ModifyDBSyncModeRequest, ModifyAccountConfigResponse, IsolateDCDBInstanceResponse, DescribeProjectsResponse, CreateTmpDCDBInstanceResponse, CreateAccountResponse, IsolateDedicatedDBInstanceResponse, DescribeLogFileRetentionPeriodResponse, DescribeDatabaseObjectsRequest, UpgradeDCDBInstanceRequest, ModifyInstanceNetworkRequest, DestroyHourDCDBInstanceResponse, ActiveHourDCDBInstanceRequest, DisassociateSecurityGroupsRequest, DescribeDatabaseTableResponse, DescribeAccountPrivilegesRequest, DescribeAccountsResponse, DescribeDBSlowLogsResponse, DescribeDCDBRenewalPriceRequest, DescribeDCDBInstancesRequest, DescribeLogFileRetentionPeriodRequest, DescribeOnlineDDLJobResponse, ModifyInstanceVportRequest, ModifyDBInstanceSecurityGroupsResponse, DestroyHourDCDBInstanceRequest, FlushBinlogRequest, CancelOnlineDDLJobResponse, ModifyDBSyncModeResponse, DisassociateSecurityGroupsResponse, DescribeUserTasksRequest, DeleteAccountResponse } from "./dcdb_models";
/**
 * dcdb client
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
     * 修改账号的一些配置，比如 max_user_connections
     */
    ModifyAccountConfig(req: ModifyAccountConfigRequest, cb?: (error: string, rep: ModifyAccountConfigResponse) => void): Promise<ModifyAccountConfigResponse>;
    /**
     * 本接口（UpgradeDedicatedDCDBInstance）用于升级TDSQL独享集群实例
     */
    UpgradeDedicatedDCDBInstance(req: UpgradeDedicatedDCDBInstanceRequest, cb?: (error: string, rep: UpgradeDedicatedDCDBInstanceResponse) => void): Promise<UpgradeDedicatedDCDBInstanceResponse>;
    /**
     * 解隔离TDSQL按量计费实例
     */
    ActiveHourDCDBInstance(req: ActiveHourDCDBInstanceRequest, cb?: (error: string, rep: ActiveHourDCDBInstanceResponse) => void): Promise<ActiveHourDCDBInstanceResponse>;
    /**
     * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的数据库中的对象列表，包含表、存储过程、视图和函数。
     */
    DescribeDatabaseObjects(req: DescribeDatabaseObjectsRequest, cb?: (error: string, rep: DescribeDatabaseObjectsResponse) => void): Promise<DescribeDatabaseObjectsResponse>;
    /**
     * 本接口（DescribeDatabaseTable）用于查询云数据库实例的表信息。
     */
    DescribeDatabaseTable(req: DescribeDatabaseTableRequest, cb?: (error: string, rep: DescribeDatabaseTableResponse) => void): Promise<DescribeDatabaseTableResponse>;
    /**
     * 查询可创建的分布式数据库可售卖的分片规格配置。
     */
    DescribeShardSpec(req?: DescribeShardSpecRequest, cb?: (error: string, rep: DescribeShardSpecResponse) => void): Promise<DescribeShardSpecResponse>;
    /**
     * 本接口（ResetAccountPassword）用于重置云数据库账号的密码。
注意：相同用户名，不同Host是不同的账号。
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 本接口（ModifyInstanceVip）用于修改实例Vip
     */
    ModifyInstanceVip(req: ModifyInstanceVipRequest, cb?: (error: string, rep: ModifyInstanceVipResponse) => void): Promise<ModifyInstanceVipResponse>;
    /**
     * 查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回10条实例记录，单次请求最多支持返回100条实例记录。
     */
    DescribeDCDBInstances(req: DescribeDCDBInstancesRequest, cb?: (error: string, rep: DescribeDCDBInstancesResponse) => void): Promise<DescribeDCDBInstancesResponse>;
    /**
     * 本接口(ModifyRealServerAccessStrategy)用于修改云数据库的VPCGW到RS的访问策略。

**注意**
- 修改策略后只对新建立的连接生效，老连接不受影响
- 就近访问只针对实例是跨可用区部署有用，单可用区部署实例就近与否并无作用
- DB每个Node对应一个proxy，如果开启就近访问，将会把连接集中到对应可用区的proxy上，可能造成热点问题，这种情况下如果是线上业务，请务必根据自己的业务请求量测试符合预期后再进行就近策略变更
     */
    ModifyRealServerAccessStrategy(req: ModifyRealServerAccessStrategyRequest, cb?: (error: string, rep: ModifyRealServerAccessStrategyResponse) => void): Promise<ModifyRealServerAccessStrategyResponse>;
    /**
     * 本接口(DescribeFileDownloadUrl)用于获取数据库指定备份或日志文件的下载连接。
     */
    DescribeFileDownloadUrl(req: DescribeFileDownloadUrlRequest, cb?: (error: string, rep: DescribeFileDownloadUrlResponse) => void): Promise<DescribeFileDownloadUrlResponse>;
    /**
     * 本接口（ModifyAccountDescription）用于修改云数据库账号备注。
注意：相同用户名，不同Host是不同的账号。
     */
    ModifyAccountDescription(req: ModifyAccountDescriptionRequest, cb?: (error: string, rep: ModifyAccountDescriptionResponse) => void): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 本接口（DescribeOrders）用于查询分布式数据库订单信息。传入订单ID来查询订单关联的分布式数据库实例，和对应的任务流程ID。
     */
    DescribeOrders(req: DescribeOrdersRequest, cb?: (error: string, rep: DescribeOrdersResponse) => void): Promise<DescribeOrdersResponse>;
    /**
     * 本接口（DescribeUserTasks）用于拉取用户任务列表
     */
    DescribeUserTasks(req: DescribeUserTasksRequest, cb?: (error: string, rep: DescribeUserTasksResponse) => void): Promise<DescribeUserTasksResponse>;
    /**
     * 本接口（DescribeDCDBPrice）用于在购买实例前，查询实例的价格。
     */
    DescribeDCDBPrice(req: DescribeDCDBPriceRequest, cb?: (error: string, rep: DescribeDCDBPriceResponse) => void): Promise<DescribeDCDBPriceResponse>;
    /**
     * 本接口(ModifyDBParameters)用于修改数据库参数。
     */
    ModifyDBParameters(req: ModifyDBParametersRequest, cb?: (error: string, rep: ModifyDBParametersResponse) => void): Promise<ModifyDBParametersResponse>;
    /**
     * 本接口(DescribeDCDBSaleInfo)用于查询分布式数据库可售卖的地域和可用区信息。
     */
    DescribeDCDBSaleInfo(req?: DescribeDCDBSaleInfoRequest, cb?: (error: string, rep: DescribeDCDBSaleInfoResponse) => void): Promise<DescribeDCDBSaleInfoResponse>;
    /**
     * 本接口(DescribeDBSlowLogs)用于查询慢查询日志列表。
     */
    DescribeDBSlowLogs(req: DescribeDBSlowLogsRequest, cb?: (error: string, rep: DescribeDBSlowLogsResponse) => void): Promise<DescribeDBSlowLogsResponse>;
    /**
     * 本接口（DescribeFlow）用于查询流程状态
     */
    DescribeFlow(req: DescribeFlowRequest, cb?: (error: string, rep: DescribeFlowResponse) => void): Promise<DescribeFlowResponse>;
    /**
     * 本接口(SwitchDBInstanceHA)用于实例主备切换。
     */
    SwitchDBInstanceHA(req: SwitchDBInstanceHARequest, cb?: (error: string, rep: SwitchDBInstanceHAResponse) => void): Promise<SwitchDBInstanceHAResponse>;
    /**
     * 本接口(InitDCDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     */
    InitDCDBInstances(req: InitDCDBInstancesRequest, cb?: (error: string, rep: InitDCDBInstancesResponse) => void): Promise<InitDCDBInstancesResponse>;
    /**
     * 本接口（DescribeDCDBInstanceDetail）用于获取TDSQL实例详情
     */
    DescribeDCDBInstanceDetail(req: DescribeDCDBInstanceDetailRequest, cb?: (error: string, rep: DescribeDCDBInstanceDetailResponse) => void): Promise<DescribeDCDBInstanceDetailResponse>;
    /**
     * 创建TDSQL独享集群实例
     */
    CreateDedicatedClusterDCDBInstance(req: CreateDedicatedClusterDCDBInstanceRequest, cb?: (error: string, rep: CreateDedicatedClusterDCDBInstanceResponse) => void): Promise<CreateDedicatedClusterDCDBInstanceResponse>;
    /**
     * 本接口（RenewDCDBInstance）用于续费分布式数据库实例。
     */
    RenewDCDBInstance(req: RenewDCDBInstanceRequest, cb?: (error: string, rep: RenewDCDBInstanceResponse) => void): Promise<RenewDCDBInstanceResponse>;
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
     * 回档TDSQL实例
     */
    CreateTmpDCDBInstance(req: CreateTmpDCDBInstanceRequest, cb?: (error: string, rep: CreateTmpDCDBInstanceResponse) => void): Promise<CreateTmpDCDBInstanceResponse>;
    /**
     * 查询Online DDL 任务详情
     */
    DescribeOnlineDDLJob(req: DescribeOnlineDDLJobRequest, cb?: (error: string, rep: DescribeOnlineDDLJobResponse) => void): Promise<DescribeOnlineDDLJobResponse>;
    /**
     * 本接口(DescribeDBLogFiles)用于获取数据库的各种日志列表，包括冷备、binlog、errlog和slowlog。
     */
    DescribeDBLogFiles(req: DescribeDBLogFilesRequest, cb?: (error: string, rep: DescribeDBLogFilesResponse) => void): Promise<DescribeDBLogFilesResponse>;
    /**
     * 隔离TDSQL按量计费实例
     */
    IsolateHourDCDBInstance(req: IsolateHourDCDBInstanceRequest, cb?: (error: string, rep: IsolateHourDCDBInstanceResponse) => void): Promise<IsolateHourDCDBInstanceResponse>;
    /**
     * 本接口（UpgradeHourDCDBInstance）用于升级分布式数据库TDSQL按量计费实例。
     */
    UpgradeHourDCDBInstance(req: UpgradeHourDCDBInstanceRequest, cb?: (error: string, rep: UpgradeHourDCDBInstanceResponse) => void): Promise<UpgradeHourDCDBInstanceResponse>;
    /**
     * 本接口（DescribeDBSyncMode）用于查询云数据库实例的同步模式。
     */
    DescribeDBSyncMode(req: DescribeDBSyncModeRequest, cb?: (error: string, rep: DescribeDBSyncModeResponse) => void): Promise<DescribeDBSyncModeResponse>;
    /**
     * 本接口（UpgradeDCDBInstance）用于升级分布式数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     */
    UpgradeDCDBInstance(req: UpgradeDCDBInstanceRequest, cb?: (error: string, rep: UpgradeDCDBInstanceResponse) => void): Promise<UpgradeDCDBInstanceResponse>;
    /**
     * 获取实例回档时可选的时间范围
     */
    DescribeDCDBBinlogTime(req: DescribeDCDBBinlogTimeRequest, cb?: (error: string, rep: DescribeDCDBBinlogTimeResponse) => void): Promise<DescribeDCDBBinlogTimeResponse>;
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
     * 本接口（ModifyInstanceNetwork）用于修改实例所属网络。
     */
    ModifyInstanceNetwork(req: ModifyInstanceNetworkRequest, cb?: (error: string, rep: ModifyInstanceNetworkResponse) => void): Promise<ModifyInstanceNetworkResponse>;
    /**
     * 本接口（KillSession）用于杀死指定会话。
     */
    KillSession(req: KillSessionRequest, cb?: (error: string, rep: KillSessionResponse) => void): Promise<KillSessionResponse>;
    /**
     * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
     */
    OpenDBExtranetAccess(req: OpenDBExtranetAccessRequest, cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void): Promise<OpenDBExtranetAccessResponse>;
    /**
     * 本接口(ModifyAccountPrivileges)用于修改云数据库的账户的权限信息。

**注意**
- 系统保留库："mysql"，只开放["SELECT"]权限
- 只读账号授予读写权限会报错
- 不传权限参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组
     */
    ModifyAccountPrivileges(req: ModifyAccountPrivilegesRequest, cb?: (error: string, rep: ModifyAccountPrivilegesResponse) => void): Promise<ModifyAccountPrivilegesResponse>;
    /**
     * 本接口(DestroyDCDBInstance)用于销毁已隔离的TDSQL包年包月实例。
     */
    DestroyDCDBInstance(req: DestroyDCDBInstanceRequest, cb?: (error: string, rep: DestroyDCDBInstanceResponse) => void): Promise<DestroyDCDBInstanceResponse>;
    /**
     * 本接口（DescribeDCDBInstanceNodeInfo）用于获取实例节点信息
     */
    DescribeDCDBInstanceNodeInfo(req: DescribeDCDBInstanceNodeInfoRequest, cb?: (error: string, rep: DescribeDCDBInstanceNodeInfoResponse) => void): Promise<DescribeDCDBInstanceNodeInfoResponse>;
    /**
     * 本接口（ModifyDBSyncMode）用于修改云数据库实例的同步模式。
     */
    ModifyDBSyncMode(req: ModifyDBSyncModeRequest, cb?: (error: string, rep: ModifyDBSyncModeResponse) => void): Promise<ModifyDBSyncModeResponse>;
    /**
     * 本接口(DescribeLogFileRetentionPeriod)用于查看数据库备份日志的备份天数的设置情况。
     */
    DescribeLogFileRetentionPeriod(req: DescribeLogFileRetentionPeriodRequest, cb?: (error: string, rep: DescribeLogFileRetentionPeriodResponse) => void): Promise<DescribeLogFileRetentionPeriodResponse>;
    /**
     * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
     */
    CloseDBExtranetAccess(req: CloseDBExtranetAccessRequest, cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void): Promise<CloseDBExtranetAccessResponse>;
    /**
     * 本接口(DescribeBackupFiles)用于查看备份文件列表。
     */
    DescribeBackupFiles(req: DescribeBackupFilesRequest, cb?: (error: string, rep: DescribeBackupFilesResponse) => void): Promise<DescribeBackupFilesResponse>;
    /**
     * 本接口(ModifyDBEncryptAttributes)用于修改实例数据加密。
     */
    ModifyDBEncryptAttributes(req: ModifyDBEncryptAttributesRequest, cb?: (error: string, rep: ModifyDBEncryptAttributesResponse) => void): Promise<ModifyDBEncryptAttributesResponse>;
    /**
     * 本接口（DestroyHourDCDBInstance）用于TDSQL销毁按量计费实例。
     */
    DestroyHourDCDBInstance(req: DestroyHourDCDBInstanceRequest, cb?: (error: string, rep: DestroyHourDCDBInstanceResponse) => void): Promise<DestroyHourDCDBInstanceResponse>;
    /**
     * 本接口（DescribeAccounts）用于查询指定云数据库实例的账号列表。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 获取实例灾备详情
     */
    DescribeDcnDetail(req: DescribeDcnDetailRequest, cb?: (error: string, rep: DescribeDcnDetailResponse) => void): Promise<DescribeDcnDetailResponse>;
    /**
     * 相当于在所有分片的mysqld中执行flush logs，完成切分的binlog将展示在各个分片控制台binlog列表里。
     */
    FlushBinlog(req: FlushBinlogRequest, cb?: (error: string, rep: FlushBinlogResponse) => void): Promise<FlushBinlogResponse>;
    /**
     * 本接口（GrantAccountPrivileges）用于给云数据库账号赋权。
注意：相同用户名，不同Host是不同的账号。
     */
    GrantAccountPrivileges(req: GrantAccountPrivilegesRequest, cb?: (error: string, rep: GrantAccountPrivilegesResponse) => void): Promise<GrantAccountPrivilegesResponse>;
    /**
     * 取消 Online DDL 任务
     */
    CancelOnlineDDLJob(req: CancelOnlineDDLJobRequest, cb?: (error: string, rep: CancelOnlineDDLJobResponse) => void): Promise<CancelOnlineDDLJobResponse>;
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
     * 本接口（DescribeDCDBShards）用于查询云数据库实例的分片信息。
     */
    DescribeDCDBShards(req: DescribeDCDBShardsRequest, cb?: (error: string, rep: DescribeDCDBShardsResponse) => void): Promise<DescribeDCDBShardsResponse>;
    /**
     * 本接口（DescribeDatabases）用于查询云数据库实例的数据库列表。
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 本接口（CreateDCDBInstance）用于创建包年包月的TDSQL实例，可通过传入实例规格、数据库版本号、购买时长等信息创建云数据库实例。
     */
    CreateDCDBInstance(req: CreateDCDBInstanceRequest, cb?: (error: string, rep: CreateDCDBInstanceResponse) => void): Promise<CreateDCDBInstanceResponse>;
    /**
     * 本接口（DescribeProjects）用于查询项目列表
     */
    DescribeProjects(req?: DescribeProjectsRequest, cb?: (error: string, rep: DescribeProjectsResponse) => void): Promise<DescribeProjectsResponse>;
    /**
     * 本接口(IsolateDCDBInstance)用于隔离分布式数据库TDSQL实例（包年包月），隔离后不能通过IP和端口访问数据库。隔离的实例可在回收站中进行开机。若为欠费隔离，请尽快进行充值。
     */
    IsolateDCDBInstance(req: IsolateDCDBInstanceRequest, cb?: (error: string, rep: IsolateDCDBInstanceResponse) => void): Promise<IsolateDCDBInstanceResponse>;
    /**
     * 本接口（ModifyInstanceVport）用于修改实例VPORT
     */
    ModifyInstanceVport(req: ModifyInstanceVportRequest, cb?: (error: string, rep: ModifyInstanceVportResponse) => void): Promise<ModifyInstanceVportResponse>;
    /**
     * 本接口（TerminateDedicatedDBInstance）用于销毁已隔离的独享分布式数据库实例。
     */
    TerminateDedicatedDBInstance(req: TerminateDedicatedDBInstanceRequest, cb?: (error: string, rep: TerminateDedicatedDBInstanceResponse) => void): Promise<TerminateDedicatedDBInstanceResponse>;
    /**
     * 本接口（DescribeDBSecurityGroups）用于查询实例安全组信息
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 本接口（IsolateDedicatedDBInstance）用于隔离独享云数据库实例。
     */
    IsolateDedicatedDBInstance(req: IsolateDedicatedDBInstanceRequest, cb?: (error: string, rep: IsolateDedicatedDBInstanceResponse) => void): Promise<IsolateDedicatedDBInstanceResponse>;
    /**
     * 本接口（DescribeDCDBUpgradePrice）用于查询变配分布式数据库实例价格。
     */
    DescribeDCDBUpgradePrice(req: DescribeDCDBUpgradePriceRequest, cb?: (error: string, rep: DescribeDCDBUpgradePriceResponse) => void): Promise<DescribeDCDBUpgradePriceResponse>;
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
     * 创建在线DDL任务
     */
    CreateOnlineDDLJob(req: CreateOnlineDDLJobRequest, cb?: (error: string, rep: CreateOnlineDDLJobResponse) => void): Promise<CreateOnlineDDLJobResponse>;
    /**
     * 本接口(ModifyBackupConfigs)用于修改数据库备份配置信息。

1. 修改数据库超期备份配置，目前按年、按月、按日只支持一种，存在互斥关系，如当前策略按年备份，如果传入按月备份策略将会覆盖当前的按年备份策略，务必注意。
     */
    ModifyBackupConfigs(req: ModifyBackupConfigsRequest, cb?: (error: string, rep: ModifyBackupConfigsResponse) => void): Promise<ModifyBackupConfigsResponse>;
    /**
     * 本接口（ModifyDBInstanceName）用于修改实例名字
     */
    ModifyDBInstanceName(req: ModifyDBInstanceNameRequest, cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void): Promise<ModifyDBInstanceNameResponse>;
    /**
     * 创建TDSQL按量计费实例
     */
    CreateHourDCDBInstance(req: CreateHourDCDBInstanceRequest, cb?: (error: string, rep: CreateHourDCDBInstanceResponse) => void): Promise<CreateHourDCDBInstanceResponse>;
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 本接口(DescribeDBEncryptAttributes)用于查询实例数据加密状态。
     */
    DescribeDBEncryptAttributes(req: DescribeDBEncryptAttributesRequest, cb?: (error: string, rep: DescribeDBEncryptAttributesResponse) => void): Promise<DescribeDBEncryptAttributesResponse>;
    /**
     * 本接口（DescribeDCDBRenewalPrice）用于在续费分布式数据库实例时，查询续费的价格。
     */
    DescribeDCDBRenewalPrice(req: DescribeDCDBRenewalPriceRequest, cb?: (error: string, rep: DescribeDCDBRenewalPriceResponse) => void): Promise<DescribeDCDBRenewalPriceResponse>;
    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于修改云数据库安全组
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
}

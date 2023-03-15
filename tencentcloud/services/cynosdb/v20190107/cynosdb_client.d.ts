import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { RemoveClusterSlaveZoneRequest, ModifyClusterNameRequest, DescribeRollbackTimeRangeRequest, InquirePriceRenewRequest, DescribeAuditLogsRequest, DescribeBackupConfigRequest, ModifyAuditRuleTemplatesRequest, DescribeAccountsRequest, ModifyMaintainPeriodConfigRequest, DescribeRollbackTimeRangeResponse, ModifyBackupNameResponse, ModifyClusterStorageRequest, RollBackClusterRequest, DescribeAuditLogFilesResponse, SwitchClusterZoneResponse, AssociateSecurityGroupsRequest, DescribeBinlogDownloadUrlRequest, CreateAccountsResponse, ModifyInstanceNameRequest, DescribeDBSecurityGroupsResponse, DescribeMaintainPeriodRequest, DescribeBinlogsResponse, DescribeInstancesResponse, DescribeZonesRequest, AddClusterSlaveZoneResponse, ModifyClusterNameResponse, DescribeClusterParamsResponse, IsolateInstanceResponse, DescribeParamTemplatesRequest, DescribeAuditLogsResponse, SearchClusterTablesRequest, PauseServerlessRequest, DescribeFlowResponse, RevokeAccountPrivilegesResponse, CreateClustersResponse, SetRenewFlagRequest, ActivateInstanceRequest, AddClusterSlaveZoneRequest, DescribeAccountAllGrantPrivilegesResponse, ModifyVipVportRequest, DescribeClustersRequest, ModifyClusterStorageResponse, DescribeInstanceDetailResponse, ModifyDBInstanceSecurityGroupsResponse, DeleteAuditLogFileResponse, DescribeClusterParamLogsResponse, DescribeClusterInstanceGrpsRequest, DescribeResourcesByDealNameResponse, CreateAccountsRequest, DeleteAuditRuleTemplatesRequest, DescribeAuditRuleTemplatesResponse, SwitchClusterZoneRequest, RestartInstanceRequest, UpgradeInstanceRequest, IsolateInstanceRequest, SwitchClusterVpcResponse, DescribeClusterDetailRequest, DeleteBackupResponse, DescribeProjectSecurityGroupsResponse, RemoveClusterSlaveZoneResponse, CreateAuditLogFileResponse, PauseServerlessResponse, OfflineClusterRequest, ResetAccountPasswordResponse, DescribeBinlogDownloadUrlResponse, DescribeAuditRuleWithInstanceIdsResponse, UpgradeInstanceResponse, DescribeBackupListRequest, SearchClusterDatabasesRequest, SwitchClusterVpcRequest, DescribeAuditRuleWithInstanceIdsRequest, ModifyClusterSlaveZoneResponse, GrantAccountPrivilegesRequest, ModifyAuditServiceRequest, CreateClustersRequest, DescribeClustersResponse, DescribeBackupConfigResponse, ModifyVipVportResponse, ModifyDBInstanceSecurityGroupsRequest, DescribeParamTemplatesResponse, CloseAuditServiceRequest, AddInstancesResponse, DescribeProjectSecurityGroupsRequest, ModifyClusterParamResponse, DescribeBackupDownloadUrlRequest, OfflineInstanceRequest, OpenAuditServiceRequest, AssociateSecurityGroupsResponse, DescribeResourcesByDealNameRequest, CloseAuditServiceResponse, CreateBackupResponse, DescribeRollbackTimeValidityResponse, DescribeInstanceSlowQueriesResponse, DescribeInstancesRequest, DescribeBackupDownloadUrlResponse, ResumeServerlessRequest, InquirePriceCreateRequest, CreateAuditRuleTemplateRequest, ModifyBackupConfigResponse, DescribeInstanceSpecsRequest, ExportInstanceSlowQueriesRequest, ModifyAccountParamsRequest, CreateAuditRuleTemplateResponse, DescribeZonesResponse, IsolateClusterResponse, OpenAuditServiceResponse, OfflineClusterResponse, SwitchProxyVpcResponse, RevokeAccountPrivilegesRequest, ResumeServerlessResponse, DescribeAuditRuleTemplatesRequest, DescribeFlowRequest, SetRenewFlagResponse, CreateBackupRequest, DescribeClusterParamLogsRequest, SearchClusterTablesResponse, DescribeMaintainPeriodResponse, SwitchProxyVpcRequest, DescribeBackupListResponse, RollBackClusterResponse, RestartInstanceResponse, DescribeBinlogSaveDaysRequest, ModifyBackupConfigRequest, ActivateInstanceResponse, DescribeRollbackTimeValidityRequest, CreateAuditLogFileRequest, DeleteAuditLogFileRequest, AddInstancesRequest, InquirePriceCreateResponse, ModifyClusterSlaveZoneRequest, GrantAccountPrivilegesResponse, DescribeInstanceSlowQueriesRequest, ExportInstanceSlowQueriesResponse, ResetAccountPasswordRequest, SearchClusterDatabasesResponse, DescribeInstanceDetailRequest, ModifyMaintainPeriodConfigResponse, DisassociateSecurityGroupsRequest, ModifyBackupNameRequest, ModifyInstanceNameResponse, DescribeBinlogSaveDaysResponse, ModifyClusterParamRequest, DescribeAccountsResponse, ModifyAccountParamsResponse, DeleteBackupRequest, DescribeClusterParamsRequest, DescribeInstanceSpecsResponse, DescribeDBSecurityGroupsRequest, DescribeAccountAllGrantPrivilegesRequest, OfflineInstanceResponse, ModifyAuditServiceResponse, IsolateClusterRequest, DeleteAuditRuleTemplatesResponse, DescribeAuditLogFilesRequest, DescribeClusterDetailResponse, DescribeClusterInstanceGrpsResponse, DescribeBinlogsRequest, DisassociateSecurityGroupsResponse, InquirePriceRenewResponse, ModifyAuditRuleTemplatesResponse } from "./cynosdb_models";
/**
 * cynosdb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口(ModifyAuditService)用于修改云数据库审计日志保存时长、审计规则等服务配置。
     */
    ModifyAuditService(req: ModifyAuditServiceRequest, cb?: (error: string, rep: ModifyAuditServiceResponse) => void): Promise<ModifyAuditServiceResponse>;
    /**
     * 下线实例
     */
    OfflineInstance(req: OfflineInstanceRequest, cb?: (error: string, rep: OfflineInstanceResponse) => void): Promise<OfflineInstanceResponse>;
    /**
     * 查询备份文件列表
     */
    DescribeBackupList(req: DescribeBackupListRequest, cb?: (error: string, rep: DescribeBackupListResponse) => void): Promise<DescribeBackupListResponse>;
    /**
     * 批量回收账号权限
     */
    RevokeAccountPrivileges(req: RevokeAccountPrivilegesRequest, cb?: (error: string, rep: RevokeAccountPrivilegesResponse) => void): Promise<RevokeAccountPrivilegesResponse>;
    /**
     * 本接口（RollBackCluster）用于回档集群
     */
    RollBackCluster(req: RollBackClusterRequest, cb?: (error: string, rep: RollBackClusterResponse) => void): Promise<RollBackClusterResponse>;
    /**
     * 查询项目安全组信息
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 此接口（DescribeBinlogSaveDays）用于查询集群的Binlog保留天数。
     */
    DescribeBinlogSaveDays(req: DescribeBinlogSaveDaysRequest, cb?: (error: string, rep: DescribeBinlogSaveDaysResponse) => void): Promise<DescribeBinlogSaveDaysResponse>;
    /**
     * 本接口（DescribeInstanceSpecs）用于查询实例规格
     */
    DescribeInstanceSpecs(req: DescribeInstanceSpecsRequest, cb?: (error: string, rep: DescribeInstanceSpecsResponse) => void): Promise<DescribeInstanceSpecsResponse>;
    /**
     * 增加从可用区
     */
    AddClusterSlaveZone(req: AddClusterSlaveZoneRequest, cb?: (error: string, rep: AddClusterSlaveZoneResponse) => void): Promise<AddClusterSlaveZoneResponse>;
    /**
     * 查询用户指定产品下的所有参数模板信息
     */
    DescribeParamTemplates(req: DescribeParamTemplatesRequest, cb?: (error: string, rep: DescribeParamTemplatesResponse) => void): Promise<DescribeParamTemplatesResponse>;
    /**
     * 为集群删除手动备份，无法删除自动备份
     */
    DeleteBackup(req: DeleteBackupRequest, cb?: (error: string, rep: DeleteBackupResponse) => void): Promise<DeleteBackupResponse>;
    /**
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。
     */
    DescribeClusterInstanceGrps(req: DescribeClusterInstanceGrpsRequest, cb?: (error: string, rep: DescribeClusterInstanceGrpsResponse) => void): Promise<DescribeClusterInstanceGrpsResponse>;
    /**
     * 修改实例组ip，端口
     */
    ModifyVipVport(req: ModifyVipVportRequest, cb?: (error: string, rep: ModifyVipVportResponse) => void): Promise<ModifyVipVportResponse>;
    /**
     * TDSQL-C for MySQL实例开通审计服务
     */
    OpenAuditService(req: OpenAuditServiceRequest, cb?: (error: string, rep: OpenAuditServiceResponse) => void): Promise<OpenAuditServiceResponse>;
    /**
     * 创建审计规则模版
     */
    CreateAuditRuleTemplate(req: CreateAuditRuleTemplateRequest, cb?: (error: string, rep: CreateAuditRuleTemplateResponse) => void): Promise<CreateAuditRuleTemplateResponse>;
    /**
     * 此接口（ModifyBackupName）用于修改备份文件备注名。
     */
    ModifyBackupName(req: ModifyBackupNameRequest, cb?: (error: string, rep: ModifyBackupNameResponse) => void): Promise<ModifyBackupNameResponse>;
    /**
     * 本接口(DeleteAuditLogFile)用于删除云数据库实例的审计日志文件。
     */
    DeleteAuditLogFile(req: DeleteAuditLogFileRequest, cb?: (error: string, rep: DeleteAuditLogFileResponse) => void): Promise<DeleteAuditLogFileResponse>;
    /**
     * 本接口(ResetAccountPassword)用于重置实例的数据库账号密码。
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 本接口(DescribeInstanceDetail)用于查询实例详情。
     */
    DescribeInstanceDetail(req: DescribeInstanceDetailRequest, cb?: (error: string, rep: DescribeInstanceDetailResponse) => void): Promise<DescribeInstanceDetailResponse>;
    /**
     * 查询审计规则模版信息
     */
    DescribeAuditRuleTemplates(req: DescribeAuditRuleTemplatesRequest, cb?: (error: string, rep: DescribeAuditRuleTemplatesResponse) => void): Promise<DescribeAuditRuleTemplatesResponse>;
    /**
     * 查询指定集群有效回滚时间范围
     */
    DescribeRollbackTimeRange(req: DescribeRollbackTimeRangeRequest, cb?: (error: string, rep: DescribeRollbackTimeRangeResponse) => void): Promise<DescribeRollbackTimeRangeResponse>;
    /**
     * 本接口（DescribeFlow）用于查询任务流信息
     */
    DescribeFlow(req: DescribeFlowRequest, cb?: (error: string, rep: DescribeFlowResponse) => void): Promise<DescribeFlowResponse>;
    /**
     * 修改指定集群的备份配置
     */
    ModifyBackupConfig(req: ModifyBackupConfigRequest, cb?: (error: string, rep: ModifyBackupConfigResponse) => void): Promise<ModifyBackupConfigResponse>;
    /**
     * 本接口(DescribeInstances)用于查询实例列表。
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 删除审计规则模版
     */
    DeleteAuditRuleTemplates(req: DeleteAuditRuleTemplatesRequest, cb?: (error: string, rep: DeleteAuditRuleTemplatesResponse) => void): Promise<DeleteAuditRuleTemplatesResponse>;
    /**
     * 本接口（DescribeClusterParamLogs）查询参数修改日志
     */
    DescribeClusterParamLogs(req: DescribeClusterParamLogsRequest, cb?: (error: string, rep: DescribeClusterParamLogsResponse) => void): Promise<DescribeClusterParamLogsResponse>;
    /**
     * 修改维护时间配置
     */
    ModifyMaintainPeriodConfig(req: ModifyMaintainPeriodConfigRequest, cb?: (error: string, rep: ModifyMaintainPeriodConfigResponse) => void): Promise<ModifyMaintainPeriodConfigResponse>;
    /**
     * 本接口(DescribeAuditLogs)用于查询数据库审计日志。
     */
    DescribeAuditLogs(req: DescribeAuditLogsRequest, cb?: (error: string, rep: DescribeAuditLogsResponse) => void): Promise<DescribeAuditLogsResponse>;
    /**
     * 修改从可用区
     */
    ModifyClusterSlaveZone(req: ModifyClusterSlaveZoneRequest, cb?: (error: string, rep: ModifyClusterSlaveZoneResponse) => void): Promise<ModifyClusterSlaveZoneResponse>;
    /**
     * 修改账号参数
     */
    ModifyAccountParams(req: ModifyAccountParamsRequest, cb?: (error: string, rep: ModifyAccountParamsResponse) => void): Promise<ModifyAccountParamsResponse>;
    /**
     * 本接口（DescribeClusterParams）用于查询集群参数
     */
    DescribeClusterParams(req: DescribeClusterParamsRequest, cb?: (error: string, rep: DescribeClusterParamsResponse) => void): Promise<DescribeClusterParamsResponse>;
    /**
     * 为集群创建手动备份
     */
    CreateBackup(req: CreateBackupRequest, cb?: (error: string, rep: CreateBackupResponse) => void): Promise<CreateBackupResponse>;
    /**
     * TDSQL-C for MySQL实例关闭审计服务
     */
    CloseAuditService(req: CloseAuditServiceRequest, cb?: (error: string, rep: CloseAuditServiceResponse) => void): Promise<CloseAuditServiceResponse>;
    /**
     * 本接口(ModifyInstanceName)用于修改实例名称。
     */
    ModifyInstanceName(req: ModifyInstanceNameRequest, cb?: (error: string, rep: ModifyInstanceNameResponse) => void): Promise<ModifyInstanceNameResponse>;
    /**
     * 查询实例维护时间窗
     */
    DescribeMaintainPeriod(req: DescribeMaintainPeriodRequest, cb?: (error: string, rep: DescribeMaintainPeriodResponse) => void): Promise<DescribeMaintainPeriodResponse>;
    /**
     * 恢复serverless集群
     */
    ResumeServerless(req: ResumeServerlessRequest, cb?: (error: string, rep: ResumeServerlessResponse) => void): Promise<ResumeServerlessResponse>;
    /**
     * 重启实例
     */
    RestartInstance(req: RestartInstanceRequest, cb?: (error: string, rep: RestartInstanceResponse) => void): Promise<RestartInstanceResponse>;
    /**
     * 查询集群列表
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 本接口(CreateAuditLogFile)用于创建云数据库实例的审计日志文件。
     */
    CreateAuditLogFile(req: CreateAuditLogFileRequest, cb?: (error: string, rep: CreateAuditLogFileResponse) => void): Promise<CreateAuditLogFileResponse>;
    /**
     * 隔离集群
     */
    IsolateCluster(req: IsolateClusterRequest, cb?: (error: string, rep: IsolateClusterResponse) => void): Promise<IsolateClusterResponse>;
    /**
     * 查询新购集群价格
     */
    InquirePriceCreate(req: InquirePriceCreateRequest, cb?: (error: string, rep: InquirePriceCreateResponse) => void): Promise<InquirePriceCreateResponse>;
    /**
     * 此接口（DescribeBackupDownloadUrl）用于查询集群备份文件下载地址。
     */
    DescribeBackupDownloadUrl(req: DescribeBackupDownloadUrlRequest, cb?: (error: string, rep: DescribeBackupDownloadUrlResponse) => void): Promise<DescribeBackupDownloadUrlResponse>;
    /**
     * 更换集群vpc
     */
    SwitchClusterVpc(req: SwitchClusterVpcRequest, cb?: (error: string, rep: SwitchClusterVpcResponse) => void): Promise<SwitchClusterVpcResponse>;
    /**
     * 安全组批量绑定云资源
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 删除从可用区
     */
    RemoveClusterSlaveZone(req: RemoveClusterSlaveZoneRequest, cb?: (error: string, rep: RemoveClusterSlaveZoneResponse) => void): Promise<RemoveClusterSlaveZoneResponse>;
    /**
     * 修改集群名称
     */
    ModifyClusterName(req: ModifyClusterNameRequest, cb?: (error: string, rep: ModifyClusterNameResponse) => void): Promise<ModifyClusterNameResponse>;
    /**
     * 本接口(SwitchProxyVpc)更换数据库代理vpc
     */
    SwitchProxyVpc(req: SwitchProxyVpcRequest, cb?: (error: string, rep: SwitchProxyVpcResponse) => void): Promise<SwitchProxyVpcResponse>;
    /**
     * 该接口（DescribeClusterDetail）显示集群详情
     */
    DescribeClusterDetail(req: DescribeClusterDetailRequest, cb?: (error: string, rep: DescribeClusterDetailResponse) => void): Promise<DescribeClusterDetailResponse>;
    /**
     * 获取实例的审计规则
     */
    DescribeAuditRuleWithInstanceIds(req: DescribeAuditRuleWithInstanceIdsRequest, cb?: (error: string, rep: DescribeAuditRuleWithInstanceIdsResponse) => void): Promise<DescribeAuditRuleWithInstanceIdsResponse>;
    /**
     * 本接口(IsolateInstance)用于隔离实例。
     */
    IsolateInstance(req: IsolateInstanceRequest, cb?: (error: string, rep: IsolateInstanceResponse) => void): Promise<IsolateInstanceResponse>;
    /**
     * 获取指定集群的备份配置信息，包括全量备份时间段，备份文件保留时间
     */
    DescribeBackupConfig(req: DescribeBackupConfigRequest, cb?: (error: string, rep: DescribeBackupConfigResponse) => void): Promise<DescribeBackupConfigResponse>;
    /**
     * 账号所有权限
     */
    DescribeAccountAllGrantPrivileges(req: DescribeAccountAllGrantPrivilegesRequest, cb?: (error: string, rep: DescribeAccountAllGrantPrivilegesResponse) => void): Promise<DescribeAccountAllGrantPrivilegesResponse>;
    /**
     * 查询续费集群价格
     */
    InquirePriceRenew(req: InquirePriceRenewRequest, cb?: (error: string, rep: InquirePriceRenewResponse) => void): Promise<InquirePriceRenewResponse>;
    /**
     * 此接口（DescribeBinlogDownloadUrl）用于查询Binlog的下载地址。
     */
    DescribeBinlogDownloadUrl(req: DescribeBinlogDownloadUrlRequest, cb?: (error: string, rep: DescribeBinlogDownloadUrlResponse) => void): Promise<DescribeBinlogDownloadUrlResponse>;
    /**
     * 本接口(DescribeAccounts)用于查询数据库管理账号。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 根据计费订单id查询资源列表
     */
    DescribeResourcesByDealName(req: DescribeResourcesByDealNameRequest, cb?: (error: string, rep: DescribeResourcesByDealNameResponse) => void): Promise<DescribeResourcesByDealNameResponse>;
    /**
     * 此接口（ExportInstanceSlowQueries）用于导出实例慢日志。
     */
    ExportInstanceSlowQueries(req: ExportInstanceSlowQueriesRequest, cb?: (error: string, rep: ExportInstanceSlowQueriesResponse) => void): Promise<ExportInstanceSlowQueriesResponse>;
    /**
     * 暂停serverless集群
     */
    PauseServerless(req: PauseServerlessRequest, cb?: (error: string, rep: PauseServerlessResponse) => void): Promise<PauseServerlessResponse>;
    /**
     * 修改集群参数
     */
    ModifyClusterParam(req: ModifyClusterParamRequest, cb?: (error: string, rep: ModifyClusterParamResponse) => void): Promise<ModifyClusterParamResponse>;
    /**
     * 升级实例
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 创建集群
     */
    CreateClusters(req: CreateClustersRequest, cb?: (error: string, rep: CreateClustersResponse) => void): Promise<CreateClustersResponse>;
    /**
     * 此接口（DescribeBinlogs）用来查询集群Binlog日志列表。
     */
    DescribeBinlogs(req: DescribeBinlogsRequest, cb?: (error: string, rep: DescribeBinlogsResponse) => void): Promise<DescribeBinlogsResponse>;
    /**
     * 创建账号
     */
    CreateAccounts(req: CreateAccountsRequest, cb?: (error: string, rep: CreateAccountsResponse) => void): Promise<CreateAccountsResponse>;
    /**
     * 升级预付费存储
     */
    ModifyClusterStorage(req: ModifyClusterStorageRequest, cb?: (error: string, rep: ModifyClusterStorageResponse) => void): Promise<ModifyClusterStorageResponse>;
    /**
     * 本接口(ActivateInstance)用于恢复已隔离的实例访问。
     */
    ActivateInstance(req: ActivateInstanceRequest, cb?: (error: string, rep: ActivateInstanceResponse) => void): Promise<ActivateInstanceResponse>;
    /**
     * 查询实例安全组信息
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 本接口(DescribeAuditLogFiles)用于查询云数据库实例的审计日志文件。
     */
    DescribeAuditLogFiles(req: DescribeAuditLogFilesRequest, cb?: (error: string, rep: DescribeAuditLogFilesResponse) => void): Promise<DescribeAuditLogFilesResponse>;
    /**
     * 本接口(DescribeZones)用于查询可售卖地域可用区信息。
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * SetRenewFlag设置实例的自动续费功能
     */
    SetRenewFlag(req: SetRenewFlagRequest, cb?: (error: string, rep: SetRenewFlagResponse) => void): Promise<SetRenewFlagResponse>;
    /**
     * 下线集群
     */
    OfflineCluster(req: OfflineClusterRequest, cb?: (error: string, rep: OfflineClusterResponse) => void): Promise<OfflineClusterResponse>;
    /**
     * 修改审计规则模版
     */
    ModifyAuditRuleTemplates(req: ModifyAuditRuleTemplatesRequest, cb?: (error: string, rep: ModifyAuditRuleTemplatesResponse) => void): Promise<ModifyAuditRuleTemplatesResponse>;
    /**
     * 批量授权账号权限
     */
    GrantAccountPrivileges(req: GrantAccountPrivilegesRequest, cb?: (error: string, rep: GrantAccountPrivilegesResponse) => void): Promise<GrantAccountPrivilegesResponse>;
    /**
     * 本接口(SearchClusterTables)搜索集群数据表列表
     */
    SearchClusterTables(req: SearchClusterTablesRequest, cb?: (error: string, rep: SearchClusterTablesResponse) => void): Promise<SearchClusterTablesResponse>;
    /**
     * 切换到从可用区
     */
    SwitchClusterZone(req: SwitchClusterZoneRequest, cb?: (error: string, rep: SwitchClusterZoneResponse) => void): Promise<SwitchClusterZoneResponse>;
    /**
     * 安全组批量解绑云资源
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 本接口(SearchClusterDatabases)搜索集群database列表
     */
    SearchClusterDatabases(req: SearchClusterDatabasesRequest, cb?: (error: string, rep: SearchClusterDatabasesResponse) => void): Promise<SearchClusterDatabasesResponse>;
    /**
     * 此接口（DescribeInstanceSlowQueries）用于查询实例慢查询日志。
     */
    DescribeInstanceSlowQueries(req: DescribeInstanceSlowQueriesRequest, cb?: (error: string, rep: DescribeInstanceSlowQueriesResponse) => void): Promise<DescribeInstanceSlowQueriesResponse>;
    /**
     * 指定时间和集群查询是否可回滚
     */
    DescribeRollbackTimeValidity(req: DescribeRollbackTimeValidityRequest, cb?: (error: string, rep: DescribeRollbackTimeValidityResponse) => void): Promise<DescribeRollbackTimeValidityResponse>;
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 本接口（AddInstances）用于集群添加实例
     */
    AddInstances(req: AddInstancesRequest, cb?: (error: string, rep: AddInstancesResponse) => void): Promise<AddInstancesResponse>;
}

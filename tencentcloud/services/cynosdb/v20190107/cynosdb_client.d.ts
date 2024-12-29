import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpgradeProxyVersionResponse, DescribeInstanceCLSLogDeliveryResponse, ModifyMaintainPeriodConfigRequest, ModifyClusterStorageRequest, DescribeResourcePackageDetailResponse, SearchClusterTablesRequest, DescribeMaintainPeriodRequest, DescribeClusterDatabaseTablesRequest, DescribeClusterParamsResponse, RefundResourcePackageResponse, ModifyInstanceNameResponse, DescribeParamTemplatesRequest, DescribeAuditInstanceListResponse, DescribeProxiesResponse, DescribeClusterDetailDatabasesRequest, CreateClustersResponse, ModifyInstanceParamRequest, ModifyInstanceUpgradeLimitDaysResponse, StopCLSDeliveryRequest, ExportResourcePackageDeductDetailsResponse, DescribeClustersRequest, OpenReadOnlyInstanceExclusiveAccessResponse, SearchClusterDatabasesResponse, CreateParamTemplateRequest, DescribeClusterDetailRequest, ModifyResourcePackageNameRequest, UpgradeProxyRequest, DescribeBinlogDownloadUrlResponse, SwitchClusterVpcRequest, CloseProxyRequest, DescribeClusterPasswordComplexityResponse, DescribeAuditRuleWithInstanceIdsRequest, DescribeClusterDatabasesResponse, DescribeInstanceParamsRequest, ModifyBinlogSaveDaysRequest, AddInstancesResponse, AssociateSecurityGroupsResponse, CreateProxyEndPointRequest, DescribeParamTemplateDetailRequest, ModifyAccountPrivilegesRequest, ExportResourcePackageDeductDetailsRequest, StartCLSDeliveryResponse, UpgradeProxyResponse, DescribeInstanceSpecsRequest, DescribeProxyNodesResponse, DescribeZonesResponse, SearchClusterTablesResponse, ModifyParamTemplateRequest, OpenAuditServiceResponse, DescribeChangedParamsAfterUpgradeResponse, ModifyServerlessStrategyResponse, DescribeProxyNodesRequest, DescribeAuditLogsRequest, InquirePriceCreateResponse, CreateClustersRequest, DescribeClusterParamLogsRequest, CloseProxyResponse, DescribeResourcePackageSaleSpecRequest, UnbindClusterResourcePackagesResponse, RollBackClusterResponse, DescribeClusterInstanceGrpsResponse, ModifyBackupConfigResponse, ModifyClusterDatabaseRequest, DescribeServerlessStrategyResponse, ModifyMaintainPeriodConfigResponse, DisassociateSecurityGroupsRequest, ModifyBackupNameRequest, DescribeClusterParamsRequest, ModifyAccountHostResponse, DescribeAccountAllGrantPrivilegesRequest, DeleteCLSDeliveryRequest, CreateCLSDeliveryResponse, DescribeServerlessInstanceSpecsResponse, DescribeBinlogsRequest, InquirePriceModifyResponse, ModifyProxyRwSplitRequest, DescribeResourcePackageListResponse, ModifyAuditRuleTemplatesRequest, DescribeProxiesRequest, AssociateSecurityGroupsRequest, CloseProxyEndPointRequest, DescribeBinlogsResponse, AddClusterSlaveZoneResponse, DescribeProxySpecsResponse, BindClusterResourcePackagesRequest, IsolateInstanceResponse, CopyClusterPasswordComplexityResponse, DescribeClusterTransparentEncryptInfoRequest, DeleteParamTemplateRequest, RevokeAccountPrivilegesResponse, DescribeClusterDetailDatabasesResponse, CreateParamTemplateResponse, DescribeAccountAllGrantPrivilegesResponse, DescribeSupportProxyVersionRequest, DescribeProxySpecsRequest, ResumeServerlessRequest, DeleteAuditLogFileResponse, ModifyClusterDatabaseResponse, DescribeDBSecurityGroupsRequest, UpgradeInstanceRequest, DescribeInstanceParamsResponse, SwitchClusterVpcResponse, DescribeZonesRequest, StopCLSDeliveryResponse, CreateAuditLogFileResponse, PauseServerlessResponse, DescribeInstanceDetailResponse, DeleteAccountsResponse, CreateResourcePackageResponse, ModifyBinlogConfigRequest, SetRenewFlagResponse, CreateClusterDatabaseResponse, DescribeClustersResponse, DescribeBackupConfigResponse, DescribeParamTemplatesResponse, DescribeProjectSecurityGroupsRequest, DescribeBackupDownloadUrlRequest, CopyClusterPasswordComplexityRequest, DescribeClusterInstanceGroupsResponse, CreateProxyEndPointResponse, OpenWanRequest, ModifyAccountPrivilegesResponse, InquirePriceCreateRequest, ModifyAuditServiceRequest, ModifyClusterNameResponse, ExportInstanceSlowQueriesRequest, ModifyAuditServiceResponse, ResumeServerlessResponse, SwitchProxyVpcResponse, StartCLSDeliveryRequest, DescribeChangedParamsAfterUpgradeRequest, SwitchProxyVpcRequest, RestartInstanceResponse, DescribeBinlogSaveDaysRequest, DescribeClusterTransparentEncryptInfoResponse, ActivateInstanceResponse, IsolateClusterRequest, AddInstancesRequest, DescribeInstanceErrorLogsRequest, DescribeInstanceDetailRequest, DeleteAccountsRequest, OpenClusterTransparentEncryptRequest, ReloadBalanceProxyNodeRequest, DescribeAccountsResponse, CreateClusterDatabaseRequest, OfflineInstanceRequest, CreateProxyResponse, RollBackClusterRequest, OpenClusterTransparentEncryptResponse, ModifyBackupConfigRequest, DisassociateSecurityGroupsResponse, DescribeClusterDatabasesRequest, RemoveClusterSlaveZoneRequest, DescribeRollbackTimeRangeRequest, InquirePriceRenewRequest, DescribeAccountPrivilegesResponse, CreateResourcePackageRequest, CloseProxyEndPointResponse, DescribeBackupConfigRequest, DescribeAccountsRequest, DescribeRollbackTimeRangeResponse, ModifyBackupNameResponse, DescribeAuditLogFilesResponse, SwitchClusterZoneResponse, DescribeClusterPasswordComplexityRequest, CreateAccountsResponse, CloseWanResponse, DescribeInstancesResponse, ModifyResourcePackagesDeductionPriorityResponse, CloseWanRequest, UpgradeProxyVersionRequest, ModifyResourcePackageClustersRequest, DescribeFlowResponse, ExportInstanceErrorLogsRequest, ActivateInstanceRequest, DeleteClusterDatabaseRequest, ModifyVipVportRequest, ModifyDBInstanceSecurityGroupsResponse, DescribeClusterParamLogsResponse, DescribeClusterInstanceGrpsRequest, DescribeResourcesByDealNameResponse, CreateAccountsRequest, DeleteAuditRuleTemplatesRequest, ExportInstanceSlowQueriesResponse, SwitchClusterZoneRequest, InquirePriceModifyRequest, ModifyResourcePackagesDeductionPriorityRequest, RemoveClusterSlaveZoneResponse, RenewClustersRequest, OpenClusterReadOnlyInstanceGroupAccessResponse, DescribeAuditRuleWithInstanceIdsResponse, SearchClusterDatabasesRequest, ModifyProxyDescResponse, ModifyClusterSlaveZoneResponse, RollbackToNewClusterRequest, ModifyProxyDescRequest, ReloadBalanceProxyNodeResponse, CloseAuditServiceResponse, ModifyParamTemplateResponse, BindClusterResourcePackagesResponse, CreateProxyRequest, DescribeResourcePackageSaleSpecResponse, DescribeResourcesByDealNameRequest, DescribeAuditInstanceListRequest, DescribeInstanceSlowQueriesResponse, DescribeInstancesRequest, CloseClusterPasswordComplexityResponse, DescribeBackupDownloadUrlResponse, DescribeBinlogConfigRequest, CreateAuditRuleTemplateRequest, PauseServerlessRequest, OpenWanResponse, OfflineClusterResponse, ModifyAccountHostRequest, DescribeFlowRequest, DescribeClusterDatabaseTablesResponse, OpenReadOnlyInstanceExclusiveAccessRequest, CreateBackupRequest, CreateCLSDeliveryRequest, DescribeMaintainPeriodResponse, DescribeBackupListResponse, DescribeResourcePackageDetailRequest, ModifyClusterParamRequest, OfflineInstanceResponse, CreateAuditLogFileRequest, ModifyClusterSlaveZoneRequest, DescribeInstanceErrorLogsResponse, DescribeSupportProxyVersionResponse, DeleteClusterDatabaseResponse, RestartInstanceRequest, DescribeAccountPrivilegesRequest, ModifyAccountParamsResponse, DescribeInstanceSpecsResponse, DescribeClusterDetailResponse, DescribeInstanceSlowQueriesRequest, ModifyResourcePackageClustersResponse, ModifyClusterNameRequest, RefundResourcePackageRequest, DescribeBinlogDownloadUrlRequest, ModifyInstanceNameRequest, UpgradeClusterVersionResponse, DescribeDBSecurityGroupsResponse, DeleteParamTemplateResponse, DescribeTasksResponse, OpenClusterPasswordComplexityRequest, DescribeAuditLogsResponse, DescribeInstancesWithinSameClusterRequest, ModifyAccountDescriptionResponse, SetRenewFlagRequest, DescribeServerlessInstanceSpecsRequest, AddClusterSlaveZoneRequest, DescribeTasksRequest, ModifyClusterStorageResponse, ModifyInstanceUpgradeLimitDaysRequest, CloseClusterPasswordComplexityRequest, DescribeIsolatedInstancesRequest, ModifyAccountParamsRequest, DescribeAuditRuleTemplatesResponse, DeleteBackupResponse, DescribeProjectSecurityGroupsResponse, OfflineClusterRequest, ResetAccountPasswordResponse, DescribeClusterInstanceGroupsRequest, OpenAuditServiceRequest, ModifyResourcePackageNameResponse, DescribeBackupListRequest, ExportInstanceErrorLogsResponse, GrantAccountPrivilegesRequest, IsolateClusterResponse, RenewClustersResponse, ModifyVipVportResponse, ModifyDBInstanceSecurityGroupsRequest, CloseAuditServiceRequest, ModifyClusterPasswordComplexityResponse, UpgradeClusterVersionRequest, ModifyClusterParamResponse, ModifyClusterPasswordComplexityRequest, UnbindClusterResourcePackagesRequest, ModifyInstanceParamResponse, CreateBackupResponse, DescribeInstancesWithinSameClusterResponse, RollbackToNewClusterResponse, ModifyProxyRwSplitResponse, ModifyAccountDescriptionRequest, DescribeInstanceCLSLogDeliveryRequest, UpgradeInstanceResponse, CreateAuditRuleTemplateResponse, DescribeResourcePackageListRequest, RevokeAccountPrivilegesRequest, OpenClusterPasswordComplexityResponse, OpenClusterReadOnlyInstanceGroupAccessRequest, DescribeAuditRuleTemplatesRequest, IsolateInstanceRequest, ModifyServerlessStrategyRequest, DescribeBinlogConfigResponse, DescribeAuditLogFilesRequest, DeleteAuditLogFileRequest, DescribeIsolatedInstancesResponse, GrantAccountPrivilegesResponse, ModifyBinlogConfigResponse, ResetAccountPasswordRequest, DescribeServerlessStrategyRequest, DescribeBinlogSaveDaysResponse, DeleteBackupRequest, DescribeParamTemplateDetailResponse, ModifyBinlogSaveDaysResponse, DeleteAuditRuleTemplatesResponse, DeleteCLSDeliveryResponse, InquirePriceRenewResponse, ModifyAuditRuleTemplatesResponse } from "./cynosdb_models";
/**
 * cynosdb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（ResumeServerless）用于恢复 serverless 集群（启动暂停的集群）。
     */
    ResumeServerless(req: ResumeServerlessRequest, cb?: (error: string, rep: ResumeServerlessResponse) => void): Promise<ResumeServerlessResponse>;
    /**
     * 本接口（UpgradeProxyVersion）用于升级数据库代理版本。
     */
    UpgradeProxyVersion(req: UpgradeProxyVersionRequest, cb?: (error: string, rep: UpgradeProxyVersionResponse) => void): Promise<UpgradeProxyVersionResponse>;
    /**
     * 本接口（DescribeBackupConfig）用于获取指定集群的备份配置信息，包括全量备份时间段、备份文件保留时间。
     */
    DescribeBackupConfig(req: DescribeBackupConfigRequest, cb?: (error: string, rep: DescribeBackupConfigResponse) => void): Promise<DescribeBackupConfigResponse>;
    /**
     * 该接口（ModifyBinlogConfig）用于修改Binlog配置
     */
    ModifyBinlogConfig(req: ModifyBinlogConfigRequest, cb?: (error: string, rep: ModifyBinlogConfigResponse) => void): Promise<ModifyBinlogConfigResponse>;
    /**
     * 本接口（CreateProxyEndPoint）用于创建数据库代理连接点。
     */
    CreateProxyEndPoint(req: CreateProxyEndPointRequest, cb?: (error: string, rep: CreateProxyEndPointResponse) => void): Promise<CreateProxyEndPointResponse>;
    /**
     * 本接口（ModifyResourcePackageClusters）用于修改资源包与集群之间的绑定关系。
     */
    ModifyResourcePackageClusters(req: ModifyResourcePackageClustersRequest, cb?: (error: string, rep: ModifyResourcePackageClustersResponse) => void): Promise<ModifyResourcePackageClustersResponse>;
    /**
     * 本接口（CreateAuditRuleTemplate）用于创建审计规则模板。
     */
    CreateAuditRuleTemplate(req: CreateAuditRuleTemplateRequest, cb?: (error: string, rep: CreateAuditRuleTemplateResponse) => void): Promise<CreateAuditRuleTemplateResponse>;
    /**
     * 本接口（GrantAccountPrivileges）用于批量授权账号权限。
     */
    GrantAccountPrivileges(req: GrantAccountPrivilegesRequest, cb?: (error: string, rep: GrantAccountPrivilegesResponse) => void): Promise<GrantAccountPrivilegesResponse>;
    /**
     * 本接口（DescribeClusterParamLogs）用于查询参数修改记录。
     */
    DescribeClusterParamLogs(req: DescribeClusterParamLogsRequest, cb?: (error: string, rep: DescribeClusterParamLogsResponse) => void): Promise<DescribeClusterParamLogsResponse>;
    /**
     * 本接口（ModifyMaintainPeriodConfig）用于修改维护时间配置。
     */
    ModifyMaintainPeriodConfig(req: ModifyMaintainPeriodConfigRequest, cb?: (error: string, rep: ModifyMaintainPeriodConfigResponse) => void): Promise<ModifyMaintainPeriodConfigResponse>;
    /**
     * 本接口（CopyClusterPasswordComplexity）用于复制集群密码复杂度。
     */
    CopyClusterPasswordComplexity(req: CopyClusterPasswordComplexityRequest, cb?: (error: string, rep: CopyClusterPasswordComplexityResponse) => void): Promise<CopyClusterPasswordComplexityResponse>;
    /**
     * 本接口（CloseAuditService）用于关闭 TDSQL-C MySQL 实例的数据库审计服务。
     */
    CloseAuditService(req: CloseAuditServiceRequest, cb?: (error: string, rep: CloseAuditServiceResponse) => void): Promise<CloseAuditServiceResponse>;
    /**
     * 本接口（DescribeSupportProxyVersion）用于查询支持的数据库代理版本。
     */
    DescribeSupportProxyVersion(req: DescribeSupportProxyVersionRequest, cb?: (error: string, rep: DescribeSupportProxyVersionResponse) => void): Promise<DescribeSupportProxyVersionResponse>;
    /**
     * 本接口(CreateAuditLogFile)用于创建云数据库实例的审计日志文件。
     */
    CreateAuditLogFile(req: CreateAuditLogFileRequest, cb?: (error: string, rep: CreateAuditLogFileResponse) => void): Promise<CreateAuditLogFileResponse>;
    /**
     * 续费集群
     */
    RenewClusters(req: RenewClustersRequest, cb?: (error: string, rep: RenewClustersResponse) => void): Promise<RenewClustersResponse>;
    /**
     * 本接口（CloseProxyEndPoint）用于关闭数据库代理连接地址。
     */
    CloseProxyEndPoint(req: CloseProxyEndPointRequest, cb?: (error: string, rep: CloseProxyEndPointResponse) => void): Promise<CloseProxyEndPointResponse>;
    /**
     * 本接口（CloseProxy）用于关闭集群的数据库代理服务。
     */
    CloseProxy(req: CloseProxyRequest, cb?: (error: string, rep: CloseProxyResponse) => void): Promise<CloseProxyResponse>;
    /**
     * 本接口（DescribeProxySpecs）用于查询数据库代理规格。
     */
    DescribeProxySpecs(req: DescribeProxySpecsRequest, cb?: (error: string, rep: DescribeProxySpecsResponse) => void): Promise<DescribeProxySpecsResponse>;
    /**
     * 变配预付费集群询价
     */
    InquirePriceModify(req: InquirePriceModifyRequest, cb?: (error: string, rep: InquirePriceModifyResponse) => void): Promise<InquirePriceModifyResponse>;
    /**
     * 本接口（SwitchProxyVpc）用于更换数据库代理vpc。
     */
    SwitchProxyVpc(req: SwitchProxyVpcRequest, cb?: (error: string, rep: SwitchProxyVpcResponse) => void): Promise<SwitchProxyVpcResponse>;
    /**
     * 该接口（DescribeClusterDetail）用于显示集群详情。
     */
    DescribeClusterDetail(req: DescribeClusterDetailRequest, cb?: (error: string, rep: DescribeClusterDetailResponse) => void): Promise<DescribeClusterDetailResponse>;
    /**
     * 本接口（DescribeTasks）用于查询任务列表。
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 本接口（DescribeInstanceSpecs）用于查询购买页可购买的实例规格。
     */
    DescribeInstanceSpecs(req: DescribeInstanceSpecsRequest, cb?: (error: string, rep: DescribeInstanceSpecsResponse) => void): Promise<DescribeInstanceSpecsResponse>;
    /**
     * 本接口（DescribeBinlogDownloadUrl）用于查询 Binlog 的下载地址。
     */
    DescribeBinlogDownloadUrl(req: DescribeBinlogDownloadUrlRequest, cb?: (error: string, rep: DescribeBinlogDownloadUrlResponse) => void): Promise<DescribeBinlogDownloadUrlResponse>;
    /**
     * 本接口（DescribeResourcesByDealName）用于查询订单关联实例。
     */
    DescribeResourcesByDealName(req: DescribeResourcesByDealNameRequest, cb?: (error: string, rep: DescribeResourcesByDealNameResponse) => void): Promise<DescribeResourcesByDealNameResponse>;
    /**
     * 本接口（ModifyClusterStorage）用于调整包年包月存储容量。
     */
    ModifyClusterStorage(req: ModifyClusterStorageRequest, cb?: (error: string, rep: ModifyClusterStorageResponse) => void): Promise<ModifyClusterStorageResponse>;
    /**
     * 本接口（ActivateInstance）用于恢复已隔离的实例访问。
     */
    ActivateInstance(req: ActivateInstanceRequest, cb?: (error: string, rep: ActivateInstanceResponse) => void): Promise<ActivateInstanceResponse>;
    /**
     * 本接口（DescribeProxyNodes）用于查询代理节点列表。
     */
    DescribeProxyNodes(req: DescribeProxyNodesRequest, cb?: (error: string, rep: DescribeProxyNodesResponse) => void): Promise<DescribeProxyNodesResponse>;
    /**
     * 本接口（DisassociateSecurityGroups）用于安全组批量解绑云资源。
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 查询集群透明加密信息
     */
    DescribeClusterTransparentEncryptInfo(req: DescribeClusterTransparentEncryptInfoRequest, cb?: (error: string, rep: DescribeClusterTransparentEncryptInfoResponse) => void): Promise<DescribeClusterTransparentEncryptInfoResponse>;
    /**
     * 本接口（ExportInstanceSlowQueries）用于导出实例慢日志。
     */
    ExportInstanceSlowQueries(req: ExportInstanceSlowQueriesRequest, cb?: (error: string, rep: ExportInstanceSlowQueriesResponse) => void): Promise<ExportInstanceSlowQueriesResponse>;
    /**
     * 本接口（DeleteCLSDelivery）用于删除日志投递。
     */
    DeleteCLSDelivery(req: DeleteCLSDeliveryRequest, cb?: (error: string, rep: DeleteCLSDeliveryResponse) => void): Promise<DeleteCLSDeliveryResponse>;
    /**
     * 本接口（DescribeChangedParamsAfterUpgrade）用于查询升降配运行参数对比。
     */
    DescribeChangedParamsAfterUpgrade(req: DescribeChangedParamsAfterUpgradeRequest, cb?: (error: string, rep: DescribeChangedParamsAfterUpgradeResponse) => void): Promise<DescribeChangedParamsAfterUpgradeResponse>;
    /**
     * 本接口（DescribeAccountPrivileges）用于查询账号已有权限。
     */
    DescribeAccountPrivileges(req: DescribeAccountPrivilegesRequest, cb?: (error: string, rep: DescribeAccountPrivilegesResponse) => void): Promise<DescribeAccountPrivilegesResponse>;
    /**
     * 本接口（CloseClusterPasswordComplexity）用于关闭集群密码复杂度。
     */
    CloseClusterPasswordComplexity(req: CloseClusterPasswordComplexityRequest, cb?: (error: string, rep: CloseClusterPasswordComplexityResponse) => void): Promise<CloseClusterPasswordComplexityResponse>;
    /**
     * 本接口（RollBackCluster）用于集群回档。
     */
    RollBackCluster(req: RollBackClusterRequest, cb?: (error: string, rep: RollBackClusterResponse) => void): Promise<RollBackClusterResponse>;
    /**
     * 此接口（DescribeBinlogSaveDays）用于查询集群的Binlog保留天数。
     */
    DescribeBinlogSaveDays(req: DescribeBinlogSaveDaysRequest, cb?: (error: string, rep: DescribeBinlogSaveDaysResponse) => void): Promise<DescribeBinlogSaveDaysResponse>;
    /**
     * 本接口（SearchClusterTables）用于搜索集群数据表列表。
     */
    SearchClusterTables(req: SearchClusterTablesRequest, cb?: (error: string, rep: SearchClusterTablesResponse) => void): Promise<SearchClusterTablesResponse>;
    /**
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。 该接口已废弃，推荐使用DescribeClusterInstanceGroups
     */
    DescribeClusterInstanceGrps(req: DescribeClusterInstanceGrpsRequest, cb?: (error: string, rep: DescribeClusterInstanceGrpsResponse) => void): Promise<DescribeClusterInstanceGrpsResponse>;
    /**
     * 本接口（DescribeIsolatedInstances）用于查询回收站实例列表。
     */
    DescribeIsolatedInstances(req: DescribeIsolatedInstancesRequest, cb?: (error: string, rep: DescribeIsolatedInstancesResponse) => void): Promise<DescribeIsolatedInstancesResponse>;
    /**
     * 本接口（DescribeInstanceErrorLogs）用于查询实例错误日志列表。
     */
    DescribeInstanceErrorLogs(req: DescribeInstanceErrorLogsRequest, cb?: (error: string, rep: DescribeInstanceErrorLogsResponse) => void): Promise<DescribeInstanceErrorLogsResponse>;
    /**
     * 本接口（ModifyClusterName）用于修改集群名称。
     */
    ModifyClusterName(req: ModifyClusterNameRequest, cb?: (error: string, rep: ModifyClusterNameResponse) => void): Promise<ModifyClusterNameResponse>;
    /**
     * 本接口（ModifyProxyRwSplit）用于配置数据库代理读写分离。
     */
    ModifyProxyRwSplit(req: ModifyProxyRwSplitRequest, cb?: (error: string, rep: ModifyProxyRwSplitResponse) => void): Promise<ModifyProxyRwSplitResponse>;
    /**
     * 本接口（ModifyVipVport）用于修改实例组ip，端口。
     */
    ModifyVipVport(req: ModifyVipVportRequest, cb?: (error: string, rep: ModifyVipVportResponse) => void): Promise<ModifyVipVportResponse>;
    /**
     * 本接口（DeleteAuditRuleTemplates）用于删除审计规则模板。
     */
    DeleteAuditRuleTemplates(req: DeleteAuditRuleTemplatesRequest, cb?: (error: string, rep: DeleteAuditRuleTemplatesResponse) => void): Promise<DeleteAuditRuleTemplatesResponse>;
    /**
     * 本接口（ModifyProxyDesc）用于修改数据库代理描述。
     */
    ModifyProxyDesc(req: ModifyProxyDescRequest, cb?: (error: string, rep: ModifyProxyDescResponse) => void): Promise<ModifyProxyDescResponse>;
    /**
     * 本接口（CreateParamTemplate）用于创建参数模板。
     */
    CreateParamTemplate(req: CreateParamTemplateRequest, cb?: (error: string, rep: CreateParamTemplateResponse) => void): Promise<CreateParamTemplateResponse>;
    /**
     * 本接口（ModifyClusterSlaveZone）用于变更集群的备可用区。
     */
    ModifyClusterSlaveZone(req: ModifyClusterSlaveZoneRequest, cb?: (error: string, rep: ModifyClusterSlaveZoneResponse) => void): Promise<ModifyClusterSlaveZoneResponse>;
    /**
     * 本接口（ModifyAccountParams）用于修改账号配置。
     */
    ModifyAccountParams(req: ModifyAccountParamsRequest, cb?: (error: string, rep: ModifyAccountParamsResponse) => void): Promise<ModifyAccountParamsResponse>;
    /**
     * 本接口（ModifyClusterPasswordComplexity）用于修改/开启集群密码复杂度。
     */
    ModifyClusterPasswordComplexity(req: ModifyClusterPasswordComplexityRequest, cb?: (error: string, rep: ModifyClusterPasswordComplexityResponse) => void): Promise<ModifyClusterPasswordComplexityResponse>;
    /**
     * 本接口（CreateBackup）用于为集群创建手动备份。
     */
    CreateBackup(req: CreateBackupRequest, cb?: (error: string, rep: CreateBackupResponse) => void): Promise<CreateBackupResponse>;
    /**
     * 本接口（OfflineInstance）用于销毁实例。
     */
    OfflineInstance(req: OfflineInstanceRequest, cb?: (error: string, rep: OfflineInstanceResponse) => void): Promise<OfflineInstanceResponse>;
    /**
     * 本接口（IsolateCluster）用于隔离集群。
     */
    IsolateCluster(req: IsolateClusterRequest, cb?: (error: string, rep: IsolateClusterResponse) => void): Promise<IsolateClusterResponse>;
    /**
     * 本接口（DescribeInstancesWithinSameCluster）用于查询同一集群下实例列表
     */
    DescribeInstancesWithinSameCluster(req: DescribeInstancesWithinSameClusterRequest, cb?: (error: string, rep: DescribeInstancesWithinSameClusterResponse) => void): Promise<DescribeInstancesWithinSameClusterResponse>;
    /**
     * 本接口（RestartInstance）用于重启实例。
     */
    RestartInstance(req: RestartInstanceRequest, cb?: (error: string, rep: RestartInstanceResponse) => void): Promise<RestartInstanceResponse>;
    /**
     * 本接口（UpgradeProxy）用于升级数据库代理配置。
     */
    UpgradeProxy(req: UpgradeProxyRequest, cb?: (error: string, rep: UpgradeProxyResponse) => void): Promise<UpgradeProxyResponse>;
    /**
     * 本接口（DescribeClusters）用于查询集群列表。
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 本接口（CloseWan）用于关闭外网。
     */
    CloseWan(req: CloseWanRequest, cb?: (error: string, rep: CloseWanResponse) => void): Promise<CloseWanResponse>;
    /**
     * 本接口（DescribeProjectSecurityGroups）用于查询项目安全组信息。
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 本接口（ModifyClusterDatabase）用于修改数据库的账号授权。
     */
    ModifyClusterDatabase(req: ModifyClusterDatabaseRequest, cb?: (error: string, rep: ModifyClusterDatabaseResponse) => void): Promise<ModifyClusterDatabaseResponse>;
    /**
     * 本接口（ModifyAuditRuleTemplates）用于修改审计规则模板。
     */
    ModifyAuditRuleTemplates(req: ModifyAuditRuleTemplatesRequest, cb?: (error: string, rep: ModifyAuditRuleTemplatesResponse) => void): Promise<ModifyAuditRuleTemplatesResponse>;
    /**
     * 本接口（ModifyParamTemplate）用于修改用户参数模板。
     */
    ModifyParamTemplate(req: ModifyParamTemplateRequest, cb?: (error: string, rep: ModifyParamTemplateResponse) => void): Promise<ModifyParamTemplateResponse>;
    /**
     * 修改已绑定资源包抵扣优先级
     */
    ModifyResourcePackagesDeductionPriority(req: ModifyResourcePackagesDeductionPriorityRequest, cb?: (error: string, rep: ModifyResourcePackagesDeductionPriorityResponse) => void): Promise<ModifyResourcePackagesDeductionPriorityResponse>;
    /**
     * 本接口（DescribeInstanceParams）用于查询实例参数列表。
     */
    DescribeInstanceParams(req: DescribeInstanceParamsRequest, cb?: (error: string, rep: DescribeInstanceParamsResponse) => void): Promise<DescribeInstanceParamsResponse>;
    /**
     * 此接口（DescribeInstanceSlowQueries）用于查询实例慢日志详情。
     */
    DescribeInstanceSlowQueries(req: DescribeInstanceSlowQueriesRequest, cb?: (error: string, rep: DescribeInstanceSlowQueriesResponse) => void): Promise<DescribeInstanceSlowQueriesResponse>;
    /**
     * 本接口（DescribeClusterDatabases）用于获取集群数据库列表。
     */
    DescribeClusterDatabases(req: DescribeClusterDatabasesRequest, cb?: (error: string, rep: DescribeClusterDatabasesResponse) => void): Promise<DescribeClusterDatabasesResponse>;
    /**
     * 本接口（ModifyClusterParam）用于修改集群参数。
     */
    ModifyClusterParam(req: ModifyClusterParamRequest, cb?: (error: string, rep: ModifyClusterParamResponse) => void): Promise<ModifyClusterParamResponse>;
    /**
     * 本接口（CreateClusters）用于新购集群。
     */
    CreateClusters(req: CreateClustersRequest, cb?: (error: string, rep: CreateClustersResponse) => void): Promise<CreateClustersResponse>;
    /**
     * 本接口（CreateAccounts）用于创建用户账号。
     */
    CreateAccounts(req: CreateAccountsRequest, cb?: (error: string, rep: CreateAccountsResponse) => void): Promise<CreateAccountsResponse>;
    /**
     * 本接口（RollbackToNewCluster）用于回档到新集群。
     */
    RollbackToNewCluster(req: RollbackToNewClusterRequest, cb?: (error: string, rep: RollbackToNewClusterResponse) => void): Promise<RollbackToNewClusterResponse>;
    /**
     * 本接口（CreateResourcePackage）用于新购资源包。
     */
    CreateResourcePackage(req: CreateResourcePackageRequest, cb?: (error: string, rep: CreateResourcePackageResponse) => void): Promise<CreateResourcePackageResponse>;
    /**
     * 本接口(DescribeAuditLogFiles)用于查询云数据库实例的审计日志文件。
     */
    DescribeAuditLogFiles(req: DescribeAuditLogFilesRequest, cb?: (error: string, rep: DescribeAuditLogFilesResponse) => void): Promise<DescribeAuditLogFilesResponse>;
    /**
     * 本接口（DeleteClusterDatabase）用于删除数据库。
     */
    DeleteClusterDatabase(req: DeleteClusterDatabaseRequest, cb?: (error: string, rep: DeleteClusterDatabaseResponse) => void): Promise<DeleteClusterDatabaseResponse>;
    /**
     * 本接口（SwitchClusterZone）用于切换集群的主备可用区。
     */
    SwitchClusterZone(req: SwitchClusterZoneRequest, cb?: (error: string, rep: SwitchClusterZoneResponse) => void): Promise<SwitchClusterZoneResponse>;
    /**
     * 本接口（SearchClusterDatabases）用于搜索集群数据库列表。
     */
    SearchClusterDatabases(req: SearchClusterDatabasesRequest, cb?: (error: string, rep: SearchClusterDatabasesResponse) => void): Promise<SearchClusterDatabasesResponse>;
    /**
     * 本接口（AddInstances）用于集群添加实例。
     */
    AddInstances(req: AddInstancesRequest, cb?: (error: string, rep: AddInstancesResponse) => void): Promise<AddInstancesResponse>;
    /**
     * 本接口（ModifyInstanceUpgradeLimitDays）用于修改实例内核小版本的升级限制时间。
     */
    ModifyInstanceUpgradeLimitDays(req: ModifyInstanceUpgradeLimitDaysRequest, cb?: (error: string, rep: ModifyInstanceUpgradeLimitDaysResponse) => void): Promise<ModifyInstanceUpgradeLimitDaysResponse>;
    /**
     * 本接口（DeleteAccounts）用于删除用户账号。
     */
    DeleteAccounts(req: DeleteAccountsRequest, cb?: (error: string, rep: DeleteAccountsResponse) => void): Promise<DeleteAccountsResponse>;
    /**
     * 本接口（RevokeAccountPrivileges）用于批量回收账号权限。
     */
    RevokeAccountPrivileges(req: RevokeAccountPrivilegesRequest, cb?: (error: string, rep: RevokeAccountPrivilegesResponse) => void): Promise<RevokeAccountPrivilegesResponse>;
    /**
     * 本接口（OpenClusterReadOnlyInstanceGroupAccess）用于开启只读实例组接入。
     */
    OpenClusterReadOnlyInstanceGroupAccess(req: OpenClusterReadOnlyInstanceGroupAccessRequest, cb?: (error: string, rep: OpenClusterReadOnlyInstanceGroupAccessResponse) => void): Promise<OpenClusterReadOnlyInstanceGroupAccessResponse>;
    /**
     * 开通集群透明加密
     */
    OpenClusterTransparentEncrypt(req: OpenClusterTransparentEncryptRequest, cb?: (error: string, rep: OpenClusterTransparentEncryptResponse) => void): Promise<OpenClusterTransparentEncryptResponse>;
    /**
     * 本接口（DescribeParamTemplates）用于查询用户指定产品下的所有参数模板信息。
     */
    DescribeParamTemplates(req: DescribeParamTemplatesRequest, cb?: (error: string, rep: DescribeParamTemplatesResponse) => void): Promise<DescribeParamTemplatesResponse>;
    /**
     * 本接口（DeleteBackup）用于为集群删除手动备份，无法删除自动备份。
     */
    DeleteBackup(req: DeleteBackupRequest, cb?: (error: string, rep: DeleteBackupResponse) => void): Promise<DeleteBackupResponse>;
    /**
     * 查询serverless策略
     */
    DescribeServerlessStrategy(req: DescribeServerlessStrategyRequest, cb?: (error: string, rep: DescribeServerlessStrategyResponse) => void): Promise<DescribeServerlessStrategyResponse>;
    /**
     * 本接口（PauseServerless）用于暂停 serverless 集群。
     */
    PauseServerless(req: PauseServerlessRequest, cb?: (error: string, rep: PauseServerlessResponse) => void): Promise<PauseServerlessResponse>;
    /**
     * 本接口（ModifyAccountHost）用于修改账号主机。
     */
    ModifyAccountHost(req: ModifyAccountHostRequest, cb?: (error: string, rep: ModifyAccountHostResponse) => void): Promise<ModifyAccountHostResponse>;
    /**
     * 本接口（ResetAccountPassword）用于修改数据库账号密码。
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 本接口(DescribeInstanceDetail)用于查询实例详情。
     */
    DescribeInstanceDetail(req: DescribeInstanceDetailRequest, cb?: (error: string, rep: DescribeInstanceDetailResponse) => void): Promise<DescribeInstanceDetailResponse>;
    /**
     * 本接口（DescribeAuditInstanceList）用于获取数据库审计的实例列表。
     */
    DescribeAuditInstanceList(req: DescribeAuditInstanceListRequest, cb?: (error: string, rep: DescribeAuditInstanceListResponse) => void): Promise<DescribeAuditInstanceListResponse>;
    /**
     * 本接口（DescribeRollbackTimeRange）用于查询回档时间范围。
     */
    DescribeRollbackTimeRange(req: DescribeRollbackTimeRangeRequest, cb?: (error: string, rep: DescribeRollbackTimeRangeResponse) => void): Promise<DescribeRollbackTimeRangeResponse>;
    /**
     * 本接口（DescribeFlow）用于查询任务流信息。
     */
    DescribeFlow(req: DescribeFlowRequest, cb?: (error: string, rep: DescribeFlowResponse) => void): Promise<DescribeFlowResponse>;
    /**
     * 本接口（ModifyInstanceParam）用于修改实例参数。
     */
    ModifyInstanceParam(req: ModifyInstanceParamRequest, cb?: (error: string, rep: ModifyInstanceParamResponse) => void): Promise<ModifyInstanceParamResponse>;
    /**
     * 本接口（DescribeInstanceCLSLogDelivery）用于查询实例日志投递信息。
     */
    DescribeInstanceCLSLogDelivery(req: DescribeInstanceCLSLogDeliveryRequest, cb?: (error: string, rep: DescribeInstanceCLSLogDeliveryResponse) => void): Promise<DescribeInstanceCLSLogDeliveryResponse>;
    /**
     * 本接口（BindClusterResourcePackages）用于为集群绑定资源包。
     */
    BindClusterResourcePackages(req: BindClusterResourcePackagesRequest, cb?: (error: string, rep: BindClusterResourcePackagesResponse) => void): Promise<BindClusterResourcePackagesResponse>;
    /**
     * 查询Serverless实例可选规格
     */
    DescribeServerlessInstanceSpecs(req: DescribeServerlessInstanceSpecsRequest, cb?: (error: string, rep: DescribeServerlessInstanceSpecsResponse) => void): Promise<DescribeServerlessInstanceSpecsResponse>;
    /**
     * 本接口（DescribeAuditLogs）用于查询数据库审计日志。
     */
    DescribeAuditLogs(req: DescribeAuditLogsRequest, cb?: (error: string, rep: DescribeAuditLogsResponse) => void): Promise<DescribeAuditLogsResponse>;
    /**
     * 本接口（UnbindClusterResourcePackages）用于解除资源包与集群之间的绑定关系。
     */
    UnbindClusterResourcePackages(req: UnbindClusterResourcePackagesRequest, cb?: (error: string, rep: UnbindClusterResourcePackagesResponse) => void): Promise<UnbindClusterResourcePackagesResponse>;
    /**
     * 本接口（DescribeProxies）用于查询数据库代理列表。
     */
    DescribeProxies(req: DescribeProxiesRequest, cb?: (error: string, rep: DescribeProxiesResponse) => void): Promise<DescribeProxiesResponse>;
    /**
     * 本接口（OpenWan）用于开通外网。
     */
    OpenWan(req: OpenWanRequest, cb?: (error: string, rep: OpenWanResponse) => void): Promise<OpenWanResponse>;
    /**
     * 本接口（InquirePriceCreate）用于新购集群的价格查询。
     */
    InquirePriceCreate(req: InquirePriceCreateRequest, cb?: (error: string, rep: InquirePriceCreateResponse) => void): Promise<InquirePriceCreateResponse>;
    /**
     * 本接口（AssociateSecurityGroups）用于安全组批量绑定云资源。
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 该接口（DescribeBinlogConfig）用于查询binlog配置
     */
    DescribeBinlogConfig(req: DescribeBinlogConfigRequest, cb?: (error: string, rep: DescribeBinlogConfigResponse) => void): Promise<DescribeBinlogConfigResponse>;
    /**
     * 本接口（DescribeResourcePackageSaleSpec）用于查询资源包规格。
     */
    DescribeResourcePackageSaleSpec(req: DescribeResourcePackageSaleSpecRequest, cb?: (error: string, rep: DescribeResourcePackageSaleSpecResponse) => void): Promise<DescribeResourcePackageSaleSpecResponse>;
    /**
     * 本接口（ModifyAccountPrivileges）用于修改账号库表权限。
     */
    ModifyAccountPrivileges(req: ModifyAccountPrivilegesRequest, cb?: (error: string, rep: ModifyAccountPrivilegesResponse) => void): Promise<ModifyAccountPrivilegesResponse>;
    /**
     * 本接口（DescribeAuditRuleWithInstanceIds）用于获取实例的审计规则。
     */
    DescribeAuditRuleWithInstanceIds(req: DescribeAuditRuleWithInstanceIdsRequest, cb?: (error: string, rep: DescribeAuditRuleWithInstanceIdsResponse) => void): Promise<DescribeAuditRuleWithInstanceIdsResponse>;
    /**
     * 此接口（ExportInstanceErrorLogs）用于导出实例错误日志。
     */
    ExportInstanceErrorLogs(req: ExportInstanceErrorLogsRequest, cb?: (error: string, rep: ExportInstanceErrorLogsResponse) => void): Promise<ExportInstanceErrorLogsResponse>;
    /**
     * 本接口（AddClusterSlaveZone）用于对集群开启多可用区部署。
     */
    AddClusterSlaveZone(req: AddClusterSlaveZoneRequest, cb?: (error: string, rep: AddClusterSlaveZoneResponse) => void): Promise<AddClusterSlaveZoneResponse>;
    /**
     * 此接口（ModifyBackupName）用于修改备份文件备注名。
     */
    ModifyBackupName(req: ModifyBackupNameRequest, cb?: (error: string, rep: ModifyBackupNameResponse) => void): Promise<ModifyBackupNameResponse>;
    /**
     * 本接口（DescribeAccounts）用于查询数据库账号列表。
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 本接口（SetRenewFlag）用于设置实例的自动续费功能。
     */
    SetRenewFlag(req: SetRenewFlagRequest, cb?: (error: string, rep: SetRenewFlagResponse) => void): Promise<SetRenewFlagResponse>;
    /**
     * 本接口（InquirePriceRenew）用于查询续费集群价格。
     */
    InquirePriceRenew(req: InquirePriceRenewRequest, cb?: (error: string, rep: InquirePriceRenewResponse) => void): Promise<InquirePriceRenewResponse>;
    /**
     * 本接口（StartCLSDelivery）用于开启日志投递功能。
     */
    StartCLSDelivery(req: StartCLSDeliveryRequest, cb?: (error: string, rep: StartCLSDeliveryResponse) => void): Promise<StartCLSDeliveryResponse>;
    /**
     * 本接口（ReloadBalanceProxyNode）用于负载均衡数据库代理。
     */
    ReloadBalanceProxyNode(req: ReloadBalanceProxyNodeRequest, cb?: (error: string, rep: ReloadBalanceProxyNodeResponse) => void): Promise<ReloadBalanceProxyNodeResponse>;
    /**
     * 本接口（OfflineCluster）用于销毁集群。
     */
    OfflineCluster(req: OfflineClusterRequest, cb?: (error: string, rep: OfflineClusterResponse) => void): Promise<OfflineClusterResponse>;
    /**
     * 获取table列表
     */
    DescribeClusterDatabaseTables(req: DescribeClusterDatabaseTablesRequest, cb?: (error: string, rep: DescribeClusterDatabaseTablesResponse) => void): Promise<DescribeClusterDatabaseTablesResponse>;
    /**
     * 本接口（StopCLSDelivery）用于停止日志投递功能。
     */
    StopCLSDelivery(req: StopCLSDeliveryRequest, cb?: (error: string, rep: StopCLSDeliveryResponse) => void): Promise<StopCLSDeliveryResponse>;
    /**
     * 本接口（DescribeBackupList）用于查询集群的备份文件列表。
     */
    DescribeBackupList(req: DescribeBackupListRequest, cb?: (error: string, rep: DescribeBackupListResponse) => void): Promise<DescribeBackupListResponse>;
    /**
     * 本接口(ModifyAccountDescription)用于修改数据库账号描述信息。
     */
    ModifyAccountDescription(req: ModifyAccountDescriptionRequest, cb?: (error: string, rep: ModifyAccountDescriptionResponse) => void): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 修改serverless策略
     */
    ModifyServerlessStrategy(req: ModifyServerlessStrategyRequest, cb?: (error: string, rep: ModifyServerlessStrategyResponse) => void): Promise<ModifyServerlessStrategyResponse>;
    /**
     * 本接口（CreateClusterDatabase）用于创建数据库。
     */
    CreateClusterDatabase(req: CreateClusterDatabaseRequest, cb?: (error: string, rep: CreateClusterDatabaseResponse) => void): Promise<CreateClusterDatabaseResponse>;
    /**
     * 本接口（OpenAuditService）用于为实例开通数据库审计服务。
     */
    OpenAuditService(req: OpenAuditServiceRequest, cb?: (error: string, rep: OpenAuditServiceResponse) => void): Promise<OpenAuditServiceResponse>;
    /**
     * 本接口（DeleteAuditLogFile）用于删除云数据库实例的审计日志文件。
     */
    DeleteAuditLogFile(req: DeleteAuditLogFileRequest, cb?: (error: string, rep: DeleteAuditLogFileResponse) => void): Promise<DeleteAuditLogFileResponse>;
    /**
     * 本接口（DescribeAuditRuleTemplates）用于查询审计规则模板信息。
     */
    DescribeAuditRuleTemplates(req: DescribeAuditRuleTemplatesRequest, cb?: (error: string, rep: DescribeAuditRuleTemplatesResponse) => void): Promise<DescribeAuditRuleTemplatesResponse>;
    /**
     * 本接口（DescribeResourcePackageDetail）用于查询资源包使用详情。
     */
    DescribeResourcePackageDetail(req: DescribeResourcePackageDetailRequest, cb?: (error: string, rep: DescribeResourcePackageDetailResponse) => void): Promise<DescribeResourcePackageDetailResponse>;
    /**
     * 本接口（ModifyBackupConfig）用于修改指定集群的备份配置。
     */
    ModifyBackupConfig(req: ModifyBackupConfigRequest, cb?: (error: string, rep: ModifyBackupConfigResponse) => void): Promise<ModifyBackupConfigResponse>;
    /**
     * 本接口(DescribeInstances)用于查询实例列表。
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口（UpgradeClusterVersion）用于更新内核小版本。
     */
    UpgradeClusterVersion(req: UpgradeClusterVersionRequest, cb?: (error: string, rep: UpgradeClusterVersionResponse) => void): Promise<UpgradeClusterVersionResponse>;
    /**
     * 本接口（DescribeResourcePackageList）用于查询资源包列表。
     */
    DescribeResourcePackageList(req: DescribeResourcePackageListRequest, cb?: (error: string, rep: DescribeResourcePackageListResponse) => void): Promise<DescribeResourcePackageListResponse>;
    /**
     * 本接口（DescribeClusterParams）用于查询集群参数。
     */
    DescribeClusterParams(req: DescribeClusterParamsRequest, cb?: (error: string, rep: DescribeClusterParamsResponse) => void): Promise<DescribeClusterParamsResponse>;
    /**
     * 本接口（RefundResourcePackage）用于资源包退款。
     */
    RefundResourcePackage(req: RefundResourcePackageRequest, cb?: (error: string, rep: RefundResourcePackageResponse) => void): Promise<RefundResourcePackageResponse>;
    /**
     * 本接口(ModifyInstanceName)用于修改实例名称。
     */
    ModifyInstanceName(req: ModifyInstanceNameRequest, cb?: (error: string, rep: ModifyInstanceNameResponse) => void): Promise<ModifyInstanceNameResponse>;
    /**
     * 本接口（DescribeMaintainPeriod）用于查询实例维护时间窗。
     */
    DescribeMaintainPeriod(req: DescribeMaintainPeriodRequest, cb?: (error: string, rep: DescribeMaintainPeriodResponse) => void): Promise<DescribeMaintainPeriodResponse>;
    /**
     * 资源包使用明细导出
     */
    ExportResourcePackageDeductDetails(req: ExportResourcePackageDeductDetailsRequest, cb?: (error: string, rep: ExportResourcePackageDeductDetailsResponse) => void): Promise<ExportResourcePackageDeductDetailsResponse>;
    /**
     * 本接口（DescribeClusterDetailDatabases）用于查询数据库列表。
     */
    DescribeClusterDetailDatabases(req: DescribeClusterDetailDatabasesRequest, cb?: (error: string, rep: DescribeClusterDetailDatabasesResponse) => void): Promise<DescribeClusterDetailDatabasesResponse>;
    /**
     * 本接口(ModifyAuditService)用于修改云数据库审计日志保存时长、审计规则等服务配置。
     */
    ModifyAuditService(req: ModifyAuditServiceRequest, cb?: (error: string, rep: ModifyAuditServiceResponse) => void): Promise<ModifyAuditServiceResponse>;
    /**
     * 本接口（DescribeZones）用于查询可售卖地域可用区信息。
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 本接口（DescribeBackupDownloadUrl）用于查询集群备份文件下载地址。
     */
    DescribeBackupDownloadUrl(req: DescribeBackupDownloadUrlRequest, cb?: (error: string, rep: DescribeBackupDownloadUrlResponse) => void): Promise<DescribeBackupDownloadUrlResponse>;
    /**
     * 本接口（SwitchClusterVpc）用于更换集群vpc。
     */
    SwitchClusterVpc(req: SwitchClusterVpcRequest, cb?: (error: string, rep: SwitchClusterVpcResponse) => void): Promise<SwitchClusterVpcResponse>;
    /**
     * 本接口（CreateProxy）用于开启集群的数据库代理。
     */
    CreateProxy(req: CreateProxyRequest, cb?: (error: string, rep: CreateProxyResponse) => void): Promise<CreateProxyResponse>;
    /**
     * 本接口（ModifyDBInstanceSecurityGroups）用于修改实例绑定的安全组。
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 本接口（CreateCLSDelivery）用于创建日志投递。
     */
    CreateCLSDelivery(req: CreateCLSDeliveryRequest, cb?: (error: string, rep: CreateCLSDeliveryResponse) => void): Promise<CreateCLSDeliveryResponse>;
    /**
     * 此接口（ModifyBinlogSaveDays）用于修改集群Binlog保留天数。
     */
    ModifyBinlogSaveDays(req: ModifyBinlogSaveDaysRequest, cb?: (error: string, rep: ModifyBinlogSaveDaysResponse) => void): Promise<ModifyBinlogSaveDaysResponse>;
    /**
     * 本接口（DescribeAccountAllGrantPrivileges）用于查询账号所有可授予的权限。
     */
    DescribeAccountAllGrantPrivileges(req: DescribeAccountAllGrantPrivilegesRequest, cb?: (error: string, rep: DescribeAccountAllGrantPrivilegesResponse) => void): Promise<DescribeAccountAllGrantPrivilegesResponse>;
    /**
     * 本接口（OpenReadOnlyInstanceExclusiveAccess）用于开通只读实例独有访问接入组。
     */
    OpenReadOnlyInstanceExclusiveAccess(req: OpenReadOnlyInstanceExclusiveAccessRequest, cb?: (error: string, rep: OpenReadOnlyInstanceExclusiveAccessResponse) => void): Promise<OpenReadOnlyInstanceExclusiveAccessResponse>;
    /**
     * 本接口（DescribeClusterPasswordComplexity）用于查看集群密码复杂度详情。
     */
    DescribeClusterPasswordComplexity(req: DescribeClusterPasswordComplexityRequest, cb?: (error: string, rep: DescribeClusterPasswordComplexityResponse) => void): Promise<DescribeClusterPasswordComplexityResponse>;
    /**
     * 本接口（DeleteParamTemplate）用于删除用户创建的参数模板。
     */
    DeleteParamTemplate(req: DeleteParamTemplateRequest, cb?: (error: string, rep: DeleteParamTemplateResponse) => void): Promise<DeleteParamTemplateResponse>;
    /**
     * 本接口（UpgradeInstance）用于实例变配。
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 本接口（DescribeBinlogs）用来查询集群 Binlog 日志列表。
     */
    DescribeBinlogs(req: DescribeBinlogsRequest, cb?: (error: string, rep: DescribeBinlogsResponse) => void): Promise<DescribeBinlogsResponse>;
    /**
     * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。
     */
    DescribeClusterInstanceGroups(req: DescribeClusterInstanceGroupsRequest, cb?: (error: string, rep: DescribeClusterInstanceGroupsResponse) => void): Promise<DescribeClusterInstanceGroupsResponse>;
    /**
     * 本接口（DescribeDBSecurityGroups）用于查询实例安全组信息。
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 本接口（OpenClusterPasswordComplexity）用于开启自定义密码复杂度功能。
     */
    OpenClusterPasswordComplexity(req: OpenClusterPasswordComplexityRequest, cb?: (error: string, rep: OpenClusterPasswordComplexityResponse) => void): Promise<OpenClusterPasswordComplexityResponse>;
    /**
     * 本接口（ModifyResourcePackageName）用于修改资源包名称。
     */
    ModifyResourcePackageName(req: ModifyResourcePackageNameRequest, cb?: (error: string, rep: ModifyResourcePackageNameResponse) => void): Promise<ModifyResourcePackageNameResponse>;
    /**
     * 本接口（RemoveClusterSlaveZone）用于关闭集群多可用区部署。
     */
    RemoveClusterSlaveZone(req: RemoveClusterSlaveZoneRequest, cb?: (error: string, rep: RemoveClusterSlaveZoneResponse) => void): Promise<RemoveClusterSlaveZoneResponse>;
    /**
     * 本接口（DescribeParamTemplateDetail）用于查询用户参数模板详情。
     */
    DescribeParamTemplateDetail(req: DescribeParamTemplateDetailRequest, cb?: (error: string, rep: DescribeParamTemplateDetailResponse) => void): Promise<DescribeParamTemplateDetailResponse>;
    /**
     * 本接口(IsolateInstance)用于隔离实例。
     */
    IsolateInstance(req: IsolateInstanceRequest, cb?: (error: string, rep: IsolateInstanceResponse) => void): Promise<IsolateInstanceResponse>;
}

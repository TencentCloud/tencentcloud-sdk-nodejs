/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  UpgradeProxyVersionResponse,
  DescribeInstanceCLSLogDeliveryResponse,
  ModifyMaintainPeriodConfigRequest,
  BizTaskModifyInstanceParam,
  ModifyClusterStorageRequest,
  DescribeResourcePackageDetailResponse,
  SearchClusterTablesRequest,
  DescribeMaintainPeriodRequest,
  AccountParam,
  DescribeClusterParamsResponse,
  RefundResourcePackageResponse,
  ModifyInstanceNameResponse,
  DescribeParamTemplatesRequest,
  DescribeAuditInstanceListResponse,
  DescribeProxiesResponse,
  DescribeClusterDetailDatabasesRequest,
  CreateClustersResponse,
  CynosdbInstanceGrp,
  ModifyInstanceParamRequest,
  ModifyInstanceUpgradeLimitDaysResponse,
  DatabaseTables,
  UserHostPrivilege,
  StopCLSDeliveryRequest,
  DescribeClustersRequest,
  OpenReadOnlyInstanceExclusiveAccessResponse,
  SearchClusterDatabasesResponse,
  CreateParamTemplateRequest,
  DescribeClusterDetailRequest,
  ModifyResourcePackageNameRequest,
  UpgradeProxy,
  BackupFileInfo,
  UpgradeProxyRequest,
  DescribeBinlogDownloadUrlResponse,
  SwitchClusterVpcRequest,
  CloseProxyRequest,
  CynosdbInstance,
  DescribeClusterPasswordComplexityResponse,
  DescribeAuditRuleWithInstanceIdsRequest,
  DescribeClusterDatabasesResponse,
  ModifyInstanceData,
  DescribeInstanceParamsRequest,
  ModifyBinlogSaveDaysRequest,
  ProxySpec,
  AddInstancesResponse,
  SlowQueriesItem,
  ProxyGroupInfo,
  AssociateSecurityGroupsResponse,
  CreateProxyEndPointRequest,
  AuditRuleTemplateInfo,
  DescribeParamTemplateDetailRequest,
  ModifyAccountPrivilegesRequest,
  StartCLSDeliveryResponse,
  ParamItemInfo,
  UpgradeProxyResponse,
  DescribeInstanceSpecsRequest,
  DescribeProxyNodesResponse,
  ProxyNodeInfo,
  DescribeZonesResponse,
  SearchClusterTablesResponse,
  ModifyParamTemplateRequest,
  OpenAuditServiceResponse,
  DescribeChangedParamsAfterUpgradeResponse,
  ProxyGroupRwInfo,
  DescribeProxyNodesRequest,
  InquirePriceCreateResponse,
  CreateClustersRequest,
  DescribeClusterParamLogsRequest,
  CloseProxyResponse,
  DescribeResourcePackageSaleSpecRequest,
  UnbindClusterResourcePackagesResponse,
  RollBackClusterResponse,
  DescribeRollbackTimeValidityRequest,
  DescribeClusterInstanceGrpsResponse,
  ModifyBackupConfigResponse,
  ModifyClusterDatabaseRequest,
  InstanceCLSDeliveryInfo,
  ModifyMaintainPeriodConfigResponse,
  DisassociateSecurityGroupsRequest,
  ModifyBackupNameRequest,
  AuditRuleFilters,
  DescribeClusterParamsRequest,
  ModifyAccountHostResponse,
  DescribeAccountAllGrantPrivilegesRequest,
  DeleteCLSDeliveryRequest,
  CreateCLSDeliveryResponse,
  ManualBackupData,
  DescribeBinlogsRequest,
  InstanceAuditLogFilter,
  SlaveZoneStockInfo,
  ModifyProxyRwSplitRequest,
  DescribeResourcePackageListResponse,
  RuleFilters,
  ModifyAuditRuleTemplatesRequest,
  CreateClustersData,
  DescribeProxiesRequest,
  ModifyParamItem,
  AssociateSecurityGroupsRequest,
  ParamTemplateListInfo,
  DescribeBinlogsResponse,
  AuditInstanceInfo,
  AddClusterSlaveZoneResponse,
  DescribeProxySpecsResponse,
  BindClusterResourcePackagesRequest,
  IsolateInstanceResponse,
  CopyClusterPasswordComplexityResponse,
  DeleteParamTemplateRequest,
  RevokeAccountPrivilegesResponse,
  DescribeClusterDetailDatabasesResponse,
  CreateParamTemplateResponse,
  DescribeAccountAllGrantPrivilegesResponse,
  ModifyDbVersionData,
  DatabasePrivileges,
  DescribeSupportProxyVersionRequest,
  DescribeProxySpecsRequest,
  ResumeServerlessRequest,
  DeleteAuditLogFileResponse,
  InstanceNetInfo,
  ModifyClusterDatabaseResponse,
  InstanceParamItem,
  DescribeDBSecurityGroupsRequest,
  RollbackData,
  UpgradeInstanceRequest,
  DescribeInstanceParamsResponse,
  SwitchClusterVpcResponse,
  DescribeZonesRequest,
  Tag,
  RuleTemplateInfo,
  StopCLSDeliveryResponse,
  CreateAuditLogFileResponse,
  PauseServerlessResponse,
  DescribeInstanceDetailResponse,
  DeleteAccountsResponse,
  CreateResourcePackageResponse,
  SetRenewFlagResponse,
  CreateClusterDatabaseResponse,
  DescribeClustersResponse,
  DescribeBackupConfigResponse,
  DescribeParamTemplatesResponse,
  Addr,
  DescribeProjectSecurityGroupsRequest,
  DbInfo,
  DescribeBackupDownloadUrlRequest,
  InstanceAuditStatus,
  CopyClusterPasswordComplexityRequest,
  DescribeClusterInstanceGroupsResponse,
  CreateProxyEndPointResponse,
  NetAddr,
  OpenWanRequest,
  ModifyAccountPrivilegesResponse,
  DescribeRollbackTimeValidityResponse,
  InquirePriceCreateRequest,
  ModifyAuditServiceRequest,
  ModifyClusterNameResponse,
  ExportInstanceSlowQueriesRequest,
  ModifyAuditServiceResponse,
  ResumeServerlessResponse,
  SaleZone,
  SwitchProxyVpcResponse,
  StartCLSDeliveryRequest,
  SlaveZoneAttrItem,
  DescribeChangedParamsAfterUpgradeRequest,
  CLSInfo,
  SwitchProxyVpcRequest,
  RestartInstanceResponse,
  DescribeBinlogSaveDaysRequest,
  ActivateInstanceResponse,
  IsolateClusterRequest,
  AddInstancesRequest,
  CynosdbInstanceDetail,
  InputAccount,
  DescribeInstanceErrorLogsRequest,
  DescribeInstanceDetailRequest,
  Package,
  DeleteAccountsRequest,
  ReloadBalanceProxyNodeRequest,
  DescribeAccountsResponse,
  RollbackTimeRange,
  CreateClusterDatabaseRequest,
  OfflineInstanceRequest,
  AuditLog,
  CreateProxyResponse,
  BizTaskModifyParamsData,
  InstanceInitInfo,
  Module,
  ModifyBackupConfigRequest,
  DisassociateSecurityGroupsResponse,
  DescribeClusterDatabasesRequest,
  DescribeRollbackTimeRangeRequest,
  InquirePriceRenewRequest,
  DescribeAccountPrivilegesResponse,
  ProxyInstanceWeight,
  CreateResourcePackageRequest,
  DescribeAuditLogsRequest,
  DescribeBackupConfigRequest,
  DescribeAccountsRequest,
  DescribeRollbackTimeRangeResponse,
  ModifyBackupNameResponse,
  DescribeAuditLogFilesResponse,
  SwitchClusterZoneResponse,
  ProxyConnectionPoolInfo,
  DescribeClusterPasswordComplexityRequest,
  QueryFilter,
  CreateAccountsResponse,
  CloseWanResponse,
  DescribeInstancesResponse,
  SalePackageSpec,
  Account,
  CloseWanRequest,
  AuditLogFilter,
  UpgradeProxyVersionRequest,
  ModifyResourcePackageClustersRequest,
  ObjectTask,
  DescribeFlowResponse,
  ExportInstanceErrorLogsRequest,
  ActivateInstanceRequest,
  DeleteClusterDatabaseRequest,
  CynosdbErrorLogItem,
  ModifyVipVportRequest,
  InstanceAbility,
  ModifyDBInstanceSecurityGroupsResponse,
  DescribeClusterParamLogsResponse,
  DescribeClusterInstanceGrpsRequest,
  DescribeResourcesByDealNameResponse,
  CreateAccountsRequest,
  DeleteAuditRuleTemplatesRequest,
  ExportInstanceSlowQueriesResponse,
  SwitchClusterZoneRequest,
  Ability,
  RollBackClusterRequest,
  BizTaskInfo,
  RemoveClusterSlaveZoneResponse,
  OpenClusterReadOnlyInstanceGroupAccessResponse,
  QueryParamFilter,
  NewAccount,
  ModifyParamsData,
  BindInstanceInfo,
  DescribeAuditRuleWithInstanceIdsResponse,
  SearchClusterDatabasesRequest,
  ModifyProxyDescResponse,
  DbTable,
  ModifyClusterSlaveZoneResponse,
  RollbackToNewClusterRequest,
  BinlogItem,
  ModifyProxyDescRequest,
  ReloadBalanceProxyNodeResponse,
  CloseAuditServiceResponse,
  ModifyParamTemplateResponse,
  BindClusterResourcePackagesResponse,
  LogRuleTemplateInfo,
  ProxyZone,
  CreateProxyRequest,
  DescribeResourcePackageSaleSpecResponse,
  DescribeResourcesByDealNameRequest,
  DescribeAuditInstanceListRequest,
  DescribeInstanceSlowQueriesResponse,
  DescribeInstancesRequest,
  CloseClusterPasswordComplexityResponse,
  DescribeBackupDownloadUrlResponse,
  TradePrice,
  CreateAuditRuleTemplateRequest,
  PauseServerlessRequest,
  CynosdbCluster,
  OpenWanResponse,
  OfflineClusterResponse,
  ModifyAccountHostRequest,
  DescribeFlowRequest,
  OpenReadOnlyInstanceExclusiveAccessRequest,
  CreateBackupRequest,
  CreateCLSDeliveryRequest,
  DescribeMaintainPeriodResponse,
  DescribeBackupListResponse,
  DescribeResourcePackageDetailRequest,
  ModifyClusterParamRequest,
  OfflineInstanceResponse,
  CreateAuditLogFileRequest,
  ModifyClusterSlaveZoneRequest,
  DescribeInstanceErrorLogsResponse,
  DescribeSupportProxyVersionResponse,
  DeleteClusterDatabaseResponse,
  CynosdbClusterDetail,
  RestartInstanceRequest,
  PackageDetail,
  DescribeAccountPrivilegesRequest,
  ModifyAccountParamsResponse,
  DescribeInstanceSpecsResponse,
  ParamItem,
  DescribeClusterDetailResponse,
  DescribeInstanceSlowQueriesRequest,
  ModifyResourcePackageClustersResponse,
  RollbackTable,
  ModifyClusterNameRequest,
  InstanceAuditRule,
  RefundResourcePackageRequest,
  DescribeBinlogDownloadUrlRequest,
  ModifyInstanceNameRequest,
  UpgradeClusterVersionResponse,
  DescribeDBSecurityGroupsResponse,
  DeleteParamTemplateResponse,
  ClusterInstanceDetail,
  ClusterSlaveData,
  OldAddrInfo,
  DescribeTasksResponse,
  OpenClusterPasswordComplexityRequest,
  DescribeAuditLogsResponse,
  ModifyAccountDescriptionResponse,
  SetRenewFlagRequest,
  ProxyGroup,
  AddClusterSlaveZoneRequest,
  RollbackDatabase,
  DescribeTasksRequest,
  ModifyClusterStorageResponse,
  ModifyInstanceUpgradeLimitDaysRequest,
  CloseClusterPasswordComplexityRequest,
  ModifyAccountParamsRequest,
  AuditLogFile,
  DescribeAuditRuleTemplatesResponse,
  LogicBackupConfigInfo,
  DeleteBackupResponse,
  DescribeProjectSecurityGroupsResponse,
  ParamDetail,
  OfflineClusterRequest,
  ResetAccountPasswordResponse,
  DescribeClusterInstanceGroupsRequest,
  OpenAuditServiceRequest,
  ModifyResourcePackageNameResponse,
  DescribeBackupListRequest,
  SwitchClusterLogBin,
  ExportInstanceErrorLogsResponse,
  ParamItemDetail,
  GrantAccountPrivilegesRequest,
  IsolateClusterResponse,
  RollbackTableInfo,
  ModifyVipVportResponse,
  ModifyDBInstanceSecurityGroupsRequest,
  CloseAuditServiceRequest,
  ModifyClusterPasswordComplexityResponse,
  UpgradeClusterVersionRequest,
  AuditInstanceFilters,
  ParamInfo,
  ModifyClusterParamResponse,
  SecurityGroup,
  ModifyClusterPasswordComplexityRequest,
  UnbindClusterResourcePackagesRequest,
  ModifyInstanceParamResponse,
  TemplateParamInfo,
  CreateBackupResponse,
  RollbackToNewClusterResponse,
  ResourcePackage,
  DescribeBinlogSaveDaysResponse,
  BillingResourceInfo,
  ModifyProxyRwSplitResponse,
  ModifyAccountDescriptionRequest,
  DescribeInstanceCLSLogDeliveryRequest,
  UpgradeInstanceResponse,
  CreateAuditRuleTemplateResponse,
  DescribeResourcePackageListRequest,
  RevokeAccountPrivilegesRequest,
  OpenClusterPasswordComplexityResponse,
  OpenClusterReadOnlyInstanceGroupAccessRequest,
  DescribeAuditRuleTemplatesRequest,
  InstanceSpec,
  IsolateInstanceRequest,
  DescribeAuditLogFilesRequest,
  SaleRegion,
  DeleteAuditLogFileRequest,
  GrantAccountPrivilegesResponse,
  ClusterParamModifyLog,
  CynosdbInstanceGroup,
  ResetAccountPasswordRequest,
  ModifiableInfo,
  TaskMaintainInfo,
  TablePrivileges,
  RemoveClusterSlaveZoneRequest,
  DeleteBackupRequest,
  ErrorLogItemExport,
  DescribeParamTemplateDetailResponse,
  ModifyBinlogSaveDaysResponse,
  DeleteAuditRuleTemplatesResponse,
  PolicyRule,
  ZoneStockInfo,
  DeleteCLSDeliveryResponse,
  InquirePriceRenewResponse,
  ModifyAuditRuleTemplatesResponse,
} from "./cynosdb_models"

/**
 * cynosdb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cynosdb.tencentcloudapi.com", "2019-01-07", clientConfig)
  }

  /**
   * 恢复serverless集群
   */
  async ResumeServerless(
    req: ResumeServerlessRequest,
    cb?: (error: string, rep: ResumeServerlessResponse) => void
  ): Promise<ResumeServerlessResponse> {
    return this.request("ResumeServerless", req, cb)
  }

  /**
   * 升级数据库代理版本
   */
  async UpgradeProxyVersion(
    req: UpgradeProxyVersionRequest,
    cb?: (error: string, rep: UpgradeProxyVersionResponse) => void
  ): Promise<UpgradeProxyVersionResponse> {
    return this.request("UpgradeProxyVersion", req, cb)
  }

  /**
   * 获取指定集群的备份配置信息，包括全量备份时间段，备份文件保留时间
   */
  async DescribeBackupConfig(
    req: DescribeBackupConfigRequest,
    cb?: (error: string, rep: DescribeBackupConfigResponse) => void
  ): Promise<DescribeBackupConfigResponse> {
    return this.request("DescribeBackupConfig", req, cb)
  }

  /**
   * 创建数据库代理连接点
   */
  async CreateProxyEndPoint(
    req: CreateProxyEndPointRequest,
    cb?: (error: string, rep: CreateProxyEndPointResponse) => void
  ): Promise<CreateProxyEndPointResponse> {
    return this.request("CreateProxyEndPoint", req, cb)
  }

  /**
   * 给资源包绑定集群
   */
  async ModifyResourcePackageClusters(
    req: ModifyResourcePackageClustersRequest,
    cb?: (error: string, rep: ModifyResourcePackageClustersResponse) => void
  ): Promise<ModifyResourcePackageClustersResponse> {
    return this.request("ModifyResourcePackageClusters", req, cb)
  }

  /**
   * 创建审计规则模板
   */
  async CreateAuditRuleTemplate(
    req: CreateAuditRuleTemplateRequest,
    cb?: (error: string, rep: CreateAuditRuleTemplateResponse) => void
  ): Promise<CreateAuditRuleTemplateResponse> {
    return this.request("CreateAuditRuleTemplate", req, cb)
  }

  /**
   * 批量授权账号权限
   */
  async GrantAccountPrivileges(
    req: GrantAccountPrivilegesRequest,
    cb?: (error: string, rep: GrantAccountPrivilegesResponse) => void
  ): Promise<GrantAccountPrivilegesResponse> {
    return this.request("GrantAccountPrivileges", req, cb)
  }

  /**
   * 本接口（DescribeClusterParamLogs）查询参数修改记录
   */
  async DescribeClusterParamLogs(
    req: DescribeClusterParamLogsRequest,
    cb?: (error: string, rep: DescribeClusterParamLogsResponse) => void
  ): Promise<DescribeClusterParamLogsResponse> {
    return this.request("DescribeClusterParamLogs", req, cb)
  }

  /**
   * 修改维护时间配置
   */
  async ModifyMaintainPeriodConfig(
    req: ModifyMaintainPeriodConfigRequest,
    cb?: (error: string, rep: ModifyMaintainPeriodConfigResponse) => void
  ): Promise<ModifyMaintainPeriodConfigResponse> {
    return this.request("ModifyMaintainPeriodConfig", req, cb)
  }

  /**
   * 本接口（CopyClusterPasswordComplexity）用于复制集群密码复杂度
   */
  async CopyClusterPasswordComplexity(
    req: CopyClusterPasswordComplexityRequest,
    cb?: (error: string, rep: CopyClusterPasswordComplexityResponse) => void
  ): Promise<CopyClusterPasswordComplexityResponse> {
    return this.request("CopyClusterPasswordComplexity", req, cb)
  }

  /**
   * TDSQL-C for MySQL实例关闭审计服务
   */
  async CloseAuditService(
    req: CloseAuditServiceRequest,
    cb?: (error: string, rep: CloseAuditServiceResponse) => void
  ): Promise<CloseAuditServiceResponse> {
    return this.request("CloseAuditService", req, cb)
  }

  /**
   * 查询支持的数据库代理版本
   */
  async DescribeSupportProxyVersion(
    req: DescribeSupportProxyVersionRequest,
    cb?: (error: string, rep: DescribeSupportProxyVersionResponse) => void
  ): Promise<DescribeSupportProxyVersionResponse> {
    return this.request("DescribeSupportProxyVersion", req, cb)
  }

  /**
   * 本接口(CreateAuditLogFile)用于创建云数据库实例的审计日志文件。
   */
  async CreateAuditLogFile(
    req: CreateAuditLogFileRequest,
    cb?: (error: string, rep: CreateAuditLogFileResponse) => void
  ): Promise<CreateAuditLogFileResponse> {
    return this.request("CreateAuditLogFile", req, cb)
  }

  /**
   * 更换集群vpc
   */
  async SwitchClusterVpc(
    req: SwitchClusterVpcRequest,
    cb?: (error: string, rep: SwitchClusterVpcResponse) => void
  ): Promise<SwitchClusterVpcResponse> {
    return this.request("SwitchClusterVpc", req, cb)
  }

  /**
   * 关闭数据库代理
   */
  async CloseProxy(
    req: CloseProxyRequest,
    cb?: (error: string, rep: CloseProxyResponse) => void
  ): Promise<CloseProxyResponse> {
    return this.request("CloseProxy", req, cb)
  }

  /**
   * 查询数据库代理规格
   */
  async DescribeProxySpecs(
    req?: DescribeProxySpecsRequest,
    cb?: (error: string, rep: DescribeProxySpecsResponse) => void
  ): Promise<DescribeProxySpecsResponse> {
    return this.request("DescribeProxySpecs", req, cb)
  }

  /**
   * 该接口（DescribeClusterDetail）显示集群详情
   */
  async DescribeClusterDetail(
    req: DescribeClusterDetailRequest,
    cb?: (error: string, rep: DescribeClusterDetailResponse) => void
  ): Promise<DescribeClusterDetailResponse> {
    return this.request("DescribeClusterDetail", req, cb)
  }

  /**
   * 查询任务列表
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 本接口（DescribeInstanceSpecs）用于查询购买页可购买的实例规格
   */
  async DescribeInstanceSpecs(
    req: DescribeInstanceSpecsRequest,
    cb?: (error: string, rep: DescribeInstanceSpecsResponse) => void
  ): Promise<DescribeInstanceSpecsResponse> {
    return this.request("DescribeInstanceSpecs", req, cb)
  }

  /**
   * 此接口（DescribeBinlogDownloadUrl）用于查询Binlog的下载地址。
   */
  async DescribeBinlogDownloadUrl(
    req: DescribeBinlogDownloadUrlRequest,
    cb?: (error: string, rep: DescribeBinlogDownloadUrlResponse) => void
  ): Promise<DescribeBinlogDownloadUrlResponse> {
    return this.request("DescribeBinlogDownloadUrl", req, cb)
  }

  /**
   * 查询订单关联实例
   */
  async DescribeResourcesByDealName(
    req: DescribeResourcesByDealNameRequest,
    cb?: (error: string, rep: DescribeResourcesByDealNameResponse) => void
  ): Promise<DescribeResourcesByDealNameResponse> {
    return this.request("DescribeResourcesByDealName", req, cb)
  }

  /**
   * 调整包年包月存储容量
   */
  async ModifyClusterStorage(
    req: ModifyClusterStorageRequest,
    cb?: (error: string, rep: ModifyClusterStorageResponse) => void
  ): Promise<ModifyClusterStorageResponse> {
    return this.request("ModifyClusterStorage", req, cb)
  }

  /**
   * 本接口(ActivateInstance)用于恢复已隔离的实例访问。
   */
  async ActivateInstance(
    req: ActivateInstanceRequest,
    cb?: (error: string, rep: ActivateInstanceResponse) => void
  ): Promise<ActivateInstanceResponse> {
    return this.request("ActivateInstance", req, cb)
  }

  /**
   * 本接口（DescribeProxyNodes）用于查询代理节点列表。
   */
  async DescribeProxyNodes(
    req: DescribeProxyNodesRequest,
    cb?: (error: string, rep: DescribeProxyNodesResponse) => void
  ): Promise<DescribeProxyNodesResponse> {
    return this.request("DescribeProxyNodes", req, cb)
  }

  /**
   * 安全组批量解绑云资源
   */
  async DisassociateSecurityGroups(
    req: DisassociateSecurityGroupsRequest,
    cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void
  ): Promise<DisassociateSecurityGroupsResponse> {
    return this.request("DisassociateSecurityGroups", req, cb)
  }

  /**
   * 此接口（ExportInstanceSlowQueries）用于导出实例慢日志。
   */
  async ExportInstanceSlowQueries(
    req: ExportInstanceSlowQueriesRequest,
    cb?: (error: string, rep: ExportInstanceSlowQueriesResponse) => void
  ): Promise<ExportInstanceSlowQueriesResponse> {
    return this.request("ExportInstanceSlowQueries", req, cb)
  }

  /**
   * 删除日志投递
   */
  async DeleteCLSDelivery(
    req: DeleteCLSDeliveryRequest,
    cb?: (error: string, rep: DeleteCLSDeliveryResponse) => void
  ): Promise<DeleteCLSDeliveryResponse> {
    return this.request("DeleteCLSDelivery", req, cb)
  }

  /**
   * 本接口（DescribeChangedParamsAfterUpgrade）用于查询升降配运行参数对比
   */
  async DescribeChangedParamsAfterUpgrade(
    req: DescribeChangedParamsAfterUpgradeRequest,
    cb?: (error: string, rep: DescribeChangedParamsAfterUpgradeResponse) => void
  ): Promise<DescribeChangedParamsAfterUpgradeResponse> {
    return this.request("DescribeChangedParamsAfterUpgrade", req, cb)
  }

  /**
   * 查询账号已有权限
   */
  async DescribeAccountPrivileges(
    req: DescribeAccountPrivilegesRequest,
    cb?: (error: string, rep: DescribeAccountPrivilegesResponse) => void
  ): Promise<DescribeAccountPrivilegesResponse> {
    return this.request("DescribeAccountPrivileges", req, cb)
  }

  /**
   * 本接口（CloseClusterPasswordComplexity）用于关闭集群密码复杂度
   */
  async CloseClusterPasswordComplexity(
    req: CloseClusterPasswordComplexityRequest,
    cb?: (error: string, rep: CloseClusterPasswordComplexityResponse) => void
  ): Promise<CloseClusterPasswordComplexityResponse> {
    return this.request("CloseClusterPasswordComplexity", req, cb)
  }

  /**
   * 本接口（RollBackCluster）用于集群回档
   */
  async RollBackCluster(
    req: RollBackClusterRequest,
    cb?: (error: string, rep: RollBackClusterResponse) => void
  ): Promise<RollBackClusterResponse> {
    return this.request("RollBackCluster", req, cb)
  }

  /**
   * 此接口（DescribeBinlogSaveDays）用于查询集群的Binlog保留天数。
   */
  async DescribeBinlogSaveDays(
    req: DescribeBinlogSaveDaysRequest,
    cb?: (error: string, rep: DescribeBinlogSaveDaysResponse) => void
  ): Promise<DescribeBinlogSaveDaysResponse> {
    return this.request("DescribeBinlogSaveDays", req, cb)
  }

  /**
   * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。 该接口已废弃，推荐使用DescribeClusterInstanceGroups
   */
  async DescribeClusterInstanceGrps(
    req: DescribeClusterInstanceGrpsRequest,
    cb?: (error: string, rep: DescribeClusterInstanceGrpsResponse) => void
  ): Promise<DescribeClusterInstanceGrpsResponse> {
    return this.request("DescribeClusterInstanceGrps", req, cb)
  }

  /**
   * 销毁集群
   */
  async OfflineCluster(
    req: OfflineClusterRequest,
    cb?: (error: string, rep: OfflineClusterResponse) => void
  ): Promise<OfflineClusterResponse> {
    return this.request("OfflineCluster", req, cb)
  }

  /**
   * 查询实例错误日志列表
   */
  async DescribeInstanceErrorLogs(
    req: DescribeInstanceErrorLogsRequest,
    cb?: (error: string, rep: DescribeInstanceErrorLogsResponse) => void
  ): Promise<DescribeInstanceErrorLogsResponse> {
    return this.request("DescribeInstanceErrorLogs", req, cb)
  }

  /**
   * 修改集群名称
   */
  async ModifyClusterName(
    req: ModifyClusterNameRequest,
    cb?: (error: string, rep: ModifyClusterNameResponse) => void
  ): Promise<ModifyClusterNameResponse> {
    return this.request("ModifyClusterName", req, cb)
  }

  /**
   * 配置数据库代理读写分离
   */
  async ModifyProxyRwSplit(
    req: ModifyProxyRwSplitRequest,
    cb?: (error: string, rep: ModifyProxyRwSplitResponse) => void
  ): Promise<ModifyProxyRwSplitResponse> {
    return this.request("ModifyProxyRwSplit", req, cb)
  }

  /**
   * 修改实例组ip，端口
   */
  async ModifyVipVport(
    req: ModifyVipVportRequest,
    cb?: (error: string, rep: ModifyVipVportResponse) => void
  ): Promise<ModifyVipVportResponse> {
    return this.request("ModifyVipVport", req, cb)
  }

  /**
   * 删除审计规则模板
   */
  async DeleteAuditRuleTemplates(
    req: DeleteAuditRuleTemplatesRequest,
    cb?: (error: string, rep: DeleteAuditRuleTemplatesResponse) => void
  ): Promise<DeleteAuditRuleTemplatesResponse> {
    return this.request("DeleteAuditRuleTemplates", req, cb)
  }

  /**
   * 修改数据库代理描述
   */
  async ModifyProxyDesc(
    req: ModifyProxyDescRequest,
    cb?: (error: string, rep: ModifyProxyDescResponse) => void
  ): Promise<ModifyProxyDescResponse> {
    return this.request("ModifyProxyDesc", req, cb)
  }

  /**
   * 本接口（CreateParamTemplate）用于创建参数模板
   */
  async CreateParamTemplate(
    req: CreateParamTemplateRequest,
    cb?: (error: string, rep: CreateParamTemplateResponse) => void
  ): Promise<CreateParamTemplateResponse> {
    return this.request("CreateParamTemplate", req, cb)
  }

  /**
   * 变更备可用区
   */
  async ModifyClusterSlaveZone(
    req: ModifyClusterSlaveZoneRequest,
    cb?: (error: string, rep: ModifyClusterSlaveZoneResponse) => void
  ): Promise<ModifyClusterSlaveZoneResponse> {
    return this.request("ModifyClusterSlaveZone", req, cb)
  }

  /**
   * 修改账号配置
   */
  async ModifyAccountParams(
    req: ModifyAccountParamsRequest,
    cb?: (error: string, rep: ModifyAccountParamsResponse) => void
  ): Promise<ModifyAccountParamsResponse> {
    return this.request("ModifyAccountParams", req, cb)
  }

  /**
   * 本接口（ModifyClusterPasswordComplexity）用于修改/开启集群密码复杂度
   */
  async ModifyClusterPasswordComplexity(
    req: ModifyClusterPasswordComplexityRequest,
    cb?: (error: string, rep: ModifyClusterPasswordComplexityResponse) => void
  ): Promise<ModifyClusterPasswordComplexityResponse> {
    return this.request("ModifyClusterPasswordComplexity", req, cb)
  }

  /**
   * 为集群创建手动备份
   */
  async CreateBackup(
    req: CreateBackupRequest,
    cb?: (error: string, rep: CreateBackupResponse) => void
  ): Promise<CreateBackupResponse> {
    return this.request("CreateBackup", req, cb)
  }

  /**
   * 销毁实例
   */
  async OfflineInstance(
    req: OfflineInstanceRequest,
    cb?: (error: string, rep: OfflineInstanceResponse) => void
  ): Promise<OfflineInstanceResponse> {
    return this.request("OfflineInstance", req, cb)
  }

  /**
   * 隔离集群
   */
  async IsolateCluster(
    req: IsolateClusterRequest,
    cb?: (error: string, rep: IsolateClusterResponse) => void
  ): Promise<IsolateClusterResponse> {
    return this.request("IsolateCluster", req, cb)
  }

  /**
   * 重启实例
   */
  async RestartInstance(
    req: RestartInstanceRequest,
    cb?: (error: string, rep: RestartInstanceResponse) => void
  ): Promise<RestartInstanceResponse> {
    return this.request("RestartInstance", req, cb)
  }

  /**
   * 升级数据库代理配置
   */
  async UpgradeProxy(
    req: UpgradeProxyRequest,
    cb?: (error: string, rep: UpgradeProxyResponse) => void
  ): Promise<UpgradeProxyResponse> {
    return this.request("UpgradeProxy", req, cb)
  }

  /**
   * 查询集群列表
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 本接口（CloseWan）用于关闭外网
   */
  async CloseWan(
    req: CloseWanRequest,
    cb?: (error: string, rep: CloseWanResponse) => void
  ): Promise<CloseWanResponse> {
    return this.request("CloseWan", req, cb)
  }

  /**
   * 查询项目安全组信息
   */
  async DescribeProjectSecurityGroups(
    req: DescribeProjectSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void
  ): Promise<DescribeProjectSecurityGroupsResponse> {
    return this.request("DescribeProjectSecurityGroups", req, cb)
  }

  /**
   * 修改数据库
   */
  async ModifyClusterDatabase(
    req: ModifyClusterDatabaseRequest,
    cb?: (error: string, rep: ModifyClusterDatabaseResponse) => void
  ): Promise<ModifyClusterDatabaseResponse> {
    return this.request("ModifyClusterDatabase", req, cb)
  }

  /**
   * 本接口（ModifyParamTemplate）用于修改用户参数模板。
   */
  async ModifyParamTemplate(
    req: ModifyParamTemplateRequest,
    cb?: (error: string, rep: ModifyParamTemplateResponse) => void
  ): Promise<ModifyParamTemplateResponse> {
    return this.request("ModifyParamTemplate", req, cb)
  }

  /**
   * 该接口(DescribeInstanceParams)查询实例参数列表
   */
  async DescribeInstanceParams(
    req: DescribeInstanceParamsRequest,
    cb?: (error: string, rep: DescribeInstanceParamsResponse) => void
  ): Promise<DescribeInstanceParamsResponse> {
    return this.request("DescribeInstanceParams", req, cb)
  }

  /**
   * 此接口（DescribeInstanceSlowQueries）用于查询实例慢日志详情。
   */
  async DescribeInstanceSlowQueries(
    req: DescribeInstanceSlowQueriesRequest,
    cb?: (error: string, rep: DescribeInstanceSlowQueriesResponse) => void
  ): Promise<DescribeInstanceSlowQueriesResponse> {
    return this.request("DescribeInstanceSlowQueries", req, cb)
  }

  /**
   * 获取集群数据库列表
   */
  async DescribeClusterDatabases(
    req: DescribeClusterDatabasesRequest,
    cb?: (error: string, rep: DescribeClusterDatabasesResponse) => void
  ): Promise<DescribeClusterDatabasesResponse> {
    return this.request("DescribeClusterDatabases", req, cb)
  }

  /**
   * 修改集群参数
   */
  async ModifyClusterParam(
    req: ModifyClusterParamRequest,
    cb?: (error: string, rep: ModifyClusterParamResponse) => void
  ): Promise<ModifyClusterParamResponse> {
    return this.request("ModifyClusterParam", req, cb)
  }

  /**
   * 购买新集群
   */
  async CreateClusters(
    req: CreateClustersRequest,
    cb?: (error: string, rep: CreateClustersResponse) => void
  ): Promise<CreateClustersResponse> {
    return this.request("CreateClusters", req, cb)
  }

  /**
   * 创建用户账号
   */
  async CreateAccounts(
    req: CreateAccountsRequest,
    cb?: (error: string, rep: CreateAccountsResponse) => void
  ): Promise<CreateAccountsResponse> {
    return this.request("CreateAccounts", req, cb)
  }

  /**
   * 回档到新集群
   */
  async RollbackToNewCluster(
    req: RollbackToNewClusterRequest,
    cb?: (error: string, rep: RollbackToNewClusterResponse) => void
  ): Promise<RollbackToNewClusterResponse> {
    return this.request("RollbackToNewCluster", req, cb)
  }

  /**
   * 新购资源包
   */
  async CreateResourcePackage(
    req: CreateResourcePackageRequest,
    cb?: (error: string, rep: CreateResourcePackageResponse) => void
  ): Promise<CreateResourcePackageResponse> {
    return this.request("CreateResourcePackage", req, cb)
  }

  /**
   * 本接口(DescribeAuditLogFiles)用于查询云数据库实例的审计日志文件。
   */
  async DescribeAuditLogFiles(
    req: DescribeAuditLogFilesRequest,
    cb?: (error: string, rep: DescribeAuditLogFilesResponse) => void
  ): Promise<DescribeAuditLogFilesResponse> {
    return this.request("DescribeAuditLogFiles", req, cb)
  }

  /**
   * 删除数据库
   */
  async DeleteClusterDatabase(
    req: DeleteClusterDatabaseRequest,
    cb?: (error: string, rep: DeleteClusterDatabaseResponse) => void
  ): Promise<DeleteClusterDatabaseResponse> {
    return this.request("DeleteClusterDatabase", req, cb)
  }

  /**
   * 主备可用区切换
   */
  async SwitchClusterZone(
    req: SwitchClusterZoneRequest,
    cb?: (error: string, rep: SwitchClusterZoneResponse) => void
  ): Promise<SwitchClusterZoneResponse> {
    return this.request("SwitchClusterZone", req, cb)
  }

  /**
   * 本接口（AddInstances）用于集群添加实例
   */
  async AddInstances(
    req: AddInstancesRequest,
    cb?: (error: string, rep: AddInstancesResponse) => void
  ): Promise<AddInstancesResponse> {
    return this.request("AddInstances", req, cb)
  }

  /**
   * 修改实例小版本升级限制时间
   */
  async ModifyInstanceUpgradeLimitDays(
    req: ModifyInstanceUpgradeLimitDaysRequest,
    cb?: (error: string, rep: ModifyInstanceUpgradeLimitDaysResponse) => void
  ): Promise<ModifyInstanceUpgradeLimitDaysResponse> {
    return this.request("ModifyInstanceUpgradeLimitDays", req, cb)
  }

  /**
   * 删除用户账号
   */
  async DeleteAccounts(
    req: DeleteAccountsRequest,
    cb?: (error: string, rep: DeleteAccountsResponse) => void
  ): Promise<DeleteAccountsResponse> {
    return this.request("DeleteAccounts", req, cb)
  }

  /**
   * 批量回收账号权限
   */
  async RevokeAccountPrivileges(
    req: RevokeAccountPrivilegesRequest,
    cb?: (error: string, rep: RevokeAccountPrivilegesResponse) => void
  ): Promise<RevokeAccountPrivilegesResponse> {
    return this.request("RevokeAccountPrivileges", req, cb)
  }

  /**
   * 开启只读实例组接入
   */
  async OpenClusterReadOnlyInstanceGroupAccess(
    req?: OpenClusterReadOnlyInstanceGroupAccessRequest,
    cb?: (error: string, rep: OpenClusterReadOnlyInstanceGroupAccessResponse) => void
  ): Promise<OpenClusterReadOnlyInstanceGroupAccessResponse> {
    return this.request("OpenClusterReadOnlyInstanceGroupAccess", req, cb)
  }

  /**
   * 本接口(SearchClusterTables)搜索集群数据表列表
   */
  async SearchClusterTables(
    req: SearchClusterTablesRequest,
    cb?: (error: string, rep: SearchClusterTablesResponse) => void
  ): Promise<SearchClusterTablesResponse> {
    return this.request("SearchClusterTables", req, cb)
  }

  /**
   * 查询用户指定产品下的所有参数模板信息
   */
  async DescribeParamTemplates(
    req: DescribeParamTemplatesRequest,
    cb?: (error: string, rep: DescribeParamTemplatesResponse) => void
  ): Promise<DescribeParamTemplatesResponse> {
    return this.request("DescribeParamTemplates", req, cb)
  }

  /**
   * 为集群删除手动备份，无法删除自动备份
   */
  async DeleteBackup(
    req: DeleteBackupRequest,
    cb?: (error: string, rep: DeleteBackupResponse) => void
  ): Promise<DeleteBackupResponse> {
    return this.request("DeleteBackup", req, cb)
  }

  /**
   * 暂停serverless集群
   */
  async PauseServerless(
    req: PauseServerlessRequest,
    cb?: (error: string, rep: PauseServerlessResponse) => void
  ): Promise<PauseServerlessResponse> {
    return this.request("PauseServerless", req, cb)
  }

  /**
   * 修改账号主机
   */
  async ModifyAccountHost(
    req: ModifyAccountHostRequest,
    cb?: (error: string, rep: ModifyAccountHostResponse) => void
  ): Promise<ModifyAccountHostResponse> {
    return this.request("ModifyAccountHost", req, cb)
  }

  /**
   * 本接口(ResetAccountPassword)用于修改数据库账号密码
   */
  async ResetAccountPassword(
    req: ResetAccountPasswordRequest,
    cb?: (error: string, rep: ResetAccountPasswordResponse) => void
  ): Promise<ResetAccountPasswordResponse> {
    return this.request("ResetAccountPassword", req, cb)
  }

  /**
   * 本接口(DescribeInstanceDetail)用于查询实例详情。
   */
  async DescribeInstanceDetail(
    req: DescribeInstanceDetailRequest,
    cb?: (error: string, rep: DescribeInstanceDetailResponse) => void
  ): Promise<DescribeInstanceDetailResponse> {
    return this.request("DescribeInstanceDetail", req, cb)
  }

  /**
   * 获取审计实例列表
   */
  async DescribeAuditInstanceList(
    req: DescribeAuditInstanceListRequest,
    cb?: (error: string, rep: DescribeAuditInstanceListResponse) => void
  ): Promise<DescribeAuditInstanceListResponse> {
    return this.request("DescribeAuditInstanceList", req, cb)
  }

  /**
   * 查询回档时间范围
   */
  async DescribeRollbackTimeRange(
    req: DescribeRollbackTimeRangeRequest,
    cb?: (error: string, rep: DescribeRollbackTimeRangeResponse) => void
  ): Promise<DescribeRollbackTimeRangeResponse> {
    return this.request("DescribeRollbackTimeRange", req, cb)
  }

  /**
   * 本接口（DescribeFlow）用于查询任务流信息
   */
  async DescribeFlow(
    req: DescribeFlowRequest,
    cb?: (error: string, rep: DescribeFlowResponse) => void
  ): Promise<DescribeFlowResponse> {
    return this.request("DescribeFlow", req, cb)
  }

  /**
   * 本接口（ModifyInstanceParam）用于修改实例参数。
   */
  async ModifyInstanceParam(
    req: ModifyInstanceParamRequest,
    cb?: (error: string, rep: ModifyInstanceParamResponse) => void
  ): Promise<ModifyInstanceParamResponse> {
    return this.request("ModifyInstanceParam", req, cb)
  }

  /**
   * 查询实例日志投递信息
   */
  async DescribeInstanceCLSLogDelivery(
    req: DescribeInstanceCLSLogDeliveryRequest,
    cb?: (error: string, rep: DescribeInstanceCLSLogDeliveryResponse) => void
  ): Promise<DescribeInstanceCLSLogDeliveryResponse> {
    return this.request("DescribeInstanceCLSLogDelivery", req, cb)
  }

  /**
   * 为集群绑定资源包
   */
  async BindClusterResourcePackages(
    req: BindClusterResourcePackagesRequest,
    cb?: (error: string, rep: BindClusterResourcePackagesResponse) => void
  ): Promise<BindClusterResourcePackagesResponse> {
    return this.request("BindClusterResourcePackages", req, cb)
  }

  /**
   * 本接口(DescribeAuditLogs)用于查询数据库审计日志。
   */
  async DescribeAuditLogs(
    req: DescribeAuditLogsRequest,
    cb?: (error: string, rep: DescribeAuditLogsResponse) => void
  ): Promise<DescribeAuditLogsResponse> {
    return this.request("DescribeAuditLogs", req, cb)
  }

  /**
   * cynos解绑资源包
   */
  async UnbindClusterResourcePackages(
    req: UnbindClusterResourcePackagesRequest,
    cb?: (error: string, rep: UnbindClusterResourcePackagesResponse) => void
  ): Promise<UnbindClusterResourcePackagesResponse> {
    return this.request("UnbindClusterResourcePackages", req, cb)
  }

  /**
   * 查询数据库代理列表
   */
  async DescribeProxies(
    req: DescribeProxiesRequest,
    cb?: (error: string, rep: DescribeProxiesResponse) => void
  ): Promise<DescribeProxiesResponse> {
    return this.request("DescribeProxies", req, cb)
  }

  /**
   * 本接口（OpenWan）用于开通外网
   */
  async OpenWan(
    req: OpenWanRequest,
    cb?: (error: string, rep: OpenWanResponse) => void
  ): Promise<OpenWanResponse> {
    return this.request("OpenWan", req, cb)
  }

  /**
   * 查询新购集群价格
   */
  async InquirePriceCreate(
    req: InquirePriceCreateRequest,
    cb?: (error: string, rep: InquirePriceCreateResponse) => void
  ): Promise<InquirePriceCreateResponse> {
    return this.request("InquirePriceCreate", req, cb)
  }

  /**
   * 安全组批量绑定云资源
   */
  async AssociateSecurityGroups(
    req: AssociateSecurityGroupsRequest,
    cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void
  ): Promise<AssociateSecurityGroupsResponse> {
    return this.request("AssociateSecurityGroups", req, cb)
  }

  /**
   * 查询资源包规格
   */
  async DescribeResourcePackageSaleSpec(
    req: DescribeResourcePackageSaleSpecRequest,
    cb?: (error: string, rep: DescribeResourcePackageSaleSpecResponse) => void
  ): Promise<DescribeResourcePackageSaleSpecResponse> {
    return this.request("DescribeResourcePackageSaleSpec", req, cb)
  }

  /**
   * 修改账号库表权限
   */
  async ModifyAccountPrivileges(
    req: ModifyAccountPrivilegesRequest,
    cb?: (error: string, rep: ModifyAccountPrivilegesResponse) => void
  ): Promise<ModifyAccountPrivilegesResponse> {
    return this.request("ModifyAccountPrivileges", req, cb)
  }

  /**
   * 获取实例的审计规则
   */
  async DescribeAuditRuleWithInstanceIds(
    req: DescribeAuditRuleWithInstanceIdsRequest,
    cb?: (error: string, rep: DescribeAuditRuleWithInstanceIdsResponse) => void
  ): Promise<DescribeAuditRuleWithInstanceIdsResponse> {
    return this.request("DescribeAuditRuleWithInstanceIds", req, cb)
  }

  /**
   * 本接口(IsolateInstance)用于隔离实例。
   */
  async IsolateInstance(
    req: IsolateInstanceRequest,
    cb?: (error: string, rep: IsolateInstanceResponse) => void
  ): Promise<IsolateInstanceResponse> {
    return this.request("IsolateInstance", req, cb)
  }

  /**
   * 开启多可用区部署
   */
  async AddClusterSlaveZone(
    req: AddClusterSlaveZoneRequest,
    cb?: (error: string, rep: AddClusterSlaveZoneResponse) => void
  ): Promise<AddClusterSlaveZoneResponse> {
    return this.request("AddClusterSlaveZone", req, cb)
  }

  /**
   * 此接口（ModifyBackupName）用于修改备份文件备注名。
   */
  async ModifyBackupName(
    req: ModifyBackupNameRequest,
    cb?: (error: string, rep: ModifyBackupNameResponse) => void
  ): Promise<ModifyBackupNameResponse> {
    return this.request("ModifyBackupName", req, cb)
  }

  /**
   * 本接口(DescribeAccounts)用于查询数据库账号列表
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * SetRenewFlag设置实例的自动续费功能
   */
  async SetRenewFlag(
    req: SetRenewFlagRequest,
    cb?: (error: string, rep: SetRenewFlagResponse) => void
  ): Promise<SetRenewFlagResponse> {
    return this.request("SetRenewFlag", req, cb)
  }

  /**
   * 查询续费集群价格
   */
  async InquirePriceRenew(
    req: InquirePriceRenewRequest,
    cb?: (error: string, rep: InquirePriceRenewResponse) => void
  ): Promise<InquirePriceRenewResponse> {
    return this.request("InquirePriceRenew", req, cb)
  }

  /**
   * 开启日志投递
   */
  async StartCLSDelivery(
    req: StartCLSDeliveryRequest,
    cb?: (error: string, rep: StartCLSDeliveryResponse) => void
  ): Promise<StartCLSDeliveryResponse> {
    return this.request("StartCLSDelivery", req, cb)
  }

  /**
   * 负载均衡数据库代理
   */
  async ReloadBalanceProxyNode(
    req: ReloadBalanceProxyNodeRequest,
    cb?: (error: string, rep: ReloadBalanceProxyNodeResponse) => void
  ): Promise<ReloadBalanceProxyNodeResponse> {
    return this.request("ReloadBalanceProxyNode", req, cb)
  }

  /**
   * 本接口(SearchClusterDatabases)搜索集群数据库列表
   */
  async SearchClusterDatabases(
    req: SearchClusterDatabasesRequest,
    cb?: (error: string, rep: SearchClusterDatabasesResponse) => void
  ): Promise<SearchClusterDatabasesResponse> {
    return this.request("SearchClusterDatabases", req, cb)
  }

  /**
   * 修改审计规则模板
   */
  async ModifyAuditRuleTemplates(
    req: ModifyAuditRuleTemplatesRequest,
    cb?: (error: string, rep: ModifyAuditRuleTemplatesResponse) => void
  ): Promise<ModifyAuditRuleTemplatesResponse> {
    return this.request("ModifyAuditRuleTemplates", req, cb)
  }

  /**
   * 停止日志投递
   */
  async StopCLSDelivery(
    req: StopCLSDeliveryRequest,
    cb?: (error: string, rep: StopCLSDeliveryResponse) => void
  ): Promise<StopCLSDeliveryResponse> {
    return this.request("StopCLSDelivery", req, cb)
  }

  /**
   * 查询备份文件列表
   */
  async DescribeBackupList(
    req: DescribeBackupListRequest,
    cb?: (error: string, rep: DescribeBackupListResponse) => void
  ): Promise<DescribeBackupListResponse> {
    return this.request("DescribeBackupList", req, cb)
  }

  /**
   * 本接口(ModifyAccountDescription)用于修改数据库账号描述信息。
   */
  async ModifyAccountDescription(
    req: ModifyAccountDescriptionRequest,
    cb?: (error: string, rep: ModifyAccountDescriptionResponse) => void
  ): Promise<ModifyAccountDescriptionResponse> {
    return this.request("ModifyAccountDescription", req, cb)
  }

  /**
   * 创建数据库
   */
  async CreateClusterDatabase(
    req: CreateClusterDatabaseRequest,
    cb?: (error: string, rep: CreateClusterDatabaseResponse) => void
  ): Promise<CreateClusterDatabaseResponse> {
    return this.request("CreateClusterDatabase", req, cb)
  }

  /**
   * TDSQL-C for MySQL实例开通审计服务
   */
  async OpenAuditService(
    req: OpenAuditServiceRequest,
    cb?: (error: string, rep: OpenAuditServiceResponse) => void
  ): Promise<OpenAuditServiceResponse> {
    return this.request("OpenAuditService", req, cb)
  }

  /**
   * 本接口(DeleteAuditLogFile)用于删除云数据库实例的审计日志文件。
   */
  async DeleteAuditLogFile(
    req: DeleteAuditLogFileRequest,
    cb?: (error: string, rep: DeleteAuditLogFileResponse) => void
  ): Promise<DeleteAuditLogFileResponse> {
    return this.request("DeleteAuditLogFile", req, cb)
  }

  /**
   * 查询审计规则模板信息
   */
  async DescribeAuditRuleTemplates(
    req: DescribeAuditRuleTemplatesRequest,
    cb?: (error: string, rep: DescribeAuditRuleTemplatesResponse) => void
  ): Promise<DescribeAuditRuleTemplatesResponse> {
    return this.request("DescribeAuditRuleTemplates", req, cb)
  }

  /**
   * 查询资源包使用详情
   */
  async DescribeResourcePackageDetail(
    req: DescribeResourcePackageDetailRequest,
    cb?: (error: string, rep: DescribeResourcePackageDetailResponse) => void
  ): Promise<DescribeResourcePackageDetailResponse> {
    return this.request("DescribeResourcePackageDetail", req, cb)
  }

  /**
   * 修改指定集群的备份配置
   */
  async ModifyBackupConfig(
    req: ModifyBackupConfigRequest,
    cb?: (error: string, rep: ModifyBackupConfigResponse) => void
  ): Promise<ModifyBackupConfigResponse> {
    return this.request("ModifyBackupConfig", req, cb)
  }

  /**
   * 本接口(DescribeInstances)用于查询实例列表。
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 更新内核小版本
   */
  async UpgradeClusterVersion(
    req: UpgradeClusterVersionRequest,
    cb?: (error: string, rep: UpgradeClusterVersionResponse) => void
  ): Promise<UpgradeClusterVersionResponse> {
    return this.request("UpgradeClusterVersion", req, cb)
  }

  /**
   * 查询资源包列表
   */
  async DescribeResourcePackageList(
    req: DescribeResourcePackageListRequest,
    cb?: (error: string, rep: DescribeResourcePackageListResponse) => void
  ): Promise<DescribeResourcePackageListResponse> {
    return this.request("DescribeResourcePackageList", req, cb)
  }

  /**
   * 本接口（DescribeClusterParams）用于查询集群参数
   */
  async DescribeClusterParams(
    req: DescribeClusterParamsRequest,
    cb?: (error: string, rep: DescribeClusterParamsResponse) => void
  ): Promise<DescribeClusterParamsResponse> {
    return this.request("DescribeClusterParams", req, cb)
  }

  /**
   * 退款资源包
   */
  async RefundResourcePackage(
    req: RefundResourcePackageRequest,
    cb?: (error: string, rep: RefundResourcePackageResponse) => void
  ): Promise<RefundResourcePackageResponse> {
    return this.request("RefundResourcePackage", req, cb)
  }

  /**
   * 本接口(ModifyInstanceName)用于修改实例名称。
   */
  async ModifyInstanceName(
    req: ModifyInstanceNameRequest,
    cb?: (error: string, rep: ModifyInstanceNameResponse) => void
  ): Promise<ModifyInstanceNameResponse> {
    return this.request("ModifyInstanceName", req, cb)
  }

  /**
   * 查询实例维护时间窗
   */
  async DescribeMaintainPeriod(
    req: DescribeMaintainPeriodRequest,
    cb?: (error: string, rep: DescribeMaintainPeriodResponse) => void
  ): Promise<DescribeMaintainPeriodResponse> {
    return this.request("DescribeMaintainPeriod", req, cb)
  }

  /**
   * 本接口(SwitchProxyVpc)更换数据库代理vpc
   */
  async SwitchProxyVpc(
    req: SwitchProxyVpcRequest,
    cb?: (error: string, rep: SwitchProxyVpcResponse) => void
  ): Promise<SwitchProxyVpcResponse> {
    return this.request("SwitchProxyVpc", req, cb)
  }

  /**
   * 查询数据库列表
   */
  async DescribeClusterDetailDatabases(
    req: DescribeClusterDetailDatabasesRequest,
    cb?: (error: string, rep: DescribeClusterDetailDatabasesResponse) => void
  ): Promise<DescribeClusterDetailDatabasesResponse> {
    return this.request("DescribeClusterDetailDatabases", req, cb)
  }

  /**
   * 本接口(ModifyAuditService)用于修改云数据库审计日志保存时长、审计规则等服务配置。
   */
  async ModifyAuditService(
    req: ModifyAuditServiceRequest,
    cb?: (error: string, rep: ModifyAuditServiceResponse) => void
  ): Promise<ModifyAuditServiceResponse> {
    return this.request("ModifyAuditService", req, cb)
  }

  /**
   * 本接口(DescribeZones)用于查询可售卖地域可用区信息。
   */
  async DescribeZones(
    req: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 此接口（DescribeBackupDownloadUrl）用于查询集群备份文件下载地址。
   */
  async DescribeBackupDownloadUrl(
    req: DescribeBackupDownloadUrlRequest,
    cb?: (error: string, rep: DescribeBackupDownloadUrlResponse) => void
  ): Promise<DescribeBackupDownloadUrlResponse> {
    return this.request("DescribeBackupDownloadUrl", req, cb)
  }

  /**
   * 创建数据库代理
   */
  async CreateProxy(
    req: CreateProxyRequest,
    cb?: (error: string, rep: CreateProxyResponse) => void
  ): Promise<CreateProxyResponse> {
    return this.request("CreateProxy", req, cb)
  }

  /**
   * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
   */
  async ModifyDBInstanceSecurityGroups(
    req: ModifyDBInstanceSecurityGroupsRequest,
    cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void
  ): Promise<ModifyDBInstanceSecurityGroupsResponse> {
    return this.request("ModifyDBInstanceSecurityGroups", req, cb)
  }

  /**
   * 创建日志投递
   */
  async CreateCLSDelivery(
    req: CreateCLSDeliveryRequest,
    cb?: (error: string, rep: CreateCLSDeliveryResponse) => void
  ): Promise<CreateCLSDeliveryResponse> {
    return this.request("CreateCLSDelivery", req, cb)
  }

  /**
   * 此接口（ModifyBinlogSaveDays）用于修改集群Binlog保留天数。
   */
  async ModifyBinlogSaveDays(
    req: ModifyBinlogSaveDaysRequest,
    cb?: (error: string, rep: ModifyBinlogSaveDaysResponse) => void
  ): Promise<ModifyBinlogSaveDaysResponse> {
    return this.request("ModifyBinlogSaveDays", req, cb)
  }

  /**
   * 查询账号所有可授予权限
   */
  async DescribeAccountAllGrantPrivileges(
    req: DescribeAccountAllGrantPrivilegesRequest,
    cb?: (error: string, rep: DescribeAccountAllGrantPrivilegesResponse) => void
  ): Promise<DescribeAccountAllGrantPrivilegesResponse> {
    return this.request("DescribeAccountAllGrantPrivileges", req, cb)
  }

  /**
   * 开通只读实例独有访问接入组
   */
  async OpenReadOnlyInstanceExclusiveAccess(
    req: OpenReadOnlyInstanceExclusiveAccessRequest,
    cb?: (error: string, rep: OpenReadOnlyInstanceExclusiveAccessResponse) => void
  ): Promise<OpenReadOnlyInstanceExclusiveAccessResponse> {
    return this.request("OpenReadOnlyInstanceExclusiveAccess", req, cb)
  }

  /**
   * 本接口（DescribeClusterPasswordComplexity）用于查看集群密码复杂度详情
   */
  async DescribeClusterPasswordComplexity(
    req: DescribeClusterPasswordComplexityRequest,
    cb?: (error: string, rep: DescribeClusterPasswordComplexityResponse) => void
  ): Promise<DescribeClusterPasswordComplexityResponse> {
    return this.request("DescribeClusterPasswordComplexity", req, cb)
  }

  /**
   * 本接口（DeleteParamTemplate）用于删除用户创建的参数模板。
   */
  async DeleteParamTemplate(
    req: DeleteParamTemplateRequest,
    cb?: (error: string, rep: DeleteParamTemplateResponse) => void
  ): Promise<DeleteParamTemplateResponse> {
    return this.request("DeleteParamTemplate", req, cb)
  }

  /**
   * 实例变配
   */
  async UpgradeInstance(
    req: UpgradeInstanceRequest,
    cb?: (error: string, rep: UpgradeInstanceResponse) => void
  ): Promise<UpgradeInstanceResponse> {
    return this.request("UpgradeInstance", req, cb)
  }

  /**
   * 此接口（DescribeBinlogs）用来查询集群Binlog日志列表。
   */
  async DescribeBinlogs(
    req: DescribeBinlogsRequest,
    cb?: (error: string, rep: DescribeBinlogsResponse) => void
  ): Promise<DescribeBinlogsResponse> {
    return this.request("DescribeBinlogs", req, cb)
  }

  /**
   * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。
   */
  async DescribeClusterInstanceGroups(
    req: DescribeClusterInstanceGroupsRequest,
    cb?: (error: string, rep: DescribeClusterInstanceGroupsResponse) => void
  ): Promise<DescribeClusterInstanceGroupsResponse> {
    return this.request("DescribeClusterInstanceGroups", req, cb)
  }

  /**
   * 指定时间和集群查询是否可回滚
   */
  async DescribeRollbackTimeValidity(
    req: DescribeRollbackTimeValidityRequest,
    cb?: (error: string, rep: DescribeRollbackTimeValidityResponse) => void
  ): Promise<DescribeRollbackTimeValidityResponse> {
    return this.request("DescribeRollbackTimeValidity", req, cb)
  }

  /**
   * 查询实例安全组信息
   */
  async DescribeDBSecurityGroups(
    req: DescribeDBSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void
  ): Promise<DescribeDBSecurityGroupsResponse> {
    return this.request("DescribeDBSecurityGroups", req, cb)
  }

  /**
   * 本接口（OpenClusterPasswordComplexity）用于开启自定义密码复杂度功能
   */
  async OpenClusterPasswordComplexity(
    req: OpenClusterPasswordComplexityRequest,
    cb?: (error: string, rep: OpenClusterPasswordComplexityResponse) => void
  ): Promise<OpenClusterPasswordComplexityResponse> {
    return this.request("OpenClusterPasswordComplexity", req, cb)
  }

  /**
   * 修改资源包名称
   */
  async ModifyResourcePackageName(
    req: ModifyResourcePackageNameRequest,
    cb?: (error: string, rep: ModifyResourcePackageNameResponse) => void
  ): Promise<ModifyResourcePackageNameResponse> {
    return this.request("ModifyResourcePackageName", req, cb)
  }

  /**
   * 关闭多可用区部署
   */
  async RemoveClusterSlaveZone(
    req: RemoveClusterSlaveZoneRequest,
    cb?: (error: string, rep: RemoveClusterSlaveZoneResponse) => void
  ): Promise<RemoveClusterSlaveZoneResponse> {
    return this.request("RemoveClusterSlaveZone", req, cb)
  }

  /**
   * 本接口（DescribeParamTemplateDetail）用于查询用户参数模板详情
   */
  async DescribeParamTemplateDetail(
    req: DescribeParamTemplateDetailRequest,
    cb?: (error: string, rep: DescribeParamTemplateDetailResponse) => void
  ): Promise<DescribeParamTemplateDetailResponse> {
    return this.request("DescribeParamTemplateDetail", req, cb)
  }

  /**
   * 此接口（ExportInstanceErrorLogs）用于导出实例错误日志。
   */
  async ExportInstanceErrorLogs(
    req: ExportInstanceErrorLogsRequest,
    cb?: (error: string, rep: ExportInstanceErrorLogsResponse) => void
  ): Promise<ExportInstanceErrorLogsResponse> {
    return this.request("ExportInstanceErrorLogs", req, cb)
  }
}

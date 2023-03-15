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
  RemoveClusterSlaveZoneRequest,
  ModifyClusterNameRequest,
  DescribeRollbackTimeRangeRequest,
  InquirePriceRenewRequest,
  InstanceAuditRule,
  DescribeAuditLogsRequest,
  DescribeBackupConfigRequest,
  ModifyAuditRuleTemplatesRequest,
  DescribeAccountsRequest,
  ModifyMaintainPeriodConfigRequest,
  DescribeRollbackTimeRangeResponse,
  BillingResourceInfo,
  ModifyBackupNameResponse,
  ModifyClusterStorageRequest,
  RollBackClusterRequest,
  DescribeAuditLogFilesResponse,
  SwitchClusterZoneResponse,
  ModifyParamItem,
  AssociateSecurityGroupsRequest,
  DescribeBinlogDownloadUrlRequest,
  CreateAccountsResponse,
  ModifyInstanceNameRequest,
  DescribeDBSecurityGroupsResponse,
  DescribeMaintainPeriodRequest,
  AccountParam,
  DescribeBinlogsResponse,
  DescribeInstancesResponse,
  DescribeZonesRequest,
  ClusterInstanceDetail,
  AddClusterSlaveZoneResponse,
  OldAddrInfo,
  ModifyClusterNameResponse,
  DescribeClusterParamsResponse,
  IsolateInstanceResponse,
  AuditLogFilter,
  DescribeParamTemplatesRequest,
  DescribeAuditLogsResponse,
  SearchClusterTablesRequest,
  PauseServerlessRequest,
  ModifiableInfo,
  DescribeFlowResponse,
  RevokeAccountPrivilegesResponse,
  CreateClustersResponse,
  SetRenewFlagRequest,
  CynosdbInstanceGrp,
  SlowQueriesItem,
  ActivateInstanceRequest,
  DatabaseTables,
  AddClusterSlaveZoneRequest,
  DescribeAccountAllGrantPrivilegesResponse,
  RollbackDatabase,
  ModifyVipVportRequest,
  DatabasePrivileges,
  DescribeClustersRequest,
  ModifyClusterStorageResponse,
  DescribeInstanceDetailResponse,
  ModifyDBInstanceSecurityGroupsResponse,
  DeleteAuditLogFileResponse,
  DescribeClusterParamLogsResponse,
  DescribeClusterInstanceGrpsRequest,
  DescribeResourcesByDealNameResponse,
  InstanceNetInfo,
  CreateAccountsRequest,
  DeleteAuditRuleTemplatesRequest,
  DescribeAuditRuleTemplatesResponse,
  SwitchClusterZoneRequest,
  RestartInstanceRequest,
  Ability,
  InstanceInitInfo,
  UpgradeInstanceRequest,
  RollbackTable,
  IsolateInstanceRequest,
  SwitchClusterVpcResponse,
  DescribeClusterDetailRequest,
  DeleteBackupResponse,
  Tag,
  DescribeProjectSecurityGroupsResponse,
  RemoveClusterSlaveZoneResponse,
  CreateAuditLogFileResponse,
  PauseServerlessResponse,
  OfflineClusterRequest,
  ResetAccountPasswordResponse,
  NewAccount,
  BackupFileInfo,
  TablePrivileges,
  DescribeBinlogDownloadUrlResponse,
  DescribeAuditRuleWithInstanceIdsResponse,
  UpgradeInstanceResponse,
  DescribeBackupListRequest,
  SearchClusterDatabasesRequest,
  SwitchClusterVpcRequest,
  CynosdbInstance,
  DescribeAuditRuleWithInstanceIdsRequest,
  DbTable,
  ModifyClusterSlaveZoneResponse,
  GrantAccountPrivilegesRequest,
  BinlogItem,
  ModifyAuditServiceRequest,
  CreateClustersRequest,
  RollbackTableInfo,
  DescribeClustersResponse,
  QueryFilter,
  DescribeBackupConfigResponse,
  ModifyVipVportResponse,
  ModifyDBInstanceSecurityGroupsRequest,
  DescribeParamTemplatesResponse,
  CloseAuditServiceRequest,
  AddInstancesResponse,
  Addr,
  ParamTemplateListInfo,
  ParamInfo,
  DescribeProjectSecurityGroupsRequest,
  ModifyClusterParamResponse,
  SecurityGroup,
  DescribeBackupDownloadUrlRequest,
  RollbackTimeRange,
  OfflineInstanceRequest,
  OpenAuditServiceRequest,
  PolicyRule,
  NetAddr,
  TemplateParamInfo,
  AssociateSecurityGroupsResponse,
  DescribeResourcesByDealNameRequest,
  CloseAuditServiceResponse,
  CreateBackupResponse,
  DescribeRollbackTimeValidityResponse,
  AuditRuleTemplateInfo,
  DescribeInstanceSlowQueriesResponse,
  DescribeInstancesRequest,
  DescribeBackupDownloadUrlResponse,
  ResumeServerlessRequest,
  InquirePriceCreateRequest,
  CreateAuditRuleTemplateRequest,
  ModifyBackupConfigResponse,
  DescribeInstanceSpecsRequest,
  ExportInstanceSlowQueriesRequest,
  ParamItem,
  ModifyAccountParamsRequest,
  CynosdbCluster,
  CreateAuditRuleTemplateResponse,
  DescribeZonesResponse,
  IsolateClusterResponse,
  SaleZone,
  ObjectTask,
  OpenAuditServiceResponse,
  OfflineClusterResponse,
  SwitchProxyVpcResponse,
  RevokeAccountPrivilegesRequest,
  ResumeServerlessResponse,
  DescribeAuditRuleTemplatesRequest,
  InstanceSpec,
  DescribeFlowRequest,
  AuditLogFile,
  SetRenewFlagResponse,
  Account,
  CreateBackupRequest,
  DescribeClusterParamLogsRequest,
  SearchClusterTablesResponse,
  Module,
  DescribeMaintainPeriodResponse,
  SwitchProxyVpcRequest,
  DescribeBackupListResponse,
  SaleRegion,
  RollBackClusterResponse,
  RestartInstanceResponse,
  DescribeBinlogSaveDaysRequest,
  ModifyBackupConfigRequest,
  ActivateInstanceResponse,
  DescribeRollbackTimeValidityRequest,
  CreateAuditLogFileRequest,
  DeleteAuditLogFileRequest,
  AddInstancesRequest,
  InquirePriceCreateResponse,
  ModifyClusterSlaveZoneRequest,
  GrantAccountPrivilegesResponse,
  ClusterParamModifyLog,
  DescribeInstanceSlowQueriesRequest,
  CynosdbInstanceDetail,
  RuleFilters,
  ExportInstanceSlowQueriesResponse,
  CynosdbClusterDetail,
  ResetAccountPasswordRequest,
  SearchClusterDatabasesResponse,
  DescribeInstanceDetailRequest,
  ModifyMaintainPeriodConfigResponse,
  DisassociateSecurityGroupsRequest,
  ModifyBackupNameRequest,
  ModifyInstanceNameResponse,
  AuditRuleFilters,
  DescribeBinlogSaveDaysResponse,
  ModifyClusterParamRequest,
  DescribeAccountsResponse,
  ModifyAccountParamsResponse,
  DeleteBackupRequest,
  TradePrice,
  DescribeClusterParamsRequest,
  AuditLog,
  DescribeInstanceSpecsResponse,
  DescribeDBSecurityGroupsRequest,
  DescribeAccountAllGrantPrivilegesRequest,
  OfflineInstanceResponse,
  ModifyAuditServiceResponse,
  IsolateClusterRequest,
  DeleteAuditRuleTemplatesResponse,
  DescribeAuditLogFilesRequest,
  DescribeClusterDetailResponse,
  DescribeClusterInstanceGrpsResponse,
  DescribeBinlogsRequest,
  InputAccount,
  DisassociateSecurityGroupsResponse,
  ZoneStockInfo,
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
   * 本接口(ModifyAuditService)用于修改云数据库审计日志保存时长、审计规则等服务配置。
   */
  async ModifyAuditService(
    req: ModifyAuditServiceRequest,
    cb?: (error: string, rep: ModifyAuditServiceResponse) => void
  ): Promise<ModifyAuditServiceResponse> {
    return this.request("ModifyAuditService", req, cb)
  }

  /**
   * 下线实例
   */
  async OfflineInstance(
    req: OfflineInstanceRequest,
    cb?: (error: string, rep: OfflineInstanceResponse) => void
  ): Promise<OfflineInstanceResponse> {
    return this.request("OfflineInstance", req, cb)
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
   * 批量回收账号权限
   */
  async RevokeAccountPrivileges(
    req: RevokeAccountPrivilegesRequest,
    cb?: (error: string, rep: RevokeAccountPrivilegesResponse) => void
  ): Promise<RevokeAccountPrivilegesResponse> {
    return this.request("RevokeAccountPrivileges", req, cb)
  }

  /**
   * 本接口（RollBackCluster）用于回档集群
   */
  async RollBackCluster(
    req: RollBackClusterRequest,
    cb?: (error: string, rep: RollBackClusterResponse) => void
  ): Promise<RollBackClusterResponse> {
    return this.request("RollBackCluster", req, cb)
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
   * 此接口（DescribeBinlogSaveDays）用于查询集群的Binlog保留天数。
   */
  async DescribeBinlogSaveDays(
    req: DescribeBinlogSaveDaysRequest,
    cb?: (error: string, rep: DescribeBinlogSaveDaysResponse) => void
  ): Promise<DescribeBinlogSaveDaysResponse> {
    return this.request("DescribeBinlogSaveDays", req, cb)
  }

  /**
   * 本接口（DescribeInstanceSpecs）用于查询实例规格
   */
  async DescribeInstanceSpecs(
    req: DescribeInstanceSpecsRequest,
    cb?: (error: string, rep: DescribeInstanceSpecsResponse) => void
  ): Promise<DescribeInstanceSpecsResponse> {
    return this.request("DescribeInstanceSpecs", req, cb)
  }

  /**
   * 增加从可用区
   */
  async AddClusterSlaveZone(
    req: AddClusterSlaveZoneRequest,
    cb?: (error: string, rep: AddClusterSlaveZoneResponse) => void
  ): Promise<AddClusterSlaveZoneResponse> {
    return this.request("AddClusterSlaveZone", req, cb)
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
   * 本接口（DescribeClusterInstanceGrps）用于查询实例组信息。
   */
  async DescribeClusterInstanceGrps(
    req: DescribeClusterInstanceGrpsRequest,
    cb?: (error: string, rep: DescribeClusterInstanceGrpsResponse) => void
  ): Promise<DescribeClusterInstanceGrpsResponse> {
    return this.request("DescribeClusterInstanceGrps", req, cb)
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
   * TDSQL-C for MySQL实例开通审计服务
   */
  async OpenAuditService(
    req: OpenAuditServiceRequest,
    cb?: (error: string, rep: OpenAuditServiceResponse) => void
  ): Promise<OpenAuditServiceResponse> {
    return this.request("OpenAuditService", req, cb)
  }

  /**
   * 创建审计规则模版
   */
  async CreateAuditRuleTemplate(
    req: CreateAuditRuleTemplateRequest,
    cb?: (error: string, rep: CreateAuditRuleTemplateResponse) => void
  ): Promise<CreateAuditRuleTemplateResponse> {
    return this.request("CreateAuditRuleTemplate", req, cb)
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
   * 本接口(DeleteAuditLogFile)用于删除云数据库实例的审计日志文件。
   */
  async DeleteAuditLogFile(
    req: DeleteAuditLogFileRequest,
    cb?: (error: string, rep: DeleteAuditLogFileResponse) => void
  ): Promise<DeleteAuditLogFileResponse> {
    return this.request("DeleteAuditLogFile", req, cb)
  }

  /**
   * 本接口(ResetAccountPassword)用于重置实例的数据库账号密码。
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
   * 查询审计规则模版信息
   */
  async DescribeAuditRuleTemplates(
    req: DescribeAuditRuleTemplatesRequest,
    cb?: (error: string, rep: DescribeAuditRuleTemplatesResponse) => void
  ): Promise<DescribeAuditRuleTemplatesResponse> {
    return this.request("DescribeAuditRuleTemplates", req, cb)
  }

  /**
   * 查询指定集群有效回滚时间范围
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
   * 删除审计规则模版
   */
  async DeleteAuditRuleTemplates(
    req: DeleteAuditRuleTemplatesRequest,
    cb?: (error: string, rep: DeleteAuditRuleTemplatesResponse) => void
  ): Promise<DeleteAuditRuleTemplatesResponse> {
    return this.request("DeleteAuditRuleTemplates", req, cb)
  }

  /**
   * 本接口（DescribeClusterParamLogs）查询参数修改日志
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
   * 本接口(DescribeAuditLogs)用于查询数据库审计日志。
   */
  async DescribeAuditLogs(
    req: DescribeAuditLogsRequest,
    cb?: (error: string, rep: DescribeAuditLogsResponse) => void
  ): Promise<DescribeAuditLogsResponse> {
    return this.request("DescribeAuditLogs", req, cb)
  }

  /**
   * 修改从可用区
   */
  async ModifyClusterSlaveZone(
    req: ModifyClusterSlaveZoneRequest,
    cb?: (error: string, rep: ModifyClusterSlaveZoneResponse) => void
  ): Promise<ModifyClusterSlaveZoneResponse> {
    return this.request("ModifyClusterSlaveZone", req, cb)
  }

  /**
   * 修改账号参数
   */
  async ModifyAccountParams(
    req: ModifyAccountParamsRequest,
    cb?: (error: string, rep: ModifyAccountParamsResponse) => void
  ): Promise<ModifyAccountParamsResponse> {
    return this.request("ModifyAccountParams", req, cb)
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
   * 为集群创建手动备份
   */
  async CreateBackup(
    req: CreateBackupRequest,
    cb?: (error: string, rep: CreateBackupResponse) => void
  ): Promise<CreateBackupResponse> {
    return this.request("CreateBackup", req, cb)
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
   * 恢复serverless集群
   */
  async ResumeServerless(
    req: ResumeServerlessRequest,
    cb?: (error: string, rep: ResumeServerlessResponse) => void
  ): Promise<ResumeServerlessResponse> {
    return this.request("ResumeServerless", req, cb)
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
   * 查询集群列表
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
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
   * 隔离集群
   */
  async IsolateCluster(
    req: IsolateClusterRequest,
    cb?: (error: string, rep: IsolateClusterResponse) => void
  ): Promise<IsolateClusterResponse> {
    return this.request("IsolateCluster", req, cb)
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
   * 此接口（DescribeBackupDownloadUrl）用于查询集群备份文件下载地址。
   */
  async DescribeBackupDownloadUrl(
    req: DescribeBackupDownloadUrlRequest,
    cb?: (error: string, rep: DescribeBackupDownloadUrlResponse) => void
  ): Promise<DescribeBackupDownloadUrlResponse> {
    return this.request("DescribeBackupDownloadUrl", req, cb)
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
   * 安全组批量绑定云资源
   */
  async AssociateSecurityGroups(
    req: AssociateSecurityGroupsRequest,
    cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void
  ): Promise<AssociateSecurityGroupsResponse> {
    return this.request("AssociateSecurityGroups", req, cb)
  }

  /**
   * 删除从可用区
   */
  async RemoveClusterSlaveZone(
    req: RemoveClusterSlaveZoneRequest,
    cb?: (error: string, rep: RemoveClusterSlaveZoneResponse) => void
  ): Promise<RemoveClusterSlaveZoneResponse> {
    return this.request("RemoveClusterSlaveZone", req, cb)
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
   * 本接口(SwitchProxyVpc)更换数据库代理vpc
   */
  async SwitchProxyVpc(
    req: SwitchProxyVpcRequest,
    cb?: (error: string, rep: SwitchProxyVpcResponse) => void
  ): Promise<SwitchProxyVpcResponse> {
    return this.request("SwitchProxyVpc", req, cb)
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
   * 获取指定集群的备份配置信息，包括全量备份时间段，备份文件保留时间
   */
  async DescribeBackupConfig(
    req: DescribeBackupConfigRequest,
    cb?: (error: string, rep: DescribeBackupConfigResponse) => void
  ): Promise<DescribeBackupConfigResponse> {
    return this.request("DescribeBackupConfig", req, cb)
  }

  /**
   * 账号所有权限
   */
  async DescribeAccountAllGrantPrivileges(
    req: DescribeAccountAllGrantPrivilegesRequest,
    cb?: (error: string, rep: DescribeAccountAllGrantPrivilegesResponse) => void
  ): Promise<DescribeAccountAllGrantPrivilegesResponse> {
    return this.request("DescribeAccountAllGrantPrivileges", req, cb)
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
   * 此接口（DescribeBinlogDownloadUrl）用于查询Binlog的下载地址。
   */
  async DescribeBinlogDownloadUrl(
    req: DescribeBinlogDownloadUrlRequest,
    cb?: (error: string, rep: DescribeBinlogDownloadUrlResponse) => void
  ): Promise<DescribeBinlogDownloadUrlResponse> {
    return this.request("DescribeBinlogDownloadUrl", req, cb)
  }

  /**
   * 本接口(DescribeAccounts)用于查询数据库管理账号。
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 根据计费订单id查询资源列表
   */
  async DescribeResourcesByDealName(
    req: DescribeResourcesByDealNameRequest,
    cb?: (error: string, rep: DescribeResourcesByDealNameResponse) => void
  ): Promise<DescribeResourcesByDealNameResponse> {
    return this.request("DescribeResourcesByDealName", req, cb)
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
   * 暂停serverless集群
   */
  async PauseServerless(
    req: PauseServerlessRequest,
    cb?: (error: string, rep: PauseServerlessResponse) => void
  ): Promise<PauseServerlessResponse> {
    return this.request("PauseServerless", req, cb)
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
   * 升级实例
   */
  async UpgradeInstance(
    req: UpgradeInstanceRequest,
    cb?: (error: string, rep: UpgradeInstanceResponse) => void
  ): Promise<UpgradeInstanceResponse> {
    return this.request("UpgradeInstance", req, cb)
  }

  /**
   * 创建集群
   */
  async CreateClusters(
    req: CreateClustersRequest,
    cb?: (error: string, rep: CreateClustersResponse) => void
  ): Promise<CreateClustersResponse> {
    return this.request("CreateClusters", req, cb)
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
   * 创建账号
   */
  async CreateAccounts(
    req: CreateAccountsRequest,
    cb?: (error: string, rep: CreateAccountsResponse) => void
  ): Promise<CreateAccountsResponse> {
    return this.request("CreateAccounts", req, cb)
  }

  /**
   * 升级预付费存储
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
   * 查询实例安全组信息
   */
  async DescribeDBSecurityGroups(
    req: DescribeDBSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void
  ): Promise<DescribeDBSecurityGroupsResponse> {
    return this.request("DescribeDBSecurityGroups", req, cb)
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
   * 本接口(DescribeZones)用于查询可售卖地域可用区信息。
   */
  async DescribeZones(
    req: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
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
   * 下线集群
   */
  async OfflineCluster(
    req: OfflineClusterRequest,
    cb?: (error: string, rep: OfflineClusterResponse) => void
  ): Promise<OfflineClusterResponse> {
    return this.request("OfflineCluster", req, cb)
  }

  /**
   * 修改审计规则模版
   */
  async ModifyAuditRuleTemplates(
    req: ModifyAuditRuleTemplatesRequest,
    cb?: (error: string, rep: ModifyAuditRuleTemplatesResponse) => void
  ): Promise<ModifyAuditRuleTemplatesResponse> {
    return this.request("ModifyAuditRuleTemplates", req, cb)
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
   * 本接口(SearchClusterTables)搜索集群数据表列表
   */
  async SearchClusterTables(
    req: SearchClusterTablesRequest,
    cb?: (error: string, rep: SearchClusterTablesResponse) => void
  ): Promise<SearchClusterTablesResponse> {
    return this.request("SearchClusterTables", req, cb)
  }

  /**
   * 切换到从可用区
   */
  async SwitchClusterZone(
    req: SwitchClusterZoneRequest,
    cb?: (error: string, rep: SwitchClusterZoneResponse) => void
  ): Promise<SwitchClusterZoneResponse> {
    return this.request("SwitchClusterZone", req, cb)
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
   * 本接口(SearchClusterDatabases)搜索集群database列表
   */
  async SearchClusterDatabases(
    req: SearchClusterDatabasesRequest,
    cb?: (error: string, rep: SearchClusterDatabasesResponse) => void
  ): Promise<SearchClusterDatabasesResponse> {
    return this.request("SearchClusterDatabases", req, cb)
  }

  /**
   * 此接口（DescribeInstanceSlowQueries）用于查询实例慢查询日志。
   */
  async DescribeInstanceSlowQueries(
    req: DescribeInstanceSlowQueriesRequest,
    cb?: (error: string, rep: DescribeInstanceSlowQueriesResponse) => void
  ): Promise<DescribeInstanceSlowQueriesResponse> {
    return this.request("DescribeInstanceSlowQueries", req, cb)
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
   * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
   */
  async ModifyDBInstanceSecurityGroups(
    req: ModifyDBInstanceSecurityGroupsRequest,
    cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void
  ): Promise<ModifyDBInstanceSecurityGroupsResponse> {
    return this.request("ModifyDBInstanceSecurityGroups", req, cb)
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
}

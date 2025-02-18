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
  CreateDBInstancesRequest,
  TaskDetail,
  SetAutoRenewFlagRequest,
  DeleteBackupPlanResponse,
  DescribeAccountPrivilegesResponse,
  DescribeDatabasesRequest,
  DescribeDBXlogsRequest,
  CreateReadOnlyGroupNetworkAccessRequest,
  DescribeAccountsRequest,
  DeleteReadOnlyGroupResponse,
  OpenDBExtranetAccessRequest,
  CreateInstancesRequest,
  SpecItemInfo,
  ParameterTemplate,
  CreateDBInstanceNetworkAccessResponse,
  DescribeAvailableRecoveryTimeResponse,
  CreateBaseBackupRequest,
  ModifyDBInstanceReadOnlyGroupResponse,
  ClassInfo,
  DescribeDBInstanceParametersResponse,
  DescribeDBInstanceSecurityGroupsResponse,
  BackupPlan,
  RestoreDBInstanceObjectsResponse,
  SlowlogDetail,
  SwitchDBInstancePrimaryRequest,
  OpenServerlessDBExtranetAccessRequest,
  RenewInstanceResponse,
  DeleteServerlessDBInstanceResponse,
  DeleteLogBackupResponse,
  ModifyReadOnlyGroupConfigRequest,
  BackupSummary,
  AddDBInstanceToReadOnlyGroupRequest,
  DescribeProductConfigRequest,
  RemoveDBInstanceFromReadOnlyGroupRequest,
  CreateAccountRequest,
  InitDBInstancesResponse,
  DescribeTasksResponse,
  DescribeMaintainTimeWindowResponse,
  DescribeDefaultParametersRequest,
  DescribeDedicatedClustersResponse,
  RenewInstanceRequest,
  DescribeBackupOverviewRequest,
  DescribeRegionsResponse,
  ModifyBaseBackupExpireTimeResponse,
  UpgradeDBInstanceMajorVersionResponse,
  ModifyBackupDownloadRestrictionRequest,
  DBInstanceNetInfo,
  BackupDownloadRestriction,
  ModifyDBInstanceDeploymentRequest,
  DeleteReadOnlyGroupNetworkAccessRequest,
  DescribeBackupDownloadRestrictionRequest,
  ZoneInfo,
  CreateDatabaseRequest,
  NormalQueryItem,
  Tag,
  DescribeBackupSummariesRequest,
  CreateBackupPlanRequest,
  CloseServerlessDBExtranetAccessRequest,
  CreateBaseBackupResponse,
  LockAccountResponse,
  CloneDBInstanceResponse,
  ModifyDBInstanceReadOnlyGroupRequest,
  AddDBInstanceToReadOnlyGroupResponse,
  EncryptionKey,
  BaseBackup,
  CreateReadOnlyDBInstanceResponse,
  DescribeAvailableRecoveryTimeRequest,
  DescribeTasksRequest,
  DescribeDBInstanceParametersRequest,
  DescribeOrdersResponse,
  DescribeBackupDownloadURLResponse,
  OpenServerlessDBExtranetAccessResponse,
  ModifyMaintainTimeWindowResponse,
  InquiryPriceCreateDBInstancesResponse,
  Version,
  CreateDBInstanceNetworkAccessRequest,
  ModifySwitchTimePeriodResponse,
  TaskSet,
  InquiryPriceCreateDBInstancesRequest,
  DescribeDefaultParametersResponse,
  ServerlessDBInstanceNetInfo,
  DescribeBackupPlansResponse,
  DescribeDBInstancesRequest,
  ReadOnlyGroup,
  ModifyDBInstanceSpecRequest,
  ModifyAccountRemarkResponse,
  UpgradeDBInstanceRequest,
  DescribeZonesRequest,
  SpecInfo,
  ModifyMaintainTimeWindowRequest,
  ModifyBackupDownloadRestrictionResponse,
  ParamVersionRelation,
  DescribeLogBackupsRequest,
  SetAutoRenewFlagResponse,
  ModifyPrivilege,
  NetworkAccess,
  DescribeDBInstanceAttributeRequest,
  ResetAccountPasswordResponse,
  RemoveDBInstanceFromReadOnlyGroupResponse,
  RawSlowQuery,
  DescribeDatabaseObjectsRequest,
  DescribeParameterTemplatesResponse,
  ParamSpecRelation,
  DatabaseObject,
  UpgradeDBInstanceKernelVersionRequest,
  SwitchDBInstancePrimaryResponse,
  ModifyReadOnlyDBInstanceWeightResponse,
  ModifyDBInstanceHAConfigRequest,
  PgDeal,
  DeleteReadOnlyGroupNetworkAccessResponse,
  DescribeMaintainTimeWindowRequest,
  DescribeBackupSummariesResponse,
  DescribeDBErrlogsRequest,
  DBBackup,
  ModifyDBInstancesProjectResponse,
  DeleteBackupPlanRequest,
  CloneDBInstanceRequest,
  DeleteParameterTemplateRequest,
  DescribeClassesRequest,
  DescribeParamsEventRequest,
  EventInfo,
  CreateInstancesResponse,
  AnalysisItems,
  Xlog,
  DescribeServerlessDBInstancesRequest,
  DescribeDBBackupsResponse,
  DescribeRegionsRequest,
  DescribeSlowQueryListResponse,
  ServerlessDBInstance,
  CreateReadOnlyGroupRequest,
  ModifyDBInstanceSSLConfigResponse,
  DescribeParamsEventResponse,
  ModifyDBInstanceSecurityGroupsRequest,
  DescribeDedicatedClustersRequest,
  CloseServerlessDBExtranetAccessResponse,
  EventItem,
  RestartDBInstanceRequest,
  DescribeDBInstanceHAConfigRequest,
  CreateParameterTemplateResponse,
  ParamInfo,
  DescribeLogBackupsResponse,
  Detail,
  SecurityGroup,
  IsolateDBInstancesResponse,
  OpenDBExtranetAccessResponse,
  InquiryPriceUpgradeDBInstanceRequest,
  DescribeDBInstanceHAConfigResponse,
  DescribeDatabaseObjectsResponse,
  IsolateDBInstancesRequest,
  ModifyDBInstanceNameRequest,
  DescribeDBInstanceSSLConfigResponse,
  ModifyParameterTemplateRequest,
  DeleteAccountRequest,
  UpgradeDBInstanceKernelVersionResponse,
  InquiryPriceRenewDBInstanceResponse,
  DescribeSlowQueryAnalysisRequest,
  ErrLogDetail,
  DescribeServerlessDBInstancesResponse,
  DescribeBackupOverviewResponse,
  DescribeParameterTemplatesRequest,
  InitDBInstancesRequest,
  DescribeClassesResponse,
  DeleteDBInstanceNetworkAccessRequest,
  ModifyDBInstanceDeploymentResponse,
  UnlockAccountRequest,
  DBInstance,
  DeleteParameterTemplateResponse,
  ModifyReadOnlyDBInstanceWeightRequest,
  ModifyAccountPrivilegesResponse,
  Database,
  DeleteReadOnlyGroupRequest,
  DescribeDBBackupsRequest,
  RestartDBInstanceResponse,
  Filter,
  DescribeReadOnlyGroupsRequest,
  DescribeBaseBackupsResponse,
  ModifyDBInstanceParametersResponse,
  DescribeDBVersionsResponse,
  ModifyDBInstanceSSLConfigRequest,
  DatabasePrivilege,
  UnlockAccountResponse,
  ModifyDBInstanceSecurityGroupsResponse,
  DBNode,
  ModifyDBInstanceNameResponse,
  UpgradeDBInstanceMajorVersionRequest,
  CloseDBExtranetAccessResponse,
  DescribeBackupDownloadRestrictionResponse,
  CreateReadOnlyDBInstanceRequest,
  DescribeCloneDBInstanceSpecResponse,
  DescribeZonesResponse,
  CreateServerlessDBInstanceResponse,
  DescribeDatabasesResponse,
  DescribeProductConfigResponse,
  DescribeOrdersRequest,
  CloseDBExtranetAccessRequest,
  ModifyParameterTemplateResponse,
  DescribeEncryptionKeysRequest,
  LogBackup,
  RebalanceReadOnlyGroupRequest,
  ModifyBackupPlanResponse,
  DestroyDBInstanceRequest,
  CreateServerlessDBInstanceRequest,
  InquiryPriceRenewDBInstanceRequest,
  CreateReadOnlyGroupResponse,
  DeleteDBInstanceNetworkAccessResponse,
  ModifyAccountPrivilegesRequest,
  DeleteServerlessDBInstanceRequest,
  ModifyReadOnlyGroupConfigResponse,
  AccountInfo,
  ModifyAccountRemarkRequest,
  DescribeParameterTemplateAttributesRequest,
  DescribeDBErrlogsResponse,
  ModifyBackupPlanRequest,
  DeleteBaseBackupRequest,
  ParamEntry,
  InquiryPriceUpgradeDBInstanceResponse,
  DisIsolateDBInstancesResponse,
  CreateParameterTemplateRequest,
  DescribeDBInstanceSSLConfigRequest,
  ModifyDatabaseOwnerResponse,
  ModifySwitchTimePeriodRequest,
  CreateAccountResponse,
  DescribeSlowQueryListRequest,
  DescribeCloneDBInstanceSpecRequest,
  RegionInfo,
  ModifyDatabaseOwnerRequest,
  DisIsolateDBInstancesRequest,
  CreateBackupPlanResponse,
  LockAccountRequest,
  DescribeDBInstancesResponse,
  DescribeDBInstanceSecurityGroupsRequest,
  DescribeBackupPlansRequest,
  ModifyBaseBackupExpireTimeRequest,
  ModifyDBInstanceHAConfigResponse,
  CreateDatabaseResponse,
  RebalanceReadOnlyGroupResponse,
  ResetAccountPasswordRequest,
  DescribeSlowQueryAnalysisResponse,
  ModifyDBInstanceParametersRequest,
  DedicatedCluster,
  ServerlessDBAccount,
  DurationAnalysis,
  DescribeDBSlowlogsResponse,
  DescribeAccountPrivilegesRequest,
  DescribeReadOnlyGroupsResponse,
  RestoreDBInstanceObjectsRequest,
  DescribeAccountsResponse,
  ModifyDBInstanceChargeTypeRequest,
  DescribeParameterTemplateAttributesResponse,
  UpgradeDBInstanceResponse,
  DescribeDBVersionsRequest,
  ModifyDBInstancesProjectRequest,
  DescribeDBSlowlogsRequest,
  DestroyDBInstanceResponse,
  DescribeDBInstanceAttributeResponse,
  DeleteLogBackupRequest,
  DeleteBaseBackupResponse,
  PolicyRule,
  ModifyDBInstanceSpecResponse,
  DescribeBackupDownloadURLRequest,
  DescribeDBXlogsResponse,
  ModifyDBInstanceChargeTypeResponse,
  DescribeBaseBackupsRequest,
  DescribeEncryptionKeysResponse,
  CreateReadOnlyGroupNetworkAccessResponse,
  CreateDBInstancesResponse,
  DeleteAccountResponse,
} from "./postgres_models"

/**
 * postgres client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("postgres.tencentcloudapi.com", "2017-03-12", clientConfig)
  }

  /**
   * 本接口 (ModifyMaintainTimeWindow) 用于实例维护时间窗口的修改。
   */
  async ModifyMaintainTimeWindow(
    req: ModifyMaintainTimeWindowRequest,
    cb?: (error: string, rep: ModifyMaintainTimeWindowResponse) => void
  ): Promise<ModifyMaintainTimeWindowResponse> {
    return this.request("ModifyMaintainTimeWindow", req, cb)
  }

  /**
   * 本接口 (DescribeBackupDownloadURL) 用于查询指定备份集的下载地址，可包括全量备份集、增量日志备份集。
   */
  async DescribeBackupDownloadURL(
    req: DescribeBackupDownloadURLRequest,
    cb?: (error: string, rep: DescribeBackupDownloadURLResponse) => void
  ): Promise<DescribeBackupDownloadURLResponse> {
    return this.request("DescribeBackupDownloadURL", req, cb)
  }

  /**
   * 本接口（DescribeDefaultParameters）主要用于查询某个数据库版本和引擎支持的所有参数。
   */
  async DescribeDefaultParameters(
    req: DescribeDefaultParametersRequest,
    cb?: (error: string, rep: DescribeDefaultParametersResponse) => void
  ): Promise<DescribeDefaultParametersResponse> {
    return this.request("DescribeDefaultParameters", req, cb)
  }

  /**
   * 本接口（DescribeDBErrlogs）用于查询错误日志。
   */
  async DescribeDBErrlogs(
    req: DescribeDBErrlogsRequest,
    cb?: (error: string, rep: DescribeDBErrlogsResponse) => void
  ): Promise<DescribeDBErrlogsResponse> {
    return this.request("DescribeDBErrlogs", req, cb)
  }

  /**
     * 本接口（DescribeDBInstanceHAConfig）用于查询实例HA配置信息。其中HA配置信息包括：
<li>允许备节点切换为主节点的条件配置
<li>半同步实例使用同步复制或异步复制的条件配置
     */
  async DescribeDBInstanceHAConfig(
    req: DescribeDBInstanceHAConfigRequest,
    cb?: (error: string, rep: DescribeDBInstanceHAConfigResponse) => void
  ): Promise<DescribeDBInstanceHAConfigResponse> {
    return this.request("DescribeDBInstanceHAConfig", req, cb)
  }

  /**
   * 本接口（DescribeBackupOverview）用于查询用户的备份概览信息。返回用户当前备份个数、备份占用容量、免费容量、收费容量等信息（容量单位为字节）。
   */
  async DescribeBackupOverview(
    req?: DescribeBackupOverviewRequest,
    cb?: (error: string, rep: DescribeBackupOverviewResponse) => void
  ): Promise<DescribeBackupOverviewResponse> {
    return this.request("DescribeBackupOverview", req, cb)
  }

  /**
   * 本接口用于查询数据库对象列表。例如查询test数据库下的模式列表。
   */
  async DescribeDatabaseObjects(
    req: DescribeDatabaseObjectsRequest,
    cb?: (error: string, rep: DescribeDatabaseObjectsResponse) => void
  ): Promise<DescribeDatabaseObjectsResponse> {
    return this.request("DescribeDatabaseObjects", req, cb)
  }

  /**
   * 本接口（ModifyAccountRemark）用于修改账号备注。
   */
  async ModifyAccountRemark(
    req: ModifyAccountRemarkRequest,
    cb?: (error: string, rep: ModifyAccountRemarkResponse) => void
  ): Promise<ModifyAccountRemarkResponse> {
    return this.request("ModifyAccountRemark", req, cb)
  }

  /**
   * 本接口（SetAutoRenewFlag）用于设置自动续费。
   */
  async SetAutoRenewFlag(
    req: SetAutoRenewFlagRequest,
    cb?: (error: string, rep: SetAutoRenewFlagResponse) => void
  ): Promise<SetAutoRenewFlagResponse> {
    return this.request("SetAutoRenewFlag", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
   */
  async ModifyDBInstanceName(
    req: ModifyDBInstanceNameRequest,
    cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void
  ): Promise<ModifyDBInstanceNameResponse> {
    return this.request("ModifyDBInstanceName", req, cb)
  }

  /**
   * 本接口 (DescribeMaintainTimeWindow) 用于查询实例的维护时间窗口
   */
  async DescribeMaintainTimeWindow(
    req: DescribeMaintainTimeWindowRequest,
    cb?: (error: string, rep: DescribeMaintainTimeWindowResponse) => void
  ): Promise<DescribeMaintainTimeWindowResponse> {
    return this.request("DescribeMaintainTimeWindow", req, cb)
  }

  /**
   * 查询专属集群
   */
  async DescribeDedicatedClusters(
    req: DescribeDedicatedClustersRequest,
    cb?: (error: string, rep: DescribeDedicatedClustersResponse) => void
  ): Promise<DescribeDedicatedClustersResponse> {
    return this.request("DescribeDedicatedClusters", req, cb)
  }

  /**
   * 本接口（DeleteParameterTemplate）主要用于删除某个参数模板。
   */
  async DeleteParameterTemplate(
    req: DeleteParameterTemplateRequest,
    cb?: (error: string, rep: DeleteParameterTemplateResponse) => void
  ): Promise<DeleteParameterTemplateResponse> {
    return this.request("DeleteParameterTemplate", req, cb)
  }

  /**
   * 本接口（DescribeDBInstanceAttribute）用于查询实例的参数信息。
   */
  async DescribeDBInstanceParameters(
    req: DescribeDBInstanceParametersRequest,
    cb?: (error: string, rep: DescribeDBInstanceParametersResponse) => void
  ): Promise<DescribeDBInstanceParametersResponse> {
    return this.request("DescribeDBInstanceParameters", req, cb)
  }

  /**
   * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
   */
  async DeleteServerlessDBInstance(
    req: DeleteServerlessDBInstanceRequest,
    cb?: (error: string, rep: DeleteServerlessDBInstanceResponse) => void
  ): Promise<DeleteServerlessDBInstanceResponse> {
    return this.request("DeleteServerlessDBInstance", req, cb)
  }

  /**
   * 本接口（CreateDBInstanceNetworkAccess）用于创建实例网络。
   */
  async CreateDBInstanceNetworkAccess(
    req: CreateDBInstanceNetworkAccessRequest,
    cb?: (error: string, rep: CreateDBInstanceNetworkAccessResponse) => void
  ): Promise<CreateDBInstanceNetworkAccessResponse> {
    return this.request("CreateDBInstanceNetworkAccess", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceSpec）用于修改实例规格，包括内存、磁盘。
   */
  async ModifyDBInstanceSpec(
    req: ModifyDBInstanceSpecRequest,
    cb?: (error: string, rep: ModifyDBInstanceSpecResponse) => void
  ): Promise<ModifyDBInstanceSpecResponse> {
    return this.request("ModifyDBInstanceSpec", req, cb)
  }

  /**
   * 本接口（ModifyBackupDownloadRestriction）用于修改备份文件下载限制。
   */
  async ModifyBackupDownloadRestriction(
    req: ModifyBackupDownloadRestrictionRequest,
    cb?: (error: string, rep: ModifyBackupDownloadRestrictionResponse) => void
  ): Promise<ModifyBackupDownloadRestrictionResponse> {
    return this.request("ModifyBackupDownloadRestriction", req, cb)
  }

  /**
     * 本接口（DescribeTasks）用于查询任务列表，展示异步任务的执行进度。
注：本接口中展示的步骤为总结性步骤，可能伴随着版本迭代进行调整，不建议作为关键逻辑使用
     */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 本接口（RenewInstance）用于续费实例。
   */
  async RenewInstance(
    req: RenewInstanceRequest,
    cb?: (error: string, rep: RenewInstanceResponse) => void
  ): Promise<RenewInstanceResponse> {
    return this.request("RenewInstance", req, cb)
  }

  /**
   * 接口（DescribeDatabases）用来查询实例的数据库列表。
   */
  async DescribeDatabases(
    req: DescribeDatabasesRequest,
    cb?: (error: string, rep: DescribeDatabasesResponse) => void
  ): Promise<DescribeDatabasesResponse> {
    return this.request("DescribeDatabases", req, cb)
  }

  /**
   * 本接口 (DescribeParameterTemplates) 用于查询参数模板列表。
   */
  async DescribeParameterTemplates(
    req: DescribeParameterTemplatesRequest,
    cb?: (error: string, rep: DescribeParameterTemplatesResponse) => void
  ): Promise<DescribeParameterTemplatesResponse> {
    return this.request("DescribeParameterTemplates", req, cb)
  }

  /**
   * 本接口（DescribeProductConfig）用于查询售卖规格配置。本接口已废弃，推荐使用新接口[DescribeClasses](https://cloud.tencent.com/document/api/409/89019)。
   */
  async DescribeProductConfig(
    req: DescribeProductConfigRequest,
    cb?: (error: string, rep: DescribeProductConfigResponse) => void
  ): Promise<DescribeProductConfigResponse> {
    return this.request("DescribeProductConfig", req, cb)
  }

  /**
   * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。本接口已于2021.09.01日废弃，后续此接口将不再返回任何数据，推荐使用接口[DescribeSlowQueryList](https://cloud.tencent.com/document/api/409/60540)替代。
   */
  async DescribeDBSlowlogs(
    req: DescribeDBSlowlogsRequest,
    cb?: (error: string, rep: DescribeDBSlowlogsResponse) => void
  ): Promise<DescribeDBSlowlogsResponse> {
    return this.request("DescribeDBSlowlogs", req, cb)
  }

  /**
   * 查询数据库账号对某数据库对象拥有的权限列表。
   */
  async DescribeAccountPrivileges(
    req: DescribeAccountPrivilegesRequest,
    cb?: (error: string, rep: DescribeAccountPrivilegesResponse) => void
  ): Promise<DescribeAccountPrivilegesResponse> {
    return this.request("DescribeAccountPrivileges", req, cb)
  }

  /**
   * 可对RO组进行网络的删除操作。
   */
  async DeleteReadOnlyGroupNetworkAccess(
    req: DeleteReadOnlyGroupNetworkAccessRequest,
    cb?: (error: string, rep: DeleteReadOnlyGroupNetworkAccessResponse) => void
  ): Promise<DeleteReadOnlyGroupNetworkAccessResponse> {
    return this.request("DeleteReadOnlyGroupNetworkAccess", req, cb)
  }

  /**
   * 支持实例的计费类型转换（目前仅支持按量计费转包年包月）
   */
  async ModifyDBInstanceChargeType(
    req: ModifyDBInstanceChargeTypeRequest,
    cb?: (error: string, rep: ModifyDBInstanceChargeTypeResponse) => void
  ): Promise<ModifyDBInstanceChargeTypeResponse> {
    return this.request("ModifyDBInstanceChargeType", req, cb)
  }

  /**
   * 解除数据库账号的锁定，解锁后账号可以登录数据库。
   */
  async UnlockAccount(
    req: UnlockAccountRequest,
    cb?: (error: string, rep: UnlockAccountResponse) => void
  ): Promise<UnlockAccountResponse> {
    return this.request("UnlockAccount", req, cb)
  }

  /**
   * 本接口 (DestroyDBInstance) 用于彻底销毁指定DBInstanceId对应的实例，销毁后实例数据将彻底删除，无法找回，调用前请仔细确认要操作的实例。只能销毁隔离中的实例。
   */
  async DestroyDBInstance(
    req: DestroyDBInstanceRequest,
    cb?: (error: string, rep: DestroyDBInstanceResponse) => void
  ): Promise<DestroyDBInstanceResponse> {
    return this.request("DestroyDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeDBBackups）用于查询实例备份列表。本接口已废弃，推荐使用接口[DescribeBaseBackups](https://cloud.tencent.com/document/api/409/89022)替代。
   */
  async DescribeDBBackups(
    req: DescribeDBBackupsRequest,
    cb?: (error: string, rep: DescribeDBBackupsResponse) => void
  ): Promise<DescribeDBBackupsResponse> {
    return this.request("DescribeDBBackups", req, cb)
  }

  /**
   * 此接口（DescribeSlowQueryAnalysis）用于统计指定时间范围内的所有慢查询，根据SQL语句抽象参数后，进行聚合分析，并返回同类SQL列表。
   */
  async DescribeSlowQueryAnalysis(
    req: DescribeSlowQueryAnalysisRequest,
    cb?: (error: string, rep: DescribeSlowQueryAnalysisResponse) => void
  ): Promise<DescribeSlowQueryAnalysisResponse> {
    return this.request("DescribeSlowQueryAnalysis", req, cb)
  }

  /**
   * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买实例的价格信息。
   */
  async InquiryPriceCreateDBInstances(
    req: InquiryPriceCreateDBInstancesRequest,
    cb?: (error: string, rep: InquiryPriceCreateDBInstancesResponse) => void
  ): Promise<InquiryPriceCreateDBInstancesResponse> {
    return this.request("InquiryPriceCreateDBInstances", req, cb)
  }

  /**
   * 本接口（DescribeDBInstanceSecurityGroups）用于查询实例安全组。
   */
  async DescribeDBInstanceSecurityGroups(
    req: DescribeDBInstanceSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBInstanceSecurityGroupsResponse) => void
  ): Promise<DescribeDBInstanceSecurityGroupsResponse> {
    return this.request("DescribeDBInstanceSecurityGroups", req, cb)
  }

  /**
   * 本接口（CreateBaseBackup）用于创建实例的数据备份。
   */
  async CreateBaseBackup(
    req: CreateBaseBackupRequest,
    cb?: (error: string, rep: CreateBaseBackupResponse) => void
  ): Promise<CreateBaseBackupResponse> {
    return this.request("CreateBaseBackup", req, cb)
  }

  /**
   * 本接口（DescribeParameterTemplateAttributes）用于查询某个参数模板的具体内容，包括基本信息和参数信息。
   */
  async DescribeParameterTemplateAttributes(
    req: DescribeParameterTemplateAttributesRequest,
    cb?: (error: string, rep: DescribeParameterTemplateAttributesResponse) => void
  ): Promise<DescribeParameterTemplateAttributesResponse> {
    return this.request("DescribeParameterTemplateAttributes", req, cb)
  }

  /**
   * 根据备份集或恢复目标时间，在原实例上恢复数据库相关对象，例如数据库、表。
   */
  async RestoreDBInstanceObjects(
    req: RestoreDBInstanceObjectsRequest,
    cb?: (error: string, rep: RestoreDBInstanceObjectsResponse) => void
  ): Promise<RestoreDBInstanceObjectsResponse> {
    return this.request("RestoreDBInstanceObjects", req, cb)
  }

  /**
   * 本接口（CloseServerlessDBExtranetAccess）用于关闭serverlessDB实例公网地址
   */
  async CloseServerlessDBExtranetAccess(
    req: CloseServerlessDBExtranetAccessRequest,
    cb?: (error: string, rep: CloseServerlessDBExtranetAccessResponse) => void
  ): Promise<CloseServerlessDBExtranetAccessResponse> {
    return this.request("CloseServerlessDBExtranetAccess", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceDeployment）用于修改节点可用区部署方式，仅支持主实例。
   */
  async ModifyDBInstanceDeployment(
    req: ModifyDBInstanceDeploymentRequest,
    cb?: (error: string, rep: ModifyDBInstanceDeploymentResponse) => void
  ): Promise<ModifyDBInstanceDeploymentResponse> {
    return this.request("ModifyDBInstanceDeployment", req, cb)
  }

  /**
   * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
   */
  async CreateServerlessDBInstance(
    req: CreateServerlessDBInstanceRequest,
    cb?: (error: string, rep: CreateServerlessDBInstanceResponse) => void
  ): Promise<CreateServerlessDBInstanceResponse> {
    return this.request("CreateServerlessDBInstance", req, cb)
  }

  /**
   * 此接口用于创建数据库，需指定数据库名及所有者。
   */
  async CreateDatabase(
    req: CreateDatabaseRequest,
    cb?: (error: string, rep: CreateDatabaseResponse) => void
  ): Promise<CreateDatabaseResponse> {
    return this.request("CreateDatabase", req, cb)
  }

  /**
   * 此接口用于创建数据账号，返回的Oid为账号唯一标识。与数据库系统表pg_roles中记录的oid一致。
   */
  async CreateAccount(
    req: CreateAccountRequest,
    cb?: (error: string, rep: CreateAccountResponse) => void
  ): Promise<CreateAccountResponse> {
    return this.request("CreateAccount", req, cb)
  }

  /**
   * 本接口 (ModifyDBInstanceParameters) 用于修改实例参数。
   */
  async ModifyDBInstanceParameters(
    req: ModifyDBInstanceParametersRequest,
    cb?: (error: string, rep: ModifyDBInstanceParametersResponse) => void
  ): Promise<ModifyDBInstanceParametersResponse> {
    return this.request("ModifyDBInstanceParameters", req, cb)
  }

  /**
   * 本接口（DescribeBaseBackups）用于查询数据备份列表。
   */
  async DescribeBaseBackups(
    req: DescribeBaseBackupsRequest,
    cb?: (error: string, rep: DescribeBaseBackupsResponse) => void
  ): Promise<DescribeBaseBackupsResponse> {
    return this.request("DescribeBaseBackups", req, cb)
  }

  /**
   * 本接口（DescribeAvailableRecoveryTime）用于查询实例可恢复的时间范围。
   */
  async DescribeAvailableRecoveryTime(
    req: DescribeAvailableRecoveryTimeRequest,
    cb?: (error: string, rep: DescribeAvailableRecoveryTimeResponse) => void
  ): Promise<DescribeAvailableRecoveryTimeResponse> {
    return this.request("DescribeAvailableRecoveryTime", req, cb)
  }

  /**
   * 本接口 (DescribeRegions) 用于查询售卖地域信息。
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 本接口（OpenServerlessDBExtranetAccess）用于开通serverlessDB实例公网地址。
   */
  async OpenServerlessDBExtranetAccess(
    req: OpenServerlessDBExtranetAccessRequest,
    cb?: (error: string, rep: OpenServerlessDBExtranetAccessResponse) => void
  ): Promise<OpenServerlessDBExtranetAccessResponse> {
    return this.request("OpenServerlessDBExtranetAccess", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceReadOnlyGroup）用于修改实例所属的只读组
   */
  async ModifyDBInstanceReadOnlyGroup(
    req: ModifyDBInstanceReadOnlyGroupRequest,
    cb?: (error: string, rep: ModifyDBInstanceReadOnlyGroupResponse) => void
  ): Promise<ModifyDBInstanceReadOnlyGroupResponse> {
    return this.request("ModifyDBInstanceReadOnlyGroup", req, cb)
  }

  /**
   * 用于克隆实例，支持指定备份集、指定时间点进行克隆。
   */
  async CloneDBInstance(
    req: CloneDBInstanceRequest,
    cb?: (error: string, rep: CloneDBInstanceResponse) => void
  ): Promise<CloneDBInstanceResponse> {
    return this.request("CloneDBInstance", req, cb)
  }

  /**
   * 本接口（DisIsolateDBInstances）用于解隔离实例
   */
  async DisIsolateDBInstances(
    req: DisIsolateDBInstancesRequest,
    cb?: (error: string, rep: DisIsolateDBInstancesResponse) => void
  ): Promise<DisIsolateDBInstancesResponse> {
    return this.request("DisIsolateDBInstances", req, cb)
  }

  /**
   * 用于查询一个或多个serverlessDB实例的详细信息
   */
  async DescribeServerlessDBInstances(
    req: DescribeServerlessDBInstancesRequest,
    cb?: (error: string, rep: DescribeServerlessDBInstancesResponse) => void
  ): Promise<DescribeServerlessDBInstancesResponse> {
    return this.request("DescribeServerlessDBInstances", req, cb)
  }

  /**
   * 本接口（DescribeDBVersions）用于查询支持的数据库版本。
   */
  async DescribeDBVersions(
    req?: DescribeDBVersionsRequest,
    cb?: (error: string, rep: DescribeDBVersionsResponse) => void
  ): Promise<DescribeDBVersionsResponse> {
    return this.request("DescribeDBVersions", req, cb)
  }

  /**
   * 本接口（ModifyParameterTemplate）主要用于修改参数模板名称，描述等配置，也可用于管理参数模板中的参数列表。
   */
  async ModifyParameterTemplate(
    req: ModifyParameterTemplateRequest,
    cb?: (error: string, rep: ModifyParameterTemplateResponse) => void
  ): Promise<ModifyParameterTemplateResponse> {
    return this.request("ModifyParameterTemplate", req, cb)
  }

  /**
   * 本接口 (CreateParameterTemplate) 用于创建参数模板。
   */
  async CreateParameterTemplate(
    req: CreateParameterTemplateRequest,
    cb?: (error: string, rep: CreateParameterTemplateResponse) => void
  ): Promise<CreateParameterTemplateResponse> {
    return this.request("CreateParameterTemplate", req, cb)
  }

  /**
   * 本接口(CreateReadOnlyDBInstance)用于创建只读实例
   */
  async CreateReadOnlyDBInstance(
    req: CreateReadOnlyDBInstanceRequest,
    cb?: (error: string, rep: CreateReadOnlyDBInstanceResponse) => void
  ): Promise<CreateReadOnlyDBInstanceResponse> {
    return this.request("CreateReadOnlyDBInstance", req, cb)
  }

  /**
   * 本接口(DescribeBackupSummaries)用于查询实例备份的统计信息，返回以实例为维度的备份个数、占用容量等信息（容量单位为字节）。
   */
  async DescribeBackupSummaries(
    req: DescribeBackupSummariesRequest,
    cb?: (error: string, rep: DescribeBackupSummariesResponse) => void
  ): Promise<DescribeBackupSummariesResponse> {
    return this.request("DescribeBackupSummaries", req, cb)
  }

  /**
   * 本接口（UpgradeDBInstanceMajorVersion）用于升级实例内核大版本，例如从PostgreSQL 12升级到PostgreSQL 15。
   */
  async UpgradeDBInstanceMajorVersion(
    req: UpgradeDBInstanceMajorVersionRequest,
    cb?: (error: string, rep: UpgradeDBInstanceMajorVersionResponse) => void
  ): Promise<UpgradeDBInstanceMajorVersionResponse> {
    return this.request("UpgradeDBInstanceMajorVersion", req, cb)
  }

  /**
   * 本接口(RebalanceReadOnlyGroup)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
   */
  async RebalanceReadOnlyGroup(
    req: RebalanceReadOnlyGroupRequest,
    cb?: (error: string, rep: RebalanceReadOnlyGroupResponse) => void
  ): Promise<RebalanceReadOnlyGroupResponse> {
    return this.request("RebalanceReadOnlyGroup", req, cb)
  }

  /**
   * 本接口（CreateReadOnlyGroupNetworkAccess）用于创建RO组的网络。
   */
  async CreateReadOnlyGroupNetworkAccess(
    req: CreateReadOnlyGroupNetworkAccessRequest,
    cb?: (error: string, rep: CreateReadOnlyGroupNetworkAccessResponse) => void
  ): Promise<CreateReadOnlyGroupNetworkAccessResponse> {
    return this.request("CreateReadOnlyGroupNetworkAccess", req, cb)
  }

  /**
   * 本接口 （DescribeEncryptionKeys） 用于查询实例的密钥信息列表。
   */
  async DescribeEncryptionKeys(
    req: DescribeEncryptionKeysRequest,
    cb?: (error: string, rep: DescribeEncryptionKeysResponse) => void
  ): Promise<DescribeEncryptionKeysResponse> {
    return this.request("DescribeEncryptionKeys", req, cb)
  }

  /**
   * 本接口（ModifyDBInstancesProject）用于修改实例所属项目。
   */
  async ModifyDBInstancesProject(
    req: ModifyDBInstancesProjectRequest,
    cb?: (error: string, rep: ModifyDBInstancesProjectResponse) => void
  ): Promise<ModifyDBInstancesProjectResponse> {
    return this.request("ModifyDBInstancesProject", req, cb)
  }

  /**
   * 本接口（UpgradeDBInstanceKernelVersion）用于升级实例的内核版本号。
   */
  async UpgradeDBInstanceKernelVersion(
    req: UpgradeDBInstanceKernelVersionRequest,
    cb?: (error: string, rep: UpgradeDBInstanceKernelVersionResponse) => void
  ): Promise<UpgradeDBInstanceKernelVersionResponse> {
    return this.request("UpgradeDBInstanceKernelVersion", req, cb)
  }

  /**
   * 本接口（ResetAccountPassword）用于重置实例的账户密码。
   */
  async ResetAccountPassword(
    req: ResetAccountPasswordRequest,
    cb?: (error: string, rep: ResetAccountPasswordResponse) => void
  ): Promise<ResetAccountPasswordResponse> {
    return this.request("ResetAccountPassword", req, cb)
  }

  /**
   * 本接口（RestartDBInstance）用于重启实例。
   */
  async RestartDBInstance(
    req: RestartDBInstanceRequest,
    cb?: (error: string, rep: RestartDBInstanceResponse) => void
  ): Promise<RestartDBInstanceResponse> {
    return this.request("RestartDBInstance", req, cb)
  }

  /**
   * 可对实例进行网络的删除操作。
   */
  async DeleteDBInstanceNetworkAccess(
    req: DeleteDBInstanceNetworkAccessRequest,
    cb?: (error: string, rep: DeleteDBInstanceNetworkAccessResponse) => void
  ): Promise<DeleteDBInstanceNetworkAccessResponse> {
    return this.request("DeleteDBInstanceNetworkAccess", req, cb)
  }

  /**
   * 本接口(DeleteReadOnlyGroup)用于删除指定的只读组
   */
  async DeleteReadOnlyGroup(
    req: DeleteReadOnlyGroupRequest,
    cb?: (error: string, rep: DeleteReadOnlyGroupResponse) => void
  ): Promise<DeleteReadOnlyGroupResponse> {
    return this.request("DeleteReadOnlyGroup", req, cb)
  }

  /**
   * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。本接口已废弃，推荐使用接口[DescribeLogBackups](https://cloud.tencent.com/document/api/409/89021)替代。
   */
  async DescribeDBXlogs(
    req: DescribeDBXlogsRequest,
    cb?: (error: string, rep: DescribeDBXlogsResponse) => void
  ): Promise<DescribeDBXlogsResponse> {
    return this.request("DescribeDBXlogs", req, cb)
  }

  /**
   * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
   */
  async DescribeDBInstanceAttribute(
    req: DescribeDBInstanceAttributeRequest,
    cb?: (error: string, rep: DescribeDBInstanceAttributeResponse) => void
  ): Promise<DescribeDBInstanceAttributeResponse> {
    return this.request("DescribeDBInstanceAttribute", req, cb)
  }

  /**
   * 本接口（CreateDBInstances）用于创建一个或者多个PostgreSQL实例,仅发货实例不会进行初始化。本接口已废弃，推荐使用接口[CreateInstances](https://cloud.tencent.com/document/api/409/56107)替代。
   */
  async CreateDBInstances(
    req: CreateDBInstancesRequest,
    cb?: (error: string, rep: CreateDBInstancesResponse) => void
  ): Promise<CreateDBInstancesResponse> {
    return this.request("CreateDBInstances", req, cb)
  }

  /**
     * 本接口（ModifyDBInstanceHAConfig）用于修改实例HA配置信息。其中HA配置信息包括：
<li>允许备节点切换为主节点的条件配置
<li>半同步实例使用同步复制或异步复制的条件配置
     */
  async ModifyDBInstanceHAConfig(
    req: ModifyDBInstanceHAConfigRequest,
    cb?: (error: string, rep: ModifyDBInstanceHAConfigResponse) => void
  ): Promise<ModifyDBInstanceHAConfigResponse> {
    return this.request("ModifyDBInstanceHAConfig", req, cb)
  }

  /**
   * 本接口（DeleteLogBackup）用于删除实例指定日志备份。
   */
  async DeleteLogBackup(
    req: DeleteLogBackupRequest,
    cb?: (error: string, rep: DeleteLogBackupResponse) => void
  ): Promise<DeleteLogBackupResponse> {
    return this.request("DeleteLogBackup", req, cb)
  }

  /**
   * 本接口（IsolateDBInstances）用于隔离实例。
   */
  async IsolateDBInstances(
    req: IsolateDBInstancesRequest,
    cb?: (error: string, rep: IsolateDBInstancesResponse) => void
  ): Promise<IsolateDBInstancesResponse> {
    return this.request("IsolateDBInstances", req, cb)
  }

  /**
   * 本接口（ModifyBaseBackupExpireTime）用于修改实例指定数据备份的过期时间。
   */
  async ModifyBaseBackupExpireTime(
    req: ModifyBaseBackupExpireTimeRequest,
    cb?: (error: string, rep: ModifyBaseBackupExpireTimeResponse) => void
  ): Promise<ModifyBaseBackupExpireTimeResponse> {
    return this.request("ModifyBaseBackupExpireTime", req, cb)
  }

  /**
   * 修改某账号对某数据库对象的权限、修改账号类型。
   */
  async ModifyAccountPrivileges(
    req: ModifyAccountPrivilegesRequest,
    cb?: (error: string, rep: ModifyAccountPrivilegesResponse) => void
  ): Promise<ModifyAccountPrivilegesResponse> {
    return this.request("ModifyAccountPrivileges", req, cb)
  }

  /**
   * 此接口（DescribeSlowQueryList）用于查询指定时间范围内的所有慢查询。
   */
  async DescribeSlowQueryList(
    req: DescribeSlowQueryListRequest,
    cb?: (error: string, rep: DescribeSlowQueryListResponse) => void
  ): Promise<DescribeSlowQueryListResponse> {
    return this.request("DescribeSlowQueryList", req, cb)
  }

  /**
   * 本接口（DescribeLogBackups）用于查询日志备份列表。
   */
  async DescribeLogBackups(
    req: DescribeLogBackupsRequest,
    cb?: (error: string, rep: DescribeLogBackupsResponse) => void
  ): Promise<DescribeLogBackupsResponse> {
    return this.request("DescribeLogBackups", req, cb)
  }

  /**
   * 本接口（CloseDBExtranetAccess）用于关闭实例公网地址。
   */
  async CloseDBExtranetAccess(
    req: CloseDBExtranetAccessRequest,
    cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void
  ): Promise<CloseDBExtranetAccessResponse> {
    return this.request("CloseDBExtranetAccess", req, cb)
  }

  /**
   * 本接口（AddDBInstanceToReadOnlyGroup）用于添加只读实例到只读组
   */
  async AddDBInstanceToReadOnlyGroup(
    req: AddDBInstanceToReadOnlyGroupRequest,
    cb?: (error: string, rep: AddDBInstanceToReadOnlyGroupResponse) => void
  ): Promise<AddDBInstanceToReadOnlyGroupResponse> {
    return this.request("AddDBInstanceToReadOnlyGroup", req, cb)
  }

  /**
   * 本接口（DescribeAccounts）用于查询实例的数据库账号列表。
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 本接口（DescribeCloneDBInstanceSpec）用于查询克隆实例可选择的最小规格，包括SpecCode和磁盘。
   */
  async DescribeCloneDBInstanceSpec(
    req: DescribeCloneDBInstanceSpecRequest,
    cb?: (error: string, rep: DescribeCloneDBInstanceSpecResponse) => void
  ): Promise<DescribeCloneDBInstanceSpecResponse> {
    return this.request("DescribeCloneDBInstanceSpec", req, cb)
  }

  /**
   * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
  }

  /**
   * 本接口（DescribeBackupDownloadRestriction）用于查询备份文件下载限制。
   */
  async DescribeBackupDownloadRestriction(
    req?: DescribeBackupDownloadRestrictionRequest,
    cb?: (error: string, rep: DescribeBackupDownloadRestrictionResponse) => void
  ): Promise<DescribeBackupDownloadRestrictionResponse> {
    return this.request("DescribeBackupDownloadRestriction", req, cb)
  }

  /**
   * 本接口(ModifyReadOnlyGroupConfig)用于更新只读组配置信息
   */
  async ModifyReadOnlyGroupConfig(
    req: ModifyReadOnlyGroupConfigRequest,
    cb?: (error: string, rep: ModifyReadOnlyGroupConfigResponse) => void
  ): Promise<ModifyReadOnlyGroupConfigResponse> {
    return this.request("ModifyReadOnlyGroupConfig", req, cb)
  }

  /**
   * 本接口（RemoveDBInstanceFromReadOnlyGroup）用户将只读实例从只读组中移除
   */
  async RemoveDBInstanceFromReadOnlyGroup(
    req: RemoveDBInstanceFromReadOnlyGroupRequest,
    cb?: (error: string, rep: RemoveDBInstanceFromReadOnlyGroupResponse) => void
  ): Promise<RemoveDBInstanceFromReadOnlyGroupResponse> {
    return this.request("RemoveDBInstanceFromReadOnlyGroup", req, cb)
  }

  /**
   * 此接口用于创建备份策略。
   */
  async CreateBackupPlan(
    req: CreateBackupPlanRequest,
    cb?: (error: string, rep: CreateBackupPlanResponse) => void
  ): Promise<CreateBackupPlanResponse> {
    return this.request("CreateBackupPlan", req, cb)
  }

  /**
   * 本接口（DescribeParamsEvent）用于查询参数修改事件。
   */
  async DescribeParamsEvent(
    req: DescribeParamsEventRequest,
    cb?: (error: string, rep: DescribeParamsEventResponse) => void
  ): Promise<DescribeParamsEventResponse> {
    return this.request("DescribeParamsEvent", req, cb)
  }

  /**
   * 本接口（DescribeClasses）用于查询实例售卖规格。
   */
  async DescribeClasses(
    req: DescribeClassesRequest,
    cb?: (error: string, rep: DescribeClassesResponse) => void
  ): Promise<DescribeClassesResponse> {
    return this.request("DescribeClasses", req, cb)
  }

  /**
   * 本接口（DescribeOrders）用于查询订单信息。
   */
  async DescribeOrders(
    req: DescribeOrdersRequest,
    cb?: (error: string, rep: DescribeOrdersResponse) => void
  ): Promise<DescribeOrdersResponse> {
    return this.request("DescribeOrders", req, cb)
  }

  /**
     * 本接口（SwitchDBInstancePrimary）用于切换实例主备关系。
<li>通过主动发起切换，可以验证业务能否正确处理实例主备切换的场景
<li>通过使用强制切换，可以在备节点延迟不满足切换条件时，强制发起主从切换
<li>只有主实例可以执行该操作
     */
  async SwitchDBInstancePrimary(
    req: SwitchDBInstancePrimaryRequest,
    cb?: (error: string, rep: SwitchDBInstancePrimaryResponse) => void
  ): Promise<SwitchDBInstancePrimaryResponse> {
    return this.request("SwitchDBInstancePrimary", req, cb)
  }

  /**
   * 本接口（ModifyReadOnlyDBInstanceWeight）用于修改只读实例权重
   */
  async ModifyReadOnlyDBInstanceWeight(
    req: ModifyReadOnlyDBInstanceWeightRequest,
    cb?: (error: string, rep: ModifyReadOnlyDBInstanceWeightResponse) => void
  ): Promise<ModifyReadOnlyDBInstanceWeightResponse> {
    return this.request("ModifyReadOnlyDBInstanceWeight", req, cb)
  }

  /**
   * 本接口 (DescribeBackupPlans) 用于实例所有的备份计划查询
   */
  async DescribeBackupPlans(
    req: DescribeBackupPlansRequest,
    cb?: (error: string, rep: DescribeBackupPlansResponse) => void
  ): Promise<DescribeBackupPlansResponse> {
    return this.request("DescribeBackupPlans", req, cb)
  }

  /**
   * 当升级完成后，对处于等待切换状态下的实例，强制实例立即切换。
   */
  async ModifySwitchTimePeriod(
    req: ModifySwitchTimePeriodRequest,
    cb?: (error: string, rep: ModifySwitchTimePeriodResponse) => void
  ): Promise<ModifySwitchTimePeriodResponse> {
    return this.request("ModifySwitchTimePeriod", req, cb)
  }

  /**
   * 本接口（OpenDBExtranetAccess）用于开通实例公网地址。
   */
  async OpenDBExtranetAccess(
    req: OpenDBExtranetAccessRequest,
    cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void
  ): Promise<OpenDBExtranetAccessResponse> {
    return this.request("OpenDBExtranetAccess", req, cb)
  }

  /**
   * 修改数据库所有者
   */
  async ModifyDatabaseOwner(
    req: ModifyDatabaseOwnerRequest,
    cb?: (error: string, rep: ModifyDatabaseOwnerResponse) => void
  ): Promise<ModifyDatabaseOwnerResponse> {
    return this.request("ModifyDatabaseOwner", req, cb)
  }

  /**
   * 此接口用于删除数据库账号，需要同时输入Oid与UserName，避免误删。
   */
  async DeleteAccount(
    req: DeleteAccountRequest,
    cb?: (error: string, rep: DeleteAccountResponse) => void
  ): Promise<DeleteAccountResponse> {
    return this.request("DeleteAccount", req, cb)
  }

  /**
   * 本接口 (ModifyBackupPlan) 用于实例备份计划的修改，默认是在每天的凌晨开始全量备份，备份保留时长是7天。可以根据此接口指定时间进行实例的备份。
   */
  async ModifyBackupPlan(
    req: ModifyBackupPlanRequest,
    cb?: (error: string, rep: ModifyBackupPlanResponse) => void
  ): Promise<ModifyBackupPlanResponse> {
    return this.request("ModifyBackupPlan", req, cb)
  }

  /**
   * 本接口用于修改实例SSL配置，功能包含开启、关闭、修改SSL证书保护的连接地址。
   */
  async ModifyDBInstanceSSLConfig(
    req: ModifyDBInstanceSSLConfigRequest,
    cb?: (error: string, rep: ModifyDBInstanceSSLConfigResponse) => void
  ): Promise<ModifyDBInstanceSSLConfigResponse> {
    return this.request("ModifyDBInstanceSSLConfig", req, cb)
  }

  /**
   * 本接口（InitDBInstances）用于初始化云数据库PostgreSQL实例。本接口已废弃，推荐使用接口[CreateInstances](https://cloud.tencent.com/document/api/409/56107)替代。
   */
  async InitDBInstances(
    req: InitDBInstancesRequest,
    cb?: (error: string, rep: InitDBInstancesResponse) => void
  ): Promise<InitDBInstancesResponse> {
    return this.request("InitDBInstances", req, cb)
  }

  /**
   * 本接口 (DescribeZones) 用于查询支持的可用区信息。
   */
  async DescribeZones(
    req?: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 本接口用于查询实例SSL状态
   */
  async DescribeDBInstanceSSLConfig(
    req: DescribeDBInstanceSSLConfigRequest,
    cb?: (error: string, rep: DescribeDBInstanceSSLConfigResponse) => void
  ): Promise<DescribeDBInstanceSSLConfigResponse> {
    return this.request("DescribeDBInstanceSSLConfig", req, cb)
  }

  /**
   * 删除备份策略
   */
  async DeleteBackupPlan(
    req: DeleteBackupPlanRequest,
    cb?: (error: string, rep: DeleteBackupPlanResponse) => void
  ): Promise<DeleteBackupPlanResponse> {
    return this.request("DeleteBackupPlan", req, cb)
  }

  /**
   * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。只支持按量计费实例。
   */
  async InquiryPriceUpgradeDBInstance(
    req: InquiryPriceUpgradeDBInstanceRequest,
    cb?: (error: string, rep: InquiryPriceUpgradeDBInstanceResponse) => void
  ): Promise<InquiryPriceUpgradeDBInstanceResponse> {
    return this.request("InquiryPriceUpgradeDBInstance", req, cb)
  }

  /**
   * 本接口（CreateReadOnlyGroup）用于创建只读组
   */
  async CreateReadOnlyGroup(
    req: CreateReadOnlyGroupRequest,
    cb?: (error: string, rep: CreateReadOnlyGroupResponse) => void
  ): Promise<CreateReadOnlyGroupResponse> {
    return this.request("CreateReadOnlyGroup", req, cb)
  }

  /**
   * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
   */
  async InquiryPriceRenewDBInstance(
    req: InquiryPriceRenewDBInstanceRequest,
    cb?: (error: string, rep: InquiryPriceRenewDBInstanceResponse) => void
  ): Promise<InquiryPriceRenewDBInstanceResponse> {
    return this.request("InquiryPriceRenewDBInstance", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceSecurityGroups）用于修改实例安全组。
   */
  async ModifyDBInstanceSecurityGroups(
    req: ModifyDBInstanceSecurityGroupsRequest,
    cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void
  ): Promise<ModifyDBInstanceSecurityGroupsResponse> {
    return this.request("ModifyDBInstanceSecurityGroups", req, cb)
  }

  /**
   * 本接口（DeleteBaseBackup）用于删除实例指定数据备份。
   */
  async DeleteBaseBackup(
    req: DeleteBaseBackupRequest,
    cb?: (error: string, rep: DeleteBaseBackupResponse) => void
  ): Promise<DeleteBaseBackupResponse> {
    return this.request("DeleteBaseBackup", req, cb)
  }

  /**
   * 此接口用于锁定数据库账号，锁定后账号当前连接会断开，并且无法建立新连接。
   */
  async LockAccount(
    req: LockAccountRequest,
    cb?: (error: string, rep: LockAccountResponse) => void
  ): Promise<LockAccountResponse> {
    return this.request("LockAccount", req, cb)
  }

  /**
   * 本接口（DescribeReadOnlyGroups）用于查询只读组列表
   */
  async DescribeReadOnlyGroups(
    req: DescribeReadOnlyGroupsRequest,
    cb?: (error: string, rep: DescribeReadOnlyGroupsResponse) => void
  ): Promise<DescribeReadOnlyGroupsResponse> {
    return this.request("DescribeReadOnlyGroups", req, cb)
  }

  /**
   * 本接口（UpgradeDBInstance）用于升级实例配置。本接口已废弃，推荐使用接口[ModifyDBInstanceSpec](https://cloud.tencent.com/document/api/409/63689)替代。
   */
  async UpgradeDBInstance(
    req: UpgradeDBInstanceRequest,
    cb?: (error: string, rep: UpgradeDBInstanceResponse) => void
  ): Promise<UpgradeDBInstanceResponse> {
    return this.request("UpgradeDBInstance", req, cb)
  }

  /**
     * 本接口 (CreateInstances) 用于创建一个或者多个PostgreSQL实例，通过此接口创建的实例无需进行初始化，可直接使用。
<li>实例创建成功后将自动开机启动，实例状态变为“运行中”。</li>
<li>预付费实例的购买会预先扣除本次实例购买所需金额，按小时后付费实例购买会预先冻结本次实例购买一小时内所需金额，在调用本接口前请确保账户余额充足。</li>
     */
  async CreateInstances(
    req: CreateInstancesRequest,
    cb?: (error: string, rep: CreateInstancesResponse) => void
  ): Promise<CreateInstancesResponse> {
    return this.request("CreateInstances", req, cb)
  }
}

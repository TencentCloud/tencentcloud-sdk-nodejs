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
  IsolateHourDBInstanceResponse,
  CreateDBInstanceRequest,
  ZonesInfo,
  DescribeAccountPrivilegesResponse,
  DescribeDatabasesRequest,
  ParamDesc,
  DescribeDBResourceUsageRequest,
  DescribeAccountsRequest,
  DescribeRenewalPriceResponse,
  CreateDedicatedClusterDBInstanceResponse,
  DestroyHourDBInstanceRequest,
  AssociateSecurityGroupsRequest,
  DescribeUpgradePriceRequest,
  FlushBinlogResponse,
  CancelDcnJobResponse,
  DescribeFileDownloadUrlRequest,
  DescribeDBResourceUsageDetailsResponse,
  DescribeDBInstanceSpecsResponse,
  DestroyHourDBInstanceResponse,
  Account,
  DescribeProjectSecurityGroupsRequest,
  DescribeDBSlowLogsRequest,
  CreateAccountRequest,
  InitDBInstancesResponse,
  DescribeLogFileRetentionPeriodRequest,
  IsolateHourDBInstanceRequest,
  ResourceUsageMonitorSet,
  ModifyLogFileRetentionPeriodRequest,
  PerformanceMonitorSet,
  DescribeFlowResponse,
  CloneAccountResponse,
  ZoneChooseInfo,
  ModifyAccountDescriptionResponse,
  DescribeDBParametersRequest,
  ParamConstraint,
  ModifyDBInstancesProjectResponse,
  DBBackupTimeConfig,
  ModifyBackupTimeRequest,
  DatabaseView,
  DescribeDBLogFilesRequest,
  DescribeRenewalPriceRequest,
  NodeInfo,
  ModifySyncTaskAttributeResponse,
  DcnDetailItem,
  ResetAccountPasswordRequest,
  CopyAccountPrivilegesResponse,
  ModifyRealServerAccessStrategyResponse,
  CloneAccountRequest,
  DescribeDatabaseObjectsRequest,
  SlowLogData,
  ParamModifyResult,
  DescribeDBInstancesRequest,
  ProcedurePrivilege,
  SwitchDBInstanceHAResponse,
  DescribeSaleInfoRequest,
  RenewDBInstanceRequest,
  CreateTmpInstancesRequest,
  TablePrivilege,
  DescribeProjectSecurityGroupsResponse,
  DatabaseFunction,
  DescribeSqlLogsRequest,
  ResetAccountPasswordResponse,
  DescribeDBInstanceSpecsRequest,
  DescribePriceRequest,
  CreateDBInstanceResponse,
  ModifyRealServerAccessStrategyRequest,
  DescribeBackupTimeRequest,
  RestartDBInstancesResponse,
  DescribeSaleInfoResponse,
  DatabaseTable,
  DescribeDBPerformanceDetailsRequest,
  CreateDedicatedClusterDBInstanceRequest,
  SwitchDBInstanceHARequest,
  DBParamValue,
  SpecConfigInfo,
  ModifyDBParametersRequest,
  ModifyDBInstanceSecurityGroupsRequest,
  DescribeDcnDetailRequest,
  DescribeFileDownloadUrlResponse,
  ModifyDBParametersResponse,
  CopyAccountPrivilegesRequest,
  SecurityGroup,
  DescribeDatabaseTableRequest,
  OpenDBExtranetAccessResponse,
  KillSessionRequest,
  DescribeDatabaseObjectsResponse,
  ModifyDBInstanceNameRequest,
  DeleteAccountRequest,
  TableColumn,
  CreateTmpInstancesResponse,
  UpgradeDBInstanceRequest,
  SecurityGroupBound,
  ColumnPrivilege,
  ModifySyncTaskAttributeRequest,
  DescribeUpgradePriceResponse,
  AssociateSecurityGroupsResponse,
  DBInstance,
  DescribePriceResponse,
  InitDBInstancesRequest,
  ModifyAccountPrivilegesResponse,
  ModifyBackupTimeResponse,
  Database,
  GrantAccountPrivilegesResponse,
  CancelDcnJobRequest,
  OpenDBExtranetAccessRequest,
  DatabasePrivilege,
  ModifyDBInstanceSecurityGroupsResponse,
  ModifyDBInstanceNameResponse,
  CloseDBExtranetAccessResponse,
  FunctionPrivilege,
  ModifyAccountDescriptionRequest,
  KillSessionResponse,
  GrantAccountPrivilegesRequest,
  DescribeBackupTimeResponse,
  ActivateHourDBInstanceRequest,
  RenewDBInstanceResponse,
  DescribeDatabasesResponse,
  ViewPrivileges,
  DescribeDBLogFilesResponse,
  CloseDBExtranetAccessRequest,
  ResourceTag,
  DescribeSqlLogsResponse,
  DescribeDcnDetailResponse,
  InstanceSpec,
  DescribeFlowRequest,
  ModifyAccountPrivilegesRequest,
  DescribeDBPerformanceResponse,
  DatabaseProcedure,
  ModifyDBSyncModeRequest,
  ActivateHourDBInstanceResponse,
  DescribeInstanceNodeInfoRequest,
  CreateHourDBInstanceResponse,
  CreateAccountResponse,
  DescribeLogFileRetentionPeriodResponse,
  RegionInfo,
  DescribeDBInstancesResponse,
  ConstraintRange,
  DescribeDBResourceUsageResponse,
  LogFileInfo,
  RestartDBInstancesRequest,
  DescribeDBResourceUsageDetailsRequest,
  DisassociateSecurityGroupsRequest,
  DBAccount,
  CreateHourDBInstanceRequest,
  DescribeDatabaseTableResponse,
  DescribeAccountPrivilegesRequest,
  DescribeDBPerformanceDetailsResponse,
  SqlLogItem,
  DescribeAccountsResponse,
  DescribeDBSlowLogsResponse,
  UpgradeDBInstanceResponse,
  DescribeDBParametersResponse,
  ModifyDBInstancesProjectRequest,
  FlushBinlogRequest,
  MonitorData,
  ModifyDBSyncModeResponse,
  DescribeInstanceNodeInfoResponse,
  ModifyLogFileRetentionPeriodResponse,
  DisassociateSecurityGroupsResponse,
  DescribeDBPerformanceRequest,
  DeleteAccountResponse,
} from "./mariadb_models"

/**
 * mariadb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mariadb.tencentcloudapi.com", "2017-03-12", clientConfig)
  }

  /**
     * 本接口（DescribeAccountPrivileges）用于查询云数据库账号权限。
注意：注意：相同用户名，不同Host是不同的账号。
     */
  async DescribeAccountPrivileges(
    req: DescribeAccountPrivilegesRequest,
    cb?: (error: string, rep: DescribeAccountPrivilegesResponse) => void
  ): Promise<DescribeAccountPrivilegesResponse> {
    return this.request("DescribeAccountPrivileges", req, cb)
  }

  /**
   * 本接口（DescribeRenewalPrice）用于在续费云数据库实例时，查询续费的价格。
   */
  async DescribeRenewalPrice(
    req: DescribeRenewalPriceRequest,
    cb?: (error: string, rep: DescribeRenewalPriceResponse) => void
  ): Promise<DescribeRenewalPriceResponse> {
    return this.request("DescribeRenewalPrice", req, cb)
  }

  /**
   * 创建后付费实例
   */
  async CreateHourDBInstance(
    req: CreateHourDBInstanceRequest,
    cb?: (error: string, rep: CreateHourDBInstanceResponse) => void
  ): Promise<CreateHourDBInstanceResponse> {
    return this.request("CreateHourDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeInstanceNodeInfo）用于获取数据库实例主备节点信息
   */
  async DescribeInstanceNodeInfo(
    req: DescribeInstanceNodeInfoRequest,
    cb?: (error: string, rep: DescribeInstanceNodeInfoResponse) => void
  ): Promise<DescribeInstanceNodeInfoResponse> {
    return this.request("DescribeInstanceNodeInfo", req, cb)
  }

  /**
   * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的数据库中的对象列表，包含表、存储过程、视图和函数。
   */
  async DescribeDatabaseObjects(
    req: DescribeDatabaseObjectsRequest,
    cb?: (error: string, rep: DescribeDatabaseObjectsResponse) => void
  ): Promise<DescribeDatabaseObjectsResponse> {
    return this.request("DescribeDatabaseObjects", req, cb)
  }

  /**
   * 本接口（KillSession）用于杀死指定会话。
   */
  async KillSession(
    req: KillSessionRequest,
    cb?: (error: string, rep: KillSessionResponse) => void
  ): Promise<KillSessionResponse> {
    return this.request("KillSession", req, cb)
  }

  /**
   * 本接口（ModifyBackupTime）用于设置云数据库实例的备份时间。后台系统将根据此配置定期进行实例备份。
   */
  async ModifyBackupTime(
    req: ModifyBackupTimeRequest,
    cb?: (error: string, rep: ModifyBackupTimeResponse) => void
  ): Promise<ModifyBackupTimeResponse> {
    return this.request("ModifyBackupTime", req, cb)
  }

  /**
   * 本接口(DescribeSaleInfo)用于查询云数据库可售卖的地域和可用区信息。
   */
  async DescribeSaleInfo(
    req?: DescribeSaleInfoRequest,
    cb?: (error: string, rep: DescribeSaleInfoResponse) => void
  ): Promise<DescribeSaleInfoResponse> {
    return this.request("DescribeSaleInfo", req, cb)
  }

  /**
     * 本接口（ModifyAccountDescription）用于修改云数据库账号备注。
注意：相同用户名，不同Host是不同的账号。
     */
  async ModifyAccountDescription(
    req: ModifyAccountDescriptionRequest,
    cb?: (error: string, rep: ModifyAccountDescriptionResponse) => void
  ): Promise<ModifyAccountDescriptionResponse> {
    return this.request("ModifyAccountDescription", req, cb)
  }

  /**
     * 本接口(ModifyRealServerAccessStrategy)用于修改云数据库的VPCGW到RS的访问策略。

**注意**
- 修改策略后只对新建立的连接生效，老连接不受影响
- 就近访问只针对实例是跨可用区部署有用，单可用区部署实例就近与否并无作用
- DB每个Node对应一个proxy，如果开启就近访问，将会把连接集中到对应可用区的proxy上，可能造成热点问题，这种情况下如果是线上业务，请务必根据自己的业务请求量测试符合预期后再进行就近策略变更
     */
  async ModifyRealServerAccessStrategy(
    req: ModifyRealServerAccessStrategyRequest,
    cb?: (error: string, rep: ModifyRealServerAccessStrategyResponse) => void
  ): Promise<ModifyRealServerAccessStrategyResponse> {
    return this.request("ModifyRealServerAccessStrategy", req, cb)
  }

  /**
   * 本接口（SwitchDBInstanceHA）用于发起实例主备切换。
   */
  async SwitchDBInstanceHA(
    req: SwitchDBInstanceHARequest,
    cb?: (error: string, rep: SwitchDBInstanceHAResponse) => void
  ): Promise<SwitchDBInstanceHAResponse> {
    return this.request("SwitchDBInstanceHA", req, cb)
  }

  /**
   * 本接口(DescribeFileDownloadUrl)用于获取数据库指定备份或日志文件的下载连接。
   */
  async DescribeFileDownloadUrl(
    req: DescribeFileDownloadUrlRequest,
    cb?: (error: string, rep: DescribeFileDownloadUrlResponse) => void
  ): Promise<DescribeFileDownloadUrlResponse> {
    return this.request("DescribeFileDownloadUrl", req, cb)
  }

  /**
   * 本接口（DescribeBackupTime）用于获取云数据库的备份时间。后台系统将根据此配置定期进行实例备份。
   */
  async DescribeBackupTime(
    req: DescribeBackupTimeRequest,
    cb?: (error: string, rep: DescribeBackupTimeResponse) => void
  ): Promise<DescribeBackupTimeResponse> {
    return this.request("DescribeBackupTime", req, cb)
  }

  /**
   * 本接口(DescribeDBResourceUsageDetails)用于查看数据库实例当前性能数据。
   */
  async DescribeDBResourceUsageDetails(
    req: DescribeDBResourceUsageDetailsRequest,
    cb?: (error: string, rep: DescribeDBResourceUsageDetailsResponse) => void
  ): Promise<DescribeDBResourceUsageDetailsResponse> {
    return this.request("DescribeDBResourceUsageDetails", req, cb)
  }

  /**
   * 解隔离后付费实例
   */
  async ActivateHourDBInstance(
    req: ActivateHourDBInstanceRequest,
    cb?: (error: string, rep: ActivateHourDBInstanceResponse) => void
  ): Promise<ActivateHourDBInstanceResponse> {
    return this.request("ActivateHourDBInstance", req, cb)
  }

  /**
     * 本接口（ResetAccountPassword）用于重置云数据库账号的密码。
注意：相同用户名，不同Host是不同的账号。
     */
  async ResetAccountPassword(
    req: ResetAccountPasswordRequest,
    cb?: (error: string, rep: ResetAccountPasswordResponse) => void
  ): Promise<ResetAccountPasswordResponse> {
    return this.request("ResetAccountPassword", req, cb)
  }

  /**
   * 本接口(ModifyDBParameters)用于修改数据库参数。
   */
  async ModifyDBParameters(
    req: ModifyDBParametersRequest,
    cb?: (error: string, rep: ModifyDBParametersResponse) => void
  ): Promise<ModifyDBParametersResponse> {
    return this.request("ModifyDBParameters", req, cb)
  }

  /**
   * 本接口（DescribeSqlLogs）用于获取实例SQL日志。
   */
  async DescribeSqlLogs(
    req: DescribeSqlLogsRequest,
    cb?: (error: string, rep: DescribeSqlLogsResponse) => void
  ): Promise<DescribeSqlLogsResponse> {
    return this.request("DescribeSqlLogs", req, cb)
  }

  /**
   * 本接口(DescribeDBPerformanceDetails)用于查看实例性能数据详情。
   */
  async DescribeDBPerformanceDetails(
    req: DescribeDBPerformanceDetailsRequest,
    cb?: (error: string, rep: DescribeDBPerformanceDetailsResponse) => void
  ): Promise<DescribeDBPerformanceDetailsResponse> {
    return this.request("DescribeDBPerformanceDetails", req, cb)
  }

  /**
   * 本接口（DescribeFlow）用于查询流程状态。
   */
  async DescribeFlow(
    req: DescribeFlowRequest,
    cb?: (error: string, rep: DescribeFlowResponse) => void
  ): Promise<DescribeFlowResponse> {
    return this.request("DescribeFlow", req, cb)
  }

  /**
   * 创建独享集群Mariadb实例
   */
  async CreateDedicatedClusterDBInstance(
    req: CreateDedicatedClusterDBInstanceRequest,
    cb?: (error: string, rep: CreateDedicatedClusterDBInstanceResponse) => void
  ): Promise<CreateDedicatedClusterDBInstanceResponse> {
    return this.request("CreateDedicatedClusterDBInstance", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceName）用于修改云数据库实例的名称。
   */
  async ModifyDBInstanceName(
    req: ModifyDBInstanceNameRequest,
    cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void
  ): Promise<ModifyDBInstanceNameResponse> {
    return this.request("ModifyDBInstanceName", req, cb)
  }

  /**
   * 本接口（RestartDBInstances）用于重启数据库实例
   */
  async RestartDBInstances(
    req: RestartDBInstancesRequest,
    cb?: (error: string, rep: RestartDBInstancesResponse) => void
  ): Promise<RestartDBInstancesResponse> {
    return this.request("RestartDBInstances", req, cb)
  }

  /**
     * 本接口（GrantAccountPrivileges）用于给云数据库账号赋权。
注意：相同用户名，不同Host是不同的账号。
     */
  async GrantAccountPrivileges(
    req: GrantAccountPrivilegesRequest,
    cb?: (error: string, rep: GrantAccountPrivilegesResponse) => void
  ): Promise<GrantAccountPrivilegesResponse> {
    return this.request("GrantAccountPrivileges", req, cb)
  }

  /**
   * 本接口（DeleteAccount）用于删除云数据库账号。用户名+host唯一确定一个账号。
   */
  async DeleteAccount(
    req: DeleteAccountRequest,
    cb?: (error: string, rep: DeleteAccountResponse) => void
  ): Promise<DeleteAccountResponse> {
    return this.request("DeleteAccount", req, cb)
  }

  /**
   * 本接口(DescribeDBParameters)用于获取数据库的当前参数设置。
   */
  async DescribeDBParameters(
    req: DescribeDBParametersRequest,
    cb?: (error: string, rep: DescribeDBParametersResponse) => void
  ): Promise<DescribeDBParametersResponse> {
    return this.request("DescribeDBParameters", req, cb)
  }

  /**
   * 本接口（ModifyDBInstancesProject）用于修改云数据库实例所属项目。
   */
  async ModifyDBInstancesProject(
    req: ModifyDBInstancesProjectRequest,
    cb?: (error: string, rep: ModifyDBInstancesProjectResponse) => void
  ): Promise<ModifyDBInstancesProjectResponse> {
    return this.request("ModifyDBInstancesProject", req, cb)
  }

  /**
   * 本接口(DescribeDBSlowLogs)用于查询慢查询日志列表。
   */
  async DescribeDBSlowLogs(
    req: DescribeDBSlowLogsRequest,
    cb?: (error: string, rep: DescribeDBSlowLogsResponse) => void
  ): Promise<DescribeDBSlowLogsResponse> {
    return this.request("DescribeDBSlowLogs", req, cb)
  }

  /**
   * 本接口(DescribeDBLogFiles)用于获取数据库的各种日志列表，包括冷备、binlog、errlog和slowlog。
   */
  async DescribeDBLogFiles(
    req: DescribeDBLogFilesRequest,
    cb?: (error: string, rep: DescribeDBLogFilesResponse) => void
  ): Promise<DescribeDBLogFilesResponse> {
    return this.request("DescribeDBLogFiles", req, cb)
  }

  /**
   * 本接口 (ModifySyncTaskAttribute) 用于修改同步任务的属性（目前只支持修改任务名称）
   */
  async ModifySyncTaskAttribute(
    req: ModifySyncTaskAttributeRequest,
    cb?: (error: string, rep: ModifySyncTaskAttributeResponse) => void
  ): Promise<ModifySyncTaskAttributeResponse> {
    return this.request("ModifySyncTaskAttribute", req, cb)
  }

  /**
   * 本接口（DestroyHourDBInstance）用于销毁按量计费实例。
   */
  async DestroyHourDBInstance(
    req: DestroyHourDBInstanceRequest,
    cb?: (error: string, rep: DestroyHourDBInstanceResponse) => void
  ): Promise<DestroyHourDBInstanceResponse> {
    return this.request("DestroyHourDBInstance", req, cb)
  }

  /**
   * 本接口(DescribeDBInstanceSpecs)用于查询可创建的云数据库可售卖的规格配置。
   */
  async DescribeDBInstanceSpecs(
    req?: DescribeDBInstanceSpecsRequest,
    cb?: (error: string, rep: DescribeDBInstanceSpecsResponse) => void
  ): Promise<DescribeDBInstanceSpecsResponse> {
    return this.request("DescribeDBInstanceSpecs", req, cb)
  }

  /**
     * 本接口（DescribeDBInstances）用于查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回20条实例记录，单次请求最多支持返回100条实例记录。
     */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
  }

  /**
   * 本接口（RenewDBInstance）用于续费云数据库实例。
   */
  async RenewDBInstance(
    req: RenewDBInstanceRequest,
    cb?: (error: string, rep: RenewDBInstanceResponse) => void
  ): Promise<RenewDBInstanceResponse> {
    return this.request("RenewDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeUpgradePrice）用于在扩容云数据库实例时，查询变配的价格。
   */
  async DescribeUpgradePrice(
    req: DescribeUpgradePriceRequest,
    cb?: (error: string, rep: DescribeUpgradePriceResponse) => void
  ): Promise<DescribeUpgradePriceResponse> {
    return this.request("DescribeUpgradePrice", req, cb)
  }

  /**
   * 本接口（DescribeProjectSecurityGroups）用于查询项目安全组信息
   */
  async DescribeProjectSecurityGroups(
    req: DescribeProjectSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void
  ): Promise<DescribeProjectSecurityGroupsResponse> {
    return this.request("DescribeProjectSecurityGroups", req, cb)
  }

  /**
   * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定云资源。
   */
  async AssociateSecurityGroups(
    req: AssociateSecurityGroupsRequest,
    cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void
  ): Promise<AssociateSecurityGroupsResponse> {
    return this.request("AssociateSecurityGroups", req, cb)
  }

  /**
   * 本接口（CreateAccount）用于创建云数据库账号。一个实例可以创建多个不同的账号，相同的用户名+不同的host是不同的账号。
   */
  async CreateAccount(
    req: CreateAccountRequest,
    cb?: (error: string, rep: CreateAccountResponse) => void
  ): Promise<CreateAccountResponse> {
    return this.request("CreateAccount", req, cb)
  }

  /**
   * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
   */
  async OpenDBExtranetAccess(
    req: OpenDBExtranetAccessRequest,
    cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void
  ): Promise<OpenDBExtranetAccessResponse> {
    return this.request("OpenDBExtranetAccess", req, cb)
  }

  /**
   * 本接口(InitDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
   */
  async InitDBInstances(
    req: InitDBInstancesRequest,
    cb?: (error: string, rep: InitDBInstancesResponse) => void
  ): Promise<InitDBInstancesResponse> {
    return this.request("InitDBInstances", req, cb)
  }

  /**
   * 本接口（CreateDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长和数量等信息创建云数据库实例。
   */
  async CreateDBInstance(
    req: CreateDBInstanceRequest,
    cb?: (error: string, rep: CreateDBInstanceResponse) => void
  ): Promise<CreateDBInstanceResponse> {
    return this.request("CreateDBInstance", req, cb)
  }

  /**
     * 本接口(ModifyAccountPrivileges)用于修改云数据库的账户的权限信息。

**注意**
- 系统保留库："mysql"，只开放["SELECT"]权限
- 只读账号授予读写权限会报错
- 不传该参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组
     */
  async ModifyAccountPrivileges(
    req: ModifyAccountPrivilegesRequest,
    cb?: (error: string, rep: ModifyAccountPrivilegesResponse) => void
  ): Promise<ModifyAccountPrivilegesResponse> {
    return this.request("ModifyAccountPrivileges", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceSecurityGroups）用于修改云数据库安全组
   */
  async ModifyDBInstanceSecurityGroups(
    req: ModifyDBInstanceSecurityGroupsRequest,
    cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void
  ): Promise<ModifyDBInstanceSecurityGroupsResponse> {
    return this.request("ModifyDBInstanceSecurityGroups", req, cb)
  }

  /**
   * 本接口（ModifyDBSyncMode）用于修改云数据库实例的同步模式。
   */
  async ModifyDBSyncMode(
    req: ModifyDBSyncModeRequest,
    cb?: (error: string, rep: ModifyDBSyncModeResponse) => void
  ): Promise<ModifyDBSyncModeResponse> {
    return this.request("ModifyDBSyncMode", req, cb)
  }

  /**
   * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
   */
  async CloseDBExtranetAccess(
    req: CloseDBExtranetAccessRequest,
    cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void
  ): Promise<CloseDBExtranetAccessResponse> {
    return this.request("CloseDBExtranetAccess", req, cb)
  }

  /**
   * 本接口（CreateTmpInstances）用于创建临时实例。
   */
  async CreateTmpInstances(
    req: CreateTmpInstancesRequest,
    cb?: (error: string, rep: CreateTmpInstancesResponse) => void
  ): Promise<CreateTmpInstancesResponse> {
    return this.request("CreateTmpInstances", req, cb)
  }

  /**
   * 本接口（DescribeAccounts）用于查询指定云数据库实例的账号列表。
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 获取实例灾备详情
   */
  async DescribeDcnDetail(
    req: DescribeDcnDetailRequest,
    cb?: (error: string, rep: DescribeDcnDetailResponse) => void
  ): Promise<DescribeDcnDetailResponse> {
    return this.request("DescribeDcnDetail", req, cb)
  }

  /**
   * 相当于在mysqld中执行flush logs，完成切分的binlog将展示在实例控制台binlog列表里。
   */
  async FlushBinlog(
    req: FlushBinlogRequest,
    cb?: (error: string, rep: FlushBinlogResponse) => void
  ): Promise<FlushBinlogResponse> {
    return this.request("FlushBinlog", req, cb)
  }

  /**
     * 本接口（CopyAccountPrivileges）用于复制云数据库账号的权限。
注意：相同用户名，不同Host是不同的账号，Readonly属性相同的账号之间才能复制权限。
     */
  async CopyAccountPrivileges(
    req: CopyAccountPrivilegesRequest,
    cb?: (error: string, rep: CopyAccountPrivilegesResponse) => void
  ): Promise<CopyAccountPrivilegesResponse> {
    return this.request("CopyAccountPrivileges", req, cb)
  }

  /**
   * 隔离后付费实例
   */
  async IsolateHourDBInstance(
    req: IsolateHourDBInstanceRequest,
    cb?: (error: string, rep: IsolateHourDBInstanceResponse) => void
  ): Promise<IsolateHourDBInstanceResponse> {
    return this.request("IsolateHourDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeDatabases）用于查询云数据库实例的数据库列表。
   */
  async DescribeDatabases(
    req: DescribeDatabasesRequest,
    cb?: (error: string, rep: DescribeDatabasesResponse) => void
  ): Promise<DescribeDatabasesResponse> {
    return this.request("DescribeDatabases", req, cb)
  }

  /**
   * 本接口（DescribePrice）用于在购买实例前，查询实例的价格。
   */
  async DescribePrice(
    req: DescribePriceRequest,
    cb?: (error: string, rep: DescribePriceResponse) => void
  ): Promise<DescribePriceResponse> {
    return this.request("DescribePrice", req, cb)
  }

  /**
   * 本接口（DescribeDatabaseTable）用于查询云数据库实例的表信息。
   */
  async DescribeDatabaseTable(
    req: DescribeDatabaseTableRequest,
    cb?: (error: string, rep: DescribeDatabaseTableResponse) => void
  ): Promise<DescribeDatabaseTableResponse> {
    return this.request("DescribeDatabaseTable", req, cb)
  }

  /**
   * 取消DCN同步
   */
  async CancelDcnJob(
    req: CancelDcnJobRequest,
    cb?: (error: string, rep: CancelDcnJobResponse) => void
  ): Promise<CancelDcnJobResponse> {
    return this.request("CancelDcnJob", req, cb)
  }

  /**
   * 本接口（CloneAccount）用于克隆实例账户。
   */
  async CloneAccount(
    req: CloneAccountRequest,
    cb?: (error: string, rep: CloneAccountResponse) => void
  ): Promise<CloneAccountResponse> {
    return this.request("CloneAccount", req, cb)
  }

  /**
   * 本接口(UpgradeDBInstance)用于扩容云数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
   */
  async UpgradeDBInstance(
    req: UpgradeDBInstanceRequest,
    cb?: (error: string, rep: UpgradeDBInstanceResponse) => void
  ): Promise<UpgradeDBInstanceResponse> {
    return this.request("UpgradeDBInstance", req, cb)
  }

  /**
   * 本接口(DescribeDBPerformance)用于查看数据库实例当前性能数据。
   */
  async DescribeDBPerformance(
    req: DescribeDBPerformanceRequest,
    cb?: (error: string, rep: DescribeDBPerformanceResponse) => void
  ): Promise<DescribeDBPerformanceResponse> {
    return this.request("DescribeDBPerformance", req, cb)
  }

  /**
   * 本接口(DescribeLogFileRetentionPeriod)用于查看数据库备份日志的备份天数的设置情况。
   */
  async DescribeLogFileRetentionPeriod(
    req: DescribeLogFileRetentionPeriodRequest,
    cb?: (error: string, rep: DescribeLogFileRetentionPeriodResponse) => void
  ): Promise<DescribeLogFileRetentionPeriodResponse> {
    return this.request("DescribeLogFileRetentionPeriod", req, cb)
  }

  /**
   * 本接口(DescribeDBResourceUsage)用于查看数据库实例资源的使用情况。
   */
  async DescribeDBResourceUsage(
    req: DescribeDBResourceUsageRequest,
    cb?: (error: string, rep: DescribeDBResourceUsageResponse) => void
  ): Promise<DescribeDBResourceUsageResponse> {
    return this.request("DescribeDBResourceUsage", req, cb)
  }

  /**
   * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
   */
  async DisassociateSecurityGroups(
    req: DisassociateSecurityGroupsRequest,
    cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void
  ): Promise<DisassociateSecurityGroupsResponse> {
    return this.request("DisassociateSecurityGroups", req, cb)
  }

  /**
   * 本接口(ModifyLogFileRetentionPeriod)用于修改数据库备份日志保存天数。
   */
  async ModifyLogFileRetentionPeriod(
    req: ModifyLogFileRetentionPeriodRequest,
    cb?: (error: string, rep: ModifyLogFileRetentionPeriodResponse) => void
  ): Promise<ModifyLogFileRetentionPeriodResponse> {
    return this.request("ModifyLogFileRetentionPeriod", req, cb)
  }
}

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
  DescribeUserTasksResponse,
  InitDCDBInstancesResponse,
  DescribeDBTmpInstancesRequest,
  DescribeAccountPrivilegesResponse,
  DescribeDatabasesRequest,
  ParamDesc,
  DestroyDCDBInstanceResponse,
  DescribeDBParametersRequest,
  DescribeAccountsRequest,
  SpecConfig,
  UpgradeHourDCDBInstanceResponse,
  ModifyRealServerAccessStrategyResponse,
  ModifyBackupConfigsRequest,
  ActiveHourDCDBInstanceResponse,
  DescribeDCDBPriceResponse,
  ModifyInstanceVportResponse,
  DescribeDCDBInstanceDetailRequest,
  DescribeFileDownloadUrlResponse,
  ModifyInstanceVipResponse,
  AssociateSecurityGroupsRequest,
  ShardBriefInfo,
  NewBackupConfig,
  CancelOnlineDDLJobRequest,
  FlushBinlogResponse,
  DescribeDBSecurityGroupsResponse,
  CancelDcnJobResponse,
  DescribeFileDownloadUrlRequest,
  UpgradeDCDBInstanceResponse,
  DescribeDBSyncModeResponse,
  DescribeProjectSecurityGroupsRequest,
  DescribeDCDBUpgradePriceResponse,
  DescribeDBSlowLogsRequest,
  CreateAccountRequest,
  UpgradeDedicatedDCDBInstanceResponse,
  CreateOnlineDDLJobResponse,
  DescribeDBParametersResponse,
  Tag,
  DescribeDatabaseTableRequest,
  IsolateHourDCDBInstanceRequest,
  ModifyDBInstanceNameResponse,
  DescribeFlowResponse,
  UpgradeHourDCDBInstanceRequest,
  CloneAccountResponse,
  IsolateDCDBInstanceRequest,
  IsolateDedicatedDBInstanceRequest,
  ModifyAccountDescriptionResponse,
  DestroyDCDBInstanceRequest,
  OpenDBExtranetAccessResponse,
  CreateDCDBInstanceResponse,
  BriefNodeInfo,
  ModifyDBInstancesProjectResponse,
  ModifyDBEncryptAttributesResponse,
  DescribeDCDBInstanceNodeInfoRequest,
  SwitchDBInstanceHAResponse,
  DatabaseView,
  ConfigValue,
  DescribeDBLogFilesRequest,
  NodeInfo,
  DescribeOrdersResponse,
  CreateDedicatedClusterDCDBInstanceRequest,
  DcnDetailItem,
  ResetAccountPasswordRequest,
  CopyAccountPrivilegesResponse,
  CloneAccountRequest,
  DescribeDCDBInstanceDetailResponse,
  ModifyInstanceNetworkResponse,
  DescribeDBSecurityGroupsRequest,
  DescribeDCDBPriceRequest,
  DescribeOnlineDDLJobRequest,
  DescribeBackupFilesResponse,
  ParamModifyResult,
  TablePrivilege,
  DescribeProjectSecurityGroupsResponse,
  DatabaseFunction,
  ParamConstraint,
  ResetAccountPasswordResponse,
  DescribeDCDBSaleInfoRequest,
  ModifyRealServerAccessStrategyRequest,
  ExpandShardConfig,
  ModifyAccountConfigRequest,
  TerminateDedicatedDBInstanceResponse,
  ShardZoneChooseInfo,
  RenewDCDBInstanceRequest,
  DescribeDBEncryptAttributesResponse,
  Project,
  CreateTmpDCDBInstanceRequest,
  DatabaseTable,
  DescribeDBEncryptAttributesRequest,
  Deal,
  GrantAccountPrivilegesRequest,
  DescribeShardSpecRequest,
  DescribeDCDBShardsRequest,
  SwitchDBInstanceHARequest,
  DBParamValue,
  SpecConfigInfo,
  TmpInstance,
  ModifyDBParametersRequest,
  DCDBInstanceInfo,
  DescribeBackupConfigsRequest,
  ModifyDBInstanceSecurityGroupsRequest,
  DescribeDcnDetailRequest,
  DDLDetail,
  ModifyDBParametersResponse,
  DCDBShardInfo,
  CopyAccountPrivilegesRequest,
  SecurityGroup,
  DescribeBackupFilesRequest,
  DescribeDCDBInstanceNodeInfoResponse,
  KillSessionRequest,
  TerminateDedicatedDBInstanceRequest,
  DescribeDatabaseObjectsResponse,
  ModifyDBInstanceNameRequest,
  DescribeDcnDetailResponse,
  DescribeBackupConfigsResponse,
  ModifyDBEncryptAttributesRequest,
  TableColumn,
  SecurityGroupBound,
  ColumnPrivilege,
  SplitShardConfig,
  RenewDCDBInstanceResponse,
  DescribeDCDBRenewalPriceResponse,
  UpgradeDedicatedDCDBInstanceRequest,
  AssociateSecurityGroupsResponse,
  DescribeDCDBBinlogTimeRequest,
  DescribeShardSpecResponse,
  DescribeDCDBShardsResponse,
  ZonesInfo,
  InstanceBackupFileItem,
  CreateHourDCDBInstanceResponse,
  BackupConfig,
  Database,
  GrantAccountPrivilegesResponse,
  CancelDcnJobRequest,
  IsolateHourDCDBInstanceResponse,
  ShardInfo,
  ModifyInstanceVipRequest,
  OpenDBExtranetAccessRequest,
  ReservedNetResource,
  ModifyBackupConfigsResponse,
  DatabasePrivilege,
  DescribeDCDBSaleInfoResponse,
  ModifyDBInstancesProjectRequest,
  CreateHourDCDBInstanceRequest,
  DescribeDBSyncModeRequest,
  CloseDBExtranetAccessResponse,
  ModifyAccountDescriptionRequest,
  KillSessionResponse,
  DescribeProjectsRequest,
  SlowLogData,
  CreateOnlineDDLJobRequest,
  DescribeDatabasesResponse,
  ViewPrivileges,
  DescribeOrdersRequest,
  DescribeDBLogFilesResponse,
  CloseDBExtranetAccessRequest,
  InitDCDBInstancesRequest,
  ResourceTag,
  DeleteAccountRequest,
  DescribeDCDBInstancesResponse,
  ModifyAccountPrivilegesResponse,
  DescribeFlowRequest,
  ModifyAccountPrivilegesRequest,
  Account,
  CreateDCDBInstanceRequest,
  DescribeDCDBUpgradePriceRequest,
  CreateDedicatedClusterDCDBInstanceResponse,
  UserTaskInfo,
  DatabaseProcedure,
  DescribeDBTmpInstancesResponse,
  DescribeDCDBBinlogTimeResponse,
  AddShardConfig,
  ModifyDBSyncModeRequest,
  ModifyAccountConfigResponse,
  IsolateDCDBInstanceResponse,
  DescribeProjectsResponse,
  CreateTmpDCDBInstanceResponse,
  CreateAccountResponse,
  IsolateDedicatedDBInstanceResponse,
  DescribeLogFileRetentionPeriodResponse,
  RegionInfo,
  DescribeDatabaseObjectsRequest,
  UpgradeDCDBInstanceRequest,
  ModifyInstanceNetworkRequest,
  DestroyHourDCDBInstanceResponse,
  ConstraintRange,
  LogFileInfo,
  ActiveHourDCDBInstanceRequest,
  DisassociateSecurityGroupsRequest,
  DBAccount,
  DescribeDatabaseTableResponse,
  DescribeAccountPrivilegesRequest,
  DescribeAccountsResponse,
  DescribeDBSlowLogsResponse,
  DescribeDCDBRenewalPriceRequest,
  DescribeDCDBInstancesRequest,
  DescribeLogFileRetentionPeriodRequest,
  DescribeOnlineDDLJobResponse,
  ModifyInstanceVportRequest,
  ModifyDBInstanceSecurityGroupsResponse,
  DestroyHourDCDBInstanceRequest,
  FlushBinlogRequest,
  CancelOnlineDDLJobResponse,
  ModifyDBSyncModeResponse,
  DisassociateSecurityGroupsResponse,
  DescribeUserTasksRequest,
  DeleteAccountResponse,
} from "./dcdb_models"

/**
 * dcdb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dcdb.tencentcloudapi.com", "2018-04-11", clientConfig)
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
   * 修改账号的一些配置，比如 max_user_connections
   */
  async ModifyAccountConfig(
    req: ModifyAccountConfigRequest,
    cb?: (error: string, rep: ModifyAccountConfigResponse) => void
  ): Promise<ModifyAccountConfigResponse> {
    return this.request("ModifyAccountConfig", req, cb)
  }

  /**
   * 本接口（UpgradeDedicatedDCDBInstance）用于升级TDSQL独享集群实例
   */
  async UpgradeDedicatedDCDBInstance(
    req: UpgradeDedicatedDCDBInstanceRequest,
    cb?: (error: string, rep: UpgradeDedicatedDCDBInstanceResponse) => void
  ): Promise<UpgradeDedicatedDCDBInstanceResponse> {
    return this.request("UpgradeDedicatedDCDBInstance", req, cb)
  }

  /**
   * 解隔离TDSQL按量计费实例
   */
  async ActiveHourDCDBInstance(
    req: ActiveHourDCDBInstanceRequest,
    cb?: (error: string, rep: ActiveHourDCDBInstanceResponse) => void
  ): Promise<ActiveHourDCDBInstanceResponse> {
    return this.request("ActiveHourDCDBInstance", req, cb)
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
   * 本接口（DescribeDatabaseTable）用于查询云数据库实例的表信息。
   */
  async DescribeDatabaseTable(
    req: DescribeDatabaseTableRequest,
    cb?: (error: string, rep: DescribeDatabaseTableResponse) => void
  ): Promise<DescribeDatabaseTableResponse> {
    return this.request("DescribeDatabaseTable", req, cb)
  }

  /**
   * 查询可创建的分布式数据库可售卖的分片规格配置。
   */
  async DescribeShardSpec(
    req?: DescribeShardSpecRequest,
    cb?: (error: string, rep: DescribeShardSpecResponse) => void
  ): Promise<DescribeShardSpecResponse> {
    return this.request("DescribeShardSpec", req, cb)
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
   * 本接口（ModifyInstanceVip）用于修改实例Vip
   */
  async ModifyInstanceVip(
    req: ModifyInstanceVipRequest,
    cb?: (error: string, rep: ModifyInstanceVipResponse) => void
  ): Promise<ModifyInstanceVipResponse> {
    return this.request("ModifyInstanceVip", req, cb)
  }

  /**
     * 查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回10条实例记录，单次请求最多支持返回100条实例记录。
     */
  async DescribeDCDBInstances(
    req: DescribeDCDBInstancesRequest,
    cb?: (error: string, rep: DescribeDCDBInstancesResponse) => void
  ): Promise<DescribeDCDBInstancesResponse> {
    return this.request("DescribeDCDBInstances", req, cb)
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
   * 本接口(DescribeFileDownloadUrl)用于获取数据库指定备份或日志文件的下载连接。
   */
  async DescribeFileDownloadUrl(
    req: DescribeFileDownloadUrlRequest,
    cb?: (error: string, rep: DescribeFileDownloadUrlResponse) => void
  ): Promise<DescribeFileDownloadUrlResponse> {
    return this.request("DescribeFileDownloadUrl", req, cb)
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
   * 本接口（DescribeOrders）用于查询分布式数据库订单信息。传入订单ID来查询订单关联的分布式数据库实例，和对应的任务流程ID。
   */
  async DescribeOrders(
    req: DescribeOrdersRequest,
    cb?: (error: string, rep: DescribeOrdersResponse) => void
  ): Promise<DescribeOrdersResponse> {
    return this.request("DescribeOrders", req, cb)
  }

  /**
   * 本接口（DescribeUserTasks）用于拉取用户任务列表
   */
  async DescribeUserTasks(
    req: DescribeUserTasksRequest,
    cb?: (error: string, rep: DescribeUserTasksResponse) => void
  ): Promise<DescribeUserTasksResponse> {
    return this.request("DescribeUserTasks", req, cb)
  }

  /**
   * 本接口（DescribeDCDBPrice）用于在购买实例前，查询实例的价格。
   */
  async DescribeDCDBPrice(
    req: DescribeDCDBPriceRequest,
    cb?: (error: string, rep: DescribeDCDBPriceResponse) => void
  ): Promise<DescribeDCDBPriceResponse> {
    return this.request("DescribeDCDBPrice", req, cb)
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
   * 本接口(DescribeDCDBSaleInfo)用于查询分布式数据库可售卖的地域和可用区信息。
   */
  async DescribeDCDBSaleInfo(
    req?: DescribeDCDBSaleInfoRequest,
    cb?: (error: string, rep: DescribeDCDBSaleInfoResponse) => void
  ): Promise<DescribeDCDBSaleInfoResponse> {
    return this.request("DescribeDCDBSaleInfo", req, cb)
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
   * 本接口（DescribeFlow）用于查询流程状态
   */
  async DescribeFlow(
    req: DescribeFlowRequest,
    cb?: (error: string, rep: DescribeFlowResponse) => void
  ): Promise<DescribeFlowResponse> {
    return this.request("DescribeFlow", req, cb)
  }

  /**
   * 本接口(SwitchDBInstanceHA)用于实例主备切换。
   */
  async SwitchDBInstanceHA(
    req: SwitchDBInstanceHARequest,
    cb?: (error: string, rep: SwitchDBInstanceHAResponse) => void
  ): Promise<SwitchDBInstanceHAResponse> {
    return this.request("SwitchDBInstanceHA", req, cb)
  }

  /**
   * 本接口(InitDCDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
   */
  async InitDCDBInstances(
    req: InitDCDBInstancesRequest,
    cb?: (error: string, rep: InitDCDBInstancesResponse) => void
  ): Promise<InitDCDBInstancesResponse> {
    return this.request("InitDCDBInstances", req, cb)
  }

  /**
   * 本接口（DescribeDCDBInstanceDetail）用于获取TDSQL实例详情
   */
  async DescribeDCDBInstanceDetail(
    req: DescribeDCDBInstanceDetailRequest,
    cb?: (error: string, rep: DescribeDCDBInstanceDetailResponse) => void
  ): Promise<DescribeDCDBInstanceDetailResponse> {
    return this.request("DescribeDCDBInstanceDetail", req, cb)
  }

  /**
   * 创建TDSQL独享集群实例
   */
  async CreateDedicatedClusterDCDBInstance(
    req: CreateDedicatedClusterDCDBInstanceRequest,
    cb?: (error: string, rep: CreateDedicatedClusterDCDBInstanceResponse) => void
  ): Promise<CreateDedicatedClusterDCDBInstanceResponse> {
    return this.request("CreateDedicatedClusterDCDBInstance", req, cb)
  }

  /**
   * 本接口（RenewDCDBInstance）用于续费分布式数据库实例。
   */
  async RenewDCDBInstance(
    req: RenewDCDBInstanceRequest,
    cb?: (error: string, rep: RenewDCDBInstanceResponse) => void
  ): Promise<RenewDCDBInstanceResponse> {
    return this.request("RenewDCDBInstance", req, cb)
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
   * 回档TDSQL实例
   */
  async CreateTmpDCDBInstance(
    req: CreateTmpDCDBInstanceRequest,
    cb?: (error: string, rep: CreateTmpDCDBInstanceResponse) => void
  ): Promise<CreateTmpDCDBInstanceResponse> {
    return this.request("CreateTmpDCDBInstance", req, cb)
  }

  /**
   * 查询Online DDL 任务详情
   */
  async DescribeOnlineDDLJob(
    req: DescribeOnlineDDLJobRequest,
    cb?: (error: string, rep: DescribeOnlineDDLJobResponse) => void
  ): Promise<DescribeOnlineDDLJobResponse> {
    return this.request("DescribeOnlineDDLJob", req, cb)
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
   * 隔离TDSQL按量计费实例
   */
  async IsolateHourDCDBInstance(
    req: IsolateHourDCDBInstanceRequest,
    cb?: (error: string, rep: IsolateHourDCDBInstanceResponse) => void
  ): Promise<IsolateHourDCDBInstanceResponse> {
    return this.request("IsolateHourDCDBInstance", req, cb)
  }

  /**
   * 本接口（UpgradeHourDCDBInstance）用于升级分布式数据库TDSQL按量计费实例。
   */
  async UpgradeHourDCDBInstance(
    req: UpgradeHourDCDBInstanceRequest,
    cb?: (error: string, rep: UpgradeHourDCDBInstanceResponse) => void
  ): Promise<UpgradeHourDCDBInstanceResponse> {
    return this.request("UpgradeHourDCDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeDBSyncMode）用于查询云数据库实例的同步模式。
   */
  async DescribeDBSyncMode(
    req: DescribeDBSyncModeRequest,
    cb?: (error: string, rep: DescribeDBSyncModeResponse) => void
  ): Promise<DescribeDBSyncModeResponse> {
    return this.request("DescribeDBSyncMode", req, cb)
  }

  /**
   * 本接口（UpgradeDCDBInstance）用于升级分布式数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
   */
  async UpgradeDCDBInstance(
    req: UpgradeDCDBInstanceRequest,
    cb?: (error: string, rep: UpgradeDCDBInstanceResponse) => void
  ): Promise<UpgradeDCDBInstanceResponse> {
    return this.request("UpgradeDCDBInstance", req, cb)
  }

  /**
   * 获取实例回档时可选的时间范围
   */
  async DescribeDCDBBinlogTime(
    req: DescribeDCDBBinlogTimeRequest,
    cb?: (error: string, rep: DescribeDCDBBinlogTimeResponse) => void
  ): Promise<DescribeDCDBBinlogTimeResponse> {
    return this.request("DescribeDCDBBinlogTime", req, cb)
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
   * 本接口（ModifyInstanceNetwork）用于修改实例所属网络。
   */
  async ModifyInstanceNetwork(
    req: ModifyInstanceNetworkRequest,
    cb?: (error: string, rep: ModifyInstanceNetworkResponse) => void
  ): Promise<ModifyInstanceNetworkResponse> {
    return this.request("ModifyInstanceNetwork", req, cb)
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
   * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
   */
  async OpenDBExtranetAccess(
    req: OpenDBExtranetAccessRequest,
    cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void
  ): Promise<OpenDBExtranetAccessResponse> {
    return this.request("OpenDBExtranetAccess", req, cb)
  }

  /**
     * 本接口(ModifyAccountPrivileges)用于修改云数据库的账户的权限信息。

**注意**
- 系统保留库："mysql"，只开放["SELECT"]权限
- 只读账号授予读写权限会报错
- 不传权限参数表示保留现有权限，如需清除，请在复杂类型Privileges字段传空数组
     */
  async ModifyAccountPrivileges(
    req: ModifyAccountPrivilegesRequest,
    cb?: (error: string, rep: ModifyAccountPrivilegesResponse) => void
  ): Promise<ModifyAccountPrivilegesResponse> {
    return this.request("ModifyAccountPrivileges", req, cb)
  }

  /**
   * 本接口(DestroyDCDBInstance)用于销毁已隔离的TDSQL包年包月实例。
   */
  async DestroyDCDBInstance(
    req: DestroyDCDBInstanceRequest,
    cb?: (error: string, rep: DestroyDCDBInstanceResponse) => void
  ): Promise<DestroyDCDBInstanceResponse> {
    return this.request("DestroyDCDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeDCDBInstanceNodeInfo）用于获取实例节点信息
   */
  async DescribeDCDBInstanceNodeInfo(
    req: DescribeDCDBInstanceNodeInfoRequest,
    cb?: (error: string, rep: DescribeDCDBInstanceNodeInfoResponse) => void
  ): Promise<DescribeDCDBInstanceNodeInfoResponse> {
    return this.request("DescribeDCDBInstanceNodeInfo", req, cb)
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
   * 本接口(DescribeLogFileRetentionPeriod)用于查看数据库备份日志的备份天数的设置情况。
   */
  async DescribeLogFileRetentionPeriod(
    req: DescribeLogFileRetentionPeriodRequest,
    cb?: (error: string, rep: DescribeLogFileRetentionPeriodResponse) => void
  ): Promise<DescribeLogFileRetentionPeriodResponse> {
    return this.request("DescribeLogFileRetentionPeriod", req, cb)
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
   * 本接口(DescribeBackupFiles)用于查看备份文件列表。
   */
  async DescribeBackupFiles(
    req: DescribeBackupFilesRequest,
    cb?: (error: string, rep: DescribeBackupFilesResponse) => void
  ): Promise<DescribeBackupFilesResponse> {
    return this.request("DescribeBackupFiles", req, cb)
  }

  /**
   * 本接口(ModifyDBEncryptAttributes)用于修改实例数据加密。
   */
  async ModifyDBEncryptAttributes(
    req: ModifyDBEncryptAttributesRequest,
    cb?: (error: string, rep: ModifyDBEncryptAttributesResponse) => void
  ): Promise<ModifyDBEncryptAttributesResponse> {
    return this.request("ModifyDBEncryptAttributes", req, cb)
  }

  /**
   * 本接口（DestroyHourDCDBInstance）用于TDSQL销毁按量计费实例。
   */
  async DestroyHourDCDBInstance(
    req: DestroyHourDCDBInstanceRequest,
    cb?: (error: string, rep: DestroyHourDCDBInstanceResponse) => void
  ): Promise<DestroyHourDCDBInstanceResponse> {
    return this.request("DestroyHourDCDBInstance", req, cb)
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
   * 相当于在所有分片的mysqld中执行flush logs，完成切分的binlog将展示在各个分片控制台binlog列表里。
   */
  async FlushBinlog(
    req: FlushBinlogRequest,
    cb?: (error: string, rep: FlushBinlogResponse) => void
  ): Promise<FlushBinlogResponse> {
    return this.request("FlushBinlog", req, cb)
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
   * 取消 Online DDL 任务
   */
  async CancelOnlineDDLJob(
    req: CancelOnlineDDLJobRequest,
    cb?: (error: string, rep: CancelOnlineDDLJobResponse) => void
  ): Promise<CancelOnlineDDLJobResponse> {
    return this.request("CancelOnlineDDLJob", req, cb)
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
   * 本接口（DescribeDBTmpInstances）用于获取实例回档生成的临时实例
   */
  async DescribeDBTmpInstances(
    req: DescribeDBTmpInstancesRequest,
    cb?: (error: string, rep: DescribeDBTmpInstancesResponse) => void
  ): Promise<DescribeDBTmpInstancesResponse> {
    return this.request("DescribeDBTmpInstances", req, cb)
  }

  /**
   * 本接口（DescribeDCDBShards）用于查询云数据库实例的分片信息。
   */
  async DescribeDCDBShards(
    req: DescribeDCDBShardsRequest,
    cb?: (error: string, rep: DescribeDCDBShardsResponse) => void
  ): Promise<DescribeDCDBShardsResponse> {
    return this.request("DescribeDCDBShards", req, cb)
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
   * 本接口（CreateDCDBInstance）用于创建包年包月的TDSQL实例，可通过传入实例规格、数据库版本号、购买时长等信息创建云数据库实例。
   */
  async CreateDCDBInstance(
    req: CreateDCDBInstanceRequest,
    cb?: (error: string, rep: CreateDCDBInstanceResponse) => void
  ): Promise<CreateDCDBInstanceResponse> {
    return this.request("CreateDCDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeProjects）用于查询项目列表
   */
  async DescribeProjects(
    req?: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
  }

  /**
   * 本接口(IsolateDCDBInstance)用于隔离分布式数据库TDSQL实例（包年包月），隔离后不能通过IP和端口访问数据库。隔离的实例可在回收站中进行开机。若为欠费隔离，请尽快进行充值。
   */
  async IsolateDCDBInstance(
    req: IsolateDCDBInstanceRequest,
    cb?: (error: string, rep: IsolateDCDBInstanceResponse) => void
  ): Promise<IsolateDCDBInstanceResponse> {
    return this.request("IsolateDCDBInstance", req, cb)
  }

  /**
   * 本接口（ModifyInstanceVport）用于修改实例VPORT
   */
  async ModifyInstanceVport(
    req: ModifyInstanceVportRequest,
    cb?: (error: string, rep: ModifyInstanceVportResponse) => void
  ): Promise<ModifyInstanceVportResponse> {
    return this.request("ModifyInstanceVport", req, cb)
  }

  /**
   * 本接口（TerminateDedicatedDBInstance）用于销毁已隔离的独享分布式数据库实例。
   */
  async TerminateDedicatedDBInstance(
    req: TerminateDedicatedDBInstanceRequest,
    cb?: (error: string, rep: TerminateDedicatedDBInstanceResponse) => void
  ): Promise<TerminateDedicatedDBInstanceResponse> {
    return this.request("TerminateDedicatedDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeDBSecurityGroups）用于查询实例安全组信息
   */
  async DescribeDBSecurityGroups(
    req: DescribeDBSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void
  ): Promise<DescribeDBSecurityGroupsResponse> {
    return this.request("DescribeDBSecurityGroups", req, cb)
  }

  /**
   * 本接口（IsolateDedicatedDBInstance）用于隔离独享云数据库实例。
   */
  async IsolateDedicatedDBInstance(
    req: IsolateDedicatedDBInstanceRequest,
    cb?: (error: string, rep: IsolateDedicatedDBInstanceResponse) => void
  ): Promise<IsolateDedicatedDBInstanceResponse> {
    return this.request("IsolateDedicatedDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeDCDBUpgradePrice）用于查询变配分布式数据库实例价格。
   */
  async DescribeDCDBUpgradePrice(
    req: DescribeDCDBUpgradePriceRequest,
    cb?: (error: string, rep: DescribeDCDBUpgradePriceResponse) => void
  ): Promise<DescribeDCDBUpgradePriceResponse> {
    return this.request("DescribeDCDBUpgradePrice", req, cb)
  }

  /**
   * 本接口（CancelDcnJob）用于取消DCN同步
   */
  async CancelDcnJob(
    req: CancelDcnJobRequest,
    cb?: (error: string, rep: CancelDcnJobResponse) => void
  ): Promise<CancelDcnJobResponse> {
    return this.request("CancelDcnJob", req, cb)
  }

  /**
   * 本接口(DescribeBackupConfigs)用于查询数据库备份配置信息。
   */
  async DescribeBackupConfigs(
    req: DescribeBackupConfigsRequest,
    cb?: (error: string, rep: DescribeBackupConfigsResponse) => void
  ): Promise<DescribeBackupConfigsResponse> {
    return this.request("DescribeBackupConfigs", req, cb)
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
   * 创建在线DDL任务
   */
  async CreateOnlineDDLJob(
    req: CreateOnlineDDLJobRequest,
    cb?: (error: string, rep: CreateOnlineDDLJobResponse) => void
  ): Promise<CreateOnlineDDLJobResponse> {
    return this.request("CreateOnlineDDLJob", req, cb)
  }

  /**
     * 本接口(ModifyBackupConfigs)用于修改数据库备份配置信息。

1. 修改数据库超期备份配置，目前按年、按月、按日只支持一种，存在互斥关系，如当前策略按年备份，如果传入按月备份策略将会覆盖当前的按年备份策略，务必注意。
     */
  async ModifyBackupConfigs(
    req: ModifyBackupConfigsRequest,
    cb?: (error: string, rep: ModifyBackupConfigsResponse) => void
  ): Promise<ModifyBackupConfigsResponse> {
    return this.request("ModifyBackupConfigs", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceName）用于修改实例名字
   */
  async ModifyDBInstanceName(
    req: ModifyDBInstanceNameRequest,
    cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void
  ): Promise<ModifyDBInstanceNameResponse> {
    return this.request("ModifyDBInstanceName", req, cb)
  }

  /**
   * 创建TDSQL按量计费实例
   */
  async CreateHourDCDBInstance(
    req: CreateHourDCDBInstanceRequest,
    cb?: (error: string, rep: CreateHourDCDBInstanceResponse) => void
  ): Promise<CreateHourDCDBInstanceResponse> {
    return this.request("CreateHourDCDBInstance", req, cb)
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
   * 本接口(DescribeDBEncryptAttributes)用于查询实例数据加密状态。
   */
  async DescribeDBEncryptAttributes(
    req: DescribeDBEncryptAttributesRequest,
    cb?: (error: string, rep: DescribeDBEncryptAttributesResponse) => void
  ): Promise<DescribeDBEncryptAttributesResponse> {
    return this.request("DescribeDBEncryptAttributes", req, cb)
  }

  /**
   * 本接口（DescribeDCDBRenewalPrice）用于在续费分布式数据库实例时，查询续费的价格。
   */
  async DescribeDCDBRenewalPrice(
    req: DescribeDCDBRenewalPriceRequest,
    cb?: (error: string, rep: DescribeDCDBRenewalPriceResponse) => void
  ): Promise<DescribeDCDBRenewalPriceResponse> {
    return this.request("DescribeDCDBRenewalPrice", req, cb)
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
}

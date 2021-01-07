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
  UpgradeDCDBInstanceResponse,
  DescribeAccountPrivilegesResponse,
  DescribeDatabasesRequest,
  ParamDesc,
  DescribeDBParametersRequest,
  DescribeAccountsRequest,
  SpecConfig,
  DescribeDCDBPriceResponse,
  AssociateSecurityGroupsRequest,
  FlushBinlogResponse,
  DescribeDBSecurityGroupsResponse,
  DescribeDBSyncModeResponse,
  DescribeProjectSecurityGroupsRequest,
  DescribeDCDBUpgradePriceResponse,
  CreateAccountRequest,
  DescribeDBParametersResponse,
  CloneAccountResponse,
  ModifyAccountDescriptionResponse,
  CreateDCDBInstanceResponse,
  ParamConstraint,
  ModifyDBInstancesProjectResponse,
  DatabaseView,
  DescribeDBLogFilesRequest,
  DescribeOrdersResponse,
  ModifyDBInstanceSecurityGroupsResponse,
  ResetAccountPasswordRequest,
  CopyAccountPrivilegesResponse,
  CloneAccountRequest,
  DescribeDCDBRenewalPriceRequest,
  ParamModifyResult,
  DescribeDBSecurityGroupsRequest,
  DescribeDCDBPriceRequest,
  DescribeProjectSecurityGroupsResponse,
  DatabaseFunction,
  DescribeSqlLogsRequest,
  ResetAccountPasswordResponse,
  DescribeDCDBSaleInfoRequest,
  ExpandShardConfig,
  RenewDCDBInstanceRequest,
  ShardZoneChooseInfo,
  DatabaseTable,
  Deal,
  GrantAccountPrivilegesRequest,
  DescribeShardSpecRequest,
  DescribeDCDBShardsRequest,
  DBParamValue,
  SpecConfigInfo,
  ModifyDBParametersRequest,
  DCDBInstanceInfo,
  ModifyDBInstanceSecurityGroupsRequest,
  ZonesInfo,
  ModifyDBParametersResponse,
  DCDBShardInfo,
  CopyAccountPrivilegesRequest,
  SecurityGroup,
  DescribeDatabaseTableRequest,
  OpenDBExtranetAccessResponse,
  DescribeDatabaseObjectsResponse,
  TableColumn,
  SecurityGroupBound,
  SplitShardConfig,
  RenewDCDBInstanceResponse,
  DescribeShardSpecResponse,
  AssociateSecurityGroupsResponse,
  DescribeDCDBRenewalPriceResponse,
  DescribeDCDBShardsResponse,
  Database,
  GrantAccountPrivilegesResponse,
  ShardInfo,
  OpenDBExtranetAccessRequest,
  DescribeDCDBSaleInfoResponse,
  DescribeDBSyncModeRequest,
  CloseDBExtranetAccessResponse,
  ModifyAccountDescriptionRequest,
  DescribeProjectsRequest,
  DescribeDatabasesResponse,
  DescribeOrdersRequest,
  DescribeDBLogFilesResponse,
  CloseDBExtranetAccessRequest,
  InitDCDBInstancesRequest,
  ResourceTag,
  DescribeSqlLogsResponse,
  DeleteAccountRequest,
  DescribeDCDBInstancesResponse,
  CreateDCDBInstanceRequest,
  DescribeDCDBUpgradePriceRequest,
  UserTaskInfo,
  DatabaseProcedure,
  AddShardConfig,
  ModifyDBSyncModeRequest,
  DescribeProjectsResponse,
  CreateAccountResponse,
  RegionInfo,
  DescribeDatabaseObjectsRequest,
  UpgradeDCDBInstanceRequest,
  ConstraintRange,
  LogFileInfo,
  DisassociateSecurityGroupsRequest,
  DBAccount,
  DescribeDatabaseTableResponse,
  DescribeAccountPrivilegesRequest,
  SqlLogItem,
  DescribeAccountsResponse,
  DescribeDCDBInstancesRequest,
  Project,
  ModifyDBInstancesProjectRequest,
  FlushBinlogRequest,
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
   * 本接口（DescribeOrders）用于查询分布式数据库订单信息。传入订单ID来查询订单关联的分布式数据库实例，和对应的任务流程ID。
   */
  async DescribeOrders(
    req: DescribeOrdersRequest,
    cb?: (error: string, rep: DescribeOrdersResponse) => void
  ): Promise<DescribeOrdersResponse> {
    return this.request("DescribeOrders", req, cb)
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
   * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
   */
  async OpenDBExtranetAccess(
    req: OpenDBExtranetAccessRequest,
    cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void
  ): Promise<OpenDBExtranetAccessResponse> {
    return this.request("OpenDBExtranetAccess", req, cb)
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
   * 本接口（DescribeSqlLogs）用于获取实例SQL日志。
   */
  async DescribeSqlLogs(
    req: DescribeSqlLogsRequest,
    cb?: (error: string, rep: DescribeSqlLogsResponse) => void
  ): Promise<DescribeSqlLogsResponse> {
    return this.request("DescribeSqlLogs", req, cb)
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
   * 本接口（DescribeDBSyncMode）用于查询云数据库实例的同步模式。
   */
  async DescribeDBSyncMode(
    req: DescribeDBSyncModeRequest,
    cb?: (error: string, rep: DescribeDBSyncModeResponse) => void
  ): Promise<DescribeDBSyncModeResponse> {
    return this.request("DescribeDBSyncMode", req, cb)
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
   * 本接口（ModifyDBInstanceSecurityGroups）用于修改云数据库安全组
   */
  async ModifyDBInstanceSecurityGroups(
    req: ModifyDBInstanceSecurityGroupsRequest,
    cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void
  ): Promise<ModifyDBInstanceSecurityGroupsResponse> {
    return this.request("ModifyDBInstanceSecurityGroups", req, cb)
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
   * 本接口（ModifyDBSyncMode）用于修改云数据库实例的同步模式。
   */
  async ModifyDBSyncMode(
    req: ModifyDBSyncModeRequest,
    cb?: (error: string, rep: ModifyDBSyncModeResponse) => void
  ): Promise<ModifyDBSyncModeResponse> {
    return this.request("ModifyDBSyncMode", req, cb)
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
   * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
   */
  async CloseDBExtranetAccess(
    req: CloseDBExtranetAccessRequest,
    cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void
  ): Promise<CloseDBExtranetAccessResponse> {
    return this.request("CloseDBExtranetAccess", req, cb)
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
   * 相当于在所有分片的mysqld中执行flush logs，完成切分的binlog将展示在各个分片控制台binlog列表里。
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
   * 本接口（DescribeDCDBShards）用于查询云数据库实例的分片信息。
   */
  async DescribeDCDBShards(
    req: DescribeDCDBShardsRequest,
    cb?: (error: string, rep: DescribeDCDBShardsResponse) => void
  ): Promise<DescribeDCDBShardsResponse> {
    return this.request("DescribeDCDBShards", req, cb)
  }

  /**
   * 本接口（CreateDCDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长等信息创建云数据库实例。
   */
  async CreateDCDBInstance(
    req: CreateDCDBInstanceRequest,
    cb?: (error: string, rep: CreateDCDBInstanceResponse) => void
  ): Promise<CreateDCDBInstanceResponse> {
    return this.request("CreateDCDBInstance", req, cb)
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
   * 本接口（DescribeDBSecurityGroups）用于查询实例安全组信息
   */
  async DescribeDBSecurityGroups(
    req: DescribeDBSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void
  ): Promise<DescribeDBSecurityGroupsResponse> {
    return this.request("DescribeDBSecurityGroups", req, cb)
  }

  /**
   * 本接口（DescribeDCDBUpgradePrice）用于查询升级分布式数据库实例价格。
   */
  async DescribeDCDBUpgradePrice(
    req: DescribeDCDBUpgradePriceRequest,
    cb?: (error: string, rep: DescribeDCDBUpgradePriceResponse) => void
  ): Promise<DescribeDCDBUpgradePriceResponse> {
    return this.request("DescribeDCDBUpgradePrice", req, cb)
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
   * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
   */
  async DisassociateSecurityGroups(
    req: DisassociateSecurityGroupsRequest,
    cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void
  ): Promise<DisassociateSecurityGroupsResponse> {
    return this.request("DisassociateSecurityGroups", req, cb)
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
}

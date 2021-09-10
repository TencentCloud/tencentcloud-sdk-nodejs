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
  SetAutoRenewFlagRequest,
  DescribeDatabasesRequest,
  DescribeDBXlogsRequest,
  DescribeAccountsRequest,
  DeleteReadOnlyGroupResponse,
  CreateInstancesRequest,
  SpecItemInfo,
  ModifyDBInstanceReadOnlyGroupResponse,
  OpenServerlessDBExtranetAccessRequest,
  RenewInstanceResponse,
  DeleteServerlessDBInstanceResponse,
  ModifyReadOnlyGroupConfigRequest,
  AddDBInstanceToReadOnlyGroupRequest,
  DescribeProductConfigRequest,
  InitDBInstancesResponse,
  RenewInstanceRequest,
  RebalanceReadOnlyGroupRequest,
  DescribeRegionsResponse,
  DBInstanceNetInfo,
  ZoneInfo,
  InquiryPriceCreateDBInstancesRequest,
  NormalQueryItem,
  Tag,
  DescribeDBInstanceAttributeRequest,
  ModifyDBInstancesProjectResponse,
  ServerlessDBAccount,
  ModifyDBInstanceReadOnlyGroupRequest,
  AddDBInstanceToReadOnlyGroupResponse,
  CreateReadOnlyDBInstanceResponse,
  DurationAnalysis,
  DescribeOrdersResponse,
  InquiryPriceCreateDBInstancesResponse,
  ModifySwitchTimePeriodResponse,
  DisIsolateDBInstancesRequest,
  ServerlessDBInstanceNetInfo,
  DescribeDBInstancesRequest,
  ModifyAccountRemarkResponse,
  UpgradeDBInstanceRequest,
  DescribeZonesRequest,
  DescribeReadOnlyGroupsResponse,
  SetAutoRenewFlagResponse,
  SpecInfo,
  ResetAccountPasswordResponse,
  CloseServerlessDBExtranetAccessRequest,
  ReadOnlyGroup,
  PgDeal,
  DescribeDBErrlogsRequest,
  DestroyDBInstanceRequest,
  CreateInstancesResponse,
  AnalysisItems,
  Xlog,
  DescribeServerlessDBInstancesRequest,
  DescribeDBBackupsResponse,
  DescribeRegionsRequest,
  DescribeSlowQueryListResponse,
  ServerlessDBInstance,
  CreateReadOnlyGroupRequest,
  CloseServerlessDBExtranetAccessResponse,
  RestartDBInstanceRequest,
  Detail,
  IsolateDBInstancesResponse,
  OpenDBExtranetAccessResponse,
  InquiryPriceUpgradeDBInstanceRequest,
  RebalanceReadOnlyGroupResponse,
  ModifyDBInstanceNameRequest,
  InquiryPriceRenewDBInstanceResponse,
  DescribeSlowQueryAnalysisRequest,
  ErrLogDetail,
  DescribeServerlessDBInstancesResponse,
  IsolateDBInstancesRequest,
  InitDBInstancesRequest,
  DBInstance,
  DescribeProductConfigResponse,
  DeleteReadOnlyGroupRequest,
  DescribeDBBackupsRequest,
  Filter,
  DisIsolateDBInstancesResponse,
  OpenDBExtranetAccessRequest,
  SlowlogDetail,
  RemoveDBInstanceFromReadOnlyGroupRequest,
  ModifyDBInstanceNameResponse,
  CloseDBExtranetAccessResponse,
  CreateReadOnlyDBInstanceRequest,
  DescribeZonesResponse,
  CreateServerlessDBInstanceResponse,
  DescribeDatabasesResponse,
  DescribeOrdersRequest,
  ModifyAccountRemarkRequest,
  CloseDBExtranetAccessRequest,
  CreateServerlessDBInstanceRequest,
  InquiryPriceRenewDBInstanceRequest,
  CreateReadOnlyGroupResponse,
  DeleteServerlessDBInstanceRequest,
  ModifyReadOnlyGroupConfigResponse,
  AccountInfo,
  DBBackup,
  DescribeDBErrlogsResponse,
  InquiryPriceUpgradeDBInstanceResponse,
  ModifySwitchTimePeriodRequest,
  DescribeSlowQueryListRequest,
  RegionInfo,
  RestartDBInstanceResponse,
  DescribeDBInstancesResponse,
  RemoveDBInstanceFromReadOnlyGroupResponse,
  ResetAccountPasswordRequest,
  DescribeSlowQueryAnalysisResponse,
  RawSlowQuery,
  DescribeReadOnlyGroupsRequest,
  DescribeAccountsResponse,
  UpgradeDBInstanceResponse,
  ModifyDBInstancesProjectRequest,
  DescribeDBSlowlogsRequest,
  DestroyDBInstanceResponse,
  DescribeDBInstanceAttributeResponse,
  OpenServerlessDBExtranetAccessResponse,
  DescribeDBXlogsResponse,
  DescribeDBSlowlogsResponse,
  CreateDBInstancesResponse,
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
   * 本接口（ModifyDBInstancesProject）用于将实例转至其他项目。
   */
  async ModifyDBInstancesProject(
    req: ModifyDBInstancesProjectRequest,
    cb?: (error: string, rep: ModifyDBInstancesProjectResponse) => void
  ): Promise<ModifyDBInstancesProjectResponse> {
    return this.request("ModifyDBInstancesProject", req, cb)
  }

  /**
   * 本接口（DescribeOrders）用于获取订单信息。
   */
  async DescribeOrders(
    req: DescribeOrdersRequest,
    cb?: (error: string, rep: DescribeOrdersResponse) => void
  ): Promise<DescribeOrdersResponse> {
    return this.request("DescribeOrders", req, cb)
  }

  /**
   * 本接口 (DestroyDBInstance) 用于彻底下线指定DBInstanceId对应的实例，下线后实例数据将彻底删除，无法找回，只能下线隔离中的实例。
   */
  async DestroyDBInstance(
    req: DestroyDBInstanceRequest,
    cb?: (error: string, rep: DestroyDBInstanceResponse) => void
  ): Promise<DestroyDBInstanceResponse> {
    return this.request("DestroyDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeDBBackups）用于查询实例备份列表。
   */
  async DescribeDBBackups(
    req: DescribeDBBackupsRequest,
    cb?: (error: string, rep: DescribeDBBackupsResponse) => void
  ): Promise<DescribeDBBackupsResponse> {
    return this.request("DescribeDBBackups", req, cb)
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
   * 本接口（DescribeDBErrlogs）用于获取错误日志。
   */
  async DescribeDBErrlogs(
    req: DescribeDBErrlogsRequest,
    cb?: (error: string, rep: DescribeDBErrlogsResponse) => void
  ): Promise<DescribeDBErrlogsResponse> {
    return this.request("DescribeDBErrlogs", req, cb)
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
   * 当升级完成后，对处于等待切换状态下的实例，强制实例立即切换。
   */
  async ModifySwitchTimePeriod(
    req: ModifySwitchTimePeriodRequest,
    cb?: (error: string, rep: ModifySwitchTimePeriodResponse) => void
  ): Promise<ModifySwitchTimePeriodResponse> {
    return this.request("ModifySwitchTimePeriod", req, cb)
  }

  /**
   * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
   */
  async InquiryPriceCreateDBInstances(
    req: InquiryPriceCreateDBInstancesRequest,
    cb?: (error: string, rep: InquiryPriceCreateDBInstancesResponse) => void
  ): Promise<InquiryPriceCreateDBInstancesResponse> {
    return this.request("InquiryPriceCreateDBInstances", req, cb)
  }

  /**
   * 本接口（OpenDBExtranetAccess）用于开通外网。
   */
  async OpenDBExtranetAccess(
    req: OpenDBExtranetAccessRequest,
    cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void
  ): Promise<OpenDBExtranetAccessResponse> {
    return this.request("OpenDBExtranetAccess", req, cb)
  }

  /**
   * 关闭serverlessDB实例外网
   */
  async CloseServerlessDBExtranetAccess(
    req: CloseServerlessDBExtranetAccessRequest,
    cb?: (error: string, rep: CloseServerlessDBExtranetAccessResponse) => void
  ): Promise<CloseServerlessDBExtranetAccessResponse> {
    return this.request("CloseServerlessDBExtranetAccess", req, cb)
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
   * 本接口（ModifyAccountRemark）用于修改帐号备注。
   */
  async ModifyAccountRemark(
    req: ModifyAccountRemarkRequest,
    cb?: (error: string, rep: ModifyAccountRemarkResponse) => void
  ): Promise<ModifyAccountRemarkResponse> {
    return this.request("ModifyAccountRemark", req, cb)
  }

  /**
   * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。
   */
  async DescribeDBXlogs(
    req: DescribeDBXlogsRequest,
    cb?: (error: string, rep: DescribeDBXlogsResponse) => void
  ): Promise<DescribeDBXlogsResponse> {
    return this.request("DescribeDBXlogs", req, cb)
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
   * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
   */
  async DescribeDBInstanceAttribute(
    req: DescribeDBInstanceAttributeRequest,
    cb?: (error: string, rep: DescribeDBInstanceAttributeResponse) => void
  ): Promise<DescribeDBInstanceAttributeResponse> {
    return this.request("DescribeDBInstanceAttribute", req, cb)
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
   * 本接口（UpgradeDBInstance）用于升级实例配置。
   */
  async UpgradeDBInstance(
    req: UpgradeDBInstanceRequest,
    cb?: (error: string, rep: UpgradeDBInstanceResponse) => void
  ): Promise<UpgradeDBInstanceResponse> {
    return this.request("UpgradeDBInstance", req, cb)
  }

  /**
   * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例,仅发货实例不会进行初始化。
   */
  async CreateDBInstances(
    req: CreateDBInstancesRequest,
    cb?: (error: string, rep: CreateDBInstancesResponse) => void
  ): Promise<CreateDBInstancesResponse> {
    return this.request("CreateDBInstances", req, cb)
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
   * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
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
   * 本接口（RestartDBInstance）用于重启实例。
   */
  async RestartDBInstance(
    req: RestartDBInstanceRequest,
    cb?: (error: string, rep: RestartDBInstanceResponse) => void
  ): Promise<RestartDBInstanceResponse> {
    return this.request("RestartDBInstance", req, cb)
  }

  /**
   * 本接口（IsolateDBInstances）用于隔离实例
   */
  async IsolateDBInstances(
    req: IsolateDBInstancesRequest,
    cb?: (error: string, rep: IsolateDBInstancesResponse) => void
  ): Promise<IsolateDBInstancesResponse> {
    return this.request("IsolateDBInstances", req, cb)
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
   * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
   */
  async InitDBInstances(
    req: InitDBInstancesRequest,
    cb?: (error: string, rep: InitDBInstancesResponse) => void
  ): Promise<InitDBInstancesResponse> {
    return this.request("InitDBInstances", req, cb)
  }

  /**
   * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
   */
  async InquiryPriceUpgradeDBInstance(
    req: InquiryPriceUpgradeDBInstanceRequest,
    cb?: (error: string, rep: InquiryPriceUpgradeDBInstanceResponse) => void
  ): Promise<InquiryPriceUpgradeDBInstanceResponse> {
    return this.request("InquiryPriceUpgradeDBInstance", req, cb)
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
   * 本接口（CreateReadOnlyGroup）用于创建只读组
   */
  async CreateReadOnlyGroup(
    req: CreateReadOnlyGroupRequest,
    cb?: (error: string, rep: CreateReadOnlyGroupResponse) => void
  ): Promise<CreateReadOnlyGroupResponse> {
    return this.request("CreateReadOnlyGroup", req, cb)
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
   * 此接口（DescribeSlowQueryList）用于查询指定时间范围内的所有慢查询。
   */
  async DescribeSlowQueryList(
    req: DescribeSlowQueryListRequest,
    cb?: (error: string, rep: DescribeSlowQueryListResponse) => void
  ): Promise<DescribeSlowQueryListResponse> {
    return this.request("DescribeSlowQueryList", req, cb)
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
   * 本接口（CloseDBExtranetAccess）用于关闭实例外网链接。
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
   * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
   */
  async InquiryPriceRenewDBInstance(
    req: InquiryPriceRenewDBInstanceRequest,
    cb?: (error: string, rep: InquiryPriceRenewDBInstanceResponse) => void
  ): Promise<InquiryPriceRenewDBInstanceResponse> {
    return this.request("InquiryPriceRenewDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeAccounts）用于获取实例用户列表。
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
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
   * 本接口(RebalanceReadOnlyGroup)用于重新均衡 RO 组内实例的负载。注意，RO 组内 RO 实例会有一次数据库连接瞬断，请确保应用程序能重连数据库，谨慎操作。
   */
  async RebalanceReadOnlyGroup(
    req: RebalanceReadOnlyGroupRequest,
    cb?: (error: string, rep: RebalanceReadOnlyGroupResponse) => void
  ): Promise<RebalanceReadOnlyGroupResponse> {
    return this.request("RebalanceReadOnlyGroup", req, cb)
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
   * 接口（DescribeDatabases）用来拉取数据库列表
   */
  async DescribeDatabases(
    req: DescribeDatabasesRequest,
    cb?: (error: string, rep: DescribeDatabasesResponse) => void
  ): Promise<DescribeDatabasesResponse> {
    return this.request("DescribeDatabases", req, cb)
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
   * 本接口(DescribeReadOnlyGroups)用于查询用户输入指定实例的只读组
   */
  async DescribeReadOnlyGroups(
    req: DescribeReadOnlyGroupsRequest,
    cb?: (error: string, rep: DescribeReadOnlyGroupsResponse) => void
  ): Promise<DescribeReadOnlyGroupsResponse> {
    return this.request("DescribeReadOnlyGroups", req, cb)
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
   * 本接口 (CreateInstances) 用于创建一个或者多个PostgreSQL实例，通过此接口创建的实例无需进行初始化，可直接使用。
   */
  async CreateInstances(
    req: CreateInstancesRequest,
    cb?: (error: string, rep: CreateInstancesResponse) => void
  ): Promise<CreateInstancesResponse> {
    return this.request("CreateInstances", req, cb)
  }

  /**
   * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
   */
  async DescribeProductConfig(
    req: DescribeProductConfigRequest,
    cb?: (error: string, rep: DescribeProductConfigResponse) => void
  ): Promise<DescribeProductConfigResponse> {
    return this.request("DescribeProductConfig", req, cb)
  }

  /**
   * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。已于2021.09.01日正式废弃，后续此接口将不再返回任何数据，新接口为DescribeSlowQueryList，详细请查看：https://cloud.tencent.com/document/product/409/60540
   */
  async DescribeDBSlowlogs(
    req: DescribeDBSlowlogsRequest,
    cb?: (error: string, rep: DescribeDBSlowlogsResponse) => void
  ): Promise<DescribeDBSlowlogsResponse> {
    return this.request("DescribeDBSlowlogs", req, cb)
  }

  /**
   * 开通serverlessDB实例外网
   */
  async OpenServerlessDBExtranetAccess(
    req: OpenServerlessDBExtranetAccessRequest,
    cb?: (error: string, rep: OpenServerlessDBExtranetAccessResponse) => void
  ): Promise<OpenServerlessDBExtranetAccessResponse> {
    return this.request("OpenServerlessDBExtranetAccess", req, cb)
  }
}

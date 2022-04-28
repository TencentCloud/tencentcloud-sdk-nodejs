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
  CreateReadOnlyGroupNetworkAccessRequest,
  DescribeAccountsRequest,
  DeleteReadOnlyGroupResponse,
  CreateInstancesRequest,
  SpecItemInfo,
  CreateDBInstanceNetworkAccessResponse,
  DescribeAvailableRecoveryTimeResponse,
  ModifyDBInstanceReadOnlyGroupResponse,
  CloneDBInstanceRequest,
  DescribeCloneDBInstanceSpecRequest,
  BackupPlan,
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
  ModifyDBInstanceDeploymentRequest,
  DeleteReadOnlyGroupNetworkAccessRequest,
  ZoneInfo,
  InquiryPriceCreateDBInstancesRequest,
  NormalQueryItem,
  Tag,
  DescribeDBInstanceAttributeRequest,
  CloseServerlessDBExtranetAccessRequest,
  CloneDBInstanceResponse,
  ModifyDBInstanceReadOnlyGroupRequest,
  AddDBInstanceToReadOnlyGroupResponse,
  CreateReadOnlyDBInstanceResponse,
  DescribeAvailableRecoveryTimeRequest,
  DurationAnalysis,
  DescribeDBInstanceParametersRequest,
  DescribeOrdersResponse,
  OpenServerlessDBExtranetAccessResponse,
  InquiryPriceCreateDBInstancesResponse,
  CreateDBInstanceNetworkAccessRequest,
  ModifySwitchTimePeriodResponse,
  DisIsolateDBInstancesRequest,
  ServerlessDBInstanceNetInfo,
  DescribeBackupPlansResponse,
  DescribeDBInstancesRequest,
  ModifyDBInstanceSpecRequest,
  ModifyAccountRemarkResponse,
  UpgradeDBInstanceRequest,
  DescribeZonesRequest,
  SpecInfo,
  DescribeReadOnlyGroupsResponse,
  SetAutoRenewFlagResponse,
  NetworkAccess,
  ResetAccountPasswordResponse,
  ModifyDBInstancesProjectResponse,
  ReadOnlyGroup,
  PgDeal,
  DeleteReadOnlyGroupNetworkAccessResponse,
  DescribeDBErrlogsRequest,
  DestroyDBInstanceRequest,
  ServerlessDBAccount,
  ModifyDBInstanceDeploymentResponse,
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
  CreateReadOnlyGroupNetworkAccessResponse,
  DescribeParamsEventResponse,
  CloseServerlessDBExtranetAccessResponse,
  EventItem,
  RestartDBInstanceRequest,
  ParamInfo,
  Detail,
  IsolateDBInstancesResponse,
  OpenDBExtranetAccessResponse,
  InquiryPriceUpgradeDBInstanceRequest,
  RebalanceReadOnlyGroupResponse,
  ModifyDBInstanceNameRequest,
  EncryptionKey,
  InquiryPriceRenewDBInstanceResponse,
  DescribeSlowQueryAnalysisRequest,
  ErrLogDetail,
  DescribeServerlessDBInstancesResponse,
  IsolateDBInstancesRequest,
  InitDBInstancesRequest,
  DeleteDBInstanceNetworkAccessRequest,
  DBInstance,
  DescribeProductConfigResponse,
  DeleteReadOnlyGroupRequest,
  DescribeDBBackupsRequest,
  Filter,
  DisIsolateDBInstancesResponse,
  ModifyDBInstanceParametersResponse,
  OpenDBExtranetAccessRequest,
  SlowlogDetail,
  RemoveDBInstanceFromReadOnlyGroupRequest,
  DBNode,
  ModifyDBInstanceNameResponse,
  CloseDBExtranetAccessResponse,
  CreateReadOnlyDBInstanceRequest,
  DescribeCloneDBInstanceSpecResponse,
  DescribeZonesResponse,
  CreateServerlessDBInstanceResponse,
  DescribeDatabasesResponse,
  DescribeOrdersRequest,
  ModifyAccountRemarkRequest,
  CloseDBExtranetAccessRequest,
  DescribeEncryptionKeysRequest,
  ModifyBackupPlanResponse,
  CreateServerlessDBInstanceRequest,
  InquiryPriceRenewDBInstanceRequest,
  CreateReadOnlyGroupResponse,
  DeleteDBInstanceNetworkAccessResponse,
  DeleteServerlessDBInstanceRequest,
  ModifyReadOnlyGroupConfigResponse,
  AccountInfo,
  DBBackup,
  DescribeDBErrlogsResponse,
  ModifyBackupPlanRequest,
  ParamEntry,
  InquiryPriceUpgradeDBInstanceResponse,
  ModifySwitchTimePeriodRequest,
  DescribeSlowQueryListRequest,
  DescribeDBInstanceParametersResponse,
  RegionInfo,
  RestartDBInstanceResponse,
  DescribeDBInstancesResponse,
  RemoveDBInstanceFromReadOnlyGroupResponse,
  DescribeBackupPlansRequest,
  ResetAccountPasswordRequest,
  DescribeSlowQueryAnalysisResponse,
  ModifyDBInstanceParametersRequest,
  RawSlowQuery,
  DescribeReadOnlyGroupsRequest,
  DescribeAccountsResponse,
  UpgradeDBInstanceResponse,
  ModifyDBInstancesProjectRequest,
  DescribeDBSlowlogsRequest,
  DestroyDBInstanceResponse,
  DescribeDBInstanceAttributeResponse,
  ModifyDBInstanceSpecResponse,
  DescribeDBXlogsResponse,
  DescribeEncryptionKeysResponse,
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
   * 可对RO组进行网络的添加操作。
   */
  async CreateReadOnlyGroupNetworkAccess(
    req: CreateReadOnlyGroupNetworkAccessRequest,
    cb?: (error: string, rep: CreateReadOnlyGroupNetworkAccessResponse) => void
  ): Promise<CreateReadOnlyGroupNetworkAccessResponse> {
    return this.request("CreateReadOnlyGroupNetworkAccess", req, cb)
  }

  /**
   * 获取实例的密钥信息列表。
   */
  async DescribeEncryptionKeys(
    req: DescribeEncryptionKeysRequest,
    cb?: (error: string, rep: DescribeEncryptionKeysResponse) => void
  ): Promise<DescribeEncryptionKeysResponse> {
    return this.request("DescribeEncryptionKeys", req, cb)
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
   * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
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
   * 本接口（UpgradeDBInstance）用于升级实例配置。
   */
  async UpgradeDBInstance(
    req: UpgradeDBInstanceRequest,
    cb?: (error: string, rep: UpgradeDBInstanceResponse) => void
  ): Promise<UpgradeDBInstanceResponse> {
    return this.request("UpgradeDBInstance", req, cb)
  }

  /**
   * 批量修改参数
   */
  async ModifyDBInstanceParameters(
    req: ModifyDBInstanceParametersRequest,
    cb?: (error: string, rep: ModifyDBInstanceParametersResponse) => void
  ): Promise<ModifyDBInstanceParametersResponse> {
    return this.request("ModifyDBInstanceParameters", req, cb)
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
   * 本接口 (DescribeBackupPlans) 用于实例所有的备份计划查询
   */
  async DescribeBackupPlans(
    req: DescribeBackupPlansRequest,
    cb?: (error: string, rep: DescribeBackupPlansResponse) => void
  ): Promise<DescribeBackupPlansResponse> {
    return this.request("DescribeBackupPlans", req, cb)
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
   * 可对实例进行网络的删除操作。
   */
  async DeleteDBInstanceNetworkAccess(
    req: DeleteDBInstanceNetworkAccessRequest,
    cb?: (error: string, rep: DeleteDBInstanceNetworkAccessResponse) => void
  ): Promise<DeleteDBInstanceNetworkAccessResponse> {
    return this.request("DeleteDBInstanceNetworkAccess", req, cb)
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
   * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
   */
  async InquiryPriceUpgradeDBInstance(
    req: InquiryPriceUpgradeDBInstanceRequest,
    cb?: (error: string, rep: InquiryPriceUpgradeDBInstanceResponse) => void
  ): Promise<InquiryPriceUpgradeDBInstanceResponse> {
    return this.request("InquiryPriceUpgradeDBInstance", req, cb)
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
   * 获取实例可修改参数列表
   */
  async DescribeDBInstanceParameters(
    req: DescribeDBInstanceParametersRequest,
    cb?: (error: string, rep: DescribeDBInstanceParametersResponse) => void
  ): Promise<DescribeDBInstanceParametersResponse> {
    return this.request("DescribeDBInstanceParameters", req, cb)
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
   * 可对实例进行网络的添加操作。
   */
  async CreateDBInstanceNetworkAccess(
    req: CreateDBInstanceNetworkAccessRequest,
    cb?: (error: string, rep: CreateDBInstanceNetworkAccessResponse) => void
  ): Promise<CreateDBInstanceNetworkAccessResponse> {
    return this.request("CreateDBInstanceNetworkAccess", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceSpec）用于调整实例规格，包括内存、磁盘。
   */
  async ModifyDBInstanceSpec(
    req: ModifyDBInstanceSpecRequest,
    cb?: (error: string, rep: ModifyDBInstanceSpecResponse) => void
  ): Promise<ModifyDBInstanceSpecResponse> {
    return this.request("ModifyDBInstanceSpec", req, cb)
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
   * 用于克隆实例，支持指定备份集、指定时间点进行克隆。
   */
  async CloneDBInstance(
    req: CloneDBInstanceRequest,
    cb?: (error: string, rep: CloneDBInstanceResponse) => void
  ): Promise<CloneDBInstanceResponse> {
    return this.request("CloneDBInstance", req, cb)
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
   * 本接口（DescribeCloneDBInstanceSpec）用于查询克隆实例可选择的最小规格，包括SpecCode和磁盘。
   */
  async DescribeCloneDBInstanceSpec(
    req: DescribeCloneDBInstanceSpecRequest,
    cb?: (error: string, rep: DescribeCloneDBInstanceSpecResponse) => void
  ): Promise<DescribeCloneDBInstanceSpecResponse> {
    return this.request("DescribeCloneDBInstanceSpec", req, cb)
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
   * 本接口（RemoveDBInstanceFromReadOnlyGroup）用户将只读实例从只读组中移除
   */
  async RemoveDBInstanceFromReadOnlyGroup(
    req: RemoveDBInstanceFromReadOnlyGroupRequest,
    cb?: (error: string, rep: RemoveDBInstanceFromReadOnlyGroupResponse) => void
  ): Promise<RemoveDBInstanceFromReadOnlyGroupResponse> {
    return this.request("RemoveDBInstanceFromReadOnlyGroup", req, cb)
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
   * 获取参数修改事件详情
   */
  async DescribeParamsEvent(
    req: DescribeParamsEventRequest,
    cb?: (error: string, rep: DescribeParamsEventResponse) => void
  ): Promise<DescribeParamsEventResponse> {
    return this.request("DescribeParamsEvent", req, cb)
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

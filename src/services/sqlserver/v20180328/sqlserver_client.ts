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
  DescribeCrossBackupStatisticalResponse,
  InstanceRenewInfo,
  DealInfo,
  DescribeDatabasesRequest,
  CrossRegionStatus,
  StartMigrationCheckResponse,
  DescribeBackupStatisticalResponse,
  DeleteBackupMigrationRequest,
  DescribeInstanceTasksResponse,
  CreateBusinessDBInstancesResponse,
  DatabaseTupleStatus,
  DescribeDatabasesNormalRequest,
  DescribeInquiryPriceParameterResponse,
  ModifyDatabasePrivilegeRequest,
  DescribeCollationTimeZoneResponse,
  CreateBusinessIntelligenceFileResponse,
  ParamRecord,
  RollbackInstanceResponse,
  MigrateDB,
  DescribeDBCharsetsResponse,
  ModifyDBInstanceProjectResponse,
  DescribeIncrementalMigrationRequest,
  DescribeSpecSellStatusResponse,
  RestoreInstanceResponse,
  InstanceTask,
  ProductSpec,
  SSLConfig,
  DescribeFlowStatusRequest,
  ModifyAccountPrivilegeResponse,
  ModifyMigrationResponse,
  DescribeInstanceTasksRequest,
  DescribeDBInstancesRequest,
  ModifyDBInstanceRenewFlagResponse,
  SpecInfo,
  ModifyBackupNameResponse,
  CreateReadOnlyDBInstancesRequest,
  CreateBackupMigrationRequest,
  DescribeInstanceParamRecordsRequest,
  SwitchCloudInstanceHARequest,
  DescribeInstanceByOrdersResponse,
  CreateReadOnlyDBInstancesResponse,
  CreatePublishSubscribeResponse,
  DescribeInstanceParamsRequest,
  TerminateDBInstanceRequest,
  RestartDBInstanceRequest,
  ModifyDBInstanceNameRequest,
  AccountPassword,
  DeleteAccountRequest,
  DescribeDBCharsetsRequest,
  StartIncrementalMigrationResponse,
  ModifyDBInstanceNetworkResponse,
  AssociateSecurityGroupsResponse,
  ModifyDatabaseMdfResponse,
  MigrateTarget,
  DBTDEEncrypt,
  CreateMigrationRequest,
  InterInstance,
  ModifyDBNameResponse,
  CosUploadBackupFile,
  ModifyDBNameRequest,
  ModifyDBInstanceRenewFlagRequest,
  DescribeUpgradeInstanceCheckResponse,
  DescribeRestoreTimeRangeResponse,
  ModifyDatabasePrivilegeResponse,
  CreateIncrementalMigrationResponse,
  DescribeZonesResponse,
  UpgradeDBInstanceRequest,
  ModifyDBInstanceSSLResponse,
  DBPrivilege,
  DescribeReadOnlyGroupDetailsResponse,
  ResourceTag,
  InquiryPriceRenewDBInstanceRequest,
  DeleteBackupMigrationResponse,
  DescribePublishSubscribeRequest,
  BackupFile,
  DescribeRegularBackupPlanResponse,
  InquiryPriceUpgradeDBInstanceResponse,
  ModifyMigrationRequest,
  CrossBackupAddr,
  QueryMigrationCheckProcessRequest,
  RestartDBInstanceResponse,
  DescribeRollbackTimeResponse,
  DescribeProductSpecResponse,
  DBDetail,
  DescribeInstanceParamsResponse,
  DisassociateSecurityGroupsRequest,
  ModifyBackupNameRequest,
  CreateDBRequest,
  RollbackInstanceRequest,
  DrReadableInfo,
  DescribeRollbackTimeRequest,
  DescribeIncrementalMigrationResponse,
  CreateDBInstancesResponse,
  DeleteAccountResponse,
  TDEConfigAttribute,
  SummaryDetailRes,
  ModifyDReadableRequest,
  DeleteBusinessIntelligenceFileRequest,
  AssociateSecurityGroupsRequest,
  ModifyBackupStrategyResponse,
  SlaveZones,
  DescribeBackupUploadSizeRequest,
  StartInstanceXEventResponse,
  DescribeDBInstanceInterResponse,
  ModifyPublishSubscribeNameResponse,
  DeleteIncrementalMigrationRequest,
  CutXEventsResponse,
  DescribeBackupsRequest,
  RestoreInstanceRequest,
  ModifyDatabaseShrinkMDFRequest,
  DescribeInstanceTradeParameterResponse,
  RunMigrationRequest,
  SecurityGroupPolicy,
  DescribeInstanceByOrdersRequest,
  ModifyMaintenanceSpanResponse,
  InquiryPriceCreateDBInstancesRequest,
  StartIncrementalMigrationRequest,
  ModifyDBInstanceNetworkRequest,
  ModifyDBEncryptAttributesResponse,
  ModifyMaintenanceSpanRequest,
  RecycleDBInstanceRequest,
  DescribeOrdersResponse,
  ModifyCloseWanIpRequest,
  InterInstanceFlow,
  ModifyDBInstanceNoteResponse,
  Parameter,
  DescribeDBsResponse,
  DescribeDBSecurityGroupsRequest,
  ModifyAccountRemarkResponse,
  DescribeZonesRequest,
  ModifyInstanceParamRequest,
  DescribeCrossRegionZoneResponse,
  MigrateSource,
  DescribeProductConfigResponse,
  ModifyBackupMigrationResponse,
  ReadOnlyGroup,
  DescribeDBsNormalResponse,
  InquiryPriceRenewDBInstanceResponse,
  StepDetail,
  DescribeDBsRequest,
  CompleteExpansionRequest,
  ModifyDatabaseMdfRequest,
  DescribeBackupsResponse,
  StopMigrationRequest,
  TerminateDBInstanceResponse,
  ModifyDBRemarkRequest,
  DescribeAccountPrivilegeByDBResponse,
  DBPrivilegeModifyInfo,
  CheckItem,
  EventConfig,
  DescribeProjectSecurityGroupsRequest,
  RenameRestoreDatabase,
  InquiryPriceUpgradeDBInstanceRequest,
  SpecSellStatus,
  ModifyDatabaseCDCRequest,
  DescribeRestoreTaskRequest,
  DescribeInstanceTradeParameterRequest,
  ModifyDatabaseCDCResponse,
  DBInstance,
  DescribeBackupCommandResponse,
  CreateBasicDBInstancesRequest,
  DescribeDBInstancesAttributeResponse,
  Backup,
  OpenInterCommunicationRequest,
  QueryMigrationCheckProcessResponse,
  ModifyDBInstanceNameResponse,
  BalanceReadOnlyGroupResponse,
  DescribeOrdersRequest,
  CreateBackupMigrationResponse,
  DescribeMaintenanceSpanRequest,
  ModifyAccountRemarkRequest,
  DeletePublishSubscribeResponse,
  Price,
  CreateAccountResponse,
  RenewPostpaidDBInstanceResponse,
  CloseInterCommunicationResponse,
  DescribeDBInstancesResponse,
  DescribeSlowlogsResponse,
  DescribeUpgradeInstanceCheckRequest,
  DescribeAccountPrivilegeByDBRequest,
  ModifyReadOnlyGroupDetailsRequest,
  SlowLog,
  DescribeInquiryPriceParameterRequest,
  DescribeUploadBackupInfoRequest,
  DescribeAccountsResponse,
  DeleteDBInstanceResponse,
  DescribeDBInstancesAttributeRequest,
  CreateCloudDBInstancesRequest,
  ModifyInstanceEncryptAttributesRequest,
  DisassociateSecurityGroupsResponse,
  DescribeHASwitchLogResponse,
  ModifyBackupMigrationRequest,
  CloneDBResponse,
  CreateBasicDBInstancesResponse,
  DataBasePrivilegeModifyInfo,
  DescribeMaintenanceSpanResponse,
  DatabaseTuple,
  CreateCloudDBInstancesResponse,
  DeletePublishSubscribeRequest,
  StartBackupMigrationResponse,
  ModifyOpenWanIpResponse,
  RunMigrationResponse,
  DescribeProductConfigRequest,
  CreateAccountRequest,
  DescribeReadOnlyGroupByReadOnlyInstanceResponse,
  ParameterDetail,
  DescribeBusinessIntelligenceFileResponse,
  ZoneInfo,
  DescribeProductSpecRequest,
  CompleteMigrationResponse,
  DescribeDBRestoreTimeRequest,
  MigrateTask,
  InquiryPriceCreateDBInstancesResponse,
  CompleteMigrationRequest,
  RemoveBackupsRequest,
  CreateCloudReadOnlyDBInstancesRequest,
  ModifyInstanceEncryptAttributesResponse,
  DescribeBackupFilesResponse,
  RenewDBInstanceRequest,
  DeleteDBRequest,
  DescribeMigrationDatabasesResponse,
  CompleteExpansionResponse,
  ModifyDatabaseCTRequest,
  ModifyAccountPrivilegeRequest,
  DescribeXEventsResponse,
  DeleteIncrementalMigrationResponse,
  DescribeFlowStatusResponse,
  CutXEventsRequest,
  SwitchCloudInstanceHAResponse,
  DescribeUploadIncrementalInfoResponse,
  DeleteRestoreTaskResponse,
  DescribeBackupFilesRequest,
  ModifyPublishSubscribeRequest,
  DescribeCrossRegionsResponse,
  ReadOnlyInstanceWeightPair,
  DescribeBusinessIntelligenceFileRequest,
  Events,
  RecycleReadOnlyGroupRequest,
  AccountDetail,
  DescribeDBInstanceInterRequest,
  ModifyDatabaseCTResponse,
  SwitchLog,
  AccountRemark,
  AccountPrivilegeModifyInfo,
  AccountCreateInfo,
  StartInstanceXEventRequest,
  DescribeDatabasesResponse,
  DescribeDBRestoreTimeResponse,
  DescribeSpecSellStatusRequest,
  DeleteMigrationResponse,
  DescribeReadOnlyGroupListRequest,
  CreateBackupRequest,
  DescribeDBsNormalRequest,
  ModifyDBInstanceSSLRequest,
  ModifyPublishSubscribeNameRequest,
  MigrationAction,
  DescribeCrossRegionZoneRequest,
  ModifyReadOnlyGroupDetailsResponse,
  DescribeBackupStatisticalRequest,
  ModifyDBInstanceProjectRequest,
  MigrationStep,
  RenewPostpaidDBInstanceRequest,
  DescribeMigrationDetailRequest,
  SelectAllDB,
  DescribeReadOnlyGroupDetailsRequest,
  CreateDBInstancesRequest,
  ModifyCrossBackupStrategyRequest,
  DescribeReadOnlyGroupAutoWeightResponse,
  DrZoneInfo,
  ModifyBackupStrategyRequest,
  CreatePublishSubscribeRequest,
  CreateBusinessIntelligenceFileRequest,
  CreateMigrationResponse,
  DescribeCollationTimeZoneRequest,
  ModifyDBInstanceNoteRequest,
  DeleteDBResponse,
  ModifyIncrementalMigrationRequest,
  DescribeDBSecurityGroupsResponse,
  CreateIncrementalMigrationRequest,
  FileAction,
  DescribeRegularBackupPlanRequest,
  ModifyDBEncryptAttributesRequest,
  DescribeDatabasesNormalResponse,
  DBRenameRes,
  DBRemark,
  CloseInterCommunicationRequest,
  DescribeReadOnlyGroupListResponse,
  DescribeRegionsResponse,
  DescribeBackupSummaryResponse,
  DescribeDBPrivilegeByAccountResponse,
  DeleteBusinessIntelligenceFileResponse,
  DescribeBackupMonitorResponse,
  DescribeXEventsRequest,
  Migration,
  BusinessIntelligenceFile,
  ZoneStatus,
  PublishSubscribe,
  DescribeRestoreTaskResponse,
  DescribeCrossRegionsRequest,
  OpenInterCommunicationResponse,
  DescribeDatabaseNamesRequest,
  DBCreateInfo,
  ModifyDatabaseShrinkMDFResponse,
  DescribeDatabaseNamesResponse,
  RecycleReadOnlyGroupResponse,
  DescribeHASwitchLogRequest,
  SlowlogInfo,
  DescribeMigrationsResponse,
  DescribeProjectSecurityGroupsResponse,
  ResetAccountPasswordResponse,
  MigrationDetail,
  ModifyDataBaseTuple,
  DescribeMigrationsRequest,
  DealInstance,
  DescribeBackupUploadSizeResponse,
  DescribeUploadIncrementalInfoRequest,
  DescribeAccountsRequest,
  DescribeBackupByFlowIdResponse,
  DescribeRegionsRequest,
  AccountPrivilege,
  ModifyCrossBackupStrategyResponse,
  DescribeCrossBackupStatisticalRequest,
  DeleteMigrationRequest,
  ModifyDBInstanceSecurityGroupsRequest,
  DescribeBackupMonitorRequest,
  RemoveBackupsResponse,
  ModifyCloseWanIpResponse,
  ModifyDBInstanceSecurityGroupsResponse,
  DescribeDBPrivilegeByAccountRequest,
  ReadOnlyInstance,
  MigrateDetail,
  DescribeBackupMigrationRequest,
  SecurityGroup,
  InstanceDBDetail,
  BalanceReadOnlyGroupRequest,
  ModifyInstanceParamResponse,
  DescribeRestoreTimeRangeRequest,
  DbRollbackTimeInfo,
  CreateCloudReadOnlyDBInstancesResponse,
  DbNormalDetail,
  CreateBackupResponse,
  DescribeBackupMigrationResponse,
  RestoreTask,
  DescribeUploadBackupInfoResponse,
  OldVip,
  StartMigrationCheckRequest,
  DescribeBackupCommandRequest,
  CrossSummaryDetailRes,
  DescribeInstanceParamRecordsResponse,
  DescribeBackupSummaryRequest,
  RenewDBInstanceResponse,
  DescribeReadOnlyGroupAutoWeightRequest,
  RecycleDBInstanceResponse,
  DescribeReadOnlyGroupByReadOnlyInstanceRequest,
  DescribeBackupByFlowIdRequest,
  StartBackupMigrationRequest,
  ModifyIncrementalMigrationResponse,
  DescribeMigrationDatabasesRequest,
  CloneDBRequest,
  DescribeMigrationDetailResponse,
  DeleteDBInstanceRequest,
  RegionInfo,
  CreateDBResponse,
  CreateBusinessDBInstancesRequest,
  ResetAccountPasswordRequest,
  DescribeSlowlogsRequest,
  ModifyDReadableResponse,
  StopMigrationResponse,
  UpgradeDBInstanceResponse,
  DescribePublishSubscribeResponse,
  ModifyDBRemarkResponse,
  ModifyOpenWanIpRequest,
  ModifyPublishSubscribeResponse,
  DeleteRestoreTaskRequest,
} from "./sqlserver_models"

/**
 * sqlserver client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("sqlserver.tencentcloudapi.com", "2018-03-28", clientConfig)
  }

  /**
   * 本接口（ModifyAccountPrivilege）用于修改实例账户权限。
   */
  async ModifyAccountPrivilege(
    req: ModifyAccountPrivilegeRequest,
    cb?: (error: string, rep: ModifyAccountPrivilegeResponse) => void
  ): Promise<ModifyAccountPrivilegeResponse> {
    return this.request("ModifyAccountPrivilege", req, cb)
  }

  /**
   * 本接口（RecycleReadOnlyGroup）立即回收只读组的资源，只读组占用的vip等资源将立即释放且不可找回。
   */
  async RecycleReadOnlyGroup(
    req: RecycleReadOnlyGroupRequest,
    cb?: (error: string, rep: RecycleReadOnlyGroupResponse) => void
  ): Promise<RecycleReadOnlyGroupResponse> {
    return this.request("RecycleReadOnlyGroup", req, cb)
  }

  /**
   * 本接口(ModifyBackupName)用于修改备份任务名称。
   */
  async ModifyBackupName(
    req: ModifyBackupNameRequest,
    cb?: (error: string, rep: ModifyBackupNameResponse) => void
  ): Promise<ModifyBackupNameResponse> {
    return this.request("ModifyBackupName", req, cb)
  }

  /**
   * 本接口（DescribeSpecSellStatus）用于查询售卖规格状态信息，其中包括售卖状态，参考价格等(实际价格以询价接口为准)。
   */
  async DescribeSpecSellStatus(
    req: DescribeSpecSellStatusRequest,
    cb?: (error: string, rep: DescribeSpecSellStatusResponse) => void
  ): Promise<DescribeSpecSellStatusResponse> {
    return this.request("DescribeSpecSellStatus", req, cb)
  }

  /**
   * 本接口（StartIncrementalMigration）用于启动增量备份导入任务。
   */
  async StartIncrementalMigration(
    req: StartIncrementalMigrationRequest,
    cb?: (error: string, rep: StartIncrementalMigrationResponse) => void
  ): Promise<StartIncrementalMigrationResponse> {
    return this.request("StartIncrementalMigration", req, cb)
  }

  /**
   * 本接口（QueryMigrationCheckProcess）的作用是查询迁移检查任务的进度，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
   */
  async QueryMigrationCheckProcess(
    req: QueryMigrationCheckProcessRequest,
    cb?: (error: string, rep: QueryMigrationCheckProcessResponse) => void
  ): Promise<QueryMigrationCheckProcessResponse> {
    return this.request("QueryMigrationCheckProcess", req, cb)
  }

  /**
   * 本接口（ModifyAccountRemark）用于修改账户备注。
   */
  async ModifyAccountRemark(
    req: ModifyAccountRemarkRequest,
    cb?: (error: string, rep: ModifyAccountRemarkResponse) => void
  ): Promise<ModifyAccountRemarkResponse> {
    return this.request("ModifyAccountRemark", req, cb)
  }

  /**
   * 本接口（ModifyPublishSubscribe）用于修改实例的发布订阅关系。
   */
  async ModifyPublishSubscribe(
    req: ModifyPublishSubscribeRequest,
    cb?: (error: string, rep: ModifyPublishSubscribeResponse) => void
  ): Promise<ModifyPublishSubscribeResponse> {
    return this.request("ModifyPublishSubscribe", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceName）用于修改实例名字。
   */
  async ModifyDBInstanceName(
    req: ModifyDBInstanceNameRequest,
    cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void
  ): Promise<ModifyDBInstanceNameResponse> {
    return this.request("ModifyDBInstanceName", req, cb)
  }

  /**
   * 本接口（DescribeUploadIncrementalInfo）用于查询增量备份上传权限。
   */
  async DescribeUploadIncrementalInfo(
    req: DescribeUploadIncrementalInfoRequest,
    cb?: (error: string, rep: DescribeUploadIncrementalInfoResponse) => void
  ): Promise<DescribeUploadIncrementalInfoResponse> {
    return this.request("DescribeUploadIncrementalInfo", req, cb)
  }

  /**
   * 本接口(ModifyDatabaseMdf)用于收缩数据库mdf(Shrink mdf)。**本接口已废弃，请使用接口ModifyDatabaseShrinkMDF**。
   */
  async ModifyDatabaseMdf(
    req: ModifyDatabaseMdfRequest,
    cb?: (error: string, rep: ModifyDatabaseMdfResponse) => void
  ): Promise<ModifyDatabaseMdfResponse> {
    return this.request("ModifyDatabaseMdf", req, cb)
  }

  /**
   * 本接口（ModifyDBRemark）用于修改数据库备注。
   */
  async ModifyDBRemark(
    req: ModifyDBRemarkRequest,
    cb?: (error: string, rep: ModifyDBRemarkResponse) => void
  ): Promise<ModifyDBRemarkResponse> {
    return this.request("ModifyDBRemark", req, cb)
  }

  /**
   * 本接口（DeleteIncrementalMigration）用于删除增量备份导入任务。
   */
  async DeleteIncrementalMigration(
    req: DeleteIncrementalMigrationRequest,
    cb?: (error: string, rep: DeleteIncrementalMigrationResponse) => void
  ): Promise<DeleteIncrementalMigrationResponse> {
    return this.request("DeleteIncrementalMigration", req, cb)
  }

  /**
   * 本接口（RunMigration）用于启动迁移任务，开始迁移
   */
  async RunMigration(
    req: RunMigrationRequest,
    cb?: (error: string, rep: RunMigrationResponse) => void
  ): Promise<RunMigrationResponse> {
    return this.request("RunMigration", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceNetwork）用于修改运行中实例的网络，仅支持从VPC网络到VPC网络的转换
   */
  async ModifyDBInstanceNetwork(
    req: ModifyDBInstanceNetworkRequest,
    cb?: (error: string, rep: ModifyDBInstanceNetworkResponse) => void
  ): Promise<ModifyDBInstanceNetworkResponse> {
    return this.request("ModifyDBInstanceNetwork", req, cb)
  }

  /**
   * 本接口（CreateCloudReadOnlyDBInstances）用于创建只读实例 (云盘)。
   */
  async CreateCloudReadOnlyDBInstances(
    req: CreateCloudReadOnlyDBInstancesRequest,
    cb?: (error: string, rep: CreateCloudReadOnlyDBInstancesResponse) => void
  ): Promise<CreateCloudReadOnlyDBInstancesResponse> {
    return this.request("CreateCloudReadOnlyDBInstances", req, cb)
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
   * 本接口（ModifyMaintenanceSpan）用于修改实例的可维护时间窗
   */
  async ModifyMaintenanceSpan(
    req: ModifyMaintenanceSpanRequest,
    cb?: (error: string, rep: ModifyMaintenanceSpanResponse) => void
  ): Promise<ModifyMaintenanceSpanResponse> {
    return this.request("ModifyMaintenanceSpan", req, cb)
  }

  /**
   * 本接口（DescribeMaintenanceSpan）根据实例ID查询该实例的可维护时间窗。
   */
  async DescribeMaintenanceSpan(
    req: DescribeMaintenanceSpanRequest,
    cb?: (error: string, rep: DescribeMaintenanceSpanResponse) => void
  ): Promise<DescribeMaintenanceSpanResponse> {
    return this.request("DescribeMaintenanceSpan", req, cb)
  }

  /**
   * 本接口（DescribeReadOnlyGroupDetails）用于查询只读组详情。
   */
  async DescribeReadOnlyGroupDetails(
    req: DescribeReadOnlyGroupDetailsRequest,
    cb?: (error: string, rep: DescribeReadOnlyGroupDetailsResponse) => void
  ): Promise<DescribeReadOnlyGroupDetailsResponse> {
    return this.request("DescribeReadOnlyGroupDetails", req, cb)
  }

  /**
   * 本接口（CreatePublishSubscribe）用于创建两个数据库之间的发布订阅关系。作为订阅者，不能再充当发布者，作为发布者可以有多个订阅者实例。
   */
  async CreatePublishSubscribe(
    req: CreatePublishSubscribeRequest,
    cb?: (error: string, rep: CreatePublishSubscribeResponse) => void
  ): Promise<CreatePublishSubscribeResponse> {
    return this.request("CreatePublishSubscribe", req, cb)
  }

  /**
   * 本接口（DescribeBackupFiles）用于查询单库备份明细。
   */
  async DescribeBackupFiles(
    req: DescribeBackupFilesRequest,
    cb?: (error: string, rep: DescribeBackupFilesResponse) => void
  ): Promise<DescribeBackupFilesResponse> {
    return this.request("DescribeBackupFiles", req, cb)
  }

  /**
   * 本接口（DescribeRegularBackupPlan）用于查询实例定期备份保留计划
   */
  async DescribeRegularBackupPlan(
    req: DescribeRegularBackupPlanRequest,
    cb?: (error: string, rep: DescribeRegularBackupPlanResponse) => void
  ): Promise<DescribeRegularBackupPlanResponse> {
    return this.request("DescribeRegularBackupPlan", req, cb)
  }

  /**
   * 本接口（DescribePublishSubscribe）用于查询发布订阅关系列表。
   */
  async DescribePublishSubscribe(
    req: DescribePublishSubscribeRequest,
    cb?: (error: string, rep: DescribePublishSubscribeResponse) => void
  ): Promise<DescribePublishSubscribeResponse> {
    return this.request("DescribePublishSubscribe", req, cb)
  }

  /**
   * 本接口（DescribeDatabases）用于查询数据库列表。
   */
  async DescribeDatabases(
    req: DescribeDatabasesRequest,
    cb?: (error: string, rep: DescribeDatabasesResponse) => void
  ): Promise<DescribeDatabasesResponse> {
    return this.request("DescribeDatabases", req, cb)
  }

  /**
   * 本接口（CutXEvents）用于手动切割阻塞日志和死锁日志。
   */
  async CutXEvents(
    req: CutXEventsRequest,
    cb?: (error: string, rep: CutXEventsResponse) => void
  ): Promise<CutXEventsResponse> {
    return this.request("CutXEvents", req, cb)
  }

  /**
   * 本接口（DescribeReadOnlyGroupList）用于查询只读组列表。
   */
  async DescribeReadOnlyGroupList(
    req: DescribeReadOnlyGroupListRequest,
    cb?: (error: string, rep: DescribeReadOnlyGroupListResponse) => void
  ): Promise<DescribeReadOnlyGroupListResponse> {
    return this.request("DescribeReadOnlyGroupList", req, cb)
  }

  /**
   * 本接口（DescribeMigrationDetail）用于查询迁移任务的详细情况
   */
  async DescribeMigrationDetail(
    req: DescribeMigrationDetailRequest,
    cb?: (error: string, rep: DescribeMigrationDetailResponse) => void
  ): Promise<DescribeMigrationDetailResponse> {
    return this.request("DescribeMigrationDetail", req, cb)
  }

  /**
   * 本接口 (DescribeZones) 用于查询当前可售卖的可用区信息。
   */
  async DescribeZones(
    req?: DescribeZonesRequest,
    cb?: (error: string, rep: DescribeZonesResponse) => void
  ): Promise<DescribeZonesResponse> {
    return this.request("DescribeZones", req, cb)
  }

  /**
   * 本接口（DescribeUploadBackupInfo）用于查询备份上传权限。
   */
  async DescribeUploadBackupInfo(
    req: DescribeUploadBackupInfoRequest,
    cb?: (error: string, rep: DescribeUploadBackupInfoResponse) => void
  ): Promise<DescribeUploadBackupInfoResponse> {
    return this.request("DescribeUploadBackupInfo", req, cb)
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
   * 本接口（DescribeUpgradeInstanceCheck）用于在实例变配前，预检查实例变配的影响情况等。
   */
  async DescribeUpgradeInstanceCheck(
    req: DescribeUpgradeInstanceCheckRequest,
    cb?: (error: string, rep: DescribeUpgradeInstanceCheckResponse) => void
  ): Promise<DescribeUpgradeInstanceCheckResponse> {
    return this.request("DescribeUpgradeInstanceCheck", req, cb)
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
   * 本接口(TerminateDBInstance)用于主动隔离实例，使得实例进入回收站。
   */
  async TerminateDBInstance(
    req: TerminateDBInstanceRequest,
    cb?: (error: string, rep: TerminateDBInstanceResponse) => void
  ): Promise<TerminateDBInstanceResponse> {
    return this.request("TerminateDBInstance", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceNote）用于修改实例备注信息。
   */
  async ModifyDBInstanceNote(
    req: ModifyDBInstanceNoteRequest,
    cb?: (error: string, rep: ModifyDBInstanceNoteResponse) => void
  ): Promise<ModifyDBInstanceNoteResponse> {
    return this.request("ModifyDBInstanceNote", req, cb)
  }

  /**
   * 本接口（DeleteDBInstance）用于释放回收站中的SQL server实例(立即下线)。释放后的实例将保存一段时间后物理销毁。其发布订阅将自动解除，其ro副本将自动释放。
   */
  async DeleteDBInstance(
    req: DeleteDBInstanceRequest,
    cb?: (error: string, rep: DeleteDBInstanceResponse) => void
  ): Promise<DeleteDBInstanceResponse> {
    return this.request("DeleteDBInstance", req, cb)
  }

  /**
   * 本接口（CreateBusinessDBInstances）用于创建商业智能服务实例 (云盘)。
   */
  async CreateBusinessDBInstances(
    req: CreateBusinessDBInstancesRequest,
    cb?: (error: string, rep: CreateBusinessDBInstancesResponse) => void
  ): Promise<CreateBusinessDBInstancesResponse> {
    return this.request("CreateBusinessDBInstances", req, cb)
  }

  /**
   * 本接口（ModifyDBName）用于更新数据库名。
   */
  async ModifyDBName(
    req: ModifyDBNameRequest,
    cb?: (error: string, rep: ModifyDBNameResponse) => void
  ): Promise<ModifyDBNameResponse> {
    return this.request("ModifyDBName", req, cb)
  }

  /**
   * 本接口（InquiryPriceCreateDBInstances）用于查询申请实例价格。
   */
  async InquiryPriceCreateDBInstances(
    req: InquiryPriceCreateDBInstancesRequest,
    cb?: (error: string, rep: InquiryPriceCreateDBInstancesResponse) => void
  ): Promise<InquiryPriceCreateDBInstancesResponse> {
    return this.request("InquiryPriceCreateDBInstances", req, cb)
  }

  /**
   * 本接口(DescribeCrossRegionZone)根据主实例查询备机的容灾地域和可用区。
   */
  async DescribeCrossRegionZone(
    req: DescribeCrossRegionZoneRequest,
    cb?: (error: string, rep: DescribeCrossRegionZoneResponse) => void
  ): Promise<DescribeCrossRegionZoneResponse> {
    return this.request("DescribeCrossRegionZone", req, cb)
  }

  /**
   * 本接口(ModifyDatabaseCT)用于启用、禁用数据库数据变更跟踪(CT)
   */
  async ModifyDatabaseCT(
    req: ModifyDatabaseCTRequest,
    cb?: (error: string, rep: ModifyDatabaseCTResponse) => void
  ): Promise<ModifyDatabaseCTResponse> {
    return this.request("ModifyDatabaseCT", req, cb)
  }

  /**
   * 本接口(DescribeBackups)用于查询备份列表。
   */
  async DescribeBackups(
    req: DescribeBackupsRequest,
    cb?: (error: string, rep: DescribeBackupsResponse) => void
  ): Promise<DescribeBackupsResponse> {
    return this.request("DescribeBackups", req, cb)
  }

  /**
   * 本接口（ModifyPublishSubscribeName）修改发布订阅的名称。
   */
  async ModifyPublishSubscribeName(
    req: ModifyPublishSubscribeNameRequest,
    cb?: (error: string, rep: ModifyPublishSubscribeNameResponse) => void
  ): Promise<ModifyPublishSubscribeNameResponse> {
    return this.request("ModifyPublishSubscribeName", req, cb)
  }

  /**
   * 本接口（RenewPostpaidDBInstance）用于将通过接口TerminateDBInstance手动隔离的按量计费实例从回收站中恢复。
   */
  async RenewPostpaidDBInstance(
    req: RenewPostpaidDBInstanceRequest,
    cb?: (error: string, rep: RenewPostpaidDBInstanceResponse) => void
  ): Promise<RenewPostpaidDBInstanceResponse> {
    return this.request("RenewPostpaidDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeIncrementalMigration）用于查询增量备份导入任务。
   */
  async DescribeIncrementalMigration(
    req: DescribeIncrementalMigrationRequest,
    cb?: (error: string, rep: DescribeIncrementalMigrationResponse) => void
  ): Promise<DescribeIncrementalMigrationResponse> {
    return this.request("DescribeIncrementalMigration", req, cb)
  }

  /**
   * 本接口(CreateBackup)用于创建备份。
   */
  async CreateBackup(
    req: CreateBackupRequest,
    cb?: (error: string, rep: CreateBackupResponse) => void
  ): Promise<CreateBackupResponse> {
    return this.request("CreateBackup", req, cb)
  }

  /**
   * 本接口（DescribeDBRestoreTime）用于查询可回档的数据库
   */
  async DescribeDBRestoreTime(
    req: DescribeDBRestoreTimeRequest,
    cb?: (error: string, rep: DescribeDBRestoreTimeResponse) => void
  ): Promise<DescribeDBRestoreTimeResponse> {
    return this.request("DescribeDBRestoreTime", req, cb)
  }

  /**
   * 本接口（DescribeBackupMigration）用于创建增量备份导入任务。
   */
  async DescribeBackupMigration(
    req: DescribeBackupMigrationRequest,
    cb?: (error: string, rep: DescribeBackupMigrationResponse) => void
  ): Promise<DescribeBackupMigrationResponse> {
    return this.request("DescribeBackupMigration", req, cb)
  }

  /**
   * 本接口（BalanceReadOnlyGroup）用于根据预定义的权重平衡每个只读实例的路由权重。预定义权重可根据接口DescribeReadOnlyGroupAutoWeight查询。
   */
  async BalanceReadOnlyGroup(
    req: BalanceReadOnlyGroupRequest,
    cb?: (error: string, rep: BalanceReadOnlyGroupResponse) => void
  ): Promise<BalanceReadOnlyGroupResponse> {
    return this.request("BalanceReadOnlyGroup", req, cb)
  }

  /**
   * 本接口(ModifyDatabaseCDC)用于开启、关闭数据库数据变更捕获(CDC)
   */
  async ModifyDatabaseCDC(
    req: ModifyDatabaseCDCRequest,
    cb?: (error: string, rep: ModifyDatabaseCDCResponse) => void
  ): Promise<ModifyDatabaseCDCResponse> {
    return this.request("ModifyDatabaseCDC", req, cb)
  }

  /**
   * 本接口(DeleteRestoreTask)用于删除回档任务记录。
   */
  async DeleteRestoreTask(
    req: DeleteRestoreTaskRequest,
    cb?: (error: string, rep: DeleteRestoreTaskResponse) => void
  ): Promise<DeleteRestoreTaskResponse> {
    return this.request("DeleteRestoreTask", req, cb)
  }

  /**
   * 本接口（CompleteMigration）作用是完成一个迁移任务
   */
  async CompleteMigration(
    req: CompleteMigrationRequest,
    cb?: (error: string, rep: CompleteMigrationResponse) => void
  ): Promise<CompleteMigrationResponse> {
    return this.request("CompleteMigration", req, cb)
  }

  /**
   * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
   */
  async DescribeProjectSecurityGroups(
    req: DescribeProjectSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void
  ): Promise<DescribeProjectSecurityGroupsResponse> {
    return this.request("DescribeProjectSecurityGroups", req, cb)
  }

  /**
   * 本接口（CreateAccount）用于创建实例账号
   */
  async CreateAccount(
    req: CreateAccountRequest,
    cb?: (error: string, rep: CreateAccountResponse) => void
  ): Promise<CreateAccountResponse> {
    return this.request("CreateAccount", req, cb)
  }

  /**
   * 本接口（StopMigration）作用是中止一个迁移任务
   */
  async StopMigration(
    req: StopMigrationRequest,
    cb?: (error: string, rep: StopMigrationResponse) => void
  ): Promise<StopMigrationResponse> {
    return this.request("StopMigration", req, cb)
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
   * 本接口（DescribeRestoreTask）用于查询回档任务列表。
   */
  async DescribeRestoreTask(
    req: DescribeRestoreTaskRequest,
    cb?: (error: string, rep: DescribeRestoreTaskResponse) => void
  ): Promise<DescribeRestoreTaskResponse> {
    return this.request("DescribeRestoreTask", req, cb)
  }

  /**
   * 该接口（DescribeInstanceParams）用于查询实例的参数列表。
   */
  async DescribeInstanceParams(
    req: DescribeInstanceParamsRequest,
    cb?: (error: string, rep: DescribeInstanceParamsResponse) => void
  ): Promise<DescribeInstanceParamsResponse> {
    return this.request("DescribeInstanceParams", req, cb)
  }

  /**
   * 本接口（ModifyDatabasePrivilege）用于修改实例数据库权限。
   */
  async ModifyDatabasePrivilege(
    req: ModifyDatabasePrivilegeRequest,
    cb?: (error: string, rep: ModifyDatabasePrivilegeResponse) => void
  ): Promise<ModifyDatabasePrivilegeResponse> {
    return this.request("ModifyDatabasePrivilege", req, cb)
  }

  /**
   * 本接口(ModifyCloseWanIp)用于关闭实例外网。
   */
  async ModifyCloseWanIp(
    req: ModifyCloseWanIpRequest,
    cb?: (error: string, rep: ModifyCloseWanIpResponse) => void
  ): Promise<ModifyCloseWanIpResponse> {
    return this.request("ModifyCloseWanIp", req, cb)
  }

  /**
   * 本接口（CompleteExpansion）在实例发起扩容后，实例状态处于“升级待切换”时，可立即完成实例升级切换操作，无需等待可维护时间窗。本接口需要在实例低峰时调用，在完全切换成功前，存在部分库不可访问的风险。
   */
  async CompleteExpansion(
    req: CompleteExpansionRequest,
    cb?: (error: string, rep: CompleteExpansionResponse) => void
  ): Promise<CompleteExpansionResponse> {
    return this.request("CompleteExpansion", req, cb)
  }

  /**
   * 本接口(DescribeBackupStatistical)用于查询备份实时统计列表。
   */
  async DescribeBackupStatistical(
    req: DescribeBackupStatisticalRequest,
    cb?: (error: string, rep: DescribeBackupStatisticalResponse) => void
  ): Promise<DescribeBackupStatisticalResponse> {
    return this.request("DescribeBackupStatistical", req, cb)
  }

  /**
   * 本接口（CreateDB）用于创建数据库。
   */
  async CreateDB(
    req: CreateDBRequest,
    cb?: (error: string, rep: CreateDBResponse) => void
  ): Promise<CreateDBResponse> {
    return this.request("CreateDB", req, cb)
  }

  /**
   * 本接口（CreateCloudDBInstances）用于创建高可用实例 (云盘)。
   */
  async CreateCloudDBInstances(
    req: CreateCloudDBInstancesRequest,
    cb?: (error: string, rep: CreateCloudDBInstancesResponse) => void
  ): Promise<CreateCloudDBInstancesResponse> {
    return this.request("CreateCloudDBInstances", req, cb)
  }

  /**
   * 本接口(DescribeCollationTimeZone)用于查询实例支持的字符集和时区。
   */
  async DescribeCollationTimeZone(
    req: DescribeCollationTimeZoneRequest,
    cb?: (error: string, rep: DescribeCollationTimeZoneResponse) => void
  ): Promise<DescribeCollationTimeZoneResponse> {
    return this.request("DescribeCollationTimeZone", req, cb)
  }

  /**
   * 该接口（DescribeInstanceParamRecords）用于查询实例参数修改历史。
   */
  async DescribeInstanceParamRecords(
    req: DescribeInstanceParamRecordsRequest,
    cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void
  ): Promise<DescribeInstanceParamRecordsResponse> {
    return this.request("DescribeInstanceParamRecords", req, cb)
  }

  /**
   * 本接口（CreateBusinessIntelligenceFile）用于添加商业智能服务文件。
   */
  async CreateBusinessIntelligenceFile(
    req: CreateBusinessIntelligenceFileRequest,
    cb?: (error: string, rep: CreateBusinessIntelligenceFileResponse) => void
  ): Promise<CreateBusinessIntelligenceFileResponse> {
    return this.request("CreateBusinessIntelligenceFile", req, cb)
  }

  /**
   * 本接口（DescribeInstanceTasks）用于查询实例相关的异步任务列表。
   */
  async DescribeInstanceTasks(
    req: DescribeInstanceTasksRequest,
    cb?: (error: string, rep: DescribeInstanceTasksResponse) => void
  ): Promise<DescribeInstanceTasksResponse> {
    return this.request("DescribeInstanceTasks", req, cb)
  }

  /**
   * 本接口(DescribeHASwitchLog)用于手动主备切换。
   */
  async DescribeHASwitchLog(
    req: DescribeHASwitchLogRequest,
    cb?: (error: string, rep: DescribeHASwitchLogResponse) => void
  ): Promise<DescribeHASwitchLogResponse> {
    return this.request("DescribeHASwitchLog", req, cb)
  }

  /**
   * 本接口（StartMigrationCheck）的作用是启动一个迁移前的校验任务，适用于迁移源的类型为TencentDB for SQLServer 的迁移方式
   */
  async StartMigrationCheck(
    req: StartMigrationCheckRequest,
    cb?: (error: string, rep: StartMigrationCheckResponse) => void
  ): Promise<StartMigrationCheckResponse> {
    return this.request("StartMigrationCheck", req, cb)
  }

  /**
   * 本接口（DescribeDBCharsets）用于查询实例支持的数据库字符集。
   */
  async DescribeDBCharsets(
    req: DescribeDBCharsetsRequest,
    cb?: (error: string, rep: DescribeDBCharsetsResponse) => void
  ): Promise<DescribeDBCharsetsResponse> {
    return this.request("DescribeDBCharsets", req, cb)
  }

  /**
   * 本接口（DeletePublishSubscribe）用于删除两个数据库间的发布订阅关系。
   */
  async DeletePublishSubscribe(
    req: DeletePublishSubscribeRequest,
    cb?: (error: string, rep: DeletePublishSubscribeResponse) => void
  ): Promise<DeletePublishSubscribeResponse> {
    return this.request("DeletePublishSubscribe", req, cb)
  }

  /**
   * 本接口(ModifyDatabaseShrinkDMF)用于收缩数据库mdf(Shrink mdf)。
   */
  async ModifyDatabaseShrinkMDF(
    req: ModifyDatabaseShrinkMDFRequest,
    cb?: (error: string, rep: ModifyDatabaseShrinkMDFResponse) => void
  ): Promise<ModifyDatabaseShrinkMDFResponse> {
    return this.request("ModifyDatabaseShrinkMDF", req, cb)
  }

  /**
   * 本接口（ResetAccountPassword）用于重置实例的账号密码。
   */
  async ResetAccountPassword(
    req: ResetAccountPasswordRequest,
    cb?: (error: string, rep: ResetAccountPasswordResponse) => void
  ): Promise<ResetAccountPasswordResponse> {
    return this.request("ResetAccountPassword", req, cb)
  }

  /**
     * 本接口(ModifyInstanceParam)用于修改云数据库实例的参数。
<b>注意</b>：如果修改的参数是需要<b>重启实例</b>的，那么实例将会按照WaitSwitch参数的设置(可能是立即执行也可能在可维护时间窗内自动执行)在执行参数修改时<b>重启实例</b>。
您可以通过DescribeInstanceParams接口查询修改参数时是否会重启实例，以免导致您的实例不符合预期重启。
     */
  async ModifyInstanceParam(
    req: ModifyInstanceParamRequest,
    cb?: (error: string, rep: ModifyInstanceParamResponse) => void
  ): Promise<ModifyInstanceParamResponse> {
    return this.request("ModifyInstanceParam", req, cb)
  }

  /**
   * 本接口(DescribeRestoreTimeRange)用于查询按照时间点可回档的时间范围。
   */
  async DescribeRestoreTimeRange(
    req: DescribeRestoreTimeRangeRequest,
    cb?: (error: string, rep: DescribeRestoreTimeRangeResponse) => void
  ): Promise<DescribeRestoreTimeRangeResponse> {
    return this.request("DescribeRestoreTimeRange", req, cb)
  }

  /**
   * 本接口（DescribeSlowlogs）用于获取慢查询日志文件信息
   */
  async DescribeSlowlogs(
    req: DescribeSlowlogsRequest,
    cb?: (error: string, rep: DescribeSlowlogsResponse) => void
  ): Promise<DescribeSlowlogsResponse> {
    return this.request("DescribeSlowlogs", req, cb)
  }

  /**
   * 本接口(ModifyCrossBackupStrategy)用于开启、关闭地域备份策略。
   */
  async ModifyCrossBackupStrategy(
    req: ModifyCrossBackupStrategyRequest,
    cb?: (error: string, rep: ModifyCrossBackupStrategyResponse) => void
  ): Promise<ModifyCrossBackupStrategyResponse> {
    return this.request("ModifyCrossBackupStrategy", req, cb)
  }

  /**
   * 本接口(DeleteDB)用于删除数据库。
   */
  async DeleteDB(
    req: DeleteDBRequest,
    cb?: (error: string, rep: DeleteDBResponse) => void
  ): Promise<DeleteDBResponse> {
    return this.request("DeleteDB", req, cb)
  }

  /**
   * 本接口(DescribeFlowStatus)用于查询流程状态。
   */
  async DescribeFlowStatus(
    req: DescribeFlowStatusRequest,
    cb?: (error: string, rep: DescribeFlowStatusResponse) => void
  ): Promise<DescribeFlowStatusResponse> {
    return this.request("DescribeFlowStatus", req, cb)
  }

  /**
   * 本接口（CreateBasicDBInstances）用于创建基础版实例 (云盘)。
   */
  async CreateBasicDBInstances(
    req: CreateBasicDBInstancesRequest,
    cb?: (error: string, rep: CreateBasicDBInstancesResponse) => void
  ): Promise<CreateBasicDBInstancesResponse> {
    return this.request("CreateBasicDBInstances", req, cb)
  }

  /**
   * 本接口（RestartDBInstance）用于重启数据库实例。
   */
  async RestartDBInstance(
    req: RestartDBInstanceRequest,
    cb?: (error: string, rep: RestartDBInstanceResponse) => void
  ): Promise<RestartDBInstanceResponse> {
    return this.request("RestartDBInstance", req, cb)
  }

  /**
   * 本接口（CreateDBInstances）用于创建高可用实例 (本地盘)
   */
  async CreateDBInstances(
    req: CreateDBInstancesRequest,
    cb?: (error: string, rep: CreateDBInstancesResponse) => void
  ): Promise<CreateDBInstancesResponse> {
    return this.request("CreateDBInstances", req, cb)
  }

  /**
   * 本接口（CreateMigration）作用是创建一个迁移任务
   */
  async CreateMigration(
    req: CreateMigrationRequest,
    cb?: (error: string, rep: CreateMigrationResponse) => void
  ): Promise<CreateMigrationResponse> {
    return this.request("CreateMigration", req, cb)
  }

  /**
   * 本接口（DeleteBusinessIntelligenceFile）用于删除商业智能文件。
   */
  async DeleteBusinessIntelligenceFile(
    req: DeleteBusinessIntelligenceFileRequest,
    cb?: (error: string, rep: DeleteBusinessIntelligenceFileResponse) => void
  ): Promise<DeleteBusinessIntelligenceFileResponse> {
    return this.request("DeleteBusinessIntelligenceFile", req, cb)
  }

  /**
   * 本接口（CreateBackupMigration）用于创建备份导入任务。
   */
  async CreateBackupMigration(
    req: CreateBackupMigrationRequest,
    cb?: (error: string, rep: CreateBackupMigrationResponse) => void
  ): Promise<CreateBackupMigrationResponse> {
    return this.request("CreateBackupMigration", req, cb)
  }

  /**
   * 本接口(DescribeDBInstances)用于查询实例列表。
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
  }

  /**
   * 本接口（DescribeBusinessIntelligenceFile）用于查询商业智能服务需要的文件。
   */
  async DescribeBusinessIntelligenceFile(
    req: DescribeBusinessIntelligenceFileRequest,
    cb?: (error: string, rep: DescribeBusinessIntelligenceFileResponse) => void
  ): Promise<DescribeBusinessIntelligenceFileResponse> {
    return this.request("DescribeBusinessIntelligenceFile", req, cb)
  }

  /**
   * 本接口（StartBackupMigration）用于启动备份导入任务。
   */
  async StartBackupMigration(
    req: StartBackupMigrationRequest,
    cb?: (error: string, rep: StartBackupMigrationResponse) => void
  ): Promise<StartBackupMigrationResponse> {
    return this.request("StartBackupMigration", req, cb)
  }

  /**
   * 本接口(AssociateSecurityGroups)用于安全组批量绑定实例。
   */
  async AssociateSecurityGroups(
    req: AssociateSecurityGroupsRequest,
    cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void
  ): Promise<AssociateSecurityGroupsResponse> {
    return this.request("AssociateSecurityGroups", req, cb)
  }

  /**
   * 本接口（OpenInterCommunication）用于打开实例的互通，实例互通可以实现商业智能服务相互联通。
   */
  async OpenInterCommunication(
    req: OpenInterCommunicationRequest,
    cb?: (error: string, rep: OpenInterCommunicationResponse) => void
  ): Promise<OpenInterCommunicationResponse> {
    return this.request("OpenInterCommunication", req, cb)
  }

  /**
   * 本接口（CreateIncrementalMigration）用于创建增量备份导入任务。
   */
  async CreateIncrementalMigration(
    req: CreateIncrementalMigrationRequest,
    cb?: (error: string, rep: CreateIncrementalMigrationResponse) => void
  ): Promise<CreateIncrementalMigrationResponse> {
    return this.request("CreateIncrementalMigration", req, cb)
  }

  /**
   * 本接口（DescribeBackupUploadSize）用于查询上传的备份文件大小。在备份上传类型是COS_UPLOAD(备份放在业务的对象存储上)时有效。
   */
  async DescribeBackupUploadSize(
    req: DescribeBackupUploadSizeRequest,
    cb?: (error: string, rep: DescribeBackupUploadSizeResponse) => void
  ): Promise<DescribeBackupUploadSizeResponse> {
    return this.request("DescribeBackupUploadSize", req, cb)
  }

  /**
   * 本接口（StartInstanceXEvent）用于开启、关闭扩展事件。
   */
  async StartInstanceXEvent(
    req: StartInstanceXEventRequest,
    cb?: (error: string, rep: StartInstanceXEventResponse) => void
  ): Promise<StartInstanceXEventResponse> {
    return this.request("StartInstanceXEvent", req, cb)
  }

  /**
   * 本接口（DeleteMigration）用于删除迁移任务
   */
  async DeleteMigration(
    req: DeleteMigrationRequest,
    cb?: (error: string, rep: DeleteMigrationResponse) => void
  ): Promise<DeleteMigrationResponse> {
    return this.request("DeleteMigration", req, cb)
  }

  /**
   * 本接口（ModifyInstanceEncryptAttributes）用于开通实例的TDE加密功能。
   */
  async ModifyInstanceEncryptAttributes(
    req: ModifyInstanceEncryptAttributesRequest,
    cb?: (error: string, rep: ModifyInstanceEncryptAttributesResponse) => void
  ): Promise<ModifyInstanceEncryptAttributesResponse> {
    return this.request("ModifyInstanceEncryptAttributes", req, cb)
  }

  /**
   * 本接口（DescribeDatabaseNames）查询账户关联的数据库名称。
   */
  async DescribeDatabaseNames(
    req: DescribeDatabaseNamesRequest,
    cb?: (error: string, rep: DescribeDatabaseNamesResponse) => void
  ): Promise<DescribeDatabaseNamesResponse> {
    return this.request("DescribeDatabaseNames", req, cb)
  }

  /**
   * 本接口（DescribeInstanceByOrders）用于根据订单号查询资源ID
   */
  async DescribeInstanceByOrders(
    req: DescribeInstanceByOrdersRequest,
    cb?: (error: string, rep: DescribeInstanceByOrdersResponse) => void
  ): Promise<DescribeInstanceByOrdersResponse> {
    return this.request("DescribeInstanceByOrders", req, cb)
  }

  /**
   * 本接口（DescribeAccounts）用于拉取实例账户列表。
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 本接口（ModifyIncrementalMigration）用于修改增量备份导入任务。
   */
  async ModifyIncrementalMigration(
    req: ModifyIncrementalMigrationRequest,
    cb?: (error: string, rep: ModifyIncrementalMigrationResponse) => void
  ): Promise<ModifyIncrementalMigrationResponse> {
    return this.request("ModifyIncrementalMigration", req, cb)
  }

  /**
   * 本接口（ModifyDBEncryptAttributes）用于开启、关闭数据库的TDE加密功能。
   */
  async ModifyDBEncryptAttributes(
    req: ModifyDBEncryptAttributesRequest,
    cb?: (error: string, rep: ModifyDBEncryptAttributesResponse) => void
  ): Promise<ModifyDBEncryptAttributesResponse> {
    return this.request("ModifyDBEncryptAttributes", req, cb)
  }

  /**
   * 本接口(DescribeCrossRegions)用于查询跨地域备份的目标地域。
   */
  async DescribeCrossRegions(
    req?: DescribeCrossRegionsRequest,
    cb?: (error: string, rep: DescribeCrossRegionsResponse) => void
  ): Promise<DescribeCrossRegionsResponse> {
    return this.request("DescribeCrossRegions", req, cb)
  }

  /**
   * 本接口（ModifyDReadable）用于开通或者关闭备机只读
   */
  async ModifyDReadable(
    req: ModifyDReadableRequest,
    cb?: (error: string, rep: ModifyDReadableResponse) => void
  ): Promise<ModifyDReadableResponse> {
    return this.request("ModifyDReadable", req, cb)
  }

  /**
   * 本接口（RemoveBackups）可以删除用户手动创建的备份文件。待删除的备份策略可以是实例备份，也可以是多库备份。
   */
  async RemoveBackups(
    req: RemoveBackupsRequest,
    cb?: (error: string, rep: RemoveBackupsResponse) => void
  ): Promise<RemoveBackupsResponse> {
    return this.request("RemoveBackups", req, cb)
  }

  /**
   * 本接口（DescribeMigrationDatabases）的作用是查询待迁移数据库列表
   */
  async DescribeMigrationDatabases(
    req: DescribeMigrationDatabasesRequest,
    cb?: (error: string, rep: DescribeMigrationDatabasesResponse) => void
  ): Promise<DescribeMigrationDatabasesResponse> {
    return this.request("DescribeMigrationDatabases", req, cb)
  }

  /**
   * 本接口（DescribeDBInstanceInter）用于查询互通实例的信息。
   */
  async DescribeDBInstanceInter(
    req: DescribeDBInstanceInterRequest,
    cb?: (error: string, rep: DescribeDBInstanceInterResponse) => void
  ): Promise<DescribeDBInstanceInterResponse> {
    return this.request("DescribeDBInstanceInter", req, cb)
  }

  /**
   * 本接口（RecycleDBInstance）用于主动回收已下线的SQLSERVER实例
   */
  async RecycleDBInstance(
    req: RecycleDBInstanceRequest,
    cb?: (error: string, rep: RecycleDBInstanceResponse) => void
  ): Promise<RecycleDBInstanceResponse> {
    return this.request("RecycleDBInstance", req, cb)
  }

  /**
   * 本接口（CreateReadOnlyDBInstances）用于创建只读实例 (本地盘)。
   */
  async CreateReadOnlyDBInstances(
    req: CreateReadOnlyDBInstancesRequest,
    cb?: (error: string, rep: CreateReadOnlyDBInstancesResponse) => void
  ): Promise<CreateReadOnlyDBInstancesResponse> {
    return this.request("CreateReadOnlyDBInstances", req, cb)
  }

  /**
   * 本接口(SwitchCloudInstanceHA)用于手动主备切换。
   */
  async SwitchCloudInstanceHA(
    req: SwitchCloudInstanceHARequest,
    cb?: (error: string, rep: SwitchCloudInstanceHAResponse) => void
  ): Promise<SwitchCloudInstanceHAResponse> {
    return this.request("SwitchCloudInstanceHA", req, cb)
  }

  /**
   * 本接口（DescribeInquiryPriceParameter）用于查询实例询价计费参数。当前接口查询实例新购的计费参数。内部接口用于活动页售卖场景。
   */
  async DescribeInquiryPriceParameter(
    req: DescribeInquiryPriceParameterRequest,
    cb?: (error: string, rep: DescribeInquiryPriceParameterResponse) => void
  ): Promise<DescribeInquiryPriceParameterResponse> {
    return this.request("DescribeInquiryPriceParameter", req, cb)
  }

  /**
   * 本接口（CloseInterCommunication）用于关闭实例互通。
   */
  async CloseInterCommunication(
    req: CloseInterCommunicationRequest,
    cb?: (error: string, rep: CloseInterCommunicationResponse) => void
  ): Promise<CloseInterCommunicationResponse> {
    return this.request("CloseInterCommunication", req, cb)
  }

  /**
   * 本接口(DescribeBackupSummary)用于查询数据库备份概览信息。
   */
  async DescribeBackupSummary(
    req?: DescribeBackupSummaryRequest,
    cb?: (error: string, rep: DescribeBackupSummaryResponse) => void
  ): Promise<DescribeBackupSummaryResponse> {
    return this.request("DescribeBackupSummary", req, cb)
  }

  /**
   * 本接口（ModifyMigration）可以修改已有的迁移任务信息
   */
  async ModifyMigration(
    req: ModifyMigrationRequest,
    cb?: (error: string, rep: ModifyMigrationResponse) => void
  ): Promise<ModifyMigrationResponse> {
    return this.request("ModifyMigration", req, cb)
  }

  /**
   * 本接口（DescribeOrders）用于查询订单信息
   */
  async DescribeOrders(
    req: DescribeOrdersRequest,
    cb?: (error: string, rep: DescribeOrdersResponse) => void
  ): Promise<DescribeOrdersResponse> {
    return this.request("DescribeOrders", req, cb)
  }

  /**
   * 本接口（DescribeInstanceTradeParameter）用于查询实例的计费参数
   */
  async DescribeInstanceTradeParameter(
    req: DescribeInstanceTradeParameterRequest,
    cb?: (error: string, rep: DescribeInstanceTradeParameterResponse) => void
  ): Promise<DescribeInstanceTradeParameterResponse> {
    return this.request("DescribeInstanceTradeParameter", req, cb)
  }

  /**
   * 本接口(DescribeBackupMonitor)用于查询备份空间使用详情。
   */
  async DescribeBackupMonitor(
    req: DescribeBackupMonitorRequest,
    cb?: (error: string, rep: DescribeBackupMonitorResponse) => void
  ): Promise<DescribeBackupMonitorResponse> {
    return this.request("DescribeBackupMonitor", req, cb)
  }

  /**
   * 本接口（CloneDB）用于克隆数据库，只支持克隆到本实例，克隆时必须指定新库名称。
   */
  async CloneDB(
    req: CloneDBRequest,
    cb?: (error: string, rep: CloneDBResponse) => void
  ): Promise<CloneDBResponse> {
    return this.request("CloneDB", req, cb)
  }

  /**
   * 本接口（RestoreInstance）用于按照备份集回档数据库。
   */
  async RestoreInstance(
    req: RestoreInstanceRequest,
    cb?: (error: string, rep: RestoreInstanceResponse) => void
  ): Promise<RestoreInstanceResponse> {
    return this.request("RestoreInstance", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceProject）用于修改数据库实例所属项目。
   */
  async ModifyDBInstanceProject(
    req: ModifyDBInstanceProjectRequest,
    cb?: (error: string, rep: ModifyDBInstanceProjectResponse) => void
  ): Promise<ModifyDBInstanceProjectResponse> {
    return this.request("ModifyDBInstanceProject", req, cb)
  }

  /**
   * 本接口(DescribeCrossBackupStatistical)用于查询跨地域备份实时统计列表。
   */
  async DescribeCrossBackupStatistical(
    req: DescribeCrossBackupStatisticalRequest,
    cb?: (error: string, rep: DescribeCrossBackupStatisticalResponse) => void
  ): Promise<DescribeCrossBackupStatisticalResponse> {
    return this.request("DescribeCrossBackupStatistical", req, cb)
  }

  /**
   * 本接口（DeleteAccount）用于删除实例账号。
   */
  async DeleteAccount(
    req: DeleteAccountRequest,
    cb?: (error: string, rep: DeleteAccountResponse) => void
  ): Promise<DeleteAccountResponse> {
    return this.request("DeleteAccount", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceSSL）用于开启\关闭\更新SSL加密
   */
  async ModifyDBInstanceSSL(
    req: ModifyDBInstanceSSLRequest,
    cb?: (error: string, rep: ModifyDBInstanceSSLResponse) => void
  ): Promise<ModifyDBInstanceSSLResponse> {
    return this.request("ModifyDBInstanceSSL", req, cb)
  }

  /**
   * 本接口（ModifyBackupStrategy）用于修改备份策略
   */
  async ModifyBackupStrategy(
    req: ModifyBackupStrategyRequest,
    cb?: (error: string, rep: ModifyBackupStrategyResponse) => void
  ): Promise<ModifyBackupStrategyResponse> {
    return this.request("ModifyBackupStrategy", req, cb)
  }

  /**
   * 本接口(DescribeDBsNormal)用于查询数据库配置信息，此接口不包含数据库的关联账号。**此接口已废弃，请使用DescribeDatabasesNormal。**
   */
  async DescribeDBsNormal(
    req: DescribeDBsNormalRequest,
    cb?: (error: string, rep: DescribeDBsNormalResponse) => void
  ): Promise<DescribeDBsNormalResponse> {
    return this.request("DescribeDBsNormal", req, cb)
  }

  /**
   * 本接口(ModifyOpenWanIp)用于开通实例外网。
   */
  async ModifyOpenWanIp(
    req: ModifyOpenWanIpRequest,
    cb?: (error: string, rep: ModifyOpenWanIpResponse) => void
  ): Promise<ModifyOpenWanIpResponse> {
    return this.request("ModifyOpenWanIp", req, cb)
  }

  /**
   * 本接口（DescribeMigrations）根据输入的限定条件，查询符合条件的迁移任务列表
   */
  async DescribeMigrations(
    req: DescribeMigrationsRequest,
    cb?: (error: string, rep: DescribeMigrationsResponse) => void
  ): Promise<DescribeMigrationsResponse> {
    return this.request("DescribeMigrations", req, cb)
  }

  /**
   * 本接口(DescribeDBsNormal)用于查询数据库配置信息，此接口不包含数据库的关联账号
   */
  async DescribeDatabasesNormal(
    req: DescribeDatabasesNormalRequest,
    cb?: (error: string, rep: DescribeDatabasesNormalResponse) => void
  ): Promise<DescribeDatabasesNormalResponse> {
    return this.request("DescribeDatabasesNormal", req, cb)
  }

  /**
   * 本接口（RollbackInstance）用于按照时间点回档实例
   */
  async RollbackInstance(
    req: RollbackInstanceRequest,
    cb?: (error: string, rep: RollbackInstanceResponse) => void
  ): Promise<RollbackInstanceResponse> {
    return this.request("RollbackInstance", req, cb)
  }

  /**
   * 本接口（DescribeDBs）用于查询数据库列表。**已废弃，请使用接口DescribeDatabases**
   */
  async DescribeDBs(
    req: DescribeDBsRequest,
    cb?: (error: string, rep: DescribeDBsResponse) => void
  ): Promise<DescribeDBsResponse> {
    return this.request("DescribeDBs", req, cb)
  }

  /**
   * 本接口（DescribeBackupCommand）用于查询以规范的格式创建备份的命令。
   */
  async DescribeBackupCommand(
    req: DescribeBackupCommandRequest,
    cb?: (error: string, rep: DescribeBackupCommandResponse) => void
  ): Promise<DescribeBackupCommandResponse> {
    return this.request("DescribeBackupCommand", req, cb)
  }

  /**
     * 本接口（RenewDBInstance）用于续费实例。当被续费实例是按量计费实例时，则按量计费实例转为包年包月计费方式。
按量计费实例转包年包月询价可通过(InquiryPriceRenewDBInstance)接口获得。
     */
  async RenewDBInstance(
    req: RenewDBInstanceRequest,
    cb?: (error: string, rep: RenewDBInstanceResponse) => void
  ): Promise<RenewDBInstanceResponse> {
    return this.request("RenewDBInstance", req, cb)
  }

  /**
   * 本接口（InquiryPriceUpgradeDBInstance）用于查询包年包月实例升级变配的价格。
   */
  async InquiryPriceUpgradeDBInstance(
    req: InquiryPriceUpgradeDBInstanceRequest,
    cb?: (error: string, rep: InquiryPriceUpgradeDBInstanceResponse) => void
  ): Promise<InquiryPriceUpgradeDBInstanceResponse> {
    return this.request("InquiryPriceUpgradeDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeReadOnlyGroupAutoWeight）用于查询只读组的自动权重分配结果，在接口BalanceReadOnlyGroup接口中按照自动权重分配结果进行路由权重分配。
   */
  async DescribeReadOnlyGroupAutoWeight(
    req: DescribeReadOnlyGroupAutoWeightRequest,
    cb?: (error: string, rep: DescribeReadOnlyGroupAutoWeightResponse) => void
  ): Promise<DescribeReadOnlyGroupAutoWeightResponse> {
    return this.request("DescribeReadOnlyGroupAutoWeight", req, cb)
  }

  /**
   * 本接口（InquiryPriceRenewDBInstance）用于查询包年包月实例的续费价格。
   */
  async InquiryPriceRenewDBInstance(
    req: InquiryPriceRenewDBInstanceRequest,
    cb?: (error: string, rep: InquiryPriceRenewDBInstanceResponse) => void
  ): Promise<InquiryPriceRenewDBInstanceResponse> {
    return this.request("InquiryPriceRenewDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeXEvents）用于查询扩展事件列表。
   */
  async DescribeXEvents(
    req: DescribeXEventsRequest,
    cb?: (error: string, rep: DescribeXEventsResponse) => void
  ): Promise<DescribeXEventsResponse> {
    return this.request("DescribeXEvents", req, cb)
  }

  /**
   * 本接口（ModifyBackupMigration）用于修改备份导入任务。
   */
  async ModifyBackupMigration(
    req: ModifyBackupMigrationRequest,
    cb?: (error: string, rep: ModifyBackupMigrationResponse) => void
  ): Promise<ModifyBackupMigrationResponse> {
    return this.request("ModifyBackupMigration", req, cb)
  }

  /**
   * 本接口(DescribeDBPrivilegeByAccount)用于查询账号关联的数据库和权限信息
   */
  async DescribeDBPrivilegeByAccount(
    req: DescribeDBPrivilegeByAccountRequest,
    cb?: (error: string, rep: DescribeDBPrivilegeByAccountResponse) => void
  ): Promise<DescribeDBPrivilegeByAccountResponse> {
    return this.request("DescribeDBPrivilegeByAccount", req, cb)
  }

  /**
   * 本接口(DescribeAccountPrivilegeByDB)用于查询数据库关联的账号和权限信息
   */
  async DescribeAccountPrivilegeByDB(
    req: DescribeAccountPrivilegeByDBRequest,
    cb?: (error: string, rep: DescribeAccountPrivilegeByDBResponse) => void
  ): Promise<DescribeAccountPrivilegeByDBResponse> {
    return this.request("DescribeAccountPrivilegeByDB", req, cb)
  }

  /**
   * 本接口 (DescribeProductSpec) 用于查询全地域售卖规格配置（内部前端使用不公开）
   */
  async DescribeProductSpec(
    req?: DescribeProductSpecRequest,
    cb?: (error: string, rep: DescribeProductSpecResponse) => void
  ): Promise<DescribeProductSpecResponse> {
    return this.request("DescribeProductSpec", req, cb)
  }

  /**
   * 本接口(DescribeBackupByFlowId)用于通过备份创建流程的ID查询创建的备份详情，流程ID可从接口CreateBackup中获得。
   */
  async DescribeBackupByFlowId(
    req: DescribeBackupByFlowIdRequest,
    cb?: (error: string, rep: DescribeBackupByFlowIdResponse) => void
  ): Promise<DescribeBackupByFlowIdResponse> {
    return this.request("DescribeBackupByFlowId", req, cb)
  }

  /**
   * 本接口（DescribeRollbackTime）用于查询实例可回档时间范围
   */
  async DescribeRollbackTime(
    req: DescribeRollbackTimeRequest,
    cb?: (error: string, rep: DescribeRollbackTimeResponse) => void
  ): Promise<DescribeRollbackTimeResponse> {
    return this.request("DescribeRollbackTime", req, cb)
  }

  /**
   * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
   */
  async DescribeDBSecurityGroups(
    req: DescribeDBSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void
  ): Promise<DescribeDBSecurityGroupsResponse> {
    return this.request("DescribeDBSecurityGroups", req, cb)
  }

  /**
   * 本接口（ModifyReadOnlyGroupDetails）用于修改只读组详情。
   */
  async ModifyReadOnlyGroupDetails(
    req: ModifyReadOnlyGroupDetailsRequest,
    cb?: (error: string, rep: ModifyReadOnlyGroupDetailsResponse) => void
  ): Promise<ModifyReadOnlyGroupDetailsResponse> {
    return this.request("ModifyReadOnlyGroupDetails", req, cb)
  }

  /**
   * 本接口（DeleteBackupMigration）用于删除备份导入任务。
   */
  async DeleteBackupMigration(
    req: DeleteBackupMigrationRequest,
    cb?: (error: string, rep: DeleteBackupMigrationResponse) => void
  ): Promise<DeleteBackupMigrationResponse> {
    return this.request("DeleteBackupMigration", req, cb)
  }

  /**
   * 本接口（DescribeDBInstancesAttribute）用于查询实例附属属性
   */
  async DescribeDBInstancesAttribute(
    req: DescribeDBInstancesAttributeRequest,
    cb?: (error: string, rep: DescribeDBInstancesAttributeResponse) => void
  ): Promise<DescribeDBInstancesAttributeResponse> {
    return this.request("DescribeDBInstancesAttribute", req, cb)
  }

  /**
   * 本接口（UpgradeDBInstance）用于升级实例
   */
  async UpgradeDBInstance(
    req: UpgradeDBInstanceRequest,
    cb?: (error: string, rep: UpgradeDBInstanceResponse) => void
  ): Promise<UpgradeDBInstanceResponse> {
    return this.request("UpgradeDBInstance", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceRenewFlag）用于修改实例续费标记
   */
  async ModifyDBInstanceRenewFlag(
    req: ModifyDBInstanceRenewFlagRequest,
    cb?: (error: string, rep: ModifyDBInstanceRenewFlagResponse) => void
  ): Promise<ModifyDBInstanceRenewFlagResponse> {
    return this.request("ModifyDBInstanceRenewFlag", req, cb)
  }

  /**
   * 本接口（DescribeReadOnlyGroupByReadOnlyInstance）用于通过只读副本实例ID查询其所在的只读组。
   */
  async DescribeReadOnlyGroupByReadOnlyInstance(
    req: DescribeReadOnlyGroupByReadOnlyInstanceRequest,
    cb?: (error: string, rep: DescribeReadOnlyGroupByReadOnlyInstanceResponse) => void
  ): Promise<DescribeReadOnlyGroupByReadOnlyInstanceResponse> {
    return this.request("DescribeReadOnlyGroupByReadOnlyInstance", req, cb)
  }
}

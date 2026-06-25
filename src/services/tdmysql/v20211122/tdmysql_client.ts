/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  ModifyDBInstanceVPortRequest,
  ExpandInstanceResponse,
  DescribeSaleZonesInfo,
  BackupMethodStatisticsOutPut,
  DescribeDatabasesRequest,
  DescribeDBParametersRequest,
  ModifyInstanceNetworkResponse,
  ModifyInstanceSSLStatusResponse,
  RestartDBInstancesResponse,
  DescribeSlowLogsRequest,
  ModifyInstanceNameRequest,
  DescribeUserPrivilegesResponse,
  DescribeDBSecurityGroupsResponse,
  InstanceFilter,
  Explain,
  BackupStatisticsModel,
  ResetUsersPasswordRequest,
  BackupPolicyModelOutPut,
  ModifyInstanceSSLStatusRequest,
  ModifyInstanceNameResponse,
  DescribeDBSBackupStatisticsDetailRequest,
  DescribeDBParametersResponse,
  StorageNodeSpec,
  IsolateDBInstanceResponse,
  ResetUserPasswordResponse,
  DescribeInstanceSSLStatusResponse,
  DeleteDBSBackupSetsResponse,
  DescribeFlowResponse,
  MaintenanceWindowInfo,
  DescribeDBSBackupStatisticsDetailResponse,
  ModifyDBSBackupSetCommentRequest,
  ParamConstraint,
  DescribeDBSBackupPolicyResponse,
  DeleteDBSBackupSetsRequest,
  BinlogInfo,
  DatabasePrivileges,
  NodeInfo,
  DescribeSpecsResponse,
  ModifyDBInstanceSecurityGroupsResponse,
  CreateCloneInstanceResponse,
  ModifyUserPrivilegesResponse,
  DescribeSlowLogsResponse,
  CreateDBSBackupResponse,
  BackupSetsReqFilter,
  DescribeDBSBackupSetsResponse,
  DescribeDBSCloneInstancesRequest,
  CreateCloneInstanceRequest,
  DescribeDBInstancesRequest,
  DescribeDBSecurityGroupsRequest,
  DescribeSaleRegionInfo,
  DescribeSaleInfoRequest,
  DescribeDBSArchiveLogsRequest,
  DatabaseFunction,
  CreateUsersResponse,
  ModifyDBSBackupPolicyRequest,
  DescribeDBInstanceDetailResponse,
  DescribeDatabaseObjectsRequest,
  ModifyMaintenanceWindowRequest,
  DestroyInstancesResponse,
  DescribeSaleInfoResponse,
  ResetUserPasswordInfo,
  DeleteUsersResponse,
  DatabaseTable,
  DescribeDBInstanceDetailRequest,
  ModifyAutoRenewFlagResponse,
  DescribeUsersRequest,
  DatabaseView,
  DataBackupStatisticsModel,
  LogFilter,
  ModifyDBSBackupPolicyResponse,
  DBParamValue,
  CreateUsersRequest,
  ModifyDBParametersRequest,
  CloneInstanceModel,
  ArchiveLogInterval,
  ModifyDBParametersResponse,
  DescribeInstanceSSLStatusRequest,
  SecurityGroup,
  DeleteUsersRequest,
  ModifyUserPrivilegesRequest,
  DescribeDBSArchiveLogsResponse,
  DescribeDatabaseObjectsResponse,
  DescribeMaintenanceWindowResponse,
  InstanceNode,
  SecurityGroupBound,
  DescribeDBSBackupStatisticsResponse,
  BackupTypeStatisticsModel,
  DescribeDBSCloneInstancesResponse,
  InstanceInfo,
  User,
  DescribeDBSBackupSetsRequest,
  AnalysisInstanceInfo,
  ServerlessCcu,
  Database,
  DescribeSaleZonesGroup,
  DescribeDBSBackupStatisticsRequest,
  DescribeUsersResponse,
  LogBackupStatisticsModel,
  CancelIsolateDBInstancesResponse,
  BackupMethodStatisticsModel,
  DescribeDBSBackupPolicyRequest,
  UpgradeInstanceResponse,
  CancelIsolateDBInstancesRequest,
  SlowLogData,
  ExpandInstanceRequest,
  DescribeDatabasesResponse,
  ArchiveLogModel,
  AnalysisRelationInfo,
  ResourceTag,
  ModifyMaintenanceWindowResponse,
  IsolateDBInstanceRequest,
  DescribeFlowRequest,
  ModifyDBSBackupSetCommentResponse,
  AutoScalingConfig,
  DatabaseProcedure,
  ModifyAutoRenewFlagRequest,
  ResetUsersPasswordResponse,
  CreateDBSBackupRequest,
  DestroyInstancesRequest,
  DescribeMaintenanceWindowRequest,
  DescribeSpecsRequest,
  ParamDesc,
  ModifyInstanceNetworkRequest,
  BackupPolicyModelInput,
  DescribeDBInstancesResponse,
  ConstraintRange,
  UserInfo,
  RestartDBInstancesRequest,
  ResetUserPasswordRequest,
  DescribeDBSAvailableRecoveryTimeResponse,
  TablePrivileges,
  DescribeUserPrivilegesRequest,
  DescribeDBSAvailableRecoveryTimeRequest,
  ModifyDBInstanceVPortResponse,
  UpgradeInstanceRequest,
  BackupSetModel,
  InstanceParam,
  CreateDBInstancesResponse,
  ModifyDBInstanceSecurityGroupsRequest,
} from "./tdmysql_models"

/**
 * tdmysql client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tdmysql.tencentcloudapi.com", "2021-11-22", clientConfig)
  }

  /**
   * 本接口（ResetUsersPassword）用于批量重置用户密码
   */
  async ResetUsersPassword(
    req: ResetUsersPasswordRequest,
    cb?: (error: string, rep: ResetUsersPasswordResponse) => void
  ): Promise<ResetUsersPasswordResponse> {
    return this.request("ResetUsersPassword", req, cb)
  }

  /**
   * 查询实例备份策略 DescribeDBSBackupPolicy
   */
  async DescribeDBSBackupPolicy(
    req: DescribeDBSBackupPolicyRequest,
    cb?: (error: string, rep: DescribeDBSBackupPolicyResponse) => void
  ): Promise<DescribeDBSBackupPolicyResponse> {
    return this.request("DescribeDBSBackupPolicy", req, cb)
  }

  /**
   * 本接口（ModifyInstanceSSLStatus）提供开关实例SSL的功能
   */
  async ModifyInstanceSSLStatus(
    req: ModifyInstanceSSLStatusRequest,
    cb?: (error: string, rep: ModifyInstanceSSLStatusResponse) => void
  ): Promise<ModifyInstanceSSLStatusResponse> {
    return this.request("ModifyInstanceSSLStatus", req, cb)
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
   * 本接口（ModifyInstanceNetwork）用于修改实例所属网络
   */
  async ModifyInstanceNetwork(
    req: ModifyInstanceNetworkRequest,
    cb?: (error: string, rep: ModifyInstanceNetworkResponse) => void
  ): Promise<ModifyInstanceNetworkResponse> {
    return this.request("ModifyInstanceNetwork", req, cb)
  }

  /**
   * 新增/修改实例维护时间窗口配置
   */
  async ModifyMaintenanceWindow(
    req: ModifyMaintenanceWindowRequest,
    cb?: (error: string, rep: ModifyMaintenanceWindowResponse) => void
  ): Promise<ModifyMaintenanceWindowResponse> {
    return this.request("ModifyMaintenanceWindow", req, cb)
  }

  /**
   * 本接口（CancelIsolateDBInstances）提供批量解除隔离实例功能
   */
  async CancelIsolateDBInstances(
    req: CancelIsolateDBInstancesRequest,
    cb?: (error: string, rep: CancelIsolateDBInstancesResponse) => void
  ): Promise<CancelIsolateDBInstancesResponse> {
    return this.request("CancelIsolateDBInstances", req, cb)
  }

  /**
   * 本接口（DescribeSaleInfo）提供查询可用售卖地域功能
   */
  async DescribeSaleInfo(
    req: DescribeSaleInfoRequest,
    cb?: (error: string, rep: DescribeSaleInfoResponse) => void
  ): Promise<DescribeSaleInfoResponse> {
    return this.request("DescribeSaleInfo", req, cb)
  }

  /**
   * 本接口（CreateCloneInstance）提供创建克隆实例功能
   */
  async CreateCloneInstance(
    req: CreateCloneInstanceRequest,
    cb?: (error: string, rep: CreateCloneInstanceResponse) => void
  ): Promise<CreateCloneInstanceResponse> {
    return this.request("CreateCloneInstance", req, cb)
  }

  /**
   * 本接口（DescribeUsers）提供查询用户列表功能
   */
  async DescribeUsers(
    req: DescribeUsersRequest,
    cb?: (error: string, rep: DescribeUsersResponse) => void
  ): Promise<DescribeUsersResponse> {
    return this.request("DescribeUsers", req, cb)
  }

  /**
   * 本接口(ModifyDBInstanceVPort)修改实例VPC端口
   */
  async ModifyDBInstanceVPort(
    req: ModifyDBInstanceVPortRequest,
    cb?: (error: string, rep: ModifyDBInstanceVPortResponse) => void
  ): Promise<ModifyDBInstanceVPortResponse> {
    return this.request("ModifyDBInstanceVPort", req, cb)
  }

  /**
   * 本接口（ModifyDBParameters）用于修改实例参数。
   */
  async ModifyDBParameters(
    req: ModifyDBParametersRequest,
    cb?: (error: string, rep: ModifyDBParametersResponse) => void
  ): Promise<ModifyDBParametersResponse> {
    return this.request("ModifyDBParameters", req, cb)
  }

  /**
   * 本接口（IsolateDBInstance）提供批量隔离实例功能
   */
  async IsolateDBInstance(
    req: IsolateDBInstanceRequest,
    cb?: (error: string, rep: IsolateDBInstanceResponse) => void
  ): Promise<IsolateDBInstanceResponse> {
    return this.request("IsolateDBInstance", req, cb)
  }

  /**
   * 本接口（ResetUserPassword）提供重置用户密码功能
   */
  async ResetUserPassword(
    req: ResetUserPasswordRequest,
    cb?: (error: string, rep: ResetUserPasswordResponse) => void
  ): Promise<ResetUserPasswordResponse> {
    return this.request("ResetUserPassword", req, cb)
  }

  /**
   * 本接口（DescribeFlow）用于查询异步任务流程状态
   */
  async DescribeFlow(
    req?: DescribeFlowRequest,
    cb?: (error: string, rep: DescribeFlowResponse) => void
  ): Promise<DescribeFlowResponse> {
    return this.request("DescribeFlow", req, cb)
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
   * 本接口（DescribeDBParameters）用于获取实例的当前参数设置。
   */
  async DescribeDBParameters(
    req: DescribeDBParametersRequest,
    cb?: (error: string, rep: DescribeDBParametersResponse) => void
  ): Promise<DescribeDBParametersResponse> {
    return this.request("DescribeDBParameters", req, cb)
  }

  /**
   * 本接口（CreateDBInstances）提供批量创建实例功能
   */
  async CreateDBInstances(
    req: CreateDBInstancesRequest,
    cb?: (error: string, rep: CreateDBInstancesResponse) => void
  ): Promise<CreateDBInstancesResponse> {
    return this.request("CreateDBInstances", req, cb)
  }

  /**
   * 本接口（ModifyInstanceName）提供修改实例名称功能
   */
  async ModifyInstanceName(
    req: ModifyInstanceNameRequest,
    cb?: (error: string, rep: ModifyInstanceNameResponse) => void
  ): Promise<ModifyInstanceNameResponse> {
    return this.request("ModifyInstanceName", req, cb)
  }

  /**
   * 查询实例归档日志列表 DescribeDBSArchiveLogs
   */
  async DescribeDBSArchiveLogs(
    req: DescribeDBSArchiveLogsRequest,
    cb?: (error: string, rep: DescribeDBSArchiveLogsResponse) => void
  ): Promise<DescribeDBSArchiveLogsResponse> {
    return this.request("DescribeDBSArchiveLogs", req, cb)
  }

  /**
   * 本接口（DestroyInstances）提供批量销毁实例功能
   */
  async DestroyInstances(
    req: DestroyInstancesRequest,
    cb?: (error: string, rep: DestroyInstancesResponse) => void
  ): Promise<DestroyInstancesResponse> {
    return this.request("DestroyInstances", req, cb)
  }

  /**
   * 本接口（ModifyAutoRenewFlag）用于修改自动续费标志
   */
  async ModifyAutoRenewFlag(
    req: ModifyAutoRenewFlagRequest,
    cb?: (error: string, rep: ModifyAutoRenewFlagResponse) => void
  ): Promise<ModifyAutoRenewFlagResponse> {
    return this.request("ModifyAutoRenewFlag", req, cb)
  }

  /**
   * 本接口(ModifyPrivileges)修改用户权限
   */
  async ModifyUserPrivileges(
    req: ModifyUserPrivilegesRequest,
    cb?: (error: string, rep: ModifyUserPrivilegesResponse) => void
  ): Promise<ModifyUserPrivilegesResponse> {
    return this.request("ModifyUserPrivileges", req, cb)
  }

  /**
   * 查询实例备份集信息 DescribeDBSBackupSets
   */
  async DescribeDBSBackupSets(
    req: DescribeDBSBackupSetsRequest,
    cb?: (error: string, rep: DescribeDBSBackupSetsResponse) => void
  ): Promise<DescribeDBSBackupSetsResponse> {
    return this.request("DescribeDBSBackupSets", req, cb)
  }

  /**
   * 修改实例备份策略 ModifyDBSBackupPolicy
   */
  async ModifyDBSBackupPolicy(
    req: ModifyDBSBackupPolicyRequest,
    cb?: (error: string, rep: ModifyDBSBackupPolicyResponse) => void
  ): Promise<ModifyDBSBackupPolicyResponse> {
    return this.request("ModifyDBSBackupPolicy", req, cb)
  }

  /**
   * 本接口（DeleteUsers）用于批量删除用户
   */
  async DeleteUsers(
    req: DeleteUsersRequest,
    cb?: (error: string, rep: DeleteUsersResponse) => void
  ): Promise<DeleteUsersResponse> {
    return this.request("DeleteUsers", req, cb)
  }

  /**
   * 查询实例备份空间概览 DescribeDBSBackupStatistics
   */
  async DescribeDBSBackupStatistics(
    req: DescribeDBSBackupStatisticsRequest,
    cb?: (error: string, rep: DescribeDBSBackupStatisticsResponse) => void
  ): Promise<DescribeDBSBackupStatisticsResponse> {
    return this.request("DescribeDBSBackupStatistics", req, cb)
  }

  /**
   * 本接口提供查询慢日志功能
   */
  async DescribeSlowLogs(
    req: DescribeSlowLogsRequest,
    cb?: (error: string, rep: DescribeSlowLogsResponse) => void
  ): Promise<DescribeSlowLogsResponse> {
    return this.request("DescribeSlowLogs", req, cb)
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
   * 本接口（CreateUsers）用于批量创建用户
   */
  async CreateUsers(
    req: CreateUsersRequest,
    cb?: (error: string, rep: CreateUsersResponse) => void
  ): Promise<CreateUsersResponse> {
    return this.request("CreateUsers", req, cb)
  }

  /**
   * 删除实例手工备份 DeleteDBSBackupSets
   */
  async DeleteDBSBackupSets(
    req: DeleteDBSBackupSetsRequest,
    cb?: (error: string, rep: DeleteDBSBackupSetsResponse) => void
  ): Promise<DeleteDBSBackupSetsResponse> {
    return this.request("DeleteDBSBackupSets", req, cb)
  }

  /**
   * 本接口（DescribeInstanceSSLStatus）提供实例SSL状态查询
   */
  async DescribeInstanceSSLStatus(
    req: DescribeInstanceSSLStatusRequest,
    cb?: (error: string, rep: DescribeInstanceSSLStatusResponse) => void
  ): Promise<DescribeInstanceSSLStatusResponse> {
    return this.request("DescribeInstanceSSLStatus", req, cb)
  }

  /**
   * 创建实例手工备份  CreateDBSBackup
   */
  async CreateDBSBackup(
    req: CreateDBSBackupRequest,
    cb?: (error: string, rep: CreateDBSBackupResponse) => void
  ): Promise<CreateDBSBackupResponse> {
    return this.request("CreateDBSBackup", req, cb)
  }

  /**
   * 获取可恢复时间 DescribeDBSAvailableRecoveryTime
   */
  async DescribeDBSAvailableRecoveryTime(
    req: DescribeDBSAvailableRecoveryTimeRequest,
    cb?: (error: string, rep: DescribeDBSAvailableRecoveryTimeResponse) => void
  ): Promise<DescribeDBSAvailableRecoveryTimeResponse> {
    return this.request("DescribeDBSAvailableRecoveryTime", req, cb)
  }

  /**
   * 本接口（DescribeUserPrivileges）提供查询用户的权限功能
   */
  async DescribeUserPrivileges(
    req: DescribeUserPrivilegesRequest,
    cb?: (error: string, rep: DescribeUserPrivilegesResponse) => void
  ): Promise<DescribeUserPrivilegesResponse> {
    return this.request("DescribeUserPrivileges", req, cb)
  }

  /**
   * 本接口（UpgradeInstance）提供纵向扩容实例功能
   */
  async UpgradeInstance(
    req: UpgradeInstanceRequest,
    cb?: (error: string, rep: UpgradeInstanceResponse) => void
  ): Promise<UpgradeInstanceResponse> {
    return this.request("UpgradeInstance", req, cb)
  }

  /**
   * 本接口（DescribeSpecs）提供查询售卖规格功能
   */
  async DescribeSpecs(
    req: DescribeSpecsRequest,
    cb?: (error: string, rep: DescribeSpecsResponse) => void
  ): Promise<DescribeSpecsResponse> {
    return this.request("DescribeSpecs", req, cb)
  }

  /**
   * 查询备份集统计详情 DescribeDBSBackupStatisticsDetail
   */
  async DescribeDBSBackupStatisticsDetail(
    req: DescribeDBSBackupStatisticsDetailRequest,
    cb?: (error: string, rep: DescribeDBSBackupStatisticsDetailResponse) => void
  ): Promise<DescribeDBSBackupStatisticsDetailResponse> {
    return this.request("DescribeDBSBackupStatisticsDetail", req, cb)
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
   * 本接口（DescribeDBInstances）提供查询实例列表功能
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
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
   * 本接口（ExpandInstance）提供横向扩容实例功能
   */
  async ExpandInstance(
    req: ExpandInstanceRequest,
    cb?: (error: string, rep: ExpandInstanceResponse) => void
  ): Promise<ExpandInstanceResponse> {
    return this.request("ExpandInstance", req, cb)
  }

  /**
   * 查询维护时间窗口配置
   */
  async DescribeMaintenanceWindow(
    req: DescribeMaintenanceWindowRequest,
    cb?: (error: string, rep: DescribeMaintenanceWindowResponse) => void
  ): Promise<DescribeMaintenanceWindowResponse> {
    return this.request("DescribeMaintenanceWindow", req, cb)
  }

  /**
   * 修改实例备份备注 ModifyDBSBackupSetComment
   */
  async ModifyDBSBackupSetComment(
    req: ModifyDBSBackupSetCommentRequest,
    cb?: (error: string, rep: ModifyDBSBackupSetCommentResponse) => void
  ): Promise<ModifyDBSBackupSetCommentResponse> {
    return this.request("ModifyDBSBackupSetComment", req, cb)
  }

  /**
   * 本接口（DescribeDBInstanceDetail）提供查询实例详情功能
   */
  async DescribeDBInstanceDetail(
    req: DescribeDBInstanceDetailRequest,
    cb?: (error: string, rep: DescribeDBInstanceDetailResponse) => void
  ): Promise<DescribeDBInstanceDetailResponse> {
    return this.request("DescribeDBInstanceDetail", req, cb)
  }

  /**
   * 查询实例克隆列表 DescribeDBSCloneInstances
   */
  async DescribeDBSCloneInstances(
    req: DescribeDBSCloneInstancesRequest,
    cb?: (error: string, rep: DescribeDBSCloneInstancesResponse) => void
  ): Promise<DescribeDBSCloneInstancesResponse> {
    return this.request("DescribeDBSCloneInstances", req, cb)
  }
}

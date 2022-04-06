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
  DescribeSpecInfoRequest,
  CreateDBInstanceRequest,
  DescribeCurrentOpResponse,
  CreateBackupDBInstanceResponse,
  DBInstancePrice,
  KillOpsRequest,
  InquirePriceRenewDBInstancesRequest,
  DescribeSlowLogsRequest,
  FlushInstanceRouterConfigResponse,
  DescribeSecurityGroupRequest,
  SlowLogPattern,
  AssignProjectResponse,
  DescribeDBInstanceDealResponse,
  OfflineIsolatedDBInstanceResponse,
  IsolateDBInstanceResponse,
  InstanceMultiParam,
  DescribeBackupDownloadTaskResponse,
  FlushInstanceRouterConfigRequest,
  DBInstanceInfo,
  SetAccountUserPrivilegeResponse,
  ModifyDBInstanceNetworkAddressRequest,
  CreateDBInstanceHourResponse,
  Operation,
  SpecItem,
  ModifyDBInstanceNetworkAddressResponse,
  DescribeSlowLogPatternsResponse,
  BackupDownloadTaskStatus,
  DescribeSlowLogsResponse,
  InquirePriceModifyDBInstanceSpecRequest,
  BackupInfo,
  DescribeDBInstancesRequest,
  CurrentOp,
  ModifyDBInstanceSpecRequest,
  Auth,
  ResetDBInstancePasswordRequest,
  InstanceIntegerParam,
  ModifyNetworkAddress,
  DescribeAsyncRequestInfoResponse,
  CreateDBInstanceResponse,
  InstanceTextParam,
  ModifyDBInstanceSecurityGroupRequest,
  DescribeBackupDownloadTaskRequest,
  DescribeClientConnectionsResponse,
  DescribeDBBackupsResponse,
  ModifyDBInstanceSecurityGroupResponse,
  DescribeInstanceParamsRequest,
  InquirePriceCreateDBInstancesResponse,
  DescribeSecurityGroupResponse,
  SecurityGroup,
  DescribeBackupAccessResponse,
  ReplicaSetInfo,
  ResetDBInstancePasswordResponse,
  ClientConnection,
  DescribeDBInstanceDealRequest,
  DescribeAsyncRequestInfoRequest,
  CreateBackupDownloadTaskRequest,
  InquirePriceModifyDBInstanceSpecResponse,
  SecurityGroupBound,
  DescribeCurrentOpRequest,
  BackupDownloadTask,
  DescribeDBBackupsRequest,
  DescribeClientConnectionsRequest,
  ShardInfo,
  DescribeBackupAccessRequest,
  RenameInstanceRequest,
  RenewDBInstancesResponse,
  InstanceEnumParam,
  RenameInstanceResponse,
  CreateBackupDBInstanceRequest,
  SetAccountUserPrivilegeRequest,
  KillOpsResponse,
  IsolateDBInstanceRequest,
  CreateDBInstanceHourRequest,
  BackupFile,
  AssignProjectRequest,
  CreateBackupDownloadTaskResponse,
  SpecificationInfo,
  DescribeSlowLogPatternsRequest,
  DescribeSpecInfoResponse,
  InquirePriceRenewDBInstancesResponse,
  TagInfo,
  DescribeDBInstancesResponse,
  OfflineIsolatedDBInstanceRequest,
  InquirePriceCreateDBInstancesRequest,
  DescribeInstanceParamsResponse,
  InstanceDetail,
  ModifyDBInstanceSpecResponse,
  InstanceChargePrepaid,
  RenewDBInstancesRequest,
} from "./mongodb_models"

/**
 * mongodb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mongodb.tencentcloudapi.com", "2019-07-25", clientConfig)
  }

  /**
   * 本接口（DescribeDBInstanceDeal）用于获取MongoDB购买、续费及变配订单详细。
   */
  async DescribeDBInstanceDeal(
    req: DescribeDBInstanceDealRequest,
    cb?: (error: string, rep: DescribeDBInstanceDealResponse) => void
  ): Promise<DescribeDBInstanceDealResponse> {
    return this.request("DescribeDBInstanceDeal", req, cb)
  }

  /**
   * 本接口(DescribeCurrentOp)用于查询MongoDB云数据库实例的当前正在执行的操作。
   */
  async DescribeCurrentOp(
    req: DescribeCurrentOpRequest,
    cb?: (error: string, rep: DescribeCurrentOpResponse) => void
  ): Promise<DescribeCurrentOpResponse> {
    return this.request("DescribeCurrentOp", req, cb)
  }

  /**
   * 本接口(DescribeClientConnections)用于查询实例客户端连接信息，包括连接IP和连接数量。
   */
  async DescribeClientConnections(
    req: DescribeClientConnectionsRequest,
    cb?: (error: string, rep: DescribeClientConnectionsResponse) => void
  ): Promise<DescribeClientConnectionsResponse> {
    return this.request("DescribeClientConnections", req, cb)
  }

  /**
   * 修改实例用户的密码
   */
  async ResetDBInstancePassword(
    req: ResetDBInstancePasswordRequest,
    cb?: (error: string, rep: ResetDBInstancePasswordResponse) => void
  ): Promise<ResetDBInstancePasswordResponse> {
    return this.request("ResetDBInstancePassword", req, cb)
  }

  /**
   * 查询实例绑定的安全组
   */
  async DescribeSecurityGroup(
    req: DescribeSecurityGroupRequest,
    cb?: (error: string, rep: DescribeSecurityGroupResponse) => void
  ): Promise<DescribeSecurityGroupResponse> {
    return this.request("DescribeSecurityGroup", req, cb)
  }

  /**
   * 账户权限设置。
   */
  async SetAccountUserPrivilege(
    req: SetAccountUserPrivilegeRequest,
    cb?: (error: string, rep: SetAccountUserPrivilegeResponse) => void
  ): Promise<SetAccountUserPrivilegeResponse> {
    return this.request("SetAccountUserPrivilege", req, cb)
  }

  /**
   * 在所有mongos上执行FlushRouterConfig命令
   */
  async FlushInstanceRouterConfig(
    req: FlushInstanceRouterConfigRequest,
    cb?: (error: string, rep: FlushInstanceRouterConfigResponse) => void
  ): Promise<FlushInstanceRouterConfigResponse> {
    return this.request("FlushInstanceRouterConfig", req, cb)
  }

  /**
   * 本接口（DescribeDBBackups）用于查询实例备份列表，目前只支持查询7天内的备份记录。
   */
  async DescribeDBBackups(
    req: DescribeDBBackupsRequest,
    cb?: (error: string, rep: DescribeDBBackupsResponse) => void
  ): Promise<DescribeDBBackupsResponse> {
    return this.request("DescribeDBBackups", req, cb)
  }

  /**
   * 本接口(IsolateDBInstance)用于隔离MongoDB云数据库按量计费实例。隔离后实例保留在回收站中，不能再写入数据。隔离一定时间后，实例会彻底删除，回收站保存时间请参考按量计费的服务条款。在隔离中的按量计费实例无法恢复，请谨慎操作。
   */
  async IsolateDBInstance(
    req: IsolateDBInstanceRequest,
    cb?: (error: string, rep: IsolateDBInstanceResponse) => void
  ): Promise<IsolateDBInstanceResponse> {
    return this.request("IsolateDBInstance", req, cb)
  }

  /**
     * 备份下载功能已调整，此接口即将下线

本接口（DescribeBackupAccess）用于获取备份文件的下载授权，具体的备份文件信息可通过查询实例备份列表（DescribeDBBackups）接口获取
     */
  async DescribeBackupAccess(
    req: DescribeBackupAccessRequest,
    cb?: (error: string, rep: DescribeBackupAccessResponse) => void
  ): Promise<DescribeBackupAccessResponse> {
    return this.request("DescribeBackupAccess", req, cb)
  }

  /**
   * 本接口 (InquirePriceModifyDBInstanceSpec) 用于调整实例的配置询价。
   */
  async InquirePriceModifyDBInstanceSpec(
    req: InquirePriceModifyDBInstanceSpecRequest,
    cb?: (error: string, rep: InquirePriceModifyDBInstanceSpecResponse) => void
  ): Promise<InquirePriceModifyDBInstanceSpecResponse> {
    return this.request("InquirePriceModifyDBInstanceSpec", req, cb)
  }

  /**
   * 查询异步任务状态接口
   */
  async DescribeAsyncRequestInfo(
    req: DescribeAsyncRequestInfoRequest,
    cb?: (error: string, rep: DescribeAsyncRequestInfoResponse) => void
  ): Promise<DescribeAsyncRequestInfoResponse> {
    return this.request("DescribeAsyncRequestInfo", req, cb)
  }

  /**
   * 本接口(ModifyDBInstanceNetworkAddress)用于修改云数据库实例的网络信息，可进行基础网络转VPC网络和VPC网络之间的变换。
   */
  async ModifyDBInstanceNetworkAddress(
    req: ModifyDBInstanceNetworkAddressRequest,
    cb?: (error: string, rep: ModifyDBInstanceNetworkAddressResponse) => void
  ): Promise<ModifyDBInstanceNetworkAddressResponse> {
    return this.request("ModifyDBInstanceNetworkAddress", req, cb)
  }

  /**
   * 本接口(CreateDBInstanceHour)用于创建按量计费的MongoDB云数据库实例。
   */
  async CreateDBInstanceHour(
    req: CreateDBInstanceHourRequest,
    cb?: (error: string, rep: CreateDBInstanceHourResponse) => void
  ): Promise<CreateDBInstanceHourResponse> {
    return this.request("CreateDBInstanceHour", req, cb)
  }

  /**
   * 本接口(RenewDBInstance)用于续费云数据库实例，仅支持付费模式为包年包月的实例。按量计费实例不需要续费。
   */
  async RenewDBInstances(
    req: RenewDBInstancesRequest,
    cb?: (error: string, rep: RenewDBInstancesResponse) => void
  ): Promise<RenewDBInstancesResponse> {
    return this.request("RenewDBInstances", req, cb)
  }

  /**
   * 本接口用来创建某个备份文件的下载任务
   */
  async CreateBackupDownloadTask(
    req: CreateBackupDownloadTaskRequest,
    cb?: (error: string, rep: CreateBackupDownloadTaskResponse) => void
  ): Promise<CreateBackupDownloadTaskResponse> {
    return this.request("CreateBackupDownloadTask", req, cb)
  }

  /**
   * 本接口(DescribeDBInstances)用于查询云数据库实例列表，支持通过项目ID、实例ID、实例状态等过滤条件来筛选实例。支持查询主实例、灾备实例和只读实例信息列表。
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
  }

  /**
   * 本接口(OfflineIsolatedDBInstance)用于立即下线隔离状态的云数据库实例。进行操作的实例状态必须为隔离状态。
   */
  async OfflineIsolatedDBInstance(
    req: OfflineIsolatedDBInstanceRequest,
    cb?: (error: string, rep: OfflineIsolatedDBInstanceResponse) => void
  ): Promise<OfflineIsolatedDBInstanceResponse> {
    return this.request("OfflineIsolatedDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeSlowLogPatterns）用于获取数据库实例慢日志的统计信息。
   */
  async DescribeSlowLogPatterns(
    req: DescribeSlowLogPatternsRequest,
    cb?: (error: string, rep: DescribeSlowLogPatternsResponse) => void
  ): Promise<DescribeSlowLogPatternsResponse> {
    return this.request("DescribeSlowLogPatterns", req, cb)
  }

  /**
   * 本接口（DescribeSlowLogs）用于获取云数据库慢日志信息。接口只支持查询最近7天内慢日志。
   */
  async DescribeSlowLogs(
    req: DescribeSlowLogsRequest,
    cb?: (error: string, rep: DescribeSlowLogsResponse) => void
  ): Promise<DescribeSlowLogsResponse> {
    return this.request("DescribeSlowLogs", req, cb)
  }

  /**
   * 本接口(CreateDBInstance)用于创建包年包月的MongoDB云数据库实例。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
   */
  async CreateDBInstance(
    req: CreateDBInstanceRequest,
    cb?: (error: string, rep: CreateDBInstanceResponse) => void
  ): Promise<CreateDBInstanceResponse> {
    return this.request("CreateDBInstance", req, cb)
  }

  /**
   * 本接口(ModifyDBInstanceSpec)用于调整MongoDB云数据库实例配置。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
   */
  async ModifyDBInstanceSpec(
    req: ModifyDBInstanceSpecRequest,
    cb?: (error: string, rep: ModifyDBInstanceSpecResponse) => void
  ): Promise<ModifyDBInstanceSpecResponse> {
    return this.request("ModifyDBInstanceSpec", req, cb)
  }

  /**
   * 本接口(DescribeInstanceParams)用于查询当前实例可修改的参数列表。
   */
  async DescribeInstanceParams(
    req: DescribeInstanceParamsRequest,
    cb?: (error: string, rep: DescribeInstanceParamsResponse) => void
  ): Promise<DescribeInstanceParamsResponse> {
    return this.request("DescribeInstanceParams", req, cb)
  }

  /**
   * 本接口(DescribeSpecInfo)用于查询实例的售卖规格。
   */
  async DescribeSpecInfo(
    req: DescribeSpecInfoRequest,
    cb?: (error: string, rep: DescribeSpecInfoResponse) => void
  ): Promise<DescribeSpecInfoResponse> {
    return this.request("DescribeSpecInfo", req, cb)
  }

  /**
   * 查询备份下载任务信息
   */
  async DescribeBackupDownloadTask(
    req: DescribeBackupDownloadTaskRequest,
    cb?: (error: string, rep: DescribeBackupDownloadTaskResponse) => void
  ): Promise<DescribeBackupDownloadTaskResponse> {
    return this.request("DescribeBackupDownloadTask", req, cb)
  }

  /**
   * 本接口用于创建数据库实例询价。本接口参数中必须传入region参数，否则无法通过校验。本接口仅允许针对购买限制范围内的实例配置进行询价。
   */
  async InquirePriceCreateDBInstances(
    req: InquirePriceCreateDBInstancesRequest,
    cb?: (error: string, rep: InquirePriceCreateDBInstancesResponse) => void
  ): Promise<InquirePriceCreateDBInstancesResponse> {
    return this.request("InquirePriceCreateDBInstances", req, cb)
  }

  /**
     * 本接口(AssignProject)用于指定云数据库实例的所属项目。

     */
  async AssignProject(
    req: AssignProjectRequest,
    cb?: (error: string, rep: AssignProjectResponse) => void
  ): Promise<AssignProjectResponse> {
    return this.request("AssignProject", req, cb)
  }

  /**
   * 本接口(RenameInstance)用于修改云数据库实例的名称。
   */
  async RenameInstance(
    req: RenameInstanceRequest,
    cb?: (error: string, rep: RenameInstanceResponse) => void
  ): Promise<RenameInstanceResponse> {
    return this.request("RenameInstance", req, cb)
  }

  /**
   * 本接口(KillOps)用于终止MongoDB云数据库实例上执行的特定操作。
   */
  async KillOps(
    req: KillOpsRequest,
    cb?: (error: string, rep: KillOpsResponse) => void
  ): Promise<KillOpsResponse> {
    return this.request("KillOps", req, cb)
  }

  /**
   * 备份实例接口
   */
  async CreateBackupDBInstance(
    req: CreateBackupDBInstanceRequest,
    cb?: (error: string, rep: CreateBackupDBInstanceResponse) => void
  ): Promise<CreateBackupDBInstanceResponse> {
    return this.request("CreateBackupDBInstance", req, cb)
  }

  /**
   * 本接口 (InquiryPriceRenewDBInstances) 用于续费包年包月实例询价。
   */
  async InquirePriceRenewDBInstances(
    req: InquirePriceRenewDBInstancesRequest,
    cb?: (error: string, rep: InquirePriceRenewDBInstancesResponse) => void
  ): Promise<InquirePriceRenewDBInstancesResponse> {
    return this.request("InquirePriceRenewDBInstances", req, cb)
  }

  /**
   * 修改实例绑定的安全组
   */
  async ModifyDBInstanceSecurityGroup(
    req: ModifyDBInstanceSecurityGroupRequest,
    cb?: (error: string, rep: ModifyDBInstanceSecurityGroupResponse) => void
  ): Promise<ModifyDBInstanceSecurityGroupResponse> {
    return this.request("ModifyDBInstanceSecurityGroup", req, cb)
  }
}

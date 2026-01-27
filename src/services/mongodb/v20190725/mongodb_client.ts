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
  DescribeSpecInfoRequest,
  CreateDBInstanceRequest,
  CreateDBInstanceParamTplResponse,
  DescribeAccountUsersRequest,
  DescribeDBInstanceParamTplRequest,
  CreateBackupDBInstanceResponse,
  DBInstancePrice,
  TerminateDBInstancesRequest,
  KillOpsRequest,
  DropDBInstanceParamTplResponse,
  DeleteLogDownloadTaskResponse,
  DescribeDBInstanceNamespaceResponse,
  DescribeSlowLogsRequest,
  FlushInstanceRouterConfigResponse,
  DescribeCurrentOpResponse,
  SetDBInstanceDeletionProtectionRequest,
  InstanceMultiParam,
  DescribeSRVConnectionDomainResponse,
  ModifyInstanceParamsResponse,
  SetInstanceMaintenanceResponse,
  DescribeInstanceSSLRequest,
  EnableTransparentDataEncryptionRequest,
  DescribeBackupRulesResponse,
  SlowLogPattern,
  Task,
  ModifySRVConnectionUrlResponse,
  AssignProjectResponse,
  AuditLogFilter,
  DescribeDBInstanceDealResponse,
  DescribeAuditInstanceListResponse,
  OfflineIsolatedDBInstanceResponse,
  IsolateDBInstanceResponse,
  CreateDBInstanceParamTplRequest,
  DisableSRVConnectionUrlResponse,
  DescribeSecurityGroupRequest,
  RenameInstanceRequest,
  DescribeBackupRulesRequest,
  DescribeBackupDownloadTaskResponse,
  AddNodeList,
  FlushInstanceRouterConfigRequest,
  DBInstanceInfo,
  ParamType,
  SetAccountUserPrivilegeResponse,
  FlashbackDatabase,
  ModifyDBInstanceNetworkAddressRequest,
  CreateDBInstanceHourResponse,
  InstanceEnableSSLRequest,
  DescribeDBInstanceNamespaceRequest,
  DescribeDBInstanceNodePropertyRequest,
  LogInfo,
  DeleteAccountUserRequest,
  SpecItem,
  LogFilter,
  DescribeDetailedSlowLogsRequest,
  UpgradeDbInstanceVersionRequest,
  ModifyDBInstanceNetworkAddressResponse,
  DeleteAuditLogFileResponse,
  CreateAccountUserResponse,
  DescribeSlowLogPatternsResponse,
  BackupDownloadTaskStatus,
  DescribeSlowLogsResponse,
  InquirePriceModifyDBInstanceSpecRequest,
  BackupInfo,
  DescribeDBInstancesRequest,
  InstanceEnableSSLResponse,
  CurrentOp,
  ModifyDBInstanceSpecRequest,
  DescribeLogDownloadTasksRequest,
  Auth,
  FlashBackDBInstanceRequest,
  TerminateDBInstancesResponse,
  ResetDBInstancePasswordRequest,
  CreateAuditLogFileResponse,
  AuditInstance,
  InstanceIntegerParam,
  ModifyNetworkAddress,
  EnableSRVConnectionUrlResponse,
  DescribeAsyncRequestInfoResponse,
  CreateDBInstanceResponse,
  CreateLogDownloadTaskRequest,
  OpenAuditServiceRequest,
  CreateAccountUserRequest,
  InstanceTextParam,
  ModifyDBInstanceSecurityGroupRequest,
  DescribeAccountUsersResponse,
  InquirePriceRenewDBInstancesRequest,
  DescribeBackupDownloadTaskRequest,
  ModifySRVConnectionUrlRequest,
  DescribeClientConnectionsResponse,
  DisableSRVConnectionUrlRequest,
  ModifyDBInstanceParamTplResponse,
  DescribeSRVConnectionDomainRequest,
  DescribeDBBackupsResponse,
  ModifyDBInstanceSecurityGroupResponse,
  UserInfo,
  DescribeInstanceParamsRequest,
  NodeTag,
  InquirePriceCreateDBInstancesResponse,
  DescribeSecurityGroupResponse,
  DescribeTransparentDataEncryptionStatusRequest,
  SecurityGroup,
  ReplicaSetInfo,
  ResetDBInstancePasswordResponse,
  ClientConnection,
  ReplicateSetInfo,
  DescribeDBInstanceDealRequest,
  UpgradeDBInstanceKernelVersionResponse,
  DescribeAsyncRequestInfoRequest,
  FBKeyValue,
  CreateBackupDownloadTaskRequest,
  ParamTpl,
  InquirePriceModifyDBInstanceSpecResponse,
  SecurityGroupBound,
  DescribeDBInstanceNodePropertyResponse,
  InstanceInfo,
  DescribeDBInstanceParamTplDetailResponse,
  DescribeMongodbLogsResponse,
  DeliverSummary,
  DescribeInstanceSSLResponse,
  ModifyDBInstanceParamTplRequest,
  DescribeCurrentOpRequest,
  BackupDownloadTask,
  DescribeDBBackupsRequest,
  DescribeClientConnectionsRequest,
  SetDBInstanceDeletionProtectionResponse,
  DescribeDetailedSlowLogsResponse,
  ShardInfo,
  SetBackupRulesResponse,
  ModifyAuditServiceRequest,
  EnableSRVConnectionUrlRequest,
  RenewDBInstancesResponse,
  InstanceEnumParam,
  FlashBackDBInstanceResponse,
  RenameInstanceResponse,
  DropDBInstanceParamTplRequest,
  DescribeTransparentDataEncryptionStatusResponse,
  OpenAuditServiceResponse,
  CreateBackupDBInstanceRequest,
  SetAccountUserPrivilegeRequest,
  UpgradeDbInstanceVersionResponse,
  DescribeAuditInstanceListRequest,
  NodeProperty,
  KillOpsResponse,
  IsolateDBInstanceRequest,
  CreateDBInstanceHourRequest,
  EnableTransparentDataEncryptionResponse,
  SetBackupRulesRequest,
  AssignProjectRequest,
  DescribeMongodbLogsRequest,
  CreateBackupDownloadTaskResponse,
  CreateLogDownloadTaskResponse,
  ModifyInstanceParamsRequest,
  DbURL,
  DeleteLogDownloadTaskRequest,
  SpecificationInfo,
  CreateAuditLogFileRequest,
  DeleteAuditLogFileRequest,
  FlashbackCollection,
  DescribeSpecInfoResponse,
  InquirePriceRenewDBInstancesResponse,
  TagInfo,
  DeleteAccountUserResponse,
  DescribeDBInstancesResponse,
  OfflineIsolatedDBInstanceRequest,
  KMSInfoDetail,
  InquirePriceCreateDBInstancesRequest,
  Operation,
  DescribeInstanceParamsResponse,
  DescribeDBInstanceParamTplResponse,
  ModifyDBInstanceSpecResponse,
  DescribeDBInstanceURLResponse,
  RemoveNodeList,
  DescribeLogDownloadTasksResponse,
  SlowLogItem,
  RestartNodesRequest,
  ModifyAuditServiceResponse,
  SetInstanceMaintenanceRequest,
  RestartNodesResponse,
  DescribeDBInstanceURLRequest,
  DescribeDBInstanceParamTplDetailRequest,
  InstanceDetail,
  DescribeSlowLogPatternsRequest,
  Filters,
  InstanceChargePrepaid,
  RenewDBInstancesRequest,
  UpgradeDBInstanceKernelVersionRequest,
  ModifyMongoDBParamType,
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
   * 本接口（TerminateDBInstances）用于退还包年包月计费实例。
   */
  async TerminateDBInstances(
    req: TerminateDBInstancesRequest,
    cb?: (error: string, rep: TerminateDBInstancesResponse) => void
  ): Promise<TerminateDBInstancesResponse> {
    return this.request("TerminateDBInstances", req, cb)
  }

  /**
   * 本接口（DescribeDBInstanceURL）用于获取指定实例的 URI 形式的连接串访问地址示例。
   */
  async DescribeDBInstanceURL(
    req: DescribeDBInstanceURLRequest,
    cb?: (error: string, rep: DescribeDBInstanceURLResponse) => void
  ): Promise<DescribeDBInstanceURLResponse> {
    return this.request("DescribeDBInstanceURL", req, cb)
  }

  /**
   * 创建日志下载任务
   */
  async CreateLogDownloadTask(
    req: CreateLogDownloadTaskRequest,
    cb?: (error: string, rep: CreateLogDownloadTaskResponse) => void
  ): Promise<CreateLogDownloadTaskResponse> {
    return this.request("CreateLogDownloadTask", req, cb)
  }

  /**
   * 本接口用于查询节点的属性，包括节点所在可用区、节点名称、地址、角色、状态、主从延迟、优先级、投票权、标签等属性。
   */
  async DescribeDBInstanceNodeProperty(
    req: DescribeDBInstanceNodePropertyRequest,
    cb?: (error: string, rep: DescribeDBInstanceNodePropertyResponse) => void
  ): Promise<DescribeDBInstanceNodePropertyResponse> {
    return this.request("DescribeDBInstanceNodeProperty", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceNetworkAddress）用于修改云数据库实例的网络信息，支持基础网络切换为私有网络、私有网络切换私有网络。
   */
  async ModifyDBInstanceNetworkAddress(
    req: ModifyDBInstanceNetworkAddressRequest,
    cb?: (error: string, rep: ModifyDBInstanceNetworkAddressResponse) => void
  ): Promise<ModifyDBInstanceNetworkAddressResponse> {
    return this.request("ModifyDBInstanceNetworkAddress", req, cb)
  }

  /**
   * 本接口(DescribeDBInstanceParamTpl )用于查询当前账号下所有MongoDB数据库参数模板
   **说明：DescribeDBInstanceParamTpl  API正在公测中，在此期间，该接口仅对公测用户开放**
   */
  async DescribeDBInstanceParamTpl(
    req: DescribeDBInstanceParamTplRequest,
    cb?: (error: string, rep: DescribeDBInstanceParamTplResponse) => void
  ): Promise<DescribeDBInstanceParamTplResponse> {
    return this.request("DescribeDBInstanceParamTpl", req, cb)
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
   * 本接口（DescribeCurrentOp）用于查询云数据库实例的当前正在执行的操作。
   */
  async DescribeCurrentOp(
    req: DescribeCurrentOpRequest,
    cb?: (error: string, rep: DescribeCurrentOpResponse) => void
  ): Promise<DescribeCurrentOpResponse> {
    return this.request("DescribeCurrentOp", req, cb)
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
   * 本接口（DescribeClientConnections）用于查询实例客户端连接信息，包括连接 IP 和连接数量。
   */
  async DescribeClientConnections(
    req: DescribeClientConnectionsRequest,
    cb?: (error: string, rep: DescribeClientConnectionsResponse) => void
  ): Promise<DescribeClientConnectionsResponse> {
    return this.request("DescribeClientConnections", req, cb)
  }

  /**
   * 本接口（ResetDBInstancePassword）用于重置实例访问密码。
   */
  async ResetDBInstancePassword(
    req: ResetDBInstancePasswordRequest,
    cb?: (error: string, rep: ResetDBInstancePasswordResponse) => void
  ): Promise<ResetDBInstancePasswordResponse> {
    return this.request("ResetDBInstancePassword", req, cb)
  }

  /**
   * 本接口（DescribeSecurityGroup）用于查询实例绑定的安全组。
   */
  async DescribeSecurityGroup(
    req: DescribeSecurityGroupRequest,
    cb?: (error: string, rep: DescribeSecurityGroupResponse) => void
  ): Promise<DescribeSecurityGroupResponse> {
    return this.request("DescribeSecurityGroup", req, cb)
  }

  /**
   * 本接口（SetAccountUserPrivilege）用于设置实例的账号权限。
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
   * 删除日志下载任务
   */
  async DeleteLogDownloadTask(
    req: DeleteLogDownloadTaskRequest,
    cb?: (error: string, rep: DeleteLogDownloadTaskResponse) => void
  ): Promise<DeleteLogDownloadTaskResponse> {
    return this.request("DeleteLogDownloadTask", req, cb)
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
   * 该接口用于发起按 Key 闪回任务，依据数据的闪回 Key（默认为 id）对数据进行极速回档，快速恢复业务。
   **说明：按 Key 闪回于2023年09月11日正式进行公测，在此期间，该接口仅对公测用户开放。**
   */
  async FlashBackDBInstance(
    req: FlashBackDBInstanceRequest,
    cb?: (error: string, rep: FlashBackDBInstanceResponse) => void
  ): Promise<FlashBackDBInstanceResponse> {
    return this.request("FlashBackDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeAuditInstanceList）用于查询开通或未开通数据库审计的实例列表。
   */
  async DescribeAuditInstanceList(
    req: DescribeAuditInstanceListRequest,
    cb?: (error: string, rep: DescribeAuditInstanceListResponse) => void
  ): Promise<DescribeAuditInstanceListResponse> {
    return this.request("DescribeAuditInstanceList", req, cb)
  }

  /**
   * 本接口（DescribeDetailedSlowLogs）用于查询实例慢日志详情。
   */
  async DescribeDetailedSlowLogs(
    req: DescribeDetailedSlowLogsRequest,
    cb?: (error: string, rep: DescribeDetailedSlowLogsResponse) => void
  ): Promise<DescribeDetailedSlowLogsResponse> {
    return this.request("DescribeDetailedSlowLogs", req, cb)
  }

  /**
   * 本接口（InstanceEnableSSL）用于设置实例SSL状态。
   */
  async InstanceEnableSSL(
    req: InstanceEnableSSLRequest,
    cb?: (error: string, rep: InstanceEnableSSLResponse) => void
  ): Promise<InstanceEnableSSLResponse> {
    return this.request("InstanceEnableSSL", req, cb)
  }

  /**
   * 本接口 (InquirePriceModifyDBInstanceSpec) 用于查询实例配置变更后的价格。
   */
  async InquirePriceModifyDBInstanceSpec(
    req: InquirePriceModifyDBInstanceSpecRequest,
    cb?: (error: string, rep: InquirePriceModifyDBInstanceSpecResponse) => void
  ): Promise<InquirePriceModifyDBInstanceSpecResponse> {
    return this.request("InquirePriceModifyDBInstanceSpec", req, cb)
  }

  /**
   * 日志下载任务查询
   */
  async DescribeLogDownloadTasks(
    req: DescribeLogDownloadTasksRequest,
    cb?: (error: string, rep: DescribeLogDownloadTasksResponse) => void
  ): Promise<DescribeLogDownloadTasksResponse> {
    return this.request("DescribeLogDownloadTasks", req, cb)
  }

  /**
   * 本接口（RestartNodes）用于批量重启数据库节点。
   */
  async RestartNodes(
    req: RestartNodesRequest,
    cb?: (error: string, rep: RestartNodesResponse) => void
  ): Promise<RestartNodesResponse> {
    return this.request("RestartNodes", req, cb)
  }

  /**
   * 本接口（DescribeBackupRules）用于获取实例自动备份配置信息。
   */
  async DescribeBackupRules(
    req: DescribeBackupRulesRequest,
    cb?: (error: string, rep: DescribeBackupRulesResponse) => void
  ): Promise<DescribeBackupRulesResponse> {
    return this.request("DescribeBackupRules", req, cb)
  }

  /**
   * 本接口（ModifyInstanceParams）用于修改mongoDB实例的参数配置。
   */
  async ModifyInstanceParams(
    req: ModifyInstanceParamsRequest,
    cb?: (error: string, rep: ModifyInstanceParamsResponse) => void
  ): Promise<ModifyInstanceParamsResponse> {
    return this.request("ModifyInstanceParams", req, cb)
  }

  /**
   * 本接口（DescribeAsyncRequestInfo）用于查询异步任务状态接口。
   */
  async DescribeAsyncRequestInfo(
    req: DescribeAsyncRequestInfoRequest,
    cb?: (error: string, rep: DescribeAsyncRequestInfoResponse) => void
  ): Promise<DescribeAsyncRequestInfoResponse> {
    return this.request("DescribeAsyncRequestInfo", req, cb)
  }

  /**
   * 本接口（CreateAccountUser）用于自定义实例访问账号。
   */
  async CreateAccountUser(
    req: CreateAccountUserRequest,
    cb?: (error: string, rep: CreateAccountUserResponse) => void
  ): Promise<CreateAccountUserResponse> {
    return this.request("CreateAccountUser", req, cb)
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
   * 本接口(ModifyDBInstanceParamTpl )用于修改MongoDB云数据库实例的参数模板。
   **说明：ModifyDBInstanceParamTpl  API正在公测中，在此期间，该接口仅对公测用户开放**
   */
  async ModifyDBInstanceParamTpl(
    req: ModifyDBInstanceParamTplRequest,
    cb?: (error: string, rep: ModifyDBInstanceParamTplResponse) => void
  ): Promise<ModifyDBInstanceParamTplResponse> {
    return this.request("ModifyDBInstanceParamTpl", req, cb)
  }

  /**
   * 本接口（CreateDBInstanceHour）用于创建按量计费的MongoDB云数据库实例。
   */
  async CreateDBInstanceHour(
    req: CreateDBInstanceHourRequest,
    cb?: (error: string, rep: CreateDBInstanceHourResponse) => void
  ): Promise<CreateDBInstanceHourResponse> {
    return this.request("CreateDBInstanceHour", req, cb)
  }

  /**
   * 本接口(CreateDBInstanceParamTpl)用于创建云数据库MongoDB实例的参数模板
   **说明：CreateDBInstanceParamTpl API正在公测中，在此期间，该接口仅对公测用户开放**
   */
  async CreateDBInstanceParamTpl(
    req: CreateDBInstanceParamTplRequest,
    cb?: (error: string, rep: CreateDBInstanceParamTplResponse) => void
  ): Promise<CreateDBInstanceParamTplResponse> {
    return this.request("CreateDBInstanceParamTpl", req, cb)
  }

  /**
   * 本接口(DropDBInstanceParamTpl )用于删除云数据库MongoDB实例的参数模板
   **说明：DropDBInstanceParamTpl  API正在公测中，在此期间，该接口仅对公测用户开放**
   */
  async DropDBInstanceParamTpl(
    req: DropDBInstanceParamTplRequest,
    cb?: (error: string, rep: DropDBInstanceParamTplResponse) => void
  ): Promise<DropDBInstanceParamTplResponse> {
    return this.request("DropDBInstanceParamTpl", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceSpec）用于调整MongoDB云数据库实例配置。接口支持的售卖规格，可从查询云数据库的售卖规格（[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)）获取。
   */
  async ModifyDBInstanceSpec(
    req: ModifyDBInstanceSpecRequest,
    cb?: (error: string, rep: ModifyDBInstanceSpecResponse) => void
  ): Promise<ModifyDBInstanceSpecResponse> {
    return this.request("ModifyDBInstanceSpec", req, cb)
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
   * 本接口（DescribeSRVConnectionDomain）用于查询MongoDB数据库当前的域名信息。
   */
  async DescribeSRVConnectionDomain(
    req: DescribeSRVConnectionDomainRequest,
    cb?: (error: string, rep: DescribeSRVConnectionDomainResponse) => void
  ): Promise<DescribeSRVConnectionDomainResponse> {
    return this.request("DescribeSRVConnectionDomain", req, cb)
  }

  /**
   * 本接口(ModifyAuditService)用于修改云数据库审计策略的服务配置，包括审计日志保存时长等。
   */
  async ModifyAuditService(
    req: ModifyAuditServiceRequest,
    cb?: (error: string, rep: ModifyAuditServiceResponse) => void
  ): Promise<ModifyAuditServiceResponse> {
    return this.request("ModifyAuditService", req, cb)
  }

  /**
   * 本接口（DescribeDBInstances）用于查询云数据库实例列表，支持通过项目ID、实例ID、实例状态等过滤条件来筛选主实例、灾备实例和只读实例信息列表。
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
  }

  /**
   * 本接口（DescribeDBInstanceNamespace）用于查询数据库的表信息。
   */
  async DescribeDBInstanceNamespace(
    req: DescribeDBInstanceNamespaceRequest,
    cb?: (error: string, rep: DescribeDBInstanceNamespaceResponse) => void
  ): Promise<DescribeDBInstanceNamespaceResponse> {
    return this.request("DescribeDBInstanceNamespace", req, cb)
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
   * 本接口(RenameInstance)用于修改云数据库实例的名称。
   */
  async RenameInstance(
    req: RenameInstanceRequest,
    cb?: (error: string, rep: RenameInstanceResponse) => void
  ): Promise<RenameInstanceResponse> {
    return this.request("RenameInstance", req, cb)
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
   * 本接口(UpgradeDBInstanceKernelVersion)用于升级数据库实例内核版本。
   */
  async UpgradeDBInstanceKernelVersion(
    req: UpgradeDBInstanceKernelVersionRequest,
    cb?: (error: string, rep: UpgradeDBInstanceKernelVersionResponse) => void
  ): Promise<UpgradeDBInstanceKernelVersionResponse> {
    return this.request("UpgradeDBInstanceKernelVersion", req, cb)
  }

  /**
   * 该接口（DescribeMongodbLogs）用于查询运行日志。
   */
  async DescribeMongodbLogs(
    req: DescribeMongodbLogsRequest,
    cb?: (error: string, rep: DescribeMongodbLogsResponse) => void
  ): Promise<DescribeMongodbLogsResponse> {
    return this.request("DescribeMongodbLogs", req, cb)
  }

  /**
   * 本接口(CreateDBInstance)用于创建包年包月的MongoDB云数据库实例。接口支持的售卖规格，可通过接口查询 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/35767) 获取。
   */
  async CreateDBInstance(
    req: CreateDBInstanceRequest,
    cb?: (error: string, rep: CreateDBInstanceResponse) => void
  ): Promise<CreateDBInstanceResponse> {
    return this.request("CreateDBInstance", req, cb)
  }

  /**
   * 本接口（IsolateDBInstance）用于隔离 MongoDB 云数据库按量计费实例。隔离后实例保留在回收站中，不能再写入数据。隔离一定时间后，实例会彻底删除，回收站保存时间请参考按量计费的服务条款。已删除的按量计费实例无法恢复，请谨慎操作。
   */
  async IsolateDBInstance(
    req: IsolateDBInstanceRequest,
    cb?: (error: string, rep: IsolateDBInstanceResponse) => void
  ): Promise<IsolateDBInstanceResponse> {
    return this.request("IsolateDBInstance", req, cb)
  }

  /**
   * 本接口（DescribeInstanceParams）用于查询当前实例可修改的参数列表。
   */
  async DescribeInstanceParams(
    req: DescribeInstanceParamsRequest,
    cb?: (error: string, rep: DescribeInstanceParamsResponse) => void
  ): Promise<DescribeInstanceParamsResponse> {
    return this.request("DescribeInstanceParams", req, cb)
  }

  /**
   * 本接口（DisableSRVConnectionUrl）用于关闭MongoDB数据库的SRV访问地址。
   */
  async DisableSRVConnectionUrl(
    req: DisableSRVConnectionUrlRequest,
    cb?: (error: string, rep: DisableSRVConnectionUrlResponse) => void
  ): Promise<DisableSRVConnectionUrlResponse> {
    return this.request("DisableSRVConnectionUrl", req, cb)
  }

  /**
   * 本接口（DescribeSpecInfo）用于查询实例的售卖规格。
   */
  async DescribeSpecInfo(
    req: DescribeSpecInfoRequest,
    cb?: (error: string, rep: DescribeSpecInfoResponse) => void
  ): Promise<DescribeSpecInfoResponse> {
    return this.request("DescribeSpecInfo", req, cb)
  }

  /**
   * 本接口（DescribeBackupDownloadTask）用于查询备份下载任务信息。
   */
  async DescribeBackupDownloadTask(
    req: DescribeBackupDownloadTaskRequest,
    cb?: (error: string, rep: DescribeBackupDownloadTaskResponse) => void
  ): Promise<DescribeBackupDownloadTaskResponse> {
    return this.request("DescribeBackupDownloadTask", req, cb)
  }

  /**
   * 本接口（InquirePriceCreateDBInstances）用于创建数据库实例询价。本接口参数中必须传入region参数，否则无法通过校验。本接口仅允许针对购买限制范围内的实例配置进行询价。
   */
  async InquirePriceCreateDBInstances(
    req: InquirePriceCreateDBInstancesRequest,
    cb?: (error: string, rep: InquirePriceCreateDBInstancesResponse) => void
  ): Promise<InquirePriceCreateDBInstancesResponse> {
    return this.request("InquirePriceCreateDBInstances", req, cb)
  }

  /**
   * 本接口（SetBackupRules）用于设置 MongoDB 云数据库的自动备份规则。
   */
  async SetBackupRules(
    req: SetBackupRulesRequest,
    cb?: (error: string, rep: SetBackupRulesResponse) => void
  ): Promise<SetBackupRulesResponse> {
    return this.request("SetBackupRules", req, cb)
  }

  /**
   * 查看实例SSL开启状态
   */
  async DescribeInstanceSSL(
    req: DescribeInstanceSSLRequest,
    cb?: (error: string, rep: DescribeInstanceSSLResponse) => void
  ): Promise<DescribeInstanceSSLResponse> {
    return this.request("DescribeInstanceSSL", req, cb)
  }

  /**
   * 本接口（SetDBInstanceDeletionProtection）用于设置实例销毁保护
   */
  async SetDBInstanceDeletionProtection(
    req: SetDBInstanceDeletionProtectionRequest,
    cb?: (error: string, rep: SetDBInstanceDeletionProtectionResponse) => void
  ): Promise<SetDBInstanceDeletionProtectionResponse> {
    return this.request("SetDBInstanceDeletionProtection", req, cb)
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
   * 获取实例透明加密的开启状态
   */
  async DescribeTransparentDataEncryptionStatus(
    req: DescribeTransparentDataEncryptionStatusRequest,
    cb?: (error: string, rep: DescribeTransparentDataEncryptionStatusResponse) => void
  ): Promise<DescribeTransparentDataEncryptionStatusResponse> {
    return this.request("DescribeTransparentDataEncryptionStatus", req, cb)
  }

  /**
   * 本接口用于跨版本升级数据库内核。当前仅支持3.6版本升级为4.0版本、4.0版本升级为4.2版本、4.2版本升级为4.4版本及4.4版本升级为5.0版本。
   */
  async UpgradeDbInstanceVersion(
    req: UpgradeDbInstanceVersionRequest,
    cb?: (error: string, rep: UpgradeDbInstanceVersionResponse) => void
  ): Promise<UpgradeDbInstanceVersionResponse> {
    return this.request("UpgradeDbInstanceVersion", req, cb)
  }

  /**
   * 本接口（DescribeAccountUsers）用于获取当前实例的全部账号。
   */
  async DescribeAccountUsers(
    req: DescribeAccountUsersRequest,
    cb?: (error: string, rep: DescribeAccountUsersResponse) => void
  ): Promise<DescribeAccountUsersResponse> {
    return this.request("DescribeAccountUsers", req, cb)
  }

  /**
   * 本接口（DisableSRVConnectionUrl）用于修改MongoDB数据库的SRV访问地址的TTL时长。
   */
  async ModifySRVConnectionUrl(
    req: ModifySRVConnectionUrlRequest,
    cb?: (error: string, rep: ModifySRVConnectionUrlResponse) => void
  ): Promise<ModifySRVConnectionUrlResponse> {
    return this.request("ModifySRVConnectionUrl", req, cb)
  }

  /**
   * 本接口(OpenAuditService)用于开通云数据库实例的审计。
   */
  async OpenAuditService(
    req: OpenAuditServiceRequest,
    cb?: (error: string, rep: OpenAuditServiceResponse) => void
  ): Promise<OpenAuditServiceResponse> {
    return this.request("OpenAuditService", req, cb)
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
   * 本接口（SetInstanceMaintenance ） 用于设置实例维护时间窗。
   */
  async SetInstanceMaintenance(
    req: SetInstanceMaintenanceRequest,
    cb?: (error: string, rep: SetInstanceMaintenanceResponse) => void
  ): Promise<SetInstanceMaintenanceResponse> {
    return this.request("SetInstanceMaintenance", req, cb)
  }

  /**
   * 本接口（EnableSRVConnectionUrl）用于开启MongoDB数据库的SRV访问地址。
   */
  async EnableSRVConnectionUrl(
    req: EnableSRVConnectionUrlRequest,
    cb?: (error: string, rep: EnableSRVConnectionUrlResponse) => void
  ): Promise<EnableSRVConnectionUrlResponse> {
    return this.request("EnableSRVConnectionUrl", req, cb)
  }

  /**
   * 本接口(DescribeDBInstanceParamTplDetail )用于查询MongoDB云数据库实例的参数模板详情。
   **说明：DescribeDBInstanceParamTplDetail  API正在公测中，在此期间，该接口仅对公测用户开放**
   */
  async DescribeDBInstanceParamTplDetail(
    req: DescribeDBInstanceParamTplDetailRequest,
    cb?: (error: string, rep: DescribeDBInstanceParamTplDetailResponse) => void
  ): Promise<DescribeDBInstanceParamTplDetailResponse> {
    return this.request("DescribeDBInstanceParamTplDetail", req, cb)
  }

  /**
   * 本接口（KillOps）用于终止 MongoDB 云数据库实例上执行的特定操作。
   */
  async KillOps(
    req: KillOpsRequest,
    cb?: (error: string, rep: KillOpsResponse) => void
  ): Promise<KillOpsResponse> {
    return this.request("KillOps", req, cb)
  }

  /**
   * 本接口（EnableTransparentDataEncryption）用于开启云数据库 MongoDB 的透明加密能力。
   */
  async EnableTransparentDataEncryption(
    req: EnableTransparentDataEncryptionRequest,
    cb?: (error: string, rep: EnableTransparentDataEncryptionResponse) => void
  ): Promise<EnableTransparentDataEncryptionResponse> {
    return this.request("EnableTransparentDataEncryption", req, cb)
  }

  /**
   * 本接口（CreateBackupDBInstance）用于备份实例。
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
   * 本接口（DeleteAccountUser）用于删除实例的自定义账号。
   */
  async DeleteAccountUser(
    req: DeleteAccountUserRequest,
    cb?: (error: string, rep: DeleteAccountUserResponse) => void
  ): Promise<DeleteAccountUserResponse> {
    return this.request("DeleteAccountUser", req, cb)
  }

  /**
   * 本接口（ModifyDBInstanceSecurityGroup）用于修改实例绑定的安全组
   */
  async ModifyDBInstanceSecurityGroup(
    req: ModifyDBInstanceSecurityGroupRequest,
    cb?: (error: string, rep: ModifyDBInstanceSecurityGroupResponse) => void
  ): Promise<ModifyDBInstanceSecurityGroupResponse> {
    return this.request("ModifyDBInstanceSecurityGroup", req, cb)
  }
}

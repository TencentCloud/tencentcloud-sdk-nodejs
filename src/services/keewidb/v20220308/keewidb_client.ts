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
  ModifyInstanceParamsResponse,
  ModifyAutoBackupConfigResponse,
  TaskInfoDetail,
  CreateInstancesRequest,
  ModifyNetworkConfigResponse,
  DescribeInstanceBinlogsRequest,
  Inbound,
  AssociateSecurityGroupsRequest,
  DescribeTaskListResponse,
  ModifyInstanceRequest,
  RenewInstanceResponse,
  CreateBackupManuallyResponse,
  DescribeDBSecurityGroupsResponse,
  RedisNodeInfo,
  ModifyAutoBackupConfigRequest,
  ProxyNodeInfo,
  DestroyPostpaidInstanceRequest,
  InstanceProxySlowlogDetail,
  ResetPasswordResponse,
  ClearInstanceRequest,
  RegionConf,
  RenewInstanceRequest,
  CreateBackupManuallyRequest,
  DescribeInstanceParamRecordsResponse,
  InstanceMultiParam,
  DescribeInstanceDealDetailRequest,
  DestroyPrepaidInstanceRequest,
  InstanceIntegerParam,
  InstanceTagInfo,
  DestroyPostpaidInstanceResponse,
  ModifyInstanceResponse,
  NodeInfo,
  ModifyDBInstanceSecurityGroupsResponse,
  DescribeTendisSlowLogResponse,
  DescribeProductInfoResponse,
  BackupInfo,
  DescribeDBSecurityGroupsRequest,
  ChangeInstanceMasterRequest,
  DescribeProjectSecurityGroupsResponse,
  DescribeInstanceBackupsResponse,
  DescribeInstanceReplicasResponse,
  StartUpInstanceResponse,
  InstanceTextParam,
  InstanceParamHistory,
  DescribeInstanceParamRecordsRequest,
  DescribeTaskListRequest,
  CreateInstancesResponse,
  KeeWiDBNode,
  DescribeConnectionConfigResponse,
  BinlogInfo,
  ModifyNetworkConfigRequest,
  DescribeInstanceParamsRequest,
  CleanUpInstanceResponse,
  ModifyDBInstanceSecurityGroupsRequest,
  ZoneCapacityConf,
  Outbound,
  DescribeAutoBackupConfigResponse,
  DescribeProjectSecurityGroupsRequest,
  SecurityGroup,
  StartUpInstanceRequest,
  DescribeMaintenanceWindowResponse,
  ResetPasswordRequest,
  ProductConf,
  ModifyConnectionConfigRequest,
  TradeDealDetail,
  ResourceTag,
  AssociateSecurityGroupsResponse,
  ReplicaGroup,
  InstanceInfo,
  CleanUpInstanceRequest,
  DescribeInstanceDealDetailResponse,
  DescribeInstancesRequest,
  DescribeTaskInfoResponse,
  DescribeAutoBackupConfigRequest,
  InstanceEnumParam,
  UpgradeInstanceResponse,
  DescribeInstancesResponse,
  DescribeTaskInfoRequest,
  ModifyConnectionConfigResponse,
  ModifyMaintenanceWindowResponse,
  DescribeInstanceReplicasRequest,
  DestroyPrepaidInstanceResponse,
  InstanceNodeInfo,
  TendisSlowLogDetail,
  DescribeConnectionConfigRequest,
  ModifyInstanceParamsRequest,
  DescribeInstanceNodeInfoRequest,
  DescribeMaintenanceWindowRequest,
  DescribeTendisSlowLogRequest,
  DescribeProxySlowLogRequest,
  DescribeProxySlowLogResponse,
  DescribeProductInfoRequest,
  DescribeInstanceParamsResponse,
  DisassociateSecurityGroupsRequest,
  ModifyMaintenanceWindowRequest,
  DescribeInstanceBackupsRequest,
  ClearInstanceResponse,
  ChangeInstanceMasterResponse,
  UpgradeInstanceRequest,
  DescribeInstanceNodeInfoResponse,
  InstanceParam,
  DisassociateSecurityGroupsResponse,
  DescribeInstanceBinlogsResponse,
} from "./keewidb_models"

/**
 * keewidb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("keewidb.tencentcloudapi.com", "2022-03-08", clientConfig)
  }

  /**
   * 本接口（DescribeInstanceNodeInfo）查询实例节点信息。
   */
  async DescribeInstanceNodeInfo(
    req: DescribeInstanceNodeInfoRequest,
    cb?: (error: string, rep: DescribeInstanceNodeInfoResponse) => void
  ): Promise<DescribeInstanceNodeInfoResponse> {
    return this.request("DescribeInstanceNodeInfo", req, cb)
  }

  /**
   * 本接口（ModifyMaintenanceWindow）修改实例维护时间窗时间。
   */
  async ModifyMaintenanceWindow(
    req: ModifyMaintenanceWindowRequest,
    cb?: (error: string, rep: ModifyMaintenanceWindowResponse) => void
  ): Promise<ModifyMaintenanceWindowResponse> {
    return this.request("ModifyMaintenanceWindow", req, cb)
  }

  /**
   * 本接口（DescribeTaskList）用于查询任务列表信息。
   */
  async DescribeTaskList(
    req: DescribeTaskListRequest,
    cb?: (error: string, rep: DescribeTaskListResponse) => void
  ): Promise<DescribeTaskListResponse> {
    return this.request("DescribeTaskList", req, cb)
  }

  /**
   * 本接口（CleanUpInstance）用于立即下线回收站已隔离的实例。
   */
  async CleanUpInstance(
    req: CleanUpInstanceRequest,
    cb?: (error: string, rep: CleanUpInstanceResponse) => void
  ): Promise<CleanUpInstanceResponse> {
    return this.request("CleanUpInstance", req, cb)
  }

  /**
   * 本接口（DescribeMaintenanceWindow）用于查询实例维护时间窗。
   */
  async DescribeMaintenanceWindow(
    req: DescribeMaintenanceWindowRequest,
    cb?: (error: string, rep: DescribeMaintenanceWindowResponse) => void
  ): Promise<DescribeMaintenanceWindowResponse> {
    return this.request("DescribeMaintenanceWindow", req, cb)
  }

  /**
   * 本接口（DescribeInstanceBackups）用于查询实例全量备份列表。
   */
  async DescribeInstanceBackups(
    req: DescribeInstanceBackupsRequest,
    cb?: (error: string, rep: DescribeInstanceBackupsResponse) => void
  ): Promise<DescribeInstanceBackupsResponse> {
    return this.request("DescribeInstanceBackups", req, cb)
  }

  /**
   * 本接口（ModifyNetworkConfig）用于修改实例网络配置。
   */
  async ModifyNetworkConfig(
    req: ModifyNetworkConfigRequest,
    cb?: (error: string, rep: ModifyNetworkConfigResponse) => void
  ): Promise<ModifyNetworkConfigResponse> {
    return this.request("ModifyNetworkConfig", req, cb)
  }

  /**
   * 本接口（ModifyAutoBackupConfig）用于修改自动备份配置。
   */
  async ModifyAutoBackupConfig(
    req: ModifyAutoBackupConfigRequest,
    cb?: (error: string, rep: ModifyAutoBackupConfigResponse) => void
  ): Promise<ModifyAutoBackupConfigResponse> {
    return this.request("ModifyAutoBackupConfig", req, cb)
  }

  /**
   * 本接口（ResetPassword）用于重置数据库访问密码。
   */
  async ResetPassword(
    req: ResetPasswordRequest,
    cb?: (error: string, rep: ResetPasswordResponse) => void
  ): Promise<ResetPasswordResponse> {
    return this.request("ResetPassword", req, cb)
  }

  /**
   * 本接口（DescribeInstances）可以根据地域、网络、实例id、标签、计费方式等条件，搜索查询实例列表。
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 本接口（DescribeConnectionConfig）用于查询实例连接配置，包括出流量和入流量带宽、最大连接数限制。
   */
  async DescribeConnectionConfig(
    req: DescribeConnectionConfigRequest,
    cb?: (error: string, rep: DescribeConnectionConfigResponse) => void
  ): Promise<DescribeConnectionConfigResponse> {
    return this.request("DescribeConnectionConfig", req, cb)
  }

  /**
   * 本接口（DescribeInstanceBinlogs）用于查询增量备份列表。
   */
  async DescribeInstanceBinlogs(
    req: DescribeInstanceBinlogsRequest,
    cb?: (error: string, rep: DescribeInstanceBinlogsResponse) => void
  ): Promise<DescribeInstanceBinlogsResponse> {
    return this.request("DescribeInstanceBinlogs", req, cb)
  }

  /**
   * 本接口（DescribeAutoBackupConfig）用于获取自动备份配置。
   */
  async DescribeAutoBackupConfig(
    req: DescribeAutoBackupConfigRequest,
    cb?: (error: string, rep: DescribeAutoBackupConfigResponse) => void
  ): Promise<DescribeAutoBackupConfigResponse> {
    return this.request("DescribeAutoBackupConfig", req, cb)
  }

  /**
   * 本接口（ChangeInstanceMaster）用于将副本节点提升为主节点。
   */
  async ChangeInstanceMaster(
    req: ChangeInstanceMasterRequest,
    cb?: (error: string, rep: ChangeInstanceMasterResponse) => void
  ): Promise<ChangeInstanceMasterResponse> {
    return this.request("ChangeInstanceMaster", req, cb)
  }

  /**
   * 创建数据库实例
   */
  async CreateInstances(
    req: CreateInstancesRequest,
    cb?: (error: string, rep: CreateInstancesResponse) => void
  ): Promise<CreateInstancesResponse> {
    return this.request("CreateInstances", req, cb)
  }

  /**
   * 本接口（RenewInstance）用于为包年包月计费实例续费。
   */
  async RenewInstance(
    req: RenewInstanceRequest,
    cb?: (error: string, rep: RenewInstanceResponse) => void
  ): Promise<RenewInstanceResponse> {
    return this.request("RenewInstance", req, cb)
  }

  /**
   * 本接口（DescribeTaskInfo）用于查询异步任务结果。
   */
  async DescribeTaskInfo(
    req: DescribeTaskInfoRequest,
    cb?: (error: string, rep: DescribeTaskInfoResponse) => void
  ): Promise<DescribeTaskInfoResponse> {
    return this.request("DescribeTaskInfo", req, cb)
  }

  /**
   * 本接口（DescribeProxySlowLog）用于查询代理（Proxy）慢日志。
   */
  async DescribeProxySlowLog(
    req: DescribeProxySlowLogRequest,
    cb?: (error: string, rep: DescribeProxySlowLogResponse) => void
  ): Promise<DescribeProxySlowLogResponse> {
    return this.request("DescribeProxySlowLog", req, cb)
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
   * 本接口（DescribeTendisSlowLog）用于查询实例慢日志。
   */
  async DescribeTendisSlowLog(
    req: DescribeTendisSlowLogRequest,
    cb?: (error: string, rep: DescribeTendisSlowLogResponse) => void
  ): Promise<DescribeTendisSlowLogResponse> {
    return this.request("DescribeTendisSlowLog", req, cb)
  }

  /**
   * 本接口 (AssociateSecurityGroups) 用于安全组批量绑定多个指定实例。
   */
  async AssociateSecurityGroups(
    req: AssociateSecurityGroupsRequest,
    cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void
  ): Promise<AssociateSecurityGroupsResponse> {
    return this.request("AssociateSecurityGroups", req, cb)
  }

  /**
   * 本接口（ModifyInstanceParams）用于修改实例参数配置。
   */
  async ModifyInstanceParams(
    req: ModifyInstanceParamsRequest,
    cb?: (error: string, rep: ModifyInstanceParamsResponse) => void
  ): Promise<ModifyInstanceParamsResponse> {
    return this.request("ModifyInstanceParams", req, cb)
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
   * 本接口（DescribeInstanceParams）用于查询实例的参数列表。
   */
  async DescribeInstanceParams(
    req: DescribeInstanceParamsRequest,
    cb?: (error: string, rep: DescribeInstanceParamsResponse) => void
  ): Promise<DescribeInstanceParamsResponse> {
    return this.request("DescribeInstanceParams", req, cb)
  }

  /**
   * 本接口（DescribeInstanceReplicas）用于获取实例副本节点信息。
   */
  async DescribeInstanceReplicas(
    req: DescribeInstanceReplicasRequest,
    cb?: (error: string, rep: DescribeInstanceReplicasResponse) => void
  ): Promise<DescribeInstanceReplicasResponse> {
    return this.request("DescribeInstanceReplicas", req, cb)
  }

  /**
   * 本接口（ModifyConnectionConfig）用于修改实例的连接配置，包括带宽和最大连接数。
   */
  async ModifyConnectionConfig(
    req: ModifyConnectionConfigRequest,
    cb?: (error: string, rep: ModifyConnectionConfigResponse) => void
  ): Promise<ModifyConnectionConfigResponse> {
    return this.request("ModifyConnectionConfig", req, cb)
  }

  /**
   * 本接口查询指定可用区和实例类型下keewidb 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
   */
  async DescribeProductInfo(
    req?: DescribeProductInfoRequest,
    cb?: (error: string, rep: DescribeProductInfoResponse) => void
  ): Promise<DescribeProductInfoResponse> {
    return this.request("DescribeProductInfo", req, cb)
  }

  /**
   * 本接口（UpgradeInstance）用于对实例进行配置变更。
   */
  async UpgradeInstance(
    req: UpgradeInstanceRequest,
    cb?: (error: string, rep: UpgradeInstanceResponse) => void
  ): Promise<UpgradeInstanceResponse> {
    return this.request("UpgradeInstance", req, cb)
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
   * 手动发起备份
   */
  async CreateBackupManually(
    req: CreateBackupManuallyRequest,
    cb?: (error: string, rep: CreateBackupManuallyResponse) => void
  ): Promise<CreateBackupManuallyResponse> {
    return this.request("CreateBackupManually", req, cb)
  }

  /**
   * 本接口（DestroyPrepaidInstance）用于退还包年包月计费实例。
   */
  async DestroyPrepaidInstance(
    req: DestroyPrepaidInstanceRequest,
    cb?: (error: string, rep: DestroyPrepaidInstanceResponse) => void
  ): Promise<DestroyPrepaidInstanceResponse> {
    return this.request("DestroyPrepaidInstance", req, cb)
  }

  /**
   * 本接口（DescribeInstanceParamRecords）查询参数配置修改历史列表。
   */
  async DescribeInstanceParamRecords(
    req: DescribeInstanceParamRecordsRequest,
    cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void
  ): Promise<DescribeInstanceParamRecordsResponse> {
    return this.request("DescribeInstanceParamRecords", req, cb)
  }

  /**
     * 本接口（ClearInstance）用于清空实例数据。
> **说明**：在清空数据流程中，系统将自动进行数据备份，耗时较长，请您耐心等待并提前做好时间规划。
     */
  async ClearInstance(
    req: ClearInstanceRequest,
    cb?: (error: string, rep: ClearInstanceResponse) => void
  ): Promise<ClearInstanceResponse> {
    return this.request("ClearInstance", req, cb)
  }

  /**
   * 本接口（DescribeInstanceDealDetail）用于查询预付费订单信息。
   */
  async DescribeInstanceDealDetail(
    req: DescribeInstanceDealDetailRequest,
    cb?: (error: string, rep: DescribeInstanceDealDetailResponse) => void
  ): Promise<DescribeInstanceDealDetailResponse> {
    return this.request("DescribeInstanceDealDetail", req, cb)
  }

  /**
   * 本接口（DestroyPostpaidInstance）用于退还按量计费实例。
   */
  async DestroyPostpaidInstance(
    req: DestroyPostpaidInstanceRequest,
    cb?: (error: string, rep: DestroyPostpaidInstanceResponse) => void
  ): Promise<DestroyPostpaidInstanceResponse> {
    return this.request("DestroyPostpaidInstance", req, cb)
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
   * 本接口（ModifyInstance）用于修改实例相关信息。
   */
  async ModifyInstance(
    req: ModifyInstanceRequest,
    cb?: (error: string, rep: ModifyInstanceResponse) => void
  ): Promise<ModifyInstanceResponse> {
    return this.request("ModifyInstance", req, cb)
  }

  /**
   * 本接口（StartUpInstance）用于按量计费实例解隔离
   */
  async StartUpInstance(
    req: StartUpInstanceRequest,
    cb?: (error: string, rep: StartUpInstanceResponse) => void
  ): Promise<StartUpInstanceResponse> {
    return this.request("StartUpInstance", req, cb)
  }
}

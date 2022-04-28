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
  EnableReplicaReadonlyRequest,
  RedisBackupSet,
  DescribeInstanceMonitorTopNCmdResponse,
  ModifyAutoBackupConfigResponse,
  RestoreInstanceRequest,
  AllocateWanAddressRequest,
  ApplyParamsTemplateRequest,
  UpgradeInstanceVersionResponse,
  CreateInstancesRequest,
  CreateReplicationGroupRequest,
  DescribeInstanceZoneInfoRequest,
  ModifyNetworkConfigResponse,
  CommandTake,
  DescribeInstanceMonitorBigKeyResponse,
  Inbound,
  AssociateSecurityGroupsRequest,
  DescribeTaskListResponse,
  ModifyInstanceRequest,
  KillMasterGroupResponse,
  RenewInstanceResponse,
  DescribeSlowLogResponse,
  DescribeCommonDBInstancesRequest,
  DescribeDBSecurityGroupsResponse,
  RestoreInstanceResponse,
  RedisNodeInfo,
  DescribeBackupUrlRequest,
  DeleteParamTemplateResponse,
  DescribeInstancesResponse,
  DescribeInstanceZoneInfoResponse,
  Account,
  InstanceProxySlowlogDetail,
  SecurityGroupsInboundAndOutbound,
  ResetPasswordResponse,
  ClearInstanceRequest,
  RegionConf,
  BigKeyInfo,
  DescribeParamTemplatesRequest,
  RenewInstanceRequest,
  UpgradeVersionToMultiAvailabilityZonesResponse,
  DescribeInstanceParamRecordsResponse,
  ModifyAutoBackupConfigRequest,
  InstanceMultiParam,
  DescribeInstanceDealDetailRequest,
  RedisNode,
  DescribeProjectSecurityGroupRequest,
  ParameterDetail,
  DescribeInstanceShardsResponse,
  DestroyPrepaidInstanceRequest,
  ManualBackupInstanceResponse,
  TaskInfoDetail,
  DisableReplicaReadonlyResponse,
  CreateParamTemplateResponse,
  InstanceTagInfo,
  DescribeInstanceDTSInfoResponse,
  AddReplicationInstanceResponse,
  DestroyPostpaidInstanceResponse,
  SwitchInstanceVipRequest,
  ChangeReplicaToMasterRequest,
  ProxyNodes,
  ModifyInstanceResponse,
  RedisCommonInstanceList,
  SourceInfo,
  ModifyDBInstanceSecurityGroupsResponse,
  DescribeInstanceMonitorHotKeyRequest,
  DescribeInstanceDTSInfoRequest,
  CreateParamTemplateRequest,
  DescribeTendisSlowLogResponse,
  DescribeProductInfoResponse,
  ModifyInstanceAccountRequest,
  ModifyMaintenanceWindowRequest,
  DescribeParamTemplateInfoRequest,
  DescribeBackupUrlResponse,
  InquiryPriceRenewInstanceResponse,
  DescribeDBSecurityGroupsRequest,
  InquiryPriceCreateInstanceResponse,
  InstanceSecurityGroupDetail,
  ResetPasswordRequest,
  ModifyInstanceAccountResponse,
  DelayDistribution,
  DescribeProjectSecurityGroupsResponse,
  DescribeInstanceMonitorTookDistResponse,
  DescribeInstanceBackupsResponse,
  InstanceIntegerParam,
  UpgradeVersionToMultiAvailabilityZonesRequest,
  AllocateWanAddressResponse,
  DescribeInstanceMonitorTookDistRequest,
  DeleteReplicationInstanceRequest,
  KillMasterGroupRequest,
  InstanceTextParam,
  ParamTemplateInfo,
  DescribeInstanceMonitorTopNCmdTookResponse,
  DescribeInstanceMonitorBigKeySizeDistRequest,
  DescribeInstanceAccountRequest,
  DescribeInstanceParamRecordsRequest,
  DescribeTaskListRequest,
  ChangeReplicaToMasterResponse,
  CreateInstancesResponse,
  DescribeTaskInfoRequest,
  ApplyParamsTemplateResponse,
  DescribeReplicationGroupRequest,
  RedisNodes,
  DescribeInstanceMonitorTopNCmdRequest,
  ModifyNetworkConfigRequest,
  DescribeInstanceSecurityGroupRequest,
  InstanceParamHistory,
  DescribeInstanceParamsRequest,
  CleanUpInstanceResponse,
  ModifyDBInstanceSecurityGroupsRequest,
  DescribeParamTemplatesResponse,
  DescribeInstanceShardsRequest,
  Outbound,
  DescribeAutoBackupConfigResponse,
  InquiryPriceUpgradeInstanceRequest,
  ModifyParamTemplateResponse,
  DescribeProjectSecurityGroupsRequest,
  DescribeInstanceMonitorBigKeySizeDistResponse,
  SecurityGroup,
  CreateInstanceAccountRequest,
  EnableReplicaReadonlyResponse,
  DescribeMaintenanceWindowResponse,
  DescribeInstanceSecurityGroupResponse,
  ReleaseWanAddressResponse,
  ProductConf,
  ModifyConnectionConfigRequest,
  InstanceNode,
  TendisNodes,
  StartupInstanceResponse,
  DescribeInstanceDTSInstanceInfo,
  TradeDealDetail,
  ResourceTag,
  AssociateSecurityGroupsResponse,
  ReplicaGroup,
  DescribeTaskInfoResponse,
  DescribeInstanceMonitorBigKeyTypeDistResponse,
  DeleteReplicationInstanceResponse,
  CleanUpInstanceRequest,
  DescribeInstanceDealDetailResponse,
  Groups,
  DescribeInstancesRequest,
  SourceCommand,
  ModfiyInstancePasswordRequest,
  DescribeSlowLogRequest,
  DeleteParamTemplateRequest,
  DescribeAutoBackupConfigRequest,
  DescribeInstanceMonitorSIPResponse,
  DestroyPostpaidInstanceRequest,
  DeleteInstanceAccountRequest,
  UpgradeInstanceResponse,
  ManualBackupInstanceRequest,
  DescribeReplicationGroupResponse,
  ModifyParamTemplateRequest,
  ModfiyInstancePasswordResponse,
  InstanceSet,
  ReleaseWanAddressRequest,
  InquiryPriceRenewInstanceRequest,
  ModifyConnectionConfigResponse,
  ModifyMaintenanceWindowResponse,
  CreateReplicationGroupResponse,
  DescribeInstanceMonitorBigKeyTypeDistRequest,
  DescribeInstanceMonitorTopNCmdTookRequest,
  DestroyPrepaidInstanceResponse,
  DescribeCommonDBInstancesResponse,
  InquiryPriceCreateInstanceRequest,
  ModifyInstanceParamsRequest,
  BackupDownloadInfo,
  BigKeyTypeInfo,
  DescribeInstanceNodeInfoRequest,
  DescribeMaintenanceWindowRequest,
  AddReplicationInstanceRequest,
  InstanceClusterNode,
  DescribeTendisSlowLogRequest,
  DescribeProxySlowLogRequest,
  DescribeProxySlowLogResponse,
  UpgradeInstanceVersionRequest,
  DescribeInstanceAccountResponse,
  DescribeInstanceMonitorBigKeyRequest,
  DisableReplicaReadonlyRequest,
  DescribeParamTemplateInfoResponse,
  DescribeProductInfoRequest,
  SwitchInstanceVipResponse,
  DescribeInstanceParamsResponse,
  DisassociateSecurityGroupsRequest,
  StartupInstanceRequest,
  HotKeyInfo,
  InstanceEnumParam,
  CreateInstanceAccountResponse,
  DescribeInstanceBackupsRequest,
  SecurityGroupDetail,
  InquiryPriceUpgradeInstanceResponse,
  DeleteInstanceAccountResponse,
  DescribeInstanceMonitorSIPRequest,
  InstanceClusterShard,
  TendisSlowLogDetail,
  ZoneCapacityConf,
  UpgradeInstanceRequest,
  DescribeInstanceNodeInfoResponse,
  DescribeProjectSecurityGroupResponse,
  Instances,
  DescribeInstanceMonitorHotKeyResponse,
  InstanceParam,
  DisassociateSecurityGroupsResponse,
  ClearInstanceResponse,
  InstanceSlowlogDetail,
} from "./redis_models"

/**
 * redis client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("redis.tencentcloudapi.com", "2018-04-12", clientConfig)
  }

  /**
   * 启用读写分离
   */
  async EnableReplicaReadonly(
    req: EnableReplicaReadonlyRequest,
    cb?: (error: string, rep: EnableReplicaReadonlyResponse) => void
  ): Promise<EnableReplicaReadonlyResponse> {
    return this.request("EnableReplicaReadonly", req, cb)
  }

  /**
   * 查询复制组
   */
  async DescribeReplicationGroup(
    req: DescribeReplicationGroupRequest,
    cb?: (error: string, rep: DescribeReplicationGroupResponse) => void
  ): Promise<DescribeReplicationGroupResponse> {
    return this.request("DescribeReplicationGroup", req, cb)
  }

  /**
   * 查询实例节点信息
   */
  async DescribeInstanceNodeInfo(
    req: DescribeInstanceNodeInfoRequest,
    cb?: (error: string, rep: DescribeInstanceNodeInfoResponse) => void
  ): Promise<DescribeInstanceNodeInfoResponse> {
    return this.request("DescribeInstanceNodeInfo", req, cb)
  }

  /**
   * 查询实例大Key大小分布
   */
  async DescribeInstanceMonitorBigKeySizeDist(
    req: DescribeInstanceMonitorBigKeySizeDistRequest,
    cb?: (error: string, rep: DescribeInstanceMonitorBigKeySizeDistResponse) => void
  ): Promise<DescribeInstanceMonitorBigKeySizeDistResponse> {
    return this.request("DescribeInstanceMonitorBigKeySizeDist", req, cb)
  }

  /**
   * 创建实例子账号
   */
  async CreateInstanceAccount(
    req: CreateInstanceAccountRequest,
    cb?: (error: string, rep: CreateInstanceAccountResponse) => void
  ): Promise<CreateInstanceAccountResponse> {
    return this.request("CreateInstanceAccount", req, cb)
  }

  /**
   * 修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
   */
  async ModifyMaintenanceWindow(
    req: ModifyMaintenanceWindowRequest,
    cb?: (error: string, rep: ModifyMaintenanceWindowResponse) => void
  ): Promise<ModifyMaintenanceWindowResponse> {
    return this.request("ModifyMaintenanceWindow", req, cb)
  }

  /**
   * 查询参数模板列表
   */
  async DescribeParamTemplates(
    req: DescribeParamTemplatesRequest,
    cb?: (error: string, rep: DescribeParamTemplatesResponse) => void
  ): Promise<DescribeParamTemplatesResponse> {
    return this.request("DescribeParamTemplates", req, cb)
  }

  /**
   * 关闭外网
   */
  async ReleaseWanAddress(
    req: ReleaseWanAddressRequest,
    cb?: (error: string, rep: ReleaseWanAddressResponse) => void
  ): Promise<ReleaseWanAddressResponse> {
    return this.request("ReleaseWanAddress", req, cb)
  }

  /**
   * 查询实例慢查询记录
   */
  async DescribeSlowLog(
    req: DescribeSlowLogRequest,
    cb?: (error: string, rep: DescribeSlowLogResponse) => void
  ): Promise<DescribeSlowLogResponse> {
    return this.request("DescribeSlowLog", req, cb)
  }

  /**
   * 查询任务列表信息
   */
  async DescribeTaskList(
    req: DescribeTaskListRequest,
    cb?: (error: string, rep: DescribeTaskListResponse) => void
  ): Promise<DescribeTaskListResponse> {
    return this.request("DescribeTaskList", req, cb)
  }

  /**
   * 移除复制组成员 注：接口下线中，请使用 RemoveReplicationInstance
   */
  async DeleteReplicationInstance(
    req: DeleteReplicationInstanceRequest,
    cb?: (error: string, rep: DeleteReplicationInstanceResponse) => void
  ): Promise<DeleteReplicationInstanceResponse> {
    return this.request("DeleteReplicationInstance", req, cb)
  }

  /**
   * 回收站实例立即下线
   */
  async CleanUpInstance(
    req: CleanUpInstanceRequest,
    cb?: (error: string, rep: CleanUpInstanceResponse) => void
  ): Promise<CleanUpInstanceResponse> {
    return this.request("CleanUpInstance", req, cb)
  }

  /**
   * 查询参数模板详情。
   */
  async DescribeParamTemplateInfo(
    req: DescribeParamTemplateInfoRequest,
    cb?: (error: string, rep: DescribeParamTemplateInfoResponse) => void
  ): Promise<DescribeParamTemplateInfoResponse> {
    return this.request("DescribeParamTemplateInfo", req, cb)
  }

  /**
   * 查看实例子账号信息
   */
  async DescribeInstanceAccount(
    req: DescribeInstanceAccountRequest,
    cb?: (error: string, rep: DescribeInstanceAccountResponse) => void
  ): Promise<DescribeInstanceAccountResponse> {
    return this.request("DescribeInstanceAccount", req, cb)
  }

  /**
   * 获取备份配置
   */
  async DescribeAutoBackupConfig(
    req: DescribeAutoBackupConfigRequest,
    cb?: (error: string, rep: DescribeAutoBackupConfigResponse) => void
  ): Promise<DescribeAutoBackupConfigResponse> {
    return this.request("DescribeAutoBackupConfig", req, cb)
  }

  /**
   * 查询实例CPU耗时
   */
  async DescribeInstanceMonitorTopNCmdTook(
    req: DescribeInstanceMonitorTopNCmdTookRequest,
    cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdTookResponse) => void
  ): Promise<DescribeInstanceMonitorTopNCmdTookResponse> {
    return this.request("DescribeInstanceMonitorTopNCmdTook", req, cb)
  }

  /**
   * 该接口仅支持多AZ实例副本组提主和单AZ副本提主
   */
  async ChangeReplicaToMaster(
    req: ChangeReplicaToMasterRequest,
    cb?: (error: string, rep: ChangeReplicaToMasterResponse) => void
  ): Promise<ChangeReplicaToMasterResponse> {
    return this.request("ChangeReplicaToMaster", req, cb)
  }

  /**
   * 设置自动备份配置
   */
  async ModifyAutoBackupConfig(
    req: ModifyAutoBackupConfigRequest,
    cb?: (error: string, rep: ModifyAutoBackupConfigResponse) => void
  ): Promise<ModifyAutoBackupConfigResponse> {
    return this.request("ModifyAutoBackupConfig", req, cb)
  }

  /**
   * 获取集群版实例分片信息
   */
  async DescribeInstanceShards(
    req: DescribeInstanceShardsRequest,
    cb?: (error: string, rep: DescribeInstanceShardsResponse) => void
  ): Promise<DescribeInstanceShardsResponse> {
    return this.request("DescribeInstanceShards", req, cb)
  }

  /**
   * 升级实例
   */
  async UpgradeInstance(
    req: UpgradeInstanceRequest,
    cb?: (error: string, rep: UpgradeInstanceResponse) => void
  ): Promise<UpgradeInstanceResponse> {
    return this.request("UpgradeInstance", req, cb)
  }

  /**
   * 恢复 CRS 实例
   */
  async RestoreInstance(
    req: RestoreInstanceRequest,
    cb?: (error: string, rep: RestoreInstanceResponse) => void
  ): Promise<RestoreInstanceResponse> {
    return this.request("RestoreInstance", req, cb)
  }

  /**
   * 查询Redis实例列表
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 删除参数模板
   */
  async DeleteParamTemplate(
    req: DeleteParamTemplateRequest,
    cb?: (error: string, rep: DeleteParamTemplateResponse) => void
  ): Promise<DeleteParamTemplateResponse> {
    return this.request("DeleteParamTemplate", req, cb)
  }

  /**
   * 添加复制组成员
   */
  async AddReplicationInstance(
    req: AddReplicationInstanceRequest,
    cb?: (error: string, rep: AddReplicationInstanceResponse) => void
  ): Promise<AddReplicationInstanceResponse> {
    return this.request("AddReplicationInstance", req, cb)
  }

  /**
   * 查询实例维护时间窗，在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
   */
  async DescribeMaintenanceWindow(
    req: DescribeMaintenanceWindowRequest,
    cb?: (error: string, rep: DescribeMaintenanceWindowResponse) => void
  ): Promise<DescribeMaintenanceWindowResponse> {
    return this.request("DescribeMaintenanceWindow", req, cb)
  }

  /**
   * 查询实例访问命令
   */
  async DescribeInstanceMonitorTopNCmd(
    req: DescribeInstanceMonitorTopNCmdRequest,
    cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdResponse) => void
  ): Promise<DescribeInstanceMonitorTopNCmdResponse> {
    return this.request("DescribeInstanceMonitorTopNCmd", req, cb)
  }

  /**
   * 创建参数模板。
   */
  async CreateParamTemplate(
    req: CreateParamTemplateRequest,
    cb?: (error: string, rep: CreateParamTemplateResponse) => void
  ): Promise<CreateParamTemplateResponse> {
    return this.request("CreateParamTemplate", req, cb)
  }

  /**
   * 禁用读写分离
   */
  async DisableReplicaReadonly(
    req: DisableReplicaReadonlyRequest,
    cb?: (error: string, rep: DisableReplicaReadonlyResponse) => void
  ): Promise<DisableReplicaReadonlyResponse> {
    return this.request("DisableReplicaReadonly", req, cb)
  }

  /**
   * 查询实例DTS信息
   */
  async DescribeInstanceDTSInfo(
    req: DescribeInstanceDTSInfoRequest,
    cb?: (error: string, rep: DescribeInstanceDTSInfoResponse) => void
  ): Promise<DescribeInstanceDTSInfoResponse> {
    return this.request("DescribeInstanceDTSInfo", req, cb)
  }

  /**
   * 修改实例网络配置
   */
  async ModifyNetworkConfig(
    req: ModifyNetworkConfigRequest,
    cb?: (error: string, rep: ModifyNetworkConfigResponse) => void
  ): Promise<ModifyNetworkConfigResponse> {
    return this.request("ModifyNetworkConfig", req, cb)
  }

  /**
   * 创建复制组
   */
  async CreateReplicationGroup(
    req: CreateReplicationGroupRequest,
    cb?: (error: string, rep: CreateReplicationGroupResponse) => void
  ): Promise<CreateReplicationGroupResponse> {
    return this.request("CreateReplicationGroup", req, cb)
  }

  /**
   * 查询实例访问来源信息
   */
  async DescribeInstanceMonitorSIP(
    req: DescribeInstanceMonitorSIPRequest,
    cb?: (error: string, rep: DescribeInstanceMonitorSIPResponse) => void
  ): Promise<DescribeInstanceMonitorSIPResponse> {
    return this.request("DescribeInstanceMonitorSIP", req, cb)
  }

  /**
   * 本接口(CreateInstances)用于创建redis实例。
   */
  async CreateInstances(
    req: CreateInstancesRequest,
    cb?: (error: string, rep: CreateInstancesResponse) => void
  ): Promise<CreateInstancesResponse> {
    return this.request("CreateInstances", req, cb)
  }

  /**
   * 修改实例子账号
   */
  async ModifyInstanceAccount(
    req: ModifyInstanceAccountRequest,
    cb?: (error: string, rep: ModifyInstanceAccountResponse) => void
  ): Promise<ModifyInstanceAccountResponse> {
    return this.request("ModifyInstanceAccount", req, cb)
  }

  /**
   * 将原本实例升级到高版本实例，或者将主从版实例升级到集群版实例
   */
  async UpgradeInstanceVersion(
    req: UpgradeInstanceVersionRequest,
    cb?: (error: string, rep: UpgradeInstanceVersionResponse) => void
  ): Promise<UpgradeInstanceVersionResponse> {
    return this.request("UpgradeInstanceVersion", req, cb)
  }

  /**
   * 查询实例续费价格（包年包月）
   */
  async InquiryPriceRenewInstance(
    req: InquiryPriceRenewInstanceRequest,
    cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void
  ): Promise<InquiryPriceRenewInstanceResponse> {
    return this.request("InquiryPriceRenewInstance", req, cb)
  }

  /**
   * 查询实例扩容价格
   */
  async InquiryPriceUpgradeInstance(
    req: InquiryPriceUpgradeInstanceRequest,
    cb?: (error: string, rep: InquiryPriceUpgradeInstanceResponse) => void
  ): Promise<InquiryPriceUpgradeInstanceResponse> {
    return this.request("InquiryPriceUpgradeInstance", req, cb)
  }

  /**
   * 查询项目安全组信息
   */
  async DescribeProjectSecurityGroup(
    req: DescribeProjectSecurityGroupRequest,
    cb?: (error: string, rep: DescribeProjectSecurityGroupResponse) => void
  ): Promise<DescribeProjectSecurityGroupResponse> {
    return this.request("DescribeProjectSecurityGroup", req, cb)
  }

  /**
   * 查询实例热Key
   */
  async DescribeInstanceMonitorHotKey(
    req: DescribeInstanceMonitorHotKeyRequest,
    cb?: (error: string, rep: DescribeInstanceMonitorHotKeyResponse) => void
  ): Promise<DescribeInstanceMonitorHotKeyResponse> {
    return this.request("DescribeInstanceMonitorHotKey", req, cb)
  }

  /**
   * 用于查询任务结果
   */
  async DescribeTaskInfo(
    req: DescribeTaskInfoRequest,
    cb?: (error: string, rep: DescribeTaskInfoResponse) => void
  ): Promise<DescribeTaskInfoResponse> {
    return this.request("DescribeTaskInfo", req, cb)
  }

  /**
   * 开通外网
   */
  async AllocateWanAddress(
    req: AllocateWanAddressRequest,
    cb?: (error: string, rep: AllocateWanAddressResponse) => void
  ): Promise<AllocateWanAddressResponse> {
    return this.request("AllocateWanAddress", req, cb)
  }

  /**
   * 本接口（DescribeProxySlowLog）用于查询代理慢查询。
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
   * 查询Tendis慢查询
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
   * 本接口(ModifyInstanceParams)用于修改实例参数。
   */
  async ModifyInstanceParams(
    req: ModifyInstanceParamsRequest,
    cb?: (error: string, rep: ModifyInstanceParamsResponse) => void
  ): Promise<ModifyInstanceParamsResponse> {
    return this.request("ModifyInstanceParams", req, cb)
  }

  /**
   * 修改参数模板
   */
  async ModifyParamTemplate(
    req: ModifyParamTemplateRequest,
    cb?: (error: string, rep: ModifyParamTemplateResponse) => void
  ): Promise<ModifyParamTemplateResponse> {
    return this.request("ModifyParamTemplate", req, cb)
  }

  /**
   * 查询新购实例价格
   */
  async InquiryPriceCreateInstance(
    req: InquiryPriceCreateInstanceRequest,
    cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void
  ): Promise<InquiryPriceCreateInstanceResponse> {
    return this.request("InquiryPriceCreateInstance", req, cb)
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
   * 按量计费实例销毁
   */
  async DestroyPostpaidInstance(
    req: DestroyPostpaidInstanceRequest,
    cb?: (error: string, rep: DestroyPostpaidInstanceResponse) => void
  ): Promise<DestroyPostpaidInstanceResponse> {
    return this.request("DestroyPostpaidInstance", req, cb)
  }

  /**
   * 查询实例大Key
   */
  async DescribeInstanceMonitorBigKey(
    req: DescribeInstanceMonitorBigKeyRequest,
    cb?: (error: string, rep: DescribeInstanceMonitorBigKeyResponse) => void
  ): Promise<DescribeInstanceMonitorBigKeyResponse> {
    return this.request("DescribeInstanceMonitorBigKey", req, cb)
  }

  /**
   * 在通过DTS支持跨可用区灾备的场景中，通过该接口交换实例VIP完成实例灾备切换。交换VIP后目标实例可写，源和目标实例VIP互换，同时源与目标实例间DTS同步任务断开
   */
  async SwitchInstanceVip(
    req: SwitchInstanceVipRequest,
    cb?: (error: string, rep: SwitchInstanceVipResponse) => void
  ): Promise<SwitchInstanceVipResponse> {
    return this.request("SwitchInstanceVip", req, cb)
  }

  /**
   * 查询实例安全组信息
   */
  async DescribeInstanceSecurityGroup(
    req: DescribeInstanceSecurityGroupRequest,
    cb?: (error: string, rep: DescribeInstanceSecurityGroupResponse) => void
  ): Promise<DescribeInstanceSecurityGroupResponse> {
    return this.request("DescribeInstanceSecurityGroup", req, cb)
  }

  /**
   * 查询实例大Key类型分布
   */
  async DescribeInstanceMonitorBigKeyTypeDist(
    req: DescribeInstanceMonitorBigKeyTypeDistRequest,
    cb?: (error: string, rep: DescribeInstanceMonitorBigKeyTypeDistResponse) => void
  ): Promise<DescribeInstanceMonitorBigKeyTypeDistResponse> {
    return this.request("DescribeInstanceMonitorBigKeyTypeDist", req, cb)
  }

  /**
   * 重置密码
   */
  async ResetPassword(
    req: ResetPasswordRequest,
    cb?: (error: string, rep: ResetPasswordResponse) => void
  ): Promise<ResetPasswordResponse> {
    return this.request("ResetPassword", req, cb)
  }

  /**
   * 模拟故障
   */
  async KillMasterGroup(
    req: KillMasterGroupRequest,
    cb?: (error: string, rep: KillMasterGroupResponse) => void
  ): Promise<KillMasterGroupResponse> {
    return this.request("KillMasterGroup", req, cb)
  }

  /**
   * 修改实例的连接配置，包括带宽和最大连接数。
   */
  async ModifyConnectionConfig(
    req: ModifyConnectionConfigRequest,
    cb?: (error: string, rep: ModifyConnectionConfigResponse) => void
  ): Promise<ModifyConnectionConfigResponse> {
    return this.request("ModifyConnectionConfig", req, cb)
  }

  /**
   * 升级实例支持多AZ
   */
  async UpgradeVersionToMultiAvailabilityZones(
    req: UpgradeVersionToMultiAvailabilityZonesRequest,
    cb?: (error: string, rep: UpgradeVersionToMultiAvailabilityZonesResponse) => void
  ): Promise<UpgradeVersionToMultiAvailabilityZonesResponse> {
    return this.request("UpgradeVersionToMultiAvailabilityZones", req, cb)
  }

  /**
   * 查询Redis实例列表信息。该接口已废弃。
   */
  async DescribeCommonDBInstances(
    req: DescribeCommonDBInstancesRequest,
    cb?: (error: string, rep: DescribeCommonDBInstancesResponse) => void
  ): Promise<DescribeCommonDBInstancesResponse> {
    return this.request("DescribeCommonDBInstances", req, cb)
  }

  /**
   * 本接口查询指定可用区和实例类型下 Redis 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
   */
  async DescribeProductInfo(
    req?: DescribeProductInfoRequest,
    cb?: (error: string, rep: DescribeProductInfoResponse) => void
  ): Promise<DescribeProductInfoResponse> {
    return this.request("DescribeProductInfo", req, cb)
  }

  /**
   * 续费实例
   */
  async RenewInstance(
    req: RenewInstanceRequest,
    cb?: (error: string, rep: RenewInstanceResponse) => void
  ): Promise<RenewInstanceResponse> {
    return this.request("RenewInstance", req, cb)
  }

  /**
   * 手动备份Redis实例
   */
  async ManualBackupInstance(
    req: ManualBackupInstanceRequest,
    cb?: (error: string, rep: ManualBackupInstanceResponse) => void
  ): Promise<ManualBackupInstanceResponse> {
    return this.request("ManualBackupInstance", req, cb)
  }

  /**
   * 修改redis密码
   */
  async ModfiyInstancePassword(
    req: ModfiyInstancePasswordRequest,
    cb?: (error: string, rep: ModfiyInstancePasswordResponse) => void
  ): Promise<ModfiyInstancePasswordResponse> {
    return this.request("ModfiyInstancePassword", req, cb)
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
   * 查询实例参数列表
   */
  async DescribeInstanceParams(
    req: DescribeInstanceParamsRequest,
    cb?: (error: string, rep: DescribeInstanceParamsResponse) => void
  ): Promise<DescribeInstanceParamsResponse> {
    return this.request("DescribeInstanceParams", req, cb)
  }

  /**
   * 应用参数模板到实例
   */
  async ApplyParamsTemplate(
    req: ApplyParamsTemplateRequest,
    cb?: (error: string, rep: ApplyParamsTemplateResponse) => void
  ): Promise<ApplyParamsTemplateResponse> {
    return this.request("ApplyParamsTemplate", req, cb)
  }

  /**
   * 包年包月实例退还
   */
  async DestroyPrepaidInstance(
    req: DestroyPrepaidInstanceRequest,
    cb?: (error: string, rep: DestroyPrepaidInstanceResponse) => void
  ): Promise<DestroyPrepaidInstanceResponse> {
    return this.request("DestroyPrepaidInstance", req, cb)
  }

  /**
   * 查询参数修改历史列表
   */
  async DescribeInstanceParamRecords(
    req: DescribeInstanceParamRecordsRequest,
    cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void
  ): Promise<DescribeInstanceParamRecordsResponse> {
    return this.request("DescribeInstanceParamRecords", req, cb)
  }

  /**
   * 清空Redis实例的实例数据。
   */
  async ClearInstance(
    req: ClearInstanceRequest,
    cb?: (error: string, rep: ClearInstanceResponse) => void
  ): Promise<ClearInstanceResponse> {
    return this.request("ClearInstance", req, cb)
  }

  /**
   * 查询Redis节点详细信息
   */
  async DescribeInstanceZoneInfo(
    req: DescribeInstanceZoneInfoRequest,
    cb?: (error: string, rep: DescribeInstanceZoneInfoResponse) => void
  ): Promise<DescribeInstanceZoneInfoResponse> {
    return this.request("DescribeInstanceZoneInfo", req, cb)
  }

  /**
   * 查询订单信息
   */
  async DescribeInstanceDealDetail(
    req: DescribeInstanceDealDetailRequest,
    cb?: (error: string, rep: DescribeInstanceDealDetailResponse) => void
  ): Promise<DescribeInstanceDealDetailResponse> {
    return this.request("DescribeInstanceDealDetail", req, cb)
  }

  /**
   * 删除实例子账号
   */
  async DeleteInstanceAccount(
    req: DeleteInstanceAccountRequest,
    cb?: (error: string, rep: DeleteInstanceAccountResponse) => void
  ): Promise<DeleteInstanceAccountResponse> {
    return this.request("DeleteInstanceAccount", req, cb)
  }

  /**
   * 查询 CRS 实例备份列表
   */
  async DescribeInstanceBackups(
    req: DescribeInstanceBackupsRequest,
    cb?: (error: string, rep: DescribeInstanceBackupsResponse) => void
  ): Promise<DescribeInstanceBackupsResponse> {
    return this.request("DescribeInstanceBackups", req, cb)
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
   * 实例解隔离
   */
  async StartupInstance(
    req: StartupInstanceRequest,
    cb?: (error: string, rep: StartupInstanceResponse) => void
  ): Promise<StartupInstanceResponse> {
    return this.request("StartupInstance", req, cb)
  }

  /**
   * 修改实例相关信息
   */
  async ModifyInstance(
    req: ModifyInstanceRequest,
    cb?: (error: string, rep: ModifyInstanceResponse) => void
  ): Promise<ModifyInstanceResponse> {
    return this.request("ModifyInstance", req, cb)
  }

  /**
   * 查询实例访问的耗时分布
   */
  async DescribeInstanceMonitorTookDist(
    req: DescribeInstanceMonitorTookDistRequest,
    cb?: (error: string, rep: DescribeInstanceMonitorTookDistResponse) => void
  ): Promise<DescribeInstanceMonitorTookDistResponse> {
    return this.request("DescribeInstanceMonitorTookDist", req, cb)
  }

  /**
   * 查询备份Rdb下载地址(接口灰度中，需要加白名单使用)
   */
  async DescribeBackupUrl(
    req: DescribeBackupUrlRequest,
    cb?: (error: string, rep: DescribeBackupUrlResponse) => void
  ): Promise<DescribeBackupUrlResponse> {
    return this.request("DescribeBackupUrl", req, cb)
  }
}

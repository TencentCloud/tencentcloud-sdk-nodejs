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
  ModifyClusterNameRequest,
  DescribeRollbackTimeRangeRequest,
  ObjectTask,
  DescribeBackupConfigRequest,
  DescribeAccountsRequest,
  ModifyMaintainPeriodConfigRequest,
  DescribeRollbackTimeRangeResponse,
  AssociateSecurityGroupsRequest,
  CreateAccountsResponse,
  ModifyInstanceNameRequest,
  DescribeDBSecurityGroupsResponse,
  DescribeMaintainPeriodRequest,
  AccountParam,
  DescribeInstancesResponse,
  ClusterInstanceDetail,
  Account,
  ModifyBackupConfigResponse,
  IsolateInstanceResponse,
  ModifyInstanceNameResponse,
  PauseServerlessRequest,
  RevokeAccountPrivilegesResponse,
  CreateClustersResponse,
  SetRenewFlagRequest,
  CynosdbInstanceGrp,
  Tag,
  ActivateInstanceRequest,
  RollbackTableInfo,
  DescribeAccountAllGrantPrivilegesResponse,
  RollbackDatabase,
  DatabasePrivileges,
  DescribeClustersRequest,
  DescribeInstanceDetailResponse,
  ModifyDBInstanceSecurityGroupsResponse,
  ModifyAccountParamsRequest,
  DescribeClusterInstanceGrpsRequest,
  DescribeResourcesByDealNameResponse,
  ResumeServerlessResponse,
  CreateAccountsRequest,
  IsolateInstanceRequest,
  DescribeDBSecurityGroupsRequest,
  RollBackClusterRequest,
  RollbackTable,
  DescribeClusterDetailRequest,
  DescribeProjectSecurityGroupsResponse,
  PauseServerlessResponse,
  OfflineClusterRequest,
  NewAccount,
  BackupFileInfo,
  DescribeBackupListRequest,
  CynosdbInstance,
  DbTable,
  GrantAccountPrivilegesRequest,
  IsolateClusterResponse,
  CreateClustersRequest,
  DescribeClustersResponse,
  QueryFilter,
  DescribeBackupConfigResponse,
  ModifyDBInstanceSecurityGroupsRequest,
  AddInstancesResponse,
  Addr,
  DescribeProjectSecurityGroupsRequest,
  ModifyClusterParamResponse,
  SecurityGroup,
  NetAddr,
  AssociateSecurityGroupsResponse,
  DescribeResourcesByDealNameRequest,
  DescribeRollbackTimeValidityResponse,
  GrantAccountPrivilegesResponse,
  ResumeServerlessRequest,
  BillingResourceInfo,
  ModifyClusterNameResponse,
  DescribeInstanceSpecsRequest,
  UpgradeInstanceResponse,
  DescribeClusterParamLogsResponse,
  CynosdbCluster,
  SetRenewFlagResponse,
  OfflineClusterResponse,
  RevokeAccountPrivilegesRequest,
  InstanceSpec,
  DescribeClusterParamLogsRequest,
  UpgradeInstanceRequest,
  DescribeMaintainPeriodResponse,
  DescribeBackupListResponse,
  RollBackClusterResponse,
  DescribeClusterDetailResponse,
  ActivateInstanceResponse,
  DescribeRollbackTimeValidityRequest,
  IsolateClusterRequest,
  DescribeClusterInstanceGrpsResponse,
  AddInstancesRequest,
  DescribeInstancesRequest,
  ClusterParamModifyLog,
  CynosdbInstanceDetail,
  CynosdbClusterDetail,
  DescribeInstanceDetailRequest,
  ModifyMaintainPeriodConfigResponse,
  DisassociateSecurityGroupsRequest,
  TablePrivileges,
  ModifyClusterParamRequest,
  DescribeAccountsResponse,
  ModifyAccountParamsResponse,
  OfflineInstanceRequest,
  DescribeInstanceSpecsResponse,
  DescribeAccountAllGrantPrivilegesRequest,
  OfflineInstanceResponse,
  ParamItem,
  PolicyRule,
  ModifyBackupConfigRequest,
  InputAccount,
  DisassociateSecurityGroupsResponse,
} from "./cynosdb_models"

/**
 * cynosdb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cynosdb.tencentcloudapi.com", "2019-01-07", clientConfig)
  }

  /**
   * 恢复serverless集群
   */
  async ResumeServerless(
    req: ResumeServerlessRequest,
    cb?: (error: string, rep: ResumeServerlessResponse) => void
  ): Promise<ResumeServerlessResponse> {
    return this.request("ResumeServerless", req, cb)
  }

  /**
   * 查询备份文件列表
   */
  async DescribeBackupList(
    req: DescribeBackupListRequest,
    cb?: (error: string, rep: DescribeBackupListResponse) => void
  ): Promise<DescribeBackupListResponse> {
    return this.request("DescribeBackupList", req, cb)
  }

  /**
   * 批量回收账号权限
   */
  async RevokeAccountPrivileges(
    req: RevokeAccountPrivilegesRequest,
    cb?: (error: string, rep: RevokeAccountPrivilegesResponse) => void
  ): Promise<RevokeAccountPrivilegesResponse> {
    return this.request("RevokeAccountPrivileges", req, cb)
  }

  /**
   * 本接口（RollBackCluster）用于回档集群
   */
  async RollBackCluster(
    req: RollBackClusterRequest,
    cb?: (error: string, rep: RollBackClusterResponse) => void
  ): Promise<RollBackClusterResponse> {
    return this.request("RollBackCluster", req, cb)
  }

  /**
   * 获取指定集群的备份配置信息，包括全量备份时间段，备份文件保留时间
   */
  async DescribeBackupConfig(
    req: DescribeBackupConfigRequest,
    cb?: (error: string, rep: DescribeBackupConfigResponse) => void
  ): Promise<DescribeBackupConfigResponse> {
    return this.request("DescribeBackupConfig", req, cb)
  }

  /**
   * 本接口（DescribeClusterInstanceGrps）用于查询实例组
   */
  async DescribeClusterInstanceGrps(
    req: DescribeClusterInstanceGrpsRequest,
    cb?: (error: string, rep: DescribeClusterInstanceGrpsResponse) => void
  ): Promise<DescribeClusterInstanceGrpsResponse> {
    return this.request("DescribeClusterInstanceGrps", req, cb)
  }

  /**
   * 下线集群
   */
  async OfflineCluster(
    req: OfflineClusterRequest,
    cb?: (error: string, rep: OfflineClusterResponse) => void
  ): Promise<OfflineClusterResponse> {
    return this.request("OfflineCluster", req, cb)
  }

  /**
   * 暂停serverless集群
   */
  async PauseServerless(
    req: PauseServerlessRequest,
    cb?: (error: string, rep: PauseServerlessResponse) => void
  ): Promise<PauseServerlessResponse> {
    return this.request("PauseServerless", req, cb)
  }

  /**
   * 修改集群名称
   */
  async ModifyClusterName(
    req: ModifyClusterNameRequest,
    cb?: (error: string, rep: ModifyClusterNameResponse) => void
  ): Promise<ModifyClusterNameResponse> {
    return this.request("ModifyClusterName", req, cb)
  }

  /**
   * 本接口(DescribeInstanceDetail)用于查询实例详情。
   */
  async DescribeInstanceDetail(
    req: DescribeInstanceDetailRequest,
    cb?: (error: string, rep: DescribeInstanceDetailResponse) => void
  ): Promise<DescribeInstanceDetailResponse> {
    return this.request("DescribeInstanceDetail", req, cb)
  }

  /**
   * 查询指定集群有效回滚时间范围
   */
  async DescribeRollbackTimeRange(
    req: DescribeRollbackTimeRangeRequest,
    cb?: (error: string, rep: DescribeRollbackTimeRangeResponse) => void
  ): Promise<DescribeRollbackTimeRangeResponse> {
    return this.request("DescribeRollbackTimeRange", req, cb)
  }

  /**
   * 修改指定集群的备份配置
   */
  async ModifyBackupConfig(
    req: ModifyBackupConfigRequest,
    cb?: (error: string, rep: ModifyBackupConfigResponse) => void
  ): Promise<ModifyBackupConfigResponse> {
    return this.request("ModifyBackupConfig", req, cb)
  }

  /**
   * 本接口(DescribeInstances)用于查询实例列表。
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 批量授权账号权限
   */
  async GrantAccountPrivileges(
    req: GrantAccountPrivilegesRequest,
    cb?: (error: string, rep: GrantAccountPrivilegesResponse) => void
  ): Promise<GrantAccountPrivilegesResponse> {
    return this.request("GrantAccountPrivileges", req, cb)
  }

  /**
   * 本接口（DescribeClusterParamLogs）查询参数修改日志
   */
  async DescribeClusterParamLogs(
    req: DescribeClusterParamLogsRequest,
    cb?: (error: string, rep: DescribeClusterParamLogsResponse) => void
  ): Promise<DescribeClusterParamLogsResponse> {
    return this.request("DescribeClusterParamLogs", req, cb)
  }

  /**
   * 修改维护时间配置
   */
  async ModifyMaintainPeriodConfig(
    req: ModifyMaintainPeriodConfigRequest,
    cb?: (error: string, rep: ModifyMaintainPeriodConfigResponse) => void
  ): Promise<ModifyMaintainPeriodConfigResponse> {
    return this.request("ModifyMaintainPeriodConfig", req, cb)
  }

  /**
   * 修改账号参数
   */
  async ModifyAccountParams(
    req: ModifyAccountParamsRequest,
    cb?: (error: string, rep: ModifyAccountParamsResponse) => void
  ): Promise<ModifyAccountParamsResponse> {
    return this.request("ModifyAccountParams", req, cb)
  }

  /**
   * 下线实例
   */
  async OfflineInstance(
    req: OfflineInstanceRequest,
    cb?: (error: string, rep: OfflineInstanceResponse) => void
  ): Promise<OfflineInstanceResponse> {
    return this.request("OfflineInstance", req, cb)
  }

  /**
   * 本接口(ModifyInstanceName)用于修改实例名称。
   */
  async ModifyInstanceName(
    req: ModifyInstanceNameRequest,
    cb?: (error: string, rep: ModifyInstanceNameResponse) => void
  ): Promise<ModifyInstanceNameResponse> {
    return this.request("ModifyInstanceName", req, cb)
  }

  /**
   * 查询实例维护时间窗
   */
  async DescribeMaintainPeriod(
    req: DescribeMaintainPeriodRequest,
    cb?: (error: string, rep: DescribeMaintainPeriodResponse) => void
  ): Promise<DescribeMaintainPeriodResponse> {
    return this.request("DescribeMaintainPeriod", req, cb)
  }

  /**
   * 查询集群列表
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 隔离集群
   */
  async IsolateCluster(
    req: IsolateClusterRequest,
    cb?: (error: string, rep: IsolateClusterResponse) => void
  ): Promise<IsolateClusterResponse> {
    return this.request("IsolateCluster", req, cb)
  }

  /**
   * 查询项目安全组信息
   */
  async DescribeProjectSecurityGroups(
    req: DescribeProjectSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void
  ): Promise<DescribeProjectSecurityGroupsResponse> {
    return this.request("DescribeProjectSecurityGroups", req, cb)
  }

  /**
   * 安全组批量绑定云资源
   */
  async AssociateSecurityGroups(
    req: AssociateSecurityGroupsRequest,
    cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void
  ): Promise<AssociateSecurityGroupsResponse> {
    return this.request("AssociateSecurityGroups", req, cb)
  }

  /**
   * SetRenewFlag设置实例的自动续费功能
   */
  async SetRenewFlag(
    req: SetRenewFlagRequest,
    cb?: (error: string, rep: SetRenewFlagResponse) => void
  ): Promise<SetRenewFlagResponse> {
    return this.request("SetRenewFlag", req, cb)
  }

  /**
   * 显示集群详情
   */
  async DescribeClusterDetail(
    req: DescribeClusterDetailRequest,
    cb?: (error: string, rep: DescribeClusterDetailResponse) => void
  ): Promise<DescribeClusterDetailResponse> {
    return this.request("DescribeClusterDetail", req, cb)
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
   * 本接口(IsolateInstance)用于隔离实例。
   */
  async IsolateInstance(
    req: IsolateInstanceRequest,
    cb?: (error: string, rep: IsolateInstanceResponse) => void
  ): Promise<IsolateInstanceResponse> {
    return this.request("IsolateInstance", req, cb)
  }

  /**
   * 本接口（DescribeInstanceSpecs）用于查询实例规格
   */
  async DescribeInstanceSpecs(
    req: DescribeInstanceSpecsRequest,
    cb?: (error: string, rep: DescribeInstanceSpecsResponse) => void
  ): Promise<DescribeInstanceSpecsResponse> {
    return this.request("DescribeInstanceSpecs", req, cb)
  }

  /**
   * 账号所有权限
   */
  async DescribeAccountAllGrantPrivileges(
    req: DescribeAccountAllGrantPrivilegesRequest,
    cb?: (error: string, rep: DescribeAccountAllGrantPrivilegesResponse) => void
  ): Promise<DescribeAccountAllGrantPrivilegesResponse> {
    return this.request("DescribeAccountAllGrantPrivileges", req, cb)
  }

  /**
   * 本接口(DescribeAccounts)用于查询数据库管理账号。
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 根据计费订单id查询资源列表
   */
  async DescribeResourcesByDealName(
    req: DescribeResourcesByDealNameRequest,
    cb?: (error: string, rep: DescribeResourcesByDealNameResponse) => void
  ): Promise<DescribeResourcesByDealNameResponse> {
    return this.request("DescribeResourcesByDealName", req, cb)
  }

  /**
   * 修改集群参数
   */
  async ModifyClusterParam(
    req: ModifyClusterParamRequest,
    cb?: (error: string, rep: ModifyClusterParamResponse) => void
  ): Promise<ModifyClusterParamResponse> {
    return this.request("ModifyClusterParam", req, cb)
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
   * 创建集群
   */
  async CreateClusters(
    req: CreateClustersRequest,
    cb?: (error: string, rep: CreateClustersResponse) => void
  ): Promise<CreateClustersResponse> {
    return this.request("CreateClusters", req, cb)
  }

  /**
   * 创建账号
   */
  async CreateAccounts(
    req: CreateAccountsRequest,
    cb?: (error: string, rep: CreateAccountsResponse) => void
  ): Promise<CreateAccountsResponse> {
    return this.request("CreateAccounts", req, cb)
  }

  /**
   * 本接口(ActivateInstance)用于恢复已隔离的实例访问。
   */
  async ActivateInstance(
    req: ActivateInstanceRequest,
    cb?: (error: string, rep: ActivateInstanceResponse) => void
  ): Promise<ActivateInstanceResponse> {
    return this.request("ActivateInstance", req, cb)
  }

  /**
   * 查询实例安全组信息
   */
  async DescribeDBSecurityGroups(
    req: DescribeDBSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void
  ): Promise<DescribeDBSecurityGroupsResponse> {
    return this.request("DescribeDBSecurityGroups", req, cb)
  }

  /**
   * 安全组批量解绑云资源
   */
  async DisassociateSecurityGroups(
    req: DisassociateSecurityGroupsRequest,
    cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void
  ): Promise<DisassociateSecurityGroupsResponse> {
    return this.request("DisassociateSecurityGroups", req, cb)
  }

  /**
   * 指定时间和集群查询是否可回滚
   */
  async DescribeRollbackTimeValidity(
    req: DescribeRollbackTimeValidityRequest,
    cb?: (error: string, rep: DescribeRollbackTimeValidityResponse) => void
  ): Promise<DescribeRollbackTimeValidityResponse> {
    return this.request("DescribeRollbackTimeValidity", req, cb)
  }

  /**
   * 本接口（AddInstances）用于集群添加实例
   */
  async AddInstances(
    req: AddInstancesRequest,
    cb?: (error: string, rep: AddInstancesResponse) => void
  ): Promise<AddInstancesResponse> {
    return this.request("AddInstances", req, cb)
  }
}

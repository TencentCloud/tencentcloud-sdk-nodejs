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
  AddInstancesResponse,
  UpgradeInstanceResponse,
  Addr,
  DescribeClustersRequest,
  InstanceSpec,
  DescribeProjectSecurityGroupsRequest,
  SetRenewFlagResponse,
  Account,
  SecurityGroup,
  ModifyDBInstanceSecurityGroupsResponse,
  DescribeBackupConfigRequest,
  DescribeClusterInstanceGrpsRequest,
  DescribeResourcesByDealNameResponse,
  DescribeAccountsRequest,
  IsolateInstanceRequest,
  DescribeMaintainPeriodResponse,
  DescribeBackupListResponse,
  DescribeRollbackTimeRangeResponse,
  ModifyMaintainPeriodConfigRequest,
  ModifyBackupConfigRequest,
  DescribeDBSecurityGroupsRequest,
  DescribeRollbackTimeValidityRequest,
  IsolateClusterRequest,
  DescribeClusterInstanceGrpsResponse,
  AddInstancesRequest,
  DescribeClusterDetailRequest,
  Tag,
  DescribeProjectSecurityGroupsResponse,
  CynosdbInstanceDetail,
  DescribeDBSecurityGroupsResponse,
  DescribeMaintainPeriodRequest,
  DescribeInstancesResponse,
  CynosdbClusterDetail,
  ClusterInstanceDetail,
  BackupFileInfo,
  DescribeRollbackTimeValidityResponse,
  DescribeInstanceDetailRequest,
  ModifyMaintainPeriodConfigResponse,
  DescribeInstancesRequest,
  DescribeResourcesByDealNameRequest,
  IsolateInstanceResponse,
  DescribeBackupListRequest,
  DescribeRollbackTimeRangeRequest,
  QueryFilter,
  CynosdbInstance,
  DescribeAccountsResponse,
  UpgradeInstanceRequest,
  DescribeInstanceDetailResponse,
  OfflineInstanceRequest,
  BillingResourceInfo,
  OfflineClusterResponse,
  DescribeInstanceSpecsResponse,
  ObjectTask,
  DescribeInstanceSpecsRequest,
  PolicyRule,
  IsolateClusterResponse,
  CreateClustersResponse,
  SetRenewFlagRequest,
  CreateClustersRequest,
  CynosdbCluster,
  OfflineClusterRequest,
  DescribeClusterDetailResponse,
  OfflineInstanceResponse,
  CynosdbInstanceGrp,
  DescribeClustersResponse,
  ModifyBackupConfigResponse,
  DescribeBackupConfigResponse,
  ModifyDBInstanceSecurityGroupsRequest,
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
   * 查询备份文件列表
   */
  async DescribeBackupList(
    req: DescribeBackupListRequest,
    cb?: (error: string, rep: DescribeBackupListResponse) => void
  ): Promise<DescribeBackupListResponse> {
    return this.request("DescribeBackupList", req, cb)
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
   * 修改维护时间配置
   */
  async ModifyMaintainPeriodConfig(
    req: ModifyMaintainPeriodConfigRequest,
    cb?: (error: string, rep: ModifyMaintainPeriodConfigResponse) => void
  ): Promise<ModifyMaintainPeriodConfigResponse> {
    return this.request("ModifyMaintainPeriodConfig", req, cb)
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
   * SetRenewFlag设置实例的自动续费功能
   */
  async SetRenewFlag(
    req: SetRenewFlagRequest,
    cb?: (error: string, rep: SetRenewFlagResponse) => void
  ): Promise<SetRenewFlagResponse> {
    return this.request("SetRenewFlag", req, cb)
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
   * 指定时间和集群查询是否可回滚
   */
  async DescribeRollbackTimeValidity(
    req: DescribeRollbackTimeValidityRequest,
    cb?: (error: string, rep: DescribeRollbackTimeValidityResponse) => void
  ): Promise<DescribeRollbackTimeValidityResponse> {
    return this.request("DescribeRollbackTimeValidity", req, cb)
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
   * 本接口（AddInstances）用于集群添加实例
   */
  async AddInstances(
    req: AddInstancesRequest,
    cb?: (error: string, rep: AddInstancesResponse) => void
  ): Promise<AddInstancesResponse> {
    return this.request("AddInstances", req, cb)
  }
}

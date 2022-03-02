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
  ResetAccountPasswordResponse,
  ModifyClusterNameRequest,
  ModifyClustersAutoRenewFlagResponse,
  DescribeClustersRequest,
  DeleteClusterInstancesResponse,
  ModifyClusterInstancesSpecRequest,
  DescribeClusterBackupsRequest,
  AvailableRecoveryTimeRange,
  ResetAccountPasswordRequest,
  DescribeClusterInstancesResponse,
  DeleteClusterResponse,
  CreateClusterInstancesResponse,
  RestartClusterInstancesRequest,
  CreateClusterResponse,
  RecoverClusterInstancesRequest,
  CloneClusterToPointInTimeResponse,
  CreateClusterRequest,
  DeleteClusterInstancesRequest,
  RestartClusterInstancesResponse,
  ModifyClusterInstancesSpecResponse,
  CreateClusterInstancesRequest,
  DescribeClusterRecoveryTimeRangeResponse,
  DescribeClusterEndpointsResponse,
  DescribeResourcesByDealNameRequest,
  ModifyClusterEndpointWanStatusResponse,
  ModifyClusterEndpointWanStatusRequest,
  RecoverClusterRequest,
  DescribeClusterInstancesRequest,
  DeleteClusterRequest,
  Account,
  Endpoint,
  RecoverClusterInstancesResponse,
  ResourceIdInfo,
  RecoverClusterResponse,
  Filter,
  DescribeClusterBackupsResponse,
  DescribeAccountsResponse,
  TransformClusterPayModeRequest,
  Backup,
  RenewClusterRequest,
  DescribeClusterEndpointsRequest,
  ModifyClusterNameResponse,
  IsolateClusterInstancesResponse,
  RenewClusterResponse,
  IsolateClusterInstancesRequest,
  Instance,
  IsolateClusterResponse,
  ModifyAccountDescriptionRequest,
  ModifyAccountDescriptionResponse,
  IsolateClusterRequest,
  ModifyClustersAutoRenewFlagRequest,
  TransformClusterPayModeResponse,
  Cluster,
  DescribeClustersResponse,
  DescribeResourcesByDealNameResponse,
  CloneClusterToPointInTimeRequest,
  DescribeClusterRecoveryTimeRangeRequest,
  DescribeAccountsRequest,
} from "./tdcpg_models"

/**
 * tdcpg client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tdcpg.tencentcloudapi.com", "2021-11-18", clientConfig)
  }

  /**
   * 修改实例规格，此接口只针对状态为running(运行中)的实例生效
   */
  async ModifyClusterInstancesSpec(
    req: ModifyClusterInstancesSpecRequest,
    cb?: (error: string, rep: ModifyClusterInstancesSpecResponse) => void
  ): Promise<ModifyClusterInstancesSpecResponse> {
    return this.request("ModifyClusterInstancesSpec", req, cb)
  }

  /**
   * 创建集群
   */
  async CreateCluster(
    req: CreateClusterRequest,
    cb?: (error: string, rep: CreateClusterResponse) => void
  ): Promise<CreateClusterResponse> {
    return this.request("CreateCluster", req, cb)
  }

  /**
   * 修改数据库账号描述
   */
  async ModifyAccountDescription(
    req: ModifyAccountDescriptionRequest,
    cb?: (error: string, rep: ModifyAccountDescriptionResponse) => void
  ): Promise<ModifyAccountDescriptionResponse> {
    return this.request("ModifyAccountDescription", req, cb)
  }

  /**
   * 修改集群名字
   */
  async ModifyClusterName(
    req: ModifyClusterNameRequest,
    cb?: (error: string, rep: ModifyClusterNameResponse) => void
  ): Promise<ModifyClusterNameResponse> {
    return this.request("ModifyClusterName", req, cb)
  }

  /**
   * 转换集群付费模式，目前只支持从 后付费 转换成 与预付费。
   */
  async TransformClusterPayMode(
    req: TransformClusterPayModeRequest,
    cb?: (error: string, rep: TransformClusterPayModeResponse) => void
  ): Promise<TransformClusterPayModeResponse> {
    return this.request("TransformClusterPayMode", req, cb)
  }

  /**
   * 修改集群自动续费，只对预付费集群生效。
   */
  async ModifyClustersAutoRenewFlag(
    req: ModifyClustersAutoRenewFlagRequest,
    cb?: (error: string, rep: ModifyClustersAutoRenewFlagResponse) => void
  ): Promise<ModifyClustersAutoRenewFlagResponse> {
    return this.request("ModifyClustersAutoRenewFlag", req, cb)
  }

  /**
   * 重置数据库账号密码
   */
  async ResetAccountPassword(
    req: ResetAccountPasswordRequest,
    cb?: (error: string, rep: ResetAccountPasswordResponse) => void
  ): Promise<ResetAccountPasswordResponse> {
    return this.request("ResetAccountPassword", req, cb)
  }

  /**
   * 在集群中新建实例
   */
  async CreateClusterInstances(
    req: CreateClusterInstancesRequest,
    cb?: (error: string, rep: CreateClusterInstancesResponse) => void
  ): Promise<CreateClusterInstancesResponse> {
    return this.request("CreateClusterInstances", req, cb)
  }

  /**
   * 删除集群，集群中的实例和数据都将被删除，且无法恢复。只有当集群状态处于isolated(已隔离)时才生效。
   */
  async DeleteCluster(
    req: DeleteClusterRequest,
    cb?: (error: string, rep: DeleteClusterResponse) => void
  ): Promise<DeleteClusterResponse> {
    return this.request("DeleteCluster", req, cb)
  }

  /**
   * 查询实例
   */
  async DescribeClusterInstances(
    req: DescribeClusterInstancesRequest,
    cb?: (error: string, rep: DescribeClusterInstancesResponse) => void
  ): Promise<DescribeClusterInstancesResponse> {
    return this.request("DescribeClusterInstances", req, cb)
  }

  /**
   * 查询集群可回档时间范围
   */
  async DescribeClusterRecoveryTimeRange(
    req: DescribeClusterRecoveryTimeRangeRequest,
    cb?: (error: string, rep: DescribeClusterRecoveryTimeRangeResponse) => void
  ): Promise<DescribeClusterRecoveryTimeRangeResponse> {
    return this.request("DescribeClusterRecoveryTimeRange", req, cb)
  }

  /**
   * 隔离集群，集群的接入点网络将会断掉无法连接使用数据库。只有当集群状态处于running(运行中)时才生效。
   */
  async IsolateCluster(
    req: IsolateClusterRequest,
    cb?: (error: string, rep: IsolateClusterResponse) => void
  ): Promise<IsolateClusterResponse> {
    return this.request("IsolateCluster", req, cb)
  }

  /**
   * 查询集群
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 重启实例，此接口只针对状态为running(运行中)的实例生效。
   */
  async RestartClusterInstances(
    req: RestartClusterInstancesRequest,
    cb?: (error: string, rep: RestartClusterInstancesResponse) => void
  ): Promise<RestartClusterInstancesResponse> {
    return this.request("RestartClusterInstances", req, cb)
  }

  /**
     * 恢复实例。此接口的使用场景包括：
 - 读写实例状态为running(运行中)时，批量恢复状态为isolated(已隔离)的只读实例
 - 读写实例状态为isolated(已隔离)时，恢复读写实例
 - 读写实例状态为isolated(已隔离)时，批量恢复读写实例以及状态为isolated(已隔离)的只读实例
     */
  async RecoverClusterInstances(
    req: RecoverClusterInstancesRequest,
    cb?: (error: string, rep: RecoverClusterInstancesResponse) => void
  ): Promise<RecoverClusterInstancesResponse> {
    return this.request("RecoverClusterInstances", req, cb)
  }

  /**
   * 开启或者关闭接入点外网
   */
  async ModifyClusterEndpointWanStatus(
    req: ModifyClusterEndpointWanStatusRequest,
    cb?: (error: string, rep: ModifyClusterEndpointWanStatusResponse) => void
  ): Promise<ModifyClusterEndpointWanStatusResponse> {
    return this.request("ModifyClusterEndpointWanStatus", req, cb)
  }

  /**
   * 恢复集群，恢复集群的接入点网络，恢复后继续连接使用数据库。只有当集群状态处于isolated(已隔离)时才生效。
   */
  async RecoverCluster(
    req: RecoverClusterRequest,
    cb?: (error: string, rep: RecoverClusterResponse) => void
  ): Promise<RecoverClusterResponse> {
    return this.request("RecoverCluster", req, cb)
  }

  /**
   * 使用指定时间点的备份克隆一个新的集群
   */
  async CloneClusterToPointInTime(
    req: CloneClusterToPointInTimeRequest,
    cb?: (error: string, rep: CloneClusterToPointInTimeResponse) => void
  ): Promise<CloneClusterToPointInTimeResponse> {
    return this.request("CloneClusterToPointInTime", req, cb)
  }

  /**
   * 查询数据库账号信息
   */
  async DescribeAccounts(
    req: DescribeAccountsRequest,
    cb?: (error: string, rep: DescribeAccountsResponse) => void
  ): Promise<DescribeAccountsResponse> {
    return this.request("DescribeAccounts", req, cb)
  }

  /**
   * 根据订单号获取资源信息
   */
  async DescribeResourcesByDealName(
    req: DescribeResourcesByDealNameRequest,
    cb?: (error: string, rep: DescribeResourcesByDealNameResponse) => void
  ): Promise<DescribeResourcesByDealNameResponse> {
    return this.request("DescribeResourcesByDealName", req, cb)
  }

  /**
   * 删除实例。只有当实例状态处于isolated(已隔离)时才生效。
   */
  async DeleteClusterInstances(
    req: DeleteClusterInstancesRequest,
    cb?: (error: string, rep: DeleteClusterInstancesResponse) => void
  ): Promise<DeleteClusterInstancesResponse> {
    return this.request("DeleteClusterInstances", req, cb)
  }

  /**
   * 查询集群接入点信息
   */
  async DescribeClusterEndpoints(
    req: DescribeClusterEndpointsRequest,
    cb?: (error: string, rep: DescribeClusterEndpointsResponse) => void
  ): Promise<DescribeClusterEndpointsResponse> {
    return this.request("DescribeClusterEndpoints", req, cb)
  }

  /**
   * 查询集群的备份集
   */
  async DescribeClusterBackups(
    req: DescribeClusterBackupsRequest,
    cb?: (error: string, rep: DescribeClusterBackupsResponse) => void
  ): Promise<DescribeClusterBackupsResponse> {
    return this.request("DescribeClusterBackups", req, cb)
  }

  /**
   * 续费集群
   */
  async RenewCluster(
    req: RenewClusterRequest,
    cb?: (error: string, rep: RenewClusterResponse) => void
  ): Promise<RenewClusterResponse> {
    return this.request("RenewCluster", req, cb)
  }

  /**
     * 隔离实例。此接口只针对状态为running的实例生效，使用场景包括：
 - 批量隔离集群内所有的实例
 - 在读写实例为running(运行中)时，单个/批量隔离只读实例
 - 集群内所有只读实例为isolated(已隔离)时，单独隔离读写实例
     */
  async IsolateClusterInstances(
    req: IsolateClusterInstancesRequest,
    cb?: (error: string, rep: IsolateClusterInstancesResponse) => void
  ): Promise<IsolateClusterInstancesResponse> {
    return this.request("IsolateClusterInstances", req, cb)
  }
}

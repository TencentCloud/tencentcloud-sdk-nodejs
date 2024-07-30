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
  DescribeInstanceUsedSubnetsResponse,
  DescribeInstanceNodesResponse,
  DescribeInstanceStateRequest,
  DescribeClusterConfigsResponse,
  ScaleOutInstanceResponse,
  ModifyUserPrivilegesV3Response,
  DescribeFederationTokenRequest,
  ModifyWorkloadGroupStatusResponse,
  InstanceConfigItem,
  ModifyWorkloadGroupRequest,
  ResourceNodeSpec,
  UserWorkloadGroup,
  ModifyInstanceRequest,
  DeleteWorkloadGroupRequest,
  WorkloadGroupConfig,
  ResourceNodeDiskSpec,
  DescribeInstancesResponse,
  ReduceInstanceResponse,
  VersionReplicaItem,
  CreateInstanceNewRequest,
  ScaleOutInstanceRequest,
  UpdateUserPrivileges,
  NetworkInfo,
  ZoneInfo,
  DescribeRestoreTaskDetailResponse,
  ConfigKeyValue,
  Tag,
  ResizeDiskResponse,
  ModifyInstanceResponse,
  DescribeSlowQueryRecordsDownloadRequest,
  ModifyUserBindWorkloadGroupRequest,
  DescribeRegionZoneRequest,
  NodeInfo,
  RestartClusterForNodeResponse,
  DescribeInstanceNodesRequest,
  ChargeProperties,
  DescribeWorkloadGroupRequest,
  DestroyInstanceResponse,
  DescribeSqlApisRequest,
  ModifySecurityGroupsRequest,
  ModifyUserPrivilegesV3Request,
  AttachCBSSpec,
  DataBaseAuditRecord,
  DescribeSlowQueryRecordsResponse,
  BindUser,
  DescribeRegionZoneResponse,
  DescribeInstanceStateResponse,
  DescribeInstanceNodesInfoRequest,
  DescribeDatabaseAuditDownloadRequest,
  DescribeGoodsDetailRequest,
  ResizeDiskRequest,
  ModifyWorkloadGroupStatusRequest,
  DescribeSqlApisResponse,
  SlowQueryRecord,
  DescribeSlowQueryRecordsDownloadResponse,
  ModifyInstanceKeyValConfigsResponse,
  DescribeDatabaseAuditRecordsResponse,
  InstanceNode,
  InstanceInfo,
  DescribeUserBindWorkloadGroupRequest,
  DescribeInstancesRequest,
  CreateWorkloadGroupResponse,
  DescribeClusterConfigsRequest,
  CreateInstanceNewResponse,
  ModifyWorkloadGroupResponse,
  DescribeRestoreTaskDetailRequest,
  DescribeInstanceResponse,
  FitClsLogRequest,
  FitClsLogResponse,
  RestartClusterForNodeRequest,
  SearchTags,
  DescribeFederationTokenResponse,
  DescribeInstanceUsedSubnetsRequest,
  SpecExtra,
  DescribeDatabaseAuditRecordsRequest,
  DescribeWorkloadGroupResponse,
  ModifySecurityGroupsResponse,
  DeleteWorkloadGroupResponse,
  ClusterConfigsInfoFromEMR,
  RegionAreaInfo,
  DestroyInstanceRequest,
  RegionInfo,
  DescribeSlowQueryRecordsRequest,
  CreateWorkloadGroupRequest,
  DescribeGoodsDetailResponse,
  RestoreStatus,
  ModifyInstanceKeyValConfigsRequest,
  ModifyUserBindWorkloadGroupResponse,
  ScaleUpInstanceRequest,
  DescribeReplicaVersionRequest,
  NodesSummary,
  DescribeUserBindWorkloadGroupResponse,
  CreateInstanceSpec,
  DescribeInstanceRequest,
  ReduceInstanceRequest,
  InstanceDetail,
  DescribeDatabaseAuditDownloadResponse,
  DescribeReplicaVersionResponse,
  DescribeInstanceNodesInfoResponse,
  ScaleUpInstanceResponse,
} from "./cdwdoris_models"

/**
 * cdwdoris client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cdwdoris.tencentcloudapi.com", "2021-12-28", clientConfig)
  }

  /**
   * 销毁集群
   */
  async DestroyInstance(
    req: DestroyInstanceRequest,
    cb?: (error: string, rep: DestroyInstanceResponse) => void
  ): Promise<DestroyInstanceResponse> {
    return this.request("DestroyInstance", req, cb)
  }

  /**
   * 针对驱动sql命令查询ck集群接口
   */
  async DescribeSqlApis(
    req: DescribeSqlApisRequest,
    cb?: (error: string, rep: DescribeSqlApisResponse) => void
  ): Promise<DescribeSqlApisResponse> {
    return this.request("DescribeSqlApis", req, cb)
  }

  /**
   * 查询恢复任务进度详情
   */
  async DescribeRestoreTaskDetail(
    req: DescribeRestoreTaskDetailRequest,
    cb?: (error: string, rep: DescribeRestoreTaskDetailResponse) => void
  ): Promise<DescribeRestoreTaskDetailResponse> {
    return this.request("DescribeRestoreTaskDetail", req, cb)
  }

  /**
   * 创建资源组
   */
  async CreateWorkloadGroup(
    req: CreateWorkloadGroupRequest,
    cb?: (error: string, rep: CreateWorkloadGroupResponse) => void
  ): Promise<CreateWorkloadGroupResponse> {
    return this.request("CreateWorkloadGroup", req, cb)
  }

  /**
   * 下载数据库审计日志
   */
  async DescribeDatabaseAuditDownload(
    req: DescribeDatabaseAuditDownloadRequest,
    cb?: (error: string, rep: DescribeDatabaseAuditDownloadResponse) => void
  ): Promise<DescribeDatabaseAuditDownloadResponse> {
    return this.request("DescribeDatabaseAuditDownload", req, cb)
  }

  /**
   * 获取BE/FE节点角色
   */
  async DescribeInstanceNodesInfo(
    req: DescribeInstanceNodesInfoRequest,
    cb?: (error: string, rep: DescribeInstanceNodesInfoResponse) => void
  ): Promise<DescribeInstanceNodesInfoResponse> {
    return this.request("DescribeInstanceNodesInfo", req, cb)
  }

  /**
   * 获取集群已使用子网信息
   */
  async DescribeInstanceUsedSubnets(
    req: DescribeInstanceUsedSubnetsRequest,
    cb?: (error: string, rep: DescribeInstanceUsedSubnetsResponse) => void
  ): Promise<DescribeInstanceUsedSubnetsResponse> {
    return this.request("DescribeInstanceUsedSubnets", req, cb)
  }

  /**
   * 获取当前集群各用户绑定的资源信息
   */
  async DescribeUserBindWorkloadGroup(
    req: DescribeUserBindWorkloadGroupRequest,
    cb?: (error: string, rep: DescribeUserBindWorkloadGroupResponse) => void
  ): Promise<DescribeUserBindWorkloadGroupResponse> {
    return this.request("DescribeUserBindWorkloadGroup", req, cb)
  }

  /**
   * 计算资源垂直变配
   */
  async ScaleUpInstance(
    req: ScaleUpInstanceRequest,
    cb?: (error: string, rep: ScaleUpInstanceResponse) => void
  ): Promise<ScaleUpInstanceResponse> {
    return this.request("ScaleUpInstance", req, cb)
  }

  /**
   * 购买页获取地域及可用区列表、内核版本、网络规则等
   */
  async DescribeRegionZone(
    req: DescribeRegionZoneRequest,
    cb?: (error: string, rep: DescribeRegionZoneResponse) => void
  ): Promise<DescribeRegionZoneResponse> {
    return this.request("DescribeRegionZone", req, cb)
  }

  /**
   * 修改资源组信息
   */
  async ModifyWorkloadGroup(
    req: ModifyWorkloadGroupRequest,
    cb?: (error: string, rep: ModifyWorkloadGroupResponse) => void
  ): Promise<ModifyWorkloadGroupResponse> {
    return this.request("ModifyWorkloadGroup", req, cb)
  }

  /**
   * 获取慢查询列表
   */
  async DescribeSlowQueryRecords(
    req: DescribeSlowQueryRecordsRequest,
    cb?: (error: string, rep: DescribeSlowQueryRecordsResponse) => void
  ): Promise<DescribeSlowQueryRecordsResponse> {
    return this.request("DescribeSlowQueryRecords", req, cb)
  }

  /**
   * 开启或关闭资源组
   */
  async ModifyWorkloadGroupStatus(
    req: ModifyWorkloadGroupStatusRequest,
    cb?: (error: string, rep: ModifyWorkloadGroupStatusResponse) => void
  ): Promise<ModifyWorkloadGroupStatusResponse> {
    return this.request("ModifyWorkloadGroupStatus", req, cb)
  }

  /**
   * 修改用户绑定的资源组
   */
  async ModifyUserBindWorkloadGroup(
    req: ModifyUserBindWorkloadGroupRequest,
    cb?: (error: string, rep: ModifyUserBindWorkloadGroupResponse) => void
  ): Promise<ModifyUserBindWorkloadGroupResponse> {
    return this.request("ModifyUserBindWorkloadGroup", req, cb)
  }

  /**
   * 水平扩容节点
   */
  async ScaleOutInstance(
    req: ScaleOutInstanceRequest,
    cb?: (error: string, rep: ScaleOutInstanceResponse) => void
  ): Promise<ScaleOutInstanceResponse> {
    return this.request("ScaleOutInstance", req, cb)
  }

  /**
   * 获取集群列表
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 集群详情页中显示集群状态、流程进度等
   */
  async DescribeInstanceState(
    req: DescribeInstanceStateRequest,
    cb?: (error: string, rep: DescribeInstanceStateResponse) => void
  ): Promise<DescribeInstanceStateResponse> {
    return this.request("DescribeInstanceState", req, cb)
  }

  /**
   * 获取集群的最新的几个配置文件（config.xml、metrika.xml、user.xml）的内容，显示给用户
   */
  async DescribeClusterConfigs(
    req: DescribeClusterConfigsRequest,
    cb?: (error: string, rep: DescribeClusterConfigsResponse) => void
  ): Promise<DescribeClusterConfigsResponse> {
    return this.request("DescribeClusterConfigs", req, cb)
  }

  /**
   * 删除资源组
   */
  async DeleteWorkloadGroup(
    req: DeleteWorkloadGroupRequest,
    cb?: (error: string, rep: DeleteWorkloadGroupResponse) => void
  ): Promise<DeleteWorkloadGroupResponse> {
    return this.request("DeleteWorkloadGroup", req, cb)
  }

  /**
   * 更改安全组
   */
  async ModifySecurityGroups(
    req: ModifySecurityGroupsRequest,
    cb?: (error: string, rep: ModifySecurityGroupsResponse) => void
  ): Promise<ModifySecurityGroupsResponse> {
    return this.request("ModifySecurityGroups", req, cb)
  }

  /**
   * 获取联合身份临时访问凭证
   */
  async DescribeFederationToken(
    req?: DescribeFederationTokenRequest,
    cb?: (error: string, rep: DescribeFederationTokenResponse) => void
  ): Promise<DescribeFederationTokenResponse> {
    return this.request("DescribeFederationToken", req, cb)
  }

  /**
   * 集群缩容
   */
  async ReduceInstance(
    req: ReduceInstanceRequest,
    cb?: (error: string, rep: ReduceInstanceResponse) => void
  ): Promise<ReduceInstanceResponse> {
    return this.request("ReduceInstance", req, cb)
  }

  /**
   * 修改用户权限,支持catalog，全部db，部分db表三种权限设置类别
   */
  async ModifyUserPrivilegesV3(
    req: ModifyUserPrivilegesV3Request,
    cb?: (error: string, rep: ModifyUserPrivilegesV3Response) => void
  ): Promise<ModifyUserPrivilegesV3Response> {
    return this.request("ModifyUserPrivilegesV3", req, cb)
  }

  /**
   * 给已存在集群，配置日志服务
   */
  async FitClsLog(
    req: FitClsLogRequest,
    cb?: (error: string, rep: FitClsLogResponse) => void
  ): Promise<FitClsLogResponse> {
    return this.request("FitClsLog", req, cb)
  }

  /**
   * 获取数据库审计记录
   */
  async DescribeDatabaseAuditRecords(
    req: DescribeDatabaseAuditRecordsRequest,
    cb?: (error: string, rep: DescribeDatabaseAuditRecordsResponse) => void
  ): Promise<DescribeDatabaseAuditRecordsResponse> {
    return this.request("DescribeDatabaseAuditRecords", req, cb)
  }

  /**
   * 根据集群ID查询某个集群的具体信息
   */
  async DescribeInstance(
    req: DescribeInstanceRequest,
    cb?: (error: string, rep: DescribeInstanceResponse) => void
  ): Promise<DescribeInstanceResponse> {
    return this.request("DescribeInstance", req, cb)
  }

  /**
   * 通过API创建集群
   */
  async CreateInstanceNew(
    req: CreateInstanceNewRequest,
    cb?: (error: string, rep: CreateInstanceNewResponse) => void
  ): Promise<CreateInstanceNewResponse> {
    return this.request("CreateInstanceNew", req, cb)
  }

  /**
   * 获取集群节点信息列表
   */
  async DescribeInstanceNodes(
    req: DescribeInstanceNodesRequest,
    cb?: (error: string, rep: DescribeInstanceNodesResponse) => void
  ): Promise<DescribeInstanceNodesResponse> {
    return this.request("DescribeInstanceNodes", req, cb)
  }

  /**
   * 生成计费相关接口的GoodsDetail结构
   */
  async DescribeGoodsDetail(
    req: DescribeGoodsDetailRequest,
    cb?: (error: string, rep: DescribeGoodsDetailResponse) => void
  ): Promise<DescribeGoodsDetailResponse> {
    return this.request("DescribeGoodsDetail", req, cb)
  }

  /**
   * 扩容云盘
   */
  async ResizeDisk(
    req: ResizeDiskRequest,
    cb?: (error: string, rep: ResizeDiskResponse) => void
  ): Promise<ResizeDiskResponse> {
    return this.request("ResizeDisk", req, cb)
  }

  /**
   * 集群滚动重启
   */
  async RestartClusterForNode(
    req: RestartClusterForNodeRequest,
    cb?: (error: string, rep: RestartClusterForNodeResponse) => void
  ): Promise<RestartClusterForNodeResponse> {
    return this.request("RestartClusterForNode", req, cb)
  }

  /**
   * 下载慢查询文件
   */
  async DescribeSlowQueryRecordsDownload(
    req: DescribeSlowQueryRecordsDownloadRequest,
    cb?: (error: string, rep: DescribeSlowQueryRecordsDownloadResponse) => void
  ): Promise<DescribeSlowQueryRecordsDownloadResponse> {
    return this.request("DescribeSlowQueryRecordsDownload", req, cb)
  }

  /**
   * 检查内核版本是否支持新的备份恢复语法
   */
  async DescribeReplicaVersion(
    req: DescribeReplicaVersionRequest,
    cb?: (error: string, rep: DescribeReplicaVersionResponse) => void
  ): Promise<DescribeReplicaVersionResponse> {
    return this.request("DescribeReplicaVersion", req, cb)
  }

  /**
   * 获取资源组信息
   */
  async DescribeWorkloadGroup(
    req: DescribeWorkloadGroupRequest,
    cb?: (error: string, rep: DescribeWorkloadGroupResponse) => void
  ): Promise<DescribeWorkloadGroupResponse> {
    return this.request("DescribeWorkloadGroup", req, cb)
  }

  /**
   * 修改集群名称
   */
  async ModifyInstance(
    req: ModifyInstanceRequest,
    cb?: (error: string, rep: ModifyInstanceResponse) => void
  ): Promise<ModifyInstanceResponse> {
    return this.request("ModifyInstance", req, cb)
  }

  /**
   * KV模式修改配置接口
   */
  async ModifyInstanceKeyValConfigs(
    req: ModifyInstanceKeyValConfigsRequest,
    cb?: (error: string, rep: ModifyInstanceKeyValConfigsResponse) => void
  ): Promise<ModifyInstanceKeyValConfigsResponse> {
    return this.request("ModifyInstanceKeyValConfigs", req, cb)
  }
}

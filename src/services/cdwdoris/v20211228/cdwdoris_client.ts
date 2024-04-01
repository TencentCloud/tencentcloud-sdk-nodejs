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
  ModifyInstanceResponse,
  DestroyInstanceResponse,
  DescribeSlowQueryRecordsDownloadRequest,
  ResizeDiskRequest,
  NodeInfo,
  RestartClusterForNodeResponse,
  DescribeInstanceNodesResponse,
  DescribeInstanceStateRequest,
  DescribeClusterConfigsResponse,
  ScaleOutInstanceResponse,
  SlowQueryRecord,
  DescribeInstanceNodesRequest,
  ModifyInstanceRequest,
  ChargeProperties,
  ClusterConfigsInfoFromEMR,
  InstanceNode,
  CreateInstanceNewResponse,
  DescribeSlowQueryRecordsDownloadResponse,
  DestroyInstanceRequest,
  CreateInstanceNewRequest,
  InstanceInfo,
  DescribeInstancesResponse,
  DescribeInstancesRequest,
  DescribeSlowQueryRecordsRequest,
  DescribeClusterConfigsRequest,
  ResizeDiskResponse,
  AttachCBSSpec,
  DataBaseAuditRecord,
  ScaleOutInstanceRequest,
  DescribeSlowQueryRecordsResponse,
  DescribeDatabaseAuditRecordsResponse,
  DescribeInstanceResponse,
  RestartClusterForNodeRequest,
  ScaleUpInstanceRequest,
  NodesSummary,
  NetworkInfo,
  CreateInstanceSpec,
  SearchTags,
  DescribeInstanceRequest,
  ConfigKeyValue,
  Tag,
  DescribeInstanceStateResponse,
  DescribeDatabaseAuditRecordsRequest,
  DescribeInstanceNodesInfoRequest,
  DescribeDatabaseAuditDownloadResponse,
  DescribeDatabaseAuditDownloadRequest,
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
   * 计算资源垂直变配
   */
  async ScaleUpInstance(
    req: ScaleUpInstanceRequest,
    cb?: (error: string, rep: ScaleUpInstanceResponse) => void
  ): Promise<ScaleUpInstanceResponse> {
    return this.request("ScaleUpInstance", req, cb)
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
   * 销毁集群
   */
  async DestroyInstance(
    req: DestroyInstanceRequest,
    cb?: (error: string, rep: DestroyInstanceResponse) => void
  ): Promise<DestroyInstanceResponse> {
    return this.request("DestroyInstance", req, cb)
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
   * 获取数据库审计记录
   */
  async DescribeDatabaseAuditRecords(
    req: DescribeDatabaseAuditRecordsRequest,
    cb?: (error: string, rep: DescribeDatabaseAuditRecordsResponse) => void
  ): Promise<DescribeDatabaseAuditRecordsResponse> {
    return this.request("DescribeDatabaseAuditRecords", req, cb)
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
   * 扩容云盘
   */
  async ResizeDisk(
    req: ResizeDiskRequest,
    cb?: (error: string, rep: ResizeDiskResponse) => void
  ): Promise<ResizeDiskResponse> {
    return this.request("ResizeDisk", req, cb)
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
   * 根据集群ID查询某个集群的具体信息
   */
  async DescribeInstance(
    req: DescribeInstanceRequest,
    cb?: (error: string, rep: DescribeInstanceResponse) => void
  ): Promise<DescribeInstanceResponse> {
    return this.request("DescribeInstance", req, cb)
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
   * 获取集群节点信息列表
   */
  async DescribeInstanceNodes(
    req: DescribeInstanceNodesRequest,
    cb?: (error: string, rep: DescribeInstanceNodesResponse) => void
  ): Promise<DescribeInstanceNodesResponse> {
    return this.request("DescribeInstanceNodes", req, cb)
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
   * 获取BE/FE节点角色
   */
  async DescribeInstanceNodesInfo(
    req: DescribeInstanceNodesInfoRequest,
    cb?: (error: string, rep: DescribeInstanceNodesInfoResponse) => void
  ): Promise<DescribeInstanceNodesInfoResponse> {
    return this.request("DescribeInstanceNodesInfo", req, cb)
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
   * 水平扩容节点
   */
  async ScaleOutInstance(
    req: ScaleOutInstanceRequest,
    cb?: (error: string, rep: ScaleOutInstanceResponse) => void
  ): Promise<ScaleOutInstanceResponse> {
    return this.request("ScaleOutInstance", req, cb)
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
   * 获取慢查询列表
   */
  async DescribeSlowQueryRecords(
    req: DescribeSlowQueryRecordsRequest,
    cb?: (error: string, rep: DescribeSlowQueryRecordsResponse) => void
  ): Promise<DescribeSlowQueryRecordsResponse> {
    return this.request("DescribeSlowQueryRecords", req, cb)
  }
}

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
  CreateFileSystemResponse,
  CreateFilesetRequest,
  DescribeFilesetsRequest,
  ClientNodeAttribute,
  DistributedLoadAttrs,
  LoadTaskAttrs,
  UpdateLoadTaskPriorityResponse,
  DescribeClusterRoleTokenRequest,
  DescribeFileSystemsResponse,
  DescribeLoadTaskResponse,
  DescribeFilesetGeneralConfigResponse,
  DetachFileSystemBucketResponse,
  DeleteFilesetRequest,
  FSAttribute,
  MetadataLoadAttrs,
  DescribeClusterRoleTokenResponse,
  BatchDeleteClientNodesResponse,
  CreateLoadTaskResponse,
  QueryCrossVpcSubnetSupportForClientNodeRequest,
  ChargeAttribute,
  DeleteCrossVpcSubnetSupportForClientNodeRequest,
  AttachFileSystemBucketRequest,
  SubnetInfo,
  DeleteFileSystemRequest,
  CancelLoadTaskResponse,
  LoadTaskCreationAttrs,
  BatchAddClientNodesResponse,
  GooseFSxBuildElement,
  AttachFileSystemBucketResponse,
  DescribeFilesetGeneralConfigRequest,
  UpdateLoadTaskPriorityRequest,
  CreateFileSystemRequest,
  DescribeFilesetsResponse,
  BuildClientNodeMountCommandRequest,
  DeleteFileSystemResponse,
  ExpandCapacityRequest,
  DetachFileSystemBucketRequest,
  CancelLoadTaskRequest,
  ClientToken,
  DescribeFileSystemBucketsRequest,
  UpdateFilesetRequest,
  ModifyDataRepositoryBandwidthResponse,
  QueryDataRepositoryBandwidthResponse,
  QueryDataRepositoryBandwidthRequest,
  DescribeLoadTaskRequest,
  ClientClusterManagerNodeInfo,
  FilesetInfo,
  UpdateFilesetResponse,
  LinuxNodeAttribute,
  BatchDeleteClientNodesRequest,
  CreateFilesetResponse,
  UpdateFilesetGeneralConfigResponse,
  QueryCrossVpcSubnetSupportForClientNodeResponse,
  DescribeFileSystemsRequest,
  UpdateFilesetGeneralConfigRequest,
  DescribeClusterClientTokenRequest,
  AddCrossVpcSubnetSupportForClientNodeResponse,
  CreateDataRepositoryTaskResponse,
  ExpandCapacityResponse,
  DeleteCrossVpcSubnetSupportForClientNodeResponse,
  DeleteFilesetResponse,
  DescribeDataRepositoryTaskStatusResponse,
  ListLoadTasksResponse,
  ListLoadTasksRequest,
  BatchAddClientNodesRequest,
  AddCrossVpcSubnetSupportForClientNodeRequest,
  DescribeDataRepositoryTaskStatusRequest,
  RoleToken,
  DescribeFileSystemBucketsResponse,
  GooseFSxAttribute,
  DescribeClientNodesRequest,
  Tag,
  ModifyDataRepositoryBandwidthRequest,
  CreateDataRepositoryTaskRequest,
  DescribeClientNodesResponse,
  CreateLoadTaskRequest,
  BuildClientNodeMountCommandResponse,
  DescribeClusterClientTokenResponse,
  MappedBucket,
} from "./goosefs_models"

/**
 * goosefs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("goosefs.tencentcloudapi.com", "2022-05-19", clientConfig)
  }

  /**
   * 扩展文件系统容量
   */
  async ExpandCapacity(
    req: ExpandCapacityRequest,
    cb?: (error: string, rep: ExpandCapacityResponse) => void
  ): Promise<ExpandCapacityResponse> {
    return this.request("ExpandCapacity", req, cb)
  }

  /**
   * 修改FIleset
   */
  async UpdateFileset(
    req: UpdateFilesetRequest,
    cb?: (error: string, rep: UpdateFilesetResponse) => void
  ): Promise<UpdateFilesetResponse> {
    return this.request("UpdateFileset", req, cb)
  }

  /**
   * 查询客户端节点跨vpc子网访问能力
   */
  async QueryCrossVpcSubnetSupportForClientNode(
    req: QueryCrossVpcSubnetSupportForClientNodeRequest,
    cb?: (error: string, rep: QueryCrossVpcSubnetSupportForClientNodeResponse) => void
  ): Promise<QueryCrossVpcSubnetSupportForClientNodeResponse> {
    return this.request("QueryCrossVpcSubnetSupportForClientNode", req, cb)
  }

  /**
   * 查询GooseFS集群客户端凭证
   */
  async DescribeClusterClientToken(
    req: DescribeClusterClientTokenRequest,
    cb?: (error: string, rep: DescribeClusterClientTokenResponse) => void
  ): Promise<DescribeClusterClientTokenResponse> {
    return this.request("DescribeClusterClientToken", req, cb)
  }

  /**
   * 查询单个预热任务执行情况。注意，该接口需要 GooseFS 集群版本 ≥ 1.5.1。
   */
  async DescribeLoadTask(
    req: DescribeLoadTaskRequest,
    cb?: (error: string, rep: DescribeLoadTaskResponse) => void
  ): Promise<DescribeLoadTaskResponse> {
    return this.request("DescribeLoadTask", req, cb)
  }

  /**
   * 修改数据流动带宽
   */
  async ModifyDataRepositoryBandwidth(
    req: ModifyDataRepositoryBandwidthRequest,
    cb?: (error: string, rep: ModifyDataRepositoryBandwidthResponse) => void
  ): Promise<ModifyDataRepositoryBandwidthResponse> {
    return this.request("ModifyDataRepositoryBandwidth", req, cb)
  }

  /**
   * 批量删除客户端节点
   */
  async BatchDeleteClientNodes(
    req: BatchDeleteClientNodesRequest,
    cb?: (error: string, rep: BatchDeleteClientNodesResponse) => void
  ): Promise<BatchDeleteClientNodesResponse> {
    return this.request("BatchDeleteClientNodes", req, cb)
  }

  /**
   * 创建数据流通任务,包括从将文件系统的数据上传到存储桶下, 以及从存储桶下载到文件系统里。
   */
  async CreateDataRepositoryTask(
    req: CreateDataRepositoryTaskRequest,
    cb?: (error: string, rep: CreateDataRepositoryTaskResponse) => void
  ): Promise<CreateDataRepositoryTaskResponse> {
    return this.request("CreateDataRepositoryTask", req, cb)
  }

  /**
   * 列出该集群下所有预热任务。注意，该接口需要 GooseFS 集群版本 ≥ 1.5.1。
   */
  async ListLoadTasks(
    req: ListLoadTasksRequest,
    cb?: (error: string, rep: ListLoadTasksResponse) => void
  ): Promise<ListLoadTasksResponse> {
    return this.request("ListLoadTasks", req, cb)
  }

  /**
   * 生成客户端的挂载命令
   */
  async BuildClientNodeMountCommand(
    req: BuildClientNodeMountCommandRequest,
    cb?: (error: string, rep: BuildClientNodeMountCommandResponse) => void
  ): Promise<BuildClientNodeMountCommandResponse> {
    return this.request("BuildClientNodeMountCommand", req, cb)
  }

  /**
   * 变更已有 GooseFS 预热任务配置，仅任务状态为 waiting 时可调用该接口。注意，该接口需要 GooseFS 集群版本 ≥ 1.5.1。
   */
  async UpdateLoadTaskPriority(
    req: UpdateLoadTaskPriorityRequest,
    cb?: (error: string, rep: UpdateLoadTaskPriorityResponse) => void
  ): Promise<UpdateLoadTaskPriorityResponse> {
    return this.request("UpdateLoadTaskPriority", req, cb)
  }

  /**
   * 取消单个预热任务，仅任务在 waiting、running 状态时可以调用此接口。注意，该接口需要 GooseFS 集群版本 ≥ 1.5.1。
   */
  async CancelLoadTask(
    req: CancelLoadTaskRequest,
    cb?: (error: string, rep: CancelLoadTaskResponse) => void
  ): Promise<CancelLoadTaskResponse> {
    return this.request("CancelLoadTask", req, cb)
  }

  /**
   * 删除文件系统
   */
  async DeleteFileSystem(
    req: DeleteFileSystemRequest,
    cb?: (error: string, rep: DeleteFileSystemResponse) => void
  ): Promise<DeleteFileSystemResponse> {
    return this.request("DeleteFileSystem", req, cb)
  }

  /**
   * 创建Fileset
   */
  async CreateFileset(
    req: CreateFilesetRequest,
    cb?: (error: string, rep: CreateFilesetResponse) => void
  ): Promise<CreateFilesetResponse> {
    return this.request("CreateFileset", req, cb)
  }

  /**
   * 删除Fileset
   */
  async DeleteFileset(
    req: DeleteFilesetRequest,
    cb?: (error: string, rep: DeleteFilesetResponse) => void
  ): Promise<DeleteFilesetResponse> {
    return this.request("DeleteFileset", req, cb)
  }

  /**
   * 列出集群中所有的客户端节点
   */
  async DescribeClientNodes(
    req: DescribeClientNodesRequest,
    cb?: (error: string, rep: DescribeClientNodesResponse) => void
  ): Promise<DescribeClientNodesResponse> {
    return this.request("DescribeClientNodes", req, cb)
  }

  /**
   * GooseFS 预热相关接口，用于下发，列出，查询，修改预热任务。用于元数据预热、数据预热场景。 注意，该接口需要 GooseFS 集群版本 ≥ 1.5.1。
   */
  async CreateLoadTask(
    req: CreateLoadTaskRequest,
    cb?: (error: string, rep: CreateLoadTaskResponse) => void
  ): Promise<CreateLoadTaskResponse> {
    return this.request("CreateLoadTask", req, cb)
  }

  /**
   * 罗列文件系统关联的Bucket映射
   */
  async DescribeFileSystemBuckets(
    req: DescribeFileSystemBucketsRequest,
    cb?: (error: string, rep: DescribeFileSystemBucketsResponse) => void
  ): Promise<DescribeFileSystemBucketsResponse> {
    return this.request("DescribeFileSystemBuckets", req, cb)
  }

  /**
   * 查询Fileset列表
   */
  async DescribeFilesets(
    req: DescribeFilesetsRequest,
    cb?: (error: string, rep: DescribeFilesetsResponse) => void
  ): Promise<DescribeFilesetsResponse> {
    return this.request("DescribeFilesets", req, cb)
  }

  /**
   * 查询GooseFS集群角色凭证
   */
  async DescribeClusterRoleToken(
    req: DescribeClusterRoleTokenRequest,
    cb?: (error: string, rep: DescribeClusterRoleTokenResponse) => void
  ): Promise<DescribeClusterRoleTokenResponse> {
    return this.request("DescribeClusterRoleToken", req, cb)
  }

  /**
   * 查询Fileset通用配置
   */
  async DescribeFilesetGeneralConfig(
    req: DescribeFilesetGeneralConfigRequest,
    cb?: (error: string, rep: DescribeFilesetGeneralConfigResponse) => void
  ): Promise<DescribeFilesetGeneralConfigResponse> {
    return this.request("DescribeFilesetGeneralConfig", req, cb)
  }

  /**
   * 修改Fileset通用配置
   */
  async UpdateFilesetGeneralConfig(
    req: UpdateFilesetGeneralConfigRequest,
    cb?: (error: string, rep: UpdateFilesetGeneralConfigResponse) => void
  ): Promise<UpdateFilesetGeneralConfigResponse> {
    return this.request("UpdateFilesetGeneralConfig", req, cb)
  }

  /**
   * 解绑文件系统与Bucket的映射
   */
  async DetachFileSystemBucket(
    req: DetachFileSystemBucketRequest,
    cb?: (error: string, rep: DetachFileSystemBucketResponse) => void
  ): Promise<DetachFileSystemBucketResponse> {
    return this.request("DetachFileSystemBucket", req, cb)
  }

  /**
   * 为客户端节点添加跨vpc或子网访问能力
   */
  async AddCrossVpcSubnetSupportForClientNode(
    req: AddCrossVpcSubnetSupportForClientNodeRequest,
    cb?: (error: string, rep: AddCrossVpcSubnetSupportForClientNodeResponse) => void
  ): Promise<AddCrossVpcSubnetSupportForClientNodeResponse> {
    return this.request("AddCrossVpcSubnetSupportForClientNode", req, cb)
  }

  /**
   * 批量添加客户端节点
   */
  async BatchAddClientNodes(
    req: BatchAddClientNodesRequest,
    cb?: (error: string, rep: BatchAddClientNodesResponse) => void
  ): Promise<BatchAddClientNodesResponse> {
    return this.request("BatchAddClientNodes", req, cb)
  }

  /**
   * 列出所有的文件系统
   */
  async DescribeFileSystems(
    req: DescribeFileSystemsRequest,
    cb?: (error: string, rep: DescribeFileSystemsResponse) => void
  ): Promise<DescribeFileSystemsResponse> {
    return this.request("DescribeFileSystems", req, cb)
  }

  /**
   * 为客户端节点删除跨vpc子网访问能力
   */
  async DeleteCrossVpcSubnetSupportForClientNode(
    req: DeleteCrossVpcSubnetSupportForClientNodeRequest,
    cb?: (error: string, rep: DeleteCrossVpcSubnetSupportForClientNodeResponse) => void
  ): Promise<DeleteCrossVpcSubnetSupportForClientNodeResponse> {
    return this.request("DeleteCrossVpcSubnetSupportForClientNode", req, cb)
  }

  /**
   * 为文件系统关联Bucket
   */
  async AttachFileSystemBucket(
    req: AttachFileSystemBucketRequest,
    cb?: (error: string, rep: AttachFileSystemBucketResponse) => void
  ): Promise<AttachFileSystemBucketResponse> {
    return this.request("AttachFileSystemBucket", req, cb)
  }

  /**
   * 查询数据流动带宽
   */
  async QueryDataRepositoryBandwidth(
    req: QueryDataRepositoryBandwidthRequest,
    cb?: (error: string, rep: QueryDataRepositoryBandwidthResponse) => void
  ): Promise<QueryDataRepositoryBandwidthResponse> {
    return this.request("QueryDataRepositoryBandwidth", req, cb)
  }

  /**
   * 创建文件系统
   */
  async CreateFileSystem(
    req: CreateFileSystemRequest,
    cb?: (error: string, rep: CreateFileSystemResponse) => void
  ): Promise<CreateFileSystemResponse> {
    return this.request("CreateFileSystem", req, cb)
  }

  /**
   * 获取数据流通任务实时状态，用作客户端控制
   */
  async DescribeDataRepositoryTaskStatus(
    req: DescribeDataRepositoryTaskStatusRequest,
    cb?: (error: string, rep: DescribeDataRepositoryTaskStatusResponse) => void
  ): Promise<DescribeDataRepositoryTaskStatusResponse> {
    return this.request("DescribeDataRepositoryTaskStatus", req, cb)
  }
}

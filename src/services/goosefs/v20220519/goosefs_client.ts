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
  CreateFileSystemResponse,
  GooseFSxAttribute,
  ClientNodeAttribute,
  ModifyDataRepositoryBandwidthResponse,
  DescribeClusterRoleTokenRequest,
  DescribeFileSystemsResponse,
  ExpandCapacityResponse,
  FSAttribute,
  DescribeClusterRoleTokenResponse,
  BatchDeleteClientNodesResponse,
  QueryCrossVpcSubnetSupportForClientNodeRequest,
  ChargeAttribute,
  DeleteCrossVpcSubnetSupportForClientNodeRequest,
  AttachFileSystemBucketRequest,
  DeleteFileSystemRequest,
  DescribeFileSystemBucketsRequest,
  BatchAddClientNodesResponse,
  AttachFileSystemBucketResponse,
  GooseFSxBuildElement,
  CreateFileSystemRequest,
  ClusterRole,
  DeleteFileSystemResponse,
  ExpandCapacityRequest,
  DetachFileSystemBucketRequest,
  ClientToken,
  QueryDataRepositoryBandwidthResponse,
  QueryDataRepositoryBandwidthRequest,
  ClientClusterManagerNodeInfo,
  LinuxNodeAttribute,
  BatchDeleteClientNodesRequest,
  SubnetInfo,
  QueryCrossVpcSubnetSupportForClientNodeResponse,
  DescribeFileSystemsRequest,
  DescribeClusterClientTokenRequest,
  AddCrossVpcSubnetSupportForClientNodeResponse,
  CreateDataRepositoryTaskResponse,
  DescribeClusterRolesResponse,
  DeleteCrossVpcSubnetSupportForClientNodeResponse,
  DescribeDataRepositoryTaskStatusResponse,
  BatchAddClientNodesRequest,
  AddCrossVpcSubnetSupportForClientNodeRequest,
  DetachFileSystemBucketResponse,
  RoleToken,
  DescribeFileSystemBucketsResponse,
  DescribeClientNodesRequest,
  Tag,
  ModifyDataRepositoryBandwidthRequest,
  DescribeClusterRolesRequest,
  CreateDataRepositoryTaskRequest,
  DescribeClientNodesResponse,
  DescribeDataRepositoryTaskStatusRequest,
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
   * 查询GooseFS集群角色
   */
  async DescribeClusterRoles(
    req: DescribeClusterRolesRequest,
    cb?: (error: string, rep: DescribeClusterRolesResponse) => void
  ): Promise<DescribeClusterRolesResponse> {
    return this.request("DescribeClusterRoles", req, cb)
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
   * 解绑文件系统与Bucket的映射
   */
  async DetachFileSystemBucket(
    req: DetachFileSystemBucketRequest,
    cb?: (error: string, rep: DetachFileSystemBucketResponse) => void
  ): Promise<DetachFileSystemBucketResponse> {
    return this.request("DetachFileSystemBucket", req, cb)
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
   * 查询数据流动带宽
   */
  async QueryDataRepositoryBandwidth(
    req: QueryDataRepositoryBandwidthRequest,
    cb?: (error: string, rep: QueryDataRepositoryBandwidthResponse) => void
  ): Promise<QueryDataRepositoryBandwidthResponse> {
    return this.request("QueryDataRepositoryBandwidth", req, cb)
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
   * 列出集群中所有的客户端节点
   */
  async DescribeClientNodes(
    req: DescribeClientNodesRequest,
    cb?: (error: string, rep: DescribeClientNodesResponse) => void
  ): Promise<DescribeClientNodesResponse> {
    return this.request("DescribeClientNodes", req, cb)
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
   * 修改数据流动带宽
   */
  async ModifyDataRepositoryBandwidth(
    req: ModifyDataRepositoryBandwidthRequest,
    cb?: (error: string, rep: ModifyDataRepositoryBandwidthResponse) => void
  ): Promise<ModifyDataRepositoryBandwidthResponse> {
    return this.request("ModifyDataRepositoryBandwidth", req, cb)
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
   * 批量删除客户端节点
   */
  async BatchDeleteClientNodes(
    req: BatchDeleteClientNodesRequest,
    cb?: (error: string, rep: BatchDeleteClientNodesResponse) => void
  ): Promise<BatchDeleteClientNodesResponse> {
    return this.request("BatchDeleteClientNodes", req, cb)
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
   * 创建文件系统
   */
  async CreateFileSystem(
    req: CreateFileSystemRequest,
    cb?: (error: string, rep: CreateFileSystemResponse) => void
  ): Promise<CreateFileSystemResponse> {
    return this.request("CreateFileSystem", req, cb)
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
   * 查询GooseFS集群角色凭证
   */
  async DescribeClusterRoleToken(
    req: DescribeClusterRoleTokenRequest,
    cb?: (error: string, rep: DescribeClusterRoleTokenResponse) => void
  ): Promise<DescribeClusterRoleTokenResponse> {
    return this.request("DescribeClusterRoleToken", req, cb)
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
}

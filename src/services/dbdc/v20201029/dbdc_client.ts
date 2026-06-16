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
  IsolateDBCustomNodeRequest,
  SystemDisk,
  RemoveNodesFromDBCustomClusterRequest,
  HostDetail,
  DescribeDBCustomClusterDetailResponse,
  LoginSettings,
  DBCustomImage,
  DBCustomClusterNode,
  DestroyDBCustomClusterRequest,
  DescribeDBCustomNodesResponse,
  ModifyDBCustomClusterTagsResponse,
  DescribeDBCustomClusterNodesRequest,
  DescribeInstanceDetail,
  DescribeDBCustomTaskStatusRequest,
  DescribeInstanceListRequest,
  DescribeDBCustomClustersRequest,
  InstanceDeviceInfo,
  DescribeDBCustomClusterKubeconfigRequest,
  DestroyDBCustomNodeResponse,
  DescribeDBInstancesRequest,
  AddNodesToDBCustomClusterRequest,
  ModifyInstanceNameRequest,
  DescribeHostListResponse,
  ApiServerNetwork,
  ResourceTag,
  DescribeDBCustomClustersResponse,
  IsolateDBCustomNodeResponse,
  DescribeDBInstancesResponse,
  DescribeDBCustomTaskStatusResponse,
  CreateDBCustomNodesResponse,
  DescribeInstancesResponse,
  ModifyDBCustomClusterTagsRequest,
  ModifyDBCustomNodeTagsRequest,
  CheckRoleAuthorizedResponse,
  DescribeInstanceDetailResponse,
  DescribeDBCustomClusterNodesResponse,
  DescribeInstanceDetailRequest,
  DescribeInstancesRequest,
  DBInstanceDetail,
  DescribeDBCustomClusterDetailRequest,
  ModifyInstanceNameResponse,
  DestroyDBCustomNodeRequest,
  DescribeDBCustomClusterKubeconfigResponse,
  Filter,
  ContainerNetwork,
  RenewDBCustomNodeRequest,
  DescribeHostListRequest,
  CheckRoleAuthorizedRequest,
  DescribeDBCustomNodesRequest,
  CreateDBCustomNodesRequest,
  InstanceExpand,
  RenewDBCustomNodeResponse,
  DescribeInstanceListResponse,
  DBCustomCluster,
  DescribeDBCustomImagesResponse,
  CreateDBCustomClusterResponse,
  RemoveNodesFromDBCustomClusterResponse,
  DescribeDBCustomImagesRequest,
  DeviceInfo,
  InstanceDetail,
  AddNodesToDBCustomClusterResponse,
  Tag,
  DestroyDBCustomClusterResponse,
  ModifyDBCustomNodeTagsResponse,
  CreateDBCustomClusterRequest,
  DBCustomNode,
  DataDisk,
} from "./dbdc_models"

/**
 * dbdc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dbdc.tencentcloudapi.com", "2020-10-29", clientConfig)
  }

  /**
   * 该接口（DestroyDBCustomNode）用于销毁 DB Custom 节点。
   */
  async DestroyDBCustomNode(
    req: DestroyDBCustomNodeRequest,
    cb?: (error: string, rep: DestroyDBCustomNodeResponse) => void
  ): Promise<DestroyDBCustomNodeResponse> {
    return this.request("DestroyDBCustomNode", req, cb)
  }

  /**
   * 该接口（AddNodesToDBCustomCluster）用于为 DB Custom 集群上架节点。
   */
  async AddNodesToDBCustomCluster(
    req: AddNodesToDBCustomClusterRequest,
    cb?: (error: string, rep: AddNodesToDBCustomClusterResponse) => void
  ): Promise<AddNodesToDBCustomClusterResponse> {
    return this.request("AddNodesToDBCustomCluster", req, cb)
  }

  /**
   * 该接口（ModifyDBCustomNodeTags）用于修改 DB Custom 节点的标签配置。
   */
  async ModifyDBCustomNodeTags(
    req: ModifyDBCustomNodeTagsRequest,
    cb?: (error: string, rep: ModifyDBCustomNodeTagsResponse) => void
  ): Promise<ModifyDBCustomNodeTagsResponse> {
    return this.request("ModifyDBCustomNodeTags", req, cb)
  }

  /**
   * 本接口用于查询独享集群详情
   */
  async DescribeInstanceDetail(
    req: DescribeInstanceDetailRequest,
    cb?: (error: string, rep: DescribeInstanceDetailResponse) => void
  ): Promise<DescribeInstanceDetailResponse> {
    return this.request("DescribeInstanceDetail", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomNodes）用于查询 DB Custom 节点列表。
   */
  async DescribeDBCustomNodes(
    req: DescribeDBCustomNodesRequest,
    cb?: (error: string, rep: DescribeDBCustomNodesResponse) => void
  ): Promise<DescribeDBCustomNodesResponse> {
    return this.request("DescribeDBCustomNodes", req, cb)
  }

  /**
   * 根据不同地域不同用户，获取集群列表信息
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 该接口（CreateDBCustomNodes）用于创建 DB Custom 节点(需支付)。
   */
  async CreateDBCustomNodes(
    req: CreateDBCustomNodesRequest,
    cb?: (error: string, rep: CreateDBCustomNodesResponse) => void
  ): Promise<CreateDBCustomNodesResponse> {
    return this.request("CreateDBCustomNodes", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomImages）用于查询 DB Custom 可用的操作系统镜像列表。
   */
  async DescribeDBCustomImages(
    req: DescribeDBCustomImagesRequest,
    cb?: (error: string, rep: DescribeDBCustomImagesResponse) => void
  ): Promise<DescribeDBCustomImagesResponse> {
    return this.request("DescribeDBCustomImages", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomClusterNodes）用于查询 DB Custom 集群中的节点列表。
   */
  async DescribeDBCustomClusterNodes(
    req: DescribeDBCustomClusterNodesRequest,
    cb?: (error: string, rep: DescribeDBCustomClusterNodesResponse) => void
  ): Promise<DescribeDBCustomClusterNodesResponse> {
    return this.request("DescribeDBCustomClusterNodes", req, cb)
  }

  /**
   * 该接口（DestroyDBCustomCluster）用于销毁 DB Custom 集群。
   */
  async DestroyDBCustomCluster(
    req: DestroyDBCustomClusterRequest,
    cb?: (error: string, rep: DestroyDBCustomClusterResponse) => void
  ): Promise<DestroyDBCustomClusterResponse> {
    return this.request("DestroyDBCustomCluster", req, cb)
  }

  /**
   * 本接口用于修改集群名称
   */
  async ModifyInstanceName(
    req: ModifyInstanceNameRequest,
    cb?: (error: string, rep: ModifyInstanceNameResponse) => void
  ): Promise<ModifyInstanceNameResponse> {
    return this.request("ModifyInstanceName", req, cb)
  }

  /**
   * 本接口用于查询独享集群内的DB实例列表
   */
  async DescribeDBInstances(
    req: DescribeDBInstancesRequest,
    cb?: (error: string, rep: DescribeDBInstancesResponse) => void
  ): Promise<DescribeDBInstancesResponse> {
    return this.request("DescribeDBInstances", req, cb)
  }

  /**
   * 该接口（RenewDBCustomNode）用于给 DB Custom 节点续费。
   */
  async RenewDBCustomNode(
    req: RenewDBCustomNodeRequest,
    cb?: (error: string, rep: RenewDBCustomNodeResponse) => void
  ): Promise<RenewDBCustomNodeResponse> {
    return this.request("RenewDBCustomNode", req, cb)
  }

  /**
   * 该接口(DescribeDBCustomClusterDetail) 用于查询 DB Custom 集群的详情信息。
   */
  async DescribeDBCustomClusterDetail(
    req: DescribeDBCustomClusterDetailRequest,
    cb?: (error: string, rep: DescribeDBCustomClusterDetailResponse) => void
  ): Promise<DescribeDBCustomClusterDetailResponse> {
    return this.request("DescribeDBCustomClusterDetail", req, cb)
  }

  /**
   * 该接口 (IsolateDBCustomNode) 用于隔离 DB Custom 节点。
   */
  async IsolateDBCustomNode(
    req: IsolateDBCustomNodeRequest,
    cb?: (error: string, rep: IsolateDBCustomNodeResponse) => void
  ): Promise<IsolateDBCustomNodeResponse> {
    return this.request("IsolateDBCustomNode", req, cb)
  }

  /**
   * 本接口用于查询独享集群实例列表
   */
  async DescribeInstanceList(
    req: DescribeInstanceListRequest,
    cb?: (error: string, rep: DescribeInstanceListResponse) => void
  ): Promise<DescribeInstanceListResponse> {
    return this.request("DescribeInstanceList", req, cb)
  }

  /**
   * 该接口（CreateDBCustomCluster）用于创建 DB Custom 集群。
   */
  async CreateDBCustomCluster(
    req: CreateDBCustomClusterRequest,
    cb?: (error: string, rep: CreateDBCustomClusterResponse) => void
  ): Promise<CreateDBCustomClusterResponse> {
    return this.request("CreateDBCustomCluster", req, cb)
  }

  /**
   * 该接口（RemoveNodesFromDBCustomCluster）用于从 DB Custom 集群移除节点。
   */
  async RemoveNodesFromDBCustomCluster(
    req: RemoveNodesFromDBCustomClusterRequest,
    cb?: (error: string, rep: RemoveNodesFromDBCustomClusterResponse) => void
  ): Promise<RemoveNodesFromDBCustomClusterResponse> {
    return this.request("RemoveNodesFromDBCustomCluster", req, cb)
  }

  /**
   * 该接口（ModifyDBCustomClusterTags）用于修改 DB Custom 集群的标签配置。
   */
  async ModifyDBCustomClusterTags(
    req: ModifyDBCustomClusterTagsRequest,
    cb?: (error: string, rep: ModifyDBCustomClusterTagsResponse) => void
  ): Promise<ModifyDBCustomClusterTagsResponse> {
    return this.request("ModifyDBCustomClusterTags", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomClusterKubeconfig）用于查询 DB Custom 集群 Kubeconfig。
   */
  async DescribeDBCustomClusterKubeconfig(
    req: DescribeDBCustomClusterKubeconfigRequest,
    cb?: (error: string, rep: DescribeDBCustomClusterKubeconfigResponse) => void
  ): Promise<DescribeDBCustomClusterKubeconfigResponse> {
    return this.request("DescribeDBCustomClusterKubeconfig", req, cb)
  }

  /**
   * 本接口用于查询主机列表
   */
  async DescribeHostList(
    req: DescribeHostListRequest,
    cb?: (error: string, rep: DescribeHostListResponse) => void
  ): Promise<DescribeHostListResponse> {
    return this.request("DescribeHostList", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomTaskStatus）用于查询 DB Custom 任务的状态。
   */
  async DescribeDBCustomTaskStatus(
    req: DescribeDBCustomTaskStatusRequest,
    cb?: (error: string, rep: DescribeDBCustomTaskStatusResponse) => void
  ): Promise<DescribeDBCustomTaskStatusResponse> {
    return this.request("DescribeDBCustomTaskStatus", req, cb)
  }

  /**
   * 检查服务相关角色是否已创建
   */
  async CheckRoleAuthorized(
    req: CheckRoleAuthorizedRequest,
    cb?: (error: string, rep: CheckRoleAuthorizedResponse) => void
  ): Promise<CheckRoleAuthorizedResponse> {
    return this.request("CheckRoleAuthorized", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomClusters）为DB Custom 集群列表查询接口。
   */
  async DescribeDBCustomClusters(
    req: DescribeDBCustomClustersRequest,
    cb?: (error: string, rep: DescribeDBCustomClustersResponse) => void
  ): Promise<DescribeDBCustomClustersResponse> {
    return this.request("DescribeDBCustomClusters", req, cb)
  }
}

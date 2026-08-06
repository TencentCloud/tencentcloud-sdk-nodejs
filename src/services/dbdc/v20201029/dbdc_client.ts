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
  DescribeDBCustomClusterDetailResponse,
  DestroyDBCustomClusterRequest,
  DescribeDBCustomClusterResourcesRequest,
  DescribeInstancesRequest,
  ModifyInstanceNameRequest,
  DescribeDBCustomClusterNodeConfigResponse,
  DescribeInstancesResponse,
  SystemDisk,
  DBCustomNodeTypeInfo,
  ModifyInstanceNameResponse,
  DescribeDBCustomClusterNodeConfigRequest,
  ModifyDBCustomNodeAttributesResponse,
  CreateDBCustomClusterResponse,
  DescribeDBCustomImagesRequest,
  ZoneInfo,
  Tag,
  DBCustomClusterNodeResource,
  CreateDBCustomClusterRequest,
  DescribeInstanceListResponse,
  ModifyDBCustomNodeSecurityGroupsResponse,
  Label,
  RemoveNodesFromDBCustomClusterResponse,
  DescribeDBCustomNodesResponse,
  DescribeDBCustomClusterResourcesResponse,
  DescribeDBCustomClusterNodesRequest,
  DescribeInstanceListRequest,
  DescribeDBCustomClustersRequest,
  DescribeDBInstancesRequest,
  DescribeDBCustomNodeTypesResponse,
  AddNodesToDBCustomClusterRequest,
  DescribeHostListResponse,
  DescribeDBCustomRegionsRequest,
  ModifyDBCustomClusterTagsRequest,
  DescribeDBCustomTaskStatusResponse,
  DescribeInstanceDetailResponse,
  ModifyDBCustomClusterNodeConfigResponse,
  DBInstanceDetail,
  Taint,
  DestroyDBCustomNodeRequest,
  DescribeDBCustomZonesRequest,
  ModifyDBCustomClusterNodeConfigRequest,
  HostDetail,
  CheckRoleAuthorizedRequest,
  CreateDBCustomNodesRequest,
  RenewDBCustomNodeResponse,
  DescribeDBCustomImagesResponse,
  ModifyDBCustomNodeTagsResponse,
  AddNodesToDBCustomClusterResponse,
  DestroyDBCustomClusterResponse,
  DescribeDBCustomClusterNodeResourcesRequest,
  ResourceTag,
  DataDisk,
  ModifyDBCustomClusterAttributesRequest,
  DescribeDBCustomNodeTypesRequest,
  LoginSettings,
  SecurityGroup,
  DBCustomImage,
  DescribeDBCustomClusterNodeResourcesResponse,
  ModifyDBCustomClusterTagsResponse,
  DescribeDBCustomRegionsResponse,
  DescribeInstanceDetail,
  InstanceDeviceInfo,
  DescribeDBCustomClusterKubeconfigRequest,
  RemoveNodesFromDBCustomClusterRequest,
  DescribeDBCustomClustersResponse,
  CheckRoleAuthorizedResponse,
  ModifyDBCustomNodeTagsRequest,
  DescribeDBCustomClusterDetailRequest,
  RenewDBCustomNodeRequest,
  Filter,
  IsolateDBCustomNodeResponse,
  DBCustomClusterNodeConfig,
  MetaResource,
  DBCustomNode,
  DBCustomClusterNode,
  DescribeDBCustomNodeSecurityGroupsResponse,
  DestroyDBCustomNodeResponse,
  DescribeDBCustomTaskStatusRequest,
  ModifyDBCustomClusterAttributesResponse,
  ApiServerNetwork,
  RegionInfo,
  DescribeDBCustomZonesResponse,
  DescribeDBInstancesResponse,
  CreateDBCustomNodesResponse,
  DescribeDBCustomNodeSecurityGroupsRequest,
  DescribeDBCustomClusterNodesResponse,
  DescribeInstanceDetailRequest,
  ModifyDBCustomNodeAttributesRequest,
  DescribeDBCustomClusterKubeconfigResponse,
  ContainerNetwork,
  DescribeHostListRequest,
  DescribeDBCustomNodesRequest,
  InstanceExpand,
  DBCustomCluster,
  DeviceInfo,
  ModifyDBCustomNodeSecurityGroupsRequest,
  PolicyRule,
  InstanceDetail,
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
   * 该接口（ModifyDBCustomNodeAttributes）用于修改 DB Custom 节点的属性。
   */
  async ModifyDBCustomNodeAttributes(
    req: ModifyDBCustomNodeAttributesRequest,
    cb?: (error: string, rep: ModifyDBCustomNodeAttributesResponse) => void
  ): Promise<ModifyDBCustomNodeAttributesResponse> {
    return this.request("ModifyDBCustomNodeAttributes", req, cb)
  }

  /**
   * 该接口（AddNodesToDBCustomCluster）用于为 DB Custom 集群添加已存在的节点。
   */
  async AddNodesToDBCustomCluster(
    req: AddNodesToDBCustomClusterRequest,
    cb?: (error: string, rep: AddNodesToDBCustomClusterResponse) => void
  ): Promise<AddNodesToDBCustomClusterResponse> {
    return this.request("AddNodesToDBCustomCluster", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomClusterResources）用于查询 DB Custom 集群的资源信息。
   */
  async DescribeDBCustomClusterResources(
    req: DescribeDBCustomClusterResourcesRequest,
    cb?: (error: string, rep: DescribeDBCustomClusterResourcesResponse) => void
  ): Promise<DescribeDBCustomClusterResourcesResponse> {
    return this.request("DescribeDBCustomClusterResources", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomNodeSecurityGroups）用于查询 DB Custom 节点安全组信息。
   */
  async DescribeDBCustomNodeSecurityGroups(
    req: DescribeDBCustomNodeSecurityGroupsRequest,
    cb?: (error: string, rep: DescribeDBCustomNodeSecurityGroupsResponse) => void
  ): Promise<DescribeDBCustomNodeSecurityGroupsResponse> {
    return this.request("DescribeDBCustomNodeSecurityGroups", req, cb)
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
   * 该接口（ModifyDBCustomNodeSecurityGroups）用于修改 DB Custom 节点安全组。
   */
  async ModifyDBCustomNodeSecurityGroups(
    req: ModifyDBCustomNodeSecurityGroupsRequest,
    cb?: (error: string, rep: ModifyDBCustomNodeSecurityGroupsResponse) => void
  ): Promise<ModifyDBCustomNodeSecurityGroupsResponse> {
    return this.request("ModifyDBCustomNodeSecurityGroups", req, cb)
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
   * 该接口(DescribeDBCustomRegions) 用于查询 DB Custom 支持的地域列表。
   */
  async DescribeDBCustomRegions(
    req?: DescribeDBCustomRegionsRequest,
    cb?: (error: string, rep: DescribeDBCustomRegionsResponse) => void
  ): Promise<DescribeDBCustomRegionsResponse> {
    return this.request("DescribeDBCustomRegions", req, cb)
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
   * 该接口(DescribeDBCustomNodeTypes) 用于查询 DB Custom 节点支持的机型信息。
   */
  async DescribeDBCustomNodeTypes(
    req: DescribeDBCustomNodeTypesRequest,
    cb?: (error: string, rep: DescribeDBCustomNodeTypesResponse) => void
  ): Promise<DescribeDBCustomNodeTypesResponse> {
    return this.request("DescribeDBCustomNodeTypes", req, cb)
  }

  /**
   * 该接口（ModifyDBCustomClusterTags）用于修改 DB Custom 集群绑定的标签。
   */
  async ModifyDBCustomClusterTags(
    req: ModifyDBCustomClusterTagsRequest,
    cb?: (error: string, rep: ModifyDBCustomClusterTagsResponse) => void
  ): Promise<ModifyDBCustomClusterTagsResponse> {
    return this.request("ModifyDBCustomClusterTags", req, cb)
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
   * 该接口（RenewDBCustomNode）用于给 DB Custom 节点续费，或者给已经隔离的实例解除隔离。
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
   * 该接口（ModifyDBCustomClusterAttributes）用于修改 DB Custom 集群的属性。
   */
  async ModifyDBCustomClusterAttributes(
    req: ModifyDBCustomClusterAttributesRequest,
    cb?: (error: string, rep: ModifyDBCustomClusterAttributesResponse) => void
  ): Promise<ModifyDBCustomClusterAttributesResponse> {
    return this.request("ModifyDBCustomClusterAttributes", req, cb)
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
   * 该接口（RemoveNodesFromDBCustomCluster）用于从 DB Custom 集群移出节点。
   */
  async RemoveNodesFromDBCustomCluster(
    req: RemoveNodesFromDBCustomClusterRequest,
    cb?: (error: string, rep: RemoveNodesFromDBCustomClusterResponse) => void
  ): Promise<RemoveNodesFromDBCustomClusterResponse> {
    return this.request("RemoveNodesFromDBCustomCluster", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomClusterNodeConfig）用于查询 DB Custom 集群内节点的配置信息。
   */
  async DescribeDBCustomClusterNodeConfig(
    req: DescribeDBCustomClusterNodeConfigRequest,
    cb?: (error: string, rep: DescribeDBCustomClusterNodeConfigResponse) => void
  ): Promise<DescribeDBCustomClusterNodeConfigResponse> {
    return this.request("DescribeDBCustomClusterNodeConfig", req, cb)
  }

  /**
   * 该接口（ModifyDBCustomNodeTags）用于修改 DB Custom 节点绑定的标签。
   */
  async ModifyDBCustomNodeTags(
    req: ModifyDBCustomNodeTagsRequest,
    cb?: (error: string, rep: ModifyDBCustomNodeTagsResponse) => void
  ): Promise<ModifyDBCustomNodeTagsResponse> {
    return this.request("ModifyDBCustomNodeTags", req, cb)
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
   * 该接口(DescribeDBCustomZones) 用于查询指定地域的 DB Custom 可用区列表。
   */
  async DescribeDBCustomZones(
    req?: DescribeDBCustomZonesRequest,
    cb?: (error: string, rep: DescribeDBCustomZonesResponse) => void
  ): Promise<DescribeDBCustomZonesResponse> {
    return this.request("DescribeDBCustomZones", req, cb)
  }

  /**
   * 该接口（DescribeDBCustomClusterNodeResources）用于查询 DB Custom 集群内节点的资源信息。
   */
  async DescribeDBCustomClusterNodeResources(
    req: DescribeDBCustomClusterNodeResourcesRequest,
    cb?: (error: string, rep: DescribeDBCustomClusterNodeResourcesResponse) => void
  ): Promise<DescribeDBCustomClusterNodeResourcesResponse> {
    return this.request("DescribeDBCustomClusterNodeResources", req, cb)
  }

  /**
   * 该接口（ModifyDBCustomClusterNodeConfig）用于修改 DB Custom 集群中节点的配置。
   */
  async ModifyDBCustomClusterNodeConfig(
    req: ModifyDBCustomClusterNodeConfigRequest,
    cb?: (error: string, rep: ModifyDBCustomClusterNodeConfigResponse) => void
  ): Promise<ModifyDBCustomClusterNodeConfigResponse> {
    return this.request("ModifyDBCustomClusterNodeConfig", req, cb)
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
   * 该接口（DescribeDBCustomClusters）为 DB Custom 集群列表查询接口。
   */
  async DescribeDBCustomClusters(
    req: DescribeDBCustomClustersRequest,
    cb?: (error: string, rep: DescribeDBCustomClustersResponse) => void
  ): Promise<DescribeDBCustomClustersResponse> {
    return this.request("DescribeDBCustomClusters", req, cb)
  }
}

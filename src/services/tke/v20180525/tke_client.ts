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
  DescribeClusterEndpointVipStatusRequest,
  DescribeClusterSecurityResponse,
  DescribeClusterSecurityRequest,
  DeleteClusterInstancesResponse,
  DescribeClusterKubeconfigResponse,
  RemoveNodeFromNodePoolResponse,
  CreateClusterRouteRequest,
  DescribeClusterEndpointVipStatusResponse,
  ModifyClusterEndpointSPRequest,
  DescribeClusterInstancesResponse,
  DeleteClusterResponse,
  AutoscalingAdded,
  CreateClusterRouteTableResponse,
  DeleteClusterEndpointResponse,
  RouteInfo,
  DeleteClusterRequest,
  RunInstancesForNode,
  DeleteClusterAsGroupsRequest,
  DescribeExistedInstancesRequest,
  DescribeRegionsResponse,
  CreateClusterRouteResponse,
  AddNodeToNodePoolRequest,
  NodePool,
  RouteTableInfo,
  ClusterAsGroup,
  Instance,
  CreateClusterNodePoolFromExistingAsgRequest,
  Tag,
  DescribePrometheusAgentInstancesRequest,
  ClusterNetworkSettings,
  DescribeImagesResponse,
  AutoScalingGroupRange,
  ModifyClusterAttributeRequest,
  DeleteClusterRouteResponse,
  CreateClusterEndpointVipResponse,
  DescribeClusterRoutesResponse,
  DescribeClustersRequest,
  ExtensionAddon,
  RegionInstance,
  Label,
  DeleteClusterEndpointVipResponse,
  ClusterBasicSettings,
  CreatePrometheusDashboardResponse,
  RouteTableConflict,
  DeleteClusterInstancesRequest,
  ModifyClusterAsGroupAttributeResponse,
  CreateClusterInstancesRequest,
  ManuallyAdded,
  DescribeClusterRouteTablesResponse,
  DescribeClusterKubeconfigRequest,
  ClusterCIDRSettings,
  CreateClusterEndpointVipRequest,
  Taint,
  ExistedInstance,
  DescribeClusterNodePoolsResponse,
  AddNodeToNodePoolResponse,
  TagSpecification,
  DescribeRegionsRequest,
  DescribeClustersResponse,
  ClusterExtraArgs,
  DataDisk,
  ModifyClusterNodePoolResponse,
  DescribeExistedInstancesResponse,
  ResourceDeleteOption,
  LoginSettings,
  CreateClusterNodePoolFromExistingAsgResponse,
  DescribeClusterEndpointStatusRequest,
  ModifyClusterAttributeResponse,
  EnhancedService,
  CreateClusterAsGroupRequest,
  DescribeRouteTableConflictsResponse,
  CreateClusterResponse,
  RunSecurityServiceEnabled,
  DeleteClusterRouteTableRequest,
  CreateClusterRequest,
  InstanceExtraArgs,
  AcquireClusterAdminRoleRequest,
  CreateClusterAsGroupResponse,
  DeleteClusterAsGroupsResponse,
  DescribeClusterInstancesRequest,
  InstanceAdvancedSettings,
  Filter,
  ModifyClusterNodePoolRequest,
  ImageInstance,
  CreateClusterEndpointResponse,
  CreateClusterNodePoolRequest,
  ClusterAdvancedSettings,
  AcquireClusterAdminRoleResponse,
  DeleteClusterNodePoolRequest,
  DeleteClusterEndpointVipRequest,
  Cluster,
  DescribeClusterEndpointStatusResponse,
  CreatePrometheusDashboardRequest,
  AddExistedInstancesResponse,
  DeleteClusterRouteTableResponse,
  DescribeClusterAsGroupOptionRequest,
  DescribePrometheusAgentInstancesResponse,
  CreateClusterEndpointRequest,
  AddExistedInstancesRequest,
  ClusterAsGroupOption,
  CreateClusterInstancesResponse,
  DescribeClusterNodePoolsRequest,
  DescribeClusterRouteTablesRequest,
  ExistedInstancesForNode,
  DescribeClusterRoutesRequest,
  DeleteClusterRouteRequest,
  DeleteClusterEndpointRequest,
  DescribeClusterNodePoolDetailRequest,
  CreateClusterRouteTableRequest,
  DescribeClusterAsGroupsRequest,
  DescribeImagesRequest,
  ModifyClusterEndpointSPResponse,
  DescribeRouteTableConflictsRequest,
  ExistedInstancesPara,
  DescribeClusterAsGroupOptionResponse,
  ClusterAsGroupAttribute,
  DeleteClusterNodePoolResponse,
  RunMonitorServiceEnabled,
  CreateClusterNodePoolResponse,
  ModifyClusterAsGroupAttributeRequest,
  InstanceDataDiskMountSetting,
  NodeCountSummary,
  DescribeClusterAsGroupsResponse,
  RemoveNodeFromNodePoolRequest,
  DescribeClusterNodePoolDetailResponse,
} from "./tke_models"

/**
 * tke client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tke.tencentcloudapi.com", "2018-05-25", clientConfig)
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
   * 创建grafana监控面板
   */
  async CreatePrometheusDashboard(
    req: CreatePrometheusDashboardRequest,
    cb?: (error: string, rep: CreatePrometheusDashboardResponse) => void
  ): Promise<CreatePrometheusDashboardResponse> {
    return this.request("CreatePrometheusDashboard", req, cb)
  }

  /**
   * 查询节点池详情
   */
  async DescribeClusterNodePoolDetail(
    req: DescribeClusterNodePoolDetailRequest,
    cb?: (error: string, rep: DescribeClusterNodePoolDetailResponse) => void
  ): Promise<DescribeClusterNodePoolDetailResponse> {
    return this.request("DescribeClusterNodePoolDetail", req, cb)
  }

  /**
   * 获取镜像信息
   */
  async DescribeImages(
    req?: DescribeImagesRequest,
    cb?: (error: string, rep: DescribeImagesResponse) => void
  ): Promise<DescribeImagesResponse> {
    return this.request("DescribeImages", req, cb)
  }

  /**
   * 修改集群伸缩组属性
   */
  async ModifyClusterAsGroupAttribute(
    req: ModifyClusterAsGroupAttributeRequest,
    cb?: (error: string, rep: ModifyClusterAsGroupAttributeResponse) => void
  ): Promise<ModifyClusterAsGroupAttributeResponse> {
    return this.request("ModifyClusterAsGroupAttribute", req, cb)
  }

  /**
   * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
   */
  async DeleteClusterEndpoint(
    req: DeleteClusterEndpointRequest,
    cb?: (error: string, rep: DeleteClusterEndpointResponse) => void
  ): Promise<DeleteClusterEndpointResponse> {
    return this.request("DeleteClusterEndpoint", req, cb)
  }

  /**
   * 扩展(新建)集群节点
   */
  async CreateClusterInstances(
    req: CreateClusterInstancesRequest,
    cb?: (error: string, rep: CreateClusterInstancesResponse) => void
  ): Promise<CreateClusterInstancesResponse> {
    return this.request("CreateClusterInstances", req, cb)
  }

  /**
   * 修改集群属性
   */
  async ModifyClusterAttribute(
    req: ModifyClusterAttributeRequest,
    cb?: (error: string, rep: ModifyClusterAttributeResponse) => void
  ): Promise<ModifyClusterAttributeResponse> {
    return this.request("ModifyClusterAttribute", req, cb)
  }

  /**
   * 删除集群伸缩组
   */
  async DeleteClusterAsGroups(
    req: DeleteClusterAsGroupsRequest,
    cb?: (error: string, rep: DeleteClusterAsGroupsResponse) => void
  ): Promise<DeleteClusterAsGroupsResponse> {
    return this.request("DeleteClusterAsGroups", req, cb)
  }

  /**
   * 删除集群路由
   */
  async DeleteClusterRoute(
    req: DeleteClusterRouteRequest,
    cb?: (error: string, rep: DeleteClusterRouteResponse) => void
  ): Promise<DeleteClusterRouteResponse> {
    return this.request("DeleteClusterRoute", req, cb)
  }

  /**
   * 移出节点池节点，但保留在集群内
   */
  async RemoveNodeFromNodePool(
    req: RemoveNodeFromNodePoolRequest,
    cb?: (error: string, rep: RemoveNodeFromNodePoolResponse) => void
  ): Promise<RemoveNodeFromNodePoolResponse> {
    return this.request("RemoveNodeFromNodePool", req, cb)
  }

  /**
   * 查询集群开启端口流程状态(仅支持托管集群外网端口)
   */
  async DescribeClusterEndpointVipStatus(
    req: DescribeClusterEndpointVipStatusRequest,
    cb?: (error: string, rep: DescribeClusterEndpointVipStatusResponse) => void
  ): Promise<DescribeClusterEndpointVipStatusResponse> {
    return this.request("DescribeClusterEndpointVipStatus", req, cb)
  }

  /**
   * 删除集群(YUNAPI V3版本)
   */
  async DeleteCluster(
    req: DeleteClusterRequest,
    cb?: (error: string, rep: DeleteClusterResponse) => void
  ): Promise<DeleteClusterResponse> {
    return this.request("DeleteCluster", req, cb)
  }

  /**
   * 为已经存在的集群创建伸缩组
   */
  async CreateClusterAsGroup(
    req: CreateClusterAsGroupRequest,
    cb?: (error: string, rep: CreateClusterAsGroupResponse) => void
  ): Promise<CreateClusterAsGroupResponse> {
    return this.request("CreateClusterAsGroup", req, cb)
  }

  /**
   * 通过此接口，可以获取集群的tke:admin的ClusterRole，即管理员角色，可以用于CAM侧高权限的用户，通过CAM策略给予子账户此接口权限，进而可以通过此接口直接获取到kubernetes集群内的管理员角色。
   */
  async AcquireClusterAdminRole(
    req: AcquireClusterAdminRoleRequest,
    cb?: (error: string, rep: AcquireClusterAdminRoleResponse) => void
  ): Promise<AcquireClusterAdminRoleResponse> {
    return this.request("AcquireClusterAdminRole", req, cb)
  }

  /**
   * 查询已经存在的节点，判断是否可以加入集群
   */
  async DescribeExistedInstances(
    req: DescribeExistedInstancesRequest,
    cb?: (error: string, rep: DescribeExistedInstancesResponse) => void
  ): Promise<DescribeExistedInstancesResponse> {
    return this.request("DescribeExistedInstances", req, cb)
  }

  /**
   * 创建集群路由
   */
  async CreateClusterRoute(
    req: CreateClusterRouteRequest,
    cb?: (error: string, rep: CreateClusterRouteResponse) => void
  ): Promise<CreateClusterRouteResponse> {
    return this.request("CreateClusterRoute", req, cb)
  }

  /**
   * 创建集群路由表
   */
  async CreateClusterRouteTable(
    req: CreateClusterRouteTableRequest,
    cb?: (error: string, rep: CreateClusterRouteTableResponse) => void
  ): Promise<CreateClusterRouteTableResponse> {
    return this.request("CreateClusterRouteTable", req, cb)
  }

  /**
   * 编辑节点池
   */
  async ModifyClusterNodePool(
    req: ModifyClusterNodePoolRequest,
    cb?: (error: string, rep: ModifyClusterNodePoolResponse) => void
  ): Promise<ModifyClusterNodePoolResponse> {
    return this.request("ModifyClusterNodePool", req, cb)
  }

  /**
   * 集群弹性伸缩配置
   */
  async DescribeClusterAsGroupOption(
    req: DescribeClusterAsGroupOptionRequest,
    cb?: (error: string, rep: DescribeClusterAsGroupOptionResponse) => void
  ): Promise<DescribeClusterAsGroupOptionResponse> {
    return this.request("DescribeClusterAsGroupOption", req, cb)
  }

  /**
   * 将集群内节点移入节点池
   */
  async AddNodeToNodePool(
    req: AddNodeToNodePoolRequest,
    cb?: (error: string, rep: AddNodeToNodePoolResponse) => void
  ): Promise<AddNodeToNodePoolResponse> {
    return this.request("AddNodeToNodePool", req, cb)
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
   * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
   */
  async DescribeClusterEndpointStatus(
    req: DescribeClusterEndpointStatusRequest,
    cb?: (error: string, rep: DescribeClusterEndpointStatusResponse) => void
  ): Promise<DescribeClusterEndpointStatusResponse> {
    return this.request("DescribeClusterEndpointStatus", req, cb)
  }

  /**
   * 集群关联的伸缩组列表
   */
  async DescribeClusterAsGroups(
    req: DescribeClusterAsGroupsRequest,
    cb?: (error: string, rep: DescribeClusterAsGroupsResponse) => void
  ): Promise<DescribeClusterAsGroupsResponse> {
    return this.request("DescribeClusterAsGroups", req, cb)
  }

  /**
   * 创建节点池
   */
  async CreateClusterNodePool(
    req: CreateClusterNodePoolRequest,
    cb?: (error: string, rep: CreateClusterNodePoolResponse) => void
  ): Promise<CreateClusterNodePoolResponse> {
    return this.request("CreateClusterNodePool", req, cb)
  }

  /**
   * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
   */
  async CreateClusterEndpoint(
    req: CreateClusterEndpointRequest,
    cb?: (error: string, rep: CreateClusterEndpointResponse) => void
  ): Promise<CreateClusterEndpointResponse> {
    return this.request("CreateClusterEndpoint", req, cb)
  }

  /**
   * 从伸缩组创建节点池
   */
  async CreateClusterNodePoolFromExistingAsg(
    req: CreateClusterNodePoolFromExistingAsgRequest,
    cb?: (error: string, rep: CreateClusterNodePoolFromExistingAsgResponse) => void
  ): Promise<CreateClusterNodePoolFromExistingAsgResponse> {
    return this.request("CreateClusterNodePoolFromExistingAsg", req, cb)
  }

  /**
   * 获取关联目标集群的实例列表
   */
  async DescribePrometheusAgentInstances(
    req: DescribePrometheusAgentInstancesRequest,
    cb?: (error: string, rep: DescribePrometheusAgentInstancesResponse) => void
  ): Promise<DescribePrometheusAgentInstancesResponse> {
    return this.request("DescribePrometheusAgentInstances", req, cb)
  }

  /**
   * 查询集群路由表
   */
  async DescribeClusterRouteTables(
    req?: DescribeClusterRouteTablesRequest,
    cb?: (error: string, rep: DescribeClusterRouteTablesResponse) => void
  ): Promise<DescribeClusterRouteTablesResponse> {
    return this.request("DescribeClusterRouteTables", req, cb)
  }

  /**
   * 获取容器服务支持的所有地域
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 添加已经存在的实例到集群
   */
  async AddExistedInstances(
    req: AddExistedInstancesRequest,
    cb?: (error: string, rep: AddExistedInstancesResponse) => void
  ): Promise<AddExistedInstancesResponse> {
    return this.request("AddExistedInstances", req, cb)
  }

  /**
   * 集群的密钥信息
   */
  async DescribeClusterSecurity(
    req: DescribeClusterSecurityRequest,
    cb?: (error: string, rep: DescribeClusterSecurityResponse) => void
  ): Promise<DescribeClusterSecurityResponse> {
    return this.request("DescribeClusterSecurity", req, cb)
  }

  /**
   * 查询路由表冲突列表
   */
  async DescribeRouteTableConflicts(
    req: DescribeRouteTableConflictsRequest,
    cb?: (error: string, rep: DescribeRouteTableConflictsResponse) => void
  ): Promise<DescribeRouteTableConflictsResponse> {
    return this.request("DescribeRouteTableConflicts", req, cb)
  }

  /**
   *  查询集群下节点实例信息
   */
  async DescribeClusterInstances(
    req: DescribeClusterInstancesRequest,
    cb?: (error: string, rep: DescribeClusterInstancesResponse) => void
  ): Promise<DescribeClusterInstancesResponse> {
    return this.request("DescribeClusterInstances", req, cb)
  }

  /**
   * 删除节点池
   */
  async DeleteClusterNodePool(
    req: DeleteClusterNodePoolRequest,
    cb?: (error: string, rep: DeleteClusterNodePoolResponse) => void
  ): Promise<DeleteClusterNodePoolResponse> {
    return this.request("DeleteClusterNodePool", req, cb)
  }

  /**
   * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
   */
  async DeleteClusterEndpointVip(
    req: DeleteClusterEndpointVipRequest,
    cb?: (error: string, rep: DeleteClusterEndpointVipResponse) => void
  ): Promise<DeleteClusterEndpointVipResponse> {
    return this.request("DeleteClusterEndpointVip", req, cb)
  }

  /**
   * 删除集群中的实例
   */
  async DeleteClusterInstances(
    req: DeleteClusterInstancesRequest,
    cb?: (error: string, rep: DeleteClusterInstancesResponse) => void
  ): Promise<DeleteClusterInstancesResponse> {
    return this.request("DeleteClusterInstances", req, cb)
  }

  /**
   * 查询节点池列表
   */
  async DescribeClusterNodePools(
    req: DescribeClusterNodePoolsRequest,
    cb?: (error: string, rep: DescribeClusterNodePoolsResponse) => void
  ): Promise<DescribeClusterNodePoolsResponse> {
    return this.request("DescribeClusterNodePools", req, cb)
  }

  /**
   * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
   */
  async DescribeClusterKubeconfig(
    req: DescribeClusterKubeconfigRequest,
    cb?: (error: string, rep: DescribeClusterKubeconfigResponse) => void
  ): Promise<DescribeClusterKubeconfigResponse> {
    return this.request("DescribeClusterKubeconfig", req, cb)
  }

  /**
   * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
   */
  async ModifyClusterEndpointSP(
    req: ModifyClusterEndpointSPRequest,
    cb?: (error: string, rep: ModifyClusterEndpointSPResponse) => void
  ): Promise<ModifyClusterEndpointSPResponse> {
    return this.request("ModifyClusterEndpointSP", req, cb)
  }

  /**
   * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
   */
  async CreateClusterEndpointVip(
    req: CreateClusterEndpointVipRequest,
    cb?: (error: string, rep: CreateClusterEndpointVipResponse) => void
  ): Promise<CreateClusterEndpointVipResponse> {
    return this.request("CreateClusterEndpointVip", req, cb)
  }

  /**
   * 删除集群路由表
   */
  async DeleteClusterRouteTable(
    req: DeleteClusterRouteTableRequest,
    cb?: (error: string, rep: DeleteClusterRouteTableResponse) => void
  ): Promise<DeleteClusterRouteTableResponse> {
    return this.request("DeleteClusterRouteTable", req, cb)
  }

  /**
   * 查询集群路由
   */
  async DescribeClusterRoutes(
    req: DescribeClusterRoutesRequest,
    cb?: (error: string, rep: DescribeClusterRoutesResponse) => void
  ): Promise<DescribeClusterRoutesResponse> {
    return this.request("DescribeClusterRoutes", req, cb)
  }
}

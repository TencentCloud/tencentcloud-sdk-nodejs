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
  HorizontalPodAutoscalerSpec,
  CustomPromConfig,
  Service,
  MeshConfig,
  LoadBalancerStatus,
  DescribeMeshResponse,
  AutoInjectionNamespaceState,
  UnlinkClusterResponse,
  LinkClusterListResponse,
  ModifyMeshResponse,
  IngressGatewayStatus,
  ResourceMetricSource,
  CreateMeshResponse,
  LinkClusterListRequest,
  ClusterConfig,
  MetricSpec,
  WorkloadConfig,
  EgressGateway,
  IstioConfig,
  Mesh,
  GrafanaInfo,
  DeleteMeshResponse,
  MeshStatus,
  IstiodConfig,
  InjectConfig,
  DeleteMeshRequest,
  PodsMetricSource,
  Resource,
  DeployConfig,
  DescribeMeshRequest,
  ActiveOperation,
  CreateMeshRequest,
  PrometheusStatus,
  CrossRegionConfig,
  Filter,
  PrometheusConfig,
  ExtensiveCluster,
  SmartDNSConfig,
  DescribeMeshListRequest,
  UnlinkClusterRequest,
  CLS,
  TracingConfig,
  IngressGateway,
  ExtensiveClusters,
  SelectedItems,
  ModifyMeshRequest,
  Cluster,
  Tag,
  DescribeMeshListResponse,
  TracingZipkin,
  APM,
  ResourceRequirements,
  ClusterStatus,
  SelectedRange,
  AccessLogConfig,
  LoadBalancer,
} from "./tcm_models"

/**
 * tcm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tcm.tencentcloudapi.com", "2021-04-13", clientConfig)
  }

  /**
   * 删除网格
   */
  async DeleteMesh(
    req: DeleteMeshRequest,
    cb?: (error: string, rep: DeleteMeshResponse) => void
  ): Promise<DeleteMeshResponse> {
    return this.request("DeleteMesh", req, cb)
  }

  /**
   * 关联集群
   */
  async LinkClusterList(
    req: LinkClusterListRequest,
    cb?: (error: string, rep: LinkClusterListResponse) => void
  ): Promise<LinkClusterListResponse> {
    return this.request("LinkClusterList", req, cb)
  }

  /**
   * 查询网格列表
   */
  async DescribeMeshList(
    req: DescribeMeshListRequest,
    cb?: (error: string, rep: DescribeMeshListResponse) => void
  ): Promise<DescribeMeshListResponse> {
    return this.request("DescribeMeshList", req, cb)
  }

  /**
   * 解关联集群
   */
  async UnlinkCluster(
    req: UnlinkClusterRequest,
    cb?: (error: string, rep: UnlinkClusterResponse) => void
  ): Promise<UnlinkClusterResponse> {
    return this.request("UnlinkCluster", req, cb)
  }

  /**
   * 修改网格
   */
  async ModifyMesh(
    req: ModifyMeshRequest,
    cb?: (error: string, rep: ModifyMeshResponse) => void
  ): Promise<ModifyMeshResponse> {
    return this.request("ModifyMesh", req, cb)
  }

  /**
   * 创建网格
   */
  async CreateMesh(
    req: CreateMeshRequest,
    cb?: (error: string, rep: CreateMeshResponse) => void
  ): Promise<CreateMeshResponse> {
    return this.request("CreateMesh", req, cb)
  }

  /**
   * 查询网格详情
   */
  async DescribeMesh(
    req: DescribeMeshRequest,
    cb?: (error: string, rep: DescribeMeshResponse) => void
  ): Promise<DescribeMeshResponse> {
    return this.request("DescribeMesh", req, cb)
  }
}

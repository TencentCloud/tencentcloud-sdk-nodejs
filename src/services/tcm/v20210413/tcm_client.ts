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
  UnlinkPrometheusResponse,
  LoadBalancerStatus,
  ModifyTracingConfigResponse,
  PodsMetricSource,
  DescribeMeshResponse,
  ModifyAccessLogConfigRequest,
  AutoInjectionNamespaceState,
  UnlinkClusterResponse,
  LinkClusterListResponse,
  ModifyAccessLogConfigResponse,
  IngressGatewayStatus,
  ResourceMetricSource,
  CreateMeshResponse,
  LinkClusterListRequest,
  ClusterConfig,
  UnlinkPrometheusRequest,
  MetricSpec,
  WorkloadConfig,
  EgressGateway,
  DescribeMeshRequest,
  IstioConfig,
  Mesh,
  DescribeAccessLogConfigResponse,
  LinkPrometheusRequest,
  GrafanaInfo,
  DeleteMeshResponse,
  MeshStatus,
  IstiodConfig,
  InjectConfig,
  DeleteMeshRequest,
  LinkPrometheusResponse,
  Resource,
  DeployConfig,
  DescribeAccessLogConfigRequest,
  ActiveOperation,
  CreateMeshRequest,
  PrometheusStatus,
  CrossRegionConfig,
  Filter,
  PrometheusConfig,
  ExtensiveCluster,
  SmartDNSConfig,
  DescribeMeshListRequest,
  ModifyMeshResponse,
  UnlinkClusterRequest,
  CLS,
  TracingConfig,
  IngressGateway,
  EgressGatewayStatus,
  ExtensiveClusters,
  SelectedItems,
  ModifyTracingConfigRequest,
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
   * 获取AccessLog配置
   */
  async DescribeAccessLogConfig(
    req: DescribeAccessLogConfigRequest,
    cb?: (error: string, rep: DescribeAccessLogConfigResponse) => void
  ): Promise<DescribeAccessLogConfigResponse> {
    return this.request("DescribeAccessLogConfig", req, cb)
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
   * 关联Prometheus
   */
  async LinkPrometheus(
    req: LinkPrometheusRequest,
    cb?: (error: string, rep: LinkPrometheusResponse) => void
  ): Promise<LinkPrometheusResponse> {
    return this.request("LinkPrometheus", req, cb)
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
   * 修改网格
   */
  async ModifyMesh(
    req: ModifyMeshRequest,
    cb?: (error: string, rep: ModifyMeshResponse) => void
  ): Promise<ModifyMeshResponse> {
    return this.request("ModifyMesh", req, cb)
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
   * 修改 Tracing 配置
   */
  async ModifyTracingConfig(
    req: ModifyTracingConfigRequest,
    cb?: (error: string, rep: ModifyTracingConfigResponse) => void
  ): Promise<ModifyTracingConfigResponse> {
    return this.request("ModifyTracingConfig", req, cb)
  }

  /**
   * 修改访问日志配置
   */
  async ModifyAccessLogConfig(
    req: ModifyAccessLogConfigRequest,
    cb?: (error: string, rep: ModifyAccessLogConfigResponse) => void
  ): Promise<ModifyAccessLogConfigResponse> {
    return this.request("ModifyAccessLogConfig", req, cb)
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

  /**
   * 解除关联Prometheus
   */
  async UnlinkPrometheus(
    req: UnlinkPrometheusRequest,
    cb?: (error: string, rep: UnlinkPrometheusResponse) => void
  ): Promise<UnlinkPrometheusResponse> {
    return this.request("UnlinkPrometheus", req, cb)
  }
}

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
  Service,
  MeshConfig,
  LoadBalancerStatus,
  DescribeMeshResponse,
  AutoInjectionNamespaceState,
  IngressGatewayStatus,
  ResourceMetricSource,
  DescribeMeshListRequest,
  ClusterConfig,
  MetricSpec,
  WorkloadConfig,
  EgressGateway,
  Mesh,
  GrafanaInfo,
  MeshStatus,
  IstiodConfig,
  InjectConfig,
  PodsMetricSource,
  Resource,
  DeployConfig,
  DescribeMeshRequest,
  ActiveOperation,
  PrometheusStatus,
  Filter,
  PrometheusConfig,
  IstioConfig,
  CLS,
  TracingConfig,
  IngressGateway,
  SelectedItems,
  Cluster,
  DescribeMeshListResponse,
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
   * 查询网格列表
   */
  async DescribeMeshList(
    req: DescribeMeshListRequest,
    cb?: (error: string, rep: DescribeMeshListResponse) => void
  ): Promise<DescribeMeshListResponse> {
    return this.request("DescribeMeshList", req, cb)
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

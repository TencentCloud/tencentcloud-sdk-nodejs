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
  ClusterOverview,
  DescribeClustersRequest,
  LoginSettings,
  DeleteClusterResponse,
  InternetAccessible,
  CFSOption,
  LoginNode,
  CreateClusterRequest,
  Tag,
  CreateClusterResponse,
  BindAutoScalingGroupResponse,
  ManagerNodeOverview,
  ManagerNode,
  DeleteClusterRequest,
  ComputeNodeOverview,
  SystemDisk,
  Placement,
  BindAutoScalingGroupRequest,
  VirtualPrivateCloud,
  StorageOption,
  LoginNodeOverview,
  ComputeNode,
  DescribeClustersResponse,
  GooseFSOption,
  InstanceChargePrepaid,
  DataDisk,
} from "./thpc_models"

/**
 * thpc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("thpc.tencentcloudapi.com", "2021-11-09", clientConfig)
  }

  /**
   * 本接口（DeleteCluster）用于删除一个指定的集群。
   */
  async DeleteCluster(
    req: DeleteClusterRequest,
    cb?: (error: string, rep: DeleteClusterResponse) => void
  ): Promise<DeleteClusterResponse> {
    return this.request("DeleteCluster", req, cb)
  }

  /**
   * 本接口（DescribeClusters）用于查询集群列表。
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 本接口(BindAutoScalingGroup)用于为集群队列绑定弹性伸缩组
   */
  async BindAutoScalingGroup(
    req: BindAutoScalingGroupRequest,
    cb?: (error: string, rep: BindAutoScalingGroupResponse) => void
  ): Promise<BindAutoScalingGroupResponse> {
    return this.request("BindAutoScalingGroup", req, cb)
  }

  /**
   * 本接口 (CreateCluster) 用于创建并启动集群。
   */
  async CreateCluster(
    req: CreateClusterRequest,
    cb?: (error: string, rep: CreateClusterResponse) => void
  ): Promise<CreateClusterResponse> {
    return this.request("CreateCluster", req, cb)
  }
}

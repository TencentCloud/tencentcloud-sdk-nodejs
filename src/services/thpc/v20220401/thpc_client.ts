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
  DescribeAutoScalingConfigurationResponse,
  DescribeClusterStorageOptionRequest,
  ClusterOverview,
  QueueOverview,
  DescribeClustersRequest,
  SetAutoScalingConfigurationRequest,
  NodeOverview,
  DescribeNodesRequest,
  DeleteNodesResponse,
  AddClusterStorageOptionResponse,
  StorageOptionOverview,
  DeleteClusterResponse,
  ExpansionNodeConfig,
  NodeActivity,
  Placement,
  AddQueueRequest,
  LoginNodeOverview,
  CFSOption,
  ClusterActivity,
  CreateClusterResponse,
  DescribeQueuesRequest,
  SetAutoScalingConfigurationResponse,
  CreateClusterRequest,
  AddQueueResponse,
  DescribeClusterStorageOptionResponse,
  DescribeQueuesResponse,
  GooseFSOptionOverview,
  QueueConfig,
  InstanceChargePrepaid,
  Tag,
  LoginNode,
  BindAutoScalingGroupResponse,
  ManagerNodeOverview,
  ManagerNode,
  DeleteClusterRequest,
  ComputeNodeOverview,
  SystemDisk,
  LoginSettings,
  GooseFSOption,
  DescribeClusterActivitiesRequest,
  DeleteQueueRequest,
  Filter,
  AddNodesRequest,
  CFSOptionOverview,
  DeleteClusterStorageOptionRequest,
  AddClusterStorageOptionRequest,
  QueueConfigOverview,
  BindAutoScalingGroupRequest,
  VirtualPrivateCloud,
  ExpansionNodeConfigOverview,
  DescribeAutoScalingConfigurationRequest,
  StorageOption,
  InternetAccessible,
  ComputeNode,
  DeleteNodesRequest,
  DescribeClustersResponse,
  DeleteClusterStorageOptionResponse,
  DescribeNodesResponse,
  DescribeClusterActivitiesResponse,
  DataDisk,
  DeleteQueueResponse,
  AddNodesResponse,
} from "./thpc_models"

/**
 * thpc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("thpc.tencentcloudapi.com", "2022-04-01", clientConfig)
  }

  /**
   * 本接口 (DescribeClusterStorageOption) 用于查询集群存储选项信息。
   */
  async DescribeClusterStorageOption(
    req: DescribeClusterStorageOptionRequest,
    cb?: (error: string, rep: DescribeClusterStorageOptionResponse) => void
  ): Promise<DescribeClusterStorageOptionResponse> {
    return this.request("DescribeClusterStorageOption", req, cb)
  }

  /**
   * 本接口(DeleteNodes)用于删除指定集群中一个或者多个计算节点或者登录节点。
   */
  async DeleteNodes(
    req: DeleteNodesRequest,
    cb?: (error: string, rep: DeleteNodesResponse) => void
  ): Promise<DeleteNodesResponse> {
    return this.request("DeleteNodes", req, cb)
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

* 本接口为异步接口， 当创建集群请求下发成功后会返回一个集群`ID`和一个`RequestId`，此时创建集群操作并未立即完成。在此期间集群的状态将会处于“PENDING”或者“INITING”，集群创建结果可以通过调用 [DescribeClusters](https://cloud.tencent.com/document/product/1527/72100)  接口查询，如果集群状态(ClusterStatus)变为“RUNNING(运行中)”，则代表集群创建成功，“ INIT_FAILED”代表集群创建失败。
     */
  async CreateCluster(
    req: CreateClusterRequest,
    cb?: (error: string, rep: CreateClusterResponse) => void
  ): Promise<CreateClusterResponse> {
    return this.request("CreateCluster", req, cb)
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
   * 本接口(SetAutoScalingConfiguration)用于为集群设置集群弹性伸缩配置信息。
   */
  async SetAutoScalingConfiguration(
    req: SetAutoScalingConfigurationRequest,
    cb?: (error: string, rep: SetAutoScalingConfigurationResponse) => void
  ): Promise<SetAutoScalingConfigurationResponse> {
    return this.request("SetAutoScalingConfiguration", req, cb)
  }

  /**
   * 本接口(AddQueue)用于添加队列到指定集群。
   * 本接口为目前只支持SchedulerType为SLURM的集群。
   * 单个集群中队列数量上限为10个。
   */
  async AddQueue(
    req: AddQueueRequest,
    cb?: (error: string, rep: AddQueueResponse) => void
  ): Promise<AddQueueResponse> {
    return this.request("AddQueue", req, cb)
  }

  /**
   * 本接口 (DescribeNodes) 用于查询指定集群节点概览信息列表。
   */
  async DescribeNodes(
    req: DescribeNodesRequest,
    cb?: (error: string, rep: DescribeNodesResponse) => void
  ): Promise<DescribeNodesResponse> {
    return this.request("DescribeNodes", req, cb)
  }

  /**
     * 本接口(DeleteQueue)用于从指定集群删除队列。
* 本接口为目前只支持SchedulerType为SLURM的集群。

* 删除队列时，需要保证队列内不存在节点。
     */
  async DeleteQueue(
    req: DeleteQueueRequest,
    cb?: (error: string, rep: DeleteQueueResponse) => void
  ): Promise<DeleteQueueResponse> {
    return this.request("DeleteQueue", req, cb)
  }

  /**
   * 本接口 (DeleteClusterStorageOption) 用于删除集群存储选项信息。
   */
  async DeleteClusterStorageOption(
    req: DeleteClusterStorageOptionRequest,
    cb?: (error: string, rep: DeleteClusterStorageOptionResponse) => void
  ): Promise<DeleteClusterStorageOptionResponse> {
    return this.request("DeleteClusterStorageOption", req, cb)
  }

  /**
   * 本接口(AddNodes)用于添加一个或者多个计算节点或者登录节点到指定集群。
   */
  async AddNodes(
    req: AddNodesRequest,
    cb?: (error: string, rep: AddNodesResponse) => void
  ): Promise<AddNodesResponse> {
    return this.request("AddNodes", req, cb)
  }

  /**
   * 本接口(DescribeAutoScalingConfiguration)用于查询集群弹性伸缩配置信息。本接口仅适用于弹性伸缩类型为THPC_AS的集群。
   */
  async DescribeAutoScalingConfiguration(
    req: DescribeAutoScalingConfigurationRequest,
    cb?: (error: string, rep: DescribeAutoScalingConfigurationResponse) => void
  ): Promise<DescribeAutoScalingConfigurationResponse> {
    return this.request("DescribeAutoScalingConfiguration", req, cb)
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
   * 本接口（AddClusterStorageOption）用于添加集群存储选项信息。
   */
  async AddClusterStorageOption(
    req: AddClusterStorageOptionRequest,
    cb?: (error: string, rep: AddClusterStorageOptionResponse) => void
  ): Promise<AddClusterStorageOptionResponse> {
    return this.request("AddClusterStorageOption", req, cb)
  }

  /**
   * 本接口（DescribeClusterActivities）用于查询集群活动历史记录列表。
   */
  async DescribeClusterActivities(
    req: DescribeClusterActivitiesRequest,
    cb?: (error: string, rep: DescribeClusterActivitiesResponse) => void
  ): Promise<DescribeClusterActivitiesResponse> {
    return this.request("DescribeClusterActivities", req, cb)
  }

  /**
   * 本接口(DescribeQueues)用于查询指定集群队列概览信息列表。
   */
  async DescribeQueues(
    req: DescribeQueuesRequest,
    cb?: (error: string, rep: DescribeQueuesResponse) => void
  ): Promise<DescribeQueuesResponse> {
    return this.request("DescribeQueues", req, cb)
  }
}

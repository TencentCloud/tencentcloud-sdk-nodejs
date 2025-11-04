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
  ClusterOverview,
  NodeOverview,
  DescribeInitNodeScriptsRequest,
  AddNodesResponse,
  ExpansionNodeConfig,
  NodeActivity,
  ModifyClusterDeletionProtectionResponse,
  CreateWorkspacesResponse,
  SpaceVirtualPrivateCloud,
  ManagerNodeOverview,
  DeleteClusterRequest,
  SystemDisk,
  Task,
  TerminateWorkspacesResponse,
  ModifyInitNodeScriptsRequest,
  AttachNodesRequest,
  SpaceChargePrepaid,
  DescribeWorkspacesResponse,
  Tag,
  GooseFSOption,
  StorageOptionOverview,
  DescribeJobsOverviewRequest,
  DeleteClusterResponse,
  DescribeAutoScalingConfigurationResponse,
  DescribeClustersRequest,
  TerminateJobRequest,
  TagSpecification,
  DeleteNodesResponse,
  AddClusterStorageOptionResponse,
  DescribeWorkspacesRequest,
  AddQueueRequest,
  QueueConfigOverview,
  DescribeQueuesResponse,
  SubmitJobRequest,
  Job,
  ModifyWorkspacesRenewFlagResponse,
  Placement,
  DescribeNodesResponse,
  GooseFSOptionOverview,
  CFSOption,
  DeleteClusterStorageOptionRequest,
  RunMonitorServiceEnabled,
  ExpansionNodeConfigOverview,
  DeleteJobRequest,
  SpaceDataDisk,
  DetachNodesResponse,
  DescribeClusterStorageOptionRequest,
  StorageOption,
  LoginNodeOverview,
  ModifyWorkspacesAttributeResponse,
  DescribeClustersResponse,
  DescribeClusterActivitiesResponse,
  AddNodesRequest,
  DeleteQueueResponse,
  DataDisk,
  QueueOverview,
  DeleteJobResponse,
  LoginSettings,
  TaskDependence,
  EnhancedService,
  RunAutomationServiceEnabled,
  ClusterActivity,
  DescribeJobSubmitInfoResponse,
  CreateClusterResponse,
  RunSecurityServiceEnabled,
  DescribeQueuesRequest,
  SetAutoScalingConfigurationResponse,
  CreateClusterRequest,
  AddQueueResponse,
  DescribeClusterStorageOptionResponse,
  NodeScript,
  ModifyInitNodeScriptsResponse,
  CommandItem,
  ManagerNode,
  DescribeJobSubmitInfoRequest,
  OutputRedirect,
  ModifyWorkspacesAttributeRequest,
  Filter,
  Docker,
  Application,
  SpaceInfo,
  TerminateWorkspacesRequest,
  ComputeNode,
  DeleteNodesRequest,
  DeleteClusterStorageOptionResponse,
  TerminateJobResponse,
  SpaceInternetAccessible,
  DescribeJobsRequest,
  GooseFSxOptionOverview,
  SetAutoScalingConfigurationRequest,
  SubmitJobResponse,
  DescribeNodesRequest,
  DetachNodesRequest,
  AttachNodesResponse,
  LoginNode,
  DescribeJobsOverviewResponse,
  ModifyWorkspacesRenewFlagRequest,
  CreateWorkspacesRequest,
  SpaceSystemDisk,
  ComputeNodeOverview,
  QueueConfig,
  DescribeClusterActivitiesRequest,
  DescribeJobsResponse,
  ModifyClusterDeletionProtectionRequest,
  DescribeInitNodeScriptsResponse,
  CFSOptionOverview,
  DeleteQueueRequest,
  AddClusterStorageOptionRequest,
  GooseFSxOption,
  SpacePlacement,
  VirtualPrivateCloud,
  DescribeAutoScalingConfigurationRequest,
  StorageMount,
  InternetAccessible,
  JobView,
  EnvVar,
  InstanceChargePrepaid,
} from "./thpc_models"

/**
 * thpc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("thpc.tencentcloudapi.com", "2023-03-21", clientConfig)
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
   * 本接口(DeleteNodes)用于删除指定集群中一个或者多个计算节点或者登录节点。
   */
  async DeleteNodes(
    req: DeleteNodesRequest,
    cb?: (error: string, rep: DeleteNodesResponse) => void
  ): Promise<DeleteNodesResponse> {
    return this.request("DeleteNodes", req, cb)
  }

  /**
   * 本接口 (TerminateWorkspaces) 用于主动退还工作空间。
   */
  async TerminateWorkspaces(
    req: TerminateWorkspacesRequest,
    cb?: (error: string, rep: TerminateWorkspacesResponse) => void
  ): Promise<TerminateWorkspacesResponse> {
    return this.request("TerminateWorkspaces", req, cb)
  }

  /**
   * 本接口 (ModifyWorkspacesAttribute) 用于修改工作空间的属性（目前只支持修改工作空间的名称）。
   */
  async ModifyWorkspacesAttribute(
    req: ModifyWorkspacesAttributeRequest,
    cb?: (error: string, rep: ModifyWorkspacesAttributeResponse) => void
  ): Promise<ModifyWorkspacesAttributeResponse> {
    return this.request("ModifyWorkspacesAttribute", req, cb)
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
   * 本接口 (CreateWorkspaces) 用于创建工作空间。
   */
  async CreateWorkspaces(
    req: CreateWorkspacesRequest,
    cb?: (error: string, rep: CreateWorkspacesResponse) => void
  ): Promise<CreateWorkspacesResponse> {
    return this.request("CreateWorkspaces", req, cb)
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
   * 本接口 (DescribeJobs) 用于查询作业任务列表信息。
   */
  async DescribeJobs(
    req: DescribeJobsRequest,
    cb?: (error: string, rep: DescribeJobsResponse) => void
  ): Promise<DescribeJobsResponse> {
    return this.request("DescribeJobs", req, cb)
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
   * 本接口 (DetachNodes) 用于将一个或者多个计算节点从集群中移除，但是不销毁指定计算资源。
   */
  async DetachNodes(
    req: DetachNodesRequest,
    cb?: (error: string, rep: DetachNodesResponse) => void
  ): Promise<DetachNodesResponse> {
    return this.request("DetachNodes", req, cb)
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
   * 本接口（DescribeWorkspaces）用于查询工作空间列表。
   */
  async DescribeWorkspaces(
    req: DescribeWorkspacesRequest,
    cb?: (error: string, rep: DescribeWorkspacesResponse) => void
  ): Promise<DescribeWorkspacesResponse> {
    return this.request("DescribeWorkspaces", req, cb)
  }

  /**
   * 本接口 (TerminateJob) 用于终止一个作业任务。
   */
  async TerminateJob(
    req: TerminateJobRequest,
    cb?: (error: string, rep: TerminateJobResponse) => void
  ): Promise<TerminateJobResponse> {
    return this.request("TerminateJob", req, cb)
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
   * 本接口（DescribeClusters）用于查询集群列表。
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
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
   * 本接口 (DescribeInitNodeScripts) 用于查询节点初始化脚本列表。
   */
  async DescribeInitNodeScripts(
    req: DescribeInitNodeScriptsRequest,
    cb?: (error: string, rep: DescribeInitNodeScriptsResponse) => void
  ): Promise<DescribeInitNodeScriptsResponse> {
    return this.request("DescribeInitNodeScripts", req, cb)
  }

  /**
   * 本接口 (AttachNodes) 用于绑定一个或者多个计算节点指定资源到指定集群中。
   */
  async AttachNodes(
    req: AttachNodesRequest,
    cb?: (error: string, rep: AttachNodesResponse) => void
  ): Promise<AttachNodesResponse> {
    return this.request("AttachNodes", req, cb)
  }

  /**
   * 本接口用于查询作业的提交信息。
   */
  async DescribeJobSubmitInfo(
    req: DescribeJobSubmitInfoRequest,
    cb?: (error: string, rep: DescribeJobSubmitInfoResponse) => void
  ): Promise<DescribeJobSubmitInfoResponse> {
    return this.request("DescribeJobSubmitInfo", req, cb)
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
   * 本接口 (SubmitJob) 用于提交一个作业任务。
   */
  async SubmitJob(
    req: SubmitJobRequest,
    cb?: (error: string, rep: SubmitJobResponse) => void
  ): Promise<SubmitJobResponse> {
    return this.request("SubmitJob", req, cb)
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
   * 修改集群删除保护状态
   */
  async ModifyClusterDeletionProtection(
    req: ModifyClusterDeletionProtectionRequest,
    cb?: (error: string, rep: ModifyClusterDeletionProtectionResponse) => void
  ): Promise<ModifyClusterDeletionProtectionResponse> {
    return this.request("ModifyClusterDeletionProtection", req, cb)
  }

  /**
   * 本接口 (ModifyInitNodeScripts) 用于修改节点初始化脚本。
   */
  async ModifyInitNodeScripts(
    req: ModifyInitNodeScriptsRequest,
    cb?: (error: string, rep: ModifyInitNodeScriptsResponse) => void
  ): Promise<ModifyInitNodeScriptsResponse> {
    return this.request("ModifyInitNodeScripts", req, cb)
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
   * 本接口 (DescribeJobs) 用于查询作业任务列表信息。
   */
  async DescribeJobsOverview(
    req: DescribeJobsOverviewRequest,
    cb?: (error: string, rep: DescribeJobsOverviewResponse) => void
  ): Promise<DescribeJobsOverviewResponse> {
    return this.request("DescribeJobsOverview", req, cb)
  }

  /**
   * 本接口 (DeleteJob) 用于删除一个作业任务。
   */
  async DeleteJob(
    req: DeleteJobRequest,
    cb?: (error: string, rep: DeleteJobResponse) => void
  ): Promise<DeleteJobResponse> {
    return this.request("DeleteJob", req, cb)
  }

  /**
   * 本接口 (ModifyWorkspacesAttribute) 用于修改工作空间的属性（目前只支持修改工作空间的名称）。
   */
  async ModifyWorkspacesRenewFlag(
    req: ModifyWorkspacesRenewFlagRequest,
    cb?: (error: string, rep: ModifyWorkspacesRenewFlagResponse) => void
  ): Promise<ModifyWorkspacesRenewFlagResponse> {
    return this.request("ModifyWorkspacesRenewFlag", req, cb)
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
}

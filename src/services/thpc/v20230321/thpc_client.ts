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
  InquirePriceModifyWorkspacesChargeTypeRequest,
  NodeOverview,
  SpacePlacement,
  DisableClusterDedicatedProxyResponse,
  DescribeInitNodeScriptsRequest,
  AddNodesResponse,
  ExpansionNodeConfig,
  NodeActivity,
  EnableClusterMonitorResponse,
  ModifyClusterDeletionProtectionResponse,
  DescribeClusterDedicatedProxyResponse,
  CreateWorkspacesResponse,
  GenerateRegisterCommandRequest,
  SpaceVirtualPrivateCloud,
  ModifyWorkspacesRenewFlagRequest,
  DescribeQueueAutoScalingOverviewRequest,
  ModifyNodeAttributeResponse,
  DescribeInstanceFamiliesRequest,
  ManagerNodeOverview,
  DeleteClusterRequest,
  SystemDisk,
  Task,
  GenerateRegisterCodeRequest,
  ModifyScheduledActionResponse,
  ModifyInitNodeScriptsRequest,
  DisableClusterMonitorRequest,
  SpaceChargePrepaid,
  DescribeWorkspacesResponse,
  Tag,
  DescribeNodesResponse,
  ModifyScheduledActionRequest,
  DescribeJobsOverviewRequest,
  BindClusterVpcResponse,
  DeleteClusterResponse,
  DescribeAutoScalingConfigurationResponse,
  DescribeClustersRequest,
  TerminateJobRequest,
  TagSpecification,
  DeleteNodesResponse,
  AddClusterStorageOptionResponse,
  DescribeWorkspacesRequest,
  ModifyNodeAttributeRequest,
  AddQueueRequest,
  AttachNodesRequest,
  ExpansionPolicy,
  DeleteScheduledActionRequest,
  QueueConfigOverview,
  DescribeInstanceFamiliesResponse,
  ScalingPolicy,
  DescribeQueuesResponse,
  EnableClusterMonitorRequest,
  SubmitJobRequest,
  Job,
  DescribeScheduledActionsResponse,
  ModifyWorkspacesRenewFlagResponse,
  Placement,
  GooseFSOption,
  GooseFSOptionOverview,
  DescribeClusterDedicatedProxyRequest,
  SpaceInternetAccessible,
  CosOption,
  DescribeQueueAutoScalingResponse,
  SetAutoScalingConfigurationResponse,
  DeleteClusterStorageOptionRequest,
  ModifyClusterDeletionProtectionRequest,
  RunMonitorServiceEnabled,
  DescribeJobsRequest,
  ExpansionNodeConfigOverview,
  DeleteJobRequest,
  SpaceDataDisk,
  DetachNodesResponse,
  DescribeClusterStorageOptionRequest,
  StorageOption,
  LoginNodeOverview,
  ModifyWorkspacesAttributeResponse,
  ExpansionPriority,
  DescribeClustersResponse,
  DescribeClusterActivitiesResponse,
  DescribeInitNodeScriptsResponse,
  DeleteQueueResponse,
  DataDisk,
  BindClusterVpcRequest,
  QueueOverview,
  DeleteJobResponse,
  LoginSettings,
  TaskDependence,
  CreateScheduledActionRequest,
  EnhancedService,
  RunAutomationServiceEnabled,
  ClusterActivity,
  DescribeJobSubmitInfoResponse,
  CreateClusterResponse,
  DescribeScheduledActionsRequest,
  RunSecurityServiceEnabled,
  DescribeQueuesRequest,
  InquirePriceCreateWorkspacesRequest,
  CreateClusterRequest,
  AddQueueResponse,
  DescribeClusterStorageOptionResponse,
  CreateScheduledActionResponse,
  StorageOptionOverview,
  NodeScript,
  GenerateRegisterCodeResponse,
  CommandItem,
  ManagerNode,
  DescribeJobSubmitInfoRequest,
  EnableClusterDedicatedProxyRequest,
  OutputRedirect,
  DeleteQueueRequest,
  Filter,
  ModifyInitNodeScriptsResponse,
  DescribeClusterMonitorStatusResponse,
  Docker,
  InquirePriceCreateWorkspacesResponse,
  ModifyWorkspacesChargeTypeRequest,
  Application,
  SpaceInfo,
  TerminateWorkspacesRequest,
  GenerateRegisterCommandResponse,
  ComputeNode,
  DeleteNodesRequest,
  DeleteClusterStorageOptionResponse,
  TerminateJobResponse,
  DescribeQueueAutoScalingRequest,
  DisableClusterDedicatedProxyRequest,
  EnableClusterDedicatedProxyResponse,
  GooseFSxOptionOverview,
  CosOptionOverview,
  SetAutoScalingConfigurationRequest,
  SubmitJobResponse,
  DescribeNodesRequest,
  DetachNodesRequest,
  AttachNodesResponse,
  LoginNode,
  DescribeJobsOverviewResponse,
  CFSOption,
  Price,
  CreateWorkspacesRequest,
  DisableClusterMonitorResponse,
  TemplateOverrides,
  DescribeQueueAutoScalingOverviewResponse,
  SpaceSystemDisk,
  ComputeNodeOverview,
  QueueConfig,
  DescribeClusterActivitiesRequest,
  DeleteScheduledActionResponse,
  DescribeJobsResponse,
  AddNodesRequest,
  CFSOptionOverview,
  DescribeClusterMonitorStatusRequest,
  AddClusterStorageOptionRequest,
  GooseFSxOption,
  ModifyWorkspacesChargeTypeResponse,
  VirtualPrivateCloud,
  SetQueueAutoScalingResponse,
  TerminateWorkspacesResponse,
  DescribeAutoScalingConfigurationRequest,
  StorageMount,
  InternetAccessible,
  SetQueueAutoScalingRequest,
  ModifyWorkspacesAttributeRequest,
  JobView,
  InquirePriceModifyWorkspacesChargeTypeResponse,
  EnvVar,
  InstanceChargePrepaid,
  ItemPrice,
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
   * 本接口 (ModifyWorkspacesAttribute) 用于修改工作空间的属性（目前只支持修改工作空间的名称）。
   */
  async ModifyWorkspacesRenewFlag(
    req: ModifyWorkspacesRenewFlagRequest,
    cb?: (error: string, rep: ModifyWorkspacesRenewFlagResponse) => void
  ): Promise<ModifyWorkspacesRenewFlagResponse> {
    return this.request("ModifyWorkspacesRenewFlag", req, cb)
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
   * 本接口 (ModifyInitNodeScripts) 用于修改节点初始化脚本。
   */
  async DisableClusterMonitor(
    req: DisableClusterMonitorRequest,
    cb?: (error: string, rep: DisableClusterMonitorResponse) => void
  ): Promise<DisableClusterMonitorResponse> {
    return this.request("DisableClusterMonitor", req, cb)
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
     * 本接口 (DescribeClusterDedicatedProxy) 用于查询IDC集群专线/VPN代理的状态。

* 返回终端节点（EndPoint）的当前状态，包括是否就绪、VIP地址等信息。
* 若代理未开通，EndPointReady返回false，EndPointStatus为UNKNOWN。
     */
  async DescribeClusterDedicatedProxy(
    req: DescribeClusterDedicatedProxyRequest,
    cb?: (error: string, rep: DescribeClusterDedicatedProxyResponse) => void
  ): Promise<DescribeClusterDedicatedProxyResponse> {
    return this.request("DescribeClusterDedicatedProxy", req, cb)
  }

  /**
     * 本接口 (GenerateRegisterCommand) 用于生成IDC集群的节点注册命令。

* 返回的注册命令可直接在IDC机器上以root身份执行，将该机器纳管进指定的IDC集群。
* 当<code>Proxy=true</code>时，系统会先确保集群专线代理就绪（自动开启终端节点并轮询至ACTIVE），再签发注册码并渲染带代理VIP的注册命令；若在超时窗口内代理仍未就绪，将返回<code>FailedOperation.ProxyNotReady</code>。
* 当<code>Proxy=false</code>时，IDC机器需可直连集群，直接签发注册码并渲染注册命令。
* VpcId与SubnetId需同时指定或同时不指定；仅当<code>Proxy=true</code>且集群未绑定VPC时二者必填。当<code>Proxy=false</code>时二者不生效，若仍传入将返回<code>InvalidParameterValue.ParametersNotSupported</code>。
* 若集群此前已开启专线代理并绑定了VPC/子网，本次传入的VpcId/SubnetId与已绑定值不一致时，将返回<code>UnsupportedOperation.VpcAlreadyBound</code>（不支持改绑）。
* 仅支持IDC类型集群，对非IDC集群调用将返回<code>InvalidParameterValue.ParametersNotSupported</code>。
     */
  async GenerateRegisterCommand(
    req: GenerateRegisterCommandRequest,
    cb?: (error: string, rep: GenerateRegisterCommandResponse) => void
  ): Promise<GenerateRegisterCommandResponse> {
    return this.request("GenerateRegisterCommand", req, cb)
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
   * 本接口(DescribeQueues)用于查询指定集群队列概览信息列表。
   */
  async DescribeQueues(
    req: DescribeQueuesRequest,
    cb?: (error: string, rep: DescribeQueuesResponse) => void
  ): Promise<DescribeQueuesResponse> {
    return this.request("DescribeQueues", req, cb)
  }

  /**
   * 本接口(GenerateRegisterCode)用于为队列创建一个注册码，注册码用于IDC机器的注册纳管。
   */
  async GenerateRegisterCode(
    req: GenerateRegisterCodeRequest,
    cb?: (error: string, rep: GenerateRegisterCodeResponse) => void
  ): Promise<GenerateRegisterCodeResponse> {
    return this.request("GenerateRegisterCode", req, cb)
  }

  /**
   * 为指定集群的队列配置弹性伸缩策略，包括伸缩容量、扩容方式等。
   */
  async SetQueueAutoScaling(
    req: SetQueueAutoScalingRequest,
    cb?: (error: string, rep: SetQueueAutoScalingResponse) => void
  ): Promise<SetQueueAutoScalingResponse> {
    return this.request("SetQueueAutoScaling", req, cb)
  }

  /**
     * 本接口 (BindClusterVpc) 用于为IDC集群绑定VPC和子网。

* 绑定VPC后，集群可在该VPC内开启专线/VPN代理。
* VpcId和SubnetId为必填参数，且子网必须属于指定的VPC。
* 若集群已开通代理，需先关闭代理（DisableClusterDedicatedProxy）再变更VPC绑定。
     */
  async BindClusterVpc(
    req: BindClusterVpcRequest,
    cb?: (error: string, rep: BindClusterVpcResponse) => void
  ): Promise<BindClusterVpcResponse> {
    return this.request("BindClusterVpc", req, cb)
  }

  /**
   * 删除指定的定时伸缩任务。
   */
  async DeleteScheduledAction(
    req: DeleteScheduledActionRequest,
    cb?: (error: string, rep: DeleteScheduledActionResponse) => void
  ): Promise<DeleteScheduledActionResponse> {
    return this.request("DeleteScheduledAction", req, cb)
  }

  /**
   * 修改指定的定时伸缩任务配置。
   */
  async ModifyScheduledAction(
    req: ModifyScheduledActionRequest,
    cb?: (error: string, rep: ModifyScheduledActionResponse) => void
  ): Promise<ModifyScheduledActionResponse> {
    return this.request("ModifyScheduledAction", req, cb)
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
   * 为指定集群队列创建定时伸缩任务，按计划时间自动调整队列的节点数量。
   */
  async CreateScheduledAction(
    req: CreateScheduledActionRequest,
    cb?: (error: string, rep: CreateScheduledActionResponse) => void
  ): Promise<CreateScheduledActionResponse> {
    return this.request("CreateScheduledAction", req, cb)
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
   * 正式提交按量计费工作空间转包年包月订单。仅支持 ONLINE 且计费模式为 POSTPAID_BY_HOUR 的工作空间。
   */
  async ModifyWorkspacesChargeType(
    req: ModifyWorkspacesChargeTypeRequest,
    cb?: (error: string, rep: ModifyWorkspacesChargeTypeResponse) => void
  ): Promise<ModifyWorkspacesChargeTypeResponse> {
    return this.request("ModifyWorkspacesChargeType", req, cb)
  }

  /**
   * 本接口(InquirePriceCreateWorkspaces)用于创建实例询价。
   */
  async InquirePriceCreateWorkspaces(
    req: InquirePriceCreateWorkspacesRequest,
    cb?: (error: string, rep: InquirePriceCreateWorkspacesResponse) => void
  ): Promise<InquirePriceCreateWorkspacesResponse> {
    return this.request("InquirePriceCreateWorkspaces", req, cb)
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
   * 本接口 (ModifyInitNodeScripts) 用于修改节点初始化脚本。
   */
  async EnableClusterMonitor(
    req: EnableClusterMonitorRequest,
    cb?: (error: string, rep: EnableClusterMonitorResponse) => void
  ): Promise<EnableClusterMonitorResponse> {
    return this.request("EnableClusterMonitor", req, cb)
  }

  /**
   * 查询指定集群的队列弹性伸缩概览信息，包括期望容量、当前容量、当前动态节点数、有效定时任务数等。
   */
  async DescribeQueueAutoScalingOverview(
    req: DescribeQueueAutoScalingOverviewRequest,
    cb?: (error: string, rep: DescribeQueueAutoScalingOverviewResponse) => void
  ): Promise<DescribeQueueAutoScalingOverviewResponse> {
    return this.request("DescribeQueueAutoScalingOverview", req, cb)
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
   * 查询指定集群可用的机型族列表，用于弹性伸缩配置时选择机型族。
   */
  async DescribeInstanceFamilies(
    req: DescribeInstanceFamiliesRequest,
    cb?: (error: string, rep: DescribeInstanceFamiliesResponse) => void
  ): Promise<DescribeInstanceFamiliesResponse> {
    return this.request("DescribeInstanceFamilies", req, cb)
  }

  /**
     * 本接口 (DisableClusterDedicatedProxy) 用于关闭IDC集群的专线/VPN代理。

* 关闭后，系统将删除VPC终端节点（EndPoint），断开IDC集群与云上VPC的网络连接。
* 若代理未开通，调用将返回ProxyNotEnabled错误。
* 操作不可逆，关闭后需重新调用EnableClusterDedicatedProxy开启。
     */
  async DisableClusterDedicatedProxy(
    req: DisableClusterDedicatedProxyRequest,
    cb?: (error: string, rep: DisableClusterDedicatedProxyResponse) => void
  ): Promise<DisableClusterDedicatedProxyResponse> {
    return this.request("DisableClusterDedicatedProxy", req, cb)
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
   * 本接口(DescribeAutoScalingConfiguration)用于查询集群弹性伸缩配置信息。本接口仅适用于弹性伸缩类型为THPC_AS的集群。
   */
  async DescribeAutoScalingConfiguration(
    req: DescribeAutoScalingConfigurationRequest,
    cb?: (error: string, rep: DescribeAutoScalingConfigurationResponse) => void
  ): Promise<DescribeAutoScalingConfigurationResponse> {
    return this.request("DescribeAutoScalingConfiguration", req, cb)
  }

  /**
   * 本接口用于修改节点属性
   */
  async ModifyNodeAttribute(
    req: ModifyNodeAttributeRequest,
    cb?: (error: string, rep: ModifyNodeAttributeResponse) => void
  ): Promise<ModifyNodeAttributeResponse> {
    return this.request("ModifyNodeAttribute", req, cb)
  }

  /**
   * 查询指定集群的队列弹性伸缩配置信息。
   */
  async DescribeQueueAutoScaling(
    req: DescribeQueueAutoScalingRequest,
    cb?: (error: string, rep: DescribeQueueAutoScalingResponse) => void
  ): Promise<DescribeQueueAutoScalingResponse> {
    return this.request("DescribeQueueAutoScaling", req, cb)
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
   * 本接口 (DetachNodes) 用于将一个或者多个计算节点从集群中移除，但是不销毁指定计算资源。
   */
  async DetachNodes(
    req: DetachNodesRequest,
    cb?: (error: string, rep: DetachNodesResponse) => void
  ): Promise<DetachNodesResponse> {
    return this.request("DetachNodes", req, cb)
  }

  /**
     * 本接口 (EnableClusterDedicatedProxy) 用于开启IDC集群的专线/VPN代理。

* 开启后，系统将自动创建VPC终端节点（EndPoint），实现IDC集群与云上VPC的网络互通。
* 若代理已开通，重复调用将幂等返回已有EndPoint信息。
* SubnetId与VpcId需同时指定或同时不指定。若不指定，则使用集群已绑定的VPC和子网。
     */
  async EnableClusterDedicatedProxy(
    req: EnableClusterDedicatedProxyRequest,
    cb?: (error: string, rep: EnableClusterDedicatedProxyResponse) => void
  ): Promise<EnableClusterDedicatedProxyResponse> {
    return this.request("EnableClusterDedicatedProxy", req, cb)
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
   * 查询按量计费工作空间转换为包年包月的价格。不会创建订单或变更资源。
   */
  async InquirePriceModifyWorkspacesChargeType(
    req: InquirePriceModifyWorkspacesChargeTypeRequest,
    cb?: (error: string, rep: InquirePriceModifyWorkspacesChargeTypeResponse) => void
  ): Promise<InquirePriceModifyWorkspacesChargeTypeResponse> {
    return this.request("InquirePriceModifyWorkspacesChargeType", req, cb)
  }

  /**
   * 本接口 (ModifyInitNodeScripts) 用于修改节点初始化脚本。
   */
  async DescribeClusterMonitorStatus(
    req: DescribeClusterMonitorStatusRequest,
    cb?: (error: string, rep: DescribeClusterMonitorStatusResponse) => void
  ): Promise<DescribeClusterMonitorStatusResponse> {
    return this.request("DescribeClusterMonitorStatus", req, cb)
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
   * 查询指定集群队列的定时伸缩任务列表。
   */
  async DescribeScheduledActions(
    req: DescribeScheduledActionsRequest,
    cb?: (error: string, rep: DescribeScheduledActionsResponse) => void
  ): Promise<DescribeScheduledActionsResponse> {
    return this.request("DescribeScheduledActions", req, cb)
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
}

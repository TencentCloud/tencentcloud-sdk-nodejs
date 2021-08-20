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
  EventVar,
  AnonymousComputeEnv,
  DeleteComputeEnvResponse,
  SubmitJobRequest,
  ComputeEnvData,
  Authentication,
  RetryJobsResponse,
  TerminateComputeNodeRequest,
  DescribeTaskLogsRequest,
  AgentRunningMode,
  EnvData,
  DescribeTaskTemplatesRequest,
  Notification,
  SystemDisk,
  Task,
  InstanceTypeConfig,
  LoginSettings,
  TerminateComputeNodesResponse,
  DescribeComputeEnvActivitiesResponse,
  TaskInstanceMetrics,
  TaskInstanceLog,
  MountDataDisk,
  TaskView,
  Tag,
  Externals,
  OsInfo,
  DescribeComputeEnvResponse,
  DescribeCpmOsInfoResponse,
  TerminateJobRequest,
  DetachInstancesResponse,
  Application,
  EnvDataCpm,
  OutputMappingConfig,
  AttachInstancesResponse,
  ComputeNodeMetrics,
  TaskMetrics,
  TerminateComputeNodesRequest,
  LocalDiskType,
  DescribeComputeEnvActivitiesRequest,
  CreateTaskTemplateRequest,
  Job,
  DeleteComputeEnvRequest,
  CreateComputeEnvRequest,
  DescribeComputeEnvCreateInfoResponse,
  TerminateJobResponse,
  ComputeEnvCreateInfo,
  DescribeComputeEnvCreateInfosRequest,
  DescribeComputeEnvRequest,
  InstanceMarketOptionsRequest,
  DescribeTaskTemplatesResponse,
  CreateCpmComputeEnvResponse,
  DeleteJobRequest,
  CreateCpmComputeEnvRequest,
  DescribeTaskLogsResponse,
  NamedCpmComputeEnv,
  DeleteTaskTemplatesRequest,
  DescribeJobResponse,
  DescribeComputeEnvCreateInfoRequest,
  ModifyTaskTemplateRequest,
  DescribeCpmOsInfoRequest,
  DataDisk,
  NamedComputeEnv,
  DeleteJobResponse,
  EventConfig,
  SpotMarketOptions,
  CpmVirtualPrivateCloud,
  DetachInstancesRequest,
  Instance,
  OutputMapping,
  EnhancedService,
  RunAutomationServiceEnabled,
  DescribeJobSubmitInfoResponse,
  DescribeComputeEnvCreateInfosResponse,
  RunSecurityServiceEnabled,
  DescribeJobRequest,
  RedirectInfo,
  DescribeInstanceCategoriesResponse,
  ModifyTaskTemplateResponse,
  SubmitJobResponse,
  InputMapping,
  RedirectLocalInfo,
  DescribeJobSubmitInfoRequest,
  Dependence,
  Filter,
  CreateComputeEnvResponse,
  Docker,
  ModifyComputeEnvResponse,
  Placement,
  ComputeNode,
  ItemPrice,
  InstanceTypeQuotaItem,
  CreateTaskTemplateResponse,
  StorageBlock,
  DescribeJobsRequest,
  TaskTemplateView,
  InstanceTypeOptions,
  DeleteTaskTemplatesResponse,
  DescribeCvmZoneInstanceConfigInfosRequest,
  TerminateTaskInstanceRequest,
  TerminateTaskInstanceResponse,
  RetryJobsRequest,
  TaskInstanceView,
  DescribeAvailableCvmInstanceTypesResponse,
  DescribeTaskResponse,
  InstanceCategoryItem,
  ComputeEnvView,
  DescribeComputeEnvsResponse,
  DescribeTaskRequest,
  AttachInstancesRequest,
  DescribeComputeEnvsRequest,
  DescribeCvmZoneInstanceConfigInfosResponse,
  DescribeJobsResponse,
  Activity,
  RunMonitorServiceEnabled,
  TerminateComputeNodeResponse,
  VirtualPrivateCloud,
  DescribeAvailableCvmInstanceTypesRequest,
  DescribeInstanceCategoriesRequest,
  ModifyComputeEnvRequest,
  InternetAccessible,
  JobView,
  EnvVar,
} from "./batch_models"

/**
 * batch client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("batch.tencentcloudapi.com", "2017-03-12", clientConfig)
  }

  /**
   * 用于查询计算环境的详细信息
   */
  async DescribeComputeEnv(
    req: DescribeComputeEnvRequest,
    cb?: (error: string, rep: DescribeComputeEnvResponse) => void
  ): Promise<DescribeComputeEnvResponse> {
    return this.request("DescribeComputeEnv", req, cb)
  }

  /**
   * 用于创建任务模板
   */
  async CreateTaskTemplate(
    req: CreateTaskTemplateRequest,
    cb?: (error: string, rep: CreateTaskTemplateResponse) => void
  ): Promise<CreateTaskTemplateResponse> {
    return this.request("CreateTaskTemplate", req, cb)
  }

  /**
   * 创建黑石计算环境
   */
  async CreateCpmComputeEnv(
    req: CreateCpmComputeEnvRequest,
    cb?: (error: string, rep: CreateCpmComputeEnvResponse) => void
  ): Promise<CreateCpmComputeEnvResponse> {
    return this.request("CreateCpmComputeEnv", req, cb)
  }

  /**
     * 用于销毁计算节点。
对于状态为CREATED、CREATION_FAILED、RUNNING和ABNORMAL的节点，允许销毁处理。
     */
  async TerminateComputeNode(
    req: TerminateComputeNodeRequest,
    cb?: (error: string, rep: TerminateComputeNodeResponse) => void
  ): Promise<TerminateComputeNodeResponse> {
    return this.request("TerminateComputeNode", req, cb)
  }

  /**
   * 用于查询若干个作业的概览信息
   */
  async DescribeJobs(
    req: DescribeJobsRequest,
    cb?: (error: string, rep: DescribeJobsResponse) => void
  ): Promise<DescribeJobsResponse> {
    return this.request("DescribeJobs", req, cb)
  }

  /**
   * 查看可用的CVM机型配置信息
   */
  async DescribeAvailableCvmInstanceTypes(
    req: DescribeAvailableCvmInstanceTypesRequest,
    cb?: (error: string, rep: DescribeAvailableCvmInstanceTypesResponse) => void
  ): Promise<DescribeAvailableCvmInstanceTypesResponse> {
    return this.request("DescribeAvailableCvmInstanceTypes", req, cb)
  }

  /**
     * 此接口可将已存在实例添加到计算环境中。
实例需要满足如下条件：<br/>
1.实例不在批量计算系统中。<br/>
2.实例状态要求处于运行中。<br/>
3.支持预付费实例，按小时后付费实例，专享子机实例。不支持竞价实例。<br/>

此接口会将加入到计算环境中的实例重设UserData和重装操作系统。
     */
  async AttachInstances(
    req: AttachInstancesRequest,
    cb?: (error: string, rep: AttachInstancesResponse) => void
  ): Promise<AttachInstancesResponse> {
    return this.request("AttachInstances", req, cb)
  }

  /**
   * 用于创建计算环境
   */
  async CreateComputeEnv(
    req: CreateComputeEnvRequest,
    cb?: (error: string, rep: CreateComputeEnvResponse) => void
  ): Promise<CreateComputeEnvResponse> {
    return this.request("CreateComputeEnv", req, cb)
  }

  /**
   * 用于删除计算环境
   */
  async DeleteComputeEnv(
    req: DeleteComputeEnvRequest,
    cb?: (error: string, rep: DeleteComputeEnvResponse) => void
  ): Promise<DeleteComputeEnvResponse> {
    return this.request("DeleteComputeEnv", req, cb)
  }

  /**
   * 将添加到计算环境中的实例从计算环境中移出。若是由批量计算自动创建的计算节点实例则不允许移出。
   */
  async DetachInstances(
    req: DetachInstancesRequest,
    cb?: (error: string, rep: DetachInstancesResponse) => void
  ): Promise<DetachInstancesResponse> {
    return this.request("DetachInstances", req, cb)
  }

  /**
   * 用于获取任务多个实例标准输出和标准错误日志。
   */
  async DescribeTaskLogs(
    req: DescribeTaskLogsRequest,
    cb?: (error: string, rep: DescribeTaskLogsResponse) => void
  ): Promise<DescribeTaskLogsResponse> {
    return this.request("DescribeTaskLogs", req, cb)
  }

  /**
     * 用于终止作业。
当作业处于“SUBMITTED”状态时，禁止终止操作；当作业处于“SUCCEED”状态时，终止操作不会生效。
终止作业是一个异步过程。整个终止过程的耗时和任务总数成正比。终止的效果相当于所含的所有任务实例进行TerminateTaskInstance操作。具体效果和用法可参考TerminateTaskInstance。
     */
  async TerminateJob(
    req: TerminateJobRequest,
    cb?: (error: string, rep: TerminateJobResponse) => void
  ): Promise<TerminateJobResponse> {
    return this.request("TerminateJob", req, cb)
  }

  /**
   * 用于查询指定任务的详细信息，包括任务内部的任务实例信息。
   */
  async DescribeTask(
    req: DescribeTaskRequest,
    cb?: (error: string, rep: DescribeTaskResponse) => void
  ): Promise<DescribeTaskResponse> {
    return this.request("DescribeTask", req, cb)
  }

  /**
   * 获取批量计算可用区机型配置信息
   */
  async DescribeCvmZoneInstanceConfigInfos(
    req: DescribeCvmZoneInstanceConfigInfosRequest,
    cb?: (error: string, rep: DescribeCvmZoneInstanceConfigInfosResponse) => void
  ): Promise<DescribeCvmZoneInstanceConfigInfosResponse> {
    return this.request("DescribeCvmZoneInstanceConfigInfos", req, cb)
  }

  /**
   * 用于查看一个作业的详细信息，包括内部任务（Task）和依赖（Dependence）信息。
   */
  async DescribeJob(
    req: DescribeJobRequest,
    cb?: (error: string, rep: DescribeJobResponse) => void
  ): Promise<DescribeJobResponse> {
    return this.request("DescribeJob", req, cb)
  }

  /**
   * 用于提交一个作业
   */
  async SubmitJob(
    req: SubmitJobRequest,
    cb?: (error: string, rep: SubmitJobResponse) => void
  ): Promise<SubmitJobResponse> {
    return this.request("SubmitJob", req, cb)
  }

  /**
   * 用于批量销毁计算节点，不允许重复销毁同一个节点。
   */
  async TerminateComputeNodes(
    req: TerminateComputeNodesRequest,
    cb?: (error: string, rep: TerminateComputeNodesResponse) => void
  ): Promise<TerminateComputeNodesResponse> {
    return this.request("TerminateComputeNodes", req, cb)
  }

  /**
   * 用于查询任务模板信息
   */
  async DescribeTaskTemplates(
    req: DescribeTaskTemplatesRequest,
    cb?: (error: string, rep: DescribeTaskTemplatesResponse) => void
  ): Promise<DescribeTaskTemplatesResponse> {
    return this.request("DescribeTaskTemplates", req, cb)
  }

  /**
   * 目前对CVM现有实例族分类，每一类包含若干实例族。该接口用于查询实例分类信息。
   */
  async DescribeInstanceCategories(
    req?: DescribeInstanceCategoriesRequest,
    cb?: (error: string, rep: DescribeInstanceCategoriesResponse) => void
  ): Promise<DescribeInstanceCategoriesResponse> {
    return this.request("DescribeInstanceCategories", req, cb)
  }

  /**
   * 用于删除任务模板信息
   */
  async DeleteTaskTemplates(
    req: DeleteTaskTemplatesRequest,
    cb?: (error: string, rep: DeleteTaskTemplatesResponse) => void
  ): Promise<DeleteTaskTemplatesResponse> {
    return this.request("DeleteTaskTemplates", req, cb)
  }

  /**
     * 用于终止任务实例。
对于状态已经为“SUCCEED”和“FAILED”的任务实例，不做处理。
对于状态为“SUBMITTED”、“PENDING”、“RUNNABLE”的任务实例，状态将置为“FAILED”状态。
对于状态为“STARTING”、“RUNNING”、“FAILED_INTERRUPTED”的任务实例，分区两种情况：如果未显示指定计算环境，会先销毁CVM服务器，然后将状态置为“FAILED”，具有一定耗时；如果指定了计算环境EnvId，任务实例状态置为“FAILED”，并重启执行该任务的CVM服务器，具有一定的耗时。
对于状态为“FAILED_INTERRUPTED”的任务实例，终止操作实际成功之后，相关资源和配额才会释放。
     */
  async TerminateTaskInstance(
    req: TerminateTaskInstanceRequest,
    cb?: (error: string, rep: TerminateTaskInstanceResponse) => void
  ): Promise<TerminateTaskInstanceResponse> {
    return this.request("TerminateTaskInstance", req, cb)
  }

  /**
   * 用于修改计算环境属性
   */
  async ModifyComputeEnv(
    req: ModifyComputeEnvRequest,
    cb?: (error: string, rep: ModifyComputeEnvResponse) => void
  ): Promise<ModifyComputeEnvResponse> {
    return this.request("ModifyComputeEnv", req, cb)
  }

  /**
   * 用于查询指定作业的提交信息，其返回内容包括 JobId 和 SubmitJob 接口中作为输入参数的作业提交信息
   */
  async DescribeJobSubmitInfo(
    req: DescribeJobSubmitInfoRequest,
    cb?: (error: string, rep: DescribeJobSubmitInfoResponse) => void
  ): Promise<DescribeJobSubmitInfoResponse> {
    return this.request("DescribeJobSubmitInfo", req, cb)
  }

  /**
   * 查看计算环境的创建信息。
   */
  async DescribeComputeEnvCreateInfo(
    req: DescribeComputeEnvCreateInfoRequest,
    cb?: (error: string, rep: DescribeComputeEnvCreateInfoResponse) => void
  ): Promise<DescribeComputeEnvCreateInfoResponse> {
    return this.request("DescribeComputeEnvCreateInfo", req, cb)
  }

  /**
   * 用于查询计算环境的活动信息
   */
  async DescribeComputeEnvActivities(
    req: DescribeComputeEnvActivitiesRequest,
    cb?: (error: string, rep: DescribeComputeEnvActivitiesResponse) => void
  ): Promise<DescribeComputeEnvActivitiesResponse> {
    return this.request("DescribeComputeEnvActivities", req, cb)
  }

  /**
   * 用于查看计算环境创建信息列表，包括名称、描述、类型、环境参数、通知及期望节点数等。
   */
  async DescribeComputeEnvCreateInfos(
    req: DescribeComputeEnvCreateInfosRequest,
    cb?: (error: string, rep: DescribeComputeEnvCreateInfosResponse) => void
  ): Promise<DescribeComputeEnvCreateInfosResponse> {
    return this.request("DescribeComputeEnvCreateInfos", req, cb)
  }

  /**
     * 用于删除作业记录。
删除作业的效果相当于删除作业相关的所有信息。删除成功后，作业相关的所有信息都无法查询。
待删除的作业必须处于完结状态，且其内部包含的所有任务实例也必须处于完结状态，否则会禁止操作。完结状态，是指处于 SUCCEED 或 FAILED 状态。
     */
  async DeleteJob(
    req: DeleteJobRequest,
    cb?: (error: string, rep: DeleteJobResponse) => void
  ): Promise<DeleteJobResponse> {
    return this.request("DeleteJob", req, cb)
  }

  /**
   * 创建黑石计算环境时，查询批量计算环境支持的黑石操作系统信息
   */
  async DescribeCpmOsInfo(
    req: DescribeCpmOsInfoRequest,
    cb?: (error: string, rep: DescribeCpmOsInfoResponse) => void
  ): Promise<DescribeCpmOsInfoResponse> {
    return this.request("DescribeCpmOsInfo", req, cb)
  }

  /**
   * 用于查看计算环境列表
   */
  async DescribeComputeEnvs(
    req: DescribeComputeEnvsRequest,
    cb?: (error: string, rep: DescribeComputeEnvsResponse) => void
  ): Promise<DescribeComputeEnvsResponse> {
    return this.request("DescribeComputeEnvs", req, cb)
  }

  /**
   * 用于修改任务模板
   */
  async ModifyTaskTemplate(
    req: ModifyTaskTemplateRequest,
    cb?: (error: string, rep: ModifyTaskTemplateResponse) => void
  ): Promise<ModifyTaskTemplateResponse> {
    return this.request("ModifyTaskTemplate", req, cb)
  }

  /**
     * 用于重试作业中失败的任务实例。
当且仅当作业处于“FAILED”状态，支持重试操作。重试操作成功后，作业会按照“DAG”中指定的任务依赖关系，依次重试各个任务中失败的任务实例。任务实例的历史信息将被重置，如同首次运行一样，参与后续的调度和执行。
     */
  async RetryJobs(
    req: RetryJobsRequest,
    cb?: (error: string, rep: RetryJobsResponse) => void
  ): Promise<RetryJobsResponse> {
    return this.request("RetryJobs", req, cb)
  }
}

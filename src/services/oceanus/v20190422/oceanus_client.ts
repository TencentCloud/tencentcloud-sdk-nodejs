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
  CopyJobResult,
  CreateResourceRequest,
  CheckSavepointRequest,
  CreateJobRequest,
  ResourceRefDetail,
  StopJobsRequest,
  CreateJobResponse,
  ResourceLoc,
  RunJobsRequest,
  CCN,
  DeleteJobsRequest,
  StopJobDescription,
  CreateFolderRequest,
  ModifyJobResponse,
  CreateJobConfigResponse,
  CreateResourceConfigResponse,
  CreateJobConfigRequest,
  CreateResourceConfigRequest,
  DescribeSystemResourcesResponse,
  ClusterVersion,
  DescribeClustersRequest,
  DescribeTreeJobsResponse,
  DeleteTableConfigRequest,
  CopyJobsRequest,
  CopyJobsResponse,
  Savepoint,
  SystemResourceItem,
  DescribeResourceRelatedJobsRequest,
  DeleteResourcesResponse,
  DeleteTableConfigResponse,
  ResourceConfigItem,
  TriggerJobSavepointResponse,
  Tag,
  DescribeTreeResourcesRsp,
  DescribeResourcesRequest,
  TreeResourceItem,
  RefJobStatusCountItem,
  ResourceLocParam,
  ResourceRefJobInfo,
  DescribeJobConfigsRequest,
  CheckSavepointResponse,
  DeleteResourceConfigsRequest,
  DescribeJobSavepointResponse,
  DeleteJobsResponse,
  DescribeTreeResourcesResponse,
  RunJobsResponse,
  Filter,
  DeleteResourcesRequest,
  DescribeJobsResponse,
  ResourceItem,
  WorkSpaceClusterItem,
  StopJobsResponse,
  DescribeJobSavepointRequest,
  CreateResourceResponse,
  DescribeSystemResourcesRequest,
  CreateFolderResponse,
  CopyJobItem,
  RunJobDescription,
  ModifyJobRequest,
  DescribeTreeJobsRequest,
  DescribeJobConfigsResponse,
  Property,
  DeleteResourceConfigsResponse,
  DescribeResourceRelatedJobsResponse,
  DescribeResourcesResponse,
  Cluster,
  DescribeClustersResponse,
  TriggerJobSavepointRequest,
  DescribeResourceConfigsResponse,
  ResourceRef,
  DescribeJobsRequest,
  JobV1,
  JobConfig,
  DescribeResourceConfigsRequest,
  DescribeTreeResourcesRequest,
} from "./oceanus_models"

/**
 * oceanus client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("oceanus.tencentcloudapi.com", "2019-04-22", clientConfig)
  }

  /**
   * 生成树状作业显示结构
   */
  async DescribeTreeJobs(
    req: DescribeTreeJobsRequest,
    cb?: (error: string, rep: DescribeTreeJobsResponse) => void
  ): Promise<DescribeTreeJobsResponse> {
    return this.request("DescribeTreeJobs", req, cb)
  }

  /**
   * 查询树状结构资源列表
   */
  async DescribeTreeResources(
    req: DescribeTreeResourcesRequest,
    cb?: (error: string, rep: DescribeTreeResourcesResponse) => void
  ): Promise<DescribeTreeResourcesResponse> {
    return this.request("DescribeTreeResources", req, cb)
  }

  /**
   * 单条和批量复制作业
   */
  async CopyJobs(
    req: CopyJobsRequest,
    cb?: (error: string, rep: CopyJobsResponse) => void
  ): Promise<CopyJobsResponse> {
    return this.request("CopyJobs", req, cb)
  }

  /**
   * 删除资源版本
   */
  async DeleteResourceConfigs(
    req: DeleteResourceConfigsRequest,
    cb?: (error: string, rep: DeleteResourceConfigsResponse) => void
  ): Promise<DeleteResourceConfigsResponse> {
    return this.request("DeleteResourceConfigs", req, cb)
  }

  /**
   * 创建资源配置接口
   */
  async CreateResourceConfig(
    req: CreateResourceConfigRequest,
    cb?: (error: string, rep: CreateResourceConfigResponse) => void
  ): Promise<CreateResourceConfigResponse> {
    return this.request("CreateResourceConfig", req, cb)
  }

  /**
   * 删除作业表配置
   */
  async DeleteTableConfig(
    req: DeleteTableConfigRequest,
    cb?: (error: string, rep: DeleteTableConfigResponse) => void
  ): Promise<DeleteTableConfigResponse> {
    return this.request("DeleteTableConfig", req, cb)
  }

  /**
   * 描述资源配置接口
   */
  async DescribeResourceConfigs(
    req: DescribeResourceConfigsRequest,
    cb?: (error: string, rep: DescribeResourceConfigsResponse) => void
  ): Promise<DescribeResourceConfigsResponse> {
    return this.request("DescribeResourceConfigs", req, cb)
  }

  /**
   * 查找Savepoint列表
   */
  async DescribeJobSavepoint(
    req: DescribeJobSavepointRequest,
    cb?: (error: string, rep: DescribeJobSavepointResponse) => void
  ): Promise<DescribeJobSavepointResponse> {
    return this.request("DescribeJobSavepoint", req, cb)
  }

  /**
   * 描述资源接口
   */
  async DescribeResources(
    req: DescribeResourcesRequest,
    cb?: (error: string, rep: DescribeResourcesResponse) => void
  ): Promise<DescribeResourcesResponse> {
    return this.request("DescribeResources", req, cb)
  }

  /**
   * 查询集群
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 新建作业接口，一个 AppId 最多允许创建1000个作业
   */
  async CreateJob(
    req: CreateJobRequest,
    cb?: (error: string, rep: CreateJobResponse) => void
  ): Promise<CreateJobResponse> {
    return this.request("CreateJob", req, cb)
  }

  /**
   * 触发Savepoint
   */
  async TriggerJobSavepoint(
    req: TriggerJobSavepointRequest,
    cb?: (error: string, rep: TriggerJobSavepointResponse) => void
  ): Promise<TriggerJobSavepointResponse> {
    return this.request("TriggerJobSavepoint", req, cb)
  }

  /**
   * 批量启动或者恢复作业，批量操作数量上限20
   */
  async RunJobs(
    req: RunJobsRequest,
    cb?: (error: string, rep: RunJobsResponse) => void
  ): Promise<RunJobsResponse> {
    return this.request("RunJobs", req, cb)
  }

  /**
   * 批量删除作业接口，批量操作数量上限20
   */
  async DeleteJobs(
    req: DeleteJobsRequest,
    cb?: (error: string, rep: DeleteJobsResponse) => void
  ): Promise<DeleteJobsResponse> {
    return this.request("DeleteJobs", req, cb)
  }

  /**
   * 作业列表页面新建文件夹请求
   */
  async CreateFolder(
    req: CreateFolderRequest,
    cb?: (error: string, rep: CreateFolderResponse) => void
  ): Promise<CreateFolderResponse> {
    return this.request("CreateFolder", req, cb)
  }

  /**
   * 检查快照是否可用
   */
  async CheckSavepoint(
    req: CheckSavepointRequest,
    cb?: (error: string, rep: CheckSavepointResponse) => void
  ): Promise<CheckSavepointResponse> {
    return this.request("CheckSavepoint", req, cb)
  }

  /**
   * 创建作业配置，一个作业最多有100个配置版本
   */
  async CreateJobConfig(
    req: CreateJobConfigRequest,
    cb?: (error: string, rep: CreateJobConfigResponse) => void
  ): Promise<CreateJobConfigResponse> {
    return this.request("CreateJobConfig", req, cb)
  }

  /**
   * 批量停止作业，批量操作数量上限为20
   */
  async StopJobs(
    req: StopJobsRequest,
    cb?: (error: string, rep: StopJobsResponse) => void
  ): Promise<StopJobsResponse> {
    return this.request("StopJobs", req, cb)
  }

  /**
   * 获取资源关联作业信息
   */
  async DescribeResourceRelatedJobs(
    req: DescribeResourceRelatedJobsRequest,
    cb?: (error: string, rep: DescribeResourceRelatedJobsResponse) => void
  ): Promise<DescribeResourceRelatedJobsResponse> {
    return this.request("DescribeResourceRelatedJobs", req, cb)
  }

  /**
   * 删除资源接口
   */
  async DeleteResources(
    req: DeleteResourcesRequest,
    cb?: (error: string, rep: DeleteResourcesResponse) => void
  ): Promise<DeleteResourcesResponse> {
    return this.request("DeleteResources", req, cb)
  }

  /**
   * 查询作业
   */
  async DescribeJobs(
    req: DescribeJobsRequest,
    cb?: (error: string, rep: DescribeJobsResponse) => void
  ): Promise<DescribeJobsResponse> {
    return this.request("DescribeJobs", req, cb)
  }

  /**
     * 更新作业属性，仅允许以下3种操作，不支持组合操作：
(1)	更新作业名称
(2)	更新作业备注 
(3)	更新作业最大并行度
变更前提：WorkerCuNum<=MaxParallelism
如果MaxParallelism变小，不重启作业，待下一次重启生效
如果MaxParallelism变大，则要求入参RestartAllowed必须为True
假设作业运行状态，则先停止作业，再启动作业，中间状态丢失
假设作业暂停状态，则将作业更改为停止状态，中间状态丢失


     */
  async ModifyJob(
    req: ModifyJobRequest,
    cb?: (error: string, rep: ModifyJobResponse) => void
  ): Promise<ModifyJobResponse> {
    return this.request("ModifyJob", req, cb)
  }

  /**
   * 创建资源接口
   */
  async CreateResource(
    req: CreateResourceRequest,
    cb?: (error: string, rep: CreateResourceResponse) => void
  ): Promise<CreateResourceResponse> {
    return this.request("CreateResource", req, cb)
  }

  /**
   * 描述系统资源接口
   */
  async DescribeSystemResources(
    req: DescribeSystemResourcesRequest,
    cb?: (error: string, rep: DescribeSystemResourcesResponse) => void
  ): Promise<DescribeSystemResourcesResponse> {
    return this.request("DescribeSystemResources", req, cb)
  }

  /**
   * 查询作业配置列表，一次最多查询100个
   */
  async DescribeJobConfigs(
    req: DescribeJobConfigsRequest,
    cb?: (error: string, rep: DescribeJobConfigsResponse) => void
  ): Promise<DescribeJobConfigsResponse> {
    return this.request("DescribeJobConfigs", req, cb)
  }
}

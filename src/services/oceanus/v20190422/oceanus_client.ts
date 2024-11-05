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
  ModifyFolderRequest,
  DescribeJobSubmissionLogResponse,
  DeleteJobsRequest,
  ModifyWorkSpaceRequest,
  ModifyJobResponse,
  CreateJobConfigResponse,
  CreateResourceConfigResponse,
  CreateJobConfigRequest,
  ClusterVersion,
  DescribeTreeJobsResponse,
  CopyJobsRequest,
  CopyJobsResponse,
  TriggerJobSavepointRequest,
  LogContent,
  DeleteJobConfigsRequest,
  JobEventInfo,
  ResourceLocParam,
  NodeConfig,
  WorkSpaceSetItem,
  DescribeJobSavepointRequest,
  ResultColumn,
  TreeJobSets,
  ResourceItem,
  RefJobStatusCountItem,
  RunSqlGatewayStatementRequest,
  DescribeFolderResponse,
  ResourceLoc,
  CCN,
  DescribeWorkSpacesRequest,
  ResourceRefJobInfo,
  LogicalType,
  DescribeTreeResourcesRequest,
  DescribeResourceConfigsResponse,
  DescribeClustersRequest,
  CreateWorkSpaceResponse,
  CreateJobResponse,
  SqlGatewayItem,
  DescribeJobRuntimeInfoResponse,
  StopJobDescription,
  CreateFolderRequest,
  DeleteJobConfigsResponse,
  DeleteTableConfigRequest,
  StatementResult,
  DescribeTreeJobsRsp,
  DeleteResourcesResponse,
  DeleteTableConfigResponse,
  SlotSharingGroupSpec,
  Tag,
  GetMetaTableResponse,
  FetchSqlGatewayStatementResultResponse,
  JobGraphNode,
  CreateWorkSpaceRequest,
  DeleteResourceConfigsRequest,
  DescribeJobSavepointResponse,
  DeleteFoldersRequest,
  DeleteWorkSpaceRequest,
  DescribeJobRuntimeInfoRequest,
  DescribeWorkSpacesResponse,
  GatewayRefItem,
  CreateResourceResponse,
  DescribeSystemResourcesRequest,
  CreateFolderResponse,
  DescribeResourcesResponse,
  RunJobDescription,
  DescribeResourceRelatedJobsResponse,
  JobEvent,
  ResourceRef,
  DescribeSystemResourcesResponse,
  ClazzLevel,
  SubEks,
  WorkSpaceClusterItem,
  CheckSavepointRequest,
  JobRuntimeInfo,
  StopJobsRequest,
  TraceModeConfiguration,
  RunJobsRequest,
  DeleteWorkSpaceResponse,
  TriggerJobSavepointResponse,
  DeleteJobsResponse,
  Property,
  JobGraphEdge,
  Savepoint,
  SystemResourceItem,
  DescribeResourceRelatedJobsRequest,
  ResourceConfigItem,
  RoleAuth,
  DescribeTreeResourcesRsp,
  ResourceRefDetail,
  TreeResourceItem,
  ExpertModeConfiguration,
  RunJobsResponse,
  Filter,
  DeleteResourcesRequest,
  ClusterGroupSetItem,
  DescribeJobConfigsRequest,
  ModifyJobRequest,
  GetMetaTableRequest,
  ResultData,
  DeleteResourceConfigsResponse,
  Cluster,
  JobGraph,
  DescribeJobSubmissionLogRequest,
  DescribeJobsRequest,
  JobV1,
  JobConfig,
  DescribeResourceConfigsRequest,
  ModifyFolderResponse,
  SlotSharingGroup,
  ModifyWorkSpaceResponse,
  RunSqlGatewayStatementResponse,
  CreateJobRequest,
  JobInstanceForSubmissionLog,
  DescribeFolderRequest,
  DeleteFoldersResponse,
  SubFolderInfo,
  ClusterSession,
  CreateResourceConfigRequest,
  StopJobsResponse,
  DescribeClustersResponse,
  DescribeResourcesRequest,
  DescribeJobEventsRequest,
  CheckSavepointResponse,
  DescribeJobsResponse,
  DescribeTreeResourcesResponse,
  Order,
  CopyJobItem,
  DescribeTreeJobsRequest,
  DescribeJobConfigsResponse,
  FetchSqlGatewayStatementResultRequest,
  SessionClusterRefItem,
  DescribeJobEventsResponse,
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
   * 通过Sql gateway执行satement
   */
  async RunSqlGatewayStatement(
    req: RunSqlGatewayStatementRequest,
    cb?: (error: string, rep: RunSqlGatewayStatementResponse) => void
  ): Promise<RunSqlGatewayStatementResponse> {
    return this.request("RunSqlGatewayStatement", req, cb)
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
   * 创建工作空间
   */
  async CreateWorkSpace(
    req: CreateWorkSpaceRequest,
    cb?: (error: string, rep: CreateWorkSpaceResponse) => void
  ): Promise<CreateWorkSpaceResponse> {
    return this.request("CreateWorkSpace", req, cb)
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
   * 查询指定文件夹及其相应的子文件夹信息
   */
  async DescribeFolder(
    req: DescribeFolderRequest,
    cb?: (error: string, rep: DescribeFolderResponse) => void
  ): Promise<DescribeFolderResponse> {
    return this.request("DescribeFolder", req, cb)
  }

  /**
   * 删除工作空间
   */
  async DeleteWorkSpace(
    req: DeleteWorkSpaceRequest,
    cb?: (error: string, rep: DeleteWorkSpaceResponse) => void
  ): Promise<DeleteWorkSpaceResponse> {
    return this.request("DeleteWorkSpace", req, cb)
  }

  /**
   * 自定义树状结构页面拖拽文件夹
   */
  async ModifyFolder(
    req: ModifyFolderRequest,
    cb?: (error: string, rep: ModifyFolderResponse) => void
  ): Promise<ModifyFolderResponse> {
    return this.request("ModifyFolder", req, cb)
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
   * 查询作业实例启动日志
   */
  async DescribeJobSubmissionLog(
    req: DescribeJobSubmissionLogRequest,
    cb?: (error: string, rep: DescribeJobSubmissionLogResponse) => void
  ): Promise<DescribeJobSubmissionLogResponse> {
    return this.request("DescribeJobSubmissionLog", req, cb)
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
   * 获取作业运行时的信息
   */
  async DescribeJobRuntimeInfo(
    req: DescribeJobRuntimeInfoRequest,
    cb?: (error: string, rep: DescribeJobRuntimeInfoResponse) => void
  ): Promise<DescribeJobRuntimeInfoResponse> {
    return this.request("DescribeJobRuntimeInfo", req, cb)
  }

  /**
   * 查询Sql Gateway的Statement执行结果
   */
  async FetchSqlGatewayStatementResult(
    req: FetchSqlGatewayStatementResultRequest,
    cb?: (error: string, rep: FetchSqlGatewayStatementResultResponse) => void
  ): Promise<FetchSqlGatewayStatementResultResponse> {
    return this.request("FetchSqlGatewayStatementResult", req, cb)
  }

  /**
   * 获取指定作业的事件，包括作业启动停止、运行失败、快照失败、作业异常等各种事件类型
   */
  async DescribeJobEvents(
    req: DescribeJobEventsRequest,
    cb?: (error: string, rep: DescribeJobEventsResponse) => void
  ): Promise<DescribeJobEventsResponse> {
    return this.request("DescribeJobEvents", req, cb)
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
   * 作业列表删除文件夹
   */
  async DeleteFolders(
    req: DeleteFoldersRequest,
    cb?: (error: string, rep: DeleteFoldersResponse) => void
  ): Promise<DeleteFoldersResponse> {
    return this.request("DeleteFolders", req, cb)
  }

  /**
   * 授权工作空间列表
   */
  async DescribeWorkSpaces(
    req: DescribeWorkSpacesRequest,
    cb?: (error: string, rep: DescribeWorkSpacesResponse) => void
  ): Promise<DescribeWorkSpacesResponse> {
    return this.request("DescribeWorkSpaces", req, cb)
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
   * 查询集群
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 删除作业配置
   */
  async DeleteJobConfigs(
    req: DeleteJobConfigsRequest,
    cb?: (error: string, rep: DeleteJobConfigsResponse) => void
  ): Promise<DeleteJobConfigsResponse> {
    return this.request("DeleteJobConfigs", req, cb)
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
   * 修改工作空间
   */
  async ModifyWorkSpace(
    req: ModifyWorkSpaceRequest,
    cb?: (error: string, rep: ModifyWorkSpaceResponse) => void
  ): Promise<ModifyWorkSpaceResponse> {
    return this.request("ModifyWorkSpace", req, cb)
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
   * 查询元数据表
   */
  async GetMetaTable(
    req: GetMetaTableRequest,
    cb?: (error: string, rep: GetMetaTableResponse) => void
  ): Promise<GetMetaTableResponse> {
    return this.request("GetMetaTable", req, cb)
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

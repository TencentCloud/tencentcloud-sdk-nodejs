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
  DescribeCronJobsRequest,
  UpdateJobRequest,
  UpdateCronJobResponse,
  DescribeSampleMatrixQueryResponse,
  DescribeSampleLogsRequest,
  DeleteJobsRequest,
  AlertChannelRecord,
  DescribeAlertRecordsRequest,
  DeleteAlertChannelResponse,
  DescribeLabelValuesRequest,
  AbortCronJobsResponse,
  DescribeRequestSummaryResponse,
  DescribeScenarioWithJobsRequest,
  CreateCronJobResponse,
  RestartCronJobsResponse,
  SLAPolicy,
  DNSConfig,
  ScriptInfo,
  NormalLog,
  UpdateProjectRequest,
  AbortJobResponse,
  Project,
  UpdateEnvironmentRequest,
  DescribeRegionsResponse,
  Attributes,
  CreateEnvironmentResponse,
  UpdateScenarioResponse,
  File,
  DescribeEnvironmentsRequest,
  CustomSample,
  CreateProjectRequest,
  AdjustJobSpeedRequest,
  DescribeRequestSummaryRequest,
  HostAlias,
  CreateFileResponse,
  DeleteProjectsResponse,
  GeoRegionsLoadItem,
  UpdateEnvironmentResponse,
  LabelWithValues,
  Label,
  ProtocolInfo,
  VpcLoadDistribution,
  SamplePair,
  CronJob,
  DescribeLabelValuesResponse,
  InternalMetricQuery,
  Job,
  DescribeAvailableMetricsRequest,
  CopyScenarioResponse,
  DescribeSampleMatrixQueryRequest,
  GenerateTmpKeyResponse,
  Stage,
  DescribeFilesResponse,
  DeleteProjectsRequest,
  UpdateFileScenarioRelationRequest,
  ScenarioWithJobs,
  DeleteJobsResponse,
  TagSpec,
  AdjustJobSpeedResponse,
  ErrorSummary,
  CreateProjectResponse,
  DescribeSampleQueryRequest,
  DescribeSampleMatrixBatchQueryResponse,
  DeleteEnvironmentsResponse,
  SLALabel,
  AlertRecord,
  RequestsPerSecond,
  DescribeRegionsRequest,
  DeleteScenariosResponse,
  CreateEnvironmentRequest,
  DescribeErrorSummaryRequest,
  CopyScenarioRequest,
  TestData,
  SampleLog,
  DomainNameConfig,
  DescribeNormalLogsResponse,
  Notification,
  DescribeSampleBatchQueryRequest,
  RestartCronJobsRequest,
  DeleteScenariosRequest,
  CreateAlertChannelResponse,
  MetricInfo,
  CreateAlertChannelRequest,
  AlertRecordStatus,
  DescribeAlertChannelsRequest,
  SLARule,
  DescribeAvailableMetricsResponse,
  DescribeMetricLabelWithValuesResponse,
  FileInfo,
  LoadSpec,
  AlertChannel,
  DescribeEnvironmentsResponse,
  ScriptOrigin,
  ScenarioRelatedJobsParams,
  Credentials,
  DescribeAlertChannelsResponse,
  CreateCronJobRequest,
  UpdateJobResponse,
  DescribeCheckSummaryRequest,
  Filter,
  DeleteFilesResponse,
  AggregationLegend,
  LoadSource,
  CustomSampleMatrix,
  Load,
  CreateFileRequest,
  RequestSummary,
  DeleteCronJobsRequest,
  DescribeSampleLogsResponse,
  DescribeCronJobsResponse,
  DescribeNormalLogsRequest,
  DescribeJobsRequest,
  DescribeFilesRequest,
  AbortCronJobsRequest,
  DescribeSampleMatrixBatchQueryRequest,
  DescribeAlertRecordsResponse,
  DescribeProjectsRequest,
  DescribeSampleQueryResponse,
  DeleteEnvironmentsRequest,
  CreateScenarioRequest,
  DescribeMetricLabelWithValuesRequest,
  Scenario,
  DescribeProjectsResponse,
  UpdateCronJobRequest,
  RegionDetail,
  SampleStream,
  DescribeCheckSummaryResponse,
  DescribeScenariosRequest,
  DescribeScenariosResponse,
  CreateScenarioResponse,
  AbortJobRequest,
  DeleteFilesRequest,
  CheckSummary,
  NotificationHook,
  DescribeJobsResponse,
  GenerateTmpKeyRequest,
  DescribeSampleBatchQueryResponse,
  StartJobResponse,
  UpdateScenarioRequest,
  MetricLabelWithValues,
  DeleteCronJobsResponse,
  StartJobRequest,
  DescribeScenarioWithJobsResponse,
  ReactionTimeRange,
  Concurrency,
  DeleteAlertChannelRequest,
  DescribeErrorSummaryResponse,
  UpdateProjectResponse,
  UpdateFileScenarioRelationResponse,
} from "./pts_models"

/**
 * pts client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("pts.tencentcloudapi.com", "2021-07-28", clientConfig)
  }

  /**
   * 查询场景配置并附带已经执行的任务内容
   */
  async DescribeScenarioWithJobs(
    req: DescribeScenarioWithJobsRequest,
    cb?: (error: string, rep: DescribeScenarioWithJobsResponse) => void
  ): Promise<DescribeScenarioWithJobsResponse> {
    return this.request("DescribeScenarioWithJobs", req, cb)
  }

  /**
   * 删除环境
   */
  async DeleteEnvironments(
    req?: DeleteEnvironmentsRequest,
    cb?: (error: string, rep: DeleteEnvironmentsResponse) => void
  ): Promise<DeleteEnvironmentsResponse> {
    return this.request("DeleteEnvironments", req, cb)
  }

  /**
   * 更新任务
   */
  async UpdateJob(
    req: UpdateJobRequest,
    cb?: (error: string, rep: UpdateJobResponse) => void
  ): Promise<UpdateJobResponse> {
    return this.request("UpdateJob", req, cb)
  }

  /**
   * 更新定时任务
   */
  async UpdateCronJob(
    req: UpdateCronJobRequest,
    cb?: (error: string, rep: UpdateCronJobResponse) => void
  ): Promise<UpdateCronJobResponse> {
    return this.request("UpdateCronJob", req, cb)
  }

  /**
   * 创建并启动任务
   */
  async StartJob(
    req: StartJobRequest,
    cb?: (error: string, rep: StartJobResponse) => void
  ): Promise<StartJobResponse> {
    return this.request("StartJob", req, cb)
  }

  /**
   * 更新场景
   */
  async UpdateScenario(
    req: UpdateScenarioRequest,
    cb?: (error: string, rep: UpdateScenarioResponse) => void
  ): Promise<UpdateScenarioResponse> {
    return this.request("UpdateScenario", req, cb)
  }

  /**
   * 查询文件列表
   */
  async DescribeFiles(
    req: DescribeFilesRequest,
    cb?: (error: string, rep: DescribeFilesResponse) => void
  ): Promise<DescribeFilesResponse> {
    return this.request("DescribeFiles", req, cb)
  }

  /**
   * 删除项目
   */
  async DeleteProjects(
    req: DeleteProjectsRequest,
    cb?: (error: string, rep: DeleteProjectsResponse) => void
  ): Promise<DeleteProjectsResponse> {
    return this.request("DeleteProjects", req, cb)
  }

  /**
   * 查询指标，返回固定时间点指标内容
   */
  async DescribeSampleQuery(
    req: DescribeSampleQueryRequest,
    cb?: (error: string, rep: DescribeSampleQueryResponse) => void
  ): Promise<DescribeSampleQueryResponse> {
    return this.request("DescribeSampleQuery", req, cb)
  }

  /**
   * 查询任务列表
   */
  async DescribeJobs(
    req: DescribeJobsRequest,
    cb?: (error: string, rep: DescribeJobsResponse) => void
  ): Promise<DescribeJobsResponse> {
    return this.request("DescribeJobs", req, cb)
  }

  /**
   * 创建场景
   */
  async CreateScenario(
    req: CreateScenarioRequest,
    cb?: (error: string, rep: CreateScenarioResponse) => void
  ): Promise<CreateScenarioResponse> {
    return this.request("CreateScenario", req, cb)
  }

  /**
   * 删除文件
   */
  async DeleteFiles(
    req: DeleteFilesRequest,
    cb?: (error: string, rep: DeleteFilesResponse) => void
  ): Promise<DeleteFilesResponse> {
    return this.request("DeleteFiles", req, cb)
  }

  /**
   * 查询地域列表
   */
  async DescribeRegions(
    req: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 查询检查点汇总信息
   */
  async DescribeCheckSummary(
    req: DescribeCheckSummaryRequest,
    cb?: (error: string, rep: DescribeCheckSummaryResponse) => void
  ): Promise<DescribeCheckSummaryResponse> {
    return this.request("DescribeCheckSummary", req, cb)
  }

  /**
   * 批量查询指标矩阵
   */
  async DescribeSampleMatrixBatchQuery(
    req: DescribeSampleMatrixBatchQueryRequest,
    cb?: (error: string, rep: DescribeSampleMatrixBatchQueryResponse) => void
  ): Promise<DescribeSampleMatrixBatchQueryResponse> {
    return this.request("DescribeSampleMatrixBatchQuery", req, cb)
  }

  /**
   * 查询指标矩阵
   */
  async DescribeSampleMatrixQuery(
    req: DescribeSampleMatrixQueryRequest,
    cb?: (error: string, rep: DescribeSampleMatrixQueryResponse) => void
  ): Promise<DescribeSampleMatrixQueryResponse> {
    return this.request("DescribeSampleMatrixQuery", req, cb)
  }

  /**
   * 查询请求汇总信息
   */
  async DescribeRequestSummary(
    req: DescribeRequestSummaryRequest,
    cb?: (error: string, rep: DescribeRequestSummaryResponse) => void
  ): Promise<DescribeRequestSummaryResponse> {
    return this.request("DescribeRequestSummary", req, cb)
  }

  /**
   * 删除场景
   */
  async DeleteScenarios(
    req: DeleteScenariosRequest,
    cb?: (error: string, rep: DeleteScenariosResponse) => void
  ): Promise<DeleteScenariosResponse> {
    return this.request("DeleteScenarios", req, cb)
  }

  /**
   * 查询项目列表
   */
  async DescribeProjects(
    req: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
  }

  /**
   * 返回告警历史项的列表
   */
  async DescribeAlertRecords(
    req: DescribeAlertRecordsRequest,
    cb?: (error: string, rep: DescribeAlertRecordsResponse) => void
  ): Promise<DescribeAlertRecordsResponse> {
    return this.request("DescribeAlertRecords", req, cb)
  }

  /**
   * 批量查询指标，返回固定时间点指标内容
   */
  async DescribeSampleBatchQuery(
    req: DescribeSampleBatchQueryRequest,
    cb?: (error: string, rep: DescribeSampleBatchQueryResponse) => void
  ): Promise<DescribeSampleBatchQueryResponse> {
    return this.request("DescribeSampleBatchQuery", req, cb)
  }

  /**
   * 查询告警通知接收组
   */
  async DescribeAlertChannels(
    req: DescribeAlertChannelsRequest,
    cb?: (error: string, rep: DescribeAlertChannelsResponse) => void
  ): Promise<DescribeAlertChannelsResponse> {
    return this.request("DescribeAlertChannels", req, cb)
  }

  /**
   * 查询系统支持的指标
   */
  async DescribeAvailableMetrics(
    req?: DescribeAvailableMetricsRequest,
    cb?: (error: string, rep: DescribeAvailableMetricsResponse) => void
  ): Promise<DescribeAvailableMetricsResponse> {
    return this.request("DescribeAvailableMetrics", req, cb)
  }

  /**
   * 查询标签内容
   */
  async DescribeLabelValues(
    req: DescribeLabelValuesRequest,
    cb?: (error: string, rep: DescribeLabelValuesResponse) => void
  ): Promise<DescribeLabelValuesResponse> {
    return this.request("DescribeLabelValues", req, cb)
  }

  /**
   * 停止定时任务
   */
  async AbortCronJobs(
    req: AbortCronJobsRequest,
    cb?: (error: string, rep: AbortCronJobsResponse) => void
  ): Promise<AbortCronJobsResponse> {
    return this.request("AbortCronJobs", req, cb)
  }

  /**
   * 更新关联文件场景
   */
  async UpdateFileScenarioRelation(
    req: UpdateFileScenarioRelationRequest,
    cb?: (error: string, rep: UpdateFileScenarioRelationResponse) => void
  ): Promise<UpdateFileScenarioRelationResponse> {
    return this.request("UpdateFileScenarioRelation", req, cb)
  }

  /**
   * 重启状态为已中止的定时任务
   */
  async RestartCronJobs(
    req: RestartCronJobsRequest,
    cb?: (error: string, rep: RestartCronJobsResponse) => void
  ): Promise<RestartCronJobsResponse> {
    return this.request("RestartCronJobs", req, cb)
  }

  /**
   * 更新环境
   */
  async UpdateEnvironment(
    req?: UpdateEnvironmentRequest,
    cb?: (error: string, rep: UpdateEnvironmentResponse) => void
  ): Promise<UpdateEnvironmentResponse> {
    return this.request("UpdateEnvironment", req, cb)
  }

  /**
   * 创建告警通知接收组
   */
  async CreateAlertChannel(
    req: CreateAlertChannelRequest,
    cb?: (error: string, rep: CreateAlertChannelResponse) => void
  ): Promise<CreateAlertChannelResponse> {
    return this.request("CreateAlertChannel", req, cb)
  }

  /**
   * 查看环境列表
   */
  async DescribeEnvironments(
    req?: DescribeEnvironmentsRequest,
    cb?: (error: string, rep: DescribeEnvironmentsResponse) => void
  ): Promise<DescribeEnvironmentsResponse> {
    return this.request("DescribeEnvironments", req, cb)
  }

  /**
   * 删除任务
   */
  async DeleteJobs(
    req: DeleteJobsRequest,
    cb?: (error: string, rep: DeleteJobsResponse) => void
  ): Promise<DeleteJobsResponse> {
    return this.request("DeleteJobs", req, cb)
  }

  /**
   * 查询错误详情汇总信息
   */
  async DescribeErrorSummary(
    req: DescribeErrorSummaryRequest,
    cb?: (error: string, rep: DescribeErrorSummaryResponse) => void
  ): Promise<DescribeErrorSummaryResponse> {
    return this.request("DescribeErrorSummary", req, cb)
  }

  /**
   * 压测过程日志包括引擎输出日志及用户输出日志
   */
  async DescribeNormalLogs(
    req: DescribeNormalLogsRequest,
    cb?: (error: string, rep: DescribeNormalLogsResponse) => void
  ): Promise<DescribeNormalLogsResponse> {
    return this.request("DescribeNormalLogs", req, cb)
  }

  /**
   * 复制场景
   */
  async CopyScenario(
    req: CopyScenarioRequest,
    cb?: (error: string, rep: CopyScenarioResponse) => void
  ): Promise<CopyScenarioResponse> {
    return this.request("CopyScenario", req, cb)
  }

  /**
   * 查询采样日志
   */
  async DescribeSampleLogs(
    req: DescribeSampleLogsRequest,
    cb?: (error: string, rep: DescribeSampleLogsResponse) => void
  ): Promise<DescribeSampleLogsResponse> {
    return this.request("DescribeSampleLogs", req, cb)
  }

  /**
   * 创建环境
   */
  async CreateEnvironment(
    req?: CreateEnvironmentRequest,
    cb?: (error: string, rep: CreateEnvironmentResponse) => void
  ): Promise<CreateEnvironmentResponse> {
    return this.request("CreateEnvironment", req, cb)
  }

  /**
   * 查询场景列表
   */
  async DescribeScenarios(
    req: DescribeScenariosRequest,
    cb?: (error: string, rep: DescribeScenariosResponse) => void
  ): Promise<DescribeScenariosResponse> {
    return this.request("DescribeScenarios", req, cb)
  }

  /**
   * 删除定时任务
   */
  async DeleteCronJobs(
    req: DeleteCronJobsRequest,
    cb?: (error: string, rep: DeleteCronJobsResponse) => void
  ): Promise<DeleteCronJobsResponse> {
    return this.request("DeleteCronJobs", req, cb)
  }

  /**
   * 列出定时任务，非必填数组为空就默认全选
   */
  async DescribeCronJobs(
    req: DescribeCronJobsRequest,
    cb?: (error: string, rep: DescribeCronJobsResponse) => void
  ): Promise<DescribeCronJobsResponse> {
    return this.request("DescribeCronJobs", req, cb)
  }

  /**
   * 删除告警通知接收组
   */
  async DeleteAlertChannel(
    req: DeleteAlertChannelRequest,
    cb?: (error: string, rep: DeleteAlertChannelResponse) => void
  ): Promise<DeleteAlertChannelResponse> {
    return this.request("DeleteAlertChannel", req, cb)
  }

  /**
   * 创建文件
   */
  async CreateFile(
    req: CreateFileRequest,
    cb?: (error: string, rep: CreateFileResponse) => void
  ): Promise<CreateFileResponse> {
    return this.request("CreateFile", req, cb)
  }

  /**
   * 调整任务的目标RPS
   */
  async AdjustJobSpeed(
    req: AdjustJobSpeedRequest,
    cb?: (error: string, rep: AdjustJobSpeedResponse) => void
  ): Promise<AdjustJobSpeedResponse> {
    return this.request("AdjustJobSpeed", req, cb)
  }

  /**
   * 创建项目
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
  }

  /**
   * 停止任务
   */
  async AbortJob(
    req: AbortJobRequest,
    cb?: (error: string, rep: AbortJobResponse) => void
  ): Promise<AbortJobResponse> {
    return this.request("AbortJob", req, cb)
  }

  /**
   * 更新项目
   */
  async UpdateProject(
    req: UpdateProjectRequest,
    cb?: (error: string, rep: UpdateProjectResponse) => void
  ): Promise<UpdateProjectResponse> {
    return this.request("UpdateProject", req, cb)
  }

  /**
   * 生成临时COS凭证
   */
  async GenerateTmpKey(
    req: GenerateTmpKeyRequest,
    cb?: (error: string, rep: GenerateTmpKeyResponse) => void
  ): Promise<GenerateTmpKeyResponse> {
    return this.request("GenerateTmpKey", req, cb)
  }

  /**
   * 查询指标所有的label及values值
   */
  async DescribeMetricLabelWithValues(
    req: DescribeMetricLabelWithValuesRequest,
    cb?: (error: string, rep: DescribeMetricLabelWithValuesResponse) => void
  ): Promise<DescribeMetricLabelWithValuesResponse> {
    return this.request("DescribeMetricLabelWithValues", req, cb)
  }

  /**
   * 创建定时任务
   */
  async CreateCronJob(
    req: CreateCronJobRequest,
    cb?: (error: string, rep: CreateCronJobResponse) => void
  ): Promise<CreateCronJobResponse> {
    return this.request("CreateCronJob", req, cb)
  }
}

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
  DescribeFOOMMallocReportListRequest,
  DescribeProjectLimitsResponse,
  ExplorationExceptionStack,
  DescribeFileCertificateResponse,
  DescribeSessionListRequest,
  ResumeProjectResponse,
  DescribeRumLogListResponse,
  DescribeAppMetricsDataRequest,
  DescribeTokenRequest,
  DeleteFieldTransformRuleResponse,
  DescribeDataStaticUrlV2Request,
  DescribeRumLogExportV2Response,
  DescribePvListResponse,
  DescribeRumLogDetailsV2Response,
  DescribeScoresV2Response,
  DialTrendPoint,
  DeleteTDEMFunnelResponse,
  DescribeDataCustomUrlRequest,
  DescribeReplayMetaResponse,
  Tag,
  DescribeDataPvUrlStatisticsV2Request,
  DescribeDataFetchUrlV2Response,
  DescribeTDEMFunnelDetailResponse,
  DescribeIssueCrashLogDownloadURLRequest,
  CreateTDEMFieldTransformRuleResponse,
  DescribeIssueTrendResponse,
  DescribeDataReportCountV2Request,
  UploadMiniProgramSourceRequest,
  DescribeFOOMMallocProblemDetailResponse,
  DescribeTDEMEventSearchRequest,
  StopProjectRequest,
  DescribeRumLogTotalV2Request,
  DescribeDataWebVitalsPageV2Request,
  DescribeDataPerformancePageRequest,
  DescribeTDEMSSEDistributionResponse,
  DescribeTDEMMetricSummaryRequest,
  ResumeInstanceRequest,
  DescribeMiniProgramReplayPacksRequest,
  DialTargetIpGeo,
  DeleteProjectResponse,
  DescribePerformanceMetricsRequest,
  DescribeTDEMEventRankResponse,
  DescribeDataCustomUrlV2Request,
  ReleaseFile,
  ModifyProjectLimitResponse,
  DescribeDataBridgeUrlV2Request,
  ResumeProjectRequest,
  DescribeRumStatsLogListResponse,
  DeleteTDEMApplicationResponse,
  CreateWhitelistRequest,
  StopInstanceResponse,
  ModifyTDEMSampleConfigRequest,
  DescribeTDEMMetricTrendRequest,
  ModifyProjectRequest,
  MetricTrendPoint,
  CreateStarProjectRequest,
  DescribeDataSetUrlStatisticsV2Request,
  DescribeRumLogExportsV2Request,
  RumProject,
  DescribeFOOMMallocProblemListRequest,
  DescribeTDEMFunnelStepSessionListResponse,
  UsageDetailRow,
  DescribeScoresResponse,
  EventRankPoint,
  DescribeTDEMMetricDistributionResponse,
  DescribeTDEMOverviewScoresRequest,
  DescribeSymbolArtifactsResponse,
  DescribeTDEMRelatedEventsResponse,
  ExceptionBucket,
  DeleteTDEMBusinessSystemRequest,
  FieldTransformRuleItem,
  DescribeReplayDetailsRequest,
  DescribeStruggleDistributionRequest,
  DescribeSymbolArtifactUploadCredentialResponse,
  DeleteInstanceRequest,
  DescribeFieldValuesResponse,
  ModifyTDEMFieldTransformRuleRequest,
  DescribeDataWebVitalsPageRequest,
  DescribeTDEMUsageDetailResponse,
  DescribeDataFetchUrlInfoRequest,
  DescribeFOOMReportListResponse,
  CreateFieldTransformRuleResponse,
  ModifyFieldTransformRuleRequest,
  DescribeFieldTransformRulesRequest,
  DeleteTDEMFunnelRequest,
  DescribeAppDimensionMetricsResponse,
  DescribeTDEMSSEDimensionsResponse,
  CreateTDEMFunnelRequest,
  TDEMSSEDistributionBin,
  DescribeRumGroupLogRequest,
  ModifyProjectResponse,
  DescribeTDEMSSETrendResponse,
  MetricTrendBatchItem,
  ModifyTDEMBusinessSystemResponse,
  ExplorationEventItem,
  DescribeFOOMProblemListRequest,
  DescribePvListRequest,
  DescribeTDEMDialOverviewResponse,
  DescribeDataLogUrlStatisticsV2Request,
  ModifyTDEMFunnelResponse,
  DescribeDataStaticResourceV2Response,
  DescribeIssueAffectedUsersResponse,
  DescribeIssuesRequest,
  DescribeDataFetchProjectRequest,
  DescribeDataResponse,
  RumAreaInfo,
  DescribeRumLogExportV2Request,
  ModifyInstanceRequest,
  DescribeAppMetricsDataResponse,
  DescribeAppSingleCaseDetailListResponse,
  ResumeTDEMApplicationResponse,
  ResumeTDEMApplicationRequest,
  DescribeTDEMDialDimensionsRequest,
  RumUvInfo,
  DescribeScoresRequest,
  EventFrame,
  DescribeIssuesListRequest,
  DescribeIssuesDistributionRequest,
  DescribeTDEMFunnelTrendResponse,
  DescribeTDEMBusinessSystemsResponse,
  DescribeTDEMSSEPercentileResponse,
  DescribeDataStaticResourceV2Request,
  DescribeTDEMDialExecutionDetailResponse,
  UploadSymbolArtifactResponse,
  DescribeTDEMMetricDistributionRequest,
  DescribeDataStaticUrlRequest,
  ModifyIssueStatusRequest,
  DescribeWhitelistsRequest,
  DescribeUvListRequest,
  CreateFieldTransformRuleRequest,
  DescribeReplayMetaRequest,
  DescribeRumLogExportsV2Response,
  SymbolicatedView,
  DescribeFOOMReportListRequest,
  DescribeApplicationExitReportListRequest,
  DescribeTDEMSSEDistributionRequest,
  ModifyProjectLimitRequest,
  DescribeFieldTransformRulesResponse,
  DescribeTDEMEventDetailRequest,
  DescribeLagANRProblemListResponse,
  DescribeAppSingleCaseListResponse,
  DescribePerformanceMetricsResponse,
  DescribeDataBridgeUrlV2Response,
  DescribeUserJourneySanKeyResponse,
  DescribeDataFetchUrlRequest,
  DescribeProjectLimitsRequest,
  CreateStarProjectResponse,
  DescribeLagANRProblemListRequest,
  DescribeIssueTrendRequest,
  DescribeRumLogExportsResponse,
  DescribeTDEMSampleRateRequest,
  DescribeFOOMMallocProblemListResponse,
  DescribeIssueBreadcrumbsRequest,
  CreateTDEMApplicationRequest,
  ModifyInstanceResponse,
  ModifyTDEMSampleConfigResponse,
  DeleteTDEMBusinessSystemResponse,
  ResumeInstanceResponse,
  DescribeTawAreasResponse,
  DescribeAppSingleCaseListRequest,
  DeleteTDEMDialTaskRequest,
  DeleteWhitelistRequest,
  DescribeTDEMFieldTransformRulesRequest,
  DeleteMiniProgramReplayPackResponse,
  ModifyTDEMBusinessSystemRequest,
  StopTDEMApplicationResponse,
  ApplicationItem,
  DescribeTawInstancesRequest,
  DescribeDataLogUrlStatisticsRequest,
  DescribeLagANRProblemAccountDetailRequest,
  TDEMSSEPercentilePoint,
  DescribeTDEMUsageSummaryResponse,
  FloatNameValue,
  OverviewScoreItem,
  IntKeyValue,
  DescribeTDEMFunnelDimensionsRequest,
  DescribeFOOMProblemDetailResponse,
  DescribeRumLogTotalV2Response,
  DescribeDataFetchUrlInfoResponse,
  ModifyIssueStatusResponse,
  DescribeWhitelistsResponse,
  DescribeIssuesDistributionResponse,
  CreateWhitelistResponse,
  ScoreInfo,
  AppOverviewScore,
  DescribeDataWebVitalsPageResponse,
  DescribeSampleRateResponse,
  DescribeTawAreasRequest,
  DescribeTDEMApplicationsResponse,
  DescribeAppSingleCaseDetailListRequest,
  DescribeTDEMFunnelListRequest,
  StopProjectResponse,
  DescribeApplicationExitReportListResponse,
  DescribeTDEMEventSearchSummaryResponse,
  DescribeRumLogExportResponse,
  DescribeTDEMDialTasksResponse,
  DescribeIssuesStatisticsTrendResponse,
  DescribeIssueAffectedUsersRequest,
  CreateTDEMFieldTransformRuleRequest,
  Whitelist,
  DescribeLagANRProblemAccountDetailResponse,
  EventSearchSeriesPoint,
  DescribeTDEMEventRankRequest,
  DescribeTDEMMetricTrendResponse,
  DeleteStarProjectResponse,
  EventStack,
  DialTask,
  DescribeTokenResponse,
  DescribeIssuesStatisticsTrendRequest,
  DescribeDataPvUrlInfoResponse,
  StopInstanceRequest,
  StopTDEMApplicationRequest,
  DescribeFileCertificateRequest,
  DescribeErrorResponse,
  DialDimensionItem,
  DescribeFOOMProblemDetailRequest,
  DeleteWhitelistResponse,
  DescribeSymbolArtifactUploadCredentialRequest,
  DescribeTDEMBusinessSystemsRequest,
  DescribeTDEMFunnelReportResponse,
  DescribeMiniProgramReplayPackRequest,
  DescribeDataReportCountRequest,
  FloatKeyValue,
  DescribeDataPerformancePageResponse,
  ModifyFieldTransformRuleResponse,
  CreateReleaseFileRequest,
  MetricQueryItem,
  DescribeDataStaticUrlV2Response,
  CreateTDEMDialTaskResponse,
  DescribeFieldValuesRequest,
  DescribeExceptionDetailResponse,
  CompareCondition,
  CreateTDEMBusinessSystemResponse,
  DescribeTopIssuesResponse,
  FunnelStepInput,
  DeleteReleaseFileRequest,
  DescribeDataLogUrlStatisticsResponse,
  DescribeDataPvUrlStatisticsRequest,
  ModifyMiniProgramReplayPackRequest,
  PreviewTDEMFunnelReportResponse,
  ProjectLimit,
  DeleteFieldTransformRuleRequest,
  DescribeDataPvUrlStatisticsResponse,
  DescribeDataLogUrlInfoRequest,
  DescribeTDEMFunnelListResponse,
  DescribeDataPvUrlStatisticsV2Response,
  ExceptionDistribution,
  DescribeTDEMFunnelReportRequest,
  EventRankItem,
  DescribeTDEMSSEPercentileRequest,
  DescribeIssueEventDetailRequest,
  TDEMSSETrendSeries,
  ModifyTDEMSampleRateRequest,
  DescribeTDEMSessionReplayTimelineRequest,
  DescribeDataLogUrlInfoResponse,
  RumPvInfo,
  DescribeExceptionReportListResponse,
  CreateTDEMBusinessSystemRequest,
  CreateTDEMDialTaskRequest,
  DescribeTDEMSampleRateResponse,
  DescribeRumStatsLogListV2Request,
  DescribeTDEMSSESummaryRequest,
  ModifyTDEMDialTaskRequest,
  DescribeDataCustomUrlV2Response,
  DescribeReplayDataRequest,
  DescribeTDEMDialOverviewRequest,
  DescribeDataEventUrlResponse,
  ModifyTDEMApplicationRequest,
  ModifySampleRateResponse,
  DescribeTDEMFunnelStepSessionListRequest,
  DescribeReleaseFilesResponse,
  ModifyMiniProgramReplayPackResponse,
  DeleteMiniProgramReplayPackRequest,
  DescribeDataStaticProjectV2Request,
  DescribeTDEMUsageDetailRequest,
  DescribeProjectsRequest,
  DescribeDataEventUrlRequest,
  ModifyTDEMFunnelRequest,
  ModifyTDEMApplicationResponse,
  DescribeDataReportCountV2Response,
  DescribeTDEMDialTrendRequest,
  DescribeDataReportCountResponse,
  DescribeFOOMMallocReportListResponse,
  DescribeTDEMEventSearchSummaryRequest,
  DescribeTDEMDialExecutionListRequest,
  DescribeRumLogListRequest,
  DescribeDataPerformancePageV2Request,
  DescribeDataStaticResourceRequest,
  DescribeTawInstancesResponse,
  DescribeTDEMSessionReplayTimelineResponse,
  DescribeTDEMRelatedEventsRequest,
  DescribeDataPvUrlInfoRequest,
  CreateReleaseFileResponse,
  BusinessSystemItem,
  DescribeDataFetchProjectResponse,
  DescribeRumLogDetailsV2Request,
  DescribeLagANRProblemFeatureAccountsRequest,
  EventView,
  DescribeTopIssuesRequest,
  DescribeRumGroupLogV2Request,
  DescribeAppDimensionMetricsRequest,
  DescribeFOOMMallocProblemDetailRequest,
  DescribeTDEMSSEDimensionsRequest,
  DescribeTDEMFunnelTrendRequest,
  StringKeyValue,
  TDEMSSEDimensionRow,
  DeleteProjectRequest,
  DescribeTDEMDialTrendResponse,
  DescribeIssueBreadcrumbsResponse,
  DescribeDataFetchUrlResponse,
  DescribeErrorRequest,
  DescribeUserJourneySanKeyRequest,
  DeleteSymbolArtifactRequest,
  DescribeDataStaticProjectV2Response,
  DescribeIssuesListResponse,
  DescribeSymbolArtifactsRequest,
  CreateTDEMFunnelResponse,
  ScoreInfoV2,
  UsageTimePoint,
  DialProbe,
  UploadSymbolArtifactRequest,
  DescribeReleaseFilesRequest,
  DescribeExceptionReportListRequest,
  DescribeTDEMDialDimensionsResponse,
  DescribeRumGroupLogResponse,
  DescribeIssuesResponse,
  DescribeTDEMUsageSummaryRequest,
  DeleteStarProjectRequest,
  DeleteTDEMApplicationRequest,
  DescribeApplicationExitReportDetailRequest,
  PreviewTDEMFunnelReportRequest,
  DescribeStruggleDistributionResponse,
  DescribeLagANRProblemFeatureAccountsResponse,
  DescribeUvListResponse,
  DescribeDataRequest,
  DescribeDataEventUrlV2Request,
  DescribeTDEMFunnelDimensionsResponse,
  DescribeTDEMSampleConfigResponse,
  DescribeTDEMDialExecutionDetailRequest,
  DescribeDataEventUrlV2Response,
  DescribeIssueEventDetailResponse,
  DeleteInstanceResponse,
  MetricDistributionItem,
  DescribeTDEMEventDetailResponse,
  CreateTDEMApplicationResponse,
  UploadMiniProgramSourceResponse,
  DescribeScoresV2Request,
  TDEMSSETrendPoint,
  DescribeRumLogExportRequest,
  DescribeDataLogUrlStatisticsV2Response,
  DescribeDataCustomUrlResponse,
  DescribeTDEMDialTasksRequest,
  DescribeTDEMSSETrendRequest,
  DescribeTDEMDialExecutionListResponse,
  DescribeRumStatsLogListV2Response,
  DeleteTDEMFieldTransformRuleRequest,
  DescribeDataStaticProjectRequest,
  DescribeRumStatsLogListRequest,
  DescribeFOOMProblemListResponse,
  Kafka,
  DescribeTDEMSampleConfigRequest,
  ExceptionDimensionRow,
  DescribeReplayDetailsResponse,
  DescribeDataSetUrlStatisticsRequest,
  DescribeDataWebVitalsPageV2Response,
  DescribeDataStaticProjectResponse,
  DescribeDataPerformancePageV2Response,
  DescribeTDEMApplicationsRequest,
  DescribeTDEMSSESummaryResponse,
  DescribeReleaseFileSignRequest,
  DescribeSampleRateRequest,
  DescribeSessionListResponse,
  DeleteReleaseFileResponse,
  DescribeIssueCrashLogDownloadURLResponse,
  DescribeReleaseFileSignResponse,
  DescribeTDEMOverviewScoresResponse,
  Filter,
  DialExecution,
  ModifyTDEMFieldTransformRuleResponse,
  ModifyTDEMSampleRateResponse,
  DescribeDataStaticResourceResponse,
  DeleteTDEMFieldTransformRuleResponse,
  MetricDistributionBatchItem,
  DescribeDataStaticUrlResponse,
  DescribeReplayDataResponse,
  DescribeTDEMFunnelDetailRequest,
  DescribeIssueDetailRequest,
  DescribeTDEMEventSearchResponse,
  DescribeDataSetUrlStatisticsV2Response,
  DescribeExceptionDetailRequest,
  DescribeDataFetchUrlV2Request,
  DescribeProjectsResponse,
  DescribeDataSetUrlStatisticsResponse,
  DescribeMiniProgramReplayPacksResponse,
  DescribeRumLogExportsRequest,
  MetricSummaryBatchItem,
  DescribeTDEMFieldTransformRulesResponse,
  DeleteSymbolArtifactResponse,
  DescribeRumGroupLogV2Response,
  ModifyTDEMDialTaskResponse,
  DescribeApplicationExitReportDetailResponse,
  DescribeIssueEventsResponse,
  ModifySampleRateRequest,
  DescribeIssueEventsRequest,
  DescribeTDEMMetricSummaryResponse,
  DescribeMiniProgramReplayPackResponse,
  Filters,
  DescribeIssueDetailResponse,
  DeleteTDEMDialTaskResponse,
  RumInstanceInfo,
} from "./rum_models"

/**
 * rum client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("rum.tencentcloudapi.com", "2021-06-22", clientConfig)
  }

  /**
   * 获取TDEM字段值列表
   */
  async DescribeFieldValues(
    req: DescribeFieldValuesRequest,
    cb?: (error: string, rep: DescribeFieldValuesResponse) => void
  ): Promise<DescribeFieldValuesResponse> {
    return this.request("DescribeFieldValues", req, cb)
  }

  /**
   * 按AppId+BundleHash取已编译回放包正文。成功含Pack（tmpl/css/js/manifest/hash），不返回WXML/WXSS源码。不存在返回ResourceNotFound。
   */
  async DescribeMiniProgramReplayPack(
    req: DescribeMiniProgramReplayPackRequest,
    cb?: (error: string, rep: DescribeMiniProgramReplayPackResponse) => void
  ): Promise<DescribeMiniProgramReplayPackResponse> {
    return this.request("DescribeMiniProgramReplayPack", req, cb)
  }

  /**
   * 获取项目下的日志列表，分钟级
   */
  async DescribeRumStatsLogList(
    req: DescribeRumStatsLogListRequest,
    cb?: (error: string, rep: DescribeRumStatsLogListResponse) => void
  ): Promise<DescribeRumStatsLogListResponse> {
    return this.request("DescribeRumStatsLogList", req, cb)
  }

  /**
   * 获取漏斗趋势
   */
  async DescribeTDEMFunnelTrend(
    req: DescribeTDEMFunnelTrendRequest,
    cb?: (error: string, rep: DescribeTDEMFunnelTrendResponse) => void
  ): Promise<DescribeTDEMFunnelTrendResponse> {
    return this.request("DescribeTDEMFunnelTrend", req, cb)
  }

  /**
   * 客户端总览列表批量评分。按应用列表一次返回各计分项单项分与加权总分。AppIds 1-200；不归属当前用户的应用不出现在响应中。
   */
  async DescribeTDEMOverviewScores(
    req: DescribeTDEMOverviewScoresRequest,
    cb?: (error: string, rep: DescribeTDEMOverviewScoresResponse) => void
  ): Promise<DescribeTDEMOverviewScoresResponse> {
    return this.request("DescribeTDEMOverviewScores", req, cb)
  }

  /**
   * 获取DescribeDataFetchUrl信息
   */
  async DescribeDataFetchUrl(
    req: DescribeDataFetchUrlRequest,
    cb?: (error: string, rep: DescribeDataFetchUrlResponse) => void
  ): Promise<DescribeDataFetchUrlResponse> {
    return this.request("DescribeDataFetchUrl", req, cb)
  }

  /**
   * 删除业务系统。名下存在未删除应用时返回 ResourceInUse。
   */
  async DeleteTDEMBusinessSystem(
    req: DeleteTDEMBusinessSystemRequest,
    cb?: (error: string, rep: DeleteTDEMBusinessSystemResponse) => void
  ): Promise<DeleteTDEMBusinessSystemResponse> {
    return this.request("DeleteTDEMBusinessSystem", req, cb)
  }

  /**
   * 查询应用下未删除的拨测任务，包含启动范围。
   */
  async DescribeTDEMDialTasks(
    req: DescribeTDEMDialTasksRequest,
    cb?: (error: string, rep: DescribeTDEMDialTasksResponse) => void
  ): Promise<DescribeTDEMDialTasksResponse> {
    return this.request("DescribeTDEMDialTasks", req, cb)
  }

  /**
   * 获取项目下的日志列表（实例创建的项目下的日志列表）
   */
  async DescribeRumLogExport(
    req: DescribeRumLogExportRequest,
    cb?: (error: string, rep: DescribeRumLogExportResponse) => void
  ): Promise<DescribeRumLogExportResponse> {
    return this.request("DescribeRumLogExport", req, cb)
  }

  /**
   * 会话时间线 / 页面子事件 / 错误前轨迹。Mode：timeline / page / breadcrumb。Limit 默认 200，上限 200。
   */
  async DescribeTDEMRelatedEvents(
    req: DescribeTDEMRelatedEventsRequest,
    cb?: (error: string, rep: DescribeTDEMRelatedEventsResponse) => void
  ): Promise<DescribeTDEMRelatedEventsResponse> {
    return this.request("DescribeTDEMRelatedEvents", req, cb)
  }

  /**
   * 为应用创建字段值替换规则，单应用上限 50 条。替代已废弃的 CreateFieldTransformRule；AppId 为 string。
   */
  async CreateTDEMFieldTransformRule(
    req: CreateTDEMFieldTransformRuleRequest,
    cb?: (error: string, rep: CreateTDEMFieldTransformRuleResponse) => void
  ): Promise<CreateTDEMFieldTransformRuleResponse> {
    return this.request("CreateTDEMFieldTransformRule", req, cb)
  }

  /**
   * 获取项目下的日志导出列表
   */
  async DescribeRumLogExports(
    req: DescribeRumLogExportsRequest,
    cb?: (error: string, rep: DescribeRumLogExportsResponse) => void
  ): Promise<DescribeRumLogExportsResponse> {
    return this.request("DescribeRumLogExports", req, cb)
  }

  /**
   * 按时间窗汇总拨测批次。一次多 IP 探测计为 1 个批次。
   */
  async DescribeTDEMDialOverview(
    req: DescribeTDEMDialOverviewRequest,
    cb?: (error: string, rep: DescribeTDEMDialOverviewResponse) => void
  ): Promise<DescribeTDEMDialOverviewResponse> {
    return this.request("DescribeTDEMDialOverview", req, cb)
  }

  /**
   * 整页保存 Web 规则化采样文档：校验 → INSERT 快照 → UPSERT 当前行 → 刷新 Redis 下发缓存。不写 tdem_sample_rate。采样率 0–100、最多两位小数；规则 Conditions 不可为空；Types 含非闭集 key 返回 InvalidParameter。校验失败不写库。无 Restore/Import/Export/Diff。
   */
  async ModifyTDEMSampleConfig(
    req: ModifyTDEMSampleConfigRequest,
    cb?: (error: string, rep: ModifyTDEMSampleConfigResponse) => void
  ): Promise<ModifyTDEMSampleConfigResponse> {
    return this.request("ModifyTDEMSampleConfig", req, cb)
  }

  /**
   * 按业务系统/应用查询用量明细（含行趋势、端类型、删除/停用标记）。Keyword 匹配业务系统名、应用名或应用 ID。
   */
  async DescribeTDEMUsageDetail(
    req: DescribeTDEMUsageDetailRequest,
    cb?: (error: string, rep: DescribeTDEMUsageDetailResponse) => void
  ): Promise<DescribeTDEMUsageDetailResponse> {
    return this.request("DescribeTDEMUsageDetail", req, cb)
  }

  /**
   * 获取异常个例列表
   */
  async DescribeExceptionReportList(
    req: DescribeExceptionReportListRequest,
    cb?: (error: string, rep: DescribeExceptionReportListResponse) => void
  ): Promise<DescribeExceptionReportListResponse> {
    return this.request("DescribeExceptionReportList", req, cb)
  }

  /**
   * 同一筛选下的分类计数、访问用户、业务用户、窗口合计与分桶趋势。Category 可含 session。空窗返回 0 与空 Series。
   */
  async DescribeTDEMEventSearchSummary(
    req: DescribeTDEMEventSearchSummaryRequest,
    cb?: (error: string, rep: DescribeTDEMEventSearchSummaryResponse) => void
  ): Promise<DescribeTDEMEventSearchSummaryResponse> {
    return this.request("DescribeTDEMEventSearchSummary", req, cb)
  }

  /**
   * 查询当前用户名下业务系统列表（超管返回全部）。分页 Offset/Limit，默认 Limit=20 上限 100。
   */
  async DescribeTDEMBusinessSystems(
    req: DescribeTDEMBusinessSystemsRequest,
    cb?: (error: string, rep: DescribeTDEMBusinessSystemsResponse) => void
  ): Promise<DescribeTDEMBusinessSystemsResponse> {
    return this.request("DescribeTDEMBusinessSystems", req, cb)
  }

  /**
   * 获取指定 Issue 的摘要信息以及默认选中的最新事件详情
   */
  async DescribeIssueDetail(
    req: DescribeIssueDetailRequest,
    cb?: (error: string, rep: DescribeIssueDetailResponse) => void
  ): Promise<DescribeIssueDetailResponse> {
    return this.request("DescribeIssueDetail", req, cb)
  }

  /**
   * 获取DescribeDataCustomUrl信息
   */
  async DescribeDataCustomUrlV2(
    req: DescribeDataCustomUrlV2Request,
    cb?: (error: string, rep: DescribeDataCustomUrlV2Response) => void
  ): Promise<DescribeDataCustomUrlV2Response> {
    return this.request("DescribeDataCustomUrlV2", req, cb)
  }

  /**
   * 设置或更新应用采集采样率；ReplaySampleRate 可选。替代已废弃的 ModifySampleRate；AppId 为 string。
   */
  async ModifyTDEMSampleRate(
    req: ModifyTDEMSampleRateRequest,
    cb?: (error: string, rep: ModifyTDEMSampleRateResponse) => void
  ): Promise<ModifyTDEMSampleRateResponse> {
    return this.request("ModifyTDEMSampleRate", req, cb)
  }

  /**
   * 创建一条移动拨测任务。同一应用处于 active 的任务最多 50 条。四项启动范围都为空时不限制启动；填写多项时必须同时满足，同一项多个值命中任意一个即可。
   */
  async CreateTDEMDialTask(
    req: CreateTDEMDialTaskRequest,
    cb?: (error: string, rep: CreateTDEMDialTaskResponse) => void
  ): Promise<CreateTDEMDialTaskResponse> {
    return this.request("CreateTDEMDialTask", req, cb)
  }

  /**
   * 获取指定 Issue 下单个事件的完整详情，包括栈信息、上下文和符号化状态等字段
   */
  async DescribeIssueEventDetail(
    req: DescribeIssueEventDetailRequest,
    cb?: (error: string, rep: DescribeIssueEventDetailResponse) => void
  ): Promise<DescribeIssueEventDetailResponse> {
    return this.request("DescribeIssueEventDetail", req, cb)
  }

  /**
   * 获取DescribeDataStaticProject信息
   */
  async DescribeDataStaticProjectV2(
    req: DescribeDataStaticProjectV2Request,
    cb?: (error: string, rep: DescribeDataStaticProjectV2Response) => void
  ): Promise<DescribeDataStaticProjectV2Response> {
    return this.request("DescribeDataStaticProjectV2", req, cb)
  }

  /**
   * 按小时或天返回拨测趋势。Granularity 不传时按小时。
   */
  async DescribeTDEMDialTrend(
    req: DescribeTDEMDialTrendRequest,
    cb?: (error: string, rep: DescribeTDEMDialTrendResponse) => void
  ): Promise<DescribeTDEMDialTrendResponse> {
    return this.request("DescribeTDEMDialTrend", req, cb)
  }

  /**
   * 获取DescribeDataCustomUrl信息
   */
  async DescribeDataCustomUrl(
    req: DescribeDataCustomUrlRequest,
    cb?: (error: string, rep: DescribeDataCustomUrlResponse) => void
  ): Promise<DescribeDataCustomUrlResponse> {
    return this.request("DescribeDataCustomUrl", req, cb)
  }

  /**
   * 删除字段配置规则
   */
  async DeleteFieldTransformRule(
    req: DeleteFieldTransformRuleRequest,
    cb?: (error: string, rep: DeleteFieldTransformRuleResponse) => void
  ): Promise<DeleteFieldTransformRuleResponse> {
    return this.request("DeleteFieldTransformRule", req, cb)
  }

  /**
   * 根据筛选条件分页查询 Issue 列表，支持环境、Issue 类型、状态、关键字、扩展过滤器和排序条件
   */
  async DescribeIssues(
    req: DescribeIssuesRequest,
    cb?: (error: string, rep: DescribeIssuesResponse) => void
  ): Promise<DescribeIssuesResponse> {
    return this.request("DescribeIssues", req, cb)
  }

  /**
   * 获取FOOM内存分配问题列表数据
   */
  async DescribeFOOMMallocProblemList(
    req: DescribeFOOMMallocProblemListRequest,
    cb?: (error: string, rep: DescribeFOOMMallocProblemListResponse) => void
  ): Promise<DescribeFOOMMallocProblemListResponse> {
    return this.request("DescribeFOOMMallocProblemList", req, cb)
  }

  /**
   * 创建日志导出
   */
  async DescribeRumLogExportV2(
    req: DescribeRumLogExportV2Request,
    cb?: (error: string, rep: DescribeRumLogExportV2Response) => void
  ): Promise<DescribeRumLogExportV2Response> {
    return this.request("DescribeRumLogExportV2", req, cb)
  }

  /**
   * 根据条件获取指定 Issue 的错误事件列表，支持按时间范围、关键字和扩展过滤器查询，返回分页事件数据
   */
  async DescribeIssueEvents(
    req: DescribeIssueEventsRequest,
    cb?: (error: string, rep: DescribeIssueEventsResponse) => void
  ): Promise<DescribeIssueEventsResponse> {
    return this.request("DescribeIssueEvents", req, cb)
  }

  /**
   * 个人用户添加星标项目
   */
  async CreateStarProject(
    req: CreateStarProjectRequest,
    cb?: (error: string, rep: CreateStarProjectResponse) => void
  ): Promise<CreateStarProjectResponse> {
    return this.request("CreateStarProject", req, cb)
  }

  /**
   * 删除白名单
   */
  async DeleteWhitelist(
    req: DeleteWhitelistRequest,
    cb?: (error: string, rep: DeleteWhitelistResponse) => void
  ): Promise<DeleteWhitelistResponse> {
    return this.request("DeleteWhitelist", req, cb)
  }

  /**
   * 获取DescribeDataFetchUrlInfo信息
   */
  async DescribeDataFetchUrlInfo(
    req: DescribeDataFetchUrlInfoRequest,
    cb?: (error: string, rep: DescribeDataFetchUrlInfoResponse) => void
  ): Promise<DescribeDataFetchUrlInfoResponse> {
    return this.request("DescribeDataFetchUrlInfo", req, cb)
  }

  /**
   * 分页查询指定类型的符号制品。
   */
  async DescribeSymbolArtifacts(
    req: DescribeSymbolArtifactsRequest,
    cb?: (error: string, rep: DescribeSymbolArtifactsResponse) => void
  ): Promise<DescribeSymbolArtifactsResponse> {
    return this.request("DescribeSymbolArtifacts", req, cb)
  }

  /**
   * 创建业务系统。InstanceId 由后端生成，格式 rum-<12 位随机字母数字>。重名返回 InvalidParameterValue。
   */
  async CreateTDEMBusinessSystem(
    req: CreateTDEMBusinessSystemRequest,
    cb?: (error: string, rep: CreateTDEMBusinessSystemResponse) => void
  ): Promise<CreateTDEMBusinessSystemResponse> {
    return this.request("CreateTDEMBusinessSystem", req, cb)
  }

  /**
   * 将拨测任务标记为已删除。已删除的任务再次删除视为成功。不物理删除任务行，也不删除历史拨测结果。
   */
  async DeleteTDEMDialTask(
    req: DeleteTDEMDialTaskRequest,
    cb?: (error: string, rep: DeleteTDEMDialTaskResponse) => void
  ): Promise<DeleteTDEMDialTaskResponse> {
    return this.request("DeleteTDEMDialTask", req, cb)
  }

  /**
   * 返回一个拨测批次的探测结果和路由追踪。Probes 的 Region、Operator 是目标 IP 归属。逐跳归属同时写在 Probes.MTR.Hops 和顶层 MTR.Hops。
   */
  async DescribeTDEMDialExecutionDetail(
    req: DescribeTDEMDialExecutionDetailRequest,
    cb?: (error: string, rep: DescribeTDEMDialExecutionDetailResponse) => void
  ): Promise<DescribeTDEMDialExecutionDetailResponse> {
    return this.request("DescribeTDEMDialExecutionDetail", req, cb)
  }

  /**
   * 获取DescribeDataEventUrl信息
   */
  async DescribeDataEventUrl(
    req: DescribeDataEventUrlRequest,
    cb?: (error: string, rep: DescribeDataEventUrlResponse) => void
  ): Promise<DescribeDataEventUrlResponse> {
    return this.request("DescribeDataEventUrl", req, cb)
  }

  /**
   * 查询应用下字段值替换规则列表。替代已废弃的 DescribeFieldTransformRules；AppId 为 string。
   */
  async DescribeTDEMFieldTransformRules(
    req: DescribeTDEMFieldTransformRulesRequest,
    cb?: (error: string, rep: DescribeTDEMFieldTransformRulesResponse) => void
  ): Promise<DescribeTDEMFieldTransformRulesResponse> {
    return this.request("DescribeTDEMFieldTransformRules", req, cb)
  }

  /**
   * 获取首页分数列表
   */
  async DescribeScores(
    req: DescribeScoresRequest,
    cb?: (error: string, rep: DescribeScoresResponse) => void
  ): Promise<DescribeScoresResponse> {
    return this.request("DescribeScores", req, cb)
  }

  /**
   * 查询应用列表，默认仅当前用户名下有权限的应用；可按业务系统 InstanceId 筛选。
   */
  async DescribeTDEMApplications(
    req: DescribeTDEMApplicationsRequest,
    cb?: (error: string, rep: DescribeTDEMApplicationsResponse) => void
  ): Promise<DescribeTDEMApplicationsResponse> {
    return this.request("DescribeTDEMApplications", req, cb)
  }

  /**
   * 根据label 聚合分析日志
   */
  async DescribeRumGroupLogV2(
    req: DescribeRumGroupLogV2Request,
    cb?: (error: string, rep: DescribeRumGroupLogV2Response) => void
  ): Promise<DescribeRumGroupLogV2Response> {
    return this.request("DescribeRumGroupLogV2", req, cb)
  }

  /**
   * 获取挣扎事件分布数据
   */
  async DescribeStruggleDistribution(
    req: DescribeStruggleDistributionRequest,
    cb?: (error: string, rep: DescribeStruggleDistributionResponse) => void
  ): Promise<DescribeStruggleDistributionResponse> {
    return this.request("DescribeStruggleDistribution", req, cb)
  }

  /**
   * 修改字段配置规则
   */
  async ModifyFieldTransformRule(
    req: ModifyFieldTransformRuleRequest,
    cb?: (error: string, rep: ModifyFieldTransformRuleResponse) => void
  ): Promise<ModifyFieldTransformRuleResponse> {
    return this.request("ModifyFieldTransformRule", req, cb)
  }

  /**
   * 按用户维度聚合某问题的受影响用户清单，服务端分页。AppId 与 IssueId 必填；AppVersion / StartTime / EndTime / Keyword 用于收窄范围，同时作用于清单与 Total，因此 Total 为当前条件下去重后的用户数， 条件全空时等于问题详情的影响用户数。OrderKey / OrderBy 只改变行序、不改变结果集合；排序一律由服务端执行， 并保留 uid 作为次级键以保证翻页不重不漏。接口只读。
   */
  async DescribeIssueAffectedUsers(
    req: DescribeIssueAffectedUsersRequest,
    cb?: (error: string, rep: DescribeIssueAffectedUsersResponse) => void
  ): Promise<DescribeIssueAffectedUsersResponse> {
    return this.request("DescribeIssueAffectedUsers", req, cb)
  }

  /**
   * 修改 RUM 业务系统
   */
  async ModifyInstance(
    req: ModifyInstanceRequest,
    cb?: (error: string, rep: ModifyInstanceResponse) => void
  ): Promise<ModifyInstanceResponse> {
    return this.request("ModifyInstance", req, cb)
  }

  /**
   * 获取符号制品上传临时凭证。
   */
  async DescribeSymbolArtifactUploadCredential(
    req: DescribeSymbolArtifactUploadCredentialRequest,
    cb?: (error: string, rep: DescribeSymbolArtifactUploadCredentialResponse) => void
  ): Promise<DescribeSymbolArtifactUploadCredentialResponse> {
    return this.request("DescribeSymbolArtifactUploadCredential", req, cb)
  }

  /**
   * 数据探索事件明细分页。会话分类不得调用本接口（Category 禁止 session）。时间单位 Unix 毫秒。
   */
  async DescribeTDEMEventSearch(
    req: DescribeTDEMEventSearchRequest,
    cb?: (error: string, rep: DescribeTDEMEventSearchResponse) => void
  ): Promise<DescribeTDEMEventSearchResponse> {
    return this.request("DescribeTDEMEventSearch", req, cb)
  }

  /**
   * 查询原始日志总量
   */
  async DescribeRumLogTotalV2(
    req: DescribeRumLogTotalV2Request,
    cb?: (error: string, rep: DescribeRumLogTotalV2Response) => void
  ): Promise<DescribeRumLogTotalV2Response> {
    return this.request("DescribeRumLogTotalV2", req, cb)
  }

  /**
   * 查询实例信息
   */
  async DescribeTawInstances(
    req: DescribeTawInstancesRequest,
    cb?: (error: string, rep: DescribeTawInstancesResponse) => void
  ): Promise<DescribeTawInstancesResponse> {
    return this.request("DescribeTawInstances", req, cb)
  }

  /**
   * 获取问题列表数据
   */
  async DescribeIssuesList(
    req: DescribeIssuesListRequest,
    cb?: (error: string, rep: DescribeIssuesListResponse) => void
  ): Promise<DescribeIssuesListResponse> {
    return this.request("DescribeIssuesList", req, cb)
  }

  /**
   * 获取PerformancePage信息
   */
  async DescribeDataPerformancePageV2(
    req: DescribeDataPerformancePageV2Request,
    cb?: (error: string, rep: DescribeDataPerformancePageV2Response) => void
  ): Promise<DescribeDataPerformancePageV2Response> {
    return this.request("DescribeDataPerformancePageV2", req, cb)
  }

  /**
   * 查询日志时间分布
   */
  async DescribeRumStatsLogListV2(
    req: DescribeRumStatsLogListV2Request,
    cb?: (error: string, rep: DescribeRumStatsLogListV2Response) => void
  ): Promise<DescribeRumStatsLogListV2Response> {
    return this.request("DescribeRumStatsLogListV2", req, cb)
  }

  /**
   * 配置tdem采样率
   */
  async ModifySampleRate(
    req: ModifySampleRateRequest,
    cb?: (error: string, rep: ModifySampleRateResponse) => void
  ): Promise<ModifySampleRateResponse> {
    return this.request("ModifySampleRate", req, cb)
  }

  /**
   * 获取DescribeDataStaticUrl信息
   */
  async DescribeDataStaticUrl(
    req: DescribeDataStaticUrlRequest,
    cb?: (error: string, rep: DescribeDataStaticUrlResponse) => void
  ): Promise<DescribeDataStaticUrlResponse> {
    return this.request("DescribeDataStaticUrl", req, cb)
  }

  /**
   * 获取项目下的日志聚合信息
   */
  async DescribeRumGroupLog(
    req: DescribeRumGroupLogRequest,
    cb?: (error: string, rep: DescribeRumGroupLogResponse) => void
  ): Promise<DescribeRumGroupLogResponse> {
    return this.request("DescribeRumGroupLog", req, cb)
  }

  /**
   * 更新回放包元数据，仅支持改Release，不重编译。换源码请再调UploadMiniProgramSource。
   */
  async ModifyMiniProgramReplayPack(
    req: ModifyMiniProgramReplayPackRequest,
    cb?: (error: string, rep: ModifyMiniProgramReplayPackResponse) => void
  ): Promise<ModifyMiniProgramReplayPackResponse> {
    return this.request("ModifyMiniProgramReplayPack", req, cb)
  }

  /**
   * 获取DescribeDataFetchUrl信息
   */
  async DescribeDataFetchUrlV2(
    req: DescribeDataFetchUrlV2Request,
    cb?: (error: string, rep: DescribeDataFetchUrlV2Response) => void
  ): Promise<DescribeDataFetchUrlV2Response> {
    return this.request("DescribeDataFetchUrlV2", req, cb)
  }

  /**
   * 获取DescribeDataPvUrlStatistics信息
   */
  async DescribeDataPvUrlStatisticsV2(
    req: DescribeDataPvUrlStatisticsV2Request,
    cb?: (error: string, rep: DescribeDataPvUrlStatisticsV2Response) => void
  ): Promise<DescribeDataPvUrlStatisticsV2Response> {
    return this.request("DescribeDataPvUrlStatisticsV2", req, cb)
  }

  /**
   * 获取回放元数据
   */
  async DescribeReplayMeta(
    req: DescribeReplayMetaRequest,
    cb?: (error: string, rep: DescribeReplayMetaResponse) => void
  ): Promise<DescribeReplayMetaResponse> {
    return this.request("DescribeReplayMeta", req, cb)
  }

  /**
   * 上传微信小程序源码zip并同步编译回放包。控制台传FileBase64；zip需含app.json，跳过node_modules。同AppId+BundleHash且已ready则幂等。
   */
  async UploadMiniProgramSource(
    req: UploadMiniProgramSourceRequest,
    cb?: (error: string, rep: UploadMiniProgramSourceResponse) => void
  ): Promise<UploadMiniProgramSourceResponse> {
    return this.request("UploadMiniProgramSource", req, cb)
  }

  /**
   * 获取COS存储的临时密钥，具体到ProjectId
   */
  async DescribeFileCertificate(
    req: DescribeFileCertificateRequest,
    cb?: (error: string, rep: DescribeFileCertificateResponse) => void
  ): Promise<DescribeFileCertificateResponse> {
    return this.request("DescribeFileCertificate", req, cb)
  }

  /**
   * 新增修改限流
   */
  async ModifyProjectLimit(
    req: ModifyProjectLimitRequest,
    cb?: (error: string, rep: ModifyProjectLimitResponse) => void
  ): Promise<ModifyProjectLimitResponse> {
    return this.request("ModifyProjectLimit", req, cb)
  }

  /**
   * 返回吞吐率、首次消息时延或流畅度的分档分布。档位左闭右开，最后一档有限区间右端闭合，超出右端的样本进入溢出档。错误率与卡死率返回 InvalidParameter。
   */
  async DescribeTDEMSSEDistribution(
    req: DescribeTDEMSSEDistributionRequest,
    cb?: (error: string, rep: DescribeTDEMSSEDistributionResponse) => void
  ): Promise<DescribeTDEMSSEDistributionResponse> {
    return this.request("DescribeTDEMSSEDistribution", req, cb)
  }

  /**
   * 获取DescribeDataPvUrlStatistics信息
   */
  async DescribeDataPvUrlStatistics(
    req: DescribeDataPvUrlStatisticsRequest,
    cb?: (error: string, rep: DescribeDataPvUrlStatisticsResponse) => void
  ): Promise<DescribeDataPvUrlStatisticsResponse> {
    return this.request("DescribeDataPvUrlStatistics", req, cb)
  }

  /**
   * 删除指定的符号制品。
   */
  async DeleteSymbolArtifact(
    req: DeleteSymbolArtifactRequest,
    cb?: (error: string, rep: DeleteSymbolArtifactResponse) => void
  ): Promise<DeleteSymbolArtifactResponse> {
    return this.request("DeleteSymbolArtifact", req, cb)
  }

  /**
   * 恢复 RUM 业务系统，恢复后，用户可以正常使用和上报数据
   */
  async ResumeInstance(
    req: ResumeInstanceRequest,
    cb?: (error: string, rep: ResumeInstanceResponse) => void
  ): Promise<ResumeInstanceResponse> {
    return this.request("ResumeInstance", req, cb)
  }

  /**
   * 获取上传文件存储的临时密钥
   */
  async DescribeReleaseFileSign(
    req: DescribeReleaseFileSignRequest,
    cb?: (error: string, rep: DescribeReleaseFileSignResponse) => void
  ): Promise<DescribeReleaseFileSignResponse> {
    return this.request("DescribeReleaseFileSign", req, cb)
  }

  /**
   * 按规则 Id 删除字段值替换规则。替代已废弃的 DeleteFieldTransformRule；AppId 为 string。
   */
  async DeleteTDEMFieldTransformRule(
    req: DeleteTDEMFieldTransformRuleRequest,
    cb?: (error: string, rep: DeleteTDEMFieldTransformRuleResponse) => void
  ): Promise<DeleteTDEMFieldTransformRuleResponse> {
    return this.request("DeleteTDEMFieldTransformRule", req, cb)
  }

  /**
   * 查询当前使用者名下（超管为全部）上报总量与趋势。时间 StartTime/EndTime 为 YYYY-MM-DD HH:00:00 小时对齐。不要求请求体带 AppId。
   */
  async DescribeTDEMUsageSummary(
    req: DescribeTDEMUsageSummaryRequest,
    cb?: (error: string, rep: DescribeTDEMUsageSummaryResponse) => void
  ): Promise<DescribeTDEMUsageSummaryResponse> {
    return this.request("DescribeTDEMUsageSummary", req, cb)
  }

  /**
   * 获取指定 Issue 在给定时间范围内的趋势分桶统计数据
   */
  async DescribeIssueTrend(
    req: DescribeIssueTrendRequest,
    cb?: (error: string, rep: DescribeIssueTrendResponse) => void
  ): Promise<DescribeIssueTrendResponse> {
    return this.request("DescribeIssueTrend", req, cb)
  }

  /**
   * 获取DescribeDataEventUrl信息
   */
  async DescribeDataEventUrlV2(
    req: DescribeDataEventUrlV2Request,
    cb?: (error: string, rep: DescribeDataEventUrlV2Response) => void
  ): Promise<DescribeDataEventUrlV2Response> {
    return this.request("DescribeDataEventUrlV2", req, cb)
  }

  /**
   * 获取DescribeDataStaticResource信息
   */
  async DescribeDataStaticResource(
    req: DescribeDataStaticResourceRequest,
    cb?: (error: string, rep: DescribeDataStaticResourceResponse) => void
  ): Promise<DescribeDataStaticResourceResponse> {
    return this.request("DescribeDataStaticResource", req, cb)
  }

  /**
   * 错误指纹或 API/资源 URL（含按访问页、状态、标签）排行。读 tdem_events，不走主分析立方 GroupBy。Kind：error/api/resource/api_page/resource_page/api_status/api_status_top/resource_status/tag。 Kind=exception_dimension返回当前普通维度或标签值的同批完整分类计数；展开不另行取数。
   */
  async DescribeTDEMEventRank(
    req: DescribeTDEMEventRankRequest,
    cb?: (error: string, rep: DescribeTDEMEventRankResponse) => void
  ): Promise<DescribeTDEMEventRankResponse> {
    return this.request("DescribeTDEMEventRank", req, cb)
  }

  /**
   * 按规则 Id 修改字段值替换规则。替代已废弃的 ModifyFieldTransformRule；AppId 为 string。
   */
  async ModifyTDEMFieldTransformRule(
    req: ModifyTDEMFieldTransformRuleRequest,
    cb?: (error: string, rep: ModifyTDEMFieldTransformRuleResponse) => void
  ): Promise<ModifyTDEMFieldTransformRuleResponse> {
    return this.request("ModifyTDEMFieldTransformRule", req, cb)
  }

  /**
   * 获取日志导出列表
   */
  async DescribeRumLogExportsV2(
    req: DescribeRumLogExportsV2Request,
    cb?: (error: string, rep: DescribeRumLogExportsV2Response) => void
  ): Promise<DescribeRumLogExportsV2Response> {
    return this.request("DescribeRumLogExportsV2", req, cb)
  }

  /**
   * 获取DescribeDataStaticUrl信息
   */
  async DescribeDataStaticUrlV2(
    req: DescribeDataStaticUrlV2Request,
    cb?: (error: string, rep: DescribeDataStaticUrlV2Response) => void
  ): Promise<DescribeDataStaticUrlV2Response> {
    return this.request("DescribeDataStaticUrlV2", req, cb)
  }

  /**
   * 查询会话列表
   */
  async DescribeSessionList(
    req: DescribeSessionListRequest,
    cb?: (error: string, rep: DescribeSessionListResponse) => void
  ): Promise<DescribeSessionListResponse> {
    return this.request("DescribeSessionList", req, cb)
  }

  /**
   * 恢复应用使用与上报数据
   */
  async ResumeProject(
    req: ResumeProjectRequest,
    cb?: (error: string, rep: ResumeProjectResponse) => void
  ): Promise<ResumeProjectResponse> {
    return this.request("ResumeProject", req, cb)
  }

  /**
   * 修改业务系统名称或描述。越权 UnauthorizedOperation；不存在或已删除 ResourceNotFound。
   */
  async ModifyTDEMBusinessSystem(
    req: ModifyTDEMBusinessSystemRequest,
    cb?: (error: string, rep: ModifyTDEMBusinessSystemResponse) => void
  ): Promise<ModifyTDEMBusinessSystemResponse> {
    return this.request("ModifyTDEMBusinessSystem", req, cb)
  }

  /**
   * 根据步骤配置直接生成漏斗预览报告（不保存漏斗，不需要FunnelId）
   */
  async PreviewTDEMFunnelReport(
    req: PreviewTDEMFunnelReportRequest,
    cb?: (error: string, rep: PreviewTDEMFunnelReportResponse) => void
  ): Promise<PreviewTDEMFunnelReportResponse> {
    return this.request("PreviewTDEMFunnelReport", req, cb)
  }

  /**
   * 查询top问题列表
   */
  async DescribeTopIssues(
    req: DescribeTopIssuesRequest,
    cb?: (error: string, rep: DescribeTopIssuesResponse) => void
  ): Promise<DescribeTopIssuesResponse> {
    return this.request("DescribeTopIssues", req, cb)
  }

  /**
   * 按批次返回拨测执行记录，一批次一行。TargetIps 是目标地址，TargetIpGeo 是这些地址的地区和运营商。行上的 Region 和 Operator 仍是客户端地区和运营商。
   */
  async DescribeTDEMDialExecutionList(
    req: DescribeTDEMDialExecutionListRequest,
    cb?: (error: string, rep: DescribeTDEMDialExecutionListResponse) => void
  ): Promise<DescribeTDEMDialExecutionListResponse> {
    return this.request("DescribeTDEMDialExecutionList", req, cb)
  }

  /**
   * 停止实例
   */
  async StopInstance(
    req: StopInstanceRequest,
    cb?: (error: string, rep: StopInstanceResponse) => void
  ): Promise<StopInstanceResponse> {
    return this.request("StopInstance", req, cb)
  }

  /**
   * 更新 Issue 状态，支持 resolve、ignore、reopen 等状态流转动作
   */
  async ModifyIssueStatus(
    req: ModifyIssueStatusRequest,
    cb?: (error: string, rep: ModifyIssueStatusResponse) => void
  ): Promise<ModifyIssueStatusResponse> {
    return this.request("ModifyIssueStatus", req, cb)
  }

  /**
   * 获取白名单列表
   */
  async DescribeWhitelists(
    req: DescribeWhitelistsRequest,
    cb?: (error: string, rep: DescribeWhitelistsResponse) => void
  ): Promise<DescribeWhitelistsResponse> {
    return this.request("DescribeWhitelists", req, cb)
  }

  /**
   * 获取应用退出个例上报列表
   */
  async DescribeApplicationExitReportList(
    req: DescribeApplicationExitReportListRequest,
    cb?: (error: string, rep: DescribeApplicationExitReportListResponse) => void
  ): Promise<DescribeApplicationExitReportListResponse> {
    return this.request("DescribeApplicationExitReportList", req, cb)
  }

  /**
   * 按时间桶返回大模型对话趋势。overall 填充 Points，其他维度按整个窗口的指标值从高到低取 TopN 并填充 Series。
   */
  async DescribeTDEMSSETrend(
    req: DescribeTDEMSSETrendRequest,
    cb?: (error: string, rep: DescribeTDEMSSETrendResponse) => void
  ): Promise<DescribeTDEMSSETrendResponse> {
    return this.request("DescribeTDEMSSETrend", req, cb)
  }

  /**
     * 获取DescribeDataWebVitalsPage信息，用户核心活动信息
页面加载性能之Web Vitals。性能关键点
     */
  async DescribeDataWebVitalsPageV2(
    req: DescribeDataWebVitalsPageV2Request,
    cb?: (error: string, rep: DescribeDataWebVitalsPageV2Response) => void
  ): Promise<DescribeDataWebVitalsPageV2Response> {
    return this.request("DescribeDataWebVitalsPageV2", req, cb)
  }

  /**
   * 返回吞吐率、首次消息时延或流畅度在整个时间窗及各时间桶上的平均值和 P50、P75、P95、P99。错误率与卡死率返回 InvalidParameter。
   */
  async DescribeTDEMSSEPercentile(
    req: DescribeTDEMSSEPercentileRequest,
    cb?: (error: string, rep: DescribeTDEMSSEPercentileResponse) => void
  ): Promise<DescribeTDEMSSEPercentileResponse> {
    return this.request("DescribeTDEMSSEPercentile", req, cb)
  }

  /**
   * 删除给定的 rum 的项目
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 创建字段配置规则
   */
  async CreateFieldTransformRule(
    req: CreateFieldTransformRuleRequest,
    cb?: (error: string, rep: CreateFieldTransformRuleResponse) => void
  ): Promise<CreateFieldTransformRuleResponse> {
    return this.request("CreateFieldTransformRule", req, cb)
  }

  /**
   * 获取项目下的UV列表
   */
  async DescribeUvList(
    req: DescribeUvListRequest,
    cb?: (error: string, rep: DescribeUvListResponse) => void
  ): Promise<DescribeUvListResponse> {
    return this.request("DescribeUvList", req, cb)
  }

  /**
   * 读取当前生效的 Web 规则化采样文档。ProjectId 必填且 > 0。无行则返回内置缺省（Event.Enabled=true、Types 空、Replay 关闭且体验率 0），不自动插库。SnapshotId 无快照为 0。query handler 做 PascalCase ↔ 存储 snake_case 映射。非 Web 应用不得走本接口，继续 DescribeSampleRate。
   */
  async DescribeTDEMSampleConfig(
    req: DescribeTDEMSampleConfigRequest,
    cb?: (error: string, rep: DescribeTDEMSampleConfigResponse) => void
  ): Promise<DescribeTDEMSampleConfigResponse> {
    return this.request("DescribeTDEMSampleConfig", req, cb)
  }

  /**
   * 将对应 sourcemap 文件删除
   */
  async DeleteReleaseFile(
    req: DeleteReleaseFileRequest,
    cb?: (error: string, rep: DeleteReleaseFileResponse) => void
  ): Promise<DeleteReleaseFileResponse> {
    return this.request("DeleteReleaseFile", req, cb)
  }

  /**
   * 获取DescribeDataStaticProject信息
   */
  async DescribeDataStaticProject(
    req: DescribeDataStaticProjectRequest,
    cb?: (error: string, rep: DescribeDataStaticProjectResponse) => void
  ): Promise<DescribeDataStaticProjectResponse> {
    return this.request("DescribeDataStaticProject", req, cb)
  }

  /**
   * 查询片区信息
   */
  async DescribeTawAreas(
    req: DescribeTawAreasRequest,
    cb?: (error: string, rep: DescribeTawAreasResponse) => void
  ): Promise<DescribeTawAreasResponse> {
    return this.request("DescribeTawAreas", req, cb)
  }

  /**
   * 删除漏斗
   */
  async DeleteTDEMFunnel(
    req: DeleteTDEMFunnelRequest,
    cb?: (error: string, rep: DeleteTDEMFunnelResponse) => void
  ): Promise<DeleteTDEMFunnelResponse> {
    return this.request("DeleteTDEMFunnel", req, cb)
  }

  /**
   * 创建对应项目的文件记录
   */
  async CreateReleaseFile(
    req: CreateReleaseFileRequest,
    cb?: (error: string, rep: CreateReleaseFileResponse) => void
  ): Promise<CreateReleaseFileResponse> {
    return this.request("CreateReleaseFile", req, cb)
  }

  /**
   * 按单维度 GroupBy 查询分析指标分布。读 tdem_metric_agg。
   */
  async DescribeTDEMMetricDistribution(
    req: DescribeTDEMMetricDistributionRequest,
    cb?: (error: string, rep: DescribeTDEMMetricDistributionResponse) => void
  ): Promise<DescribeTDEMMetricDistributionResponse> {
    return this.request("DescribeTDEMMetricDistribution", req, cb)
  }

  /**
   * 查询令牌
   */
  async DescribeToken(
    req: DescribeTokenRequest,
    cb?: (error: string, rep: DescribeTokenResponse) => void
  ): Promise<DescribeTokenResponse> {
    return this.request("DescribeToken", req, cb)
  }

  /**
   * 获取PerformancePage信息
   */
  async DescribeDataPerformancePage(
    req: DescribeDataPerformancePageRequest,
    cb?: (error: string, rep: DescribeDataPerformancePageResponse) => void
  ): Promise<DescribeDataPerformancePageResponse> {
    return this.request("DescribeDataPerformancePage", req, cb)
  }

  /**
   * 获取回放日志
   */
  async DescribeReplayDetails(
    req: DescribeReplayDetailsRequest,
    cb?: (error: string, rep: DescribeReplayDetailsResponse) => void
  ): Promise<DescribeReplayDetailsResponse> {
    return this.request("DescribeReplayDetails", req, cb)
  }

  /**
   * 登记已上传的符号制品。请先获取上传凭证并将文件上传到 COS。
   */
  async UploadSymbolArtifact(
    req: UploadSymbolArtifactRequest,
    cb?: (error: string, rep: UploadSymbolArtifactResponse) => void
  ): Promise<UploadSymbolArtifactResponse> {
    return this.request("UploadSymbolArtifact", req, cb)
  }

  /**
   * 删除实例，谨慎操作，不可恢复
   */
  async DeleteInstance(
    req: DeleteInstanceRequest,
    cb?: (error: string, rep: DeleteInstanceResponse) => void
  ): Promise<DeleteInstanceResponse> {
    return this.request("DeleteInstance", req, cb)
  }

  /**
   * 修改应用，仅传需修改字段。AppId 必填。
   */
  async ModifyTDEMApplication(
    req: ModifyTDEMApplicationRequest,
    cb?: (error: string, rep: ModifyTDEMApplicationResponse) => void
  ): Promise<ModifyTDEMApplicationResponse> {
    return this.request("ModifyTDEMApplication", req, cb)
  }

  /**
   * 删除用户名下的星标项目
   */
  async DeleteStarProject(
    req: DeleteStarProjectRequest,
    cb?: (error: string, rep: DeleteStarProjectResponse) => void
  ): Promise<DeleteStarProjectResponse> {
    return this.request("DeleteStarProject", req, cb)
  }

  /**
   * 获取用户旅程数据
   */
  async DescribeUserJourneySanKey(
    req: DescribeUserJourneySanKeyRequest,
    cb?: (error: string, rep: DescribeUserJourneySanKeyResponse) => void
  ): Promise<DescribeUserJourneySanKeyResponse> {
    return this.request("DescribeUserJourneySanKey", req, cb)
  }

  /**
   * 停止项目使用与上报数据
   */
  async StopProject(
    req: StopProjectRequest,
    cb?: (error: string, rep: StopProjectResponse) => void
  ): Promise<StopProjectResponse> {
    return this.request("StopProject", req, cb)
  }

  /**
   * 获取漏斗列表
   */
  async DescribeTDEMFunnelList(
    req: DescribeTDEMFunnelListRequest,
    cb?: (error: string, rep: DescribeTDEMFunnelListResponse) => void
  ): Promise<DescribeTDEMFunnelListResponse> {
    return this.request("DescribeTDEMFunnelList", req, cb)
  }

  /**
   * 查询 app 监控个例聚合列表
   */
  async DescribeAppSingleCaseList(
    req: DescribeAppSingleCaseListRequest,
    cb?: (error: string, rep: DescribeAppSingleCaseListResponse) => void
  ): Promise<DescribeAppSingleCaseListResponse> {
    return this.request("DescribeAppSingleCaseList", req, cb)
  }

  /**
   * 获取卡顿ANR问题用户列表
   */
  async DescribeLagANRProblemFeatureAccounts(
    req: DescribeLagANRProblemFeatureAccountsRequest,
    cb?: (error: string, rep: DescribeLagANRProblemFeatureAccountsResponse) => void
  ): Promise<DescribeLagANRProblemFeatureAccountsResponse> {
    return this.request("DescribeLagANRProblemFeatureAccounts", req, cb)
  }

  /**
   * 获取漏斗步骤会话
   */
  async DescribeTDEMFunnelStepSessionList(
    req: DescribeTDEMFunnelStepSessionListRequest,
    cb?: (error: string, rep: DescribeTDEMFunnelStepSessionListResponse) => void
  ): Promise<DescribeTDEMFunnelStepSessionListResponse> {
    return this.request("DescribeTDEMFunnelStepSessionList", req, cb)
  }

  /**
   * 获取DescribeDataSetUrlStatistics信息
   */
  async DescribeDataSetUrlStatisticsV2(
    req: DescribeDataSetUrlStatisticsV2Request,
    cb?: (error: string, rep: DescribeDataSetUrlStatisticsV2Response) => void
  ): Promise<DescribeDataSetUrlStatisticsV2Response> {
    return this.request("DescribeDataSetUrlStatisticsV2", req, cb)
  }

  /**
   * 修改 RUM 应用信息
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
  }

  /**
   * 按AppId列出回放包元数据，不含Pack正文。可按Status过滤。Limit默认20、最大100。
   */
  async DescribeMiniProgramReplayPacks(
    req: DescribeMiniProgramReplayPacksRequest,
    cb?: (error: string, rep: DescribeMiniProgramReplayPacksResponse) => void
  ): Promise<DescribeMiniProgramReplayPacksResponse> {
    return this.request("DescribeMiniProgramReplayPacks", req, cb)
  }

  /**
   * 获取问题趋势数据
   */
  async DescribeIssuesStatisticsTrend(
    req: DescribeIssuesStatisticsTrendRequest,
    cb?: (error: string, rep: DescribeIssuesStatisticsTrendResponse) => void
  ): Promise<DescribeIssuesStatisticsTrendResponse> {
    return this.request("DescribeIssuesStatisticsTrend", req, cb)
  }

  /**
   * 获取字段配置规则
   */
  async DescribeFieldTransformRules(
    req: DescribeFieldTransformRulesRequest,
    cb?: (error: string, rep: DescribeFieldTransformRulesResponse) => void
  ): Promise<DescribeFieldTransformRulesResponse> {
    return this.request("DescribeFieldTransformRules", req, cb)
  }

  /**
   * 获取DescribeDataSetUrlStatistics信息
   */
  async DescribeDataSetUrlStatistics(
    req: DescribeDataSetUrlStatisticsRequest,
    cb?: (error: string, rep: DescribeDataSetUrlStatisticsResponse) => void
  ): Promise<DescribeDataSetUrlStatisticsResponse> {
    return this.request("DescribeDataSetUrlStatistics", req, cb)
  }

  /**
   * 从对象存储读取录屏帧数据
   */
  async DescribeReplayData(
    req: DescribeReplayDataRequest,
    cb?: (error: string, rep: DescribeReplayDataResponse) => void
  ): Promise<DescribeReplayDataResponse> {
    return this.request("DescribeReplayData", req, cb)
  }

  /**
   * 获取漏斗分析报告维度数据
   */
  async DescribeTDEMFunnelDimensions(
    req: DescribeTDEMFunnelDimensionsRequest,
    cb?: (error: string, rep: DescribeTDEMFunnelDimensionsResponse) => void
  ): Promise<DescribeTDEMFunnelDimensionsResponse> {
    return this.request("DescribeTDEMFunnelDimensions", req, cb)
  }

  /**
   * 停止应用采集，Status 变为 6。
   */
  async StopTDEMApplication(
    req: StopTDEMApplicationRequest,
    cb?: (error: string, rep: StopTDEMApplicationResponse) => void
  ): Promise<StopTDEMApplicationResponse> {
    return this.request("StopTDEMApplication", req, cb)
  }

  /**
   * 用于查询 app 监控多维分析数据
   */
  async DescribeAppDimensionMetrics(
    req: DescribeAppDimensionMetricsRequest,
    cb?: (error: string, rep: DescribeAppDimensionMetricsResponse) => void
  ): Promise<DescribeAppDimensionMetricsResponse> {
    return this.request("DescribeAppDimensionMetrics", req, cb)
  }

  /**
   * 获取FOOM问题详情数据
   */
  async DescribeFOOMProblemDetail(
    req: DescribeFOOMProblemDetailRequest,
    cb?: (error: string, rep: DescribeFOOMProblemDetailResponse) => void
  ): Promise<DescribeFOOMProblemDetailResponse> {
    return this.request("DescribeFOOMProblemDetail", req, cb)
  }

  /**
   * 按一个维度返回大模型对话次数和当前指标值，按指标值降序，最多 200 行。region 由 country 与 province 拼接。
   */
  async DescribeTDEMSSEDimensions(
    req: DescribeTDEMSSEDimensionsRequest,
    cb?: (error: string, rep: DescribeTDEMSSEDimensionsResponse) => void
  ): Promise<DescribeTDEMSSEDimensionsResponse> {
    return this.request("DescribeTDEMSSEDimensions", req, cb)
  }

  /**
   * 创建白名单
   */
  async CreateWhitelist(
    req: CreateWhitelistRequest,
    cb?: (error: string, rep: CreateWhitelistResponse) => void
  ): Promise<CreateWhitelistResponse> {
    return this.request("CreateWhitelist", req, cb)
  }

  /**
   * 获取项目列表（实例创建的团队下的项目列表）
   */
  async DescribeProjects(
    req: DescribeProjectsRequest,
    cb?: (error: string, rep: DescribeProjectsResponse) => void
  ): Promise<DescribeProjectsResponse> {
    return this.request("DescribeProjects", req, cb)
  }

  /**
   * 查询指定应用与时间窗内的分析指标区间合计。单查返回 Metrics；传 Queries 时返回 Results。读 tdem_metric_agg。
   */
  async DescribeTDEMMetricSummary(
    req: DescribeTDEMMetricSummaryRequest,
    cb?: (error: string, rep: DescribeTDEMMetricSummaryResponse) => void
  ): Promise<DescribeTDEMMetricSummaryResponse> {
    return this.request("DescribeTDEMMetricSummary", req, cb)
  }

  /**
   * 获取FOOM内存分配问题详情数据
   */
  async DescribeFOOMMallocProblemDetail(
    req: DescribeFOOMMallocProblemDetailRequest,
    cb?: (error: string, rep: DescribeFOOMMallocProblemDetailResponse) => void
  ): Promise<DescribeFOOMMallocProblemDetailResponse> {
    return this.request("DescribeFOOMMallocProblemDetail", req, cb)
  }

  /**
   * 获取DescribeDataStaticResource信息
   */
  async DescribeDataStaticResourceV2(
    req: DescribeDataStaticResourceV2Request,
    cb?: (error: string, rep: DescribeDataStaticResourceV2Response) => void
  ): Promise<DescribeDataStaticResourceV2Response> {
    return this.request("DescribeDataStaticResourceV2", req, cb)
  }

  /**
   * 获取项目下的日志列表（实例创建的项目下的日志列表）
   */
  async DescribeRumLogList(
    req: DescribeRumLogListRequest,
    cb?: (error: string, rep: DescribeRumLogListResponse) => void
  ): Promise<DescribeRumLogListResponse> {
    return this.request("DescribeRumLogList", req, cb)
  }

  /**
   * 按一个维度拆分拨测指标。Dimension 取值说明：platform、app_version、device、net_type、operator、region、country、target_ip。target_region 不是合法值。region 对应客户端省份，country 对应国家。
   */
  async DescribeTDEMDialDimensions(
    req: DescribeTDEMDialDimensionsRequest,
    cb?: (error: string, rep: DescribeTDEMDialDimensionsResponse) => void
  ): Promise<DescribeTDEMDialDimensionsResponse> {
    return this.request("DescribeTDEMDialDimensions", req, cb)
  }

  /**
   * 获取LogUrlStatistics信息
   */
  async DescribeDataLogUrlStatisticsV2(
    req: DescribeDataLogUrlStatisticsV2Request,
    cb?: (error: string, rep: DescribeDataLogUrlStatisticsV2Response) => void
  ): Promise<DescribeDataLogUrlStatisticsV2Response> {
    return this.request("DescribeDataLogUrlStatisticsV2", req, cb)
  }

  /**
   * 获取回放时间线数据
   */
  async DescribeTDEMSessionReplayTimeline(
    req: DescribeTDEMSessionReplayTimelineRequest,
    cb?: (error: string, rep: DescribeTDEMSessionReplayTimelineResponse) => void
  ): Promise<DescribeTDEMSessionReplayTimelineResponse> {
    return this.request("DescribeTDEMSessionReplayTimeline", req, cb)
  }

  /**
   * 查询单个应用的采集采样率与会话回放采样率。替代已废弃的 DescribeSampleRate；AppId 为 string。
   */
  async DescribeTDEMSampleRate(
    req: DescribeTDEMSampleRateRequest,
    cb?: (error: string, rep: DescribeTDEMSampleRateResponse) => void
  ): Promise<DescribeTDEMSampleRateResponse> {
    return this.request("DescribeTDEMSampleRate", req, cb)
  }

  /**
   * 获取FOOM问题列表数据
   */
  async DescribeFOOMProblemList(
    req: DescribeFOOMProblemListRequest,
    cb?: (error: string, rep: DescribeFOOMProblemListResponse) => void
  ): Promise<DescribeFOOMProblemListResponse> {
    return this.request("DescribeFOOMProblemList", req, cb)
  }

  /**
   * 获取TDEM性能指标数据
   */
  async DescribePerformanceMetrics(
    req: DescribePerformanceMetricsRequest,
    cb?: (error: string, rep: DescribePerformanceMetricsResponse) => void
  ): Promise<DescribePerformanceMetricsResponse> {
    return this.request("DescribePerformanceMetrics", req, cb)
  }

  /**
   * 获取漏斗报告
   */
  async DescribeTDEMFunnelReport(
    req: DescribeTDEMFunnelReportRequest,
    cb?: (error: string, rep: DescribeTDEMFunnelReportResponse) => void
  ): Promise<DescribeTDEMFunnelReportResponse> {
    return this.request("DescribeTDEMFunnelReport", req, cb)
  }

  /**
   * 获取项目上报量
   */
  async DescribeDataReportCountV2(
    req: DescribeDataReportCountV2Request,
    cb?: (error: string, rep: DescribeDataReportCountV2Response) => void
  ): Promise<DescribeDataReportCountV2Response> {
    return this.request("DescribeDataReportCountV2", req, cb)
  }

  /**
   * 在指定业务系统下创建应用。
   */
  async CreateTDEMApplication(
    req: CreateTDEMApplicationRequest,
    cb?: (error: string, rep: CreateTDEMApplicationResponse) => void
  ): Promise<CreateTDEMApplicationResponse> {
    return this.request("CreateTDEMApplication", req, cb)
  }

  /**
   * 获取卡顿ANR问题列表数据
   */
  async DescribeLagANRProblemList(
    req: DescribeLagANRProblemListRequest,
    cb?: (error: string, rep: DescribeLagANRProblemListResponse) => void
  ): Promise<DescribeLagANRProblemListResponse> {
    return this.request("DescribeLagANRProblemList", req, cb)
  }

  /**
   * 获取日志下载链接
   */
  async DescribeIssueCrashLogDownloadURL(
    req: DescribeIssueCrashLogDownloadURLRequest,
    cb?: (error: string, rep: DescribeIssueCrashLogDownloadURLResponse) => void
  ): Promise<DescribeIssueCrashLogDownloadURLResponse> {
    return this.request("DescribeIssueCrashLogDownloadURL", req, cb)
  }

  /**
   * 获取项目上报量
   */
  async DescribeDataReportCount(
    req: DescribeDataReportCountRequest,
    cb?: (error: string, rep: DescribeDataReportCountResponse) => void
  ): Promise<DescribeDataReportCountResponse> {
    return this.request("DescribeDataReportCount", req, cb)
  }

  /**
   * 获取异常问题详情数据
   */
  async DescribeExceptionDetail(
    req: DescribeExceptionDetailRequest,
    cb?: (error: string, rep: DescribeExceptionDetailResponse) => void
  ): Promise<DescribeExceptionDetailResponse> {
    return this.request("DescribeExceptionDetail", req, cb)
  }

  /**
   * 获取loginfo信息
   */
  async DescribeDataLogUrlInfo(
    req: DescribeDataLogUrlInfoRequest,
    cb?: (error: string, rep: DescribeDataLogUrlInfoResponse) => void
  ): Promise<DescribeDataLogUrlInfoResponse> {
    return this.request("DescribeDataLogUrlInfo", req, cb)
  }

  /**
   * 获取LogUrlStatistics信息
   */
  async DescribeDataLogUrlStatistics(
    req: DescribeDataLogUrlStatisticsRequest,
    cb?: (error: string, rep: DescribeDataLogUrlStatisticsResponse) => void
  ): Promise<DescribeDataLogUrlStatisticsResponse> {
    return this.request("DescribeDataLogUrlStatistics", req, cb)
  }

  /**
   * 获取DescribeDataFetchProject信息。已下线，请使用DescribeDataFetchUrl
   */
  async DescribeDataFetchProject(
    req: DescribeDataFetchProjectRequest,
    cb?: (error: string, rep: DescribeDataFetchProjectResponse) => void
  ): Promise<DescribeDataFetchProjectResponse> {
    return this.request("DescribeDataFetchProject", req, cb)
  }

  /**
   * 获取指定 Issue 当前事件或最新事件之前的 Breadcrumbs 面包屑序列
   */
  async DescribeIssueBreadcrumbs(
    req: DescribeIssueBreadcrumbsRequest,
    cb?: (error: string, rep: DescribeIssueBreadcrumbsResponse) => void
  ): Promise<DescribeIssueBreadcrumbsResponse> {
    return this.request("DescribeIssueBreadcrumbs", req, cb)
  }

  /**
   * 获取应用退出个例上报详情
   */
  async DescribeApplicationExitReportDetail(
    req: DescribeApplicationExitReportDetailRequest,
    cb?: (error: string, rep: DescribeApplicationExitReportDetailResponse) => void
  ): Promise<DescribeApplicationExitReportDetailResponse> {
    return this.request("DescribeApplicationExitReportDetail", req, cb)
  }

  /**
   * 获取首页错误信息
   */
  async DescribeError(
    req: DescribeErrorRequest,
    cb?: (error: string, rep: DescribeErrorResponse) => void
  ): Promise<DescribeErrorResponse> {
    return this.request("DescribeError", req, cb)
  }

  /**
   * 获取FOOM问题上报列表
   */
  async DescribeFOOMReportList(
    req: DescribeFOOMReportListRequest,
    cb?: (error: string, rep: DescribeFOOMReportListResponse) => void
  ): Promise<DescribeFOOMReportListResponse> {
    return this.request("DescribeFOOMReportList", req, cb)
  }

  /**
   * 获取项目下的PV列表
   */
  async DescribePvList(
    req: DescribePvListRequest,
    cb?: (error: string, rep: DescribePvListResponse) => void
  ): Promise<DescribePvListResponse> {
    return this.request("DescribePvList", req, cb)
  }

  /**
     * 获取DescribeDataWebVitalsPage信息，用户核心活动信息
页面加载性能之Web Vitals。性能关键点
     */
  async DescribeDataWebVitalsPage(
    req: DescribeDataWebVitalsPageRequest,
    cb?: (error: string, rep: DescribeDataWebVitalsPageResponse) => void
  ): Promise<DescribeDataWebVitalsPageResponse> {
    return this.request("DescribeDataWebVitalsPage", req, cb)
  }

  /**
   * 查询 app 监控个例样本详情列表
   */
  async DescribeAppSingleCaseDetailList(
    req: DescribeAppSingleCaseDetailListRequest,
    cb?: (error: string, rep: DescribeAppSingleCaseDetailListResponse) => void
  ): Promise<DescribeAppSingleCaseDetailListResponse> {
    return this.request("DescribeAppSingleCaseDetailList", req, cb)
  }

  /**
   * 获取 app 监控指标数据
   */
  async DescribeAppMetricsData(
    req: DescribeAppMetricsDataRequest,
    cb?: (error: string, rep: DescribeAppMetricsDataResponse) => void
  ): Promise<DescribeAppMetricsDataResponse> {
    return this.request("DescribeAppMetricsData", req, cb)
  }

  /**
   * 恢复已停止的应用，Status 变为 2。
   */
  async ResumeTDEMApplication(
    req: ResumeTDEMApplicationRequest,
    cb?: (error: string, rep: ResumeTDEMApplicationResponse) => void
  ): Promise<ResumeTDEMApplicationResponse> {
    return this.request("ResumeTDEMApplication", req, cb)
  }

  /**
   * 获取FOOM内存分配问题上报列表
   */
  async DescribeFOOMMallocReportList(
    req: DescribeFOOMMallocReportListRequest,
    cb?: (error: string, rep: DescribeFOOMMallocReportListResponse) => void
  ): Promise<DescribeFOOMMallocReportListResponse> {
    return this.request("DescribeFOOMMallocReportList", req, cb)
  }

  /**
   * 查询分析指标时序。可传 CompareStartTime/CompareEndTime 做对比窗（仅批量）。读 tdem_metric_agg。
   */
  async DescribeTDEMMetricTrend(
    req: DescribeTDEMMetricTrendRequest,
    cb?: (error: string, rep: DescribeTDEMMetricTrendResponse) => void
  ): Promise<DescribeTDEMMetricTrendResponse> {
    return this.request("DescribeTDEMMetricTrend", req, cb)
  }

  /**
   * 获取应用上报抽样信息
   */
  async DescribeProjectLimits(
    req: DescribeProjectLimitsRequest,
    cb?: (error: string, rep: DescribeProjectLimitsResponse) => void
  ): Promise<DescribeProjectLimitsResponse> {
    return this.request("DescribeProjectLimits", req, cb)
  }

  /**
   * 删除回放包元数据，并尽力删除COS上回放包与源码zip。不存在返回ResourceNotFound。
   */
  async DeleteMiniProgramReplayPack(
    req: DeleteMiniProgramReplayPackRequest,
    cb?: (error: string, rep: DeleteMiniProgramReplayPackResponse) => void
  ): Promise<DeleteMiniProgramReplayPackResponse> {
    return this.request("DeleteMiniProgramReplayPack", req, cb)
  }

  /**
   * 修改漏斗
   */
  async ModifyTDEMFunnel(
    req: ModifyTDEMFunnelRequest,
    cb?: (error: string, rep: ModifyTDEMFunnelResponse) => void
  ): Promise<ModifyTDEMFunnelResponse> {
    return this.request("ModifyTDEMFunnel", req, cb)
  }

  /**
   * 查询指定应用与时间窗内的大模型对话汇总，包含对话次数、token 总数、吞吐率、首次消息时延、错误率、卡死率和流畅度。只读 tdem.tdem_events 中 event_type 为 sse_call 的事件。
   */
  async DescribeTDEMSSESummary(
    req: DescribeTDEMSSESummaryRequest,
    cb?: (error: string, rep: DescribeTDEMSSESummaryResponse) => void
  ): Promise<DescribeTDEMSSESummaryResponse> {
    return this.request("DescribeTDEMSSESummary", req, cb)
  }

  /**
   * 修改拨测任务。未出现在请求中的字段保持原值。启动范围传空字符串表示清空该项。Type 和 ExecutionTime 创建后不可修改。暂停和恢复通过 Status 完成，不提供单独的状态接口。
   */
  async ModifyTDEMDialTask(
    req: ModifyTDEMDialTaskRequest,
    cb?: (error: string, rep: ModifyTDEMDialTaskResponse) => void
  ): Promise<ModifyTDEMDialTaskResponse> {
    return this.request("ModifyTDEMDialTask", req, cb)
  }

  /**
   * 按 AppId+EventId 查询事件详情，含主表字段与可选符号化结果。Date 推荐传以命中分区；或用 StartDate+EndDate（<=2 天）。越权与不存在统一 ResourceNotFound。
   */
  async DescribeTDEMEventDetail(
    req: DescribeTDEMEventDetailRequest,
    cb?: (error: string, rep: DescribeTDEMEventDetailResponse) => void
  ): Promise<DescribeTDEMEventDetailResponse> {
    return this.request("DescribeTDEMEventDetail", req, cb)
  }

  /**
   * 逻辑删除应用，ProjectKey 即刻失效。
   */
  async DeleteTDEMApplication(
    req: DeleteTDEMApplicationRequest,
    cb?: (error: string, rep: DeleteTDEMApplicationResponse) => void
  ): Promise<DeleteTDEMApplicationResponse> {
    return this.request("DeleteTDEMApplication", req, cb)
  }

  /**
   * 获取问题分布数据
   */
  async DescribeIssuesDistribution(
    req: DescribeIssuesDistributionRequest,
    cb?: (error: string, rep: DescribeIssuesDistributionResponse) => void
  ): Promise<DescribeIssuesDistributionResponse> {
    return this.request("DescribeIssuesDistribution", req, cb)
  }

  /**
   * 获取DescribeDataBridgeUrl信息
   */
  async DescribeDataBridgeUrlV2(
    req: DescribeDataBridgeUrlV2Request,
    cb?: (error: string, rep: DescribeDataBridgeUrlV2Response) => void
  ): Promise<DescribeDataBridgeUrlV2Response> {
    return this.request("DescribeDataBridgeUrlV2", req, cb)
  }

  /**
   * 获取应用的采样率
   */
  async DescribeSampleRate(
    req: DescribeSampleRateRequest,
    cb?: (error: string, rep: DescribeSampleRateResponse) => void
  ): Promise<DescribeSampleRateResponse> {
    return this.request("DescribeSampleRate", req, cb)
  }

  /**
   * 获取PvUrlInfo信息
   */
  async DescribeDataPvUrlInfo(
    req: DescribeDataPvUrlInfoRequest,
    cb?: (error: string, rep: DescribeDataPvUrlInfoResponse) => void
  ): Promise<DescribeDataPvUrlInfoResponse> {
    return this.request("DescribeDataPvUrlInfo", req, cb)
  }

  /**
   * 获取首页分数列表
   */
  async DescribeScoresV2(
    req: DescribeScoresV2Request,
    cb?: (error: string, rep: DescribeScoresV2Response) => void
  ): Promise<DescribeScoresV2Response> {
    return this.request("DescribeScoresV2", req, cb)
  }

  /**
   * 获取漏斗详情
   */
  async DescribeTDEMFunnelDetail(
    req: DescribeTDEMFunnelDetailRequest,
    cb?: (error: string, rep: DescribeTDEMFunnelDetailResponse) => void
  ): Promise<DescribeTDEMFunnelDetailResponse> {
    return this.request("DescribeTDEMFunnelDetail", req, cb)
  }

  /**
   * 获取卡顿ANR问题用户详情
   */
  async DescribeLagANRProblemAccountDetail(
    req: DescribeLagANRProblemAccountDetailRequest,
    cb?: (error: string, rep: DescribeLagANRProblemAccountDetailResponse) => void
  ): Promise<DescribeLagANRProblemAccountDetailResponse> {
    return this.request("DescribeLagANRProblemAccountDetail", req, cb)
  }

  /**
   * 查询日志明细
   */
  async DescribeRumLogDetailsV2(
    req: DescribeRumLogDetailsV2Request,
    cb?: (error: string, rep: DescribeRumLogDetailsV2Response) => void
  ): Promise<DescribeRumLogDetailsV2Response> {
    return this.request("DescribeRumLogDetailsV2", req, cb)
  }

  /**
   * 获取应用对应sourcemap文件列表
   */
  async DescribeReleaseFiles(
    req: DescribeReleaseFilesRequest,
    cb?: (error: string, rep: DescribeReleaseFilesResponse) => void
  ): Promise<DescribeReleaseFilesResponse> {
    return this.request("DescribeReleaseFiles", req, cb)
  }

  /**
   * 创建漏斗
   */
  async CreateTDEMFunnel(
    req: CreateTDEMFunnelRequest,
    cb?: (error: string, rep: CreateTDEMFunnelResponse) => void
  ): Promise<CreateTDEMFunnelResponse> {
    return this.request("CreateTDEMFunnel", req, cb)
  }

  /**
   * 转发monitor查询
   */
  async DescribeData(
    req: DescribeDataRequest,
    cb?: (error: string, rep: DescribeDataResponse) => void
  ): Promise<DescribeDataResponse> {
    return this.request("DescribeData", req, cb)
  }
}

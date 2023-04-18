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
  CreateTawInstanceRequest,
  DescribeDataFetchProjectRequest,
  DescribeDataResponse,
  CreateTawInstanceResponse,
  DeleteProjectRequest,
  DescribeProjectLimitsResponse,
  DescribeTawInstancesRequest,
  DeleteOfflineLogConfigResponse,
  ResumeProjectResponse,
  DescribeRumLogListResponse,
  DescribeAppMetricsDataRequest,
  DescribeDataPvUrlInfoResponse,
  StopProjectResponse,
  DescribeDataFetchUrlResponse,
  DescribeErrorRequest,
  StopInstanceRequest,
  ModifyInstanceRequest,
  DescribeLogListRequest,
  DescribeErrorResponse,
  DescribeAppMetricsDataResponse,
  DescribeAppSingleCaseDetailListResponse,
  DeleteWhitelistResponse,
  CreateLogExportRequest,
  DescribePvListResponse,
  RumUvInfo,
  DescribeOfflineLogsRequest,
  DescribeScoresRequest,
  DescribeDataReportCountRequest,
  DeleteOfflineLogRecordRequest,
  DescribeReleaseFilesRequest,
  CreateReleaseFileRequest,
  DeleteOfflineLogRecordResponse,
  DescribeDataCustomUrlRequest,
  DescribeUvListResponse,
  Tag,
  CreateProjectRequest,
  DescribeDataStaticUrlRequest,
  ModifyInstanceResponse,
  DescribeOfflineLogRecordsResponse,
  DeleteStarProjectRequest,
  DescribeWhitelistsRequest,
  DescribeLogExportsResponse,
  DescribeUvListRequest,
  DescribeTawAreasResponse,
  DescribeDataRequest,
  StopProjectRequest,
  CreateOfflineLogConfigResponse,
  ModifyProjectLimitRequest,
  DeleteInstanceResponse,
  DescribeAppSingleCaseListResponse,
  DescribeDataPerformancePageRequest,
  DeleteReleaseFileRequest,
  ResumeInstanceRequest,
  DescribeDataFetchUrlRequest,
  DescribeRumLogExportRequest,
  DescribeDataLogUrlStatisticsResponse,
  CreateProjectResponse,
  StopInstanceResponse,
  DescribeDataCustomUrlResponse,
  CreateStarProjectResponse,
  DeleteProjectResponse,
  DescribeOfflineLogRecordsRequest,
  DescribeDataPvUrlStatisticsRequest,
  ReleaseFile,
  ModifyProjectLimitResponse,
  DescribeRumLogExportsResponse,
  DescribeDataStaticProjectRequest,
  DescribeRumStatsLogListRequest,
  ResumeProjectRequest,
  ProjectLimit,
  DeleteLogExportRequest,
  DescribeRumGroupLogResponse,
  DescribeRumStatsLogListResponse,
  CreateWhitelistRequest,
  DescribeDataPvUrlStatisticsResponse,
  DescribeDataLogUrlInfoRequest,
  DescribeProjectLimitsRequest,
  RumAreaInfo,
  DescribeDataSetUrlStatisticsRequest,
  DescribeDataPerformanceProjectResponse,
  DescribeDataFetchUrlInfoResponse,
  ResumeInstanceResponse,
  DescribeDataStaticProjectResponse,
  CreateStarProjectRequest,
  DescribeAppSingleCaseListRequest,
  DescribeReleaseFileSignRequest,
  DeleteWhitelistRequest,
  DescribeDataLogUrlInfoResponse,
  RumPvInfo,
  DeleteReleaseFileResponse,
  DescribeScoresResponse,
  DescribeOfflineLogConfigsResponse,
  DeleteLogExportResponse,
  DescribeReleaseFileSignResponse,
  DescribeOfflineLogsResponse,
  DescribeTawAreasRequest,
  Filter,
  DescribeDataLogUrlStatisticsRequest,
  DeleteStarProjectResponse,
  DescribeDataPerformancePageResponse,
  DeleteInstanceRequest,
  LogExport,
  DescribeDataStaticResourceResponse,
  DescribeDataEventUrlResponse,
  DescribeDataWebVitalsPageRequest,
  DescribeDataFetchUrlInfoRequest,
  DescribeLogListResponse,
  DescribeReleaseFilesResponse,
  CreateOfflineLogConfigRequest,
  DescribeDataStaticUrlResponse,
  CreateWhitelistResponse,
  ScoreInfo,
  DescribeDataWebVitalsPageResponse,
  DescribeProjectsRequest,
  DescribeDataEventUrlRequest,
  DescribeAppDimensionMetricsResponse,
  DescribeOfflineLogConfigsRequest,
  DescribeAppSingleCaseDetailListRequest,
  DescribeRumGroupLogRequest,
  DeleteOfflineLogConfigRequest,
  DescribeWhitelistsResponse,
  DescribeProjectsResponse,
  ModifyProjectResponse,
  DescribeLogExportsRequest,
  DescribeDataReportCountResponse,
  DescribeDataPerformanceProjectRequest,
  DescribeRumLogExportResponse,
  DescribeRumLogExportsRequest,
  ModifyProjectRequest,
  DescribeRumLogListRequest,
  DescribeDataStaticResourceRequest,
  DescribeTawInstancesResponse,
  DescribePvListRequest,
  DescribeDataPvUrlInfoRequest,
  CreateReleaseFileResponse,
  CreateLogExportResponse,
  DescribeDataFetchProjectResponse,
  Whitelist,
  RumProject,
  DescribeDataSetUrlStatisticsResponse,
  DescribeAppDimensionMetricsRequest,
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
   * 查询片区信息
   */
  async DescribeTawAreas(
    req: DescribeTawAreasRequest,
    cb?: (error: string, rep: DescribeTawAreasResponse) => void
  ): Promise<DescribeTawAreasResponse> {
    return this.request("DescribeTawAreas", req, cb)
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
   * 创建对应项目的文件记录
   */
  async CreateReleaseFile(
    req: CreateReleaseFileRequest,
    cb?: (error: string, rep: CreateReleaseFileResponse) => void
  ): Promise<CreateReleaseFileResponse> {
    return this.request("CreateReleaseFile", req, cb)
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
   * 获取项目下的日志列表（实例创建的项目下的日志列表）
   */
  async DescribeRumLogList(
    req: DescribeRumLogListRequest,
    cb?: (error: string, rep: DescribeRumLogListResponse) => void
  ): Promise<DescribeRumLogListResponse> {
    return this.request("DescribeRumLogList", req, cb)
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
   * 获取PerformancePage信息
   */
  async DescribeDataPerformancePage(
    req: DescribeDataPerformancePageRequest,
    cb?: (error: string, rep: DescribeDataPerformancePageResponse) => void
  ): Promise<DescribeDataPerformancePageResponse> {
    return this.request("DescribeDataPerformancePage", req, cb)
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
   * 删除 rum 离线日志监听 - 对应用户的离线日志将不会上报
   */
  async DeleteOfflineLogConfig(
    req: DeleteOfflineLogConfigRequest,
    cb?: (error: string, rep: DeleteOfflineLogConfigResponse) => void
  ): Promise<DeleteOfflineLogConfigResponse> {
    return this.request("DeleteOfflineLogConfig", req, cb)
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
   * 获取项目下的日志列表（实例创建的项目下的日志列表）
   */
  async DescribeRumLogExport(
    req: DescribeRumLogExportRequest,
    cb?: (error: string, rep: DescribeRumLogExportResponse) => void
  ): Promise<DescribeRumLogExportResponse> {
    return this.request("DescribeRumLogExport", req, cb)
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
   * 删除用户名下的星标项目
   */
  async DeleteStarProject(
    req: DeleteStarProjectRequest,
    cb?: (error: string, rep: DeleteStarProjectResponse) => void
  ): Promise<DeleteStarProjectResponse> {
    return this.request("DeleteStarProject", req, cb)
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
   * 获取PerformanceProject信息
   */
  async DescribeDataPerformanceProject(
    req: DescribeDataPerformanceProjectRequest,
    cb?: (error: string, rep: DescribeDataPerformanceProjectResponse) => void
  ): Promise<DescribeDataPerformanceProjectResponse> {
    return this.request("DescribeDataPerformanceProject", req, cb)
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
   * 获取项目下的日志聚合信息
   */
  async DescribeRumGroupLog(
    req: DescribeRumGroupLogRequest,
    cb?: (error: string, rep: DescribeRumGroupLogResponse) => void
  ): Promise<DescribeRumGroupLogResponse> {
    return this.request("DescribeRumGroupLog", req, cb)
  }

  /**
   * (已下线，请用DescribeRumLogList)
   */
  async DescribeLogList(
    req: DescribeLogListRequest,
    cb?: (error: string, rep: DescribeLogListResponse) => void
  ): Promise<DescribeLogListResponse> {
    return this.request("DescribeLogList", req, cb)
  }

  /**
   * 获取对应离线日志
   */
  async DescribeOfflineLogs(
    req: DescribeOfflineLogsRequest,
    cb?: (error: string, rep: DescribeOfflineLogsResponse) => void
  ): Promise<DescribeOfflineLogsResponse> {
    return this.request("DescribeOfflineLogs", req, cb)
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
   * 获取项目下的PV列表
   */
  async DescribePvList(
    req: DescribePvListRequest,
    cb?: (error: string, rep: DescribePvListResponse) => void
  ): Promise<DescribePvListResponse> {
    return this.request("DescribePvList", req, cb)
  }

  /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于获取日志下载任务列表

默认接口请求频率限制：20次/秒
     */
  async DescribeLogExports(
    req: DescribeLogExportsRequest,
    cb?: (error: string, rep: DescribeLogExportsResponse) => void
  ): Promise<DescribeLogExportsResponse> {
    return this.request("DescribeLogExports", req, cb)
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
   * 获取DescribeDataStaticUrl信息
   */
  async DescribeDataStaticUrl(
    req: DescribeDataStaticUrlRequest,
    cb?: (error: string, rep: DescribeDataStaticUrlResponse) => void
  ): Promise<DescribeDataStaticUrlResponse> {
    return this.request("DescribeDataStaticUrl", req, cb)
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
   * 获取DescribeDataPvUrlStatistics信息
   */
  async DescribeDataPvUrlStatistics(
    req: DescribeDataPvUrlStatisticsRequest,
    cb?: (error: string, rep: DescribeDataPvUrlStatisticsResponse) => void
  ): Promise<DescribeDataPvUrlStatisticsResponse> {
    return this.request("DescribeDataPvUrlStatistics", req, cb)
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
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于创建日志下载任务

默认接口请求频率限制：20次/秒。
     */
  async CreateLogExport(
    req: CreateLogExportRequest,
    cb?: (error: string, rep: CreateLogExportResponse) => void
  ): Promise<CreateLogExportResponse> {
    return this.request("CreateLogExport", req, cb)
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
   * 修改 RUM 业务系统
   */
  async ModifyInstance(
    req: ModifyInstanceRequest,
    cb?: (error: string, rep: ModifyInstanceResponse) => void
  ): Promise<ModifyInstanceResponse> {
    return this.request("ModifyInstance", req, cb)
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
   * 获取DescribeDataStaticResource信息
   */
  async DescribeDataStaticResource(
    req: DescribeDataStaticResourceRequest,
    cb?: (error: string, rep: DescribeDataStaticResourceResponse) => void
  ): Promise<DescribeDataStaticResourceResponse> {
    return this.request("DescribeDataStaticResource", req, cb)
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
   * 用于查询 app 监控多维分析数据
   */
  async DescribeAppDimensionMetrics(
    req: DescribeAppDimensionMetricsRequest,
    cb?: (error: string, rep: DescribeAppDimensionMetricsResponse) => void
  ): Promise<DescribeAppDimensionMetricsResponse> {
    return this.request("DescribeAppDimensionMetrics", req, cb)
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
   * 恢复应用使用与上报数据
   */
  async ResumeProject(
    req: ResumeProjectRequest,
    cb?: (error: string, rep: ResumeProjectResponse) => void
  ): Promise<ResumeProjectResponse> {
    return this.request("ResumeProject", req, cb)
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
   * 创建 RUM 业务系统
   */
  async CreateTawInstance(
    req: CreateTawInstanceRequest,
    cb?: (error: string, rep: CreateTawInstanceResponse) => void
  ): Promise<CreateTawInstanceResponse> {
    return this.request("CreateTawInstance", req, cb)
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
   * 修改 RUM 应用信息
   */
  async ModifyProject(
    req: ModifyProjectRequest,
    cb?: (error: string, rep: ModifyProjectResponse) => void
  ): Promise<ModifyProjectResponse> {
    return this.request("ModifyProject", req, cb)
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
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于删除日志下载任务

默认接口请求频率限制：20次/秒。
     */
  async DeleteLogExport(
    req: DeleteLogExportRequest,
    cb?: (error: string, rep: DeleteLogExportResponse) => void
  ): Promise<DeleteLogExportResponse> {
    return this.request("DeleteLogExport", req, cb)
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
   * 获取DescribeDataEventUrl信息
   */
  async DescribeDataEventUrl(
    req: DescribeDataEventUrlRequest,
    cb?: (error: string, rep: DescribeDataEventUrlResponse) => void
  ): Promise<DescribeDataEventUrlResponse> {
    return this.request("DescribeDataEventUrl", req, cb)
  }

  /**
   * 删除对应的离线日志记录
   */
  async DeleteOfflineLogRecord(
    req: DeleteOfflineLogRecordRequest,
    cb?: (error: string, rep: DeleteOfflineLogRecordResponse) => void
  ): Promise<DeleteOfflineLogRecordResponse> {
    return this.request("DeleteOfflineLogRecord", req, cb)
  }

  /**
   * 获取设置的离线日志监听配置 - 返回设置的用户唯一标识
   */
  async DescribeOfflineLogConfigs(
    req: DescribeOfflineLogConfigsRequest,
    cb?: (error: string, rep: DescribeOfflineLogConfigsResponse) => void
  ): Promise<DescribeOfflineLogConfigsResponse> {
    return this.request("DescribeOfflineLogConfigs", req, cb)
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
   * 获取loginfo信息
   */
  async DescribeDataLogUrlInfo(
    req: DescribeDataLogUrlInfoRequest,
    cb?: (error: string, rep: DescribeDataLogUrlInfoResponse) => void
  ): Promise<DescribeDataLogUrlInfoResponse> {
    return this.request("DescribeDataLogUrlInfo", req, cb)
  }

  /**
   * 创建 RUM 应用（归属于某个团队）
   */
  async CreateProject(
    req: CreateProjectRequest,
    cb?: (error: string, rep: CreateProjectResponse) => void
  ): Promise<CreateProjectResponse> {
    return this.request("CreateProject", req, cb)
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
   * 获取PvUrlInfo信息
   */
  async DescribeDataPvUrlInfo(
    req: DescribeDataPvUrlInfoRequest,
    cb?: (error: string, rep: DescribeDataPvUrlInfoResponse) => void
  ): Promise<DescribeDataPvUrlInfoResponse> {
    return this.request("DescribeDataPvUrlInfo", req, cb)
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
   * 删除给定的 rum 的项目
   */
  async DeleteProject(
    req: DeleteProjectRequest,
    cb?: (error: string, rep: DeleteProjectResponse) => void
  ): Promise<DeleteProjectResponse> {
    return this.request("DeleteProject", req, cb)
  }

  /**
   * 获取所有离线日志记录(最多100条)
   */
  async DescribeOfflineLogRecords(
    req: DescribeOfflineLogRecordsRequest,
    cb?: (error: string, rep: DescribeOfflineLogRecordsResponse) => void
  ): Promise<DescribeOfflineLogRecordsResponse> {
    return this.request("DescribeOfflineLogRecords", req, cb)
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
   * 获取DescribeDataFetchProject信息。已下线，请使用DescribeDataFetchUrl
   */
  async DescribeDataFetchProject(
    req: DescribeDataFetchProjectRequest,
    cb?: (error: string, rep: DescribeDataFetchProjectResponse) => void
  ): Promise<DescribeDataFetchProjectResponse> {
    return this.request("DescribeDataFetchProject", req, cb)
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
   * 创建离线日志监听，对应用户的离线日志将上报
   */
  async CreateOfflineLogConfig(
    req: CreateOfflineLogConfigRequest,
    cb?: (error: string, rep: CreateOfflineLogConfigResponse) => void
  ): Promise<CreateOfflineLogConfigResponse> {
    return this.request("CreateOfflineLogConfig", req, cb)
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
   * 转发monitor查询
   */
  async DescribeData(
    req: DescribeDataRequest,
    cb?: (error: string, rep: DescribeDataResponse) => void
  ): Promise<DescribeDataResponse> {
    return this.request("DescribeData", req, cb)
  }
}

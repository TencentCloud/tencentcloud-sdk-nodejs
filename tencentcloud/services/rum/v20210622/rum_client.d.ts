import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateTawInstanceRequest, DescribeDataFetchProjectRequest, DescribeDataResponse, CreateTawInstanceResponse, DeleteProjectRequest, DescribeProjectLimitsResponse, DescribeTawInstancesRequest, DeleteOfflineLogConfigResponse, ResumeProjectResponse, DescribeRumLogListResponse, DescribeAppMetricsDataRequest, DescribeDataPvUrlInfoResponse, StopProjectResponse, DescribeDataFetchUrlResponse, DescribeErrorRequest, StopInstanceRequest, ModifyInstanceRequest, DescribeLogListRequest, DescribeErrorResponse, DescribeAppMetricsDataResponse, DescribeAppSingleCaseDetailListResponse, DeleteWhitelistResponse, CreateLogExportRequest, DescribePvListResponse, DescribeOfflineLogsRequest, DescribeScoresRequest, DescribeDataReportCountRequest, DeleteOfflineLogRecordRequest, DescribeReleaseFilesRequest, CreateReleaseFileRequest, DeleteOfflineLogRecordResponse, DescribeDataCustomUrlRequest, DescribeUvListResponse, CreateProjectRequest, DescribeDataStaticUrlRequest, ModifyInstanceResponse, DescribeOfflineLogRecordsResponse, DeleteStarProjectRequest, DescribeWhitelistsRequest, DescribeLogExportsResponse, DescribeUvListRequest, DescribeTawAreasResponse, DescribeDataRequest, StopProjectRequest, CreateOfflineLogConfigResponse, ModifyProjectLimitRequest, DeleteInstanceResponse, DescribeAppSingleCaseListResponse, DescribeDataPerformancePageRequest, DeleteReleaseFileRequest, ResumeInstanceRequest, DescribeDataFetchUrlRequest, DescribeRumLogExportRequest, DescribeDataLogUrlStatisticsResponse, CreateProjectResponse, StopInstanceResponse, DescribeDataCustomUrlResponse, CreateStarProjectResponse, DeleteProjectResponse, DescribeOfflineLogRecordsRequest, DescribeDataPvUrlStatisticsRequest, ModifyProjectLimitResponse, DescribeRumLogExportsResponse, DescribeDataStaticProjectRequest, DescribeRumStatsLogListRequest, ResumeProjectRequest, DeleteLogExportRequest, DescribeRumGroupLogResponse, DescribeRumStatsLogListResponse, CreateWhitelistRequest, DescribeDataPvUrlStatisticsResponse, DescribeDataLogUrlInfoRequest, DescribeProjectLimitsRequest, DescribeDataSetUrlStatisticsRequest, DescribeDataPerformanceProjectResponse, DescribeDataFetchUrlInfoResponse, ResumeInstanceResponse, DescribeDataStaticProjectResponse, CreateStarProjectRequest, DescribeAppSingleCaseListRequest, DescribeReleaseFileSignRequest, DeleteWhitelistRequest, DescribeDataLogUrlInfoResponse, DeleteReleaseFileResponse, DescribeScoresResponse, DescribeOfflineLogConfigsResponse, DeleteLogExportResponse, DescribeReleaseFileSignResponse, DescribeOfflineLogsResponse, DescribeTawAreasRequest, DescribeDataLogUrlStatisticsRequest, DeleteStarProjectResponse, DescribeDataPerformancePageResponse, DeleteInstanceRequest, DescribeDataStaticResourceResponse, DescribeDataEventUrlResponse, DescribeDataWebVitalsPageRequest, DescribeDataFetchUrlInfoRequest, DescribeLogListResponse, DescribeReleaseFilesResponse, CreateOfflineLogConfigRequest, DescribeDataStaticUrlResponse, CreateWhitelistResponse, DescribeDataWebVitalsPageResponse, DescribeProjectsRequest, DescribeDataEventUrlRequest, DescribeAppDimensionMetricsResponse, DescribeOfflineLogConfigsRequest, DescribeAppSingleCaseDetailListRequest, DescribeRumGroupLogRequest, DeleteOfflineLogConfigRequest, DescribeWhitelistsResponse, DescribeProjectsResponse, ModifyProjectResponse, DescribeLogExportsRequest, DescribeDataReportCountResponse, DescribeDataPerformanceProjectRequest, DescribeRumLogExportResponse, DescribeRumLogExportsRequest, ModifyProjectRequest, DescribeRumLogListRequest, DescribeDataStaticResourceRequest, DescribeTawInstancesResponse, DescribePvListRequest, DescribeDataPvUrlInfoRequest, CreateReleaseFileResponse, CreateLogExportResponse, DescribeDataFetchProjectResponse, DescribeDataSetUrlStatisticsResponse, DescribeAppDimensionMetricsRequest } from "./rum_models";
/**
 * rum client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询片区信息
     */
    DescribeTawAreas(req: DescribeTawAreasRequest, cb?: (error: string, rep: DescribeTawAreasResponse) => void): Promise<DescribeTawAreasResponse>;
    /**
     * 获取项目下的日志列表，分钟级
     */
    DescribeRumStatsLogList(req: DescribeRumStatsLogListRequest, cb?: (error: string, rep: DescribeRumStatsLogListResponse) => void): Promise<DescribeRumStatsLogListResponse>;
    /**
     * 创建对应项目的文件记录
     */
    CreateReleaseFile(req: CreateReleaseFileRequest, cb?: (error: string, rep: CreateReleaseFileResponse) => void): Promise<CreateReleaseFileResponse>;
    /**
     * 获取首页分数列表
     */
    DescribeScores(req: DescribeScoresRequest, cb?: (error: string, rep: DescribeScoresResponse) => void): Promise<DescribeScoresResponse>;
    /**
     * 获取项目下的日志列表（实例创建的项目下的日志列表）
     */
    DescribeRumLogList(req: DescribeRumLogListRequest, cb?: (error: string, rep: DescribeRumLogListResponse) => void): Promise<DescribeRumLogListResponse>;
    /**
     * 查询实例信息
     */
    DescribeTawInstances(req: DescribeTawInstancesRequest, cb?: (error: string, rep: DescribeTawInstancesResponse) => void): Promise<DescribeTawInstancesResponse>;
    /**
     * 获取PerformancePage信息
     */
    DescribeDataPerformancePage(req: DescribeDataPerformancePageRequest, cb?: (error: string, rep: DescribeDataPerformancePageResponse) => void): Promise<DescribeDataPerformancePageResponse>;
    /**
     * 获取LogUrlStatistics信息
     */
    DescribeDataLogUrlStatistics(req: DescribeDataLogUrlStatisticsRequest, cb?: (error: string, rep: DescribeDataLogUrlStatisticsResponse) => void): Promise<DescribeDataLogUrlStatisticsResponse>;
    /**
     * 删除 rum 离线日志监听 - 对应用户的离线日志将不会上报
     */
    DeleteOfflineLogConfig(req: DeleteOfflineLogConfigRequest, cb?: (error: string, rep: DeleteOfflineLogConfigResponse) => void): Promise<DeleteOfflineLogConfigResponse>;
    /**
     * 删除实例，谨慎操作，不可恢复
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 获取项目下的日志列表（实例创建的项目下的日志列表）
     */
    DescribeRumLogExport(req: DescribeRumLogExportRequest, cb?: (error: string, rep: DescribeRumLogExportResponse) => void): Promise<DescribeRumLogExportResponse>;
    /**
     * 获取项目下的日志导出列表
     */
    DescribeRumLogExports(req: DescribeRumLogExportsRequest, cb?: (error: string, rep: DescribeRumLogExportsResponse) => void): Promise<DescribeRumLogExportsResponse>;
    /**
     * 删除用户名下的星标项目
     */
    DeleteStarProject(req: DeleteStarProjectRequest, cb?: (error: string, rep: DeleteStarProjectResponse) => void): Promise<DeleteStarProjectResponse>;
    /**
     * 恢复 RUM 业务系统，恢复后，用户可以正常使用和上报数据
     */
    ResumeInstance(req: ResumeInstanceRequest, cb?: (error: string, rep: ResumeInstanceResponse) => void): Promise<ResumeInstanceResponse>;
    /**
     * 获取PerformanceProject信息
     */
    DescribeDataPerformanceProject(req: DescribeDataPerformanceProjectRequest, cb?: (error: string, rep: DescribeDataPerformanceProjectResponse) => void): Promise<DescribeDataPerformanceProjectResponse>;
    /**
     * 获取首页错误信息
     */
    DescribeError(req: DescribeErrorRequest, cb?: (error: string, rep: DescribeErrorResponse) => void): Promise<DescribeErrorResponse>;
    /**
     * 获取项目下的日志聚合信息
     */
    DescribeRumGroupLog(req: DescribeRumGroupLogRequest, cb?: (error: string, rep: DescribeRumGroupLogResponse) => void): Promise<DescribeRumGroupLogResponse>;
    /**
     * (已下线，请用DescribeRumLogList)
     */
    DescribeLogList(req: DescribeLogListRequest, cb?: (error: string, rep: DescribeLogListResponse) => void): Promise<DescribeLogListResponse>;
    /**
     * 获取对应离线日志
     */
    DescribeOfflineLogs(req: DescribeOfflineLogsRequest, cb?: (error: string, rep: DescribeOfflineLogsResponse) => void): Promise<DescribeOfflineLogsResponse>;
    /**
     * 查询 app 监控个例聚合列表
     */
    DescribeAppSingleCaseList(req: DescribeAppSingleCaseListRequest, cb?: (error: string, rep: DescribeAppSingleCaseListResponse) => void): Promise<DescribeAppSingleCaseListResponse>;
    /**
     * 获取项目下的PV列表
     */
    DescribePvList(req: DescribePvListRequest, cb?: (error: string, rep: DescribePvListResponse) => void): Promise<DescribePvListResponse>;
    /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于获取日志下载任务列表

默认接口请求频率限制：20次/秒
     */
    DescribeLogExports(req: DescribeLogExportsRequest, cb?: (error: string, rep: DescribeLogExportsResponse) => void): Promise<DescribeLogExportsResponse>;
    /**
     * 获取DescribeDataWebVitalsPage信息，用户核心活动信息
页面加载性能之Web Vitals。性能关键点
     */
    DescribeDataWebVitalsPage(req: DescribeDataWebVitalsPageRequest, cb?: (error: string, rep: DescribeDataWebVitalsPageResponse) => void): Promise<DescribeDataWebVitalsPageResponse>;
    /**
     * 获取DescribeDataStaticUrl信息
     */
    DescribeDataStaticUrl(req: DescribeDataStaticUrlRequest, cb?: (error: string, rep: DescribeDataStaticUrlResponse) => void): Promise<DescribeDataStaticUrlResponse>;
    /**
     * 获取DescribeDataFetchUrlInfo信息
     */
    DescribeDataFetchUrlInfo(req: DescribeDataFetchUrlInfoRequest, cb?: (error: string, rep: DescribeDataFetchUrlInfoResponse) => void): Promise<DescribeDataFetchUrlInfoResponse>;
    /**
     * 获取DescribeDataPvUrlStatistics信息
     */
    DescribeDataPvUrlStatistics(req: DescribeDataPvUrlStatisticsRequest, cb?: (error: string, rep: DescribeDataPvUrlStatisticsResponse) => void): Promise<DescribeDataPvUrlStatisticsResponse>;
    /**
     * 查询 app 监控个例样本详情列表
     */
    DescribeAppSingleCaseDetailList(req: DescribeAppSingleCaseDetailListRequest, cb?: (error: string, rep: DescribeAppSingleCaseDetailListResponse) => void): Promise<DescribeAppSingleCaseDetailListResponse>;
    /**
     * 获取 app 监控指标数据
     */
    DescribeAppMetricsData(req: DescribeAppMetricsDataRequest, cb?: (error: string, rep: DescribeAppMetricsDataResponse) => void): Promise<DescribeAppMetricsDataResponse>;
    /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于创建日志下载任务

默认接口请求频率限制：20次/秒。
     */
    CreateLogExport(req: CreateLogExportRequest, cb?: (error: string, rep: CreateLogExportResponse) => void): Promise<CreateLogExportResponse>;
    /**
     * 获取DescribeDataSetUrlStatistics信息
     */
    DescribeDataSetUrlStatistics(req: DescribeDataSetUrlStatisticsRequest, cb?: (error: string, rep: DescribeDataSetUrlStatisticsResponse) => void): Promise<DescribeDataSetUrlStatisticsResponse>;
    /**
     * 修改 RUM 业务系统
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 新增修改限流
     */
    ModifyProjectLimit(req: ModifyProjectLimitRequest, cb?: (error: string, rep: ModifyProjectLimitResponse) => void): Promise<ModifyProjectLimitResponse>;
    /**
     * 获取DescribeDataStaticResource信息
     */
    DescribeDataStaticResource(req: DescribeDataStaticResourceRequest, cb?: (error: string, rep: DescribeDataStaticResourceResponse) => void): Promise<DescribeDataStaticResourceResponse>;
    /**
     * 获取应用上报抽样信息
     */
    DescribeProjectLimits(req: DescribeProjectLimitsRequest, cb?: (error: string, rep: DescribeProjectLimitsResponse) => void): Promise<DescribeProjectLimitsResponse>;
    /**
     * 用于查询 app 监控多维分析数据
     */
    DescribeAppDimensionMetrics(req: DescribeAppDimensionMetricsRequest, cb?: (error: string, rep: DescribeAppDimensionMetricsResponse) => void): Promise<DescribeAppDimensionMetricsResponse>;
    /**
     * 获取DescribeDataCustomUrl信息
     */
    DescribeDataCustomUrl(req: DescribeDataCustomUrlRequest, cb?: (error: string, rep: DescribeDataCustomUrlResponse) => void): Promise<DescribeDataCustomUrlResponse>;
    /**
     * 创建白名单
     */
    CreateWhitelist(req: CreateWhitelistRequest, cb?: (error: string, rep: CreateWhitelistResponse) => void): Promise<CreateWhitelistResponse>;
    /**
     * 获取项目列表（实例创建的团队下的项目列表）
     */
    DescribeProjects(req: DescribeProjectsRequest, cb?: (error: string, rep: DescribeProjectsResponse) => void): Promise<DescribeProjectsResponse>;
    /**
     * 恢复应用使用与上报数据
     */
    ResumeProject(req: ResumeProjectRequest, cb?: (error: string, rep: ResumeProjectResponse) => void): Promise<ResumeProjectResponse>;
    /**
     * 停止项目使用与上报数据
     */
    StopProject(req: StopProjectRequest, cb?: (error: string, rep: StopProjectResponse) => void): Promise<StopProjectResponse>;
    /**
     * 个人用户添加星标项目
     */
    CreateStarProject(req: CreateStarProjectRequest, cb?: (error: string, rep: CreateStarProjectResponse) => void): Promise<CreateStarProjectResponse>;
    /**
     * 删除白名单
     */
    DeleteWhitelist(req: DeleteWhitelistRequest, cb?: (error: string, rep: DeleteWhitelistResponse) => void): Promise<DeleteWhitelistResponse>;
    /**
     * 创建 RUM 业务系统
     */
    CreateTawInstance(req: CreateTawInstanceRequest, cb?: (error: string, rep: CreateTawInstanceResponse) => void): Promise<CreateTawInstanceResponse>;
    /**
     * 停止实例
     */
    StopInstance(req: StopInstanceRequest, cb?: (error: string, rep: StopInstanceResponse) => void): Promise<StopInstanceResponse>;
    /**
     * 修改 RUM 应用信息
     */
    ModifyProject(req: ModifyProjectRequest, cb?: (error: string, rep: ModifyProjectResponse) => void): Promise<ModifyProjectResponse>;
    /**
     * 获取应用对应sourcemap文件列表
     */
    DescribeReleaseFiles(req: DescribeReleaseFilesRequest, cb?: (error: string, rep: DescribeReleaseFilesResponse) => void): Promise<DescribeReleaseFilesResponse>;
    /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于删除日志下载任务

默认接口请求频率限制：20次/秒。
     */
    DeleteLogExport(req: DeleteLogExportRequest, cb?: (error: string, rep: DeleteLogExportResponse) => void): Promise<DeleteLogExportResponse>;
    /**
     * 获取白名单列表
     */
    DescribeWhitelists(req: DescribeWhitelistsRequest, cb?: (error: string, rep: DescribeWhitelistsResponse) => void): Promise<DescribeWhitelistsResponse>;
    /**
     * 获取DescribeDataEventUrl信息
     */
    DescribeDataEventUrl(req: DescribeDataEventUrlRequest, cb?: (error: string, rep: DescribeDataEventUrlResponse) => void): Promise<DescribeDataEventUrlResponse>;
    /**
     * 删除对应的离线日志记录
     */
    DeleteOfflineLogRecord(req: DeleteOfflineLogRecordRequest, cb?: (error: string, rep: DeleteOfflineLogRecordResponse) => void): Promise<DeleteOfflineLogRecordResponse>;
    /**
     * 获取设置的离线日志监听配置 - 返回设置的用户唯一标识
     */
    DescribeOfflineLogConfigs(req: DescribeOfflineLogConfigsRequest, cb?: (error: string, rep: DescribeOfflineLogConfigsResponse) => void): Promise<DescribeOfflineLogConfigsResponse>;
    /**
     * 获取上传文件存储的临时密钥
     */
    DescribeReleaseFileSign(req: DescribeReleaseFileSignRequest, cb?: (error: string, rep: DescribeReleaseFileSignResponse) => void): Promise<DescribeReleaseFileSignResponse>;
    /**
     * 获取loginfo信息
     */
    DescribeDataLogUrlInfo(req: DescribeDataLogUrlInfoRequest, cb?: (error: string, rep: DescribeDataLogUrlInfoResponse) => void): Promise<DescribeDataLogUrlInfoResponse>;
    /**
     * 创建 RUM 应用（归属于某个团队）
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 获取项目上报量
     */
    DescribeDataReportCount(req: DescribeDataReportCountRequest, cb?: (error: string, rep: DescribeDataReportCountResponse) => void): Promise<DescribeDataReportCountResponse>;
    /**
     * 获取PvUrlInfo信息
     */
    DescribeDataPvUrlInfo(req: DescribeDataPvUrlInfoRequest, cb?: (error: string, rep: DescribeDataPvUrlInfoResponse) => void): Promise<DescribeDataPvUrlInfoResponse>;
    /**
     * 获取DescribeDataStaticProject信息
     */
    DescribeDataStaticProject(req: DescribeDataStaticProjectRequest, cb?: (error: string, rep: DescribeDataStaticProjectResponse) => void): Promise<DescribeDataStaticProjectResponse>;
    /**
     * 删除给定的 rum 的项目
     */
    DeleteProject(req: DeleteProjectRequest, cb?: (error: string, rep: DeleteProjectResponse) => void): Promise<DeleteProjectResponse>;
    /**
     * 获取所有离线日志记录(最多100条)
     */
    DescribeOfflineLogRecords(req: DescribeOfflineLogRecordsRequest, cb?: (error: string, rep: DescribeOfflineLogRecordsResponse) => void): Promise<DescribeOfflineLogRecordsResponse>;
    /**
     * 获取项目下的UV列表
     */
    DescribeUvList(req: DescribeUvListRequest, cb?: (error: string, rep: DescribeUvListResponse) => void): Promise<DescribeUvListResponse>;
    /**
     * 获取DescribeDataFetchProject信息。已下线，请使用DescribeDataFetchUrl
     */
    DescribeDataFetchProject(req: DescribeDataFetchProjectRequest, cb?: (error: string, rep: DescribeDataFetchProjectResponse) => void): Promise<DescribeDataFetchProjectResponse>;
    /**
     * 将对应 sourcemap 文件删除
     */
    DeleteReleaseFile(req: DeleteReleaseFileRequest, cb?: (error: string, rep: DeleteReleaseFileResponse) => void): Promise<DeleteReleaseFileResponse>;
    /**
     * 创建离线日志监听，对应用户的离线日志将上报
     */
    CreateOfflineLogConfig(req: CreateOfflineLogConfigRequest, cb?: (error: string, rep: CreateOfflineLogConfigResponse) => void): Promise<CreateOfflineLogConfigResponse>;
    /**
     * 获取DescribeDataFetchUrl信息
     */
    DescribeDataFetchUrl(req: DescribeDataFetchUrlRequest, cb?: (error: string, rep: DescribeDataFetchUrlResponse) => void): Promise<DescribeDataFetchUrlResponse>;
    /**
     * 转发monitor查询
     */
    DescribeData(req: DescribeDataRequest, cb?: (error: string, rep: DescribeDataResponse) => void): Promise<DescribeDataResponse>;
}

import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateTawInstanceRequest, DescribeDataFetchProjectRequest, DescribeDataResponse, CreateTawInstanceResponse, DeleteProjectRequest, DescribeProjectLimitsResponse, DescribeTawInstancesRequest, DeleteOfflineLogConfigResponse, DescribeDataPvUrlInfoResponse, DescribeDataFetchUrlResponse, DescribeErrorRequest, StopInstanceRequest, ModifyInstanceRequest, DescribeLogListRequest, DescribeErrorResponse, DeleteWhitelistResponse, CreateLogExportRequest, DescribePvListResponse, DescribeOfflineLogsRequest, DescribeScoresRequest, DescribeDataReportCountRequest, DeleteOfflineLogRecordRequest, DescribeReleaseFilesRequest, CreateReleaseFileRequest, DeleteOfflineLogRecordResponse, DescribeDataCustomUrlRequest, DescribeUvListResponse, CreateProjectRequest, DescribeDataStaticUrlRequest, ModifyInstanceResponse, DescribeOfflineLogRecordsResponse, DeleteStarProjectRequest, DescribeWhitelistsRequest, DescribeLogExportsResponse, DescribeUvListRequest, DescribeTawAreasResponse, DescribeDataRequest, CreateOfflineLogConfigResponse, ModifyProjectLimitRequest, DeleteInstanceResponse, DescribeDataPerformancePageRequest, DeleteReleaseFileRequest, ResumeInstanceRequest, DescribeDataFetchUrlRequest, DescribeDataLogUrlStatisticsResponse, CreateProjectResponse, StopInstanceResponse, DescribeProjectLimitsRequest, CreateStarProjectResponse, DeleteProjectResponse, DescribeOfflineLogRecordsRequest, DescribeDataPvUrlStatisticsRequest, ModifyProjectLimitResponse, DescribeDataStaticProjectRequest, DeleteLogExportRequest, DescribeWhitelistsResponse, CreateWhitelistRequest, DescribeDataPvUrlStatisticsResponse, DescribeDataLogUrlInfoRequest, DescribeDataCustomUrlResponse, DescribeDataSetUrlStatisticsRequest, DescribeDataPerformanceProjectResponse, DescribeDataFetchUrlInfoResponse, ResumeInstanceResponse, DescribeDataStaticProjectResponse, CreateStarProjectRequest, DescribeReleaseFileSignRequest, DeleteWhitelistRequest, DescribeDataLogUrlInfoResponse, DeleteReleaseFileResponse, DescribeScoresResponse, DescribeOfflineLogConfigsResponse, DeleteLogExportResponse, DescribeReleaseFileSignResponse, DescribeOfflineLogsResponse, DescribeTawAreasRequest, DescribeDataLogUrlStatisticsRequest, DeleteStarProjectResponse, DescribeDataPerformancePageResponse, DeleteInstanceRequest, DescribeDataStaticResourceResponse, DescribeDataEventUrlResponse, DescribeDataWebVitalsPageRequest, DescribeDataFetchUrlInfoRequest, DescribeLogListResponse, DescribeReleaseFilesResponse, CreateOfflineLogConfigRequest, DescribeDataStaticUrlResponse, CreateWhitelistResponse, DescribeDataWebVitalsPageResponse, DescribeProjectsRequest, DescribeDataEventUrlRequest, DescribeOfflineLogConfigsRequest, DeleteOfflineLogConfigRequest, DescribeProjectsResponse, ModifyProjectResponse, DescribeLogExportsRequest, DescribeDataReportCountResponse, DescribeDataPerformanceProjectRequest, ModifyProjectRequest, DescribeDataStaticResourceRequest, DescribeTawInstancesResponse, DescribePvListRequest, DescribeDataPvUrlInfoRequest, CreateReleaseFileResponse, CreateLogExportResponse, DescribeDataFetchProjectResponse, DescribeDataSetUrlStatisticsResponse } from "./rum_models";
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
     * 创建对应项目的文件记录
     */
    CreateReleaseFile(req: CreateReleaseFileRequest, cb?: (error: string, rep: CreateReleaseFileResponse) => void): Promise<CreateReleaseFileResponse>;
    /**
     * 获取首页分数列表
     */
    DescribeScores(req: DescribeScoresRequest, cb?: (error: string, rep: DescribeScoresResponse) => void): Promise<DescribeScoresResponse>;
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
     * 获取DescribeDataFetchProject信息
     */
    DescribeDataFetchProject(req: DescribeDataFetchProjectRequest, cb?: (error: string, rep: DescribeDataFetchProjectResponse) => void): Promise<DescribeDataFetchProjectResponse>;
    /**
     * 删除实例，谨慎操作，不可恢复
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 删除用户名下的星标项目
     */
    DeleteStarProject(req: DeleteStarProjectRequest, cb?: (error: string, rep: DeleteStarProjectResponse) => void): Promise<DeleteStarProjectResponse>;
    /**
     * 恢复实例
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
     * 获取项目下的日志列表（实例创建的项目下的日志列表）
     */
    DescribeLogList(req: DescribeLogListRequest, cb?: (error: string, rep: DescribeLogListResponse) => void): Promise<DescribeLogListResponse>;
    /**
     * 获取对应离线日志
     */
    DescribeOfflineLogs(req: DescribeOfflineLogsRequest, cb?: (error: string, rep: DescribeOfflineLogsResponse) => void): Promise<DescribeOfflineLogsResponse>;
    /**
     * 创建Rum实例
     */
    CreateTawInstance(req: CreateTawInstanceRequest, cb?: (error: string, rep: CreateTawInstanceResponse) => void): Promise<CreateTawInstanceResponse>;
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
     * 新增修改限流
     */
    ModifyProjectLimit(req: ModifyProjectLimitRequest, cb?: (error: string, rep: ModifyProjectLimitResponse) => void): Promise<ModifyProjectLimitResponse>;
    /**
     * 获取DescribeDataPvUrlStatistics信息
     */
    DescribeDataPvUrlStatistics(req: DescribeDataPvUrlStatisticsRequest, cb?: (error: string, rep: DescribeDataPvUrlStatisticsResponse) => void): Promise<DescribeDataPvUrlStatisticsResponse>;
    /**
     * 获取上传文件存储的临时密钥
     */
    DescribeReleaseFileSign(req: DescribeReleaseFileSignRequest, cb?: (error: string, rep: DescribeReleaseFileSignResponse) => void): Promise<DescribeReleaseFileSignResponse>;
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
     * 修改实例信息
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 获取DescribeDataStaticResource信息
     */
    DescribeDataStaticResource(req: DescribeDataStaticResourceRequest, cb?: (error: string, rep: DescribeDataStaticResourceResponse) => void): Promise<DescribeDataStaticResourceResponse>;
    /**
     * 获取项目上报率列表
     */
    DescribeProjectLimits(req: DescribeProjectLimitsRequest, cb?: (error: string, rep: DescribeProjectLimitsResponse) => void): Promise<DescribeProjectLimitsResponse>;
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
     * 个人用户添加星标项目
     */
    CreateStarProject(req: CreateStarProjectRequest, cb?: (error: string, rep: CreateStarProjectResponse) => void): Promise<CreateStarProjectResponse>;
    /**
     * 删除白名单
     */
    DeleteWhitelist(req: DeleteWhitelistRequest, cb?: (error: string, rep: DeleteWhitelistResponse) => void): Promise<DeleteWhitelistResponse>;
    /**
     * 获取DescribeDataFetchUrlInfo信息
     */
    DescribeDataFetchUrlInfo(req: DescribeDataFetchUrlInfoRequest, cb?: (error: string, rep: DescribeDataFetchUrlInfoResponse) => void): Promise<DescribeDataFetchUrlInfoResponse>;
    /**
     * 停止实例
     */
    StopInstance(req: StopInstanceRequest, cb?: (error: string, rep: StopInstanceResponse) => void): Promise<StopInstanceResponse>;
    /**
     * 修改 rum 项目信息
     */
    ModifyProject(req: ModifyProjectRequest, cb?: (error: string, rep: ModifyProjectResponse) => void): Promise<ModifyProjectResponse>;
    /**
     * 获取项目对应sourcemap文件列表
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
     * 获取loginfo信息
     */
    DescribeDataLogUrlInfo(req: DescribeDataLogUrlInfoRequest, cb?: (error: string, rep: DescribeDataLogUrlInfoResponse) => void): Promise<DescribeDataLogUrlInfoResponse>;
    /**
     * 创建项目（归属于某个团队）
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
     * 删除 rum 离线日志监听 - 对应用户的离线日志将不会上报
     */
    DeleteOfflineLogConfig(req: DeleteOfflineLogConfigRequest, cb?: (error: string, rep: DeleteOfflineLogConfigResponse) => void): Promise<DeleteOfflineLogConfigResponse>;
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

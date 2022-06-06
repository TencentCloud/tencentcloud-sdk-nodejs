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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const CreateTawInstanceRequest = models.CreateTawInstanceRequest;
const DescribeDataFetchProjectRequest = models.DescribeDataFetchProjectRequest;
const DescribeDataResponse = models.DescribeDataResponse;
const CreateTawInstanceResponse = models.CreateTawInstanceResponse;
const DeleteProjectRequest = models.DeleteProjectRequest;
const DescribeProjectLimitsResponse = models.DescribeProjectLimitsResponse;
const DescribeTawInstancesRequest = models.DescribeTawInstancesRequest;
const DeleteOfflineLogConfigResponse = models.DeleteOfflineLogConfigResponse;
const DescribeDataPvUrlInfoResponse = models.DescribeDataPvUrlInfoResponse;
const DescribeDataFetchUrlResponse = models.DescribeDataFetchUrlResponse;
const DescribeErrorRequest = models.DescribeErrorRequest;
const StopInstanceRequest = models.StopInstanceRequest;
const ModifyInstanceRequest = models.ModifyInstanceRequest;
const DescribeLogListRequest = models.DescribeLogListRequest;
const DescribeErrorResponse = models.DescribeErrorResponse;
const DeleteWhitelistResponse = models.DeleteWhitelistResponse;
const CreateLogExportRequest = models.CreateLogExportRequest;
const DescribePvListResponse = models.DescribePvListResponse;
const RumUvInfo = models.RumUvInfo;
const DescribeOfflineLogsRequest = models.DescribeOfflineLogsRequest;
const DescribeScoresRequest = models.DescribeScoresRequest;
const DescribeDataReportCountRequest = models.DescribeDataReportCountRequest;
const DeleteOfflineLogRecordRequest = models.DeleteOfflineLogRecordRequest;
const DescribeReleaseFilesRequest = models.DescribeReleaseFilesRequest;
const CreateReleaseFileRequest = models.CreateReleaseFileRequest;
const DeleteOfflineLogRecordResponse = models.DeleteOfflineLogRecordResponse;
const DescribeDataCustomUrlRequest = models.DescribeDataCustomUrlRequest;
const DescribeUvListResponse = models.DescribeUvListResponse;
const Tag = models.Tag;
const CreateProjectRequest = models.CreateProjectRequest;
const DescribeDataStaticUrlRequest = models.DescribeDataStaticUrlRequest;
const ModifyInstanceResponse = models.ModifyInstanceResponse;
const DescribeOfflineLogRecordsResponse = models.DescribeOfflineLogRecordsResponse;
const DeleteStarProjectRequest = models.DeleteStarProjectRequest;
const DescribeWhitelistsRequest = models.DescribeWhitelistsRequest;
const DescribeLogExportsResponse = models.DescribeLogExportsResponse;
const DescribeUvListRequest = models.DescribeUvListRequest;
const DescribeTawAreasResponse = models.DescribeTawAreasResponse;
const DescribeDataRequest = models.DescribeDataRequest;
const CreateOfflineLogConfigResponse = models.CreateOfflineLogConfigResponse;
const ModifyProjectLimitRequest = models.ModifyProjectLimitRequest;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DescribeDataPerformancePageRequest = models.DescribeDataPerformancePageRequest;
const DeleteReleaseFileRequest = models.DeleteReleaseFileRequest;
const ResumeInstanceRequest = models.ResumeInstanceRequest;
const DescribeDataFetchUrlRequest = models.DescribeDataFetchUrlRequest;
const DescribeDataLogUrlStatisticsResponse = models.DescribeDataLogUrlStatisticsResponse;
const CreateProjectResponse = models.CreateProjectResponse;
const StopInstanceResponse = models.StopInstanceResponse;
const DescribeProjectLimitsRequest = models.DescribeProjectLimitsRequest;
const CreateStarProjectResponse = models.CreateStarProjectResponse;
const DeleteProjectResponse = models.DeleteProjectResponse;
const DescribeOfflineLogRecordsRequest = models.DescribeOfflineLogRecordsRequest;
const DescribeDataPvUrlStatisticsRequest = models.DescribeDataPvUrlStatisticsRequest;
const ReleaseFile = models.ReleaseFile;
const ModifyProjectLimitResponse = models.ModifyProjectLimitResponse;
const DescribeDataStaticProjectRequest = models.DescribeDataStaticProjectRequest;
const ProjectLimit = models.ProjectLimit;
const DeleteLogExportRequest = models.DeleteLogExportRequest;
const DescribeWhitelistsResponse = models.DescribeWhitelistsResponse;
const CreateWhitelistRequest = models.CreateWhitelistRequest;
const DescribeDataPvUrlStatisticsResponse = models.DescribeDataPvUrlStatisticsResponse;
const DescribeDataLogUrlInfoRequest = models.DescribeDataLogUrlInfoRequest;
const DescribeDataCustomUrlResponse = models.DescribeDataCustomUrlResponse;
const RumAreaInfo = models.RumAreaInfo;
const DescribeDataSetUrlStatisticsRequest = models.DescribeDataSetUrlStatisticsRequest;
const DescribeDataPerformanceProjectResponse = models.DescribeDataPerformanceProjectResponse;
const DescribeDataFetchUrlInfoResponse = models.DescribeDataFetchUrlInfoResponse;
const ResumeInstanceResponse = models.ResumeInstanceResponse;
const DescribeDataStaticProjectResponse = models.DescribeDataStaticProjectResponse;
const CreateStarProjectRequest = models.CreateStarProjectRequest;
const DescribeReleaseFileSignRequest = models.DescribeReleaseFileSignRequest;
const DeleteWhitelistRequest = models.DeleteWhitelistRequest;
const DescribeDataLogUrlInfoResponse = models.DescribeDataLogUrlInfoResponse;
const RumPvInfo = models.RumPvInfo;
const DeleteReleaseFileResponse = models.DeleteReleaseFileResponse;
const DescribeScoresResponse = models.DescribeScoresResponse;
const DescribeOfflineLogConfigsResponse = models.DescribeOfflineLogConfigsResponse;
const DeleteLogExportResponse = models.DeleteLogExportResponse;
const DescribeReleaseFileSignResponse = models.DescribeReleaseFileSignResponse;
const DescribeOfflineLogsResponse = models.DescribeOfflineLogsResponse;
const DescribeTawAreasRequest = models.DescribeTawAreasRequest;
const Filter = models.Filter;
const DescribeDataLogUrlStatisticsRequest = models.DescribeDataLogUrlStatisticsRequest;
const DeleteStarProjectResponse = models.DeleteStarProjectResponse;
const DescribeDataPerformancePageResponse = models.DescribeDataPerformancePageResponse;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const LogExport = models.LogExport;
const DescribeDataStaticResourceResponse = models.DescribeDataStaticResourceResponse;
const DescribeDataEventUrlResponse = models.DescribeDataEventUrlResponse;
const DescribeDataWebVitalsPageRequest = models.DescribeDataWebVitalsPageRequest;
const DescribeDataFetchUrlInfoRequest = models.DescribeDataFetchUrlInfoRequest;
const DescribeLogListResponse = models.DescribeLogListResponse;
const DescribeReleaseFilesResponse = models.DescribeReleaseFilesResponse;
const CreateOfflineLogConfigRequest = models.CreateOfflineLogConfigRequest;
const DescribeDataStaticUrlResponse = models.DescribeDataStaticUrlResponse;
const CreateWhitelistResponse = models.CreateWhitelistResponse;
const ScoreInfo = models.ScoreInfo;
const DescribeDataWebVitalsPageResponse = models.DescribeDataWebVitalsPageResponse;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const DescribeDataEventUrlRequest = models.DescribeDataEventUrlRequest;
const DescribeOfflineLogConfigsRequest = models.DescribeOfflineLogConfigsRequest;
const DeleteOfflineLogConfigRequest = models.DeleteOfflineLogConfigRequest;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const ModifyProjectResponse = models.ModifyProjectResponse;
const DescribeLogExportsRequest = models.DescribeLogExportsRequest;
const DescribeDataReportCountResponse = models.DescribeDataReportCountResponse;
const DescribeDataPerformanceProjectRequest = models.DescribeDataPerformanceProjectRequest;
const ModifyProjectRequest = models.ModifyProjectRequest;
const DescribeDataStaticResourceRequest = models.DescribeDataStaticResourceRequest;
const DescribeTawInstancesResponse = models.DescribeTawInstancesResponse;
const DescribePvListRequest = models.DescribePvListRequest;
const DescribeDataPvUrlInfoRequest = models.DescribeDataPvUrlInfoRequest;
const CreateReleaseFileResponse = models.CreateReleaseFileResponse;
const CreateLogExportResponse = models.CreateLogExportResponse;
const DescribeDataFetchProjectResponse = models.DescribeDataFetchProjectResponse;
const Whitelist = models.Whitelist;
const RumProject = models.RumProject;
const DescribeDataSetUrlStatisticsResponse = models.DescribeDataSetUrlStatisticsResponse;
const RumInstanceInfo = models.RumInstanceInfo;


/**
 * rum client
 * @class
 */
class RumClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("rum.tencentcloudapi.com", "2021-06-22", credential, region, profile);
    }
    
    /**
     * 查询片区信息
     * @param {DescribeTawAreasRequest} req
     * @param {function(string, DescribeTawAreasResponse):void} cb
     * @public
     */
    DescribeTawAreas(req, cb) {
        let resp = new DescribeTawAreasResponse();
        this.request("DescribeTawAreas", req, resp, cb);
    }

    /**
     * 创建对应项目的文件记录
     * @param {CreateReleaseFileRequest} req
     * @param {function(string, CreateReleaseFileResponse):void} cb
     * @public
     */
    CreateReleaseFile(req, cb) {
        let resp = new CreateReleaseFileResponse();
        this.request("CreateReleaseFile", req, resp, cb);
    }

    /**
     * 获取首页分数列表
     * @param {DescribeScoresRequest} req
     * @param {function(string, DescribeScoresResponse):void} cb
     * @public
     */
    DescribeScores(req, cb) {
        let resp = new DescribeScoresResponse();
        this.request("DescribeScores", req, resp, cb);
    }

    /**
     * 查询实例信息
     * @param {DescribeTawInstancesRequest} req
     * @param {function(string, DescribeTawInstancesResponse):void} cb
     * @public
     */
    DescribeTawInstances(req, cb) {
        let resp = new DescribeTawInstancesResponse();
        this.request("DescribeTawInstances", req, resp, cb);
    }

    /**
     * 获取PerformancePage信息
     * @param {DescribeDataPerformancePageRequest} req
     * @param {function(string, DescribeDataPerformancePageResponse):void} cb
     * @public
     */
    DescribeDataPerformancePage(req, cb) {
        let resp = new DescribeDataPerformancePageResponse();
        this.request("DescribeDataPerformancePage", req, resp, cb);
    }

    /**
     * 获取LogUrlStatistics信息
     * @param {DescribeDataLogUrlStatisticsRequest} req
     * @param {function(string, DescribeDataLogUrlStatisticsResponse):void} cb
     * @public
     */
    DescribeDataLogUrlStatistics(req, cb) {
        let resp = new DescribeDataLogUrlStatisticsResponse();
        this.request("DescribeDataLogUrlStatistics", req, resp, cb);
    }

    /**
     * 获取DescribeDataFetchProject信息
     * @param {DescribeDataFetchProjectRequest} req
     * @param {function(string, DescribeDataFetchProjectResponse):void} cb
     * @public
     */
    DescribeDataFetchProject(req, cb) {
        let resp = new DescribeDataFetchProjectResponse();
        this.request("DescribeDataFetchProject", req, resp, cb);
    }

    /**
     * 删除实例，谨慎操作，不可恢复
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * 删除用户名下的星标项目
     * @param {DeleteStarProjectRequest} req
     * @param {function(string, DeleteStarProjectResponse):void} cb
     * @public
     */
    DeleteStarProject(req, cb) {
        let resp = new DeleteStarProjectResponse();
        this.request("DeleteStarProject", req, resp, cb);
    }

    /**
     * 恢复实例
     * @param {ResumeInstanceRequest} req
     * @param {function(string, ResumeInstanceResponse):void} cb
     * @public
     */
    ResumeInstance(req, cb) {
        let resp = new ResumeInstanceResponse();
        this.request("ResumeInstance", req, resp, cb);
    }

    /**
     * 获取PerformanceProject信息
     * @param {DescribeDataPerformanceProjectRequest} req
     * @param {function(string, DescribeDataPerformanceProjectResponse):void} cb
     * @public
     */
    DescribeDataPerformanceProject(req, cb) {
        let resp = new DescribeDataPerformanceProjectResponse();
        this.request("DescribeDataPerformanceProject", req, resp, cb);
    }

    /**
     * 获取首页错误信息
     * @param {DescribeErrorRequest} req
     * @param {function(string, DescribeErrorResponse):void} cb
     * @public
     */
    DescribeError(req, cb) {
        let resp = new DescribeErrorResponse();
        this.request("DescribeError", req, resp, cb);
    }

    /**
     * 获取项目下的日志列表（实例创建的项目下的日志列表）
     * @param {DescribeLogListRequest} req
     * @param {function(string, DescribeLogListResponse):void} cb
     * @public
     */
    DescribeLogList(req, cb) {
        let resp = new DescribeLogListResponse();
        this.request("DescribeLogList", req, resp, cb);
    }

    /**
     * 获取对应离线日志
     * @param {DescribeOfflineLogsRequest} req
     * @param {function(string, DescribeOfflineLogsResponse):void} cb
     * @public
     */
    DescribeOfflineLogs(req, cb) {
        let resp = new DescribeOfflineLogsResponse();
        this.request("DescribeOfflineLogs", req, resp, cb);
    }

    /**
     * 创建Rum实例
     * @param {CreateTawInstanceRequest} req
     * @param {function(string, CreateTawInstanceResponse):void} cb
     * @public
     */
    CreateTawInstance(req, cb) {
        let resp = new CreateTawInstanceResponse();
        this.request("CreateTawInstance", req, resp, cb);
    }

    /**
     * 获取项目下的PV列表
     * @param {DescribePvListRequest} req
     * @param {function(string, DescribePvListResponse):void} cb
     * @public
     */
    DescribePvList(req, cb) {
        let resp = new DescribePvListResponse();
        this.request("DescribePvList", req, resp, cb);
    }

    /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于获取日志下载任务列表

默认接口请求频率限制：20次/秒
     * @param {DescribeLogExportsRequest} req
     * @param {function(string, DescribeLogExportsResponse):void} cb
     * @public
     */
    DescribeLogExports(req, cb) {
        let resp = new DescribeLogExportsResponse();
        this.request("DescribeLogExports", req, resp, cb);
    }

    /**
     * 获取DescribeDataWebVitalsPage信息，用户核心活动信息
页面加载性能之Web Vitals。性能关键点
     * @param {DescribeDataWebVitalsPageRequest} req
     * @param {function(string, DescribeDataWebVitalsPageResponse):void} cb
     * @public
     */
    DescribeDataWebVitalsPage(req, cb) {
        let resp = new DescribeDataWebVitalsPageResponse();
        this.request("DescribeDataWebVitalsPage", req, resp, cb);
    }

    /**
     * 获取DescribeDataStaticUrl信息
     * @param {DescribeDataStaticUrlRequest} req
     * @param {function(string, DescribeDataStaticUrlResponse):void} cb
     * @public
     */
    DescribeDataStaticUrl(req, cb) {
        let resp = new DescribeDataStaticUrlResponse();
        this.request("DescribeDataStaticUrl", req, resp, cb);
    }

    /**
     * 新增修改限流
     * @param {ModifyProjectLimitRequest} req
     * @param {function(string, ModifyProjectLimitResponse):void} cb
     * @public
     */
    ModifyProjectLimit(req, cb) {
        let resp = new ModifyProjectLimitResponse();
        this.request("ModifyProjectLimit", req, resp, cb);
    }

    /**
     * 获取DescribeDataPvUrlStatistics信息
     * @param {DescribeDataPvUrlStatisticsRequest} req
     * @param {function(string, DescribeDataPvUrlStatisticsResponse):void} cb
     * @public
     */
    DescribeDataPvUrlStatistics(req, cb) {
        let resp = new DescribeDataPvUrlStatisticsResponse();
        this.request("DescribeDataPvUrlStatistics", req, resp, cb);
    }

    /**
     * 获取上传文件存储的临时密钥
     * @param {DescribeReleaseFileSignRequest} req
     * @param {function(string, DescribeReleaseFileSignResponse):void} cb
     * @public
     */
    DescribeReleaseFileSign(req, cb) {
        let resp = new DescribeReleaseFileSignResponse();
        this.request("DescribeReleaseFileSign", req, resp, cb);
    }

    /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于创建日志下载任务

默认接口请求频率限制：20次/秒。
     * @param {CreateLogExportRequest} req
     * @param {function(string, CreateLogExportResponse):void} cb
     * @public
     */
    CreateLogExport(req, cb) {
        let resp = new CreateLogExportResponse();
        this.request("CreateLogExport", req, resp, cb);
    }

    /**
     * 获取DescribeDataSetUrlStatistics信息
     * @param {DescribeDataSetUrlStatisticsRequest} req
     * @param {function(string, DescribeDataSetUrlStatisticsResponse):void} cb
     * @public
     */
    DescribeDataSetUrlStatistics(req, cb) {
        let resp = new DescribeDataSetUrlStatisticsResponse();
        this.request("DescribeDataSetUrlStatistics", req, resp, cb);
    }

    /**
     * 修改实例信息
     * @param {ModifyInstanceRequest} req
     * @param {function(string, ModifyInstanceResponse):void} cb
     * @public
     */
    ModifyInstance(req, cb) {
        let resp = new ModifyInstanceResponse();
        this.request("ModifyInstance", req, resp, cb);
    }

    /**
     * 获取DescribeDataStaticResource信息
     * @param {DescribeDataStaticResourceRequest} req
     * @param {function(string, DescribeDataStaticResourceResponse):void} cb
     * @public
     */
    DescribeDataStaticResource(req, cb) {
        let resp = new DescribeDataStaticResourceResponse();
        this.request("DescribeDataStaticResource", req, resp, cb);
    }

    /**
     * 获取项目上报率列表
     * @param {DescribeProjectLimitsRequest} req
     * @param {function(string, DescribeProjectLimitsResponse):void} cb
     * @public
     */
    DescribeProjectLimits(req, cb) {
        let resp = new DescribeProjectLimitsResponse();
        this.request("DescribeProjectLimits", req, resp, cb);
    }

    /**
     * 获取DescribeDataCustomUrl信息
     * @param {DescribeDataCustomUrlRequest} req
     * @param {function(string, DescribeDataCustomUrlResponse):void} cb
     * @public
     */
    DescribeDataCustomUrl(req, cb) {
        let resp = new DescribeDataCustomUrlResponse();
        this.request("DescribeDataCustomUrl", req, resp, cb);
    }

    /**
     * 创建白名单
     * @param {CreateWhitelistRequest} req
     * @param {function(string, CreateWhitelistResponse):void} cb
     * @public
     */
    CreateWhitelist(req, cb) {
        let resp = new CreateWhitelistResponse();
        this.request("CreateWhitelist", req, resp, cb);
    }

    /**
     * 获取项目列表（实例创建的团队下的项目列表）
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * 个人用户添加星标项目
     * @param {CreateStarProjectRequest} req
     * @param {function(string, CreateStarProjectResponse):void} cb
     * @public
     */
    CreateStarProject(req, cb) {
        let resp = new CreateStarProjectResponse();
        this.request("CreateStarProject", req, resp, cb);
    }

    /**
     * 删除白名单
     * @param {DeleteWhitelistRequest} req
     * @param {function(string, DeleteWhitelistResponse):void} cb
     * @public
     */
    DeleteWhitelist(req, cb) {
        let resp = new DeleteWhitelistResponse();
        this.request("DeleteWhitelist", req, resp, cb);
    }

    /**
     * 获取DescribeDataFetchUrlInfo信息
     * @param {DescribeDataFetchUrlInfoRequest} req
     * @param {function(string, DescribeDataFetchUrlInfoResponse):void} cb
     * @public
     */
    DescribeDataFetchUrlInfo(req, cb) {
        let resp = new DescribeDataFetchUrlInfoResponse();
        this.request("DescribeDataFetchUrlInfo", req, resp, cb);
    }

    /**
     * 停止实例
     * @param {StopInstanceRequest} req
     * @param {function(string, StopInstanceResponse):void} cb
     * @public
     */
    StopInstance(req, cb) {
        let resp = new StopInstanceResponse();
        this.request("StopInstance", req, resp, cb);
    }

    /**
     * 修改 rum 项目信息
     * @param {ModifyProjectRequest} req
     * @param {function(string, ModifyProjectResponse):void} cb
     * @public
     */
    ModifyProject(req, cb) {
        let resp = new ModifyProjectResponse();
        this.request("ModifyProject", req, resp, cb);
    }

    /**
     * 获取项目对应sourcemap文件列表
     * @param {DescribeReleaseFilesRequest} req
     * @param {function(string, DescribeReleaseFilesResponse):void} cb
     * @public
     */
    DescribeReleaseFiles(req, cb) {
        let resp = new DescribeReleaseFilesResponse();
        this.request("DescribeReleaseFiles", req, resp, cb);
    }

    /**
     * 接口请求域名： rum.tencentcloudapi.com 。

本接口用于删除日志下载任务

默认接口请求频率限制：20次/秒。
     * @param {DeleteLogExportRequest} req
     * @param {function(string, DeleteLogExportResponse):void} cb
     * @public
     */
    DeleteLogExport(req, cb) {
        let resp = new DeleteLogExportResponse();
        this.request("DeleteLogExport", req, resp, cb);
    }

    /**
     * 获取白名单列表
     * @param {DescribeWhitelistsRequest} req
     * @param {function(string, DescribeWhitelistsResponse):void} cb
     * @public
     */
    DescribeWhitelists(req, cb) {
        let resp = new DescribeWhitelistsResponse();
        this.request("DescribeWhitelists", req, resp, cb);
    }

    /**
     * 获取DescribeDataEventUrl信息
     * @param {DescribeDataEventUrlRequest} req
     * @param {function(string, DescribeDataEventUrlResponse):void} cb
     * @public
     */
    DescribeDataEventUrl(req, cb) {
        let resp = new DescribeDataEventUrlResponse();
        this.request("DescribeDataEventUrl", req, resp, cb);
    }

    /**
     * 删除对应的离线日志记录
     * @param {DeleteOfflineLogRecordRequest} req
     * @param {function(string, DeleteOfflineLogRecordResponse):void} cb
     * @public
     */
    DeleteOfflineLogRecord(req, cb) {
        let resp = new DeleteOfflineLogRecordResponse();
        this.request("DeleteOfflineLogRecord", req, resp, cb);
    }

    /**
     * 获取设置的离线日志监听配置 - 返回设置的用户唯一标识
     * @param {DescribeOfflineLogConfigsRequest} req
     * @param {function(string, DescribeOfflineLogConfigsResponse):void} cb
     * @public
     */
    DescribeOfflineLogConfigs(req, cb) {
        let resp = new DescribeOfflineLogConfigsResponse();
        this.request("DescribeOfflineLogConfigs", req, resp, cb);
    }

    /**
     * 获取loginfo信息
     * @param {DescribeDataLogUrlInfoRequest} req
     * @param {function(string, DescribeDataLogUrlInfoResponse):void} cb
     * @public
     */
    DescribeDataLogUrlInfo(req, cb) {
        let resp = new DescribeDataLogUrlInfoResponse();
        this.request("DescribeDataLogUrlInfo", req, resp, cb);
    }

    /**
     * 创建项目（归属于某个团队）
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * 获取项目上报量
     * @param {DescribeDataReportCountRequest} req
     * @param {function(string, DescribeDataReportCountResponse):void} cb
     * @public
     */
    DescribeDataReportCount(req, cb) {
        let resp = new DescribeDataReportCountResponse();
        this.request("DescribeDataReportCount", req, resp, cb);
    }

    /**
     * 获取PvUrlInfo信息
     * @param {DescribeDataPvUrlInfoRequest} req
     * @param {function(string, DescribeDataPvUrlInfoResponse):void} cb
     * @public
     */
    DescribeDataPvUrlInfo(req, cb) {
        let resp = new DescribeDataPvUrlInfoResponse();
        this.request("DescribeDataPvUrlInfo", req, resp, cb);
    }

    /**
     * 获取DescribeDataStaticProject信息
     * @param {DescribeDataStaticProjectRequest} req
     * @param {function(string, DescribeDataStaticProjectResponse):void} cb
     * @public
     */
    DescribeDataStaticProject(req, cb) {
        let resp = new DescribeDataStaticProjectResponse();
        this.request("DescribeDataStaticProject", req, resp, cb);
    }

    /**
     * 删除给定的 rum 的项目
     * @param {DeleteProjectRequest} req
     * @param {function(string, DeleteProjectResponse):void} cb
     * @public
     */
    DeleteProject(req, cb) {
        let resp = new DeleteProjectResponse();
        this.request("DeleteProject", req, resp, cb);
    }

    /**
     * 获取所有离线日志记录(最多100条)
     * @param {DescribeOfflineLogRecordsRequest} req
     * @param {function(string, DescribeOfflineLogRecordsResponse):void} cb
     * @public
     */
    DescribeOfflineLogRecords(req, cb) {
        let resp = new DescribeOfflineLogRecordsResponse();
        this.request("DescribeOfflineLogRecords", req, resp, cb);
    }

    /**
     * 获取项目下的UV列表
     * @param {DescribeUvListRequest} req
     * @param {function(string, DescribeUvListResponse):void} cb
     * @public
     */
    DescribeUvList(req, cb) {
        let resp = new DescribeUvListResponse();
        this.request("DescribeUvList", req, resp, cb);
    }

    /**
     * 删除 rum 离线日志监听 - 对应用户的离线日志将不会上报
     * @param {DeleteOfflineLogConfigRequest} req
     * @param {function(string, DeleteOfflineLogConfigResponse):void} cb
     * @public
     */
    DeleteOfflineLogConfig(req, cb) {
        let resp = new DeleteOfflineLogConfigResponse();
        this.request("DeleteOfflineLogConfig", req, resp, cb);
    }

    /**
     * 将对应 sourcemap 文件删除
     * @param {DeleteReleaseFileRequest} req
     * @param {function(string, DeleteReleaseFileResponse):void} cb
     * @public
     */
    DeleteReleaseFile(req, cb) {
        let resp = new DeleteReleaseFileResponse();
        this.request("DeleteReleaseFile", req, resp, cb);
    }

    /**
     * 创建离线日志监听，对应用户的离线日志将上报
     * @param {CreateOfflineLogConfigRequest} req
     * @param {function(string, CreateOfflineLogConfigResponse):void} cb
     * @public
     */
    CreateOfflineLogConfig(req, cb) {
        let resp = new CreateOfflineLogConfigResponse();
        this.request("CreateOfflineLogConfig", req, resp, cb);
    }

    /**
     * 获取DescribeDataFetchUrl信息
     * @param {DescribeDataFetchUrlRequest} req
     * @param {function(string, DescribeDataFetchUrlResponse):void} cb
     * @public
     */
    DescribeDataFetchUrl(req, cb) {
        let resp = new DescribeDataFetchUrlResponse();
        this.request("DescribeDataFetchUrl", req, resp, cb);
    }

    /**
     * 转发monitor查询
     * @param {DescribeDataRequest} req
     * @param {function(string, DescribeDataResponse):void} cb
     * @public
     */
    DescribeData(req, cb) {
        let resp = new DescribeDataResponse();
        this.request("DescribeData", req, resp, cb);
    }


}
module.exports = RumClient;

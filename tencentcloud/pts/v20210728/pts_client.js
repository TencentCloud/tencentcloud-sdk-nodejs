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
const DescribeCronJobsRequest = models.DescribeCronJobsRequest;
const UpdateJobRequest = models.UpdateJobRequest;
const UpdateCronJobResponse = models.UpdateCronJobResponse;
const DescribeSampleMatrixQueryResponse = models.DescribeSampleMatrixQueryResponse;
const DescribeSampleLogsRequest = models.DescribeSampleLogsRequest;
const DeleteJobsRequest = models.DeleteJobsRequest;
const Concurrency = models.Concurrency;
const AlertChannelRecord = models.AlertChannelRecord;
const DescribeAlertRecordsRequest = models.DescribeAlertRecordsRequest;
const DeleteAlertChannelResponse = models.DeleteAlertChannelResponse;
const DescribeLabelValuesRequest = models.DescribeLabelValuesRequest;
const AbortCronJobsResponse = models.AbortCronJobsResponse;
const DescribeRequestSummaryResponse = models.DescribeRequestSummaryResponse;
const DescribeScenarioWithJobsRequest = models.DescribeScenarioWithJobsRequest;
const CreateCronJobResponse = models.CreateCronJobResponse;
const RestartCronJobsResponse = models.RestartCronJobsResponse;
const SLAPolicy = models.SLAPolicy;
const DNSConfig = models.DNSConfig;
const ScriptInfo = models.ScriptInfo;
const NormalLog = models.NormalLog;
const UpdateProjectRequest = models.UpdateProjectRequest;
const AbortJobResponse = models.AbortJobResponse;
const Project = models.Project;
const UpdateScenarioRequest = models.UpdateScenarioRequest;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const Attributes = models.Attributes;
const UpdateScenarioResponse = models.UpdateScenarioResponse;
const CustomSample = models.CustomSample;
const CreateProjectRequest = models.CreateProjectRequest;
const AdjustJobSpeedRequest = models.AdjustJobSpeedRequest;
const DescribeRequestSummaryRequest = models.DescribeRequestSummaryRequest;
const HostAlias = models.HostAlias;
const CreateFileResponse = models.CreateFileResponse;
const DeleteProjectsResponse = models.DeleteProjectsResponse;
const GeoRegionsLoadItem = models.GeoRegionsLoadItem;
const LabelWithValues = models.LabelWithValues;
const Label = models.Label;
const ProtocolInfo = models.ProtocolInfo;
const VpcLoadDistribution = models.VpcLoadDistribution;
const SamplePair = models.SamplePair;
const CronJob = models.CronJob;
const DescribeLabelValuesResponse = models.DescribeLabelValuesResponse;
const InternalMetricQuery = models.InternalMetricQuery;
const Job = models.Job;
const DescribeAvailableMetricsRequest = models.DescribeAvailableMetricsRequest;
const CopyScenarioResponse = models.CopyScenarioResponse;
const DescribeSampleMatrixQueryRequest = models.DescribeSampleMatrixQueryRequest;
const GenerateTmpKeyResponse = models.GenerateTmpKeyResponse;
const Stage = models.Stage;
const DescribeFilesResponse = models.DescribeFilesResponse;
const DeleteProjectsRequest = models.DeleteProjectsRequest;
const UpdateFileScenarioRelationRequest = models.UpdateFileScenarioRelationRequest;
const ScenarioWithJobs = models.ScenarioWithJobs;
const DeleteJobsResponse = models.DeleteJobsResponse;
const TagSpec = models.TagSpec;
const AdjustJobSpeedResponse = models.AdjustJobSpeedResponse;
const CreateProjectResponse = models.CreateProjectResponse;
const DescribeSampleQueryRequest = models.DescribeSampleQueryRequest;
const DescribeSampleMatrixBatchQueryResponse = models.DescribeSampleMatrixBatchQueryResponse;
const SLALabel = models.SLALabel;
const AlertRecord = models.AlertRecord;
const RequestsPerSecond = models.RequestsPerSecond;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const DeleteScenariosResponse = models.DeleteScenariosResponse;
const DeleteFilesRequest = models.DeleteFilesRequest;
const CopyScenarioRequest = models.CopyScenarioRequest;
const TestData = models.TestData;
const SampleLog = models.SampleLog;
const DomainNameConfig = models.DomainNameConfig;
const DescribeNormalLogsResponse = models.DescribeNormalLogsResponse;
const Notification = models.Notification;
const DescribeSampleBatchQueryRequest = models.DescribeSampleBatchQueryRequest;
const RestartCronJobsRequest = models.RestartCronJobsRequest;
const DeleteScenariosRequest = models.DeleteScenariosRequest;
const CreateAlertChannelResponse = models.CreateAlertChannelResponse;
const MetricInfo = models.MetricInfo;
const CreateAlertChannelRequest = models.CreateAlertChannelRequest;
const AlertRecordStatus = models.AlertRecordStatus;
const DescribeAlertChannelsRequest = models.DescribeAlertChannelsRequest;
const SLARule = models.SLARule;
const DescribeAvailableMetricsResponse = models.DescribeAvailableMetricsResponse;
const DescribeMetricLabelWithValuesResponse = models.DescribeMetricLabelWithValuesResponse;
const LoadSpec = models.LoadSpec;
const AlertChannel = models.AlertChannel;
const ScriptOrigin = models.ScriptOrigin;
const ScenarioRelatedJobsParams = models.ScenarioRelatedJobsParams;
const Credentials = models.Credentials;
const DescribeAlertChannelsResponse = models.DescribeAlertChannelsResponse;
const CreateCronJobRequest = models.CreateCronJobRequest;
const CustomSampleMatrix = models.CustomSampleMatrix;
const UpdateJobResponse = models.UpdateJobResponse;
const DescribeCheckSummaryRequest = models.DescribeCheckSummaryRequest;
const Filter = models.Filter;
const DeleteFilesResponse = models.DeleteFilesResponse;
const AggregationLegend = models.AggregationLegend;
const LoadSource = models.LoadSource;
const FileInfo = models.FileInfo;
const Load = models.Load;
const CreateFileRequest = models.CreateFileRequest;
const RequestSummary = models.RequestSummary;
const DeleteCronJobsRequest = models.DeleteCronJobsRequest;
const DescribeSampleLogsResponse = models.DescribeSampleLogsResponse;
const DescribeCronJobsResponse = models.DescribeCronJobsResponse;
const DescribeNormalLogsRequest = models.DescribeNormalLogsRequest;
const DescribeJobsRequest = models.DescribeJobsRequest;
const DescribeFilesRequest = models.DescribeFilesRequest;
const AbortCronJobsRequest = models.AbortCronJobsRequest;
const DescribeSampleMatrixBatchQueryRequest = models.DescribeSampleMatrixBatchQueryRequest;
const DescribeAlertRecordsResponse = models.DescribeAlertRecordsResponse;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const DescribeSampleQueryResponse = models.DescribeSampleQueryResponse;
const CreateScenarioRequest = models.CreateScenarioRequest;
const DescribeMetricLabelWithValuesRequest = models.DescribeMetricLabelWithValuesRequest;
const Scenario = models.Scenario;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const UpdateCronJobRequest = models.UpdateCronJobRequest;
const RegionDetail = models.RegionDetail;
const SampleStream = models.SampleStream;
const DescribeCheckSummaryResponse = models.DescribeCheckSummaryResponse;
const DescribeScenariosRequest = models.DescribeScenariosRequest;
const DescribeScenariosResponse = models.DescribeScenariosResponse;
const CreateScenarioResponse = models.CreateScenarioResponse;
const AbortJobRequest = models.AbortJobRequest;
const CheckSummary = models.CheckSummary;
const NotificationHook = models.NotificationHook;
const DescribeJobsResponse = models.DescribeJobsResponse;
const GenerateTmpKeyRequest = models.GenerateTmpKeyRequest;
const DescribeSampleBatchQueryResponse = models.DescribeSampleBatchQueryResponse;
const StartJobResponse = models.StartJobResponse;
const MetricLabelWithValues = models.MetricLabelWithValues;
const DeleteCronJobsResponse = models.DeleteCronJobsResponse;
const StartJobRequest = models.StartJobRequest;
const DescribeScenarioWithJobsResponse = models.DescribeScenarioWithJobsResponse;
const ReactionTimeRange = models.ReactionTimeRange;
const File = models.File;
const DeleteAlertChannelRequest = models.DeleteAlertChannelRequest;
const UpdateProjectResponse = models.UpdateProjectResponse;
const UpdateFileScenarioRelationResponse = models.UpdateFileScenarioRelationResponse;


/**
 * pts client
 * @class
 */
class PtsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("pts.tencentcloudapi.com", "2021-07-28", credential, region, profile);
    }
    
    /**
     * 查询场景配置并附带已经执行的任务内容
     * @param {DescribeScenarioWithJobsRequest} req
     * @param {function(string, DescribeScenarioWithJobsResponse):void} cb
     * @public
     */
    DescribeScenarioWithJobs(req, cb) {
        let resp = new DescribeScenarioWithJobsResponse();
        this.request("DescribeScenarioWithJobs", req, resp, cb);
    }

    /**
     * 更新任务
     * @param {UpdateJobRequest} req
     * @param {function(string, UpdateJobResponse):void} cb
     * @public
     */
    UpdateJob(req, cb) {
        let resp = new UpdateJobResponse();
        this.request("UpdateJob", req, resp, cb);
    }

    /**
     * 更新定时任务
     * @param {UpdateCronJobRequest} req
     * @param {function(string, UpdateCronJobResponse):void} cb
     * @public
     */
    UpdateCronJob(req, cb) {
        let resp = new UpdateCronJobResponse();
        this.request("UpdateCronJob", req, resp, cb);
    }

    /**
     * 创建并启动任务
     * @param {StartJobRequest} req
     * @param {function(string, StartJobResponse):void} cb
     * @public
     */
    StartJob(req, cb) {
        let resp = new StartJobResponse();
        this.request("StartJob", req, resp, cb);
    }

    /**
     * 更新场景
     * @param {UpdateScenarioRequest} req
     * @param {function(string, UpdateScenarioResponse):void} cb
     * @public
     */
    UpdateScenario(req, cb) {
        let resp = new UpdateScenarioResponse();
        this.request("UpdateScenario", req, resp, cb);
    }

    /**
     * 查询文件列表
     * @param {DescribeFilesRequest} req
     * @param {function(string, DescribeFilesResponse):void} cb
     * @public
     */
    DescribeFiles(req, cb) {
        let resp = new DescribeFilesResponse();
        this.request("DescribeFiles", req, resp, cb);
    }

    /**
     * 删除项目
     * @param {DeleteProjectsRequest} req
     * @param {function(string, DeleteProjectsResponse):void} cb
     * @public
     */
    DeleteProjects(req, cb) {
        let resp = new DeleteProjectsResponse();
        this.request("DeleteProjects", req, resp, cb);
    }

    /**
     * 查询指标，返回固定时间点指标内容
     * @param {DescribeSampleQueryRequest} req
     * @param {function(string, DescribeSampleQueryResponse):void} cb
     * @public
     */
    DescribeSampleQuery(req, cb) {
        let resp = new DescribeSampleQueryResponse();
        this.request("DescribeSampleQuery", req, resp, cb);
    }

    /**
     * 查询任务列表
     * @param {DescribeJobsRequest} req
     * @param {function(string, DescribeJobsResponse):void} cb
     * @public
     */
    DescribeJobs(req, cb) {
        let resp = new DescribeJobsResponse();
        this.request("DescribeJobs", req, resp, cb);
    }

    /**
     * 创建场景
     * @param {CreateScenarioRequest} req
     * @param {function(string, CreateScenarioResponse):void} cb
     * @public
     */
    CreateScenario(req, cb) {
        let resp = new CreateScenarioResponse();
        this.request("CreateScenario", req, resp, cb);
    }

    /**
     * 删除文件
     * @param {DeleteFilesRequest} req
     * @param {function(string, DeleteFilesResponse):void} cb
     * @public
     */
    DeleteFiles(req, cb) {
        let resp = new DeleteFilesResponse();
        this.request("DeleteFiles", req, resp, cb);
    }

    /**
     * 查询检查点汇总信息
     * @param {DescribeCheckSummaryRequest} req
     * @param {function(string, DescribeCheckSummaryResponse):void} cb
     * @public
     */
    DescribeCheckSummary(req, cb) {
        let resp = new DescribeCheckSummaryResponse();
        this.request("DescribeCheckSummary", req, resp, cb);
    }

    /**
     * 批量查询指标矩阵
     * @param {DescribeSampleMatrixBatchQueryRequest} req
     * @param {function(string, DescribeSampleMatrixBatchQueryResponse):void} cb
     * @public
     */
    DescribeSampleMatrixBatchQuery(req, cb) {
        let resp = new DescribeSampleMatrixBatchQueryResponse();
        this.request("DescribeSampleMatrixBatchQuery", req, resp, cb);
    }

    /**
     * 查询指标矩阵
     * @param {DescribeSampleMatrixQueryRequest} req
     * @param {function(string, DescribeSampleMatrixQueryResponse):void} cb
     * @public
     */
    DescribeSampleMatrixQuery(req, cb) {
        let resp = new DescribeSampleMatrixQueryResponse();
        this.request("DescribeSampleMatrixQuery", req, resp, cb);
    }

    /**
     * 查询请求汇总信息
     * @param {DescribeRequestSummaryRequest} req
     * @param {function(string, DescribeRequestSummaryResponse):void} cb
     * @public
     */
    DescribeRequestSummary(req, cb) {
        let resp = new DescribeRequestSummaryResponse();
        this.request("DescribeRequestSummary", req, resp, cb);
    }

    /**
     * 删除场景
     * @param {DeleteScenariosRequest} req
     * @param {function(string, DeleteScenariosResponse):void} cb
     * @public
     */
    DeleteScenarios(req, cb) {
        let resp = new DeleteScenariosResponse();
        this.request("DeleteScenarios", req, resp, cb);
    }

    /**
     * 查询项目列表
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * 返回告警历史项的列表
     * @param {DescribeAlertRecordsRequest} req
     * @param {function(string, DescribeAlertRecordsResponse):void} cb
     * @public
     */
    DescribeAlertRecords(req, cb) {
        let resp = new DescribeAlertRecordsResponse();
        this.request("DescribeAlertRecords", req, resp, cb);
    }

    /**
     * 查询告警通知接收组
     * @param {DescribeAlertChannelsRequest} req
     * @param {function(string, DescribeAlertChannelsResponse):void} cb
     * @public
     */
    DescribeAlertChannels(req, cb) {
        let resp = new DescribeAlertChannelsResponse();
        this.request("DescribeAlertChannels", req, resp, cb);
    }

    /**
     * 查询系统支持的指标
     * @param {DescribeAvailableMetricsRequest} req
     * @param {function(string, DescribeAvailableMetricsResponse):void} cb
     * @public
     */
    DescribeAvailableMetrics(req, cb) {
        let resp = new DescribeAvailableMetricsResponse();
        this.request("DescribeAvailableMetrics", req, resp, cb);
    }

    /**
     * 查询标签内容
     * @param {DescribeLabelValuesRequest} req
     * @param {function(string, DescribeLabelValuesResponse):void} cb
     * @public
     */
    DescribeLabelValues(req, cb) {
        let resp = new DescribeLabelValuesResponse();
        this.request("DescribeLabelValues", req, resp, cb);
    }

    /**
     * 停止定时任务
     * @param {AbortCronJobsRequest} req
     * @param {function(string, AbortCronJobsResponse):void} cb
     * @public
     */
    AbortCronJobs(req, cb) {
        let resp = new AbortCronJobsResponse();
        this.request("AbortCronJobs", req, resp, cb);
    }

    /**
     * 更新关联文件场景
     * @param {UpdateFileScenarioRelationRequest} req
     * @param {function(string, UpdateFileScenarioRelationResponse):void} cb
     * @public
     */
    UpdateFileScenarioRelation(req, cb) {
        let resp = new UpdateFileScenarioRelationResponse();
        this.request("UpdateFileScenarioRelation", req, resp, cb);
    }

    /**
     * 重启状态为已中止的定时任务
     * @param {RestartCronJobsRequest} req
     * @param {function(string, RestartCronJobsResponse):void} cb
     * @public
     */
    RestartCronJobs(req, cb) {
        let resp = new RestartCronJobsResponse();
        this.request("RestartCronJobs", req, resp, cb);
    }

    /**
     * 创建告警通知接收组
     * @param {CreateAlertChannelRequest} req
     * @param {function(string, CreateAlertChannelResponse):void} cb
     * @public
     */
    CreateAlertChannel(req, cb) {
        let resp = new CreateAlertChannelResponse();
        this.request("CreateAlertChannel", req, resp, cb);
    }

    /**
     * 批量查询指标，返回固定时间点指标内容
     * @param {DescribeSampleBatchQueryRequest} req
     * @param {function(string, DescribeSampleBatchQueryResponse):void} cb
     * @public
     */
    DescribeSampleBatchQuery(req, cb) {
        let resp = new DescribeSampleBatchQueryResponse();
        this.request("DescribeSampleBatchQuery", req, resp, cb);
    }

    /**
     * 删除任务
     * @param {DeleteJobsRequest} req
     * @param {function(string, DeleteJobsResponse):void} cb
     * @public
     */
    DeleteJobs(req, cb) {
        let resp = new DeleteJobsResponse();
        this.request("DeleteJobs", req, resp, cb);
    }

    /**
     * 压测过程日志日志包括引擎输出日志及用户输出日志
     * @param {DescribeNormalLogsRequest} req
     * @param {function(string, DescribeNormalLogsResponse):void} cb
     * @public
     */
    DescribeNormalLogs(req, cb) {
        let resp = new DescribeNormalLogsResponse();
        this.request("DescribeNormalLogs", req, resp, cb);
    }

    /**
     * 查询地域列表
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 复制场景
     * @param {CopyScenarioRequest} req
     * @param {function(string, CopyScenarioResponse):void} cb
     * @public
     */
    CopyScenario(req, cb) {
        let resp = new CopyScenarioResponse();
        this.request("CopyScenario", req, resp, cb);
    }

    /**
     * 查询采样日志
     * @param {DescribeSampleLogsRequest} req
     * @param {function(string, DescribeSampleLogsResponse):void} cb
     * @public
     */
    DescribeSampleLogs(req, cb) {
        let resp = new DescribeSampleLogsResponse();
        this.request("DescribeSampleLogs", req, resp, cb);
    }

    /**
     * 查询场景列表
     * @param {DescribeScenariosRequest} req
     * @param {function(string, DescribeScenariosResponse):void} cb
     * @public
     */
    DescribeScenarios(req, cb) {
        let resp = new DescribeScenariosResponse();
        this.request("DescribeScenarios", req, resp, cb);
    }

    /**
     * 删除定时任务
     * @param {DeleteCronJobsRequest} req
     * @param {function(string, DeleteCronJobsResponse):void} cb
     * @public
     */
    DeleteCronJobs(req, cb) {
        let resp = new DeleteCronJobsResponse();
        this.request("DeleteCronJobs", req, resp, cb);
    }

    /**
     * 列出定时任务，非必填数组为空就默认全选
     * @param {DescribeCronJobsRequest} req
     * @param {function(string, DescribeCronJobsResponse):void} cb
     * @public
     */
    DescribeCronJobs(req, cb) {
        let resp = new DescribeCronJobsResponse();
        this.request("DescribeCronJobs", req, resp, cb);
    }

    /**
     * 删除告警通知接收组
     * @param {DeleteAlertChannelRequest} req
     * @param {function(string, DeleteAlertChannelResponse):void} cb
     * @public
     */
    DeleteAlertChannel(req, cb) {
        let resp = new DeleteAlertChannelResponse();
        this.request("DeleteAlertChannel", req, resp, cb);
    }

    /**
     * 创建文件
     * @param {CreateFileRequest} req
     * @param {function(string, CreateFileResponse):void} cb
     * @public
     */
    CreateFile(req, cb) {
        let resp = new CreateFileResponse();
        this.request("CreateFile", req, resp, cb);
    }

    /**
     * 调整任务的目标RPS
     * @param {AdjustJobSpeedRequest} req
     * @param {function(string, AdjustJobSpeedResponse):void} cb
     * @public
     */
    AdjustJobSpeed(req, cb) {
        let resp = new AdjustJobSpeedResponse();
        this.request("AdjustJobSpeed", req, resp, cb);
    }

    /**
     * 创建项目
     * @param {CreateProjectRequest} req
     * @param {function(string, CreateProjectResponse):void} cb
     * @public
     */
    CreateProject(req, cb) {
        let resp = new CreateProjectResponse();
        this.request("CreateProject", req, resp, cb);
    }

    /**
     * 停止任务
     * @param {AbortJobRequest} req
     * @param {function(string, AbortJobResponse):void} cb
     * @public
     */
    AbortJob(req, cb) {
        let resp = new AbortJobResponse();
        this.request("AbortJob", req, resp, cb);
    }

    /**
     * 更新项目
     * @param {UpdateProjectRequest} req
     * @param {function(string, UpdateProjectResponse):void} cb
     * @public
     */
    UpdateProject(req, cb) {
        let resp = new UpdateProjectResponse();
        this.request("UpdateProject", req, resp, cb);
    }

    /**
     * 生成临时COS凭证
     * @param {GenerateTmpKeyRequest} req
     * @param {function(string, GenerateTmpKeyResponse):void} cb
     * @public
     */
    GenerateTmpKey(req, cb) {
        let resp = new GenerateTmpKeyResponse();
        this.request("GenerateTmpKey", req, resp, cb);
    }

    /**
     * 查询指标所有的label及values值
     * @param {DescribeMetricLabelWithValuesRequest} req
     * @param {function(string, DescribeMetricLabelWithValuesResponse):void} cb
     * @public
     */
    DescribeMetricLabelWithValues(req, cb) {
        let resp = new DescribeMetricLabelWithValuesResponse();
        this.request("DescribeMetricLabelWithValues", req, resp, cb);
    }

    /**
     * 创建定时任务
     * @param {CreateCronJobRequest} req
     * @param {function(string, CreateCronJobResponse):void} cb
     * @public
     */
    CreateCronJob(req, cb) {
        let resp = new CreateCronJobResponse();
        this.request("CreateCronJob", req, resp, cb);
    }


}
module.exports = PtsClient;

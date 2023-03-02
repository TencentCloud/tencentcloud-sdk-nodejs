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
const SchemaSpaceTimeSeries = models.SchemaSpaceTimeSeries;
const RedisKeySpaceData = models.RedisKeySpaceData;
const HealthReportTask = models.HealthReportTask;
const CreateDBDiagReportTaskRequest = models.CreateDBDiagReportTaskRequest;
const TableSpaceTimeSeries = models.TableSpaceTimeSeries;
const DescribeTopSpaceTablesRequest = models.DescribeTopSpaceTablesRequest;
const ScoreItem = models.ScoreItem;
const InstanceConfs = models.InstanceConfs;
const CreateSecurityAuditLogExportTaskRequest = models.CreateSecurityAuditLogExportTaskRequest;
const DescribeDBDiagEventResponse = models.DescribeDBDiagEventResponse;
const DescribeDBDiagEventsResponse = models.DescribeDBDiagEventsResponse;
const DescribeDBDiagReportTasksResponse = models.DescribeDBDiagReportTasksResponse;
const AddUserContactResponse = models.AddUserContactResponse;
const CancelKillTaskResponse = models.CancelKillTaskResponse;
const DescribeRedisTopBigKeysResponse = models.DescribeRedisTopBigKeysResponse;
const DescribeSqlTemplateRequest = models.DescribeSqlTemplateRequest;
const DescribeTopSpaceSchemaTimeSeriesResponse = models.DescribeTopSpaceSchemaTimeSeriesResponse;
const SlowLogTopSqlItem = models.SlowLogTopSqlItem;
const DescribeNoPrimaryKeyTablesResponse = models.DescribeNoPrimaryKeyTablesResponse;
const DiagHistoryEventItem = models.DiagHistoryEventItem;
const DescribeProxySessionKillTasksRequest = models.DescribeProxySessionKillTasksRequest;
const DescribeMySqlProcessListResponse = models.DescribeMySqlProcessListResponse;
const SessionItem = models.SessionItem;
const HealthStatus = models.HealthStatus;
const DescribeTopSpaceTablesResponse = models.DescribeTopSpaceTablesResponse;
const TaskInfo = models.TaskInfo;
const ModifySqlFiltersResponse = models.ModifySqlFiltersResponse;
const KillMySqlThreadsResponse = models.KillMySqlThreadsResponse;
const CreateSchedulerMailProfileRequest = models.CreateSchedulerMailProfileRequest;
const ContactItem = models.ContactItem;
const DescribeDBSpaceStatusRequest = models.DescribeDBSpaceStatusRequest;
const TimeSlice = models.TimeSlice;
const ModifyDiagDBInstanceConfRequest = models.ModifyDiagDBInstanceConfRequest;
const DescribeSecurityAuditLogDownloadUrlsRequest = models.DescribeSecurityAuditLogDownloadUrlsRequest;
const CreateDBDiagReportTaskResponse = models.CreateDBDiagReportTaskResponse;
const ProcessStatistic = models.ProcessStatistic;
const CreateMailProfileResponse = models.CreateMailProfileResponse;
const DescribeSlowLogTimeSeriesStatsRequest = models.DescribeSlowLogTimeSeriesStatsRequest;
const CancelKillTaskRequest = models.CancelKillTaskRequest;
const MySqlProcess = models.MySqlProcess;
const DescribeDBDiagHistoryRequest = models.DescribeDBDiagHistoryRequest;
const CreateKillTaskResponse = models.CreateKillTaskResponse;
const DeleteSqlFiltersResponse = models.DeleteSqlFiltersResponse;
const DescribeDBDiagEventsRequest = models.DescribeDBDiagEventsRequest;
const CreateDBDiagReportUrlResponse = models.CreateDBDiagReportUrlResponse;
const CreateKillTaskRequest = models.CreateKillTaskRequest;
const DescribeProxyProcessStatisticsResponse = models.DescribeProxyProcessStatisticsResponse;
const SlowLogHost = models.SlowLogHost;
const CreateMailProfileRequest = models.CreateMailProfileRequest;
const MonitorFloatMetricSeriesData = models.MonitorFloatMetricSeriesData;
const MailConfiguration = models.MailConfiguration;
const VerifyUserAccountRequest = models.VerifyUserAccountRequest;
const DescribeSlowLogUserHostStatsResponse = models.DescribeSlowLogUserHostStatsResponse;
const TableSpaceData = models.TableSpaceData;
const EventInfo = models.EventInfo;
const DescribeMailProfileRequest = models.DescribeMailProfileRequest;
const DeleteSecurityAuditLogExportTasksResponse = models.DeleteSecurityAuditLogExportTasksResponse;
const KillMySqlThreadsRequest = models.KillMySqlThreadsRequest;
const DescribeSqlFiltersResponse = models.DescribeSqlFiltersResponse;
const CreateDBDiagReportUrlRequest = models.CreateDBDiagReportUrlRequest;
const DescribeSecurityAuditLogExportTasksResponse = models.DescribeSecurityAuditLogExportTasksResponse;
const DescribeRedisTopKeyPrefixListRequest = models.DescribeRedisTopKeyPrefixListRequest;
const DescribeSqlTemplateResponse = models.DescribeSqlTemplateResponse;
const HealthScoreInfo = models.HealthScoreInfo;
const DescribeTopSpaceTableTimeSeriesResponse = models.DescribeTopSpaceTableTimeSeriesResponse;
const DescribeDBDiagHistoryResponse = models.DescribeDBDiagHistoryResponse;
const DescribeDBDiagEventRequest = models.DescribeDBDiagEventRequest;
const ModifySqlFiltersRequest = models.ModifySqlFiltersRequest;
const DescribeAllUserContactResponse = models.DescribeAllUserContactResponse;
const MonitorMetric = models.MonitorMetric;
const ProfileInfo = models.ProfileInfo;
const UserProfile = models.UserProfile;
const AddUserContactRequest = models.AddUserContactRequest;
const CreateSqlFilterRequest = models.CreateSqlFilterRequest;
const InstanceBasicInfo = models.InstanceBasicInfo;
const SchemaSpaceData = models.SchemaSpaceData;
const DescribeAllUserContactRequest = models.DescribeAllUserContactRequest;
const DescribeDiagDBInstancesRequest = models.DescribeDiagDBInstancesRequest;
const DescribeNoPrimaryKeyTablesRequest = models.DescribeNoPrimaryKeyTablesRequest;
const InstanceInfo = models.InstanceInfo;
const CreateSqlFilterResponse = models.CreateSqlFilterResponse;
const VerifyUserAccountResponse = models.VerifyUserAccountResponse;
const DescribeSqlFiltersRequest = models.DescribeSqlFiltersRequest;
const DescribeSecurityAuditLogExportTasksRequest = models.DescribeSecurityAuditLogExportTasksRequest;
const DeleteSecurityAuditLogExportTasksRequest = models.DeleteSecurityAuditLogExportTasksRequest;
const CreateSchedulerMailProfileResponse = models.CreateSchedulerMailProfileResponse;
const DescribeTopSpaceSchemaTimeSeriesRequest = models.DescribeTopSpaceSchemaTimeSeriesRequest;
const DescribeSlowLogTopSqlsRequest = models.DescribeSlowLogTopSqlsRequest;
const DescribeMailProfileResponse = models.DescribeMailProfileResponse;
const DescribeRedisTopBigKeysRequest = models.DescribeRedisTopBigKeysRequest;
const DescribeHealthScoreRequest = models.DescribeHealthScoreRequest;
const IssueTypeInfo = models.IssueTypeInfo;
const DescribeDiagDBInstancesResponse = models.DescribeDiagDBInstancesResponse;
const DescribeAllUserGroupRequest = models.DescribeAllUserGroupRequest;
const CreateProxySessionKillTaskRequest = models.CreateProxySessionKillTaskRequest;
const CreateSecurityAuditLogExportTaskResponse = models.CreateSecurityAuditLogExportTaskResponse;
const SchemaItem = models.SchemaItem;
const DescribeSlowLogUserHostStatsRequest = models.DescribeSlowLogUserHostStatsRequest;
const DescribeTopSpaceSchemasResponse = models.DescribeTopSpaceSchemasResponse;
const CreateProxySessionKillTaskResponse = models.CreateProxySessionKillTaskResponse;
const DescribeSlowLogTimeSeriesStatsResponse = models.DescribeSlowLogTimeSeriesStatsResponse;
const DescribeProxyProcessStatisticsRequest = models.DescribeProxyProcessStatisticsRequest;
const MonitorFloatMetric = models.MonitorFloatMetric;
const DescribeRedisTopKeyPrefixListResponse = models.DescribeRedisTopKeyPrefixListResponse;
const DescribeAllUserGroupResponse = models.DescribeAllUserGroupResponse;
const ModifyDiagDBInstanceConfResponse = models.ModifyDiagDBInstanceConfResponse;
const DescribeUserSqlAdviceResponse = models.DescribeUserSqlAdviceResponse;
const DescribeDBSpaceStatusResponse = models.DescribeDBSpaceStatusResponse;
const SQLFilter = models.SQLFilter;
const GroupItem = models.GroupItem;
const RedisPreKeySpaceData = models.RedisPreKeySpaceData;
const DescribeTopSpaceTableTimeSeriesRequest = models.DescribeTopSpaceTableTimeSeriesRequest;
const DescribeDBDiagReportTasksRequest = models.DescribeDBDiagReportTasksRequest;
const MonitorMetricSeriesData = models.MonitorMetricSeriesData;
const SecLogExportTaskInfo = models.SecLogExportTaskInfo;
const DescribeHealthScoreResponse = models.DescribeHealthScoreResponse;
const ScoreDetail = models.ScoreDetail;
const DescribeTopSpaceSchemasRequest = models.DescribeTopSpaceSchemasRequest;
const DescribeSlowLogTopSqlsResponse = models.DescribeSlowLogTopSqlsResponse;
const DeleteSqlFiltersRequest = models.DeleteSqlFiltersRequest;
const DescribeUserSqlAdviceRequest = models.DescribeUserSqlAdviceRequest;
const Table = models.Table;
const DescribeMySqlProcessListRequest = models.DescribeMySqlProcessListRequest;
const DescribeSecurityAuditLogDownloadUrlsResponse = models.DescribeSecurityAuditLogDownloadUrlsResponse;
const DescribeProxySessionKillTasksResponse = models.DescribeProxySessionKillTasksResponse;


/**
 * dbbrain client
 * @class
 */
class DbbrainClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dbbrain.tencentcloudapi.com", "2021-05-27", credential, region, profile);
    }
    
    /**
     * 查询安全审计日志导出文件下载链接。目前日志文件下载仅提供腾讯云内网地址，请通过广州地域的腾讯云服务器进行下载。
     * @param {DescribeSecurityAuditLogDownloadUrlsRequest} req
     * @param {function(string, DescribeSecurityAuditLogDownloadUrlsResponse):void} cb
     * @public
     */
    DescribeSecurityAuditLogDownloadUrls(req, cb) {
        let resp = new DescribeSecurityAuditLogDownloadUrlsResponse();
        this.request("DescribeSecurityAuditLogDownloadUrls", req, resp, cb);
    }

    /**
     * 获取发送邮件的配置， 包括数据库巡检的邮件配置以及定期生成健康报告的邮件发送配置。
     * @param {DescribeMailProfileRequest} req
     * @param {function(string, DescribeMailProfileResponse):void} cb
     * @public
     */
    DescribeMailProfile(req, cb) {
        let resp = new DescribeMailProfileResponse();
        this.request("DescribeMailProfile", req, resp, cb);
    }

    /**
     * 该接口用于创建定期生成健康报告并邮件发送的配置，将健康报告的定期生成时间作为参数传入（周一至周日），用于设置健康报告的定期生成时间，同时保存相应的定期邮件发送的配置。
     * @param {CreateSchedulerMailProfileRequest} req
     * @param {function(string, CreateSchedulerMailProfileResponse):void} cb
     * @public
     */
    CreateSchedulerMailProfile(req, cb) {
        let resp = new CreateSchedulerMailProfileResponse();
        this.request("CreateSchedulerMailProfile", req, resp, cb);
    }

    /**
     * 查询SQL模板。
     * @param {DescribeSqlTemplateRequest} req
     * @param {function(string, DescribeSqlTemplateResponse):void} cb
     * @public
     */
    DescribeSqlTemplate(req, cb) {
        let resp = new DescribeSqlTemplateResponse();
        this.request("DescribeSqlTemplate", req, resp, cb);
    }

    /**
     * 获取实例Top库的实时空间统计信息，默认返回按大小排序。
     * @param {DescribeTopSpaceSchemasRequest} req
     * @param {function(string, DescribeTopSpaceSchemasResponse):void} cb
     * @public
     */
    DescribeTopSpaceSchemas(req, cb) {
        let resp = new DescribeTopSpaceSchemasResponse();
        this.request("DescribeTopSpaceSchemas", req, resp, cb);
    }

    /**
     * 查询关系型数据库的实时线程列表。
     * @param {DescribeMySqlProcessListRequest} req
     * @param {function(string, DescribeMySqlProcessListResponse):void} cb
     * @public
     */
    DescribeMySqlProcessList(req, cb) {
        let resp = new DescribeMySqlProcessListResponse();
        this.request("DescribeMySqlProcessList", req, resp, cb);
    }

    /**
     * 创建邮件配置。其中入参ProfileType表示所创建配置的类型，ProfileType 取值包括：dbScan_mail_configuration（数据库巡检邮件配置）、scheduler_mail_configuration（定期生成健康报告的邮件发送配置）。Region统一选择广州，和实例所属地域无关。
     * @param {CreateMailProfileRequest} req
     * @param {function(string, CreateMailProfileResponse):void} cb
     * @public
     */
    CreateMailProfile(req, cb) {
        let resp = new CreateMailProfileResponse();
        this.request("CreateMailProfile", req, resp, cb);
    }

    /**
     * 查询健康报告生成任务列表。
     * @param {DescribeDBDiagReportTasksRequest} req
     * @param {function(string, DescribeDBDiagReportTasksResponse):void} cb
     * @public
     */
    DescribeDBDiagReportTasks(req, cb) {
        let resp = new DescribeDBDiagReportTasksResponse();
        this.request("DescribeDBDiagReportTasks", req, resp, cb);
    }

    /**
     * 获取邮件发送联系组的相关信息。
     * @param {DescribeAllUserGroupRequest} req
     * @param {function(string, DescribeAllUserGroupResponse):void} cb
     * @public
     */
    DescribeAllUserGroup(req, cb) {
        let resp = new DescribeAllUserGroupResponse();
        this.request("DescribeAllUserGroup", req, resp, cb);
    }

    /**
     * 获取指定时间段内的诊断事件列表，支持依据风险等级、实例ID等条件过滤。
     * @param {DescribeDBDiagEventsRequest} req
     * @param {function(string, DescribeDBDiagEventsResponse):void} cb
     * @public
     */
    DescribeDBDiagEvents(req, cb) {
        let resp = new DescribeDBDiagEventsResponse();
        this.request("DescribeDBDiagEvents", req, resp, cb);
    }

    /**
     * 获取慢日志统计柱状图。
     * @param {DescribeSlowLogTimeSeriesStatsRequest} req
     * @param {function(string, DescribeSlowLogTimeSeriesStatsResponse):void} cb
     * @public
     */
    DescribeSlowLogTimeSeriesStats(req, cb) {
        let resp = new DescribeSlowLogTimeSeriesStatsResponse();
        this.request("DescribeSlowLogTimeSeriesStats", req, resp, cb);
    }

    /**
     * 获取慢日志来源地址统计分布图。
     * @param {DescribeSlowLogUserHostStatsRequest} req
     * @param {function(string, DescribeSlowLogUserHostStatsResponse):void} cb
     * @public
     */
    DescribeSlowLogUserHostStats(req, cb) {
        let resp = new DescribeSlowLogUserHostStatsResponse();
        this.request("DescribeSlowLogUserHostStats", req, resp, cb);
    }

    /**
     * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
     * @param {DescribeSlowLogTopSqlsRequest} req
     * @param {function(string, DescribeSlowLogTopSqlsResponse):void} cb
     * @public
     */
    DescribeSlowLogTopSqls(req, cb) {
        let resp = new DescribeSlowLogTopSqlsResponse();
        this.request("DescribeSlowLogTopSqls", req, resp, cb);
    }

    /**
     * 创建实例SQL限流任务。
     * @param {CreateSqlFilterRequest} req
     * @param {function(string, CreateSqlFilterResponse):void} cb
     * @public
     */
    CreateSqlFilter(req, cb) {
        let resp = new CreateSqlFilterResponse();
        this.request("CreateSqlFilter", req, resp, cb);
    }

    /**
     * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
     * @param {DescribeDBSpaceStatusRequest} req
     * @param {function(string, DescribeDBSpaceStatusResponse):void} cb
     * @public
     */
    DescribeDBSpaceStatus(req, cb) {
        let resp = new DescribeDBSpaceStatusResponse();
        this.request("DescribeDBSpaceStatus", req, resp, cb);
    }

    /**
     * 创建中止所有代理节点连接会话的异步任务。当前仅支持 Redis。得到的返回值为异步任务 id，可以作为参数传入接口 DescribeProxySessionKillTasks 查询kill会话任务执行状态。
     * @param {CreateProxySessionKillTaskRequest} req
     * @param {function(string, CreateProxySessionKillTaskResponse):void} cb
     * @public
     */
    CreateProxySessionKillTask(req, cb) {
        let resp = new CreateProxySessionKillTaskResponse();
        this.request("CreateProxySessionKillTask", req, resp, cb);
    }

    /**
     * 根据实例ID获取指定时间段（30分钟）的健康得分，以及异常扣分项。
     * @param {DescribeHealthScoreRequest} req
     * @param {function(string, DescribeHealthScoreResponse):void} cb
     * @public
     */
    DescribeHealthScore(req, cb) {
        let resp = new DescribeHealthScoreResponse();
        this.request("DescribeHealthScore", req, resp, cb);
    }

    /**
     * 终止中断会话任务。
     * @param {CancelKillTaskRequest} req
     * @param {function(string, CancelKillTaskResponse):void} cb
     * @public
     */
    CancelKillTask(req, cb) {
        let resp = new CancelKillTaskResponse();
        this.request("CancelKillTask", req, resp, cb);
    }

    /**
     * 创建安全审计日志导出任务。
     * @param {CreateSecurityAuditLogExportTaskRequest} req
     * @param {function(string, CreateSecurityAuditLogExportTaskResponse):void} cb
     * @public
     */
    CreateSecurityAuditLogExportTask(req, cb) {
        let resp = new CreateSecurityAuditLogExportTaskResponse();
        this.request("CreateSecurityAuditLogExportTask", req, resp, cb);
    }

    /**
     * 获取SQL优化建议。【产品用户回馈，此接口限免开放，后续将并入dbbrain专业版】
     * @param {DescribeUserSqlAdviceRequest} req
     * @param {function(string, DescribeUserSqlAdviceResponse):void} cb
     * @public
     */
    DescribeUserSqlAdvice(req, cb) {
        let resp = new DescribeUserSqlAdviceResponse();
        this.request("DescribeUserSqlAdvice", req, resp, cb);
    }

    /**
     * 删除安全审计日志导出任务。
     * @param {DeleteSecurityAuditLogExportTasksRequest} req
     * @param {function(string, DeleteSecurityAuditLogExportTasksResponse):void} cb
     * @public
     */
    DeleteSecurityAuditLogExportTasks(req, cb) {
        let resp = new DeleteSecurityAuditLogExportTasksResponse();
        this.request("DeleteSecurityAuditLogExportTasks", req, resp, cb);
    }

    /**
     * 更改实例限流任务状态，目前仅用于终止限流。
     * @param {ModifySqlFiltersRequest} req
     * @param {function(string, ModifySqlFiltersResponse):void} cb
     * @public
     */
    ModifySqlFilters(req, cb) {
        let resp = new ModifySqlFiltersResponse();
        this.request("ModifySqlFilters", req, resp, cb);
    }

    /**
     * 查询redis实例大key列表。
     * @param {DescribeRedisTopBigKeysRequest} req
     * @param {function(string, DescribeRedisTopBigKeysResponse):void} cb
     * @public
     */
    DescribeRedisTopBigKeys(req, cb) {
        let resp = new DescribeRedisTopBigKeysResponse();
        this.request("DescribeRedisTopBigKeys", req, resp, cb);
    }

    /**
     * 查询安全审计日志导出任务列表。
     * @param {DescribeSecurityAuditLogExportTasksRequest} req
     * @param {function(string, DescribeSecurityAuditLogExportTasksResponse):void} cb
     * @public
     */
    DescribeSecurityAuditLogExportTasks(req, cb) {
        let resp = new DescribeSecurityAuditLogExportTasksResponse();
        this.request("DescribeSecurityAuditLogExportTasks", req, resp, cb);
    }

    /**
     * 获取邮件发送中联系人的相关信息。
     * @param {DescribeAllUserContactRequest} req
     * @param {function(string, DescribeAllUserContactResponse):void} cb
     * @public
     */
    DescribeAllUserContact(req, cb) {
        let resp = new DescribeAllUserContactResponse();
        this.request("DescribeAllUserContact", req, resp, cb);
    }

    /**
     * 查询redis实例top key前缀列表。
     * @param {DescribeRedisTopKeyPrefixListRequest} req
     * @param {function(string, DescribeRedisTopKeyPrefixListResponse):void} cb
     * @public
     */
    DescribeRedisTopKeyPrefixList(req, cb) {
        let resp = new DescribeRedisTopKeyPrefixListResponse();
        this.request("DescribeRedisTopKeyPrefixList", req, resp, cb);
    }

    /**
     * 获取实例异常诊断事件的详情信息。
     * @param {DescribeDBDiagEventRequest} req
     * @param {function(string, DescribeDBDiagEventResponse):void} cb
     * @public
     */
    DescribeDBDiagEvent(req, cb) {
        let resp = new DescribeDBDiagEventResponse();
        this.request("DescribeDBDiagEvent", req, resp, cb);
    }

    /**
     * 获取实例诊断事件的列表。
     * @param {DescribeDBDiagHistoryRequest} req
     * @param {function(string, DescribeDBDiagHistoryResponse):void} cb
     * @public
     */
    DescribeDBDiagHistory(req, cb) {
        let resp = new DescribeDBDiagHistoryResponse();
        this.request("DescribeDBDiagHistory", req, resp, cb);
    }

    /**
     * 获取当前实例下的单个proxy的会话统计详情信息， 返回数据为单个 proxy 的会话统计信息。【注意】该接口仅限部分环境调用。
     * @param {DescribeProxyProcessStatisticsRequest} req
     * @param {function(string, DescribeProxyProcessStatisticsResponse):void} cb
     * @public
     */
    DescribeProxyProcessStatistics(req, cb) {
        let resp = new DescribeProxyProcessStatisticsResponse();
        this.request("DescribeProxyProcessStatistics", req, resp, cb);
    }

    /**
     * 创建健康报告，并可以选择是否发送邮件。
     * @param {CreateDBDiagReportTaskRequest} req
     * @param {function(string, CreateDBDiagReportTaskResponse):void} cb
     * @public
     */
    CreateDBDiagReportTask(req, cb) {
        let resp = new CreateDBDiagReportTaskResponse();
        this.request("CreateDBDiagReportTask", req, resp, cb);
    }

    /**
     * 获取实例信息列表。Region统一选择广州。
     * @param {DescribeDiagDBInstancesRequest} req
     * @param {function(string, DescribeDiagDBInstancesResponse):void} cb
     * @public
     */
    DescribeDiagDBInstances(req, cb) {
        let resp = new DescribeDiagDBInstancesResponse();
        this.request("DescribeDiagDBInstances", req, resp, cb);
    }

    /**
     * 删除实例SQL限流任务。
     * @param {DeleteSqlFiltersRequest} req
     * @param {function(string, DeleteSqlFiltersResponse):void} cb
     * @public
     */
    DeleteSqlFilters(req, cb) {
        let resp = new DeleteSqlFiltersResponse();
        this.request("DeleteSqlFilters", req, resp, cb);
    }

    /**
     * 添加邮件接收联系人的姓名， 邮件地址，返回值为添加成功的联系人id。
     * @param {AddUserContactRequest} req
     * @param {function(string, AddUserContactResponse):void} cb
     * @public
     */
    AddUserContact(req, cb) {
        let resp = new AddUserContactResponse();
        this.request("AddUserContact", req, resp, cb);
    }

    /**
     * 获取实例占用空间最大的前几个库在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     * @param {DescribeTopSpaceSchemaTimeSeriesRequest} req
     * @param {function(string, DescribeTopSpaceSchemaTimeSeriesResponse):void} cb
     * @public
     */
    DescribeTopSpaceSchemaTimeSeries(req, cb) {
        let resp = new DescribeTopSpaceSchemaTimeSeriesResponse();
        this.request("DescribeTopSpaceSchemaTimeSeries", req, resp, cb);
    }

    /**
     * 创建中断会话的任务。
     * @param {CreateKillTaskRequest} req
     * @param {function(string, CreateKillTaskResponse):void} cb
     * @public
     */
    CreateKillTask(req, cb) {
        let resp = new CreateKillTaskResponse();
        this.request("CreateKillTask", req, resp, cb);
    }

    /**
     * 查询实例无主键表。
     * @param {DescribeNoPrimaryKeyTablesRequest} req
     * @param {function(string, DescribeNoPrimaryKeyTablesResponse):void} cb
     * @public
     */
    DescribeNoPrimaryKeyTables(req, cb) {
        let resp = new DescribeNoPrimaryKeyTablesResponse();
        this.request("DescribeNoPrimaryKeyTables", req, resp, cb);
    }

    /**
     * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
     * @param {DescribeTopSpaceTablesRequest} req
     * @param {function(string, DescribeTopSpaceTablesResponse):void} cb
     * @public
     */
    DescribeTopSpaceTables(req, cb) {
        let resp = new DescribeTopSpaceTablesResponse();
        this.request("DescribeTopSpaceTables", req, resp, cb);
    }

    /**
     * 查询实例SQL限流任务列表。
     * @param {DescribeSqlFiltersRequest} req
     * @param {function(string, DescribeSqlFiltersResponse):void} cb
     * @public
     */
    DescribeSqlFilters(req, cb) {
        let resp = new DescribeSqlFiltersResponse();
        this.request("DescribeSqlFilters", req, resp, cb);
    }

    /**
     * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     * @param {DescribeTopSpaceTableTimeSeriesRequest} req
     * @param {function(string, DescribeTopSpaceTableTimeSeriesResponse):void} cb
     * @public
     */
    DescribeTopSpaceTableTimeSeries(req, cb) {
        let resp = new DescribeTopSpaceTableTimeSeriesResponse();
        this.request("DescribeTopSpaceTableTimeSeries", req, resp, cb);
    }

    /**
     * 修改实例巡检开关。
     * @param {ModifyDiagDBInstanceConfRequest} req
     * @param {function(string, ModifyDiagDBInstanceConfResponse):void} cb
     * @public
     */
    ModifyDiagDBInstanceConf(req, cb) {
        let resp = new ModifyDiagDBInstanceConfResponse();
        this.request("ModifyDiagDBInstanceConf", req, resp, cb);
    }

    /**
     * 根据会话ID中断当前会话，该接口分为两次提交：第一次为预提交阶段，Stage为"Prepare"，得到的返回值包含SqlExecId；第二次为确认提交， Stage为"Commit"， 将SqlExecId的值作为参数传入，最终终止会话进程。
     * @param {KillMySqlThreadsRequest} req
     * @param {function(string, KillMySqlThreadsResponse):void} cb
     * @public
     */
    KillMySqlThreads(req, cb) {
        let resp = new KillMySqlThreadsResponse();
        this.request("KillMySqlThreads", req, resp, cb);
    }

    /**
     * 创建健康报告的浏览地址。
     * @param {CreateDBDiagReportUrlRequest} req
     * @param {function(string, CreateDBDiagReportUrlResponse):void} cb
     * @public
     */
    CreateDBDiagReportUrl(req, cb) {
        let resp = new CreateDBDiagReportUrlResponse();
        this.request("CreateDBDiagReportUrl", req, resp, cb);
    }

    /**
     * 验证用户数据库账号权限，获取会话token。
     * @param {VerifyUserAccountRequest} req
     * @param {function(string, VerifyUserAccountResponse):void} cb
     * @public
     */
    VerifyUserAccount(req, cb) {
        let resp = new VerifyUserAccountResponse();
        this.request("VerifyUserAccount", req, resp, cb);
    }

    /**
     * 用于查询 redis 执行 kill 会话任务后代理节点的执行结果，入参异步任务 ID 从接口 CreateProxySessionKillTask 调用成功后取得。当前 product 只支持：redis。
     * @param {DescribeProxySessionKillTasksRequest} req
     * @param {function(string, DescribeProxySessionKillTasksResponse):void} cb
     * @public
     */
    DescribeProxySessionKillTasks(req, cb) {
        let resp = new DescribeProxySessionKillTasksResponse();
        this.request("DescribeProxySessionKillTasks", req, resp, cb);
    }


}
module.exports = DbbrainClient;

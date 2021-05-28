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
const DescribeSlowLogUserHostStatsRequest = models.DescribeSlowLogUserHostStatsRequest;
const DescribeSlowLogTimeSeriesStatsRequest = models.DescribeSlowLogTimeSeriesStatsRequest;
const DescribeTopSpaceSchemasResponse = models.DescribeTopSpaceSchemasResponse;
const TimeSlice = models.TimeSlice;
const HealthScoreInfo = models.HealthScoreInfo;
const DescribeTopSpaceTableTimeSeriesResponse = models.DescribeTopSpaceTableTimeSeriesResponse;
const CreateSchedulerMailProfileRequest = models.CreateSchedulerMailProfileRequest;
const ContactItem = models.ContactItem;
const DescribeHealthScoreResponse = models.DescribeHealthScoreResponse;
const DescribeDBDiagHistoryResponse = models.DescribeDBDiagHistoryResponse;
const ScoreItem = models.ScoreItem;
const DescribeDiagDBInstancesRequest = models.DescribeDiagDBInstancesRequest;
const DescribeDBSpaceStatusRequest = models.DescribeDBSpaceStatusRequest;
const DescribeAllUserContactResponse = models.DescribeAllUserContactResponse;
const DescribeUserSqlAdviceResponse = models.DescribeUserSqlAdviceResponse;
const DescribeTopSpaceSchemasRequest = models.DescribeTopSpaceSchemasRequest;
const ModifyDiagDBInstanceConfRequest = models.ModifyDiagDBInstanceConfRequest;
const MonitorMetric = models.MonitorMetric;
const CreateDBDiagReportTaskRequest = models.CreateDBDiagReportTaskRequest;
const MonitorFloatMetric = models.MonitorFloatMetric;
const DescribeSecurityAuditLogDownloadUrlsRequest = models.DescribeSecurityAuditLogDownloadUrlsRequest;
const DescribeSecurityAuditLogExportTasksRequest = models.DescribeSecurityAuditLogExportTasksRequest;
const AddUserContactRequest = models.AddUserContactRequest;
const DescribeAllUserGroupResponse = models.DescribeAllUserGroupResponse;
const InstanceBasicInfo = models.InstanceBasicInfo;
const SchemaItem = models.SchemaItem;
const CreateMailProfileResponse = models.CreateMailProfileResponse;
const DescribeTopSpaceTablesRequest = models.DescribeTopSpaceTablesRequest;
const ProfileInfo = models.ProfileInfo;
const DescribeAllUserContactRequest = models.DescribeAllUserContactRequest;
const DescribeDBDiagEventRequest = models.DescribeDBDiagEventRequest;
const CreateSecurityAuditLogExportTaskRequest = models.CreateSecurityAuditLogExportTaskRequest;
const DescribeDBSpaceStatusResponse = models.DescribeDBSpaceStatusResponse;
const DiagHistoryEventItem = models.DiagHistoryEventItem;
const DescribeDBDiagEventResponse = models.DescribeDBDiagEventResponse;
const DescribeDBDiagHistoryRequest = models.DescribeDBDiagHistoryRequest;
const TableSpaceTimeSeries = models.TableSpaceTimeSeries;
const GroupItem = models.GroupItem;
const InstanceInfo = models.InstanceInfo;
const DescribeSlowLogUserHostStatsResponse = models.DescribeSlowLogUserHostStatsResponse;
const DescribeDBDiagReportTasksResponse = models.DescribeDBDiagReportTasksResponse;
const AddUserContactResponse = models.AddUserContactResponse;
const HealthReportTask = models.HealthReportTask;
const DescribeDBDiagReportTasksRequest = models.DescribeDBDiagReportTasksRequest;
const CreateDBDiagReportTaskResponse = models.CreateDBDiagReportTaskResponse;
const MonitorMetricSeriesData = models.MonitorMetricSeriesData;
const ModifyDiagDBInstanceConfResponse = models.ModifyDiagDBInstanceConfResponse;
const CreateDBDiagReportUrlResponse = models.CreateDBDiagReportUrlResponse;
const ScoreDetail = models.ScoreDetail;
const DescribeTopSpaceSchemaTimeSeriesResponse = models.DescribeTopSpaceSchemaTimeSeriesResponse;
const DeleteSecurityAuditLogExportTasksRequest = models.DeleteSecurityAuditLogExportTasksRequest;
const CreateSchedulerMailProfileResponse = models.CreateSchedulerMailProfileResponse;
const SlowLogTopSqlItem = models.SlowLogTopSqlItem;
const SlowLogHost = models.SlowLogHost;
const DescribeSlowLogTopSqlsResponse = models.DescribeSlowLogTopSqlsResponse;
const SecLogExportTaskInfo = models.SecLogExportTaskInfo;
const CreateMailProfileRequest = models.CreateMailProfileRequest;
const DescribeTopSpaceSchemaTimeSeriesRequest = models.DescribeTopSpaceSchemaTimeSeriesRequest;
const MonitorFloatMetricSeriesData = models.MonitorFloatMetricSeriesData;
const MailConfiguration = models.MailConfiguration;
const DescribeTopSpaceTableTimeSeriesRequest = models.DescribeTopSpaceTableTimeSeriesRequest;
const DescribeSlowLogTopSqlsRequest = models.DescribeSlowLogTopSqlsRequest;
const DescribeMailProfileResponse = models.DescribeMailProfileResponse;
const TableSpaceData = models.TableSpaceData;
const DescribeSecurityAuditLogDownloadUrlsResponse = models.DescribeSecurityAuditLogDownloadUrlsResponse;
const EventInfo = models.EventInfo;
const DescribeMailProfileRequest = models.DescribeMailProfileRequest;
const DescribeHealthScoreRequest = models.DescribeHealthScoreRequest;
const DeleteSecurityAuditLogExportTasksResponse = models.DeleteSecurityAuditLogExportTasksResponse;
const IssueTypeInfo = models.IssueTypeInfo;
const InstanceConfs = models.InstanceConfs;
const DescribeDiagDBInstancesResponse = models.DescribeDiagDBInstancesResponse;
const HealthStatus = models.HealthStatus;
const DescribeUserSqlAdviceRequest = models.DescribeUserSqlAdviceRequest;
const DescribeAllUserGroupRequest = models.DescribeAllUserGroupRequest;
const CreateDBDiagReportUrlRequest = models.CreateDBDiagReportUrlRequest;
const DescribeSlowLogTimeSeriesStatsResponse = models.DescribeSlowLogTimeSeriesStatsResponse;
const DescribeSecurityAuditLogExportTasksResponse = models.DescribeSecurityAuditLogExportTasksResponse;
const CreateSecurityAuditLogExportTaskResponse = models.CreateSecurityAuditLogExportTaskResponse;
const UserProfile = models.UserProfile;
const SchemaSpaceData = models.SchemaSpaceData;
const DescribeTopSpaceTablesResponse = models.DescribeTopSpaceTablesResponse;


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
     * 获取发送邮件的配置， 包括数据库巡检的邮件配置以及定期生成健康报告的邮件发送配置。Region统一选择广州。
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
     * 添加邮件接收联系人的姓名， 邮件地址，返回值为添加成功的联系人id。Region统一选择广州。
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
     * 获取SQL优化建议。
     * @param {DescribeUserSqlAdviceRequest} req
     * @param {function(string, DescribeUserSqlAdviceResponse):void} cb
     * @public
     */
    DescribeUserSqlAdvice(req, cb) {
        let resp = new DescribeUserSqlAdviceResponse();
        this.request("DescribeUserSqlAdvice", req, resp, cb);
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
     * 创建健康报告的浏览地址。
     * @param {CreateDBDiagReportUrlRequest} req
     * @param {function(string, CreateDBDiagReportUrlResponse):void} cb
     * @public
     */
    CreateDBDiagReportUrl(req, cb) {
        let resp = new CreateDBDiagReportUrlResponse();
        this.request("CreateDBDiagReportUrl", req, resp, cb);
    }


}
module.exports = DbbrainClient;

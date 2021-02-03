import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSlowLogTimeSeriesStatsRequest, DescribeTopSpaceTableTimeSeriesResponse, CreateSchedulerMailProfileRequest, DescribeHealthScoreResponse, DescribeDBDiagHistoryResponse, DescribeDiagDBInstancesRequest, DescribeDBSpaceStatusRequest, DescribeAllUserContactResponse, ModifyDiagDBInstanceConfRequest, CreateDBDiagReportTaskRequest, DescribeSecurityAuditLogDownloadUrlsRequest, DescribeSecurityAuditLogExportTasksRequest, AddUserContactRequest, DescribeAllUserGroupResponse, CreateMailProfileResponse, DescribeTopSpaceTablesRequest, DescribeAllUserContactRequest, DescribeDBDiagEventRequest, CreateSecurityAuditLogExportTaskRequest, DescribeDBSpaceStatusResponse, DescribeDBDiagEventResponse, DescribeDBDiagHistoryRequest, DescribeTopSpaceTableTimeSeriesRequest, AddUserContactResponse, CreateDBDiagReportTaskResponse, ModifyDiagDBInstanceConfResponse, DeleteSecurityAuditLogExportTasksRequest, CreateSchedulerMailProfileResponse, DescribeSlowLogTopSqlsResponse, CreateMailProfileRequest, DescribeSlowLogTopSqlsRequest, DescribeMailProfileResponse, DescribeSecurityAuditLogDownloadUrlsResponse, DescribeMailProfileRequest, DescribeHealthScoreRequest, DeleteSecurityAuditLogExportTasksResponse, DescribeDiagDBInstancesResponse, DescribeAllUserGroupRequest, DescribeSlowLogTimeSeriesStatsResponse, DescribeSecurityAuditLogExportTasksResponse, CreateSecurityAuditLogExportTaskResponse, DescribeTopSpaceTablesResponse } from "./dbbrain_models";
/**
 * dbbrain client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取慢日志统计柱状图。
     */
    DescribeSlowLogTimeSeriesStats(req: DescribeSlowLogTimeSeriesStatsRequest, cb?: (error: string, rep: DescribeSlowLogTimeSeriesStatsResponse) => void): Promise<DescribeSlowLogTimeSeriesStatsResponse>;
    /**
     * 获取邮件发送中联系人的相关信息。
     */
    DescribeAllUserContact(req: DescribeAllUserContactRequest, cb?: (error: string, rep: DescribeAllUserContactResponse) => void): Promise<DescribeAllUserContactResponse>;
    /**
     * 查询安全审计日志导出文件下载链接。目前日志文件下载仅提供腾讯云内网地址，请通过广州地域的腾讯云服务器进行下载。
     */
    DescribeSecurityAuditLogDownloadUrls(req: DescribeSecurityAuditLogDownloadUrlsRequest, cb?: (error: string, rep: DescribeSecurityAuditLogDownloadUrlsResponse) => void): Promise<DescribeSecurityAuditLogDownloadUrlsResponse>;
    /**
     * 获取发送邮件的配置， 包括数据库巡检的邮件配置以及定期生成健康报告的邮件发送配置。Region统一选择广州。
     */
    DescribeMailProfile(req: DescribeMailProfileRequest, cb?: (error: string, rep: DescribeMailProfileResponse) => void): Promise<DescribeMailProfileResponse>;
    /**
     * 该接口用于创建定期生成健康报告并邮件发送的配置，将健康报告的定期生成时间作为参数传入（周一至周日），用于设置健康报告的定期生成时间，同时保存相应的定期邮件发送的配置。
     */
    CreateSchedulerMailProfile(req: CreateSchedulerMailProfileRequest, cb?: (error: string, rep: CreateSchedulerMailProfileResponse) => void): Promise<CreateSchedulerMailProfileResponse>;
    /**
     * 获取实例诊断事件的列表。
     */
    DescribeDBDiagHistory(req: DescribeDBDiagHistoryRequest, cb?: (error: string, rep: DescribeDBDiagHistoryResponse) => void): Promise<DescribeDBDiagHistoryResponse>;
    /**
     * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
     */
    DescribeDBSpaceStatus(req: DescribeDBSpaceStatusRequest, cb?: (error: string, rep: DescribeDBSpaceStatusResponse) => void): Promise<DescribeDBSpaceStatusResponse>;
    /**
     * 获取实例异常诊断事件的详情信息。
     */
    DescribeDBDiagEvent(req: DescribeDBDiagEventRequest, cb?: (error: string, rep: DescribeDBDiagEventResponse) => void): Promise<DescribeDBDiagEventResponse>;
    /**
     * 创建健康报告，并可以选择是否发送邮件。
     */
    CreateDBDiagReportTask(req: CreateDBDiagReportTaskRequest, cb?: (error: string, rep: CreateDBDiagReportTaskResponse) => void): Promise<CreateDBDiagReportTaskResponse>;
    /**
     * 创建邮件配置。其中入参ProfileType表示所创建配置的类型，ProfileType 取值包括：dbScan_mail_configuration（数据库巡检邮件配置）、scheduler_mail_configuration（定期生成健康报告的邮件发送配置）。Region统一选择广州，和实例所属地域无关。
     */
    CreateMailProfile(req: CreateMailProfileRequest, cb?: (error: string, rep: CreateMailProfileResponse) => void): Promise<CreateMailProfileResponse>;
    /**
     * 根据实例ID获取指定时间段（30分钟）的健康得分，以及异常扣分项。
     */
    DescribeHealthScore(req: DescribeHealthScoreRequest, cb?: (error: string, rep: DescribeHealthScoreResponse) => void): Promise<DescribeHealthScoreResponse>;
    /**
     * 获取实例信息列表。Region统一选择广州。
     */
    DescribeDiagDBInstances(req: DescribeDiagDBInstancesRequest, cb?: (error: string, rep: DescribeDiagDBInstancesResponse) => void): Promise<DescribeDiagDBInstancesResponse>;
    /**
     * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
     */
    DescribeTopSpaceTables(req: DescribeTopSpaceTablesRequest, cb?: (error: string, rep: DescribeTopSpaceTablesResponse) => void): Promise<DescribeTopSpaceTablesResponse>;
    /**
     * 创建安全审计日志导出任务。
     */
    CreateSecurityAuditLogExportTask(req: CreateSecurityAuditLogExportTaskRequest, cb?: (error: string, rep: CreateSecurityAuditLogExportTaskResponse) => void): Promise<CreateSecurityAuditLogExportTaskResponse>;
    /**
     * 修改实例巡检开关。
     */
    ModifyDiagDBInstanceConf(req: ModifyDiagDBInstanceConfRequest, cb?: (error: string, rep: ModifyDiagDBInstanceConfResponse) => void): Promise<ModifyDiagDBInstanceConfResponse>;
    /**
     * 删除安全审计日志导出任务。
     */
    DeleteSecurityAuditLogExportTasks(req: DeleteSecurityAuditLogExportTasksRequest, cb?: (error: string, rep: DeleteSecurityAuditLogExportTasksResponse) => void): Promise<DeleteSecurityAuditLogExportTasksResponse>;
    /**
     * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     */
    DescribeTopSpaceTableTimeSeries(req: DescribeTopSpaceTableTimeSeriesRequest, cb?: (error: string, rep: DescribeTopSpaceTableTimeSeriesResponse) => void): Promise<DescribeTopSpaceTableTimeSeriesResponse>;
    /**
     * 添加邮件接收联系人的姓名， 邮件地址，返回值为添加成功的联系人id。Region统一选择广州。
     */
    AddUserContact(req: AddUserContactRequest, cb?: (error: string, rep: AddUserContactResponse) => void): Promise<AddUserContactResponse>;
    /**
     * 获取邮件发送联系组的相关信息。
     */
    DescribeAllUserGroup(req: DescribeAllUserGroupRequest, cb?: (error: string, rep: DescribeAllUserGroupResponse) => void): Promise<DescribeAllUserGroupResponse>;
    /**
     * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
     */
    DescribeSlowLogTopSqls(req: DescribeSlowLogTopSqlsRequest, cb?: (error: string, rep: DescribeSlowLogTopSqlsResponse) => void): Promise<DescribeSlowLogTopSqlsResponse>;
    /**
     * 查询安全审计日志导出任务列表。
     */
    DescribeSecurityAuditLogExportTasks(req: DescribeSecurityAuditLogExportTasksRequest, cb?: (error: string, rep: DescribeSecurityAuditLogExportTasksResponse) => void): Promise<DescribeSecurityAuditLogExportTasksResponse>;
}

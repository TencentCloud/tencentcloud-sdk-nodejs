import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDBDiagReportTaskRequest, DescribeTopSpaceTablesRequest, CreateSecurityAuditLogExportTaskRequest, DescribeDBDiagEventResponse, DescribeDBDiagEventsResponse, DescribeDBDiagReportTasksResponse, AddUserContactResponse, CancelKillTaskResponse, DescribeRedisTopBigKeysResponse, DescribeSqlTemplateRequest, DescribeTopSpaceSchemaTimeSeriesResponse, DescribeNoPrimaryKeyTablesResponse, DescribeProxySessionKillTasksRequest, DescribeMySqlProcessListResponse, DescribeTopSpaceTablesResponse, ModifySqlFiltersResponse, KillMySqlThreadsResponse, CreateSchedulerMailProfileRequest, DescribeDBSpaceStatusRequest, ModifyDiagDBInstanceConfRequest, DescribeSecurityAuditLogDownloadUrlsRequest, CreateDBDiagReportTaskResponse, CreateMailProfileResponse, DescribeSlowLogTimeSeriesStatsRequest, CancelKillTaskRequest, DescribeDBDiagHistoryRequest, CreateKillTaskResponse, DeleteSqlFiltersResponse, DescribeDBDiagEventsRequest, CreateDBDiagReportUrlResponse, CreateKillTaskRequest, CreateMailProfileRequest, VerifyUserAccountRequest, DescribeSlowLogUserHostStatsResponse, DescribeMailProfileRequest, DeleteSecurityAuditLogExportTasksResponse, KillMySqlThreadsRequest, DescribeSqlFiltersResponse, CreateDBDiagReportUrlRequest, DescribeSecurityAuditLogExportTasksResponse, DescribeSqlTemplateResponse, DescribeTopSpaceTableTimeSeriesResponse, DescribeDBDiagHistoryResponse, DescribeDBDiagEventRequest, ModifySqlFiltersRequest, DescribeAllUserContactResponse, AddUserContactRequest, CreateSqlFilterRequest, DescribeAllUserContactRequest, DescribeDiagDBInstancesRequest, DescribeNoPrimaryKeyTablesRequest, CreateSqlFilterResponse, VerifyUserAccountResponse, DescribeSqlFiltersRequest, DescribeSecurityAuditLogExportTasksRequest, DeleteSecurityAuditLogExportTasksRequest, CreateSchedulerMailProfileResponse, DescribeTopSpaceSchemaTimeSeriesRequest, DescribeSlowLogTopSqlsRequest, DescribeMailProfileResponse, DescribeRedisTopBigKeysRequest, DescribeHealthScoreRequest, DescribeDiagDBInstancesResponse, DescribeAllUserGroupRequest, CreateProxySessionKillTaskRequest, CreateSecurityAuditLogExportTaskResponse, DescribeSlowLogUserHostStatsRequest, DescribeTopSpaceSchemasResponse, CreateProxySessionKillTaskResponse, DescribeSlowLogTimeSeriesStatsResponse, DescribeAllUserGroupResponse, ModifyDiagDBInstanceConfResponse, DescribeUserSqlAdviceResponse, DescribeDBSpaceStatusResponse, DescribeTopSpaceTableTimeSeriesRequest, DescribeDBDiagReportTasksRequest, DescribeHealthScoreResponse, DescribeTopSpaceSchemasRequest, DescribeSlowLogTopSqlsResponse, DeleteSqlFiltersRequest, DescribeUserSqlAdviceRequest, DescribeMySqlProcessListRequest, DescribeSecurityAuditLogDownloadUrlsResponse, DescribeProxySessionKillTasksResponse } from "./dbbrain_models";
/**
 * dbbrain client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询安全审计日志导出文件下载链接。目前日志文件下载仅提供腾讯云内网地址，请通过广州地域的腾讯云服务器进行下载。
     */
    DescribeSecurityAuditLogDownloadUrls(req: DescribeSecurityAuditLogDownloadUrlsRequest, cb?: (error: string, rep: DescribeSecurityAuditLogDownloadUrlsResponse) => void): Promise<DescribeSecurityAuditLogDownloadUrlsResponse>;
    /**
     * 获取发送邮件的配置， 包括数据库巡检的邮件配置以及定期生成健康报告的邮件发送配置。
     */
    DescribeMailProfile(req: DescribeMailProfileRequest, cb?: (error: string, rep: DescribeMailProfileResponse) => void): Promise<DescribeMailProfileResponse>;
    /**
     * 该接口用于创建定期生成健康报告并邮件发送的配置，将健康报告的定期生成时间作为参数传入（周一至周日），用于设置健康报告的定期生成时间，同时保存相应的定期邮件发送的配置。
     */
    CreateSchedulerMailProfile(req: CreateSchedulerMailProfileRequest, cb?: (error: string, rep: CreateSchedulerMailProfileResponse) => void): Promise<CreateSchedulerMailProfileResponse>;
    /**
     * 查询SQL模板。
     */
    DescribeSqlTemplate(req: DescribeSqlTemplateRequest, cb?: (error: string, rep: DescribeSqlTemplateResponse) => void): Promise<DescribeSqlTemplateResponse>;
    /**
     * 获取实例Top库的实时空间统计信息，默认返回按大小排序。
     */
    DescribeTopSpaceSchemas(req: DescribeTopSpaceSchemasRequest, cb?: (error: string, rep: DescribeTopSpaceSchemasResponse) => void): Promise<DescribeTopSpaceSchemasResponse>;
    /**
     * 查询关系型数据库的实时线程列表。
     */
    DescribeMySqlProcessList(req: DescribeMySqlProcessListRequest, cb?: (error: string, rep: DescribeMySqlProcessListResponse) => void): Promise<DescribeMySqlProcessListResponse>;
    /**
     * 创建邮件配置。其中入参ProfileType表示所创建配置的类型，ProfileType 取值包括：dbScan_mail_configuration（数据库巡检邮件配置）、scheduler_mail_configuration（定期生成健康报告的邮件发送配置）。Region统一选择广州，和实例所属地域无关。
     */
    CreateMailProfile(req: CreateMailProfileRequest, cb?: (error: string, rep: CreateMailProfileResponse) => void): Promise<CreateMailProfileResponse>;
    /**
     * 查询健康报告生成任务列表。
     */
    DescribeDBDiagReportTasks(req: DescribeDBDiagReportTasksRequest, cb?: (error: string, rep: DescribeDBDiagReportTasksResponse) => void): Promise<DescribeDBDiagReportTasksResponse>;
    /**
     * 获取邮件发送联系组的相关信息。
     */
    DescribeAllUserGroup(req: DescribeAllUserGroupRequest, cb?: (error: string, rep: DescribeAllUserGroupResponse) => void): Promise<DescribeAllUserGroupResponse>;
    /**
     * 获取指定时间段内的诊断事件列表，支持依据风险等级、实例ID等条件过滤。
     */
    DescribeDBDiagEvents(req: DescribeDBDiagEventsRequest, cb?: (error: string, rep: DescribeDBDiagEventsResponse) => void): Promise<DescribeDBDiagEventsResponse>;
    /**
     * 获取慢日志统计柱状图。
     */
    DescribeSlowLogTimeSeriesStats(req: DescribeSlowLogTimeSeriesStatsRequest, cb?: (error: string, rep: DescribeSlowLogTimeSeriesStatsResponse) => void): Promise<DescribeSlowLogTimeSeriesStatsResponse>;
    /**
     * 获取慢日志来源地址统计分布图。
     */
    DescribeSlowLogUserHostStats(req: DescribeSlowLogUserHostStatsRequest, cb?: (error: string, rep: DescribeSlowLogUserHostStatsResponse) => void): Promise<DescribeSlowLogUserHostStatsResponse>;
    /**
     * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
     */
    DescribeSlowLogTopSqls(req: DescribeSlowLogTopSqlsRequest, cb?: (error: string, rep: DescribeSlowLogTopSqlsResponse) => void): Promise<DescribeSlowLogTopSqlsResponse>;
    /**
     * 创建实例SQL限流任务。
     */
    CreateSqlFilter(req: CreateSqlFilterRequest, cb?: (error: string, rep: CreateSqlFilterResponse) => void): Promise<CreateSqlFilterResponse>;
    /**
     * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
     */
    DescribeDBSpaceStatus(req: DescribeDBSpaceStatusRequest, cb?: (error: string, rep: DescribeDBSpaceStatusResponse) => void): Promise<DescribeDBSpaceStatusResponse>;
    /**
     * 创建中止所有代理节点连接会话的异步任务。当前仅支持 Redis。得到的返回值为异步任务 id，可以作为参数传入接口 DescribeProxySessionKillTasks 查询kill会话任务执行状态。
     */
    CreateProxySessionKillTask(req: CreateProxySessionKillTaskRequest, cb?: (error: string, rep: CreateProxySessionKillTaskResponse) => void): Promise<CreateProxySessionKillTaskResponse>;
    /**
     * 根据实例ID获取指定时间段（30分钟）的健康得分，以及异常扣分项。
     */
    DescribeHealthScore(req: DescribeHealthScoreRequest, cb?: (error: string, rep: DescribeHealthScoreResponse) => void): Promise<DescribeHealthScoreResponse>;
    /**
     * 终止中断会话任务。
     */
    CancelKillTask(req: CancelKillTaskRequest, cb?: (error: string, rep: CancelKillTaskResponse) => void): Promise<CancelKillTaskResponse>;
    /**
     * 创建安全审计日志导出任务。
     */
    CreateSecurityAuditLogExportTask(req: CreateSecurityAuditLogExportTaskRequest, cb?: (error: string, rep: CreateSecurityAuditLogExportTaskResponse) => void): Promise<CreateSecurityAuditLogExportTaskResponse>;
    /**
     * 获取SQL优化建议。【产品用户回馈，此接口限免开放，后续将并入dbbrain专业版】
     */
    DescribeUserSqlAdvice(req: DescribeUserSqlAdviceRequest, cb?: (error: string, rep: DescribeUserSqlAdviceResponse) => void): Promise<DescribeUserSqlAdviceResponse>;
    /**
     * 删除安全审计日志导出任务。
     */
    DeleteSecurityAuditLogExportTasks(req: DeleteSecurityAuditLogExportTasksRequest, cb?: (error: string, rep: DeleteSecurityAuditLogExportTasksResponse) => void): Promise<DeleteSecurityAuditLogExportTasksResponse>;
    /**
     * 查询redis实例大key列表。
     */
    DescribeRedisTopBigKeys(req: DescribeRedisTopBigKeysRequest, cb?: (error: string, rep: DescribeRedisTopBigKeysResponse) => void): Promise<DescribeRedisTopBigKeysResponse>;
    /**
     * 查询安全审计日志导出任务列表。
     */
    DescribeSecurityAuditLogExportTasks(req: DescribeSecurityAuditLogExportTasksRequest, cb?: (error: string, rep: DescribeSecurityAuditLogExportTasksResponse) => void): Promise<DescribeSecurityAuditLogExportTasksResponse>;
    /**
     * 获取邮件发送中联系人的相关信息。
     */
    DescribeAllUserContact(req: DescribeAllUserContactRequest, cb?: (error: string, rep: DescribeAllUserContactResponse) => void): Promise<DescribeAllUserContactResponse>;
    /**
     * 获取实例异常诊断事件的详情信息。
     */
    DescribeDBDiagEvent(req: DescribeDBDiagEventRequest, cb?: (error: string, rep: DescribeDBDiagEventResponse) => void): Promise<DescribeDBDiagEventResponse>;
    /**
     * 获取实例诊断事件的列表。
     */
    DescribeDBDiagHistory(req: DescribeDBDiagHistoryRequest, cb?: (error: string, rep: DescribeDBDiagHistoryResponse) => void): Promise<DescribeDBDiagHistoryResponse>;
    /**
     * 更改实例限流任务状态，目前仅用于终止限流。
     */
    ModifySqlFilters(req: ModifySqlFiltersRequest, cb?: (error: string, rep: ModifySqlFiltersResponse) => void): Promise<ModifySqlFiltersResponse>;
    /**
     * 创建健康报告，并可以选择是否发送邮件。
     */
    CreateDBDiagReportTask(req: CreateDBDiagReportTaskRequest, cb?: (error: string, rep: CreateDBDiagReportTaskResponse) => void): Promise<CreateDBDiagReportTaskResponse>;
    /**
     * 获取实例信息列表。Region统一选择广州。
     */
    DescribeDiagDBInstances(req: DescribeDiagDBInstancesRequest, cb?: (error: string, rep: DescribeDiagDBInstancesResponse) => void): Promise<DescribeDiagDBInstancesResponse>;
    /**
     * 删除实例SQL限流任务。
     */
    DeleteSqlFilters(req: DeleteSqlFiltersRequest, cb?: (error: string, rep: DeleteSqlFiltersResponse) => void): Promise<DeleteSqlFiltersResponse>;
    /**
     * 添加邮件接收联系人的姓名， 邮件地址，返回值为添加成功的联系人id。
     */
    AddUserContact(req: AddUserContactRequest, cb?: (error: string, rep: AddUserContactResponse) => void): Promise<AddUserContactResponse>;
    /**
     * 获取实例占用空间最大的前几个库在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     */
    DescribeTopSpaceSchemaTimeSeries(req: DescribeTopSpaceSchemaTimeSeriesRequest, cb?: (error: string, rep: DescribeTopSpaceSchemaTimeSeriesResponse) => void): Promise<DescribeTopSpaceSchemaTimeSeriesResponse>;
    /**
     * 创建中断会话的任务。
     */
    CreateKillTask(req: CreateKillTaskRequest, cb?: (error: string, rep: CreateKillTaskResponse) => void): Promise<CreateKillTaskResponse>;
    /**
     * 查询实例无主键表。
     */
    DescribeNoPrimaryKeyTables(req: DescribeNoPrimaryKeyTablesRequest, cb?: (error: string, rep: DescribeNoPrimaryKeyTablesResponse) => void): Promise<DescribeNoPrimaryKeyTablesResponse>;
    /**
     * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
     */
    DescribeTopSpaceTables(req: DescribeTopSpaceTablesRequest, cb?: (error: string, rep: DescribeTopSpaceTablesResponse) => void): Promise<DescribeTopSpaceTablesResponse>;
    /**
     * 查询实例SQL限流任务列表。
     */
    DescribeSqlFilters(req: DescribeSqlFiltersRequest, cb?: (error: string, rep: DescribeSqlFiltersResponse) => void): Promise<DescribeSqlFiltersResponse>;
    /**
     * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
     */
    DescribeTopSpaceTableTimeSeries(req: DescribeTopSpaceTableTimeSeriesRequest, cb?: (error: string, rep: DescribeTopSpaceTableTimeSeriesResponse) => void): Promise<DescribeTopSpaceTableTimeSeriesResponse>;
    /**
     * 修改实例巡检开关。
     */
    ModifyDiagDBInstanceConf(req: ModifyDiagDBInstanceConfRequest, cb?: (error: string, rep: ModifyDiagDBInstanceConfResponse) => void): Promise<ModifyDiagDBInstanceConfResponse>;
    /**
     * 根据会话ID中断当前会话，该接口分为两次提交：第一次为预提交阶段，Stage为"Prepare"，得到的返回值包含SqlExecId；第二次为确认提交， Stage为"Commit"， 将SqlExecId的值作为参数传入，最终终止会话进程。
     */
    KillMySqlThreads(req: KillMySqlThreadsRequest, cb?: (error: string, rep: KillMySqlThreadsResponse) => void): Promise<KillMySqlThreadsResponse>;
    /**
     * 创建健康报告的浏览地址。
     */
    CreateDBDiagReportUrl(req: CreateDBDiagReportUrlRequest, cb?: (error: string, rep: CreateDBDiagReportUrlResponse) => void): Promise<CreateDBDiagReportUrlResponse>;
    /**
     * 验证用户数据库账号权限，获取会话token。
     */
    VerifyUserAccount(req: VerifyUserAccountRequest, cb?: (error: string, rep: VerifyUserAccountResponse) => void): Promise<VerifyUserAccountResponse>;
    /**
     * 用于查询 redis 执行 kill 会话任务后代理节点的执行结果，入参异步任务 ID 从接口 CreateProxySessionKillTask 调用成功后取得。当前 product 只支持：redis。
     */
    DescribeProxySessionKillTasks(req: DescribeProxySessionKillTasksRequest, cb?: (error: string, rep: DescribeProxySessionKillTasksResponse) => void): Promise<DescribeProxySessionKillTasksResponse>;
}

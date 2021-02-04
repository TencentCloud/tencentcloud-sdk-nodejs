/**
 * 库表空间时序数据
 */
export interface TableSpaceTimeSeries {
    /**
      * 表名。
      */
    TableName: string;
    /**
      * 库名。
      */
    TableSchema: string;
    /**
      * 库表的存储引擎。
      */
    Engine: string;
    /**
      * 单位时间间隔内的空间指标数据。
      */
    SeriesData: MonitorFloatMetricSeriesData;
}
/**
 * DescribeSlowLogTimeSeriesStats请求参数结构体
 */
export interface DescribeSlowLogTimeSeriesStatsRequest {
    /**
      * 实例 ID 。
      */
    InstanceId: string;
    /**
      * 开始时间，如“2019-09-10 12:13:14”。
      */
    StartTime: string;
    /**
      * 结束时间，如“2019-09-10 12:13:14”，结束时间与开始时间的间隔最大可为7天。
      */
    EndTime: string;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
      */
    Product?: string;
}
/**
 * 获取健康得分返回的详情。
 */
export interface HealthScoreInfo {
    /**
      * 异常详情。
      */
    IssueTypes: Array<IssueTypeInfo>;
    /**
      * 异常事件总数。
      */
    EventsTotalCount: number;
    /**
      * 健康得分。
      */
    HealthScore: number;
    /**
      * 健康等级, 如："HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"。
      */
    HealthLevel: string;
}
/**
 * DescribeTopSpaceTableTimeSeries返回参数结构体
 */
export interface DescribeTopSpaceTableTimeSeriesResponse {
    /**
      * 返回的Top表空间统计信息的时序数据列表。
      */
    TopSpaceTableTimeSeries?: Array<TableSpaceTimeSeries>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSchedulerMailProfile请求参数结构体
 */
export interface CreateSchedulerMailProfileRequest {
    /**
      * 取值范围1-7，分别代表周一至周日。
      */
    WeekConfiguration: Array<number>;
    /**
      * 邮件配置内容。
      */
    ProfileInfo: ProfileInfo;
    /**
      * 配置名称，需要保持唯一性，定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。
      */
    ProfileName: string;
    /**
      * 配置订阅的实例ID。
      */
    BindInstanceId: string;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
      */
    Product: string;
}
/**
 * 联系人contact描述。
 */
export interface ContactItem {
    /**
      * 联系人id。
      */
    Id: number;
    /**
      * 联系人姓名。
      */
    Name: string;
    /**
      * 联系人绑定的邮箱。
      */
    Mail: string;
}
/**
 * DescribeHealthScore返回参数结构体
 */
export interface DescribeHealthScoreResponse {
    /**
      * 健康得分以及异常扣分项。
      */
    Data: HealthScoreInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBDiagHistory返回参数结构体
 */
export interface DescribeDBDiagHistoryResponse {
    /**
      * 事件描述。
      */
    Events?: Array<DiagHistoryEventItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDiagDBInstances请求参数结构体
 */
export interface DescribeDiagDBInstancesRequest {
    /**
      * 是否是DBbrain支持的实例，固定传 true。
      */
    IsSupported: boolean;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
      */
    Product: string;
    /**
      * 分页参数，偏移量。
      */
    Offset: number;
    /**
      * 分页参数，分页值。
      */
    Limit: number;
    /**
      * 根据实例名称条件查询。
      */
    InstanceNames?: Array<string>;
    /**
      * 根据实例ID条件查询。
      */
    InstanceIds?: Array<string>;
    /**
      * 根据地域条件查询。
      */
    Regions?: Array<string>;
}
/**
 * DescribeDBSpaceStatus请求参数结构体
 */
export interface DescribeDBSpaceStatusRequest {
    /**
      * 实例 ID 。
      */
    InstanceId: string;
    /**
      * 时间段天数，截止日期为当日，默认为7天。
      */
    RangeDays?: number;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
      */
    Product?: string;
}
/**
 * DescribeAllUserContact返回参数结构体
 */
export interface DescribeAllUserContactResponse {
    /**
      * 联系人的总数量。
      */
    TotalCount: number;
    /**
      * 联系人的信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Contacts: Array<ContactItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 单位时间间隔内的慢日志统计
 */
export interface TimeSlice {
    /**
      * 总数
      */
    Count: number;
    /**
      * 统计开始时间
      */
    Timestamp: number;
}
/**
 * ModifyDiagDBInstanceConf请求参数结构体
 */
export interface ModifyDiagDBInstanceConfRequest {
    /**
      * 巡检开关。
      */
    InstanceConfs: InstanceConfs;
    /**
      * 生效实例地域，取值为"All"，代表全地域。
      */
    Regions: string;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL。
      */
    Product: string;
    /**
      * 指定更改巡检状态的实例ID。
      */
    InstanceIds?: Array<string>;
}
/**
 * 监控数据
 */
export interface MonitorMetric {
    /**
      * 指标名称。
      */
    Metric: string;
    /**
      * 指标单位。
      */
    Unit: string;
    /**
      * 指标值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Values: Array<number>;
}
/**
 * CreateDBDiagReportTask请求参数结构体
 */
export interface CreateDBDiagReportTaskRequest {
    /**
      * 实例ID。
      */
    InstanceId: string;
    /**
      * 开始时间，如“2020-11-08T14:00:00+08:00”。
      */
    StartTime: string;
    /**
      * 结束时间，如“2020-11-09T14:00:00+08:00”。
      */
    EndTime: string;
    /**
      * 是否发送邮件: 0 - 否，1 - 是。
      */
    SendMailFlag: number;
    /**
      * 接收邮件的联系人ID数组。
      */
    ContactPerson?: Array<number>;
    /**
      * 接收邮件的联系组ID数组。
      */
    ContactGroup?: Array<number>;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认值为"mysql"。
      */
    Product?: string;
}
/**
 * 监控数据（浮点型）
 */
export interface MonitorFloatMetric {
    /**
      * 指标名称。
      */
    Metric: string;
    /**
      * 指标单位。
      */
    Unit: string;
    /**
      * 指标值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Values: Array<number>;
}
/**
 * DescribeSecurityAuditLogDownloadUrls请求参数结构体
 */
export interface DescribeSecurityAuditLogDownloadUrlsRequest {
    /**
      * 安全审计组Id。
      */
    SecAuditGroupId: string;
    /**
      * 异步任务Id。
      */
    AsyncRequestId: number;
    /**
      * 服务产品类型，支持值："mysql" - 云数据库 MySQL。
      */
    Product: string;
}
/**
 * DescribeSecurityAuditLogExportTasks请求参数结构体
 */
export interface DescribeSecurityAuditLogExportTasksRequest {
    /**
      * 安全审计组Id。
      */
    SecAuditGroupId: string;
    /**
      * 服务产品类型，支持值："mysql" - 云数据库 MySQL。
      */
    Product: string;
    /**
      * 日志导出任务Id列表。
      */
    AsyncRequestIds?: Array<number>;
    /**
      * 偏移量，默认0。
      */
    Offset?: number;
    /**
      * 返回数量，默认20。
      */
    Limit?: number;
}
/**
 * AddUserContact请求参数结构体
 */
export interface AddUserContactRequest {
    /**
      * 联系人姓名，大小写字母+数字+下划线，最小 2 位最大 60 位的长度， 不能以"_"开头，且联系人名保持唯一。
      */
    Name: string;
    /**
      * 邮箱地址，大小写字母、数字及下划线组成， 不能以"_"开头。
      */
    ContactInfo: string;
    /**
      * 服务产品类型，固定值："mysql"。
      */
    Product: string;
}
/**
 * DescribeAllUserGroup返回参数结构体
 */
export interface DescribeAllUserGroupResponse {
    /**
      * 组总数。
      */
    TotalCount: number;
    /**
      * 组信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Groups: Array<GroupItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SchemaItem数组
 */
export interface SchemaItem {
    /**
      * 数据库名称
      */
    Schema: string;
}
/**
 * CreateMailProfile返回参数结构体
 */
export interface CreateMailProfileResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTopSpaceTables请求参数结构体
 */
export interface DescribeTopSpaceTablesRequest {
    /**
      * 实例 ID 。
      */
    InstanceId: string;
    /**
      * 返回的Top表数量，最大值为20，默认为最大值。
      */
    Limit?: number;
    /**
      * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
      */
    SortBy?: string;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
      */
    Product?: string;
}
/**
 * DescribeAllUserContact请求参数结构体
 */
export interface DescribeAllUserContactRequest {
    /**
      * 服务产品类型，固定值：mysql。
      */
    Product: string;
    /**
      * 联系人名数组，支持模糊搜索。
      */
    Names?: Array<string>;
}
/**
 * DescribeDBDiagEvent请求参数结构体
 */
export interface DescribeDBDiagEventRequest {
    /**
      * 实例 ID 。
      */
    InstanceId: string;
    /**
      * 事件 ID 。通过“获取实例诊断历史DescribeDBDiagHistory”获取。
      */
    EventId?: number;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
      */
    Product?: string;
}
/**
 * CreateSecurityAuditLogExportTask请求参数结构体
 */
export interface CreateSecurityAuditLogExportTaskRequest {
    /**
      * 安全审计组Id。
      */
    SecAuditGroupId: string;
    /**
      * 导出日志开始时间，例如2020-12-28 00:00:00。
      */
    StartTime: string;
    /**
      * 导出日志结束时间，例如2020-12-28 01:00:00。
      */
    EndTime: string;
    /**
      * 服务产品类型，支持值："mysql" - 云数据库 MySQL。
      */
    Product: string;
    /**
      * 日志风险等级列表，支持值包括：0 无风险；1 低风险；2 中风险；3 高风险。
      */
    DangerLevels?: Array<number>;
}
/**
 * DescribeDBSpaceStatus返回参数结构体
 */
export interface DescribeDBSpaceStatusResponse {
    /**
      * 磁盘增长量(MB)。
      */
    Growth?: number;
    /**
      * 磁盘剩余(MB)。
      */
    Remain?: number;
    /**
      * 磁盘总量(MB)。
      */
    Total?: number;
    /**
      * 预计可用天数。
      */
    AvailableDays?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBDiagEvent返回参数结构体
 */
export interface DescribeDBDiagEventResponse {
    /**
      * 诊断项。
      */
    DiagItem?: string;
    /**
      * 诊断类型。
      */
    DiagType?: string;
    /**
      * 事件 ID 。
      */
    EventId?: number;
    /**
      * 事件详情。
      */
    Explanation?: string;
    /**
      * 概要。
      */
    Outline?: string;
    /**
      * 诊断出的问题。
      */
    Problem?: string;
    /**
      * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
      */
    Severity?: number;
    /**
      * 开始时间
      */
    StartTime?: string;
    /**
      * 建议。
      */
    Suggestions?: string;
    /**
      * 保留字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Metric?: string;
    /**
      * 结束时间。
      */
    EndTime?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDBDiagHistory请求参数结构体
 */
export interface DescribeDBDiagHistoryRequest {
    /**
      * 实例 ID 。
      */
    InstanceId: string;
    /**
      * 开始时间，如“2019-09-10 12:13:14”。
      */
    StartTime: string;
    /**
      * 结束时间，如“2019-09-11 12:13:14”，结束时间与开始时间的间隔最大可为2天。
      */
    EndTime: string;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
      */
    Product?: string;
}
/**
 * 描述组信息。
 */
export interface GroupItem {
    /**
      * 组id。
      */
    Id: number;
    /**
      * 组名称。
      */
    Name: string;
    /**
      * 组成员数量。
      */
    MemberCount: number;
}
/**
 * 查询实例列表，返回实例的相关信息的对象。
 */
export interface InstanceInfo {
    /**
      * 实例ID。
      */
    InstanceId: string;
    /**
      * 实例名称。
      */
    InstanceName: string;
    /**
      * 实例所属地域。
      */
    Region: string;
    /**
      * 健康得分。
      */
    HealthScore: number;
    /**
      * 所属产品。
      */
    Product: string;
    /**
      * 异常事件数量。
      */
    EventCount: number;
    /**
      * 实例类型：1:MASTER；2:DR，3：RO，4:SDR。
      */
    InstanceType: number;
    /**
      * 核心数。
      */
    Cpu: number;
    /**
      * 内存，单位MB。
      */
    Memory: number;
    /**
      * 硬盘存储，单位GB。
      */
    Volume: number;
    /**
      * 数据库版本。
      */
    EngineVersion: string;
    /**
      * 内网地址。
      */
    Vip: string;
    /**
      * 内网端口。
      */
    Vport: number;
    /**
      * 接入来源。
      */
    Source: string;
    /**
      * 分组ID。
      */
    GroupId: string;
    /**
      * 分组组名。
      */
    GroupName: string;
    /**
      * 实例状态：0：发货中；1：运行正常；4：销毁中；5：隔离中。
      */
    Status: number;
    /**
      * 子网统一ID。
      */
    UniqSubnetId: string;
    /**
      * cdb类型。
      */
    DeployMode: string;
    /**
      * cdb实例初始化标志：0：未初始化；1：已初始化。
      */
    InitFlag: number;
    /**
      * 任务状态。
      */
    TaskStatus: number;
    /**
      * 私有网络统一ID。
      */
    UniqVpcId: string;
    /**
      * 实例巡检/概览的状态。
      */
    InstanceConf: InstanceConfs;
    /**
      * 资源到期时间。
      */
    DeadlineTime: string;
    /**
      * 是否是DBbrain支持的实例。
      */
    IsSupported: boolean;
    /**
      * 实例安全审计日志开启状态：ON： 安全审计开启；OFF： 未开启安全审计。
      */
    SecAuditStatus: string;
    /**
      * 实例审计日志开启状态，ALL_AUDIT： 开启全审计；RULE_AUDIT： 开启规则审计；UNBOUND： 未开启审计。
      */
    AuditPolicyStatus: string;
    /**
      * 实例审计日志运行状态：normal： 运行中； paused： 欠费暂停。
      */
    AuditRunningStatus: string;
}
/**
 * DescribeTopSpaceTableTimeSeries请求参数结构体
 */
export interface DescribeTopSpaceTableTimeSeriesRequest {
    /**
      * 实例 ID 。
      */
    InstanceId: string;
    /**
      * 返回的Top表数量，最大值为20，默认为最大值。
      */
    Limit?: number;
    /**
      * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
      */
    SortBy?: string;
    /**
      * 开始日期，最早为当日的前第29天，默认为截止日期的前第6天。
      */
    StartDate?: string;
    /**
      * 截止日期，最早为当日的前第29天，默认为当日。
      */
    EndDate?: string;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
      */
    Product?: string;
}
/**
 * AddUserContact返回参数结构体
 */
export interface AddUserContactResponse {
    /**
      * 添加成功的联系人id。
      */
    Id: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDBDiagReportTask返回参数结构体
 */
export interface CreateDBDiagReportTaskResponse {
    /**
      * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AsyncRequestId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 单位时间间隔内的监控指标数据
 */
export interface MonitorMetricSeriesData {
    /**
      * 监控指标。
      */
    Series: Array<MonitorMetric>;
    /**
      * 监控指标对应的时间戳。
      */
    Timestamp: Array<number>;
}
/**
 * ModifyDiagDBInstanceConf返回参数结构体
 */
export interface ModifyDiagDBInstanceConfResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例诊断历史事件
 */
export interface DiagHistoryEventItem {
    /**
      * 诊断类型。
      */
    DiagType: string;
    /**
      * 结束时间。
      */
    EndTime: string;
    /**
      * 开始时间。
      */
    StartTime: string;
    /**
      * 事件 ID 。
      */
    EventId: number;
    /**
      * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
      */
    Severity: number;
    /**
      * 概要。
      */
    Outline: string;
    /**
      * 诊断项。
      */
    DiagItem: string;
    /**
      * 实例 ID 。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 保留字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    Metric: string;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
}
/**
 * DeleteSecurityAuditLogExportTasks请求参数结构体
 */
export interface DeleteSecurityAuditLogExportTasksRequest {
    /**
      * 安全审计组Id。
      */
    SecAuditGroupId: string;
    /**
      * 日志导出任务Id列表，接口会忽略不存在或已删除的任务Id。
      */
    AsyncRequestIds: Array<number>;
    /**
      * 服务产品类型，支持值： "mysql" - 云数据库 MySQL。
      */
    Product: string;
}
/**
 * CreateSchedulerMailProfile返回参数结构体
 */
export interface CreateSchedulerMailProfileResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 慢日志TopSql
 */
export interface SlowLogTopSqlItem {
    /**
      * sql总锁等待时间
      */
    LockTime: number;
    /**
      * 最大锁等待时间
      */
    LockTimeMax: number;
    /**
      * 最小锁等待时间
      */
    LockTimeMin: number;
    /**
      * 总扫描行数
      */
    RowsExamined: number;
    /**
      * 最大扫描行数
      */
    RowsExaminedMax: number;
    /**
      * 最小扫描行数
      */
    RowsExaminedMin: number;
    /**
      * 总耗时
      */
    QueryTime: number;
    /**
      * 最大执行时间
      */
    QueryTimeMax: number;
    /**
      * 最小执行时间
      */
    QueryTimeMin: number;
    /**
      * 总返回行数
      */
    RowsSent: number;
    /**
      * 最大返回行数
      */
    RowsSentMax: number;
    /**
      * 最小返回行数
      */
    RowsSentMin: number;
    /**
      * 执行次数
      */
    ExecTimes: number;
    /**
      * sql模板
      */
    SqlTemplate: string;
    /**
      * 带参数SQL（随机）
      */
    SqlText: string;
    /**
      * 数据库名
      */
    Schema: string;
    /**
      * 总耗时占比
      */
    QueryTimeRatio: number;
    /**
      * sql总锁等待时间占比
      */
    LockTimeRatio: number;
    /**
      * 总扫描行数占比
      */
    RowsExaminedRatio: number;
    /**
      * 总返回行数占比
      */
    RowsSentRatio: number;
}
/**
 * DescribeSlowLogTopSqls返回参数结构体
 */
export interface DescribeSlowLogTopSqlsResponse {
    /**
      * 符合条件的记录总数。
      */
    TotalCount?: number;
    /**
      * 慢日志 top sql 列表
      */
    Rows?: Array<SlowLogTopSqlItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 安全审计日志导出任务信息
 */
export interface SecLogExportTaskInfo {
    /**
      * 异步任务Id。
      */
    AsyncRequestId: number;
    /**
      * 任务开始时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 任务结束时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 任务创建时间。
      */
    CreateTime: string;
    /**
      * 任务状态。
      */
    Status: string;
    /**
      * 任务执行进度。
      */
    Progress: number;
    /**
      * 导出日志开始时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogStartTime: string;
    /**
      * 导出日志结束时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogEndTime: string;
    /**
      * 日志文件总大小，单位KB。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalSize: number;
    /**
      * 风险等级列表。0 无风险；1 低风险；2 中风险；3 高风险。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DangerLevels: Array<number>;
}
/**
 * CreateMailProfile请求参数结构体
 */
export interface CreateMailProfileRequest {
    /**
      * 邮件配置内容。
      */
    ProfileInfo: ProfileInfo;
    /**
      * 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。
      */
    ProfileLevel: string;
    /**
      * 配置名称，需要保持唯一性，数据库巡检邮件配置名称自拟；定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。
      */
    ProfileName: string;
    /**
      * 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。
      */
    ProfileType: string;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL。
      */
    Product: string;
    /**
      * 配置绑定的实例ID，当配置级别为"Instance"时需要传入，只能为一个实例。
      */
    BindInstanceIds?: Array<string>;
}
/**
 * 单位时间间隔内的监控指标数据（浮点型）
 */
export interface MonitorFloatMetricSeriesData {
    /**
      * 监控指标。
      */
    Series: Array<MonitorFloatMetric>;
    /**
      * 监控指标对应的时间戳。
      */
    Timestamp: Array<number>;
}
/**
 * 邮件发送配置
 */
export interface MailConfiguration {
    /**
      * 是否开启邮件发送: 0, 否; 1, 是。
      */
    SendMail: number;
    /**
      * 地域配置, 如["ap-guangzhou", "ap-shanghai"]。巡检的邮件发送模版，配置需要发送巡检邮件的地域；订阅的邮件发送模版，配置当前订阅实例的所属地域。
      */
    Region: Array<string>;
    /**
      * 发送指定的健康等级的报告, 如["HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"]。
      */
    HealthStatus: Array<string>;
    /**
      * 联系人id, 联系人/联系组不能都为空。
      */
    ContactPerson?: Array<number>;
    /**
      * 联系组id, 联系人/联系组不能都为空。
      */
    ContactGroup?: Array<number>;
}
/**
 * DescribeSlowLogTopSqls请求参数结构体
 */
export interface DescribeSlowLogTopSqlsRequest {
    /**
      * 实例 ID 。
      */
    InstanceId: string;
    /**
      * 开始时间，如“2019-09-10 12:13:14”。
      */
    StartTime: string;
    /**
      * 截止时间，如“2019-09-10 12:13:14”，截止时间与开始时间的间隔最大可为7天。
      */
    EndTime: string;
    /**
      * 排序键，目前支持 QueryTime,ExecTimes,RowsSent,LockTime以及RowsExamined 等排序键。
      */
    SortBy?: string;
    /**
      * 排序方式，支持ASC（升序）以及DESC（降序）。
      */
    OrderBy?: string;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 数据库名称数组。
      */
    SchemaList?: Array<SchemaItem>;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
      */
    Product?: string;
}
/**
 * DescribeMailProfile返回参数结构体
 */
export interface DescribeMailProfileResponse {
    /**
      * 邮件配置详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProfileList: Array<UserProfile>;
    /**
      * 邮件模版总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 库表空间统计数据。
 */
export interface TableSpaceData {
    /**
      * 表名。
      */
    TableName: string;
    /**
      * 库名。
      */
    TableSchema: string;
    /**
      * 库表的存储引擎。
      */
    Engine: string;
    /**
      * 数据空间（MB）。
      */
    DataLength: number;
    /**
      * 索引空间（MB）。
      */
    IndexLength: number;
    /**
      * 碎片空间（MB）。
      */
    DataFree: number;
    /**
      * 总使用空间（MB）。
      */
    TotalLength: number;
    /**
      * 碎片率（%）。
      */
    FragRatio: number;
    /**
      * 行数。
      */
    TableRows: number;
    /**
      * 表对应的独立物理文件大小（MB）。
      */
    PhysicalFileSize: number;
}
/**
 * DescribeSecurityAuditLogDownloadUrls返回参数结构体
 */
export interface DescribeSecurityAuditLogDownloadUrlsResponse {
    /**
      * 导出结果的COS链接列表。当结果集很大时，可能会切分为多个url下载。
      */
    Urls: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 异常事件信息。
 */
export interface EventInfo {
    /**
      * 事件 ID 。
      */
    EventId: number;
    /**
      * 诊断类型。
      */
    DiagType: string;
    /**
      * 开始时间。
      */
    StartTime: string;
    /**
      * 结束时间。
      */
    EndTime: string;
    /**
      * 概要。
      */
    Outline: string;
    /**
      * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
      */
    Severity: number;
    /**
      * 扣分。
      */
    ScoreLost: number;
    /**
      * 保留字段。
      */
    Metric: string;
    /**
      * 告警数目。
      */
    Count: number;
}
/**
 * DescribeMailProfile请求参数结构体
 */
export interface DescribeMailProfileRequest {
    /**
      * 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。
      */
    ProfileType: string;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
      */
    Product: string;
    /**
      * 分页偏移量。
      */
    Offset: number;
    /**
      * 分页单位，最大支持50。
      */
    Limit: number;
    /**
      * 根据邮件配置名称查询，定期发送的邮件配置名称遵循："scheduler_"+{instanceId}的规则。
      */
    ProfileName?: string;
}
/**
 * DescribeHealthScore请求参数结构体
 */
export interface DescribeHealthScoreRequest {
    /**
      * 需要获取健康得分的实例ID。
      */
    InstanceId: string;
    /**
      * 获取健康得分的时间。
      */
    Time: string;
    /**
      * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
      */
    Product: string;
}
/**
 * DeleteSecurityAuditLogExportTasks返回参数结构体
 */
export interface DeleteSecurityAuditLogExportTasksResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 指标信息。
 */
export interface IssueTypeInfo {
    /**
      * 指标分类：AVAILABILITY：可用性，MAINTAINABILITY：可维护性，PERFORMANCE，性能，RELIABILITY可靠性。
      */
    IssueType: string;
    /**
      * 异常事件。
      */
    Events: Array<EventInfo>;
    /**
      * 异常事件总数。
      */
    TotalCount: number;
}
/**
 * 实例配置。
 */
export interface InstanceConfs {
    /**
      * 数据库巡检开关, Yes/No。
      */
    DailyInspection?: string;
    /**
      * 实例概览开关，Yes/No。
      */
    OverviewDisplay?: string;
}
/**
 * DescribeDiagDBInstances返回参数结构体
 */
export interface DescribeDiagDBInstancesResponse {
    /**
      * 实例总数。
      */
    TotalCount: number;
    /**
      * 全实例巡检状态：0：开启全实例巡检；1：未开启全实例巡检。
      */
    DbScanStatus: number;
    /**
      * 实例相关信息。
      */
    Items: Array<InstanceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户配置的信息
 */
export interface ProfileInfo {
    /**
      * 语言, 如"zh"。
      */
    Language: string;
    /**
      * 邮件模板的内容。
      */
    MailConfiguration: MailConfiguration;
}
/**
 * DescribeAllUserGroup请求参数结构体
 */
export interface DescribeAllUserGroupRequest {
    /**
      * 服务产品类型，固定值：mysql。
      */
    Product: string;
    /**
      * 联系组名称数组，支持模糊搜索。
      */
    Names?: Array<string>;
}
/**
 * DescribeSlowLogTimeSeriesStats返回参数结构体
 */
export interface DescribeSlowLogTimeSeriesStatsResponse {
    /**
      * 柱间单位时间间隔，单位为秒。
      */
    Period?: number;
    /**
      * 单位时间间隔内慢日志数量统计。
      */
    TimeSeries?: Array<TimeSlice>;
    /**
      * 单位时间间隔内的实例 cpu 利用率监控数据。
      */
    SeriesData?: MonitorMetricSeriesData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecurityAuditLogExportTasks返回参数结构体
 */
export interface DescribeSecurityAuditLogExportTasksResponse {
    /**
      * 安全审计日志导出任务列表。
      */
    Tasks: Array<SecLogExportTaskInfo>;
    /**
      * 安全审计日志导出任务总数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSecurityAuditLogExportTask返回参数结构体
 */
export interface CreateSecurityAuditLogExportTaskResponse {
    /**
      * 日志导出任务Id。
      */
    AsyncRequestId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户配置的相关信息，包括邮件配置。
 */
export interface UserProfile {
    /**
      * 配置的id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProfileId: string;
    /**
      * 配置类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProfileType: string;
    /**
      * 配置级别，"User"或"Instance"。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProfileLevel: string;
    /**
      * 配置名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProfileName: string;
    /**
      * 配置详情。
      */
    ProfileInfo: ProfileInfo;
}
/**
 * DescribeTopSpaceTables返回参数结构体
 */
export interface DescribeTopSpaceTablesResponse {
    /**
      * 返回的Top表空间统计信息列表。
      */
    TopSpaceTables?: Array<TableSpaceData>;
    /**
      * 采集表空间数据的时间戳（秒）。
      */
    Timestamp?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

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

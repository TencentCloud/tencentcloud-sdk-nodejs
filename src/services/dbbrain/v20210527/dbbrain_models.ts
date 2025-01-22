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

/**
 * 库空间时序数据
 */
export interface SchemaSpaceTimeSeries {
  /**
   * 库名
   */
  TableSchema?: string
  /**
   * 单位时间间隔内的空间指标数据。
   */
  SeriesData?: MonitorMetricSeriesData
}

/**
 * 慢日志来源用户详情。
 */
export interface SlowLogUser {
  /**
   * 来源用户名。
   */
  UserName?: string
  /**
   * 该来源用户名的慢日志数目占总数目的比例，单位%。
   */
  Ratio?: number
  /**
   * 该来源用户名的慢日志数目。
   */
  Count?: number
}

/**
 * redis key空间信息。
 */
export interface RedisKeySpaceData {
  /**
   * key名。
   */
  Key?: string
  /**
   * key类型。
   */
  Type?: string
  /**
   * key编码方式。
   */
  Encoding?: string
  /**
   * key过期时间戳（毫秒），0代表未设置过期时间。
   */
  ExpireTime?: number
  /**
   * key内存大小，单位Byte。
   */
  Length?: number
  /**
   * 元素个数。
   */
  ItemCount?: number
  /**
   * 最大元素长度。
   */
  MaxElementSize?: number
  /**
   * 平均元素长度。
   */
  AveElementSize?: number
  /**
   * 所属分片序号。
   */
  ShardId?: string
}

/**
 * DescribeRedisTopKeyPrefixList请求参数结构体
 */
export interface DescribeRedisTopKeyPrefixListRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 查询日期，如2021-05-27，最早可为前30天的日期。
   */
  Date: string
  /**
   * 服务产品类型，支持值包括 "redis" - 云数据库 Redis。
   */
  Product: string
  /**
   * 查询数目，默认为20，最大值为500。
   */
  Limit?: number
  /**
   * 分片ID数组。
   */
  ShardIds?: Array<number | bigint>
}

/**
 * 健康报告任务详情。
 */
export interface HealthReportTask {
  /**
   * 异步任务请求 ID。
   */
  AsyncRequestId: number
  /**
   * 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。
   */
  Source: string
  /**
   * 任务完成进度，单位%。
   */
  Progress: number
  /**
   * 任务创建时间。
   */
  CreateTime: string
  /**
   * 任务开始执行时间。
   */
  StartTime: string
  /**
   * 任务完成执行时间。
   */
  EndTime: string
  /**
   * 任务所属实例的基础信息。
   */
  InstanceInfo: InstanceBasicInfo
  /**
   * 健康报告中的健康信息。
   */
  HealthStatus: HealthStatus
}

/**
 * 安全审计日志导出任务信息
 */
export interface SecLogExportTaskInfo {
  /**
   * 异步任务Id。
   */
  AsyncRequestId: number
  /**
   * 任务开始时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime: string
  /**
   * 任务结束时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime: string
  /**
   * 任务创建时间。
   */
  CreateTime: string
  /**
   * 任务状态。
   */
  Status: string
  /**
   * 任务执行进度。
   */
  Progress: number
  /**
   * 导出日志开始时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogStartTime: string
  /**
   * 导出日志结束时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogEndTime: string
  /**
   * 日志文件总大小，单位KB。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSize: number
  /**
   * 风险等级列表。0 无风险；1 低风险；2 中风险；3 高风险。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DangerLevels: Array<number | bigint>
}

/**
 * OpenAuditService返回参数结构体
 */
export interface OpenAuditServiceResponse {
  /**
   * taskId 为0表示开通审计成功，否则开通失败
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRedisTopHotKeys请求参数结构体
 */
export interface DescribeRedisTopHotKeysRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 开始时间，如“2024-09-22T00:00:00+00:00”。0天 < 当前服务器时间 - 开始时间 <= 10天。
   */
  StartTime: string
  /**
   * 结束时间，如“2024-09-22T01:00:00+00:00”，0天 < 结束时间 - 开始时间 <= 10天。
   */
  EndTime: string
  /**
   * 服务产品类型，仅仅支持值 "redis" - 云数据库 Redis。
   */
  Product: string
  /**
   * Redis 节点数组。
   */
  InstanceNodeIds?: Array<string>
  /**
   * top 数目，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * CreateDBDiagReportTask请求参数结构体
 */
export interface CreateDBDiagReportTaskRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 开始时间，如“2020-11-08T14:00:00+08:00”。
   */
  StartTime: string
  /**
   * 结束时间，如“2020-11-09T14:00:00+08:00”。
   */
  EndTime: string
  /**
   * 是否发送邮件: 0 - 否，1 - 是。
   */
  SendMailFlag: number
  /**
   * 接收邮件的联系人ID数组。
   */
  ContactPerson?: Array<number | bigint>
  /**
   * 接收邮件的联系组ID数组。
   */
  ContactGroup?: Array<number | bigint>
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认值为"mysql"。
   */
  Product?: string
}

/**
 * 库表空间时序数据
 */
export interface TableSpaceTimeSeries {
  /**
   * 表名。
   */
  TableName?: string
  /**
   * 库名。
   */
  TableSchema?: string
  /**
   * 库表的存储引擎。
   */
  Engine?: string
  /**
   * 单位时间间隔内的空间指标数据。
   */
  SeriesData?: MonitorFloatMetricSeriesData
}

/**
 * DescribeAuditLogFiles返回参数结构体
 */
export interface DescribeAuditLogFilesResponse {
  /**
   * 符合条件的审计日志文件个数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 审计日志文件详情。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<AuditLogFile>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIndexRecommendAggregationSlowLogs请求参数结构体
 */
export interface DescribeIndexRecommendAggregationSlowLogsRequest {
  /**
   * 服务产品类型，支持值包括："mongodb" - 云数据库 。
   */
  Product: string
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 数据库名称。
   */
  Db: string
  /**
   * 表明。
   */
  Collection: string
  /**
   * 签名。
   */
  Signs: Array<string>
}

/**
 * DescribeSlowLogs请求参数结构体
 */
export interface DescribeSlowLogsRequest {
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。
   */
  Product: string
  /**
   * 实例id。
   */
  InstanceId: string
  /**
   * sql模板的md5值
   */
  Md5: string
  /**
   * 开始时间，如“2019-09-10 12:13:14”。
   */
  StartTime: string
  /**
   * 截止时间，如“2019-09-11 10:13:14”，截止时间与开始时间的间隔小于7天。
   */
  EndTime: string
  /**
   * 偏移量，默认为0。
   */
  Offset: number
  /**
   * 查询数目，默认为20，最大为100。
   */
  Limit: number
  /**
   * 数据库列表
   */
  DB?: Array<string>
  /**
   * 关键字
   */
  Key?: Array<string>
  /**
   * 用户
   */
  User?: Array<string>
  /**
   * IP
   */
  Ip?: Array<string>
  /**
   * 耗时区间,耗时区间的左右边界分别对应数组的第0个元素和第一个元素
   */
  Time?: Array<number | bigint>
}

/**
 * DescribeTopSpaceTables请求参数结构体
 */
export interface DescribeTopSpaceTablesRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 返回的Top表数量，最大值为100，默认为20。
   */
  Limit?: number
  /**
   * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。
   */
  SortBy?: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * 诊断扣分项。
 */
export interface ScoreItem {
  /**
   * 异常诊断项名称。
   */
  DiagItem: string
  /**
   * 诊断项分类，取值包括：可用性、可维护性、性能及可靠性。
   */
  IssueType: string
  /**
   * 健康等级，取值包括：信息、提示、告警、严重、致命。
   */
  TopSeverity: string
  /**
   * 该异常诊断项出现次数。
   */
  Count: number
  /**
   * 扣分分数。
   */
  ScoreLost: number
}

/**
 * CreateRedisBigKeyAnalysisTask返回参数结构体
 */
export interface CreateRedisBigKeyAnalysisTaskResponse {
  /**
   * 异步任务ID。
   */
  AsyncRequestId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityAuditLogExportTask请求参数结构体
 */
export interface CreateSecurityAuditLogExportTaskRequest {
  /**
   * 安全审计组Id。
   */
  SecAuditGroupId: string
  /**
   * 导出日志开始时间，例如2020-12-28 00:00:00。
   */
  StartTime: string
  /**
   * 导出日志结束时间，例如2020-12-28 01:00:00。
   */
  EndTime: string
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL。
   */
  Product: string
  /**
   * 日志风险等级列表，支持值包括：0 无风险；1 低风险；2 中风险；3 高风险。
   */
  DangerLevels?: Array<number | bigint>
}

/**
 * DescribeDBDiagEvent返回参数结构体
 */
export interface DescribeDBDiagEventResponse {
  /**
   * 诊断项。
   */
  DiagItem?: string
  /**
   * 诊断类型。
   */
  DiagType?: string
  /**
   * 事件 ID 。
   */
  EventId?: number
  /**
   * 诊断事件详情，若无附加解释信息则输出为空。
   */
  Explanation?: string
  /**
   * 诊断概要。
   */
  Outline?: string
  /**
   * 诊断出的问题。
   */
  Problem?: string
  /**
   * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
   */
  Severity?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 诊断建议，若无建议则输出为空。
   */
  Suggestions?: string
  /**
   * 保留字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metric?: string
  /**
   * 结束时间。
   */
  EndTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogTopSqls请求参数结构体
 */
export interface DescribeSlowLogTopSqlsRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 开始时间，如“2019-09-10 12:13:14”。
   */
  StartTime: string
  /**
   * 截止时间，如“2019-09-11 10:13:14”，截止时间与开始时间的间隔小于7天。
   */
  EndTime: string
  /**
   * 排序键，目前支持 QueryTime,ExecTimes,RowsSent,LockTime以及RowsExamined 等排序键，默认为QueryTime。
   */
  SortBy?: string
  /**
   * 排序方式，支持ASC（升序）以及DESC（降序），默认为DESC。
   */
  OrderBy?: string
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 数据库名称数组。
   */
  SchemaList?: Array<SchemaItem>
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeRedisBigKeyAnalysisTasks返回参数结构体
 */
export interface DescribeRedisBigKeyAnalysisTasksResponse {
  /**
   * 任务总数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 任务列表。
   */
  Tasks?: Array<RedisBigKeyTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBDiagReportTasks返回参数结构体
 */
export interface DescribeDBDiagReportTasksResponse {
  /**
   * 任务总数目。
   */
  TotalCount: number
  /**
   * 任务列表。
   */
  Tasks: Array<HealthReportTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddUserContact返回参数结构体
 */
export interface AddUserContactResponse {
  /**
   * 添加成功的联系人id。
   */
  Id?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例详情
 */
export interface AuditInstanceInfo {
  /**
   * appId。
   */
  AppId?: number
  /**
   * 审计状态，0-未开通审计；1-已开通审计。
   */
  AuditStatus?: number
  /**
   * 实例Id。
   */
  InstanceId?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 项目Id。
   */
  ProjectId?: number
  /**
   * 实例所在地域。
   */
  Region?: string
  /**
   * 资源Tags。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceTags?: Array<string>
}

/**
 * Redis大Key分析任务详情。
 */
export interface RedisBigKeyTask {
  /**
   * 异步任务请求 ID。
   */
  AsyncRequestId?: number
  /**
   * 任务创建时间。
   */
  CreateTime?: string
  /**
   * 任务开始时间。
   */
  StartTime?: string
  /**
   * 任务结束时间。
   */
  EndTime?: string
  /**
   * 任务状态。
   */
  TaskStatus?: string
  /**
   * 任务执行进度。
   */
  Progress?: number
  /**
   * 任务包含的分片节点序号列表。
   */
  ShardIds?: Array<number | bigint>
}

/**
 * CancelKillTask返回参数结构体
 */
export interface CancelKillTaskResponse {
  /**
   * kill会话任务终止成功返回1。
   */
  Status: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRedisTopBigKeys返回参数结构体
 */
export interface DescribeRedisTopBigKeysResponse {
  /**
   * top key列表。
   */
  TopKeys?: Array<RedisKeySpaceData>
  /**
   * 采集时间戳（秒）。
   */
  Timestamp?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSqlTemplate请求参数结构体
 */
export interface DescribeSqlTemplateRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 数据库名。
   */
  Schema: string
  /**
   * SQL语句。
   */
  SqlText: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeTopSpaceSchemaTimeSeries返回参数结构体
 */
export interface DescribeTopSpaceSchemaTimeSeriesResponse {
  /**
   * 返回的Top库空间统计信息的时序数据列表。
   */
  TopSpaceSchemaTimeSeries: Array<SchemaSpaceTimeSeries>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤条件。可按设置的过滤条件过滤日志。
 */
export interface AuditLogFilter {
  /**
   * 客户端地址。
   */
  Host?: Array<string>
  /**
   * 数据库名称。
   */
  DBName?: Array<string>
  /**
   * 用户名。
   */
  User?: Array<string>
  /**
   * 返回行数。表示筛选返回行数大于该值的审计日志。
   */
  SentRows?: number
  /**
   * 影响行数。表示筛选影响行数大于该值的审计日志。
   */
  AffectRows?: number
  /**
   * 执行时间。单位为：µs。表示筛选执行时间大于该值的审计日志。
   */
  ExecTime?: number
}

/**
 * 慢日志TopSql
 */
export interface SlowLogTopSqlItem {
  /**
   * sql总锁等待时间，单位秒
   */
  LockTime?: number
  /**
   * 最大锁等待时间，单位秒
   */
  LockTimeMax?: number
  /**
   * 最小锁等待时间，单位秒
   */
  LockTimeMin?: number
  /**
   * 总扫描行数
   */
  RowsExamined?: number
  /**
   * 最大扫描行数
   */
  RowsExaminedMax?: number
  /**
   * 最小扫描行数
   */
  RowsExaminedMin?: number
  /**
   * 总耗时，单位秒
   */
  QueryTime?: number
  /**
   * 最大执行时间，单位秒
   */
  QueryTimeMax?: number
  /**
   * 最小执行时间，单位秒
   */
  QueryTimeMin?: number
  /**
   * 总返回行数
   */
  RowsSent?: number
  /**
   * 最大返回行数
   */
  RowsSentMax?: number
  /**
   * 最小返回行数
   */
  RowsSentMin?: number
  /**
   * 执行次数
   */
  ExecTimes?: number
  /**
   * sql模板
   */
  SqlTemplate?: string
  /**
   * 带参数SQL（随机）
   */
  SqlText?: string
  /**
   * 数据库名
   */
  Schema?: string
  /**
   * 总耗时占比，单位%
   */
  QueryTimeRatio?: number
  /**
   * sql总锁等待时间占比，单位%
   */
  LockTimeRatio?: number
  /**
   * 总扫描行数占比，单位%
   */
  RowsExaminedRatio?: number
  /**
   * 总返回行数占比，单位%
   */
  RowsSentRatio?: number
  /**
   * 平均执行时间，单位秒
   */
  QueryTimeAvg?: number
  /**
   * 平均返回行数
   */
  RowsSentAvg?: number
  /**
   * 平均锁等待时间，单位秒
   */
  LockTimeAvg?: number
  /**
   * 平均扫描行数
   */
  RowsExaminedAvg?: number
  /**
   * SQL模板的MD5值
   */
  Md5?: string
}

/**
 * CreateKillTask返回参数结构体
 */
export interface CreateKillTaskResponse {
  /**
   * kill会话任务创建成功返回1
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditInstanceList返回参数结构体
 */
export interface DescribeAuditInstanceListResponse {
  /**
   * 符合条件的实例个数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 实例详情。
   */
  Items?: Array<AuditInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例诊断历史事件
 */
export interface DiagHistoryEventItem {
  /**
   * 诊断类型。
   */
  DiagType?: string
  /**
   * 结束时间。
   */
  EndTime?: string
  /**
   * 开始时间。
   */
  StartTime?: string
  /**
   * 事件唯一ID 。
   */
  EventId?: number
  /**
   * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
   */
  Severity?: number
  /**
   * 诊断概要。
   */
  Outline?: string
  /**
   * 诊断项说明。
   */
  DiagItem?: string
  /**
   * 实例 ID 。
   */
  InstanceId?: string
  /**
   * 保留字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metric?: string
  /**
   * 地域。
   */
  Region?: string
}

/**
 * DescribeProxySessionKillTasks请求参数结构体
 */
export interface DescribeProxySessionKillTasksRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * kill 会话异步任务 ID,  接口 CreateProxySessionKillTask 调用成功后获取。
   */
  AsyncRequestIds: Array<number | bigint>
  /**
   * 服务产品类型，支持值包括： "redis" - 云数据库 Redis。
   */
  Product: string
}

/**
 * ModifyAlarmPolicy返回参数结构体
 */
export interface ModifyAlarmPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRedisBigKeyAnalysisTask请求参数结构体
 */
export interface CreateRedisBigKeyAnalysisTaskRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 服务产品类型，支持值包括 "redis" - 云数据库 Redis。
   */
  Product: string
  /**
   * 分片节点序号列表。当列表为空时，选择所有分片节点。
   */
  ShardIds?: Array<number | bigint>
  /**
   * Top Key前缀的分隔符列表。
目前仅支持以下分割符：[",", ";", ":", "_", "-", "+", "@", "=", "|", "#", "."]，当列表为空时，默认选择所有分隔符。
   */
  KeyDelimiterList?: Array<string>
}

/**
 * DescribeMySqlProcessList返回参数结构体
 */
export interface DescribeMySqlProcessListResponse {
  /**
   * 实时线程列表。
   */
  ProcessList?: Array<MySqlProcess>
  /**
   * sql会话统计信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Statistics?: Array<StatisticInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateMonitorSwitch请求参数结构体
 */
export interface UpdateMonitorSwitchRequest {
  /**
   * 停止或重连Agent实例，支持值包括："on" - 重连实例， "off" - 停止实例。
   */
  Switch: string
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 服务产品类型，仅支持 "dbbrain-mysql" - 自建MySQL。
   */
  Product: string
}

/**
 * 实时会话访问来源详情。
 */
export interface SessionItem {
  /**
   * 访问来源。
   */
  Ip: string
  /**
   * 当前访问来源活跃连接数
   */
  ActiveConn: string
  /**
   * 当前访问来源总连接数
   */
  AllConn: number
}

/**
 * 统计分析维度下的统计数据详情
 */
export interface StatisticDataInfo {
  /**
   * 统计维度的值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 平均时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeAvg?: number
  /**
   * 总时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeSum?: number
  /**
   * 数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
}

/**
 * 实例健康详情。
 */
export interface HealthStatus {
  /**
   * 健康分数，满分100。
   */
  HealthScore: number
  /**
   * 健康等级，取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK"- 危险；"HIGH_RISK" - 高危。
   */
  HealthLevel: string
  /**
   * 总扣分分数。
   */
  ScoreLost: number
  /**
   * 扣分详情。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScoreDetails: Array<ScoreDetail>
}

/**
 * DescribeTopSpaceTables返回参数结构体
 */
export interface DescribeTopSpaceTablesResponse {
  /**
   * 返回的Top表空间统计信息列表。
   */
  TopSpaceTables?: Array<TableSpaceData>
  /**
   * 采集表空间数据的时间戳（秒）。
   */
  Timestamp?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 展示 redis kill 会话任务状态。
 */
export interface TaskInfo {
  /**
   * 异步任务 ID。
   */
  AsyncRequestId?: number
  /**
   * 当前实例所有 proxy 列表。
   */
  InstProxyList?: Array<string>
  /**
   * 当前实例所有 proxy 数量。
   */
  InstProxyCount?: number
  /**
   * 任务创建时间。
   */
  CreateTime?: string
  /**
   * 任务启动时间。
   */
  StartTime?: string
  /**
   * 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。
   */
  TaskStatus?: string
  /**
   * 完成 kill 任务的 proxyId。
   */
  FinishedProxyList?: Array<string>
  /**
   * kill 任务实行失败的 proxyId。
   */
  FailedProxyList?: Array<string>
  /**
   * 任务结束时间。
   */
  EndTime?: string
  /**
   * 任务执行进度。
   */
  Progress?: number
  /**
   * 实例 ID。
   */
  InstanceId?: string
}

/**
 * ModifySqlFilters返回参数结构体
 */
export interface ModifySqlFiltersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KillMySqlThreads返回参数结构体
 */
export interface KillMySqlThreadsResponse {
  /**
   * kill完成的sql会话ID列表。
   */
  Threads?: Array<number | bigint>
  /**
   * 执行ID， Prepare阶段的任务输出，用于Commit阶段中指定执行kill操作的会话ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SqlExecId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSchedulerMailProfile请求参数结构体
 */
export interface CreateSchedulerMailProfileRequest {
  /**
   * 取值范围1-7，分别代表周一至周日。
   */
  WeekConfiguration: Array<number | bigint>
  /**
   * 邮件配置内容。
   */
  ProfileInfo: ProfileInfo
  /**
   * 配置名称，需要保持唯一性，定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。
   */
  ProfileName: string
  /**
   * 配置订阅的实例ID。
   */
  BindInstanceId: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product: string
}

/**
 * 联系人contact描述。
 */
export interface ContactItem {
  /**
   * 联系人id。
   */
  Id?: number
  /**
   * 联系人姓名。
   */
  Name?: string
  /**
   * 联系人绑定的邮箱。
   */
  Mail?: string
}

/**
 * DeleteAuditLogFile返回参数结构体
 */
export interface DeleteAuditLogFileResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBSpaceStatus请求参数结构体
 */
export interface DescribeDBSpaceStatusRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 时间段天数，截止日期为当日，默认为7天。
   */
  RangeDays?: number
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，"mongodb" - 云数据库 MongoDB，默认为"mysql"。
   */
  Product?: string
}

/**
 * 告警规则
 */
export interface AlarmsRules {
  /**
   * 间隔
   */
  Interval: number
  /**
   * 告警名
   */
  Name: string
  /**
   * 指标
   */
  Metric: string
  /**
   * 操作符
   */
  Operator: string
  /**
   * 等级 
fatal-致命
critical-严重
warning-告警
information-通知

   */
  Severity: string
  /**
   * 指标值
   */
  Value?: number
}

/**
 * DescribeRedisProcessList请求参数结构体
 */
export interface DescribeRedisProcessListRequest {
  /**
   * Redis 实例ID。
   */
  InstanceId: string
  /**
   * 服务产品类型，支持值包括 "redis" - 云数据库 Redis。
   */
  Product: string
  /**
   * 查询的Proxy节点数量上限，默认值为20，最大值为50。
   */
  Limit?: number
  /**
   * Proxy节点的偏移量，默认值为0。
   */
  Offset?: number
}

/**
 * 单位时间间隔内的慢日志统计
 */
export interface TimeSlice {
  /**
   * 总数
   */
  Count: number
  /**
   * 统计开始时间
   */
  Timestamp: number
}

/**
 * DeleteDBDiagReportTasks请求参数结构体
 */
export interface DeleteDBDiagReportTasksRequest {
  /**
   * 需要删除的任务id列表
   */
  AsyncRequestIds: Array<number | bigint>
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * ModifyDiagDBInstanceConf请求参数结构体
 */
export interface ModifyDiagDBInstanceConfRequest {
  /**
   * 实例配置，包括巡检、概览开关等。
   */
  InstanceConfs: InstanceConfs
  /**
   * 生效实例地域，取值为"All"，代表全地域。
   */
  Regions: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，"redis" - 云数据库 Redis。
   */
  Product: string
  /**
   * 指定更改巡检状态的实例ID。
   */
  InstanceIds?: Array<string>
}

/**
 * DescribeSlowLogs返回参数结构体
 */
export interface DescribeSlowLogsResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number
  /**
   * 慢日志明细
   */
  Rows?: Array<SlowLogInfoItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAgentSwitch请求参数结构体
 */
export interface UpdateAgentSwitchRequest {
  /**
   * Agent标识。
   */
  AgentId: string
  /**
   * 停止或重连Agent，支持值包括："on" - 重连Agent， "off" - 停止Agent。
   */
  Switch: string
  /**
   * 服务产品类型，仅支持 "dbbrain-mysql" - 自建MySQL。
   */
  Product: string
}

/**
 * DescribeSecurityAuditLogDownloadUrls请求参数结构体
 */
export interface DescribeSecurityAuditLogDownloadUrlsRequest {
  /**
   * 安全审计组Id。
   */
  SecAuditGroupId: string
  /**
   * 异步任务Id。
   */
  AsyncRequestId: number
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL。
   */
  Product: string
}

/**
 * CreateDBDiagReportTask返回参数结构体
 */
export interface CreateDBDiagReportTaskResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncRequestId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时会话统计详情。
 */
export interface ProcessStatistic {
  /**
   * 会话详情数组。
   */
  Items: Array<SessionItem>
  /**
   * 总连接数。
   */
  AllConnSum: number
  /**
   * 总活跃连接数。
   */
  ActiveConnSum: number
}

/**
 * CreateMailProfile返回参数结构体
 */
export interface CreateMailProfileResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateMonitorSwitch返回参数结构体
 */
export interface UpdateMonitorSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogTimeSeriesStats请求参数结构体
 */
export interface DescribeSlowLogTimeSeriesStatsRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 开始时间，如“2019-09-10 12:13:14”。
   */
  StartTime: string
  /**
   * 结束时间，如“2019-09-10 12:13:14”，结束时间与开始时间的间隔最大可为7天。
   */
  EndTime: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * CancelKillTask请求参数结构体
 */
export interface CancelKillTaskRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * 实例id
 */
export interface InstanceID {
  /**
   * 实例id
   */
  InstanceId?: string
}

/**
 * DescribeDBDiagHistory请求参数结构体
 */
export interface DescribeDBDiagHistoryRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 开始时间，如“2019-09-10 12:13:14”。
   */
  StartTime: string
  /**
   * 结束时间，如“2019-09-11 12:13:14”，结束时间与开始时间的间隔最大可为2天。
   */
  EndTime: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * CreateAuditLogFile返回参数结构体
 */
export interface CreateAuditLogFileResponse {
  /**
   * 审计日志文件下载的任务ID
   */
  AsyncRequestId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例详细信息
 */
export interface AuditInstance {
  /**
   * 审计状态，已开通审计为：YES，未开通审计为：ON。
   */
  AuditStatus?: string
  /**
   * 审计日志大小，为兼容老版本用。
   */
  BillingAmount?: number
  /**
   * 计费确认状态，0-未确认；1-已确认。
   */
  BillingConfirmed?: number
  /**
   * 低频存储时长。
   */
  ColdLogExpireDay?: number
  /**
   * 低频日志存储量单位MB。
   */
  ColdLogSize?: number
  /**
   * 高频日志存储天数。
   */
  HotLogExpireDay?: number
  /**
   * 高频日志存储量，单位MB。
   */
  HotLogSize?: number
  /**
   * 实例Id。
   */
  InstanceId?: string
  /**
   * 日志保存总天数，为高频存储时长+低频存储时长。
   */
  LogExpireDay?: number
  /**
   * 实例创建时间。
   */
  CreateTime?: string
  /**
   * 实例详细信息。
   */
  InstanceInfo?: AuditInstanceInfo
}

/**
 * 推荐的索引
 */
export interface IndexesToBuild {
  /**
   * 索引id，唯一标识一个索引。
   */
  Id?: number
  /**
   * 创建索引命令。
   */
  IndexCommand?: string
  /**
   * 索引字符串。
   */
  IndexStr?: string
  /**
   * 优化级别，1-4，优先级从高到低。
   */
  Level?: number
  /**
   * 索引得分。
   */
  Score?: number
  /**
   * 签名。
   */
  Signs?: Array<string>
  /**
   * 0-待创建；1-创建中。
   */
  Status?: number
}

/**
 * DeleteSqlFilters返回参数结构体
 */
export interface DeleteSqlFiltersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBDiagEvents请求参数结构体
 */
export interface DescribeDBDiagEventsRequest {
  /**
   * 开始时间，如“2021-05-27 00:00:00”，支持的最早查询时间为当前时间的前30天。
   */
  StartTime: string
  /**
   * 结束时间，如“2021-05-27 01:00:00”，结束时间与开始时间的间隔最大可为7天。
   */
  EndTime: string
  /**
   * 风险等级列表，取值按影响程度从高至低分别为：1 - 致命、2 -严重、3 - 告警、4 - 提示、5 -健康。
   */
  Severities?: Array<number | bigint>
  /**
   * 实例ID列表。
   */
  InstanceIds?: Array<string>
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大值为50。
   */
  Limit?: number
}

/**
 * CreateDBDiagReportUrl返回参数结构体
 */
export interface CreateDBDiagReportUrlResponse {
  /**
   * 健康报告浏览地址。
   */
  ReportUrl: string
  /**
   * 健康报告浏览地址到期时间戳（秒）。
   */
  ExpireTime: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扣分详情。
 */
export interface ScoreDetail {
  /**
   * 扣分项分类，取值包括：可用性、可维护性、性能及可靠性。
   */
  IssueType: string
  /**
   * 扣分总分。
   */
  ScoreLost: number
  /**
   * 扣分总分上限。
   */
  ScoreLostMax: number
  /**
   * 扣分项列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items: Array<ScoreItem>
}

/**
 * OpenAuditService请求参数结构体
 */
export interface OpenAuditServiceRequest {
  /**
   * 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB。
   */
  Product: string
  /**
   * 与Product保持一致。如："dcdb" ,"mariadb"。
   */
  NodeRequestType: string
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 日志保存总时长，只能是7,30,90,180,365,1095,1825。
   */
  LogExpireDay: number
  /**
   * 高频日志保存时长，只能是7,30,90,180,365,1095,1825。
   */
  HotLogExpireDay: number
}

/**
 * CreateProxySessionKillTask请求参数结构体
 */
export interface CreateProxySessionKillTaskRequest {
  /**
   * 实例 ID。
   */
  InstanceId: string
  /**
   * 服务产品类型，支持值包括： "redis" - 云数据库 Redis。
   */
  Product: string
}

/**
 * DeleteDBDiagReportTasks返回参数结构体
 */
export interface DeleteDBDiagReportTasksResponse {
  /**
   * 任务删除状态, 0-删除成功
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProxyProcessStatistics返回参数结构体
 */
export interface DescribeProxyProcessStatisticsResponse {
  /**
   * 实时会话统计详情。
   */
  ProcessStatistics?: ProcessStatistic
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 热key分析返回信息
 */
export interface TopHotKeys {
  /**
   * 访问频次。
   */
  Count?: number
  /**
   * 热Key所属数据库。
   */
  Db?: string
  /**
   * Redis节点。
   */
  InstanceNodeId?: string
  /**
   * 热Key。
   */
  Key?: string
  /**
   * 数据类型。
   */
  Type?: string
}

/**
 * DescribeIndexRecommendInfo请求参数结构体
 */
export interface DescribeIndexRecommendInfoRequest {
  /**
   * 服务产品类型，支持值包括："mongodb" - 云数据库 。
   */
  Product: string
  /**
   * 实例ID。
   */
  InstanceId: string
}

/**
 * 慢日志来源地址详情。
 */
export interface SlowLogHost {
  /**
   * 来源地址。
   */
  UserHost: string
  /**
   * 该来源地址的慢日志数目占总数目的比例，单位%。
   */
  Ratio: number
  /**
   * 该来源地址的慢日志数目。
   */
  Count: number
}

/**
 * CreateMailProfile请求参数结构体
 */
export interface CreateMailProfileRequest {
  /**
   * 邮件配置内容。
   */
  ProfileInfo: ProfileInfo
  /**
   * 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。
   */
  ProfileLevel: string
  /**
   * 配置名称，需要保持唯一性，数据库巡检邮件配置名称自拟；定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。
   */
  ProfileName: string
  /**
   * 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。
   */
  ProfileType: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL。
   */
  Product: string
  /**
   * 配置绑定的实例ID，当配置级别为"Instance"时需要传入且只能为一个实例；当配置级别为“User”时，此参数不填。
   */
  BindInstanceIds?: Array<string>
}

/**
 * 单位时间间隔内的监控指标数据（浮点型）
 */
export interface MonitorFloatMetricSeriesData {
  /**
   * 监控指标。
   */
  Series?: Array<MonitorFloatMetric>
  /**
   * 监控指标对应的时间戳。
   */
  Timestamp?: Array<number | bigint>
}

/**
 * 邮件发送配置
 */
export interface MailConfiguration {
  /**
   * 是否开启邮件发送: 0, 否; 1, 是。
   */
  SendMail: number
  /**
   * 地域配置, 如["ap-guangzhou", "ap-shanghai"]。巡检的邮件发送模板，配置需要发送巡检邮件的地域；订阅的邮件发送模板，配置当前订阅实例的所属地域。
   */
  Region: Array<string>
  /**
   * 发送指定的健康等级的报告, 如["HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"]。
   */
  HealthStatus: Array<string>
  /**
   * 联系人id, 联系人/联系组不能都为空。
   */
  ContactPerson?: Array<number | bigint>
  /**
   * 联系组id, 联系人/联系组不能都为空。
   */
  ContactGroup?: Array<number | bigint>
}

/**
 * UpdateAgentSwitch返回参数结构体
 */
export interface UpdateAgentSwitchResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyUserAccount请求参数结构体
 */
export interface VerifyUserAccountRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 数据库账号名。
   */
  User: string
  /**
   * 数据库账号密码。
   */
  Password: string
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeSlowLogUserHostStats返回参数结构体
 */
export interface DescribeSlowLogUserHostStatsResponse {
  /**
   * 来源地址数目。
   */
  TotalCount?: number
  /**
   * 各来源地址的慢日志占比详情列表。
   */
  Items?: Array<SlowLogHost>
  /**
   * 各来源用户名的慢日志占比详情列表。
   */
  UserNameItems?: Array<SlowLogUser>
  /**
   * 来源用户数目。
   */
  UserTotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 库表空间统计数据。
 */
export interface TableSpaceData {
  /**
   * 表名。
   */
  TableName?: string
  /**
   * 库名。
   */
  TableSchema?: string
  /**
   * 库表的存储引擎。
   */
  Engine?: string
  /**
   * 数据空间（MB）。
   */
  DataLength?: number
  /**
   * 索引空间（MB）。
   */
  IndexLength?: number
  /**
   * 碎片空间（MB）。
   */
  DataFree?: number
  /**
   * 总使用空间（MB）。
   */
  TotalLength?: number
  /**
   * 碎片率（%）。
   */
  FragRatio?: number
  /**
   * 行数。
   */
  TableRows?: number
  /**
   * 表对应的独立物理文件大小（MB）。
   */
  PhysicalFileSize?: number
}

/**
 * 异常事件信息。
 */
export interface EventInfo {
  /**
   * 事件 ID 。
   */
  EventId?: number
  /**
   * 诊断类型。
   */
  DiagType?: string
  /**
   * 开始时间。
   */
  StartTime?: string
  /**
   * 结束时间。
   */
  EndTime?: string
  /**
   * 概要。
   */
  Outline?: string
  /**
   * 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。
   */
  Severity?: number
  /**
   * 扣分。
   */
  ScoreLost?: number
  /**
   * 保留字段。
   */
  Metric?: string
  /**
   * 告警数目。
   */
  Count?: number
}

/**
 * 实例列表查询条件
 */
export interface AuditInstanceFilter {
  /**
   * 搜索条件名称
   */
  Name: string
  /**
   * 要搜索的条件的值
   */
  Values: Array<string>
}

/**
 * DescribeMailProfile请求参数结构体
 */
export interface DescribeMailProfileRequest {
  /**
   * 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。
   */
  ProfileType: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product: string
  /**
   * 分页偏移量。
   */
  Offset: number
  /**
   * 分页单位，最大支持50。
   */
  Limit: number
  /**
   * 根据邮件配置名称查询，定期发送的邮件配置名称遵循："scheduler_"+{instanceId}的规则。
   */
  ProfileName?: string
}

/**
 * DeleteSecurityAuditLogExportTasks返回参数结构体
 */
export interface DeleteSecurityAuditLogExportTasksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KillMySqlThreads请求参数结构体
 */
export interface KillMySqlThreadsRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * kill会话任务的阶段，取值包括："Prepare"-准备阶段，"Commit"-提交阶段。
   */
  Stage: string
  /**
   * 需要kill的sql会话ID列表，此参数用于Prepare阶段。
   */
  Threads?: Array<number | bigint>
  /**
   * 执行ID，此参数用于Commit阶段。
   */
  SqlExecId?: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
  /**
   * 默认是true，会记录下kill的记录；该参数为true, 则在kill操作前校验目标会话是否存在，存在则继续kill，否则取消kill。为了加快kill速度，可设置为false。
   */
  RecordHistory?: boolean
}

/**
 * DescribeSqlFilters返回参数结构体
 */
export interface DescribeSqlFiltersResponse {
  /**
   * 限流任务总数目。
   */
  TotalCount?: number
  /**
   * 限流任务列表。
   */
  Items?: Array<SQLFilter>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Mongodb索引项
 */
export interface MongoDBIndex {
  /**
   * 实例id。
   */
  ClusterId?: string
  /**
   * 表名。
   */
  Collection?: string
  /**
   * 库名。
   */
  Db?: string
  /**
   * 优化级别，1-4，优先级从高到低。
   */
  Level?: number
  /**
   * 得分。
   */
  Score?: number
  /**
   * 推荐索引列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexesToBuild?: Array<IndexesToBuild>
  /**
   * 无效索引列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexesToDrop?: Array<IndexesToDrop>
}

/**
 * CreateDBDiagReportUrl请求参数结构体
 */
export interface CreateDBDiagReportUrlRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 健康报告相应的任务ID，可通过DescribeDBDiagReportTasks查询。
   */
  AsyncRequestId: number
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * CloseAuditService返回参数结构体
 */
export interface CloseAuditServiceResponse {
  /**
   * 0-关闭审计成功，非0关闭审计失败。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRedisBigKeyAnalysisTasks返回参数结构体
 */
export interface DeleteRedisBigKeyAnalysisTasksResponse {
  /**
   * 状态值，为0时代表正常处理。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseAuditService请求参数结构体
 */
export interface CloseAuditServiceRequest {
  /**
   * 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB。
   */
  Product: string
  /**
   * 与Product保持一致。如："dcdb" ,"mariadb"。
   */
  NodeRequestType: string
  /**
   * 实例Id。
   */
  InstanceId: string
}

/**
 * 实例配置。
 */
export interface InstanceConfs {
  /**
   * 数据库巡检开关, Yes/No。
   */
  DailyInspection?: string
  /**
   * 实例概览开关，Yes/No。
   */
  OverviewDisplay?: string
  /**
   * redis大key分析的自定义分割符，仅redis使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyDelimiters?: Array<string>
  /**
   * 分片节点数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShardNum?: string
  /**
   * 是否开启大key周期性分析，仅redis产品有效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AnalysisTopKey?: string
}

/**
 * 接收组信息
 */
export interface ReceiveInfo {
  /**
   * 接收组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiveGroup?: Array<number | bigint>
  /**
   * 最后接收时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndReceiveTime?: string
  /**
   * 接收名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiveName?: string
  /**
   * 推送渠道
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendChannel?: Array<number | bigint>
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartReceiveTime?: string
  /**
   * 接收用户列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiveUin?: Array<ReceiveUin>
}

/**
 * DescribeSqlTemplate返回参数结构体
 */
export interface DescribeSqlTemplateResponse {
  /**
   * 数据库名。
   */
  Schema?: string
  /**
   * SQL语句。
   */
  SqlText?: string
  /**
   * SQL类型。
   */
  SqlType?: string
  /**
   * SQL模版内容。
   */
  SqlTemplate?: string
  /**
   * SQL模版ID。
   */
  SqlId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取健康得分返回的详情。
 */
export interface HealthScoreInfo {
  /**
   * 异常详情。
   */
  IssueTypes: Array<IssueTypeInfo>
  /**
   * 异常事件总数。
   */
  EventsTotalCount: number
  /**
   * 健康得分。
   */
  HealthScore: number
  /**
   * 健康等级, 如："HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"。
   */
  HealthLevel: string
}

/**
 * DescribeTopSpaceTableTimeSeries返回参数结构体
 */
export interface DescribeTopSpaceTableTimeSeriesResponse {
  /**
   * 返回的Top表空间统计信息的时序数据列表。
   */
  TopSpaceTableTimeSeries?: Array<TableSpaceTimeSeries>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBDiagHistory返回参数结构体
 */
export interface DescribeDBDiagHistoryResponse {
  /**
   * 事件描述。
   */
  Events: Array<DiagHistoryEventItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * mongodb慢查模板概览明细
 */
export interface Aggregation {
  /**
   * 平均执行时间（ms）。
   */
  AvgExecTime?: number
  /**
   * 平均扫描行数。
   */
  AvgDocsExamined?: number
  /**
   * 产生慢查次数（/天）。
   */
  SlowLogCount?: number
  /**
   * 内存排序次数。
   */
  SortCount?: number
  /**
   * 慢查模板概览。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlowLogs?: Array<string>
}

/**
 * ModifySqlFilters请求参数结构体
 */
export interface ModifySqlFiltersRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * SQL限流任务ID列表。
   */
  FilterIds: Array<number | bigint>
  /**
   * 限流任务状态，取值支持TERMINATED - 终止。
   */
  Status: string
  /**
   * 通过VerifyUserAccount获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。
   */
  SessionToken?: string
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeAllUserContact返回参数结构体
 */
export interface DescribeAllUserContactResponse {
  /**
   * 联系人的总数量。
   */
  TotalCount: number
  /**
   * 联系人的信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Contacts: Array<ContactItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监控数据
 */
export interface MonitorMetric {
  /**
   * 指标名称。
   */
  Metric?: string
  /**
   * 指标单位。
   */
  Unit?: string
  /**
   * 指标值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values?: Array<number>
}

/**
 * 用户配置的信息
 */
export interface ProfileInfo {
  /**
   * 语言, 如"zh"。
   */
  Language: string
  /**
   * 邮件模板的内容。
   */
  MailConfiguration: MailConfiguration
}

/**
 * 用户配置的相关信息，包括邮件配置。
 */
export interface UserProfile {
  /**
   * 配置的id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProfileId?: string
  /**
   * 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProfileType?: string
  /**
   * 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProfileLevel?: string
  /**
   * 配置名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProfileName?: string
  /**
   * 配置详情。
   */
  ProfileInfo?: ProfileInfo
}

/**
 * AddUserContact请求参数结构体
 */
export interface AddUserContactRequest {
  /**
   * 联系人姓名，由中英文、数字、空格、!@#$%^&*()_+-=（）组成，不能以下划线开头，长度在20以内。
   */
  Name: string
  /**
   * 邮箱地址，支持大小写字母、数字、下划线、连字符及@字符， 只能以数字或字母开头，邮箱地址不可重复。
   */
  ContactInfo: string
  /**
   * 服务产品类型，固定值："mysql"。
   */
  Product: string
}

/**
 * CreateSqlFilter请求参数结构体
 */
export interface CreateSqlFilterRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * SQL类型，取值包括SELECT, UPDATE, DELETE, INSERT, REPLACE。
   */
  SqlType: string
  /**
   * 关键字，用于筛选SQL语句，多个关键字用英文逗号分隔，逗号不能作为关键词，多个关键词之间的关系为“逻辑与”。
   */
  FilterKey: string
  /**
   * 最大并发度，取值不能小于0，如果该值设为 0，则表示限制所有匹配的SQL执行。
   */
  MaxConcurrency: number
  /**
   * 限流时长，单位秒，支持-1和小于2147483647的正整数，-1表示永不过期。
   */
  Duration: number
  /**
   * 通过VerifyUserAccount获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。
   */
  SessionToken?: string
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * 实例基础信息。
 */
export interface InstanceBasicInfo {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 实例内网IP。
   */
  Vip?: string
  /**
   * 实例内网Port。
   */
  Vport?: number
  /**
   * 实例产品。
   */
  Product?: string
  /**
   * 实例引擎版本。
   */
  EngineVersion?: string
}

/**
 * 接收用户
 */
export interface ReceiveUin {
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UinName?: string
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
}

/**
 * 库空间统计数据。
 */
export interface SchemaSpaceData {
  /**
   * 库名。
   */
  TableSchema?: string
  /**
   * 数据空间（MB）。
   */
  DataLength?: number
  /**
   * 索引空间（MB）。
   */
  IndexLength?: number
  /**
   * 碎片空间（MB）。
   */
  DataFree?: number
  /**
   * 总使用空间（MB）。
   */
  TotalLength?: number
  /**
   * 碎片率（%）。
   */
  FragRatio?: number
  /**
   * 行数。
   */
  TableRows?: number
  /**
   * 库中所有表对应的独立物理文件大小加和（MB）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhysicalFileSize?: number
}

/**
 * DescribeAllUserContact请求参数结构体
 */
export interface DescribeAllUserContactRequest {
  /**
   * 服务产品类型，固定值：mysql。
   */
  Product: string
  /**
   * 联系人名数组，支持模糊搜索。
   */
  Names?: Array<string>
}

/**
 * 关系型数据库线程
 */
export interface MySqlProcess {
  /**
   * 线程ID。
   */
  ID?: string
  /**
   * 线程的操作账号名。
   */
  User?: string
  /**
   * 线程的操作主机地址。
   */
  Host?: string
  /**
   * 线程的操作数据库。
   */
  DB?: string
  /**
   * 线程的操作状态。
   */
  State?: string
  /**
   * 线程的执行类型。
   */
  Command?: string
  /**
   * 线程的操作时长，单位秒。
   */
  Time?: string
  /**
   * 线程的操作语句。
   */
  Info?: string
}

/**
 * DescribeDBDiagEvent请求参数结构体
 */
export interface DescribeDBDiagEventRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 事件 ID 。通过“获取实例诊断历史DescribeDBDiagHistory”获取。
   */
  EventId?: number
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeNoPrimaryKeyTables请求参数结构体
 */
export interface DescribeNoPrimaryKeyTablesRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 查询日期，如2021-05-27，最早为30天前的日期。
   */
  Date: string
  /**
   * 查询数目，默认为20，最大为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * 会话统计的维度信息,可以多个维度
 */
export interface StatDimension {
  /**
   * 维度名称，目前仅支持：SqlTag。
   */
  Dimension: string
  /**
   * SQL 标签过滤与统计信息
示例：

示例 1：[p=position] 统计包含 p=position 标签的 SQL 会话。
示例 2：[p] 统计包含 p 标签的 SQL 会话。
示例 3：[p=position, c=idCard] 统计同时包含 p=position 标签和 c=idCard 标签的 SQL 会话。
   */
  Data?: Array<string>
}

/**
 * 通知模板
 */
export interface AlarmProfileList {
  /**
   * 0-不是 1-是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWebHook?: number
  /**
   * 接收告警用户数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiveUinCount?: number
  /**
   * 语言
注意：此字段可能返回 null，表示取不到有效值。
   */
  Lang?: string
  /**
   * 模板类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateType?: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 接收组数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiveGroupCount?: number
  /**
   * 更新用户的uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUin?: number
  /**
   * 接收类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiveType?: Array<number | bigint>
  /**
   * 接收用户信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiveInfo?: Array<ReceiveInfo>
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 模板名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateName?: string
  /**
   * 发送渠道
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendChannel?: Array<number | bigint>
  /**
   * 模板id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: number
  /**
   * webhook数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebHookCount?: number
}

/**
 * 查询实例列表，返回实例的相关信息的对象。
 */
export interface InstanceInfo {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 实例所属地域。
   */
  Region?: string
  /**
   * 健康得分。
   */
  HealthScore?: number
  /**
   * 所属产品。
   */
  Product?: string
  /**
   * 异常事件数量。
   */
  EventCount?: number
  /**
   * 实例类型：1:MASTER；2:DR，3：RO，4:SDR。
   */
  InstanceType?: number
  /**
   * 核心数。
   */
  Cpu?: number
  /**
   * 内存，单位MB。
   */
  Memory?: number
  /**
   * 硬盘存储，单位GB。
   */
  Volume?: number
  /**
   * 数据库版本。
   */
  EngineVersion?: string
  /**
   * 内网地址。
   */
  Vip?: string
  /**
   * 内网端口。
   */
  Vport?: number
  /**
   * 接入来源。
   */
  Source?: string
  /**
   * 分组ID。
   */
  GroupId?: string
  /**
   * 分组组名。
   */
  GroupName?: string
  /**
   * 实例状态：0：发货中；1：运行正常；4：销毁中；5：隔离中。
   */
  Status?: number
  /**
   * 子网统一ID。
   */
  UniqSubnetId?: string
  /**
   * cdb类型。
   */
  DeployMode?: string
  /**
   * cdb实例初始化标志：0：未初始化；1：已初始化。
   */
  InitFlag?: number
  /**
   * 任务状态。
   */
  TaskStatus?: number
  /**
   * 私有网络统一ID。
   */
  UniqVpcId?: string
  /**
   * 实例巡检/概览的状态。
   */
  InstanceConf?: InstanceConfs
  /**
   * 资源到期时间。
   */
  DeadlineTime?: string
  /**
   * 是否是DBbrain支持的实例。
   */
  IsSupported?: boolean
  /**
   * 实例安全审计日志开启状态：ON： 安全审计开启；OFF： 未开启安全审计。
   */
  SecAuditStatus?: string
  /**
   * 实例审计日志开启状态，ALL_AUDIT： 开启全审计；RULE_AUDIT： 开启规则审计；UNBOUND： 未开启审计。
   */
  AuditPolicyStatus?: string
  /**
   * 实例审计日志运行状态：normal： 运行中； paused： 欠费暂停。
   */
  AuditRunningStatus?: string
  /**
   * 内网vip。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternalVip?: string
  /**
   * 内网port。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternalVport?: number
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 所属集群ID（仅对集群数据库产品该字段非空，如TDSQL-C）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 所属集群名称（仅对集群数据库产品该字段非空，如TDSQL-C）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * 自建MySQL的Agent状态，"not_deployed" - 未部署，"deploying" - 部署中，"connected" - 连接正常，"deploy_failed" - 连接失败，"monitoring" - 连接正常，"stopped" - 暂停连接，"connect_failed" - 连接失败，unknown - 未知。
   */
  AgentStatus?: string
  /**
   * 自建MySQL的实例状态，"not_attached" - 未连接，"attached" - 连接正常，"failed" - 连接失败，"stopped" - 停止监控，unknown- 未知。
   */
  InstanceStatus?: string
}

/**
 * 通知模板
 */
export interface TemplateInfo {
  /**
   * 模板id
   */
  TemplateId: string
  /**
   * 模板名
   */
  TemplateName: string
}

/**
 * DescribeAuditInstanceList请求参数结构体
 */
export interface DescribeAuditInstanceListRequest {
  /**
   * 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB。
   */
  Product: string
  /**
   * 与Product保持一致。如："dcdb" ,"mariadb"。
   */
  NodeRequestType: string
  /**
   * 审计状态标识，0-未开通审计；1-已开通审计，默认为0。
   */
  AuditSwitch?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 查询数目，默认为20，最大为100。
   */
  Limit?: number
  /**
   * 查询实例的搜索条件。
   */
  Filters?: Array<AuditInstanceFilter>
}

/**
 * DescribeRedisBigKeyAnalysisTasks请求参数结构体
 */
export interface DescribeRedisBigKeyAnalysisTasksRequest {
  /**
   * 服务产品类型，支持值包括 "redis" - 云数据库 Redis。
   */
  Product: string
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 查询数目，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
}

/**
 * DescribeSqlFilters请求参数结构体
 */
export interface DescribeSqlFiltersRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 任务ID列表，用于筛选任务列表。
   */
  FilterIds?: Array<number | bigint>
  /**
   * 任务状态列表，用于筛选任务列表，取值包括RUNNING - 运行中, FINISHED - 已完成, TERMINATED - 已终止。
   */
  Statuses?: Array<string>
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeSecurityAuditLogExportTasks请求参数结构体
 */
export interface DescribeSecurityAuditLogExportTasksRequest {
  /**
   * 安全审计组Id。
   */
  SecAuditGroupId: string
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL。
   */
  Product: string
  /**
   * 日志导出任务Id列表。
   */
  AsyncRequestIds?: Array<number | bigint>
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大值为100。
   */
  Limit?: number
}

/**
 * DeleteSecurityAuditLogExportTasks请求参数结构体
 */
export interface DeleteSecurityAuditLogExportTasksRequest {
  /**
   * 安全审计组Id。
   */
  SecAuditGroupId: string
  /**
   * 日志导出任务Id列表，接口会忽略不存在或已删除的任务Id。
   */
  AsyncRequestIds: Array<number | bigint>
  /**
   * 服务产品类型，支持值： "mysql" - 云数据库 MySQL。
   */
  Product: string
}

/**
 * CreateSchedulerMailProfile返回参数结构体
 */
export interface CreateSchedulerMailProfileResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmTemplate返回参数结构体
 */
export interface DescribeAlarmTemplateResponse {
  /**
   * 模板列表
   */
  ProfileList?: Array<AlarmProfileList>
  /**
   * 模板总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopSpaceSchemaTimeSeries请求参数结构体
 */
export interface DescribeTopSpaceSchemaTimeSeriesRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 返回的Top库数量，最大值为100，默认为20。
   */
  Limit?: number
  /**
   * 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。
   */
  SortBy?: string
  /**
   * 开始日期，如“2021-01-01”，最早为当日的前第29天，默认为截止日期的前第6天。
   */
  StartDate?: string
  /**
   * 截止日期，如“2021-01-01”，最早为当日的前第29天，默认为当日。
   */
  EndDate?: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * ModifyAuditService请求参数结构体
 */
export interface ModifyAuditServiceRequest {
  /**
   * 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB。
   */
  Product: string
  /**
   * 与Product保持一致。如："dcdb" ,"mariadb"。
   */
  NodeRequestType: string
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 日志保存总时长，只能是7,30,90,180,365,1095,1825。
   */
  LogExpireDay: number
  /**
   * 高频日志保存时长，只能是7,30,90,180,365,1095,1825。
   */
  HotLogExpireDay: number
}

/**
 * DescribeIndexRecommendAggregationSlowLogs返回参数结构体
 */
export interface DescribeIndexRecommendAggregationSlowLogsResponse {
  /**
   * 查询实例慢查询聚合结果。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Aggregation?: Aggregation
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBDiagEvents返回参数结构体
 */
export interface DescribeDBDiagEventsResponse {
  /**
   * 诊断事件的总数目。
   */
  TotalCount: number
  /**
   * 诊断事件的列表。
   */
  Items: Array<DiagHistoryEventItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMailProfile返回参数结构体
 */
export interface DescribeMailProfileResponse {
  /**
   * 邮件配置详情。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProfileList?: Array<UserProfile>
  /**
   * 邮件配置总数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRedisTopBigKeys请求参数结构体
 */
export interface DescribeRedisTopBigKeysRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 查询日期，如2021-05-27，最早可为前30天的日期。
   */
  Date: string
  /**
   * 服务产品类型，支持值包括 "redis" - 云数据库 Redis。
   */
  Product: string
  /**
   * 排序字段，取值包括Capacity - 内存，ItemCount - 元素数量，默认为Capacity。
   */
  SortBy?: string
  /**
   * key类型筛选条件，默认为不进行筛选，取值包括string, list, set, hash, sortedset, stream。
   */
  KeyType?: string
  /**
   * 查询数目，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 异步任务ID。当为空时，选择最近任务的ID。
   */
  AsyncRequestId?: number
  /**
   * 分片节点序号列表。当列表为空时，选择所有分片节点。
   */
  ShardIds?: Array<number | bigint>
}

/**
 * DescribeIndexRecommendInfo返回参数结构体
 */
export interface DescribeIndexRecommendInfoResponse {
  /**
   * 索引推荐的集合数量。
   */
  CollectionNum?: number
  /**
   * 索引推荐的索引数量。
   */
  IndexNum?: number
  /**
   * 索引项。
   */
  Items?: Array<MongoDBIndex>
  /**
   * 优化级别，1-4，优先级从高到低。
   */
  Level?: number
  /**
   * 历史优化数。
   */
  Optimized?: number
  /**
   * 累计优化条数。
   */
  OptimizedCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时会话详情。
 */
export interface Process {
  /**
   * 会话 ID。
   */
  Id?: number
  /**
   * 访问来源，IP 地址和端口号。
   */
  Address?: string
  /**
   * 文件描述符。
   */
  FileDescriptor?: number
  /**
   * 会话名称，使用 CLIENT SETNAME 命令设置。
   */
  Name?: string
  /**
   * 最后一次执行的命令。
   */
  LastCommand?: string
  /**
   * 会话存活时间，单位：秒。
   */
  Age?: number
  /**
   * 最后一次执行命令后空闲的时间，单位：秒。
   */
  Idle?: number
  /**
   * 会话所属的 Proxy节点 ID。
   */
  ProxyId?: string
}

/**
 * ModifyAuditService返回参数结构体
 */
export interface ModifyAuditServiceResponse {
  /**
   * 审计配置修改结果，0-修改成功,非0-修改失败。
   */
  Success?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHealthScore请求参数结构体
 */
export interface DescribeHealthScoreRequest {
  /**
   * 需要获取健康得分的实例ID。
   */
  InstanceId: string
  /**
   * 获取健康得分的时间，时间格式如：2019-09-10 12:13:14。
   */
  Time: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product: string
}

/**
 * DeleteRedisBigKeyAnalysisTasks请求参数结构体
 */
export interface DeleteRedisBigKeyAnalysisTasksRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 待删除的异步任务ID列表。
   */
  AsyncRequestIds: Array<number | bigint>
  /**
   * 服务产品类型，支持值包括 "redis" - 云数据库 Redis。
   */
  Product: string
}

/**
 * 指标信息。
 */
export interface IssueTypeInfo {
  /**
   * 指标分类：AVAILABILITY：可用性，MAINTAINABILITY：可维护性，PERFORMANCE，性能，RELIABILITY可靠性。
   */
  IssueType: string
  /**
   * 异常事件。
   */
  Events: Array<EventInfo>
  /**
   * 异常事件总数。
   */
  TotalCount: number
}

/**
 * DescribeDiagDBInstances返回参数结构体
 */
export interface DescribeDiagDBInstancesResponse {
  /**
   * 实例总数。
   */
  TotalCount?: number
  /**
   * 全实例巡检状态：0：开启全实例巡检；1：未开启全实例巡检。
   */
  DbScanStatus?: number
  /**
   * 实例相关信息。
   */
  Items?: Array<InstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAllUserGroup请求参数结构体
 */
export interface DescribeAllUserGroupRequest {
  /**
   * 服务产品类型，固定值：mysql。
   */
  Product: string
  /**
   * 联系组名称数组，支持模糊搜索。
   */
  Names?: Array<string>
}

/**
 * CreateKillTask请求参数结构体
 */
export interface CreateKillTaskRequest {
  /**
   * kill会话任务的关联实例ID。
   */
  InstanceId: string
  /**
   * 任务持续时间，单位秒，手动关闭任务传-1。
   */
  Duration: number
  /**
   * 任务过滤条件，客户端IP。
   */
  Host?: string
  /**
   * 任务过滤条件，数据库库名,多个","隔开。
   */
  DB?: string
  /**
   * 任务过滤条件，相关命令，多个","隔开。
   */
  Command?: string
  /**
   * 任务过滤条件，支持单条件前缀匹配。
   */
  Info?: string
  /**
   * 任务过滤条件，支持多个关键字匹配，与Info参数互斥。
   */
  Infos?: Array<string>
  /**
   * 任务过滤条件，用户类型。
   */
  User?: string
  /**
   * 任务过滤条件，会话持续时长，单位秒。
   */
  Time?: number
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeRedisTopHotKeys返回参数结构体
 */
export interface DescribeRedisTopHotKeysResponse {
  /**
   * 热Key分析结果
   */
  TopHotKeys?: Array<TopHotKeys>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityAuditLogExportTask返回参数结构体
 */
export interface CreateSecurityAuditLogExportTaskResponse {
  /**
   * 日志导出任务Id。
   */
  AsyncRequestId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SchemaItem数组
 */
export interface SchemaItem {
  /**
   * 数据库名称
   */
  Schema: string
}

/**
 * CreateSqlFilter返回参数结构体
 */
export interface CreateSqlFilterResponse {
  /**
   * 限流任务ID。
   */
  FilterId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogUserHostStats请求参数结构体
 */
export interface DescribeSlowLogUserHostStatsRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 查询范围的开始时间，时间格式如：2019-09-10 12:13:14。
   */
  StartTime: string
  /**
   * 查询范围的结束时间，时间格式如：2019-09-10 12:13:14。
   */
  EndTime: string
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
  /**
   * SQL模板的MD5值
   */
  Md5?: string
}

/**
 * DescribeTopSpaceSchemas返回参数结构体
 */
export interface DescribeTopSpaceSchemasResponse {
  /**
   * 返回的Top库空间统计信息列表。
   */
  TopSpaceSchemas: Array<SchemaSpaceData>
  /**
   * 采集库空间数据的时间戳（秒）。
   */
  Timestamp: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProxySessionKillTask返回参数结构体
 */
export interface CreateProxySessionKillTaskResponse {
  /**
   * 创建 kill 会话任务返回的异步任务 id
   */
  AsyncRequestId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 审计日志文件
 */
export interface AuditLogFile {
  /**
   * 审计日志文件生成异步任务ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncRequestId?: number
  /**
   * 审计日志文件名称。
   */
  FileName?: string
  /**
   * 审计日志文件创建时间。格式为 : "2019-03-20 17:09:13"。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 文件状态值。可能返回的值为：
"creating" - 生成中;
"failed" - 创建失败;
"success" - 已生成;
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 文件大小，单位为 KB。
   */
  FileSize?: number
  /**
   * 审计日志下载地址。
   */
  DownloadUrl?: string
  /**
   * 错误信息。
   */
  ErrMsg?: string
  /**
   * 文件生成进度。
   */
  Progress?: number
  /**
   * 文件生成成功时间。
   */
  FinishTime?: string
}

/**
 * DescribeAlarmTemplate请求参数结构体
 */
export interface DescribeAlarmTemplateRequest {
  /**
   * 搜索字段
   */
  TemplateNameRegexp: string
  /**
   * 返回限制长度
   */
  Limit: number
  /**
   * 偏置
   */
  Offset: number
  /**
   * mysql -  mysql
cynosdb -  tdsql-c
   */
  Product?: string
}

/**
 * VerifyUserAccount返回参数结构体
 */
export interface VerifyUserAccountResponse {
  /**
   * 会话token，有效期为5分钟。
   */
  SessionToken: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogTimeSeriesStats返回参数结构体
 */
export interface DescribeSlowLogTimeSeriesStatsResponse {
  /**
   * 柱间单位时间间隔，单位为秒。
   */
  Period?: number
  /**
   * 单位时间间隔内慢日志数量统计。
   */
  TimeSeries?: Array<TimeSlice>
  /**
   * 单位时间间隔内的实例 cpu 利用率监控数据。
   */
  SeriesData?: MonitorMetricSeriesData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProxyProcessStatistics请求参数结构体
 */
export interface DescribeProxyProcessStatisticsRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 该实例下需要查询的某一个 ProxyID 。
   */
  InstanceProxyId: string
  /**
   * 返回数量。
   */
  Limit: number
  /**
   * 服务产品类型，支持值包括： "redis" - 云数据库 Redis。
   */
  Product: string
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 按照某字段排序。支持值包括："AllConn"，"ActiveConn"，"Ip"。
   */
  SortBy?: string
  /**
   * 排序方向。支持值包括："DESC"，"ASC"。
   */
  OrderDirection?: string
}

/**
 * sql会话统计信息
 */
export interface StatisticInfo {
  /**
   * 统计分析的维度。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dimension?: string
  /**
   * 统计分析的维度下的统计数据详情。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<StatisticDataInfo>
}

/**
 * 监控数据（浮点型）
 */
export interface MonitorFloatMetric {
  /**
   * 指标名称。
   */
  Metric: string
  /**
   * 指标单位。
   */
  Unit: string
  /**
   * 指标值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values: Array<number>
}

/**
 * ModifyAlarmPolicy请求参数结构体
 */
export interface ModifyAlarmPolicyRequest {
  /**
   * 类型
   */
  ApplyType: string
  /**
   * 开启策略
   */
  Enable: number
  /**
   * 列表
   */
  InstanceIds: Array<InstanceID>
  /**
   * User-动态关联该用户所有实例
Instance-关联实例列表的实例
   */
  NewProfileLevel: string
  /**
   * 新策略名
   */
  NewProfileName: string
  /**
   * 旧策略名
   */
  ProfileName: string
  /**
   * 策略类型
   */
  ProfileType: string
  /**
   * 备注
   */
  Remark: string
  /**
   * 规则类型 0-快速，1-自定义 若值为0，则QuickRule不能为空，若值为1，则Rules 不能为空
   */
  RuleType: number
  /**
   * 接受模板
   */
  TemplateInfo: Array<TemplateInfo>
  /**
   * 快速规则  支持包括fatal-致命, critical-严重,
warning-告警,
information-通知
   */
  QuickRule?: string
  /**
   * 自定义规则
   */
  Rules?: Array<AlarmsRules>
}

/**
 * DescribeRedisTopKeyPrefixList返回参数结构体
 */
export interface DescribeRedisTopKeyPrefixListResponse {
  /**
   * top key前缀列表。
   */
  Items?: Array<RedisPreKeySpaceData>
  /**
   * 采集时间戳（秒）。
   */
  Timestamp?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAllUserGroup返回参数结构体
 */
export interface DescribeAllUserGroupResponse {
  /**
   * 组总数。
   */
  TotalCount: number
  /**
   * 组信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Groups: Array<GroupItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRedisProcessList返回参数结构体
 */
export interface DescribeRedisProcessListResponse {
  /**
   * 该实例的Proxy节点数量，可用于分页查询。
   */
  ProxyCount?: number
  /**
   * 实时会话详情列表。
   */
  Processes?: Array<Process>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuditLogFile请求参数结构体
 */
export interface CreateAuditLogFileRequest {
  /**
   * 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB for MariaDB。
   */
  Product: string
  /**
   * 与Product保持一致。如："dcdb" ,"mariadb"
   */
  NodeRequestType: string
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 开始时间，如“2019-09-10 12:13:14”。
   */
  StartTime: string
  /**
   * 截止时间，如“2019-09-11 10:13:14”。
   */
  EndTime: string
  /**
   * 过滤条件。可按设置的过滤条件过滤日志。
   */
  Filter?: AuditLogFilter
}

/**
 * DeleteAuditLogFile请求参数结构体
 */
export interface DeleteAuditLogFileRequest {
  /**
   * 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB for MariaDB。
   */
  Product: string
  /**
   * 与Product保持一致。如："dcdb" ,"mariadb"
   */
  NodeRequestType: string
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 审计日志文件生成异步任务ID。
   */
  AsyncRequestId: number
}

/**
 * ModifyDiagDBInstanceConf返回参数结构体
 */
export interface ModifyDiagDBInstanceConfResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserSqlAdvice返回参数结构体
 */
export interface DescribeUserSqlAdviceResponse {
  /**
   * SQL优化建议，可解析为JSON数组，无需优化时输出为空。
   */
  Advices?: string
  /**
   * SQL优化建议备注，可解析为String数组，无需优化时输出为空。
   */
  Comments?: string
  /**
   * SQL语句。
   */
  SqlText?: string
  /**
   * 库名。
   */
  Schema?: string
  /**
   * 相关表的DDL信息，可解析为JSON数组。
   */
  Tables?: string
  /**
   * SQL执行计划，可解析为JSON，无需优化时输出为空。
   */
  SqlPlan?: string
  /**
   * SQL优化后的成本节约详情，可解析为JSON，无需优化时输出为空。
   */
  Cost?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBSpaceStatus返回参数结构体
 */
export interface DescribeDBSpaceStatusResponse {
  /**
   * 磁盘增长量(MB)。
   */
  Growth?: number
  /**
   * 磁盘剩余(MB)。
   */
  Remain?: number
  /**
   * 磁盘总量(MB)。
   */
  Total?: number
  /**
   * 预计可用天数。
   */
  AvailableDays?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例SQL限流任务。
 */
export interface SQLFilter {
  /**
   * 任务ID。
   */
  Id?: number
  /**
   * 任务状态，取值包括RUNNING - 运行中, FINISHED - 已完成, TERMINATED - 已终止。
   */
  Status?: string
  /**
   * SQL类型，取值包括SELECT, UPDATE, DELETE, INSERT, REPLACE。
   */
  SqlType?: string
  /**
   * 筛选SQL的关键词，多个关键词用英文逗号拼接。
   */
  OriginKeys?: string
  /**
   * 筛选SQL的规则。
   */
  OriginRule?: string
  /**
   * 已拒绝SQL数目。
   */
  RejectedSqlCount?: number
  /**
   * 当前并发数。
   */
  CurrentConcurrency?: number
  /**
   * 最大并发数。
   */
  MaxConcurrency?: number
  /**
   * 任务创建时间。
   */
  CreateTime?: string
  /**
   * 当前时间。
   */
  CurrentTime?: string
  /**
   * 限流过期时间。
   */
  ExpireTime?: string
}

/**
 * 描述组信息。
 */
export interface GroupItem {
  /**
   * 组id。
   */
  Id?: number
  /**
   * 组名称。
   */
  Name?: string
  /**
   * 组成员数量。
   */
  MemberCount?: number
}

/**
 * redis key前缀空间信息
 */
export interface RedisPreKeySpaceData {
  /**
   * 平均元素长度。
   */
  AveElementSize: number
  /**
   * 总占用内存（Byte）。
   */
  Length: number
  /**
   * key前缀。
   */
  KeyPreIndex: string
  /**
   * 元素数量。
   */
  ItemCount: number
  /**
   * key个数。
   */
  Count: number
  /**
   * 最大元素长度。
   */
  MaxElementSize: number
}

/**
 * DescribeTopSpaceTableTimeSeries请求参数结构体
 */
export interface DescribeTopSpaceTableTimeSeriesRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 返回的Top表数量，最大值为100，默认为20。
   */
  Limit?: number
  /**
   * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
   */
  SortBy?: string
  /**
   * 开始日期，如“2021-01-01”，最早为当日的前第29天，默认为截止日期的前第6天。
   */
  StartDate?: string
  /**
   * 截止日期，如“2021-01-01”，最早为当日的前第29天，默认为当日。
   */
  EndDate?: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeUserSqlAdvice请求参数结构体
 */
export interface DescribeUserSqlAdviceRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * SQL语句。
   */
  SqlText: string
  /**
   * 库名。
   */
  Schema?: string
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL；"dbbrain-mysql" - 自建 MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeDBDiagReportTasks请求参数结构体
 */
export interface DescribeDBDiagReportTasksRequest {
  /**
   * 第一个任务的开始时间，用于范围查询，时间格式如：2019-09-10 12:13:14。
   */
  StartTime?: string
  /**
   * 最后一个任务的开始时间，用于范围查询，时间格式如：2019-09-10 12:13:14。
   */
  EndTime?: string
  /**
   * 实例ID数组，用于筛选指定实例的任务列表。
   */
  InstanceIds?: Array<string>
  /**
   * 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。
   */
  Sources?: Array<string>
  /**
   * 报告的健康等级，支持的取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK" - 危险；"HIGH_RISK" - 高危。
   */
  HealthLevels?: string
  /**
   * 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。
   */
  TaskStatuses?: string
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 返回数量，默认20，最大值为100。
   */
  Limit?: number
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * 单位时间间隔内的监控指标数据
 */
export interface MonitorMetricSeriesData {
  /**
   * 监控指标。
   */
  Series?: Array<MonitorMetric>
  /**
   * 监控指标对应的时间戳。
   */
  Timestamp?: Array<number | bigint>
}

/**
 * 慢日志详细信息
 */
export interface SlowLogInfoItem {
  /**
   * 慢日志开始时间
   */
  Timestamp?: string
  /**
   * sql语句
   */
  SqlText?: string
  /**
   * 数据库
   */
  Database?: string
  /**
   * User来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * IP来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserHost?: string
  /**
   * 执行时间,单位秒
   */
  QueryTime?: number
  /**
   * 锁时间,单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  LockTime?: number
  /**
   * 扫描行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RowsExamined?: number
  /**
   * 返回行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RowsSent?: number
}

/**
 * 无效索引
 */
export interface IndexesToDrop {
  /**
   * 索引字符串。
   */
  IndexStr?: string
  /**
   * 索引得分。
   */
  Score?: number
  /**
   * 无效原因。
   */
  Reason?: string
  /**
   * 删除索引命令。
   */
  IndexCommand?: string
  /**
   * 索引名。
   */
  IndexName?: string
}

/**
 * DescribeHealthScore返回参数结构体
 */
export interface DescribeHealthScoreResponse {
  /**
   * 健康得分以及异常扣分项。
   */
  Data: HealthScoreInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityAuditLogExportTasks返回参数结构体
 */
export interface DescribeSecurityAuditLogExportTasksResponse {
  /**
   * 安全审计日志导出任务列表。
   */
  Tasks: Array<SecLogExportTaskInfo>
  /**
   * 安全审计日志导出任务总数。
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopSpaceSchemas请求参数结构体
 */
export interface DescribeTopSpaceSchemasRequest {
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 返回的Top库数量，最大值为100，默认为20。
   */
  Limit?: number
  /**
   * 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。
   */
  SortBy?: string
  /**
   * 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB  for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeSlowLogTopSqls返回参数结构体
 */
export interface DescribeSlowLogTopSqlsResponse {
  /**
   * 符合条件的记录总数。
   */
  TotalCount?: number
  /**
   * 慢日志 top sql 列表
   */
  Rows?: Array<SlowLogTopSqlItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNoPrimaryKeyTables返回参数结构体
 */
export interface DescribeNoPrimaryKeyTablesResponse {
  /**
   * 无主键表总数。
   */
  NoPrimaryKeyTableCount?: number
  /**
   * 与昨日扫描无主键表的差值，正数为增加，负数为减少，0为无变化。
   */
  NoPrimaryKeyTableCountDiff?: number
  /**
   * 记录的无主键表总数（不超过无主键表总数），可用于分页查询。
   */
  NoPrimaryKeyTableRecordCount?: number
  /**
   * 无主键表列表。
   */
  NoPrimaryKeyTables?: Array<Table>
  /**
   * 采集时间戳（秒）。
   */
  Timestamp?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAuditLogFiles请求参数结构体
 */
export interface DescribeAuditLogFilesRequest {
  /**
   * 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB for MariaDB， "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL， "postgres" - 云数据库 PostgreSQL
   */
  Product: string
  /**
   * 该字段规则如下： 当product为"dcdb"则输入"dcdb"， 当product为"mariadb"则输入"mariadb"， 当product为"mysql"则输入"mysql"， 当product为"cynosdb"则输入"mysql"， 当product为"postgres"则输入"postgres"。
   */
  NodeRequestType: string
  /**
   * 实例 ID 。
   */
  InstanceId: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 查询数目，默认为20，最大为100。
   */
  Limit?: number
}

/**
 * DeleteSqlFilters请求参数结构体
 */
export interface DeleteSqlFiltersRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 限流任务ID列表。
   */
  FilterIds: Array<number | bigint>
  /**
   * 通过VerifyUserAccount获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。
   */
  SessionToken?: string
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
}

/**
 * DescribeDiagDBInstances请求参数结构体
 */
export interface DescribeDiagDBInstancesRequest {
  /**
   * 是否是DBbrain支持的实例，固定传 true。
   */
  IsSupported: boolean
  /**
   * 服务产品类型，支持值包括："mysql" - 云数据库 MySQL，"cynosdb" - 云数据库 TDSQL-C for MySQL，"dbbrain-mysql" - 自建 MySQL，"redis" - 云数据库 Redis，默认为"mysql"。
   */
  Product: string
  /**
   * 分页参数，偏移量。
   */
  Offset: number
  /**
   * 分页参数，分页值，最大值为100。
   */
  Limit: number
  /**
   * 根据实例名称条件查询。
   */
  InstanceNames?: Array<string>
  /**
   * 根据实例ID条件查询。
   */
  InstanceIds?: Array<string>
  /**
   * 根据地域条件查询。
   */
  Regions?: Array<string>
}

/**
 * 表结构。
 */
export interface Table {
  /**
   * 库名。
   */
  TableSchema?: string
  /**
   * 表名。
   */
  TableName?: string
  /**
   * 库表的存储引擎。
   */
  Engine?: string
  /**
   * 行数。
   */
  TableRows?: number
  /**
   * 总使用空间（MB）。
   */
  TotalLength?: number
}

/**
 * DescribeMySqlProcessList请求参数结构体
 */
export interface DescribeMySqlProcessListRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 线程的ID，用于筛选线程列表。
   */
  ID?: number
  /**
   * 线程的操作账号名，用于筛选线程列表。
   */
  User?: string
  /**
   * 线程的操作主机地址，用于筛选线程列表。
   */
  Host?: string
  /**
   * 线程的操作数据库，用于筛选线程列表。
   */
  DB?: string
  /**
   * 线程的操作状态，用于筛选线程列表。
   */
  State?: string
  /**
   * 线程的执行类型，用于筛选线程列表。
   */
  Command?: string
  /**
   * 线程的操作时长最小值，单位秒，用于筛选操作时长大于该值的线程列表。
   */
  Time?: number
  /**
   * 线程的操作语句，用于筛选线程列表。
   */
  Info?: string
  /**
   * 返回数量，默认20。
   */
  Limit?: number
  /**
   * 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。
   */
  Product?: string
  /**
   * 会话统计的维度信息,可以多个维度。
   */
  StatDimensions?: Array<StatDimension>
}

/**
 * DescribeSecurityAuditLogDownloadUrls返回参数结构体
 */
export interface DescribeSecurityAuditLogDownloadUrlsResponse {
  /**
   * 导出结果的COS链接列表。当结果集很大时，可能会切分为多个url下载。
   */
  Urls: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProxySessionKillTasks返回参数结构体
 */
export interface DescribeProxySessionKillTasksResponse {
  /**
   * kill 任务的详情。
   */
  Tasks?: Array<TaskInfo>
  /**
   * 任务总数。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

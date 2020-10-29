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
 * DescribeSlowLogTopSqls返回参数结构体
 */
export interface DescribeSlowLogTopSqlsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
}

/**
 * DescribeTopSpaceTableTimeSeries返回参数结构体
 */
export interface DescribeTopSpaceTableTimeSeriesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 返回的Top表数量，最大值为20，默认为最大值。
   */
  Limit?: number

  /**
   * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
   */
  SortBy?: string
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
}

/**
 * DescribeDBDiagHistory返回参数结构体
 */
export interface DescribeDBDiagHistoryResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 事件详情。
   */
  Explanation?: string

  /**
   * 概要。
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
   * 建议。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
}

/**
 * DescribeSlowLogTimeSeriesStats返回参数结构体
 */
export interface DescribeSlowLogTimeSeriesStatsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTopSpaceTables返回参数结构体
 */
export interface DescribeTopSpaceTablesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 返回的Top表数量，最大值为20，默认为最大值。
   */
  Limit?: number

  /**
   * 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。
   */
  SortBy?: string

  /**
   * 开始日期，最早为当日的前第29天，默认为截止日期的前第6天。
   */
  StartDate?: string

  /**
   * 截止日期，最早为当日的前第29天，默认为当日。
   */
  EndDate?: string
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
   * 截止时间，如“2019-09-10 12:13:14”，截止时间与开始时间的间隔最大可为7天。
   */
  EndTime: string

  /**
   * 排序键，目前支持 QueryTime,ExecTimes,RowsSent,LockTime以及RowsExamined 等排序键。
   */
  SortBy?: string

  /**
   * 排序方式，支持ASC（升序）以及DESC（降序）。
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
}

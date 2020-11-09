/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeTopSpaceTableTimeSeriesResponse,
  DescribeDBDiagHistoryResponse,
  DescribeDBSpaceStatusRequest,
  DescribeSlowLogTimeSeriesStatsResponse,
  TimeSlice,
  MonitorFloatMetric,
  MonitorMetric,
  TableSpaceTimeSeries,
  DescribeTopSpaceTablesRequest,
  DescribeSlowLogTimeSeriesStatsRequest,
  DescribeDBDiagEventRequest,
  DescribeDBSpaceStatusResponse,
  DescribeDBDiagEventResponse,
  DescribeDBDiagHistoryRequest,
  DescribeTopSpaceTableTimeSeriesRequest,
  MonitorMetricSeriesData,
  DiagHistoryEventItem,
  SlowLogTopSqlItem,
  MonitorFloatMetricSeriesData,
  DescribeSlowLogTopSqlsRequest,
  TableSpaceData,
  DescribeSlowLogTopSqlsResponse,
  DescribeTopSpaceTablesResponse,
  SchemaItem,
} from "./dbbrain_models"

/**
 * dbbrain client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dbbrain.tencentcloudapi.com", "2019-10-16", clientConfig)
  }

  /**
   * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
   */
  async DescribeTopSpaceTableTimeSeries(
    req: DescribeTopSpaceTableTimeSeriesRequest,
    cb?: (error: string, rep: DescribeTopSpaceTableTimeSeriesResponse) => void
  ): Promise<DescribeTopSpaceTableTimeSeriesResponse> {
    return this.request("DescribeTopSpaceTableTimeSeries", req, cb)
  }

  /**
   * 获取慢日志统计柱状图
   */
  async DescribeSlowLogTimeSeriesStats(
    req: DescribeSlowLogTimeSeriesStatsRequest,
    cb?: (error: string, rep: DescribeSlowLogTimeSeriesStatsResponse) => void
  ): Promise<DescribeSlowLogTimeSeriesStatsResponse> {
    return this.request("DescribeSlowLogTimeSeriesStats", req, cb)
  }

  /**
   * 获取实例诊断事件的列表。
   */
  async DescribeDBDiagHistory(
    req: DescribeDBDiagHistoryRequest,
    cb?: (error: string, rep: DescribeDBDiagHistoryResponse) => void
  ): Promise<DescribeDBDiagHistoryResponse> {
    return this.request("DescribeDBDiagHistory", req, cb)
  }

  /**
   * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
   */
  async DescribeDBSpaceStatus(
    req: DescribeDBSpaceStatusRequest,
    cb?: (error: string, rep: DescribeDBSpaceStatusResponse) => void
  ): Promise<DescribeDBSpaceStatusResponse> {
    return this.request("DescribeDBSpaceStatus", req, cb)
  }

  /**
   * 获取实例异常诊断事件的详情信息。
   */
  async DescribeDBDiagEvent(
    req: DescribeDBDiagEventRequest,
    cb?: (error: string, rep: DescribeDBDiagEventResponse) => void
  ): Promise<DescribeDBDiagEventResponse> {
    return this.request("DescribeDBDiagEvent", req, cb)
  }

  /**
   * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
   */
  async DescribeTopSpaceTables(
    req: DescribeTopSpaceTablesRequest,
    cb?: (error: string, rep: DescribeTopSpaceTablesResponse) => void
  ): Promise<DescribeTopSpaceTablesResponse> {
    return this.request("DescribeTopSpaceTables", req, cb)
  }

  /**
   * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
   */
  async DescribeSlowLogTopSqls(
    req: DescribeSlowLogTopSqlsRequest,
    cb?: (error: string, rep: DescribeSlowLogTopSqlsResponse) => void
  ): Promise<DescribeSlowLogTopSqlsResponse> {
    return this.request("DescribeSlowLogTopSqls", req, cb)
  }
}

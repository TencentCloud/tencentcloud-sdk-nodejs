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
const DescribeSlowLogTopSqlsResponse = models.DescribeSlowLogTopSqlsResponse;
const MonitorMetricSeriesData = models.MonitorMetricSeriesData;
const DiagHistoryEventItem = models.DiagHistoryEventItem;
const DescribeSlowLogTimeSeriesStatsRequest = models.DescribeSlowLogTimeSeriesStatsRequest;
const DescribeDBDiagHistoryResponse = models.DescribeDBDiagHistoryResponse;
const DescribeDBDiagEventRequest = models.DescribeDBDiagEventRequest;
const SlowLogTopSqlItem = models.SlowLogTopSqlItem;
const DescribeDBDiagEventResponse = models.DescribeDBDiagEventResponse;
const DescribeDBDiagHistoryRequest = models.DescribeDBDiagHistoryRequest;
const DescribeSlowLogTimeSeriesStatsResponse = models.DescribeSlowLogTimeSeriesStatsResponse;
const TimeSlice = models.TimeSlice;
const MonitorMetric = models.MonitorMetric;
const DescribeSlowLogTopSqlsRequest = models.DescribeSlowLogTopSqlsRequest;


/**
 * dbbrain client
 * @class
 */
class DbbrainClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dbbrain.tencentcloudapi.com", "2019-10-16", credential, region, profile);
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
     * 获取慢日志统计柱状图
     * @param {DescribeSlowLogTimeSeriesStatsRequest} req
     * @param {function(string, DescribeSlowLogTimeSeriesStatsResponse):void} cb
     * @public
     */
    DescribeSlowLogTimeSeriesStats(req, cb) {
        let resp = new DescribeSlowLogTimeSeriesStatsResponse();
        this.request("DescribeSlowLogTimeSeriesStats", req, resp, cb);
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
     * 获取实例异常诊断事件的详情信息。
     * @param {DescribeDBDiagEventRequest} req
     * @param {function(string, DescribeDBDiagEventResponse):void} cb
     * @public
     */
    DescribeDBDiagEvent(req, cb) {
        let resp = new DescribeDBDiagEventResponse();
        this.request("DescribeDBDiagEvent", req, resp, cb);
    }


}
module.exports = DbbrainClient;

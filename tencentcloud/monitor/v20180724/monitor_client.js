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
const GetMonitorDataRequest = models.GetMonitorDataRequest;
const PutMonitorDataRequest = models.PutMonitorDataRequest;
const MetricDatum = models.MetricDatum;
const Instance = models.Instance;
const PeriodsSt = models.PeriodsSt;
const Dimension = models.Dimension;
const DescribeBaseMetricsRequest = models.DescribeBaseMetricsRequest;
const GetMonitorDataResponse = models.GetMonitorDataResponse;
const MetricSet = models.MetricSet;
const DataPoint = models.DataPoint;
const MetricObjectMeaning = models.MetricObjectMeaning;
const DimensionsDesc = models.DimensionsDesc;
const PutMonitorDataResponse = models.PutMonitorDataResponse;
const DescribeBaseMetricsResponse = models.DescribeBaseMetricsResponse;


/**
 * monitor client
 * @class
 */
class MonitorClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("monitor.tencentcloudapi.com", "2018-07-24", credential, region, profile);
    }
    
    /**
     * 获取基础指标详情
     * @param {DescribeBaseMetricsRequest} req
     * @param {function(string, DescribeBaseMetricsResponse):void} cb
     * @public
     */
    DescribeBaseMetrics(req, cb) {
        let resp = new DescribeBaseMetricsResponse();
        this.request("DescribeBaseMetrics", req, resp, cb);
    }

    /**
     * 获取云产品的监控数据。传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用频率限制为：20次/秒，1200次/分钟。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
     * @param {GetMonitorDataRequest} req
     * @param {function(string, GetMonitorDataResponse):void} cb
     * @public
     */
    GetMonitorData(req, cb) {
        let resp = new GetMonitorDataResponse();
        this.request("GetMonitorData", req, resp, cb);
    }

    /**
     * 默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     * @param {PutMonitorDataRequest} req
     * @param {function(string, PutMonitorDataResponse):void} cb
     * @public
     */
    PutMonitorData(req, cb) {
        let resp = new PutMonitorDataResponse();
        this.request("PutMonitorData", req, resp, cb);
    }


}
module.exports = MonitorClient;

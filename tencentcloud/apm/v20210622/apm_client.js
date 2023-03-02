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
const ApmInstanceDetail = models.ApmInstanceDetail;
const CreateApmInstanceRequest = models.CreateApmInstanceRequest;
const DescribeServiceOverviewResponse = models.DescribeServiceOverviewResponse;
const QueryMetricItem = models.QueryMetricItem;
const DescribeApmInstancesResponse = models.DescribeApmInstancesResponse;
const ApmAgentInfo = models.ApmAgentInfo;
const ApmMetricRecord = models.ApmMetricRecord;
const DescribeServiceOverviewRequest = models.DescribeServiceOverviewRequest;
const DescribeApmAgentResponse = models.DescribeApmAgentResponse;
const ApmField = models.ApmField;
const Line = models.Line;
const APMKVItem = models.APMKVItem;
const OrderBy = models.OrderBy;
const DescribeMetricRecordsResponse = models.DescribeMetricRecordsResponse;
const ApmTag = models.ApmTag;
const Filter = models.Filter;
const APMKV = models.APMKV;
const DescribeApmAgentRequest = models.DescribeApmAgentRequest;
const DescribeMetricRecordsRequest = models.DescribeMetricRecordsRequest;
const DescribeGeneralMetricDataRequest = models.DescribeGeneralMetricDataRequest;
const CreateApmInstanceResponse = models.CreateApmInstanceResponse;
const GeneralFilter = models.GeneralFilter;
const DescribeApmInstancesRequest = models.DescribeApmInstancesRequest;
const DescribeGeneralMetricDataResponse = models.DescribeGeneralMetricDataResponse;


/**
 * apm client
 * @class
 */
class ApmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("apm.tencentcloudapi.com", "2021-06-22", credential, region, profile);
    }
    
    /**
     * APM实例列表拉取
     * @param {DescribeApmInstancesRequest} req
     * @param {function(string, DescribeApmInstancesResponse):void} cb
     * @public
     */
    DescribeApmInstances(req, cb) {
        let resp = new DescribeApmInstancesResponse();
        this.request("DescribeApmInstances", req, resp, cb);
    }

    /**
     * 获取Apm Agent信息
     * @param {DescribeApmAgentRequest} req
     * @param {function(string, DescribeApmAgentResponse):void} cb
     * @public
     */
    DescribeApmAgent(req, cb) {
        let resp = new DescribeApmAgentResponse();
        this.request("DescribeApmAgent", req, resp, cb);
    }

    /**
     * 获取指标数据通用接口。用户根据需要上送请求参数，返回对应的指标数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求的数据点数限制为1440个。
     * @param {DescribeGeneralMetricDataRequest} req
     * @param {function(string, DescribeGeneralMetricDataResponse):void} cb
     * @public
     */
    DescribeGeneralMetricData(req, cb) {
        let resp = new DescribeGeneralMetricDataResponse();
        this.request("DescribeGeneralMetricData", req, resp, cb);
    }

    /**
     * 拉取通用指标列表
     * @param {DescribeMetricRecordsRequest} req
     * @param {function(string, DescribeMetricRecordsResponse):void} cb
     * @public
     */
    DescribeMetricRecords(req, cb) {
        let resp = new DescribeMetricRecordsResponse();
        this.request("DescribeMetricRecords", req, resp, cb);
    }

    /**
     * 业务购买APM实例，调用该接口创建
     * @param {CreateApmInstanceRequest} req
     * @param {function(string, CreateApmInstanceResponse):void} cb
     * @public
     */
    CreateApmInstance(req, cb) {
        let resp = new CreateApmInstanceResponse();
        this.request("CreateApmInstance", req, resp, cb);
    }

    /**
     * 服务概览数据拉取
     * @param {DescribeServiceOverviewRequest} req
     * @param {function(string, DescribeServiceOverviewResponse):void} cb
     * @public
     */
    DescribeServiceOverview(req, cb) {
        let resp = new DescribeServiceOverviewResponse();
        this.request("DescribeServiceOverview", req, resp, cb);
    }


}
module.exports = ApmClient;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * apm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("apm.tencentcloudapi.com", "2021-06-22", clientConfig);
    }
    /**
     * 查询应用配置信息
     */
    async DescribeGeneralApmApplicationConfig(req, cb) {
        return this.request("DescribeGeneralApmApplicationConfig", req, cb);
    }
    /**
     * 根据维度名和过滤条件，查询维度数据.
     */
    async DescribeTagValues(req, cb) {
        return this.request("DescribeTagValues", req, cb);
    }
    /**
     * 通用查询调用链列表
     */
    async DescribeGeneralSpanList(req, cb) {
        return this.request("DescribeGeneralSpanList", req, cb);
    }
    /**
     * 获取 APM 业务系统列表
     */
    async DescribeApmInstances(req, cb) {
        return this.request("DescribeApmInstances", req, cb);
    }
    /**
     * 获取 APM 接入点
     */
    async DescribeApmAgent(req, cb) {
        return this.request("DescribeApmAgent", req, cb);
    }
    /**
     * 通用查询 OpenTelemetry 调用链列表
     */
    async DescribeGeneralOTSpanList(req, cb) {
        return this.request("DescribeGeneralOTSpanList", req, cb);
    }
    /**
     * 修改APM业务系统接口
     */
    async ModifyApmInstance(req, cb) {
        return this.request("ModifyApmInstance", req, cb);
    }
    /**
     * 对外开放的openApi，客户可以灵活的指定需要修改的字段，再加入需要修改的服务列表.
     */
    async ModifyGeneralApmApplicationConfig(req, cb) {
        return this.request("ModifyGeneralApmApplicationConfig", req, cb);
    }
    /**
     * 获取指标数据通用接口。用户根据需要上送请求参数，返回对应的指标数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求的数据点数限制为1440个。
     */
    async DescribeGeneralMetricData(req, cb) {
        return this.request("DescribeGeneralMetricData", req, cb);
    }
    /**
     * 查询指标列表接口，查询指标更推荐使用DescribeGeneralMetricData接口
     */
    async DescribeMetricRecords(req, cb) {
        return this.request("DescribeMetricRecords", req, cb);
    }
    /**
     * 销毁 APM 业务系统
     */
    async TerminateApmInstance(req, cb) {
        return this.request("TerminateApmInstance", req, cb);
    }
    /**
     * 业务购买 APM 业务系统，调用该接口创建
     */
    async CreateApmInstance(req, cb) {
        return this.request("CreateApmInstance", req, cb);
    }
    /**
     * 应用概览数据拉取
     */
    async DescribeServiceOverview(req, cb) {
        return this.request("DescribeServiceOverview", req, cb);
    }
}
exports.Client = Client;

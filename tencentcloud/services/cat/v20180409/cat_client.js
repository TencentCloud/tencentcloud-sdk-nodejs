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
 * cat client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cat.tencentcloudapi.com", "2018-04-09", clientConfig);
    }
    /**
     * 暂停任务
     */
    async SuspendProbeTask(req, cb) {
        return this.request("SuspendProbeTask", req, cb);
    }
    /**
     * 查询云拨测指标数据，指标支持使用sum,avg,max,min聚合函数进行指标数据查询
拨测频率与groupby聚合时间设置关联，如拨测频率为 30 分钟，则 grouby 聚合时间建议设置为大于30分钟，避免出现查询数据为空的情况
     */
    async DescribeProbeMetricData(req, cb) {
        return this.request("DescribeProbeMetricData", req, cb);
    }
    /**
     * 查询拨测任务列表
     */
    async DescribeProbeTasks(req, cb) {
        return this.request("DescribeProbeTasks", req, cb);
    }
    /**
     * 更新探测任务属性
     */
    async UpdateProbeTaskAttributes(req, cb) {
        return this.request("UpdateProbeTaskAttributes", req, cb);
    }
    /**
     * 获取拨测节点
     */
    async DescribeNodes(req, cb) {
        return this.request("DescribeNodes", req, cb);
    }
    /**
     * 获取历史即时拨测任务
     */
    async DescribeInstantTasks(req, cb) {
        return this.request("DescribeInstantTasks", req, cb);
    }
    /**
     * 批量更新拨测任务配置
     */
    async UpdateProbeTaskConfigurationList(req, cb) {
        return this.request("UpdateProbeTaskConfigurationList", req, cb);
    }
    /**
     * 批量创建拨测任务
     */
    async CreateProbeTasks(req, cb) {
        return this.request("CreateProbeTasks", req, cb);
    }
    /**
     * 查询拨测节点
     */
    async DescribeProbeNodes(req, cb) {
        return this.request("DescribeProbeNodes", req, cb);
    }
    /**
     * 根据时间范围、任务ID、运营商等条件查询单次拨测详情数据
     */
    async DescribeDetailedSingleProbeData(req, cb) {
        return this.request("DescribeDetailedSingleProbeData", req, cb);
    }
    /**
     * 删除拨测任务
     */
    async DeleteProbeTask(req, cb) {
        return this.request("DeleteProbeTask", req, cb);
    }
    /**
     * 恢复拨测任务
     */
    async ResumeProbeTask(req, cb) {
        return this.request("ResumeProbeTask", req, cb);
    }
}
exports.Client = Client;

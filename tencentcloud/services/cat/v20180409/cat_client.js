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
     * 暂停拨测任务
     */
    async SuspendProbeTask(req, cb) {
        return this.request("SuspendProbeTask", req, cb);
    }
    /**
     * 查询拨测任务的走势数据
     */
    async GetRespTimeTrendEx(req, cb) {
        return this.request("GetRespTimeTrendEx", req, cb);
    }
    /**
     * 修改拨测分组
     */
    async ModifyAgentGroup(req, cb) {
        return this.request("ModifyAgentGroup", req, cb);
    }
    /**
     * 按类型查询拨测任务列表
     */
    async DescribeTasksByType(req, cb) {
        return this.request("DescribeTasksByType", req, cb);
    }
    /**
     * 验证拨测任务，结果验证查询（验证成功的，才建议创建拨测任务）
     */
    async VerifyResult(req, cb) {
        return this.request("VerifyResult", req, cb);
    }
    /**
     * 创建拨测任务(扩展)
     */
    async CreateTaskEx(req, cb) {
        return this.request("CreateTaskEx", req, cb);
    }
    /**
     * 暂停拨测任务
     */
    async PauseTask(req, cb) {
        return this.request("PauseTask", req, cb);
    }
    /**
     * 查询拨测分组列表
     */
    async DescribeAgentGroups(req, cb) {
        return this.request("DescribeAgentGroups", req, cb);
    }
    /**
     * 获取实时可用率信息
     */
    async GetRealAvailRatio(req, cb) {
        return this.request("GetRealAvailRatio", req, cb);
    }
    /**
     * 添加拨测分组
     */
    async CreateAgentGroup(req, cb) {
        return this.request("CreateAgentGroup", req, cb);
    }
    /**
     * 查询拨测任务信息
     */
    async DescribeTaskDetail(req, cb) {
        return this.request("DescribeTaskDetail", req, cb);
    }
    /**
     * 批量创建拨测任务
     */
    async CreateProbeTasks(req, cb) {
        return this.request("CreateProbeTasks", req, cb);
    }
    /**
     * 查询用户的告警主题列表
     */
    async DescribeAlarmTopic(req, cb) {
        return this.request("DescribeAlarmTopic", req, cb);
    }
    /**
     * 查询拨测告警列表
     */
    async DescribeAlarms(req, cb) {
        return this.request("DescribeAlarms", req, cb);
    }
    /**
     * 查询拨测任务的历史返回码信息
     */
    async GetReturnCodeHistory(req, cb) {
        return this.request("GetReturnCodeHistory", req, cb);
    }
    /**
     * 删除多个拨测任务
     */
    async DeleteTasks(req, cb) {
        return this.request("DeleteTasks", req, cb);
    }
    /**
     * 获取一天的整体可用率信息
     */
    async GetDailyAvailRatio(req, cb) {
        return this.request("GetDailyAvailRatio", req, cb);
    }
    /**
     * 列出云拨测指标详细数据
     */
    async DescribeProbeMetricData(req, cb) {
        return this.request("DescribeProbeMetricData", req, cb);
    }
    /**
     * 恢复拨测任务
     */
    async ResumeProbeTask(req, cb) {
        return this.request("ResumeProbeTask", req, cb);
    }
    /**
     * 修改拨测任务(扩展)
     */
    async ModifyTaskEx(req, cb) {
        return this.request("ModifyTaskEx", req, cb);
    }
    /**
     * 查询本用户可选的拨测点列表
     */
    async DescribeAgents(req, cb) {
        return this.request("DescribeAgents", req, cb);
    }
    /**
     * 获取用户可用资源限制
     */
    async DescribeUserLimit(req, cb) {
        return this.request("DescribeUserLimit", req, cb);
    }
    /**
     * 查询拨测流水
     */
    async DescribeCatLogs(req, cb) {
        return this.request("DescribeCatLogs", req, cb);
    }
    /**
     * 批量更新拨测任务配置
     */
    async UpdateProbeTaskConfigurationList(req, cb) {
        return this.request("UpdateProbeTaskConfigurationList", req, cb);
    }
    /**
     * 根据时间范围、任务ID、运营商等条件查询单次拨测详情数据
     */
    async DescribeDetailedSingleProbeData(req, cb) {
        return this.request("DescribeDetailedSingleProbeData", req, cb);
    }
    /**
     * 绑定拨测任务和告警策略组
     */
    async BindAlarmPolicy(req, cb) {
        return this.request("BindAlarmPolicy", req, cb);
    }
    /**
     * 查询拨测任务列表
     */
    async DescribeProbeTasks(req, cb) {
        return this.request("DescribeProbeTasks", req, cb);
    }
    /**
     * 获取任务列表的实时数据
     */
    async GetResultSummary(req, cb) {
        return this.request("GetResultSummary", req, cb);
    }
    /**
     * 删除拨测分组
     */
    async DeleteAgentGroup(req, cb) {
        return this.request("DeleteAgentGroup", req, cb);
    }
    /**
     * 获取指定时刻的可用率地图信息
     */
    async GetAvailRatioHistory(req, cb) {
        return this.request("GetAvailRatioHistory", req, cb);
    }
    /**
     * 运行拨测任务
     */
    async RunTask(req, cb) {
        return this.request("RunTask", req, cb);
    }
    /**
     * 查询拨测节点
     */
    async DescribeProbeNodes(req, cb) {
        return this.request("DescribeProbeNodes", req, cb);
    }
    /**
     * 查询拨测任务的返回码统计信息
     */
    async GetReturnCodeInfo(req, cb) {
        return this.request("GetReturnCodeInfo", req, cb);
    }
    /**
     * 按任务查询拨测告警列表
     */
    async DescribeAlarmsByTask(req, cb) {
        return this.request("DescribeAlarmsByTask", req, cb);
    }
    /**
     * 删除拨测任务
     */
    async DeleteProbeTask(req, cb) {
        return this.request("DeleteProbeTask", req, cb);
    }
    /**
     * 获取AppId下的拨测任务总数
     */
    async GetTaskTotalNumber(req, cb) {
        return this.request("GetTaskTotalNumber", req, cb);
    }
}
exports.Client = Client;

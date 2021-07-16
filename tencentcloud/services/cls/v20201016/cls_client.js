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
 * cls client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cls.tencentcloudapi.com", "2020-10-16", clientConfig);
    }
    /**
     * 创建机器组
     */
    async CreateMachineGroup(req, cb) {
        return this.request("CreateMachineGroup", req, cb);
    }
    /**
     * 获取机器组信息列表
     */
    async DescribeMachineGroups(req, cb) {
        return this.request("DescribeMachineGroups", req, cb);
    }
    /**
     * 本接口用于获取告警任务历史
     */
    async GetAlarmLog(req, cb) {
        return this.request("GetAlarmLog", req, cb);
    }
    /**
     * 本接口用于修改日志主题。
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 本接口用于修改索引配置

     */
    async ModifyIndex(req, cb) {
        return this.request("ModifyIndex", req, cb);
    }
    /**
     * 本接口用于获取日志集信息列表。
     */
    async DescribeLogsets(req, cb) {
        return this.request("DescribeLogsets", req, cb);
    }
    /**
     * 本接口用于修改日志集信息
     */
    async ModifyLogset(req, cb) {
        return this.request("ModifyLogset", req, cb);
    }
    /**
     * 本接口用于获取日志导出列表
     */
    async DescribeExports(req, cb) {
        return this.request("DescribeExports", req, cb);
    }
    /**
     * 本接口用于获取索引配置信息
     */
    async DescribeIndex(req, cb) {
        return this.request("DescribeIndex", req, cb);
    }
    /**
     * 本接口用于获取主题分区列表。
     */
    async DescribePartitions(req, cb) {
        return this.request("DescribePartitions", req, cb);
    }
    /**
     * 本接口用于创建索引
     */
    async CreateIndex(req, cb) {
        return this.request("CreateIndex", req, cb);
    }
    /**
     * 删除采集规则配置
     */
    async DeleteConfig(req, cb) {
        return this.request("DeleteConfig", req, cb);
    }
    /**
     * 创建新的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
     */
    async CreateShipper(req, cb) {
        return this.request("CreateShipper", req, cb);
    }
    /**
     * 修改现有的投递规则，客户如果使用此接口，需要自行处理CLS对指定bucket的写权限。
     */
    async ModifyShipper(req, cb) {
        return this.request("ModifyShipper", req, cb);
    }
    /**
     * 该接口用户创建告警通知模板。
     */
    async CreateAlarmNotice(req, cb) {
        return this.request("CreateAlarmNotice", req, cb);
    }
    /**
     * 获取采集规则配置
     */
    async DescribeConfigs(req, cb) {
        return this.request("DescribeConfigs", req, cb);
    }
    /**
     * 本接口用于修改告警策略。需要至少修改一项有效内容。
     */
    async ModifyAlarm(req, cb) {
        return this.request("ModifyAlarm", req, cb);
    }
    /**
     * 删除机器组
     */
    async DeleteMachineGroup(req, cb) {
        return this.request("DeleteMachineGroup", req, cb);
    }
    /**
     *  本接口用于获取日志主题列表，支持分页
     */
    async DescribeTopics(req, cb) {
        return this.request("DescribeTopics", req, cb);
    }
    /**
     * 本接口用于删除日志集。
     */
    async DeleteLogset(req, cb) {
        return this.request("DeleteLogset", req, cb);
    }
    /**
     * 获取投递规则信息列表
     */
    async DescribeShippers(req, cb) {
        return this.request("DescribeShippers", req, cb);
    }
    /**
     * 修改机器组
     */
    async ModifyMachineGroup(req, cb) {
        return this.request("ModifyMachineGroup", req, cb);
    }
    /**
     * 删除应用到机器组的采集配置
     */
    async DeleteConfigFromMachineGroup(req, cb) {
        return this.request("DeleteConfigFromMachineGroup", req, cb);
    }
    /**
     * 本接口用于创建日志集，返回新创建的日志集的 ID。
     */
    async CreateLogset(req, cb) {
        return this.request("CreateLogset", req, cb);
    }
    /**
     * 本接口用于获取告警策略。
     */
    async DescribeAlarms(req, cb) {
        return this.request("DescribeAlarms", req, cb);
    }
    /**
     * 该接口用于获取告警通知模板列表
     */
    async DescribeAlarmNotices(req, cb) {
        return this.request("DescribeAlarmNotices", req, cb);
    }
    /**
     * 本接口用于创建日志主题。
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 应用采集配置到指定机器组
     */
    async ApplyConfigToMachineGroup(req, cb) {
        return this.request("ApplyConfigToMachineGroup", req, cb);
    }
    /**
     * 该接口用于删除告警通知模板
     */
    async DeleteAlarmNotice(req, cb) {
        return this.request("DeleteAlarmNotice", req, cb);
    }
    /**
     * 该接口用于修改告警通知模板。
     */
    async ModifyAlarmNotice(req, cb) {
        return this.request("ModifyAlarmNotice", req, cb);
    }
    /**
     * 本接口用于搜索日志
     */
    async SearchLog(req, cb) {
        return this.request("SearchLog", req, cb);
    }
    /**
     * 修改采集规则配置
     */
    async ModifyConfig(req, cb) {
        return this.request("ModifyConfig", req, cb);
    }
    /**
     * 获取投递任务列表
     */
    async DescribeShipperTasks(req, cb) {
        return this.request("DescribeShipperTasks", req, cb);
    }
    /**
     * 创建采集规则配置
     */
    async CreateConfig(req, cb) {
        return this.request("CreateConfig", req, cb);
    }
    /**
     * 获取机器组绑定的采集规则配置
     */
    async DescribeMachineGroupConfigs(req, cb) {
        return this.request("DescribeMachineGroupConfigs", req, cb);
    }
    /**
     * 删除投递规则
     */
    async DeleteShipper(req, cb) {
        return this.request("DeleteShipper", req, cb);
    }
    /**
     * 本接口用于日志主题的索引配置
     */
    async DeleteIndex(req, cb) {
        return this.request("DeleteIndex", req, cb);
    }
    /**
     * 本接口用于删除告警策略。
     */
    async DeleteAlarm(req, cb) {
        return this.request("DeleteAlarm", req, cb);
    }
    /**
     * 本接口用于搜索日志上下文附近的内容
     */
    async DescribeLogContext(req, cb) {
        return this.request("DescribeLogContext", req, cb);
    }
    /**
     * 本接口用于合并一个读写态的主题分区，合并时指定一个主题分区 ID，日志服务会自动合并范围右相邻的分区。
     */
    async MergePartition(req, cb) {
        return this.request("MergePartition", req, cb);
    }
    /**
     * 获取制定机器组下的机器状态
     */
    async DescribeMachines(req, cb) {
        return this.request("DescribeMachines", req, cb);
    }
    /**
     * 重试失败的投递任务
     */
    async RetryShipperTask(req, cb) {
        return this.request("RetryShipperTask", req, cb);
    }
    /**
     * 获取采集规则配置所绑定的机器组
     */
    async DescribeConfigMachineGroups(req, cb) {
        return this.request("DescribeConfigMachineGroups", req, cb);
    }
    /**
     * 本接口用于删除日志导出
     */
    async DeleteExport(req, cb) {
        return this.request("DeleteExport", req, cb);
    }
    /**
     * 本接口用于创建告警策略。
     */
    async CreateAlarm(req, cb) {
        return this.request("CreateAlarm", req, cb);
    }
    /**
     * 本接口用于删除日志主题。
     */
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
    /**
     * 本接口用于创建日志导出
     */
    async CreateExport(req, cb) {
        return this.request("CreateExport", req, cb);
    }
    /**
     * 本接口用于分裂主题分区
     */
    async SplitPartition(req, cb) {
        return this.request("SplitPartition", req, cb);
    }
}
exports.Client = Client;

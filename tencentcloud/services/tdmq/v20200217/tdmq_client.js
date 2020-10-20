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
 * tdmq client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tdmq.tencentcloudapi.com", "2020-02-17", clientConfig);
    }
    /**
     * 新增指定分区、类型的消息主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 批量删除租户下的环境
     */
    async DeleteEnvironments(req, cb) {
        return this.request("DeleteEnvironments", req, cb);
    }
    /**
     * 修改主题备注和分区数
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 批量删除topics
     */
    async DeleteTopics(req, cb) {
        return this.request("DeleteTopics", req, cb);
    }
    /**
     * 创建一个主题的订阅关系
     */
    async CreateSubscription(req, cb) {
        return this.request("CreateSubscription", req, cb);
    }
    /**
     * 查询指定环境和主题下的订阅者列表
     */
    async DescribeSubscriptions(req, cb) {
        return this.request("DescribeSubscriptions", req, cb);
    }
    /**
     * 获取环境下主题列表
     */
    async DescribeTopics(req, cb) {
        return this.request("DescribeTopics", req, cb);
    }
    /**
     * 获取指定环境的属性
     */
    async DescribeEnvironmentAttributes(req, cb) {
        return this.request("DescribeEnvironmentAttributes", req, cb);
    }
    /**
     * 修改指定环境的属性值
     */
    async ModifyEnvironmentAttributes(req, cb) {
        return this.request("ModifyEnvironmentAttributes", req, cb);
    }
    /**
     * 用于在用户账户下创建消息队列 Tdmq环境（命名空间）
     */
    async CreateEnvironment(req, cb) {
        return this.request("CreateEnvironment", req, cb);
    }
    /**
     * 获取租户下环境列表
     */
    async DescribeEnvironments(req, cb) {
        return this.request("DescribeEnvironments", req, cb);
    }
    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     */
    async ResetMsgSubOffsetByTimestamp(req, cb) {
        return this.request("ResetMsgSubOffsetByTimestamp", req, cb);
    }
    /**
     * 获取生产者列表，仅显示在线的生产者
     */
    async DescribeProducers(req, cb) {
        return this.request("DescribeProducers", req, cb);
    }
    /**
     * 获取环境角色列表
     */
    async DescribeEnvironmentRoles(req, cb) {
        return this.request("DescribeEnvironmentRoles", req, cb);
    }
    /**
     * 删除订阅关系
     */
    async DeleteSubscriptions(req, cb) {
        return this.request("DeleteSubscriptions", req, cb);
    }
}
exports.Client = Client;

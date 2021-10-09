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
     * 删除cmq主题
     */
    async DeleteCmqTopic(req, cb) {
        return this.request("DeleteCmqTopic", req, cb);
    }
    /**
     * 批量删除租户下的命名空间
     */
    async DeleteEnvironments(req, cb) {
        return this.request("DeleteEnvironments", req, cb);
    }
    /**
     * 获取租户VPC绑定关系
     */
    async DescribeBindVpcs(req, cb) {
        return this.request("DescribeBindVpcs", req, cb);
    }
    /**
     * 创建用户的集群
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 修改主题备注和分区数
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 清空cmq消息队列中的消息
     */
    async ClearCmqQueue(req, cb) {
        return this.request("ClearCmqQueue", req, cb);
    }
    /**
     * 运营端获节点健康状态
     */
    async DescribeNodeHealthOpt(req, cb) {
        return this.request("DescribeNodeHealthOpt", req, cb);
    }
    /**
     * 创建角色
     */
    async CreateRole(req, cb) {
        return this.request("CreateRole", req, cb);
    }
    /**
     * 创建cmq队列接口
     */
    async CreateCmqQueue(req, cb) {
        return this.request("CreateCmqQueue", req, cb);
    }
    /**
     * 修改cmq主题属性
     */
    async ModifyCmqTopicAttribute(req, cb) {
        return this.request("ModifyCmqTopicAttribute", req, cb);
    }
    /**
     * 修改cmq队列属性
     */
    async ModifyCmqQueueAttribute(req, cb) {
        return this.request("ModifyCmqQueueAttribute", req, cb);
    }
    /**
     * 创建cmq主题
     */
    async CreateCmqTopic(req, cb) {
        return this.request("CreateCmqTopic", req, cb);
    }
    /**
     * 查询cmq订阅详情
     */
    async DescribeCmqSubscriptionDetail(req, cb) {
        return this.request("DescribeCmqSubscriptionDetail", req, cb);
    }
    /**
     * 枚举cmq死信队列源队列
     */
    async DescribeCmqDeadLetterSourceQueues(req, cb) {
        return this.request("DescribeCmqDeadLetterSourceQueues", req, cb);
    }
    /**
     * 删除cmq队列
     */
    async DeleteCmqQueue(req, cb) {
        return this.request("DeleteCmqQueue", req, cb);
    }
    /**
     * 枚举cmq全量主题
     */
    async DescribeCmqTopics(req, cb) {
        return this.request("DescribeCmqTopics", req, cb);
    }
    /**
     * 批量删除topics
     */
    async DeleteTopics(req, cb) {
        return this.request("DeleteTopics", req, cb);
    }
    /**
     * 获取命名空间角色列表
     */
    async DescribeEnvironmentRoles(req, cb) {
        return this.request("DescribeEnvironmentRoles", req, cb);
    }
    /**
     * 删除集群
     */
    async DeleteCluster(req, cb) {
        return this.request("DeleteCluster", req, cb);
    }
    /**
     * 获取用户绑定的专享集群列表
     */
    async DescribeBindClusters(req, cb) {
        return this.request("DescribeBindClusters", req, cb);
    }
    /**
     * 查询cmq队列详情
     */
    async DescribeCmqQueueDetail(req, cb) {
        return this.request("DescribeCmqQueueDetail", req, cb);
    }
    /**
     * 回溯cmq队列
     */
    async RewindCmqQueue(req, cb) {
        return this.request("RewindCmqQueue", req, cb);
    }
    /**
     * 获取集群列表
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 此接口仅用于测试发生消息，不能作为现网正式生产使用
     */
    async SendMsg(req, cb) {
        return this.request("SendMsg", req, cb);
    }
    /**
     * 新增指定分区、类型的消息主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 查询cmq全量队列
     */
    async DescribeCmqQueues(req, cb) {
        return this.request("DescribeCmqQueues", req, cb);
    }
    /**
     * 发送cmq主题消息
     */
    async PublishCmqMsg(req, cb) {
        return this.request("PublishCmqMsg", req, cb);
    }
    /**
     * 获取租户下命名空间列表
     */
    async DescribeEnvironments(req, cb) {
        return this.request("DescribeEnvironments", req, cb);
    }
    /**
     * 获取集群的详细信息
     */
    async DescribeClusterDetail(req, cb) {
        return this.request("DescribeClusterDetail", req, cb);
    }
    /**
     * 查询指定环境和主题下的订阅者列表
     */
    async DescribeSubscriptions(req, cb) {
        return this.request("DescribeSubscriptions", req, cb);
    }
    /**
     * 删除cmq订阅
     */
    async DeleteCmqSubscribe(req, cb) {
        return this.request("DeleteCmqSubscribe", req, cb);
    }
    /**
     * 根据提供的 MessageID 确认指定 topic 中的消息
     */
    async AcknowledgeMessage(req, cb) {
        return this.request("AcknowledgeMessage", req, cb);
    }
    /**
     * 查询cmq主题详情
     */
    async DescribeCmqTopicDetail(req, cb) {
        return this.request("DescribeCmqTopicDetail", req, cb);
    }
    /**
     * 用于在用户账户下创建消息队列 Tdmq 命名空间
     */
    async CreateEnvironment(req, cb) {
        return this.request("CreateEnvironment", req, cb);
    }
    /**
     * 删除角色，支持批量。
     */
    async DeleteRoles(req, cb) {
        return this.request("DeleteRoles", req, cb);
    }
    /**
     * 获取生产者列表，仅显示在线的生产者
     */
    async DescribeProducers(req, cb) {
        return this.request("DescribeProducers", req, cb);
    }
    /**
     * 接收发送到指定 topic 中的消息
     */
    async ReceiveMessage(req, cb) {
        return this.request("ReceiveMessage", req, cb);
    }
    /**
     * 获取环境下主题列表
     */
    async DescribeTopics(req, cb) {
        return this.request("DescribeTopics", req, cb);
    }
    /**
     * 清空订阅者消息标签
     */
    async ClearCmqSubscriptionFilterTags(req, cb) {
        return this.request("ClearCmqSubscriptionFilterTags", req, cb);
    }
    /**
     * 修改环境角色授权。
     */
    async ModifyEnvironmentRole(req, cb) {
        return this.request("ModifyEnvironmentRole", req, cb);
    }
    /**
     * 发送单条消息
     */
    async SendMessages(req, cb) {
        return this.request("SendMessages", req, cb);
    }
    /**
     * 发送cmq消息
     */
    async SendCmqMsg(req, cb) {
        return this.request("SendCmqMsg", req, cb);
    }
    /**
     * 更新集群信息
     */
    async ModifyCluster(req, cb) {
        return this.request("ModifyCluster", req, cb);
    }
    /**
     * 角色修改
     */
    async ModifyRole(req, cb) {
        return this.request("ModifyRole", req, cb);
    }
    /**
     * 修改指定命名空间的属性值
     */
    async ModifyEnvironmentAttributes(req, cb) {
        return this.request("ModifyEnvironmentAttributes", req, cb);
    }
    /**
     * 修改cmq订阅属性
     */
    async ModifyCmqSubscriptionAttribute(req, cb) {
        return this.request("ModifyCmqSubscriptionAttribute", req, cb);
    }
    /**
     * 获取角色列表
     */
    async DescribeRoles(req, cb) {
        return this.request("DescribeRoles", req, cb);
    }
    /**
     * 解绑cmq死信队列
     */
    async UnbindCmqDeadLetter(req, cb) {
        return this.request("UnbindCmqDeadLetter", req, cb);
    }
    /**
     * 创建一个主题的订阅关系
     */
    async CreateSubscription(req, cb) {
        return this.request("CreateSubscription", req, cb);
    }
    /**
     * 批量发送消息
     */
    async SendBatchMessages(req, cb) {
        return this.request("SendBatchMessages", req, cb);
    }
    /**
     * 获取指定命名空间的属性
     */
    async DescribeEnvironmentAttributes(req, cb) {
        return this.request("DescribeEnvironmentAttributes", req, cb);
    }
    /**
     * 创建cmq订阅接口
     */
    async CreateCmqSubscribe(req, cb) {
        return this.request("CreateCmqSubscribe", req, cb);
    }
    /**
     * 创建环境角色授权
     */
    async CreateEnvironmentRole(req, cb) {
        return this.request("CreateEnvironmentRole", req, cb);
    }
    /**
     * 删除环境角色授权。
     */
    async DeleteEnvironmentRoles(req, cb) {
        return this.request("DeleteEnvironmentRoles", req, cb);
    }
    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     */
    async ResetMsgSubOffsetByTimestamp(req, cb) {
        return this.request("ResetMsgSubOffsetByTimestamp", req, cb);
    }
    /**
     * 运营端获取命名空间bundle列表
     */
    async DescribeNamespaceBundlesOpt(req, cb) {
        return this.request("DescribeNamespaceBundlesOpt", req, cb);
    }
    /**
     * 删除订阅关系
     */
    async DeleteSubscriptions(req, cb) {
        return this.request("DeleteSubscriptions", req, cb);
    }
}
exports.Client = Client;

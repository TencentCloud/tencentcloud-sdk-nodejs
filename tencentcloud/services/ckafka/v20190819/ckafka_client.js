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
 * ckafka client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ckafka.tencentcloudapi.com", "2019-08-19", clientConfig);
    }
    /**
     * 查看路由信息
     */
    async DescribeRoute(req, cb) {
        return this.request("DescribeRoute", req, cb);
    }
    /**
     * 获取消费分组信息
     */
    async DescribeGroupInfo(req, cb) {
        return this.request("DescribeGroupInfo", req, cb);
    }
    /**
     * 创建消费者组
     */
    async CreateConsumer(req, cb) {
        return this.request("CreateConsumer", req, cb);
    }
    /**
     * 查询消费分组信息
     */
    async DescribeConsumerGroup(req, cb) {
        return this.request("DescribeConsumerGroup", req, cb);
    }
    /**
     * 查询订阅某主题消息分组信息
     */
    async DescribeTopicSubscribeGroup(req, cb) {
        return this.request("DescribeTopicSubscribeGroup", req, cb);
    }
    /**
     * 批量设置主题属性
     */
    async BatchModifyTopicAttributes(req, cb) {
        return this.request("BatchModifyTopicAttributes", req, cb);
    }
    /**
     * 删除路由
     */
    async DeleteRoute(req, cb) {
        return this.request("DeleteRoute", req, cb);
    }
    /**
     * 通过HTTP接入层发送消息
     */
    async SendMessage(req, cb) {
        return this.request("SendMessage", req, cb);
    }
    /**
     * 本接口用于修改主题属性。
     */
    async ModifyTopicAttributes(req, cb) {
        return this.request("ModifyTopicAttributes", req, cb);
    }
    /**
     * 创建主题ip白名单
     */
    async CreateTopicIpWhiteList(req, cb) {
        return this.request("CreateTopicIpWhiteList", req, cb);
    }
    /**
     * 枚举消费分组(精简版)
     */
    async DescribeGroup(req, cb) {
        return this.request("DescribeGroup", req, cb);
    }
    /**
     * 设置Groups 消费分组offset
     */
    async ModifyGroupOffsets(req, cb) {
        return this.request("ModifyGroupOffsets", req, cb);
    }
    /**
     * 本接口（DescribeInstance）用于在用户账户下获取消息队列 CKafka 实例列表
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 添加实例路由
     */
    async CreateRoute(req, cb) {
        return this.request("CreateRoute", req, cb);
    }
    /**
     * 删除消费组
     */
    async DeleteGroup(req, cb) {
        return this.request("DeleteGroup", req, cb);
    }
    /**
     * 查询用户信息
     */
    async DescribeUser(req, cb) {
        return this.request("DescribeUser", req, cb);
    }
    /**
     * 枚举ACL
     */
    async DescribeACL(req, cb) {
        return this.request("DescribeACL", req, cb);
    }
    /**
     * 取消授权token
     */
    async CancelAuthorizationToken(req, cb) {
        return this.request("CancelAuthorizationToken", req, cb);
    }
    /**
     * 创建实例(预付费包年包月)
     */
    async CreateInstancePre(req, cb) {
        return this.request("CreateInstancePre", req, cb);
    }
    /**
     * 根据指定offset位置的消息
     */
    async FetchMessageByOffset(req, cb) {
        return this.request("FetchMessageByOffset", req, cb);
    }
    /**
     * 删除主题IP白名单
     */
    async DeleteTopicIpWhiteList(req, cb) {
        return this.request("DeleteTopicIpWhiteList", req, cb);
    }
    /**
     * 修改密码
     */
    async ModifyPassword(req, cb) {
        return this.request("ModifyPassword", req, cb);
    }
    /**
     * 添加 ACL 策略
     */
    async CreateAcl(req, cb) {
        return this.request("CreateAcl", req, cb);
    }
    /**
     * 创建ckafka主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 本接口用于增加主题中的分区
     */
    async CreatePartition(req, cb) {
        return this.request("CreatePartition", req, cb);
    }
    /**
     * 删除用户
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 创建最高权限的token
     */
    async CreateToken(req, cb) {
        return this.request("CreateToken", req, cb);
    }
    /**
     * 获取主题列表详情（仅控制台调用）
     */
    async DescribeTopicDetail(req, cb) {
        return this.request("DescribeTopicDetail", req, cb);
    }
    /**
     * 删除ACL
     */
    async DeleteAcl(req, cb) {
        return this.request("DeleteAcl", req, cb);
    }
    /**
     * 查询用户列表
     */
    async DescribeAppInfo(req, cb) {
        return this.request("DescribeAppInfo", req, cb);
    }
    /**
     * 获取主题属性

     */
    async DescribeTopicAttributes(req, cb) {
        return this.request("DescribeTopicAttributes", req, cb);
    }
    /**
     * 删除预付费实例
     */
    async DeleteInstancePre(req, cb) {
        return this.request("DeleteInstancePre", req, cb);
    }
    /**
     * 获取实例属性
     */
    async DescribeInstanceAttributes(req, cb) {
        return this.request("DescribeInstanceAttributes", req, cb);
    }
    /**
     * 用户账户下获取实例列表详情
     */
    async DescribeInstancesDetail(req, cb) {
        return this.request("DescribeInstancesDetail", req, cb);
    }
    /**
     * 批量添加ACL策略
     */
    async BatchCreateAcl(req, cb) {
        return this.request("BatchCreateAcl", req, cb);
    }
    /**
     * 删除ACL规则
     */
    async DeleteAclRule(req, cb) {
        return this.request("DeleteAclRule", req, cb);
    }
    /**
     * 修改删除路由延迟触发时间
     */
    async DeleteRouteTriggerTime(req, cb) {
        return this.request("DeleteRouteTriggerTime", req, cb);
    }
    /**
     * 批量修改消费组offset
     */
    async BatchModifyGroupOffsets(req, cb) {
        return this.request("BatchModifyGroupOffsets", req, cb);
    }
    /**
     * 获取Topic 副本详情信息
     */
    async DescribeTopicSyncReplica(req, cb) {
        return this.request("DescribeTopicSyncReplica", req, cb);
    }
    /**
     * 获取消费分组offset
     */
    async DescribeGroupOffsets(req, cb) {
        return this.request("DescribeGroupOffsets", req, cb);
    }
    /**
     * 给实例授权token
     */
    async AuthorizeToken(req, cb) {
        return this.request("AuthorizeToken", req, cb);
    }
    /**
     * 接口请求域名：https://ckafka.tencentcloudapi.com
本接口（DescribeTopic）用于在用户获取消息队列 CKafka 实例的主题列表
     */
    async DescribeTopic(req, cb) {
        return this.request("DescribeTopic", req, cb);
    }
    /**
     * 设置实例属性
     */
    async ModifyInstanceAttributes(req, cb) {
        return this.request("ModifyInstanceAttributes", req, cb);
    }
    /**
     * 用于查看ckafka的可用区列表
     */
    async DescribeCkafkaZone(req, cb) {
        return this.request("DescribeCkafkaZone", req, cb);
    }
    /**
     * 枚举地域,只支持广州地域
     */
    async DescribeRegion(req, cb) {
        return this.request("DescribeRegion", req, cb);
    }
    /**
     * 添加用户
     */
    async CreateUser(req, cb) {
        return this.request("CreateUser", req, cb);
    }
    /**
     * 删除ckafka主题
     */
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
}
exports.Client = Client;

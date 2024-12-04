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
     * 续费Ckafka实例, 目前只支持国内站包年包月实例续费
     */
    async RenewCkafkaInstance(req, cb) {
        return this.request("RenewCkafkaInstance", req, cb);
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
     * 查询Datahub连接源
     */
    async DescribeConnectResource(req, cb) {
        return this.request("DescribeConnectResource", req, cb);
    }
    /**
     * 由于出参需要更新，当前接口将会在未来版本中废弃，建议用户迁移使用 CreatePostPaidInstance 接口。创建按量计费实例。通常用于 SDK 或云 API 控制台调用接口，创建后付费 CKafka 实例。调用接口与在 CKafka 控制台购买按量付费实例效果相同。
     */
    async CreateInstancePost(req, cb) {
        return this.request("CreateInstancePost", req, cb);
    }
    /**
     * 查询ACL规则列表
     */
    async DescribeAclRule(req, cb) {
        return this.request("DescribeAclRule", req, cb);
    }
    /**
     * 查询订阅某主题消息分组信息
     */
    async DescribeTopicSubscribeGroup(req, cb) {
        return this.request("DescribeTopicSubscribeGroup", req, cb);
    }
    /**
     * 预付费实例变配接口，调整磁盘，带宽
     */
    async ModifyInstancePre(req, cb) {
        return this.request("ModifyInstancePre", req, cb);
    }
    /**
     * 获取主题列表详情（仅控制台调用）
     */
    async DescribeTopicDetail(req, cb) {
        return this.request("DescribeTopicDetail", req, cb);
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
     * 修改DIP主题属性
     */
    async ModifyDatahubTopic(req, cb) {
        return this.request("ModifyDatahubTopic", req, cb);
    }
    /**
     * 设置自动化运维属性
     */
    async ModifyRoutineMaintenanceTask(req, cb) {
        return this.request("ModifyRoutineMaintenanceTask", req, cb);
    }
    /**
     * 创建主题ip白名单
     */
    async CreateTopicIpWhiteList(req, cb) {
        return this.request("CreateTopicIpWhiteList", req, cb);
    }
    /**
     * 删除Datahub连接源
     */
    async DeleteConnectResource(req, cb) {
        return this.request("DeleteConnectResource", req, cb);
    }
    /**
     * 枚举消费分组(精简版)
     */
    async DescribeGroup(req, cb) {
        return this.request("DescribeGroup", req, cb);
    }
    /**
     * 根据位点查询消息列表
     */
    async FetchMessageListByOffset(req, cb) {
        return this.request("FetchMessageListByOffset", req, cb);
    }
    /**
     * 修改Datahub任务
     */
    async ModifyDatahubTask(req, cb) {
        return this.request("ModifyDatahubTask", req, cb);
    }
    /**
     * 查询Datahub任务列表
     */
    async DescribeDatahubTasks(req, cb) {
        return this.request("DescribeDatahubTasks", req, cb);
    }
    /**
     * 本接口（DescribeInstance）用于在用户账户下获取消息队列 CKafka 实例列表
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 获取Topic 副本详情信息
     */
    async DescribeTopicSyncReplica(req, cb) {
        return this.request("DescribeTopicSyncReplica", req, cb);
    }
    /**
     * 添加实例路由
     */
    async CreateRoute(req, cb) {
        return this.request("CreateRoute", req, cb);
    }
    /**
     * 删除Dip任务
     */
    async DeleteDatahubTask(req, cb) {
        return this.request("DeleteDatahubTask", req, cb);
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
     * 获取实例Prometheus信息
     */
    async DescribePrometheus(req, cb) {
        return this.request("DescribePrometheus", req, cb);
    }
    /**
     * 创建DIP主题
     */
    async CreateDatahubTopic(req, cb) {
        return this.request("CreateDatahubTopic", req, cb);
    }
    /**
     * 删除后付费实例
     */
    async DeleteInstancePost(req, cb) {
        return this.request("DeleteInstancePost", req, cb);
    }
    /**
     * 枚举ACL
     */
    async DescribeACL(req, cb) {
        return this.request("DescribeACL", req, cb);
    }
    /**
     * 查询DIP主题列表
     */
    async DescribeDatahubTopics(req, cb) {
        return this.request("DescribeDatahubTopics", req, cb);
    }
    /**
     * 取消授权token
     */
    async CancelAuthorizationToken(req, cb) {
        return this.request("CancelAuthorizationToken", req, cb);
    }
    /**
     * 创建实例(预付费包年包月),  仅支持创建专业版实例
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
     * 删除DIP主题
     */
    async DeleteDatahubTopic(req, cb) {
        return this.request("DeleteDatahubTopic", req, cb);
    }
    /**
     * 删除主题IP白名单
     */
    async DeleteTopicIpWhiteList(req, cb) {
        return this.request("DeleteTopicIpWhiteList", req, cb);
    }
    /**
     * 枚举地域,只支持广州地域
     */
    async DescribeRegion(req, cb) {
        return this.request("DescribeRegion", req, cb);
    }
    /**
     * 设置Groups 消费分组offset
     */
    async ModifyGroupOffsets(req, cb) {
        return this.request("ModifyGroupOffsets", req, cb);
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
     * 创建Datahub连接源
     */
    async CreateConnectResource(req, cb) {
        return this.request("CreateConnectResource", req, cb);
    }
    /**
     * 查询Datahub任务信息
     */
    async DescribeDatahubTask(req, cb) {
        return this.request("DescribeDatahubTask", req, cb);
    }
    /**
     * 用于查询cdc-ckafka任务状态
     */
    async CheckCdcCluster(req, cb) {
        return this.request("CheckCdcCluster", req, cb);
    }
    /**
     * 获取Topic流量排行，消费者流量排行
     */
    async DescribeTopicFlowRanking(req, cb) {
        return this.request("DescribeTopicFlowRanking", req, cb);
    }
    /**
     * 修改ACL策略，目前只支持预设规则的是否应用到新增topic这一项的修改
     */
    async ModifyAclRule(req, cb) {
        return this.request("ModifyAclRule", req, cb);
    }
    /**
     * 本接口用于增加主题中的分区
     */
    async CreatePartition(req, cb) {
        return this.request("CreatePartition", req, cb);
    }
    /**
     * 查询最新消息列表
     */
    async FetchLatestDatahubMessageList(req, cb) {
        return this.request("FetchLatestDatahubMessageList", req, cb);
    }
    /**
     * 查询任务状态
     */
    async DescribeTaskStatus(req, cb) {
        return this.request("DescribeTaskStatus", req, cb);
    }
    /**
     * 删除用户
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 编辑Datahub连接源
     */
    async ModifyConnectResource(req, cb) {
        return this.request("ModifyConnectResource", req, cb);
    }
    /**
     * 根据指定offset位置的消息
     */
    async FetchDatahubMessageByOffset(req, cb) {
        return this.request("FetchDatahubMessageByOffset", req, cb);
    }
    /**
     * 创建最高权限的token
     */
    async CreateToken(req, cb) {
        return this.request("CreateToken", req, cb);
    }
    /**
     * 获取Datahub消费分组offset
     */
    async DescribeDatahubGroupOffsets(req, cb) {
        return this.request("DescribeDatahubGroupOffsets", req, cb);
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
     * 添加普罗米修斯监控1
     */
    async CreatePrometheus(req, cb) {
        return this.request("CreatePrometheus", req, cb);
    }
    /**
     * 按量实例缩容
     */
    async InstanceScalingDown(req, cb) {
        return this.request("InstanceScalingDown", req, cb);
    }
    /**
     * 获取主题属性
     */
    async DescribeTopicAttributes(req, cb) {
        return this.request("DescribeTopicAttributes", req, cb);
    }
    /**
     * 删除预付费实例，该接口会对实例执行隔离并删除的动作，执行成功后实例会被直接删除销毁
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
     * 创建DIP转储任务
     */
    async CreateDatahubTask(req, cb) {
        return this.request("CreateDatahubTask", req, cb);
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
     * 当前接口用来替代 CreateInstancePost 接口。创建按量计费实例。通常用于 SDK 或云 API 控制台调用接口，创建后付费 CKafka 实例。调用接口与在 CKafka 控制台购买按量付费实例效果相同。
     */
    async CreatePostPaidInstance(req, cb) {
        return this.request("CreatePostPaidInstance", req, cb);
    }
    /**
     * 获取消费分组offset
     */
    async DescribeGroupOffsets(req, cb) {
        return this.request("DescribeGroupOffsets", req, cb);
    }
    /**
     * 根据时间戳查询消息列表
     */
    async FetchMessageListByTimestamp(req, cb) {
        return this.request("FetchMessageListByTimestamp", req, cb);
    }
    /**
     * 给实例授权token
     */
    async AuthorizeToken(req, cb) {
        return this.request("AuthorizeToken", req, cb);
    }
    /**
     * 设置实例属性
     */
    async ModifyInstanceAttributes(req, cb) {
        return this.request("ModifyInstanceAttributes", req, cb);
    }
    /**
     * 查询topic 生产端连接信息
     */
    async DescribeTopicProduceConnection(req, cb) {
        return this.request("DescribeTopicProduceConnection", req, cb);
    }
    /**
     * 接口请求域名：https://ckafka.tencentcloudapi.com
本接口（DescribeTopic）用于在用户获取消息队列 CKafka 实例的主题列表
     */
    async DescribeTopic(req, cb) {
        return this.request("DescribeTopic", req, cb);
    }
    /**
     * 添加 ACL 规则
     */
    async CreateAclRule(req, cb) {
        return this.request("CreateAclRule", req, cb);
    }
    /**
     * 获取DIP主题属性
     */
    async DescribeDatahubTopic(req, cb) {
        return this.request("DescribeDatahubTopic", req, cb);
    }
    /**
     * 用于查看ckafka的可用区列表
     */
    async DescribeCkafkaZone(req, cb) {
        return this.request("DescribeCkafkaZone", req, cb);
    }
    /**
     * 查询Datahub连接源列表
     */
    async DescribeConnectResources(req, cb) {
        return this.request("DescribeConnectResources", req, cb);
    }
    /**
     * 用于cdc的专用ckafka集群
     */
    async CreateCdcCluster(req, cb) {
        return this.request("CreateCdcCluster", req, cb);
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
    /**
     * 修改密码
     */
    async ModifyPassword(req, cb) {
        return this.request("ModifyPassword", req, cb);
    }
    /**
     * Ckafka实例购买/续费询价
     */
    async InquireCkafkaPrice(req, cb) {
        return this.request("InquireCkafkaPrice", req, cb);
    }
    /**
     * 本接口用于修改主题属性。
     */
    async ModifyTopicAttributes(req, cb) {
        return this.request("ModifyTopicAttributes", req, cb);
    }
}
exports.Client = Client;

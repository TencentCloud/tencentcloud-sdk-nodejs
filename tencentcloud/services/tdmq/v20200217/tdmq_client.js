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
     * 批量删除租户下的命名空间
     */
    async DeleteEnvironments(req, cb) {
        return this.request("DeleteEnvironments", req, cb);
    }
    /**
     * 创建用户的集群
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 获取消费详情列表
     */
    async DescribeRocketMQConsumeStats(req, cb) {
        return this.request("DescribeRocketMQConsumeStats", req, cb);
    }
    /**
     * 删除角色，支持批量。
     */
    async DeleteRoles(req, cb) {
        return this.request("DeleteRoles", req, cb);
    }
    /**
     * 查询RabbitMQ exchange 列表
     */
    async DescribeRabbitMQExchanges(req, cb) {
        return this.request("DescribeRabbitMQExchanges", req, cb);
    }
    /**
     * 历史原因，该接口位于tdmq-manager，目前rabbitmq产品没有使用该接口，当前使用的是ModifyRabbitMQVipInstance。不过从调用链上看，线网还有请求流程，所以走预下线流程。

更新Amqp集群信息
     */
    async ModifyAMQPCluster(req, cb) {
        return this.request("ModifyAMQPCluster", req, cb);
    }
    /**
     * 查询消息轨迹
     */
    async DescribeRocketMQMsgTrace(req, cb) {
        return this.request("DescribeRocketMQMsgTrace", req, cb);
    }
    /**
     * 创建角色
     */
    async CreateRocketMQRole(req, cb) {
        return this.request("CreateRocketMQRole", req, cb);
    }
    /**
     * 创建cmq主题
     */
    async CreateCmqTopic(req, cb) {
        return this.request("CreateCmqTopic", req, cb);
    }
    /**
     * 删除cmq队列
     */
    async DeleteCmqQueue(req, cb) {
        return this.request("DeleteCmqQueue", req, cb);
    }
    /**
     * 修改RabbitMQ的vhost
     */
    async ModifyRabbitMQVirtualHost(req, cb) {
        return this.request("ModifyRabbitMQVirtualHost", req, cb);
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
     * 删除RocketMQ消费组
     */
    async DeleteRocketMQGroup(req, cb) {
        return this.request("DeleteRocketMQGroup", req, cb);
    }
    /**
     * 删除专业集群——预付费，仅通过API 调用
     */
    async DeleteProCluster(req, cb) {
        return this.request("DeleteProCluster", req, cb);
    }
    /**
     * 删除角色，支持批量。
     */
    async DeleteRocketMQRoles(req, cb) {
        return this.request("DeleteRocketMQRoles", req, cb);
    }
    /**
     * 获取指定消费组下当前客户端的连接情况
     */
    async DescribeRocketMQConsumerConnections(req, cb) {
        return this.request("DescribeRocketMQConsumerConnections", req, cb);
    }
    /**
     * 创建RabbitMQ的用户
     */
    async CreateRabbitMQUser(req, cb) {
        return this.request("CreateRabbitMQUser", req, cb);
    }
    /**
     * 查询用户已购的RabbitMQ专享实例列表
     */
    async DescribeRabbitMQVipInstances(req, cb) {
        return this.request("DescribeRabbitMQVipInstances", req, cb);
    }
    /**
     * 回溯cmq队列
     */
    async RewindCmqQueue(req, cb) {
        return this.request("RewindCmqQueue", req, cb);
    }
    /**
     * 获取Topic生产详情列表
     */
    async DescribeRocketMQTopicStats(req, cb) {
        return this.request("DescribeRocketMQTopicStats", req, cb);
    }
    /**
     * 新增指定分区、类型的消息主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 获取RocketMQ命名空间列表
     */
    async DescribeRocketMQNamespaces(req, cb) {
        return this.request("DescribeRocketMQNamespaces", req, cb);
    }
    /**
     * 查询cmq全量队列
     */
    async DescribeCmqQueues(req, cb) {
        return this.request("DescribeCmqQueues", req, cb);
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
     * 创建RocketMQ消费组
     */
    async CreateRocketMQGroup(req, cb) {
        return this.request("CreateRocketMQGroup", req, cb);
    }
    /**
     * 根据提供的 MessageID 确认指定 topic 中的消息
     */
    async AcknowledgeMessage(req, cb) {
        return this.request("AcknowledgeMessage", req, cb);
    }
    /**
     * 用于在用户账户下创建消息队列 Tdmq 命名空间
     */
    async CreateEnvironment(req, cb) {
        return this.request("CreateEnvironment", req, cb);
    }
    /**
     * 查询RabbitMQ权限列表
     */
    async DescribeRabbitMQPermission(req, cb) {
        return this.request("DescribeRabbitMQPermission", req, cb);
    }
    /**
     * 修改pulsar专业版公网安全策略
     */
    async ModifyPublicNetworkSecurityPolicy(req, cb) {
        return this.request("ModifyPublicNetworkSecurityPolicy", req, cb);
    }
    /**
     * 修改环境角色授权。
     */
    async ModifyRocketMQEnvironmentRole(req, cb) {
        return this.request("ModifyRocketMQEnvironmentRole", req, cb);
    }
    /**
     * 更新RocketMQ主题信息
     */
    async ModifyRocketMQTopic(req, cb) {
        return this.request("ModifyRocketMQTopic", req, cb);
    }
    /**
     * rocketmq 消息查询
     */
    async DescribeRocketMQTopicMsgs(req, cb) {
        return this.request("DescribeRocketMQTopicMsgs", req, cb);
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
     * 获取消息生产概览信息
     */
    async DescribePublisherSummary(req, cb) {
        return this.request("DescribePublisherSummary", req, cb);
    }
    /**
     * 删除RocketMQ命名空间
     */
    async DeleteRocketMQNamespace(req, cb) {
        return this.request("DeleteRocketMQNamespace", req, cb);
    }
    /**
     * 创建RabbitMQ的vhost
     */
    async CreateRabbitMQVirtualHost(req, cb) {
        return this.request("CreateRabbitMQVirtualHost", req, cb);
    }
    /**
     * 删除cmq主题
     */
    async DeleteCmqTopic(req, cb) {
        return this.request("DeleteCmqTopic", req, cb);
    }
    /**
     * RabbitMQ专享版修改公网管控台，vpc15672开关
     */
    async ModifyPublicNetworkAccessPoint(req, cb) {
        return this.request("ModifyPublicNetworkAccessPoint", req, cb);
    }
    /**
     * 修改RocketMQ专享实例
     */
    async ModifyRocketMQInstance(req, cb) {
        return this.request("ModifyRocketMQInstance", req, cb);
    }
    /**
     * 创建cmq队列接口
     */
    async CreateCmqQueue(req, cb) {
        return this.request("CreateCmqQueue", req, cb);
    }
    /**
     * 更新RocketMQ消费组信息
     */
    async ModifyRocketMQGroup(req, cb) {
        return this.request("ModifyRocketMQGroup", req, cb);
    }
    /**
     * 修改cmq主题属性
     */
    async ModifyCmqTopicAttribute(req, cb) {
        return this.request("ModifyCmqTopicAttribute", req, cb);
    }
    /**
     * 查询Topic迁移状态列表，源集群和目标集群客户端数量信息需要配合DescribeRocketMQSmoothMigrationTaskTopicInsNum接口查询
     */
    async DescribeRocketMQMigratingTopicList(req, cb) {
        return this.request("DescribeRocketMQMigratingTopicList", req, cb);
    }
    /**
     * 查询cmq订阅详情
     */
    async DescribeCmqSubscriptionDetail(req, cb) {
        return this.request("DescribeCmqSubscriptionDetail", req, cb);
    }
    /**
     * 获取环境下主题列表
     */
    async GetTopicList(req, cb) {
        return this.request("GetTopicList", req, cb);
    }
    /**
     * 删除集群
     */
    async DeleteCluster(req, cb) {
        return this.request("DeleteCluster", req, cb);
    }
    /**
     * 重置指定Group的消费位点到指定时间戳
     */
    async ResetRocketMQConsumerOffSet(req, cb) {
        return this.request("ResetRocketMQConsumerOffSet", req, cb);
    }
    /**
     * 获取集群列表
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 删除RabbitMQ的权限
     */
    async DeleteRabbitMQPermission(req, cb) {
        return this.request("DeleteRabbitMQPermission", req, cb);
    }
    /**
     * 平滑迁移过程获取源集群topic列表接口
     */
    async DescribeRocketMQSourceClusterTopicList(req, cb) {
        return this.request("DescribeRocketMQSourceClusterTopicList", req, cb);
    }
    /**
     * 创建环境角色授权
     */
    async CreateRocketMQEnvironmentRole(req, cb) {
        return this.request("CreateRocketMQEnvironmentRole", req, cb);
    }
    /**
     * 获取在线消费端详情
     */
    async DescribeRocketMQConsumerConnectionDetail(req, cb) {
        return this.request("DescribeRocketMQConsumerConnectionDetail", req, cb);
    }
    /**
     * 获取单个RabbitMQ专享实例信息
     */
    async DescribeRabbitMQVipInstance(req, cb) {
        return this.request("DescribeRabbitMQVipInstance", req, cb);
    }
    /**
     * 获取指定消费组下订阅的主题列表
     */
    async DescribeRocketMQTopicsByGroup(req, cb) {
        return this.request("DescribeRocketMQTopicsByGroup", req, cb);
    }
    /**
     * 从腾讯云可观测平台拉取公网指标监控数据，目前仅支持客户端到 LB 的入带宽和出宽带指标。
     */
    async DescribeRocketMQPublicAccessMonitorData(req, cb) {
        return this.request("DescribeRocketMQPublicAccessMonitorData", req, cb);
    }
    /**
     * 导入topic列表
     */
    async ImportRocketMQTopics(req, cb) {
        return this.request("ImportRocketMQTopics", req, cb);
    }
    /**
     * 该接口用于开启关闭公网访问、设置安全访问策略
     */
    async SetRocketMQPublicAccessPoint(req, cb) {
        return this.request("SetRocketMQPublicAccessPoint", req, cb);
    }
    /**
     * 查询指定环境和主题下的订阅者列表
     */
    async DescribeSubscriptions(req, cb) {
        return this.request("DescribeSubscriptions", req, cb);
    }
    /**
     * 查询cmq主题详情
     */
    async DescribeCmqTopicDetail(req, cb) {
        return this.request("DescribeCmqTopicDetail", req, cb);
    }
    /**
     * 获取单个RocketMQ专享集群信息
     */
    async DescribeRocketMQVipInstanceDetail(req, cb) {
        return this.request("DescribeRocketMQVipInstanceDetail", req, cb);
    }
    /**
     * 获取角色列表
     */
    async DescribeRocketMQRoles(req, cb) {
        return this.request("DescribeRocketMQRoles", req, cb);
    }
    /**
     * 查询RabbitMQ用户列表
     */
    async DescribeRabbitMQUser(req, cb) {
        return this.request("DescribeRabbitMQUser", req, cb);
    }
    /**
     * 更新RocketMQ集群信息
     */
    async ModifyRocketMQCluster(req, cb) {
        return this.request("ModifyRocketMQCluster", req, cb);
    }
    /**
     * 更新集群信息
     */
    async ModifyCluster(req, cb) {
        return this.request("ModifyCluster", req, cb);
    }
    /**
     * 获取Pulsar专业版集群实例信息
     */
    async DescribePulsarProInstanceDetail(req, cb) {
        return this.request("DescribePulsarProInstanceDetail", req, cb);
    }
    /**
     * 修改cmq订阅属性
     */
    async ModifyCmqSubscriptionAttribute(req, cb) {
        return this.request("ModifyCmqSubscriptionAttribute", req, cb);
    }
    /**
     * 用于获取RocketMQ消费组订阅关系数据
     */
    async DescribeRocketMQSubscriptions(req, cb) {
        return this.request("DescribeRocketMQSubscriptions", req, cb);
    }
    /**
     * 创建一个主题的订阅关系
     */
    async CreateSubscription(req, cb) {
        return this.request("CreateSubscription", req, cb);
    }
    /**
     * 获取单个RocketMQ集群信息
     */
    async DescribeRocketMQCluster(req, cb) {
        return this.request("DescribeRocketMQCluster", req, cb);
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
     * 创建RabbitMQ路由关系
     */
    async CreateRabbitMQBinding(req, cb) {
        return this.request("CreateRabbitMQBinding", req, cb);
    }
    /**
     * 查询消息轨迹
     */
    async DescribeMsgTrace(req, cb) {
        return this.request("DescribeMsgTrace", req, cb);
    }
    /**
     * 角色修改
     */
    async ModifyRocketMQRole(req, cb) {
        return this.request("ModifyRocketMQRole", req, cb);
    }
    /**
     * RabbitMQ专享版查询节点列表
     */
    async DescribeRabbitMQNodeList(req, cb) {
        return this.request("DescribeRabbitMQNodeList", req, cb);
    }
    /**
     * 获取租户VPC绑定关系
     */
    async DescribeBindVpcs(req, cb) {
        return this.request("DescribeBindVpcs", req, cb);
    }
    /**
     * 删除RocketMQ主题
     */
    async DeleteRocketMQTopic(req, cb) {
        return this.request("DeleteRocketMQTopic", req, cb);
    }
    /**
     * 重发RocketMQ死信消息
     */
    async RetryRocketMQDlqMessage(req, cb) {
        return this.request("RetryRocketMQDlqMessage", req, cb);
    }
    /**
     * 用于查询RocketMQ平滑迁移任务列表
     */
    async DescribeRocketMQSmoothMigrationTaskList(req, cb) {
        return this.request("DescribeRocketMQSmoothMigrationTaskList", req, cb);
    }
    /**
     * 导出RocketMQ消息详情
     */
    async ExportRocketMQMessageDetail(req, cb) {
        return this.request("ExportRocketMQMessageDetail", req, cb);
    }
    /**
     * 查询RabbitMQ队列列表
     */
    async DescribeRabbitMQQueues(req, cb) {
        return this.request("DescribeRabbitMQQueues", req, cb);
    }
    /**
     * 修改cmq队列属性
     */
    async ModifyCmqQueueAttribute(req, cb) {
        return this.request("ModifyCmqQueueAttribute", req, cb);
    }
    /**
     * 本API用于修改RocketMQ专享实例配置，可以支持实例规格、节点数和存储的升配和实例规格的降配。本API发起订单并成功支付后进入实例配置变更的流程，可通过DescribeRocketMQVipInstances查询实例是否已变更完成。
     */
    async ModifyRocketMQInstanceSpec(req, cb) {
        return this.request("ModifyRocketMQInstanceSpec", req, cb);
    }
    /**
     * 输入迁移任务id和要导入的Group，导入后台
     */
    async ImportRocketMQConsumerGroups(req, cb) {
        return this.request("ImportRocketMQConsumerGroups", req, cb);
    }
    /**
     * 查询用户已购的RocketMQ专享实例列表
     */
    async DescribeRocketMQVipInstances(req, cb) {
        return this.request("DescribeRocketMQVipInstances", req, cb);
    }
    /**
     * Rocketmq消费验证
     */
    async VerifyRocketMQConsume(req, cb) {
        return this.request("VerifyRocketMQConsume", req, cb);
    }
    /**
     * 修改RabbitMQ的权限
     */
    async ModifyRabbitMQPermission(req, cb) {
        return this.request("ModifyRabbitMQPermission", req, cb);
    }
    /**
     * 历史原因，该接口位于tdmq-manager，目前rabbitmq产品没有使用该接口，当前使用的是DescribeRabbitMQVipInstances。不过从调用链上看，线网还有请求流程，所以走预下线流程。

获取amqp集群列表
     */
    async DescribeAMQPClusters(req, cb) {
        return this.request("DescribeAMQPClusters", req, cb);
    }
    /**
     * 创建RabbitMQ专享版实例
     */
    async CreateRabbitMQVipInstance(req, cb) {
        return this.request("CreateRabbitMQVipInstance", req, cb);
    }
    /**
     * 查询消息轨迹
     */
    async DescribeMqMsgTrace(req, cb) {
        return this.request("DescribeMqMsgTrace", req, cb);
    }
    /**
     * 获取RocketMQ消费组列表
     */
    async DescribeRocketMQGroups(req, cb) {
        return this.request("DescribeRocketMQGroups", req, cb);
    }
    /**
     * 创建RocketMQ主题
     */
    async CreateRocketMQTopic(req, cb) {
        return this.request("CreateRocketMQTopic", req, cb);
    }
    /**
     * 获取命名空间角色列表
     */
    async DescribeRocketMQEnvironmentRoles(req, cb) {
        return this.request("DescribeRocketMQEnvironmentRoles", req, cb);
    }
    /**
     * 删除RocketMQ集群
     */
    async DeleteRocketMQCluster(req, cb) {
        return this.request("DeleteRocketMQCluster", req, cb);
    }
    /**
     * 删除RabbitMQ的用户
     */
    async DeleteRabbitMQUser(req, cb) {
        return this.request("DeleteRabbitMQUser", req, cb);
    }
    /**
     * 创建专业集群——预付费，仅通过api调用
     */
    async CreateProCluster(req, cb) {
        return this.request("CreateProCluster", req, cb);
    }
    /**
     * 查询RabbitMQ vhost列表
     */
    async DescribeRabbitMQVirtualHost(req, cb) {
        return this.request("DescribeRabbitMQVirtualHost", req, cb);
    }
    /**
     * 当前 ReceiveMessage 接口只支持 Partitioned 类型的 Topic。该接口用于接收发送到指定 Partitioned Topic 中的消息，当 Partitioned Topic 中没有消息但还去尝试调用该接口时，会抛出 ReceiveTimeout 的异常。

如何使用 BatchReceivePolicy：

BatchReceive 接口提供了如下三个参数：

● MaxNumMessages: 即每次使用 BatchReceive 的时候，最多一次Receive接口返回多少条消息。
● MaxNumBytes：即每次使用 BatchReceive 的时候，最多一次Receive接口返回多大内容的消息，单位是：bytes。
● Timeout：即每次使用 BatchReceive 的时候，最多一次 Receive 接口的超时时间是多久，单位是：MS。

默认如果上述三个参数都不指定，即关闭 BatchReceive 的特性。如果三个参数中的任意一个参数指定的数值大于 0，即开启 BatchReceive。BatchReceive 的结束条件为到达上述三个参数中任意一个指定的阈值。

注意：MaxNumMessages 和 MaxNumBytes 每一次接收的最大消息同时受限于 ReceiveQueueSize 的大小，如果 ReceiveQueueSize 的大小设置为 5，MaxNumMessages 设置为10，那么一次 BatchReceive 接收的最多的消息是 5条，而不是10条。



BatchReceivePolicy 的接口会一次性返回多条消息：

1. 多条消息的内容之间使用特殊字符 '###' 来进行分割，业务侧接收到消息之后，可以利用不同语言提供的 Split 工具分割不同的消息。
2. 多条消息的 MessageID 之间使用特殊字符 '###' 来进行分割，业务侧接收到消息之后，可以利用不同语言提供的 Split 工具分割不同的消息。（用于在调用 AcknowledgeMessage 接口中填入所需要的 MessageID 字段信息）
     */
    async ReceiveMessage(req, cb) {
        return this.request("ReceiveMessage", req, cb);
    }
    /**
     * 删除RabbitMQ的vhost
     */
    async DeleteRabbitMQVirtualHost(req, cb) {
        return this.request("DeleteRabbitMQVirtualHost", req, cb);
    }
    /**
     * 发送cmq消息
     */
    async SendCmqMsg(req, cb) {
        return this.request("SendCmqMsg", req, cb);
    }
    /**
     * 用于获取RocketMQ平滑迁移任务详情
     */
    async DescribeRocketMQSmoothMigrationTask(req, cb) {
        return this.request("DescribeRocketMQSmoothMigrationTask", req, cb);
    }
    /**
     * 修改指定命名空间的属性值
     */
    async ModifyEnvironmentAttributes(req, cb) {
        return this.request("ModifyEnvironmentAttributes", req, cb);
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
     * 修改RabbitMQ的用户
     */
    async ModifyRabbitMQUser(req, cb) {
        return this.request("ModifyRabbitMQUser", req, cb);
    }
    /**
     * 创建RocketMQ命名空间
     */
    async CreateRocketMQNamespace(req, cb) {
        return this.request("CreateRocketMQNamespace", req, cb);
    }
    /**
     * 消息详情
     */
    async DescribeMsg(req, cb) {
        return this.request("DescribeMsg", req, cb);
    }
    /**
     * 批量发送消息

注意：TDMQ 批量发送消息的接口是在 TDMQ-HTTP 的服务侧将消息打包为一个 Batch，然后将该 Batch 在服务内部当作一次 TCP 请求发送出去。所以在使用过程中，用户还是按照单条消息发送的逻辑，每一条消息是一个独立的 HTTP 的请求，在 TDMQ-HTTP 的服务内部，会将多个 HTTP 的请求聚合为一个 Batch 发送到服务端。即，批量发送消息在使用上与发送单条消息是一致的，batch 的聚合是在 TDMQ-HTTP 的服务内部完成的。
     */
    async SendBatchMessages(req, cb) {
        return this.request("SendBatchMessages", req, cb);
    }
    /**
     * 修改RabbitMQ专享版实例
     */
    async ModifyRabbitMQVipInstance(req, cb) {
        return this.request("ModifyRabbitMQVipInstance", req, cb);
    }
    /**
     * 创建环境角色授权
     */
    async CreateEnvironmentRole(req, cb) {
        return this.request("CreateEnvironmentRole", req, cb);
    }
    /**
     * 获取RocketMQ主题列表
     */
    async DescribeRocketMQTopics(req, cb) {
        return this.request("DescribeRocketMQTopics", req, cb);
    }
    /**
     * 修改环境角色授权。
     */
    async ModifyEnvironmentRole(req, cb) {
        return this.request("ModifyEnvironmentRole", req, cb);
    }
    /**
     * 消息队列TDMQ RabbitMQ 有一个存量旧接口没下线，目前实际上已经不在产品中使用：DescribeRabbitMQVirtualHostList，这个接口很久前已经被 DescribeRabbitMQVirtualHost 替换掉。已无用户在调用。

RabbitMQ专享版查询虚拟主机列表
     */
    async DescribeRabbitMQVirtualHostList(req, cb) {
        return this.request("DescribeRabbitMQVirtualHostList", req, cb);
    }
    /**
     * 获取RocketMQ集群列表
     */
    async DescribeRocketMQClusters(req, cb) {
        return this.request("DescribeRocketMQClusters", req, cb);
    }
    /**
     * 发送单条消息
不支持持久topic
     */
    async SendMessages(req, cb) {
        return this.request("SendMessages", req, cb);
    }
    /**
     * 修改主题备注和分区数
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 查询RabbitMQ路由关系列表
     */
    async DescribeRabbitMQBindings(req, cb) {
        return this.request("DescribeRabbitMQBindings", req, cb);
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
     * 更新RocketMQ命名空间
     */
    async ModifyRocketMQNamespace(req, cb) {
        return this.request("ModifyRocketMQNamespace", req, cb);
    }
    /**
     * 消息查询
     */
    async DescribeTopicMsgs(req, cb) {
        return this.request("DescribeTopicMsgs", req, cb);
    }
    /**
     * 清空cmq消息队列中的消息
     */
    async ClearCmqQueue(req, cb) {
        return this.request("ClearCmqQueue", req, cb);
    }
    /**
     * 查询用户已购的Pulsar专业版实例列表
     */
    async DescribePulsarProInstances(req, cb) {
        return this.request("DescribePulsarProInstances", req, cb);
    }
    /**
     * 获取生产者信息列表
     */
    async DescribePublishers(req, cb) {
        return this.request("DescribePublishers", req, cb);
    }
    /**
     * 此接口用于创建一个RocketMQ集群
     */
    async CreateRocketMQCluster(req, cb) {
        return this.request("CreateRocketMQCluster", req, cb);
    }
    /**
     * 查询RabbitMQ队列详情
     */
    async DescribeRabbitMQQueueDetail(req, cb) {
        return this.request("DescribeRabbitMQQueueDetail", req, cb);
    }
    /**
     * rocketmq消息详情
     */
    async DescribeRocketMQMsg(req, cb) {
        return this.request("DescribeRocketMQMsg", req, cb);
    }
    /**
     * 获取环境下主题列表
     */
    async DescribeTopics(req, cb) {
        return this.request("DescribeTopics", req, cb);
    }
    /**
     * 获取命名空间角色列表
     */
    async DescribeEnvironmentRoles(req, cb) {
        return this.request("DescribeEnvironmentRoles", req, cb);
    }
    /**
     * 删除RabbitMQ专享版实例
     */
    async DeleteRabbitMQVipInstance(req, cb) {
        return this.request("DeleteRabbitMQVipInstance", req, cb);
    }
    /**
     * 发送cmq主题消息
     */
    async PublishCmqMsg(req, cb) {
        return this.request("PublishCmqMsg", req, cb);
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
     * 平滑迁移过程获取源集群group列表接口
     */
    async DescribeRocketMQSourceClusterGroupList(req, cb) {
        return this.request("DescribeRocketMQSourceClusterGroupList", req, cb);
    }
    /**
     * 此接口仅用于测试发生消息，不能作为现网正式生产使用
     */
    async SendMsg(req, cb) {
        return this.request("SendMsg", req, cb);
    }
    /**
     * 删除RocketMQ专享实例
     */
    async DeleteRocketMQVipInstance(req, cb) {
        return this.request("DeleteRocketMQVipInstance", req, cb);
    }
    /**
     * 发送RocketMQ消息
     */
    async SendRocketMQMessage(req, cb) {
        return this.request("SendRocketMQMessage", req, cb);
    }
    /**
     * 清空订阅者消息标签
     */
    async ClearCmqSubscriptionFilterTags(req, cb) {
        return this.request("ClearCmqSubscriptionFilterTags", req, cb);
    }
    /**
     * 删除cmq订阅
     */
    async DeleteCmqSubscribe(req, cb) {
        return this.request("DeleteCmqSubscribe", req, cb);
    }
    /**
     * 接口用于查询RocketMQ实例的公网接入信息
     */
    async DescribeRocketMQPublicAccessPoint(req, cb) {
        return this.request("DescribeRocketMQPublicAccessPoint", req, cb);
    }
    /**
     * 解绑RabbitMQ路由关系
     */
    async DeleteRabbitMQBinding(req, cb) {
        return this.request("DeleteRabbitMQBinding", req, cb);
    }
    /**
     * 角色修改
     */
    async ModifyRole(req, cb) {
        return this.request("ModifyRole", req, cb);
    }
    /**
     * 创建RocketMQ专享实例
     */
    async CreateRocketMQVipInstance(req, cb) {
        return this.request("CreateRocketMQVipInstance", req, cb);
    }
    /**
     * 删除环境角色授权。
     */
    async DeleteRocketMQEnvironmentRoles(req, cb) {
        return this.request("DeleteRocketMQEnvironmentRoles", req, cb);
    }
    /**
     * 获取某个租户的虚拟集群列表
     */
    async DescribeAllTenants(req, cb) {
        return this.request("DescribeAllTenants", req, cb);
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

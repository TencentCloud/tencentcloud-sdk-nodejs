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
     * 获取RocketMQ命名空间列表
     */
    async DescribeRocketMQNamespaces(req, cb) {
        return this.request("DescribeRocketMQNamespaces", req, cb);
    }
    /**
     * 更新Amqp集群信息
     */
    async ModifyAMQPCluster(req, cb) {
        return this.request("ModifyAMQPCluster", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

删除Amqp交换机
     */
    async DeleteAMQPExchange(req, cb) {
        return this.request("DeleteAMQPExchange", req, cb);
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
     * 枚举cmq全量主题
     */
    async DescribeCmqTopics(req, cb) {
        return this.request("DescribeCmqTopics", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

创建Amqp Vhost
     */
    async CreateAMQPVHost(req, cb) {
        return this.request("CreateAMQPVHost", req, cb);
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
     * 发送cmq主题消息
     */
    async PublishCmqMsg(req, cb) {
        return this.request("PublishCmqMsg", req, cb);
    }
    /**
     * 新增指定分区、类型的消息主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

获取单个Amqp集群信息
     */
    async DescribeAMQPCluster(req, cb) {
        return this.request("DescribeAMQPCluster", req, cb);
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
     * 获取环境下主题列表
     */
    async DescribeTopics(req, cb) {
        return this.request("DescribeTopics", req, cb);
    }
    /**
     * 发送单条消息
     */
    async SendMessages(req, cb) {
        return this.request("SendMessages", req, cb);
    }
    /**
     * 更新RocketMQ主题信息
     */
    async ModifyRocketMQTopic(req, cb) {
        return this.request("ModifyRocketMQTopic", req, cb);
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
     * 删除集群
     */
    async DeleteCluster(req, cb) {
        return this.request("DeleteCluster", req, cb);
    }
    /**
     * 删除cmq主题
     */
    async DeleteCmqTopic(req, cb) {
        return this.request("DeleteCmqTopic", req, cb);
    }
    /**
     * 修改cmq队列属性
     */
    async ModifyCmqQueueAttribute(req, cb) {
        return this.request("ModifyCmqQueueAttribute", req, cb);
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
     * 查询cmq订阅详情
     */
    async DescribeCmqSubscriptionDetail(req, cb) {
        return this.request("DescribeCmqSubscriptionDetail", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

创建AMQP集群
     */
    async CreateAMQPCluster(req, cb) {
        return this.request("CreateAMQPCluster", req, cb);
    }
    /**
     * 枚举cmq死信队列源队列
     */
    async DescribeCmqDeadLetterSourceQueues(req, cb) {
        return this.request("DescribeCmqDeadLetterSourceQueues", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

获取Amqp Vhost 列表
     */
    async DescribeAMQPVHosts(req, cb) {
        return this.request("DescribeAMQPVHosts", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

更新Amqp队列
     */
    async ModifyAMQPQueue(req, cb) {
        return this.request("ModifyAMQPQueue", req, cb);
    }
    /**
     * 本API用于修改RocketMQ专享实例配置，可以支持实例规格、节点数和存储的升配和实例规格的降配。本API发起订单并成功支付后进入实例配置变更的流程，可通过DescribeRocketMQVipInstances查询实例是否已变更完成。
     */
    async ModifyRocketMQInstanceSpec(req, cb) {
        return this.request("ModifyRocketMQInstanceSpec", req, cb);
    }
    /**
     * 获取集群列表
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 获取单个RabbitMQ专享实例信息
     */
    async DescribeRabbitMQVipInstance(req, cb) {
        return this.request("DescribeRabbitMQVipInstance", req, cb);
    }
    /**
     * 重置指定Group的消费位点到指定时间戳
     */
    async ResetRocketMQConsumerOffSet(req, cb) {
        return this.request("ResetRocketMQConsumerOffSet", req, cb);
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
     * 产品下线了，对应的接口也要下线。

删除Amqp队列
     */
    async DeleteAMQPQueue(req, cb) {
        return this.request("DeleteAMQPQueue", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

删除Vhost
     */
    async DeleteAMQPVHost(req, cb) {
        return this.request("DeleteAMQPVHost", req, cb);
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
     * 创建一个主题的订阅关系
     */
    async CreateSubscription(req, cb) {
        return this.request("CreateSubscription", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

删除AMQP集群
     */
    async DeleteAMQPCluster(req, cb) {
        return this.request("DeleteAMQPCluster", req, cb);
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
     * 产品下线了，对应的接口也要下线。

获取用户的配额，如Queue容量，Exchange容量，Vhost容量，单Vhost Tps数,剩余可创建集群数
     */
    async DescribeAMQPCreateQuota(req, cb) {
        return this.request("DescribeAMQPCreateQuota", req, cb);
    }
    /**
     * 删除RocketMQ主题
     */
    async DeleteRocketMQTopic(req, cb) {
        return this.request("DeleteRocketMQTopic", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

创建AMQP Exchange
     */
    async CreateAMQPExchange(req, cb) {
        return this.request("CreateAMQPExchange", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

创建AMQP路由关系
     */
    async CreateAMQPRouteRelation(req, cb) {
        return this.request("CreateAMQPRouteRelation", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

获取Amqp路由关系列表
     */
    async DescribeAMQPRouteRelations(req, cb) {
        return this.request("DescribeAMQPRouteRelations", req, cb);
    }
    /**
     * 查询用户已购的RocketMQ专享实例列表
     */
    async DescribeRocketMQVipInstances(req, cb) {
        return this.request("DescribeRocketMQVipInstances", req, cb);
    }
    /**
     * 获取amqp集群列表
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
     * 产品下线了，对应的接口也要下线。

创建AMQP队列
     */
    async CreateAMQPQueue(req, cb) {
        return this.request("CreateAMQPQueue", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

更新Vhost
     */
    async ModifyAMQPVHost(req, cb) {
        return this.request("ModifyAMQPVHost", req, cb);
    }
    /**
     * 获取RocketMQ消费组列表
     */
    async DescribeRocketMQGroups(req, cb) {
        return this.request("DescribeRocketMQGroups", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

获取Amqp队列列表
     */
    async DescribeAMQPQueues(req, cb) {
        return this.request("DescribeAMQPQueues", req, cb);
    }
    /**
     * 删除RocketMQ集群
     */
    async DeleteRocketMQCluster(req, cb) {
        return this.request("DeleteRocketMQCluster", req, cb);
    }
    /**
     * 更新RocketMQ集群信息
     */
    async ModifyRocketMQCluster(req, cb) {
        return this.request("ModifyRocketMQCluster", req, cb);
    }
    /**
     * 删除角色，支持批量。
     */
    async DeleteRoles(req, cb) {
        return this.request("DeleteRoles", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

获取AMQP Exchange列表
     */
    async DescribeAMQPExchanges(req, cb) {
        return this.request("DescribeAMQPExchanges", req, cb);
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
     * 产品下线了，对应的接口也要下线。

更新Amqp交换机
     */
    async ModifyAMQPExchange(req, cb) {
        return this.request("ModifyAMQPExchange", req, cb);
    }
    /**
     * 发送cmq消息
     */
    async SendCmqMsg(req, cb) {
        return this.request("SendCmqMsg", req, cb);
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
     * 创建RocketMQ命名空间
     */
    async CreateRocketMQNamespace(req, cb) {
        return this.request("CreateRocketMQNamespace", req, cb);
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
     * 获取RocketMQ集群列表
     */
    async DescribeRocketMQClusters(req, cb) {
        return this.request("DescribeRocketMQClusters", req, cb);
    }
    /**
     * 修改主题备注和分区数
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 产品下线了，对应的接口也要下线。

删除Amqp路由关系
     */
    async DeleteAMQPRouteRelation(req, cb) {
        return this.request("DeleteAMQPRouteRelation", req, cb);
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
     * 批量发送消息

注意：TDMQ 批量发送消息的接口是在 TDMQ-HTTP 的服务侧将消息打包为一个 Batch，然后将该 Batch 在服务内部当作一次 TCP 请求发送出去。所以在使用过程中，用户还是按照单条消息发送的逻辑，每一条消息是一个独立的 HTTP 的请求，在 TDMQ-HTTP 的服务内部，会将多个 HTTP 的请求聚合为一个 Batch 发送到服务端。即，批量发送消息在使用上与发送单条消息是一致的，batch 的聚合是在 TDMQ-HTTP 的服务内部完成的。
     */
    async SendBatchMessages(req, cb) {
        return this.request("SendBatchMessages", req, cb);
    }
    /**
     * 清空cmq消息队列中的消息
     */
    async ClearCmqQueue(req, cb) {
        return this.request("ClearCmqQueue", req, cb);
    }
    /**
     * 获取命名空间角色列表
     */
    async DescribeEnvironmentRoles(req, cb) {
        return this.request("DescribeEnvironmentRoles", req, cb);
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
     * 查询用户已购的Pulsar专业版实例列表
     */
    async DescribePulsarProInstances(req, cb) {
        return this.request("DescribePulsarProInstances", req, cb);
    }
    /**
     * 创建RocketMQ主题
     */
    async CreateRocketMQTopic(req, cb) {
        return this.request("CreateRocketMQTopic", req, cb);
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
     * 此接口仅用于测试发生消息，不能作为现网正式生产使用
     */
    async SendMsg(req, cb) {
        return this.request("SendMsg", req, cb);
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
     * 角色修改
     */
    async ModifyRole(req, cb) {
        return this.request("ModifyRole", req, cb);
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

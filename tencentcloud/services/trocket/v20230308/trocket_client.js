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
 * trocket client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("trocket.tencentcloudapi.com", "2023-03-08", clientConfig);
    }
    /**
     * 查询消息列表，如查询死信，请设置ConsumerGroup参数
     */
    async DescribeMQTTMessageList(req, cb) {
        return this.request("DescribeMQTTMessageList", req, cb);
    }
    /**
     * 更新MQTT集群绑定证书
参数传空，则为删除证书
     */
    async ModifyMQTTInstanceCertBinding(req, cb) {
        return this.request("ModifyMQTTInstanceCertBinding", req, cb);
    }
    /**
     * 根据消息 ID 查询消息轨迹。
     */
    async DescribeMessageTrace(req, cb) {
        return this.request("DescribeMessageTrace", req, cb);
    }
    /**
     * 修改主题属性
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 根据消费组获取主题列表，Filter参数使用说明如下：

TopicName，主题名称过滤
     */
    async DescribeTopicListByGroup(req, cb) {
        return this.request("DescribeTopicListByGroup", req, cb);
    }
    /**
     * 修改主题属性
     */
    async ModifyMQTTTopic(req, cb) {
        return this.request("ModifyMQTTTopic", req, cb);
    }
    /**
     * 重新发送死信消息
     */
    async ResendDeadLetterMessage(req, cb) {
        return this.request("ResendDeadLetterMessage", req, cb);
    }
    /**
     * 删除MQTT访问用户
     */
    async DeleteMQTTUser(req, cb) {
        return this.request("DeleteMQTTUser", req, cb);
    }
    /**
     * 添加角色
     */
    async CreateRole(req, cb) {
        return this.request("CreateRole", req, cb);
    }
    /**
     * 导入消费者组列表
     */
    async ImportSourceClusterConsumerGroups(req, cb) {
        return this.request("ImportSourceClusterConsumerGroups", req, cb);
    }
    /**
     * 删除 RocketMQ 5.x 集群。
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 创建消费组
     */
    async CreateConsumerGroup(req, cb) {
        return this.request("CreateConsumerGroup", req, cb);
    }
    /**
     * 获取产品售卖规格
     */
    async DescribeMQTTProductSKUList(req, cb) {
        return this.request("DescribeMQTTProductSKUList", req, cb);
    }
    /**
     * 导入topic列表
     */
    async ImportSourceClusterTopics(req, cb) {
        return this.request("ImportSourceClusterTopics", req, cb);
    }
    /**
     * 查询消息详情
     */
    async DescribeMessage(req, cb) {
        return this.request("DescribeMessage", req, cb);
    }
    /**
     * 查询用户列表，Filter参数使用说明如下：

1. Username，用户名称模糊搜索
     */
    async DescribeMQTTUserList(req, cb) {
        return this.request("DescribeMQTTUserList", req, cb);
    }
    /**
     * 删除MQTT实例的公网接入点
     */
    async DeleteMQTTInsPublicEndpoint(req, cb) {
        return this.request("DeleteMQTTInsPublicEndpoint", req, cb);
    }
    /**
     * 查询角色列表，Filter参数使用说明如下：

1. RoleName，角色名称模糊搜索
2. AccessKey，AccessKey模糊搜索
     */
    async DescribeRoleList(req, cb) {
        return this.request("DescribeRoleList", req, cb);
    }
    /**
     * 修改MQTT角色
     */
    async ModifyMQTTUser(req, cb) {
        return this.request("ModifyMQTTUser", req, cb);
    }
    /**
     * 删除消费组
     */
    async DeleteConsumerGroup(req, cb) {
        return this.request("DeleteConsumerGroup", req, cb);
    }
    /**
     * 查询产品售卖规格，针对 RocketMQ 5.x 集群。
     */
    async DescribeProductSKUs(req, cb) {
        return this.request("DescribeProductSKUs", req, cb);
    }
    /**
     * 修改消费组属性
     */
    async ModifyConsumerGroup(req, cb) {
        return this.request("ModifyConsumerGroup", req, cb);
    }
    /**
     * 查询MQTT实例公网接入点
     */
    async DescribeMQTTInsVPCEndpoints(req, cb) {
        return this.request("DescribeMQTTInsVPCEndpoints", req, cb);
    }
    /**
     * 查询消费者客户端详情
     */
    async DescribeConsumerClient(req, cb) {
        return this.request("DescribeConsumerClient", req, cb);
    }
    /**
     * 删除角色
     */
    async DeleteRole(req, cb) {
        return this.request("DeleteRole", req, cb);
    }
    /**
     * 删除MQTT实例
     */
    async DeleteMQTTInstance(req, cb) {
        return this.request("DeleteMQTTInstance", req, cb);
    }
    /**
     * 查询MQTT消息详情
     */
    async DescribeMQTTMessage(req, cb) {
        return this.request("DescribeMQTTMessage", req, cb);
    }
    /**
     * 查询指定消费组堆积数。
     */
    async DescribeConsumerLag(req, cb) {
        return this.request("DescribeConsumerLag", req, cb);
    }
    /**
     * 查询mqtt主题详情
     */
    async DescribeMQTTTopic(req, cb) {
        return this.request("DescribeMQTTTopic", req, cb);
    }
    /**
     * 更新MQTT实例公网接入点
     */
    async ModifyMQTTInsPublicEndpoint(req, cb) {
        return this.request("ModifyMQTTInsPublicEndpoint", req, cb);
    }
    /**
     * 查询消费组详情
     */
    async DescribeConsumerGroup(req, cb) {
        return this.request("DescribeConsumerGroup", req, cb);
    }
    /**
     * 创建主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 查询消息列表。如果查询死信消息，请设置ConsumerGroup参数。
     */
    async DescribeMessageList(req, cb) {
        return this.request("DescribeMessageList", req, cb);
    }
    /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
    async DescribeMQTTTopicList(req, cb) {
        return this.request("DescribeMQTTTopicList", req, cb);
    }
    /**
     * 查询实例信息
     */
    async DescribeMQTTInstance(req, cb) {
        return this.request("DescribeMQTTInstance", req, cb);
    }
    /**
     * 创建主题
     */
    async CreateMQTTTopic(req, cb) {
        return this.request("CreateMQTTTopic", req, cb);
    }
    /**
     * 创建 RocketMQ 5.x 集群
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 删除MQTT主题
     */
    async DeleteMQTTTopic(req, cb) {
        return this.request("DeleteMQTTTopic", req, cb);
    }
    /**
     * 查询 RocketMQ 5.x 集群信息。
     */
    async DescribeInstance(req, cb) {
        return this.request("DescribeInstance", req, cb);
    }
    /**
     * 修改 RocketMQ 5.x 集群接入点。
     */
    async ModifyInstanceEndpoint(req, cb) {
        return this.request("ModifyInstanceEndpoint", req, cb);
    }
    /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
    async DescribeTopicList(req, cb) {
        return this.request("DescribeTopicList", req, cb);
    }
    /**
     * 查询MQTT实例公网接入点
     */
    async DescribeMQTTInsPublicEndpoints(req, cb) {
        return this.request("DescribeMQTTInsPublicEndpoints", req, cb);
    }
    /**
     * 查询MQTT集群证书列表
     */
    async DescribeMQTTInstanceCert(req, cb) {
        return this.request("DescribeMQTTInstanceCert", req, cb);
    }
    /**
     * 修改实例属性
     */
    async ModifyMQTTInstance(req, cb) {
        return this.request("ModifyMQTTInstance", req, cb);
    }
    /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    async DescribeMQTTInstanceList(req, cb) {
        return this.request("DescribeMQTTInstanceList", req, cb);
    }
    /**
     * 获取消费组列表，Filter参数使用说明如下：

1. ConsumerGroupName，名称模糊查询
2. ConsumeMessageOrderly，投递顺序性。"true":顺序投递；"false":并发投递
     */
    async DescribeConsumerGroupList(req, cb) {
        return this.request("DescribeConsumerGroupList", req, cb);
    }
    /**
     * 购买新的MQTT实例
     */
    async CreateMQTTInstance(req, cb) {
        return this.request("CreateMQTTInstance", req, cb);
    }
    /**
     * 查询集群列表，仅支持 5.x 集群。Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，集群ID查询
3. InstanceType, 集群类型查询，支持多选
3. InstanceStatus，集群状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    async DescribeInstanceList(req, cb) {
        return this.request("DescribeInstanceList", req, cb);
    }
    /**
     * 查询集群列表，支持 4.x 和 5.x 集群，其中 Filters 参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，集群ID查询
3. InstanceType, 集群类型查询，支持多选
4. Version，集群版本查询
当使用TagFilters查询时，Filters参数失效。
     */
    async DescribeFusionInstanceList(req, cb) {
        return this.request("DescribeFusionInstanceList", req, cb);
    }
    /**
     * 添加mqtt角色
     */
    async CreateMQTTUser(req, cb) {
        return this.request("CreateMQTTUser", req, cb);
    }
    /**
     * 修改角色
     */
    async ModifyRole(req, cb) {
        return this.request("ModifyRole", req, cb);
    }
    /**
     * 查询 MQTT 客户端详情
     */
    async DescribeMQTTClient(req, cb) {
        return this.request("DescribeMQTTClient", req, cb);
    }
    /**
     * 查询主题详情，Offset和Limit参数是指订阅该主题的消费组查询分页参数，Filter参数使用说明如下：

ConsumerGroup，消费组名称过滤
     */
    async DescribeTopic(req, cb) {
        return this.request("DescribeTopic", req, cb);
    }
    /**
     * 修改 RocketMQ 5.x 集群属性。
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
    /**
     * 删除主题
     */
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
    /**
     * 为MQTT实例创建公网接入点
     */
    async CreateMQTTInsPublicEndpoint(req, cb) {
        return this.request("CreateMQTTInsPublicEndpoint", req, cb);
    }
}
exports.Client = Client;

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
 * trabbit client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("trabbit.tencentcloudapi.com", "2023-04-18", clientConfig);
    }
    /**
     * 解绑RabbitMQ路由关系
     */
    async DeleteRabbitMQServerlessBinding(req, cb) {
        return this.request("DeleteRabbitMQServerlessBinding", req, cb);
    }
    /**
     * 修改集群信息
     */
    async ModifyRabbitMQServerlessInstance(req, cb) {
        return this.request("ModifyRabbitMQServerlessInstance", req, cb);
    }
    /**
     * 创建RabbitMQ的vhost
     */
    async CreateRabbitMQServerlessVirtualHost(req, cb) {
        return this.request("CreateRabbitMQServerlessVirtualHost", req, cb);
    }
    /**
     * 获取单个RabbitMQ专享实例信息
     */
    async DescribeRabbitMQServerlessInstance(req, cb) {
        return this.request("DescribeRabbitMQServerlessInstance", req, cb);
    }
    /**
     * 查询RabbitMQ队列消费者列表
     */
    async DescribeRabbitMQServerlessConsumers(req, cb) {
        return this.request("DescribeRabbitMQServerlessConsumers", req, cb);
    }
    /**
     * 删除RabbitMQ队列
     */
    async DeleteRabbitMQServerlessQueue(req, cb) {
        return this.request("DeleteRabbitMQServerlessQueue", req, cb);
    }
    /**
     * 删除RabbitMQ的用户
     */
    async DeleteRabbitMQServerlessUser(req, cb) {
        return this.request("DeleteRabbitMQServerlessUser", req, cb);
    }
    /**
     * 删除RabbitMQ的vhost
     */
    async DeleteRabbitMQServerlessVirtualHost(req, cb) {
        return this.request("DeleteRabbitMQServerlessVirtualHost", req, cb);
    }
    /**
     * 修改RabbitMQ的用户
     */
    async ModifyRabbitMQServerlessUser(req, cb) {
        return this.request("ModifyRabbitMQServerlessUser", req, cb);
    }
    /**
     * 查询RabbitMQ用户列表
     */
    async DescribeRabbitMQServerlessUser(req, cb) {
        return this.request("DescribeRabbitMQServerlessUser", req, cb);
    }
    /**
     * 查询RabbitMQ exchange 详情
     */
    async DescribeRabbitMQServerlessExchangeDetail(req, cb) {
        return this.request("DescribeRabbitMQServerlessExchangeDetail", req, cb);
    }
    /**
     * 查询RabbitMQ vhost列表
     */
    async DescribeRabbitMQServerlessVirtualHost(req, cb) {
        return this.request("DescribeRabbitMQServerlessVirtualHost", req, cb);
    }
    /**
     * 查询RabbitMQ exchange 列表
     */
    async DescribeRabbitMQServerlessExchanges(req, cb) {
        return this.request("DescribeRabbitMQServerlessExchanges", req, cb);
    }
    /**
     * 获取路由关系列表
     */
    async DescribeRabbitMQServerlessBindings(req, cb) {
        return this.request("DescribeRabbitMQServerlessBindings", req, cb);
    }
    /**
     * 创建RabbitMQ的用户
     */
    async CreateRabbitMQServerlessUser(req, cb) {
        return this.request("CreateRabbitMQServerlessUser", req, cb);
    }
    /**
     * 查询RabbitMQ队列列表
     */
    async DescribeRabbitMQServerlessQueues(req, cb) {
        return this.request("DescribeRabbitMQServerlessQueues", req, cb);
    }
    /**
     * 修改RabbitMQ的vhost
     */
    async ModifyRabbitMQServerlessVirtualHost(req, cb) {
        return this.request("ModifyRabbitMQServerlessVirtualHost", req, cb);
    }
    /**
     * 创建RabbitMQ队列
     */
    async CreateRabbitMQServerlessQueue(req, cb) {
        return this.request("CreateRabbitMQServerlessQueue", req, cb);
    }
    /**
     * 删除RabbitMQ exchange
     */
    async DeleteRabbitMQServerlessExchange(req, cb) {
        return this.request("DeleteRabbitMQServerlessExchange", req, cb);
    }
    /**
     * 查询RabbitMQ权限列表
     */
    async DescribeRabbitMQServerlessPermission(req, cb) {
        return this.request("DescribeRabbitMQServerlessPermission", req, cb);
    }
    /**
     * 查询RabbitMQ队列详情
     */
    async DescribeRabbitMQServerlessQueueDetail(req, cb) {
        return this.request("DescribeRabbitMQServerlessQueueDetail", req, cb);
    }
    /**
     * 查询RabbitMQ连接列表
     */
    async DescribeRabbitMQServerlessConnection(req, cb) {
        return this.request("DescribeRabbitMQServerlessConnection", req, cb);
    }
    /**
     * 修改RabbitMQ队列
     */
    async ModifyRabbitMQServerlessQueue(req, cb) {
        return this.request("ModifyRabbitMQServerlessQueue", req, cb);
    }
    /**
     * 修改RabbitMQ exchange
     */
    async ModifyRabbitMQServerlessExchange(req, cb) {
        return this.request("ModifyRabbitMQServerlessExchange", req, cb);
    }
    /**
     * 创建RabbitMQ路由关系
     */
    async CreateRabbitMQServerlessBinding(req, cb) {
        return this.request("CreateRabbitMQServerlessBinding", req, cb);
    }
    /**
     * 删除RabbitMQ的权限
     */
    async DeleteRabbitMQServerlessPermission(req, cb) {
        return this.request("DeleteRabbitMQServerlessPermission", req, cb);
    }
    /**
     * 获取实例列表
     */
    async ListRabbitMQServerlessInstances(req, cb) {
        return this.request("ListRabbitMQServerlessInstances", req, cb);
    }
    /**
     * 创建RabbitMQ exchange
     */
    async CreateRabbitMQServerlessExchange(req, cb) {
        return this.request("CreateRabbitMQServerlessExchange", req, cb);
    }
    /**
     * 修改RabbitMQ的权限
     */
    async ModifyRabbitMQServerlessPermission(req, cb) {
        return this.request("ModifyRabbitMQServerlessPermission", req, cb);
    }
}
exports.Client = Client;

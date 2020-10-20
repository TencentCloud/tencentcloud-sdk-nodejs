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
 * cmq client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cmq.tencentcloudapi.com", "2019-03-04", clientConfig);
    }
    /**
     * 创建主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 创建订阅接口
     */
    async CreateSubscribe(req, cb) {
        return this.request("CreateSubscribe", req, cb);
    }
    /**
     * 修改主题属性
     */
    async ModifyTopicAttribute(req, cb) {
        return this.request("ModifyTopicAttribute", req, cb);
    }
    /**
     * 清空订阅者消息标签
     */
    async ClearSubscriptionFilterTags(req, cb) {
        return this.request("ClearSubscriptionFilterTags", req, cb);
    }
    /**
     * 删除订阅
     */
    async DeleteSubscribe(req, cb) {
        return this.request("DeleteSubscribe", req, cb);
    }
    /**
     * 创建队列接口

     */
    async CreateQueue(req, cb) {
        return this.request("CreateQueue", req, cb);
    }
    /**
     * 回溯队列
     */
    async RewindQueue(req, cb) {
        return this.request("RewindQueue", req, cb);
    }
    /**
     * 修改订阅属性
     */
    async ModifySubscriptionAttribute(req, cb) {
        return this.request("ModifySubscriptionAttribute", req, cb);
    }
    /**
     * 查询主题详情
     */
    async DescribeTopicDetail(req, cb) {
        return this.request("DescribeTopicDetail", req, cb);
    }
    /**
     * 枚举队列
     */
    async DescribeQueueDetail(req, cb) {
        return this.request("DescribeQueueDetail", req, cb);
    }
    /**
     * DeleteQueue
     */
    async DeleteQueue(req, cb) {
        return this.request("DeleteQueue", req, cb);
    }
    /**
     * 查询订阅详情
     */
    async DescribeSubscriptionDetail(req, cb) {
        return this.request("DescribeSubscriptionDetail", req, cb);
    }
    /**
     * 枚举死信队列源队列
     */
    async DescribeDeadLetterSourceQueues(req, cb) {
        return this.request("DescribeDeadLetterSourceQueues", req, cb);
    }
    /**
     * 删除主题
     */
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
    /**
     * 清除queue中的所有消息
     */
    async ClearQueue(req, cb) {
        return this.request("ClearQueue", req, cb);
    }
    /**
     * 解绑死信队列
     */
    async UnbindDeadLetter(req, cb) {
        return this.request("UnbindDeadLetter", req, cb);
    }
    /**
     * 修改队列属性
     */
    async ModifyQueueAttribute(req, cb) {
        return this.request("ModifyQueueAttribute", req, cb);
    }
}
exports.Client = Client;

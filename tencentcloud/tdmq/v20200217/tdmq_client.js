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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ModifyEnvironmentAttributesRequest = models.ModifyEnvironmentAttributesRequest;
const DescribeSubscriptionsRequest = models.DescribeSubscriptionsRequest;
const Environment = models.Environment;
const DescribeEnvironmentAttributesRequest = models.DescribeEnvironmentAttributesRequest;
const PartitionsTopic = models.PartitionsTopic;
const ResetMsgSubOffsetByTimestampResponse = models.ResetMsgSubOffsetByTimestampResponse;
const DescribeTopicsResponse = models.DescribeTopicsResponse;
const CreateTopicResponse = models.CreateTopicResponse;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const ModifyTopicResponse = models.ModifyTopicResponse;
const DescribeProducersRequest = models.DescribeProducersRequest;
const DescribeEnvironmentAttributesResponse = models.DescribeEnvironmentAttributesResponse;
const Subscription = models.Subscription;
const DeleteTopicsResponse = models.DeleteTopicsResponse;
const SubscriptionTopic = models.SubscriptionTopic;
const DescribeSubscriptionsResponse = models.DescribeSubscriptionsResponse;
const DescribeProducersResponse = models.DescribeProducersResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DescribeTopicsRequest = models.DescribeTopicsRequest;
const DeleteEnvironmentsResponse = models.DeleteEnvironmentsResponse;
const Connection = models.Connection;
const DeleteTopicsRequest = models.DeleteTopicsRequest;
const CreateSubscriptionRequest = models.CreateSubscriptionRequest;
const ModifyTopicRequest = models.ModifyTopicRequest;
const Consumer = models.Consumer;
const FilterSubscription = models.FilterSubscription;
const ModifyEnvironmentAttributesResponse = models.ModifyEnvironmentAttributesResponse;
const DeleteSubscriptionsRequest = models.DeleteSubscriptionsRequest;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const ResetMsgSubOffsetByTimestampRequest = models.ResetMsgSubOffsetByTimestampRequest;
const Producer = models.Producer;
const DeleteSubscriptionsResponse = models.DeleteSubscriptionsResponse;
const CreateSubscriptionResponse = models.CreateSubscriptionResponse;
const ConsumersSchedule = models.ConsumersSchedule;
const DeleteEnvironmentsRequest = models.DeleteEnvironmentsRequest;
const Topic = models.Topic;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const TopicRecord = models.TopicRecord;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;


/**
 * tdmq client
 * @class
 */
class TdmqClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdmq.tencentcloudapi.com", "2020-02-17", credential, region, profile);
    }
    
    /**
     * 新增指定分区、类型的消息主题
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }

    /**
     * 批量删除租户下的环境
     * @param {DeleteEnvironmentsRequest} req
     * @param {function(string, DeleteEnvironmentsResponse):void} cb
     * @public
     */
    DeleteEnvironments(req, cb) {
        let resp = new DeleteEnvironmentsResponse();
        this.request("DeleteEnvironments", req, resp, cb);
    }

    /**
     * 修改主题备注和分区数
     * @param {ModifyTopicRequest} req
     * @param {function(string, ModifyTopicResponse):void} cb
     * @public
     */
    ModifyTopic(req, cb) {
        let resp = new ModifyTopicResponse();
        this.request("ModifyTopic", req, resp, cb);
    }

    /**
     * 批量删除topics
     * @param {DeleteTopicsRequest} req
     * @param {function(string, DeleteTopicsResponse):void} cb
     * @public
     */
    DeleteTopics(req, cb) {
        let resp = new DeleteTopicsResponse();
        this.request("DeleteTopics", req, resp, cb);
    }

    /**
     * 创建一个主题的订阅关系
     * @param {CreateSubscriptionRequest} req
     * @param {function(string, CreateSubscriptionResponse):void} cb
     * @public
     */
    CreateSubscription(req, cb) {
        let resp = new CreateSubscriptionResponse();
        this.request("CreateSubscription", req, resp, cb);
    }

    /**
     * 查询指定环境和主题下的订阅者列表
     * @param {DescribeSubscriptionsRequest} req
     * @param {function(string, DescribeSubscriptionsResponse):void} cb
     * @public
     */
    DescribeSubscriptions(req, cb) {
        let resp = new DescribeSubscriptionsResponse();
        this.request("DescribeSubscriptions", req, resp, cb);
    }

    /**
     * 修改指定环境的属性值
     * @param {ModifyEnvironmentAttributesRequest} req
     * @param {function(string, ModifyEnvironmentAttributesResponse):void} cb
     * @public
     */
    ModifyEnvironmentAttributes(req, cb) {
        let resp = new ModifyEnvironmentAttributesResponse();
        this.request("ModifyEnvironmentAttributes", req, resp, cb);
    }

    /**
     * 获取指定环境的属性
     * @param {DescribeEnvironmentAttributesRequest} req
     * @param {function(string, DescribeEnvironmentAttributesResponse):void} cb
     * @public
     */
    DescribeEnvironmentAttributes(req, cb) {
        let resp = new DescribeEnvironmentAttributesResponse();
        this.request("DescribeEnvironmentAttributes", req, resp, cb);
    }

    /**
     * 用于在用户账户下创建消息队列 Tdmq环境（命名空间）
     * @param {CreateEnvironmentRequest} req
     * @param {function(string, CreateEnvironmentResponse):void} cb
     * @public
     */
    CreateEnvironment(req, cb) {
        let resp = new CreateEnvironmentResponse();
        this.request("CreateEnvironment", req, resp, cb);
    }

    /**
     * 获取租户下环境列表
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
    }

    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     * @param {ResetMsgSubOffsetByTimestampRequest} req
     * @param {function(string, ResetMsgSubOffsetByTimestampResponse):void} cb
     * @public
     */
    ResetMsgSubOffsetByTimestamp(req, cb) {
        let resp = new ResetMsgSubOffsetByTimestampResponse();
        this.request("ResetMsgSubOffsetByTimestamp", req, resp, cb);
    }

    /**
     * 获取生产者列表，仅显示在线的生产者
     * @param {DescribeProducersRequest} req
     * @param {function(string, DescribeProducersResponse):void} cb
     * @public
     */
    DescribeProducers(req, cb) {
        let resp = new DescribeProducersResponse();
        this.request("DescribeProducers", req, resp, cb);
    }

    /**
     * 获取环境下主题列表
     * @param {DescribeTopicsRequest} req
     * @param {function(string, DescribeTopicsResponse):void} cb
     * @public
     */
    DescribeTopics(req, cb) {
        let resp = new DescribeTopicsResponse();
        this.request("DescribeTopics", req, resp, cb);
    }

    /**
     * 删除订阅关系
     * @param {DeleteSubscriptionsRequest} req
     * @param {function(string, DeleteSubscriptionsResponse):void} cb
     * @public
     */
    DeleteSubscriptions(req, cb) {
        let resp = new DeleteSubscriptionsResponse();
        this.request("DeleteSubscriptions", req, resp, cb);
    }


}
module.exports = TdmqClient;

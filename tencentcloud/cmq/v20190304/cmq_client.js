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
const TopicSet = models.TopicSet;
const RewindQueueRequest = models.RewindQueueRequest;
const DescribeSubscriptionDetailRequest = models.DescribeSubscriptionDetailRequest;
const ModifyQueueAttributeResponse = models.ModifyQueueAttributeResponse;
const CreateQueueRequest = models.CreateQueueRequest;
const ModifySubscriptionAttributeResponse = models.ModifySubscriptionAttributeResponse;
const DeadLetterPolicy = models.DeadLetterPolicy;
const ModifyTopicAttributeResponse = models.ModifyTopicAttributeResponse;
const DeleteSubscribeRequest = models.DeleteSubscribeRequest;
const DescribeSubscriptionDetailResponse = models.DescribeSubscriptionDetailResponse;
const CreateSubscribeRequest = models.CreateSubscribeRequest;
const ClearQueueRequest = models.ClearQueueRequest;
const CreateTopicResponse = models.CreateTopicResponse;
const ClearSubscriptionFilterTagsResponse = models.ClearSubscriptionFilterTagsResponse;
const UnbindDeadLetterResponse = models.UnbindDeadLetterResponse;
const TransactionPolicy = models.TransactionPolicy;
const DescribeTopicDetailRequest = models.DescribeTopicDetailRequest;
const DeleteTopicRequest = models.DeleteTopicRequest;
const DescribeTopicDetailResponse = models.DescribeTopicDetailResponse;
const DescribeQueueDetailResponse = models.DescribeQueueDetailResponse;
const UnbindDeadLetterRequest = models.UnbindDeadLetterRequest;
const CreateTopicRequest = models.CreateTopicRequest;
const DeleteQueueRequest = models.DeleteQueueRequest;
const Filter = models.Filter;
const DescribeDeadLetterSourceQueuesResponse = models.DescribeDeadLetterSourceQueuesResponse;
const RewindQueueResponse = models.RewindQueueResponse;
const ModifyTopicAttributeRequest = models.ModifyTopicAttributeRequest;
const DescribeQueueDetailRequest = models.DescribeQueueDetailRequest;
const QueueSet = models.QueueSet;
const DeleteTopicResponse = models.DeleteTopicResponse;
const ClearSubscriptionFilterTagsRequest = models.ClearSubscriptionFilterTagsRequest;
const CreateQueueResponse = models.CreateQueueResponse;
const DeleteSubscribeResponse = models.DeleteSubscribeResponse;
const DescribeDeadLetterSourceQueuesRequest = models.DescribeDeadLetterSourceQueuesRequest;
const Tag = models.Tag;
const DeadLetterSource = models.DeadLetterSource;
const CreateSubscribeResponse = models.CreateSubscribeResponse;
const ClearQueueResponse = models.ClearQueueResponse;
const ModifySubscriptionAttributeRequest = models.ModifySubscriptionAttributeRequest;
const Subscription = models.Subscription;
const DeleteQueueResponse = models.DeleteQueueResponse;
const ModifyQueueAttributeRequest = models.ModifyQueueAttributeRequest;


/**
 * cmq client
 * @class
 */
class CmqClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cmq.tencentcloudapi.com", "2019-03-04", credential, region, profile);
    }
    
    /**
     * 创建主题
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }

    /**
     * 创建订阅接口
     * @param {CreateSubscribeRequest} req
     * @param {function(string, CreateSubscribeResponse):void} cb
     * @public
     */
    CreateSubscribe(req, cb) {
        let resp = new CreateSubscribeResponse();
        this.request("CreateSubscribe", req, resp, cb);
    }

    /**
     * 修改主题属性
     * @param {ModifyTopicAttributeRequest} req
     * @param {function(string, ModifyTopicAttributeResponse):void} cb
     * @public
     */
    ModifyTopicAttribute(req, cb) {
        let resp = new ModifyTopicAttributeResponse();
        this.request("ModifyTopicAttribute", req, resp, cb);
    }

    /**
     * 清空订阅者消息标签
     * @param {ClearSubscriptionFilterTagsRequest} req
     * @param {function(string, ClearSubscriptionFilterTagsResponse):void} cb
     * @public
     */
    ClearSubscriptionFilterTags(req, cb) {
        let resp = new ClearSubscriptionFilterTagsResponse();
        this.request("ClearSubscriptionFilterTags", req, resp, cb);
    }

    /**
     * 删除订阅
     * @param {DeleteSubscribeRequest} req
     * @param {function(string, DeleteSubscribeResponse):void} cb
     * @public
     */
    DeleteSubscribe(req, cb) {
        let resp = new DeleteSubscribeResponse();
        this.request("DeleteSubscribe", req, resp, cb);
    }

    /**
     * 创建队列接口

     * @param {CreateQueueRequest} req
     * @param {function(string, CreateQueueResponse):void} cb
     * @public
     */
    CreateQueue(req, cb) {
        let resp = new CreateQueueResponse();
        this.request("CreateQueue", req, resp, cb);
    }

    /**
     * 回溯队列
     * @param {RewindQueueRequest} req
     * @param {function(string, RewindQueueResponse):void} cb
     * @public
     */
    RewindQueue(req, cb) {
        let resp = new RewindQueueResponse();
        this.request("RewindQueue", req, resp, cb);
    }

    /**
     * 修改订阅属性
     * @param {ModifySubscriptionAttributeRequest} req
     * @param {function(string, ModifySubscriptionAttributeResponse):void} cb
     * @public
     */
    ModifySubscriptionAttribute(req, cb) {
        let resp = new ModifySubscriptionAttributeResponse();
        this.request("ModifySubscriptionAttribute", req, resp, cb);
    }

    /**
     * 查询主题详情 
     * @param {DescribeTopicDetailRequest} req
     * @param {function(string, DescribeTopicDetailResponse):void} cb
     * @public
     */
    DescribeTopicDetail(req, cb) {
        let resp = new DescribeTopicDetailResponse();
        this.request("DescribeTopicDetail", req, resp, cb);
    }

    /**
     * 枚举队列
     * @param {DescribeQueueDetailRequest} req
     * @param {function(string, DescribeQueueDetailResponse):void} cb
     * @public
     */
    DescribeQueueDetail(req, cb) {
        let resp = new DescribeQueueDetailResponse();
        this.request("DescribeQueueDetail", req, resp, cb);
    }

    /**
     * DeleteQueue
     * @param {DeleteQueueRequest} req
     * @param {function(string, DeleteQueueResponse):void} cb
     * @public
     */
    DeleteQueue(req, cb) {
        let resp = new DeleteQueueResponse();
        this.request("DeleteQueue", req, resp, cb);
    }

    /**
     * 查询订阅详情
     * @param {DescribeSubscriptionDetailRequest} req
     * @param {function(string, DescribeSubscriptionDetailResponse):void} cb
     * @public
     */
    DescribeSubscriptionDetail(req, cb) {
        let resp = new DescribeSubscriptionDetailResponse();
        this.request("DescribeSubscriptionDetail", req, resp, cb);
    }

    /**
     * 枚举死信队列源队列
     * @param {DescribeDeadLetterSourceQueuesRequest} req
     * @param {function(string, DescribeDeadLetterSourceQueuesResponse):void} cb
     * @public
     */
    DescribeDeadLetterSourceQueues(req, cb) {
        let resp = new DescribeDeadLetterSourceQueuesResponse();
        this.request("DescribeDeadLetterSourceQueues", req, resp, cb);
    }

    /**
     * 删除主题
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        let resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }

    /**
     * 清除queue中的所有消息
     * @param {ClearQueueRequest} req
     * @param {function(string, ClearQueueResponse):void} cb
     * @public
     */
    ClearQueue(req, cb) {
        let resp = new ClearQueueResponse();
        this.request("ClearQueue", req, resp, cb);
    }

    /**
     * 解绑死信队列
     * @param {UnbindDeadLetterRequest} req
     * @param {function(string, UnbindDeadLetterResponse):void} cb
     * @public
     */
    UnbindDeadLetter(req, cb) {
        let resp = new UnbindDeadLetterResponse();
        this.request("UnbindDeadLetter", req, resp, cb);
    }

    /**
     * 修改队列属性
     * @param {ModifyQueueAttributeRequest} req
     * @param {function(string, ModifyQueueAttributeResponse):void} cb
     * @public
     */
    ModifyQueueAttribute(req, cb) {
        let resp = new ModifyQueueAttributeResponse();
        this.request("ModifyQueueAttribute", req, resp, cb);
    }


}
module.exports = CmqClient;

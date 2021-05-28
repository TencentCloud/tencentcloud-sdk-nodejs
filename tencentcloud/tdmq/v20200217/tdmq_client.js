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
const DescribeBindClustersResponse = models.DescribeBindClustersResponse;
const CmqDeadLetterPolicy = models.CmqDeadLetterPolicy;
const DescribeSubscriptionsRequest = models.DescribeSubscriptionsRequest;
const DeleteClusterResponse = models.DeleteClusterResponse;
const SendBatchMessagesResponse = models.SendBatchMessagesResponse;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const CreateCmqTopicRequest = models.CreateCmqTopicRequest;
const BindCluster = models.BindCluster;
const ModifyClusterResponse = models.ModifyClusterResponse;
const DescribeCmqQueuesResponse = models.DescribeCmqQueuesResponse;
const PublishCmqMsgRequest = models.PublishCmqMsgRequest;
const CreateCmqSubscribeRequest = models.CreateCmqSubscribeRequest;
const RewindCmqQueueResponse = models.RewindCmqQueueResponse;
const DeleteClusterRequest = models.DeleteClusterRequest;
const CmqSubscription = models.CmqSubscription;
const DeleteCmqTopicResponse = models.DeleteCmqTopicResponse;
const CreateSubscriptionRequest = models.CreateSubscriptionRequest;
const DescribeCmqTopicDetailResponse = models.DescribeCmqTopicDetailResponse;
const CmqQueue = models.CmqQueue;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const Producer = models.Producer;
const CreateSubscriptionResponse = models.CreateSubscriptionResponse;
const ModifyCmqTopicAttributeResponse = models.ModifyCmqTopicAttributeResponse;
const DescribeCmqSubscriptionDetailRequest = models.DescribeCmqSubscriptionDetailRequest;
const Topic = models.Topic;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const DescribeCmqQueueDetailResponse = models.DescribeCmqQueueDetailResponse;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;
const DeleteTopicsResponse = models.DeleteTopicsResponse;
const DescribeClustersRequest = models.DescribeClustersRequest;
const ModifyEnvironmentAttributesRequest = models.ModifyEnvironmentAttributesRequest;
const DescribeCmqSubscriptionDetailResponse = models.DescribeCmqSubscriptionDetailResponse;
const VpcBindRecord = models.VpcBindRecord;
const RewindCmqQueueRequest = models.RewindCmqQueueRequest;
const ModifyClusterRequest = models.ModifyClusterRequest;
const DescribeEnvironmentAttributesRequest = models.DescribeEnvironmentAttributesRequest;
const DescribeTopicsResponse = models.DescribeTopicsResponse;
const PublishCmqMsgResponse = models.PublishCmqMsgResponse;
const SendCmqMsgRequest = models.SendCmqMsgRequest;
const ModifyCmqSubscriptionAttributeResponse = models.ModifyCmqSubscriptionAttributeResponse;
const Tag = models.Tag;
const DeleteCmqQueueResponse = models.DeleteCmqQueueResponse;
const SendMessagesRequest = models.SendMessagesRequest;
const ModifyCmqTopicAttributeRequest = models.ModifyCmqTopicAttributeRequest;
const Subscription = models.Subscription;
const CreateCmqSubscribeResponse = models.CreateCmqSubscribeResponse;
const DescribeSubscriptionsResponse = models.DescribeSubscriptionsResponse;
const SendMessagesResponse = models.SendMessagesResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DescribeTopicsRequest = models.DescribeTopicsRequest;
const DeleteEnvironmentsResponse = models.DeleteEnvironmentsResponse;
const DescribeEnvironmentRolesResponse = models.DescribeEnvironmentRolesResponse;
const ClearCmqQueueRequest = models.ClearCmqQueueRequest;
const FilterSubscription = models.FilterSubscription;
const DescribeCmqTopicsResponse = models.DescribeCmqTopicsResponse;
const DescribeCmqTopicDetailRequest = models.DescribeCmqTopicDetailRequest;
const CmqTopic = models.CmqTopic;
const UnbindCmqDeadLetterResponse = models.UnbindCmqDeadLetterResponse;
const DeleteEnvironmentsRequest = models.DeleteEnvironmentsRequest;
const DescribeBindVpcsRequest = models.DescribeBindVpcsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const ClearCmqSubscriptionFilterTagsRequest = models.ClearCmqSubscriptionFilterTagsRequest;
const TopicRecord = models.TopicRecord;
const DescribeEnvironmentRolesRequest = models.DescribeEnvironmentRolesRequest;
const Environment = models.Environment;
const CreateCmqQueueResponse = models.CreateCmqQueueResponse;
const PartitionsTopic = models.PartitionsTopic;
const ResetMsgSubOffsetByTimestampResponse = models.ResetMsgSubOffsetByTimestampResponse;
const CreateClusterResponse = models.CreateClusterResponse;
const DescribeCmqDeadLetterSourceQueuesRequest = models.DescribeCmqDeadLetterSourceQueuesRequest;
const CreateClusterRequest = models.CreateClusterRequest;
const ModifyCmqQueueAttributeResponse = models.ModifyCmqQueueAttributeResponse;
const CreateTopicResponse = models.CreateTopicResponse;
const DescribeCmqQueuesRequest = models.DescribeCmqQueuesRequest;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const ModifyCmqSubscriptionAttributeRequest = models.ModifyCmqSubscriptionAttributeRequest;
const ModifyTopicResponse = models.ModifyTopicResponse;
const CreateCmqTopicResponse = models.CreateCmqTopicResponse;
const CmqDeadLetterSource = models.CmqDeadLetterSource;
const ClearCmqSubscriptionFilterTagsResponse = models.ClearCmqSubscriptionFilterTagsResponse;
const DescribeCmqTopicsRequest = models.DescribeCmqTopicsRequest;
const Filter = models.Filter;
const Connection = models.Connection;
const DeleteTopicsRequest = models.DeleteTopicsRequest;
const CmqTransactionPolicy = models.CmqTransactionPolicy;
const ModifyTopicRequest = models.ModifyTopicRequest;
const ResetMsgSubOffsetByTimestampRequest = models.ResetMsgSubOffsetByTimestampRequest;
const Consumer = models.Consumer;
const DescribeBindVpcsResponse = models.DescribeBindVpcsResponse;
const DeleteCmqSubscribeRequest = models.DeleteCmqSubscribeRequest;
const DescribeCmqDeadLetterSourceQueuesResponse = models.DescribeCmqDeadLetterSourceQueuesResponse;
const DeleteSubscriptionsResponse = models.DeleteSubscriptionsResponse;
const ConsumersSchedule = models.ConsumersSchedule;
const Cluster = models.Cluster;
const DescribeCmqQueueDetailRequest = models.DescribeCmqQueueDetailRequest;
const ClearCmqQueueResponse = models.ClearCmqQueueResponse;
const DescribeBindClustersRequest = models.DescribeBindClustersRequest;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const CreateCmqQueueRequest = models.CreateCmqQueueRequest;
const DeleteCmqQueueRequest = models.DeleteCmqQueueRequest;
const DescribeProducersRequest = models.DescribeProducersRequest;
const DescribeEnvironmentAttributesResponse = models.DescribeEnvironmentAttributesResponse;
const SubscriptionTopic = models.SubscriptionTopic;
const DescribeProducersResponse = models.DescribeProducersResponse;
const SendBatchMessagesRequest = models.SendBatchMessagesRequest;
const DeleteCmqTopicRequest = models.DeleteCmqTopicRequest;
const SendCmqMsgResponse = models.SendCmqMsgResponse;
const UnbindCmqDeadLetterRequest = models.UnbindCmqDeadLetterRequest;
const ModifyCmqQueueAttributeRequest = models.ModifyCmqQueueAttributeRequest;
const DeleteCmqSubscribeResponse = models.DeleteCmqSubscribeResponse;
const ModifyEnvironmentAttributesResponse = models.ModifyEnvironmentAttributesResponse;
const DeleteSubscriptionsRequest = models.DeleteSubscriptionsRequest;
const EnvironmentRole = models.EnvironmentRole;


/**
 * tdmq client
 * @class
 */
class TdmqClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdmq.tencentcloudapi.com", "2020-02-17", credential, region, profile);
    }
    
    /**
     * 删除cmq主题
     * @param {DeleteCmqTopicRequest} req
     * @param {function(string, DeleteCmqTopicResponse):void} cb
     * @public
     */
    DeleteCmqTopic(req, cb) {
        let resp = new DeleteCmqTopicResponse();
        this.request("DeleteCmqTopic", req, resp, cb);
    }

    /**
     * 批量删除租户下的命名空间
     * @param {DeleteEnvironmentsRequest} req
     * @param {function(string, DeleteEnvironmentsResponse):void} cb
     * @public
     */
    DeleteEnvironments(req, cb) {
        let resp = new DeleteEnvironmentsResponse();
        this.request("DeleteEnvironments", req, resp, cb);
    }

    /**
     * 获取租户VPC绑定关系
     * @param {DescribeBindVpcsRequest} req
     * @param {function(string, DescribeBindVpcsResponse):void} cb
     * @public
     */
    DescribeBindVpcs(req, cb) {
        let resp = new DescribeBindVpcsResponse();
        this.request("DescribeBindVpcs", req, resp, cb);
    }

    /**
     * 创建用户的集群
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
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
     * 清空cmq消息队列中的消息
     * @param {ClearCmqQueueRequest} req
     * @param {function(string, ClearCmqQueueResponse):void} cb
     * @public
     */
    ClearCmqQueue(req, cb) {
        let resp = new ClearCmqQueueResponse();
        this.request("ClearCmqQueue", req, resp, cb);
    }

    /**
     * 创建cmq队列接口
     * @param {CreateCmqQueueRequest} req
     * @param {function(string, CreateCmqQueueResponse):void} cb
     * @public
     */
    CreateCmqQueue(req, cb) {
        let resp = new CreateCmqQueueResponse();
        this.request("CreateCmqQueue", req, resp, cb);
    }

    /**
     * 修改cmq主题属性
     * @param {ModifyCmqTopicAttributeRequest} req
     * @param {function(string, ModifyCmqTopicAttributeResponse):void} cb
     * @public
     */
    ModifyCmqTopicAttribute(req, cb) {
        let resp = new ModifyCmqTopicAttributeResponse();
        this.request("ModifyCmqTopicAttribute", req, resp, cb);
    }

    /**
     * 修改cmq队列属性
     * @param {ModifyCmqQueueAttributeRequest} req
     * @param {function(string, ModifyCmqQueueAttributeResponse):void} cb
     * @public
     */
    ModifyCmqQueueAttribute(req, cb) {
        let resp = new ModifyCmqQueueAttributeResponse();
        this.request("ModifyCmqQueueAttribute", req, resp, cb);
    }

    /**
     * 创建cmq主题
     * @param {CreateCmqTopicRequest} req
     * @param {function(string, CreateCmqTopicResponse):void} cb
     * @public
     */
    CreateCmqTopic(req, cb) {
        let resp = new CreateCmqTopicResponse();
        this.request("CreateCmqTopic", req, resp, cb);
    }

    /**
     * 查询cmq订阅详情
     * @param {DescribeCmqSubscriptionDetailRequest} req
     * @param {function(string, DescribeCmqSubscriptionDetailResponse):void} cb
     * @public
     */
    DescribeCmqSubscriptionDetail(req, cb) {
        let resp = new DescribeCmqSubscriptionDetailResponse();
        this.request("DescribeCmqSubscriptionDetail", req, resp, cb);
    }

    /**
     * 删除cmq队列
     * @param {DeleteCmqQueueRequest} req
     * @param {function(string, DeleteCmqQueueResponse):void} cb
     * @public
     */
    DeleteCmqQueue(req, cb) {
        let resp = new DeleteCmqQueueResponse();
        this.request("DeleteCmqQueue", req, resp, cb);
    }

    /**
     * 枚举cmq全量主题
     * @param {DescribeCmqTopicsRequest} req
     * @param {function(string, DescribeCmqTopicsResponse):void} cb
     * @public
     */
    DescribeCmqTopics(req, cb) {
        let resp = new DescribeCmqTopicsResponse();
        this.request("DescribeCmqTopics", req, resp, cb);
    }

    /**
     * 枚举cmq死信队列源队列
     * @param {DescribeCmqDeadLetterSourceQueuesRequest} req
     * @param {function(string, DescribeCmqDeadLetterSourceQueuesResponse):void} cb
     * @public
     */
    DescribeCmqDeadLetterSourceQueues(req, cb) {
        let resp = new DescribeCmqDeadLetterSourceQueuesResponse();
        this.request("DescribeCmqDeadLetterSourceQueues", req, resp, cb);
    }

    /**
     * 获取命名空间角色列表
     * @param {DescribeEnvironmentRolesRequest} req
     * @param {function(string, DescribeEnvironmentRolesResponse):void} cb
     * @public
     */
    DescribeEnvironmentRoles(req, cb) {
        let resp = new DescribeEnvironmentRolesResponse();
        this.request("DescribeEnvironmentRoles", req, resp, cb);
    }

    /**
     * 删除集群
     * @param {DeleteClusterRequest} req
     * @param {function(string, DeleteClusterResponse):void} cb
     * @public
     */
    DeleteCluster(req, cb) {
        let resp = new DeleteClusterResponse();
        this.request("DeleteCluster", req, resp, cb);
    }

    /**
     * 获取用户绑定的专享集群列表
     * @param {DescribeBindClustersRequest} req
     * @param {function(string, DescribeBindClustersResponse):void} cb
     * @public
     */
    DescribeBindClusters(req, cb) {
        let resp = new DescribeBindClustersResponse();
        this.request("DescribeBindClusters", req, resp, cb);
    }

    /**
     * 查询cmq队列详情
     * @param {DescribeCmqQueueDetailRequest} req
     * @param {function(string, DescribeCmqQueueDetailResponse):void} cb
     * @public
     */
    DescribeCmqQueueDetail(req, cb) {
        let resp = new DescribeCmqQueueDetailResponse();
        this.request("DescribeCmqQueueDetail", req, resp, cb);
    }

    /**
     * 回溯cmq队列
     * @param {RewindCmqQueueRequest} req
     * @param {function(string, RewindCmqQueueResponse):void} cb
     * @public
     */
    RewindCmqQueue(req, cb) {
        let resp = new RewindCmqQueueResponse();
        this.request("RewindCmqQueue", req, resp, cb);
    }

    /**
     * 获取集群列表
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
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
     * 查询cmq全量队列
     * @param {DescribeCmqQueuesRequest} req
     * @param {function(string, DescribeCmqQueuesResponse):void} cb
     * @public
     */
    DescribeCmqQueues(req, cb) {
        let resp = new DescribeCmqQueuesResponse();
        this.request("DescribeCmqQueues", req, resp, cb);
    }

    /**
     * 发送cmq主题消息
     * @param {PublishCmqMsgRequest} req
     * @param {function(string, PublishCmqMsgResponse):void} cb
     * @public
     */
    PublishCmqMsg(req, cb) {
        let resp = new PublishCmqMsgResponse();
        this.request("PublishCmqMsg", req, resp, cb);
    }

    /**
     * 获取租户下命名空间列表
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
    }

    /**
     * 获取集群的详细信息
     * @param {DescribeClusterDetailRequest} req
     * @param {function(string, DescribeClusterDetailResponse):void} cb
     * @public
     */
    DescribeClusterDetail(req, cb) {
        let resp = new DescribeClusterDetailResponse();
        this.request("DescribeClusterDetail", req, resp, cb);
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
     * 删除cmq订阅
     * @param {DeleteCmqSubscribeRequest} req
     * @param {function(string, DeleteCmqSubscribeResponse):void} cb
     * @public
     */
    DeleteCmqSubscribe(req, cb) {
        let resp = new DeleteCmqSubscribeResponse();
        this.request("DeleteCmqSubscribe", req, resp, cb);
    }

    /**
     * 查询cmq主题详情
     * @param {DescribeCmqTopicDetailRequest} req
     * @param {function(string, DescribeCmqTopicDetailResponse):void} cb
     * @public
     */
    DescribeCmqTopicDetail(req, cb) {
        let resp = new DescribeCmqTopicDetailResponse();
        this.request("DescribeCmqTopicDetail", req, resp, cb);
    }

    /**
     * 用于在用户账户下创建消息队列 Tdmq 命名空间
     * @param {CreateEnvironmentRequest} req
     * @param {function(string, CreateEnvironmentResponse):void} cb
     * @public
     */
    CreateEnvironment(req, cb) {
        let resp = new CreateEnvironmentResponse();
        this.request("CreateEnvironment", req, resp, cb);
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
     * 清空订阅者消息标签
     * @param {ClearCmqSubscriptionFilterTagsRequest} req
     * @param {function(string, ClearCmqSubscriptionFilterTagsResponse):void} cb
     * @public
     */
    ClearCmqSubscriptionFilterTags(req, cb) {
        let resp = new ClearCmqSubscriptionFilterTagsResponse();
        this.request("ClearCmqSubscriptionFilterTags", req, resp, cb);
    }

    /**
     * 发送单条消息
     * @param {SendMessagesRequest} req
     * @param {function(string, SendMessagesResponse):void} cb
     * @public
     */
    SendMessages(req, cb) {
        let resp = new SendMessagesResponse();
        this.request("SendMessages", req, resp, cb);
    }

    /**
     * 发送cmq消息
     * @param {SendCmqMsgRequest} req
     * @param {function(string, SendCmqMsgResponse):void} cb
     * @public
     */
    SendCmqMsg(req, cb) {
        let resp = new SendCmqMsgResponse();
        this.request("SendCmqMsg", req, resp, cb);
    }

    /**
     * 更新集群信息
     * @param {ModifyClusterRequest} req
     * @param {function(string, ModifyClusterResponse):void} cb
     * @public
     */
    ModifyCluster(req, cb) {
        let resp = new ModifyClusterResponse();
        this.request("ModifyCluster", req, resp, cb);
    }

    /**
     * 修改指定命名空间的属性值
     * @param {ModifyEnvironmentAttributesRequest} req
     * @param {function(string, ModifyEnvironmentAttributesResponse):void} cb
     * @public
     */
    ModifyEnvironmentAttributes(req, cb) {
        let resp = new ModifyEnvironmentAttributesResponse();
        this.request("ModifyEnvironmentAttributes", req, resp, cb);
    }

    /**
     * 修改cmq订阅属性
     * @param {ModifyCmqSubscriptionAttributeRequest} req
     * @param {function(string, ModifyCmqSubscriptionAttributeResponse):void} cb
     * @public
     */
    ModifyCmqSubscriptionAttribute(req, cb) {
        let resp = new ModifyCmqSubscriptionAttributeResponse();
        this.request("ModifyCmqSubscriptionAttribute", req, resp, cb);
    }

    /**
     * 解绑cmq死信队列
     * @param {UnbindCmqDeadLetterRequest} req
     * @param {function(string, UnbindCmqDeadLetterResponse):void} cb
     * @public
     */
    UnbindCmqDeadLetter(req, cb) {
        let resp = new UnbindCmqDeadLetterResponse();
        this.request("UnbindCmqDeadLetter", req, resp, cb);
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
     * 批量发送消息
     * @param {SendBatchMessagesRequest} req
     * @param {function(string, SendBatchMessagesResponse):void} cb
     * @public
     */
    SendBatchMessages(req, cb) {
        let resp = new SendBatchMessagesResponse();
        this.request("SendBatchMessages", req, resp, cb);
    }

    /**
     * 获取指定命名空间的属性
     * @param {DescribeEnvironmentAttributesRequest} req
     * @param {function(string, DescribeEnvironmentAttributesResponse):void} cb
     * @public
     */
    DescribeEnvironmentAttributes(req, cb) {
        let resp = new DescribeEnvironmentAttributesResponse();
        this.request("DescribeEnvironmentAttributes", req, resp, cb);
    }

    /**
     * 创建cmq订阅接口
     * @param {CreateCmqSubscribeRequest} req
     * @param {function(string, CreateCmqSubscribeResponse):void} cb
     * @public
     */
    CreateCmqSubscribe(req, cb) {
        let resp = new CreateCmqSubscribeResponse();
        this.request("CreateCmqSubscribe", req, resp, cb);
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

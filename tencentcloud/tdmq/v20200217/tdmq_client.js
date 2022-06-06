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
const DescribeRolesResponse = models.DescribeRolesResponse;
const DescribeAMQPRouteRelationsRequest = models.DescribeAMQPRouteRelationsRequest;
const CmqDeadLetterPolicy = models.CmqDeadLetterPolicy;
const DescribeNamespaceBundlesOptRequest = models.DescribeNamespaceBundlesOptRequest;
const RocketMQNamespace = models.RocketMQNamespace;
const DescribeSubscriptionsRequest = models.DescribeSubscriptionsRequest;
const CreateRocketMQGroupRequest = models.CreateRocketMQGroupRequest;
const ModifyEnvironmentAttributesRequest = models.ModifyEnvironmentAttributesRequest;
const DeleteClusterResponse = models.DeleteClusterResponse;
const SendBatchMessagesResponse = models.SendBatchMessagesResponse;
const ModifyCmqSubscriptionAttributeResponse = models.ModifyCmqSubscriptionAttributeResponse;
const CreateCmqTopicRequest = models.CreateCmqTopicRequest;
const CreateAMQPExchangeRequest = models.CreateAMQPExchangeRequest;
const DescribeRocketMQNamespacesResponse = models.DescribeRocketMQNamespacesResponse;
const ResetRocketMQConsumerOffSetResponse = models.ResetRocketMQConsumerOffSetResponse;
const DescribeBindClustersResponse = models.DescribeBindClustersResponse;
const BindCluster = models.BindCluster;
const ModifyClusterResponse = models.ModifyClusterResponse;
const RocketMQClusterRecentStats = models.RocketMQClusterRecentStats;
const DescribeCmqQueuesResponse = models.DescribeCmqQueuesResponse;
const DescribeAllTenantsResponse = models.DescribeAllTenantsResponse;
const DescribeNamespaceBundlesOptResponse = models.DescribeNamespaceBundlesOptResponse;
const DescribeBindVpcsResponse = models.DescribeBindVpcsResponse;
const RewindCmqQueueResponse = models.RewindCmqQueueResponse;
const DeleteClusterRequest = models.DeleteClusterRequest;
const CmqSubscription = models.CmqSubscription;
const ModifyAMQPVHostResponse = models.ModifyAMQPVHostResponse;
const DescribeAMQPClusterResponse = models.DescribeAMQPClusterResponse;
const CreateAMQPClusterRequest = models.CreateAMQPClusterRequest;
const DeleteRocketMQGroupRequest = models.DeleteRocketMQGroupRequest;
const RocketMQGroup = models.RocketMQGroup;
const AMQPClusterRecentStats = models.AMQPClusterRecentStats;
const DeleteCmqTopicResponse = models.DeleteCmqTopicResponse;
const ModifyAMQPVHostRequest = models.ModifyAMQPVHostRequest;
const CreateSubscriptionRequest = models.CreateSubscriptionRequest;
const CreateRocketMQNamespaceRequest = models.CreateRocketMQNamespaceRequest;
const Topic = models.Topic;
const DescribeCmqTopicDetailResponse = models.DescribeCmqTopicDetailResponse;
const Environment = models.Environment;
const CmqQueue = models.CmqQueue;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const CreateSubscriptionResponse = models.CreateSubscriptionResponse;
const DeleteAMQPQueueResponse = models.DeleteAMQPQueueResponse;
const ModifyCmqTopicAttributeResponse = models.ModifyCmqTopicAttributeResponse;
const DescribeCmqSubscriptionDetailRequest = models.DescribeCmqSubscriptionDetailRequest;
const DescribePublisherSummaryResponse = models.DescribePublisherSummaryResponse;
const DescribeAMQPVHostsResponse = models.DescribeAMQPVHostsResponse;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const DescribeRocketMQNamespacesRequest = models.DescribeRocketMQNamespacesRequest;
const DeleteAMQPClusterResponse = models.DeleteAMQPClusterResponse;
const DescribeAMQPClusterRequest = models.DescribeAMQPClusterRequest;
const DescribeRocketMQTopicsRequest = models.DescribeRocketMQTopicsRequest;
const ModifyRocketMQClusterResponse = models.ModifyRocketMQClusterResponse;
const Subscription = models.Subscription;
const DescribeCmqQueueDetailResponse = models.DescribeCmqQueueDetailResponse;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;
const CreateAMQPQueueRequest = models.CreateAMQPQueueRequest;
const ClearCmqQueueRequest = models.ClearCmqQueueRequest;
const DescribeClustersRequest = models.DescribeClustersRequest;
const Publisher = models.Publisher;
const RocketMQTopic = models.RocketMQTopic;
const DescribeRocketMQClusterResponse = models.DescribeRocketMQClusterResponse;
const CreateAMQPVHostResponse = models.CreateAMQPVHostResponse;
const DescribeCmqSubscriptionDetailResponse = models.DescribeCmqSubscriptionDetailResponse;
const VpcBindRecord = models.VpcBindRecord;
const RewindCmqQueueRequest = models.RewindCmqQueueRequest;
const DescribeAMQPVHostsRequest = models.DescribeAMQPVHostsRequest;
const ModifyClusterRequest = models.ModifyClusterRequest;
const DescribeAMQPQueuesRequest = models.DescribeAMQPQueuesRequest;
const ModifyRocketMQClusterRequest = models.ModifyRocketMQClusterRequest;
const AMQPVHost = models.AMQPVHost;
const ModifyAMQPExchangeResponse = models.ModifyAMQPExchangeResponse;
const DescribeAMQPExchangesResponse = models.DescribeAMQPExchangesResponse;
const AcknowledgeMessageRequest = models.AcknowledgeMessageRequest;
const DeleteAMQPClusterRequest = models.DeleteAMQPClusterRequest;
const DescribeTopicsResponse = models.DescribeTopicsResponse;
const PublishCmqMsgResponse = models.PublishCmqMsgResponse;
const DescribePublishersRequest = models.DescribePublishersRequest;
const CreateRocketMQClusterRequest = models.CreateRocketMQClusterRequest;
const DeleteAMQPVHostRequest = models.DeleteAMQPVHostRequest;
const AcknowledgeMessageResponse = models.AcknowledgeMessageResponse;
const ModifyCmqQueueAttributeResponse = models.ModifyCmqQueueAttributeResponse;
const DeleteEnvironmentRolesResponse = models.DeleteEnvironmentRolesResponse;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const ModifyRoleResponse = models.ModifyRoleResponse;
const ModifyAMQPQueueRequest = models.ModifyAMQPQueueRequest;
const Tag = models.Tag;
const DeleteCmqQueueResponse = models.DeleteCmqQueueResponse;
const DescribeRocketMQClusterRequest = models.DescribeRocketMQClusterRequest;
const DeleteRocketMQTopicResponse = models.DeleteRocketMQTopicResponse;
const ModifyCmqTopicAttributeRequest = models.ModifyCmqTopicAttributeRequest;
const DeleteRolesRequest = models.DeleteRolesRequest;
const ModifyRocketMQTopicResponse = models.ModifyRocketMQTopicResponse;
const CreateCmqSubscribeResponse = models.CreateCmqSubscribeResponse;
const DescribeCmqDeadLetterSourceQueuesRequest = models.DescribeCmqDeadLetterSourceQueuesRequest;
const DescribeSubscriptionsResponse = models.DescribeSubscriptionsResponse;
const ModifyRoleRequest = models.ModifyRoleRequest;
const SendMessagesResponse = models.SendMessagesResponse;
const ReceiveMessageRequest = models.ReceiveMessageRequest;
const CreateTopicRequest = models.CreateTopicRequest;
const DescribeTopicsRequest = models.DescribeTopicsRequest;
const DeleteEnvironmentsResponse = models.DeleteEnvironmentsResponse;
const ModifyAMQPClusterRequest = models.ModifyAMQPClusterRequest;
const DescribeEnvironmentRolesResponse = models.DescribeEnvironmentRolesResponse;
const DescribeAMQPCreateQuotaResponse = models.DescribeAMQPCreateQuotaResponse;
const ModifyRocketMQGroupRequest = models.ModifyRocketMQGroupRequest;
const FilterSubscription = models.FilterSubscription;
const DescribeCmqTopicsResponse = models.DescribeCmqTopicsResponse;
const DescribeCmqTopicDetailRequest = models.DescribeCmqTopicDetailRequest;
const CmqTopic = models.CmqTopic;
const UnbindCmqDeadLetterResponse = models.UnbindCmqDeadLetterResponse;
const ModifyRocketMQNamespaceResponse = models.ModifyRocketMQNamespaceResponse;
const AMQPRouteRelation = models.AMQPRouteRelation;
const DeleteAMQPQueueRequest = models.DeleteAMQPQueueRequest;
const DeleteEnvironmentsRequest = models.DeleteEnvironmentsRequest;
const DescribeRocketMQClustersRequest = models.DescribeRocketMQClustersRequest;
const ReceiveMessageResponse = models.ReceiveMessageResponse;
const DescribeBindVpcsRequest = models.DescribeBindVpcsRequest;
const DescribeClustersResponse = models.DescribeClustersResponse;
const DeleteRocketMQNamespaceResponse = models.DeleteRocketMQNamespaceResponse;
const ClearCmqSubscriptionFilterTagsRequest = models.ClearCmqSubscriptionFilterTagsRequest;
const TopicRecord = models.TopicRecord;
const CreateRocketMQGroupResponse = models.CreateRocketMQGroupResponse;
const CreateEnvironmentRoleRequest = models.CreateEnvironmentRoleRequest;
const DescribeEnvironmentRolesRequest = models.DescribeEnvironmentRolesRequest;
const DeleteRolesResponse = models.DeleteRolesResponse;
const SendMsgResponse = models.SendMsgResponse;
const ModifyRocketMQTopicRequest = models.ModifyRocketMQTopicRequest;
const RocketMQClusterInfo = models.RocketMQClusterInfo;
const DescribeRocketMQTopicsResponse = models.DescribeRocketMQTopicsResponse;
const CreateAMQPVHostRequest = models.CreateAMQPVHostRequest;
const RocketMQClusterDetail = models.RocketMQClusterDetail;
const DeleteRocketMQGroupResponse = models.DeleteRocketMQGroupResponse;
const CreateCmqQueueResponse = models.CreateCmqQueueResponse;
const PartitionsTopic = models.PartitionsTopic;
const DescribeRocketMQGroupsResponse = models.DescribeRocketMQGroupsResponse;
const ResetMsgSubOffsetByTimestampResponse = models.ResetMsgSubOffsetByTimestampResponse;
const CreateClusterResponse = models.CreateClusterResponse;
const DeleteAMQPExchangeResponse = models.DeleteAMQPExchangeResponse;
const DeleteRocketMQNamespaceRequest = models.DeleteRocketMQNamespaceRequest;
const DescribeRolesRequest = models.DescribeRolesRequest;
const CreateAMQPQueueResponse = models.CreateAMQPQueueResponse;
const CreateClusterRequest = models.CreateClusterRequest;
const DescribeAMQPClustersRequest = models.DescribeAMQPClustersRequest;
const CreateAMQPRouteRelationResponse = models.CreateAMQPRouteRelationResponse;
const CreateTopicResponse = models.CreateTopicResponse;
const DescribeCmqQueuesRequest = models.DescribeCmqQueuesRequest;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const ModifyCmqSubscriptionAttributeRequest = models.ModifyCmqSubscriptionAttributeRequest;
const ModifyTopicResponse = models.ModifyTopicResponse;
const AMQPClusterInfo = models.AMQPClusterInfo;
const DescribeAMQPRouteRelationsResponse = models.DescribeAMQPRouteRelationsResponse;
const DeleteTopicsResponse = models.DeleteTopicsResponse;
const CreateAMQPClusterResponse = models.CreateAMQPClusterResponse;
const DeleteAMQPExchangeRequest = models.DeleteAMQPExchangeRequest;
const DeleteRocketMQClusterResponse = models.DeleteRocketMQClusterResponse;
const CreateCmqTopicResponse = models.CreateCmqTopicResponse;
const CmqDeadLetterSource = models.CmqDeadLetterSource;
const ClearCmqSubscriptionFilterTagsResponse = models.ClearCmqSubscriptionFilterTagsResponse;
const DescribeCmqTopicsRequest = models.DescribeCmqTopicsRequest;
const Filter = models.Filter;
const AMQPExchange = models.AMQPExchange;
const DeleteTopicsRequest = models.DeleteTopicsRequest;
const CmqTransactionPolicy = models.CmqTransactionPolicy;
const BundleSetOpt = models.BundleSetOpt;
const ModifyTopicRequest = models.ModifyTopicRequest;
const ResetMsgSubOffsetByTimestampRequest = models.ResetMsgSubOffsetByTimestampRequest;
const CreateEnvironmentRoleResponse = models.CreateEnvironmentRoleResponse;
const Consumer = models.Consumer;
const CreateCmqSubscribeRequest = models.CreateCmqSubscribeRequest;
const DeleteCmqSubscribeRequest = models.DeleteCmqSubscribeRequest;
const DescribeAMQPClustersResponse = models.DescribeAMQPClustersResponse;
const RocketMQClusterConfig = models.RocketMQClusterConfig;
const DescribeCmqDeadLetterSourceQueuesResponse = models.DescribeCmqDeadLetterSourceQueuesResponse;
const DeleteSubscriptionsResponse = models.DeleteSubscriptionsResponse;
const DeleteRocketMQTopicRequest = models.DeleteRocketMQTopicRequest;
const ConsumersSchedule = models.ConsumersSchedule;
const Cluster = models.Cluster;
const SubscriptionTopic = models.SubscriptionTopic;
const RetentionPolicy = models.RetentionPolicy;
const CreateRocketMQClusterResponse = models.CreateRocketMQClusterResponse;
const DescribeAMQPCreateQuotaRequest = models.DescribeAMQPCreateQuotaRequest;
const AMQPQueueDetail = models.AMQPQueueDetail;
const DescribePublishersResponse = models.DescribePublishersResponse;
const DeleteAMQPRouteRelationResponse = models.DeleteAMQPRouteRelationResponse;
const SendMsgRequest = models.SendMsgRequest;
const ResetRocketMQConsumerOffSetRequest = models.ResetRocketMQConsumerOffSetRequest;
const DescribeCmqQueueDetailRequest = models.DescribeCmqQueueDetailRequest;
const DescribeAMQPQueuesResponse = models.DescribeAMQPQueuesResponse;
const CreateRocketMQTopicRequest = models.CreateRocketMQTopicRequest;
const CreateRoleResponse = models.CreateRoleResponse;
const DeleteRocketMQClusterRequest = models.DeleteRocketMQClusterRequest;
const InternalTenant = models.InternalTenant;
const DescribeEnvironmentAttributesRequest = models.DescribeEnvironmentAttributesRequest;
const DeleteEnvironmentRolesRequest = models.DeleteEnvironmentRolesRequest;
const ClearCmqQueueResponse = models.ClearCmqQueueResponse;
const CreateAMQPExchangeResponse = models.CreateAMQPExchangeResponse;
const DescribeNodeHealthOptRequest = models.DescribeNodeHealthOptRequest;
const DescribeBindClustersRequest = models.DescribeBindClustersRequest;
const CreateRocketMQTopicResponse = models.CreateRocketMQTopicResponse;
const ModifyEnvironmentAttributesResponse = models.ModifyEnvironmentAttributesResponse;
const EnvironmentRole = models.EnvironmentRole;
const ModifyAMQPQueueResponse = models.ModifyAMQPQueueResponse;
const CreateCmqQueueRequest = models.CreateCmqQueueRequest;
const ModifyEnvironmentRoleResponse = models.ModifyEnvironmentRoleResponse;
const DeleteCmqQueueRequest = models.DeleteCmqQueueRequest;
const DescribeRocketMQGroupsRequest = models.DescribeRocketMQGroupsRequest;
const DescribeRocketMQClustersResponse = models.DescribeRocketMQClustersResponse;
const CreateRoleRequest = models.CreateRoleRequest;
const ModifyEnvironmentRoleRequest = models.ModifyEnvironmentRoleRequest;
const DescribeEnvironmentAttributesResponse = models.DescribeEnvironmentAttributesResponse;
const Role = models.Role;
const ModifyAMQPClusterResponse = models.ModifyAMQPClusterResponse;
const Sort = models.Sort;
const AMQPClusterConfig = models.AMQPClusterConfig;
const DescribeAMQPExchangesRequest = models.DescribeAMQPExchangesRequest;
const CreateRocketMQNamespaceResponse = models.CreateRocketMQNamespaceResponse;
const ModifyAMQPExchangeRequest = models.ModifyAMQPExchangeRequest;
const SendBatchMessagesRequest = models.SendBatchMessagesRequest;
const DeleteCmqTopicRequest = models.DeleteCmqTopicRequest;
const DeleteAMQPRouteRelationRequest = models.DeleteAMQPRouteRelationRequest;
const SendCmqMsgResponse = models.SendCmqMsgResponse;
const DescribeNodeHealthOptResponse = models.DescribeNodeHealthOptResponse;
const PublishCmqMsgRequest = models.PublishCmqMsgRequest;
const UnbindCmqDeadLetterRequest = models.UnbindCmqDeadLetterRequest;
const CreateAMQPRouteRelationRequest = models.CreateAMQPRouteRelationRequest;
const DeleteCmqSubscribeResponse = models.DeleteCmqSubscribeResponse;
const DescribePublisherSummaryRequest = models.DescribePublisherSummaryRequest;
const DeleteSubscriptionsRequest = models.DeleteSubscriptionsRequest;
const SendCmqMsgRequest = models.SendCmqMsgRequest;
const ModifyCmqQueueAttributeRequest = models.ModifyCmqQueueAttributeRequest;
const ModifyRocketMQGroupResponse = models.ModifyRocketMQGroupResponse;
const AMQPClusterDetail = models.AMQPClusterDetail;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const SendMessagesRequest = models.SendMessagesRequest;
const ModifyRocketMQNamespaceRequest = models.ModifyRocketMQNamespaceRequest;
const DeleteAMQPVHostResponse = models.DeleteAMQPVHostResponse;
const DescribeAllTenantsRequest = models.DescribeAllTenantsRequest;


/**
 * tdmq client
 * @class
 */
class TdmqClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tdmq.tencentcloudapi.com", "2020-02-17", credential, region, profile);
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
     * 获取RocketMQ命名空间列表
     * @param {DescribeRocketMQNamespacesRequest} req
     * @param {function(string, DescribeRocketMQNamespacesResponse):void} cb
     * @public
     */
    DescribeRocketMQNamespaces(req, cb) {
        let resp = new DescribeRocketMQNamespacesResponse();
        this.request("DescribeRocketMQNamespaces", req, resp, cb);
    }

    /**
     * 更新Amqp集群信息
     * @param {ModifyAMQPClusterRequest} req
     * @param {function(string, ModifyAMQPClusterResponse):void} cb
     * @public
     */
    ModifyAMQPCluster(req, cb) {
        let resp = new ModifyAMQPClusterResponse();
        this.request("ModifyAMQPCluster", req, resp, cb);
    }

    /**
     * 删除Amqp交换机
     * @param {DeleteAMQPExchangeRequest} req
     * @param {function(string, DeleteAMQPExchangeResponse):void} cb
     * @public
     */
    DeleteAMQPExchange(req, cb) {
        let resp = new DeleteAMQPExchangeResponse();
        this.request("DeleteAMQPExchange", req, resp, cb);
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
     * 创建Amqp Vhost
     * @param {CreateAMQPVHostRequest} req
     * @param {function(string, CreateAMQPVHostResponse):void} cb
     * @public
     */
    CreateAMQPVHost(req, cb) {
        let resp = new CreateAMQPVHostResponse();
        this.request("CreateAMQPVHost", req, resp, cb);
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
     * 删除RocketMQ消费组
     * @param {DeleteRocketMQGroupRequest} req
     * @param {function(string, DeleteRocketMQGroupResponse):void} cb
     * @public
     */
    DeleteRocketMQGroup(req, cb) {
        let resp = new DeleteRocketMQGroupResponse();
        this.request("DeleteRocketMQGroup", req, resp, cb);
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
     * 获取单个Amqp集群信息
     * @param {DescribeAMQPClusterRequest} req
     * @param {function(string, DescribeAMQPClusterResponse):void} cb
     * @public
     */
    DescribeAMQPCluster(req, cb) {
        let resp = new DescribeAMQPClusterResponse();
        this.request("DescribeAMQPCluster", req, resp, cb);
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
     * 修改环境角色授权。
     * @param {ModifyEnvironmentRoleRequest} req
     * @param {function(string, ModifyEnvironmentRoleResponse):void} cb
     * @public
     */
    ModifyEnvironmentRole(req, cb) {
        let resp = new ModifyEnvironmentRoleResponse();
        this.request("ModifyEnvironmentRole", req, resp, cb);
    }

    /**
     * 根据提供的 MessageID 确认指定 topic 中的消息
     * @param {AcknowledgeMessageRequest} req
     * @param {function(string, AcknowledgeMessageResponse):void} cb
     * @public
     */
    AcknowledgeMessage(req, cb) {
        let resp = new AcknowledgeMessageResponse();
        this.request("AcknowledgeMessage", req, resp, cb);
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
     * 更新RocketMQ主题信息
     * @param {ModifyRocketMQTopicRequest} req
     * @param {function(string, ModifyRocketMQTopicResponse):void} cb
     * @public
     */
    ModifyRocketMQTopic(req, cb) {
        let resp = new ModifyRocketMQTopicResponse();
        this.request("ModifyRocketMQTopic", req, resp, cb);
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
     * 获取消息生产概览信息
     * @param {DescribePublisherSummaryRequest} req
     * @param {function(string, DescribePublisherSummaryResponse):void} cb
     * @public
     */
    DescribePublisherSummary(req, cb) {
        let resp = new DescribePublisherSummaryResponse();
        this.request("DescribePublisherSummary", req, resp, cb);
    }

    /**
     * 删除RocketMQ命名空间
     * @param {DeleteRocketMQNamespaceRequest} req
     * @param {function(string, DeleteRocketMQNamespaceResponse):void} cb
     * @public
     */
    DeleteRocketMQNamespace(req, cb) {
        let resp = new DeleteRocketMQNamespaceResponse();
        this.request("DeleteRocketMQNamespace", req, resp, cb);
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
     * 更新RocketMQ消费组信息
     * @param {ModifyRocketMQGroupRequest} req
     * @param {function(string, ModifyRocketMQGroupResponse):void} cb
     * @public
     */
    ModifyRocketMQGroup(req, cb) {
        let resp = new ModifyRocketMQGroupResponse();
        this.request("ModifyRocketMQGroup", req, resp, cb);
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
     * 创建AMQP集群
     * @param {CreateAMQPClusterRequest} req
     * @param {function(string, CreateAMQPClusterResponse):void} cb
     * @public
     */
    CreateAMQPCluster(req, cb) {
        let resp = new CreateAMQPClusterResponse();
        this.request("CreateAMQPCluster", req, resp, cb);
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
     * 获取Amqp Vhost 列表
     * @param {DescribeAMQPVHostsRequest} req
     * @param {function(string, DescribeAMQPVHostsResponse):void} cb
     * @public
     */
    DescribeAMQPVHosts(req, cb) {
        let resp = new DescribeAMQPVHostsResponse();
        this.request("DescribeAMQPVHosts", req, resp, cb);
    }

    /**
     * 更新Amqp队列
     * @param {ModifyAMQPQueueRequest} req
     * @param {function(string, ModifyAMQPQueueResponse):void} cb
     * @public
     */
    ModifyAMQPQueue(req, cb) {
        let resp = new ModifyAMQPQueueResponse();
        this.request("ModifyAMQPQueue", req, resp, cb);
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
     * 重置指定Group的消费位点到指定时间戳
     * @param {ResetRocketMQConsumerOffSetRequest} req
     * @param {function(string, ResetRocketMQConsumerOffSetResponse):void} cb
     * @public
     */
    ResetRocketMQConsumerOffSet(req, cb) {
        let resp = new ResetRocketMQConsumerOffSetResponse();
        this.request("ResetRocketMQConsumerOffSet", req, resp, cb);
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
     * 删除Amqp队列
     * @param {DeleteAMQPQueueRequest} req
     * @param {function(string, DeleteAMQPQueueResponse):void} cb
     * @public
     */
    DeleteAMQPQueue(req, cb) {
        let resp = new DeleteAMQPQueueResponse();
        this.request("DeleteAMQPQueue", req, resp, cb);
    }

    /**
     * 更新RocketMQ集群信息
     * @param {ModifyRocketMQClusterRequest} req
     * @param {function(string, ModifyRocketMQClusterResponse):void} cb
     * @public
     */
    ModifyRocketMQCluster(req, cb) {
        let resp = new ModifyRocketMQClusterResponse();
        this.request("ModifyRocketMQCluster", req, resp, cb);
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
     * 删除AMQP集群
     * @param {DeleteAMQPClusterRequest} req
     * @param {function(string, DeleteAMQPClusterResponse):void} cb
     * @public
     */
    DeleteAMQPCluster(req, cb) {
        let resp = new DeleteAMQPClusterResponse();
        this.request("DeleteAMQPCluster", req, resp, cb);
    }

    /**
     * 获取单个RocketMQ集群信息
     * @param {DescribeRocketMQClusterRequest} req
     * @param {function(string, DescribeRocketMQClusterResponse):void} cb
     * @public
     */
    DescribeRocketMQCluster(req, cb) {
        let resp = new DescribeRocketMQClusterResponse();
        this.request("DescribeRocketMQCluster", req, resp, cb);
    }

    /**
     * 删除环境角色授权。
     * @param {DeleteEnvironmentRolesRequest} req
     * @param {function(string, DeleteEnvironmentRolesResponse):void} cb
     * @public
     */
    DeleteEnvironmentRoles(req, cb) {
        let resp = new DeleteEnvironmentRolesResponse();
        this.request("DeleteEnvironmentRoles", req, resp, cb);
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
     * 获取用户的配额，如Queue容量，Exchange容量，Vhost容量，单Vhost Tps数,剩余可创建集群数
     * @param {DescribeAMQPCreateQuotaRequest} req
     * @param {function(string, DescribeAMQPCreateQuotaResponse):void} cb
     * @public
     */
    DescribeAMQPCreateQuota(req, cb) {
        let resp = new DescribeAMQPCreateQuotaResponse();
        this.request("DescribeAMQPCreateQuota", req, resp, cb);
    }

    /**
     * 删除RocketMQ主题
     * @param {DeleteRocketMQTopicRequest} req
     * @param {function(string, DeleteRocketMQTopicResponse):void} cb
     * @public
     */
    DeleteRocketMQTopic(req, cb) {
        let resp = new DeleteRocketMQTopicResponse();
        this.request("DeleteRocketMQTopic", req, resp, cb);
    }

    /**
     * 创建AMQP Exchange
     * @param {CreateAMQPExchangeRequest} req
     * @param {function(string, CreateAMQPExchangeResponse):void} cb
     * @public
     */
    CreateAMQPExchange(req, cb) {
        let resp = new CreateAMQPExchangeResponse();
        this.request("CreateAMQPExchange", req, resp, cb);
    }

    /**
     * 创建AMQP路由关系
     * @param {CreateAMQPRouteRelationRequest} req
     * @param {function(string, CreateAMQPRouteRelationResponse):void} cb
     * @public
     */
    CreateAMQPRouteRelation(req, cb) {
        let resp = new CreateAMQPRouteRelationResponse();
        this.request("CreateAMQPRouteRelation", req, resp, cb);
    }

    /**
     * 获取Amqp路由关系列表
     * @param {DescribeAMQPRouteRelationsRequest} req
     * @param {function(string, DescribeAMQPRouteRelationsResponse):void} cb
     * @public
     */
    DescribeAMQPRouteRelations(req, cb) {
        let resp = new DescribeAMQPRouteRelationsResponse();
        this.request("DescribeAMQPRouteRelations", req, resp, cb);
    }

    /**
     * 获取amqp集群列表
     * @param {DescribeAMQPClustersRequest} req
     * @param {function(string, DescribeAMQPClustersResponse):void} cb
     * @public
     */
    DescribeAMQPClusters(req, cb) {
        let resp = new DescribeAMQPClustersResponse();
        this.request("DescribeAMQPClusters", req, resp, cb);
    }

    /**
     * 创建AMQP队列
     * @param {CreateAMQPQueueRequest} req
     * @param {function(string, CreateAMQPQueueResponse):void} cb
     * @public
     */
    CreateAMQPQueue(req, cb) {
        let resp = new CreateAMQPQueueResponse();
        this.request("CreateAMQPQueue", req, resp, cb);
    }

    /**
     * 更新Vhost
     * @param {ModifyAMQPVHostRequest} req
     * @param {function(string, ModifyAMQPVHostResponse):void} cb
     * @public
     */
    ModifyAMQPVHost(req, cb) {
        let resp = new ModifyAMQPVHostResponse();
        this.request("ModifyAMQPVHost", req, resp, cb);
    }

    /**
     * 获取RocketMQ消费组列表
     * @param {DescribeRocketMQGroupsRequest} req
     * @param {function(string, DescribeRocketMQGroupsResponse):void} cb
     * @public
     */
    DescribeRocketMQGroups(req, cb) {
        let resp = new DescribeRocketMQGroupsResponse();
        this.request("DescribeRocketMQGroups", req, resp, cb);
    }

    /**
     * 获取Amqp队列列表
     * @param {DescribeAMQPQueuesRequest} req
     * @param {function(string, DescribeAMQPQueuesResponse):void} cb
     * @public
     */
    DescribeAMQPQueues(req, cb) {
        let resp = new DescribeAMQPQueuesResponse();
        this.request("DescribeAMQPQueues", req, resp, cb);
    }

    /**
     * 删除RocketMQ集群
     * @param {DeleteRocketMQClusterRequest} req
     * @param {function(string, DeleteRocketMQClusterResponse):void} cb
     * @public
     */
    DeleteRocketMQCluster(req, cb) {
        let resp = new DeleteRocketMQClusterResponse();
        this.request("DeleteRocketMQCluster", req, resp, cb);
    }

    /**
     * 删除Vhost
     * @param {DeleteAMQPVHostRequest} req
     * @param {function(string, DeleteAMQPVHostResponse):void} cb
     * @public
     */
    DeleteAMQPVHost(req, cb) {
        let resp = new DeleteAMQPVHostResponse();
        this.request("DeleteAMQPVHost", req, resp, cb);
    }

    /**
     * 删除角色，支持批量。
     * @param {DeleteRolesRequest} req
     * @param {function(string, DeleteRolesResponse):void} cb
     * @public
     */
    DeleteRoles(req, cb) {
        let resp = new DeleteRolesResponse();
        this.request("DeleteRoles", req, resp, cb);
    }

    /**
     * 获取AMQP Exchange列表
     * @param {DescribeAMQPExchangesRequest} req
     * @param {function(string, DescribeAMQPExchangesResponse):void} cb
     * @public
     */
    DescribeAMQPExchanges(req, cb) {
        let resp = new DescribeAMQPExchangesResponse();
        this.request("DescribeAMQPExchanges", req, resp, cb);
    }

    /**
     * 接收发送到指定 topic 中的消息
     * @param {ReceiveMessageRequest} req
     * @param {function(string, ReceiveMessageResponse):void} cb
     * @public
     */
    ReceiveMessage(req, cb) {
        let resp = new ReceiveMessageResponse();
        this.request("ReceiveMessage", req, resp, cb);
    }

    /**
     * 更新Amqp交换机
     * @param {ModifyAMQPExchangeRequest} req
     * @param {function(string, ModifyAMQPExchangeResponse):void} cb
     * @public
     */
    ModifyAMQPExchange(req, cb) {
        let resp = new ModifyAMQPExchangeResponse();
        this.request("ModifyAMQPExchange", req, resp, cb);
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
     * 获取角色列表
     * @param {DescribeRolesRequest} req
     * @param {function(string, DescribeRolesResponse):void} cb
     * @public
     */
    DescribeRoles(req, cb) {
        let resp = new DescribeRolesResponse();
        this.request("DescribeRoles", req, resp, cb);
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
     * 创建RocketMQ命名空间
     * @param {CreateRocketMQNamespaceRequest} req
     * @param {function(string, CreateRocketMQNamespaceResponse):void} cb
     * @public
     */
    CreateRocketMQNamespace(req, cb) {
        let resp = new CreateRocketMQNamespaceResponse();
        this.request("CreateRocketMQNamespace", req, resp, cb);
    }

    /**
     * 创建环境角色授权
     * @param {CreateEnvironmentRoleRequest} req
     * @param {function(string, CreateEnvironmentRoleResponse):void} cb
     * @public
     */
    CreateEnvironmentRole(req, cb) {
        let resp = new CreateEnvironmentRoleResponse();
        this.request("CreateEnvironmentRole", req, resp, cb);
    }

    /**
     * 获取RocketMQ主题列表
     * @param {DescribeRocketMQTopicsRequest} req
     * @param {function(string, DescribeRocketMQTopicsResponse):void} cb
     * @public
     */
    DescribeRocketMQTopics(req, cb) {
        let resp = new DescribeRocketMQTopicsResponse();
        this.request("DescribeRocketMQTopics", req, resp, cb);
    }

    /**
     * 获取RocketMQ集群列表
     * @param {DescribeRocketMQClustersRequest} req
     * @param {function(string, DescribeRocketMQClustersResponse):void} cb
     * @public
     */
    DescribeRocketMQClusters(req, cb) {
        let resp = new DescribeRocketMQClustersResponse();
        this.request("DescribeRocketMQClusters", req, resp, cb);
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
     * 删除Amqp路由关系
     * @param {DeleteAMQPRouteRelationRequest} req
     * @param {function(string, DeleteAMQPRouteRelationResponse):void} cb
     * @public
     */
    DeleteAMQPRouteRelation(req, cb) {
        let resp = new DeleteAMQPRouteRelationResponse();
        this.request("DeleteAMQPRouteRelation", req, resp, cb);
    }

    /**
     * 运营端获节点健康状态
     * @param {DescribeNodeHealthOptRequest} req
     * @param {function(string, DescribeNodeHealthOptResponse):void} cb
     * @public
     */
    DescribeNodeHealthOpt(req, cb) {
        let resp = new DescribeNodeHealthOptResponse();
        this.request("DescribeNodeHealthOpt", req, resp, cb);
    }

    /**
     * 创建角色
     * @param {CreateRoleRequest} req
     * @param {function(string, CreateRoleResponse):void} cb
     * @public
     */
    CreateRole(req, cb) {
        let resp = new CreateRoleResponse();
        this.request("CreateRole", req, resp, cb);
    }

    /**
     * 更新RocketMQ命名空间
     * @param {ModifyRocketMQNamespaceRequest} req
     * @param {function(string, ModifyRocketMQNamespaceResponse):void} cb
     * @public
     */
    ModifyRocketMQNamespace(req, cb) {
        let resp = new ModifyRocketMQNamespaceResponse();
        this.request("ModifyRocketMQNamespace", req, resp, cb);
    }

    /**
     * 批量发送消息

注意：TDMQ 批量发送消息的接口是在 TDMQ-HTTP 的服务侧将消息打包为一个 Batch，然后将该 Batch 在服务内部当作一次 TCP 请求发送出去。所以在使用过程中，用户还是按照单条消息发送的逻辑，每一条消息是一个独立的 HTTP 的请求，在 TDMQ-HTTP 的服务内部，会将多个 HTTP 的请求聚合为一个 Batch 发送到服务端。即，批量发送消息在使用上与发送单条消息是一致的，batch 的聚合是在 TDMQ-HTTP 的服务内部完成的。
     * @param {SendBatchMessagesRequest} req
     * @param {function(string, SendBatchMessagesResponse):void} cb
     * @public
     */
    SendBatchMessages(req, cb) {
        let resp = new SendBatchMessagesResponse();
        this.request("SendBatchMessages", req, resp, cb);
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
     * 获取生产者信息列表
     * @param {DescribePublishersRequest} req
     * @param {function(string, DescribePublishersResponse):void} cb
     * @public
     */
    DescribePublishers(req, cb) {
        let resp = new DescribePublishersResponse();
        this.request("DescribePublishers", req, resp, cb);
    }

    /**
     * 此接口用于创建一个RocketMQ集群
     * @param {CreateRocketMQClusterRequest} req
     * @param {function(string, CreateRocketMQClusterResponse):void} cb
     * @public
     */
    CreateRocketMQCluster(req, cb) {
        let resp = new CreateRocketMQClusterResponse();
        this.request("CreateRocketMQCluster", req, resp, cb);
    }

    /**
     * 创建RocketMQ主题
     * @param {CreateRocketMQTopicRequest} req
     * @param {function(string, CreateRocketMQTopicResponse):void} cb
     * @public
     */
    CreateRocketMQTopic(req, cb) {
        let resp = new CreateRocketMQTopicResponse();
        this.request("CreateRocketMQTopic", req, resp, cb);
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
     * 此接口仅用于测试发生消息，不能作为现网正式生产使用
     * @param {SendMsgRequest} req
     * @param {function(string, SendMsgResponse):void} cb
     * @public
     */
    SendMsg(req, cb) {
        let resp = new SendMsgResponse();
        this.request("SendMsg", req, resp, cb);
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
     * 创建RocketMQ消费组
     * @param {CreateRocketMQGroupRequest} req
     * @param {function(string, CreateRocketMQGroupResponse):void} cb
     * @public
     */
    CreateRocketMQGroup(req, cb) {
        let resp = new CreateRocketMQGroupResponse();
        this.request("CreateRocketMQGroup", req, resp, cb);
    }

    /**
     * 角色修改
     * @param {ModifyRoleRequest} req
     * @param {function(string, ModifyRoleResponse):void} cb
     * @public
     */
    ModifyRole(req, cb) {
        let resp = new ModifyRoleResponse();
        this.request("ModifyRole", req, resp, cb);
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
     * 获取某个租户的虚拟集群列表
     * @param {DescribeAllTenantsRequest} req
     * @param {function(string, DescribeAllTenantsResponse):void} cb
     * @public
     */
    DescribeAllTenants(req, cb) {
        let resp = new DescribeAllTenantsResponse();
        this.request("DescribeAllTenants", req, resp, cb);
    }

    /**
     * 运营端获取命名空间bundle列表
     * @param {DescribeNamespaceBundlesOptRequest} req
     * @param {function(string, DescribeNamespaceBundlesOptResponse):void} cb
     * @public
     */
    DescribeNamespaceBundlesOpt(req, cb) {
        let resp = new DescribeNamespaceBundlesOptResponse();
        this.request("DescribeNamespaceBundlesOpt", req, resp, cb);
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

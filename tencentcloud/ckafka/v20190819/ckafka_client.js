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
const TopicDetail = models.TopicDetail;
const DeleteAclRequest = models.DeleteAclRequest;
const GroupInfoMember = models.GroupInfoMember;
const BatchCreateAclRequest = models.BatchCreateAclRequest;
const DeleteUserRequest = models.DeleteUserRequest;
const PartitionOffset = models.PartitionOffset;
const DescribeACLRequest = models.DescribeACLRequest;
const BatchModifyTopicResultDTO = models.BatchModifyTopicResultDTO;
const DescribeTopicAttributesRequest = models.DescribeTopicAttributesRequest;
const DescribeInstanceAttributesRequest = models.DescribeInstanceAttributesRequest;
const ConsumerGroup = models.ConsumerGroup;
const Assignment = models.Assignment;
const AuthorizeTokenResponse = models.AuthorizeTokenResponse;
const DescribeConsumerGroupResponse = models.DescribeConsumerGroupResponse;
const CancelAuthorizationTokenResponse = models.CancelAuthorizationTokenResponse;
const CreateRouteRequest = models.CreateRouteRequest;
const DeleteTopicRequest = models.DeleteTopicRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const FetchMessageByOffsetResponse = models.FetchMessageByOffsetResponse;
const BatchModifyTopicAttributesResponse = models.BatchModifyTopicAttributesResponse;
const CreateInstancePreResp = models.CreateInstancePreResp;
const GroupInfoTopics = models.GroupInfoTopics;
const TopicResult = models.TopicResult;
const Region = models.Region;
const ModifyInstancePreRequest = models.ModifyInstancePreRequest;
const CreateTokenResponse = models.CreateTokenResponse;
const DescribeInstancesDetailResponse = models.DescribeInstancesDetailResponse;
const CreateInstancePreData = models.CreateInstancePreData;
const AclRule = models.AclRule;
const DescribeACLResponse = models.DescribeACLResponse;
const DynamicDiskConfig = models.DynamicDiskConfig;
const JgwOperateResponse = models.JgwOperateResponse;
const ZoneInfo = models.ZoneInfo;
const DescribeTopicSubscribeGroupResponse = models.DescribeTopicSubscribeGroupResponse;
const DescribeCkafkaZoneRequest = models.DescribeCkafkaZoneRequest;
const SaleInfo = models.SaleInfo;
const Topic = models.Topic;
const Tag = models.Tag;
const BatchModifyGroupOffsetsResponse = models.BatchModifyGroupOffsetsResponse;
const GroupResponse = models.GroupResponse;
const CreateTokenRequest = models.CreateTokenRequest;
const DeleteAclRuleRequest = models.DeleteAclRuleRequest;
const CreateConsumerResponse = models.CreateConsumerResponse;
const RouteResponse = models.RouteResponse;
const DescribeGroupResponse = models.DescribeGroupResponse;
const ModifyInstanceAttributesConfig = models.ModifyInstanceAttributesConfig;
const AuthorizeTokenRequest = models.AuthorizeTokenRequest;
const OperateResponseData = models.OperateResponseData;
const CreateUserResponse = models.CreateUserResponse;
const ModifyInstanceAttributesResponse = models.ModifyInstanceAttributesResponse;
const CreatePartitionResponse = models.CreatePartitionResponse;
const ClusterInfo = models.ClusterInfo;
const DeleteGroupRequest = models.DeleteGroupRequest;
const DeleteUserResponse = models.DeleteUserResponse;
const CreateAclRequest = models.CreateAclRequest;
const DescribeTopicSyncReplicaResponse = models.DescribeTopicSyncReplicaResponse;
const DescribeAppInfoRequest = models.DescribeAppInfoRequest;
const DeleteRouteResponse = models.DeleteRouteResponse;
const Partitions = models.Partitions;
const DescribeTopicResponse = models.DescribeTopicResponse;
const ConsumerGroupResponse = models.ConsumerGroupResponse;
const CreateTopicIpWhiteListResponse = models.CreateTopicIpWhiteListResponse;
const GroupOffsetTopic = models.GroupOffsetTopic;
const ModifyGroupOffsetsResponse = models.ModifyGroupOffsetsResponse;
const Partition = models.Partition;
const CreateAclResponse = models.CreateAclResponse;
const CreateTopicRequest = models.CreateTopicRequest;
const DeleteAclResponse = models.DeleteAclResponse;
const DynamicRetentionTime = models.DynamicRetentionTime;
const DescribeTopicSubscribeGroupRequest = models.DescribeTopicSubscribeGroupRequest;
const DeleteInstancePreResponse = models.DeleteInstancePreResponse;
const FetchMessageByOffsetRequest = models.FetchMessageByOffsetRequest;
const TopicInSyncReplicaInfo = models.TopicInSyncReplicaInfo;
const DescribeRegionRequest = models.DescribeRegionRequest;
const InstanceConfigDO = models.InstanceConfigDO;
const DeleteAclRuleResponse = models.DeleteAclRuleResponse;
const UserResponse = models.UserResponse;
const DescribeGroupInfoRequest = models.DescribeGroupInfoRequest;
const DescribeGroupInfoResponse = models.DescribeGroupInfoResponse;
const ModifyTopicAttributesResponse = models.ModifyTopicAttributesResponse;
const BatchContent = models.BatchContent;
const DeleteRouteTriggerTimeResponse = models.DeleteRouteTriggerTimeResponse;
const DescribeUserResponse = models.DescribeUserResponse;
const AppIdResponse = models.AppIdResponse;
const DescribeTopicRequest = models.DescribeTopicRequest;
const CreatePartitionRequest = models.CreatePartitionRequest;
const Group = models.Group;
const GroupInfoResponse = models.GroupInfoResponse;
const DescribeAppInfoResponse = models.DescribeAppInfoResponse;
const AclResponse = models.AclResponse;
const ZoneResponse = models.ZoneResponse;
const Instance = models.Instance;
const DescribeInstanceAttributesResponse = models.DescribeInstanceAttributesResponse;
const ModifyPasswordResponse = models.ModifyPasswordResponse;
const TopicDetailResponse = models.TopicDetailResponse;
const DeleteInstancePreRequest = models.DeleteInstancePreRequest;
const TopicSubscribeGroup = models.TopicSubscribeGroup;
const Config = models.Config;
const ModifyPasswordRequest = models.ModifyPasswordRequest;
const ModifyInstanceAttributesRequest = models.ModifyInstanceAttributesRequest;
const DescribeRegionResponse = models.DescribeRegionResponse;
const DescribeConsumerGroupRequest = models.DescribeConsumerGroupRequest;
const VipEntity = models.VipEntity;
const ConsumerGroupTopic = models.ConsumerGroupTopic;
const User = models.User;
const GroupOffsetPartition = models.GroupOffsetPartition;
const DescribeTopicAttributesResponse = models.DescribeTopicAttributesResponse;
const CancelAuthorizationTokenRequest = models.CancelAuthorizationTokenRequest;
const DeleteTopicResponse = models.DeleteTopicResponse;
const DeleteRouteTriggerTimeRequest = models.DeleteRouteTriggerTimeRequest;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const InstanceAttributesResponse = models.InstanceAttributesResponse;
const DescribeGroupRequest = models.DescribeGroupRequest;
const Filter = models.Filter;
const GroupOffsetResponse = models.GroupOffsetResponse;
const BatchCreateAclResponse = models.BatchCreateAclResponse;
const ModifyInstancePreResponse = models.ModifyInstancePreResponse;
const CreateUserRequest = models.CreateUserRequest;
const InstanceDetailResponse = models.InstanceDetailResponse;
const DeleteRouteRequest = models.DeleteRouteRequest;
const DeleteTopicIpWhiteListResponse = models.DeleteTopicIpWhiteListResponse;
const CreateInstancePreResponse = models.CreateInstancePreResponse;
const DescribeInstancesDetailRequest = models.DescribeInstancesDetailRequest;
const CreateConsumerRequest = models.CreateConsumerRequest;
const DescribeRouteRequest = models.DescribeRouteRequest;
const TopicInSyncReplicaResult = models.TopicInSyncReplicaResult;
const SendMessageResponse = models.SendMessageResponse;
const DescribeCkafkaZoneResponse = models.DescribeCkafkaZoneResponse;
const BatchModifyGroupOffsetsRequest = models.BatchModifyGroupOffsetsRequest;
const TopicAttributesResponse = models.TopicAttributesResponse;
const CreateRouteResponse = models.CreateRouteResponse;
const InstanceResponse = models.InstanceResponse;
const DescribeGroup = models.DescribeGroup;
const TopicPartitionDO = models.TopicPartitionDO;
const CreateTopicResp = models.CreateTopicResp;
const BatchModifyTopicInfo = models.BatchModifyTopicInfo;
const DescribeRouteResponse = models.DescribeRouteResponse;
const DescribeTopicDetailRequest = models.DescribeTopicDetailRequest;
const DescribeGroupOffsetsResponse = models.DescribeGroupOffsetsResponse;
const SendMessageRequest = models.SendMessageRequest;
const ConsumerRecord = models.ConsumerRecord;
const ModifyGroupOffsetsRequest = models.ModifyGroupOffsetsRequest;
const BatchModifyTopicAttributesRequest = models.BatchModifyTopicAttributesRequest;
const DeleteGroupResponse = models.DeleteGroupResponse;
const CreateTopicIpWhiteListRequest = models.CreateTopicIpWhiteListRequest;
const Route = models.Route;
const AclRuleInfo = models.AclRuleInfo;
const Acl = models.Acl;
const TopicRetentionTimeConfigRsp = models.TopicRetentionTimeConfigRsp;
const ModifyTopicAttributesRequest = models.ModifyTopicAttributesRequest;
const CreateTopicResponse = models.CreateTopicResponse;
const CreateInstancePreRequest = models.CreateInstancePreRequest;
const DeleteTopicIpWhiteListRequest = models.DeleteTopicIpWhiteListRequest;
const DescribeGroupOffsetsRequest = models.DescribeGroupOffsetsRequest;
const DescribeUserRequest = models.DescribeUserRequest;
const DescribeTopicSyncReplicaRequest = models.DescribeTopicSyncReplicaRequest;
const InstanceDetail = models.InstanceDetail;
const InstanceQuotaConfigResp = models.InstanceQuotaConfigResp;
const DescribeTopicDetailResponse = models.DescribeTopicDetailResponse;
const SubscribedInfo = models.SubscribedInfo;
const Price = models.Price;


/**
 * ckafka client
 * @class
 */
class CkafkaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ckafka.tencentcloudapi.com", "2019-08-19", credential, region, profile);
    }
    
    /**
     * 查看路由信息
     * @param {DescribeRouteRequest} req
     * @param {function(string, DescribeRouteResponse):void} cb
     * @public
     */
    DescribeRoute(req, cb) {
        let resp = new DescribeRouteResponse();
        this.request("DescribeRoute", req, resp, cb);
    }

    /**
     * 获取消费分组信息
     * @param {DescribeGroupInfoRequest} req
     * @param {function(string, DescribeGroupInfoResponse):void} cb
     * @public
     */
    DescribeGroupInfo(req, cb) {
        let resp = new DescribeGroupInfoResponse();
        this.request("DescribeGroupInfo", req, resp, cb);
    }

    /**
     * 创建消费者组
     * @param {CreateConsumerRequest} req
     * @param {function(string, CreateConsumerResponse):void} cb
     * @public
     */
    CreateConsumer(req, cb) {
        let resp = new CreateConsumerResponse();
        this.request("CreateConsumer", req, resp, cb);
    }

    /**
     * 查询消费分组信息
     * @param {DescribeConsumerGroupRequest} req
     * @param {function(string, DescribeConsumerGroupResponse):void} cb
     * @public
     */
    DescribeConsumerGroup(req, cb) {
        let resp = new DescribeConsumerGroupResponse();
        this.request("DescribeConsumerGroup", req, resp, cb);
    }

    /**
     * 查询订阅某主题消息分组信息
     * @param {DescribeTopicSubscribeGroupRequest} req
     * @param {function(string, DescribeTopicSubscribeGroupResponse):void} cb
     * @public
     */
    DescribeTopicSubscribeGroup(req, cb) {
        let resp = new DescribeTopicSubscribeGroupResponse();
        this.request("DescribeTopicSubscribeGroup", req, resp, cb);
    }

    /**
     * 预付费实例变配接口，调整磁盘，带宽
     * @param {ModifyInstancePreRequest} req
     * @param {function(string, ModifyInstancePreResponse):void} cb
     * @public
     */
    ModifyInstancePre(req, cb) {
        let resp = new ModifyInstancePreResponse();
        this.request("ModifyInstancePre", req, resp, cb);
    }

    /**
     * 批量设置主题属性
     * @param {BatchModifyTopicAttributesRequest} req
     * @param {function(string, BatchModifyTopicAttributesResponse):void} cb
     * @public
     */
    BatchModifyTopicAttributes(req, cb) {
        let resp = new BatchModifyTopicAttributesResponse();
        this.request("BatchModifyTopicAttributes", req, resp, cb);
    }

    /**
     * 删除路由
     * @param {DeleteRouteRequest} req
     * @param {function(string, DeleteRouteResponse):void} cb
     * @public
     */
    DeleteRoute(req, cb) {
        let resp = new DeleteRouteResponse();
        this.request("DeleteRoute", req, resp, cb);
    }

    /**
     * 通过HTTP接入层发送消息
     * @param {SendMessageRequest} req
     * @param {function(string, SendMessageResponse):void} cb
     * @public
     */
    SendMessage(req, cb) {
        let resp = new SendMessageResponse();
        this.request("SendMessage", req, resp, cb);
    }

    /**
     * 本接口用于修改主题属性。
     * @param {ModifyTopicAttributesRequest} req
     * @param {function(string, ModifyTopicAttributesResponse):void} cb
     * @public
     */
    ModifyTopicAttributes(req, cb) {
        let resp = new ModifyTopicAttributesResponse();
        this.request("ModifyTopicAttributes", req, resp, cb);
    }

    /**
     * 创建主题ip白名单
     * @param {CreateTopicIpWhiteListRequest} req
     * @param {function(string, CreateTopicIpWhiteListResponse):void} cb
     * @public
     */
    CreateTopicIpWhiteList(req, cb) {
        let resp = new CreateTopicIpWhiteListResponse();
        this.request("CreateTopicIpWhiteList", req, resp, cb);
    }

    /**
     * 枚举消费分组(精简版)
     * @param {DescribeGroupRequest} req
     * @param {function(string, DescribeGroupResponse):void} cb
     * @public
     */
    DescribeGroup(req, cb) {
        let resp = new DescribeGroupResponse();
        this.request("DescribeGroup", req, resp, cb);
    }

    /**
     * 设置Groups 消费分组offset
     * @param {ModifyGroupOffsetsRequest} req
     * @param {function(string, ModifyGroupOffsetsResponse):void} cb
     * @public
     */
    ModifyGroupOffsets(req, cb) {
        let resp = new ModifyGroupOffsetsResponse();
        this.request("ModifyGroupOffsets", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstance）用于在用户账户下获取消息队列 CKafka 实例列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 添加实例路由
     * @param {CreateRouteRequest} req
     * @param {function(string, CreateRouteResponse):void} cb
     * @public
     */
    CreateRoute(req, cb) {
        let resp = new CreateRouteResponse();
        this.request("CreateRoute", req, resp, cb);
    }

    /**
     * 删除消费组
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * 查询用户信息
     * @param {DescribeUserRequest} req
     * @param {function(string, DescribeUserResponse):void} cb
     * @public
     */
    DescribeUser(req, cb) {
        let resp = new DescribeUserResponse();
        this.request("DescribeUser", req, resp, cb);
    }

    /**
     * 枚举ACL
     * @param {DescribeACLRequest} req
     * @param {function(string, DescribeACLResponse):void} cb
     * @public
     */
    DescribeACL(req, cb) {
        let resp = new DescribeACLResponse();
        this.request("DescribeACL", req, resp, cb);
    }

    /**
     * 取消授权token
     * @param {CancelAuthorizationTokenRequest} req
     * @param {function(string, CancelAuthorizationTokenResponse):void} cb
     * @public
     */
    CancelAuthorizationToken(req, cb) {
        let resp = new CancelAuthorizationTokenResponse();
        this.request("CancelAuthorizationToken", req, resp, cb);
    }

    /**
     * 创建实例(预付费包年包月)
     * @param {CreateInstancePreRequest} req
     * @param {function(string, CreateInstancePreResponse):void} cb
     * @public
     */
    CreateInstancePre(req, cb) {
        let resp = new CreateInstancePreResponse();
        this.request("CreateInstancePre", req, resp, cb);
    }

    /**
     * 根据指定offset位置的消息
     * @param {FetchMessageByOffsetRequest} req
     * @param {function(string, FetchMessageByOffsetResponse):void} cb
     * @public
     */
    FetchMessageByOffset(req, cb) {
        let resp = new FetchMessageByOffsetResponse();
        this.request("FetchMessageByOffset", req, resp, cb);
    }

    /**
     * 删除主题IP白名单
     * @param {DeleteTopicIpWhiteListRequest} req
     * @param {function(string, DeleteTopicIpWhiteListResponse):void} cb
     * @public
     */
    DeleteTopicIpWhiteList(req, cb) {
        let resp = new DeleteTopicIpWhiteListResponse();
        this.request("DeleteTopicIpWhiteList", req, resp, cb);
    }

    /**
     * 修改密码
     * @param {ModifyPasswordRequest} req
     * @param {function(string, ModifyPasswordResponse):void} cb
     * @public
     */
    ModifyPassword(req, cb) {
        let resp = new ModifyPasswordResponse();
        this.request("ModifyPassword", req, resp, cb);
    }

    /**
     * 添加 ACL 策略
     * @param {CreateAclRequest} req
     * @param {function(string, CreateAclResponse):void} cb
     * @public
     */
    CreateAcl(req, cb) {
        let resp = new CreateAclResponse();
        this.request("CreateAcl", req, resp, cb);
    }

    /**
     * 创建ckafka主题
     * @param {CreateTopicRequest} req
     * @param {function(string, CreateTopicResponse):void} cb
     * @public
     */
    CreateTopic(req, cb) {
        let resp = new CreateTopicResponse();
        this.request("CreateTopic", req, resp, cb);
    }

    /**
     * 本接口用于增加主题中的分区
     * @param {CreatePartitionRequest} req
     * @param {function(string, CreatePartitionResponse):void} cb
     * @public
     */
    CreatePartition(req, cb) {
        let resp = new CreatePartitionResponse();
        this.request("CreatePartition", req, resp, cb);
    }

    /**
     * 删除用户
     * @param {DeleteUserRequest} req
     * @param {function(string, DeleteUserResponse):void} cb
     * @public
     */
    DeleteUser(req, cb) {
        let resp = new DeleteUserResponse();
        this.request("DeleteUser", req, resp, cb);
    }

    /**
     * 创建最高权限的token
     * @param {CreateTokenRequest} req
     * @param {function(string, CreateTokenResponse):void} cb
     * @public
     */
    CreateToken(req, cb) {
        let resp = new CreateTokenResponse();
        this.request("CreateToken", req, resp, cb);
    }

    /**
     * 获取主题列表详情（仅控制台调用）
     * @param {DescribeTopicDetailRequest} req
     * @param {function(string, DescribeTopicDetailResponse):void} cb
     * @public
     */
    DescribeTopicDetail(req, cb) {
        let resp = new DescribeTopicDetailResponse();
        this.request("DescribeTopicDetail", req, resp, cb);
    }

    /**
     * 删除ACL
     * @param {DeleteAclRequest} req
     * @param {function(string, DeleteAclResponse):void} cb
     * @public
     */
    DeleteAcl(req, cb) {
        let resp = new DeleteAclResponse();
        this.request("DeleteAcl", req, resp, cb);
    }

    /**
     * 查询用户列表
     * @param {DescribeAppInfoRequest} req
     * @param {function(string, DescribeAppInfoResponse):void} cb
     * @public
     */
    DescribeAppInfo(req, cb) {
        let resp = new DescribeAppInfoResponse();
        this.request("DescribeAppInfo", req, resp, cb);
    }

    /**
     * 获取主题属性

     * @param {DescribeTopicAttributesRequest} req
     * @param {function(string, DescribeTopicAttributesResponse):void} cb
     * @public
     */
    DescribeTopicAttributes(req, cb) {
        let resp = new DescribeTopicAttributesResponse();
        this.request("DescribeTopicAttributes", req, resp, cb);
    }

    /**
     * 删除预付费实例
     * @param {DeleteInstancePreRequest} req
     * @param {function(string, DeleteInstancePreResponse):void} cb
     * @public
     */
    DeleteInstancePre(req, cb) {
        let resp = new DeleteInstancePreResponse();
        this.request("DeleteInstancePre", req, resp, cb);
    }

    /**
     * 获取实例属性 
     * @param {DescribeInstanceAttributesRequest} req
     * @param {function(string, DescribeInstanceAttributesResponse):void} cb
     * @public
     */
    DescribeInstanceAttributes(req, cb) {
        let resp = new DescribeInstanceAttributesResponse();
        this.request("DescribeInstanceAttributes", req, resp, cb);
    }

    /**
     * 用户账户下获取实例列表详情
     * @param {DescribeInstancesDetailRequest} req
     * @param {function(string, DescribeInstancesDetailResponse):void} cb
     * @public
     */
    DescribeInstancesDetail(req, cb) {
        let resp = new DescribeInstancesDetailResponse();
        this.request("DescribeInstancesDetail", req, resp, cb);
    }

    /**
     * 批量添加ACL策略
     * @param {BatchCreateAclRequest} req
     * @param {function(string, BatchCreateAclResponse):void} cb
     * @public
     */
    BatchCreateAcl(req, cb) {
        let resp = new BatchCreateAclResponse();
        this.request("BatchCreateAcl", req, resp, cb);
    }

    /**
     * 删除ACL规则
     * @param {DeleteAclRuleRequest} req
     * @param {function(string, DeleteAclRuleResponse):void} cb
     * @public
     */
    DeleteAclRule(req, cb) {
        let resp = new DeleteAclRuleResponse();
        this.request("DeleteAclRule", req, resp, cb);
    }

    /**
     * 修改删除路由延迟触发时间
     * @param {DeleteRouteTriggerTimeRequest} req
     * @param {function(string, DeleteRouteTriggerTimeResponse):void} cb
     * @public
     */
    DeleteRouteTriggerTime(req, cb) {
        let resp = new DeleteRouteTriggerTimeResponse();
        this.request("DeleteRouteTriggerTime", req, resp, cb);
    }

    /**
     * 批量修改消费组offset
     * @param {BatchModifyGroupOffsetsRequest} req
     * @param {function(string, BatchModifyGroupOffsetsResponse):void} cb
     * @public
     */
    BatchModifyGroupOffsets(req, cb) {
        let resp = new BatchModifyGroupOffsetsResponse();
        this.request("BatchModifyGroupOffsets", req, resp, cb);
    }

    /**
     * 获取Topic 副本详情信息
     * @param {DescribeTopicSyncReplicaRequest} req
     * @param {function(string, DescribeTopicSyncReplicaResponse):void} cb
     * @public
     */
    DescribeTopicSyncReplica(req, cb) {
        let resp = new DescribeTopicSyncReplicaResponse();
        this.request("DescribeTopicSyncReplica", req, resp, cb);
    }

    /**
     * 获取消费分组offset
     * @param {DescribeGroupOffsetsRequest} req
     * @param {function(string, DescribeGroupOffsetsResponse):void} cb
     * @public
     */
    DescribeGroupOffsets(req, cb) {
        let resp = new DescribeGroupOffsetsResponse();
        this.request("DescribeGroupOffsets", req, resp, cb);
    }

    /**
     * 给实例授权token
     * @param {AuthorizeTokenRequest} req
     * @param {function(string, AuthorizeTokenResponse):void} cb
     * @public
     */
    AuthorizeToken(req, cb) {
        let resp = new AuthorizeTokenResponse();
        this.request("AuthorizeToken", req, resp, cb);
    }

    /**
     * 接口请求域名：https://ckafka.tencentcloudapi.com
本接口（DescribeTopic）用于在用户获取消息队列 CKafka 实例的主题列表
     * @param {DescribeTopicRequest} req
     * @param {function(string, DescribeTopicResponse):void} cb
     * @public
     */
    DescribeTopic(req, cb) {
        let resp = new DescribeTopicResponse();
        this.request("DescribeTopic", req, resp, cb);
    }

    /**
     * 设置实例属性
     * @param {ModifyInstanceAttributesRequest} req
     * @param {function(string, ModifyInstanceAttributesResponse):void} cb
     * @public
     */
    ModifyInstanceAttributes(req, cb) {
        let resp = new ModifyInstanceAttributesResponse();
        this.request("ModifyInstanceAttributes", req, resp, cb);
    }

    /**
     * 用于查看ckafka的可用区列表
     * @param {DescribeCkafkaZoneRequest} req
     * @param {function(string, DescribeCkafkaZoneResponse):void} cb
     * @public
     */
    DescribeCkafkaZone(req, cb) {
        let resp = new DescribeCkafkaZoneResponse();
        this.request("DescribeCkafkaZone", req, resp, cb);
    }

    /**
     * 枚举地域,只支持广州地域
     * @param {DescribeRegionRequest} req
     * @param {function(string, DescribeRegionResponse):void} cb
     * @public
     */
    DescribeRegion(req, cb) {
        let resp = new DescribeRegionResponse();
        this.request("DescribeRegion", req, resp, cb);
    }

    /**
     * 添加用户
     * @param {CreateUserRequest} req
     * @param {function(string, CreateUserResponse):void} cb
     * @public
     */
    CreateUser(req, cb) {
        let resp = new CreateUserResponse();
        this.request("CreateUser", req, resp, cb);
    }

    /**
     * 删除ckafka主题
     * @param {DeleteTopicRequest} req
     * @param {function(string, DeleteTopicResponse):void} cb
     * @public
     */
    DeleteTopic(req, cb) {
        let resp = new DeleteTopicResponse();
        this.request("DeleteTopic", req, resp, cb);
    }


}
module.exports = CkafkaClient;

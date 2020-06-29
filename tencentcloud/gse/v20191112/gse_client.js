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
const GameProperty = models.GameProperty;
const TargetConfiguration = models.TargetConfiguration;
const DeleteScalingPolicyRequest = models.DeleteScalingPolicyRequest;
const PlacedPlayerSession = models.PlacedPlayerSession;
const DescribeGameServerSessionsResponse = models.DescribeGameServerSessionsResponse;
const Instance = models.Instance;
const DescribeGameServerSessionQueuesResponse = models.DescribeGameServerSessionQueuesResponse;
const GetInstanceAccessResponse = models.GetInstanceAccessResponse;
const JoinGameServerSessionRequest = models.JoinGameServerSessionRequest;
const DescribePlayerSessionsResponse = models.DescribePlayerSessionsResponse;
const SetServerWeightResponse = models.SetServerWeightResponse;
const PlayerLatency = models.PlayerLatency;
const StopGameServerSessionPlacementRequest = models.StopGameServerSessionPlacementRequest;
const UpdateGameServerSessionResponse = models.UpdateGameServerSessionResponse;
const ScalingPolicy = models.ScalingPolicy;
const GetInstanceAccessRequest = models.GetInstanceAccessRequest;
const DescribeGameServerSessionsRequest = models.DescribeGameServerSessionsRequest;
const UpdateGameServerSessionRequest = models.UpdateGameServerSessionRequest;
const StartMatchPlacementResponse = models.StartMatchPlacementResponse;
const DescribePlayerSessionsRequest = models.DescribePlayerSessionsRequest;
const StartGameServerSessionPlacementResponse = models.StartGameServerSessionPlacementResponse;
const Credentials = models.Credentials;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const GetGameServerSessionLogUrlRequest = models.GetGameServerSessionLogUrlRequest;
const StartMatchPlacementRequest = models.StartMatchPlacementRequest;
const CreateGameServerSessionResponse = models.CreateGameServerSessionResponse;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const DescribeScalingPoliciesRequest = models.DescribeScalingPoliciesRequest;
const DescribeGameServerSessionDetailsResponse = models.DescribeGameServerSessionDetailsResponse;
const PlayerLatencyPolicy = models.PlayerLatencyPolicy;
const PutScalingPolicyResponse = models.PutScalingPolicyResponse;
const JoinGameServerSessionResponse = models.JoinGameServerSessionResponse;
const DesiredPlayerSession = models.DesiredPlayerSession;
const SearchGameServerSessionsResponse = models.SearchGameServerSessionsResponse;
const DescribeGameServerSessionPlacementRequest = models.DescribeGameServerSessionPlacementRequest;
const DescribeScalingPoliciesResponse = models.DescribeScalingPoliciesResponse;
const GameServerSessionQueueDestination = models.GameServerSessionQueueDestination;
const GameServerSessionPlacement = models.GameServerSessionPlacement;
const GameServerSessionQueue = models.GameServerSessionQueue;
const SetServerWeightRequest = models.SetServerWeightRequest;
const PlayerSession = models.PlayerSession;
const CreateGameServerSessionRequest = models.CreateGameServerSessionRequest;
const GetGameServerSessionLogUrlResponse = models.GetGameServerSessionLogUrlResponse;
const GameServerSessionDetail = models.GameServerSessionDetail;
const DescribeGameServerSessionDetailsRequest = models.DescribeGameServerSessionDetailsRequest;
const StartGameServerSessionPlacementRequest = models.StartGameServerSessionPlacementRequest;
const GameServerSession = models.GameServerSession;
const DescribeGameServerSessionQueuesRequest = models.DescribeGameServerSessionQueuesRequest;
const DeleteScalingPolicyResponse = models.DeleteScalingPolicyResponse;
const DescribeGameServerSessionPlacementResponse = models.DescribeGameServerSessionPlacementResponse;
const SearchGameServerSessionsRequest = models.SearchGameServerSessionsRequest;
const PutScalingPolicyRequest = models.PutScalingPolicyRequest;
const StopGameServerSessionPlacementResponse = models.StopGameServerSessionPlacementResponse;
const InstanceAccess = models.InstanceAccess;


/**
 * gse client
 * @class
 */
class GseClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("gse.tencentcloudapi.com", "2019-11-12", credential, region, profile);
    }
    
    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
     * @param {UpdateGameServerSessionRequest} req
     * @param {function(string, UpdateGameServerSessionResponse):void} cb
     * @public
     */
    UpdateGameServerSession(req, cb) {
        let resp = new UpdateGameServerSessionResponse();
        this.request("UpdateGameServerSession", req, resp, cb);
    }

    /**
     * 用于查询服务部署的动态扩缩容配置
     * @param {DescribeScalingPoliciesRequest} req
     * @param {function(string, DescribeScalingPoliciesResponse):void} cb
     * @public
     */
    DescribeScalingPolicies(req, cb) {
        let resp = new DescribeScalingPoliciesResponse();
        this.request("DescribeScalingPolicies", req, resp, cb);
    }

    /**
     * 用于查询服务器实例列表
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
     * @param {DescribeGameServerSessionsRequest} req
     * @param {function(string, DescribeGameServerSessionsResponse):void} cb
     * @public
     */
    DescribeGameServerSessions(req, cb) {
        let resp = new DescribeGameServerSessionsResponse();
        this.request("DescribeGameServerSessions", req, resp, cb);
    }

    /**
     * 获取实例登录所需要的凭据
     * @param {GetInstanceAccessRequest} req
     * @param {function(string, GetInstanceAccessResponse):void} cb
     * @public
     */
    GetInstanceAccess(req, cb) {
        let resp = new GetInstanceAccessResponse();
        this.request("GetInstanceAccess", req, resp, cb);
    }

    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话
     * @param {JoinGameServerSessionRequest} req
     * @param {function(string, JoinGameServerSessionResponse):void} cb
     * @public
     */
    JoinGameServerSession(req, cb) {
        let resp = new JoinGameServerSessionResponse();
        this.request("JoinGameServerSession", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
     * @param {DescribeGameServerSessionPlacementRequest} req
     * @param {function(string, DescribeGameServerSessionPlacementResponse):void} cb
     * @public
     */
    DescribeGameServerSessionPlacement(req, cb) {
        let resp = new DescribeGameServerSessionPlacementResponse();
        this.request("DescribeGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
     * @param {DescribeGameServerSessionDetailsRequest} req
     * @param {function(string, DescribeGameServerSessionDetailsResponse):void} cb
     * @public
     */
    DescribeGameServerSessionDetails(req, cb) {
        let resp = new DescribeGameServerSessionDetailsResponse();
        this.request("DescribeGameServerSessionDetails", req, resp, cb);
    }

    /**
     * 用于设置动态扩缩容配置
     * @param {PutScalingPolicyRequest} req
     * @param {function(string, PutScalingPolicyResponse):void} cb
     * @public
     */
    PutScalingPolicy(req, cb) {
        let resp = new PutScalingPolicyResponse();
        this.request("PutScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
     * @param {StartGameServerSessionPlacementRequest} req
     * @param {function(string, StartGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StartGameServerSessionPlacement(req, cb) {
        let resp = new StartGameServerSessionPlacementResponse();
        this.request("StartGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * 设置服务器权重
     * @param {SetServerWeightRequest} req
     * @param {function(string, SetServerWeightResponse):void} cb
     * @public
     */
    SetServerWeight(req, cb) {
        let resp = new SetServerWeightResponse();
        this.request("SetServerWeight", req, resp, cb);
    }

    /**
     * 本接口（StartMatchPlacement）用于开始匹配放置游戏服务器会话
     * @param {StartMatchPlacementRequest} req
     * @param {function(string, StartMatchPlacementResponse):void} cb
     * @public
     */
    StartMatchPlacement(req, cb) {
        let resp = new StartMatchPlacementResponse();
        this.request("StartMatchPlacement", req, resp, cb);
    }

    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
     * @param {StopGameServerSessionPlacementRequest} req
     * @param {function(string, StopGameServerSessionPlacementResponse):void} cb
     * @public
     */
    StopGameServerSessionPlacement(req, cb) {
        let resp = new StopGameServerSessionPlacementResponse();
        this.request("StopGameServerSessionPlacement", req, resp, cb);
    }

    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表
     * @param {DescribePlayerSessionsRequest} req
     * @param {function(string, DescribePlayerSessionsResponse):void} cb
     * @public
     */
    DescribePlayerSessions(req, cb) {
        let resp = new DescribePlayerSessionsResponse();
        this.request("DescribePlayerSessions", req, resp, cb);
    }

    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
     * @param {GetGameServerSessionLogUrlRequest} req
     * @param {function(string, GetGameServerSessionLogUrlResponse):void} cb
     * @public
     */
    GetGameServerSessionLogUrl(req, cb) {
        let resp = new GetGameServerSessionLogUrlResponse();
        this.request("GetGameServerSessionLogUrl", req, resp, cb);
    }

    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
     * @param {SearchGameServerSessionsRequest} req
     * @param {function(string, SearchGameServerSessionsResponse):void} cb
     * @public
     */
    SearchGameServerSessions(req, cb) {
        let resp = new SearchGameServerSessionsResponse();
        this.request("SearchGameServerSessions", req, resp, cb);
    }

    /**
     * 用于删除扩缩容配置
     * @param {DeleteScalingPolicyRequest} req
     * @param {function(string, DeleteScalingPolicyResponse):void} cb
     * @public
     */
    DeleteScalingPolicy(req, cb) {
        let resp = new DeleteScalingPolicyResponse();
        this.request("DeleteScalingPolicy", req, resp, cb);
    }

    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话
     * @param {CreateGameServerSessionRequest} req
     * @param {function(string, CreateGameServerSessionResponse):void} cb
     * @public
     */
    CreateGameServerSession(req, cb) {
        let resp = new CreateGameServerSessionResponse();
        this.request("CreateGameServerSession", req, resp, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
     * @param {DescribeGameServerSessionQueuesRequest} req
     * @param {function(string, DescribeGameServerSessionQueuesResponse):void} cb
     * @public
     */
    DescribeGameServerSessionQueues(req, cb) {
        let resp = new DescribeGameServerSessionQueuesResponse();
        this.request("DescribeGameServerSessionQueues", req, resp, cb);
    }


}
module.exports = GseClient;

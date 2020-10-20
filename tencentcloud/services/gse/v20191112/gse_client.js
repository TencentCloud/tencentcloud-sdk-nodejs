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
 * gse client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("gse.tencentcloudapi.com", "2019-11-12", clientConfig);
    }
    /**
     * 本接口（DeleteFleet）用于删除服务器舰队
     */
    async DeleteFleet(req, cb) {
        return this.request("DeleteFleet", req, cb);
    }
    /**
     * 用于更新服务部署容量配置
     */
    async UpdateFleetCapacity(req, cb) {
        return this.request("UpdateFleetCapacity", req, cb);
    }
    /**
     * 本接口（StartFleetActions）用于启用服务器舰队自动扩缩容
     */
    async StartFleetActions(req, cb) {
        return this.request("StartFleetActions", req, cb);
    }
    /**
     * 本接口（DescribeRuntimeConfiguration）用于获取服务器舰队运行配置
     */
    async DescribeRuntimeConfiguration(req, cb) {
        return this.request("DescribeRuntimeConfiguration", req, cb);
    }
    /**
     * 本接口（UpdateAlias）用于更新别名的属性
     */
    async UpdateAlias(req, cb) {
        return this.request("UpdateAlias", req, cb);
    }
    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
     */
    async DescribeGameServerSessionPlacement(req, cb) {
        return this.request("DescribeGameServerSessionPlacement", req, cb);
    }
    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
     */
    async DescribeGameServerSessionDetails(req, cb) {
        return this.request("DescribeGameServerSessionDetails", req, cb);
    }
    /**
       * 本接口（CreateAsset）用于创建生成包。
  通过获取上传cos的临时密钥，将文件上传至cos，然后将生成包的zip名称下发给[CreateAsset](https://cloud.tencent.com/document/product/1165/48731)完成接口创建。上传文件至 cos支持俩种方式：
  
  - 获取预签名方式，COS 简单上传
      1. [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) 获取预签名信息
      2. 使用 COS API 进行上传
  -  临时密钥方式，COS 简单上传或者分块上传方式
      1. [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727)（获取上传 bucket  第一次调用需要，后续可以不用调用）
      2. [GetUploadFederationToken](https://cloud.tencent.com/document/product/1165/48742) 获取临时密钥
      3. 使用 COS API 进行上传
  
  具体使用场景可以参考 [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) ,  [GetUploadFederationToken](https://cloud.tencent.com/document/product/1165/48742)和下面 CreateAsset 示例。
       */
    async CreateAsset(req, cb) {
        return this.request("CreateAsset", req, cb);
    }
    /**
     * 本接口（CreateGameServerSessionQueue）用于创建游戏服务器会话队列
     */
    async CreateGameServerSessionQueue(req, cb) {
        return this.request("CreateGameServerSessionQueue", req, cb);
    }
    /**
     * 本接口（DeleteAsset）用于删除生成包
     */
    async DeleteAsset(req, cb) {
        return this.request("DeleteAsset", req, cb);
    }
    /**
     * 本接口（ListFleets）用于获取服务器舰队列表
     */
    async ListFleets(req, cb) {
        return this.request("ListFleets", req, cb);
    }
    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
     */
    async GetGameServerSessionLogUrl(req, cb) {
        return this.request("GetGameServerSessionLogUrl", req, cb);
    }
    /**
     * 本接口（UpdateRuntimeConfiguration）用于更新服务器舰队配置
     */
    async UpdateRuntimeConfiguration(req, cb) {
        return this.request("UpdateRuntimeConfiguration", req, cb);
    }
    /**
     * 用于查询服务部署容量配置
     */
    async DescribeFleetCapacity(req, cb) {
        return this.request("DescribeFleetCapacity", req, cb);
    }
    /**
     * 本接口（DeleteGameServerSessionQueue）用于删除游戏服务器会话队列
     */
    async DeleteGameServerSessionQueue(req, cb) {
        return this.request("DeleteGameServerSessionQueue", req, cb);
    }
    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
     */
    async DescribeGameServerSessionQueues(req, cb) {
        return this.request("DescribeGameServerSessionQueues", req, cb);
    }
    /**
     * 本接口（PutScalingPolicy）用于设置动态扩缩容配置
     */
    async PutScalingPolicy(req, cb) {
        return this.request("PutScalingPolicy", req, cb);
    }
    /**
     * 本接口（DescribeScalingPolicies）用于查询服务部署的动态扩缩容配置
     */
    async DescribeScalingPolicies(req, cb) {
        return this.request("DescribeScalingPolicies", req, cb);
    }
    /**
     * 本接口（DescribeFleetStatisticDetails）用于查询服务部署统计详情
     */
    async DescribeFleetStatisticDetails(req, cb) {
        return this.request("DescribeFleetStatisticDetails", req, cb);
    }
    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
     */
    async DescribeGameServerSessions(req, cb) {
        return this.request("DescribeGameServerSessions", req, cb);
    }
    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话
     */
    async JoinGameServerSession(req, cb) {
        return this.request("JoinGameServerSession", req, cb);
    }
    /**
     * 本接口（JoinGameServerSessionBatch）用于加入游戏服务器会话
     */
    async JoinGameServerSessionBatch(req, cb) {
        return this.request("JoinGameServerSessionBatch", req, cb);
    }
    /**
     * 本接口（DescribeFleetStatisticSummary）用于查询服务部署统计汇总信息
     */
    async DescribeFleetStatisticSummary(req, cb) {
        return this.request("DescribeFleetStatisticSummary", req, cb);
    }
    /**
     * 本接口（DeleteAlias）用于删除别名
     */
    async DeleteAlias(req, cb) {
        return this.request("DeleteAlias", req, cb);
    }
    /**
     * 查询用户实例数限额
     */
    async DescribeInstanceLimit(req, cb) {
        return this.request("DescribeInstanceLimit", req, cb);
    }
    /**
     * 本接口（UpdateAsset）用于修改生成包信息
     */
    async UpdateAsset(req, cb) {
        return this.request("UpdateAsset", req, cb);
    }
    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
     */
    async StartGameServerSessionPlacement(req, cb) {
        return this.request("StartGameServerSessionPlacement", req, cb);
    }
    /**
     * 本接口（DescribeFleetPortSettings）用于获取服务器舰队安全组信息
     */
    async DescribeFleetPortSettings(req, cb) {
        return this.request("DescribeFleetPortSettings", req, cb);
    }
    /**
     * 本接口（AttachCcnInstances）用于关联云联网实例
     */
    async AttachCcnInstances(req, cb) {
        return this.request("AttachCcnInstances", req, cb);
    }
    /**
     * 本接口（DetachCcnInstances）用于解关联云联网实例
     */
    async DetachCcnInstances(req, cb) {
        return this.request("DetachCcnInstances", req, cb);
    }
    /**
     * 本接口（DeleteScalingPolicy）用于删除扩缩容配置
     */
    async DeleteScalingPolicy(req, cb) {
        return this.request("DeleteScalingPolicy", req, cb);
    }
    /**
     * 本接口（CreateAlias）用于创建别名
     */
    async CreateAlias(req, cb) {
        return this.request("CreateAlias", req, cb);
    }
    /**
     * 本接口（DescribeFleetStatisticFlows）用于查询服务部署统计用量
     */
    async DescribeFleetStatisticFlows(req, cb) {
        return this.request("DescribeFleetStatisticFlows", req, cb);
    }
    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话
     */
    async CreateGameServerSession(req, cb) {
        return this.request("CreateGameServerSession", req, cb);
    }
    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表
     */
    async DescribePlayerSessions(req, cb) {
        return this.request("DescribePlayerSessions", req, cb);
    }
    /**
     * 本接口（DescribeAsset）获取生成包信息
     */
    async DescribeAsset(req, cb) {
        return this.request("DescribeAsset", req, cb);
    }
    /**
       * 本接口（GetUploadCredentials）获取上传文件授权信息。
  通过 [GetUploadCredentials](https://cloud.tencent.com/document/product/1165/48727) 接口获取临时授权信息后，调用 COS API将数据上传，根据上传的 BucketKey 信息进行生成包 [CreateAsset](https://cloud.tencent.com/document/product/1165/48731) 的创建。参考下面的示例部分。
       */
    async GetUploadCredentials(req, cb) {
        return this.request("GetUploadCredentials", req, cb);
    }
    /**
     * 本接口（CreateFleet）用于创建服务器舰队
     */
    async CreateFleet(req, cb) {
        return this.request("CreateFleet", req, cb);
    }
    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
     */
    async StopGameServerSessionPlacement(req, cb) {
        return this.request("StopGameServerSessionPlacement", req, cb);
    }
    /**
     * 本接口（UpdateGameServerSessionQueue）用于修改游戏服务器会话队列
     */
    async UpdateGameServerSessionQueue(req, cb) {
        return this.request("UpdateGameServerSessionQueue", req, cb);
    }
    /**
     * 本接口（GetInstanceAccess）用于获取实例登录所需要的凭据
     */
    async GetInstanceAccess(req, cb) {
        return this.request("GetInstanceAccess", req, cb);
    }
    /**
     * 本接口（UpdateFleetAttributes）用于更新服务器舰队属性
     */
    async UpdateFleetAttributes(req, cb) {
        return this.request("UpdateFleetAttributes", req, cb);
    }
    /**
     * 本接口（DescribeUserQuota）获取用户单个模块配额
     */
    async DescribeUserQuota(req, cb) {
        return this.request("DescribeUserQuota", req, cb);
    }
    /**
     * 本接口（DescribeFleetAttributes）用于查询服务器舰队属性
     */
    async DescribeFleetAttributes(req, cb) {
        return this.request("DescribeFleetAttributes", req, cb);
    }
    /**
     * 本接口（GetUploadFederationToken）用于 获取生成包上传所需要的临时密钥
     */
    async GetUploadFederationToken(req, cb) {
        return this.request("GetUploadFederationToken", req, cb);
    }
    /**
     * 本接口（ResolveAlias）用于获取别名当前指向的fleetId
     */
    async ResolveAlias(req, cb) {
        return this.request("ResolveAlias", req, cb);
    }
    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
     */
    async SearchGameServerSessions(req, cb) {
        return this.request("SearchGameServerSessions", req, cb);
    }
    /**
     * 本接口（DescribeInstances）用于查询服务器实例列表
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 本接口（DescribeAssets）用于获取生成包列表
     */
    async DescribeAssets(req, cb) {
        return this.request("DescribeAssets", req, cb);
    }
    /**
     * 本接口（DescribeCcnInstances）用于查询云联网实例
     */
    async DescribeCcnInstances(req, cb) {
        return this.request("DescribeCcnInstances", req, cb);
    }
    /**
     * 本接口（StopFleetActions）用于停止服务器舰队自动扩缩容，改为手动扩缩容
     */
    async StopFleetActions(req, cb) {
        return this.request("StopFleetActions", req, cb);
    }
    /**
     * 本接口（DescribeInstances）用于查询实例扩展信息列表
     */
    async DescribeInstancesExtend(req, cb) {
        return this.request("DescribeInstancesExtend", req, cb);
    }
    /**
     * 本接口（DescribeAlias）用于获取别名详情
     */
    async DescribeAlias(req, cb) {
        return this.request("DescribeAlias", req, cb);
    }
    /**
     * 本接口（ListAliases）用于检索帐户下的所有别名
     */
    async ListAliases(req, cb) {
        return this.request("ListAliases", req, cb);
    }
    /**
     * 本接口（DescribeUserQuotas）用于获取用户配额
     */
    async DescribeUserQuotas(req, cb) {
        return this.request("DescribeUserQuotas", req, cb);
    }
    /**
     * 本接口（DescribeInstanceTypes）用于获取服务器实例类型列表
     */
    async DescribeInstanceTypes(req, cb) {
        return this.request("DescribeInstanceTypes", req, cb);
    }
    /**
     * 本接口（DescribeFleetEvents）用于查询部署服务器舰队相关的事件列表
     */
    async DescribeFleetEvents(req, cb) {
        return this.request("DescribeFleetEvents", req, cb);
    }
    /**
     * 设置服务器权重
     */
    async SetServerWeight(req, cb) {
        return this.request("SetServerWeight", req, cb);
    }
    /**
     * 本接口（DescribeFleetUtilization）用于查询服务器舰队的利用率信息
     */
    async DescribeFleetUtilization(req, cb) {
        return this.request("DescribeFleetUtilization", req, cb);
    }
    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
     */
    async UpdateGameServerSession(req, cb) {
        return this.request("UpdateGameServerSession", req, cb);
    }
    /**
     * 本接口（UpdateFleetPortSettings）用于更新服务器舰队安全组
     */
    async UpdateFleetPortSettings(req, cb) {
        return this.request("UpdateFleetPortSettings", req, cb);
    }
}
exports.Client = Client;

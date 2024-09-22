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
 * mqtt client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("mqtt.tencentcloudapi.com", "2024-05-16", clientConfig);
    }
    /**
     * 查询实例信息
     */
    async DescribeInstance(req, cb) {
        return this.request("DescribeInstance", req, cb);
    }
    /**
     * 创建主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 注册设备证书
     */
    async RegisterDeviceCertificate(req, cb) {
        return this.request("RegisterDeviceCertificate", req, cb);
    }
    /**
     * 查询授权规则
     */
    async DescribeAuthorizationPolicies(req, cb) {
        return this.request("DescribeAuthorizationPolicies", req, cb);
    }
    /**
     * 修改主题属性
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 修改策略规则
     */
    async ModifyAuthorizationPolicy(req, cb) {
        return this.request("ModifyAuthorizationPolicy", req, cb);
    }
    /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    async DescribeInstanceList(req, cb) {
        return this.request("DescribeInstanceList", req, cb);
    }
    /**
     * 删除策略规则
     */
    async DeleteAuthorizationPolicy(req, cb) {
        return this.request("DeleteAuthorizationPolicy", req, cb);
    }
    /**
     * 根据认证器类型删除一个MQTT认证器
     */
    async DeleteAuthenticator(req, cb) {
        return this.request("DeleteAuthenticator", req, cb);
    }
    /**
     * 查询mqtt主题详情
     */
    async DescribeTopic(req, cb) {
        return this.request("DescribeTopic", req, cb);
    }
    /**
     * 查询MQTT认证器
     */
    async DescribeAuthenticator(req, cb) {
        return this.request("DescribeAuthenticator", req, cb);
    }
    /**
     * 创建一个jwks的认证
     */
    async CreateJWTAuthenticator(req, cb) {
        return this.request("CreateJWTAuthenticator", req, cb);
    }
    /**
     * 修改策略规则优先级
     */
    async UpdateAuthorizationPolicyPriority(req, cb) {
        return this.request("UpdateAuthorizationPolicyPriority", req, cb);
    }
    /**
     * 修改MQTT JWKS 认证器
     */
    async ModifyJWTAuthenticator(req, cb) {
        return this.request("ModifyJWTAuthenticator", req, cb);
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
     * 删除MQTT主题
     */
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
    /**
     * 创建MQTT实例的性能测试任务
     */
    async CreateAuthorizationPolicy(req, cb) {
        return this.request("CreateAuthorizationPolicy", req, cb);
    }
    /**
     * 修改MQTT JWKS 认证器
     */
    async ModifyJWKSAuthenticator(req, cb) {
        return this.request("ModifyJWKSAuthenticator", req, cb);
    }
    /**
     * 创建一个jwks的认证
     */
    async CreateJWKSAuthenticator(req, cb) {
        return this.request("CreateJWKSAuthenticator", req, cb);
    }
}
exports.Client = Client;

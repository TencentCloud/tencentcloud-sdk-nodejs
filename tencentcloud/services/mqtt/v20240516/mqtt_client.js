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
     * 查询用户列表，Filter参数使用说明如下：

1. Username，用户名称模糊搜索
     */
    async DescribeUserList(req, cb) {
        return this.request("DescribeUserList", req, cb);
    }
    /**
     * 为MQTT实例创建公网接入点
     */
    async CreateInsPublicEndpoint(req, cb) {
        return this.request("CreateInsPublicEndpoint", req, cb);
    }
    /**
     * 修改主题属性
     */
    async ModifyTopic(req, cb) {
        return this.request("ModifyTopic", req, cb);
    }
    /**
     * 删除Ca证书
     */
    async DeleteCaCertificate(req, cb) {
        return this.request("DeleteCaCertificate", req, cb);
    }
    /**
     * 失效Ca证书
     */
    async DeactivateDeviceCertificate(req, cb) {
        return this.request("DeactivateDeviceCertificate", req, cb);
    }
    /**
     * 查询mqtt主题详情
     */
    async DescribeTopic(req, cb) {
        return this.request("DescribeTopic", req, cb);
    }
    /**
     * 失效Ca证书
     */
    async DeactivateCaCertificate(req, cb) {
        return this.request("DeactivateCaCertificate", req, cb);
    }
    /**
     * 创建一个jwks的认证
     */
    async CreateJWTAuthenticator(req, cb) {
        return this.request("CreateJWTAuthenticator", req, cb);
    }
    /**
     * 删除设备证书
     */
    async DeleteDeviceCertificate(req, cb) {
        return this.request("DeleteDeviceCertificate", req, cb);
    }
    /**
     * 删除MQTT实例
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 修改MQTT JWKS 认证器
     */
    async ModifyJWTAuthenticator(req, cb) {
        return this.request("ModifyJWTAuthenticator", req, cb);
    }
    /**
     * 修改MQTT JWKS 认证器
     */
    async ModifyJWKSAuthenticator(req, cb) {
        return this.request("ModifyJWKSAuthenticator", req, cb);
    }
    /**
     * 分页查询设备证书
     */
    async DescribeDeviceCertificates(req, cb) {
        return this.request("DescribeDeviceCertificates", req, cb);
    }
    /**
     * 查询MQTT实例公网接入点
     */
    async DescribeInsPublicEndpoints(req, cb) {
        return this.request("DescribeInsPublicEndpoints", req, cb);
    }
    /**
     * 更新MQTT实例公网接入点
     */
    async ModifyInsPublicEndpoint(req, cb) {
        return this.request("ModifyInsPublicEndpoint", req, cb);
    }
    /**
     * 查询设备证书详情接口
     */
    async DescribeDeviceCertificate(req, cb) {
        return this.request("DescribeDeviceCertificate", req, cb);
    }
    /**
     * 注册设备证书
     */
    async RegisterDeviceCertificate(req, cb) {
        return this.request("RegisterDeviceCertificate", req, cb);
    }
    /**
     * 更新MQTT集群绑定证书
参数传空，则为删除证书
     */
    async ModifyInstanceCertBinding(req, cb) {
        return this.request("ModifyInstanceCertBinding", req, cb);
    }
    /**
     * 获取产品售卖规格
     */
    async DescribeProductSKUList(req, cb) {
        return this.request("DescribeProductSKUList", req, cb);
    }
    /**
     * 查询集群下的ca证书信息
     */
    async DescribeCaCertificates(req, cb) {
        return this.request("DescribeCaCertificates", req, cb);
    }
    /**
     * 修改策略规则优先级
     */
    async UpdateAuthorizationPolicyPriority(req, cb) {
        return this.request("UpdateAuthorizationPolicyPriority", req, cb);
    }
    /**
     * 创建主题
     */
    async CreateTopic(req, cb) {
        return this.request("CreateTopic", req, cb);
    }
    /**
     * 生效设备证书
     */
    async ActivateDeviceCertificate(req, cb) {
        return this.request("ActivateDeviceCertificate", req, cb);
    }
    /**
     * 查询授权规则
     */
    async DescribeAuthorizationPolicies(req, cb) {
        return this.request("DescribeAuthorizationPolicies", req, cb);
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
     * 删除MQTT实例的公网接入点
     */
    async DeleteInsPublicEndpoint(req, cb) {
        return this.request("DeleteInsPublicEndpoint", req, cb);
    }
    /**
     * 购买新的MQTT实例
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    async DescribeInstanceList(req, cb) {
        return this.request("DescribeInstanceList", req, cb);
    }
    /**
     * 吊销设备证书
     */
    async RevokedDeviceCertificate(req, cb) {
        return this.request("RevokedDeviceCertificate", req, cb);
    }
    /**
     * 查询实例信息
     */
    async DescribeInstance(req, cb) {
        return this.request("DescribeInstance", req, cb);
    }
    /**
     * 删除MQTT主题
     */
    async DeleteTopic(req, cb) {
        return this.request("DeleteTopic", req, cb);
    }
    /**
     * 查询Ca证书详情接口
     */
    async DescribeCaCertificate(req, cb) {
        return this.request("DescribeCaCertificate", req, cb);
    }
    /**
     * 创建一个jwks的认证
     */
    async CreateJWKSAuthenticator(req, cb) {
        return this.request("CreateJWKSAuthenticator", req, cb);
    }
    /**
     * 修改MQTT角色
     */
    async ModifyUser(req, cb) {
        return this.request("ModifyUser", req, cb);
    }
    /**
     * 删除MQTT访问用户
     */
    async DeleteUser(req, cb) {
        return this.request("DeleteUser", req, cb);
    }
    /**
     * 修改策略规则
     */
    async ModifyAuthorizationPolicy(req, cb) {
        return this.request("ModifyAuthorizationPolicy", req, cb);
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
     * 注册ca证书
     */
    async RegisterCaCertificate(req, cb) {
        return this.request("RegisterCaCertificate", req, cb);
    }
    /**
     * 查询MQTT认证器
     */
    async DescribeAuthenticator(req, cb) {
        return this.request("DescribeAuthenticator", req, cb);
    }
    /**
     * 激活Ca证书
     */
    async ActivateCaCertificate(req, cb) {
        return this.request("ActivateCaCertificate", req, cb);
    }
    /**
     * 添加mqtt角色
     */
    async CreateUser(req, cb) {
        return this.request("CreateUser", req, cb);
    }
    /**
     * 申请ca注册码
     */
    async ApplyRegistrationCode(req, cb) {
        return this.request("ApplyRegistrationCode", req, cb);
    }
    /**
     * 创建MQTT实例的性能测试任务
     */
    async CreateAuthorizationPolicy(req, cb) {
        return this.request("CreateAuthorizationPolicy", req, cb);
    }
    /**
     * 修改实例属性
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
}
exports.Client = Client;

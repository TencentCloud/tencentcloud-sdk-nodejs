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
 * tse client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tse.tencentcloudapi.com", "2020-12-07", clientConfig);
    }
    /**
     * 查询Nacos类型引擎实例副本信息
     */
    async DescribeNacosReplicas(req, cb) {
        return this.request("DescribeNacosReplicas", req, cb);
    }
    /**
     * 修改云原生API网关实例分组基础信息
     */
    async ModifyNativeGatewayServerGroup(req, cb) {
        return this.request("ModifyNativeGatewayServerGroup", req, cb);
    }
    /**
     * 删除云原生网关的限流插件(服务)
     */
    async DeleteCloudNativeAPIGatewayServiceRateLimit(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayServiceRateLimit", req, cb);
    }
    /**
     * 查询zookeeper服务接口列表
     */
    async DescribeZookeeperServerInterfaces(req, cb) {
        return this.request("DescribeZookeeperServerInterfaces", req, cb);
    }
    /**
     * 获取云原生网关服务详情
     */
    async DescribeOneCloudNativeAPIGatewayService(req, cb) {
        return this.request("DescribeOneCloudNativeAPIGatewayService", req, cb);
    }
    /**
     * 查询云原生网关证书列表
     */
    async DescribeCloudNativeAPIGatewayCertificates(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayCertificates", req, cb);
    }
    /**
     * 修改云原生网关限流插件(服务)
     */
    async ModifyCloudNativeAPIGatewayServiceRateLimit(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayServiceRateLimit", req, cb);
    }
    /**
     * 创建引擎实例
     */
    async CreateEngine(req, cb) {
        return this.request("CreateEngine", req, cb);
    }
    /**
     * 修改云原生网关的灰度规则
     */
    async ModifyCloudNativeAPIGatewayCanaryRule(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayCanaryRule", req, cb);
    }
    /**
     * 删除云原生网关服务
     */
    async DeleteCloudNativeAPIGatewayService(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayService", req, cb);
    }
    /**
     * 创建云原生网关服务
     */
    async CreateCloudNativeAPIGatewayService(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayService", req, cb);
    }
    /**
     * 查询云原生网关路由列表
     */
    async DescribeCloudNativeAPIGatewayRoutes(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayRoutes", req, cb);
    }
    /**
     * 获取云原生API网关实例信息
     */
    async DescribeCloudNativeAPIGateway(req, cb) {
        return this.request("DescribeCloudNativeAPIGateway", req, cb);
    }
    /**
     * 获取云原生API网关实例端口信息
     */
    async DescribeCloudNativeAPIGatewayPorts(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayPorts", req, cb);
    }
    /**
     * 删除云原生网关路由
     */
    async DeleteCloudNativeAPIGatewayRoute(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayRoute", req, cb);
    }
    /**
     * 删除引擎实例
     */
    async DeleteEngine(req, cb) {
        return this.request("DeleteEngine", req, cb);
    }
    /**
     * 更新云原生网关证书
     */
    async ModifyCloudNativeAPIGatewayCertificate(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayCertificate", req, cb);
    }
    /**
     * 删除云原生网关的灰度规则
     */
    async DeleteCloudNativeAPIGatewayCanaryRule(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayCanaryRule", req, cb);
    }
    /**
     * 获取云原生API网关实例列表
     */
    async DescribeCloudNativeAPIGateways(req, cb) {
        return this.request("DescribeCloudNativeAPIGateways", req, cb);
    }
    /**
     * 创建云原生网关证书
     */
    async CreateCloudNativeAPIGatewayCertificate(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayCertificate", req, cb);
    }
    /**
     * 查询云原生网关服务列表
     */
    async DescribeCloudNativeAPIGatewayServices(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayServices", req, cb);
    }
    /**
     * 修改云原生网关限流插件(路由)
     */
    async ModifyCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayRouteRateLimit", req, cb);
    }
    /**
     * 查询nacos服务接口列表
     */
    async DescribeNacosServerInterfaces(req, cb) {
        return this.request("DescribeNacosServerInterfaces", req, cb);
    }
    /**
     * 修改云原生网关路由
     */
    async ModifyCloudNativeAPIGatewayRoute(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayRoute", req, cb);
    }
    /**
     * 查询Zookeeper类型注册引擎实例副本信息
     */
    async DescribeZookeeperReplicas(req, cb) {
        return this.request("DescribeZookeeperReplicas", req, cb);
    }
    /**
     * 创建云原生API网关实例
     */
    async CreateCloudNativeAPIGateway(req, cb) {
        return this.request("CreateCloudNativeAPIGateway", req, cb);
    }
    /**
     * 用于查询引擎实例列表
     */
    async DescribeSREInstances(req, cb) {
        return this.request("DescribeSREInstances", req, cb);
    }
    /**
     * 查询云原生网关的限流插件(路由)
     */
    async DescribeCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayRouteRateLimit", req, cb);
    }
    /**
     * 获取云原生API网关实例网络配置信息
     */
    async DescribeCloudNativeAPIGatewayConfig(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayConfig", req, cb);
    }
    /**
     * 修改云原生网关服务
     */
    async ModifyCloudNativeAPIGatewayService(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayService", req, cb);
    }
    /**
     * 获取云原生网关节点列表
     */
    async DescribeCloudNativeAPIGatewayNodes(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayNodes", req, cb);
    }
    /**
     * 创建云原生网关的灰度规则
     */
    async CreateCloudNativeAPIGatewayCanaryRule(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayCanaryRule", req, cb);
    }
    /**
     * 查询云原生网关单个证书详情
     */
    async DescribeCloudNativeAPIGatewayCertificateDetails(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayCertificateDetails", req, cb);
    }
    /**
     * 修改引擎公网访问配置
     */
    async UpdateEngineInternetAccess(req, cb) {
        return this.request("UpdateEngineInternetAccess", req, cb);
    }
    /**
     * 修改云原生API网关实例基础信息
     */
    async ModifyCloudNativeAPIGateway(req, cb) {
        return this.request("ModifyCloudNativeAPIGateway", req, cb);
    }
    /**
     * 创建云原生网关限流插件(服务)
     */
    async CreateCloudNativeAPIGatewayServiceRateLimit(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayServiceRateLimit", req, cb);
    }
    /**
     * 删除云原生API网关实例
     */
    async DeleteCloudNativeAPIGateway(req, cb) {
        return this.request("DeleteCloudNativeAPIGateway", req, cb);
    }
    /**
     * 更新网关上游实例列表，仅支持IPList服务类型
     */
    async UpdateUpstreamTargets(req, cb) {
        return this.request("UpdateUpstreamTargets", req, cb);
    }
    /**
     * 删除云原生网关证书
     */
    async DeleteCloudNativeAPIGatewayCertificate(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayCertificate", req, cb);
    }
    /**
     * 创建云原生网关路由
     */
    async CreateCloudNativeAPIGatewayRoute(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayRoute", req, cb);
    }
    /**
     * 修改云原生网关证书信息
     */
    async UpdateCloudNativeAPIGatewayCertificateInfo(req, cb) {
        return this.request("UpdateCloudNativeAPIGatewayCertificateInfo", req, cb);
    }
    /**
     * 创建云原生网关引擎分组
     */
    async CreateNativeGatewayServerGroup(req, cb) {
        return this.request("CreateNativeGatewayServerGroup", req, cb);
    }
    /**
     * 删除云原生网关的限流插件(路由)
     */
    async DeleteCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayRouteRateLimit", req, cb);
    }
    /**
     * 创建云原生网关限流插件(路由)
     */
    async CreateCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayRouteRateLimit", req, cb);
    }
    /**
     * 查询云原生网关分组信息
     */
    async DescribeNativeGatewayServerGroups(req, cb) {
        return this.request("DescribeNativeGatewayServerGroups", req, cb);
    }
    /**
     * 查询引擎实例访问地址
     */
    async DescribeSREInstanceAccessAddress(req, cb) {
        return this.request("DescribeSREInstanceAccessAddress", req, cb);
    }
    /**
     * 删除网关实例分组
     */
    async DeleteNativeGatewayServerGroup(req, cb) {
        return this.request("DeleteNativeGatewayServerGroup", req, cb);
    }
    /**
     * 查询云原生网关灰度规则列表
     */
    async DescribeCloudNativeAPIGatewayCanaryRules(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayCanaryRules", req, cb);
    }
    /**
     * 修改云原生API网关实例的节点规格信息，比如节点扩缩容或者升降配
     */
    async UpdateCloudNativeAPIGatewaySpec(req, cb) {
        return this.request("UpdateCloudNativeAPIGatewaySpec", req, cb);
    }
    /**
     * 查询云原生网关的限流插件(服务)
     */
    async DescribeCloudNativeAPIGatewayServiceRateLimit(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayServiceRateLimit", req, cb);
    }
}
exports.Client = Client;

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
     * 获取云原生网关服务详情
     */
    async DescribeOneCloudNativeAPIGatewayService(req, cb) {
        return this.request("DescribeOneCloudNativeAPIGatewayService", req, cb);
    }
    /**
     * 修改引擎公网访问配置
     */
    async UpdateEngineInternetAccess(req, cb) {
        return this.request("UpdateEngineInternetAccess", req, cb);
    }
    /**
     * 查询云原生网关的限流插件(服务)
     */
    async DescribeCloudNativeAPIGatewayServiceRateLimit(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayServiceRateLimit", req, cb);
    }
    /**
     * 更新云原生网关证书
     */
    async ModifyCloudNativeAPIGatewayCertificate(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayCertificate", req, cb);
    }
    /**
     * 删除公网网络配置
     */
    async DeleteCloudNativeAPIGatewayPublicNetwork(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayPublicNetwork", req, cb);
    }
    /**
     * 查询治理中心服务别名列表
     */
    async DescribeGovernanceAliases(req, cb) {
        return this.request("DescribeGovernanceAliases", req, cb);
    }
    /**
     * 删除配置文件分组
     */
    async DeleteConfigFileGroup(req, cb) {
        return this.request("DeleteConfigFileGroup", req, cb);
    }
    /**
     * 创建服务治理中心配置文件组
     */
    async CreateConfigFileGroup(req, cb) {
        return this.request("CreateConfigFileGroup", req, cb);
    }
    /**
     * 删除引擎实例
     */
    async DeleteEngine(req, cb) {
        return this.request("DeleteEngine", req, cb);
    }
    /**
     * 修改治理中心服务
     */
    async ModifyGovernanceServices(req, cb) {
        return this.request("ModifyGovernanceServices", req, cb);
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
     * 删除治理中心服务别名
     */
    async DeleteGovernanceAliases(req, cb) {
        return this.request("DeleteGovernanceAliases", req, cb);
    }
    /**
     * 查询Zookeeper类型注册引擎实例副本信息
     */
    async DescribeZookeeperReplicas(req, cb) {
        return this.request("DescribeZookeeperReplicas", req, cb);
    }
    /**
     * 删除服务实例
     */
    async DeleteGovernanceInstances(req, cb) {
        return this.request("DeleteGovernanceInstances", req, cb);
    }
    /**
     * 创建云原生网关的灰度规则
     */
    async CreateCloudNativeAPIGatewayCanaryRule(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayCanaryRule", req, cb);
    }
    /**
     * 获取 WAF 防护域名
     */
    async DescribeWafDomains(req, cb) {
        return this.request("DescribeWafDomains", req, cb);
    }
    /**
     * 查询云原生网关单个证书详情
     */
    async DescribeCloudNativeAPIGatewayCertificateDetails(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayCertificateDetails", req, cb);
    }
    /**
     * 查看弹性伸缩策略列表
     */
    async DescribeAutoScalerResourceStrategies(req, cb) {
        return this.request("DescribeAutoScalerResourceStrategies", req, cb);
    }
    /**
     * 修改网关服务来源
     */
    async ModifyNativeGatewayServiceSource(req, cb) {
        return this.request("ModifyNativeGatewayServiceSource", req, cb);
    }
    /**
     * 修改云原生API网关实例网络基本信息，例如带宽以及描述，只支持修改客户端公网/内网的信息。
     */
    async ModifyNetworkBasicInfo(req, cb) {
        return this.request("ModifyNetworkBasicInfo", req, cb);
    }
    /**
     * 删除云原生网关证书
     */
    async DeleteCloudNativeAPIGatewayCertificate(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayCertificate", req, cb);
    }
    /**
     * 查询服务契约定义列表
     */
    async DescribeGovernanceServiceContracts(req, cb) {
        return this.request("DescribeGovernanceServiceContracts", req, cb);
    }
    /**
     * 修改云原生网关证书信息
     */
    async UpdateCloudNativeAPIGatewayCertificateInfo(req, cb) {
        return this.request("UpdateCloudNativeAPIGatewayCertificateInfo", req, cb);
    }
    /**
     * 获取全量配置文件模板列表
     */
    async DescribeAllConfigFileTemplates(req, cb) {
        return this.request("DescribeAllConfigFileTemplates", req, cb);
    }
    /**
     * 创建云原生网关引擎分组
     */
    async CreateNativeGatewayServerGroup(req, cb) {
        return this.request("CreateNativeGatewayServerGroup", req, cb);
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
     * 删除配置文件
     */
    async DeleteConfigFiles(req, cb) {
        return this.request("DeleteConfigFiles", req, cb);
    }
    /**
     * 更新弹性伸缩策略
     */
    async ModifyAutoScalerResourceStrategy(req, cb) {
        return this.request("ModifyAutoScalerResourceStrategy", req, cb);
    }
    /**
     * 查看实例的标签信息
     */
    async DescribeInstanceTagInfos(req, cb) {
        return this.request("DescribeInstanceTagInfos", req, cb);
    }
    /**
     * 发布配置文件
     */
    async PublishConfigFiles(req, cb) {
        return this.request("PublishConfigFiles", req, cb);
    }
    /**
     * 删除治理中心服务
     */
    async DeleteGovernanceServices(req, cb) {
        return this.request("DeleteGovernanceServices", req, cb);
    }
    /**
     * 根据命名空间、组、名字查找配置文件
     */
    async DescribeConfigFile(req, cb) {
        return this.request("DescribeConfigFile", req, cb);
    }
    /**
     * 查询配置版本列表
     */
    async DescribeConfigFileReleases(req, cb) {
        return this.request("DescribeConfigFileReleases", req, cb);
    }
    /**
     * 关闭 WAF 防护
     */
    async CloseWafProtection(req, cb) {
        return this.request("CloseWafProtection", req, cb);
    }
    /**
     * 创建云原生API网关实例
     */
    async CreateCloudNativeAPIGateway(req, cb) {
        return this.request("CreateCloudNativeAPIGateway", req, cb);
    }
    /**
     * 查询云原生网关的限流插件(路由)
     */
    async DescribeCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayRouteRateLimit", req, cb);
    }
    /**
     * 修改云原生网关服务
     */
    async ModifyCloudNativeAPIGatewayService(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayService", req, cb);
    }
    /**
     * 查看弹性伸缩策略绑定的网关分组
     */
    async DescribeAutoScalerResourceStrategyBindingGroups(req, cb) {
        return this.request("DescribeAutoScalerResourceStrategyBindingGroups", req, cb);
    }
    /**
     * 获取配置文件发布
     */
    async DescribeConfigFileRelease(req, cb) {
        return this.request("DescribeConfigFileRelease", req, cb);
    }
    /**
     * 查询服务治理中心命名空间列表
     */
    async DescribeGovernanceNamespaces(req, cb) {
        return this.request("DescribeGovernanceNamespaces", req, cb);
    }
    /**
     * 删除治理中心服务实例
     */
    async DeleteGovernanceInstancesByHost(req, cb) {
        return this.request("DeleteGovernanceInstancesByHost", req, cb);
    }
    /**
     * 创建云原生网关路由
     */
    async CreateCloudNativeAPIGatewayRoute(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayRoute", req, cb);
    }
    /**
     * 创建服务实例
     */
    async CreateGovernanceInstances(req, cb) {
        return this.request("CreateGovernanceInstances", req, cb);
    }
    /**
     * 删除云原生网关的限流插件(路由)
     */
    async DeleteCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayRouteRateLimit", req, cb);
    }
    /**
     * 删除配置发布
     */
    async DeleteConfigFileReleases(req, cb) {
        return this.request("DeleteConfigFileReleases", req, cb);
    }
    /**
     * 删除弹性伸缩策略
     */
    async DeleteAutoScalerResourceStrategy(req, cb) {
        return this.request("DeleteAutoScalerResourceStrategy", req, cb);
    }
    /**
     * 修改云原生网关路由
     */
    async ModifyCloudNativeAPIGatewayRoute(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayRoute", req, cb);
    }
    /**
     * 删除网关实例分组
     */
    async DeleteNativeGatewayServerGroup(req, cb) {
        return this.request("DeleteNativeGatewayServerGroup", req, cb);
    }
    /**
     * 获取云原生API网关实例端口信息
     */
    async DescribeCloudNativeAPIGatewayPorts(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayPorts", req, cb);
    }
    /**
     * 查询云原生网关灰度规则列表
     */
    async DescribeCloudNativeAPIGatewayCanaryRules(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayCanaryRules", req, cb);
    }
    /**
     * 查询引擎实例访问地址
     */
    async DescribeSREInstanceAccessAddress(req, cb) {
        return this.request("DescribeSREInstanceAccessAddress", req, cb);
    }
    /**
     * 修改网关实例Konga网络配置
     */
    async ModifyConsoleNetwork(req, cb) {
        return this.request("ModifyConsoleNetwork", req, cb);
    }
    /**
     * 查询Nacos类型引擎实例副本信息
     */
    async DescribeNacosReplicas(req, cb) {
        return this.request("DescribeNacosReplicas", req, cb);
    }
    /**
     * 获取云原生网关服务健康检查配置
     */
    async DescribeUpstreamHealthCheckConfig(req, cb) {
        return this.request("DescribeUpstreamHealthCheckConfig", req, cb);
    }
    /**
     * 查询网关服务来源实例列表
     */
    async DescribeNativeGatewayServiceSources(req, cb) {
        return this.request("DescribeNativeGatewayServiceSources", req, cb);
    }
    /**
     * 根据公网IP查询云原生网关实例信息
     */
    async DescribeCloudNativeAPIGatewayInfoByIp(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayInfoByIp", req, cb);
    }
    /**
     * 修改云原生API网关实例分组基础信息
     */
    async ModifyNativeGatewayServerGroup(req, cb) {
        return this.request("ModifyNativeGatewayServerGroup", req, cb);
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
     * 创建网关服务来源
     */
    async CreateNativeGatewayServiceSource(req, cb) {
        return this.request("CreateNativeGatewayServiceSource", req, cb);
    }
    /**
     * 重启微服务引擎实例
     */
    async RestartSREInstance(req, cb) {
        return this.request("RestartSREInstance", req, cb);
    }
    /**
     * 创建治理中心服务别名
     */
    async CreateGovernanceAlias(req, cb) {
        return this.request("CreateGovernanceAlias", req, cb);
    }
    /**
     * 查询服务实例
     */
    async DescribeGovernanceInstances(req, cb) {
        return this.request("DescribeGovernanceInstances", req, cb);
    }
    /**
     * 查询治理中心服务列表
     */
    async DescribeGovernanceServices(req, cb) {
        return this.request("DescribeGovernanceServices", req, cb);
    }
    /**
     * 删除云原生网关的灰度规则
     */
    async DeleteCloudNativeAPIGatewayCanaryRule(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayCanaryRule", req, cb);
    }
    /**
     * 获取云原生网关节点列表
     */
    async DescribeCloudNativeAPIGatewayNodes(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayNodes", req, cb);
    }
    /**
     * 弹性伸缩策略批量解绑网关分组
     */
    async UnbindAutoScalerResourceStrategyFromGroups(req, cb) {
        return this.request("UnbindAutoScalerResourceStrategyFromGroups", req, cb);
    }
    /**
     * 查询某个配置所有版本信息
     */
    async DescribeConfigFileReleaseVersions(req, cb) {
        return this.request("DescribeConfigFileReleaseVersions", req, cb);
    }
    /**
     * 用于查询引擎实例列表
     */
    async DescribeSREInstances(req, cb) {
        return this.request("DescribeSREInstances", req, cb);
    }
    /**
     * 根据group查询配置文件列表
     */
    async DescribeConfigFilesByGroup(req, cb) {
        return this.request("DescribeConfigFilesByGroup", req, cb);
    }
    /**
     * 获取 WAF 防护状态
     */
    async DescribeWafProtection(req, cb) {
        return this.request("DescribeWafProtection", req, cb);
    }
    /**
     * 获取云原生API网关实例网络配置信息
     */
    async DescribeCloudNativeAPIGatewayConfig(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayConfig", req, cb);
    }
    /**
     * 创建治理中心命名空间
     */
    async CreateGovernanceNamespaces(req, cb) {
        return this.request("CreateGovernanceNamespaces", req, cb);
    }
    /**
     * 查询服务下契约版本列表
     */
    async DescribeGovernanceServiceContractVersions(req, cb) {
        return this.request("DescribeGovernanceServiceContractVersions", req, cb);
    }
    /**
     * 更新网关上游实例列表，仅支持IPList服务类型
     */
    async UpdateUpstreamTargets(req, cb) {
        return this.request("UpdateUpstreamTargets", req, cb);
    }
    /**
     * 开启 WAF 防护
     */
    async OpenWafProtection(req, cb) {
        return this.request("OpenWafProtection", req, cb);
    }
    /**
     * 修改云原生网关的灰度规则
     */
    async ModifyCloudNativeAPIGatewayCanaryRule(req, cb) {
        return this.request("ModifyCloudNativeAPIGatewayCanaryRule", req, cb);
    }
    /**
     * 创建云原生网关服务
     */
    async CreateCloudNativeAPIGatewayService(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayService", req, cb);
    }
    /**
     * 删除云原生API网关实例
     */
    async DeleteCloudNativeAPIGateway(req, cb) {
        return this.request("DeleteCloudNativeAPIGateway", req, cb);
    }
    /**
     * 修改治理中心命名空间
     */
    async ModifyGovernanceNamespaces(req, cb) {
        return this.request("ModifyGovernanceNamespaces", req, cb);
    }
    /**
     * 查询云原生API网关实例公网详情
     */
    async DescribePublicNetwork(req, cb) {
        return this.request("DescribePublicNetwork", req, cb);
    }
    /**
     * 创建弹性伸缩策略
     */
    async CreateAutoScalerResourceStrategy(req, cb) {
        return this.request("CreateAutoScalerResourceStrategy", req, cb);
    }
    /**
     * 创建配置文件
     */
    async CreateConfigFile(req, cb) {
        return this.request("CreateConfigFile", req, cb);
    }
    /**
     * 修改云原生API网关实例Kong访问策略，支持白名单或者黑名单。
     */
    async ModifyNetworkAccessStrategy(req, cb) {
        return this.request("ModifyNetworkAccessStrategy", req, cb);
    }
    /**
     * 获取云原生网关服务详情下的Upstream列表
     */
    async DescribeCloudNativeAPIGatewayUpstream(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayUpstream", req, cb);
    }
    /**
     * 创建或更新配置文件并发布配置
     */
    async CreateOrUpdateConfigFileAndRelease(req, cb) {
        return this.request("CreateOrUpdateConfigFileAndRelease", req, cb);
    }
    /**
     * 修改治理中心服务别名
     */
    async ModifyGovernanceAlias(req, cb) {
        return this.request("ModifyGovernanceAlias", req, cb);
    }
    /**
     * 新建 WAF 防护域名
     */
    async CreateWafDomains(req, cb) {
        return this.request("CreateWafDomains", req, cb);
    }
    /**
     * 批量修改配置文件组
     */
    async ModifyConfigFileGroup(req, cb) {
        return this.request("ModifyConfigFileGroup", req, cb);
    }
    /**
     * 回滚配置发布
     */
    async RollbackConfigFileReleases(req, cb) {
        return this.request("RollbackConfigFileReleases", req, cb);
    }
    /**
     * 创建引擎实例
     */
    async CreateEngine(req, cb) {
        return this.request("CreateEngine", req, cb);
    }
    /**
     * 修改云原生网关上游实例节点健康状态
     */
    async ModifyUpstreamNodeStatus(req, cb) {
        return this.request("ModifyUpstreamNodeStatus", req, cb);
    }
    /**
     * 弹性伸缩策略批量绑定网关分组
     */
    async BindAutoScalerResourceStrategyToGroups(req, cb) {
        return this.request("BindAutoScalerResourceStrategyToGroups", req, cb);
    }
    /**
     * 创建云原生网关限流插件(路由)
     */
    async CreateCloudNativeAPIGatewayRouteRateLimit(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayRouteRateLimit", req, cb);
    }
    /**
     * 删除 WAF 防护域名
     */
    async DeleteWafDomains(req, cb) {
        return this.request("DeleteWafDomains", req, cb);
    }
    /**
     * 查询公网地址信息
     */
    async DescribePublicAddressConfig(req, cb) {
        return this.request("DescribePublicAddressConfig", req, cb);
    }
    /**
     * 删除云原生网关服务
     */
    async DeleteCloudNativeAPIGatewayService(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayService", req, cb);
    }
    /**
     * 查询云原生网关路由列表
     */
    async DescribeCloudNativeAPIGatewayRoutes(req, cb) {
        return this.request("DescribeCloudNativeAPIGatewayRoutes", req, cb);
    }
    /**
     * 根据条件分页查询配置文件组
     */
    async DescribeConfigFileGroups(req, cb) {
        return this.request("DescribeConfigFileGroups", req, cb);
    }
    /**
     * 获取云原生API网关实例信息
     */
    async DescribeCloudNativeAPIGateway(req, cb) {
        return this.request("DescribeCloudNativeAPIGateway", req, cb);
    }
    /**
     * 删除云原生网关路由
     */
    async DeleteCloudNativeAPIGatewayRoute(req, cb) {
        return this.request("DeleteCloudNativeAPIGatewayRoute", req, cb);
    }
    /**
     * 创建公网网络配置
     */
    async CreateCloudNativeAPIGatewayPublicNetwork(req, cb) {
        return this.request("CreateCloudNativeAPIGatewayPublicNetwork", req, cb);
    }
    /**
     * 查询nacos服务接口列表
     */
    async DescribeNacosServerInterfaces(req, cb) {
        return this.request("DescribeNacosServerInterfaces", req, cb);
    }
    /**
     * 修改配置文件
     */
    async ModifyConfigFiles(req, cb) {
        return this.request("ModifyConfigFiles", req, cb);
    }
    /**
     * 修改云原生API网关实例的节点规格信息，例如节点扩缩容或者升降配
     */
    async UpdateCloudNativeAPIGatewaySpec(req, cb) {
        return this.request("UpdateCloudNativeAPIGatewaySpec", req, cb);
    }
    /**
     * 创建治理中心服务
     */
    async CreateGovernanceServices(req, cb) {
        return this.request("CreateGovernanceServices", req, cb);
    }
    /**
     * 删除治理中心命名空间
     */
    async DeleteGovernanceNamespaces(req, cb) {
        return this.request("DeleteGovernanceNamespaces", req, cb);
    }
    /**
     * 修改治理中心服务实例
     */
    async ModifyGovernanceInstances(req, cb) {
        return this.request("ModifyGovernanceInstances", req, cb);
    }
    /**
     * 根据命名空间、组名、名称、标签查询配置文件列表
     */
    async DescribeConfigFiles(req, cb) {
        return this.request("DescribeConfigFiles", req, cb);
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
     * 删除网关服务来源实例
     */
    async DeleteNativeGatewayServiceSource(req, cb) {
        return this.request("DeleteNativeGatewayServiceSource", req, cb);
    }
    /**
     * 获取配置文件发布历史列表
     */
    async DescribeConfigFileReleaseHistories(req, cb) {
        return this.request("DescribeConfigFileReleaseHistories", req, cb);
    }
    /**
     * 查询云原生网关分组信息
     */
    async DescribeNativeGatewayServerGroups(req, cb) {
        return this.request("DescribeNativeGatewayServerGroups", req, cb);
    }
    /**
     * 更新云原生网关健康检查配置
     */
    async UpdateUpstreamHealthCheckConfig(req, cb) {
        return this.request("UpdateUpstreamHealthCheckConfig", req, cb);
    }
}
exports.Client = Client;

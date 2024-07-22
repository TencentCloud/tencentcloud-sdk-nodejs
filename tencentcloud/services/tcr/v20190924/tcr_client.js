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
 * tcr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tcr.tencentcloudapi.com", "2019-09-24", clientConfig);
    }
    /**
     * 用于获取个人版全局镜像版本自动清理策略
     */
    async DescribeImageLifecycleGlobalPersonal(req, cb) {
        return this.request("DescribeImageLifecycleGlobalPersonal", req, cb);
    }
    /**
     * 查询从实例列表
     */
    async DescribeReplicationInstances(req, cb) {
        return this.request("DescribeReplicationInstances", req, cb);
    }
    /**
     * 删除实例公网访问白名单策略

注意：当PolicyIndex和CidrBlock同时存在时，CidrBlock优先级更高
     */
    async DeleteSecurityPolicy(req, cb) {
        return this.request("DeleteSecurityPolicy", req, cb);
    }
    /**
     * 用于获取个人版镜像仓库tag列表
     */
    async DescribeImagePersonal(req, cb) {
        return this.request("DescribeImagePersonal", req, cb);
    }
    /**
     * 删除从实例
     */
    async DeleteReplicationInstance(req, cb) {
        return this.request("DeleteReplicationInstance", req, cb);
    }
    /**
     * 用于在企业版中创建命名空间
     */
    async CreateNamespace(req, cb) {
        return this.request("CreateNamespace", req, cb);
    }
    /**
     * 查询镜像仓库列表或指定镜像仓库信息
     */
    async DescribeRepositories(req, cb) {
        return this.request("DescribeRepositories", req, cb);
    }
    /**
     * 管理实例同步
     */
    async ManageReplication(req, cb) {
        return this.request("ManageReplication", req, cb);
    }
    /**
     * 获取触发器日志
     */
    async DescribeWebhookTriggerLog(req, cb) {
        return this.request("DescribeWebhookTriggerLog", req, cb);
    }
    /**
     * 查询容器镜像Manifest信息
     */
    async DescribeImageManifests(req, cb) {
        return this.request("DescribeImageManifests", req, cb);
    }
    /**
     * 用于设置个人版全局镜像版本自动清理策略
     */
    async ManageImageLifecycleGlobalPersonal(req, cb) {
        return this.request("ManageImageLifecycleGlobalPersonal", req, cb);
    }
    /**
     * 创建自定义域名
     */
    async CreateInstanceCustomizedDomain(req, cb) {
        return this.request("CreateInstanceCustomizedDomain", req, cb);
    }
    /**
     *  删除镜像不可变规则
     */
    async DeleteImmutableTagRules(req, cb) {
        return this.request("DeleteImmutableTagRules", req, cb);
    }
    /**
     * 用于在个人版中删除tag
     */
    async DeleteImagePersonal(req, cb) {
        return this.request("DeleteImagePersonal", req, cb);
    }
    /**
     * 创建镜像加速服务
     */
    async CreateImageAccelerationService(req, cb) {
        return this.request("CreateImageAccelerationService", req, cb);
    }
    /**
     * 更新触发器
     */
    async ModifyWebhookTrigger(req, cb) {
        return this.request("ModifyWebhookTrigger", req, cb);
    }
    /**
     * 用于个人版镜像仓库中批量删除镜像仓库
     */
    async BatchDeleteRepositoryPersonal(req, cb) {
        return this.request("BatchDeleteRepositoryPersonal", req, cb);
    }
    /**
     * 删除触发器
     */
    async DeleteWebhookTrigger(req, cb) {
        return this.request("DeleteWebhookTrigger", req, cb);
    }
    /**
     * 查询创建从实例任务状态
     */
    async DescribeReplicationInstanceCreateTasks(req, cb) {
        return this.request("DescribeReplicationInstanceCreateTasks", req, cb);
    }
    /**
     * 删除镜像加速服务
     */
    async DeleteImageAccelerateService(req, cb) {
        return this.request("DeleteImageAccelerateService", req, cb);
    }
    /**
     * 查询个人收藏仓库
     */
    async DescribeFavorRepositoryPersonal(req, cb) {
        return this.request("DescribeFavorRepositoryPersonal", req, cb);
    }
    /**
     * 用于在TCR实例中，创建多个白名单策略
     */
    async CreateMultipleSecurityPolicy(req, cb) {
        return this.request("CreateMultipleSecurityPolicy", req, cb);
    }
    /**
     * 删除服务级账号
     */
    async DeleteServiceAccount(req, cb) {
        return this.request("DeleteServiceAccount", req, cb);
    }
    /**
     * 查询镜像版本保留规则
     */
    async DescribeTagRetentionRules(req, cb) {
        return this.request("DescribeTagRetentionRules", req, cb);
    }
    /**
     * 用于在个人版镜像仓库中复制镜像版本
     */
    async DuplicateImagePersonal(req, cb) {
        return this.request("DuplicateImagePersonal", req, cb);
    }
    /**
     * 创建版本保留规则
     */
    async CreateTagRetentionRule(req, cb) {
        return this.request("CreateTagRetentionRule", req, cb);
    }
    /**
     * 用于删除个人版全局镜像版本自动清理策略
     */
    async DeleteImageLifecycleGlobalPersonal(req, cb) {
        return this.request("DeleteImageLifecycleGlobalPersonal", req, cb);
    }
    /**
     * 查询从实例同步状态
     */
    async DescribeReplicationInstanceSyncStatus(req, cb) {
        return this.request("DescribeReplicationInstanceSyncStatus", req, cb);
    }
    /**
     * 删除共享版命名空间
     */
    async DeleteNamespacePersonal(req, cb) {
        return this.request("DeleteNamespacePersonal", req, cb);
    }
    /**
     * 用于更新个人版镜像仓库的访问属性
     */
    async ModifyRepositoryAccessPersonal(req, cb) {
        return this.request("ModifyRepositoryAccessPersonal", req, cb);
    }
    /**
     * 更新实例信息
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
    /**
     * 用于查询应用更新触发器
     */
    async DescribeApplicationTriggerPersonal(req, cb) {
        return this.request("DescribeApplicationTriggerPersonal", req, cb);
    }
    /**
     * 更新服务级账号密码
     */
    async ModifyServiceAccountPassword(req, cb) {
        return this.request("ModifyServiceAccountPassword", req, cb);
    }
    /**
     * 查询版本保留执行记录
     */
    async DescribeTagRetentionExecution(req, cb) {
        return this.request("DescribeTagRetentionExecution", req, cb);
    }
    /**
     * 删除自定义域名
     */
    async DeleteInstanceCustomizedDomain(req, cb) {
        return this.request("DeleteInstanceCustomizedDomain", req, cb);
    }
    /**
     * GC 最近10条历史
     */
    async DescribeGCJobs(req, cb) {
        return this.request("DescribeGCJobs", req, cb);
    }
    /**
     * 查询镜像加速服务状态
     */
    async DescribeImageAccelerateService(req, cb) {
        return this.request("DescribeImageAccelerateService", req, cb);
    }
    /**
     * 用于在个人版镜像仓库中更新容器镜像描述
     */
    async ModifyRepositoryInfoPersonal(req, cb) {
        return this.request("ModifyRepositoryInfoPersonal", req, cb);
    }
    /**
     * 手动执行版本保留
     */
    async CreateTagRetentionExecution(req, cb) {
        return this.request("CreateTagRetentionExecution", req, cb);
    }
    /**
     * 检查待创建的实例名称是否符合规范
     */
    async CheckInstanceName(req, cb) {
        return this.request("CheckInstanceName", req, cb);
    }
    /**
     * 用于校验企业版实例信息
     */
    async CheckInstance(req, cb) {
        return this.request("CheckInstance", req, cb);
    }
    /**
     * 查询个人版命名空间信息
     */
    async DescribeNamespacePersonal(req, cb) {
        return this.request("DescribeNamespacePersonal", req, cb);
    }
    /**
     * 查询所有有实例命名空间列表
     */
    async DescribeInstanceAllNamespaces(req, cb) {
        return this.request("DescribeInstanceAllNamespaces", req, cb);
    }
    /**
     * 查询个人版仓库信息
     */
    async DescribeRepositoryPersonal(req, cb) {
        return this.request("DescribeRepositoryPersonal", req, cb);
    }
    /**
     * 预付费实例续费，同时支持按量计费转包年包月
     */
    async RenewInstance(req, cb) {
        return this.request("RenewInstance", req, cb);
    }
    /**
     * 创建实例
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 用于在TCR中获取可用区域
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 查询实例公网访问白名单策略
     */
    async DescribeSecurityPolicies(req, cb) {
        return this.request("DescribeSecurityPolicies", req, cb);
    }
    /**
     * 用于在个人版镜像仓库中批量删除Tag
     */
    async BatchDeleteImagePersonal(req, cb) {
        return this.request("BatchDeleteImagePersonal", req, cb);
    }
    /**
     * 创建从实例
     */
    async CreateReplicationInstance(req, cb) {
        return this.request("CreateReplicationInstance", req, cb);
    }
    /**
     * 用于企业版创建镜像仓库
     */
    async CreateRepository(req, cb) {
        return this.request("CreateRepository", req, cb);
    }
    /**
     * 管理实例公网访问
     */
    async ManageExternalEndpoint(req, cb) {
        return this.request("ManageExternalEndpoint", req, cb);
    }
    /**
     * 更新实例公网访问白名单
     */
    async ModifySecurityPolicy(req, cb) {
        return this.request("ModifySecurityPolicy", req, cb);
    }
    /**
     * 查询版本保留执行任务
     */
    async DescribeTagRetentionExecutionTask(req, cb) {
        return this.request("DescribeTagRetentionExecutionTask", req, cb);
    }
    /**
     * 用于删除实例多个公网访问白名单策略
     */
    async DeleteMultipleSecurityPolicy(req, cb) {
        return this.request("DeleteMultipleSecurityPolicy", req, cb);
    }
    /**
     * 用于获取个人版仓库中自动清理策略
     */
    async DescribeImageLifecyclePersonal(req, cb) {
        return this.request("DescribeImageLifecyclePersonal", req, cb);
    }
    /**
     * 用于在个人版镜像仓库中，获取满足输入搜索条件的用户镜像仓库
     */
    async DescribeRepositoryFilterPersonal(req, cb) {
        return this.request("DescribeRepositoryFilterPersonal", req, cb);
    }
    /**
     * 创建个人用户
     */
    async CreateUserPersonal(req, cb) {
        return this.request("CreateUserPersonal", req, cb);
    }
    /**
     * 查询实例自定义域名列表
     */
    async DescribeInstanceCustomizedDomain(req, cb) {
        return this.request("DescribeInstanceCustomizedDomain", req, cb);
    }
    /**
     * 更新命名空间信息
     */
    async ModifyNamespace(req, cb) {
        return this.request("ModifyNamespace", req, cb);
    }
    /**
     * 列出镜像不可变规则
     */
    async DescribeImmutableTagRules(req, cb) {
        return this.request("DescribeImmutableTagRules", req, cb);
    }
    /**
     * 创建实例公网访问白名单策略
     */
    async CreateSecurityPolicy(req, cb) {
        return this.request("CreateSecurityPolicy", req, cb);
    }
    /**
     * 创建镜像签名策略
     */
    async CreateSignaturePolicy(req, cb) {
        return this.request("CreateSignaturePolicy", req, cb);
    }
    /**
     * 删除镜像仓库企业版实例
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 更新镜像仓库信息，可修改仓库描述信息
     */
    async ModifyRepository(req, cb) {
        return this.request("ModifyRepository", req, cb);
    }
    /**
     * 用于在企业版中返回Chart的下载信息
     */
    async DescribeChartDownloadInfo(req, cb) {
        return this.request("DescribeChartDownloadInfo", req, cb);
    }
    /**
     * 更新服务级账号
     */
    async ModifyServiceAccount(req, cb) {
        return this.request("ModifyServiceAccount", req, cb);
    }
    /**
     * 查询个人用户配额
     */
    async DescribeUserQuotaPersonal(req, cb) {
        return this.request("DescribeUserQuotaPersonal", req, cb);
    }
    /**
     * 创建镜像不可变规则
     */
    async CreateImmutableTagRules(req, cb) {
        return this.request("CreateImmutableTagRules", req, cb);
    }
    /**
     * 用于企业版批量删除Repository Tag
     */
    async DeleteRepositoryTags(req, cb) {
        return this.request("DeleteRepositoryTags", req, cb);
    }
    /**
     * 查询长期访问凭证信息
     */
    async DescribeInstanceToken(req, cb) {
        return this.request("DescribeInstanceToken", req, cb);
    }
    /**
     * 用于在TCR中下载helm chart
     */
    async DownloadHelmChart(req, cb) {
        return this.request("DownloadHelmChart", req, cb);
    }
    /**
     * 更新镜像不可变规则
     */
    async ModifyImmutableTagRules(req, cb) {
        return this.request("ModifyImmutableTagRules", req, cb);
    }
    /**
     * 用于删除应用更新触发器
     */
    async DeleteApplicationTriggerPersonal(req, cb) {
        return this.request("DeleteApplicationTriggerPersonal", req, cb);
    }
    /**
     * 创建tcr内网私有域名解析
     */
    async CreateInternalEndpointDns(req, cb) {
        return this.request("CreateInternalEndpointDns", req, cb);
    }
    /**
     * 更新实例内指定长期访问凭证的启用状态
     */
    async ModifyInstanceToken(req, cb) {
        return this.request("ModifyInstanceToken", req, cb);
    }
    /**
     * 创建触发器
     */
    async CreateWebhookTrigger(req, cb) {
        return this.request("CreateWebhookTrigger", req, cb);
    }
    /**
     * 用于创建应用更新触发器
     */
    async CreateApplicationTriggerPersonal(req, cb) {
        return this.request("CreateApplicationTriggerPersonal", req, cb);
    }
    /**
     * 用于判断个人版仓库是否存在
     */
    async ValidateRepositoryExistPersonal(req, cb) {
        return this.request("ValidateRepositoryExistPersonal", req, cb);
    }
    /**
     * 用于修改应用更新触发器
     */
    async ModifyApplicationTriggerPersonal(req, cb) {
        return this.request("ModifyApplicationTriggerPersonal", req, cb);
    }
    /**
     * 查询命名空间列表或指定命名空间信息
     */
    async DescribeNamespaces(req, cb) {
        return this.request("DescribeNamespaces", req, cb);
    }
    /**
     * 查询服务级账号
     */
    async DescribeServiceAccounts(req, cb) {
        return this.request("DescribeServiceAccounts", req, cb);
    }
    /**
     * 为一个镜像版本创建签名
     */
    async CreateSignature(req, cb) {
        return this.request("CreateSignature", req, cb);
    }
    /**
     * 删除tcr内网私有域名解析
     */
    async DeleteInternalEndpointDns(req, cb) {
        return this.request("DeleteInternalEndpointDns", req, cb);
    }
    /**
     * 更新版本保留规则
     */
    async ModifyTagRetentionRule(req, cb) {
        return this.request("ModifyTagRetentionRule", req, cb);
    }
    /**
     * 用于在个人版中查询与指定tag镜像内容相同的tag列表
     */
    async DescribeImageFilterPersonal(req, cb) {
        return this.request("DescribeImageFilterPersonal", req, cb);
    }
    /**
     * 删除镜像仓库
     */
    async DeleteRepository(req, cb) {
        return this.request("DeleteRepository", req, cb);
    }
    /**
     * 用于在个人版中获取用户全部的镜像仓库列表
     */
    async DescribeRepositoryOwnerPersonal(req, cb) {
        return this.request("DescribeRepositoryOwnerPersonal", req, cb);
    }
    /**
     * 查询镜像版本列表或指定容器镜像信息
     */
    async DescribeImages(req, cb) {
        return this.request("DescribeImages", req, cb);
    }
    /**
     * 删除版本保留规则
     */
    async DeleteTagRetentionRule(req, cb) {
        return this.request("DeleteTagRetentionRule", req, cb);
    }
    /**
     * 删除命名空间
     */
    async DeleteNamespace(req, cb) {
        return this.request("DeleteNamespace", req, cb);
    }
    /**
     * 删除命名空间加签策略
     */
    async DeleteSignaturePolicy(req, cb) {
        return this.request("DeleteSignaturePolicy", req, cb);
    }
    /**
     * 创建服务级账户
     */
    async CreateServiceAccount(req, cb) {
        return this.request("CreateServiceAccount", req, cb);
    }
    /**
     * 查询实例信息
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 用于个人版镜像仓库中删除
     */
    async DeleteRepositoryPersonal(req, cb) {
        return this.request("DeleteRepositoryPersonal", req, cb);
    }
    /**
     * 用于查询应用更新触发器触发日志
     */
    async DescribeApplicationTriggerLogPersonal(req, cb) {
        return this.request("DescribeApplicationTriggerLogPersonal", req, cb);
    }
    /**
     * 删除长期访问凭证
     */
    async DeleteInstanceToken(req, cb) {
        return this.request("DeleteInstanceToken", req, cb);
    }
    /**
     * 修改个人用户登录密码
     */
    async ModifyUserPasswordPersonal(req, cb) {
        return this.request("ModifyUserPasswordPersonal", req, cb);
    }
    /**
     * 查询触发器
     */
    async DescribeWebhookTrigger(req, cb) {
        return this.request("DescribeWebhookTrigger", req, cb);
    }
    /**
     * 管理实例内网访问VPC链接
     */
    async ManageInternalEndpoint(req, cb) {
        return this.request("ManageInternalEndpoint", req, cb);
    }
    /**
     * 用于在企业版镜像仓库中复制镜像版本
     */
    async DuplicateImage(req, cb) {
        return this.request("DuplicateImage", req, cb);
    }
    /**
     * 查询实例当前状态以及过程信息
     */
    async DescribeInstanceStatus(req, cb) {
        return this.request("DescribeInstanceStatus", req, cb);
    }
    /**
     * 用于在个人版仓库中创建镜像仓库
     */
    async CreateRepositoryPersonal(req, cb) {
        return this.request("CreateRepositoryPersonal", req, cb);
    }
    /**
     * 删除指定镜像
     */
    async DeleteImage(req, cb) {
        return this.request("DeleteImage", req, cb);
    }
    /**
     * 查询个人版用户命名空间是否存在
     */
    async ValidateNamespaceExistPersonal(req, cb) {
        return this.request("ValidateNamespaceExistPersonal", req, cb);
    }
    /**
     * 创建个人版镜像仓库命名空间，此命名空间全局唯一
     */
    async CreateNamespacePersonal(req, cb) {
        return this.request("CreateNamespacePersonal", req, cb);
    }
    /**
     * 查询实例公网访问入口状态
     */
    async DescribeExternalEndpointStatus(req, cb) {
        return this.request("DescribeExternalEndpointStatus", req, cb);
    }
    /**
     * 查询实例内网访问VPC链接
     */
    async DescribeInternalEndpoints(req, cb) {
        return this.request("DescribeInternalEndpoints", req, cb);
    }
    /**
     * 批量查询vpc是否已经添加私有域名解析
     */
    async DescribeInternalEndpointDnsStatus(req, cb) {
        return this.request("DescribeInternalEndpointDnsStatus", req, cb);
    }
    /**
     * 创建实例的临时或长期访问凭证
     */
    async CreateInstanceToken(req, cb) {
        return this.request("CreateInstanceToken", req, cb);
    }
}
exports.Client = Client;

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
 * tsf client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tsf.tencentcloudapi.com", "2018-03-26", clientConfig);
    }
    /**
     * 创建任务
     */
    async CreateTask(req, cb) {
        return this.request("CreateTask", req, cb);
    }
    /**
     * 删除公共配置项
     */
    async DeletePublicConfig(req, cb) {
        return this.request("DeletePublicConfig", req, cb);
    }
    /**
     * 查询配置
     */
    async DescribeConfig(req, cb) {
        return this.request("DescribeConfig", req, cb);
    }
    /**
     * 获取微服务列表
     */
    async DescribeMicroservices(req, cb) {
        return this.request("DescribeMicroservices", req, cb);
    }
    /**
     * 修改容器部署组实例数
     */
    async ModifyContainerReplicas(req, cb) {
        return this.request("ModifyContainerReplicas", req, cb);
    }
    /**
     * 虚拟机部署组下线实例
     */
    async ShrinkInstances(req, cb) {
        return this.request("ShrinkInstances", req, cb);
    }
    /**
     * 禁用单元化规则
     */
    async DisableUnitRule(req, cb) {
        return this.request("DisableUnitRule", req, cb);
    }
    /**
     * 获取部署组实例列表
     */
    async DescribePodInstances(req, cb) {
        return this.request("DescribePodInstances", req, cb);
    }
    /**
     * 创建配置项，返回详细信息
     */
    async CreateConfigWithDetailResp(req, cb) {
        return this.request("CreateConfigWithDetailResp", req, cb);
    }
    /**
     * 创建命名空间
     */
    async CreateNamespace(req, cb) {
        return this.request("CreateNamespace", req, cb);
    }
    /**
     * 添加云主机节点至TSF集群
     */
    async AddClusterInstances(req, cb) {
        return this.request("AddClusterInstances", req, cb);
    }
    /**
     * 删除泳道规则
     */
    async DeleteLaneRule(req, cb) {
        return this.request("DeleteLaneRule", req, cb);
    }
    /**
     * 删除集群
     */
    async DeleteCluster(req, cb) {
        return this.request("DeleteCluster", req, cb);
    }
    /**
     * 重新执行工作流批次
     */
    async RedoTaskFlowBatch(req, cb) {
        return this.request("RedoTaskFlowBatch", req, cb);
    }
    /**
     * 查询公共配置汇总列表
     */
    async DescribePublicConfigSummary(req, cb) {
        return this.request("DescribePublicConfigSummary", req, cb);
    }
    /**
     * 容器部署组列表
     */
    async DescribeContainerGroups(req, cb) {
        return this.request("DescribeContainerGroups", req, cb);
    }
    /**
     * 获取部署组其他属性
     */
    async DescribeGroupAttribute(req, cb) {
        return this.request("DescribeGroupAttribute", req, cb);
    }
    /**
     * 创建文件配置项，返回详细信息
     */
    async CreateFileConfigWithDetailResp(req, cb) {
        return this.request("CreateFileConfigWithDetailResp", req, cb);
    }
    /**
     * 创建参数模板
     */
    async CreateConfigTemplate(req, cb) {
        return this.request("CreateConfigTemplate", req, cb);
    }
    /**
     * 查询服务API列表
     */
    async DescribeMsApiList(req, cb) {
        return this.request("DescribeMsApiList", req, cb);
    }
    /**
     * 撤回已发布的公共配置
     */
    async RevocationPublicConfig(req, cb) {
        return this.request("RevocationPublicConfig", req, cb);
    }
    /**
     * 创建集群
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 服务调用监控统计概览
     */
    async DescribeOverviewInvocation(req, cb) {
        return this.request("DescribeOverviewInvocation", req, cb);
    }
    /**
     * 停止正在某个节点上执行的任务
     */
    async StopTaskExecute(req, cb) {
        return this.request("StopTaskExecute", req, cb);
    }
    /**
     * 查询任务详情
     */
    async DescribeTaskDetail(req, cb) {
        return this.request("DescribeTaskDetail", req, cb);
    }
    /**
     * 修改集群信息
     */
    async ModifyCluster(req, cb) {
        return this.request("ModifyCluster", req, cb);
    }
    /**
     * 容器部署组详情（已废弃，请使用  DescribeContainerGroupDeployInfo）
     */
    async DescribeContainerGroupDetail(req, cb) {
        return this.request("DescribeContainerGroupDetail", req, cb);
    }
    /**
     * 启用单元化规则
     */
    async EnableUnitRule(req, cb) {
        return this.request("EnableUnitRule", req, cb);
    }
    /**
     * 回滚配置
     */
    async RollbackConfig(req, cb) {
        return this.request("RollbackConfig", req, cb);
    }
    /**
     * 镜像版本列表
     */
    async DescribeImageTags(req, cb) {
        return this.request("DescribeImageTags", req, cb);
    }
    /**
     * 查询文件配置项列表
     */
    async DescribeFileConfigs(req, cb) {
        return this.request("DescribeFileConfigs", req, cb);
    }
    /**
     * 创建参数模板，并返回模板详细信息
     */
    async CreateConfigTemplateWithDetailResp(req, cb) {
        return this.request("CreateConfigTemplateWithDetailResp", req, cb);
    }
    /**
     * 查询简单集群列表
     */
    async DescribeSimpleClusters(req, cb) {
        return this.request("DescribeSimpleClusters", req, cb);
    }
    /**
     * 查询API详情
     */
    async DescribeApiDetail(req, cb) {
        return this.request("DescribeApiDetail", req, cb);
    }
    /**
     * 撤回已发布的文件配置
     */
    async RevokeFileConfig(req, cb) {
        return this.request("RevokeFileConfig", req, cb);
    }
    /**
     * 获取单个投递项配置信息
     */
    async DescribeDeliveryConfig(req, cb) {
        return this.request("DescribeDeliveryConfig", req, cb);
    }
    /**
     * 查询某个插件下绑定或未绑定的API分组
     */
    async DescribeGroupsWithPlugin(req, cb) {
        return this.request("DescribeGroupsWithPlugin", req, cb);
    }
    /**
     * 启用泳道规则
     */
    async EnableLaneRule(req, cb) {
        return this.request("EnableLaneRule", req, cb);
    }
    /**
     * 禁用单元化路由
     */
    async DisableUnitRoute(req, cb) {
        return this.request("DisableUnitRoute", req, cb);
    }
    /**
     * 取消关联业务日志配置项和应用
     */
    async DisassociateBusinessLogConfig(req, cb) {
        return this.request("DisassociateBusinessLogConfig", req, cb);
    }
    /**
     * 创建配置项
     */
    async CreateConfig(req, cb) {
        return this.request("CreateConfig", req, cb);
    }
    /**
     * 新增微服务
     */
    async CreateMicroservice(req, cb) {
        return this.request("CreateMicroservice", req, cb);
    }
    /**
     * 批量删除镜像版本
     */
    async DeleteImageTags(req, cb) {
        return this.request("DeleteImageTags", req, cb);
    }
    /**
     * TSF上传的程序包存放在腾讯云对象存储（COS）中，通过该API可以获取从COS下载程序包需要的信息，包括包所在的桶、存储路径、鉴权信息等，之后使用COS API（或SDK）进行下载。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     */
    async DescribeDownloadInfo(req, cb) {
        return this.request("DescribeDownloadInfo", req, cb);
    }
    /**
     * 获取应用列表
     */
    async DescribeApplications(req, cb) {
        return this.request("DescribeApplications", req, cb);
    }
    /**
     * 创建路径重写，并返回路径重写规则信息
     */
    async CreatePathRewritesWithDetailResp(req, cb) {
        return this.request("CreatePathRewritesWithDetailResp", req, cb);
    }
    /**
     * 获取部署组详情
     */
    async DescribeContainerGroupDeployInfo(req, cb) {
        return this.request("DescribeContainerGroupDeployInfo", req, cb);
    }
    /**
     * 查询网关API监控明细数据（仅单元化网关），非单元化网关使用DescribeApiUseDetail
     */
    async DescribeUnitApiUseDetail(req, cb) {
        return this.request("DescribeUnitApiUseDetail", req, cb);
    }
    /**
     * 插件与网关分组/API批量绑定
     */
    async BindPlugin(req, cb) {
        return this.request("BindPlugin", req, cb);
    }
    /**
     * 查询某个API分组已绑定的网关部署组信息列表
     */
    async DescribeGroupBindedGateways(req, cb) {
        return this.request("DescribeGroupBindedGateways", req, cb);
    }
    /**
     * 删除单元化规则
     */
    async DeleteUnitRule(req, cb) {
        return this.request("DeleteUnitRule", req, cb);
    }
    /**
     * 获取应用详情
     */
    async DescribeApplication(req, cb) {
        return this.request("DescribeApplication", req, cb);
    }
    /**
     * 更新单元化规则
     */
    async UpdateUnitRule(req, cb) {
        return this.request("UpdateUnitRule", req, cb);
    }
    /**
     * 创建单元化规则
     */
    async CreateUnitRule(req, cb) {
        return this.request("CreateUnitRule", req, cb);
    }
    /**
     * 更新仓库信息
     */
    async UpdateRepository(req, cb) {
        return this.request("UpdateRepository", req, cb);
    }
    /**
     * 查询可用于被导入的命名空间列表
     */
    async DescribeUsableUnitNamespaces(req, cb) {
        return this.request("DescribeUsableUnitNamespaces", req, cb);
    }
    /**
     * 查询网关分组监控明细数据
     */
    async DescribeGroupUseDetail(req, cb) {
        return this.request("DescribeGroupUseDetail", req, cb);
    }
    /**
     * 查询镜像仓库列表
     */
    async DescribeImageRepository(req, cb) {
        return this.request("DescribeImageRepository", req, cb);
    }
    /**
     * 后端服务已经删除这个接口,  API 接口下线处理

重关联业务日志配置
     */
    async ReassociateBusinessLogConfig(req, cb) {
        return this.request("ReassociateBusinessLogConfig", req, cb);
    }
    /**
     * 批量更新API超时
     */
    async UpdateApiTimeouts(req, cb) {
        return this.request("UpdateApiTimeouts", req, cb);
    }
    /**
     * 批量创建单元化命名空间
     */
    async CreateUnitNamespaces(req, cb) {
        return this.request("CreateUnitNamespaces", req, cb);
    }
    /**
     * 更新健康检查配置
     */
    async UpdateHealthCheckSettings(req, cb) {
        return this.request("UpdateHealthCheckSettings", req, cb);
    }
    /**
     * 翻页查询任务列表
     */
    async DescribeTaskRecords(req, cb) {
        return this.request("DescribeTaskRecords", req, cb);
    }
    /**
     * 手动执行一次任务
     */
    async ExecuteTask(req, cb) {
        return this.request("ExecuteTask", req, cb);
    }
    /**
     * 批量导入API至api分组(也支持新建API到分组)
     */
    async CreateGatewayApi(req, cb) {
        return this.request("CreateGatewayApi", req, cb);
    }
    /**
     * 查询简单命名空间列表
     */
    async DescribeSimpleNamespaces(req, cb) {
        return this.request("DescribeSimpleNamespaces", req, cb);
    }
    /**
     * 创建API限流规则
     */
    async CreateApiRateLimitRule(req, cb) {
        return this.request("CreateApiRateLimitRule", req, cb);
    }
    /**
     * 删除微服务
     */
    async DeleteMicroservice(req, cb) {
        return this.request("DeleteMicroservice", req, cb);
    }
    /**
     * 删除文件配置项
     */
    async DeleteFileConfig(req, cb) {
        return this.request("DeleteFileConfig", req, cb);
    }
    /**
     * 停止容器部署组
     */
    async StopContainerGroup(req, cb) {
        return this.request("StopContainerGroup", req, cb);
    }
    /**
     * 查询分组管理日志配置列表
     */
    async DescribeGroupBusinessLogConfigs(req, cb) {
        return this.request("DescribeGroupBusinessLogConfigs", req, cb);
    }
    /**
     * 查询部署组相关的发布信息
     */
    async DescribeGroupRelease(req, cb) {
        return this.request("DescribeGroupRelease", req, cb);
    }
    /**
     * 查询一键导入API分组任务的状态
     */
    async DescribeCreateGatewayApiStatus(req, cb) {
        return this.request("DescribeCreateGatewayApiStatus", req, cb);
    }
    /**
     * 查询单值指标维度
     */
    async DescribeInvocationMetricDataPoint(req, cb) {
        return this.request("DescribeInvocationMetricDataPoint", req, cb);
    }
    /**
     * 修改任务
     */
    async ModifyTask(req, cb) {
        return this.request("ModifyTask", req, cb);
    }
    /**
     * 更新API限流规则
     */
    async UpdateApiRateLimitRule(req, cb) {
        return this.request("UpdateApiRateLimitRule", req, cb);
    }
    /**
     * 分页查询网关分组/API绑定（或未绑定）的插件列表
     */
    async DescribePluginInstances(req, cb) {
        return this.request("DescribePluginInstances", req, cb);
    }
    /**
     * API分组批量与网关解绑
     */
    async UnbindApiGroup(req, cb) {
        return this.request("UnbindApiGroup", req, cb);
    }
    /**
     * 查询虚拟机部署组云主机列表
     */
    async DescribeGroupInstances(req, cb) {
        return this.request("DescribeGroupInstances", req, cb);
    }
    /**
     * 创建泳道规则
     */
    async CreateLaneRule(req, cb) {
        return this.request("CreateLaneRule", req, cb);
    }
    /**
     * 删除容器部署组
     */
    async DeleteContainerGroup(req, cb) {
        return this.request("DeleteContainerGroup", req, cb);
    }
    /**
     * 查询API 分组信息列表
     */
    async DescribeApiGroups(req, cb) {
        return this.request("DescribeApiGroups", req, cb);
    }
    /**
     * 获取集群列表
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 查询日志配置项列表
     */
    async DescribeBusinessLogConfigs(req, cb) {
        return this.request("DescribeBusinessLogConfigs", req, cb);
    }
    /**
     * 查询单元化规则列表V2
     */
    async DescribeUnitRulesV2(req, cb) {
        return this.request("DescribeUnitRulesV2", req, cb);
    }
    /**
     * 创建公共配置项，并返回配置项详细信息
     */
    async CreatePublicConfigWithDetailResp(req, cb) {
        return this.request("CreatePublicConfigWithDetailResp", req, cb);
    }
    /**
     * 创建单元化规则, 并返回详细信息
     */
    async CreateUnitRuleWithDetailResp(req, cb) {
        return this.request("CreateUnitRuleWithDetailResp", req, cb);
    }
    /**
     * 发布配置
     */
    async ReleaseConfig(req, cb) {
        return this.request("ReleaseConfig", req, cb);
    }
    /**
     * 停止一个工作流批次
     */
    async TerminateTaskFlowBatch(req, cb) {
        return this.request("TerminateTaskFlowBatch", req, cb);
    }
    /**
     * 批量更新API限流规则
     */
    async UpdateApiRateLimitRules(req, cb) {
        return this.request("UpdateApiRateLimitRules", req, cb);
    }
    /**
     * 获取虚拟机部署组列表
     */
    async DescribeGroups(req, cb) {
        return this.request("DescribeGroups", req, cb);
    }
    /**
     * 查询文件配置项发布信息
     */
    async DescribeFileConfigReleases(req, cb) {
        return this.request("DescribeFileConfigReleases", req, cb);
    }
    /**
     * 查询仓库列表
     */
    async DescribeRepositories(req, cb) {
        return this.request("DescribeRepositories", req, cb);
    }
    /**
     * 停用工作流
     */
    async DisableTaskFlow(req, cb) {
        return this.request("DisableTaskFlow", req, cb);
    }
    /**
     * 一键导入API分组
     */
    async CreateAllGatewayApiAsync(req, cb) {
        return this.request("CreateAllGatewayApiAsync", req, cb);
    }
    /**
     * 创建仓库
     */
    async CreateRepository(req, cb) {
        return this.request("CreateRepository", req, cb);
    }
    /**
     * 查询集群实例
     */
    async DescribeClusterInstances(req, cb) {
        return this.request("DescribeClusterInstances", req, cb);
    }
    /**
     * 创建公共配置项
     */
    async CreatePublicConfig(req, cb) {
        return this.request("CreatePublicConfig", req, cb);
    }
    /**
     * 网关与API分组批量绑定
     */
    async BindApiGroup(req, cb) {
        return this.request("BindApiGroup", req, cb);
    }
    /**
     * 废弃
     */
    async DescribeInovcationIndicators(req, cb) {
        return this.request("DescribeInovcationIndicators", req, cb);
    }
    /**
     * 用部署组id获取绑定信息
     */
    async DescribeDeliveryConfigByGroupId(req, cb) {
        return this.request("DescribeDeliveryConfigByGroupId", req, cb);
    }
    /**
     * 查询简单部署组列表
     */
    async DescribeSimpleGroups(req, cb) {
        return this.request("DescribeSimpleGroups", req, cb);
    }
    /**
     * 查询配置项列表
     */
    async DescribeConfigs(req, cb) {
        return this.request("DescribeConfigs", req, cb);
    }
    /**
     * 服务统计页面：接口和服务维度
     */
    async DescribeStatistics(req, cb) {
        return this.request("DescribeStatistics", req, cb);
    }
    /**
     * 删除模板
     */
    async DeleteConfigTemplate(req, cb) {
        return this.request("DeleteConfigTemplate", req, cb);
    }
    /**
     * 发布文件配置
     */
    async ReleaseFileConfig(req, cb) {
        return this.request("ReleaseFileConfig", req, cb);
    }
    /**
     * 删除API限流规则
     */
    async DeleteApiRateLimitRule(req, cb) {
        return this.request("DeleteApiRateLimitRule", req, cb);
    }
    /**
     * 查询某个网关绑定的API 分组信息列表
     */
    async DescribeGroupGateways(req, cb) {
        return this.request("DescribeGroupGateways", req, cb);
    }
    /**
     * 查询单元化命名空间列表
     */
    async DescribeUnitNamespaces(req, cb) {
        return this.request("DescribeUnitNamespaces", req, cb);
    }
    /**
     * 调用该接口和COS的上传接口后，需要调用此接口更新TSF中保存的程序包状态。
调用此接口完成后，才标志上传包流程结束。
     */
    async ModifyUploadInfo(req, cb) {
        return this.request("ModifyUploadInfo", req, cb);
    }
    /**
     * 添加云主机节点至TSF集群
     */
    async AddInstances(req, cb) {
        return this.request("AddInstances", req, cb);
    }
    /**
     * 修改命名空间
     */
    async ModifyNamespace(req, cb) {
        return this.request("ModifyNamespace", req, cb);
    }
    /**
     * 查询配置汇总列表
     */
    async DescribeConfigSummary(req, cb) {
        return this.request("DescribeConfigSummary", req, cb);
    }
    /**
     * 查询调用指标数据散点图
     */
    async DescribeInvocationMetricScatterPlot(req, cb) {
        return this.request("DescribeInvocationMetricScatterPlot", req, cb);
    }
    /**
     * 创建文件配置项
     */
    async CreateFileConfig(req, cb) {
        return this.request("CreateFileConfig", req, cb);
    }
    /**
     * 重新执行任务
     */
    async RedoTask(req, cb) {
        return this.request("RedoTask", req, cb);
    }
    /**
     * 获取部署组其他字段-用于前端并发调用
     */
    async DescribeContainerGroupAttribute(req, cb) {
        return this.request("DescribeContainerGroupAttribute", req, cb);
    }
    /**
     * 无
     */
    async DescribePkgs(req, cb) {
        return this.request("DescribePkgs", req, cb);
    }
    /**
     * 创建API分组
     */
    async CreateApiGroup(req, cb) {
        return this.request("CreateApiGroup", req, cb);
    }
    /**
     * 查询数据集列表
     */
    async DescribePrograms(req, cb) {
        return this.request("DescribePrograms", req, cb);
    }
    /**
     * 查询公共配置（单条）
     */
    async DescribePublicConfig(req, cb) {
        return this.request("DescribePublicConfig", req, cb);
    }
    /**
     * 查询API分组
     */
    async DescribeApiGroup(req, cb) {
        return this.request("DescribeApiGroup", req, cb);
    }
    /**
     * 修改应用
     */
    async ModifyApplication(req, cb) {
        return this.request("ModifyApplication", req, cb);
    }
    /**
     * 删除路径重写
     */
    async DeletePathRewrites(req, cb) {
        return this.request("DeletePathRewrites", req, cb);
    }
    /**
     * 创建虚拟机部署组
     */
    async CreateGroup(req, cb) {
        return this.request("CreateGroup", req, cb);
    }
    /**
     * 查询任务最近一次执行状态
     */
    async DescribeTaskLastStatus(req, cb) {
        return this.request("DescribeTaskLastStatus", req, cb);
    }
    /**
     * 查询业务日志配置项信息
     */
    async DescribeBusinessLogConfig(req, cb) {
        return this.request("DescribeBusinessLogConfig", req, cb);
    }
    /**
     * 查询网关所有分组下Api列表
     */
    async DescribeGatewayAllGroupApis(req, cb) {
        return this.request("DescribeGatewayAllGroupApis", req, cb);
    }
    /**
     * 从软件仓库批量删除程序包。
一次最多支持删除1000个包，数量超过1000，返回UpperDeleteLimit错误。
     */
    async DeletePkgs(req, cb) {
        return this.request("DeletePkgs", req, cb);
    }
    /**
     * 停止执行中的任务批次， 非运行中的任务不可调用。
     */
    async StopTaskBatch(req, cb) {
        return this.request("StopTaskBatch", req, cb);
    }
    /**
     * 查询公共配置项列表
     */
    async DescribePublicConfigs(req, cb) {
        return this.request("DescribePublicConfigs", req, cb);
    }
    /**
     * 导入配置
     */
    async DescribeConfigTemplate(req, cb) {
        return this.request("DescribeConfigTemplate", req, cb);
    }
    /**
     * 取消关联投递信息和部署组
     */
    async DisassociateKafkaConfig(req, cb) {
        return this.request("DisassociateKafkaConfig", req, cb);
    }
    /**
     * 查询调用指标数据变化曲线
     */
    async DescribeInvocationMetricDataCurve(req, cb) {
        return this.request("DescribeInvocationMetricDataCurve", req, cb);
    }
    /**
     * 删除容器部署组
     */
    async DeleteGroup(req, cb) {
        return this.request("DeleteGroup", req, cb);
    }
    /**
     * 从 TSF 集群中批量移除云主机节点
     */
    async RemoveInstances(req, cb) {
        return this.request("RemoveInstances", req, cb);
    }
    /**
     * 绑定解绑tcr仓库
     */
    async OperateApplicationTcrBinding(req, cb) {
        return this.request("OperateApplicationTcrBinding", req, cb);
    }
    /**
     * 虚拟机部署组添加实例
     */
    async ExpandGroup(req, cb) {
        return this.request("ExpandGroup", req, cb);
    }
    /**
     * 删除任务
     */
    async DeleteTask(req, cb) {
        return this.request("DeleteTask", req, cb);
    }
    /**
     * 查询路径重写列表
     */
    async DescribePathRewrites(req, cb) {
        return this.request("DescribePathRewrites", req, cb);
    }
    /**
     * 删除泳道
     */
    async DeleteLane(req, cb) {
        return this.request("DeleteLane", req, cb);
    }
    /**
     * 更新参数模板
     */
    async UpdateConfigTemplate(req, cb) {
        return this.request("UpdateConfigTemplate", req, cb);
    }
    /**
     * 查询配置发布信息
     */
    async DescribeConfigReleases(req, cb) {
        return this.request("DescribeConfigReleases", req, cb);
    }
    /**
     * 创建泳道
     */
    async CreateLane(req, cb) {
        return this.request("CreateLane", req, cb);
    }
    /**
     * 获取容器事件列表
参数限制

- 当类型是 instance 时，GroupId是必填项
     */
    async DescribeContainerEvents(req, cb) {
        return this.request("DescribeContainerEvents", req, cb);
    }
    /**
     * 查询网关监控概览
     */
    async DescribeGatewayMonitorOverview(req, cb) {
        return this.request("DescribeGatewayMonitorOverview", req, cb);
    }
    /**
     * 部署虚拟机部署组应用
     */
    async DeployGroup(req, cb) {
        return this.request("DeployGroup", req, cb);
    }
    /**
     * 获取多个投递项配置
     */
    async DescribeDeliveryConfigs(req, cb) {
        return this.request("DescribeDeliveryConfigs", req, cb);
    }
    /**
     * 更新Api分组
     */
    async UpdateApiGroup(req, cb) {
        return this.request("UpdateApiGroup", req, cb);
    }
    /**
     * 停止虚拟机部署组
     */
    async StopGroup(req, cb) {
        return this.request("StopGroup", req, cb);
    }
    /**
     * 更新泳道信息
     */
    async ModifyLane(req, cb) {
        return this.request("ModifyLane", req, cb);
    }
    /**
     * 启用任务
     */
    async EnableTask(req, cb) {
        return this.request("EnableTask", req, cb);
    }
    /**
     * 新增微服务返回id
     */
    async CreateMicroserviceWithDetailResp(req, cb) {
        return this.request("CreateMicroserviceWithDetailResp", req, cb);
    }
    /**
     * 修改微服务详情
     */
    async ModifyMicroservice(req, cb) {
        return this.request("ModifyMicroservice", req, cb);
    }
    /**
     * 启用工作流
     */
    async EnableTaskFlow(req, cb) {
        return this.request("EnableTaskFlow", req, cb);
    }
    /**
     * 查询单元化规则详情
     */
    async DescribeUnitRule(req, cb) {
        return this.request("DescribeUnitRule", req, cb);
    }
    /**
     * 创建路径重写
     */
    async CreatePathRewrites(req, cb) {
        return this.request("CreatePathRewrites", req, cb);
    }
    /**
     * 删除Api分组
     */
    async DeleteApiGroup(req, cb) {
        return this.request("DeleteApiGroup", req, cb);
    }
    /**
     * 创建应用
     */
    async CreateApplication(req, cb) {
        return this.request("CreateApplication", req, cb);
    }
    /**
     * 修改路径重写
     */
    async ModifyPathRewrite(req, cb) {
        return this.request("ModifyPathRewrite", req, cb);
    }
    /**
     * 重新执行任务批次
     */
    async RedoTaskBatch(req, cb) {
        return this.request("RedoTaskBatch", req, cb);
    }
    /**
     * 发布Api分组
     */
    async ReleaseApiGroup(req, cb) {
        return this.request("ReleaseApiGroup", req, cb);
    }
    /**
     * 关联日志配置项到应用
     */
    async AssociateBusinessLogConfig(req, cb) {
        return this.request("AssociateBusinessLogConfig", req, cb);
    }
    /**
     * 查询公共配置发布历史
     */
    async DescribePublicConfigReleaseLogs(req, cb) {
        return this.request("DescribePublicConfigReleaseLogs", req, cb);
    }
    /**
     * 查询配置发布历史
     */
    async DescribeConfigReleaseLogs(req, cb) {
        return this.request("DescribeConfigReleaseLogs", req, cb);
    }
    /**
     * 查询简单应用列表
     */
    async DescribeSimpleApplications(req, cb) {
        return this.request("DescribeSimpleApplications", req, cb);
    }
    /**
     * 查询路径重写
     */
    async DescribePathRewrite(req, cb) {
        return this.request("DescribePathRewrite", req, cb);
    }
    /**
     * 执行一次工作流
     */
    async ExecuteTaskFlow(req, cb) {
        return this.request("ExecuteTaskFlow", req, cb);
    }
    /**
     * 查询微服务详情
     */
    async DescribeMicroservice(req, cb) {
        return this.request("DescribeMicroservice", req, cb);
    }
    /**
     * serverless 能力已下线。下线对应接口。

删除Serverless部署组
     */
    async DeleteServerlessGroup(req, cb) {
        return this.request("DeleteServerlessGroup", req, cb);
    }
    /**
     * 重新执行在某个节点上执行任务。
     */
    async RedoTaskExecute(req, cb) {
        return this.request("RedoTaskExecute", req, cb);
    }
    /**
     * 查询java实例jvm监控数据,返回数据可选
     */
    async DescribeJvmMonitor(req, cb) {
        return this.request("DescribeJvmMonitor", req, cb);
    }
    /**
     * 查询工作流最新一个批次的状态信息
     */
    async DescribeFlowLastBatchState(req, cb) {
        return this.request("DescribeFlowLastBatchState", req, cb);
    }
    /**
     * 发布配置,并且返回配置 ID
     */
    async ReleaseConfigWithDetailResp(req, cb) {
        return this.request("ReleaseConfigWithDetailResp", req, cb);
    }
    /**
     * 删除仓库
     */
    async DeleteRepository(req, cb) {
        return this.request("DeleteRepository", req, cb);
    }
    /**
     * 停用任务
     */
    async DisableTask(req, cb) {
        return this.request("DisableTask", req, cb);
    }
    /**
     * 启动容器部署组
     */
    async StartContainerGroup(req, cb) {
        return this.request("StartContainerGroup", req, cb);
    }
    /**
     * 业务日志搜索
     */
    async SearchBusinessLog(req, cb) {
        return this.request("SearchBusinessLog", req, cb);
    }
    /**
     * 部署容器应用-更新
     */
    async DeployContainerGroup(req, cb) {
        return this.request("DeployContainerGroup", req, cb);
    }
    /**
     * 更新数据集
     */
    async ModifyProgram(req, cb) {
        return this.request("ModifyProgram", req, cb);
    }
    /**
     * 标准输出日志搜索
     */
    async SearchStdoutLog(req, cb) {
        return this.request("SearchStdoutLog", req, cb);
    }
    /**
     * 批量删除API
     */
    async DeleteGatewayApi(req, cb) {
        return this.request("DeleteGatewayApi", req, cb);
    }
    /**
     * 创建工作流
     */
    async CreateTaskFlow(req, cb) {
        return this.request("CreateTaskFlow", req, cb);
    }
    /**
     * 查询虚拟机部署组详情
     */
    async DescribeGroup(req, cb) {
        return this.request("DescribeGroup", req, cb);
    }
    /**
     * 删除应用
     */
    async DeleteApplication(req, cb) {
        return this.request("DeleteApplication", req, cb);
    }
    /**
     * 查询API限流规则
     */
    async DescribeApiRateLimitRules(req, cb) {
        return this.request("DescribeApiRateLimitRules", req, cb);
    }
    /**
     * 删除命名空间
     */
    async DeleteNamespace(req, cb) {
        return this.request("DeleteNamespace", req, cb);
    }
    /**
     * TSF基本资源信息概览接口
     */
    async DescribeBasicResourceUsage(req, cb) {
        return this.request("DescribeBasicResourceUsage", req, cb);
    }
    /**
     * 删除配置项
     */
    async DeleteConfig(req, cb) {
        return this.request("DeleteConfig", req, cb);
    }
    /**
     * 发布公共配置
     */
    async ReleasePublicConfig(req, cb) {
        return this.request("ReleasePublicConfig", req, cb);
    }
    /**
     * 删除单元化命名空间
     */
    async DeleteUnitNamespaces(req, cb) {
        return this.request("DeleteUnitNamespaces", req, cb);
    }
    /**
     * 无
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 下线Api分组
     */
    async DraftApiGroup(req, cb) {
        return this.request("DraftApiGroup", req, cb);
    }
    /**
     * 禁用泳道规则
     */
    async DisableLaneRule(req, cb) {
        return this.request("DisableLaneRule", req, cb);
    }
    /**
     * 查询API分组下的Api列表信息
     */
    async DescribeGatewayApis(req, cb) {
        return this.request("DescribeGatewayApis", req, cb);
    }
    /**
     * 对执行失败的任务批次执行续跑
     */
    async ContinueRunFailedTaskBatch(req, cb) {
        return this.request("ContinueRunFailedTaskBatch", req, cb);
    }
    /**
     * 查询API 版本
     */
    async DescribeApiVersions(req, cb) {
        return this.request("DescribeApiVersions", req, cb);
    }
    /**
     * 启用或禁用API
     */
    async ChangeApiUsableStatus(req, cb) {
        return this.request("ChangeApiUsableStatus", req, cb);
    }
    /**
     * 更新部署组信息
     */
    async ModifyGroup(req, cb) {
        return this.request("ModifyGroup", req, cb);
    }
    /**
     * （已废弃，请使用 CreateGroup 和 DeployContainerGroup 创建和部署容器部署组）创建容器部署组
     */
    async CreateContainGroup(req, cb) {
        return this.request("CreateContainGroup", req, cb);
    }
    /**
     * 查询生效的单元化规则
     */
    async DescribeEnabledUnitRule(req, cb) {
        return this.request("DescribeEnabledUnitRule", req, cb);
    }
    /**
     * 创建数据集
     */
    async CreateProgram(req, cb) {
        return this.request("CreateProgram", req, cb);
    }
    /**
     * 查询仓库信息
     */
    async DescribeRepository(req, cb) {
        return this.request("DescribeRepository", req, cb);
    }
    /**
     * 查询维度
     */
    async DescribeInvocationMetricDataDimension(req, cb) {
        return this.request("DescribeInvocationMetricDataDimension", req, cb);
    }
    /**
     * 获取应用列表其它字段，如实例数量信息等
     */
    async DescribeApplicationAttribute(req, cb) {
        return this.request("DescribeApplicationAttribute", req, cb);
    }
    /**
     * 撤回已发布的配置
     */
    async RevocationConfig(req, cb) {
        return this.request("RevocationConfig", req, cb);
    }
    /**
     * 查询泳道规则列表
     */
    async DescribeLaneRules(req, cb) {
        return this.request("DescribeLaneRules", req, cb);
    }
    /**
     * 更新泳道规则
     */
    async ModifyLaneRule(req, cb) {
        return this.request("ModifyLaneRule", req, cb);
    }
    /**
     * 查询group发布的配置
     */
    async DescribeReleasedConfig(req, cb) {
        return this.request("DescribeReleasedConfig", req, cb);
    }
    /**
     * 查询公共配置发布信息
     */
    async DescribePublicConfigReleases(req, cb) {
        return this.request("DescribePublicConfigReleases", req, cb);
    }
    /**
     * 关联投递配置到部署组
     */
    async AssociateConfigWithGroup(req, cb) {
        return this.request("AssociateConfigWithGroup", req, cb);
    }
    /**
     * 查询泳道列表
     */
    async DescribeLanes(req, cb) {
        return this.request("DescribeLanes", req, cb);
    }
    /**
     * 查询网关API监控明细数据
     */
    async DescribeApiUseDetail(req, cb) {
        return this.request("DescribeApiUseDetail", req, cb);
    }
    /**
     * TSF会将软件包上传到腾讯云对象存储（COS）。调用此接口获取上传信息，如目标地域，桶，包Id，存储路径，鉴权信息等，之后请使用COS API（或SDK）进行上传。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     */
    async DescribeUploadInfo(req, cb) {
        return this.request("DescribeUploadInfo", req, cb);
    }
    /**
     * 启用单元化路由
     */
    async EnableUnitRoute(req, cb) {
        return this.request("EnableUnitRoute", req, cb);
    }
    /**
     * 更新API
     */
    async UpdateGatewayApi(req, cb) {
        return this.request("UpdateGatewayApi", req, cb);
    }
    /**
     * 创建API限流规则,并返回规则信息
     */
    async CreateApiRateLimitRuleWithDetailResp(req, cb) {
        return this.request("CreateApiRateLimitRuleWithDetailResp", req, cb);
    }
    /**
     * 下线部署组所有机器实例
     */
    async ShrinkGroup(req, cb) {
        return this.request("ShrinkGroup", req, cb);
    }
    /**
     * 资源任务的执行状态描述接口
     */
    async DescribeResourceTaskStatus(req, cb) {
        return this.request("DescribeResourceTaskStatus", req, cb);
    }
    /**
     * 启动分组
     */
    async StartGroup(req, cb) {
        return this.request("StartGroup", req, cb);
    }
    /**
     * 修改容器部署组
     */
    async ModifyContainerGroup(req, cb) {
        return this.request("ModifyContainerGroup", req, cb);
    }
    /**
     * 查询单元化规则列表
     */
    async DescribeUnitRules(req, cb) {
        return this.request("DescribeUnitRules", req, cb);
    }
}
exports.Client = Client;

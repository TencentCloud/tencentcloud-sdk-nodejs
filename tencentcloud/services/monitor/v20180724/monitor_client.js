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
 * monitor client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("monitor.tencentcloudapi.com", "2018-07-24", clientConfig);
    }
    /**
     * 更新 Grafana 告警通道
     */
    async UpdateGrafanaNotificationChannel(req, cb) {
        return this.request("UpdateGrafanaNotificationChannel", req, cb);
    }
    /**
     * 获取告警短信配额
     */
    async DescribeAlarmSmsQuota(req, cb) {
        return this.request("DescribeAlarmSmsQuota", req, cb);
    }
    /**
     * 创建 Prometheus 告警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
    async CreateAlertRule(req, cb) {
        return this.request("CreateAlertRule", req, cb);
    }
    /**
     * 解除TMP实例的集群关联
     */
    async DeletePrometheusClusterAgent(req, cb) {
        return this.request("DeletePrometheusClusterAgent", req, cb);
    }
    /**
     * 获取已绑定对象列表
     */
    async DescribeBindingPolicyObjectList(req, cb) {
        return this.request("DescribeBindingPolicyObjectList", req, cb);
    }
    /**
     * 更新 Prometheus 的告警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
    async UpdateAlertRule(req, cb) {
        return this.request("UpdateAlertRule", req, cb);
    }
    /**
     * 获取资源消耗页概览
     */
    async DescribeMonitorResourceInfo(req, cb) {
        return this.request("DescribeMonitorResourceInfo", req, cb);
    }
    /**
     * 修改2.0实例告警策略
     */
    async ModifyPrometheusAlertPolicy(req, cb) {
        return this.request("ModifyPrometheusAlertPolicy", req, cb);
    }
    /**
     * 查询给定prometheus下的告警分组
     */
    async DescribePrometheusAlertGroups(req, cb) {
        return this.request("DescribePrometheusAlertGroups", req, cb);
    }
    /**
     * 查询Prometheus按量实例用量
     */
    async DescribePrometheusInstanceUsage(req, cb) {
        return this.request("DescribePrometheusInstanceUsage", req, cb);
    }
    /**
     * 修改告警接收人
     */
    async ModifyAlarmReceivers(req, cb) {
        return this.request("ModifyAlarmReceivers", req, cb);
    }
    /**
     * 将告警策略绑定到特定对象
     */
    async BindingPolicyObject(req, cb) {
        return this.request("BindingPolicyObject", req, cb);
    }
    /**
     * 删除Prometheus告警规则分组
     */
    async DeletePrometheusAlertGroups(req, cb) {
        return this.request("DeletePrometheusAlertGroups", req, cb);
    }
    /**
     * 本接口（CreateGrafanaInstance）用于创建 Grafana 包年包月实例，默认基础版、到期自动续费、不可使用代金券。
     */
    async CreateGrafanaInstance(req, cb) {
        return this.request("CreateGrafanaInstance", req, cb);
    }
    /**
     * 创建告警策略
     */
    async CreateAlarmPolicy(req, cb) {
        return this.request("CreateAlarmPolicy", req, cb);
    }
    /**
     * 查询腾讯云可观测平台云产品列表，支持云服务器CVM、云数据库、云消息队列、负载均衡、容器服务、专线等云产品。
     */
    async DescribeProductList(req, cb) {
        return this.request("DescribeProductList", req, cb);
    }
    /**
     * 获取聚合规则列表，包含关联集群内crd资源创建的record rule
     */
    async DescribePrometheusRecordRules(req, cb) {
        return this.request("DescribePrometheusRecordRules", req, cb);
    }
    /**
     * 更新已授权账号的备注、权限信息，会直接覆盖原有的信息，不传则不会更新。
     */
    async UpdateSSOAccount(req, cb) {
        return this.request("UpdateSSOAccount", req, cb);
    }
    /**
     * 获取TMP实例关联集群列表
     */
    async DescribePrometheusClusterAgents(req, cb) {
        return this.request("DescribePrometheusClusterAgents", req, cb);
    }
    /**
     * 列出 Prometheus 服务可用区。
     */
    async DescribePrometheusZones(req, cb) {
        return this.request("DescribePrometheusZones", req, cb);
    }
    /**
     * 列出 Grafana 环境变量
     */
    async DescribeGrafanaEnvironments(req, cb) {
        return this.request("DescribeGrafanaEnvironments", req, cb);
    }
    /**
     * 更新 Prometheus 的预聚合规则
     */
    async UpdateRecordingRule(req, cb) {
        return this.request("UpdateRecordingRule", req, cb);
    }
    /**
     * 删除 Grafana 告警通道
     */
    async DeleteGrafanaNotificationChannel(req, cb) {
        return this.request("DeleteGrafanaNotificationChannel", req, cb);
    }
    /**
     * 根据维度条件查询监控数据
     */
    async DescribeStatisticData(req, cb) {
        return this.request("DescribeStatisticData", req, cb);
    }
    /**
     * 列出 Grafana 的设置，即 grafana.ini 文件内容
     */
    async DescribeGrafanaConfig(req, cb) {
        return this.request("DescribeGrafanaConfig", req, cb);
    }
    /**
     * 告警2.0编辑告警策略基本信息，包括策略名、备注
     */
    async ModifyAlarmPolicyInfo(req, cb) {
        return this.request("ModifyAlarmPolicyInfo", req, cb);
    }
    /**
     * 启停告警策略
     */
    async ModifyAlarmPolicyStatus(req, cb) {
        return this.request("ModifyAlarmPolicyStatus", req, cb);
    }
    /**
     * 删除 Prometheus Agent 抓取任务
     */
    async DeletePrometheusScrapeJobs(req, cb) {
        return this.request("DeletePrometheusScrapeJobs", req, cb);
    }
    /**
     * 设置 Grafana 单点登录，使用腾讯云账号
     */
    async EnableGrafanaSSO(req, cb) {
        return this.request("EnableGrafanaSSO", req, cb);
    }
    /**
     * 批量删除 Prometheus 报警规则
     */
    async DeleteAlertRules(req, cb) {
        return this.request("DeleteAlertRules", req, cb);
    }
    /**
     * 获取基础指标属性
     */
    async DescribeBaseMetrics(req, cb) {
        return this.request("DescribeBaseMetrics", req, cb);
    }
    /**
     * 查询告警事件列表
     */
    async DescribeAlarmEvents(req, cb) {
        return this.request("DescribeAlarmEvents", req, cb);
    }
    /**
     * 查询周期内电话流水总数
     */
    async DescribePhoneAlarmFlowTotalCount(req, cb) {
        return this.request("DescribePhoneAlarmFlowTotalCount", req, cb);
    }
    /**
     * 删除告警通知模板
     */
    async DeleteAlarmNotices(req, cb) {
        return this.request("DeleteAlarmNotices", req, cb);
    }
    /**
     * 编辑告警通知模板
     */
    async ModifyAlarmNotice(req, cb) {
        return this.request("ModifyAlarmNotice", req, cb);
    }
    /**
     * 获取TMP实例详情
     */
    async DescribePrometheusInstanceDetail(req, cb) {
        return this.request("DescribePrometheusInstanceDetail", req, cb);
    }
    /**
     * 创建 Prometheus Agent 抓取任务
     */
    async CreatePrometheusScrapeJob(req, cb) {
        return this.request("CreatePrometheusScrapeJob", req, cb);
    }
    /**
     * 删除策略的关联对象
     */
    async UnBindingPolicyObject(req, cb) {
        return this.request("UnBindingPolicyObject", req, cb);
    }
    /**
     * 获取条件模板列表
     */
    async DescribeConditionsTemplateList(req, cb) {
        return this.request("DescribeConditionsTemplateList", req, cb);
    }
    /**
     * 列出 Prometheus 抓取任务
     */
    async DescribePrometheusScrapeJobs(req, cb) {
        return this.request("DescribePrometheusScrapeJobs", req, cb);
    }
    /**
     * 删除在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    async DeleteServiceDiscovery(req, cb) {
        return this.request("DeleteServiceDiscovery", req, cb);
    }
    /**
     * 与腾讯云可观测融合的2.0实例关联集群
     */
    async CreatePrometheusClusterAgent(req, cb) {
        return this.request("CreatePrometheusClusterAgent", req, cb);
    }
    /**
     * 策略绑定标签
     */
    async BindingPolicyTag(req, cb) {
        return this.request("BindingPolicyTag", req, cb);
    }
    /**
     * 创建告警屏蔽规则
     */
    async CreateAlarmShield(req, cb) {
        return this.request("CreateAlarmShield", req, cb);
    }
    /**
     * 创建按量 Prometheus 实例，根据用量收费实例
     */
    async CreatePrometheusMultiTenantInstancePostPayMode(req, cb) {
        return this.request("CreatePrometheusMultiTenantInstancePostPayMode", req, cb);
    }
    /**
     * 更新 Grafana 环境变量
     */
    async UpdateGrafanaEnvironments(req, cb) {
        return this.request("UpdateGrafanaEnvironments", req, cb);
    }
    /**
     * 获取基础告警策略条件
     */
    async DescribePolicyConditionList(req, cb) {
        return this.request("DescribePolicyConditionList", req, cb);
    }
    /**
     * 修改告警策略触发条件
     */
    async ModifyAlarmPolicyCondition(req, cb) {
        return this.request("ModifyAlarmPolicyCondition", req, cb);
    }
    /**
     * 获取 Prometheus Agent 管理相关的命令行
     */
    async GetPrometheusAgentManagementCommand(req, cb) {
        return this.request("GetPrometheusAgentManagementCommand", req, cb);
    }
    /**
     * 更新 Prometheus Agent 抓取任务
     */
    async UpdatePrometheusScrapeJob(req, cb) {
        return this.request("UpdatePrometheusScrapeJob", req, cb);
    }
    /**
     * 获取2.0实例初始化任务状态
     */
    async DescribePrometheusInstanceInitStatus(req, cb) {
        return this.request("DescribePrometheusInstanceInitStatus", req, cb);
    }
    /**
     * 升级 Grafana 实例
     */
    async UpgradeGrafanaInstance(req, cb) {
        return this.request("UpgradeGrafanaInstance", req, cb);
    }
    /**
     * 列出 Grafana 所有告警通道
     */
    async DescribeGrafanaChannels(req, cb) {
        return this.request("DescribeGrafanaChannels", req, cb);
    }
    /**
     * 删除 Grafana 集成配置
     */
    async DeleteGrafanaIntegration(req, cb) {
        return this.request("DeleteGrafanaIntegration", req, cb);
    }
    /**
     * 绑定 Grafana 可视化服务实例
     */
    async BindPrometheusManagedGrafana(req, cb) {
        return this.request("BindPrometheusManagedGrafana", req, cb);
    }
    /**
     * 删除全部的关联对象
     */
    async UnBindingAllPolicyObject(req, cb) {
        return this.request("UnBindingAllPolicyObject", req, cb);
    }
    /**
     * 删除告警策略组
     */
    async DeletePolicyGroup(req, cb) {
        return this.request("DeletePolicyGroup", req, cb);
    }
    /**
     * 在腾讯云容器服务下更新 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    async UpdateServiceDiscovery(req, cb) {
        return this.request("UpdateServiceDiscovery", req, cb);
    }
    /**
     * 腾讯云可观测平台支持多种类型的监控，此接口列出支持的所有类型
     */
    async DescribeMonitorTypes(req, cb) {
        return this.request("DescribeMonitorTypes", req, cb);
    }
    /**
     * SSO单点登录时，设置是否cam鉴权
     */
    async EnableSSOCamCheck(req, cb) {
        return this.request("EnableSSOCamCheck", req, cb);
    }
    /**
     * 安装 Grafana Plugin
     */
    async InstallPlugins(req, cb) {
        return this.request("InstallPlugins", req, cb);
    }
    /**
     * 创建集成中心 exporter 集成，因集成较多，建议控制台创建集成。(前提：已授权创建托管 EKS 集群，验证方式：1. 控制台界面确认，未提示授权则表示已授权创建；2. 通过 DescribePrometheusInstanceInitStatus 接口查询集群状态，如果托管集群不存在，可通过 RunPrometheusInstance 接口创建)
     */
    async CreateExporterIntegration(req, cb) {
        return this.request("CreateExporterIntegration", req, cb);
    }
    /**
     * 批量删除 Prometheus 预聚合规则
     */
    async DeleteRecordingRules(req, cb) {
        return this.request("DeleteRecordingRules", req, cb);
    }
    /**
     * 分页获取产品事件的列表
     */
    async DescribeProductEventList(req, cb) {
        return this.request("DescribeProductEventList", req, cb);
    }
    /**
     * 查询告警历史

请注意，**如果使用子用户进行告警历史的查询，只能查询到被授权项目下的告警历史**，或不区分项目的产品的告警历史。如何对子账户授予项目的权限，请参考 [访问管理-项目与标签](https://cloud.tencent.com/document/product/598/32738)。
     */
    async DescribeAlarmHistories(req, cb) {
        return this.request("DescribeAlarmHistories", req, cb);
    }
    /**
     * 创建全局告警通知渠道。集群内创建的告警规则如果未配置告警通知渠道，默认走全局告警通知渠道（建议在控制台创建告警，集群内创建告警不易维护）
     */
    async CreatePrometheusGlobalNotification(req, cb) {
        return this.request("CreatePrometheusGlobalNotification", req, cb);
    }
    /**
     * Grafana可视化服务 删除授权用户
     */
    async DeleteSSOAccount(req, cb) {
        return this.request("DeleteSSOAccount", req, cb);
    }
    /**
     * 获取多写配置详情
     */
    async DescribeRemoteURLs(req, cb) {
        return this.request("DescribeRemoteURLs", req, cb);
    }
    /**
     * 批量更新告警分组状态，将分组中全部告警规则更新为目标状态
     */
    async UpdatePrometheusAlertGroupState(req, cb) {
        return this.request("UpdatePrometheusAlertGroupState", req, cb);
    }
    /**
     * 查询单个通知模板的详情
     */
    async DescribeAlarmNotice(req, cb) {
        return this.request("DescribeAlarmNotice", req, cb);
    }
    /**
     * 创建 Grafana 集成配置，其中 Prometheus 集成不通过该接口创建，可参考 BindPrometheusManagedGrafana 接口
     */
    async CreateGrafanaIntegration(req, cb) {
        return this.request("CreateGrafanaIntegration", req, cb);
    }
    /**
     * 拉取模板列表，默认模板将总是在最前面
     */
    async DescribePrometheusTemp(req, cb) {
        return this.request("DescribePrometheusTemp", req, cb);
    }
    /**
     * 更新 Grafana 白名单
     */
    async UpdateGrafanaWhiteList(req, cb) {
        return this.request("UpdateGrafanaWhiteList", req, cb);
    }
    /**
     * 设置一个策略为该告警策略类型、该项目的默认告警策略。
同一项目下相同的告警策略类型，就会被设置为非默认。
     */
    async SetDefaultAlarmPolicy(req, cb) {
        return this.request("SetDefaultAlarmPolicy", req, cb);
    }
    /**
     * 本接口（DeleteGrafanaInstance）用于 Grafana 包年包月实例的退费，调用后实例处于停服状态，不可使用，7天后自动销毁。
     */
    async DeleteGrafanaInstance(req, cb) {
        return this.request("DeleteGrafanaInstance", req, cb);
    }
    /**
     * 删除Prometheus配置，如果目标不存在，将返回成功
     */
    async DeletePrometheusConfig(req, cb) {
        return this.request("DeletePrometheusConfig", req, cb);
    }
    /**
     * Grafana实例授权其他腾讯云用户
     */
    async CreateSSOAccount(req, cb) {
        return this.request("CreateSSOAccount", req, cb);
    }
    /**
     * 修改告警策略绑定的告警通知模板
     */
    async ModifyAlarmPolicyNotice(req, cb) {
        return this.request("ModifyAlarmPolicyNotice", req, cb);
    }
    /**
     * 设置 Grafana 公网访问
     */
    async EnableGrafanaInternet(req, cb) {
        return this.request("EnableGrafanaInternet", req, cb);
    }
    /**
     * 创建 Grafana 告警通道
     */
    async CreateGrafanaNotificationChannel(req, cb) {
        return this.request("CreateGrafanaNotificationChannel", req, cb);
    }
    /**
     * 修改 Grafana 实例属性
     */
    async ModifyGrafanaInstance(req, cb) {
        return this.request("ModifyGrafanaInstance", req, cb);
    }
    /**
     * 本接口（ResumeGrafanaInstance）用于 Grafana 包年包月实例的停服续费，调用后按原版本续费一个月。仍在运行中的实例无法使用该接口进行续费。
     */
    async ResumeGrafanaInstance(req, cb) {
        return this.request("ResumeGrafanaInstance", req, cb);
    }
    /**
     * 创建一个云原生Prometheus模板
     */
    async CreatePrometheusTemp(req, cb) {
        return this.request("CreatePrometheusTemp", req, cb);
    }
    /**
     * 列出当前grafana实例的所有授权账号
     */
    async DescribeSSOAccount(req, cb) {
        return this.request("DescribeSSOAccount", req, cb);
    }
    /**
     * 获取基础告警列表
     */
    async DescribeBasicAlarmList(req, cb) {
        return this.request("DescribeBasicAlarmList", req, cb);
    }
    /**
     * 创建 Prometheus CVM Agent
     */
    async CreatePrometheusAgent(req, cb) {
        return this.request("CreatePrometheusAgent", req, cb);
    }
    /**
     * 同步模板到实例或者集群，针对V2版本实例
     */
    async SyncPrometheusTemp(req, cb) {
        return this.request("SyncPrometheusTemp", req, cb);
    }
    /**
     * 修改多写配置
     */
    async ModifyRemoteURLs(req, cb) {
        return this.request("ModifyRemoteURLs", req, cb);
    }
    /**
     * 创建通知模板
     */
    async CreateAlarmNotice(req, cb) {
        return this.request("CreateAlarmNotice", req, cb);
    }
    /**
     * 更新 Prometheus 报警策略状态
     */
    async UpdateAlertRuleState(req, cb) {
        return this.request("UpdateAlertRuleState", req, cb);
    }
    /**
     * 修改模板内容
     */
    async ModifyPrometheusTemp(req, cb) {
        return this.request("ModifyPrometheusTemp", req, cb);
    }
    /**
     * 解除实例绑定的 Grafana 可视化实例
     */
    async UnbindPrometheusManagedGrafana(req, cb) {
        return this.request("UnbindPrometheusManagedGrafana", req, cb);
    }
    /**
     * 初始化TMP实例，开启集成中心时调用
     */
    async RunPrometheusInstance(req, cb) {
        return this.request("RunPrometheusInstance", req, cb);
    }
    /**
     * 查询集成中心 exporter 集成列表
     */
    async DescribeExporterIntegrations(req, cb) {
        return this.request("DescribeExporterIntegrations", req, cb);
    }
    /**
     * 列出实例已安装的插件
     */
    async DescribeInstalledPlugins(req, cb) {
        return this.request("DescribeInstalledPlugins", req, cb);
    }
    /**
     * 查询全局告警通知渠道
     */
    async DescribePrometheusGlobalNotification(req, cb) {
        return this.request("DescribePrometheusGlobalNotification", req, cb);
    }
    /**
     * 升级 Grafana Dashboard
     */
    async UpgradeGrafanaDashboard(req, cb) {
        return this.request("UpgradeGrafanaDashboard", req, cb);
    }
    /**
     * 查询通知模板列表
     */
    async DescribeAlarmNotices(req, cb) {
        return this.request("DescribeAlarmNotices", req, cb);
    }
    /**
     * 列出 Grafana DNS 配置
     */
    async DescribeDNSConfig(req, cb) {
        return this.request("DescribeDNSConfig", req, cb);
    }
    /**
     * 创建Prometheus告警规则分组

告警分组中可包含多条告警规则，分组内告警消息通过告警分组的通知模板发送。
支持单个告警分组下分别创建启用/禁用的告警规则。
     */
    async CreatePrometheusAlertGroup(req, cb) {
        return this.request("CreatePrometheusAlertGroup", req, cb);
    }
    /**
     * 修改全局告警通知渠道
     */
    async ModifyPrometheusGlobalNotification(req, cb) {
        return this.request("ModifyPrometheusGlobalNotification", req, cb);
    }
    /**
     * 获取关联目标集群的实例列表
     */
    async DescribePrometheusAgentInstances(req, cb) {
        return this.request("DescribePrometheusAgentInstances", req, cb);
    }
    /**
     * 删除聚合实例
     */
    async DeletePrometheusRecordRuleYaml(req, cb) {
        return this.request("DeletePrometheusRecordRuleYaml", req, cb);
    }
    /**
     * 本接口 (DescribePrometheusInstances) 用于查询一个或多个实例的详细信息。
<ul>
<li>可以根据实例ID、实例名称或者实例状态等信息来查询实例的详细信息</li>
<li>如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的实例。</li>
</ul>
     */
    async DescribePrometheusInstances(req, cb) {
        return this.request("DescribePrometheusInstances", req, cb);
    }
    /**
     * 列出用户所有的 Grafana 服务
     */
    async DescribeGrafanaInstances(req, cb) {
        return this.request("DescribeGrafanaInstances", req, cb);
    }
    /**
     * 通过yaml的方式修改Prometheus预聚合规则
     */
    async ModifyPrometheusRecordRuleYaml(req, cb) {
        return this.request("ModifyPrometheusRecordRuleYaml", req, cb);
    }
    /**
     * 更新 Grafana 配置
     */
    async UpdateGrafanaConfig(req, cb) {
        return this.request("UpdateGrafanaConfig", req, cb);
    }
    /**
     * 更新Prometheus告警规则分组
     */
    async UpdatePrometheusAlertGroup(req, cb) {
        return this.request("UpdatePrometheusAlertGroup", req, cb);
    }
    /**
     * 列出 Grafana 告警通道
     */
    async DescribeGrafanaNotificationChannels(req, cb) {
        return this.request("DescribeGrafanaNotificationChannels", req, cb);
    }
    /**
     * 修改被关联集群的external labels
     */
    async ModifyPrometheusAgentExternalLabels(req, cb) {
        return this.request("ModifyPrometheusAgentExternalLabels", req, cb);
    }
    /**
     * 更新策略组
     */
    async ModifyPolicyGroup(req, cb) {
        return this.request("ModifyPolicyGroup", req, cb);
    }
    /**
     * 获取平台事件列表
     */
    async DescribeAccidentEventList(req, cb) {
        return this.request("DescribeAccidentEventList", req, cb);
    }
    /**
     * 获取模板关联实例信息，针对V2版本实例
     */
    async DescribePrometheusTempSync(req, cb) {
        return this.request("DescribePrometheusTempSync", req, cb);
    }
    /**
     * 查询告警指标列表
     */
    async DescribeAlarmMetrics(req, cb) {
        return this.request("DescribeAlarmMetrics", req, cb);
    }
    /**
     * 修改告警策略的触发任务，TriggerTasks字段放触发任务列表，TriggerTasks传空数组时，代表解绑该策略的所有触发任务。
     */
    async ModifyAlarmPolicyTasks(req, cb) {
        return this.request("ModifyAlarmPolicyTasks", req, cb);
    }
    /**
     * 删除集成中心 exporter 集成
     */
    async DeleteExporterIntegration(req, cb) {
        return this.request("DeleteExporterIntegration", req, cb);
    }
    /**
     * 删除2.0实例告警策略
     */
    async DeletePrometheusAlertPolicy(req, cb) {
        return this.request("DeletePrometheusAlertPolicy", req, cb);
    }
    /**
     * 更新 Prometheus CVM Agent 状态
     */
    async UpdatePrometheusAgentStatus(req, cb) {
        return this.request("UpdatePrometheusAgentStatus", req, cb);
    }
    /**
     * 创建 Prometheus 的预聚合规则
     */
    async CreateRecordingRule(req, cb) {
        return this.request("CreateRecordingRule", req, cb);
    }
    /**
     * Prometheus 报警规则查询接口
     */
    async DescribeAlertRules(req, cb) {
        return this.request("DescribeAlertRules", req, cb);
    }
    /**
     * 获得实例级别抓取配置
     */
    async DescribePrometheusGlobalConfig(req, cb) {
        return this.request("DescribePrometheusGlobalConfig", req, cb);
    }
    /**
     * 获取基础策略告警组列表
     */
    async DescribePolicyGroupList(req, cb) {
        return this.request("DescribePolicyGroupList", req, cb);
    }
    /**
     * 查询告警策略列表
     */
    async DescribeAlarmPolicies(req, cb) {
        return this.request("DescribeAlarmPolicies", req, cb);
    }
    /**
     * 获取targets信息，在过滤条件中指定job名称时返回targets详情，否则仅返回数量
     */
    async DescribePrometheusTargetsTMP(req, cb) {
        return this.request("DescribePrometheusTargetsTMP", req, cb);
    }
    /**
     * 列出 Prometheus 服务所有可用的地域
     */
    async DescribePrometheusRegions(req, cb) {
        return this.request("DescribePrometheusRegions", req, cb);
    }
    /**
     * 列出 Grafana 白名单
     */
    async DescribeGrafanaWhiteList(req, cb) {
        return this.request("DescribeGrafanaWhiteList", req, cb);
    }
    /**
     * 创建 Prometheus 告警策略(将逐步废弃，建议使用 CreatePrometheusAlertGroup 创建告警策略)
     */
    async CreatePrometheusAlertPolicy(req, cb) {
        return this.request("CreatePrometheusAlertPolicy", req, cb);
    }
    /**
     * 强制销毁 Grafana 实例
     */
    async CleanGrafanaInstance(req, cb) {
        return this.request("CleanGrafanaInstance", req, cb);
    }
    /**
     * 删除 Grafana Dashboard
     */
    async UninstallGrafanaDashboard(req, cb) {
        return this.request("UninstallGrafanaDashboard", req, cb);
    }
    /**
     * 获取2.0实例告警策略列表
     */
    async DescribePrometheusAlertPolicy(req, cb) {
        return this.request("DescribePrometheusAlertPolicy", req, cb);
    }
    /**
     * 列出 Prometheus CVM Agent
     */
    async DescribePrometheusAgents(req, cb) {
        return this.request("DescribePrometheusAgents", req, cb);
    }
    /**
     * 修改 Prometheus 实例相关属性
     */
    async ModifyPrometheusInstanceAttributes(req, cb) {
        return this.request("ModifyPrometheusInstanceAttributes", req, cb);
    }
    /**
     * 删除告警策略
     */
    async DeleteAlarmPolicy(req, cb) {
        return this.request("DeleteAlarmPolicy", req, cb);
    }
    /**
     * 获取云产品的监控数据。此接口不适用于拉取容器服务监控数据，如需拉取容器服务监控数据，请使用[根据维度条件查询监控数据](https://cloud.tencent.com/document/product/248/51845)接口。
传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用限制：单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
参数SpecifyStatistics目前可支持返回三种统计方式（avg，max，min），分别为二进制1，2，4。
例子：3:avg+max，5:avg+min，6:max+min，7:avg+max+min
拉取数据的粒度和统计方式的对应关系尽量在接入平台进行配置，如果没有配置，因为更小粒度数据存储时间有限，拉取时间范围也是有限。

>?
>- 2022年9月1日起，腾讯云可观测平台开始对GetMonitorData接口计费。每个主账号每月可获得100万次免费请求额度，超过免费额度后如需继续调用接口需要开通 [API请求按量付费](https://buy.cloud.tencent.com/APIRequestBuy)。计费规则可查看[API计费文档](https://cloud.tencent.com/document/product/248/77914)。
     */
    async GetMonitorData(req, cb) {
        return this.request("GetMonitorData", req, cb);
    }
    /**
     * 更新 Grafana 的 DNS 配置
     */
    async UpdateDNSConfig(req, cb) {
        return this.request("UpdateDNSConfig", req, cb);
    }
    /**
     * 列出在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    async DescribeServiceDiscovery(req, cb) {
        return this.request("DescribeServiceDiscovery", req, cb);
    }
    /**
     * 列出 Grafana 已安装的集成
     */
    async DescribeGrafanaIntegrations(req, cb) {
        return this.request("DescribeGrafanaIntegrations", req, cb);
    }
    /**
     * 拉取Prometheus配置
     */
    async DescribePrometheusConfig(req, cb) {
        return this.request("DescribePrometheusConfig", req, cb);
    }
    /**
     * 获取基础策略组详情
     */
    async DescribePolicyGroupInfo(req, cb) {
        return this.request("DescribePolicyGroupInfo", req, cb);
    }
    /**
     * 更新 exporter 集成配置
     */
    async UpdateExporterIntegration(req, cb) {
        return this.request("UpdateExporterIntegration", req, cb);
    }
    /**
     * 查询所有名字空间
     */
    async DescribeAllNamespaces(req, cb) {
        return this.request("DescribeAllNamespaces", req, cb);
    }
    /**
     * 在腾讯云容器服务下创建 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    async CreateServiceDiscovery(req, cb) {
        return this.request("CreateServiceDiscovery", req, cb);
    }
    /**
     * 以Yaml的方式创建聚合规则
     */
    async CreatePrometheusRecordRuleYaml(req, cb) {
        return this.request("CreatePrometheusRecordRuleYaml", req, cb);
    }
    /**
     * 删除一个云原生Prometheus配置模板
     */
    async DeletePrometheusTemp(req, cb) {
        return this.request("DeletePrometheusTemp", req, cb);
    }
    /**
     * 获取告警通知模板所有回调URL
     */
    async DescribeAlarmNoticeCallbacks(req, cb) {
        return this.request("DescribeAlarmNoticeCallbacks", req, cb);
    }
    /**
     * 彻底删除 Prometheus 实例相关数据，给定的实例必须先被 Terminate(该接口是异步接口，实例是否释放需要通过 DescribePrometheusInstances 接口返回的状态来判断)。
     */
    async DestroyPrometheusInstance(req, cb) {
        return this.request("DestroyPrometheusInstance", req, cb);
    }
    /**
     * 删除已安装的插件
     */
    async UninstallGrafanaPlugins(req, cb) {
        return this.request("UninstallGrafanaPlugins", req, cb);
    }
    /**
     * 更新 Grafana 集成配置
     */
    async UpdateGrafanaIntegration(req, cb) {
        return this.request("UpdateGrafanaIntegration", req, cb);
    }
    /**
     * 增加策略组
     */
    async CreatePolicyGroup(req, cb) {
        return this.request("CreatePolicyGroup", req, cb);
    }
    /**
     * 销毁按量 Prometheus 实例
     */
    async TerminatePrometheusInstances(req, cb) {
        return this.request("TerminatePrometheusInstances", req, cb);
    }
    /**
     * 获取与 Prometheus 监控融合实例列表
     */
    async DescribePrometheusInstancesOverview(req, cb) {
        return this.request("DescribePrometheusInstancesOverview", req, cb);
    }
    /**
     * 解除模板同步，这将会删除目标中该模板所生产的配置，针对V2版本实例
     */
    async DeletePrometheusTempSync(req, cb) {
        return this.request("DeletePrometheusTempSync", req, cb);
    }
    /**
     * 创建prometheus配置
     */
    async CreatePrometheusConfig(req, cb) {
        return this.request("CreatePrometheusConfig", req, cb);
    }
    /**
     * 列出可安装的所有 Grafana 插件。
     */
    async DescribePluginOverviews(req, cb) {
        return this.request("DescribePluginOverviews", req, cb);
    }
    /**
     * 获取prom实例中集群详细的关联状态
     */
    async DescribeClusterAgentCreatingProgress(req, cb) {
        return this.request("DescribeClusterAgentCreatingProgress", req, cb);
    }
    /**
     * 根据条件查询 Prometheus 预聚合规则
     */
    async DescribeRecordingRules(req, cb) {
        return this.request("DescribeRecordingRules", req, cb);
    }
    /**
     * 修改prometheus采集配置
     */
    async ModifyPrometheusConfig(req, cb) {
        return this.request("ModifyPrometheusConfig", req, cb);
    }
    /**
     * 获取单个告警策略详情
     */
    async DescribeAlarmPolicy(req, cb) {
        return this.request("DescribeAlarmPolicy", req, cb);
    }
}
exports.Client = Client;

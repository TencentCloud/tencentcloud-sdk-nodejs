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
     * 默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     */
    async PutMonitorData(req, cb) {
        return this.request("PutMonitorData", req, cb);
    }
    /**
     * 查询告警策略列表
     */
    async DescribeAlarmPolicies(req, cb) {
        return this.request("DescribeAlarmPolicies", req, cb);
    }
    /**
     * 删除策略的关联对象
     */
    async UnBindingPolicyObject(req, cb) {
        return this.request("UnBindingPolicyObject", req, cb);
    }
    /**
     * 创建 Prometheus 告警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
    async CreateAlertRule(req, cb) {
        return this.request("CreateAlertRule", req, cb);
    }
    /**
     * 发送自定义消息告警
     */
    async SendCustomAlarmMsg(req, cb) {
        return this.request("SendCustomAlarmMsg", req, cb);
    }
    /**
     * 获取条件模板列表
     */
    async DescribeConditionsTemplateList(req, cb) {
        return this.request("DescribeConditionsTemplateList", req, cb);
    }
    /**
     * 获取已绑定对象列表
     */
    async DescribeBindingPolicyObjectList(req, cb) {
        return this.request("DescribeBindingPolicyObjectList", req, cb);
    }
    /**
     * 云监控告警修改告警策略绑定的告警通知模板
     */
    async ModifyAlarmPolicyNotice(req, cb) {
        return this.request("ModifyAlarmPolicyNotice", req, cb);
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
     * 获取基础策略告警组列表
     */
    async DescribePolicyGroupList(req, cb) {
        return this.request("DescribePolicyGroupList", req, cb);
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
接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
     */
    async GetMonitorData(req, cb) {
        return this.request("GetMonitorData", req, cb);
    }
    /**
     * 云监控告警修改告警策略的触发任务，TriggerTasks字段放触发任务列表，TriggerTasks传空数组时，代表解绑该策略的所有触发任务。
     */
    async ModifyAlarmPolicyTasks(req, cb) {
        return this.request("ModifyAlarmPolicyTasks", req, cb);
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
     * 获取基础告警列表
     */
    async DescribeBasicAlarmList(req, cb) {
        return this.request("DescribeBasicAlarmList", req, cb);
    }
    /**
     * 将告警策略绑定到特定对象
     */
    async BindingPolicyObject(req, cb) {
        return this.request("BindingPolicyObject", req, cb);
    }
    /**
     * 告警2.0编辑告警策略基本信息，包括策略名、备注
     */
    async ModifyAlarmPolicyInfo(req, cb) {
        return this.request("ModifyAlarmPolicyInfo", req, cb);
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
     * 创建云监控告警策略
     */
    async CreateAlarmPolicy(req, cb) {
        return this.request("CreateAlarmPolicy", req, cb);
    }
    /**
     * 获取基础策略组详情
     */
    async DescribePolicyGroupInfo(req, cb) {
        return this.request("DescribePolicyGroupInfo", req, cb);
    }
    /**
     * 查询云监控产品列表，支持云服务器CVM、云数据库、云消息队列、负载均衡、容器服务、专线等云产品。
     */
    async DescribeProductList(req, cb) {
        return this.request("DescribeProductList", req, cb);
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
     * 根据维度条件查询监控数据
     */
    async DescribeStatisticData(req, cb) {
        return this.request("DescribeStatisticData", req, cb);
    }
    /**
     * 查询通知模板列表
     */
    async DescribeAlarmNotices(req, cb) {
        return this.request("DescribeAlarmNotices", req, cb);
    }
    /**
     * 策略绑定标签
     */
    async BindingPolicyTag(req, cb) {
        return this.request("BindingPolicyTag", req, cb);
    }
    /**
     * 启停告警策略
     */
    async ModifyAlarmPolicyStatus(req, cb) {
        return this.request("ModifyAlarmPolicyStatus", req, cb);
    }
    /**
     * 云监控告警获取告警通知模板所有回调URL
     */
    async DescribeAlarmNoticeCallbacks(req, cb) {
        return this.request("DescribeAlarmNoticeCallbacks", req, cb);
    }
    /**
     * 修改告警接收人
     */
    async ModifyAlarmReceivers(req, cb) {
        return this.request("ModifyAlarmReceivers", req, cb);
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
     * 云监控支持多种类型的监控，此接口列出支持的所有类型
     */
    async DescribeMonitorTypes(req, cb) {
        return this.request("DescribeMonitorTypes", req, cb);
    }
    /**
     * 更新 Prometheus 的报警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
    async UpdateAlertRule(req, cb) {
        return this.request("UpdateAlertRule", req, cb);
    }
    /**
     * 设置一个策略为该告警策略类型、该项目的默认告警策略。
同一项目下相同的告警策略类型，就会被设置为非默认。
     */
    async SetDefaultAlarmPolicy(req, cb) {
        return this.request("SetDefaultAlarmPolicy", req, cb);
    }
    /**
     * 增加策略组
     */
    async CreatePolicyGroup(req, cb) {
        return this.request("CreatePolicyGroup", req, cb);
    }
    /**
     * 分页获取产品事件的列表
     */
    async DescribeProductEventList(req, cb) {
        return this.request("DescribeProductEventList", req, cb);
    }
    /**
     * 获取平台事件列表
     */
    async DescribeAccidentEventList(req, cb) {
        return this.request("DescribeAccidentEventList", req, cb);
    }
    /**
     * 批量删除 Prometheus 报警规则
     */
    async DeleteAlertRules(req, cb) {
        return this.request("DeleteAlertRules", req, cb);
    }
    /**
     * 查询告警历史

请注意，**如果使用子用户进行告警历史的查询，只能查询到被授权项目下的告警历史**，或不区分项目的产品的告警历史。如何对子账户授予项目的权限，请参考 [访问管理-项目与标签](https://cloud.tencent.com/document/product/598/32738)。
     */
    async DescribeAlarmHistories(req, cb) {
        return this.request("DescribeAlarmHistories", req, cb);
    }
    /**
     * 查询告警指标列表
     */
    async DescribeAlarmMetrics(req, cb) {
        return this.request("DescribeAlarmMetrics", req, cb);
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
     * 获取基础指标属性
     */
    async DescribeBaseMetrics(req, cb) {
        return this.request("DescribeBaseMetrics", req, cb);
    }
    /**
     * 查询单个通知模板的详情
     */
    async DescribeAlarmNotice(req, cb) {
        return this.request("DescribeAlarmNotice", req, cb);
    }
    /**
     * 查询告警事件列表
     */
    async DescribeAlarmEvents(req, cb) {
        return this.request("DescribeAlarmEvents", req, cb);
    }
    /**
     * 云监控告警删除告警通知模板
     */
    async DeleteAlarmNotices(req, cb) {
        return this.request("DeleteAlarmNotices", req, cb);
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
     * 云监控告警编辑告警通知模板
     */
    async ModifyAlarmNotice(req, cb) {
        return this.request("ModifyAlarmNotice", req, cb);
    }
    /**
     * 更新策略组
     */
    async ModifyPolicyGroup(req, cb) {
        return this.request("ModifyPolicyGroup", req, cb);
    }
    /**
     * Prometheus 报警规则查询接口
     */
    async DescribeAlertRules(req, cb) {
        return this.request("DescribeAlertRules", req, cb);
    }
    /**
     * 获取单个告警策略详情
     */
    async DescribeAlarmPolicy(req, cb) {
        return this.request("DescribeAlarmPolicy", req, cb);
    }
}
exports.Client = Client;

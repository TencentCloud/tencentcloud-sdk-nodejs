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
     * 删除策略的关联对象
     */
    async UnBindingPolicyObject(req, cb) {
        return this.request("UnBindingPolicyObject", req, cb);
    }
    /**
     * 发送自定义消息告警
     */
    async SendCustomAlarmMsg(req, cb) {
        return this.request("SendCustomAlarmMsg", req, cb);
    }
    /**
     * 获取已绑定对象列表
     */
    async DescribeBindingPolicyObjectList(req, cb) {
        return this.request("DescribeBindingPolicyObjectList", req, cb);
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
     * 获取云产品的监控数据。传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
     */
    async GetMonitorData(req, cb) {
        return this.request("GetMonitorData", req, cb);
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
     * 获取基础告警策略条件
     */
    async DescribePolicyConditionList(req, cb) {
        return this.request("DescribePolicyConditionList", req, cb);
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
     * 列出在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    async DescribeServiceDiscovery(req, cb) {
        return this.request("DescribeServiceDiscovery", req, cb);
    }
    /**
     * 获取基础告警列表
     */
    async DescribeBasicAlarmList(req, cb) {
        return this.request("DescribeBasicAlarmList", req, cb);
    }
    /**
     * 获取基础策略组详情
     */
    async DescribePolicyGroupInfo(req, cb) {
        return this.request("DescribePolicyGroupInfo", req, cb);
    }
    /**
     * 查询云监控产品列表
     */
    async DescribeProductList(req, cb) {
        return this.request("DescribeProductList", req, cb);
    }
    /**
     * 拉取所有名字空间
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
     * 更新策略组
     */
    async ModifyPolicyGroup(req, cb) {
        return this.request("ModifyPolicyGroup", req, cb);
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
     * 告警2.0-告警历史列表
     */
    async DescribeAlarmHistories(req, cb) {
        return this.request("DescribeAlarmHistories", req, cb);
    }
    /**
     * 获取基础指标详情
     */
    async DescribeBaseMetrics(req, cb) {
        return this.request("DescribeBaseMetrics", req, cb);
    }
}
exports.Client = Client;

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
 * bmlb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("bmlb.tencentcloudapi.com", "2018-06-25", clientConfig);
    }
    /**
     * 获取黑石负载均衡七层监听器列表信息。
     */
    async DescribeL7Listeners(req, cb) {
        return this.request("DescribeL7Listeners", req, cb);
    }
    /**
     * 从流量镜像实例上解绑流量镜像接收机。
     */
    async UnbindTrafficMirrorReceivers(req, cb) {
        return this.request("UnbindTrafficMirrorReceivers", req, cb);
    }
    /**
     * 修改黑石负载均衡七层转发路径后端实例权重。
     */
    async ModifyL7BackendWeight(req, cb) {
        return this.request("ModifyL7BackendWeight", req, cb);
    }
    /**
     * 修改黑石负载均衡四层监听器后端实例权重功能。
     */
    async ModifyL4BackendWeight(req, cb) {
        return this.request("ModifyL4BackendWeight", req, cb);
    }
    /**
     * 创建黑石四层负载均衡监听器功能。黑石负载均衡四层监听器提供了转发用户请求的具体规则，包括端口、协议、会话保持、健康检查等参数。
     */
    async CreateL4Listeners(req, cb) {
        return this.request("CreateL4Listeners", req, cb);
    }
    /**
     * 解绑黑石负载均衡四层监听器物理服务器。
     */
    async UnbindL4Backends(req, cb) {
        return this.request("UnbindL4Backends", req, cb);
    }
    /**
     * 修改黑石负载均衡七层监听器。
     */
    async ModifyL7Listener(req, cb) {
        return this.request("ModifyL7Listener", req, cb);
    }
    /**
     * 删除已创建的黑石流量镜像实例，删除过程是异步执行的，因此需要使用查询任务接口获取删除的结果。
     */
    async DeleteTrafficMirror(req, cb) {
        return this.request("DeleteTrafficMirror", req, cb);
    }
    /**
     * 创建黑石负载均衡七层转发规则。
     */
    async CreateL7Rules(req, cb) {
        return this.request("CreateL7Rules", req, cb);
    }
    /**
     * 获取流量镜像接收机健康状态。
     */
    async DescribeTrafficMirrorReceiverHealthStatus(req, cb) {
        return this.request("DescribeTrafficMirrorReceiverHealthStatus", req, cb);
    }
    /**
     * 解绑黑石物理服务器或者托管服务器到七层转发路径功能。
     */
    async UnbindL7Backends(req, cb) {
        return this.request("UnbindL7Backends", req, cb);
    }
    /**
     * 删除黑石负载均衡七层转发规则。
     */
    async DeleteL7Rules(req, cb) {
        return this.request("DeleteL7Rules", req, cb);
    }
    /**
     * 查找绑定了某主机或者指定监听器名称的黑石负载均衡四层监听器。
     */
    async DescribeL4ListenerInfo(req, cb) {
        return this.request("DescribeL4ListenerInfo", req, cb);
    }
    /**
     * 获取流量镜像的监听器列表信息。
     */
    async DescribeTrafficMirrorListeners(req, cb) {
        return this.request("DescribeTrafficMirrorListeners", req, cb);
    }
    /**
     * 修改黑石负载均衡七层转发路径。
     */
    async ModifyL7Locations(req, cb) {
        return this.request("ModifyL7Locations", req, cb);
    }
    /**
     * 修改黑石负载均衡四层监听器后端实例端口。
     */
    async ModifyL4BackendPort(req, cb) {
        return this.request("ModifyL4BackendPort", req, cb);
    }
    /**
     * 删除用户指定的黑石负载均衡实例。
     */
    async DeleteLoadBalancer(req, cb) {
        return this.request("DeleteLoadBalancer", req, cb);
    }
    /**
     * 用来创建黑石负载均衡。为了使用黑石负载均衡服务，您必须要创建一个或者多个负载均衡实例。通过成功调用该接口，会返回负载均衡实例的唯一ID。用户可以购买的黑石负载均衡实例类型分为：公网类型、内网类型。公网类型负载均衡对应一个BGP VIP，可用于快速访问公网负载均衡绑定的物理服务器；内网类型负载均衡对应一个腾讯云内部的VIP，不能通过Internet访问，可快速访问内网负载均衡绑定的物理服务器。
     */
    async CreateLoadBalancers(req, cb) {
        return this.request("CreateLoadBalancers", req, cb);
    }
    /**
     * 获取黑石负载均衡七层转发规则。
     */
    async DescribeL7Rules(req, cb) {
        return this.request("DescribeL7Rules", req, cb);
    }
    /**
     * 查询负载均衡实例异步任务的执行情况。
     */
    async DescribeLoadBalancerTaskResult(req, cb) {
        return this.request("DescribeLoadBalancerTaskResult", req, cb);
    }
    /**
     * 查找绑定了某主机或者有某转发域名黑石负载均衡七层监听器。
     */
    async DescribeL7ListenerInfo(req, cb) {
        return this.request("DescribeL7ListenerInfo", req, cb);
    }
    /**
     * 获取黑石负载均衡四层监听器。
     */
    async DescribeL4Listeners(req, cb) {
        return this.request("DescribeL4Listeners", req, cb);
    }
    /**
     * 设置流量镜像的健康检查参数。
     */
    async SetTrafficMirrorHealthSwitch(req, cb) {
        return this.request("SetTrafficMirrorHealthSwitch", req, cb);
    }
    /**
     * 获取黑石负载均衡实例列表
     */
    async DescribeLoadBalancers(req, cb) {
        return this.request("DescribeLoadBalancers", req, cb);
    }
    /**
     * 删除黑石负载均衡监听器。
     */
    async DeleteListeners(req, cb) {
        return this.request("DeleteListeners", req, cb);
    }
    /**
     * 获取黑石负载均衡证书详情。
     */
    async DescribeCertDetail(req, cb) {
        return this.request("DescribeCertDetail", req, cb);
    }
    /**
     * 解绑流量镜像监听器。
     */
    async UnbindTrafficMirrorListeners(req, cb) {
        return this.request("UnbindTrafficMirrorListeners", req, cb);
    }
    /**
     * 修改黑石负载均衡七层转发路径后端实例端口。
     */
    async ModifyL7BackendPort(req, cb) {
        return this.request("ModifyL7BackendPort", req, cb);
    }
    /**
     * 获取黑石负载均衡七层监听器绑定的主机列表
     */
    async DescribeL7Backends(req, cb) {
        return this.request("DescribeL7Backends", req, cb);
    }
    /**
     * 创建流量镜像实例。
     */
    async CreateTrafficMirror(req, cb) {
        return this.request("CreateTrafficMirror", req, cb);
    }
    /**
     * 修改黑石负载均衡四层监听器后端探测端口。
     */
    async ModifyL4BackendProbePort(req, cb) {
        return this.request("ModifyL4BackendProbePort", req, cb);
    }
    /**
     * 绑定黑石服务器到四层监听器。服务器包括物理服务器、虚拟机以及半托管机器。
     */
    async BindL4Backends(req, cb) {
        return this.request("BindL4Backends", req, cb);
    }
    /**
     * 绑定黑石物理服务器成为流量镜像接收机。
     */
    async BindTrafficMirrorReceivers(req, cb) {
        return this.request("BindTrafficMirrorReceivers", req, cb);
    }
    /**
     * 更新黑石负载均衡证书。
     */
    async ReplaceCert(req, cb) {
        return this.request("ReplaceCert", req, cb);
    }
    /**
     * 删除黑石负载均衡七层转发域名。
     */
    async DeleteL7Domains(req, cb) {
        return this.request("DeleteL7Domains", req, cb);
    }
    /**
     * 获取流量镜像实例的列表信息。
     */
    async DescribeTrafficMirrors(req, cb) {
        return this.request("DescribeTrafficMirrors", req, cb);
    }
    /**
     * 获取指定VPC下的7层监听器(支持模糊匹配)。
     */
    async DescribeL7ListenersEx(req, cb) {
        return this.request("DescribeL7ListenersEx", req, cb);
    }
    /**
     * 创建黑石负载均衡证书。
     */
    async UploadCert(req, cb) {
        return this.request("UploadCert", req, cb);
    }
    /**
     * 绑定黑石物理服务器或半托管服务器到七层转发路径。
     */
    async BindL7Backends(req, cb) {
        return this.request("BindL7Backends", req, cb);
    }
    /**
     * 获取黑石负载均衡四层监听器绑定的主机列表。
     */
    async DescribeL4Backends(req, cb) {
        return this.request("DescribeL4Backends", req, cb);
    }
    /**
     * 绑定黑石服务器七层监听器到流量镜像实例。
     */
    async BindTrafficMirrorListeners(req, cb) {
        return this.request("BindTrafficMirrorListeners", req, cb);
    }
    /**
     * 根据输入参数来修改黑石负载均衡实例的基本配置信息。可能的信息包括负载均衡实例的名称，域名前缀。
     */
    async ModifyLoadBalancer(req, cb) {
        return this.request("ModifyLoadBalancer", req, cb);
    }
    /**
     * 设置流量镜像的别名。
     */
    async SetTrafficMirrorAlias(req, cb) {
        return this.request("SetTrafficMirrorAlias", req, cb);
    }
    /**
     * 获取黑石负载均衡端口相关信息。
     */
    async DescribeLoadBalancerPortInfo(req, cb) {
        return this.request("DescribeLoadBalancerPortInfo", req, cb);
    }
    /**
     * 更改黑石负载均衡的计费方式
     */
    async ModifyLoadBalancerChargeMode(req, cb) {
        return this.request("ModifyLoadBalancerChargeMode", req, cb);
    }
    /**
     * 创建黑石负载均衡七层监听器功能。负载均衡七层监听器提供了转发用户请求的具体规则，包括端口、协议等参数。
     */
    async CreateL7Listeners(req, cb) {
        return this.request("CreateL7Listeners", req, cb);
    }
    /**
     * 查询黑石物理机和虚机以及托管服务器绑定的黑石负载均衡详情。
     */
    async DescribeDevicesBindInfo(req, cb) {
        return this.request("DescribeDevicesBindInfo", req, cb);
    }
    /**
     * 修改黑石负载均衡四层监听器。
     */
    async ModifyL4Listener(req, cb) {
        return this.request("ModifyL4Listener", req, cb);
    }
    /**
     * 获取指定流量镜像实例的接收机信息。
     */
    async DescribeTrafficMirrorReceivers(req, cb) {
        return this.request("DescribeTrafficMirrorReceivers", req, cb);
    }
}
exports.Client = Client;

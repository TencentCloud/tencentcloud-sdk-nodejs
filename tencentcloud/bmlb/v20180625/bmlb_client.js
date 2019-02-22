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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const SetTrafficMirrorHealthSwitchRequest = models.SetTrafficMirrorHealthSwitchRequest;
const SetTrafficMirrorAliasResponse = models.SetTrafficMirrorAliasResponse;
const DeleteL7RulesRequest = models.DeleteL7RulesRequest;
const DeleteTrafficMirrorResponse = models.DeleteTrafficMirrorResponse;
const ModifyL7BackendPortResponse = models.ModifyL7BackendPortResponse;
const ModifyL4BackendProbePortResponse = models.ModifyL4BackendProbePortResponse;
const BindTrafficMirrorReceiver = models.BindTrafficMirrorReceiver;
const ModifyL4BackendPortResponse = models.ModifyL4BackendPortResponse;
const ModifyL7LocationsResponse = models.ModifyL7LocationsResponse;
const DescribeTrafficMirrorReceiverHealthStatusRequest = models.DescribeTrafficMirrorReceiverHealthStatusRequest;
const UnbindL4Backend = models.UnbindL4Backend;
const ModifyL4ListenerResponse = models.ModifyL4ListenerResponse;
const DevicesBindInfoL4Listener = models.DevicesBindInfoL4Listener;
const DescribeL4ListenerInfoRequest = models.DescribeL4ListenerInfoRequest;
const L4ListenerInfo = models.L4ListenerInfo;
const DescribeL7RulesRequest = models.DescribeL7RulesRequest;
const UnbindL7BackendsResponse = models.UnbindL7BackendsResponse;
const ModifyL4BackendWeightResponse = models.ModifyL4BackendWeightResponse;
const DeleteL7DomainsResponse = models.DeleteL7DomainsResponse;
const DevicesBindInfoBackend = models.DevicesBindInfoBackend;
const UnbindL4BackendsRequest = models.UnbindL4BackendsRequest;
const DescribeL7ListenersRequest = models.DescribeL7ListenersRequest;
const DescribeTrafficMirrorListenersRequest = models.DescribeTrafficMirrorListenersRequest;
const BindL7Backend = models.BindL7Backend;
const ModifyL7ListenerResponse = models.ModifyL7ListenerResponse;
const DescribeLoadBalancerTaskResultRequest = models.DescribeLoadBalancerTaskResultRequest;
const DescribeL7RulesResponse = models.DescribeL7RulesResponse;
const CreateTrafficMirrorResponse = models.CreateTrafficMirrorResponse;
const DescribeDevicesBindInfoRequest = models.DescribeDevicesBindInfoRequest;
const BindL4BackendsResponse = models.BindL4BackendsResponse;
const TrafficMirrorListener = models.TrafficMirrorListener;
const DescribeL7ListenersExResponse = models.DescribeL7ListenersExResponse;
const UnbindL7Backend = models.UnbindL7Backend;
const TrafficMirrorReceiver = models.TrafficMirrorReceiver;
const TrafficMirrorPortStatus = models.TrafficMirrorPortStatus;
const UploadCertResponse = models.UploadCertResponse;
const DescribeTrafficMirrorReceiversResponse = models.DescribeTrafficMirrorReceiversResponse;
const DeleteListenersRequest = models.DeleteListenersRequest;
const ModifyL4BackendProbePortRequest = models.ModifyL4BackendProbePortRequest;
const DescribeTrafficMirrorsRequest = models.DescribeTrafficMirrorsRequest;
const UploadCertRequest = models.UploadCertRequest;
const DescribeL4ListenerInfoResponse = models.DescribeL4ListenerInfoResponse;
const BindTrafficMirrorListenersRequest = models.BindTrafficMirrorListenersRequest;
const ModifyL7BackendPortRequest = models.ModifyL7BackendPortRequest;
const ModifyL4BackendPortRequest = models.ModifyL4BackendPortRequest;
const DescribeL4ListenersResponse = models.DescribeL4ListenersResponse;
const ModifyL7LocationsRequest = models.ModifyL7LocationsRequest;
const ModifyLoadBalancerResponse = models.ModifyLoadBalancerResponse;
const CreateL4ListenersResponse = models.CreateL4ListenersResponse;
const ModifyL7BackendWeightResponse = models.ModifyL7BackendWeightResponse;
const DescribeTrafficMirrorsResponse = models.DescribeTrafficMirrorsResponse;
const DescribeL7BackendsRequest = models.DescribeL7BackendsRequest;
const L7Listener = models.L7Listener;
const CreateL7RulesRequest = models.CreateL7RulesRequest;
const ModifyL7BackendWeightRequest = models.ModifyL7BackendWeightRequest;
const CreateL4ListenersRequest = models.CreateL4ListenersRequest;
const ReplaceCertRequest = models.ReplaceCertRequest;
const BindL7BackendsResponse = models.BindL7BackendsResponse;
const L7Rule = models.L7Rule;
const UnbindTrafficMirrorReceiversResponse = models.UnbindTrafficMirrorReceiversResponse;
const DeleteL7DomainsRequest = models.DeleteL7DomainsRequest;
const BindTrafficMirrorReceiversRequest = models.BindTrafficMirrorReceiversRequest;
const BindTrafficMirrorListenersResponse = models.BindTrafficMirrorListenersResponse;
const BindL7BackendsRequest = models.BindL7BackendsRequest;
const DescribeL4Backend = models.DescribeL4Backend;
const DescribeCertDetailResponse = models.DescribeCertDetailResponse;
const DescribeL4BackendsRequest = models.DescribeL4BackendsRequest;
const DescribeTrafficMirrorReceiverHealthStatusResponse = models.DescribeTrafficMirrorReceiverHealthStatusResponse;
const BindTrafficMirrorReceiversResponse = models.BindTrafficMirrorReceiversResponse;
const ReplaceCertResponse = models.ReplaceCertResponse;
const DescribeLoadBalancerPortInfoRequest = models.DescribeLoadBalancerPortInfoRequest;
const DevicesBindInfoLocation = models.DevicesBindInfoLocation;
const SetTrafficMirrorHealthSwitchResponse = models.SetTrafficMirrorHealthSwitchResponse;
const DeleteLoadBalancerRequest = models.DeleteLoadBalancerRequest;
const UnbindTrafficMirrorListenersResponse = models.UnbindTrafficMirrorListenersResponse;
const CreateL7Rule = models.CreateL7Rule;
const CreateL7RulesResponse = models.CreateL7RulesResponse;
const ModifyL7ListenerRequest = models.ModifyL7ListenerRequest;
const DescribeTrafficMirrorReceiver = models.DescribeTrafficMirrorReceiver;
const L7ExListener = models.L7ExListener;
const L7ListenerInfo = models.L7ListenerInfo;
const L7ListenerInfoRule = models.L7ListenerInfoRule;
const DescribeL7BackendsResponse = models.DescribeL7BackendsResponse;
const Filter = models.Filter;
const DevicesBindInfoRule = models.DevicesBindInfoRule;
const TrafficMirror = models.TrafficMirror;
const DescribeLoadBalancersRequest = models.DescribeLoadBalancersRequest;
const DevicesBindInfoLoadBalancer = models.DevicesBindInfoLoadBalancer;
const L4Listener = models.L4Listener;
const CreateL7Listener = models.CreateL7Listener;
const DeleteLoadBalancerResponse = models.DeleteLoadBalancerResponse;
const CreateTrafficMirrorRequest = models.CreateTrafficMirrorRequest;
const BindL4BackendsRequest = models.BindL4BackendsRequest;
const DescribeL7ListenerInfoResponse = models.DescribeL7ListenerInfoResponse;
const DescribeL7ListenersResponse = models.DescribeL7ListenersResponse;
const DeleteListenersResponse = models.DeleteListenersResponse;
const CreateLoadBalancersResponse = models.CreateLoadBalancersResponse;
const UnbindTrafficMirrorReceiver = models.UnbindTrafficMirrorReceiver;
const ModifyLoadBalancerChargeModeResponse = models.ModifyLoadBalancerChargeModeResponse;
const UnbindL7BackendsRequest = models.UnbindL7BackendsRequest;
const L7ListenerInfoLocation = models.L7ListenerInfoLocation;
const L7RulesLocation = models.L7RulesLocation;
const ModifyLoadBalancerChargeModeListener = models.ModifyLoadBalancerChargeModeListener;
const TrafficMirrorReciversStatus = models.TrafficMirrorReciversStatus;
const CreateLoadBalancersRequest = models.CreateLoadBalancersRequest;
const DescribeLoadBalancerPortInfoResponse = models.DescribeLoadBalancerPortInfoResponse;
const DescribeL7ListenerInfoRequest = models.DescribeL7ListenerInfoRequest;
const ModifyL4ListenerRequest = models.ModifyL4ListenerRequest;
const L4Backend = models.L4Backend;
const L7Backend = models.L7Backend;
const ModifyL7LocationRule = models.ModifyL7LocationRule;
const ModifyLoadBalancerRequest = models.ModifyLoadBalancerRequest;
const DevicesBindInfoL7Listener = models.DevicesBindInfoL7Listener;
const DescribeL4ListenersRequest = models.DescribeL4ListenersRequest;
const CreateL7ListenersResponse = models.CreateL7ListenersResponse;
const CreateLoadBalancerBzConf = models.CreateLoadBalancerBzConf;
const DeleteTrafficMirrorRequest = models.DeleteTrafficMirrorRequest;
const CreateL7ListenersRequest = models.CreateL7ListenersRequest;
const BindL4Backend = models.BindL4Backend;
const DescribeL7ListenersExRequest = models.DescribeL7ListenersExRequest;
const DescribeLoadBalancerTaskResultResponse = models.DescribeLoadBalancerTaskResultResponse;
const UnbindTrafficMirrorReceiversRequest = models.UnbindTrafficMirrorReceiversRequest;
const UnbindTrafficMirrorListenersRequest = models.UnbindTrafficMirrorListenersRequest;
const DescribeCertDetailRequest = models.DescribeCertDetailRequest;
const DescribeDevicesBindInfoResponse = models.DescribeDevicesBindInfoResponse;
const LoadBalancerPortInfoListener = models.LoadBalancerPortInfoListener;
const DescribeL4BackendsResponse = models.DescribeL4BackendsResponse;
const CreateL4Listener = models.CreateL4Listener;
const DescribeTrafficMirrorListenersResponse = models.DescribeTrafficMirrorListenersResponse;
const DescribeLoadBalancersResponse = models.DescribeLoadBalancersResponse;
const DeleteL7RulesResponse = models.DeleteL7RulesResponse;
const CertDetailLoadBalancer = models.CertDetailLoadBalancer;
const DescribeTrafficMirrorReceiversRequest = models.DescribeTrafficMirrorReceiversRequest;
const SetTrafficMirrorAliasRequest = models.SetTrafficMirrorAliasRequest;
const UnbindL4BackendsResponse = models.UnbindL4BackendsResponse;
const L7ListenerInfoBackend = models.L7ListenerInfoBackend;
const ModifyLoadBalancerChargeModeRequest = models.ModifyLoadBalancerChargeModeRequest;
const ModifyL4BackendWeightRequest = models.ModifyL4BackendWeightRequest;
const LoadBalancer = models.LoadBalancer;


/**
 * bmlb client
 * @class
 */
class BmlbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bmlb.tencentcloudapi.com", "2018-06-25", credential, region, profile);
    }
    
    /**
     * 获取黑石负载均衡七层监听器列表信息。
     * @param {DescribeL7ListenersRequest} req
     * @param {function(string, DescribeL7ListenersResponse):void} cb
     * @public
     */
    DescribeL7Listeners(req, cb) {
        let resp = new DescribeL7ListenersResponse();
        this.request("DescribeL7Listeners", req, resp, cb);
    }

    /**
     * 从流量镜像实例上解绑流量镜像接收机。
     * @param {UnbindTrafficMirrorReceiversRequest} req
     * @param {function(string, UnbindTrafficMirrorReceiversResponse):void} cb
     * @public
     */
    UnbindTrafficMirrorReceivers(req, cb) {
        let resp = new UnbindTrafficMirrorReceiversResponse();
        this.request("UnbindTrafficMirrorReceivers", req, resp, cb);
    }

    /**
     * 修改黑石负载均衡七层转发路径后端实例权重。
     * @param {ModifyL7BackendWeightRequest} req
     * @param {function(string, ModifyL7BackendWeightResponse):void} cb
     * @public
     */
    ModifyL7BackendWeight(req, cb) {
        let resp = new ModifyL7BackendWeightResponse();
        this.request("ModifyL7BackendWeight", req, resp, cb);
    }

    /**
     * 修改黑石负载均衡四层监听器后端实例权重功能。
     * @param {ModifyL4BackendWeightRequest} req
     * @param {function(string, ModifyL4BackendWeightResponse):void} cb
     * @public
     */
    ModifyL4BackendWeight(req, cb) {
        let resp = new ModifyL4BackendWeightResponse();
        this.request("ModifyL4BackendWeight", req, resp, cb);
    }

    /**
     * 创建黑石四层负载均衡监听器功能。黑石负载均衡四层监听器提供了转发用户请求的具体规则，包括端口、协议、会话保持、健康检查等参数。
     * @param {CreateL4ListenersRequest} req
     * @param {function(string, CreateL4ListenersResponse):void} cb
     * @public
     */
    CreateL4Listeners(req, cb) {
        let resp = new CreateL4ListenersResponse();
        this.request("CreateL4Listeners", req, resp, cb);
    }

    /**
     * 解绑黑石负载均衡四层监听器物理服务器。
     * @param {UnbindL4BackendsRequest} req
     * @param {function(string, UnbindL4BackendsResponse):void} cb
     * @public
     */
    UnbindL4Backends(req, cb) {
        let resp = new UnbindL4BackendsResponse();
        this.request("UnbindL4Backends", req, resp, cb);
    }

    /**
     * 修改黑石负载均衡七层监听器。
     * @param {ModifyL7ListenerRequest} req
     * @param {function(string, ModifyL7ListenerResponse):void} cb
     * @public
     */
    ModifyL7Listener(req, cb) {
        let resp = new ModifyL7ListenerResponse();
        this.request("ModifyL7Listener", req, resp, cb);
    }

    /**
     * 删除已创建的黑石流量镜像实例，删除过程是异步执行的，因此需要使用查询任务接口获取删除的结果。
     * @param {DeleteTrafficMirrorRequest} req
     * @param {function(string, DeleteTrafficMirrorResponse):void} cb
     * @public
     */
    DeleteTrafficMirror(req, cb) {
        let resp = new DeleteTrafficMirrorResponse();
        this.request("DeleteTrafficMirror", req, resp, cb);
    }

    /**
     * 创建黑石负载均衡七层转发规则。
     * @param {CreateL7RulesRequest} req
     * @param {function(string, CreateL7RulesResponse):void} cb
     * @public
     */
    CreateL7Rules(req, cb) {
        let resp = new CreateL7RulesResponse();
        this.request("CreateL7Rules", req, resp, cb);
    }

    /**
     * 获取流量镜像接收机健康状态。
     * @param {DescribeTrafficMirrorReceiverHealthStatusRequest} req
     * @param {function(string, DescribeTrafficMirrorReceiverHealthStatusResponse):void} cb
     * @public
     */
    DescribeTrafficMirrorReceiverHealthStatus(req, cb) {
        let resp = new DescribeTrafficMirrorReceiverHealthStatusResponse();
        this.request("DescribeTrafficMirrorReceiverHealthStatus", req, resp, cb);
    }

    /**
     * 解绑黑石物理服务器或者托管服务器到七层转发路径功能。
     * @param {UnbindL7BackendsRequest} req
     * @param {function(string, UnbindL7BackendsResponse):void} cb
     * @public
     */
    UnbindL7Backends(req, cb) {
        let resp = new UnbindL7BackendsResponse();
        this.request("UnbindL7Backends", req, resp, cb);
    }

    /**
     * 删除黑石负载均衡七层转发规则。
     * @param {DeleteL7RulesRequest} req
     * @param {function(string, DeleteL7RulesResponse):void} cb
     * @public
     */
    DeleteL7Rules(req, cb) {
        let resp = new DeleteL7RulesResponse();
        this.request("DeleteL7Rules", req, resp, cb);
    }

    /**
     * 查找绑定了某主机或者指定监听器名称的黑石负载均衡四层监听器。
     * @param {DescribeL4ListenerInfoRequest} req
     * @param {function(string, DescribeL4ListenerInfoResponse):void} cb
     * @public
     */
    DescribeL4ListenerInfo(req, cb) {
        let resp = new DescribeL4ListenerInfoResponse();
        this.request("DescribeL4ListenerInfo", req, resp, cb);
    }

    /**
     * 获取流量镜像的监听器列表信息。
     * @param {DescribeTrafficMirrorListenersRequest} req
     * @param {function(string, DescribeTrafficMirrorListenersResponse):void} cb
     * @public
     */
    DescribeTrafficMirrorListeners(req, cb) {
        let resp = new DescribeTrafficMirrorListenersResponse();
        this.request("DescribeTrafficMirrorListeners", req, resp, cb);
    }

    /**
     * 修改黑石负载均衡七层转发路径。
     * @param {ModifyL7LocationsRequest} req
     * @param {function(string, ModifyL7LocationsResponse):void} cb
     * @public
     */
    ModifyL7Locations(req, cb) {
        let resp = new ModifyL7LocationsResponse();
        this.request("ModifyL7Locations", req, resp, cb);
    }

    /**
     * 修改黑石负载均衡四层监听器后端实例端口。
     * @param {ModifyL4BackendPortRequest} req
     * @param {function(string, ModifyL4BackendPortResponse):void} cb
     * @public
     */
    ModifyL4BackendPort(req, cb) {
        let resp = new ModifyL4BackendPortResponse();
        this.request("ModifyL4BackendPort", req, resp, cb);
    }

    /**
     * 删除用户指定的黑石负载均衡实例。
     * @param {DeleteLoadBalancerRequest} req
     * @param {function(string, DeleteLoadBalancerResponse):void} cb
     * @public
     */
    DeleteLoadBalancer(req, cb) {
        let resp = new DeleteLoadBalancerResponse();
        this.request("DeleteLoadBalancer", req, resp, cb);
    }

    /**
     * 用来创建黑石负载均衡。为了使用黑石负载均衡服务，您必须要创建一个或者多个负载均衡实例。通过成功调用该接口，会返回负载均衡实例的唯一ID。用户可以购买的黑石负载均衡实例类型分为：公网类型、内网类型。公网类型负载均衡对应一个BGP VIP，可用于快速访问公网负载均衡绑定的物理服务器；内网类型负载均衡对应一个腾讯云内部的VIP，不能通过Internet访问，可快速访问内网负载均衡绑定的物理服务器。
     * @param {CreateLoadBalancersRequest} req
     * @param {function(string, CreateLoadBalancersResponse):void} cb
     * @public
     */
    CreateLoadBalancers(req, cb) {
        let resp = new CreateLoadBalancersResponse();
        this.request("CreateLoadBalancers", req, resp, cb);
    }

    /**
     * 获取黑石负载均衡七层转发规则。
     * @param {DescribeL7RulesRequest} req
     * @param {function(string, DescribeL7RulesResponse):void} cb
     * @public
     */
    DescribeL7Rules(req, cb) {
        let resp = new DescribeL7RulesResponse();
        this.request("DescribeL7Rules", req, resp, cb);
    }

    /**
     * 查询负载均衡实例异步任务的执行情况。
     * @param {DescribeLoadBalancerTaskResultRequest} req
     * @param {function(string, DescribeLoadBalancerTaskResultResponse):void} cb
     * @public
     */
    DescribeLoadBalancerTaskResult(req, cb) {
        let resp = new DescribeLoadBalancerTaskResultResponse();
        this.request("DescribeLoadBalancerTaskResult", req, resp, cb);
    }

    /**
     * 查找绑定了某主机或者有某转发域名黑石负载均衡七层监听器。
     * @param {DescribeL7ListenerInfoRequest} req
     * @param {function(string, DescribeL7ListenerInfoResponse):void} cb
     * @public
     */
    DescribeL7ListenerInfo(req, cb) {
        let resp = new DescribeL7ListenerInfoResponse();
        this.request("DescribeL7ListenerInfo", req, resp, cb);
    }

    /**
     * 获取黑石负载均衡四层监听器。
     * @param {DescribeL4ListenersRequest} req
     * @param {function(string, DescribeL4ListenersResponse):void} cb
     * @public
     */
    DescribeL4Listeners(req, cb) {
        let resp = new DescribeL4ListenersResponse();
        this.request("DescribeL4Listeners", req, resp, cb);
    }

    /**
     * 设置流量镜像的健康检查参数。
     * @param {SetTrafficMirrorHealthSwitchRequest} req
     * @param {function(string, SetTrafficMirrorHealthSwitchResponse):void} cb
     * @public
     */
    SetTrafficMirrorHealthSwitch(req, cb) {
        let resp = new SetTrafficMirrorHealthSwitchResponse();
        this.request("SetTrafficMirrorHealthSwitch", req, resp, cb);
    }

    /**
     * 获取黑石负载均衡实例列表
     * @param {DescribeLoadBalancersRequest} req
     * @param {function(string, DescribeLoadBalancersResponse):void} cb
     * @public
     */
    DescribeLoadBalancers(req, cb) {
        let resp = new DescribeLoadBalancersResponse();
        this.request("DescribeLoadBalancers", req, resp, cb);
    }

    /**
     * 删除黑石负载均衡监听器。
     * @param {DeleteListenersRequest} req
     * @param {function(string, DeleteListenersResponse):void} cb
     * @public
     */
    DeleteListeners(req, cb) {
        let resp = new DeleteListenersResponse();
        this.request("DeleteListeners", req, resp, cb);
    }

    /**
     * 获取黑石负载均衡证书详情。
     * @param {DescribeCertDetailRequest} req
     * @param {function(string, DescribeCertDetailResponse):void} cb
     * @public
     */
    DescribeCertDetail(req, cb) {
        let resp = new DescribeCertDetailResponse();
        this.request("DescribeCertDetail", req, resp, cb);
    }

    /**
     * 解绑流量镜像监听器。
     * @param {UnbindTrafficMirrorListenersRequest} req
     * @param {function(string, UnbindTrafficMirrorListenersResponse):void} cb
     * @public
     */
    UnbindTrafficMirrorListeners(req, cb) {
        let resp = new UnbindTrafficMirrorListenersResponse();
        this.request("UnbindTrafficMirrorListeners", req, resp, cb);
    }

    /**
     * 修改黑石负载均衡七层转发路径后端实例端口。
     * @param {ModifyL7BackendPortRequest} req
     * @param {function(string, ModifyL7BackendPortResponse):void} cb
     * @public
     */
    ModifyL7BackendPort(req, cb) {
        let resp = new ModifyL7BackendPortResponse();
        this.request("ModifyL7BackendPort", req, resp, cb);
    }

    /**
     * 获取黑石负载均衡七层监听器绑定的主机列表
     * @param {DescribeL7BackendsRequest} req
     * @param {function(string, DescribeL7BackendsResponse):void} cb
     * @public
     */
    DescribeL7Backends(req, cb) {
        let resp = new DescribeL7BackendsResponse();
        this.request("DescribeL7Backends", req, resp, cb);
    }

    /**
     * 创建流量镜像实例。
     * @param {CreateTrafficMirrorRequest} req
     * @param {function(string, CreateTrafficMirrorResponse):void} cb
     * @public
     */
    CreateTrafficMirror(req, cb) {
        let resp = new CreateTrafficMirrorResponse();
        this.request("CreateTrafficMirror", req, resp, cb);
    }

    /**
     * 修改黑石负载均衡四层监听器后端探测端口。
     * @param {ModifyL4BackendProbePortRequest} req
     * @param {function(string, ModifyL4BackendProbePortResponse):void} cb
     * @public
     */
    ModifyL4BackendProbePort(req, cb) {
        let resp = new ModifyL4BackendProbePortResponse();
        this.request("ModifyL4BackendProbePort", req, resp, cb);
    }

    /**
     * 绑定黑石服务器到四层监听器。服务器包括物理服务器、虚拟机以及半托管机器。
     * @param {BindL4BackendsRequest} req
     * @param {function(string, BindL4BackendsResponse):void} cb
     * @public
     */
    BindL4Backends(req, cb) {
        let resp = new BindL4BackendsResponse();
        this.request("BindL4Backends", req, resp, cb);
    }

    /**
     * 绑定黑石物理服务器成为流量镜像接收机。
     * @param {BindTrafficMirrorReceiversRequest} req
     * @param {function(string, BindTrafficMirrorReceiversResponse):void} cb
     * @public
     */
    BindTrafficMirrorReceivers(req, cb) {
        let resp = new BindTrafficMirrorReceiversResponse();
        this.request("BindTrafficMirrorReceivers", req, resp, cb);
    }

    /**
     * 更新黑石负载均衡证书。
     * @param {ReplaceCertRequest} req
     * @param {function(string, ReplaceCertResponse):void} cb
     * @public
     */
    ReplaceCert(req, cb) {
        let resp = new ReplaceCertResponse();
        this.request("ReplaceCert", req, resp, cb);
    }

    /**
     * 删除黑石负载均衡七层转发域名。
     * @param {DeleteL7DomainsRequest} req
     * @param {function(string, DeleteL7DomainsResponse):void} cb
     * @public
     */
    DeleteL7Domains(req, cb) {
        let resp = new DeleteL7DomainsResponse();
        this.request("DeleteL7Domains", req, resp, cb);
    }

    /**
     * 获取流量镜像实例的列表信息。
     * @param {DescribeTrafficMirrorsRequest} req
     * @param {function(string, DescribeTrafficMirrorsResponse):void} cb
     * @public
     */
    DescribeTrafficMirrors(req, cb) {
        let resp = new DescribeTrafficMirrorsResponse();
        this.request("DescribeTrafficMirrors", req, resp, cb);
    }

    /**
     * 获取指定VPC下的7层监听器(支持模糊匹配)。
     * @param {DescribeL7ListenersExRequest} req
     * @param {function(string, DescribeL7ListenersExResponse):void} cb
     * @public
     */
    DescribeL7ListenersEx(req, cb) {
        let resp = new DescribeL7ListenersExResponse();
        this.request("DescribeL7ListenersEx", req, resp, cb);
    }

    /**
     * 创建黑石负载均衡证书。
     * @param {UploadCertRequest} req
     * @param {function(string, UploadCertResponse):void} cb
     * @public
     */
    UploadCert(req, cb) {
        let resp = new UploadCertResponse();
        this.request("UploadCert", req, resp, cb);
    }

    /**
     * 绑定黑石物理服务器或半托管服务器到七层转发路径。
     * @param {BindL7BackendsRequest} req
     * @param {function(string, BindL7BackendsResponse):void} cb
     * @public
     */
    BindL7Backends(req, cb) {
        let resp = new BindL7BackendsResponse();
        this.request("BindL7Backends", req, resp, cb);
    }

    /**
     * 获取黑石负载均衡四层监听器绑定的主机列表。
     * @param {DescribeL4BackendsRequest} req
     * @param {function(string, DescribeL4BackendsResponse):void} cb
     * @public
     */
    DescribeL4Backends(req, cb) {
        let resp = new DescribeL4BackendsResponse();
        this.request("DescribeL4Backends", req, resp, cb);
    }

    /**
     * 绑定黑石服务器七层监听器到流量镜像实例。
     * @param {BindTrafficMirrorListenersRequest} req
     * @param {function(string, BindTrafficMirrorListenersResponse):void} cb
     * @public
     */
    BindTrafficMirrorListeners(req, cb) {
        let resp = new BindTrafficMirrorListenersResponse();
        this.request("BindTrafficMirrorListeners", req, resp, cb);
    }

    /**
     * 根据输入参数来修改黑石负载均衡实例的基本配置信息。可能的信息包括负载均衡实例的名称，域名前缀。
     * @param {ModifyLoadBalancerRequest} req
     * @param {function(string, ModifyLoadBalancerResponse):void} cb
     * @public
     */
    ModifyLoadBalancer(req, cb) {
        let resp = new ModifyLoadBalancerResponse();
        this.request("ModifyLoadBalancer", req, resp, cb);
    }

    /**
     * 设置流量镜像的别名。
     * @param {SetTrafficMirrorAliasRequest} req
     * @param {function(string, SetTrafficMirrorAliasResponse):void} cb
     * @public
     */
    SetTrafficMirrorAlias(req, cb) {
        let resp = new SetTrafficMirrorAliasResponse();
        this.request("SetTrafficMirrorAlias", req, resp, cb);
    }

    /**
     * 获取黑石负载均衡端口相关信息。
     * @param {DescribeLoadBalancerPortInfoRequest} req
     * @param {function(string, DescribeLoadBalancerPortInfoResponse):void} cb
     * @public
     */
    DescribeLoadBalancerPortInfo(req, cb) {
        let resp = new DescribeLoadBalancerPortInfoResponse();
        this.request("DescribeLoadBalancerPortInfo", req, resp, cb);
    }

    /**
     * 更改黑石负载均衡的计费方式
     * @param {ModifyLoadBalancerChargeModeRequest} req
     * @param {function(string, ModifyLoadBalancerChargeModeResponse):void} cb
     * @public
     */
    ModifyLoadBalancerChargeMode(req, cb) {
        let resp = new ModifyLoadBalancerChargeModeResponse();
        this.request("ModifyLoadBalancerChargeMode", req, resp, cb);
    }

    /**
     * 创建黑石负载均衡七层监听器功能。负载均衡七层监听器提供了转发用户请求的具体规则，包括端口、协议等参数。
     * @param {CreateL7ListenersRequest} req
     * @param {function(string, CreateL7ListenersResponse):void} cb
     * @public
     */
    CreateL7Listeners(req, cb) {
        let resp = new CreateL7ListenersResponse();
        this.request("CreateL7Listeners", req, resp, cb);
    }

    /**
     * 查询黑石物理机和虚机以及托管服务器绑定的黑石负载均衡详情。
     * @param {DescribeDevicesBindInfoRequest} req
     * @param {function(string, DescribeDevicesBindInfoResponse):void} cb
     * @public
     */
    DescribeDevicesBindInfo(req, cb) {
        let resp = new DescribeDevicesBindInfoResponse();
        this.request("DescribeDevicesBindInfo", req, resp, cb);
    }

    /**
     * 修改黑石负载均衡四层监听器。
     * @param {ModifyL4ListenerRequest} req
     * @param {function(string, ModifyL4ListenerResponse):void} cb
     * @public
     */
    ModifyL4Listener(req, cb) {
        let resp = new ModifyL4ListenerResponse();
        this.request("ModifyL4Listener", req, resp, cb);
    }

    /**
     * 获取指定流量镜像实例的接收机信息。
     * @param {DescribeTrafficMirrorReceiversRequest} req
     * @param {function(string, DescribeTrafficMirrorReceiversResponse):void} cb
     * @public
     */
    DescribeTrafficMirrorReceivers(req, cb) {
        let resp = new DescribeTrafficMirrorReceiversResponse();
        this.request("DescribeTrafficMirrorReceivers", req, resp, cb);
    }


}
module.exports = BmlbClient;

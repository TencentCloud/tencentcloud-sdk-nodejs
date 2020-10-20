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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  SetTrafficMirrorHealthSwitchRequest,
  SetTrafficMirrorAliasResponse,
  DeleteL7RulesRequest,
  DeleteTrafficMirrorResponse,
  ModifyL7BackendPortResponse,
  ModifyL4BackendProbePortResponse,
  BindTrafficMirrorReceiver,
  ModifyL4BackendPortResponse,
  ModifyL7LocationsResponse,
  DescribeTrafficMirrorReceiverHealthStatusRequest,
  UnbindL4Backend,
  ModifyL4ListenerResponse,
  DevicesBindInfoL4Listener,
  DescribeL4ListenerInfoRequest,
  L4ListenerInfo,
  DescribeL7RulesRequest,
  UnbindL7BackendsResponse,
  ModifyL4BackendWeightResponse,
  DeleteL7DomainsResponse,
  DevicesBindInfoBackend,
  UnbindL4BackendsRequest,
  DescribeL7ListenersRequest,
  DescribeTrafficMirrorListenersRequest,
  BindL7Backend,
  ModifyL7ListenerResponse,
  DescribeLoadBalancerTaskResultRequest,
  DescribeL7RulesResponse,
  CreateTrafficMirrorResponse,
  DescribeDevicesBindInfoRequest,
  BindL4BackendsResponse,
  TrafficMirrorListener,
  DescribeL7ListenersExResponse,
  UnbindL7Backend,
  TrafficMirrorReceiver,
  TrafficMirrorPortStatus,
  UploadCertResponse,
  DescribeTrafficMirrorReceiversResponse,
  DeleteListenersRequest,
  ModifyL4BackendProbePortRequest,
  DescribeTrafficMirrorsRequest,
  UploadCertRequest,
  DescribeL4ListenerInfoResponse,
  BindTrafficMirrorListenersRequest,
  ModifyL7BackendPortRequest,
  ModifyL4BackendPortRequest,
  DescribeL4ListenersResponse,
  ModifyL7LocationsRequest,
  ModifyLoadBalancerResponse,
  CreateL4ListenersResponse,
  ModifyL7BackendWeightResponse,
  DescribeTrafficMirrorsResponse,
  DescribeL7BackendsRequest,
  L7Listener,
  CreateL7RulesRequest,
  ModifyL7BackendWeightRequest,
  CreateL4ListenersRequest,
  ReplaceCertRequest,
  BindL7BackendsResponse,
  L7Rule,
  UnbindTrafficMirrorReceiversResponse,
  DeleteL7DomainsRequest,
  BindTrafficMirrorReceiversRequest,
  BindTrafficMirrorListenersResponse,
  BindL7BackendsRequest,
  DescribeL4Backend,
  DescribeCertDetailResponse,
  DescribeL4BackendsRequest,
  DescribeTrafficMirrorReceiverHealthStatusResponse,
  BindTrafficMirrorReceiversResponse,
  ReplaceCertResponse,
  DescribeLoadBalancerPortInfoRequest,
  DevicesBindInfoLocation,
  SetTrafficMirrorHealthSwitchResponse,
  DeleteLoadBalancerRequest,
  UnbindTrafficMirrorListenersResponse,
  CreateL7Rule,
  CreateL7RulesResponse,
  ModifyL7ListenerRequest,
  DescribeTrafficMirrorReceiver,
  L7ExListener,
  L7ListenerInfo,
  L7ListenerInfoRule,
  DescribeL7BackendsResponse,
  Filter,
  DevicesBindInfoRule,
  TrafficMirror,
  DescribeLoadBalancersRequest,
  DevicesBindInfoLoadBalancer,
  L4Listener,
  CreateL7Listener,
  DeleteLoadBalancerResponse,
  CreateTrafficMirrorRequest,
  BindL4BackendsRequest,
  DescribeL7ListenerInfoResponse,
  DescribeL7ListenersResponse,
  DeleteListenersResponse,
  CreateLoadBalancersResponse,
  UnbindTrafficMirrorReceiver,
  ModifyLoadBalancerChargeModeResponse,
  UnbindL7BackendsRequest,
  L7ListenerInfoLocation,
  L7RulesLocation,
  ModifyLoadBalancerChargeModeListener,
  TrafficMirrorReciversStatus,
  CreateLoadBalancersRequest,
  DescribeLoadBalancerPortInfoResponse,
  DescribeL7ListenerInfoRequest,
  ModifyL4ListenerRequest,
  L4Backend,
  L7Backend,
  ModifyL7LocationRule,
  ModifyLoadBalancerRequest,
  DevicesBindInfoL7Listener,
  DescribeL4ListenersRequest,
  CreateL7ListenersResponse,
  CreateLoadBalancerBzConf,
  DeleteTrafficMirrorRequest,
  CreateL7ListenersRequest,
  BindL4Backend,
  DescribeL7ListenersExRequest,
  DescribeLoadBalancerTaskResultResponse,
  UnbindTrafficMirrorReceiversRequest,
  UnbindTrafficMirrorListenersRequest,
  DescribeCertDetailRequest,
  DescribeDevicesBindInfoResponse,
  LoadBalancerPortInfoListener,
  DescribeL4BackendsResponse,
  CreateL4Listener,
  DescribeTrafficMirrorListenersResponse,
  DescribeLoadBalancersResponse,
  DeleteL7RulesResponse,
  CertDetailLoadBalancer,
  DescribeTrafficMirrorReceiversRequest,
  SetTrafficMirrorAliasRequest,
  UnbindL4BackendsResponse,
  L7ListenerInfoBackend,
  ModifyLoadBalancerChargeModeRequest,
  ModifyL4BackendWeightRequest,
  LoadBalancer,
} from "./bmlb_models"

/**
 * bmlb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("bmlb.tencentcloudapi.com", "2018-06-25", clientConfig)
  }

  /**
   * 获取黑石负载均衡七层监听器列表信息。
   */
  async DescribeL7Listeners(
    req: DescribeL7ListenersRequest,
    cb?: (error: string, rep: DescribeL7ListenersResponse) => void
  ): Promise<DescribeL7ListenersResponse> {
    return this.request("DescribeL7Listeners", req, cb)
  }

  /**
   * 从流量镜像实例上解绑流量镜像接收机。
   */
  async UnbindTrafficMirrorReceivers(
    req: UnbindTrafficMirrorReceiversRequest,
    cb?: (error: string, rep: UnbindTrafficMirrorReceiversResponse) => void
  ): Promise<UnbindTrafficMirrorReceiversResponse> {
    return this.request("UnbindTrafficMirrorReceivers", req, cb)
  }

  /**
   * 修改黑石负载均衡七层转发路径后端实例权重。
   */
  async ModifyL7BackendWeight(
    req: ModifyL7BackendWeightRequest,
    cb?: (error: string, rep: ModifyL7BackendWeightResponse) => void
  ): Promise<ModifyL7BackendWeightResponse> {
    return this.request("ModifyL7BackendWeight", req, cb)
  }

  /**
   * 修改黑石负载均衡四层监听器后端实例权重功能。
   */
  async ModifyL4BackendWeight(
    req: ModifyL4BackendWeightRequest,
    cb?: (error: string, rep: ModifyL4BackendWeightResponse) => void
  ): Promise<ModifyL4BackendWeightResponse> {
    return this.request("ModifyL4BackendWeight", req, cb)
  }

  /**
   * 创建黑石四层负载均衡监听器功能。黑石负载均衡四层监听器提供了转发用户请求的具体规则，包括端口、协议、会话保持、健康检查等参数。
   */
  async CreateL4Listeners(
    req: CreateL4ListenersRequest,
    cb?: (error: string, rep: CreateL4ListenersResponse) => void
  ): Promise<CreateL4ListenersResponse> {
    return this.request("CreateL4Listeners", req, cb)
  }

  /**
   * 解绑黑石负载均衡四层监听器物理服务器。
   */
  async UnbindL4Backends(
    req: UnbindL4BackendsRequest,
    cb?: (error: string, rep: UnbindL4BackendsResponse) => void
  ): Promise<UnbindL4BackendsResponse> {
    return this.request("UnbindL4Backends", req, cb)
  }

  /**
   * 修改黑石负载均衡七层监听器。
   */
  async ModifyL7Listener(
    req: ModifyL7ListenerRequest,
    cb?: (error: string, rep: ModifyL7ListenerResponse) => void
  ): Promise<ModifyL7ListenerResponse> {
    return this.request("ModifyL7Listener", req, cb)
  }

  /**
   * 删除已创建的黑石流量镜像实例，删除过程是异步执行的，因此需要使用查询任务接口获取删除的结果。
   */
  async DeleteTrafficMirror(
    req: DeleteTrafficMirrorRequest,
    cb?: (error: string, rep: DeleteTrafficMirrorResponse) => void
  ): Promise<DeleteTrafficMirrorResponse> {
    return this.request("DeleteTrafficMirror", req, cb)
  }

  /**
   * 创建黑石负载均衡七层转发规则。
   */
  async CreateL7Rules(
    req: CreateL7RulesRequest,
    cb?: (error: string, rep: CreateL7RulesResponse) => void
  ): Promise<CreateL7RulesResponse> {
    return this.request("CreateL7Rules", req, cb)
  }

  /**
   * 获取流量镜像接收机健康状态。
   */
  async DescribeTrafficMirrorReceiverHealthStatus(
    req: DescribeTrafficMirrorReceiverHealthStatusRequest,
    cb?: (error: string, rep: DescribeTrafficMirrorReceiverHealthStatusResponse) => void
  ): Promise<DescribeTrafficMirrorReceiverHealthStatusResponse> {
    return this.request("DescribeTrafficMirrorReceiverHealthStatus", req, cb)
  }

  /**
   * 解绑黑石物理服务器或者托管服务器到七层转发路径功能。
   */
  async UnbindL7Backends(
    req: UnbindL7BackendsRequest,
    cb?: (error: string, rep: UnbindL7BackendsResponse) => void
  ): Promise<UnbindL7BackendsResponse> {
    return this.request("UnbindL7Backends", req, cb)
  }

  /**
   * 删除黑石负载均衡七层转发规则。
   */
  async DeleteL7Rules(
    req: DeleteL7RulesRequest,
    cb?: (error: string, rep: DeleteL7RulesResponse) => void
  ): Promise<DeleteL7RulesResponse> {
    return this.request("DeleteL7Rules", req, cb)
  }

  /**
   * 查找绑定了某主机或者指定监听器名称的黑石负载均衡四层监听器。
   */
  async DescribeL4ListenerInfo(
    req: DescribeL4ListenerInfoRequest,
    cb?: (error: string, rep: DescribeL4ListenerInfoResponse) => void
  ): Promise<DescribeL4ListenerInfoResponse> {
    return this.request("DescribeL4ListenerInfo", req, cb)
  }

  /**
   * 获取流量镜像的监听器列表信息。
   */
  async DescribeTrafficMirrorListeners(
    req: DescribeTrafficMirrorListenersRequest,
    cb?: (error: string, rep: DescribeTrafficMirrorListenersResponse) => void
  ): Promise<DescribeTrafficMirrorListenersResponse> {
    return this.request("DescribeTrafficMirrorListeners", req, cb)
  }

  /**
   * 修改黑石负载均衡七层转发路径。
   */
  async ModifyL7Locations(
    req: ModifyL7LocationsRequest,
    cb?: (error: string, rep: ModifyL7LocationsResponse) => void
  ): Promise<ModifyL7LocationsResponse> {
    return this.request("ModifyL7Locations", req, cb)
  }

  /**
   * 修改黑石负载均衡四层监听器后端实例端口。
   */
  async ModifyL4BackendPort(
    req: ModifyL4BackendPortRequest,
    cb?: (error: string, rep: ModifyL4BackendPortResponse) => void
  ): Promise<ModifyL4BackendPortResponse> {
    return this.request("ModifyL4BackendPort", req, cb)
  }

  /**
   * 删除用户指定的黑石负载均衡实例。
   */
  async DeleteLoadBalancer(
    req: DeleteLoadBalancerRequest,
    cb?: (error: string, rep: DeleteLoadBalancerResponse) => void
  ): Promise<DeleteLoadBalancerResponse> {
    return this.request("DeleteLoadBalancer", req, cb)
  }

  /**
   * 用来创建黑石负载均衡。为了使用黑石负载均衡服务，您必须要创建一个或者多个负载均衡实例。通过成功调用该接口，会返回负载均衡实例的唯一ID。用户可以购买的黑石负载均衡实例类型分为：公网类型、内网类型。公网类型负载均衡对应一个BGP VIP，可用于快速访问公网负载均衡绑定的物理服务器；内网类型负载均衡对应一个腾讯云内部的VIP，不能通过Internet访问，可快速访问内网负载均衡绑定的物理服务器。
   */
  async CreateLoadBalancers(
    req: CreateLoadBalancersRequest,
    cb?: (error: string, rep: CreateLoadBalancersResponse) => void
  ): Promise<CreateLoadBalancersResponse> {
    return this.request("CreateLoadBalancers", req, cb)
  }

  /**
   * 获取黑石负载均衡七层转发规则。
   */
  async DescribeL7Rules(
    req: DescribeL7RulesRequest,
    cb?: (error: string, rep: DescribeL7RulesResponse) => void
  ): Promise<DescribeL7RulesResponse> {
    return this.request("DescribeL7Rules", req, cb)
  }

  /**
   * 查询负载均衡实例异步任务的执行情况。
   */
  async DescribeLoadBalancerTaskResult(
    req: DescribeLoadBalancerTaskResultRequest,
    cb?: (error: string, rep: DescribeLoadBalancerTaskResultResponse) => void
  ): Promise<DescribeLoadBalancerTaskResultResponse> {
    return this.request("DescribeLoadBalancerTaskResult", req, cb)
  }

  /**
   * 查找绑定了某主机或者有某转发域名黑石负载均衡七层监听器。
   */
  async DescribeL7ListenerInfo(
    req: DescribeL7ListenerInfoRequest,
    cb?: (error: string, rep: DescribeL7ListenerInfoResponse) => void
  ): Promise<DescribeL7ListenerInfoResponse> {
    return this.request("DescribeL7ListenerInfo", req, cb)
  }

  /**
   * 获取黑石负载均衡四层监听器。
   */
  async DescribeL4Listeners(
    req: DescribeL4ListenersRequest,
    cb?: (error: string, rep: DescribeL4ListenersResponse) => void
  ): Promise<DescribeL4ListenersResponse> {
    return this.request("DescribeL4Listeners", req, cb)
  }

  /**
   * 设置流量镜像的健康检查参数。
   */
  async SetTrafficMirrorHealthSwitch(
    req: SetTrafficMirrorHealthSwitchRequest,
    cb?: (error: string, rep: SetTrafficMirrorHealthSwitchResponse) => void
  ): Promise<SetTrafficMirrorHealthSwitchResponse> {
    return this.request("SetTrafficMirrorHealthSwitch", req, cb)
  }

  /**
   * 获取黑石负载均衡实例列表
   */
  async DescribeLoadBalancers(
    req: DescribeLoadBalancersRequest,
    cb?: (error: string, rep: DescribeLoadBalancersResponse) => void
  ): Promise<DescribeLoadBalancersResponse> {
    return this.request("DescribeLoadBalancers", req, cb)
  }

  /**
   * 删除黑石负载均衡监听器。
   */
  async DeleteListeners(
    req: DeleteListenersRequest,
    cb?: (error: string, rep: DeleteListenersResponse) => void
  ): Promise<DeleteListenersResponse> {
    return this.request("DeleteListeners", req, cb)
  }

  /**
   * 获取黑石负载均衡证书详情。
   */
  async DescribeCertDetail(
    req: DescribeCertDetailRequest,
    cb?: (error: string, rep: DescribeCertDetailResponse) => void
  ): Promise<DescribeCertDetailResponse> {
    return this.request("DescribeCertDetail", req, cb)
  }

  /**
   * 解绑流量镜像监听器。
   */
  async UnbindTrafficMirrorListeners(
    req: UnbindTrafficMirrorListenersRequest,
    cb?: (error: string, rep: UnbindTrafficMirrorListenersResponse) => void
  ): Promise<UnbindTrafficMirrorListenersResponse> {
    return this.request("UnbindTrafficMirrorListeners", req, cb)
  }

  /**
   * 修改黑石负载均衡七层转发路径后端实例端口。
   */
  async ModifyL7BackendPort(
    req: ModifyL7BackendPortRequest,
    cb?: (error: string, rep: ModifyL7BackendPortResponse) => void
  ): Promise<ModifyL7BackendPortResponse> {
    return this.request("ModifyL7BackendPort", req, cb)
  }

  /**
   * 获取黑石负载均衡七层监听器绑定的主机列表
   */
  async DescribeL7Backends(
    req: DescribeL7BackendsRequest,
    cb?: (error: string, rep: DescribeL7BackendsResponse) => void
  ): Promise<DescribeL7BackendsResponse> {
    return this.request("DescribeL7Backends", req, cb)
  }

  /**
   * 创建流量镜像实例。
   */
  async CreateTrafficMirror(
    req: CreateTrafficMirrorRequest,
    cb?: (error: string, rep: CreateTrafficMirrorResponse) => void
  ): Promise<CreateTrafficMirrorResponse> {
    return this.request("CreateTrafficMirror", req, cb)
  }

  /**
   * 修改黑石负载均衡四层监听器后端探测端口。
   */
  async ModifyL4BackendProbePort(
    req: ModifyL4BackendProbePortRequest,
    cb?: (error: string, rep: ModifyL4BackendProbePortResponse) => void
  ): Promise<ModifyL4BackendProbePortResponse> {
    return this.request("ModifyL4BackendProbePort", req, cb)
  }

  /**
   * 绑定黑石服务器到四层监听器。服务器包括物理服务器、虚拟机以及半托管机器。
   */
  async BindL4Backends(
    req: BindL4BackendsRequest,
    cb?: (error: string, rep: BindL4BackendsResponse) => void
  ): Promise<BindL4BackendsResponse> {
    return this.request("BindL4Backends", req, cb)
  }

  /**
   * 绑定黑石物理服务器成为流量镜像接收机。
   */
  async BindTrafficMirrorReceivers(
    req: BindTrafficMirrorReceiversRequest,
    cb?: (error: string, rep: BindTrafficMirrorReceiversResponse) => void
  ): Promise<BindTrafficMirrorReceiversResponse> {
    return this.request("BindTrafficMirrorReceivers", req, cb)
  }

  /**
   * 更新黑石负载均衡证书。
   */
  async ReplaceCert(
    req: ReplaceCertRequest,
    cb?: (error: string, rep: ReplaceCertResponse) => void
  ): Promise<ReplaceCertResponse> {
    return this.request("ReplaceCert", req, cb)
  }

  /**
   * 删除黑石负载均衡七层转发域名。
   */
  async DeleteL7Domains(
    req: DeleteL7DomainsRequest,
    cb?: (error: string, rep: DeleteL7DomainsResponse) => void
  ): Promise<DeleteL7DomainsResponse> {
    return this.request("DeleteL7Domains", req, cb)
  }

  /**
   * 获取流量镜像实例的列表信息。
   */
  async DescribeTrafficMirrors(
    req: DescribeTrafficMirrorsRequest,
    cb?: (error: string, rep: DescribeTrafficMirrorsResponse) => void
  ): Promise<DescribeTrafficMirrorsResponse> {
    return this.request("DescribeTrafficMirrors", req, cb)
  }

  /**
   * 获取指定VPC下的7层监听器(支持模糊匹配)。
   */
  async DescribeL7ListenersEx(
    req: DescribeL7ListenersExRequest,
    cb?: (error: string, rep: DescribeL7ListenersExResponse) => void
  ): Promise<DescribeL7ListenersExResponse> {
    return this.request("DescribeL7ListenersEx", req, cb)
  }

  /**
   * 创建黑石负载均衡证书。
   */
  async UploadCert(
    req: UploadCertRequest,
    cb?: (error: string, rep: UploadCertResponse) => void
  ): Promise<UploadCertResponse> {
    return this.request("UploadCert", req, cb)
  }

  /**
   * 绑定黑石物理服务器或半托管服务器到七层转发路径。
   */
  async BindL7Backends(
    req: BindL7BackendsRequest,
    cb?: (error: string, rep: BindL7BackendsResponse) => void
  ): Promise<BindL7BackendsResponse> {
    return this.request("BindL7Backends", req, cb)
  }

  /**
   * 获取黑石负载均衡四层监听器绑定的主机列表。
   */
  async DescribeL4Backends(
    req: DescribeL4BackendsRequest,
    cb?: (error: string, rep: DescribeL4BackendsResponse) => void
  ): Promise<DescribeL4BackendsResponse> {
    return this.request("DescribeL4Backends", req, cb)
  }

  /**
   * 绑定黑石服务器七层监听器到流量镜像实例。
   */
  async BindTrafficMirrorListeners(
    req: BindTrafficMirrorListenersRequest,
    cb?: (error: string, rep: BindTrafficMirrorListenersResponse) => void
  ): Promise<BindTrafficMirrorListenersResponse> {
    return this.request("BindTrafficMirrorListeners", req, cb)
  }

  /**
   * 根据输入参数来修改黑石负载均衡实例的基本配置信息。可能的信息包括负载均衡实例的名称，域名前缀。
   */
  async ModifyLoadBalancer(
    req: ModifyLoadBalancerRequest,
    cb?: (error: string, rep: ModifyLoadBalancerResponse) => void
  ): Promise<ModifyLoadBalancerResponse> {
    return this.request("ModifyLoadBalancer", req, cb)
  }

  /**
   * 设置流量镜像的别名。
   */
  async SetTrafficMirrorAlias(
    req: SetTrafficMirrorAliasRequest,
    cb?: (error: string, rep: SetTrafficMirrorAliasResponse) => void
  ): Promise<SetTrafficMirrorAliasResponse> {
    return this.request("SetTrafficMirrorAlias", req, cb)
  }

  /**
   * 获取黑石负载均衡端口相关信息。
   */
  async DescribeLoadBalancerPortInfo(
    req: DescribeLoadBalancerPortInfoRequest,
    cb?: (error: string, rep: DescribeLoadBalancerPortInfoResponse) => void
  ): Promise<DescribeLoadBalancerPortInfoResponse> {
    return this.request("DescribeLoadBalancerPortInfo", req, cb)
  }

  /**
   * 更改黑石负载均衡的计费方式
   */
  async ModifyLoadBalancerChargeMode(
    req: ModifyLoadBalancerChargeModeRequest,
    cb?: (error: string, rep: ModifyLoadBalancerChargeModeResponse) => void
  ): Promise<ModifyLoadBalancerChargeModeResponse> {
    return this.request("ModifyLoadBalancerChargeMode", req, cb)
  }

  /**
   * 创建黑石负载均衡七层监听器功能。负载均衡七层监听器提供了转发用户请求的具体规则，包括端口、协议等参数。
   */
  async CreateL7Listeners(
    req: CreateL7ListenersRequest,
    cb?: (error: string, rep: CreateL7ListenersResponse) => void
  ): Promise<CreateL7ListenersResponse> {
    return this.request("CreateL7Listeners", req, cb)
  }

  /**
   * 查询黑石物理机和虚机以及托管服务器绑定的黑石负载均衡详情。
   */
  async DescribeDevicesBindInfo(
    req: DescribeDevicesBindInfoRequest,
    cb?: (error: string, rep: DescribeDevicesBindInfoResponse) => void
  ): Promise<DescribeDevicesBindInfoResponse> {
    return this.request("DescribeDevicesBindInfo", req, cb)
  }

  /**
   * 修改黑石负载均衡四层监听器。
   */
  async ModifyL4Listener(
    req: ModifyL4ListenerRequest,
    cb?: (error: string, rep: ModifyL4ListenerResponse) => void
  ): Promise<ModifyL4ListenerResponse> {
    return this.request("ModifyL4Listener", req, cb)
  }

  /**
   * 获取指定流量镜像实例的接收机信息。
   */
  async DescribeTrafficMirrorReceivers(
    req: DescribeTrafficMirrorReceiversRequest,
    cb?: (error: string, rep: DescribeTrafficMirrorReceiversResponse) => void
  ): Promise<DescribeTrafficMirrorReceiversResponse> {
    return this.request("DescribeTrafficMirrorReceivers", req, cb)
  }
}

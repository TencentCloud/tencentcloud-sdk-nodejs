import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SetTrafficMirrorHealthSwitchRequest, SetTrafficMirrorAliasResponse, DeleteL7RulesRequest, DeleteTrafficMirrorResponse, ModifyL7BackendPortResponse, ModifyL4BackendProbePortResponse, ModifyL4BackendPortResponse, ModifyL7LocationsResponse, DescribeTrafficMirrorReceiverHealthStatusRequest, ModifyL4ListenerResponse, DescribeL4ListenerInfoRequest, DescribeL7RulesRequest, UnbindL7BackendsResponse, ModifyL4BackendWeightResponse, DeleteL7DomainsResponse, UnbindL4BackendsRequest, DescribeL7ListenersRequest, DescribeTrafficMirrorListenersRequest, ModifyL7ListenerResponse, DescribeLoadBalancerTaskResultRequest, DescribeL7RulesResponse, CreateTrafficMirrorResponse, DescribeDevicesBindInfoRequest, BindL4BackendsResponse, DescribeL7ListenersExResponse, UploadCertResponse, DescribeTrafficMirrorReceiversResponse, DeleteListenersRequest, ModifyL4BackendProbePortRequest, DescribeTrafficMirrorsRequest, UploadCertRequest, DescribeL4ListenerInfoResponse, BindTrafficMirrorListenersRequest, ModifyL7BackendPortRequest, ModifyL4BackendPortRequest, DescribeL4ListenersResponse, ModifyL7LocationsRequest, ModifyLoadBalancerResponse, CreateL4ListenersResponse, ModifyL7BackendWeightResponse, DescribeTrafficMirrorsResponse, DescribeL7BackendsRequest, CreateL7RulesRequest, ModifyL7BackendWeightRequest, CreateL4ListenersRequest, ReplaceCertRequest, BindL7BackendsResponse, UnbindTrafficMirrorReceiversResponse, DeleteL7DomainsRequest, BindTrafficMirrorReceiversRequest, BindTrafficMirrorListenersResponse, BindL7BackendsRequest, DescribeCertDetailResponse, DescribeL4BackendsRequest, DescribeTrafficMirrorReceiverHealthStatusResponse, BindTrafficMirrorReceiversResponse, ReplaceCertResponse, DescribeLoadBalancerPortInfoRequest, SetTrafficMirrorHealthSwitchResponse, DeleteLoadBalancerRequest, UnbindTrafficMirrorListenersResponse, CreateL7RulesResponse, ModifyL7ListenerRequest, DescribeL7BackendsResponse, DescribeLoadBalancersRequest, DeleteLoadBalancerResponse, CreateTrafficMirrorRequest, BindL4BackendsRequest, DescribeL7ListenerInfoResponse, DescribeL7ListenersResponse, DeleteListenersResponse, CreateLoadBalancersResponse, ModifyLoadBalancerChargeModeResponse, UnbindL7BackendsRequest, CreateLoadBalancersRequest, DescribeLoadBalancerPortInfoResponse, DescribeL7ListenerInfoRequest, ModifyL4ListenerRequest, ModifyLoadBalancerRequest, DescribeL4ListenersRequest, CreateL7ListenersResponse, DeleteTrafficMirrorRequest, CreateL7ListenersRequest, DescribeL7ListenersExRequest, DescribeLoadBalancerTaskResultResponse, UnbindTrafficMirrorReceiversRequest, UnbindTrafficMirrorListenersRequest, DescribeCertDetailRequest, DescribeDevicesBindInfoResponse, DescribeL4BackendsResponse, DescribeTrafficMirrorListenersResponse, DescribeLoadBalancersResponse, DeleteL7RulesResponse, DescribeTrafficMirrorReceiversRequest, SetTrafficMirrorAliasRequest, UnbindL4BackendsResponse, ModifyLoadBalancerChargeModeRequest, ModifyL4BackendWeightRequest } from "./bmlb_models";
/**
 * bmlb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取黑石负载均衡七层监听器列表信息。
     */
    DescribeL7Listeners(req: DescribeL7ListenersRequest, cb?: (error: string, rep: DescribeL7ListenersResponse) => void): Promise<DescribeL7ListenersResponse>;
    /**
     * 从流量镜像实例上解绑流量镜像接收机。
     */
    UnbindTrafficMirrorReceivers(req: UnbindTrafficMirrorReceiversRequest, cb?: (error: string, rep: UnbindTrafficMirrorReceiversResponse) => void): Promise<UnbindTrafficMirrorReceiversResponse>;
    /**
     * 修改黑石负载均衡七层转发路径后端实例权重。
     */
    ModifyL7BackendWeight(req: ModifyL7BackendWeightRequest, cb?: (error: string, rep: ModifyL7BackendWeightResponse) => void): Promise<ModifyL7BackendWeightResponse>;
    /**
     * 修改黑石负载均衡四层监听器后端实例权重功能。
     */
    ModifyL4BackendWeight(req: ModifyL4BackendWeightRequest, cb?: (error: string, rep: ModifyL4BackendWeightResponse) => void): Promise<ModifyL4BackendWeightResponse>;
    /**
     * 创建黑石四层负载均衡监听器功能。黑石负载均衡四层监听器提供了转发用户请求的具体规则，包括端口、协议、会话保持、健康检查等参数。
     */
    CreateL4Listeners(req: CreateL4ListenersRequest, cb?: (error: string, rep: CreateL4ListenersResponse) => void): Promise<CreateL4ListenersResponse>;
    /**
     * 解绑黑石负载均衡四层监听器物理服务器。
     */
    UnbindL4Backends(req: UnbindL4BackendsRequest, cb?: (error: string, rep: UnbindL4BackendsResponse) => void): Promise<UnbindL4BackendsResponse>;
    /**
     * 修改黑石负载均衡七层监听器。
     */
    ModifyL7Listener(req: ModifyL7ListenerRequest, cb?: (error: string, rep: ModifyL7ListenerResponse) => void): Promise<ModifyL7ListenerResponse>;
    /**
     * 删除已创建的黑石流量镜像实例，删除过程是异步执行的，因此需要使用查询任务接口获取删除的结果。
     */
    DeleteTrafficMirror(req: DeleteTrafficMirrorRequest, cb?: (error: string, rep: DeleteTrafficMirrorResponse) => void): Promise<DeleteTrafficMirrorResponse>;
    /**
     * 创建黑石负载均衡七层转发规则。
     */
    CreateL7Rules(req: CreateL7RulesRequest, cb?: (error: string, rep: CreateL7RulesResponse) => void): Promise<CreateL7RulesResponse>;
    /**
     * 获取流量镜像接收机健康状态。
     */
    DescribeTrafficMirrorReceiverHealthStatus(req: DescribeTrafficMirrorReceiverHealthStatusRequest, cb?: (error: string, rep: DescribeTrafficMirrorReceiverHealthStatusResponse) => void): Promise<DescribeTrafficMirrorReceiverHealthStatusResponse>;
    /**
     * 解绑黑石物理服务器或者托管服务器到七层转发路径功能。
     */
    UnbindL7Backends(req: UnbindL7BackendsRequest, cb?: (error: string, rep: UnbindL7BackendsResponse) => void): Promise<UnbindL7BackendsResponse>;
    /**
     * 删除黑石负载均衡七层转发规则。
     */
    DeleteL7Rules(req: DeleteL7RulesRequest, cb?: (error: string, rep: DeleteL7RulesResponse) => void): Promise<DeleteL7RulesResponse>;
    /**
     * 查找绑定了某主机或者指定监听器名称的黑石负载均衡四层监听器。
     */
    DescribeL4ListenerInfo(req: DescribeL4ListenerInfoRequest, cb?: (error: string, rep: DescribeL4ListenerInfoResponse) => void): Promise<DescribeL4ListenerInfoResponse>;
    /**
     * 获取流量镜像的监听器列表信息。
     */
    DescribeTrafficMirrorListeners(req: DescribeTrafficMirrorListenersRequest, cb?: (error: string, rep: DescribeTrafficMirrorListenersResponse) => void): Promise<DescribeTrafficMirrorListenersResponse>;
    /**
     * 修改黑石负载均衡七层转发路径。
     */
    ModifyL7Locations(req: ModifyL7LocationsRequest, cb?: (error: string, rep: ModifyL7LocationsResponse) => void): Promise<ModifyL7LocationsResponse>;
    /**
     * 修改黑石负载均衡四层监听器后端实例端口。
     */
    ModifyL4BackendPort(req: ModifyL4BackendPortRequest, cb?: (error: string, rep: ModifyL4BackendPortResponse) => void): Promise<ModifyL4BackendPortResponse>;
    /**
     * 删除用户指定的黑石负载均衡实例。
     */
    DeleteLoadBalancer(req: DeleteLoadBalancerRequest, cb?: (error: string, rep: DeleteLoadBalancerResponse) => void): Promise<DeleteLoadBalancerResponse>;
    /**
     * 用来创建黑石负载均衡。为了使用黑石负载均衡服务，您必须要创建一个或者多个负载均衡实例。通过成功调用该接口，会返回负载均衡实例的唯一ID。用户可以购买的黑石负载均衡实例类型分为：公网类型、内网类型。公网类型负载均衡对应一个BGP VIP，可用于快速访问公网负载均衡绑定的物理服务器；内网类型负载均衡对应一个腾讯云内部的VIP，不能通过Internet访问，可快速访问内网负载均衡绑定的物理服务器。
     */
    CreateLoadBalancers(req: CreateLoadBalancersRequest, cb?: (error: string, rep: CreateLoadBalancersResponse) => void): Promise<CreateLoadBalancersResponse>;
    /**
     * 获取黑石负载均衡七层转发规则。
     */
    DescribeL7Rules(req: DescribeL7RulesRequest, cb?: (error: string, rep: DescribeL7RulesResponse) => void): Promise<DescribeL7RulesResponse>;
    /**
     * 查询负载均衡实例异步任务的执行情况。
     */
    DescribeLoadBalancerTaskResult(req: DescribeLoadBalancerTaskResultRequest, cb?: (error: string, rep: DescribeLoadBalancerTaskResultResponse) => void): Promise<DescribeLoadBalancerTaskResultResponse>;
    /**
     * 查找绑定了某主机或者有某转发域名黑石负载均衡七层监听器。
     */
    DescribeL7ListenerInfo(req: DescribeL7ListenerInfoRequest, cb?: (error: string, rep: DescribeL7ListenerInfoResponse) => void): Promise<DescribeL7ListenerInfoResponse>;
    /**
     * 获取黑石负载均衡四层监听器。
     */
    DescribeL4Listeners(req: DescribeL4ListenersRequest, cb?: (error: string, rep: DescribeL4ListenersResponse) => void): Promise<DescribeL4ListenersResponse>;
    /**
     * 设置流量镜像的健康检查参数。
     */
    SetTrafficMirrorHealthSwitch(req: SetTrafficMirrorHealthSwitchRequest, cb?: (error: string, rep: SetTrafficMirrorHealthSwitchResponse) => void): Promise<SetTrafficMirrorHealthSwitchResponse>;
    /**
     * 获取黑石负载均衡实例列表
     */
    DescribeLoadBalancers(req: DescribeLoadBalancersRequest, cb?: (error: string, rep: DescribeLoadBalancersResponse) => void): Promise<DescribeLoadBalancersResponse>;
    /**
     * 删除黑石负载均衡监听器。
     */
    DeleteListeners(req: DeleteListenersRequest, cb?: (error: string, rep: DeleteListenersResponse) => void): Promise<DeleteListenersResponse>;
    /**
     * 获取黑石负载均衡证书详情。
     */
    DescribeCertDetail(req: DescribeCertDetailRequest, cb?: (error: string, rep: DescribeCertDetailResponse) => void): Promise<DescribeCertDetailResponse>;
    /**
     * 解绑流量镜像监听器。
     */
    UnbindTrafficMirrorListeners(req: UnbindTrafficMirrorListenersRequest, cb?: (error: string, rep: UnbindTrafficMirrorListenersResponse) => void): Promise<UnbindTrafficMirrorListenersResponse>;
    /**
     * 修改黑石负载均衡七层转发路径后端实例端口。
     */
    ModifyL7BackendPort(req: ModifyL7BackendPortRequest, cb?: (error: string, rep: ModifyL7BackendPortResponse) => void): Promise<ModifyL7BackendPortResponse>;
    /**
     * 获取黑石负载均衡七层监听器绑定的主机列表
     */
    DescribeL7Backends(req: DescribeL7BackendsRequest, cb?: (error: string, rep: DescribeL7BackendsResponse) => void): Promise<DescribeL7BackendsResponse>;
    /**
     * 创建流量镜像实例。
     */
    CreateTrafficMirror(req: CreateTrafficMirrorRequest, cb?: (error: string, rep: CreateTrafficMirrorResponse) => void): Promise<CreateTrafficMirrorResponse>;
    /**
     * 修改黑石负载均衡四层监听器后端探测端口。
     */
    ModifyL4BackendProbePort(req: ModifyL4BackendProbePortRequest, cb?: (error: string, rep: ModifyL4BackendProbePortResponse) => void): Promise<ModifyL4BackendProbePortResponse>;
    /**
     * 绑定黑石服务器到四层监听器。服务器包括物理服务器、虚拟机以及半托管机器。
     */
    BindL4Backends(req: BindL4BackendsRequest, cb?: (error: string, rep: BindL4BackendsResponse) => void): Promise<BindL4BackendsResponse>;
    /**
     * 绑定黑石物理服务器成为流量镜像接收机。
     */
    BindTrafficMirrorReceivers(req: BindTrafficMirrorReceiversRequest, cb?: (error: string, rep: BindTrafficMirrorReceiversResponse) => void): Promise<BindTrafficMirrorReceiversResponse>;
    /**
     * 更新黑石负载均衡证书。
     */
    ReplaceCert(req: ReplaceCertRequest, cb?: (error: string, rep: ReplaceCertResponse) => void): Promise<ReplaceCertResponse>;
    /**
     * 删除黑石负载均衡七层转发域名。
     */
    DeleteL7Domains(req: DeleteL7DomainsRequest, cb?: (error: string, rep: DeleteL7DomainsResponse) => void): Promise<DeleteL7DomainsResponse>;
    /**
     * 获取流量镜像实例的列表信息。
     */
    DescribeTrafficMirrors(req: DescribeTrafficMirrorsRequest, cb?: (error: string, rep: DescribeTrafficMirrorsResponse) => void): Promise<DescribeTrafficMirrorsResponse>;
    /**
     * 获取指定VPC下的7层监听器(支持模糊匹配)。
     */
    DescribeL7ListenersEx(req: DescribeL7ListenersExRequest, cb?: (error: string, rep: DescribeL7ListenersExResponse) => void): Promise<DescribeL7ListenersExResponse>;
    /**
     * 创建黑石负载均衡证书。
     */
    UploadCert(req: UploadCertRequest, cb?: (error: string, rep: UploadCertResponse) => void): Promise<UploadCertResponse>;
    /**
     * 绑定黑石物理服务器或半托管服务器到七层转发路径。
     */
    BindL7Backends(req: BindL7BackendsRequest, cb?: (error: string, rep: BindL7BackendsResponse) => void): Promise<BindL7BackendsResponse>;
    /**
     * 获取黑石负载均衡四层监听器绑定的主机列表。
     */
    DescribeL4Backends(req: DescribeL4BackendsRequest, cb?: (error: string, rep: DescribeL4BackendsResponse) => void): Promise<DescribeL4BackendsResponse>;
    /**
     * 绑定黑石服务器七层监听器到流量镜像实例。
     */
    BindTrafficMirrorListeners(req: BindTrafficMirrorListenersRequest, cb?: (error: string, rep: BindTrafficMirrorListenersResponse) => void): Promise<BindTrafficMirrorListenersResponse>;
    /**
     * 根据输入参数来修改黑石负载均衡实例的基本配置信息。可能的信息包括负载均衡实例的名称，域名前缀。
     */
    ModifyLoadBalancer(req: ModifyLoadBalancerRequest, cb?: (error: string, rep: ModifyLoadBalancerResponse) => void): Promise<ModifyLoadBalancerResponse>;
    /**
     * 设置流量镜像的别名。
     */
    SetTrafficMirrorAlias(req: SetTrafficMirrorAliasRequest, cb?: (error: string, rep: SetTrafficMirrorAliasResponse) => void): Promise<SetTrafficMirrorAliasResponse>;
    /**
     * 获取黑石负载均衡端口相关信息。
     */
    DescribeLoadBalancerPortInfo(req: DescribeLoadBalancerPortInfoRequest, cb?: (error: string, rep: DescribeLoadBalancerPortInfoResponse) => void): Promise<DescribeLoadBalancerPortInfoResponse>;
    /**
     * 更改黑石负载均衡的计费方式
     */
    ModifyLoadBalancerChargeMode(req: ModifyLoadBalancerChargeModeRequest, cb?: (error: string, rep: ModifyLoadBalancerChargeModeResponse) => void): Promise<ModifyLoadBalancerChargeModeResponse>;
    /**
     * 创建黑石负载均衡七层监听器功能。负载均衡七层监听器提供了转发用户请求的具体规则，包括端口、协议等参数。
     */
    CreateL7Listeners(req: CreateL7ListenersRequest, cb?: (error: string, rep: CreateL7ListenersResponse) => void): Promise<CreateL7ListenersResponse>;
    /**
     * 查询黑石物理机和虚机以及托管服务器绑定的黑石负载均衡详情。
     */
    DescribeDevicesBindInfo(req: DescribeDevicesBindInfoRequest, cb?: (error: string, rep: DescribeDevicesBindInfoResponse) => void): Promise<DescribeDevicesBindInfoResponse>;
    /**
     * 修改黑石负载均衡四层监听器。
     */
    ModifyL4Listener(req: ModifyL4ListenerRequest, cb?: (error: string, rep: ModifyL4ListenerResponse) => void): Promise<ModifyL4ListenerResponse>;
    /**
     * 获取指定流量镜像实例的接收机信息。
     */
    DescribeTrafficMirrorReceivers(req: DescribeTrafficMirrorReceiversRequest, cb?: (error: string, rep: DescribeTrafficMirrorReceiversResponse) => void): Promise<DescribeTrafficMirrorReceiversResponse>;
}

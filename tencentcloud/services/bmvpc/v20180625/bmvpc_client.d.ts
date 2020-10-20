import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifySubnetDHCPRelayResponse, DescribeNatSubnetsResponse, DescribeVpcPeerConnectionsResponse, UnbindIpsFromNatGatewayResponse, ModifyRouteTableRequest, CreateRoutePoliciesRequest, CreateVirtualSubnetWithVlanRequest, DeleteVirtualIpResponse, DescribeSubnetsRequest, CreateSubnetRequest, DownloadCustomerGatewayConfigurationRequest, CreateHostedInterfaceResponse, DescribeSubnetByDeviceResponse, DeleteSubnetResponse, DeregisterIpsResponse, DescribeSubnetsResponse, ModifyVpcPeerConnectionResponse, DescribeCustomerGatewaysResponse, UnbindSubnetsFromNatGatewayRequest, DeleteRoutePolicyResponse, DescribeVpnGatewaysResponse, CreateInterfacesResponse, DescribeNatSubnetsRequest, DownloadCustomerGatewayConfigurationResponse, DeleteSubnetRequest, DeleteRoutePolicyRequest, ModifyRoutePolicyRequest, DescribeVpcQuotaRequest, CreateDockerSubnetWithVlanResponse, DescribeSubnetAvailableIpsRequest, DeleteVpcRequest, UnbindEipsFromNatGatewayRequest, DescribeRoutePoliciesResponse, CreateSubnetResponse, AcceptVpcPeerConnectionRequest, BindSubnetsToNatGatewayResponse, CreateVpcResponse, CreateCustomerGatewayResponse, DescribeTaskStatusResponse, DeleteVpnGatewayRequest, DescribeSubnetByHostedDeviceRequest, CreateVpcPeerConnectionResponse, ModifySubnetAttributeRequest, ResetVpnConnectionRequest, DeleteNatGatewayRequest, DeleteVpnConnectionResponse, ModifyCustomerGatewayAttributeResponse, CreateDockerSubnetWithVlanRequest, DeleteHostedInterfaceResponse, DeleteVpcPeerConnectionResponse, DeleteHostedInterfacesResponse, ModifySubnetDHCPRelayRequest, DeleteVpcPeerConnectionRequest, DeleteHostedInterfaceRequest, BindEipsToNatGatewayRequest, DeleteInterfacesRequest, DescribeVpcsRequest, DescribeVpcResourceResponse, RejectVpcPeerConnectionResponse, ModifyCustomerGatewayAttributeRequest, DescribeRouteTablesResponse, ModifyRouteTableResponse, DescribeNatGatewaysResponse, ModifyVpcAttributeResponse, ModifyVpnConnectionAttributeResponse, DescribeSubnetAvailableIpsResponse, DescribeNatGatewaysRequest, DescribeVpnConnectionsRequest, ModifyVpcPeerConnectionRequest, DeleteCustomerGatewayResponse, ModifyVpcAttributeRequest, CreateRoutePoliciesResponse, DescribeRouteTablesRequest, DeleteVirtualIpRequest, DescribeVpnGatewaysRequest, CreateHostedInterfaceRequest, BindSubnetsToNatGatewayRequest, ResetVpnConnectionResponse, RejectVpcPeerConnectionRequest, DescribeCustomerGatewaysRequest, CreateCustomerGatewayRequest, DeleteHostedInterfacesRequest, DescribeTaskStatusRequest, ModifyVpnConnectionAttributeRequest, DescribeVpcResourceRequest, BindEipsToNatGatewayResponse, DescribeVpcViewResponse, DescribeVpcViewRequest, DescribeSubnetByDeviceRequest, AcceptVpcPeerConnectionResponse, DescribeRoutePoliciesRequest, ModifyVpnGatewayAttributeRequest, CreateNatGatewayRequest, DeleteVpnConnectionRequest, UnbindSubnetsFromNatGatewayResponse, DescribeVpnConnectionsResponse, DeleteCustomerGatewayRequest, UpgradeNatGatewayRequest, DeleteVpnGatewayResponse, DeleteInterfacesResponse, UnbindIpsFromNatGatewayRequest, CreateVirtualSubnetWithVlanResponse, ModifyVpnGatewayAttributeResponse, DescribeVpcQuotaResponse, UnbindEipsFromNatGatewayResponse, ModifySubnetAttributeResponse, CreateInterfacesRequest, DescribeVpcPeerConnectionsRequest, CreateVpcRequest, DescribeSubnetByHostedDeviceResponse, CreateVpcPeerConnectionRequest, ModifyRoutePolicyResponse, AsyncRegisterIpsResponse, DeleteVpcResponse, BindIpsToNatGatewayResponse, CreateNatGatewayResponse, AsyncRegisterIpsRequest, BindIpsToNatGatewayRequest, DescribeVpcsResponse, DeregisterIpsRequest, UpgradeNatGatewayResponse, DeleteNatGatewayResponse } from "./bmvpc_models";
/**
 * bmvpc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口(DownloadCustomerGatewayConfiguration)用于下载VPN通道配置。
     */
    DownloadCustomerGatewayConfiguration(req: DownloadCustomerGatewayConfigurationRequest, cb?: (error: string, rep: DownloadCustomerGatewayConfigurationResponse) => void): Promise<DownloadCustomerGatewayConfigurationResponse>;
    /**
     * 本接口（DescribeCustomerGateways）用于查询对端网关列表。
     */
    DescribeCustomerGateways(req: DescribeCustomerGatewaysRequest, cb?: (error: string, rep: DescribeCustomerGatewaysResponse) => void): Promise<DescribeCustomerGatewaysResponse>;
    /**
     * 创建对等连接
     */
    CreateVpcPeerConnection(req: CreateVpcPeerConnectionRequest, cb?: (error: string, rep: CreateVpcPeerConnectionResponse) => void): Promise<CreateVpcPeerConnectionResponse>;
    /**
     * 批量注册虚拟IP，异步接口。通过接口来查询任务进度。每次请求最多注册256个IP
     */
    AsyncRegisterIps(req: AsyncRegisterIpsRequest, cb?: (error: string, rep: AsyncRegisterIpsResponse) => void): Promise<AsyncRegisterIpsResponse>;
    /**
     * 本接口（DescribeRouteTables）用于查询路由表。
     */
    DescribeRouteTables(req: DescribeRouteTablesRequest, cb?: (error: string, rep: DescribeRouteTablesResponse) => void): Promise<DescribeRouteTablesResponse>;
    /**
     * NAT网关解绑该EIP后，NAT网关将不会使用该EIP作为访问外网的源IP地址

     */
    UnbindEipsFromNatGateway(req: UnbindEipsFromNatGatewayRequest, cb?: (error: string, rep: UnbindEipsFromNatGatewayResponse) => void): Promise<UnbindEipsFromNatGatewayResponse>;
    /**
     * NAT网关绑定EIP接口，可将EIP绑定到NAT网关，该EIP作为访问外网的源IP地址，将流量发送到Internet
     */
    BindEipsToNatGateway(req: BindEipsToNatGatewayRequest, cb?: (error: string, rep: BindEipsToNatGatewayResponse) => void): Promise<BindEipsToNatGatewayResponse>;
    /**
     * 修改黑石对等连接
     */
    ModifyVpcPeerConnection(req: ModifyVpcPeerConnectionRequest, cb?: (error: string, rep: ModifyVpcPeerConnectionResponse) => void): Promise<ModifyVpcPeerConnectionResponse>;
    /**
     * 创建黑石私有网络
     */
    CreateVpc(req: CreateVpcRequest, cb?: (error: string, rep: CreateVpcResponse) => void): Promise<CreateVpcResponse>;
    /**
     * 创建NAT网关接口，可针对网段方式、子网全部IP、子网部分IP这三种方式创建NAT网关
     */
    CreateNatGateway(req: CreateNatGatewayRequest, cb?: (error: string, rep: CreateNatGatewayResponse) => void): Promise<CreateNatGatewayResponse>;
    /**
     * 获取子网内可用IP列表
     */
    DescribeSubnetAvailableIps(req: DescribeSubnetAvailableIpsRequest, cb?: (error: string, rep: DescribeSubnetAvailableIpsResponse) => void): Promise<DescribeSubnetAvailableIpsResponse>;
    /**
     * 本接口（DescribeRoutePolicies）用于查询路由表条目。
     */
    DescribeRoutePolicies(req: DescribeRoutePoliciesRequest, cb?: (error: string, rep: DescribeRoutePoliciesResponse) => void): Promise<DescribeRoutePoliciesResponse>;
    /**
     * 本接口(DeleteVpc)用于删除黑石私有网络(VPC)。

删除私有网络前，请清理该私有网络下所有资源，包括子网、负载均衡、弹性 IP、对等连接、NAT 网关、专线通道、SSLVPN 等资源。
     */
    DeleteVpc(req: DeleteVpcRequest, cb?: (error: string, rep: DeleteVpcResponse) => void): Promise<DeleteVpcResponse>;
    /**
     * 本接口用于托管机器从VLANID不为5的子网中移除。
1) 不能从vlanId 为5的子网中移除。
2) 每次调用最多能支持传入10台物理机。
     */
    DeleteHostedInterface(req: DeleteHostedInterfaceRequest, cb?: (error: string, rep: DeleteHostedInterfaceResponse) => void): Promise<DeleteHostedInterfaceResponse>;
    /**
     * 注销私有网络IP为空闲
     */
    DeregisterIps(req: DeregisterIpsRequest, cb?: (error: string, rep: DeregisterIpsResponse) => void): Promise<DeregisterIpsResponse>;
    /**
     * 修改自定义路由
     */
    ModifyRoutePolicy(req: ModifyRoutePolicyRequest, cb?: (error: string, rep: ModifyRoutePolicyResponse) => void): Promise<ModifyRoutePolicyResponse>;
    /**
     * 物理机加入子网
     */
    CreateInterfaces(req: CreateInterfacesRequest, cb?: (error: string, rep: CreateInterfacesResponse) => void): Promise<CreateInterfacesResponse>;
    /**
     * 本接口（ModifyCustomerGatewayAttribute）用于修改对端网关信息。
     */
    ModifyCustomerGatewayAttribute(req: ModifyCustomerGatewayAttributeRequest, cb?: (error: string, rep: ModifyCustomerGatewayAttributeResponse) => void): Promise<ModifyCustomerGatewayAttributeResponse>;
    /**
     * 删除黑石路由表路由规则
     */
    DeleteRoutePolicy(req: DeleteRoutePolicyRequest, cb?: (error: string, rep: DeleteRoutePolicyResponse) => void): Promise<DeleteRoutePolicyResponse>;
    /**
     * 本接口（ModifyVpnConnectionAttribute）用于修改VPN通道。
     */
    ModifyVpnConnectionAttribute(req: ModifyVpnConnectionAttributeRequest, cb?: (error: string, rep: ModifyVpnConnectionAttributeResponse) => void): Promise<ModifyVpnConnectionAttributeResponse>;
    /**
     * 本接口(DeleteVpnConnection)用于删除VPN通道。
     */
    DeleteVpnConnection(req: DeleteVpnConnectionRequest, cb?: (error: string, rep: DeleteVpnConnectionResponse) => void): Promise<DeleteVpnConnectionResponse>;
    /**
     * 本接口（DeleteVpnGateway）用于删除VPN网关。
     */
    DeleteVpnGateway(req: DeleteVpnGatewayRequest, cb?: (error: string, rep: DeleteVpnGatewayResponse) => void): Promise<DeleteVpnGatewayResponse>;
    /**
     * 可用于将子网的部分IP绑定到NAT网关
     */
    BindIpsToNatGateway(req: BindIpsToNatGatewayRequest, cb?: (error: string, rep: BindIpsToNatGatewayResponse) => void): Promise<BindIpsToNatGatewayResponse>;
    /**
     * 本接口（ModifyVpnGatewayAttribute）用于修改VPN网关属性。
     */
    ModifyVpnGatewayAttribute(req: ModifyVpnGatewayAttributeRequest, cb?: (error: string, rep: ModifyVpnGatewayAttributeResponse) => void): Promise<ModifyVpnGatewayAttributeResponse>;
    /**
     * NAT网关解绑IP接口，可将子网的部分IP从NAT网关中解绑
     */
    UnbindIpsFromNatGateway(req: UnbindIpsFromNatGatewayRequest, cb?: (error: string, rep: UnbindIpsFromNatGatewayResponse) => void): Promise<UnbindIpsFromNatGatewayResponse>;
    /**
     * 本接口（DeleteCustomerGateway）用于删除对端网关。
     */
    DeleteCustomerGateway(req: DeleteCustomerGatewayRequest, cb?: (error: string, rep: DeleteCustomerGatewayResponse) => void): Promise<DeleteCustomerGatewayResponse>;
    /**
     * 本接口（DeleteSubnet）用于删除黑石私有网络子网。
删除子网前，请清理该子网下所有资源，包括物理机、负载均衡、黑石数据库、弹性IP、NAT网关等资源
     */
    DeleteSubnet(req: DeleteSubnetRequest, cb?: (error: string, rep: DeleteSubnetResponse) => void): Promise<DeleteSubnetResponse>;
    /**
     * 修改子网属性
     */
    ModifySubnetAttribute(req: ModifySubnetAttributeRequest, cb?: (error: string, rep: ModifySubnetAttributeResponse) => void): Promise<ModifySubnetAttributeResponse>;
    /**
     * 可获取NAT网关绑定的子网信息
     */
    DescribeNatSubnets(req: DescribeNatSubnetsRequest, cb?: (error: string, rep: DescribeNatSubnetsResponse) => void): Promise<DescribeNatSubnetsResponse>;
    /**
     * 拒绝黑石对等连接申请
     */
    RejectVpcPeerConnection(req: RejectVpcPeerConnectionRequest, cb?: (error: string, rep: RejectVpcPeerConnectionResponse) => void): Promise<RejectVpcPeerConnectionResponse>;
    /**
     * 本接口（DescribeSubnets）用于查询黑石子网列表。
     */
    DescribeSubnets(req: DescribeSubnetsRequest, cb?: (error: string, rep: DescribeSubnetsResponse) => void): Promise<DescribeSubnetsResponse>;
    /**
     * 物理机可以加入物理机子网，虚拟子网，DOCKER子网，通过此接口可以查询物理机加入的子网。
     */
    DescribeSubnetByDevice(req: DescribeSubnetByDeviceRequest, cb?: (error: string, rep: DescribeSubnetByDeviceResponse) => void): Promise<DescribeSubnetByDeviceResponse>;
    /**
     * 修改路由表
     */
    ModifyRouteTable(req: ModifyRouteTableRequest, cb?: (error: string, rep: ModifyRouteTableResponse) => void): Promise<ModifyRouteTableResponse>;
    /**
     * 修改子网DHCP Relay属性
     */
    ModifySubnetDHCPRelay(req: ModifySubnetDHCPRelayRequest, cb?: (error: string, rep: ModifySubnetDHCPRelayResponse) => void): Promise<ModifySubnetDHCPRelayResponse>;
    /**
     * 本接口（DescribeVpcView）用于查询VPC网络拓扑视图。
     */
    DescribeVpcView(req: DescribeVpcViewRequest, cb?: (error: string, rep: DescribeVpcViewResponse) => void): Promise<DescribeVpcViewResponse>;
    /**
     * 退还虚拟IP。此接口只能退还虚拟IP，物理机IP不能退还。
     */
    DeleteVirtualIp(req: DeleteVirtualIpRequest, cb?: (error: string, rep: DeleteVirtualIpResponse) => void): Promise<DeleteVirtualIpResponse>;
    /**
     * 本接口（CreateCustomerGateway）用于创建对端网关。
     */
    CreateCustomerGateway(req: CreateCustomerGatewayRequest, cb?: (error: string, rep: CreateCustomerGatewayResponse) => void): Promise<CreateCustomerGatewayResponse>;
    /**
     * 根据任务ID，获取任务的执行状态
     */
    DescribeTaskStatus(req: DescribeTaskStatusRequest, cb?: (error: string, rep: DescribeTaskStatusResponse) => void): Promise<DescribeTaskStatusResponse>;
    /**
     * 创建黑石Docker子网， 如果不指定VlanId，将会分配2000--2999范围的VlanId; 子网会关闭分布式网关
     */
    CreateDockerSubnetWithVlan(req: CreateDockerSubnetWithVlanRequest, cb?: (error: string, rep: CreateDockerSubnetWithVlanResponse) => void): Promise<CreateDockerSubnetWithVlanResponse>;
    /**
     * 升级NAT网关接口，可NAT网关修改为小型NAT网关、中型NAT网关、以及大型NAT网关

     */
    UpgradeNatGateway(req: UpgradeNatGatewayRequest, cb?: (error: string, rep: UpgradeNatGatewayResponse) => void): Promise<UpgradeNatGatewayResponse>;
    /**
     * 创建黑石路由表的路由规则
     */
    CreateRoutePolicies(req: CreateRoutePoliciesRequest, cb?: (error: string, rep: CreateRoutePoliciesResponse) => void): Promise<CreateRoutePoliciesResponse>;
    /**
     * 查询黑石私有网络关联资源
     */
    DescribeVpcResource(req: DescribeVpcResourceRequest, cb?: (error: string, rep: DescribeVpcResourceResponse) => void): Promise<DescribeVpcResourceResponse>;
    /**
     * NAT网关解绑子网接口，可将子网解绑NAT网关
     */
    UnbindSubnetsFromNatGateway(req: UnbindSubnetsFromNatGatewayRequest, cb?: (error: string, rep: UnbindSubnetsFromNatGatewayResponse) => void): Promise<UnbindSubnetsFromNatGatewayResponse>;
    /**
     * 本接口(ResetVpnConnection)用于重置VPN通道。
     */
    ResetVpnConnection(req: ResetVpnConnectionRequest, cb?: (error: string, rep: ResetVpnConnectionResponse) => void): Promise<ResetVpnConnectionResponse>;
    /**
     * 本接口（DescribeVpnGateways）用于查询VPN网关列表。
     */
    DescribeVpnGateways(req: DescribeVpnGatewaysRequest, cb?: (error: string, rep: DescribeVpnGatewaysResponse) => void): Promise<DescribeVpnGatewaysResponse>;
    /**
     * 托管机器移除子网批量接口，传入一台托管机器和多个子网，批量移除这些子网。异步接口，接口返回TaskId。
     */
    DeleteHostedInterfaces(req: DeleteHostedInterfacesRequest, cb?: (error: string, rep: DeleteHostedInterfacesResponse) => void): Promise<DeleteHostedInterfacesResponse>;
    /**
     * 接受黑石对等连接
     */
    AcceptVpcPeerConnection(req: AcceptVpcPeerConnectionRequest, cb?: (error: string, rep: AcceptVpcPeerConnectionResponse) => void): Promise<AcceptVpcPeerConnectionResponse>;
    /**
     * 本接口（DescribeVpcQuota）用于查询用户VPC相关配额限制。
     */
    DescribeVpcQuota(req: DescribeVpcQuotaRequest, cb?: (error: string, rep: DescribeVpcQuotaResponse) => void): Promise<DescribeVpcQuotaResponse>;
    /**
     * 获取NAT网关信息，包括NAT网关 ID、网关名称、私有网络、网关并发连接上限、绑定EIP列表等
     */
    DescribeNatGateways(req: DescribeNatGatewaysRequest, cb?: (error: string, rep: DescribeNatGatewaysResponse) => void): Promise<DescribeNatGatewaysResponse>;
    /**
     * NAT网关绑定子网后，该子网内全部IP可出公网
     */
    BindSubnetsToNatGateway(req: BindSubnetsToNatGatewayRequest, cb?: (error: string, rep: BindSubnetsToNatGatewayResponse) => void): Promise<BindSubnetsToNatGatewayResponse>;
    /**
     * 物理机移除子网批量接口，传入一台物理机和多个子网，批量移除这些子网。异步接口，接口返回TaskId。
     */
    DeleteInterfaces(req: DeleteInterfacesRequest, cb?: (error: string, rep: DeleteInterfacesResponse) => void): Promise<DeleteInterfacesResponse>;
    /**
     * 本接口（CreateHostedInterface）用于黑石托管机器加入带VLANID不为5的子网。

1) 不能加入vlanId 为5的子网，只能加入VLANID范围为2000-2999的子网。
2) 每台托管机器最多可以加入20个子网。
3) 每次调用最多能支持传入10台托管机器。
     */
    CreateHostedInterface(req: CreateHostedInterfaceRequest, cb?: (error: string, rep: CreateHostedInterfaceResponse) => void): Promise<CreateHostedInterfaceResponse>;
    /**
     *  本接口（DescribeVpnConnections）查询VPN通道列表。
     */
    DescribeVpnConnections(req: DescribeVpnConnectionsRequest, cb?: (error: string, rep: DescribeVpnConnectionsResponse) => void): Promise<DescribeVpnConnectionsResponse>;
    /**
     * 托管可以加入物理机子网，虚拟子网，DOCKER子网，通过此接口可以查询托管加入的子网。
     */
    DescribeSubnetByHostedDevice(req: DescribeSubnetByHostedDeviceRequest, cb?: (error: string, rep: DescribeSubnetByHostedDeviceResponse) => void): Promise<DescribeSubnetByHostedDeviceResponse>;
    /**
     * 获取对等连接列表
     */
    DescribeVpcPeerConnections(req: DescribeVpcPeerConnectionsRequest, cb?: (error: string, rep: DescribeVpcPeerConnectionsResponse) => void): Promise<DescribeVpcPeerConnectionsResponse>;
    /**
     * 本接口（DescribeVpcs）用于查询私有网络列表。
本接口不传参数时，返回默认排序下的前20条VPC信息。
     */
    DescribeVpcs(req: DescribeVpcsRequest, cb?: (error: string, rep: DescribeVpcsResponse) => void): Promise<DescribeVpcsResponse>;
    /**
     * 删除黑石对等连接
     */
    DeleteVpcPeerConnection(req: DeleteVpcPeerConnectionRequest, cb?: (error: string, rep: DeleteVpcPeerConnectionResponse) => void): Promise<DeleteVpcPeerConnectionResponse>;
    /**
     * 本接口（ModifyVpcAttribute）用于修改VPC的标识名称和控制VPC的监控起停。
     */
    ModifyVpcAttribute(req: ModifyVpcAttributeRequest, cb?: (error: string, rep: ModifyVpcAttributeResponse) => void): Promise<ModifyVpcAttributeResponse>;
    /**
     * 删除NAT网关
     */
    DeleteNatGateway(req: DeleteNatGatewayRequest, cb?: (error: string, rep: DeleteNatGatewayResponse) => void): Promise<DeleteNatGatewayResponse>;
    /**
     * 创建黑石虚拟子网， 虚拟子网用于在黑石上创建虚拟网络，与黑石子网要做好规划。虚拟子网会分配2000-2999的VlanId。
     */
    CreateVirtualSubnetWithVlan(req: CreateVirtualSubnetWithVlanRequest, cb?: (error: string, rep: CreateVirtualSubnetWithVlanResponse) => void): Promise<CreateVirtualSubnetWithVlanResponse>;
    /**
     * 创建黑石私有网络的子网
访问管理: 用户可以对VpcId进行授权操作。例如设置资源为["qcs::bmvpc:::unVpc/vpc-xxxxx"]
     */
    CreateSubnet(req: CreateSubnetRequest, cb?: (error: string, rep: CreateSubnetResponse) => void): Promise<CreateSubnetResponse>;
}

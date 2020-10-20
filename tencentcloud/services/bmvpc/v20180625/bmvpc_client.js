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
 * bmvpc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("bmvpc.tencentcloudapi.com", "2018-06-25", clientConfig);
    }
    /**
     * 本接口(DownloadCustomerGatewayConfiguration)用于下载VPN通道配置。
     */
    async DownloadCustomerGatewayConfiguration(req, cb) {
        return this.request("DownloadCustomerGatewayConfiguration", req, cb);
    }
    /**
     * 本接口（DescribeCustomerGateways）用于查询对端网关列表。
     */
    async DescribeCustomerGateways(req, cb) {
        return this.request("DescribeCustomerGateways", req, cb);
    }
    /**
     * 创建对等连接
     */
    async CreateVpcPeerConnection(req, cb) {
        return this.request("CreateVpcPeerConnection", req, cb);
    }
    /**
     * 批量注册虚拟IP，异步接口。通过接口来查询任务进度。每次请求最多注册256个IP
     */
    async AsyncRegisterIps(req, cb) {
        return this.request("AsyncRegisterIps", req, cb);
    }
    /**
     * 本接口（DescribeRouteTables）用于查询路由表。
     */
    async DescribeRouteTables(req, cb) {
        return this.request("DescribeRouteTables", req, cb);
    }
    /**
     * NAT网关解绑该EIP后，NAT网关将不会使用该EIP作为访问外网的源IP地址

     */
    async UnbindEipsFromNatGateway(req, cb) {
        return this.request("UnbindEipsFromNatGateway", req, cb);
    }
    /**
     * NAT网关绑定EIP接口，可将EIP绑定到NAT网关，该EIP作为访问外网的源IP地址，将流量发送到Internet
     */
    async BindEipsToNatGateway(req, cb) {
        return this.request("BindEipsToNatGateway", req, cb);
    }
    /**
     * 修改黑石对等连接
     */
    async ModifyVpcPeerConnection(req, cb) {
        return this.request("ModifyVpcPeerConnection", req, cb);
    }
    /**
     * 创建黑石私有网络
     */
    async CreateVpc(req, cb) {
        return this.request("CreateVpc", req, cb);
    }
    /**
     * 创建NAT网关接口，可针对网段方式、子网全部IP、子网部分IP这三种方式创建NAT网关
     */
    async CreateNatGateway(req, cb) {
        return this.request("CreateNatGateway", req, cb);
    }
    /**
     * 获取子网内可用IP列表
     */
    async DescribeSubnetAvailableIps(req, cb) {
        return this.request("DescribeSubnetAvailableIps", req, cb);
    }
    /**
     * 本接口（DescribeRoutePolicies）用于查询路由表条目。
     */
    async DescribeRoutePolicies(req, cb) {
        return this.request("DescribeRoutePolicies", req, cb);
    }
    /**
     * 本接口(DeleteVpc)用于删除黑石私有网络(VPC)。

删除私有网络前，请清理该私有网络下所有资源，包括子网、负载均衡、弹性 IP、对等连接、NAT 网关、专线通道、SSLVPN 等资源。
     */
    async DeleteVpc(req, cb) {
        return this.request("DeleteVpc", req, cb);
    }
    /**
     * 本接口用于托管机器从VLANID不为5的子网中移除。
1) 不能从vlanId 为5的子网中移除。
2) 每次调用最多能支持传入10台物理机。
     */
    async DeleteHostedInterface(req, cb) {
        return this.request("DeleteHostedInterface", req, cb);
    }
    /**
     * 注销私有网络IP为空闲
     */
    async DeregisterIps(req, cb) {
        return this.request("DeregisterIps", req, cb);
    }
    /**
     * 修改自定义路由
     */
    async ModifyRoutePolicy(req, cb) {
        return this.request("ModifyRoutePolicy", req, cb);
    }
    /**
     * 物理机加入子网
     */
    async CreateInterfaces(req, cb) {
        return this.request("CreateInterfaces", req, cb);
    }
    /**
     * 本接口（ModifyCustomerGatewayAttribute）用于修改对端网关信息。
     */
    async ModifyCustomerGatewayAttribute(req, cb) {
        return this.request("ModifyCustomerGatewayAttribute", req, cb);
    }
    /**
     * 删除黑石路由表路由规则
     */
    async DeleteRoutePolicy(req, cb) {
        return this.request("DeleteRoutePolicy", req, cb);
    }
    /**
     * 本接口（ModifyVpnConnectionAttribute）用于修改VPN通道。
     */
    async ModifyVpnConnectionAttribute(req, cb) {
        return this.request("ModifyVpnConnectionAttribute", req, cb);
    }
    /**
     * 本接口(DeleteVpnConnection)用于删除VPN通道。
     */
    async DeleteVpnConnection(req, cb) {
        return this.request("DeleteVpnConnection", req, cb);
    }
    /**
     * 本接口（DeleteVpnGateway）用于删除VPN网关。
     */
    async DeleteVpnGateway(req, cb) {
        return this.request("DeleteVpnGateway", req, cb);
    }
    /**
     * 可用于将子网的部分IP绑定到NAT网关
     */
    async BindIpsToNatGateway(req, cb) {
        return this.request("BindIpsToNatGateway", req, cb);
    }
    /**
     * 本接口（ModifyVpnGatewayAttribute）用于修改VPN网关属性。
     */
    async ModifyVpnGatewayAttribute(req, cb) {
        return this.request("ModifyVpnGatewayAttribute", req, cb);
    }
    /**
     * NAT网关解绑IP接口，可将子网的部分IP从NAT网关中解绑
     */
    async UnbindIpsFromNatGateway(req, cb) {
        return this.request("UnbindIpsFromNatGateway", req, cb);
    }
    /**
     * 本接口（DeleteCustomerGateway）用于删除对端网关。
     */
    async DeleteCustomerGateway(req, cb) {
        return this.request("DeleteCustomerGateway", req, cb);
    }
    /**
     * 本接口（DeleteSubnet）用于删除黑石私有网络子网。
删除子网前，请清理该子网下所有资源，包括物理机、负载均衡、黑石数据库、弹性IP、NAT网关等资源
     */
    async DeleteSubnet(req, cb) {
        return this.request("DeleteSubnet", req, cb);
    }
    /**
     * 修改子网属性
     */
    async ModifySubnetAttribute(req, cb) {
        return this.request("ModifySubnetAttribute", req, cb);
    }
    /**
     * 可获取NAT网关绑定的子网信息
     */
    async DescribeNatSubnets(req, cb) {
        return this.request("DescribeNatSubnets", req, cb);
    }
    /**
     * 拒绝黑石对等连接申请
     */
    async RejectVpcPeerConnection(req, cb) {
        return this.request("RejectVpcPeerConnection", req, cb);
    }
    /**
     * 本接口（DescribeSubnets）用于查询黑石子网列表。
     */
    async DescribeSubnets(req, cb) {
        return this.request("DescribeSubnets", req, cb);
    }
    /**
     * 物理机可以加入物理机子网，虚拟子网，DOCKER子网，通过此接口可以查询物理机加入的子网。
     */
    async DescribeSubnetByDevice(req, cb) {
        return this.request("DescribeSubnetByDevice", req, cb);
    }
    /**
     * 修改路由表
     */
    async ModifyRouteTable(req, cb) {
        return this.request("ModifyRouteTable", req, cb);
    }
    /**
     * 修改子网DHCP Relay属性
     */
    async ModifySubnetDHCPRelay(req, cb) {
        return this.request("ModifySubnetDHCPRelay", req, cb);
    }
    /**
     * 本接口（DescribeVpcView）用于查询VPC网络拓扑视图。
     */
    async DescribeVpcView(req, cb) {
        return this.request("DescribeVpcView", req, cb);
    }
    /**
     * 退还虚拟IP。此接口只能退还虚拟IP，物理机IP不能退还。
     */
    async DeleteVirtualIp(req, cb) {
        return this.request("DeleteVirtualIp", req, cb);
    }
    /**
     * 本接口（CreateCustomerGateway）用于创建对端网关。
     */
    async CreateCustomerGateway(req, cb) {
        return this.request("CreateCustomerGateway", req, cb);
    }
    /**
     * 根据任务ID，获取任务的执行状态
     */
    async DescribeTaskStatus(req, cb) {
        return this.request("DescribeTaskStatus", req, cb);
    }
    /**
     * 创建黑石Docker子网， 如果不指定VlanId，将会分配2000--2999范围的VlanId; 子网会关闭分布式网关
     */
    async CreateDockerSubnetWithVlan(req, cb) {
        return this.request("CreateDockerSubnetWithVlan", req, cb);
    }
    /**
     * 升级NAT网关接口，可NAT网关修改为小型NAT网关、中型NAT网关、以及大型NAT网关

     */
    async UpgradeNatGateway(req, cb) {
        return this.request("UpgradeNatGateway", req, cb);
    }
    /**
     * 创建黑石路由表的路由规则
     */
    async CreateRoutePolicies(req, cb) {
        return this.request("CreateRoutePolicies", req, cb);
    }
    /**
     * 查询黑石私有网络关联资源
     */
    async DescribeVpcResource(req, cb) {
        return this.request("DescribeVpcResource", req, cb);
    }
    /**
     * NAT网关解绑子网接口，可将子网解绑NAT网关
     */
    async UnbindSubnetsFromNatGateway(req, cb) {
        return this.request("UnbindSubnetsFromNatGateway", req, cb);
    }
    /**
     * 本接口(ResetVpnConnection)用于重置VPN通道。
     */
    async ResetVpnConnection(req, cb) {
        return this.request("ResetVpnConnection", req, cb);
    }
    /**
     * 本接口（DescribeVpnGateways）用于查询VPN网关列表。
     */
    async DescribeVpnGateways(req, cb) {
        return this.request("DescribeVpnGateways", req, cb);
    }
    /**
     * 托管机器移除子网批量接口，传入一台托管机器和多个子网，批量移除这些子网。异步接口，接口返回TaskId。
     */
    async DeleteHostedInterfaces(req, cb) {
        return this.request("DeleteHostedInterfaces", req, cb);
    }
    /**
     * 接受黑石对等连接
     */
    async AcceptVpcPeerConnection(req, cb) {
        return this.request("AcceptVpcPeerConnection", req, cb);
    }
    /**
     * 本接口（DescribeVpcQuota）用于查询用户VPC相关配额限制。
     */
    async DescribeVpcQuota(req, cb) {
        return this.request("DescribeVpcQuota", req, cb);
    }
    /**
     * 获取NAT网关信息，包括NAT网关 ID、网关名称、私有网络、网关并发连接上限、绑定EIP列表等
     */
    async DescribeNatGateways(req, cb) {
        return this.request("DescribeNatGateways", req, cb);
    }
    /**
     * NAT网关绑定子网后，该子网内全部IP可出公网
     */
    async BindSubnetsToNatGateway(req, cb) {
        return this.request("BindSubnetsToNatGateway", req, cb);
    }
    /**
     * 物理机移除子网批量接口，传入一台物理机和多个子网，批量移除这些子网。异步接口，接口返回TaskId。
     */
    async DeleteInterfaces(req, cb) {
        return this.request("DeleteInterfaces", req, cb);
    }
    /**
     * 本接口（CreateHostedInterface）用于黑石托管机器加入带VLANID不为5的子网。

1) 不能加入vlanId 为5的子网，只能加入VLANID范围为2000-2999的子网。
2) 每台托管机器最多可以加入20个子网。
3) 每次调用最多能支持传入10台托管机器。
     */
    async CreateHostedInterface(req, cb) {
        return this.request("CreateHostedInterface", req, cb);
    }
    /**
     *  本接口（DescribeVpnConnections）查询VPN通道列表。
     */
    async DescribeVpnConnections(req, cb) {
        return this.request("DescribeVpnConnections", req, cb);
    }
    /**
     * 托管可以加入物理机子网，虚拟子网，DOCKER子网，通过此接口可以查询托管加入的子网。
     */
    async DescribeSubnetByHostedDevice(req, cb) {
        return this.request("DescribeSubnetByHostedDevice", req, cb);
    }
    /**
     * 获取对等连接列表
     */
    async DescribeVpcPeerConnections(req, cb) {
        return this.request("DescribeVpcPeerConnections", req, cb);
    }
    /**
     * 本接口（DescribeVpcs）用于查询私有网络列表。
本接口不传参数时，返回默认排序下的前20条VPC信息。
     */
    async DescribeVpcs(req, cb) {
        return this.request("DescribeVpcs", req, cb);
    }
    /**
     * 删除黑石对等连接
     */
    async DeleteVpcPeerConnection(req, cb) {
        return this.request("DeleteVpcPeerConnection", req, cb);
    }
    /**
     * 本接口（ModifyVpcAttribute）用于修改VPC的标识名称和控制VPC的监控起停。
     */
    async ModifyVpcAttribute(req, cb) {
        return this.request("ModifyVpcAttribute", req, cb);
    }
    /**
     * 删除NAT网关
     */
    async DeleteNatGateway(req, cb) {
        return this.request("DeleteNatGateway", req, cb);
    }
    /**
     * 创建黑石虚拟子网， 虚拟子网用于在黑石上创建虚拟网络，与黑石子网要做好规划。虚拟子网会分配2000-2999的VlanId。
     */
    async CreateVirtualSubnetWithVlan(req, cb) {
        return this.request("CreateVirtualSubnetWithVlan", req, cb);
    }
    /**
     * 创建黑石私有网络的子网
访问管理: 用户可以对VpcId进行授权操作。例如设置资源为["qcs::bmvpc:::unVpc/vpc-xxxxx"]
     */
    async CreateSubnet(req, cb) {
        return this.request("CreateSubnet", req, cb);
    }
}
exports.Client = Client;

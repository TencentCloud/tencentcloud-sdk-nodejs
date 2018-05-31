const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ModifyAddressTemplateGroupAttributeRequest = models.ModifyAddressTemplateGroupAttributeRequest;
const ModifyAddressTemplateAttributeResponse = models.ModifyAddressTemplateAttributeResponse;
const ServiceTemplateGroup = models.ServiceTemplateGroup;
const CreateNetworkInterfaceRequest = models.CreateNetworkInterfaceRequest;
const CreateRoutesRequest = models.CreateRoutesRequest;
const CreateVpnConnectionRequest = models.CreateVpnConnectionRequest;
const DeleteServiceTemplateResponse = models.DeleteServiceTemplateResponse;
const CreateServiceTemplateRequest = models.CreateServiceTemplateRequest;
const DeleteSecurityGroupPoliciesRequest = models.DeleteSecurityGroupPoliciesRequest;
const VpnConnection = models.VpnConnection;
const TransformAddressResponse = models.TransformAddressResponse;
const CreateAddressTemplateGroupRequest = models.CreateAddressTemplateGroupRequest;
const DescribeNetworkInterfacesRequest = models.DescribeNetworkInterfacesRequest;
const DescribeSubnetsRequest = models.DescribeSubnetsRequest;
const CreateSubnetRequest = models.CreateSubnetRequest;
const AddressTemplateGroup = models.AddressTemplateGroup;
const DownloadCustomerGatewayConfigurationRequest = models.DownloadCustomerGatewayConfigurationRequest;
const ModifyNetworkInterfaceAttributeResponse = models.ModifyNetworkInterfaceAttributeResponse;
const IKEOptionsSpecification = models.IKEOptionsSpecification;
const DeleteSubnetResponse = models.DeleteSubnetResponse;
const DescribeAddressQuotaResponse = models.DescribeAddressQuotaResponse;
const Vpc = models.Vpc;
const CreateVpnGatewayResponse = models.CreateVpnGatewayResponse;
const ResetVpnConnectionRequest = models.ResetVpnConnectionRequest;
const DescribeCustomerGatewaysResponse = models.DescribeCustomerGatewaysResponse;
const ModifyServiceTemplateGroupAttributeRequest = models.ModifyServiceTemplateGroupAttributeRequest;
const InquiryPriceRenewVpnGatewayRequest = models.InquiryPriceRenewVpnGatewayRequest;
const DescribeVpnGatewaysResponse = models.DescribeVpnGatewaysResponse;
const CreateCustomerGatewayRequest = models.CreateCustomerGatewayRequest;
const DescribeServiceTemplateGroupsResponse = models.DescribeServiceTemplateGroupsResponse;
const ReplaceRouteTableAssociationRequest = models.ReplaceRouteTableAssociationRequest;
const ReplaceSecurityGroupPolicyRequest = models.ReplaceSecurityGroupPolicyRequest;
const ModifyServiceTemplateGroupAttributeResponse = models.ModifyServiceTemplateGroupAttributeResponse;
const VpnGateway = models.VpnGateway;
const SecurityGroupPolicy = models.SecurityGroupPolicy;
const DownloadCustomerGatewayConfigurationResponse = models.DownloadCustomerGatewayConfigurationResponse;
const DeleteSubnetRequest = models.DeleteSubnetRequest;
const InquiryPriceRenewVpnGatewayResponse = models.InquiryPriceRenewVpnGatewayResponse;
const DescribeAddressTemplateGroupsRequest = models.DescribeAddressTemplateGroupsRequest;
const RenewVpnGatewayRequest = models.RenewVpnGatewayRequest;
const AllocateAddressesRequest = models.AllocateAddressesRequest;
const RouteTable = models.RouteTable;
const DeleteNetworkInterfaceRequest = models.DeleteNetworkInterfaceRequest;
const InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse = models.InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse;
const DetachClassicLinkVpcRequest = models.DetachClassicLinkVpcRequest;
const DeleteAddressTemplateGroupResponse = models.DeleteAddressTemplateGroupResponse;
const ReplaceRoutesResponse = models.ReplaceRoutesResponse;
const DeleteVpcRequest = models.DeleteVpcRequest;
const ModifyServiceTemplateAttributeResponse = models.ModifyServiceTemplateAttributeResponse;
const MigratePrivateIpAddressRequest = models.MigratePrivateIpAddressRequest;
const DescribeServiceTemplatesRequest = models.DescribeServiceTemplatesRequest;
const DeleteRouteTableRequest = models.DeleteRouteTableRequest;
const CreateSubnetResponse = models.CreateSubnetResponse;
const DescribeSecurityGroupPoliciesResponse = models.DescribeSecurityGroupPoliciesResponse;
const ModifySecurityGroupPoliciesRequest = models.ModifySecurityGroupPoliciesRequest;
const ModifyAddressAttributeResponse = models.ModifyAddressAttributeResponse;
const AttachClassicLinkVpcRequest = models.AttachClassicLinkVpcRequest;
const CreateVpcResponse = models.CreateVpcResponse;
const CreateCustomerGatewayResponse = models.CreateCustomerGatewayResponse;
const NetworkInterface = models.NetworkInterface;
const DeleteVpnGatewayRequest = models.DeleteVpnGatewayRequest;
const ModifySubnetAttributeResponse = models.ModifySubnetAttributeResponse;
const ReplaceRouteTableAssociationResponse = models.ReplaceRouteTableAssociationResponse;
const ReleaseAddressesResponse = models.ReleaseAddressesResponse;
const AddressTemplate = models.AddressTemplate;
const DeleteServiceTemplateGroupResponse = models.DeleteServiceTemplateGroupResponse;
const DisassociateAddressRequest = models.DisassociateAddressRequest;
const InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest = models.InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest;
const DeleteVpnConnectionResponse = models.DeleteVpnConnectionResponse;
const ReplaceSecurityGroupPolicyResponse = models.ReplaceSecurityGroupPolicyResponse;
const ModifyCustomerGatewayAttributeResponse = models.ModifyCustomerGatewayAttributeResponse;
const ModifyPrivateIpAddressesAttributeResponse = models.ModifyPrivateIpAddressesAttributeResponse;
const ModifyServiceTemplateAttributeRequest = models.ModifyServiceTemplateAttributeRequest;
const DeleteSecurityGroupResponse = models.DeleteSecurityGroupResponse;
const Route = models.Route;
const CreateNetworkInterfaceResponse = models.CreateNetworkInterfaceResponse;
const ModifyVpnGatewayAttributeRequest = models.ModifyVpnGatewayAttributeRequest;
const DescribeAddressQuotaRequest = models.DescribeAddressQuotaRequest;
const DeleteRoutesRequest = models.DeleteRoutesRequest;
const InquiryPriceCreateVpnGatewayResponse = models.InquiryPriceCreateVpnGatewayResponse;
const DescribeAddressesResponse = models.DescribeAddressesResponse;
const CreateRoutesResponse = models.CreateRoutesResponse;
const DescribeSecurityGroupsResponse = models.DescribeSecurityGroupsResponse;
const RouteTableAssociation = models.RouteTableAssociation;
const DetachNetworkInterfaceResponse = models.DetachNetworkInterfaceResponse;
const ModifySubnetAttributeRequest = models.ModifySubnetAttributeRequest;
const ResetRoutesResponse = models.ResetRoutesResponse;
const DescribeCustomerGatewayVendorsRequest = models.DescribeCustomerGatewayVendorsRequest;
const FilterObject = models.FilterObject;
const DescribeVpcsRequest = models.DescribeVpcsRequest;
const ModifyVpcAttributeRequest = models.ModifyVpcAttributeRequest;
const ResetRoutesRequest = models.ResetRoutesRequest;
const ResetVpnGatewayInternetMaxBandwidthResponse = models.ResetVpnGatewayInternetMaxBandwidthResponse;
const CreateVpnConnectionResponse = models.CreateVpnConnectionResponse;
const DetachNetworkInterfaceRequest = models.DetachNetworkInterfaceRequest;
const UnassignPrivateIpAddressesResponse = models.UnassignPrivateIpAddressesResponse;
const ModifyCustomerGatewayAttributeRequest = models.ModifyCustomerGatewayAttributeRequest;
const AttachClassicLinkVpcResponse = models.AttachClassicLinkVpcResponse;
const CreateServiceTemplateGroupResponse = models.CreateServiceTemplateGroupResponse;
const CreateAddressTemplateRequest = models.CreateAddressTemplateRequest;
const Subnet = models.Subnet;
const ModifyVpcAttributeResponse = models.ModifyVpcAttributeResponse;
const ModifyVpnConnectionAttributeResponse = models.ModifyVpnConnectionAttributeResponse;
const ServiceTemplate = models.ServiceTemplate;
const DeleteVpcResponse = models.DeleteVpcResponse;
const DescribeCustomerGatewayVendorsResponse = models.DescribeCustomerGatewayVendorsResponse;
const PrivateIpAddressSpecification = models.PrivateIpAddressSpecification;
const ModifySecurityGroupAttributeResponse = models.ModifySecurityGroupAttributeResponse;
const SecurityGroup = models.SecurityGroup;
const MigratePrivateIpAddressResponse = models.MigratePrivateIpAddressResponse;
const DeleteRouteTableResponse = models.DeleteRouteTableResponse;
const DisassociateAddressResponse = models.DisassociateAddressResponse;
const DescribeVpnConnectionsRequest = models.DescribeVpnConnectionsRequest;
const DeleteCustomerGatewayResponse = models.DeleteCustomerGatewayResponse;
const AssociateAddressRequest = models.AssociateAddressRequest;
const ModifySecurityGroupPoliciesResponse = models.ModifySecurityGroupPoliciesResponse;
const CreateAddressTemplateResponse = models.CreateAddressTemplateResponse;
const DeleteAddressTemplateGroupRequest = models.DeleteAddressTemplateGroupRequest;
const AttachNetworkInterfaceResponse = models.AttachNetworkInterfaceResponse;
const DescribeServiceTemplatesResponse = models.DescribeServiceTemplatesResponse;
const DescribeRouteTablesRequest = models.DescribeRouteTablesRequest;
const ModifyRouteTableAttributeRequest = models.ModifyRouteTableAttributeRequest;
const DescribeVpnGatewaysRequest = models.DescribeVpnGatewaysRequest;
const ClassicLinkInstance = models.ClassicLinkInstance;
const CreateVpnGatewayRequest = models.CreateVpnGatewayRequest;
const DescribeSubnetsResponse = models.DescribeSubnetsResponse;
const ModifyNetworkInterfaceAttributeRequest = models.ModifyNetworkInterfaceAttributeRequest;
const ModifyAddressTemplateGroupAttributeResponse = models.ModifyAddressTemplateGroupAttributeResponse;
const DescribeAddressTemplatesResponse = models.DescribeAddressTemplatesResponse;
const DetachClassicLinkVpcResponse = models.DetachClassicLinkVpcResponse;
const ReleaseAddressesRequest = models.ReleaseAddressesRequest;
const UnassignPrivateIpAddressesRequest = models.UnassignPrivateIpAddressesRequest;
const AssociateAddressResponse = models.AssociateAddressResponse;
const Filter = models.Filter;
const CreateRouteTableRequest = models.CreateRouteTableRequest;
const ResetVpnConnectionResponse = models.ResetVpnConnectionResponse;
const DescribeAddressesRequest = models.DescribeAddressesRequest;
const DescribeSecurityGroupPoliciesRequest = models.DescribeSecurityGroupPoliciesRequest;
const MigrateNetworkInterfaceRequest = models.MigrateNetworkInterfaceRequest;
const DescribeCustomerGatewaysRequest = models.DescribeCustomerGatewaysRequest;
const CreateSecurityGroupPoliciesResponse = models.CreateSecurityGroupPoliciesResponse;
const CreateSecurityGroupResponse = models.CreateSecurityGroupResponse;
const DeleteSecurityGroupRequest = models.DeleteSecurityGroupRequest;
const ModifyVpnConnectionAttributeRequest = models.ModifyVpnConnectionAttributeRequest;
const ReplaceRoutesRequest = models.ReplaceRoutesRequest;
const CreateRouteTableResponse = models.CreateRouteTableResponse;
const DeleteRoutesResponse = models.DeleteRoutesResponse;
const ItemPrice = models.ItemPrice;
const ModifyPrivateIpAddressesAttributeRequest = models.ModifyPrivateIpAddressesAttributeRequest;
const DeleteVpnConnectionRequest = models.DeleteVpnConnectionRequest;
const CreateSecurityGroupRequest = models.CreateSecurityGroupRequest;
const DescribeClassicLinkInstancesRequest = models.DescribeClassicLinkInstancesRequest;
const CreateServiceTemplateResponse = models.CreateServiceTemplateResponse;
const DeleteNetworkInterfaceResponse = models.DeleteNetworkInterfaceResponse;
const IPSECOptionsSpecification = models.IPSECOptionsSpecification;
const InquiryPriceCreateVpnGatewayRequest = models.InquiryPriceCreateVpnGatewayRequest;
const AssignPrivateIpAddressesResponse = models.AssignPrivateIpAddressesResponse;
const DescribeSecurityGroupsRequest = models.DescribeSecurityGroupsRequest;
const CustomerGatewayVendor = models.CustomerGatewayVendor;
const DescribeAddressTemplatesRequest = models.DescribeAddressTemplatesRequest;
const RenewVpnGatewayResponse = models.RenewVpnGatewayResponse;
const SecurityGroupPolicySet = models.SecurityGroupPolicySet;
const DeleteSecurityGroupPoliciesResponse = models.DeleteSecurityGroupPoliciesResponse;
const ModifyAddressAttributeRequest = models.ModifyAddressAttributeRequest;
const ResetVpnGatewayInternetMaxBandwidthRequest = models.ResetVpnGatewayInternetMaxBandwidthRequest;
const DescribeVpnConnectionsResponse = models.DescribeVpnConnectionsResponse;
const DeleteCustomerGatewayRequest = models.DeleteCustomerGatewayRequest;
const DeleteVpnGatewayResponse = models.DeleteVpnGatewayResponse;
const DescribeAddressTemplateGroupsResponse = models.DescribeAddressTemplateGroupsResponse;
const Quota = models.Quota;
const Address = models.Address;
const ModifyVpnGatewayAttributeResponse = models.ModifyVpnGatewayAttributeResponse;
const DeleteAddressTemplateResponse = models.DeleteAddressTemplateResponse;
const DescribeNetworkInterfacesResponse = models.DescribeNetworkInterfacesResponse;
const AssignPrivateIpAddressesRequest = models.AssignPrivateIpAddressesRequest;
const DescribeServiceTemplateGroupsRequest = models.DescribeServiceTemplateGroupsRequest;
const CreateVpcRequest = models.CreateVpcRequest;
const CreateServiceTemplateGroupRequest = models.CreateServiceTemplateGroupRequest;
const DeleteServiceTemplateRequest = models.DeleteServiceTemplateRequest;
const DescribeClassicLinkInstancesResponse = models.DescribeClassicLinkInstancesResponse;
const DescribeRouteTablesResponse = models.DescribeRouteTablesResponse;
const DeleteAddressTemplateRequest = models.DeleteAddressTemplateRequest;
const CustomerGateway = models.CustomerGateway;
const AllocateAddressesResponse = models.AllocateAddressesResponse;
const TransformAddressRequest = models.TransformAddressRequest;
const AttachNetworkInterfaceRequest = models.AttachNetworkInterfaceRequest;
const CreateSecurityGroupPoliciesRequest = models.CreateSecurityGroupPoliciesRequest;
const ModifyRouteTableAttributeResponse = models.ModifyRouteTableAttributeResponse;
const MigrateNetworkInterfaceResponse = models.MigrateNetworkInterfaceResponse;
const DescribeVpcsResponse = models.DescribeVpcsResponse;
const ModifyAddressTemplateAttributeRequest = models.ModifyAddressTemplateAttributeRequest;
const ModifySecurityGroupAttributeRequest = models.ModifySecurityGroupAttributeRequest;
const CreateAddressTemplateGroupResponse = models.CreateAddressTemplateGroupResponse;
const SecurityPolicyDatabase = models.SecurityPolicyDatabase;
const DeleteServiceTemplateGroupRequest = models.DeleteServiceTemplateGroupRequest;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const Price = models.Price;


/**
 * vpc client
 * @class
 */
class VpcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vpc.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * 本接口(DownloadCustomerGatewayConfiguration)用于下载VPN通道配置。
     * @param {DownloadCustomerGatewayConfigurationRequest} req
     * @param {function(string, DownloadCustomerGatewayConfigurationResponse):void} cb
     * @public
     */
    DownloadCustomerGatewayConfiguration(req, cb) {
        let resp = new DownloadCustomerGatewayConfigurationResponse();
        this.request("DownloadCustomerGatewayConfiguration", req, resp, cb);
    }

    /**
     * 本接口 (TransformAddress) 用于将实例的普通公网 IP 转换为[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
* 平台对用户每地域每日解绑 EIP 重新分配普通公网 IP 次数有所限制（可参见 [EIP 产品简介](/document/product/213/1941)）。上述配额可通过 [DescribeAddressQuota](https://cloud.tencent.com/document/api/213/1378) 接口获取。
     * @param {TransformAddressRequest} req
     * @param {function(string, TransformAddressResponse):void} cb
     * @public
     */
    TransformAddress(req, cb) {
        let resp = new TransformAddressResponse();
        this.request("TransformAddress", req, resp, cb);
    }

    /**
     * 本接口（DescribeCustomerGateways）用于查询对端网关列表。
     * @param {DescribeCustomerGatewaysRequest} req
     * @param {function(string, DescribeCustomerGatewaysResponse):void} cb
     * @public
     */
    DescribeCustomerGateways(req, cb) {
        let resp = new DescribeCustomerGatewaysResponse();
        this.request("DescribeCustomerGateways", req, resp, cb);
    }

    /**
     * 本接口（ReplaceSecurityGroupPolicy）用于替换单条安全组规则（SecurityGroupPolicy）。
单个请求中只能替换单个方向的一条规则, 必须要指定索引（PolicyIndex）。
     * @param {ReplaceSecurityGroupPolicyRequest} req
     * @param {function(string, ReplaceSecurityGroupPolicyResponse):void} cb
     * @public
     */
    ReplaceSecurityGroupPolicy(req, cb) {
        let resp = new ReplaceSecurityGroupPolicyResponse();
        this.request("ReplaceSecurityGroupPolicy", req, resp, cb);
    }

    /**
     * 删除协议端口模板
     * @param {DeleteServiceTemplateRequest} req
     * @param {function(string, DeleteServiceTemplateResponse):void} cb
     * @public
     */
    DeleteServiceTemplate(req, cb) {
        let resp = new DeleteServiceTemplateResponse();
        this.request("DeleteServiceTemplate", req, resp, cb);
    }

    /**
     * 修改IP地址模板
     * @param {ModifyAddressTemplateAttributeRequest} req
     * @param {function(string, ModifyAddressTemplateAttributeResponse):void} cb
     * @public
     */
    ModifyAddressTemplateAttribute(req, cb) {
        let resp = new ModifyAddressTemplateAttributeResponse();
        this.request("ModifyAddressTemplateAttribute", req, resp, cb);
    }

    /**
     * 本接口（RenewVpnGateway）用于预付费（包年包月）VPN网关续费。目前只支持IPSEC网关。
     * @param {RenewVpnGatewayRequest} req
     * @param {function(string, RenewVpnGatewayResponse):void} cb
     * @public
     */
    RenewVpnGateway(req, cb) {
        let resp = new RenewVpnGatewayResponse();
        this.request("RenewVpnGateway", req, resp, cb);
    }

    /**
     * 删除IP地址模板集合
     * @param {DeleteAddressTemplateGroupRequest} req
     * @param {function(string, DeleteAddressTemplateGroupResponse):void} cb
     * @public
     */
    DeleteAddressTemplateGroup(req, cb) {
        let resp = new DeleteAddressTemplateGroupResponse();
        this.request("DeleteAddressTemplateGroup", req, resp, cb);
    }

    /**
     * 删除协议端口模板集合
     * @param {DeleteServiceTemplateGroupRequest} req
     * @param {function(string, DeleteServiceTemplateGroupResponse):void} cb
     * @public
     */
    DeleteServiceTemplateGroup(req, cb) {
        let resp = new DeleteServiceTemplateGroupResponse();
        this.request("DeleteServiceTemplateGroup", req, resp, cb);
    }

    /**
     *  本接口（DescribeRouteTables）用于查询路由表。
     * @param {DescribeRouteTablesRequest} req
     * @param {function(string, DescribeRouteTablesResponse):void} cb
     * @public
     */
    DescribeRouteTables(req, cb) {
        let resp = new DescribeRouteTablesResponse();
        this.request("DescribeRouteTables", req, resp, cb);
    }

    /**
     * 本接口(CreateRouteTable)用于创建路由表。
* 创建了VPC后，系统会创建一个默认路由表，所有新建的子网都会关联到默认路由表。默认情况下您可以直接使用默认路由表来管理您的路由策略。当您的路由策略较多时，您可以调用创建路由表接口创建更多路由表管理您的路由策略。
     * @param {CreateRouteTableRequest} req
     * @param {function(string, CreateRouteTableResponse):void} cb
     * @public
     */
    CreateRouteTable(req, cb) {
        let resp = new CreateRouteTableResponse();
        this.request("CreateRouteTable", req, resp, cb);
    }

    /**
     * 本接口（ReplaceRouteTableAssociation)用于修改子网（Subnet）关联的路由表（RouteTable）。
* 一个子网只能关联一个路由表。
     * @param {ReplaceRouteTableAssociationRequest} req
     * @param {function(string, ReplaceRouteTableAssociationResponse):void} cb
     * @public
     */
    ReplaceRouteTableAssociation(req, cb) {
        let resp = new ReplaceRouteTableAssociationResponse();
        this.request("ReplaceRouteTableAssociation", req, resp, cb);
    }

    /**
     * 本接口（AttachNetworkInterface）用于弹性网卡绑定云主机。
* 一个云主机可以绑定多个弹性网卡，但只能绑定一个主网卡。更多限制信息详见<a href="https://cloud.tencent.com/document/product/215/6513">弹性网卡使用限制</a>。
* 一个弹性网卡只能同时绑定一个云主机。
* 只有运行中或者已关机状态的云主机才能绑定弹性网卡，查看云主机状态详见<a href="https://cloud.tencent.com/document/api/213/9452#instance_state">腾讯云主机信息</a>。
* 弹性网卡绑定的云主机必须是私有网络的，而且云主机所在可用区必须和弹性网卡子网的可用区相同。
     * @param {AttachNetworkInterfaceRequest} req
     * @param {function(string, AttachNetworkInterfaceResponse):void} cb
     * @public
     */
    AttachNetworkInterface(req, cb) {
        let resp = new AttachNetworkInterfaceResponse();
        this.request("AttachNetworkInterface", req, resp, cb);
    }

    /**
     * 本接口（ModifyServiceTemplateGroupAttribute）用于修改协议端口模板集合。
     * @param {ModifyServiceTemplateGroupAttributeRequest} req
     * @param {function(string, ModifyServiceTemplateGroupAttributeResponse):void} cb
     * @public
     */
    ModifyServiceTemplateGroupAttribute(req, cb) {
        let resp = new ModifyServiceTemplateGroupAttributeResponse();
        this.request("ModifyServiceTemplateGroupAttribute", req, resp, cb);
    }

    /**
     * 本接口(CreateVpc)用于创建私有网络(VPC)。
* 用户可以创建的最小网段子网掩码为28（有16个IP地址），最大网段子网掩码为16（65,536个IP地址）,如果规划VPC网段请参见VPC网段规划说明。
* 创建VPC时可同时把子网创建好，创建子网也请规划好子网网段及子网所在可用区，同一个VPC内子网网段不能重叠，不同可用区可以做跨可用区容灾，详见VPC可用区说明。
* 如果您同时创建了子网，系统会创建一个默认路由表，系统会把子网关联到这个默认路由表。
* 同一个地域能创建的VPC资源个数也是有限制的，详见 <a href="https://cloud.tencent.com/doc/product/215/537" title="VPC使用限制">VPC使用限制</a>,如果需要扩充请联系在线客服。
     * @param {CreateVpcRequest} req
     * @param {function(string, CreateVpcResponse):void} cb
     * @public
     */
    CreateVpc(req, cb) {
        let resp = new CreateVpcResponse();
        this.request("CreateVpc", req, resp, cb);
    }

    /**
     * 本接口（DeleteSecurityGroupPolicies）用于用于删除安全组规则（SecurityGroupPolicy）。
* SecurityGroupPolicySet.Version 用于指定要操作的安全组的版本。传入 Version 版本号若不等于当前安全组的最新版本，将返回失败；若不传 Version 则直接删除指定PolicyIndex的规则。
     * @param {DeleteSecurityGroupPoliciesRequest} req
     * @param {function(string, DeleteSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    DeleteSecurityGroupPolicies(req, cb) {
        let resp = new DeleteSecurityGroupPoliciesResponse();
        this.request("DeleteSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 本接口（CreateVpnConnection）用于创建VPN通道。
     * @param {CreateVpnConnectionRequest} req
     * @param {function(string, CreateVpnConnectionResponse):void} cb
     * @public
     */
    CreateVpnConnection(req, cb) {
        let resp = new CreateVpnConnectionResponse();
        this.request("CreateVpnConnection", req, resp, cb);
    }

    /**
     * 本接口（ResetRoutes）用于对某个路由表名称和所有路由策略（Route）进行重新设置。
注意: 调用本接口是先删除当前路由表中所有路由策略, 再保存新提交的路由策略内容, 会引起网络中断。
     * @param {ResetRoutesRequest} req
     * @param {function(string, ResetRoutesResponse):void} cb
     * @public
     */
    ResetRoutes(req, cb) {
        let resp = new ResetRoutesResponse();
        this.request("ResetRoutes", req, resp, cb);
    }

    /**
     * 本接口（ModifyVpnGatewayAttribute）用于修改VPN网关属性。
     * @param {ModifyVpnGatewayAttributeRequest} req
     * @param {function(string, ModifyVpnGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyVpnGatewayAttribute(req, cb) {
        let resp = new ModifyVpnGatewayAttributeResponse();
        this.request("ModifyVpnGatewayAttribute", req, resp, cb);
    }

    /**
     * 本接口（ResetVpnGatewayInternetMaxBandwidth）调整VPN网关带宽上限。目前支持升级配置，如果是包年包月VPN网关需要在有效期内。
     * @param {ResetVpnGatewayInternetMaxBandwidthRequest} req
     * @param {function(string, ResetVpnGatewayInternetMaxBandwidthResponse):void} cb
     * @public
     */
    ResetVpnGatewayInternetMaxBandwidth(req, cb) {
        let resp = new ResetVpnGatewayInternetMaxBandwidthResponse();
        this.request("ResetVpnGatewayInternetMaxBandwidth", req, resp, cb);
    }

    /**
     * 本接口（DeleteVpc）用于删除私有网络。
* 删除前请确保 VPC 内已经没有相关资源，例如云主机、云数据库、NoSQL、VPN网关、专线网关、负载均衡、对等连接、与之互通的基础网络设备等。
* 删除私有网络是不可逆的操作，请谨慎处理。
     * @param {DeleteVpcRequest} req
     * @param {function(string, DeleteVpcResponse):void} cb
     * @public
     */
    DeleteVpc(req, cb) {
        let resp = new DeleteVpcResponse();
        this.request("DeleteVpc", req, resp, cb);
    }

    /**
     * 删除IP地址模板
     * @param {DeleteAddressTemplateRequest} req
     * @param {function(string, DeleteAddressTemplateResponse):void} cb
     * @public
     */
    DeleteAddressTemplate(req, cb) {
        let resp = new DeleteAddressTemplateResponse();
        this.request("DeleteAddressTemplate", req, resp, cb);
    }

    /**
     * 本接口 (ModifyAddressAttribute) 用于修改[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）的名称。
     * @param {ModifyAddressAttributeRequest} req
     * @param {function(string, ModifyAddressAttributeResponse):void} cb
     * @public
     */
    ModifyAddressAttribute(req, cb) {
        let resp = new ModifyAddressAttributeResponse();
        this.request("ModifyAddressAttribute", req, resp, cb);
    }

    /**
     * 本接口 (AllocateAddresses) 用于申请一个或多个[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
* EIP 是专为动态云计算设计的静态 IP 地址。借助 EIP，您可以快速将 EIP 重新映射到您的另一个实例上，从而屏蔽实例故障。
* 您的 EIP 与腾讯云账户相关联，而不是与某个实例相关联。在您选择显式释放该地址，或欠费超过七天之前，它会一直与您的腾讯云账户保持关联。
* 平台对用户每地域能申请的 EIP 最大配额有所限制，可参见 [EIP 产品简介](https://cloud.tencent.com/document/product/213/5733)，上述配额可通过 DescribeAddressQuota 接口获取。
     * @param {AllocateAddressesRequest} req
     * @param {function(string, AllocateAddressesResponse):void} cb
     * @public
     */
    AllocateAddresses(req, cb) {
        let resp = new AllocateAddressesResponse();
        this.request("AllocateAddresses", req, resp, cb);
    }

    /**
     * 本接口 (DescribeAddressQuota) 用于查询您账户的[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）在当前地域的配额信息。配额详情可参见 [EIP 产品简介](https://cloud.tencent.com/document/product/213/5733)。
     * @param {DescribeAddressQuotaRequest} req
     * @param {function(string, DescribeAddressQuotaResponse):void} cb
     * @public
     */
    DescribeAddressQuota(req, cb) {
        let resp = new DescribeAddressQuotaResponse();
        this.request("DescribeAddressQuota", req, resp, cb);
    }

    /**
     * 修改协议端口模板
     * @param {ModifyServiceTemplateAttributeRequest} req
     * @param {function(string, ModifyServiceTemplateAttributeResponse):void} cb
     * @public
     */
    ModifyServiceTemplateAttribute(req, cb) {
        let resp = new ModifyServiceTemplateAttributeResponse();
        this.request("ModifyServiceTemplateAttribute", req, resp, cb);
    }

    /**
     * 本接口（UnassignPrivateIpAddresses）用于弹性网卡退还内网 IP。
* 退还弹性网卡上的辅助内网IP，接口自动解关联弹性公网 IP。不能退还弹性网卡的主内网IP。
     * @param {UnassignPrivateIpAddressesRequest} req
     * @param {function(string, UnassignPrivateIpAddressesResponse):void} cb
     * @public
     */
    UnassignPrivateIpAddresses(req, cb) {
        let resp = new UnassignPrivateIpAddressesResponse();
        this.request("UnassignPrivateIpAddresses", req, resp, cb);
    }

    /**
     * 本接口（ModifyCustomerGatewayAttribute）用于修改对端网关信息。
     * @param {ModifyCustomerGatewayAttributeRequest} req
     * @param {function(string, ModifyCustomerGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyCustomerGatewayAttribute(req, cb) {
        let resp = new ModifyCustomerGatewayAttributeResponse();
        this.request("ModifyCustomerGatewayAttribute", req, resp, cb);
    }

    /**
     * 本接口（ModifyPrivateIpAddressesAttribute）用于修改弹性网卡内网IP属性。
     * @param {ModifyPrivateIpAddressesAttributeRequest} req
     * @param {function(string, ModifyPrivateIpAddressesAttributeResponse):void} cb
     * @public
     */
    ModifyPrivateIpAddressesAttribute(req, cb) {
        let resp = new ModifyPrivateIpAddressesAttributeResponse();
        this.request("ModifyPrivateIpAddressesAttribute", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceRenewVpnGateway）用于续费VPN网关询价。目前仅支持IPSEC类型网关的询价。
     * @param {InquiryPriceRenewVpnGatewayRequest} req
     * @param {function(string, InquiryPriceRenewVpnGatewayResponse):void} cb
     * @public
     */
    InquiryPriceRenewVpnGateway(req, cb) {
        let resp = new InquiryPriceRenewVpnGatewayResponse();
        this.request("InquiryPriceRenewVpnGateway", req, resp, cb);
    }

    /**
     * 本接口（ModifySubnetAttribute）用于修改子网属性。
     * @param {ModifySubnetAttributeRequest} req
     * @param {function(string, ModifySubnetAttributeResponse):void} cb
     * @public
     */
    ModifySubnetAttribute(req, cb) {
        let resp = new ModifySubnetAttributeResponse();
        this.request("ModifySubnetAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeSecurityGroups）用于查询安全组。
     * @param {DescribeSecurityGroupsRequest} req
     * @param {function(string, DescribeSecurityGroupsResponse):void} cb
     * @public
     */
    DescribeSecurityGroups(req, cb) {
        let resp = new DescribeSecurityGroupsResponse();
        this.request("DescribeSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口(DeleteVpnConnection)用于删除VPN通道。
     * @param {DeleteVpnConnectionRequest} req
     * @param {function(string, DeleteVpnConnectionResponse):void} cb
     * @public
     */
    DeleteVpnConnection(req, cb) {
        let resp = new DeleteVpnConnectionResponse();
        this.request("DeleteVpnConnection", req, resp, cb);
    }

    /**
     * 本接口（DescribeCustomerGatewayVendors）用于查询可支持的对端网关厂商信息。
     * @param {DescribeCustomerGatewayVendorsRequest} req
     * @param {function(string, DescribeCustomerGatewayVendorsResponse):void} cb
     * @public
     */
    DescribeCustomerGatewayVendors(req, cb) {
        let resp = new DescribeCustomerGatewayVendorsResponse();
        this.request("DescribeCustomerGatewayVendors", req, resp, cb);
    }

    /**
     * 本接口（CreateVpnGateways）用于创建VPN网关。
     * @param {CreateVpnGatewayRequest} req
     * @param {function(string, CreateVpnGatewayResponse):void} cb
     * @public
     */
    CreateVpnGateway(req, cb) {
        let resp = new CreateVpnGatewayResponse();
        this.request("CreateVpnGateway", req, resp, cb);
    }

    /**
     * 本接口（DeleteVpnGateway）用于删除VPN网关。目前只支持删除运行中的按量计费的IPSEC网关实例。
     * @param {DeleteVpnGatewayRequest} req
     * @param {function(string, DeleteVpnGatewayResponse):void} cb
     * @public
     */
    DeleteVpnGateway(req, cb) {
        let resp = new DeleteVpnGatewayResponse();
        this.request("DeleteVpnGateway", req, resp, cb);
    }

    /**
     * 本接口（DescribeSecurityGroupPolicies）用于查询安全组规则。
     * @param {DescribeSecurityGroupPoliciesRequest} req
     * @param {function(string, DescribeSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    DescribeSecurityGroupPolicies(req, cb) {
        let resp = new DescribeSecurityGroupPoliciesResponse();
        this.request("DescribeSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 创建协议端口模板
     * @param {CreateServiceTemplateRequest} req
     * @param {function(string, CreateServiceTemplateResponse):void} cb
     * @public
     */
    CreateServiceTemplate(req, cb) {
        let resp = new CreateServiceTemplateResponse();
        this.request("CreateServiceTemplate", req, resp, cb);
    }

    /**
     * 本接口 (DescribeAddresses) 用于查询一个或多个[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）的详细信息。
* 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的 EIP。
     * @param {DescribeAddressesRequest} req
     * @param {function(string, DescribeAddressesResponse):void} cb
     * @public
     */
    DescribeAddresses(req, cb) {
        let resp = new DescribeAddressesResponse();
        this.request("DescribeAddresses", req, resp, cb);
    }

    /**
     * 本接口(DescribeClassicLinkInstances)用于私有网络和基础网络设备互通。
     * @param {DescribeClassicLinkInstancesRequest} req
     * @param {function(string, DescribeClassicLinkInstancesResponse):void} cb
     * @public
     */
    DescribeClassicLinkInstances(req, cb) {
        let resp = new DescribeClassicLinkInstancesResponse();
        this.request("DescribeClassicLinkInstances", req, resp, cb);
    }

    /**
     * 本接口 (AssociateAddress) 用于将[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）绑定到实例或弹性网卡的指定内网 IP 上。
* 将 EIP 绑定到实例上，其本质是将 EIP 绑定到实例上主网卡的主内网 IP 上。
* 将 EIP 绑定到主网卡的主内网IP上，绑定过程会把其上绑定的普通公网 IP 自动解绑并释放。
* 如果指定网卡的内网 IP 已经绑定了 EIP，则必须先解绑该 EIP，才能再绑定新的。
* EIP 如果欠费或被封堵，则不能被绑定。
* 只有状态为 UNBIND 的 EIP 才能够被绑定。
     * @param {AssociateAddressRequest} req
     * @param {function(string, AssociateAddressResponse):void} cb
     * @public
     */
    AssociateAddress(req, cb) {
        let resp = new AssociateAddressResponse();
        this.request("AssociateAddress", req, resp, cb);
    }

    /**
     * 本接口(DeleteRoutes)用于对某个路由表批量删除路由策略（Route）。
     * @param {DeleteRoutesRequest} req
     * @param {function(string, DeleteRoutesResponse):void} cb
     * @public
     */
    DeleteRoutes(req, cb) {
        let resp = new DeleteRoutesResponse();
        this.request("DeleteRoutes", req, resp, cb);
    }

    /**
     * 本接口（DeleteCustomerGateway）用于删除对端网关。
     * @param {DeleteCustomerGatewayRequest} req
     * @param {function(string, DeleteCustomerGatewayResponse):void} cb
     * @public
     */
    DeleteCustomerGateway(req, cb) {
        let resp = new DeleteCustomerGatewayResponse();
        this.request("DeleteCustomerGateway", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceResetVpnGatewayInternetMaxBandwidth）调整VPN网关带宽上限询价。
     * @param {InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest} req
     * @param {function(string, InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse):void} cb
     * @public
     */
    InquiryPriceResetVpnGatewayInternetMaxBandwidth(req, cb) {
        let resp = new InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse();
        this.request("InquiryPriceResetVpnGatewayInternetMaxBandwidth", req, resp, cb);
    }

    /**
     * 本接口（DeleteSubnet）用于用于删除子网(Subnet)。
* 删除子网前，请清理该子网下所有资源，包括云主机、负载均衡、云数据、noSql、弹性网卡等资源。
     * @param {DeleteSubnetRequest} req
     * @param {function(string, DeleteSubnetResponse):void} cb
     * @public
     */
    DeleteSubnet(req, cb) {
        let resp = new DeleteSubnetResponse();
        this.request("DeleteSubnet", req, resp, cb);
    }

    /**
     * 本接口（ModifySecurityGroupAttribute）用于修改安全组（SecurityGroupPolicy）属性。
     * @param {ModifySecurityGroupAttributeRequest} req
     * @param {function(string, ModifySecurityGroupAttributeResponse):void} cb
     * @public
     */
    ModifySecurityGroupAttribute(req, cb) {
        let resp = new ModifySecurityGroupAttributeResponse();
        this.request("ModifySecurityGroupAttribute", req, resp, cb);
    }

    /**
     * 本接口(AttachClassicLinkVpc)用于私有网络和基础网络设备互通。
* 私有网络和基础网络设备必须在同一个地域。
* 私有网络和基础网络的区别详见vpc产品文档-<a href="https://cloud.tencent.com/document/product/215/535#2.-.E7.A7.81.E6.9C.89.E7.BD.91.E7.BB.9C.E4.B8.8E.E5.9F.BA.E7.A1.80.E7.BD.91.E7.BB.9C">私有网络与基础网络</a>。
     * @param {AttachClassicLinkVpcRequest} req
     * @param {function(string, AttachClassicLinkVpcResponse):void} cb
     * @public
     */
    AttachClassicLinkVpc(req, cb) {
        let resp = new AttachClassicLinkVpcResponse();
        this.request("AttachClassicLinkVpc", req, resp, cb);
    }

    /**
     * 本接口（DeleteSecurityGroup）用于删除安全组（SecurityGroup）。
* 只有当前账号下的安全组允许被删除。
* 安全组实例ID如果在其他安全组的规则中被引用，则无法直接删除。这种情况下，需要先进行规则修改，再删除安全组。
* 删除的安全组无法再找回，请谨慎调用。
     * @param {DeleteSecurityGroupRequest} req
     * @param {function(string, DeleteSecurityGroupResponse):void} cb
     * @public
     */
    DeleteSecurityGroup(req, cb) {
        let resp = new DeleteSecurityGroupResponse();
        this.request("DeleteSecurityGroup", req, resp, cb);
    }

    /**
     * 本接口（DescribeSubnets）用于查询子网列表。
     * @param {DescribeSubnetsRequest} req
     * @param {function(string, DescribeSubnetsResponse):void} cb
     * @public
     */
    DescribeSubnets(req, cb) {
        let resp = new DescribeSubnetsResponse();
        this.request("DescribeSubnets", req, resp, cb);
    }

    /**
     * 查询协议端口模板集合
     * @param {DescribeServiceTemplateGroupsRequest} req
     * @param {function(string, DescribeServiceTemplateGroupsResponse):void} cb
     * @public
     */
    DescribeServiceTemplateGroups(req, cb) {
        let resp = new DescribeServiceTemplateGroupsResponse();
        this.request("DescribeServiceTemplateGroups", req, resp, cb);
    }

    /**
     * 本接口（InquiryPriceCreateVpnGateway）用于创建VPN网关询价。
     * @param {InquiryPriceCreateVpnGatewayRequest} req
     * @param {function(string, InquiryPriceCreateVpnGatewayResponse):void} cb
     * @public
     */
    InquiryPriceCreateVpnGateway(req, cb) {
        let resp = new InquiryPriceCreateVpnGatewayResponse();
        this.request("InquiryPriceCreateVpnGateway", req, resp, cb);
    }

    /**
     *  本接口（MigratePrivateIpAddress）用于弹性网卡内网IP迁移。

* 该接口用于将一个内网IP从一个弹性网卡上迁移到另外一个弹性网卡，主IP地址不支持迁移。
* 迁移前后的弹性网卡必须在同一个子网内。
     * @param {MigratePrivateIpAddressRequest} req
     * @param {function(string, MigratePrivateIpAddressResponse):void} cb
     * @public
     */
    MigratePrivateIpAddress(req, cb) {
        let resp = new MigratePrivateIpAddressResponse();
        this.request("MigratePrivateIpAddress", req, resp, cb);
    }

    /**
     * 本接口（ModifyRouteTableAttribute）用于修改路由表（RouteTable）属性。
     * @param {ModifyRouteTableAttributeRequest} req
     * @param {function(string, ModifyRouteTableAttributeResponse):void} cb
     * @public
     */
    ModifyRouteTableAttribute(req, cb) {
        let resp = new ModifyRouteTableAttributeResponse();
        this.request("ModifyRouteTableAttribute", req, resp, cb);
    }

    /**
     * 本接口（ReplaceRoutes）根据路由策略ID（RouteId）修改指定的路由策略（Route），支持批量修改。
     * @param {ReplaceRoutesRequest} req
     * @param {function(string, ReplaceRoutesResponse):void} cb
     * @public
     */
    ReplaceRoutes(req, cb) {
        let resp = new ReplaceRoutesResponse();
        this.request("ReplaceRoutes", req, resp, cb);
    }

    /**
     * 本接口（CreateCustomerGateway）用于创建对端网关。
     * @param {CreateCustomerGatewayRequest} req
     * @param {function(string, CreateCustomerGatewayResponse):void} cb
     * @public
     */
    CreateCustomerGateway(req, cb) {
        let resp = new CreateCustomerGatewayResponse();
        this.request("CreateCustomerGateway", req, resp, cb);
    }

    /**
     * 本接口（CreateNetworkInterface）用于创建弹性网卡。
* 创建弹性网卡时可以指定内网IP，并且可以指定一个主IP，指定的内网IP必须在弹性网卡所在子网内，而且不能被占用。
* 创建弹性网卡时可以指定需要申请的内网IP数量，系统会随机生成内网IP地址。
* 创建弹性网卡同时可以绑定已有安全组。
     * @param {CreateNetworkInterfaceRequest} req
     * @param {function(string, CreateNetworkInterfaceResponse):void} cb
     * @public
     */
    CreateNetworkInterface(req, cb) {
        let resp = new CreateNetworkInterfaceResponse();
        this.request("CreateNetworkInterface", req, resp, cb);
    }

    /**
     * 修改IP地址模板集合
     * @param {ModifyAddressTemplateGroupAttributeRequest} req
     * @param {function(string, ModifyAddressTemplateGroupAttributeResponse):void} cb
     * @public
     */
    ModifyAddressTemplateGroupAttribute(req, cb) {
        let resp = new ModifyAddressTemplateGroupAttributeResponse();
        this.request("ModifyAddressTemplateGroupAttribute", req, resp, cb);
    }

    /**
     * 本接口（ModifySecurityGroupPolicies）用于重置安全组出站和入站规则（SecurityGroupPolicy）。

* 接口是先删除当前所有的出入站规则，然后再添加 Egress 和 Ingress 规则，不支持自定义索引 PolicyIndex 。
* 如果指定 SecurityGroupPolicySet.Version 为0, 表示清空所有规则，并忽略Egress和Ingress。
* Protocol字段支持输入TCP, UDP, ICMP, GRE, ALL。
* CidrBlock字段允许输入符合cidr格式标准的任意字符串。(展开)在基础网络中，如果CidrBlock包含您的账户内的云服务器之外的设备在腾讯云的内网IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。
* SecurityGroupId字段允许输入与待修改的安全组位于相同项目中的安全组ID，包括这个安全组ID本身，代表安全组下所有云服务器的内网IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个ID所关联的云服务器变化而变化，不需要重新修改。
* Port字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当Protocol字段是TCP或UDP时，Port字段才被接受。
* Action字段只允许输入ACCEPT或DROP。
* CidrBlock, SecurityGroupId, AddressTemplate三者是排他关系，不允许同时输入，Protocol + Port和ServiceTemplate二者是排他关系，不允许同时输入。
     * @param {ModifySecurityGroupPoliciesRequest} req
     * @param {function(string, ModifySecurityGroupPoliciesResponse):void} cb
     * @public
     */
    ModifySecurityGroupPolicies(req, cb) {
        let resp = new ModifySecurityGroupPoliciesResponse();
        this.request("ModifySecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 创建IP地址模版集合
     * @param {CreateAddressTemplateGroupRequest} req
     * @param {function(string, CreateAddressTemplateGroupResponse):void} cb
     * @public
     */
    CreateAddressTemplateGroup(req, cb) {
        let resp = new CreateAddressTemplateGroupResponse();
        this.request("CreateAddressTemplateGroup", req, resp, cb);
    }

    /**
     * 本接口（CreateSecurityGroup）用于创建新的安全组（SecurityGroup）。
* 每个账户下每个地域的每个项目的<a href="https://cloud.tencent.com/document/product/213/500#2.-.E5.AE.89.E5.85.A8.E7.BB.84.E7.9A.84.E9.99.90.E5.88.B6">安全组数量限制</a>。
* 新建的安全组的入站和出站规则默认都是全部拒绝，在创建后通常您需要再调用CreateSecurityGroupPolicies将安全组的规则设置为需要的规则。
     * @param {CreateSecurityGroupRequest} req
     * @param {function(string, CreateSecurityGroupResponse):void} cb
     * @public
     */
    CreateSecurityGroup(req, cb) {
        let resp = new CreateSecurityGroupResponse();
        this.request("CreateSecurityGroup", req, resp, cb);
    }

    /**
     * 本接口(CreateRoutes)用于创建路由策略。
* 向指定路由表批量新增路由策略。
     * @param {CreateRoutesRequest} req
     * @param {function(string, CreateRoutesResponse):void} cb
     * @public
     */
    CreateRoutes(req, cb) {
        let resp = new CreateRoutesResponse();
        this.request("CreateRoutes", req, resp, cb);
    }

    /**
     * 本接口（ModifyNetworkInterfaceAttribute）用于修改弹性网卡属性。
     * @param {ModifyNetworkInterfaceAttributeRequest} req
     * @param {function(string, ModifyNetworkInterfaceAttributeResponse):void} cb
     * @public
     */
    ModifyNetworkInterfaceAttribute(req, cb) {
        let resp = new ModifyNetworkInterfaceAttributeResponse();
        this.request("ModifyNetworkInterfaceAttribute", req, resp, cb);
    }

    /**
     * 本接口 (ReleaseAddresses) 用于释放一个或多个[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
* 该操作不可逆，释放后 EIP 关联的 IP 地址将不再属于您的名下。
* 只有状态为 UNBIND 的 EIP 才能进行释放操作。
     * @param {ReleaseAddressesRequest} req
     * @param {function(string, ReleaseAddressesResponse):void} cb
     * @public
     */
    ReleaseAddresses(req, cb) {
        let resp = new ReleaseAddressesResponse();
        this.request("ReleaseAddresses", req, resp, cb);
    }

    /**
     * 本接口（DescribeVpnGateways）用于查询VPN网关列表。
     * @param {DescribeVpnGatewaysRequest} req
     * @param {function(string, DescribeVpnGatewaysResponse):void} cb
     * @public
     */
    DescribeVpnGateways(req, cb) {
        let resp = new DescribeVpnGatewaysResponse();
        this.request("DescribeVpnGateways", req, resp, cb);
    }

    /**
     * 本接口（DetachNetworkInterface）用于弹性网卡解绑云主机。
     * @param {DetachNetworkInterfaceRequest} req
     * @param {function(string, DetachNetworkInterfaceResponse):void} cb
     * @public
     */
    DetachNetworkInterface(req, cb) {
        let resp = new DetachNetworkInterfaceResponse();
        this.request("DetachNetworkInterface", req, resp, cb);
    }

    /**
     * 本接口（AssignPrivateIpAddresses）用于弹性网卡申请内网 IP。
* 一个弹性网卡支持绑定的IP地址是有限制的，更多资源限制信息详见<a href="https://cloud.tencent.com/document/product/215/6513">弹性网卡使用限制</a>。
* 可以指定内网IP地址申请，内网IP地址类型不能为主IP，主IP已存在，不能修改，内网IP必须要弹性网卡所在子网内，而且不能被占用。
* 在弹性网卡上申请一个到多个辅助内网IP，接口会在弹性网卡所在子网网段内返回指定数量的辅助内网IP。
     * @param {AssignPrivateIpAddressesRequest} req
     * @param {function(string, AssignPrivateIpAddressesResponse):void} cb
     * @public
     */
    AssignPrivateIpAddresses(req, cb) {
        let resp = new AssignPrivateIpAddressesResponse();
        this.request("AssignPrivateIpAddresses", req, resp, cb);
    }

    /**
     * 创建协议端口模板集合
     * @param {CreateServiceTemplateGroupRequest} req
     * @param {function(string, CreateServiceTemplateGroupResponse):void} cb
     * @public
     */
    CreateServiceTemplateGroup(req, cb) {
        let resp = new CreateServiceTemplateGroupResponse();
        this.request("CreateServiceTemplateGroup", req, resp, cb);
    }

    /**
     * 本接口(ResetVpnConnection)用于重置VPN通道。
     * @param {ResetVpnConnectionRequest} req
     * @param {function(string, ResetVpnConnectionResponse):void} cb
     * @public
     */
    ResetVpnConnection(req, cb) {
        let resp = new ResetVpnConnectionResponse();
        this.request("ResetVpnConnection", req, resp, cb);
    }

    /**
     * 本接口（ModifyVpcAttribute）用于修改私有网络（VPC）的相关属性。
     * @param {ModifyVpcAttributeRequest} req
     * @param {function(string, ModifyVpcAttributeResponse):void} cb
     * @public
     */
    ModifyVpcAttribute(req, cb) {
        let resp = new ModifyVpcAttributeResponse();
        this.request("ModifyVpcAttribute", req, resp, cb);
    }

    /**
     * 删除路由表
     * @param {DeleteRouteTableRequest} req
     * @param {function(string, DeleteRouteTableResponse):void} cb
     * @public
     */
    DeleteRouteTable(req, cb) {
        let resp = new DeleteRouteTableResponse();
        this.request("DeleteRouteTable", req, resp, cb);
    }

    /**
     * 本接口 (DisassociateAddress) 用于解绑[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
* 只有状态为 BIND 和 BIND_ENI 的 EIP 才能进行解绑定操作。
* EIP 如果被封堵，则不能进行解绑定操作。
     * @param {DisassociateAddressRequest} req
     * @param {function(string, DisassociateAddressResponse):void} cb
     * @public
     */
    DisassociateAddress(req, cb) {
        let resp = new DisassociateAddressResponse();
        this.request("DisassociateAddress", req, resp, cb);
    }

    /**
     * 查询IP地址模板
     * @param {DescribeAddressTemplatesRequest} req
     * @param {function(string, DescribeAddressTemplatesResponse):void} cb
     * @public
     */
    DescribeAddressTemplates(req, cb) {
        let resp = new DescribeAddressTemplatesResponse();
        this.request("DescribeAddressTemplates", req, resp, cb);
    }

    /**
     * 创建IP地址模版
     * @param {CreateAddressTemplateRequest} req
     * @param {function(string, CreateAddressTemplateResponse):void} cb
     * @public
     */
    CreateAddressTemplate(req, cb) {
        let resp = new CreateAddressTemplateResponse();
        this.request("CreateAddressTemplate", req, resp, cb);
    }

    /**
     * 本接口（DeleteNetworkInterface）用于创建弹性网卡。
* 弹性网卡上绑定了云主机时，不能被删除。
* 删除指定弹性网卡，弹性网卡必须先和子机解绑才能删除。删除之后弹性网卡上所有内网IP都将被退还。
     * @param {DeleteNetworkInterfaceRequest} req
     * @param {function(string, DeleteNetworkInterfaceResponse):void} cb
     * @public
     */
    DeleteNetworkInterface(req, cb) {
        let resp = new DeleteNetworkInterfaceResponse();
        this.request("DeleteNetworkInterface", req, resp, cb);
    }

    /**
     * 查询IP地址模板集合
     * @param {DescribeAddressTemplateGroupsRequest} req
     * @param {function(string, DescribeAddressTemplateGroupsResponse):void} cb
     * @public
     */
    DescribeAddressTemplateGroups(req, cb) {
        let resp = new DescribeAddressTemplateGroupsResponse();
        this.request("DescribeAddressTemplateGroups", req, resp, cb);
    }

    /**
     * 本接口（DescribeVpcs）用于查询私有网络列表。
     * @param {DescribeVpcsRequest} req
     * @param {function(string, DescribeVpcsResponse):void} cb
     * @public
     */
    DescribeVpcs(req, cb) {
        let resp = new DescribeVpcsResponse();
        this.request("DescribeVpcs", req, resp, cb);
    }

    /**
     * 本接口(DetachClassicLinkVpc)用于删除私有网络和基础网络设备互通。
     * @param {DetachClassicLinkVpcRequest} req
     * @param {function(string, DetachClassicLinkVpcResponse):void} cb
     * @public
     */
    DetachClassicLinkVpc(req, cb) {
        let resp = new DetachClassicLinkVpcResponse();
        this.request("DetachClassicLinkVpc", req, resp, cb);
    }

    /**
     * 本接口（DescribeNetworkInterfaces）用于查询弹性网卡列表。
     * @param {DescribeNetworkInterfacesRequest} req
     * @param {function(string, DescribeNetworkInterfacesResponse):void} cb
     * @public
     */
    DescribeNetworkInterfaces(req, cb) {
        let resp = new DescribeNetworkInterfacesResponse();
        this.request("DescribeNetworkInterfaces", req, resp, cb);
    }

    /**
     * 本接口（CreateSecurityGroupPolicies）用于创建安全组规则（SecurityGroupPolicy）。

* Version安全组规则版本号，用户每次更新安全规则版本会自动加1，防止你更新的路由规则已过期，不填不考虑冲突。
* Protocol字段支持输入TCP, UDP, ICMP, GRE, ALL。
* CidrBlock字段允许输入符合cidr格式标准的任意字符串。(展开)在基础网络中，如果CidrBlock包含您的账户内的云服务器之外的设备在腾讯云的内网IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。
* SecurityGroupId字段允许输入与待修改的安全组位于相同项目中的安全组ID，包括这个安全组ID本身，代表安全组下所有云服务器的内网IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个ID所关联的云服务器变化而变化，不需要重新修改。
* Port字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当Protocol字段是TCP或UDP时，Port字段才被接受。
* Action字段只允许输入ACCEPT或DROP。
* CidrBlock, SecurityGroupId, AddressTemplate三者是排他关系，不允许同时输入，Protocol + Port和ServiceTemplate二者是排他关系，不允许同时输入。
* 一次请求中只能创建单个方向的规则, 如果需要指定索引（PolicyIndex）参数, 多条规则的索引必须一致。
     * @param {CreateSecurityGroupPoliciesRequest} req
     * @param {function(string, CreateSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    CreateSecurityGroupPolicies(req, cb) {
        let resp = new CreateSecurityGroupPoliciesResponse();
        this.request("CreateSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 查询协议端口模板
     * @param {DescribeServiceTemplatesRequest} req
     * @param {function(string, DescribeServiceTemplatesResponse):void} cb
     * @public
     */
    DescribeServiceTemplates(req, cb) {
        let resp = new DescribeServiceTemplatesResponse();
        this.request("DescribeServiceTemplates", req, resp, cb);
    }

    /**
     * 本接口（MigrateNetworkInterface）用于弹性网卡迁移。
     * @param {MigrateNetworkInterfaceRequest} req
     * @param {function(string, MigrateNetworkInterfaceResponse):void} cb
     * @public
     */
    MigrateNetworkInterface(req, cb) {
        let resp = new MigrateNetworkInterfaceResponse();
        this.request("MigrateNetworkInterface", req, resp, cb);
    }

    /**
     * 本接口（ModifyVpnConnectionAttribute）用于修改VPN通道。
     * @param {ModifyVpnConnectionAttributeRequest} req
     * @param {function(string, ModifyVpnConnectionAttributeResponse):void} cb
     * @public
     */
    ModifyVpnConnectionAttribute(req, cb) {
        let resp = new ModifyVpnConnectionAttributeResponse();
        this.request("ModifyVpnConnectionAttribute", req, resp, cb);
    }

    /**
     *  本接口（DescribeVpnConnections）查询VPN通道列表。
     * @param {DescribeVpnConnectionsRequest} req
     * @param {function(string, DescribeVpnConnectionsResponse):void} cb
     * @public
     */
    DescribeVpnConnections(req, cb) {
        let resp = new DescribeVpnConnectionsResponse();
        this.request("DescribeVpnConnections", req, resp, cb);
    }

    /**
     * 本接口(CreateSubnet)用于创建子网。
* 创建子网前必须创建好 VPC。
* 子网创建成功后，子网网段不能修改。子网网段必须在VPC网段内，可以和VPC网段相同（VPC有且只有一个子网时），建议子网网段在VPC网段内，预留网段给其他子网使用。
* 你可以创建的最小网段子网掩码为28（有16个IP地址），最大网段子网掩码为16（65,536个IP地址）。
* 同一个VPC内，多个子网的网段不能重叠。
* 子网创建后会自动关联到默认路由表。
     * @param {CreateSubnetRequest} req
     * @param {function(string, CreateSubnetResponse):void} cb
     * @public
     */
    CreateSubnet(req, cb) {
        let resp = new CreateSubnetResponse();
        this.request("CreateSubnet", req, resp, cb);
    }


}
module.exports = VpcClient;

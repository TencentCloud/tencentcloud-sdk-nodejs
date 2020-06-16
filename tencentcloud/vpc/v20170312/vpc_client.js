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
const CreateNetworkAclResponse = models.CreateNetworkAclResponse;
const NetworkAcl = models.NetworkAcl;
const ModifyAddressTemplateAttributeResponse = models.ModifyAddressTemplateAttributeResponse;
const DisassociateDhcpIpWithAddressIpRequest = models.DisassociateDhcpIpWithAddressIpRequest;
const SecurityGroupLimitSet = models.SecurityGroupLimitSet;
const CreateRoutesRequest = models.CreateRoutesRequest;
const DescribeHaVipsResponse = models.DescribeHaVipsResponse;
const SecurityGroupAssociationStatistics = models.SecurityGroupAssociationStatistics;
const DeleteServiceTemplateResponse = models.DeleteServiceTemplateResponse;
const CreateServiceTemplateRequest = models.CreateServiceTemplateRequest;
const IKEOptionsSpecification = models.IKEOptionsSpecification;
const TransformAddressResponse = models.TransformAddressResponse;
const DescribeVpnConnectionsRequest = models.DescribeVpnConnectionsRequest;
const CreateAssistantCidrRequest = models.CreateAssistantCidrRequest;
const DescribeNetworkInterfacesRequest = models.DescribeNetworkInterfacesRequest;
const DescribeVpcLimitsRequest = models.DescribeVpcLimitsRequest;
const ReleaseIp6AddressesBandwidthResponse = models.ReleaseIp6AddressesBandwidthResponse;
const DescribeVpcIpv6AddressesRequest = models.DescribeVpcIpv6AddressesRequest;
const DescribeCustomerGatewaysRequest = models.DescribeCustomerGatewaysRequest;
const ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse = models.ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse;
const ModifyIp6RuleResponse = models.ModifyIp6RuleResponse;
const ModifyNetworkAclAttributeResponse = models.ModifyNetworkAclAttributeResponse;
const DescribeVpnGatewaysResponse = models.DescribeVpnGatewaysResponse;
const ServiceTemplateGroup = models.ServiceTemplateGroup;
const CreateDhcpIpResponse = models.CreateDhcpIpResponse;
const FlowLog = models.FlowLog;
const CreateDefaultSecurityGroupRequest = models.CreateDefaultSecurityGroupRequest;
const DescribeServiceTemplateGroupsResponse = models.DescribeServiceTemplateGroupsResponse;
const DetachClassicLinkVpcRequest = models.DetachClassicLinkVpcRequest;
const DeleteBandwidthPackageResponse = models.DeleteBandwidthPackageResponse;
const ModifyNatGatewayAttributeRequest = models.ModifyNatGatewayAttributeRequest;
const DescribeVpcLimitsResponse = models.DescribeVpcLimitsResponse;
const AddBandwidthPackageResourcesRequest = models.AddBandwidthPackageResourcesRequest;
const AssignIpv6SubnetCidrBlockRequest = models.AssignIpv6SubnetCidrBlockRequest;
const CreateVpcResponse = models.CreateVpcResponse;
const AssistantCidr = models.AssistantCidr;
const ModifyNetworkAclEntriesRequest = models.ModifyNetworkAclEntriesRequest;
const DescribeVpcPrivateIpAddressesRequest = models.DescribeVpcPrivateIpAddressesRequest;
const AddressTemplate = models.AddressTemplate;
const DescribeIp6TranslatorQuotaResponse = models.DescribeIp6TranslatorQuotaResponse;
const VpnGatewayQuota = models.VpnGatewayQuota;
const UnassignIpv6AddressesResponse = models.UnassignIpv6AddressesResponse;
const CreateIp6TranslatorsResponse = models.CreateIp6TranslatorsResponse;
const DescribeFlowLogsRequest = models.DescribeFlowLogsRequest;
const AssociateNatGatewayAddressRequest = models.AssociateNatGatewayAddressRequest;
const CreateDirectConnectGatewayRequest = models.CreateDirectConnectGatewayRequest;
const ModifyBandwidthPackageAttributeRequest = models.ModifyBandwidthPackageAttributeRequest;
const DisassociateNetworkInterfaceSecurityGroupsRequest = models.DisassociateNetworkInterfaceSecurityGroupsRequest;
const SecurityGroupPolicySet = models.SecurityGroupPolicySet;
const ModifyFlowLogAttributeRequest = models.ModifyFlowLogAttributeRequest;
const AssociateNetworkAclSubnetsResponse = models.AssociateNetworkAclSubnetsResponse;
const DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest = models.DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest;
const ResetRoutesRequest = models.ResetRoutesRequest;
const CheckDefaultSubnetRequest = models.CheckDefaultSubnetRequest;
const CheckNetDetectStateRequest = models.CheckNetDetectStateRequest;
const RouteTableAssociation = models.RouteTableAssociation;
const ModifyCustomerGatewayAttributeRequest = models.ModifyCustomerGatewayAttributeRequest;
const DescribeRouteTablesResponse = models.DescribeRouteTablesResponse;
const DeleteCcnResponse = models.DeleteCcnResponse;
const ServiceTemplate = models.ServiceTemplate;
const DescribeCcnAttachedInstancesRequest = models.DescribeCcnAttachedInstancesRequest;
const DescribeNatGatewaysRequest = models.DescribeNatGatewaysRequest;
const ModifyFlowLogAttributeResponse = models.ModifyFlowLogAttributeResponse;
const DescribeBandwidthPackagesResponse = models.DescribeBandwidthPackagesResponse;
const DescribeDirectConnectGatewaysRequest = models.DescribeDirectConnectGatewaysRequest;
const ModifyIp6TranslatorResponse = models.ModifyIp6TranslatorResponse;
const DeleteIp6TranslatorsResponse = models.DeleteIp6TranslatorsResponse;
const DescribeVpcsRequest = models.DescribeVpcsRequest;
const DescribeRouteConflictsResponse = models.DescribeRouteConflictsResponse;
const AcceptAttachCcnInstancesRequest = models.AcceptAttachCcnInstancesRequest;
const DescribeGatewayFlowMonitorDetailResponse = models.DescribeGatewayFlowMonitorDetailResponse;
const DeleteFlowLogRequest = models.DeleteFlowLogRequest;
const NetDetectState = models.NetDetectState;
const HaVipDisassociateAddressIpResponse = models.HaVipDisassociateAddressIpResponse;
const DescribeTaskResultRequest = models.DescribeTaskResultRequest;
const ModifyAddressInternetChargeTypeResponse = models.ModifyAddressInternetChargeTypeResponse;
const UnassignIpv6SubnetCidrBlockRequest = models.UnassignIpv6SubnetCidrBlockRequest;
const ModifyVpcAttributeRequest = models.ModifyVpcAttributeRequest;
const AssignIpv6CidrBlockRequest = models.AssignIpv6CidrBlockRequest;
const CreateSecurityGroupPoliciesResponse = models.CreateSecurityGroupPoliciesResponse;
const HaVipAssociateAddressIpRequest = models.HaVipAssociateAddressIpRequest;
const DisassociateNatGatewayAddressResponse = models.DisassociateNatGatewayAddressResponse;
const DeleteRoutesResponse = models.DeleteRoutesResponse;
const DescribeSecurityGroupAssociationStatisticsResponse = models.DescribeSecurityGroupAssociationStatisticsResponse;
const ModifyAssistantCidrResponse = models.ModifyAssistantCidrResponse;
const NatGatewayAddress = models.NatGatewayAddress;
const ModifyNetworkAclEntriesResponse = models.ModifyNetworkAclEntriesResponse;
const DescribeFlowLogRequest = models.DescribeFlowLogRequest;
const DescribeIp6AddressesRequest = models.DescribeIp6AddressesRequest;
const AddIp6RulesRequest = models.AddIp6RulesRequest;
const DescribeAccountAttributesResponse = models.DescribeAccountAttributesResponse;
const AssignPrivateIpAddressesResponse = models.AssignPrivateIpAddressesResponse;
const DescribeSecurityGroupsRequest = models.DescribeSecurityGroupsRequest;
const DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest = models.DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest;
const AddBandwidthPackageResourcesResponse = models.AddBandwidthPackageResourcesResponse;
const DisassociateNetworkAclSubnetsResponse = models.DisassociateNetworkAclSubnetsResponse;
const SetCcnRegionBandwidthLimitsRequest = models.SetCcnRegionBandwidthLimitsRequest;
const ModifyAddressInternetChargeTypeRequest = models.ModifyAddressInternetChargeTypeRequest;
const ModifyIp6AddressesBandwidthRequest = models.ModifyIp6AddressesBandwidthRequest;
const DescribeDirectConnectGatewaysResponse = models.DescribeDirectConnectGatewaysResponse;
const Ip6RuleInfo = models.Ip6RuleInfo;
const CreateSecurityGroupWithPoliciesResponse = models.CreateSecurityGroupWithPoliciesResponse;
const DeleteAddressTemplateResponse = models.DeleteAddressTemplateResponse;
const ModifySubnetAttributeResponse = models.ModifySubnetAttributeResponse;
const ResetNatGatewayConnectionRequest = models.ResetNatGatewayConnectionRequest;
const ReplaceDirectConnectGatewayCcnRoutesResponse = models.ReplaceDirectConnectGatewayCcnRoutesResponse;
const DeleteAddressTemplateRequest = models.DeleteAddressTemplateRequest;
const NetworkInterface = models.NetworkInterface;
const TransformAddressRequest = models.TransformAddressRequest;
const ReplaceDirectConnectGatewayCcnRoutesRequest = models.ReplaceDirectConnectGatewayCcnRoutesRequest;
const ReferredSecurityGroup = models.ReferredSecurityGroup;
const ModifyAddressTemplateAttributeRequest = models.ModifyAddressTemplateAttributeRequest;
const CreateNatGatewayResponse = models.CreateNatGatewayResponse;
const DescribeVpcsResponse = models.DescribeVpcsResponse;
const ModifySecurityGroupAttributeRequest = models.ModifySecurityGroupAttributeRequest;
const ModifyNetDetectRequest = models.ModifyNetDetectRequest;
const DescribeVpcResourceDashboardResponse = models.DescribeVpcResourceDashboardResponse;
const AllocateIp6AddressesBandwidthResponse = models.AllocateIp6AddressesBandwidthResponse;
const DescribeNetDetectStatesRequest = models.DescribeNetDetectStatesRequest;
const DescribeNatGatewaysResponse = models.DescribeNatGatewaysResponse;
const DescribeFlowLogResponse = models.DescribeFlowLogResponse;
const HaVipAssociateAddressIpResponse = models.HaVipAssociateAddressIpResponse;
const DescribeBandwidthPackagesRequest = models.DescribeBandwidthPackagesRequest;
const DeleteDirectConnectGatewayCcnRoutesResponse = models.DeleteDirectConnectGatewayCcnRoutesResponse;
const DescribeAssistantCidrResponse = models.DescribeAssistantCidrResponse;
const InstanceStatistic = models.InstanceStatistic;
const CreateVpnConnectionRequest = models.CreateVpnConnectionRequest;
const CcnRoute = models.CcnRoute;
const DeleteSecurityGroupPoliciesRequest = models.DeleteSecurityGroupPoliciesRequest;
const VpnConnection = models.VpnConnection;
const DescribeCcnsRequest = models.DescribeCcnsRequest;
const ModifyNatGatewayAttributeResponse = models.ModifyNatGatewayAttributeResponse;
const DescribeNetDetectsRequest = models.DescribeNetDetectsRequest;
const CreateAddressTemplateGroupRequest = models.CreateAddressTemplateGroupRequest;
const DescribeCustomerGatewayVendorsResponse = models.DescribeCustomerGatewayVendorsResponse;
const RouteConflict = models.RouteConflict;
const DeleteSubnetResponse = models.DeleteSubnetResponse;
const Vpc = models.Vpc;
const CreateVpnGatewayResponse = models.CreateVpnGatewayResponse;
const DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse = models.DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse;
const DescribeVpcIpv6AddressesResponse = models.DescribeVpcIpv6AddressesResponse;
const ResetAttachCcnInstancesResponse = models.ResetAttachCcnInstancesResponse;
const RejectAttachCcnInstancesRequest = models.RejectAttachCcnInstancesRequest;
const ModifyCcnRegionBandwidthLimitsTypeRequest = models.ModifyCcnRegionBandwidthLimitsTypeRequest;
const DescribeVpcResourceDashboardRequest = models.DescribeVpcResourceDashboardRequest;
const ModifyIp6RuleRequest = models.ModifyIp6RuleRequest;
const ReplaceRouteTableAssociationRequest = models.ReplaceRouteTableAssociationRequest;
const AssociateNetworkAclSubnetsRequest = models.AssociateNetworkAclSubnetsRequest;
const CheckAssistantCidrRequest = models.CheckAssistantCidrRequest;
const RenewVpnGatewayRequest = models.RenewVpnGatewayRequest;
const SecurityGroupPolicy = models.SecurityGroupPolicy;
const DeleteVpcRequest = models.DeleteVpcRequest;
const ModifyServiceTemplateAttributeResponse = models.ModifyServiceTemplateAttributeResponse;
const DescribeCcnsResponse = models.DescribeCcnsResponse;
const TemplateLimit = models.TemplateLimit;
const CreateSubnetResponse = models.CreateSubnetResponse;
const DescribeSecurityGroupPoliciesResponse = models.DescribeSecurityGroupPoliciesResponse;
const GetCcnRegionBandwidthLimitsResponse = models.GetCcnRegionBandwidthLimitsResponse;
const ModifySecurityGroupPoliciesRequest = models.ModifySecurityGroupPoliciesRequest;
const RemoveIp6RulesResponse = models.RemoveIp6RulesResponse;
const AssociateDhcpIpWithAddressIpRequest = models.AssociateDhcpIpWithAddressIpRequest;
const ReplaceRoutesRequest = models.ReplaceRoutesRequest;
const CreateCustomerGatewayResponse = models.CreateCustomerGatewayResponse;
const DeleteServiceTemplateGroupResponse = models.DeleteServiceTemplateGroupResponse;
const DisassociateAddressRequest = models.DisassociateAddressRequest;
const NetworkAclEntrySet = models.NetworkAclEntrySet;
const DeleteVpnConnectionResponse = models.DeleteVpnConnectionResponse;
const CreateCcnResponse = models.CreateCcnResponse;
const EnableCcnRoutesRequest = models.EnableCcnRoutesRequest;
const Tag = models.Tag;
const DescribeVpcPrivateIpAddressesResponse = models.DescribeVpcPrivateIpAddressesResponse;
const DefaultVpcSubnet = models.DefaultVpcSubnet;
const DescribeIp6TranslatorsRequest = models.DescribeIp6TranslatorsRequest;
const CreateSubnetsResponse = models.CreateSubnetsResponse;
const DescribeGatewayFlowMonitorDetailRequest = models.DescribeGatewayFlowMonitorDetailRequest;
const InquiryPriceCreateVpnGatewayResponse = models.InquiryPriceCreateVpnGatewayResponse;
const DescribeSecurityGroupLimitsResponse = models.DescribeSecurityGroupLimitsResponse;
const FilterObject = models.FilterObject;
const ModifyDirectConnectGatewayAttributeRequest = models.ModifyDirectConnectGatewayAttributeRequest;
const ModifyBandwidthPackageAttributeResponse = models.ModifyBandwidthPackageAttributeResponse;
const DetachNetworkInterfaceResponse = models.DetachNetworkInterfaceResponse;
const ResetRoutesResponse = models.ResetRoutesResponse;
const DeleteNetworkAclRequest = models.DeleteNetworkAclRequest;
const NatGatewayDestinationIpPortTranslationNatRule = models.NatGatewayDestinationIpPortTranslationNatRule;
const DescribeNetDetectStatesResponse = models.DescribeNetDetectStatesResponse;
const ModifyDhcpIpAttributeRequest = models.ModifyDhcpIpAttributeRequest;
const ModifyIp6TranslatorRequest = models.ModifyIp6TranslatorRequest;
const CreateVpnConnectionResponse = models.CreateVpnConnectionResponse;
const AddressTemplateSpecification = models.AddressTemplateSpecification;
const VpcIpv6Address = models.VpcIpv6Address;
const AssignIpv6AddressesRequest = models.AssignIpv6AddressesRequest;
const CreateServiceTemplateGroupResponse = models.CreateServiceTemplateGroupResponse;
const NetDetect = models.NetDetect;
const ModifyIpv6AddressesAttributeResponse = models.ModifyIpv6AddressesAttributeResponse;
const ReplaceSecurityGroupPolicyRequest = models.ReplaceSecurityGroupPolicyRequest;
const NatGateway = models.NatGateway;
const ResourceDashboard = models.ResourceDashboard;
const DescribeCcnAttachedInstancesResponse = models.DescribeCcnAttachedInstancesResponse;
const DeleteCustomerGatewayResponse = models.DeleteCustomerGatewayResponse;
const CreateNetDetectRequest = models.CreateNetDetectRequest;
const CreateAddressTemplateResponse = models.CreateAddressTemplateResponse;
const CreateNatGatewayDestinationIpPortTranslationNatRuleResponse = models.CreateNatGatewayDestinationIpPortTranslationNatRuleResponse;
const DeleteAddressTemplateGroupRequest = models.DeleteAddressTemplateGroupRequest;
const DescribeNetworkInterfaceLimitRequest = models.DescribeNetworkInterfaceLimitRequest;
const CreateBandwidthPackageRequest = models.CreateBandwidthPackageRequest;
const DescribeIp6AddressesResponse = models.DescribeIp6AddressesResponse;
const ModifyRouteTableAttributeRequest = models.ModifyRouteTableAttributeRequest;
const ModifyDirectConnectGatewayAttributeResponse = models.ModifyDirectConnectGatewayAttributeResponse;
const DescribeVpnGatewaysRequest = models.DescribeVpnGatewaysRequest;
const NetDetectIpState = models.NetDetectIpState;
const ModifyIp6AddressesBandwidthResponse = models.ModifyIp6AddressesBandwidthResponse;
const CreateSubnetsRequest = models.CreateSubnetsRequest;
const ModifyServiceTemplateAttributeRequest = models.ModifyServiceTemplateAttributeRequest;
const AssociateAddressResponse = models.AssociateAddressResponse;
const ResetVpnConnectionResponse = models.ResetVpnConnectionResponse;
const CreateNetworkAclRequest = models.CreateNetworkAclRequest;
const DescribeAddressesRequest = models.DescribeAddressesRequest;
const DescribeSecurityGroupPoliciesRequest = models.DescribeSecurityGroupPoliciesRequest;
const ModifyNetworkInterfaceAttributeResponse = models.ModifyNetworkInterfaceAttributeResponse;
const CreateSecurityGroupResponse = models.CreateSecurityGroupResponse;
const DisassociateNetworkInterfaceSecurityGroupsResponse = models.DisassociateNetworkInterfaceSecurityGroupsResponse;
const DescribeIp6TranslatorQuotaRequest = models.DescribeIp6TranslatorQuotaRequest;
const DescribeNetworkInterfaceLimitResponse = models.DescribeNetworkInterfaceLimitResponse;
const AssignIpv6CidrBlockResponse = models.AssignIpv6CidrBlockResponse;
const CreateCcnRequest = models.CreateCcnRequest;
const RemoveIp6RulesRequest = models.RemoveIp6RulesRequest;
const AddIp6RulesResponse = models.AddIp6RulesResponse;
const DeleteVpnConnectionRequest = models.DeleteVpnConnectionRequest;
const NetworkAclEntry = models.NetworkAclEntry;
const DescribeDhcpIpsRequest = models.DescribeDhcpIpsRequest;
const DescribeAssistantCidrRequest = models.DescribeAssistantCidrRequest;
const RenewVpnGatewayResponse = models.RenewVpnGatewayResponse;
const DeleteDirectConnectGatewayResponse = models.DeleteDirectConnectGatewayResponse;
const ModifyAddressesBandwidthRequest = models.ModifyAddressesBandwidthRequest;
const ResetVpnGatewayInternetMaxBandwidthRequest = models.ResetVpnGatewayInternetMaxBandwidthRequest;
const DirectConnectGateway = models.DirectConnectGateway;
const Price = models.Price;
const HaVipDisassociateAddressIpRequest = models.HaVipDisassociateAddressIpRequest;
const ModifyVpnGatewayAttributeResponse = models.ModifyVpnGatewayAttributeResponse;
const DescribeVpnGatewayCcnRoutesRequest = models.DescribeVpnGatewayCcnRoutesRequest;
const CreateServiceTemplateGroupRequest = models.CreateServiceTemplateGroupRequest;
const DescribeClassicLinkInstancesResponse = models.DescribeClassicLinkInstancesResponse;
const DescribeVpnGatewayCcnRoutesResponse = models.DescribeVpnGatewayCcnRoutesResponse;
const DetachCcnInstancesRequest = models.DetachCcnInstancesRequest;
const CreateFlowLogResponse = models.CreateFlowLogResponse;
const GetCcnRegionBandwidthLimitsRequest = models.GetCcnRegionBandwidthLimitsRequest;
const ReleaseIp6AddressesBandwidthRequest = models.ReleaseIp6AddressesBandwidthRequest;
const CcnAttachedInstance = models.CcnAttachedInstance;
const SecurityPolicyDatabase = models.SecurityPolicyDatabase;
const Ipv6Address = models.Ipv6Address;
const CreateNetworkInterfaceRequest = models.CreateNetworkInterfaceRequest;
const DeleteHaVipResponse = models.DeleteHaVipResponse;
const DescribeFlowLogsResponse = models.DescribeFlowLogsResponse;
const VpcPrivateIpAddress = models.VpcPrivateIpAddress;
const CvmInstance = models.CvmInstance;
const DescribeNetworkAclsRequest = models.DescribeNetworkAclsRequest;
const DescribeSubnetsRequest = models.DescribeSubnetsRequest;
const CreateSubnetRequest = models.CreateSubnetRequest;
const AddressTemplateGroup = models.AddressTemplateGroup;
const DownloadCustomerGatewayConfigurationRequest = models.DownloadCustomerGatewayConfigurationRequest;
const DeleteBandwidthPackageRequest = models.DeleteBandwidthPackageRequest;
const HaVip = models.HaVip;
const ModifyAddressesBandwidthResponse = models.ModifyAddressesBandwidthResponse;
const ModifyCcnRegionBandwidthLimitsTypeResponse = models.ModifyCcnRegionBandwidthLimitsTypeResponse;
const RejectAttachCcnInstancesResponse = models.RejectAttachCcnInstancesResponse;
const SetCcnRegionBandwidthLimitsResponse = models.SetCcnRegionBandwidthLimitsResponse;
const DescribeAccountAttributesRequest = models.DescribeAccountAttributesRequest;
const DescribeCcnRoutesRequest = models.DescribeCcnRoutesRequest;
const ModifyDhcpIpAttributeResponse = models.ModifyDhcpIpAttributeResponse;
const CreateAndAttachNetworkInterfaceRequest = models.CreateAndAttachNetworkInterfaceRequest;
const DownloadCustomerGatewayConfigurationResponse = models.DownloadCustomerGatewayConfigurationResponse;
const DeleteDhcpIpResponse = models.DeleteDhcpIpResponse;
const ModifyGatewayFlowQosRequest = models.ModifyGatewayFlowQosRequest;
const DeleteNetDetectResponse = models.DeleteNetDetectResponse;
const AllocateAddressesRequest = models.AllocateAddressesRequest;
const ModifyVpnConnectionAttributeRequest = models.ModifyVpnConnectionAttributeRequest;
const ModifyAssistantCidrRequest = models.ModifyAssistantCidrRequest;
const CreateIp6TranslatorsRequest = models.CreateIp6TranslatorsRequest;
const AssociateDhcpIpWithAddressIpResponse = models.AssociateDhcpIpWithAddressIpResponse;
const ModifyGatewayFlowQosResponse = models.ModifyGatewayFlowQosResponse;
const ModifySecurityGroupAttributeResponse = models.ModifySecurityGroupAttributeResponse;
const AddressTemplateItem = models.AddressTemplateItem;
const ModifyAddressAttributeResponse = models.ModifyAddressAttributeResponse;
const AttachClassicLinkVpcRequest = models.AttachClassicLinkVpcRequest;
const GatewayFlowMonitorDetail = models.GatewayFlowMonitorDetail;
const DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse = models.DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse;
const DeleteVpnGatewayRequest = models.DeleteVpnGatewayRequest;
const ReplaceRouteTableAssociationResponse = models.ReplaceRouteTableAssociationResponse;
const AttachCcnInstancesRequest = models.AttachCcnInstancesRequest;
const DescribeDirectConnectGatewayCcnRoutesRequest = models.DescribeDirectConnectGatewayCcnRoutesRequest;
const CcnInstance = models.CcnInstance;
const ItemPrice = models.ItemPrice;
const DeleteNatGatewayRequest = models.DeleteNatGatewayRequest;
const ModifyCustomerGatewayAttributeResponse = models.ModifyCustomerGatewayAttributeResponse;
const ConflictItem = models.ConflictItem;
const InquiryPriceRenewVpnGatewayResponse = models.InquiryPriceRenewVpnGatewayResponse;
const AssignIpv6SubnetCidrBlockResponse = models.AssignIpv6SubnetCidrBlockResponse;
const DeleteAssistantCidrResponse = models.DeleteAssistantCidrResponse;
const DescribeCcnRegionBandwidthLimitsResponse = models.DescribeCcnRegionBandwidthLimitsResponse;
const DescribeAddressesResponse = models.DescribeAddressesResponse;
const GatewayQos = models.GatewayQos;
const ModifyIpv6AddressesAttributeRequest = models.ModifyIpv6AddressesAttributeRequest;
const DescribeCustomerGatewayVendorsRequest = models.DescribeCustomerGatewayVendorsRequest;
const DisableRoutesResponse = models.DisableRoutesResponse;
const ResetVpnGatewayInternetMaxBandwidthResponse = models.ResetVpnGatewayInternetMaxBandwidthResponse;
const AddressChargePrepaid = models.AddressChargePrepaid;
const DescribeNetworkAclsResponse = models.DescribeNetworkAclsResponse;
const DeleteFlowLogResponse = models.DeleteFlowLogResponse;
const AttachCcnInstancesResponse = models.AttachCcnInstancesResponse;
const CreateDefaultVpcResponse = models.CreateDefaultVpcResponse;
const ModifyVpcAttributeResponse = models.ModifyVpcAttributeResponse;
const ModifyVpnConnectionAttributeResponse = models.ModifyVpnConnectionAttributeResponse;
const PrivateIpAddressSpecification = models.PrivateIpAddressSpecification;
const AlgType = models.AlgType;
const MigratePrivateIpAddressResponse = models.MigratePrivateIpAddressResponse;
const DeleteRouteTableResponse = models.DeleteRouteTableResponse;
const DescribeVpcInstancesResponse = models.DescribeVpcInstancesResponse;
const AccountAttribute = models.AccountAttribute;
const DeleteDirectConnectGatewayCcnRoutesRequest = models.DeleteDirectConnectGatewayCcnRoutesRequest;
const CreateNatGatewayDestinationIpPortTranslationNatRuleRequest = models.CreateNatGatewayDestinationIpPortTranslationNatRuleRequest;
const CreateFlowLogRequest = models.CreateFlowLogRequest;
const AttachNetworkInterfaceResponse = models.AttachNetworkInterfaceResponse;
const DisassociateNatGatewayAddressRequest = models.DisassociateNatGatewayAddressRequest;
const DescribeServiceTemplatesResponse = models.DescribeServiceTemplatesResponse;
const DescribeRouteTablesRequest = models.DescribeRouteTablesRequest;
const ResetAttachCcnInstancesRequest = models.ResetAttachCcnInstancesRequest;
const CreateHaVipResponse = models.CreateHaVipResponse;
const DescribeSecurityGroupReferencesRequest = models.DescribeSecurityGroupReferencesRequest;
const DescribeTemplateLimitsResponse = models.DescribeTemplateLimitsResponse;
const CheckDefaultSubnetResponse = models.CheckDefaultSubnetResponse;
const DisableRoutesRequest = models.DisableRoutesRequest;
const EnableRoutesRequest = models.EnableRoutesRequest;
const DescribeAddressTemplateGroupsResponse = models.DescribeAddressTemplateGroupsResponse;
const ReleaseAddressesRequest = models.ReleaseAddressesRequest;
const CreateDirectConnectGatewayCcnRoutesRequest = models.CreateDirectConnectGatewayCcnRoutesRequest;
const CreateDirectConnectGatewayCcnRoutesResponse = models.CreateDirectConnectGatewayCcnRoutesResponse;
const CreateRouteTableRequest = models.CreateRouteTableRequest;
const MigrateNetworkInterfaceRequest = models.MigrateNetworkInterfaceRequest;
const DisableCcnRoutesRequest = models.DisableCcnRoutesRequest;
const ModifyAddressAttributeRequest = models.ModifyAddressAttributeRequest;
const DhcpIp = models.DhcpIp;
const DeleteAssistantCidrRequest = models.DeleteAssistantCidrRequest;
const SubnetInput = models.SubnetInput;
const UnassignIpv6SubnetCidrBlockResponse = models.UnassignIpv6SubnetCidrBlockResponse;
const CreateNetDetectResponse = models.CreateNetDetectResponse;
const DeleteCcnRequest = models.DeleteCcnRequest;
const AssociateNetworkInterfaceSecurityGroupsResponse = models.AssociateNetworkInterfaceSecurityGroupsResponse;
const ModifyVpnGatewayAttributeRequest = models.ModifyVpnGatewayAttributeRequest;
const CreateNatGatewayRequest = models.CreateNatGatewayRequest;
const DeleteNetDetectRequest = models.DeleteNetDetectRequest;
const IPSECOptionsSpecification = models.IPSECOptionsSpecification;
const UnassignIpv6AddressesRequest = models.UnassignIpv6AddressesRequest;
const CreateAndAttachNetworkInterfaceResponse = models.CreateAndAttachNetworkInterfaceResponse;
const ModifyCcnAttributeRequest = models.ModifyCcnAttributeRequest;
const DeleteSecurityGroupPoliciesResponse = models.DeleteSecurityGroupPoliciesResponse;
const DisassociateDhcpIpWithAddressIpResponse = models.DisassociateDhcpIpWithAddressIpResponse;
const ModifyNetworkAclAttributeRequest = models.ModifyNetworkAclAttributeRequest;
const DeleteVpnGatewayResponse = models.DeleteVpnGatewayResponse;
const EnableCcnRoutesResponse = models.EnableCcnRoutesResponse;
const DescribeHaVipsRequest = models.DescribeHaVipsRequest;
const UnassignPrivateIpAddressesResponse = models.UnassignPrivateIpAddressesResponse;
const Address = models.Address;
const VpnGateway = models.VpnGateway;
const EnableGatewayFlowMonitorResponse = models.EnableGatewayFlowMonitorResponse;
const Resource = models.Resource;
const DeleteDhcpIpRequest = models.DeleteDhcpIpRequest;
const AllocateAddressesResponse = models.AllocateAddressesResponse;
const BandwidthPackage = models.BandwidthPackage;
const DescribeIp6TranslatorsResponse = models.DescribeIp6TranslatorsResponse;
const CreateSecurityGroupPoliciesRequest = models.CreateSecurityGroupPoliciesRequest;
const ModifyRouteTableAttributeResponse = models.ModifyRouteTableAttributeResponse;
const DescribeSecurityGroupReferencesResponse = models.DescribeSecurityGroupReferencesResponse;
const DisableGatewayFlowMonitorRequest = models.DisableGatewayFlowMonitorRequest;
const CreateAddressTemplateGroupResponse = models.CreateAddressTemplateGroupResponse;
const DescribeBandwidthPackageQuotaResponse = models.DescribeBandwidthPackageQuotaResponse;
const DeleteServiceTemplateGroupRequest = models.DeleteServiceTemplateGroupRequest;
const DeleteNatGatewayResponse = models.DeleteNatGatewayResponse;
const CreateDirectConnectGatewayResponse = models.CreateDirectConnectGatewayResponse;
const DescribeTaskResultResponse = models.DescribeTaskResultResponse;
const DisassociateNetworkAclSubnetsRequest = models.DisassociateNetworkAclSubnetsRequest;
const ModifyAddressTemplateGroupAttributeRequest = models.ModifyAddressTemplateGroupAttributeRequest;
const ModifyServiceTemplateGroupAttributeRequest = models.ModifyServiceTemplateGroupAttributeRequest;
const UnassignIpv6CidrBlockRequest = models.UnassignIpv6CidrBlockRequest;
const CCN = models.CCN;
const DeleteIp6TranslatorsRequest = models.DeleteIp6TranslatorsRequest;
const Ip6Translator = models.Ip6Translator;
const DestinationIpPortTranslationNatRule = models.DestinationIpPortTranslationNatRule;
const CreateDefaultVpcRequest = models.CreateDefaultVpcRequest;
const DescribeSubnetsResponse = models.DescribeSubnetsResponse;
const DescribeCustomerGatewaysResponse = models.DescribeCustomerGatewaysResponse;
const CheckAssistantCidrResponse = models.CheckAssistantCidrResponse;
const InquiryPriceRenewVpnGatewayRequest = models.InquiryPriceRenewVpnGatewayRequest;
const DeleteHaVipRequest = models.DeleteHaVipRequest;
const ModifyVpnGatewayCcnRoutesResponse = models.ModifyVpnGatewayCcnRoutesResponse;
const DetachCcnInstancesResponse = models.DetachCcnInstancesResponse;
const ModifyServiceTemplateGroupAttributeResponse = models.ModifyServiceTemplateGroupAttributeResponse;
const DeleteSubnetRequest = models.DeleteSubnetRequest;
const DescribeAddressTemplateGroupsRequest = models.DescribeAddressTemplateGroupsRequest;
const CheckNetDetectStateResponse = models.CheckNetDetectStateResponse;
const AssociateNatGatewayAddressResponse = models.AssociateNatGatewayAddressResponse;
const RemoveBandwidthPackageResourcesRequest = models.RemoveBandwidthPackageResourcesRequest;
const VpngwCcnRoutes = models.VpngwCcnRoutes;
const RouteTable = models.RouteTable;
const DeleteNetworkInterfaceRequest = models.DeleteNetworkInterfaceRequest;
const InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse = models.InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse;
const DeleteAddressTemplateGroupResponse = models.DeleteAddressTemplateGroupResponse;
const ReplaceRoutesResponse = models.ReplaceRoutesResponse;
const DirectConnectGatewayCcnRoute = models.DirectConnectGatewayCcnRoute;
const EnableRoutesResponse = models.EnableRoutesResponse;
const CustomerGateway = models.CustomerGateway;
const DescribeServiceTemplatesRequest = models.DescribeServiceTemplatesRequest;
const DeleteRouteTableRequest = models.DeleteRouteTableRequest;
const CreateVpnGatewayRequest = models.CreateVpnGatewayRequest;
const DescribeVpcInstancesRequest = models.DescribeVpcInstancesRequest;
const UnassignIpv6CidrBlockResponse = models.UnassignIpv6CidrBlockResponse;
const CreateBandwidthPackageResponse = models.CreateBandwidthPackageResponse;
const ResetVpnConnectionRequest = models.ResetVpnConnectionRequest;
const ReleaseAddressesResponse = models.ReleaseAddressesResponse;
const InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest = models.InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest;
const ReplaceSecurityGroupPolicyResponse = models.ReplaceSecurityGroupPolicyResponse;
const EnableGatewayFlowMonitorRequest = models.EnableGatewayFlowMonitorRequest;
const ModifyPrivateIpAddressesAttributeResponse = models.ModifyPrivateIpAddressesAttributeResponse;
const ModifyHaVipAttributeResponse = models.ModifyHaVipAttributeResponse;
const CcnBandwidthInfo = models.CcnBandwidthInfo;
const DeleteSecurityGroupResponse = models.DeleteSecurityGroupResponse;
const CreateNetworkInterfaceResponse = models.CreateNetworkInterfaceResponse;
const DescribeAddressQuotaRequest = models.DescribeAddressQuotaRequest;
const RemoveBandwidthPackageResourcesResponse = models.RemoveBandwidthPackageResourcesResponse;
const AssignIpv6AddressesResponse = models.AssignIpv6AddressesResponse;
const CreateRoutesResponse = models.CreateRoutesResponse;
const DescribeSecurityGroupsResponse = models.DescribeSecurityGroupsResponse;
const ModifyVpnGatewayCcnRoutesRequest = models.ModifyVpnGatewayCcnRoutesRequest;
const DescribeGatewayFlowQosRequest = models.DescribeGatewayFlowQosRequest;
const MigratePrivateIpAddressRequest = models.MigratePrivateIpAddressRequest;
const ModifySecurityGroupPoliciesResponse = models.ModifySecurityGroupPoliciesResponse;
const ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest = models.ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest;
const ServiceTemplateSpecification = models.ServiceTemplateSpecification;
const DetachNetworkInterfaceRequest = models.DetachNetworkInterfaceRequest;
const Ip6Rule = models.Ip6Rule;
const AttachClassicLinkVpcResponse = models.AttachClassicLinkVpcResponse;
const CreateAddressTemplateRequest = models.CreateAddressTemplateRequest;
const DescribeRouteConflictsRequest = models.DescribeRouteConflictsRequest;
const Subnet = models.Subnet;
const AttachNetworkInterfaceRequest = models.AttachNetworkInterfaceRequest;
const DescribeCcnRoutesResponse = models.DescribeCcnRoutesResponse;
const AllocateIp6AddressesBandwidthRequest = models.AllocateIp6AddressesBandwidthRequest;
const SecurityGroup = models.SecurityGroup;
const DisableGatewayFlowMonitorResponse = models.DisableGatewayFlowMonitorResponse;
const DisassociateAddressResponse = models.DisassociateAddressResponse;
const DescribeGatewayFlowQosResponse = models.DescribeGatewayFlowQosResponse;
const DeleteRoutesRequest = models.DeleteRoutesRequest;
const AssociateAddressRequest = models.AssociateAddressRequest;
const CcnRegionBandwidthLimit = models.CcnRegionBandwidthLimit;
const CreateDefaultSecurityGroupResponse = models.CreateDefaultSecurityGroupResponse;
const ClassicLinkInstance = models.ClassicLinkInstance;
const NetworkInterfaceAttachment = models.NetworkInterfaceAttachment;
const ModifyNetworkInterfaceAttributeRequest = models.ModifyNetworkInterfaceAttributeRequest;
const ModifyHaVipAttributeRequest = models.ModifyHaVipAttributeRequest;
const ModifyAddressTemplateGroupAttributeResponse = models.ModifyAddressTemplateGroupAttributeResponse;
const VpcLimit = models.VpcLimit;
const DetachClassicLinkVpcResponse = models.DetachClassicLinkVpcResponse;
const MigrateNetworkInterfaceResponse = models.MigrateNetworkInterfaceResponse;
const UnassignPrivateIpAddressesRequest = models.UnassignPrivateIpAddressesRequest;
const Filter = models.Filter;
const ModifyNetDetectResponse = models.ModifyNetDetectResponse;
const CreateHaVipRequest = models.CreateHaVipRequest;
const Ipv6SubnetCidrBlock = models.Ipv6SubnetCidrBlock;
const DescribeAddressQuotaResponse = models.DescribeAddressQuotaResponse;
const CreateCustomerGatewayRequest = models.CreateCustomerGatewayRequest;
const DeleteSecurityGroupRequest = models.DeleteSecurityGroupRequest;
const DescribeDhcpIpsResponse = models.DescribeDhcpIpsResponse;
const CreateRouteTableResponse = models.CreateRouteTableResponse;
const DeleteDirectConnectGatewayRequest = models.DeleteDirectConnectGatewayRequest;
const DescribeDirectConnectGatewayCcnRoutesResponse = models.DescribeDirectConnectGatewayCcnRoutesResponse;
const ModifyPrivateIpAddressesAttributeRequest = models.ModifyPrivateIpAddressesAttributeRequest;
const ResetNatGatewayConnectionResponse = models.ResetNatGatewayConnectionResponse;
const AssociateNetworkInterfaceSecurityGroupsRequest = models.AssociateNetworkInterfaceSecurityGroupsRequest;
const CreateSecurityGroupRequest = models.CreateSecurityGroupRequest;
const ModifyCcnAttributeResponse = models.ModifyCcnAttributeResponse;
const DescribeSecurityGroupLimitsRequest = models.DescribeSecurityGroupLimitsRequest;
const DescribeClassicLinkInstancesRequest = models.DescribeClassicLinkInstancesRequest;
const CreateServiceTemplateResponse = models.CreateServiceTemplateResponse;
const DeleteNetworkInterfaceResponse = models.DeleteNetworkInterfaceResponse;
const DisableCcnRoutesResponse = models.DisableCcnRoutesResponse;
const DescribeCcnRegionBandwidthLimitsRequest = models.DescribeCcnRegionBandwidthLimitsRequest;
const InquiryPriceCreateVpnGatewayRequest = models.InquiryPriceCreateVpnGatewayRequest;
const CreateAssistantCidrResponse = models.CreateAssistantCidrResponse;
const CustomerGatewayVendor = models.CustomerGatewayVendor;
const DescribeAddressTemplatesRequest = models.DescribeAddressTemplatesRequest;
const ConflictSource = models.ConflictSource;
const CreateDhcpIpRequest = models.CreateDhcpIpRequest;
const DescribeVpnConnectionsResponse = models.DescribeVpnConnectionsResponse;
const DeleteCustomerGatewayRequest = models.DeleteCustomerGatewayRequest;
const DescribeAddressTemplatesResponse = models.DescribeAddressTemplatesResponse;
const Quota = models.Quota;
const DescribeNetworkInterfacesResponse = models.DescribeNetworkInterfacesResponse;
const DeleteNetworkAclResponse = models.DeleteNetworkAclResponse;
const AssignPrivateIpAddressesRequest = models.AssignPrivateIpAddressesRequest;
const DescribeServiceTemplateGroupsRequest = models.DescribeServiceTemplateGroupsRequest;
const CreateSecurityGroupWithPoliciesRequest = models.CreateSecurityGroupWithPoliciesRequest;
const CreateVpcRequest = models.CreateVpcRequest;
const DeleteServiceTemplateRequest = models.DeleteServiceTemplateRequest;
const DescribeSecurityGroupAssociationStatisticsRequest = models.DescribeSecurityGroupAssociationStatisticsRequest;
const Route = models.Route;
const ModifySubnetAttributeRequest = models.ModifySubnetAttributeRequest;
const DescribeBandwidthPackageQuotaRequest = models.DescribeBandwidthPackageQuotaRequest;
const DeleteVpcResponse = models.DeleteVpcResponse;
const DescribeTemplateLimitsRequest = models.DescribeTemplateLimitsRequest;
const AcceptAttachCcnInstancesResponse = models.AcceptAttachCcnInstancesResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const DescribeNetDetectsResponse = models.DescribeNetDetectsResponse;


/**
 * vpc client
 * @class
 */
class VpcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("vpc.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * 本接口(DescribeVpcResourceDashboard)用于查看VPC资源信息。
     * @param {DescribeVpcResourceDashboardRequest} req
     * @param {function(string, DescribeVpcResourceDashboardResponse):void} cb
     * @public
     */
    DescribeVpcResourceDashboard(req, cb) {
        let resp = new DescribeVpcResourceDashboardResponse();
        this.request("DescribeVpcResourceDashboard", req, resp, cb);
    }

    /**
     * 本接口（DescribeCcnRegionBandwidthLimits）用于查询云联网各地域出带宽上限，该接口只返回已关联网络实例包含的地域
     * @param {DescribeCcnRegionBandwidthLimitsRequest} req
     * @param {function(string, DescribeCcnRegionBandwidthLimitsResponse):void} cb
     * @public
     */
    DescribeCcnRegionBandwidthLimits(req, cb) {
        let resp = new DescribeCcnRegionBandwidthLimitsResponse();
        this.request("DescribeCcnRegionBandwidthLimits", req, resp, cb);
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
     * 本接口（CreateFlowLog）用于创建流日志
     * @param {CreateFlowLogRequest} req
     * @param {function(string, CreateFlowLogResponse):void} cb
     * @public
     */
    CreateFlowLog(req, cb) {
        let resp = new CreateFlowLogResponse();
        this.request("CreateFlowLog", req, resp, cb);
    }

    /**
     * 本接口（ModifyNatGatewayAttribute）用于修改NAT网关的属性。
     * @param {ModifyNatGatewayAttributeRequest} req
     * @param {function(string, ModifyNatGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyNatGatewayAttribute(req, cb) {
        let resp = new ModifyNatGatewayAttributeResponse();
        this.request("ModifyNatGatewayAttribute", req, resp, cb);
    }

    /**
     * 查询EIP异步任务执行结果
     * @param {DescribeTaskResultRequest} req
     * @param {function(string, DescribeTaskResultResponse):void} cb
     * @public
     */
    DescribeTaskResult(req, cb) {
        let resp = new DescribeTaskResultResponse();
        this.request("DescribeTaskResult", req, resp, cb);
    }

    /**
     * 本接口（CreateNetworkAcl）用于创建新的<a href="https://cloud.tencent.com/document/product/215/20088">网络ACL</a>。
* 新建的网络ACL的入站和出站规则默认都是全部拒绝，在创建后通常您需要再调用ModifyNetworkAclEntries将网络ACL的规则设置为需要的规则。
     * @param {CreateNetworkAclRequest} req
     * @param {function(string, CreateNetworkAclResponse):void} cb
     * @public
     */
    CreateNetworkAcl(req, cb) {
        let resp = new CreateNetworkAclResponse();
        this.request("CreateNetworkAcl", req, resp, cb);
    }

    /**
     * 本接口（DescribeServiceTemplateGroups）用于查询协议端口模板集合
     * @param {DescribeServiceTemplateGroupsRequest} req
     * @param {function(string, DescribeServiceTemplateGroupsResponse):void} cb
     * @public
     */
    DescribeServiceTemplateGroups(req, cb) {
        let resp = new DescribeServiceTemplateGroupsResponse();
        this.request("DescribeServiceTemplateGroups", req, resp, cb);
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
     * 接口支持创建[设备带宽包](https://cloud.tencent.com/document/product/684/15246#.E8.AE.BE.E5.A4.87.E5.B8.A6.E5.AE.BD.E5.8C.85)和[IP带宽包](https://cloud.tencent.com/document/product/684/15246#ip-.E5.B8.A6.E5.AE.BD.E5.8C.85)
     * @param {CreateBandwidthPackageRequest} req
     * @param {function(string, CreateBandwidthPackageResponse):void} cb
     * @public
     */
    CreateBandwidthPackage(req, cb) {
        let resp = new CreateBandwidthPackageResponse();
        this.request("CreateBandwidthPackage", req, resp, cb);
    }

    /**
     * 本接口（DeleteFlowLog）用于删除流日志
     * @param {DeleteFlowLogRequest} req
     * @param {function(string, DeleteFlowLogResponse):void} cb
     * @public
     */
    DeleteFlowLog(req, cb) {
        let resp = new DeleteFlowLogResponse();
        this.request("DeleteFlowLog", req, resp, cb);
    }

    /**
     * 本接口(CreateRouteTable)用于创建路由表。
* 创建了VPC后，系统会创建一个默认路由表，所有新建的子网都会关联到默认路由表。默认情况下您可以直接使用默认路由表来管理您的路由策略。当您的路由策略较多时，您可以调用创建路由表接口创建更多路由表管理您的路由策略。
* 创建路由表同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
     * @param {CreateRouteTableRequest} req
     * @param {function(string, CreateRouteTableResponse):void} cb
     * @public
     */
    CreateRouteTable(req, cb) {
        let resp = new CreateRouteTableResponse();
        this.request("CreateRouteTable", req, resp, cb);
    }

    /**
     * 本接口（AssignIpv6CidrBlock）用于分配IPv6网段。
* 使用本接口前，您需要已有VPC实例，如果没有可通过接口<a href="https://cloud.tencent.com/document/api/215/15774" title="CreateVpc" target="_blank">CreateVpc</a>创建。
* 每个VPC只能申请一个IPv6网段
     * @param {AssignIpv6CidrBlockRequest} req
     * @param {function(string, AssignIpv6CidrBlockResponse):void} cb
     * @public
     */
    AssignIpv6CidrBlock(req, cb) {
        let resp = new AssignIpv6CidrBlockResponse();
        this.request("AssignIpv6CidrBlock", req, resp, cb);
    }

    /**
     * 本接口（DeleteNetworkAcl）用于删除网络ACL。
     * @param {DeleteNetworkAclRequest} req
     * @param {function(string, DeleteNetworkAclResponse):void} cb
     * @public
     */
    DeleteNetworkAcl(req, cb) {
        let resp = new DeleteNetworkAclResponse();
        this.request("DeleteNetworkAcl", req, resp, cb);
    }

    /**
     * 本接口（DescribeNatGatewayDestinationIpPortTranslationNatRules）用于查询NAT网关端口转发规则对象数组。
     * @param {DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest} req
     * @param {function(string, DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse):void} cb
     * @public
     */
    DescribeNatGatewayDestinationIpPortTranslationNatRules(req, cb) {
        let resp = new DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse();
        this.request("DescribeNatGatewayDestinationIpPortTranslationNatRules", req, resp, cb);
    }

    /**
     * 本接口（ModifyFlowLogAttribute）用于修改流日志属性
     * @param {ModifyFlowLogAttributeRequest} req
     * @param {function(string, ModifyFlowLogAttributeResponse):void} cb
     * @public
     */
    ModifyFlowLogAttribute(req, cb) {
        let resp = new ModifyFlowLogAttributeResponse();
        this.request("ModifyFlowLogAttribute", req, resp, cb);
    }

    /**
     * 本接口（DisassociateNetworkInterfaceSecurityGroups）用于弹性网卡解绑安全组。支持弹性网卡完全解绑安全组。
     * @param {DisassociateNetworkInterfaceSecurityGroupsRequest} req
     * @param {function(string, DisassociateNetworkInterfaceSecurityGroupsResponse):void} cb
     * @public
     */
    DisassociateNetworkInterfaceSecurityGroups(req, cb) {
        let resp = new DisassociateNetworkInterfaceSecurityGroupsResponse();
        this.request("DisassociateNetworkInterfaceSecurityGroups", req, resp, cb);
    }

    /**
     * 该接口用于调整具有带宽属性弹性公网IP的网络计费模式
* 支持BANDWIDTH_PREPAID_BY_MONTH和TRAFFIC_POSTPAID_BY_HOUR两种网络计费模式之间的切换。
* 每个弹性公网IP支持调整两次，次数超出则无法调整。
     * @param {ModifyAddressInternetChargeTypeRequest} req
     * @param {function(string, ModifyAddressInternetChargeTypeResponse):void} cb
     * @public
     */
    ModifyAddressInternetChargeType(req, cb) {
        let resp = new ModifyAddressInternetChargeTypeResponse();
        this.request("ModifyAddressInternetChargeType", req, resp, cb);
    }

    /**
     * 本接口（DescribeCcnAttachedInstances）用于查询云联网实例下已关联的网络实例。
     * @param {DescribeCcnAttachedInstancesRequest} req
     * @param {function(string, DescribeCcnAttachedInstancesResponse):void} cb
     * @public
     */
    DescribeCcnAttachedInstances(req, cb) {
        let resp = new DescribeCcnAttachedInstancesResponse();
        this.request("DescribeCcnAttachedInstances", req, resp, cb);
    }

    /**
     * 本接口（ResetRoutes）用于对某个路由表名称和所有路由策略（Route）进行重新设置。<br />
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
     * 本接口（DescribeNetworkInterfaceLimit）根据CVM实例ID或弹性网卡ID查询弹性网卡配额，返回该CVM实例或弹性网卡能绑定的弹性网卡配额，以及弹性网卡可以分配的IP配额
     * @param {DescribeNetworkInterfaceLimitRequest} req
     * @param {function(string, DescribeNetworkInterfaceLimitResponse):void} cb
     * @public
     */
    DescribeNetworkInterfaceLimit(req, cb) {
        let resp = new DescribeNetworkInterfaceLimitResponse();
        this.request("DescribeNetworkInterfaceLimit", req, resp, cb);
    }

    /**
     * 本接口（DescribeNetDetects）用于查询网络探测列表。
     * @param {DescribeNetDetectsRequest} req
     * @param {function(string, DescribeNetDetectsResponse):void} cb
     * @public
     */
    DescribeNetDetects(req, cb) {
        let resp = new DescribeNetDetectsResponse();
        this.request("DescribeNetDetects", req, resp, cb);
    }

    /**
     * 本接口（ModifyCcnRegionBandwidthLimitsType）用于修改后付费云联网实例修改带宽限速策略。
     * @param {ModifyCcnRegionBandwidthLimitsTypeRequest} req
     * @param {function(string, ModifyCcnRegionBandwidthLimitsTypeResponse):void} cb
     * @public
     */
    ModifyCcnRegionBandwidthLimitsType(req, cb) {
        let resp = new ModifyCcnRegionBandwidthLimitsTypeResponse();
        this.request("ModifyCcnRegionBandwidthLimitsType", req, resp, cb);
    }

    /**
     * 本接口（DescribeGatewayFlowMonitorDetail）用于查询网关流量监控明细。
* 只支持单个网关实例查询。即入参 `VpnId` `DirectConnectGatewayId` `PeeringConnectionId` `NatId` 最多只支持传一个，且必须传一个。
* 如果网关有流量，但调用本接口没有返回数据，请在控制台对应网关详情页确认是否开启网关流量监控。
     * @param {DescribeGatewayFlowMonitorDetailRequest} req
     * @param {function(string, DescribeGatewayFlowMonitorDetailResponse):void} cb
     * @public
     */
    DescribeGatewayFlowMonitorDetail(req, cb) {
        let resp = new DescribeGatewayFlowMonitorDetailResponse();
        this.request("DescribeGatewayFlowMonitorDetail", req, resp, cb);
    }

    /**
     * 本接口（EnableGatewayFlowMonitor）用于开启网关流量监控。
     * @param {EnableGatewayFlowMonitorRequest} req
     * @param {function(string, EnableGatewayFlowMonitorResponse):void} cb
     * @public
     */
    EnableGatewayFlowMonitor(req, cb) {
        let resp = new EnableGatewayFlowMonitorResponse();
        this.request("EnableGatewayFlowMonitor", req, resp, cb);
    }

    /**
     * 本接口（UnassignIpv6Addresses）用于释放弹性网卡`IPv6`地址。<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`QueryTask`接口。
     * @param {UnassignIpv6AddressesRequest} req
     * @param {function(string, UnassignIpv6AddressesResponse):void} cb
     * @public
     */
    UnassignIpv6Addresses(req, cb) {
        let resp = new UnassignIpv6AddressesResponse();
        this.request("UnassignIpv6Addresses", req, resp, cb);
    }

    /**
     * 本接口（DescribeNetworkAcls）用于查询网络ACL列表。
     * @param {DescribeNetworkAclsRequest} req
     * @param {function(string, DescribeNetworkAclsResponse):void} cb
     * @public
     */
    DescribeNetworkAcls(req, cb) {
        let resp = new DescribeNetworkAclsResponse();
        this.request("DescribeNetworkAcls", req, resp, cb);
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
     * 本接口（ModifyAddressTemplateGroupAttribute）用于修改IP地址模板集合
     * @param {ModifyAddressTemplateGroupAttributeRequest} req
     * @param {function(string, ModifyAddressTemplateGroupAttributeResponse):void} cb
     * @public
     */
    ModifyAddressTemplateGroupAttribute(req, cb) {
        let resp = new ModifyAddressTemplateGroupAttributeResponse();
        this.request("ModifyAddressTemplateGroupAttribute", req, resp, cb);
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
     * 本接口（DetachCcnInstances）用于从云联网实例中解关联指定的网络实例。<br />
解关联网络实例后，相应的路由策略会一并删除。
     * @param {DetachCcnInstancesRequest} req
     * @param {function(string, DetachCcnInstancesResponse):void} cb
     * @public
     */
    DetachCcnInstances(req, cb) {
        let resp = new DetachCcnInstancesResponse();
        this.request("DetachCcnInstances", req, resp, cb);
    }

    /**
     * 本接口(AssociateNatGatewayAddress)用于NAT网关绑定弹性IP（EIP）。
     * @param {AssociateNatGatewayAddressRequest} req
     * @param {function(string, AssociateNatGatewayAddressResponse):void} cb
     * @public
     */
    AssociateNatGatewayAddress(req, cb) {
        let resp = new AssociateNatGatewayAddressResponse();
        this.request("AssociateNatGatewayAddress", req, resp, cb);
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
     * 本接口（CreateDirectConnectGatewayCcnRoutes）用于创建专线网关的云联网路由（IDC网段）
     * @param {CreateDirectConnectGatewayCcnRoutesRequest} req
     * @param {function(string, CreateDirectConnectGatewayCcnRoutesResponse):void} cb
     * @public
     */
    CreateDirectConnectGatewayCcnRoutes(req, cb) {
        let resp = new CreateDirectConnectGatewayCcnRoutesResponse();
        this.request("CreateDirectConnectGatewayCcnRoutes", req, resp, cb);
    }

    /**
     * 接口用于删除带宽包资源，包括[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)和[负载均衡](https://cloud.tencent.com/document/product/214/517)等
     * @param {RemoveBandwidthPackageResourcesRequest} req
     * @param {function(string, RemoveBandwidthPackageResourcesResponse):void} cb
     * @public
     */
    RemoveBandwidthPackageResources(req, cb) {
        let resp = new RemoveBandwidthPackageResourcesResponse();
        this.request("RemoveBandwidthPackageResources", req, resp, cb);
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
     * 本接口（AssignPrivateIpAddresses）用于弹性网卡申请内网 IP。
* 一个弹性网卡支持绑定的IP地址是有限制的，更多资源限制信息详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
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
     * 本接口（CreateAndAttachNetworkInterface）用于创建弹性网卡并绑定云主机。
* 创建弹性网卡时可以指定内网IP，并且可以指定一个主IP，指定的内网IP必须在弹性网卡所在子网内，而且不能被占用。
* 创建弹性网卡时可以指定需要申请的内网IP数量，系统会随机生成内网IP地址。
* 一个弹性网卡支持绑定的IP地址是有限制的，更多资源限制信息详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
* 创建弹性网卡同时可以绑定已有安全组。
* 创建弹性网卡同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
     * @param {CreateAndAttachNetworkInterfaceRequest} req
     * @param {function(string, CreateAndAttachNetworkInterfaceResponse):void} cb
     * @public
     */
    CreateAndAttachNetworkInterface(req, cb) {
        let resp = new CreateAndAttachNetworkInterfaceResponse();
        this.request("CreateAndAttachNetworkInterface", req, resp, cb);
    }

    /**
     * 本接口（DescribeNatGateways）用于查询 NAT 网关。
     * @param {DescribeNatGatewaysRequest} req
     * @param {function(string, DescribeNatGatewaysResponse):void} cb
     * @public
     */
    DescribeNatGateways(req, cb) {
        let resp = new DescribeNatGatewaysResponse();
        this.request("DescribeNatGateways", req, resp, cb);
    }

    /**
     * 本接口(CreateSubnets)用于批量创建子网。
* 创建子网前必须创建好 VPC。
* 子网创建成功后，子网网段不能修改。子网网段必须在VPC网段内，可以和VPC网段相同（VPC有且只有一个子网时），建议子网网段在VPC网段内，预留网段给其他子网使用。
* 您可以创建的最小网段子网掩码为28（有16个IP地址），最大网段子网掩码为16（65,536个IP地址）。
* 同一个VPC内，多个子网的网段不能重叠。
* 子网创建后会自动关联到默认路由表。
* 创建子网同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
     * @param {CreateSubnetsRequest} req
     * @param {function(string, CreateSubnetsResponse):void} cb
     * @public
     */
    CreateSubnets(req, cb) {
        let resp = new CreateSubnetsResponse();
        this.request("CreateSubnets", req, resp, cb);
    }

    /**
     * 本接口（SetCcnRegionBandwidthLimits）用于设置云联网（CCN）各地域出带宽上限，或者地域间带宽上限。
     * @param {SetCcnRegionBandwidthLimitsRequest} req
     * @param {function(string, SetCcnRegionBandwidthLimitsResponse):void} cb
     * @public
     */
    SetCcnRegionBandwidthLimits(req, cb) {
        let resp = new SetCcnRegionBandwidthLimitsResponse();
        this.request("SetCcnRegionBandwidthLimits", req, resp, cb);
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
     * 本接口（DescribeTemplateLimits）用于查询参数模板配额列表。
     * @param {DescribeTemplateLimitsRequest} req
     * @param {function(string, DescribeTemplateLimitsResponse):void} cb
     * @public
     */
    DescribeTemplateLimits(req, cb) {
        let resp = new DescribeTemplateLimitsResponse();
        this.request("DescribeTemplateLimits", req, resp, cb);
    }

    /**
     * 本接口(CheckNetDetectState)用于验证网络探测。
     * @param {CheckNetDetectStateRequest} req
     * @param {function(string, CheckNetDetectStateResponse):void} cb
     * @public
     */
    CheckNetDetectState(req, cb) {
        let resp = new CheckNetDetectStateResponse();
        this.request("CheckNetDetectState", req, resp, cb);
    }

    /**
     * 本接口（DescribeDhcpIps）用于查询DhcpIp列表
     * @param {DescribeDhcpIpsRequest} req
     * @param {function(string, DescribeDhcpIpsResponse):void} cb
     * @public
     */
    DescribeDhcpIps(req, cb) {
        let resp = new DescribeDhcpIpsResponse();
        this.request("DescribeDhcpIps", req, resp, cb);
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
     * 本接口（DeleteDirectConnectGatewayCcnRoutes）用于删除专线网关的云联网路由（IDC网段）
     * @param {DeleteDirectConnectGatewayCcnRoutesRequest} req
     * @param {function(string, DeleteDirectConnectGatewayCcnRoutesResponse):void} cb
     * @public
     */
    DeleteDirectConnectGatewayCcnRoutes(req, cb) {
        let resp = new DeleteDirectConnectGatewayCcnRoutesResponse();
        this.request("DeleteDirectConnectGatewayCcnRoutes", req, resp, cb);
    }

    /**
     * 本接口（RejectAttachCcnInstances）用于跨账号关联实例时，云联网所有者拒绝关联操作。

     * @param {RejectAttachCcnInstancesRequest} req
     * @param {function(string, RejectAttachCcnInstancesResponse):void} cb
     * @public
     */
    RejectAttachCcnInstances(req, cb) {
        let resp = new RejectAttachCcnInstancesResponse();
        this.request("RejectAttachCcnInstances", req, resp, cb);
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
     * 本接口（ModifyAddressesBandwidth）用于调整[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)(简称EIP)带宽，包括后付费EIP, 预付费EIP和带宽包EIP
     * @param {ModifyAddressesBandwidthRequest} req
     * @param {function(string, ModifyAddressesBandwidthResponse):void} cb
     * @public
     */
    ModifyAddressesBandwidth(req, cb) {
        let resp = new ModifyAddressesBandwidthResponse();
        this.request("ModifyAddressesBandwidth", req, resp, cb);
    }

    /**
     * 本接口(CreateNatGatewayDestinationIpPortTranslationNatRule)用于创建NAT网关端口转发规则。
     * @param {CreateNatGatewayDestinationIpPortTranslationNatRuleRequest} req
     * @param {function(string, CreateNatGatewayDestinationIpPortTranslationNatRuleResponse):void} cb
     * @public
     */
    CreateNatGatewayDestinationIpPortTranslationNatRule(req, cb) {
        let resp = new CreateNatGatewayDestinationIpPortTranslationNatRuleResponse();
        this.request("CreateNatGatewayDestinationIpPortTranslationNatRule", req, resp, cb);
    }

    /**
     * 本接口(CreateSubnet)用于创建子网。
* 创建子网前必须创建好 VPC。
* 子网创建成功后，子网网段不能修改。子网网段必须在VPC网段内，可以和VPC网段相同（VPC有且只有一个子网时），建议子网网段在VPC网段内，预留网段给其他子网使用。
* 您可以创建的最小网段子网掩码为28（有16个IP地址），最大网段子网掩码为16（65,536个IP地址）。
* 同一个VPC内，多个子网的网段不能重叠。
* 子网创建后会自动关联到默认路由表。
* 创建子网同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
     * @param {CreateSubnetRequest} req
     * @param {function(string, CreateSubnetResponse):void} cb
     * @public
     */
    CreateSubnet(req, cb) {
        let resp = new CreateSubnetResponse();
        this.request("CreateSubnet", req, resp, cb);
    }

    /**
     * 该接口用于给IPv6地址初次分配公网带宽
     * @param {AllocateIp6AddressesBandwidthRequest} req
     * @param {function(string, AllocateIp6AddressesBandwidthResponse):void} cb
     * @public
     */
    AllocateIp6AddressesBandwidth(req, cb) {
        let resp = new AllocateIp6AddressesBandwidthResponse();
        this.request("AllocateIp6AddressesBandwidth", req, resp, cb);
    }

    /**
     * 本接口（DeleteDhcpIp）用于删除DhcpIp
     * @param {DeleteDhcpIpRequest} req
     * @param {function(string, DeleteDhcpIpResponse):void} cb
     * @public
     */
    DeleteDhcpIp(req, cb) {
        let resp = new DeleteDhcpIpResponse();
        this.request("DeleteDhcpIp", req, resp, cb);
    }

    /**
     * 本接口（ModifyAddressTemplateAttribute）用于修改IP地址模板
     * @param {ModifyAddressTemplateAttributeRequest} req
     * @param {function(string, ModifyAddressTemplateAttributeResponse):void} cb
     * @public
     */
    ModifyAddressTemplateAttribute(req, cb) {
        let resp = new ModifyAddressTemplateAttributeResponse();
        this.request("ModifyAddressTemplateAttribute", req, resp, cb);
    }

    /**
     * 本接口（AcceptAttachCcnInstances）用于跨账号关联实例时，云联网所有者接受并同意关联操作。
     * @param {AcceptAttachCcnInstancesRequest} req
     * @param {function(string, AcceptAttachCcnInstancesResponse):void} cb
     * @public
     */
    AcceptAttachCcnInstances(req, cb) {
        let resp = new AcceptAttachCcnInstancesResponse();
        this.request("AcceptAttachCcnInstances", req, resp, cb);
    }

    /**
     * 本接口（DeleteServiceTemplateGroup）用于删除协议端口模板集合
     * @param {DeleteServiceTemplateGroupRequest} req
     * @param {function(string, DeleteServiceTemplateGroupResponse):void} cb
     * @public
     */
    DeleteServiceTemplateGroup(req, cb) {
        let resp = new DeleteServiceTemplateGroupResponse();
        this.request("DeleteServiceTemplateGroup", req, resp, cb);
    }

    /**
     * 本接口（DescribeGatewayFlowQos）用于查询网关来访IP流控带宽。
     * @param {DescribeGatewayFlowQosRequest} req
     * @param {function(string, DescribeGatewayFlowQosResponse):void} cb
     * @public
     */
    DescribeGatewayFlowQos(req, cb) {
        let resp = new DescribeGatewayFlowQosResponse();
        this.request("DescribeGatewayFlowQos", req, resp, cb);
    }

    /**
     * 1. 该接口用于查询账户下的IPV6转换实例及其绑定的转换规则信息
2. 支持过滤查询
     * @param {DescribeIp6TranslatorsRequest} req
     * @param {function(string, DescribeIp6TranslatorsResponse):void} cb
     * @public
     */
    DescribeIp6Translators(req, cb) {
        let resp = new DescribeIp6TranslatorsResponse();
        this.request("DescribeIp6Translators", req, resp, cb);
    }

    /**
     * 本接口（ResetAttachCcnInstances）用于跨账号关联实例申请过期时，重新申请关联操作。
     * @param {ResetAttachCcnInstancesRequest} req
     * @param {function(string, ResetAttachCcnInstancesResponse):void} cb
     * @public
     */
    ResetAttachCcnInstances(req, cb) {
        let resp = new ResetAttachCcnInstancesResponse();
        this.request("ResetAttachCcnInstances", req, resp, cb);
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
     * 本接口(CreateVpc)用于创建私有网络(VPC)。
* 用户可以创建的最小网段子网掩码为28（有16个IP地址），最大网段子网掩码为16（65,536个IP地址）,如果规划VPC网段请参见VPC网段规划说明。
* 同一个地域能创建的VPC资源个数也是有限制的，详见 <a href="https://cloud.tencent.com/doc/product/215/537" title="VPC使用限制">VPC使用限制</a>,如果需要扩充请联系在线客服。
* 创建VPC同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
     * @param {CreateVpcRequest} req
     * @param {function(string, CreateVpcResponse):void} cb
     * @public
     */
    CreateVpc(req, cb) {
        let resp = new CreateVpcResponse();
        this.request("CreateVpc", req, resp, cb);
    }

    /**
     * 该接口用于修改IPV6转换规则，当前仅支持修改转换规则名称，IPV4地址和IPV4端口号
     * @param {ModifyIp6RuleRequest} req
     * @param {function(string, ModifyIp6RuleResponse):void} cb
     * @public
     */
    ModifyIp6Rule(req, cb) {
        let resp = new ModifyIp6RuleResponse();
        this.request("ModifyIp6Rule", req, resp, cb);
    }

    /**
     * 接口用于添加带宽包资源，包括[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)和[负载均衡](https://cloud.tencent.com/document/product/214/517)等
     * @param {AddBandwidthPackageResourcesRequest} req
     * @param {function(string, AddBandwidthPackageResourcesResponse):void} cb
     * @public
     */
    AddBandwidthPackageResources(req, cb) {
        let resp = new AddBandwidthPackageResourcesResponse();
        this.request("AddBandwidthPackageResources", req, resp, cb);
    }

    /**
     * 本接口（AssignIpv6SubnetCidrBlock）用于分配IPv6子网段。
* 给子网分配 `IPv6` 网段，要求子网所属 `VPC` 已获得 `IPv6` 网段。如果尚未分配，请先通过接口 `AssignIpv6CidrBlock` 给子网所属 `VPC` 分配一个 `IPv6` 网段。否则无法分配 `IPv6` 子网段。
* 每个子网只能分配一个IPv6网段。
     * @param {AssignIpv6SubnetCidrBlockRequest} req
     * @param {function(string, AssignIpv6SubnetCidrBlockResponse):void} cb
     * @public
     */
    AssignIpv6SubnetCidrBlock(req, cb) {
        let resp = new AssignIpv6SubnetCidrBlockResponse();
        this.request("AssignIpv6SubnetCidrBlock", req, resp, cb);
    }

    /**
     * 本接口（DescribeVpnGatewayCcnRoutes）用于查询VPN网关云联网路由
     * @param {DescribeVpnGatewayCcnRoutesRequest} req
     * @param {function(string, DescribeVpnGatewayCcnRoutesResponse):void} cb
     * @public
     */
    DescribeVpnGatewayCcnRoutes(req, cb) {
        let resp = new DescribeVpnGatewayCcnRoutesResponse();
        this.request("DescribeVpnGatewayCcnRoutes", req, resp, cb);
    }

    /**
     * 本接口 (AllocateAddresses) 用于申请一个或多个[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
* EIP 是专为动态云计算设计的静态 IP 地址。借助 EIP，您可以快速将 EIP 重新映射到您的另一个实例上，从而屏蔽实例故障。
* 您的 EIP 与腾讯云账户相关联，而不是与某个实例相关联。在您选择显式释放该地址，或欠费超过24小时之前，它会一直与您的腾讯云账户保持关联。
* 一个腾讯云账户在每个地域能申请的 EIP 最大配额有所限制，可参见 [EIP 产品简介](https://cloud.tencent.com/document/product/213/5733)，上述配额可通过 DescribeAddressQuota 接口获取。
     * @param {AllocateAddressesRequest} req
     * @param {function(string, AllocateAddressesResponse):void} cb
     * @public
     */
    AllocateAddresses(req, cb) {
        let resp = new AllocateAddressesResponse();
        this.request("AllocateAddresses", req, resp, cb);
    }

    /**
     * 本接口(CheckAssistantCidr)用于检查辅助CIDR是否与存量路由、对等连接（对端VPC的CIDR）等资源存在冲突。如果存在重叠，则返回重叠的资源。（接口灰度中，如需使用请提工单。）
* 检测辅助CIDR是否与当前VPC的主CIDR和辅助CIDR存在重叠。
* 检测辅助CIDR是否与当前VPC的路由的目的端存在重叠。
* 检测辅助CIDR是否与当前VPC的对等连接，对端VPC下的主CIDR或辅助CIDR存在重叠。
     * @param {CheckAssistantCidrRequest} req
     * @param {function(string, CheckAssistantCidrResponse):void} cb
     * @public
     */
    CheckAssistantCidr(req, cb) {
        let resp = new CheckAssistantCidrResponse();
        this.request("CheckAssistantCidr", req, resp, cb);
    }

    /**
     * 本接口（DescribeVpcIpv6Addresses）用于查询 `VPC` `IPv6` 信息。
只能查询已使用的`IPv6`信息，当查询未使用的IP时，本接口不会报错，但不会出现在返回结果里。
     * @param {DescribeVpcIpv6AddressesRequest} req
     * @param {function(string, DescribeVpcIpv6AddressesResponse):void} cb
     * @public
     */
    DescribeVpcIpv6Addresses(req, cb) {
        let resp = new DescribeVpcIpv6AddressesResponse();
        this.request("DescribeVpcIpv6Addresses", req, resp, cb);
    }

    /**
     * 该接口用于查询IPV6地址信息
     * @param {DescribeIp6AddressesRequest} req
     * @param {function(string, DescribeIp6AddressesResponse):void} cb
     * @public
     */
    DescribeIp6Addresses(req, cb) {
        let resp = new DescribeIp6AddressesResponse();
        this.request("DescribeIp6Addresses", req, resp, cb);
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
     * 本接口（AttachCcnInstances）用于将网络实例加载到云联网实例中，网络实例包括VPC和专线网关。<br />
每个云联网能够关联的网络实例个数是有限的，详请参考产品文档。如果需要扩充请联系在线客服。
     * @param {AttachCcnInstancesRequest} req
     * @param {function(string, AttachCcnInstancesResponse):void} cb
     * @public
     */
    AttachCcnInstances(req, cb) {
        let resp = new AttachCcnInstancesResponse();
        this.request("AttachCcnInstances", req, resp, cb);
    }

    /**
     * 本接口 (AssociateAddress) 用于将[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）绑定到实例或弹性网卡的指定内网 IP 上。
* 将 EIP 绑定到实例（CVM）上，其本质是将 EIP 绑定到实例上主网卡的主内网 IP 上。
* 将 EIP 绑定到主网卡的主内网IP上，绑定过程会把其上绑定的普通公网 IP 自动解绑并释放。
* 将 EIP 绑定到指定网卡的内网 IP上（非主网卡的主内网IP），则必须先解绑该 EIP，才能再绑定新的。
* 将 EIP 绑定到NAT网关，请使用接口[EipBindNatGateway](https://cloud.tencent.com/document/product/215/4093)
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
     * 本接口（DeleteSubnet）用于用于删除子网(Subnet)。
* 删除子网前，请清理该子网下所有资源，包括云服务器、负载均衡、云数据、noSql、弹性网卡等资源。
     * @param {DeleteSubnetRequest} req
     * @param {function(string, DeleteSubnetResponse):void} cb
     * @public
     */
    DeleteSubnet(req, cb) {
        let resp = new DeleteSubnetResponse();
        this.request("DeleteSubnet", req, resp, cb);
    }

    /**
     * 本接口(AttachClassicLinkVpc)用于创建私有网络和基础网络设备互通。
* 私有网络和基础网络设备必须在同一个地域。
* 私有网络和基础网络的区别详见vpc产品文档-<a href="https://cloud.tencent.com/document/product/215/30720">私有网络与基础网络</a>。
     * @param {AttachClassicLinkVpcRequest} req
     * @param {function(string, AttachClassicLinkVpcResponse):void} cb
     * @public
     */
    AttachClassicLinkVpc(req, cb) {
        let resp = new AttachClassicLinkVpcResponse();
        this.request("AttachClassicLinkVpc", req, resp, cb);
    }

    /**
     * 本接口（DisassociateNatGatewayAddress）用于NAT网关解绑弹性IP。
     * @param {DisassociateNatGatewayAddressRequest} req
     * @param {function(string, DisassociateNatGatewayAddressResponse):void} cb
     * @public
     */
    DisassociateNatGatewayAddress(req, cb) {
        let resp = new DisassociateNatGatewayAddressResponse();
        this.request("DisassociateNatGatewayAddress", req, resp, cb);
    }

    /**
     * 本接口（DescribeFlowLogs）用于查询获取流日志集合
     * @param {DescribeFlowLogsRequest} req
     * @param {function(string, DescribeFlowLogsResponse):void} cb
     * @public
     */
    DescribeFlowLogs(req, cb) {
        let resp = new DescribeFlowLogsResponse();
        this.request("DescribeFlowLogs", req, resp, cb);
    }

    /**
     * 本接口（DeleteDirectConnectGateway）用于删除专线网关。
<li>如果是 NAT 网关，删除专线网关后，NAT 规则以及 ACL 策略都被清理了。</li>
<li>删除专线网关后，系统会删除路由表中跟该专线网关相关的路由策略。</li>
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`QueryTask`接口
     * @param {DeleteDirectConnectGatewayRequest} req
     * @param {function(string, DeleteDirectConnectGatewayResponse):void} cb
     * @public
     */
    DeleteDirectConnectGateway(req, cb) {
        let resp = new DeleteDirectConnectGatewayResponse();
        this.request("DeleteDirectConnectGateway", req, resp, cb);
    }

    /**
     * 本接口（DescribeDirectConnectGatewayCcnRoutes）用于查询专线网关的云联网路由（IDC网段）
     * @param {DescribeDirectConnectGatewayCcnRoutesRequest} req
     * @param {function(string, DescribeDirectConnectGatewayCcnRoutesResponse):void} cb
     * @public
     */
    DescribeDirectConnectGatewayCcnRoutes(req, cb) {
        let resp = new DescribeDirectConnectGatewayCcnRoutesResponse();
        this.request("DescribeDirectConnectGatewayCcnRoutes", req, resp, cb);
    }

    /**
     * 本接口（CreateNetworkInterface）用于创建弹性网卡。
* 创建弹性网卡时可以指定内网IP，并且可以指定一个主IP，指定的内网IP必须在弹性网卡所在子网内，而且不能被占用。
* 创建弹性网卡时可以指定需要申请的内网IP数量，系统会随机生成内网IP地址。
* 一个弹性网卡支持绑定的IP地址是有限制的，更多资源限制信息详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
* 创建弹性网卡同时可以绑定已有安全组。
* 创建弹性网卡同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
     * @param {CreateNetworkInterfaceRequest} req
     * @param {function(string, CreateNetworkInterfaceResponse):void} cb
     * @public
     */
    CreateNetworkInterface(req, cb) {
        let resp = new CreateNetworkInterfaceResponse();
        this.request("CreateNetworkInterface", req, resp, cb);
    }

    /**
     * 接口支持删除共享带宽包，包括[设备带宽包](https://cloud.tencent.com/document/product/684/15246#.E8.AE.BE.E5.A4.87.E5.B8.A6.E5.AE.BD.E5.8C.85)和[IP带宽包](https://cloud.tencent.com/document/product/684/15246#ip-.E5.B8.A6.E5.AE.BD.E5.8C.85)
     * @param {DeleteBandwidthPackageRequest} req
     * @param {function(string, DeleteBandwidthPackageResponse):void} cb
     * @public
     */
    DeleteBandwidthPackage(req, cb) {
        let resp = new DeleteBandwidthPackageResponse();
        this.request("DeleteBandwidthPackage", req, resp, cb);
    }

    /**
     * 本接口（ModifySecurityGroupPolicies）用于重置安全组出站和入站规则（SecurityGroupPolicy）。

<ul>
<li>接口是先删除当前所有的出入站规则，然后再添加 Egress 和 Ingress 规则，不支持自定义索引 PolicyIndex。</li>
<li>在 SecurityGroupPolicySet 参数中：<ul>
	<li> 如果指定 SecurityGroupPolicySet.Version 为0, 表示清空所有规则，并忽略 Egress 和 Ingress。</li>
	<li> 如果指定 SecurityGroupPolicySet.Version 不为0, 在添加出站和入站规则（Egress 和 Ingress）时：<ul>
		<li>Protocol 字段支持输入 TCP, UDP, ICMP, ICMPV6, GRE, ALL。</li>
		<li>CidrBlock 字段允许输入符合 cidr 格式标准的任意字符串。(展开)在基础网络中，如果 CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
		<li>Ipv6CidrBlock 字段允许输入符合 IPv6 cidr 格式标准的任意字符串。(展开)在基础网络中，如果Ipv6CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IPv6，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
		<li>SecurityGroupId 字段允许输入与待修改的安全组位于相同项目中的安全组 ID，包括这个安全组 ID 本身，代表安全组下所有云服务器的内网 IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个ID所关联的云服务器变化而变化，不需要重新修改。</li>
		<li>Port 字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当 Protocol 字段是 TCP 或 UDP 时，Port 字段才被接受。</li>
		<li>Action 字段只允许输入 ACCEPT 或 DROP。</li>
		<li>CidrBlock, Ipv6CidrBlock, SecurityGroupId, AddressTemplate 四者是排他关系，不允许同时输入，Protocol + Port 和 ServiceTemplate 二者是排他关系，不允许同时输入。</li>
</ul></li></ul></li>
</ul>
     * @param {ModifySecurityGroupPoliciesRequest} req
     * @param {function(string, ModifySecurityGroupPoliciesResponse):void} cb
     * @public
     */
    ModifySecurityGroupPolicies(req, cb) {
        let resp = new ModifySecurityGroupPoliciesResponse();
        this.request("ModifySecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 本接口(DescribeNetDetectStates)用于查询网络探测验证结果列表。
     * @param {DescribeNetDetectStatesRequest} req
     * @param {function(string, DescribeNetDetectStatesResponse):void} cb
     * @public
     */
    DescribeNetDetectStates(req, cb) {
        let resp = new DescribeNetDetectStatesResponse();
        this.request("DescribeNetDetectStates", req, resp, cb);
    }

    /**
     * 本接口（DescribeCcns）用于查询云联网（CCN）列表。
     * @param {DescribeCcnsRequest} req
     * @param {function(string, DescribeCcnsResponse):void} cb
     * @public
     */
    DescribeCcns(req, cb) {
        let resp = new DescribeCcnsResponse();
        this.request("DescribeCcns", req, resp, cb);
    }

    /**
     * 1. 该接口用于释放IPV6转换实例，支持批量。
2.  如果IPV6转换实例建立有转换规则，会一并删除。
     * @param {DeleteIp6TranslatorsRequest} req
     * @param {function(string, DeleteIp6TranslatorsResponse):void} cb
     * @public
     */
    DeleteIp6Translators(req, cb) {
        let resp = new DeleteIp6TranslatorsResponse();
        this.request("DeleteIp6Translators", req, resp, cb);
    }

    /**
     * 本接口（DeleteCcn）用于删除云联网。
* 删除后，云联网关联的所有实例间路由将被删除，网络将会中断，请务必确认
* 删除云联网是不可逆的操作，请谨慎处理。

     * @param {DeleteCcnRequest} req
     * @param {function(string, DeleteCcnResponse):void} cb
     * @public
     */
    DeleteCcn(req, cb) {
        let resp = new DeleteCcnResponse();
        this.request("DeleteCcn", req, resp, cb);
    }

    /**
     * 本接口（ModifyNetworkAclEntries）用于修改（包括添加和删除）网络ACL的入站规则和出站规则。在NetworkAclEntrySet参数中：
* 若同时传入入站规则和出站规则，则重置原有的入站规则和出站规则，并分别导入传入的规则。
* 若仅传入入站规则，则仅重置原有的入站规则，并导入传入的规则，不影响原有的出站规则（若仅传入出站规则，处理方式类似入站方向）。
     * @param {ModifyNetworkAclEntriesRequest} req
     * @param {function(string, ModifyNetworkAclEntriesResponse):void} cb
     * @public
     */
    ModifyNetworkAclEntries(req, cb) {
        let resp = new ModifyNetworkAclEntriesResponse();
        this.request("ModifyNetworkAclEntries", req, resp, cb);
    }

    /**
     * 本接口（HaVipDisassociateAddressIp）用于将高可用虚拟IP（HAVIP）已绑定的弹性公网IP（EIP）解除绑定<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`QueryTask`接口
     * @param {HaVipDisassociateAddressIpRequest} req
     * @param {function(string, HaVipDisassociateAddressIpResponse):void} cb
     * @public
     */
    HaVipDisassociateAddressIp(req, cb) {
        let resp = new HaVipDisassociateAddressIpResponse();
        this.request("HaVipDisassociateAddressIp", req, resp, cb);
    }

    /**
     * 本接口（ModifyVpnGatewayCcnRoutes）用于修改VPN网关云联网路由
     * @param {ModifyVpnGatewayCcnRoutesRequest} req
     * @param {function(string, ModifyVpnGatewayCcnRoutesResponse):void} cb
     * @public
     */
    ModifyVpnGatewayCcnRoutes(req, cb) {
        let resp = new ModifyVpnGatewayCcnRoutesResponse();
        this.request("ModifyVpnGatewayCcnRoutes", req, resp, cb);
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
     * 本接口(DeleteAssistantCidr)用于删除辅助CIDR。（接口灰度中，如需使用请提工单。）
     * @param {DeleteAssistantCidrRequest} req
     * @param {function(string, DeleteAssistantCidrResponse):void} cb
     * @public
     */
    DeleteAssistantCidr(req, cb) {
        let resp = new DeleteAssistantCidrResponse();
        this.request("DeleteAssistantCidr", req, resp, cb);
    }

    /**
     * 本接口（ModifyDhcpIpAttribute）用于修改DhcpIp属性
     * @param {ModifyDhcpIpAttributeRequest} req
     * @param {function(string, ModifyDhcpIpAttributeResponse):void} cb
     * @public
     */
    ModifyDhcpIpAttribute(req, cb) {
        let resp = new ModifyDhcpIpAttributeResponse();
        this.request("ModifyDhcpIpAttribute", req, resp, cb);
    }

    /**
     * 本接口（DeleteNetworkInterface）用于删除弹性网卡。
* 弹性网卡上绑定了云服务器时，不能被删除。
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
     * 本接口（DescribeFlowLog）用于查询流日志实例信息
     * @param {DescribeFlowLogRequest} req
     * @param {function(string, DescribeFlowLogResponse):void} cb
     * @public
     */
    DescribeFlowLog(req, cb) {
        let resp = new DescribeFlowLogResponse();
        this.request("DescribeFlowLog", req, resp, cb);
    }

    /**
     * 本接口（ModifyGatewayFlowQos）用于调整网关流控带宽。
     * @param {ModifyGatewayFlowQosRequest} req
     * @param {function(string, ModifyGatewayFlowQosResponse):void} cb
     * @public
     */
    ModifyGatewayFlowQos(req, cb) {
        let resp = new ModifyGatewayFlowQosResponse();
        this.request("ModifyGatewayFlowQos", req, resp, cb);
    }

    /**
     * 本接口（DeleteNatGateway）用于删除NAT网关。
删除 NAT 网关后，系统会自动删除路由表中包含此 NAT 网关的路由项，同时也会解绑弹性公网IP（EIP）。
     * @param {DeleteNatGatewayRequest} req
     * @param {function(string, DeleteNatGatewayResponse):void} cb
     * @public
     */
    DeleteNatGateway(req, cb) {
        let resp = new DeleteNatGatewayResponse();
        this.request("DeleteNatGateway", req, resp, cb);
    }

    /**
     * 本接口（DescribeRouteConflicts）用于查询自定义路由策略与云联网路由策略冲突列表
     * @param {DescribeRouteConflictsRequest} req
     * @param {function(string, DescribeRouteConflictsResponse):void} cb
     * @public
     */
    DescribeRouteConflicts(req, cb) {
        let resp = new DescribeRouteConflictsResponse();
        this.request("DescribeRouteConflicts", req, resp, cb);
    }

    /**
     * 本接口（DisableRoutes）用于禁用已启用的子网路由
     * @param {DisableRoutesRequest} req
     * @param {function(string, DisableRoutesResponse):void} cb
     * @public
     */
    DisableRoutes(req, cb) {
        let resp = new DisableRoutesResponse();
        this.request("DisableRoutes", req, resp, cb);
    }

    /**
     * 本接口（CreateDefaultSecurityGroup）用于创建（如果项目下未存在默认安全组，则创建；已存在则获取。）默认安全组（SecurityGroup）。
* 每个账户下每个地域的每个项目的<a href="https://cloud.tencent.com/document/product/213/12453">安全组数量限制</a>。
* 新建的安全组的入站和出站规则默认都是全部拒绝，在创建后通常您需要再调用CreateSecurityGroupPolicies将安全组的规则设置为需要的规则。
* 创建安全组同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
     * @param {CreateDefaultSecurityGroupRequest} req
     * @param {function(string, CreateDefaultSecurityGroupResponse):void} cb
     * @public
     */
    CreateDefaultSecurityGroup(req, cb) {
        let resp = new CreateDefaultSecurityGroupResponse();
        this.request("CreateDefaultSecurityGroup", req, resp, cb);
    }

    /**
     * 1. 该接口用于在转换实例下添加IPV6转换规则。
2. 支持在同一个转换实例下批量添加转换规则，一个账户在一个地域最多50个。
3. 一个完整的转换规则包括vip6:vport6:protocol:vip:vport，其中vip6:vport6:protocol必须是唯一。
     * @param {AddIp6RulesRequest} req
     * @param {function(string, AddIp6RulesResponse):void} cb
     * @public
     */
    AddIp6Rules(req, cb) {
        let resp = new AddIp6RulesResponse();
        this.request("AddIp6Rules", req, resp, cb);
    }

    /**
     * 本接口（AssociateDhcpIpWithAddressIp）用于DhcpIp绑定弹性公网IP（EIP）。<br />
     * @param {AssociateDhcpIpWithAddressIpRequest} req
     * @param {function(string, AssociateDhcpIpWithAddressIpResponse):void} cb
     * @public
     */
    AssociateDhcpIpWithAddressIp(req, cb) {
        let resp = new AssociateDhcpIpWithAddressIpResponse();
        this.request("AssociateDhcpIpWithAddressIp", req, resp, cb);
    }

    /**
     * 本接口（DeleteServiceTemplate）用于删除协议端口模板
     * @param {DeleteServiceTemplateRequest} req
     * @param {function(string, DeleteServiceTemplateResponse):void} cb
     * @public
     */
    DeleteServiceTemplate(req, cb) {
        let resp = new DeleteServiceTemplateResponse();
        this.request("DeleteServiceTemplate", req, resp, cb);
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
     * 本接口（DeleteAddressTemplateGroup）用于删除IP地址模板集合
     * @param {DeleteAddressTemplateGroupRequest} req
     * @param {function(string, DeleteAddressTemplateGroupResponse):void} cb
     * @public
     */
    DeleteAddressTemplateGroup(req, cb) {
        let resp = new DeleteAddressTemplateGroupResponse();
        this.request("DeleteAddressTemplateGroup", req, resp, cb);
    }

    /**
     * 本接口（DescribeCcnRoutes）用于查询已加入云联网（CCN）的路由
     * @param {DescribeCcnRoutesRequest} req
     * @param {function(string, DescribeCcnRoutesResponse):void} cb
     * @public
     */
    DescribeCcnRoutes(req, cb) {
        let resp = new DescribeCcnRoutesResponse();
        this.request("DescribeCcnRoutes", req, resp, cb);
    }

    /**
     * 本接口(CreateNetDetect)用于创建网络探测。
     * @param {CreateNetDetectRequest} req
     * @param {function(string, CreateNetDetectResponse):void} cb
     * @public
     */
    CreateNetDetect(req, cb) {
        let resp = new CreateNetDetectResponse();
        this.request("CreateNetDetect", req, resp, cb);
    }

    /**
     * 1. 该接口用于创建IPV6转换IPV4实例，支持批量
2. 同一个账户在一个地域最多允许创建10个转换实例
     * @param {CreateIp6TranslatorsRequest} req
     * @param {function(string, CreateIp6TranslatorsResponse):void} cb
     * @public
     */
    CreateIp6Translators(req, cb) {
        let resp = new CreateIp6TranslatorsResponse();
        this.request("CreateIp6Translators", req, resp, cb);
    }

    /**
     * 本接口(CreateAssistantCidr)用于批量创建辅助CIDR。（接口灰度中，如需使用请提工单。）
     * @param {CreateAssistantCidrRequest} req
     * @param {function(string, CreateAssistantCidrResponse):void} cb
     * @public
     */
    CreateAssistantCidr(req, cb) {
        let resp = new CreateAssistantCidrResponse();
        this.request("CreateAssistantCidr", req, resp, cb);
    }

    /**
     * 本接口（CreateDefaultVpc）用于创建默认私有网络(VPC）。

默认VPC适用于快速入门和启动公共实例，您可以像使用任何其他VPC一样使用默认VPC。如果您想创建标准VPC，即指定VPC名称、VPC网段、子网网段、子网可用区，请使用常规创建VPC接口（CreateVpc）

正常情况，本接口并不一定生产默认VPC，而是根据用户账号的网络属性（DescribeAccountAttributes）来决定的
* 支持基础网络、VPC，返回VpcId为0
* 只支持VPC，返回默认VPC信息

您也可以通过 Force 参数，强制返回默认VPC
     * @param {CreateDefaultVpcRequest} req
     * @param {function(string, CreateDefaultVpcResponse):void} cb
     * @public
     */
    CreateDefaultVpc(req, cb) {
        let resp = new CreateDefaultVpcResponse();
        this.request("CreateDefaultVpc", req, resp, cb);
    }

    /**
     * 本接口（AttachNetworkInterface）用于弹性网卡绑定云主机。
* 一个云主机可以绑定多个弹性网卡，但只能绑定一个主网卡。更多限制信息详见<a href="https://cloud.tencent.com/document/product/576/18527">弹性网卡使用限制</a>。
* 一个弹性网卡只能同时绑定一个云主机。
* 只有运行中或者已关机状态的云主机才能绑定弹性网卡，查看云主机状态详见<a href="https://cloud.tencent.com/document/api/213/9452#InstanceStatus">腾讯云主机信息</a>。
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
     * 本接口（ReplaceDirectConnectGatewayCcnRoutes）根据路由ID（RouteId）修改指定的路由（Route），支持批量修改。
     * @param {ReplaceDirectConnectGatewayCcnRoutesRequest} req
     * @param {function(string, ReplaceDirectConnectGatewayCcnRoutesResponse):void} cb
     * @public
     */
    ReplaceDirectConnectGatewayCcnRoutes(req, cb) {
        let resp = new ReplaceDirectConnectGatewayCcnRoutesResponse();
        this.request("ReplaceDirectConnectGatewayCcnRoutes", req, resp, cb);
    }

    /**
     * 本接口（GetCcnRegionBandwidthLimits）用于查询云联网相关地域带宽信息，其中预付费模式的云联网仅支持地域间限速，后付费模式的云联网支持地域间限速和地域出口限速。
     * @param {GetCcnRegionBandwidthLimitsRequest} req
     * @param {function(string, GetCcnRegionBandwidthLimitsResponse):void} cb
     * @public
     */
    GetCcnRegionBandwidthLimits(req, cb) {
        let resp = new GetCcnRegionBandwidthLimitsResponse();
        this.request("GetCcnRegionBandwidthLimits", req, resp, cb);
    }

    /**
     * 本接口(CreateNatGateway)用于创建NAT网关。
     * @param {CreateNatGatewayRequest} req
     * @param {function(string, CreateNatGatewayResponse):void} cb
     * @public
     */
    CreateNatGateway(req, cb) {
        let resp = new CreateNatGatewayResponse();
        this.request("CreateNatGateway", req, resp, cb);
    }

    /**
     * 本接口(DeleteNetDetect)用于删除网络探测实例。
     * @param {DeleteNetDetectRequest} req
     * @param {function(string, DeleteNetDetectResponse):void} cb
     * @public
     */
    DeleteNetDetect(req, cb) {
        let resp = new DeleteNetDetectResponse();
        this.request("DeleteNetDetect", req, resp, cb);
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
     * 本接口（DeleteAddressTemplate）用于删除IP地址模板
     * @param {DeleteAddressTemplateRequest} req
     * @param {function(string, DeleteAddressTemplateResponse):void} cb
     * @public
     */
    DeleteAddressTemplate(req, cb) {
        let resp = new DeleteAddressTemplateResponse();
        this.request("DeleteAddressTemplate", req, resp, cb);
    }

    /**
     * 本接口(ModifyAssistantCidr)用于批量修改辅助CIDR，支持新增和删除。（接口灰度中，如需使用请提工单。）
     * @param {ModifyAssistantCidrRequest} req
     * @param {function(string, ModifyAssistantCidrResponse):void} cb
     * @public
     */
    ModifyAssistantCidr(req, cb) {
        let resp = new ModifyAssistantCidrResponse();
        this.request("ModifyAssistantCidr", req, resp, cb);
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
     * 本接口（CreateServiceTemplate）用于创建协议端口模板
     * @param {CreateServiceTemplateRequest} req
     * @param {function(string, CreateServiceTemplateResponse):void} cb
     * @public
     */
    CreateServiceTemplate(req, cb) {
        let resp = new CreateServiceTemplateResponse();
        this.request("CreateServiceTemplate", req, resp, cb);
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
     * 本接口（ModifyDirectConnectGatewayAttribute）用于修改专线网关属性

     * @param {ModifyDirectConnectGatewayAttributeRequest} req
     * @param {function(string, ModifyDirectConnectGatewayAttributeResponse):void} cb
     * @public
     */
    ModifyDirectConnectGatewayAttribute(req, cb) {
        let resp = new ModifyDirectConnectGatewayAttributeResponse();
        this.request("ModifyDirectConnectGatewayAttribute", req, resp, cb);
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
     * 本接口（DisableCcnRoutes）用于禁用已经启用的云联网（CCN）路由
     * @param {DisableCcnRoutesRequest} req
     * @param {function(string, DisableCcnRoutesResponse):void} cb
     * @public
     */
    DisableCcnRoutes(req, cb) {
        let resp = new DisableCcnRoutesResponse();
        this.request("DisableCcnRoutes", req, resp, cb);
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
     * 本接口（CreateAddressTemplateGroup）用于创建IP地址模版集合
     * @param {CreateAddressTemplateGroupRequest} req
     * @param {function(string, CreateAddressTemplateGroupResponse):void} cb
     * @public
     */
    CreateAddressTemplateGroup(req, cb) {
        let resp = new CreateAddressTemplateGroupResponse();
        this.request("CreateAddressTemplateGroup", req, resp, cb);
    }

    /**
     * 本接口（CreateAddressTemplate）用于创建IP地址模版
     * @param {CreateAddressTemplateRequest} req
     * @param {function(string, CreateAddressTemplateResponse):void} cb
     * @public
     */
    CreateAddressTemplate(req, cb) {
        let resp = new CreateAddressTemplateResponse();
        this.request("CreateAddressTemplate", req, resp, cb);
    }

    /**
     * 本接口（CreateSecurityGroup）用于创建新的安全组（SecurityGroup）。
* 每个账户下每个地域的每个项目的<a href="https://cloud.tencent.com/document/product/213/12453">安全组数量限制</a>。
* 新建的安全组的入站和出站规则默认都是全部拒绝，在创建后通常您需要再调用CreateSecurityGroupPolicies将安全组的规则设置为需要的规则。
* 创建安全组同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
     * @param {CreateSecurityGroupRequest} req
     * @param {function(string, CreateSecurityGroupResponse):void} cb
     * @public
     */
    CreateSecurityGroup(req, cb) {
        let resp = new CreateSecurityGroupResponse();
        this.request("CreateSecurityGroup", req, resp, cb);
    }

    /**
     * 本接口（AssociateNetworkAclSubnets）用于网络ACL关联vpc下的子网。
     * @param {AssociateNetworkAclSubnetsRequest} req
     * @param {function(string, AssociateNetworkAclSubnetsResponse):void} cb
     * @public
     */
    AssociateNetworkAclSubnets(req, cb) {
        let resp = new AssociateNetworkAclSubnetsResponse();
        this.request("AssociateNetworkAclSubnets", req, resp, cb);
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
     *  本接口（DescribeVpcInstances）用于查询VPC下的云主机实例列表。
     * @param {DescribeVpcInstancesRequest} req
     * @param {function(string, DescribeVpcInstancesResponse):void} cb
     * @public
     */
    DescribeVpcInstances(req, cb) {
        let resp = new DescribeVpcInstancesResponse();
        this.request("DescribeVpcInstances", req, resp, cb);
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
     * 本接口(DescribeSecurityGroupLimits)用于查询用户安全组配额。
     * @param {DescribeSecurityGroupLimitsRequest} req
     * @param {function(string, DescribeSecurityGroupLimitsResponse):void} cb
     * @public
     */
    DescribeSecurityGroupLimits(req, cb) {
        let resp = new DescribeSecurityGroupLimitsResponse();
        this.request("DescribeSecurityGroupLimits", req, resp, cb);
    }

    /**
     * 本接口 (DisassociateAddress) 用于解绑[弹性公网IP](https://cloud.tencent.com/document/product/213/1941)（简称 EIP）。
* 支持CVM实例，弹性网卡上的EIP解绑
* 不支持NAT上的EIP解绑。NAT上的EIP解绑请参考[EipUnBindNatGateway](https://cloud.tencent.com/document/product/215/4092)
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
     * 本接口（DescribeVpcPrivateIpAddresses）用于查询VPC内网IP信息。<br />
只能查询已使用的IP信息，当查询未使用的IP时，本接口不会报错，但不会出现在返回结果里。
     * @param {DescribeVpcPrivateIpAddressesRequest} req
     * @param {function(string, DescribeVpcPrivateIpAddressesResponse):void} cb
     * @public
     */
    DescribeVpcPrivateIpAddresses(req, cb) {
        let resp = new DescribeVpcPrivateIpAddressesResponse();
        this.request("DescribeVpcPrivateIpAddresses", req, resp, cb);
    }

    /**
     * 本接口（ModifyIpv6AddressesAttribute）用于修改弹性网卡内网IPv6地址属性。
     * @param {ModifyIpv6AddressesAttributeRequest} req
     * @param {function(string, ModifyIpv6AddressesAttributeResponse):void} cb
     * @public
     */
    ModifyIpv6AddressesAttribute(req, cb) {
        let resp = new ModifyIpv6AddressesAttributeResponse();
        this.request("ModifyIpv6AddressesAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeDirectConnectGateways）用于查询专线网关。
     * @param {DescribeDirectConnectGatewaysRequest} req
     * @param {function(string, DescribeDirectConnectGatewaysResponse):void} cb
     * @public
     */
    DescribeDirectConnectGateways(req, cb) {
        let resp = new DescribeDirectConnectGatewaysResponse();
        this.request("DescribeDirectConnectGateways", req, resp, cb);
    }

    /**
     * 该接口用于修改IP6转换实例属性，当前仅支持修改实例名称。
     * @param {ModifyIp6TranslatorRequest} req
     * @param {function(string, ModifyIp6TranslatorResponse):void} cb
     * @public
     */
    ModifyIp6Translator(req, cb) {
        let resp = new ModifyIp6TranslatorResponse();
        this.request("ModifyIp6Translator", req, resp, cb);
    }

    /**
     * 本接口（DescribeAccountAttributes）用于查询用户账号私有属性。
     * @param {DescribeAccountAttributesRequest} req
     * @param {function(string, DescribeAccountAttributesResponse):void} cb
     * @public
     */
    DescribeAccountAttributes(req, cb) {
        let resp = new DescribeAccountAttributesResponse();
        this.request("DescribeAccountAttributes", req, resp, cb);
    }

    /**
     * 本接口（AssignIpv6Addresses）用于弹性网卡申请`IPv6`地址。<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`QueryTask`接口。
* 一个弹性网卡支持绑定的IP地址是有限制的，更多资源限制信息详见<a href="/document/product/576/18527">弹性网卡使用限制</a>。
* 可以指定`IPv6`地址申请，地址类型不能为主`IP`，`IPv6`地址暂时只支持作为辅助`IP`。
* 地址必须要在弹性网卡所在子网内，而且不能被占用。
* 在弹性网卡上申请一个到多个辅助`IPv6`地址，接口会在弹性网卡所在子网段内返回指定数量的辅助`IPv6`地址。
     * @param {AssignIpv6AddressesRequest} req
     * @param {function(string, AssignIpv6AddressesResponse):void} cb
     * @public
     */
    AssignIpv6Addresses(req, cb) {
        let resp = new AssignIpv6AddressesResponse();
        this.request("AssignIpv6Addresses", req, resp, cb);
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
     * 本接口（DescribeServiceTemplates）用于查询协议端口模板
     * @param {DescribeServiceTemplatesRequest} req
     * @param {function(string, DescribeServiceTemplatesResponse):void} cb
     * @public
     */
    DescribeServiceTemplates(req, cb) {
        let resp = new DescribeServiceTemplatesResponse();
        this.request("DescribeServiceTemplates", req, resp, cb);
    }

    /**
     * 本接口（UnassignIpv6CidrBlock）用于释放IPv6网段。<br />
网段如果还有IP占用且未回收，则网段无法释放。
     * @param {UnassignIpv6CidrBlockRequest} req
     * @param {function(string, UnassignIpv6CidrBlockResponse):void} cb
     * @public
     */
    UnassignIpv6CidrBlock(req, cb) {
        let resp = new UnassignIpv6CidrBlockResponse();
        this.request("UnassignIpv6CidrBlock", req, resp, cb);
    }

    /**
     * 本接口（ModifyNatGatewayDestinationIpPortTranslationNatRule）用于修改NAT网关端口转发规则。
     * @param {ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest} req
     * @param {function(string, ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse):void} cb
     * @public
     */
    ModifyNatGatewayDestinationIpPortTranslationNatRule(req, cb) {
        let resp = new ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse();
        this.request("ModifyNatGatewayDestinationIpPortTranslationNatRule", req, resp, cb);
    }

    /**
     * 获取私有网络配额，部分私有网络的配额有地域属性。
LimitTypes取值范围：
* appid-max-vpcs （每个开发商每个地域可创建的VPC数）
* vpc-max-subnets（每个VPC可创建的子网数）
* vpc-max-route-tables（每个VPC可创建的路由表数）
* route-table-max-policies（每个路由表可添加的策略数）
* vpc-max-vpn-gateways（每个VPC可创建的VPN网关数）
* appid-max-custom-gateways（每个开发商可创建的对端网关数）
* appid-max-vpn-connections（每个开发商可创建的VPN通道数）
* custom-gateway-max-vpn-connections（每个对端网关可创建的VPN通道数）
* vpn-gateway-max-custom-gateways（每个VPNGW可以创建的通道数）
* vpc-max-network-acls（每个VPC可创建的网络ACL数）
* network-acl-max-inbound-policies（每个网络ACL可添加的入站规则数）
* network-acl-max-outbound-policies（每个网络ACL可添加的出站规则数）
* vpc-max-vpcpeers（每个VPC可创建的对等连接数）
* vpc-max-available-vpcpeers（每个VPC可创建的有效对等连接数）
* vpc-max-basic-network-interconnections（每个VPC可创建的基础网络云主机与VPC互通数）
* direct-connection-max-snats（每个专线网关可创建的SNAT数）
* direct-connection-max-dnats（每个专线网关可创建的DNAT数）
* direct-connection-max-snapts（每个专线网关可创建的SNAPT数）
* direct-connection-max-dnapts（每个专线网关可创建的DNAPT数）
* vpc-max-nat-gateways（每个VPC可创建的NAT网关数）
* nat-gateway-max-eips（每个NAT可以购买的外网IP数量）
* vpc-max-enis（每个VPC可创建弹性网卡数）
* vpc-max-havips（每个VPC可创建HAVIP数）
* eni-max-private-ips（每个ENI可以绑定的内网IP数（ENI未绑定子机））
* nat-gateway-max-dnapts（每个NAT网关可创建的DNAPT数）
* vpc-max-ipv6s（每个VPC可分配的IPv6地址数）
* eni-max-ipv6s（每个ENI可分配的IPv6地址数）
* vpc-max-assistant_cidrs（每个VPC可分配的辅助CIDR数）
     * @param {DescribeVpcLimitsRequest} req
     * @param {function(string, DescribeVpcLimitsResponse):void} cb
     * @public
     */
    DescribeVpcLimits(req, cb) {
        let resp = new DescribeVpcLimitsResponse();
        this.request("DescribeVpcLimits", req, resp, cb);
    }

    /**
     * 本接口（HaVipAssociateAddressIp）用于高可用虚拟IP（HAVIP）绑定弹性公网IP（EIP）<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`QueryTask`接口
     * @param {HaVipAssociateAddressIpRequest} req
     * @param {function(string, HaVipAssociateAddressIpResponse):void} cb
     * @public
     */
    HaVipAssociateAddressIp(req, cb) {
        let resp = new HaVipAssociateAddressIpResponse();
        this.request("HaVipAssociateAddressIp", req, resp, cb);
    }

    /**
     * 1. 该接口用于删除IPV6转换规则
2. 支持批量删除同一个转换实例下的多个转换规则
     * @param {RemoveIp6RulesRequest} req
     * @param {function(string, RemoveIp6RulesResponse):void} cb
     * @public
     */
    RemoveIp6Rules(req, cb) {
        let resp = new RemoveIp6RulesResponse();
        this.request("RemoveIp6Rules", req, resp, cb);
    }

    /**
     * 本接口（CheckDefaultSubnet）用于预判是否可建默认子网。
     * @param {CheckDefaultSubnetRequest} req
     * @param {function(string, CheckDefaultSubnetResponse):void} cb
     * @public
     */
    CheckDefaultSubnet(req, cb) {
        let resp = new CheckDefaultSubnetResponse();
        this.request("CheckDefaultSubnet", req, resp, cb);
    }

    /**
     * 本接口（DescribeHaVips）用于查询高可用虚拟IP（HAVIP）列表。
     * @param {DescribeHaVipsRequest} req
     * @param {function(string, DescribeHaVipsResponse):void} cb
     * @public
     */
    DescribeHaVips(req, cb) {
        let resp = new DescribeHaVipsResponse();
        this.request("DescribeHaVips", req, resp, cb);
    }

    /**
     * 本接口（AssociateNetworkInterfaceSecurityGroups）用于弹性网卡绑定安全组（SecurityGroup）。
     * @param {AssociateNetworkInterfaceSecurityGroupsRequest} req
     * @param {function(string, AssociateNetworkInterfaceSecurityGroupsResponse):void} cb
     * @public
     */
    AssociateNetworkInterfaceSecurityGroups(req, cb) {
        let resp = new AssociateNetworkInterfaceSecurityGroupsResponse();
        this.request("AssociateNetworkInterfaceSecurityGroups", req, resp, cb);
    }

    /**
     * 本接口（DeleteHaVip）用于删除高可用虚拟IP（HAVIP）<br />
本接口是异步完成，如需查询异步任务执行结果，请使用本接口返回的`RequestId`轮询`QueryTask`接口
     * @param {DeleteHaVipRequest} req
     * @param {function(string, DeleteHaVipResponse):void} cb
     * @public
     */
    DeleteHaVip(req, cb) {
        let resp = new DeleteHaVipResponse();
        this.request("DeleteHaVip", req, resp, cb);
    }

    /**
     * 接口用于修改带宽包属性，包括带宽包名字等
     * @param {ModifyBandwidthPackageAttributeRequest} req
     * @param {function(string, ModifyBandwidthPackageAttributeResponse):void} cb
     * @public
     */
    ModifyBandwidthPackageAttribute(req, cb) {
        let resp = new ModifyBandwidthPackageAttributeResponse();
        this.request("ModifyBandwidthPackageAttribute", req, resp, cb);
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
* 删除前请确保 VPC 内已经没有相关资源，例如云服务器、云数据库、NoSQL、VPN网关、专线网关、负载均衡、对等连接、与之互通的基础网络设备等。
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
     * 本接口（CreateCcn）用于创建云联网（CCN）。<br />
* 创建云联网同时可以绑定标签, 应答里的标签列表代表添加成功的标签。
每个账号能创建的云联网实例个数是有限的，详请参考产品文档。如果需要扩充请联系在线客服。
     * @param {CreateCcnRequest} req
     * @param {function(string, CreateCcnResponse):void} cb
     * @public
     */
    CreateCcn(req, cb) {
        let resp = new CreateCcnResponse();
        this.request("CreateCcn", req, resp, cb);
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
     * 本接口（CreateVpnGateway）用于创建VPN网关。
     * @param {CreateVpnGatewayRequest} req
     * @param {function(string, CreateVpnGatewayResponse):void} cb
     * @public
     */
    CreateVpnGateway(req, cb) {
        let resp = new CreateVpnGatewayResponse();
        this.request("CreateVpnGateway", req, resp, cb);
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
     * 本接口（DescribeAssistantCidr）用于查询辅助CIDR列表。（接口灰度中，如需使用请提工单。）
     * @param {DescribeAssistantCidrRequest} req
     * @param {function(string, DescribeAssistantCidrResponse):void} cb
     * @public
     */
    DescribeAssistantCidr(req, cb) {
        let resp = new DescribeAssistantCidrResponse();
        this.request("DescribeAssistantCidr", req, resp, cb);
    }

    /**
     * 本接口（CreateDirectConnectGateway）用于创建专线网关。
     * @param {CreateDirectConnectGatewayRequest} req
     * @param {function(string, CreateDirectConnectGatewayResponse):void} cb
     * @public
     */
    CreateDirectConnectGateway(req, cb) {
        let resp = new CreateDirectConnectGatewayResponse();
        this.request("CreateDirectConnectGateway", req, resp, cb);
    }

    /**
     * 本接口(DescribeClassicLinkInstances)用于查询私有网络和基础网络设备互通列表。
     * @param {DescribeClassicLinkInstancesRequest} req
     * @param {function(string, DescribeClassicLinkInstancesResponse):void} cb
     * @public
     */
    DescribeClassicLinkInstances(req, cb) {
        let resp = new DescribeClassicLinkInstancesResponse();
        this.request("DescribeClassicLinkInstances", req, resp, cb);
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
     * 本接口（EnableRoutes）用于启用已禁用的子网路由。<br />
本接口会校验启用后，是否与已有路由冲突，如果冲突，则无法启用，失败处理。路由冲突时，需要先禁用与之冲突的路由，才能启用该路由。
     * @param {EnableRoutesRequest} req
     * @param {function(string, EnableRoutesResponse):void} cb
     * @public
     */
    EnableRoutes(req, cb) {
        let resp = new EnableRoutesResponse();
        this.request("EnableRoutes", req, resp, cb);
    }

    /**
     * 本接口（DisassociateDhcpIpWithAddressIp）用于将DhcpIp已绑定的弹性公网IP（EIP）解除绑定。<br />
     * @param {DisassociateDhcpIpWithAddressIpRequest} req
     * @param {function(string, DisassociateDhcpIpWithAddressIpResponse):void} cb
     * @public
     */
    DisassociateDhcpIpWithAddressIp(req, cb) {
        let resp = new DisassociateDhcpIpWithAddressIpResponse();
        this.request("DisassociateDhcpIpWithAddressIp", req, resp, cb);
    }

    /**
     * 本接口（CreateHaVip）用于创建高可用虚拟IP（HAVIP）
     * @param {CreateHaVipRequest} req
     * @param {function(string, CreateHaVipResponse):void} cb
     * @public
     */
    CreateHaVip(req, cb) {
        let resp = new CreateHaVipResponse();
        this.request("CreateHaVip", req, resp, cb);
    }

    /**
     * 本接口（ModifyServiceTemplateAttribute）用于修改协议端口模板
     * @param {ModifyServiceTemplateAttributeRequest} req
     * @param {function(string, ModifyServiceTemplateAttributeResponse):void} cb
     * @public
     */
    ModifyServiceTemplateAttribute(req, cb) {
        let resp = new ModifyServiceTemplateAttributeResponse();
        this.request("ModifyServiceTemplateAttribute", req, resp, cb);
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
     * 本接口（DisassociateNetworkAclSubnets）用于网络ACL解关联vpc下的子网。
     * @param {DisassociateNetworkAclSubnetsRequest} req
     * @param {function(string, DisassociateNetworkAclSubnetsResponse):void} cb
     * @public
     */
    DisassociateNetworkAclSubnets(req, cb) {
        let resp = new DisassociateNetworkAclSubnetsResponse();
        this.request("DisassociateNetworkAclSubnets", req, resp, cb);
    }

    /**
     * 本接口（EnableCcnRoutes）用于启用已经加入云联网（CCN）的路由。<br />
本接口会校验启用后，是否与已有路由冲突，如果冲突，则无法启用，失败处理。路由冲突时，需要先禁用与之冲突的路由，才能启用该路由。
     * @param {EnableCcnRoutesRequest} req
     * @param {function(string, EnableCcnRoutesResponse):void} cb
     * @public
     */
    EnableCcnRoutes(req, cb) {
        let resp = new EnableCcnRoutesResponse();
        this.request("EnableCcnRoutes", req, resp, cb);
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
     * 本接口(ModifyNetDetect)用于修改网络探测参数。
     * @param {ModifyNetDetectRequest} req
     * @param {function(string, ModifyNetDetectResponse):void} cb
     * @public
     */
    ModifyNetDetect(req, cb) {
        let resp = new ModifyNetDetectResponse();
        this.request("ModifyNetDetect", req, resp, cb);
    }

    /**
     * 本接口（DisableGatewayFlowMonitor）用于关闭网关流量监控。
     * @param {DisableGatewayFlowMonitorRequest} req
     * @param {function(string, DisableGatewayFlowMonitorResponse):void} cb
     * @public
     */
    DisableGatewayFlowMonitor(req, cb) {
        let resp = new DisableGatewayFlowMonitorResponse();
        this.request("DisableGatewayFlowMonitor", req, resp, cb);
    }

    /**
     * 本接口（DeleteNatGatewayDestinationIpPortTranslationNatRule）用于删除NAT网关端口转发规则。
     * @param {DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest} req
     * @param {function(string, DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse):void} cb
     * @public
     */
    DeleteNatGatewayDestinationIpPortTranslationNatRule(req, cb) {
        let resp = new DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse();
        this.request("DeleteNatGatewayDestinationIpPortTranslationNatRule", req, resp, cb);
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
     * 接口用于查询账户在当前地域的带宽包上限数量以及使用数量
     * @param {DescribeBandwidthPackageQuotaRequest} req
     * @param {function(string, DescribeBandwidthPackageQuotaResponse):void} cb
     * @public
     */
    DescribeBandwidthPackageQuota(req, cb) {
        let resp = new DescribeBandwidthPackageQuotaResponse();
        this.request("DescribeBandwidthPackageQuota", req, resp, cb);
    }

    /**
     * 本接口（ModifyHaVipAttribute）用于修改高可用虚拟IP（HAVIP）属性
     * @param {ModifyHaVipAttributeRequest} req
     * @param {function(string, ModifyHaVipAttributeResponse):void} cb
     * @public
     */
    ModifyHaVipAttribute(req, cb) {
        let resp = new ModifyHaVipAttributeResponse();
        this.request("ModifyHaVipAttribute", req, resp, cb);
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
     * 接口用于查询带宽包详细信息，包括带宽包唯一标识ID，类型，计费模式，名称，资源信息等
     * @param {DescribeBandwidthPackagesRequest} req
     * @param {function(string, DescribeBandwidthPackagesResponse):void} cb
     * @public
     */
    DescribeBandwidthPackages(req, cb) {
        let resp = new DescribeBandwidthPackagesResponse();
        this.request("DescribeBandwidthPackages", req, resp, cb);
    }

    /**
     * 本接口（CreateServiceTemplateGroup）用于创建协议端口模板集合
     * @param {CreateServiceTemplateGroupRequest} req
     * @param {function(string, CreateServiceTemplateGroupResponse):void} cb
     * @public
     */
    CreateServiceTemplateGroup(req, cb) {
        let resp = new CreateServiceTemplateGroupResponse();
        this.request("CreateServiceTemplateGroup", req, resp, cb);
    }

    /**
     * 该接口用于给弹性公网IPv6地址释放带宽。
     * @param {ReleaseIp6AddressesBandwidthRequest} req
     * @param {function(string, ReleaseIp6AddressesBandwidthResponse):void} cb
     * @public
     */
    ReleaseIp6AddressesBandwidth(req, cb) {
        let resp = new ReleaseIp6AddressesBandwidthResponse();
        this.request("ReleaseIp6AddressesBandwidth", req, resp, cb);
    }

    /**
     * 本接口（CreateDhcpIp）用于创建DhcpIp
     * @param {CreateDhcpIpRequest} req
     * @param {function(string, CreateDhcpIpResponse):void} cb
     * @public
     */
    CreateDhcpIp(req, cb) {
        let resp = new CreateDhcpIpResponse();
        this.request("CreateDhcpIp", req, resp, cb);
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
     * 本接口（ModifyCcnAttribute）用于修改云联网（CCN）的相关属性。
     * @param {ModifyCcnAttributeRequest} req
     * @param {function(string, ModifyCcnAttributeResponse):void} cb
     * @public
     */
    ModifyCcnAttribute(req, cb) {
        let resp = new ModifyCcnAttributeResponse();
        this.request("ModifyCcnAttribute", req, resp, cb);
    }

    /**
     * 本接口（DescribeSecurityGroupReferences）用于查询安全组被引用信息。
     * @param {DescribeSecurityGroupReferencesRequest} req
     * @param {function(string, DescribeSecurityGroupReferencesResponse):void} cb
     * @public
     */
    DescribeSecurityGroupReferences(req, cb) {
        let resp = new DescribeSecurityGroupReferencesResponse();
        this.request("DescribeSecurityGroupReferences", req, resp, cb);
    }

    /**
     * 本接口（DescribeSecurityGroupAssociationStatistics）用于查询安全组关联的实例统计。
     * @param {DescribeSecurityGroupAssociationStatisticsRequest} req
     * @param {function(string, DescribeSecurityGroupAssociationStatisticsResponse):void} cb
     * @public
     */
    DescribeSecurityGroupAssociationStatistics(req, cb) {
        let resp = new DescribeSecurityGroupAssociationStatisticsResponse();
        this.request("DescribeSecurityGroupAssociationStatistics", req, resp, cb);
    }

    /**
     * 本接口（UnassignIpv6SubnetCidrBlock）用于释放IPv6子网段。<br />
子网段如果还有IP占用且未回收，则子网段无法释放。
     * @param {UnassignIpv6SubnetCidrBlockRequest} req
     * @param {function(string, UnassignIpv6SubnetCidrBlockResponse):void} cb
     * @public
     */
    UnassignIpv6SubnetCidrBlock(req, cb) {
        let resp = new UnassignIpv6SubnetCidrBlockResponse();
        this.request("UnassignIpv6SubnetCidrBlock", req, resp, cb);
    }

    /**
     * 该接口用于修改IPV6地址访问internet的带宽
     * @param {ModifyIp6AddressesBandwidthRequest} req
     * @param {function(string, ModifyIp6AddressesBandwidthResponse):void} cb
     * @public
     */
    ModifyIp6AddressesBandwidth(req, cb) {
        let resp = new ModifyIp6AddressesBandwidthResponse();
        this.request("ModifyIp6AddressesBandwidth", req, resp, cb);
    }

    /**
     * 本接口（DescribeAddressTemplates）用于查询IP地址模板
     * @param {DescribeAddressTemplatesRequest} req
     * @param {function(string, DescribeAddressTemplatesResponse):void} cb
     * @public
     */
    DescribeAddressTemplates(req, cb) {
        let resp = new DescribeAddressTemplatesResponse();
        this.request("DescribeAddressTemplates", req, resp, cb);
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
     * 本接口（DescribeAddressTemplateGroups）用于查询IP地址模板集合
     * @param {DescribeAddressTemplateGroupsRequest} req
     * @param {function(string, DescribeAddressTemplateGroupsResponse):void} cb
     * @public
     */
    DescribeAddressTemplateGroups(req, cb) {
        let resp = new DescribeAddressTemplateGroupsResponse();
        this.request("DescribeAddressTemplateGroups", req, resp, cb);
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
     * 查询账户在指定地域IPV6转换实例和规则的配额
     * @param {DescribeIp6TranslatorQuotaRequest} req
     * @param {function(string, DescribeIp6TranslatorQuotaResponse):void} cb
     * @public
     */
    DescribeIp6TranslatorQuota(req, cb) {
        let resp = new DescribeIp6TranslatorQuotaResponse();
        this.request("DescribeIp6TranslatorQuota", req, resp, cb);
    }

    /**
     * 本接口（CreateSecurityGroupPolicies）用于创建安全组规则（SecurityGroupPolicy）。

在 SecurityGroupPolicySet 参数中：
<ul>
<li>Version 安全组规则版本号，用户每次更新安全规则版本会自动加1，防止您更新的路由规则已过期，不填不考虑冲突。</li>
<li>在创建出站和入站规则（Egress 和 Ingress）时：<ul>
<li>Protocol 字段支持输入TCP, UDP, ICMP, ICMPV6, GRE, ALL。</li>
<li>CidrBlock 字段允许输入符合cidr格式标准的任意字符串。(展开)在基础网络中，如果 CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
<li>Ipv6CidrBlock 字段允许输入符合IPv6 cidr格式标准的任意字符串。(展开)在基础网络中，如果Ipv6CidrBlock 包含您的账户内的云服务器之外的设备在腾讯云的内网 IPv6，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。</li>
<li>SecurityGroupId 字段允许输入与待修改的安全组位于相同项目中的安全组 ID，包括这个安全组 ID 本身，代表安全组下所有云服务器的内网 IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个 ID 所关联的云服务器变化而变化，不需要重新修改。</li>
<li>Port 字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当 Protocol 字段是 TCP 或 UDP 时，Port 字段才被接受，即 Protocol 字段不是 TCP 或 UDP 时，Protocol 和 Port 排他关系，不允许同时输入，否则会接口报错。</li>
<li>Action 字段只允许输入 ACCEPT 或 DROP。</li>
<li>CidrBlock, Ipv6CidrBlock, SecurityGroupId, AddressTemplate 四者是排他关系，不允许同时输入，Protocol + Port 和 ServiceTemplate 二者是排他关系，不允许同时输入。</li>
<li>一次请求中只能创建单个方向的规则, 如果需要指定索引（PolicyIndex）参数, 多条规则的索引必须一致。</li>
</ul></li></ul>
     * @param {CreateSecurityGroupPoliciesRequest} req
     * @param {function(string, CreateSecurityGroupPoliciesResponse):void} cb
     * @public
     */
    CreateSecurityGroupPolicies(req, cb) {
        let resp = new CreateSecurityGroupPoliciesResponse();
        this.request("CreateSecurityGroupPolicies", req, resp, cb);
    }

    /**
     * 本接口（ModifyNetworkAclAttribute）用于修改网络ACL属性。
     * @param {ModifyNetworkAclAttributeRequest} req
     * @param {function(string, ModifyNetworkAclAttributeResponse):void} cb
     * @public
     */
    ModifyNetworkAclAttribute(req, cb) {
        let resp = new ModifyNetworkAclAttributeResponse();
        this.request("ModifyNetworkAclAttribute", req, resp, cb);
    }

    /**
     * 本接口（ResetNatGatewayConnection）用来NAT网关并发连接上限。
     * @param {ResetNatGatewayConnectionRequest} req
     * @param {function(string, ResetNatGatewayConnectionResponse):void} cb
     * @public
     */
    ResetNatGatewayConnection(req, cb) {
        let resp = new ResetNatGatewayConnectionResponse();
        this.request("ResetNatGatewayConnection", req, resp, cb);
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
     * 本接口（CreateSecurityGroupWithPolicies）用于创建新的安全组（SecurityGroup），并且可以同时添加安全组规则（SecurityGroupPolicy）。
* 每个账户下每个地域的每个项目的<a href="https://cloud.tencent.com/document/product/213/12453">安全组数量限制</a>。
* 新建的安全组的入站和出站规则默认都是全部拒绝，在创建后通常您需要再调用CreateSecurityGroupPolicies将安全组的规则设置为需要的规则。

安全组规则说明：
* Version安全组规则版本号，用户每次更新安全规则版本会自动加1，防止您更新的路由规则已过期，不填不考虑冲突。
* Protocol字段支持输入TCP, UDP, ICMP, ICMPV6, GRE, ALL。
* CidrBlock字段允许输入符合cidr格式标准的任意字符串。(展开)在基础网络中，如果CidrBlock包含您的账户内的云服务器之外的设备在腾讯云的内网IP，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。
* Ipv6CidrBlock字段允许输入符合IPv6 cidr格式标准的任意字符串。(展开)在基础网络中，如果Ipv6CidrBlock包含您的账户内的云服务器之外的设备在腾讯云的内网IPv6，并不代表此规则允许您访问这些设备，租户之间网络隔离规则优先于安全组中的内网规则。
* SecurityGroupId字段允许输入与待修改的安全组位于相同项目中的安全组ID，包括这个安全组ID本身，代表安全组下所有云服务器的内网IP。使用这个字段时，这条规则用来匹配网络报文的过程中会随着被使用的这个ID所关联的云服务器变化而变化，不需要重新修改。
* Port字段允许输入一个单独端口号，或者用减号分隔的两个端口号代表端口范围，例如80或8000-8010。只有当Protocol字段是TCP或UDP时，Port字段才被接受，即Protocol字段不是TCP或UDP时，Protocol和Port排他关系，不允许同时输入，否则会接口报错。
* Action字段只允许输入ACCEPT或DROP。
* CidrBlock, Ipv6CidrBlock, SecurityGroupId, AddressTemplate四者是排他关系，不允许同时输入，Protocol + Port和ServiceTemplate二者是排他关系，不允许同时输入。
* 一次请求中只能创建单个方向的规则, 如果需要指定索引（PolicyIndex）参数, 多条规则的索引必须一致。
     * @param {CreateSecurityGroupWithPoliciesRequest} req
     * @param {function(string, CreateSecurityGroupWithPoliciesResponse):void} cb
     * @public
     */
    CreateSecurityGroupWithPolicies(req, cb) {
        let resp = new CreateSecurityGroupWithPoliciesResponse();
        this.request("CreateSecurityGroupWithPolicies", req, resp, cb);
    }


}
module.exports = VpcClient;
